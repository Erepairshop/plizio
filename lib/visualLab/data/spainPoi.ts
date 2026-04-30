import type { POI } from "./poi";

export const spainCountry: POI[] = [
  {
    id: "ES",
    type: "country",
    parent: "EU",
    coords: [-3.7, 40.4],
    name: {"de": "Spanien", "hu": "SpanyolorszÃ¡g", "ro": "Spania", "en": "Spain"},
    image: "/geo-images/spain/spain.webp",
    description: {
      de: "Spanien ist ein Land auf der Iberischen Halbinsel, bekannt fÃ¼r seine vielfÃ¤ltige Kultur, sonnige StrÃ¤nde, leidenschaftlichen Flamenco und eine reiche imperiale Geschichte.",
      hu: "SpanyolorszÃ¡g az IbÃ©riai-fÃ©lszigeten fekvÅ‘ orszÃ¡g, amely vÃ¡ltozatos kultÃºrÃ¡jÃ¡rÃ³l, napsÃ¼tÃ¶tte strandjairÃ³l, szenvedÃ©lyes flamencÃ³jÃ¡rÃ³l Ã©s gazdag csÃ¡szÃ¡ri tÃ¶rtÃ©nelmÃ©rÅ‘l ismert.",
      ro: "Spania este o È›arÄƒ din Peninsula IbericÄƒ, cunoscutÄƒ pentru cultura sa diversÄƒ, plajele Ã®nsorite, flamenco-ul pasional È™i o bogatÄƒ istorie imperialÄƒ.",
      en: "Spain is a country on the Iberian Peninsula, known for its diverse culture, sunny beaches, passionate flamenco, and a rich imperial history."
    },
    descriptionAdvanced: {
      de: "Spanien, offiziell das KÃ¶nigreich Spanien, ist ein faszinierendes Land im SÃ¼dwesten Europas, das den grÃ¶ÃŸten Teil der Iberischen Halbinsel einnimmt. Es grenzt im Norden an Frankreich und Andorra, im Westen an Portugal und ist ansonsten vom Atlantik und dem Mittelmeer umgeben. Spanien ist weltberÃ¼hmt fÃ¼r seine auÃŸergewÃ¶hnliche kulturelle Vielfalt, die sich in den verschiedenen autonomen Gemeinschaften wie Katalonien, dem Baskenland und Andalusien widerspiegelt. Die Hauptstadt Madrid ist ein pulsierendes Zentrum fÃ¼r Kunst und Politik, beherbergt erstklassige Museen wie den Prado und beeindruckt durch ihre monumentale Architektur. Barcelona hingegen besticht durch den einzigartigen Modernismus von Antoni GaudÃ­ und seine lebendige AtmosphÃ¤re am Meer. Die spanische Geschichte ist geprÃ¤gt von der rÃ¶mischen Antike, der maurischen Herrschaft im Mittelalter und dem Zeitalter der Entdeckungen, als Spanien zu einer globalen Weltmacht aufstieg. Kulturell hat das Land Giganten wie Cervantes, VelÃ¡zquez, Goya und Picasso hervorgebracht. Kulinarisch ist Spanien eine Weltmacht; Tapas, Paella und erstklassige Weine aus Regionen wie La Rioja sind globale Botschafter der spanischen Lebensart. Die spanische Lebensfreude drÃ¼ckt sich in leidenschaftlichen Festen, dem Flamenco und einer ausgeprÃ¤gten sozialen Kultur aus. Heute ist Spanien ein modernes EU-Mitglied mit einer starken Tourismusindustrie und einer wachsenden Wirtschaft in den Bereichen erneuerbare Energien und Technologie. Ob man durch die weiÃŸen DÃ¶rfer Andalusiens wandert, die majestÃ¤tischen Gipfel der PyrenÃ¤en erkundet oder die Sonne an den StrÃ¤nden der Balearen und Kanaren genieÃŸt â€“ Spanien empfÃ¤ngt seine Besucher mit einer WÃ¤rme und einer landschaftlichen SchÃ¶nheit, die unvergesslich bleiben.",
      hu: "SpanyolorszÃ¡g, hivatalos nevÃ©n a Spanyol KirÃ¡lysÃ¡g, egy lenyÅ±gÃ¶zÅ‘ orszÃ¡g DÃ©lnyugat-EurÃ³pÃ¡ban, amely az IbÃ©riai-fÃ©lsziget legnagyobb rÃ©szÃ©t elfoglalja. Ã‰szakon FranciaorszÃ¡ggal Ã©s AndorrÃ¡val, nyugaton PortugÃ¡liÃ¡val hatÃ¡ros, egyÃ©bkÃ©nt pedig az Atlanti-Ã³ceÃ¡n Ã©s a FÃ¶ldkÃ¶zi-tenger veszi kÃ¶rÃ¼l. SpanyolorszÃ¡g vilÃ¡ghÃ­rÅ± rendkÃ­vÃ¼li kulturÃ¡lis sokszÃ­nÅ±sÃ©gÃ©rÅ‘l, amely az olyan autonÃ³m kÃ¶zÃ¶ssÃ©gekben tÃ¼krÃ¶zÅ‘dik, mint KatalÃ³nia, BaszkfÃ¶ld vagy AndalÃºzia. A fÅ‘vÃ¡ros, Madrid, a mÅ±vÃ©szet Ã©s a politika lÃ¼ktetÅ‘ kÃ¶zpontja, olyan vilÃ¡gszÃ­nvonalÃº mÃºzeumoknak ad otthont, mint a Prado, Ã©s monumentÃ¡lis Ã©pÃ­tÃ©szetÃ©vel nyÅ±gÃ¶zi le a lÃ¡togatÃ³kat. Barcelona ezzel szemben Antoni GaudÃ­ egyedÃ¼lÃ¡llÃ³ modernizmusÃ¡val Ã©s vibrÃ¡lÃ³ tengerparti hangulatÃ¡val bÅ±vÃ¶li el az utazÃ³kat. A spanyol tÃ¶rtÃ©nelmet a rÃ³mai antikvitÃ¡s, a kÃ¶zÃ©pkori mÃ³r uralom Ã©s a felfedezÃ©sek kora hatÃ¡rozta meg, amikor SpanyolorszÃ¡g globÃ¡lis vilÃ¡ghatalommÃ¡ vÃ¡lt. KulturÃ¡lis szempontbÃ³l az orszÃ¡g olyan Ã³riÃ¡sokat adott a vilÃ¡gnak, mint Cervantes, VelÃ¡zquez, Goya Ã©s Picasso. KulinÃ¡risan SpanyolorszÃ¡g vilÃ¡ghatalom; a tapas, a paella Ã©s az olyan kivÃ¡lÃ³ borok, mint a La Rioja-iak, a spanyol Ã©letmÃ³d globÃ¡lis nagykÃ¶vetei. A spanyol Ã©letÃ¶rÃ¶m a szenvedÃ©lyes Ã¼nnepekben, a flamencÃ³ban Ã©s az erÅ‘s kÃ¶zÃ¶ssÃ©gi kultÃºrÃ¡ban nyilvÃ¡nul meg. Ma SpanyolorszÃ¡g az EurÃ³pai UniÃ³ modern tagÃ¡llama, erÅ‘s turisztikai iparral, valamint nÃ¶vekvÅ‘ gazdasÃ¡ggal a megÃºjulÃ³ energia Ã©s a technolÃ³gia terÃ¼letÃ©n. AkÃ¡r AndalÃºzia fehÃ©r falvai kÃ¶zÃ¶tt sÃ©tÃ¡l valaki, akÃ¡r a Pireneusok fensÃ©ges csÃºcsait fedezi fel, vagy a BaleÃ¡r- Ã©s KanÃ¡ri-szigetek strandjain Ã©lvezi a napsÃ¼tÃ©st â€“ SpanyolorszÃ¡g olyan melegsÃ©ggel Ã©s termÃ©szeti szÃ©psÃ©ggel fogadja lÃ¡togatÃ³it, amely felejthetetlen marad.",
      ro: "Spania, oficial Regatul Spaniei, este o È›arÄƒ fascinantÄƒ din sud-vestul Europei, care ocupÄƒ cea mai mare parte a Peninsulei Iberice. Se Ã®nvecineazÄƒ la nord cu FranÈ›a È™i Andorra, la vest cu Portugalia È™i este Ã®nconjuratÄƒ Ã®n rest de Oceanul Atlantic È™i Marea MediteranÄƒ. Spania este renumitÄƒ Ã®n Ã®ntreaga lume pentru diversitatea sa culturalÄƒ extraordinarÄƒ, reflectatÄƒ Ã®n diferitele comunitÄƒÈ›i autonome precum Catalonia, Èšara Bascilor È™i Andaluzia. Capitala Madrid este un centru vibrant pentru artÄƒ È™i politicÄƒ, gÄƒzduind muzee de clasÄƒ mondialÄƒ precum Prado È™i impresionÃ¢nd prin arhitectura sa monumentalÄƒ. Barcelona, pe de altÄƒ parte, farmecÄƒ prin modernismul unic al lui Antoni GaudÃ­ È™i atmosfera sa vibrantÄƒ de la malul mÄƒrii. Istoria Spaniei este marcatÄƒ de antichitatea romanÄƒ, stÄƒpÃ¢nirea maurÄƒ din Evul Mediu È™i Epoca Descoperirilor, cÃ¢nd Spania a devenit o putere mondialÄƒ globalÄƒ. Din punct de vedere cultural, È›ara a dat naÈ™tere unor giganÈ›i precum Cervantes, VelÃ¡zquez, Goya È™i Picasso. Din punct de vedere culinar, Spania este o putere mondialÄƒ; tapas, paella È™i vinurile de primÄƒ clasÄƒ din regiuni precum La Rioja sunt ambasadori globali ai stilului de viaÈ›Äƒ spaniol. Bucuria de a trÄƒi a spaniolilor se exprimÄƒ prin festivaluri pasionale, flamenco È™i o culturÄƒ socialÄƒ pronunÈ›atÄƒ. AstÄƒzi, Spania este un membru modern al UE, cu o industrie turisticÄƒ puternicÄƒ È™i o economie Ã®n creÈ™tere Ã®n domeniile energiei regenerabile È™i tehnologiei. Fie cÄƒ vÄƒ plimbaÈ›i prin satele albe din Andaluzia, exploraÈ›i vÃ¢rfurile maiestuoase ale Pirineilor sau vÄƒ bucuraÈ›i de soare pe plajele din Insulele Baleare È™i Canare â€“ Spania Ã®È™i Ã®ntÃ¢mpinÄƒ vizitatorii cu o cÄƒldurÄƒ È™i o frumuseÈ›e peisagisticÄƒ de neuitat.",
      en: "Spain, officially the Kingdom of Spain, is a fascinating country in southwestern Europe, occupying most of the Iberian Peninsula. It borders France and Andorra to the north, Portugal to the west, and is otherwise surrounded by the Atlantic Ocean and the Mediterranean Sea. Spain is world-renowned for its extraordinary cultural diversity, reflected in its various autonomous communities such as Catalonia, the Basque Country, and Andalusia. The capital, Madrid, is a vibrant hub for art and politics, home to world-class museums like the Prado and impressive for its monumental architecture. Barcelona, meanwhile, charms with the unique modernism of Antoni GaudÃ­ and its vibrant seaside atmosphere. Spanish history is shaped by Roman antiquity, Moorish rule in the Middle Ages, and the Age of Discovery, when Spain rose to become a global superpower. Culturally, the country has produced giants such as Cervantes, VelÃ¡zquez, Goya, and Picasso. Culinarily, Spain is a world power; tapas, paella, and first-class wines from regions like La Rioja are global ambassadors of the Spanish way of life. The Spanish zest for life is expressed in passionate festivals, flamenco, and a strong social culture. Today, Spain is a modern EU member with a strong tourism industry and a growing economy in the fields of renewable energy and technology. Whether strolling through the white villages of Andalusia, exploring the majestic peaks of the Pyrenees, or enjoying the sun on the beaches of the Balearic and Canary Islandsâ€”Spain welcomes its visitors with a warmth and scenic beauty that remain unforgettable."
    },
    facts: {
      de: [
        "Hauptstadt: Madrid",
        "WÃ¤hrung: Euro",
        "BevÃ¶lkerung: ca. 48 Millionen",
        "UNESCO: Spanien hat eine der hÃ¶chsten Anzahlen an WelterbestÃ¤tten weltweit.",
        "Sprache: Spanisch (Kastilisch) ist die zweithÃ¤ufigste Muttersprache der Welt.",
        "Kultur: Der Flamenco ist ein von der UNESCO anerkanntes immaterielles Kulturerbe.",
        "Geografie: Spanien ist das einzige Land in Europa, das eine Landgrenze zu einem afrikanischen Land (Marokko) hat.",
        "Kulinarik: Spanien ist der weltweit grÃ¶ÃŸte Produzent von OlivenÃ¶l.",
        "Geschichte: Das erste moderne Buch, 'Don Quijote', wurde vom Spanier Miguel de Cervantes geschrieben.",
        "Natur: Die Kanarischen Inseln beherbergen den Teide, den hÃ¶chsten Berg Spaniens und einen der hÃ¶chsten Vulkane der Welt."
      ],
      hu: [
        "FÅ‘vÃ¡ros: Madrid",
        "PÃ©nznem: EurÃ³",
        "NÃ©pessÃ©g: kb. 48 milliÃ³",
        "UNESCO: SpanyolorszÃ¡g a vilÃ¡gon az egyik legtÃ¶bb vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­nnel rendelkezÅ‘ orszÃ¡g.",
        "Nyelv: A spanyol (kasztÃ­liai) a vilÃ¡g mÃ¡sodik leggyakoribb anyanyelve.",
        "KultÃºra: A flamenco az UNESCO Ã¡ltal elismert szellemi kulturÃ¡lis Ã¶rÃ¶ksÃ©g.",
        "FÃ¶ldrajz: SpanyolorszÃ¡g az egyetlen eurÃ³pai orszÃ¡g, amelynek szÃ¡razfÃ¶ldi hatÃ¡ra van afrikai orszÃ¡ggal (MarokkÃ³).",
        "GasztronÃ³mia: SpanyolorszÃ¡g a vilÃ¡g legnagyobb olÃ­vaolaj-termelÅ‘je.",
        "TÃ¶rtÃ©nelem: Az elsÅ‘ modern regÃ©nyt, a 'Don Quijote'-t a spanyol Miguel de Cervantes Ã­rta.",
        "TermÃ©szet: A KanÃ¡ri-szigeteken talÃ¡lhatÃ³ a Teide, SpanyolorszÃ¡g legmagasabb hegye Ã©s a vilÃ¡g egyik legmagasabb vulkÃ¡nja."
      ],
      ro: [
        "Capitala: Madrid",
        "Moneda: Euro",
        "PopulaÈ›ie: aprox. 48 milioane",
        "UNESCO: Spania are unul dintre cele mai mari numere de situri din Patrimoniul Mondial la nivel global.",
        "LimbÄƒ: Spaniola (castiliana) este a doua cea mai vorbitÄƒ limbÄƒ maternÄƒ din lume.",
        "CulturÄƒ: Flamenco este un patrimoniu cultural imaterial recunoscut de UNESCO.",
        "Geografie: Spania este singura È›arÄƒ din Europa care are o frontierÄƒ terestrÄƒ cu o È›arÄƒ africanÄƒ (Maroc).",
        "Gastronomie: Spania este cel mai mare producÄƒtor de ulei de mÄƒsline din lume.",
        "Istorie: Prima carte modernÄƒ, â€žDon Quijoteâ€, a fost scrisÄƒ de spaniolul Miguel de Cervantes.",
        "NaturÄƒ: Insulele Canare gÄƒzduiesc Teide, cel mai Ã®nalt munte din Spania È™i unul dintre cei mai Ã®nalÈ›i vulcani din lume."
      ],
      en: [
        "Capital: Madrid",
        "Currency: Euro",
        "Population: approx. 48 million",
        "UNESCO: Spain has one of the highest numbers of World Heritage Sites in the world.",
        "Language: Spanish (Castilian) is the second most spoken native language in the world.",
        "Culture: Flamenco is a UNESCO-recognized intangible cultural heritage.",
        "Geography: Spain is the only country in Europe to have a land border with an African country (Morocco).",
        "Cuisine: Spain is the world's largest producer of olive oil.",
        "History: The first modern novel, 'Don Quixote', was written by the Spaniard Miguel de Cervantes.",
        "Nature: The Canary Islands are home to Mount Teide, the highest peak in Spain and one of the highest volcanoes in the world."
      ]
    }
  }
];

export const spainRegions: POI[] = [
  {
    id: "ES-GA",
    type: "region",
    parent: "ES",
    coords: [-8.0, 42.5],
    name: {"de": "Galicien", "hu": "GalÃ­cia", "ro": "Galicia", "en": "Galicia"},
    image: "/geo-images/spain/galicia.webp",
    description: {"de": "Autonome Gemeinschaft im Nordwesten Spaniens.", "hu": "AutonÃ³m kÃ¶zÃ¶ssÃ©g SpanyolorszÃ¡g Ã©szaknyugati rÃ©szÃ©n.", "ro": "Comunitate autonomÄƒ Ã®n nord-vestul Spaniei.", "en": "Autonomous community in northwestern Spain."}
  },
  {
    id: "ES-AS",
    type: "region",
    parent: "ES",
    coords: [-6.0, 43.3],
    name: {"de": "Asturien", "hu": "AsztÃºria", "ro": "Asturia", "en": "Asturias"},
    image: "/geo-images/spain/asturias.webp",
    description: {"de": "GrÃ¼ne und gebirgige Region im Norden Spaniens.", "hu": "ZÃ¶ld Ã©s hegyvidÃ©ki rÃ©giÃ³ Ã‰szak-SpanyolorszÃ¡gban.", "ro": "Regiune verde È™i muntoasÄƒ din nordul Spaniei.", "en": "Green and mountainous region in northern Spain."}
  },
  {
    id: "ES-CB",
    type: "region",
    parent: "ES",
    coords: [-4.0, 43.2],
    name: {"de": "Kantabrien", "hu": "KantÃ¡bria", "ro": "Cantabria", "en": "Cantabria"},
    image: "/geo-images/spain/cantabria.webp",
    description: {"de": "Region an der NordkÃ¼ste Spaniens mit reicher prÃ¤historischer Kunst.", "hu": "RÃ©giÃ³ SpanyolorszÃ¡g Ã©szaki partjÃ¡n, gazdag Å‘skori mÅ±vÃ©szettel.", "ro": "Regiune pe coasta de nord a Spaniei cu artÄƒ preistoricÄƒ bogatÄƒ.", "en": "Region on the northern coast of Spain with rich prehistoric art."}
  },
  {
    id: "ES-PV",
    type: "region",
    parent: "ES",
    coords: [-2.5, 43.0],
    name: {"de": "Baskenland", "hu": "BaszkfÃ¶ld", "ro": "Èšara Bascilor", "en": "Basque Country"},
    image: "/geo-images/spain/basque-country.webp",
    description: {"de": "Region mit eigener Sprache und Kultur im Norden Spaniens.", "hu": "SajÃ¡t nyelvvel Ã©s kultÃºrÃ¡val rendelkezÅ‘ rÃ©giÃ³ Ã‰szak-SpanyolorszÃ¡gban.", "ro": "Regiune cu limbÄƒ È™i culturÄƒ proprie Ã®n nordul Spaniei.", "en": "Region with its own language and culture in northern Spain."}
  },
  {
    id: "ES-NC",
    type: "region",
    parent: "ES",
    coords: [-1.5, 42.8],
    name: {"de": "Navarra", "hu": "Navarra", "ro": "Navarra", "en": "Navarre"},
    image: "/geo-images/spain/navarre.webp",
    description: {"de": "Autonome Gemeinschaft im Norden, bekannt fÃ¼r das San FermÃ­n-Fest.", "hu": "Ã‰szaki autonÃ³m kÃ¶zÃ¶ssÃ©g, amely a San FermÃ­n fesztivÃ¡lrÃ³l ismert.", "ro": "Comunitate autonomÄƒ Ã®n nord, cunoscutÄƒ pentru festivalul San FermÃ­n.", "en": "Autonomous community in the north, known for the San FermÃ­n festival."}
  },
  {
    id: "ES-RI",
    type: "region",
    parent: "ES",
    coords: [-2.5, 42.3],
    name: {"de": "La Rioja", "hu": "La Rioja", "ro": "La Rioja", "en": "La Rioja"},
    image: "/geo-images/spain/la-rioja.webp",
    description: {"de": "Kleine Region, die weltweit fÃ¼r ihren Wein berÃ¼hmt ist.", "hu": "Kis rÃ©giÃ³, amely vilÃ¡ghÃ­rÅ± a borÃ¡rÃ³l.", "ro": "Regiune micÄƒ faimoasÄƒ Ã®n lume pentru vinul sÄƒu.", "en": "Small region world-famous for its wine."}
  },
  {
    id: "ES-AR",
    type: "region",
    parent: "ES",
    coords: [-0.5, 41.5],
    name: {"de": "Aragonien", "hu": "AragÃ³nia", "ro": "Aragon", "en": "Aragon"},
    image: "/geo-images/spain/aragon.webp",
    description: {"de": "Binnenlandregion in Nordostspanien mit vielfÃ¤ltiger Landschaft.", "hu": "BelfÃ¶ldi rÃ©giÃ³ Ã‰szakkelet-SpanyolorszÃ¡gban vÃ¡ltozatos tÃ¡jakkal.", "ro": "Regiune interioarÄƒ Ã®n nord-estul Spaniei cu peisaje diverse.", "en": "Inland region in northeastern Spain with diverse landscapes."}
  },
  {
    id: "ES-CT",
    type: "region",
    parent: "ES",
    coords: [1.5, 41.5],
    name: {"de": "Katalonien", "hu": "KatalÃ³nia", "ro": "Catalonia", "en": "Catalonia"},
    image: "/geo-images/spain/catalonia.webp",
    description: {"de": "Region im Nordosten mit starker IdentitÃ¤t und eigener Sprache.", "hu": "Ã‰szakkeleti rÃ©giÃ³ erÅ‘s identitÃ¡ssal Ã©s sajÃ¡t nyelvvel.", "ro": "Regiune Ã®n nord-est cu o identitate puternicÄƒ È™i limbÄƒ proprie.", "en": "Region in the northeast with a strong identity and its own language."}
  },
  {
    id: "ES-CL",
    type: "region",
    parent: "ES",
    coords: [-4.5, 41.5],
    name: {"de": "Kastilien und LeÃ³n", "hu": "KasztÃ­lia Ã©s LeÃ³n", "ro": "Castilia È™i LeÃ³n", "en": "Castile and LeÃ³n"},
    image: "/geo-images/spain/castile-and-le-n.webp",
    description: {"de": "Die grÃ¶ÃŸte autonome Gemeinschaft Spaniens.", "hu": "SpanyolorszÃ¡g legnagyobb autonÃ³m kÃ¶zÃ¶ssÃ©ge.", "ro": "Cea mai mare comunitate autonomÄƒ din Spania.", "en": "The largest autonomous community in Spain."}
  },
  {
    id: "ES-MD",
    type: "region",
    parent: "ES",
    coords: [-3.7, 40.5],
    name: {"de": "Madrid", "hu": "Madrid", "ro": "Madrid", "en": "Madrid"},
    image: "/geo-images/spain/madrid.webp",
    description: {"de": "Die Hauptstadtregion und das wirtschaftliche Zentrum Spaniens.", "hu": "SpanyolorszÃ¡g fÅ‘vÃ¡rosi rÃ©giÃ³ja Ã©s gazdasÃ¡gi kÃ¶zpontja.", "ro": "Regiunea capitalei È™i centrul economic al Spaniei.", "en": "The capital region and economic center of Spain."}
  },
  {
    id: "ES-CM",
    type: "region",
    parent: "ES",
    coords: [-3.0, 39.5],
    name: {"de": "Kastilien-La Mancha", "hu": "KasztÃ­lia-La Mancha", "ro": "Castilia-La Mancha", "en": "Castilla-La Mancha"},
    image: "/geo-images/spain/castilla-la-mancha.webp",
    description: {"de": "Zentralspanische Region, bekannt fÃ¼r Don Quijote.", "hu": "KÃ¶zÃ©p-spanyolorszÃ¡gi rÃ©giÃ³, Don Quijote hazÃ¡ja.", "ro": "Regiune centralÄƒ a Spaniei, cunoscutÄƒ pentru Don Quijote.", "en": "Central Spanish region, famous for Don Quixote."}
  },
  {
    id: "ES-EX",
    type: "region",
    parent: "ES",
    coords: [-6.0, 39.5],
    name: {"de": "Extremadura", "hu": "Extremadura", "ro": "Extremadura", "en": "Extremadura"},
    image: "/geo-images/spain/extremadura.webp",
    description: {"de": "Region im Westen Spaniens mit reichem rÃ¶mischen Erbe.", "hu": "SpanyolorszÃ¡g nyugati rÃ©giÃ³ja, gazdag rÃ³mai Ã¶rÃ¶ksÃ©ggel.", "ro": "Regiune din vestul Spaniei cu o bogatÄƒ moÈ™tenire romanÄƒ.", "en": "Region in western Spain with rich Roman heritage."}
  },
  {
    id: "ES-VC",
    type: "region",
    parent: "ES",
    coords: [-0.5, 39.5],
    name: {"de": "Valencia", "hu": "Valencia", "ro": "Valencia", "en": "Valencian Community"},
    image: "/geo-images/spain/valencian-community.webp",
    description: {"de": "KÃ¼stenregion im Osten, bekannt fÃ¼r Paella.", "hu": "Keleti parti rÃ©giÃ³, a paella hazÃ¡ja.", "ro": "Regiune de coastÄƒ Ã®n est, cunoscutÄƒ pentru paella.", "en": "Coastal region in the east, known for paella."}
  },
  {
    id: "ES-AN",
    type: "region",
    parent: "ES",
    coords: [-4.5, 37.5],
    name: {"de": "Andalusien", "hu": "AndalÃºzia", "ro": "Andaluzia", "en": "Andalusia"},
    image: "/geo-images/spain/andalusia.webp",
    description: {"de": "SÃ¼dlichste Region mit maurischer Architektur und Flamenco.", "hu": "A legdÃ©libb rÃ©giÃ³, mÃ³r Ã©pÃ­tÃ©szettel Ã©s flamencÃ³val.", "ro": "Cea mai sudicÄƒ regiune, cu arhitecturÄƒ maurÄƒ È™i flamenco.", "en": "Southernmost region with Moorish architecture and flamenco."}
  },
  {
    id: "ES-MU",
    type: "region",
    parent: "ES",
    coords: [-1.5, 38.0],
    name: {"de": "Murcia", "hu": "Murcia", "ro": "Murcia", "en": "Murcia"},
    image: "/geo-images/spain/murcia.webp",
    description: {"de": "Region im SÃ¼dosten, bekannt fÃ¼r Landwirtschaft und StrÃ¤nde.", "hu": "DÃ©lkeleti rÃ©giÃ³, mezÅ‘gazdasÃ¡gÃ¡rÃ³l Ã©s strandjairÃ³l ismert.", "ro": "Regiune Ã®n sud-est, cunoscutÄƒ pentru agriculturÄƒ È™i plaje.", "en": "Southeastern region, known for agriculture and beaches."}
  },
  {
    id: "ES-IB",
    type: "region",
    parent: "ES",
    coords: [3.0, 39.5],
    name: {"de": "Balearen", "hu": "BaleÃ¡r-szigetek", "ro": "Insulele Baleare", "en": "Balearic Islands"},
    image: "/geo-images/spain/balearic-islands.webp",
    description: {"de": "Inselgruppe im Mittelmeer.", "hu": "Szigetcsoport a FÃ¶ldkÃ¶zi-tengeren.", "ro": "Arhipelag Ã®n Marea MediteranÄƒ.", "en": "Archipelago in the Mediterranean Sea."}
  },
  {
    id: "ES-CN",
    type: "region",
    parent: "ES",
    coords: [-15.5, 28.0],
    name: {"de": "Kanarische Inseln", "hu": "KanÃ¡ri-szigetek", "ro": "Insulele Canare", "en": "Canary Islands"},
    image: "/geo-images/spain/canary-islands.webp",
    description: {"de": "Inselgruppe im Atlantischen Ozean vor der KÃ¼ste Afrikas.", "hu": "Szigetcsoport az Atlanti-Ã³ceÃ¡nban Afrika partjainÃ¡l.", "ro": "Arhipelag Ã®n Oceanul Atlantic Ã®n largul coastei Africii.", "en": "Archipelago in the Atlantic Ocean off the coast of Africa."}
  }
];

export const spainCities: POI[] = [
  {
    id: "es-madrid", type: "city", parent: "ES-MD", coords: [-3.7038, 40.4168],
    name: {"de": "Madrid", "hu": "Madrid", "ro": "Madrid", "en": "Madrid"},
    description: {
      de: "Madrid ist die Hauptstadt Spaniens, eine pulsierende Metropole im Herzen des Landes, bekannt fÃ¼r ihre erstklassigen Kunstmuseen, den prachtvollen KÃ¶nigspalast und ihre lebendige Tapas-Kultur.",
      hu: "Madrid SpanyolorszÃ¡g fÅ‘vÃ¡rosa, az orszÃ¡g szÃ­vÃ©ben fekvÅ‘ lÃ¼ktetÅ‘ metropolisz, amely vilÃ¡gszÃ­nvonalÃº mÅ±vÃ©szeti mÃºzeumairÃ³l, pompÃ¡s KirÃ¡lyi PalotÃ¡jÃ¡rÃ³l Ã©s Ã©lÃ©nk tapas-kultÃºrÃ¡jÃ¡rÃ³l ismert.",
      ro: "Madrid este capitala Spaniei, o metropolÄƒ vibrantÄƒ Ã®n inima È›Äƒrii, cunoscutÄƒ pentru muzeele sale de artÄƒ de primÄƒ clasÄƒ, magnificul Palat Regal È™i cultura sa vibrantÄƒ de tapas.",
      en: "Madrid is the capital of Spain, a vibrant metropolis in the heart of the country, known for its world-class art museums, the magnificent Royal Palace, and its lively tapas culture."
    },
    descriptionAdvanced: {          "de": "Madrid ist die pulsierende Hauptstadt Spaniens und liegt im Herzen der Iberischen Halbinsel. Die Stadt ist weltberÃ¼hmt fÃ¼r ihre reiche Kunstgeschichte, insbesondere fÃ¼r den Paseo del Arte mit seinen erstklassigen Museen. Madrid bietet eine perfekte Mischung aus historischer Architektur, wie dem prachtvollen KÃ¶nigspalast, und modernem urbanen Leben. Die lebendigen PlÃ¤tze, wie die Puerta del Sol und die Plaza Mayor, sind das Zentrum des gesellschaftlichen Lebens. Besucher lieben die Stadt auch fÃ¼r ihre authentische Tapas-Kultur und das aufregende Nachtleben.",
          "hu": "Madrid SpanyolorszÃ¡g lÃ¼ktetÅ‘ fÅ‘vÃ¡rosa, amely az IbÃ©riai-fÃ©lsziget szÃ­vÃ©ben fekszik. A vÃ¡ros vilÃ¡gszerte ismert gazdag mÅ±vÃ©szettÃ¶rtÃ©netÃ©rÅ‘l, kÃ¼lÃ¶nÃ¶sen a Paseo del Arte kivÃ¡lÃ³ mÃºzeumairÃ³l. Madrid a tÃ¶rtÃ©nelmi Ã©pÃ­tÃ©szet, pÃ©ldÃ¡ul a pompÃ¡s KirÃ¡lyi Palota Ã©s a modern vÃ¡rosi Ã©let tÃ¶kÃ©letes keverÃ©kÃ©t kÃ­nÃ¡lja. Az Ã©lÃ©nk terek, mint a Puerta del Sol Ã©s a Plaza Mayor, a tÃ¡rsadalmi Ã©let kÃ¶zpontjai. A lÃ¡togatÃ³k a vÃ¡rost az autentikus tapas-kultÃºrÃ¡ja Ã©s az izgalmas Ã©jszakai Ã©lete miatt is imÃ¡djÃ¡k.",
          "ro": "Madrid este capitala vibrantÄƒ a Spaniei, situatÄƒ Ã®n inima Peninsulei Iberice. OraÈ™ul este renumit Ã®n Ã®ntreaga lume pentru istoria sa bogatÄƒ Ã®n artÄƒ, Ã®n special pentru Paseo del Arte cu muzeele sale de primÄƒ clasÄƒ. Madrid oferÄƒ un amestec perfect de arhitecturÄƒ istoricÄƒ, cum ar fi magnificul Palat Regal, È™i viaÈ›Äƒ urbanÄƒ modernÄƒ. PieÈ›ele pline de viaÈ›Äƒ, cum ar fi Puerta del Sol È™i Plaza Mayor, sunt centrul vieÈ›ii sociale. Vizitatorii iubesc oraÈ™ul È™i pentru cultura sa autenticÄƒ de tapas È™i viaÈ›a de noapte interesantÄƒ.",
          "en": "Madrid is the vibrant capital of Spain, located in the heart of the Iberian Peninsula. The city is world-renowned for its rich art history, particularly the Paseo del Arte with its world-class museums. Madrid offers a perfect blend of historic architecture, such as the magnificent Royal Palace, and modern urban life. Lively squares like the Puerta del Sol and Plaza Mayor are the center of social life. Visitors also love the city for its authentic tapas culture and exciting nightlife."
    },
    facts: {
          "de": [
                "Es ist die drittgrÃ¶ÃŸte Stadt in der EuropÃ¤ischen Union.",
                "Beherbergt das berÃ¼hmte Museo del Prado mit Meisterwerken von VelÃ¡zquez und Goya.",
                "Der Palacio Real ist der flÃ¤chenmÃ¤ÃŸig grÃ¶ÃŸte kÃ¶nigliche Palast in Europa.",
                "Madrid liegt auf einer Hochebene und ist die am hÃ¶chsten gelegene Hauptstadt Europas.",
                "Der Retiro-Park bietet eine grÃ¼ne Oase mit einem groÃŸen kÃ¼nstlichen See.",
                "Die Stadt ist Heimat der weltbekannten FuÃŸballvereine Real Madrid und AtlÃ©tico Madrid.",
                "Die Puerta del Sol ist der symbolische Mittelpunkt (Kilometer Null) Spaniens.",
                "Madrid hat eines der grÃ¶ÃŸten U-Bahn-Netze in Europa."
          ],
          "hu": [
                "Ez az EurÃ³pai UniÃ³ harmadik legnagyobb vÃ¡rosa.",
                "Itt talÃ¡lhatÃ³ a hÃ­res Prado MÃºzeum VelÃ¡zquez Ã©s Goya remekmÅ±veivel.",
                "A Palacio Real a legnagyobb alapterÃ¼letÅ± kirÃ¡lyi palota EurÃ³pÃ¡ban.",
                "Madrid egy fennsÃ­kon fekszik, Ã©s EurÃ³pa legmagasabban fekvÅ‘ fÅ‘vÃ¡rosa.",
                "A Retiro park zÃ¶ld oÃ¡zist kÃ­nÃ¡l egy nagy mestersÃ©ges tÃ³val.",
                "A vÃ¡ros a vilÃ¡ghÃ­rÅ± Real Madrid Ã©s AtlÃ©tico Madrid futballklubok otthona.",
                "A Puerta del Sol SpanyolorszÃ¡g szimbolikus kÃ¶zÃ©ppontja (nulladik kilomÃ©terkÅ‘).",
                "Madrid rendelkezik EurÃ³pa egyik legnagyobb metrÃ³hÃ¡lÃ³zatÃ¡val."
          ],
          "ro": [
                "Este al treilea oraÈ™ ca mÄƒrime din Uniunea EuropeanÄƒ.",
                "GÄƒzduieÈ™te faimosul Muzeu Prado cu capodopere de VelÃ¡zquez È™i Goya.",
                "Palacio Real este cel mai mare palat regal din Europa ca suprafaÈ›Äƒ.",
                "Madrid este situat pe un platou È™i este cea mai Ã®naltÄƒ capitalÄƒ din Europa.",
                "Parcul Retiro oferÄƒ o oazÄƒ de verdeaÈ›Äƒ cu un mare lac artificial.",
                "OraÈ™ul este casa renumitelor cluburi de fotbal Real Madrid È™i AtlÃ©tico Madrid.",
                "Puerta del Sol este centrul simbolic (kilometrul zero) al Spaniei.",
                "Madrid are una dintre cele mai mari reÈ›ele de metrou din Europa."
          ],
          "en": [
                "It is the third-largest city in the European Union.",
                "Houses the famous Prado Museum featuring masterpieces by VelÃ¡zquez and Goya.",
                "The Palacio Real is the largest royal palace in Europe by floor area.",
                "Madrid is situated on a plateau and is the highest capital city in Europe.",
                "El Retiro Park offers a green oasis complete with a large artificial lake.",
                "The city is home to the world-renowned football clubs Real Madrid and AtlÃ©tico Madrid.",
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
      de: "Barcelona ist die Hauptstadt Kataloniens, eine pulsierende Metropole am Mittelmeer, bekannt fÃ¼r die einzigartige Architektur von Antoni GaudÃ­, das Gotische Viertel und ihre lebendigen StadtstrÃ¤nde.",
      hu: "Barcelona KatalÃ³nia fÅ‘vÃ¡rosa, a FÃ¶ldkÃ¶zi-tenger partjÃ¡n fekvÅ‘ lÃ¼ktetÅ‘ metropolisz, amely Antoni GaudÃ­ egyedÃ¼lÃ¡llÃ³ Ã©pÃ­tÃ©szetÃ©rÅ‘l, a GÃ³tikus negyedrÅ‘l Ã©s nyÃ¼zsgÅ‘ vÃ¡rosi strandjairÃ³l ismert.",
      ro: "Barcelona este capitala Cataloniei, o metropolÄƒ vibrantÄƒ la Marea MediteranÄƒ, cunoscutÄƒ pentru arhitectura unicÄƒ a lui Antoni GaudÃ­, Cartierul Gotic È™i plajele sale urbane pline de viaÈ›Äƒ.",
      en: "Barcelona is the capital of Catalonia, a vibrant metropolis on the Mediterranean, known for the unique architecture of Antoni GaudÃ­, the Gothic Quarter, and its lively urban beaches."
    },
    descriptionAdvanced: {          "de": "Barcelona ist die faszinierende Hauptstadt Kataloniens und liegt direkt an der sonnigen MittelmeerkÃ¼ste. Die Stadt ist ein architektonisches Wunderwerk, maÃŸgeblich geprÃ¤gt durch die unverkennbaren Werke von Antoni GaudÃ­. Sie vereint geschickt mittelalterliche Viertel wie das Gotische Viertel mit moderner Stadtplanung. Barcelona bietet nicht nur Weltklasse-Kultur und Kunst, sondern auch lebhafte StadtstrÃ¤nde und eine exzellente Gastronomie. Diese einzigartige Kombination aus Strandleben und Metropolenflair macht sie zu einem der beliebtesten Reiseziele Europas.",
          "hu": "Barcelona KatalÃ³nia lenyÅ±gÃ¶zÅ‘ fÅ‘vÃ¡rosa, amely kÃ¶zvetlenÃ¼l a napfÃ©nyes FÃ¶ldkÃ¶zi-tenger partjÃ¡n fekszik. A vÃ¡ros Ã©pÃ­tÃ©szeti csoda, amelyet jelentÅ‘sen meghatÃ¡roznak Antoni GaudÃ­ Ã¶sszetÃ©veszthetetlen alkotÃ¡sai. Ãœgyesen Ã¶tvÃ¶zi a kÃ¶zÃ©pkori negyedeket, mint a GÃ³tikus negyed, a modern vÃ¡rostervezÃ©ssel. Barcelona nemcsak vilÃ¡gklasszis kultÃºrÃ¡t Ã©s mÅ±vÃ©szetet kÃ­nÃ¡l, hanem nyÃ¼zsgÅ‘ vÃ¡rosi strandokat Ã©s kivÃ¡lÃ³ gasztronÃ³miÃ¡t is. A tengerparti Ã©let Ã©s a metropolisz hangulatÃ¡nak ez az egyedÃ¼lÃ¡llÃ³ kombinÃ¡ciÃ³ja EurÃ³pa egyik legnÃ©pszerÅ±bb Ãºti cÃ©ljÃ¡vÃ¡ teszi.",
          "ro": "Barcelona este capitala fascinantÄƒ a Cataloniei, situatÄƒ chiar pe coasta Ã®nsoritÄƒ a MÄƒrii Mediterane. OraÈ™ul este o minune arhitecturalÄƒ, influenÈ›at semnificativ de lucrÄƒrile inconfundabile ale lui Antoni GaudÃ­. CombinÄƒ cu pricepere cartierele medievale, cum ar fi Cartierul Gotic, cu planificarea urbanÄƒ modernÄƒ. Barcelona oferÄƒ nu doar culturÄƒ È™i artÄƒ de talie mondialÄƒ, ci È™i plaje urbane pline de viaÈ›Äƒ È™i o gastronomie excelentÄƒ. AceastÄƒ combinaÈ›ie unicÄƒ de viaÈ›Äƒ la plajÄƒ È™i fler metropolitan o face una dintre cele mai populare destinaÈ›ii din Europa.",
          "en": "Barcelona is the fascinating capital of Catalonia, located right on the sunny Mediterranean coast. The city is an architectural marvel, heavily influenced by the unmistakable works of Antoni GaudÃ­. It cleverly combines medieval neighborhoods like the Gothic Quarter with modern urban planning. Barcelona offers not only world-class culture and art but also lively city beaches and excellent gastronomy. This unique combination of beach life and metropolitan flair makes it one of the most popular destinations in Europe."
    },
    facts: {
          "de": [
                "BerÃ¼hmt fÃ¼r die noch unvollendete Basilika Sagrada FamÃ­lia von Antoni GaudÃ­.",
                "Der Park GÃ¼ell bietet bunte Mosaike und einen tollen Blick Ã¼ber die Stadt.",
                "Las Ramblas ist die bekannteste Flaniermeile, die zum Hafen fÃ¼hrt.",
                "Die Stadt hat mehrere Kilometer an kÃ¼nstlich angelegten SandstrÃ¤nden.",
                "Das Camp Nou ist das grÃ¶ÃŸte FuÃŸballstadion Europas und Heimat des FC Barcelona.",
                "Das Gotische Viertel ist eines der besterhaltenen mittelalterlichen Stadtzentren Europas.",
                "Barcelona war der stolze Gastgeber der Olympischen Sommerspiele 1992.",
                "Die katalanische KÃ¼che glÃ¤nzt mit Gerichten wie FideuÃ  und Crema Catalana."
          ],
          "hu": [
                "HÃ­res Antoni GaudÃ­ mÃ©g befejezetlen bazilikÃ¡jÃ¡rÃ³l, a Sagrada FamÃ­liÃ¡rÃ³l.",
                "A GÃ¼ell park szÃ­nes mozaikokat Ã©s nagyszerÅ± kilÃ¡tÃ¡st kÃ­nÃ¡l a vÃ¡rosra.",
                "A Las Ramblas a legismertebb sÃ©tÃ¡lÃ³utca, amely a kikÃ¶tÅ‘hÃ¶z vezet.",
                "A vÃ¡ros tÃ¶bb kilomÃ©ternyi mestersÃ©gesen kialakÃ­tott homokos stranddal rendelkezik.",
                "A Camp Nou EurÃ³pa legnagyobb futballstadionja Ã©s az FC Barcelona otthona.",
                "A GÃ³tikus negyed EurÃ³pa egyik legjobb Ã¡llapotban fennmaradt kÃ¶zÃ©pkori vÃ¡roskÃ¶zpontja.",
                "Barcelona volt az 1992-es nyÃ¡ri olimpiai jÃ¡tÃ©kok bÃ¼szke hÃ¡zigazdÃ¡ja.",
                "A katalÃ¡n konyha olyan Ã©telekkel jeleskedik, mint a fideuÃ  Ã©s a crema catalana."
          ],
          "ro": [
                "RenumitÄƒ pentru bazilica Ã®ncÄƒ neterminatÄƒ Sagrada FamÃ­lia a lui Antoni GaudÃ­.",
                "Parcul GÃ¼ell oferÄƒ mozaicuri colorate È™i o vedere excelentÄƒ asupra oraÈ™ului.",
                "Las Ramblas este cea mai faimoasÄƒ promenadÄƒ, care duce spre port.",
                "OraÈ™ul are cÃ¢È›iva kilometri de plaje artificiale cu nisip.",
                "Camp Nou este cel mai mare stadion de fotbal din Europa È™i casa FC Barcelona.",
                "Cartierul Gotic este unul dintre cele mai bine conservate centre medievale din Europa.",
                "Barcelona a fost gazda mÃ¢ndrÄƒ a Jocurilor Olimpice de varÄƒ din 1992.",
                "BucÄƒtÄƒria catalanÄƒ strÄƒluceÈ™te cu preparate precum fideuÃ  È™i crema catalana."
          ],
          "en": [
                "Famous for Antoni GaudÃ­'s still unfinished Sagrada FamÃ­lia basilica.",
                "Park GÃ¼ell features colorful mosaics and great views over the city.",
                "Las Ramblas is the most famous pedestrian street leading to the port.",
                "The city boasts several kilometers of artificially created sandy beaches.",
                "Camp Nou is the largest football stadium in Europe and home to FC Barcelona.",
                "The Gothic Quarter is one of the best-preserved medieval city centers in Europe.",
                "Barcelona was the proud host of the 1992 Summer Olympic Games.",
                "Catalan cuisine shines with dishes such as fideuÃ  and crema catalana."
          ]
    },
    image: "/geo-images/spain/barcelona.webp",
    
  },
  {
    id: "es-valencia", type: "city", parent: "ES-VC", coords: [-0.3763, 39.4699],
    name: {"de": "Valencia", "hu": "Valencia", "ro": "Valencia", "en": "Valencia"},
    
    description: {
          "de": "Valencia ist Spaniens drittgrÃ¶ÃŸte Stadt und verbindet historischen Charme auf wunderbare Weise mit futuristischer Architektur. Sie liegt an der MittelmeerkÃ¼ste und profitiert von einem sonnigen Klima und ausgedehnten SandstrÃ¤nden. Das weltberÃ¼hmte Gericht Paella hat hier seinen Ursprung und ist fester Bestandteil der lokalen IdentitÃ¤t. Im Herzen der Stadt verlÃ¤uft der Turia-Park, ein grÃ¼ner Streifen im ausgetrockneten Flussbett, der Sportler und SpaziergÃ¤nger anzieht. Valencia ist auch bekannt fÃ¼r das spektakulÃ¤re FrÃ¼hlingsfest Las Fallas, bei dem riesige Skulpturen verbrannt werden.",
          "hu": "Valencia SpanyolorszÃ¡g harmadik legnagyobb vÃ¡rosa, amely csodÃ¡latosan Ã¶tvÃ¶zi a tÃ¶rtÃ©nelmi bÃ¡jokat a futurisztikus Ã©pÃ­tÃ©szettel. A FÃ¶ldkÃ¶zi-tenger partjÃ¡n fekszik, napos Ã©ghajlattal Ã©s kiterjedt homokos strandokkal rendelkezik. A vilÃ¡ghÃ­rÅ± paella Ã©tel innen szÃ¡rmazik, Ã©s a helyi identitÃ¡s szerves rÃ©sze. A vÃ¡ros szÃ­vÃ©ben hÃºzÃ³dik a Turia park, egy zÃ¶ld sÃ¡v a kiszÃ¡radt folyÃ³mederben, amely vonzza a sportolÃ³kat Ã©s a sÃ©tÃ¡lÃ³kat. Valencia ismert a lÃ¡tvÃ¡nyos Las Fallas tavaszi fesztivÃ¡lrÃ³l is, ahol hatalmas szobrokat Ã©getnek el.",
          "ro": "Valencia este al treilea oraÈ™ ca mÄƒrime din Spania È™i combinÄƒ minunat farmecul istoric cu arhitectura futuristÄƒ. Este situat pe coasta MÄƒrii Mediterane È™i beneficiazÄƒ de un climat Ã®nsorit È™i plaje Ã®ntinse cu nisip. Renumitul fel de mÃ¢ncare paella este originar de aici È™i este o parte integrantÄƒ a identitÄƒÈ›ii locale. ÃŽn inima oraÈ™ului se aflÄƒ Parcul Turia, o fÃ¢È™ie verde Ã®n albia secatÄƒ a rÃ¢ului, care atrage sportivi È™i plimbÄƒreÈ›i. Valencia este cunoscutÄƒ È™i pentru spectaculosul festival de primÄƒvarÄƒ Las Fallas, unde sunt arse sculpturi uriaÈ™e.",
          "en": "Valencia is Spain's third-largest city, beautifully blending historical charm with futuristic architecture. Located on the Mediterranean coast, it benefits from a sunny climate and extensive sandy beaches. The world-famous dish paella originated here and is an integral part of the local identity. In the heart of the city runs the Turia Park, a green ribbon in the dried-up riverbed that attracts athletes and walkers. Valencia is also known for the spectacular Las Fallas spring festival, where giant sculptures are burned."
    },
    facts: {
          "de": [
                "Heimat der avantgardistischen Stadt der KÃ¼nste und Wissenschaften.",
                "Das historische Zentrum beherbergt die SeidenbÃ¶rse La Lonja de la Seda.",
                "Die Paella Valenciana wird traditionell mit Kaninchen, Huhn und Bohnen zubereitet.",
                "Der Kathedrale von Valencia wird nachgesagt, den echten Heiligen Gral zu beherbergen.",
                "Das OceanogrÃ fic in Valencia ist das grÃ¶ÃŸte Aquarium Europas.",
                "Der Turia-Park ist mit Ã¼ber 9 Kilometern LÃ¤nge einer der grÃ¶ÃŸten Stadtparks Spaniens.",
                "Das Las Fallas Fest ist als UNESCO-immaterielles Kulturerbe anerkannt.",
                "Die lebhafte Markthalle Mercado Central gilt als Meisterwerk des Modernismus."
          ],
          "hu": [
                "A futurisztikus MÅ±vÃ©szetek Ã©s TudomÃ¡nyok VÃ¡rosÃ¡nak otthona.",
                "A tÃ¶rtÃ©nelmi kÃ¶zpontban talÃ¡lhatÃ³ a La Lonja de la Seda SelyembÃ¶rze.",
                "A Paella Valenciana hagyomÃ¡nyosan nyÃºllal, csirkÃ©vel Ã©s babbal kÃ©szÃ¼l.",
                "A valenciai katedrÃ¡lisrÃ³l Ãºgy tartjÃ¡k, hogy ott Å‘rzik az igazi Szent GrÃ¡lt.",
                "A valenciai OceanogrÃ fic EurÃ³pa legnagyobb akvÃ¡riuma.",
                "A tÃ¶bb mint 9 kilomÃ©ter hosszÃº Turia park SpanyolorszÃ¡g egyik legnagyobb vÃ¡rosi parkja.",
                "A Las Fallas fesztivÃ¡lt az UNESCO szellemi kulturÃ¡lis Ã¶rÃ¶ksÃ©gkÃ©nt ismeri el.",
                "A nyÃ¼zsgÅ‘ Mercado Central vÃ¡sÃ¡rcsarnok a modernizmus remekmÅ±ve."
          ],
          "ro": [
                "GÄƒzduieÈ™te avangardistul OraÈ™ al Artelor È™i È˜tiinÈ›elor.",
                "Centrul istoric adÄƒposteÈ™te Bursa de MÄƒtase La Lonja de la Seda.",
                "Paella Valenciana este preparatÄƒ tradiÈ›ional cu iepure, pui È™i fasole.",
                "Se spune cÄƒ Catedrala din Valencia adÄƒposteÈ™te adevÄƒratul SfÃ¢nt Graal.",
                "OceanogrÃ fic din Valencia este cel mai mare acvariu din Europa.",
                "Cu o lungime de peste 9 kilometri, Parcul Turia este unul dintre cele mai mari parcuri urbane din Spania.",
                "Festivalul Las Fallas este recunoscut ca patrimoniu cultural imaterial UNESCO.",
                "PiaÈ›a plinÄƒ de viaÈ›Äƒ Mercado Central este consideratÄƒ o capodoperÄƒ a modernismului."
          ],
          "en": [
                "Home to the avant-garde City of Arts and Sciences.",
                "The historic center houses the La Lonja de la Seda Silk Exchange.",
                "Paella Valenciana is traditionally prepared with rabbit, chicken, and beans.",
                "The Valencia Cathedral is said to house the authentic Holy Grail.",
                "The OceanogrÃ fic in Valencia is the largest aquarium in Europe.",
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
          "de": "Sevilla, die Hauptstadt Andalusiens, ist das schlagende Herz der sÃ¼dspanischen Kultur. Die Stadt ist der Geburtsort des Flamenco und fasziniert mit einer Architektur, die maurische und christliche EinflÃ¼sse meisterhaft vereint. Die engen, gewundenen Gassen des Barrio Santa Cruz laden zum Erkunden ein, wÃ¤hrend der Duft von OrangenblÃ¼ten die Luft erfÃ¼llt. Sevilla ist auch bekannt fÃ¼r seine epischen Osterprozessionen und die farbenfrohe Feria de Abril. Die Hitze im Sommer ist legendÃ¤r, doch die lebhafte AtmosphÃ¤re der Stadt zieht das ganze Jahr Ã¼ber Besucher in ihren Bann.",
          "hu": "Sevilla, AndalÃºzia fÅ‘vÃ¡rosa, a dÃ©l-spanyol kultÃºra lÃ¼ktetÅ‘ szÃ­ve. A vÃ¡ros a flamenco szÃ¼lÅ‘helye, Ã©s olyan Ã©pÃ­tÃ©szettel nyÅ±gÃ¶z le, amely mesterien Ã¶tvÃ¶zi a mÃ³r Ã©s a keresztÃ©ny hatÃ¡sokat. A Barrio Santa Cruz szÅ±k, kanyargÃ³s utcÃ¡i felfedezÃ©sre hÃ­vnak, mikÃ¶zben a narancsvirÃ¡g illata betÃ¶lti a levegÅ‘t. Sevilla hÃ­res az epikus hÃºsvÃ©ti kÃ¶rmeneteirÅ‘l Ã©s a szÃ­npompÃ¡s Feria de Abril fesztivÃ¡lrÃ³l is. A nyÃ¡ri hÅ‘sÃ©g legendÃ¡s, de a vÃ¡ros nyÃ¼zsgÅ‘ atmoszfÃ©rÃ¡ja egÃ©sz Ã©vben rabul ejti a lÃ¡togatÃ³kat.",
          "ro": "Sevilia, capitala Andaluziei, este inima care bate a culturii spaniole de sud. OraÈ™ul este locul de naÈ™tere al flamenco-ului È™i fascineazÄƒ cu o arhitecturÄƒ care combinÄƒ cu mÄƒiestrie influenÈ›ele maure È™i creÈ™tine. StrÄƒzile Ã®nguste È™i È™erpuite din Barrio Santa Cruz invitÄƒ la explorare, Ã®n timp ce parfumul florilor de portocal umple aerul. Sevilia este, de asemenea, cunoscutÄƒ pentru procesiunile sale epice de PaÈ™te È™i pentru colorata Feria de Abril. CÄƒldura verii este legendarÄƒ, dar atmosfera plinÄƒ de viaÈ›Äƒ a oraÈ™ului captiveazÄƒ vizitatorii pe tot parcursul anului.",
          "en": "Seville, the capital of Andalusia, is the beating heart of southern Spanish culture. The city is the birthplace of flamenco and fascinates with architecture that masterfully combines Moorish and Christian influences. The narrow, winding streets of the Barrio Santa Cruz invite exploration, while the scent of orange blossoms fills the air. Seville is also known for its epic Easter processions and the colorful Feria de Abril. The summer heat is legendary, yet the lively atmosphere of the city captivates visitors year-round."
    },
    facts: {
          "de": [
                "Die Kathedrale von Sevilla ist die grÃ¶ÃŸte gotische Kathedrale der Welt.",
                "Der AlcÃ¡zar von Sevilla ist ein atemberaubender kÃ¶niglicher Palast im MudÃ©jar-Stil.",
                "Der Giralda-Turm, einst ein Minarett, ist das Wahrzeichen der Stadt.",
                "Das Barrio Santa Cruz war das ehemalige jÃ¼dische Viertel von Sevilla.",
                "Die Plaza de EspaÃ±a ist ein monumentaler, halbrunder Platz, erbaut fÃ¼r die Expo 1929.",
                "Sevilla liegt am schiffbaren Fluss Guadalquivir.",
                "Das Grab von Christoph Kolumbus befindet sich in der Kathedrale.",
                "Tapas wie JamÃ³n IbÃ©rico und Salmorejo sind hier allgegenwÃ¤rtig."
          ],
          "hu": [
                "A sevillai katedrÃ¡lis a vilÃ¡g legnagyobb gÃ³tikus katedrÃ¡lisa.",
                "A sevillai AlcÃ¡zar egy lÃ©legzetelÃ¡llÃ­tÃ³, mudÃ©jar stÃ­lusÃº kirÃ¡lyi palota.",
                "A Giralda torony, egykori minaret, a vÃ¡ros jelkÃ©pe.",
                "A Barrio Santa Cruz Sevilla egykori zsidÃ³ negyede volt.",
                "A Plaza de EspaÃ±a egy monumentÃ¡lis, fÃ©lkÃ¶r alakÃº tÃ©r, amely az 1929-es expÃ³ra Ã©pÃ¼lt.",
                "Sevilla a hajÃ³zhatÃ³ Guadalquivir folyÃ³ partjÃ¡n fekszik.",
                "Kolumbusz KristÃ³f sÃ­rja a katedrÃ¡lisban talÃ¡lhatÃ³.",
                "Az olyan tapasok, mint a JamÃ³n IbÃ©rico Ã©s a Salmorejo, itt mindennaposak."
          ],
          "ro": [
                "Catedrala din Sevilia este cea mai mare catedralÄƒ goticÄƒ din lume.",
                "AlcÃ¡zarul din Sevilia este un palat regal uluitor Ã®n stil MudÃ©jar.",
                "Turnul Giralda, odinioarÄƒ minaret, este reperul oraÈ™ului.",
                "Barrio Santa Cruz a fost fostul cartier evreiesc din Sevilia.",
                "Plaza de EspaÃ±a este o piaÈ›Äƒ monumentalÄƒ, semicircularÄƒ, construitÄƒ pentru ExpoziÈ›ia din 1929.",
                "Sevilia este situatÄƒ pe rÃ¢ul navigabil Guadalquivir.",
                "MormÃ¢ntul lui Cristofor Columb se aflÄƒ Ã®n catedralÄƒ.",
                "Tapas precum JamÃ³n IbÃ©rico È™i Salmorejo sunt omniprezente aici."
          ],
          "en": [
                "Seville Cathedral is the largest Gothic cathedral in the world.",
                "The AlcÃ¡zar of Seville is a breathtaking royal palace in the MudÃ©jar style.",
                "The Giralda tower, once a minaret, is the city's iconic landmark.",
                "The Barrio Santa Cruz was the former Jewish quarter of Seville.",
                "The Plaza de EspaÃ±a is a monumental, semicircular square built for the 1929 Expo.",
                "Seville is situated on the navigable Guadalquivir River.",
                "The tomb of Christopher Columbus is located inside the cathedral.",
                "Tapas such as JamÃ³n IbÃ©rico and Salmorejo are ubiquitous here."
          ]
    },
    image: "/geo-images/spain/seville.webp",
    
  },
  {
    id: "es-zaragoza", type: "city", parent: "ES-AR", coords: [-0.8877, 41.6497],
    name: {"de": "Zaragoza", "hu": "Zaragoza", "ro": "Zaragoza", "en": "Zaragoza"},
    
    description: {
          "de": "Zaragoza ist eine faszinierende historische Stadt, die strategisch gÃ¼nstig zwischen Madrid und Barcelona am Ufer des Ebro liegt. Die Stadt ist ein Schmelztiegel der Kulturen und spiegelt Ã¼ber 2000 Jahre Geschichte wider, von rÃ¶mischen Ruinen bis zu islamischer und christlicher Architektur. Ihr bekanntestes Wahrzeichen ist die beeindruckende Basilika Nuestra SeÃ±ora del Pilar, die Pilger aus aller Welt anzieht. Zaragoza bietet eine authentische spanische Erfahrung abseits des Massentourismus. Die lebhafte Tapas-Szene im El Tubo-Viertel ist ein Traum fÃ¼r jeden Feinschmecker.",
          "hu": "Zaragoza egy lenyÅ±gÃ¶zÅ‘ tÃ¶rtÃ©nelmi vÃ¡ros, amely stratÃ©giailag kivÃ¡lÃ³ helyen, Madrid Ã©s Barcelona kÃ¶zÃ¶tt, az Ebro folyÃ³ partjÃ¡n fekszik. A vÃ¡ros a kultÃºrÃ¡k olvasztÃ³tÃ©gelye, amely tÃ¶bb mint 2000 Ã©v tÃ¶rtÃ©nelmÃ©t tÃ¼krÃ¶zi, a rÃ³mai romoktÃ³l kezdve az iszlÃ¡m Ã©s keresztÃ©ny Ã©pÃ­tÃ©szetig. Legismertebb nevezetessÃ©ge a lenyÅ±gÃ¶zÅ‘ Nuestra SeÃ±ora del Pilar bazilika, amely a vilÃ¡g minden tÃ¡jÃ¡rÃ³l vonzza a zarÃ¡ndokokat. Zaragoza hiteles spanyol Ã©lmÃ©nyt nyÃºjt, tÃ¡vol a tÃ¶megturizmustÃ³l. Az El Tubo negyed pezsgÅ‘ tapas-kÃ­nÃ¡lata minden Ã­nyenc Ã¡lma.",
          "ro": "Zaragoza este un oraÈ™ istoric fascinant, situat strategic Ã®ntre Madrid È™i Barcelona, pe malurile rÃ¢ului Ebro. OraÈ™ul este un creuzet al culturilor, reflectÃ¢nd peste 2000 de ani de istorie, de la ruine romane la arhitectura islamicÄƒ È™i creÈ™tinÄƒ. Cel mai faimos reper al sÄƒu este impresionanta BazilicÄƒ Nuestra SeÃ±ora del Pilar, care atrage pelerini din Ã®ntreaga lume. Zaragoza oferÄƒ o experienÈ›Äƒ spaniolÄƒ autenticÄƒ, departe de turismul de masÄƒ. Scena animatÄƒ de tapas din cartierul El Tubo este visul oricÄƒrui gurmand.",
          "en": "Zaragoza is a fascinating historic city strategically located between Madrid and Barcelona on the banks of the Ebro River. The city is a melting pot of cultures, reflecting over 2,000 years of history, from Roman ruins to Islamic and Christian architecture. Its most famous landmark is the impressive Basilica of Nuestra SeÃ±ora del Pilar, which attracts pilgrims from all over the world. Zaragoza offers an authentic Spanish experience away from mass tourism. The lively tapas scene in the El Tubo district is a foodie's dream."
    },
    facts: {
          "de": [
                "Zaragoza ist die fÃ¼nftgrÃ¶ÃŸte Stadt in Spanien.",
                "Die Basilika del Pilar beherbergt Fresken des berÃ¼hmten Malers Francisco de Goya.",
                "Der AljaferÃ­a-Palast ist ein prÃ¤chtiges Beispiel der islamischen MudÃ©jar-Architektur.",
                "Die Stadt veranstaltete die Expo 2008 zum Thema 'Wasser und nachhaltige Entwicklung'.",
                "Zaragoza bewahrt bedeutende Reste des rÃ¶mischen CÃ¤saraugusta, darunter ein Theater.",
                "Das jÃ¤hrliche Fiestas del Pilar-Fest im Oktober dauert zehn Tage.",
                "Die Puente de Piedra ist eine historische BrÃ¼cke Ã¼ber den Fluss Ebro.",
                "Das El Tubo-Viertel ist berÃ¼hmt fÃ¼r seine dichten Gassen voller Tapas-Bars."
          ],
          "hu": [
                "Zaragoza SpanyolorszÃ¡g Ã¶tÃ¶dik legnagyobb vÃ¡rosa.",
                "A Pilar-bazilika a hÃ­res festÅ‘, Francisco de Goya freskÃ³it Å‘rzi.",
                "Az AljaferÃ­a palota az iszlÃ¡m mudÃ©jar Ã©pÃ­tÃ©szet csodÃ¡latos pÃ©ldÃ¡ja.",
                "A vÃ¡ros adott otthont a 2008-as ExpÃ³nak, amelynek tÃ©mÃ¡ja a 'VÃ­z Ã©s fenntarthatÃ³ fejlÅ‘dÃ©s' volt.",
                "Zaragoza megÅ‘rizte a rÃ³mai Caesaraugusta jelentÅ‘s maradvÃ¡nyait, kÃ¶ztÃ¼k egy szÃ­nhÃ¡zat.",
                "Az Ã©ves Fiestas del Pilar fesztivÃ¡l oktÃ³berben tÃ­z napig tart.",
                "A Puente de Piedra egy tÃ¶rtÃ©nelmi hÃ­d az Ebro folyÃ³ felett.",
                "Az El Tubo negyed hÃ­res a tapas bÃ¡rokkal teli sÅ±rÅ± utcÃ¡irÃ³l."
          ],
          "ro": [
                "Zaragoza este al cincilea oraÈ™ ca mÄƒrime din Spania.",
                "Bazilica del Pilar adÄƒposteÈ™te fresce ale celebrului pictor Francisco de Goya.",
                "Palatul AljaferÃ­a este un exemplu magnific al arhitecturii islamice MudÃ©jar.",
                "OraÈ™ul a gÄƒzduit Expo 2008 pe tema 'ApÄƒ È™i dezvoltare durabilÄƒ'.",
                "Zaragoza pÄƒstreazÄƒ vestigii semnificative din Caesaraugusta romanÄƒ, inclusiv un teatru.",
                "Festivalul anual Fiestas del Pilar din octombrie dureazÄƒ zece zile.",
                "Puente de Piedra este un pod istoric peste rÃ¢ul Ebro.",
                "Cartierul El Tubo este faimos pentru strÄƒduÈ›ele sale pline de baruri de tapas."
          ],
          "en": [
                "Zaragoza is the fifth-largest city in Spain.",
                "The Basilica del Pilar houses frescoes by the famous painter Francisco de Goya.",
                "The AljaferÃ­a Palace is a magnificent example of Islamic MudÃ©jar architecture.",
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
    name: {"de": "MÃ¡laga", "hu": "MÃ¡laga", "ro": "MÃ¡laga", "en": "MÃ¡laga"},
    
    description: {
          "de": "MÃ¡laga ist eine dynamische Hafenstadt an der sonnenverwÃ¶hnten Costa del Sol in Andalusien. Als Geburtsort von Pablo Picasso atmet die Stadt Kunst und Kultur, was sich in zahlreichen erstklassigen Museen wie dem Museo Picasso widerspiegelt. Die historische Architektur wird gekrÃ¶nt von der imposanten maurischen Festung Alcazaba und der nahegelegenen Burg Gibralfaro, die einen Panoramablick bieten. MÃ¡laga verbindet eine reiche, jahrtausendealte Geschichte nahtlos mit einem modernen, entspannten Strandleben. Die lebendige Hafenpromenade und das ausgezeichnete MeeresfrÃ¼chte-Angebot machen sie zu einem unvergesslichen Erlebnis.",
          "hu": "MÃ¡laga egy dinamikus kikÃ¶tÅ‘vÃ¡ros AndalÃºziÃ¡ban, a napsÃ¼tÃ¶tte Costa del Sol partjÃ¡n. Pablo Picasso szÃ¼lÅ‘helyekÃ©nt a vÃ¡ros a mÅ±vÃ©szetet Ã©s a kultÃºrÃ¡t lÃ©legzi, ami szÃ¡mos elsÅ‘ osztÃ¡lyÃº mÃºzeumban, pÃ©ldÃ¡ul a Museo PicassÃ³ban is megmutatkozik. A tÃ¶rtÃ©nelmi Ã©pÃ­tÃ©szetet az impozÃ¡ns mÃ³r erÅ‘d, az Alcazaba Ã©s a kÃ¶zeli Gibralfaro vÃ¡r koronÃ¡zza meg, ahonnan panorÃ¡mÃ¡s kilÃ¡tÃ¡s nyÃ­lik. MÃ¡laga zÃ¶kkenÅ‘mentesen Ã¶tvÃ¶zi a gazdag, Ã©vezredes tÃ¶rtÃ©nelmet a modern, nyugodt tengerparti Ã©lettel. A nyÃ¼zsgÅ‘ kikÃ¶tÅ‘i sÃ©tÃ¡ny Ã©s a kivÃ¡lÃ³ tengeri Ã©telek felejthetetlen Ã©lmÃ©nnyÃ© teszik.",
          "ro": "MÃ¡laga este un oraÈ™ portuar dinamic pe Ã®nsorita Costa del Sol din Andaluzia. Ca loc de naÈ™tere al lui Pablo Picasso, oraÈ™ul respirÄƒ artÄƒ È™i culturÄƒ, ceea ce se reflectÄƒ Ã®n numeroase muzee de primÄƒ clasÄƒ, cum ar fi Museo Picasso. Arhitectura istoricÄƒ este Ã®ncoronatÄƒ de impunÄƒtoarea cetate maurÄƒ Alcazaba È™i de Castelul Gibralfaro din apropiere, care oferÄƒ vederi panoramice. MÃ¡laga Ã®mbinÄƒ perfect o istorie bogatÄƒ de milenii cu o viaÈ›Äƒ modernÄƒ È™i relaxatÄƒ la plajÄƒ. Promenada plinÄƒ de viaÈ›Äƒ a portului È™i oferta excelentÄƒ de fructe de mare o fac o experienÈ›Äƒ de neuitat.",
          "en": "MÃ¡laga is a dynamic port city on the sun-drenched Costa del Sol in Andalusia. As the birthplace of Pablo Picasso, the city breathes art and culture, reflected in numerous first-class museums such as the Museo Picasso. The historic architecture is crowned by the imposing Moorish fortress Alcazaba and the nearby Gibralfaro Castle, offering panoramic views. MÃ¡laga seamlessly blends a rich, millennial history with modern, relaxed beach life. The lively harbor promenade and excellent seafood offerings make it an unforgettable experience."
    },
    facts: {
          "de": [
                "MÃ¡laga ist eine der Ã¤ltesten StÃ¤dte Europas, gegrÃ¼ndet von den PhÃ¶niziern um 770 v. Chr.",
                "Die Stadt beheimatet ein rÃ¶misches Theater direkt am FuÃŸe der Festung Alcazaba.",
                "Die Kathedrale von MÃ¡laga wird oft 'La Manquita' (die Einarmige) genannt, da ihr zweiter Turm nie fertiggestellt wurde.",
                "MÃ¡laga ist berÃ¼hmt fÃ¼r 'Espetos', traditionelle SardinenspieÃŸe, die am Strand gegrillt werden.",
                "Die Calle Larios ist die berÃ¼hmteste und eleganteste EinkaufsstraÃŸe der Stadt.",
                "Das Centre Pompidou MÃ¡laga ist die erste Auslandsniederlassung des Pariser Museums.",
                "Das jÃ¤hrliche Filmfestival von MÃ¡laga ist das wichtigste fÃ¼r das spanische Kino.",
                "Der Hafen von MÃ¡laga ist ein beliebter Anlaufpunkt fÃ¼r groÃŸe internationale Kreuzfahrtschiffe."
          ],
          "hu": [
                "MÃ¡laga EurÃ³pa egyik legrÃ©gebbi vÃ¡rosa, amelyet a fÃ¶nÃ­ciaiak alapÃ­tottak i. e. 770 kÃ¶rÃ¼l.",
                "A vÃ¡rosban talÃ¡lhatÃ³ egy rÃ³mai szÃ­nhÃ¡z kÃ¶zvetlenÃ¼l az Alcazaba erÅ‘d lÃ¡bÃ¡nÃ¡l.",
                "A mÃ¡lagai katedrÃ¡list gyakran 'La Manquita'-nak (az egykarÃºnak) hÃ­vjÃ¡k, mivel a mÃ¡sodik tornya sosem kÃ©szÃ¼lt el.",
                "MÃ¡laga hÃ­res az 'Espetos'-rÃ³l, a tengerparton grillezett hagyomÃ¡nyos szardÃ­nianyÃ¡rsakrÃ³l.",
                "A Calle Larios a vÃ¡ros leghÃ­resebb Ã©s legelegÃ¡nsabb bevÃ¡sÃ¡rlÃ³utcÃ¡ja.",
                "A Centre Pompidou MÃ¡laga a pÃ¡rizsi mÃºzeum elsÅ‘ kÃ¼lfÃ¶ldi fiÃ³kintÃ©zmÃ©nye.",
                "Az Ã©ves MÃ¡lagai FilmfesztivÃ¡l a spanyol mozi legfontosabb esemÃ©nye.",
                "A mÃ¡lagai kikÃ¶tÅ‘ a nagy nemzetkÃ¶zi tengerjÃ¡rÃ³ hajÃ³k nÃ©pszerÅ± kikÃ¶tÅ‘helye."
          ],
          "ro": [
                "MÃ¡laga este unul dintre cele mai vechi oraÈ™e din Europa, fondat de fenicieni Ã®n jurul anului 770 Ã®.Hr.",
                "OraÈ™ul gÄƒzduieÈ™te un teatru roman chiar la poalele cetÄƒÈ›ii Alcazaba.",
                "Catedrala din MÃ¡laga este adesea numitÄƒ 'La Manquita' (ciunga), deoarece al doilea turn nu a fost niciodatÄƒ finalizat.",
                "MÃ¡laga este renumitÄƒ pentru 'Espetos', frigÄƒrui tradiÈ›ionale de sardine prÄƒjite pe plajÄƒ.",
                "Calle Larios este cea mai faimoasÄƒ È™i elegantÄƒ stradÄƒ comercialÄƒ din oraÈ™.",
                "Centre Pompidou MÃ¡laga este prima filialÄƒ de peste hotare a muzeului parizian.",
                "Festivalul anual de film de la MÃ¡laga este cel mai important pentru cinematografia spaniolÄƒ.",
                "Portul din MÃ¡laga este un punct de oprire popular pentru marile nave de croazierÄƒ internaÈ›ionale."
          ],
          "en": [
                "MÃ¡laga is one of the oldest cities in Europe, founded by the Phoenicians around 770 BC.",
                "The city is home to a Roman theater right at the foot of the Alcazaba fortress.",
                "The Cathedral of MÃ¡laga is often called 'La Manquita' (the one-armed lady) because its second tower was never finished.",
                "MÃ¡laga is famous for 'Espetos', traditional sardine skewers grilled on the beach.",
                "Calle Larios is the most famous and elegant shopping street in the city.",
                "The Centre Pompidou MÃ¡laga is the first overseas branch of the Parisian museum.",
                "The annual MÃ¡laga Film Festival is the most important event for Spanish cinema.",
                "The Port of MÃ¡laga is a popular port of call for large international cruise ships."
          ]
    },
    image: "/geo-images/spain/m-laga.webp",
    
  },
  {
    id: "es-bilbao", type: "city", parent: "ES-PV", coords: [-2.9350, 43.2630],
    name: {"de": "Bilbao", "hu": "Bilbao", "ro": "Bilbao", "en": "Bilbao"},
    
    description: {
          "de": "Bilbao ist das pulsierende Herz des Baskenlandes und ein weltweites Paradebeispiel fÃ¼r gelungene urbane Erneuerung. Einst eine graue Industriestadt, erlebte sie durch den Bau des spektakulÃ¤ren Guggenheim-Museums eine kulturelle Wiedergeburt. Die Stadt liegt reizvoll eingebettet zwischen grÃ¼nen HÃ¼geln am Ufer des Flusses NerviÃ³n. Die charmante Altstadt (Casco Viejo) mit ihren engen Gassen und lebhaften PlÃ¤tzen bildet einen tollen Kontrast zur futuristischen Architektur. Bilbao ist zudem ein Paradies fÃ¼r Feinschmecker, berÃ¼hmt fÃ¼r seine kÃ¶stlichen Pintxos (baskische Tapas).",
          "hu": "Bilbao BaszkfÃ¶ld lÃ¼ktetÅ‘ szÃ­ve Ã©s a sikeres vÃ¡rosrehabilitÃ¡ciÃ³ vilÃ¡gszintÅ± pÃ©ldÃ¡ja. Az egykori szÃ¼rke iparvÃ¡ros a lÃ¡tvÃ¡nyos Guggenheim MÃºzeum felÃ©pÃ­tÃ©sÃ©vel kulturÃ¡lis ÃºjjÃ¡szÃ¼letÃ©st Ã©lt Ã¡t. A vÃ¡ros varÃ¡zslatosan fekszik zÃ¶ld dombok kÃ¶zÃ¶tt, a NerviÃ³n folyÃ³ partjÃ¡n. A bÃ¡jos Ã³vÃ¡ros (Casco Viejo) szÅ±k utcÃ¡ival Ã©s nyÃ¼zsgÅ‘ tereivel nagyszerÅ± kontrasztot alkot a futurisztikus Ã©pÃ­tÃ©szettel. Bilbao emellett a gasztronÃ³mia paradicsoma is, amely hÃ­res Ã­zletes pintxosairÃ³l (baszk tapasokrÃ³l).",
          "ro": "Bilbao este inima vibrantÄƒ a ÈšÄƒrii Bascilor È™i un prim exemplu global de reÃ®nnoire urbanÄƒ de succes. OdatÄƒ un oraÈ™ industrial gri, a experimentat o renaÈ™tere culturalÄƒ prin construirea spectaculosului Muzeu Guggenheim. OraÈ™ul este frumos situat Ã®ntre dealuri verzi, pe malurile rÃ¢ului NerviÃ³n. FermecÄƒtorul oraÈ™ vechi (Casco Viejo), cu strÄƒzile sale Ã®nguste È™i pieÈ›ele pline de viaÈ›Äƒ, oferÄƒ un contrast deosebit cu arhitectura futuristÄƒ. Bilbao este, de asemenea, un paradis pentru gurmanzi, renumit pentru pintxos delicioase (tapas basce).",
          "en": "Bilbao is the vibrant heart of the Basque Country and a global prime example of successful urban renewal. Once a gray industrial city, it experienced a cultural rebirth with the construction of the spectacular Guggenheim Museum. The city is beautifully nestled between green hills on the banks of the NerviÃ³n River. The charming old town (Casco Viejo) with its narrow streets and lively squares provides a great contrast to the futuristic architecture. Bilbao is also a paradise for foodies, famous for its delicious pintxos (Basque tapas)."
    },
    facts: {
          "de": [
                "Das Guggenheim-Museum Bilbao wurde vom Stararchitekten Frank Gehry entworfen.",
                "Die Stadt wird oft mit dem 'Bilbao-Effekt' in Verbindung gebracht, der die Aufwertung durch Kultur beschreibt.",
                "Der Mercado de la Ribera ist eine der grÃ¶ÃŸten Ã¼berdachten Markthallen in Europa.",
                "Die Puente de Vizcaya, eine SchwebefÃ¤hre nahe Bilbao, ist UNESCO-Weltkulturerbe.",
                "Bilbaos U-Bahn-Stationen, von Norman Foster entworfen, werden von den Einheimischen 'Fosteritos' genannt.",
                "Das Casco Viejo ist bekannt fÃ¼r seine 'Siete Calles' (Sieben StraÃŸen), den Ã¤ltesten Teil der Stadt.",
                "Athletic Bilbao, der lokale FuÃŸballclub, nimmt traditionell nur Spieler mit baskischen Wurzeln auf.",
                "Die Zubizuri-BrÃ¼cke ist die Ã¤lteste SchwebefÃ¤hre der Welt und noch immer in Betrieb."
          ],
          "hu": [
                "A bilbaÃ³i Guggenheim MÃºzeumot a sztÃ¡rÃ©pÃ­tÃ©sz, Frank Gehry tervezte.",
                "A vÃ¡rost gyakran hozzÃ¡k Ã¶sszefÃ¼ggÃ©sbe a 'Bilbao-effektussal', amely a kultÃºra Ã¡ltali felÃ©rtÃ©kelÅ‘dÃ©st Ã­rja le.",
                "A Mercado de la Ribera EurÃ³pa egyik legnagyobb fedett vÃ¡sÃ¡rcsarnoka.",
                "A Puente de Vizcaya, egy Bilbao melletti lebegÅ‘komp, az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
                "A Norman Foster Ã¡ltal tervezett bilbaÃ³i metrÃ³Ã¡llomÃ¡sokat a helyiek 'Fosteritos'-nak hÃ­vjÃ¡k.",
                "A Casco Viejo a 'Siete Calles' (HÃ©t utca) nevÅ± rÃ©szÃ©rÅ‘l, a vÃ¡ros legrÃ©gebbi negyedÃ©rÅ‘l ismert.",
                "Az Athletic Bilbao, a helyi futballklub hagyomÃ¡nyosan csak baszk gyÃ¶kerekkel rendelkezÅ‘ jÃ¡tÃ©kosokat fogad be.",
                "A Zubizuri hÃ­d a vilÃ¡g legrÃ©gebbi lebegÅ‘kompja, amely ma is Ã¼zemel."
          ],
          "ro": [
                "Muzeul Guggenheim din Bilbao a fost proiectat de arhitectul vedetÄƒ Frank Gehry.",
                "OraÈ™ul este adesea asociat cu 'Efectul Bilbao', care descrie revitalizarea prin culturÄƒ.",
                "Mercado de la Ribera este una dintre cele mai mari pieÈ›e acoperite din Europa.",
                "Puente de Vizcaya, un pod transportor lÃ¢ngÄƒ Bilbao, este Ã®n Patrimoniul Mondial UNESCO.",
                "StaÈ›iile de metrou din Bilbao, proiectate de Norman Foster, sunt numite de localnici 'Fosteritos'.",
                "Casco Viejo este cunoscut pentru 'Siete Calles' (È˜apte StrÄƒzi), cea mai veche parte a oraÈ™ului.",
                "Athletic Bilbao, clubul de fotbal local, acceptÄƒ Ã®n mod tradiÈ›ional doar jucÄƒtori cu rÄƒdÄƒcini basce.",
                "Podul Zubizuri este cel mai vechi pod transportor din lume, Ã®ncÄƒ Ã®n funcÈ›iune."
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
          "de": "Granada liegt am FuÃŸe der majestÃ¤tischen Sierra Nevada in Andalusien und ist ein Ort voller Magie und Geschichte. Die Stadt war das letzte Bollwerk der Mauren in Spanien und diese reiche islamische Vergangenheit ist noch heute an jeder Ecke spÃ¼rbar. Weltbekannt ist Granada fÃ¼r die atemberaubende Alhambra, einen Festungs- und Palastkomplex von unvergleichlicher SchÃ¶nheit. Das alte arabische Viertel AlbaicÃ­n besticht durch seine weiÃŸ getÃ¼nchten HÃ¤user, schmalen Gassen und den herrlichen Ausblick auf die Alhambra. Granada besitzt zudem eine lebhafte Studentenszene und bewahrt die Tradition der kostenlosen Tapas.",
          "hu": "Granada az andalÃºziai Sierra Nevada fensÃ©ges lÃ¡bÃ¡nÃ¡l fekszik, Ã©s varÃ¡zslattal Ã©s tÃ¶rtÃ©nelemmel teli hely. A vÃ¡ros volt a mÃ³rok utolsÃ³ bÃ¡styÃ¡ja SpanyolorszÃ¡gban, Ã©s ez a gazdag iszlÃ¡m mÃºlt ma is minden sarkon Ã©rezhetÅ‘. Granada vilÃ¡ghÃ­rÅ± a lÃ©legzetelÃ¡llÃ­tÃ³ AlhambrÃ¡rÃ³l, a pÃ¡ratlan szÃ©psÃ©gÅ± erÅ‘d- Ã©s palotakomplexumrÃ³l. A rÃ©gi arab negyed, az AlbaicÃ­n lenyÅ±gÃ¶z fehÃ©rre meszelt hÃ¡zaival, szÅ±k utcÃ¡ival Ã©s az AlhambrÃ¡ra nyÃ­lÃ³ csodÃ¡latos kilÃ¡tÃ¡ssal. Granada emellett pezsgÅ‘ diÃ¡kÃ©lettel rendelkezik, Ã©s Å‘rzi az ingyenes tapasok hagyomÃ¡nyÃ¡t.",
          "ro": "Granada este situatÄƒ la poalele maiestuoasei Sierra Nevada din Andaluzia È™i este un loc plin de magie È™i istorie. OraÈ™ul a fost ultimul bastion al maurilor din Spania, iar acest trecut islamic bogat poate fi simÈ›it È™i astÄƒzi la fiecare colÈ›. Granada este renumitÄƒ Ã®n Ã®ntreaga lume pentru uluitoarea Alhambra, un complex de fortÄƒreÈ›e È™i palate de o frumuseÈ›e incomparabilÄƒ. Vechiul cartier arab AlbaicÃ­n captiveazÄƒ prin casele sale vÄƒruite Ã®n alb, strÄƒzile Ã®nguste È™i vederea magnificÄƒ la Alhambra. Granada are, de asemenea, o scenÄƒ studenÈ›eascÄƒ plinÄƒ de viaÈ›Äƒ È™i pÄƒstreazÄƒ tradiÈ›ia tapas-urilor gratuite.",
          "en": "Granada is located at the foot of the majestic Sierra Nevada in Andalusia and is a place full of magic and history. The city was the last stronghold of the Moors in Spain, and this rich Islamic past can still be felt on every corner today. Granada is world-famous for the breathtaking Alhambra, a fortress and palace complex of incomparable beauty. The old Arab quarter AlbaicÃ­n captivates with its whitewashed houses, narrow streets, and magnificent views of the Alhambra. Granada also has a lively student scene and preserves the tradition of free tapas."
    },
    facts: {
          "de": [
                "Die Alhambra ist eines der bedeutendsten Meisterwerke der maurischen Baukunst und UNESCO-Welterbe.",
                "In Granada ist es noch Ã¼blich, zu jedem GetrÃ¤nk eine kostenlose Tapa zu servieren.",
                "Die Kathedrale von Granada beherbergt die GrÃ¤ber der Katholischen KÃ¶nige Isabella und Ferdinand.",
                "Der Mirador de San NicolÃ¡s bietet den berÃ¼hmtesten Aussichtspunkt auf die Alhambra beim Sonnenuntergang.",
                "Der Generalife war der prÃ¤chtige Sommerpalast und Landsitz der Nasriden-Sultane.",
                "Granada fiel im Jahr 1492 als letztes Emirat auf der Iberischen Halbinsel an die Christen.",
                "Die Stadt beheimatet eine der Ã¤ltesten und prestigetrÃ¤chtigsten UniversitÃ¤ten Spaniens.",
                "Das Sacromonte-Viertel ist bekannt fÃ¼r Flamenco-AuffÃ¼hrungen in traditionellen HÃ¶hlenwohnungen."
          ],
          "hu": [
                "Az Alhambra a mÃ³r Ã©pÃ­tÃ©szet egyik legjelentÅ‘sebb remekmÅ±ve Ã©s az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
                "GranadÃ¡ban mÃ©g ma is szokÃ¡s minden italhoz ingyenes tapast felszolgÃ¡lni.",
                "A granadai katedrÃ¡lisban talÃ¡lhatÃ³ a katolikus kirÃ¡lyok, Izabella Ã©s FerdinÃ¡nd sÃ­rja.",
                "A Mirador de San NicolÃ¡s a leghÃ­resebb kilÃ¡tÃ³pont az AlhambrÃ¡ra naplementekor.",
                "A Generalife volt a Naszrid szultÃ¡nok pompÃ¡s nyÃ¡ri palotÃ¡ja Ã©s vidÃ©ki birtoka.",
                "Granada volt az utolsÃ³ emÃ­rsÃ©g az IbÃ©riai-fÃ©lszigeten, amely 1492-ben a keresztÃ©nyek kezÃ©re kerÃ¼lt.",
                "A vÃ¡rosban mÅ±kÃ¶dik SpanyolorszÃ¡g egyik legrÃ©gebbi Ã©s legrangosabb egyeteme.",
                "A Sacromonte negyed hÃ­res a hagyomÃ¡nyos barlanglakÃ¡sokban tartott flamenco-elÅ‘adÃ¡sokrÃ³l."
          ],
          "ro": [
                "Alhambra este una dintre cele mai importante capodopere ale arhitecturii maure È™i este un sit al Patrimoniului Mondial UNESCO.",
                "ÃŽn Granada, este Ã®ncÄƒ obiÈ™nuit sÄƒ se serveascÄƒ un tapas gratuit cu fiecare bÄƒuturÄƒ.",
                "Catedrala din Granada adÄƒposteÈ™te mormintele Monarhilor Catolici Isabela È™i Ferdinand.",
                "Mirador de San NicolÃ¡s oferÄƒ cel mai faimos punct de observaÈ›ie asupra Alhambrei la apus.",
                "Generalife a fost palatul magnific de varÄƒ È™i moÈ™ia sultanilor din dinastia Nasrid.",
                "Granada a cÄƒzut Ã®n faÈ›a creÈ™tinilor Ã®n 1492, fiind ultimul emirat de pe Peninsula IbericÄƒ.",
                "OraÈ™ul gÄƒzduieÈ™te una dintre cele mai vechi È™i prestigioase universitÄƒÈ›i din Spania.",
                "Cartierul Sacromonte este cunoscut pentru spectacolele de flamenco din locuinÈ›ele tradiÈ›ionale rupestre."
          ],
          "en": [
                "The Alhambra is one of the most important masterpieces of Moorish architecture and a UNESCO World Heritage site.",
                "In Granada, it is still customary to serve a free tapa with every drink ordered.",
                "The Cathedral of Granada houses the tombs of the Catholic Monarchs Isabella and Ferdinand.",
                "The Mirador de San NicolÃ¡s offers the most famous viewpoint of the Alhambra at sunset.",
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
    name: {"de": "CÃ³rdoba", "hu": "CÃ³rdoba", "ro": "CÃ³rdoba", "en": "CÃ³rdoba"},
    
    description: {
          "de": "CÃ³rdoba ist eine geschichtstrÃ¤chtige Stadt in Andalusien und war einst eine der grÃ¶ÃŸten und fortschrittlichsten Metropolen der Welt. Im 10. Jahrhundert strahlte sie als Hauptstadt des islamischen Kalifats unvergleichlichen Reichtum und Wissen aus. Das absolute Highlight der Stadt ist die Mezquita-Catedral, eine atemberaubende Moschee, in deren Zentrum spÃ¤ter eine christliche Kathedrale erbaut wurde. Die charmanten Altstadtgassen von CÃ³rdoba sind berÃ¼hmt fÃ¼r ihre weiÃŸ getÃ¼nchten WÃ¤nde und die liebevoll mit Blumen geschmÃ¼ckten Patios (InnenhÃ¶fe). Ein Spaziergang Ã¼ber die RÃ¶mische BrÃ¼cke runden das romantische Bild der Stadt ab.",
          "hu": "CÃ³rdoba egy tÃ¶rtÃ©nelmi andalÃºziai vÃ¡ros, amely egykor a vilÃ¡g egyik legnagyobb Ã©s legfejlettebb metropolisza volt. A 10. szÃ¡zadban, az iszlÃ¡m kalifÃ¡tus fÅ‘vÃ¡rosakÃ©nt pÃ¡ratlan gazdagsÃ¡got Ã©s tudÃ¡st sugÃ¡rzott. A vÃ¡ros abszolÃºt fÃ©nypontja a Mezquita-Catedral, egy lÃ©legzetelÃ¡llÃ­tÃ³ mecset, amelynek kÃ¶zepÃ©be kÃ©sÅ‘bb keresztÃ©ny katedrÃ¡list Ã©pÃ­tettek. CÃ³rdoba bÃ¡jos Ã³vÃ¡rosi utcÃ¡i hÃ­resek fehÃ©rre meszelt falaikrÃ³l Ã©s a szeretettel virÃ¡gokkal dÃ­szÃ­tett teraszokrÃ³l (patiÃ³k). A RÃ³mai hÃ­don tett sÃ©ta teszi teljessÃ© a vÃ¡ros romantikus kÃ©pÃ©t.",
          "ro": "CÃ³rdoba este un oraÈ™ istoric din Andaluzia È™i a fost cÃ¢ndva una dintre cele mai mari È™i mai avansate metropole din lume. ÃŽn secolul al X-lea, ca È™i capitalÄƒ a Califatului Islamic, a radiat o bogÄƒÈ›ie È™i o cunoaÈ™tere incomparabile. Punctul de atracÈ›ie absolut al oraÈ™ului este Mezquita-Catedral, o moschee uluitoare Ã®n centrul cÄƒreia a fost construitÄƒ mai tÃ¢rziu o catedralÄƒ creÈ™tinÄƒ. StrÄƒduÈ›ele fermecÄƒtoare ale oraÈ™ului vechi din CÃ³rdoba sunt renumite pentru pereÈ›ii lor vÄƒruiÈ›i Ã®n alb È™i curÈ›ile interioare (patios) decorate cu dragoste cu flori. O plimbare pe Podul Roman completeazÄƒ imaginea romanticÄƒ a oraÈ™ului.",
          "en": "CÃ³rdoba is a historic city in Andalusia and was once one of the largest and most advanced metropolises in the world. In the 10th century, as the capital of the Islamic Caliphate, it radiated unparalleled wealth and knowledge. The absolute highlight of the city is the Mezquita-Catedral, a breathtaking mosque with a Christian cathedral later built directly in its center. The charming old town streets of CÃ³rdoba are famous for their whitewashed walls and affectionately flower-decorated patios (courtyards). A walk across the Roman Bridge completes the romantic image of the city."
    },
    facts: {
          "de": [
                "Das historische Zentrum von CÃ³rdoba ist komplett als UNESCO-Weltkulturerbe deklariert.",
                "Die Mezquita ist berÃ¼hmt fÃ¼r ihren Wald aus 856 SÃ¤ulen und den rot-weiÃŸen DoppelbÃ¶gen.",
                "CÃ³rdoba veranstaltet jedes Jahr im Mai ein buntes Festival der InnenhÃ¶fe (Fiesta de los Patios).",
                "Die Medina Azahara am Stadtrand war einst eine prÃ¤chtige mittelalterliche Palaststadt.",
                "Die RÃ¶mische BrÃ¼cke (Puente Romano) wurde ursprÃ¼nglich im 1. Jahrhundert v. Chr. erbaut.",
                "Die Stadt war die Heimat bedeutender Philosophen wie Averroes und Maimonides.",
                "Die JuderÃ­a ist das alte jÃ¼dische Viertel mit einer der wenigen erhaltenen Synagogen Spaniens.",
                "Salmorejo, eine dickflÃ¼ssige, kalte Tomatensuppe, ist die bekannteste lokale SpezialitÃ¤t."
          ],
          "hu": [
                "CÃ³rdoba tÃ¶rtÃ©nelmi kÃ¶zpontjÃ¡t teljes egÃ©szÃ©ben az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©vÃ© nyilvÃ¡nÃ­tottÃ¡k.",
                "A Mezquita hÃ­res a 856 oszlopbÃ³l Ã¡llÃ³ erdejÃ©rÅ‘l Ã©s a piros-fehÃ©r kettÅ‘s Ã­vekrÅ‘l.",
                "CÃ³rdoba minden Ã©v mÃ¡jusÃ¡ban szÃ­nes belsÅ‘udvar-fesztivÃ¡lt (Fiesta de los Patios) rendez.",
                "A vÃ¡ros szÃ©lÃ©n talÃ¡lhatÃ³ Medina Azahara egykor pompÃ¡s kÃ¶zÃ©pkori palotavÃ¡ros volt.",
                "A RÃ³mai hidat (Puente Romano) eredetileg i. e. az 1. szÃ¡zadban Ã©pÃ­tettÃ©k.",
                "A vÃ¡ros olyan jelentÅ‘s filozÃ³fusok otthona volt, mint AverroÃ«s Ã©s MaimonidÃ©sz.",
                "A JuderÃ­a a rÃ©gi zsidÃ³ negyed, SpanyolorszÃ¡g egyik kevÃ©s fennmaradt zsinagÃ³gÃ¡jÃ¡val.",
                "A salmorejo, egy sÅ±rÅ±, hideg paradicsomleves, a legismertebb helyi specialitÃ¡s."
          ],
          "ro": [
                "Centrul istoric din CÃ³rdoba este declarat Ã®n Ã®ntregime un sit al Patrimoniului Mondial UNESCO.",
                "Mezquita este renumitÄƒ pentru pÄƒdurea sa de 856 de coloane È™i arcadele duble roÈ™ii È™i albe.",
                "CÃ³rdoba gÄƒzduieÈ™te anual Ã®n luna mai un festival plin de culoare al curÈ›ilor (Fiesta de los Patios).",
                "Medina Azahara de la periferia oraÈ™ului a fost cÃ¢ndva un magnific oraÈ™-palat medieval.",
                "Podul Roman (Puente Romano) a fost construit iniÈ›ial Ã®n secolul I Ã®.Hr.",
                "OraÈ™ul a fost casa unor filozofi importanÈ›i, precum Averroes È™i Maimonide.",
                "JuderÃ­a este vechiul cartier evreiesc cu una dintre puÈ›inele sinagogi supravieÈ›uitoare din Spania.",
                "Salmorejo, o supÄƒ rece È™i deasÄƒ de roÈ™ii, este cea mai faimoasÄƒ specialitate localÄƒ."
          ],
          "en": [
                "The historic center of CÃ³rdoba is entirely declared a UNESCO World Heritage site.",
                "The Mezquita is famous for its forest of 856 columns and red-and-white double arches.",
                "CÃ³rdoba hosts a colorful festival of courtyards (Fiesta de los Patios) every year in May.",
                "Medina Azahara on the outskirts of the city was once a magnificent medieval palace-city.",
                "The Roman Bridge (Puente Romano) was originally built in the 1st century BC.",
                "The city was home to significant philosophers such as Averroes and Maimonides.",
                "The JuderÃ­a is the old Jewish quarter, home to one of Spain's few surviving synagogues.",
                "Salmorejo, a thick, cold tomato soup, is the most famous local culinary specialty."
          ]
    },
    image: "/geo-images/spain/c-rdoba.webp",
    
  },
  {
    id: "es-salamanca", type: "city", parent: "ES-CL", coords: [-5.6635, 40.9701],
    name: {"de": "Salamanca", "hu": "Salamanca", "ro": "Salamanca", "en": "Salamanca"},
    
    description: {
          "de": "Salamanca, gelegen im Westen Spaniens in der Region Kastilien und LeÃ³n, ist eine der Ã¤ltesten und ehrwÃ¼rdigsten UniversitÃ¤tsstÃ¤dte Europas. Die Stadt erstrahlt im goldenen Licht des einzigartigen Villamayor-Sandsteins, der fast alle historischen GebÃ¤ude ziert. Im Zentrum des Lebens steht die beeindruckende Plaza Mayor, die als einer der schÃ¶nsten PlÃ¤tze ganz Spaniens gilt. Salamanca verfÃ¼gt Ã¼ber zwei Kathedralen, die alte und die neue, die direkt aneinander gebaut wurden. Das jugendliche, lebendige Flair der tausenden Studenten mischt sich hier auf charmante Weise mit tief verwurzelter akademischer Geschichte.",
          "hu": "A Nyugat-SpanyolorszÃ¡gban, KasztÃ­lia Ã©s LeÃ³n rÃ©giÃ³ban fekvÅ‘ Salamanca EurÃ³pa egyik legrÃ©gebbi Ã©s legtekintÃ©lyesebb egyetemvÃ¡rosa. A vÃ¡ros az egyedÃ¼lÃ¡llÃ³ Villamayor homokkÅ‘ aranylÃ³ fÃ©nyÃ©ben ragyog, amely szinte minden tÃ¶rtÃ©nelmi Ã©pÃ¼letet dÃ­szÃ­t. Az Ã©let kÃ¶zÃ©ppontjÃ¡ban a lenyÅ±gÃ¶zÅ‘ Plaza Mayor Ã¡ll, amelyet egÃ©sz SpanyolorszÃ¡g egyik legszebb terÃ©nek tartanak. SalamancÃ¡nak kÃ©t katedrÃ¡lisa is van, a rÃ©gi Ã©s az Ãºj, amelyeket kÃ¶zvetlenÃ¼l egymÃ¡s mellÃ© Ã©pÃ­tettek. TÃ¶bb ezer diÃ¡k fiatalos, Ã©lÃ©nk hangulata itt bÃ¡jos mÃ³don keveredik a mÃ©lyen gyÃ¶kerezÅ‘ akadÃ©miai tÃ¶rtÃ©nelemmel.",
          "ro": "Salamanca, situatÄƒ Ã®n vestul Spaniei Ã®n regiunea Castilia È™i LeÃ³n, este una dintre cele mai vechi È™i venerabile oraÈ™e universitare din Europa. OraÈ™ul strÄƒluceÈ™te Ã®n lumina aurie a gresiei unice de Villamayor, care Ã®mpodobeÈ™te aproape toate clÄƒdirile istorice. ÃŽn centrul vieÈ›ii se aflÄƒ impresionanta Plaza Mayor, care este consideratÄƒ una dintre cele mai frumoase pieÈ›e din toatÄƒ Spania. Salamanca are douÄƒ catedrale, cea veche È™i cea nouÄƒ, care au fost construite una lÃ¢ngÄƒ alta. Flerul tineresc È™i plin de viaÈ›Äƒ al miilor de studenÈ›i se amestecÄƒ aici Ã®ntr-un mod fermecÄƒtor cu istoria academicÄƒ profund Ã®nrÄƒdÄƒcinatÄƒ.",
          "en": "Salamanca, located in western Spain in the region of Castile and LeÃ³n, is one of Europe's oldest and most venerable university cities. The city glows in the golden light of the unique Villamayor sandstone, which adorns almost all of its historic buildings. At the center of life is the impressive Plaza Mayor, considered one of the most beautiful squares in all of Spain. Salamanca has two cathedrals, the old and the new, which were built directly adjacent to each other. The youthful, lively flair of thousands of students mixes charmingly here with deeply rooted academic history."
    },
    facts: {
          "de": [
                "Die UniversitÃ¤t von Salamanca wurde 1218 gegrÃ¼ndet und ist die Ã¤lteste Spaniens.",
                "Das historische Zentrum von Salamanca ist seit 1988 UNESCO-Weltkulturerbe.",
                "Die Fassade der UniversitÃ¤t ist berÃ¼hmt fÃ¼r einen versteckten steinernen Frosch auf einem Totenkopf.",
                "Das Casa de las Conchas ist ein Palast, dessen Fassade mit Ã¼ber 300 Muscheln geschmÃ¼ckt ist.",
                "Die Plaza Mayor wurde im 18. Jahrhundert im barocken Stil erbaut.",
                "Der Astronautenfriedhof an der Neuen Kathedrale ist eine moderne Steinmetz-ErgÃ¤nzung von 1992.",
                "Die BrÃ¼cke Puente Romano Ã¼ber den Fluss Tormes stammt aus dem 1. Jahrhundert.",
                "Die Stadt ist ein beliebtes Zentrum fÃ¼r SprachschÃ¼ler aus aller Welt, die Spanisch lernen."
          ],
          "hu": [
                "A Salamancai Egyetemet 1218-ban alapÃ­tottÃ¡k, Ã©s SpanyolorszÃ¡g legrÃ©gebbi egyeteme.",
                "Salamanca tÃ¶rtÃ©nelmi kÃ¶zpontja 1988 Ã³ta az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
                "Az egyetem homlokzata hÃ­res egy koponyÃ¡n megbÃºvÃ³ kÅ‘bÃ©kÃ¡rÃ³l.",
                "A Casa de las Conchas egy palota, amelynek homlokzatÃ¡t tÃ¶bb mint 300 kagylÃ³ dÃ­szÃ­ti.",
                "A Plaza Mayor a 18. szÃ¡zadban Ã©pÃ¼lt barokk stÃ­lusban.",
                "Az Ãšj KatedrÃ¡lison lÃ©vÅ‘ asztronauta egy modern, 1992-es kÅ‘faragÃ³ kiegÃ©szÃ­tÃ©s.",
                "A Tormes folyÃ³n Ã¡tÃ­velÅ‘ Puente Romano hÃ­d az 1. szÃ¡zadbÃ³l szÃ¡rmazik.",
                "A vÃ¡ros nÃ©pszerÅ± kÃ¶zpontja a spanyolul tanulÃ³ diÃ¡koknak a vilÃ¡g minden tÃ¡jÃ¡rÃ³l."
          ],
          "ro": [
                "Universitatea din Salamanca a fost fondatÄƒ Ã®n 1218 È™i este cea mai veche din Spania.",
                "Centrul istoric al SalamancÄƒi este Ã®n Patrimoniul Mondial UNESCO din 1988.",
                "FaÈ›ada universitÄƒÈ›ii este renumitÄƒ pentru o broascÄƒ de piatrÄƒ ascunsÄƒ pe un craniu.",
                "Casa de las Conchas este un palat a cÄƒrui faÈ›adÄƒ este decoratÄƒ cu peste 300 de scoici.",
                "Plaza Mayor a fost construitÄƒ Ã®n secolul al XVIII-lea Ã®n stil baroc.",
                "Astronautul de pe Noua CatedralÄƒ este o adÄƒugire modernÄƒ a cioplitorilor Ã®n piatrÄƒ din 1992.",
                "Podul Puente Romano peste rÃ¢ul Tormes dateazÄƒ din secolul I.",
                "OraÈ™ul este un centru popular pentru studenÈ›ii la limbi strÄƒine din Ã®ntreaga lume care Ã®nvaÈ›Äƒ spaniola."
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
          "de": "Toledo, majestÃ¤tisch auf einem HÃ¼gel Ã¼ber dem Fluss Tajo gelegen, ist als 'Stadt der drei Kulturen' weltberÃ¼hmt. Ãœber Jahrhunderte lebten hier Christen, Muslime und Juden friedlich zusammen und hinterlieÃŸen ein unvergleichliches architektonisches Erbe. Die gesamte historische Altstadt ist ein UNESCO-Weltkulturerbe und gleicht einem lebendigen Freilichtmuseum. Prachtvolle Bauwerke wie die gotische Kathedrale, der AlcÃ¡zar und die Synagoge El TrÃ¡nsito zeugen von der reichen Vergangenheit. Toledo ist auch berÃ¼hmt fÃ¼r seine traditionelle Handwerkskunst, insbesondere die Herstellung von Damaszener-Schmuck und Toledo-Schwertern.",
          "hu": "A Tajo folyÃ³ feletti dombon fensÃ©gesen elhelyezkedÅ‘ Toledo a 'HÃ¡rom kultÃºra vÃ¡rosakÃ©nt' vilÃ¡ghÃ­rÅ±. Ã‰vszÃ¡zadokon Ã¡t keresztÃ©nyek, muszlimok Ã©s zsidÃ³k Ã©ltek itt bÃ©kÃ©ben egymÃ¡s mellett, Ã©s pÃ¡ratlan Ã©pÃ­tÃ©szeti Ã¶rÃ¶ksÃ©get hagytak hÃ¡tra. Az egÃ©sz tÃ¶rtÃ©nelmi Ã³vÃ¡ros UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g, Ã©s egy Ã©lÅ‘ szabadtÃ©ri mÃºzeumhoz hasonlÃ­t. Olyan pompÃ¡s Ã©pÃ­tmÃ©nyek tanÃºskodnak a gazdag mÃºltrÃ³l, mint a gÃ³tikus katedrÃ¡lis, az AlcÃ¡zar Ã©s az El TrÃ¡nsito zsinagÃ³ga. Toledo hÃ­res hagyomÃ¡nyos kÃ©zmÅ±vessÃ©gÃ©rÅ‘l is, kÃ¼lÃ¶nÃ¶sen a damaszkuszi Ã©kszerek Ã©s a toledÃ³i kardok kÃ©szÃ­tÃ©sÃ©rÅ‘l.",
          "ro": "Toledo, situat maiestuos pe un deal deasupra rÃ¢ului Tajo, este renumit Ã®n lume ca 'OraÈ™ul celor trei culturi'. Timp de secole, creÈ™tinii, musulmanii È™i evreii au trÄƒit aici paÈ™nic Ã®mpreunÄƒ, lÄƒsÃ¢nd Ã®n urmÄƒ o moÈ™tenire arhitecturalÄƒ incomparabilÄƒ. ÃŽntregul oraÈ™ vechi istoric este un sit al Patrimoniului Mondial UNESCO È™i se aseamÄƒnÄƒ cu un muzeu viu Ã®n aer liber. ClÄƒdiri magnifice precum catedrala goticÄƒ, AlcÃ¡zar È™i sinagoga El TrÃ¡nsito stau mÄƒrturie a trecutului bogat. Toledo este renumit È™i pentru meÈ™teÈ™ugurile sale tradiÈ›ionale, Ã®n special pentru fabricarea de bijuterii de Damasc È™i a sÄƒbiilor de Toledo.",
          "en": "Toledo, majestically situated on a hill above the Tagus River, is world-famous as the 'City of Three Cultures'. For centuries, Christians, Muslims, and Jews lived together peacefully here, leaving behind an incomparable architectural heritage. The entire historic old town is a UNESCO World Heritage site and resembles a living open-air museum. Magnificent buildings such as the Gothic cathedral, the AlcÃ¡zar, and the El TrÃ¡nsito synagogue bear witness to the rich past. Toledo is also famous for its traditional craftsmanship, especially the production of Damascene jewelry and Toledo swords."
    },
    facts: {
          "de": [
                "Toledo war einst die Hauptstadt des spanischen Reiches, bis Madrid 1561 diese Rolle Ã¼bernahm.",
                "Die Kathedrale von Toledo gilt als eine der grÃ¶ÃŸten und prachtvollsten gotischen Kathedralen der Welt.",
                "Der berÃ¼hmte Maler El Greco lebte in Toledo, und viele seiner Werke sind hier ausgestellt.",
                "Die Stadt ist bekannt fÃ¼r Marzipan, eine sÃ¼ÃŸe KÃ¶stlichkeit arabischen Ursprungs.",
                "Toledo-Stahl war im Mittelalter fÃ¼r seine HÃ¤rte berÃ¼hmt und begehrt bei Schwertschmieden.",
                "Die Synagoge Santa MarÃ­a la Blanca ist eines der Ã¤ltesten erhaltenen jÃ¼dischen Bauwerke in Europa.",
                "Das Stadtbild wird von der massiven Festung des AlcÃ¡zar von Toledo dominiert.",
                "Die rÃ¶mische BrÃ¼cke Puente de AlcÃ¡ntara ist einer der HauptzugÃ¤nge zur Altstadt."
          ],
          "hu": [
                "Toledo egykor a Spanyol Birodalom fÅ‘vÃ¡rosa volt, amÃ­g Madrid 1561-ben Ã¡t nem vette ezt a szerepet.",
                "A toledÃ³i katedrÃ¡lis a vilÃ¡g egyik legnagyobb Ã©s legpompÃ¡sabb gÃ³tikus katedrÃ¡lisa.",
                "A hÃ­res festÅ‘, El Greco ToledÃ³ban Ã©lt, Ã©s szÃ¡mos mÅ±ve itt van kiÃ¡llÃ­tva.",
                "A vÃ¡ros ismert a marcipÃ¡nrÃ³l, egy arab eredetÅ± Ã©des finomsÃ¡grÃ³l.",
                "A toledÃ³i acÃ©l a kÃ¶zÃ©pkorban hÃ­res volt kemÃ©nysÃ©gÃ©rÅ‘l, Ã©s nagyon keresett volt a kardkovÃ¡csok kÃ¶rÃ©ben.",
                "A Santa MarÃ­a la Blanca zsinagÃ³ga az egyik legrÃ©gebbi fennmaradt zsidÃ³ Ã©pÃ­tmÃ©ny EurÃ³pÃ¡ban.",
                "A vÃ¡roskÃ©pet a toledÃ³i AlcÃ¡zar masszÃ­v erÅ‘dÃ­tmÃ©nye uralja.",
                "Az AlcÃ¡ntara rÃ³mai hÃ­d az Ã³vÃ¡ros egyik fÅ‘ bejÃ¡rata."
          ],
          "ro": [
                "Toledo a fost odatÄƒ capitala Imperiului Spaniol, pÃ¢nÄƒ cÃ¢nd Madridul a preluat acest rol Ã®n 1561.",
                "Catedrala din Toledo este consideratÄƒ una dintre cele mai mari È™i mai magnifice catedrale gotice din lume.",
                "Celebrul pictor El Greco a trÄƒit Ã®n Toledo, iar multe dintre operele sale sunt expuse aici.",
                "OraÈ™ul este cunoscut pentru marÈ›ipan, o delicatesÄƒ dulce de origine arabÄƒ.",
                "OÈ›elul de Toledo a fost faimos Ã®n Evul Mediu pentru duritatea sa È™i era foarte cÄƒutat de fierarii de sÄƒbii.",
                "Sinagoga Santa MarÃ­a la Blanca este una dintre cele mai vechi structuri evreieÈ™ti supravieÈ›uitoare din Europa.",
                "Peisajul urban este dominat de fortÄƒreaÈ›a masivÄƒ AlcÃ¡zar din Toledo.",
                "Podul roman Puente de AlcÃ¡ntara este unul dintre principalele puncte de acces Ã®n oraÈ™ul vechi."
          ],
          "en": [
                "Toledo was once the capital of the Spanish Empire until Madrid took over this role in 1561.",
                "The Cathedral of Toledo is considered one of the largest and most magnificent Gothic cathedrals in the world.",
                "The famous painter El Greco lived in Toledo, and many of his works are exhibited here.",
                "The city is known for marzipan, a sweet delicacy of Arab origin.",
                "Toledo steel was famous in the Middle Ages for its hardness and was highly sought after by swordsmiths.",
                "The Santa MarÃ­a la Blanca Synagogue is one of the oldest surviving Jewish structures in Europe.",
                "The cityscape is dominated by the massive fortress of the AlcÃ¡zar of Toledo.",
                "The Roman bridge Puente de AlcÃ¡ntara is one of the main access points to the old town."
          ]
    },
    image: "/geo-images/spain/toledo.webp",
    
  },
  {
    id: "es-santiago", type: "city", parent: "ES-GA", coords: [-8.5448, 42.8782],
    name: {"de": "Santiago de Compostela", "hu": "Santiago de Compostela", "ro": "Santiago de Compostela", "en": "Santiago de Compostela"},
    
    description: {
          "de": "Santiago de Compostela in Galicien ist eines der bedeutendsten Pilgerziele der christlichen Welt. Als Endpunkt des berÃ¼hmten Jakobswegs (Camino de Santiago) empfÃ¤ngt die Stadt jÃ¤hrlich hunderttausende Pilger und Reisende, die sich vor der beeindruckenden Kathedrale versammeln. Die gesamte Altstadt, mit ihren gepflasterten StraÃŸen, ArkadengÃ¤ngen und GranitgebÃ¤uden, gehÃ¶rt zum UNESCO-Weltkulturerbe. Das feuchte, ozeanische Klima Galiciens sorgt fÃ¼r eine Ã¼ppig grÃ¼ne Umgebung, die einen schÃ¶nen Kontrast zur steinernen Architektur bildet. Die Stadt ist zudem berÃ¼hmt fÃ¼r die lebhafte AtmosphÃ¤re der UniversitÃ¤t Santiago und eine exzellente MeeresfrÃ¼chte-KÃ¼che.",
          "hu": "A galÃ­ciai Santiago de Compostela a keresztÃ©ny vilÃ¡g egyik legjelentÅ‘sebb zarÃ¡ndokcÃ©lpontja. A hÃ­res Szent Jakab-Ãºt (Camino de Santiago) vÃ©gpontjakÃ©nt a vÃ¡ros Ã©vente zarÃ¡ndokok Ã©s utazÃ³k szÃ¡zezreit fogadja, akik a lenyÅ±gÃ¶zÅ‘ katedrÃ¡lis elÅ‘tt gyÅ±lnek Ã¶ssze. Az egÃ©sz Ã³vÃ¡ros macskakÃ¶ves utcÃ¡ival, Ã¡rkÃ¡dsoraival Ã©s grÃ¡nitÃ©pÃ¼leteivel az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze. GalÃ­cia nedves, Ã³ceÃ¡ni Ã©ghajlata buja, zÃ¶ld kÃ¶rnyezetet biztosÃ­t, amely gyÃ¶nyÃ¶rÅ± kontrasztot alkot a kÅ‘Ã©pÃ­tÃ©szettel. A vÃ¡ros hÃ­res a Santiago-i Egyetem nyÃ¼zsgÅ‘ hangulatÃ¡rÃ³l Ã©s a kivÃ¡lÃ³ tengeri Ã©teleirÅ‘l is.",
          "ro": "Santiago de Compostela din Galicia este una dintre cele mai importante destinaÈ›ii de pelerinaj din lumea creÈ™tinÄƒ. Ca punct final al faimosului Camino de Santiago, oraÈ™ul primeÈ™te anual sute de mii de pelerini È™i cÄƒlÄƒtori care se adunÄƒ Ã®n faÈ›a impresionantei catedrale. ÃŽntregul oraÈ™ vechi, cu strÄƒzile sale pietruite, arcadele È™i clÄƒdirile din granit, este Ã®n Patrimoniul Mondial UNESCO. Clima oceanicÄƒ È™i umedÄƒ a Galiciei oferÄƒ un mediu verde luxuriant, care contrasteazÄƒ frumos cu arhitectura din piatrÄƒ. OraÈ™ul este renumit È™i pentru atmosfera plinÄƒ de viaÈ›Äƒ a UniversitÄƒÈ›ii din Santiago È™i pentru bucÄƒtÄƒria excelentÄƒ cu fructe de mare.",
          "en": "Santiago de Compostela in Galicia is one of the most important pilgrimage destinations in the Christian world. As the end point of the famous Camino de Santiago (Way of St. James), the city annually welcomes hundreds of thousands of pilgrims and travelers who gather in front of the impressive cathedral. The entire old town, with its cobbled streets, arcades, and granite buildings, is a UNESCO World Heritage site. Galicia's damp, oceanic climate provides a lush green environment that beautifully contrasts with the stone architecture. The city is also famous for the lively atmosphere of the University of Santiago and its excellent seafood cuisine."
    },
    facts: {
          "de": [
                "Das Grab des Apostels Jakobus soll sich in der Krypta der Kathedrale befinden.",
                "Das riesige Weihrauchfass (Botafumeiro) der Kathedrale wird zu besonderen AnlÃ¤ssen durch das Querschiff geschwungen.",
                "Das Hostal de los Reyes CatÃ³licos am Obradoiro-Platz ist heute ein luxuriÃ¶ses Parador-Hotel.",
                "Die UniversitÃ¤t von Santiago de Compostela wurde 1495 gegrÃ¼ndet und ist eine der Ã¤ltesten der Welt.",
                "Die Tarta de Santiago, ein Mandelkuchen, ist die bekannteste sÃ¼ÃŸe SpezialitÃ¤t der Region.",
                "Der Jakobsweg zieht jÃ¤hrlich Ã¼ber 300.000 registrierte Pilger an.",
                "Pulpo a la gallega (Krake nach galicischer Art) ist das emblematischste Gericht der lokalen Gastronomie.",
                "Galicien hat eine eigene Sprache, das Galicische (Galego), das dem Portugiesischen Ã¤hnlich ist."
          ],
          "hu": [
                "A hagyomÃ¡ny szerint Jakab apostol sÃ­rja a katedrÃ¡lis kriptÃ¡jÃ¡ban talÃ¡lhatÃ³.",
                "A katedrÃ¡lis hatalmas fÃ¼stÃ¶lÅ‘jÃ©t (Botafumeiro) kÃ¼lÃ¶nleges alkalmakkor lengetik a kereszthajÃ³ban.",
                "Az Obradoiro tÃ©ren Ã¡llÃ³ Hostal de los Reyes CatÃ³licos ma luxus Parador szÃ¡lloda.",
                "A Santiago de Compostela-i Egyetemet 1495-ben alapÃ­tottÃ¡k, Ã©s a vilÃ¡g egyik legrÃ©gebbi egyeteme.",
                "A Tarta de Santiago, egy mandulatorta, a rÃ©giÃ³ legismertebb Ã©des specialitÃ¡sa.",
                "A Szent Jakab-Ãºt Ã©vente tÃ¶bb mint 300 000 regisztrÃ¡lt zarÃ¡ndokot vonz.",
                "A Pulpo a la gallega (galÃ­ciai polip) a helyi gasztronÃ³mia legemblematikusabb Ã©tele.",
                "GalÃ­cia sajÃ¡t nyelvvel rendelkezik, a galÃ­ciaival (galego), amely hasonlÃ­t a portugÃ¡lra."
          ],
          "ro": [
                "Se spune cÄƒ mormÃ¢ntul Apostolului Iacob se aflÄƒ Ã®n cripta catedralei.",
                "UriaÈ™a cÄƒdelniÈ›Äƒ (Botafumeiro) a catedralei este balansatÄƒ prin transept la ocazii speciale.",
                "Hostal de los Reyes CatÃ³licos din PiaÈ›a Obradoiro este astÄƒzi un hotel Parador de lux.",
                "Universitatea din Santiago de Compostela a fost fondatÄƒ Ã®n 1495 È™i este una dintre cele mai vechi din lume.",
                "Tarta de Santiago, o prÄƒjiturÄƒ cu migdale, este cea mai faimoasÄƒ specialitate dulce a regiunii.",
                "Camino de Santiago atrage anual peste 300.000 de pelerini Ã®nregistraÈ›i.",
                "Pulpo a la gallega (caracatiÈ›Äƒ Ã®n stil galician) este cel mai emblematic fel de mÃ¢ncare al gastronomiei locale.",
                "Galicia are propria sa limbÄƒ, galiciana (galego), care este asemÄƒnÄƒtoare cu portugheza."
          ],
          "en": [
                "The tomb of the Apostle James is said to be located in the crypt of the cathedral.",
                "The cathedral's giant censer (Botafumeiro) is swung through the transept on special occasions.",
                "The Hostal de los Reyes CatÃ³licos on the Obradoiro square is today a luxurious Parador hotel.",
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
          "de": "Die Alhambra in Granada ist zweifellos das beeindruckendste Monument der maurischen Kultur in Europa. Diese auf dem Sabikah-HÃ¼gel thronende Stadtfestung ist ein architektonisches Meisterwerk aus dem 13. und 14. Jahrhundert. Die PalÃ¤ste der Nasriden-Sultane faszinieren mit filigranen Stuckarbeiten, feinen Mosaiken und ruhigen InnenhÃ¶fen, in denen das sanfte PlÃ¤tschern von WasserfontÃ¤nen die Luft erfÃ¼llt. Direkt neben den PalÃ¤sten liegen die wunderschÃ¶nen GÃ¤rten des Generalife, der ehemaligen Sommerresidenz. Die Alhambra ist nicht nur ein Palast, sondern ein vollkommener Ausdruck der islamischen Kunst und Philosophie.",
          "hu": "A granadai Alhambra kÃ©tsÃ©gtelenÃ¼l a mÃ³r kultÃºra leglenyÅ±gÃ¶zÅ‘bb mÅ±emlÃ©ke EurÃ³pÃ¡ban. A Sabikah-hegyen trÃ³nolÃ³ vÃ¡ros-erÅ‘d a 13. Ã©s 14. szÃ¡zadbÃ³l szÃ¡rmazÃ³ Ã©pÃ­tÃ©szeti mestermÅ±. A Naszrid szultÃ¡nok palotÃ¡i filigrÃ¡n stukkÃ³munkÃ¡kkal, finom mozaikokkal Ã©s csendes belsÅ‘ udvarokkal nyÅ±gÃ¶znek le, ahol a szÃ¶kÅ‘kutak lÃ¡gy csobogÃ¡sa tÃ¶lti be a levegÅ‘t. A palotÃ¡k kÃ¶zvetlen kÃ¶zelÃ©ben talÃ¡lhatÃ³k a Generalife, az egykori nyÃ¡ri rezidencia gyÃ¶nyÃ¶rÅ± kertjei. Az Alhambra nem pusztÃ¡n egy palota, hanem az iszlÃ¡m mÅ±vÃ©szet Ã©s filozÃ³fia tÃ¶kÃ©letes kifejezÅ‘dÃ©se.",
          "ro": "Alhambra din Granada este, fÄƒrÄƒ Ã®ndoialÄƒ, cel mai impresionant monument al culturii maure din Europa. Acest oraÈ™-fortÄƒreaÈ›Äƒ care troneazÄƒ pe dealul Sabikah este o capodoperÄƒ arhitecturalÄƒ din secolele al XIII-lea È™i al XIV-lea. Palatele sultanilor Nasrid fascineazÄƒ cu stucaturi filigranate, mozaicuri fine È™i curÈ›i interioare liniÈ™tite, unde susurul blÃ¢nd al fÃ¢ntÃ¢nilor cu apÄƒ umple aerul. Chiar lÃ¢ngÄƒ palate se aflÄƒ frumoasele grÄƒdini ale Generalife, fosta reÈ™edinÈ›Äƒ de varÄƒ. Alhambra nu este doar un palat, ci o expresie perfectÄƒ a artei È™i filosofiei islamice.",
          "en": "The Alhambra in Granada is undoubtedly the most impressive monument of Moorish culture in Europe. Perched on the Sabikah hill, this city-fortress is an architectural masterpiece from the 13th and 14th centuries. The palaces of the Nasrid Sultans fascinate with filigree stucco work, fine mosaics, and tranquil courtyards where the gentle babble of water fountains fills the air. Right next to the palaces are the beautiful gardens of the Generalife, the former summer residence. The Alhambra is not just a palace but a perfect expression of Islamic art and philosophy."
    },
    facts: {
          "de": [
                "Der Name 'Alhambra' leitet sich vom Arabischen 'al-Qal'a al-Hamra' ab, was 'die rote Festung' bedeutet.",
                "Die NasridenpalÃ¤ste, wie der Myrtenhof, sind das architektonische HerzstÃ¼ck der Anlage.",
                "Der Palast Karls V. wurde spÃ¤ter im Renaissance-Stil mitten in die Alhambra gebaut.",
                "Ein ausgeklÃ¼geltes Hydrauliksystem versorgte die gesamte Festung schon im Mittelalter mit Wasser.",
                "In den WÃ¤nden sind tausende poetische Inschriften und Koranverse in kunstvoller Kalligrafie eingraviert.",
                "Die Alhambra wurde 1984 in die Liste des UNESCO-Weltkulturerbes aufgenommen.",
                "Der Generalife, der Sommerpalast, liegt etwas hÃ¶her als die Alhambra und bot eine kÃ¼hle Zuflucht.",
                "Heute ist die Alhambra eine der meistbesuchten Touristenattraktionen Spaniens."
          ],
          "hu": [
                "Az 'Alhambra' nÃ©v az arab 'al-Qal'a al-Hamra' szÃ³bÃ³l szÃ¡rmazik, amely 'vÃ¶rÃ¶s erÅ‘dÃ¶t' jelent.",
                "A Naszrid-palotÃ¡k, pÃ©ldÃ¡ul a Mirtusz-udvar, az Ã©pÃ¼letegyÃ¼ttes Ã©pÃ­tÃ©szeti kÃ¶zpontjai.",
                "V. KÃ¡roly palotÃ¡jÃ¡t kÃ©sÅ‘bb reneszÃ¡nsz stÃ­lusban Ã©pÃ­tettÃ©k az Alhambra kÃ¶zepÃ©re.",
                "Egy Ã¶tletes hidraulikus rendszer mÃ¡r a kÃ¶zÃ©pkorban vÃ­zzel lÃ¡tta el az egÃ©sz erÅ‘dÃ¶t.",
                "A falakba tÃ¶bb ezer kÃ¶ltÅ‘i feliratot Ã©s KorÃ¡n-verset vÃ©stek mÅ±vÃ©szi kalligrÃ¡fiÃ¡val.",
                "Az AlhambrÃ¡t 1984-ben vettÃ©k fel az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi listÃ¡jÃ¡ra.",
                "A Generalife, a nyÃ¡ri palota valamivel magasabban fekszik, mint az Alhambra, Ã©s hÅ±vÃ¶s menedÃ©ket nyÃºjtott.",
                "Ma az Alhambra SpanyolorszÃ¡g egyik leglÃ¡togatottabb turisztikai lÃ¡tvÃ¡nyossÃ¡ga."
          ],
          "ro": [
                "Numele 'Alhambra' derivÄƒ din arabÄƒ 'al-Qal'a al-Hamra', care Ã®nseamnÄƒ 'fortÄƒreaÈ›a roÈ™ie'.",
                "Palatele Nasrid, cum ar fi Curtea MirÈ›ilor, sunt piesa centralÄƒ arhitecturalÄƒ a complexului.",
                "Palatul lui Carol al V-lea a fost construit mai tÃ¢rziu Ã®n stil renascentist chiar Ã®n mijlocul Alhambrei.",
                "Un sistem hidraulic ingenios a furnizat apÄƒ Ã®ntregii fortÄƒreÈ›e Ã®ncÄƒ din Evul Mediu.",
                "Mii de inscripÈ›ii poetice È™i versete din Coran sunt gravate Ã®n pereÈ›i cu o caligrafie artisticÄƒ.",
                "Alhambra a fost adÄƒugatÄƒ pe lista Patrimoniului Mondial UNESCO Ã®n 1984.",
                "Generalife, palatul de varÄƒ, este situat puÈ›in mai sus decÃ¢t Alhambra È™i oferea un refugiu rÄƒcoros.",
                "AstÄƒzi, Alhambra este una dintre cele mai vizitate atracÈ›ii turistice din Spania."
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
    name: {"de": "Sagrada Familia", "hu": "Sagrada FamÃ­lia", "ro": "Sagrada Familia", "en": "Sagrada Familia"},
    
    description: {
          "de": "Die BasÃ­lica i Temple Expiatori de la Sagrada FamÃ­lia in Barcelona ist das Lebenswerk des visionÃ¤ren Architekten Antoni GaudÃ­. Sie ist zweifellos eine der auÃŸergewÃ¶hnlichsten und faszinierendsten Kirchen der Welt. Der Bau begann 1882 und ist bis heute unvollendet, wobei GaudÃ­ seine letzten 40 Lebensjahre ausschlieÃŸlich diesem Projekt widmete. Die Architektur verbindet auf organische Weise Gotik, Art Nouveau und von der Natur inspirierte Formen. Der Innenraum erinnert an einen gewaltigen Wald aus verÃ¤stelten SteinsÃ¤ulen, durchflutet vom Licht bunter Glasfenster. Die Fertigstellung der Sagrada FamÃ­lia wird weltweit mit groÃŸer Spannung erwartet.",
          "hu": "A barcelonai BasÃ­lica i Temple Expiatori de la Sagrada FamÃ­lia Antoni GaudÃ­ lÃ¡tnok Ã©pÃ­tÃ©sz Ã©letmÅ±ve. KÃ©tsÃ©gtelenÃ¼l a vilÃ¡g egyik legkÃ¼lÃ¶nlegesebb Ã©s leglenyÅ±gÃ¶zÅ‘bb temploma. Ã‰pÃ­tÃ©se 1882-ben kezdÅ‘dÃ¶tt Ã©s a mai napig befejezetlen, GaudÃ­ Ã©lete utolsÃ³ 40 Ã©vÃ©t kizÃ¡rÃ³lag ennek a projektnek szentelte. Az Ã©pÃ­tÃ©szet szervesen Ã¶tvÃ¶zi a gÃ³tikÃ¡t, a szecessziÃ³t Ã©s a termÃ©szet ihlette formÃ¡kat. A belsÅ‘ tÃ©r egy hatalmas, elÃ¡gazÃ³ kÅ‘oszlopokbÃ³l Ã¡llÃ³ erdÅ‘re emlÃ©keztet, amelyet szÃ­nes Ã³lomÃ¼veg ablakok fÃ©nye Ã¡raszt el. A Sagrada FamÃ­lia befejezÃ©sÃ©t vilÃ¡gszerte nagy vÃ¡rakozÃ¡s Ã¶vezi.",
          "ro": "BasÃ­lica i Temple Expiatori de la Sagrada FamÃ­lia din Barcelona este munca de o viaÈ›Äƒ a arhitectului vizionar Antoni GaudÃ­. Este, fÄƒrÄƒ Ã®ndoialÄƒ, una dintre cele mai extraordinare È™i fascinante biserici din lume. ConstrucÈ›ia a Ã®nceput Ã®n 1882 È™i este Ã®ncÄƒ neterminatÄƒ, GaudÃ­ dedicÃ¢ndu-È™i ultimii 40 de ani din viaÈ›Äƒ exclusiv acestui proiect. Arhitectura combinÄƒ Ã®n mod organic goticul, Art Nouveau È™i formele inspirate din naturÄƒ. Interiorul aminteÈ™te de o pÄƒdure masivÄƒ de stÃ¢lpi de piatrÄƒ ramificaÈ›i, inundatÄƒ de lumina vitraliilor colorate. Finalizarea Sagrada FamÃ­lia este aÈ™teptatÄƒ cu mare nerÄƒbdare Ã®n Ã®ntreaga lume.",
          "en": "The BasÃ­lica i Temple Expiatori de la Sagrada FamÃ­lia in Barcelona is the life's work of the visionary architect Antoni GaudÃ­. It is undoubtedly one of the most extraordinary and fascinating churches in the world. Construction began in 1882 and remains unfinished to this day, with GaudÃ­ dedicating the last 40 years of his life exclusively to this project. The architecture organically combines Gothic, Art Nouveau, and nature-inspired forms. The interior resembles a massive forest of branching stone columns, flooded with light from colorful stained glass windows. The completion of the Sagrada FamÃ­lia is eagerly anticipated worldwide."
    },
    facts: {
          "de": [
                "Der Bau wird ausschlieÃŸlich durch Spenden und Eintrittsgelder finanziert.",
                "Nach Fertigstellung wird sie mit 172,5 Metern die hÃ¶chste Kirche der Welt sein.",
                "GaudÃ­ entwarf 18 TÃ¼rme, die Jesus, Maria, die Evangelisten und die Apostel reprÃ¤sentieren.",
                "Die Krypta und die Geburtsfassade wurden 2005 zum UNESCO-Weltkulturerbe erklÃ¤rt.",
                "GaudÃ­ wurde nach seinem tragischen Tod 1926 in der Krypta der Kirche beigesetzt.",
                "Der zentrale Turm, der Jesus gewidmet ist, wird von einem riesigen Kreuz gekrÃ¶nt werden.",
                "Die Architekten streben eine Fertigstellung zum 100. Todestag von GaudÃ­ im Jahr 2026 an.",
                "Die detaillierten Steinarbeiten an den Fassaden erzÃ¤hlen komplexe biblische Geschichten."
          ],
          "hu": [
                "Az Ã©pÃ­tkezÃ©st kizÃ¡rÃ³lag adomÃ¡nyokbÃ³l Ã©s belÃ©pÅ‘dÃ­jakbÃ³l finanszÃ­rozzÃ¡k.",
                "BefejezÃ©sekor 172,5 mÃ©terrel a vilÃ¡g legmagasabb temploma lesz.",
                "GaudÃ­ 18 tornyot tervezett, amelyek JÃ©zust, MÃ¡riÃ¡t, az evangÃ©listÃ¡kat Ã©s az apostolokat jelkÃ©pezik.",
                "A kriptÃ¡t Ã©s a SzÃ¼letÃ©s homlokzatÃ¡t 2005-ben az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©vÃ© nyilvÃ¡nÃ­tottÃ¡k.",
                "GaudÃ­t 1926-os tragikus halÃ¡la utÃ¡n a templom kriptÃ¡jÃ¡ban temettÃ©k el.",
                "A JÃ©zusnak szentelt kÃ¶zponti tornyot egy hatalmas kereszt fogja megkoronÃ¡zni.",
                "Az Ã©pÃ­tÃ©szek a befejezÃ©st GaudÃ­ halÃ¡lÃ¡nak 100. Ã©vfordulÃ³jÃ¡ra, 2026-ra tervezik.",
                "A homlokzatok rÃ©szletgazdag kÅ‘faragÃ¡sai Ã¶sszetett bibliai tÃ¶rtÃ©neteket mesÃ©lnek el."
          ],
          "ro": [
                "ConstrucÈ›ia este finanÈ›atÄƒ exclusiv din donaÈ›ii È™i taxe de intrare.",
                "OdatÄƒ finalizatÄƒ, va fi cea mai Ã®naltÄƒ bisericÄƒ din lume, cu 172,5 metri.",
                "GaudÃ­ a proiectat 18 turnuri, reprezentÃ¢ndu-i pe Iisus, Maria, evangheliÈ™ti È™i apostoli.",
                "Cripta È™i FaÈ›ada NaÈ™terii au fost declarate Patrimoniu Mondial UNESCO Ã®n 2005.",
                "GaudÃ­ a fost Ã®nmormÃ¢ntat Ã®n cripta bisericii dupÄƒ moartea sa tragicÄƒ din 1926.",
                "Turnul central, dedicat lui Iisus, va fi Ã®ncoronat de o cruce uriaÈ™Äƒ.",
                "ArhitecÈ›ii vizeazÄƒ finalizarea pentru a marca a 100-a comemorare a morÈ›ii lui GaudÃ­, Ã®n 2026.",
                "Sculpturile detaliate Ã®n piatrÄƒ de pe faÈ›ade spun poveÈ™ti biblice complexe."
          ],
          "en": [
                "The construction is entirely funded by private donations and entrance fees.",
                "Upon completion, it will be the tallest church in the world at 172.5 meters.",
                "GaudÃ­ designed 18 towers representing Jesus, Mary, the Evangelists, and the Apostles.",
                "The crypt and the Nativity facade were declared a UNESCO World Heritage site in 2005.",
                "GaudÃ­ was buried in the crypt of the church following his tragic death in 1926.",
                "The central tower, dedicated to Jesus, will be crowned with a giant cross.",
                "The architects aim for completion to mark the 100th anniversary of GaudÃ­'s death in 2026.",
                "The detailed stonework on the facades tells complex biblical stories."
          ]
    },
    image: "/geo-images/spain/sagrada-familia.webp",
    
  },
  {
    id: "es-park-guell", type: "landmark", parent: "ES-CT", coords: [2.1527, 41.4145],
    name: {"de": "Park GÃ¼ell", "hu": "GÃ¼ell park", "ro": "Parcul GÃ¼ell", "en": "Park GÃ¼ell"},
    
    description: {
          "de": "Der Park GÃ¼ell, hoch oben auf dem HÃ¼gel Carmel gelegen, ist ein weiteres Meisterwerk von Antoni GaudÃ­ und ein ikonisches Symbol Barcelonas. UrsprÃ¼nglich als exklusive Gartenstadt konzipiert, wurde das Projekt nie vollendet und schlieÃŸlich in einen Ã¶ffentlichen Park umgewandelt. Der Park ist berÃ¼hmt fÃ¼r seine organischen Architekturformen, farbenfrohen Mosaike (TrencadÃ­s) und fantasievollen Pavillons. Das HerzstÃ¼ck ist die groÃŸe Terrasse mit der geschwungenen, mit Kacheln verzierten Bank, die einen spektakulÃ¤ren Blick auf die Stadt und das Mittelmeer bietet. Der Park GÃ¼ell wirkt wie ein Spaziergang durch ein surrealistisches MÃ¤rchenland.",
          "hu": "A Carmel-hegy tetejÃ©n fekvÅ‘ GÃ¼ell park Antoni GaudÃ­ Ãºjabb remekmÅ±ve Ã©s Barcelona ikonikus szimbÃ³luma. Eredetileg exkluzÃ­v kertvÃ¡rosnak terveztÃ©k, a projekt sosem fejezÅ‘dÃ¶tt be, Ã©s vÃ©gÃ¼l nyilvÃ¡nos parkkÃ¡ alakÃ­tottÃ¡k. A park organikus Ã©pÃ­tÃ©szeti formÃ¡irÃ³l, szÃ­nes mozaikjairÃ³l (trencadÃ­s) Ã©s fantÃ¡ziadÃºs pavilonjairÃ³l hÃ­res. A kÃ¶zponti eleme a nagy terasz a hullÃ¡mos, csempÃ©zett paddal, ahonnan lÃ¡tvÃ¡nyos kilÃ¡tÃ¡s nyÃ­lik a vÃ¡rosra Ã©s a FÃ¶ldkÃ¶zi-tengerre. A GÃ¼ell parkban tett sÃ©ta olyan, mintha egy szÃ¼rrealista meseorszÃ¡gban jÃ¡rnÃ¡nk.",
          "ro": "Parcul GÃ¼ell, situat sus pe dealul Carmel, este o altÄƒ capodoperÄƒ a lui Antoni GaudÃ­ È™i un simbol iconic al Barcelonei. Conceput iniÈ›ial ca un oraÈ™-grÄƒdinÄƒ exclusivist, proiectul nu a fost niciodatÄƒ finalizat È™i a fost Ã®n cele din urmÄƒ transformat Ã®ntr-un parc public. Parcul este renumit pentru formele sale arhitecturale organice, mozaicurile colorate (trencadÃ­s) È™i pavilioanele fanteziste. Piesa centralÄƒ este marea terasÄƒ cu banca È™erpuitÄƒ, decoratÄƒ cu plÄƒci ceramice, care oferÄƒ vederi spectaculoase asupra oraÈ™ului È™i MÄƒrii Mediterane. Parcul GÃ¼ell pare ca o plimbare printr-un tÄƒrÃ¢m de basm suprarealist.",
          "en": "Park GÃ¼ell, perched high on Carmel Hill, is another masterpiece by Antoni GaudÃ­ and an iconic symbol of Barcelona. Originally conceived as an exclusive garden city, the project was never completed and was eventually converted into a public park. The park is famous for its organic architectural forms, colorful mosaics (trencadÃ­s), and imaginative pavilions. The centerpiece is the main terrace with its undulating, tile-decorated bench, offering spectacular views of the city and the Mediterranean Sea. Park GÃ¼ell feels like a stroll through a surreal fairytale land."
    },
    facts: {
          "de": [
                "Der Park ist nach dem Unternehmer Eusebi GÃ¼ell benannt, GaudÃ­s wichtigstem MÃ¤zen.",
                "Der Park GÃ¼ell wurde 1984 von der UNESCO zum Weltkulturerbe erklÃ¤rt.",
                "Am Eingang werden Besucher von dem berÃ¼hmten bunten Salamander (oder Drachen) begrÃ¼ÃŸt.",
                "Die groÃŸe Terrasse wird von 86 dorischen SÃ¤ulen gestÃ¼tzt, die einen Marktplatz bilden.",
                "GaudÃ­ lebte 20 Jahre lang in einem der wenigen fertiggestellten HÃ¤user im Park.",
                "Das Haus, in dem GaudÃ­ lebte, ist heute das Casa Museu GaudÃ­.",
                "Die Architektur des Parks integriert sich nahezu nahtlos in die natÃ¼rliche Umgebung.",
                "Um ÃœberfÃ¼llung zu vermeiden, ist der Zugang zum Monumentalbereich des Parks mittlerweile begrenzt."
          ],
          "hu": [
                "A parkot Eusebi GÃ¼ell vÃ¡llalkozÃ³rÃ³l, GaudÃ­ legfontosabb mecÃ©nÃ¡sÃ¡rÃ³l neveztÃ©k el.",
                "A GÃ¼ell parkot 1984-ben az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©vÃ© nyilvÃ¡nÃ­tottÃ¡k.",
                "A bejÃ¡ratnÃ¡l a hÃ­res szÃ­nes szalamandra (vagy sÃ¡rkÃ¡ny) fogadja a lÃ¡togatÃ³kat.",
                "A nagy teraszt 86 dÃ³r oszlop tartja, amelyek egy piacteret alkotnak.",
                "GaudÃ­ 20 Ã©vig Ã©lt a park egyik kevÃ©s befejezett hÃ¡zÃ¡ban.",
                "A hÃ¡z, ahol GaudÃ­ Ã©lt, ma a Casa Museu GaudÃ­ (GaudÃ­ MÃºzeum).",
                "A park Ã©pÃ­tÃ©szete szinte zÃ¶kkenÅ‘mentesen illeszkedik a termÃ©szetes kÃ¶rnyezetbe.",
                "A tÃºlzsÃºfoltsÃ¡g elkerÃ¼lÃ©se Ã©rdekÃ©ben a park mÅ±emlÃ©ki terÃ¼letÃ©re a belÃ©pÃ©s ma mÃ¡r korlÃ¡tozott."
          ],
          "ro": [
                "Parcul este numit dupÄƒ antreprenorul Eusebi GÃ¼ell, cel mai important mecena al lui GaudÃ­.",
                "Parcul GÃ¼ell a fost declarat Patrimoniu Mondial UNESCO Ã®n 1984.",
                "La intrare, vizitatorii sunt Ã®ntÃ¢mpinaÈ›i de celebra salamandrÄƒ (sau dragon) coloratÄƒ.",
                "Terasa mare este susÈ›inutÄƒ de 86 de coloane dorice care formeazÄƒ o piaÈ›Äƒ.",
                "GaudÃ­ a locuit timp de 20 de ani Ã®ntr-una dintre puÈ›inele case finalizate din parc.",
                "Casa Ã®n care a trÄƒit GaudÃ­ este acum Casa Museu GaudÃ­.",
                "Arhitectura parcului se integreazÄƒ aproape perfect Ã®n mediul natural.",
                "Pentru a evita supraaglomerarea, accesul Ã®n zona monumentalÄƒ a parcului este acum limitat."
          ],
          "en": [
                "The park is named after the entrepreneur Eusebi GÃ¼ell, GaudÃ­'s most important patron.",
                "Park GÃ¼ell was declared a UNESCO World Heritage site in 1984.",
                "At the entrance, visitors are greeted by the famous colorful salamander (or dragon).",
                "The main terrace is supported by 86 Doric columns that form a marketplace.",
                "GaudÃ­ lived in one of the few completed houses in the park for 20 years.",
                "The house where GaudÃ­ lived is now the Casa Museu GaudÃ­.",
                "The park's architecture integrates almost seamlessly into the natural environment.",
                "To prevent overcrowding, access to the monumental zone of the park is now limited."
          ]
    },
    image: "/geo-images/spain/park-g-ell.webp",
    
  },
  {
    id: "es-prado", type: "landmark", parent: "ES-MD", coords: [-3.6922, 40.4138],
    name: {"de": "Museo del Prado", "hu": "Prado MÃºzeum", "ro": "Muzeul Prado", "en": "Prado Museum"},
    
    description: {
          "de": "Das Museo del Prado in Madrid ist eines der bedeutendsten und meistbesuchten Kunstmuseen der Welt. ErÃ¶ffnet im Jahr 1819, beherbergt das prachtvolle neoklassizistische GebÃ¤ude eine der weltweit feinsten Sammlungen europÃ¤ischer Kunst, die vom 12. Jahrhundert bis ins frÃ¼he 20. Jahrhundert reicht. Der Prado ist berÃ¼hmt fÃ¼r seine unvergleichlichen Meisterwerke spanischer KÃ¼nstler wie VelÃ¡zquez, Goya und El Greco, aber auch fÃ¼r herausragende Werke von Tizian, Rubens und Bosch. Ein Rundgang durch den Prado ist eine faszinierende Reise durch die europÃ¤ische Kunst- und Kulturgeschichte. Es ist das kronjuwelartige Zentrum des sogenannten goldenen Kunstdreiecks in Madrid.",
          "hu": "A madridi Prado MÃºzeum a vilÃ¡g egyik legjelentÅ‘sebb Ã©s leglÃ¡togatottabb mÅ±vÃ©szeti mÃºzeuma. Az 1819-ben megnyÃ­lt, pompÃ¡s neoklasszicista Ã©pÃ¼let az eurÃ³pai mÅ±vÃ©szet egyik legfinomabb gyÅ±jtemÃ©nyÃ©nek ad otthont, amely a 12. szÃ¡zadtÃ³l a 20. szÃ¡zad elejÃ©ig terjed. A Prado olyan spanyol mÅ±vÃ©szek pÃ¡ratlan remekmÅ±veirÅ‘l hÃ­res, mint VelÃ¡zquez, Goya Ã©s El Greco, de Tiziano, Rubens Ã©s Bosch kiemelkedÅ‘ alkotÃ¡sait is Å‘rzi. A PradÃ³ban tett sÃ©ta lenyÅ±gÃ¶zÅ‘ utazÃ¡s az eurÃ³pai mÅ±vÃ©szet Ã©s kultÃºrtÃ¶rtÃ©net vilÃ¡gÃ¡ba. Ez a madridi Ãºgynevezett arany mÅ±vÃ©szeti hÃ¡romszÃ¶g koronaÃ©kszerhez hasonlÃ³ kÃ¶zpontja.",
          "ro": "Muzeul Prado din Madrid este unul dintre cele mai importante È™i mai vizitate muzee de artÄƒ din lume. Deschis Ã®n 1819, clÄƒdirea magnificÄƒ neoclasicÄƒ gÄƒzduieÈ™te una dintre cele mai bune colecÈ›ii de artÄƒ europeanÄƒ din lume, datÃ¢nd din secolul al XII-lea pÃ¢nÄƒ la Ã®nceputul secolului al XX-lea. Prado este renumit pentru capodoperele sale incomparabile ale artiÈ™tilor spanioli precum VelÃ¡zquez, Goya È™i El Greco, dar È™i pentru lucrÄƒrile remarcabile ale lui Titian, Rubens È™i Bosch. Un tur al Prado este o cÄƒlÄƒtorie fascinantÄƒ prin istoria artei È™i culturii europene. Este centrul asemenea unei bijuterii al aÈ™a-numitului Triunghi de Aur al Artei din Madrid.",
          "en": "The Museo del Prado in Madrid is one of the most important and most visited art museums in the world. Opened in 1819, the magnificent neoclassical building houses one of the world's finest collections of European art, dating from the 12th century to the early 20th century. The Prado is famous for its incomparable masterpieces by Spanish artists such as VelÃ¡zquez, Goya, and El Greco, but also for outstanding works by Titian, Rubens, and Bosch. A tour of the Prado is a fascinating journey through European art and cultural history. It is the jewel-like center of the so-called Golden Triangle of Art in Madrid."
    },
    facts: {
          "de": [
                "Das GebÃ¤ude wurde ursprÃ¼nglich als naturwissenschaftliches Kabinett von Juan de Villanueva entworfen.",
                "Der Prado besitzt die umfassendste Sammlung spanischer Malerei weltweit.",
                "Zu den bekanntesten GemÃ¤lden gehÃ¶rt VelÃ¡zquez' Meisterwerk 'Las Meninas'.",
                "Die Sammlung von Francisco de Goya im Prado ist die grÃ¶ÃŸte der Welt.",
                "Das Museum zeigt auch Hieronymus Boschs berÃ¼hmtes Triptychon 'Der Garten der LÃ¼ste'.",
                "Insgesamt umfasst die Sammlung des Museums rund 8.600 GemÃ¤lde und Ã¼ber 700 Skulpturen.",
                "Der Prado feierte 2019 sein zweihundertjÃ¤hriges Bestehen mit groÃŸen Ausstellungen.",
                "Zusammen mit dem Thyssen-Bornemisza und dem Reina SofÃ­a bildet er das Madrider Kunstdreieck."
          ],
          "hu": [
                "Az Ã©pÃ¼letet eredetileg Juan de Villanueva tervezte termÃ©szettudomÃ¡nyi kabinetkÃ©nt.",
                "A Prado rendelkezik a spanyol festÃ©szet legÃ¡tfogÃ³bb gyÅ±jtemÃ©nyÃ©vel a vilÃ¡gon.",
                "A legismertebb festmÃ©nyek kÃ¶zÃ© tartozik VelÃ¡zquez remekmÅ±ve, a 'Las Meninas'.",
                "Francisco de Goya Prado-beli gyÅ±jtemÃ©nye a legnagyobb a vilÃ¡gon.",
                "A mÃºzeumban lÃ¡thatÃ³ Hieronymus Bosch hÃ­res triptichonja, a 'GyÃ¶nyÃ¶rÃ¶k kertje' is.",
                "A mÃºzeum gyÅ±jtemÃ©nye Ã¶sszesen mintegy 8600 festmÃ©nyt Ã©s tÃ¶bb mint 700 szobrot tartalmaz.",
                "A Prado 2019-ben nagyszabÃ¡sÃº kiÃ¡llÃ­tÃ¡sokkal Ã¼nnepelte fennÃ¡llÃ¡sÃ¡nak kÃ©tszÃ¡zadik Ã©vfordulÃ³jÃ¡t.",
                "A Thyssen-Bornemisza Ã©s a Reina SofÃ­a mÃºzeumokkal egyÃ¼tt alkotja a madridi mÅ±vÃ©szeti hÃ¡romszÃ¶get."
          ],
          "ro": [
                "ClÄƒdirea a fost iniÈ›ial conceputÄƒ ca un cabinet de È™tiinÈ›e naturale de cÄƒtre Juan de Villanueva.",
                "Prado deÈ›ine cea mai cuprinzÄƒtoare colecÈ›ie de picturÄƒ spaniolÄƒ din lume.",
                "Printre cele mai faimoase picturi se numÄƒrÄƒ capodopera lui VelÃ¡zquez 'Las Meninas'.",
                "ColecÈ›ia lui Francisco de Goya de la Prado este cea mai mare din lume.",
                "Muzeul expune, de asemenea, celebrul triptic al lui Hieronymus Bosch, 'GrÄƒdina deliciilor pÄƒmÃ¢nteÈ™ti'.",
                "ÃŽn total, colecÈ›ia muzeului include aproximativ 8.600 de picturi È™i peste 700 de sculpturi.",
                "Prado È™i-a sÄƒrbÄƒtorit bicentenarul Ã®n 2019 cu expoziÈ›ii majore.",
                "ÃŽmpreunÄƒ cu Thyssen-Bornemisza È™i Reina SofÃ­a, formeazÄƒ Triunghiul Artei din Madrid."
          ],
          "en": [
                "The building was originally designed as a natural science cabinet by Juan de Villanueva.",
                "The Prado holds the most comprehensive collection of Spanish painting in the world.",
                "Among the most famous paintings is VelÃ¡zquez's masterpiece 'Las Meninas'.",
                "The Francisco de Goya collection in the Prado is the largest in the world.",
                "The museum also displays Hieronymus Bosch's famous triptych 'The Garden of Earthly Delights'.",
                "In total, the museum's collection includes around 8,600 paintings and over 700 sculptures.",
                "The Prado celebrated its bicentenary in 2019 with major exhibitions.",
                "Together with the Thyssen-Bornemisza and Reina SofÃ­a, it forms Madrid's Golden Triangle of Art."
          ]
    },
    image: "/geo-images/spain/prado-museum.webp",
    
  },
  {
    id: "es-santiago-bernabeu", type: "landmark", parent: "ES-MD", coords: [-3.6883, 40.4531],
    name: {"de": "Santiago BernabÃ©u Stadion", "hu": "Santiago BernabÃ©u Stadion", "ro": "Stadionul Santiago BernabÃ©u", "en": "Santiago BernabÃ©u Stadium"},
    
    description: {
          "de": "Das Estadio Santiago BernabÃ©u im Herzen von Madrid ist ein wahrer Tempel des WeltfuÃŸballs. Es ist die stolze Heimat des legendÃ¤ren Vereins Real Madrid und Schauplatz zahlreicher epischer FuÃŸballschlachten. Seit seiner ErÃ¶ffnung im Jahr 1947 wurde das Stadion mehrfach modernisiert und ausgebaut, um den wachsenden Anforderungen gerecht zu werden. Mit seiner beeindruckenden Architektur und der steilen Anordnung der ZuschauerrÃ¤nge erzeugt das BernabÃ©u eine ohrenbetÃ¤ubende AtmosphÃ¤re bei jedem Spiel. FÃ¼r FuÃŸballfans ist ein Besuch, der eine Tour durch die TrophÃ¤ensÃ¤le und Spielerkabinen beinhaltet, ein unvergessliches Erlebnis.",
          "hu": "A madridi Estadio Santiago BernabÃ©u a vilÃ¡g labdarÃºgÃ¡sÃ¡nak igazi szentÃ©lye. A legendÃ¡s Real Madrid futballklub bÃ¼szke otthona, Ã©s szÃ¡mos epikus futballcsata helyszÃ­ne. 1947-es megnyitÃ¡sa Ã³ta a stadiont tÃ¶bbszÃ¶r korszerÅ±sÃ­tettÃ©k Ã©s bÅ‘vÃ­tettÃ©k a nÃ¶vekvÅ‘ igÃ©nyeknek megfelelÅ‘en. LenyÅ±gÃ¶zÅ‘ Ã©pÃ­tÃ©szetÃ©vel Ã©s a nÃ©zÅ‘tÃ©ri sorok meredek elrendezÃ©sÃ©vel a BernabÃ©u minden mÃ©rkÅ‘zÃ©sen fÃ¼lsiketÃ­tÅ‘ hangulatot teremt. A futballrajongÃ³k szÃ¡mÃ¡ra egy felejthetetlen Ã©lmÃ©ny a lÃ¡togatÃ¡s, amely magÃ¡ban foglalja a trÃ³featermek Ã©s a jÃ¡tÃ©kosÃ¶ltÃ¶zÅ‘k megtekintÃ©sÃ©t is.",
          "ro": "Estadio Santiago BernabÃ©u, situat Ã®n inima Madridului, este un adevÄƒrat templu al fotbalului mondial. Este casa mÃ¢ndrÄƒ a legendarului club Real Madrid È™i scena a numeroase bÄƒtÄƒlii epice de fotbal. De la deschiderea sa Ã®n 1947, stadionul a fost modernizat È™i extins de mai multe ori pentru a satisface cerinÈ›ele tot mai mari. Cu arhitectura sa impresionantÄƒ È™i dispunerea abruptÄƒ a tribunelor, BernabÃ©u creeazÄƒ o atmosferÄƒ asurzitoare la fiecare meci. Pentru fanii fotbalului, o vizitÄƒ care include un tur al sÄƒlilor cu trofee È™i al vestiarelor jucÄƒtorilor este o experienÈ›Äƒ de neuitat.",
          "en": "The Estadio Santiago BernabÃ©u in the heart of Madrid is a true temple of world football. It is the proud home of the legendary Real Madrid football club and the scene of numerous epic football battles. Since its opening in 1947, the stadium has been modernized and expanded several times to meet growing demands. With its impressive architecture and the steep arrangement of the spectator tiers, the BernabÃ©u creates a deafening atmosphere at every match. For football fans, a visit that includes a tour of the trophy rooms and player changing rooms is an unforgettable experience."
    },
    facts: {
          "de": [
                "Das Stadion ist nach dem ehemaligen PrÃ¤sidenten von Real Madrid, Santiago BernabÃ©u, benannt.",
                "Es hat eine KapazitÃ¤t von Ã¼ber 81.000 Zuschauern.",
                "Das BernabÃ©u war Gastgeber von vier Endspielen des Europapokals/der Champions League.",
                "Es war der Austragungsort des legendÃ¤ren WM-Finales 1982 zwischen Italien und Deutschland.",
                "Die Stadion-Tour beinhaltet den Zugang zum Spielfeldrand und zur PrÃ¤sidentenloge.",
                "Das Museum von Real Madrid im Stadion ist das am dritthÃ¤ufigsten besuchte Museum Madrids.",
                "Aktuell durchlÃ¤uft das Stadion einen massiven Umbau, der ihm ein futuristisches Aussehen verleihen wird.",
                "Es war das erste Stadion in Europa, das ein UEFA-5-Sterne-Zertifikat erhielt."
          ],
          "hu": [
                "A stadiont a Real Madrid egykori elnÃ¶kÃ©rÅ‘l, Santiago BernabÃ©urÃ³l neveztÃ©k el.",
                "BefogadÃ³kÃ©pessÃ©ge tÃ¶bb mint 81 000 nÃ©zÅ‘.",
                "A BernabÃ©u nÃ©gy Bajnokcsapatok EurÃ³pa KupÃ¡ja / Bajnokok LigÃ¡ja dÃ¶ntÅ‘nek adott otthont.",
                "Itt rendeztÃ©k az 1982-es labdarÃºgÃ³-vilÃ¡gbajnoksÃ¡g legendÃ¡s, OlaszorszÃ¡g Ã©s NÃ©metorszÃ¡g kÃ¶zÃ¶tti dÃ¶ntÅ‘jÃ©t.",
                "A stadiontÃºra magÃ¡ban foglalja a pÃ¡lya szÃ©lÃ©re Ã©s az elnÃ¶ki pÃ¡holyba valÃ³ belÃ©pÃ©st is.",
                "A stadionban talÃ¡lhatÃ³ Real Madrid mÃºzeum Madrid harmadik leglÃ¡togatottabb mÃºzeuma.",
                "A stadion jelenleg masszÃ­v Ã¡tÃ©pÃ­tÃ©s alatt Ã¡ll, amely futurisztikus megjelenÃ©st kÃ¶lcsÃ¶nÃ¶z neki.",
                "Ez volt az elsÅ‘ stadion EurÃ³pÃ¡ban, amely megkapta az UEFA 5 csillagos minÅ‘sÃ­tÃ©sÃ©t."
          ],
          "ro": [
                "Stadionul este numit dupÄƒ fostul preÈ™edinte al lui Real Madrid, Santiago BernabÃ©u.",
                "Are o capacitate de peste 81.000 de spectatori.",
                "BernabÃ©u a gÄƒzduit patru finale ale Cupei Europene / Ligii Campionilor.",
                "A fost locul de desfÄƒÈ™urare al legendarei finale a Cupei Mondiale din 1982 dintre Italia È™i Germania.",
                "Turul stadionului include acces la marginea terenului È™i la loja prezidenÈ›ialÄƒ.",
                "Muzeul Real Madrid de pe stadion este al treilea cel mai vizitat muzeu din Madrid.",
                "ÃŽn prezent, stadionul trece printr-o reconstrucÈ›ie masivÄƒ care Ã®i va oferi un aspect futurist.",
                "A fost primul stadion din Europa care a primit o certificare de 5 stele UEFA."
          ],
          "en": [
                "The stadium is named after the former president of Real Madrid, Santiago BernabÃ©u.",
                "It has a seating capacity of over 81,000 spectators.",
                "The BernabÃ©u has hosted four European Cup/Champions League finals.",
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
          "de": "Das Camp Nou, majestÃ¤tisch in Barcelona gelegen, ist das grÃ¶ÃŸte FuÃŸballstadion Europas. Als stolzes Heimstadion des FC Barcelona ist es ein Ort voller Leidenschaft, katalanischer IdentitÃ¤t und fuÃŸballerischer Exzellenz. Das 1957 eingeweihte Stadion hat im Laufe der Jahrzehnte einige der talentiertesten Spieler der FuÃŸballgeschichte gesehen. Die AtmosphÃ¤re bei Spielen, besonders wÃ¤hrend des berÃ¼hmten 'El ClÃ¡sico' gegen Real Madrid, ist elektrisierend und weltweit bekannt. Das angeschlossene FC Barcelona Museum zieht jedes Jahr Millionen von Besuchern an und lÃ¤sst die ruhmreiche Vereinsgeschichte lebendig werden.",
          "hu": "A barcelonai Camp Nou mÃ©ltÃ³sÃ¡gteljesen magasodik a vÃ¡ros fÃ¶lÃ©, mint EurÃ³pa legnagyobb futballstadionja. Az FC Barcelona bÃ¼szke otthonakÃ©nt a szenvedÃ©ly, a katalÃ¡n identitÃ¡s Ã©s a futballkivÃ¡lÃ³sÃ¡g szÃ­nhelye. Az 1957-ben felavatott stadion az Ã©vtizedek sorÃ¡n a futballtÃ¶rtÃ©nelem legtehetsÃ©gesebb jÃ¡tÃ©kosait lÃ¡tta jÃ¡tszani. A mÃ©rkÅ‘zÃ©sek hangulata, kÃ¼lÃ¶nÃ¶sen a Real Madrid elleni hÃ­res 'El ClÃ¡sico' alatt, felvillanyozÃ³ Ã©s vilÃ¡gszerte ismert. A stadionhoz tartozÃ³ FC Barcelona MÃºzeum Ã©vente lÃ¡togatÃ³k milliÃ³it vonzza, Ã©s megelevenÃ­ti a klub dicsÅ‘sÃ©ges tÃ¶rtÃ©nelmÃ©t.",
          "ro": "Camp Nou, situat maiestuos Ã®n Barcelona, este cel mai mare stadion de fotbal din Europa. Fiind casa mÃ¢ndrÄƒ a clubului FC Barcelona, este un loc plin de pasiune, identitate catalanÄƒ È™i excelenÈ›Äƒ fotbalisticÄƒ. Inaugurat Ã®n 1957, stadionul a vÄƒzut de-a lungul deceniilor unii dintre cei mai talentaÈ›i jucÄƒtori din istoria fotbalului. Atmosfera de la meciuri, Ã®n special Ã®n timpul celebrului 'El ClÃ¡sico' Ã®mpotriva lui Real Madrid, este electrizantÄƒ È™i cunoscutÄƒ Ã®n Ã®ntreaga lume. Muzeul FC Barcelona ataÈ™at atrage milioane de vizitatori Ã®n fiecare an È™i dÄƒ viaÈ›Äƒ istoriei glorioase a clubului.",
          "en": "Camp Nou, majestically situated in Barcelona, is the largest football stadium in Europe. As the proud home stadium of FC Barcelona, it is a place full of passion, Catalan identity, and footballing excellence. Inaugurated in 1957, the stadium has seen some of the most talented players in football history over the decades. The atmosphere during matches, especially during the famous 'El ClÃ¡sico' against Real Madrid, is electrifying and known worldwide. The attached FC Barcelona Museum attracts millions of visitors every year and brings the club's glorious history to life."
    },
    facts: {
          "de": [
                "Camp Nou hat eine beeindruckende ZuschauerkapazitÃ¤t von fast 100.000 PlÃ¤tzen.",
                "Der Name 'Camp Nou' ist Katalanisch und bedeutet wÃ¶rtlich Ã¼bersetzt 'Neues Feld'.",
                "Das Stadion beherbergte das ErÃ¶ffnungsspiel der FuÃŸball-Weltmeisterschaft 1982.",
                "Das Motto des FC Barcelona 'MÃ©s que un club' (Mehr als ein Verein) prangt groÃŸ auf den TribÃ¼nen.",
                "Das FC Barcelona Museum ist das meistbesuchte Museum in ganz Katalonien.",
                "1999 hielt Papst Johannes Paul II. auf dem Rasen des Camp Nou eine Messe ab.",
                "Die Stadiontour ermÃ¶glicht es den Besuchern, durch den Spielertunnel auf das Spielfeld zu gehen.",
                "Derzeit wird das Stadion unter dem Projekt 'Espai BarÃ§a' umfassend modernisiert und erweitert."
          ],
          "hu": [
                "A Camp Nou lenyÅ±gÃ¶zÅ‘, majdnem 100 000 fÅ‘s befogadÃ³kÃ©pessÃ©ggel rendelkezik.",
                "A 'Camp Nou' nÃ©v katalÃ¡n eredetÅ±, szÃ³ szerinti fordÃ­tÃ¡sban 'Ãšj MezÅ‘t' jelent.",
                "A stadion adott otthont az 1982-es labdarÃºgÃ³-vilÃ¡gbajnoksÃ¡g nyitÃ³mÃ©rkÅ‘zÃ©sÃ©nek.",
                "Az FC Barcelona mottÃ³ja, a 'MÃ©s que un club' (TÃ¶bb mint egy klub) nagy betÅ±kkel virÃ­t a lelÃ¡tÃ³kon.",
                "Az FC Barcelona MÃºzeum a leglÃ¡togatottabb mÃºzeum egÃ©sz KatalÃ³niÃ¡ban.",
                "1999-ben II. JÃ¡nos PÃ¡l pÃ¡pa misÃ©t tartott a Camp Nou gyepÃ©n.",
                "A stadiontÃºra lehetÅ‘vÃ© teszi a lÃ¡togatÃ³k szÃ¡mÃ¡ra, hogy a jÃ¡tÃ©koskijÃ¡rÃ³n keresztÃ¼l lÃ©pjenek a pÃ¡lyÃ¡ra.",
                "A stadiont jelenleg az 'Espai BarÃ§a' projekt keretÃ©ben Ã¡tfogÃ³an korszerÅ±sÃ­tik Ã©s bÅ‘vÃ­tik."
          ],
          "ro": [
                "Camp Nou are o capacitate impresionantÄƒ de aproape 100.000 de locuri.",
                "Numele 'Camp Nou' este catalan È™i se traduce literalmente ca 'CÃ¢mp Nou'.",
                "Stadionul a gÄƒzduit meciul de deschidere al Cupei Mondiale FIFA din 1982.",
                "Motto-ul FC Barcelona 'MÃ©s que un club' (Mai mult decÃ¢t un club) este afiÈ™at cu litere mari pe tribune.",
                "Muzeul FC Barcelona este cel mai vizitat muzeu din toatÄƒ Catalonia.",
                "ÃŽn 1999, Papa Ioan Paul al II-lea a È›inut o slujbÄƒ pe gazonul de la Camp Nou.",
                "Turul stadionului permite vizitatorilor sÄƒ iasÄƒ pe teren prin tunelul jucÄƒtorilor.",
                "ÃŽn prezent, stadionul este Ã®n curs de modernizare È™i extindere prin proiectul 'Espai BarÃ§a'."
          ],
          "en": [
                "Camp Nou has an impressive seating capacity of almost 100,000.",
                "The name 'Camp Nou' is Catalan and literally translates to 'New Field'.",
                "The stadium hosted the opening match of the 1982 FIFA World Cup.",
                "FC Barcelona's motto 'MÃ©s que un club' (More than a club) is prominently displayed on the stands.",
                "The FC Barcelona Museum is the most visited museum in all of Catalonia.",
                "In 1999, Pope John Paul II held a mass on the pitch of Camp Nou.",
                "The stadium tour allows visitors to walk onto the pitch through the players' tunnel.",
                "The stadium is currently undergoing comprehensive modernization and expansion under the 'Espai BarÃ§a' project."
          ]
    },
    image: "/geo-images/spain/camp-nou.webp",
    
  },
  {
    id: "es-ibiza", type: "landmark", parent: "ES-IB", coords: [1.4322, 38.9067],
    name: {"de": "Ibiza", "hu": "Ibiza", "ro": "Ibiza", "en": "Ibiza"},
    
    description: {
          "de": "Ibiza, eine der Baleareninseln im Mittelmeer, ist weltweit als die unangefochtene Hauptstadt der elektronischen Tanzmusik und des Nachtlebens bekannt. In den Sommermonaten pilgern renommierte DJs und Partyurlauber aus aller Welt auf die Insel, um in den legendÃ¤ren Clubs zu feiern. Doch Ibiza ist viel mehr als nur eine Partyhochburg. Die Insel besticht durch ihre idyllischen, versteckten Buchten, kristallklares Wasser und entspannte Hippie-MÃ¤rkte. Die historische Altstadt von Ibiza-Stadt, Dalt Vila, ist ein faszinierendes UNESCO-Weltkulturerbe. Ibiza vereint perfekt pulsierendes Nachtleben mit ruhiger, mediterraner NaturschÃ¶nheit.",
          "hu": "Ibiza, a FÃ¶ldkÃ¶zi-tenger egyik BaleÃ¡r-szigete, vilÃ¡gszerte az elektronikus tÃ¡nczene Ã©s az Ã©jszakai Ã©let vitathatatlan fÅ‘vÃ¡rosakÃ©nt ismert. A nyÃ¡ri hÃ³napokban neves DJ-k Ã©s bulizni vÃ¡gyÃ³k zarÃ¡ndokolnak a szigetre a vilÃ¡g minden tÃ¡jÃ¡rÃ³l, hogy a legendÃ¡s klubokban Ã¼nnepeljenek. Ibiza azonban sokkal tÃ¶bb, mint egy bulikÃ¶zpont. A sziget idilli, rejtett Ã¶blÃ¶kkel, kristÃ¡lytiszta vÃ­zzel Ã©s nyugodt hippi piacokkal varÃ¡zsolja el a lÃ¡togatÃ³kat. Ibiza vÃ¡rosÃ¡nak tÃ¶rtÃ©nelmi Ã³vÃ¡rosa, a Dalt Vila lenyÅ±gÃ¶zÅ‘ UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g. Ibiza tÃ¶kÃ©letesen Ã¶tvÃ¶zi a pezsgÅ‘ Ã©jszakai Ã©letet a nyugodt, mediterrÃ¡n termÃ©szeti szÃ©psÃ©gekkel.",
          "ro": "Ibiza, una dintre insulele Baleare din Marea MediteranÄƒ, este cunoscutÄƒ la nivel mondial ca fiind capitala incontestabilÄƒ a muzicii dance electronice È™i a vieÈ›ii de noapte. ÃŽn lunile de varÄƒ, DJ renumiÈ›i È™i petrecÄƒreÈ›i din Ã®ntreaga lume fac un pelerinaj pe insulÄƒ pentru a petrece Ã®n cluburile legendare. Cu toate acestea, Ibiza este mult mai mult decÃ¢t o fortÄƒreaÈ›Äƒ a petrecerilor. Insula captiveazÄƒ prin golfurile sale idilice È™i ascunse, apa cristalinÄƒ È™i pieÈ›ele hippie relaxate. OraÈ™ul vechi istoric din Ibiza, Dalt Vila, este un fascinant sit al Patrimoniului Mondial UNESCO. Ibiza combinÄƒ perfect viaÈ›a de noapte vibrantÄƒ cu frumuseÈ›ea naturalÄƒ calmÄƒ, mediteraneanÄƒ.",
          "en": "Ibiza, one of the Balearic Islands in the Mediterranean, is known worldwide as the undisputed capital of electronic dance music and nightlife. During the summer months, renowned DJs and partygoers from all over the world make a pilgrimage to the island to celebrate in its legendary clubs. Yet Ibiza is much more than just a party stronghold. The island captivates with its idyllic, hidden coves, crystal-clear waters, and relaxed hippie markets. The historic old town of Ibiza Town, Dalt Vila, is a fascinating UNESCO World Heritage site. Ibiza perfectly combines vibrant nightlife with tranquil Mediterranean natural beauty."
    },
    facts: {
          "de": [
                "Ibiza wird wegen ihrer weiÃŸen Architektur oft die 'WeiÃŸe Insel' (Isla Blanca) genannt.",
                "Die Insel verfÃ¼gt Ã¼ber einige der berÃ¼hmtesten Superclubs der Welt wie Pacha, Amnesia und UshuaÃ¯a.",
                "Ibiza war in den 1960er und 70er Jahren ein wichtiges Ziel der Hippie-Bewegung.",
                "Der Hippie-Markt von Punta ArabÃ­ ist einer der grÃ¶ÃŸten und Ã¤ltesten der Insel.",
                "Nahe Ibiza liegt die unbewohnte Felseninsel Es VedrÃ , die viele Mythen und Legenden umgeben.",
                "Die Inselregierung legt groÃŸen Wert auf den Erhalt der geschÃ¼tzten Seegraswiesen (Posidonia).",
                "Neben Party bietet Ibiza zahlreiche ruhige StrÃ¤nde wie Cala Salada und Cala Comte.",
                "CafÃ© del Mar in San Antonio ist weltbekannt fÃ¼r chillige Musik zum Sonnenuntergang."
          ],
          "hu": [
                "IbizÃ¡t fehÃ©r Ã©pÃ­tÃ©szete miatt gyakran 'FehÃ©r Szigetnek' (Isla Blanca) is nevezik.",
                "A szigeten olyan vilÃ¡ghÃ­rÅ± szuperklubok talÃ¡lhatÃ³k, mint a Pacha, az Amnesia Ã©s az UshuaÃ¯a.",
                "Ibiza a 60-as Ã©s 70-es Ã©vekben a hippimozgalom egyik legfontosabb cÃ©lpontja volt.",
                "A Punta ArabÃ­ hippipiac a sziget egyik legnagyobb Ã©s legrÃ©gebbi piaca.",
                "Ibiza kÃ¶zelÃ©ben fekszik a lakatlan Es VedrÃ  sziklasziget, amelyet szÃ¡mos mÃ­tosz Ã©s legenda Ã¶vez.",
                "A szigeti Ã¶nkormÃ¡nyzat nagy hangsÃºlyt fektet a vÃ©dett tengerifÅ±rÃ©tek (Posidonia) megÅ‘rzÃ©sÃ©re.",
                "A bulik mellett Ibiza szÃ¡mos csendes strandot is kÃ­nÃ¡l, mint a Cala Salada Ã©s a Cala Comte.",
                "A San AntoniÃ³-i CafÃ© del Mar vilÃ¡gszerte ismert a naplementÃ©hez jÃ¡tszott chill-out zenÃ©jÃ©rÅ‘l."
          ],
          "ro": [
                "Ibiza este adesea numitÄƒ 'Insula AlbÄƒ' (Isla Blanca) datoritÄƒ arhitecturii sale albe.",
                "Insula are unele dintre cele mai faimoase supercluburi din lume, cum ar fi Pacha, Amnesia È™i UshuaÃ¯a.",
                "Ibiza a fost o destinaÈ›ie importantÄƒ a miÈ™cÄƒrii hippie Ã®n anii '60 È™i '70.",
                "PiaÈ›a hippie de la Punta ArabÃ­ este una dintre cele mai mari È™i mai vechi de pe insulÄƒ.",
                "LÃ¢ngÄƒ Ibiza se aflÄƒ insula stÃ¢ncoasÄƒ nelocuitÄƒ Es VedrÃ , Ã®nconjuratÄƒ de multe mituri È™i legende.",
                "Guvernul insulei acordÄƒ o mare importanÈ›Äƒ conservÄƒrii pajiÈ™tilor protejate cu iarbÄƒ de mare (Posidonia).",
                "Pe lÃ¢ngÄƒ petreceri, Ibiza oferÄƒ numeroase plaje liniÈ™tite precum Cala Salada È™i Cala Comte.",
                "CafÃ© del Mar din San Antonio este cunoscut Ã®n Ã®ntreaga lume pentru muzica chill-out la apus."
          ],
          "en": [
                "Ibiza is often called the 'White Island' (Isla Blanca) because of its white architecture.",
                "The island boasts some of the most famous superclubs in the world, such as Pacha, Amnesia, and UshuaÃ¯a.",
                "Ibiza was a major destination for the hippie movement in the 1960s and 70s.",
                "The hippie market of Punta ArabÃ­ is one of the largest and oldest on the island.",
                "Near Ibiza lies the uninhabited rocky island of Es VedrÃ , surrounded by many myths and legends.",
                "The island's government places great importance on preserving the protected seagrass meadows (Posidonia).",
                "Besides partying, Ibiza offers numerous quiet beaches like Cala Salada and Cala Comte.",
                "CafÃ© del Mar in San Antonio is world-renowned for chill-out music at sunset."
          ]
    },
    image: "/geo-images/spain/ibiza.webp",
    
  },
  {
    id: "es-mallorca", type: "landmark", parent: "ES-IB", coords: [2.9862, 39.6151],
    name: {"de": "Mallorca", "hu": "Mallorca", "ro": "Mallorca", "en": "Mallorca"},
    
    description: {
          "de": "Mallorca ist die grÃ¶ÃŸte der Baleareninseln und ein unbestrittenes Juwel im Mittelmeer. Sie lockt jÃ¤hrlich Millionen von Urlaubern mit ihrer beeindruckenden landschaftlichen Vielfalt. WÃ¤hrend der SÃ¼den mit lebhaften StrÃ¤nden und der dynamischen Hauptstadt Palma aufwartet, besticht der Nordwesten durch die wilde, zerklÃ¼ftete Gebirgskette der Serra de Tramuntana. Hier finden sich malerische BergdÃ¶rfer wie Valldemossa und DeiÃ . Mallorca bietet perfekte Bedingungen fÃ¼r Radfahrer, Wanderer und Naturliebhaber. Abseits der belebten KÃ¼stenorte findet man unberÃ¼hrte Natur, idyllische Mandelhaine und eine ruhige, authentische mallorquinische Lebensart.",
          "hu": "Mallorca a BaleÃ¡r-szigetek legnagyobbika, Ã©s a FÃ¶ldkÃ¶zi-tenger vitathatatlan Ã©kkÃ¶ve. LenyÅ±gÃ¶zÅ‘ tÃ¡ji sokszÃ­nÅ±sÃ©gÃ©vel Ã©vente turistÃ¡k milliÃ³it vonzza. MÃ­g a dÃ©li rÃ©sz nyÃ¼zsgÅ‘ strandokkal Ã©s a dinamikus Palma fÅ‘vÃ¡rossal bÃ¼szkÃ©lkedhet, addig az Ã©szaknyugati oldalt a Serra de Tramuntana vad, csipkÃ©zett hegylÃ¡nca uralja. Itt festÅ‘i hegyi falvak talÃ¡lhatÃ³k, mint Valldemossa Ã©s DeiÃ . Mallorca tÃ¶kÃ©letes feltÃ©teleket kÃ­nÃ¡l a kerÃ©kpÃ¡rosok, tÃºrÃ¡zÃ³k Ã©s termÃ©szetbarÃ¡tok szÃ¡mÃ¡ra. A nyÃ¼zsgÅ‘ tengerparti Ã¼dÃ¼lÅ‘helyektÅ‘l tÃ¡vol Ã©rintetlen termÃ©szet, idilli mandulaligetek Ã©s nyugodt, autentikus mallorcai Ã©letmÃ³d vÃ¡rja a lÃ¡togatÃ³kat.",
          "ro": "Mallorca este cea mai mare dintre insulele Baleare È™i o bijuterie incontestabilÄƒ a MÄƒrii Mediterane. Atrage milioane de turiÈ™ti anual cu diversitatea sa pitoreascÄƒ impresionantÄƒ. ÃŽn timp ce sudul se mÃ¢ndreÈ™te cu plaje pline de viaÈ›Äƒ È™i capitala dinamicÄƒ Palma, nord-vestul este dominat de lanÈ›ul muntos sÄƒlbatic È™i accidentat Serra de Tramuntana. Aici veÈ›i gÄƒsi sate de munte pitoreÈ™ti precum Valldemossa È™i DeiÃ . Mallorca oferÄƒ condiÈ›ii perfecte pentru bicicliÈ™ti, excursioniÈ™ti È™i iubitori de naturÄƒ. Departe de staÈ›iunile de coastÄƒ aglomerate, veÈ›i gÄƒsi naturÄƒ neatinsÄƒ, livezi idilice de migdali È™i un mod de viaÈ›Äƒ liniÈ™tit, autentic mallorcan.",
          "en": "Mallorca is the largest of the Balearic Islands and an undisputed jewel in the Mediterranean. It attracts millions of holidaymakers annually with its impressive scenic diversity. While the south boasts lively beaches and the dynamic capital Palma, the northwest is characterized by the wild, rugged mountain range of the Serra de Tramuntana. Here you will find picturesque mountain villages like Valldemossa and DeiÃ . Mallorca offers perfect conditions for cyclists, hikers, and nature lovers. Away from the busy coastal resorts, you will find untouched nature, idyllic almond groves, and a tranquil, authentic Mallorcan way of life."
    },
    facts: {
          "de": [
                "Das Gebirge Serra de Tramuntana wurde von der UNESCO zum Weltnaturerbe erklÃ¤rt.",
                "Mallorca ist weltberÃ¼hmt fÃ¼r die Herstellung hochwertiger kÃ¼nstlicher Perlen.",
                "FrÃ©dÃ©ric Chopin verbrachte einen berÃ¼hmten Winter im KartÃ¤userkloster von Valldemossa.",
                "Die TropfsteinhÃ¶hlen Cuevas del Drach in Porto Cristo beherbergen einen der grÃ¶ÃŸten unterirdischen Seen der Welt.",
                "Der rote Zug 'Roter Blitz' verbindet seit 1912 Palma spektakulÃ¤r mit SÃ³ller.",
                "Die traditionelle mallorquinische Wurst Sobrasada ist ein lokales kulinarisches Highlight.",
                "Das Cap de Formentor bietet dramatische Steilklippen am nÃ¶rdlichsten Punkt der Insel.",
                "Im FrÃ¼hjahr lockt die berÃ¼hmte MandelblÃ¼te Tausende von Touristen auf die Insel."
          ],
          "hu": [
                "A Serra de Tramuntana hegysÃ©get az UNESCO a vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©vÃ© nyilvÃ¡nÃ­totta.",
                "Mallorca vilÃ¡ghÃ­rÅ± a kivÃ¡lÃ³ minÅ‘sÃ©gÅ± mestersÃ©ges gyÃ¶ngyÃ¶k gyÃ¡rtÃ¡sÃ¡rÃ³l.",
                "FrÃ©dÃ©ric Chopin egy hÃ­res telet tÃ¶ltÃ¶tt a valldemossai karthauzi kolostorban.",
                "A Porto Cristo-i Cuevas del Drach cseppkÅ‘barlangban talÃ¡lhatÃ³ a vilÃ¡g egyik legnagyobb fÃ¶ldalatti tava.",
                "A 'VÃ¶rÃ¶s VillÃ¡m' (Roter Blitz) nevÅ± piros vonat 1912 Ã³ta kÃ¶ti Ã¶ssze lÃ¡tvÃ¡nyosan PalmÃ¡t SÃ³llerrel.",
                "A hagyomÃ¡nyos mallorcai Sobrasada kolbÃ¡sz egy helyi kulinÃ¡ris kÃ¼lÃ¶nlegessÃ©g.",
                "A Cap de Formentor drÃ¡mai sziklafalakat kÃ­nÃ¡l a sziget legÃ©szakibb pontjÃ¡n.",
                "Tavasszal a hÃ­res mandulavirÃ¡gzÃ¡s turistÃ¡k ezreit vonzza a szigetre."
          ],
          "ro": [
                "LanÈ›ul muntos Serra de Tramuntana a fost declarat Patrimoniu Natural Mondial de cÄƒtre UNESCO.",
                "Mallorca este renumitÄƒ Ã®n Ã®ntreaga lume pentru producÈ›ia de perle artificiale de Ã®naltÄƒ calitate.",
                "FrÃ©dÃ©ric Chopin a petrecut o iarnÄƒ faimoasÄƒ la mÄƒnÄƒstirea cartuzianÄƒ din Valldemossa.",
                "PeÈ™terile cu stalactite Cuevas del Drach din Porto Cristo gÄƒzduiesc unul dintre cele mai mari lacuri subterane din lume.",
                "Trenul roÈ™u 'Fulgerul RoÈ™u' conecteazÄƒ spectaculos Palma cu SÃ³ller din 1912.",
                "CÃ¢rnatul tradiÈ›ional mallorcan Sobrasada este o atracÈ›ie culinarÄƒ localÄƒ.",
                "Cap de Formentor oferÄƒ stÃ¢nci dramatice Ã®n cel mai nordic punct al insulei.",
                "PrimÄƒvara, faimoÈ™ii migdali Ã®nfloriÈ›i atrag mii de turiÈ™ti pe insulÄƒ."
          ],
          "en": [
                "The Serra de Tramuntana mountain range has been declared a World Natural Heritage site by UNESCO.",
                "Mallorca is world-famous for the production of high-quality artificial pearls.",
                "FrÃ©dÃ©ric Chopin spent a famous winter at the Carthusian monastery in Valldemossa.",
                "The Cuevas del Drach dripstone caves in Porto Cristo house one of the largest underground lakes in the world.",
                "The red train 'Red Lightning' has spectacularly connected Palma with SÃ³ller since 1912.",
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
          "de": "Teneriffa ist die grÃ¶ÃŸte und bevÃ¶lkerungsreichste der Kanarischen Inseln und liegt majestÃ¤tisch im Atlantischen Ozean vor der KÃ¼ste Afrikas. Sie wird oft als 'Insel des ewigen FrÃ¼hlings' bezeichnet und bietet das ganze Jahr Ã¼ber ein perfektes Klima. Teneriffas Landschaft ist von starken Kontrasten geprÃ¤gt: vom feuchteren, grÃ¼nen Norden mit seinen alten LorbeerwÃ¤ldern bis zum trockenen, sonnigen SÃ¼den, der BadegÃ¤ste anzieht. In der Mitte thront der gewaltige Vulkan Pico del Teide, Spaniens hÃ¶chster Berg. Die Insel bietet zudem wunderschÃ¶ne koloniale Architektur in Orten wie La Laguna und La Orotava.",
          "hu": "Tenerife a KanÃ¡ri-szigetek legnagyobb Ã©s legnÃ©pesebb tagja, amely mÃ©ltÃ³sÃ¡gteljesen fekszik az Atlanti-Ã³ceÃ¡nban, Afrika partjainÃ¡l. Gyakran az 'Ã¶rÃ¶k tavasz szigetÃ©nek' is nevezik, mivel egÃ©sz Ã©vben tÃ¶kÃ©letes Ã©ghajlatot kÃ­nÃ¡l. Tenerife tÃ¡jÃ¡t Ã©les kontrasztok jellemzik: a nedvesebb, zÃ¶ldebb Ã©szaki rÃ©sz Å‘si babÃ©rerdÅ‘itÅ‘l a szÃ¡raz, napos dÃ©li rÃ©szig, amely a fÃ¼rdÅ‘zÅ‘ket vonzza. KÃ¶zÃ©pen magasodik a hatalmas Pico del Teide vulkÃ¡n, SpanyolorszÃ¡g legmagasabb hegye. A sziget emellett gyÃ¶nyÃ¶rÅ± gyarmati Ã©pÃ­tÃ©szetet is kÃ­nÃ¡l olyan vÃ¡rosokban, mint La Laguna Ã©s La Orotava.",
          "ro": "Tenerife este cea mai mare È™i mai populatÄƒ dintre Insulele Canare, situatÄƒ maiestuos Ã®n Oceanul Atlantic Ã®n largul coastei Africii. Este adesea numitÄƒ 'Insula primÄƒverii veÈ™nice', oferind o climÄƒ perfectÄƒ pe tot parcursul anului. Peisajul din Tenerife se caracterizeazÄƒ prin contraste puternice: de la nordul mai umed È™i verde cu pÄƒdurile sale de lauri strÄƒvechi, pÃ¢nÄƒ la sudul uscat È™i Ã®nsorit care atrage scÄƒldÄƒtorii. ÃŽn centru troneazÄƒ uriaÈ™ul vulcan Pico del Teide, cel mai Ã®nalt munte din Spania. Insula oferÄƒ, de asemenea, arhitecturÄƒ colonialÄƒ frumoasÄƒ Ã®n oraÈ™e precum La Laguna È™i La Orotava.",
          "en": "Tenerife is the largest and most populous of the Canary Islands, lying majestically in the Atlantic Ocean off the coast of Africa. It is often called the 'Island of Eternal Spring', offering a perfect climate all year round. Tenerife's landscape is characterized by stark contrasts: from the wetter, green north with its ancient laurel forests to the dry, sunny south that attracts beachgoers. In the center towers the massive Pico del Teide volcano, Spain's highest mountain. The island also offers beautiful colonial architecture in towns such as La Laguna and La Orotava."
    },
    facts: {
          "de": [
                "Der Pico del Teide ist mit 3.715 Metern der hÃ¶chste Berg Spaniens.",
                "Teneriffa beheimatet zwei UNESCO-WeltkulturerbestÃ¤tten: den Teide-Nationalpark und die Stadt San CristÃ³bal de La Laguna.",
                "Der Loro Parque im Norden der Insel ist einer der bekanntesten und grÃ¶ÃŸten Tierparks der Welt.",
                "Die Insel ist berÃ¼hmt fÃ¼r ihren farbenprÃ¤chtigen Karneval in Santa Cruz, der zweitgrÃ¶ÃŸte nach Rio de Janeiro.",
                "Teneriffa hat schwarze SandstrÃ¤nde vulkanischen Ursprungs und weiÃŸe StrÃ¤nde aus Sahara-Sand.",
                "Die endemische Kanarische Kiefer prÃ¤gt weite Teile der bewaldeten Inselgebiete.",
                "Im Meer zwischen Teneriffa und La Gomera kann man das ganze Jahr Ã¼ber Wale und Delfine beobachten.",
                "Die Insel verfÃ¼gt Ã¼ber ein erstklassiges Observatorium (Observatorio del Teide) aufgrund des klaren Sternenhimmels."
          ],
          "hu": [
                "A Pico del Teide a maga 3715 mÃ©terÃ©vel SpanyolorszÃ¡g legmagasabb hegye.",
                "Tenerife kÃ©t UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­nnek ad otthont: a Teide Nemzeti Parknak Ã©s San CristÃ³bal de La Laguna vÃ¡rosÃ¡nak.",
                "A sziget Ã©szaki rÃ©szÃ©n talÃ¡lhatÃ³ Loro Parque a vilÃ¡g egyik legismertebb Ã©s legnagyobb Ã¡llatparkja.",
                "A sziget hÃ­res a szÃ­npompÃ¡s Santa Cruz-i karnevÃ¡lrÃ³l, amely a mÃ¡sodik legnagyobb Rio de Janeiro utÃ¡n.",
                "TenerifÃ©nek vannak vulkanikus eredetÅ± fekete homokos strandjai, Ã©s szaharai homokbÃ³l Ã¡llÃ³ fehÃ©r strandjai is.",
                "Az endemikus kanÃ¡ri fenyÅ‘ a fÃ¡s szigetterÃ¼letek nagy rÃ©szÃ©t meghatÃ¡rozza.",
                "A Tenerife Ã©s La Gomera kÃ¶zÃ¶tti tengeren egÃ©sz Ã©vben megfigyelhetÅ‘k bÃ¡lnÃ¡k Ã©s delfinek.",
                "A sziget kivÃ¡lÃ³ csillagvizsgÃ¡lÃ³val (Observatorio del Teide) rendelkezik a tiszta Ã©jszakai Ã©gbolt miatt."
          ],
          "ro": [
                "La 3.715 metri, Pico del Teide este cel mai Ã®nalt munte din Spania.",
                "Tenerife gÄƒzduieÈ™te douÄƒ situri ale Patrimoniului Mondial UNESCO: Parcul NaÈ›ional Teide È™i oraÈ™ul San CristÃ³bal de La Laguna.",
                "Loro Parque, din nordul insulei, este una dintre cele mai cunoscute È™i mai mari grÄƒdini zoologice din lume.",
                "Insula este faimoasÄƒ pentru carnavalul sÄƒu colorat din Santa Cruz, al doilea ca mÄƒrime dupÄƒ Rio de Janeiro.",
                "Tenerife are plaje cu nisip negru de origine vulcanicÄƒ È™i plaje albe cu nisip saharian.",
                "Pinul endemic canarian modeleazÄƒ mari pÄƒrÈ›i din zonele Ã®mpÄƒdurite ale insulei.",
                "ÃŽn oceanul dintre Tenerife È™i La Gomera pot fi observate balene È™i delfini pe tot parcursul anului.",
                "Insula are un observator astronomic de primÄƒ clasÄƒ (Observatorio del Teide) datoritÄƒ cerului sÄƒu instelat clar."
          ],
          "en": [
                "At 3,715 meters, the Pico del Teide is the highest mountain in Spain.",
                "Tenerife is home to two UNESCO World Heritage sites: Teide National Park and the city of San CristÃ³bal de La Laguna.",
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
          "de": "Gran Canaria, die drittgrÃ¶ÃŸte der Kanarischen Inseln, wird oft als 'Miniaturkontinent' bezeichnet. Grund dafÃ¼r ist ihre unglaubliche klimatische und landschaftliche Vielfalt auf vergleichsweise kleinem Raum. Die Insel bietet alles: von saftig grÃ¼nen TÃ¤lern und tiefen Schluchten im Landesinneren Ã¼ber ausgedehnte PinienwÃ¤lder bis hin zu spektakulÃ¤ren WÃ¼stenlandschaften wie den berÃ¼hmten SanddÃ¼nen von Maspalomas im SÃ¼den. Die lebhafte Hauptstadt Las Palmas de Gran Canaria besticht durch ihre wunderschÃ¶ne koloniale Altstadt (Vegueta). Gran Canaria ist ein Paradies fÃ¼r Sonnenanbeter, Surfer und Wanderer gleichermaÃŸen.",
          "hu": "Gran CanariÃ¡t, a KanÃ¡ri-szigetek harmadik legnagyobbikÃ¡t gyakran 'miniatÅ±r kontinensnek' is nevezik. Ennek oka a viszonylag kis terÃ¼leten tapasztalhatÃ³ hihetetlen Ã©ghajlati Ã©s tÃ¡ji sokszÃ­nÅ±sÃ©g. A sziget mindent kÃ­nÃ¡l: a buja zÃ¶ld vÃ¶lgyektÅ‘l Ã©s a szÃ¡razfÃ¶ld belsejÃ©ben lÃ©vÅ‘ mÃ©ly szurdokoktÃ³l kezdve a kiterjedt fenyÅ‘erdÅ‘kÃ¶n Ã¡t a lÃ¡tvÃ¡nyos sivatagi tÃ¡jakig, mint a hÃ­res maspalomasi homokdÅ±nÃ©k dÃ©len. A nyÃ¼zsgÅ‘ fÅ‘vÃ¡ros, Las Palmas de Gran Canaria gyÃ¶nyÃ¶rÅ± gyarmati Ã³vÃ¡rosÃ¡val (Vegueta) bÅ±vÃ¶l el. Gran Canaria a napimÃ¡dÃ³k, a szÃ¶rfÃ¶sÃ¶k Ã©s a tÃºrÃ¡zÃ³k paradicsoma egyarÃ¡nt.",
          "ro": "Gran Canaria, a treia ca mÄƒrime dintre Insulele Canare, este adesea numitÄƒ 'continent Ã®n miniaturÄƒ'. Motivul pentru aceasta este incredibila sa diversitate climaticÄƒ È™i peisagisticÄƒ Ã®ntr-un spaÈ›iu relativ mic. Insula oferÄƒ de toate: de la vÄƒi verzi luxuriante È™i defileuri adÃ¢nci Ã®n interior, la pÄƒduri extinse de pini È™i peisaje deÈ™ertice spectaculoase, cum ar fi faimoasele dune de nisip din Maspalomas Ã®n sud. Capitala plinÄƒ de viaÈ›Äƒ, Las Palmas de Gran Canaria, captiveazÄƒ cu frumosul sÄƒu oraÈ™ vechi colonial (Vegueta). Gran Canaria este un paradis pentru iubitorii de soare, surferi È™i excursioniÈ™ti deopotrivÄƒ.",
          "en": "Gran Canaria, the third largest of the Canary Islands, is often referred to as a 'miniature continent'. The reason for this is its incredible climatic and scenic diversity in a relatively small area. The island offers everything: from lush green valleys and deep ravines in the interior, to extensive pine forests, to spectacular desert landscapes like the famous sand dunes of Maspalomas in the south. The lively capital Las Palmas de Gran Canaria captivates with its beautiful colonial old town (Vegueta). Gran Canaria is a paradise for sun worshipers, surfers, and hikers alike."
    },
    facts: {
          "de": [
                "Der Roque Nublo ist mit 1.813 Metern das markante vulkanische Wahrzeichen im Zentrum der Insel.",
                "Die Insel wurde 2005 von der UNESCO zum BiosphÃ¤renreservat erklÃ¤rt.",
                "Las Palmas de Gran Canaria ist, neben Santa Cruz de Tenerife, eine der beiden HauptstÃ¤dte der Kanaren.",
                "Die DÃ¼nen von Maspalomas wandern stÃ¤ndig und verÃ¤ndern ihre Form durch den Wind.",
                "Gran Canaria ist bekannt fÃ¼r den Anbau von Bananen, Tomaten und sogar Kaffee.",
                "Der Risco CaÃ­do und die heiligen Berge von Gran Canaria sind UNESCO-Weltkulturerbe.",
                "Die Insel war eine wichtige Zwischenstation fÃ¼r Christoph Kolumbus auf seinen Reisen nach Amerika.",
                "Im charmanten Fischerdorf Puerto de MogÃ¡n wird aufgrund seiner KanÃ¤le auch vom 'Klein-Venedig' gesprochen."
          ],
          "hu": [
                "A Roque Nublo a maga 1813 mÃ©terÃ©vel a sziget kÃ¶zpontjÃ¡nak jellegzetes vulkanikus szimbÃ³luma.",
                "A szigetet 2005-ben az UNESCO bioszfÃ©ra-rezervÃ¡tummÃ¡ nyilvÃ¡nÃ­totta.",
                "Las Palmas de Gran Canaria, Santa Cruz de Tenerife mellett, a KanÃ¡ri-szigetek kÃ©t fÅ‘vÃ¡rosÃ¡nak egyike.",
                "A maspalomasi dÅ±nÃ©k a szÃ©l miatt folyamatosan vÃ¡ndorolnak Ã©s vÃ¡ltoztatjÃ¡k az alakjukat.",
                "Gran Canaria ismert a banÃ¡n-, a paradicsom- Ã©s mÃ©g a kÃ¡vÃ©termesztÃ©srÅ‘l is.",
                "A Risco CaÃ­do Ã©s Gran Canaria szent hegyei az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezik.",
                "A sziget fontos megÃ¡llÃ³hely volt Kolumbusz KristÃ³f szÃ¡mÃ¡ra az AmerikÃ¡ba vezetÅ‘ Ãºtjain.",
                "Puerto de MogÃ¡n bÃ¡jos halÃ¡szfalujÃ¡t csatornÃ¡i miatt 'Kis VelencÃ©nek' is nevezik."
          ],
          "ro": [
                "Roque Nublo, la 1.813 metri, este reperul vulcanic izbitor din centrul insulei.",
                "Insula a fost declaratÄƒ RezervaÈ›ie a Biosferei de cÄƒtre UNESCO Ã®n 2005.",
                "Las Palmas de Gran Canaria este, alÄƒturi de Santa Cruz de Tenerife, una dintre cele douÄƒ capitale ale Canarelor.",
                "Dunele din Maspalomas migreazÄƒ constant È™i Ã®È™i schimbÄƒ forma din cauza vÃ¢ntului.",
                "Gran Canaria este cunoscutÄƒ pentru cultivarea bananelor, roÈ™iilor È™i chiar a cafelei.",
                "Risco CaÃ­do È™i MunÈ›ii Sacri din Gran Canaria sunt un sit al Patrimoniului Mondial UNESCO.",
                "Insula a fost o escalÄƒ importantÄƒ pentru Cristofor Columb Ã®n cÄƒlÄƒtoriile sale spre America.",
                "FermecÄƒtorul sat de pescari Puerto de MogÃ¡n este numit È™i 'Mica VeneÈ›ie' datoritÄƒ canalelor sale."
          ],
          "en": [
                "Roque Nublo, at 1,813 meters, is the striking volcanic landmark in the center of the island.",
                "The island was declared a Biosphere Reserve by UNESCO in 2005.",
                "Las Palmas de Gran Canaria is, along with Santa Cruz de Tenerife, one of the two capitals of the Canaries.",
                "The dunes of Maspalomas are constantly migrating and changing their shape due to the wind.",
                "Gran Canaria is known for the cultivation of bananas, tomatoes, and even coffee.",
                "Risco CaÃ­do and the Sacred Mountains of Gran Canaria are a UNESCO World Heritage site.",
                "The island was an important stopover for Christopher Columbus on his voyages to the Americas.",
                "The charming fishing village of Puerto de MogÃ¡n is also called 'Little Venice' due to its canals."
          ]
    },
    image: "/geo-images/spain/gran-canaria.webp",
    
  },
  {
    id: "es-pyrenees", type: "landmark", parent: "ES-AR", coords: [-0.0763, 42.6687],
    name: {"de": "PyrenÃ¤en", "hu": "Pireneusok", "ro": "Pirinei", "en": "Pyrenees"},
    
    description: {
          "de": "Die PyrenÃ¤en bilden eine natÃ¼rliche, schroffe Gebirgsgrenze zwischen Spanien und Frankreich, die sich Ã¼ber mehr als 400 Kilometer vom Atlantischen Ozean bis zum Mittelmeer erstreckt. Diese spektakulÃ¤re Bergkette ist geprÃ¤gt von schneebedeckten Gipfeln von Ã¼ber 3.000 Metern HÃ¶he, tiefen GletschertÃ¤lern, tosenden WasserfÃ¤llen und dichten WÃ¤ldern. Auf der spanischen Seite erstrecken sich die PyrenÃ¤en Ã¼ber Navarra, Aragonien und Katalonien und bieten einige der spektakulÃ¤rsten Nationalparks Europas, wie den Ordesa y Monte Perdido. Es ist ein erstklassiges Ziel fÃ¼r Bergsteiger, Skifahrer und Naturliebhaber, die Ruhe und alpine Herausforderungen suchen.",
          "hu": "A Pireneusok termÃ©szetes, zord hegyvidÃ©ki hatÃ¡rt kÃ©peznek SpanyolorszÃ¡g Ã©s FranciaorszÃ¡g kÃ¶zÃ¶tt, amely tÃ¶bb mint 400 kilomÃ©teren Ã¡t hÃºzÃ³dik az Atlanti-Ã³ceÃ¡ntÃ³l a FÃ¶ldkÃ¶zi-tengerig. Ezt a lÃ¡tvÃ¡nyos hegylÃ¡ncot 3000 mÃ©tert is meghaladÃ³ hÃ³fÃ¶dte csÃºcsok, mÃ©ly gleccservÃ¶lgyek, dÃ¼bÃ¶rgÅ‘ vÃ­zesÃ©sek Ã©s sÅ±rÅ± erdÅ‘k jellemzik. A spanyol oldalon a Pireneusok NavarrÃ¡n, AragÃ³niÃ¡n Ã©s KatalÃ³niÃ¡n Ã­velnek Ã¡t, Ã©s EurÃ³pa leglÃ¡tvÃ¡nyosabb nemzeti parkjait kÃ­nÃ¡ljÃ¡k, mint pÃ©ldÃ¡ul az Ordesa y Monte Perdido. ElsÅ‘ osztÃ¡lyÃº cÃ©lpont a hegymÃ¡szÃ³k, sÃ­elÅ‘k Ã©s a termÃ©szet szerelmesei szÃ¡mÃ¡ra, akik nyugalmat Ã©s alpesi kihÃ­vÃ¡sokat keresnek.",
          "ro": "Pirineii formeazÄƒ o graniÈ›Äƒ muntoasÄƒ naturalÄƒ È™i accidentatÄƒ Ã®ntre Spania È™i FranÈ›a, care se Ã®ntinde pe mai mult de 400 de kilometri de la Oceanul Atlantic pÃ¢nÄƒ la Marea MediteranÄƒ. Acest lanÈ› muntos spectaculos este caracterizat de vÃ¢rfuri acoperite de zÄƒpadÄƒ de peste 3.000 de metri Ã®nÄƒlÈ›ime, vÄƒi adÃ¢nci glaciare, cascade vijelioase È™i pÄƒduri dese. Pe partea spaniolÄƒ, Pirineii se Ã®ntind pe Navarra, Aragon È™i Catalonia È™i oferÄƒ unele dintre cele mai spectaculoase parcuri naÈ›ionale din Europa, cum ar fi Ordesa y Monte Perdido. Este o destinaÈ›ie de primÄƒ clasÄƒ pentru alpiniÈ™ti, schiori È™i iubitori de naturÄƒ care cautÄƒ liniÈ™te È™i provocÄƒri alpine.",
          "en": "The Pyrenees form a natural, rugged mountain border between Spain and France, stretching for more than 400 kilometers from the Atlantic Ocean to the Mediterranean Sea. This spectacular mountain range is characterized by snow-capped peaks over 3,000 meters high, deep glacial valleys, roaring waterfalls, and dense forests. On the Spanish side, the Pyrenees stretch across Navarre, Aragon, and Catalonia, offering some of Europe's most spectacular national parks, such as Ordesa y Monte Perdido. It is a premier destination for mountaineers, skiers, and nature lovers seeking tranquility and alpine challenges."
    },
    facts: {
          "de": [
                "Der Pico de Aneto ist mit 3.404 Metern der hÃ¶chste Berg der PyrenÃ¤en.",
                "Der Nationalpark Ordesa y Monte Perdido in Aragonien ist ein UNESCO-Weltnaturerbe.",
                "Die PyrenÃ¤en beherbergen noch kleine, schrumpfende Gletscher an ihren hÃ¶chsten Gipfeln.",
                "Im Gebirge liegt der Zwergstaat Andorra, eingeklemmt zwischen Spanien und Frankreich.",
                "Die Berge sind ein wichtiger Lebensraum fÃ¼r den seltenen PyrenÃ¤enbÃ¤ren und Bartgeier.",
                "Zahlreiche renommierte Skiresorts, wie Baqueira-Beret, befinden sich auf spanischer Seite.",
                "Der Fernwanderweg GR 11 durchquert die gesamten spanischen PyrenÃ¤en von KÃ¼ste zu KÃ¼ste.",
                "Historisch gesehen bildeten die PyrenÃ¤en eine bedeutende kulturelle und politische Barriere in Europa."
          ],
          "hu": [
                "A Pico de Aneto 3404 mÃ©terÃ©vel a Pireneusok legmagasabb hegye.",
                "Az aragÃ³niai Ordesa y Monte Perdido Nemzeti Park az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
                "A Pireneusok legmagasabb csÃºcsain mÃ©g ma is talÃ¡lhatÃ³k kis, zsugorodÃ³ gleccserek.",
                "A hegysÃ©gben fekszik Andorra tÃ¶rpeÃ¡llama, beszorÃ­tva SpanyolorszÃ¡g Ã©s FranciaorszÃ¡g kÃ¶zÃ©.",
                "A hegyek fontos Ã©lÅ‘helyei a ritka pireneusi barna medvÃ©nek Ã©s a szakÃ¡llas keselyÅ±nek.",
                "SzÃ¡mos neves sÃ­kÃ¶zpont, pÃ©ldÃ¡ul a Baqueira-Beret talÃ¡lhatÃ³ a spanyol oldalon.",
                "A GR 11 tÃ¡volsÃ¡gi tÃºraÃºtvonal Ã¡tszeli a teljes spanyol Pireneusokat parttÃ³l partig.",
                "TÃ¶rtÃ©nelmileg a Pireneusok jelentÅ‘s kulturÃ¡lis Ã©s politikai akadÃ¡lyt kÃ©peztek EurÃ³pÃ¡ban."
          ],
          "ro": [
                "Pico de Aneto, la 3.404 metri, este cel mai Ã®nalt munte din Pirinei.",
                "Parcul NaÈ›ional Ordesa y Monte Perdido din Aragon este un sit al Patrimoniului Natural Mondial UNESCO.",
                "Pirineii Ã®ncÄƒ mai adÄƒpostesc gheÈ›ari mici, Ã®n scÄƒdere, pe cele mai Ã®nalte vÃ¢rfuri ale lor.",
                "Microstatul Andorra este situat Ã®n munÈ›i, prins Ã®ntre Spania È™i FranÈ›a.",
                "MunÈ›ii sunt un habitat important pentru rarul urs brun de Pirinei È™i zÄƒgan.",
                "Numeroase staÈ›iuni de schi renumite, cum ar fi Baqueira-Beret, sunt situate pe partea spaniolÄƒ.",
                "Traseul de drumeÈ›ii pe distanÈ›e lungi GR 11 traverseazÄƒ toÈ›i Pirineii spanioli de la coastÄƒ la coastÄƒ.",
                "Din punct de vedere istoric, Pirineii au format o barierÄƒ culturalÄƒ È™i politicÄƒ semnificativÄƒ Ã®n Europa."
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
          "de": "Die Sierra Nevada, wÃ¶rtlich das 'schneebedeckte Gebirge', ist eine atemberaubende Bergkette im SÃ¼den Spaniens, hauptsÃ¤chlich in der Provinz Granada. Sie ist das zweithÃ¶chste Gebirgsmassiv Westeuropas nach den Alpen und weist mit dem MulhacÃ©n den hÃ¶chsten Gipfel des spanischen Festlands auf. Bemerkenswert ist der starke Kontrast: WÃ¤hrend man oben auf den Gletschern skifahren kann, leuchten unten an der Costa Tropical die Palmen im Sonnenschein. Der GroÃŸteil des Gebirges ist als Nationalpark und UNESCO-BiosphÃ¤renreservat geschÃ¼tzt und beheimatet eine unglaubliche Vielfalt an Flora und Fauna, darunter viele endemische Arten.",
          "hu": "A Sierra Nevada, szÃ³ szerint 'hÃ³fÃ¶dte hegysÃ©g', egy lÃ©legzetelÃ¡llÃ­tÃ³ hegylÃ¡nc DÃ©l-SpanyolorszÃ¡gban, fÅ‘kÃ©nt Granada tartomÃ¡nyban. Az Alpok utÃ¡n Nyugat-EurÃ³pa mÃ¡sodik legmagasabb hegymasszÃ­vuma, Ã©s a MulhacÃ©nnel a spanyol szÃ¡razfÃ¶ld legmagasabb csÃºcsÃ¡val bÃ¼szkÃ©lkedhet. A heles kontraszt figyelemre mÃ©ltÃ³: mikÃ¶zben odafent a gleccsereken sÃ­elni lehet, lent a Costa Tropical partjÃ¡n pÃ¡lmafÃ¡k sÃ¼tkÃ©reznek a napsÃ¼tÃ©sben. A hegysÃ©g nagy rÃ©sze nemzeti parkkÃ©nt Ã©s UNESCO bioszfÃ©ra-rezervÃ¡tumkÃ©nt vÃ©dett, Ã©s hihetetlenÃ¼l gazdag nÃ¶vÃ©ny- Ã©s Ã¡llatvilÃ¡gnak, kÃ¶ztÃ¼k szÃ¡mos endemikus fajnak ad otthont.",
          "ro": "Sierra Nevada, literalmente 'lanÈ›ul muntos Ã®nzÄƒpezit', este un lanÈ› muntos uluitor Ã®n sudul Spaniei, situat Ã®n principal Ã®n provincia Granada. Este al doilea cel mai Ã®nalt masiv muntos din Europa de Vest dupÄƒ Alpi È™i se mÃ¢ndreÈ™te cu cel mai Ã®nalt vÃ¢rf din Spania continentalÄƒ, MulhacÃ©n. Contrastul puternic este remarcabil: Ã®n timp ce se poate schia pe gheÈ›arii de sus, palmierii strÄƒlucesc Ã®n soare jos, pe Costa Tropical. Cea mai mare parte a lanÈ›ului muntos este protejatÄƒ ca parc naÈ›ional È™i rezervaÈ›ie a biosferei UNESCO È™i gÄƒzduieÈ™te o varietate incredibilÄƒ de florÄƒ È™i faunÄƒ, inclusiv multe specii endemice.",
          "en": "The Sierra Nevada, literally the 'snow-covered mountain range', is a breathtaking mountain range in southern Spain, mainly in the province of Granada. It is the second highest mountain massif in Western Europe after the Alps and boasts the highest peak in mainland Spain, the MulhacÃ©n. The stark contrast is remarkable: while one can ski on the glaciers above, palm trees shine in the sun below on the Costa Tropical. Most of the mountain range is protected as a national park and UNESCO biosphere reserve and is home to an incredible variety of flora and fauna, including many endemic species."
    },
    facts: {
          "de": [
                "Der MulhacÃ©n ist mit 3.482 Metern der hÃ¶chste Berg der Iberischen Halbinsel.",
                "Die Sierra Nevada beherbergt das sÃ¼dlichste Skigebiet Europas.",
                "Die Fahrt von den Skipisten zu den StrÃ¤nden des Mittelmeers dauert oft weniger als zwei Stunden.",
                "Das Gebirge wurde 1986 von der UNESCO zum BiosphÃ¤renreservat erklÃ¤rt.",
                "Es gibt Ã¼ber 2.100 erfasste Pflanzenarten, wovon mehr als 60 nur hier vorkommen.",
                "Das Observatorium der Sierra Nevada nutzt die saubere Bergluft fÃ¼r astronomische Forschungen.",
                "Die Region Las Alpujarras an den SÃ¼dhÃ¤ngen ist berÃ¼hmt fÃ¼r ihre weiÃŸen DÃ¶rfer und Berberarchitektur.",
                "Im Sommer ist das Gebiet ein Paradies fÃ¼r anspruchsvolle Mountainbiker und Wanderer."
          ],
          "hu": [
                "A MulhacÃ©n 3482 mÃ©terÃ©vel az IbÃ©riai-fÃ©lsziget legmagasabb hegye.",
                "A Sierra NevadÃ¡ban talÃ¡lhatÃ³ EurÃ³pa legdÃ©lebbi sÃ­terepe.",
                "A sÃ­pÃ¡lyÃ¡ktÃ³l a FÃ¶ldkÃ¶zi-tenger strandjaiig tartÃ³ Ãºt gyakran kevesebb mint kÃ©t Ã³rÃ¡t vesz igÃ©nybe.",
                "A hegysÃ©get 1986-ban az UNESCO bioszfÃ©ra-rezervÃ¡tummÃ¡ nyilvÃ¡nÃ­totta.",
                "TÃ¶bb mint 2100 regisztrÃ¡lt nÃ¶vÃ©nyfaj Ã©l itt, amelyek kÃ¶zÃ¼l tÃ¶bb mint 60 csak ezen a terÃ¼leten talÃ¡lhatÃ³ meg.",
                "A Sierra Nevada ObszervatÃ³rium a tiszta hegyi levegÅ‘t hasznÃ¡lja csillagÃ¡szati kutatÃ¡sokhoz.",
                "A dÃ©li lejtÅ‘kÃ¶n elterÃ¼lÅ‘ Las Alpujarras rÃ©giÃ³ hÃ­res fehÃ©r falvairÃ³l Ã©s berber Ã©pÃ­tÃ©szetÃ©rÅ‘l.",
                "NyÃ¡ron a terÃ¼let a kihÃ­vÃ¡sokat keresÅ‘ hegyikerÃ©kpÃ¡rosok Ã©s tÃºrÃ¡zÃ³k paradicsoma."
          ],
          "ro": [
                "MulhacÃ©n, la 3.482 de metri, este cel mai Ã®nalt munte din Peninsula IbericÄƒ.",
                "Sierra Nevada gÄƒzduieÈ™te cea mai sudicÄƒ staÈ›iune de schi din Europa.",
                "CÄƒlÄƒtoria de la pÃ¢rtiile de schi la plajele MÄƒrii Mediterane dureazÄƒ adesea mai puÈ›in de douÄƒ ore.",
                "LanÈ›ul muntos a fost declarat rezervaÈ›ie a biosferei de cÄƒtre UNESCO Ã®n 1986.",
                "ExistÄƒ peste 2.100 de specii de plante Ã®nregistrate, dintre care peste 60 se gÄƒsesc doar aici.",
                "Observatorul din Sierra Nevada foloseÈ™te aerul curat de munte pentru cercetÄƒri astronomice.",
                "Regiunea Las Alpujarras de pe versanÈ›ii sudici este renumitÄƒ pentru satele sale albe È™i arhitectura berberÄƒ.",
                "Vara, zona este un paradis pentru cicliÈ™tii de munte È™i drumeÈ›ii exigenÈ›i."
          ],
          "en": [
                "The MulhacÃ©n is the highest mountain on the Iberian Peninsula at 3,482 meters.",
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
          "de": "Die Picos de Europa ('Gipfel Europas') bilden ein spektakulÃ¤res, zerklÃ¼ftetes Kalksteinmassiv im Kantabrischen Gebirge in Nordspanien. Das Gebirge erstreckt sich Ã¼ber die Regionen Asturien, Kantabrien und Kastilien und LeÃ³n. Die Landschaft ist wild und dramatisch, geprÃ¤gt von tiefen Schluchten, gÃ¤hnenden AbgrÃ¼nden wie der Cares-Schlucht und hoch aufragenden, fast senkrechten FelswÃ¤nden, die bei Kletterern aus aller Welt begehrt sind. Neben der rauen Geologie zeichnet sich der Nationalpark durch unberÃ¼hrte Buchen- und EichenwÃ¤lder, malerische Bergseen (die Lagos de Covadonga) und eine reiche, ursprÃ¼ngliche Tierwelt aus. Es ist ein echtes Paradies fÃ¼r Abenteurer und Naturliebhaber.",
          "hu": "A Picos de Europa ('EurÃ³pa csÃºcsai') egy lÃ¡tvÃ¡nyos, csipkÃ©zett mÃ©szkÅ‘masszÃ­vum Ã‰szak-SpanyolorszÃ¡gban, a KantÃ¡briai-hegysÃ©gben. A hegysÃ©g AsztÃºria, KantÃ¡bria, valamint KasztÃ­lia Ã©s LeÃ³n rÃ©giÃ³kon Ã­vel Ã¡t. A tÃ¡j vad Ã©s drÃ¡mai, mÃ©ly szurdokok, tÃ¡tongÃ³ szakadÃ©kok, mint a Cares-szurdok, Ã©s magasba tÃ¶rÅ‘, szinte fÃ¼ggÅ‘leges sziklafalak jellemzik, amelyek a sziklamÃ¡szÃ³k kedvencei szerte a vilÃ¡gon. A zord geolÃ³gia mellett a nemzeti parkot Ã©rintetlen bÃ¼kk- Ã©s tÃ¶lgyerdÅ‘k, festÅ‘i hegyi tavak (a Lagos de Covadonga) Ã©s gazdag, eredeti Ã¡llatvilÃ¡g jellemzi. Igazi paradicsom a kalandorok Ã©s a termÃ©szet szerelmesei szÃ¡mÃ¡ra.",
          "ro": "Picos de Europa ('VÃ¢rfurile Europei') formeazÄƒ un masiv de calcar spectaculos È™i accidentat Ã®n MunÈ›ii Cantabrici din nordul Spaniei. MunÈ›ii se Ã®ntind pe regiunile Asturia, Cantabria È™i Castilia È™i LeÃ³n. Peisajul este sÄƒlbatic È™i dramatic, caracterizat prin defileuri adÃ¢nci, prÄƒpÄƒstii cÄƒscate, precum Defileul Cares, È™i pereÈ›i de stÃ¢ncÄƒ falnici, aproape verticali, foarte cÄƒutaÈ›i de alpiniÈ™tii din Ã®ntreaga lume. Pe lÃ¢ngÄƒ geologia asprÄƒ, parcul naÈ›ional este caracterizat de pÄƒduri virgine de fag È™i stejar, lacuri de munte pitoreÈ™ti (Lagos de Covadonga) È™i o viaÈ›Äƒ sÄƒlbaticÄƒ bogatÄƒ È™i originalÄƒ. Este un adevÄƒrat paradis pentru aventurieri È™i iubitori de naturÄƒ.",
          "en": "The Picos de Europa ('Peaks of Europe') form a spectacular, rugged limestone massif in the Cantabrian Mountains of northern Spain. The mountains stretch across the regions of Asturias, Cantabria, and Castile and LeÃ³n. The landscape is wild and dramatic, characterized by deep gorges, yawning abysses like the Cares Gorge, and towering, almost vertical rock walls that are highly sought after by climbers from all over the world. In addition to the harsh geology, the national park features pristine beech and oak forests, picturesque mountain lakes (the Lagos de Covadonga), and a rich, original wildlife. It is a true paradise for adventurers and nature lovers."
    },
    facts: {
          "de": [
                "Der Nationalpark Picos de Europa, 1918 gegrÃ¼ndet, war der erste Nationalpark Spaniens.",
                "Der Torre de Cerredo ist mit 2.650 Metern der hÃ¶chste Gipfel des Massivs.",
                "Der Naranjo de Bulnes (Picu Urriellu) ist ein markanter Kalksteinmonolith und ein Mekka fÃ¼r Kletterer.",
                "Die Schlucht 'Garganta del Cares' bietet eine der berÃ¼hmtesten und atemberaubendsten Wanderrouten Spaniens.",
                "In den Bergen wird in NaturhÃ¶hlen der berÃ¼hmte BlauschimmelkÃ¤se 'Cabrales' gereift.",
                "Das Gebiet ist ein Refugium fÃ¼r bedrohte Tierarten wie den Kantabrischen BraunbÃ¤ren und den iberischen Wolf.",
                "Die HÃ¶hle und Basilika von Covadonga sind ein wichtiger historischer und religiÃ¶ser Ort fÃ¼r Spanien.",
                "Es gibt eine Seilbahn bei Fuente DÃ©, die Besucher in wenigen Minuten auf Ã¼ber 1.800 Meter HÃ¶he bringt."
          ],
          "hu": [
                "Az 1918-ban alapÃ­tott Picos de Europa Nemzeti Park volt SpanyolorszÃ¡g elsÅ‘ nemzeti parkja.",
                "A Torre de Cerredo 2650 mÃ©terÃ©vel a masszÃ­vum legmagasabb csÃºcsa.",
                "A Naranjo de Bulnes (Picu Urriellu) egy jellegzetes mÃ©szkÅ‘monolit, a sziklamÃ¡szÃ³k mekkÃ¡ja.",
                "A 'Garganta del Cares' szurdok SpanyolorszÃ¡g egyik leghÃ­resebb Ã©s leglÃ©legzetelÃ¡llÃ­tÃ³bb tÃºraÃºtvonalÃ¡t kÃ­nÃ¡lja.",
                "A hegyek termÃ©szetes barlangjaiban Ã©rlelik a hÃ­res 'Cabrales' kÃ©ksajtot.",
                "A terÃ¼let olyan veszÃ©lyeztetett Ã¡llatfajok menedÃ©ke, mint a kantÃ¡briai barna medve Ã©s az ibÃ©riai farkas.",
                "Covadonga barlangja Ã©s bazilikÃ¡ja fontos tÃ¶rtÃ©nelmi Ã©s vallÃ¡si helyszÃ­n SpanyolorszÃ¡g szÃ¡mÃ¡ra.",
                "Fuente DÃ©nÃ©l talÃ¡lhatÃ³ egy drÃ³tkÃ¶tÃ©lpÃ¡lya, amely percek alatt tÃ¶bb mint 1800 mÃ©teres magassÃ¡gba viszi a lÃ¡togatÃ³kat."
          ],
          "ro": [
                "Parcul NaÈ›ional Picos de Europa, Ã®nfiinÈ›at Ã®n 1918, a fost primul parc naÈ›ional din Spania.",
                "Torre de Cerredo este cel mai Ã®nalt vÃ¢rf al masivului, la 2.650 de metri.",
                "Naranjo de Bulnes (Picu Urriellu) este un monolit izbitor de calcar È™i o mecca pentru alpiniÈ™ti.",
                "Defileul 'Garganta del Cares' oferÄƒ unul dintre cele mai faimoase È™i mai uluitoare trasee de drumeÈ›ii din Spania.",
                "Faimoasa brÃ¢nzÄƒ cu mucegai albastru 'Cabrales' este maturatÄƒ Ã®n peÈ™teri naturale din munÈ›i.",
                "Zona este un refugiu pentru specii pe cale de dispariÈ›ie, cum ar fi ursul brun cantabric È™i lupul iberic.",
                "PeÈ™tera È™i bazilica din Covadonga sunt un important sit istoric È™i religios pentru Spania.",
                "ExistÄƒ o telecabinÄƒ la Fuente DÃ© care duce vizitatorii la peste 1.800 de metri altitudine Ã®n cÃ¢teva minute."
          ],
          "en": [
                "The Picos de Europa National Park, established in 1918, was Spain's first national park.",
                "The Torre de Cerredo is the highest peak of the massif at 2,650 meters.",
                "The Naranjo de Bulnes (Picu Urriellu) is a striking limestone monolith and a mecca for climbers.",
                "The 'Garganta del Cares' gorge offers one of the most famous and breathtaking hiking trails in Spain.",
                "The famous 'Cabrales' blue cheese is matured in natural caves in the mountains.",
                "The area is a refuge for endangered species such as the Cantabrian brown bear and the Iberian wolf.",
                "The cave and basilica of Covadonga are an important historical and religious site for Spain.",
                "There is a cable car at Fuente DÃ© that takes visitors to an altitude of over 1,800 meters in just a few minutes."
          ]
    },
    image: "/geo-images/spain/picos-de-europa.webp",
    
  },
  {
    id: "es-costa-brava", type: "landmark", parent: "ES-CT", coords: [3.1235, 41.9750],
    name: {"de": "Costa Brava", "hu": "Costa Brava", "ro": "Costa Brava", "en": "Costa Brava"},
    
    description: {
          "de": "Die Costa Brava, die 'Wilde KÃ¼ste', erstreckt sich entlang der nordÃ¶stlichen KÃ¼ste Kataloniens von Blanes bis zur franzÃ¶sischen Grenze. Ihren Namen verdankt sie der rauen, zerklÃ¼fteten FelskÃ¼ste, die abrupt ins tiefblaue Mittelmeer abfÃ¤llt. Versteckt zwischen diesen Klippen liegen unzÃ¤hlige malerische, pinienumsÃ¤umte Buchten (Calas) mit kristallklarem Wasser. Entlang der KÃ¼ste finden sich bezaubernde mittelalterliche DÃ¶rfer wie Pals, traditionelle Fischerorte wie CadaquÃ©s und antike griechisch-rÃ¶mische Ruinen bei EmpÃºries. Die Costa Brava zog schon immer KÃ¼nstler an, allen voran Salvador DalÃ­, dessen Erbe die Region bis heute prÃ¤gt.",
          "hu": "A Costa Brava, a 'Vad part', KatalÃ³nia Ã©szakkeleti partvidÃ©kÃ©n hÃºzÃ³dik BlanestÅ‘l egÃ©szen a francia hatÃ¡rig. NevÃ©t a zord, csipkÃ©zett sziklÃ¡s partvonalrÃ³l kapta, amely hirtelen szakad a mÃ©lykÃ©k FÃ¶ldkÃ¶zi-tengerbe. E sziklÃ¡k kÃ¶zÃ¶tt megbÃºjva szÃ¡mtalan festÅ‘i, fenyÅ‘fÃ¡kkal szegÃ©lyezett Ã¶bÃ¶l (Cala) talÃ¡lhatÃ³ kristÃ¡lytiszta vÃ­zzel. A part mentÃ©n elbÅ±vÃ¶lÅ‘ kÃ¶zÃ©pkori falvak, mint Pals, hagyomÃ¡nyos halÃ¡szfalvak, mint CadaquÃ©s, Ã©s Ã³kori gÃ¶rÃ¶g-rÃ³mai romok (EmpÃºries) talÃ¡lhatÃ³k. A Costa Brava mindig is vonzotta a mÅ±vÃ©szeket, legfÅ‘kÃ©ppen Salvador DalÃ­t, akinek Ã¶rÃ¶ksÃ©ge a mai napig meghatÃ¡rozza a rÃ©giÃ³t.",
          "ro": "Costa Brava, 'Coasta SÄƒlbaticÄƒ', se Ã®ntinde de-a lungul coastei de nord-est a Cataloniei, de la Blanes pÃ¢nÄƒ la graniÈ›a cu FranÈ›a. ÃŽÈ™i datoreazÄƒ numele coastei stÃ¢ncoase aspre, accidentate, care cade brusc Ã®n adÃ¢ncul MÄƒrii Mediterane albastre. Ascunse printre aceste stÃ¢nci se aflÄƒ nenumÄƒrate golfuri pitoreÈ™ti, mÄƒrginite de pini (Calas), cu ape cristaline. De-a lungul coastei veÈ›i gÄƒsi sate medievale fermecÄƒtoare precum Pals, sate tradiÈ›ionale de pescari precum CadaquÃ©s È™i ruine antice greco-romane lÃ¢ngÄƒ EmpÃºries. Costa Brava a atras Ã®ntotdeauna artiÈ™ti, mai ales pe Salvador DalÃ­, a cÄƒrui moÈ™tenire continuÄƒ sÄƒ modeleze regiunea È™i astÄƒzi.",
          "en": "The Costa Brava, the 'Wild Coast', stretches along the northeastern coast of Catalonia from Blanes to the French border. It owes its name to the rough, rugged rocky coastline that drops abruptly into the deep blue Mediterranean Sea. Hidden among these cliffs are countless picturesque, pine-fringed coves (Calas) with crystal-clear water. Along the coast, you will find charming medieval villages like Pals, traditional fishing villages like CadaquÃ©s, and ancient Greco-Roman ruins near EmpÃºries. The Costa Brava has always attracted artists, most notably Salvador DalÃ­, whose legacy continues to shape the region today."
    },
    facts: {
          "de": [
                "Der berÃ¼hmte surrealistische Maler Salvador DalÃ­ lebte lange in Portlligat nahe CadaquÃ©s.",
                "Das Teatre-Museu DalÃ­ in Figueres ist das grÃ¶ÃŸte surrealistische Objekt der Welt.",
                "Die Ruinen von EmpÃºries sind die einzige StÃ¤tte der iberischen Halbinsel, an der griechische und rÃ¶mische Reste vereint sind.",
                "Ein wunderschÃ¶ner KÃ¼stenwanderweg (CamÃ­ de Ronda) verbindet fast die gesamte Costa Brava.",
                "Die Medes-Inseln vor der KÃ¼ste sind ein geschÃ¼tztes Meeresreservat und ein Taucherparadies.",
                "Die Region besitzt eine exzellente Gastronomie und mehrere Michelin-Sterne-Restaurants.",
                "Der Botanische Garten Marimurtra in Blanes bietet atemberaubende Klippenaussichten.",
                "Die Costa Brava war in den 1950er Jahren der Beginn des spanischen Massentourismus-Booms."
          ],
          "hu": [
                "A hÃ­res szÃ¼rrealista festÅ‘, Salvador DalÃ­ sokÃ¡ig a CadaquÃ©s melletti Portlligatban Ã©lt.",
                "A figueresi Teatre-Museu DalÃ­ a vilÃ¡g legnagyobb szÃ¼rrealista lÃ©tesÃ­tmÃ©nye.",
                "Az empÃºries-i romok az egyetlen hely az IbÃ©riai-fÃ©lszigeten, ahol a gÃ¶rÃ¶g Ã©s rÃ³mai maradvÃ¡nyok egyesÃ¼lnek.",
                "Egy gyÃ¶nyÃ¶rÅ± tengerparti tÃºraÃºtvonal (CamÃ­ de Ronda) szinte az egÃ©sz Costa BravÃ¡t Ã¶sszekÃ¶ti.",
                "A part menti Medes-szigetek vÃ©dett tengeri rezervÃ¡tum Ã©s a bÃºvÃ¡rok paradicsoma.",
                "A rÃ©giÃ³ kivÃ¡lÃ³ gasztronÃ³miÃ¡val Ã©s szÃ¡mos Michelin-csillagos Ã©tteremmel bÃ¼szkÃ©lkedhet.",
                "A blanesi Marimurtra botanikus kert lÃ©legzetelÃ¡llÃ­tÃ³ kilÃ¡tÃ¡st nyÃºjt a sziklÃ¡kra.",
                "Az 1950-es Ã©vekben a Costa Brava indÃ­totta el a spanyol tÃ¶megturizmus fellendÃ¼lÃ©sÃ©t."
          ],
          "ro": [
                "Faimosul pictor suprarealist Salvador DalÃ­ a locuit mult timp Ã®n Portlligat, lÃ¢ngÄƒ CadaquÃ©s.",
                "Teatre-Museu DalÃ­ din Figueres este cel mai mare obiect suprarealist din lume.",
                "Ruinele de la EmpÃºries sunt singurul loc din Peninsula IbericÄƒ unde sunt combinate vestigii greceÈ™ti È™i romane.",
                "O frumoasÄƒ potecÄƒ de coastÄƒ pentru drumeÈ›ii (CamÃ­ de Ronda) conecteazÄƒ aproape Ã®ntreaga Costa Brava.",
                "Insulele Medes din largul coastei sunt o rezervaÈ›ie marinÄƒ protejatÄƒ È™i un paradis pentru scafandri.",
                "Regiunea se mÃ¢ndreÈ™te cu o gastronomie excelentÄƒ È™i mai multe restaurante cu stele Michelin.",
                "GrÄƒdina BotanicÄƒ Marimurtra din Blanes oferÄƒ vederi uimitoare ale stÃ¢ncilor.",
                "ÃŽn anii 1950, Costa Brava a fost Ã®nceputul boom-ului turismului de masÄƒ din Spania."
          ],
          "en": [
                "The famous surrealist painter Salvador DalÃ­ lived in Portlligat near CadaquÃ©s for a long time.",
                "The Teatre-Museu DalÃ­ in Figueres is the largest surrealist object in the world.",
                "The ruins of EmpÃºries are the only site on the Iberian Peninsula where Greek and Roman remains are combined.",
                "A beautiful coastal hiking trail (CamÃ­ de Ronda) connects almost the entire Costa Brava.",
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
          "de": "Die Costa del Sol, die 'SonnenkÃ¼ste', ist Spaniens berÃ¼hmtester KÃ¼stenstreifen im SÃ¼den Andalusiens, zentriert um die Stadt MÃ¡laga. Mit Ã¼ber 320 Sonnentagen im Jahr macht sie ihrem Namen alle Ehre und zieht Besucher aus ganz Europa an. Das Landschaftsbild reicht von langen, goldenen SandstrÃ¤nden bis zu dramatischen Bergen direkt im Hinterland. WÃ¤hrend mondÃ¤ne Ferienorte wie Marbella mit luxuriÃ¶sen YachthÃ¤fen (Puerto BanÃºs), teuren Boutiquen und GolfplÃ¤tzen protzen, versprÃ¼hen traditionelle 'WeiÃŸe DÃ¶rfer' (Pueblos Blancos) in den Bergen authentischen andalusischen Charme. Die Costa del Sol ist eine perfekte Destination fÃ¼r Strandurlaub, Nachtleben und Freizeitsport.",
          "hu": "A Costa del Sol, a 'Napos part', SpanyolorszÃ¡g leghÃ­resebb partvonala AndalÃºzia dÃ©li rÃ©szÃ©n, MÃ¡laga vÃ¡rosa kÃ¶rÃ¼l. Az Ã©vi tÃ¶bb mint 320 napsÃ¼tÃ©ses nappal mÃ©ltÃ³ a nevÃ©re, Ã©s egÃ©sz EurÃ³pÃ¡bÃ³l vonzza a lÃ¡togatÃ³kat. A tÃ¡j hosszÃº, aranyhomokos strandoktÃ³l kezdve kÃ¶zvetlenÃ¼l a hÃ¡torszÃ¡gban hÃºzÃ³dÃ³ drÃ¡mai hegyekig terjed. MÃ­g az olyan divatos Ã¼dÃ¼lÅ‘helyek, mint Marbella luxusjachtkikÃ¶tÅ‘kkel (Puerto BanÃºs), drÃ¡ga butikokkal Ã©s golfpÃ¡lyÃ¡kkal bÃ¼szkÃ©lkedhetnek, addig a hegyekben lÃ©vÅ‘ hagyomÃ¡nyos 'FehÃ©r falvak' (Pueblos Blancos) autentikus andalÃºz bÃ¡jt Ã¡rasztanak. A Costa del Sol tÃ¶kÃ©letes cÃ©lpont a tengerparti nyaralÃ¡shoz, az Ã©jszakai Ã©lethez Ã©s a szabadidÅ‘s sportokhoz.",
          "ro": "Costa del Sol, 'Coasta Soarelui', este cea mai faimoasÄƒ porÈ›iune de coastÄƒ a Spaniei din sudul Andaluziei, centratÄƒ Ã®n jurul oraÈ™ului MÃ¡laga. Cu peste 320 de zile de soare pe an, Ã®È™i respectÄƒ numele È™i atrage vizitatori din toatÄƒ Europa. Peisajul variazÄƒ de la plaje lungi cu nisip auriu la munÈ›i dramatici chiar Ã®n interior. ÃŽn timp ce staÈ›iunile la modÄƒ, cum ar fi Marbella, se mÃ¢ndresc cu porturi de lux pentru iahturi (Puerto BanÃºs), buticuri scumpe È™i terenuri de golf, â€žSatele Albeâ€ (Pueblos Blancos) tradiÈ›ionale din munÈ›i emanÄƒ un farmec andaluz autentic. Costa del Sol este o destinaÈ›ie perfectÄƒ pentru vacanÈ›e la plajÄƒ, viaÈ›Äƒ de noapte È™i sporturi de agrement.",
          "en": "The Costa del Sol, the 'Sun Coast', is Spain's most famous stretch of coastline in southern Andalusia, centered around the city of MÃ¡laga. With over 320 days of sunshine a year, it lives up to its name and attracts visitors from all over Europe. The landscape ranges from long, golden sandy beaches to dramatic mountains right in the hinterland. While fashionable resorts like Marbella boast luxurious yacht marinas (Puerto BanÃºs), expensive boutiques, and golf courses, traditional 'White Villages' (Pueblos Blancos) in the mountains exude authentic Andalusian charm. The Costa del Sol is a perfect destination for beach holidays, nightlife, and leisure sports."
    },
    facts: {
          "de": [
                "Aufgrund der auÃŸergewÃ¶hnlich hohen Dichte an GolfplÃ¤tzen wird die Region auch oft 'Costa del Golf' genannt.",
                "Puerto BanÃºs in Marbella ist einer der exklusivsten und teuersten YachthÃ¤fen Europas.",
                "Nerja ist ein beliebtes KÃ¼stenstÃ¤dtchen, das fÃ¼r seinen Aussichtspunkt 'Balkon von Europa' bekannt ist.",
                "Mijas ist ein typisches, malerisches weiÃŸes Bergdorf, das Touristen Esel-Taxis anbietet.",
                "Die KÃ¼ste wurde in den 1960er und 70er Jahren stark fÃ¼r den Tourismus ausgebaut.",
                "Die riesigen TropfsteinhÃ¶hlen von Nerja beherbergen Spuren prÃ¤historischer Kunst.",
                "Das Hinterland bietet hervorragende Wanderwege in Naturparks wie der Sierra de las Nieves.",
                "Die Region ist berÃ¼hmt fÃ¼r frittierten Fisch ('Pescaito Frito'), der in kleinen Strandrestaurants (Chiringuitos) serviert wird."
          ],
          "hu": [
                "A golfpÃ¡lyÃ¡k kivÃ©telesen nagy sÅ±rÅ±sÃ©ge miatt a rÃ©giÃ³t gyakran 'Costa del Golf'-nak is hÃ­vjÃ¡k.",
                "A marbellai Puerto BanÃºs EurÃ³pa egyik legexkluzÃ­vabb Ã©s legdrÃ¡gÃ¡bb jachtkikÃ¶tÅ‘je.",
                "Nerja egy nÃ©pszerÅ± tengerparti kisvÃ¡ros, amely az 'EurÃ³pa erkÃ©lye' kilÃ¡tÃ³pontrÃ³l ismert.",
                "Mijas egy tipikus, festÅ‘i fehÃ©r hegyi falu, amely szamÃ¡rtaxit kÃ­nÃ¡l a turistÃ¡knak.",
                "A tengerpartot az 1960-as Ã©s 70-es Ã©vekben erÅ‘sen beÃ©pÃ­tettÃ©k a turizmus szÃ¡mÃ¡ra.",
                "A hatalmas nerjai cseppkÅ‘barlangokban Å‘skori mÅ±vÃ©szet nyomai talÃ¡lhatÃ³k.",
                "A hÃ¡torszÃ¡g kivÃ¡lÃ³ tÃºraÃºtvonalakat kÃ­nÃ¡l olyan natÃºrparkokban, mint a Sierra de las Nieves.",
                "A rÃ©giÃ³ hÃ­res a kis parti Ã©ttermekben (chiringuitos) felszolgÃ¡lt sÃ¼lt halrÃ³l ('Pescaito Frito')."
          ],
          "ro": [
                "DatoritÄƒ densitÄƒÈ›ii excepÈ›ional de mari de terenuri de golf, regiunea este adesea numitÄƒ È™i 'Costa del Golf'.",
                "Puerto BanÃºs din Marbella este unul dintre cele mai exclusiviste È™i scumpe porturi de iahturi din Europa.",
                "Nerja este un oraÈ™ de coastÄƒ popular, cunoscut pentru punctul sÄƒu de belvedere 'Balconul Europei'.",
                "Mijas este un sat de munte alb tipic È™i pitoresc, care oferÄƒ taxiuri trase de mÄƒgari pentru turiÈ™ti.",
                "Coasta a fost puternic dezvoltatÄƒ pentru turism Ã®n anii 1960 È™i '70.",
                "UriaÈ™ele peÈ™teri cu stalactite din Nerja adÄƒpostesc urme de artÄƒ preistoricÄƒ.",
                "Interiorul oferÄƒ trasee excelente de drumeÈ›ii Ã®n parcuri naturale precum Sierra de las Nieves.",
                "Regiunea este renumitÄƒ pentru peÈ™tele prÄƒjit ('Pescaito Frito'), servit Ã®n mici restaurante pe plajÄƒ (chiringuitos)."
          ],
          "en": [
                "Due to the exceptionally high density of golf courses, the region is also often called 'Costa del Golf'.",
                "Puerto BanÃºs in Marbella is one of the most exclusive and expensive yacht marinas in Europe.",
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
    "de": "Casa BatllÃ³",
    "hu": "Casa BatllÃ³",
    "ro": "Casa BatllÃ³",
    "en": "Casa BatllÃ³"
  },
  "image": "/geo-images/spain/gaudi-casa-batllo.webp",
  "description": {
    "de": "Casa BatllÃ³ ist ein Meisterwerk des Architekten Antoni GaudÃ­ in Barcelona. Es zeichnet sich durch seine organischen Formen und die farbenfrohe Mosaikfassade aus. Das GebÃ¤ude wurde zwischen 1904 und 1906 umfassend umgebaut und ist heute ein UNESCO-Weltkulturerbe.",
    "hu": "A Casa BatllÃ³ Antoni GaudÃ­ Ã©pÃ­tÃ©sz egyik barcelonai remekmÅ±ve. Szerves formÃ¡irÃ³l Ã©s szÃ­nes mozaikhomlokzatÃ¡rÃ³l hÃ­res. Az Ã©pÃ¼letet 1904 Ã©s 1906 kÃ¶zÃ¶tt Ã©pÃ­tettÃ©k Ã¡t, Ã©s ma az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
    "ro": "Casa BatllÃ³ este o capodoperÄƒ a arhitectului Antoni GaudÃ­ din Barcelona. Este renumitÄƒ pentru formele sale organice È™i faÈ›ada coloratÄƒ din mozaic. ClÄƒdirea a fost reconstruitÄƒ Ã®ntre 1904 È™i 1906 È™i este astÄƒzi Ã®n Patrimoniul Mondial UNESCO.",
    "en": "Casa BatllÃ³ is a masterpiece by the architect Antoni GaudÃ­ in Barcelona. It is famous for its organic forms and colorful mosaic facade. The building was rebuilt between 1904 and 1906 and is now a UNESCO World Heritage Site."
  },
  "facts": {
    "de": [
      "Entworfen von Antoni GaudÃ­.",
      "Befindet sich am Passeig de GrÃ cia.",
      "Wird lokal 'Haus der Knochen' genannt.",
      "Das Dach stellt einen DrachenrÃ¼cken dar.",
      "VerfÃ¼gt Ã¼ber bunte Keramikmosaike (TrencadÃ­s).",
      "GehÃ¶rt seit 2005 zum UNESCO-Weltkulturerbe."
    ],
    "hu": [
      "Antoni GaudÃ­ tervezte.",
      "A Passeig de GrÃ cia utcÃ¡ban talÃ¡lhatÃ³.",
      "A helyiek 'Csontok hÃ¡zÃ¡nak' hÃ­vjÃ¡k.",
      "A tetÅ‘ egy sÃ¡rkÃ¡ny hÃ¡tÃ¡t Ã¡brÃ¡zolja.",
      "SzÃ­nes kerÃ¡miamozaikokkal (trencadÃ­s) dÃ­szÃ­tett.",
      "2005 Ã³ta az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze."
    ],
    "ro": [
      "ProiectatÄƒ de Antoni GaudÃ­.",
      "Se aflÄƒ pe Passeig de GrÃ cia.",
      "NumitÄƒ local 'Casa Oaselor'.",
      "AcoperiÈ™ul reprezintÄƒ spatele unui dragon.",
      "DecoratÄƒ cu mozaicuri ceramice colorate (trencadÃ­s).",
      "Face parte din Patrimoniul UNESCO din 2005."
    ],
    "en": [
      "Designed by Antoni GaudÃ­.",
      "Located on the Passeig de GrÃ cia.",
      "Locally called the 'House of Bones'.",
      "The roof represents a dragon's back.",
      "Decorated with colorful ceramic mosaics (trencadÃ­s).",
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
    "de": "Casa MilÃ  (La Pedrera)",
    "hu": "Casa MilÃ  (La Pedrera)",
    "ro": "Casa MilÃ  (La Pedrera)",
    "en": "Casa MilÃ  (La Pedrera)"
  },
  "image": "/geo-images/spain/gaudi-casa-mila.webp",
  "description": {
    "de": "Casa MilÃ , auch bekannt als La Pedrera, ist ein weiteres ikonisches Werk von Antoni GaudÃ­. Es war das letzte private Wohnhaus, das der Architekt entwarf. Die unkonventionelle steinerne Fassade und die schmiedeeisernen Balkone machen es zu einem Meisterwerk des Modernismus.",
    "hu": "A Casa MilÃ , mÃ¡s nÃ©ven La Pedrera, Antoni GaudÃ­ Ãºjabb ikonikus alkotÃ¡sa. Ez volt az Ã©pÃ­tÃ©sz Ã¡ltal tervezett utolsÃ³ magÃ¡nlakÃ¡s. A rendhagyÃ³ kÅ‘homlokzat Ã©s a kovÃ¡csoltvas erkÃ©lyek a modernizmus mestermÅ±vÃ©vÃ© teszik.",
    "ro": "Casa MilÃ , cunoscutÄƒ È™i sub numele de La Pedrera, este o altÄƒ lucrare iconicÄƒ a lui Antoni GaudÃ­. A fost ultima reÈ™edinÈ›Äƒ privatÄƒ proiectatÄƒ de arhitect. FaÈ›ada sa neconvenÈ›ionalÄƒ din piatrÄƒ È™i balcoanele din fier forjat o fac o capodoperÄƒ a modernismului.",
    "en": "Casa MilÃ , also known as La Pedrera, is another iconic work by Antoni GaudÃ­. It was the last private residence designed by the architect. Its unconventional stone facade and wrought iron balconies make it a masterpiece of Modernism."
  },
  "facts": {
    "de": [
      "Entworfen von Antoni GaudÃ­.",
      "Erbaut zwischen 1906 und 1912.",
      "La Pedrera bedeutet 'der Steinbruch'.",
      "Bekannt fÃ¼r seine surrealen Schornsteine auf dem Dach.",
      "Hat keine tragenden WÃ¤nde, nur SÃ¤ulen.",
      "Seit 1984 UNESCO-Weltkulturerbe."
    ],
    "hu": [
      "Antoni GaudÃ­ tervezte.",
      "1906 Ã©s 1912 kÃ¶zÃ¶tt Ã©pÃ¼lt.",
      "A La Pedrera jelentÃ©se 'a kÅ‘bÃ¡nya'.",
      "A tetÅ‘n lÃ©vÅ‘ szÃ¼rreÃ¡lis kÃ©mÃ©nyekrÅ‘l ismert.",
      "Nincsenek teherhordÃ³ falai, csak oszlopai.",
      "1984 Ã³ta UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g."
    ],
    "ro": [
      "ProiectatÄƒ de Antoni GaudÃ­.",
      "ConstruitÄƒ Ã®ntre 1906 È™i 1912.",
      "La Pedrera Ã®nseamnÄƒ 'cariera de piatrÄƒ'.",
      "RenumitÄƒ pentru coÈ™urile de fum suprarealiste de pe acoperiÈ™.",
      "Nu are pereÈ›i portanÈ›i, ci doar stÃ¢lpi.",
      "Patrimoniu Mondial UNESCO din 1984."
    ],
    "en": [
      "Designed by Antoni GaudÃ­.",
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
    "hu": "Picasso MÃºzeum",
    "ro": "Muzeul Picasso",
    "en": "Picasso Museum Barcelona"
  },
  "image": "/geo-images/spain/picasso-museum.webp",
  "description": {
    "de": "Das Picasso-Museum in Barcelona beherbergt eine der umfangreichsten Sammlungen von Kunstwerken von Pablo Picasso. Es konzentriert sich besonders auf seine frÃ¼hen Werke und seine prÃ¤genden Jahre in der Stadt. Das Museum befindet sich in fÃ¼nf mittelalterlichen PalÃ¤sten im Viertel El Born.",
    "hu": "A barcelonai Picasso MÃºzeum Pablo Picasso mÅ±veinek egyik legkiterjedtebb gyÅ±jtemÃ©nyÃ©nek ad otthont. KÃ¼lÃ¶nÃ¶s hangsÃºlyt fektet korai mÅ±veire Ã©s a vÃ¡rosban tÃ¶ltÃ¶tt meghatÃ¡rozÃ³ Ã©veire. A mÃºzeum Ã¶t kÃ¶zÃ©pkori palotÃ¡ban kapott helyet az El Born negyedben.",
    "ro": "Muzeul Picasso din Barcelona gÄƒzduieÈ™te una dintre cele mai vaste colecÈ›ii de opere de artÄƒ ale lui Pablo Picasso. Se concentreazÄƒ Ã®n special pe lucrÄƒrile sale timpurii È™i pe anii sÄƒi de formare Ã®n oraÈ™. Muzeul este situat Ã®n cinci palate medievale din cartierul El Born.",
    "en": "The Picasso Museum in Barcelona houses one of the most extensive collections of artworks by Pablo Picasso. It focuses particularly on his early works and his formative years in the city. The museum is located in five medieval palaces in the El Born district."
  },
  "facts": {
    "de": [
      "ErÃ¶ffnet im Jahr 1963.",
      "Beherbergt Ã¼ber 4.000 Werke von Picasso.",
      "Erstes Museum, das Picasso gewidmet wurde.",
      "Untergebracht in fÃ¼nf zusammenhÃ¤ngenden gotischen PalÃ¤sten.",
      "Zeigt Picassos Serie 'Las Meninas'.",
      "Veranschaulicht Picassos tiefe Verbundenheit mit Barcelona."
    ],
    "hu": [
      "1963-ban nyÃ­lt meg.",
      "TÃ¶bb mint 4000 Picasso-mÅ±vet Å‘riz.",
      "Az elsÅ‘ PicassÃ³nak szentelt mÃºzeum volt.",
      "Ã–t egymÃ¡sba nyÃ­lÃ³ gÃ³tikus palotÃ¡ban talÃ¡lhatÃ³.",
      "KiÃ¡llÃ­tjÃ¡k itt a 'Las Meninas' sorozatÃ¡t.",
      "Bemutatja Picasso mÃ©ly kÃ¶tÅ‘dÃ©sÃ©t BarcelonÃ¡hoz."
    ],
    "ro": [
      "Deschis Ã®n 1963.",
      "GÄƒzduieÈ™te peste 4.000 de lucrÄƒri ale lui Picasso.",
      "Primul muzeu dedicat lui Picasso.",
      "GÄƒzduit Ã®n cinci palate gotice interconectate.",
      "Expune seria 'Las Meninas' a lui Picasso.",
      "IlustreazÄƒ legÄƒtura profundÄƒ a lui Picasso cu Barcelona."
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
    "ro": "MÄƒnÄƒstirea Montserrat",
    "en": "Montserrat monastery"
  },
  "image": "/geo-images/spain/montserrat.webp",
  "description": {
    "de": "Das Kloster Montserrat liegt spektakulÃ¤r eingebettet in den gezackten Felsen des gleichnamigen Gebirges in Katalonien. Es ist ein wichtiges spirituelles Zentrum und beherbergt die berÃ¼hmte Schwarze Madonna. Besucher genieÃŸen sowohl die religiÃ¶se Bedeutung als auch die atemberaubende Aussicht.",
    "hu": "A Montserrat kolostor lÃ¡tvÃ¡nyosan bÃºjik meg a nÃ©vadÃ³ hegyvidÃ©k csipkÃ©zett sziklÃ¡i kÃ¶zÃ¶tt KatalÃ³niÃ¡ban. Fontos szellemi kÃ¶zpont, Ã©s a hÃ­res Fekete Madonna otthona. A lÃ¡togatÃ³k a vallÃ¡si jelentÅ‘sÃ©gÃ©t Ã©s a lÃ©legzetelÃ¡llÃ­tÃ³ kilÃ¡tÃ¡st egyarÃ¡nt Ã©lvezik.",
    "ro": "MÄƒnÄƒstirea Montserrat este spectaculos Ã®nconjuratÄƒ de stÃ¢ncile zimÈ›ate ale lanÈ›ului muntos cu acelaÈ™i nume din Catalonia. Este un centru spiritual important È™i adÄƒposteÈ™te celebra MadonÄƒ NeagrÄƒ. Vizitatorii se bucurÄƒ atÃ¢t de semnificaÈ›ia sa religioasÄƒ, cÃ¢t È™i de priveliÈ™tile uimitoare.",
    "en": "The Montserrat Monastery is spectacularly nestled in the jagged rocks of the mountain range of the same name in Catalonia. It is an important spiritual center and houses the famous Black Madonna. Visitors enjoy both its religious significance and breathtaking views."
  },
  "facts": {
    "de": [
      "GegrÃ¼ndet im 11. Jahrhundert.",
      "Liegt auf etwa 720 Metern HÃ¶he.",
      "Heimat der 'La Moreneta' (Schwarze Madonna).",
      "VerfÃ¼gt Ã¼ber einen der Ã¤ltesten KnabenchÃ¶re Europas, die Escolania.",
      "Bietet Zugang Ã¼ber eine Seilbahn und eine Zahnradbahn.",
      "Ein beliebtes Ziel fÃ¼r Pilger und Wanderer."
    ],
    "hu": [
      "A 11. szÃ¡zadban alapÃ­tottÃ¡k.",
      "KÃ¶rÃ¼lbelÃ¼l 720 mÃ©teres magassÃ¡gban fekszik.",
      "A 'La Moreneta' (Fekete Madonna) otthona.",
      "Itt mÅ±kÃ¶dik EurÃ³pa egyik legrÃ©gebbi fiÃºkÃ³rusa, az Escolania.",
      "DrÃ³tkÃ¶tÃ©lpÃ¡lyÃ¡n Ã©s fogaskerekÅ±n is megkÃ¶zelÃ­thetÅ‘.",
      "NÃ©pszerÅ± cÃ©lpont zarÃ¡ndokok Ã©s tÃºrÃ¡zÃ³k szÃ¡mÃ¡ra."
    ],
    "ro": [
      "FondatÄƒ Ã®n secolul al XI-lea.",
      "SituatÄƒ la aproximativ 720 de metri altitudine.",
      "Casa 'La Moreneta' (Madona NeagrÄƒ).",
      "GÄƒzduieÈ™te unul dintre cele mai vechi coruri de bÄƒieÈ›i din Europa, Escolania.",
      "AccesibilÄƒ cu o telecabinÄƒ È™i o cale feratÄƒ cu cremalierÄƒ.",
      "O destinaÈ›ie popularÄƒ pentru pelerini È™i drumeÈ›i."
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
    "de": "OceanogrÃ fic Valencia",
    "hu": "OceanogrÃ fic Valencia",
    "ro": "OceanogrÃ fic Valencia",
    "en": "OceanogrÃ fic Valencia"
  },
  "image": "/geo-images/spain/valencia-oceanografic.webp",
  "description": {
    "de": "Das OceanogrÃ fic in Valencia ist das grÃ¶ÃŸte Aquarium in Europa und ein Paradies fÃ¼r Meeresliebhaber. Es beherbergt tausende von Tieren aus verschiedenen marinen Ã–kosystemen auf der ganzen Welt. Besonders beeindruckend ist der Unterwassertunnel, in dem man Haie und Rochen hautnah erleben kann.",
    "hu": "A valenciai OceanogrÃ fic EurÃ³pa legnagyobb akvÃ¡riuma Ã©s a tenger szerelmeseinek paradicsoma. TÃ¶bb ezer Ã¡llatnak ad otthont a vilÃ¡g kÃ¼lÃ¶nbÃ¶zÅ‘ tengeri Ã¶koszisztÃ©mÃ¡ibÃ³l. KÃ¼lÃ¶nÃ¶sen lenyÅ±gÃ¶zÅ‘ a vÃ­z alatti alagÃºt, ahol cÃ¡pÃ¡kat Ã©s rÃ¡jÃ¡kat lÃ¡thatunk testkÃ¶zelbÅ‘l.",
    "ro": "OceanogrÃ fic din Valencia este cel mai mare acvariu din Europa È™i un paradis pentru iubitorii de mare. GÄƒzduieÈ™te mii de animale din diverse ecosisteme marine din Ã®ntreaga lume. Deosebit de impresionant este tunelul subacvatic, unde puteÈ›i vedea rechini È™i pisici de mare de aproape.",
    "en": "The OceanogrÃ fic in Valencia is the largest aquarium in Europe and a paradise for marine lovers. It houses thousands of animals from various marine ecosystems around the world. Especially impressive is the underwater tunnel where you can experience sharks and rays up close."
  },
  "facts": {
    "de": [
      "GrÃ¶ÃŸtes Aquarium in Europa.",
      "Beherbergt Ã¼ber 45.000 Tiere aus 500 Arten.",
      "Architektur von FÃ©lix Candela entworfen.",
      "Umfasst arktische, antarktische und tropische LebensrÃ¤ume.",
      "Besitzt ein groÃŸes Delfinarium.",
      "Bietet Programme zum Schutz der Meerestiere an."
    ],
    "hu": [
      "EurÃ³pa legnagyobb akvÃ¡riuma.",
      "TÃ¶bb mint 500 faj 45 000 egyedÃ©nek ad otthont.",
      "Az Ã©pÃ¼letet FÃ©lix Candela tervezte.",
      "SarkvidÃ©ki, antarktiszi Ã©s trÃ³pusi Ã©lÅ‘helyeket is bemutat.",
      "Nagy delfinÃ¡riummal is rendelkezik.",
      "Tengeri Ã¡llatvÃ©delmi programokat mÅ±kÃ¶dtet."
    ],
    "ro": [
      "Cel mai mare acvariu din Europa.",
      "GÄƒzduieÈ™te peste 45.000 de animale din 500 de specii.",
      "ArhitecturÄƒ proiectatÄƒ de FÃ©lix Candela.",
      "Include habitate arctice, antarctice È™i tropicale.",
      "Are un delfinariu mare.",
      "OferÄƒ programe de conservare marinÄƒ."
    ],
    "en": [
      "Largest aquarium in Europe.",
      "Houses over 45,000 animals from 500 species.",
      "Architecture designed by FÃ©lix Candela.",
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
    "de": "Stadt der KÃ¼nste und Wissenschaften",
    "hu": "MÅ±vÃ©szetek Ã©s TudomÃ¡nyok VÃ¡rosa",
    "ro": "OraÈ™ul Artelor È™i È˜tiinÈ›elor",
    "en": "City of Arts and Sciences"
  },
  "image": "/geo-images/spain/valencia-city-of-arts.webp",
  "description": {
    "de": "Die Stadt der KÃ¼nste und Wissenschaften ist ein futuristischer GebÃ¤udekomplex in Valencia. Entworfen von Santiago Calatrava, vereint sie Wissenschaft, Kunst und Unterhaltung in einer einzigartigen architektonischen Landschaft. Es ist das moderne Wahrzeichen der Stadt.",
    "hu": "A MÅ±vÃ©szetek Ã©s TudomÃ¡nyok VÃ¡rosa egy futurisztikus Ã©pÃ¼letkomplexum ValenciÃ¡ban. A Santiago Calatrava Ã¡ltal tervezett egyÃ¼ttes a tudomÃ¡nyt, a mÅ±vÃ©szetet Ã©s a szÃ³rakozÃ¡st Ã¶tvÃ¶zi egyedÃ¼lÃ¡llÃ³ Ã©pÃ­tÃ©szeti kÃ¶rnyezetben. Ez a vÃ¡ros modern jelkÃ©pe.",
    "ro": "OraÈ™ul Artelor È™i È˜tiinÈ›elor este un complex de clÄƒdiri futuriste din Valencia. Proiectat de Santiago Calatrava, combinÄƒ È™tiinÈ›a, arta È™i divertismentul Ã®ntr-un peisaj arhitectural unic. Este reperul modern al oraÈ™ului.",
    "en": "The City of Arts and Sciences is a futuristic building complex in Valencia. Designed by Santiago Calatrava, it combines science, art, and entertainment in a unique architectural landscape. It is the modern landmark of the city."
  },
  "facts": {
    "de": [
      "Erbaut im ehemaligen Flussbett des Turia.",
      "Entworfen vom Stararchitekten Santiago Calatrava.",
      "EnthÃ¤lt ein IMAX-Kino (L'HemisfÃ¨ric).",
      "Umfasst ein interaktives Wissenschaftsmuseum.",
      "Der Palau de les Arts beherbergt das Opernhaus.",
      "Beliebte Kulisse fÃ¼r Science-Fiction-Filme und Serien."
    ],
    "hu": [
      "A Turia folyÃ³ kiszÃ¡radt medrÃ©ben Ã©pÃ¼lt.",
      "A sztÃ¡rÃ©pÃ­tÃ©sz, Santiago Calatrava tervezte.",
      "Itt talÃ¡lhatÃ³ az L'HemisfÃ¨ric IMAX mozi.",
      "InteraktÃ­v tudomÃ¡nyos mÃºzeumot is magÃ¡ban foglal.",
      "A Palau de les Arts ad otthont az operahÃ¡znak.",
      "NÃ©pszerÅ± forgatÃ¡si helyszÃ­n sci-fi filmekhez Ã©s sorozatokhoz."
    ],
    "ro": [
      "Construit Ã®n fosta albie a rÃ¢ului Turia.",
      "Proiectat de arhitectul vedetÄƒ Santiago Calatrava.",
      "ConÈ›ine un cinematograf IMAX (L'HemisfÃ¨ric).",
      "Include un muzeu interactiv de È™tiinÈ›Äƒ.",
      "Palau de les Arts gÄƒzduieÈ™te opera.",
      "Decor popular pentru filme È™i seriale SF."
    ],
    "en": [
      "Built in the former riverbed of the Turia.",
      "Designed by star architect Santiago Calatrava.",
      "Contains an IMAX cinema (L'HemisfÃ¨ric).",
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
    "de": "Palma ist die Hauptstadt der Baleareninsel Mallorca. Die Stadt beeindruckt durch ihre gewaltige gotische Kathedrale La Seu, die direkt am Meer thront. Neben historischen SehenswÃ¼rdigkeiten bietet Palma eine lebhafte Altstadt und wunderschÃ¶ne StrÃ¤nde in der NÃ¤he.",
    "hu": "Palma Mallorca szigetÃ©nek fÅ‘vÃ¡rosa. A vÃ¡ros egyik fÅ‘ lÃ¡tvÃ¡nyossÃ¡ga a kÃ¶zvetlenÃ¼l a tengerparton magasodÃ³ hatalmas gÃ³tikus katedrÃ¡lis, a La Seu. A tÃ¶rtÃ©nelmi lÃ¡tnivalÃ³k mellett Palma nyÃ¼zsgÅ‘ Ã³vÃ¡rossal Ã©s gyÃ¶nyÃ¶rÅ± kÃ¶zeli strandokkal bÃ¼szkÃ©lkedhet.",
    "ro": "Palma este capitala insulei baleare Mallorca. OraÈ™ul impresioneazÄƒ prin masiva sa catedralÄƒ goticÄƒ La Seu, situatÄƒ chiar pe malul mÄƒrii. Pe lÃ¢ngÄƒ atracÈ›iile istorice, Palma oferÄƒ un oraÈ™ vechi plin de viaÈ›Äƒ È™i plaje frumoase Ã®n apropiere.",
    "en": "Palma is the capital of the Balearic island of Mallorca. The city impresses with its massive Gothic cathedral, La Seu, which sits right on the seafront. In addition to historical sights, Palma offers a lively old town and beautiful nearby beaches."
  },
  "facts": {
    "de": [
      "Hauptstadt der Autonomen Gemeinschaft der Balearen.",
      "Heimat der Kathedrale La Seu (Baubeginn 1229).",
      "Castell de Bellver ist eine seltene runde Burg.",
      "VerfÃ¼gt Ã¼ber einen groÃŸen internationalen Flughafen.",
      "Malerische Altstadt mit engen Gassen.",
      "Beliebtes Ziel fÃ¼r europÃ¤ischen Tourismus."
    ],
    "hu": [
      "A BaleÃ¡r-szigetek autonÃ³m kÃ¶zÃ¶ssÃ©g fÅ‘vÃ¡rosa.",
      "A La Seu katedrÃ¡lis otthona (Ã©pÃ­tÃ©se 1229-ben kezdÅ‘dÃ¶tt).",
      "A Castell de Bellver egy ritka, kerek alaprajzÃº vÃ¡r.",
      "Nagy nemzetkÃ¶zi repÃ¼lÅ‘tÃ©rrel rendelkezik.",
      "FestÅ‘i Ã³vÃ¡rosa szÅ±k utcÃ¡cskÃ¡kkal van tele.",
      "Az eurÃ³pai turizmus egyik legnÃ©pszerÅ±bb cÃ©lpontja."
    ],
    "ro": [
      "Capitala comunitÄƒÈ›ii autonome a Insulelor Baleare.",
      "Casa catedralei La Seu (Ã®nceputÄƒ Ã®n 1229).",
      "Castell de Bellver este un castel rotund rar.",
      "Are un aeroport internaÈ›ional mare.",
      "OraÈ™ vechi pitoresc, cu strÄƒzi Ã®nguste.",
      "DestinaÈ›ie popularÄƒ pentru turismul european."
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
    "hu": "Ibiza vÃ¡ros",
    "ro": "OraÈ™ul Ibiza",
    "en": "Ibiza Town"
  },
  "image": "/geo-images/spain/ibiza-town.webp",
  "description": {
    "de": "Ibiza-Stadt, katalanisch Eivissa, ist weltbekannt fÃ¼r ihr pulsierendes Nachtleben und die historische Altstadt Dalt Vila. Die befestigte Oberstadt, umgeben von Renaissance-Mauern, gehÃ¶rt zum UNESCO-Weltkulturerbe. Die Stadt zieht sowohl PartygÃ¤nger als auch Kulturliebhaber an.",
    "hu": "Ibiza vÃ¡rosa (katalÃ¡nul Eivissa) vilÃ¡gszerte ismert pezsgÅ‘ Ã©jszakai Ã©letÃ©rÅ‘l Ã©s tÃ¶rtÃ©nelmi Ã³vÃ¡rosÃ¡rÃ³l, a Dalt VilÃ¡rÃ³l. A reneszÃ¡nsz falakkal kÃ¶rÃ¼lvett erÅ‘dÃ­tett felsÅ‘vÃ¡ros az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze. A vÃ¡ros a bulizni vÃ¡gyÃ³kat Ã©s a kultÃºra szerelmeseit egyarÃ¡nt vonzza.",
    "ro": "OraÈ™ul Ibiza, Ã®n catalanÄƒ Eivissa, este faimos Ã®n Ã®ntreaga lume pentru viaÈ›a de noapte vibrantÄƒ È™i oraÈ™ul vechi istoric Dalt Vila. OraÈ™ul de sus fortificat, Ã®nconjurat de ziduri renascentiste, este un sit al Patrimoniului Mondial UNESCO. OraÈ™ul atrage atÃ¢t petrecÄƒreÈ›i, cÃ¢t È™i iubitori de culturÄƒ.",
    "en": "Ibiza Town, natively Eivissa, is world-renowned for its vibrant nightlife and the historic Dalt Vila old town. The fortified upper town, surrounded by Renaissance walls, is a UNESCO World Heritage site. The city attracts both partygoers and culture lovers."
  },
  "facts": {
    "de": [
      "Lokaler Name ist Eivissa.",
      "Die Altstadt Dalt Vila ist UNESCO-Weltkulturerbe.",
      "BerÃ¼hmt fÃ¼r weltbekannte Nachtclubs wie Pacha.",
      "Besitzt wichtige archÃ¤ologische phÃ¶nizische StÃ¤tten.",
      "Der Hafen zieht viele Luxusyachten an.",
      "Beliebte Urlaubsdestination im Mittelmeer."
    ],
    "hu": [
      "Helyi neve Eivissa.",
      "A Dalt Vila Ã³vÃ¡ros UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g.",
      "Olyan vilÃ¡ghÃ­rÅ± Ã©jszakai klubokrÃ³l ismert, mint a Pacha.",
      "JelentÅ‘s fÃ¶nÃ­ciai rÃ©gÃ©szeti lelÅ‘helyekkel rendelkezik.",
      "A kikÃ¶tÅ‘ szÃ¡mos luxusjachtot vonz.",
      "NÃ©pszerÅ± nyaralÃ³hely a FÃ¶ldkÃ¶zi-tengeren."
    ],
    "ro": [
      "Numele local este Eivissa.",
      "OraÈ™ul vechi Dalt Vila este Ã®n Patrimoniul Mondial UNESCO.",
      "Faimos pentru cluburi de noapte de renume mondial precum Pacha.",
      "Are situri arheologice feniciene importante.",
      "Portul atrage multe iahturi de lux.",
      "DestinaÈ›ie popularÄƒ de vacanÈ›Äƒ Ã®n Marea MediteranÄƒ."
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
    "de": "Der Pico del Teide auf der Insel Teneriffa ist der hÃ¶chste Berg Spaniens. Dieser imposante Schichtvulkan bildet das Zentrum des Teide-Nationalparks, der eine einzigartige Mondlandschaft aufweist. Besucher kÃ¶nnen mit einer Seilbahn bis fast an den Gipfel fahren.",
    "hu": "A Tenerife szigetÃ©n magasodÃ³ Teide SpanyolorszÃ¡g legmagasabb hegye. Ez az impozÃ¡ns rÃ©tegvulkÃ¡n alkotja a Teide Nemzeti Park kÃ¶zpontjÃ¡t, amely egyedÃ¼lÃ¡llÃ³, holdszerÅ± tÃ¡jjal rendelkezik. A lÃ¡togatÃ³k drÃ³tkÃ¶tÃ©lpÃ¡lyÃ¡n majdnem a csÃºcsig feljuthatnak.",
    "ro": "Muntele Teide de pe insula Tenerife este cel mai Ã®nalt munte din Spania. Acest stratovulcan impunÄƒtor formeazÄƒ centrul Parcului NaÈ›ional Teide, care prezintÄƒ un peisaj lunar unic. Vizitatorii pot urca cu telecabina aproape de vÃ¢rf.",
    "en": "Mount Teide on the island of Tenerife is the highest mountain in Spain. This imposing stratovolcano forms the center of the Teide National Park, which features a unique lunar landscape. Visitors can take a cable car almost to the summit."
  },
  "facts": {
    "de": [
      "HÃ¶chster Berg Spaniens (3.715 Meter).",
      "DritthÃ¶chster Vulkan der Erde (vom Meeresgrund gemessen).",
      "Teide-Nationalpark ist UNESCO-Weltnaturerbe.",
      "Letzter Ausbruch in der Teide-Region war 1909.",
      "Eine Seilbahn fÃ¼hrt bis auf 3.555 Meter HÃ¶he.",
      "Beliebtes Ziel fÃ¼r Sternenbeobachter."
    ],
    "hu": [
      "SpanyolorszÃ¡g legmagasabb hegye (3715 mÃ©ter).",
      "A vilÃ¡g harmadik legmagasabb vulkÃ¡nja (a tengerfenÃ©ktÅ‘l mÃ©rve).",
      "A Teide Nemzeti Park az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
      "UtolsÃ³ kitÃ¶rÃ©se a Teide rÃ©giÃ³ban 1909-ben volt.",
      "A drÃ³tkÃ¶tÃ©lpÃ¡lya 3555 mÃ©teres magassÃ¡gig visz fel.",
      "A csillagÃ¡szok Ã©s csillagnÃ©zÅ‘k kedvelt cÃ©lpontja."
    ],
    "ro": [
      "Cel mai Ã®nalt munte din Spania (3.715 metri).",
      "Al treilea vulcan ca Ã®nÄƒlÈ›ime din lume (mÄƒsurat de la fundul oceanului).",
      "Parcul NaÈ›ional Teide este Patrimoniu Mondial UNESCO.",
      "Ultima erupÈ›ie Ã®n regiunea Teide a fost Ã®n 1909.",
      "O telecabinÄƒ urcÄƒ pÃ¢nÄƒ la 3.555 de metri.",
      "O destinaÈ›ie popularÄƒ pentru observarea stelelor."
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
    "de": "DÃ¼nen von Maspalomas",
    "hu": "Maspalomas homokdÅ±nÃ©i",
    "ro": "Dunele din Maspalomas",
    "en": "Maspalomas Dunes"
  },
  "image": "/geo-images/spain/gran-canaria-dunes.webp",
  "description": {
    "de": "Die DÃ¼nen von Maspalomas sind ein faszinierendes Naturschutzgebiet im SÃ¼den Gran Canarias. Sie bieten eine spektakulÃ¤re WÃ¼stenlandschaft direkt am Atlantischen Ozean. Das Gebiet umfasst auch eine Oase und einen Palmenhain, die eine reiche Vogelwelt anziehen.",
    "hu": "A maspalomasi dÅ±nÃ©k lenyÅ±gÃ¶zÅ‘ termÃ©szetvÃ©delmi terÃ¼letet alkotnak Gran Canaria dÃ©li rÃ©szÃ©n. LÃ¡tvÃ¡nyos sivatagi tÃ¡jat kÃ­nÃ¡lnak kÃ¶zvetlenÃ¼l az Atlanti-Ã³ceÃ¡n partjÃ¡n. A terÃ¼let egy oÃ¡zist Ã©s egy pÃ¡lmaligetet is magÃ¡ban foglal, amelyek gazdag madÃ¡rvilÃ¡got vonzanak.",
    "ro": "Dunele din Maspalomas sunt o rezervaÈ›ie naturalÄƒ fascinantÄƒ Ã®n sudul insulei Gran Canaria. OferÄƒ un peisaj deÈ™ertic spectaculos chiar la Oceanul Atlantic. Zona include, de asemenea, o oazÄƒ È™i o plantaÈ›ie de palmieri care atrag numeroase pÄƒsÄƒri.",
    "en": "The Maspalomas Dunes are a fascinating nature reserve in the south of Gran Canaria. They offer a spectacular desert landscape right on the Atlantic Ocean. The area also includes an oasis and a palm grove that attract a rich birdlife."
  },
  "facts": {
    "de": [
      "Naturschutzgebiet seit 1987.",
      "Umfasst rund 400 Hektar FlÃ¤che.",
      "Die DÃ¼nen wandern stÃ¤ndig durch den Wind.",
      "Ein 68 Meter hoher Leuchtturm (Faro) steht in der NÃ¤he.",
      "Die Charca-Oase ist wichtig fÃ¼r ZugvÃ¶gel.",
      "Beliebter Ort fÃ¼r Touristen und Fotografen."
    ],
    "hu": [
      "1987 Ã³ta termÃ©szetvÃ©delmi terÃ¼let.",
      "KÃ¶rÃ¼lbelÃ¼l 400 hektÃ¡ron terÃ¼l el.",
      "A dÅ±nÃ©k a szÃ©l miatt folyamatosan vÃ¡ndorolnak.",
      "A kÃ¶zelben Ã¡ll egy 68 mÃ©ter magas vilÃ¡gÃ­tÃ³torony (Faro).",
      "A Charca oÃ¡zis fontos megÃ¡llÃ³ a kÃ¶ltÃ¶zÅ‘ madaraknak.",
      "NÃ©pszerÅ± hely a turistÃ¡k Ã©s fotÃ³sok kÃ¶rÃ©ben."
    ],
    "ro": [
      "RezervaÈ›ie naturalÄƒ din 1987.",
      "AcoperÄƒ aproximativ 400 de hectare.",
      "Dunele se miÈ™cÄƒ constant din cauza vÃ¢ntului.",
      "Un far de 68 de metri (Faro) se aflÄƒ Ã®n apropiere.",
      "Oaza Charca este importantÄƒ pentru pÄƒsÄƒrile migratoare.",
      "Loc popular pentru turiÈ™ti È™i fotografi."
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
    "de": "Santander ist die elegante Hauptstadt von Kantabrien an der nordspanischen KÃ¼ste. Sie ist bekannt fÃ¼r ihre weite Bucht, historische SeebÃ¤der und den kÃ¶niglichen Palacio de la Magdalena. Die Stadt kombiniert reiches maritimes Erbe mit moderner Architektur.",
    "hu": "Santander KantÃ¡bria elegÃ¡ns fÅ‘vÃ¡rosa SpanyolorszÃ¡g Ã©szaki partjÃ¡n. TÃ¡gas Ã¶blÃ©rÅ‘l, tÃ¶rtÃ©nelmi tengerparti Ã¼dÃ¼lÅ‘helyeirÅ‘l Ã©s a kirÃ¡lyi Palacio de la Magdalena palotÃ¡rÃ³l ismert. A vÃ¡ros Ã¶tvÃ¶zi a gazdag tengerÃ©szeti Ã¶rÃ¶ksÃ©get a modern Ã©pÃ­tÃ©szettel.",
    "ro": "Santander este eleganta capitalÄƒ a Cantabriei, pe coasta de nord a Spaniei. Este cunoscutÄƒ pentru golful sÄƒu larg, staÈ›iunile balneare istorice È™i palatul regal Palacio de la Magdalena. OraÈ™ul combinÄƒ o bogatÄƒ moÈ™tenire maritimÄƒ cu arhitectura modernÄƒ.",
    "en": "Santander is the elegant capital of Cantabria on the northern Spanish coast. It is known for its sweeping bay, historic seaside resorts, and the royal Palacio de la Magdalena. The city combines a rich maritime heritage with modern architecture."
  },
  "facts": {
    "de": [
      "Hauptstadt der Region Kantabrien.",
      "Sitz der historischen Banco Santander.",
      "Der Palacio de la Magdalena war Sommerresidenz der KÃ¶nige.",
      "GroÃŸer Brand im Jahr 1941 zerstÃ¶rte das historische Zentrum.",
      "Bietet schÃ¶ne StrÃ¤nde wie den Playa del Sardinero.",
      "Das Centro BotÃ­n ist ein neues modernes Kunstzentrum."
    ],
    "hu": [
      "KantÃ¡bria rÃ©giÃ³ fÅ‘vÃ¡rosa.",
      "A tÃ¶rtÃ©nelmi Banco Santander szÃ©khelye.",
      "A Palacio de la Magdalena a kirÃ¡lyok nyÃ¡ri rezidenciÃ¡ja volt.",
      "Egy 1941-es nagy tÅ±zvÃ©sz elpusztÃ­totta a tÃ¶rtÃ©nelmi kÃ¶zpontot.",
      "Olyan gyÃ¶nyÃ¶rÅ± strandokat kÃ­nÃ¡l, mint a Playa del Sardinero.",
      "A Centro BotÃ­n a vÃ¡ros Ãºj modern mÅ±vÃ©szeti kÃ¶zpontja."
    ],
    "ro": [
      "Capitala regiunii Cantabria.",
      "Sediul bÄƒncii istorice Banco Santander.",
      "Palacio de la Magdalena a fost reÈ™edinÈ›a de varÄƒ a regilor.",
      "Un mare incendiu Ã®n 1941 a distrus centrul istoric.",
      "OferÄƒ plaje frumoase precum Playa del Sardinero.",
      "Centro BotÃ­n este un nou centru de artÄƒ modernÄƒ."
    ],
    "en": [
      "Capital of the Cantabria region.",
      "Headquarters of the historic Banco Santander.",
      "The Palacio de la Magdalena was the summer residence of kings.",
      "A great fire in 1941 destroyed the historic center.",
      "Offers beautiful beaches like Playa del Sardinero.",
      "The Centro BotÃ­n is a new modern art center."
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
    "de": "Oviedo ist die historische Hauptstadt des FÃ¼rstentums Asturien. Die Stadt ist berÃ¼hmt fÃ¼r ihre einzigartige prÃ¤romanische Architektur, darunter beeindruckende Kirchen aus dem 9. Jahrhundert. Ihre charmante Altstadt lÃ¤dt zum Flanieren und GenieÃŸen von asturischem Apfelwein (Sidra) ein.",
    "hu": "Oviedo az AsztÃºriai HercegsÃ©g tÃ¶rtÃ©nelmi fÅ‘vÃ¡rosa. A vÃ¡ros egyedÃ¼lÃ¡llÃ³ preromÃ¡n Ã©pÃ­tÃ©szetÃ©rÅ‘l, kÃ¶ztÃ¼k a 9. szÃ¡zadbÃ³l szÃ¡rmazÃ³ lenyÅ±gÃ¶zÅ‘ templomairÃ³l hÃ­res. Hangulatos Ã³vÃ¡rosa ideÃ¡lis sÃ©tÃ¡kra Ã©s a hagyomÃ¡nyos asztÃºriai almabor (sidra) kÃ³stolÃ¡sÃ¡ra.",
    "ro": "Oviedo este capitala istoricÄƒ a Principatului Asturiei. OraÈ™ul este faimos pentru arhitectura sa preromanicÄƒ unicÄƒ, inclusiv biserici impresionante din secolul al IX-lea. OraÈ™ul sÄƒu vechi fermecÄƒtor vÄƒ invitÄƒ sÄƒ vÄƒ plimbaÈ›i È™i sÄƒ vÄƒ bucuraÈ›i de cidrul asturian (sidra).",
    "en": "Oviedo is the historic capital of the Principality of Asturias. The city is famous for its unique pre-Romanesque architecture, including impressive 9th-century churches. Its charming old town invites you to stroll and enjoy Asturian cider (sidra)."
  },
  "facts": {
    "de": [
      "Hauptstadt von Asturien.",
      "Heimat prÃ¤romanischer DenkmÃ¤ler (UNESCO-Welterbe).",
      "Bekannt fÃ¼r seine Apfelwein-Kultur (SidrerÃ­as).",
      "Wichtige Station auf dem nÃ¶rdlichen Jakobsweg.",
      "Verleiht jÃ¤hrlich die renommierten Prinzessin-von-Asturien-Preise.",
      "Viele Skulpturen zieren die FuÃŸgÃ¤ngerzonen."
    ],
    "hu": [
      "AsztÃºria fÅ‘vÃ¡rosa.",
      "PreromÃ¡n mÅ±emlÃ©kek (UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g) otthona.",
      "Almabor-kultÃºrÃ¡jÃ¡rÃ³l (sidrerÃ­as) ismert.",
      "Az Ã‰szaki Szent Jakab-Ãºt fontos Ã¡llomÃ¡sa.",
      "Itt adjÃ¡k Ã¡t Ã©vente az AsztÃºria HercegnÅ‘je dÃ­jakat.",
      "SÃ©tÃ¡lÃ³utcÃ¡it szÃ¡mos szobor dÃ­szÃ­ti."
    ],
    "ro": [
      "Capitala Asturiei.",
      "AcasÄƒ la monumentele preromanice (Patrimoniu UNESCO).",
      "Cunoscut pentru cultura cidrului (sidrerÃ­as).",
      "Oprire importantÄƒ pe ruta nordicÄƒ a Camino de Santiago.",
      "AcordÄƒ anual prestigioasele premii PrinÈ›esa Asturiei.",
      "Multe sculpturi Ã®mpodobesc zonele pietonale."
    ],
    "en": [
      "Capital of Asturias.",
      "Home to pre-Romanesque monuments (UNESCO World Heritage).",
      "Known for its cider culture (sidrerÃ­as).",
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
    "de": "Pamplona ist die historische Hauptstadt der Region Navarra im Norden Spaniens. Sie ist weltweit berÃ¼hmt fÃ¼r das San-FermÃ­n-Fest mit dem traditionellen Stierlauf (Encierro). Jenseits dieses Spektakels bietet die Stadt gut erhaltene Stadtmauern und eine gotische Kathedrale.",
    "hu": "Pamplona az Ã©szak-spanyolorszÃ¡gi Navarra rÃ©giÃ³ tÃ¶rtÃ©nelmi fÅ‘vÃ¡rosa. VilÃ¡gszerte a San FermÃ­n fesztivÃ¡lrÃ³l Ã©s a hagyomÃ¡nyos bikafuttatÃ¡srÃ³l (encierro) hÃ­res. Ezen a lÃ¡tvÃ¡nyossÃ¡gon tÃºl a vÃ¡ros jÃ³ Ã¡llapotban fennmaradt vÃ¡rosfalakkal Ã©s egy gÃ³tikus katedrÃ¡lissal bÃ¼szkÃ©lkedhet.",
    "ro": "Pamplona este capitala istoricÄƒ a regiunii Navarra din nordul Spaniei. Este faimoasÄƒ Ã®n Ã®ntreaga lume pentru festivalul San FermÃ­n, cu tradiÈ›ionala cursÄƒ de tauri (encierro). Dincolo de acest spectacol, oraÈ™ul oferÄƒ ziduri bine conservate È™i o catedralÄƒ goticÄƒ.",
    "en": "Pamplona is the historic capital of the Navarre region in northern Spain. It is world-famous for the San FermÃ­n festival featuring the traditional running of the bulls (encierro). Beyond this spectacle, the city offers well-preserved city walls and a Gothic cathedral."
  },
  "facts": {
    "de": [
      "BerÃ¼hmt fÃ¼r das San-FermÃ­n-Fest im Juli.",
      "Bekannt gemacht durch Ernest Hemingways Roman 'Fiesta'.",
      "Wichtige Station auf dem franzÃ¶sischen Jakobsweg.",
      "Besitzt eine der am besten erhaltenen Zitadellen Europas.",
      "GegrÃ¼ndet um 74 v. Chr. vom rÃ¶mischen General Pompejus.",
      "VerfÃ¼gt Ã¼ber viele GrÃ¼nflÃ¤chen und Parks."
    ],
    "hu": [
      "HÃ­res a jÃºliusi San FermÃ­n fesztivÃ¡lrÃ³l.",
      "Ernest Hemingway 'Fiesta' cÃ­mÅ± regÃ©nye tette vilÃ¡gszerte ismerttÃ©.",
      "Fontos megÃ¡llÃ³ a Francia Szent Jakab-Ãºton.",
      "Itt talÃ¡lhatÃ³ EurÃ³pa egyik legjobb Ã¡llapotban lÃ©vÅ‘ fellegvÃ¡ra.",
      "Kr. e. 74 kÃ¶rÃ¼l alapÃ­totta Pompeius rÃ³mai hadvezÃ©r.",
      "Sok zÃ¶ldterÃ¼lettel Ã©s parkkal rendelkezik."
    ],
    "ro": [
      "Faimos pentru festivalul San FermÃ­n din iulie.",
      "FÄƒcut cunoscut de romanul lui Ernest Hemingway, 'Fiesta'.",
      "Oprire importantÄƒ pe Calea FrancezÄƒ a Camino de Santiago.",
      "Are una dintre cele mai bine conservate cetÄƒÈ›i din Europa.",
      "Fondat Ã®n jurul anului 74 Ã®.Hr. de generalul roman Pompei.",
      "Are multe zone verzi È™i parcuri."
    ],
    "en": [
      "Famous for the San FermÃ­n festival in July.",
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
    "de": "BasÃ­lica del Pilar",
    "hu": "Pilar-bazilika",
    "ro": "BasÃ­lica del Pilar",
    "en": "BasÃ­lica del Pilar Zaragoza"
  },
  "image": "/geo-images/spain/zaragoza-pilar.webp",
  "description": {
    "de": "Die BasÃ­lica de Nuestra SeÃ±ora del Pilar ist eine prachtvolle Barockkirche in Zaragoza. Sie thront majestÃ¤tisch am Ufer des Flusses Ebro und zieht jÃ¤hrlich Millionen Pilger an. Der Legende nach erschien hier die Jungfrau Maria dem Apostel Jakobus auf einer SÃ¤ule (Pilar).",
    "hu": "A Nuestra SeÃ±ora del Pilar bazilika egy csodÃ¡latos barokk templom ZaragozÃ¡ban. FensÃ©gesen magasodik az Ebro folyÃ³ partjÃ¡n, Ã©s Ã©vente zarÃ¡ndokok milliÃ³it vonzza. A legenda szerint itt jelent meg SzÅ±z MÃ¡ria Jakab apostolnak egy oszlopon (pilar).",
    "ro": "BasÃ­lica de Nuestra SeÃ±ora del Pilar este o magnificÄƒ bisericÄƒ barocÄƒ din Zaragoza. Se Ã®nalÈ›Äƒ maiestuos pe malul rÃ¢ului Ebro È™i atrage milioane de pelerini Ã®n fiecare an. Potrivit legendei, Fecioara Maria i-a apÄƒrut aici apostolului Iacob pe un stÃ¢lp (pilar).",
    "en": "The BasÃ­lica de Nuestra SeÃ±ora del Pilar is a magnificent Baroque church in Zaragoza. It sits majestically on the banks of the Ebro River and attracts millions of pilgrims annually. According to legend, the Virgin Mary appeared here to the Apostle James on a pillar (pilar)."
  },
  "facts": {
    "de": [
      "Gilt als das erste Marienheiligtum der Christenheit.",
      "Die heutige Barockkirche wurde im 17. Jahrhundert begonnen.",
      "Einige der Kuppelfresken stammen von Francisco de Goya.",
      "Befindet sich am Ufer des Flusses Ebro.",
      "Die Fiesta del Pilar wird jeden Oktober groÃŸ gefeiert.",
      "Zwei Fliegerbomben aus dem Spanischen BÃ¼rgerkrieg schlugen ein, explodierten aber nicht."
    ],
    "hu": [
      "A keresztÃ©nysÃ©g elsÅ‘ MÃ¡ria-kegyhelyÃ©nek tartjÃ¡k.",
      "A mai barokk templom Ã©pÃ­tÃ©se a 17. szÃ¡zadban kezdÅ‘dÃ¶tt.",
      "NÃ©hÃ¡ny kupolafreskÃ³t Francisco de Goya festett.",
      "Az Ebro folyÃ³ partjÃ¡n talÃ¡lhatÃ³.",
      "A Fiesta del Pilar fesztivÃ¡lt minden oktÃ³berben Ã¼nneplik.",
      "A spanyol polgÃ¡rhÃ¡borÃºban kÃ©t lÃ©gibomba is eltalÃ¡lta, de nem robbantak fel."
    ],
    "ro": [
      "Considerat primul altar marian din creÈ™tinÄƒtate.",
      "Actuala bisericÄƒ barocÄƒ a fost Ã®nceputÄƒ Ã®n secolul al XVII-lea.",
      "Unele dintre frescele de pe dom au fost pictate de Francisco de Goya.",
      "SituatÄƒ pe malul rÃ¢ului Ebro.",
      "Festivalul Fiesta del Pilar este sÄƒrbÄƒtorit Ã®n fiecare octombrie.",
      "DouÄƒ bombe din RÄƒzboiul Civil Spaniol au lovit-o, dar nu au explodat."
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
    "de": "Alcazaba von MÃ¡laga",
    "hu": "MÃ¡lagai Alcazaba",
    "ro": "Alcazaba din MÃ¡laga",
    "en": "Alcazaba MÃ¡laga"
  },
  "image": "/geo-images/spain/malaga-alcazaba.webp",
  "description": {
    "de": "Die Alcazaba von MÃ¡laga ist eine maurische Palastanlage aus dem 11. Jahrhundert. Sie thront auf einem HÃ¼gel Ã¼ber der Stadt und bot eine hervorragende Verteidigungsposition. Die Festung beeindruckt mit ihren verzierten GÃ¤rten, InnenhÃ¶fen und der weiten Aussicht auf das Meer.",
    "hu": "A mÃ¡lagai Alcazaba egy 11. szÃ¡zadi mÃ³r palotaerÅ‘d. A vÃ¡ros feletti dombon magasodva kivÃ¡lÃ³ vÃ©delmi pozÃ­ciÃ³t nyÃºjtott. Az erÅ‘d dÃ­szes kertjeivel, belsÅ‘ udvaraival Ã©s a tengerre nyÃ­lÃ³ szÃ©les kilÃ¡tÃ¡ssal nyÅ±gÃ¶zi le a lÃ¡togatÃ³kat.",
    "ro": "Alcazaba din MÃ¡laga este o fortÄƒreaÈ›Äƒ palat maurÄƒ din secolul al XI-lea. Este aÈ™ezatÄƒ pe un deal deasupra oraÈ™ului, oferind o poziÈ›ie defensivÄƒ excelentÄƒ. FortÄƒreaÈ›a impresioneazÄƒ prin grÄƒdinile sale ornamentate, curÈ›ile interioare È™i priveliÈ™tea largÄƒ spre mare.",
    "en": "The Alcazaba of MÃ¡laga is an 11th-century Moorish palace fortress. Perched on a hill above the city, it offered an excellent defensive position. The fortress impresses with its ornate gardens, courtyards, and sweeping views of the sea."
  },
  "facts": {
    "de": [
      "Erbaut von der Hammudiden-Dynastie im frÃ¼hen 11. Jahrhundert.",
      "Eine der besterhaltenen Alcazabas in Spanien.",
      "Liegt oberhalb der Ãœberreste eines antiken rÃ¶mischen Theaters.",
      "Durch einen gemauerten Gang mit der Burg Gibralfaro verbunden.",
      "Kombiniert militÃ¤rische Befestigung mit Palastarchitektur.",
      "VerfÃ¼gt Ã¼ber ein ausgeklÃ¼geltes BewÃ¤sserungssystem."
    ],
    "hu": [
      "A HammÃºdida-dinasztia Ã©pÃ­tette a 11. szÃ¡zad elejÃ©n.",
      "SpanyolorszÃ¡g egyik legjobb Ã¡llapotban fennmaradt alcazabÃ¡ja.",
      "Egy Ã³kori rÃ³mai szÃ­nhÃ¡z romjai felett fekszik.",
      "Egy falazott folyosÃ³ kÃ¶ti Ã¶ssze a Gibralfaro vÃ¡rral.",
      "A katonai erÅ‘dÃ­tmÃ©nyt palotaÃ©pÃ­tÃ©szettel Ã¶tvÃ¶zi.",
      "Kifinomult Ã¶ntÃ¶zÅ‘rendszerrel rendelkezik."
    ],
    "ro": [
      "Construit de dinastia Hammudid la Ã®nceputul secolului al XI-lea.",
      "Una dintre cele mai bine conservate alcazaba din Spania.",
      "Situat deasupra ruinelor unui vechi teatru roman.",
      "ConectatÄƒ la Castelul Gibralfaro printr-un coridor cu ziduri.",
      "CombinÄƒ fortificaÈ›ia militarÄƒ cu arhitectura de palat.",
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
    "de": "Ronda ist eine der spektakulÃ¤rsten StÃ¤dte Andalusiens, berÃ¼hmt fÃ¼r ihre Lage auf einem Felsplateau, das durch eine tiefe Schlucht (El Tajo) geteilt wird. Die beeindruckende BrÃ¼cke Puente Nuevo verbindet die Altstadt mit den neueren Vierteln. Ronda ist auch eine der Wiegen des modernen Stierkampfs.",
    "hu": "Ronda AndalÃºzia egyik leglÃ¡tvÃ¡nyosabb vÃ¡rosa, amely egy mÃ©ly szurdok (El Tajo) Ã¡ltal kettÃ©szelt sziklafennsÃ­kon fekszik. A lenyÅ±gÃ¶zÅ‘ Puente Nuevo hÃ­d kÃ¶ti Ã¶ssze az Ã³vÃ¡rost az Ãºjabb negyedekkel. Ronda egyben a modern bikaviadalok egyik bÃ¶lcsÅ‘je is.",
    "ro": "Ronda este unul dintre cele mai spectaculoase oraÈ™e din Andaluzia, faimos pentru locaÈ›ia sa pe un platou stÃ¢ncos Ã®mpÄƒrÈ›it de un defileu adÃ¢nc (El Tajo). Impresionantul pod Puente Nuevo face legÄƒtura Ã®ntre oraÈ™ul vechi È™i cartierele mai noi. Ronda este, de asemenea, unul dintre leagÄƒnele luptelor cu tauri moderne.",
    "en": "Ronda is one of the most spectacular cities in Andalusia, famous for its location on a rocky plateau divided by a deep gorge (El Tajo). The impressive Puente Nuevo bridge connects the old town with the newer districts. Ronda is also one of the cradles of modern bullfighting."
  },
  "facts": {
    "de": [
      "Die Schlucht El Tajo ist Ã¼ber 100 Meter tief.",
      "Die Puente Nuevo wurde im spÃ¤ten 18. Jahrhundert fertiggestellt.",
      "Die Stierkampfarena Plaza de Toros gehÃ¶rt zu den Ã¤ltesten Spaniens.",
      "Ernest Hemingway und Orson Welles verbrachten hier viel Zeit.",
      "Wichtiger Ort auf der Route der 'WeiÃŸen DÃ¶rfer' (Pueblos Blancos).",
      "Besitzt gut erhaltene arabische BÃ¤der aus dem 13. Jahrhundert."
    ],
    "hu": [
      "Az El Tajo szurdok tÃ¶bb mint 100 mÃ©ter mÃ©ly.",
      "A Puente Nuevo (Ãšj HÃ­d) a 18. szÃ¡zad vÃ©gÃ©n kÃ©szÃ¼lt el.",
      "A Plaza de Toros bikaviadal-arÃ©na SpanyolorszÃ¡g egyik legrÃ©gebbi ilyen Ã©pÃ¼lete.",
      "Ernest Hemingway Ã©s Orson Welles sok idÅ‘t tÃ¶ltÃ¶tt itt.",
      "A 'FehÃ©r falvak' (Pueblos Blancos) ÃºtvonalÃ¡nak fontos Ã¡llomÃ¡sa.",
      "JÃ³ Ã¡llapotban fennmaradt, 13. szÃ¡zadi arab fÃ¼rdÅ‘kkel rendelkezik."
    ],
    "ro": [
      "Defileul El Tajo are o adÃ¢ncime de peste 100 de metri.",
      "Podul Puente Nuevo a fost finalizat la sfÃ¢rÈ™itul secolului al XVIII-lea.",
      "Arena de tauri Plaza de Toros este una dintre cele mai vechi din Spania.",
      "Ernest Hemingway È™i Orson Welles au petrecut mult timp aici.",
      "Un loc important pe traseul 'Satelor Albe' (Pueblos Blancos).",
      "Are bÄƒi arabe bine conservate din secolul al XIII-lea."
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
    "de": "Setenil de las Bodegas ist ein einzigartiges andalusisches Dorf. Viele seiner weiÃŸ getÃ¼nchten HÃ¤user sind direkt in die steilen FelswÃ¤nde einer Flussschlucht hineingebaut. Diese ungewÃ¶hnliche HÃ¶hlenarchitektur spendet im heiÃŸen Sommer Schatten und KÃ¼hle.",
    "hu": "Setenil de las Bodegas egy egyedÃ¼lÃ¡llÃ³ andalÃºz falu. SzÃ¡mos fehÃ©rre meszelt hÃ¡zÃ¡t kÃ¶zvetlenÃ¼l egy folyÃ³szurdok meredek sziklafalaiba vÃ¡jtÃ¡k. Ez a szokatlan barlangÃ©pÃ­tÃ©szet hÅ±vÃ¶set Ã©s Ã¡rnyÃ©kot nyÃºjt a forrÃ³ nyÃ¡rban.",
    "ro": "Setenil de las Bodegas este un sat andaluz unic. Multe dintre casele sale vÄƒruite Ã®n alb sunt construite direct Ã®n stÃ¢ncile abrupte ale unui defileu al rÃ¢ului. AceastÄƒ arhitecturÄƒ de peÈ™terÄƒ neobiÈ™nuitÄƒ oferÄƒ umbrÄƒ È™i rÄƒcoare Ã®n verile fierbinÈ›i.",
    "en": "Setenil de las Bodegas is a unique Andalusian village. Many of its whitewashed houses are built directly into the steep cliffs of a river gorge. This unusual cave architecture provides shade and coolness during the hot summers."
  },
  "facts": {
    "de": [
      "GehÃ¶rt zu den 'Pueblos Blancos' (WeiÃŸen DÃ¶rfern) Andalusiens.",
      "HÃ¤user sind teilweise komplett vom Ã¼berhÃ¤ngenden Felsen bedeckt.",
      "Der Fluss Trejo hat die Schlucht geformt.",
      "Der Name 'Bodegas' stammt von ehemaligen Weinkellereien.",
      "Bekannt fÃ¼r lokale Produkte wie OlivenÃ¶l und Chorizo.",
      "War eine stark umkÃ¤mpfte Festung wÃ¤hrend der Reconquista."
    ],
    "hu": [
      "Az andalÃºziai 'Pueblos Blancos' (FehÃ©r falvak) egyike.",
      "A hÃ¡zak egy rÃ©szÃ©t teljesen beborÃ­tjÃ¡k a kinyÃºlÃ³ sziklÃ¡k.",
      "A szurdokot a Trejo folyÃ³ vÃ¡jta ki.",
      "A 'Bodegas' nÃ©v a korÃ¡bbi borÃ¡szatokra utal.",
      "Helyi termÃ©keirÅ‘l, pÃ©ldÃ¡ul olÃ­vaolajÃ¡rÃ³l Ã©s chorizÃ³jÃ¡rÃ³l is ismert.",
      "Sokat vitatott erÅ‘dÃ­tmÃ©ny volt a Reconquista idejÃ©n."
    ],
    "ro": [
      "AparÈ›ine de 'Pueblos Blancos' (Satele Albe) din Andaluzia.",
      "Casele sunt parÈ›ial acoperite complet de stÃ¢nca surplombantÄƒ.",
      "RÃ¢ul Trejo a sculptat defileul.",
      "Numele 'Bodegas' provine de la fostele crame.",
      "Cunoscut pentru produsele locale precum uleiul de mÄƒsline È™i chorizo.",
      "A fost o fortÄƒreaÈ›Äƒ puternic contestatÄƒ Ã®n timpul Reconquistei."
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
    "ro": "Parcul NaÈ›ional Sierra Nevada",
    "en": "Sierra Nevada NP"
  },
  "image": "/geo-images/spain/sierra-nevada-np.webp",
  "description": {
    "de": "Der Sierra Nevada Nationalpark in SÃ¼dspanien umfasst das hÃ¶chste Gebirge der Iberischen Halbinsel. Er bietet im Winter exzellente MÃ¶glichkeiten zum Skifahren und im Sommer groÃŸartige Wanderwege. Die einzigartige Flora und Fauna macht ihn zu einem wertvollen BiosphÃ¤renreservat.",
    "hu": "A dÃ©l-spanyolorszÃ¡gi Sierra Nevada Nemzeti Park az IbÃ©riai-fÃ©lsziget legmagasabb hegysÃ©gÃ©t foglalja magÃ¡ban. TÃ©len kivÃ¡lÃ³ sÃ­elÃ©si lehetÅ‘sÃ©geket, nyÃ¡ron pedig nagyszerÅ± tÃºraÃºtvonalakat kÃ­nÃ¡l. EgyedÃ¼lÃ¡llÃ³ nÃ¶vÃ©ny- Ã©s Ã¡llatvilÃ¡ga Ã©rtÃ©kes bioszfÃ©ra-rezervÃ¡tummÃ¡ teszi.",
    "ro": "Parcul NaÈ›ional Sierra Nevada din sudul Spaniei cuprinde cel mai Ã®nalt lanÈ› muntos din Peninsula IbericÄƒ. OferÄƒ oportunitÄƒÈ›i excelente de schi iarna È™i trasee grozave de drumeÈ›ii vara. Flora È™i fauna sa unicÄƒ Ã®l fac o valoroasÄƒ rezervaÈ›ie a biosferei.",
    "en": "The Sierra Nevada National Park in southern Spain encompasses the highest mountain range on the Iberian Peninsula. It offers excellent skiing opportunities in winter and great hiking trails in summer. Its unique flora and fauna make it a valuable biosphere reserve."
  },
  "facts": {
    "de": [
      "Beinhaltet den MulhacÃ©n (3.482 m), den hÃ¶chsten Gipfel des Festlands.",
      "SÃ¼dlichstes Skigebiet Europas.",
      "Seit 1986 UNESCO-BiosphÃ¤renreservat.",
      "Heimat vieler endemischer Pflanzenarten.",
      "Ganz in der NÃ¤he der Stadt Granada gelegen.",
      "Bekannt fÃ¼r seine klaren NÃ¤chte, ideal fÃ¼r astronomische Observatorien."
    ],
    "hu": [
      "Itt talÃ¡lhatÃ³ a MulhacÃ©n (3482 m), a spanyol szÃ¡razfÃ¶ld legmagasabb csÃºcsa.",
      "EurÃ³pa legdÃ©lebbi sÃ­terepe.",
      "1986 Ã³ta UNESCO bioszfÃ©ra-rezervÃ¡tum.",
      "SzÃ¡mos endemikus (csak itt Ã©lÅ‘) nÃ¶vÃ©nyfaj otthona.",
      "Nagyon kÃ¶zel fekszik Granada vÃ¡rosÃ¡hoz.",
      "Tiszta Ã©jszakÃ¡irÃ³l ismert, Ã­gy ideÃ¡lis a csillagÃ¡szati obszervatÃ³riumok szÃ¡mÃ¡ra."
    ],
    "ro": [
      "Include MulhacÃ©n (3.482 m), cel mai Ã®nalt vÃ¢rf de pe continent.",
      "Cea mai sudicÄƒ staÈ›iune de schi din Europa.",
      "RezervaÈ›ie a biosferei UNESCO din 1986.",
      "GÄƒzduieÈ™te multe specii de plante endemice.",
      "Situat foarte aproape de oraÈ™ul Granada.",
      "Cunoscut pentru nopÈ›ile senine, ideale pentru observatoarele astronomice."
    ],
    "en": [
      "Includes MulhacÃ©n (3,482 m), the highest peak in mainland Spain.",
      "Europe's southernmost ski resort.",
      "UNESCO Biosphere Reserve since 1986.",
      "Home to many endemic plant species.",
      "Located very close to the city of Granada.",
      "Known for clear nights, ideal for astronomical observatories."
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
    "hu": "GibraltÃ¡r sziklÃ¡ja",
    "ro": "StÃ¢nca Gibraltarului",
    "en": "Rock of Gibraltar (view from Spain)"
  },
  "image": "/geo-images/spain/gibraltar-rock.webp",
  "description": {
    "de": "Der imposante Fels von Gibraltar Ã¼berblickt die schmale Meerenge zwischen Europa und Afrika. Obwohl Gibraltar ein britisches Ãœberseegebiet ist, prÃ¤gt der mÃ¤chtige Kalksteinfels die andalusische KÃ¼stenlinie eindrucksvoll. Er ist berÃ¼hmt fÃ¼r seine strategische Lage und die wild lebenden Berberaffen.",
    "hu": "A lenyÅ±gÃ¶zÅ‘ GibraltÃ¡r sziklÃ¡ja az EurÃ³pa Ã©s Afrika kÃ¶zÃ¶tti szÅ±k szorosra nÃ©z. BÃ¡r GibraltÃ¡r brit tengerentÃºli terÃ¼let, a hatalmas mÃ©szkÅ‘szikla meghatÃ¡rozza az andalÃºz partvonalat. KÃ¼lÃ¶nÃ¶sen stratÃ©giai fekvÃ©sÃ©rÅ‘l Ã©s vadon Ã©lÅ‘ berber makÃ¡kÃ³irÃ³l ismert.",
    "ro": "Impresionanta StÃ¢ncÄƒ a Gibraltarului are vedere spre strÃ¢mtoarea Ã®ngustÄƒ dintre Europa È™i Africa. DeÈ™i Gibraltar este un teritoriu britanic de peste mÄƒri, uriaÈ™a stÃ¢ncÄƒ de calcar dominÄƒ coasta andaluzÄƒ. Este faimoasÄƒ pentru locaÈ›ia sa strategicÄƒ È™i macacii berberi sÄƒlbatici.",
    "en": "The imposing Rock of Gibraltar overlooks the narrow strait between Europe and Africa. Although Gibraltar is a British Overseas Territory, the massive limestone rock heavily shapes the Andalusian coastline. It is famous for its strategic location and wild Barbary macaques."
  },
  "facts": {
    "de": [
      "Britisches Ãœberseegebiet, umgeben von spanischem Terrain.",
      "Etwa 426 Meter hoher monolithischer Kalksteinfels.",
      "Heimat der einzigen wild lebenden Affenpopulation in Europa.",
      "Bekannt als eine der 'SÃ¤ulen des Herakles' in der Antike.",
      "VerfÃ¼gt Ã¼ber ein ausgedehntes Tunnelnetzwerk aus dem Zweiten Weltkrieg.",
      "Bietet bei klarem Wetter einen Blick bis nach Nordafrika."
    ],
    "hu": [
      "Brit tengerentÃºli terÃ¼let, spanyol szÃ¡razfÃ¶lddel kÃ¶rÃ¼lvÃ©ve.",
      "KÃ¶rÃ¼lbelÃ¼l 426 mÃ©ter magas monolit mÃ©szkÅ‘szikla.",
      "EurÃ³pa egyetlen vadon Ã©lÅ‘ majompopulÃ¡ciÃ³jÃ¡nak otthona.",
      "Az Ã³korban 'HÃ©raklÃ©sz oszlopai' egyikekÃ©nt ismertÃ©k.",
      "Kiterjedt, mÃ¡sodik vilÃ¡ghÃ¡borÃºs alagÃºtrendszerrel rendelkezik.",
      "Tiszta idÅ‘ben egÃ©szen Ã‰szak-AfrikÃ¡ig el lehet lÃ¡tni."
    ],
    "ro": [
      "Teritoriu britanic de peste mÄƒri, Ã®nconjurat de teren spaniol.",
      "StÃ¢ncÄƒ monoliticÄƒ de calcar Ã®naltÄƒ de aproximativ 426 de metri.",
      "GÄƒzduieÈ™te singura populaÈ›ie de maimuÈ›e sÄƒlbatice din Europa.",
      "Cunoscut ca unul dintre â€žStÃ¢lpii lui Herculeâ€ din antichitate.",
      "Are o reÈ›ea extinsÄƒ de tuneluri din al Doilea RÄƒzboi Mondial.",
      "OferÄƒ priveliÈ™ti pÃ¢nÄƒ Ã®n Africa de Nord Ã®n zilele senine."
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
    "hu": "Salamanca Ã³vÃ¡rosa",
    "ro": "OraÈ™ul vechi Salamanca",
    "en": "Salamanca Old City"
  },
  "image": "/geo-images/spain/salamanca-university.webp",
  "description": {
    "de": "Die goldene Stadt Salamanca ist berÃ¼hmt fÃ¼r ihre alte UniversitÃ¤t, eine der Ã¤ltesten in Europa. Die historische Altstadt ist ein architektonisches Juwel im plateresken Stil, geprÃ¤gt vom goldenen Sandstein (Villamayor-Stein). Der belebte Plaza Mayor ist das HerzstÃ¼ck der Stadt.",
    "hu": "Salamanca, az â€žarany vÃ¡rosâ€ az Å‘si egyetemÃ©rÅ‘l hÃ­res, amely az egyik legrÃ©gebbi EurÃ³pÃ¡ban. A tÃ¶rtÃ©nelmi Ã³vÃ¡ros a platereszk stÃ­lus Ã©pÃ­tÃ©szeti Ã©kkÃ¶ve, amelyet a helyi arany homokkÅ‘ hatÃ¡roz meg. A nyÃ¼zsgÅ‘ Plaza Mayor a vÃ¡ros lÃ¼ktetÅ‘ szÃ­ve.",
    "ro": "OraÈ™ul auriu Salamanca este faimos pentru vechea sa universitate, una dintre cele mai vechi din Europa. OraÈ™ul vechi istoric este o bijuterie arhitecturalÄƒ Ã®n stil plateresc, caracterizatÄƒ de gresie aurie (piatrÄƒ de Villamayor). Animata Plaza Mayor este inima oraÈ™ului.",
    "en": "The golden city of Salamanca is famous for its ancient university, one of the oldest in Europe. The historic old town is an architectural jewel in the Plateresque style, characterized by golden sandstone. The bustling Plaza Mayor is the heart of the city."
  },
  "facts": {
    "de": [
      "Die UniversitÃ¤t wurde 1218 gegrÃ¼ndet.",
      "Seit 1988 ist die Altstadt UNESCO-Weltkulturerbe.",
      "Besitzt eine 'Alte' und eine 'Neue' Kathedrale, die miteinander verbunden sind.",
      "Der Plaza Mayor gilt als einer der schÃ¶nsten PlÃ¤tze Spaniens.",
      "Touristen suchen traditionell den Frosch (La Rana) an der UniversitÃ¤tsfassade.",
      "Bekannt fÃ¼r den goldenen Glanz der GebÃ¤ude bei Sonnenuntergang."
    ],
    "hu": [
      "Az egyetemet 1218-ban alapÃ­tottÃ¡k.",
      "Az Ã³vÃ¡ros 1988 Ã³ta az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
      "Egy 'RÃ©gi' Ã©s egy 'Ãšj' katedrÃ¡lissal is rendelkezik, amelyek egybeÃ©pÃ¼ltek.",
      "A Plaza Mayort SpanyolorszÃ¡g egyik legszebb terÃ©nek tartjÃ¡k.",
      "A turistÃ¡k hagyomÃ¡nyosan a bÃ©kÃ¡t (La Rana) keresik az egyetem homlokzatÃ¡n.",
      "Ismert az Ã©pÃ¼letek naplementekor lÃ¡thatÃ³ aranyos ragyogÃ¡sÃ¡rÃ³l."
    ],
    "ro": [
      "Universitatea a fost fondatÄƒ Ã®n 1218.",
      "Din 1988, oraÈ™ul vechi este Ã®n Patrimoniul Mondial UNESCO.",
      "Are o catedralÄƒ â€žVecheâ€ È™i una â€žNouÄƒâ€, care sunt conectate.",
      "Plaza Mayor este consideratÄƒ una dintre cele mai frumoase pieÈ›e din Spania.",
      "TuriÈ™tii cautÄƒ Ã®n mod tradiÈ›ional broasca (La Rana) pe faÈ›ada universitÄƒÈ›ii.",
      "Cunoscut pentru strÄƒlucirea aurie a clÄƒdirilor la apus."
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
    "hu": "Burgosi katedrÃ¡lis",
    "ro": "Catedrala din Burgos",
    "en": "Burgos Cathedral"
  },
  "image": "/geo-images/spain/burgos-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von Burgos ist ein Meisterwerk der spanischen Gotik. Mit ihren filigranen TÃ¼rmen und der reichen Innenausstattung dominiert sie die historische Stadt in Kastilien. Sie ist nicht nur ein architektonisches Wunder, sondern beherbergt auch das Grab des legendÃ¤ren Nationalhelden El Cid.",
    "hu": "A burgosi katedrÃ¡lis a spanyol gÃ³tika mestermÅ±ve. CsipkÃ©zett tornyaival Ã©s gazdag belsÅ‘ terÃ©vel uralja a kasztÃ­liai tÃ¶rtÃ©nelmi vÃ¡rost. Nemcsak Ã©pÃ­tÃ©szeti csoda, hanem itt talÃ¡lhatÃ³ a legendÃ¡s nemzeti hÅ‘s, El Cid sÃ­rja is.",
    "ro": "Catedrala din Burgos este o capodoperÄƒ a goticului spaniol. Cu turnurile sale filigranate È™i interiorul bogat, dominÄƒ oraÈ™ul istoric din Castilia. Nu este doar o minune arhitecturalÄƒ, ci adÄƒposteÈ™te È™i mormÃ¢ntul legendarului erou naÈ›ional El Cid.",
    "en": "The Burgos Cathedral is a masterpiece of Spanish Gothic architecture. With its filigree spires and rich interior, it dominates the historic city in Castile. It is not only an architectural marvel but also houses the tomb of the legendary national hero El Cid."
  },
  "facts": {
    "de": [
      "Baubeginn im Jahr 1221.",
      "Als einzige spanische Kathedrale eigenstÃ¤ndig UNESCO-Weltkulturerbe.",
      "Hervorragendes Beispiel der franzÃ¶sischen Gotik in Spanien.",
      "Beherbergt das Grab von El Cid und seiner Frau DoÃ±a Jimena.",
      "Wichtige Station auf dem Camino FrancÃ©s (Jakobsweg).",
      "Bekannt fÃ¼r die goldene Treppe (Escalera Dorada)."
    ],
    "hu": [
      "Az Ã©pÃ­tkezÃ©s 1221-ben kezdÅ‘dÃ¶tt.",
      "Az egyetlen spanyol katedrÃ¡lis, amely Ã¶nÃ¡llÃ³an is UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g.",
      "A francia gÃ³tika kiemelkedÅ‘ pÃ©ldÃ¡ja SpanyolorszÃ¡gban.",
      "Itt talÃ¡lhatÃ³ El Cid Ã©s felesÃ©ge, DoÃ±a Jimena sÃ­rja.",
      "A Francia Szent Jakab-Ãºt (Camino FrancÃ©s) fontos Ã¡llomÃ¡sa.",
      "HÃ­res az Arany lÃ©pcsÅ‘jÃ©rÅ‘l (Escalera Dorada)."
    ],
    "ro": [
      "ConstrucÈ›ia a Ã®nceput Ã®n 1221.",
      "Singura catedralÄƒ spaniolÄƒ care este un sit independent al Patrimoniului Mondial UNESCO.",
      "Un exemplu remarcabil al goticului francez Ã®n Spania.",
      "AdÄƒposteÈ™te mormÃ¢ntul lui El Cid È™i al soÈ›iei sale DoÃ±a Jimena.",
      "Oprire importantÄƒ pe Camino FrancÃ©s (Calea SfÃ¢ntului Iacob).",
      "CunoscutÄƒ pentru scara de aur (Escalera Dorada)."
    ],
    "en": [
      "Construction began in 1221.",
      "The only Spanish cathedral independently designated a UNESCO World Heritage site.",
      "An outstanding example of French Gothic in Spain.",
      "Houses the tomb of El Cid and his wife DoÃ±a Jimena.",
      "An important stop on the Camino FrancÃ©s (Way of St. James).",
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
    "de": "Kathedrale von LeÃ³n",
    "hu": "LeÃ³ni katedrÃ¡lis",
    "ro": "Catedrala din LeÃ³n",
    "en": "LeÃ³n Cathedral"
  },
  "image": "/geo-images/spain/leon-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von LeÃ³n, auch bekannt als 'Haus des Lichts', ist eines der feinsten Beispiele der Hochgotik. Ihre auÃŸergewÃ¶hnlich groÃŸen Buntglasfenster tauchen das Innere in ein faszinierendes Lichtspiel. Sie ist ein spiritueller HÃ¶hepunkt auf dem Pilgerweg nach Santiago de Compostela.",
    "hu": "A leÃ³ni katedrÃ¡lis, amelyet 'A FÃ©ny HÃ¡zakÃ©nt' is ismernek, az Ã©rett gÃ³tika egyik legszebb pÃ©ldÃ¡ja. KivÃ©telesen nagy Ã³lomÃ¼veg ablakai lenyÅ±gÃ¶zÅ‘ fÃ©nyjÃ¡tÃ©kba Ã¶ltÃ¶ztetik a belsÅ‘ teret. A Santiago de CompostelÃ¡ba vezetÅ‘ zarÃ¡ndokÃºt egyik spirituÃ¡lis csÃºcspontja.",
    "ro": "Catedrala din LeÃ³n, cunoscutÄƒ È™i sub numele de â€žCasa Luminiiâ€, este unul dintre cele mai fine exemple de arhitecturÄƒ goticÄƒ Ã®naltÄƒ. Vitraliile sale excepÈ›ional de mari scaldÄƒ interiorul Ã®ntr-un joc fascinant de lumini. Este un punct culminant spiritual pe traseul de pelerinaj spre Santiago de Compostela.",
    "en": "The LeÃ³n Cathedral, also known as the 'House of Light', is one of the finest examples of High Gothic architecture. Its exceptionally large stained-glass windows bathe the interior in a fascinating play of light. It is a spiritual highlight on the pilgrimage route to Santiago de Compostela."
  },
  "facts": {
    "de": [
      "Gebaut auf den Ruinen rÃ¶mischer BÃ¤der.",
      "Besitzt Ã¼ber 1.700 Quadratmeter historische Buntglasfenster.",
      "Das Mauerwerk wurde extrem reduziert, um riesige Fenster zu ermÃ¶glichen.",
      "Wird oft mit der franzÃ¶sischen Kathedrale von Amiens verglichen.",
      "Die Fenster stammen grÃ¶ÃŸtenteils aus dem 13. bis 16. Jahrhundert.",
      "Beherbergt ein bedeutendes DiÃ¶zesanmuseum."
    ],
    "hu": [
      "RÃ³mai fÃ¼rdÅ‘k romjaira Ã©pÃ¼lt.",
      "TÃ¶bb mint 1700 nÃ©gyzetmÃ©ternyi tÃ¶rtÃ©nelmi Ã³lomÃ¼veg ablakkal rendelkezik.",
      "A falazatot a minimumra csÃ¶kkentettÃ©k a hatalmas ablakok Ã©rdekÃ©ben.",
      "Gyakran hasonlÃ­tjÃ¡k a francia amiens-i katedrÃ¡lishoz.",
      "Az ablakok tÃ¶bbsÃ©ge a 13. Ã©s a 16. szÃ¡zad kÃ¶zÃ¶tt kÃ©szÃ¼lt.",
      "JelentÅ‘s egyhÃ¡zmegyei mÃºzeumnak ad otthont."
    ],
    "ro": [
      "ConstruitÄƒ pe ruinele unor bÄƒi romane.",
      "Are peste 1.700 de metri pÄƒtraÈ›i de vitralii istorice.",
      "ZidÄƒria a fost redusÄƒ la extrem pentru a permite ferestre uriaÈ™e.",
      "Adesea comparatÄƒ cu catedrala francezÄƒ din Amiens.",
      "Ferestrele dateazÄƒ Ã®n mare parte din secolele XIII - XVI.",
      "GÄƒzduieÈ™te un important muzeu eparhial."
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
    "hu": "Szent Jakab-Ãºt",
    "ro": "Camino de Santiago",
    "en": "Camino de Santiago"
  },
  "image": "/geo-images/spain/camino-santiago.webp",
  "description": {
    "de": "Der Jakobsweg (Camino de Santiago) ist ein historisches Netzwerk von Pilgerwegen, die alle zum Grab des Apostels Jakobus in Santiago de Compostela fÃ¼hren. Pilger aus aller Welt wandern wochenlang durch Nordspanien. Diese spirituelle und kulturelle Reise prÃ¤gt die IdentitÃ¤t ganzer Regionen.",
    "hu": "A Szent Jakab-Ãºt (Camino de Santiago) zarÃ¡ndokutak tÃ¶rtÃ©nelmi hÃ¡lÃ³zata, amelyek mindegyike Jakab apostol Santiago de Compostela-i sÃ­rjÃ¡hoz vezet. A vilÃ¡g minden tÃ¡jÃ¡rÃ³l Ã©rkezÅ‘ zarÃ¡ndokok heteken Ã¡t gyalogolnak Ã‰szak-SpanyolorszÃ¡gon keresztÃ¼l. Ez a spirituÃ¡lis Ã©s kulturÃ¡lis utazÃ¡s egÃ©sz rÃ©giÃ³k identitÃ¡sÃ¡t hatÃ¡rozza meg.",
    "ro": "Camino de Santiago este o reÈ›ea istoricÄƒ de rute de pelerinaj, toate ducÃ¢nd la mormÃ¢ntul Apostolului Iacob din Santiago de Compostela. Pelerini din toatÄƒ lumea merg pe jos prin nordul Spaniei timp de sÄƒptÄƒmÃ¢ni. AceastÄƒ cÄƒlÄƒtorie spiritualÄƒ È™i culturalÄƒ contureazÄƒ identitatea unor regiuni Ã®ntregi.",
    "en": "The Camino de Santiago is a historic network of pilgrimage routes, all leading to the tomb of the Apostle James in Santiago de Compostela. Pilgrims from all over the world hike through northern Spain for weeks. This spiritual and cultural journey shapes the identity of entire regions."
  },
  "facts": {
    "de": [
      "Der 'Camino FrancÃ©s' ist die populÃ¤rste Route.",
      "Das Symbol der Pilger ist die Jakobsmuschel.",
      "Die Wege sind UNESCO-Weltkulturerbe.",
      "Pilger erhalten am Ziel die Urkunde 'Compostela'.",
      "Man muss mindestens 100 km wandern, um die Urkunde zu erhalten.",
      "FÃ¶rdert einen starken internationalen Kulturaustausch."
    ],
    "hu": [
      "A legnÃ©pszerÅ±bb Ãºtvonal a 'Camino FrancÃ©s'.",
      "A zarÃ¡ndokok szimbÃ³luma a fÃ©sÅ±kagylÃ³.",
      "Az Ãºtvonalak az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezik.",
      "A zarÃ¡ndokok a cÃ©lban megkapjÃ¡k a 'Compostela' oklevelet.",
      "LegalÃ¡bb 100 km-t kell gyalogolni az oklevÃ©l megszerzÃ©sÃ©hez.",
      "ErÅ‘s nemzetkÃ¶zi kulturÃ¡lis cserÃ©t mozdÃ­t elÅ‘."
    ],
    "ro": [
      "'Camino FrancÃ©s' este cea mai popularÄƒ rutÄƒ.",
      "Simbolul pelerinilor este scoica scallop.",
      "Traseele sunt Ã®n Patrimoniul Mondial UNESCO.",
      "Pelerinii primesc certificatul 'Compostela' la destinaÈ›ie.",
      "Trebuie sÄƒ mergi pe jos cel puÈ›in 100 km pentru a primi certificatul.",
      "PromoveazÄƒ un puternic schimb cultural internaÈ›ional."
    ],
    "en": [
      "The 'Camino FrancÃ©s' is the most popular route.",
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
    "de": "CÃ­es-Inseln",
    "hu": "CÃ­es-szigetek",
    "ro": "Insulele CÃ­es",
    "en": "CÃ­es Islands"
  },
  "image": "/geo-images/spain/galicia-coast.webp",
  "description": {
    "de": "Die CÃ­es-Inseln vor der galicischen KÃ¼ste sind ein streng geschÃ¼tztes Naturparadies. Sie bieten einige der schÃ¶nsten StrÃ¤nde der Welt, wie den Playa de Rodas, mit weiÃŸem Sand und kristallklarem Wasser. Es gibt hier keine Autos, sondern nur unberÃ¼hrte Natur und Wanderwege.",
    "hu": "A galÃ­ciai partoknÃ¡l fekvÅ‘ CÃ­es-szigetek szigorÃºan vÃ©dett termÃ©szeti paradicsom. A vilÃ¡g legszebb strandjai kÃ¶zÃ© tartoznak az itt talÃ¡lhatÃ³ak, mint pÃ©ldÃ¡ul a fehÃ©r homokos, kristÃ¡lytiszta vizÅ± Playa de Rodas. Itt nincsenek autÃ³k, csak Ã©rintetlen termÃ©szet Ã©s tÃºraÃºtvonalak.",
    "ro": "Insulele CÃ­es de pe coasta Galiciei sunt un paradis natural strict protejat. OferÄƒ unele dintre cele mai frumoase plaje din lume, precum Playa de Rodas, cu nisip alb È™i ape cristaline. Nu existÄƒ maÈ™ini aici, doar naturÄƒ neatinsÄƒ È™i trasee de drumeÈ›ii.",
    "en": "The CÃ­es Islands off the Galician coast are a strictly protected natural paradise. They offer some of the most beautiful beaches in the world, such as Playa de Rodas, with white sand and crystal-clear water. There are no cars here, only pristine nature and hiking trails."
  },
  "facts": {
    "de": [
      "Teil des Nationalparks Atlantische Inseln von Galicien.",
      "Die Inseln waren in der Vergangenheit Zufluchtsorte fÃ¼r Piraten.",
      "Der Playa de Rodas wurde oft zum besten Strand der Welt gewÃ¤hlt.",
      "TÃ¤gliche Besucherzahlen sind streng limitiert, um die Natur zu schÃ¼tzen.",
      "Beherbergen die weltweit grÃ¶ÃŸte MÃ¶wenkolonie.",
      "Das Wasserbleibt selbst im Hochsommer sehr erfrischend kalt."
    ],
    "hu": [
      "A GalÃ­ciai Atlanti-szigetek Nemzeti Park rÃ©sze.",
      "A mÃºltban a szigetek kalÃ³zok menedÃ©khelyÃ©Ã¼l szolgÃ¡ltak.",
      "A Playa de Rodast gyakran a vilÃ¡g legjobb strandjÃ¡nak vÃ¡lasztjÃ¡k.",
      "A napi lÃ¡togatÃ³k szÃ¡ma a termÃ©szet vÃ©delme Ã©rdekÃ©ben szigorÃºan korlÃ¡tozott.",
      "A vilÃ¡g legnagyobb sirÃ¡lykolÃ³niÃ¡jÃ¡nak adnak otthont.",
      "A vÃ­z mÃ©g nyÃ¡r kÃ¶zepÃ©n is frissÃ­tÅ‘en hideg marad."
    ],
    "ro": [
      "Parte a Parcului NaÈ›ional Insulele Atlantice din Galicia.",
      "ÃŽn trecut, insulele au fost refugii pentru piraÈ›i.",
      "Playa de Rodas a fost adesea votatÄƒ cea mai bunÄƒ plajÄƒ din lume.",
      "NumÄƒrul de vizitatori zilnici este strict limitat pentru a proteja natura.",
      "GÄƒzduiesc cea mai mare colonie de pescÄƒruÈ™i din lume.",
      "Apa rÄƒmÃ¢ne foarte rece È™i revigorantÄƒ chiar È™i la mijlocul verii."
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
    "de": "RÃ¶misches Theater MÃ©rida",
    "hu": "MÃ©ridai rÃ³mai szÃ­nhÃ¡z",
    "ro": "Teatrul roman din MÃ©rida",
    "en": "MÃ©rida Roman Theatre"
  },
  "image": "/geo-images/spain/merida-roman.webp",
  "description": {
    "de": "Das RÃ¶mische Theater in MÃ©rida ist eines der prÃ¤chtigsten noch erhaltenen Bauwerke aus der Zeit des RÃ¶mischen Reiches auf der iberischen Halbinsel. Die antike Hauptstadt Lusitanias beeindruckt mit ihrer reich verzierten BÃ¼hnenwand. Noch heute wird es jeden Sommer fÃ¼r klassische Theaterfestivals genutzt.",
    "hu": "A mÃ©ridai rÃ³mai szÃ­nhÃ¡z a RÃ³mai Birodalom korÃ¡nak egyik legcsodÃ¡latosabb, Ã©psÃ©gben fennmaradt Ã©pÃ­tmÃ©nye az IbÃ©riai-fÃ©lszigeten. Lusitania egykori fÅ‘vÃ¡rosa lenyÅ±gÃ¶zÅ‘en dÃ­szÃ­tett szÃ­npadi falÃ¡val nyÅ±gÃ¶zi le a lÃ¡togatÃ³kat. Minden nyÃ¡ron ma is klasszikus szÃ­nhÃ¡zi fesztivÃ¡lok helyszÃ­ne.",
    "ro": "Teatrul roman din MÃ©rida este una dintre cele mai magnifice structuri supravieÈ›uitoare din perioada Imperiului Roman din Peninsula IbericÄƒ. Fosta capitalÄƒ a Lusitaniei impresioneazÄƒ prin peretele scenic bogat ornamentat. Chiar È™i astÄƒzi este folosit Ã®n fiecare varÄƒ pentru festivaluri de teatru clasic.",
    "en": "The Roman Theatre in MÃ©rida is one of the most magnificent surviving structures from the Roman Empire period on the Iberian Peninsula. The ancient capital of Lusitania impresses with its richly decorated stage wall. It is still used every summer for classical theater festivals."
  },
  "facts": {
    "de": [
      "Erbaut um die Jahre 16 bis 15 v. Chr.",
      "Bot Platz fÃ¼r etwa 6.000 Zuschauer.",
      "Teil des ArchÃ¤ologischen Ensembles von MÃ©rida (UNESCO-Welterbe).",
      "Die BÃ¼hne wird von korinthischen MarmorsÃ¤ulen geschmÃ¼ckt.",
      "Befindet sich neben einem fast ebenso gut erhaltenen Amphitheater.",
      "War jahrhundertelang unter Erde und Schutt begraben."
    ],
    "hu": [
      "Kr. e. 16 Ã©s 15 kÃ¶rÃ¼l Ã©pÃ¼lt.",
      "KÃ¶rÃ¼lbelÃ¼l 6000 nÃ©zÅ‘ szÃ¡mÃ¡ra biztosÃ­tott helyet.",
      "A mÃ©ridai rÃ©gÃ©szeti egyÃ¼ttes (UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g) rÃ©sze.",
      "A szÃ­npadot korinthoszi mÃ¡rvÃ¡nyoszlopok dÃ­szÃ­tik.",
      "KÃ¶zvetlenÃ¼l egy szintÃ©n jÃ³ Ã¡llapotÃº amfiteÃ¡trum mellett talÃ¡lhatÃ³.",
      "Ã‰vszÃ¡zadokon Ã¡t fÃ¶ld Ã©s tÃ¶rmelÃ©k borÃ­totta."
    ],
    "ro": [
      "Construit Ã®n jurul anilor 16 - 15 Ã®.Hr.",
      "Oferea locuri pentru aproximativ 6.000 de spectatori.",
      "Parte a Ansamblului Arheologic de la MÃ©rida (Patrimoniu UNESCO).",
      "Scena este decoratÄƒ cu coloane corintice de marmurÄƒ.",
      "Situat lÃ¢ngÄƒ un amfiteatru aproape la fel de bine conservat.",
      "A fost Ã®ngropat sub pÄƒmÃ¢nt È™i dÄƒrÃ¢mÄƒturi timp de secole."
    ],
    "en": [
      "Built around 16 to 15 BC.",
      "Provided seating for about 6,000 spectators.",
      "Part of the Archaeological Ensemble of MÃ©rida (UNESCO World Heritage).",
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
    "hu": "ToledÃ³i katedrÃ¡lis",
    "ro": "Catedrala din Toledo",
    "en": "Toledo Cathedral"
  },
  "image": "/geo-images/spain/toledo-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von Toledo ist eine prachtvolle gotische Kirche von immenser historischer Bedeutung in Spanien. Die 'Primas-Kathedrale' spiegelt mit ihrem monumentalen Hauptaltar, dem reich verzierten Chor und GemÃ¤lden von El Greco groÃŸen Reichtum wider. Sie wurde an der Stelle einer ehemaligen groÃŸen Moschee errichtet.",
    "hu": "A toledÃ³i katedrÃ¡lis egy pompÃ¡s gÃ³tikus templom, amely hatalmas tÃ¶rtÃ©nelmi jelentÅ‘sÃ©ggel bÃ­r SpanyolorszÃ¡gban. A 'PrÃ­mÃ¡s katedrÃ¡lis' hatalmas fÅ‘oltÃ¡rÃ¡val, gazdagon dÃ­szÃ­tett kÃ³rusÃ¡val Ã©s El Greco festmÃ©nyeivel mÃ©rhetetlen gazdagsÃ¡got tÃ¼krÃ¶z. Egy korÃ¡bbi nagymecset helyÃ©re Ã©pÃ¼lt.",
    "ro": "Catedrala din Toledo este o bisericÄƒ goticÄƒ magnificÄƒ de o importanÈ›Äƒ istoricÄƒ imensÄƒ Ã®n Spania. â€žCatedrala Primatâ€ reflectÄƒ o mare bogÄƒÈ›ie cu altarul sÄƒu principal monumental, corul ornamentat È™i picturile lui El Greco. A fost construitÄƒ pe locul unei foste mari moschei.",
    "en": "The Toledo Cathedral is a magnificent Gothic church of immense historical significance in Spain. The 'Primate Cathedral' reflects vast wealth with its monumental main altar, ornate choir, and paintings by El Greco. It was built on the site of a former great mosque."
  },
  "facts": {
    "de": [
      "Gilt als das Opus Magnum der spanischen Gotik.",
      "Baubeginn war im Jahr 1226 unter Ferdinand III.",
      "Das gotische GebÃ¤ude enthÃ¤lt auch MudÃ©jar-Elemente.",
      "Der beeindruckende Hauptaltar (Retablo) zeigt Szenen aus dem Leben Christi.",
      "Die Sakristei ist eine Kunstgalerie mit Werken von Tizian und Goya.",
      "El Grecos berÃ¼hmtes GemÃ¤lde 'Die Entkleidung Christi' hÃ¤ngt hier."
    ],
    "hu": [
      "A spanyol gÃ³tika mestermÅ±vÃ©nek (Opus Magnum) tartjÃ¡k.",
      "Ã‰pÃ­tÃ©se 1226-ban kezdÅ‘dÃ¶tt III. FerdinÃ¡nd alatt.",
      "A gÃ³tikus Ã©pÃ¼let mudÃ©jar stÃ­luselemeket is tartalmaz.",
      "A lenyÅ±gÃ¶zÅ‘ fÅ‘oltÃ¡r (retablo) Krisztus Ã©letÃ©nek jeleneteit Ã¡brÃ¡zolja.",
      "A sekrestye valÃ³sÃ¡gos mÅ±vÃ©szeti galÃ©ria Tiziano Ã©s Goya mÅ±veivel.",
      "Itt talÃ¡lhatÃ³ El Greco hÃ­res festmÃ©nye, 'Krisztus megfosztÃ¡sa ruhÃ¡itÃ³l'."
    ],
    "ro": [
      "ConsideratÄƒ â€žOpus Magnumâ€ a goticului spaniol.",
      "ConstrucÈ›ia a Ã®nceput Ã®n 1226 sub Ferdinand al III-lea.",
      "ClÄƒdirea goticÄƒ conÈ›ine È™i elemente mudÃ©jar.",
      "Altarul principal impresionant (retablo) aratÄƒ scene din viaÈ›a lui Hristos.",
      "Sacristia este o galerie de artÄƒ cu lucrÄƒri de Titian È™i Goya.",
      "Faimosul tablou al lui El Greco â€žDezbrÄƒcarea lui Hristosâ€ atÃ¢rnÄƒ aici."
    ],
    "en": [
      "Considered the 'Opus Magnum' of Spanish Gothic architecture.",
      "Construction began in 1226 under Ferdinand III.",
      "The Gothic building also features MudÃ©jar elements.",
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
    "de": "HÃ¤ngende HÃ¤user von Cuenca",
    "hu": "Cuenca fÃ¼ggÅ‘hÃ¡zai",
    "ro": "Casele suspendate din Cuenca",
    "en": "Cuenca Hanging Houses"
  },
  "image": "/geo-images/spain/cuenca-hanging.webp",
  "description": {
    "de": "Die HÃ¤ngenden HÃ¤user (Casas Colgadas) von Cuenca sind ein architektonisches Wunder der mittelalterlichen Stadt. Sie kleben scheinbar schwerelos an den steilen Klippen Ã¼ber der Schlucht des Flusses HuÃ©car. Heute sind sie das bekannteste Symbol der Stadt, die zum UNESCO-Weltkulturerbe gehÃ¶rt.",
    "hu": "Cuenca fÃ¼ggÅ‘hÃ¡zai (Casas Colgadas) a kÃ¶zÃ©pkori vÃ¡ros Ã©pÃ­tÃ©szeti csodÃ¡i. Szinte sÃºlytalannak tÅ±nve tapadnak a HuÃ©car folyÃ³ szurdoka feletti meredek sziklÃ¡khoz. Ma ezek jelentik az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezÅ‘ vÃ¡ros legismertebb szimbÃ³lumÃ¡t.",
    "ro": "Casele suspendate (Casas Colgadas) din Cuenca sunt o minune arhitecturalÄƒ a oraÈ™ului medieval. Se agaÈ›Äƒ aparent fÄƒrÄƒ greutate de stÃ¢ncile abrupte de deasupra defileului rÃ¢ului HuÃ©car. AstÄƒzi sunt cel mai faimos simbol al oraÈ™ului, care este un sit al Patrimoniului Mondial UNESCO.",
    "en": "The Hanging Houses (Casas Colgadas) of Cuenca are an architectural marvel of the medieval city. They cling seemingly weightlessly to the steep cliffs above the HuÃ©car river gorge. Today they are the most famous symbol of the city, which is a UNESCO World Heritage site."
  },
  "facts": {
    "de": [
      "Nur wenige der ursprÃ¼nglichen hÃ¤ngenden HÃ¤user existieren noch.",
      "Sie wurden vermutlich im 15. Jahrhundert erbaut.",
      "Ihre Holzbalkone ragen dramatisch Ã¼ber den Abgrund.",
      "Eines der HÃ¤user beherbergt das Museum fÃ¼r abstrakte spanische Kunst.",
      "Cuenca liegt spektakulÃ¤r zwischen den FlÃ¼ssen JÃºcar und HuÃ©car.",
      "Die BrÃ¼cke San Pablo bietet die beste Aussicht auf die HÃ¤user."
    ],
    "hu": [
      "Az eredeti fÃ¼ggÅ‘hÃ¡zakbÃ³l mÃ¡r csak kevÃ©s maradt fenn.",
      "FeltehetÅ‘en a 15. szÃ¡zadban Ã©pÃ¼ltek.",
      "FÃ¡bÃ³l kÃ©szÃ¼lt erkÃ©lyeik drÃ¡maian nyÃºlnak a szakadÃ©k fÃ¶lÃ©.",
      "Az egyik hÃ¡zban mÅ±kÃ¶dik a Spanyol Absztrakt MÅ±vÃ©szeti MÃºzeum.",
      "Cuenca lÃ¡tvÃ¡nyos helyen, a JÃºcar Ã©s a HuÃ©car folyÃ³k kÃ¶zÃ¶tt fekszik.",
      "A San Pablo hÃ­drÃ³l nyÃ­lik a legjobb kilÃ¡tÃ¡s a hÃ¡zakra."
    ],
    "ro": [
      "Doar cÃ¢teva dintre casele suspendate originale mai existÄƒ.",
      "Probabil au fost construite Ã®n secolul al XV-lea.",
      "Balcoanele lor de lemn se Ã®ntind dramatic peste prÄƒpastie.",
      "Una dintre case gÄƒzduieÈ™te Muzeul de ArtÄƒ AbstractÄƒ SpaniolÄƒ.",
      "Cuenca este situatÄƒ spectaculos Ã®ntre rÃ¢urile JÃºcar È™i HuÃ©car.",
      "Podul San Pablo oferÄƒ cea mai bunÄƒ vedere asupra caselor."
    ],
    "en": [
      "Only a few of the original hanging houses still exist.",
      "They were probably built in the 15th century.",
      "Their wooden balconies protrude dramatically over the abyss.",
      "One of the houses hosts the Museum of Spanish Abstract Art.",
      "Cuenca is spectacularly situated between the JÃºcar and HuÃ©car rivers.",
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
    "hu": "Murciai katedrÃ¡lis",
    "ro": "Catedrala din Murcia",
    "en": "Murcia Cathedral"
  },
  "image": "/geo-images/spain/murcia-cathedral.webp",
  "description": {
    "de": "Die Kathedrale Santa MarÃ­a in Murcia ist das architektonische Meisterwerk der Region. Ihre faszinierende Hauptfassade ist ein herausragendes Beispiel des spanischen Barocks. Der hohe Glockenturm und die Mischung aus Gotik, Renaissance und Barock machen das Bauwerk einzigartig.",
    "hu": "A murciai Santa MarÃ­a katedrÃ¡lis a rÃ©giÃ³ Ã©pÃ­tÃ©szeti mestermÅ±ve. LenyÅ±gÃ¶zÅ‘ fÅ‘homlokzata a spanyol barokk egyik kiemelkedÅ‘ pÃ©ldÃ¡ja. Magas harangtornya, valamint a gÃ³tika, a reneszÃ¡nsz Ã©s a barokk stÃ­lusjegyek keveredÃ©se teszi egyedÃ¼lÃ¡llÃ³vÃ¡ az Ã©pÃ­tmÃ©nyt.",
    "ro": "Catedrala Santa MarÃ­a din Murcia este capodopera arhitecturalÄƒ a regiunii. FaÈ›ada sa principalÄƒ fascinantÄƒ este un exemplu remarcabil al barocului spaniol. Turnul sÄƒu Ã®nalt al clopotniÈ›ei È™i amestecul de stiluri gotic, renascentist È™i baroc fac din clÄƒdire una unicÄƒ.",
    "en": "The Cathedral of Santa MarÃ­a in Murcia is the architectural masterpiece of the region. Its fascinating main facade is an outstanding example of Spanish Baroque. Its high bell tower and the mix of Gothic, Renaissance, and Baroque styles make the building unique."
  },
  "facts": {
    "de": [
      "Der Bau begann 1394 auf den Grundmauern einer Moschee.",
      "Die barocke Hauptfassade wurde im 18. Jahrhundert fertiggestellt.",
      "Der Glockenturm ist mit 90 Metern der zweithÃ¶chste Spaniens.",
      "Die VÃ©lez-Kapelle besticht durch prÃ¤chtige SpÃ¤tgotik.",
      "Beherbergt in der Hauptkapelle das Herz von KÃ¶nig Alfons X.",
      "Das Glockenspiel hat 25 Glocken, jede mit einem eigenen Namen."
    ],
    "hu": [
      "Ã‰pÃ­tÃ©se 1394-ben kezdÅ‘dÃ¶tt egy mecset alapjain.",
      "A barokk fÅ‘homlokzat a 18. szÃ¡zadban kÃ©szÃ¼lt el.",
      "A 90 mÃ©ter magas harangtorony SpanyolorszÃ¡g mÃ¡sodik legmagasabbja.",
      "A VÃ©lez-kÃ¡polna kÃ¡prÃ¡zatos kÃ©sÅ‘ gÃ³tikus stÃ­lusÃ¡val hÃ³dÃ­t.",
      "A fÅ‘ kÃ¡polnÃ¡ban Å‘rzik X. Alfonz kirÃ¡ly szÃ­vÃ©t.",
      "HarangjÃ¡tÃ©ka 25 harangbÃ³l Ã¡ll, melyek mindegyike sajÃ¡t nevet visel."
    ],
    "ro": [
      "ConstrucÈ›ia a Ã®nceput Ã®n 1394 pe fundaÈ›iile unei moschei.",
      "FaÈ›ada principalÄƒ barocÄƒ a fost finalizatÄƒ Ã®n secolul al XVIII-lea.",
      "Turnul clopotniÈ›ei de 90 de metri este al doilea cel mai Ã®nalt din Spania.",
      "Capela VÃ©lez impresioneazÄƒ prin goticul sÄƒu tÃ¢rziu magnific.",
      "GÄƒzduieÈ™te inima regelui Alfonso X Ã®n capela principalÄƒ.",
      "Carilonul are 25 de clopote, fiecare cu propriul nume."
    ],
    "en": [
      "Construction began in 1394 on the foundations of a mosque.",
      "The Baroque main facade was completed in the 18th century.",
      "The 90-meter bell tower is the second highest in Spain.",
      "The VÃ©lez Chapel impresses with its magnificent late Gothic style.",
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
    "de": "LogroÃ±o",
    "hu": "LogroÃ±o",
    "ro": "LogroÃ±o",
    "en": "LogroÃ±o (wine)"
  },
  "image": "/geo-images/spain/logrono-wine.webp",
  "description": {
    "de": "LogroÃ±o ist die Hauptstadt der Region La Rioja und ein Zentrum der spanischen Weinkultur. Die Stadt ist weltweit fÃ¼r ihre exzellenten Rotweine bekannt. Ein Highlight fÃ¼r Besucher ist die Calle del Laurel, eine StraÃŸe voller Tapas-Bars, in denen man lokale Weine und SpezialitÃ¤ten probiert.",
    "hu": "LogroÃ±o a La Rioja rÃ©giÃ³ fÅ‘vÃ¡rosa Ã©s a spanyol borkultÃºra kÃ¶zpontja. A vÃ¡ros vilÃ¡gszerte ismert kivÃ¡lÃ³ vÃ¶rÃ¶sborairÃ³l. A lÃ¡togatÃ³k szÃ¡mÃ¡ra kiemelkedÅ‘ Ã©lmÃ©nyt nyÃºjt a Calle del Laurel, a tapas bÃ¡rokkal teli utca, ahol helyi borokat Ã©s kÃ¼lÃ¶nlegessÃ©geket kÃ³stolhatnak.",
    "ro": "LogroÃ±o este capitala regiunii La Rioja È™i un centru al culturii vinului spaniol. OraÈ™ul este cunoscut Ã®n Ã®ntreaga lume pentru vinurile sale roÈ™ii excelente. Un punct culminant pentru vizitatori este Calle del Laurel, o stradÄƒ plinÄƒ de baruri de tapas unde se pot degusta vinuri È™i specialitÄƒÈ›i locale.",
    "en": "LogroÃ±o is the capital of the La Rioja region and a center of Spanish wine culture. The city is known worldwide for its excellent red wines. A highlight for visitors is the Calle del Laurel, a street full of tapas bars where you can taste local wines and specialties."
  },
  "facts": {
    "de": [
      "Hauptstadt der kleinsten autonomen Region Spaniens (La Rioja).",
      "Wichtiger Halt auf dem franzÃ¶sischen Jakobsweg.",
      "Die Calle del Laurel bietet Ã¼ber 60 Tapas-Bars.",
      "Jedes Jahr im September findet das Weinlesefest San Mateo statt.",
      "Umgeben von Hunderten von renommierten WeingÃ¼tern (Bodegas).",
      "Der Fluss Ebro flieÃŸt malerisch durch die Stadt."
    ],
    "hu": [
      "SpanyolorszÃ¡g legkisebb autonÃ³m rÃ©giÃ³jÃ¡nak (La Rioja) fÅ‘vÃ¡rosa.",
      "Fontos megÃ¡llÃ³ a Francia Szent Jakab-Ãºton.",
      "A Calle del Laurel tÃ¶bb mint 60 tapas bÃ¡rral vÃ¡rja a vendÃ©geket.",
      "Minden szeptemberben megrendezik a San Mateo szÃ¼reti fesztivÃ¡lt.",
      "TÃ¶bb szÃ¡z neves borÃ¡szat (bodegas) veszi kÃ¶rÃ¼l.",
      "Az Ebro folyÃ³ festÅ‘ien folyik Ã¡t a vÃ¡roson."
    ],
    "ro": [
      "Capitala celei mai mici comunitÄƒÈ›i autonome din Spania (La Rioja).",
      "Oprire importantÄƒ pe ruta francezÄƒ Camino de Santiago.",
      "Calle del Laurel oferÄƒ peste 60 de baruri de tapas.",
      "ÃŽn fiecare septembrie are loc festivalul recoltei de vin San Mateo.",
      "ÃŽnconjurat de sute de crame renumite (bodegas).",
      "RÃ¢ul Ebro curge pitoresc prin oraÈ™."
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
 
const extraSpainPoi: POI[] = [
{
  "id": "es-alcazar-sevilla",
  "type": "historical",
  "parent": "ES-AN",
  "coords": [-5.9907, 37.3833],
  "name": {"de": "Alcazar von Sevilla", "hu": "Sevillai Alcazar", "ro": "Alcazarul din Sevilla", "en": "Alcazar of Seville"},
  "description": {
    "de": "Der Alcazar von Sevilla ist ein kÃ¶niglicher Palastkomplex mit starken maurischen und christlichen EinflÃ¼ssen. Seine GÃ¤rten, HÃ¶fe und kunstvollen InnenrÃ¤ume machen ihn zu einem der eindrucksvollsten Orte Andalusiens.",
    "hu": "A sevillai Alcazar egy kirÃ¡lyi palotaegyÃ¼ttes erÅ‘s mÃ³r Ã©s keresztÃ©ny hatÃ¡ssal. Kertjei, udvarai Ã©s dÃ­szes belsÅ‘ terei AndalÃºzia egyik leglÃ¡tvÃ¡nyosabb helyÃ©vÃ© teszik.",
    "ro": "Alcazarul din Sevilla este un complex palatin regal cu puternice influenÈ›e maure È™i creÈ™tine. GrÄƒdinile, curÈ›ile È™i interioarele sale ornamentate Ã®l fac unul dintre cele mai impresionante locuri din Andaluzia.",
    "en": "The Alcazar of Seville is a royal palace complex with strong Moorish and Christian influences. Its gardens, courtyards, and ornate interiors make it one of Andalusia's most impressive places."
  },
  "facts": {
    "de": ["Noch heute Residenz der spanischen KÃ¶nigsfamilie bei Besuchen.", "UNESCO-Weltkulturerbe.", "ZÃ¤hlt zu den Ã¤ltesten noch genutzten PalÃ¤sten Europas.", "Diente als Filmkulisse fÃ¼r viele Produktionen."],
    "hu": ["Spanyol kirÃ¡lyi lÃ¡togatÃ¡sok idejÃ©n ma is hasznÃ¡lt rezidencia.", "UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g.", "EurÃ³pa egyik legrÃ©gebben hasznÃ¡lt palotÃ¡ja.", "SzÃ¡mos film forgatÃ³helyszÃ­ne volt."],
    "ro": ["ÃŽncÄƒ este reÈ™edinÈ›Äƒ folositÄƒ de familia regalÄƒ spaniolÄƒ la vizite.", "Patrimoniu Mondial UNESCO.", "Unul dintre cele mai vechi palate aflate Ã®ncÄƒ Ã®n uz din Europa.", "A fost decor pentru numeroase producÈ›ii de film."],
    "en": ["Still used as a royal residence during Spanish royal visits.", "UNESCO World Heritage site.", "One of the oldest palaces still in use in Europe.", "Has served as a filming location for many productions."]
  }
},
{
  "id": "es-castillo-coca",
  "type": "historical",
  "parent": "ES-CL",
  "coords": [-4.5228, 41.2164],
  "name": {"de": "Castillo de Coca", "hu": "Coca kastÃ©lya", "ro": "Castelul Coca", "en": "Coca Castle"},
  "description": {
    "de": "Das Castillo de Coca ist eine auffÃ¤llige Backsteinfestung in Kastilien und LeÃ³n. Mit seinem Wassergraben und den Zinnen zeigt es eindrucksvoll die spÃ¤tmittelalterliche MilitÃ¤rarchitektur.",
    "hu": "A Coca kastÃ©lya egy feltÅ±nÅ‘ tÃ©glavÃ¡r KasztÃ­liÃ¡ban Ã©s LeÃ³nban. Ã‰vÃ©rÃ©vel Ã©s bÃ¼tykÃ¶s falaival lÃ¡tvÃ¡nyosan mutatja be a kÃ©sÅ‘ kÃ¶zÃ©pkori katonai Ã©pÃ­tÃ©szetet.",
    "ro": "Castelul Coca este o fortÄƒreaÈ›Äƒ impresionantÄƒ din cÄƒrÄƒmidÄƒ Ã®n Castilia È™i LeÃ³n. Cu È™anÈ›ul È™i crenelurile sale, aratÄƒ spectaculos arhitectura militarÄƒ tÃ¢rziu medievalÄƒ.",
    "en": "Coca Castle is a striking brick fortress in Castile and LeÃ³n. With its moat and battlements, it showcases late medieval military architecture."
  },
  "facts": {
    "de": ["BerÃ¼hmt fÃ¼r seine Mischung aus Gotik und MudÃ©jar.", "Wurde im 15. Jahrhundert fÃ¼r die Familie Fonseca errichtet.", "GehÃ¶rt zu den besterhaltenen BacksteinschlÃ¶ssern Spaniens.", "Der Wassergraben ist ein markantes Verteidigungselement."],
    "hu": ["A gÃ³tika Ã©s a mudÃ©jar stÃ­lus keverÃ©kÃ©rÅ‘l hÃ­res.", "A 15. szÃ¡zadban a Fonseca csalÃ¡d szÃ¡mÃ¡ra Ã©pÃ¼lt.", "SpanyolorszÃ¡g egyik legjobb Ã¡llapotban fennmaradt tÃ©glavÃ¡ra.", "Az Ã©vÃ©r fontos vÃ©delmi elem."],
    "ro": ["Celebru pentru amestecul de gotic È™i mudÃ©jar.", "A fost construit Ã®n secolul al XV-lea pentru familia Fonseca.", "Este unul dintre cele mai bine pÄƒstrate castele de cÄƒrÄƒmidÄƒ din Spania.", "È˜anÈ›ul este un element defensiv important."],
    "en": ["Known for its mix of Gothic and MudÃ©jar styles.", "Built in the 15th century for the Fonseca family.", "One of Spain's best-preserved brick castles.", "The moat is a key defensive feature."]
  }
},
{
  "id": "es-alcazar-segovia",
  "type": "historical",
  "parent": "ES-CL",
  "coords": [-4.1392, 40.9501],
  "name": {"de": "Alcazar von Segovia", "hu": "Segoviai Alcazar", "ro": "Alcazarul din Segovia", "en": "Alcazar of Segovia"},
  "description": {
    "de": "Der Alcazar von Segovia erhebt sich dramatisch Ã¼ber dem Zusammenfluss zweier FlÃ¼sse. Die festungsartige KÃ¶nigsresidenz ist eines der bekanntesten Wahrzeichen Kastiliens und erinnert an ein MÃ¤rchenschloss.",
    "hu": "A segoviai Alcazar lÃ¡tvÃ¡nyosan magasodik kÃ©t folyÃ³ talÃ¡lkozÃ¡sÃ¡nÃ¡l. Az erÅ‘dszerÅ± kirÃ¡lyi rezidencia KasztÃ­lia egyik legismertebb jelkÃ©pe, Ã©s mesebeli kastÃ©lyra emlÃ©keztet.",
    "ro": "Alcazarul din Segovia se ridicÄƒ dramatic deasupra confluenÈ›ei a douÄƒ rÃ¢uri. ReÈ™edinÈ›a regalÄƒ cu aspect de fortÄƒreaÈ›Äƒ este unul dintre cele mai cunoscute simboluri ale Castiliei È™i aminteÈ™te de un castel de poveste.",
    "en": "The Alcazar of Segovia rises dramatically above the meeting point of two rivers. This fortress-like royal residence is one of Castile's best-known landmarks and looks like a fairytale castle."
  },
  "facts": {
    "de": ["Diente Ã¼ber Jahrhunderte als KÃ¶nigspalast.", "UNESCO-Weltkulturerbe der Altstadt von Segovia.", "Die markante Silhouette inspirierte Disney-Illustrationen.", "BerÃ¼hmt fÃ¼r die kegelfÃ¶rmigen TÃ¼rme."],
    "hu": ["Ã‰vszÃ¡zadokon Ã¡t kirÃ¡lyi palotakÃ©nt szolgÃ¡lt.", "Segovia Ã³vÃ¡rosÃ¡nak UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi rÃ©sze.", "Jellegzetes sziluettje Disney-ihletÃ©st is adott.", "KÃ©pÃ­zÅ± tornyairÃ³l hÃ­res."],
    "ro": ["A servit secole drept palat regal.", "Face parte din patrimoniul UNESCO al vechiului oraÈ™ Segovia.", "Silueta sa distinctivÄƒ a inspirat ilustraÈ›ii Disney.", "Este faimos pentru turnurile sale conice."],
    "en": ["Served as a royal palace for centuries.", "Part of the UNESCO-listed old town of Segovia.", "Its distinctive silhouette inspired Disney illustrations.", "Famous for its cone-shaped towers."]
  }
},
{
  "id": "es-palacio-real-madrid",
  "type": "historical",
  "parent": "ES-MD",
  "coords": [-3.7143, 40.4179],
  "name": {"de": "KÃ¶nigspalast Madrid", "hu": "Madridi kirÃ¡lyi palota", "ro": "Palatul Regal din Madrid", "en": "Royal Palace of Madrid"},
  "description": {
    "de": "Der KÃ¶nigspalast in Madrid ist die offizielle Residenz der spanischen Monarchie bei Zeremonien. Mit seinen reprÃ¤sentativen SÃ¤len und der groÃŸen Fassade zÃ¤hlt er zu den bedeutendsten PalÃ¤sten Europas.",
    "hu": "A madridi kirÃ¡lyi palota a spanyol monarchia hivatalos ceremoniÃ¡lis rezidenciÃ¡ja. PompÃ¡s termeivel Ã©s nagy homlokzatÃ¡val EurÃ³pa egyik legjelentÅ‘sebb palotÃ¡ja.",
    "ro": "Palatul Regal din Madrid este reÈ™edinÈ›a oficialÄƒ ceremonialÄƒ a monarhiei spaniole. Cu sÄƒlile sale reprezentative È™i faÈ›ada impunÄƒtoare, este unul dintre cele mai importante palate ale Europei.",
    "en": "The Royal Palace in Madrid is the ceremonial official residence of the Spanish monarchy. With its grand halls and imposing facade, it is one of Europe's most important palaces."
  },
  "facts": {
    "de": ["GrÃ¶ÃŸter KÃ¶nigspalast Westeuropas nach GrundflÃ¤che.", "Heute hauptsÃ¤chlich fÃ¼r Staatszeremonien genutzt.", "Mehr als 3.000 RÃ¤ume im gesamten Komplex.", "Die WachablÃ¶sung zieht viele Besucher an."],
    "hu": ["Nyugat-EurÃ³pa legnagyobb alapterÃ¼letÅ± kirÃ¡lyi palotÃ¡ja.", "Ma fÅ‘kÃ©nt Ã¡llami ceremÃ³niÃ¡kra hasznÃ¡ljÃ¡k.", "TÃ¶bb mint 3000 helyisÃ©g tartozik az egyÃ¼tteshez.", "Az Å‘rsÃ©gvÃ¡ltÃ¡s sok lÃ¡togatÃ³t vonz."],
    "ro": ["Cel mai mare palat regal din Europa de Vest ca suprafaÈ›Äƒ.", "AstÄƒzi este folosit mai ales pentru ceremonii de stat.", "Ansamblul are peste 3.000 de camere.", "Schimbarea gÄƒrzii atrage mulÈ›i vizitatori."],
    "en": ["The largest royal palace in Western Europe by floor area.", "Used mainly for state ceremonies today.", "The complex contains more than 3,000 rooms.", "The changing of the guard attracts many visitors."]
  }
},
{
  "id": "es-aljaferia-zaragoza",
  "type": "historical",
  "parent": "ES-AR",
  "coords": [-0.8939, 41.6499],
  "name": {"de": "Aljaferia Zaragoza", "hu": "Zaragozai Aljaferia", "ro": "Aljaferia din Zaragoza", "en": "Aljaferia Palace"},
  "description": {
    "de": "Die AljaferÃ­a in Zaragoza ist ein prachtvoller islamischer Palast, der spÃ¤ter zu einem kÃ¶niglichen Sitz umgebaut wurde. Er ist eines der wichtigsten Beispiele maurischer Kunst in Nordspanien.",
    "hu": "A zaragozai Aljaferia egy pompÃ¡s iszlÃ¡m palota, amelyet kÃ©sÅ‘bb kirÃ¡lyi szÃ©khellyÃ© Ã¡talakÃ­tottak. Ã‰szak-SpanyolorszÃ¡g egyik legfontosabb mÃ³r mÅ±vÃ©szeti emlÃ©ke.",
    "ro": "Aljaferia din Zaragoza este un palat islamic splendid, transformat ulterior Ã®n reÈ™edinÈ›Äƒ regalÄƒ. Este unul dintre cele mai importante exemple de artÄƒ maurÄƒ din nordul Spaniei.",
    "en": "The Aljaferia in Zaragoza is a splendid Islamic palace later adapted into a royal seat. It is one of the most important examples of Moorish art in northern Spain."
  },
  "facts": {
    "de": ["UNESCO-Weltkulturerbe als Teil der MudÃ©jar-Architektur von Aragon.", "Erbaut im 11. Jahrhundert.", "SpÃ¤ter Sitz der aragonesischen KÃ¶nige.", "Heute Sitz des Regionalparlaments von Aragon."],
    "hu": ["UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g AragÃ³nia mudÃ©jar Ã©pÃ­tÃ©szetÃ©nek rÃ©szekÃ©nt.", "A 11. szÃ¡zadban Ã©pÃ¼lt.", "KÃ©sÅ‘bb az aragÃ³niai kirÃ¡lyok szÃ©khelye lett.", "Ma AragÃ³nia regionÃ¡lis parlamentjÃ©nek ad otthont."],
    "ro": ["Patrimoniu Mondial UNESCO ca parte a arhitecturii mudÃ©jar din Aragon.", "Construit Ã®n secolul al XI-lea.", "A devenit ulterior reÈ™edinÈ›a regilor Aragonului.", "AstÄƒzi gÄƒzduieÈ™te parlamentul regional din Aragon."],
    "en": ["UNESCO World Heritage site as part of Aragon's MudÃ©jar architecture.", "Built in the 11th century.", "Later became the seat of the Kings of Aragon.", "Now houses the regional parliament of Aragon."]
  }
},
{
  "id": "es-teide",
  "type": "mountain",
  "parent": "ES-CN",
  "coords": [-16.6425, 28.2724],
  "name": {"de": "Teide", "hu": "Teide", "ro": "Teide", "en": "Teide"},
  "description": {
    "de": "Der Teide ist Spaniens hÃ¶chster Berg und ein aktiver Vulkan auf Teneriffa. Die markante Gipfellandschaft prÃ¤gt die Kanarischen Inseln und zieht Naturliebhaber und Wanderer gleichermaÃŸen an.",
    "hu": "A Teide SpanyolorszÃ¡g legmagasabb hegye Ã©s egy aktÃ­v vulkÃ¡n TenerifÃ©n. Jellegzetes csÃºcskÃ¶rnyezete meghatÃ¡rozza a KanÃ¡ri-szigetek kÃ©pÃ©t, Ã©s a termÃ©szetkedvelÅ‘ket Ã©s a tÃºrÃ¡zÃ³kat is vonzza.",
    "ro": "Teide este cel mai Ã®nalt munte din Spania È™i un vulcan activ din Tenerife. Peisajul sÄƒu vulcanic distinctiv defineÈ™te Insulele Canare È™i atrage deopotrivÄƒ iubitori ai naturii È™i drumeÈ›i.",
    "en": "Teide is Spain's highest mountain and an active volcano on Tenerife. Its striking summit landscape defines the Canary Islands and attracts both nature lovers and hikers."
  },
  "facts": {
    "de": ["Mit 3.718 Metern der hÃ¶chste Berg Spaniens.", "Teide-Nationalpark ist UNESCO-Welterbe.", "Einer der meistbesuchten Nationalparks Europas.", "Die Vulkanlandschaft wirkt teilweise mondÃ¤hnlich."],
    "hu": ["3718 mÃ©terrel SpanyolorszÃ¡g legmagasabb hegye.", "A Teide Nemzeti Park UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g.", "EurÃ³pa egyik leglÃ¡togatottabb nemzeti parkja.", "VulkÃ¡ni tÃ¡ja sokszor holdbelinek hat."],
    "ro": ["Cu 3.718 metri, este cel mai Ã®nalt munte din Spania.", "Parcul NaÈ›ional Teide este patrimoniu UNESCO.", "Unul dintre cele mai vizitate parcuri naÈ›ionale din Europa.", "Peisajul vulcanic pare uneori lunar."],
    "en": ["At 3,718 meters, it is Spain's highest mountain.", "Teide National Park is a UNESCO World Heritage site.", "One of Europe's most visited national parks.", "Its volcanic landscape can look moon-like."]
  }
},
{
  "id": "es-cabo-de-gata",
  "type": "landmark",
  "parent": "ES-AN",
  "coords": [-2.188, 36.856],
  "name": {"de": "Cabo de Gata", "hu": "Cabo de Gata", "ro": "Cabo de Gata", "en": "Cabo de Gata"},
  "description": {
    "de": "Cabo de Gata ist ein geschÃ¼tztes KÃ¼sten- und Naturgebiet in AlmerÃ­a. Die trockene Vulkanlandschaft trifft dort auf Buchten, Klippen und das klare Mittelmeer.",
    "hu": "A Cabo de Gata egy vÃ©dett parti Ã©s termÃ©szeti terÃ¼let AlmerÃ­Ã¡ban. A szÃ¡raz vulkÃ¡ni tÃ¡j itt Ã¶blÃ¶kkel, sziklÃ¡kkal Ã©s a tiszta FÃ¶ldkÃ¶zi-tengerrel talÃ¡lkozik.",
    "ro": "Cabo de Gata este o zonÄƒ costierÄƒ È™i naturalÄƒ protejatÄƒ din AlmerÃ­a. Peisajul vulcanic arid se Ã®ntÃ¢lneÈ™te aici cu golfuri, stÃ¢nci È™i Marea MediteranÄƒ limpede.",
    "en": "Cabo de Gata is a protected coastal and natural area in AlmerÃ­a. Its dry volcanic landscape meets coves, cliffs, and the clear Mediterranean Sea."
  },
  "facts": {
    "de": ["Teil des Naturparks Cabo de Gata-NÃ­jar.", "Eine der trockensten Regionen Europas.", "Beliebt fÃ¼r unberÃ¼hrte StrÃ¤nde und Schnorcheln.", "Die Landschaft diente oft als Filmkulisse."],
    "hu": ["A Cabo de Gata-NÃ­jar termÃ©szeti park rÃ©sze.", "EurÃ³pa egyik legszÃ¡razabb rÃ©giÃ³ja.", "Ã‰rintetlen strandjai Ã©s snorkelezÃ©si helyei nÃ©pszerÅ±ek.", "A tÃ¡j gyakori filmforgatÃ³helyszÃ­n."],
    "ro": ["Face parte din Parcul Natural Cabo de Gata-NÃ­jar.", "Una dintre cele mai aride regiuni din Europa.", "PopularÄƒ pentru plajele sÄƒlbatice È™i snorkeling.", "Peisajul a fost adesea folosit ca platou de filmare."],
    "en": ["Part of Cabo de Gata-NÃ­jar Natural Park.", "One of the driest regions in Europe.", "Popular for unspoiled beaches and snorkeling.", "The landscape has often been used as a film set."]
  }
},
{
  "id": "es-tabernas-desert",
  "type": "landmark",
  "parent": "ES-AN",
  "coords": [-2.456, 37.005],
  "name": {"de": "Tabernas WÃ¼ste", "hu": "Tabernas sivatag", "ro": "DeÈ™ertul Tabernas", "en": "Tabernas Desert"},
  "description": {
    "de": "Die Tabernas-WÃ¼ste in Andalusien ist Europas einzige echte HalbwÃ¼ste. Mit ihren trockenen Schluchten und kahlen HÃ¼geln erinnert sie stark an klassische Westernlandschaften.",
    "hu": "Az andalÃºziai Tabernas sivatag EurÃ³pa egyetlen igazi fÃ©lsivataga. SzÃ¡raz vÃ¶lgyeivel Ã©s kopasz dombjaival erÅ‘sen emlÃ©keztet a klasszikus westernek tÃ¡jaira.",
    "ro": "DeÈ™ertul Tabernas din Andaluzia este singurul semi-deÈ™ert adevÄƒrat al Europei. Cu vÄƒile sale uscate È™i colinele golaÈ™e, seamÄƒnÄƒ mult cu peisajele western clasice.",
    "en": "The Tabernas Desert in Andalusia is Europe's only true semi-desert. Its dry gullies and barren hills strongly resemble classic Western film landscapes."
  },
  "facts": {
    "de": ["Sehr trockenes Klima mit wenigen NiederschlÃ¤gen.", "BerÃ¼hmt als Drehort fÃ¼r Westernfilme.", "Teil der Provinz AlmerÃ­a.", "Die Vegetation ist besonders spÃ¤rlich."],
    "hu": ["Nagyon szÃ¡raz Ã©ghajlat, kevÃ©s csapadÃ©kkal.", "Westernek hÃ­res forgatÃ³helyszÃ­ne.", "AlmerÃ­a tartomÃ¡ny rÃ©sze.", "A nÃ¶vÃ©nyzet rendkÃ­vÃ¼l szÃ³rvÃ¡nyos."],
    "ro": ["ClimÄƒ foarte uscatÄƒ, cu puÈ›ine precipitaÈ›ii.", "Cunoscut ca loc de filmare pentru westernuri.", "Face parte din provincia AlmerÃ­a.", "VegetaÈ›ia este foarte rarÄƒ."],
    "en": ["Very dry climate with little rainfall.", "Famous as a filming location for Westerns.", "Part of the province of AlmerÃ­a.", "Vegetation is extremely sparse."]
  }
},
{
  "id": "es-playa-de-las-catedrales",
  "type": "landmark",
  "parent": "ES-GA",
  "coords": [-7.153, 43.553],
  "name": {"de": "Strand der Kathedralen", "hu": "A katedrÃ¡lisok strandja", "ro": "Plaja Catedralei", "en": "Cathedrals Beach"},
  "description": {
    "de": "Die Playa de las Catedrales in Galicien ist fÃ¼r ihre natÃ¼rlichen FelsbÃ¶gen und HÃ¶hlen bekannt. Bei Ebbe lÃ¤sst sich die beeindruckende SteilkÃ¼ste besonders gut zu FuÃŸ erkunden.",
    "hu": "A galiciai Playa de las Catedrales termÃ©szetes sziklaÃ­veirÅ‘l Ã©s barlangjairÃ³l hÃ­res. ApÃ¡ly idejÃ©n a lenyÅ±gÃ¶zÅ‘ sziklÃ¡s part kÃ¼lÃ¶nÃ¶sen jÃ³l bejÃ¡rhatÃ³ gyalog.",
    "ro": "Playa de las Catedrales din Galicia este cunoscutÄƒ pentru arcadele naturale de piatrÄƒ È™i peÈ™teri. La reflux, coasta impresionantÄƒ poate fi exploratÄƒ foarte bine pe jos.",
    "en": "Playa de las Catedrales in Galicia is known for its natural rock arches and caves. At low tide, the impressive cliff coast can be explored especially well on foot."
  },
  "facts": {
    "de": ["Der Name stammt von den kathedralenartigen Felsformationen.", "Am besten bei Ebbe zu besuchen.", "Beliebtes Naturziel an der galicischen KÃ¼ste.", "Teil der Gemeinde Ribadeo."],
    "hu": ["A nÃ©v a katedrÃ¡lisszerÅ± sziklaalakzatokbÃ³l ered.", "ApÃ¡ly idejÃ©n a leglÃ¡tvÃ¡nyosabb.", "NÃ©pszerÅ± termÃ©szeti cÃ©lpont GalÃ­cia partjainÃ¡l.", "Ribadeo telepÃ¼lÃ©s rÃ©sze."],
    "ro": ["Numele vine de la formaÈ›iunile stÃ¢ncoase asemÄƒnÄƒtoare catedralelor.", "Se viziteazÄƒ cel mai bine la reflux.", "DestinaÈ›ie naturalÄƒ popularÄƒ pe coasta Galiciei.", "Face parte din comuna Ribadeo."],
    "en": ["The name comes from cathedral-like rock formations.", "Best visited at low tide.", "A popular nature destination on the Galician coast.", "Part of the municipality of Ribadeo."]
  }
},
{
  "id": "es-donana-national-park",
  "type": "landmark",
  "parent": "ES-AN",
  "coords": [-6.433, 37.05],
  "name": {"de": "DoÃ±ana Nationalpark", "hu": "DoÃ±ana Nemzeti Park", "ro": "Parcul NaÈ›ional DoÃ±ana", "en": "DoÃ±ana National Park"},
  "description": {
    "de": "Der DoÃ±ana-Nationalpark ist eines der wichtigsten Feuchtgebiete Europas. Seine Marschen, DÃ¼nen und SÃ¼mpfe sind ein SchlÃ¼sselraum fÃ¼r ZugvÃ¶gel und bedrohte Arten.",
    "hu": "A DoÃ±ana Nemzeti Park EurÃ³pa egyik legfontosabb vizes Ã©lÅ‘helye. Mocsarai, dÃ¼nÃ©i Ã©s Ã¡rtÃ©rei kulcsfontossÃ¡gÃºak a vonulÃ³ madarak Ã©s a veszÃ©lyeztetett fajok szÃ¡mÃ¡ra.",
    "ro": "Parcul NaÈ›ional DoÃ±ana este una dintre cele mai importante zone umede din Europa. MlaÈ™tinile, dunele È™i zonele inundabile sunt esenÈ›iale pentru pÄƒsÄƒrile migratoare È™i speciile ameninÈ›ate.",
    "en": "DoÃ±ana National Park is one of Europe's most important wetlands. Its marshes, dunes, and swamps are crucial for migratory birds and endangered species."
  }
},
{
  "id": "es-guggenheim-bilbao",
  "type": "landmark",
  "parent": "ES-PV",
  "coords": [-2.9349, 43.2686],
  "name": {"de": "Guggenheim Bilbao", "hu": "Guggenheim Bilbao", "ro": "Guggenheim Bilbao", "en": "Guggenheim Bilbao"},
  "description": {
    "de": "Das Guggenheim Museum in Bilbao ist ein Markenzeichen moderner Architektur und Kunst. Das futuristische TitangebÃ¤ude hat die Stadtsilhouette und das internationale Image Bilbaos grundlegend verÃ¤ndert.",
    "hu": "A bilbaÃ³i Guggenheim MÃºzeum a modern Ã©pÃ­tÃ©szet Ã©s mÅ±vÃ©szet jelkÃ©pe. A futurisztikus titÃ¡n Ã©pÃ¼let alapjaiban vÃ¡ltoztatta meg Bilbao arculatÃ¡t Ã©s nemzetkÃ¶zi megÃ­tÃ©lÃ©sÃ©t.",
    "ro": "Muzeul Guggenheim din Bilbao este un simbol al arhitecturii È™i artei moderne. ClÄƒdirea futuristÄƒ din titan a schimbat radical silueta oraÈ™ului È™i imaginea internaÈ›ionalÄƒ a Bilbao.",
    "en": "The Guggenheim Museum in Bilbao is a symbol of modern architecture and art. Its futuristic titanium building fundamentally changed Bilbao's skyline and international image."
  },
  "facts": {
    "de": ["Entworfen von Frank Gehry.", "ErÃ¶ffnet 1997.", "Gilt als SchlÃ¼sselbeispiel des Bilbao-Effekts.", "Ein Wahrzeichen am Fluss NerviÃ³n."],
    "hu": ["Frank Gehry tervezte.", "1997-ben nyÃ­lt meg.", "A Bilbao-hatÃ¡s tankÃ¶nyvi pÃ©ldÃ¡ja.", "A NerviÃ³n folyÃ³ partjÃ¡nak jelkÃ©pe."],
    "ro": ["Proiectat de Frank Gehry.", "Deschis Ã®n 1997.", "Considerat un exemplu-cheie al 'efectului Bilbao'.", "Un simbol de pe malul rÃ¢ului NerviÃ³n."],
    "en": ["Designed by Frank Gehry.", "Opened in 1997.", "A textbook example of the Bilbao effect.", "A landmark on the NerviÃ³n River."]
  }
},
{
  "id": "es-plaza-mayor-madrid",
  "type": "landmark",
  "parent": "ES-MD",
  "coords": [-3.7074, 40.4154],
  "name": {"de": "Plaza Mayor Madrid", "hu": "Madridi Plaza Mayor", "ro": "Plaza Mayor Madrid", "en": "Plaza Mayor Madrid"},
  "description": {
    "de": "Die Plaza Mayor ist Madrids berÃ¼hmter historischer Hauptplatz. Ihre geschlossene Arkadenform und die langen Fassaden machen sie zu einem zentralen Treffpunkt der Stadt.",
    "hu": "A Plaza Mayor Madrid hÃ­res tÃ¶rtÃ©nelmi fÅ‘tere. ZÃ¡rt Ã¡rkÃ¡dsora Ã©s hosszÃº homlokzatai a vÃ¡ros egyik kÃ¶zponti talÃ¡lkozÃ³helyÃ©vÃ© teszik.",
    "ro": "Plaza Mayor este celebra piaÈ›Äƒ istoricÄƒ principalÄƒ a Madridului. Forma sa Ã®nchisÄƒ cu arcade È™i faÈ›adele lungi o fac un punct central de Ã®ntÃ¢lnire al oraÈ™ului.",
    "en": "Plaza Mayor is Madrid's famous historic main square. Its enclosed arcade form and long facades make it a central meeting point in the city."
  },
  "facts": {
    "de": ["Entstand im 17. Jahrhundert.", "War Schauplatz von MÃ¤rkten, Festen und Ã¶ffentlichen Ereignissen.", "Umgeben von dreigeschossigen WohnhÃ¤usern.", "Eine der bekanntesten Postkartenansichten Madrids."],
    "hu": ["A 17. szÃ¡zadban alakult ki.", "Piacok, Ã¼nnepsÃ©gek Ã©s nyilvÃ¡nos esemÃ©nyek helyszÃ­ne volt.", "HÃ¡romszintes lakÃ³hÃ¡zak veszik kÃ¶rÃ¼l.", "Madrid egyik legismertebb kÃ©peslapmotÃ­vuma."],
    "ro": ["S-a format Ã®n secolul al XVII-lea.", "A fost scena pieÈ›elor, festivalurilor È™i evenimentelor publice.", "Este Ã®nconjuratÄƒ de clÄƒdiri rezidenÈ›iale cu trei etaje.", "Una dintre cele mai cunoscute imagini de carte poÈ™talÄƒ ale Madridului."],
    "en": ["Dates back to the 17th century.", "Hosted markets, festivals, and public events.", "Surrounded by three-story residential buildings.", "One of Madrid's most iconic postcard views."]
  }
},
{
  "id": "es-mezquita-cordoba",
  "type": "historical",
  "parent": "ES-AN",
  "coords": [-4.7783, 37.8779],
  "name": {"de": "Mezquita-Catedral von Cordoba", "hu": "Cordobai Mezquita-KatedrÃ¡lis", "ro": "Mezquita-Catedral din Cordoba", "en": "Mezquita-Catedral of Cordoba"},
  "description": {
    "de": "Die Mezquita-Catedral von Cordoba vereint eine ehemalige Moschee und eine christliche Kathedrale in einem einzigartigen Bauwerk. Die rot-weiÃŸen BÃ¶gen im Inneren gehÃ¶ren zu den berÃ¼hmtesten Bildern Spaniens.",
    "hu": "A cordobai Mezquita-KatedrÃ¡lis egykori mecsetet Ã©s keresztÃ©ny katedrÃ¡list egyesÃ­t egyedÃ¼lÃ¡llÃ³ Ã©pÃ­tmÃ©nyben. A belsÅ‘ tÃ©r vÃ¶rÃ¶s-fehÃ©r Ã­vei SpanyolorszÃ¡g legismertebb kÃ©pei kÃ¶zÃ© tartoznak.",
    "ro": "Mezquita-Catedral din Cordoba uneÈ™te Ã®ntr-o singurÄƒ clÄƒdire unicÄƒ o fostÄƒ moschee È™i o catedralÄƒ creÈ™tinÄƒ. Arcadele roÈ™u-alb din interior sunt printre cele mai faimoase imagini din Spania.",
    "en": "The Mezquita-Catedral of Cordoba combines a former mosque and a Christian cathedral in one unique building. The red-and-white arches inside are among Spain's most famous images."
  },
  "facts": {
    "de": ["UNESCO-Weltkulturerbe.", "UrsprÃ¼nglich im 8. Jahrhundert als Moschee errichtet.", "SpÃ¤ter zur Kathedrale umgewandelt.", "BerÃ¼hmt fÃ¼r die Hypostylhalle mit hunderten SÃ¤ulen."],
    "hu": ["UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g.", "Eredetileg a 8. szÃ¡zadban mecsetkÃ©nt Ã©pÃ¼lt.", "KÃ©sÅ‘bb katedrÃ¡lissÃ¡ alakÃ­tottÃ¡k.", "HÃ­res a szÃ¡mtalan oszlopbÃ³l Ã¡llÃ³ csarnokrÃ³l."],
    "ro": ["Patrimoniu Mondial UNESCO.", "ConstruitÄƒ iniÈ›ial Ã®n secolul al VIII-lea ca moschee.", "Ulterior transformatÄƒ Ã®n catedralÄƒ.", "FaimoasÄƒ pentru sala hipostilÄƒ cu sute de coloane."],
    "en": ["UNESCO World Heritage site.", "Originally built as a mosque in the 8th century.", "Later converted into a cathedral.", "Famous for its hypostyle hall with hundreds of columns."]
  }
},
{
  "id": "es-santiago-cathedral",
  "type": "historical",
  "parent": "ES-GA",
  "coords": [-8.5457, 42.8805],
  "name": {"de": "Kathedrale von Santiago de Compostela", "hu": "Santiago de Compostela katedrÃ¡lisa", "ro": "Catedrala din Santiago de Compostela", "en": "Cathedral of Santiago de Compostela"},
  "description": {
    "de": "Die Kathedrale von Santiago de Compostela ist das Ziel des berÃ¼hmten Jakobswegs. Als spirituelles Zentrum Galiciens prÃ¤gt sie die Altstadt und das Pilgerleben der Stadt.",
    "hu": "A Santiago de Compostela-i katedrÃ¡lis a hÃ­rÃ©s Szent Jakab-Ãºt cÃ©lpontja. GalÃ­cia spirituÃ¡lis kÃ¶zpontjakÃ©nt meghatÃ¡rozza az Ã³vÃ¡rost Ã©s a zÃ¡ndokÃ©letet.",
    "ro": "Catedrala din Santiago de Compostela este destinaÈ›ia celebrului Camino de Santiago. Ca centru spiritual al Galiciei, dominÄƒ centrul vechi È™i viaÈ›a pelerinilor.",
    "en": "The Cathedral of Santiago de Compostela is the destination of the famous Camino de Santiago. As Galicia's spiritual center, it shapes the old town and pilgrim life."
  },
  "facts": {
    "de": ["Ziel des Jakobswegs fÃ¼r Pilger aus ganz Europa.", "UNESCO-Weltkulturerbe der Altstadt.", "Gilt als GrabstÃ¤tte des Apostels Jakobus.", "Die barocke Fassade prÃ¤gt das Stadtbild."],
    "hu": ["EgÃ©sz EurÃ³pÃ¡bÃ³l Ã©rkezÅ‘ zÃ¡ndokok cÃ©lpontja a Szent Jakab-Ãºton.", "Az Ã³vÃ¡ros UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g.", "Az apostol Jakab sÃ­rhelyÃ©nek tartjÃ¡k.", "A barokk homlokzat meghatÃ¡rozza a vÃ¡roskÃ©pet."],
    "ro": ["DestinaÈ›ie pentru pelerini din Ã®ntreaga EuropÄƒ pe Camino de Santiago.", "Patrimoniu UNESCO al centrului istoric.", "Este consideratÄƒ locul de Ã®nmormÃ¢ntare al apostolului Iacob.", "FaÈ›ada barocÄƒ dominÄƒ imaginea oraÈ™ului."],
    "en": ["A destination for pilgrims from across Europe on the Camino de Santiago.", "UNESCO World Heritage site for the old town.", "Regarded as the burial place of the Apostle James.", "Its Baroque facade dominates the cityscape."]
  }
}
];
// â”€â”€ Spain Admin-2 province POIs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// One POI per province (50 total), parent = autonomous community CCAA code.
export const spainProvinces: POI[] = [
  // AndalucÃ­a (ES-AN) â€” 8 provinces
  { id: "ES-AL", type: "region", parent: "ES-AN", coords: [-2.4598, 37.1825], name: { de: "AlmerÃ­a", hu: "AlmerÃ­a", ro: "Almeria", en: "AlmerÃ­a" }, description: { de: "WÃ¼stenlandschaft im SÃ¼dosten Andalusiens.", hu: "Sivatagi tÃ¡j AndalÃºzia dÃ©lkeleti rÃ©szÃ©n.", ro: "Peisaj deÈ™ertic Ã®n sud-estul Andaluziei.", en: "Desert landscape in southeastern Andalusia." } },
  { id: "ES-CA", type: "region", parent: "ES-AN", coords: [-5.9845, 36.5271], name: { de: "CÃ¡diz", hu: "CÃ¡diz", ro: "Cadiz", en: "CÃ¡diz" }, description: { de: "KÃ¼stenprovinz mit historischer Hafenstadt.", hu: "Tengerparti tartomÃ¡ny tÃ¶rtÃ©nelmi kikÃ¶tÅ‘vÃ¡rossal.", ro: "Provincie costierÄƒ cu oraÈ™-port istoric.", en: "Coastal province with a historic port city." } },
  { id: "ES-CO", type: "region", parent: "ES-AN", coords: [-4.7794, 37.8927], name: { de: "CÃ³rdoba", hu: "CÃ³rdoba", ro: "CÃ³rdoba", en: "CÃ³rdoba" }, description: { de: "Heimat der berÃ¼hmten Mezquita.", hu: "A famous Mezquita otthona.", ro: "Patria faimoasei Mezquita.", en: "Home of the famous Mezquita." } },
  { id: "ES-GR", type: "region", parent: "ES-AN", coords: [-3.5986, 37.1773], name: { de: "Granada", hu: "Granada", ro: "Granada", en: "Granada" }, description: { de: "Provinz mit der Alhambra.", hu: "Az Alhambra tartomÃ¡nya.", ro: "Provincie cu Alhambra.", en: "Province home to the Alhambra." } },
  { id: "ES-H",  type: "region", parent: "ES-AN", coords: [-6.9447, 37.2614], name: { de: "Huelva", hu: "Huelva", ro: "Huelva", en: "Huelva" }, description: { de: "Ausgangspunkt von Kolumbus' Reise.", hu: "Kolumbusz ÃºtjÃ¡nak kiindulÃ³pontja.", ro: "Punctul de plecare al lui Columb.", en: "Starting point of Columbus's voyage." } },
  { id: "ES-J",  type: "region", parent: "ES-AN", coords: [-3.7905, 37.7796], name: { de: "JaÃ©n", hu: "JaÃ©n", ro: "JaÃ©n", en: "JaÃ©n" }, description: { de: "WeltgrÃ¶ÃŸter OlivenÃ¶lproduzent.", hu: "A vilÃ¡g legnagyobb olÃ­vaolaj-termelÅ‘je.", ro: "Cel mai mare producÄƒtor de ulei de mÄƒsline din lume.", en: "World's largest olive oil producer." } },
  { id: "ES-MA", type: "region", parent: "ES-AN", coords: [-4.4214, 36.7213], name: { de: "MÃ¡laga", hu: "MÃ¡laga", ro: "Malaga", en: "MÃ¡laga" }, description: { de: "Geburtsort Picassos und Costa del Sol.", hu: "Picasso szÃ¼lÅ‘helye Ã©s a Costa del Sol.", ro: "Locul naÈ™terii lui Picasso È™i Costa del Sol.", en: "Birthplace of Picasso and the Costa del Sol." } },
  { id: "ES-SE", type: "region", parent: "ES-AN", coords: [-5.9845, 37.3891], name: { de: "Sevilla", hu: "Sevilla", ro: "Sevilla", en: "Sevilla" }, description: { de: "Hauptstadt Andalusiens mit Kathedrale und AlcÃ¡zar.", hu: "AndalÃºzia fÅ‘vÃ¡rosa katedrÃ¡lissal Ã©s AlcÃ¡zarral.", ro: "Capitala Andaluziei cu catedrala È™i AlcÃ¡zar.", en: "Capital of Andalusia with its cathedral and AlcÃ¡zar." } },
  // AragÃ³n (ES-AR) â€” 3 provinces
  { id: "ES-HU", type: "region", parent: "ES-AR", coords: [-0.4083, 42.1401], name: { de: "Huesca", hu: "Huesca", ro: "Huesca", en: "Huesca" }, description: { de: "PyrenÃ¤enprovinz im Norden AragÃ³ns.", hu: "Pireneusi tartomÃ¡ny AragÃ³nia Ã©szaki rÃ©szÃ©n.", ro: "Provincie pireneeanÄƒ Ã®n nordul Aragonului.", en: "Pyrenean province in northern Aragon." } },
  { id: "ES-TE", type: "region", parent: "ES-AR", coords: [-1.1065, 40.3456], name: { de: "Teruel", hu: "Teruel", ro: "Teruel", en: "Teruel" }, description: { de: "Bekannt fÃ¼r MudÃ©jar-Architektur.", hu: "MudÃ©jar-Ã©pÃ­tÃ©szetÃ©rÅ‘l ismert.", ro: "Cunoscut pentru arhitectura mudÃ©jar.", en: "Known for its MudÃ©jar architecture." } },
  { id: "ES-Z",  type: "region", parent: "ES-AR", coords: [-0.8773, 41.6561], name: { de: "Zaragoza", hu: "Zaragoza", ro: "Zaragoza", en: "Zaragoza" }, description: { de: "Hauptprovinz AragÃ³ns mit der Basilika del Pilar.", hu: "AragÃ³nia fÅ‘ tartomÃ¡nya a Pilar-bazilikÃ¡val.", ro: "Provincia principalÄƒ a Aragonului cu Basilica del Pilar.", en: "Main province of Aragon with the Basilica del Pilar." } },
  // Canarias (ES-CN) â€” 2 provinces
  { id: "ES-GC", type: "region", parent: "ES-CN", coords: [-15.5701, 28.1235], name: { de: "Las Palmas", hu: "Las Palmas", ro: "Las Palmas", en: "Las Palmas" }, description: { de: "Ã–stliche Kanarische Inseln.", hu: "Keleti KanÃ¡ri-szigetek.", ro: "Insulele Canare de est.", en: "Eastern Canary Islands." } },
  { id: "ES-TF", type: "region", parent: "ES-CN", coords: [-16.2519, 28.4698], name: { de: "Santa Cruz de Tenerife", hu: "Santa Cruz de Tenerife", ro: "Santa Cruz de Tenerife", en: "Santa Cruz de Tenerife" }, description: { de: "Westliche Kanarische Inseln mit dem Teide.", hu: "Nyugati KanÃ¡ri-szigetek a Teide vulkÃ¡nnal.", ro: "Insulele Canare de vest cu vulcanul Teide.", en: "Western Canary Islands with Mount Teide." } },
  // Castilla-La Mancha (ES-CM) â€” 5 provinces
  { id: "ES-AB", type: "region", parent: "ES-CM", coords: [-1.8654, 38.9942], name: { de: "Albacete", hu: "Albacete", ro: "Albacete", en: "Albacete" }, description: { de: "Bekannt fÃ¼r Messerherstellung.", hu: "KÃ©skÃ©szÃ­tÃ©sÃ©rÅ‘l ismert.", ro: "Renumit pentru fabricarea cuÈ›itelor.", en: "Known for its knife-making industry." } },
  { id: "ES-CR", type: "region", parent: "ES-CM", coords: [-3.9272, 38.9848], name: { de: "Ciudad Real", hu: "Ciudad Real", ro: "Ciudad Real", en: "Ciudad Real" }, description: { de: "Herz der La-Mancha-Ebene.", hu: "La Mancha sÃ­ksÃ¡gÃ¡nak szÃ­ve.", ro: "Inima cÃ¢mpiei La Mancha.", en: "Heart of the La Mancha plain." } },
  { id: "ES-CU", type: "region", parent: "ES-CM", coords: [-2.1319, 40.0699], name: { de: "Cuenca", hu: "Cuenca", ro: "Cuenca", en: "Cuenca" }, description: { de: "UNESCO-Altstadt mit hÃ¤ngenden HÃ¤usern.", hu: "UNESCO Ã³vÃ¡ros fÃ¼ggÅ‘ hÃ¡zakkal.", ro: "Centrul vechi UNESCO cu casele suspendate.", en: "UNESCO old town with hanging houses." } },
  { id: "ES-GU", type: "region", parent: "ES-CM", coords: [-2.6325, 40.6321], name: { de: "Guadalajara", hu: "Guadalajara", ro: "Guadalajara", en: "Guadalajara" }, description: { de: "Provinz Ã¶stlich von Madrid.", hu: "TartomÃ¡ny MadridtÃ³l keletre.", ro: "Provincie la est de Madrid.", en: "Province east of Madrid." } },
  { id: "ES-TO", type: "region", parent: "ES-CM", coords: [-3.9272, 39.8628], name: { de: "Toledo", hu: "Toledo", ro: "Toledo", en: "Toledo" }, description: { de: "Historische Kaiserstadt mit gotischer Kathedrale.", hu: "TÃ¶rtÃ©nelmi csÃ¡szÃ¡rvÃ¡ros gÃ³tikus katedrÃ¡lissal.", ro: "OraÈ™ imperial istoric cu catedralÄƒ goticÄƒ.", en: "Historic imperial city with Gothic cathedral." } },
  // Castilla y LeÃ³n (ES-CL) â€” 9 provinces
  { id: "ES-AV", type: "region", parent: "ES-CL", coords: [-4.6976, 40.6566], name: { de: "Ãvila", hu: "Ãvila", ro: "Avila", en: "Ãvila" }, description: { de: "Komplett erhaltene mittelalterliche Stadtmauer.", hu: "Teljesen fennmaradt kÃ¶zÃ©pkori vÃ¡rosfal.", ro: "Zid medieval complet conservat.", en: "Completely preserved medieval city walls." } },
  { id: "ES-BU", type: "region", parent: "ES-CL", coords: [-3.7038, 42.3440], name: { de: "Burgos", hu: "Burgos", ro: "Burgos", en: "Burgos" }, description: { de: "Gotische Kathedrale und Heimat El Cids.", hu: "GÃ³tikus katedrÃ¡lis Ã©s El Cid szÃ¼lÅ‘vÃ¡rosa.", ro: "Catedrala goticÄƒ È™i patria lui El Cid.", en: "Gothic cathedral and birthplace of El Cid." } },
  { id: "ES-LE", type: "region", parent: "ES-CL", coords: [-5.5597, 42.5987], name: { de: "LeÃ³n", hu: "LeÃ³n", ro: "LeÃ³n", en: "LeÃ³n" }, description: { de: "Mittelalterliche KÃ¶nigsstadt im Nordwesten.", hu: "KÃ¶zÃ©pkori kirÃ¡lyvÃ¡ros az Ã©szaknyugati rÃ©szen.", ro: "OraÈ™ regal medieval Ã®n nord-vest.", en: "Medieval royal city in the northwest." } },
  { id: "ES-P",  type: "region", parent: "ES-CL", coords: [-4.5288, 42.0100], name: { de: "Palencia", hu: "Palencia", ro: "Palencia", en: "Palencia" }, description: { de: "Kleine Provinz mit romanischer Kunst.", hu: "Kis tartomÃ¡ny romÃ¡n stÃ­lusÃº mÅ±vÃ©szettel.", ro: "Provincie micÄƒ cu artÄƒ romanicÄƒ.", en: "Small province with Romanesque art." } },
  { id: "ES-SA", type: "region", parent: "ES-CL", coords: [-5.6640, 40.9701], name: { de: "Salamanca", hu: "Salamanca", ro: "Salamanca", en: "Salamanca" }, description: { de: "UniversitÃ¤t und UNESCO-Altstadt.", hu: "Egyetemi vÃ¡ros Ã©s UNESCO Ã³vÃ¡ros.", ro: "Universitate È™i centru vechi UNESCO.", en: "University city and UNESCO old town." } },
  { id: "ES-SG", type: "region", parent: "ES-CL", coords: [-4.1180, 40.9429], name: { de: "Segovia", hu: "Segovia", ro: "Segovia", en: "Segovia" }, description: { de: "RÃ¶misches AquÃ¤dukt und AlcÃ¡zar.", hu: "RÃ³mai vÃ­zvezetÃ©k Ã©s AlcÃ¡zar.", ro: "Apeduct roman È™i AlcÃ¡zar.", en: "Roman aqueduct and AlcÃ¡zar." } },
  { id: "ES-SO", type: "region", parent: "ES-CL", coords: [-2.4652, 41.7640], name: { de: "Soria", hu: "Soria", ro: "Soria", en: "Soria" }, description: { de: "DÃ¼nnstbesiedelte Provinz mit romanischem Erbe.", hu: "A legelmaradottabb tartomÃ¡ny romÃ¡n Ã¶rÃ¶ksÃ©ggel.", ro: "Provincie slab populatÄƒ cu moÈ™tenire romanicÄƒ.", en: "Sparsely populated province with Romanesque heritage." } },
  { id: "ES-VA", type: "region", parent: "ES-CL", coords: [-4.7245, 41.6523], name: { de: "Valladolid", hu: "Valladolid", ro: "Valladolid", en: "Valladolid" }, description: { de: "Einstige Hauptstadt Spaniens.", hu: "SpanyolorszÃ¡g egykori fÅ‘vÃ¡rosa.", ro: "Fosta capitalÄƒ a Spaniei.", en: "Former capital of Spain." } },
  { id: "ES-ZA", type: "region", parent: "ES-CL", coords: [-5.7448, 41.5034], name: { de: "Zamora", hu: "Zamora", ro: "Zamora", en: "Zamora" }, description: { de: "Romanische Kathedrale am Duero.", hu: "Roman stÃ­lusÃº katedrÃ¡lis a Duero mentÃ©n.", ro: "CatedralÄƒ romanicÄƒ pe Duero.", en: "Romanesque cathedral on the Duero." } },
  // CataluÃ±a (ES-CT) â€” 4 provinces
  { id: "ES-B",  type: "region", parent: "ES-CT", coords: [2.1734, 41.3851], name: { de: "Barcelona", hu: "Barcelona", ro: "Barcelona", en: "Barcelona" }, description: { de: "Metropolprovinz mit GaudÃ­s Meisterwerken.", hu: "NagyvÃ¡rosi tartomÃ¡ny GaudÃ­ remekmÅ±veivel.", ro: "Provincie metropolitanÄƒ cu capodoperele lui GaudÃ­.", en: "Metropolitan province with GaudÃ­'s masterpieces." } },
  { id: "ES-GI", type: "region", parent: "ES-CT", coords: [2.8214, 41.9794], name: { de: "Girona", hu: "Girona", ro: "Girona", en: "Girona" }, description: { de: "Grenzprovinz zu Frankreich mit Costa Brava.", hu: "FranciaorszÃ¡ggal hatÃ¡ros tartomÃ¡ny a Costa BravÃ¡val.", ro: "Provincie la frontiera cu FranÈ›a, cu Costa Brava.", en: "Border province with France and the Costa Brava." } },
  { id: "ES-L",  type: "region", parent: "ES-CT", coords: [0.6273, 41.6175], name: { de: "Lleida", hu: "Lleida", ro: "Lleida", en: "Lleida" }, description: { de: "Inland-PyrenÃ¤enprovinz.", hu: "BelsÅ‘ pireneusi tartomÃ¡ny.", ro: "Provincie interioarÄƒ pireneeanÄƒ.", en: "Inland Pyrenean province." } },
  { id: "ES-T",  type: "region", parent: "ES-CT", coords: [1.2493, 41.1189], name: { de: "Tarragona", hu: "Tarragona", ro: "Tarragona", en: "Tarragona" }, description: { de: "RÃ¶mische Ruinen und Costa Daurada.", hu: "RÃ³mai romok Ã©s a Costa Daurada.", ro: "Ruine romane È™i Costa Daurada.", en: "Roman ruins and the Costa Daurada." } },
  // Extremadura (ES-EX) â€” 2 provinces
  { id: "ES-BA", type: "region", parent: "ES-EX", coords: [-6.9706, 38.8794], name: { de: "Badajoz", hu: "Badajoz", ro: "Badajoz", en: "Badajoz" }, description: { de: "GrÃ¶ÃŸte Provinz Spaniens.", hu: "SpanyolorszÃ¡g legnagyobb tartomÃ¡nya.", ro: "Cea mai mare provincie a Spaniei.", en: "Largest province in Spain." } },
  { id: "ES-CC", type: "region", parent: "ES-EX", coords: [-6.3724, 39.4753], name: { de: "CÃ¡ceres", hu: "CÃ¡ceres", ro: "CÃ¡ceres", en: "CÃ¡ceres" }, description: { de: "UNESCO-Altstadt mit Kolonialarchitektur.", hu: "UNESCO Ã³vÃ¡ros gyarmati Ã©pÃ­tÃ©szettel.", ro: "Centru vechi UNESCO cu arhitecturÄƒ colonialÄƒ.", en: "UNESCO old town with colonial architecture." } },
  // Galicia (ES-GA) â€” 4 provinces
  { id: "ES-C",  type: "region", parent: "ES-GA", coords: [-8.4110, 43.0097], name: { de: "A CoruÃ±a", hu: "A CoruÃ±a", ro: "A CoruÃ±a", en: "A CoruÃ±a" }, description: { de: "AtlantikkÃ¼ste mit Santiago de Compostela.", hu: "Atlanti partvonal Santiago de CompostelÃ¡val.", ro: "CoastÄƒ atlanticÄƒ cu Santiago de Compostela.", en: "Atlantic coast home to Santiago de Compostela." } },
  { id: "ES-LU", type: "region", parent: "ES-GA", coords: [-7.5560, 43.0097], name: { de: "Lugo", hu: "Lugo", ro: "Lugo", en: "Lugo" }, description: { de: "Komplette rÃ¶mische Stadtmauer.", hu: "Teljes rÃ³mai vÃ¡rosfal.", ro: "Zid roman complet intact.", en: "Complete Roman city walls." } },
  { id: "ES-OR", type: "region", parent: "ES-GA", coords: [-7.8641, 42.3359], name: { de: "Ourense", hu: "Ourense", ro: "Ourense", en: "Ourense" }, description: { de: "Binnenlandprovinz mit Thermalquellen.", hu: "BelsÅ‘ tartomÃ¡ny termÃ¡lforrÃ¡sokkal.", ro: "Provincie interioarÄƒ cu izvoare termale.", en: "Inland province with thermal springs." } },
  { id: "ES-PO", type: "region", parent: "ES-GA", coords: [-8.6440, 42.4330], name: { de: "Pontevedra", hu: "Pontevedra", ro: "Pontevedra", en: "Pontevedra" }, description: { de: "KÃ¼stenprovinz mit Rias Baixas.", hu: "Tengerparti tartomÃ¡ny a Rias Baixas Ã¶blÃ¶kkel.", ro: "Provincie costierÄƒ cu Rias Baixas.", en: "Coastal province with the Rias Baixas." } },
  // PaÃ­s Vasco (ES-PV) â€” 3 provinces
  { id: "ES-BI", type: "region", parent: "ES-PV", coords: [-2.9349, 43.2630], name: { de: "Biskaya", hu: "Vizcaya", ro: "Vizcaya", en: "Biscay" }, description: { de: "Industrieprovinz mit Bilbao und Guggenheim.", hu: "Ipari tartomÃ¡ny BilbaÃ³val Ã©s a Guggenheimmel.", ro: "Provincie industrialÄƒ cu Bilbao È™i Guggenheim.", en: "Industrial province with Bilbao and the Guggenheim." } },
  { id: "ES-SS", type: "region", parent: "ES-PV", coords: [-2.0038, 43.3183], name: { de: "Gipuzkoa", hu: "Gipuzkoa", ro: "Gipuzkoa", en: "Gipuzkoa" }, description: { de: "Baskenprovinz mit San SebastiÃ¡n und Pincho-KÃ¼che.", hu: "Baszk tartomÃ¡ny San SebastiÃ¡nnal Ã©s pintxos konyhÃ¡val.", ro: "Provincie bascÄƒ cu San SebastiÃ¡n È™i bucÄƒtÄƒria pintxos.", en: "Basque province with San SebastiÃ¡n and pintxos cuisine." } },
  { id: "ES-VI", type: "region", parent: "ES-PV", coords: [-2.6732, 42.8467], name: { de: "Ãlava", hu: "Ãlava", ro: "Alava", en: "Ãlava" }, description: { de: "Binnenbaskische Provinz mit Vitoria-Gasteiz.", hu: "BelsÅ‘ baszk tartomÃ¡ny Vitoria-Gasteizzel.", ro: "Provincie bascÄƒ interioarÄƒ cu Vitoria-Gasteiz.", en: "Inland Basque province with Vitoria-Gasteiz." } },
  // Comunitat Valenciana (ES-VC) â€” 3 provinces
  { id: "ES-A",  type: "region", parent: "ES-VC", coords: [-0.4907, 38.3452], name: { de: "Alicante", hu: "Alicante", ro: "Alicante", en: "Alicante" }, description: { de: "Costa Blanca und touristisches Zentrum.", hu: "Costa Blanca Ã©s turisztikai kÃ¶zpont.", ro: "Costa Blanca È™i centru turistic.", en: "Costa Blanca and tourist center." } },
  { id: "ES-CS", type: "region", parent: "ES-VC", coords: [-0.0513, 39.9864], name: { de: "CastellÃ³n", hu: "CastellÃ³n", ro: "Castellon", en: "CastellÃ³n" }, description: { de: "NÃ¶rdliche ValenciakÃ¼ste.", hu: "Ã‰szaki valenciai part.", ro: "Coasta valencianÄƒ de nord.", en: "Northern Valencia coast." } },
  { id: "ES-V",  type: "region", parent: "ES-VC", coords: [-0.3763, 39.4699], name: { de: "Valencia", hu: "Valencia", ro: "Valencia", en: "Valencia" }, description: { de: "Heimat der Paella und der Ciudad de las Artes.", hu: "A paella Ã©s a Ciudad de las Artes hazÃ¡ja.", ro: "Patria paellei È™i a Ciudad de las Artes.", en: "Home of paella and the Ciudad de las Artes." } },
];

export const spainAllPoi: POI[] = [...spainCountry, ...spainRegions, ...spainProvinces, ...spainCities, ...extraSpainPoi];

