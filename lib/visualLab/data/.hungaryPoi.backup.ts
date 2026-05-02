import type { POI } from "./poi";

// ============================================================================
// HUNGARY â€” POI (Points of Interest)
// 1 orszÃ¡g, 20 rÃ©giÃ³ (19 megye + Budapest), vÃ¡rosok, lÃ¡tnivalÃ³k.
// Nyelvek: de, hu, ro, en (minden mezÅ‘ben). KoordinÃ¡tÃ¡k: [lon, lat].
// ============================================================================

export const hungaryCountry: POI[] = [
  {
    id: "HU",
    type: "country",
    parent: "HU-PE",
    coords: [19.5033, 47.1625],
    name: {"de": "Ungarn", "hu": "MagyarorszÃ¡g", "ro": "Ungaria", "en": "Hungary"},
    image: "/geo-images/hungary/HU.webp",
    description: {
      de: "Ungarn ist ein Binnenstaat in Mitteleuropa, bekannt fÃ¼r seine reiche Geschichte, beeindruckende Architektur und weltberÃ¼hmte ThermalbÃ¤der.",
      hu: "MagyarorszÃ¡g egy kÃ¶zÃ©p-eurÃ³pai orszÃ¡g, amely gazdag tÃ¶rtÃ©nelmÃ©rÅ‘l, lenyÅ±gÃ¶zÅ‘ Ã©pÃ­tÃ©szetÃ©rÅ‘l Ã©s vilÃ¡ghÃ­rÅ± termÃ¡lfÃ¼rdÅ‘irÅ‘l ismert.",
      ro: "Ungaria este o È›arÄƒ din Europa CentralÄƒ, cunoscutÄƒ pentru istoria sa bogatÄƒ, arhitectura impresionantÄƒ È™i bÄƒile termale de renume mondial.",
      en: "Hungary is a Central European country known for its rich history, stunning architecture, and world-famous thermal baths."
    },
    descriptionAdvanced: {
      "de": "Ungarn ist ein faszinierendes Binnenland in Mitteleuropa, das fÃ¼r seine reiche Geschichte, beeindruckende Architektur und weltberÃ¼hmte ThermalbÃ¤der bekannt ist. Das Herz des Landes ist die Hauptstadt Budapest, eine pulsierende Metropole an der Donau, die oft als eine der schÃ¶nsten StÃ¤dte der Welt bezeichnet wird. Ungarn ist berÃ¼hmt fÃ¼r seine herzliche Gastfreundschaft, seine wÃ¼rzige KÃ¼che mit SpezialitÃ¤ten wie Gulasch und seine erstklassigen Weinregionen wie Tokaj oder VillÃ¡ny. Die Landschaft ist vielfÃ¤ltig und reicht von den weiten Ebenen der Puszta bis zu den sanften HÃ¼geln Transdanubiens und den bewaldeten Bergen im Norden. Mit zehn Nationalparks und zahlreichen UNESCO-WelterbestÃ¤tten bietet das Land unzÃ¤hlige EntdeckungsmÃ¶glichkeiten fÃ¼r Natur- und Kulturliebhaber.",
      "hu": "MagyarorszÃ¡g egy gyÃ¶nyÃ¶rÅ± kÃ¶zÃ©p-eurÃ³pai orszÃ¡g, amely gazdag tÃ¶rtÃ©nelmÃ©rÅ‘l, lenyÅ±gÃ¶zÅ‘ Ã©pÃ­tÃ©szetÃ©rÅ‘l Ã©s vilÃ¡ghÃ­rÅ± termÃ¡lfÃ¼rdÅ‘irÅ‘l ismert. Az orszÃ¡g szÃ­ve Budapest, a Duna mentÃ©n fekvÅ‘ metropolisz, amely a vilÃ¡g egyik legszebb fÅ‘vÃ¡rosa. MagyarorszÃ¡g hÃ­res vendÃ©gszeretetÃ©rÅ‘l, Ã­zletes gasztronÃ³miÃ¡jÃ¡rÃ³l, mint pÃ©ldÃ¡ul a gulyÃ¡sleves, Ã©s kivÃ¡lÃ³ borvidÃ©keirÅ‘l, mint Tokaj vagy VillÃ¡ny. A tÃ¡j vÃ¡ltozatos, az AlfÃ¶ld rÃ³nasÃ¡gaitÃ³l a DunÃ¡ntÃºl dombvidÃ©kein Ã¡t az Ã‰szaki-kÃ¶zÃ©phegysÃ©g vonulataiig terjed. Az orszÃ¡g tÃ­z nemzeti parkja Ã©s szÃ¡mos UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­ne vÃ¡rja a termÃ©szet Ã©s a kultÃºra kedvelÅ‘it.",
      "ro": "Ungaria este o È›arÄƒ fascinantÄƒ din Europa CentralÄƒ, cunoscutÄƒ pentru istoria sa bogatÄƒ, arhitectura impresionantÄƒ È™i bÄƒile termale de renume mondial. Inima È›Äƒrii este capitala Budapesta, o metropolÄƒ vibrantÄƒ de-a lungul DunÄƒrii, care este adesea numitÄƒ unul dintre cele mai frumoase oraÈ™e din lume. Ungaria este faimoasÄƒ pentru ospitalitatea sa caldÄƒ, bucÄƒtÄƒria sa condimentatÄƒ cu specialitÄƒÈ›i precum gulaÈ™ul È™i regiunile sale viticole de primÄƒ clasÄƒ, cum ar fi Tokaj sau VillÃ¡ny. Peisajul este divers, variind de la cÃ¢mpiile Ã®ntinse ale Pustei pÃ¢nÄƒ la dealurile blÃ¢nde ale Transdanubiei È™i munÈ›ii Ã®mpÄƒduriÈ›i din nord. Cu zece parcuri naÈ›ionale È™i numeroase situri din patrimoniul mondial UNESCO, È›ara oferÄƒ nenumÄƒrate oportunitÄƒÈ›i de descoperire pentru iubitorii de naturÄƒ È™i culturÄƒ.",
      "en": "Hungary is a fascinating landlocked country in Central Europe, known for its rich history, stunning architecture, and world-famous thermal baths. The heart of the country is the capital, Budapest, a vibrant metropolis along the Danube that is often referred to as one of the most beautiful cities in the world. Hungary is famous for its warm hospitality, its flavorful cuisine featuring specialties like goulash, and its world-class wine regions such as Tokaj or VillÃ¡ny. The landscape is diverse, ranging from the vast plains of the Puszta to the rolling hills of Transdanubia and the forested mountains in the north. With ten national parks and numerous UNESCO World Heritage sites, the country offers countless opportunities for discovery for nature and culture lovers."
    },
    facts: {
      "de": [
        "Die Hauptstadt Budapest wird durch die Donau in die Stadtteile Buda und Pest geteilt.",
        "Ungarn hat Ã¼ber 1.300 Thermalquellen und eine jahrtausendealte BÃ¤derkultur.",
        "Der Plattensee (Balaton) ist der grÃ¶ÃŸte Binnensee Mitteleuropas.",
        "Die ungarische Sprache gehÃ¶rt zur finno-ugrischen Sprachfamilie und ist in Europa einzigartig.",
        "Das Land ist in 19 Komitate und die Hauptstadt Budapest unterteilt.",
        "Ungarn ist die Heimat berÃ¼hmter Erfindungen wie des Kugelschreibers und des ZauberwÃ¼rfels.",
        "Die ungarische Gastronomie basiert stark auf Paprika, Zwiebeln und Sauerrahm.",
        "Das Land hat eine beeindruckende Anzahl von 13 NobelpreistrÃ¤gern hervorgebracht.",
        "Die Weinregion Tokaj ist das Ã¤lteste klassifizierte Weingebiet der Welt.",
        "Ungarn trat im Jahr 2004 der EuropÃ¤ischen Union bei."
      ],
      "hu": [
        "FÅ‘vÃ¡rosa Budapest, amelyet a Duna oszt kettÃ© BudÃ¡ra Ã©s Pestre.",
        "MagyarorszÃ¡g tÃ¶bb mint 1300 termÃ¡lforrÃ¡ssal Ã©s Ã©vezredes fÃ¼rdÅ‘kultÃºrÃ¡val rendelkezik.",
        "A Balaton KÃ¶zÃ©p-EurÃ³pa legnagyobb Ã©desvÃ­zi tava.",
        "A magyar nyelv az urÃ¡li nyelvcsalÃ¡dba tartozik, Ã©s egyedÃ¼lÃ¡llÃ³ EurÃ³pÃ¡ban.",
        "Az orszÃ¡g 19 vÃ¡rmegyÃ©re Ã©s a fÅ‘vÃ¡rosra, Budapestre oszlik.",
        "MagyarorszÃ¡g olyan hÃ­res talÃ¡lmÃ¡nyok hazÃ¡ja, mint a golyÃ³stoll vagy a bÅ±vÃ¶s kocka.",
        "A magyar gasztronÃ³mia alapkÃ¶vei a fÅ±szerpaprika, a vÃ¶rÃ¶shagyma Ã©s a tejfÃ¶l.",
        "Az orszÃ¡g eddig 13 Nobel-dÃ­jas tudÃ³ssal Ã©s alkotÃ³val bÃ¼szkÃ©lkedhet.",
        "A Tokaji borvidÃ©k a vilÃ¡g elsÅ‘ zÃ¡rt borvidÃ©ke Ã©s UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­n.",
        "MagyarorszÃ¡g 2004 Ã³ta az EurÃ³pai UniÃ³ tagja."
      ],
      "ro": [
        "Capitala Budapesta este Ã®mpÄƒrÈ›itÄƒ de DunÄƒre Ã®n districtele Buda È™i Pesta.",
        "Ungaria are peste 1.300 de izvoare termale È™i o culturÄƒ a bÄƒilor de mii de ani.",
        "Lacul Balaton este cel mai mare lac cu apÄƒ dulce din Europa CentralÄƒ.",
        "Limba maghiarÄƒ aparÈ›ine familiei de limbi fino-ugrice È™i este unicÄƒ Ã®n Europa.",
        "Èšara este Ã®mpÄƒrÈ›itÄƒ Ã®n 19 judeÈ›e È™i capitala Budapesta.",
        "Ungaria este patria unor invenÈ›ii faimoase, precum pixul È™i cubul Rubik.",
        "Gastronomia maghiarÄƒ se bazeazÄƒ Ã®n mare mÄƒsurÄƒ pe boia, ceapÄƒ È™i smÃ¢ntÃ¢nÄƒ.",
        "Èšara a produs un numÄƒr impresionant de 13 laureaÈ›i ai Premiului Nobel.",
        "Regiunea viticolÄƒ Tokaj este prima regiune viticolÄƒ clasificatÄƒ din lume.",
        "Ungaria a aderat la Uniunea EuropeanÄƒ Ã®n anul 2004."
      ],
      "en": [
        "The capital, Budapest, is divided by the Danube into the Buda and Pest districts.",
        "Hungary has over 1,300 thermal springs and a bathing culture spanning millennia.",
        "Lake Balaton is the largest freshwater lake in Central Europe.",
        "The Hungarian language belongs to the Finno-Ugric family and is unique in Europe.",
        "The country is divided into 19 counties and the capital city of Budapest.",
        "Hungary is the home of famous inventions such as the ballpoint pen and the Rubik's Cube.",
        "Hungarian gastronomy is heavily based on paprika, onions, and sour cream.",
        "The country has produced an impressive number of 13 Nobel Prize winners.",
        "The Tokaj wine region is the world's oldest classified wine district.",
        "Hungary joined the European Union in 2004."
      ]
    },
    factsAdvanced: {
      de: [
        "Ungarn wurde im Jahr 896 gegrÃ¼ndet und zÃ¤hlt somit zu den Ã¤ltesten Nationen Europas.",
        "Das Land verfÃ¼gt mit dem HÃ©vÃ­zer See Ã¼ber den weltweit grÃ¶ÃŸten biologisch aktiven Thermalsee.",
        "Ungarn ist die Heimat zahlreicher bedeutender Erfindungen wie des Kugelschreibers und des ZauberwÃ¼rfels.",
        "Die ungarische Weinregion Tokaj wurde bereits 1737 zum weltweit ersten geschlossenen Weingebiet erklÃ¤rt.",
        "Mehr als 80 % des ungarischen Staatsgebiets verfÃ¼gen Ã¼ber Thermalwasserquellen unter der ErdoberflÃ¤che."
      ],
      hu: [
        "MagyarorszÃ¡g a vilÃ¡g egyik legrÃ©gebbi orszÃ¡ga, 896-ban alapÃ­tottÃ¡k a honfoglalÃ³ magyar tÃ¶rzsek.",
        "Az orszÃ¡gban talÃ¡lhatÃ³ a vilÃ¡g mÃ¡sodik legnagyobb termÃ¡ltava, a HÃ©vÃ­zi-tÃ³, amely biolÃ³giailag is aktÃ­v.",
        "A magyar talÃ¡lmÃ¡nyok kÃ¶zÃ© tartozik a golyÃ³stoll, a gyufa, a hologram Ã©s a C-vitamin izolÃ¡lÃ¡sa is.",
        "MagyarorszÃ¡g rendelkezik a vilÃ¡g egyik legrÃ©gebbi borvidÃ©kÃ©vel, a Tokaji borvidÃ©kkel, amely 1737 Ã³ta zÃ¡rt terÃ¼let.",
        "Az orszÃ¡g terÃ¼letÃ©nek tÃ¶bb mint 80%-a alatt talÃ¡lhatÃ³ kÃ¼lÃ¶nbÃ¶zÅ‘ hÅ‘mÃ©rsÃ©kletÅ± Ã©s Ã¶sszetÃ©telÅ± termÃ¡lvÃ­z."
      ],
      ro: [],
      en: []
    },
  },
];

export const hungaryRegions: POI[] = [
  {
    id: "budapest",
    type: "region",
    parent: "HU-BU",
    coords: [19.0402, 47.4979],
    name: {"de": "Budapest", "hu": "Budapest", "ro": "Budapesta", "en": "Budapest"},
    description: {
      de: "Budapest, die Hauptstadt Ungarns, ist eine prachtvolle Metropole an der Donau, bekannt fÃ¼r ihre ThermalbÃ¤der, das ParlamentsgebÃ¤ude und die historische Burg.",
      hu: "Budapest, MagyarorszÃ¡g fÅ‘vÃ¡rosa, a Duna mentÃ©n fekvÅ‘ pompÃ¡s metropolisz, amely termÃ¡lfÃ¼rdÅ‘irÅ‘l, az OrszÃ¡ghÃ¡zrÃ³l Ã©s a tÃ¶rtÃ©nelmi VÃ¡rrÃ³l ismert.",
      ro: "Budapesta, capitala Ungariei, este o metropolÄƒ magnificÄƒ de-a lungul DunÄƒrii, cunoscutÄƒ pentru bÄƒile sale termale, clÄƒdirea Parlamentului È™i Castelul istoric.",
      en: "Budapest, the capital of Hungary, is a magnificent metropolis along the Danube, known for its thermal baths, the Parliament building, and the historic Castle."
    },
    descriptionAdvanced: {
      "de": "Budapest, die Hauptstadt Ungarns, ist eine eigenstÃ¤ndige Region und das unbestrittene politische, wirtschaftliche und kulturelle Zentrum des Landes. Die Stadt entstand 1873 durch die Zusammenlegung der StÃ¤dte Buda, Pest und Ã“buda und wird durch die majestÃ¤tische Donau in zwei charakteristische HÃ¤lften geteilt. WÃ¤hrend das hÃ¼gelige Buda fÃ¼r seine historischen Viertel und das Burgschloss bekannt ist, besticht das flache Pest durch seine lebendigen Boulevards, das ParlamentsgebÃ¤ude und das pulsierende Stadtleben. Budapest ist weltberÃ¼hmt fÃ¼r seine einzigartige BÃ¤derkultur, seine beeindruckende Architektur des Historismus und Jugendstils sowie seine lebendige Gastronomie- und Kulturszene. Als eine der meistbesuchten StÃ¤dte Mitteleuropas bietet sie eine perfekte Mischung aus Geschichte, Entspannung und moderner UrbanitÃ¤t.",
      "hu": "Budapest, MagyarorszÃ¡g fÅ‘vÃ¡rosa, kÃ¼lÃ¶nÃ¡llÃ³ kÃ¶zigazgatÃ¡si egysÃ©gkÃ©nt az orszÃ¡g politikai, gazdasÃ¡gi Ã©s kulturÃ¡lis kÃ¶zpontja. A vÃ¡ros 1873-ban jÃ¶tt lÃ©tre Buda, Pest Ã©s Ã“buda egyesÃ­tÃ©sÃ©vel, Ã©s a fensÃ©ges Duna osztja kÃ©t jellegzetes rÃ©szre. MÃ­g a dombos Buda tÃ¶rtÃ©nelmi negyedeirÅ‘l Ã©s a Budai VÃ¡rrÃ³l ismert, addig a sÃ­k Pest pezsgÅ‘ sugÃ¡rÃºtjaival, az OrszÃ¡ghÃ¡zzal Ã©s lÃ¼ktetÅ‘ vÃ¡rosi Ã©letÃ©vel vonzza a lÃ¡togatÃ³kat. Budapest vilÃ¡gszerte hÃ­res egyedÃ¼lÃ¡llÃ³ fÃ¼rdÅ‘kultÃºrÃ¡jÃ¡rÃ³l, lenyÅ±gÃ¶zÅ‘ historizÃ¡lÃ³ Ã©s szecessziÃ³s Ã©pÃ­tÃ©szetÃ©rÅ‘l, valamint Ã©lÃ©nk gasztronÃ³miai Ã©s kulturÃ¡lis Ã©letÃ©rÅ‘l. KÃ¶zÃ©p-EurÃ³pa egyik leglÃ¡togatottabb vÃ¡rosakÃ©nt a tÃ¶rtÃ©nelem, a kikapcsolÃ³dÃ¡s Ã©s a modern vÃ¡rosi lÃ©t tÃ¶kÃ©letes keverÃ©kÃ©t nyÃºjtja.",
      "ro": "Budapesta, capitala Ungariei, este o regiune administrativÄƒ distinctÄƒ È™i centrul politic, economic È™i cultural incontestabil al È›Äƒrii. OraÈ™ul a fost format Ã®n 1873 prin unirea oraÈ™elor Buda, Pesta È™i Ã“buda È™i este Ã®mpÄƒrÈ›it Ã®n douÄƒ jumÄƒtÄƒÈ›i caracteristice de maiestuoasa DunÄƒre. ÃŽn timp ce Buda deluroasÄƒ este cunoscutÄƒ pentru cartierele sale istorice È™i Castelul Buda, Pesta planÄƒ impresioneazÄƒ prin bulevardele sale vibrante, clÄƒdirea Parlamentului È™i viaÈ›a urbanÄƒ pulsantÄƒ. Budapesta este renumitÄƒ Ã®n Ã®ntreaga lume pentru cultura sa unicÄƒ a bÄƒilor, arhitectura sa impresionantÄƒ Ã®n stil istoricist È™i Art Nouveau, precum È™i pentru scena sa gastronomicÄƒ È™i culturalÄƒ vibrantÄƒ. Fiind unul dintre cele mai vizitate oraÈ™e din Europa CentralÄƒ, oferÄƒ un amestec perfect de istorie, relaxare È™i urbanitate modernÄƒ.",
      "en": "Budapest, the capital of Hungary, is a distinct administrative region and the undisputed political, economic, and cultural center of the country. The city was formed in 1873 through the unification of Buda, Pest, and Ã“buda, and is divided into two characteristic halves by the majestic Danube. While hilly Buda is known for its historic districts and the Buda Castle, flat Pest charms visitors with its vibrant boulevards, the Parliament building, and pulsating city life. Budapest is world-famous for its unique spa culture, its stunning Historicist and Art Nouveau architecture, and its lively gastronomic and cultural scene. As one of the most visited cities in Central Europe, it offers a perfect blend of history, relaxation, and modern urbanity."
    },
    facts: {
      "de": [
        "Budapest ist die bevÃ¶lkerungsreichste Stadt Ungarns mit Ã¼ber 1,7 Millionen Einwohnern.",
        "Die Stadt wird oft als 'Perle der Donau' bezeichnet und gehÃ¶rt teilweise zum UNESCO-Welterbe.",
        "Beherbergt die Ã¤lteste elektrische U-Bahn-Linie Kontinentaleuropas (M1).",
        "Ist bekannt als 'Stadt der BÃ¤der' mit Ã¼ber 100 Thermalquellen und berÃ¼hmten HeilbÃ¤dern.",
        "Das ungarische ParlamentsgebÃ¤ude ist das drittgrÃ¶ÃŸte RegierungsgebÃ¤ude der Welt.",
        "Die KettenbrÃ¼cke war die erste dauerhafte Verbindung zwischen Buda und Pest.",
        "Die GroÃŸe Synagoge in der DohÃ¡ny-StraÃŸe ist die grÃ¶ÃŸte Synagoge in Europa.",
        "Budapest hat eine der weltweit grÃ¶ÃŸten Thermalwasser-HÃ¶hlensysteme unter der Stadt.",
        "Die Stadt ist ein bedeutendes Zentrum fÃ¼r Bildung mit zahlreichen renommierten UniversitÃ¤ten.",
        "Der Heldenplatz ist einer der wichtigsten und meistbesuchten PlÃ¤tze der Stadt."
      ],
      "hu": [
        "Budapest MagyarorszÃ¡g legnÃ©pesebb vÃ¡rosa, tÃ¶bb mint 1,7 milliÃ³ lakossal.",
        "A vÃ¡rost gyakran a 'Duna gyÃ¶ngyekÃ©nt' emlegetik, Ã©s tÃ¶bb rÃ©sze az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
        "Itt talÃ¡lhatÃ³ a kontinens elsÅ‘ elektromos fÃ¶ldalatti vasÃºtja (M1).",
        "A 'fÃ¼rdÅ‘k vÃ¡rosa' nÃ©ven ismert, tÃ¶bb mint 100 termÃ¡lforrÃ¡ssal Ã©s hÃ­res gyÃ³gyfÃ¼rdÅ‘kkel.",
        "A magyar OrszÃ¡ghÃ¡z a vilÃ¡g harmadik legnagyobb parlamenti Ã©pÃ¼lete.",
        "A LÃ¡nchÃ­d volt az elsÅ‘ Ã¡llandÃ³ Ã¶sszekÃ¶ttetÃ©s Buda Ã©s Pest kÃ¶zÃ¶tt.",
        "A DohÃ¡ny utcai zsinagÃ³ga EurÃ³pa legnagyobb zsidÃ³ temploma.",
        "Budapest alatt talÃ¡lhatÃ³ a vilÃ¡g egyik legnagyobb termÃ¡lvizes barlangrendszere.",
        "A vÃ¡ros jelentÅ‘s oktatÃ¡si kÃ¶zpont, szÃ¡mos neves egyetemmel.",
        "A HÅ‘sÃ¶k tere a vÃ¡ros egyik legfontosabb Ã©s leglÃ¡togatottabb tere."
      ],
      "ro": [
        "Budapesta este cel mai populat oraÈ™ din Ungaria, cu peste 1,7 milioane de locuitori.",
        "OraÈ™ul este adesea numit 'Perla DunÄƒrii' È™i face parte parÈ›ial din patrimoniul mondial UNESCO.",
        "GÄƒzduieÈ™te cea mai veche linie de metrou electric din Europa continentalÄƒ (M1).",
        "Este cunoscut ca 'oraÈ™ul bÄƒilor', cu peste 100 de izvoare termale È™i bÄƒi curative faimoase.",
        "ClÄƒdirea Parlamentului maghiar este a treia ca mÄƒrime din lume.",
        "Podul cu LanÈ›uri a fost prima legÄƒturÄƒ permanentÄƒ Ã®ntre Buda È™i Pesta.",
        "Sinagoga de pe strada DohÃ¡ny este cea mai mare sinagogÄƒ din Europa.",
        "Budapesta are unul dintre cele mai mari sisteme de peÈ™teri cu apÄƒ termalÄƒ din lume sub oraÈ™.",
        "OraÈ™ul este un centru important pentru educaÈ›ie, cu numeroase universitÄƒÈ›i de renume.",
        "PiaÈ›a Eroilor este una dintre cele mai importante È™i vizitate pieÈ›e din oraÈ™."
      ],
      "en": [
        "Budapest is the most populous city in Hungary, with over 1.7 million inhabitants.",
        "The city is often called the 'Pearl of the Danube' and parts of it are UNESCO World Heritage sites.",
        "It is home to the oldest electric underground railway line in continental Europe (M1).",
        "Known as the 'City of Baths' with over 100 thermal springs and famous medicinal baths.",
        "The Hungarian Parliament Building is the third largest government building in the world.",
        "The Chain Bridge was the first permanent connection between Buda and Pest.",
        "The Great Synagogue in DohÃ¡ny Street is the largest synagogue in Europe.",
        "Budapest has one of the world's largest thermal water cave systems beneath the city.",
        "The city is a major center for education, with numerous prestigious universities.",
        "Heroes' Square is one of the most important and most visited squares in the city."
      ]
    },
    factsAdvanced: {
      de: [
        "Budapest entstand im Jahr 1873 durch die feierliche Zusammenlegung der StÃ¤dte Buda, Pest und Ã“buda.",
        "Die Stadt beherbergt mit der Linie M1 die Ã¤lteste elektrische U-Bahn-Linie auf dem europÃ¤ischen Festland.",
        "Das ungarische ParlamentsgebÃ¤ude ist das flÃ¤chenmÃ¤ÃŸig grÃ¶ÃŸte Bauwerk des Landes und ein Wahrzeichen der Stadt.",
        "Budapest ist die einzige Hauptstadt weltweit, die Ã¼ber mehr als 120 warme Thermalquellen verfÃ¼gt.",
        "Die GroÃŸe Synagoge in der DohÃ¡ny-StraÃŸe ist das grÃ¶ÃŸte jÃ¼dische Gotteshaus in ganz Europa."
      ],
      "hu": [
        "Budapest alatt tÃ¶bb mint 120 termÃ¡lforrÃ¡s talÃ¡lhatÃ³, amelyek naponta mintegy 70 milliÃ³ liter vizet adnak a fÃ¼rdÅ‘knek.",
        "A budapesti M1-es fÃ¶ldalatti vasÃºt a vilÃ¡g mÃ¡sodik legrÃ©gebbi metrÃ³vonala a londoni utÃ¡n, 1896-ban adtÃ¡k Ã¡t.",
        "A DohÃ¡ny utcai zsinagÃ³ga a legnagyobb zsidÃ³ templom EurÃ³pÃ¡ban Ã©s a mÃ¡sodik legnagyobb a vilÃ¡gon.",
        "Az OrszÃ¡ghÃ¡z Ã©pÃ­tÃ©sekor 40 kilogramm 24 karÃ¡tos aranyat hasznÃ¡ltak fel a belsÅ‘ terek dÃ­szÃ­tÃ©sÃ©hez.",
        "A vÃ¡rosban kÃ¶zlekedÅ‘ 2-es villamos vonalÃ¡t a National Geographic a vilÃ¡g egyik legszebb villamosvonalÃ¡nak vÃ¡lasztotta."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "baranya",
    type: "region",
    parent: "HU-BA",
    coords: [18.2323, 46.0727],
    name: {"de": "Branau", "hu": "Baranya", "ro": "Baranya", "en": "Baranya"},
    image: "/geo-images/hungary/baranya.webp",
    description: {
      "de": "Das Komitat Baranya liegt im Ã¤uÃŸersten SÃ¼den Ungarns an der Grenze zu Kroatien und ist bekannt fÃ¼r sein mildes, fast mediterranes Klima. Die Region wird im Norden durch das Mecsek-Gebirge und im SÃ¼den durch die FlÃ¼sse Drau und Donau begrenzt, was eine abwechslungsreiche und fruchtbare Landschaft schafft. Das kulturelle Zentrum ist die Stadt PÃ©cs, die mit ihrem reichen rÃ¶mischen und osmanischen Erbe sowie ihrer lebendigen Kunstszene besticht. Baranya ist zudem berÃ¼hmt fÃ¼r seine erstklassigen Weinregionen, insbesondere VillÃ¡ny, und seine vielfÃ¤ltigen ethnischen Traditionen, die durch das Zusammenleben von Ungarn, Deutschen und Kroaten geprÃ¤gt sind. Die Region bietet eine einzigartige Mischung aus historischer Tiefe, natÃ¼rlicher SchÃ¶nheit und kulinarischen GenÃ¼ssen.",
      "hu": "Baranya vÃ¡rmegye MagyarorszÃ¡g legdÃ©lebbi rÃ©szÃ©n, a horvÃ¡t hatÃ¡r mentÃ©n fekszik, Ã©s enyhe, szinte mediterrÃ¡n Ã©ghajlatÃ¡rÃ³l ismert. A rÃ©giÃ³t Ã©szakrÃ³l a Mecsek-hegysÃ©g, dÃ©lrÅ‘l pedig a DrÃ¡va Ã©s a Duna folyÃ³k hatÃ¡roljÃ¡k, vÃ¡ltozatos Ã©s termÃ©keny tÃ¡jat hozva lÃ©tre. KulturÃ¡lis kÃ¶zpontja PÃ©cs, amely gazdag rÃ³mai Ã©s oszmÃ¡n Ã¶rÃ¶ksÃ©gÃ©vel, valamint Ã©lÃ©nk mÅ±vÃ©szeti Ã©letÃ©vel nyÅ±gÃ¶zi le a lÃ¡togatÃ³kat. Baranya emellett hÃ­res kivÃ¡lÃ³ borvidÃ©keirÅ‘l, kÃ¼lÃ¶nÃ¶sen VillÃ¡nyrÃ³l, Ã©s sokszÃ­nÅ± etnikai hagyomÃ¡nyairÃ³l, amelyeket a magyarok, nÃ©metek Ã©s horvÃ¡tok egyÃ¼ttÃ©lÃ©se formÃ¡lt. A vÃ¡rmegye a tÃ¶rtÃ©nelmi mÃ©lysÃ©g, a termÃ©szeti szÃ©psÃ©g Ã©s a kulinÃ¡ris Ã©lvezetek egyedÃ¼lÃ¡llÃ³ keverÃ©kÃ©t kÃ­nÃ¡lja.",
      "ro": "JudeÈ›ul Baranya este situat Ã®n extremitatea sudicÄƒ a Ungariei, la graniÈ›a cu CroaÈ›ia, È™i este cunoscut pentru clima sa blÃ¢ndÄƒ, aproape mediteraneanÄƒ. Regiunea este mÄƒrginitÄƒ la nord de munÈ›ii Mecsek È™i la sud de rÃ¢urile Drava È™i DunÄƒre, creÃ¢nd un peisaj variat È™i fertil. Centrul cultural este oraÈ™ul PÃ©cs, care impresioneazÄƒ prin moÈ™tenirea sa bogatÄƒ romanÄƒ È™i otomanÄƒ, precum È™i prin scena sa artisticÄƒ vibrantÄƒ. Baranya este, de asemenea, faimoasÄƒ pentru regiunile sale viticole de primÄƒ clasÄƒ, Ã®n special VillÃ¡ny, È™i pentru tradiÈ›iile sale etnice diverse, modelate de convieÈ›uirea maghiarilor, germanilor È™i croaÈ›ilor. JudeÈ›ul oferÄƒ un amestec unic de profunzime istoricÄƒ, frumuseÈ›e naturalÄƒ È™i delicii culinare.",
      "en": "Baranya County is located in the far south of Hungary on the border with Croatia and is known for its mild, almost Mediterranean climate. The region is bordered to the north by the Mecsek Mountains and to the south by the rivers Drava and Danube, creating a diverse and fertile landscape. Its cultural center is the city of PÃ©cs, which impresses visitors with its rich Roman and Ottoman heritage and its vibrant art scene. Baranya is also famous for its world-class wine regions, particularly VillÃ¡ny, and its diverse ethnic traditions shaped by the coexistence of Hungarians, Germans, and Croatians. The county offers a unique blend of historical depth, natural beauty, and culinary delights."
    },
    descriptionAdvanced: {
      "de": "Das Komitat Baranya liegt im Ã¤uÃŸersten SÃ¼den Ungarns an der Grenze zu Kroatien und ist bekannt fÃ¼r sein mildes, fast mediterranes Klima. Die Region wird im Norden durch das Mecsek-Gebirge und im SÃ¼den durch die FlÃ¼sse Drau und Donau begrenzt, was eine abwechslungsreiche und fruchtbare Landschaft schafft. Das kulturelle Zentrum ist die Stadt PÃ©cs, die mit ihrem reichen rÃ¶mischen und osmanischen Erbe sowie ihrer lebendigen Kunstszene besticht. Baranya ist zudem berÃ¼hmt fÃ¼r seine erstklassigen Weinregionen, insbesondere VillÃ¡ny, und seine vielfÃ¤ltigen ethnischen Traditionen, die durch das Zusammenleben von Ungarn, Deutschen and Kroaten geprÃ¤gt sind. Die Region bietet eine einzigartige Mischung aus historischer Tiefe, natÃ¼rlicher SchÃ¶nheit und kulinarischen GenÃ¼ssen.",
      "hu": "Baranya vÃ¡rmegye MagyarorszÃ¡g legdÃ©lebbi tÃ¡jegysÃ©ge, amely mediterrÃ¡n jellegÅ± Ã©ghajlatÃ¡val Ã©s gazdag tÃ¶rtÃ©nelmi Ã¶rÃ¶ksÃ©gÃ©vel tÅ±nik ki a rÃ©giÃ³k kÃ¶zÃ¼l. A vÃ¡rmegye kÃ¶zpontja, PÃ©cs, mÃ¡r az Ã³korban is jelentÅ‘s telepÃ¼lÃ©s volt, Ã©s ma hÃ­res az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezÅ‘ Ã³keresztÃ©ny sÃ­rkamrÃ¡irÃ³l. A tÃ¡j rendkÃ­vÃ¼l vÃ¡ltozatos, a Mecsek hegyvonulataitÃ³l a VillÃ¡nyi-hegysÃ©g vilÃ¡ghÃ­rÅ± borvidÃ©keirÅ‘l terjed, ahol az orszÃ¡g legkivÃ¡lÃ³bb vÃ¶rÃ¶sborai kÃ©szÃ¼lnek. Baranya etnikai sokszÃ­nÅ±sÃ©ge, a magyarok, nÃ©metek Ã©s horvÃ¡tok bÃ©kÃ©s egyÃ¼ttÃ©lÃ©se egyedÃ¼lÃ¡llÃ³ kulturÃ¡lis Ã©s gasztronÃ³miai miliÅ‘t teremtett a tÃ©rsÃ©gben. A harkÃ¡nyi gyÃ³gyvÃ­z Ã©s a siklÃ³si vÃ¡r tÃ¶rtÃ©nelmi falai tovÃ¡bb gazdagÃ­tjÃ¡k a vÃ¡rmegye turisztikai vonzerejÃ©t.",
      "ro": "JudeÈ›ul Baranya este situat Ã®n extremitatea sudicÄƒ a Ungariei, la graniÈ›a cu CroaÈ›ia, È™i este cunoscut pentru clima sa blÃ¢ndÄƒ, aproape mediteraneanÄƒ. Regiunea este mÄƒrginitÄƒ la nord de munÈ›ii Mecsek È™i la sud de rÃ¢urile Drava È™i DunÄƒre, creÃ¢nd un peisaj variat È™i fertil. Centrul cultural este oraÈ™ul PÃ©cs, care impresioneazÄƒ prin moÈ™tenirea sa bogatÄƒ romanÄƒ È™i otomanÄƒ, precum È™i prin scena sa artisticÄƒ vibrantÄƒ. Baranya este, de asemenea, faimoasÄƒ pentru regiunile sale viticole de primÄƒ clasÄƒ, Ã®n special VillÃ¡ny, È™i pentru tradiÈ›iile sale etnice diverse, modelate de convieÈ›uirea maghiarilor, germanilor È™i croaÈ›ilor. JudeÈ›ul oferÄƒ un amestec unic de profunzime istoricÄƒ, frumuseÈ›e naturalÄƒ È™i delicii culinare.",
      "en": "Baranya County is located in the far south of Hungary on the border with Croatia and is known for its mild, almost Mediterranean climate. The region is bordered to the north by the Mecsek Mountains and to the south by the rivers Drava and Danube, creating a diverse and fertile landscape. Its cultural center is the city of PÃ©cs, which impresses visitors with its rich Roman and Ottoman heritage and its vibrant art scene. Baranya is also famous for its world-class wine regions, particularly VillÃ¡ny, and its diverse ethnic traditions shaped by the coexistence of Hungarians, Germans, and Croatians. The county offers a unique blend of historical depth, natural beauty, and culinary delights."
    },
    facts: {
      "de": [
        "Sitz des Komitats ist PÃ©cs, eine Stadt mit Ã¼ber 2000-jÃ¤hriger Geschichte.",
        "Das Mecsek-Gebirge schÃ¼tzt die Region vor kalten Nordwinden.",
        "VillÃ¡ny ist eine der renommiertesten Rotweinregionen Ungarns.",
        "Die frÃ¼hchristlichen Grabkammern in PÃ©cs gehÃ¶ren zum UNESCO-Welterbe.",
        "Baranya hat einen hohen Anteil an nationalen Minderheiten, insbesondere Donauschwaben.",
        "Die Burg von SiklÃ³s ist eine der am besten erhaltenen mittelalterlichen Burgen des Landes.",
        "Das Heilbad HarkÃ¡ny ist weltweit fÃ¼r sein schwefelhaltiges Wasser bekannt.",
        "Die Region war Schauplatz der historischen Schlacht von MohÃ¡cs im Jahr 1526.",
        "Das BusÃ³jÃ¡rÃ¡s-Festival in MohÃ¡cs ist Teil des immateriellen UNESCO-Kulturerbes.",
        "Baranya ist reich an Thermalquellen und bietet zahlreiche Wellness-MÃ¶glichkeiten."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye PÃ©cs, amely tÃ¶bb mint 2000 Ã©ves mÃºltra tekint vissza.",
        "A Mecsek-hegysÃ©g Ã³vja a rÃ©giÃ³t a hideg Ã©szaki szelektÅ‘l.",
        "VillÃ¡ny MagyarorszÃ¡g egyik legelismertebb vÃ¶rÃ¶sbortermelÅ‘ vidÃ©ke.",
        "A pÃ©csi Ã³keresztÃ©ny sÃ­rkamrÃ¡k az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezik.",
        "BaranyÃ¡ban jelentÅ‘s a nemzetisÃ©gi kisebbsÃ©gek, kÃ¼lÃ¶nÃ¶sen a nÃ©metek Ã©s horvÃ¡tok arÃ¡nya.",
        "A siklÃ³si vÃ¡r az orszÃ¡g egyik legÃ©pebben maradt kÃ¶zÃ©pkori erÅ‘dÃ­tmÃ©nye.",
        "A harkÃ¡nyi gyÃ³gyfÃ¼rdÅ‘ kÃ©nes vizÃ©rÅ‘l vilÃ¡gszerte hÃ­res.",
        "A vÃ¡rmegye terÃ¼letÃ©n zajlott a tÃ¶rtÃ©nelmi jelentÅ‘sÃ©gÅ± mohÃ¡csi csata 1526-ban.",
        "A mohÃ¡csi busÃ³jÃ¡rÃ¡s az UNESCO szellemi kulturÃ¡lis Ã¶rÃ¶ksÃ©gÃ©nek rÃ©sze.",
        "Baranya gazdag termÃ¡lforrÃ¡sokban Ã©s szÃ¡mos wellness lehetÅ‘sÃ©get kÃ­nÃ¡l."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este PÃ©cs, un oraÈ™ cu o istorie de peste 2000 de ani.",
        "MunÈ›ii Mecsek protejeazÄƒ regiunea de vÃ¢nturile reci din nord.",
        "VillÃ¡ny este una dintre cele mai renumite regiuni de vin roÈ™u din Ungaria.",
        "Mormintele paleocreÈ™tine din PÃ©cs fac parte din patrimoniul mondial UNESCO.",
        "Baranya are o proporÈ›ie ridicatÄƒ de minoritÄƒÈ›i naÈ›ionale, Ã®n special È™vabi dunÄƒreni.",
        "Castelul din SiklÃ³s este unul dintre cele mai bine conservate castele medievale din È›arÄƒ.",
        "StaÈ›iunea balnearÄƒ HarkÃ¡ny este cunoscutÄƒ Ã®n Ã®ntreaga lume pentru apa sa sulfuroasÄƒ.",
        "Regiunea a fost locul bÄƒtÄƒliei istorice de la MohÃ¡cs din anul 1526.",
        "Festivalul BusÃ³jÃ¡rÃ¡s din MohÃ¡cs face parte din patrimoniul cultural imaterial UNESCO.",
        "Baranya este bogatÄƒ Ã®n izvoare termale È™i oferÄƒ numeroase oportunitÄƒÈ›i de wellness."
      ],
      "en": [
        "The county seat is PÃ©cs, a city with over 2,000 years of history.",
        "The Mecsek Mountains protect the region from cold northern winds.",
        "VillÃ¡ny is one of Hungary's most prestigious red wine regions.",
        "The Early Christian Necropolis in PÃ©cs is a UNESCO World Heritage site.",
        "Baranya has a high proportion of national minorities, especially Danube Swabians.",
        "SiklÃ³s Castle is one of the best-preserved medieval castles in the country.",
        "The HarkÃ¡ny spa is world-famous for its sulfurous water.",
        "The county was the site of the historic Battle of MohÃ¡cs in 1526.",
        "The BusÃ³jÃ¡rÃ¡s festival in MohÃ¡cs is part of the UNESCO Intangible Cultural Heritage.",
        "Baranya is rich in thermal springs and offers numerous wellness opportunities."
      ]
    },
    factsAdvanced: {
      de: [
        "Die Komitatshauptstadt PÃ©cs war im Jahr 2010 eine der offiziellen KulturhauptstÃ¤dte Europas.",
        "Die Region VillÃ¡ny gilt als die bekannteste und qualitativ hochwertigste Rotweinregion in ganz Ungarn.",
        "In MohÃ¡cs findet jÃ¤hrlich der BusÃ³jÃ¡rÃ¡s statt, ein spektakulÃ¤res Maskenfest, das zum UNESCO-Weltkulturerbe gehÃ¶rt.",
        "Die Burg von SiklÃ³s ist eine der am besten erhaltenen mittelalterlichen Festungsanlagen im gesamten Land.",
        "Baranya beheimatet eine der grÃ¶ÃŸten Gruppen der deutschen Minderheit in Ungarn, die sogenannten Donauschwaben."
      ],
      "hu": [
        "PÃ©cs vÃ¡rosa 2010-ben EurÃ³pa KulturÃ¡lis FÅ‘vÃ¡rosa volt, ami jelentÅ‘s vÃ¡rosfejlesztÃ©si hullÃ¡mot indÃ­tott el.",
        "A VillÃ¡nyi borvidÃ©k az orszÃ¡g legdÃ©libb Ã©s egyik legelismertebb vÃ¶rÃ¶sbortermelÅ‘ terÃ¼lete.",
        "A mohÃ¡csi busÃ³jÃ¡rÃ¡s az UNESCO szellemi kulturÃ¡lis Ã¶rÃ¶ksÃ©gÃ©nek listÃ¡jÃ¡n is elÅ‘kelÅ‘ helyet foglal el.",
        "BaranyÃ¡ban talÃ¡lhatÃ³ az orszÃ¡g egyik legmÃ©lyebb barlangja, a mecseki Abaligeti-barlang, amely gyÃ³gybarlang is.",
        "A siklÃ³si vÃ¡r az orszÃ¡g egyik legÃ©pebben maradt kÃ¶zÃ©pkori erÅ‘dÃ­tmÃ©nye, amely ma is lÃ¡togathatÃ³."
      ],
      ro: [],
      en: []
    },
  },
  {
    id: "bacs-kiskun",
    type: "region",
    parent: "HU-BK",
    coords: [19.6913, 46.9062],
    name: {"de": "BÃ¡cs-Kiskun", "hu": "BÃ¡cs-Kiskun", "ro": "BÃ¡cs-Kiskun", "en": "BÃ¡cs-Kiskun"},
    image: "/geo-images/hungary/bacs-kiskun.webp",
    description: {
      "de": "BÃ¡cs-Kiskun ist das flÃ¤chenmÃ¤ÃŸig grÃ¶ÃŸte Komitat Ungarns und liegt im zentralen SÃ¼den des Landes zwischen den FlÃ¼ssen Donau und TheiÃŸ. Die Region ist geprÃ¤gt durch die weite Landschaft der GroÃŸen Ungarischen Tiefebene (AlfÃ¶ld) und beherbergt den Nationalpark KiskunsÃ¡g mit seinen einzigartigen SanddÃ¼nen und Salzseen. Das wirtschaftliche und kulturelle Zentrum ist KecskemÃ©t, eine Stadt, die fÃ¼r ihre prÃ¤chtige Jugendstil-Architektur und die Produktion von hochwertigem Aprikosenschnaps (BarackpÃ¡linka) bekannt ist. BÃ¡cs-Kiskun spielt eine zentrale Rolle in der ungarischen Landwirtschaft und ist berÃ¼hmt fÃ¼r seine Traditionen in der Pferdehaltung und Viehzucht. Die Region bietet Besuchern eine authentische Erfahrung der ungarischen Puszta-Kultur gepaart mit moderner Gastfreundschaft.",
      "hu": "BÃ¡cs-Kiskun MagyarorszÃ¡g legnagyobb terÃ¼letÅ± vÃ¡rmegyÃ©je, amely az orszÃ¡g dÃ©li-kÃ¶zÃ©psÅ‘ rÃ©szÃ©n, a Duna Ã©s a Tisza kÃ¶zÃ¶tt terÃ¼l el. A rÃ©giÃ³t az AlfÃ¶ld vÃ©gtelen rÃ³nasÃ¡gai hatÃ¡rozzÃ¡k meg, itt talÃ¡lhatÃ³ a KiskunsÃ¡gi Nemzeti Park is, amely egyedÃ¼lÃ¡llÃ³ homokbuckÃ¡irÃ³l Ã©s szikes tavairÃ³l nevezetes. GazdasÃ¡gi Ã©s kulturÃ¡lis kÃ¶zpontja KecskemÃ©t, amely lenyÅ±gÃ¶zÅ‘ szecessziÃ³s Ã©pÃ­tÃ©szetÃ©rÅ‘l Ã©s a vilÃ¡ghÃ­rÅ± kecskemÃ©ti barackpÃ¡linkÃ¡rÃ³l ismert. BÃ¡cs-Kiskun kÃ¶zponti szerepet tÃ¶lt be a magyar mezÅ‘gazdasÃ¡gban, Ã©s hÃ­res lovas hagyomÃ¡nyairÃ³l, valamint Ã¡llattenyÃ©sztÃ©si kultÃºrÃ¡jÃ¡rÃ³l, kÃ¼lÃ¶nÃ¶sen Bugac kÃ¶rnyÃ©kÃ©n. A vÃ¡rmegye az alfÃ¶ldi tÃ¡j szÃ©psÃ©gÃ©t, a pusztai hagyomÃ¡nyokat Ã©s a modern vendÃ©glÃ¡tÃ¡st Ã¶tvÃ¶zi.",
      "ro": "BÃ¡cs-Kiskun este cel mai mare judeÈ› din Ungaria ca suprafaÈ›Äƒ, situat Ã®n partea central-sudicÄƒ a È›Äƒrii, Ã®ntre fluviile DunÄƒrea È™i Tisa. Regiunea este caracterizatÄƒ de peisajul vast al Marii CÃ¢mpii Maghiare (AlfÃ¶ld) È™i gÄƒzduieÈ™te Parcul NaÈ›ional KiskunsÃ¡g, cu dunele sale de nisip unice È™i lacurile sÄƒrate. Centrul economic È™i cultural este KecskemÃ©t, un oraÈ™ renumit pentru arhitectura sa splendidÄƒ Ã®n stil Art Nouveau È™i pentru producÈ›ia de pÄƒlincÄƒ de caise de Ã®naltÄƒ calitate (BarackpÃ¡linka). BÃ¡cs-Kiskun joacÄƒ un rol central Ã®n agricultura maghiarÄƒ È™i este faimos pentru tradiÈ›iile sale Ã®n creÈ™terea cailor È™i a vitelor. JudeÈ›ul oferÄƒ vizitatorilor o experienÈ›Äƒ autenticÄƒ a culturii maghiare de pustÄƒ, combinatÄƒ cu o ospitalitate modernÄƒ.",
      "en": "BÃ¡cs-Kiskun is the largest county in Hungary by area, located in the central-southern part of the country between the Danube and Tisza rivers. The region is characterized by the vast landscape of the Great Hungarian Plain (AlfÃ¶ld) and is home to the KiskunsÃ¡g National Park with its unique sand dunes and salt lakes. Its economic and cultural center is KecskemÃ©t, a city famous for its stunning Art Nouveau architecture and the production of high-quality apricot brandy (BarackpÃ¡linka). BÃ¡cs-Kiskun plays a central role in Hungarian agriculture and is famous for its traditions in horse breeding and livestock farming. The county offers visitors an authentic experience of Hungarian Puszta culture paired with modern hospitality."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "BÃ¡cs-Kiskun vÃ¡rmegye MagyarorszÃ¡g legnagyobb terÃ¼letÅ± vÃ¡rmegyÃ©je, amely az orszÃ¡g dÃ©li rÃ©szÃ©n, a Duna Ã©s a Tisza kÃ¶zÃ¶tt terÃ¼l el. A rÃ©giÃ³ meghatÃ¡rozÃ³ tÃ¡jegysÃ©ge a KiskunsÃ¡g, amely hÃ­res homokos talajÃ¡rÃ³l, szikes tavairÃ³l Ã©s egyedÃ¼lÃ¡llÃ³ pusztai Ã©lÅ‘vilÃ¡gÃ¡rÃ³l. Itt talÃ¡lhatÃ³ a KiskunsÃ¡gi Nemzeti Park, amely a magyar puszta egyik legfontosabb Å‘rzÅ‘je. A vÃ¡rmegye gazdasÃ¡ga jelentÅ‘s rÃ©szben a mezÅ‘gazdasÃ¡gra Ã©s az Ã©lelmiszeriparra Ã©pÃ¼l, kiemelkedÅ‘ a zÃ¶ldsÃ©g- Ã©s gyÃ¼mÃ¶lcstermesztÃ©s, valamint a borÃ¡szat, kÃ¼lÃ¶nÃ¶sen a KunsÃ¡gi borvidÃ©k rÃ©vÃ©n. A terÃ¼let kulturÃ¡lis Ã©s tÃ¶rtÃ©nelmi emlÃ©kekben is gazdag, olyan vÃ¡rosokkal, mint KecskemÃ©t, Kalocsa vagy Baja, amelyek nÃ©pmÅ±vÃ©szetÃ¼kkel Ã©s gasztronÃ³miÃ¡jukkal vonzzÃ¡k a lÃ¡togatÃ³kat.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist KecskemÃ©t, bekannt als die 'Stadt des Jugendstils'.",
        "Es ist das einzige Komitat Ungarns, das an zwei groÃŸe FlÃ¼sse (Donau und TheiÃŸ) grenzt.",
        "Der Nationalpark KiskunsÃ¡g schÃ¼tzt die einzigartige Flora und Fauna der Sandsteppe.",
        "Bugac ist ein weltberÃ¼hmtes Zentrum fÃ¼r ungarische Hirtentraditionen und ReitvorfÃ¼hrungen.",
        "Die Region ist einer der wichtigsten Produzenten von Obst und GemÃ¼se in Ungarn.",
        "KajÃ³s ist bekannt fÃ¼r seine historischen Weinkeller, die in LÃ¶sswÃ¤nde gegraben wurden.",
        "In KecskemÃ©t befindet sich das berÃ¼hmte KodÃ¡ly-Institut fÃ¼r MusikpÃ¤dagogik.",
        "Das Komitat hat eine bedeutende deutsche Minderheit, insbesondere in der Gegend um Baja.",
        "Die Fischsuppe aus Baja (Bajai halÃ¡szlÃ©) ist eine geschÃ¼tzte kulinarische SpezialitÃ¤t.",
        "BÃ¡cs-Kiskun ist ein wichtiger Standort fÃ¼r die Automobilindustrie (Mercedes-Benz Werk)."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye KecskemÃ©t, amelyet a 'szecessziÃ³ vÃ¡rosakÃ©nt' is emlegetnek.",
        "Ez az egyetlen vÃ¡rmegye, amely kÃ©t nagy folyÃ³val, a DunÃ¡val Ã©s a TiszÃ¡val is hatÃ¡ros.",
        "A KiskunsÃ¡gi Nemzeti Park Ã³vja a homokpusztÃ¡k egyedÃ¼lÃ¡llÃ³ nÃ¶vÃ©ny- Ã©s Ã¡llatvilÃ¡gÃ¡t.",
        "Bugac a magyar pÃ¡sztorhagyomÃ¡nyok Ã©s lovasbemutatÃ³k vilÃ¡ghÃ­rÅ± kÃ¶zpontja.",
        "A rÃ©giÃ³ MagyarorszÃ¡g egyik legfontosabb zÃ¶ldsÃ©g- Ã©s gyÃ¼mÃ¶lcstermesztÅ‘ vidÃ©ke.",
        "HajÃ³s hÃ­res a lÃ¶szfalba vÃ¡jt, tÃ¶bb mint 1200 pincÃ©bÅ‘l Ã¡llÃ³ borfalujÃ¡rÃ³l.",
        "KecskemÃ©ten talÃ¡lhatÃ³ a neves KodÃ¡ly ZoltÃ¡n ZenepedagÃ³giai IntÃ©zet.",
        "A vÃ¡rmegyÃ©ben jelentÅ‘s nÃ©met nemzetisÃ©g Ã©l, kÃ¼lÃ¶nÃ¶sen Baja kÃ¶rnyÃ©kÃ©n.",
        "A bajai halÃ¡szlÃ© hungarikum Ã©s a rÃ©giÃ³ egyik legfontosabb gasztronÃ³miai Ã©rtÃ©ke.",
        "BÃ¡cs-Kiskun a hazai jÃ¡rmÅ±gyÃ¡rtÃ¡s egyik fellegvÃ¡ra a kecskemÃ©ti Mercedes-gyÃ¡r rÃ©vÃ©n."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este KecskemÃ©t, cunoscut sub numele de 'oraÈ™ul secesiunii'.",
        "Este singurul judeÈ› din Ungaria care se Ã®nvecineazÄƒ cu douÄƒ fluvii mari (DunÄƒrea È™i Tisa).",
        "Parcul NaÈ›ional KiskunsÃ¡g protejeazÄƒ flora È™i fauna unicÄƒ a stepei de nisip.",
        "Bugac este un centru renumit mondial pentru tradiÈ›iile pÄƒstoreÈ™ti maghiare È™i spectacolele ecvestre.",
        "Regiunea este unul dintre cei mai importanÈ›i producÄƒtori de fructe È™i legume din Ungaria.",
        "HajÃ³s este faimos pentru satul sÄƒu de crame, cu peste 1.200 de pivniÈ›e sÄƒpate Ã®n loess.",
        "ÃŽn KecskemÃ©t se aflÄƒ renumitul Institut KodÃ¡ly pentru pedagogie muzicalÄƒ.",
        "JudeÈ›ul are o minoritate germanÄƒ semnificativÄƒ, Ã®n special Ã®n zona oraÈ™ului Baja.",
        "Ciorba de peÈ™te din Baja (Bajai halÃ¡szlÃ©) este o specialitate culinarÄƒ protejatÄƒ.",
        "BÃ¡cs-Kiskun este un centru important pentru industria auto (fabrica Mercedes-Benz)."
      ],
      "en": [
        "The county seat is KecskemÃ©t, known as the 'City of Art Nouveau'.",
        "It is the only county in Hungary that borders two major rivers (Danube and Tisza).",
        "The KiskunsÃ¡g National Park protects the unique flora and fauna of the sand steppe.",
        "Bugac is a world-famous center for Hungarian shepherd traditions and equestrian shows.",
        "The region is one of the most important producers of fruits and vegetables in Hungary.",
        "HajÃ³s is famous for its wine cellar village, with over 1,200 cellars dug into loess walls.",
        "KecskemÃ©t is home to the prestigious KodÃ¡ly Institute for music education.",
        "The county has a significant German minority, especially in the area around Baja.",
        "The fish soup from Baja (Bajai halÃ¡szlÃ©) is a protected culinary specialty.",
        "BÃ¡cs-Kiskun is a major hub for the automotive industry (Mercedes-Benz plant)."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "MagyarorszÃ¡g legnagyobb vÃ¡rmegyÃ©je, terÃ¼lete tÃ¶bb mint 8400 nÃ©gyzetkilomÃ©ter.",
        "Itt talÃ¡lhatÃ³ a KiskunsÃ¡gi Nemzeti Park, amely az UNESCO bioszfÃ©ra-rezervÃ¡tum rÃ©sze.",
        "A vÃ¡rmegye hÃ­res a kalocsai paprikÃ¡rÃ³l Ã©s a vilÃ¡ghÃ­rÅ± kalocsai hÃ­mzÃ©srÅ‘l.",
        "KecskemÃ©t a vÃ¡rmegye szÃ©khelye, hÃ­res szecessziÃ³s Ã©pÃ­tÃ©szetÃ©rÅ‘l Ã©s a barackpÃ¡linkÃ¡rÃ³l.",
        "Baja vÃ¡rosa a Duna partjÃ¡n fekszik, Ã©s az Ã©vente megrendezett halÃ¡szlÃ©fÅ‘zÅ‘ fesztivÃ¡ljÃ¡rÃ³l nevezetes."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "bekes",
    type: "region",
    parent: "HU-BE",
    coords: [21.0978, 46.6797],
    name: {"de": "BÃ©kÃ©s", "hu": "BÃ©kÃ©s", "ro": "BÃ©kÃ©s", "en": "BÃ©kÃ©s"},
    image: "/geo-images/hungary/bekes.webp",
    description: {
      "de": "Das Komitat BÃ©kÃ©s liegt im SÃ¼dosten Ungarns an der Grenze zu RumÃ¤nien und ist als das 'BrotkÃ¶rbchen' des Landes bekannt. Die Region ist geprÃ¤gt von extrem fruchtbaren SchwarzerdebÃ¶den und einer weiten, flachen Landschaft, die ideal fÃ¼r den groÃŸflÃ¤chigen Ackerbau ist. Das kulturelle und administrative Zentrum ist BÃ©kÃ©scsaba, eine Stadt, die weltweit fÃ¼r ihre Gastronomie, insbesondere die berÃ¼hmte Csabaer Wurst (Csabai kolbÃ¡sz), bekannt ist. BÃ©kÃ©s beherbergt zudem bedeutende historische StÃ¤tten wie die Burg von Gyula, die einzige erhaltene Backsteinburg in Mitteleuropa, und ist reich an Thermalquellen. Die Region bewahrt stolz ihre vielfÃ¤ltigen Traditionen, die durch das jahrhundertelange Zusammenleben von Ungarn, Slowaken, RumÃ¤nen und Deutschen geformt wurden.",
      "hu": "BÃ©kÃ©s vÃ¡rmegye MagyarorszÃ¡g dÃ©lkeleti rÃ©szÃ©n, a romÃ¡n hatÃ¡r mentÃ©n fekszik, Ã©s az orszÃ¡g egyik legfontosabb mezÅ‘gazdasÃ¡gi terÃ¼letekÃ©nt, az 'orszÃ¡g Ã©lÃ©stÃ¡rakÃ©nt' ismert. A rÃ©giÃ³t rendÃ­vÃ¼l termÃ©keny mezÅ‘sÃ©gi talajok Ã©s vÃ©gtelen rÃ³nasÃ¡gok jellemzik, amelyek ideÃ¡lisak a szÃ¡ntÃ³fÃ¶ldi nÃ¶vÃ©nytermesztÃ©shez. KulturÃ¡lis Ã©s kÃ¶zigazgatÃ¡si kÃ¶zpontja BÃ©kÃ©scsaba, amely vilÃ¡gszerte hÃ­res gasztronÃ³miÃ¡jÃ¡rÃ³l, kÃ¼lÃ¶nÃ¶sen a hungarikumnak szÃ¡mÃ­tÃ³ csabai kolbÃ¡szrÃ³l. BÃ©kÃ©s vÃ¡rmegye olyan jelentÅ‘s tÃ¶rtÃ©nelmi emlÃ©kekkel is bÃ¼szkÃ©lkedhet, mint a gyulai vÃ¡r, amely KÃ¶zÃ©p-EurÃ³pa egyetlen Ã©pen maradt gÃ³tikus tÃ©glaerÅ‘dÃ­tmÃ©nye. A vÃ¡rmegye bÃ¼szkÃ©n Å‘rzi sokszÃ­nÅ± hagyomÃ¡nyait, amelyeket a magyarok, szlovÃ¡kok, romÃ¡nok Ã©s nÃ©metek Ã©vszÃ¡zados egyÃ¼ttÃ©lÃ©se formÃ¡lt.",
      "ro": "JudeÈ›ul BÃ©kÃ©s este situat Ã®n sud-estul Ungariei, la graniÈ›a cu RomÃ¢nia, È™i este cunoscut drept 'coÈ™ul de pÃ¢ine' al È›Äƒrii. Regiunea este caracterizatÄƒ de soluri de cernoziom extrem de fertile È™i de un peisaj plat È™i vast, ideal pentru agricultura la scarÄƒ largÄƒ. Centrul cultural È™i administrativ este BÃ©kÃ©scsaba, un oraÈ™ renumit Ã®n Ã®ntreaga lume pentru gastronomia sa, Ã®n special pentru celebrul cÃ¢rnat de Csaba (Csabai kolbÃ¡sz). BÃ©kÃ©s gÄƒzduieÈ™te, de asemenea, situri istorice importante, cum ar fi Castelul din Gyula, singura cetate de cÄƒrÄƒmidÄƒ conservatÄƒ din Europa CentralÄƒ, È™i este bogat Ã®n izvoare termale. JudeÈ›ul Ã®È™i pÄƒstreazÄƒ cu mÃ¢ndrie tradiÈ›iile diverse, modelate de convieÈ›uirea de secole a maghiarilor, slovacilor, romÃ¢nilor È™i germanilor.",
      "en": "BÃ©kÃ©s County is located in southeastern Hungary on the border with Romania and is known as the country's 'breadbasket'. The region is characterized by extremely fertile chernozem soils and a vast, flat landscape ideal for large-scale arable farming. Its cultural and administrative center is BÃ©kÃ©scsaba, a city world-famous for its gastronomy, particularly the renowned Csaba sausage (Csabai kolbÃ¡sz). BÃ©kÃ©s also home to significant historical sites such as the Gyula Castle, the only preserved brick fortress in Central Europe, and is rich in thermal springs. The county proudly preserves its diverse traditions, shaped by centuries of coexistence between Hungarians, Slovaks, Romanians, and Germans."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "BÃ©kÃ©s vÃ¡rmegye MagyarorszÃ¡g dÃ©lkeleti rÃ©szÃ©n fekszik, Ã©s az orszÃ¡g egyik legfontosabb mezÅ‘gazdasÃ¡gi terÃ¼lete, amelyet gyakran az orszÃ¡g 'Ã©lÃ©skamrÃ¡jakÃ©nt' is emlegetnek. A tÃ¡jat az AlfÃ¶ld vÃ©gtelen rÃ³nasÃ¡gai, termÃ©keny feketefÃ¶ldek Ã©s lassÃº folyÃ¡sÃº folyÃ³k, mint a KÃ¶rÃ¶sÃ¶k, hatÃ¡rozzÃ¡k meg. A rÃ©giÃ³ hÃ­res vendÃ©gszeretetÃ©rÅ‘l, gazdag nÃ©pi hagyomÃ¡nyairÃ³l Ã©s gasztronÃ³miai kÃ¼lÃ¶nlegessÃ©geirÅ‘l, mint pÃ©ldÃ¡ul a csabai Ã©s gyulai kolbÃ¡sz. BÃ©kÃ©s vÃ¡rmegye szÃ¡mos kulturÃ¡lis kincset rejt, kÃ¶ztÃ¼k a gyulai vÃ¡rat, amely KÃ¶zÃ©p-EurÃ³pa egyetlen Ã©psÃ©gben maradt gÃ³tikus sÃ­kvÃ¡ra. A termÃ©szet kedvelÅ‘it a KÃ¶rÃ¶s-Maros Nemzeti Park hÃ¡borÃ­tatlan tÃ¡jai Ã©s a gazdag madÃ¡rvilÃ¡g vÃ¡rja.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist BÃ©kÃ©scsaba, Austragungsort des berÃ¼hmten Wurstfestivals.",
        "Die Burg von Gyula ist die einzige intakte gotische Backsteinburg in Mitteleuropa.",
        "Die Region hat die besten BodenqualitÃ¤ten Ungarns fÃ¼r den Weizenanbau.",
        "Szarvas beherbergt das grÃ¶ÃŸte Arboretum Ungarns und das historische MÃ¼hlendenkmal.",
        "Die Csabaer Wurst (Csabai kolbÃ¡sz) ist ein geschÃ¼tztes Hungarikum.",
        "Das Heilbad in Gyula befindet sich im ehemaligen Park des AlmÃ¡sy-Schlosses.",
        "MezÅ‘hegyes ist berÃ¼hmt fÃ¼r sein staatliches GestÃ¼t und seine Pferdezucht-Tradition.",
        "Die Region ist ein wichtiges Zentrum der slowakischen Minderheit in Ungarn.",
        "BÃ©kÃ©s ist reich an Erdgasvorkommen und geothermischer Energie.",
        "Die FlÃ¼sse KÃ¶rÃ¶s bieten hervorragende MÃ¶glichkeiten fÃ¼r Angler und Wassertouristen."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye BÃ©kÃ©scsaba, a hÃ­res Csabai KolbÃ¡szfesztivÃ¡l otthona.",
        "A gyulai vÃ¡r KÃ¶zÃ©p-EurÃ³pa egyetlen Ã©pen maradt gÃ³tikus tÃ©glaerÅ‘dÃ­tmÃ©nye.",
        "A rÃ©giÃ³ rendelkezik MagyarorszÃ¡g legjobb minÅ‘sÃ©gÅ± termÅ‘fÃ¶ldjeivel.",
        "Szarvason talÃ¡lhatÃ³ az orszÃ¡g legnagyobb arborÃ©tuma Ã©s a tÃ¶rtÃ©nelmi MagyarorszÃ¡g kÃ¶zepe.",
        "A csabai kolbÃ¡sz Ã©s a gyulai kolbÃ¡sz is vilÃ¡gszerte ismert hungarikum.",
        "A Gyulai VÃ¡rfÃ¼rdÅ‘ az egykori AlmÃ¡sy-kastÃ©ly termÃ©szetvÃ©delmi terÃ¼lettÃ© nyilvÃ¡nÃ­tott parkjÃ¡ban talÃ¡lhatÃ³.",
        "MezÅ‘hegyes hÃ­res az Ãllami MÃ©nesbirtokrÃ³l Ã©s a nÃ³niusz lÃ³fajta tenyÃ©sztÃ©sÃ©rÅ‘l.",
        "A vÃ¡rmegye a magyarorszÃ¡gi szlovÃ¡k kisebbsÃ©g egyik legfontosabb kulturÃ¡lis kÃ¶zpontja.",
        "BÃ©kÃ©s vÃ¡rmegye jelentÅ‘s fÃ¶ldgÃ¡zkÃ©szletekkel Ã©s geotermikus energiÃ¡val rendelkezik.",
        "A KÃ¶rÃ¶sÃ¶k vidÃ©ke kivÃ¡lÃ³ lehetÅ‘sÃ©geket nyÃºjt a horgÃ¡szat Ã©s a vÃ­zi turizmus kedvelÅ‘inek."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este BÃ©kÃ©scsaba, gazda celebrului Festival al CÃ¢rnatului.",
        "Castelul din Gyula este singura cetate goticÄƒ de cÄƒrÄƒmidÄƒ intactÄƒ din Europa CentralÄƒ.",
        "Regiunea are cele mai bune calitÄƒÈ›i de sol din Ungaria pentru cultivarea grÃ¢ului.",
        "Szarvas gÄƒzduieÈ™te cel mai mare arboretum din Ungaria È™i centrul istoric al Ungariei Mari.",
        "CÃ¢rnatul de Csaba (Csabai kolbÃ¡sz) este un produs Hungarikum protejat.",
        "BÄƒile termale din Gyula se aflÄƒ Ã®n fostul parc al castelului AlmÃ¡sy.",
        "MezÅ‘hegyes este faimos pentru herghelia sa de stat È™i tradiÈ›ia creÈ™terii cailor.",
        "Regiunea este un centru important al minoritÄƒÈ›ii slovace din Ungaria.",
        "BÃ©kÃ©s este bogat Ã®n zÄƒcÄƒminte de gaze naturale È™i energie geotermalÄƒ.",
        "RÃ¢urile CriÈ™ (KÃ¶rÃ¶s) oferÄƒ oportunitÄƒÈ›i excelente pentru pescari È™i turiÈ™tii nautici."
      ],
      "en": [
        "The county seat is BÃ©kÃ©scsaba, home to the famous Sausage Festival.",
        "Gyula Castle is the only intact Gothic brick fortress in Central Europe.",
        "The region has the best soil quality in Hungary for wheat cultivation.",
        "Szarvas is home to Hungary's largest arboretum and the historic center of old Hungary.",
        "The Csaba sausage (Csabai kolbÃ¡sz) is a protected Hungarikum product.",
        "The Gyula thermal bath is located in the former park of the AlmÃ¡sy Castle.",
        "MezÅ‘hegyes is famous for its State Stud Farm and horse breeding traditions.",
        "The region is an important center for the Slovak minority in Hungary.",
        "BÃ©kÃ©s is rich in natural gas deposits and geothermal energy.",
        "The KÃ¶rÃ¶s rivers offer excellent opportunities for anglers and water tourists."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye BÃ©kÃ©scsaba, amely a vilÃ¡ghÃ­rÅ± Csabai KolbÃ¡szfesztivÃ¡l otthona.",
        "Itt talÃ¡lhatÃ³ a gyulai vÃ¡r, az AlfÃ¶ld egyik legjelentÅ‘sebb kÃ¶zÃ©pkori mÅ±emlÃ©ke.",
        "BÃ©kÃ©s vÃ¡rmegye az orszÃ¡g egyik legfontosabb gabonatermelÅ‘ vidÃ©ke.",
        "Szarvas vÃ¡rosa ad otthont a tÃ¶rtÃ©nelmi MagyarorszÃ¡g fÃ¶ldrajzi kÃ¶zÃ©ppontjÃ¡nak.",
        "A vÃ¡rmegye folyÃ³i, a KÃ¶rÃ¶sÃ¶k, nÃ©pszerÅ±ek a vÃ­zi tÃºrÃ¡zÃ³k Ã©s a horgÃ¡szok kÃ¶rÃ©ben."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "borsod-abauj-zemplen",
    type: "region",
    parent: "HU-BZ",
    coords: [20.79, 48.1],
    name: {"de": "Borsod-AbaÃºj-ZemplÃ©n", "hu": "Borsod-AbaÃºj-ZemplÃ©n", "ro": "Borsod-AbaÃºj-ZemplÃ©n", "en": "Borsod-AbaÃºj-ZemplÃ©n"},
    description: {
      "de": "Das Komitat Borsod-AbaÃºj-ZemplÃ©n liegt im Nordosten Ungarns und ist eine der landschaftlich vielfÃ¤ltigsten Regionen des Landes. Es umfasst die majestÃ¤tischen GebirgszÃ¼ge des BÃ¼kk und des ZemplÃ©n sowie die weltberÃ¼hmte Weinregion Tokaj, die zum UNESCO-Welterbe gehÃ¶rt. Das administrative Zentrum ist Miskolc, eine Stadt mit einer starken industriellen Vergangenheit, die heute fÃ¼r ihre touristischen Attraktionen wie das einzigartige HÃ¶hlenbad von Miskolctapolca bekannt ist. Die Region ist reich an mittelalterlichen Burgen, historischen StÃ¤dten und bietet mit dem Nationalpark Aggtelek eines der beeindruckendsten HÃ¶hlensysteme Europas. Borsod-AbaÃºj-ZemplÃ©n verbindet auf faszinierende Weise unberÃ¼hrte Natur, jahrhundertealte Weinkultur und ein reiches historisches Erbe.",
      "hu": "Borsod-AbaÃºj-ZemplÃ©n vÃ¡rmegye MagyarorszÃ¡g Ã©szakkeleti rÃ©szÃ©n fekszik, Ã©s az orszÃ¡g egyik legvÃ¡ltozatosabb tÃ¡jegysÃ©ge. TerÃ¼letÃ©n osztozik a BÃ¼kk Ã©s a ZemplÃ©ni-hegysÃ©g vonulata, valamint itt talÃ¡lhatÃ³ a vilÃ¡ghÃ­rÅ± Tokaji borvidÃ©k is, amely az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze. SzÃ©khelye Miskolc, amely jelentÅ‘s ipari mÃºltja mellett ma mÃ¡r turisztikai lÃ¡tvÃ¡nyossÃ¡gairÃ³l, pÃ©ldÃ¡ul a miskolctapolcai BarlangfÃ¼rdÅ‘rÅ‘l hÃ­res. A vÃ¡rmegye rendkÃ­vÃ¼l gazdag kÃ¶zÃ©pkori vÃ¡rakban, tÃ¶rtÃ©nelmi vÃ¡rosokban, Ã©s itt talÃ¡lhatÃ³ az Aggteleki Nemzeti Park is EurÃ³pa egyik leglenyÅ±gÃ¶zÅ‘bb barlangrendszerÃ©vel. Borsod-AbaÃºj-ZemplÃ©n a vadregÃ©nyes termÃ©szet, az Ã©vezredes borkultÃºra Ã©s a gazdag tÃ¶rtÃ©nelmi Ã¶rÃ¶ksÃ©g kÃ¼lÃ¶nleges elegyÃ©t kÃ­nÃ¡lja.",
      "ro": "JudeÈ›ul Borsod-AbaÃºj-ZemplÃ©n este situat Ã®n nord-estul Ungariei È™i este una dintre cele mai diverse regiuni din punct de vedere peisagistic ale È›Äƒrii. Acesta cuprinde lanÈ›urile muntoase maiestuoase BÃ¼kk È™i ZemplÃ©n, precum È™i regiunea viticolÄƒ Tokaj, renumitÄƒ Ã®n Ã®ntreaga lume È™i inclusÄƒ Ã®n patrimoniul mondial UNESCO. Centrul administrativ este Miskolc, un oraÈ™ cu un trecut industrial puternic, cunoscut astÄƒzi pentru atracÈ›iile sale turistice, cum ar fi baia unicÄƒ Ã®n peÈ™terÄƒ de la Miskolctapolca. Regiunea este bogatÄƒ Ã®n castele medievale, oraÈ™e istorice È™i oferÄƒ, prin Parcul NaÈ›ional Aggtelek, unul dintre cele mai impresionante sisteme de peÈ™teri din Europa. Borsod-AbaÃºj-ZemplÃ©n Ã®mbinÄƒ Ã®ntr-un mod fascinant natura virginÄƒ, cultura viticolÄƒ secularÄƒ È™i o moÈ™tenire istoricÄƒ bogatÄƒ.",
      "en": "Borsod-AbaÃºj-ZemplÃ©n County is located in northeastern Hungary and is one of the country's most geographically diverse regions. It encompasses the majestic mountain ranges of BÃ¼kk and ZemplÃ©n, as well as the world-famous Tokaj wine region, which is a UNESCO World Heritage site. Its administrative center is Miskolc, a city with a strong industrial past that is now famous for its tourist attractions, such as the unique Cave Bath of Miskolctapolca. The county is rich in medieval castles, historic towns, and is home to the Aggtelek National Park, featuring one of Europe's most impressive cave systems. Borsod-AbaÃºj-ZemplÃ©n offers a fascinating blend of wild nature, centuries-old wine culture, and a rich historical heritage."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Borsod-AbaÃºj-ZemplÃ©n vÃ¡rmegye MagyarorszÃ¡g Ã©szakkeleti rÃ©szÃ©n terÃ¼l el, Ã©s az orszÃ¡g egyik legvÃ¡ltozatosabb tÃ¡jegysÃ©ge. A rÃ©giÃ³ Ã©szaki rÃ©szÃ©t a ZemplÃ©ni-hegysÃ©g Ã©s az Aggteleki-karszt vonulatai uraljÃ¡k, ahol a vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezÅ‘ Baradla-barlang talÃ¡lhatÃ³. DÃ©lebbre a BÃ¼kk-hegysÃ©g Ã©s a MÃ¡tra nyÃºlvÃ¡nyai, valamint a termÃ©keny AlfÃ¶ld talÃ¡lkozÃ¡sa alkot festÅ‘i kÃ¶rnyezetet. Ez a vÃ¡rmegye ad otthont a vilÃ¡ghÃ­rÅ± Tokaji borvidÃ©knek is, amely a vilÃ¡g elsÅ‘ zÃ¡rt borvidÃ©ke. A terÃ¼let tÃ¶rtÃ©nelmi vÃ¡rakban is rendkÃ­vÃ¼l gazdag, mint pÃ©ldÃ¡ul DiÃ³sgyÅ‘r, BoldogkÅ‘ vagy SÃ¡rospatak, amelyek a magyar tÃ¶rtÃ©nelem fontos tanÃºi.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Miskolc, die viertgrÃ¶ÃŸte Stadt Ungarns.",
        "Die Weinregion Tokaj-Hegyalja ist das erste geschlossene Weingebiet der Welt.",
        "Das HÃ¶hlenbad von Miskolctapolca ist in Europa einzigartig.",
        "Die Baradla-HÃ¶hle in Aggtelek gehÃ¶rt zum UNESCO-Weltnaturerbe.",
        "Die Burg von DiÃ³sgyÅ‘r war einst ein beliebter Aufenthaltsort ungarischer KÃ¶niginnen.",
        "SÃ¡rospatak wird oft als das 'Athen am Bodrog' bezeichnet.",
        "LillafÃ¼red beherbergt den hÃ¶chsten Wasserfall Ungarns und ein prÃ¤chtiges Schlosshotel.",
        "Die Region ist bekannt fÃ¼r ihre traditionelle Handwerkskunst, wie die MatyÃ³-Stickerei.",
        "Borsod-AbaÃºj-ZemplÃ©n hat die zweithÃ¶chste Anzahl an Burgen im Land.",
        "Das ZemplÃ©n-Gebirge ist vulkanischen Ursprungs und reich an Mineralien."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye Miskolc, MagyarorszÃ¡g negyedik legnÃ©pesebb vÃ¡rosa.",
        "A Tokaj-hegyaljai borvidÃ©k a vilÃ¡g elsÅ‘ zÃ¡rt borvidÃ©ke Ã©s UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­n.",
        "A miskolctapolcai BarlangfÃ¼rdÅ‘ EurÃ³pÃ¡ban egyedÃ¼lÃ¡llÃ³ termÃ©szetes kÃ©pzÅ‘dmÃ©ny.",
        "Az Aggteleki-karszt barlangrendszere az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
        "A diÃ³sgyÅ‘ri vÃ¡r a kÃ¶zÃ©pkorban a magyar kirÃ¡lynÃ©k jegyajÃ¡ndÃ©ka Ã©s kedvelt lakhelye volt.",
        "SÃ¡rospatakot gyakran emlegetik a 'Bodrog-parti AthÃ©n' nÃ©ven kulturÃ¡lis jelentÅ‘sÃ©ge miatt.",
        "LillafÃ¼reden talÃ¡lhatÃ³ az orszÃ¡g legmagasabb vÃ­zesÃ©se Ã©s a festÅ‘i PalotaszÃ¡llÃ³.",
        "A vÃ¡rmegye hÃ­res nÃ©pmÅ±vÃ©szetÃ©rÅ‘l, kÃ¼lÃ¶nÃ¶sen a matyÃ³ hÃ­mzÃ©srÅ‘l MezÅ‘kÃ¶vesden.",
        "Borsod-AbaÃºj-ZemplÃ©n rendelkezik az egyik legtÃ¶bb kÃ¶zÃ©pkori vÃ¡rral az orszÃ¡gban.",
        "A ZemplÃ©ni-hegysÃ©g vulkanikus eredetÅ±, Ã©s rendkÃ­vÃ¼l gazdag Ã¡svÃ¡nykincsekben."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este Miskolc, al patrulea oraÈ™ ca mÄƒrime din Ungaria.",
        "Regiunea viticolÄƒ Tokaj-Hegyalja este prima regiune viticolÄƒ Ã®nchisÄƒ din lume.",
        "Baia Ã®n peÈ™terÄƒ de la Miskolctapolca este unicÄƒ Ã®n Europa.",
        "PeÈ™tera Baradla din Aggtelek face parte din patrimoniul mondial natural UNESCO.",
        "Castelul DiÃ³sgyÅ‘r a fost odinioarÄƒ reÈ™edinÈ›a preferatÄƒ a reginelor Ungariei.",
        "SÃ¡rospatak este adesea numit 'Atena de pe malul Bodrogului'.",
        "LillafÃ¼red gÄƒzduieÈ™te cea mai Ã®naltÄƒ cascadÄƒ din Ungaria È™i un hotel-castel magnific.",
        "Regiunea este cunoscutÄƒ pentru meÈ™teÈ™ugurile tradiÈ›ionale, cum ar fi broderia MatyÃ³.",
        "Borsod-AbaÃºj-ZemplÃ©n are al doilea cel mai mare numÄƒr de castele din È›arÄƒ.",
        "MunÈ›ii ZemplÃ©n sunt de origine vulcanicÄƒ È™i sunt bogaÈ›i Ã®n minerale."
      ],
      "en": [
        "The county seat is Miskolc, the fourth largest city in Hungary.",
        "The Tokaj-Hegyalja wine region is the world's first closed wine district.",
        "The Cave Bath of Miskolctapolca is unique in Europe.",
        "The Baradla Cave in Aggtelek is a UNESCO World Natural Heritage site.",
        "DiÃ³sgyÅ‘r Castle was once a favorite residence of Hungarian queens.",
        "SÃ¡rospatak is often referred to as the 'Athens on the Bodrog'.",
        "LillafÃ¼red is home to Hungary's highest waterfall and a magnificent castle hotel.",
        "The region is known for its traditional crafts, such as MatyÃ³ embroidery.",
        "Borsod-AbaÃºj-ZemplÃ©n has the second highest number of castles in the country.",
        "The ZemplÃ©n Mountains are of volcanic origin and rich in minerals."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt talÃ¡lhatÃ³ a Tokaj-hegyaljai borvidÃ©k, amely 2002 Ã³ta az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
        "A vÃ¡rmegyÃ©ben fekszik az Aggteleki Nemzeti Park a hÃ­res Baradla-cseppkÅ‘barlanggal.",
        "Miskolc a vÃ¡rmegye szÃ©khelye, MagyarorszÃ¡g egyik legnagyobb vÃ¡rosa Ã©s fontos ipari kÃ¶zpontja.",
        "Miskolctapolca bÃ¼szkÃ©lkedhet EurÃ³pa egyetlen barlangfÃ¼rdÅ‘jÃ©vel.",
        "A zemplÃ©ni vÃ¡rhegyek Ã©s romok a magyarorszÃ¡gi kÃ©ktÃºra ÃºtvonalÃ¡nak nÃ©pszerÅ± megÃ¡llÃ³it alkotjÃ¡k."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "csongrad-csanad",
    type: "region",
    parent: "HU-CS",
    coords: [20.1414, 46.253],
    name: {"de": "CsongrÃ¡d-CsanÃ¡d", "hu": "CsongrÃ¡d-CsanÃ¡d", "ro": "CsongrÃ¡d-CsanÃ¡d", "en": "CsongrÃ¡d-CsanÃ¡d"},
    image: "/geo-images/hungary/csongrad-csanad.webp",
    description: {
      "de": "Das Komitat CsongrÃ¡d-CsanÃ¡d liegt im sonnigen SÃ¼den Ungarns an der Grenze zu Serbien und RumÃ¤nien und wird durch den majestÃ¤tischen Fluss TheiÃŸ in zwei HÃ¤lften geteilt. Die Region ist bekannt fÃ¼r ihre extrem hohe Anzahl an Sonnenstunden, was sie zum idealen Standort fÃ¼r den Anbau der weltberÃ¼hmten Szegediner Paprika macht. Das kulturelle und wirtschaftliche Zentrum ist Szeged, eine prÃ¤chtige UniversitÃ¤tsstadt, die fÃ¼r ihre beeindruckende Votivkirche, ihre lebendige Kulturszene und ihre einzigartige Jugendstil-Architektur berÃ¼hmt ist. CsongrÃ¡d-CsanÃ¡d beherbergt zudem bedeutende historische GedenkstÃ¤tten wie den Nationalen Historischen Gedenkpark in Ã“pusztaszer, wo die ungarische Landnahme gewÃ¼rdigt wird. Die Region bietet eine perfekte Mischung aus kulinarischen GenÃ¼ssen, thermaler Entspannung und tiefgreifender ungarischer Geschichte.",
      "hu": "CsongrÃ¡d-CsanÃ¡d vÃ¡rmegye MagyarorszÃ¡g napsÃ¼tÃ¶tte dÃ©li rÃ©szÃ©n, a szerb Ã©s a romÃ¡n hatÃ¡r mentÃ©n fekszik, Ã©s a fensÃ©ges Tisza folyÃ³ szeli kettÃ©. A rÃ©giÃ³ hÃ­res a rendkÃ­vÃ¼l magas napsÃ¼tÃ©ses Ã³rÃ¡k szÃ¡mÃ¡rÃ³l, ami ideÃ¡lissÃ¡ teszi a vilÃ¡ghÃ­rÅ± szegedi fÅ±szerpaprika termesztÃ©sÃ©hez. KulturÃ¡lis Ã©s gazdasÃ¡gi kÃ¶zpontja Szeged, a patinÃ¡s egyetemi vÃ¡ros, amely lenyÅ±gÃ¶zÅ‘ Fogadalmi templomÃ¡rÃ³l, pezsgÅ‘ kulturÃ¡lis Ã©letÃ©rÅ‘l Ã©s egyedÃ¼lÃ¡llÃ³ szecessziÃ³s Ã©pÃ­tÃ©szetÃ©rÅ‘l ismert. CsongrÃ¡d-CsanÃ¡d ad otthont olyan jelentÅ‘s tÃ¶rtÃ©nelmi emlÃ©khelyeknek is, mint az Ã“pusztaszeri Nemzeti TÃ¶rtÃ©neti EmlÃ©kpark, ahol a magyar honfoglalÃ¡s emlÃ©ke elÅ‘tt tiszteleghetÃ¼nk. A vÃ¡rmegye a kulinÃ¡ris Ã©lvezetek, a termÃ¡lvizes kikapcsolÃ³dÃ¡s Ã©s a mÃ©lyre nyÃºlÃ³ magyar tÃ¶rtÃ©nelem tÃ¶kÃ©letes Ã¶tvÃ¶zetÃ©t kÃ­nÃ¡lja.",
      "ro": "JudeÈ›ul CsongrÃ¡d-CsanÃ¡d este situat Ã®n sudul Ã®nsorit al Ungariei, la graniÈ›a cu Serbia È™i RomÃ¢nia, È™i este Ã®mpÄƒrÈ›it Ã®n douÄƒ jumÄƒtÄƒÈ›i de maiestuosul rÃ¢u Tisa. Regiunea este cunoscutÄƒ pentru numÄƒrul sÄƒu extrem de mare de ore de soare, ceea ce o face locaÈ›ia idealÄƒ pentru cultivarea faimoasei boia de Szeged. Centrul cultural È™i economic este Szeged, un oraÈ™ universitar splendid, renumit pentru impresionanta sa BisericÄƒ VotivÄƒ, scena culturalÄƒ vibrantÄƒ È™i arhitectura sa unicÄƒ Ã®n stil Art Nouveau. CsongrÃ¡d-CsanÃ¡d gÄƒzduieÈ™te, de asemenea, situri istorice importante, cum ar fi Parcul NaÈ›ional Memorial Istoric din Ã“pusztaszer, unde este comemoratÄƒ descÄƒlecarea maghiarilor. JudeÈ›ul oferÄƒ un amestec perfect de delicii culinare, relaxare termalÄƒ È™i istorie maghiarÄƒ profundÄƒ.",
      "en": "CsongrÃ¡d-CsanÃ¡d County is located in the sunny south of Hungary on the border with Serbia and Romania, and is divided into two halves by the majestic river Tisza. The region is famous for its extremely high number of sunshine hours, making it the ideal location for growing the world-renowned Szeged paprika. Its cultural and economic center is Szeged, a prestigious university city famous for its stunning Votive Church, vibrant cultural scene, and unique Art Nouveau architecture. CsongrÃ¡d-CsanÃ¡d is also home to significant historical sites such as the Ã“pusztaszer National Heritage Park, where the Hungarian conquest is commemorated. The county offers a perfect blend of culinary delights, thermal relaxation, and deep-rooted Hungarian history."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "CsongrÃ¡d-CsanÃ¡d vÃ¡rmegye az AlfÃ¶ld dÃ©li rÃ©szÃ©n, a Tisza Ã©s a Maros talÃ¡lkozÃ¡sÃ¡nÃ¡l fekszik, Ã©s MagyarorszÃ¡g egyik legnapsÃ¼tÃ©sesebb vidÃ©ke. A rÃ©giÃ³ mezÅ‘gazdasÃ¡gi jelentÅ‘sÃ©ge kiemelkedÅ‘, kÃ¼lÃ¶nÃ¶sen a vilÃ¡ghÃ­rÅ± szegedi fÅ±szerpaprika Ã©s a makÃ³i hagyma termesztÃ©se rÃ©vÃ©n. A vÃ¡rmegye kÃ¶zpontja Szeged, a 'napfÃ©ny vÃ¡rosa', amely lenyÅ±gÃ¶zÅ‘ szecessziÃ³s Ã©pÃ¼leteirÅ‘l, DÃ³mjÃ¡rÃ³l Ã©s pezsgÅ‘ egyetemi Ã©letÃ©rÅ‘l ismert. A tÃ¡jat a Tisza folyÃ³ hatÃ¡rozza meg, amely nemcsak a gazdasÃ¡g, hanem a turizmus Ã©s a kikapcsolÃ³dÃ¡s fontos szÃ­ntere is. A terÃ¼let gazdag nÃ©prajzi hagyomÃ¡nyokban, mint pÃ©ldÃ¡ul a tÃ¡pai gyÃ©kÃ©nyszÃ¶vÃ©s vagy a szegedi papucs kÃ©szÃ­tÃ©se.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Szeged, bekannt als die 'Stadt des Sonnenscheins'.",
        "Die Region beherbergt den tiefsten Punkt Ungarns in der NÃ¤he von Szeged.",
        "Szegediner Salami (Pick) und Paprika sind weltweit bekannte Exportprodukte.",
        "In Ã“pusztaszer befindet sich das monumentale Feszty-Panorama-GemÃ¤lde.",
        "Die Stadt MakÃ³ ist berÃ¼hmt fÃ¼r ihre Zwiebelproduktion und das Hagymatikum-Bad.",
        "Die TheiÃŸ-BlÃ¼te (Eintagsfliegen-PhÃ¤nomen) ist ein einzigartiges Naturschauspiel der Region.",
        "Die UniversitÃ¤t von Szeged gehÃ¶rt zu den renommiertesten Bildungseinrichtungen Mitteleuropas.",
        "Das Szegediner Freilichtfestival ist eines der grÃ¶ÃŸten Theaterereignisse Ungarns.",
        "Die Region hat eine bedeutende ErdÃ¶l- und ErdgasfÃ¶rderung.",
        "Die Fischsuppe aus Szeged (Szegedi halÃ¡szlÃ©) ist ein geschÃ¼tztes kulinarisches Erbe."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye Szeged, amelyet a 'napfÃ©ny vÃ¡rosakÃ©nt' is emlegetnek.",
        "Itt talÃ¡lhatÃ³ MagyarorszÃ¡g legmÃ©lyebb pontja, Szeged kÃ¶zelÃ©ben.",
        "A szegedi Pick szalÃ¡mi Ã©s a fÅ±szerpaprika vilÃ¡gszerte ismert hungarikumok.",
        "Ã“pusztaszeren lÃ¡thatÃ³ a monumentÃ¡lis Feszty-kÃ¶rkÃ©p, a magyarok bejÃ¶vetelÃ©rÅ‘l.",
        "MakÃ³ vÃ¡rosa hÃ­res a vÃ¶rÃ¶shagymÃ¡jÃ¡rÃ³l Ã©s a kÃ¼lÃ¶nleges Hagymatikum fÃ¼rdÅ‘rÅ‘l.",
        "A tiszavirÃ¡gzÃ¡s egyedÃ¼lÃ¡llÃ³ termÃ©szeti jelensÃ©g, amely minden Ã©vben vonzza a lÃ¡togatÃ³kat.",
        "A Szegedi TudomÃ¡nyegyetem a kÃ¶zÃ©p-eurÃ³pai rÃ©giÃ³ egyik legnevesebb felsÅ‘oktatÃ¡si intÃ©zmÃ©nye.",
        "A Szegedi SzabadtÃ©ri JÃ¡tÃ©kok az orszÃ¡g legnagyobb szÃ­nhÃ¡zi fesztivÃ¡lja.",
        "A vÃ¡rmegye terÃ¼letÃ©n jelentÅ‘s kÅ‘olaj- Ã©s fÃ¶ldgÃ¡zkitermelÃ©s folyik.",
        "A szegedi halÃ¡szlÃ© a magyar gasztronÃ³mia egyik legfontosabb alapkÃ¶ve."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este Szeged, cunoscut sub numele de 'oraÈ™ul soarelui'.",
        "Regiunea gÄƒzduieÈ™te cel mai jos punct din Ungaria, Ã®n apropiere de Szeged.",
        "Salamul de Szeged (Pick) È™i boiaua sunt produse de export cunoscute Ã®n Ã®ntreaga lume.",
        "ÃŽn Ã“pusztaszer se aflÄƒ monumentala picturÄƒ panoramicÄƒ Feszty.",
        "OraÈ™ul MakÃ³ este faimos pentru producÈ›ia de ceapÄƒ È™i bÄƒile Hagymatikum.",
        "ÃŽnflorirea Tisei (fenomenul rusalii) este un spectacol natural unic Ã®n regiune.",
        "Universitatea din Szeged este una dintre cele mai prestigioase instituÈ›ii de Ã®nvÄƒÈ›ÄƒmÃ¢nt din Europa CentralÄƒ.",
        "Festivalul Ã®n aer liber din Szeged este unul dintre cele mai mari evenimente teatrale din Ungaria.",
        "Regiunea are o producÈ›ie semnificativÄƒ de petrol È™i gaze naturale.",
        "Ciorba de peÈ™te din Szeged (Szegedi halÃ¡szlÃ©) este o moÈ™tenire culinarÄƒ protejatÄƒ."
      ],
      "en": [
        "The county seat is Szeged, known as the 'City of Sunshine'.",
        "The region is home to the lowest point in Hungary, located near Szeged.",
        "Szeged salami (Pick) and paprika are world-famous export products.",
        "The monumental Feszty Panorama painting is located in Ã“pusztaszer.",
        "The city of MakÃ³ is famous for its onion production and the Hagymatikum bath.",
        "The 'blooming of the Tisza' (mayfly phenomenon) is a unique natural spectacle in the region.",
        "The University of Szeged is one of the most prestigious educational institutions in Central Europe.",
        "The Szeged Open Air Festival is one of Hungary's largest theatrical events.",
        "The region has significant oil and natural gas production.",
        "The fish soup from Szeged (Szegedi halÃ¡szlÃ©) is a protected culinary heritage."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Szeged a vÃ¡rmegye szÃ©khelye, ahol a hÃ­res Szegedi SzabadtÃ©ri JÃ¡tÃ©kokat rendezik.",
        "A vÃ¡rmegye hÃ­res a szegedi fÅ±szerpaprikÃ¡rÃ³l, amely hungarikumnak szÃ¡mÃ­t.",
        "MakÃ³ vÃ¡rosa a vÃ¶rÃ¶shagyma termesztÃ©sÃ©rÅ‘l Ã©s a Makovecz Imre tervezte Hagymatikum fÃ¼rdÅ‘rÅ‘l ismert.",
        "Itt talÃ¡lhatÃ³ az Ã“pusztaszeri Nemzeti TÃ¶rtÃ©neti EmlÃ©kpark a Feszty-kÃ¶rkÃ©ppel.",
        "A Tisza Ã©s a Maros torkolata kedvelt kirÃ¡ndulÃ³hely Ã©s vÃ­zi sportkÃ¶zpont."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "fejer",
    type: "region",
    parent: "HU-FE",
    coords: [18.4103, 47.1899],
    name: {"de": "WeiÃŸenburg", "hu": "FejÃ©r", "ro": "FejÃ©r", "en": "FejÃ©r"},
    image: "/geo-images/hungary/fejer.webp",
    description: {
      "de": "Das Komitat FejÃ©r liegt im Herzen Ungarns, in der Region Mitteltransdanubien, und ist eine der historisch bedeutendsten Gegenden des Landes. Das administrative Zentrum ist SzÃ©kesfehÃ©rvÃ¡r, die 'Stadt der KÃ¶nige', die im Mittelalter als KrÃ¶nungs- und GrabstÃ¤tte ungarischer Monarchen diente. Die Region besticht durch ihre geografische Vielfalt, die vom malerischen Velencer See, dem wÃ¤rmsten Binnensee Europas, bis zu den sanften HÃ¼geln des VÃ©rtes-Gebirges reicht. FejÃ©r ist heute ein dynamisches wirtschaftliches Zentrum mit einer starken Industrie, bewahrt aber gleichzeitig seine reichen kulturellen Traditionen und architektonischen SchÃ¤tze. Besucher finden hier eine faszinierende Verbindung aus kÃ¶niglicher Geschichte, moderner Entwicklung und erholsamen Naturerlebnissen.",
      "hu": "FejÃ©r vÃ¡rmegye MagyarorszÃ¡g szÃ­vÃ©ben, a KÃ¶zÃ©p-DunÃ¡ntÃºli rÃ©giÃ³ban fekszik, Ã©s az orszÃ¡g egyik legjelentÅ‘sebb tÃ¶rtÃ©nelmi mÃºltÃº terÃ¼lete. SzÃ©khelye SzÃ©kesfehÃ©rvÃ¡r, a 'kirÃ¡lyok vÃ¡rosa', amely a kÃ¶zÃ©pkorban a magyar uralkodÃ³k koronÃ¡zÃ¡si Ã©s temetkezÃ©si helyekÃ©nt szolgÃ¡lt. A vÃ¡rmegye fÃ¶ldrajzi adottsÃ¡gai rendkÃ­vÃ¼l vÃ¡ltozatosak: itt talÃ¡lhatÃ³ a Velencei-tÃ³, EurÃ³pa egyik legmelegebb Ã©desvÃ­zi tava, valamint a VÃ©rtes-hegysÃ©g festÅ‘i vonulatai. FejÃ©r ma mÃ¡r dinamikusan fejlÅ‘dÅ‘ gazdasÃ¡gi kÃ¶zpont, ahol a modern ipar Ã©s a gazdag kulturÃ¡lis Ã¶rÃ¶ksÃ©g jÃ³l megfÃ©r egymÃ¡s mellett. A lÃ¡togatÃ³kat kirÃ¡lyi tÃ¶rtÃ©nelem, lenyÅ±gÃ¶zÅ‘ kastÃ©lyok Ã©s pihentetÅ‘ termÃ©szeti kÃ¶rnyezet vÃ¡rja ebben a kÃ¼lÃ¶nleges rÃ©giÃ³ban.",
      "ro": "JudeÈ›ul FejÃ©r este situat Ã®n inima Ungariei, Ã®n regiunea Transdanubia CentralÄƒ, È™i este una dintre cele mai importante zone din punct de vedere istoric ale È›Äƒrii. Centrul administrativ este SzÃ©kesfehÃ©rvÃ¡r, 'oraÈ™ul regilor', care Ã®n Evul Mediu a servit drept loc de Ã®ncoronare È™i Ã®nmormÃ¢ntare a monarhilor maghiari. Regiunea impresioneazÄƒ prin diversitatea sa geograficÄƒ, variind de la pitorescul Lac Velence, unul dintre cele mai calde lacuri cu apÄƒ dulce din Europa, pÃ¢nÄƒ la dealurile blÃ¢nde ale munÈ›ilor VÃ©rtes. FejÃ©r este astÄƒzi un centru economic dinamic, cu o industrie puternicÄƒ, pÄƒstrÃ¢ndu-È™i Ã®n acelaÈ™i timp tradiÈ›iile culturale bogate È™i comorile arhitecturale. Vizitatorii gÄƒsesc aici o combinaÈ›ie fascinantÄƒ de istorie regalÄƒ, dezvoltare modernÄƒ È™i experienÈ›e relaxante Ã®n naturÄƒ.",
      "en": "FejÃ©r County is located in the heart of Hungary, in the Central Transdanubia region, and is one of the country's most historically significant areas. Its administrative center is SzÃ©kesfehÃ©rvÃ¡r, the 'City of Kings', which served as the coronation and burial site for Hungarian monarchs during the Middle Ages. The county boasts diverse geographical features, ranging from the picturesque Lake Velence, one of Europe's warmest freshwater lakes, to the rolling hills of the VÃ©rtes Mountains. FejÃ©r is now a dynamic economic hub with a strong industrial base, while simultaneously preserving its rich cultural traditions and architectural treasures. Visitors will find a fascinating blend of royal history, modern development, and relaxing natural experiences in this unique region."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "FejÃ©r vÃ¡rmegye MagyarorszÃ¡g kÃ¶zponti rÃ©szÃ©n, a DunÃ¡ntÃºl Ã©s az AlfÃ¶ld talÃ¡lkozÃ¡sÃ¡nÃ¡l terÃ¼l el, Ã©s tÃ¶rtÃ©nelmileg az orszÃ¡g egyik legfontosabb rÃ©giÃ³ja. SzÃ©kesfehÃ©rvÃ¡r, a vÃ¡rmegye szÃ©khelye, a kÃ¶zÃ©pkorban a magyar kirÃ¡lyok koronÃ¡zÃ¡si Ã©s temetkezÃ©si helyszÃ­ne volt, Ã­gy mÃ©ltÃ¡n nevezik a 'kirÃ¡lyok vÃ¡rosÃ¡nak'. A vÃ¡rmegye tÃ¡ji adottsÃ¡gai rendkÃ­vÃ¼l vÃ¡ltozatosak: Ã©szakon a VÃ©rtes Ã©s a Bakony nyÃºlvÃ¡nyai, kÃ¶zÃ©pen a MezÅ‘fÃ¶ld rÃ³nasÃ¡ga, dÃ©len pedig a Velencei-tÃ³ partvidÃ©ke talÃ¡lhatÃ³. GazdasÃ¡ga fejlett, az ipari parkok mellett a mezÅ‘gazdasÃ¡g is jelentÅ‘s, kÃ¼lÃ¶nÃ¶sen a szÅ‘lÅ‘termesztÃ©s a MÃ³ri borvidÃ©ken. A Velencei-tÃ³ nÃ©pszerÅ± Ã¼dÃ¼lÅ‘hely, amelyet gyakran a 'napfÃ©ny tavakÃ©nt' is emlegetnek.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist SzÃ©kesfehÃ©rvÃ¡r, eine der Ã¤ltesten StÃ¤dte Ungarns.",
        "Der Velencer See ist als 'See des Sonnenscheins' bekannt und ideal zum Segeln.",
        "In SzÃ©kesfehÃ©rvÃ¡r wurden 37 ungarische KÃ¶nige gekrÃ¶nt.",
        "Die Burg Bory in SzÃ©kesfehÃ©rvÃ¡r ist ein monumentales Kunstwerk aus Beton.",
        "MartonvÃ¡sÃ¡r beherbergt das Brunszvik-Schloss und das Beethoven-Museum.",
        "Die Region ist ein bedeutendes Zentrum der ungarischen Automobil- und Elektronikindustrie.",
        "GÃ¡rdony ist ein beliebter Ferienort am Ufer des Velencer Sees.",
        "Das VÃ©rtes-Gebirge bietet zahlreiche Wanderwege und historische Burgruinen.",
        "MÃ³r ist das Zentrum einer berÃ¼hmten WeiÃŸweinregion, bekannt fÃ¼r den 'EzerjÃ³'.",
        "Die antike rÃ¶mische Stadt Gorsium bei TÃ¡c ist eine bedeutende archÃ¤ologische StÃ¤tte."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye SzÃ©kesfehÃ©rvÃ¡r, az orszÃ¡g egyik legÅ‘sibb vÃ¡rosa.",
        "A Velencei-tÃ³ MagyarorszÃ¡g harmadik legnagyobb termÃ©szetes tava Ã©s kedvelt Ã¼dÃ¼lÅ‘hely.",
        "SzÃ©kesfehÃ©rvÃ¡ron Ã¶sszesen 37 magyar kirÃ¡lyt koronÃ¡ztak meg.",
        "A Bory-vÃ¡r egy kÃ¼lÃ¶nleges, betonbÃ³l Ã©pÃ¼lt 'szerelmi vallomÃ¡s' Ã©s mÅ±vÃ©szeti alkotÃ¡s.",
        "MartonvÃ¡sÃ¡ron talÃ¡lhatÃ³ a Brunszvik-kastÃ©ly Ã©s a hÃ­res Beethoven MÃºzeum.",
        "A vÃ¡rmegye a hazai jÃ¡rmÅ±gyÃ¡rtÃ¡s Ã©s elektronikai ipar egyik legfontosabb kÃ¶zpontja.",
        "GÃ¡rdony Ã©s AgÃ¡rd a Velencei-tÃ³ partjÃ¡nak legnÃ©pszerÅ±bb turisztikai cÃ©lpontjai.",
        "A VÃ©rtes-hegysÃ©g szÃ¡mos tÃºraÃºtvonalat Ã©s kÃ¶zÃ©pkori vÃ¡rromot rejt.",
        "MÃ³r vÃ¡rosa a hÃ­res mÃ³ri ezerjÃ³ fehÃ©rbor Ã©s a helyi borkultÃºra kÃ¶zpontja.",
        "TÃ¡c hatÃ¡rÃ¡ban talÃ¡lhatÃ³ Gorsium, az egyik legjelentÅ‘sebb rÃ³mai kori szabadtÃ©ri mÃºzeum."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este SzÃ©kesfehÃ©rvÃ¡r, unul dintre cele mai vechi oraÈ™e din Ungaria.",
        "Lacul Velence este cunoscut drept 'lacul soarelui' È™i este ideal pentru navigaÈ›ie.",
        "ÃŽn SzÃ©kesfehÃ©rvÃ¡r au fost Ã®ncoronaÈ›i 37 de regi ai Ungariei.",
        "Castelul Bory din SzÃ©kesfehÃ©rvÃ¡r este o operÄƒ de artÄƒ monumentalÄƒ construitÄƒ din beton.",
        "MartonvÃ¡sÃ¡r gÄƒzduieÈ™te Castelul Brunszvik È™i Muzeul Beethoven.",
        "Regiunea este un centru important al industriei auto È™i electronice din Ungaria.",
        "GÃ¡rdony este o staÈ›iune popularÄƒ pe malul Lacului Velence.",
        "MunÈ›ii VÃ©rtes oferÄƒ numeroase trasee de drumeÈ›ie È™i ruine de castele istorice.",
        "MÃ³r este centrul unei renumite regiuni de vin alb, cunoscutÄƒ pentru soiul 'EzerjÃ³'.",
        "OraÈ™ul antic roman Gorsium de lÃ¢ngÄƒ TÃ¡c este un sit arheologic important."
      ],
      "en": [
        "The county seat is SzÃ©kesfehÃ©rvÃ¡r, one of the oldest cities in Hungary.",
        "Lake Velence is known as the 'Lake of Sunshine' and is ideal for sailing.",
        "A total of 37 Hungarian kings were crowned in SzÃ©kesfehÃ©rvÃ¡r.",
        "Bory Castle in SzÃ©kesfehÃ©rvÃ¡r is a monumental work of art built from concrete.",
        "MartonvÃ¡sÃ¡r is home to the Brunszvik Castle and the Beethoven Museum.",
        "The county is a major hub for the Hungarian automotive and electronics industries.",
        "GÃ¡rdony is a popular holiday resort on the shores of Lake Velence.",
        "The VÃ©rtes Mountains offer numerous hiking trails and historic castle ruins.",
        "MÃ³r is the center of a famous white wine region, known for the 'EzerjÃ³' grape.",
        "The ancient Roman city of Gorsium near TÃ¡c is a significant archaeological site."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "SzÃ©kesfehÃ©rvÃ¡r a kÃ¶zÃ©pkori Magyar KirÃ¡lysÃ¡g egyik fÅ‘vÃ¡rosa Ã©s koronÃ¡zÃ³vÃ¡rosa volt.",
        "A Velencei-tÃ³ MagyarorszÃ¡g harmadik legnagyobb Ã©s egyik legmelegebb vizÅ± tava.",
        "A vÃ¡rmegyÃ©ben talÃ¡lhatÃ³ a VÃ©rtes-hegysÃ©g, amely kivÃ¡lÃ³ tÃºrÃ¡zÃ¡si lehetÅ‘sÃ©geket kÃ­nÃ¡l.",
        "MartonvÃ¡sÃ¡r bÃ¼szkÃ©lkedhet a gyÃ¶nyÃ¶rÅ± Brunszvik-kastÃ©llyal Ã©s a Beethoven-mÃºzeummal.",
        "DunaÃºjvÃ¡ros az orszÃ¡g egyik legfontosabb ipari Ã©s kohÃ¡szati kÃ¶zpontja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gyor-moson-sopron",
    type: "region",
    parent: "HU-GS",
    coords: [17.6351, 47.6833],
    name: {"de": "Raab-Wieselburg-Ã–denburg", "hu": "GyÅ‘r-Moson-Sopron", "ro": "GyÅ‘r-Moson-Sopron", "en": "GyÅ‘r-Moson-Sopron"},
    image: "/geo-images/hungary/gyor-moson-sopron.webp",
    description: {
      "de": "Das Komitat GyÅ‘r-Moson-Sopron liegt im Nordwesten Ungarns an der strategisch wichtigen Grenze zu Ã–sterreich und der Slowakei. Die Region gilt als das 'Tor zum Westen' und ist eine der wirtschaftlich am weitesten entwickelten Gegenden des Landes. Das administrative Zentrum ist GyÅ‘r, die 'Stadt der FlÃ¼sse', die fÃ¼r ihre barocke Altstadt und ihre bedeutende Industrie bekannt ist. Ein weiteres Juwel der Region ist Sopron, eine Stadt mit einer reichen Geschichte und einer malerischen mittelalterlichen Architektur. GyÅ‘r-Moson-Sopron beherbergt zudem UNESCO-WelterbestÃ¤tten wie die Erzabtei Pannonhalma und den Neusiedler See, was die Region zu einem erstklassigen Ziel fÃ¼r Kultur- und Naturinteressierte macht.",
      "hu": "GyÅ‘r-Moson-Sopron vÃ¡rmegye MagyarorszÃ¡g Ã©szaknyugati rÃ©szÃ©n, az osztrÃ¡k Ã©s a szlovÃ¡k hatÃ¡r mentÃ©n fekszik, stratÃ©giai kaput nyitva Nyugat-EurÃ³pa felÃ©. A rÃ©giÃ³ az orszÃ¡g egyik legfejlettebb gazdasÃ¡gi terÃ¼lete, ahol a modern ipar Ã©s a tÃ¶rtÃ©nelmi hagyomÃ¡nyok tÃ¶kÃ©letes Ã¶sszhangban Ã©lnek. SzÃ©khelye GyÅ‘r, a 'folyÃ³k vÃ¡rosa', amely lenyÅ±gÃ¶zÅ‘ barokk belvÃ¡rosÃ¡rÃ³l Ã©s jelentÅ‘s jÃ¡rmÅ±iparÃ¡rÃ³l hÃ­res. A vÃ¡rmegye mÃ¡sik Ã©kkÃ¶ve Sopron, a hÅ±sÃ©g vÃ¡rosa, amely gazdag tÃ¶rtÃ©nelmi mÃºltjÃ¡val Ã©s festÅ‘i kÃ¶zÃ©pkori Ã©pÃ­tÃ©szetÃ©vel vonzza a lÃ¡togatÃ³kat. GyÅ‘r-Moson-Sopron olyan UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­neknek is otthont ad, mint a Pannonhalmi FÅ‘apÃ¡tsÃ¡g Ã©s a FertÅ‘-tÃ¡j, Ã­gy a kultÃºra Ã©s a termÃ©szet kedvelÅ‘i szÃ¡mÃ¡ra is kiemelkedÅ‘ Ãºti cÃ©l.",
      "ro": "JudeÈ›ul GyÅ‘r-Moson-Sopron este situat Ã®n nord-vestul Ungariei, la graniÈ›a strategicÄƒ cu Austria È™i Slovacia. Regiunea este consideratÄƒ 'poarta cÄƒtre vest' È™i este una dintre cele mai dezvoltate zone economice ale È›Äƒrii. Centrul administrativ este GyÅ‘r, 'oraÈ™ul rÃ¢urilor', cunoscut pentru centrul sÄƒu vechi baroc È™i industria sa semnificativÄƒ. O altÄƒ bijuterie a regiunii este Sopron, un oraÈ™ cu o istorie bogatÄƒ È™i o arhitecturÄƒ medievalÄƒ pitoreascÄƒ. GyÅ‘r-Moson-Sopron gÄƒzduieÈ™te, de asemenea, situri din patrimoniul mondial UNESCO, cum ar fi AbaÈ›ia TeritorialÄƒ din Pannonhalma È™i Lacul FertÅ‘ (Neusiedler See), ceea ce face din regiune o destinaÈ›ie de primÄƒ clasÄƒ pentru cei interesaÈ›i de culturÄƒ È™i naturÄƒ.",
      "en": "GyÅ‘r-Moson-Sopron County is located in northwestern Hungary on the strategically important border with Austria and Slovakia. The region is considered the 'Gateway to the West' and is one of the most economically developed areas in the country. Its administrative center is GyÅ‘r, the 'City of Rivers', famous for its stunning Baroque old town and significant industrial base. Another jewel of the region is Sopron, a city with a rich history and picturesque medieval architecture. GyÅ‘r-Moson-Sopron is also home to UNESCO World Heritage sites such as the Pannonhalma Archabbey and Lake FertÅ‘ (Neusiedler See), making the county a premier destination for those interested in culture and nature."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "GyÅ‘r-Moson-Sopron vÃ¡rmegye MagyarorszÃ¡g Ã©szaknyugati kapujÃ¡ban, az osztrÃ¡k Ã©s a szlovÃ¡k hatÃ¡r mentÃ©n fekszik, Ã©s az orszÃ¡g egyik legfejlettebb gazdasÃ¡gi rÃ©giÃ³ja. A vÃ¡rmegye szÃ©khelye GyÅ‘r, a 'folyÃ³k vÃ¡rosa', amely barokk belvÃ¡rosÃ¡val Ã©s modern iparÃ¡val emelkedik ki. Nyugaton Sopron, a 'leghÅ±sÃ©gesebb vÃ¡ros' talÃ¡lhatÃ³, amely tÃ¶rtÃ©nelmi hangulatÃ¡val Ã©s hÃ­res borvidÃ©kÃ©vel vonzza a lÃ¡togatÃ³kat. A tÃ¡jat a KisalfÃ¶ld rÃ³nasÃ¡ga, a HansÃ¡g lÃ¡pvilÃ¡ga Ã©s a FertÅ‘-tÃ³ nÃ¡dasai hatÃ¡rozzÃ¡k meg, utÃ³bbi az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze. Pannonhalma bÃ¼szkÃ©lkedhet az ezerÃ©ves BencÃ©s FÅ‘apÃ¡tsÃ¡ggal, amely a magyar keresztÃ©nysÃ©g Ã©s kultÃºra egyik legfontosabb bÃ¶lcsÅ‘je.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist GyÅ‘r, ein bedeutendes Zentrum der Automobilindustrie (Audi).",
        "Die Erzabtei Pannonhalma ist eines der Ã¤ltesten historischen DenkmÃ¤ler Ungarns.",
        "Sopron ist als die 'treueste Stadt' (Civitas Fidelissima) bekannt.",
        "Der Neusiedler See (FertÅ‘-tÃ³) ist der westlichste Steppensee Europas.",
        "Das Schloss EsterhÃ¡zy in FertÅ‘d wird oft als das 'ungarische Versailles' bezeichnet.",
        "Die Region ist berÃ¼hmt fÃ¼r ihre Weinbaugebiete, insbesondere Sopron und Pannonhalma.",
        "SzigetkÃ¶z ist eine einzigartige Flusslandschaft zwischen der GroÃŸen und Kleinen Donau.",
        "MosonmagyarÃ³vÃ¡r ist bekannt fÃ¼r seine ThermalbÃ¤der und seine landwirtschaftliche UniversitÃ¤t.",
        "Die Region hat eine der niedrigsten Arbeitslosenquoten in Ungarn.",
        "Das PaneuropÃ¤ische Picknick bei Sopron war ein Meilenstein beim Fall des Eisernen Vorhangs."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye GyÅ‘r, a hazai jÃ¡rmÅ±gyÃ¡rtÃ¡s egyik legfontosabb kÃ¶zpontja (Audi).",
        "A Pannonhalmi FÅ‘apÃ¡tsÃ¡g az orszÃ¡g egyik legÅ‘sibb tÃ¶rtÃ©nelmi emlÃ©ke Ã©s UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g.",
        "Sopron a 'leghÅ±sÃ©gesebb vÃ¡ros' (Civitas Fidelissima) cÃ­met viseli.",
        "A FertÅ‘-tÃ³ EurÃ³pa legnyugatibb sztyeppei tava Ã©s kÃ¶zÃ¶s vilÃ¡gÃ¶rÃ¶ksÃ©g AusztriÃ¡val.",
        "A fertÅ‘di EsterhÃ¡zy-kastÃ©lyt gyakran nevezik a 'magyar Versailles'-nak.",
        "A vÃ¡rmegye hÃ­res borvidÃ©keirÅ‘l, kÃ¼lÃ¶nÃ¶sen a soproni Ã©s a pannonhalmi borokrÃ³l.",
        "A SzigetkÃ¶z a Duna Ã¡gai Ã¡ltal kÃ¶rÃ¼lÃ¶lelt egyedÃ¼lÃ¡llÃ³ vÃ­zi vilÃ¡g Ã©s termÃ©szetvÃ©delmi terÃ¼let.",
        "MosonmagyarÃ³vÃ¡r hÃ­res gyÃ³gyvizÃ©rÅ‘l Ã©s nagy mÃºltÃº agrÃ¡rfelsÅ‘oktatÃ¡sÃ¡rÃ³l.",
        "A rÃ©giÃ³ gazdasÃ¡gi fejlettsÃ©ge Ã©s foglalkoztatottsÃ¡ga orszÃ¡gos szinten is kiemelkedÅ‘.",
        "A Sopron melletti PÃ¡neurÃ³pai Piknik sorsfordÃ­tÃ³ esemÃ©ny volt a vasfÃ¼ggÃ¶ny lebontÃ¡sÃ¡ban."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este GyÅ‘r, un centru important al industriei auto (Audi).",
        "AbaÈ›ia TeritorialÄƒ din Pannonhalma este unul dintre cele mai vechi monumente istorice din Ungaria.",
        "Sopron este cunoscut drept 'cel mai fidel oraÈ™' (Civitas Fidelissima).",
        "Lacul FertÅ‘ (Neusiedler See) este cel mai vestic lac de stepÄƒ din Europa.",
        "Castelul EsterhÃ¡zy din FertÅ‘d este adesea numit 'Versailles-ul maghiar'.",
        "Regiunea este faimoasÄƒ pentru zonele sale viticole, Ã®n special Sopron È™i Pannonhalma.",
        "SzigetkÃ¶z este un peisaj fluvial unic Ã®ntre DunÄƒrea Mare È™i DunÄƒrea MicÄƒ.",
        "MosonmagyarÃ³vÃ¡r este cunoscut pentru bÄƒile sale termale È™i universitatea sa agricolÄƒ.",
        "Regiunea are una dintre cele mai scÄƒzute rate ale È™omajului din Ungaria.",
        "Picnicul Paneuropean de lÃ¢ngÄƒ Sopron a fost un moment decisiv Ã®n cÄƒderea Cortinei de Fier."
      ],
      "en": [
        "The county seat is GyÅ‘r, a major hub for the automotive industry (Audi).",
        "The Pannonhalma Archabbey is one of Hungary's oldest historical monuments.",
        "Sopron is known as the 'Most Loyal City' (Civitas Fidelissima).",
        "Lake FertÅ‘ (Neusiedler See) is the westernmost steppe lake in Europe.",
        "The EsterhÃ¡zy Castle in FertÅ‘d is often referred to as the 'Hungarian Versailles'.",
        "The region is famous for its wine districts, particularly Sopron and Pannonhalma.",
        "SzigetkÃ¶z is a unique river landscape between the Great and Little Danube.",
        "MosonmagyarÃ³vÃ¡r is famous for its thermal baths and its agricultural university.",
        "The region has one of the lowest unemployment rates in Hungary.",
        "The Pan-European Picnic near Sopron was a milestone in the fall of the Iron Curtain."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt talÃ¡lhatÃ³ a Pannonhalmi FÅ‘apÃ¡tsÃ¡g, amely 1996 Ã³ta az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
        "Sopron vÃ¡rosa az 1921-es nÃ©pszavazÃ¡s emlÃ©kÃ©re viseli a 'Civitas Fidelissima' (LeghÅ±sÃ©gesebb VÃ¡ros) cÃ­met.",
        "A FertÅ‘-tÃ³ EurÃ³pa legnyugatibb sztyeppei tava, kÃ¶zÃ¶s vilÃ¡gÃ¶rÃ¶ksÃ©gi terÃ¼let AusztriÃ¡val.",
        "GyÅ‘r vÃ¡rosa az Audi gyÃ¡r rÃ©vÃ©n a magyar autÃ³ipar egyik legfontosabb kÃ¶zpontja.",
        "A SzigetkÃ¶z a Duna Ã¡gai kÃ¶zÃ¶tt elterÃ¼lÅ‘, kÃ¼lÃ¶nleges vizes Ã©lÅ‘hely Ã©s termÃ©szeti paradicsom."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hajdu-bihar",
    type: "region",
    parent: "HU-HB",
    coords: [21.6273, 47.5316],
    name: {"de": "HajdÃº-Bihar", "hu": "HajdÃº-Bihar", "ro": "HajdÃº-Bihar", "en": "HajdÃº-Bihar"},
    image: "/geo-images/hungary/hajdu-bihar.webp",
    description: {
      "de": "Das Komitat HajdÃº-Bihar liegt im Osten Ungarns an der Grenze zu RumÃ¤nien und ist das Herz der GroÃŸen Ungarischen Tiefebene (AlfÃ¶ld). Die Region ist weltberÃ¼hmt fÃ¼r den Nationalpark HortobÃ¡gy, die grÃ¶ÃŸte natÃ¼rliche Grassteppe Europas, die zum UNESCO-Welterbe gehÃ¶rt und die traditionelle Hirtenkultur bewahrt. Das administrative und kulturelle Zentrum ist Debrecen, die zweitgrÃ¶ÃŸte Stadt Ungarns, die oft als das 'kalvinistische Rom' bezeichnet wird und eine zentrale Rolle in der ungarischen Geschichte spielte. HajdÃº-Bihar ist zudem ein bedeutendes Zentrum fÃ¼r Gesundheitstourismus, insbesondere durch das Heilbad HajdÃºszoboszlÃ³, das Ã¼ber eines der grÃ¶ÃŸten Badekomplexe Europas verfÃ¼gt. Die Region bietet Besuchern eine einzigartige Kombination aus unendlichen Weiten, tief verwurzelten Traditionen und moderner urbaner Dynamik.",
      "hu": "HajdÃº-Bihar vÃ¡rmegye MagyarorszÃ¡g keleti rÃ©szÃ©n, a romÃ¡n hatÃ¡r mentÃ©n fekszik, Ã©s az AlfÃ¶ld szÃ­vÃ©nek tekinthetÅ‘. A rÃ©giÃ³ vilÃ¡gszerte hÃ­res a HortobÃ¡gyi Nemzeti ParkrÃ³l, amely EurÃ³pa legnagyobb Ã¶sszefÃ¼ggÅ‘ fÃ¼ves pusztÃ¡ja, UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­n, Ã©s a mai napig Å‘rzi a hagyomÃ¡nyos pÃ¡sztorÃ©letformÃ¡t. SzÃ©khelye Debrecen, az orszÃ¡g mÃ¡sodik legnÃ©pesebb vÃ¡rosa, amelyet gyakran a 'kÃ¡lvinista RÃ³ma' nÃ©ven emlegetnek, Ã©s amely tÃ¶bbszÃ¶r is sorsfordÃ­tÃ³ szerepet jÃ¡tszott a magyar tÃ¶rtÃ©nelemben. HajdÃº-Bihar emellett az egÃ©szsÃ©gturizmus fellegvÃ¡ra is, kÃ¶szÃ¶nhetÅ‘en HajdÃºszoboszlÃ³nak, ahol EurÃ³pa egyik legnagyobb fÃ¼rdÅ‘komplexuma talÃ¡lhatÃ³. A vÃ¡rmegye a vÃ©gtelen rÃ³nasÃ¡gok szabadsÃ¡gÃ¡t, a gazdag kulturÃ¡lis Ã¶rÃ¶ksÃ©get Ã©s a modern vÃ¡rosi pezsgÃ©st Ã¶tvÃ¶zi.",
      "ro": "JudeÈ›ul HajdÃº-Bihar este situat Ã®n estul Ungariei, la graniÈ›a cu RomÃ¢nia, È™i este inima Marii CÃ¢mpii Maghiare (AlfÃ¶ld). Regiunea este renumitÄƒ Ã®n Ã®ntreaga lume pentru Parcul NaÈ›ional HortobÃ¡gy, cea mai mare stepÄƒ naturalÄƒ de iarbÄƒ din Europa, inclusÄƒ Ã®n patrimoniul mondial UNESCO, care pÄƒstreazÄƒ cultura tradiÈ›ionalÄƒ a pÄƒstorilor. Centrul administrativ È™i cultural este Debrecen, al doilea oraÈ™ ca mÄƒrime din Ungaria, numit adesea 'Roma calvinistÄƒ', care a jucat un rol central Ã®n istoria maghiarÄƒ. HajdÃº-Bihar este, de asemenea, un centru important pentru turismul de sÄƒnÄƒtate, Ã®n special prin staÈ›iunea HajdÃºszoboszlÃ³, care dispune de unul dintre cele mai mari complexe balneare din Europa. JudeÈ›ul oferÄƒ vizitatorilor o combinaÈ›ie unicÄƒ de spaÈ›ii infinite, tradiÈ›ii adÃ¢nc Ã®nrÄƒdÄƒcinate È™i dinamicÄƒ urbanÄƒ modernÄƒ.",
      "en": "HajdÃº-Bihar County is located in eastern Hungary on the border with Romania and is the heart of the Great Hungarian Plain (AlfÃ¶ld). The region is world-famous for the HortobÃ¡gy National Park, Europe's largest continuous natural grassland, which is a UNESCO World Heritage site and preserves traditional pastoral culture. Its administrative and cultural center is Debrecen, Hungary's second-largest city, often referred to as the 'Calvinist Rome', which has played a pivotal role in Hungarian history. HajdÃº-Bihar is also a major hub for health tourism, particularly due to the HajdÃºszoboszlÃ³ spa, which boasts one of Europe's largest bathing complexes. The county offers visitors a unique combination of vast open spaces, deep-rooted traditions, and modern urban vibrancy."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "HajdÃº-Bihar vÃ¡rmegye az AlfÃ¶ld keleti rÃ©szÃ©n terÃ¼l el, Ã©s nevÃ©ben a tÃ¶rtÃ©nelmi hajdÃºvÃ¡rosok emlÃ©kÃ©t Å‘rzi. A vÃ¡rmegye szÃ©khelye Debrecen, az orszÃ¡g mÃ¡sodik legnagyobb vÃ¡rosa, amelyet a 'kÃ¡lvinista RÃ³makÃ©nt' is emlegetnek gazdag egyhÃ¡zi Ã©s kulturÃ¡lis Ã¶rÃ¶ksÃ©ge miatt. A rÃ©giÃ³ legfontosabb tÃ¡jegysÃ©ge a HortobÃ¡gy, MagyarorszÃ¡g elsÅ‘ Ã©s legnagyobb nemzeti parkja, ahol a pusztai Ã©letmÃ³d, a gulyÃ¡s- Ã©s csikÃ³shagyomÃ¡nyok a mai napig Ã©lnek. HajdÃº-Bihar emellett hÃ­res gyÃ³gyvizeirÅ‘l is, HajdÃºszoboszlÃ³ EurÃ³pa egyik legnagyobb fÃ¼rdÅ‘komplexumÃ¡val vÃ¡rja a gyÃ³gyulni vÃ¡gyÃ³kat. A vÃ¡rmegye gazdasÃ¡gÃ¡ban a mezÅ‘gazdasÃ¡g mellett az Ã©lelmiszeripar Ã©s a gyÃ³gyszergyÃ¡rtÃ¡s is meghatÃ¡rozÃ³ szerepet jÃ¡tszik.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Debrecen, ein historisches Zentrum der Reformation in Ungarn.",
        "Der Nationalpark HortobÃ¡gy war der erste Nationalpark Ungarns (gegrÃ¼ndet 1973).",
        "HajdÃºszoboszlÃ³ beherbergt das grÃ¶ÃŸte Heilbad Europas.",
        "Die Region ist bekannt fÃ¼r die Zucht des ungarischen Graurindes und des Zackelschafs.",
        "Die GroÃŸe Reformierte Kirche in Debrecen ist ein Symbol der ungarischen UnabhÃ¤ngigkeit.",
        "Die NeunbÃ¶gige BrÃ¼cke in HortobÃ¡gy ist die lÃ¤ngste SteinbrÃ¼cke Ungarns.",
        "Debrecen ist ein bedeutendes Bildungszentrum mit einer der Ã¤ltesten UniversitÃ¤ten des Landes.",
        "Die Region ist berÃ¼hmt fÃ¼r ihre traditionelle Gastronomie, wie den HortobÃ¡gyer Fleischpfannkuchen.",
        "HajdÃº-Bihar hat eine bedeutende ErdgasfÃ¶rderung und Landwirtschaft.",
        "Der Blumenkarneval in Debrecen ist eines der spektakulÃ¤rsten Sommerfestivals Ungarns."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye Debrecen, a magyarorszÃ¡gi reformÃ¡ciÃ³ tÃ¶rtÃ©nelmi kÃ¶zpontja.",
        "A HortobÃ¡gyi Nemzeti Park MagyarorszÃ¡g elsÅ‘ Ã©s legnagyobb kiterjedÃ©sÅ± nemzeti parkja.",
        "HajdÃºszoboszlÃ³n talÃ¡lhatÃ³ EurÃ³pa legnagyobb fÃ¼rdÅ‘komplexuma.",
        "A rÃ©giÃ³ hÃ­res az Å‘shonos magyar Ã¡llatfajtÃ¡krÃ³l, mint a szÃ¼rkemarha Ã©s a rackajuh.",
        "A debreceni ReformÃ¡tus Nagytemplom a magyar fÃ¼ggetlensÃ©gi tÃ¶rekvÃ©sek jelkÃ©pe.",
        "A hortobÃ¡gyi KilenclyukÃº hÃ­d az orszÃ¡g leghosszabb kÅ‘hÃ­dja.",
        "Debrecen jelentÅ‘s oktatÃ¡si kÃ¶zpont, egyeteme az orszÃ¡g egyik legrangosabb intÃ©zmÃ©nye.",
        "A vÃ¡rmegye gasztronÃ³miÃ¡jÃ¡nak egyik legismertebb Ã©tele a hortobÃ¡gyi hÃºsos palacsinta.",
        "HajdÃº-Bihar jelentÅ‘s fÃ¶ldgÃ¡zkitermelÃ©ssel Ã©s fejlett mezÅ‘gazdasÃ¡ggal rendelkezik.",
        "A Debreceni VirÃ¡gkarnevÃ¡l az orszÃ¡g egyik leglÃ¡tvÃ¡nyosabb Ã©s legnÃ©pszerÅ±bb nyÃ¡ri fesztivÃ¡lja."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este Debrecen, un centru istoric al Reformei Ã®n Ungaria.",
        "Parcul NaÈ›ional HortobÃ¡gy a fost primul parc naÈ›ional din Ungaria (fondat Ã®n 1973).",
        "HajdÃºszoboszlÃ³ gÄƒzduieÈ™te cel mai mare complex balnear din Europa.",
        "Regiunea este cunoscutÄƒ pentru creÈ™terea vitelor sure maghiare È™i a oilor RaÈ›ca.",
        "Marea BisericÄƒ ReformatÄƒ din Debrecen este un simbol al independenÈ›ei maghiare.",
        "Podul cu nouÄƒ arcuri din HortobÃ¡gy este cel mai lung pod de piatrÄƒ din Ungaria.",
        "Debrecen este un centru educaÈ›ional important, cu una dintre cele mai vechi universitÄƒÈ›i din È›arÄƒ.",
        "Regiunea este faimoasÄƒ pentru gastronomia sa tradiÈ›ionalÄƒ, cum ar fi clÄƒtitele de HortobÃ¡gy.",
        "HajdÃº-Bihar are o producÈ›ie semnificativÄƒ de gaze naturale È™i o agriculturÄƒ dezvoltatÄƒ.",
        "Carnavalul Florilor din Debrecen este unul dintre cele mai spectaculoase festivaluri de varÄƒ din Ungaria."
      ],
      "en": [
        "The county seat is Debrecen, a historic center of the Reformation in Hungary.",
        "HortobÃ¡gy National Park was Hungary's first national park (founded in 1973).",
        "HajdÃºszoboszlÃ³ is home to the largest spa complex in Europe.",
        "The region is known for breeding indigenous Hungarian Grey cattle and Racka sheep.",
        "The Great Reformed Church in Debrecen is a symbol of Hungarian independence.",
        "The Nine-arched Bridge in HortobÃ¡gy is the longest stone bridge in Hungary.",
        "Debrecen is a major educational center with one of the country's oldest universities.",
        "The county is famous for its traditional gastronomy, such as the HortobÃ¡gy meat pancakes.",
        "HajdÃº-Bihar has significant natural gas production and a strong agricultural sector.",
        "The Debrecen Flower Carnival is one of Hungary's most spectacular summer festivals."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A HortobÃ¡gyi Nemzeti Park a vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze, Ã©s a pusztai pÃ¡sztorkultÃºra legfontosabb Å‘rzÅ‘je.",
        "Debrecen a magyar reformÃ¡ciÃ³ kÃ¶zpontja, hÃ­res ReformÃ¡tus NagytemplomÃ¡rÃ³l.",
        "HajdÃºszoboszlÃ³ a 'reumÃ¡sok MekkÃ¡ja', itt talÃ¡lhatÃ³ EurÃ³pa legnagyobb fÃ¼rdÅ‘je.",
        "A vÃ¡rmegye hÃ­res a hajdÃºk tÃ¶rtÃ©nelmi szerepÃ©rÅ‘l, akik Bocskai IstvÃ¡n fejedelemtÅ‘l kaptak kivÃ¡ltsÃ¡gokat.",
        "A HortobÃ¡gyon talÃ¡lhatÃ³ a hÃ­res KilenclyukÃº hÃ­d, amely a puszta jelkÃ©pe."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "heves",
    type: "region",
    parent: "HU-HE",
    coords: [20.3739, 47.9025],
    name: {"de": "Heves", "hu": "Heves", "ro": "Heves", "en": "Heves"},
    image: "/geo-images/hungary/heves.webp",
    description: {
      "de": "Das Komitat Heves liegt im Norden Ungarns und beherbergt die hÃ¶chsten Gipfel des Landes im MÃ¡tra- und BÃ¼kk-Gebirge. Die Region ist berÃ¼hmt fÃ¼r ihre atemberaubende Natur, ihre erstklassigen Weine und ihre reiche historische Vergangenheit. Das administrative Zentrum ist Eger, eine der schÃ¶nsten BarockstÃ¤dte Ungarns, die fÃ¼r ihre heldenhafte Verteidigung gegen die Osmanen und ihr beeindruckendes Minarett bekannt ist. Heves bietet zudem einzigartige Wellness-Erlebnisse, wie den Salzberg von EgerszalÃ³k, und ist ein Paradies fÃ¼r Wanderer und Naturliebhaber. Die Kombination aus alpiner Landschaft, historischer Tiefe und exzellenter Gastronomie macht Heves zu einer der attraktivsten Regionen fÃ¼r Touristen.",
      "hu": "Heves vÃ¡rmegye MagyarorszÃ¡g Ã©szaki rÃ©szÃ©n fekszik, Ã©s itt talÃ¡lhatÃ³k az orszÃ¡g legmagasabb csÃºcsai a MÃ¡trÃ¡ban Ã©s a BÃ¼kkben. A rÃ©giÃ³ hÃ­res lenyÅ±gÃ¶zÅ‘ termÃ©szeti adottsÃ¡gairÃ³l, kivÃ¡lÃ³ borairÃ³l Ã©s gazdag tÃ¶rtÃ©nelmi mÃºltjÃ¡rÃ³l. SzÃ©khelye Eger, az orszÃ¡g egyik legszebb barokk vÃ¡rosa, amely az oszmÃ¡nok elleni hÅ‘sies vÃ¡rvÃ©delmÃ©rÅ‘l Ã©s az egri bikavÃ©rrÅ‘l vilÃ¡gszerte ismert. Heves vÃ¡rmegye egyedÃ¼lÃ¡llÃ³ wellness Ã©lmÃ©nyeket is kÃ­nÃ¡l, mint pÃ©ldÃ¡ul az egerszalÃ³ki sÃ³domb, Ã©s igazi paradicsom a tÃºrÃ¡zÃ³k Ã©s a termÃ©szet kedvelÅ‘i szÃ¡mÃ¡ra. A hegyvidÃ©ki tÃ¡j, a tÃ¶rtÃ©nelmi mÃ©lysÃ©g Ã©s a kivÃ¡lÃ³ gasztronÃ³mia Ã¶tvÃ¶zete Heves vÃ¡rmegyÃ©t az orszÃ¡g egyik legvonzÃ³bb turisztikai cÃ©lpontjÃ¡vÃ¡ teszi.",
      "ro": "JudeÈ›ul Heves este situat Ã®n nordul Ungariei È™i gÄƒzduieÈ™te cele mai Ã®nalte vÃ¢rfuri din È›arÄƒ Ã®n munÈ›ii MÃ¡tra È™i BÃ¼kk. Regiunea este renumitÄƒ pentru natura sa uluitoare, vinurile sale de primÄƒ clasÄƒ È™i trecutul sÄƒu istoric bogat. Centrul administrativ este Eger, unul dintre cele mai frumoase oraÈ™e baroce din Ungaria, cunoscut pentru apÄƒrarea sa eroicÄƒ Ã®mpotriva otomanilor È™i impresionantul sÄƒu minaret. Heves oferÄƒ, de asemenea, experienÈ›e de wellness unice, cum ar fi muntele de sare de la EgerszalÃ³k, È™i este un paradis pentru excursioniÈ™ti È™i iubitorii de naturÄƒ. CombinaÈ›ia de peisaj montan, profunzime istoricÄƒ È™i gastronomie excelentÄƒ face din Heves una dintre cele mai atractive regiuni pentru turiÈ™ti.",
      "en": "Heves County is located in northern Hungary and is home to the country's highest peaks in the MÃ¡tra and BÃ¼kk Mountains. The region is famous for its breathtaking nature, world-class wines, and rich historical past. Its administrative center is Eger, one of Hungary's most beautiful Baroque cities, renowned for its heroic defense against the Ottomans and its impressive minaret. Heves also offers unique wellness experiences, such as the salt hill of EgerszalÃ³k, and is a paradise for hikers and nature lovers. The combination of alpine landscapes, historical depth, and excellent gastronomy makes Heves one of the most attractive regions for tourists."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Heves vÃ¡rmegye MagyarorszÃ¡g Ã©szaki rÃ©szÃ©n fekszik, Ã©s az orszÃ¡g egyik legszebb Ã©s legvÃ¡ltozatosabb vidÃ©ke, ahol a MÃ¡tra Ã©s a BÃ¼kk vonulatai talÃ¡lkoznak az AlfÃ¶lddel. Itt talÃ¡lhatÃ³ az orszÃ¡g legmagasabb pontja, a KÃ©kes-tetÅ‘, amely nÃ©pszerÅ± kirÃ¡ndulÃ³- Ã©s sÃ­kÃ¶zpont. A vÃ¡rmegye szÃ©khelye Eger, a tÃ¶rtÃ©nelmi hÅ‘sÃ¶k vÃ¡rosa, amely barokk Ã©pÃ­tÃ©szetÃ©rÅ‘l, vÃ¡rÃ¡rÃ³l Ã©s kivÃ¡lÃ³ borairÃ³l, kÃ¼lÃ¶nÃ¶sen az Egri BikavÃ©rrÅ‘l hÃ­res. A Tisza-tÃ³ Ã©szaki rÃ©sze is a vÃ¡rmegyÃ©hez tartozik, amely kÃ¼lÃ¶nleges vÃ­zi paradicsomot kÃ­nÃ¡l a termÃ©szet kedvelÅ‘inek. Heves vÃ¡rmegye gazdag nÃ©pmÅ±vÃ©szeti kincsekben is, mint pÃ©ldÃ¡ul a palÃ³c hagyomÃ¡nyok, Ã©s szÃ¡mos gyÃ³gyfÃ¼rdÅ‘vel, mint EgerszalÃ³k vagy ParÃ¡d, bÃ¼szkÃ©lkedhet.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Eger, bekannt fÃ¼r das 'Egerer Stierblut' (Egri BikavÃ©r).",
        "Der KÃ©kes im MÃ¡tra-Gebirge ist mit 1014 Metern der hÃ¶chste Punkt Ungarns.",
        "Eger beherbergt das nÃ¶rdlichste Minarett aus der Zeit der osmanischen Besatzung.",
        "Der Salzberg von EgerszalÃ³k ist ein weltweit seltenes NaturphÃ¤nomen.",
        "Die Region ist berÃ¼hmt fÃ¼r ihre Thermalquellen und HeilbÃ¤der.",
        "Das BÃ¼kk-Gebirge beherbergt zahlreiche HÃ¶hlen und eine reiche Artenvielfalt.",
        "Die Burg von Eger ist ein Symbol des ungarischen Widerstands gegen die TÃ¼rken.",
        "ParÃ¡d ist bekannt fÃ¼r seine HeilwÃ¤sser und das Kutschenmuseum.",
        "Heves ist ein bedeutendes Zentrum des ungarischen Weinbaus.",
        "Die Region bietet hervorragende MÃ¶glichkeiten fÃ¼r Wintersport am KÃ©kes."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye Eger, a vilÃ¡ghÃ­rÅ± Egri BikavÃ©r hazÃ¡ja.",
        "Itt talÃ¡lhatÃ³ MagyarorszÃ¡g legmagasabb pontja, a KÃ©kes-tetÅ‘ (1014 m).",
        "Egerben lÃ¡thatÃ³ az egykori OszmÃ¡n Birodalom legÃ©szakibb minaretje.",
        "Az egerszalÃ³ki sÃ³domb a vilÃ¡gon ritka termÃ©szeti kÃ©pzÅ‘dmÃ©ny.",
        "A vÃ¡rmegye rendkÃ­vÃ¼l gazdag gyÃ³gyvizekben Ã©s termÃ¡lfÃ¼rdÅ‘kben.",
        "A BÃ¼kki Nemzeti Park terÃ¼letÃ©n szÃ¡mos barlang Ã©s kÃ¼lÃ¶nleges nÃ¶vÃ©nyfaj talÃ¡lhatÃ³.",
        "Az egri vÃ¡r a magyar tÃ¶rtÃ©nelem egyik legfontosabb jelkÃ©pe.",
        "ParÃ¡d hÃ­res kÃ©nes gyÃ³gyvizÃ©rÅ‘l Ã©s a Cifra IstÃ¡llÃ³ban talÃ¡lhatÃ³ KocsimÃºzeumrÃ³l.",
        "Heves vÃ¡rmegye az orszÃ¡g egyik legjelentÅ‘sebb tÃ¶rtÃ©nelmi borvidÃ©ke.",
        "A MÃ¡tra Ã©s a BÃ¼kk vonulatai kivÃ¡lÃ³ tÃºrÃ¡zÃ¡si Ã©s sÃ­elÃ©si lehetÅ‘sÃ©geket nyÃºjtanak."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este Eger, patria faimosului vin 'SÃ¢nge de Taur' (Egri BikavÃ©r).",
        "VÃ¢rful KÃ©kes din munÈ›ii MÃ¡tra este cel mai Ã®nalt punct din Ungaria (1014 m).",
        "Eger gÄƒzduieÈ™te cel mai nordic minaret din perioada ocupaÈ›iei otomane.",
        "Muntele de sare de la EgerszalÃ³k este un fenomen natural rar Ã®n lume.",
        "Regiunea este renumitÄƒ pentru izvoarele sale termale È™i bÄƒile curative.",
        "MunÈ›ii BÃ¼kk adÄƒpostesc numeroase peÈ™teri È™i o biodiversitate bogatÄƒ.",
        "Cetatea din Eger este un simbol al rezistenÈ›ei maghiare Ã®mpotriva turcilor.",
        "ParÃ¡d este cunoscut pentru apele sale curative È™i muzeul trÄƒsurilor.",
        "Heves este un centru important al viticulturii maghiare.",
        "Regiunea oferÄƒ oportunitÄƒÈ›i excelente pentru sporturi de iarnÄƒ pe vÃ¢rful KÃ©kes."
      ],
      "en": [
        "The county seat is Eger, home to the world-famous 'Bull's Blood' wine (Egri BikavÃ©r).",
        "KÃ©kes in the MÃ¡tra Mountains is the highest point in Hungary at 1,014 meters.",
        "Eger is home to the northernmost minaret from the Ottoman era.",
        "The salt hill of EgerszalÃ³k is a rare natural phenomenon worldwide.",
        "The region is famous for its thermal springs and medicinal baths.",
        "The BÃ¼kk Mountains house numerous caves and a rich biodiversity.",
        "Eger Castle is a symbol of Hungarian resistance against the Turks.",
        "ParÃ¡d is known for its medicinal waters and the carriage museum.",
        "Heves is a major center of Hungarian viticulture.",
        "The region offers excellent opportunities for winter sports at KÃ©kes."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt talÃ¡lhatÃ³ MagyarorszÃ¡g legmagasabb csÃºcsa, a KÃ©kes-tetÅ‘ (1014 mÃ©ter).",
        "Eger vÃ¡rosa hÃ­res az 1552-es vÃ¡rvÃ©dÃ©srÅ‘l Ã©s az Egri BikavÃ©r vÃ¶rÃ¶sborrÃ³l.",
        "EgerszalÃ³kon egyedÃ¼lÃ¡llÃ³ 'sÃ³domb' talÃ¡lhatÃ³, amelyet a feltÃ¶rÅ‘ termÃ¡lvÃ­z alakÃ­tott ki.",
        "A MÃ¡tra-hegysÃ©g az orszÃ¡g egyik legnÃ©pszerÅ±bb tÃºra- Ã©s Ã¼dÃ¼lÅ‘Ã¶vezete.",
        "A vÃ¡rmegye Ã©szaki rÃ©szÃ©n Ã©lÅ‘ palÃ³cok gazdag nÃ©pszokÃ¡saikrÃ³l Ã©s jellegzetes nyelvjÃ¡rÃ¡sukrÃ³l ismertek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "jasz-nagykun-szolnok",
    type: "region",
    parent: "HU-JN",
    coords: [20.2, 47.1833],
    name: {"de": "JÃ¡sz-Nagykun-Szolnok", "hu": "JÃ¡sz-Nagykun-Szolnok", "ro": "JÃ¡sz-Nagykun-Szolnok", "en": "JÃ¡sz-Nagykun-Szolnok"},
    description: {
      "de": "Das Komitat JÃ¡sz-Nagykun-Szolnok liegt im Herzen der GroÃŸen Ungarischen Tiefebene und wird vom majestÃ¤tischen Fluss TheiÃŸ durchquert. Die Region ist geprÃ¤gt von weiten Agrarlandschaften und einer reichen kulturellen IdentitÃ¤t, die auf die Ansiedlung der Jazygen (JÃ¡sz) und Kumanen (Kun) zurÃ¼ckgeht. Das administrative Zentrum ist Szolnok, eine strategisch wichtige Stadt an der TheiÃŸ, die fÃ¼r ihre BrÃ¼cken, ihre Luftfahrtgeschichte und ihre lebendige Kunstszene bekannt ist. JÃ¡sz-Nagykun-Szolnok ist zudem ein bedeutendes Zentrum fÃ¼r Thermal- und Wassertourismus, insbesondere durch den TheiÃŸ-See, der vielfÃ¤ltige FreizeitmÃ¶glichkeiten bietet. Die Region bewahrt stolz ihre einzigartigen Traditionen und bietet Besuchern eine authentische Erfahrung des ungarischen Tieflandes.",
      "hu": "JÃ¡sz-Nagykun-Szolnok vÃ¡rmegye az AlfÃ¶ld szÃ­vÃ©ben terÃ¼l el, Ã©s a fensÃ©ges Tisza folyÃ³ szeli Ã¡t. A rÃ©giÃ³t vÃ©gtelen mezÅ‘gazdasÃ¡gi tÃ¡jak Ã©s gazdag kulturÃ¡lis identitÃ¡s jellemzi, amely a jÃ¡szok Ã©s a kunok betelepÃ¼lÃ©sÃ©re vezethetÅ‘ vissza. SzÃ©khelye Szolnok, a Tisza-parti stratÃ©giai kÃ¶zpont, amely hÃ­djairÃ³l, repÃ¼lÃ©stÃ¶rtÃ©neti mÃºltjÃ¡rÃ³l Ã©s pezsgÅ‘ mÅ±vÃ©szeti Ã©letÃ©rÅ‘l ismert. JÃ¡sz-Nagykun-Szolnok emellett a termÃ¡l- Ã©s vÃ­zi turizmus egyik fontos fellegvÃ¡ra, kÃ¼lÃ¶nÃ¶sen a Tisza-tÃ³ rÃ©vÃ©n, amely szÃ¡mtalan kikapcsolÃ³dÃ¡si lehetÅ‘sÃ©get kÃ­nÃ¡l. A vÃ¡rmegye bÃ¼szkÃ©n Å‘rzi egyedÃ¼lÃ¡llÃ³ hagyomÃ¡nyait, Ã©s az alfÃ¶ldi Ã©letÃ©rzÃ©s hiteles Ã©lmÃ©nyÃ©t nyÃºjtja az idelÃ¡togatÃ³knak.",
      "ro": "JudeÈ›ul JÃ¡sz-Nagykun-Szolnok este situat Ã®n inima Marii CÃ¢mpii Maghiare È™i este traversat de maiestuosul rÃ¢u Tisa. Regiunea este caracterizatÄƒ de peisaje agricole vaste È™i de o identitate culturalÄƒ bogatÄƒ, care provine de la aÈ™ezarea iazigilor (JÃ¡sz) È™i cumanilor (Kun). Centrul administrativ este Szolnok, un oraÈ™ strategic pe malul Tisei, cunoscut pentru podurile sale, istoria aviaÈ›iei È™i scena artisticÄƒ vibrantÄƒ. JÃ¡sz-Nagykun-Szolnok este, de asemenea, un centru important pentru turismul termal È™i nautic, Ã®n special prin Lacul Tisa, care oferÄƒ numeroase posibilitÄƒÈ›i de recreere. JudeÈ›ul Ã®È™i pÄƒstreazÄƒ cu mÃ¢ndrie tradiÈ›iile unice È™i oferÄƒ vizitatorilor o experienÈ›Äƒ autenticÄƒ a cÃ¢mpiei maghiare.",
      "en": "JÃ¡sz-Nagykun-Szolnok County is located in the heart of the Great Hungarian Plain and is traversed by the majestic river Tisza. The region is characterized by vast agricultural landscapes and a rich cultural identity stemming from the settlement of the JÃ¡sz (Iazyges) and Kun (Cumans) peoples. Its administrative center is Szolnok, a strategic city on the banks of the Tisza, famous for its bridges, aviation history, and vibrant art scene. JÃ¡sz-Nagykun-Szolnok is also a major hub for thermal and water tourism, particularly through Lake Tisza, which offers diverse recreational opportunities. The county proudly preserves its unique traditions and offers visitors an authentic experience of the Hungarian lowlands."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "JÃ¡sz-Nagykun-Szolnok vÃ¡rmegye az AlfÃ¶ld szÃ­vÃ©ben, a Tisza Ã©s a KÃ¶rÃ¶sÃ¶k mentÃ©n terÃ¼l el, Ã©s nevÃ©t az itt letelepedett jÃ¡sz Ã©s kun nÃ©pcsoportokrÃ³l kapta. A rÃ©giÃ³ arculatÃ¡t a vÃ©gtelen rÃ³nasÃ¡g Ã©s a kanyargÃ³s Tisza hatÃ¡rozza meg, amely nemcsak a mezÅ‘gazdasÃ¡gnak, hanem a kikapcsolÃ³dÃ¡snak is alapja. A vÃ¡rmegye szÃ©khelye Szolnok, a 'Tisza fÅ‘vÃ¡rosa', amely fontos kÃ¶zlekedÃ©si csomÃ³pont Ã©s kulturÃ¡lis centrum. A terÃ¼let hÃ­res termÃ¡lvizeirÅ‘l Ã©s fÃ¼rdÅ‘irÅ‘l, valamint a Tisza-tÃ³ nyÃºjtotta aktÃ­v turisztikai lehetÅ‘sÃ©gekrÅ‘l. A nÃ©pmÅ±vÃ©szetben a jÃ¡sz hÃ­mzÃ©s Ã©s a kun hagyomÃ¡nyok, a gasztronÃ³miÃ¡ban pedig a tiszai halÃ¡szlÃ© Ã©s a birkapÃ¶rkÃ¶lt emelkedik ki.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Szolnok, ein wichtiger Verkehrsknotenpunkt an der TheiÃŸ.",
        "Die Region ist nach den Volksgruppen der Jazygen und Kumanen benannt.",
        "Der TheiÃŸ-See ist der zweitgrÃ¶ÃŸte See Ungarns und ein Paradies fÃ¼r Ã–kotourismus.",
        "Szolnok beherbergt das grÃ¶ÃŸte Luftfahrtmuseum Ungarns (RepTÃ¡r).",
        "Die Stadt JÃ¡szberÃ©ny ist das kulturelle Zentrum der Jazygen-Region.",
        "MezÅ‘tÃºr ist weltberÃ¼hmt fÃ¼r seine jahrhundertealte TÃ¶pfertradition.",
        "Die Region verfÃ¼gt Ã¼ber zahlreiche Heil- und ThermalbÃ¤der, wie in BerekfÃ¼rdÅ‘.",
        "Das Komitat spielt eine fÃ¼hrende Rolle in der ungarischen Getreide- und Ã–lsaatenproduktion.",
        "Die 'Lehel-Horn' in JÃ¡szberÃ©ny ist eine bedeutende historische Reliquie.",
        "Die Flora und Fauna entlang der TheiÃŸ-Auen ist von herausragender Ã¶kologischer Bedeutung."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye Szolnok, a Tisza menti kÃ¶zlekedÃ©s Ã©s kultÃºra fontos csomÃ³pontja.",
        "A rÃ©giÃ³ nevÃ©t az itt letelepedett jÃ¡sz Ã©s kun nÃ©pcsoportokrÃ³l kapta.",
        "A Tisza-tÃ³ az orszÃ¡g mÃ¡sodik legnagyobb tava Ã©s az Ã¶koturizmus paradicsoma.",
        "Szolnokon talÃ¡lhatÃ³ a RepTÃ¡r, EurÃ³pa egyik legmodernebb repÃ¼lÃ©stÃ¶rtÃ©neti mÃºzeuma.",
        "JÃ¡szberÃ©ny a jÃ¡szok kulturÃ¡lis kÃ¶zpontja, ahol a hÃ­res Lehel-kÃ¼rtÃ¶t is Å‘rzik.",
        "MezÅ‘tÃºr vÃ¡rosa Ã©vszÃ¡zados fazekas hagyomÃ¡nyairÃ³l Ã©s kerÃ¡miÃ¡irÃ³l vilÃ¡gszerte ismert.",
        "A vÃ¡rmegye kivÃ¡lÃ³ gyÃ³gyvizekkel rendelkezik, pÃ©ldÃ¡ul BerekfÃ¼rdÅ‘n vagy CserkeszÅ‘lÅ‘n.",
        "JÃ¡sz-Nagykun-Szolnok az orszÃ¡g egyik legfontosabb gabonatermelÅ‘ vidÃ©ke.",
        "A Tisza Ã©s holtÃ¡gai mentÃ©n egyedÃ¼lÃ¡llÃ³ Ã¡rtÃ©ri Ã©lÅ‘vilÃ¡g talÃ¡lhatÃ³.",
        "A vÃ¡rmegye gasztronÃ³miÃ¡jÃ¡nak egyik kÃ¼lÃ¶nlegessÃ©ge a karcagi birkapÃ¶rkÃ¶lt."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este Szolnok, un nod important de transport pe malul Tisei.",
        "Regiunea este numitÄƒ dupÄƒ grupurile etnice ale iazigilor È™i cumanilor.",
        "Lacul Tisa este al doilea cel mai mare lac din Ungaria È™i un paradis pentru ecoturism.",
        "Szolnok gÄƒzduieÈ™te cel mai mare muzeu al aviaÈ›iei din Ungaria (RepTÃ¡r).",
        "OraÈ™ul JÃ¡szberÃ©ny este centrul cultural al regiunii iazigilor.",
        "MezÅ‘tÃºr este renumit Ã®n Ã®ntreaga lume pentru tradiÈ›ia sa de olÄƒrit de secole.",
        "Regiunea dispune de numeroase bÄƒi curative È™i termale, cum ar fi cea din BerekfÃ¼rdÅ‘.",
        "JudeÈ›ul joacÄƒ un rol de lider Ã®n producÈ›ia maghiarÄƒ de cereale È™i seminÈ›e oleaginoase.",
        "'Cornul lui Lehel' din JÃ¡szberÃ©ny este o relicvÄƒ istoricÄƒ importantÄƒ.",
        "Flora È™i fauna de-a lungul luncii Tisei au o importanÈ›Äƒ ecologicÄƒ remarcabilÄƒ."
      ],
      "en": [
        "The county seat is Szolnok, an important transport hub on the river Tisza.",
        "The region is named after the JÃ¡sz (Iazyges) and Kun (Cumans) ethnic groups.",
        "Lake Tisza is the second largest lake in Hungary and a paradise for ecotourism.",
        "Szolnok is home to Hungary's largest aviation museum (RepTÃ¡r).",
        "The city of JÃ¡szberÃ©ny is the cultural center of the JÃ¡sz region.",
        "MezÅ‘tÃºr is world-famous for its centuries-old pottery tradition.",
        "The region has numerous medicinal and thermal baths, such as in BerekfÃ¼rdÅ‘.",
        "The county plays a leading role in Hungarian grain and oilseed production.",
        "The 'Lehel Horn' in JÃ¡szberÃ©ny is a significant historical relic.",
        "The flora and fauna along the Tisza floodplains are of outstanding ecological importance."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A vÃ¡rmegye nevÃ©t a 13. szÃ¡zadban letelepedett jÃ¡szokrÃ³l Ã©s kunokrÃ³l kapta.",
        "Szolnok vÃ¡rosa fontos vasÃºti Ã©s vÃ­zi kÃ¶zlekedÃ©si csomÃ³pont a Tisza partjÃ¡n.",
        "Itt talÃ¡lhatÃ³ a Tisza-tÃ³ egy jelentÅ‘s rÃ©sze, amely az orszÃ¡g egyik legfontosabb Ã¶koturisztikai cÃ©lpontja.",
        "A jÃ¡szberÃ©nyi JÃ¡sz MÃºzeumban Å‘rzik a hÃ­res Lehel-kÃ¼rtÃ¶t, a jÃ¡szok ereklyÃ©jÃ©t.",
        "MezÅ‘tÃºr vÃ¡rosa Ã©vszÃ¡zadok Ã³ta a magyar fazekassÃ¡g Ã©s kerÃ¡miamÅ±vÃ©szet egyik kÃ¶zpontja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "komarom-esztergom",
    type: "region",
    parent: "HU-KE",
    coords: [18.4222, 47.58],
    name: {"de": "KomÃ¡rom-Esztergom", "hu": "KomÃ¡rom-Esztergom", "ro": "KomÃ¡rom-Esztergom", "en": "KomÃ¡rom-Esztergom"},
    image: "/geo-images/hungary/komarom-esztergom.webp",
    description: {
      "de": "Das Komitat KomÃ¡rom-Esztergom ist das flÃ¤chenmÃ¤ÃŸig kleinste, aber eines der historisch und wirtschaftlich bedeutendsten Komitate Ungarns. Es liegt im Norden des Landes an der Donau, die hier die natÃ¼rliche Grenze zur Slowakei bildet. Das administrative Zentrum ist TatabÃ¡nya, wÃ¤hrend Esztergom als ehemalige Hauptstadt und Sitz des ungarischen Primas das geistige und historische Herz der Region darstellt. Die Landschaft wird durch das malerische Donauknie und die GebirgszÃ¼ge von Gerecse und Pilis geprÃ¤gt, die zahlreiche MÃ¶glichkeiten fÃ¼r Wanderungen und Naturerlebnisse bieten. KomÃ¡rom-Esztergom verbindet auf engstem Raum monumentale sakrale Architektur, bedeutende rÃ¶mische Ausgrabungen und eine hochmoderne Industrie.",
      "hu": "KomÃ¡rom-Esztergom vÃ¡rmegye az orszÃ¡g legkisebb terÃ¼letÅ±, de tÃ¶rtÃ©nelmi Ã©s gazdasÃ¡gi szempontbÃ³l egyik legfontosabb vÃ¡rmegyÃ©je. Az orszÃ¡g Ã©szaki rÃ©szÃ©n, a Duna mentÃ©n fekszik, amely itt termÃ©szetes hatÃ¡rt kÃ©pez SzlovÃ¡kia felÃ©. SzÃ©khelye TatabÃ¡nya, de a rÃ©giÃ³ szellemi Ã©s tÃ¶rtÃ©nelmi kÃ¶zpontja Esztergom, az orszÃ¡g egykori fÅ‘vÃ¡rosa Ã©s a magyar katolikus egyhÃ¡z szÃ©khelye. A tÃ¡jat a festÅ‘i Dunakanyar, valamint a Gerecse Ã©s a Pilis vonulatai hatÃ¡rozzÃ¡k meg, amelyek szÃ¡mtalan tÃºrÃ¡zÃ¡si lehetÅ‘sÃ©get kÃ­nÃ¡lnak. KomÃ¡rom-Esztergom vÃ¡rmegyÃ©ben a monumentÃ¡lis egyhÃ¡zi Ã©pÃ­tÃ©szet, a jelentÅ‘s rÃ³mai kori emlÃ©kek Ã©s a modern ipari parkok kÃ¼lÃ¶nleges egysÃ©get alkotnak.",
      "ro": "JudeÈ›ul KomÃ¡rom-Esztergom este cel mai mic ca suprafaÈ›Äƒ, dar unul dintre cele mai importante judeÈ›e din Ungaria din punct de vedere istoric È™i economic. Este situat Ã®n nordul È›Äƒrii, de-a lungul DunÄƒrii, care formeazÄƒ aici graniÈ›a naturalÄƒ cu Slovacia. Centrul administrativ este TatabÃ¡nya, Ã®n timp ce Esztergom, fosta capitalÄƒ È™i reÈ™edinÈ›a primatului Ungariei, reprezintÄƒ inima spiritualÄƒ È™i istoricÄƒ a regiunii. Peisajul este marcat de pitoreasca Cotul DunÄƒrii È™i de lanÈ›urile muntoase Gerecse È™i Pilis, care oferÄƒ numeroase oportunitÄƒÈ›i pentru drumeÈ›ii È™i experienÈ›e Ã®n naturÄƒ. KomÃ¡rom-Esztergom Ã®mbinÄƒ pe un spaÈ›iu restrÃ¢ns arhitectura sacralÄƒ monumentalÄƒ, sÄƒpÄƒturi romane importante È™i o industrie ultramodernÄƒ.",
      "en": "KomÃ¡rom-Esztergom County is the smallest by area, yet one of the most historically and economically significant counties in Hungary. It is located in the north of the country along the Danube, which forms the natural border with Slovakia. Its administrative center is TatabÃ¡nya, while Esztergom, as the former capital and seat of the Hungarian Primate, represents the spiritual and historical heart of the region. The landscape is characterized by the picturesque Danube Bend and the mountain ranges of Gerecse and Pilis, offering numerous opportunities for hiking and nature experiences. KomÃ¡rom-Esztergom combines monumental sacral architecture, significant Roman excavations, and state-of-the-art industry within a compact area."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "KomÃ¡rom-Esztergom vÃ¡rmegye MagyarorszÃ¡g Ã©szaknyugati rÃ©szÃ©n, a Duna mentÃ©n fekszik, Ã©s tÃ¶rtÃ©nelmileg az orszÃ¡g egyik legjelentÅ‘sebb vidÃ©ke. Itt talÃ¡lhatÃ³ Esztergom, a magyar katolikus egyhÃ¡z kÃ¶zpontja Ã©s az orszÃ¡g egykori fÅ‘vÃ¡rosa, ahol az impozÃ¡ns Bazilika magasodik a vÃ¡ros fÃ¶lÃ©. A vÃ¡rmegye tÃ¡ja rendkÃ­vÃ¼l vÃ¡ltozatos, hiszen itt talÃ¡lkozik a Gerecse Ã©s a Pilis hegysÃ©g a DunÃ¡val, festÅ‘i szurdokokat Ã©s panorÃ¡mÃ¡t nyÃºjtva. KomÃ¡rom vÃ¡rosa hÃ­res erÅ‘drendszerÃ©rÅ‘l, amely a Duna kÃ©t partjÃ¡n hÃºzÃ³dik, mÃ­g TatabÃ¡nya, a vÃ¡rmegye szÃ©khelye, egykori bÃ¡nyÃ¡szvÃ¡rosbÃ³l vÃ¡lt modern ipari kÃ¶zponttÃ¡. A rÃ©giÃ³ kulturÃ¡lis Ã©s termÃ©szeti kincsei, mint Tata tatai vÃ¡ra Ã©s tavai, vonzÃ³ cÃ©lpontot jelentenek minden lÃ¡togatÃ³nak.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist TatabÃ¡nya, bekannt fÃ¼r das monumentale Turul-Denkmal.",
        "Esztergom war die erste Hauptstadt Ungarns und Geburtsort des Heiligen Stephan.",
        "Die Basilika von Esztergom ist das grÃ¶ÃŸte KirchengebÃ¤ude Ungarns.",
        "Die Festung von KomÃ¡rom ist eines der grÃ¶ÃŸten Festungssysteme Mitteleuropas.",
        "Tata ist als die 'Stadt der GewÃ¤sser' bekannt und beherbergt eine prÃ¤chtige Wasserburg.",
        "Die Region beherbergt bedeutende rÃ¶mische Ruinen in der antiken Stadt Brigetio.",
        "Das Gerecse-Gebirge ist berÃ¼hmt fÃ¼r seinen roten Marmor.",
        "KomÃ¡rom-Esztergom ist ein fÃ¼hrender Standort fÃ¼r die Elektronik- und Automobilindustrie.",
        "Die Maria-Valeria-BrÃ¼cke verbindet Esztergom mit der slowakischen Stadt Å tÃºrovo.",
        "In TatabÃ¡nya befindet sich die Szelim-HÃ¶hle, eine bedeutende archÃ¤ologische FundstÃ¤tte."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye TatabÃ¡nya, ahol EurÃ³pa egyik legnagyobb madÃ¡rszobra, a Turul-emlÃ©kmÅ± Ã¡ll.",
        "Esztergom volt MagyarorszÃ¡g elsÅ‘ fÅ‘vÃ¡rosa Ã©s Szent IstvÃ¡n kirÃ¡ly szÃ¼letÃ©si helye.",
        "Az Esztergomi Bazilika az orszÃ¡g legnagyobb egyhÃ¡zi Ã©pÃ¼lete Ã©s az Ã©rseki szÃ©khely.",
        "A komÃ¡romi erÅ‘drendszer KÃ¶zÃ©p-EurÃ³pa egyik legnagyobb katonai lÃ©tesÃ­tmÃ©nye.",
        "Tata a 'vizek vÃ¡rosa', hÃ­res az Ã–reg-tÃ³rÃ³l Ã©s a festÅ‘i Zsigmond-kori vÃ¡rÃ¡rÃ³l.",
        "A vÃ¡rmegye terÃ¼letÃ©n talÃ¡lhatÃ³k Brigetio Ã³kori rÃ³mai vÃ¡rosÃ¡nak jelentÅ‘s maradvÃ¡nyai.",
        "A Gerecse-hegysÃ©g hÃ­res a vÃ¶rÃ¶s mÃ©szkÅ‘rÅ‘l, amelyet gyakran 'gerecsei mÃ¡rvÃ¡nykÃ©nt' emlegetnek.",
        "KomÃ¡rom-Esztergom az orszÃ¡g egyik legiparosodottabb vÃ¡rmegyÃ©je.",
        "A MÃ¡ria ValÃ©ria hÃ­d kÃ¶ti Ã¶ssze Esztergomot a szlovÃ¡kiai PÃ¡rkÃ¡nnyal.",
        "TatabÃ¡nyÃ¡n talÃ¡lhatÃ³ a Szelim-barlang, amely fontos Å‘skori leletek lelÅ‘helye."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este TatabÃ¡nya, cunoscutÄƒ pentru monumentul Turul.",
        "Esztergom a fost prima capitalÄƒ a Ungariei È™i locul de naÈ™tere al SfÃ¢ntului È˜tefan.",
        "Bazilica din Esztergom este cea mai mare clÄƒdire bisericeascÄƒ din Ungaria.",
        "Sistemul de fortificaÈ›ii din KomÃ¡rom este unul dintre cele mai mari din Europa CentralÄƒ.",
        "Tata este cunoscut drept 'oraÈ™ul apelor' È™i gÄƒzduieÈ™te un castel de apÄƒ magnific.",
        "Regiunea gÄƒzduieÈ™te ruine romane importante Ã®n oraÈ™ul antic Brigetio.",
        "MunÈ›ii Gerecse sunt faimoÈ™i pentru marmura lor roÈ™ie.",
        "KomÃ¡rom-Esztergom este un centru de top pentru industria electronicÄƒ È™i auto.",
        "Podul Maria Valeria leagÄƒ Esztergom de oraÈ™ul slovac Å tÃºrovo.",
        "ÃŽn TatabÃ¡nya se aflÄƒ peÈ™tera Szelim, un sit arheologic important."
      ],
      "en": [
        "The county seat is TatabÃ¡nya, home to the monumental Turul monument.",
        "Esztergom was the first capital of Hungary and the birthplace of Saint Stephen.",
        "The Esztergom Basilica is the largest church building in Hungary.",
        "The KomÃ¡rom fortress system is one of the largest in Central Europe.",
        "Tata is known as the 'City of Waters' and features a stunning water castle.",
        "The region is home to significant Roman ruins in the ancient city of Brigetio.",
        "The Gerecse Mountains are famous for their red limestone (marble).",
        "KomÃ¡rom-Esztergom is a leading location for the electronics and automotive industries.",
        "The Maria Valeria Bridge connects Esztergom with the Slovak town of Å tÃºrovo.",
        "The Szelim Cave in TatabÃ¡nya is a significant prehistoric archaeological site."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Esztergom a magyar keresztÃ©nysÃ©g bÃ¶lcsÅ‘je, az esztergomi Bazilika az orszÃ¡g legnagyobb temploma.",
        "KomÃ¡rom vÃ¡rosa az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi vÃ¡romÃ¡nyos listÃ¡jÃ¡n szereplÅ‘ monumentÃ¡lis erÅ‘drendszerÃ©rÅ‘l ismert.",
        "Tata a 'vizek vÃ¡rosa', hÃ­res az Ã–reg-tÃ³rÃ³l Ã©s a tÃ³ partjÃ¡n Ã¡llÃ³ Zsigmond-kori vÃ¡rrÃ³l.",
        "TatabÃ¡nya felett magasodik a Turul-emlÃ©kmÅ±, amely EurÃ³pa egyik legnagyobb madÃ¡rszobra.",
        "A Gerecse-hegysÃ©g kivÃ¡lÃ³ tÃºraÃºtvonalakat Ã©s hÃ­res vÃ¶rÃ¶smÃ¡rvÃ¡ny-bÃ¡nyÃ¡kat rejt."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nograd",
    type: "region",
    parent: "HU-NO",
    coords: [19.8053, 48.0986],
    name: {"de": "Neograd", "hu": "NÃ³grÃ¡d", "ro": "NÃ³grÃ¡d", "en": "NÃ³grÃ¡d"},
    image: "/geo-images/hungary/nograd.webp",
    description: {
      "de": "Das Komitat NÃ³grÃ¡d liegt im Norden Ungarns an der Grenze zur Slowakei und ist bekannt als das 'Land der Burgen'. Die Region ist geprÃ¤gt von einer wildromantischen HÃ¼gellandschaft, dichten WÃ¤ldern und einer auÃŸergewÃ¶hnlich reichen Volkskultur. Das administrative Zentrum ist SalgÃ³tarjÃ¡n, eine Stadt mit einer bedeutenden Bergbaugeschichte, die malerisch in einem Tal eingebettet ist. NÃ³grÃ¡d beherbergt mit HollÃ³kÅ‘ ein lebendiges Museumsdorf, das als erstes ungarisches Dorf zum UNESCO-Welterbe erklÃ¤rt wurde und die Traditionen der Paloczen bewahrt. Die Region bietet eine einzigartige Mischung aus unberÃ¼hrter Natur, mittelalterlichen Festungen und authentischem lÃ¤ndlichem Leben, das Besucher in vergangene Zeiten zurÃ¼ckversetzt.",
      "hu": "NÃ³grÃ¡d vÃ¡rmegye MagyarorszÃ¡g Ã©szaki rÃ©szÃ©n, a szlovÃ¡k hatÃ¡r mentÃ©n fekszik, Ã©s mÃ©ltÃ¡n nevezik a 'vÃ¡rak fÃ¶ldjÃ©nek'. A rÃ©giÃ³t vadregÃ©nyes dombvidÃ©kek, sÅ±rÅ± erdÅ‘k Ã©s rendkÃ­vÃ¼l gazdag nÃ©pi kultÃºra jellemzi. SzÃ©khelye SalgÃ³tarjÃ¡n, a jelentÅ‘s bÃ¡nyÃ¡szati mÃºlttal rendelkezÅ‘ vÃ¡ros, amely festÅ‘i vÃ¶lgyben terÃ¼l el. NÃ³grÃ¡d ad otthont HollÃ³kÅ‘nek, az Ã©lÅ‘ mÃºzeumfalunak, amely az orszÃ¡gban elsÅ‘kÃ©nt lett az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze, Ã©s hÅ±en Å‘rzi a palÃ³c hagyomÃ¡nyokat. A vÃ¡rmegye az Ã©rintetlen termÃ©szet, a kÃ¶zÃ©pkori erÅ‘dÃ­tmÃ©nyek Ã©s az autentikus vidÃ©ki Ã©let kÃ¼lÃ¶nleges elegyÃ©t kÃ­nÃ¡lja, amely visszarepÃ­ti a lÃ¡togatÃ³kat a mÃºltba.",
      "ro": "JudeÈ›ul NÃ³grÃ¡d este situat Ã®n nordul Ungariei, la graniÈ›a cu Slovacia, È™i este cunoscut drept 'È›ara castelelor'. Regiunea este caracterizatÄƒ de un peisaj deluros sÄƒlbatic È™i romantic, pÄƒduri dese È™i o culturÄƒ popularÄƒ excepÈ›ional de bogatÄƒ. Centrul administrativ este SalgÃ³tarjÃ¡n, un oraÈ™ cu o istorie minierÄƒ semnificativÄƒ, aÈ™ezat pitoresc Ã®ntr-o vale. NÃ³grÃ¡d gÄƒzduieÈ™te HollÃ³kÅ‘, un sat-muzeu viu, care a fost primul sat maghiar declarat patrimoniu mondial UNESCO È™i care pÄƒstreazÄƒ tradiÈ›iile palocilor. JudeÈ›ul oferÄƒ un amestec unic de naturÄƒ virginÄƒ, fortificaÈ›ii medievale È™i viaÈ›Äƒ ruralÄƒ autenticÄƒ, care Ã®i transpune pe vizitatori Ã®n vremuri trecute.",
      "en": "NÃ³grÃ¡d County is located in northern Hungary on the border with Slovakia and is known as the 'Land of Castles'. The region is characterized by wild and romantic hilly landscapes, dense forests, and an exceptionally rich folk culture. Its administrative center is SalgÃ³tarjÃ¡n, a city with a significant mining history, picturesquely nestled in a valley. NÃ³grÃ¡d is home to HollÃ³kÅ‘, a living museum village that was the first Hungarian village to be declared a UNESCO World Heritage site, preserving the traditions of the PalÃ³c people. The county offers a unique blend of untouched nature, medieval fortresses, and authentic rural life that transports visitors back in time."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "NÃ³grÃ¡d vÃ¡rmegye MagyarorszÃ¡g legkisebb lakossÃ¡gszÃ¡mÃº vÃ¡rmegyÃ©je, amely az Ã‰szaki-kÃ¶zÃ©phegysÃ©g vadregÃ©nyes tÃ¡jain terÃ¼l el. A vidÃ©ket sÅ±rÅ± erdÅ‘k, mÃ©ly vÃ¶lgyek Ã©s magasba tÃ¶rÅ‘ vÃ¡rromok jellemzik, mint pÃ©ldÃ¡ul SalgÃ³ vagy SomoskÅ‘ vÃ¡ra. NÃ³grÃ¡d a palÃ³c kultÃºra legfontosabb Å‘rzÅ‘je, ahol a nÃ©pszokÃ¡sok, a viselet Ã©s a nyelvjÃ¡rÃ¡s a mindennapok rÃ©sze. A vÃ¡rmegye Ã©kkÃ¶ve HollÃ³kÅ‘ Ã³faluja, amely az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze Ã©s Ã©lÅ‘ mÃºzeumkÃ©nt mutatja be a hagyomÃ¡nyos paraszti Ã©letformÃ¡t. A termÃ©szet kedvelÅ‘it az Ipoly folyÃ³ vÃ¶lgye Ã©s a CserhÃ¡t dombjai vÃ¡rjÃ¡k, mÃ­g SalgÃ³tarjÃ¡n, a vÃ¡rmegye szÃ©khelye, kÃ¼lÃ¶nleges bÃ¡nyÃ¡szati mÃºzeumÃ¡val Ã©s modern kÃ¶zpontjÃ¡val vÃ¡rja az utazÃ³kat.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist SalgÃ³tarjÃ¡n, die kleinste Komitatshauptstadt Ungarns.",
        "HollÃ³kÅ‘ ist ein UNESCO-Welterbe und bewahrt die traditionelle Paloczen-Architektur.",
        "Die Burg SalgÃ³ thront auf einem 625 Meter hohen Basaltkegel.",
        "Die Burg SomoskÅ‘ liegt direkt an der Grenze und ist berÃ¼hmt fÃ¼r ihre BasaltsÃ¤ulen.",
        "IpolytarnÃ³c beherbergt ein 'Urwelt-Pompeji' mit Millionen Jahre alten Fossilien.",
        "Die Region ist das Zentrum der Paloczen-Volksgruppe mit einzigartigen Dialekten und Trachten.",
        "Balassagyarmat ist als die 'tapferste Stadt' (Civitas Fortissima) bekannt.",
        "NÃ³grÃ¡d hat den hÃ¶chsten Waldanteil aller ungarischen Komitate.",
        "Die Burg von DrÃ©gely ist ein bedeutendes Symbol des ungarischen Heldenmutes.",
        "Das CserhÃ¡t-Gebirge bietet hervorragende MÃ¶glichkeiten fÃ¼r sanften Tourismus und Wandern."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye SalgÃ³tarjÃ¡n, az orszÃ¡g legkisebb vÃ¡rmegyeszÃ©khelye.",
        "HollÃ³kÅ‘ Ã³faluja UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­n Ã©s az Ã©lÅ‘ palÃ³c kultÃºra kÃ¶zpontja.",
        "SalgÃ³ vÃ¡ra egy 625 mÃ©ter magas bazaltkÃºpon magasodik a tÃ¡j fÃ¶lÃ©.",
        "A somoskÅ‘i vÃ¡r mellett talÃ¡lhatÃ³ a vilÃ¡ghÃ­rÅ±, hajlott bazaltoszlopokbÃ³l Ã¡llÃ³ vÃ­zesÃ©s.",
        "IpolytarnÃ³con lÃ¡thatÃ³ az 'Å‘svilÃ¡gi Pompeji', ahol milliÃ³ Ã©ves Å‘smaradvÃ¡nyokat Å‘riztek meg.",
        "A vÃ¡rmegye a palÃ³c nÃ©pcsoport kÃ¶zpontja, egyedÃ¼lÃ¡llÃ³ nyelvjÃ¡rÃ¡ssal Ã©s nÃ©pviselettel.",
        "Balassagyarmat a 'legbÃ¡trabb vÃ¡ros' (Civitas Fortissima) cÃ­met viseli.",
        "NÃ³grÃ¡d vÃ¡rmegye rendelkezik az orszÃ¡gban a legnagyobb erdÅ‘lefedettsÃ©ggel.",
        "DrÃ©gely vÃ¡ra a magyar Ã¶nfelÃ¡ldozÃ¡s Ã©s hÅ‘siessÃ©g egyik legfontosabb emlÃ©khelye.",
        "A CserhÃ¡t lankÃ¡i kivÃ¡lÃ³ lehetÅ‘sÃ©get nyÃºjtanak a csendes tÃºrÃ¡zÃ¡sra Ã©s a kikapcsolÃ³dÃ¡sra."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este SalgÃ³tarjÃ¡n, cea mai micÄƒ reÈ™edinÈ›Äƒ de judeÈ› din Ungaria.",
        "Satul vechi HollÃ³kÅ‘ este sit UNESCO È™i centrul culturii vii a palocilor.",
        "Cetatea SalgÃ³ troneazÄƒ pe un con de bazalt Ã®nalt de 625 de metri.",
        "LÃ¢ngÄƒ cetatea SomoskÅ‘ se aflÄƒ faimoasa cascadÄƒ de coloane de bazalt curbate.",
        "La IpolytarnÃ³c se aflÄƒ 'Pompeii-ul lumii antice', cu fosile vechi de milioane de ani.",
        "Regiunea este centrul grupului etnic al palocilor, cu dialecte È™i costume unice.",
        "Balassagyarmat poartÄƒ titlul de 'cel mai curajos oraÈ™' (Civitas Fortissima).",
        "JudeÈ›ul NÃ³grÃ¡d are cea mai mare proporÈ›ie de pÄƒduri din Ungaria.",
        "Cetatea DrÃ©gely este un simbol important al eroismului È™i sacrificiului maghiar.",
        "MunÈ›ii CserhÃ¡t oferÄƒ oportunitÄƒÈ›i excelente pentru turism lent È™i drumeÈ›ii."
      ],
      "en": [
        "The county seat is SalgÃ³tarjÃ¡n, the smallest county seat in Hungary.",
        "The old village of HollÃ³kÅ‘ is a UNESCO World Heritage site and a center of PalÃ³c culture.",
        "SalgÃ³ Castle towers over the landscape on a 625-meter-high basalt cone.",
        "Near SomoskÅ‘ Castle lies the world-famous waterfall of curved basalt columns.",
        "IpolytarnÃ³c houses an 'ancient Pompeii' with fossils millions of years old.",
        "The county is the center of the PalÃ³c ethnic group, with unique dialects and costumes.",
        "Balassagyarmat is known as the 'Bravest City' (Civitas Fortissima).",
        "NÃ³grÃ¡d County has the highest percentage of forest cover in Hungary.",
        "DrÃ©gely Castle is a significant symbol of Hungarian heroism and sacrifice.",
        "The CserhÃ¡t hills offer excellent opportunities for slow tourism and hiking."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt talÃ¡lhatÃ³ HollÃ³kÅ‘, az egyetlen magyar falu, amely szerepel az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi listÃ¡jÃ¡n.",
        "A vÃ¡rmegye szÃ©khelye SalgÃ³tarjÃ¡n, amely az orszÃ¡g elsÅ‘ Ã©s egyetlen fÃ¶ldalatti bÃ¡nyamÃºzeumÃ¡nak ad otthont.",
        "NÃ³grÃ¡d vÃ¡rmegye terÃ¼lete az orszÃ¡g egyik legerdÅ‘sebb vidÃ©ke, a terÃ¼let tÃ¶bb mint 40%-Ã¡t erdÅ‘ borÃ­tja.",
        "A somoskÅ‘i vÃ¡r sziklÃ¡inÃ¡l lÃ¡thatÃ³ a vilÃ¡gon ritkasÃ¡gszÃ¡mba menÅ‘ bazaltorgona.",
        "IpolytarnÃ³con talÃ¡lhatÃ³ az 'Å‘svilÃ¡gi Pompeji', amely hÃ­res Å‘slÃ©nytani leleteirÅ‘l Ã©s megkÃ¶vesedett fÃ¡irÃ³l."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pest",
    type: "region",
    parent: "HU-PE",
    coords: [19.0761, 47.6694],
    name: {"de": "Pest", "hu": "Pest", "ro": "Pest", "en": "Pest"},
    image: "/geo-images/hungary/pest.webp",
    description: {
      "de": "Das Komitat Pest umschlieÃŸt die ungarische Hauptstadt Budapest und ist das bevÃ¶lkerungsreichste und wirtschaftlich dynamischste Komitat des Landes. Die Region bietet eine auÃŸergewÃ¶hnliche Vielfalt, die von den malerischen Bergen des Pilis und BÃ¶rzsÃ¶ny bis zu den weiten Ebenen der GroÃŸen Tiefebene reicht. Das administrative Zentrum befindet sich in Budapest, obwohl die Stadt selbst eine eigenstÃ¤ndige Region bildet. Pest ist reich an historischen SchÃ¤tzen, wie dem kÃ¶niglichen Schloss in GÃ¶dÃ¶llÅ‘ und der antiken Stadt VisegrÃ¡d am Donauknie. Die Region dient als wichtigster Verkehrsknotenpunkt und wirtschaftlicher Motor Ungarns, wÃ¤hrend sie gleichzeitig zahlreiche Erholungsgebiete und kulturelle Highlights fÃ¼r Bewohner und Touristen bietet.",
      "hu": "Pest vÃ¡rmegye a fÅ‘vÃ¡rost, Budapestet Ã¶leli kÃ¶rÃ¼l, Ã©s az orszÃ¡g legnÃ©pesebb, egyben gazdasÃ¡gilag legdinamikusabb vÃ¡rmegyÃ©je. A rÃ©giÃ³ rendkÃ­vÃ¼li vÃ¡ltozatossÃ¡got mutat: a Pilis Ã©s a BÃ¶rzsÃ¶ny festÅ‘i hegyvonulataitÃ³l kezdve az AlfÃ¶ld rÃ³nasÃ¡gaiig minden megtalÃ¡lhatÃ³ itt. BÃ¡r a vÃ¡rmegye szÃ©khelye Budapest, maga a fÅ‘vÃ¡ros kÃ¶zigazgatÃ¡silag kÃ¼lÃ¶n egysÃ©get alkot. Pest vÃ¡rmegye gazdag tÃ¶rtÃ©nelmi emlÃ©kekben, itt talÃ¡lhatÃ³ pÃ©ldÃ¡ul a gÃ¶dÃ¶llÅ‘i Grassalkovich-kastÃ©ly Ã©s a Dunakanyar Ã©kkÃ¶ve, VisegrÃ¡d is. A rÃ©giÃ³ az orszÃ¡g legfontosabb kÃ¶zlekedÃ©si csomÃ³pontja Ã©s gazdasÃ¡gi motorja, amely szÃ¡mtalan kirÃ¡ndulÃ³helyet Ã©s kulturÃ¡lis Ã©lmÃ©nyt kÃ­nÃ¡l az idelÃ¡togatÃ³knak.",
      "ro": "JudeÈ›ul Pest Ã®nconjoarÄƒ capitala ungarÄƒ Budapesta È™i este cel mai populat È™i mai dinamic judeÈ› din punct de vedere economic din È›arÄƒ. Regiunea oferÄƒ o diversitate excepÈ›ionalÄƒ, variind de la munÈ›ii pitoreÈ™ti Pilis È™i BÃ¶rzsÃ¶ny pÃ¢nÄƒ la cÃ¢mpiile vaste ale Marii CÃ¢mpii Maghiare. Centrul administrativ se aflÄƒ Ã®n Budapesta, deÈ™i oraÈ™ul Ã®n sine formeazÄƒ o regiune independentÄƒ. Pest este bogat Ã®n comori istorice, cum ar fi castelul regal din GÃ¶dÃ¶llÅ‘ È™i oraÈ™ul antic VisegrÃ¡d de pe Cotul DunÄƒrii. Regiunea serveÈ™te drept cel mai important nod de transport È™i motor economic al Ungariei, oferind Ã®n acelaÈ™i timp numeroase zone de recreere È™i atracÈ›ii culturale pentru locuitori È™i turiÈ™ti.",
      "en": "Pest County surrounds the Hungarian capital, Budapest, and is the most populous and economically dynamic county in the country. The region offers exceptional diversity, ranging from the picturesque mountains of Pilis and BÃ¶rzsÃ¶ny to the vast plains of the Great Hungarian Plain. Its administrative center is located in Budapest, although the city itself forms a separate administrative region. Pest is rich in historical treasures, such as the Royal Palace in GÃ¶dÃ¶llÅ‘ and the ancient town of VisegrÃ¡d on the Danube Bend. The county serves as Hungary's most important transport hub and economic engine, while simultaneously providing numerous recreational areas and cultural highlights for residents and tourists alike."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Pest vÃ¡rmegye MagyarorszÃ¡g kÃ¶zponti rÃ©szÃ©n terÃ¼l el, teljesen kÃ¶rÃ¼lÃ¶lelve a fÅ‘vÃ¡rost, Budapestet, amellyel szoros gazdasÃ¡gi Ã©s kulturÃ¡lis egysÃ©get alkot. Ez az orszÃ¡g legnÃ©pesebb vÃ¡rmegyÃ©je, amely rendkÃ­vÃ¼l vÃ¡ltozatos tÃ¡ji Ã©s turisztikai adottsÃ¡gokkal rendelkezik. Ã‰szakon a Dunakanyar festÅ‘i szakasza VisegrÃ¡ddal Ã©s SzentendrÃ©vel, dÃ©lebbre a GÃ¶dÃ¶llÅ‘i-dombsÃ¡g a kirÃ¡lyi kastÃ©llyal, mÃ­g dÃ©lkeleten az AlfÃ¶ld rÃ³nasÃ¡ga hatÃ¡rozza meg a vidÃ©ket. A vÃ¡rmegye szÃ¡mos kirÃ¡ndulÃ³helyet kÃ­nÃ¡l a Pilisben Ã©s a BÃ¶rzsÃ¶nyben, valamint kulturÃ¡lis kincseket VÃ¡c barokk belvÃ¡rosÃ¡ban. Pest vÃ¡rmegye az orszÃ¡g dinamikusan fejlÅ‘dÅ‘ szÃ­ve, ahol a modern ipar Ã©s a hagyomÃ¡nyÅ‘rzÅ‘ telepÃ¼lÃ©sek harmonikusan Ã©lnek egyÃ¼tt.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Budapest, obwohl die Stadt rechtlich nicht zum Komitat gehÃ¶rt.",
        "Das Schloss Grassalkovich in GÃ¶dÃ¶llÅ‘ war die bevorzugte Residenz von Kaiserin Sisi.",
        "VisegrÃ¡d am Donauknie war im Mittelalter ein bedeutender ungarischer KÃ¶nigssitz.",
        "Szentendre ist eine malerische KÃ¼nstlerstadt mit mediterranem Flair an der Donau.",
        "VÃ¡c beherbergt den einzigen Triumphbogen Ungarns und eine barocke Kathedrale.",
        "Die Region ist der wichtigste Standort fÃ¼r Logistik und Industrie in Ungarn.",
        "Das Pilis-Gebirge ist ein beliebtes Wandergebiet mit spiritueller Bedeutung.",
        "In Pest befindet sich der Hungaroring, die Rennstrecke fÃ¼r den GroÃŸen Preis von Ungarn.",
        "Das Freilichtmuseum (Skanzen) in Szentendre ist das grÃ¶ÃŸte seiner Art in Ungarn.",
        "Die Region hat die hÃ¶chste Dichte an Pendlern, die tÃ¤glich nach Budapest reisen."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye Budapest, bÃ¡r a fÅ‘vÃ¡ros jogilag nem rÃ©sze a vÃ¡rmegyÃ©nek.",
        "A gÃ¶dÃ¶llÅ‘i Grassalkovich-kastÃ©ly Sisi kirÃ¡lynÃ© egyik kedvenc tartÃ³zkodÃ¡si helye volt.",
        "VisegrÃ¡d a kÃ¶zÃ©pkorban a magyar kirÃ¡lyok egyik legfontosabb szÃ©khelye volt.",
        "Szentendre festÅ‘i mÅ±vÃ©szvÃ¡ros a Duna partjÃ¡n, mediterrÃ¡n hangulattal.",
        "VÃ¡c vÃ¡rosÃ¡ban talÃ¡lhatÃ³ az orszÃ¡g egyetlen diadalÃ­ve Ã©s egy lenyÅ±gÃ¶zÅ‘ barokk szÃ©kesegyhÃ¡z.",
        "A vÃ¡rmegye az orszÃ¡g legfontosabb logisztikai Ã©s ipari kÃ¶zpontja.",
        "A Pilis-hegysÃ©g nÃ©pszerÅ± tÃºrahelyszÃ­n, amelyhez szÃ¡mos legenda Ã©s spirituÃ¡lis hit fÅ±zÅ‘dik.",
        "MogyorÃ³don talÃ¡lhatÃ³ a Hungaroring, a Forma-1-es Magyar NagydÃ­j helyszÃ­ne.",
        "A szentendrei Skanzen az orszÃ¡g legnagyobb szabadtÃ©ri nÃ©prajzi mÃºzeuma.",
        "Pest vÃ¡rmegye rendelkezik az orszÃ¡g legfejlettebb agglomerÃ¡ciÃ³s gyÅ±rÅ±jÃ©vel."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este Budapesta, deÈ™i oraÈ™ul nu face parte legal din judeÈ›.",
        "Castelul Grassalkovich din GÃ¶dÃ¶llÅ‘ a fost reÈ™edinÈ›a preferatÄƒ a Ã®mpÄƒrÄƒtesei Sisi.",
        "VisegrÃ¡d, situat pe Cotul DunÄƒrii, a fost un sediu regal maghiar important Ã®n Evul Mediu.",
        "Szentendre este un oraÈ™ pitoresc al artiÈ™tilor, cu un aer mediteranean, pe malul DunÄƒrii.",
        "VÃ¡c gÄƒzduieÈ™te singurul arc de triumf din Ungaria È™i o catedralÄƒ barocÄƒ.",
        "Regiunea este cea mai importantÄƒ locaÈ›ie pentru logisticÄƒ È™i industrie din Ungaria.",
        "MunÈ›ii Pilis sunt o zonÄƒ popularÄƒ de drumeÈ›ie, cu o semnificaÈ›ie spiritualÄƒ.",
        "ÃŽn judeÈ›ul Pest se aflÄƒ Hungaroring, circuitul pentru Marele Premiu al Ungariei.",
        "Muzeul Ã®n aer liber (Skanzen) din Szentendre este cel mai mare de acest tip din Ungaria.",
        "Regiunea are cea mai mare densitate de navetiÈ™ti care cÄƒlÄƒtoresc zilnic cÄƒtre Budapesta."
      ],
      "en": [
        "The county seat is Budapest, although the city is legally not part of the county.",
        "The Grassalkovich Castle in GÃ¶dÃ¶llÅ‘ was a favorite residence of Empress Sisi.",
        "VisegrÃ¡d on the Danube Bend was a major Hungarian royal seat in the Middle Ages.",
        "Szentendre is a picturesque artists' town with a Mediterranean feel on the Danube.",
        "VÃ¡c is home to Hungary's only triumphal arch and a stunning Baroque cathedral.",
        "The county is the most important location for logistics and industry in Hungary.",
        "The Pilis Mountains are a popular hiking area with spiritual significance.",
        "Pest County is home to the Hungaroring, the circuit for the Hungarian Grand Prix.",
        "The Open Air Museum (Skanzen) in Szentendre is the largest of its kind in Hungary.",
        "The region has the most developed suburban ring and the highest number of commuters."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Pest vÃ¡rmegye az orszÃ¡g legnÃ©pesebb vÃ¡rmegyÃ©je, lakossÃ¡ga meghaladja az 1,3 milliÃ³ fÅ‘t.",
        "GÃ¶dÃ¶llÅ‘n talÃ¡lhatÃ³ a Grassalkovich-kastÃ©ly, amely Sisi (ErzsÃ©bet kirÃ¡lynÃ©) kedvenc pihenÅ‘helye volt.",
        "Szentendre a mÅ±vÃ©szetek vÃ¡rosa, hÃ­res galÃ©riÃ¡irÃ³l, templomtornyairÃ³l Ã©s a SkanzenrÅ‘l.",
        "VisegrÃ¡d a kÃ¶zÃ©pkori magyar kirÃ¡lyok szÃ©khelye volt, hÃ­res FellegvÃ¡rÃ¡rÃ³l Ã©s a Salamon-toronyrÃ³l.",
        "A Dunakanyar az orszÃ¡g egyik legszebb tÃ¡jegysÃ©ge, ahol a folyÃ³ Ã©les kanyart vesz a hegyek kÃ¶zÃ¶tt."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "somogy",
    type: "region",
    parent: "HU-SO",
    coords: [17.7897, 46.3592],
    name: {"de": "Schomodei", "hu": "Somogy", "ro": "Somogy", "en": "Somogy"},
    image: "/geo-images/hungary/somogy.webp",
    description: {
      "de": "Das Komitat Somogy liegt im SÃ¼dwesten Ungarns und erstreckt sich vom SÃ¼dufer des Plattensees bis zur kroatischen Grenze an der Drau. Die Region ist geprÃ¤gt von dichten WÃ¤ldern, sanften HÃ¼geln und den beliebtesten Ferienorten des Landes. Das administrative Zentrum ist KaposvÃ¡r, eine Stadt mit einer charmanten AtmosphÃ¤re und einer bedeutenden kulturellen Tradition. Somogy ist ein Paradies fÃ¼r Naturliebhaber und Wassersportler gleichermaÃŸen, da es sowohl die lebendige 'Riviera' des Balaton als auch die unberÃ¼hrte Wildnis des Zselic-HÃ¼gellandes bietet. Die Region ist zudem bekannt fÃ¼r ihre reiche Jagdtradition, ihre erstklassigen Weine aus der Region SÃ¼d-Balaton und ihre herzliche lÃ¤ndliche Gastfreundschaft.",
      "hu": "Somogy vÃ¡rmegye MagyarorszÃ¡g dÃ©lnyugati rÃ©szÃ©n fekszik, a Balaton dÃ©li partjÃ¡tÃ³l egÃ©szen a horvÃ¡t hatÃ¡rig, a DrÃ¡vÃ¡ig nyÃºlik. A rÃ©giÃ³t sÅ±rÅ± erdÅ‘k, lankÃ¡s dombvidÃ©kek Ã©s az orszÃ¡g legnÃ©pszerÅ±bb Ã¼dÃ¼lÅ‘helyei jellemzik. SzÃ©khelye KaposvÃ¡r, a hangulatos, virÃ¡gos vÃ¡ros, amely jelentÅ‘s kulturÃ¡lis hagyomÃ¡nyokkal bÃ¼szkÃ©lkedhet. Somogy igazi paradicsom a termÃ©szetjÃ¡rÃ³k Ã©s a vÃ­zi sportok kedvelÅ‘i szÃ¡mÃ¡ra, hiszen egyszerre kÃ­nÃ¡lja a Balaton pezsgÅ‘ 'riviÃ©rÃ¡jÃ¡t' Ã©s a Zselic Ã©rintetlen vadonjÃ¡t. A vÃ¡rmegye emellett hÃ­res vadÃ¡szati hagyomÃ¡nyairÃ³l, a DÃ©l-Balatoni borvidÃ©k kivÃ¡lÃ³ borairÃ³l Ã©s a szÃ­vÃ©lyes somogyi vendÃ©glÃ¡tÃ¡srÃ³l.",
      "ro": "JudeÈ›ul Somogy este situat Ã®n sud-vestul Ungariei È™i se Ã®ntinde de la malul sudic al Lacului Balaton pÃ¢nÄƒ la graniÈ›a cu CroaÈ›ia, pe rÃ¢ul Drava. Regiunea este caracterizatÄƒ de pÄƒduri dese, dealuri blÃ¢nde È™i cele mai populare staÈ›iuni de vacanÈ›Äƒ din È›arÄƒ. Centrul administrativ este KaposvÃ¡r, un oraÈ™ cu o atmosferÄƒ fermecÄƒtoare È™i o tradiÈ›ie culturalÄƒ semnificativÄƒ. Somogy este un paradis atÃ¢t pentru iubitorii de naturÄƒ, cÃ¢t È™i pentru pasionaÈ›ii de sporturi nautice, oferind atÃ¢t 'Riviera' vibrantÄƒ a Balatonului, cÃ¢t È™i sÄƒlbÄƒticia neatinsÄƒ a dealurilor Zselic. Regiunea este, de asemenea, cunoscutÄƒ pentru tradiÈ›ia sa bogatÄƒ Ã®n vÃ¢nÄƒtoare, vinurile sale de primÄƒ clasÄƒ din regiunea Balatonul de Sud È™i ospitalitatea sa ruralÄƒ caldÄƒ.",
      "en": "Somogy County is located in southwestern Hungary, stretching from the southern shore of Lake Balaton to the Croatian border at the river Drava. The region is characterized by dense forests, rolling hills, and the country's most popular holiday resorts. Its administrative center is KaposvÃ¡r, a city with a charming atmosphere and a significant cultural tradition. Somogy is a paradise for nature lovers and water sports enthusiasts alike, offering both the vibrant 'Riviera' of Lake Balaton and the untouched wilderness of the Zselic hills. The county is also famous for its rich hunting traditions, world-class wines from the South Balaton wine region, and warm rural hospitality."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Somogy vÃ¡rmegye MagyarorszÃ¡g dÃ©lnyugati rÃ©szÃ©n fekszik, Ã©s legfontosabb termÃ©szeti vonzereje a Balaton dÃ©li partja, amely sekÃ©ly vizÃ©vel a csalÃ¡dok kedvelt Ã¼dÃ¼lÅ‘helye. A vÃ¡rmegye tÃ¡ja azonban jÃ³val tÃ¶bbnÃ©l: Ã©szakon a somogyi dombsÃ¡g lankÃ¡i, dÃ©len pedig a DrÃ¡va folyÃ³ menti Ã¡rtÃ©ri erdÅ‘k alkotjÃ¡k a vÃ¡ltozatos kÃ¶rnyezetet. A vÃ¡rmegye szÃ©khelye KaposvÃ¡r, a virÃ¡gok vÃ¡rosa, amely szecessziÃ³s belvÃ¡rosÃ¡val Ã©s gazdag szÃ­nhÃ¡zi Ã©letÃ©vel tÅ±nik ki. Somogy hÃ­res vadÃ¡llomÃ¡nyÃ¡rÃ³l Ã©s sÅ±rÅ± erdÅ‘irÅ‘l is, kÃ¼lÃ¶nÃ¶sen a belsÅ‘-somogyi terÃ¼leteken. A rÃ©giÃ³ gasztronÃ³miÃ¡jÃ¡ban a balatoni halÃ©telek Ã©s a vadhÃºsbÃ³l kÃ©szÃ¼lt specialitÃ¡sok dominÃ¡lnak, kulturÃ¡lis emlÃ©kei kÃ¶zÃ¶tt pedig a somogyvÃ¡ri apÃ¡tsÃ¡g romjai emelkednek ki.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist KaposvÃ¡r, bekannt als die 'Stadt der Blumen'.",
        "Somogy hat die lÃ¤ngste KÃ¼stenlinie am Plattensee (Balaton).",
        "SiÃ³fok ist die 'Sommerhauptstadt' Ungarns und ein Zentrum des Tourismus.",
        "Der Sternenpark Zselic ist einer der besten Orte in Europa zur Sternenbeobachtung.",
        "Die Abtei von Tihany (gegenÃ¼berliegend) und die FÃ¤hre von SzÃ¡ntÃ³d sind wichtige Knotenpunkte.",
        "Die Region ist berÃ¼hmt fÃ¼r ihre WildbestÃ¤nde und erstklassigen Jagdgebiete.",
        "BalatonboglÃ¡r ist das Zentrum einer bedeutenden Weinregion am SÃ¼dufer.",
        "In SomogyvÃ¡r befinden sich die Ruinen einer bedeutenden mittelalterlichen Benediktinerabtei.",
        "Die Drau bildet eine natÃ¼rliche und unberÃ¼hrte Grenze im SÃ¼den der Region.",
        "Das Komitat beherbergt zahlreiche ThermalbÃ¤der, wie zum Beispiel in Igal."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye KaposvÃ¡r, amelyet gyakran a 'virÃ¡gok vÃ¡rosakÃ©nt' emlegetnek.",
        "Somogy rendelkezik a leghosszabb partszakasszal a Balaton mentÃ©n.",
        "SiÃ³fok az orszÃ¡g 'nyÃ¡ri fÅ‘vÃ¡rosa' Ã©s a balatoni turizmus kÃ¶zpontja.",
        "A Zselici Csillagpark EurÃ³pa egyik legkevesebb fÃ©nyszennyezÃ©ssel Ã©rintett terÃ¼lete.",
        "SzÃ¡ntÃ³d Ã©s Tihany kÃ¶zÃ¶tt Ã¼zemel a Balaton egyetlen kompÃ¡tkelÅ‘je.",
        "A vÃ¡rmegye vilÃ¡ghÃ­rÅ± vadÃ¡llomÃ¡nyÃ¡rÃ³l Ã©s kivÃ¡lÃ³ vadÃ¡szterÃ¼leteirÅ‘l ismert.",
        "BalatonboglÃ¡r a DÃ©l-Balatoni borvidÃ©k kÃ¶zpontja Ã©s a boglÃ¡ri szÃ¼ret otthona.",
        "SomogyvÃ¡ron talÃ¡lhatÃ³k a Szent LÃ¡szlÃ³ kirÃ¡ly Ã¡ltal alapÃ­tott bencÃ©s apÃ¡tsÃ¡g romjai.",
        "A DrÃ¡va folyÃ³ mentÃ©n Ã©rintetlen termÃ©szeti kÃ¶rnyezet Ã©s vÃ­zi vilÃ¡g vÃ¡rja a lÃ¡togatÃ³kat.",
        "A vÃ¡rmegye szÃ¡mos kivÃ¡lÃ³ gyÃ³gyfÃ¼rdÅ‘vel rendelkezik, pÃ©ldÃ¡ul Igallban vagy CsokonyavisontÃ¡n."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este KaposvÃ¡r, cunoscut sub numele de 'oraÈ™ul florilor'.",
        "Somogy are cea mai lungÄƒ linie de coastÄƒ la Lacul Balaton.",
        "SiÃ³fok este 'capitala de varÄƒ' a Ungariei È™i un centru al turismului.",
        "Parcul de stele Zselic este unul dintre cele mai bune locuri din Europa pentru observarea stelelor.",
        "ÃŽntre SzÃ¡ntÃ³d È™i Tihany funcÈ›ioneazÄƒ singurul feribot de pe Lacul Balaton.",
        "Regiunea este faimoasÄƒ pentru populaÈ›iile sale de vÃ¢nat È™i zonele de vÃ¢nÄƒtoare de primÄƒ clasÄƒ.",
        "BalatonboglÃ¡r este centrul unei regiuni viticole importante de pe malul sudic.",
        "La SomogyvÃ¡r se aflÄƒ ruinele unei importante abaÈ›ii benedictine medievale.",
        "RÃ¢ul Drava formeazÄƒ o graniÈ›Äƒ naturalÄƒ È™i virginÄƒ Ã®n sudul regiunii.",
        "JudeÈ›ul gÄƒzduieÈ™te numeroase bÄƒi termale, cum ar fi cea din Igal."
      ],
      "en": [
        "The county seat is KaposvÃ¡r, known as the 'City of Flowers'.",
        "Somogy has the longest coastline along Lake Balaton.",
        "SiÃ³fok is the 'summer capital' of Hungary and a hub for tourism.",
        "The Zselic Starry Sky Park is one of the best places in Europe for stargazing.",
        "The only ferry crossing on Lake Balaton operates between SzÃ¡ntÃ³d and Tihany.",
        "The region is world-famous for its wildlife and premium hunting grounds.",
        "BalatonboglÃ¡r is the center of a significant wine region on the southern shore.",
        "SomogyvÃ¡r houses the ruins of a major medieval Benedictine abbey founded by King Saint Ladislaus.",
        "The river Drava forms a natural and untouched border in the south of the region.",
        "The county is home to numerous thermal baths, such as the one in Igal."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Somogy vÃ¡rmegyÃ©hez tartozik a Balaton dÃ©li partjÃ¡nak legnagyobb rÃ©sze, SiÃ³fokkal, a 'nyÃ¡ri fÅ‘vÃ¡rossal'.",
        "Itt talÃ¡lhatÃ³ KaposvÃ¡r, amely hÃ­res Rippl-RÃ³nai JÃ³zsef festÅ‘mÅ±vÃ©sz hagyatÃ©kÃ¡rÃ³l Ã©s mÃºzeumÃ¡rÃ³l.",
        "A vÃ¡rmegye dÃ©li hatÃ¡rÃ¡t a DrÃ¡va folyÃ³ alkotja, amely EurÃ³pa egyik legtisztÃ¡bb vizÅ± Ã©s legvadregÃ©nyesebb folyÃ³ja.",
        "Igal Ã©s Csokonyavisonta hÃ­res gyÃ³gyfÃ¼rdÅ‘kkel rendelkezik, amelyek kÃ©nes vizÃ¼krÅ‘l ismertek.",
        "KaszÃ³ sÅ±rÅ± erdei az orszÃ¡g egyik legfontosabb vadÃ¡szterÃ¼letÃ©t Ã©s egy kÃ¼lÃ¶nleges lombkoronasÃ©tÃ¡nyt rejtenek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szabolcs-szatmar-bereg",
    type: "region",
    parent: "HU-SZ",
    coords: [21.7167, 47.95],
    name: {"de": "Szabolcs-SzatmÃ¡r-Bereg", "hu": "Szabolcs-SzatmÃ¡r-Bereg", "ro": "Szabolcs-SzatmÃ¡r-Bereg", "en": "Szabolcs-SzatmÃ¡r-Bereg"},
    image: "/geo-images/hungary/szabolcs-szatmar-bereg.webp",
    description: {
      "de": "Das Komitat Szabolcs-SzatmÃ¡r-Bereg liegt im Ã¤uÃŸersten Nordosten Ungarns und ist die einzige Region des Landes, die an drei verschiedene Staaten grenzt: die Slowakei, die Ukraine und RumÃ¤nien. Die Region ist bekannt fÃ¼r ihre unberÃ¼hrte Natur entlang der Oberen TheiÃŸ, ihre ausgedehnten ObstgÃ¤rten und ihre einzigartigen mittelalterlichen Kirchen mit HolzglockentÃ¼rmen. Das administrative Zentrum ist NyÃ­regyhÃ¡za, eine dynamische Stadt, die fÃ¼r ihren erstklassigen Zoo und das beliebte Heilbad SÃ³stÃ³fÃ¼rdÅ‘ berÃ¼hmt ist. Szabolcs-SzatmÃ¡r-Bereg bewahrt eine tiefe volkstÃ¼mliche Tradition und bietet Besuchern eine authentische AtmosphÃ¤re, in der Geschichte, Natur und lÃ¤ndliche Gastfreundschaft auf besondere Weise verschmelzen.",
      "hu": "Szabolcs-SzatmÃ¡r-Bereg vÃ¡rmegye MagyarorszÃ¡g legÃ©szakkeletibb csÃ¼cskÃ©ben fekszik, Ã©s az orszÃ¡g egyetlen olyan rÃ©giÃ³ja, amely hÃ¡rom Ã¡llammal â€“ SzlovÃ¡kiÃ¡val, UkrajnÃ¡val Ã©s RomÃ¡niÃ¡val â€“ is hatÃ¡ros. A vÃ¡rmegye hÃ­res a FelsÅ‘-Tisza vidÃ©kÃ©nek Ã©rintetlen termÃ©szetÃ©rÅ‘l, hatalmas gyÃ¼mÃ¶lcsÃ¶skertjeirÅ‘l Ã©s egyedÃ¼lÃ¡llÃ³ kÃ¶zÃ©pkori templomairÃ³l, amelyek fa haranglÃ¡baikkal a vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezik. SzÃ©khelye NyÃ­regyhÃ¡za, a dinamikusan fejlÅ‘dÅ‘ vÃ¡ros, amely vilÃ¡gszÃ­nvonalÃº Ã¡llatparkjÃ¡rÃ³l Ã©s a nÃ©pszerÅ± SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘rÅ‘l ismert. Szabolcs-SzatmÃ¡r-Bereg mÃ©lyen Å‘rzi nÃ©pi hagyomÃ¡nyait, Ã©s olyan hiteles lÃ©gkÃ¶rt kÃ­nÃ¡l, ahol a tÃ¶rtÃ©nelem, a termÃ©szet Ã©s a vidÃ©ki vendÃ©gszeretet kÃ¼lÃ¶nleges mÃ³don fonÃ³dik Ã¶ssze.",
      "ro": "JudeÈ›ul Szabolcs-SzatmÃ¡r-Bereg este situat Ã®n extremitatea nord-esticÄƒ a Ungariei È™i este singura regiune a È›Äƒrii care se Ã®nvecineazÄƒ cu trei state diferite: Slovacia, Ucraina È™i RomÃ¢nia. Regiunea este cunoscutÄƒ pentru natura sa virginÄƒ de-a lungul Tisei Superioare, livezile sale Ã®ntinse de pomi fructiferi È™i bisericile sale medievale unice, cu clopotniÈ›e din lemn. Centrul administrativ este NyÃ­regyhÃ¡za, un oraÈ™ dinamic, renumit pentru grÄƒdina sa zoologicÄƒ de clasÄƒ mondialÄƒ È™i populara staÈ›iune balnearÄƒ SÃ³stÃ³fÃ¼rdÅ‘. Szabolcs-SzatmÃ¡r-Bereg pÄƒstreazÄƒ o tradiÈ›ie popularÄƒ profundÄƒ È™i oferÄƒ vizitatorilor o atmosferÄƒ autenticÄƒ, Ã®n care istoria, natura È™i ospitalitatea ruralÄƒ se Ã®mbinÄƒ Ã®ntr-un mod special.",
      "en": "Szabolcs-SzatmÃ¡r-Bereg County is located in the far northeast of Hungary and is the only region in the country that borders three different states: Slovakia, Ukraine, and Romania. The region is famous for its untouched nature along the Upper Tisza, its extensive fruit orchards, and its unique medieval churches with wooden bell towers. Its administrative center is NyÃ­regyhÃ¡za, a dynamic city renowned for its world-class zoo and the popular SÃ³stÃ³fÃ¼rdÅ‘ spa. Szabolcs-SzatmÃ¡r-Bereg preserves deep folk traditions and offers visitors an authentic atmosphere where history, nature, and rural hospitality merge in a unique way."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Szabolcs-SzatmÃ¡r-Bereg vÃ¡rmegye MagyarorszÃ¡g Ã©szakkeleti csÃ¼cskÃ©ben, az ukrÃ¡n, a romÃ¡n Ã©s a szlovÃ¡k hatÃ¡r talÃ¡lkozÃ¡sÃ¡nÃ¡l fekszik. A tÃ¡jat a Tisza, a Szamos Ã©s a TÃºr folyÃ³k kanyarulatai, valamint a NyÃ­rsÃ©g homokbuckÃ¡i hatÃ¡rozzÃ¡k meg. Ez a rÃ©giÃ³ MagyarorszÃ¡g egyik leghitelesebb Ã©s legtÃ¶bb nÃ©pi emlÃ©ket Å‘rzÅ‘ vidÃ©ke, hÃ­res kÃ¶zÃ©pkori 'mosolygÃ³ szentekkel' dÃ­szÃ­tett templomairÃ³l Ã©s kÃ¼lÃ¶nleges haranglÃ¡bairÃ³l. A vÃ¡rmegye szÃ©khelye NyÃ­regyhÃ¡za, amely modern Ã¡llatparkjÃ¡val Ã©s SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘vel vonzza a lÃ¡togatÃ³kat. Szabolcs-SzatmÃ¡r-Bereg az orszÃ¡g 'almÃ¡skertje', de hÃ­res szatmÃ¡ri szilvapÃ¡linkÃ¡jÃ¡rÃ³l Ã©s a beregi hÃ­mzÃ©srÅ‘l is, amelyek a tÃ©rsÃ©g bÃ¼szkesÃ©gei.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist NyÃ­regyhÃ¡za, Heimat eines der besten Zoos in Europa.",
        "Die Region ist der grÃ¶ÃŸte Apfelproduzent Ungarns (Szabolcsi alma).",
        "Die mittelalterlichen Kirchen der Region bilden die 'StraÃŸe der Kirchen'.",
        "SÃ³stÃ³fÃ¼rdÅ‘ ist ein bedeutendes Zentrum fÃ¼r Gesundheitstourismus und Wellness.",
        "Die Region ist berÃ¼hmt fÃ¼r ihre ObstbrÃ¤nde, insbesondere den Pflaumenschnaps aus SzatmÃ¡r.",
        "MÃ¡riapÃ³cs ist einer der wichtigsten Wallfahrtsorte Ungarns.",
        "Die Obere TheiÃŸ bietet hervorragende MÃ¶glichkeiten fÃ¼r Kanutouren und Ã–kotourismus.",
        "VÃ¡sÃ¡rosnamÃ©ny ist als die 'Stadt der Freiheit' an der TheiÃŸ bekannt.",
        "Die Region hat eine reiche jÃ¼dische Geschichte mit bedeutenden GedenkstÃ¤tten.",
        "Das Dorf TÃ¡kos beherbergt die berÃ¼hmte 'barfÃ¼ÃŸige Kathedrale' mit bemalter Holzdecke."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye NyÃ­regyhÃ¡za, ahol EurÃ³pa egyik legjobb Ã¡llatparkja talÃ¡lhatÃ³.",
        "A rÃ©giÃ³ MagyarorszÃ¡g legnagyobb almatermelÅ‘ vidÃ©ke (szabolcsi alma).",
        "A vÃ¡rmegye kÃ¶zÃ©pkori templomai alkotjÃ¡k a hÃ­res 'KÃ¶zÃ©pkori Templomok ÃštjÃ¡t'.",
        "SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘ az egÃ©szsÃ©gturizmus Ã©s a kikapcsolÃ³dÃ¡s egyik legfontosabb kÃ¶zpontja.",
        "A vÃ¡rmegye hÃ­res eredetvÃ©dett pÃ¡linkÃ¡irÃ³l, mint a szatmÃ¡ri szilvapÃ¡linka.",
        "MÃ¡riapÃ³cs az orszÃ¡g egyik legjelentÅ‘sebb nemzeti kegyhelye Ã©s zarÃ¡ndokhelye.",
        "A FelsÅ‘-Tisza vidÃ©ke kivÃ¡lÃ³ lehetÅ‘sÃ©geket nyÃºjt a vÃ­zi tÃºrÃ¡zÃ¡sra Ã©s az Ã¶koturizmusra.",
        "VÃ¡sÃ¡rosnamÃ©ny a FelsÅ‘-Tisza vidÃ©kÃ©nek egyik legfontosabb turisztikai kapuja.",
        "A vÃ¡rmegye gazdag zsidÃ³ vallÃ¡si Ã¶rÃ¶ksÃ©ggel Ã©s emlÃ©khelyekkel rendelkezik.",
        "TÃ¡koson talÃ¡lhatÃ³ a hÃ­res 'mezÃ­tlÃ¡bas katedrÃ¡lis', amely festett kazettÃ¡s mennyezetÃ©rÅ‘l ismert."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este NyÃ­regyhÃ¡za, gazda uneia dintre cele mai bune grÄƒdini zoologice din Europa.",
        "Regiunea este cel mai mare producÄƒtor de mere din Ungaria (merele de Szabolcs).",
        "Bisericile medievale din regiune formeazÄƒ 'Drumul Bisericilor Medievale'.",
        "SÃ³stÃ³fÃ¼rdÅ‘ este un centru important pentru turismul de sÄƒnÄƒtate È™i wellness.",
        "Regiunea este faimoasÄƒ pentru pÄƒlincile sale, Ã®n special pÄƒlinca de prune de SzatmÃ¡r.",
        "MÃ¡riapÃ³cs este unul dintre cele mai importante locuri de pelerinaj din Ungaria.",
        "Tisa SuperioarÄƒ oferÄƒ oportunitÄƒÈ›i excelente pentru excursii cu canoa È™i ecoturism.",
        "VÃ¡sÃ¡rosnamÃ©ny este cunoscut drept 'oraÈ™ul libertÄƒÈ›ii' de pe malul Tisei.",
        "Regiunea are o istorie evreiascÄƒ bogatÄƒ, cu situri memoriale importante.",
        "Satul TÃ¡kos gÄƒzduieÈ™te faimoasa 'catedralÄƒ desculÈ›Äƒ' cu tavan din lemn pictat."
      ],
      "en": [
        "The county seat is NyÃ­regyhÃ¡za, home to one of the best zoos in Europe.",
        "The region is Hungary's largest apple producer (Szabolcs apples).",
        "The region's medieval churches form the 'Route of Medieval Churches'.",
        "SÃ³stÃ³fÃ¼rdÅ‘ is a major center for health tourism and wellness.",
        "The county is famous for its fruit brandies, especially the SzatmÃ¡r plum pÃ¡linka.",
        "MÃ¡riapÃ³cs is one of Hungary's most important national shrines and pilgrimage sites.",
        "The Upper Tisza offers excellent opportunities for canoeing and ecotourism.",
        "VÃ¡sÃ¡rosnamÃ©ny is known as a major tourist gateway to the Upper Tisza region.",
        "The region has a rich Jewish heritage with significant memorial sites.",
        "The village of TÃ¡kos is home to the famous 'barefoot cathedral' with a painted wooden ceiling."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "NyÃ­regyhÃ¡za Ã¡llatparkja (SÃ³stÃ³ Zoo) tÃ¶bbszÃ¶r is elnyerte EurÃ³pa legjobb Ã¡llatkertje cÃ­met.",
        "Itt talÃ¡lhatÃ³ a TÃºristvÃ¡ndi vÃ­zimalom, amely az orszÃ¡g egyik legszebb ipartÃ¶rtÃ©neti mÅ±emlÃ©ke.",
        "A vÃ¡rmegye hÃ­res a szatmÃ¡ri szilvÃ¡rÃ³l Ã©s a belÅ‘le kÃ©szÃ¼lt lekvÃ¡rrÃ³l, valamint a pÃ¡linkÃ¡rÃ³l.",
        "TÃ¡kos Ã©s Csaroda reformÃ¡tus templomai a kÃ¶zÃ©pkori magyar Ã©pÃ­tÃ©szet Ã©s falfestÃ©szet remekmÅ±vei.",
        "MÃ¡riapÃ³cs nemzeti kegyhely, a kÃ¶nnyezÅ‘ SzÅ±zanya-ikonjÃ¡rÃ³l hÃ­res zarÃ¡ndokhely."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tolna",
    type: "region",
    parent: "HU-TO",
    coords: [18.7, 46.35],
    name: {"de": "Tolnau", "hu": "Tolna", "ro": "Tolna", "en": "Tolna"},
    description: {
      "de": "Das Komitat Tolna liegt im sÃ¼dlichen Zentrum Ungarns, am rechten Ufer der Donau, und ist eine Region von stiller SchÃ¶nheit und reicher Tradition. Die Landschaft ist geprÃ¤gt von den sanften HÃ¼geln des Tolnaer HÃ¼gellandes und den fruchtbaren Ebenen entlang der Donau. Das administrative Zentrum ist SzekszÃ¡rd, eine Stadt, die weltweit fÃ¼r ihre erstklassigen Rotweine und ihre tiefe literarische Tradition bekannt ist. Tolna beherbergt zudem den Nationalpark Gemenc, das grÃ¶ÃŸte zusammenhÃ¤ngende Auwaldgebiet Mitteleuropas, das ein Paradies fÃ¼r Naturfotografen und JÃ¤ger darstellt. Die Region bietet eine harmonische Mischung aus exzellenter Weinkultur, unberÃ¼hrter Flusslandschaft und einem reichen Erbe der Donauschwaben.",
      "hu": "Tolna vÃ¡rmegye MagyarorszÃ¡g dÃ©li-kÃ¶zÃ©psÅ‘ rÃ©szÃ©n, a Duna jobb partjÃ¡n fekszik, Ã©s a csendes szÃ©psÃ©g, valamint a gazdag hagyomÃ¡nyok vidÃ©ke. A tÃ¡jat a Tolnai-hegyhÃ¡t lankÃ¡s dombjai Ã©s a Duna menti termÃ©keny sÃ­ksÃ¡gok hatÃ¡rozzÃ¡k meg. SzÃ©khelye SzekszÃ¡rd, amely vilÃ¡gszerte hÃ­res kivÃ¡lÃ³ vÃ¶rÃ¶sborairÃ³l, kÃ¼lÃ¶nÃ¶sen a szekszÃ¡rdi bikavÃ©rrÅ‘l, Ã©s mÃ©ly irodalmi gyÃ¶kereirÅ‘l. Tolna vÃ¡rmegye ad otthont a Gemenci-erdÅ‘nek, amely KÃ¶zÃ©p-EurÃ³pa legnagyobb Ã¶sszefÃ¼ggÅ‘ Ã¡rtÃ©ri erdeje, Ã©s igazi paradicsom a termÃ©szetjÃ¡rÃ³k Ã©s a vadÃ¡szok szÃ¡mÃ¡ra. A rÃ©giÃ³ a kivÃ¡lÃ³ borkultÃºra, az Ã©rintetlen folyÃ³parti tÃ¡j Ã©s a dunai svÃ¡bok gazdag Ã¶rÃ¶ksÃ©gÃ©nek harmonikus Ã¶tvÃ¶zetÃ©t kÃ­nÃ¡lja.",
      "ro": "JudeÈ›ul Tolna este situat Ã®n centrul sudic al Ungariei, pe malul drept al DunÄƒrii, È™i este o regiune de o frumuseÈ›e liniÈ™titÄƒ È™i tradiÈ›ii bogate. Peisajul este caracterizat de dealurile blÃ¢nde ale regiunii deluroase Tolna È™i de cÃ¢mpiile fertile de-a lungul DunÄƒrii. Centrul administrativ este SzekszÃ¡rd, un oraÈ™ renumit Ã®n Ã®ntreaga lume pentru vinurile sale roÈ™ii de primÄƒ clasÄƒ È™i tradiÈ›ia sa literarÄƒ profundÄƒ. Tolna gÄƒzduieÈ™te, de asemenea, Parcul NaÈ›ional Gemenc, cea mai mare zonÄƒ de pÄƒdure inundabilÄƒ continuÄƒ din Europa CentralÄƒ, care este un paradis pentru fotografii de naturÄƒ È™i vÃ¢nÄƒtori. Regiunea oferÄƒ un amestec armonios de culturÄƒ viticolÄƒ excelentÄƒ, peisaj fluvial virgin È™i o moÈ™tenire bogatÄƒ a È™vabilor dunÄƒreni.",
      "en": "Tolna County is located in the south-central part of Hungary, on the right bank of the Danube, and is a region of quiet beauty and rich traditions. The landscape is characterized by the rolling hills of the Tolna Uplands and the fertile plains along the Danube. Its administrative center is SzekszÃ¡rd, a city world-famous for its premium red wines and deep literary roots. Tolna is also home to the Gemenc Forest, Central Europe's largest continuous floodplain forest, which is a paradise for nature photographers and hunters. The county offers a luxurious blend of excellent wine culture, untouched river landscapes, and the rich heritage of the Danube Swabians."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Tolna vÃ¡rmegye a DunÃ¡ntÃºl keleti rÃ©szÃ©n, a Duna mentÃ©n fekszik, Ã©s szelÃ­d dombsÃ¡gairÃ³l, valamint az orszÃ¡g egyik leghÃ­resebb borvidÃ©kÃ©rÅ‘l, a szekszÃ¡rdirÃ³l ismert. A tÃ¡jat Ã©szakon a MezÅ‘fÃ¶ld, nyugaton a Tolnai-hegyhÃ¡t, dÃ©len pedig a Mecsek nyÃºlvÃ¡nyai hatÃ¡rozzÃ¡k meg. A vÃ¡rmegye szÃ©khelye SzekszÃ¡rd, amely Liszt Ferenc kedvenc vÃ¡rosa volt, Ã©s ma a vÃ¶rÃ¶sbor, kÃ¼lÃ¶nÃ¶sen a SzekszÃ¡rdi BikavÃ©r hazÃ¡ja. Tolna bÃ¼szkÃ©lkedhet a Gemenci erdÅ‘vel, amely EurÃ³pa legnagyobb Ã¶sszefÃ¼ggÅ‘ Ã¡rtÃ©ri erdeje, Ã©s gazdag vadÃ¡llomÃ¡nyÃ¡rÃ³l, valamint kisvasÃºtjÃ¡rÃ³l hÃ­res. A rÃ©giÃ³ kulturÃ¡lis kincsei kÃ¶zÃ¶tt a paksi atomerÅ‘mÅ± technikai Ã©rdekessÃ©gei Ã©s a nÃ©pmÅ±vÃ©szeti hagyomÃ¡nyok, mint a sÃ¡rkÃ¶zi hÃ­mzÃ©s, egyarÃ¡nt megtalÃ¡lhatÃ³ak.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist SzekszÃ¡rd, eine der kleinsten KomitatshauptstÃ¤dte Ungarns.",
        "Die Weinregion SzekszÃ¡rd ist berÃ¼hmt fÃ¼r den 'SzekszÃ¡rdi BikavÃ©r' (Stierblut).",
        "Der Gemenc-Wald ist Teil des Nationalparks Donau-Drau und beherbergt eine einzigartige Fauna.",
        "Paks ist der Standort des einzigen Kernkraftwerks Ungarns.",
        "Die Region hat eine starke donauschwÃ¤bische Tradition, insbesondere in DÃ¶rfern wie GyÃ¶nk.",
        "SzekszÃ¡rd ist der Geburtsort des berÃ¼hmten Dichters MihÃ¡ly Babits.",
        "Die Schmalspurbahn von Gemenc ist eine der beliebtesten Wald-Eisenbahnen des Landes.",
        "Tolna ist bekannt fÃ¼r seine traditionelle Blaudruck-Handwerkskunst.",
        "Die Burg von Simontornya ist ein bedeutendes Renaissance-Denkmal der Region.",
        "Die Donau bietet in dieser Region hervorragende Bedingungen fÃ¼r die Fischerei."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye SzekszÃ¡rd, az orszÃ¡g egyik legkisebb vÃ¡rmegyeszÃ©khelye.",
        "A szekszÃ¡rdi borvidÃ©k a vilÃ¡ghÃ­rÅ± szekszÃ¡rdi bikavÃ©r Ã©s a kadarka hazÃ¡ja.",
        "A Gemenci-erdÅ‘ a Duna-DrÃ¡va Nemzeti Park rÃ©sze, Ã©s egyedÃ¼lÃ¡llÃ³ gÃ­mszarvas-Ã¡llomÃ¡nnyal rendelkezik.",
        "Pakson talÃ¡lhatÃ³ MagyarorszÃ¡g egyetlen atomerÅ‘mÅ±ve, amely az orszÃ¡g Ã¡ramtermelÃ©sÃ©nek felÃ©t adja.",
        "A vÃ¡rmegyÃ©ben jelentÅ‘s a dunai svÃ¡bok kulturÃ¡lis Ã¶rÃ¶ksÃ©ge Ã©s hagyomÃ¡nyÅ‘rzÃ©se.",
        "SzekszÃ¡rd a hÃ­res kÃ¶ltÅ‘, Babits MihÃ¡ly szÃ¼lÅ‘vÃ¡rosa.",
        "A Gemenci Ãllami Erdei VasÃºt az orszÃ¡g egyik legnÃ©pszerÅ±bb erdei vasÃºtvonala.",
        "Tolna vÃ¡rosa hÃ­res a hagyomÃ¡nyos kÃ©kfestÅ‘ mÅ±helyÃ©rÅ‘l Ã©s nÃ©pmÅ±vÃ©szetÃ©rÅ‘l.",
        "A simontornyai vÃ¡r a rÃ©giÃ³ egyik legfontosabb reneszÃ¡nsz mÅ±emlÃ©ke.",
        "A Duna menti holtÃ¡gak Ã©s Ã¡rterek kivÃ¡lÃ³ horgÃ¡szparadicsomok."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este SzekszÃ¡rd, una dintre cele mai mici reÈ™edinÈ›e de judeÈ› din Ungaria.",
        "Regiunea viticolÄƒ SzekszÃ¡rd este faimoasÄƒ pentru vinul 'SzekszÃ¡rdi BikavÃ©r' (SÃ¢nge de Taur).",
        "PÄƒdurea Gemenc face parte din Parcul NaÈ›ional DunÄƒre-Drava È™i adÄƒposteÈ™te o faunÄƒ unicÄƒ.",
        "La Paks se aflÄƒ singura centralÄƒ nuclearÄƒ din Ungaria.",
        "Regiunea are o puternicÄƒ tradiÈ›ie a È™vabilor dunÄƒreni, Ã®n special Ã®n sate precum GyÃ¶nk.",
        "SzekszÃ¡rd este locul de naÈ™tere al faimosului poet MihÃ¡ly Babits.",
        "Calea feratÄƒ cu ecartament Ã®ngust din Gemenc este una dintre cele mai populare din È›arÄƒ.",
        "OraÈ™ul Tolna este cunoscut pentru meÈ™teÈ™ugul tradiÈ›ional al vopsitului Ã®n albastru.",
        "Cetatea din Simontornya este un monument renascentist important al regiunii.",
        "DunÄƒrea oferÄƒ Ã®n aceastÄƒ regiune condiÈ›ii excelente pentru pescuit."
      ],
      "en": [
        "The county seat is SzekszÃ¡rd, one of the smallest county seats in Hungary.",
        "The SzekszÃ¡rd wine region is famous for 'SzekszÃ¡rdi BikavÃ©r' (Bull's Blood) and Kadarka.",
        "The Gemenc Forest is part of the Danube-Drava National Park and has a unique red deer population.",
        "Paks is the site of Hungary's only nuclear power plant.",
        "The region has a strong Danube Swabian tradition, especially in villages like GyÃ¶nk.",
        "SzekszÃ¡rd is the birthplace of the famous Hungarian poet MihÃ¡ly Babits.",
        "The Gemenc Forest Railway is one of the most popular forest railways in the country.",
        "The town of Tolna is famous for its traditional blue-dyeing (kÃ©kfestÅ‘) workshop.",
        "Simontornya Castle is a significant Renaissance monument in the region.",
        "The Danube floodplains and backwaters offer excellent conditions for fishing."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "SzekszÃ¡rd a legkisebb lakossÃ¡gszÃ¡mÃº vÃ¡rmegyeszÃ©khely MagyarorszÃ¡gon, hÃ­res bortermelÃ©sÃ©rÅ‘l.",
        "A Gemenci erdÅ‘ a Duna-DrÃ¡va Nemzeti Park rÃ©sze, a vilÃ¡g legnagyobb trÃ³feÃ¡t adÃ³ gÃ­mszarvasainak otthona.",
        "Itt talÃ¡lhatÃ³ Paks vÃ¡rosa, ahol az orszÃ¡g egyetlen atomerÅ‘mÅ±ve mÅ±kÃ¶dik.",
        "A SÃ¡rkÃ¶z nÃ©prajzi tÃ¡jegysÃ©ge hÃ­res szÃ­nes nÃ©pviseletÃ©rÅ‘l, hÃ­mzÃ©sÃ©rÅ‘l Ã©s szÃ¶vÃ©sÃ©rÅ‘l.",
        "Decs kÃ¶zsÃ©ge a SÃ¡rkÃ¶z kÃ¶zpontja, ahol a nÃ©pi hagyomÃ¡nyok a mai napig elevenen Ã©lnek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "vas",
    type: "region",
    parent: "HU-VA",
    coords: [16.6217, 47.2306],
    name: {"de": "Eisenburg", "hu": "Vas", "ro": "Vas", "en": "Vas"},
    image: "/geo-images/hungary/vas.webp",
    description: {
      "de": "Das Komitat Vas liegt im Ã¤uÃŸersten Westen Ungarns an der Grenze zu Ã–sterreich und Slowenien und ist eine Region von auÃŸergewÃ¶hnlicher natÃ¼rlicher SchÃ¶nheit und historischer Bedeutung. Die Landschaft ist geprÃ¤gt von den AuslÃ¤ufern der Alpen, dichten WÃ¤ldern und zahlreichen Thermalquellen. Das administrative Zentrum ist Szombathely, eine der Ã¤ltesten StÃ¤dte Ungarns, die auf eine bedeutende rÃ¶mische Vergangenheit als Savaria zurÃ¼ckblickt. Vas ist weltberÃ¼hmt fÃ¼r seine erstklassigen HeilbÃ¤der wie BÃ¼kfÃ¼rdÅ‘ und SÃ¡rvÃ¡r sowie fÃ¼r seine malerischen historischen KleinstÃ¤dte wie KÅ‘szeg. Die Region bietet eine perfekte Kombination aus alpiner Frische, rÃ¶mischem Erbe und moderner Wellness-Kultur, was sie zu einem idealen Ziel fÃ¼r Erholungssuchende und Geschichtsinteressierte macht.",
      "hu": "Vas vÃ¡rmegye MagyarorszÃ¡g legnyugatibb rÃ©szÃ©n, az osztrÃ¡k Ã©s a szlovÃ©n hatÃ¡r mentÃ©n fekszik, Ã©s az orszÃ¡g egyik legszebb termÃ©szeti adottsÃ¡gokkal rendelkezÅ‘ rÃ©giÃ³ja. A tÃ¡jat az Alpok nyÃºlvÃ¡nyai, sÅ±rÅ± erdÅ‘k Ã©s bÅ‘sÃ©ges termÃ¡lvÃ­zkincs jellemzi. SzÃ©khelye Szombathely, az orszÃ¡g egyik legÅ‘sibb vÃ¡rosa, amely jelentÅ‘s rÃ³mai kori mÃºlttal bÃ¼szkÃ©lkedhet Savaria nÃ©ven. Vas vÃ¡rmegye vilÃ¡gszerte hÃ­res kivÃ¡lÃ³ gyÃ³gyfÃ¼rdÅ‘irÅ‘l, mint BÃ¼kfÃ¼rdÅ‘ Ã©s SÃ¡rvÃ¡r, valamint festÅ‘i tÃ¶rtÃ©nelmi kisvÃ¡rosairÃ³l, mint pÃ©ldÃ¡ul KÅ‘szeg. A rÃ©giÃ³ az alpesi frissessÃ©g, a rÃ³mai Ã¶rÃ¶ksÃ©g Ã©s a modern wellness kultÃºra tÃ¶kÃ©letes Ã¶tvÃ¶zetÃ©t kÃ­nÃ¡lja, ideÃ¡lis helyszÃ­nt biztosÃ­tva a pihenÃ©sre Ã©s a felfedezÃ©sre.",
      "ro": "JudeÈ›ul Vas este situat Ã®n extremitatea vesticÄƒ a Ungariei, la graniÈ›a cu Austria È™i Slovenia, È™i este o regiune de o frumuseÈ›e naturalÄƒ excepÈ›ionalÄƒ È™i importanÈ›Äƒ istoricÄƒ. Peisajul este marcat de ramificaÈ›iile Alpilor, pÄƒduri dese È™i numeroase izvoare termale. Centrul administrativ este Szombathely, unul dintre cele mai vechi oraÈ™e din Ungaria, cu un trecut roman semnificativ sub numele de Savaria. Vas este renumit Ã®n Ã®ntreaga lume pentru bÄƒile sale curative de primÄƒ clasÄƒ, cum ar fi BÃ¼kfÃ¼rdÅ‘ È™i SÃ¡rvÃ¡r, precum È™i pentru orÄƒÈ™elele sale istorice pitoreÈ™ti, cum ar fi KÅ‘szeg. JudeÈ›ul oferÄƒ o combinaÈ›ie perfectÄƒ de prospeÈ›ime alpinÄƒ, moÈ™tenire romanÄƒ È™i culturÄƒ modernÄƒ de wellness, fiind o destinaÈ›ie idealÄƒ pentru relaxare È™i pasionaÈ›ii de istorie.",
      "en": "Vas County is located in the far west of Hungary on the border with Austria and Slovenia, and is a region of exceptional natural beauty and historical significance. The landscape is characterized by the foothills of the Alps, dense forests, and abundant thermal springs. Its administrative center is Szombathely, one of Hungary's oldest cities, boasting a significant Roman past as Savaria. Vas is world-famous for its premium spas such as BÃ¼kfÃ¼rdÅ‘ and SÃ¡rvÃ¡r, as well as its picturesque historic towns like KÅ‘szeg. The county offers a perfect combination of alpine freshness, Roman heritage, and modern wellness culture, making it an ideal destination for relaxation and history enthusiasts."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Vas vÃ¡rmegye MagyarorszÃ¡g legnyugatibb rÃ©szÃ©n, az osztrÃ¡k hatÃ¡r mentÃ©n terÃ¼l el, Ã©s az Alpokalja festÅ‘i dombvidÃ©keirÅ‘l, valamint tÃ¶rtÃ©nelmi vÃ¡rosairÃ³l ismert. A vÃ¡rmegye szÃ©khelye Szombathely, amelyet a rÃ³maiak alapÃ­tottak Savaria nÃ©ven, Ã©s bÃ¼szkÃ©lkedhet az orszÃ¡g egyik leggazdagabb antik emlÃ©kanyagÃ¡val. Ã‰szakon KÅ‘szeg vÃ¡rosa varÃ¡zsolja el a lÃ¡togatÃ³kat kÃ¶zÃ©pkori hangulatÃ¡val Ã©s vÃ¡rÃ¡val, mÃ­g dÃ©lebbre az ÅrsÃ©g nÃ©prajzi tÃ¡jegysÃ©ge Å‘rzi az Å‘si magyar Ã©pÃ­tÃ©szetet Ã©s Ã©letmÃ³dot. Vas vÃ¡rmegye rendkÃ­vÃ¼l gazdag gyÃ³gyvizekben is, olyan vilÃ¡ghÃ­rÅ± fÃ¼rdÅ‘kkel, mint BÃ¼kfÃ¼rdÅ‘ vagy SÃ¡rvÃ¡r. A termÃ©szet kedvelÅ‘it az Ãrott-kÅ‘ kÃ¶rnyÃ©ki erdÅ‘k Ã©s a kanyargÃ³s RÃ¡ba folyÃ³ vÃ¡rja.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Szombathely, das antike Savaria der RÃ¶merzeit.",
        "BÃ¼kfÃ¼rdÅ‘ beherbergt eines der grÃ¶ÃŸten und bekanntesten HeilbÃ¤der Ungarns.",
        "KÅ‘szeg ist bekannt fÃ¼r seine charmante mittelalterliche Altstadt und die Burg Jurisics.",
        "Der Nationalpark ÅrsÃ©g bewahrt die traditionelle bÃ¤uerliche Lebensweise und Architektur.",
        "Die Region beherbergt das JÃ¡k-Kloster, ein Meisterwerk der romanischen Architektur.",
        "SÃ¡rvÃ¡r ist berÃ¼hmt fÃ¼r sein Schloss NÃ¡dasdy und sein modernes Thermalbad.",
        "Vas hat eine der hÃ¶chsten LebensqualitÃ¤ten und eine starke wirtschaftliche Anbindung an den Westen.",
        "Der Ãrott-kÅ‘ (Geschriebenstein) ist der hÃ¶chste Punkt Transdanubiens.",
        "Die Region ist bekannt fÃ¼r ihre exzellenten WeiÃŸweine, insbesondere aus der Gegend um KÅ‘szeg.",
        "Szombathely ist der Geburtsort des Heiligen Martin von Tours."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye Szombathely, az Ã³kori Savaria, amely fontos rÃ³mai kÃ¶zpont volt.",
        "BÃ¼kfÃ¼rdÅ‘ az orszÃ¡g egyik legnagyobb Ã©s legnÃ©pszerÅ±bb gyÃ³gyfÃ¼rdÅ‘helye.",
        "KÅ‘szeg vÃ¡rosa hÃ­res Ã©pen maradt kÃ¶zÃ©pkori belvÃ¡rosÃ¡rÃ³l Ã©s a Jurisics-vÃ¡rrÃ³l.",
        "Az ÅrsÃ©gi Nemzeti Park egyedÃ¼lÃ¡llÃ³ mÃ³don Å‘rzi a hagyomÃ¡nyos nÃ©pi Ã©pÃ­tÃ©szetet Ã©s Ã©letmÃ³dot.",
        "JÃ¡kon talÃ¡lhatÃ³ az orszÃ¡g egyik legjelentÅ‘sebb romÃ¡n kori emlÃ©ke, a jÃ¡ki apÃ¡tsÃ¡gi templom.",
        "SÃ¡rvÃ¡r legfÅ‘bb lÃ¡tnivalÃ³ja a NÃ¡dasdy-vÃ¡r Ã©s a vilÃ¡gszÃ­nvonalÃº gyÃ³gy- Ã©s wellnessfÃ¼rdÅ‘.",
        "Vas vÃ¡rmegye gazdasÃ¡gilag az egyik legfejlettebb rÃ©giÃ³, szoros kapcsolatokkal Ausztria felÃ©.",
        "Itt talÃ¡lhatÃ³ a DunÃ¡ntÃºl legmagasabb pontja, az Ãrott-kÅ‘ (882 m).",
        "A vÃ¡rmegye hÃ­res a kÅ‘szegi Ã©s vaskeresztesi bortermelÃ©srÅ‘l.",
        "Szombathely Szent MÃ¡rton pÃ¼spÃ¶k szÃ¼lÅ‘helye, aki EurÃ³pa egyik legtiszteltebb szentje."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este Szombathely, anticul Savaria din epoca romanÄƒ.",
        "BÃ¼kfÃ¼rdÅ‘ gÄƒzduieÈ™te una dintre cele mai mari È™i mai cunoscute bÄƒi curative din Ungaria.",
        "KÅ‘szeg este cunoscut pentru centrul sÄƒu vechi medieval fermecÄƒtor È™i cetatea Jurisics.",
        "Parcul NaÈ›ional ÅrsÃ©g pÄƒstreazÄƒ modul de viaÈ›Äƒ È™i arhitectura È›ÄƒrÄƒneascÄƒ tradiÈ›ionalÄƒ.",
        "Regiunea gÄƒzduieÈ™te AbaÈ›ia din JÃ¡k, o capodoperÄƒ a arhitecturii romanice.",
        "SÃ¡rvÃ¡r este faimos pentru castelul NÃ¡dasdy È™i bÄƒile sale termale moderne.",
        "JudeÈ›ul Vas are una dintre cele mai ridicate calitÄƒÈ›i ale vieÈ›ii din Ungaria.",
        "VÃ¢rful Ãrott-kÅ‘ (Geschriebenstein) este cel mai Ã®nalt punct din Transdanubia.",
        "Regiunea este cunoscutÄƒ pentru vinurile sale albe excelente, Ã®n special din zona KÅ‘szeg.",
        "Szombathely este locul de naÈ™tere al faimosului SfÃ¢nt Martin din Tours."
      ],
      "en": [
        "The county seat is Szombathely, the ancient Savaria of the Roman era.",
        "BÃ¼kfÃ¼rdÅ‘ is home to one of Hungary's largest and most famous medicinal baths.",
        "KÅ‘szeg is known for its charming medieval old town and the Jurisics Castle.",
        "The ÅrsÃ©g National Park preserves traditional peasant lifestyle and architecture.",
        "The region is home to the JÃ¡k Abbey, a masterpiece of Romanesque architecture.",
        "SÃ¡rvÃ¡r is famous for its NÃ¡dasdy Castle and its modern thermal bath.",
        "Vas County has one of the highest qualities of life and strong economic ties to the West.",
        "Ãrott-kÅ‘ (Geschriebenstein) is the highest point in Transdanubia.",
        "The region is known for its excellent white wines, particularly from the KÅ‘szeg area.",
        "Szombathely is the birthplace of Saint Martin of Tours."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Szombathely (Savaria) az orszÃ¡g legrÃ©gebbi, rÃ³maiak Ã¡ltal alapÃ­tott vÃ¡rosa.",
        "Itt talÃ¡lhatÃ³ KÅ‘szeg, amely az 1532-es tÃ¶rÃ¶k ostrom elleni hÅ‘sies helytÃ¡llÃ¡sÃ¡rÃ³l hÃ­res.",
        "Az ÅrsÃ©gi Nemzeti Park az Å‘si hatÃ¡rÅ‘rvidÃ©k hagyomÃ¡nyait Ã©s kÃ¼lÃ¶nleges 'szeres' telepÃ¼lÃ©sszerkezetÃ©t Å‘rzi.",
        "BÃ¼kfÃ¼rdÅ‘ MagyarorszÃ¡g egyik legjelentÅ‘sebb gyÃ³gyfÃ¼rdÅ‘je, vize kÃ¼lÃ¶nÃ¶sen magas Ã¡svÃ¡nyi anyag tartalmÃº.",
        "A vÃ¡rmegye legmagasabb pontja az Ãrott-kÅ‘ (882 m), amely egyben a DunÃ¡ntÃºl legmagasabb csÃºcsa is."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "veszprem",
    type: "region",
    parent: "HU-VE",
    coords: [17.9114, 47.0928],
    name: {"de": "Wesprim", "hu": "VeszprÃ©m", "ro": "VeszprÃ©m", "en": "VeszprÃ©m"},
    image: "/geo-images/hungary/veszprem.webp",
    description: {
      "de": "Das Komitat VeszprÃ©m liegt im Herzen Transdanubiens und umfasst das Nordufer des Plattensees sowie das malerische Bakony-Gebirge. Die Region ist bekannt fÃ¼r ihre auÃŸergewÃ¶hnliche geografische Vielfalt, die von vulkanischen HÃ¼geln bis zu tiefen WÃ¤ldern und dem glitzernden Wasser des Balaton reicht. Das administrative Zentrum ist VeszprÃ©m, die 'Stadt der KÃ¶niginnen', die auf fÃ¼nf HÃ¼geln erbaut wurde und eine reiche mittelalterliche Geschichte besitzt. VeszprÃ©m ist weltberÃ¼hmt fÃ¼r seine Weinregionen, insbesondere das Balaton-Oberland und Badacsony, sowie fÃ¼r seine kulturellen SchÃ¤tze wie die Abtei von Tihany. Die Region bietet eine einzigartige Mischung aus historischer Eleganz, natÃ¼rlicher SchÃ¶nheit und erstklassigen FreizeitmÃ¶glichkeiten, was sie zu einem der beliebtesten Reiseziele Ungarns macht.",
      "hu": "VeszprÃ©m vÃ¡rmegye a DunÃ¡ntÃºl szÃ­vÃ©ben terÃ¼l el, magÃ¡ban foglalva a Balaton Ã©szaki partjÃ¡t Ã©s a festÅ‘i Bakony-hegysÃ©get. A rÃ©giÃ³ rendkÃ­vÃ¼li fÃ¶ldrajzi vÃ¡ltozatossÃ¡gÃ¡rÃ³l ismert, a vulkanikus tanÃºhegyektÅ‘l a sÅ±rÅ± erdÅ‘kÃ¶n Ã¡t a Balaton csillogÃ³ vÃ­ztÃ¼krÃ©ig minden megtalÃ¡lhatÃ³ itt. SzÃ©khelye VeszprÃ©m, a 'kirÃ¡lynÃ©k vÃ¡rosa', amely Ã¶t dombra Ã©pÃ¼lt, Ã©s gazdag kÃ¶zÃ©pkori mÃºlttal rendelkezik. VeszprÃ©m vÃ¡rmegye vilÃ¡gszerte hÃ­res borvidÃ©keirÅ‘l, kÃ¼lÃ¶nÃ¶sen a Balaton-felvidÃ©krÅ‘l Ã©s BadacsonyrÃ³l, valamint olyan kulturÃ¡lis kincseirÅ‘l, mint a Tihanyi ApÃ¡tsÃ¡g. A vÃ¡rmegye a tÃ¶rtÃ©nelmi elegancia, a termÃ©szeti szÃ©psÃ©g Ã©s a minÅ‘sÃ©gi kikapcsolÃ³dÃ¡s egyedÃ¼lÃ¡llÃ³ Ã¶tvÃ¶zetÃ©t kÃ­nÃ¡lja, Ã­gy az orszÃ¡g egyik legnÃ©pszerÅ±bb turisztikai cÃ©lpontja.",
      "ro": "JudeÈ›ul VeszprÃ©m este situat Ã®n inima Transdanubiei È™i cuprinde malul nordic al Lacului Balaton È™i munÈ›ii pitoreÈ™ti Bakony. Regiunea este cunoscutÄƒ pentru diversitatea sa geograficÄƒ excepÈ›ionalÄƒ, variind de la dealuri vulcanice la pÄƒduri dese È™i apele strÄƒlucitoare ale Balatonului. Centrul administrativ este VeszprÃ©m, 'oraÈ™ul reginelor', construit pe cinci dealuri È™i avÃ¢nd o istorie medievalÄƒ bogatÄƒ. VeszprÃ©m este renumit Ã®n Ã®ntreaga lume pentru regiunile sale viticole, Ã®n special zona deluroasÄƒ a Balatonului È™i Badacsony, precum È™i pentru comorile sale culturale, cum ar fi AbaÈ›ia din Tihany. JudeÈ›ul oferÄƒ un amestec unic de eleganÈ›Äƒ istoricÄƒ, frumuseÈ›e naturalÄƒ È™i oportunitÄƒÈ›i de recreere de primÄƒ clasÄƒ, fiind una dintre cele mai populare destinaÈ›ii turistice din Ungaria.",
      "en": "VeszprÃ©m County is located in the heart of Transdanubia, encompassing the northern shore of Lake Balaton and the picturesque Bakony Mountains. The region is known for its exceptional geographical diversity, ranging from volcanic hills to dense forests and the sparkling waters of Lake Balaton. Its administrative center is VeszprÃ©m, the 'City of Queens', built on five hills and possessing a rich medieval history. VeszprÃ©m is world-famous for its wine regions, particularly the Balaton Uplands and Badacsony, as well as for its cultural treasures like the Tihany Abbey. The county offers a unique blend of historical elegance, natural beauty, and high-quality recreational opportunities, making it one of Hungary's most popular tourist destinations."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "VeszprÃ©m vÃ¡rmegye a DunÃ¡ntÃºl kÃ¶zponti rÃ©szÃ©n fekszik, Ã©s MagyarorszÃ¡g egyik legvÃ¡ltozatosabb turisztikai rÃ©giÃ³ja, magÃ¡ban foglalva a Bakony-hegysÃ©get Ã©s a Balaton Ã©szaki partjÃ¡t. A vÃ¡rmegye szÃ©khelye VeszprÃ©m, a 'kirÃ¡lynÃ©k vÃ¡rosa', amely nevÃ©t arrÃ³l kapta, hogy Ã©vszÃ¡zadokon Ã¡t a veszprÃ©mi pÃ¼spÃ¶k koronÃ¡zta meg a magyar kirÃ¡lynÃ©kat. A tÃ¡jat a Bakony sÅ±rÅ± erdÅ‘i, vadregÃ©nyes szurdokai Ã©s a Balaton-felvidÃ©k vulkanikus tanÃºhegyei, mint a Badacsony, teszik egyedÃ¼lÃ¡llÃ³vÃ¡. Itt talÃ¡lhatÃ³ a Tihanyi-fÃ©lsziget is, az orszÃ¡g elsÅ‘ tÃ¡jvÃ©delmi kÃ¶rzete az ezerÃ©ves apÃ¡tsÃ¡ggal. A vÃ¡rmegye hÃ­res bortermelÃ©sÃ©rÅ‘l, herendi porcelÃ¡njÃ¡rÃ³l Ã©s gazdag tÃ¶rtÃ©nelmi emlÃ©keirÅ‘l, amelyek vÃ¡rakban (SÃ¼meg, NagyvÃ¡zsony) Ã©s kolostorromokban Ã¶ltenek testet.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist VeszprÃ©m, eine der KulturhauptstÃ¤dte Europas 2023.",
        "Die Abtei von Tihany beherbergt die GrÃ¼ndungsurkunde mit den Ã¤ltesten ungarischen Schriftfragmenten.",
        "Badacsony ist berÃ¼hmt fÃ¼r seine Basaltberge und den Wein 'Grauer MÃ¶nch' (SzÃ¼rkebarÃ¡t).",
        "Der Nationalpark Balaton-Oberland schÃ¼tzt die einzigartige vulkanische Landschaft.",
        "Herend ist weltweit bekannt fÃ¼r seine handbemalte Luxusporzellan-Manufaktur.",
        "Das Bakony-Gebirge war einst ein berÃ¼chtigtes Versteck fÃ¼r ungarische Outlaws (BetyÃ¡rok).",
        "BalatonfÃ¼red ist der Ã¤lteste Kurort am Plattensee und bekannt fÃ¼r seine kohlensÃ¤urehaltigen Quellen.",
        "Die Burg von SÃ¼meg ist eine der am besten erhaltenen mittelalterlichen Festungen des Landes.",
        "VeszprÃ©m war traditionell der ort, an dem die ungarischen KÃ¶niginnen gekrÃ¶nt wurden.",
        "Der Plattensee bietet in dieser Region hervorragende Bedingungen fÃ¼r den Segelsport."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye VeszprÃ©m, amely 2023-ban EurÃ³pa KulturÃ¡lis FÅ‘vÃ¡rosa volt.",
        "A Tihanyi ApÃ¡tsÃ¡g altemplomÃ¡ban talÃ¡lhatÃ³ az egyetlen Ã©pen maradt magyar kirÃ¡lysÃ­r (I. AndrÃ¡s).",
        "Badacsony hÃ­res bazaltorgonÃ¡irÃ³l Ã©s az itt termelt szÃ¼rkebarÃ¡t borrÃ³l.",
        "A Balaton-felvidÃ©ki Nemzeti Park Ã³vja a rÃ©giÃ³ egyedÃ¼lÃ¡llÃ³ vulkanikus tÃ¡jegysÃ©geit.",
        "Herend vilÃ¡ghÃ­rÅ± a kÃ©zzel festett luxusporcelÃ¡n-manufaktÃºrÃ¡jÃ¡rÃ³l.",
        "A Bakony hegysÃ©g egykor a hÃ­res bakonyi betyÃ¡rok rejtekhelye volt.",
        "BalatonfÃ¼red a Balaton legrÃ©gebbi gyÃ³gyÃ¼dÃ¼lÅ‘helye Ã©s a vitorlÃ¡zÃ¡s kÃ¶zpontja.",
        "A sÃ¼megi vÃ¡r az orszÃ¡g egyik leglÃ¡tvÃ¡nyosabb Ã©s legÃ©pebben maradt kÃ¶zÃ©pkori erÅ‘dje.",
        "VeszprÃ©m hagyomÃ¡nyosan a magyar kirÃ¡lynÃ©k koronÃ¡zÃ³vÃ¡rosa volt.",
        "A vÃ¡rmegye terÃ¼letÃ©n talÃ¡lhatÃ³ a Balaton legmÃ©lyebb pontja, a Tihanyi-szorosnÃ¡l."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este VeszprÃ©m, una dintre Capitalele Europene ale Culturii Ã®n 2023.",
        "AbaÈ›ia din Tihany adÄƒposteÈ™te actul de ctitorire cu cele mai vechi fragmente scrise Ã®n limba maghiarÄƒ.",
        "Badacsony este faimos pentru munÈ›ii sÄƒi de bazalt È™i vinul 'SzÃ¼rkebarÃ¡t' (CÄƒlugÄƒrul Gri).",
        "Parcul NaÈ›ional Balaton-felvidÃ©k protejeazÄƒ peisajul vulcanic unic al regiunii.",
        "Herend este cunoscut Ã®n Ã®ntreaga lume pentru manufactura sa de porÈ›elan de lux pictat manual.",
        "MunÈ›ii Bakony au fost odinioarÄƒ ascunzÄƒtoarea faimoÈ™ilor haiduci maghiari (BetyÃ¡rok).",
        "BalatonfÃ¼red este cea mai veche staÈ›iune balnearÄƒ de la Lacul Balaton È™i centrul navigaÈ›iei.",
        "Cetatea din SÃ¼meg este una dintre cele mai bine conservate fortificaÈ›ii medievale din È›arÄƒ.",
        "VeszprÃ©m a fost Ã®n mod tradiÈ›ional oraÈ™ul unde erau Ã®ncoronate reginele Ungariei.",
        "Lacul Balaton oferÄƒ Ã®n aceastÄƒ regiune condiÈ›ii excelente pentru sporturile nautice."
      ],
      "en": [
        "The county seat is VeszprÃ©m, which served as a European Capital of Culture in 2023.",
        "The Tihany Abbey houses the founding charter containing the oldest written Hungarian fragments.",
        "Badacsony is famous for its basalt columns and the 'SzÃ¼rkebarÃ¡t' (Grey Monk) wine.",
        "The Balaton Uplands National Park protects the region's unique volcanic landscapes.",
        "Herend is world-renowned for its hand-painted luxury porcelain manufactory.",
        "The Bakony Mountains were once a notorious hideout for Hungarian outlaws (BetyÃ¡rok).",
        "BalatonfÃ¼red is the oldest spa resort on Lake Balaton and a center for sailing.",
        "SÃ¼meg Castle is one of the country's most spectacular and best-preserved medieval fortresses.",
        "VeszprÃ©m was traditionally the city where Hungarian queens were crowned.",
        "Lake Balaton offers excellent conditions for sailing and water sports in this region."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "VeszprÃ©m vÃ¡rosa 2023-ban EurÃ³pa KulturÃ¡lis FÅ‘vÃ¡rosa volt, elismerve gazdag mÅ±vÃ©szeti Ã©letÃ©t.",
        "Itt talÃ¡lhatÃ³ a Balaton-felvidÃ©ki Nemzeti Park a vilÃ¡ghÃ­rÅ± tihanyi bencÃ©s apÃ¡tsÃ¡ggal.",
        "Herend vÃ¡rosa a vilÃ¡gszerte ismert, kÃ©zzel festett porcelÃ¡n gyÃ¡rtÃ¡sÃ¡nak kÃ¶zpontja.",
        "A Badacsony-hegy Ã©s kÃ¶rnyÃ©ke az orszÃ¡g egyik legfontosabb fehÃ©rbortermelÅ‘ vidÃ©ke.",
        "A Bakony-hegysÃ©gben talÃ¡lhatÃ³ Csesznek vÃ¡ra Ã©s a hÃ­res Cuha-vÃ¶lgyi vasÃºtvonal."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zala",
    type: "region",
    parent: "HU-ZA",
    coords: [16.8439, 46.8417],
    name: {"de": "Zala", "hu": "Zala", "ro": "Zala", "en": "Zala"},
    image: "/geo-images/hungary/zala.webp",
    description: {
      "de": "Das Komitat Zala liegt im SÃ¼dwesten Ungarns an der Grenze zu Ã–sterreich, Slowenien und Kroatien und ist eine Region von auÃŸergewÃ¶hnlicher natÃ¼rlicher Vielfalt. Die Landschaft ist geprÃ¤gt von den sanften HÃ¼geln des Zalaer HÃ¼gellandes, dichten WÃ¤ldern und dem westlichen Ende des Plattensees. Das administrative Zentrum ist Zalaegerszeg, eine Stadt mit einer entspannten AtmosphÃ¤re und bedeutenden kulturellen Einrichtungen wie dem GÃ¶csej-Dorfmuseum. Zala ist weltberÃ¼hmt fÃ¼r den Thermalsee von HÃ©vÃ­z, den grÃ¶ÃŸten biologisch aktiven natÃ¼rlichen Thermalsee der Welt, sowie fÃ¼r den beliebten Ferienort Keszthely mit dem prÃ¤chtigen Schloss Festetics. Die Region bietet eine perfekte Mischung aus thermaler Heilkraft, historischer Pracht und unberÃ¼hrter Natur, was sie zu einem erstklassigen Ziel fÃ¼r Wellness und Kultur macht.",
      "hu": "Zala vÃ¡rmegye MagyarorszÃ¡g dÃ©lnyugati rÃ©szÃ©n, az osztrÃ¡k, szlovÃ©n Ã©s horvÃ¡t hatÃ¡r mentÃ©n fekszik, Ã©s az orszÃ¡g egyik legvÃ¡ltozatosabb termÃ©szeti adottsÃ¡gÃº rÃ©giÃ³ja. A tÃ¡jat a Zalai-dombsÃ¡g lankÃ¡i, sÅ±rÅ± erdÅ‘k Ã©s a Balaton nyugati medencÃ©je hatÃ¡rozzÃ¡k meg. SzÃ©khelye Zalaegerszeg, a hangulatos vÃ¡ros, amely olyan jelentÅ‘s kulturÃ¡lis intÃ©zmÃ©nyeknek ad otthont, mint a GÃ¶cseji FalumÃºzeum. Zala vÃ¡rmegye vilÃ¡gszerte hÃ­res a HÃ©vÃ­zi-tÃ³rÃ³l, amely a vilÃ¡g legnagyobb biolÃ³giailag aktÃ­v termÃ©szetes termÃ¡ltava, valamint KeszthelyrÅ‘l Ã©s a lenyÅ±gÃ¶zÅ‘ Festetics-kastÃ©lyrÃ³l. A vÃ¡rmegye a termÃ¡lvizes gyÃ³gyulÃ¡s, a tÃ¶rtÃ©nelmi pompa Ã©s az Ã©rintetlen termÃ©szet tÃ¶kÃ©letes Ã¶tvÃ¶zetÃ©t kÃ­nÃ¡lja a lÃ¡togatÃ³knak.",
      "ro": "JudeÈ›ul Zala este situat Ã®n sud-vestul Ungariei, la graniÈ›a cu Austria, Slovenia È™i CroaÈ›ia, È™i este o regiune cu o diversitate naturalÄƒ excepÈ›ionalÄƒ. Peisajul este marcat de dealurile blÃ¢nde ale regiunii deluroase Zala, pÄƒduri dese È™i extremitatea vesticÄƒ a Lacului Balaton. Centrul administrativ este Zalaegerszeg, un oraÈ™ cu o atmosferÄƒ relaxatÄƒ È™i instituÈ›ii culturale importante, cum ar fi Muzeul Satului GÃ¶csej. Zala este renumit Ã®n Ã®ntreaga lume pentru lacul termal din HÃ©vÃ­z, cel mai mare lac termal natural activ biologic din lume, precum È™i pentru staÈ›iunea popularÄƒ Keszthely, cu magnificul castel Festetics. JudeÈ›ul oferÄƒ un amestec unic de putere curativÄƒ termalÄƒ, splendoare istoricÄƒ È™i naturÄƒ virginÄƒ, fiind o destinaÈ›ie de top pentru wellness È™i culturÄƒ.",
      "en": "Zala County is located in southwestern Hungary on the border with Austria, Slovenia, and Croatia, and is a region of exceptional natural diversity. The landscape is characterized by the rolling hills of the Zala Uplands, dense forests, and the western end of Lake Balaton. Its administrative center is Zalaegerszeg, a city with a relaxed atmosphere and significant cultural institutions such as the GÃ¶csej Village Museum. Zala is world-famous for the HÃ©vÃ­z thermal lake, the world's largest biologically active natural thermal lake, as well as for the popular resort town of Keszthely with the magnificent Festetics Palace. The county offers a perfect blend of thermal healing power, historical splendor, and untouched nature, making it an ideal destination for wellness and culture."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Zala vÃ¡rmegye MagyarorszÃ¡g dÃ©lnyugati sarkÃ¡ban fekszik, Ã©s lankÃ¡s dombvidÃ©kÃ©rÅ‘l, sÅ±rÅ± erdÅ‘irÅ‘l Ã©s gazdag kÅ‘olaj- Ã©s fÃ¶ldgÃ¡zkincseirÅ‘l ismert. A vÃ¡rmegye szÃ©khelye Zalaegerszeg, amely az orszÃ¡g elsÅ‘ szabadtÃ©ri nÃ©prajzi mÃºzeumÃ¡val Ã©s modern vÃ¡roskÃ©pÃ©vel bÃ¼szkÃ©lkedhet. Zala vÃ¡rmegyÃ©hez tartozik a Balaton nyugati csÃ¼cske Keszthellyel Ã©s a monumentÃ¡lis Festetics-kastÃ©llyal, valamint a vilÃ¡ghÃ­rÅ± HÃ©vÃ­zi-tÃ³, amely EurÃ³pa legnagyobb termÃ©szetes termÃ¡ltava. A rÃ©giÃ³ hÃ­res nÃ©pi hagyomÃ¡nyairÃ³l, kÃ¼lÃ¶nÃ¶sen a GÃ¶csej Ã©s a HetÃ©s tÃ¡jegysÃ©gek jellegzetes Ã©pÃ­tÃ©szetÃ©rÅ‘l Ã©s gasztronÃ³miÃ¡jÃ¡rÃ³l, mint a dÃ¶dÃ¶lle vagy a tÃ¶kmagolaj. A tÃ¡j nyugalma Ã©s a gyÃ³gyfÃ¼rdÅ‘k sokasÃ¡ga (Zalakaros, Lenti) Somogy mellett a pihenni vÃ¡gyÃ³k egyik legfÅ‘bb cÃ©lpontja.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats ist Zalaegerszeg, bekannt fÃ¼r sein Freilichtmuseum fÃ¼r Volksarchitektur.",
        "HÃ©vÃ­z beherbergt den grÃ¶ÃŸten natÃ¼rlichen Thermalsee der Welt.",
        "Das Schloss Festetics in Keszthely ist eines der bedeutendsten BarockschlÃ¶sser Ungarns.",
        "Die Region ist bekannt fÃ¼r ihre Ã–l- und Erdgasvorkommen, die die ungarische Industrie prÃ¤gten.",
        "Zalakaros ist einer der beliebtesten Kurorte Ungarns mit einem modernen Erlebnisbad.",
        "Der Nationalpark Balaton-Oberland umfasst auch den Kleinen Balaton (Kis-Balaton), ein Vogelparadies.",
        "Zala hat eine reiche Tradition in der Holzverarbeitung und Handwerkskunst.",
        "Die Region ist berÃ¼hmt fÃ¼r ihre Gastronomie, insbesondere fÃ¼r Gerichte mit KÃ¼rbiskernÃ¶l.",
        "Keszthely ist die Ã¤lteste Stadt am Ufer des Plattensees.",
        "Das Zalaer HÃ¼gelland bietet hervorragende Bedingungen fÃ¼r den Weinbau und Wanderungen."
      ],
      "hu": [
        "A vÃ¡rmegye szÃ©khelye Zalaegerszeg, ahol az orszÃ¡g elsÅ‘ szabadtÃ©ri nÃ©prajzi mÃºzeuma talÃ¡lhatÃ³.",
        "HÃ©vÃ­zen talÃ¡lhatÃ³ a vilÃ¡g legnagyobb biolÃ³giailag aktÃ­v termÃ©szetes termÃ¡ltava.",
        "A keszthelyi Festetics-kastÃ©ly az orszÃ¡g egyik legjelentÅ‘sebb Ã©s legszebb barokk kastÃ©lya.",
        "A vÃ¡rmegye terÃ¼letÃ©n indult el a magyarorszÃ¡gi kÅ‘olaj- Ã©s fÃ¶ldgÃ¡zkitermelÃ©s.",
        "Zalakaros az orszÃ¡g egyik legnÃ©pszerÅ±bb gyÃ³gy- Ã©s Ã©lmÃ©nyfÃ¼rdÅ‘ vÃ¡rosa.",
        "A Kis-Balaton egyedÃ¼lÃ¡llÃ³ vizes Ã©lÅ‘hely Ã©s madÃ¡rrezervÃ¡tum, a nemzeti park rÃ©sze.",
        "Zala vÃ¡rmegye hÃ­res a gÃ¶cseji Ã©s hetÃ©si nÃ©pi hagyomÃ¡nyairÃ³l Ã©s Ã©pÃ­tÃ©szetÃ©rÅ‘l.",
        "A rÃ©giÃ³ gasztronÃ³miÃ¡jÃ¡nak kÃ¼lÃ¶nlegessÃ©ge a tÃ¶kmagolaj Ã©s a dÃ¶dÃ¶lle.",
        "Keszthely a Balaton-part legrÃ©gebbi vÃ¡rosa Ã©s fontos kulturÃ¡lis kÃ¶zpontja.",
        "A Zalai-dombsÃ¡g kivÃ¡lÃ³ tÃºraÃºtvonalakat Ã©s bortermelÅ‘ vidÃ©keket rejt."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului este Zalaegerszeg, cunoscut pentru muzeul sÄƒu Ã®n aer liber de arhitecturÄƒ popularÄƒ.",
        "HÃ©vÃ­z gÄƒzduieÈ™te cel mai mare lac termal natural din lume.",
        "Castelul Festetics din Keszthely este unul dintre cele mai importante castele baroce din Ungaria.",
        "Regiunea este cunoscutÄƒ pentru zÄƒcÄƒmintele sale de petrol È™i gaze naturale, care au modelat industria maghiarÄƒ.",
        "Zalakaros este una dintre cele mai populare staÈ›iuni balneare din Ungaria, cu un parc acvatic modern.",
        "Parcul NaÈ›ional Balaton-felvidÃ©k include È™i Balatonul Mic (Kis-Balaton), un paradis al pÄƒsÄƒrilor.",
        "Zala are o tradiÈ›ie bogatÄƒ Ã®n prelucrarea lemnului È™i meÈ™teÈ™uguri.",
        "Regiunea este faimoasÄƒ pentru gastronomia sa, Ã®n special pentru preparatele cu ulei de seminÈ›e de dovleac.",
        "Keszthely este cel mai vechi oraÈ™ de pe malul Lacului Balaton.",
        "Dealurile Zala oferÄƒ condiÈ›ii excelente pentru viticulturÄƒ È™i drumeÈ›ii."
      ],
      "en": [
        "The county seat is Zalaegerszeg, home to Hungary's first open-air ethnographical museum.",
        "HÃ©vÃ­z is home to the world's largest biologically active natural thermal lake.",
        "The Festetics Palace in Keszthely is one of Hungary's most significant and beautiful Baroque palaces.",
        "The region is the birthplace of the Hungarian oil and gas industry.",
        "Zalakaros is one of Hungary's most popular spa towns with a modern adventure bath.",
        "The Balaton Uplands National Park includes the Little Balaton (Kis-Balaton), a unique wetland and bird sanctuary.",
        "Zala County is famous for its GÃ¶csej and HetÃ©s folk traditions and architecture.",
        "The region's gastronomy is noted for its use of pumpkin seed oil and traditional dishes like 'dÃ¶dÃ¶lle'.",
        "Keszthely is the oldest city on the shores of Lake Balaton.",
        "The Zala hills offer excellent opportunities for hiking and wine production."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt talÃ¡lhatÃ³ a HÃ©vÃ­zi-tÃ³, a vilÃ¡g legnagyobb biolÃ³giailag aktÃ­v termÃ©szetes termÃ¡ltava.",
        "A keszthelyi Festetics-kastÃ©ly az orszÃ¡g egyik legjelentÅ‘sebb barokk palotaegyÃ¼ttese.",
        "Zala vÃ¡rmegye a magyar kÅ‘olaj- Ã©s fÃ¶ldgÃ¡zkitermelÃ©s tÃ¶rtÃ©nelmi bÃ¶lcsÅ‘je.",
        "A GÃ¶cseji FalumÃºzeum volt az orszÃ¡g elsÅ‘ szabadtÃ©ri nÃ©prajzi gyÅ±jtemÃ©nye.",
        "Zalakaros az orszÃ¡g egyik legnÃ©pszerÅ±bb gyÃ³gy- Ã©s Ã©lmÃ©nyfÃ¼rdÅ‘ vÃ¡rosa."
      ],
      "ro": [],
      "en": []
    },
  },
];

export const hungaryCities: POI[] = [
  {
    id: "budapest-city",
    type: "city",
    parent: "HU-BU",
    coords: [19.0402, 47.4979],
    name: {"de": "Budapest", "hu": "Budapest", "ro": "Budapesta", "en": "Budapest"},
    image: "/geo-images/hungary/budapest-city.webp",
    description: {
      "de": "Budapest, die Hauptstadt Ungarns, ist eine der beeindruckendsten Metropolen Europas und wird oft als 'Perle der Donau' bezeichnet. Die Stadt entstand 1873 durch die Zusammenlegung von Buda, Pest und Ã“buda und bietet eine einzigartige Mischung aus Geschichte, Kultur und moderner Lebensart. Besucher kÃ¶nnen das majestÃ¤tische ParlamentsgebÃ¤ude, die historische Fischerbastei und zahlreiche ThermalbÃ¤der genieÃŸen. Die Donauufer, das Burgviertel und die AndrÃ¡ssy-StraÃŸe gehÃ¶ren zum UNESCO-Welterbe.",
      "hu": "Budapest, MagyarorszÃ¡g fÅ‘vÃ¡rosa, EurÃ³pa egyik leglenyÅ±gÃ¶zÅ‘bb metropolisza, amelyet gyakran a 'Duna gyÃ¶ngyekÃ©nt' emlegetnek. A vÃ¡ros 1873-ban jÃ¶tt lÃ©tre Buda, Pest Ã©s Ã“buda egyesÃ­tÃ©sÃ©vel, Ã©s a tÃ¶rtÃ©nelem, a kultÃºra Ã©s a modern Ã©letstÃ­lus egyedÃ¼lÃ¡llÃ³ keverÃ©kÃ©t kÃ­nÃ¡lja. A lÃ¡togatÃ³k megcsodÃ¡lhatjÃ¡k a fensÃ©ges OrszÃ¡ghÃ¡zat, a tÃ¶rtÃ©nelmi HalÃ¡szbÃ¡styÃ¡t Ã©s szÃ¡mos vilÃ¡ghÃ­rÅ± termÃ¡lfÃ¼rdÅ‘t. A Duna-part, a Budai VÃ¡rnegyed Ã©s az AndrÃ¡ssy Ãºt az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezi.",
      "ro": "Budapesta, capitala Ungariei, este una dintre cele mai impresionante metropole din Europa, fiind adesea numitÄƒ 'Perla DunÄƒrii'. OraÈ™ul a fost format Ã®n 1873 prin unirea localitÄƒÈ›ilor Buda, Pesta È™i Ã“buda, oferind un amestec unic de istorie, culturÄƒ È™i stil de viaÈ›Äƒ modern. Vizitatorii se pot bucura de clÄƒdirea maiestuoasÄƒ a Parlamentului, de istoricul Bastion al Pescarilor È™i de numeroase bÄƒi termale. Malurile DunÄƒrii, cartierul Castelului È™i Bulevardul AndrÃ¡ssy fac parte din patrimoniul mondial UNESCO.",
      "en": "Budapest, the capital of Hungary, is one of Europe's most stunning metropolises, often referred to as the 'Pearl of the Danube.' The city was formed in 1873 by the unification of Buda, Pest, and Ã“buda, offering a unique blend of history, culture, and modern lifestyle. Visitors can enjoy the majestic Parliament Building, the historic Fisherman's Bastion, and numerous world-famous thermal baths. The banks of the Danube, the Buda Castle District, and AndrÃ¡ssy Avenue are all part of the UNESCO World Heritage list."
    },
    descriptionAdvanced: {
      "de": "Budapest, die prachtvolle Hauptstadt Ungarns, wird durch die majestÃ¤tische Donau in das hÃ¼gelige Buda und das lebendige Pest geteilt. Die Stadt entstand 1873 durch die Vereinigung von Buda, Pest und Ã“buda und blickt auf eine jahrtausendealte Geschichte zurÃ¼ck, die von den RÃ¶mern bis zur Zeit der Ã¶sterreichisch-ungarischen Monarchie reicht. Besucher sind fasziniert von der architektonischen Vielfalt, die von der gotischen Matthiaskirche Ã¼ber das neugotische ParlamentsgebÃ¤ude bis hin zu prachtvollen Jugendstilbauten reicht. Budapest ist zudem die einzige Hauptstadt der Welt, die Ã¼ber eine Vielzahl von Thermalquellen verfÃ¼gt, was sie zu einem Zentrum der europÃ¤ischen BÃ¤derkultur macht. Die Donauufer, das Burgviertel und die AndrÃ¡ssy-StraÃŸe gehÃ¶ren zum UNESCO-Welterbe und zeugen von der glanzvollen Vergangenheit der Metropole.",
      "hu": "Budapest, MagyarorszÃ¡g fÅ‘vÃ¡rosa Ã©s legnÃ©pesebb vÃ¡rosa, a Duna kÃ©t partjÃ¡n fekvÅ‘ metropolisz, amely tÃ¶rtÃ©nelmi, kulturÃ¡lis Ã©s gazdasÃ¡gi szempontbÃ³l is az orszÃ¡g szÃ­ve. A vÃ¡ros 1873-ban jÃ¶tt lÃ©tre Buda, Pest Ã©s Ã“buda egyesÃ­tÃ©sÃ©vel, Ã©s azÃ³ta KÃ¶zÃ©p-EurÃ³pa egyik legjelentÅ‘sebb kÃ¶zpontjÃ¡vÃ¡ nÅ‘tte ki magÃ¡t. Budapest vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­neivel, mint a Budai VÃ¡rnegyed, a Duna-parti panorÃ¡ma Ã©s az AndrÃ¡ssy Ãºt, a vilÃ¡g minden tÃ¡jÃ¡rÃ³l vonzza a turistÃ¡kat. Az 'Ã©lÅ‘ tÃ¶rtÃ©nelem' vÃ¡rosa, ahol a rÃ³mai kori romok, a tÃ¶rÃ¶k fÃ¼rdÅ‘k, a gÃ³tikus Ã©s barokk templomok, valamint a szecessziÃ³s palotÃ¡k Ã©s a modern Ã©pÃ­tÃ©szet kÃ¼lÃ¶nleges elegye alkot egyedÃ¼lÃ¡llÃ³ vÃ¡roskÃ©pet. Budapest emellett a vilÃ¡g egyetlen fÃ¼rdÅ‘fÅ‘vÃ¡rosa, ahol tÃ¶bb tucat termÃ¡lforrÃ¡s tÃ¡plÃ¡lja a tÃ¶rtÃ©nelmi gyÃ³gyfÃ¼rdÅ‘ket.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Hauptstadt und grÃ¶ÃŸte Stadt Ungarns mit Ã¼ber 1,7 Millionen Einwohnern.",
        "BerÃ¼hmt fÃ¼r das ParlamentsgebÃ¤ude, das drittgrÃ¶ÃŸte der Welt.",
        "Beherbergt die Ã¤lteste U-Bahn-Linie Kontinentaleuropas (M1).",
        "Bekannt als 'Stadt der BÃ¤der' mit Ã¼ber 100 Thermalquellen.",
        "Die KettenbrÃ¼cke war die erste dauerhafte Verbindung Ã¼ber die Donau.",
        "Das Burgviertel bietet einen Panoramablick auf die gesamte Stadt.",
        "Budapest ist ein wichtiges Zentrum fÃ¼r Bildung, Wirtschaft und Kunst.",
        "Die GroÃŸe Synagoge in der DohÃ¡ny-StraÃŸe ist die grÃ¶ÃŸte in Europa."
      ],
      "hu": [
        "MagyarorszÃ¡g fÅ‘vÃ¡rosa Ã©s legnagyobb vÃ¡rosa, tÃ¶bb mint 1,7 milliÃ³ lakossal.",
        "HÃ­res az OrszÃ¡ghÃ¡zrÃ³l, amely a vilÃ¡g harmadik legnagyobb parlamenti Ã©pÃ¼lete.",
        "Itt talÃ¡lhatÃ³ a kontinens legidÅ‘sebb fÃ¶ldalatti vasÃºtja (M1).",
        "A 'fÃ¼rdÅ‘k vÃ¡rosa' nÃ©ven ismert, tÃ¶bb mint 100 termÃ¡lforrÃ¡ssal.",
        "A LÃ¡nchÃ­d volt az elsÅ‘ Ã¡llandÃ³ hÃ­d a Duna felett.",
        "A VÃ¡rnegyedbÅ‘l lenyÅ±gÃ¶zÅ‘ panorÃ¡ma nyÃ­lik az egÃ©sz vÃ¡rosra.",
        "Fontos oktatÃ¡si, gazdasÃ¡gi Ã©s mÅ±vÃ©szeti kÃ¶zpont KÃ¶zÃ©p-EurÃ³pÃ¡ban.",
        "A DohÃ¡ny utcai zsinagÃ³ga EurÃ³pa legnagyobb zsidÃ³ temploma."
      ],
      "ro": [
        "Capitala È™i cel mai mare oraÈ™ al Ungariei, cu peste 1,7 milioane de locuitori.",
        "FaimoasÄƒ pentru clÄƒdirea Parlamentului, a treia ca mÄƒrime din lume.",
        "GÄƒzduieÈ™te cea mai veche linie de metrou din Europa continentalÄƒ (M1).",
        "Cunoscut ca 'oraÈ™ul bÄƒilor', avÃ¢nd peste 100 de izvoare termale.",
        "Podul cu LanÈ›uri a fost prima legÄƒturÄƒ permanentÄƒ peste DunÄƒre.",
        "Cartierul Castelului oferÄƒ o vedere panoramicÄƒ asupra Ã®ntregului oraÈ™.",
        "Un centru important pentru educaÈ›ie, economie È™i artÄƒ Ã®n Europa CentralÄƒ.",
        "Sinagoga de pe strada DohÃ¡ny este cea mai mare din Europa."
      ],
      "en": [
        "Capital and largest city of Hungary with over 1.7 million inhabitants.",
        "Famous for the Parliament Building, the third largest in the world.",
        "Home to the oldest subway line in continental Europe (M1).",
        "Known as the 'City of Baths' with over 100 thermal springs.",
        "The Chain Bridge was the first permanent bridge across the Danube.",
        "The Castle District offers a panoramic view of the entire city.",
        "An important center for education, economy, and art in Central Europe.",
        "The DohÃ¡ny Street Synagogue is the largest synagogue in Europe."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": ["Budapest MagyarorszÃ¡g politikai, gazdasÃ¡gi, kÃ¶zlekedÃ©si Ã©s kulturÃ¡lis kÃ¶zpontja.",
        "A Duna-part, a Budai VÃ¡rnegyed Ã©s az AndrÃ¡ssy Ãºt az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
        "A vilÃ¡g egyetlen fÅ‘vÃ¡rosa, amely alatt barlangok Ã©s tÃ¶bb mint 120 termÃ¡lforrÃ¡s talÃ¡lhatÃ³.",
        "Itt mÅ±kÃ¶dik a kontinens elsÅ‘ fÃ¶ldalatti vasÃºtja (M1), amelyet 1896-ban adtak Ã¡t.",
        "A DohÃ¡ny utcai zsinagÃ³ga EurÃ³pa legnagyobb, a vilÃ¡g mÃ¡sodik legnagyobb zsinagÃ³gÃ¡ja."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "budai-var",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0396, 47.4962],
    name: {"de": "Budaer Burg", "hu": "Budai VÃ¡r", "ro": "Castelul Buda", "en": "Buda Castle"},
    description: {
      "de": "Die Budaer Burg ist ein historisches Schloss und ein monumentaler Palastkomplex der ungarischen KÃ¶nige in Budapest, der majestÃ¤tisch Ã¼ber der Donau thront. Das gesamte Burgviertel gehÃ¶rt zum UNESCO-Welterbe und ist eines der bedeutendsten kulturellen und historischen Zentren Ungarns. Die Anlage umfasst prÃ¤chtige GebÃ¤ude wie den KÃ¶nigspalast, die Matthiaskirche und die Fischerbastei, die alle Zeugen der wechselvollen Geschichte des Landes sind. Besucher kÃ¶nnen durch die mittelalterlichen Gassen schlendern, beeindruckende Museen besuchen und einen der schÃ¶nsten Panoramablicke auf die Stadt Pest genieÃŸen. Die Budaer Burg verbindet gotische, Renaissance- und Barockarchitektur zu einem einzigartigen Ensemble, das jÃ¤hrlich Millionen von Touristen anzieht.",
      "hu": "A Budai VÃ¡r a magyar kirÃ¡lyok tÃ¶rtÃ©nelmi kastÃ©ly- Ã©s palotaegyÃ¼ttese Budapesten, amely fensÃ©gesen magasodik a Duna fÃ¶lÃ© a VÃ¡rhegyen. Az egÃ©sz VÃ¡rnegyed az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze, Ã©s MagyarorszÃ¡g egyik legfontosabb kulturÃ¡lis Ã©s tÃ¶rtÃ©nelmi kÃ¶zpontja. Az egyÃ¼ttes olyan lenyÅ±gÃ¶zÅ‘ Ã©pÃ¼leteket foglal magÃ¡ban, mint a KirÃ¡lyi Palota, a MÃ¡tyÃ¡s-templom Ã©s a HalÃ¡szbÃ¡stya, amelyek mind az orszÃ¡g viharos tÃ¶rtÃ©nelmÃ©nek tanÃºi. A lÃ¡togatÃ³k kÃ¶zÃ©pkori utcÃ¡kon sÃ©tÃ¡lhatnak, rangos mÃºzeumokat fedezhetnek fel, Ã©s Ã©lvezhetik az egyik legszebb panorÃ¡mÃ¡t a vÃ¡ros pesti oldalÃ¡ra. A Budai VÃ¡r a gÃ³tikus, reneszÃ¡nsz Ã©s barokk Ã©pÃ­tÃ©szet kÃ¼lÃ¶nleges elegye, amely Ã©vente tÃ¶bb milliÃ³ turistÃ¡t vonz a vilÃ¡g minden tÃ¡jÃ¡rÃ³l.",
      "ro": "Castelul Buda este un castel istoric È™i un complex monumental de palate al regilor maghiari din Budapesta, care troneazÄƒ maiestuos deasupra DunÄƒrii. ÃŽntregul cartier al Castelului face parte din patrimoniul mondial UNESCO È™i este unul dintre cele mai importante centre culturale È™i istorice ale Ungariei. Complexul cuprinde clÄƒdiri splendide precum Palatul Regal, Biserica MÃ¡tyÃ¡s È™i Bastionul Pescarilor, toate fiind martore ale istoriei zbuciumate a È›Äƒrii. Vizitatorii se pot plimba pe strÄƒzile medievale, pot vizita muzee impresionante È™i se pot bucura de una dintre cele mai frumoase vederi panoramice asupra oraÈ™ului Pesta. Castelul Buda Ã®mbinÄƒ arhitectura goticÄƒ, renascentistÄƒ È™i barocÄƒ Ã®ntr-un ansamblu unic, care atrage anual milioane de turiÈ™ti.",
      "en": "Buda Castle is a historical castle and a monumental palace complex of the Hungarian kings in Budapest, majestically overlooking the Danube. The entire Castle District is a UNESCO World Heritage site and is one of Hungary's most significant cultural and historical centers. The complex includes magnificent buildings such as the Royal Palace, Matthias Church, and the Fisherman's Bastion, all of which bear witness to the country's turbulent history. Visitors can stroll through medieval alleys, explore impressive museums, and enjoy one of the most beautiful panoramic views of the city's Pest side. Buda Castle combines Gothic, Renaissance, and Baroque architecture into a unique ensemble that attracts millions of tourists annually."
    },
    
    descriptionAdvanced: {
      "de": "Die Budaer Burg ist das historische Herz von Budapest und ein monumentales Zeugnis ungarischer Macht und Kultur Ã¼ber acht Jahrhunderte. Thronend auf dem Burgberg Ã¼ber der Donau, vereint das Burgviertel gotische, Renaissance- und Barockarchitektur zu einem einzigartigen UNESCO-Welterbe. Die Anlage umfasst den prachtvollen KÃ¶nigspalast, die geschichtstrÃ¤chtige Matthiaskirche und die mÃ¤rchenhafte Fischerbastei. Ãœber Jahrhunderte war die Burg die Residenz ungarischer KÃ¶nige und ein Bollwerk gegen Invasoren, was sich in den massiven Verteidigungsanlagen widerspiegelt. Heute beherbergt sie bedeutende Museen wie die Nationalgalerie und die Nationalbibliothek. Ein Spaziergang durch die kopfsteingepflasterten Gassen der Burg bietet nicht nur historische Einblicke, sondern auch den wohl spektakulÃ¤rsten Ausblick auf die Pester Seite der Stadt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Die Burg wurde erstmals im 13. Jahrhundert nach dem Mongolensturm errichtet.",
        "Teil des UNESCO-Welterbes seit 1987.",
        "Beherbergt die Ungarische Nationalgalerie und das Historische Museum Budapest.",
        "Die Matthiaskirche war der Ort zahlreicher kÃ¶niglicher KrÃ¶nungen.",
        "Die Fischerbastei bietet sieben TÃ¼rme, die die sieben ungarischen StÃ¤mme symbolisieren.",
        "Unter der Burg befindet sich ein weitlÃ¤ufiges Labyrinth- und HÃ¶hlensystem.",
        "Der Palast wurde nach dem Zweiten Weltkrieg fast vollstÃ¤ndig rekonstruiert.",
        "Die Nationalbibliothek SzÃ©chÃ©nyi befindet sich ebenfalls im Burgkomplex.",
        "Die Burg ist durch die historische Standseilbahn (SiklÃ³) mit dem Donauufer verbunden.",
        "Der Burggarten-Basar am FuÃŸe des HÃ¼gels ist ein Meisterwerk der Neorenaissance."
      ],
      "hu": [
        "A vÃ¡rat elÅ‘szÃ¶r a 13. szÃ¡zadban Ã©pÃ­tettÃ©k a tatÃ¡rjÃ¡rÃ¡s utÃ¡n, IV. BÃ©la idejÃ©n.",
        "1987 Ã³ta az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
        "Itt talÃ¡lhatÃ³ a Magyar Nemzeti GalÃ©ria Ã©s a Budapesti TÃ¶rtÃ©neti MÃºzeum.",
        "A MÃ¡tyÃ¡s-templom szÃ¡mos magyar kirÃ¡ly koronÃ¡zÃ¡si helyszÃ­ne volt.",
        "A HalÃ¡szbÃ¡stya hÃ©t tornya a hÃ©t honfoglalÃ³ magyar tÃ¶rzset jelkÃ©pezi.",
        "A VÃ¡rhegy alatt kiterjedt barlang- Ã©s pincerendszer, a BudavÃ¡ri Labirintus hÃºzÃ³dik.",
        "A palotÃ¡t a mÃ¡sodik vilÃ¡ghÃ¡borÃº utÃ¡n szinte teljesen ÃºjjÃ¡ kellett Ã©pÃ­teni.",
        "Az OrszÃ¡gos SzÃ©chÃ©nyi KÃ¶nyvtÃ¡r is a vÃ¡rnegyed Ã©pÃ¼leteiben kapott helyet.",
        "A BudavÃ¡ri SiklÃ³ kÃ¶ti Ã¶ssze a vÃ¡rat a Clark ÃdÃ¡m tÃ©rrel Ã©s a LÃ¡nchÃ­ddal.",
        "A VÃ¡rkert BazÃ¡r a vÃ¡rhegy lÃ¡bÃ¡nÃ¡l a neoreneszÃ¡nsz Ã©pÃ­tÃ©szet remekmÅ±ve."
      ],
      "ro": [
        "Castelul a fost construit pentru prima datÄƒ Ã®n secolul al XIII-lea, dupÄƒ invazia mongolÄƒ.",
        "Face parte din patrimoniul mondial UNESCO din anul 1987.",
        "GÄƒzduieÈ™te Galeria NaÈ›ionalÄƒ MaghiarÄƒ È™i Muzeul de Istorie din Budapesta.",
        "Biserica MÃ¡tyÃ¡s a fost locul a numeroase Ã®ncoronÄƒri regale.",
        "Bastionul Pescarilor are È™apte turnuri care simbolizeazÄƒ cele È™apte triburi maghiare.",
        "Sub castel se aflÄƒ un sistem extins de labirinturi È™i peÈ™teri.",
        "Palatul a fost aproape complet reconstruit dupÄƒ cel de-al Doilea RÄƒzboi Mondial.",
        "Biblioteca NaÈ›ionalÄƒ SzÃ©chÃ©nyi se aflÄƒ, de asemenea, Ã®n complexul castelului.",
        "Castelul este conectat de malul DunÄƒrii prin funicularul istoric (SiklÃ³).",
        "Bazarul GrÄƒdinii Castelului de la poalele dealului este o capodoperÄƒ neorenascentistÄƒ."
      ],
      "en": [
        "The castle was first built in the 13th century after the Mongol invasion.",
        "Part of the UNESCO World Heritage list since 1987.",
        "Houses the Hungarian National Gallery and the Budapest History Museum.",
        "Matthias Church was the site of numerous royal coronations.",
        "The Fisherman's Bastion features seven towers symbolizing the seven Hungarian tribes.",
        "An extensive system of labyrinths and caves lies beneath the Castle Hill.",
        "The palace was almost completely reconstructed after World War II.",
        "The National SzÃ©chÃ©nyi Library is also located within the castle complex.",
        "The castle is connected to the Danube bank by the historic funicular (SiklÃ³).",
        "The Castle Garden Bazaar at the foot of the hill is a Neo-Renaissance masterpiece."
      ]
    },
  
    factsAdvanced: {
      "de": ["Das Burgviertel von Budapest wurde 1987 in die Liste des UNESCO-Weltkulturerbes aufgenommen.", "Unter der Burg erstreckt sich ein weitlÃ¤ufiges Labyrinth aus natÃ¼rlichen und kÃ¼nstlichen HÃ¶hlen.", "Der KÃ¶nigspalast wurde nach der ZerstÃ¶rung im Zweiten Weltkrieg in seinem heutigen prachtvollen Stil wiederaufgebaut.", "In dem Viertel befindet sich das Ã¤lteste Wohnhaus von Budapest aus dem 14. Jahrhundert."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "orszaghaz",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0456, 47.5071],
    name: {"de": "ParlamentsgebÃ¤ude", "hu": "OrszÃ¡ghÃ¡z", "ro": "Parlamentul", "en": "Parliament Building"},
    image: "/geo-images/hungary/orszaghaz.webp",
    description: {
      "de": "Das ungarische ParlamentsgebÃ¤ude, auch OrszÃ¡ghÃ¡z genannt, ist eines der bekanntesten Wahrzeichen von Budapest und ein Meisterwerk der Neogotik. Es liegt majestÃ¤tisch am Pester Ufer der Donau und ist das drittgrÃ¶ÃŸte ParlamentsgebÃ¤ude der Welt. Entworfen von Imre Steindl und eingeweiht im Jahr 1902, beeindruckt es durch seine symmetrische Fassade, seine monumentale Kuppel und seine reiche Innenausstattung mit Gold und Fresken. Das GebÃ¤ude beherbergt die ungarischen Kronjuwelen, einschlieÃŸlich der Heiligen Stephanskrone, und ist der Sitz der ungarischen Nationalversammlung. Als Teil des UNESCO-Welterbes zieht es jÃ¤hrlich unzÃ¤hlige Besucher an, die seine architektonische Pracht und historische Bedeutung bewundern.",
      "hu": "A magyar OrszÃ¡ghÃ¡z Budapest egyik legismertebb jelkÃ©pe Ã©s a neogÃ³tikus Ã©pÃ­tÃ©szet remekmÅ±ve, amely fensÃ©gesen terÃ¼l el a Duna pesti partjÃ¡n. Ez a vilÃ¡g harmadik legnagyobb parlamenti Ã©pÃ¼lete, amelyet Steindl Imre tervezett, Ã©s 1902-ben adtak Ã¡t teljes egÃ©szÃ©ben. Az Ã©pÃ¼let lenyÅ±gÃ¶zi a lÃ¡togatÃ³kat szimmetrikus homlokzatÃ¡val, monumentÃ¡lis kupolÃ¡jÃ¡val, valamint arannyal Ã©s freskÃ³kkal gazdagon dÃ­szÃ­tett belsÅ‘ tereivel. Itt Å‘rzik a magyar koronÃ¡zÃ¡si jelvÃ©nyeket, kÃ¶ztÃ¼k a Szent KoronÃ¡t is, Ã©s ez az Ã©pÃ¼let ad otthont a magyar OrszÃ¡ggyÅ±lÃ©snek. Az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szekÃ©nt az OrszÃ¡ghÃ¡z Ã©vente szÃ¡mtalan lÃ¡togatÃ³t vonz, akik megcsodÃ¡lhatjÃ¡k Ã©pÃ­tÃ©szeti pompÃ¡jÃ¡t Ã©s tÃ¶rtÃ©nelmi jelentÅ‘sÃ©gÃ©t.",
      "ro": "ClÄƒdirea Parlamentului maghiar, cunoscutÄƒ È™i sub numele de OrszÃ¡ghÃ¡z, este unul dintre cele mai faimoase simboluri ale Budapestei È™i o capodoperÄƒ a arhitecturii neogotice. SituatÄƒ maiestuos pe malul Pestei al DunÄƒrii, este a treia cea mai mare clÄƒdire parlamentarÄƒ din lume. ProiectatÄƒ de Imre Steindl È™i inauguratÄƒ Ã®n 1902, impresioneazÄƒ prin faÈ›ada sa simetricÄƒ, cupola monumentalÄƒ È™i interiorul bogat decorat cu aur È™i fresce. ClÄƒdirea adÄƒposteÈ™te bijuteriile coroanei maghiare, inclusiv SfÃ¢nta CoroanÄƒ a lui È˜tefan, È™i este sediul AdunÄƒrii NaÈ›ionale a Ungariei. Ca parte a patrimoniului mondial UNESCO, atrage anual nenumÄƒraÈ›i vizitatori care Ã®i admirÄƒ splendoarea arhitecturalÄƒ È™i importanÈ›a istoricÄƒ.",
      "en": "The Hungarian Parliament Building, also known as OrszÃ¡ghÃ¡z, is one of Budapest's most iconic landmarks and a masterpiece of Neo-Gothic architecture. Majestically situated on the Pest bank of the Danube, it is the third-largest parliament building in the world. Designed by Imre Steindl and fully inaugurated in 1902, it impresses visitors with its symmetrical facade, monumental dome, and rich interior decorated with gold and frescoes. The building houses the Hungarian Crown Jewels, including the Holy Crown of Saint Stephen, and serves as the seat of the National Assembly of Hungary. As part of the UNESCO World Heritage site, it attracts countless visitors annually who admire its architectural splendor and historical significance."
    },
    
    descriptionAdvanced: {
      "de": "Das ungarische ParlamentsgebÃ¤ude (OrszÃ¡ghÃ¡z) ist eines der prÃ¤chtigsten RegierungsgebÃ¤ude der Welt und ein Symbol der ungarischen SouverÃ¤nitÃ¤t. Direkt am Pester Ufer der Donau gelegen, besticht das neugotische Meisterwerk durch seine enorme GrÃ¶ÃŸe und die filigranen Verzierungen der Fassade. Entworfen von Imre Steindl und inspiriert vom Londoner Palace of Westminster, wurde es pÃ¼nktlich zum Millennium im Jahr 1896 fast fertiggestellt. Im Inneren faszinieren die monumentale Treppenhalle, der prachtvolle Kuppelsaal und der Sitzungssaal mit ihrer Golddekoration und den WandgemÃ¤lden. Das wertvollste Exponat ist die ungarische Heilige Krone mit den KrÃ¶nungsinsignien, die im Kuppelsaal streng bewacht werden. Als Teil des UNESCO-Welterbes ist das Parlament ein Muss fÃ¼r jeden Besucher der ungarischen Hauptstadt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Das GebÃ¤ude hat 691 Zimmer und eine GesamtlÃ¤nge von 268 Metern.",
        "FÃ¼r die Innendekoration wurden etwa 40 Kilogramm 24-karÃ¤tiges Gold verwendet.",
        "Die Kuppel erreicht eine HÃ¶he von genau 96 Metern, was an das Jahr der Landnahme (896) erinnert.",
        "Es ist das grÃ¶ÃŸte GebÃ¤ude Ungarns und das hÃ¶chste in Budapest.",
        "Die Fassade ist mit 242 Statuen ungarischer und siebenbÃ¼rgischer Herrscher geschmÃ¼ckt.",
        "Das GebÃ¤ude wurde fast ausschlieÃŸlich aus ungarischen Baumaterialien errichtet.",
        "Die Heilige Stephanskrone wird seit dem Jahr 2000 in der Kuppelhalle bewacht.",
        "Es verfÃ¼gt Ã¼ber ein einzigartiges FernwÃ¤rme- und BelÃ¼ftungssystem aus der Bauzeit.",
        "Die Bauarbeiten dauerten 17 Jahre und beschÃ¤ftigten zeitweise Ã¼ber 1000 Arbeiter.",
        "Das Parlament ist nachts spektakulÃ¤r beleuchtet und spiegelt sich in der Donau."
      ],
      "hu": [
        "Az Ã©pÃ¼letben 691 helyisÃ©g talÃ¡lhatÃ³, hossza pedig 268 mÃ©ter.",
        "A belsÅ‘ dÃ­szÃ­tÃ©shez Ã¶sszesen mintegy 40 kilogramm 24 karÃ¡tos aranyat hasznÃ¡ltak fel.",
        "A kupola magassÃ¡ga pontosan 96 mÃ©ter, ami a honfoglalÃ¡s Ã©vÃ©re (896) utal.",
        "Ez MagyarorszÃ¡g legnagyobb Ã©pÃ¼lete Ã©s Budapest egyik legmagasabb pontja.",
        "A homlokzatot 242 szobor dÃ­szÃ­ti, amelyek magyar Ã©s erdÃ©lyi uralkodÃ³kat Ã¡brÃ¡zolnak.",
        "Az Ã©pÃ¼let szinte kizÃ¡rÃ³lag hazai alapanyagokbÃ³l kÃ©szÃ¼lt, kivÃ©ve a mÃ¡rvÃ¡nymonolitokat.",
        "A Szent KoronÃ¡t Ã©s a koronÃ¡zÃ¡si jelvÃ©nyeket 2000 Ã³ta a kupolacsarnokban Å‘rzik.",
        "Az Ã©pÃ¼let korÃ¡t megelÅ‘zÅ‘, egyedÃ¼lÃ¡llÃ³ tÃ¡vfÅ±tÃ©si Ã©s szellÅ‘zÅ‘rendszerrel rendelkezik.",
        "Az Ã©pÃ­tkezÃ©s 17 Ã©vig tartott, Ã©s alkalmankÃ©nt tÃ¶bb mint 1000 munkÃ¡s dolgozott rajta.",
        "Az OrszÃ¡ghÃ¡z Ã©jszakai kivilÃ¡gÃ­tÃ¡sa a vilÃ¡g egyik legszebb vÃ¡rosi lÃ¡tkÃ©pe."
      ],
      "ro": [
        "ClÄƒdirea are 691 de camere È™i o lungime totalÄƒ de 268 de metri.",
        "Pentru decorarea interioarÄƒ s-au folosit aproximativ 40 de kilograme de aur de 24 de carate.",
        "Cupola atinge o Ã®nÄƒlÈ›ime de exact 96 de metri, amintind de anul descÄƒlecÄƒrii (896).",
        "Este cea mai mare clÄƒdire din Ungaria È™i cea mai Ã®naltÄƒ din Budapesta.",
        "FaÈ›ada este decoratÄƒ cu 242 de statui ale conducÄƒtorilor maghiari È™i transilvÄƒneni.",
        "ClÄƒdirea a fost construitÄƒ aproape exclusiv din materiale de construcÈ›ie maghiare.",
        "SfÃ¢nta CoroanÄƒ a lui È˜tefan este pÄƒzitÄƒ Ã®n sala cupolei Ã®ncepÃ¢nd cu anul 2000.",
        "Dispune de un sistem unic de Ã®ncÄƒlzire centralÄƒ È™i ventilaÈ›ie din perioada construcÈ›iei.",
        "LucrÄƒrile de construcÈ›ie au durat 17 ani È™i au implicat peste 1000 de muncitori.",
        "Parlamentul este iluminat spectaculos noaptea, reflectÃ¢ndu-se Ã®n apele DunÄƒrii."
      ],
      "en": [
        "The building contains 691 rooms and has a total length of 268 meters.",
        "Approximately 40 kilograms of 24-karat gold were used for the interior decoration.",
        "The dome reaches a height of exactly 96 meters, commemorating the year of the Hungarian conquest (896).",
        "It is the largest building in Hungary and the tallest in Budapest.",
        "The facade is adorned with 242 statues of Hungarian and Transylvanian rulers.",
        "The building was constructed almost entirely from Hungarian building materials.",
        "The Holy Crown of Saint Stephen has been guarded in the Dome Hall since 2000.",
        "It features a unique district heating and ventilation system from the time of construction.",
        "Construction took 17 years and employed over 1,000 workers at times.",
        "The Parliament is spectacularly illuminated at night, reflecting in the Danube."
      ]
    },
  
    factsAdvanced: {
      "de": ["Das ungarische Parlament ist mit 268 Metern LÃ¤nge das drittgrÃ¶ÃŸte ParlamentsgebÃ¤ude weltweit.", "FÃ¼r die Vergoldung der InnenrÃ¤ume wurden insgesamt 40 Kilogramm 24-karÃ¤tiges Gold verwendet.", "Das GebÃ¤ude besitzt 691 Zimmer und insgesamt fast 20 Kilometer an TreppenhÃ¤usern.", "Die Kuppel des Parlaments erreicht eine symboltrÃ¤chtige HÃ¶he von genau 96 Metern."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hosok-tere",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0782, 47.5149],
    name: {"de": "Heldenplatz", "hu": "HÅ‘sÃ¶k tere", "ro": "PiaÈ›a Eroilor", "en": "Heroes' Square"},
    description: {
      "de": "Der Heldenplatz ist einer der bedeutendsten und meistbesuchten PlÃ¤tze in Budapest und bildet den monumentalen Abschluss der AndrÃ¡ssy-StraÃŸe. Das HerzstÃ¼ck des Platzes ist das Millenniumsdenkmal, das 1896 anlÃ¤sslich der tausendjÃ¤hrigen Landnahme der Ungarn errichtet wurde. Es zeigt die Statuen der sieben StammesfÃ¼rsten sowie bedeutende PersÃ¶nlichkeiten der ungarischen Geschichte in einer halbkreisfÃ¶rmigen Kolonnade. Flankiert wird der Platz von zwei prÃ¤chtigen GebÃ¤uden: dem Museum der Bildenden KÃ¼nste und der Kunsthalle. Als Teil des UNESCO-Welterbes ist der Heldenplatz ein Symbol des nationalen Stolzes und ein zentraler Ort fÃ¼r staatliche Feierlichkeiten und kulturelle Veranstaltungen.",
      "hu": "A HÅ‘sÃ¶k tere Budapest egyik legjelentÅ‘sebb Ã©s leglÃ¡togatottabb tere, amely az AndrÃ¡ssy Ãºt monumentÃ¡lis lezÃ¡rÃ¡sakÃ©nt szolgÃ¡l. A tÃ©r kÃ¶zponti eleme a Millenniumi emlÃ©kmÅ±, amelyet 1896-ban, a magyar honfoglalÃ¡s ezredik Ã©vfordulÃ³jÃ¡ra kezdtek Ã©pÃ­teni. Az emlÃ©kmÅ± a hÃ©t honfoglalÃ³ vezÃ©r szobrÃ¡t, valamint a magyar tÃ¶rtÃ©nelem legfontosabb alakjait mutatja be a fÃ©lkÃ¶rÃ­ves kolonnÃ¡dokban. A teret kÃ©t impozÃ¡ns Ã©pÃ¼let szegÃ©lyezi: a SzÃ©pmÅ±vÃ©szeti MÃºzeum Ã©s a MÅ±csarnok. Az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szekÃ©nt a HÅ‘sÃ¶k tere a nemzeti bÃ¼szkesÃ©g jelkÃ©pe, Ã©s szÃ¡mos Ã¡llami Ã¼nnepsÃ©g, valamint kulturÃ¡lis esemÃ©ny kÃ¶zponti helyszÃ­ne.",
      "ro": "PiaÈ›a Eroilor este una dintre cele mai importante È™i vizitate pieÈ›e din Budapesta, formÃ¢nd finalul monumental al Bulevardului AndrÃ¡ssy. Piesa centralÄƒ a pieÈ›ei este Monumentul Mileniului, ridicat Ã®n 1896 pentru a celebra o mie de ani de la descÄƒlecarea maghiarilor. Acesta prezintÄƒ statuile celor È™apte cÄƒpetenii de triburi, precum È™i personalitÄƒÈ›i marcante ale istoriei maghiare Ã®ntr-o colonadÄƒ semicircularÄƒ. PiaÈ›a este flancatÄƒ de douÄƒ clÄƒdiri magnifice: Muzeul de Arte Frumoase È™i Galeria de ArtÄƒ (MÅ±csarnok). Ca parte a patrimoniului mondial UNESCO, PiaÈ›a Eroilor este un simbol al mÃ¢ndriei naÈ›ionale È™i un loc central pentru festivitÄƒÈ›ile de stat È™i evenimentele culturale.",
      "en": "Heroes' Square is one of the most significant and most visited squares in Budapest, forming the monumental conclusion of AndrÃ¡ssy Avenue. The centerpiece of the square is the Millennium Monument, which was commissioned in 1896 to commemorate the thousandth anniversary of the Hungarian conquest. It features the statues of the seven chieftains of the Magyars and prominent figures of Hungarian history within a semicircular colonnade. The square is flanked by two magnificent buildings: the Museum of Fine Arts and the Palace of Art (MÅ±csarnok). As part of the UNESCO World Heritage site, Heroes' Square is a symbol of national pride and a central location for state celebrations and cultural events."
    },
    
    descriptionAdvanced: {
      "de": "Der Heldenplatz (HÅ‘sÃ¶k tere) ist der grÃ¶ÃŸte und symboltrÃ¤chtigste Platz von Budapest, gelegen am Ende der prachtvollen AndrÃ¡ssy-StraÃŸe. Das Zentrum des Platzes bildet das Millenniumsdenkmal, das zum 1000-jÃ¤hrigen JubilÃ¤um der ungarischen Landnahme errichtet wurde. Eine 36 Meter hohe SÃ¤ule mit dem Erzengel Gabriel wird von Statuen der sieben ungarischen StammesfÃ¼rsten und zwei halbkreisfÃ¶rmigen Kolonnaden mit bedeutenden KÃ¶nigen und StaatsmÃ¤nnern umrahmt. Der Platz ist ein Ort des nationalen Gedenkens und Schauplatz wichtiger historischer Ereignisse sowie groÃŸer Kundgebungen. Flankiert wird der Heldenplatz von den monumentalen GebÃ¤uden des Museums der Bildenden KÃ¼nste und der Kunsthalle. Das gesamte Ensemble gehÃ¶rt zum UNESCO-Welterbe und vermittelt eindrucksvoll den historischen Stolz der ungarischen Nation.",
      "hu": "A HÅ‘sÃ¶k tere Budapest legimpozÃ¡nsabb kÃ¶ztere, az AndrÃ¡ssy Ãºt monumentÃ¡lis lezÃ¡rÃ¡sa, amelyet a magyar Ã¡llamisÃ¡g ezerÃ©ves Ã©vfordulÃ³jÃ¡ra, 1896-ban alakÃ­tottak ki. KÃ¶zÃ©ppontjÃ¡ban a 36 mÃ©ter magas Millenniumi emlÃ©kmÅ± Ã¡ll, tetejÃ©n GÃ¡briel arkangyallal, aki a Szent KoronÃ¡t Ã©s a kettÅ‘s keresztet tartja. A monumentÃ¡lis oszlopcsarnokokban a magyar tÃ¶rtÃ©nelem 14 meghatÃ¡rozÃ³ alakjÃ¡nak szobra kapott helyet, az oszlop talpazatÃ¡nÃ¡l pedig a hÃ©t honfoglalÃ³ vezÃ©r lovas szobra tekinthetÅ‘ meg. A teret a SzÃ©pmÅ±vÃ©szeti MÃºzeum Ã©s a MÅ±csarnok eklektikus Ã©pÃ¼letei keretezik, alkotva egy egysÃ©ges, vilÃ¡gÃ¶rÃ¶ksÃ©gi rangÃº Ã©pÃ­tÃ©szeti egyÃ¼ttest. SzÃ¡mtalan tÃ¶rtÃ©nelmi esemÃ©ny Ã©s Ã¡llami Ã¼nnepsÃ©g helyszÃ­nekÃ©nt a tÃ©r a nemzeti identitÃ¡s egyik legerÅ‘sebb szimbÃ³luma.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Das Millenniumsdenkmal wurde vom Architekten Albert Schickedanz entworfen.",
        "Die zentrale SÃ¤ule ist 36 Meter hoch und trÃ¤gt die Statue des Erzengels Gabriel.",
        "Die sieben Reiterstatuen am FuÃŸe der SÃ¤ule stellen die ungarischen StammesfÃ¼rsten dar.",
        "In den Kolonnaden befinden sich Statuen von KÃ¶nigen und FreiheitskÃ¤mpfern Ungarns.",
        "Der Platz beherbergt das Grabmal des unbekannten Soldaten.",
        "Der Heldenplatz ist ein beliebter Ausgangspunkt fÃ¼r Besuche im StadtwÃ¤ldchen.",
        "Unter dem Platz befindet sich die Endstation der historischen U-Bahn-Linie M1.",
        "Die Statuen in den Kolonnaden wurden im Laufe der Geschichte mehrfach ausgetauscht.",
        "Der Platz war Schauplatz bedeutender politischer Demonstrationen und Umbettungen.",
        "Die Architektur des Platzes ist ein herausragendes Beispiel fÃ¼r den ungarischen Historismus."
      ],
      "hu": [
        "A Millenniumi emlÃ©kmÅ±vet Schickedanz Albert Ã©pÃ­tÃ©sz tervezte.",
        "A kÃ¶zponti oszlop 36 mÃ©ter magas, tetejÃ©n GÃ¡briel arkangyal szobra Ã¡ll.",
        "Az oszlop talpazatÃ¡nÃ¡l a hÃ©t honfoglalÃ³ vezÃ©r lovas szobra lÃ¡thatÃ³.",
        "A kÃ©t fÃ©lkÃ¶rÃ­ves oszlopcsarnokban a magyar tÃ¶rtÃ©nelem 14 meghatÃ¡rozÃ³ alakjÃ¡nak szobra Ã¡ll.",
        "A tÃ©ren talÃ¡lhatÃ³ a HÅ‘sÃ¶k emlÃ©kkÃ¶ve, amely az ismeretlen katona elÅ‘tt tiszteleg.",
        "A HÅ‘sÃ¶k tere a VÃ¡rosliget kapuja, Budapest egyik legkedveltebb pihenÅ‘helye.",
        "A tÃ©r alatt talÃ¡lhatÃ³ a kisfÃ¶ldalatti (M1) egyik megÃ¡llÃ³ja.",
        "Az emlÃ©kmÅ± szobrai kÃ¶zÃ¼l tÃ¶bbet is kicserÃ©ltek a politikai vÃ¡ltozÃ¡sok sorÃ¡n.",
        "A tÃ©r szÃ¡mos tÃ¶rtÃ©nelmi jelentÅ‘sÃ©gÅ± esemÃ©ny Ã©s tÃ¼ntetÃ©s helyszÃ­ne volt.",
        "A tÃ©r Ã©pÃ­tÃ©szeti egyÃ¼ttese a magyar historizmus egyik legszebb pÃ©ldÃ¡ja."
      ],
      "ro": [
        "Monumentul Mileniului a fost proiectat de arhitectul Albert Schickedanz.",
        "Coloana centralÄƒ are o Ã®nÄƒlÈ›ime de 36 de metri È™i poartÄƒ statuia Arhanghelului Gabriel.",
        "Cele È™apte statui ecvestre de la baza coloanei Ã®i reprezintÄƒ pe cÄƒpeteniile triburilor maghiare.",
        "ÃŽn colonade se aflÄƒ statuile a 14 figuri marcante din istoria Ungariei.",
        "PiaÈ›a gÄƒzduieÈ™te MormÃ¢ntul Soldatului Necunoscut.",
        "PiaÈ›a Eroilor este poarta de intrare cÄƒtre Parcul OraÈ™ului (VÃ¡rosliget).",
        "Sub piaÈ›Äƒ se aflÄƒ o staÈ›ie a liniei istorice de metrou M1.",
        "Statuile din colonade au fost Ã®nlocuite de mai multe ori de-a lungul istoriei.",
        "PiaÈ›a a fost locul unor demonstraÈ›ii politice È™i evenimente istorice majore.",
        "Arhitectura pieÈ›ei este un exemplu remarcabil al historismului maghiar."
      ],
      "en": [
        "The Millennium Monument was designed by architect Albert Schickedanz.",
        "The central column is 36 meters high and is topped by a statue of Archangel Gabriel.",
        "The seven equestrian statues at the base of the column represent the Magyar chieftains.",
        "The colonnades house statues of 14 prominent figures from Hungarian history.",
        "The square is home to the Memorial Stone of Heroes (Tomb of the Unknown Soldier).",
        "Heroes' Square serves as the gateway to the City Park (VÃ¡rosliget).",
        "A station of the historic M1 subway line is located beneath the square.",
        "Several statues in the colonnades were replaced during various political eras.",
        "The square has been the site of major political demonstrations and historic events.",
        "The architectural ensemble of the square is a prime example of Hungarian Historicism."
      ]
    },
  
    factsAdvanced: {
      "de": ["Der Heldenplatz markiert das Ende der UNESCO-geschÃ¼tzten AndrÃ¡ssy-StraÃŸe.", "Das Millenniumsdenkmal wurde vom Bildhauer GyÃ¶rgy Zala und dem Architekten Albert Schickedanz entworfen.", "Unter dem Pflaster des Platzes befindet sich die erste U-Bahn-Station des europÃ¤ischen Kontinents.", "Die Statuen in den Kolonnaden wurden mehrfach ausgetauscht, um den politischen Wandel der Geschichte widerzuspiegeln."],
      "hu": [
        "Az emlÃ©kmÅ± Ã©pÃ­tÃ©se 1896-ban kezdÅ‘dÃ¶tt Ã©s teljes egÃ©szÃ©ben csak 1929-re fejezÅ‘dÃ¶tt be.",
        "A tÃ©r kÃ¶zepÃ©n talÃ¡lhatÃ³ a Magyar HÅ‘sÃ¶k EmlÃ©kkÃ¶ve, amely minden ismeretlen magyar katona elÅ‘tt tiszteleg.",
        "A kolonnÃ¡dokban eredetileg Ã¶t Habsburg uralkodÃ³ szobra is Ã¡llt, de ezeket a mÃ¡sodik vilÃ¡ghÃ¡borÃº utÃ¡n lecserÃ©ltÃ©k.",
        "Zala GyÃ¶rgy szobrÃ¡szmÅ±vÃ©sz tÃ¶bb mint harminc Ã©vig dolgozott az emlÃ©kmÅ± szobrain."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "dunapart",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.045, 47.498],
    name: {"de": "Donauufer", "hu": "Dunapart", "ro": "Malul DunÄƒrii", "en": "Danube Promenade"},
    image: "/geo-images/hungary/dunapart.webp",
    description: {
      "de": "Das Donauufer in Budapest ist eine der spektakulÃ¤rsten Stadtlandschaften der Welt und gehÃ¶rt zum UNESCO-Welterbe. Die Promenade erstreckt sich zwischen der KettenbrÃ¼cke und der ElisabethbrÃ¼cke auf der Pester Seite und bietet einen unvergleichlichen Blick auf die Budaer Burg, den GellÃ©rtberg und das ParlamentsgebÃ¤ude. Entlang des Ufers finden sich zahlreiche historische DenkmÃ¤ler, elegante Hotels und gemÃ¼tliche CafÃ©s, die zum Verweilen einladen. Besonders berÃ¼hmt ist das Mahnmal 'Schuhe am Donauufer', das an die Opfer des Holocaust erinnert. Das Donauufer ist nicht nur ein Ort der Geschichte, sondern auch ein lebendiger Treffpunkt fÃ¼r Einheimische und Touristen, die die magische AtmosphÃ¤re der Stadt am Fluss genieÃŸen mÃ¶chten.",
      "hu": "A budapesti Dunapart a vilÃ¡g egyik leglÃ¡tvÃ¡nyosabb vÃ¡rosi lÃ¡tkÃ©pe, amely az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezi. A pesti oldalon a LÃ¡nchÃ­d Ã©s az ErzsÃ©bet hÃ­d kÃ¶zÃ¶tt hÃºzÃ³dÃ³ sÃ©tÃ¡ny pÃ¡ratlan kilÃ¡tÃ¡st nyÃºjt a Budai VÃ¡rra, a GellÃ©rt-hegyre Ã©s az OrszÃ¡ghÃ¡zra. A part mentÃ©n szÃ¡mos tÃ¶rtÃ©nelmi emlÃ©kmÅ±, elegÃ¡ns szÃ¡lloda Ã©s hangulatos kÃ¡vÃ©zÃ³ talÃ¡lhatÃ³, amelyek hÃ­vogatjÃ¡k a lÃ¡togatÃ³kat. KÃ¼lÃ¶nÃ¶sen megrÃ¡zÃ³ a 'CipÅ‘k a Duna-parton' emlÃ©kmÅ±, amely a holokauszt Ã¡ldozatainak Ã¡llÃ­t emlÃ©ket. A Dunapart nemcsak a tÃ¶rtÃ©nelem helyszÃ­ne, hanem a helyiek Ã©s a turistÃ¡k kedvelt talÃ¡lkozÃ³helye is, ahol mindenki Ã¡tÃ©lheti a folyÃ³parti metropolisz varÃ¡zslatos hangulatÃ¡t.",
      "ro": "Malul DunÄƒrii din Budapesta este unul dintre cele mai spectaculoase peisaje urbane din lume È™i face parte din patrimoniul mondial UNESCO. Promenada se Ã®ntinde Ã®ntre Podul cu LanÈ›uri È™i Podul Elisabeta pe partea Pestei, oferind o vedere de neegalat asupra Castelului Buda, dealului GellÃ©rt È™i clÄƒdirii Parlamentului. De-a lungul malului se gÄƒsesc numeroase monumente istorice, hoteluri elegante È™i cafenele primitoare care invitÄƒ la relaxare. Deosebit de faimos este memorialul 'Pantofi pe malul DunÄƒrii', care onoreazÄƒ victimele Holocaustului. Malul DunÄƒrii nu este doar un loc al istoriei, ci È™i un punct de Ã®ntÃ¢lnire vibrant pentru localnici È™i turiÈ™ti, care doresc sÄƒ se bucure de atmosfera magicÄƒ a oraÈ™ului de pe rÃ¢u.",
      "en": "The Danube bank in Budapest is one of the most spectacular urban landscapes in the world and is a UNESCO World Heritage site. The promenade stretches between the Chain Bridge and the Elizabeth Bridge on the Pest side, offering unparalleled views of Buda Castle, GellÃ©rt Hill, and the Parliament building. Along the shore, numerous historical monuments, elegant hotels, and cozy cafes invite visitors to linger. Particularly moving is the 'Shoes on the Danube Bank' memorial, which commemorates the victims of the Holocaust. The Danube bank is not only a place of history but also a vibrant meeting point for locals and tourists alike, who wish to experience the magical atmosphere of the city by the river."
    },
    
    descriptionAdvanced: {
      "de": "Das Donauufer in Budapest gehÃ¶rt zu den schÃ¶nsten Stadtlandschaften der Welt und wurde zurecht zum UNESCO-Weltkulturerbe erklÃ¤rt. Entlang des Flusses reihen sich architektonische Meisterwerke wie das Parlament, die Ungarische Akademie der Wissenschaften und die prachtvollen Hotels am Pester Ufer aneinander. Auf der Budaer Seite ragen der Burgberg und der GellÃ©rtberg majestÃ¤tisch empor und spiegeln sich im Wasser der Donau. Die Uferzonen sind durch die berÃ¼hmten BrÃ¼cken wie die KettenbrÃ¼cke oder die FreiheitsbrÃ¼cke miteinander verbunden, die nachts prachtvoll illuminiert sind. Ein Spaziergang entlang des Donauufers vermittelt die ganze Eleganz und den Glanz der ungarischen Metropole. Es ist der lebendige Puls der Stadt und ein Ort, an dem Geschichte und Moderne auf spektakulÃ¤re Weise verschmelzen.",
      "hu": "A budapesti Dunapart a vilÃ¡g egyik legszebb folyÃ³parti panorÃ¡mÃ¡ja, amely 1987 Ã³ta az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezi. A vÃ©dett szakasz a Margit hÃ­dtÃ³l a SzabadsÃ¡g hÃ­dig terjed, magÃ¡ban foglalva az OrszÃ¡ghÃ¡z neogÃ³tikus tÃ¶mbjÃ©t, a TudomÃ¡nyos AkadÃ©miÃ¡t Ã©s a pesti szÃ¡llodasort. A part mentÃ©n sÃ©tÃ¡lva szemÃ¼nk elÃ© tÃ¡rul a Budai VÃ¡r Ã©s a GellÃ©rt-hegy fensÃ©ges lÃ¡tvÃ¡nya, mikÃ¶zben a folyÃ³n ringatÃ³zÃ³ hajÃ³k Ã©lettel tÃ¶ltik meg a vizet. A pesti alsÃ³ rakparton talÃ¡lhatÃ³ a megrÃ¡zÃ³ 'CipÅ‘k a Duna-parton' emlÃ©kmÅ±, amely a holokauszt Ã¡ldozatainak Ã¡llÃ­t emlÃ©ket. EstÃ©nkÃ©nt a kivilÃ¡gÃ­tott Ã©pÃ¼letek Ã©s hidak tÃ¼krÃ¶zÅ‘dÃ©se a vÃ­zen kÃ¼lÃ¶nleges, romantikus atmoszfÃ©rÃ¡t teremt a vÃ¡ros szÃ­vÃ©ben.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Das Budapester Donauufer gehÃ¶rt seit 1987 zum UNESCO-Welterbe.",
        "Das Denkmal 'Schuhe am Donauufer' besteht aus 60 Paar Schuhen aus Eisen.",
        "Die Promenade bietet den besten Blick auf die nÃ¤chtliche Beleuchtung der Stadt.",
        "Zahlreiche Luxushotels wie das Gresham Palace befinden sich direkt am Ufer.",
        "Die Donau ist an dieser Stelle etwa 350 Meter breit.",
        "Die Ufermauern wurden im 19. Jahrhundert zum Schutz vor Hochwasser errichtet.",
        "Entlang des Ufers verkehrt die StraÃŸenbahnlinie 2, eine der schÃ¶nsten Linien der Welt.",
        "Die Promenade ist ein beliebter Ort fÃ¼r StraÃŸenkÃ¼nstler und Musiker.",
        "Mehrere Schiffsanlegestellen bieten Rundfahrten auf der Donau an.",
        "Das Ufer ist Schauplatz des groÃŸen Feuerwerks zum ungarischen Nationalfeiertag am 20. August."
      ],
      "hu": [
        "A budapesti Duna-part 1987 Ã³ta az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
        "A 'CipÅ‘k a Duna-parton' emlÃ©kmÅ± 60 pÃ¡r vasbÃ³l Ã¶ntÃ¶tt cipÅ‘bÅ‘l Ã¡ll.",
        "A sÃ©tÃ¡nyrÃ³l nyÃ­lik a legjobb kilÃ¡tÃ¡s a vÃ¡ros Ã©jszakai dÃ­szkivilÃ¡gÃ­tÃ¡sÃ¡ra.",
        "SzÃ¡mos luxusszÃ¡lloda, kÃ¶ztÃ¼k a Gresham-palota is kÃ¶zvetlenÃ¼l a parton talÃ¡lhatÃ³.",
        "A Duna szÃ©lessÃ©ge Budapest belvÃ¡rosÃ¡ban kÃ¶rÃ¼lbelÃ¼l 350 mÃ©ter.",
        "A rakpartokat a 19. szÃ¡zadban Ã©pÃ­tettÃ©k ki az Ã¡rvÃ­zvÃ©delem Ã©s a hajÃ³zÃ¡s Ã©rdekÃ©ben.",
        "A part mentÃ©n halad a 2-es villamos, amelyet a vilÃ¡g egyik legszebb villamosvonalÃ¡nak vÃ¡lasztottak.",
        "A sÃ©tÃ¡ny a helyiek Ã©s a turistÃ¡k egyik legkedveltebb korzÃ³zÃ³ helye.",
        "SzÃ¡mos hajÃ³Ã¡llomÃ¡s kÃ­nÃ¡l vÃ¡rosnÃ©zÅ‘ tÃºrÃ¡kat a DunÃ¡n.",
        "A Duna-part az augusztus 20-i nemzeti Ã¼nnepi tÅ±zijÃ¡tÃ©k kÃ¶zponti helyszÃ­ne."
      ],
      "ro": [
        "Malul DunÄƒrii din Budapesta face parte din patrimoniul mondial UNESCO din 1987.",
        "Memorialul 'Pantofi pe malul DunÄƒrii' constÄƒ Ã®n 60 de perechi de pantofi din fier.",
        "Promenada oferÄƒ cea mai bunÄƒ vedere asupra iluminatului nocturn al oraÈ™ului.",
        "Numeroase hoteluri de lux, precum Palatul Gresham, sunt situate direct pe mal.",
        "DunÄƒrea are o lÄƒÈ›ime de aproximativ 350 de metri Ã®n aceastÄƒ zonÄƒ.",
        "Zidurile de sprijin ale malului au fost construite Ã®n secolul al XIX-lea pentru protecÈ›ia Ã®mpotriva inundaÈ›iilor.",
        "De-a lungul malului circulÄƒ tramvaiul 2, considerat una dintre cele mai frumoase linii din lume.",
        "Promenada este un loc popular pentru artiÈ™tii stradali È™i muzicieni.",
        "Mai multe debarcadere oferÄƒ croaziere turistice pe DunÄƒre.",
        "Malul este locul central pentru focurile de artificii de Ziua NaÈ›ionalÄƒ a Ungariei, pe 20 august."
      ],
      "en": [
        "The Budapest Danube bank has been a UNESCO World Heritage site since 1987.",
        "The 'Shoes on the Danube Bank' memorial consists of 60 pairs of iron shoes.",
        "The promenade offers the best views of the city's spectacular night lighting.",
        "Numerous luxury hotels, such as the Gresham Palace, are located directly on the bank.",
        "The Danube is approximately 350 meters wide at this point in the city center.",
        "The embankments were constructed in the 19th century for flood protection and shipping.",
        "Tram line 2 runs along the bank and is voted one of the most beautiful tram routes in the world.",
        "The promenade is a favorite spot for locals and tourists to take a stroll (korzÃ³zÃ¡s).",
        "Several boat piers offer sightseeing cruises on the Danube.",
        "The Danube bank is the central location for the national holiday fireworks on August 20th."
      ]
    },
  
    factsAdvanced: {
      "de": ["Das Budapester Donauufer ist seit 1987 offizielles UNESCO-Weltkulturerbe.", "Die Uferpromenade auf der Pester Seite ist als 'Donau-Korso' bekannt und ein beliebter Treffpunkt.", "Am Ufer befinden sich 60 metallene Schuhe, ein bewegendes Denkmal fÃ¼r die Opfer des Holocaust.", "Die Donauufer in Budapest bieten eine der weltweit schÃ¶nsten Nachtansichten einer Stadt."],
      "hu": [
        "A Duna budapesti szakasza 1987-ben kerÃ¼lt fel az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi listÃ¡jÃ¡ra.",
        "A 'CipÅ‘k a Duna-parton' holokauszt-emlÃ©kmÅ± 60 pÃ¡r vasbÃ³l Ã¶ntÃ¶tt, korhÅ± cipÅ‘t Ã¡brÃ¡zol.",
        "A pesti Duna-korzÃ³n kÃ¶zlekedÅ‘ 2-es villamos vonalÃ¡t a National Geographic a vilÃ¡g egyik legszebbikÃ©nek vÃ¡lasztotta.",
        "A rakpartok kiÃ©pÃ­tÃ©se a 19. szÃ¡zad mÃ¡sodik felÃ©ben kezdÅ‘dÃ¶tt a rendszeres Ã¡rvizek elleni vÃ©dekezÃ©sÃ¼l."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "margitsziget",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0475, 47.5266],
    name: {"de": "Margareteninsel", "hu": "Margitsziget", "ro": "Insula Margareta", "en": "Margaret Island"},
    description: {
      "de": "Die Margareteninsel ist eine grÃ¼ne Oase mitten in der Donau in Budapest und dient als das wichtigste Naherholungsgebiet der Stadt. Die fast drei Kilometer lange Insel ist weitgehend autofrei und bietet eine entspannte AtmosphÃ¤re mit weitlÃ¤ufigen Parks, jahrhundertealten BÃ¤umen und mittelalterlichen Ruinen. Besucher finden hier zahlreiche Attraktionen wie den singenden Springbrunnen, den japanischen Garten und das beliebte Palatinus-Strandbad. Die Insel ist nach der Heiligen Margarete benannt, einer ungarischen KÃ¶nigstochter, die im 13. Jahrhundert in einem Dominikanerkloster auf der Insel lebte. Ob zum Joggen, Spazierengehen oder fÃ¼r kulturelle Veranstaltungen im Freilichttheater â€“ die Margareteninsel ist ein unverzichtbarer Teil des Budapester LebensgefÃ¼hls.",
      "hu": "A Margitsziget egy zÃ¶ld oÃ¡zis a Duna kÃ¶zepÃ©n Budapest szÃ­vÃ©ben, amely a vÃ¡ros legfontosabb pihenÅ‘Ã¶vezetekÃ©nt szolgÃ¡l. A kÃ¶zel hÃ¡rom kilomÃ©ter hosszÃº sziget nagy rÃ©sze autÃ³mentes, tÃ¡gas parkokkal, Ã©vszÃ¡zados fÃ¡kkal Ã©s kÃ¶zÃ©pkori romokkal vÃ¡rja a kikapcsolÃ³dni vÃ¡gyÃ³kat. A lÃ¡togatÃ³k szÃ¡mos lÃ¡tnivalÃ³t talÃ¡lhatnak itt, mint pÃ©ldÃ¡ul a zenÃ©lÅ‘ szÃ¶kÅ‘kutat, a japÃ¡nkertet Ã©s a nÃ©pszerÅ± Palatinus strandfÃ¼rdÅ‘t. A sziget Szent MargitrÃ³l, IV. BÃ©la kirÃ¡ly lÃ¡nyÃ¡rÃ³l kapta a nevÃ©t, aki a 13. szÃ¡zadban az itt talÃ¡lhatÃ³ dominikÃ¡nus kolostorban Ã©lt. Legyen szÃ³ kocogÃ¡srÃ³l, sÃ©tÃ¡rÃ³l vagy kulturÃ¡lis esemÃ©nyekrÅ‘l a SzabadtÃ©ri SzÃ­npadon, a Margitsziget a budapesti Ã©letÃ©rzÃ©s elengedhetetlen rÃ©sze.",
      "ro": "Insula Margareta este o oazÄƒ verde Ã®n mijlocul DunÄƒrii, Ã®n inima Budapestei, servind drept cea mai importantÄƒ zonÄƒ de recreere a oraÈ™ului. Insula, lungÄƒ de aproape trei kilometri, este Ã®n mare parte fÄƒrÄƒ maÈ™ini È™i oferÄƒ o atmosferÄƒ relaxatÄƒ, cu parcuri vaste, copaci seculari È™i ruine medievale. Vizitatorii gÄƒsesc aici numeroase atracÈ›ii, cum ar fi fÃ¢ntÃ¢na muzicalÄƒ, grÄƒdina japonezÄƒ È™i popularul È™trand Palatinus. Insula poartÄƒ numele Sfintei Margareta, fiica regelui BÃ©la al IV-lea, care a trÄƒit Ã®n mÄƒnÄƒstirea dominicanÄƒ de pe insulÄƒ Ã®n secolul al XIII-lea. Fie cÄƒ este vorba de jogging, plimbÄƒri sau evenimente culturale la Teatrul Ã®n Aer Liber, Insula Margareta este o parte indispensabilÄƒ a stilului de viaÈ›Äƒ din Budapesta.",
      "en": "Margaret Island is a green oasis in the middle of the Danube in the heart of Budapest, serving as the city's most important recreational area. The nearly three-kilometer-long island is largely car-free and offers a relaxed atmosphere with extensive parks, centuries-old trees, and medieval ruins. Visitors can find numerous attractions here, such as the musical fountain, the Japanese garden, and the popular Palatinus strand bath. The island is named after Saint Margaret, the daughter of King BÃ©la IV, who lived in a Dominican convent on the island in the 13th century. Whether for jogging, strolling, or attending cultural events at the Open-Air Theater, Margaret Island is an essential part of the Budapest experience."
    },
    
    descriptionAdvanced: {
      "de": "Die Margareteninsel (Margitsziget) ist die grÃ¼ne Lunge von Budapest und ein wahres Erholungsparadies inmitten der Donau. Benannt nach der Heiligen Margarete, der Tochter von KÃ¶nig BÃ©la IV., beherbergt die Insel die Ruinen eines mittelalterlichen Dominikanerklosters. Die Insel ist heute fast vollstÃ¤ndig autofrei und bietet weite Parkanlagen, botanische GÃ¤rten und jahrhundertealte BÃ¤ume. Zu den Hauptattraktionen gehÃ¶ren der singende Springbrunnen mit seinen Lichtspielen, der historische Wasserturm und das traditionsreiche Palatinus-Strandbad. Jogger nutzen den berÃ¼hmten Laufpfad, der die gesamte Insel umrundet, wÃ¤hrend Familien die Ruhe und die vielen SpielplÃ¤tze genieÃŸen. Die Margareteninsel ist ein Ort der Stille und der aktiven Erholung, der die Hektik der GroÃŸstadt vergessen lÃ¤sst.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Die Insel ist 2,8 Kilometer lang und an der breitesten Stelle 500 Meter breit.",
        "Der singende Springbrunnen ist einer der grÃ¶ÃŸten seiner Art in Europa.",
        "Die Ruinen des Dominikanerklosters stammen aus dem 13. Jahrhundert.",
        "Der Wasserturm der Insel gehÃ¶rt zum UNESCO-Welterbe.",
        "Die Insel ist durch die MargaretenbrÃ¼cke und die ÃrpÃ¡dbrÃ¼cke mit der Stadt verbunden.",
        "Das Palatinus-Bad war das erste Freibad in Budapest.",
        "Es gibt eine 5,3 Kilometer lange gummierte Laufstrecke rund um die Insel.",
        "Der japanische Garten wurde in den 1970er Jahren angelegt und bietet seltene Pflanzen.",
        "Die Insel beherbergt einen kleinen Tierpark mit Hirschen und WasservÃ¶geln.",
        "Im Sommer finden im Freilichttheater zahlreiche Opern- und BallettauffÃ¼hrungen statt."
      ],
      "hu": [
        "A sziget 2,8 kilomÃ©ter hosszÃº, legszÃ©lesebb pontjÃ¡n pedig 500 mÃ©ter szÃ©les.",
        "A zenÃ©lÅ‘ szÃ¶kÅ‘kÃºt EurÃ³pa egyik legnagyobb ilyen jellegÅ± Ã©pÃ­tmÃ©nye.",
        "A dominikÃ¡nus kolostor romjai a 13. szÃ¡zadbÃ³l szÃ¡rmaznak.",
        "A szigeten Ã¡llÃ³ VÃ­ztorony az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
        "A szigetet a Margit hÃ­d Ã©s az ÃrpÃ¡d hÃ­d kÃ¶ti Ã¶ssze a vÃ¡rossal.",
        "A Palatinus strandfÃ¼rdÅ‘ volt Budapest elsÅ‘ szabadtÃ©ri fÃ¼rdÅ‘je.",
        "A sziget kÃ¶rÃ¼l egy 5,3 kilomÃ©ter hosszÃº, gumÃ­rozott futÃ³pÃ¡lya talÃ¡lhatÃ³.",
        "A japÃ¡nkertet az 1970-es Ã©vekben alakÃ­tottÃ¡k ki, kÃ¼lÃ¶nleges nÃ¶vÃ©nyfajokkal.",
        "A szigeten egy kis vadaspark is talÃ¡lhatÃ³, ahol Å‘zeket Ã©s vÃ­zimadarakat lÃ¡thatunk.",
        "A Margitszigeti SzabadtÃ©ri SzÃ­npad nyaranta rangos operaelÅ‘adÃ¡soknak ad otthont."
      ],
      "ro": [
        "Insula are o lungime de 2,8 kilometri È™i o lÄƒÈ›ime maximÄƒ de 500 de metri.",
        "FÃ¢ntÃ¢na muzicalÄƒ este una dintre cele mai mari de acest tip din Europa.",
        "Ruinele mÄƒnÄƒstirii dominicane dateazÄƒ din secolul al XIII-lea.",
        "Turnul de apÄƒ de pe insulÄƒ face parte din patrimoniul mondial UNESCO.",
        "Insula este conectatÄƒ de oraÈ™ prin Podul Margareta È™i Podul ÃrpÃ¡d.",
        "È˜trandul Palatinus a fost prima baie Ã®n aer liber din Budapesta.",
        "ExistÄƒ o pistÄƒ de alergare cauciucatÄƒ de 5,3 kilometri Ã®n jurul insulei.",
        "GrÄƒdina japonezÄƒ a fost amenajatÄƒ Ã®n anii 1970 È™i oferÄƒ plante rare.",
        "Insula gÄƒzduieÈ™te un mic parc zoologic cu cÄƒprioare È™i pÄƒsÄƒri de apÄƒ.",
        "Teatrul Ã®n Aer Liber gÄƒzduieÈ™te numeroase spectacole de operÄƒ È™i balet Ã®n timpul verii."
      ],
      "en": [
        "The island is 2.8 kilometers long and 500 meters wide at its broadest point.",
        "The musical fountain is one of the largest of its kind in Europe.",
        "The ruins of the Dominican convent date back to the 13th century.",
        "The island's Water Tower is a UNESCO World Heritage site.",
        "The island is connected to the city by the Margaret Bridge and the ÃrpÃ¡d Bridge.",
        "The Palatinus strand bath was the first open-air bath in Budapest.",
        "There is a 5.3-kilometer-long rubberized running track around the island.",
        "The Japanese garden was established in the 1970s and features rare plant species.",
        "The island houses a small wildlife park with deer and waterfowl.",
        "The Margaret Island Open-Air Theater hosts prestigious opera and ballet performances in summer."
      ]
    },
  
    factsAdvanced: {
      "de": ["Die Margareteninsel erstreckt sich Ã¼ber eine LÃ¤nge von 2,5 Kilometern in der Donau.", "Der singende Springbrunnen auf der Insel ist einer der grÃ¶ÃŸten seiner Art in Europa.", "Im kleinen Tierpark der Insel kÃ¶nnen Besucher unter anderem Damwild und StÃ¶rche beobachten.", "Die Insel wird durch die MargaretenbrÃ¼cke im SÃ¼den und die ÃrpÃ¡dbrÃ¼cke im Norden erschlossen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "varosliget",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0844, 47.5144],
    name: {"de": "StadtwÃ¤ldchen", "hu": "VÃ¡rosliget", "ro": "Parcul OraÈ™ului", "en": "City Park"},
    image: "/geo-images/hungary/varosliget.webp",
    description: {
      "de": "Das StadtwÃ¤ldchen (VÃ¡rosliget) ist einer der Ã¤ltesten und vielseitigsten Ã¶ffentlichen Parks der Welt und liegt im Herzen von Budapest. Auf einer FlÃ¤che von Ã¼ber 100 Hektar bietet der Park eine beeindruckende Mischung aus Natur, Kultur und Unterhaltung. Zu den bekanntesten SehenswÃ¼rdigkeiten gehÃ¶ren die Burg Vajdahunyad, das prachtvolle SzÃ©chenyi-Heilbad und der Budapester Zoo. Im Winter verwandelt sich der See des Parks in eine der grÃ¶ÃŸten und schÃ¶nsten Kunsteisbahnen Europas. Das StadtwÃ¤ldchen ist ein zentraler Ort fÃ¼r die Freizeitgestaltung der Budapester und beherbergt zudem bedeutende Museen wie das Museum fÃ¼r VÃ¶lkerkunde und das Haus der Ungarischen Musik im Rahmen des Liget-Budapest-Projekts.",
      "hu": "A VÃ¡rosliget a vilÃ¡g egyik elsÅ‘ nyilvÃ¡nos parkja, amely Budapest szÃ­vÃ©ben kÃ­nÃ¡l sokszÃ­nÅ± kikapcsolÃ³dÃ¡si lehetÅ‘sÃ©get. A tÃ¶bb mint 100 hektÃ¡ros terÃ¼leten a termÃ©szet, a kultÃºra Ã©s a szÃ³rakozÃ¡s kÃ¼lÃ¶nleges elegye vÃ¡rja a lÃ¡togatÃ³kat. Legismertebb lÃ¡tnivalÃ³i kÃ¶zÃ© tartozik a Vajdahunyad vÃ¡ra, a monumentÃ¡lis SzÃ©chenyi gyÃ³gyfÃ¼rdÅ‘ Ã©s a FÅ‘vÃ¡rosi Ãllat- Ã©s NÃ¶vÃ©nykert. TÃ©len a VÃ¡rosligeti-tÃ³ EurÃ³pa egyik legnagyobb Ã©s legszebb mÅ±jÃ©gpÃ¡lyÃ¡jÃ¡vÃ¡ alakul Ã¡t. A Liget Budapest projekt keretÃ©ben a park megÃºjul, Ã©s olyan vilÃ¡gszÃ­nvonalÃº Ã©pÃ¼letekkel gazdagodott, mint a NÃ©prajzi MÃºzeum Ã©s a Magyar Zene HÃ¡za, tovÃ¡bb erÅ‘sÃ­tve kulturÃ¡lis kÃ¶zponti szerepÃ©t.",
      "ro": "Parcul OraÈ™ului (VÃ¡rosliget) este unul dintre primele parcuri publice din lume, oferind o gamÄƒ diversÄƒ de activitÄƒÈ›i recreative Ã®n inima Budapestei. Pe o suprafaÈ›Äƒ de peste 100 de hectare, parcul Ã®mbinÄƒ natura, cultura È™i divertismentul Ã®ntr-un mod unic. Printre cele mai cunoscute atracÈ›ii se numÄƒrÄƒ Castelul Vajdahunyad, monumentalele BÄƒi SzÃ©chenyi È™i GrÄƒdina ZoologicÄƒ din Budapesta. Iarna, lacul din parc se transformÄƒ Ã®n unul dintre cele mai mari È™i mai frumoase patinoare artificiale din Europa. ÃŽn cadrul proiectului Liget Budapest, parcul este Ã®n curs de modernizare È™i a fost Ã®mbogÄƒÈ›it cu clÄƒdiri de clasÄƒ mondialÄƒ, precum Muzeul de Etnografie È™i Casa Muzicii Maghiare.",
      "en": "The City Park (VÃ¡rosliget) is one of the world's first public parks, offering a diverse range of recreational activities in the heart of Budapest. Spanning over 100 hectares, the park features a unique blend of nature, culture, and entertainment. Its most famous attractions include Vajdahunyad Castle, the monumental SzÃ©chenyi Thermal Bath, and the Budapest Zoo and Botanical Garden. In winter, the park's lake transforms into one of Europe's largest and most beautiful artificial ice rinks. Under the Liget Budapest project, the park is being revitalized and has been enriched with world-class buildings such as the Museum of Ethnography and the House of Hungarian Music."
    },
    
    descriptionAdvanced: {
      "de": "Das StadtwÃ¤ldchen (VÃ¡rosliget) ist der bedeutendste Stadtpark von Budapest und ein Zentrum fÃ¼r Kultur, Wellness und Freizeit. Entstanden im 19. Jahrhundert, war es einer der ersten Ã¶ffentlichen Parks der Welt und Schauplatz der groÃŸen Millenniumsausstellung von 1896. Im Park befinden sich weltberÃ¼hmte SehenswÃ¼rdigkeiten wie die Burg Vajdahunyad, das SzÃ©chenyi-Heilbad und der Budapester Zoo. Der See im StadtwÃ¤ldchen wird im Winter zur grÃ¶ÃŸten Kunsteisbahn Europas und ist im Sommer ein beliebter Ort zum Bootfahren. In den letzten Jahren wurde der Park durch das Projekt 'Liget Budapest' mit modernen Museen wie dem Haus der Musik modernisiert. Das StadtwÃ¤ldchen ist der beliebteste Treffpunkt fÃ¼r Familien und Touristen, die Natur und Kultur im Herzen von Pest verbinden mÃ¶chten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Das StadtwÃ¤ldchen wurde bereits im frÃ¼hen 19. Jahrhundert als Ã¶ffentlicher Park angelegt.",
        "Die Burg Vajdahunyad wurde ursprÃ¼nglich aus Holz und Pappe fÃ¼r die Millenniumsfeierlichkeiten 1896 erbaut.",
        "Das SzÃ©chenyi-Heilbad ist der grÃ¶ÃŸte Heilbadekomplex in Europa.",
        "Der Budapester Zoo wurde 1866 erÃ¶ffnet und ist einer der Ã¤ltesten der Welt.",
        "Die Kunsteisbahn im StadtwÃ¤ldchen wurde 1870 erÃ¶ffnet.",
        "Das Haus der Ungarischen Musik wurde vom japanischen Architekten Sou Fujimoto entworfen.",
        "Der Park beherbergt das monumentale Denkmal der ungarischen Revolution von 1956.",
        "Das Museum der Bildenden KÃ¼nste liegt direkt am Eingang des Parks am Heldenplatz.",
        "Im Park befindet sich auch das berÃ¼hmte Restaurant Gundel, ein Flaggschiff der ungarischen Gastronomie.",
        "Das Liget-Budapest-Projekt ist das grÃ¶ÃŸte kulturelle Stadtentwicklungsprojekt in Europa."
      ],
      "hu": [
        "A VÃ¡rosliget a 19. szÃ¡zad elejÃ©n vÃ¡lt a vilÃ¡g egyik elsÅ‘ nyilvÃ¡nos nÃ©pkertjÃ©vÃ©.",
        "Vajdahunyad vÃ¡ra eredetileg fÃ¡bÃ³l Ã©s kartonbÃ³l Ã©pÃ¼lt az 1896-os millenniumi Ã¼nnepsÃ©gekre.",
        "A SzÃ©chenyi gyÃ³gyfÃ¼rdÅ‘ EurÃ³pa legnagyobb gyÃ³gyfÃ¼rdÅ‘-komplexuma.",
        "A FÅ‘vÃ¡rosi Ãllat- Ã©s NÃ¶vÃ©nykert 1866-ban nyÃ­lt meg, a vilÃ¡g egyik legrÃ©gebbi Ã¡llatkertje.",
        "A VÃ¡rosligeti MÅ±jÃ©gpÃ¡lya 1870 Ã³ta vÃ¡rja a korcsolyÃ¡zÃ³kat.",
        "A Magyar Zene HÃ¡za a neves japÃ¡n Ã©pÃ­tÃ©sz, Sou Fujimoto tervei alapjÃ¡n kÃ©szÃ¼lt.",
        "A parkban talÃ¡lhatÃ³ az 1956-os forradalom Ã©s szabadsÃ¡gharc monumentÃ¡lis emlÃ©kmÅ±ve.",
        "A SzÃ©pmÅ±vÃ©szeti MÃºzeum kÃ¶zvetlenÃ¼l a Liget bejÃ¡ratÃ¡nÃ¡l, a HÅ‘sÃ¶k terÃ©n Ã¡ll.",
        "Itt talÃ¡lhatÃ³ a vilÃ¡ghÃ­rÅ± Gundel Ã©tterem, a magyar gasztronÃ³mia egyik fellegvÃ¡ra.",
        "A Liget Budapest projekt EurÃ³pa legnagyobb lÃ©ptÃ©kÅ± kulturÃ¡lis vÃ¡rosfejlesztÃ©si programja."
      ],
      "ro": [
        "Parcul OraÈ™ului a devenit unul dintre primele parcuri publice din lume la Ã®nceputul secolului al XIX-lea.",
        "Castelul Vajdahunyad a fost construit iniÈ›ial din lemn È™i carton pentru festivitÄƒÈ›ile mileniului din 1896.",
        "BÄƒile SzÃ©chenyi reprezintÄƒ cel mai mare complex balnear curativ din Europa.",
        "GrÄƒdina ZoologicÄƒ din Budapesta a fost deschisÄƒ Ã®n 1866, fiind una dintre cele mai vechi din lume.",
        "Patinoarul artificial din Parcul OraÈ™ului a fost inaugurat Ã®n 1870.",
        "Casa Muzicii Maghiare a fost proiectatÄƒ de renumitul arhitect japonez Sou Fujimoto.",
        "Parcul gÄƒzduieÈ™te monumentul monumental al RevoluÈ›iei Maghiare din 1956.",
        "Muzeul de Arte Frumoase este situat chiar la intrarea Ã®n parc, Ã®n PiaÈ›a Eroilor.",
        "ÃŽn parc se aflÄƒ È™i faimosul restaurant Gundel, un simbol al gastronomiei maghiare.",
        "Proiectul Liget Budapest este cel mai mare program de dezvoltare urbanÄƒ culturalÄƒ din Europa."
      ],
      "en": [
        "The City Park became one of the world's first public parks in the early 19th century.",
        "Vajdahunyad Castle was originally built from wood and cardboard for the 1896 Millennium celebrations.",
        "The SzÃ©chenyi Thermal Bath is the largest medicinal bath complex in Europe.",
        "The Budapest Zoo and Botanical Garden opened in 1866, making it one of the oldest in the world.",
        "The City Park Ice Rink has been welcoming skaters since 1870.",
        "The House of Hungarian Music was designed by the renowned Japanese architect Sou Fujimoto.",
        "The park is home to the monumental memorial of the 1956 Hungarian Revolution.",
        "The Museum of Fine Arts stands directly at the park's entrance on Heroes' Square.",
        "The world-famous Gundel Restaurant, a flagship of Hungarian gastronomy, is located here.",
        "The Liget Budapest project is Europe's largest-scale cultural urban development program."
      ]
    },
  
    factsAdvanced: {
      "de": ["Das StadtwÃ¤ldchen ist der Standort des berÃ¼hmten SzÃ©chenyi-Heilbades, des grÃ¶ÃŸten Thermalbads Europas.", "Im Park befindet sich das Denkmal fÃ¼r den unbekannten Chronisten Anonymus.", "Der Millennium-Denkmal-Komplex am Eingang des Parks ist ein UNESCO-Weltkulturerbe.", "Das Projekt 'Liget Budapest' ist das derzeit grÃ¶ÃŸte kulturelle Stadtentwicklungsprojekt in Europa."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "andrassy-ut",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.065, 47.5069],
    name: {"de": "AndrÃ¡ssy-StraÃŸe", "hu": "AndrÃ¡ssy Ãºt", "ro": "Bulevardul AndrÃ¡ssy", "en": "AndrÃ¡ssy Avenue"},
    image: "/geo-images/hungary/andrassy-ut.webp",
    description: {
      "de": "Die AndrÃ¡ssy-StraÃŸe ist der eleganteste Boulevard von Budapest und gehÃ¶rt seit 2002 zum UNESCO-Welterbe. Sie verbindet das Stadtzentrum mit dem Heldenplatz und ist gesÃ¤umt von prÃ¤chtigen Villen, exklusiven Boutiquen und bedeutenden kulturellen Institutionen wie der Ungarischen Staatsoper. Die StraÃŸe wurde im spÃ¤ten 19. Jahrhundert nach dem Vorbild der Pariser Boulevards angelegt und spiegelt den Glanz der Ã¶sterreichisch-ungarischen Monarchie wider. Unter der AndrÃ¡ssy-StraÃŸe verlÃ¤uft die historische Millenniums-U-Bahn (M1), die Ã¤lteste elektrische U-Bahn Kontinentaleuropas. Ein Spaziergang entlang dieser PrachtstraÃŸe bietet einen faszinierenden Einblick in die Architektur des Historismus und das pulsierende Leben der ungarischen Hauptstadt.",
      "hu": "Az AndrÃ¡ssy Ãºt Budapest legelegÃ¡nsabb sugÃ¡rÃºtja, amely 2002 Ã³ta az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezi. A belvÃ¡rost kÃ¶ti Ã¶ssze a HÅ‘sÃ¶k terÃ©vel, mentÃ©n pedig lenyÅ±gÃ¶zÅ‘ palotÃ¡k, exkluzÃ­v Ã¼zletek Ã©s olyan jelentÅ‘s kulturÃ¡lis intÃ©zmÃ©nyek talÃ¡lhatÃ³k, mint a Magyar Ãllami OperahÃ¡z. Az utat a 19. szÃ¡zad vÃ©gÃ©n alakÃ­tottÃ¡k ki pÃ¡rizsi mintÃ¡ra, tÃ¼krÃ¶zve az OsztrÃ¡k-Magyar Monarchia fÃ©nykorÃ¡t. Az AndrÃ¡ssy Ãºt alatt fut a Millenniumi FÃ¶ldalatti VasÃºt (M1), amely a kontinens elsÅ‘ elektromos fÃ¶ldalatti vasÃºtja volt. Egy sÃ©ta ezen a dÃ­szes sugÃ¡rÃºton felejthetetlen Ã©lmÃ©nyt nyÃºjt a historizÃ¡lÃ³ Ã©pÃ­tÃ©szet kedvelÅ‘inek Ã©s a magyar fÅ‘vÃ¡ros lÃ¼ktetÃ©sÃ©t keresÅ‘knek.",
      "ro": "Bulevardul AndrÃ¡ssy este cea mai elegantÄƒ arterÄƒ din Budapesta, fiind inclusÄƒ Ã®n patrimoniul mondial UNESCO din anul 2002. ConecteazÄƒ centrul oraÈ™ului cu PiaÈ›a Eroilor È™i este mÄƒrginit de palate splendide, buticuri exclusive È™i instituÈ›ii culturale importante, precum Opera de Stat MaghiarÄƒ. Bulevardul a fost amenajat la sfÃ¢rÈ™itul secolului al XIX-lea dupÄƒ modelul bulevardelor pariziene, reflectÃ¢nd strÄƒlucirea Monarhiei Austro-Ungare. Pe sub Bulevardul AndrÃ¡ssy circulÄƒ metroul mileniului (M1), prima linie de metrou electric din Europa continentalÄƒ. O plimbare de-a lungul acestui bulevard oferÄƒ o perspectivÄƒ fascinantÄƒ asupra arhitecturii historiste È™i a vieÈ›ii vibrante a capitalei maghiare.",
      "en": "AndrÃ¡ssy Avenue is the most elegant boulevard in Budapest and has been a UNESCO World Heritage site since 2002. It connects the city center with Heroes' Square and is lined with magnificent villas, exclusive boutiques, and significant cultural institutions such as the Hungarian State Opera House. The avenue was developed in the late 19th century, modeled after Parisian boulevards, reflecting the golden age of the Austro-Hungarian Monarchy. Beneath AndrÃ¡ssy Avenue runs the historic Millennium Underground Railway (M1), the first electric underground line in continental Europe. A stroll along this grand avenue offers a fascinating insight into Historicist architecture and the pulsating life of the Hungarian capital."
    },
    
    descriptionAdvanced: {
      "de": "Die AndrÃ¡ssy-StraÃŸe ist die eleganteste BoulevardstraÃŸe von Budapest und ein herausragendes Beispiel stÃ¤dtebaulicher Eleganz des 19. Jahrhunderts. Sie verbindet den Elisabethenplatz im Stadtzentrum mit dem Heldenplatz am StadtwÃ¤ldchen und wird von prachtvollen Neorenaissance-PalÃ¤sten gesÃ¤umt. Entlang der Allee befinden sich bedeutende kulturelle Einrichtungen wie die Ungarische Staatsoper und das Haus des Terrors. Die StraÃŸe ist in drei Abschnitte unterteilt, die von luxuriÃ¶sen GeschÃ¤ften bis hin zu aristokratischen Villen mit GÃ¤rten reichen. Unter der AndrÃ¡ssy-StraÃŸe verlÃ¤uft die historische U-Bahn-Linie M1, die erste elektrische Metro auf dem europÃ¤ischen Kontinent. Als UNESCO-Welterbe geschÃ¼tzt, spiegelt die StraÃŸe die goldene Ã„ra Budapests am Ende der Monarchie wider.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Die StraÃŸe wurde 1876 eingeweiht und nach Premierminister Gyula AndrÃ¡ssy benannt.",
        "Die Ungarische Staatsoper ist eines der prÃ¤chtigsten GebÃ¤ude an der StraÃŸe.",
        "Die Millenniums-U-Bahn (M1) wurde 1896 zur Tausendjahrfeier Ungarns erÃ¶ffnet.",
        "Die StraÃŸe ist in drei Abschnitte mit unterschiedlichem Charakter unterteilt.",
        "Zahlreiche Botschaften und diplomatische Vertretungen haben hier ihren Sitz.",
        "Das Haus des Terrors, ein Museum zur Geschichte der Diktaturen, liegt an der AndrÃ¡ssy-StraÃŸe.",
        "Die StraÃŸe ist 2,4 Kilometer lang und fÃ¼hrt direkt zum StadtwÃ¤ldchen.",
        "Die Architektur ist geprÃ¤gt von Neorenaissance- und eklektischen Stilen.",
        "Die AndrÃ¡ssy-StraÃŸe ist ein Zentrum fÃ¼r Luxus-Shopping in Budapest.",
        "Die gesamte StraÃŸe steht unter Denkmalschutz und bewahrt ihr historisches Erscheinungsbild."
      ],
      "hu": [
        "Az utat 1876-ban adtÃ¡k Ã¡t, Ã©s AndrÃ¡ssy Gyula miniszterelnÃ¶krÅ‘l neveztÃ©k el.",
        "A Magyar Ãllami OperahÃ¡z az Ãºt egyik legimpozÃ¡nsabb Ã©pÃ¼lete.",
        "A kisfÃ¶ldalatti (M1) 1896-ban, a honfoglalÃ¡s ezredik Ã©vfordulÃ³jÃ¡ra kÃ©szÃ¼lt el.",
        "Az Ãºt hÃ¡rom, jellegÃ©ben jÃ³l elkÃ¼lÃ¶nÃ­thetÅ‘ szakaszra oszlik.",
        "SzÃ¡mos nagykÃ¶vetsÃ©g Ã©s diplomÃ¡ciai kÃ©pviselet talÃ¡lhatÃ³ a sugÃ¡rÃºt mentÃ©n.",
        "Itt talÃ¡lhatÃ³ a Terror HÃ¡za MÃºzeum, amely a diktatÃºrÃ¡k Ã¡ldozatainak Ã¡llÃ­t emlÃ©ket.",
        "A sugÃ¡rÃºt hossza 2,4 kilomÃ©ter, Ã©s egyenesen a VÃ¡rosligetbe vezet.",
        "Ã‰pÃ­tÃ©szetÃ©t a neoreneszÃ¡nsz Ã©s az eklektika stÃ­lusjegyei hatÃ¡rozzÃ¡k meg.",
        "Az AndrÃ¡ssy Ãºt a luxusvÃ¡sÃ¡rlÃ¡s Ã©s a divat kÃ¶zpontja Budapesten.",
        "A teljes sugÃ¡rÃºt mÅ±emlÃ©ki vÃ©delem alatt Ã¡ll, megÅ‘rizve tÃ¶rtÃ©nelmi arculatÃ¡t."
      ],
      "ro": [
        "Bulevardul a fost inaugurat Ã®n 1876 È™i numit dupÄƒ prim-ministrul Gyula AndrÃ¡ssy.",
        "Opera de Stat MaghiarÄƒ este una dintre cele mai impresionante clÄƒdiri de pe bulevard.",
        "Metroul mileniului (M1) a fost deschis Ã®n 1896 pentru a celebra o mie de ani de istorie maghiarÄƒ.",
        "Bulevardul este Ã®mpÄƒrÈ›it Ã®n trei secÈ›iuni cu caractere distincte.",
        "Numeroase ambasade È™i reprezentanÈ›e diplomatice Ã®È™i au sediul aici.",
        "Casa Terorii, un muzeu dedicat victimelor dictaturilor, se aflÄƒ pe acest bulevard.",
        "Bulevardul are o lungime de 2,4 kilometri È™i duce direct cÄƒtre Parcul OraÈ™ului.",
        "Arhitectura este dominatÄƒ de stilurile neorenascentist È™i eclectic.",
        "Bulevardul AndrÃ¡ssy este centrul cumpÄƒrÄƒturilor de lux din Budapesta.",
        "ÃŽntregul bulevard este protejat ca monument istoric, pÄƒstrÃ¢ndu-È™i aspectul original."
      ],
      "en": [
        "The avenue was inaugurated in 1876 and named after Prime Minister Gyula AndrÃ¡ssy.",
        "The Hungarian State Opera House is one of the most magnificent buildings on the avenue.",
        "The Millennium Underground (M1) was opened in 1896 for the thousandth anniversary of Hungary.",
        "The avenue is divided into three sections, each with a distinct character.",
        "Numerous embassies and diplomatic missions are located along the boulevard.",
        "The House of Terror Museum, commemorating the victims of dictatorships, is situated here.",
        "The avenue is 2.4 kilometers long and leads directly to the City Park.",
        "The architecture is characterized by Neo-Renaissance and Eclectic styles.",
        "AndrÃ¡ssy Avenue is the hub for luxury shopping and high fashion in Budapest.",
        "The entire avenue is under monument protection, preserving its historic appearance."
      ]
    },
  
    factsAdvanced: {
      "de": ["Die AndrÃ¡ssy-StraÃŸe wurde 2002 als Teil des Budapester Ensembles zum UNESCO-Welterbe erklÃ¤rt.", "Die StraÃŸe wurde nach dem ungarischen MinisterprÃ¤sidenten Graf Gyula AndrÃ¡ssy benannt.", "Viele der prachtvollen GebÃ¤ude wurden von den berÃ¼hmtesten Architekten ihrer Zeit, wie MiklÃ³s Ybl, entworfen.", "Die Allee ist Ã¼ber 2,3 Kilometer lang und ein Inbegriff fÃ¼r den europÃ¤ischen Boulevardstil."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nyugati-palyaudvar",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0583, 47.5106],
    name: {"de": "Westbahnhof", "hu": "Nyugati pÃ¡lyaudvar", "ro": "Gara de Vest", "en": "Nyugati Railway Station"},
    description: {
      "de": "Der Westbahnhof (Nyugati pÃ¡lyaudvar) ist einer der architektonisch beeindruckendsten BahnhÃ¶fe in Budapest und ein bedeutendes Denkmal der Eisenbahngeschichte. Das heutige GebÃ¤ude wurde von der Firma von Gustave Eiffel entworfen und im Jahr 1877 eingeweiht. Besonders markant ist die monumentale Eisen- und Glaskonstruktion der Bahnhofshalle, die zur Zeit ihrer Errichtung eine technische Meisterleistung darstellte. Der Bahnhof liegt am Nyugati-Platz und dient als wichtiger Knotenpunkt fÃ¼r den nationalen und internationalen Zugverkehr sowie fÃ¼r den Ã¶ffentlichen Nahverkehr der Stadt. Neben seiner funktionalen Bedeutung beherbergt der Bahnhof auch eine der schÃ¶nsten McDonald's-Filialen der Welt, die in einem ehemaligen Wartesaal untergebracht ist.",
      "hu": "A Nyugati pÃ¡lyaudvar Budapest egyik legimpozÃ¡nsabb Ã©pÃ­tÃ©szeti alkotÃ¡sa Ã©s a vasÃºttÃ¶rtÃ©net kiemelkedÅ‘ emlÃ©ke. A mai Ã©pÃ¼letet Gustave Eiffel cÃ©ge tervezte, Ã©s 1877-ben adtÃ¡k Ã¡t a forgalomnak. KÃ¼lÃ¶nÃ¶sen lenyÅ±gÃ¶zÅ‘ a pÃ¡lyaudvar monumentÃ¡lis vas- Ã©s Ã¼vegszerkezetÅ± csarnoka, amely Ã©pÃ­tÃ©se idejÃ©n technikai bravÃºrnak szÃ¡mÃ­tott. A pÃ¡lyaudvar a Nyugati tÃ©ren talÃ¡lhatÃ³, Ã©s fontos csomÃ³pontja a belfÃ¶ldi Ã©s nemzetkÃ¶zi vasÃºti kÃ¶zlekedÃ©snek, valamint a vÃ¡rosi tÃ¶megkÃ¶zlekedÃ©snek is. FunkcionÃ¡lis jelentÅ‘sÃ©ge mellett a pÃ¡lyaudvar ad otthont a vilÃ¡g egyik legszebb McDonald's Ã©ttermÃ©nek is, amely az egykori elegÃ¡ns vÃ¡rÃ³teremben kapott helyet.",
      "ro": "Gara de Vest (Nyugati pÃ¡lyaudvar) este una dintre cele mai impresionante realizÄƒri arhitecturale din Budapesta È™i un monument remarcabil al istoriei feroviare. ClÄƒdirea actualÄƒ a fost proiectatÄƒ de compania lui Gustave Eiffel È™i inauguratÄƒ Ã®n anul 1877. ImpresioneazÄƒ Ã®n mod deosebit hala monumentalÄƒ din fier È™i sticlÄƒ a gÄƒrii, care a reprezentat o performanÈ›Äƒ tehnicÄƒ la momentul construcÈ›iei sale. Gara este situatÄƒ Ã®n PiaÈ›a Nyugati È™i serveÈ™te drept nod important pentru traficul feroviar naÈ›ional È™i internaÈ›ional, precum È™i pentru transportul public urban. Pe lÃ¢ngÄƒ importanÈ›a sa funcÈ›ionalÄƒ, gara gÄƒzduieÈ™te È™i unul dintre cele mai frumoase restaurante McDonald's din lume, situat Ã®ntr-o fostÄƒ salÄƒ de aÈ™teptare elegantÄƒ.",
      "en": "The Nyugati Railway Station (West Station) is one of Budapest's most architecturally stunning buildings and a prominent monument of railway history. The current building was designed by Gustave Eiffel's company and inaugurated in 1877. Particularly impressive is the station's monumental iron and glass hall, which was a technical feat at the time of its construction. Located at Nyugati Square, the station serves as a major hub for national and international rail traffic, as well as for the city's public transport. Beyond its functional significance, the station also houses one of the world's most beautiful McDonald's restaurants, located in a former elegant waiting room."
    },
    
    descriptionAdvanced: {
      "de": "Der Westbahnhof (Nyugati pÃ¡lyaudvar) in Budapest ist ein architektonisches Meisterwerk des ausgehenden 19. Jahrhunderts und ein bedeutender Verkehrsknotenpunkt. Errichtet von der Firma Gustave Eiffels, besticht das BahnhofsgebÃ¤ude durch seine beeindruckende Stahl-Glas-Konstruktion der Empfangshalle. Die Kombination aus historischer Architektur und modernem Reisekomfort macht den Nyugati zu einem der schÃ¶nsten BahnhÃ¶fe Europas. In einem FlÃ¼gel des Bahnhofs befindet sich eine der prachtvollsten McDonaldâ€™s-Filialen weltweit, die in einem ehemaligen Speisesaal untergebracht ist. Der Bahnhof liegt am Nyugati-Platz, einem der belebtesten PlÃ¤tze von Pest, und verbindet die Hauptstadt mit dem Norden und Osten Ungarns. Trotz zahlreicher Kriege und Umbauten hat das GebÃ¤ude seinen ursprÃ¼nglichen Glanz und seine architektonische IntegritÃ¤t bewahrt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Der Bahnhof wurde an der Stelle des ersten ungarischen Bahnhofs von 1846 errichtet.",
        "Die Eisenkonstruktion wurde in Paris vorgefertigt und in Budapest montiert.",
        "August de Serres war der leitende Architekt des Projekts.",
        "Die Bahnhofshalle hat eine Spannweite von 25 Metern.",
        "Der Bahnhof war der Ausgangspunkt der ersten ungarischen Eisenbahnlinie nach VÃ¡c.",
        "Das GebÃ¤ude verbindet Glas- und Eisenarchitektur mit klassischen Backsteinfassaden.",
        "Die McDonald's-Filiale im Bahnhof gilt oft als die schÃ¶nste weltweit.",
        "Der Bahnhof wurde in den letzten Jahren umfassend renoviert, um seinen alten Glanz wiederherzustellen.",
        "Er ist ein wichtiger Drehort fÃ¼r internationale Filmproduktionen.",
        "Direkt neben dem Bahnhof befindet sich das Einkaufszentrum Westend, eines der grÃ¶ÃŸten der Stadt."
      ],
      "hu": [
        "A pÃ¡lyaudvar az 1846-ban megnyitott elsÅ‘ magyar vasÃºtÃ¡llomÃ¡s helyÃ©n Ã©pÃ¼lt.",
        "A vasszerkezetet PÃ¡rizsban gyÃ¡rtottÃ¡k le, Ã©s Budapesten szereltÃ©k Ã¶ssze.",
        "A projekt vezetÅ‘ Ã©pÃ­tÃ©sze az osztrÃ¡k August de Serres volt.",
        "A vÃ¡gÃ¡nycsarnok fesztÃ¡volsÃ¡ga 25 mÃ©ter.",
        "Innen indult az elsÅ‘ magyarorszÃ¡gi vasÃºtvonal VÃ¡c irÃ¡nyÃ¡ba.",
        "Az Ã©pÃ¼let az Ã¼veg- Ã©s vasarchitektÃºrÃ¡t Ã¶tvÃ¶zi a klasszikus tÃ©glaarchitektÃºrÃ¡val.",
        "A pÃ¡lyaudvaron talÃ¡lhatÃ³ McDonald's Ã©ttermet a vilÃ¡g legszebbjei kÃ¶zÃ¶tt tartjÃ¡k szÃ¡mon.",
        "Az Ã©pÃ¼letet az elmÃºlt Ã©vekben jelentÅ‘sen felÃºjÃ­tottÃ¡k, visszaadva eredeti pompÃ¡jÃ¡t.",
        "A pÃ¡lyaudvar nÃ©pszerÅ± forgatÃ¡si helyszÃ­n nemzetkÃ¶zi filmprodukciÃ³k szÃ¡mÃ¡ra is.",
        "KÃ¶zvetlenÃ¼l mellette talÃ¡lhatÃ³ a Westend bevÃ¡sÃ¡rlÃ³kÃ¶zpont, a vÃ¡ros egyik legnagyobb Ã¼zletkÃ¶zpontja."
      ],
      "ro": [
        "Gara a fost construitÄƒ pe locul primei staÈ›ii de cale feratÄƒ maghiare din 1846.",
        "Structura de fier a fost prefabricatÄƒ la Paris È™i asamblatÄƒ la Budapesta.",
        "Arhitectul principal al proiectului a fost August de Serres.",
        "Hala liniilor are o deschidere de 25 de metri.",
        "De aici a plecat prima linie de cale feratÄƒ din Ungaria cÄƒtre VÃ¡c.",
        "ClÄƒdirea Ã®mbinÄƒ arhitectura din sticlÄƒ È™i fier cu faÈ›ade clasice din cÄƒrÄƒmidÄƒ.",
        "Restaurantul McDonald's din garÄƒ este adesea considerat cel mai frumos din lume.",
        "Gara a fost renovatÄƒ extensiv Ã®n ultimii ani pentru a-È™i recÄƒpÄƒta strÄƒlucirea de odinioarÄƒ.",
        "Este o locaÈ›ie popularÄƒ de filmare pentru producÈ›ii cinematografice internaÈ›ionale.",
        "Chiar lÃ¢ngÄƒ garÄƒ se aflÄƒ centrul comercial Westend, unul dintre cele mai mari din oraÈ™."
      ],
      "en": [
        "The station was built on the site of Hungary's first railway station from 1846.",
        "The iron structure was prefabricated in Paris and assembled in Budapest.",
        "The lead architect of the project was August de Serres.",
        "The train hall has a span of 25 meters.",
        "The first Hungarian railway line to VÃ¡c departed from this location.",
        "The building combines glass and iron architecture with classic brick facades.",
        "The McDonald's restaurant in the station is often cited as the most beautiful in the world.",
        "The station has undergone extensive renovation in recent years to restore its original glory.",
        "It is a popular filming location for international movie productions.",
        "The Westend shopping center, one of the city's largest, is located directly next to the station."
      ]
    },
  
    factsAdvanced: {
      "de": ["Die Eisenkonstruktion des Bahnhofs wurde im Pariser BÃ¼ro von Gustave Eiffel entworfen.", "Der Bahnhof wurde im Jahr 1877 an der Stelle der ersten ungarischen Eisenbahnstation erÃ¶ffnet.", "Die majestÃ¤tische Glashalle Ã¼berspannt die Bahnsteige ohne stÃ¼tzende Zwischenpfeiler.", "Das GebÃ¤ude wurde in den letzten Jahren umfassend restauriert, um seine historische SchÃ¶nheit zu bewahren."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "lanchid",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.0436, 47.499],
    name: {"de": "KettenbrÃ¼cke", "hu": "LÃ¡nchÃ­d", "ro": "Podul cu LanÈ›uri", "en": "Chain Bridge"},
    image: "/geo-images/hungary/lanchid.webp",
    description: {
      "de": "Die SzÃ©chenyi-KettenbrÃ¼cke ist die Ã¤lteste und bekannteste BrÃ¼cke Ã¼ber die Donau in Budapest und ein Symbol der ungarischen Hauptstadt. Sie wurde 1849 eingeweiht und war die erste dauerhafte Verbindung zwischen den StÃ¤dten Buda und Pest, was maÃŸgeblich zur Vereinigung der Stadt beitrug. Die BrÃ¼cke wurde auf Initiative des Grafen IstvÃ¡n SzÃ©chenyi nach den PlÃ¤nen des englischen Ingenieurs William Tierney Clark errichtet. Mit ihren charakteristischen LÃ¶wenstatuen an den BrÃ¼ckentoren und ihrer eleganten Kettenkonstruktion ist sie ein Meisterwerk der Ingenieurskunst des 19. Jahrhunderts. Als Teil des UNESCO-Welterbes bietet die KettenbrÃ¼cke einen der romantischsten Spazierwege der Stadt mit einem atemberaubenden Blick auf das Panorama von Budapest.",
      "hu": "A SzÃ©chenyi lÃ¡nchÃ­d a Duna legidÅ‘sebb Ã©s legismertebb hÃ­dja Budapesten, a magyar fÅ‘vÃ¡ros egyik legfontosabb jelkÃ©pe. 1849-ben adtÃ¡k Ã¡t, Ã©s ez volt az elsÅ‘ Ã¡llandÃ³ Ã¶sszekÃ¶ttetÃ©s Buda Ã©s Pest kÃ¶zÃ¶tt, ami dÃ¶ntÅ‘ szerepet jÃ¡tszott a vÃ¡ros kÃ©sÅ‘bbi egyesÃ­tÃ©sÃ©ben. A hÃ­d grÃ³f SzÃ©chenyi IstvÃ¡n kezdemÃ©nyezÃ©sÃ©re, az angol William Tierney Clark tervei alapjÃ¡n Ã©pÃ¼lt meg. Jellegzetes kÅ‘oroszlÃ¡njai Ã©s elegÃ¡ns lÃ¡ncszerkezete a 19. szÃ¡zadi mÃ©rnÃ¶ki tudomÃ¡ny remekmÅ±vÃ©vÃ© teszik. Az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szekÃ©nt a LÃ¡nchÃ­d a vÃ¡ros egyik legromantikusabb sÃ©taÃºtvonala, ahonnan lenyÅ±gÃ¶zÅ‘ kilÃ¡tÃ¡s nyÃ­lik Budapest panorÃ¡mÃ¡jÃ¡ra.",
      "ro": "Podul cu LanÈ›uri SzÃ©chenyi este cel mai vechi È™i cel mai cunoscut pod peste DunÄƒre din Budapesta, fiind un simbol al capitalei maghiare. Inaugurat Ã®n 1849, a fost prima legÄƒturÄƒ permanentÄƒ Ã®ntre oraÈ™ele Buda È™i Pesta, jucÃ¢nd un rol decisiv Ã®n unificarea oraÈ™ului. Podul a fost construit la iniÈ›iativa contelui IstvÃ¡n SzÃ©chenyi, dupÄƒ planurile inginerului englez William Tierney Clark. Cu statuile sale caracteristice de lei de la porÈ›ile podului È™i structura sa elegantÄƒ cu lanÈ›uri, este o capodoperÄƒ a ingineriei din secolul al XIX-lea. Ca parte a patrimoniului mondial UNESCO, Podul cu LanÈ›uri oferÄƒ una dintre cele mai romantice rute de plimbare din oraÈ™, cu o vedere uluitoare asupra panoramei Budapestei.",
      "en": "The SzÃ©chenyi Chain Bridge is the oldest and most famous bridge across the Danube in Budapest and a symbol of the Hungarian capital. Inaugurated in 1849, it was the first permanent connection between the cities of Buda and Pest, playing a crucial role in the unification of the city. The bridge was built on the initiative of Count IstvÃ¡n SzÃ©chenyi, based on the designs of English engineer William Tierney Clark. With its characteristic lion statues at the bridgeheads and its elegant chain construction, it is a masterpiece of 19th-century engineering. As part of the UNESCO World Heritage site, the Chain Bridge offers one of the city's most romantic walking routes with a breathtaking view of the Budapest panorama."
    },
    
    descriptionAdvanced: {
      "de": "Die KettenbrÃ¼cke (SzÃ©chenyi lÃ¡nchÃ­d) ist die Ã¤lteste und berÃ¼hmteste der Budapester BrÃ¼cken Ã¼ber die Donau und ein Symbol der ungarischen Einheit. Sie wurde 1849 eingeweiht und war die erste permanente Verbindung zwischen den StÃ¤dten Buda und Pest, was die Entwicklung zur modernen Metropole maÃŸgeblich beschleunigte. Die BrÃ¼cke wurde auf Initiative von Graf IstvÃ¡n SzÃ©chenyi errichtet und vom englischen Ingenieur William Tierney Clark entworfen. Besonders markant sind die massiven TriumphbÃ¶gen und die stolzen LÃ¶wenstatuen, die die BrÃ¼ckenkÃ¶pfe bewachen. Nachts ist die KettenbrÃ¼cke prachtvoll beleuchtet und bietet einen der romantischsten Anblicke von Budapest. Sie ist nicht nur ein technisches Denkmal, sondern auch ein HerzstÃ¼ck der nationalen IdentitÃ¤t Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Die BrÃ¼cke wurde nach dem ungarischen Staatsmann IstvÃ¡n SzÃ©chenyi benannt.",
        "William Tierney Clark entworfen, Adam Clark leitete den Bau.",
        "Die LÃ¶wenstatuen an den Enden der BrÃ¼cke wurden von JÃ¡nos MarschalkÃ³ geschaffen.",
        "WÃ¤hrend des Zweiten Weltkriegs wurde die BrÃ¼cke von deutschen Truppen gesprengt.",
        "Die BrÃ¼cke wurde 1949, genau 100 Jahre nach ihrer ersten Einweihung, wiedererÃ¶ffnet.",
        "Die Spannweite zwischen den Pfeilern betrÃ¤gt 202 Meter.",
        "Die KettenbrÃ¼cke war bei ihrer ErÃ¶ffnung eine der grÃ¶ÃŸten HÃ¤ngebrÃ¼cken der Welt.",
        "Einer Legende nach haben die LÃ¶wen der BrÃ¼cke keine Zungen.",
        "Die BrÃ¼cke ist nachts wunderschÃ¶n beleuchtet und ein beliebtes Fotomotiv.",
        "Sie verbindet den Roosevelt-Platz (heute SzÃ©chenyi-Platz) in Pest mit dem Adam-Clark-Platz in Buda."
      ],
      "hu": [
        "A hidat a 'legnagyobb magyarrÃ³l', SzÃ©chenyi IstvÃ¡nrÃ³l neveztÃ©k el.",
        "William Tierney Clark tervezte, az Ã©pÃ­tkezÃ©st pedig Clark ÃdÃ¡m irÃ¡nyÃ­totta.",
        "A hÃ­dfÅ‘ket dÃ­szÃ­tÅ‘ kÅ‘oroszlÃ¡nokat MarschalkÃ³ JÃ¡nos szobrÃ¡szmÅ±vÃ©sz kÃ©szÃ­tette.",
        "A mÃ¡sodik vilÃ¡ghÃ¡borÃº vÃ©gÃ©n a visszavonulÃ³ nÃ©met csapatok felrobbantottÃ¡k a hidat.",
        "A hidat 1949-ben, az eredeti Ã¡tadÃ¡s 100. Ã©vfordulÃ³jÃ¡n nyitottÃ¡k meg Ãºjra.",
        "A pillÃ©rek kÃ¶zÃ¶tti legnagyobb tÃ¡volsÃ¡g 202 mÃ©ter.",
        "ÃtadÃ¡sakor a LÃ¡nchÃ­d a vilÃ¡g egyik legnagyobb fÃ¼ggÅ‘hÃ­dja volt.",
        "A legenda szerint a hÃ­d oroszlÃ¡njainak nincs nyelve, bÃ¡r ez valÃ³jÃ¡ban nem igaz.",
        "A hÃ­d Ã©jszakai kivilÃ¡gÃ­tÃ¡sa Budapest egyik legszebb lÃ¡tvÃ¡nya.",
        "A pesti SzÃ©chenyi IstvÃ¡n teret kÃ¶ti Ã¶ssze a budai Clark ÃdÃ¡m tÃ©rrel."
      ],
      "ro": [
        "Podul a fost numit dupÄƒ omul de stat maghiar IstvÃ¡n SzÃ©chenyi.",
        "Proiectat de William Tierney Clark, construcÈ›ia a fost coordonatÄƒ de Adam Clark.",
        "Statuile de lei de la capetele podului au fost create de sculptorul JÃ¡nos MarschalkÃ³.",
        "La sfÃ¢rÈ™itul celui de-al Doilea RÄƒzboi Mondial, podul a fost aruncat Ã®n aer de trupele germane.",
        "Podul a fost redeschis Ã®n 1949, exact la 100 de ani de la prima sa inaugurare.",
        "Deschiderea maximÄƒ Ã®ntre piloni este de 202 metri.",
        "La momentul inaugurÄƒrii, Podul cu LanÈ›uri era unul dintre cele mai mari poduri suspendate din lume.",
        "Conform unei legende, leii de pe pod nu au limbi, deÈ™i acest lucru nu este adevÄƒrat.",
        "Podul este iluminat superb noaptea È™i este un subiect popular pentru fotografii.",
        "ConecteazÄƒ PiaÈ›a SzÃ©chenyi IstvÃ¡n din Pesta cu PiaÈ›a Adam Clark din Buda."
      ],
      "en": [
        "The bridge was named after the Hungarian statesman IstvÃ¡n SzÃ©chenyi.",
        "Designed by William Tierney Clark, construction was supervised by Adam Clark.",
        "The lion statues at the bridgeheads were created by sculptor JÃ¡nos MarschalkÃ³.",
        "At the end of World War II, the bridge was blown up by retreating German troops.",
        "The bridge was reopened in 1949, exactly 100 years after its original inauguration.",
        "The largest span between the pillars is 202 meters.",
        "At its opening, the Chain Bridge was one of the largest suspension bridges in the world.",
        "According to legend, the bridge's lions have no tongues, though this is not true.",
        "The bridge is beautifully illuminated at night and is a popular subject for photography.",
        "It connects SzÃ©chenyi IstvÃ¡n Square in Pest with Adam Clark Square in Buda."
      ]
    },
  
    factsAdvanced: {
      "de": ["Die KettenbrÃ¼cke war bei ihrer ErÃ¶ffnung eine der grÃ¶ÃŸten HÃ¤ngebrÃ¼cken der Welt.", "Die LÃ¶wen an den BrÃ¼ckenkÃ¶pfen haben der Legende nach keine Zungen, was jedoch nur eine optische TÃ¤uschung ist.", "WÃ¤hrend des Zweiten Weltkriegs wurde die BrÃ¼cke gesprengt und zum 100. JubilÃ¤um 1949 originalgetreu wiederaufgebaut.", "Die BrÃ¼cke wurde nach einer umfassenden Sanierung im Jahr 2023 fÃ¼r den FuÃŸgÃ¤nger- und Busverkehr wieder freigegeben."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pecs",
    type: "city",
    parent: "HU-BA",
    coords: [18.2323, 46.0727],
    name: {"de": "FÃ¼nfkirchen", "hu": "PÃ©cs", "ro": "PÃ©cs", "en": "PÃ©cs"},
    image: "/geo-images/hungary/pecs.webp",
    description: {
      "de": "PÃ©cs, im SÃ¼dwesten Ungarns am FuÃŸe des Mecsek-Gebirges gelegen, ist eine Stadt mit einer Ã¼ber 2000-jÃ¤hrigen Geschichte. Die von den RÃ¶mern als Sopianae gegrÃ¼ndete Stadt ist bekannt fÃ¼r ihr mediterranes Flair und ihr reiches kulturelles Erbe. Besonders sehenswert sind die frÃ¼hchristlichen Grabkammern, die zum UNESCO-Welterbe gehÃ¶ren, sowie die markante Moschee von Pascha Jakowali Hassan. PÃ©cs war 2010 Kulturhauptstadt Europas und beherbergt die berÃ¼hmte Zsolnay-Porzellanmanufaktur.",
      "hu": "PÃ©cs, MagyarorszÃ¡g dÃ©lnyugati rÃ©szÃ©n, a Mecsek lÃ¡bÃ¡nÃ¡l fekvÅ‘ vÃ¡ros, amely tÃ¶bb mint 2000 Ã©ves mÃºltra tekint vissza. A rÃ³maiak Ã¡ltal Sopianae nÃ©ven alapÃ­tott telepÃ¼lÃ©s mediterrÃ¡n hangulatÃ¡rÃ³l Ã©s gazdag kulturÃ¡lis Ã¶rÃ¶ksÃ©gÃ©rÅ‘l ismert. KÃ¼lÃ¶nÃ¶sen figyelemre mÃ©ltÃ³ak az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezÅ‘ Ã³keresztÃ©ny sÃ­rkamrÃ¡k, valamint GÃ¡zi KÃ¡szim pasa dzsÃ¡mija. PÃ©cs 2010-ben EurÃ³pa KulturÃ¡lis FÅ‘vÃ¡rosa volt, Ã©s itt talÃ¡lhatÃ³ a hÃ­res Zsolnay PorcelÃ¡nmanufaktÃºra is.",
      "ro": "PÃ©cs, situat Ã®n sud-vestul Ungariei, la poalele munÈ›ilor Mecsek, este un oraÈ™ cu o istorie de peste 2000 de ani. Fondat de romani sub numele de Sopianae, oraÈ™ul este cunoscut pentru atmosfera sa mediteraneanÄƒ È™i moÈ™tenirea culturalÄƒ bogatÄƒ. Deosebit de remarcabile sunt mormintele paleocreÈ™tine, care fac parte din patrimoniul mondial UNESCO, precum È™i moscheea paÈ™ei Gazi Kasim. PÃ©cs a fost CapitalÄƒ EuropeanÄƒ a Culturii Ã®n 2010 È™i gÄƒzduieÈ™te faimoasa fabricÄƒ de porÈ›elan Zsolnay.",
      "en": "PÃ©cs, located in southwestern Hungary at the foot of the Mecsek Mountains, is a city with a history spanning over 2,000 years. Founded by the Romans as Sopianae, the city is known for its Mediterranean atmosphere and rich cultural heritage. Particularly noteworthy are the Early Christian Necropolis, a UNESCO World Heritage site, and the iconic Mosque of Pasha Qasim. PÃ©cs was a European Capital of Culture in 2010 and is home to the world-famous Zsolnay Porcelain Manufactory."
    },
    descriptionAdvanced: {
      "de": "PÃ©cs, die fÃ¼nftgrÃ¶ÃŸte Stadt Ungarns, liegt am FuÃŸe des Mecsek-Gebirges und besticht durch ein mildes, fast mediterranes Flair. Als rÃ¶mische Siedlung Sopianae gegrÃ¼ndet, blickt die Stadt auf eine Ã¼ber 2000-jÃ¤hrige Geschichte zurÃ¼ck, deren Zeugnisse in den zum UNESCO-Welterbe gehÃ¶renden frÃ¼hchristlichen Grabkammern zu finden sind. Die Stadt ist ein Schmelztiegel der Kulturen, was sich in der ehemaligen Moschee von Pascha Jakowali Hassan und der prÃ¤chtigen Kathedrale widerspiegelt. Bekannt als Stadt der Kunst und Bildung, beherbergt PÃ©cs die Ã¤lteste UniversitÃ¤t des Landes sowie das weltberÃ¼hmte Zsolnay-Kulturviertel. Im Jahr 2010 trug PÃ©cs stolz den Titel der Kulturhauptstadt Europas und zieht seither Besucher mit seiner lebendigen AtmosphÃ¤re und den vielen Festivals an.",
      "hu": "PÃ©cs, a Mecsek-hegysÃ©g lÃ¡bÃ¡nÃ¡l fekvÅ‘ mediterrÃ¡n hangulatÃº nagyvÃ¡ros, MagyarorszÃ¡g egyik leggazdagabb tÃ¶rtÃ©nelmi Ã©s kulturÃ¡lis Ã¶rÃ¶ksÃ©ggel rendelkezÅ‘ telepÃ¼lÃ©se. A rÃ³maiak Ã¡ltal Sopianae nÃ©ven alapÃ­tott vÃ¡ros mÃ¡r a korai keresztÃ©nysÃ©g idejÃ©n fontos kÃ¶zpont volt, amit a vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezÅ‘ Ã³keresztÃ©ny sÃ­rkamrÃ¡k is tanÃºsÃ­tanak. PÃ©cs egyedÃ¼lÃ¡llÃ³sÃ¡gÃ¡t a kÃ¼lÃ¶nbÃ¶zÅ‘ kultÃºrÃ¡k rÃ©tegzÅ‘dÃ©se adja: a rÃ³mai falak felett gÃ³tikus szÃ©kesegyhÃ¡z, a tÃ¶rÃ¶k hÃ³doltsÃ¡g korÃ¡bÃ³l pedig mecsetek Ã©s minaretek maradtak fenn. A vÃ¡ros a mÅ±vÃ©szetek otthona is, itt talÃ¡lhatÃ³ a vilÃ¡ghÃ­rÅ± Zsolnay PorcelÃ¡nmanufaktÃºra Ã©s a rÃ³la elnevezett kulturÃ¡lis negyed. 2010-ben EurÃ³pa KulturÃ¡lis FÅ‘vÃ¡rosakÃ©nt PÃ©cs megmutatta a vilÃ¡gnak pezsgÅ‘ szellemi Ã©letÃ©t Ã©s modern Ã©pÃ­tÃ©szeti Ã©rtÃ©keit.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "FÃ¼nftgrÃ¶ÃŸte Stadt Ungarns und Sitz des Komitats Baranya.",
        "Die UniversitÃ¤t PÃ©cs wurde 1367 als erste UniversitÃ¤t Ungarns gegrÃ¼ndet.",
        "Die frÃ¼hchristlichen Grabkammern sind ein einzigartiges UNESCO-Welterbe.",
        "Heimat der Zsolnay-Porzellanmanufaktur mit ihrem charakteristischen Eosin-Glanz.",
        "Die Kathedrale von PÃ©cs ist ein beeindruckendes romanisches Bauwerk.",
        "Das Zsolnay-Kulturviertel ist ein modernes Zentrum fÃ¼r Kunst und Design.",
        "Bekannt fÃ¼r das mediterrane Klima und den Weinanbau am Mecsek.",
        "Die Moschee von Pascha Jakowali Hassan ist ein Relikt der osmanischen Zeit."
      ],
      "hu": [
        "MagyarorszÃ¡g Ã¶tÃ¶dik legnagyobb vÃ¡rosa Ã©s Baranya vÃ¡rmegye szÃ©khelye.",
        "A PÃ©csi TudomÃ¡nyegyetemet 1367-ben alapÃ­tottÃ¡k, az orszÃ¡g elsÅ‘ egyetemekÃ©nt.",
        "Az Ã³keresztÃ©ny sÃ­rkamrÃ¡k egyedÃ¼lÃ¡llÃ³ UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­nt jelentenek.",
        "A Zsolnay PorcelÃ¡nmanufaktÃºra otthona, hÃ­res az eozin mÃ¡zÃ¡rÃ³l.",
        "A pÃ©csi szÃ©kesegyhÃ¡z lenyÅ±gÃ¶zÅ‘ romÃ¡n stÃ­lusÃº Ã©pÃ­tmÃ©ny.",
        "A Zsolnay KulturÃ¡lis Negyed a mÅ±vÃ©szet Ã©s a design modern kÃ¶zpontja.",
        "MediterrÃ¡n Ã©ghajlatÃ¡rÃ³l Ã©s a mecseki bortermelÃ©srÅ‘l is ismert.",
        "GÃ¡zi KÃ¡szim pasa dzsÃ¡mija a tÃ¶rÃ¶k hÃ³doltsÃ¡g korÃ¡nak egyik legfontosabb emlÃ©ke."
      ],
      "ro": [
        "Al cincilea oraÈ™ ca mÄƒrime din Ungaria È™i reÈ™edinÈ›a judeÈ›ului Baranya.",
        "Universitatea din PÃ©cs a fost fondatÄƒ Ã®n 1367, fiind prima din Ungaria.",
        "Mormintele paleocreÈ™tine reprezintÄƒ un sit unic Ã®n patrimoniul UNESCO.",
        "Casa fabricii de porÈ›elan Zsolnay, faimoasÄƒ pentru glazura sa de eozinÄƒ.",
        "Catedrala din PÃ©cs este o construcÈ›ie romanicÄƒ impresionantÄƒ.",
        "Cartierul Cultural Zsolnay este un centru modern pentru artÄƒ È™i design.",
        "Cunoscut pentru clima mediteraneanÄƒ È™i viticultura de pe muntele Mecsek.",
        "Moscheea paÈ™ei Gazi Kasim este un vestigiu important al epocii otomane."
      ],
      "en": [
        "Fifth largest city in Hungary and the seat of Baranya County.",
        "The University of PÃ©cs was founded in 1367 as the first university in Hungary.",
        "The Early Christian Necropolis is a unique UNESCO World Heritage site.",
        "Home to the Zsolnay Porcelain Manufactory, famous for its eosin glaze.",
        "PÃ©cs Cathedral is an impressive Romanesque structure.",
        "The Zsolnay Cultural Quarter is a modern center for art and design.",
        "Known for its Mediterranean climate and viticulture on the Mecsek slopes.",
        "The Mosque of Pasha Qasim is a significant relic from the Ottoman era."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": ["PÃ©cs ad otthont az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezÅ‘ Ã³keresztÃ©ny sÃ­rkamrÃ¡knak.",
        "Itt alapÃ­tottÃ¡k MagyarorszÃ¡g elsÅ‘ egyetemÃ©t 1367-ben, Nagy Lajos kirÃ¡ly idejÃ©n.",
        "A Zsolnay KulturÃ¡lis Negyed az orszÃ¡g egyik legnagyobb iparmÅ±vÃ©szeti Ã©s kulturÃ¡lis kÃ¶zpontja.",
        "A GÃ¡zi KÃ¡szim pasa dzsÃ¡mija a legnagyobb MagyarorszÃ¡gon fennmaradt oszmÃ¡n Ã©pÃ­tmÃ©ny.",
        "PÃ©cs hÃ­res a tÃ¼ke-misztikumrÃ³l Ã©s a Mecsek-oldal kÃ¼lÃ¶nleges, mediterrÃ¡n mikroklÃ­mÃ¡jÃ¡rÃ³l."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "siklos",
    type: "city",
    parent: "HU-BA",
    coords: [18.2975, 45.855],
    name: {"de": "SiklÃ³s", "hu": "SiklÃ³s", "ro": "SiklÃ³s", "en": "SiklÃ³s"},
    image: "/geo-images/hungary/siklos.webp",
    description: {"de": "Stadt in SÃ¼dungarn, berÃ¼hmt fÃ¼r ihre gut erhaltene Burg.", "hu": "DÃ©l-magyarorszÃ¡gi vÃ¡ros, jÃ³l karbantartott vÃ¡rÃ¡rÃ³l hÃ­res.", "ro": "OraÈ™ Ã®n sudul Ungariei, faimos pentru castelul sÄƒu bine conservat.", "en": "City in southern Hungary, famous for its well-preserved castle."},
    descriptionAdvanced: {
      "de": "SiklÃ³s, im sonnigen SÃ¼den des Komitats Baranya gelegen, beherbergt eine der am besten erhaltenen mittelalterlichen Burgen Ungarns. Die Burg SiklÃ³s thront auf einer AnhÃ¶he und bietet faszinierende Einblicke in die Renaissance-Architektur sowie eine reiche Ausstellung zur Geschichte der ungarischen Adelsfamilien. Die Stadt liegt im Herzen einer bedeutenden Weinregion und ist bekannt fÃ¼r ihre Gastfreundschaft und die NÃ¤he zum Heilbad HarkÃ¡ny. Ein Spaziergang durch die historischen RÃ¤ume der Burg fÃ¼hrt Besucher vorbei an prachtvollen Kapellen und massiven WehrtÃ¼rmen. SiklÃ³s ist ein Ort, an dem die Geschichte lebendig wird und man die Ruhe der sÃ¼dungarischen Landschaft in vollen ZÃ¼gen genieÃŸen kann.",
      "hu": "SiklÃ³s a VillÃ¡nyi-hegysÃ©g dÃ©li lÃ¡bÃ¡nÃ¡l fekvÅ‘ tÃ¶rtÃ©nelmi vÃ¡ros, amely leginkÃ¡bb monumentÃ¡lis Ã©s Ã©psÃ©gben maradt vÃ¡rÃ¡rÃ³l ismert. A siklÃ³si vÃ¡r MagyarorszÃ¡g egyik legjelentÅ‘sebb erÅ‘dÃ­tmÃ©nye, amely a gÃ³tikÃ¡tÃ³l a barokkig szÃ¡mos Ã©pÃ­tÃ©szeti stÃ­lust Ã¶tvÃ¶z, s falaiban ma interaktÃ­v kiÃ¡llÃ­tÃ¡sok mutatjÃ¡k be a vÃ¡rÃºr Ã©s a vÃ¡rnÃ©p Ã©letÃ©t. A vÃ¡ros vallÃ¡si emlÃ©kei, mint a Malkocs bej dzsÃ¡mi vagy a kegytemplom, a kÃ¼lÃ¶nbÃ¶zÅ‘ kultÃºrÃ¡k Ã©vszÃ¡zados jelenlÃ©tÃ©t hirdetik. SiklÃ³s kÃ¶zvetlen szomszÃ©dsÃ¡gÃ¡ban talÃ¡lhatÃ³ a harkÃ¡nyi gyÃ³gyfÃ¼rdÅ‘ Ã©s a villÃ¡nyi borvidÃ©k, Ã­gy a telepÃ¼lÃ©s a pihenÃ©s Ã©s a gasztronÃ³mia kedvelÅ‘inek is ideÃ¡lis cÃ©lpontja. A tÃ¡j nyugalma Ã©s a tÃ¶rtÃ©nelmi falak varÃ¡zsa egyedÃ¼lÃ¡llÃ³ Ã©lmÃ©nyt nyÃºjt minden lÃ¡togatÃ³nak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg SiklÃ³s wurde bereits im 13. Jahrhundert gegrÃ¼ndet.", "Sie ist eine der wenigen Burgen Ungarns, die nie vollstÃ¤ndig zerstÃ¶rt wurden.", "Die Burg beherbergt eine prachtvolle Kapelle mit gotischen Elementen.", "In der NÃ¤he befindet sich die berÃ¼hmte Wallfahrtskirche von MÃ¡riagyÅ±d."],
      "hu": [
        "A siklÃ³si vÃ¡r az orszÃ¡g egyik legÃ©pebben fennmaradt kÃ¶zÃ©pkori vÃ¡ra.",
        "Itt forgattÃ¡k a hÃ­res 'A Tenkes kapitÃ¡nya' cÃ­mÅ± magyar sorozat jelentÅ‘s rÃ©szÃ©t.",
        "A vÃ¡rban lÃ¡thatÃ³ egy 15. szÃ¡zadi gÃ³tikus kÃ¡polna, amelynek falfestmÃ©nyei vilÃ¡ghÃ­rÅ±ek.",
        "A vÃ¡rosban talÃ¡lhatÃ³ Malkocs bej dzsÃ¡mi elnyerte az Europa Nostra-dÃ­jat a pÃ©ldÃ¡s felÃºjÃ­tÃ¡sÃ©rt.",
        "SiklÃ³s hÃ­res bortermelÃ©sÃ©rÅ‘l is, amely a VillÃ¡nyi borvidÃ©k szerves rÃ©sze."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Burg SiklÃ³s wurde im 13. Jahrhundert erbaut.", "Liegt in der NÃ¤he der Weinregion VillÃ¡ny."], "hu": ["A siklÃ³si vÃ¡r a 13. szÃ¡zadban Ã©pÃ¼lt.", "A villÃ¡nyi borvidÃ©k kÃ¶zelÃ©ben fekszik."], "ro": ["Castelul SiklÃ³s a fost construit Ã®n secolul al XIII-lea.", "Situat Ã®n apropierea regiunii viticole VillÃ¡ny."], "en": ["SiklÃ³s Castle was built in the 13th century.", "Located near the VillÃ¡ny wine region."]},
  },
  {
    id: "mohacs",
    type: "city",
    parent: "HU-BA",
    coords: [18.6814, 45.9956],
    name: {"de": "Mohatsch", "hu": "MohÃ¡cs", "ro": "MohÃ¡cs", "en": "MohÃ¡cs"},
    image: "/geo-images/hungary/mohacs.webp",
    description: {"de": "Stadt an der Donau, bekannt fÃ¼r die Schlacht von MohÃ¡cs und das BusÃ³jÃ¡rÃ¡s-Festival.", "hu": "Duna-parti vÃ¡ros, a mohÃ¡csi vÃ©szrÅ‘l Ã©s a busÃ³jÃ¡rÃ¡srÃ³l ismert.", "ro": "OraÈ™ pe DunÄƒre, cunoscut pentru BÄƒtÄƒlia de la MohÃ¡cs È™i festivalul BusÃ³jÃ¡rÃ¡s.", "en": "City on the Danube, known for the Battle of MohÃ¡cs and the BusÃ³jÃ¡rÃ¡s festival."},
    descriptionAdvanced: {
      "de": "MohÃ¡cs, am Ufer der Donau gelegen, ist in der ungarischen Geschichte als Ort zweier schicksalhafter Schlachten gegen das Osmanische Reich bekannt. Heute ist die Stadt vor allem fÃ¼r das spektakulÃ¤re BusÃ³jÃ¡rÃ¡s-Festival berÃ¼hmt, das zum immateriellen UNESCO-Kulturerbe gehÃ¶rt und jÃ¤hrlich das Ende des Winters feiert. Bei diesem Volksfest ziehen maskierte Gestalten mit furchterregenden Holzmasken und SchafsfellkostÃ¼men durch die StraÃŸen, um bÃ¶se Geister zu vertreiben. MohÃ¡cs ist zudem ein bedeutender Donauhafen und ein kultureller Treffpunkt fÃ¼r Ungarn, Donauschwaben und Kroaten. Die Stadt bewahrt ein reiches Erbe an Volkskunst und traditioneller Architektur, das Besucher aus aller Welt anzieht.",
      "hu": "MohÃ¡cs a Duna partjÃ¡n fekvÅ‘ tÃ¶rtÃ©nelmi vÃ¡ros, amelynek neve Ã¶rÃ¶kre Ã¶sszefonÃ³dott az 1526-os sorsdÃ¶ntÅ‘ csatÃ¡val, amely a kÃ¶zÃ©pkori magyar kirÃ¡lysÃ¡g bukÃ¡sÃ¡t Ã©s a tÃ¶rÃ¶k hÃ³doltsÃ¡g kezdetÃ©t jelentette. A vÃ¡ros hatÃ¡rÃ¡ban talÃ¡lhatÃ³ Nemzeti EmlÃ©khely lenyÅ±gÃ¶zÅ‘ szobrai Ã©s tÃ¶megsÃ­rjai mÃ©ltÃ³ emlÃ©ket Ã¡llÃ­tanak a hÅ‘sÃ¶knek. MohÃ¡cs azonban ma mÃ¡r nem csak a gyÃ¡szrÃ³l szÃ³l: a vÃ¡ros vilÃ¡ghÃ­rÅ± nÃ©pÃ¼nnepÃ©lye, a BusÃ³jÃ¡rÃ¡s, az UNESCO szellemi Ã¶rÃ¶ksÃ©g rÃ©sze, amely minden Ã©vben ezreket vonz a tÃ©lbÃºcsÃºztatÃ³ Ã¡larcos forgataggal. A Duna-parti vÃ¡ros pezsgÅ‘ kulturÃ¡lis Ã©letet, modern mÃºzeumokat Ã©s a folyÃ³ menti Ã¡rtÃ©ri erdÅ‘k nyugalmÃ¡t kÃ­nÃ¡lja az idelÃ¡togatÃ³knak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das BusÃ³jÃ¡rÃ¡s-Festival in MohÃ¡cs ist Teil des UNESCO-Weltkulturerbes.", "Die Schlacht von MohÃ¡cs im Jahr 1526 markierte den Beginn der TÃ¼rkenherrschaft in Ungarn.", "Die GedenkstÃ¤tte der Schlacht von MohÃ¡cs erinnert an den heldenhaften Kampf der Soldaten.", "Die Stadt ist bekannt fÃ¼r ihre lebendige Keramik- und TÃ¶pfertradition."],
      "hu": [
        "MohÃ¡cs hÃ­res a BusÃ³jÃ¡rÃ¡srÃ³l, amely 2009-ben kerÃ¼lt fel az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi listÃ¡jÃ¡ra.",
        "Az 1526-os csata helyszÃ­nÃ©n 1976-ban nyÃ­lt meg a monumentÃ¡lis Nemzeti EmlÃ©khely.",
        "A vÃ¡ros kÃ¶zpontjÃ¡ban Ã¡ll a Fogadalmi Templom, amely a csata 400. Ã©vfordulÃ³jÃ¡ra Ã©pÃ¼lt.",
        "MohÃ¡cson talÃ¡lhatÃ³ a BusÃ³udvar, ahol az Ã©v minden napjÃ¡n megismerhetÅ‘ a busÃ³hagyomÃ¡ny.",
        "A vÃ¡ros fontos Duna-menti hatÃ¡rkikÃ¶tÅ‘ MagyarorszÃ¡g Ã©s HorvÃ¡torszÃ¡g kÃ¶zÃ¶tt."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Schauplatz der Schlacht von MohÃ¡cs 1526.", "Das BusÃ³jÃ¡rÃ¡s ist UNESCO-Kulturerbe."], "hu": ["Az 1526-os mohÃ¡csi csata helyszÃ­ne.", "A busÃ³jÃ¡rÃ¡s UNESCO szellemi kulturÃ¡lis Ã¶rÃ¶ksÃ©g."], "ro": ["Locul BÄƒtÄƒliei de la MohÃ¡cs din 1526.", "BusÃ³jÃ¡rÃ¡s este patrimoniu cultural UNESCO."], "en": ["Site of the Battle of MohÃ¡cs in 1526.", "The BusÃ³jÃ¡rÃ¡s is UNESCO cultural heritage."]},
  },
  {
    id: "villany",
    type: "city",
    parent: "HU-BA",
    coords: [18.4547, 45.8694],
    name: {"de": "Wieland", "hu": "VillÃ¡ny", "ro": "VillÃ¡ny", "en": "VillÃ¡ny"},    description: {"de": "Zentrum einer der berÃ¼hmtesten Rotweinregionen Ungarns.", "hu": "MagyarorszÃ¡g egyik leghÃ­resebb vÃ¶rÃ¶sborvidÃ©kÃ©nek kÃ¶zpontja.", "ro": "Centrul uneia dintre cele mai faimoase regiuni de vin roÈ™u din Ungaria.", "en": "Center of one of Hungary's most famous red wine regions."},
    descriptionAdvanced: {
      "de": "VillÃ¡ny gilt als die ",
      "hu": "VillÃ¡ny MagyarorszÃ¡g egyik legdÃ©lebbi Ã©s leghÃ­resebb borvidÃ©kÃ©nek kÃ¶zpontja, amelyet a 'vÃ¶rÃ¶sborok vÃ¡rosa'-kÃ©nt ismernek vilÃ¡gszerte. A telepÃ¼lÃ©s arculatÃ¡t a tÃ¶rtÃ©nelmi pincesor, a rendezett szÅ‘lÅ‘Ã¼ltetvÃ©nyek Ã©s a mediterrÃ¡n jellegÅ± Ã©ghajlat hatÃ¡rozza meg, amely kivÃ¡lÃ³ feltÃ©teleket biztosÃ­t a testes vÃ¶rÃ¶sborok, mint a Cabernet vagy a Franc szÃ¡mÃ¡ra. VillÃ¡ny nemcsak a borÃ¡szatrÃ³l szÃ³l, hanem a minÅ‘sÃ©gi gasztronÃ³miÃ¡rÃ³l Ã©s a borkultÃºrÃ¡hoz kapcsolÃ³dÃ³ fesztivÃ¡lokrÃ³l is, amelyek minden Ã©vben tÃ¶megeket vonzanak. A vÃ¡ros kÃ¶rnyÃ©ki dombok kivÃ¡lÃ³ tÃºrÃ¡zÃ¡si lehetÅ‘sÃ©geket kÃ­nÃ¡lnak, mÃ­g a helyi borÃ¡szok vendÃ©gszeretete Ã©s a pincÃ©k hÅ±vÃ¶s nyugalma felejthetetlen Ã©lmÃ©nyt nyÃºjt a kikapcsolÃ³dni vÃ¡gyÃ³knak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["VillÃ¡ny ist die sÃ¼dlichste und wÃ¤rmste Weinregion Ungarns.", "Die Region ist berÃ¼hmt fÃ¼r ihre vollmundigen Rotweine aus der Cabernet Franc Traube.", "Die WeinstraÃŸe von VillÃ¡ny-SiklÃ³s war die erste ihrer Art in Ungarn.", "JÃ¤hrlich im Herbst findet in VillÃ¡ny ein groÃŸes Rotweinfestival statt."],
      "hu": [
        "VillÃ¡ny volt az orszÃ¡g elsÅ‘ borvidÃ©ke, amely bevezette a vÃ©dett eredetÅ± borok rendszerÃ©t.",
        "A tÃ¶rtÃ©nelmi pincesor hÃ¡zai mÅ±emlÃ©ki vÃ©dettsÃ©g alatt Ã¡llnak.",
        "Itt rendezik meg minden Ã©vben a VillÃ¡nyi VÃ¶rÃ¶sbor FesztivÃ¡lt, a rÃ©giÃ³ legnagyobb Ã¼nnepÃ©t.",
        "A villÃ¡nyi borok rendszeresen nyernek aranyÃ©rmeket a legfontosabb nemzetkÃ¶zi borversenyeken.",
        "A vÃ¡ros hatÃ¡rÃ¡ban talÃ¡lhatÃ³ a SzÃ¡rsomlyÃ³-hegy, amely kÃ¼lÃ¶nleges Ã©s ritka nÃ¶vÃ©nyvilÃ¡gÃ¡rÃ³l hÃ­res."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r vollmundige Rotweine.", "Beliebtes Ziel fÃ¼r Weintourismus."], "hu": ["Testes vÃ¶rÃ¶sborairÃ³l ismert.", "NÃ©pszerÅ± borturisztikai cÃ©lpont."], "ro": ["Cunoscut pentru vinurile roÈ™ii corpolente.", "DestinaÈ›ie popularÄƒ pentru turismul viticol."], "en": ["Known for full-bodied red wines.", "Popular destination for wine tourism."]},
  },
  {
    id: "kecskemet",
    type: "city",
    parent: "HU-BK",
    coords: [19.6913, 46.9062],
    name: {"de": "KecskemÃ©t", "hu": "KecskemÃ©t", "ro": "KecskemÃ©t", "en": "KecskemÃ©t"},
    image: "/geo-images/hungary/kecskemet.webp",
    description: {
      "de": "KecskemÃ©t, im Herzen der ungarischen Tiefebene gelegen, ist berÃ¼hmt fÃ¼r seine prÃ¤chtige Jugendstilarchitektur und seine ObstgÃ¤rten. Die Stadt ist der Geburtsort des Kompunisten ZoltÃ¡n KodÃ¡ly und beherbergt das renommierte KodÃ¡ly-Institut. Das Stadtbild wird von farbenfrohen GebÃ¤uden wie dem Cifra-Palast und dem Rathaus geprÃ¤gt. KecskemÃ©t ist zudem weltbekannt fÃ¼r seinen Aprikosenschnaps (BarackpÃ¡linka) und ist ein wichtiges Zentrum der ungarischen Lebensmittelindustrie und Automobilproduktion.",
      "hu": "KecskemÃ©t, az AlfÃ¶ld szÃ­vÃ©ben fekvÅ‘ vÃ¡ros, hÃ­res pompÃ¡s szecessziÃ³s Ã©pÃ­tÃ©szetÃ©rÅ‘l Ã©s gyÃ¼mÃ¶lcsÃ¶skertjeirÅ‘l. A vÃ¡ros KodÃ¡ly ZoltÃ¡n zeneszerzÅ‘ szÃ¼lÅ‘helye, Ã©s itt talÃ¡lhatÃ³ a neves KodÃ¡ly IntÃ©zet is. A vÃ¡roskÃ©pet olyan szÃ­nes Ã©pÃ¼letek hatÃ¡rozzÃ¡k meg, mint a Cifra Palota Ã©s a VÃ¡roshÃ¡za. KecskemÃ©t vilÃ¡gszerte ismert a barackpÃ¡linkÃ¡jÃ¡rÃ³l, emellett a magyar Ã©lelmiszeripar Ã©s autÃ³gyÃ¡rtÃ¡s egyik meghatÃ¡rozÃ³ kÃ¶zpontja.",
      "ro": "KecskemÃ©t, situat Ã®n inima Marii CÃ¢mpii Maghiare, este renumit pentru arhitectura sa Art Nouveau magnificÄƒ È™i livezile sale. OraÈ™ul este locul de naÈ™tere al compozitorului ZoltÃ¡n KodÃ¡ly È™i gÄƒzduieÈ™te renumitul Institut KodÃ¡ly. Aspectul oraÈ™ului este definit de clÄƒdiri colorate precum Palatul Cifra È™i PrimÄƒria. KecskemÃ©t este, de asemenea, cunoscut Ã®n Ã®ntreaga lume pentru rachiul sÄƒu de caise (BarackpÃ¡linka) È™i este un centru important al industriei alimentare È™i al producÈ›iei auto.",
      "en": "KecskemÃ©t, located in the heart of the Great Hungarian Plain, is famous for its magnificent Art Nouveau architecture and its orchards. The city is the birthplace of composer ZoltÃ¡n KodÃ¡ly and home to the renowned KodÃ¡ly Institute. The cityscape is defined by colorful buildings such as the Cifra Palace and the City Hall. KecskemÃ©t is world-famous for its apricot brandy (BarackpÃ¡linka) and is a major center for the Hungarian food industry and automotive production."
    },
    descriptionAdvanced: {
      "de": "KecskemÃ©t, bekannt als die ",
      "hu": "KecskemÃ©t, a 'hÃ­rÃ¶s vÃ¡ros' az AlfÃ¶ld szÃ­vÃ©ben, BÃ¡cs-Kiskun vÃ¡rmegye szÃ©khelye, amely lenyÅ±gÃ¶zÅ‘ szecessziÃ³s Ã©pÃ­tÃ©szetÃ©rÅ‘l Ã©s gazdag kulturÃ¡lis Ã©letÃ©rÅ‘l hÃ­res. A vÃ¡ros fÅ‘tere egyedÃ¼lÃ¡llÃ³ Ã©pÃ­tÃ©szeti egyÃ¼ttes, ahol a Cifrapalota szÃ­nes kerÃ¡miÃ¡i Ã©s a VÃ¡roshÃ¡za monumentÃ¡lis tÃ¶mbje varÃ¡zsolja el a lÃ¡togatÃ³kat. KecskemÃ©t a magyar zenei nevelÃ©s Ã©s kÃ©pzÅ‘mÅ±vÃ©szet egyik kÃ¶zpontja, KodÃ¡ly ZoltÃ¡n szÃ¼lÅ‘vÃ¡rosakÃ©nt vilÃ¡gszerte ismerik a KodÃ¡ly-mÃ³dszert. A vÃ¡ros kÃ¶rnyÃ©ke, a KiskunsÃ¡g pusztai vilÃ¡ga Ã©s a hÃ­res kecskemÃ©ti barackpÃ¡linka a magyar hagyomÃ¡nyok legjavÃ¡t kÃ­nÃ¡lja. KecskemÃ©t ma modern ipari kÃ¶zpont is, ahol a hagyomÃ¡ny Ã©s a csÃºcstechnolÃ³gia harmonikusan Ã©l egymÃ¡s mellett.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Rathaus von KecskemÃ©t besitzt ein Glockenspiel, das klassische Melodien spielt.", "Die Stadt beherbergt das Museum fÃ¼r Ungarische Naive Kunst.", "KecskemÃ©t ist das Zentrum der ungarischen Obstverarbeitung und PÃ¡linka-Herstellung.", "Der Cifrapalota ist ein Meisterwerk des ungarischen Jugendstils."],
      "hu": [
        "KecskemÃ©t VÃ¡roshÃ¡zÃ¡ja a magyar szecessziÃ³ egyik legszebb alkotÃ¡sa, Lechner Ã–dÃ¶n tervezte.",
        "A Cifrapalota homlokzatÃ¡t a pÃ©csi Zsolnay-gyÃ¡r szÃ­nes majolikÃ¡i dÃ­szÃ­tik.",
        "Itt szÃ¼letett KodÃ¡ly ZoltÃ¡n, a vilÃ¡ghÃ­rÅ± zeneszerzÅ‘ Ã©s zenepedagÃ³gus.",
        "KecskemÃ©t hÃ­res a baracktermesztÃ©sÃ©rÅ‘l Ã©s a vilÃ¡gszerte elismert kecskemÃ©ti barackpÃ¡linkÃ¡rÃ³l.",
        "A vÃ¡rostÃ³l nem messze talÃ¡lhatÃ³ a KiskunsÃ¡gi Nemzeti Park, az orszÃ¡g egyik legfontosabb termÃ©szetvÃ©delmi terÃ¼lete."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "AchtgrÃ¶ÃŸte Stadt Ungarns und Sitz des Komitats BÃ¡cs-Kiskun.",
        "Der Cifra-Palast ist ein Meisterwerk des ungarischen Jugendstils.",
        "Heimat des Mercedes-Benz Werks in Ungarn.",
        "Das KodÃ¡ly-Institut ist ein weltweit anerkanntes Zentrum fÃ¼r MusikpÃ¤dagogik.",
        "Die Stadt veranstaltet regelmÃ¤ÃŸig das Animationsfilmfestival KAFF.",
        "Bekannt fÃ¼r den groÃŸen Marktplatz und die vielfÃ¤ltigen Kirchen.",
        "Wichtiges Zentrum fÃ¼r den Anbau von Obst und GemÃ¼se in der Tiefebene.",
        "BerÃ¼hmt fÃ¼r den KecskemÃ©ter Aprikosenschnaps (BarackpÃ¡linka)."
      ],
      "hu": [
        "MagyarorszÃ¡g nyolcadik legnagyobb vÃ¡rosa Ã©s BÃ¡cs-Kiskun vÃ¡rmegye szÃ©khelye.",
        "HÃ­res a kecskemÃ©ti barackpÃ¡linkÃ¡rÃ³l.",
        "A Cifra Palota a magyar szecessziÃ³s Ã©pÃ­tÃ©szet remekmÅ±ve.",
        "Itt talÃ¡lhatÃ³ a Mercedes-Benz magyarorszÃ¡gi gyÃ¡ra.",
        "A KodÃ¡ly IntÃ©zet vilÃ¡gszerte elismert zenepedagÃ³giai kÃ¶zpont.",
        "A vÃ¡ros rendszeresen otthont ad a KAFF animÃ¡ciÃ³s filmfesztivÃ¡lnak.",
        "Ismert a tÃ¡gas fÅ‘terÃ©rÅ‘l Ã©s vÃ¡ltozatos templomairÃ³l.",
        "Az alfÃ¶ldi zÃ¶ldsÃ©g- Ã©s gyÃ¼mÃ¶lcstermesztÃ©s egyik legfontosabb kÃ¶zpontja."
      ],
      "ro": [
        "Al optulea oraÈ™ ca mÄƒrime din Ungaria È™i reÈ™edinÈ›a judeÈ›ului BÃ¡cs-Kiskun.",
        "Faimos pentru rachiul de caise de KecskemÃ©t (BarackpÃ¡linka).",
        "Palatul Cifra este o capodoperÄƒ a stilului Art Nouveau maghiar.",
        "GÄƒzduieÈ™te fabrica Mercedes-Benz din Ungaria.",
        "Institutul KodÃ¡ly este un centru de pedagogie muzicalÄƒ recunoscut mondial.",
        "OraÈ™ul gÄƒzduieÈ™te regulat festivalul de film de animaÈ›ie KAFF.",
        "Cunoscut pentru piaÈ›a sa centralÄƒ mare È™i bisericile diverse.",
        "Centru important pentru cultivarea fructelor È™i legumelor Ã®n CÃ¢mpia MaghiarÄƒ."
      ],
      "en": [
        "Eighth largest city in Hungary and the seat of BÃ¡cs-Kiskun County.",
        "Famous for the KecskemÃ©t apricot brandy (BarackpÃ¡linka).",
        "The Cifra Palace is a masterpiece of Hungarian Art Nouveau architecture.",
        "Home to the Mercedes-Benz plant in Hungary.",
        "The KodÃ¡ly Institute is a world-renowned center for music education.",
        "The city regularly hosts the KAFF animation film festival.",
        "Known for its spacious main square and diverse churches.",
        "A major center for fruit and vegetable cultivation in the Great Plain."
      ]
    },
  },
  {
    id: "kalocsa",
    type: "city",
    parent: "HU-BK",
    coords: [18.9803, 46.5297],
    name: {"de": "Kollotschau", "hu": "Kalocsa", "ro": "Kalocsa", "en": "Kalocsa"},
    image: "/geo-images/hungary/kalocsa.webp",
    description: {"de": "Eine der Ã¤ltesten StÃ¤dte Ungarns, berÃ¼hmt fÃ¼r Paprika und Volkskunst.", "hu": "MagyarorszÃ¡g egyik legrÃ©gebbi vÃ¡rosa, hÃ­res a paprikÃ¡rÃ³l Ã©s a nÃ©pmÅ±vÃ©szetrÅ‘l.", "ro": "Unul dintre cele mai vechi oraÈ™e din Ungaria, faimos pentru boia È™i arta popularÄƒ.", "en": "One of the oldest cities in Hungary, famous for paprika and folk art."},
    descriptionAdvanced: {
      "de": "Kalocsa, eine der Ã¤ltesten StÃ¤dte Ungarns am linken Ufer der Donau, ist weltberÃ¼hmt fÃ¼r zwei Dinge: Paprika und Stickereien. Die Stadt ist ein bedeutender Erzbischofssitz mit einer prachtvollen barocken Kathedrale und einer wertvollen DiÃ¶zesanbibliothek. Besucher kÃ¶nnen im Paprikamuseum alles Ã¼ber den Anbau und die Verarbeitung des ",
      "hu": "Kalocsa MagyarorszÃ¡g egyik legrÃ©gebbi vÃ¡rosa a Duna mentÃ©n, amely tÃ¶bb mint ezer Ã©ve az orszÃ¡g egyik legfontosabb vallÃ¡si Ã©s kulturÃ¡lis kÃ¶zpontja. Az Ã©rseki szÃ©khely monumentÃ¡lis FÅ‘szÃ©kesegyhÃ¡za Ã©s az Ã‰rseki Palota kÃ¶nyvtÃ¡ra felbecsÃ¼lhetetlen Ã©rtÃ©keket Å‘riz. Kalocsa azonban nemcsak a hitrÅ‘l, hanem a szÃ­nekrÅ‘l is szÃ³l: vilÃ¡ghÃ­rÅ± a kalocsai fÅ±szerpaprika, amely az orszÃ¡g 'piros aranya', valamint a szÃ­npompÃ¡s kalocsai hÃ­mzÃ©s Ã©s falpingÃ¡lÃ¡s, amely az UNESCO szellemi Ã¶rÃ¶ksÃ©g rÃ©sze. A vÃ¡rosban sÃ©tÃ¡lva lÃ©pten-nyomon talÃ¡lkozhatunk a nÃ©pmÅ±vÃ©szet Ã©lÅ‘ hagyomÃ¡nyaival Ã©s a pusztai vendÃ©gszeretettel, ami KalocsÃ¡t a magyar identitÃ¡s egyik legfontosabb Å‘rzÅ‘helyÃ©vÃ© teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Kalocsa ist seit der Zeit des Heiligen Stephan ein bedeutender Erzbischofssitz.", "Die Stadt gilt als die 'Hauptstadt des Paprikas' in Ungarn.", "Die Kalocsaer Volkskunst mit ihren bunten Blumenmustern ist weltweit bekannt.", "In der Stadt befindet sich ein einzigartiges Porzellanmuseum."],
      "hu": [
        "Kalocsa az orszÃ¡g egyik legrÃ©gebbi pÃ¼spÃ¶ksÃ©ge, amelyet Szent IstvÃ¡n kirÃ¡ly alapÃ­tott 1001-ben.",
        "A kalocsai nÃ©pmÅ±vÃ©szet (hÃ­mzÃ©s, pingÃ¡lÃ¡s) 2012-ben kerÃ¼lt fel az UNESCO szellemi Ã¶rÃ¶ksÃ©g listÃ¡jÃ¡ra.",
        "Itt talÃ¡lhatÃ³ a Paprika MÃºzeum, amely bemutatja a kalocsai paprika termesztÃ©sÃ©nek tÃ¶rtÃ©netÃ©t.",
        "Az Ã‰rseki KÃ¶nyvtÃ¡rban lÃ¡thatÃ³ egy 11. szÃ¡zadi Biblia Ã©s szÃ¡mos kÃ¶zÃ©pkori kÃ³dex.",
        "A vÃ¡ros hÃ­res rendezvÃ©nye a Kalocsai PaprikafesztivÃ¡l, amelyet minden Å‘sszel megtartanak."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Zentrum des ungarischen Paprikaanbaus.", "Sitz eines Erzbistums."], "hu": ["A magyar paprikatermesztÃ©s kÃ¶zpontja.", "Ã‰rseki szÃ©khely."], "ro": ["Centrul cultivÄƒrii boielei maghiare.", "Sediul unei arhiepiscopii."], "en": ["Center of Hungarian paprika cultivation.", "Seat of an archbishopric."]},
  },
  {
    id: "kiskunmajsa",
    type: "city",
    parent: "HU-BK",
    coords: [19.7381, 46.4919],
    name: {"de": "Kiskunmajsa", "hu": "Kiskunmajsa", "ro": "Kiskunmajsa", "en": "Kiskunmajsa"},
    image: "/geo-images/hungary/kiskunmajsa.webp",
    description: {"de": "Kleinstadt in der GroÃŸen Tiefebene, bekannt fÃ¼r ihr Thermalbad.", "hu": "AlfÃ¶ldi kisvÃ¡ros, termÃ¡lfÃ¼rdÅ‘jÃ©rÅ‘l ismert.", "ro": "Mic oraÈ™ Ã®n Marea CÃ¢mpie, cunoscut pentru baia sa termalÄƒ.", "en": "Small town in the Great Plain, known for its thermal bath."},
    descriptionAdvanced: {
      "de": "Kiskunmajsa ist ein aufstrebender Kurort in der ungarischen Tiefebene, bekannt fÃ¼r sein weitlÃ¤ufiges JonathermÃ¡l Heil- und Erlebnisbad. Das Thermalwasser der Region wurde in den 1980er Jahren entdeckt und zieht seither Erholungssuchende an, die Linderung bei Gelenk- und WirbelsÃ¤ulenbeschwerden suchen. Die Stadt bewahrt zudem das Erbe der ungarischen Revolution von 1956 in einem beeindruckenden Gedenkmuseum, das landesweit einzigartig ist. Die umliegende Puszta-Landschaft lÃ¤dt zu ausgiebigen Ausritten und Kutschfahrten ein, die die ursprÃ¼ngliche Lebensweise der KiskunsÃ¡g-Region vermitteln. Kiskunmajsa bietet eine ideale Kombination aus gesundheitlicher Erholung, historischem Gedenken und Naturerlebnis.",
      "hu": "Kiskunmajsa a KiskunsÃ¡g szÃ­vÃ©ben fekvÅ‘ dinamikus fÃ¼rdÅ‘vÃ¡ros, amely leginkÃ¡bb a JonathermÃ¡l GyÃ³gy- Ã©s Ã‰lmÃ©nyfÃ¼rdÅ‘jÃ©rÅ‘l ismert. A vÃ¡ros turizmusa a feltÃ¶rÅ‘ gyÃ³gyvÃ­zre Ã©pÃ¼l, amely kivÃ¡lÃ³an alkalmas mozgÃ¡sszervi Ã©s reumÃ¡s panaszok enyhÃ­tÃ©sÃ©re, s tÃ¡gas medencÃ©ivel a csalÃ¡dok kedvelt Ã¼dÃ¼lÅ‘helye. Kiskunmajsa azonban tÃ¶rtÃ©nelmi emlÃ©kezetÃ©ben is jelentÅ‘s: itt talÃ¡lhatÃ³ az orszÃ¡g egyetlen 1956-os MÃºzeuma, amely a forradalom Ã©s szabadsÃ¡gharc vidÃ©ki esemÃ©nyeinek Ã¡llÃ­t emlÃ©ket. A vÃ¡ros hatÃ¡rÃ¡ban a pusztai tÃ¡j nyugalma, az Å‘sborÃ³kÃ¡s Ã©s a hagyomÃ¡nyos tanyasi vilÃ¡g vÃ¡rja a termÃ©szet Ã©s a nyugalom kedvelÅ‘it. Kiskunmajsa a gyÃ³gyulÃ¡s, a pihenÃ©s Ã©s a tÃ¶rtÃ©nelmi emlÃ©kezet kÃ¼lÃ¶nleges talÃ¡lkozÃ³helye az AlfÃ¶ldÃ¶n.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das JonathermÃ¡l-Bad in Kiskunmajsa ist fÃ¼r seine familienfreundliche AtmosphÃ¤re bekannt.", "Die Stadt beherbergt das einzige 1956er Revolutionsmuseum auf dem Land in Ungarn.", "In der Umgebung befinden sich geschÃ¼tzte Salzseen mit einer seltenen Flora und Fauna.", "Kiskunmajsa ist ein wichtiges Zentrum fÃ¼r den lÃ¤ndlichen Tourismus in der Tiefebene."],
      "hu": [
        "A kiskunmajsai gyÃ³gyvÃ­z 72 fokos hÅ‘mÃ©rsÃ©kleten tÃ¶r fel a fÃ¶ld mÃ©lyÃ©bÅ‘l.",
        "Az 1956-os MÃºzeumot PongrÃ¡tz Gergely, a forradalom egyik hÅ‘se alapÃ­totta a vÃ¡rosban.",
        "A rÃ³mai katolikus templom barokk Ã©pÃ¼lete a vÃ¡ros egyik legszebb mÅ±emlÃ©ke.",
        "Kiskunmajsa hÃ­res a sÃ¶rfesztivÃ¡ljÃ¡rÃ³l Ã©s a hagyomÃ¡nyos pusztai lovasnapokrÃ³l.",
        "A vÃ¡ros hatÃ¡rÃ¡ban talÃ¡lhatÃ³ kiterjedt erdÅ‘k Ã©s szikes tavak gazdag madÃ¡rvilÃ¡gnak adnak otthont."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Beliebtes Ziel fÃ¼r Kururlauber.", "Liegt in der Region KiskunsÃ¡g."], "hu": ["NÃ©pszerÅ± cÃ©lpont a gyÃ³gyulni vÃ¡gyÃ³k kÃ¶rÃ©ben.", "A KiskunsÃ¡g rÃ©giÃ³ban fekszik."], "ro": ["DestinaÈ›ie popularÄƒ pentru turiÈ™tii de spa.", "Situat Ã®n regiunea KiskunsÃ¡g."], "en": ["Popular destination for spa tourists.", "Located in the KiskunsÃ¡g region."]},
  },
  {
    id: "bekescsaba",
    type: "city",
    parent: "HU-BE",
    coords: [21.0978, 46.6797],
    name: {"de": "Tschaba", "hu": "BÃ©kÃ©scsaba", "ro": "BichiÈ™ciaba", "en": "BÃ©kÃ©scsaba"},
    image: "/geo-images/hungary/bekescsaba.webp",
    description: {
      "de": "BÃ©kÃ©scsaba, im SÃ¼dosten Ungarns gelegen, ist weltberÃ¼hmt fÃ¼r seine kulinarischen Traditionen, insbesondere fÃ¼r die Csabai-Wurst. Die Stadt ist das kulturelle Zentrum der slowakischen Minderheit in Ungarn und besticht durch ihre ruhige AtmosphÃ¤re und die weiten PlÃ¤tze. Besucher kÃ¶nnen das MunkÃ¡csy-MihÃ¡ly-Museum besuchen, das dem berÃ¼hmten ungarischen Maler gewidmet ist, oder das jÃ¤hrliche Wurstfestival erleben, das Tausende von GÃ¤sten anzieht. Die Umgebung bietet zudem ideale Bedingungen fÃ¼r Landwirtschaft und Naturtourismus.",
      "hu": "BÃ©kÃ©scsaba, MagyarorszÃ¡g dÃ©lkeleti rÃ©szÃ©n fekszik, Ã©s vilÃ¡gszerte hÃ­res gasztronÃ³miai hagyomÃ¡nyairÃ³l, kÃ¼lÃ¶nÃ¶sen a csabai kolbÃ¡szrÃ³l. A vÃ¡ros a magyarorszÃ¡gi szlovÃ¡k kisebbsÃ©g kulturÃ¡lis kÃ¶zpontja, amely nyugodt hangulatÃ¡val Ã©s tÃ¡gas tereivel vonzza a lÃ¡togatÃ³kat. A lÃ¡togatÃ³k megtekinthetik a MunkÃ¡csy MihÃ¡ly MÃºzeumot, amely a hÃ­res festÅ‘mÅ±vÃ©sz emlÃ©kÃ©t Å‘rzi, vagy ellÃ¡togathatnak az Ã©vente megrendezett KolbÃ¡szfesztivÃ¡lra. A kÃ¶rnyÃ©k emellett kivÃ¡lÃ³ feltÃ©teleket kÃ­nÃ¡l a mezÅ‘gazdasÃ¡g Ã©s a termÃ©szetjÃ¡rÃ¡s szÃ¡mÃ¡ra.",
      "ro": "BÃ©kÃ©scsaba, situat Ã®n sud-estul Ungariei, este renumit Ã®n Ã®ntreaga lume pentru tradiÈ›iile sale culinare, Ã®n special pentru cÃ¢rnatul Csabai. OraÈ™ul este centrul cultural al minoritÄƒÈ›ii slovace din Ungaria È™i impresioneazÄƒ prin atmosfera sa liniÈ™titÄƒ È™i pieÈ›ele largi. Vizitatorii pot vizita Muzeul MunkÃ¡csy MihÃ¡ly, dedicat faimosului pictor maghiar, sau pot experimenta festivalul anual al cÃ¢rnaÈ›ilor, care atrage mii de oaspeÈ›i. ÃŽmprejurimile oferÄƒ, de asemenea, condiÈ›ii ideale pentru agriculturÄƒ È™i turism Ã®n naturÄƒ.",
      "en": "BÃ©kÃ©scsaba, located in southeastern Hungary, is world-famous for its culinary traditions, particularly the Csabai sausage. The city serves as the cultural center for the Slovak minority in Hungary and charms visitors with its peaceful atmosphere and wide squares. Visitors can explore the MunkÃ¡csy MihÃ¡ly Museum, dedicated to the famous Hungarian painter, or experience the annual Sausage Festival, which attracts thousands of guests. The surrounding area also offers excellent conditions for agriculture and nature tourism."
    },
    descriptionAdvanced: {
      "de": "BÃ©kÃ©scsaba, das Zentrum des Komitats BÃ©kÃ©s, ist weit Ã¼ber Ungarn hinaus fÃ¼r seine kulinarischen Traditionen bekannt, insbesondere fÃ¼r die berÃ¼hmte BÃ©kÃ©scsabaer Wurst. Die Stadt blickt auf eine reiche Geschichte zurÃ¼ck, die eng mit der Ansiedlung slowakischer Kolonisten im 18. Jahrhundert verbunden ist, was sich noch heute in der Kultur und Architektur widerspiegelt. Das MunkÃ¡csy-Museum wÃ¼rdigt das Werk des weltberÃ¼hmten Malers MihÃ¡ly MunkÃ¡csy, der seine Jugend in der Stadt verbrachte. JÃ¤hrlich im Herbst lockt das Wurstfestival Zehntausende Besucher an, die die gastronomische Vielfalt der Region feiern. BÃ©kÃ©scsaba ist zudem eine Stadt der BrÃ¼cken, da der idyllische Ã‰lÅ‘vÃ­z-Kanal das gesamte Stadtzentrum durchzieht und zu entspannten SpaziergÃ¤ngen einlÃ¤dt.",
      "hu": "BÃ©kÃ©scsaba az AlfÃ¶ld dÃ©lkeleti rÃ©szÃ©n fekvÅ‘ vÃ¡ros, BÃ©kÃ©s vÃ¡rmegye szÃ©khelye, amely leginkÃ¡bb vilÃ¡ghÃ­rÅ± kolbÃ¡szÃ¡rÃ³l Ã©s gazdag evangÃ©likus hagyomÃ¡nyairÃ³l ismert. A vÃ¡ros arculatÃ¡t a 18. szÃ¡zadban ide telepÃ¼lt szlovÃ¡kok kultÃºrÃ¡ja Ã©s a polgÃ¡ri fejlÅ‘dÃ©s hatÃ¡rozta meg, amit az impozÃ¡ns evangÃ©likus Nagytemplom â€“ KÃ¶zÃ©p-EurÃ³pa legnagyobb evangÃ©likus temploma â€“ is hirdet. BÃ©kÃ©scsaba a magyar gasztronÃ³mia egyik fellegvÃ¡ra, a minden Ã©vben megrendezett Csabai KolbÃ¡szfesztivÃ¡l az orszÃ¡g egyik legnagyobb turisztikai esemÃ©nye. A vÃ¡ros kulturÃ¡lis Ã©letÃ©t a MunkÃ¡csy MihÃ¡ly MÃºzeum Ã©s a JÃ³kai SzÃ­nhÃ¡z teszi teljessÃ©, mÃ­g a kÃ¶rnyezÅ‘ folyÃ³k Ã©s erdÅ‘k kivÃ¡lÃ³ lehetÅ‘sÃ©get adnak a termÃ©szetkÃ¶zeli kikapcsolÃ³dÃ¡sra.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das BÃ©kÃ©scsabaer Wurstfestival ist eines der grÃ¶ÃŸten gastronomischen Ereignisse Mitteleuropas.", "Die evangelische Kirche von BÃ©kÃ©scsaba ist die grÃ¶ÃŸte ihrer Art in ganz Ungarn.", "Der Maler MihÃ¡ly MunkÃ¡csy verbrachte hier seine prÃ¤genden Jahre.", "Die Stadt ist bekannt fÃ¼r ihre erstklassige GeflÃ¼gelzucht und landwirtschaftlichen Produkte."],
      "hu": [
        "A bÃ©kÃ©scsabai evangÃ©likus Nagytemplom MagyarorszÃ¡g Ã©s KÃ¶zÃ©p-EurÃ³pa legnagyobb ilyen felekezetÅ± temploma.",
        "A Csabai kolbÃ¡sz 2013 Ã³ta Hungarikum minÅ‘sÃ­tÃ©ssel rendelkezik.",
        "MunkÃ¡csy MihÃ¡ly, a vilÃ¡ghÃ­rÅ± festÅ‘mÅ±vÃ©sz itt tÃ¶ltÃ¶tte asztalosinas Ã©veit, s a mÃºzeum Å‘rzi hagyatÃ©kÃ¡t.",
        "A vÃ¡ros hÃ­res szÃ¼lÃ¶tte KodÃ¡ly ZoltÃ¡n Ã©s Arany JÃ¡nos barÃ¡tja, a festÅ‘ PÃ³steleki kastÃ©ly is a kÃ¶zelben van.",
        "BÃ©kÃ©scsaba az orszÃ¡g egyik legfontosabb rÃ¶plabda- Ã©s sportkÃ¶zpontja."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Sitz des Komitats BÃ©kÃ©s.",
        "Heimat der Csabai-Wurst, eines Hungarikums.",
        "Das BÃ©kÃ©scsabaer Wurstfestival ist eines der grÃ¶ÃŸten kulinarischen Events Ungarns.",
        "Das MunkÃ¡csy-MihÃ¡ly-Museum beherbergt die weltweit grÃ¶ÃŸte Sammlung seiner Werke.",
        "Wichtiges Zentrum der slowakischen Kultur in Ungarn.",
        "Die Stadt hat eine der grÃ¶ÃŸten evangelischen Kirchen Mitteleuropas.",
        "Bekannt fÃ¼r die Textilindustrie und Lebensmittelverarbeitung.",
        "Beliebtes Ziel fÃ¼r Radtouristen in der flachen Tiefebene."
      ],
      "hu": [
        "BÃ©kÃ©s vÃ¡rmegye szÃ©khelye.",
        "A csabai kolbÃ¡sz, mint Hungarikum hazÃ¡ja.",
        "A Csabai KolbÃ¡szfesztivÃ¡l MagyarorszÃ¡g egyik legnagyobb gasztronÃ³miai esemÃ©nye.",
        "A MunkÃ¡csy MihÃ¡ly MÃºzeum Å‘rzi a festÅ‘mÅ±vÃ©sz legnagyobb gyÅ±jtemÃ©nyÃ©t a vilÃ¡gon.",
        "A magyarorszÃ¡gi szlovÃ¡k kultÃºra fontos kÃ¶zpontja.",
        "Itt talÃ¡lhatÃ³ KÃ¶zÃ©p-EurÃ³pa egyik legnagyobb evangÃ©likus temploma.",
        "HÃ­res a textiliparÃ¡rÃ³l Ã©s az Ã©lelmiszer-feldolgozÃ¡sÃ¡rÃ³l.",
        "NÃ©pszerÅ± Ãºti cÃ©l a kerÃ©kpÃ¡ros turistÃ¡k szÃ¡mÃ¡ra az AlfÃ¶ldÃ¶n."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului BÃ©kÃ©s.",
        "Casa cÃ¢rnatului Csabai, un produs de tip 'Hungarikum'.",
        "Festivalul CÃ¢rnaÈ›ilor din BÃ©kÃ©scsaba este unul dintre cele mai mari evenimente culinare.",
        "Muzeul MunkÃ¡csy MihÃ¡ly gÄƒzduieÈ™te cea mai mare colecÈ›ie a operelor sale din lume.",
        "Centru important al culturii slovace din Ungaria.",
        "OraÈ™ul are una dintre cele mai mari biserici evanghelice din Europa CentralÄƒ.",
        "Cunoscut pentru industria textilÄƒ È™i prelucrarea alimentelor.",
        "DestinaÈ›ie popularÄƒ pentru cicloturiÈ™ti Ã®n zona de cÃ¢mpie."
      ],
      "en": [
        "Seat of BÃ©kÃ©s County.",
        "Home of the Csabai sausage, a designated 'Hungarikum'.",
        "The BÃ©kÃ©scsaba Sausage Festival is one of Hungary's largest culinary events.",
        "The MunkÃ¡csy MihÃ¡ly Museum houses the world's largest collection of his works.",
        "A major center for Slovak culture in Hungary.",
        "The city features one of the largest Lutheran churches in Central Europe.",
        "Known for its textile industry and food processing.",
        "A popular destination for cycling tourists in the flat Great Plain."
      ]
    },
  },
  {
    id: "gyula",
    type: "city",
    parent: "HU-BE",
    coords: [21.2811, 46.6447],
    name: {"de": "Jula", "hu": "Gyula", "ro": "Jula", "en": "Gyula"},
    image: "/geo-images/hungary/gyula.webp",
    description: {"de": "Historische Kurstadt nahe der rumÃ¤nischen Grenze.", "hu": "TÃ¶rtÃ©nelmi fÃ¼rdÅ‘vÃ¡ros a romÃ¡n hatÃ¡r kÃ¶zelÃ©ben.", "ro": "OraÈ™ balnear istoric aproape de graniÈ›a cu RomÃ¢nia.", "en": "Historic spa town near the Romanian border."},
    descriptionAdvanced: {
      "de": "Gyula, an der Grenze zu RumÃ¤nien im SÃ¼dosten Ungarns gelegen, ist eine Stadt von historischer Eleganz und heilender Kraft. Das Wahrzeichen der Stadt ist die einzige vollstÃ¤ndig erhaltene mittelalterliche Backsteinburg in ganz Mitteleuropa, die am Ufer eines idyllischen Sees thront. Direkt neben der Burg befindet sich das Gyulaer Burgbad, eines der schÃ¶nsten HeilbÃ¤der Ungarns, das in dem weitlÃ¤ufigen Park des einstigen AlmÃ¡sy-Schlosses angelegt wurde. Das AlmÃ¡sy-Schloss selbst ist heute ein interaktives Besucherzentrum, das faszinierende Einblicke in das Leben des ungarischen Adels und ihrer Bediensteten bietet. Gyula ist zudem die Geburtsstadt des Komponisten Ferenc Erkel, dem SchÃ¶pfer der ungarischen Nationalhymne, dessen Erbe in der ganzen Stadt gepflegt wird.",
      "hu": "Gyula a dÃ©l-alfÃ¶ldi rÃ©giÃ³ egyik legszebb Ã©s leglÃ¡togatottabb tÃ¶rtÃ©nelmi vÃ¡rosa, amely kÃ¼lÃ¶nleges kÃ¶zÃ©pkori hangulatÃ¡val Ã©s vilÃ¡ghÃ­rÅ± vÃ¡rfÃ¼rdÅ‘jÃ©vel bÅ±vÃ¶li el a lÃ¡togatÃ³kat. A vÃ¡ros Ã©kkÃ¶ve a gyulai vÃ¡r, amely KÃ¶zÃ©p-EurÃ³pa egyetlen Ã©psÃ©gben maradt gÃ³tikus sÃ­kvÃ¡ra, s falaiban ma vÃ¡rjÃ¡tÃ©kok Ã©s mÃºzeum repÃ­t vissza a mÃºltba. KÃ¶zvetlenÃ¼l a vÃ¡r mellett terÃ¼l el az egykori AlmÃ¡sy-kastÃ©ly parkjÃ¡ban a Gyulai VÃ¡rfÃ¼rdÅ‘, amely gyÃ³gyvize Ã©s modern Ã©lmÃ©nymedencÃ©i rÃ©vÃ©n az orszÃ¡g egyik legnÃ©pszerÅ±bb pihenÅ‘helye. Gyula rendezett parkjai, szÃ¶kÅ‘kÃºtjai Ã©s hÃ­res cukrÃ¡szdÃ¡i (mint a SzÃ¡zÃ©ves cukrÃ¡szda) a bÃ©kebeli kisvÃ¡rosi eleganciÃ¡t Ã¶tvÃ¶zik a modern turisztikai kÃ­nÃ¡lattal.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Gyula ist die am besten erhaltene gotische Backsteinburg in Mitteleuropa.", "Das Burgbad verfÃ¼gt Ã¼ber ein einzigartiges Heilwasser mit hohem Mineralstoffgehalt.", "In Gyula wurde Ferenc Erkel, der Komponist der ungarischen Nationalhymne, geboren.", "Das 'HundertjÃ¤hrige Kaffeehaus' der Stadt ist eine der Ã¤ltesten Konditoreien Ungarns."],
      "hu": [
        "A gyulai vÃ¡r 24 szobÃ¡bÃ³l Ã¡llÃ³ mÃºzeuma a 15. szÃ¡zadi vÃ©gvÃ¡ri Ã©letet mutatja be.",
        "A Gyulai VÃ¡rfÃ¼rdÅ‘ az AlmÃ¡sy-kastÃ©ly 8,5 hektÃ¡ros termÃ©szetvÃ©delmi parkjÃ¡ban talÃ¡lhatÃ³.",
        "Itt talÃ¡lhatÃ³ MagyarorszÃ¡g mÃ¡sodik legrÃ©gebbi cukrÃ¡szdÃ¡ja, a hÃ­res SzÃ¡zÃ©ves cukrÃ¡szda.",
        "Gyula hÃ­res szÃ¼lÃ¶tte Erkel Ferenc, a magyar nemzeti opera megteremtÅ‘je Ã©s a Himnusz zeneszerzÅ‘je.",
        "A vÃ¡rost Ã¡tszeli az Ã‰lÅ‘vÃ­z-csatorna, amely hangulatos sÃ©tÃ¡nyokat Ã©s csÃ³nakÃ¡zÃ¡si lehetÅ‘sÃ©get biztosÃ­t."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r das Burgbad.", "Die Burg Gyula ist die einzige intakte Ziegelburg Mitteleuropas."], "hu": ["A VÃ¡rfÃ¼rdÅ‘rÅ‘l ismert.", "A gyulai vÃ¡r KÃ¶zÃ©p-EurÃ³pa egyetlen Ã©pen maradt tÃ©glavÃ¡ra."], "ro": ["Cunoscut pentru Baia CetÄƒÈ›ii.", "Cetatea Gyula este singura cetate de cÄƒrÄƒmidÄƒ intactÄƒ din Europa CentralÄƒ."], "en": ["Known for the Castle Bath.", "Gyula Castle is the only intact brick castle in Central Europe."]},
  },
  {
    id: "szarvas",
    type: "city",
    parent: "HU-BE",
    coords: [20.55, 46.8667],
    name: {"de": "Szarvas", "hu": "Szarvas", "ro": "Szarvas", "en": "Szarvas"},
    image: "/geo-images/hungary/szarvas.webp",
    description: {"de": "Stadt am Fluss KÃ¶rÃ¶s, bekannt fÃ¼r ihr Arboretum.", "hu": "KÃ¶rÃ¶s-parti vÃ¡ros, arborÃ©tumÃ¡rÃ³l ismert.", "ro": "OraÈ™ pe rÃ¢ul KÃ¶rÃ¶s, cunoscut pentru arboretul sÄƒu.", "en": "City on the KÃ¶rÃ¶s river, known for its arboretum."},
    descriptionAdvanced: {
      "de": "Szarvas, im Herzen der ungarischen Tiefebene am Ufer der KÃ¶rÃ¶s gelegen, ist ein Juwel der Natur und Bildung. Die Stadt beherbergt das Pepi-Garten-Arboretum, einen der bedeutendsten botanischen GÃ¤rten des Landes mit einer beeindruckenden Vielfalt an seltenen Pflanzenarten aus aller Welt. Inmitten des Arboretums befindet sich das Mini-Ungarn-Modellpark, in dem man die wichtigsten SehenswÃ¼rdigkeiten des historischen Ungarns im Miniaturformat bewundern kann. Szarvas markiert zudem den geografischen Mittelpunkt des historischen KÃ¶nigreichs Ungarn, an den ein markantes Denkmal in Form einer WindmÃ¼hle erinnert. Die unberÃ¼hrten Ufer der KÃ¶rÃ¶s bieten ideale Bedingungen fÃ¼r Angler, Kanufahrer und Naturliebhaber, die die Ruhe der ungarischen Landschaft suchen.",
      "hu": "Szarvas a HÃ¡rmas-KÃ¶rÃ¶s partjÃ¡n fekvÅ‘ hangulatos kisvÃ¡ros, amelyet gyakran az AlfÃ¶ld Ã©kkÃ¶vekÃ©nt emlegetnek termÃ©szeti szÃ©psÃ©gei Ã©s kulturÃ¡lis kincsei miatt. Legfontosabb lÃ¡tnivalÃ³ja a Szarvasi ArborÃ©tum (Pepi-kert), MagyarorszÃ¡g egyik legnagyobb Ã©s legszebb nÃ¶vÃ©nygyÅ±jtemÃ©nye, ahol tÃ¶bb mint 1600 nÃ¶vÃ©nyfaj talÃ¡lhatÃ³. KÃ¶zvetlenÃ¼l mellette fekszik a Mini MagyarorszÃ¡g makettpark, amely interaktÃ­v mÃ³don mutatja be az orszÃ¡g legszebb Ã©pÃ¼leteit. Szarvas tÃ¶rtÃ©nelmi jelentÅ‘sÃ©gÃ©t adja, hogy itt talÃ¡lhatÃ³ a tÃ¶rtÃ©nelmi MagyarorszÃ¡g fÃ¶ldrajzi kÃ¶zÃ©ppontja is. A folyÃ³parti sÃ©tÃ¡nyok, a vÃ­zi szÃ­nhÃ¡z Ã©s a kÃ¶rnyezÅ‘ vizek vadregÃ©nyes tÃ¡jai Szarvast a termÃ©szetjÃ¡rÃ³k Ã©s a csalÃ¡dosok egyik kedvenc magyarorszÃ¡gi cÃ©lpontjÃ¡vÃ¡ teszik.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Arboretum von Szarvas (Pepi-Garten) beherbergt Ã¼ber 1.600 verschiedene Baumarten.", "Das Mini-Ungarn-Modellland zeigt Ã¼ber 50 detailgetreue Nachbildungen historischer GebÃ¤ude.", "Szarvas liegt am geografischen Mittelpunkt des einstigen GroÃŸungarns.", "Die Stadt ist ein wichtiges Zentrum fÃ¼r die Erforschung der SÃ¼ÃŸwasserfischerei."],
      "hu": [
        "A Szarvasi ArborÃ©tumot grÃ³f Bolza PÃ¡l alapÃ­totta a 19. szÃ¡zad vÃ©gÃ©n.",
        "Szarvason talÃ¡lhatÃ³ a tÃ¶rtÃ©nelmi MagyarorszÃ¡g fÃ¶ldrajzi kÃ¶zÃ©ppontjÃ¡t jelzÅ‘ emlÃ©kmÅ±.",
        "A Szarvasi VÃ­zi SzÃ­nhÃ¡z az orszÃ¡g egyik leglÃ¡tvÃ¡nyosabb szabadtÃ©ri szÃ­npada a Holt-KÃ¶rÃ¶s partjÃ¡n.",
        "Itt mÅ±kÃ¶dik az orszÃ¡g egyik legjelentÅ‘sebb Ã¶ntÃ¶zÃ©si Ã©s haltenyÃ©sztÃ©si kutatÃ³intÃ©zete.",
        "A Holt-KÃ¶rÃ¶s partjÃ¡n talÃ¡lhatÃ³ Bolza-kastÃ©ly a vÃ¡ros egyik legszebb klasszicista Ã©pÃ¼lete."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Arboretum Szarvas ist das grÃ¶ÃŸte in Ungarn.", "Hier befindet sich das geografische Zentrum des historischen Ungarns."], "hu": ["A Szarvasi ArborÃ©tum a legnagyobb MagyarorszÃ¡gon.", "Itt talÃ¡lhatÃ³ a tÃ¶rtÃ©nelmi MagyarorszÃ¡g fÃ¶ldrajzi kÃ¶zÃ©ppontja."], "ro": ["Arboretul Szarvas este cel mai mare din Ungaria.", "Aici se aflÄƒ centrul geografic al Ungariei istorice."], "en": ["The Szarvas Arboretum is the largest in Hungary.", "The geographical center of historical Hungary is located here."]},
  },
  {
    id: "miskolc",
    type: "city",
    parent: "HU-BZ",
    coords: [20.79, 48.1],
    name: {"de": "Mischkolz", "hu": "Miskolc", "ro": "Miskolc", "en": "Miskolc"},
    image: "/geo-images/hungary/miskolc.webp",
    description: {
      "de": "Miskolc, die viertgrÃ¶ÃŸte Stadt Ungarns, liegt im Nordosten des Landes am Ã¶stlichen Rand des BÃ¼kk-Gebirges. Die Stadt ist ein bedeutendes Industriezentrum, hat sich aber auch zu einem beliebten Touristenziel entwickelt. Besonders bekannt ist der Stadtteil Miskolctapolca mit seinem einzigartigen HÃ¶hlenbad, dessen Thermalwasser in natÃ¼rlichen KalksteinhÃ¶hlen flieÃŸt. Die historische Burg DiÃ³sgyÅ‘r und die malerische Umgebung von LillafÃ¼red mit dem HÃ¡mori-See machen Miskolc zu einem vielseitigen Reiseziel.",
      "hu": "Miskolc, MagyarorszÃ¡g negyedik legnagyobb vÃ¡rosa, az orszÃ¡g Ã©szakkeleti rÃ©szÃ©n, a BÃ¼kk-hegysÃ©g keleti lÃ¡bÃ¡nÃ¡l fekszik. A vÃ¡ros jelentÅ‘s ipari kÃ¶zpont, de az utÃ³bbi idÅ‘ben nÃ©pszerÅ± turisztikai cÃ©lponttÃ¡ is vÃ¡lt. KÃ¼lÃ¶nÃ¶sen hÃ­res Miskolctapolca vÃ¡rosrÃ©sze az egyedÃ¼lÃ¡llÃ³ BarlangfÃ¼rdÅ‘vel, ahol a termÃ¡lvÃ­z termÃ©szetes mÃ©szkÅ‘barlangokban folyik. A tÃ¶rtÃ©nelmi DiÃ³sgyÅ‘ri vÃ¡r Ã©s LillafÃ¼red festÅ‘i kÃ¶rnyÃ©ke a HÃ¡mori-tÃ³val Miskolcot sokoldalÃº Ãºti cÃ©llÃ¡ teszi.",
      "ro": "Miskolc, al patrulea oraÈ™ ca mÄƒrime din Ungaria, este situat Ã®n nord-estul È›Äƒrii, la marginea esticÄƒ a munÈ›ilor BÃ¼kk. OraÈ™ul este un centru industrial important, dar s-a dezvolat È™i ca o destinaÈ›ie turisticÄƒ popularÄƒ. Este deosebit de faimos cartierul Miskolctapolca cu baia sa unicÄƒ Ã®n peÈ™terÄƒ, unde apa termalÄƒ curge Ã®n peÈ™teri naturale de calcar. Cetatea istoricÄƒ DiÃ³sgyÅ‘r È™i Ã®mprejurimile pitoreÈ™ti din LillafÃ¼red, cu lacul HÃ¡mori, fac din Miskolc o destinaÈ›ie versatilÄƒ.",
      "en": "Miskolc, the fourth largest city in Hungary, is located in the northeastern part of the country at the eastern edge of the BÃ¼kk Mountains. While a major industrial center, the city has also evolved into a popular tourist destination. It is particularly famous for the Miskolctapolca district and its unique Cave Bath, where thermal water flows through natural limestone caverns. The historic DiÃ³sgyÅ‘r Castle and the picturesque area of LillafÃ¼red with Lake HÃ¡mori make Miskolc a diverse travel destination."
    },
    descriptionAdvanced: {
      "de": "Miskolc, am Ã¶stlichen Rand des BÃ¼kk-Gebirges gelegen, ist die viertgrÃ¶ÃŸte Stadt Ungarns und ein Tor zu spektakulÃ¤ren Naturwundern. Die Stadt hat eine lange industrielle Tradition, wandelt sich aber zunehmend zu einem Zentrum fÃ¼r Tourismus und Kultur. Das absolute Highlight ist das HÃ¶hlenbad von Miskolctapolca, ein in Europa einzigartiges Thermalbad in natÃ¼rlichen HÃ¶hlengÃ¤ngen. Ebenfalls sehenswert ist die mittelalterliche Burg DiÃ³sgyÅ‘r, die einst eine Lieblingsresidenz ungarischer KÃ¶niginnen war und heute durch moderne Rekonstruktionen beeindruckt. Der Stadtteil LillafÃ¼red mit seinem malerischen HÃ¡mori-See und den WasserfÃ¤llen gilt als einer der romantischsten Orte des Landes.",
      "hu": "Miskolc MagyarorszÃ¡g egyik legnagyobb vÃ¡rosa Ã©s Ã‰szak-MagyarorszÃ¡g gazdasÃ¡gi, kulturÃ¡lis kÃ¶zpontja, amely a BÃ¼kk-hegysÃ©g lÃ¡bÃ¡nÃ¡l fekszik. A vÃ¡ros arculatÃ¡t az egykori nehÃ©zipar Ã©s a termÃ©szeti kincsek kÃ¼lÃ¶nleges talÃ¡lkozÃ¡sa hatÃ¡rozza meg. Legfontosabb turisztikai vonzereje a miskolctapolcai BarlangfÃ¼rdÅ‘, ahol EurÃ³pÃ¡ban egyedÃ¼lÃ¡llÃ³ mÃ³don termÃ©szetes karsztjÃ¡ratokban fÃ¼rÃ¶dhetnek a lÃ¡togatÃ³k. Miskolchoz tartozik a festÅ‘i LillafÃ¼red a PalotaszÃ¡llÃ³val Ã©s a HÃ¡mori-tÃ³val, valamint a kÃ¶zÃ©pkori diÃ³sgyÅ‘ri vÃ¡r, amely a magyar kirÃ¡lynÃ©k jegyajÃ¡ndÃ©ka volt. A vÃ¡ros pezsgÅ‘ kulturÃ¡lis Ã©letÃ©t a Miskolci Nemzeti SzÃ­nhÃ¡z Ã©s a nemzetkÃ¶zi operafesztivÃ¡l teszi teljessÃ©, mikÃ¶zben a BÃ¼kk erdÅ‘i a termÃ©szetjÃ¡rÃ³k paradicsomÃ¡t kÃ­nÃ¡ljÃ¡k.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Miskolctapolca beherbergt ein Thermalbad, das in einem natÃ¼rlichen HÃ¶hlensystem angelegt wurde.", "Die Burg DiÃ³sgyÅ‘r war im Mittelalter traditionell der Witwensitz der ungarischen KÃ¶niginnen.", "Der Stadtteil LillafÃ¼red ist bekannt fÃ¼r seinen terrassenfÃ¶rmig angelegten HÃ¤ngegarten und WasserfÃ¤lle.", "Das Nationale Theater von Miskolc war das erste TheatergebÃ¤ude aus Stein im heutigen Ungarn."],
      "hu": [
        "MiskolctapolcÃ¡n talÃ¡lhatÃ³ EurÃ³pa egyetlen termÃ©szetes barlangfÃ¼rdÅ‘je.",
        "A diÃ³sgyÅ‘ri vÃ¡r volt a kÃ¶zÃ©pkori MagyarorszÃ¡g egyik legjelentÅ‘sebb lovagvÃ¡ra.",
        "A Miskolci Nemzeti SzÃ­nhÃ¡z az orszÃ¡g legrÃ©gebbi kÅ‘szÃ­nhÃ¡za, 1823-ban nyÃ­lt meg.",
        "LillafÃ¼reden talÃ¡lhatÃ³ MagyarorszÃ¡g legmagasabb fÃ¼ggÅ‘leges vÃ­zesÃ©se (20 mÃ©ter).",
        "Az avasi kilÃ¡tÃ³bÃ³l lenyÅ±gÃ¶zÅ‘ panorÃ¡ma nyÃ­lik az egÃ©sz vÃ¡rosra Ã©s a BÃ¼kk vonulataira."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "ViertgrÃ¶ÃŸte Stadt Ungarns und Sitz des Komitats Borsod-AbaÃºj-ZemplÃ©n.",
        "Das HÃ¶hlenbad in Miskolctapolca ist europaweit einzigartig.",
        "Die Burg DiÃ³sgyÅ‘r war einst eine bedeutende Residenz ungarischer KÃ¶niginnen.",
        "LillafÃ¼red bietet einen der schÃ¶nsten WasserfÃ¤lle und ein Schlosshotel.",
        "Die UniversitÃ¤t Miskolc ist ein wichtiges Zentrum fÃ¼r Technik und Bergbau.",
        "Das Miskolcer Opernfestival ist ein bedeutendes kulturelles Ereignis.",
        "Das BÃ¼kk-Gebirge bietet zahlreiche Wanderwege und HÃ¶hlen in der NÃ¤he.",
        "Die Stadt hat eine lange Tradition in der Schwerindustrie und Metallurgie."
      ],
      "hu": [
        "MagyarorszÃ¡g negyedik legnagyobb vÃ¡rosa Ã©s Borsod-AbaÃºj-ZemplÃ©n vÃ¡rmegye szÃ©khelye.",
        "A miskolctapolcai BarlangfÃ¼rdÅ‘ EurÃ³pa-szerte egyedÃ¼lÃ¡llÃ³ lÃ¡tvÃ¡nyossÃ¡g.",
        "A DiÃ³sgyÅ‘ri vÃ¡r egykor a magyar kirÃ¡lynÃ©k kedvelt rezidenciÃ¡ja volt.",
        "LillafÃ¼red az orszÃ¡g egyik legszebb vÃ­zesÃ©sÃ©vel Ã©s egy kastÃ©lyszÃ¡llÃ³val vÃ¡rja a lÃ¡togatÃ³kat.",
        "A Miskolci Egyetem a mÅ±szaki Ã©s bÃ¡nyÃ¡szati kÃ©pzÃ©s fontos kÃ¶zpontja.",
        "A Miskolci OperafesztivÃ¡l jelentÅ‘s kulturÃ¡lis esemÃ©ny a rÃ©giÃ³ban.",
        "A BÃ¼kk-hegysÃ©g szÃ¡mos tÃºraÃºtvonalat Ã©s barlangot kÃ­nÃ¡l a kÃ¶zelben.",
        "A vÃ¡ros hosszÃº mÃºltra tekint vissza a nehÃ©zipar Ã©s a kohÃ¡szat terÃ¼letÃ©n."
      ],
      "ro": [
        "Al patrulea oraÈ™ ca mÄƒrime din Ungaria È™i reÈ™edinÈ›a judeÈ›ului Borsod-AbaÃºj-ZemplÃ©n.",
        "Baia Ã®n peÈ™terÄƒ din Miskolctapolca este unicÄƒ Ã®n Europa.",
        "Cetatea DiÃ³sgyÅ‘r a fost odatÄƒ o reÈ™edinÈ›Äƒ importantÄƒ a reginelor maghiare.",
        "LillafÃ¼red oferÄƒ una dintre cele mai frumoase cascade È™i un hotel castel.",
        "Universitatea din Miskolc este un centru important pentru tehnicÄƒ È™i minerit.",
        "Festivalul de OperÄƒ din Miskolc este un eveniment cultural semnificativ.",
        "MunÈ›ii BÃ¼kk oferÄƒ numeroase trasee de drumeÈ›ie È™i peÈ™teri Ã®n apropiere.",
        "OraÈ™ul are o lungÄƒ tradiÈ›ie Ã®n industria grea È™i metalurgie."
      ],
      "en": [
        "Fourth largest city in Hungary and the seat of Borsod-AbaÃºj-ZemplÃ©n County.",
        "The Cave Bath in Miskolctapolca is unique in Europe.",
        "DiÃ³sgyÅ‘r Castle was once a significant residence for Hungarian queens.",
        "LillafÃ¼red features one of the most beautiful waterfalls and a castle hotel.",
        "The University of Miskolc is a major center for engineering and mining.",
        "The Miskolc Opera Festival is a prominent cultural event.",
        "The BÃ¼kk Mountains offer numerous hiking trails and caves nearby.",
        "The city has a long-standing tradition in heavy industry and metallurgy."
      ]
    },
  },
  {
    id: "szerencs",
    type: "city",
    parent: "HU-BZ",
    coords: [21.2053, 48.1631],
    name: {"de": "Szerencs", "hu": "Szerencs", "ro": "Szerencs", "en": "Szerencs"},    description: {"de": "Das 'Tor zu Tokaj', bekannt fÃ¼r seine Schokoladenfabrik.", "hu": "A 'Tokaji kapu', csokolÃ¡dÃ©gyÃ¡rÃ¡rÃ³l ismert.", "ro": "'Poarta cÄƒtre Tokaj', cunoscut pentru fabrica sa de ciocolatÄƒ.", "en": "The 'Gateway to Tokaj', known for its chocolate factory."},
    descriptionAdvanced: {
      "de": "Szerencs gilt als das ",
      "hu": "Szerencs a ZemplÃ©ni-hegysÃ©g dÃ©li kapujÃ¡nÃ¡l fekvÅ‘ tÃ¶rtÃ©nelmi vÃ¡ros, amelyet gyakran a 'csokolÃ¡dÃ© vÃ¡rosakÃ©nt' is emlegetnek a nagy mÃºltÃº Ã©dessÃ©ggyÃ¡rtÃ¡sa miatt. A telepÃ¼lÃ©s legfontosabb mÅ±emlÃ©ke a reneszÃ¡nsz stÃ­lusÃº RÃ¡kÃ³czi-vÃ¡r, amely egykor a hÃ­res erdÃ©lyi fejedelmi csalÃ¡d birtoka volt, s ma kulturÃ¡lis kÃ¶zpontkÃ©nt mÅ±kÃ¶dik. A vÃ¡r falai kÃ¶zÃ¶tt kapott helyet a ZemplÃ©ni MÃºzeum, amely vilÃ¡ghÃ­rÅ± kÃ©peslapgyÅ±jtemÃ©nyÃ©rÅ‘l Ã©s cukoripari kiÃ¡llÃ­tÃ¡sÃ¡rÃ³l nevezetes. Szerencs a Tokaji borvidÃ©k kapuja is, Ã­gy a kÃ¶rnyÃ©k kivÃ¡lÃ³ borai is hozzÃ¡tartoznak a vÃ¡ros kÃ­nÃ¡latÃ¡hoz. A rendezett parkok, a vÃ¡rkert tava Ã©s a csokolÃ¡dÃ© illata egyedÃ¼lÃ¡llÃ³, barÃ¡tsÃ¡gos hangulatot kÃ¶lcsÃ¶nÃ¶z a telepÃ¼lÃ©snek.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Szerencs war im 17. Jahrhundert ein wichtiger StÃ¼tzpunkt der RÃ¡kÃ³czi-FÃ¼rsten.", "Die Stadt ist landesweit bekannt fÃ¼r ihre historische Schokoladenproduktion.", "JÃ¤hrlich findet in Szerencs das grÃ¶ÃŸte Schokoladenfestival Ungarns statt.", "Die Stadt dient als wichtiger Knotenpunkt und Eingangstor zur Weinregion Tokaj."],
      "hu": [
        "1605-ben a szerencsi vÃ¡rban vÃ¡lasztottÃ¡k MagyarorszÃ¡g fejedelmÃ©vÃ© Bocskai IstvÃ¡nt.",
        "A ZemplÃ©ni MÃºzeum kÃ©peslapgyÅ±jtemÃ©nye az egyik legnagyobb ilyen jellegÅ± gyÅ±jtemÃ©ny a vilÃ¡gon.",
        "Szerencsen mÅ±kÃ¶dÃ¶tt Ã©vtizedekig az orszÃ¡g egyik legjelentÅ‘sebb cukorgyÃ¡ra.",
        "A vÃ¡rosban minden Ã©vben megrendezik az OrszÃ¡gos CsokolÃ¡dÃ© FesztivÃ¡lt.",
        "A RÃ¡kÃ³czi-vÃ¡r udvara kivÃ¡lÃ³ akusztikÃ¡ja miatt nÃ©pszerÅ± koncerthelyszÃ­n."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Hat eine Burg aus der Renaissancezeit.", "Traditionelle Zucker- und Schokoladenproduktion."], "hu": ["ReneszÃ¡nsz kori vÃ¡rral rendelkezik.", "HagyomÃ¡nyos cukor- Ã©s csokolÃ¡dÃ©gyÃ¡rtÃ¡s."], "ro": ["Are un castel din perioada RenaÈ™terii.", "ProducÈ›ie tradiÈ›ionalÄƒ de zahÄƒr È™i ciocolatÄƒ."], "en": ["Has a Renaissance-era castle.", "Traditional sugar and chocolate production."]},
  },
  {
    id: "tokaj",
    type: "city",
    parent: "HU-BZ",
    coords: [21.4108, 48.1225],
    name: {"de": "Tokaj", "hu": "Tokaj", "ro": "Tokaj", "en": "Tokaj"},
    image: "/geo-images/hungary/tokaj.webp",
    description: {"de": "Zentrum der historischen Weinregion Tokaj, berÃ¼hmt fÃ¼r SÃ¼ÃŸweine.", "hu": "A tÃ¶rtÃ©nelmi Tokaji borvidÃ©k kÃ¶zpontja, Ã©des borairÃ³l hÃ­res.", "ro": "Centrul regiunii viticole istorice Tokaj, faimos pentru vinurile dulci.", "en": "Center of the historic Tokaj wine region, famous for sweet wines."},
    descriptionAdvanced: {
      "de": "Tokaj ist das Herz und der Namensgeber der berÃ¼hmtesten Weinregion Ungarns, die zum UNESCO-Weltkulturerbe gehÃ¶rt. Am Zusammenfluss von TheiÃŸ und Bodrog gelegen, herrscht hier ein besonderes Mikroklima, das die Produktion des edelsÃ¼ÃŸen ",
      "hu": "Tokaj a vilÃ¡g elsÅ‘ zÃ¡rt borvidÃ©kÃ©nek nÃ©vadÃ³ vÃ¡rosa a Tisza Ã©s a Bodrog talÃ¡lkozÃ¡sÃ¡nÃ¡l, a magyar borÃ¡szat Ã©s kultÃºra egyik legfontosabb szimbÃ³luma. A vulkanikus kopasz-hegy lÃ¡bÃ¡nÃ¡l fekvÅ‘ telepÃ¼lÃ©s hangulatos utcÃ¡ival, patinÃ¡s borospincÃ©ivel Ã©s a folyÃ³parti panorÃ¡mÃ¡val varÃ¡zsolja el a lÃ¡togatÃ³kat. Tokaj vilÃ¡ghÃ­rnevÃ©t a 'kirÃ¡lyok borÃ¡nak' nevezett aszÃºnak kÃ¶szÃ¶nheti, amely a kÃ¼lÃ¶nleges mikroklÃ­ma Ã©s a vulkanikus talaj eredmÃ©nye. A vÃ¡ros 2002 Ã³ta az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze mint kultÃºrtÃ¡j. A lÃ¡togatÃ³kat a VilÃ¡gÃ¶rÃ¶ksÃ©gi BormÃºzeum, a neves pincÃ©szetek Ã©s a Bodrogon tehetÅ‘ hajÃ³tÃºrÃ¡k vÃ¡rjÃ¡k, amelyek a minÅ‘sÃ©gi pihenÃ©s Ã©s a nemes hagyomÃ¡nyok Ã©lmÃ©nyÃ©t nyÃºjtjÃ¡k.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Weinregion Tokaj wurde 2002 zum UNESCO-Weltkulturerbe erklÃ¤rt.", "Der Tokaji AszÃº wird oft als 'Wein der KÃ¶nige und KÃ¶nig der Weine' bezeichnet.", "Die Stadt liegt malerisch am Zusammenfluss der FlÃ¼sse TheiÃŸ und Bodrog.", "Die labyrinthartigen Weinkeller der Stadt erstrecken sich Ã¼ber viele Kilometer unter der Erde."],
      "hu": [
        "A Tokaji borvidÃ©k 1737 Ã³ta a vilÃ¡g elsÅ‘ zÃ¡rt borvidÃ©ke, az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.",
        "Itt kÃ©szÃ¼l a vilÃ¡ghÃ­rÅ± Tokaji AszÃº, amelyet XIV. Lajos a 'borok kirÃ¡lyÃ¡nak' nevezett.",
        "A vÃ¡ros alatt kiterjedt, Ã©vszÃ¡zados pincebirodalom hÃºzÃ³dik, ahol a nemespenÃ©sz borÃ­tja a falakat.",
        "TokajnÃ¡l talÃ¡lkozik a Bodrog Ã©s a Tisza folyÃ³, ami nÃ©pszerÅ± horgÃ¡sz- Ã©s vÃ­zitÃºra-helyszÃ­n.",
        "A Bodrog-parti sÃ©tÃ¡nyrÃ³l lÃ¡thatÃ³ a Tokaji-hegy, amely a borvidÃ©k szimbolikus kÃ¶zpontja."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Weinregion ist UNESCO-Welterbe.", "Heimat des Tokaji AszÃº."], "hu": ["A borvidÃ©k UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g.", "A Tokaji AszÃº hazÃ¡ja."], "ro": ["Regiunea viticolÄƒ este Ã®n Patrimoniul Mondial UNESCO.", "Casa vinului Tokaji AszÃº."], "en": ["The wine region is a UNESCO World Heritage site.", "Home of the Tokaji AszÃº."]},
  },
  {
    id: "aggtelek",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.4547, 48.4719],
    name: {"de": "Aggtelek", "hu": "Aggtelek", "ro": "Aggtelek", "en": "Aggtelek"},    description: {"de": "Nationalpark, berÃ¼hmt fÃ¼r sein ausgedehntes TropfsteinhÃ¶hlensystem.", "hu": "Nemzeti park, kiterjedt cseppkÅ‘barlang-rendszerÃ©rÅ‘l hÃ­res.", "ro": "Parc naÈ›ional, faimos pentru sistemul sÄƒu extins de peÈ™teri cu stalactite.", "en": "National park, famous for its extensive stalactite cave system."},
    descriptionAdvanced: {
      "de": "Aggtelek ist weltberÃ¼hmt fÃ¼r das Baradla-HÃ¶hlensystem, das zusammen mit dem angrenzenden slowakischen Karst zum UNESCO-Weltkulturerbe gehÃ¶rt. Die Baradla-HÃ¶hle ist die grÃ¶ÃŸte und beeindruckendste TropfsteinhÃ¶hle Mitteleuropas mit faszinierenden Stalaktiten- und Stalagmitenformationen von gigantischen AusmaÃŸen. Die HÃ¶hle bietet zudem einen einzigartigen Konzertsaal mit einer Akustik, die Musiker und ZuhÃ¶rer gleichermaÃŸen in Staunen versetzt. Aggtelek liegt in einem unberÃ¼hrten Nationalpark, der eine einzigartige Flora und Fauna sowie bizarre Karstlandschaften beheimatet. Es ist ein Paradies fÃ¼r Naturfreunde, Wanderer und alle, die in die mysteriÃ¶se Unterwelt der Natur eintauchen mÃ¶chten.",
      "hu": "Aggtelek az Ã‰szaki-kÃ¶zÃ©phegysÃ©g Ã©szaki rÃ©szÃ©n fekvÅ‘ falu, amely vilÃ¡ghÃ­rnevÃ©t a hatÃ¡rÃ¡ban talÃ¡lhatÃ³ Baradla-barlangnak kÃ¶szÃ¶nheti. Ez KÃ¶zÃ©p-EurÃ³pa leghosszabb Ã©s egyik leglÃ¡tvÃ¡nyosabb cseppkÅ‘barlangja, amely az Aggteleki-karszt Ã©s a SzlovÃ¡k-karszt barlangvilÃ¡gÃ¡nak rÃ©szekÃ©nt az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze. A lÃ¡togatÃ³kat monumentÃ¡lis cseppkÅ‘kÃ©pzÅ‘dmÃ©nyek, hatalmas termek Ã©s fÃ¶ld alatti patakok vÃ¡rjÃ¡k, amelyek a termÃ©szet Ã©vezredes munkÃ¡jÃ¡t dicsÃ©rik. Aggtelek kÃ¶rnyÃ©ke, az Aggteleki Nemzeti Park vadregÃ©nyes tÃ¡jaival, tanÃ¶svÃ©nyeivel Ã©s ritka Ã©lÅ‘vilÃ¡gÃ¡val a termÃ©szetjÃ¡rÃ³k Ã©s a barlangÃ¡szok paradicsoma. A barlangi koncertek kÃ¼lÃ¶nleges akusztikÃ¡ja pedig felejthetetlen kulturÃ¡lis Ã©lmÃ©nyt nyÃºjt a fÃ¶ld mÃ©lyÃ©n.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das HÃ¶hlensystem von Aggtelek und dem Slowakischen Karst ist Teil des UNESCO-Weltkulturerbes.", "Die Baradla-HÃ¶hle ist Ã¼ber 25 Kilometer lang und beherbergt den hÃ¶chsten Tropfstein Ungarns.", "In der HÃ¶hle finden aufgrund der hervorragenden Akustik regelmÃ¤ÃŸig klassische Konzerte statt.", "Der Nationalpark Aggtelek schÃ¼tzt die einzigartige Karstlandschaft und seltene Tierarten."],
      "hu": [
        "A Baradla-barlang teljes hossza meghaladja a 25 kilomÃ©tert, s Ã¡tnyÃºlik SzlovÃ¡kiÃ¡ba is.",
        "Az Aggteleki-karszt barlangjai 1995-ben kerÃ¼ltek fel az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©gi listÃ¡jÃ¡ra.",
        "A barlangban talÃ¡lhatÃ³ az orszÃ¡g legmagasabb cseppkÃ¶ve, a 19 mÃ©ter magas 'CsillagvizsgÃ¡lÃ³'.",
        "Az Aggteleki Nemzeti Park MagyarorszÃ¡g elsÅ‘ olyan parkja, amelyet elsÅ‘sorban geolÃ³giai Ã©rtÃ©kek vÃ©delmÃ©re hoztak lÃ©tre.",
        "A Hangversenyteremben rendszeresen tartanak komoly- Ã©s kÃ¶nnyÅ±zenei koncerteket a kivÃ¡lÃ³ akusztika miatt."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Baradla-HÃ¶hle ist Teil des UNESCO-Welterbes.", "Erstreckt sich Ã¼ber die Grenze zur Slowakei."], "hu": ["A Baradla-barlang az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.", "ÃtnyÃºlik a szlovÃ¡k hatÃ¡ron."], "ro": ["PeÈ™tera Baradla este parte a Patrimoniului Mondial UNESCO.", "Se extinde peste graniÈ›a cu Slovacia."], "en": ["The Baradla Cave is part of the UNESCO World Heritage site.", "Extends across the border into Slovakia."]},
  },
  {
    id: "szeged",
    type: "city",
    parent: "HU-CS",
    coords: [20.1414, 46.253],
    name: {"de": "Szegedin", "hu": "Szeged", "ro": "Seghedin", "en": "Szeged"},
    image: "/geo-images/hungary/szeged.webp",
    description: {
      "de": "Szeged, bekannt als die 'Stadt des Sonnenscheins', liegt im SÃ¼den Ungarns an der MÃ¼ndung der Maros in die TheiÃŸ. Die Stadt wurde nach der verheerenden Flut von 1879 fast vollstÃ¤ndig im eklektischen Stil neu aufgebaut, was ihr ein groÃŸzÃ¼giges und harmonisches Stadtbild verleiht. Das Wahrzeichen ist die beeindruckende Votivkirche auf dem Domplatz, wo im Sommer die berÃ¼hmten Freilichtspiele stattfinden. Szeged ist zudem weltberÃ¼hmt fÃ¼r seine Salami, seinen Paprika und seine kÃ¶stliche Fischsuppe.",
      "hu": "Szeged, a 'napfÃ©ny vÃ¡rosa', MagyarorszÃ¡g dÃ©li rÃ©szÃ©n, a Maros Ã©s a Tisza talÃ¡lkozÃ¡sÃ¡nÃ¡l fekszik. Az 1879-es nagy Ã¡rvÃ­z utÃ¡n a vÃ¡rost szinte teljesen ÃºjjÃ¡Ã©pÃ­tettÃ©k eklektikus stÃ­lusban, ami tÃ¡gas Ã©s harmonikus vÃ¡roskÃ©pet eredmÃ©nyezett. Legismertebb jelkÃ©pe a DÃ³m tÃ©ren Ã¡llÃ³ Fogadalmi Templom, ahol nyaranta a hÃ­res Szegedi SzabadtÃ©ri JÃ¡tÃ©kokat rendezik. Szeged vilÃ¡ghÃ­rÅ± a Pick szalÃ¡mijÃ¡rÃ³l, a paprikÃ¡jÃ¡rÃ³l Ã©s a fensÃ©ges halÃ¡szlevÃ©rÅ‘l is.",
      "ro": "Seghedin, cunoscut ca 'oraÈ™ul soarelui', este situat Ã®n sudul Ungariei, la confluenÈ›a rÃ¢urilor MureÈ™ È™i Tisa. OraÈ™ul a fost reconstruit aproape Ã®n Ã®ntregime Ã®n stil eclectic dupÄƒ marea inundaÈ›ie din 1879, ceea ce Ã®i conferÄƒ un aspect urban aerisit È™i armonios. Simbolul sÄƒu este Biserica VotivÄƒ impresionantÄƒ din PiaÈ›a Domului, unde vara au loc faimoasele Jocuri Ã®n Aer Liber. Seghedin este, de asemenea, renumit Ã®n Ã®ntreaga lume pentru salamul Pick, boia È™i ciorba de peÈ™te.",
      "en": "Szeged, known as the 'City of Sunshine,' is located in southern Hungary at the confluence of the Maros and Tisza rivers. The city was almost entirely rebuilt in an eclectic style after the devastating flood of 1879, resulting in a spacious and harmonious cityscape. Its landmark is the impressive Votive Church on Cathedral Square, which hosts the famous Open-Air Festival every summer. Szeged is also world-famous for its Pick salami, paprika, and delicious fish soup."
    },
    descriptionAdvanced: {
      "de": "Szeged, am Ufer der TheiÃŸ im sonnigen SÃ¼den Ungarns gelegen, wird aufgrund seiner vielen Sonnenstunden oft als ",
      "hu": "Szeged, a 'napfÃ©ny vÃ¡rosa', DÃ©l-MagyarorszÃ¡g legnagyobb vÃ¡rosa Ã©s kulturÃ¡lis kÃ¶zpontja a Tisza Ã©s a Maros talÃ¡lkozÃ¡sÃ¡nÃ¡l. A telepÃ¼lÃ©st az 1879-es nagy Ã¡rvÃ­z utÃ¡n szinte teljesen ÃºjjÃ¡Ã©pÃ­tettÃ©k, Ã­gy ma egysÃ©ges Ã©s gyÃ¶nyÃ¶rÅ± szecessziÃ³s, valamint eklektikus belvÃ¡rossal bÃ¼szkÃ©lkedhet. Szeged jelkÃ©pe a monumentÃ¡lis Fogadalmi Templom Ã©s az elÅ‘tte elterÃ¼lÅ‘ DÃ³m tÃ©r, amely a vilÃ¡ghÃ­rÅ± Szegedi SzabadtÃ©ri JÃ¡tÃ©kok otthona. A vÃ¡ros hÃ­res egyetemi Ã©letÃ©rÅ‘l, tudomÃ¡nyos eredmÃ©nyeirÅ‘l Ã©s gasztronÃ³miai kÃ¼lÃ¶nlegessÃ©geirÅ‘l, mint a Pick szalÃ¡mi vagy a szegedi fÅ±szerpaprika. A Tisza-parti sÃ©tÃ¡nyok, a pezsgÅ‘ teraszok Ã©s a mediterrÃ¡n hangulat Szegedet az orszÃ¡g egyik legkedveltebb turisztikai cÃ©lpontjÃ¡vÃ¡ teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szeged wird wegen des sonnigen Klimas oft als die 'Stadt des Sonnenscheins' bezeichnet.", "Der Dom von Szeged ist eine der grÃ¶ÃŸten Kirchen Ungarns und wurde nach einer Flutkatastrophe erbaut.", "Die Stadt ist die Heimat der weltberÃ¼hmten Pick-Salami und des Szegediner Paprikas.", "Auf dem Domplatz finden jÃ¤hrlich die renommierten Szegeder Freilichtspiele statt."],
      "hu": [
        "Szeged MagyarorszÃ¡g legnaposabb vÃ¡rosa, Ã©vente tÃ¶bb mint 2100 Ã³rÃ¡t sÃ¼t a nap.",
        "A Szegedi DÃ³m orgonÃ¡ja az egyik legnagyobb EurÃ³pÃ¡ban, tÃ¶bb mint 9000 sÃ­ppal.",
        "Itt alapÃ­tottÃ¡k a vilÃ¡ghÃ­rÅ± Pick SzalÃ¡mi Ã©s Szegedi Paprika gyÃ¡rat.",
        "Szent-GyÃ¶rgyi Albert a Szegedi TudomÃ¡nyegyetemen vÃ©gzett kutatÃ¡saiÃ©rt kapott Nobel-dÃ­jat.",
        "A Szegedi SzabadtÃ©ri JÃ¡tÃ©kok az orszÃ¡g legrÃ©gebbi Ã©s legnagyobb nyÃ¡ri szÃ­nhÃ¡zi fesztivÃ¡lja."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "DrittgrÃ¶ÃŸte Stadt Ungarns und Sitz des Komitats CsongrÃ¡d-CsanÃ¡d.",
        "Die UniversitÃ¤t Szeged gehÃ¶rt zu den besten Forschungseinrichtungen des Landes.",
        "Die Votivkirche (Dom) wurde als Dank fÃ¼r den Wiederaufbau nach der Flut erbaut.",
        "Heimat der weltberÃ¼hmten Pick-Salami und des Szegeder Paprikas.",
        "Die Szegeder Freilichtspiele sind das grÃ¶ÃŸte Theaterfestival Ungarns.",
        "Die Stadt hat die meisten Sonnenstunden pro Jahr in Ungarn.",
        "Bekannt fÃ¼r die Szegeder Fischsuppe (HalÃ¡szlÃ©), eine kulinarische SpezialitÃ¤t.",
        "Das MÃ³ra-Ferenc-Museum zeigt bedeutende archÃ¤ologische und historische Sammlungen."
      ],
      "hu": [
        "MagyarorszÃ¡g harmadik legnagyobb vÃ¡rosa Ã©s CsongrÃ¡d-CsanÃ¡d vÃ¡rmegye szÃ©khelye.",
        "A Szegedi TudomÃ¡nyegyetem az orszÃ¡g egyik legjobb kutatÃ³egyeteme.",
        "A Fogadalmi Templom (DÃ³m) az Ã¡rvÃ­z utÃ¡ni ÃºjjÃ¡Ã©pÃ­tÃ©s hÃ¡lÃ¡jakÃ©nt Ã©pÃ¼lt.",
        "A vilÃ¡ghÃ­rÅ± Pick szalÃ¡mi Ã©s a szegedi paprika hazÃ¡ja.",
        "A Szegedi SzabadtÃ©ri JÃ¡tÃ©kok MagyarorszÃ¡g legnagyobb szÃ­nhÃ¡zi fesztivÃ¡lja.",
        "Itt a legmagasabb a napsÃ¼tÃ©ses Ã³rÃ¡k szÃ¡ma Ã©vente MagyarorszÃ¡gon.",
        "HÃ­res a szegedi halÃ¡szlÃ©, amely igazi gasztronÃ³miai kÃ¼lÃ¶nlegessÃ©g.",
        "A MÃ³ra Ferenc MÃºzeum jelentÅ‘s rÃ©gÃ©szeti Ã©s tÃ¶rtÃ©nelmi gyÅ±jtemÃ©nyekkel bÃ­r."
      ],
      "ro": [
        "Al treilea oraÈ™ ca mÄƒrime din Ungaria È™i reÈ™edinÈ›a judeÈ›ului CsongrÃ¡d-CsanÃ¡d.",
        "Universitatea din Seghedin este una dintre cele mai bune instituÈ›ii de cercetare.",
        "Biserica VotivÄƒ (Domul) a fost construitÄƒ ca mulÈ›umire pentru reconstrucÈ›ie.",
        "Casa faimosului salam Pick È™i a boielei de Seghedin.",
        "Jocurile Ã®n Aer Liber din Seghedin sunt cel mai mare festival de teatru.",
        "OraÈ™ul are cel mai mare numÄƒr de ore Ã®nsorite pe an din Ungaria.",
        "Faimos pentru ciorba de peÈ™te de Seghedin (HalÃ¡szlÃ©), o specialitate culinarÄƒ.",
        "Muzeul MÃ³ra Ferenc prezintÄƒ colecÈ›ii arheologice È™i istorice importante."
      ],
      "en": [
        "Third largest city in Hungary and the seat of CsongrÃ¡d-CsanÃ¡d County.",
        "The University of Szeged is one of the top research universities in the country.",
        "The Votive Church (Cathedral) was built in gratitude for the post-flood rebuilding.",
        "Home to the world-famous Pick salami and Szeged paprika.",
        "The Szeged Open-Air Festival is the largest theater festival in Hungary.",
        "The city enjoys the highest number of sunny hours per year in Hungary.",
        "Famous for the Szeged fish soup (HalÃ¡szlÃ©), a local culinary specialty.",
        "The MÃ³ra Ferenc Museum houses significant archaeological and collections."
      ]
    },
  },
  {
    id: "hodmezovasarhely",
    type: "city",
    parent: "HU-CS",
    coords: [20.3189, 46.4308],
    name: {"de": "Neumarkt an der TheiÃŸ", "hu": "HÃ³dmezÅ‘vÃ¡sÃ¡rhely", "ro": "HÃ³dmezÅ‘vÃ¡sÃ¡rhely", "en": "HÃ³dmezÅ‘vÃ¡sÃ¡rhely"},
    image: "/geo-images/hungary/hodmezovasarhely.webp",
    description: {"de": "Stadt in SÃ¼dungarn mit einer reichen landwirtschaftlichen Tradition.", "hu": "DÃ©l-magyarorszÃ¡gi vÃ¡ros gazdag mezÅ‘gazdasÃ¡gi hagyomÃ¡nyokkal.", "ro": "OraÈ™ Ã®n sudul Ungariei cu o bogatÄƒ tradiÈ›ie agricolÄƒ.", "en": "City in southern Hungary with a rich agricultural tradition."},
    descriptionAdvanced: {
      "de": "HÃ³dmezÅ‘vÃ¡sÃ¡rhely, eine Stadt mit Komitatsrecht im SÃ¼dosten Ungarns, ist bekannt fÃ¼r ihre enge Verbindung zur Landwirtschaft und bildenden Kunst. Das Stadtbild ist geprÃ¤gt von weiten PlÃ¤tzen und einer Mischung aus lÃ¤ndlicher Tradition und bÃ¼rgerlicher Eleganz. Die Stadt beherbergt bedeutende Museen wie das Tornyai-JÃ¡nos-Museum, das die reiche archÃ¤ologische und kÃ¼nstlerische Geschichte der Region dokumentiert. Ein besonderes architektonisches Juwel ist das Rathaus, das den Stolz der ehemaligen Agrarstadt widerspiegelt. HÃ³dmezÅ‘vÃ¡sÃ¡rhely ist zudem ein wichtiger Ort fÃ¼r das Kunsthandwerk, insbesondere fÃ¼r die traditionelle TÃ¶pferei, die in der Region eine lange Geschichte hat.",
      "hu": "HÃ³dmezÅ‘vÃ¡sÃ¡rhely az AlfÃ¶ld dÃ©li rÃ©szÃ©n fekvÅ‘ nagyvÃ¡ros, amely gazdag mezÅ‘vÃ¡rosi hagyomÃ¡nyairÃ³l Ã©s Ã©lÃ©nk mÅ±vÃ©szeti Ã©letÃ©rÅ‘l ismert. A vÃ¡ros arculatÃ¡t a tÃ¡gas terek, a felÃºjÃ­tott szecessziÃ³s palotÃ¡k Ã©s a hÃ­res agyagipar hagyomÃ¡nyai hatÃ¡rozzÃ¡k meg. HÃ³dmezÅ‘vÃ¡sÃ¡rhely Ã©vszÃ¡zadok Ã³ta a festÅ‘k Ã©s keramikusok vÃ¡rosa, az itteni AlkotÃ³hÃ¡z ma is a magyar mÅ±vÃ©szeti Ã©let fontos bÃ¡zisa. A telepÃ¼lÃ©s bÃ¼szkÃ©lkedhet az orszÃ¡g egyik legjobb Ã¡llapotban fennmaradt Ã¡rvÃ­zvÃ©delmi falÃ¡val, valamint a nÃ©pszerÅ± TÃ¶rÃ¶k SÃ¡ndor StrandfÃ¼rdÅ‘vel. A vÃ¡ros kÃ¶rnyÃ©ki pusztÃ¡k Ã©s a Tisza folyÃ³ kÃ¶zelsÃ©ge kivÃ¡lÃ³ lehetÅ‘sÃ©get ad a termÃ©szetjÃ¡rÃ¡sra Ã©s a vÃ­zi sportokra, mikÃ¶zben a vÃ¡ros maga a nyugodt, polgÃ¡ri alfÃ¶ldi Ã©let megtestesÃ­tÅ‘je.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Stadt besitzt eines der flÃ¤chenmÃ¤ÃŸig grÃ¶ÃŸten Verwaltungsgebiete in Ungarn.", "Das Tornyai-JÃ¡nos-Museum zeigt bedeutende Werke ungarischer Maler des 20. Jahrhunderts.", "Die Region ist bekannt fÃ¼r ihre traditionelle TÃ¶pferkunst und Keramikherstellung.", "HÃ³dmezÅ‘vÃ¡sÃ¡rhely ist eine bedeutende Stadt fÃ¼r den Reitsport und die Landwirtschaft."],
      "hu": [
        "HÃ³dmezÅ‘vÃ¡sÃ¡rhely MagyarorszÃ¡g mÃ¡sodik legnagyobb terÃ¼letÅ± vÃ¡rosa a kiterjedt pusztai rÃ©szek miatt.",
        "A vÃ¡rosban talÃ¡lhatÃ³ EmlÃ©kpont MÃºzeum az orszÃ¡g egyik legmodernebb tÃ¶rtÃ©neti kiÃ¡llÃ­tÃ³helye.",
        "A hÃ³dmezÅ‘vÃ¡sÃ¡rhelyi majolika Ã©s kerÃ¡mia hagyomÃ¡nyai vilÃ¡gszerte elismertek.",
        "Itt talÃ¡lhatÃ³ az orszÃ¡g egyetlen olyan Ã¡rvÃ­zvÃ©delmi fala, amely a vÃ¡ros szÃ­vÃ©ben fut vÃ©gig.",
        "A vÃ¡ros fÅ‘terÃ©n Ã¡llÃ³ VÃ¡roshÃ¡za tornya 57 mÃ©ter magas, s az alfÃ¶ldi eklektika remeke."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["ZweitgrÃ¶ÃŸte Stadt Ungarns nach FlÃ¤che.", "Bekannt fÃ¼r ihre TÃ¶pferkunst."], "hu": ["MagyarorszÃ¡g mÃ¡sodik legnagyobb terÃ¼letÅ± vÃ¡rosa.", "FazekassÃ¡gÃ¡rÃ³l ismert."], "ro": ["Al doilea oraÈ™ ca mÄƒrime din Ungaria dupÄƒ suprafaÈ›Äƒ.", "Cunoscut pentru olÄƒritul sÄƒu."], "en": ["Second largest city in Hungary by area.", "Known for its pottery."]},
  },
  {
    id: "mako",
    type: "city",
    parent: "HU-CS",
    coords: [20.4806, 46.2167],
    name: {"de": "MakÃ³", "hu": "MakÃ³", "ro": "MacÄƒu", "en": "MakÃ³"},
    image: "/geo-images/hungary/mako.webp",
    description: {"de": "Stadt nahe der rumÃ¤nischen Grenze, berÃ¼hmt fÃ¼r ihre Zwiebeln.", "hu": "VÃ¡ros a romÃ¡n hatÃ¡r kÃ¶zelÃ©ben, hagymÃ¡jÃ¡rÃ³l hÃ­res.", "ro": "OraÈ™ aproape de graniÈ›a cu RomÃ¢nia, faimos pentru ceapa sa.", "en": "City near the Romanian border, famous for its onions."},
    descriptionAdvanced: {
      "de": "MakÃ³, im SÃ¼dosten Ungarns nahe der rumÃ¤nischen Grenze gelegen, ist landesweit und international als die ",
      "hu": "MakÃ³ a Maros partjÃ¡n fekvÅ‘ vÃ¡ros, amely vilÃ¡ghÃ­rnevÃ©t a makÃ³i vÃ¶rÃ¶shagymÃ¡nak Ã©s az elmÃºlt Ã©vekben megvalÃ³sult lenyÅ±gÃ¶zÅ‘ organikus Ã©pÃ­tÃ©szetÃ©nek kÃ¶szÃ¶nheti. A vÃ¡ros szinte minden fontos kÃ¶zÃ©pÃ¼lete a hÃ­res Ã©pÃ­tÃ©sz, Makovecz Imre tervei alapjÃ¡n kÃ©szÃ¼lt, egyedÃ¼lÃ¡llÃ³, termÃ©szetkÃ¶zeli vÃ¡roskÃ©pet alkotva. MakÃ³ legfÅ‘bb bÃ¼szkesÃ©ge a Hagymatikum GyÃ³gyfÃ¼rdÅ‘, amely kÃ¼lÃ¶nleges formavilÃ¡gÃ¡val Ã©s gyÃ³gyiszapjÃ¡val vonzza a lÃ¡togatÃ³kat. A Maros-parti lombkoronasÃ©tÃ¡ny Ã©s a kalandpark a termÃ©szet Ã©s az aktÃ­v kikapcsolÃ³dÃ¡s kedvelÅ‘inek kÃ­nÃ¡l Ã©lmÃ©nyeket. MakÃ³ a hagyomÃ¡nyok Ã©s a modern Ã©pÃ­tÃ©szeti bravÃºrok vÃ¡rosa, ahol a hagymatermesztÃ©s Ã©vszÃ¡zados mÃºltja talÃ¡lkozik a jÃ¶vÅ‘be mutatÃ³ designnal.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["MakÃ³ ist weltberÃ¼hmt fÃ¼r seine Zwiebelproduktion, die als ungarisches Kulturerbe gilt.", "Das Heilbad 'Hagymatikum' wurde vom renommierten Architekten Imre Makovecz entworfen.", "Der Fluss Maros liefert den heilenden Heilschlamm fÃ¼r die medizinischen Behandlungen in der Stadt.", "MakÃ³ beherbergt einen einzigartigen Baumkronenpfad am Ufer des Maros."],
      "hu": [
        "MakÃ³ a magyar vÃ¶rÃ¶shagyma-termesztÃ©s tÃ¶rtÃ©nelmi kÃ¶zpontja, a makÃ³i hagyma hungarikum.",
        "A Hagymatikum fÃ¼rdÅ‘ a vilÃ¡g egyik legszebbnek vÃ¡lasztott organikus Ã©pÃ­tÃ©szeti alkotÃ¡sa.",
        "Itt talÃ¡lhatÃ³ MagyarorszÃ¡g leghosszabb (kÃ¶zel 200 mÃ©ter) lombkoronasÃ©tÃ¡nya a Maros Ã¡rtÃ©ri erdÅ‘jÃ©ben.",
        "A vÃ¡rosban 12 Makovecz Imre Ã¡ltal tervezett Ã©pÃ¼let talÃ¡lhatÃ³, ami egyedÃ¼lÃ¡llÃ³ a vilÃ¡gon.",
        "MakÃ³ hÃ­res a Maros gyÃ³gyiszapjÃ¡rÃ³l, amelyet a mozgÃ¡sszervi betegsÃ©gek kezelÃ©sÃ©re hasznÃ¡lnak."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die MakÃ³-Zwiebel ist ein geschÃ¼tztes Agrarprodukt.", "Das Thermalbad Hagymatikum wurde von Imre Makovecz entworfen."], "hu": ["A makÃ³i hagyma vÃ©dett mezÅ‘gazdasÃ¡gi termÃ©k.", "A Hagymatikum termÃ¡lfÃ¼rdÅ‘t Makovecz Imre tervezte."], "ro": ["Ceapa de MakÃ³ este un produs agricol protejat.", "Baia termalÄƒ Hagymatikum a fost proiectatÄƒ de Imre Makovecz."], "en": ["The MakÃ³ onion is a protected agricultural product.", "The Hagymatikum thermal bath was designed by Imre Makovecz."]},
  },
  {
    id: "szekesfehervar",
    type: "city",
    parent: "HU-FE",
    coords: [18.4103, 47.1899],
    name: {"de": "StuhlweiÃŸenburg", "hu": "SzÃ©kesfehÃ©rvÃ¡r", "ro": "SzÃ©kesfehÃ©rvÃ¡r", "en": "SzÃ©kesfehÃ©rvÃ¡r"},
    image: "/geo-images/hungary/szekesfehervar.webp",
    description: {
      "de": "SzÃ©kesfehÃ©rvÃ¡r, eine der Ã¤ltesten StÃ¤dte Ungarns, war im Mittelalter die KrÃ¶nungs- und GrabstÃ¤tte der ungarischen KÃ¶nige. Die Stadt liegt in Zentralungarn und ist heute ein bedeutendes Industrie- und Kulturzentrum. Besucher kÃ¶nnen die Ruinen der KrÃ¶nungsbasilika im Ruinengarten besichtigen oder das mÃ¤rchenhafte Bory-Schloss bewundern, das von einem KÃ¼nstler im 20. Jahrhundert erbaut wurde. Die barocke Altstadt lÃ¤dt mit ihren DenkmÃ¤lern und Museen zu einer Zeitreise in die ungarische Geschichte ein.",
      "hu": "SzÃ©kesfehÃ©rvÃ¡r, MagyarorszÃ¡g egyik legÅ‘sibb vÃ¡rosa, a kÃ¶zÃ©pkorban a magyar kirÃ¡lyok koronÃ¡zÃ³- Ã©s temetkezÃ©si helye volt. A vÃ¡ros KÃ¶zÃ©p-MagyarorszÃ¡gon fekszik, Ã©s ma jelentÅ‘s ipari Ã©s kulturÃ¡lis kÃ¶zpont. A lÃ¡togatÃ³k megtekinthetik a koronÃ¡zÃ³ bazilika romjait a Romkertben, vagy megcsodÃ¡lhatjÃ¡k a mesebeli Bory-vÃ¡rat, amelyet egy mÅ±vÃ©sz Ã©pÃ­tett a 20. szÃ¡zadban. A barokk Ã³vÃ¡ros mÅ±emlÃ©keivel Ã©s mÃºzeumaival idÅ‘utazÃ¡sra hÃ­v a magyar tÃ¶rtÃ©nelembe.",
      "ro": "SzÃ©kesfehÃ©rvÃ¡r, unul dintre cele mai vechi oraÈ™e din Ungaria, a fost locul de Ã®ncoronare È™i de Ã®nmormÃ¢ntare al regilor maghiari Ã®n Evul Mediu. OraÈ™ul este situat Ã®n centrul Ungariei È™i este astÄƒzi un important centru industrial È™i cultural. Vizitatorii pot vedea ruinele bazilicii de Ã®ncoronare Ã®n GrÄƒdina Ruinelor sau pot admira castelul de basm Bory, construit de un artist Ã®n secolul XX. Centrul vechi baroc, cu monumentele È™i muzeele sale, invitÄƒ la o cÄƒlÄƒtorie Ã®n timpul istoriei maghiare.",
      "en": "SzÃ©kesfehÃ©rvÃ¡r, one of Hungary's oldest cities, served as the coronation and burial site for Hungarian kings during the Middle Ages. Located in central Hungary, it is now a major industrial and cultural hub. Visitors can explore the ruins of the coronation basilica in the Ruin Garden or admire the fairytale-like Bory Castle, built by an artist in the 20th century. The Baroque old town, with its monuments and museums, offers a journey through Hungarian history."
    },
    descriptionAdvanced: {
      "de": "SzÃ©kesfehÃ©rvÃ¡r, eine der Ã¤ltesten StÃ¤dte Ungarns, war im Mittelalter die KrÃ¶nungsstadt der ungarischen KÃ¶nige und ist tief mit der Geschichte des Landes verwurzelt. Hier wurden 37 KÃ¶nige gekrÃ¶nt und 15 von ihnen beigesetzt, was der Stadt den Beinamen ",
      "hu": "SzÃ©kesfehÃ©rvÃ¡r, a 'kirÃ¡lyok vÃ¡rosa', MagyarorszÃ¡g egyik legfontosabb tÃ¶rtÃ©nelmi kÃ¶zpontja, ahol a kÃ¶zÃ©pkorban a magyar uralkodÃ³kat koronÃ¡ztÃ¡k Ã©s temettÃ©k el. A vÃ¡ros szÃ­ve a barokk belvÃ¡ros, ahol a tÃ¶rtÃ©nelmi falak Ã©s a modern szobrok harmonikus elegye vÃ¡rja a lÃ¡togatÃ³kat. Legfontosabb emlÃ©khelye a Nemzeti EmlÃ©khely (KÃ¶zÃ©pkori Romkert), ahol egykor a monumentÃ¡lis Szent IstvÃ¡n-bazilika Ã¡llt. SzÃ©kesfehÃ©rvÃ¡r ma dinamikusan fejlÅ‘dÅ‘ ipari Ã©s kulturÃ¡lis kÃ¶zpont, bÃ¼szkÃ©lkedhet a mesebeli Bory-vÃ¡rral, gazdag mÃºzeumokkal Ã©s pezsgÅ‘ tereivel. A vÃ¡ros ideÃ¡lis fekvÃ©se Budapest Ã©s a Balaton kÃ¶zÃ¶tt, valamint tÃ¶rtÃ©nelmi mÃ©lysÃ©ge SzÃ©kesfehÃ©rvÃ¡rt az orszÃ¡g egyik legfontosabb turisztikai cÃ©lpontjÃ¡vÃ¡ teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["SzÃ©kesfehÃ©rvÃ¡r war im Mittelalter die offizielle KrÃ¶nungsstadt ungarischer KÃ¶nige.", "Im Ruinengarten sind die Fundamente der einstigen KrÃ¶nungsbasilika zu besichtigen.", "Die Bory-Burg wurde von einem einzigen Mann Ã¼ber 36 Jahre hinweg als Denkmal der Liebe erbaut.", "Die Stadt beherbergt die 'Blasglocke', ein einzigartiges Figurenoktett in der Innenstadt."],
      "hu": [
        "SzÃ©kesfehÃ©rvÃ¡ron Ã¶sszesen 37 kirÃ¡lykoronÃ¡zÃ¡s Ã©s 15 kirÃ¡lytemetÃ©s tÃ¶rtÃ©nt a kÃ¶zÃ©pkorban.",
        "A Bory-vÃ¡r egyedÃ¼lÃ¡llÃ³ Ã©pÃ­tmÃ©ny, amelyet Bory JenÅ‘ szobrÃ¡sz sajÃ¡t kezÅ±leg Ã©pÃ­tett tÃ¶bb Ã©vtizeden Ã¡t.",
        "Itt talÃ¡lhatÃ³ az orszÃ¡g egyik legszebb barokk fÅ‘tere Ã©s a pÃ¼spÃ¶ki szÃ©kesegyhÃ¡z.",
        "SzÃ©kesfehÃ©rvÃ¡r hÃ­res Ã³rajÃ¡tÃ©kÃ¡rÃ³l, amely a magyar tÃ¶rtÃ©nelem nagyjait mutatja be naponta tÃ¶bbszÃ¶r.",
        "A vÃ¡ros ma MagyarorszÃ¡g egyik legjelentÅ‘sebb gazdasÃ¡gi motorja Ã©s informatikai kÃ¶zpontja."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Ehemalige Hauptstadt Ungarns im Mittelalter.",
        "Hier wurden 37 ungarische KÃ¶nige gekrÃ¶nt und 15 begraben.",
        "Der Ruinengarten bewahrt die Fundamente der einstigen KrÃ¶nungsbasilika.",
        "Das Bory-Schloss ist ein einzigartiges Bauwerk aus Beton und Kunst.",
        "Sitz des Komitats FejÃ©r und ein wichtiger Industriestandort.",
        "Die Stadt beherbergt das renommierte KÃ¶nig-Stephan-Museum.",
        "Bekannt fÃ¼r das jÃ¤hrliche 'KÃ¶nigliche Tage' Festival im August.",
        "Liegt verkehrsgÃ¼nstig zwischen Budapest und dem Plattensee."
      ],
      "hu": [
        "MagyarorszÃ¡g egykori fÅ‘vÃ¡rosa a kÃ¶zÃ©pkorban.",
        "Itt 37 magyar kirÃ¡lyt koronÃ¡ztak meg Ã©s 15-Ã¶t temettek el.",
        "A Romkert Å‘rzi az egykori koronÃ¡zÃ³ bazilika alapfalait.",
        "A Bory-vÃ¡r egy egyedÃ¼lÃ¡llÃ³, betonbÃ³l kÃ©szÃ¼lt mÅ±vÃ©szeti alkotÃ¡s.",
        "FejÃ©r vÃ¡rmegye szÃ©khelye Ã©s fontos ipari kÃ¶zpont.",
        "Itt talÃ¡lhatÃ³ a neves Szent IstvÃ¡n KirÃ¡ly MÃºzeum.",
        "HÃ­res az Ã©vente augusztusban megrendezett KirÃ¡lyi Napok fesztivÃ¡lrÃ³l.",
        "KÃ¶zlekedÃ©si szempontbÃ³l kedvezÅ‘ helyen, Budapest Ã©s a Balaton kÃ¶zÃ¶tt fekszik."
      ],
      "ro": [
        "FostÄƒ capitalÄƒ a Ungariei Ã®n Evul Mediu.",
        "Aici au fost Ã®ncoronaÈ›i 37 de regi maghiari È™i 15 au fost Ã®nmormÃ¢ntaÈ›i.",
        "GrÄƒdina Ruinelor pÄƒstreazÄƒ fundaÈ›iile fostei bazilici de Ã®ncoronare.",
        "Castelul Bory este o construcÈ›ie unicÄƒ din beton È™i artÄƒ.",
        "ReÈ™edinÈ›a judeÈ›ului FejÃ©r È™i un sit industrial important.",
        "OraÈ™ul gÄƒzduieÈ™te renumitul Muzeu Regele SfÃ¢ntul È˜tefan.",
        "Cunoscut pentru festivalul anual 'Zilele Regale' din august.",
        "Situat convenabil Ã®ntre Budapesta È™i Lacul Balaton."
      ],
      "en": [
        "Former capital of Hungary in the Middle Ages.",
        "37 Hungarian kings were crowned and 15 were buried here.",
        "The Ruin Garden preserves the foundations of the former coronation basilica.",
        "Bory Castle is a unique structure made of concrete and art.",
        "Seat of FejÃ©r County and a major industrial location.",
        "Home to the renowned King Saint Stephen Museum.",
        "Famous for the annual 'Royal Days' festival held in August.",
        "Conveniently located between Budapest and Lake Balaton."
      ]
    },
  },
  {
    id: "dunaujvaros",
    type: "city",
    parent: "HU-FE",
    coords: [18.9397, 46.9619],
    name: {"de": "Neustadt an der Donau", "hu": "DunaÃºjvÃ¡ros", "ro": "DunaÃºjvÃ¡ros", "en": "DunaÃºjvÃ¡ros"},    description: {"de": "Industriestadt an der Donau, erbaut in den 1950er Jahren.", "hu": "Ipari vÃ¡ros a Duna partjÃ¡n, az 1950-es Ã©vekben Ã©pÃ¼lt.", "ro": "OraÈ™ industrial pe DunÄƒre, construit Ã®n anii 1950.", "en": "Industrial city on the Danube, built in the 1950s."},
    descriptionAdvanced: {
      "de": "DunaÃºjvÃ¡ros, am rechten Ufer der Donau gelegen, ist eine Stadt, die vor allem durch ihre moderne Industriegeschichte im 20. Jahrhundert geprÃ¤gt wurde. UrsprÃ¼nglich als sozialistische Musterstadt geplant, zeigt sie heute ein interessantes Bild der Architektur des Realsozialismus gepaart mit modernen GrÃ¼nflÃ¤chen. Das Herz der Stadt ist das riesige Stahlwerk, das einst den wirtschaftlichen Aufschwung der Region sicherte. In den letzten Jahren hat sich DunaÃºjvÃ¡ros jedoch stark gewandelt und bietet heute einen Skulpturenpark an der Donau sowie vielfÃ¤ltige Sport- und FreizeitmÃ¶glichkeiten. Die Stadt ist ein interessantes Beispiel fÃ¼r den stÃ¤dtebaulichen Wandel in Ungarn und bietet einen tiefen Einblick in die jÃ¼ngere Zeitgeschichte des Landes.",
      "hu": "DunaÃºjvÃ¡ros MagyarorszÃ¡g egyik legfiatalabb vÃ¡rosa a Duna mentÃ©n, amely az 1950-es Ã©vekben Ã©pÃ¼lt fel mint szocialista iparvÃ¡ros (eredetileg SztÃ¡linvÃ¡ros nÃ©ven). A telepÃ¼lÃ©s arculatÃ¡t a monumentÃ¡lis szocreÃ¡l Ã©pÃ­tÃ©szet Ã©s a vasmÅ± hatÃ¡rozza meg, ami ma kÃ¼lÃ¶nleges Ã©pÃ­tÃ©szeti Ã¶rÃ¶ksÃ©gkÃ©nt vonzza a lÃ¡togatÃ³kat. DunaÃºjvÃ¡ros azonban nemcsak az iparrÃ³l szÃ³l: a Duna-parti szoborpark, a tÃ¡gas parkok Ã©s a folyÃ³ menti sÃ©tÃ¡nyok modern Ã©s Ã©lhetÅ‘ vÃ¡roskÃ©pet mutatnak. A vÃ¡ros hÃ­res kivÃ¡lÃ³ sportÃ©letÃ©rÅ‘l Ã©s uszodÃ¡jÃ¡rÃ³l, valamint a Duna Ã¡ltal nyÃºjtott vÃ­zi sportlehetÅ‘sÃ©gekrÅ‘l. DunaÃºjvÃ¡ros egy Ã©rdekes fejezete a magyar tÃ¶rtÃ©nelemnek, ahol a tervezett vÃ¡rosÃ©pÃ­tÃ©s minden sajÃ¡tossÃ¡ga megfigyelhetÅ‘.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["DunaÃºjvÃ¡ros wurde in den 1950er Jahren als sozialistische Industriestadt unter dem Namen SztÃ¡linvÃ¡ros gegrÃ¼ndet.", "Am Donauufer befindet sich ein weitlÃ¤ufiger Skulpturenpark mit modernen Metallplastiken.", "Die Stadt ist ein wichtiges Zentrum fÃ¼r Wassersportarten und besitzt ein modernes Sportzentrum.", "Das Intercisa-Museum dokumentiert die rÃ¶mische Vergangenheit der Region."],
      "hu": [
        "DunaÃºjvÃ¡ros az orszÃ¡g elsÅ‘ tervezett szocialista vÃ¡rosa, 1951-ben kapott nevet.",
        "Itt talÃ¡lhatÃ³ KÃ¶zÃ©p-EurÃ³pa egyik legnagyobb szabadtÃ©ri szoborparkja a Duna-parton.",
        "A vÃ¡rosban mÅ±kÃ¶dik az orszÃ¡g legnagyobb kohÃ¡szati Ã¼zeme, a Dunai VasmÅ± (Dunaferr).",
        "DunaÃºjvÃ¡ros hÃ­res a sikeres jÃ©gkorong- Ã©s kÃ©zilabda-csapatairÃ³l.",
        "A vÃ¡rost Ã¡tlÃ³san szelik Ã¡t a tÃ¡gas sugÃ¡rutak, amelyeket a korszak ideÃ¡ljai szerint terveztek."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["HieÃŸ frÃ¼her SztÃ¡linvÃ¡ros (Stalinstadt).", "Zentrum der ungarischen Stahlindustrie."], "hu": ["KorÃ¡bban SztÃ¡linvÃ¡rosnak hÃ­vtÃ¡k.", "A magyar acÃ©lipar kÃ¶zpontja."], "ro": ["Se numea anterior SztÃ¡linvÃ¡ros (OraÈ™ul lui Stalin).", "Centrul industriei siderurgice maghiare."], "en": ["Formerly called SztÃ¡linvÃ¡ros (Stalin City).", "Center of the Hungarian steel industry."]},
  },
  {
    id: "gardony",
    type: "city",
    parent: "HU-FE",
    coords: [18.6167, 47.1978],
    name: {"de": "GÃ¡rdony", "hu": "GÃ¡rdony", "ro": "GÃ¡rdony", "en": "GÃ¡rdony"},
    image: "/geo-images/hungary/gardony.webp",
    description: {"de": "Stadt am Ufer des Velencer Sees, ein beliebtes Urlaubsziel.", "hu": "VÃ¡ros a Velencei-tÃ³ partjÃ¡n, nÃ©pszerÅ± nyaralÃ³hely.", "ro": "OraÈ™ pe malul Lacului Velence, o destinaÈ›ie popularÄƒ de vacanÈ›Äƒ.", "en": "City on the shores of Lake Velence, a popular holiday destination."},
    descriptionAdvanced: {
      "de": "GÃ¡rdony ist ein beliebtes Ferienzentrum am SÃ¼dufer des Velence-Sees, der fÃ¼r sein warmes Wasser und seine heilende Wirkung bekannt ist. Die Stadt besteht aus mehreren Ortsteilen wie AgÃ¡rd und DinnyÃ©s und bietet ideale Bedingungen fÃ¼r Badeurlauber, Wassersportler und Angler. Besonders bekannt ist AgÃ¡rd fÃ¼r sein Heilbad und seinen Strand, der im Sommer zahlreiche Besucher aus dem nahegelegenen Budapest anzieht. GÃ¡rdony ist zudem der Geburtsort des berÃ¼hmten ungarischen Schriftstellers GÃ©za GÃ¡rdonyi, dessen Geburtshaus heute ein Museum ist. Die Region um den See ist ein geschÃ¼tztes Naturparadies, das vor allem fÃ¼r seine reiche Vogelwelt in den Schilfgebieten bekannt ist.",
      "hu": "GÃ¡rdony a Velencei-tÃ³ dÃ©li partjÃ¡nak kÃ¶zpontja, a 'napfÃ©ny tavÃ¡nak' legnÃ©pszerÅ±bb Ã¼dÃ¼lÅ‘helye, amely magÃ¡ban foglalja AgÃ¡rdot Ã©s DinnyÃ©st is. A vÃ¡ros Ã©lete a tÃ³ kÃ¶rÃ© szervezÅ‘dik: szabadstrandok, vitorlÃ¡skikÃ¶tÅ‘k Ã©s pezsgÅ‘ kerÃ©kpÃ¡ros Ã©let vÃ¡rja a lÃ¡togatÃ³kat. GÃ¡rdony hÃ­res szÃ¼lÃ¶tte GÃ¡rdonyi GÃ©za, az Egri csillagok Ã­rÃ³ja, akinek emlÃ©khÃ¡za Ã©s a kÃ¶zeli rÃ¶nkvÃ¡r vonzÃ³ cÃ©lpont a csalÃ¡doknak. A telepÃ¼lÃ©s bÃ¼szkÃ©lkedhet modern gyÃ³gyfÃ¼rdÅ‘vel Ã©s a Velencei-tavi MadÃ¡rrezervÃ¡tum kÃ¶zelsÃ©gÃ©vel is. GÃ¡rdony a sport, a kultÃºra Ã©s a termÃ©szetkÃ¶zeli kikapcsolÃ³dÃ¡s ideÃ¡lis Ã¶tvÃ¶zete, amely BudapesttÅ‘l karnyÃºjtÃ¡snyira kÃ­nÃ¡l teljes feltÃ¶ltÅ‘dÃ©st.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["GÃ¡rdony liegt am Velence-See, einem der wÃ¤rmsten Binnenseen Europas.", "Der berÃ¼hmte Schriftsteller GÃ©za GÃ¡rdonyi wurde im Ortsteil AgÃ¡rd geboren.", "Die Stadt ist ein Zentrum fÃ¼r den Segelsport und das Windsurfen in Ungarn.", "Das Heilbad AgÃ¡rd ist fÃ¼r sein schwefelhaltiges Thermalwasser bekannt."],
      "hu": [
        "GÃ¡rdonyhoz tartozik AgÃ¡rd, ahol az Ã­rÃ³ GÃ¡rdonyi GÃ©za szÃ¼letett 1863-ban.",
        "Az AgÃ¡rdi GyÃ³gy- Ã©s TermÃ¡lfÃ¼rdÅ‘ vize 58 fokos hÅ‘mÃ©rsÃ©kleten tÃ¶r fel a mÃ©lybÅ‘l.",
        "A Velencei-tavi GalÃ©ria szÃ¡mos kortÃ¡rs mÅ±vÃ©szeti kiÃ¡llÃ­tÃ¡snak ad otthont a vÃ¡rosban.",
        "GÃ¡rdony nÃ©pszerÅ± megÃ¡llÃ³helye a tÃ³ kÃ¶rÃ¼li kerÃ©kpÃ¡rÃºtnak, amely kÃ¶zel 30 km hosszÃº.",
        "DinnyÃ©sen talÃ¡lhatÃ³ az egyedÃ¼lÃ¡llÃ³ VÃ¡rpark, ahol magyar vÃ¡rak makettjeit lÃ¡thatjuk eredeti anyagokbÃ³l."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Geburtsort des Schriftstellers GÃ©za GÃ¡rdonyi.", "Beliebt fÃ¼r Wassersport."], "hu": ["GÃ¡rdonyi GÃ©za Ã­rÃ³ szÃ¼lÅ‘vÃ¡rosa.", "NÃ©pszerÅ± a vÃ­zisportok kedvelÅ‘i kÃ¶rÃ©ben."], "ro": ["Locul de naÈ™tere al scriitorului GÃ©za GÃ¡rdonyi.", "Popular pentru sporturi nautice."], "en": ["Birthplace of writer GÃ©za GÃ¡rdonyi.", "Popular for water sports."]},
  },
  {
    id: "gyor",
    type: "city",
    parent: "HU-GS",
    coords: [17.6351, 47.6833],
    name: {"de": "Raab", "hu": "GyÅ‘r", "ro": "GyÅ‘r", "en": "GyÅ‘r"},
    image: "/geo-images/hungary/gyor.webp",
    description: {
      "de": "GyÅ‘r, die 'Stadt der FlÃ¼sse', liegt im Nordwesten Ungarns am Zusammenfluss von Raab, Rabnitz und Donau. Die Stadt ist ein bedeutendes wirtschaftliches Zentrum und beherbergt eines der weltweit grÃ¶ÃŸten Motorenwerke von Audi. Das historische Stadtzentrum besticht durch seine barocke Architektur, charmante Gassen und den imposanten Dom auf dem KÃ¡ptalan-HÃ¼gel. GyÅ‘r ist zudem ein wichtiger Verkehrsknotenpunkt zwischen Budapest, Wien und Bratislava.",
      "hu": "GyÅ‘r, a 'folyÃ³k vÃ¡rosa', Ã‰szaknyugat-MagyarorszÃ¡gon fekszik, a RÃ¡ba, a RÃ¡bca Ã©s a Duna talÃ¡lkozÃ¡sÃ¡nÃ¡l. A vÃ¡ros jelentÅ‘s gazdasÃ¡gi kÃ¶zpont, itt talÃ¡lhatÃ³ az Audi egyik legnagyobb motorgyÃ¡ra a vilÃ¡gon. A tÃ¶rtÃ©nelmi belvÃ¡ros barokk Ã©pÃ­tÃ©szetÃ©vel, hangulatos utcÃ¡ival Ã©s a KÃ¡ptalandombon Ã¡llÃ³ BazilikÃ¡val vonzza a lÃ¡togatÃ³kat. GyÅ‘r emellett fontos kÃ¶zlekedÃ©si csomÃ³pont Budapest, BÃ©cs Ã©s Pozsony kÃ¶zÃ¶tt.",
      "ro": "GyÅ‘r, 'oraÈ™ul rÃ¢urilor', este situat Ã®n nord-vestul Ungariei, la confluenÈ›a rÃ¢urilor RÃ¡ba, RÃ¡bca È™i DunÄƒrea. OraÈ™ul este un centru economic important, gÄƒzduind una dintre cele mai mari fabrici de motoare Audi din lume. Centrul istoric al oraÈ™ului impresioneazÄƒ prin arhitectura sa barocÄƒ, strÄƒzile fermecÄƒtoare È™i Bazilica impunÄƒtoare de pe dealul KÃ¡ptalan. GyÅ‘r este, de asemenea, un nod de transport vital Ã®ntre Budapesta, Viena È™i Bratislava.",
      "en": "GyÅ‘r, the 'City of Rivers,' is located in northwestern Hungary at the confluence of the RÃ¡ba, RÃ¡bca, and Danube rivers. The city is a major economic hub, home to one of the world's largest Audi engine plants. Its historic center charms visitors with Baroque architecture, cozy alleys, and the majestic Basilica on KÃ¡ptalan Hill. GyÅ‘r is also a key transportation hub situated between Budapest, Vienna, and Bratislava."
    },
    descriptionAdvanced: {
      "de": "GyÅ‘r, im Nordwesten Ungarns an der MÃ¼ndung von drei FlÃ¼ssen gelegen, wird oft als die ",
      "hu": "GyÅ‘r, a 'folyÃ³k vÃ¡rosa', MagyarorszÃ¡g Ã©szaknyugati rÃ©szÃ©n, a Duna, a RÃ¡ba Ã©s a RÃ¡bca talÃ¡lkozÃ¡sÃ¡nÃ¡l fekvÅ‘ dinamikus nagyvÃ¡ros, amely barokk belvÃ¡rosÃ¡val Ã©s modern iparÃ¡val emelkedik ki. A vÃ¡ros kÃ¶zpontja, a KÃ¡ptalandomb a PÃ¼spÃ¶kvÃ¡rral Ã©s a BazilikÃ¡val a magyar keresztÃ©nysÃ©g egyik bÃ¶lcsÅ‘je. GyÅ‘r hÃ­res rendezett tereirÅ‘l, szÃ¶kÅ‘kÃºtjairÃ³l Ã©s gazdag mÅ±vÃ©szeti Ã©letÃ©rÅ‘l, amit a GyÅ‘ri Balett vilÃ¡ghÃ­rneve is fÃ©mjelez. Ma a vÃ¡ros az orszÃ¡g egyik legfontosabb gazdasÃ¡gi motorja (az Audi rÃ©vÃ©n), de megÅ‘rizte hangulatos tÃ¶rtÃ©nelmi jellegÃ©t is. GyÅ‘r a modern fejlÅ‘dÃ©s Ã©s az ezerÃ©ves mÃºlt harmonikus talÃ¡lkozÃ¡si pontja, amely minden Ã©vszakban pezsgÅ‘ programokkal vÃ¡rja a lÃ¡togatÃ³kat.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["GyÅ‘r liegt am Zusammenfluss der FlÃ¼sse Raab (RÃ¡ba), Kleiner Donau und Donau.", "Die barocke Altstadt von GyÅ‘r gehÃ¶rt zu den am besten erhaltenen historischen Ensembles Ungarns.", "Die Stadt ist der Sitz der Audi Hungaria Motor Kft, einem der weltweit grÃ¶ÃŸten Motorenwerke.", "Die Kathedrale von GyÅ‘r beherbergt das heilige Antlitz der weinenden Madonna aus Irland."],
      "hu": [
        "GyÅ‘r barokk belvÃ¡rosa MagyarorszÃ¡g egyik legszebb Ã©s legÃ©pebben maradt mÅ±emlÃ©ki egyÃ¼ttese.",
        "Itt alapÃ­tottÃ¡k meg a GyÅ‘ri Balettet, amely az orszÃ¡g egyik legnevesebb tÃ¡ncegyÃ¼ttese.",
        "A gyÅ‘ri BazilikÃ¡ban Å‘rzik Szent LÃ¡szlÃ³ kirÃ¡ly hermÃ¡jÃ¡t, a magyar Ã¶tvÃ¶smÅ±vÃ©szet remekÃ©t.",
        "GyÅ‘r vÃ¡rosa az Audi gyÃ¡r rÃ©vÃ©n a magyar autÃ³ipar eurÃ³pai hÃ­rÅ± kÃ¶zpontja.",
        "A vÃ¡rost 2010-ben az egyik legÃ©lhetÅ‘bb magyar vÃ¡rosnak vÃ¡lasztottÃ¡k."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "SechstgrÃ¶ÃŸte Stadt Ungarns und Sitz des Komitats GyÅ‘r-Moson-Sopron.",
        "Wichtiges Zentrum der Automobilindustrie durch das Audi-Werk.",
        "Das barocke Stadtzentrum gehÃ¶rt zu den am besten erhaltenen in Ungarn.",
        "Der Dom von GyÅ‘r beherbergt die Reliquie des Heiligen Ladislaus.",
        "Die Stadt hat eine reiche Tradition im Handball und Sport.",
        "Liegt ideal auf der Achse Budapest-Wien-Bratislava.",
        "Das Xantus-JÃ¡nos-Museum zeigt bedeutende lokale Sammlungen.",
        "Bekannt fÃ¼r seine zahlreichen Thermal- und ErlebnisbÃ¤der."
      ],
      "hu": [
        "MagyarorszÃ¡g hatodik legnagyobb vÃ¡rosa Ã©s GyÅ‘r-Moson-Sopron vÃ¡rmegye szÃ©khelye.",
        "Az autÃ³ipar meghatÃ¡rozÃ³ kÃ¶zpontja az Audi gyÃ¡rnak kÃ¶szÃ¶nhetÅ‘en.",
        "A barokk belvÃ¡ros az egyik legÃ©pszerÅ±bb MagyarorszÃ¡gon.",
        "A gyÅ‘ri BazilikÃ¡ban Å‘rzik Szent LÃ¡szlÃ³ kirÃ¡ly hermÃ¡jÃ¡t.",
        "A vÃ¡ros gazdag kÃ©zilabda- Ã©s sportmÃºlttal rendelkezik.",
        "IdeÃ¡lis elhelyezkedÃ©s a Budapest-BÃ©cs-Pozsony tengelyen.",
        "A Xantus JÃ¡nos MÃºzeum jelentÅ‘s helytÃ¶rtÃ©neti gyÅ±jtemÃ©nyt mutat be.",
        "SzÃ¡mos termÃ¡l- Ã©s Ã©lmÃ©nyfÃ¼rdÅ‘je miatt is kedvelt Ãºti cÃ©l."
      ],
      "ro": [
        "Al È™aselea oraÈ™ ca mÄƒrime din Ungaria È™i reÈ™edinÈ›a judeÈ›ului GyÅ‘r-Moson-Sopron.",
        "Centru important al industriei auto datoritÄƒ fabricii Audi.",
        "Centrul baroc al oraÈ™ului este unul dintre cele mai bine conservate din Ungaria.",
        "Bazilica din GyÅ‘r adÄƒposteÈ™te relicva SfÃ¢ntului Ladislau.",
        "OraÈ™ul are o tradiÈ›ie bogatÄƒ Ã®n handbal È™i sport.",
        "Situat ideal pe axa Budapesta-Viena-Bratislava.",
        "Muzeul Xantus JÃ¡nos prezintÄƒ colecÈ›ii locale semnificative.",
        "Cunoscut pentru numeroasele sale bÄƒi termale È™i parcuri acvatice."
      ],
      "en": [
        "Sixth largest city in Hungary and the seat of GyÅ‘r-Moson-Sopron County.",
        "A major center of the automotive industry due to the Audi plant.",
        "The Baroque city center is one of the best-preserved in Hungary.",
        "GyÅ‘r Basilica houses the reliquary of Saint Ladislaus.",
        "The city has a strong tradition in handball and other sports.",
        "Ideally located on the Budapest-Vienna-Bratislava axis.",
        "The Xantus JÃ¡nos Museum displays significant local collections.",
        "Known for its numerous thermal and adventure baths."
      ]
    },
  },
  {
    id: "sopron",
    type: "city",
    parent: "HU-GS",
    coords: [16.5905, 47.6817],
    name: {"de": "Ã–denburg", "hu": "Sopron", "ro": "Sopron", "en": "Sopron"},
    image: "/geo-images/hungary/sopron.webp",
    description: {
      "de": "Sopron, die 'treueste Stadt' Ungarns, liegt im Ã¤uÃŸersten Westen des Landes an der Grenze zu Ã–sterreich. Die Stadt ist bekannt fÃ¼r ihre auÃŸergewÃ¶hnlich gut erhaltene mittelalterliche Altstadt und ihren Status als bedeutendes Weinanbaugebiet, insbesondere fÃ¼r den BlaufrÃ¤nkischen. Das Wahrzeichen der Stadt ist der Feuerturm, von dem aus man einen herrlichen Blick Ã¼ber die DÃ¤cher und die umliegenden Weinberge hat. Sopron ist zudem ein Symbol fÃ¼r die europÃ¤ische Einheit, da hier 1989 das PaneuropÃ¤ische Picknick stattfand.",
      "hu": "Sopron, a 'leghÅ±sÃ©gesebb vÃ¡ros', MagyarorszÃ¡g legnyugatibb rÃ©szÃ©n, az osztrÃ¡k hatÃ¡r mentÃ©n fekszik. A vÃ¡ros hÃ­res kivÃ©telesen jÃ³l megÅ‘rzÃ¶tt kÃ¶zÃ©pkori Ã³vÃ¡rosÃ¡rÃ³l Ã©s jelentÅ‘s borvidÃ©kÃ©rÅ‘l, kÃ¼lÃ¶nÃ¶sen a kÃ©kfrankosrÃ³l. A vÃ¡ros jelkÃ©pe a TÅ±ztorony, ahonnan csodÃ¡latos kilÃ¡tÃ¡s nyÃ­lik a hÃ¡ztetÅ‘kre Ã©s a kÃ¶rnyezÅ‘ szÅ‘lÅ‘Ã¼ltetvÃ©nyekre. Sopron emellett az eurÃ³pai egysÃ©g szimbÃ³luma is, hiszen 1989-ben itt rendeztÃ©k meg a PÃ¡neurÃ³pai Pikniket.",
      "ro": "Sopron, 'cel mai fidel oraÈ™' al Ungariei, este situat Ã®n extremitatea vesticÄƒ a È›Äƒrii, la graniÈ›a cu Austria. OraÈ™ul este cunoscut pentru centrul sÄƒu vechi medieval excepÈ›ional de bine conservat È™i pentru statutul sÄƒu de regiune viticolÄƒ importantÄƒ, Ã®n special pentru soiul KÃ©kfrankos. Simbolul oraÈ™ului este Turnul Pompierilor, de unde se poate admira o vedere superbÄƒ asupra acoperiÈ™urilor È™i podgoriilor din jur. Sopron este, de asemenea, un simbol al unitÄƒÈ›ii europene, aici avÃ¢nd loc Ã®n 1989 Picnicul Paneuropean.",
      "en": "Sopron, the 'Most Loyal City' of Hungary, is located in the far west of the country on the border with Austria. The city is famous for its exceptionally well-preserved medieval old town and its status as a major wine-growing region, particularly for the KÃ©kfrankos (BlaufrÃ¤nkisch) variety. Its landmark is the Fire Tower, offering a magnificent view over the rooftops and surrounding vineyards. Sopron is also a symbol of European unity, as it hosted the Pan-European Picnic in 1989."
    },
    descriptionAdvanced: {
      "de": "Sopron, im Ã¤uÃŸersten Westen Ungarns direkt an der Grenze zu Ã–sterreich gelegen, ist eine Stadt von auÃŸergewÃ¶hnlicher SchÃ¶nheit und historischer Bedeutung. Als eine der wenigen StÃ¤dte Ungarns blieb ihr mittelalterlicher Kern fast unversehrt erhalten, was Sopron zu einem Freilichtmuseum der Architektur macht. Das Wahrzeichen der Stadt ist der Feuerturm, von dem aus man einen Panoramablick Ã¼ber die barocke Innenstadt bis hin zum Neusiedler See hat. Sopron ist auch als ",
      "hu": "Sopron, a 'leghÅ±sÃ©gesebb vÃ¡ros' az osztrÃ¡k hatÃ¡r mentÃ©n, a Soproni-hegysÃ©g lÃ¡bÃ¡nÃ¡l fekszik, Ã©s MagyarorszÃ¡g egyik leggazdagabb mÅ±emlÃ©ki Ã¡llomÃ¡nyÃ¡val rendelkezik. A vÃ¡ros kÃ¶zÃ©pkori hangulatÃº belvÃ¡rosa, szÅ±k utcÃ¡i Ã©s az emblematikus TÅ±ztorony az orszÃ¡g tÃ¶rtÃ©nelmÃ©nek viharos Ã©s dicsÅ‘ korszakait idÃ©zi. Sopron hÃ­res bortermelÃ©sÃ©rÅ‘l is, a KÃ©kfrankos hazÃ¡jakÃ©nt a borkultÃºra minden szegletÃ©ben jelen van. A vÃ¡rost kÃ¶rÃ¼lÃ¶lelÅ‘ erdÅ‘k, a LÅ‘verek tiszta levegÅ‘je Ã©s a kÃ¶zeli FertÅ‘-tÃ³ kivÃ¡lÃ³ lehetÅ‘sÃ©get adnak az aktÃ­v pihenÃ©sre. Sopron kulturÃ¡lis Ã©s szellemi Ã©lete is kiemelkedÅ‘, egyeteme Ã©s fesztivÃ¡ljai rÃ©vÃ©n a tÃ©rsÃ©g egyik legfontosabb kÃ¶zpontja.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Sopron trÃ¤gt den Ehrentitel 'Civitas Fidelissima' (die treueste Stadt).", "Der Feuerturm ist das Wahrzeichen der Stadt und steht auf rÃ¶mischen Fundamenten.", "Die Stadt ist das Zentrum der ungarischen Produktion des BlaufrÃ¤nkisch-Rotweins.", "In Sopron fand 1989 das PaneuropÃ¤ische Picknick statt, das den Fall des Eisernen Vorhangs einleitete."],
      "hu": [
        "Sopron az 1921-es nÃ©pszavazÃ¡s emlÃ©kÃ©re viseli a 'Civitas Fidelissima' (LeghÅ±sÃ©gesebb VÃ¡ros) cÃ­met.",
        "A TÅ±ztorony Sopron jelkÃ©pe, alsÃ³ rÃ©sze rÃ³mai kori falakra Ã©pÃ¼lt.",
        "Sopron belvÃ¡rosÃ¡nak alaprajza a rÃ³mai kori Scarbantia vÃ¡rosÃ¡nak szerkezetÃ©t kÃ¶veti.",
        "A vÃ¡ros kÃ¶rnyÃ©ki LÅ‘verek hÃ­res gyÃ³gyÃ­tÃ³ klÃ­mÃ¡jÃ¡rÃ³l Ã©s szubalpin levegÅ‘jÃ©rÅ‘l.",
        "Sopron a KÃ©kfrankos vÃ¶rÃ¶sbor fÅ‘vÃ¡rosa, s szÃ¡mos tÃ¶rtÃ©nelmi borospincÃ©vel bÃ¼szkÃ©lkedhet."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Erhielt den Titel 'Civitas Fidelissima' nach einer Volksabstimmung 1921.",
        "Das historische Stadtzentrum ist eines der am besten erhaltenen in Mitteleuropa.",
        "Der Feuerturm (TÅ±ztorony) ist das Wahrzeichen der Stadt.",
        "Wichtiges Zentrum fÃ¼r den Anbau von BlaufrÃ¤nkisch-Wein.",
        "Das PaneuropÃ¤ische Picknick bei Sopron leitete den Fall des Eisernen Vorhangs ein.",
        "Die Stadt ist von den malerischen LÃ¶vÃ©rek-HÃ¼geln umgeben.",
        "Beherbergt zahlreiche Museen und historische Kirchen.",
        "Beliebtes Ziel fÃ¼r Touristen aus Ã–sterreich und ganz Europa."
      ],
      "hu": [
        "A 'Civitas Fidelissima' cÃ­met az 1921-es nÃ©pszavazÃ¡s utÃ¡n kapta.",
        "A tÃ¶rtÃ©nelmi belvÃ¡ros KÃ¶zÃ©p-EurÃ³pa egyik legÃ©pszerÅ±bb mÅ±emlÃ©kegyÃ¼ttese.",
        "A TÅ±ztorony a vÃ¡ros legismertebb jelkÃ©pe.",
        "A kÃ©kfrankos bortermelÃ©s egyik legfontosabb kÃ¶zpontja.",
        "A Sopron melletti PÃ¡neurÃ³pai Piknik segÃ­tette a vasfÃ¼ggÃ¶ny lebontÃ¡sÃ¡t.",
        "A vÃ¡rost a festÅ‘i LÃ¶vÃ©rek dombjai veszik kÃ¶rÃ¼l.",
        "SzÃ¡mos mÃºzeumnak Ã©s tÃ¶rtÃ©nelmi templomnak ad otthont.",
        "NÃ©pszerÅ± Ãºti cÃ©l az osztrÃ¡k Ã©s az eurÃ³pai turistÃ¡k kÃ¶rÃ©ben."
      ],
      "ro": [
        "A primit titlul de 'Civitas Fidelissima' dupÄƒ referendumul din 1921.",
        "Centrul istoric este unul dintre cele mai bine conservate din Europa CentralÄƒ.",
        "Turnul Pompierilor (TÅ±ztorony) este simbolul emblematic al oraÈ™ului.",
        "Centru important pentru cultivarea vinului KÃ©kfrankos.",
        "Picnicul Paneuropean de lÃ¢ngÄƒ Sopron a marcat Ã®nceputul cÄƒderii Cortinei de Fier.",
        "OraÈ™ul este Ã®nconjurat de dealurile pitoreÈ™ti LÃ¶vÃ©rek.",
        "GÄƒzduieÈ™te numeroase muzee È™i biserici istorice.",
        "DestinaÈ›ie popularÄƒ pentru turiÈ™tii din Austria È™i din Ã®ntreaga EuropÄƒ."
      ],
      "en": [
        "Awarded the title 'Civitas Fidelissima' after a 1921 referendum.",
        "The historic city center is one of the best-preserved in Central Europe.",
        "The Fire Tower (TÅ±ztorony) is the city's most famous landmark.",
        "A major center for the production of KÃ©kfrankos wine.",
        "The Pan-European Picnic near Sopron helped trigger the fall of the Iron Curtain.",
        "The city is surrounded by the picturesque LÃ¶vÃ©rek Hills.",
        "Home to numerous museums and historic churches.",
        "A popular destination for tourists from Austria and across Europe."
      ]
    },
  },
  {
    id: "pannonhalma",
    type: "landmark",
    parent: "HU-GS",
    coords: [17.7606, 47.5536],
    name: {"de": "Martinsberg", "hu": "Pannonhalma", "ro": "Pannonhalma", "en": "Pannonhalma"},
    image: "/geo-images/hungary/pannonhalma.webp",
    description: {"de": "Historische Benediktinerabtei auf einem HÃ¼gel, eines der Ã¤ltesten DenkmÃ¤ler Ungarns.", "hu": "TÃ¶rtÃ©nelmi bencÃ©s apÃ¡tsÃ¡g egy dombon, MagyarorszÃ¡g egyik legrÃ©gebbi mÅ±emlÃ©ke.", "ro": "AbaÈ›ie benedictinÄƒ istoricÄƒ pe un deal, unul dintre cele mai vechi monumente din Ungaria.", "en": "Historic Benedictine abbey on a hill, one of the oldest monuments in Hungary."},
    descriptionAdvanced: {
      "de": "Pannonhalma ist berÃ¼hmt fÃ¼r seine Benediktinerabtei, die majestÃ¤tisch auf dem Berg des Heiligen Martin thront und zum UNESCO-Weltkulturerbe gehÃ¶rt. GegrÃ¼ndet im Jahr 996, ist sie das spirituelle und kulturelle Zentrum der ungarischen Benediktiner und blickt auf eine Ã¼ber tausendjÃ¤hrige Geschichte zurÃ¼ck. Die Basilika mit ihrer romanischen Krypta, der prachtvolle Kreuzgang und die monumentale Bibliothek mit ihren wertvollen Handschriften sind beeindruckende Zeugnisse sakraler Kunst. Pannonhalma ist zudem fÃ¼r seine lange Tradition im Weinbau und in der KrÃ¤uterkunde bekannt, was Besucher in der klÃ¶sterlichen Weinkellerei und dem ArzneikrÃ¤utergarten erleben kÃ¶nnen. Die Abtei ist ein Ort der Stille, des Gebets und der gelehrten Tradition inmitten der sanften HÃ¼gel Transdanubiens.",
      "hu": "Pannonhalma a magyar keresztÃ©nysÃ©g Ã©s kultÃºra bÃ¶lcsÅ‘je, ahol az ezerÃ©ves BencÃ©s FÅ‘apÃ¡tsÃ¡g magasodik a dombtetÅ‘n. Az 996-ban alapÃ­tott monostor MagyarorszÃ¡g egyik legfontosabb szakrÃ¡lis kÃ¶zpontja, amely 1996 Ã³ta az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze. Az apÃ¡tsÃ¡g monumentÃ¡lis Ã©pÃ¼letegyÃ¼ttese magÃ¡ban foglalja a gÃ³tikus bazilikÃ¡t, az ezerÃ©ves kriptÃ¡t Ã©s a vilÃ¡ghÃ­rÅ± kÃ¶nyvtÃ¡rat, amely felbecsÃ¼lhetetlen Ã©rtÃ©kÅ± kÃ³dexeket Å‘riz. Pannonhalma azonban modern is: neves borÃ¡szata, levendulÃ¡sa Ã©s arborÃ©tuma a minÅ‘sÃ©gi pihenÃ©s Ã©s a gasztronÃ³mia Ã©lmÃ©nyÃ©t nyÃºjtja. A csend, az imÃ¡dsÃ¡g Ã©s az alkotÃ³ munka harmÃ³niÃ¡ja PannonhalmÃ¡t az orszÃ¡g egyik legfontosabb spirituÃ¡lis Ã©s kulturÃ¡lis cÃ©lpontjÃ¡vÃ¡ teszi.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Erzabtei Pannonhalma wurde 996 gegrÃ¼ndet und ist Teil des UNESCO-Weltkulturerbes.", "Die Klosterbibliothek bewahrt mit der GrÃ¼ndungsurkunde der Abtei Tihany das Ã¤lteste ungarische Sprachdenkmal auf.", "Die MÃ¶nche betreiben ein renommiertes Weingut und produzieren KrÃ¤uterlikÃ¶re nach alten Rezepten.", "Die Abtei liegt auf dem Mons Sacer Pannoniae, dem Heiligen Berg von Pannonien."],
      "hu": [
        "A Pannonhalmi FÅ‘apÃ¡tsÃ¡g MagyarorszÃ¡g legrÃ©gebbi folyamatosan mÅ±kÃ¶dÅ‘ kulturÃ¡lis Ã©s vallÃ¡si intÃ©zmÃ©nye.",
        "Az apÃ¡tsÃ¡gi kÃ¶nyvtÃ¡rban Å‘rizik a magyar nyelv legrÃ©gebbi Ã­rott emlÃ©kÃ©t, a Tihanyi AlapÃ­tÃ³levelet (mÃ¡solatÃ¡t).",
        "Pannonhalma hÃ­res gyÃ³gynÃ¶vÃ©nykertjÃ©rÅ‘l Ã©s az abbÃ³l kÃ©szÃ¼lt teÃ¡krÃ³l, likÅ‘rÃ¶krÅ‘l.",
        "A bazilika alatti kriptÃ¡ban nyugszik tÃ¶bbek kÃ¶zÃ¶tt Habsburg OttÃ³ szÃ­vurnÃ¡ja is.",
        "Az apÃ¡tsÃ¡gi borÃ¡szat a bencÃ©s szerzetesek Ã©vezredes szÅ‘lÅ‘mÅ±velÅ‘ hagyomÃ¡nyait viszi tovÃ¡bb."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["GegrÃ¼ndet im Jahr 996.", "Teil des UNESCO-Welterbes."], "hu": ["996-ban alapÃ­tottÃ¡k.", "Az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze."], "ro": ["FondatÄƒ Ã®n anul 996.", "Parte a Patrimoniului Mondial UNESCO."], "en": ["Founded in 996.", "Part of the UNESCO World Heritage site."]},
  },
  {
    id: "debrecen",
    type: "city",
    parent: "HU-HB",
    coords: [21.6273, 47.5316],
    name: {"de": "Debrezin", "hu": "Debrecen", "ro": "DebreÈ›in", "en": "Debrecen"},
    image: "/geo-images/hungary/debrecen.webp",
    description: {
      "de": "Debrecen ist die zweitgrÃ¶ÃŸte Stadt Ungarns und das wirtschaftliche sowie kulturelle Zentrum der Ostungarischen Tiefebene. Die Stadt hat historisch eine wichtige Rolle in der protestantischen Reformation gespielt und wird oft als 'das kalvinistische Rom' bezeichnet. Im Zentrum steht die imposante Reformierte GroÃŸkirche, ein Symbol des ungarischen Protestantismus. Debrecen zieht Besucher mit seinen ThermalbÃ¤dern, dem berÃ¼hmten Blumenkarneval und dem nahegelegenen Nationalpark HortobÃ¡gy an.",
      "hu": "Debrecen MagyarorszÃ¡g mÃ¡sodik legnagyobb vÃ¡rosa, valamint az AlfÃ¶ld gazdasÃ¡gi Ã©s kulturÃ¡lis kÃ¶zpontja. A vÃ¡ros tÃ¶rtÃ©nelmileg fontos szerepet jÃ¡tszott a protestÃ¡ns reformÃ¡ciÃ³ban, ezÃ©rt gyakran emlegetik 'kÃ¡lvinista RÃ³ma' nÃ©ven. A vÃ¡roskÃ¶zpontban Ã¡llÃ³ monumentÃ¡lis ReformÃ¡tus Nagytemplom a magyar protestantizmus jelkÃ©pe. Debrecen vonzza a lÃ¡togatÃ³kat termÃ¡lfÃ¼rdÅ‘ivel, a hÃ­res VirÃ¡gkarnevÃ¡ljÃ¡val Ã©s a kÃ¶zeli HortobÃ¡gyi Nemzeti Parkkal.",
      "ro": "DebreÈ›in este al doilea cel mai mare oraÈ™ din Ungaria È™i centrul economic È™i cultural al Marii CÃ¢mpii Maghiare. OraÈ™ul a jucat un rol istoric important Ã®n Reforma ProtestantÄƒ, fiind adesea numit 'Roma calvinistÄƒ'. ÃŽn centrul oraÈ™ului se aflÄƒ impunÄƒtoarea BisericÄƒ ReformatÄƒ Mare, un simbol al protestantismului maghiar. DebreÈ›in atrage vizitatorii cu bÄƒile sale termale, faimosul Carnaval al Florilor È™i Parcul NaÈ›ional HortobÃ¡gy din apropiere.",
      "en": "Debrecen is the second largest city in Hungary and the economic and cultural center of the Great Hungarian Plain. Historically, the city played a vital role in the Protestant Reformation and is often referred to as 'the Calvinist Rome.' At the heart of the city stands the imposing Reformed Great Church, a symbol of Hungarian Protestantism. Debrecen attracts visitors with its thermal baths, the famous Flower Carnival, and the nearby HortobÃ¡gy National Park."
    },
    descriptionAdvanced: {
      "de": "Debrecen, die zweitgrÃ¶ÃŸte Stadt Ungarns, gilt als das ",
      "hu": "Debrecen, a 'kÃ¡lvinista RÃ³ma', MagyarorszÃ¡g mÃ¡sodik legnagyobb vÃ¡rosa Ã©s a TiszÃ¡ntÃºl legfontosabb kÃ¶zpontja, amely gazdag tÃ¶rtÃ©nelmi, egyhÃ¡zi Ã©s kulturÃ¡lis Ã¶rÃ¶ksÃ©ggel rendelkezik. A vÃ¡ros jelkÃ©pe a monumentÃ¡lis ReformÃ¡tus Nagytemplom, ahol Kossuth Lajos 1849-ben kikiÃ¡ltotta MagyarorszÃ¡g fÃ¼ggetlensÃ©gÃ©t. Debrecen hÃ­res egyetemi Ã©letÃ©rÅ‘l, a NagyerdÅ‘ parkjÃ¡rÃ³l, gyÃ³gyfÃ¼rdÅ‘jÃ©rÅ‘l Ã©s modern sportlÃ©tesÃ­tmÃ©nyeirÅ‘l. A vÃ¡ros kulturÃ¡lis Ã©letÃ©t a Csokonai SzÃ­nhÃ¡z Ã©s a DÃ©ri MÃºzeum (a hÃ­res MunkÃ¡csy-trilÃ³giÃ¡val) teszi teljessÃ©. Debrecen a modern fejlÅ‘dÃ©s Ã©s a hagyomÃ¡nytisztelet vÃ¡rosa, amely kapukÃ©nt szolgÃ¡l a HortobÃ¡gy pusztai vilÃ¡ga felÃ©, s vonzÃ³ cÃ©lpont minden lÃ¡togatÃ³ szÃ¡mÃ¡ra.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Debrecen war im 19. Jahrhundert zweimal kurzzeitig die Hauptstadt von Ungarn.", "Die GroÃŸe Reformierte Kirche ist das grÃ¶ÃŸte protestantische Gotteshaus in Ungarn.", "JÃ¤hrlich im August findet in Debrecen der berÃ¼hmte Blumenkarneval statt.", "Die UniversitÃ¤t von Debrecen ist eine der renommiertesten Bildungseinrichtungen des Landes."],
      "hu": [
        "Debrecen MagyarorszÃ¡g legnagyobb vidÃ©ki vÃ¡rosa, lakossÃ¡ga meghaladja a 200 ezer fÅ‘t.",
        "A ReformÃ¡tus Nagytemplom a magyar reformÃ¡ciÃ³ Ã©s a szabadsÃ¡gharc szimbÃ³luma.",
        "A DÃ©ri MÃºzeumban lÃ¡thatÃ³ MunkÃ¡csy MihÃ¡ly vilÃ¡ghÃ­rÅ± Krisztus-trilÃ³giÃ¡ja.",
        "A debreceni NagyerdÅ‘ volt az orszÃ¡g elsÅ‘ termÃ©szetvÃ©delmi terÃ¼lete (1939).",
        "A vÃ¡ros hÃ­res szÃ¼lÃ¶tte SzabÃ³ Magda Ã­rÃ³nÅ‘, akinek emlÃ©kÃ©t irodalmi hÃ¡z Å‘rzi."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "BevÃ¶lkerung: ca. 200.000 Einwohner (2024).",
        "Die UniversitÃ¤t Debrecen wurde 1538 gegrÃ¼ndet und ist eine der Ã¤ltesten des Landes.",
        "Die Reformierte GroÃŸkirche ist das Wahrzeichen der Stadt.",
        "JÃ¤hrlich findet der Debrecener Blumenkarneval am 20. August statt.",
        "Die Stadt war 1849 und kurzzeitig 1944/45 die Hauptstadt Ungarns.",
        "Beliebtes Ziel: Thermalbad Aquaticum mit groÃŸem Erlebnisbad.",
        "In der NÃ¤he liegt der HortobÃ¡gy-Nationalpark (UNESCO-Welterbe).",
        "Debrecen ist ein wichtiges Zentrum der ungarischen Jazz- und Kulturszene."
      ],
      "hu": [
        "NÃ©pessÃ©g: kb. 200 000 fÅ‘ (2024).",
        "A Debreceni Egyetem elÅ‘dje 1538-ban alakult, az orszÃ¡g egyik legrÃ©gebbi intÃ©zmÃ©nye.",
        "A ReformÃ¡tus Nagytemplom a vÃ¡ros legismertebb jelkÃ©pe.",
        "Minden Ã©v augusztus 20-Ã¡n megrendezik a Debreceni VirÃ¡gkarnevÃ¡lt.",
        "A vÃ¡ros 1849-ben Ã©s 1944/45-ben is MagyarorszÃ¡g ideiglenes fÅ‘vÃ¡rosa volt.",
        "NÃ©pszerÅ± Ãºti cÃ©l az Aquaticum termÃ¡l- Ã©s Ã©lmÃ©nyfÃ¼rdÅ‘.",
        "A kÃ¶zelben talÃ¡lhatÃ³ a HortobÃ¡gyi Nemzeti Park (UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g).",
        "Debrecen a magyar jazzÃ©let Ã©s kultÃºra egyik meghatÃ¡rozÃ³ kÃ¶zpontja."
      ],
      "ro": [
        "PopulaÈ›ie: aprox. 200.000 de locuitori (2024).",
        "Universitatea din DebreÈ›in a fost fondatÄƒ Ã®n 1538, fiind una dintre cele mai vechi.",
        "Biserica ReformatÄƒ Mare este simbolul emblematic al oraÈ™ului.",
        "Anual, pe 20 august, are loc Carnavalul Florilor din DebreÈ›in.",
        "OraÈ™ul a fost capitala Ungariei Ã®n 1849 È™i temporar Ã®n 1944/45.",
        "DestinaÈ›ie popularÄƒ: complexul termal Aquaticum cu parc acvatic.",
        "ÃŽn apropiere se aflÄƒ Parcul NaÈ›ional HortobÃ¡gy (patrimoniu UNESCO).",
        "DebreÈ›in este un centru important al scenei de jazz È™i culturÄƒ din Ungaria."
      ],
      "en": [
        "Population: approx. 200,000 inhabitants (2024).",
        "The University of Debrecen was founded in 1538, one of the oldest in the country.",
        "The Reformed Great Church is the most famous landmark of the city.",
        "The Debrecen Flower Carnival is held annually on August 20th.",
        "The city was the capital of Hungary in 1849 and briefly in 1944/45.",
        "Popular destination: Aquaticum thermal bath and water park.",
        "Nearby is the HortobÃ¡gy National Park (UNESCO World Heritage site).",
        "Debrecen is a significant center for the Hungarian jazz and cultural scene."
      ]
    },
  },
  {
    id: "hortobagy",
    type: "landmark",
    parent: "HU-HB",
    coords: [21.15, 47.5833],
    name: {"de": "HortobÃ¡gy", "hu": "HortobÃ¡gy", "ro": "HortobÃ¡gy", "en": "HortobÃ¡gy"},
    image: "/geo-images/hungary/hortobagy.webp",
    description: {"de": "Der grÃ¶ÃŸte Nationalpark Ungarns, der die traditionelle Puszta-Landschaft schÃ¼tzt.", "hu": "MagyarorszÃ¡g legnagyobb nemzeti parkja, amely a hagyomÃ¡nyos pusztai tÃ¡jat vÃ©di.", "ro": "Cel mai mare parc naÈ›ional din Ungaria, protejÃ¢nd peisajul tradiÈ›ional Puszta.", "en": "Hungary's largest national park, protecting the traditional Puszta landscape."},
    descriptionAdvanced: {
      "de": "HortobÃ¡gy ist das Herz der ungarischen Puszta und der grÃ¶ÃŸte Nationalpark des Landes, der fÃ¼r seine unendliche Weite und einzigartige Hirtenkultur bekannt ist. Die Region gehÃ¶rt zum UNESCO-Weltkulturerbe und bewahrt die traditionelle Lebensweise der Puszta-Hirten mit ihren charakteristischen Ziehbrunnen und Peitschenknallen. Besucher kÃ¶nnen hier seltene Haustierrassen wie das graue Steppenrind, das Zackelschaf und das Wollschwein (Mangalica) in ihrer natÃ¼rlichen Umgebung beobachten. Das Wahrzeichen der Region ist die NeunbÃ¶gige BrÃ¼cke, die sich elegant Ã¼ber den Fluss HortobÃ¡gy spannt und Schauplatz traditionsreicher MÃ¤rkte ist. HortobÃ¡gy ist ein Ort von archaischer SchÃ¶nheit, der die Seele der ungarischen Tiefebene widerspiegelt.",
      "hu": "HortobÃ¡gy MagyarorszÃ¡g legnagyobb Ã©s legismertebb pusztÃ¡ja, az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze, amely a magyar pÃ¡sztorkultÃºra Ã©s az Ã©rintetlen termÃ©szet egyedÃ¼lÃ¡llÃ³ Å‘rzÅ‘helye. A hortobÃ¡gyi rÃ³nasÃ¡g vÃ©gtelen horizontja, a dÃ©libÃ¡b Ã©s a gulyÃ¡s-csikÃ³s hagyomÃ¡nyok a magyar nemzeti identitÃ¡s legfontosabb jelkÃ©pei. Itt talÃ¡lhatÃ³ a hÃ­res KilenclyukÃº hÃ­d Ã©s a HortobÃ¡gyi csÃ¡rda, ahol a lÃ¡togatÃ³k megkÃ³stolhatjÃ¡k a pusztai Ã©teleket. A terÃ¼let madÃ¡rvilÃ¡ga nemzetkÃ¶zi jelentÅ‘sÃ©gÅ±, kÃ¼lÃ¶nÃ¶sen a daruvonulÃ¡s idejÃ©n. HortobÃ¡gy nemcsak mÃºzeum, hanem Ã©lÅ‘ puszta, ahol a szÃ¼rke marhÃ¡k, rackajuhok Ã©s a mÃ©nesek ma is szabadon Ã©lnek, hirdetve a magyar puszta szabadsÃ¡gÃ¡t Ã©s szÃ©psÃ©gÃ©t.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Nationalpark HortobÃ¡gy ist das erste und grÃ¶ÃŸte Naturschutzgebiet Ungarns.", "Die NeunbÃ¶gige BrÃ¼cke ist die lÃ¤ngste SteinbrÃ¼cke fÃ¼r den StraÃŸenverkehr in Ungarn.", "HortobÃ¡gy ist berÃ¼hmt fÃ¼r seine 'CsikÃ³s', die berittenen Hirten mit ihren spektakulÃ¤ren ReitvorfÃ¼hrungen.", "Die Region ist ein bedeutendes Vogelparadies und wichtiger Rastplatz fÃ¼r Tausende von Kranichen."],
      "hu": [
        "A HortobÃ¡gyi Nemzeti Park MagyarorszÃ¡g elsÅ‘ Ã©s legnagyobb nemzeti parkja (alapÃ­tva 1973).",
        "A KilenclyukÃº hÃ­d 167 mÃ©terÃ©vel az orszÃ¡g leghosszabb kÅ‘hÃ­dja.",
        "A HortobÃ¡gyon tÃ¶bb mint 300 madÃ¡rfaj fordul elÅ‘, ami EurÃ³pÃ¡ban is kiemelkedÅ‘.",
        "Itt lÃ¡thatÃ³ a vilÃ¡g egyik legritkÃ¡bb lÃ³fajtÃ¡ja, a vadlovakat bemutatÃ³ Pentezugi VadlÃ³rezervÃ¡tum.",
        "A pusztai csillagosÃ©gbolt-park minÅ‘sÃ­tÃ©s elismeri a terÃ¼let rendkÃ­vÃ¼l alacsony fÃ©nyszennyezÃ©sÃ©t."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["UNESCO-Welterbe.", "Bekannt fÃ¼r die NeunbÃ¶gige BrÃ¼cke und traditionelle Hirtenkultur."], "hu": ["UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g.", "A KilenclyukÃº hÃ­drÃ³l Ã©s a hagyomÃ¡nyos pÃ¡sztorkultÃºrÃ¡rÃ³l ismert."], "ro": ["Patrimoniu Mondial UNESCO.", "Cunoscut pentru Podul cu NouÄƒ Arcuri È™i cultura pastoralÄƒ tradiÈ›ionalÄƒ."], "en": ["UNESCO World Heritage site.", "Known for the Nine-holed Bridge and traditional pastoral culture."]},
  },
  {
    id: "hajduszoboszlo",
    type: "city",
    parent: "HU-HB",
    coords: [21.4, 47.45],
    name: {"de": "HajdÃºszoboszlÃ³", "hu": "HajdÃºszoboszlÃ³", "ro": "HajdÃºszoboszlÃ³", "en": "HajdÃºszoboszlÃ³"},    description: {"de": "BerÃ¼hmter Kurort mit dem grÃ¶ÃŸten BÃ¤derkomplex Europas.", "hu": "HÃ­res fÃ¼rdÅ‘vÃ¡ros EurÃ³pa legnagyobb fÃ¼rdÅ‘komplexumÃ¡val.", "ro": "FaimoasÄƒ staÈ›iune balnearÄƒ cu cel mai mare complex de bÄƒi din Europa.", "en": "Famous spa town with the largest bath complex in Europe."},
    descriptionAdvanced: {
      "de": "HajdÃºszoboszlÃ³ ist der bekannteste Badekurort Ungarns und beherbergt den grÃ¶ÃŸten Badekomplex Europas, der jÃ¤hrlich Millionen von Erholungssuchenden anzieht. Das ",
      "hu": "HajdÃºszoboszlÃ³ EurÃ³pa egyik legnagyobb fÃ¼rdÅ‘komplexumÃ¡val rendelkezÅ‘ vÃ¡rosa az AlfÃ¶ldÃ¶n, amelyet mÃ©ltÃ¡n neveznek a 'reumÃ¡sok MekkÃ¡ja'-kÃ©nt. VilÃ¡ghÃ­rnevÃ©t az 1925-ben feltÃ¶rÅ‘ jÃ³dos, brÃ³mos Ã©s konyhasÃ³s gyÃ³gyvizÃ©nek kÃ¶szÃ¶nheti, amely szÃ¡mtalan embernek hozott gyÃ³gyulÃ¡st. A Hungarospa fÃ¼rdÅ‘komplexum nemcsak gyÃ³gyhely, hanem igazi vÃ­zi paradicsom is: strand, aquapark Ã©s egy kÃ¼lÃ¶nleges fedett Ã©lmÃ©nyfÃ¼rdÅ‘ vÃ¡rja a lÃ¡togatÃ³kat minden Ã©vszakban. HajdÃºszoboszlÃ³ barÃ¡tsÃ¡gos, virÃ¡gos parkjai, rendezett terei Ã©s pezsgÅ‘ turisztikai Ã©lete a pihenÃ©s Ã©s a szÃ³rakozÃ¡s tÃ¶kÃ©letes helyszÃ­ne, ahol a vendÃ©gszeretet Ã©s a gyÃ³gyÃ­tÃ³ erÅ‘ kÃ©z a kÃ©zben jÃ¡r.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["HajdÃºszoboszlÃ³ besitzt den grÃ¶ÃŸten Bade- und Wellnesskomplex in ganz Europa.", "Das Heilwasser der Stadt wird aufgrund seiner Farbe und Heilkraft oft als 'flÃ¼ssiges Gold' bezeichnet.", "Der Aquapark von HajdÃºszoboszlÃ³ war der erste Rutschenpark in Ungarn.", "Die Stadt feiert jÃ¤hrlich das Fest des 'Goldenen Wassers' zur Erinnerung an die Entdeckung der Quellen."],
      "hu": [
        "A hajdÃºszoboszlÃ³i gyÃ³gyvizet 1925-ben fÃ¶ldgÃ¡zkutatÃ¡s kÃ¶zben fedeztÃ©k fel vÃ©letlenÃ¼l.",
        "A komplexum terÃ¼lete tÃ¶bb mint 30 hektÃ¡r, s egyszerre akÃ¡r 30 ezer ember is fÃ¼rÃ¶dhet benne.",
        "HajdÃºszoboszlÃ³ az orszÃ¡g egyik leglÃ¡togatottabb vÃ¡rosa Budapest Ã©s HÃ©vÃ­z utÃ¡n.",
        "A vÃ¡rosban talÃ¡lhatÃ³ a HaranghÃ¡z, egy egyedÃ¼lÃ¡llÃ³ hangmÅ±vÃ©szeti Ã©s kÃ©pzÅ‘mÅ±vÃ©szeti alkotÃ¡s.",
        "A gyÃ³gyvÃ­z jellegzetes sÃ¶tÃ©tbarna szÃ­nÃ©t magas Ã¡svÃ¡nyianyag-tartalma adja."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Thermalwasser wurde 1925 entdeckt.", "Beliebtes Ziel fÃ¼r Gesundheitstourismus."], "hu": ["A termÃ¡lvizet 1925-ben fedeztÃ©k fel.", "NÃ©pszerÅ± egÃ©szsÃ©gturisztikai cÃ©lpont."], "ro": ["Apa termalÄƒ a fost descoperitÄƒ Ã®n 1925.", "DestinaÈ›ie popularÄƒ pentru turismul de sÄƒnÄƒtate."], "en": ["The thermal water was discovered in 1925.", "Popular destination for health tourism."]},
  },
  {
    id: "eger",
    type: "city",
    parent: "HU-HE",
    coords: [20.3739, 47.9025],
    name: {"de": "Erlau", "hu": "Eger", "ro": "Eger", "en": "Eger"},
    image: "/geo-images/hungary/eger.webp",
    description: {
      "de": "Eger, eine der schÃ¶nsten BarockstÃ¤dte Ungarns, liegt im Nordosten des Landes am FuÃŸe des BÃ¼kk-Gebirges. Die Stadt ist berÃ¼hmt fÃ¼r ihre heldenhafte Burg, die 1552 der osmanischen Belagerung standhielt, sowie fÃ¼r ihre erstklassigen Weine, insbesondere das 'Erlauer Stierblut' (Egri BikavÃ©r). Besucher kÃ¶nnen das nÃ¶rdlichste Minarett aus der TÃ¼rkenzeit besteigen oder in den historischen ThermalbÃ¤dern entspannen. Die malerische Altstadt mit ihren Kirchen und Museen macht Eger zu einem der beliebtesten Reiseziele Ungarns.",
      "hu": "Eger, MagyarorszÃ¡g egyik legszebb barokk vÃ¡rosa, az orszÃ¡g Ã©szakkeleti rÃ©szÃ©n, a BÃ¼kk-hegysÃ©g lÃ¡bÃ¡nÃ¡l fekszik. A vÃ¡ros hÃ­res hÅ‘sies vÃ¡rÃ¡rÃ³l, amely 1552-ben ellenÃ¡llt az oszmÃ¡n ostromnak, valamint kivÃ¡lÃ³ borairÃ³l, kÃ¼lÃ¶nÃ¶sen az Egri BikavÃ©rrÅ‘l. A lÃ¡togatÃ³k megmÃ¡szhatjÃ¡k a tÃ¶rÃ¶k korbÃ³l szÃ¡rmazÃ³ legÃ©szakibb minaretet, vagy kikapcsolÃ³dhatnak a tÃ¶rtÃ©nelmi termÃ¡lfÃ¼rdÅ‘kben. A festÅ‘i Ã³vÃ¡ros templomaival Ã©s mÃºzeumaival Egert MagyarorszÃ¡g egyik legnÃ©pszerÅ±bb Ãºti cÃ©ljÃ¡vÃ¡ teszi.",
      "ro": "Eger, unul dintre cele mai frumoase oraÈ™e baroce din Ungaria, este situat Ã®n nord-estul È›Äƒrii, la poalele munÈ›ilor BÃ¼kk. OraÈ™ul este faimos pentru castelul sÄƒu eroic, care a rezistat asediului otoman Ã®n 1552, precum È™i pentru vinurile sale de primÄƒ clasÄƒ, Ã®n special 'SÃ¢nge de Taur de Eger' (Egri BikavÃ©r). Vizitatorii pot urca Ã®n cel mai nordic minaret din epoca turcÄƒ sau se pot relaxa Ã®n bÄƒile termale istorice. Centrul vechi pitoresc, cu bisericile È™i muzeele sale, face din Eger una dintre cele mai populare destinaÈ›ii din Ungaria.",
      "en": "Eger, one of Hungary's most beautiful Baroque cities, is located in the northeastern part of the country at the foot of the BÃ¼kk Mountains. The city is famous for its heroic castle, which withstood an Ottoman siege in 1552, and its world-class wines, particularly the 'Bull's Blood of Eger' (Egri BikavÃ©r). Visitors can climb the northernmost minaret from the Turkish era or relax in the historic thermal baths. The picturesque old town, with its churches and museums, makes Eger one of Hungary's most popular travel destinations."
    },
    descriptionAdvanced: {
      "de": "Eger, im Norden Ungarns gelegen, ist eine Stadt von historischem Glanz, berÃ¼hmter Weinkultur und beeindruckender Architektur. Bekannt wurde die Stadt vor allem durch die heldenhafte Verteidigung ihrer Burg gegen das osmanische Heer im Jahr 1552, ein Ereignis, das tief im ungarischen Nationalbewusstsein verankert ist. Das barocke Stadtbild wird von der monumentalen Basilika, dem Lyzeum mit seiner berÃ¼hmten Bibliothek und dem nÃ¶rdlichsten Minarett aus der Zeit der TÃ¼rkenherrschaft geprÃ¤gt. Eger ist zudem das Zentrum einer erstklassigen Weinregion, deren bekanntester Tropfen das ",
      "hu": "Eger a tÃ¶rtÃ©nelmi hÅ‘sÃ¶k vÃ¡rosa a MÃ¡tra Ã©s a BÃ¼kk lÃ¡bÃ¡nÃ¡l, MagyarorszÃ¡g egyik legszebb Ã©s leglÃ¡togatottabb barokk telepÃ¼lÃ©se. A vÃ¡ros neve elvÃ¡laszthatatlan az 1552-es vÃ¡rvÃ©dÃ©stÅ‘l, amikor DobÃ³ IstvÃ¡n maroknyi serege megÃ¡llÃ­totta a tÃ¶rÃ¶k Ã¡radatot, hÅ‘sies pÃ©ldÃ¡t mutatva az utÃ³kornak. Eger kÃ¶zpontja az impozÃ¡ns vÃ¡r, a barokk Bazilika Ã©s a tÃ¶rÃ¶k kori minaret, amely az orszÃ¡g egyik legÃ©szakibb iszlÃ¡m emlÃ©ke. A vÃ¡ros vilÃ¡ghÃ­rÅ± borvidÃ©k kÃ¶zpontja is, az Egri BikavÃ©r Ã©s a SzÃ©passzony-vÃ¶lgy pincÃ©i a borkultÃºra szerelmeseinek kÃ¶telezÅ‘ cÃ©lpontjai. Eger pezsgÅ‘ kulturÃ¡lis Ã©lete, termÃ¡lfÃ¼rdÅ‘je Ã©s tÃ¶rtÃ©nelmi utcÃ¡i minden lÃ¡togatÃ³t elvarÃ¡zsolnak.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Eger ist berÃ¼hmt fÃ¼r seine Burg, die 1552 erfolgreich gegen eine enorme osmanische Ãœbermacht verteidigt wurde.", "Die Stadt beherbergt ein original erhaltenes osmanisches Minarett, das nÃ¶rdlichste seiner Art.", "Das 'Erlauer Stierblut' (Egri BikavÃ©r) ist einer der bekanntesten Rotweine Ungarns.", "Die Basilika von Eger ist die zweitgrÃ¶ÃŸte Kirche Ungarns."],
      "hu": [
        "Eger vÃ¡ra 1552-ben ellenÃ¡llt a tÃ¶bb mint tÃ­zszeres tÃ¶rÃ¶k tÃºlerÅ‘nek.",
        "Itt talÃ¡lhatÃ³ MagyarorszÃ¡g egyetlen Ã©psÃ©gben maradt minaretje a tÃ¶rÃ¶k hÃ³doltsÃ¡g korÃ¡bÃ³l.",
        "Az egri Bazilika az orszÃ¡g mÃ¡sodik legnagyobb temploma az esztergomi utÃ¡n.",
        "A SzÃ©passzony-vÃ¶lgy tÃ¶bb mint 200 vulkanikus tufa-falba vÃ¡jt borospincÃ©vel vÃ¡rja a vendÃ©geket.",
        "GÃ¡rdonyi GÃ©za, az Egri csillagok Ã­rÃ³ja a vÃ¡rban van eltemetve, sÃ­rfelirata: 'Csak a teste'."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Sitz des Komitats Heves und ein bedeutendes religiÃ¶ses Zentrum.",
        "Die Burg Eger ist ein Symbol des ungarischen Widerstands gegen die TÃ¼rken.",
        "Heimat des Egri BikavÃ©r, eines der bekanntesten ungarischen Rotweine.",
        "Das Eger-Minarett ist eines von nur drei erhaltenen in Ungarn.",
        "Die Basilika von Eger ist die zweitgrÃ¶ÃŸte Kirche des Landes.",
        "Bekannt fÃ¼r das Tal der SchÃ¶nen Frau (SzÃ©passzony-vÃ¶lgy) mit seinen Weinkellern.",
        "Das Lyzeum beherbergt eine der schÃ¶nsten Bibliotheken und eine Camera Obscura.",
        "Beliebtes Ziel fÃ¼r Weintourismus und Wellness."
      ],
      "hu": [
        "Heves vÃ¡rmegye szÃ©khelye Ã©s jelentÅ‘s vallÃ¡si kÃ¶zpont.",
        "Az egri vÃ¡r a tÃ¶rÃ¶k elleni magyar ellenÃ¡llÃ¡s jelkÃ©pe.",
        "Az Egri BikavÃ©r, az egyik legismertebb magyar vÃ¶rÃ¶sbor hazÃ¡ja.",
        "Az egri minaret egyike a MagyarorszÃ¡gon Ã©psÃ©gben maradt hÃ¡rom tÃ¶rÃ¶k toronynak.",
        "Az egri Bazilika az orszÃ¡g mÃ¡sodik legnagyobb temploma.",
        "HÃ­res a SzÃ©passzony-vÃ¶lgyrÅ‘l Ã©s annak hangulatos borpincÃ©irÅ‘l.",
        "A LÃ­ceum Ã©pÃ¼letÃ©ben talÃ¡lhatÃ³ az orszÃ¡g egyik legszebb kÃ¶nyvtÃ¡ra Ã©s egy Camera Obscura.",
        "NÃ©pszerÅ± borturisztikai Ã©s wellness Ãºti cÃ©l."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului Heves È™i un centru religios important.",
        "Castelul Eger este un simbol al rezistenÈ›ei maghiare Ã®mpotriva turcilor.",
        "Casa Egri BikavÃ©r, unul dintre cele mai cunoscute vinuri roÈ™ii maghiare.",
        "Minaretul din Eger este unul dintre cele trei rÄƒmase Ã®n Ungaria.",
        "Bazilica din Eger este a doua cea mai mare bisericÄƒ din È›arÄƒ.",
        "Faimos pentru Valea Femeii Frumoase (SzÃ©passzony-vÃ¶lgy) È™i cramele sale.",
        "Liceul gÄƒzduieÈ™te una dintre cele mai frumoase biblioteci È™i o Camera Obscura.",
        "DestinaÈ›ie popularÄƒ pentru turism viticol È™i wellness."
      ],
      "en": [
        "Seat of Heves County and a significant religious center.",
        "Eger Castle is a symbol of Hungarian resistance against the Turks.",
        "Home of Egri BikavÃ©r, one of the most famous Hungarian red wines.",
        "The Eger Minaret is one of only three surviving Turkish towers in Hungary.",
        "Eger Basilica is the second largest church in the country.",
        "Famous for the Valley of the Beautiful Woman (SzÃ©passzony-vÃ¶lgy) and its wine cellars.",
        "The Lyceum houses one of the most beautiful libraries and a Camera Obscura.",
        "A popular destination for wine tourism and wellness."
      ]
    },
  },
  {
    id: "gyongyos",
    type: "city",
    parent: "HU-HE",
    coords: [19.9281, 47.7833],
    name: {"de": "GyÃ¶ngyÃ¶s", "hu": "GyÃ¶ngyÃ¶s", "ro": "GyÃ¶ngyÃ¶s", "en": "GyÃ¶ngyÃ¶s"},
    image: "/geo-images/hungary/gyongyos.webp",
    description: {"de": "Stadt am FuÃŸe des MÃ¡tra-Gebirges, das 'Tor zur MÃ¡tra'.", "hu": "VÃ¡ros a MÃ¡tra lÃ¡bÃ¡nÃ¡l, a 'MÃ¡tra kapuja'.", "ro": "OraÈ™ la poalele munÈ›ilor MÃ¡tra, 'Poarta cÄƒtre MÃ¡tra'.", "en": "City at the foot of the MÃ¡tra mountains, the 'Gateway to the MÃ¡tra'."},
    descriptionAdvanced: {
      "de": "GyÃ¶ngyÃ¶s, am FuÃŸe des MÃ¡tra-Gebirges gelegen, ist als das ",
      "hu": "GyÃ¶ngyÃ¶s, a 'MÃ¡tra kapuja', Heves vÃ¡rmegye jelentÅ‘s vÃ¡rosa, amely tÃ¶rtÃ©nelmi hangulatÃ¡val Ã©s a hegyvidÃ©k kÃ¶zelsÃ©gÃ©vel vonzza a lÃ¡togatÃ³kat. A vÃ¡ros kÃ¶zpontja a tÃ¡gas FÅ‘ tÃ©r a barokk Szent Bertalan-templommal Ã©s a Ferences kolostorral, amely az orszÃ¡g egyik leggazdagabb egyhÃ¡zi kincstÃ¡rÃ¡t Å‘rzi. GyÃ¶ngyÃ¶s Ã©lete szorosan Ã¶sszefonÃ³dik a MÃ¡tra turizmusÃ¡val: innen indul a nÃ©pszerÅ± mÃ¡travasÃºt Ã©s a KÃ©kes-tetÅ‘ felÃ© vezetÅ‘ utak. A vÃ¡ros hÃ­res borÃ¡szatÃ¡rÃ³l is, a MÃ¡trai borvidÃ©k fehÃ©rborai (pl. SzÃ¼rkebarÃ¡t, Olaszrizling) messze fÃ¶ldÃ¶n ismertek. GyÃ¶ngyÃ¶s a kultÃºra, a vallÃ¡si emlÃ©kek Ã©s a termÃ©szetjÃ¡rÃ¡s ideÃ¡lis talÃ¡lkozÃ³helye az Ã‰szaki-kÃ¶zÃ©phegysÃ©g lÃ¡bÃ¡nÃ¡l.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["GyÃ¶ngyÃ¶s ist der wichtigste Knotenpunkt fÃ¼r AusflÃ¼ge in das MÃ¡tra-Gebirge.", "Das MÃ¡tra-Museum im Grassalkovich-Schloss beherbergt ein fast vollstÃ¤ndiges Mammutskelett.", "Die Stadt ist ein historisches Zentrum des Weinanbaus am FuÃŸe des Gebirges.", "Von GyÃ¶ngyÃ¶s aus startet die MÃ¡tra-Schmalspurbahn, eine beliebte Touristenattraktion."],
      "hu": [
        "GyÃ¶ngyÃ¶s mÃ¡r a kÃ¶zÃ©pkorban is fontos kereskedelmi Ã©s egyhÃ¡zi kÃ¶zpont volt a MÃ¡tra lÃ¡bÃ¡nÃ¡l.",
        "A Szent Bertalan-templom kincstÃ¡ra az orszÃ¡g mÃ¡sodik legjelentÅ‘sebb egyhÃ¡zi gyÅ±jtemÃ©nye.",
        "Itt talÃ¡lhatÃ³ a MÃ¡tra MÃºzeum, amely az orszÃ¡g egyetlen komplett mamutcsontvÃ¡zÃ¡t Å‘rzi.",
        "A gyÃ¶ngyÃ¶si Orczy-kastÃ©ly az alfÃ¶ldi Ã©s a hegyvidÃ©ki Ã©pÃ­tÃ©szet kÃ¼lÃ¶nleges elegye.",
        "A vÃ¡ros hatÃ¡rÃ¡ban talÃ¡lhatÃ³ EurÃ³pa egyik legnagyobb naperÅ‘mÅ±-parkja."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Zentrum der Weinregion MÃ¡tra.", "Ausgangspunkt fÃ¼r AusflÃ¼ge zum KÃ©kes."], "hu": ["A MÃ¡trai borvidÃ©k kÃ¶zpontja.", "KiindulÃ³pont a KÃ©kesre tett kirÃ¡ndulÃ¡sokhoz."], "ro": ["Centrul regiunii viticole MÃ¡tra.", "Punct de plecare pentru excursii la KÃ©kes."], "en": ["Center of the MÃ¡tra wine region.", "Starting point for excursions to KÃ©kes."]},
  },
  {
    id: "matra",
    type: "landmark",
    parent: "HU-HE",
    coords: [19.9833, 47.8833],
    name: {"de": "MÃ¡tra", "hu": "MÃ¡tra", "ro": "MÃ¡tra", "en": "MÃ¡tra"},
    image: "/geo-images/hungary/matra.webp",
    description: {"de": "Gebirgszug in Nordungarn, der den hÃ¶chsten Gipfel des Landes beherbergt.", "hu": "HegysÃ©g Ã‰szak-MagyarorszÃ¡gon, itt talÃ¡lhatÃ³ az orszÃ¡g legmagasabb csÃºcsa.", "ro": "LanÈ› muntos Ã®n nordul Ungariei, care gÄƒzduieÈ™te cel mai Ã®nalt vÃ¢rf din È›arÄƒ.", "en": "Mountain range in northern Hungary, home to the country's highest peak."},
    descriptionAdvanced: {
      "de": "Das MÃ¡tra-Gebirge im Norden Ungarns ist die Heimat des KÃ©kes-TetÅ‘, der mit 1014 Metern der hÃ¶chste Gipfel des Landes ist. Die Region ist geprÃ¤gt von dichten Buchen- und EichenwÃ¤ldern, klaren BÃ¤chen und einer Vielzahl an Wanderwegen, die Naturliebhaber und Sportler gleichermaÃŸen anziehen. Bekannte Kurorte wie GalyatetÅ‘ oder MÃ¡trahÃ¡za bieten frische Bergluft und moderne Wellness-Anlagen fÃ¼r Erholungssuchende. Im Winter verwandelt sich das MÃ¡tra-Gebirge in eines der beliebtesten Skigebiete Ungarns mit gut prÃ¤parierten Pisten und Loipen. Die vielfÃ¤ltige Flora und Fauna sowie die atemberaubenden Ausblicke von den Berggipfeln machen die MÃ¡tra zu einem der wertvollsten Naturgebiete des Landes.",
      "hu": "A MÃ¡tra MagyarorszÃ¡g egyik legnÃ©pszerÅ±bb hegyvidÃ©ki tÃ¡jegysÃ©ge, ahol az orszÃ¡g legmagasabb csÃºcsai (KÃ©kes-tetÅ‘, Galya-tetÅ‘) Ã©s legsÅ±rÅ±bb erdÅ‘i talÃ¡lhatÃ³k. A vulkanikus eredetÅ± hegysÃ©g vadregÃ©nyes vÃ¶lgyei, kristÃ¡lytiszta forrÃ¡sai Ã©s kiÃ©pÃ­tett tÃºraÃºtvonalai minden Ã©vszakban vonzzÃ¡k a termÃ©szetbarÃ¡tokat. A MÃ¡tra nemcsak kirÃ¡ndulÃ³hely, hanem fontos gyÃ³gyhely is: tiszta levegÅ‘je Ã©s kÃ¼lÃ¶nleges klÃ­mÃ¡ja kivÃ¡lÃ³an alkalmas lÃ©gzÅ‘szervi panaszok kezelÃ©sÃ©re. TÃ©len a MÃ¡tra az orszÃ¡g sÃ­kÃ¶zpontjÃ¡vÃ¡ vÃ¡lik, nyÃ¡ron pedig a kalandparkok Ã©s a kisvasutak nyÃºjtanak Ã©lmÃ©nyt. A hegysÃ©g dÃ©li lejtÅ‘i hÃ­res borvidÃ©ket alkotnak, ahol a vulkanikus talaj kivÃ¡lÃ³ fehÃ©rborokat Ã©rlel.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das MÃ¡tra-Gebirge beherbergt den hÃ¶chsten Berg Ungarns, den KÃ©kes-TetÅ‘.", "Die Region ist eines der schneesichersten Gebiete des Landes und ein Zentrum des Wintersports.", "Das MÃ¡tra-Gebirge ist vulkanischen Ursprungs, was sich in der Bodenbeschaffenheit und Vegetation zeigt.", "Zahlreiche Wanderwege fÃ¼hren zu Aussichtspunkten mit Blick Ã¼ber die ungarische Tiefebene bis nach Bratislava."],
      "hu": [
        "A MÃ¡trÃ¡ban talÃ¡lhatÃ³ MagyarorszÃ¡g legmagasabb pontja, a KÃ©kes-tetÅ‘ (1014 m).",
        "A hegysÃ©g vulkanikus eredetÅ±, amit a sok tufa- Ã©s andezit-szikla hirdet.",
        "GalyatetÅ‘n mÅ±kÃ¶dik az orszÃ¡g legmagasabban fekvÅ‘ kilÃ¡tÃ³ja Ã©s turistacentruma.",
        "A MÃ¡tra erdÅ‘iben szÃ¡mos ritka Ã©s vÃ©dett Ã¡llatfaj Ã©l, kÃ¶ztÃ¼k a hiÃºz is.",
        "A mÃ¡trai kisvasÃºt (MÃ¡travasÃºt) az orszÃ¡g egyik legforgalmasabb Ã©s legszebb erdei vasÃºtvonala."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Der KÃ©kes ist mit 1014 Metern der hÃ¶chste Berg Ungarns.", "Beliebtes Gebiet zum Wandern und Skifahren."], "hu": ["A KÃ©kes 1014 mÃ©terÃ©vel MagyarorszÃ¡g legmagasabb hegye.", "NÃ©pszerÅ± tÃºrÃ¡zÃ³- Ã©s sÃ­terep."], "ro": ["KÃ©kes este cel mai Ã®nalt munte din Ungaria, cu 1014 metri.", "ZonÄƒ popularÄƒ pentru drumeÈ›ii È™i schi."], "en": ["KÃ©kes is the highest mountain in Hungary at 1014 meters.", "Popular area for hiking and skiing."]},
  },
  {
    id: "szolnok",
    type: "city",
    parent: "HU-JN",
    coords: [20.2, 47.1833],
    name: {"de": "Sollnock", "hu": "Szolnok", "ro": "Szolnok", "en": "Szolnok"},
    description: {
      "de": "Szolnok liegt im Herzen Ungarns an der MÃ¼ndung der Zagyva in die TheiÃŸ und ist ein bedeutender Verkehrsknotenpunkt. Die Stadt ist bekannt fÃ¼r ihre lebendige Flusslandschaft, die moderne TiszavirÃ¡g-BrÃ¼cke und ihre reiche Tradition in der Luftfahrt. Besucher kÃ¶nnen das beeindruckende Luftfahrtmuseum 'RepTÃ¡r' erkunden oder in den ThermalbÃ¤dern der Stadt entspannen. Szolnok ist zudem ein wichtiges Zentrum fÃ¼r Kultur und Sport in der Region der NÃ¶rdlichen GroÃŸen Tiefebene.",
      "hu": "Szolnok MagyarorszÃ¡g szÃ­vÃ©ben, a Zagyva tiszai torkolatÃ¡nÃ¡l fekszik, Ã©s fontos kÃ¶zlekedÃ©si csomÃ³pont. A vÃ¡ros hÃ­res a nyÃ¼zsgÅ‘ folyÃ³parti Ã©letÃ©rÅ‘l, a modern TiszavirÃ¡g hÃ­drÃ³l Ã©s gazdag repÃ¼lÃ©stÃ¶rtÃ©neti mÃºltjÃ¡rÃ³l. A lÃ¡togatÃ³k felfedezhetik a lenyÅ±gÃ¶zÅ‘ RepTÃ¡r repÃ¼lÅ‘mÃºzeumot, vagy kikapcsolÃ³dhatnak a vÃ¡ros termÃ¡lfÃ¼rdÅ‘iben. Szolnok emellett az Ã‰szak-AlfÃ¶ld rÃ©giÃ³ meghatÃ¡rozÃ³ kulturÃ¡lis Ã©s sportkÃ¶zpontja.",
      "ro": "Szolnok este situat Ã®n inima Ungariei, la confluenÈ›a rÃ¢ului Zagyva cu Tisa, fiind un important nod de transport. OraÈ™ul este cunoscut pentru peisajul sÄƒu fluvial vibrant, podul modern TiszavirÃ¡g È™i tradiÈ›ia sa bogatÄƒ Ã®n aviaÈ›ie. Vizitatorii pot explora impresionantul muzeu al aviaÈ›iei 'RepTÃ¡r' sau se pot relaxa Ã®n bÄƒile termale ale oraÈ™ului. Szolnok este, de asemenea, un centru important pentru culturÄƒ È™i sport Ã®n regiunea Marii CÃ¢mpii de Nord.",
      "en": "Szolnok is located in the heart of Hungary at the confluence of the Zagyva and Tisza rivers, serving as a major transportation hub. The city is famous for its vibrant riverfront, the modern TiszavirÃ¡g Bridge, and its rich aviation heritage. Visitors can explore the impressive 'RepTÃ¡r' aviation museum or relax in the city's thermal baths. Szolnok is also a significant cultural and sporting center in the Northern Great Plain region."
    },
    descriptionAdvanced: {
      "de": "Szolnok liegt strategisch gÃ¼nstig am Zusammenfluss von TheiÃŸ und Zagyva im Herzen der ungarischen Tiefebene und ist ein bedeutender Verkehrsknotenpunkt. Die Stadt hat eine lange Geschichte als FlussÃ¼bergang und war einst ein wichtiges militÃ¤risches und wirtschaftliches Zentrum. Ein besonderes kulturelles Highlight ist die KÃ¼nstlerkolonie von Szolnok, die seit Ã¼ber einem Jahrhundert Maler und Bildhauer anzieht und das kulturelle Leben der Stadt prÃ¤gt. Die Stadt ist zudem fÃ¼r ihre ThermalbÃ¤der und das imposante Szigligeti-Theater bekannt, das ein wichtiger Ort fÃ¼r das ungarische Schauspielwesen ist. Entlang der TheiÃŸ lÃ¤dt die breite Promenade zu entspannten SpaziergÃ¤ngen ein, wÃ¤hrend das jÃ¤hrliche Gulasch-Festival die kulinarische Tradition der Region feiert.",
      "hu": "Szolnok, a 'Tisza fÅ‘vÃ¡rosa', az AlfÃ¶ld szÃ­vÃ©ben fekvÅ‘ fontos kÃ¶zlekedÃ©si, gazdasÃ¡gi Ã©s kulturÃ¡lis kÃ¶zpont, ahol a Tisza Ã©s a Zagyva folyÃ³ talÃ¡lkozik. A vÃ¡ros Ã©lete elvÃ¡laszthatatlan a TiszÃ¡tÃ³l: a folyÃ³parti sÃ©tÃ¡nyok, a szabadstrand Ã©s az emblematikus TiszavirÃ¡g-hÃ­d a vÃ¡ros legszebb rÃ©szei. Szolnok hÃ­res repÃ¼lÃ©stÃ¶rtÃ©neti mÃºltjÃ¡rÃ³l, amit a modern ReptÃ¡r mÃºzeum mutat be, valamint pezsgÅ‘ mÅ±vÃ©szeti Ã©letÃ©rÅ‘l, amit a Szolnoki MÅ±vÃ©sztelep kÃ©pvisel. A vÃ¡ros gyÃ³gyfÃ¼rdÅ‘je Ã©s az aktÃ­v vÃ­zi sportok lehetÅ‘sÃ©ge kivÃ¡lÃ³ pihenÃ©st nyÃºjt minden korosztÃ¡lynak. Szolnok az alfÃ¶ldi vendÃ©gszeretet Ã©s a modern vÃ¡rosi fejlÅ‘dÃ©s harmonikus Ã¶tvÃ¶zete a folyÃ³ partjÃ¡n.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szolnok liegt am geografischen Zusammenfluss der FlÃ¼sse TheiÃŸ und Zagyva.", "Die Stadt beherbergt eine der Ã¤ltesten und bedeutendsten KÃ¼nstlerkolonien Ungarns.", "Die Szolnoker FuÃŸgÃ¤ngerbrÃ¼cke (TiszavirÃ¡g-hÃ­d) ist die lÃ¤ngste ihrer Art in Mitteleuropa.", "JÃ¤hrlich findet in Szolnok das ungarische Gulasch-Festival statt."],
      "hu": [
        "Szolnok vÃ¡rosa mÃ¡r a honfoglalÃ¡s Ã³ta fontos Ã¡tkelÅ‘hely a Tisza folyÃ³n.",
        "A TiszavirÃ¡g-hÃ­d KÃ¶zÃ©p-EurÃ³pa leghosszabb gyalogoshÃ­dja, formÃ¡ja a kÃ©rÃ©sz szÃ¡rnyÃ¡t idÃ©zi.",
        "Itt talÃ¡lhatÃ³ a ReptÃ¡r, EurÃ³pa egyik legmodernebb interaktÃ­v repÃ¼lÅ‘mÃºzeuma.",
        "A Szolnoki MÅ±vÃ©sztelep az orszÃ¡g legrÃ©gebbi, folyamatosan mÅ±kÃ¶dÅ‘ mÅ±vÃ©sztelepe (alapÃ­tva 1902).",
        "Szolnok hÃ­res a tiszai halÃ¡szlevÃ©rÅ‘l Ã©s a szolnoki habos isler sÃ¼temÃ©nyrÅ‘l."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Sitz des Komitats JÃ¡sz-Nagykun-Szolnok.",
        "Die TiszavirÃ¡g-BrÃ¼cke ist die lÃ¤ngste FuÃŸgÃ¤ngerbrÃ¼cke Mitteleuropas.",
        "Das RepTÃ¡r ist eines der modernsten Luftfahrtmuseen in Europa.",
        "Bekannt fÃ¼r das jÃ¤hrliche Gulasch-Festival im September.",
        "Wichtiger Eisenbahnknotenpunkt an der Strecke Budapest-Bukarest.",
        "Die Stadt hat eine renommierte KÃ¼nstlerkolonie, die 1902 gegrÃ¼ndet wurde.",
        "Beliebtes Ziel fÃ¼r Wassersportler auf der TheiÃŸ.",
        "Beherbergt das Damjanich-JÃ¡nos-Museum mit bedeutenden archÃ¤ologischen Funden."
      ],
      "hu": [
        "JÃ¡sz-Nagykun-Szolnok vÃ¡rmegye szÃ©khelye.",
        "A TiszavirÃ¡g hÃ­d KÃ¶zÃ©p-EurÃ³pa leghosszabb gyalogoshÃ­dja.",
        "A RepTÃ¡r EurÃ³pa egyik legmodernebb repÃ¼lÃ©stÃ¶rtÃ©neti mÃºzeuma.",
        "HÃ­res az Ã©vente szeptemberben megrendezett GulyÃ¡sfesztivÃ¡lrÃ³l.",
        "Fontos vasÃºti csomÃ³pont a Budapest-Bukarest vonalon.",
        "A vÃ¡ros neves mÅ±vÃ©szteleppel rendelkezik, amelyet 1902-ben alapÃ­tottak.",
        "NÃ©pszerÅ± Ãºti cÃ©l a Tisza menti vÃ­zi sportok kedvelÅ‘i szÃ¡mÃ¡ra.",
        "Itt talÃ¡lhatÃ³ a Damjanich JÃ¡nos MÃºzeum jelentÅ‘s rÃ©gÃ©szeti gyÅ±jtemÃ©nye."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului JÃ¡sz-Nagykun-Szolnok.",
        "Podul TiszavirÃ¡g este cel mai lung pod pietonal din Europa CentralÄƒ.",
        "RepTÃ¡r este unul dintre cele mai moderne muzee de aviaÈ›ie din Europa.",
        "Cunoscut pentru festivalul anual al gulaÈ™ului din septembrie.",
        "Nod feroviar important pe ruta Budapesta-BucureÈ™ti.",
        "OraÈ™ul are o colonie de artiÈ™ti renumitÄƒ, fondatÄƒ Ã®n 1902.",
        "DestinaÈ›ie popularÄƒ pentru sporturi nautice pe rÃ¢ul Tisa.",
        "GÄƒzduieÈ™te Muzeul Damjanich JÃ¡nos cu descoperiri arheologice importante."
      ],
      "en": [
        "Seat of JÃ¡sz-Nagykun-Szolnok County.",
        "The TiszavirÃ¡g Bridge is the longest pedestrian bridge in Central Europe.",
        "RepTÃ¡r is one of the most modern aviation museums in Europe.",
        "Famous for the annual Goulash Festival held in September.",
        "A major railway hub on the Budapest-Bucharest line.",
        "The city has a renowned artists' colony founded in 1902.",
        "A popular destination for water sports on the Tisza river.",
        "Home to the Damjanich JÃ¡nos Museum with significant archaeological finds."
      ]
    },
  },
  {
    id: "jaszbereny",
    type: "city",
    parent: "HU-JN",
    coords: [19.9167, 47.5],
    name: {"de": "JÃ¡szberÃ©ny", "hu": "JÃ¡szberÃ©ny", "ro": "JÃ¡szberÃ©ny", "en": "JÃ¡szberÃ©ny"},
    image: "/geo-images/hungary/jaszbereny.webp",
    description: {"de": "Das kulturelle und wirtschaftliche Zentrum der Region JÃ¡szsÃ¡g.", "hu": "A JÃ¡szsÃ¡g kulturÃ¡lis Ã©s gazdasÃ¡gi kÃ¶zpontja.", "ro": "Centrul cultural È™i economic al regiunii JÃ¡szsÃ¡g.", "en": "The cultural and economic center of the JÃ¡szsÃ¡g region."},
    descriptionAdvanced: {
      "de": "JÃ¡szberÃ©ny ist das kulturelle und historische Zentrum des JÃ¡szsÃ¡g, einer Region, die im 13. Jahrhundert von den Jazygen besiedelt wurde. Die Stadt bewahrt stolz das Erbe dieser Volksgruppe, was im Jazygen-Museum eindrucksvoll dokumentiert wird. Das wertvollste Exponat ist das berÃ¼hmte Lehel-Horn, ein elfenbeinernes Relikt, das eng mit der ungarischen Sagenwelt verknÃ¼pft ist. JÃ¡szberÃ©ny ist zudem fÃ¼r seinen charmanten Tierpark bekannt, der einer der Ã¤ltesten und beliebtesten des Landes ist und ein tolles Ausflugsziel fÃ¼r Familien darstellt. Die Stadt ist geprÃ¤gt von barocker Architektur und einer lebendigen Traditionspflege, die bei zahlreichen Festen und kulturellen Veranstaltungen zum Ausdruck kommt.",
      "hu": "JÃ¡szberÃ©ny a JÃ¡szsÃ¡g fÅ‘vÃ¡rosa Ã©s kulturÃ¡lis kÃ¶zpontja a Zagyva folyÃ³ partjÃ¡n, amely bÃ¼szkÃ©n Å‘rzi a jÃ¡szok kÃ¼lÃ¶nleges tÃ¶rtÃ©nelmi Ã©s nÃ©prajzi Ã¶rÃ¶ksÃ©gÃ©t. A vÃ¡ros szimbÃ³luma a JÃ¡sz MÃºzeumban Å‘rzÃ¶tt Lehel-kÃ¼rtje, a jÃ¡szok szent ereklyÃ©je. JÃ¡szberÃ©ny hÃ­res csalÃ¡dbarÃ¡t Ãllat- Ã©s NÃ¶vÃ©nykertjÃ©rÅ‘l, amely az orszÃ¡g egyik leghangulatosabb vidÃ©ki vadasparkja. A vÃ¡ros fÅ‘tere a monumentÃ¡lis Ã©pÃ¼letekkel, a barokk templommal Ã©s a tÃ¡gas parkokkal igazi mezÅ‘vÃ¡rosi hangulatot Ã¡raszt. JÃ¡szberÃ©ny ma is a tÃ©rsÃ©g gazdasÃ¡gi motorja, ahol a hagyomÃ¡nyÅ‘rzÃ©s (pl. CsÃ¡ngÃ³ FesztivÃ¡l) Ã©s az ipari fejlÅ‘dÃ©s kÃ©z a kÃ©zben jÃ¡r, vonzÃ³ cÃ©lpontot jelentve a kultÃºra Ã©s a termÃ©szet kedvelÅ‘inek.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["JÃ¡szberÃ©ny ist das historische Zentrum der Region JÃ¡szsÃ¡g (Jazygien).", "Das Lehel-Horn, ein legendÃ¤res Elfenbeinhorn aus dem 10. Jahrhundert, wird im Ã¶rtlichen Museum aufbewahrt.", "Der Tier- und Pflanzenpark von JÃ¡szberÃ©ny ist eine der traditionsreichsten Anlagen Ungarns.", "Die Stadt feiert jÃ¤hrlich das Jazygen-Festival zur Pflege ihrer kulturellen IdentitÃ¤t."],
      "hu": [
        "A jÃ¡szberÃ©nyi JÃ¡sz MÃºzeumban lÃ¡thatÃ³ a Lehel-kÃ¼rtje, a jÃ¡sz nÃ©p 10. szÃ¡zadi ereklyÃ©je.",
        "A JÃ¡szberÃ©nyi Ãllatkert volt az orszÃ¡g elsÅ‘ vidÃ©ki Ã¡llatkertje utÃ¡n alapÃ­tott egyik legrÃ©gebbi vadaspark.",
        "Minden Ã©vben itt rendezik meg a CsÃ¡ngÃ³ FesztivÃ¡lt, a nÃ©pmÅ±vÃ©szet egyik legfontosabb hazai Ã¼nnepÃ©t.",
        "A vÃ¡ros fÅ‘terÃ©n Ã¡llÃ³ SzenthÃ¡romsÃ¡g-szobor a barokk vallÃ¡sos mÅ±vÃ©szet remeke.",
        "JÃ¡szberÃ©ny a hÅ±tÅ‘gÃ©pgyÃ¡rtÃ¡sÃ¡rÃ³l is vilÃ¡gszerte ismerttÃ© vÃ¡lt az elmÃºlt Ã©vtizedekben."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bewahrt das Horn des Lehel, ein nationales Relikt.", "Veranstaltet jÃ¤hrlich das JÃ¡sz-Festival."], "hu": ["Itt Å‘rzik Lehel kÃ¼rtjÃ©t, egy nemzeti ereklyÃ©t.", "Ã‰vente megrendezik a JÃ¡sz VilÃ¡gtalÃ¡lkozÃ³t."], "ro": ["PÄƒstreazÄƒ Cornul lui Lehel, o relicvÄƒ naÈ›ionalÄƒ.", "GÄƒzduieÈ™te anual Festivalul JÃ¡sz."], "en": ["Preserves the Horn of Lehel, a national relic.", "Hosts the annual JÃ¡sz Festival."]},
  },
  {
    id: "kisujszallas",
    type: "city",
    parent: "HU-JN",
    coords: [20.7667, 47.2167],
    name: {"de": "KisÃºjszÃ¡llÃ¡s", "hu": "KisÃºjszÃ¡llÃ¡s", "ro": "KisÃºjszÃ¡llÃ¡s", "en": "KisÃºjszÃ¡llÃ¡s"},
    image: "/geo-images/hungary/kisujszallas.webp",
    description: {"de": "Stadt in der Region NagykunsÃ¡g mit landwirtschaftlicher PrÃ¤gung.", "hu": "NagykunsÃ¡gi vÃ¡ros mezÅ‘gazdasÃ¡gi jelleggel.", "ro": "OraÈ™ Ã®n regiunea NagykunsÃ¡g cu caracter agricol.", "en": "City in the NagykunsÃ¡g region with an agricultural character."},
    descriptionAdvanced: {
      "de": "KisÃºjszÃ¡llÃ¡s liegt in der Region NagykunsÃ¡g (GroÃŸkumanien) und blickt auf eine Geschichte zurÃ¼ck, die eng mit der Ansiedlung der Kumanen im Mittelalter verbunden ist. Die Stadt ist geprÃ¤gt von einer ruhigen, lÃ¤ndlichen AtmosphÃ¤re und einer Architektur, die typisch fÃ¼r die Siedlungen der ungarischen Tiefebene ist. Ein bedeutendes Wahrzeichen ist das klassizistische Rathaus sowie die reformierte Kirche, die den religiÃ¶sen Charakter der Region widerspiegelt. KisÃºjszÃ¡llÃ¡s ist stolz auf seine berÃ¼hmten SÃ¶hne, darunter der Erfinder der modernen Computertechnik, John von Neumann, dessen Familie Wurzeln in der Stadt hatte. Heute bietet die Stadt mit dem KumÃ¡nia Heil- und Strandbad moderne ErholungsmÃ¶glichkeiten in einer traditionsbewussten Umgebung.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["KisÃºjszÃ¡llÃ¡s ist ein bedeutendes Zentrum der kumanischen Kultur in Ungarn.", "Das KumÃ¡nia Heil- und Strandbad nutzt wertvolles Thermalwasser fÃ¼r medizinische Anwendungen.", "Die Stadt bewahrt die Traditionen des Handwerks und der kumanischen Volkskunst.", "Die Vorfahren von John von Neumann, dem Pionier der Informatik, stammten aus dieser Stadt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r sein Thermalbad.", "Geburtsort des Biologen IstvÃ¡n GyÃ¶rffy."], "hu": ["TermÃ¡lfÃ¼rdÅ‘jÃ©rÅ‘l ismert.", "GyÃ¶rffy IstvÃ¡n biolÃ³gus szÃ¼lÅ‘vÃ¡rosa."], "ro": ["Cunoscut pentru baia sa termalÄƒ.", "Locul de naÈ™tere al biologului IstvÃ¡n GyÃ¶rffy."], "en": ["Known for its thermal bath.", "Birthplace of biologist IstvÃ¡n GyÃ¶rffy."]},
  },
  {
    id: "tatabanya",
    type: "city",
    parent: "HU-KE",
    coords: [18.4222, 47.58],
    name: {"de": "Totiserkolonie", "hu": "TatabÃ¡nya", "ro": "TatabÃ¡nya", "en": "TatabÃ¡nya"},
    image: "/geo-images/hungary/tatabanya.webp",
    description: {
      "de": "TatabÃ¡nya, am FuÃŸe des Gerecse-Gebirges gelegen, ist eine Stadt mit einer starken industriellen Vergangenheit, die sich zu einem modernen Zentrum entwickelt hat. Das markanteste Wahrzeichen ist das Turul-Denkmal, die grÃ¶ÃŸte Vogelstatue Europas, die hoch Ã¼ber der Stadt auf einem Felsen thront. In der NÃ¤he befindet sich die Szelim-HÃ¶hle, eine bedeutende archÃ¤ologische FundstÃ¤tte. TatabÃ¡nya bietet zudem zahlreiche MÃ¶glichkeiten fÃ¼r Wanderungen und Naturerlebnisse in den umliegenden Bergen.",
      "hu": "TatabÃ¡nya, a Gerecse-hegysÃ©g lÃ¡bÃ¡nÃ¡l fekvÅ‘ vÃ¡ros, erÅ‘s ipari mÃºlttal rendelkezik, amely mÃ¡ra modern kÃ¶zponttÃ¡ fejlÅ‘dÃ¶tt. Legismertebb jelkÃ©pe a Turul-emlÃ©kmÅ±, EurÃ³pa legnagyobb madÃ¡rszobra, amely a vÃ¡ros feletti sziklÃ¡n magasodik. A kÃ¶zelben talÃ¡lhatÃ³ a Szelim-barlang, amely jelentÅ‘s rÃ©gÃ©szeti lelÅ‘hely. TatabÃ¡nya emellett szÃ¡mos lehetÅ‘sÃ©get kÃ­nÃ¡l tÃºrÃ¡zÃ¡sra Ã©s termÃ©szetjÃ¡rÃ¡sra a kÃ¶rnyezÅ‘ hegyekben.",
      "ro": "TatabÃ¡nya, situat la poalele munÈ›ilor Gerecse, este un oraÈ™ cu un trecut industrial puternic, care s-a dezvoltat Ã®ntr-un centru modern. Cel mai proeminent simbol al sÄƒu este Monumentul Turul, cea mai mare statuie a unei pÄƒsÄƒri din Europa, situatÄƒ pe o stÃ¢ncÄƒ deasupra oraÈ™ului. ÃŽn apropiere se aflÄƒ peÈ™tera Szelim, un sit arheologic important. TatabÃ¡nya oferÄƒ, de asemenea, numeroase oportunitÄƒÈ›i pentru drumeÈ›ii È™i experienÈ›e Ã®n naturÄƒ Ã®n munÈ›ii din jur.",
      "en": "TatabÃ¡nya, located at the foot of the Gerecse Mountains, is a city with a strong industrial past that has evolved into a modern center. Its most iconic landmark is the Turul Monument, the largest bird statue in Europe, perched on a cliff high above the city. Nearby is the Szelim Cave, a significant archaeological site. TatabÃ¡nya also offers numerous opportunities for hiking and nature experiences in the surrounding mountains."
    },
    descriptionAdvanced: {
      "de": "TatabÃ¡nya, am FuÃŸe des Gerecse-Gebirges gelegen, hat sich von einer bedeutenden Bergbaustadt zu einem modernen Industrie- und Sportzentrum gewandelt. Das unÃ¼bersehbare Wahrzeichen der Stadt ist der Turul-Vogel, die grÃ¶ÃŸte Vogelstatue aus Bronze in Europa, die auf einem Felsen hoch Ã¼ber der Stadt thront. Neben dem Turul-Denkmal befindet sich die Szelim-HÃ¶hle, eine beeindruckende natÃ¼rliche HÃ¶hle mit prÃ¤historischen Funden und einer fantastischen Aussicht. TatabÃ¡nya ist zudem fÃ¼r seine erfolgreiche Sporttradition bekannt und bietet zahlreiche Einrichtungen fÃ¼r Profi- und Freizeitsportler. Die waldreiche Umgebung des Gerecse-Gebirges lÃ¤dt zu ausgiebigen Wanderungen und Naturbeobachtungen ein.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Turul-Denkmal in TatabÃ¡nya ist die grÃ¶ÃŸte Bronzestatue eines Vogels in Europa.", "Die Szelim-HÃ¶hle ist ein bedeutendes palÃ¤ontologisches Denkmal direkt neben dem Turul-Vogel.", "Die Stadt hat eine lange Bergbaugeschichte, die im Open-Air-Bergbaumuseum dokumentiert wird.", "TatabÃ¡nya ist ein wichtiger Knotenpunkt an der Bahnstrecke Wien-Budapest."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Sitz des Komitats KomÃ¡rom-Esztergom.",
        "Das Turul-Denkmal hat eine FlÃ¼gelspannweite von 15 Metern.",
        "Entstand 1947 durch den Zusammenschluss von vier BergbaudÃ¶rfern.",
        "Die Szelim-HÃ¶hle war bereits in der Steinzeit bewohnt.",
        "Wichtiger Industriestandort an der Autobahn M1 (Budapest-Wien).",
        "Das Freilicht-Bergbaumuseum zeigt die Geschichte des Kohlebergbaus.",
        "Beliebtes Basislager fÃ¼r Wanderungen im Gerecse-Gebirge.",
        "Die Stadt hat ein modernes Sportzentrum und ein Thermalbad."
      ],
      "hu": [
        "KomÃ¡rom-Esztergom vÃ¡rmegye szÃ©khelye.",
        "A Turul-emlÃ©kmÅ± szÃ¡rnyfesztÃ¡volsÃ¡ga 15 mÃ©ter.",
        "1947-ben jÃ¶tt lÃ©tre nÃ©gy bÃ¡nyÃ¡szfalu egyesÃ­tÃ©sÃ©vel.",
        "A Szelim-barlang mÃ¡r a kÅ‘korszakban is lakott volt.",
        "Fontos ipari kÃ¶zpont az M1-es autÃ³pÃ¡lya mentÃ©n (Budapest-BÃ©cs).",
        "A SzabadtÃ©ri BÃ¡nyÃ¡szati MÃºzeum a szÃ©nbÃ¡nyÃ¡szat tÃ¶rtÃ©netÃ©t mutatja be.",
        "NÃ©pszerÅ± kiindulÃ³pont a Gerecse-hegysÃ©gbe indulÃ³ tÃºrÃ¡khoz.",
        "A vÃ¡ros modern sportkÃ¶zponttal Ã©s termÃ¡lfÃ¼rdÅ‘vel is rendelkezik."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului KomÃ¡rom-Esztergom.",
        "Monumentul Turul are o anvergurÄƒ a aripilor de 15 metri.",
        "Format Ã®n 1947 prin unirea a patru sate miniere.",
        "PeÈ™tera Szelim a fost locuitÄƒ Ã®ncÄƒ din epoca pietrei.",
        "Centru industrial important pe autostrada M1 (Budapesta-Viena).",
        "Muzeul Mineritului Ã®n Aer Liber prezintÄƒ istoria extracÈ›iei cÄƒrbunelui.",
        "BazÄƒ popularÄƒ pentru drumeÈ›ii Ã®n munÈ›ii Gerecse.",
        "OraÈ™ul are un centru sportiv modern È™i o baie termalÄƒ."
      ],
      "en": [
        "Seat of KomÃ¡rom-Esztergom County.",
        "The Turul Monument has a wingspan of 15 meters.",
        "Formed in 1947 by the merger of four mining villages.",
        "The Szelim Cave was inhabited as early as the Stone Age.",
        "A major industrial hub on the M1 motorway (Budapest-Vienna).",
        "The Open-Air Mining Museum showcases the history of coal mining.",
        "A popular base for hiking in the Gerecse Mountains.",
        "The city features a modern sports center and a thermal bath."
      ]
    },
  },
  {
    id: "esztergom",
    type: "city",
    parent: "HU-KE",
    coords: [18.7394, 47.7914],
    name: {"de": "Gran", "hu": "Esztergom", "ro": "Esztergom", "en": "Esztergom"},
    image: "/geo-images/hungary/esztergom.webp",
    description: {
      "de": "Esztergom, am malerischen Donauknie gelegen, ist eine der geschichtstrÃ¤chtigsten StÃ¤dte Ungarns und das geistige Zentrum der katholischen Kirche des Landes. Die Stadt war die erste Hauptstadt Ungarns und der Geburtsort des Heiligen Stephan, des ersten KÃ¶nigs. Das Stadtbild wird von der monumentalen Basilika dominiert, der grÃ¶ÃŸten Kirche Ungarns, die majestÃ¤tisch auf dem Burgberg thront. Besucher kÃ¶nnen zudem die Ãœberreste des mittelalterlichen KÃ¶nigspalastes erkunden und den Blick Ã¼ber die Donau nach der Slowakei genieÃŸen.",
      "hu": "Esztergom, a festÅ‘i Dunakanyarban fekszik, MagyarorszÃ¡g egyik legfontosabb tÃ¶rtÃ©nelmi vÃ¡rosa Ã©s a magyar katolikus egyhÃ¡z kÃ¶zpontja. A vÃ¡ros az orszÃ¡g elsÅ‘ fÅ‘vÃ¡rosa volt, Ã©s itt szÃ¼letett Szent IstvÃ¡n, az elsÅ‘ magyar kirÃ¡ly. A vÃ¡roskÃ©pet a monumentÃ¡lis Bazilika uralja, amely MagyarorszÃ¡g legnagyobb temploma, Ã©s fensÃ©gesen magasodik a VÃ¡rhegyen. A lÃ¡togatÃ³k megtekinthetik a kÃ¶zÃ©pkori kirÃ¡lyi palota maradvÃ¡nyait is, Ã©s Ã©lvezhetik a DunÃ¡ra Ã©s SzlovÃ¡kiÃ¡ra nyÃ­lÃ³ kilÃ¡tÃ¡st.",
      "ro": "Esztergom, situat Ã®n pitorescul Cot al DunÄƒrii, este unul dintre cele mai importante oraÈ™e istorice din Ungaria È™i centrul spiritual al Bisericii Catolice din È›arÄƒ. OraÈ™ul a fost prima capitalÄƒ a Ungariei È™i locul de naÈ™tere al SfÃ¢ntului È˜tefan, primul rege. Aspectul oraÈ™ului este dominat de Bazilica monumentalÄƒ, cea mai mare bisericÄƒ din Ungaria, care troneazÄƒ maiestuos pe dealul castelului. Vizitatorii pot vedea, de asemenea, rÄƒmÄƒÈ™iÈ›ele palatului regal medieval È™i se pot bucura de vederea peste DunÄƒre cÄƒtre Slovacia.",
      "en": "Esztergom, situated at the picturesque Danube Bend, is one of Hungary's most historically significant cities and the spiritual center of the country's Catholic Church. The city served as Hungary's first capital and was the birthplace of Saint Stephen, the first king. The cityscape is dominated by the monumental Basilica, the largest church in Hungary, which stands majestically on Castle Hill. Visitors can also explore the remains of the medieval Royal Palace and enjoy views across the Danube into Slovakia."
    },
    descriptionAdvanced: {
      "de": "Esztergom, die einstige Hauptstadt Ungarns und Wiege des ungarischen Christentums, liegt malerisch an der Donau direkt gegenÃ¼ber der Slowakei. Hier wurde der erste ungarische KÃ¶nig, der Heilige Stephan, gekrÃ¶nt, und die Stadt ist bis heute der Sitz des ungarischen Primas. Das alles beherrschende Wahrzeichen ist die Esztergomer Basilika, die grÃ¶ÃŸte Kirche des Landes, deren gewaltige Kuppel schon von weitem sichtbar ist. In der Schatzkammer der Basilika werden wertvolle sakrale KunstschÃ¤tze aus Ã¼ber einem Jahrtausend aufbewahrt. Neben der Basilika laden die Reste des kÃ¶niglichen Schlosses und die charmante Altstadt (VÃ­zivÃ¡ros) am Donauufer dazu ein, in die reiche Geschichte Ungarns einzutauchen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Esztergom war die erste Hauptstadt des ungarischen KÃ¶nigreichs.", "Die Basilika von Esztergom ist das grÃ¶ÃŸte Kirchenbauwerk in Ungarn.", "In der Stadt wurde der erste ungarische KÃ¶nig, der Heilige Stephan, geboren und gekrÃ¶nt.", "Die Maria-Valeria-BrÃ¼cke verbindet Esztergom mit der slowakischen Stadt Å tÃºrovo."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Erste Hauptstadt Ungarns und Sitz des Erzbischofs von Esztergom-Budapest.",
        "Die Basilika von Esztergom ist die grÃ¶ÃŸte Kirche und das hÃ¶chste GebÃ¤ude Ungarns.",
        "Geburtsort und KrÃ¶nungsort des Heiligen Stephan I.",
        "Die Maria-Valeria-BrÃ¼cke verbindet Esztergom mit Å tÃºrovo in der Slowakei.",
        "Das Christliche Museum beherbergt die bedeutendste kirchliche Kunstsammlung des Landes.",
        "Die Burg von Esztergom war im Mittelalter eine wichtige kÃ¶nigliche Residenz.",
        "Bekannt fÃ¼r das malerische Viertel VizivÃ¡ros am FuÃŸe des Burgbergs.",
        "Wichtiger Industriestandort, unter anderem Sitz eines groÃŸen Suzuki-Werks."
      ],
      "hu": [
        "MagyarorszÃ¡g elsÅ‘ fÅ‘vÃ¡rosa Ã©s az esztergom-budapesti Ã©rsek szÃ©khelye.",
        "Az esztergomi Bazilika az orszÃ¡g legnagyobb temploma Ã©s legmagasabb Ã©pÃ¼lete.",
        "Szent IstvÃ¡n kirÃ¡ly szÃ¼lÅ‘- Ã©s koronÃ¡zÃ¡si helye.",
        "A MÃ¡ria ValÃ©ria hÃ­d kÃ¶ti Ã¶ssze Esztergomot a szlovÃ¡kiai PÃ¡rkÃ¡nnyal.",
        "A KeresztÃ©ny MÃºzeum az orszÃ¡g legjelentÅ‘sebb egyhÃ¡zi mÅ±vÃ©szeti gyÅ±jtemÃ©nyÃ©t Å‘rzi.",
        "Az esztergomi vÃ¡r a kÃ¶zÃ©pkorban fontos kirÃ¡lyi szÃ©khely volt.",
        "HÃ­res a VÃ¡rhegy lÃ¡bÃ¡nÃ¡l fekvÅ‘ festÅ‘i VÃ­zivÃ¡rosrÃ³l.",
        "Fontos ipari kÃ¶zpont, itt talÃ¡lhatÃ³ a Suzuki magyarorszÃ¡gi gyÃ¡ra."
      ],
      "ro": [
        "Prima capitalÄƒ a Ungariei È™i reÈ™edinÈ›a arhiepiscopului de Esztergom-Budapesta.",
        "Bazilica din Esztergom este cea mai mare bisericÄƒ È™i cea mai Ã®naltÄƒ clÄƒdire din Ungaria.",
        "Locul de naÈ™tere È™i de Ã®ncoronare al regelui SfÃ¢ntul È˜tefan I.",
        "Podul Maria Valeria leagÄƒ Esztergom de oraÈ™ul Å tÃºrovo din Slovacia.",
        "Muzeul CreÈ™tin gÄƒzduieÈ™te cea mai importantÄƒ colecÈ›ie de artÄƒ religioasÄƒ din È›arÄƒ.",
        "Castelul din Esztergom a fost o reÈ™edinÈ›Äƒ regalÄƒ importantÄƒ Ã®n Evul Mediu.",
        "Cunoscut pentru cartierul pitoresc VizivÃ¡ros de la poalele dealului castelului.",
        "Centru industrial important, gÄƒzduind o mare fabricÄƒ Suzuki."
      ],
      "en": [
        "First capital of Hungary and seat of the Archbishop of Esztergom-Budapest.",
        "Esztergom Basilica is the largest church and tallest building in Hungary.",
        "Birthplace and coronation site of King Saint Stephen I.",
        "The Maria Valeria Bridge connects Esztergom with Å tÃºrovo in Slovakia.",
        "The Christian Museum houses the country's most significant collection of religious art.",
        "Esztergom Castle was a major royal residence during the Middle Ages.",
        "Known for the picturesque VizivÃ¡ros district at the foot of Castle Hill.",
        "A major industrial hub, home to a large Suzuki manufacturing plant."
      ]
    },
  },
  {
    id: "tata",
    type: "city",
    parent: "HU-KE",
    coords: [18.3167, 47.65],
    name: {"de": "Totis", "hu": "Tata", "ro": "Tata", "en": "Tata"},
    image: "/geo-images/hungary/tata.webp",
    description: {"de": "Die 'Stadt der GewÃ¤sser', bekannt fÃ¼r ihre Lakes und die Burg.", "hu": "A 'Vizek vÃ¡rosa', tavairÃ³l Ã©s vÃ¡rÃ¡rÃ³l ismert.", "ro": "'OraÈ™ul apelor', cunoscut pentru lacurile È™i castelul sÄƒu.", "en": "The 'City of Waters', known for its lakes and castle."},
    descriptionAdvanced: {
      "de": "Tata, auch als die 'Stadt der GewÃ¤sser' bekannt, ist eine der idyllischsten KleinstÃ¤dte Ungarns und liegt malerisch am Ufer des Ã–reg-Sees (Alten See). Das Wahrzeichen der Stadt ist die am Seeufer gelegene mittelalterliche Burg, die einst eine beliebte Sommerresidenz ungarischer KÃ¶nige wie Sigismund von Luxemburg war. Tata besticht durch sein barockes Stadtbild, prachtvolle SchlÃ¶sser wie das EsterhÃ¡zy-Schloss und zahlreiche Parks, die die Stadt in ein grÃ¼nes Paradies verwandeln. Einzigartig ist auch der Englische Garten mit seinen kÃ¼nstlichen Ruinen und Thermalquellen, der zum TrÃ¤umen und Verweilen einlÃ¤dt. Jedes Jahr im November lockt der 'Wilde GÃ¤nse-Zug' Tausende Naturfreunde an den Ã–reg-See, um die Rast der ZugvÃ¶gel zu beobachten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Tata wird wegen seiner vielen Seen und Quellen oft als 'Stadt der GewÃ¤sser' bezeichnet.", "Die Burg von Tata am Ã–reg-See war eine wichtige Residenz der ungarischen KÃ¶nige.", "Der Englische Garten von Tata war der erste seiner Art in Ungarn.", "Der Ã–reg-See ist ein international bedeutendes Schutzgebiet fÃ¼r wandernde WildgÃ¤nse."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Burg Tata liegt malerisch am Ufer des Ã–reg-Sees.", "Beliebter Ort fÃ¼r Vogelbeobachtungen."], "hu": ["A tatai vÃ¡r festÅ‘i kÃ¶rnyezetben, az Ã–reg-tÃ³ partjÃ¡n fekszik.", "NÃ©pszerÅ± madÃ¡rmegfigyelÅ‘ hely."], "ro": ["Castelul Tata este situat pitoresc pe malul Lacului Ã–reg.", "Loc popular pentru observarea pÄƒsÄƒrilor."], "en": ["Tata Castle is picturesquely situated on the shores of Lake Ã–reg.", "Popular spot for bird watching."]},
  },
  {
    id: "salgotarjan",
    type: "city",
    parent: "HU-NO",
    coords: [19.8053, 48.0986],
    name: {"de": "SalgÃ³tarjÃ¡n", "hu": "SalgÃ³tarjÃ¡n", "ro": "SalgÃ³tarjÃ¡n", "en": "SalgÃ³tarjÃ¡n"},
    image: "/geo-images/hungary/salgotarjan.webp",
    description: {"de": "Stadt in einem Tal umgeben von Bergen, ehemalige Bergbaustadt.", "hu": "Hegyekkel kÃ¶rÃ¼lvett vÃ¶lgyben fekvÅ‘ vÃ¡ros, egykori bÃ¡nyÃ¡szvÃ¡ros.", "ro": "OraÈ™ Ã®ntr-o vale Ã®nconjuratÄƒ de munÈ›i, fost oraÈ™ minier.", "en": "City in a valley surrounded by mountains, former mining town."},
    descriptionAdvanced: {
      "de": "SalgÃ³tarjÃ¡n, eingebettet in die bewaldeten TÃ¤ler des Karancs-Medves-Gebirges im Norden Ungarns, ist eine Stadt mit einer starken Bergbautradition und einer faszinierenden Umgebung. Nach dem Niedergang des Bergbaus hat sich die Stadt zu einem Tor fÃ¼r Naturtouristen entwickelt, die die bizarren Basaltformationen der Region entdecken mÃ¶chten. Ein absolutes Highlight ist das unterirdische Bergbaumuseum, das einzige seiner Art in Ungarn, das einen authentischen Einblick in die Arbeit der Kumpel bietet. Hoch Ã¼ber der Stadt thronen die Ruinen der Burgen SalgÃ³ und SomoskÅ‘, die auf gewaltigen Basaltkegeln errichtet wurden und spektakulÃ¤re Ausblicke bieten. Die Region ist zudem bekannt fÃ¼r das europÃ¤ische Diplom fÃ¼r Naturschutzgebiete, das die Einzigartigkeit der hiesigen vulkanischen Landschaft wÃ¼rdigt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["SalgÃ³tarjÃ¡n beherbergt das einzige unterirdische Bergbaumuseum Ungarns.", "Die Burgruine SalgÃ³ steht auf einem 625 Meter hohen Basaltkegel.", "In der NÃ¤he befinden sich die berÃ¼hmten Basaltorgeln von SomoskÅ‘.", "Die Stadt liegt in einem der waldreichsten und gebirgigsten Gebiete Ungarns."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["In der NÃ¤he befinden sich die Burgruinen SalgÃ³ und SomoskÅ‘.", "Hat ein unterirdisches Bergbaumuseum."], "hu": ["A kÃ¶zelben talÃ¡lhatÃ³ SalgÃ³ Ã©s SomoskÅ‘ vÃ¡ra.", "FÃ¶ldalatti bÃ¡nyamÃºzeummal rendelkezik."], "ro": ["ÃŽn apropiere se aflÄƒ ruinele castelelor SalgÃ³ È™i SomoskÅ‘.", "Are un muzeu minier subteran."], "en": ["Nearby are the castle ruins of SalgÃ³ and SomoskÅ‘.", "Has an underground mining museum."]},
  },
  {
    id: "balassagyarmat",
    type: "city",
    parent: "HU-NO",
    coords: [19.2944, 48.0792],
    name: {"de": "Jahrmarkt", "hu": "Balassagyarmat", "ro": "Balassagyarmat", "en": "Balassagyarmat"},
    image: "/geo-images/hungary/balassagyarmat.webp",
    description: {"de": "Grenzstadt zur Slowakei, bekannt als die 'mutigste Stadt'.", "hu": "HatÃ¡rvÃ¡ros SzlovÃ¡kiÃ¡val, a 'LegbÃ¡trabb vÃ¡ros' nÃ©ven ismert.", "ro": "OraÈ™ de graniÈ›Äƒ cu Slovacia, cunoscut ca 'cel mai curajos oraÈ™'.", "en": "Border town with Slovakia, known as the 'Bravest City'."},
    descriptionAdvanced: {
      "de": "Balassagyarmat, im Norden an der Grenze zur Slowakei gelegen, trÃ¤gt stolz den Ehrentitel 'Civitas Fortissima' (die tapferste Stadt). Diesen Namen erhielt sie fÃ¼r den heldenhaften Widerstand ihrer BÃ¼rger gegen die tschechoslowakische Besatzung im Jahr 1919. Die Stadt ist ein kulturelles Zentrum der Region PalÃ³cland und bewahrt die einzigartigen Traditionen und den Dialekt dieser Volksgruppe. Sehenswert ist das PalÃ³c-Museum, das tiefe Einblicke in die traditionelle Lebensweise, die farbenfrohen Trachten und die Volkskunst der Region bietet. Balassagyarmat besticht zudem durch seine barocken und klassizistischen GebÃ¤ude, die vom einstigen Glanz als Komitatshauptstadt zeugen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Balassagyarmat trÃ¤gt den Ehrentitel 'Civitas Fortissima' fÃ¼r ihre Tapferkeit im Jahr 1919.", "Die Stadt beherbergt das erste PalÃ³c-Museum des Landes, das 1891 gegrÃ¼ndet wurde.", "Balassagyarmat war Ã¼ber zwei Jahrhunderte lang der Sitz des Komitats NÃ³grÃ¡d.", "Die Stadt liegt direkt am Fluss Ipoly, der die Grenze zur Slowakei bildet."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wehrte 1919 tschechoslowakische Truppen ab.", "Ehemaliger Sitz des Komitats NÃ³grÃ¡d."], "hu": ["1919-ben visszaverte a csehszlovÃ¡k csapatokat.", "NÃ³grÃ¡d vÃ¡rmegye egykori szÃ©khelye."], "ro": ["A respins trupele cehoslovace Ã®n 1919.", "Fostul sediu al comitatului NÃ³grÃ¡d."], "en": ["Repelled Czechoslovak troops in 1919.", "Former seat of NÃ³grÃ¡d county."]},
  },
  {
    id: "holloko",
    type: "landmark",
    parent: "HU-NO",
    coords: [19.5833, 47.9964],
    name: {"de": "HollÃ³kÅ‘", "hu": "HollÃ³kÅ‘", "ro": "HollÃ³kÅ‘", "en": "HollÃ³kÅ‘"},
    image: "/geo-images/hungary/holloko.webp",
    description: {"de": "Ein traditionelles Paloczen-Dorf, das als lebendiges Museum erhalten ist.", "hu": "HagyomÃ¡nyos palÃ³c falu, amelyet Ã©lÅ‘ mÃºzeumkÃ©nt Å‘riztek meg.", "ro": "Un sat tradiÈ›ional PalÃ³c, conservat ca un muzeu viu.", "en": "A traditional PalÃ³c village preserved as a living museum."},
    descriptionAdvanced: {
      "de": "HollÃ³kÅ‘ ist ein lebendiges Museumsdorf im Norden Ungarns und war das erste Dorf weltweit, das von der UNESCO zum Weltkulturerbe erklÃ¤rt wurde. Das 'Alte Dorf' (Ã“falu) besteht aus 67 traditionellen LehmhÃ¤usern mit charakteristischen Holzbalkonen, die nach einem Brand im frÃ¼hen 20. Jahrhundert in ihrem ursprÃ¼nglichen Stil wiedererrichtet wurden. Hier wird die Kultur der PalÃ³cen noch aktiv gelebt, sei es durch das Tragen traditioneller Trachten an Feiertagen oder durch das AusÃ¼ben alter Handwerke. Ãœber dem Dorf thront die Ruine der Burg HollÃ³kÅ‘ aus dem 13. Jahrhundert, von der aus man einen weiten Blick Ã¼ber die hÃ¼gelige Landschaft der CserhÃ¡t hat. Ein Besuch in HollÃ³kÅ‘ ist wie eine Zeitreise in ein Ungarn vergangener Jahrhunderte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["HollÃ³kÅ‘ war 1987 das erste Dorf weltweit, das zum UNESCO-Weltkulturerbe erklÃ¤rt wurde.", "Das 'Alte Dorf' bewahrt die traditionelle Architektur der PalÃ³cen in ihrer reinsten Form.", "Die Bewohner tragen zu festlichen AnlÃ¤ssen wie Ostern ihre prÃ¤chtigen, handgestickten Trachten.", "Die Burg HollÃ³kÅ‘ wurde nach der tatarischen Invasion zum Schutz der Region erbaut."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das erste Dorf weltweit, das UNESCO-Welterbe wurde.", "Ãœberragt von einer Burgruine aus dem 13. Jahrhundert."], "hu": ["A vilÃ¡g elsÅ‘ faluja, amely UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g lett.", "Egy 13. szÃ¡zadi vÃ¡rrom magasodik fÃ¶lÃ©."], "ro": ["Primul sat din lume care a devenit Patrimoniu Mondial UNESCO.", "Dominat de ruinele unui castel din secolul al XIII-lea."], "en": ["The first village in the world to become a UNESCO World Heritage site.", "Overlooked by a 13th-century castle ruin."]},
  },
  {
    id: "szentendre",
    type: "city",
    parent: "HU-PE",
    coords: [19.0761, 47.6694],
    name: {"de": "Sankt AndrÃ¤", "hu": "Szentendre", "ro": "Szentendre", "en": "Szentendre"},
    image: "/geo-images/hungary/szentendre.webp",
    description: {
      "de": "Szentendre, eine malerische Stadt am Donauufer nÃ¶rdlich von Budapest, ist bekannt fÃ¼r ihre lebendige KÃ¼nstlerkolonie und ihre mediterrane AtmosphÃ¤re. Die Stadt wurde im 17. Jahrhundert von serbischen FlÃ¼chtlingen geprÃ¤gt, was sich in der barocken Architektur und den zahlreichen orthodoxen Kirchen widerspiegelt. Heute ist Szentendre ein beliebtes Ziel fÃ¼r Kunstliebhaber, mit unzÃ¤hligen Galerien, Museen und charmanten KunsthandwerkslÃ¤den. Das nahegelegene Skanzen, das grÃ¶ÃŸte Freilichtmuseum Ungarns, bietet zudem tiefe Einblicke in die traditionelle lÃ¤ndliche Kultur des Landes.",
      "hu": "Szentendre, a Duna partjÃ¡n, BudapesttÅ‘l Ã©szakra fekvÅ‘ festÅ‘i vÃ¡ros, amely Ã©lÃ©nk mÅ±vÃ©sztelepÃ©rÅ‘l Ã©s mediterrÃ¡n hangulatÃ¡rÃ³l ismert. A vÃ¡rost a 17. szÃ¡zadban szerb menekÃ¼ltek formÃ¡ltÃ¡k, ami a barokk Ã©pÃ­tÃ©szetben Ã©s a szÃ¡mos ortodox templomban is tÃ¼krÃ¶zÅ‘dik. Ma Szentendre a mÅ±vÃ©szetkedvelÅ‘k kedvelt Ãºti cÃ©lja, szÃ¡mtalan galÃ©riÃ¡val, mÃºzeummal Ã©s hangulatos kÃ©zmÅ±ves bolttal. A kÃ¶zeli Skanzen, MagyarorszÃ¡g legnagyobb szabadtÃ©ri nÃ©prajzi mÃºzeuma, mÃ©ly betekintÃ©st nyÃºjt az orszÃ¡g hagyomÃ¡nyos nÃ©pi kultÃºrÃ¡jÃ¡ba.",
      "ro": "Szentendre, un oraÈ™ pitoresc pe malul DunÄƒrii, la nord de Budapesta, este cunoscut pentru colonia sa vibrantÄƒ de artiÈ™ti È™i atmosfera sa mediteraneanÄƒ. OraÈ™ul a fost modelat Ã®n secolul al XVII-lea de refugiaÈ›ii sÃ¢rbi, fapt reflectat Ã®n arhitectura barocÄƒ È™i numeroasele biserici ortodoxe. AstÄƒzi, Szentendre este o destinaÈ›ie popularÄƒ pentru iubitorii de artÄƒ, cu nenumÄƒrate galerii, muzee È™i magazine fermecÄƒtoare de artizanat. Skanzen-ul din apropiere, cel mai mare muzeu Ã®n aer liber din Ungaria, oferÄƒ o perspectivÄƒ profundÄƒ asupra culturii rurale tradiÈ›ionale a È›Äƒrii.",
      "en": "Szentendre, a picturesque town on the banks of the Danube north of Budapest, is famous for its vibrant artists' colony and Mediterranean atmosphere. The town was shaped in the 17th century by Serbian refugees, which is reflected in its Baroque architecture and numerous Orthodox churches. Today, Szentendre is a popular destination for art lovers, featuring countless galleries, museums, and charming craft shops. The nearby Skanzen, Hungary's largest open-air museum, provides deep insights into the country's traditional rural culture."
    },
    descriptionAdvanced: {
      "de": "Szentendre, malerisch am Donauknie nÃ¶rdlich von Budapest gelegen, ist als 'Stadt der KÃ¼nstler' bekannt und besticht durch ihr mediterranes Flair. Die Stadt wurde im 17. Jahrhundert von serbischen, griechischen und dalmatinischen FlÃ¼chtlingen geprÃ¤gt, was man heute noch an den prÃ¤chtigen orthodoxen Kirchen und der Architektur erkennen kann. Die verwinkelten Kopfsteinpflastergassen, bunten Fassaden und kleinen Galerien machen Szentendre zu einem der beliebtesten Ausflugsziele in Ungarn. Neben dem berÃ¼hmten Marzipanmuseum und dem Freilichtmuseum (Skanzen) bietet die Stadt eine Vielzahl an kleinen WerkstÃ¤tten fÃ¼r Kunsthandwerk. Ein Spaziergang entlang der Donaupromenade rundet das Erlebnis in dieser farbenfrohen und geschichtstrÃ¤chtigen Stadt ab.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Szentendre ist berÃ¼hmt fÃ¼r seine lebendige KÃ¼nstlerkolonie und zahlreiche Galerien.", "Die Stadt wurde architektonisch stark von serbischen Siedlern im 17. Jahrhundert geprÃ¤gt.", "Das Szentendreer Skanzen ist das grÃ¶ÃŸte Freilichtmuseum fÃ¼r Volksarchitektur in Ungarn.", "Das Marzipanmuseum zeigt beeindruckende Skulpturen aus Zucker und Mandeln."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Bekannt als 'Stadt der KÃ¼nste' mit einer bedeutenden KÃ¼nstlerkolonie.",
        "GeprÃ¤gt durch serbische und dalmatinische EinflÃ¼sse im 17. Jahrhundert.",
        "Beherbergt das Ungarische Freilichtmuseum (Skanzen), das grÃ¶ÃŸte des Landes.",
        "BerÃ¼hmt fÃ¼r das Marzipan-Museum und zahlreiche kleine Galerien.",
        "Die barocke Altstadt mit ihren engen Gassen ist fast vollstÃ¤ndig erhalten.",
        "Hat sieben Kirchen, von denen viele ursprÃ¼nglich orthodox waren.",
        "Beliebtes Ausflugsziel fÃ¼r Touristen aus Budapest.",
        "Liegt am Tor zum malerischen Donauknie."
      ],
      "hu": [
        "A 'mÅ±vÃ©szetek vÃ¡rosa' nÃ©ven ismert, jelentÅ‘s mÅ±vÃ©szteleppel rendelkezik.",
        "A 17. szÃ¡zadi szerb Ã©s dalmÃ¡t hatÃ¡sok hatÃ¡rozzÃ¡k meg a vÃ¡roskÃ©pÃ©t.",
        "Itt talÃ¡lhatÃ³ a SzabadtÃ©ri NÃ©prajzi MÃºzeum (Skanzen), az orszÃ¡g legnagyobbja.",
        "HÃ­res a Szamos MarcipÃ¡n MÃºzeumrÃ³l Ã©s a szÃ¡mos kis galÃ©riÃ¡rÃ³l.",
        "A barokk Ã³vÃ¡ros szÅ±k utcÃ¡ival szinte teljesen Ã©psÃ©gben maradt.",
        "HÃ©t temploma van, amelyek kÃ¶zÃ¼l sok eredetileg ortodox volt.",
        "A budapesti turistÃ¡k egyik legkedveltebb kirÃ¡ndulÃ³helye.",
        "A festÅ‘i Dunakanyar kapujÃ¡ban fekszik."
      ],
      "ro": [
        "Cunoscut ca 'oraÈ™ul artelor', avÃ¢nd o colonie de artiÈ™ti importantÄƒ.",
        "Modelat de influenÈ›e sÃ¢rbe È™i dalmate Ã®n secolul al XVII-lea.",
        "GÄƒzduieÈ™te Muzeul Satului (Skanzen), cel mai mare din È›arÄƒ.",
        "Faimos pentru Muzeul MarÈ›ipanului È™i numeroasele galerii mici.",
        "Centrul vechi baroc cu strÄƒzile sale Ã®nguste este aproape complet conservat.",
        "Are È™apte biserici, dintre care multe au fost iniÈ›ial ortodoxe.",
        "O destinaÈ›ie de excursie foarte popularÄƒ pentru turiÈ™tii din Budapesta.",
        "Situat la poarta pitorescului Cot al DunÄƒrii."
      ],
      "en": [
        "Known as the 'City of Arts' with a significant artists' colony.",
        "Shaped by Serbian and Dalmatian influences in the 17th century.",
        "Home to the Hungarian Open-Air Museum (Skanzen), the largest in the country.",
        "Famous for the Marzipan Museum and numerous small galleries.",
        "The Baroque old town with its narrow streets is almost entirely preserved.",
        "Features seven churches, many of which were originally Orthodox.",
        "A highly popular excursion destination for tourists from Budapest.",
        "Located at the gateway to the scenic Danube Bend."
      ]
    },
  },
  {
    id: "godollo",
    type: "city",
    parent: "HU-PE",
    coords: [19.3478, 47.5969],
    name: {"de": "GÃ¶dÃ¶llÅ‘", "hu": "GÃ¶dÃ¶llÅ‘", "ro": "GÃ¶dÃ¶llÅ‘", "en": "GÃ¶dÃ¶llÅ‘"},
    image: "/geo-images/hungary/godollo.webp",
    description: {"de": "Stadt nahe Budapest, berÃ¼hmt fÃ¼r ihr kÃ¶nigliches Schloss.", "hu": "Budapest kÃ¶zeli vÃ¡ros, hÃ­res kirÃ¡lyi kastÃ©lyÃ¡rÃ³l.", "ro": "OraÈ™ lÃ¢ngÄƒ Budapesta, faimos pentru palatul sÄƒu regal.", "en": "City near Budapest, famous for its royal palace."},
    descriptionAdvanced: {
      "de": "GÃ¶dÃ¶llÅ‘ ist weltberÃ¼hmt fÃ¼r das Grassalkovich-Schloss, eines der bedeutendsten Barockensembles Ungarns und die einstige Lieblingsresidenz von Kaiserin Elisabeth (Sissi). Das Schloss ist ein architektonisches Meisterwerk mit prachtvollen PrunksÃ¤len, einem kÃ¶niglichen Reitstall und einem weitlÃ¤ufigen Schlosspark, der zum Flanieren einlÃ¤dt. Die enge Verbindung zu ",
      "hu": "GÃ¶dÃ¶llÅ‘ BudapesttÅ‘l keletre fekvÅ‘ vÃ¡ros, amely leginkÃ¡bb monumentÃ¡lis barokk kastÃ©lyÃ¡rÃ³l, a Grassalkovich-kastÃ©lyrÃ³l hÃ­res. Ez az Ã©pÃ¼let MagyarorszÃ¡g egyik legnagyobb Ã©s legszebb barokk palotÃ¡ja, amely a 19. szÃ¡zad mÃ¡sodik felÃ©ben I. Ferenc JÃ³zsef Ã©s ErzsÃ©bet kirÃ¡lynÃ© (Sisi) kedvenc pihenÅ‘helyÃ©vÃ© vÃ¡lt. A kastÃ©ly falai kÃ¶zÃ¶tt ma mÃºzeum mÅ±kÃ¶dik, amely hÅ±en mutatja be a kirÃ¡lyi pÃ¡r Ã©letÃ©t Ã©s a magyar arisztokrÃ¡cia mindennapjait. A vÃ¡ros azonban tÃ¶bb egy kastÃ©lynÃ¡l: bÃ¼szkÃ©lkedhet a Szent IstvÃ¡n Egyetemmel, gyÃ¶nyÃ¶rÅ± parkokkal Ã©s a GÃ¶dÃ¶llÅ‘i-dombsÃ¡g termÃ©szeti Ã©rtÃ©keivel. GÃ¶dÃ¶llÅ‘ kulturÃ¡lis Ã©lete is gazdag, szÃ¡mos zenei Ã©s hagyomÃ¡nyÅ‘rzÅ‘ rendezvÃ©nynek ad otthont, amelyek a kirÃ¡lyi mÃºltat idÃ©zik fel.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss GÃ¶dÃ¶llÅ‘ war die bevorzugte Sommerresidenz der Kaiserin Sissi.", "Es ist eines der grÃ¶ÃŸten und bedeutendsten BarockschlÃ¶sser Ungarns.", "GÃ¶dÃ¶llÅ‘ beherbergt das einzige Barocktheater des Landes, das noch bespielt wird.", "Die Stadt ist ein Zentrum der Agrarwissenschaften mit einer traditionsreichen UniversitÃ¤t."],
      "hu": [
        "A gÃ¶dÃ¶llÅ‘i Grassalkovich-kastÃ©ly a magyarorszÃ¡gi barokk Ã©pÃ­tÃ©szet egyik csÃºcspontja.",
        "ErzsÃ©bet kirÃ¡lynÃ© (Sisi) tÃ¶bb idÅ‘t tÃ¶ltÃ¶tt itt, mint bÃ¡rmely mÃ¡s rezidenciÃ¡jÃ¡n BÃ©csen kÃ­vÃ¼l.",
        "Itt talÃ¡lhatÃ³ az orszÃ¡g egyik legrÃ©gebbi Ã©s legjelentÅ‘sebb agrÃ¡rtudomÃ¡nyi egyeteme.",
        "A GÃ¶dÃ¶llÅ‘i KirÃ¡lyi KastÃ©lypark termÃ©szetvÃ©delmi terÃ¼let, szÃ¡mos ritka nÃ¶vÃ©nyfajjal.",
        "A vÃ¡rosban talÃ¡lhatÃ³ a MÃ¡riabesnyÅ‘i Nagyboldogasszony Bazilika, amely fontos zarÃ¡ndokhely."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Schloss GÃ¶dÃ¶llÅ‘ war die Sommerresidenz von Kaiserin Sisi.", "Sitz der Szent-IstvÃ¡n-UniversitÃ¤t."], "hu": ["A GÃ¶dÃ¶llÅ‘i KirÃ¡lyi KastÃ©ly Sisi csÃ¡szÃ¡rnÃ© nyÃ¡ri rezidenciÃ¡ja volt.", "A Szent IstvÃ¡n Egyetem szÃ©khelye."], "ro": ["Palatul GÃ¶dÃ¶llÅ‘ a fost reÈ™edinÈ›a de varÄƒ a ÃŽmpÄƒrÄƒtesei Sisi.", "Sediul UniversitÄƒÈ›ii Szent IstvÃ¡n."], "en": ["The Royal Palace of GÃ¶dÃ¶llÅ‘ was the summer residence of Empress Sisi.", "Seat of Szent IstvÃ¡n University."]},
  },
  {
    id: "vac",
    type: "city",
    parent: "HU-PE",
    coords: [19.1306, 47.7756],
    name: {"de": "Waitzen", "hu": "VÃ¡c", "ro": "VÃ¡c", "en": "VÃ¡c"},
    image: "/geo-images/hungary/vac.webp",
    description: {"de": "Historische Stadt am Donauknie mit barocker Architektur.", "hu": "TÃ¶rtÃ©nelmi vÃ¡ros a Dunakanyarban, barokk Ã©pÃ­tÃ©szettel.", "ro": "OraÈ™ istoric la Cotul DunÄƒrii cu arhitecturÄƒ barocÄƒ.", "en": "Historic city at the Danube Bend with Baroque architecture."},
    descriptionAdvanced: {
      "de": "VÃ¡c, am malerischen Donauknie gelegen, ist eine Stadt von barocker SchÃ¶nheit und reicher religiÃ¶ser Tradition. Das Zentrum der Stadt ist der prÃ¤chtige Hauptplatz (MÃ¡rcius 15. tÃ©r), der von aufwendig restaurierten GebÃ¤uden und der markanten Unterkirche gesÃ¤umt wird. Einzigartig ist die VÃ¡c-Mumienausstellung ",
      "hu": "VÃ¡c a Duna bal partjÃ¡n fekvÅ‘ festÅ‘i barokk vÃ¡ros, amely gazdag tÃ¶rtÃ©nelmi mÃºltjÃ¡val Ã©s vallÃ¡si emlÃ©keivel tÅ±nik ki a Dunakanyar telepÃ¼lÃ©sei kÃ¶zÃ¼l. A vÃ¡ros kÃ¶zpontja a MÃ¡rcius 15. tÃ©r, amely egyedÃ¼lÃ¡llÃ³, szinte Ã©rintetlen barokk Ã©pÃ¼leteivel Ã©s hangulatos kÃ¡vÃ©zÃ³ival varÃ¡zsolja el a lÃ¡togatÃ³kat. VÃ¡c bÃ¼szkÃ©lkedhet MagyarorszÃ¡g egyetlen diadalÃ­vÃ©vel, amelyet MÃ¡ria TerÃ©zia tiszteletÃ©re emeltek, valamint az impozÃ¡ns SzÃ©kesegyhÃ¡zzal. A vÃ¡ros nemzetkÃ¶zi hÃ­rnevÃ©t az 1994-ben felfedezett 'vÃ¡ci mÃºmiÃ¡knak' is kÃ¶szÃ¶nheti, amelyek a FehÃ©rek templomÃ¡nak kriptÃ¡jÃ¡bÃ³l kerÃ¼ltek elÅ‘, Ã©s ma a Tragor IgnÃ¡c MÃºzeumban lÃ¡thatÃ³k. A Duna-parti sÃ©tÃ¡ny Ã©s a kÃ¶rnyezÅ‘ dombok kivÃ¡lÃ³ lehetÅ‘sÃ©get nyÃºjtanak a kikapcsolÃ³dÃ¡sra.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Dom von VÃ¡c ist das einzige klassizistische KathedralgebÃ¤ude in Ungarn.", "Die Mumien von VÃ¡c wurden zufÃ¤llig bei Renovierungsarbeiten in einer Krypta entdeckt.", "Der Triumphbogen in VÃ¡c ist das einzige Bauwerk dieser Art im ganzen Land.", "VÃ¡c besitzt einen der schÃ¶nsten barocken HauptplÃ¤tze in Mitteleuropa."],
      "hu": [
        "VÃ¡c az egyetlen magyarorszÃ¡gi vÃ¡ros, ahol klasszicista stÃ­lusÃº diadalÃ­v (KÅ‘kapu) talÃ¡lhatÃ³.",
        "A vÃ¡ci SzÃ©kesegyhÃ¡z az orszÃ¡g egyik legjelentÅ‘sebb Ã©s legnagyobb klasszicista temploma.",
        "A 'Memento Mori' kiÃ¡llÃ­tÃ¡s a 18. szÃ¡zadi termÃ©szetes mÃ³don mumifikÃ¡lÃ³dott polgÃ¡rokat mutatja be.",
        "VÃ¡con Ã©pÃ¼lt fel az elsÅ‘ magyarorszÃ¡gi vasÃºtvonal vÃ©gÃ¡llomÃ¡sa 1846-ban.",
        "A vÃ¡ros fÅ‘tere, a MÃ¡rcius 15. tÃ©r, EurÃ³pa egyik legszebb barokk stÃ­lusÃº tere."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Hat den einzigen Triumphbogen Ungarns.", "Sitz eines katholischen Bistums."], "hu": ["Itt talÃ¡lhatÃ³ MagyarorszÃ¡g egyetlen diadalÃ­ve.", "Katolikus pÃ¼spÃ¶ki szÃ©khely."], "ro": ["Are singurul arc de triumf din Ungaria.", "Sediul unei episcopii catolice."], "en": ["Has the only triumphal arch in Hungary.", "Seat of a Catholic bishopric."]},
  },
  {
    id: "visegrad",
    type: "landmark",
    parent: "HU-PE",
    coords: [18.9667, 47.7833],
    name: {"de": "Plintenburg", "hu": "VisegrÃ¡d", "ro": "VisegrÃ¡d", "en": "VisegrÃ¡d"},
    image: "/geo-images/hungary/visegrad.webp",
    description: {"de": "Kleine Stadt am Donauknie, berÃ¼hmt fÃ¼r ihre mittelalterliche Zitadelle.", "hu": "KisvÃ¡ros a Dunakanyarban, hÃ­res kÃ¶zÃ©pkori fellegvÃ¡rÃ¡rÃ³l.", "ro": "Mic oraÈ™ la Cotul DunÄƒrii, faimos pentru cetatea sa medievalÄƒ.", "en": "Small town at the Danube Bend, famous for its medieval citadel."},
    descriptionAdvanced: {
      "de": "VisegrÃ¡d, im Herzen des spektakulÃ¤ren Donauknies gelegen, war im Mittelalter eine der glanzvollsten Residenzen der ungarischen KÃ¶nige. Hoch auf einem steilen Fels thront die Wolkenburg (FellegvÃ¡r), von der aus man einen der atemberaubendsten Panoramablicke Ã¼ber die Donauschleife genieÃŸen kann. Im Tal befinden sich die Ãœberreste des Renaissance-Palastes von KÃ¶nig Matthias Corvinus, der einst als ",
      "hu": "VisegrÃ¡d a Dunakanyar legszebb pontjÃ¡n fekvÅ‘ tÃ¶rtÃ©nelmi vÃ¡ros, amely a kÃ¶zÃ©pkorban a magyar kirÃ¡lyok szÃ©khelye Ã©s a tÃ©rsÃ©g egyik legfontosabb politikai kÃ¶zpontja volt. A vÃ¡ros fÃ¶lÃ© magasodik a FellegvÃ¡r, amelynek falai kÃ¶zÃ¶tt egykor a magyar koronÃ¡zÃ¡si jelvÃ©nyeket is Å‘riztÃ©k, s ahonnan lenyÅ±gÃ¶zÅ‘ panorÃ¡ma nyÃ­lik a folyÃ³ Ã©les kanyarulatÃ¡ra. A Duna partjÃ¡n talÃ¡lhatÃ³ a KirÃ¡lyi Palota, amelyet KÃ¡roly RÃ³bert alapÃ­tott, Ã©s MÃ¡tyÃ¡s kirÃ¡ly idejÃ©n Ã©rte el fÃ©nykorÃ¡t mint pazar reneszÃ¡nsz rezidencia. VisegrÃ¡d ma is a magyar tÃ¶rtÃ©nelem Ã©lÅ‘ emlÃ©kmÅ±ve, ahol minden Ã©vben megrendezik a NemzetkÃ¶zi PalotajÃ¡tÃ©kokat, felidÃ©zve a lovagi tornÃ¡k Ã©s kirÃ¡lyi talÃ¡lkozÃ³k hangulatÃ¡t. A kÃ¶rnyezÅ‘ erdÅ‘k Ã©s kirÃ¡ndulÃ³helyek a termÃ©szetjÃ¡rÃ³k kedvelt cÃ©lpontjai.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["VisegrÃ¡d war im 14. Jahrhundert kurzzeitig die offizielle Hauptstadt Ungarns.", "Der Renaissance-Palast von KÃ¶nig Matthias war berÃ¼hmt fÃ¼r seine prachtvollen Marmorbrunnen.", "Die Wolkenburg (FellegvÃ¡r) bewahrte jahrhundertelang die ungarischen Kroninsignien auf.", "Das Donauknie bei VisegrÃ¡d gilt als eine der schÃ¶nsten Flusslandschaften Europas."],
      "hu": [
        "1335-ben itt tartottÃ¡k a hÃ­res visegrÃ¡di kirÃ¡lytalÃ¡lkozÃ³t a magyar, a cseh Ã©s a lengyel uralkodÃ³ rÃ©szvÃ©telÃ©vel.",
        "A Salamon-torony a kÃ¶zÃ©pkori magyar vÃ¡rÃ©pÃ­tÃ©szet egyik legÃ©pebben maradt lakÃ³tornya.",
        "A VisegrÃ¡di FellegvÃ¡r a 13. szÃ¡zadban Ã©pÃ¼lt IV. BÃ©la kirÃ¡ly parancsÃ¡ra.",
        "MÃ¡tyÃ¡s kirÃ¡ly palotÃ¡jÃ¡t kortÃ¡rsai a 'fÃ¶ldi paradicsomkÃ©nt' emlegettÃ©k reneszÃ¡nsz szÃ©psÃ©ge miatt.",
        "A vÃ¡ros felett talÃ¡lhatÃ³ NagyvillÃ¡m-hegyen bobpÃ¡lya Ã©s sÃ­pÃ¡lya is vÃ¡rja az aktÃ­v turistÃ¡kat."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Ehemalige kÃ¶nigliche Residenz.", "Namensgeber der VisegrÃ¡d-Gruppe (V4)."], "hu": ["Egykori kirÃ¡lyi szÃ©khely.", "A VisegrÃ¡di EgyÃ¼ttmÅ±kÃ¶dÃ©s (V4) nÃ©vadÃ³ja."], "ro": ["FostÄƒ reÈ™edinÈ›Äƒ regalÄƒ.", "A dat numele Grupului de la VisegrÃ¡d (V4)."], "en": ["Former royal residence.", "Namesake of the VisegrÃ¡d Group (V4)."]},
  },
  {
    id: "kaposvar",
    type: "city",
    parent: "HU-SO",
    coords: [17.7897, 46.3592],
    name: {"de": "Kopisch", "hu": "KaposvÃ¡r", "ro": "KaposvÃ¡r", "en": "KaposvÃ¡r"},
    image: "/geo-images/hungary/kaposvar.webp",
    description: {
      "de": "KaposvÃ¡r, die 'Stadt der Blumen und Maler', liegt im SÃ¼dwesten Ungarns in der hÃ¼geligen Region Somogy. Die Stadt ist bekannt fÃ¼r ihre gepflegten Parks, die charmante klassizistische Architektur und ihr reiches kulturelles Erbe. KaposvÃ¡r ist der Geburtsort des berÃ¼hmten Malers JÃ³zsef Rippl-RÃ³nai, dessen Erbe im Rippl-RÃ³nai-Museum und in seiner ehemaligen Villa gepflegt wird. Mit ihrer UniversitÃ¤t und dem renommierten Csiky-Gergely-Theater ist die Stadt ein wichtiges geistiges Zentrum der Region.",
      "hu": "KaposvÃ¡r, a 'virÃ¡gok Ã©s festÅ‘k vÃ¡rosa', DÃ©lnyugat-MagyarorszÃ¡gon, a Somogyi-dombsÃ¡g szÃ­vÃ©ben fekszik. A vÃ¡ros hÃ­res gondozott parkjairÃ³l, hangulatos klasszicista Ã©pÃ­tÃ©szetÃ©rÅ‘l Ã©s gazdag kulturÃ¡lis Ã¶rÃ¶ksÃ©gÃ©rÅ‘l. KaposvÃ¡r Rippl-RÃ³nai JÃ³zsef festÅ‘mÅ±vÃ©sz szÃ¼lÅ‘vÃ¡rosa, akinek emlÃ©kÃ©t a Rippl-RÃ³nai MÃºzeum Ã©s egykori villÃ¡ja Å‘rzi. EgyetemÃ©vel Ã©s a neves Csiky Gergely SzÃ­nhÃ¡zzal a vÃ¡ros a rÃ©giÃ³ fontos szellemi kÃ¶zpontja.",
      "ro": "KaposvÃ¡r, 'oraÈ™ul florilor È™i al pictorilor', este situat Ã®n sud-vestul Ungariei, Ã®n regiunea deluroasÄƒ Somogy. OraÈ™ul este cunoscut pentru parcurile sale bine Ã®ntreÈ›inute, arhitectura clasicistÄƒ fermecÄƒtoare È™i moÈ™tenirea culturalÄƒ bogatÄƒ. KaposvÃ¡r este locul de naÈ™tere al faimosului pictor JÃ³zsef Rippl-RÃ³nai, a cÄƒrui moÈ™tenire este pÄƒstratÄƒ Ã®n Muzeul Rippl-RÃ³nai È™i Ã®n fosta sa vilÄƒ. Cu universitatea sa È™i renumitul Teatru Csiky Gergely, oraÈ™ul este un centru intelectual important al regiunii.",
      "en": "KaposvÃ¡r, the 'City of Flowers and Painters,' is located in southwestern Hungary in the hilly Somogy region. The city is known for its well-kept parks, charming Neoclassical architecture, and rich cultural heritage. KaposvÃ¡r is the birthplace of the famous painter JÃ³zsef Rippl-RÃ³nai, whose legacy is preserved in the Rippl-RÃ³nai Museum and his former villa. With its university and the renowned Csiky Gergely Theatre, the city serves as a major intellectual hub for the region."
    },
    descriptionAdvanced: {
      "de": "KaposvÃ¡r, die ",
      "hu": "KaposvÃ¡r, Somogy vÃ¡rmegye szÃ©khelye, a 'virÃ¡gok vÃ¡rosa', amely nevÃ©t gondozott parkjairÃ³l, szÃ­nes kÃ¶ztereirÅ‘l Ã©s szecessziÃ³s Ã©pÃ­tÃ©szetÃ©rÅ‘l kapta. A vÃ¡ros kulturÃ¡lis Ã©lete kiemelkedÅ‘, a Csiky Gergely SzÃ­nhÃ¡z az orszÃ¡g egyik legnevesebb teÃ¡truma, mÃ­g a Rippl-RÃ³nai MÃºzeum a hÃ­res posztimpresszionista festÅ‘mÅ±vÃ©sz hagyatÃ©kÃ¡t Å‘rzi. KaposvÃ¡r belvÃ¡rosa sÃ©tÃ¡lÃ³utcÃ¡ival Ã©s felÃºjÃ­tott palotÃ¡ival mediterrÃ¡n hangulatot Ã¡raszt, ahol a mÅ±vÃ©szet Ã©s a mindennapi Ã©let kÃ©z a kÃ©zben jÃ¡r. A vÃ¡rost kÃ¶rÃ¼lÃ¶leli a Zselic dombvidÃ©ke, amely nemcsak termÃ©szeti szÃ©psÃ©geirÅ‘l, hanem a 'CsillagparkjÃ¡rÃ³l' is hÃ­res, hiszen itt az orszÃ¡g egyik legalacsonyabb fÃ©nyszennyezÃ©sÅ± egÃ©t figyelhetjÃ¼k meg. KaposvÃ¡r a modern dunÃ¡ntÃºli vÃ¡ros Ã©s a hagyomÃ¡nyÅ‘rzÅ‘ vidÃ©ki kÃ¶zpont ideÃ¡lis Ã¶tvÃ¶zete.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["KaposvÃ¡r wird aufgrund ihrer vielen Parks und GÃ¤rten oft als 'Stadt der Blumen' bezeichnet.", "Der Maler JÃ³zsef Rippl-RÃ³nai, ein Meister des ungarischen Jugendstils, lebte und wirkte hier.", "Das Csiky-Gergely-Theater ist ein architektonisches Juwel der Stadt.", "Die Region Zselic bei KaposvÃ¡r ist einer der ersten Sternenparks in Europa."],
      "hu": [
        "KaposvÃ¡rt hÃ©t dombra Ã©pÃ­tettÃ©k, hasonlÃ³an az Ã¶rÃ¶k vÃ¡roshoz, RÃ³mÃ¡hoz.",
        "Itt talÃ¡lhatÃ³ a Rippl-RÃ³nai EmlÃ©khÃ¡z Ã©s LÃ¡togatÃ³kÃ¶zpont, a mÅ±vÃ©sz egykori villÃ¡jÃ¡ban.",
        "A Csiky Gergely SzÃ­nhÃ¡z Ã©pÃ¼lete a magyar szecessziÃ³s Ã©pÃ­tÃ©szet egyik remekmÅ±ve.",
        "A kÃ¶zeli Deseda-tÃ³ MagyarorszÃ¡g leghosszabb mestersÃ©ges tava, kedvelt Ã¼dÃ¼lÅ‘hely.",
        "A Zselici CsillagosÃ©gbolt-park az orszÃ¡g elsÅ‘ ilyen jellegÅ± nemzetkÃ¶zi minÅ‘sÃ­tÃ©sÅ± terÃ¼lete."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "Sitz des Komitats Somogy.",
        "Bekannt fÃ¼r das Csiky-Gergely-Theater, eines der schÃ¶nsten Ungarns.",
        "Heimat des Rippl-RÃ³nai-Museums mit einer bedeutenden Kunstsammlung.",
        "Die Stadt hat Ã¼ber 40 Brunnen und zahlreiche blumengeschmÃ¼ckte PlÃ¤tze.",
        "Wichtiger Bildungsstandort mit der UniversitÃ¤t KaposvÃ¡r.",
        "Das Thermalbad VirÃ¡gfÃ¼rdÅ‘ ist eines der grÃ¶ÃŸten in der Region.",
        "Veranstaltet jÃ¤hrlich das Rippl-RÃ³nai-Festival der Malerei.",
        "Liegt in der NÃ¤he des Zselic-Landschaftsschutzgebiets (Sternenpark)."
      ],
      "hu": [
        "Somogy vÃ¡rmegye szÃ©khelye.",
        "HÃ­res a Csiky Gergely SzÃ­nhÃ¡zrÃ³l, amely az orszÃ¡g egyik legszebb szÃ­nhÃ¡zÃ©pÃ¼lete.",
        "Itt talÃ¡lhatÃ³ a Rippl-RÃ³nai MÃºzeum jelentÅ‘s mÅ±vÃ©szeti gyÅ±jtemÃ©nye.",
        "A vÃ¡rosban tÃ¶bb mint 40 szÃ¶kÅ‘kÃºt Ã©s szÃ¡mos virÃ¡gos tÃ©r talÃ¡lhatÃ³.",
        "Fontos oktatÃ¡si kÃ¶zpont a KaposvÃ¡ri Egyetemnek kÃ¶szÃ¶nhetÅ‘en.",
        "A VirÃ¡gfÃ¼rdÅ‘ a rÃ©giÃ³ egyik legnagyobb termÃ¡l- Ã©s Ã©lmÃ©nyfÃ¼rdÅ‘je.",
        "Minden Ã©vben megrendezik a Rippl-RÃ³nai FesztivÃ¡lt.",
        "A kÃ¶zelben talÃ¡lhatÃ³ a Zselici TÃ¡jvÃ©delmi KÃ¶rzet (CsillagosÃ©gbolt-park)."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului Somogy.",
        "Faimos pentru Teatrul Csiky Gergely, unul dintre cele mai frumoase din Ungaria.",
        "GÄƒzduieÈ™te Muzeul Rippl-RÃ³nai cu o colecÈ›ie de artÄƒ importantÄƒ.",
        "OraÈ™ul are peste 40 de fÃ¢ntÃ¢ni arteziene È™i numeroase pieÈ›e cu flori.",
        "Centru educaÈ›ional important cu Universitatea din KaposvÃ¡r.",
        "Baia termalÄƒ VirÃ¡gfÃ¼rdÅ‘ este una dintre cele mai mari din regiune.",
        "GÄƒzduieÈ™te anual Festivalul Rippl-RÃ³nai dedicat picturii.",
        "Situat Ã®n apropierea RezervaÈ›iei Peisagistice Zselic (Parc de cer stelat)."
      ],
      "en": [
        "Seat of Somogy County.",
        "Famous for the Csiky Gergely Theatre, one of Hungary's most beautiful theaters.",
        "Home to the Rippl-RÃ³nai Museum with a significant art collection.",
        "The city features over 40 fountains and numerous flower-filled squares.",
        "A major educational hub with the University of KaposvÃ¡r.",
        "The VirÃ¡gfÃ¼rdÅ‘ thermal bath is one of the largest in the region.",
        "Hosts the annual Rippl-RÃ³nai Festival of Painting.",
        "Located near the Zselic Landscape Protection Area (Starry Sky Park)."
      ]
    },
  },
  {
    id: "siofok",
    type: "city",
    parent: "HU-SO",
    coords: [18.05, 46.9],
    name: {"de": "SiÃ³fok", "hu": "SiÃ³fok", "ro": "SiÃ³fok", "en": "SiÃ³fok"},
    image: "/geo-images/hungary/siofok.webp",
    description: {"de": "Die 'Hauptstadt des Plattensees', bekannt fÃ¼r ihr reges Nachtleben und StrÃ¤nde.", "hu": "A 'Balaton fÅ‘vÃ¡rosa', pezsgÅ‘ Ã©jszakai Ã©letÃ©rÅ‘l Ã©s strandjairÃ³l ismert.", "ro": "'Capitala Lacului Balaton', cunoscutÄƒ pentru viaÈ›a de noapte vibrantÄƒ È™i plaje.", "en": "The 'Capital of Lake Balaton', known for its vibrant nightlife and beaches."},
    descriptionAdvanced: {
      "de": "SiÃ³fok, am Ostufer des Plattensees gelegen, ist als die ",
      "hu": "SiÃ³fok a Balaton dÃ©li partjÃ¡nak legnagyobb vÃ¡rosa, amelyet mÃ©ltÃ¡n neveznek a 'magyar tenger nyÃ¡ri fÅ‘vÃ¡rosÃ¡nak'. A vÃ¡ros a Balaton legfontosabb turisztikai kÃ¶zpontja, ahol a sekÃ©ly, homokos part Ã©s a pezsgÅ‘ Ã©jszakai Ã©let (kÃ¼lÃ¶nÃ¶sen a PetÅ‘fi sÃ©tÃ¡nyon) vonzza a lÃ¡togatÃ³k tÃ¶megeit. SiÃ³fok azonban nem csak a strandolÃ¡srÃ³l szÃ³l: a vÃ¡ros jelkÃ©pe a felÃºjÃ­tott VÃ­ztorony, amelynek tetejÃ©rÅ‘l lenyÅ±gÃ¶zÅ‘ panorÃ¡ma nyÃ­lik a tÃ³. A kikÃ¶tÅ‘ a Balaton legforgalmasabb hajÃ³zÃ¡si csomÃ³pontja, ahonnan szÃ¡mos menetrendszerinti Ã©s sÃ©tahajÃ³ indul. KulturÃ¡lis Ã©rtÃ©kei kÃ¶zÃ¶tt KÃ¡lmÃ¡n Imre, a vilÃ¡ghÃ­rÅ± operettszerzÅ‘ szÃ¼lÅ‘hÃ¡za Ã©s mÃºzeuma emelkedik ki, emlÃ©keztetve a vÃ¡ros elegÃ¡ns, mÃºlt szÃ¡zadi hangulatÃ¡ra.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["SiÃ³fok ist die grÃ¶ÃŸte Stadt am Plattensee und ein Zentrum des Sommertourismus.", "Der Komponist Emmerich KÃ¡lmÃ¡n, SchÃ¶pfer der 'CsÃ¡rdÃ¡sfÃ¼rstin', wurde hier geboren.", "Der 45 Meter hohe Wasserturm im Stadtzentrum ist das Wahrzeichen von SiÃ³fok.", "Der Hafen von SiÃ³fok ist der Heimathafen der grÃ¶ÃŸten Flotte am Balaton."],
      "hu": [
        "SiÃ³fok a vilÃ¡ghÃ­rÅ± operettszerzÅ‘, KÃ¡lmÃ¡n Imre ('A CsÃ¡rdÃ¡skirÃ¡lynÅ‘' szerzÅ‘je) szÃ¼lÅ‘vÃ¡rosa.",
        "A siÃ³foki kikÃ¶tÅ‘bÅ‘l indul a legrÃ©gebbi balatoni hajÃ³jÃ¡rat a tÃºlpartra, BalatonfÃ¼redre.",
        "A vÃ¡ros jelkÃ©pe a 45 mÃ©ter magas VÃ­ztorony, amely ma forgÃ³ kÃ¡vÃ©zÃ³kÃ©nt Ã©s kilÃ¡tÃ³kÃ©nt mÅ±kÃ¶dik.",
        "SiÃ³foknÃ¡l talÃ¡lhatÃ³ a SiÃ³-csatorna zsiliprendszere, amely a Balaton vÃ­zszintjÃ©t szabÃ¡lyozza.",
        "A vÃ¡ros strandjai Ã¶sszesen tÃ¶bb mint 15 kilomÃ©ter hosszan nyÃºlnak el a tÃ³ partjÃ¡n."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Geburtsort des Komponisten Emmerich KÃ¡lmÃ¡n.", "Wahrzeichen ist der Wasserturm im Zentrum."], "hu": ["KÃ¡lmÃ¡n Imre zeneszerzÅ‘ szÃ¼lÅ‘vÃ¡rosa.", "JelkÃ©pe a kÃ¶zpontban Ã¡llÃ³ VÃ­ztorony."], "ro": ["Locul de naÈ™tere al compozitorului Emmerich KÃ¡lmÃ¡n.", "Simbolul sÄƒu este Turnul de ApÄƒ din centru."], "en": ["Birthplace of composer Emmerich KÃ¡lmÃ¡n.", "Its landmark is the Water Tower in the center."]},
  },
  {
    id: "balatonfoldvar",
    type: "city",
    parent: "HU-SO",
    coords: [17.8833, 46.85],
    name: {"de": "BalatonfÃ¶ldvÃ¡r", "hu": "BalatonfÃ¶ldvÃ¡r", "ro": "BalatonfÃ¶ldvÃ¡r", "en": "BalatonfÃ¶ldvÃ¡r"},
    image: "/geo-images/hungary/balatonfoldvar.webp",
    description: {"de": "Beliebter Ferienort am SÃ¼dufer des Plattensees.", "hu": "NÃ©pszerÅ± Ã¼dÃ¼lÅ‘hely a Balaton dÃ©li partjÃ¡n.", "ro": "StaÈ›iune popularÄƒ pe malul sudic al Lacului Balaton.", "en": "Popular resort town on the southern shore of Lake Balaton."},
    descriptionAdvanced: {
      "de": "BalatonfÃ¶ldvÃ¡r gilt als einer der elegantesten und am besten geplanten Ferienorte am SÃ¼dufer des Plattensees. Die Stadt zeichnet sich durch ihre groÃŸzÃ¼gigen Parkanlagen, die breiten Promenaden und den prÃ¤chtigen Yachthafen aus, der zu den schÃ¶nsten am See gehÃ¶rt. Ein besonderes Merkmal sind die vielen historischen Villen aus der Zeit der Jahrhundertwende, die der Stadt einen nostalgischen Charme verleihen. Vom Hochufer aus bietet sich ein atemberaubender Panoramablick Ã¼ber den Balaton bis hin zur Halbinsel Tihany am gegenÃ¼berliegenden Ufer. BalatonfÃ¶ldvÃ¡r ist ein Ort der Ruhe und Erholung, der besonders bei Seglern und Familien beliebt ist, die eine kultivierte UrlaubsatmosphÃ¤re schÃ¤tzen.",
      "hu": "BalatonfÃ¶ldvÃ¡r a dÃ©li part egyik legelegÃ¡nsabb Ã¼dÃ¼lÅ‘helye, amely parkosÃ­tott kÃ¶rnyezetÃ©vel, hatalmas platÃ¡nfÃ¡ival Ã©s patinÃ¡s villÃ¡ival a bÃ©kebeli Balaton hangulatÃ¡t idÃ©zi. A telepÃ¼lÃ©st a 19. szÃ¡zad vÃ©gÃ©n a SzÃ©chÃ©nyi csalÃ¡d alapÃ­totta mint tervezett fÃ¼rdÅ‘vÃ¡rost, s azÃ³ta is megÅ‘rizte rendezett, nyugodt arculatÃ¡t. A vÃ¡ros legszebb rÃ©sze a tÃ¶bb mint egy kilomÃ©ter hosszÃº, kettÅ‘s platÃ¡nsorral szegÃ©lyezett Kvassay sÃ©tÃ¡ny, amely kÃ¶zvetlenÃ¼l a vÃ­zparton hÃºzÃ³dik. BalatonfÃ¶ldvÃ¡r bÃ¼szkÃ©lkedhet a Balaton egyik legmodernebb vitorlÃ¡skikÃ¶tÅ‘jÃ©vel, valamint a magasparton talÃ¡lhatÃ³ HajÃ³zÃ¡stÃ¶rtÃ©neti LÃ¡togatÃ³kÃ¶zponttal, ahonnan az egyik legszebb kilÃ¡tÃ¡s nyÃ­lik a Tihanyi-fÃ©lszigetre Ã©s a tÃ³ Ã©szaki partjÃ¡nak hegyeire.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["BalatonfÃ¶ldvÃ¡r besitzt einen der grÃ¶ÃŸten und modernsten SegelhÃ¤fen am Plattensee.", "Das Hochufer bietet einen der schÃ¶nsten Aussichtspunkte auf den gesamten See.", "Die Stadt wurde Ende des 19. Jahrhunderts systematisch als Kurort geplant.", "Der weitlÃ¤ufige Park am Hafen beherbergt seltene und geschÃ¼tzte Baumarten."],
      "hu": [
        "A vÃ¡rost a 19. szÃ¡zad vÃ©gÃ©n grÃ³f SzÃ©chÃ©nyi Imre Ã©s Viktor alapÃ­totta Ã©s tervezte meg.",
        "A HajÃ³zÃ¡stÃ¶rtÃ©neti LÃ¡togatÃ³kÃ¶zpont Ã©pÃ¼lete egy hajÃ³t formÃ¡z, tetejÃ©n 25 mÃ©ter magas kilÃ¡tÃ³val.",
        "A telepÃ¼lÃ©s nevÃ©t a terÃ¼letÃ©n talÃ¡lhatÃ³ vaskori kelta fÃ¶ldvÃ¡rrÃ³l kapta.",
        "A Kvassay sÃ©tÃ¡ny platÃ¡nfÃ¡i tÃ¶bb mint 100 Ã©vesek, Ã©s helyi vÃ©dettsÃ©g alatt Ã¡llnak.",
        "BalatonfÃ¶ldvÃ¡r az orszÃ¡g egyik legvirÃ¡gosabb vÃ¡rosa, tÃ¶bbszÃ¶r nyert el rangos kertÃ©szeti dÃ­jakat."
      ],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r seinen groÃŸen Yachthafen.", "Hat eine schÃ¶ne platanengesÃ¤umte Promenade."], "hu": ["Nagy vitorlÃ¡skikÃ¶tÅ‘jÃ©rÅ‘l ismert.", "GyÃ¶nyÃ¶rÅ± platÃ¡nsoros sÃ©tÃ¡nya van."], "ro": ["Cunoscut pentru portul sÄƒu mare de iahturi.", "Are o frumoasÄƒ promenadÄƒ mÄƒrginitÄƒ de platani."], "en": ["Known for its large marina.", "Has a beautiful plane tree-lined promenade."]},
  },
  {
    id: "nyiregyhaza",
    type: "city",
    parent: "HU-SZ",
    coords: [21.7167, 47.95],
    name: {"de": "NyÃ­regyhÃ¡za", "hu": "NyÃ­regyhÃ¡za", "ro": "NyÃ­regyhÃ¡za", "en": "NyÃ­regyhÃ¡za"},
    image: "/geo-images/hungary/nyiregyhaza.webp",
    description: {
      "de": "NyÃ­regyhÃ¡za, im Nordosten Ungarns gelegen, ist eine dynamisch wachsende Stadt und das Zentrum der Region NyÃ­rsÃ©g. Die Stadt ist vor allem fÃ¼r den Tierpark SÃ³stÃ³ bekannt, der als einer der schÃ¶nsten und modernsten Zoos in Europa gilt. Der Stadtteil SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘ bietet zudem ein beliebtes Thermalbad und ein Freilichtmuseum, das die traditionelle lÃ¤ndliche Architektur der Region zeigt. NyÃ­regyhÃ¡za ist ein wichtiger Bildungsstandort und ein Tor zu den kulturellen SchÃ¤tzen des Nordostens.",
      "hu": "NyÃ­regyhÃ¡za, MagyarorszÃ¡g Ã©szakkeleti rÃ©szÃ©n fekvÅ‘ dinamikusan fejlÅ‘dÅ‘ vÃ¡ros, a NyÃ­rsÃ©g kÃ¶zpontja. A vÃ¡ros leginkÃ¡bb a SÃ³stÃ³ Zoo-rÃ³l ismert, amelyet EurÃ³pa egyik legszebb Ã©s legmodernebb Ã¡llatkertjekÃ©nt tartanak szÃ¡mon. SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘ vÃ¡rosrÃ©sze nÃ©pszerÅ± termÃ¡lfÃ¼rdÅ‘t Ã©s egy skanzent is kÃ­nÃ¡l, amely a rÃ©giÃ³ hagyomÃ¡nyos nÃ©pi Ã©pÃ­tÃ©szetÃ©t mutatja be. NyÃ­regyhÃ¡za fontos oktatÃ¡si kÃ¶zpont Ã©s kapu az Ã©szakkeleti orszÃ¡grÃ©sz kulturÃ¡lis kincseihez.",
      "ro": "NyÃ­regyhÃ¡za, situat Ã®n nord-estul Ungariei, este un oraÈ™ Ã®n dezvoltare dinamicÄƒ È™i centrul regiunii NyÃ­rsÃ©g. OraÈ™ul este cunoscut Ã®n special pentru GrÄƒdina ZoologicÄƒ SÃ³stÃ³, consideratÄƒ una dintre cele mai frumoase È™i moderne din Europa. Cartierul SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘ oferÄƒ, de asemenea, o baie termalÄƒ popularÄƒ È™i un muzeu Ã®n aer liber care prezintÄƒ arhitectura ruralÄƒ tradiÈ›ionalÄƒ a regiunii. NyÃ­regyhÃ¡za este un centru educaÈ›ional important È™i o poartÄƒ cÄƒtre comorile culturale din nord-est.",
      "en": "NyÃ­regyhÃ¡za, located in northeastern Hungary, is a dynamically growing city and the center of the NyÃ­rsÃ©g region. The city is best known for the SÃ³stÃ³ Zoo, widely regarded as one of the most beautiful and modern zoos in Europe. The SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘ district also features a popular thermal bath and an open-air museum showcasing the region's traditional rural architecture. NyÃ­regyhÃ¡za is a significant educational hub and a gateway to the cultural treasures of the northeast."
    },
    descriptionAdvanced: {
      "de": "NyÃ­regyhÃ¡za, im Nordosten Ungarns gelegen, ist eine dynamische Stadt, die vor allem fÃ¼r ihren auÃŸergewÃ¶hnlichen Zoo und das Heilbad SÃ³stÃ³ bekannt ist. Der Zoo von NyÃ­regyhÃ¡za, eingebettet in einen Eichenwald, gilt als einer der besten Europas und bietet Tieren in weitlÃ¤ufigen Gehegen einen natÃ¼rlichen Lebensraum. SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘, das ",
      "hu": "NyÃ­regyhÃ¡za Szabolcs-SzatmÃ¡r-Bereg vÃ¡rmegye szÃ©khelye, az orszÃ¡g hetedik legnagyobb vÃ¡rosa, amely dinamikus fejlÅ‘dÃ©sÃ©vel Ã©s csalÃ¡dbarÃ¡t turisztikai kÃ­nÃ¡latÃ¡val emelkedik ki. A vÃ¡ros legfontosabb vonzereje a SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘ negyed, ahol sÃ³s vizÅ± tÃ³, modern Ã©lmÃ©nyfÃ¼rdÅ‘ Ã©s egy kÃ¼lÃ¶nleges falumÃºzeum vÃ¡rja a lÃ¡togatÃ³kat. Itt talÃ¡lhatÃ³ a NyÃ­regyhÃ¡zi Ãllatpark is, amely tÃ¶bb alkalomal elnyerte EurÃ³pa legjobb Ã¡llatkertje cÃ­met, Ã©s kÃ¼lÃ¶nleges termÃ©szetkÃ¶zeli kifutÃ³ival vilÃ¡gszÃ­nvonalÃº Ã©lmÃ©nyt nyÃºjt. NyÃ­regyhÃ¡za belvÃ¡rosa parkjaival, templomaival Ã©s pezsgÅ‘ tereivel barÃ¡tsÃ¡gos alfÃ¶ldi hangulatot Ã¡raszt. GazdasÃ¡gÃ¡ban az Ã©lelmiszeripar mellett a modern technolÃ³giai ipar is egyre nagyobb szerepet jÃ¡tszik, mikÃ¶zben a vÃ¡ros megÅ‘rizte 'zÃ¶ld' jellegÃ©t.",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Zoo von NyÃ­regyhÃ¡za (SÃ³stÃ³ Zoo) beherbergt Ã¼ber 5000 Tiere aus aller Welt.", "SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘ ist ein staatlich anerkannter Luft- und Badekurort am Stadtrand.", "Die Stadt ist ein Zentrum der ungarischen Obstproduktion, besonders fÃ¼r Ã„pfel und Pflaumen.", "Das Freilichtmuseum SÃ³stÃ³ zeigt die traditionelle Dorfarchitektur des Nordostens."],
      "hu": [
        "A NyÃ­regyhÃ¡zi Ãllatpark (SÃ³stÃ³ Zoo) 30 hektÃ¡ron tÃ¶bb mint 500 faj 5000 egyedÃ©t mutatja be.",
        "A SÃ³stÃ³i MÃºzeumfalu MagyarorszÃ¡g egyik legnagyobb szabadtÃ©ri nÃ©prajzi mÃºzeuma.",
        "A vÃ¡rost 1753-ban szlovÃ¡k telepesek (tirpÃ¡kok) nÃ©pesÃ­tettÃ©k be Ãºjra, akiknek emlÃ©kÃ©t nÃ©prajzi Ã©rtÃ©kek Å‘rzik.",
        "NyÃ­regyhÃ¡za hÃ­res a KrÃºdy Gyula emlÃ©kezetÃ©rÅ‘l, a vÃ¡ros szÃ¼lÃ¶ttÃ©rÅ‘l, aki a magyar irodalom egyik legnagyobb alakja.",
        "A SÃ³stÃ³i-tÃ³ vize Ã©s a kÃ¶rnyezÅ‘ erdÅ‘ gyÃ³gyhely minÅ‘sÃ­tÃ©ssel rendelkezik."
      ],
      "ro": [],
      "en": []
    },
    facts: {
      "de": [
        "SiebtgrÃ¶ÃŸte Stadt Ungarns und Sitz des Komitats Szabolcs-SzatmÃ¡r-Bereg.",
        "Der Tierpark SÃ³stÃ³ beherbergt Ã¼ber 500 Tierarten in naturnahen Gehegen.",
        "SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘ ist ein staatlich anerkannter Kurort.",
        "Das Freilichtmuseum (Skanzen) zeigt das dÃ¶rfliche Leben des 19. Jahrhunderts.",
        "Die Stadt hat eine bedeutende UniversitÃ¤t und mehrere Forschungsinstitute.",
        "Bekannt fÃ¼r den groÃŸen Marktplatz und die evangelische Kirche.",
        "Wichtiger Knotenpunkt fÃ¼r den Handel mit der Ukraine und RumÃ¤nien.",
        "Die Region ist berÃ¼hmt fÃ¼r den Anbau von ÄŒpfeln und Pflaumen."
      ],
      "hu": [
        "MagyarorszÃ¡g hetedik legnagyobb vÃ¡rosa Ã©s Szabolcs-SzatmÃ¡r-Bereg vÃ¡rmegye szÃ©khelye.",
        "A SÃ³stÃ³ Zoo tÃ¶bb mint 500 Ã¡llatfajnak ad otthont termÃ©szetkÃ¶zeli kifutÃ³kban.",
        "SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘ orszÃ¡gosan elismert gyÃ³gyhely.",
        "A MÃºzeumfalu (Skanzen) a 19. szÃ¡zadi falusi Ã©letet mutatja be.",
        "A vÃ¡ros jelentÅ‘s egyetemmel Ã©s tÃ¶bb kutatÃ³intÃ©zettel rendelkezik.",
        "Ismert a tÃ¡gas tereirÅ‘l Ã©s az evangÃ©likus templomÃ¡rÃ³l.",
        "Fontos kereskedelmi csomÃ³pont Ukrajna Ã©s RomÃ¡nia felÃ©.",
        "A rÃ©giÃ³ hÃ­res az alma- Ã©s szilvatermesztÃ©sÃ©rÅ‘l."
      ],
      "ro": [
        "Al È™aptelea oraÈ™ ca mÄƒrime din Ungaria È™i reÈ™edinÈ›a judeÈ›ului Szabolcs-SzatmÃ¡r-Bereg.",
        "GrÄƒdina ZoologicÄƒ SÃ³stÃ³ gÄƒzduieÈ™te peste 500 de specii de animale.",
        "SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘ este o staÈ›iune balnearÄƒ recunoscutÄƒ oficial.",
        "Muzeul Satului (Skanzen) prezintÄƒ viaÈ›a ruralÄƒ din secolul al XIX-lea.",
        "OraÈ™ul are o universitate importantÄƒ È™i mai multe institute de cercetare.",
        "Cunoscut pentru piaÈ›a sa mare È™i biserica evanghelicÄƒ.",
        "Nod comercial important cÄƒtre Ucraina È™i RomÃ¢nia.",
        "Regiunea este faimoasÄƒ pentru cultivarea merelor È™i prunelor."
      ],
      "en": [
        "Seventh largest city in Hungary and the seat of Szabolcs-SzatmÃ¡r-Bereg County.",
        "SÃ³stÃ³ Zoo houses over 500 animal species in naturalistic enclosures.",
        "SÃ³stÃ³gyÃ³gyfÃ¼rdÅ‘ is an officially recognized health resort.",
        "The Open-Air Museum (Skanzen) showcases 19th-century village life.",
        "The city has a significant university and several research institutes.",
        "Known for its large main square and Lutheran church.",
        "An important trade hub towards Ukraine and Romania.",
        "The region is famous for its apple and plum production."
      ]
    },
  },
  {
    id: "mateszalka",
    type: "city",
    parent: "HU-SZ",
    coords: [22.3167, 47.95],
    name: {"de": "MÃ¡tÃ©szalka", "hu": "MÃ¡tÃ©szalka", "ro": "MÃ¡tÃ©szalka", "en": "MÃ¡tÃ©szalka"},
    image: "/geo-images/hungary/mateszalka.webp",
    description: {"de": "Stadt im Osten Ungarns, bekannt als die 'Stadt des Lichts'.", "hu": "Kelet-magyarorszÃ¡gi vÃ¡ros, a 'FÃ©ny vÃ¡rosa' nÃ©ven ismert.", "ro": "OraÈ™ Ã®n estul Ungariei, cunoscut ca 'OraÈ™ul Luminii'.", "en": "City in eastern Hungary, known as the 'City of Light'."},
    
    descriptionAdvanced: {
      "de": "MÃ¡tÃ©szalka, im Nordosten Ungarns an der Grenze zwischen den Regionen NyÃ­rsÃ©g und SzatmÃ¡r gelegen, ist historisch als die ",
      "hu": "MÃ¡tÃ©szalka a NyÃ­rsÃ©g Ã©s a SzatmÃ¡ri-sÃ­ksÃ¡g hatÃ¡rÃ¡n fekvÅ‘ vÃ¡ros, amely leginkÃ¡bb a technolÃ³giai haladÃ¡s ÃºttÃ¶rÅ‘jekÃ©nt vonult be a magyar tÃ¶rtÃ©nelembe. Ez volt az elsÅ‘ magyarorszÃ¡gi telepÃ¼lÃ©s, ahol 1888-ban kigyÃºlt a villanyvilÃ¡gÃ­tÃ¡s, megelÅ‘zve ezzel mÃ©g Budapestet is. A vÃ¡ros kulturÃ¡lis Ã©lete gazdag, a SzatmÃ¡ri MÃºzeum egyedÃ¼lÃ¡llÃ³ kocsi- Ã©s szekÃ©rgyÅ±jtemÃ©nye nemzetkÃ¶zi hÃ­rÅ±. MÃ¡tÃ©szalka bÃ¼szke szÃ¼lÃ¶tteire is, kÃ¶ztÃ¼k Tony Curtis filmszÃ­nÃ©sz csalÃ¡djÃ¡ra, akinek emlÃ©kÃ©t a vÃ¡rosban Ã¡llandÃ³ kiÃ¡llÃ­tÃ¡s Å‘rzi. A telepÃ¼lÃ©s fontos kÃ¶zlekedÃ©si Ã©s gazdasÃ¡gi kÃ¶zpont a tÃ©rsÃ©gben, mikÃ¶zben Å‘rzi a szatmÃ¡ri tÃ¡j jellegzetem hangulatÃ¡t Ã©s vendÃ©gszeretetÃ©t.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Hier wurde 1888 die erste elektrische StraÃŸenbeleuchtung Ungarns installiert.", "Wichtiges Zentrum der Region SzatmÃ¡r."], "hu": ["Itt telepÃ­tettÃ©k MagyarorszÃ¡g elsÅ‘ elektromos kÃ¶zvilÃ¡gÃ­tÃ¡sÃ¡t 1888-ban.", "A SzatmÃ¡r rÃ©giÃ³ fontos kÃ¶zpontja."], "ro": ["Aici a fost instalat primul iluminat stradal electric din Ungaria Ã®n 1888.", "Centru important al regiunii SzatmÃ¡r."], "en": ["The first electric street lighting in Hungary was installed here in 1888.", "Important center of the SzatmÃ¡r region."]},
  
    factsAdvanced: {
      "de": ["In MÃ¡tÃ©szalka erstrahlte 1888 zum ersten Mal in ganz Ungarn elektrisches Licht in den StraÃŸen.",
        "Das SzatmÃ¡r-Museum der Stadt beherbergt eine europaweit einzigartige Sammlung von Ã¼ber 100 historischen Wagen und Schlitten.",
        "Die Stadt feiert jÃ¤hrlich die 'Licht-Tage' (FÃ©nyes Napok) zur Erinnerung an die Pionierrolle bei der Elektrifizierung.",
        "Der Vater des berÃ¼hmten US-Schauspielers Tony Curtis stammte aus MÃ¡tÃ©szalka.",
        "MÃ¡tÃ©szalka ist ein wichtiger Eisenbahnknotenpunkt fÃ¼r den Verkehr in Richtung RumÃ¤nien und die Ukraine."],
      "hu": ["MÃ¡tÃ©szalka a 'fÃ©ny vÃ¡rosa', itt vezettÃ©k be elÅ‘szÃ¶r az utcai villanyvilÃ¡gÃ­tÃ¡st MagyarorszÃ¡gon.",
        "A SzatmÃ¡ri MÃºzeum kerÃ©k- Ã©s szekÃ©rgyÅ±jtemÃ©nye EurÃ³pa-szerte hÃ­res Ã©s egyedÃ¼lÃ¡llÃ³.",
        "A vÃ¡rosban rendezik meg Ã©vente a FÃ©nyes Napok fesztivÃ¡lt a villanyvilÃ¡gÃ­tÃ¡s emlÃ©kÃ©re.",
        "MÃ¡tÃ©szalka kÃ¶zpontjÃ¡ban Ã¡ll a Tony Curtis EmlÃ©kterem, a szÃ­nÃ©sz apjÃ¡nak tiszteletÃ©re.",
        "A telepÃ¼lÃ©s fontos vasÃºti Ã©s kÃ¶zÃºti csomÃ³pont a romÃ¡n Ã©s ukrÃ¡n hatÃ¡r kÃ¶zelÃ©ben."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "vasarosnameny",
    type: "city",
    parent: "HU-SZ",
    coords: [22.3167, 48.1167],
    name: {"de": "VÃ¡sÃ¡rosnamÃ©ny", "hu": "VÃ¡sÃ¡rosnamÃ©ny", "ro": "VÃ¡sÃ¡rosnamÃ©ny", "en": "VÃ¡sÃ¡rosnamÃ©ny"},
    image: "/geo-images/hungary/vasarosnameny.webp",
    description: {"de": "Das 'Herz von Bereg', eine Stadt an der TheiÃŸ.", "hu": "A 'Bereg szÃ­ve', vÃ¡ros a Tisza partjÃ¡n.", "ro": "'Inima Beregului', un oraÈ™ pe rÃ¢ul Tisa.", "en": "The 'Heart of Bereg', a city on the Tisza river."},
    
    descriptionAdvanced: {
      "de": "VÃ¡sÃ¡rosnamÃ©ny, oft als das ",
      "hu": "VÃ¡sÃ¡rosnamÃ©ny a ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Beliebtes Ziel fÃ¼r Wassertourismus.", "Hat ein Thermalbad und einen Aquapark."], "hu": ["A vÃ­ziturisztika nÃ©pszerÅ± cÃ©lpontja.", "TermÃ¡lfÃ¼rdÅ‘vel Ã©s aquaparkkal rendelkezik."], "ro": ["DestinaÈ›ie popularÄƒ pentru turismul nautic.", "Are o baie termalÄƒ È™i un aquaparc."], "en": ["Popular destination for water tourism.", "Has a thermal bath and an aquapark."]},
  
    factsAdvanced: {
      "de": ["Das Bereg-Museum im TomcsÃ¡nyi-Schloss zeigt die weltweit bedeutendste Sammlung von Bereger Volkskunst.",
        "Der Strand von Gergelyiugornya gilt als einer der schÃ¶nsten und beliebtesten FlussstrÃ¤nde an der Oberen TheiÃŸ.",
        "Die Stadt liegt an der Kreuzung dreier bedeutender FlÃ¼sse, was sie zu einem Zentrum fÃ¼r Kanu- und Bootstouren macht.",
        "VÃ¡sÃ¡rosnamÃ©ny beherbergt mit dem Atlantika-Wasserpark eines der grÃ¶ÃŸten ErlebnisbÃ¤der der Region.",
        "Die Region ist berÃ¼hmt fÃ¼r ihre jahrhundertealte Tradition der handgefertigten Bereger Stickerei."],
      "hu": ["VÃ¡sÃ¡rosnamÃ©ny a Beregi-sÃ­ksÃ¡g gazdasÃ¡gi Ã©s kulturÃ¡lis kÃ¶zpontja.",
        "Gergelyiugornya a FelsÅ‘-Tisza vidÃ©kÃ©nek legnÃ©pszerÅ±bb tiszai strandja.",
        "A Beregi MÃºzeum a 18. szÃ¡zadi, barokk stÃ­lusÃº TomcsÃ¡nyi-kastÃ©lyban kapott helyet.",
        "A vÃ¡ros hÃ­res a beregi hÃ­mzÃ©srÅ‘l, amely a tÃ¡jegysÃ©g egyik legfontosabb nÃ©pmÅ±vÃ©szeti kincse.",
        "Itt talÃ¡lhatÃ³ az Atlantika VÃ­zividÃ¡mpark, az orszÃ¡g egyik legnagyobb vidÃ©ki aquaparkja."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szekszard",
    type: "city",
    parent: "HU-TO",
    coords: [18.7, 46.35],
    name: {"de": "Sechshard", "hu": "SzekszÃ¡rd", "ro": "SzekszÃ¡rd", "en": "SzekszÃ¡rd"},
    image: "/geo-images/hungary/szekszard.webp",
    description: {"de": "Die kleinste Komitatshauptstadt Ungarns, berÃ¼hmt fÃ¼r ihre Rotweine.", "hu": "MagyarorszÃ¡g legkisebb megyeszÃ©khelye, vÃ¶rÃ¶sborairÃ³l hÃ­res.", "ro": "Cea mai micÄƒ reÈ™edinÈ›Äƒ de judeÈ› din Ungaria, faimoasÄƒ pentru vinurile sale roÈ™ii.", "en": "The smallest county capital in Hungary, famous for its red wines."},
    
    descriptionAdvanced: {
      "de": "SzekszÃ¡rd, die Hauptstadt des Komitats Tolna, ist die kleinste Komitatshauptstadt Ungarns und besticht durch ihre persÃ¶nliche, fast familiÃ¤re AtmosphÃ¤re. Die Stadt ist weltberÃ¼hmt fÃ¼r ihre exzellenten Rotweine, insbesondere das ",
      "hu": "SzekszÃ¡rd Tolna vÃ¡rmegye szÃ©khelye, a SzekszÃ¡rdi-dombsÃ¡g Ã©s az AlfÃ¶ld talÃ¡lkozÃ¡sÃ¡nÃ¡l fekvÅ‘ barÃ¡tsÃ¡gos vÃ¡ros, amely leginkÃ¡bb vilÃ¡ghÃ­rÅ± vÃ¶rÃ¶sborairÃ³l ismert. Ez MagyarorszÃ¡g legkisebb nÃ©pessÃ©ggel bÃ­rÃ³ vÃ¡rmegyeszÃ©khelye, ami egyedi, kÃ¶zvetlen Ã©s emberlÃ©ptÃ©kÅ± hangulatot kÃ¶lcsÃ¶nÃ¶z a telepÃ¼lÃ©snek. SzekszÃ¡rd kÃ¶zpontja a Garay tÃ©r Ã©s a BÃ©la kirÃ¡ly tÃ©r, ahol az orszÃ¡g egyik legnagyobb egyhajÃ³s temploma Ã©s a neoklasszicista MegyehÃ¡za Ã¡ll. A vÃ¡ros kulturÃ¡lis Ã©letÃ©ben fontos szerepet jÃ¡tszik Liszt Ferenc emlÃ©kezete, aki gyakran vendÃ©geskedett a telepÃ¼lÃ©sen. SzekszÃ¡rd a szÅ‘lÅ‘ Ã©s a bor vÃ¡rosa, ahol a pincesorok Ã©s a kÃ¶rnyÃ©kbeli dÅ±lÅ‘k nemcsak a gazdasÃ¡g, hanem a turizmus alapkÃ¶vei is, kÃ¼lÃ¶nÃ¶sen a SzekszÃ¡rdi SzÃ¼reti Napok idejÃ©n.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Zentrum der Weinregion SzekszÃ¡rd.", "Geburtsort des Dichters MihÃ¡ly Babits."], "hu": ["A SzekszÃ¡rdi borvidÃ©k kÃ¶zpontja.", "Babits MihÃ¡ly kÃ¶ltÅ‘ szÃ¼lÅ‘vÃ¡rosa."], "ro": ["Centrul regiunii viticole SzekszÃ¡rd.", "Locul de naÈ™tere al poetului MihÃ¡ly Babits."], "en": ["Center of the SzekszÃ¡rd wine region.", "Birthplace of poet MihÃ¡ly Babits."]},
  
    factsAdvanced: {
      "de": ["SzekszÃ¡rd ist eine der traditionsreichsten Rotweinregionen Ungarns und Geburtsort des echten BikavÃ©r.",
        "Franz Liszt besuchte die Stadt viermal und widmete ihr seine 'SzekszÃ¤rder Messe'.",
        "KÃ¶nig BÃ©la I. grÃ¼ndete hier 1061 eine Abtei und wurde nach seinem Tod vermutlich auch hier bestattet.",
        "Die Stadt beherbergt die einzige staatlich anerkannte deutsche BÃ¼hne Ungarns, die Deutsche BÃ¼hne Ungarn.",
        "Das jÃ¤hrlich stattfindende Weinlesefest von SzekszÃ¡rd ist eines der grÃ¶ÃŸten und traditionsreichsten Feste seiner Art im Land."],
      "hu": ["SzekszÃ¡rd a SzekszÃ¡rdi BikavÃ©r, a hÃ­res magyar vÃ¶rÃ¶shÃ¡zasÃ­tÃ¡s egyik hazÃ¡ja.",
        "Liszt Ferenc nÃ©gyszer is ellÃ¡togatott a vÃ¡rosba, Ã©s itt komponÃ¡lta SzekszÃ¡rdi misÃ©jÃ©t.",
        "A vÃ¡rost I. BÃ©la kirÃ¡ly alapÃ­totta, aki a hagyomÃ¡ny szerint itt is van eltemetve a bencÃ©s apÃ¡tsÃ¡gban.",
        "A szekszÃ¡rdi MegyehÃ¡za udvarÃ¡n lÃ¡thatÃ³ak a 11. szÃ¡zadi apÃ¡tsÃ¡gi templom romjai.",
        "A vÃ¡ros hatÃ¡rÃ¡ban kezdÅ‘dik a Gemenci erdÅ‘, EurÃ³pa legnagyobb Ã¶sszefÃ¼ggÅ‘ Ã¡rtÃ©ri erdeje."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "paks",
    type: "city",
    parent: "HU-BK",
    coords: [18.8667, 46.6167],
    name: {"de": "Paks", "hu": "Paks", "ro": "Paks", "en": "Paks"},
    image: "/geo-images/hungary/paks.webp",
    description: {"de": "Stadt an der Donau, bekannt fÃ¼r das einzige Kernkraftwerk Ungarns.", "hu": "Duna-parti vÃ¡ros, MagyarorszÃ¡g egyetlen atomerÅ‘mÅ±vÃ©rÅ‘l ismert.", "ro": "OraÈ™ pe DunÄƒre, cunoscut pentru singura centralÄƒ nuclearÄƒ din Ungaria.", "en": "City on the Danube, known for Hungary's only nuclear power plant."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Paks a Duna mentÃ©n, Tolna vÃ¡rmegyÃ©ben fekvÅ‘ vÃ¡ros, amelynek nevÃ©t ma legtÃ¶bben MagyarorszÃ¡g egyetlen atomerÅ‘mÅ±vÃ©vel azonosÃ­tjÃ¡k. Az energetikai kÃ¶zpont meghatÃ¡rozÃ³ szerepet jÃ¡tszik a vÃ¡ros Ã©letÃ©ben, Ã¡m Paks ennÃ©l jÃ³val gazdagabb mÃºltra tekint vissza. Az egykori ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Kernkraftwerk Paks liefert etwa die HÃ¤lfte des ungarischen Stroms.", "Hat eine lange Tradition in der Fischerei."], "hu": ["A Paksi AtomerÅ‘mÅ± adja a magyar Ã¡ramtermelÃ©s mintegy felÃ©t.", "Nagy hagyomÃ¡nya van a halÃ¡szatnak."], "ro": ["Centrala nuclearÄƒ Paks furnizeazÄƒ aproximativ jumÄƒtate din energia electricÄƒ a Ungariei.", "Are o lungÄƒ tradiÈ›ie Ã®n pescuit."], "en": ["The Paks Nuclear Power Plant provides about half of Hungary's electricity.", "Has a long tradition of fishing."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["A Paksi AtomerÅ‘mÅ± MagyarorszÃ¡g villamosenergia-szÃ¼ksÃ©gletÃ©nek mintegy felÃ©t Ã¡llÃ­tja elÅ‘.",
        "A Makovecz Imre Ã¡ltal tervezett SzentlÃ©lek-templom 1991-ben kÃ©szÃ¼lt el, formÃ¡ja kÃ©t hegycsÃºcsot Ã©s a feltÃ¡madÃ¡st jelkÃ©pezi.",
        "A SÃ¡rgÃ¶dÃ¶r tÃ©r 66 aprÃ³, szÃ­nes prÃ©shÃ¡zÃ¡val a vÃ¡ros egyik leglÃ¡tvÃ¡nyosabb mÅ±emlÃ©ke.",
        "Paks hÃ­res a tiszai Ã©s dunai halÃ¡szlÃ© kÃ¶zÃ¶tti 'versengÃ©sben' a sajÃ¡tos dunai receptjÃ©rÅ‘l.",
        "A vÃ¡ros mellett elhaladÃ³ EuroVelo 6 kerÃ©kpÃ¡rÃºt fontos megÃ¡llÃ³helye a Duna mentÃ©n."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "bonyhad",
    type: "city",
    parent: "HU-TO",
    coords: [18.5333, 46.3],
    name: {"de": "Bonnhard", "hu": "BonyhÃ¡d", "ro": "BonyhÃ¡d", "en": "BonyhÃ¡d"},
    image: "/geo-images/hungary/bonyhad.webp",
    description: {"de": "Das Zentrum der Region VÃ¶lgysÃ©g, bekannt fÃ¼r seine Emaillefabrik.", "hu": "A VÃ¶lgysÃ©g kÃ¶zpontja, zomÃ¡ncgyÃ¡rÃ¡rÃ³l ismert.", "ro": "Centrul regiunii VÃ¶lgysÃ©g, cunoscut pentru fabrica sa de email.", "en": "The center of the VÃ¶lgysÃ©g region, known for its enamel factory."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "BonyhÃ¡d a VÃ¶lgysÃ©g kÃ¶zpontja Tolna vÃ¡rmegyÃ©ben, a Mecsek Ã©s a Tolnai-dombsÃ¡g talÃ¡lkozÃ¡sÃ¡nÃ¡l fekvÅ‘ vÃ¡ros, amelyet gyakran a ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Historisch ein Zentrum der Ungarndeutschen.", "Bekannt fÃ¼r die BonyhÃ¡der Schuhe."], "hu": ["TÃ¶rtÃ©nelmileg a magyarorszÃ¡gi nÃ©metek egyik kÃ¶zpontja.", "A bonyhÃ¡di cipÅ‘krÅ‘l is ismert."], "ro": ["Istoric un centru al germanilor din Ungaria.", "Cunoscut pentru pantofii BonyhÃ¡d."], "en": ["Historically a center of the Hungarian Germans.", "Known for BonyhÃ¡d shoes."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["BonyhÃ¡d a bonyhÃ¡di zomÃ¡ncedÃ©ny-gyÃ¡rtÃ¡s bÃ¶lcsÅ‘je, amely termÃ©kek tÃ¶bb mint 100 Ã©ve kÃ©szÃ¼lnek itt.",
        "A vÃ¡rosban talÃ¡lhatÃ³ a VÃ¶lgysÃ©gi MÃºzeum, amely a tÃ©rsÃ©g sokszÃ­nÅ± etnikai mÃºltjÃ¡t mutatja be.",
        "Itt szÃ¼letett Perczel MÃ³r, az 1848â€“49-es szabadsÃ¡gharc egyik legnevesebb tÃ¡bornoka.",
        "A telepÃ¼lÃ©s hÃ­res a tarka magyar szarvasmarha tenyÃ©sztÃ©sÃ©rÅ‘l, amelynek szobra is Ã¡ll a vÃ¡rosban.",
        "BonyhÃ¡d fontos iskolavÃ¡ros, tÃ¶bb nagy mÃºltÃº kÃ¶zÃ©pfokÃº oktatÃ¡si intÃ©zmÃ©nnyel rendelkezik."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szombathely",
    type: "city",
    parent: "HU-VA",
    coords: [16.6217, 47.2306],
    name: {"de": "Steinamanger", "hu": "Szombathely", "ro": "Szombathely", "en": "Szombathely"},
    image: "/geo-images/hungary/szombathely.webp",
    description: {
      "de": "Szombathely, die Ã¤lteste Stadt Ungarns, wurde im Jahr 43 n. Chr. von den RÃ¶mern als Savaria gegrÃ¼ndet. Die Stadt im Westen des Landes blickt auf eine fast 2000-jÃ¤hrige kontinuierliche Geschichte zurÃ¼ck und war einst die Hauptstadt der Provinz Pannonia Superior. Besucher kÃ¶nnen rÃ¶mische Ruinen im Iseum, dem Heiligtum der GÃ¶ttin Isis, und im Ruinengarten besichtigen. Szombathely ist zudem als Geburtsort des Heiligen Martin von Tours bekannt und feiert sein Erbe jÃ¤hrlich mit dem Savaria Historischen Karneval.",
      "hu": "Szombathely, MagyarorszÃ¡g legrÃ©gebbi vÃ¡rosa, amelyet i.sz. 43-ban alapÃ­tottak a rÃ³maiak Savaria nÃ©ven. Az orszÃ¡g nyugati rÃ©szÃ©n fekvÅ‘ vÃ¡ros kÃ¶zel 2000 Ã©ves folyamatos tÃ¶rtÃ©nelemre tekint vissza, Ã©s egykor Pannonia Superior tartomÃ¡ny szÃ©khelye volt. A lÃ¡togatÃ³k megtekinthetik a rÃ³mai romokat az Iseumban, Ãzisz istennÅ‘ szentÃ©lyÃ©ben, valamint a JÃ¡rdÃ¡nyi Paulovics IstvÃ¡n Romkertben. Szombathely Tours-i Szent MÃ¡rton szÃ¼lÅ‘helyekÃ©nt is ismert, Ã©s Ã¶rÃ¶ksÃ©gÃ©t Ã©vente a Savaria TÃ¶rtÃ©nelmi KarnevÃ¡llal Ã¼nnepli.",
      "ro": "Szombathely, cel mai vechi oraÈ™ din Ungaria, a fost fondat de romani Ã®n anul 43 d.Hr. sub numele de Savaria. OraÈ™ul din vestul È›Äƒrii are o istorie continuÄƒ de aproape 2000 de ani È™i a fost odatÄƒ capitala provinciei Pannonia Superior. Vizitatorii pot vedea ruinele romane Ã®n Iseum, sanctuarul zeiÈ›ei Isis, È™i Ã®n GrÄƒdina Ruinelor. Szombathely este, de asemenea, cunoscut ca locul de naÈ™tere al SfÃ¢ntului Martin de Tours È™i Ã®È™i sÄƒrbÄƒtoreÈ™te moÈ™tenirea anual prin Carnavalul Istoric Savaria.",
      "en": "Szombathely, the oldest city in Hungary, was founded by the Romans in 43 AD as Savaria. Located in the western part of the country, the city boasts a continuous history of nearly 2,000 years and was once the capital of the province of Pannonia Superior. Visitors can explore Roman ruins at the Iseum, a sanctuary dedicated to the goddess Isis, and in the Ruin Garden. Szombathely is also famous as the birthplace of Saint Martin of Tours and celebrates its heritage annually with the Savaria Historical Carnival."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Szombathely, Vas vÃ¡rmegye szÃ©khelye, MagyarorszÃ¡g egyik legÅ‘sibb vÃ¡rosa, amelyet a rÃ³maiak alapÃ­tottak Kr. u. 43-ban Savaria nÃ©ven. A vÃ¡ros gazdag antik Ã¶rÃ¶ksÃ©ggel bÃ¼szkÃ©lkedhet, s ezt minden Ã©vben a monumentÃ¡lis Savaria TÃ¶rtÃ©nelmi KarnevÃ¡l keretÃ©ben keltik Ã©letre. Szombathely belvÃ¡rosa barokk pompÃ¡jÃ¡val, tÃ¡gas tereivel Ã©s az impozÃ¡ns SzÃ©kesegyhÃ¡zzal nyÅ±gÃ¶zi le a lÃ¡togatÃ³kat. A kultÃºra Ã©s a tudomÃ¡ny vÃ¡rosa, ahol a Savaria MÃºzeum Ã©s az Iseum (Ãzisz istennÅ‘ szentÃ©lye) vilÃ¡gszÃ­nvonalÃº rÃ©gÃ©szeti leleteket mutat be. A modern Szombathely egyben fontos ipari Ã©s oktatÃ¡si kÃ¶zpont is az Alpokalja lÃ¡bÃ¡nÃ¡l, amely kivÃ¡lÃ³ kiindulÃ³pont a kÃ¶zeli hegysÃ©gek Ã©s gyÃ³gyfÃ¼rdÅ‘k felfedezÃ©sÃ©hez.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "ÄŒlteste Stadt Ungarns mit rÃ¶mischen Wurzeln (Savaria).",
        "Geburtsort des Heiligen Martin von Tours (316 n. Chr.).",
        "Das Iseum ist eines der bedeutendsten Isis-HeiligtÃ¼mer in Europa.",
        "Der Savaria Historische Karneval ist das grÃ¶ÃŸte KostÃ¼mfest der Region.",
        "Sitz des Komitats Vas und ein wichtiges kulturelles Zentrum im Westen.",
        "Die Kathedrale von Szombathely ist eine der grÃ¶ÃŸten Kirchen Ungarns.",
        "Beherbergt ein bedeutendes Freilichtmuseum (Vasi MÃºzeumfalu).",
        "Wichtiger Industriestandort mit Fokus auf Elektronik und Maschinenbau."
      ],
      "hu": [
        "MagyarorszÃ¡g legrÃ©gebbi vÃ¡rosa, rÃ³mai gyÃ¶kerekkel (Savaria).",
        "Tours-i Szent MÃ¡rton szÃ¼lÅ‘helye (i.sz. 316).",
        "Az Iseum EurÃ³pa egyik legjelentÅ‘sebb Ãzisz-szentÃ©lye.",
        "A Savaria TÃ¶rtÃ©nelmi KarnevÃ¡l a rÃ©giÃ³ legnagyobb jelmezes fesztivÃ¡lja.",
        "Vas vÃ¡rmegye szÃ©khelye Ã©s Nyugat-MagyarorszÃ¡g fontos kulturÃ¡lis kÃ¶zpontja.",
        "A szombathelyi szÃ©kesegyhÃ¡z MagyarorszÃ¡g egyik legnagyobb temploma.",
        "Itt talÃ¡lhatÃ³ a Vasi MÃºzeumfalu, egy jelentÅ‘s skanzen.",
        "Fontos ipari kÃ¶zpont, kÃ¼lÃ¶nÃ¶s tekintettel az elektronikÃ¡ra Ã©s a gÃ©pgyÃ¡rtÃ¡sra."
      ],
      "ro": [
        "Cel mai vechi oraÈ™ din Ungaria, cu rÄƒdÄƒcini romane (Savaria).",
        "Locul de naÈ™tere al SfÃ¢ntului Martin de Tours (316 d.Hr.).",
        "Iseum este unul dintre cele mai importante sanctuare ale zeiÈ›ei Isis din Europa.",
        "Carnavalul Istoric Savaria este cel mai mare festival de costume din regiune.",
        "ReÈ™edinÈ›a judeÈ›ului Vas È™i un centru cultural important Ã®n vest.",
        "Catedrala din Szombathely este una dintre cele mai mari biserici din Ungaria.",
        "GÄƒzduieÈ™te un muzeu Ã®n aer liber semnificativ (Vasi MÃºzeumfalu).",
        "Sit industrial important cu accent pe electronicÄƒ È™i construcÈ›ii de maÈ™ini."
      ],
      "en": [
        "Oldest city in Hungary with Roman roots (Savaria).",
        "Birthplace of Saint Martin of Tours (316 AD).",
        "The Iseum is one of the most significant Isis sanctuaries in Europe.",
        "The Savaria Historical Carnival is the region's largest costume festival.",
        "Seat of Vas County and an important cultural center in the west.",
        "Szombathely Cathedral is one of the largest churches in Hungary.",
        "Home to a significant open-air museum (Vasi MÃºzeumfalu).",
        "A major industrial location focusing on electronics and machinery."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": ["Szombathely az orszÃ¡g legrÃ©gebbi vÃ¡rosi rangÃº telepÃ¼lÃ©se, amelyet Claudius csÃ¡szÃ¡r alapÃ­tott.",
        "Szent MÃ¡rton, a tours-i pÃ¼spÃ¶k, a hagyomÃ¡ny szerint SavariÃ¡ban szÃ¼letett a 4. szÃ¡zadban.",
        "Az Iseum Savariense KÃ¶zÃ©p-EurÃ³pa egyik legjelentÅ‘sebb Ãzisz-szentÃ©lyÃ©nek rekonstrukciÃ³ja.",
        "A szombathelyi SzÃ©kesegyhÃ¡z MagyarorszÃ¡g egyik legnagyobb Ã©s legszebb barokk temploma.",
        "A KÃ¡moni ArborÃ©tum 27 hektÃ¡ron tÃ¶bb ezer ritka nÃ¶vÃ©nyfajnak Ã©s fÃ¡s szÃ¡rÃº gyÅ±jtemÃ©nynek ad otthont."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "koszeg",
    type: "city",
    parent: "HU-VA",
    coords: [16.5406, 47.3892],
    name: {"de": "GÃ¼ns", "hu": "KÅ‘szeg", "ro": "KÅ‘szeg", "en": "KÅ‘szeg"},
    image: "/geo-images/hungary/koszeg.webp",
    description: {"de": "Historische Stadt an der Ã¶sterreichischen Grenze, bekannt fÃ¼r ihre Burg.", "hu": "TÃ¶rtÃ©nelmi vÃ¡ros az osztrÃ¡k hatÃ¡ron, vÃ¡rÃ¡rÃ³l ismert.", "ro": "OraÈ™ istoric la graniÈ›a cu Austria, cunoscut pentru castelul sÄƒu.", "en": "Historic city on the Austrian border, known for its castle."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "KÅ‘szeg MagyarorszÃ¡g egyik legszebb Ã©s leghangulatosabb kisvÃ¡rosa az Alpokalja lÃ¡bÃ¡nÃ¡l, amely szinte Ã©rintetlen kÃ¶zÃ©pkori belvÃ¡rosÃ¡val Ã©s tÃ¶rtÃ©nelmi vÃ¡rÃ¡val varÃ¡zsolja el a lÃ¡togatÃ³kat. A vÃ¡ros neve elvÃ¡laszthatatlan az 1532-es tÃ¶rÃ¶k ostromtÃ³l, amikor Jurisics MiklÃ³s maroknyi csapata megÃ¡llÃ­totta SzulejmÃ¡n szultÃ¡n hatalmas seregÃ©t, megmentve ezzel BÃ©cset a tÃ¡madÃ¡stÃ³l. Ennek emlÃ©kÃ©re KÅ‘szegen minden nap 11 Ã³rakor is meghÃºzzÃ¡k a harangokat. A vÃ¡ros hÃ­res a bortermelÃ©sÃ©rÅ‘l (fÅ‘kÃ©nt a KÃ©kfrankosrÃ³l), a ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Die Burg Jurisics hielt 1532 einer osmanischen Belagerung stand.", "Hat einen der schÃ¶nsten mittelalterlichen HauptplÃ¤tze Ungarns."], "hu": ["A Jurisics-vÃ¡r 1532-ben ellenÃ¡llt az oszmÃ¡n ostromnak.", "MagyarorszÃ¡g egyik legszebb kÃ¶zÃ©pkori fÅ‘terÃ©vel rendelkezik."], "ro": ["Castelul Jurisics a rezistat unui asediu otoman Ã®n 1532.", "Are una dintre cele mai frumoase pieÈ›e principale medievale din Ungaria."], "en": ["Jurisics Castle withstood an Ottoman siege in 1532.", "Has one of the most beautiful medieval main squares in Hungary."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["KÅ‘szeg MagyarorszÃ¡g egyetlen vÃ¡rosa, ahol dÃ©lelÅ‘tt 11-kor is harangoznak a tÃ¶rÃ¶k feletti gyÅ‘zelem emlÃ©kÃ©re.",
        "A Jurisics-vÃ¡r ma kulturÃ¡lis kÃ¶zpont Ã©s mÃºzeum, ahol az 1532-es ostrom esemÃ©nyeit ismerhetjÃ¼k meg.",
        "Itt talÃ¡lhatÃ³ az orszÃ¡g egyik legrÃ©gebbi patikamÃºzeuma, az Arany EgyszarvÃº Patika.",
        "KÅ‘szeg hÃ­res a 'SzÅ‘lÅ‘ JÃ¶vÃ©sÃ©nek KÃ¶nyvÃ©rÅ‘l', amelybe 1740 Ã³ta minden Ã©vben lerajzoljÃ¡k a szÅ‘lÅ‘hajtÃ¡sokat.",
        "A vÃ¡ros feletti HÃ©tforrÃ¡s Ã©s az Ã“hÃ¡z-kilÃ¡tÃ³ a KÅ‘szegi-hegysÃ©g legnÃ©pszerÅ±bb kirÃ¡ndulÃ³helyei."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "sarvar",
    type: "city",
    parent: "HU-VA",
    coords: [16.9333, 47.25],
    name: {"de": "Kotenburg", "hu": "SÃ¡rvÃ¡r", "ro": "SÃ¡rvÃ¡r", "en": "SÃ¡rvÃ¡r"},
    image: "/geo-images/hungary/sarvar.webp",
    description: {"de": "Beliebter Kurort mit einem berÃ¼hmten Thermalbad und einer Renaissanceburg.", "hu": "NÃ©pszerÅ± fÃ¼rdÅ‘vÃ¡ros hÃ­res termÃ¡lfÃ¼rdÅ‘vel Ã©s reneszÃ¡nsz vÃ¡rral.", "ro": "StaÈ›iune balnearÄƒ popularÄƒ cu o faimoasÄƒ baie termalÄƒ È™i un castel renascentist.", "en": "Popular spa town with a famous thermal bath and a Renaissance castle."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "SÃ¡rvÃ¡r a RÃ¡ba partjÃ¡n fekvÅ‘ vÃ¡ros Vas vÃ¡rmegyÃ©ben, amely vilÃ¡gszÃ­nvonalÃº gyÃ³gyfÃ¼rdÅ‘jÃ©rÅ‘l Ã©s tÃ¶kÃ©letesen Ã©pen maradt reneszÃ¡nsz vÃ¡rÃ¡rÃ³l ismert. A NÃ¡dasdy-vÃ¡r a magyarorszÃ¡gi reneszÃ¡nsz Ã©pÃ­tÃ©szet egyik gyÃ¶ngyszeme, Ã¶tszÃ¶gletÅ± udvarÃ¡val Ã©s freskÃ³kkal dÃ­szÃ­tett dÃ­sztermÃ©vel a NÃ¡dasdy csalÃ¡d egykori hatalmÃ¡t hirdeti. A vÃ¡r falai kÃ¶zÃ¶tt nyomtattÃ¡k az elsÅ‘ magyar nyelvÅ± ÃšjszÃ¶vetsÃ©get is. SÃ¡rvÃ¡r igazi vonzereje ma a SÃ¡rvÃ¡ri GyÃ³gy- Ã©s WellnessfÃ¼rdÅ‘, amely kÃ¼lÃ¶nleges gyÃ³gyvizÃ©nek kÃ¶szÃ¶nhetÅ‘en az eurÃ³pai kirÃ¡lyi fÃ¼rdÅ‘k szÃ¶vetsÃ©gÃ©nek tagja. A vÃ¡ros arborÃ©tuma, a csÃ³nakÃ¡zÃ³tÃ³ Ã©s a RÃ¡ba menti erdÅ‘k ideÃ¡lis kÃ¶rnyezetet biztosÃ­tanak a pihenÃ©sre Ã©s a regenerÃ¡lÃ³dÃ¡sra.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Die Burg NÃ¡dasdy ist ein wichtiges historisches Denkmal.", "Das Heilwasser ist hervorragend fÃ¼r rheumatische Beschwerden."], "hu": ["A NÃ¡dasdy-vÃ¡r fontos tÃ¶rtÃ©nelmi mÅ±emlÃ©k.", "GyÃ³gyvize kivÃ¡lÃ³ reumatikus panaszokra."], "ro": ["Castelul NÃ¡dasdy este un important monument istoric.", "Apa termalÄƒ este excelentÄƒ pentru afecÈ›iuni reumatice."], "en": ["NÃ¡dasdy Castle is an important historical monument.", "The healing water is excellent for rheumatic complaints."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["A sÃ¡rvÃ¡ri NÃ¡dasdy-vÃ¡r az orszÃ¡g egyik legÃ©pebben fennmaradt vÃ¡rkastÃ©lya.",
        "SÃ¡rvÃ¡ron nyomtattÃ¡k 1541-ben az elsÅ‘ magyar nyelvÅ± kÃ¶nyvet, a Sylvester JÃ¡nos-fÃ©le ÃšjszÃ¶vetsÃ©get.",
        "A sÃ¡rvÃ¡ri gyÃ³gyvÃ­z kÃ©tfÃ©le forrÃ¡sbÃ³l ered, az egyik 43, a mÃ¡sik 83 fokos hÃ©vÃ­z.",
        "A vÃ¡rosi arborÃ©tum MagyarorszÃ¡g egyik legrÃ©gebbi nÃ¶vÃ©nygyÅ±jtemÃ©nye, tÃ¶bb szÃ¡z Ã©ves mocsÃ¡ri tÃ¶lgyekkel.",
        "SÃ¡rvÃ¡r az 'EurÃ³pai KirÃ¡lyi FÃ¼rdÅ‘k' (Royal Spas of Europe) hÃ¡lÃ³zatÃ¡nak tagja."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "veszprem-city",
    type: "city",
    parent: "HU-VE",
    coords: [17.9114, 47.0928],
    name: {"de": "Wesprim", "hu": "VeszprÃ©m", "ro": "VeszprÃ©m", "en": "VeszprÃ©m"},
    image: "/geo-images/hungary/veszprem-city.webp",
    description: {
      "de": "VeszprÃ©m, die 'Stadt der KÃ¶niginnen', liegt auf den malerischen HÃ¼geln des Bakony-Waldes in der NÃ¤he des Plattensees. Die Stadt blickt auf eine reiche Geschichte zurÃ¼ck und war traditionell der Ort, an dem die ungarischen KÃ¶niginnen gekrÃ¶nt wurden. Das gut erhaltene Burgviertel auf einem steilen Felsen bietet beeindruckende Ausblicke und beherbergt zahlreiche historische GebÃ¤ude und Museen. VeszprÃ©m war 2023 Kulturhauptstadt Europas und ist bekannt fÃ¼r sein lebendiges kulturelles Leben und seine Musikfestivals.",
      "hu": "VeszprÃ©m, a 'kirÃ¡lynÃ©k vÃ¡rosa', a Bakony lankÃ¡in, a Balaton kÃ¶zelÃ©ben fekszik. A vÃ¡ros gazdag tÃ¶rtÃ©nelemre tekint vissza, hagyomÃ¡nyosan itt koronÃ¡ztÃ¡k meg a magyar kirÃ¡lynÃ©kat. A meredek sziklÃ¡n elhelyezkedÅ‘, jÃ³l megÅ‘rzÃ¶tt vÃ¡rnegyed lenyÅ±gÃ¶zÅ‘ kilÃ¡tÃ¡st nyÃºjt, Ã©s szÃ¡mos tÃ¶rtÃ©nelmi Ã©pÃ¼letnek, mÃºzeumnak ad otthont. VeszprÃ©m 2023-ban EurÃ³pa KulturÃ¡lis FÅ‘vÃ¡rosa volt, Ã©s hÃ­res pezsgÅ‘ kulturÃ¡lis Ã©letÃ©rÅ‘l, valamint zenei fesztivÃ¡ljairÃ³l.",
      "ro": "VeszprÃ©m, 'oraÈ™ul reginelor', este situat pe dealurile pitoreÈ™ti ale pÄƒdurii Bakony, Ã®n apropierea lacului Balaton. OraÈ™ul are o istorie bogatÄƒ, fiind tradiÈ›ional locul unde erau Ã®ncoronate reginele maghiare. Cartierul castelului, bine conservat pe o stÃ¢ncÄƒ abruptÄƒ, oferÄƒ priveliÈ™ti impresionante È™i gÄƒzduieÈ™te numeroase clÄƒdiri istorice È™i muzee. VeszprÃ©m a fost CapitalÄƒ EuropeanÄƒ a Culturii Ã®n 2023 È™i este cunoscut pentru viaÈ›a sa culturalÄƒ vibrantÄƒ È™i festivalurile de muzicÄƒ.",
      "en": "VeszprÃ©m, the 'City of Queens,' is located on the picturesque hills of the Bakony Forest near Lake Balaton. The city boasts a rich history, traditionally serving as the site where Hungarian queens were crowned. The well-preserved Castle District, perched on a steep cliff, offers stunning views and houses numerous historic buildings and museums. VeszprÃ©m was a European Capital of Culture in 2023 and is renowned for its vibrant cultural scene and music festivals."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "VeszprÃ©m, a ",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats VeszprÃ©m und eine der Ã¤ltesten StÃ¤dte Ungarns.",
        "Traditioneller KrÃ¶nungsort der ungarischen KÃ¶niginnen.",
        "Kulturhauptstadt Europas im Jahr 2023.",
        "Das Burgviertel ist ein architektonisches Juwel auf einem Dolomitfelsen.",
        "Bekannt fÃ¼r den VeszprÃ©mer Zoo, einen der Ã¤ltesten des Landes.",
        "Veranstaltet jÃ¤hrlich das VeszprÃ©mFest und das StraÃŸenmusikfestival.",
        "Die St.-Michaels-Kathedrale ist ein bedeutendes religiÃ¶ses Denkmal.",
        "Liegt ideal als Tor zum Bakony-Gebirge und zum Plattensee."
      ],
      "hu": [
        "VeszprÃ©m vÃ¡rmegye szÃ©khelye Ã©s MagyarorszÃ¡g egyik legÅ‘sibb vÃ¡rosa.",
        "A magyar kirÃ¡lynÃ©k hagyomÃ¡nyos koronÃ¡zÃ³helye.",
        "2023-ban EurÃ³pa KulturÃ¡lis FÅ‘vÃ¡rosa volt.",
        "A vÃ¡rnegyed egy Ã©pÃ­tÃ©szeti Ã©kszerdoboz a dolomitsziklÃ¡n.",
        "HÃ­res a VeszprÃ©mi ÃllatkertrÅ‘l, amely az orszÃ¡g egyik legrÃ©gebbi Ã¡llatkertje.",
        "Minden Ã©vben megrendezik a VeszprÃ©mFestet Ã©s az Utcazene FesztivÃ¡lt.",
        "A Szent MihÃ¡ly-szÃ©kesegyhÃ¡z jelentÅ‘s vallÃ¡si mÅ±emlÃ©k.",
        "IdeÃ¡lis kiindulÃ³pont a Bakony Ã©s a Balaton felfedezÃ©sÃ©hez."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului VeszprÃ©m È™i unul dintre cele mai vechi oraÈ™e din Ungaria.",
        "Locul tradiÈ›ional de Ã®ncoronare a reginelor maghiare.",
        "CapitalÄƒ EuropeanÄƒ a Culturii Ã®n anul 2023.",
        "Cartierul castelului este o bijuterie arhitecturalÄƒ pe o stÃ¢ncÄƒ de dolomit.",
        "Cunoscut pentru GrÄƒdina ZoologicÄƒ din VeszprÃ©m, una dintre cele mai vechi.",
        "GÄƒzduieÈ™te anual VeszprÃ©mFest È™i Festivalul Muzicii de StradÄƒ.",
        "Catedrala SfÃ¢ntul Mihail este un monument religios important.",
        "Situat ideal ca poartÄƒ cÄƒtre munÈ›ii Bakony È™i Lacul Balaton."
      ],
      "en": [
        "Seat of VeszprÃ©m County and one of the oldest cities in Hungary.",
        "Traditional coronation site of Hungarian queens.",
        "European Capital of Culture in 2023.",
        "The Castle District is an architectural gem on a dolomite cliff.",
        "Famous for the VeszprÃ©m Zoo, one of the oldest in the country.",
        "Hosts the annual VeszprÃ©mFest and the Street Music Festival.",
        "St. Michael's Cathedral is a significant religious monument.",
        "Ideally located as a gateway to the Bakony Mountains and Lake Balaton."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": ["VeszprÃ©m volt MagyarorszÃ¡g egyik legkorÃ¡bbi pÃ¼spÃ¶ki szÃ©khelye Ã©s vÃ¡ra.",
        "A Gizella-kÃ¡polna a vÃ¡ros egyik legrÃ©gebbi Ã©pÃ­tmÃ©nye, 13. szÃ¡zadi freskÃ³kkal.",
        "A veszprÃ©mi VÃ¶lgyhÃ­d (Szent IstvÃ¡n vÃ¶lgyhÃ­d) a vÃ¡ros egyik jelkÃ©pe, monumentÃ¡lis lÃ¡tvÃ¡nyt nyÃºjt a SÃ©d-vÃ¶lgye felett.",
        "A VeszprÃ©mi Ãllatkert hÃ­res a BÃ¶be majomrÃ³l Ã©s modern, tÃ¡gas kifutÃ³irÃ³l.",
        "A vÃ¡rost gyakran a szÃ©l vÃ¡rosakÃ©nt is emlegetik a Bakony felÅ‘l Ã©rkezÅ‘ Ã¡llandÃ³ lÃ©gmozgÃ¡s miatt."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "balatonfured",
    type: "city",
    parent: "HU-VE",
    coords: [17.8833, 46.95],
    name: {"de": "BalatonfÃ¼red", "hu": "BalatonfÃ¼red", "ro": "BalatonfÃ¼red", "en": "BalatonfÃ¼red"},
    image: "/geo-images/hungary/balatonfured.webp",
    description: {"de": "Der Ã¤lteste Kurort am Plattensee, bekannt fÃ¼r seine Heilquellen.", "hu": "A Balaton legrÃ©gebbi Ã¼dÃ¼lÅ‘helye, gyÃ³gyforrÃ¡sairÃ³l ismert.", "ro": "Cea mai veche staÈ›iune de pe Lacul Balaton, cunoscutÄƒ pentru izvoarele sale vindecÄƒtoare.", "en": "The oldest resort on Lake Balaton, known for its healing springs."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "BalatonfÃ¼red az Ã©szaki part ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Zentrum des Segelsports am Plattensee.", "Veranstaltet jÃ¤hrlich den Anna-Ball."], "hu": ["A balatoni vitorlÃ¡zÃ¡s kÃ¶zpontja.", "Ã‰vente megrendezik az Anna-bÃ¡lt."], "ro": ["Centrul navigaÈ›iei pe Lacul Balaton.", "GÄƒzduieÈ™te anual Balul Anna."], "en": ["Center of sailing on Lake Balaton.", "Hosts the annual Anna Ball."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["BalatonfÃ¼reden tartottÃ¡k az elsÅ‘ Anna-bÃ¡lt 1825-ben, HorvÃ¡th Anna Krisztina tiszteletÃ©re.",
        "A Tagore sÃ©tÃ¡ny az indiai kÃ¶ltÅ‘Ã³riÃ¡srÃ³l, Rabindranath Tagore-rÃ³l kapta nevÃ©t, aki itt gyÃ³gyult meg.",
        "Itt Ã©pÃ¼lt fel a Balaton elsÅ‘ gÅ‘zhajÃ³ja, a Kisfaludy, SzÃ©chenyi IstvÃ¡n kezdemÃ©nyezÃ©sÃ©re.",
        "A Kossuth Lajos-forrÃ¡s savanyÃºvize kÃ¶zismert gyÃ³gyhatÃ¡sÃ¡rÃ³l, bÃ¡rki szabadon kÃ³stolhatja a tÃ©ren.",
        "BalatonfÃ¼red a legrÃ©gebbi magyarorszÃ¡gi vitorlÃ¡sklub, a Kereked Yacht Club otthona."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tihany",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.8833, 46.9167],
    name: {"de": "Tihany", "hu": "Tihany", "ro": "Tihany", "en": "Tihany"},
    image: "/geo-images/hungary/tihany.webp",
    description: {"de": "Halbinsel im Plattensee, berÃ¼hmt fÃ¼r ihre Benediktinerabtei und Lavendelfelder.", "hu": "FÃ©lsziget a Balatonban, hÃ­res bencÃ©s apÃ¡tsÃ¡gÃ¡rÃ³l Ã©s levendulamezÅ‘irÅ‘l.", "ro": "PeninsulÄƒ Ã®n Lacul Balaton, faimoasÄƒ pentru abaÈ›ia benedictinÄƒ È™i cÃ¢mpurile de lavandÄƒ.", "en": "Peninsula in Lake Balaton, famous for its Benedictine abbey and lavender fields."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Tihany a Balaton Ã©szaki partjÃ¡nak Ã©kkÃ¶ve, egy vulkanikus eredetÅ± fÃ©lsziget, amely mÃ©lyen benyÃºlik a tÃ³ba, s ahonnan a legszebb kilÃ¡tÃ¡s nyÃ­lik a ",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Die GrÃ¼ndungsurkunde der Abtei (1055) enthÃ¤lt die Ã¤ltesten ungarischen WÃ¶rter.", "Bietet einen atemberaubenden Blick auf den See."], "hu": ["Az apÃ¡tsÃ¡g alapÃ­tÃ³levele (1055) tartalmazza a legrÃ©gebbi magyar szavakat.", "LÃ©legzetelÃ¡llÃ­tÃ³ kilÃ¡tÃ¡st nyÃºjt a tÃ³ra."], "ro": ["Actul de fondare al abaÈ›iei (1055) conÈ›ine cele mai vechi cuvinte maghiare.", "OferÄƒ o vedere uluitoare asupra lacului."], "en": ["The abbey's founding charter (1055) contains the oldest Hungarian words.", "Offers a breathtaking view of the lake."]},
  
    factsAdvanced: {
      "de": [],
      "hu": ["A Tihanyi ApÃ¡tsÃ¡g alapÃ­tÃ³levele latin nyelvÅ±, de 58 magyar szÃ³t Ã©s szÃ³kapcsolatot tartalmaz.",
        "Az apÃ¡tsÃ¡g altemplomÃ¡ban talÃ¡lhatÃ³ az alapÃ­tÃ³, I. AndrÃ¡s kirÃ¡ly egyetlen Ã©psÃ©gben maradt sÃ­rja.",
        "Tihany hÃ­res a levendulatermesztÃ©srÅ‘l, az elsÅ‘ tÃ¶veket az 1920-as Ã©vekben telepÃ­tettÃ©k ide.",
        "A fÃ©lszigeten talÃ¡lhatÃ³k a barÃ¡tlakÃ¡sok, EurÃ³pa egyetlen Ã©psÃ©gben maradt remetetelepe.",
        "A Tihanyi Visszhang a 19. szÃ¡zad Ã³ta hÃ­res, bÃ¡r a beÃ©pÃ­tÃ©sek miatt ma mÃ¡r kevÃ©sbÃ© hallhatÃ³."],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zalaegerszeg",
    type: "city",
    parent: "HU-ZA",
    coords: [16.8439, 46.8417],
    name: {"de": "Egersee", "hu": "Zalaegerszeg", "ro": "Zalaegerszeg", "en": "Zalaegerszeg"},
    image: "/geo-images/hungary/zalaegerszeg.webp",
    description: {
      "de": "Zalaegerszeg, im Westen Ungarns am Ufer der Zala gelegen, ist eine grÃ¼ne Stadt, die von den sanften HÃ¼geln der Region Zala umgeben ist. Die Stadt ist bekannt fÃ¼r ihr reiches kulturelles Erbe und ihre Verbindung zur ungarischen Ã–lindustrie. Ein Highlight ist das GÃ¶csej-Freilichtmuseum, das erste seiner Art in Ungarn, das die traditionelle bÃ¤uerliche Architektur der Region zeigt. Mit dem nahegelegenen GÃ©bÃ¡rti-See und dem Aquacity-Wasserpark bietet Zalaegerszeg zudem vielfÃ¤ltige FreizeitmÃ¶glichkeiten fÃ¼r Natur- und Wasserliebhaber.",
      "hu": "Zalaegerszeg, Nyugat-MagyarorszÃ¡gon, a Zala folyÃ³ partjÃ¡n fekvÅ‘ zÃ¶ld vÃ¡ros, amelyet a Zalai-dombsÃ¡g lankÃ¡i Ã¶veznek. A vÃ¡ros hÃ­res gazdag kulturÃ¡lis Ã¶rÃ¶ksÃ©gÃ©rÅ‘l Ã©s a magyar olajiparhoz fÅ±zÅ‘dÅ‘ szoros kapcsolatÃ¡rÃ³l. Egyik legfÅ‘bb lÃ¡tvÃ¡nyossÃ¡ga a GÃ¶cseji FalumÃºzeum, az orszÃ¡g elsÅ‘ szabadtÃ©ri nÃ©prajzi mÃºzeuma, amely a rÃ©giÃ³ hagyomÃ¡nyos paraszti Ã©pÃ­tÃ©szetÃ©t mutatja be. A kÃ¶zeli GÃ©bÃ¡rti-tÃ³val Ã©s az Aquacity vÃ­ziparkkal Zalaegerszeg vÃ¡ltozatos kikapcsolÃ³dÃ¡si lehetÅ‘sÃ©geket kÃ­nÃ¡l a termÃ©szet Ã©s a vÃ­z kedvelÅ‘inek.",
      "ro": "Zalaegerszeg, situat Ã®n vestul Ungariei pe malul rÃ¢ului Zala, este un oraÈ™ verde Ã®nconjurat de dealurile domoale ale regiunii Zala. OraÈ™ul este cunoscut pentru moÈ™tenirea sa culturalÄƒ bogatÄƒ È™i legÄƒtura sa cu industria petrolierÄƒ maghiarÄƒ. Un punct de atracÈ›ie este Muzeul Satului GÃ¶csej, primul de acest fel din Ungaria, care prezintÄƒ arhitectura ruralÄƒ tradiÈ›ionalÄƒ a regiunii. Cu lacul GÃ©bÃ¡rti din apropiere È™i parcul acvatic Aquacity, Zalaegerszeg oferÄƒ diverse oportunitÄƒÈ›i de petrecere a timpului liber pentru iubitorii de naturÄƒ È™i apÄƒ.",
      "en": "Zalaegerszeg, located in western Hungary on the banks of the Zala River, is a green city surrounded by the gentle hills of the Zala region. The city is known for its rich cultural heritage and its connection to the Hungarian oil industry. A highlight is the GÃ¶csej Open-Air Museum, the first of its kind in Hungary, showcasing the region's traditional rural architecture. With the nearby Lake GÃ©bÃ¡rti and the Aquacity water park, Zalaegerszeg offers diverse leisure opportunities for nature and water lovers."
    },
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Zalaegerszeg, Zala vÃ¡rmegye szÃ©khelye, a Zala folyÃ³ vÃ¶lgyÃ©ben, a zalai dombok kÃ¶zÃ¶tt fekszik, Ã©s az orszÃ¡g egyik legzÃ¶ldebb vÃ¡rosakÃ©nt ismert. A vÃ¡ros arculatÃ¡t a modern Ã©pÃ­tÃ©szet Ã©s a nÃ©pi hagyomÃ¡nyok tisztelete hatÃ¡rozza meg. Itt nyÃ­lt meg az orszÃ¡g legelsÅ‘ szabadtÃ©ri nÃ©prajzi mÃºzeuma, a GÃ¶cseji FalumÃºzeum, amely bemutatja a rÃ©giÃ³ kÃ¼lÃ¶nleges faÃ©pÃ­tÃ©szetÃ©t Ã©s paraszti kultÃºrÃ¡jÃ¡t. Zalaegerszeg fontos ipari Ã©s kulturÃ¡lis kÃ¶zpont, bÃ¼szkÃ©lkedhet a Hevesi SÃ¡ndor SzÃ­nhÃ¡zzal Ã©s a TV-toronnyal, ahonnan tiszta idÅ‘ben az Alpok csÃºcsai is lÃ¡tszanak. A kÃ¶rnyezÅ‘ GÃ©bÃ¡rti-tÃ³ Ã©s az AquaCity vÃ­zipark kivÃ¡lÃ³ kikapcsolÃ³dÃ¡st nyÃºjt a csalÃ¡doknak, mÃ­g a vÃ¡ros kÃ¶rÃ¼li erdÅ‘k a termÃ©szetjÃ¡rÃ³k paradicsomÃ¡t alkotjÃ¡k.",
      "ro": "",
      "en": ""
    },
    facts: {
      "de": [
        "Sitz des Komitats Zala.",
        "Das GÃ¶csej-Freilichtmuseum zeigt Ã¼ber 40 historische GebÃ¤ude.",
        "Beherbergt das Ungarische ErdÃ¶lmuseum, das die Geschichte der FÃ¶rderung dokumentiert.",
        "Die Stadt ist bekannt fÃ¼r ihre moderne Architektur und gepflegten Parks.",
        "Wichtiger Industriestandort mit Fokus auf Elektronik und Logistik.",
        "Der GÃ©bÃ¡rti-See ist ein beliebtes Ziel zum Angeln und Baden.",
        "Veranstaltet jÃ¤hrlich das GÃ¶csej-Prunkfest (GÃ¶cseji PrÃ­mÃ¡sverseny).",
        "Liegt in einer der waldreichsten Regionen Ungarns."
      ],
      "hu": [
        "Zala vÃ¡rmegye szÃ©khelye.",
        "A GÃ¶cseji FalumÃºzeum tÃ¶bb mint 40 tÃ¶rtÃ©nelmi Ã©pÃ¼letet mutat be.",
        "Itt talÃ¡lhatÃ³ a Magyar Olaj- Ã©s GÃ¡zipari MÃºzeum.",
        "A vÃ¡ros modern Ã©pÃ­tÃ©szetÃ©rÅ‘l Ã©s gondozott parkjairÃ³l ismert.",
        "Fontos ipari kÃ¶zpont, kÃ¼lÃ¶nÃ¶s tekintettel az elektronikÃ¡ra Ã©s a logisztikÃ¡ra.",
        "A GÃ©bÃ¡rti-tÃ³ nÃ©pszerÅ± horgÃ¡sz- Ã©s fÃ¼rdÅ‘hely.",
        "Minden Ã©vben megrendezik a GÃ¶cseji PrÃ­mÃ¡sversenyt.",
        "MagyarorszÃ¡g egyik legerdÅ‘sebb rÃ©giÃ³jÃ¡ban fekszik."
      ],
      "ro": [
        "ReÈ™edinÈ›a judeÈ›ului Zala.",
        "Muzeul Satului GÃ¶csej prezintÄƒ peste 40 de clÄƒdiri istorice.",
        "GÄƒzduieÈ™te Muzeul Maghiar al Petrolului È™i Gazelor.",
        "OraÈ™ul este cunoscut pentru arhitectura sa modernÄƒ È™i parcurile bine Ã®ntreÈ›inute.",
        "Centru industrial important cu accent pe electronicÄƒ È™i logisticÄƒ.",
        "Lacul GÃ©bÃ¡rti este o destinaÈ›ie popularÄƒ pentru pescuit È™i scÄƒldat.",
        "GÄƒzduieÈ™te anual concursul de lÄƒutari din GÃ¶csej.",
        "Situat Ã®n una dintre cele mai Ã®mpÄƒdurite regiuni din Ungaria."
      ],
      "en": [
        "Seat of Zala County.",
        "The GÃ¶csej Open-Air Museum features over 40 historic buildings.",
        "Home to the Hungarian Oil and Gas Museum, documenting the history of extraction.",
        "The city is known for its modern architecture and well-kept parks.",
        "A major industrial hub focusing on electronics and logistics.",
        "Lake GÃ©bÃ¡rti is a popular destination for fishing and swimming.",
        "Hosts the annual GÃ¶csej Primate Competition (folk music).",
        "Located in one of the most forested regions of Hungary."
      ]
    },
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Zalaegerszegen nyÃ­lt meg 1968-ban az orszÃ¡g elsÅ‘ szabadtÃ©ri nÃ©prajzi mÃºzeuma.",
        "A vÃ¡ros felett magasodÃ³ TV-torony 95 mÃ©ter magas, Ã©s kÃ¶rpanorÃ¡mÃ¡s kÃ¡vÃ©zÃ³val rendelkezik.",
        "Itt talÃ¡lhatÃ³ a Magyar Olaj- Ã©s GÃ¡zipari MÃºzeum, emlÃ©ket Ã¡llÃ­tva a rÃ©giÃ³ energetikai mÃºltjÃ¡nak.",
        "Zalaegerszeg hÃ­res a 'virÃ¡gvÃ¡ros' jellegÃ©rÅ‘l Ã©s a rendezett, tiszta kÃ¶ztereirÅ‘l.",
        "A vÃ¡ros szÃ©lÃ©n talÃ¡lhatÃ³ GÃ©bÃ¡rti-tÃ³ nÃ©pszerÅ± horgÃ¡sz- Ã©s szabadidÅ‘kÃ¶zpont."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nagykanizsa",
    type: "city",
    parent: "HU-ZA",
    coords: [16.9911, 46.45],
    name: {"de": "GroÃŸkirchen", "hu": "Nagykanizsa", "ro": "Nagykanizsa", "en": "Nagykanizsa"},
    image: "/geo-images/hungary/nagykanizsa.webp",
    description: {"de": "Wichtiger Verkehrsknotenpunkt im SÃ¼dwesten Ungarns.", "hu": "Fontos kÃ¶zlekedÃ©si csomÃ³pont DÃ©lnyugat-MagyarorszÃ¡gon.", "ro": "Important nod de transport Ã®n sud-vestul Ungariei.", "en": "Important transport hub in southwestern Hungary."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Nagykanizsa Zala vÃ¡rmegye mÃ¡sodik legnagyobb vÃ¡rosa, egykor fontos katonai vÃ©gvÃ¡r Ã©s kereskedelmi kÃ¶zpont a dÃ©lnyugati hatÃ¡r mentÃ©n. A vÃ¡ros tÃ¶rtÃ©nelmÃ©ben meghatÃ¡rozÃ³ volt a tÃ¶rÃ¶k elleni kÃ¼zdelem, s bÃ¡r az egykori vÃ¡r mÃ¡ra elpusztult, emlÃ©ke a vÃ¡ros nevÃ©ben Ã©s kultÃºrÃ¡jÃ¡ban tovÃ¡bb Ã©l. Nagykanizsa tÃ¡gas tereivel, mint az ErzsÃ©bet tÃ©r, Ã©s elegÃ¡ns palotÃ¡ival a polgÃ¡ri jÃ³lÃ©t korszakÃ¡t idÃ©zi, amikor a vÃ¡ros a dÃ©lnyugati tÃ©rsÃ©g legfontosabb gazdasÃ¡gi centruma volt. A vÃ¡ros kÃ¶rnyÃ©ke, kÃ¼lÃ¶nÃ¶sen a CsÃ³nakÃ¡zÃ³-tÃ³ Ã©s a kÃ¶rnyezÅ‘ erdÅ‘k kivÃ¡lÃ³ lehetÅ‘sÃ©get adnak a tÃºrÃ¡zÃ¡sra Ã©s a sportolÃ¡sra. Nagykanizsa hÃ­res a kerÃ©kpÃ¡ros kultÃºrÃ¡jÃ¡rÃ³l Ã©s a hatÃ¡r menti barÃ¡ti kapcsolatok Ã¡polÃ¡sÃ¡rÃ³l.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["War historisch eine wichtige Festungsstadt.", "Bekannt fÃ¼r ihre Parks und GrÃ¼nflÃ¤chen."], "hu": ["TÃ¶rtÃ©nelmileg fontos vÃ©gvÃ¡r volt.", "ParkjairÃ³l Ã©s zÃ¶ldÃ¶vezeteirÅ‘l ismert."], "ro": ["A fost istoric un important oraÈ™ fortÄƒreaÈ›Äƒ.", "Cunoscut pentru parcurile È™i spaÈ›iile sale verzi."], "en": ["Was historically an important fortress town.", "Known for its parks and green spaces."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Nagykanizsa vÃ¡ra a tÃ¶rÃ¶k hÃ³doltsÃ¡g idejÃ©n az orszÃ¡g egyik legfontosabb vÃ©gvÃ¡ra volt.",
        "Az ErzsÃ©bet tÃ©ren talÃ¡lhatÃ³ Zenepavilon a vÃ¡ros egyik legkedveltebb talÃ¡lkozÃ³helye.",
        "Nagykanizsa a 19. szÃ¡zad vÃ©gÃ©n az orszÃ¡g egyik legjelentÅ‘sebb sÃ¶rgyÃ¡rtÃ³ vÃ¡rosa volt.",
        "A vÃ¡rostÃ³l nem messze talÃ¡lhatÃ³ a CsÃ³nakÃ¡zÃ³-tÃ³, amely kÃ¶rÃ¼l nemzetkÃ¶zi szintÅ± kerÃ©kpÃ¡rpÃ¡lya fut.",
        "A vÃ¡ros kÃ¶zpontjÃ¡ban Ã¡ll az AlsÃ³vÃ¡rosi templom, amely a tÃ¶rÃ¶k mecset kÃ¶veibÅ‘l Ã©pÃ¼lt fel."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "keszthely",
    type: "city",
    parent: "HU-ZA",
    coords: [17.2431, 46.7681],
    name: {"de": "Kesthell", "hu": "Keszthely", "ro": "Keszthely", "en": "Keszthely"},
    image: "/geo-images/hungary/keszthely.webp",
    description: {"de": "Die grÃ¶ÃŸte Stadt am Plattensee, bekannt fÃ¼r das Schloss Festetics.", "hu": "A Balaton legnagyobb vÃ¡rosa, a Festetics-kastÃ©lyrÃ³l ismert.", "ro": "Cel mai mare oraÈ™ de pe Lacul Balaton, cunoscut pentru Castelul Festetics.", "en": "The largest city on Lake Balaton, known for the Festetics Palace."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Keszthely a Balaton legrÃ©gebbi Ã©s legpatinÃ¡sabb vÃ¡rosa a tÃ³ nyugati vÃ©gÃ©nÃ©l, amely mÃ©ltÃ¡n viseli a 'Balaton fÅ‘vÃ¡rosa' cÃ­met tÃ¶rtÃ©nelmi Ã©s kulturÃ¡lis jelentÅ‘sÃ©ge miatt. A vÃ¡ros Ã©kkÃ¶ve a Grassalkovich-kastÃ©lyhoz mÃ©rhetÅ‘ Festetics-kastÃ©ly, MagyarorszÃ¡g egyik legszebb barokk palotÃ¡ja, amelynek kÃ¶nyvtÃ¡ra Ã©s parkja egyedÃ¼lÃ¡llÃ³ Ã©rtÃ©ket kÃ©pvisel. Keszthely hangulatos belvÃ¡rosa, mÃºzeumai (mint a Georgikon vagy a Balatoni MÃºzeum) Ã©s a Monarchia korabeli SzigetfÃ¼rdÅ‘je visszarepÃ­tik a lÃ¡togatÃ³t a mÃºltba. A vÃ¡ros nemcsak kulturÃ¡lis kÃ¶zpont, hanem fontos egyetemi vÃ¡ros is, ahol a mezÅ‘gazdasÃ¡gi oktatÃ¡s tÃ¶bb Ã©vszÃ¡zados mÃºltra tekint vissza. A Balaton-parti sÃ©tÃ¡ny Ã©s a kikÃ¶tÅ‘ egÃ©sz Ã©vben vonzÃ³ cÃ©lpont a kikapcsolÃ³dÃ¡sra vÃ¡gyÃ³knak.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Schloss Festetics ist eines der grÃ¶ÃŸten in Ungarn.", "Heimat des Georgikon, der ersten landwirtschaftlichen Hochschule Europas."], "hu": ["A Festetics-kastÃ©ly az egyik legnagyobb MagyarorszÃ¡gon.", "A Georgikon, EurÃ³pa elsÅ‘ mezÅ‘gazdasÃ¡gi fÅ‘iskolÃ¡jÃ¡nak otthona."], "ro": ["Castelul Festetics este unul dintre cele mai mari din Ungaria.", "Casa Georgikon, primul colegiu agricol din Europa."], "en": ["The Festetics Palace is one of the largest in Hungary.", "Home to the Georgikon, Europe's first agricultural college."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A keszthelyi Festetics-kastÃ©ly MagyarorszÃ¡g negyedik legnagyobb kastÃ©lya, 101 helyisÃ©ggel.",
        "Itt alapÃ­tottÃ¡k 1797-ben a Georgikont, EurÃ³pa elsÅ‘ agrÃ¡rtudomÃ¡nyi fÅ‘iskolÃ¡jÃ¡t.",
        "A Helikon KÃ¶nyvtÃ¡r a kastÃ©lyban az orszÃ¡g egyetlen Ã©rintetlenÃ¼l maradt aristokrata magÃ¡nkÃ¶nyvtÃ¡ra.",
        "Keszthelyen talÃ¡lhatÃ³ a Balaton egyetlen megmaradt, eredeti formÃ¡jÃ¡ban ÃºjjÃ¡Ã©pÃ­tett SzigetfÃ¼rdÅ‘je.",
        "A Balatoni MÃºzeum a tÃ³ termÃ©szetvilÃ¡gÃ¡t Ã©s az emberi Ã©let tÃ¶rtÃ©netÃ©t mutatja be a kÃ¶rnyÃ©ken."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "harkany",
    type: "city",
    parent: "HU-BA",
    coords: [18.2386, 45.8494],
    name: {"de": "HarkÃ¡ny", "hu": "HarkÃ¡ny", "ro": "HarkÃ¡ny", "en": "HarkÃ¡ny"},
    description: {"de": "BerÃ¼hmte Kurstadt im SÃ¼den Ungarns, bekannt fÃ¼r ihr schwefelhaltiges Thermalwasser.", "hu": "HÃ­res fÃ¼rdÅ‘vÃ¡ros DÃ©l-MagyarorszÃ¡gon, kÃ©nes termÃ¡lvizÃ©rÅ‘l ismert.", "ro": "Faimos oraÈ™ balnear Ã®n sudul Ungariei, cunoscut pentru apa sa termalÄƒ sulfuroasÄƒ.", "en": "Famous spa town in southern Hungary, known for its sulfurous thermal water."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "HarkÃ¡ny az orszÃ¡g egyik legjelentÅ‘sebb gyÃ³gyfÃ¼rdÅ‘vÃ¡rosa Baranya vÃ¡rmegyÃ©ben, a VillÃ¡nyi-hegysÃ©g dÃ©li lÃ¡bÃ¡nÃ¡l. VilÃ¡ghÃ­rnevÃ©t egyedÃ¼lÃ¡llÃ³ Ã¶sszetÃ©telÅ± kÃ©nes gyÃ³gyvizÃ©nek kÃ¶szÃ¶nheti, amelyet vÃ©letlenÃ¼l fedeztek fel az 1820-as Ã©vekben, a mocsarak lecsapolÃ¡sa sorÃ¡n. A harkÃ¡nyi vÃ­z kÃ¼lÃ¶nlegessÃ©ge a benne oldott karbonil-szulfid, amely sokkal gyorsabban szÃ­vÃ³dik fel, mint a hagyomÃ¡nyos szulfÃ¡tok, Ã­gy rendkÃ­vÃ¼l hatÃ©kony a mozgÃ¡sszervi Ã©s bÅ‘rbetegsÃ©gek kezelÃ©sÃ©ben. A vÃ¡ros mediterrÃ¡n klÃ­mÃ¡ja, gondozott parkjai Ã©s a fÃ¼rdÅ‘ modern szolgÃ¡ltatÃ¡sai egÃ©sz Ã©vben vonzzÃ¡k a gyÃ³gyulni Ã©s pihenni vÃ¡gyÃ³kat. HarkÃ¡ny ideÃ¡lis kiindulÃ³pont a kÃ¶zeli SiklÃ³s Ã©s VillÃ¡ny felfedezÃ©sÃ©hez is.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Wasser ist besonders gut fÃ¼r Gelenkbeschwerden.", "Eines der bedeutendsten HeilbÃ¤der Ungarns."], "hu": ["A vÃ­z kÃ¼lÃ¶nÃ¶sen jÃ³ Ã­zÃ¼leti panaszokra.", "MagyarorszÃ¡g egyik legjelentÅ‘sebb gyÃ³gyfÃ¼rdÅ‘je."], "ro": ["Apa este deosebit de bunÄƒ pentru afecÈ›iuni articulare.", "Una dintre cele mai importante bÄƒi curative din Ungaria."], "en": ["The water is particularly good for joint complaints.", "One of Hungary's most significant medicinal baths."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A harkÃ¡nyi gyÃ³gyvizet 1823-ban fedezte fel PogÃ¡ny JÃ¡nos csatornÃ¡zÃ³ munkÃ¡s.",
        "Ez az egyetlen hely a vilÃ¡gon, ahol a kÃ©n karbonil-szulfid formÃ¡jÃ¡ban van jelen a vÃ­zben.",
        "A vÃ¡ros kÃ¶zvetlen szomszÃ©dsÃ¡gÃ¡ban talÃ¡lhatÃ³ a SiklÃ³si VÃ¡r Ã©s a VillÃ¡nyi borvidÃ©k.",
        "A HarkÃ¡nyi GyÃ³gyfÃ¼rdÅ‘ tÃ¶bb mint 13 hektÃ¡ros parkban terÃ¼l el.",
        "A fÃ¼rdÅ‘ kÃ©nes vize jellegzetes illatÃ¡rÃ³l mÃ¡r messzirÅ‘l felismerhetÅ‘."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szigetvar",
    type: "city",
    parent: "HU-BA",
    coords: [17.7981, 46.0494],
    name: {"de": "Inselburg", "hu": "SzigetvÃ¡r", "ro": "SzigetvÃ¡r", "en": "SzigetvÃ¡r"},
    description: {"de": "Historische Stadt, bekannt fÃ¼r die heldenhafte Verteidigung ihrer Burg gegen die Osmanen.", "hu": "TÃ¶rtÃ©nelmi vÃ¡ros, a vÃ¡r oszmÃ¡nok elleni hÅ‘sies vÃ©delmÃ©rÅ‘l ismert.", "ro": "OraÈ™ istoric, cunoscut pentru apÄƒrarea eroicÄƒ a cetÄƒÈ›ii sale Ã®mpotriva otomanilor.", "en": "Historic town known for the heroic defense of its castle against the Ottomans."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "SzigetvÃ¡r vÃ¡rosa a magyar tÃ¶rtÃ©nelem egyik leghÅ‘siesebb helyszÃ­ne, ahol 1532-ben ZrÃ­nyi MiklÃ³s Ã©s maroknyi serege megÃ¡llÃ­totta SzulejmÃ¡n szultÃ¡n hatalmas hadÃ¡t. A szigetvÃ¡ri vÃ¡r ostroma a vilÃ¡gtÃ¶rtÃ©nelem egyik legfontosabb csatÃ¡ja volt, hiszen bÃ¡r a vÃ¡r elesett, a tÃ¶rÃ¶k sereg annyira meggyengÃ¼lt, hogy nem tudta folytatni ÃºtjÃ¡t BÃ©cs felÃ©. A vÃ¡r falai kÃ¶zÃ¶tt ma mÃºzeum Ã©s emlÃ©khely mÅ±kÃ¶dik, ahol a lÃ¡togatÃ³k megismerhetik a 'szigetvÃ¡ri hÅ‘s' tÃ¶rtÃ©netÃ©t. A vÃ¡ros azonban nemcsak a mÃºltjÃ¡rÃ³l hÃ­res: modern gyÃ³gyfÃ¼rdÅ‘je Ã©s a tÃ¶rÃ¶k kori emlÃ©kek, mint a SzulejmÃ¡n-dzsÃ¡mi, egyedÃ¼lÃ¡llÃ³ hangulatot kÃ¶lcsÃ¶nÃ¶znek a telepÃ¼lÃ©snek. SzigetvÃ¡r ma a magyar-tÃ¶rÃ¶k megbÃ©kÃ©lÃ©s Ã©s a tÃ¶rtÃ©nelmi emlÃ©kezet egyik legfontosabb kÃ¶zpontja.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Schauplatz der Belagerung von 1566.", "Hier starb Sultan SÃ¼leyman der PrÃ¤chtige."], "hu": ["Az 1566-os ostrom helyszÃ­ne.", "Itt halt meg I. SzulejmÃ¡n szultÃ¡n."], "ro": ["Locul asediului din 1566.", "Aici a murit sultanul Soliman Magnificul."], "en": ["Site of the siege of 1566.", "Sultan Suleiman the Magnificent died here."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "SzigetvÃ¡r vÃ©dÅ‘je, ZrÃ­nyi MiklÃ³s, a vÃ¡rkapun kitÃ¶rve halt hÅ‘si halÃ¡lt 1566-ban.",
        "I. SzulejmÃ¡n szultÃ¡n a vÃ¡r ostroma alatt, sÃ¡trÃ¡ban hunyt el termÃ©szetes halÃ¡llal.",
        "A vÃ¡r 2016 Ã³ta Nemzeti EmlÃ©khely minÅ‘sÃ­tÃ©ssel rendelkezik.",
        "A vÃ¡rosban talÃ¡lhatÃ³ Magyar-TÃ¶rÃ¶k BarÃ¡tsÃ¡g Park a kÃ©t nemzet kÃ¶zÃ¶s tÃ¶rtÃ©nelmÃ©nek Ã¡llÃ­t emlÃ©ket.",
        "SzigetvÃ¡r gyÃ³gyfÃ¼rdÅ‘je 62 fokos nÃ¡trium-kloridos, alkÃ¡li-hidrogÃ©nkarbonÃ¡tos vÃ­zzel vÃ¡rja a vendÃ©geket."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "baja",
    type: "city",
    parent: "HU-BK",
    coords: [18.95, 46.1833],
    name: {"de": "Frankenstadt", "hu": "Baja", "ro": "Baja", "en": "Baja"},
    image: "/geo-images/hungary/baja.webp",
    description: {"de": "Stadt an der Donau, berÃ¼hmt fÃ¼r ihre Fischsuppe und das jÃ¤hrliche Fischsuppen-Festival.", "hu": "Duna-parti vÃ¡ros, hÃ­res a halÃ¡szlevÃ©rÅ‘l Ã©s az Ã©vente megrendezett halÃ¡szlÃ©-fesztivÃ¡lrÃ³l.", "ro": "OraÈ™ pe DunÄƒre, faimos pentru ciorba de peÈ™te È™i festivalul anual al ciorbei de peÈ™te.", "en": "City on the Danube, famous for its fish soup and the annual fish soup festival."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Baja a Duna bal partjÃ¡n, a Sugovica folyÃ³Ã¡g Ã©s a Gemenci erdÅ‘ szomszÃ©dsÃ¡gÃ¡ban fekvÅ‘ hangulatos kisvÃ¡ros, amelyet gyakran a 'vizek vÃ¡rosakÃ©nt' emlegetnek. A telepÃ¼lÃ©s arculatÃ¡t a folyÃ³ Ã©s a vÃ­zi Ã©let hatÃ¡rozza meg, legfontosabb esemÃ©nye pedig a minden Ã©vben megrendezett Bajai HalÃ¡szlÃ©fÅ‘zÅ‘ NÃ©pÃ¼nnepÃ©ly, ahol tÃ¶bb ezer bogrÃ¡csban rotyog a hÃ­res bajai halÃ¡szlÃ©. A vÃ¡ros kÃ¶zpontja a SzenthÃ¡romsÃ¡g tÃ©r, amely EurÃ³pa egyik legszebb, itÃ¡liai stÃ­lusÃº tere, kÃ¶zvetlen kapcsolattal a vÃ­zparttal. Baja kulturÃ¡lis sokszÃ­nÅ±sÃ©gÃ©t a magyarok, horvÃ¡tok (bunyevÃ¡cok) Ã©s nÃ©metek Ã©vszÃ¡zados egyÃ¼ttÃ©lÃ©se adja. A vÃ¡ros ideÃ¡lis cÃ©lpont a vÃ­zi sportok kedvelÅ‘inek Ã©s a termÃ©szetjÃ¡rÃ³knak, akik a Gemenci erdÅ‘ vadregÃ©nyes tÃ¡jait fedeznÃ©k fel.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Liegt am Zusammenfluss von Donau und Sugovica.", "Wichtiges kulturelles Zentrum der Region."], "hu": ["A Duna Ã©s a Sugovica talÃ¡lkozÃ¡sÃ¡nÃ¡l fekszik.", "A rÃ©giÃ³ fontos kulturÃ¡lis kÃ¶zpontja."], "ro": ["Situat la confluenÈ›a DunÄƒrii cu Sugovica.", "Centru cultural important al regiunii."], "en": ["Located at the confluence of the Danube and Sugovica.", "Important cultural center of the region."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Baja fÅ‘tere, a SzenthÃ¡romsÃ¡g tÃ©r, pontosan akkora, mint a velencei Szent MÃ¡rk tÃ©r.",
        "A bajai halÃ¡szlÃ© kÃ¼lÃ¶nlegessÃ©ge a gyufatÃ©szta, amelyet a halhÃºs mellÃ© tÃ¡lalnak.",
        "A vÃ¡ros hatÃ¡rÃ¡ban kezdÅ‘dik a Gemenci erdÅ‘, EurÃ³pa legnagyobb Ã¶sszefÃ¼ggÅ‘ Ã¡rtÃ©ri erdeje.",
        "Baja hÃ­res szÃ¼lÃ¶tte TÃ¼rr IstvÃ¡n, a Korinthoszi-csatorna egyik tervezÅ‘je.",
        "A Sugovica-parti sÃ©tÃ¡ny Ã©s a PetÅ‘fi-sziget a vÃ¡ros legnÃ©pszerÅ±bb kikapcsolÃ³dÃ¡si helyszÃ­ne."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kiskunfelegyhaza",
    type: "city",
    parent: "HU-BK",
    coords: [19.85, 46.7167],
    name: {"de": "Feledihas", "hu": "KiskunfÃ©legyhÃ¡za", "ro": "KiskunfÃ©legyhÃ¡za", "en": "KiskunfÃ©legyhÃ¡za"},
    description: {"de": "Stadt in der GroÃŸen Tiefebene mit beeindruckender Jugendstilarchitektur.", "hu": "AlfÃ¶ldi vÃ¡ros lenyÅ±gÃ¶zÅ‘ szecessziÃ³s Ã©pÃ­tÃ©szettel.", "ro": "OraÈ™ Ã®n Marea CÃ¢mpie cu o arhitecturÄƒ Art Nouveau impresionantÄƒ.", "en": "City in the Great Plain with impressive Art Nouveau architecture."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "KiskunfÃ©legyhÃ¡za a KiskunsÃ¡g szÃ­vÃ©ben fekvÅ‘ vÃ¡ros, amely gazdag nÃ©prajzi hagyomÃ¡nyairÃ³l Ã©s gyÃ¶nyÃ¶rÅ± szecessziÃ³s Ã©pÃ­tÃ©szetÃ©rÅ‘l ismert. A vÃ¡ros jelkÃ©pe az impozÃ¡ns VÃ¡roshÃ¡za, amely a magyar szecessziÃ³ egyik legszebb pÃ©ldÃ¡ja, gazdagon dÃ­szÃ­tve Zsolnay-kerÃ¡miÃ¡kkal. A telepÃ¼lÃ©s tÃ¶rtÃ©nete szorosan Ã¶sszefonÃ³dik a kunok kivÃ¡ltsÃ¡gaival Ã©s a mezÅ‘vÃ¡rosi polgÃ¡rosodÃ¡ssal. KiskunfÃ©legyhÃ¡za hÃ­res szÃ¼lÃ¶tte PetÅ‘fi SÃ¡ndor (akit a vÃ¡ros sajÃ¡tjÃ¡nak tekint) Ã©s MÃ³ra Ferenc, az 'aranykoporsÃ³' Ã­rÃ³ja. A lÃ¡togatÃ³kat a Kiskun MÃºzeum kÃ¼lÃ¶nleges bÃ¶rtÃ¶nmÃºzeuma Ã©s a vÃ¡ros kÃ¶rnyÃ©ki pusztai vilÃ¡g, Bugac kÃ¶zelsÃ©ge vonzza. A vÃ¡ros gazdasÃ¡gÃ¡ban a mezÅ‘gazdasÃ¡g Ã©s az Ã©lelmiszeripar mellett a gÃ©pgyÃ¡rtÃ¡s is jelentÅ‘s.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Rathaus ist ein Meisterwerk des ungarischen Jugendstils.", "Heimatstadt des Schriftstellers Ferenc MÃ³ra."], "hu": ["A vÃ¡roshÃ¡za a magyar szecessziÃ³ remekmÅ±ve.", "MÃ³ra Ferenc Ã­rÃ³ szÃ¼lÅ‘vÃ¡rosa."], "ro": ["PrimÄƒria este o capodoperÄƒ a stilului Art Nouveau maghiar.", "OraÈ™ul natal al scriitorului Ferenc MÃ³ra."], "en": ["The town hall is a masterpiece of Hungarian Art Nouveau.", "Hometown of writer Ferenc MÃ³ra."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A kiskunfÃ©legyhÃ¡zi VÃ¡roshÃ¡za tornya 45 mÃ©ter magas Ã©s Zsolnay-cserÃ©ppel fedett.",
        "PetÅ‘fi SÃ¡ndor gyermekkorÃ¡nak jelentÅ‘s rÃ©szÃ©t itt tÃ¶ltÃ¶tte, Ã©s FÃ©legyhÃ¡zÃ¡t nevezte szÃ¼lÅ‘vÃ¡rosÃ¡nak.",
        "A Kiskun MÃºzeumban lÃ¡thatÃ³ az orszÃ¡g egyik utolsÃ³kÃ©nt fennmaradt szÃ©lmalma.",
        "MÃ³ra Ferenc szÃ¼lÅ‘hÃ¡za ma emlÃ©kmÃºzeumkÃ©nt mÅ±kÃ¶dik a vÃ¡rosban.",
        "A vÃ¡rostÃ³l mindÃ¶ssze 20 kilomÃ©terre fekszik Bugac, a pusztai turizmus kÃ¶zpontja."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "bugac",
    type: "landmark",
    parent: "HU-BK",
    coords: [19.6833, 46.6833],
    name: {"de": "Bugac", "hu": "Bugac", "ro": "Bugac", "en": "Bugac"},
    description: {"de": "Teil des KiskunsÃ¡g-Nationalparks, bekannt fÃ¼r seine traditionelle Puszta-Landschaft.", "hu": "A KiskunsÃ¡gi Nemzeti Park rÃ©sze, hagyomÃ¡nyos pusztai tÃ¡jÃ¡rÃ³l ismert.", "ro": "Parte a Parcului NaÈ›ional KiskunsÃ¡g, cunoscut pentru peisajul sÄƒu tradiÈ›ional de puszta.", "en": "Part of the KiskunsÃ¡g National Park, known for its traditional puszta landscape."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Bugac a KiskunsÃ¡gi Nemzeti Park legnagyobb Ã©s legismertebb egysÃ©ge, a magyar puszta Ã©s a pÃ¡sztorkultÃºra egyik legfontosabb Å‘rzÅ‘helye. A terÃ¼let hÃ­res a vÃ©gtelen homokpusztÃ¡irÃ³l, az Å‘shonos magyar Ã¡llatfajokrÃ³l (szÃ¼rke marha, rackajuh, mangalica) Ã©s a lenyÅ±gÃ¶zÅ‘ lovasbemutatÃ³krÃ³l. Bugacpuszta szÃ­vÃ©ben talÃ¡lhatÃ³ a PÃ¡sztormÃºzeum, amely bemutatja az egykori pusztai Ã©letmÃ³dot Ã©s a pÃ¡sztorok eszkÃ¶zeit. KÃ©tÃ©vente itt rendezik meg az ÅsÃ¶k NapjÃ¡t Ã©s a KurultÃ¡jt, a hun Ã©s tÃ¼rk tudatÃº nÃ©pek legnagyobb hagyomÃ¡nyÅ‘rzÅ‘ seregszemlÃ©jÃ©t. A tÃ¡j nyugalma, az Å‘sborÃ³kÃ¡s Ã©s a pusztai rÃ³nasÃ¡g kÃ¼lÃ¶nleges atmoszfÃ©rÃ¡ja felejthetetlen Ã©lmÃ©nyt nyÃºjt a termÃ©szetbarÃ¡toknak Ã©s a magyar tÃ¶rtÃ©nelem irÃ¡nt Ã©rdeklÅ‘dÅ‘knek.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Veranstaltet den KurultÃ¡j, ein Treffen der TurkvÃ¶lker.", "Heimat der ungarischen Graurinder."], "hu": ["Itt rendezik meg a KurultÃ¡jt.", "A magyar szÃ¼rkemarhÃ¡k hazÃ¡ja."], "ro": ["GÄƒzduieÈ™te KurultÃ¡j, o Ã®ntÃ¢lnire a popoarelor turcice.", "Casa vitelor sure maghiare."], "en": ["Hosts the KurultÃ¡j, a meeting of Turkic peoples.", "Home of the Hungarian Grey cattle."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Bugac az UNESCO Ã¡ltal elismert bioszfÃ©ra-rezervÃ¡tum rÃ©sze.",
        "Itt talÃ¡lhatÃ³ a KiskunsÃ¡g egyik utolsÃ³ nagy kiterjedÃ©sÅ± Å‘sborÃ³kÃ¡sa.",
        "A bugaci mÃ©nes Ã©s a csikÃ³sok bemutatÃ³i vilÃ¡gszerte ismertek.",
        "A PÃ¡sztormÃºzeum Ã©pÃ¼lete egy hagyomÃ¡nyos nÃ¡dtetÅ‘s kunyhÃ³t formÃ¡z.",
        "A terÃ¼leten rendszeresen vÃ©geznek rÃ©gÃ©szeti Ã¡satÃ¡sokat, amelyek egy jelentÅ‘s kÃ¶zÃ©pkori kolostort tÃ¡rtak fel."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "oroshaza",
    type: "city",
    parent: "HU-BE",
    coords: [20.6667, 46.5667],
    name: {"de": "OroshÃ¡za", "hu": "OroshÃ¡za", "ro": "OroshÃ¡za", "en": "OroshÃ¡za"},
    description: {"de": "Stadt in SÃ¼dostungarn, bekannt fÃ¼r das Heil- und Strandbad GyopÃ¡rosfÃ¼rdÅ‘.", "hu": "DÃ©lkelet-magyarorszÃ¡gi vÃ¡ros, a GyopÃ¡rosfÃ¼rdÅ‘ gyÃ³gy- Ã©s strandfÃ¼rdÅ‘rÅ‘l ismert.", "ro": "OraÈ™ Ã®n sud-estul Ungariei, cunoscut pentru bÄƒile curative È™i de È™trand GyopÃ¡rosfÃ¼rdÅ‘.", "en": "City in southeastern Hungary, known for the GyopÃ¡rosfÃ¼rdÅ‘ medicinal and thermal bath."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "OroshÃ¡za BÃ©kÃ©s vÃ¡rmegye jelentÅ‘s gazdasÃ¡gi Ã©s kulturÃ¡lis kÃ¶zpontja, amely leginkÃ¡bb a tÅ‘le karnyÃºjtÃ¡snyira fekvÅ‘ GyopÃ¡rosfÃ¼rdÅ‘rÅ‘l nevezetes. A 'fÃ¶ldi paradicsomkÃ©nt' is emlegetett fÃ¼rdÅ‘komplexum egy termÃ©szetes szikes tÃ³ partjÃ¡n Ã©pÃ¼lt fel, s gyÃ³gyvize mellett lenyÅ±gÃ¶zÅ‘ parkjÃ¡val Ã©s modern Ã©lmÃ©nyfÃ¼rdÅ‘jÃ©vel vÃ¡rja a lÃ¡togatÃ³kat. OroshÃ¡za vÃ¡rosa hÃ­res gazdag agrÃ¡rmÃºltjÃ¡rÃ³l Ã©s ipari fejlÅ‘dÃ©sÃ©rÅ‘l, kÃ¼lÃ¶nÃ¶sen az Ã¼veggyÃ¡rtÃ¡srÃ³l. A kulturÃ¡lis Ã©let kÃ¶zpontja a vÃ¡rosi mÃºzeum Ã©s a mÅ±vÃ©szeti galÃ©riÃ¡k, mÃ­g a gasztronÃ³mia kedvelÅ‘it a kÃ¶rnyÃ©kbeli kolbÃ¡sz- Ã©s hÃºsipari specialitÃ¡sok vonzzÃ¡k. A telepÃ¼lÃ©s rendezett tereivel, szobraival Ã©s barÃ¡tsÃ¡gos alfÃ¶ldi hangulatÃ¡val ideÃ¡lis helyszÃ­n a regenerÃ¡lÃ³dÃ¡sra Ã©s a dÃ©l-alfÃ¶ldi kultÃºra felfedezÃ©sÃ©re.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wird oft als 'Perle der Tiefebene' bezeichnet.", "Wichtiges Zentrum der Glasindustrie."], "hu": ["Gyakran az 'AlfÃ¶ld gyÃ¶ngyszemekÃ©nt' emlegetik.", "Az Ã¼vegipar fontos kÃ¶zpontja."], "ro": ["Adesea numit 'Perla CÃ¢mpii'.", "Centru important al industriei sticlei."], "en": ["Often referred to as the 'Pearl of the Lowlands'.", "Important center of the glass industry."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "GyopÃ¡rosfÃ¼rdÅ‘ vize 1999-ben kapta meg hivatalosan a gyÃ³gyvÃ­z minÅ‘sÃ­tÃ©st.",
        "OroshÃ¡za az orszÃ¡g egyik legfontosabb Ã¼vegipari kÃ¶zpontja, ahol tÃ¶bb mint 150 Ã©ve folyik gyÃ¡rtÃ¡s.",
        "A vÃ¡ros hÃ­res a Darvas-kÃºriÃ¡rÃ³l, amely a kÃ¶rnyÃ©k egyik legszebb klasszicista Ã©pÃ¼lete.",
        "A SzÃ¡ntÃ³ KovÃ¡cs JÃ¡nos MÃºzeumban lÃ¡thatÃ³ az orszÃ¡g egyik leggazdagabb paraszti kocsi-gyÅ±jtemÃ©nye.",
        "GyopÃ¡rosfÃ¼rdÅ‘ tÃ³rendszere hÃ¡rom tÃ³bÃ³l Ã¡ll, amelyek Ã¶sszesen 6 hektÃ¡r felÃ¼letÅ±ek."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mezohegyes",
    type: "city",
    parent: "HU-BE",
    coords: [20.8167, 46.3167],
    name: {"de": "MezÅ‘hegyes", "hu": "MezÅ‘hegyes", "ro": "MezÅ‘hegyes", "en": "MezÅ‘hegyes"},
    description: {"de": "Stadt bekannt fÃ¼r ihr staatliches GestÃ¼t und ihre reiche Pferdezuchttradition.", "hu": "Ãllami mÃ©nesbirtokÃ¡rÃ³l Ã©s gazdag lÃ³tartÃ¡si hagyomÃ¡nyairÃ³l ismert vÃ¡ros.", "ro": "OraÈ™ cunoscut pentru herghelia sa de stat È™i bogata tradiÈ›ie Ã®n creÈ™terea cailor.", "en": "Town known for its state stud farm and rich horse-breeding tradition."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "MezÅ‘hegyes egyedÃ¼lÃ¡llÃ³ 'vÃ¡ros az orszÃ¡gban', amelynek tÃ¶rtÃ©nete szorosan Ã¶sszefonÃ³dik a hÃ­res Ã¡llami mÃ©nesbirtokkal. A telepÃ¼lÃ©st II. JÃ³zsef csÃ¡szÃ¡r alapÃ­totta 1784-ben mint katonai mÃ©nest, s azÃ³ta a magyar lÃ³tenyÃ©sztÃ©s egyik legfontosabb fellegvÃ¡ra. MezÅ‘hegyes Ã©pÃ­tÃ©szeti kÃ©pe rendkÃ­vÃ¼l kÃ¼lÃ¶nleges: a vÃ¡ros egysÃ©ges klasszicista Ã©s empire stÃ­lusÃº Ã©pÃ¼letei, a monumentÃ¡lis istÃ¡llÃ³k Ã©s a lovaspÃ¡lyÃ¡k egy letÅ±nt kor eleganciÃ¡jÃ¡t hirdetik. Itt tenyÃ©sztettÃ©k ki a nÃ³niusz, a gidrÃ¡n Ã©s a furioso-north star lÃ³fajtÃ¡kat, amelyek ma is a magyar bÃ¼szkesÃ©gek kÃ¶zÃ© tartoznak. A terÃ¼let ma Nemzeti MÃ©nesbirtok Ã©s TangazdasÃ¡gkÃ©nt mÅ±kÃ¶dik, s kulturÃ¡lis-turisztikai esemÃ©nyeivel, lovasversenyeivel vonzza a lÃ¡togatÃ³kat.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["GegrÃ¼ndet 1784 von Kaiser Joseph II.", "Die Architektur der Stadt ist einzigartig in Ungarn."], "hu": ["1784-ben alapÃ­totta II. JÃ³zsef csÃ¡szÃ¡r.", "A vÃ¡ros Ã©pÃ­tÃ©szete egyedÃ¼lÃ¡llÃ³ MagyarorszÃ¡gon."], "ro": ["Fondat Ã®n 1784 de Ã®mpÄƒratul Iosif al II-lea.", "Arhitectura oraÈ™ului este unicÄƒ Ã®n Ungaria."], "en": ["Founded in 1784 by Emperor Joseph II.", "The town's architecture is unique in Hungary."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A mezÅ‘hegyesi mÃ©nesbirtok az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi vÃ¡romÃ¡nyos listÃ¡jÃ¡n szerepel.",
        "Itt talÃ¡lhatÃ³ az orszÃ¡g egyik legnagyobb fedett lovardÃ¡ja.",
        "A telepÃ¼lÃ©sen 54 mÅ±emlÃ©k Ã©pÃ¼let talÃ¡lhatÃ³, amelyek tÃ¶bbsÃ©ge a mÃ©nesbirtokhoz kapcsolÃ³dik.",
        "MezÅ‘hegyes hÃ­res a nÃ³niusz lÃ³fajtÃ¡rÃ³l, amelyet 'magyar lÃ³nak' is neveznek ereje Ã©s nemessÃ©ge miatt.",
        "A vÃ¡ros parkjai Ã©s platÃ¡nsorai az orszÃ¡g egyik legszebb tÃ¡jÃ©pÃ­tÃ©szeti egyÃ¼ttesÃ©t alkotjÃ¡k."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "sarospatak",
    type: "city",
    parent: "HU-BZ",
    coords: [21.5667, 48.3167],
    name: {"de": "Scharoschpatak", "hu": "SÃ¡rospatak", "ro": "SÃ¡rospatak", "en": "SÃ¡rospatak"},
    description: {"de": "Historische Stadt am Fluss Bodrog, bekannt fÃ¼r ihre Renaissanceburg und das Kollegium.", "hu": "TÃ¶rtÃ©nelmi vÃ¡ros a Bodrog partjÃ¡n, reneszÃ¡nsz vÃ¡rÃ¡rÃ³l Ã©s kollÃ©giumÃ¡rÃ³l ismert.", "ro": "OraÈ™ istoric pe rÃ¢ul Bodrog, cunoscut pentru castelul sÄƒu renascentist È™i colegiu.", "en": "Historic town on the Bodrog river, known for its Renaissance castle and college."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "SÃ¡rospatak, a 'Bodrog-parti AthÃ©n', a magyar mÅ±velÅ‘dÃ©stÃ¶rtÃ©net Ã©s oktatÃ¡s egyik legfontosabb kÃ¶zpontja Borsod-AbaÃºj-ZemplÃ©n vÃ¡rmegyÃ©ben. A vÃ¡ros szimbÃ³luma a RÃ¡kÃ³czi-vÃ¡r, a magyarorszÃ¡gi kÃ©sÅ‘ reneszÃ¡nsz Ã©pÃ­tÃ©szet legÃ©rtÃ©kesebb alkotÃ¡sa, amely a hÃ­res erdÃ©lyi fejedelmi csalÃ¡d szÃ©khelye volt. A vÃ¡r falai kÃ¶zÃ¶tt ma mÃºzeum mÅ±kÃ¶dik, bemutatva a RÃ¡kÃ³czi-szabadsÃ¡gharc emlÃ©keit. SÃ¡rospatak mÃ¡sik bÃ¼szkesÃ©ge a ReformÃ¡tus KollÃ©gium, ahol tÃ¶bb Ã©vszÃ¡zadon Ã¡t tanultak a magyar szellemi Ã©let kivÃ¡lÃ³sÃ¡gai, s amelynek kÃ¶nyvtÃ¡ra felbecsÃ¼lhetetlen Ã©rtÃ©keket Å‘riz. A Bodrog folyÃ³, a kÃ¶zeli Megyer-hegyi tengerszem Ã©s a ZemplÃ©ni-hegysÃ©g kÃ¶zelsÃ©ge a termÃ©szetjÃ¡rÃ³k szÃ¡mÃ¡ra is vonzÃ³vÃ¡ teszi ezt a tÃ¶rtÃ©nelmi vÃ¡rost.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wird oft als 'Athen am Bodrog' bezeichnet.", "Die Burg RÃ¡kÃ³czi ist ein bedeutendes Denkmal."], "hu": ["Gyakran 'Bodrog-parti AthÃ©nkÃ©nt' emlegetik.", "A RÃ¡kÃ³czi-vÃ¡r jelentÅ‘s mÅ±emlÃ©k."], "ro": ["Adesea numit 'Atena de pe Bodrog'.", "Castelul RÃ¡kÃ³czi este un monument important."], "en": ["Often called 'Athens on the Bodrog'.", "The RÃ¡kÃ³czi Castle is a significant monument."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A sÃ¡rospataki RÃ¡kÃ³czi-vÃ¡r szerepel az 500 forintos bankjegy hÃ¡toldalÃ¡n.",
        "A ReformÃ¡tus KollÃ©giumot 1531-ben alapÃ­tottÃ¡k, MagyarorszÃ¡g egyik legrÃ©gebbi iskolÃ¡ja.",
        "Itt Ã©lt Ã©s tanÃ­tott a hÃ­res pedagÃ³gus, Comenius, a 17. szÃ¡zad kÃ¶zepÃ©n.",
        "A kÃ¶zeli Megyer-hegyi tengerszem az orszÃ¡g egyik legszebb termÃ©szeti lÃ¡tvÃ¡nyossÃ¡ga, egy rÃ©gi kÅ‘bÃ¡nya helyÃ©n alakult ki.",
        "SÃ¡rospatak a Tokaji borvidÃ©k Ã©szaki kapuja, hÃ­res pincÃ©szeteirÅ‘l Ã©s borairÃ³l."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "lillafured",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.6167, 48.1],
    name: {"de": "LillafÃ¼red", "hu": "LillafÃ¼red", "ro": "LillafÃ¼red", "en": "LillafÃ¼red"},
    description: {"de": "Malerischer Ferienort im BÃ¼kk-Gebirge, bekannt fÃ¼r sein Schlosshotel und den Wasserfall.", "hu": "FestÅ‘i Ã¼dÃ¼lÅ‘hely a BÃ¼kkben, kastÃ©lyszÃ¡llÃ³jÃ¡rÃ³l Ã©s vÃ­zesÃ©sÃ©rÅ‘l ismert.", "ro": "StaÈ›iune pitoreascÄƒ Ã®n munÈ›ii BÃ¼kk, cunoscutÄƒ pentru hotelul sÄƒu castel È™i cascadÄƒ.", "en": "Picturesque resort in the BÃ¼kk Mountains, known for its castle hotel and waterfall."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "LillafÃ¼red MagyarorszÃ¡g egyik legfestÅ‘ibb hegyvidÃ©ki Ã¼dÃ¼lÅ‘helye Miskolc mellett, a BÃ¼kk-hegysÃ©g keleti kapujÃ¡ban. KÃ¶zponti lÃ¡tvÃ¡nyossÃ¡ga a monumentÃ¡lis neoreneszÃ¡nsz stÃ­lusÃº PalotaszÃ¡llÃ³, amely a HÃ¡mori-tÃ³ partjÃ¡n, meredek sziklÃ¡kkal kÃ¶rÃ¼lvett vÃ¶lgyben Ã©pÃ¼lt fel az 1920-as Ã©vekben. A szÃ¡llÃ³ alatti fÃ¼ggÅ‘kert, a vÃ­zesÃ©s (amely az orszÃ¡g legmagasabbja) Ã©s a kÃ¶zeli cseppkÅ‘barlangok (Anna- Ã©s Szent IstvÃ¡n-barlang) egyedÃ¼lÃ¡llÃ³ romantikus atmoszfÃ©rÃ¡t teremtenek. LillafÃ¼red kedvelt cÃ©lpontja a kirÃ¡ndulÃ³knak, a kisvasÃºt szerelmeseinek Ã©s a csÃ³nakÃ¡zni vÃ¡gyÃ³knak. A vÃ¶lgy kÃ¼lÃ¶nleges mikroklÃ­mÃ¡ja Ã©s a tiszta hegyi levegÅ‘ gyÃ³gyÃ­tÃ³ ereje miatt is keresett cÃ©lpont minden Ã©vszakban.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Hier befindet sich der hÃ¶chste Wasserfall Ungarns.", "Der HÃ¡mori-See bietet MÃ¶glichkeiten zum Bootfahren."], "hu": ["Itt talÃ¡lhatÃ³ MagyarorszÃ¡g legmagasabb vÃ­zesÃ©se.", "A HÃ¡mori-tÃ³ csÃ³nakÃ¡zÃ¡si lehetÅ‘sÃ©get kÃ­nÃ¡l."], "ro": ["Aici se aflÄƒ cea mai Ã®naltÄƒ cascadÄƒ din Ungaria.", "Lacul HÃ¡mori oferÄƒ posibilitÄƒÈ›i de plimbare cu barca."], "en": ["Home to the highest waterfall in Hungary.", "Lake HÃ¡mori offers boating opportunities."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A lillafÃ¼redi vÃ­zesÃ©s 20 mÃ©ter magas, Ã©s mestersÃ©gesen alakÃ­tottÃ¡k ki a Szinva-patak elterelÃ©sÃ©vel.",
        "A PalotaszÃ¡llÃ³ Ã©pÃ­tÃ©sÃ©hez szÃ¼ksÃ©ges kÃ¶veket a kÃ¶rnyezÅ‘ hegyekbÅ‘l bÃ¡nyÃ¡sztÃ¡k.",
        "Itt talÃ¡lhatÃ³ az Anna-barlang, amely egy ritka Ã©desvÃ­zi mÃ©sztufa-barlang.",
        "A HÃ¡mori-tÃ³ eredetileg a vasmÅ±vek vÃ­zellÃ¡tÃ¡sÃ¡ra lÃ©trehozott mestersÃ©ges tÃ¡rozÃ³ volt.",
        "LillafÃ¼red a nÃ©pszerÅ± LillafÃ¼redi Ãllami Erdei VasÃºt egyik legszebb megÃ¡llÃ³helye."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "opusztaszer",
    type: "landmark",
    parent: "HU-CS",
    coords: [20.0833, 46.4833],
    name: {"de": "Ã“pusztaszer", "hu": "Ã“pusztaszer", "ro": "Ã“pusztaszer", "en": "Ã“pusztaszer"},
    description: {"de": "Nationaler Historischer Gedenkpark, Ort der ersten ungarischen Nationalversammlung.", "hu": "Nemzeti TÃ¶rtÃ©neti EmlÃ©kpark, az elsÅ‘ magyar orszÃ¡ggyÅ±lÃ©s helyszÃ­ne.", "ro": "Parcul Memorial Istoric NaÈ›ional, locul primei adunÄƒri naÈ›ionale maghiare.", "en": "National Historical Memorial Park, site of the first Hungarian national assembly."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Ã“pusztaszer a magyar nemzet tÃ¶rtÃ©nelmi bÃ¶lcsÅ‘je, az a hely, ahol a hagyomÃ¡ny szerint ÃrpÃ¡d vezÃ©r Ã©s a tÃ¶rzsfÅ‘k megtartottÃ¡k az elsÅ‘ orszÃ¡ggyÅ±lÃ©st a honfoglalÃ¡s utÃ¡n. A Nemzeti TÃ¶rtÃ©neti EmlÃ©kpark legfontosabb lÃ¡tnivalÃ³ja a Feszty-kÃ¶rkÃ©p, a monumentÃ¡lis panorÃ¡makÃ©p, amely a magyarok bejÃ¶vetelÃ©t Ã¡brÃ¡zolja lenyÅ±gÃ¶zÅ‘ rÃ©szletessÃ©ggel. Az emlÃ©kpark terÃ¼letÃ©n skanzen (szabadtÃ©ri nÃ©prajzi mÃºzeum), honfoglalÃ¡s kori bemutatÃ³k Ã©s a monostor romjai is megtalÃ¡lhatÃ³k. Ã“pusztaszer nemcsak mÃºzeum, hanem a nemzeti Ã¶sszetartozÃ¡s szimbÃ³luma is, ahol minden Ã©vben ezrek emlÃ©keznek meg a magyar Ã¡llamisÃ¡g gyÃ¶kereirÅ‘l. A park interaktÃ­v mÃ³don, minden korosztÃ¡ly szÃ¡mÃ¡ra Ã©lvezetesen mutatja be mÃºltunkat Ã©s nÃ©pi hagyomÃ¡nyainkat.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Beherbergt das Feszty-Panorama-GemÃ¤lde.", "Ein wichtiges Symbol der ungarischen IdentitÃ¤t."], "hu": ["Itt lÃ¡thatÃ³ a Feszty-kÃ¶rkÃ©p.", "A magyar identitÃ¡s fontos szimbÃ³luma."], "ro": ["GÄƒzduieÈ™te pictura panoramicÄƒ Feszty.", "Un simbol important al identitÄƒÈ›ii maghiare."], "en": ["Houses the Feszty Panorama painting.", "An important symbol of Hungarian identity."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Feszty-kÃ¶rkÃ©p (A magyarok bejÃ¶vetele) 120 mÃ©ter hosszÃº Ã©s 15 mÃ©ter magas falfestmÃ©ny.",
        "A parkban talÃ¡lhatÃ³ az ÃrpÃ¡d-emlÃ©kmÅ±, amelyet 1896-ban emeltek a millennium tiszteletÃ©re.",
        "A skanzen a dÃ©l-alfÃ¶ldi falvak nÃ©pi Ã©pÃ­tÃ©szetÃ©t mutatja be, mÅ±kÃ¶dÅ‘ szÃ©lmalommal.",
        "Az emlÃ©kpark terÃ¼letÃ©n lÃ¡thatÃ³ a Szer monostorÃ¡nak romkertje, amely egykor fontos vallÃ¡si kÃ¶zpont volt.",
        "A NomÃ¡d Parkban lovasbemutatÃ³k Ã©s honfoglalÃ¡s kori Ã­jÃ¡szat vÃ¡rja a lÃ¡togatÃ³kat."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "csongrad-city",
    type: "city",
    parent: "HU-CS",
    coords: [20.15, 46.7167],
    name: {"de": "CsongrÃ¡d", "hu": "CsongrÃ¡d", "ro": "CsongrÃ¡d", "en": "CsongrÃ¡d"},
    description: {"de": "Stadt an der MÃ¼ndung der KÃ¶rÃ¶s in die TheiÃŸ, bekannt fÃ¼r ihre Altstadt und den Sandstrand.", "hu": "VÃ¡ros a KÃ¶rÃ¶s tiszai torkolatÃ¡nÃ¡l, Ã³vÃ¡rosÃ¡rÃ³l Ã©s homokos strandjÃ¡rÃ³l ismert.", "ro": "OraÈ™ la confluenÈ›a rÃ¢urilor KÃ¶rÃ¶s È™i Tisa, cunoscut pentru oraÈ™ul vechi È™i plaja de nisip.", "en": "City at the confluence of the KÃ¶rÃ¶s and Tisza rivers, known for its old town and sandy beach."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "CsongrÃ¡d a Tisza partjÃ¡n fekvÅ‘ vÃ¡ros, amely leginkÃ¡bb a folyÃ³hoz kapcsolÃ³dÃ³ kÃ¼lÃ¶nleges Ã©letmÃ³djÃ¡rÃ³l Ã©s hangulatos tÃ¶rtÃ©nelmi vÃ¡rosrÃ©szÃ©rÅ‘l ismert. A vÃ¡ros Ã©kkÃ¶ve a 'BelvÃ¡ros' (vagy Ã“vÃ¡ros), amely nÃ¡dtetÅ‘s hÃ¡zaival Ã©s kanyargÃ³s utcÃ¡ival egy 18. szÃ¡zadi halÃ¡szfalu hangulatÃ¡t Å‘rizte meg Ã©rintetlenÃ¼l. CsongrÃ¡d mÃ¡sik hÃ­res lÃ¡tnivalÃ³ja a KÃ¶rÃ¶s-torok, a Tisza-part egyik legszebb homokos strandja, amely nyaranta igazi tengerparti Ã©letÃ©rzÃ©st nyÃºjt a lÃ¡togatÃ³knak. A vÃ¡ros hÃ­res borÃ¡szatÃ¡rÃ³l is, kÃ¼lÃ¶nÃ¶sen a CsongrÃ¡di borvidÃ©k vÃ¶rÃ¶sborai (mint a Kadarka) emelkednek ki. A Tisza folyÃ³ kÃ¶zelsÃ©ge, az Ã¡rtÃ©ri erdÅ‘k Ã©s a csendes kisvÃ¡rosi atmoszfÃ©ra teszi CsongrÃ¡dot a lassÃº turizmus egyik kedvelt magyarorszÃ¡gi helyszÃ­nÃ©vÃ©.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der Stadtteil 'BelvÃ¡ros' bewahrt die traditionelle Architektur.", "Beliebter Ort fÃ¼r Wassersportler."], "hu": ["A 'BelvÃ¡ros' vÃ¡rosrÃ©sz Å‘rzi a hagyomÃ¡nyos Ã©pÃ­tÃ©szetet.", "NÃ©pszerÅ± hely a vÃ­zisportok kedvelÅ‘i kÃ¶rÃ©ben."], "ro": ["Cartierul 'BelvÃ¡ros' pÄƒstreazÄƒ arhitectura tradiÈ›ionalÄƒ.", "Loc popular pentru pasionaÈ›ii de sporturi nautice."], "en": ["The 'BelvÃ¡ros' district preserves traditional architecture.", "Popular spot for water sports enthusiasts."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "A csongrÃ¡di BelvÃ¡ros hÃ¡zai mÅ±emlÃ©ki vÃ©dettsÃ©g alatt Ã¡llnak, ma is lakottak vagy vendÃ©ghÃ¡zkÃ©nt mÅ±kÃ¶dnek.",
        "A KÃ¶rÃ¶s-toroki homokpad a Tisza alacsony vÃ­zÃ¡llÃ¡sakor vÃ¡lik lÃ¡thatÃ³vÃ¡ Ã©s hasznÃ¡lhatÃ³vÃ¡.",
        "A vÃ¡ros nevÃ©t a kÃ¶zeli szlÃ¡v 'CsernigrÃ¡d' (fekete vÃ¡r) elnevezÃ©srÅ‘l kapta.",
        "Itt talÃ¡lhatÃ³ a Szent RÃ³kus templom, amely a vÃ¡ros egyik legrÃ©gebbi barokk Ã©pÃ¼lete.",
        "CsongrÃ¡d hÃ­res a tiszai halÃ¡szlevesÃ©rÅ‘l, amelyet hagyomÃ¡nyosan bogrÃ¡csban kÃ©szÃ­tenek a parton."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mor",
    type: "city",
    parent: "HU-FE",
    coords: [18.2, 47.3667],
    name: {"de": "Moor", "hu": "MÃ³r", "ro": "MÃ³r", "en": "MÃ³r"},
    description: {"de": "Stadt im VÃ©rtes-Gebirge, Zentrum einer berÃ¼hmten WeiÃŸweinregion.", "hu": "VÃ¡ros a VÃ©rtes lÃ¡bÃ¡nÃ¡l, egy hÃ­res fehÃ©rborvidÃ©k kÃ¶zpontja.", "ro": "OraÈ™ Ã®n munÈ›ii VÃ©rtes, centrul unei faimoase regiuni de vin alb.", "en": "City in the VÃ©rtes Mountains, center of a famous white wine region."},
    descriptionAdvanced: {
      "de": "MÃ³r, eingebettet zwischen dem VÃ©rtes- und Bakony-Gebirge, ist das Zentrum einer der kleinsten, aber angesehensten Weinregionen Ungarns. Die Stadt blickt auf eine lange Tradition des Weinbaus zurÃ¼ck, die vor allem durch die Ansiedlung deutscher Siedler im 18. Jahrhundert geprÃ¤gt wurde. WeltberÃ¼hmt ist MÃ³r fÃ¼r die Rebsorte 'EzerjÃ³', aus der charaktervolle, sÃ¤urereiche WeiÃŸweine gekeltert werden. Das barocke Lamberg-Schloss im Stadtzentrum ist ein kulturelles Juwel und beherbergt Ausstellungen zur Lokalgeschichte und Weinbaukultur. Jedes Jahr im Oktober locken die MÃ³rer Weintage Zehntausende Besucher an, die die edlen Tropfen in den vielen Weinkellern verkosten. Die umliegende HÃ¼gellandschaft bietet zudem hervorragende Bedingungen fÃ¼r Wanderer und Naturliebhaber.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["MÃ³r ist die Heimat der einzigartigen ungarischen Rebsorte 'EzerjÃ³'.", "Das Lamberg-Schloss wurde vom berÃ¼hmten Architekten Franz Anton Hillebrandt entworfen.", "Die MÃ³rer Weintage sind eines der Ã¤ltesten und grÃ¶ÃŸten Weinfeste in Transdanubien.", "In der Stadt lebt eine bedeutende deutsche Minderheit, die den Weinbau maÃŸgeblich prÃ¤gte."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r die Rebsorte 'EzerjÃ³'.", "Veranstaltet jÃ¤hrlich die MÃ³rer Weintage."], "hu": ["Az 'EzerjÃ³' szÅ‘lÅ‘fajtÃ¡rÃ³l ismert.", "Ã‰vente megrendezik a MÃ³ri Bornapokat."], "ro": ["Cunoscut pentru soiul de struguri 'EzerjÃ³'.", "GÄƒzduieÈ™te anual Zilele Vinului din MÃ³r."], "en": ["Known for the 'EzerjÃ³' grape variety.", "Hosts the annual MÃ³r Wine Days."]},
  },
  {
    id: "martonvasar",
    type: "city",
    parent: "HU-FE",
    coords: [18.7833, 47.3167],
    name: {"de": "Martonwaschar", "hu": "MartonvÃ¡sÃ¡r", "ro": "MartonvÃ¡sÃ¡r", "en": "MartonvÃ¡sÃ¡r"},
    description: {"de": "Stadt bekannt fÃ¼r das neugotische Schloss Brunszvik und seine Verbindung zu Beethoven.", "hu": "A neogÃ³tikus Brunszvik-kastÃ©lyrÃ³l Ã©s Beethovenhez fÅ±zÅ‘dÅ‘ kapcsolatÃ¡rÃ³l ismert vÃ¡ros.", "ro": "OraÈ™ cunoscut pentru castelul neogotic Brunszvik È™i legÄƒtura sa cu Beethoven.", "en": "Town known for the neo-Gothic Brunszvik Castle and its connection to Beethoven."},
    descriptionAdvanced: {
      "de": "MartonvÃ¡sÃ¡r ist landesweit bekannt fÃ¼r das prÃ¤chtige Schloss Brunszvik, das als das 'ungarische Zentrum der Beethoven-Pflege' gilt. Das Schloss wurde im neugotischen Stil umgebaut und ist von einem der schÃ¶nsten englischen GÃ¤rten Ungarns umgeben, in dessen Mitte ein idyllischer See mit einer Insel liegt. Ludwig van Beethoven war ein enger Freund der Familie Brunszvik und verbrachte hier mehrere Sommer, wobei er angeblich einige seiner berÃ¼hmten Werke in dieser inspirierenden Umgebung komponierte. Heute beherbergt das Schloss ein Beethoven-Museum und ist Sitz des Agrarwissenschaftlichen Forschungszentrums der Ungarischen Akademie der Wissenschaften. Im Sommer finden auf der Insel im Schlosspark regelmÃ¤ÃŸig klassische Konzerte statt, die die Verbindung zwischen dem Genie und diesem romantischen Ort feiern. MartonvÃ¡sÃ¡r ist ein Ort, an dem sich Musikgeschichte, Architektur und Natur auf harmonische Weise vereinen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss Brunszvik in MartonvÃ¡sÃ¡r ist ein herausragendes Beispiel der ungarischen Neugotik.", "Ludwig van Beethoven widmete seine berÃ¼hmte 'Appassionata'-Sonate dem Grafen Franz Brunszvik.", "Auf der Insel im Schlosspark finden seit 1958 jÃ¤hrlich Beethoven-Gedenkkonzerte statt.", "Die Stadt beherbergt zudem das erste Kindergartnmuseum Ungarns, gegrÃ¼ndet zu Ehren von Therese Brunszvik."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Beethoven war oft Gast im Schloss.", "Beherbergt ein Beethoven-Gedenkmuseum."], "hu": ["Beethoven gyakori vendÃ©g volt a kastÃ©lyban.", "Beethoven-emlÃ©kmÃºzeumnak ad otthont."], "ro": ["Beethoven a fost adesea oaspete la castel.", "GÄƒzduieÈ™te un muzeu memorial Beethoven."], "en": ["Beethoven was a frequent guest at the castle.", "Houses a Beethoven Memorial Museum."]},
  },
  {
    id: "mosonmagyarovar",
    type: "city",
    parent: "HU-GS",
    coords: [17.2667, 47.8667],
    name: {"de": "Wieselburg-Ungarisch Altenburg", "hu": "MosonmagyarÃ³vÃ¡r", "ro": "MosonmagyarÃ³vÃ¡r", "en": "MosonmagyarÃ³vÃ¡r"},
    description: {"de": "Stadt an der Grenze zu Ã–sterreich und der Slowakei, bekannt fÃ¼r ihr Thermalbad.", "hu": "VÃ¡ros az osztrÃ¡k Ã©s szlovÃ¡k hatÃ¡r kÃ¶zelÃ©ben, termÃ¡lfÃ¼rdÅ‘jÃ©rÅ‘l ismert.", "ro": "OraÈ™ lÃ¢ngÄƒ graniÈ›a cu Austria È™i Slovacia, cunoscut pentru baia sa termalÄƒ.", "en": "City near the Austrian and Slovak borders, known for its thermal bath."},
    descriptionAdvanced: {
      "de": "MosonmagyarÃ³vÃ¡r, im Nordwesten Ungarns nahe der Ã¶sterreichischen und slowakischen Grenze gelegen, ist eine Stadt von historischer Bedeutung und moderner Heilkraft. Die Stadt entstand durch die Vereinigung von Moson und MagyarÃ³vÃ¡r und wird von mehreren Armen der Leitha und der Moson-Donau durchzogen. Das absolute Wahrzeichen ist die mÃ¤chtige Burg, die heute die renommierte AgrarfakultÃ¤t der UniversitÃ¤t beherbergt. MosonmagyarÃ³vÃ¡r ist zudem weltweit bekannt fÃ¼r sein Heilwasser, das zu den fÃ¼nf wirksamsten in Europa zÃ¤hlt und jÃ¤hrlich zahlreiche KurgÃ¤ste anzieht. Die historische Altstadt mit ihren barocken HÃ¤usern und gemÃ¼tlichen Restaurants lÃ¤dt zum Verweilen und Entdecken ein. Die strategische Lage im DreilÃ¤ndereck macht die Stadt zu einem wichtigen wirtschaftlichen und touristischen Knotenpunkt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Heilwasser von MosonmagyarÃ³vÃ¡r zÃ¤hlt laut Experten zu den wirksamsten in ganz Europa.", "Die Burg der Stadt beherbergt eine der Ã¤ltesten landwirtschaftlichen Bildungseinrichtungen der Welt.", "Die Stadt liegt im SzigetkÃ¶z, einer einzigartigen Flusslandschaft mit reicher Natur.", "MosonmagyarÃ³vÃ¡r ist ein bedeutendes Zentrum fÃ¼r Medizintourismus, insbesondere fÃ¼r Zahnheilkunde."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wichtiges Zentrum fÃ¼r Zahnmedizintourismus.", "Hat eine bedeutende landwirtschaftliche UniversitÃ¤t."], "hu": ["A fogÃ¡szati turizmus fontos kÃ¶zpontja.", "JelentÅ‘s agrÃ¡r-egyetemmel rendelkezik."], "ro": ["Centru important pentru turismul stomatologic.", "Are o universitate agricolÄƒ importantÄƒ."], "en": ["Important center for dental tourism.", "Has a significant agricultural university."]},
  },
  {
    id: "fertod",
    type: "city",
    parent: "HU-GS",
    coords: [16.8667, 47.6167],
    name: {"de": "FertÅ‘d", "hu": "FertÅ‘d", "ro": "FertÅ‘d", "en": "FertÅ‘d"},
    image: "/geo-images/hungary/fertod.webp",
    description: {"de": "Stadt bekannt fÃ¼r das Schloss EsterhÃ¡zy, das 'ungarische Versailles'.", "hu": "Az EsterhÃ¡zy-kastÃ©lyrÃ³l, a 'magyar Versailles-rÃ³l' ismert vÃ¡ros.", "ro": "OraÈ™ cunoscut pentru Castelul EsterhÃ¡zy, 'Versailles-ul maghiar'.", "en": "Town known for the EsterhÃ¡zy Palace, the 'Hungarian Versailles'."},
    descriptionAdvanced: {
      "de": "FertÅ‘d ist weltberÃ¼hmt fÃ¼r das Schloss EsterhÃ¡zy, das oft als das 'ungarische Versailles' bezeichnet wird und eines der bedeutendsten Barockensembles Mitteleuropas ist. Das Schloss besticht durch seine enorme GrÃ¶ÃŸe, den prachtvollen Festsaal und die reich verzierten Fassaden, die den einstigen Reichtum der FÃ¼rsten EsterhÃ¡zy widerspiegeln. Ãœber fast drei Jahrzehnte wirkte hier der berÃ¼hmte Komponist Joseph Haydn als Kapellmeister und schuf im Dienste des FÃ¼rsten 'Prachtliebender Nikolaus' einen GroÃŸteil seines Lebenswerks. Der weitlÃ¤ufige Schlosspark und das angrenzende Marionettentheater zeugen von der glanzvollen hÃ¶fischen Kultur des 18. Jahrhunderts. FertÅ‘d liegt zudem am Rande des Nationalparks FertÅ‘-HansÃ¡g, der Teil des UNESCO-Weltkulturerbes ist. Ein Besuch in FertÅ‘d bietet einen faszinierenden Einblick in die barocke Pracht und die Musikgeschichte von Weltrang.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Schloss EsterhÃ¡zy in FertÅ‘d ist das grÃ¶ÃŸte und prÃ¤chtigste Barockschloss in Ungarn.", "Joseph Haydn lebte und arbeitete fast 30 Jahre lang als Hofkomponist in diesem Schloss.", "Das Schloss besitzt 126 reich dekorierte Zimmer und einen prÃ¤chtigen Festsaal.", "JÃ¤hrlich findet in FertÅ‘d das internationale Haydn-Festival mit hochrangigen Musikern statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Joseph Haydn lebte und arbeitete hier viele Jahre.", "Das Schloss ist ein Meisterwerk des Rokoko."], "hu": ["Joseph Haydn sok Ã©ven Ã¡t Ã©lt Ã©s dolgozott itt.", "A kastÃ©ly a rokokÃ³ remekmÅ±ve."], "ro": ["Joseph Haydn a trÄƒit È™i a lucrat aici mulÈ›i ani.", "Castelul este o capodoperÄƒ a stilului rococo."], "en": ["Joseph Haydn lived and worked here for many years.", "The palace is a masterpiece of Rococo architecture."]},
  },
  {
    id: "hajduboszormeny",
    type: "city",
    parent: "HU-HB",
    coords: [21.5167, 47.6667],
    name: {"de": "HajdÃºbÃ¶szÃ¶rmÃ©ny", "hu": "HajdÃºbÃ¶szÃ¶rmÃ©ny", "ro": "HajdÃºbÃ¶szÃ¶rmÃ©ny", "en": "HajdÃºbÃ¶szÃ¶rmÃ©ny"},
    description: {"de": "Die grÃ¶ÃŸte der HajdÃº-StÃ¤dte mit einer einzigartigen kreisfÃ¶rmigen Stadtstruktur.", "hu": "A legnagyobb hajdÃºvÃ¡ros, egyedÃ¼lÃ¡llÃ³ kÃ¶rgyÅ±rÅ±s vÃ¡rosszerkezettel.", "ro": "Cel mai mare dintre oraÈ™ele HajdÃº, cu o structurÄƒ urbanÄƒ circularÄƒ unicÄƒ.", "en": "The largest of the HajdÃº towns with a unique circular city structure."},
    descriptionAdvanced: {
      "de": "HajdÃºbÃ¶szÃ¶rmÃ©ny ist die grÃ¶ÃŸte und geschichtlich bedeutendste der sogenannten 'HaiduckenstÃ¤dte' in Ostungarn. Das Stadtbild ist einzigartig, da es eine kreisfÃ¶rmige Struktur aufweist, die ursprÃ¼nglich zu Verteidigungszwecken angelegt wurde und heute denkmalgeschÃ¼tzt ist. Die Haiducken, ursprÃ¼nglich berittene Viehhirten und spÃ¤ter Elitesoldaten, erhielten hier im 17. Jahrhundert von FÃ¼rst IstvÃ¡n Bocskai Land und Privilegien. Das Bocskai-IstvÃ¡n-Museum dokumentiert die faszinierende Geschichte dieser wehrhaften Gemeinschaft und zeigt wertvolle archÃ¤ologische Funde aus der Bronzezeit. Die Stadt bewahrt stolz ihre Traditionen und ist fÃ¼r ihre Gastfreundschaft sowie die typische Gastronomie der Tiefebene bekannt. HajdÃºbÃ¶szÃ¶rmÃ©ny strahlt eine ruhige, bodenstÃ¤ndige Kraft aus, die tief in der ungarischen Geschichte verwurzelt ist.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["HajdÃºbÃ¶szÃ¶rmÃ©ny besitzt eine einzigartige, kreisfÃ¶rmige Stadtstruktur aus der Haiduckenzeit.", "Die Stadt ist die 'Hauptstadt' der historischen Region der Haiducken (HajdÃºsÃ¡g).", "In der Stadt befindet sich eines der wichtigsten Museen fÃ¼r die Geschichte der Haiducken.", "Die Region ist bekannt fÃ¼r ihre fruchtbaren BÃ¶den und die traditionsreiche Landwirtschaft."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bewahrt die Traditionen der HajdÃº-Reiter.", "Wichtiges landwirtschaftliches Zentrum."], "hu": ["Årzi a hajdÃº hagyomÃ¡nyokat.", "Fontos mezÅ‘gazdasÃ¡gi kÃ¶zpont."], "ro": ["PÄƒstreazÄƒ tradiÈ›iile haiducilor (HajdÃº).", "Centru agricol important."], "en": ["Preserves the HajdÃº traditions.", "Important agricultural center."]},
  },
  {
    id: "berettyoujfalu",
    type: "city",
    parent: "HU-HB",
    coords: [21.5, 47.2167],
    name: {"de": "BerettyÃ³Ãºjfalu", "hu": "BerettyÃ³Ãºjfalu", "ro": "BerettyÃ³Ãºjfalu", "en": "BerettyÃ³Ãºjfalu"},
    description: {"de": "Stadt im Osten Ungarns, das Zentrum der Region Bihar.", "hu": "Kelet-magyarorszÃ¡gi vÃ¡ros, a Bihar rÃ©giÃ³ kÃ¶zpontja.", "ro": "OraÈ™ Ã®n estul Ungariei, centrul regiunii Bihar.", "en": "City in eastern Hungary, the center of the Bihar region."},
    descriptionAdvanced: {
      "de": "BerettyÃ³Ãºjfalu liegt im Osten Ungarns am Ufer des BerettyÃ³-Flusses und ist ein wichtiges regionales Zentrum zwischen Debrecen und der rumÃ¤nischen Grenze. Die Stadt blickt auf eine lange Geschichte zurÃ¼ck, die eng mit der Entwicklung des Handels und der Verwaltung im Komitat Bihar verbunden ist. Ein bedeutendes Wahrzeichen ist die Ruine von HerpÃ¡ly, ein imposanter Turm eines einstigen Klosters aus dem 12. Jahrhundert, der einsam in der Landschaft steht. Die Stadt bietet zudem moderne Erholung im Bihar-Heilbad, das fÃ¼r sein heilendes Thermalwasser und seine familienfreundliche AtmosphÃ¤re bekannt ist. BerettyÃ³Ãºjfalu pflegt intensiv seine kulturellen Traditionen und ist stolz auf seine Rolle als kulturelles Tor der Region. Die weite Landschaft der Umgebung bietet Ruhe und Entspannung fernab des Massentourismus.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Klosterruine von HerpÃ¡ly ist ein bedeutendes Zeugnis der romanischen Architektur in der Region.", "Die Stadt ist ein historischer Sitz der Verwaltung des Komitats Bihar.", "Das Bihar-Heilbad nutzt Thermalwasser aus einer Tiefe von Ã¼ber 600 Metern.", "BerettyÃ³Ãºjfalu liegt an einem strategisch wichtigen Verkehrsknotenpunkt nach SiebenbÃ¼rgen."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r sein Thermalbad.", "Wichtiger Verkehrsknotenpunkt nahe der Grenze."], "hu": ["TermÃ¡lfÃ¼rdÅ‘jÃ©rÅ‘l ismert.", "Fontos kÃ¶zlekedÃ©si csomÃ³pont a hatÃ¡r kÃ¶zelÃ©ben."], "ro": ["Cunoscut pentru baia sa termalÄƒ.", "Nod de transport important lÃ¢ngÄƒ graniÈ›Äƒ."], "en": ["Known for its thermal bath.", "Important transport hub near the border."]},
  },
  {
    id: "parad",
    type: "city",
    parent: "HU-HE",
    coords: [20.0333, 47.9167],
    name: {"de": "ParÃ¡d", "hu": "ParÃ¡d", "ro": "ParÃ¡d", "en": "ParÃ¡d"},
    image: "/geo-images/hungary/parad.webp",
    description: {"de": "Kurort im MÃ¡tra-Gebirge, bekannt fÃ¼r seine Heilquellen und das Kutschenmuseum.", "hu": "ÃœdÃ¼lÅ‘hely a MÃ¡trÃ¡ban, gyÃ³gyforrÃ¡sairÃ³l Ã©s kocsimÃºzeumÃ¡rÃ³l ismert.", "ro": "StaÈ›iune Ã®n munÈ›ii MÃ¡tra, cunoscutÄƒ pentru izvoarele sale curative È™i muzeul trÄƒsurilor.", "en": "Resort in the MÃ¡tra Mountains, known for its healing springs and carriage museum."},
    descriptionAdvanced: {
      "de": "ParÃ¡d, eingebettet in das malerische ParÃ¡d-Tal im MÃ¡tra-Gebirge, ist einer der traditionsreichsten Kurorte Ungarns, bekannt fÃ¼r seine vielfÃ¤ltigen Heilwasserquellen. Besonders berÃ¼hmt ist das 'ParÃ¡der Schwefelwasser', das seit Jahrhunderten zur Behandlung von Verdauungsbeschwerden genutzt wird. Der Ortsteil ParÃ¡dfÃ¼rdÅ‘ besticht durch seine historischen BadegebÃ¤ude und das imposante KÃ¡rolyi-Schloss, in dem das Mitte eines weitlÃ¤ufigen Arboretums liegt. Einzigartig ist das Kutschenmuseum in den ehemaligen herrschaftlichen Stallungen (Cifra IstÃ¡llÃ³), das eine weltweit bedeutende Sammlung historischer Fahrzeuge zeigt. Die Umgebung von ParÃ¡d bietet fantastische Wanderwege durch dichte WÃ¤lder und zu spektakulÃ¤ren Aussichtspunkten im hÃ¶chsten Gebirge Ungarns. Die Stadt verbindet auf charmante Weise alpine Frische mit kaiserlicher Kurtradition.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["ParÃ¡d ist landesweit bekannt fÃ¼r seine verschiedenen Heil- und Mineralwasserquellen.", "Das Kutschenmuseum 'Cifra IstÃ¡llÃ³' gilt als eines der schÃ¶nsten seiner Art weltweit.", "Das KÃ¡rolyi-Schloss in ParÃ¡dfÃ¼rdÅ‘ war einst eine prachtvolle Jagdresidenz.", "In ParÃ¡d wird noch heute die traditionelle Glasmacherkunst in kleinen WerkstÃ¤tten gepflegt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das ParÃ¡der Schwefelwasser ist landesweit bekannt.", "Beherbergt das Cifra-StallgebÃ¤ude."], "hu": ["A parÃ¡di kÃ©nes vÃ­z orszÃ¡gszerte ismert.", "Itt talÃ¡lhatÃ³ a Cifra-istÃ¡llÃ³."], "ro": ["Apa sulfuroasÄƒ de ParÃ¡d este cunoscutÄƒ Ã®n toatÄƒ È›ara.", "GÄƒzduieÈ™te clÄƒdirea Cifra-istÃ¡llÃ³."], "en": ["The sulfurous water of ParÃ¡d is known nationwide.", "Home to the Cifra Stable building."]},
  },
  {
    id: "belapatfalva",
    type: "city",
    parent: "HU-HE",
    coords: [20.35, 48.05],
    name: {"de": "BÃ©lapÃ¡tfalva", "hu": "BÃ©lapÃ¡tfalva", "ro": "BÃ©lapÃ¡tfalva", "en": "BÃ©lapÃ¡tfalva"},
    description: {"de": "Stadt am FuÃŸe des BÃ¼kk-Gebirges, berÃ¼hmt fÃ¼r ihre mittelalterliche Zisterzienserabtei.", "hu": "VÃ¡ros a BÃ¼kk lÃ¡bÃ¡nÃ¡l, kÃ¶zÃ©pkori ciszterci apÃ¡tsÃ¡gÃ¡rÃ³l hÃ­res.", "ro": "OraÈ™ la poalele munÈ›ilor BÃ¼kk, faimos pentru abaÈ›ia sa cistercianÄƒ medievalÄƒ.", "en": "Town at the foot of the BÃ¼kk Mountains, famous for its medieval Cistercian abbey."},
    descriptionAdvanced: {
      "de": "BÃ©lapÃ¡tfalva liegt malerisch am FuÃŸe des BÃ¼kk-Gebirges und ist vor allem fÃ¼r seine Zisterzienserabtei bekannt, die ein herausragendes Denkmal der romanischen Architektur in Ungarn ist. Die Abtei wurde 1232 gegrÃ¼ndet und beeindruckt durch ihre schlichte SchÃ¶nheit und die charakteristische Fassade aus abwechselnd roten und grauen Steinreihen. Es ist die einzige mittelalterliche Klosterkirche in Ungarn, die fast unversehrt in ihrer ursprÃ¼nglichen Form erhalten geblieben ist. Direkt neben der Kirche entspringt die 'Drei-Quellen', die dem Ort eine spirituelle Ruhe verleihen. Die Umgebung von BÃ©lapÃ¡tfalva ist geprÃ¤gt von den steilen Kalkfelsen des BÃ¼kk-Gebirges, die zu anspruchsvollen Wanderungen und Naturerkundungen einladen. Die Stadt ist ein Ort der Stille und Besinnung inmitten einer spektakulÃ¤ren Berglandschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Zisterzienserabtei von BÃ©lapÃ¡tfalva ist die besterhaltene romanische Klosterkirche Ungarns.", "Die Kirche wurde im Jahr 1232 gegrÃ¼ndet und ist dem Heiligen Jakob gewidmet.", "In der NÃ¤he befinden sich die 'Drei-Quellen', die schon im Mittelalter die MÃ¶nche versorgten.", "Die umliegenden Felsformationen des BÃ¼kk-Gebirges bieten spektakulÃ¤re Aussichten auf das Umland."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Abteikirche ist eine der am besten erhaltenen romanischen Kirchen Ungarns.", "Beliebter Ausgangspunkt fÃ¼r Wanderungen."], "hu": ["Az apÃ¡tsÃ¡gi templom MagyarorszÃ¡g egyik legjobb Ã¡llapotban maradt romÃ¡n stÃ­lusÃº temploma.", "NÃ©pszerÅ± kiindulÃ³pont tÃºrÃ¡zÃ¡shoz."], "ro": ["Biserica abaÈ›iei este una dintre cele mai bine conservate biserici romanice din Ungaria.", "Punct de plecare popular pentru drumeÈ›ii."], "en": ["The abbey church is one of the best-preserved Romanesque churches in Hungary.", "Popular starting point for hiking."]},
  },
  {
    id: "mezotur",
    type: "city",
    parent: "HU-JN",
    coords: [20.6167, 47.0],
    name: {"de": "MezÅ‘tÃºr", "hu": "MezÅ‘tÃºr", "ro": "MezÅ‘tÃºr", "en": "MezÅ‘tÃºr"},
    description: {"de": "Stadt in der Tiefebene, bekannt fÃ¼r ihre jahrhundertealte TÃ¶pfertradition.", "hu": "AlfÃ¶ldi vÃ¡ros, Ã©vszÃ¡zados fazekas hagyomÃ¡nyairÃ³l ismert.", "ro": "OraÈ™ Ã®n cÃ¢mpie, cunoscut pentru tradiÈ›ia sa secularÄƒ Ã®n olÄƒrit.", "en": "City in the plains, known for its centuries-old pottery tradition."},
    descriptionAdvanced: {
      "de": "MezÅ‘tÃºr, im Herzen der ungarischen Tiefebene am Ufer der BerettyÃ³ gelegen, blickt auf eine jahrhundertelange Tradition als Zentrum des Handwerks und der Bildung zurÃ¼ck. Die Stadt ist landesweit als die 'Stadt der TÃ¶pfer' bekannt, da die hiesige Tonverarbeitung seit dem Mittelalter Weltruf genieÃŸt. Die charakteristische MezÅ‘tÃºrer Keramik mit ihren typischen Farben und Mustern ist ein geschÃ¼tztes Kulturerbe der Region. Das Reformierte Kollegium der Stadt, gegrÃ¼ndet im 16. Jahrhundert, war Ã¼ber lange Zeit ein geistiges Zentrum der Umgebung. JÃ¤hrlich im Sommer lockt das 'TÃºr-Festival' Besucher an, die die Volkskunst, Musik und kulinarischen SpezialitÃ¤ten der Tiefebene feiern mÃ¶chten. MezÅ‘tÃºr strahlt eine angenehme, lÃ¤ndliche Gelassenheit aus und pflegt stolz sein handwerkliches Erbe.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["MezÅ‘tÃºr ist das bedeutendste historische Zentrum der TÃ¶pferkunst in der ungarischen Tiefebene.", "Die Stadt beherbergt ein renommiertes Museum, das sich ausschlieÃŸlich der Geschichte der Keramik widmet.", "Das Reformierte Kollegium von MezÅ‘tÃºr wurde bereits im Jahr 1530 gegrÃ¼ndet.", "Die Stadt liegt malerisch am Ufer der BerettyÃ³, die ideale Bedingungen fÃ¼r Angler bietet."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die MezÅ‘tÃºrer Keramik ist ein Hungarikum.", "Veranstaltet jÃ¤hrlich TÃ¶pferfestivals."], "hu": ["A mezÅ‘tÃºri kerÃ¡mia hungarikum.", "Ã‰vente rendeznek fazekas fesztivÃ¡lokat."], "ro": ["Ceramica de MezÅ‘tÃºr este un Hungarikum.", "GÄƒzduieÈ™te anual festivaluri de olÄƒrit."], "en": ["MezÅ‘tÃºr ceramics are a Hungarikum.", "Hosts annual pottery festivals."]},
  },
  {
    id: "tiszafured",
    type: "city",
    parent: "HU-JN",
    coords: [20.75, 47.6167],
    name: {"de": "TiszafÃ¼red", "hu": "TiszafÃ¼red", "ro": "TiszafÃ¼red", "en": "TiszafÃ¼red"},
    description: {"de": "Die 'Hauptstadt des TheiÃŸ-Sees', ein Zentrum fÃ¼r Ã–kotourismus und Wassersport.", "hu": "A 'Tisza-tÃ³ fÅ‘vÃ¡rosa', az Ã¶koturizmus Ã©s a vÃ­zisportok kÃ¶zpontja.", "ro": "'Capitala Lacului Tisa', un centru pentru ecoturism È™i sporturi nautice.", "en": "The 'Capital of Lake Tisza', a center for ecotourism and water sports."},
    descriptionAdvanced: {
      "de": "TiszafÃ¼red ist das touristische Zentrum und die 'Hauptstadt' des TheiÃŸ-Sees, einer einzigartigen Wasserlandschaft im Osten Ungarns. Die Stadt bietet ideale Bedingungen fÃ¼r alle, die aktive Erholung am und im Wasser suchen, sei es beim Baden, Segeln, Angeln oder bei Kanutouren durch die labyrinthartigen Schilfgebiete. Besonders attraktiv ist der TheiÃŸ-See-Ã–kozentrum-Park, in dem man in riesigen Aquarien die einheimische Unterwasserwelt, darunter auch den mÃ¤chtigen Hausen, bewundern kann. TiszafÃ¼red hat zudem eine lange Tradition als Kurort und bietet entspannende Stunden in seinem Thermalbad. Die Stadt ist zudem fÃ¼r ihre traditionsreiche TÃ¶pferkunst bekannt, deren Erzeugnisse im Ã¶rtlichen Museum besichtigt werden kÃ¶nnen. Als Tor zum Nationalpark HortobÃ¡gy ist TiszafÃ¼red ein perfekter Ausgangspunkt fÃ¼r Naturerlebnisse zwischen Wasser und Puszta.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["TiszafÃ¼red ist das wichtigste touristische Zentrum am TheiÃŸ-See.", "Das Ã–kozentrum in der Stadt beherbergt das grÃ¶ÃŸte SÃ¼ÃŸwasseraquarium-System in Europa.", "Die Stadt ist ein staatlich anerkannter Heilkurort mit wertvollem Thermalwasser.", "Die TiszafÃ¼reder TÃ¶pferkunst ist ein wichtiger Teil der regionalen Volkskunsttradition."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Tor zum Nationalpark HortobÃ¡gy.", "Bekannt fÃ¼r seine ThermalbÃ¤der."], "hu": ["A HortobÃ¡gyi Nemzeti Park kapuja.", "TermÃ¡lfÃ¼rdÅ‘irÅ‘l ismert."], "ro": ["Poarta cÄƒtre Parcul NaÈ›ional HortobÃ¡gy.", "Cunoscut pentru bÄƒile sale termale."], "en": ["Gateway to the HortobÃ¡gy National Park.", "Known for its thermal baths."]},
  },
  {
    id: "komarom",
    type: "city",
    parent: "HU-KE",
    coords: [18.1167, 47.75],
    name: {"de": "Komorn", "hu": "KomÃ¡rom", "ro": "KomÃ¡rom", "en": "KomÃ¡rom"},
    description: {"de": "Grenzstadt an der Donau, bekannt fÃ¼r ihr riesiges Festungssystem.", "hu": "Duna-parti hatÃ¡rvÃ¡ros, hatalmas erÅ‘drendszerÃ©rÅ‘l ismert.", "ro": "OraÈ™ de graniÈ›Äƒ pe DunÄƒre, cunoscut pentru sistemul sÄƒu imens de fortificaÈ›ii.", "en": "Border city on the Danube, known for its massive fortress system."},
    descriptionAdvanced: {
      "de": "KomÃ¡rom, an der Donau an der Grenze zur Slowakei gelegen, ist eine Stadt mit einer beeindruckenden militÃ¤rischen Vergangenheit und einer lebendigen Gegenwart. BerÃ¼hmt ist die Stadt fÃ¼r ihr gigantisches Festungssystem, bestehend aus den Festungen Monostor, IgmÃ¡nd und Csillag, das im 19. Jahrhundert als das grÃ¶ÃŸte der Ã–sterreichisch-Ungarischen Monarchie galt. Die Festung Monostor ist heute ein faszinierendes Freilichtmuseum und Schauplatz zahlreicher historischer Festivals und Ausstellungen. KomÃ¡rom ist zudem ein bedeutender Kurort, dessen Thermalwasser besonders reich an Mineralien ist und in einem modernen Bad genutzt wird. Die Stadt ist durch die ElisabethbrÃ¼cke mit ihrer Zwillingsstadt KomÃ¡rno in der Slowakei verbunden, was zu einen regen kulturellen Austausch fÃ¼hrt. KomÃ¡rom verbindet auf einzigartige Weise monumentale Festungsarchitektur mit entspannender Wellnesskultur.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Festungssystem von KomÃ¡rom galt im 19. Jahrhundert als uneinnehmbar.", "Die Festung Monostor ist die grÃ¶ÃŸte Festungsanlage in ganz Mitteleuropa.", "Die Stadt ist ein wichtiger Hafen an der Donau und ein industrielles Zentrum.", "KomÃ¡rom besitzt ein bekanntes Heilbad mit jodhaltigem Thermalwasser."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Festungssystem ist das grÃ¶ÃŸte seiner Art in Mitteleuropa.", "Geteilt in einen ungarischen und einen slowakischen Teil."], "hu": ["Az erÅ‘drendszer KÃ¶zÃ©p-EurÃ³pa legnagyobb ilyen jellegÅ± Ã©pÃ­tmÃ©nye.", "Magyar Ã©s szlovÃ¡k rÃ©szre oszlik."], "ro": ["Sistemul de fortificaÈ›ii este cel mai mare de acest tip din Europa CentralÄƒ.", "ÃŽmpÄƒrÈ›it Ã®ntr-o parte maghiarÄƒ È™i una slovacÄƒ."], "en": ["The fortress system is the largest of its kind in Central Europe.", "Divided into a Hungarian and a Slovak part."]},
  },
  {
    id: "babolna",
    type: "city",
    parent: "HU-KE",
    coords: [17.9833, 47.65],
    name: {"de": "BÃ¡bolna", "hu": "BÃ¡bolna", "ro": "BÃ¡bolna", "en": "BÃ¡bolna"},
    description: {"de": "Stadt berÃ¼hmt fÃ¼r ihr historisches GestÃ¼t und die Pferdezucht.", "hu": "TÃ¶rtÃ©nelmi mÃ©nesbirtokÃ¡rÃ³l Ã©s lÃ³tartÃ¡sÃ¡rÃ³l hÃ­res vÃ¡ros.", "ro": "OraÈ™ faimos pentru herghelia sa istoricÄƒ È™i creÈ™terea cailor.", "en": "Town famous for its historic stud farm and horse breeding."},
    descriptionAdvanced: {
      "de": "BÃ¡bolna ist weltberÃ¼hmt fÃ¼r sein NationalgestÃ¼t, das 1789 gegrÃ¼ndet wurde und die Wiege der weltbekannten Araberpferdezucht in Ungarn ist. Die Architektur des Ortes ist geprÃ¤gt von den herrschaftlichen GebÃ¤uden des GestÃ¼ts, dem prachtvollen Schloss und der Reithalle, die eine AtmosphÃ¤re von aristokratischem Glanz versprÃ¼hen. Hier wurde die berÃ¼hmte Linie 'Shagya-Araber' gezÃ¼chtet, die fÃ¼r ihre Ausdauer, Schnelligkeit und Eleganz geschÃ¤tzt wird. Ein besonderes Highlight ist das GestÃ¼tsmuseum, das die Geschichte der Pferdezucht und die militÃ¤rische Bedeutung der Anlage eindrucksvoll dokumentiert. BÃ¡bolna ist zudem eine moderne Agrarstadt und beherbergt bedeutende Unternehmen der GeflÃ¼gelzucht. FÃ¼r Pferdeliebhaber und Freunde historischer Ensembles ist BÃ¡bolna ein Ort von zeitloser Eleganz und groÃŸer Bedeutung.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das NationalgestÃ¼t BÃ¡bolna ist die Heimat der berÃ¼hmten Shagya-Araber-Pferde.", "Das GestÃ¼t wurde 1789 per kaiserlichem Erlass als eigenstÃ¤ndige MilitÃ¤ranlage gegrÃ¼ndet.", "Das im Schloss untergebrachte Museum zeigt eine weltweit bedeutende Sammlung zur Hippologie.", "Das GestÃ¼tsensemble von BÃ¡bolna steht unter nationalem Denkmalschutz."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["GegrÃ¼ndet im Jahr 1789.", "Heimat der Shagya-Araber-Pferde."], "hu": ["1789-ben alapÃ­tottÃ¡k.", "A Shagya-arab lovak hazÃ¡ja."], "ro": ["Fondat Ã®n anul 1789.", "Casa cailor Shagya Arab."], "en": ["Founded in 1789.", "Home of the Shagya Arabian horses."]},
  },
  {
    id: "szecseny",
    type: "city",
    parent: "HU-NO",
    coords: [19.5167, 48.0833],
    name: {"de": "Szecseny", "hu": "SzÃ©csÃ©ny", "ro": "SzÃ©csÃ©ny", "en": "SzÃ©csÃ©ny"},
    description: {"de": "Historische Stadt in Nordungarn, bekannt fÃ¼r das Barockschloss ForgÃ¡ch.", "hu": "Ã‰szak-magyarorszÃ¡gi tÃ¶rtÃ©nelmi vÃ¡ros, a barokk ForgÃ¡ch-kastÃ©lyrÃ³l ismert.", "ro": "OraÈ™ istoric Ã®n nordul Ungariei, cunoscut pentru castelul baroc ForgÃ¡ch.", "en": "Historic town in northern Hungary, known for the Baroque ForgÃ¡ch Castle."},
    descriptionAdvanced: {
      "de": "SzÃ©csÃ©ny, im Norden Ungarns im Ipoly-Tal gelegen, ist eine Stadt von groÃŸer historischer Bedeutung und barockem Charme. BerÃ¼hmt wurde sie durch den Reichstag von 1705, auf dem FÃ¼rst Ferenc RÃ¡kÃ³czi II. zum Oberhaupt der ungarischen KonfÃ¶deration gewÃ¤hlt wurde. Das barocke ForgÃ¡ch-Schloss, in dem heute das Ferenc-Kubinyi-Museum untergebracht ist, erinnert an diese glanzvolle Zeit und zeigt bedeutende Ausstellungen zur Regionalgeschichte. Ebenfalls sehenswert ist das Franziskanerkloster mit seiner gotischen Kirche, das Ã¼ber Jahrhunderte ein geistiges Zentrum der Region war. Eine KuriositÃ¤t der Stadt ist der 'Schiefe Turm' von SzÃ©csÃ©ny, ein alter Wehrturm, der sich im Laufe der Zeit geneigt hat. Die ruhige AtmosphÃ¤re der Stadt und die NÃ¤he zur slowakischen Grenze machen sie zu einem interessanten Ziel fÃ¼r Geschichtsinteressierte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["In SzÃ©csÃ©ny fand 1705 der bedeutende Reichstag unter FÃ¼rst Ferenc RÃ¡kÃ³czi II. statt.", "Das ForgÃ¡ch-Schloss ist ein herausragendes Beispiel barocker Schlossarchitektur in Nordungarn.", "Die Stadt besitzt einen 'Schiefen Turm', der als historischer Wehrturm diente.", "SzÃ©csÃ©ny ist ein wichtiger Ort an der Pilgerroute 'Via Margaritarum' (Perlenweg)."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Ort der ungarischen Nationalversammlung von 1705.", "Hat einen schiefen Feuerturm."], "hu": ["Az 1705-Ã¶s orszÃ¡ggyÅ±lÃ©s helyszÃ­ne.", "Ferde tÅ±ztoronnyal rendelkezik."], "ro": ["Locul adunÄƒrii naÈ›ionale maghiare din 1705.", "Are un turn de foc Ã®nclinat."], "en": ["Site of the Hungarian national assembly of 1705.", "Has a leaning fire tower."]},
  },
  {
    id: "tar",
    type: "city",
    parent: "HU-NO",
    coords: [19.75, 47.95],
    name: {"de": "Tar", "hu": "Tar", "ro": "Tar", "en": "Tar"},
    description: {"de": "Dorf am FuÃŸe der MÃ¡tra, bekannt fÃ¼r seinen buddhistischen Stupa.", "hu": "Falu a MÃ¡tra lÃ¡bÃ¡nÃ¡l, buddhista sztÃºpÃ¡jÃ¡rÃ³l ismert.", "ro": "Sat la poalele munÈ›ilor MÃ¡tra, cunoscut pentru stupa sa budistÄƒ.", "en": "Village at the foot of the MÃ¡tra, known for its Buddhist stupa."},
    descriptionAdvanced: {
      "de": "Der kleine Ort Tar im CserhÃ¡t-Gebirge ist bekannt fÃ¼r den buddhistischen KÅ‘rÃ¶si-Csoma-SÃ¡ndor-Gedenkpark. Dieser Park wurde zu Ehren des berÃ¼hmten ungarischen Sprachforschers errichtet, der das erste tibetisch-englische WÃ¶rterbuch verfasste. Das Zentrum des Parks bildet eine weiÃŸe Friedensstupa, die vom 14. Dalai Lama eingeweiht wurde. Ein tibetisches Gedenkhaus und ein kleiner Tempel vermitteln Einblicke in die fernÃ¶stliche Kultur. Tar beherbergt zudem eine historisch interessante mittelalterliche Wehrkirche.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["In Tar befindet sich eine buddhistische Stupa, die dem Weltfrieden gewidmet ist.", "Der Gedenkpark ehrt den Tibetologen Alexander Csoma de KÅ‘rÃ¶s.", "Die Stupa wurde 1992 vom Dalai Lama persÃ¶nlich eingeweiht.", "Der Ort besitzt eine gut erhaltene mittelalterliche Wehrkirche."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Der Stupa wurde zum Gedenken an Alexander Csoma de KÅ‘rÃ¶s errichtet.", "Ein Ort der Ruhe und Meditation."], "hu": ["A sztÃºpÃ¡t KÅ‘rÃ¶si Csoma SÃ¡ndor emlÃ©kÃ©re emeltÃ©k.", "A nyugalom Ã©s meditÃ¡ciÃ³ helye."], "ro": ["Stupa a fost ridicatÄƒ Ã®n memoria lui Alexander Csoma de KÅ‘rÃ¶s.", "Un loc de liniÈ™te È™i meditaÈ›ie."], "en": ["The stupa was built in memory of Alexander Csoma de KÅ‘rÃ¶s.", "A place of peace and meditation."]},
  },
  {
    id: "erd",
    type: "city",
    parent: "HU-PE",
    coords: [18.9167, 47.3833],
    name: {"de": "Hanselbeck", "hu": "Ã‰rd", "ro": "Ã‰rd", "en": "Ã‰rd"},
    description: {"de": "GroÃŸe Stadt in der Agglomeration von Budapest, bekannt fÃ¼r ihr osmanisches Minarett.", "hu": "NagyvÃ¡ros Budapest agglomerÃ¡ciÃ³jÃ¡ban, oszmÃ¡n minaretjÃ©rÅ‘l ismert.", "ro": "OraÈ™ mare Ã®n aglomeraÈ›ia Budapestei, cunoscut pentru minaretul sÄƒu otoman.", "en": "Large city in the Budapest agglomeration, known for its Ottoman minaret."},
    descriptionAdvanced: {
      "de": "Ã‰rd, sÃ¼dwestlich von Budapest an der Donau gelegen, bewahrt trotz seiner modernen Rolle als Vorstadt interessante historische SchÃ¤tze. Das original erhaltene osmanische Minarett aus dem 17. Jahrhundert ist eines von nur drei noch existierenden in ganz Ungarn. Das Ungarische Geographische Museum dokumentiert die Leistungen ungarischer Weltreisender und Entdecker. Von den Hochufern der Stadt bieten sich weite Ausblicke Ã¼ber die Donaulandschaft. Die geschÃ¼tzten LÃ¶sswÃ¤nde entlang des Flusses beherbergen eine besondere Flora und Fauna.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Ã‰rd besitzt eines der drei originalen tÃ¼rkischen Minarette in Ungarn.", "Das Ungarische Geographische Museum ist landesweit einzigartig.", "Die Stadt ist eine der flÃ¤chenmÃ¤ÃŸig grÃ¶ÃŸten Siedlungen Ungarns.", "Die Donau-LÃ¶sswÃ¤nde bei Ã‰rd stehen unter Naturschutz."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Minarett ist eines von nur drei erhaltenen in Ungarn.", "Wichtiges Verkehrszentrum."], "hu": ["A minaret egyike a MagyarorszÃ¡gon fennmaradt hÃ¡romnak.", "Fontos kÃ¶zlekedÃ©si csomÃ³pont."], "ro": ["Minaretul este unul dintre cele doar trei rÄƒmase Ã®n Ungaria.", "Centru de transport important."], "en": ["The minaret is one of only three remaining in Hungary.", "Important transport hub."]},
  },
  {
    id: "cegled",
    type: "city",
    parent: "HU-PE",
    coords: [19.8, 47.1833],
    name: {"de": "Ziegled", "hu": "CeglÃ©d", "ro": "CeglÃ©d", "en": "CeglÃ©d"},
    description: {"de": "Stadt in der Tiefebene, bekannt fÃ¼r ihr Thermalbad und die Verbindung zu Lajos Kossuth.", "hu": "AlfÃ¶ldi vÃ¡ros, termÃ¡lfÃ¼rdÅ‘jÃ©rÅ‘l Ã©s Kossuth Lajoshoz fÅ±zÅ‘dÅ‘ kapcsolatÃ¡rÃ³l ismert.", "ro": "OraÈ™ Ã®n cÃ¢mpie, cunoscut pentru baia sa termalÄƒ È™i legÄƒtura cu Lajos Kossuth.", "en": "City in the plains, known for its thermal bath and connection to Lajos Kossuth."},
    descriptionAdvanced: {
      "de": "CeglÃ©d ist als 'Tor zur Tiefebene' und bedeutender Ort der ungarischen Geschichte bekannt. Die Stadt ist eng mit Lajos Kossuth verbunden, der hier 1848 seine berÃ¼hmte Rekrutierungsrede hielt. Das Kossuth-Museum bewahrt das Erbe des Nationalhelden und dokumentiert die Revolutionsgeschichte. Die reformierte Kirche von CeglÃ©d ist eine der grÃ¶ÃŸten protestantischen GotteshÃ¤user in Mitteleuropa. Das moderne Thermal- und Strandbad der Stadt nutzt wertvolles Heilwasser fÃ¼r therapeutische Zwecke.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["CeglÃ©d ist ein bedeutendes Zentrum des Kossuth-Kultes in Ungarn.", "Die reformierte Kirche der Stadt beeindruckt durch ihre monumentale GrÃ¶ÃŸe.", "Die Stadt beherbergt ein einzigartiges internationales Trommelmuseum.", "Die Region ist berÃ¼hmt fÃ¼r den Anbau hochwertiger Aprikosen."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Beherbergt das grÃ¶ÃŸte Kossuth-Museum des Landes.", "Bekannt fÃ¼r seine reformierte Kirche."], "hu": ["Itt talÃ¡lhatÃ³ az orszÃ¡g legnagyobb Kossuth-mÃºzeuma.", "ReformÃ¡tus templomÃ¡rÃ³l is ismert."], "ro": ["GÄƒzduieÈ™te cel mai mare muzeu Kossuth din È›arÄƒ.", "Cunoscut pentru biserica sa reformatÄƒ."], "en": ["Home to the largest Kossuth museum in the country.", "Known for its Reformed church."]},
  },
  {
    id: "balatonlelle",
    type: "city",
    parent: "HU-SO",
    coords: [17.7, 46.7833],
    name: {"de": "Lelle", "hu": "Balatonlelle", "ro": "Balatonlelle", "en": "Balatonlelle"},
    description: {"de": "Beliebter Ferienort am SÃ¼dufer des Plattensees mit Sandstrand.", "hu": "NÃ©pszerÅ± Ã¼dÃ¼lÅ‘hely a Balaton dÃ©li partjÃ¡n, homokos stranddal.", "ro": "StaÈ›iune popularÄƒ pe malul sudic al Lacului Balaton, cu plajÄƒ de nisip.", "en": "Popular resort town on the southern shore of Lake Balaton with a sandy beach."},
    descriptionAdvanced: {
      "de": "Balatonlelle ist ein beliebter Familienferienort am SÃ¼dufer des Plattensees mit einer perfekten Mischung aus Strand und Kultur. Der weitlÃ¤ufige Sandstrand mit seinem flachen Wasser ist besonders bei Familien mit Kindern gefragt. Sommerliche Freilichttheater-AuffÃ¼hrungen und Weinfestivals prÃ¤gen das lebendige kulturelle Leben des Ortes. Vom nahen Kishegy mit seinen historischen Kellern bietet sich ein fantastischer Panoramablick Ã¼ber den See. Die entspannte UrlaubsatmosphÃ¤re macht Balatonlelle zu einem der attraktivsten Ziele am Balaton.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Balatonlelle besitzt einen der wenigen echten SandstrÃ¤nde am Plattensee.", "Das jÃ¤hrliche Weinfest im August ist ein Highlight am SÃ¼dufer.", "Vom Kishegy aus blickt man direkt auf das gegenÃ¼berliegende Badacsony-Massiv.", "Der Ort beherbergt einen bekannten Zirkus- und Erlebnispark."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r seine Weinproduktion.", "Veranstaltet im Sommer viele Festivals."], "hu": ["BortermelÃ©sÃ©rÅ‘l ismert.", "NyÃ¡ron szÃ¡mos fesztivÃ¡lnak ad otthont."], "ro": ["Cunoscut pentru producÈ›ia de vin.", "GÄƒzduieÈ™te multe festivaluri Ã®n timpul verii."], "en": ["Known for its wine production.", "Hosts many festivals during the summer."]},
  },
  {
    id: "fonyod",
    type: "city",
    parent: "HU-SO",
    coords: [17.55, 46.75],
    name: {"de": "FonyÃ³d", "hu": "FonyÃ³d", "ro": "FonyÃ³d", "en": "FonyÃ³d"},
    description: {"de": "Stadt am SÃ¼dufer des Plattensees, bekannt fÃ¼r ihre Aussichtspunkte und den Hafen.", "hu": "VÃ¡ros a Balaton dÃ©li partjÃ¡n, kilÃ¡tÃ³irÃ³l Ã©s kikÃ¶tÅ‘jÃ©rÅ‘l ismert.", "ro": "OraÈ™ pe malul sudic al Lacului Balaton, cunoscut pentru punctele sale de belvedere È™i port.", "en": "City on the southern shore of Lake Balaton, known for its viewpoints and harbor."},
    descriptionAdvanced: {
      "de": "FonyÃ³d liegt auf einer markanten HÃ¼gelkette am SÃ¼dufer des Plattensees und bietet spektakulÃ¤re Ausblicke. Von den zwei vulkanischen HÃ¼geln aus kann man fast den gesamten See bis zur Halbinsel Tihany Ã¼berblicken. Die Stadt blickt auf eine lange Tradition als Kurort zurÃ¼ck, was die vielen historischen Villen bezeugen. Der Hafen von FonyÃ³d ist ein wichtiger Knotenpunkt fÃ¼r die Schifffahrt zum Nordufer. Ein Anziehungspunkt ist auch der groÃŸe Wochenmarkt, der Besucher aus der weiten Umgebung anlockt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["FonyÃ³d besitzt die lÃ¤ngste Hafenmole am gesamten Plattensee.", "Der Wochenmarkt von FonyÃ³d ist der grÃ¶ÃŸte am SÃ¼dufer des Sees.", "Die Stadt ist berÃ¼hmt fÃ¼r ihre AussichtstÃ¼rme auf den vulkanischen HÃ¼geln.", "Historische Villenviertel aus der Monarchiezeit prÃ¤gen das Stadtbild."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bietet den schÃ¶nsten Blick auf das Badacsony-Gebirge.", "Hat den lÃ¤ngsten Pier am Plattensee."], "hu": ["Innen nyÃ­lik a legszebb kilÃ¡tÃ¡s a Badacsonyra.", "Itt talÃ¡lhatÃ³ a Balaton leghosszabb mÃ³lÃ³ja."], "ro": ["OferÄƒ cea mai frumoasÄƒ vedere asupra munÈ›ilor Badacsony.", "Are cel mai lung debarcader de pe Lacul Balaton."], "en": ["Offers the most beautiful view of the Badacsony mountains.", "Has the longest pier on Lake Balaton."]},
  },
  {
    id: "kisvarda",
    type: "city",
    parent: "HU-SZ",
    coords: [22.0833, 48.2167],
    name: {"de": "Kleinwardein", "hu": "KisvÃ¡rda", "ro": "KisvÃ¡rda", "en": "KisvÃ¡rda"},
    description: {"de": "Stadt im Nordosten Ungarns, bekannt fÃ¼r ihre Burgruine und das Thermalbad.", "hu": "Ã‰szakkelet-magyarorszÃ¡gi vÃ¡ros, vÃ¡rromjÃ¡rÃ³l Ã©s termÃ¡lfÃ¼rdÅ‘jÃ©rÅ‘l ismert.", "ro": "OraÈ™ Ã®n nord-estul Ungariei, cunoscut pentru ruinele cetÄƒÈ›ii È™i baia termalÄƒ.", "en": "City in northeastern Hungary, known for its castle ruins and thermal bath."},
    descriptionAdvanced: {
      "de": "KisvÃ¡rda im Nordosten Ungarns ist eine Stadt mit starker historischer IdentitÃ¤t und lebendiger Kulturszene. Die spÃ¤tgotische Burgruine dient heute als eindrucksvolle Kulisse fÃ¼r Freilichtspiele und Festivals. Besonders bekannt ist das jÃ¤hrliche Treffen der ungarischen Theater aus dem Ausland. Das Thermalbad 'VÃ¡rfÃ¼rdÅ‘' bietet moderne Erholung mit Heilwasser aus Ã¼ber 1000 Metern Tiefe. Die Stadt war historisch ein bedeutendes Handelszentrum an der Grenze zu den Karpaten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg KisvÃ¡rda war im Mittelalter eine strategisch wichtige Festung.", "Die Stadt beherbergt das Festival der ungarischen Theater jenseits der Grenzen.", "Das Thermalbad nutzt sehr heiÃŸes Heilwasser fÃ¼r medizinische Zwecke.", "KisvÃ¡rda ist ein wichtiges Bildungs- und Kulturzentrum der Region."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Veranstaltet jÃ¤hrlich das Festival der ungarischen Theater.", "Wichtiges wirtschaftliches Zentrum der Region."], "hu": ["Ã‰vente megrendezik a Magyar SzÃ­nhÃ¡zak FesztivÃ¡ljÃ¡t.", "A rÃ©giÃ³ fontos gazdasÃ¡gi kÃ¶zpontja."], "ro": ["GÄƒzduieÈ™te anual Festivalul Teatrelor Maghiare.", "Centru economic important al regiunii."], "en": ["Hosts the annual Festival of Hungarian Theaters.", "Important economic center of the region."]},
  },
  {
    id: "tiszadada",
    type: "city",
    parent: "HU-SZ",
    coords: [21.1167, 48.0333],
    name: {"de": "Tiszadada", "hu": "Tiszadada", "ro": "Tiszadada", "en": "Tiszadada"},
    description: {"de": "Dorf an der TheiÃŸ, bekannt fÃ¼r das Schloss AndrÃ¡ssy.", "hu": "Tisza-parti falu, az AndrÃ¡ssy-kastÃ©lyrÃ³l ismert.", "ro": "Sat pe rÃ¢ul Tisa, cunoscut pentru Castelul AndrÃ¡ssy.", "en": "Village on the Tisza river, known for the AndrÃ¡ssy Castle."},
    descriptionAdvanced: {
      "de": "Tiszadada ist ein idyllisches Dorf am Ufer der TheiÃŸ, das durch seine unberÃ¼hrte Natur besticht. Der Ort liegt in einer weiten Flussschleife und bietet ideale Bedingungen fÃ¼r Ruhe und Entspannung. Das Schloss Patay mit seinem weitlÃ¤ufigen Park erinnert an die einstige Adelskultur der Region. Tiszadada war ein wichtiger Inspirationsort fÃ¼r den berÃ¼hmten visionÃ¤ren Maler Tivadar CsontvÃ¡ry Kosztka. Die AuenwÃ¤lder entlang der TheiÃŸ sind ein Paradies fÃ¼r Angler und Naturbeobachter.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Tiszadada liegt an einem der schÃ¶nsten Abschnitte der mittleren TheiÃŸ.", "Der Maler Tivadar CsontvÃ¡ry Kosztka wirkte zeitweise in diesem Dorf.", "Das Schloss Patay ist ein bedeutendes Baudenkmal der Region.", "Die Gegend ist bekannt fÃ¼r ihre reiche Vogelwelt in den Flussauen."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Malerische Lage am Fluss.", "Ort der Entspannung und Natur."], "hu": ["FestÅ‘i fekvÃ©s a folyÃ³ partjÃ¡n.", "A kikapcsolÃ³dÃ¡s Ã©s a termÃ©szet helye."], "ro": ["LocaÈ›ie pitoreascÄƒ pe malul rÃ¢ului.", "Loc de relaxare È™i naturÄƒ."], "en": ["Picturesque location on the riverbank.", "Place of relaxation and nature."]},
  },
  {
    id: "dombovar",
    type: "city",
    parent: "HU-TO",
    coords: [18.1333, 46.3667],
    name: {"de": "Dombovar", "hu": "DombÃ³vÃ¡r", "ro": "DombÃ³vÃ¡r", "en": "DombÃ³vÃ¡r"},
    description: {"de": "Stadt in SÃ¼dtransdanubien, bekannt fÃ¼r das Gunaras-Heilbad.", "hu": "DÃ©l-dunÃ¡ntÃºli vÃ¡ros, a Gunaras gyÃ³gyfÃ¼rdÅ‘rÅ‘l ismert.", "ro": "OraÈ™ Ã®n Transdanubia de Sud, cunoscut pentru baia curativÄƒ Gunaras.", "en": "City in Southern Transdanubia, known for the Gunaras medicinal bath."},
    descriptionAdvanced: {
      "de": "DombÃ³vÃ¡r ist eine dynamische Stadt mit bedeutender Eisenbahngeschichte und modernen HeilkrÃ¤ften. Der Stadtteil GunarasfÃ¼rdÅ‘ ist ein staatlich anerkannter Heilkurort, dessen Wasser einen hohen Fluoridgehalt aufweist. Die Entwicklung der Stadt zum wichtigen Bahnknotenpunkt im 19. Jahrhundert prÃ¤gte Architektur und Wirtschaft. DombÃ³vÃ¡r ist zudem von einer waldreichen HÃ¼gellandschaft umgeben, die zu Wanderungen einlÃ¤dt. Das Szigeter-Viertel beherbergt interessante Museen zur Lokalgeschichte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["GunarasfÃ¼rdÅ‘ in DombÃ³vÃ¡r ist berÃ¼hmt fÃ¼r sein fluoridhaltiges Heilwasser.", "DombÃ³vÃ¡r ist ein zentraler Knotenpunkt der Bahnstrecke Budapest-PÃ©cs.", "Die Stadt bewahrt wertvolle Sammlungen zur ungarischen Eisenbahngeschichte.", "In der Umgebung befinden sich die Ruinen der mittelalterlichen Burg GÃ³lyavÃ¡r."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wichtiger Eisenbahnknotenpunkt.", "Das Heilwasser ist reich an Fluorid."], "hu": ["Fontos vasÃºti csomÃ³pont.", "A gyÃ³gyvÃ­z fluoridban gazdag."], "ro": ["Nod feroviar important.", "Apa curativÄƒ este bogatÄƒ Ã®n fluor."], "en": ["Important railway junction.", "The medicinal water is rich in fluoride."]},
  },
  {
    id: "dunafoldvar",
    type: "city",
    parent: "HU-TO",
    coords: [18.9167, 46.8],
    name: {"de": "Donafeldwar", "hu": "DunafÃ¶ldvÃ¡r", "ro": "DunafÃ¶ldvÃ¡r", "en": "DunafÃ¶ldvÃ¡r"},
    description: {"de": "Stadt an der Donau, bekannt fÃ¼r ihre Burg und die BrÃ¼cke.", "hu": "Duna-parti vÃ¡ros, vÃ¡rÃ¡rÃ³l Ã©s hÃ­djÃ¡rÃ³l ismert.", "ro": "OraÈ™ pe DunÄƒre, cunoscut pentru cetatea È™i podul sÄƒu.", "en": "City on the Danube, known for its castle and bridge."},
    descriptionAdvanced: {
      "de": "DunafÃ¶ldvÃ¡r liegt malerisch an einem Steilufer der Donau und blickt auf eine strategische Vergangenheit zurÃ¼ck. Der mittelalterliche 'Csonka-Turm' ist das Wahrzeichen der Stadt und beherbergt heute ein Museum. Von seinem Plateau aus bietet sich ein beeindruckender Blick Ã¼ber die Donau und die Tiefebene. Das Heil- und Strandbad am Flussufer bietet Entspannung in geschichtstrÃ¤chtiger Umgebung. DunafÃ¶ldvÃ¡r war jahrhundertelang ein wichtiger FlussÃ¼bergang und Handelsplatz.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Csonka-Turm ist einer der wenigen erhaltenen WohntÃ¼rme Ungarns.", "Die Stadt liegt an einem der markantesten Steilufer entlang der Donau.", "DunafÃ¶ldvÃ¡r ist landesweit fÃ¼r seine hervorragende Konditortradition bekannt.", "Das Heilbad nutzt Thermalquellen direkt am Ufer der Donau."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Burg bietet einen weiten Blick Ã¼ber die Donau.", "Bekannt fÃ¼r seine ThermalbÃ¤der."], "hu": ["A vÃ¡rbÃ³l messzire ellÃ¡tni a Duna felett.", "TermÃ¡lfÃ¼rdÅ‘irÅ‘l is ismert."], "ro": ["Cetatea oferÄƒ o vedere largÄƒ asupra DunÄƒrii.", "Cunoscut pentru bÄƒile sale termale."], "en": ["The castle offers a wide view over the Danube.", "Known for its thermal baths."]},
  },
  {
    id: "buk",
    type: "city",
    parent: "HU-VA",
    coords: [16.75, 47.3833],
    name: {"de": "BÃ¼k", "hu": "BÃ¼k", "ro": "BÃ¼k", "en": "BÃ¼k"},
    description: {"de": "Einer der bekanntesten Kurorte Ungarns mit einem riesigen Thermalbad.", "hu": "MagyarorszÃ¡g egyik legismertebb fÃ¼rdÅ‘vÃ¡rosa hatalmas termÃ¡lfÃ¼rdÅ‘vel.", "ro": "Una dintre cele mai cunoscute staÈ›iuni balneare din Ungaria, cu o baie termalÄƒ imensÄƒ.", "en": "One of Hungary's best-known spa towns with a massive thermal bath."},
    descriptionAdvanced: {
      "de": "BÃ¼k im Westen Ungarns beherbergt mit BÃ¼kfÃ¼rdÅ‘ eines der grÃ¶ÃŸten HeilbÃ¤der des Landes. Die Entdeckung der Quellen im Jahr 1957 verwandelte das Dorf in ein internationales Wellness-Zentrum. Das Heilwasser von BÃ¼k zeichnet sich durch einen extrem hohen Mineralstoffgehalt aus. Neben dem Badekomplex bietet der Ort einen Meisterschaftsgolfplatz und vielfÃ¤ltige SportmÃ¶glichkeiten. Die ruhige, waldreiche Umgebung ist ideal fÃ¼r Radtouren und SpaziergÃ¤nge.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["BÃ¼kfÃ¼rdÅ‘ besitzt das zweitgrÃ¶ÃŸte Heil- und Erlebnisbad in Ungarn.", "Das Heilwasser von BÃ¼k hat einen auÃŸergewÃ¶hnlich hohen Fluorid- und Jodgehalt.", "Die Stadt beherbergt einen der ersten und schÃ¶nsten GolfplÃ¤tze des Landes.", "BÃ¼k ist ein fÃ¼hrendes Zentrum fÃ¼r Rehabilitation im Westen Ungarns."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Thermalwasser wurde bei Ã–lbohrungen entdeckt.", "Beliebt bei internationalen GÃ¤sten."], "hu": ["A termÃ¡lvizet olajfÃºrÃ¡s kÃ¶zben talÃ¡ltÃ¡k.", "NÃ©pszerÅ± a nemzetkÃ¶zi vendÃ©gek kÃ¶rÃ©ben."], "ro": ["Apa termalÄƒ a fost descoperitÄƒ Ã®n timpul forajelor petroliere.", "Popular printre oaspeÈ›ii internaÈ›ionali."], "en": ["The thermal water was discovered during oil drilling.", "Popular with international guests."]},
  },
  {
    id: "oriszentpeter",
    type: "city",
    parent: "HU-VA",
    coords: [16.4167, 46.8333],
    name: {"de": "Sankt Peter in der Wart", "hu": "ÅriszentpÃ©ter", "ro": "ÅriszentpÃ©ter", "en": "ÅriszentpÃ©ter"},
    description: {"de": "Das Zentrum der Region ÅrsÃ©g, bekannt fÃ¼r seine traditionelle Architektur und Natur.", "hu": "Az ÅrsÃ©g kÃ¶zpontja, hagyomÃ¡nyos Ã©pÃ­tÃ©szetÃ©rÅ‘l Ã©s termÃ©szetÃ©rÅ‘l ismert.", "ro": "Centrul regiunii ÅrsÃ©g, cunoscut pentru arhitectura tradiÈ›ionalÄƒ È™i naturÄƒ.", "en": "The center of the ÅrsÃ©g region, known for its traditional architecture and nature."},
    descriptionAdvanced: {
      "de": "ÅriszentpÃ©ter ist das Zentrum der Region ÅrsÃ©g, einer einzigartigen Kulturlandschaft im DreilÃ¤ndereck. Die Siedlungsform der 'Szer' (verstreute WohnplÃ¤tze) ist typisch fÃ¼r dieses historische GrenzwÃ¤chterland. Die romanische Kirche aus dem 13. Jahrhundert diente einst als befestigte Wehrkirche gegen feindliche Angriffe. Die Region ist bekannt fÃ¼r ihr traditionelles Handwerk und Produkte wie hochwertiges KÃ¼rbiskernÃ¶l. ÅriszentpÃ©ter ist das Tor zu einem unberÃ¼hrten Nationalpark mit Mooren und dichten WÃ¤ldern.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["ÅriszentpÃ©ter bewahrt die archaische Siedlungsform der 'Szer'-Gruppen.", "Die mittelalterliche St.-Peter-und-Paul-Kirche beherbergt wertvolle Fresken.", "Der Ort ist landesweit bekannt fÃ¼r die Herstellung von ÅrsÃ©ger KÃ¼rbiskernÃ¶l.", "JÃ¤hrlich findet hier das traditionsreiche KÃ¼rbis-Festival statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Besteht aus mehreren verstreuten Ortsteilen (Szer).", "Bekannt fÃ¼r KÃ¼rbiskernÃ¶l."], "hu": ["TÃ¶bb, szÃ©tszÃ³rt telepÃ¼lÃ©srÃ©szbÅ‘l (szer) Ã¡ll.", "HÃ­res a tÃ¶kmagolajÃ¡rÃ³l."], "ro": ["Format din mai multe cÄƒtune dispersate (szer).", "Faimos pentru uleiul de seminÈ›e de dovleac."], "en": ["Consists of several scattered settlements (szer).", "Famous for pumpkin seed oil."]},
  },
  {
    id: "papa",
    type: "city",
    parent: "HU-VE",
    coords: [17.4667, 47.3333],
    name: {"de": "Papa", "hu": "PÃ¡pa", "ro": "PÃ¡pa", "en": "PÃ¡pa"},
    description: {"de": "Historische Stadt mit barocker Architektur und einem berÃ¼hmten Thermalbad.", "hu": "TÃ¶rtÃ©nelmi vÃ¡ros barokk Ã©pÃ­tÃ©szettel Ã©s hÃ­res termÃ¡lfÃ¼rdÅ‘vel.", "ro": "OraÈ™ istoric cu arhitecturÄƒ barocÄƒ È™i o faimoasÄƒ baie termalÄƒ.", "en": "Historic city with Baroque architecture and a famous thermal bath."},
    descriptionAdvanced: {
      "de": "PÃ¡pa, die 'Stadt des Barock', ist ein bedeutendes religiÃ¶ses und architektonisches Zentrum in Westungarn. Das prÃ¤chtige Schloss EsterhÃ¡zy ist ein Meisterwerk des Barock und bietet Einblicke in das Leben des Hochadels. Die Stadt ist zudem als 'kalvinistisches Athen' bekannt und beherbergt ein seit 1531 bestehendes Kollegium. Das einzigartige Blaudruckmuseum dokumentiert die jahrhundertealte Tradition der TextilfÃ¤rberei in der Region. Das moderne VÃ¡rkertfÃ¼rdÅ‘ bietet Heilung und Entspannung in historischer Parkumgebung.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["PÃ¡pa beherbergt eines der bedeutendsten BarockschlÃ¶sser der Familie EsterhÃ¡zy.", "Das Blaudruckmuseum ist Teil des immateriellen UNESCO-Weltkulturerbes.", "Die monumentale Hauptkirche am Hauptplatz wurde von Franz Anton Pilgram entworfen.", "Die Stadt blickt auf eine fast 500-jÃ¤hrige Tradition als Bildungszentrum zurÃ¼ck."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Sitz des Schlosses EsterhÃ¡zy.", "Wichtiges Zentrum der reformierten Kirche."], "hu": ["Az EsterhÃ¡zy-kastÃ©ly szÃ©khelye.", "A reformÃ¡tus egyhÃ¡z fontos kÃ¶zpontja."], "ro": ["Sediul Castelului EsterhÃ¡zy.", "Centru important al bisericii reformate."], "en": ["Seat of the EsterhÃ¡zy Palace.", "Important center of the Reformed church."]},
  },
  {
    id: "badacsony",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.5, 46.8],
    name: {"de": "Badacsony", "hu": "Badacsony", "ro": "Badacsony", "en": "Badacsony"},
    description: {"de": "Vulkanberg am Plattensee, berÃ¼hmt fÃ¼r seine Weine und Basaltformationen.", "hu": "Vulkanikus hegy a BalatonnÃ¡l, borairÃ³l Ã©s bazaltorgonÃ¡irÃ³l hÃ­res.", "ro": "Munte vulcanic la Lacul Balaton, faimos pentru vinurile sale È™i formaÈ›iunile de bazalt.", "en": "Volcanic mountain at Lake Balaton, famous for its wines and basalt formations."},
    descriptionAdvanced: {
      "de": "Der Badacsony ist der markanteste Zeugenberg am Nordufer des Plattensees, berÃ¼hmt fÃ¼r seine Sargform und Weinkultur. Die riesigen Basaltorgeln an seinen Flanken sind beeindruckende NaturdenkmÃ¤ler vulkanischen Ursprungs. Die sonnigen HÃ¤nge bieten ideale Bedingungen fÃ¼r den Weinbau, insbesondere fÃ¼r die seltene Rebsorte KÃ©knyelÅ±. Wanderwege fÃ¼hren zum Gipfel, von dem aus man ein atemberaubendes Panorama Ã¼ber den Balaton genieÃŸt. Badacsony vereint auf einzigartige Weise Naturgewalt, erstklassige Weine und landschaftliche Ã„sthetik.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Badacsony ist mit 438 Metern der hÃ¶chste Zeugenberg am Plattensee.", "Die Basaltorgeln am Berg erreichen eine HÃ¶he von bis zu 60 Metern.", "Der KÃ©knyelÅ±-Wein ist eine weltweite RaritÃ¤t und gedeiht fast nur hier.", "Vom Gipfelturm bietet sich ein Rundblick Ã¼ber das gesamte Balaton-Oberland."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r die Rebsorte 'KÃ©knyelÅ±'.", "Bietet Wanderwege mit Panoramablick."], "hu": ["A 'KÃ©knyelÅ±' szÅ‘lÅ‘fajtÃ¡rÃ³l ismert.", "PanorÃ¡mÃ¡s tÃºraÃºtvonalakat kÃ­nÃ¡l."], "ro": ["Cunoscut pentru soiul de struguri 'KÃ©knyelÅ±'.", "OferÄƒ trasee de drumeÈ›ie cu vedere panoramicÄƒ."], "en": ["Known for the 'KÃ©knyelÅ±' grape variety.", "Offers hiking trails with panoramic views."]},
  },
  {
    id: "heviz",
    type: "city",
    parent: "HU-ZA",
    coords: [17.1833, 46.7833],
    name: {"de": "Heiwis", "hu": "HÃ©vÃ­z", "ro": "HÃ©vÃ­z", "en": "HÃ©vÃ­z"},
    description: {"de": "WeltberÃ¼hmter Kurort mit dem grÃ¶ÃŸten biologisch aktiven Thermalsee der Welt.", "hu": "VilÃ¡ghÃ­rÅ± fÃ¼rdÅ‘vÃ¡ros a vilÃ¡g legnagyobb biolÃ³giailag aktÃ­v termÃ¡ltavÃ¡val.", "ro": "StaÈ›iune balnearÄƒ renumitÄƒ Ã®n Ã®ntreaga lume, cu cel mai mare lac termal activ biologic din lume.", "en": "World-famous spa town with the largest biologically active thermal lake in the world."},
    descriptionAdvanced: {
      "de": "HÃ©vÃ­z beherbergt den grÃ¶ÃŸten natÃ¼rlichen, biologisch aktiven Thermalsee der Welt und ist ein Weltruf genieÃŸender Kurort. Das heilende Wasser erneuert sich innerhalb weniger Tage komplett und bietet ganzjÃ¤hrig Badetemperaturen. Die WasseroberflÃ¤che ist charakteristisch mit roten Seerosen bedeckt, die zum Symbol der Stadt wurden. Die HÃ©vÃ­zer Heilkur wird erfolgreich bei Erkrankungen des Bewegungsapparates und rheumatischen Leiden eingesetzt. Die elegante Stadt besticht durch gepflegte Parks, Promenaden und erstklassige Wellness-Hotels.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der HÃ©vÃ­zer See ist der grÃ¶ÃŸte natÃ¼rliche Thermalsee weltweit.", "Das Wasser des Sees kÃ¼hlt auch im tiefsten Winter nicht unter 24 Grad ab.", "Der heilende Schlamm vom Seeboden wird fÃ¼r medizinische Zwecke genutzt.", "Die indischen roten Seerosen wurden Ende des 19. Jahrhunderts hier angesiedelt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Wassertemperatur sinkt auch im Winter nicht unter 24Â°C.", "Bekannt fÃ¼r seine Schlammpackungen."], "hu": ["A vÃ­z hÅ‘mÃ©rsÃ©klete tÃ©len sem sÃ¼llyed 24Â°C alÃ¡.", "HÃ­res az iszappakolÃ¡sairÃ³l."], "ro": ["Temperatura apei nu scade sub 24Â°C nici iarna.", "Cunoscut pentru Ã®mpachetÄƒrile cu nÄƒmol."], "en": ["The water temperature does not drop below 24Â°C even in winter.", "Known for its mud packs."]},
  },
  {
    id: "zalakaros",
    type: "city",
    parent: "HU-ZA",
    coords: [17.1167, 46.55],
    name: {"de": "Zalakaros", "hu": "Zalakaros", "ro": "Zalakaros", "en": "Zalakaros"},
    description: {"de": "Beliebte Kurstadt im SÃ¼dwesten Ungarns mit einem modernen Erlebnisbad.", "hu": "NÃ©pszerÅ± fÃ¼rdÅ‘vÃ¡ros DÃ©lnyugat-MagyarorszÃ¡gon, modern Ã©lmÃ©nyfÃ¼rdÅ‘vel.", "ro": "OraÈ™ balnear popular Ã®n sud-vestul Ungariei, cu o baie de aventurÄƒ modernÄƒ.", "en": "Popular spa town in southwestern Hungary with a modern adventure bath."},
    descriptionAdvanced: {
      "de": "Zalakaros ist einer der jÃ¼ngsten und dynamischsten Badekurorte Ungarns im SÃ¼dwesten des Landes. Die Entdeckung des fast 100 Grad heiÃŸen Thermalwassers im Jahr 1962 fÃ¼hrte zur GrÃ¼ndung eines modernen Badezentrums. Das Wasser ist reich an Jod, Brom und Schwefel und besonders wirksam bei chronischen Beschwerden. Die Stadt ist als 'Gartenstadt' bekannt, geprÃ¤gt von weiten GrÃ¼nflÃ¤chen und farbenfrohen Blumenbeeten. Die NÃ¤he zum Naturschutzgebiet Klein-Balaton macht den Ort auch fÃ¼r Naturfreunde attraktiv.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Zalakaros besitzt eine der heiÃŸesten Thermalwasserquellen in ganz Ungarn.", "Die Stadt wurde mehrfach als 'blÃ¼hendste Stadt Ungarns' ausgezeichnet.", "Das Thermalbad verfÃ¼gt Ã¼ber ein modernes Erlebnisreich fÃ¼r Familien und Kinder.", "Der Ort ist ein idealer Ausgangspunkt fÃ¼r AusflÃ¼ge zum Naturschutzgebiet Klein-Balaton."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Thermalwasser wurde 1962 entdeckt.", "Eines der meistbesuchten BÃ¤der Ungarns."], "hu": ["A termÃ¡lvizet 1962-ben fedeztÃ©k fel.", "MagyarorszÃ¡g egyik leglÃ¡togatottabb fÃ¼rdÅ‘je."], "ro": ["Apa termalÄƒ a fost descoperitÄƒ Ã®n 1962.", "Una dintre cele mai vizitate bÄƒi din Ungaria."], "en": ["The thermal water was discovered in 1962.", "One of the most visited baths in Hungary."]},
    },
    {
    id: "balaton-to",
    type: "lake",
    parent: "HU-VE",
    coords: [17.88, 46.88],
    name: {"de": "Plattensee", "hu": "Balaton", "ro": "Lacul Balaton", "en": "Lake Balaton"},
    image: "/geo-images/hungary/balaton-to.webp",
    description: {"de": "Der Balaton ist der grÃ¶ÃŸte See Mitteleuropas und das bedeutendste Urlaubsziel fÃ¼r Sommerurlauber in Ungarn.", "hu": "A Balaton KÃ¶zÃ©p-EurÃ³pa legnagyobb tava Ã©s a magyarorszÃ¡gi nyÃ¡ri Ã¼dÃ¼lÃ©sek legnÃ©pszerÅ±bb cÃ©lpontja.", "ro": "Lacul Balaton este cel mai mare lac din Europa CentralÄƒ È™i cea mai importantÄƒ destinaÈ›ie de vacanÈ›Äƒ din Ungaria.", "en": "Lake Balaton is the largest lake in Central Europe and the most important holiday destination in Hungary."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Balaton, a 'magyar tenger', KÃ¶zÃ©p-EurÃ³pa legnagyobb Ã©desvÃ­zi tava, Ã©s MagyarorszÃ¡g legfontosabb turisztikai rÃ©giÃ³ja. A tÃ³ 77 kilomÃ©ter hosszan nyÃºlik el, Ã©szaki partjÃ¡t vulkanikus hegyek Ã©s tÃ¶rtÃ©nelmi vÃ¡rosok (Tihany, BalatonfÃ¼red), dÃ©li partjÃ¡t pedig sekÃ©ly vÃ­z Ã©s pezsgÅ‘ Ã¼dÃ¼lÅ‘vÃ¡rosok (SiÃ³fok, BalatonfÃ¶ldvÃ¡r) jellemzik. A Balaton nemcsak a fÃ¼rdÅ‘zÃ©srÅ‘l szÃ³l: a kÃ¶rnyÃ©k borvidÃ©kei, a Balaton-felvidÃ©ki Nemzeti Park termÃ©szeti kincsei Ã©s a szÃ¡mtalan vitorlÃ¡sverseny (mint a KÃ©kszalag) mind a tÃ³ vonzerejÃ©t nÃ¶velik. A vÃ­z tiszta Ã©s nyÃ¡ron kellemesen felmelegszik, ideÃ¡lis feltÃ©teleket biztosÃ­tva a csalÃ¡doknak. A Balaton minden Ã©vszakban mÃ¡s arcÃ¡t mutatja, tÃ©len a befagyott tÃ³ Ã©s a korcsolyÃ¡zÃ¡s Ã©lmÃ©nye vonzza a lÃ¡togatÃ³kat.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wird aufgrund seiner GrÃ¶ÃŸe oft als das 'Ungarische Meer' bezeichnet.", "Bekannt fÃ¼r sein flaches, im Sommer angenehm warmes Wasser."], "hu": ["Hatalmas mÃ©rete miatt gyakran a 'magyar tengernek' nevezik.", "SekÃ©ly, nyÃ¡ron kellemesen felmelegedÅ‘ vizÃ©rÅ‘l ismert szerte a vilÃ¡gon."], "ro": ["DatoritÄƒ dimensiunii sale mari, este adesea numit 'Marea Ungariei'.", "Cunoscut pentru apa sa puÈ›in adÃ¢ncÄƒ È™i plÄƒcut de caldÄƒ Ã®n timpul verii."], "en": ["Often referred to as the 'Hungarian Sea' due to its large size.", "Known for its shallow water that warms up pleasantly in the summer."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Balaton felÃ¼lete kÃ¶zel 600 nÃ©gyzetkilomÃ©ter, Ã¡tlagos mÃ©lysÃ©ge azonban csak 3-4 mÃ©ter.",
        "A tÃ³ medre kÃ¶rÃ¼lbelÃ¼l 15-20 ezer Ã©vvel ezelÅ‘tt alakult ki tektonikai mozgÃ¡sok kÃ¶vetkeztÃ©ben.",
        "A Balaton legmÃ©lyebb pontja a Tihanyi-kÃºtnÃ¡l talÃ¡lhatÃ³, kÃ¶rÃ¼lbelÃ¼l 11-12 mÃ©ter.",
        "A tÃ³ kÃ¶rÃ¼l kiÃ©pÃ­tett Balatoni BringakÃ¶rÃºt hossza tÃ¶bb mint 200 kilomÃ©ter.",
        "Ã‰vente itt rendezik meg a KÃ©kszalag nemzetkÃ¶zi vitorlÃ¡sversenyt, EurÃ³pa legnagyobb tÃ³kerÃ¼lÅ‘ versenyÃ©t."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "tisza-folyo",
    type: "river",
    parent: "HU-CS",
    coords: [20.15, 46.25],
    name: {"de": "TheiÃŸ", "hu": "Tisza", "ro": "Tisa", "en": "Tisza"},
    image: "/geo-images/hungary/tisza-folyo.webp",
    description: {"de": "Die TheiÃŸ ist der zweitlÃ¤ngste Fluss Ungarns und prÃ¤gt maÃŸgeblich die Landschaft der GroÃŸen Tiefebene.", "hu": "A Tisza MagyarorszÃ¡g mÃ¡sodik leghosszabb folyÃ³ja, amely meghatÃ¡rozza az AlfÃ¶ld tÃ¡jegysÃ©gÃ©nek kÃ©pÃ©t.", "ro": "Tisa este al doilea cel mai lung rÃ¢u din Ungaria È™i modeleazÄƒ peisajul Marii CÃ¢mpii Maghiare.", "en": "The Tisza is the second longest river in Hungary and significantly shapes the landscape of the Great Plain."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Tisza MagyarorszÃ¡g mÃ¡sodik legnagyobb folyÃ³ja, amelyet a magyar nÃ©plÃ©lek Ã©s kÃ¶ltÃ©szet (kÃ¼lÃ¶nÃ¶sen PetÅ‘fi SÃ¡ndor) gyakran a 'legmagyarabb folyÃ³kÃ©nt' emleget. A Tisza kanyargÃ³s Ãºtja sorÃ¡n Ã©rinti az AlfÃ¶ld szinte minden fontosabb vÃ¡rosÃ¡t, s Ã©lete elvÃ¡laszthatatlan a magyar mezÅ‘gazdasÃ¡gtÃ³l Ã©s kultÃºrÃ¡tÃ³l. A folyÃ³ hÃ­res a 'tiszavirÃ¡gzÃ¡srÃ³l', a kÃ©rÃ©szek nÃ¡sztÃ¡ncÃ¡rÃ³l, amely minden Ã©v jÃºniusÃ¡ban lÃ¡tvÃ¡nyos termÃ©szeti jelensÃ©g. A Tisza partja mentÃ©n szÃ¡mtalan szabadstrand, horgÃ¡szhely Ã©s vÃ­zitÃºra-Ãºtvonal talÃ¡lhatÃ³. A folyÃ³ felsÅ‘ szakasza gyors Ã©s tiszta, mÃ­g az alsÃ³bb szakaszokon lassÃºvÃ¡ Ã©s mÃ©ltÃ³sÃ¡gossÃ¡ vÃ¡lik. A Tisza nemcsak vÃ­zi Ãºt, hanem egy kÃ¼lÃ¶nleges Ã¶koszisztÃ©ma is, amely Ã¡rtÃ©ri erdÅ‘ivel Ã©s gazdag Ã©lÅ‘vilÃ¡gÃ¡val a termÃ©szetvÃ©delem egyik legfontosabb szÃ­ntere hazÃ¡nkban.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["BerÃ¼hmt fÃ¼r die 'TheiÃŸblÃ¼te', das spektakulÃ¤re MassenschlÃ¼pfen von Eintagsfliegen.", "Ein wichtiges Gebiet fÃ¼r den Wassertourismus und den Fischfang im Land."], "hu": ["HÃ­res a tiszavirÃ¡gzÃ¡srÃ³l, a kÃ©rÃ©szek lÃ¡tvÃ¡nyos tÃ¶meges rajzÃ¡sÃ¡rÃ³l.", "Az orszÃ¡g egyik legfontosabb terÃ¼lete a vÃ­zitÃºrÃ¡zÃ¡s Ã©s a horgÃ¡szat szÃ¡mÃ¡ra."], "ro": ["Faimos pentru 'Ã®nflorirea Tisei', roirea spectaculoasÄƒ a efemeridelor.", "O zonÄƒ importantÄƒ pentru turismul nautic È™i pescuitul din È›arÄƒ."], "en": ["Famous for the 'Tisza blooming', a spectacular mass swarming of mayflies.", "An important area for water tourism and fishing in the country."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Tisza teljes hossza 962 kilomÃ©ter, ebbÅ‘l kÃ¶zel 600 kilomÃ©ter esik MagyarorszÃ¡g terÃ¼letÃ©re.",
        "A tiszavirÃ¡gzÃ¡s egy egyedÃ¼lÃ¡llÃ³ jelensÃ©g, amikor kÃ©rÃ©szek milliÃ³i rajzanak a vÃ­z felett nÃ©hÃ¡ny napig.",
        "A folyÃ³t a 19. szÃ¡zadban SzÃ©chenyi IstvÃ¡n kezdemÃ©nyezÃ©sÃ©re szabÃ¡lyoztÃ¡k, jelentÅ‘sen lerÃ¶vidÃ­tve az ÃºtjÃ¡t.",
        "A Tisza-tÃ³ MagyarorszÃ¡g legnagyobb mestersÃ©ges tava, amely a Tisza szabÃ¡lyozÃ¡sa sorÃ¡n jÃ¶tt lÃ©tre.",
        "A Tisza mentÃ©n talÃ¡lhatÃ³ a Gemenci erdÅ‘ egy rÃ©sze, amely az orszÃ¡g legvadregÃ©nyesebb tÃ¡jai kÃ¶zÃ© tartozik."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "duna-folyo",
    type: "river",
    parent: "HU-BU",
    coords: [19.04, 47.50],
    name: {"de": "Donau", "hu": "Duna", "ro": "DunÄƒrea", "en": "Danube"},
    image: "/geo-images/hungary/duna-folyo.webp",
    description: {"de": "Die Donau ist die wichtigste WasserstraÃŸe Ungarns und verbindet das Land mit dem Schwarzen Meer.", "hu": "A Duna MagyarorszÃ¡g legfontosabb vÃ­zi Ãºtja, amely Ã¶sszekÃ¶ti az orszÃ¡got a Fekete-tengerrel.", "ro": "DunÄƒrea este cea mai importantÄƒ cale navigabilÄƒ a Ungariei, conectÃ¢nd È›ara cu Marea NeagrÄƒ.", "en": "The Danube is the most important waterway in Hungary, connecting the country with the Black Sea."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Duna EurÃ³pa mÃ¡sodik leghosszabb folyÃ³ja Ã©s MagyarorszÃ¡g legfontosabb vÃ­zi Ãºtja, amely Ã©szak-dÃ©li irÃ¡nyban szeli kettÃ© az orszÃ¡got. A folyÃ³ mentÃ©n Ã©pÃ¼lt fel a fÅ‘vÃ¡ros, Budapest, amelynek panorÃ¡mÃ¡ja a DunÃ¡val egyÃ¼tt a vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze. A Duna magyarorszÃ¡gi szakasza rendkÃ­vÃ¼l vÃ¡ltozatos: a Dunakanyar szÅ±k vÃ¶lgyÃ©tÅ‘l a KisalfÃ¶ld rÃ³nasÃ¡gÃ¡ig Ã©s a dÃ©li Ã¡rtÃ©ri erdÅ‘kig szÃ¡mos tÃ¡jegysÃ©get Ã©rint. A folyÃ³ nemcsak a gazdasÃ¡g Ã©s a kÃ¶zlekedÃ©s alapja, hanem a turizmusÃ© is: szÃ¡llodahajÃ³k, vÃ­zitÃºrÃ¡zÃ³k Ã©s horgÃ¡szok ezrei Ã©lvezik a vizÃ©t. A Duna menti gÃ¡tak Ã©s sÃ©tÃ¡nyok a vÃ¡rosi kikapcsolÃ³dÃ¡s legfontosabb szÃ­nterei. TÃ¶rtÃ©nelmi szempontbÃ³l a Duna mindig is Ã¶sszekÃ¶tÅ‘ kapocs volt EurÃ³pa nemzetei kÃ¶zÃ¶tt, s ma is fontos stratÃ©giai Ã©s kÃ¶rnyezetvÃ©delmi tengely.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["FlieÃŸt direkt durch das Herz der ungarischen Hauptstadt Budapest.", "Dient als natÃ¼rliche Grenze zwischen mehreren europÃ¤ischen Staaten."], "hu": ["KÃ¶zvetlenÃ¼l a magyar fÅ‘vÃ¡ros, Budapest szÃ­vÃ©n folyik keresztÃ¼l.", "TermÃ©szetes hatÃ¡rkÃ©nt szolgÃ¡l tÃ¶bb eurÃ³pai Ã¡llam kÃ¶zÃ¶tt."], "ro": ["Curge direct prin inima capitalei maghiare, Budapesta.", "ServeÈ™te ca graniÈ›Äƒ naturalÄƒ Ã®ntre mai multe state europene."], "en": ["Flows directly through the heart of the Hungarian capital, Budapest.", "Serves as a natural border between several European states."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Duna MagyarorszÃ¡gon 417 kilomÃ©ter hosszan folyik keresztÃ¼l.",
        "A folyÃ³ a Fekete-erdÅ‘ben ered Ã©s a Fekete-tengerbe torkollik, 10 orszÃ¡got Ã©rintve.",
        "BudapestnÃ©l a Duna Ã¡tlagos szÃ©lessÃ©ge 400-500 mÃ©ter, mÃ©lysÃ©ge pedig 3-10 mÃ©ter kÃ¶zÃ¶tt mozog.",
        "A Duna mentÃ©n fekszik a Dunakanyar, ahol a folyÃ³ Ã©les kanyart vesz a VisegrÃ¡di-hegysÃ©g Ã©s a BÃ¶rzsÃ¶ny kÃ¶zÃ¶tt.",
        "A Duna-DrÃ¡va Nemzeti Park Å‘rzi a folyÃ³ menti legÃ©rtÃ©kesebb vizes Ã©lÅ‘helyeket Ã©s Ã¡rtÃ©ri erdÅ‘ket."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "kekes-teto",
    type: "mountain",
    parent: "HU-HE",
    coords: [20.0108, 47.8728],
    name: {"de": "KÃ©kes", "hu": "KÃ©kes-tetÅ‘", "ro": "KÃ©kes", "en": "KÃ©kes"},
    image: "/geo-images/hungary/kekes-teto.webp",
    description: {"de": "Mit 1014 Metern ist der KÃ©kes der hÃ¶chste Gipfel Ungarns und ein beliebtes Ziel fÃ¼r Wanderer.", "hu": "A 1014 mÃ©ter magas KÃ©kes-tetÅ‘ MagyarorszÃ¡g legmagasabb pontja Ã©s kÃ¶zkedvelt tÃºracÃ©lpont.", "ro": "Cu o Ã®nÄƒlÈ›ime de 1014 metri, KÃ©kes este cel mai Ã®nalt vÃ¢rf din Ungaria È™i o destinaÈ›ie popularÄƒ.", "en": "At 1014 meters, KÃ©kes is the highest peak in Hungary and a popular destination for hikers."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A KÃ©kes-tetÅ‘ MagyarorszÃ¡g legmagasabb pontja, a MÃ¡tra-hegysÃ©g Ã©s az orszÃ¡g szimbÃ³luma, amely 1014 mÃ©terrel magasodik a tengerszint fÃ¶lÃ©. A csÃºcs tetejÃ©n Ã¡llÃ³ tÃ©vÃ©torony kilÃ¡tÃ³ja Ã©s az ott talÃ¡lhatÃ³ jellegzetes nemzeti szÃ­nÅ± kÅ‘ az utazÃ³k kÃ¶telezÅ‘ megÃ¡llÃ³ja. A KÃ©kes nemcsak fÃ¶ldrajzi rekord, hanem nÃ©pszerÅ± gyÃ³gyhely is: tiszta, pormentes levegÅ‘je Ã©s kÃ¼lÃ¶nleges klÃ­mÃ¡ja kivÃ¡lÃ³an alkalmas lÃ©gzÅ‘szervi megbetegedÃ©sek kezelÃ©sÃ©re. TÃ©len a KÃ©kes az orszÃ¡g legfontosabb sÃ­kÃ¶zpontjÃ¡vÃ¡ vÃ¡lik, ahol MagyarorszÃ¡g leghosszabb lesiklÃ³pÃ¡lyÃ¡ja vÃ¡rja a tÃ©li sportok kedvelÅ‘it. Az Ã©v tÃ¶bbi szakaszÃ¡ban a sÅ±rÅ± bÃ¼kkerdÅ‘k Ã©s a kiÃ©pÃ­tett tÃºraÃºtvonalak vonzzÃ¡k a termÃ©szetjÃ¡rÃ³kat, akik a csÃºcsrÃ³l lenyÅ±gÃ¶zÅ‘ panorÃ¡mÃ¡t Ã©lvezhetnek az AlfÃ¶ldre Ã©s a TÃ¡tra vonulataira.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der markante Fernsehturm auf dem Gipfel dient auch als Aussichtsplattform.", "Ein beliebtes Skigebiet im Winter mit den lÃ¤ngsten Pisten des Landes."], "hu": ["A csÃºcson Ã¡llÃ³ tÃ©vÃ©torony kilÃ¡tÃ³kÃ©nt is funkcionÃ¡l a lÃ¡togatÃ³k szÃ¡mÃ¡ra.", "TÃ©len nÃ©pszerÅ± sÃ­terep, itt talÃ¡lhatÃ³ az orszÃ¡g leghosszabb sÃ­pÃ¡lyÃ¡ja."], "ro": ["Turnul de televiziune de pe vÃ¢rf serveÈ™te È™i ca platformÄƒ de observaÈ›ie.", "O staÈ›iune de schi popularÄƒ iarna, cu cele mai lungi pÃ¢rtii din È›arÄƒ."], "en": ["The prominent TV tower on the summit also serves as an observation deck.", "A popular ski resort in winter with the longest slopes in the country."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A KÃ©kes-tetÅ‘ magassÃ¡ga pontosan 1014 mÃ©ter, amit a csÃºcson egy kÅ‘ jelÃ¶l.",
        "A tÃ©vÃ©torony 176 mÃ©ter magas, kilÃ¡tÃ³ja pedig 45 mÃ©ter magassÃ¡gban talÃ¡lhatÃ³.",
        "Itt talÃ¡lhatÃ³ MagyarorszÃ¡g leghosszabb sÃ­pÃ¡lyÃ¡ja, amely 1,8 kilomÃ©ter hosszÃº.",
        "A KÃ©kesen mÃ©rtÃ©k az orszÃ¡gban eddigi legvastagabb hÃ³takarÃ³t (151 cm) 1987-ben.",
        "A csÃºcs kÃ¶rnyÃ©kÃ©n szÃ¡mos szanatÃ³rium Ã©s gyÃ³gyszÃ¡llÃ³ mÅ±kÃ¶dik a klÃ­ma gyÃ³gyhatÃ¡sa miatt."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szalajka-volgy-poi",
    type: "landmark",
    parent: "HU-HE",
    coords: [20.4, 48.1],
    name: {"de": "Szalajka-Tal", "hu": "Szalajka-vÃ¶lgy", "ro": "Valea Szalajka", "en": "Szalajka Valley"},
    image: "/geo-images/hungary/szalajka-volgy.webp",
    description: {"de": "Das Szalajka-Tal ist ein idyllisches Ausflugsziel im BÃ¼kk-Gebirge, berÃ¼hmt fÃ¼r seine WasserfÃ¤lle.", "hu": "A Szalajka-vÃ¶lgy idilli kirÃ¡ndulÃ³hely a BÃ¼kkben, amely vÃ­zesÃ©seirÅ‘l Ã©s forrÃ¡sairÃ³l hÃ­res.", "ro": "Valea Szalajka este o destinaÈ›ie idilicÄƒ Ã®n munÈ›ii BÃ¼kk, faimoasÄƒ pentru cascadele sale.", "en": "Szalajka Valley is an idyllic excursion spot in the BÃ¼kk Mountains, famous for its waterfalls."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Szalajka-vÃ¶lgy a BÃ¼kk-hegysÃ©g egyik legszebb Ã©s leglÃ¡togatottabb termÃ©szeti lÃ¡tvÃ¡nyossÃ¡ga SzilvÃ¡svÃ¡rad mellett. A vÃ¶lgy hÃ­res kristÃ¡lytiszta patakjairÃ³l, pisztrÃ¡ngos tavairÃ³l Ã©s a kÃ¼lÃ¶nleges FÃ¡tyol-vÃ­zesÃ©srÅ‘l, ahol a vÃ­z 17 mÃ©ter magas mÃ©sztufa-lÃ©pcsÅ‘kÃ¶n zÃºdul le. A lÃ¡togatÃ³k gyalogosan vagy a nÃ©pszerÅ± erdei kisvasÃºttal fedezhetik fel a vÃ¶lgy kincseit, kÃ¶ztÃ¼k a SzabadtÃ©ri Erdei MÃºzeumot Ã©s az IstÃ¡llÃ³s-kÅ‘i-barlangot, ahol Å‘semberi leleteket talÃ¡ltak. A vÃ¶lgy gasztronÃ³miai kÃ¼lÃ¶nlegessÃ©ge a frissen sÃ¼lt vagy fÃ¼stÃ¶lt pisztrÃ¡ng, amelyet helyben tenyÃ©sztenek. A Szalajka-vÃ¶lgy a termÃ©szet, a tÃ¶rtÃ©nelem Ã©s a rekreÃ¡ciÃ³ tÃ¶kÃ©letes talÃ¡lkozÃ³helye, amely minden korosztÃ¡ly szÃ¡mÃ¡ra kÃ­nÃ¡l felfedeznivalÃ³t.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der stufenfÃ¶rmige Schleierwasserfall ist eines der bekanntesten Naturwunder Ungarns.", "Eine Schmalspurbahn bringt Besucher tief in das malerische Tal hinein."], "hu": ["A lÃ©pcsÅ‘zetes FÃ¡tyol-vÃ­zesÃ©s MagyarorszÃ¡g egyik legismertebb termÃ©szeti csodÃ¡ja.", "Erdei kisvasÃºt szÃ¡llÃ­tja a lÃ¡togatÃ³kat mÃ©lyen a festÅ‘i vÃ¶lgy belsejÃ©be."], "ro": ["Cascada FÃ¡tyol Ã®n trepte este una dintre cele mai cunoscute minuni naturale.", "O cale feratÄƒ Ã®ngustÄƒ transportÄƒ vizitatorii adÃ¢nc Ã®n valea pitoreascÄƒ."], "en": ["The terraced Veil Waterfall is one of Hungary's best-known natural wonders.", "A narrow-gauge forest railway takes visitors deep into the scenic valley."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A FÃ¡tyol-vÃ­zesÃ©s mÃ©sztufa gÃ¡tjait a patak vizÃ©bÅ‘l kivÃ¡lÃ³ mÃ©sz alakÃ­totta ki Ã©vezredek alatt.",
        "A vÃ¶lgy neve a 'szalajka' (szalmiÃ¡kszesz) Ã©getÃ©sÃ©bÅ‘l ered, ami egykor fontos ipari tevÃ©kenysÃ©g volt itt.",
        "SzilvÃ¡svÃ¡rad a vilÃ¡ghÃ­rÅ± lipicai mÃ©nes otthona, lovasstadionja nemzetkÃ¶zi versenyek szÃ­nhelye.",
        "Az IstÃ¡llÃ³s-kÅ‘i-barlang a BÃ¼kk egyik legmagasabb pontjÃ¡n fekvÅ‘ Å‘semberbarlang.",
        "A vÃ¶lgyben kÃ¶zlekedÅ‘ kisvasÃºt MagyarorszÃ¡g egyik legforgalmasabb erdei vasÃºtvonala."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gemenci-erdo-poi",
    type: "forest",
    parent: "HU-TO",
    coords: [18.8, 46.2],
    name: {"de": "Gemencer Wald", "hu": "Gemenci erdÅ‘", "ro": "PÄƒdurea Gemenc", "en": "Gemenc Forest"},
    image: "/geo-images/hungary/gemenci-erdo.webp",
    description: {"de": "Der Gemencer Wald ist das grÃ¶ÃŸte zusammenhÃ¤ngende Auwaldgebiet Mitteleuropas entlang der Donau.", "hu": "A Gemenci erdÅ‘ KÃ¶zÃ©p-EurÃ³pa legnagyobb Ã¶sszefÃ¼ggÅ‘ Ã¡rtÃ©ri erdÅ‘terÃ¼lete a Duna mentÃ©n.", "ro": "PÄƒdurea Gemenc este cea mai mare zonÄƒ de luncÄƒ continuÄƒ din Europa CentralÄƒ, de-a lungul DunÄƒrii.", "en": "The Gemenc Forest is the largest continuous floodplain forest in Central Europe along the Danube."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A Gemenci erdÅ‘ EurÃ³pa legnagyobb Ã¶sszefÃ¼ggÅ‘ Ã¡rtÃ©ri erdeje, a Duna-DrÃ¡va Nemzeti Park Ã©kkÃ¶ve SzekszÃ¡rd Ã©s Baja kÃ¶zÃ¶tt. Ez a vadregÃ©nyes tÃ¡j a folyÃ³ Ã¡llandÃ³ Ã¡radÃ¡sai Ã©s apadÃ¡sai rÃ©vÃ©n jÃ¶tt lÃ©tre, kÃ¼lÃ¶nleges vizes Ã©lÅ‘helyet biztosÃ­tva szÃ¡mtalan Ã¡llat- Ã©s nÃ¶vÃ©nyfajnak. Gemenc vilÃ¡gszerte hÃ­res gÃ­mszarvas-Ã¡llomÃ¡nyÃ¡rÃ³l, amelynek trÃ³feÃ¡i a vilÃ¡g legjobbjai kÃ¶zÃ© tartoznak, valamint itt talÃ¡lhatÃ³ a vilÃ¡g legsÅ±rÅ±bb fekete gÃ³lya populÃ¡ciÃ³ja is. Az erdÅ‘t legegyszerÅ±bben a Gemenci Ãllami Erdei VasÃºttal vagy vÃ­zi Ãºton, kenuval lehet felfedezni. A sÅ±rÅ± nÃ¡dasok, a holtÃ¡gak nyugalma Ã©s az Ã³riÃ¡si fÅ±zfÃ¡k Ã¡rnyÃ©ka a termÃ©szet Ã©rintetlensÃ©gÃ©nek Ã©rzÃ©sÃ©t nyÃºjtja minden lÃ¡togatÃ³nak.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["BerÃ¼hmt fÃ¼r seinen Bestand an prachtvollen GÃ­mszarvas-Hirschen und Wildschweinen.", "Die Region ist ein wichtiges Brutgebiet fÃ¼r geschÃ¼tzte SchwarzstÃ¶rche."], "hu": ["HÃ­res kapitÃ¡lis gÃ­mszarvas-Ã¡llomÃ¡nyÃ¡rÃ³l Ã©s a terÃ¼letÃ©n Ã©lÅ‘ vaddisznÃ³krÃ³l.", "A vidÃ©k a vÃ©dett fekete gÃ³lyÃ¡k egyik legfontosabb fÃ©szkelÅ‘helye az orszÃ¡gban."], "ro": ["FaimoasÄƒ pentru efectivul sÄƒu de cerbi comuni È™i porci mistreÈ›i.", "Regiunea este un loc important de cuibÄƒrit pentru barza neagrÄƒ protejatÄƒ."], "en": ["Famous for its population of magnificent red deer and wild boars.", "The region is an important nesting ground for protected black storks."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A Gemenci erdÅ‘ terÃ¼lete kÃ¶zel 20 ezer hektÃ¡r, Ã©s az orszÃ¡g legfontosabb vadrezervÃ¡tuma.",
        "Itt Ã©l a legtÃ¶bb fekete gÃ³lya MagyarorszÃ¡gon, Ã©vente mintegy 40-50 pÃ¡r fÃ©szkel az Ã¡rtÃ©ren.",
        "A Gemenci kisvasÃºt 30 kilomÃ©ter hosszan kanyarog az Ã¡rtÃ©ri erdÅ‘ sÅ±rÅ±jÃ©ben.",
        "Az erdÅ‘ben talÃ¡lhatÃ³ a 'Gemenc kirÃ¡lya' nevÅ± fa, amely egy hatalmas, tÃ¶bb szÃ¡z Ã©ves fekete nyÃ¡r.",
        "Gemenc volt a helyszÃ­ne az 1971-es VadÃ¡szati VilÃ¡gkiÃ¡llÃ­tÃ¡s szÃ¡mos bemutatÃ³jÃ¡nak."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nemzeti-muzeum-poi",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.06, 47.49],
    name: {"de": "Ungarisches Nationalmuseum", "hu": "Magyar Nemzeti MÃºzeum", "ro": "Muzeul NaÈ›ional Maghiar", "en": "Hungarian National Museum"},
    image: "/geo-images/hungary/nemzeti-muzeum.webp",
    description: {"de": "Das Nationalmuseum bewahrt die wichtigsten SchÃ¤tze der ungarischen Geschichte und Kultur auf.", "hu": "A Magyar Nemzeti MÃºzeum a magyar tÃ¶rtÃ©nelem Ã©s kultÃºra legfontosabb emlÃ©keit Å‘rzi.", "ro": "Muzeul NaÈ›ional Maghiar pÄƒstreazÄƒ cele mai importante comori ale istoriei È™i culturii maghiare.", "en": "The National Museum preserves the most important treasures of Hungarian history and culture."},
    
    descriptionAdvanced: {
      "de": "Das Ungarische Nationalmuseum in Budapest ist das bedeutendste Museum zur Geschichte des Landes und ein Symbol der ungarischen nationalen IdentitÃ¤t. Das monumentale klassizistische GebÃ¤ude wurde zwischen 1837 und 1847 errichtet und spielte eine zentrale Rolle in der ungarischen Revolution von 1848, als hier die ersten Forderungen der Nation verlesen wurden. Die Ausstellungen des Museums fÃ¼hren Besucher durch die gesamte Geschichte Ungarns, von der Urzeit Ã¼ber die Landnahme und das goldene Mittelalter bis hin zur Neuzeit. Besonders beeindruckend sind der KrÃ¶nungsmantel der ungarischen KÃ¶nige und die reiche Sammlung archÃ¤ologischer SchÃ¤tze aus dem Karpatenbecken. Das Museum ist nicht nur ein Ort der Bewahrung, sondern auch ein Ort des Gedenkens und der nationalen Besinnung. Der umliegende Museumsgarten ist ein beliebter Treffpunkt im Herzen der Stadt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das GebÃ¤ude spielte eine zentrale Rolle beim Ausbruch der Revolution am 15. MÃ¤rz 1848.", "Beherbergt den wertvollen ungarischen KrÃ¶nungsmantel aus dem 11. Jahrhundert."], "hu": ["Az Ã©pÃ¼let kÃ¶zponti szerepet jÃ¡tszott az 1848. mÃ¡rcius 15-i forradalom kirobbanÃ¡sakor.", "Itt Å‘rzik az Ã©rtÃ©kes, 11. szÃ¡zadbÃ³l szÃ¡rmazÃ³ magyar koronÃ¡zÃ¡si palÃ¡stot."], "ro": ["ClÄƒdirea a jucat un rol central Ã®n izbucnirea revoluÈ›iei din 15 martie 1848.", "GÄƒzduieÈ™te preÈ›ioasa mantie de Ã®ncoronare maghiarÄƒ din secolul al XI-lea."], "en": ["The building played a central role in the outbreak of the revolution on March 15, 1848.", "Houses the precious 11th-century Hungarian coronation mantle."]},
    
    factsAdvanced: {
      "de": ["Das Nationalmuseum ist das Ã¤lteste Ã¶ffentliche Museum Ungarns, gegrÃ¼ndet 1802.", "Das GebÃ¤ude gilt als eines der schÃ¶nsten Beispiele der klassizistischen Architektur in Mitteleuropa.", "Auf den Treppen des Museums begann am 15. MÃ¤rz 1848 die ungarische Revolution.", "Das Museum beherbergt den KrÃ¶nungsmantel des Heiligen Stephan aus dem Jahr 1031."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
    {
    id: "aquaworld-budapest",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.11, 47.60],
    name: {"de": "Aquaworld Budapest", "hu": "Aquaworld Budapest", "ro": "Aquaworld Budapesta", "en": "Aquaworld Budapest"},
    image: "/geo-images/hungary/aquaworld-budapest.webp",
    description: {"de": "Aquaworld Budapest ist einer der grÃ¶ÃŸten Ã¼berdachten Wasser-Themenparks in ganz Europa.", "hu": "Az Aquaworld Budapest EurÃ³pa egyik legnagyobb fedett vÃ­zi Ã©lmÃ©nyparkja Ã©s szabadidÅ‘kÃ¶zpontja.", "ro": "Aquaworld Budapesta este unul dintre cele mai mari parcuri tematice acvatice acoperite din Europa.", "en": "Aquaworld Budapest is one of the largest indoor water theme parks in all of Europe."},
    
    descriptionAdvanced: {
      "de": "Aquaworld Budapest ist einer der grÃ¶ÃŸten Ã¼berdachten Wasserthemenparks Europas und bietet ein ganzjÃ¤hriges Tropenerlebnis im Norden der ungarischen Hauptstadt. Der Park ist architektonisch beeindruckend durch seine riesige Kuppel mit einem Durchmesser von 72 Metern, die den zentralen Bereich Ã¼berspannt. Das HerzstÃ¼ck des Komplexes ist eine detailgetreue Nachbildung des kambodschanischen Angkor Wat Tempels, der von HÃ¤ngebrÃ¼cken, Palmen und zahlreichen Pools umgeben ist. Mit 17 Innen- und AuÃŸenbecken sowie 11 spektakulÃ¤ren Rutschen bietet Aquaworld Unterhaltung fÃ¼r alle Altersklassen und Adrenalinjunkies. Neben dem WasserspaÃŸ verfÃ¼gt der Komplex Ã¼ber eine groÃŸzÃ¼gige Saunawelt und ein Wellness-Zentrum fÃ¼r Entspannungssuchende. Es ist das ideale Ausflugsziel fÃ¼r Familien, die unabhÃ¤ngig vom Wetter einen Tag voller Abenteuer und Erholung erleben mÃ¶chten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der beeindruckende Kuppelbau erinnert architektonisch an den Tempel von Angkor Wat.", "Bietet 17 verschiedene Rutschen und zahlreiche In- und Outdoorbecken fÃ¼r Familien."], "hu": ["A monumentÃ¡lis kupolÃ¡s Ã©pÃ¼let Ã©pÃ­tÃ©szetileg az angkori templomvilÃ¡got idÃ©zi meg.", "17 kÃ¼lÃ¶nbÃ¶zÅ‘ csÃºszda Ã©s szÃ¡mos kinti-benti medence vÃ¡rja a csalÃ¡dokat."], "ro": ["ClÄƒdirea impresionantÄƒ cu cupolÄƒ aminteÈ™te de templul Angkor Wat.", "OferÄƒ 17 tobogane diferite È™i numeroase bazine interioare È™i exterioare pentru familii."], "en": ["The impressive dome structure architecturally evokes the Angkor Wat temple complex.", "Offers 17 different slides and numerous indoor and outdoor pools for families."]},
    
    factsAdvanced: {
      "de": ["Aquaworld Budapest besitzt eine der grÃ¶ÃŸten freitragenden Kuppeln in Europa.", "Das Design des Innenraums wurde durch die Tempelanlage von Angkor Wat inspiriert.", "Der Park bietet insgesamt Ã¼ber 4000 Quadratmeter WasserflÃ¤che fÃ¼r Sport und Spiel.", "Es gibt spezielle Surfbecken, in denen Besucher das Wellenreiten Ã¼ben kÃ¶nnen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
    {
    id: "fovarosi-allatkert",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.07, 47.51],
    name: {"de": "Budapester Zoo", "hu": "FÅ‘vÃ¡rosi Ãllat- Ã©s NÃ¶vÃ©nykert", "ro": "GrÄƒdina ZoologicÄƒ din Budapesta", "en": "Budapest Zoo"},
    image: "/geo-images/hungary/fovarosi-allatkert.webp",
    description: {"de": "Der Zoo im Herzen von Budapest ist einer der Ã¤ltesten und artenreichsten TiergÃ¤rten der Welt.", "hu": "A Budapest szÃ­vÃ©ben fekvÅ‘ Ã¡llatkert a vilÃ¡g egyik legrÃ©gebbi Ã©s legszebb Ã¡llatkertje.", "ro": "GrÄƒdina zoologicÄƒ din inima Budapestei este una dintre cele mai vechi din lume.", "en": "The zoo in the heart of Budapest is one of the oldest and most diverse zoos in the world."},
    
    descriptionAdvanced: {
      "de": "Der HauptstÃ¤dtische Tier- und Pflanzenpark von Budapest ist einer der Ã¤ltesten und architektonisch schÃ¶nsten Zoos der Welt. Er wurde bereits 1866 erÃ¶ffnet und besticht durch seine einzigartigen historischen GebÃ¤ude im Jugendstil und orientalischer Architektur, wie das berÃ¼hmte Elefantenhaus. Der Zoo beherbergt eine beeindruckende Vielfalt an Tieren aus allen Kontinenten sowie einen botanischen Garten mit seltenen Pflanzenarten. Besonders sehenswert ist das 'Holnemvolt Schloss', ein spezieller Bereich fÃ¼r Familien, der die Traditionen der ungarischen JahrmÃ¤rkte mit Tierbegegnungen verbindet. Das Ziel des Zoos ist nicht nur die Unterhaltung, sondern auch der Artenschutz und die Umweltbildung in einem historischen Ambiente. Ein Spaziergang durch den Tierpark im Stadtpark ist ein Muss fÃ¼r jeden Budapest-Besucher und bietet Erlebnisse fÃ¼r GroÃŸ und Klein.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt fÃ¼r seine architektonisch wertvollen TierhÃ¤user im Jugendstil und orientalischen Design.", "ZÃ¤hlt mit Ã¼ber einer Million Besuchern jÃ¤hrlich zu den beliebtesten Zielen des Landes."], "hu": ["HÃ­res szecessziÃ³s Ã©s orientÃ¡lis stÃ­lusÃº, mÅ±emlÃ©ki vÃ©dettsÃ©gÅ± Ã¡llathÃ¡zairÃ³l.", "Ã‰vente tÃ¶bb mint egymilliÃ³ lÃ¡togatÃ³val az orszÃ¡g egyik legnÃ©pszerÅ±bb cÃ©lpontja."], "ro": ["CunoscutÄƒ pentru casele de animale valoroase Ã®n stil Art Nouveau È™i design oriental.", "Cu peste un milion de vizitatori anual, este printre cele mai populare destinaÈ›ii din È›arÄƒ."], "en": ["Known for its architecturally significant animal houses in Art Nouveau and Oriental designs.", "With over a million visitors annually, it is one of the most popular destinations in the country."]},
    
    factsAdvanced: {
      "de": ["Der Budapester Zoo ist einer der Ã¤ltesten wissenschaftlichen TiergÃ¤rten der Welt.", "Das Elefantenhaus ist ein Meisterwerk des ungarischen Jugendstils mit Zsolnay-Keramiken.", "Der Zoo beherbergt das grÃ¶ÃŸte Palmenhaus Mitteleuropas.", "Viele der historischen TierhÃ¤user stehen unter nationalem Denkmalschutz."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "vajdahunyad-vara-poi",
    type: "historical",
    parent: "HU-BU",
    coords: [19.08, 47.51],
    name: {"de": "Burg Vajdahunyad", "hu": "Vajdahunyad vÃ¡ra", "ro": "Castelul Vajdahunyad", "en": "Vajdahunyad Castle"},
    image: "/geo-images/hungary/vajdahunyad-vara.webp",
    description: {"de": "Die Burg Vajdahunyad im StadtwÃ¤ldchen vereint die bedeutendsten Baustile der ungarischen Geschichte.", "hu": "A vÃ¡rosligeti Vajdahunyad vÃ¡ra a magyar tÃ¶rtÃ©nelem legfontosabb Ã©pÃ­tÃ©szeti stÃ­lusait Ã¶tvÃ¶zi.", "ro": "Castelul Vajdahunyad din Parcul OraÈ™ului Ã®mbinÄƒ cele mai importante stiluri arhitecturale maghiare.", "en": "The Vajdahunyad Castle in the City Park combines the most significant architectural styles of Hungary."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "Vajdahunyad vÃ¡ra a budapesti VÃ¡rosliget mesebeli Ã©pÃ­tmÃ©nye, amely az 1896-os millenniumi Ã¼nnepsÃ©gekre Ã©pÃ¼lt azzal a cÃ©llal, hogy bemutassa a magyar Ã©pÃ­tÃ©szet ezerÃ©ves fejlÅ‘dÃ©sÃ©t. Az AlpÃ¡r IgnÃ¡c Ã¡ltal tervezett Ã©pÃ¼letegyÃ¼ttes kÃ¼lÃ¶nbÃ¶zÅ‘ tÃ¶rtÃ©nelmi stÃ­lusokat Ã¶tvÃ¶z: lÃ¡thatÃ³ rajta a romÃ¡n kori jÃ¡ki templom kapuja, gÃ³tikus Ã©s reneszÃ¡nsz palotaszÃ¡rnyak, valamint barokk kupolÃ¡k. NevÃ©t a legismertebb rÃ©szÃ©rÅ‘l, az erdÃ©lyi Vajdahunyad vÃ¡rÃ¡t mintÃ¡zÃ³ homlokzatrÃ³l kapta. A vÃ¡r udvarÃ¡n Ã¡ll az Anonymous szobra, Budapest egyik legtitokzatosabb emlÃ©kmÅ±ve. Az Ã©pÃ¼letben ma a Magyar MezÅ‘gazdasÃ¡gi MÃºzeum mÅ±kÃ¶dik, a vÃ¡r kÃ¶rÃ¼li tÃ³ pedig nyÃ¡ron csÃ³nakÃ¡zÃ¡sra, tÃ©len pedig korcsolyÃ¡zÃ¡sra csÃ¡bÃ­tja a VÃ¡rosliget lÃ¡togatÃ³it.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wurde ursprÃ¼nglich aus Holz fÃ¼r die Millenniumsfeier 1896 erbaut und spÃ¤ter versteinert.", "Beherbergt heute das grÃ¶ÃŸte landwirtschaftliche Museum in ganz Mitteleuropa."], "hu": ["Eredetileg fÃ¡bÃ³l Ã©pÃ¼lt az 1896-os millenniumi Ã¼nnepsÃ©gre, kÃ©sÅ‘bb Ã©pÃ­tettÃ©k fel tartÃ³s anyagbÃ³l.", "Ma itt talÃ¡lhatÃ³ KÃ¶zÃ©p-EurÃ³pa legnagyobb mezÅ‘gazdasÃ¡gi mÃºzeuma."], "ro": ["Construit iniÈ›ial din lemn pentru festivitÄƒÈ›ile mileniului din 1896 È™i ulterior din piatrÄƒ.", "GÄƒzduieÈ™te astÄƒzi cel mai mare muzeu al agriculturii din Europa CentralÄƒ."], "en": ["Originally built from wood for the 1896 Millennial Exhibition and later rebuilt in stone.", "Today it houses the largest agricultural museum in Central Europe."]},
    
    factsAdvanced: {
      "de": [],
      "hu": [
        "A vÃ¡r eredetileg fÃ¡bÃ³l Ã©s kartonbÃ³l kÃ©szÃ¼lt az Ã¼nnepsÃ©gekre, de annyira nÃ©pszerÅ± lett, hogy kÅ‘bÅ‘l ÃºjjÃ¡Ã©pÃ­tettÃ©k.",
        "Az Ã©pÃ¼letegyÃ¼ttesen 21 kÃ¼lÃ¶nbÃ¶zÅ‘ magyarorszÃ¡gi tÃ¶rtÃ©nelmi Ã©pÃ¼let rÃ©szlete ismerhetÅ‘ fel.",
        "A vÃ¡rudvaron talÃ¡lhatÃ³ Anonymous-szoborhoz az a legenda fÅ±zÅ‘dik, hogy aki megÃ©rinti az Ã­rÃ³ tollÃ¡t, tehetsÃ©ges lesz.",
        "Vajdahunyad vÃ¡ra a vilÃ¡g egyik legnagyobb mezÅ‘gazdasÃ¡gi szakmÃºzeumÃ¡nak ad otthont.",
        "A vÃ¡r kÃ¶rÃ¼li VÃ¡rosligeti-tÃ³ tÃ©len EurÃ³pa egyik legszebb szabadtÃ©ri mÅ±jÃ©gpÃ¡lyÃ¡jÃ¡vÃ¡ alakul."
      ],
      "ro": [],
      "en": []
    },
  },
    {
    id: "matyas-templom-poi",
    type: "historical",
    parent: "HU-BU",
    coords: [19.03, 47.50],
    name: {"de": "Matthiaskirche", "hu": "MÃ¡tyÃ¡s-templom", "ro": "Biserica MÃ¡tyÃ¡s", "en": "Matthias Church"},
    image: "/geo-images/hungary/matyas-templom.webp",
    description: {"de": "Die Matthiaskirche im Burgviertel ist eine der prachtvollsten und geschichtstrÃ¤chtigsten Kirchen des Landes.", "hu": "A budai vÃ¡rnegyedben Ã¡llÃ³ MÃ¡tyÃ¡s-templom az orszÃ¡g egyik legszebb Ã©s leggazdagabb mÃºltÃº temploma.", "ro": "Biserica MÃ¡tyÃ¡s din cartierul cetÄƒÈ›ii este una dintre cele mai splendide È™i istorice biserici din È›arÄƒ.", "en": "The Matthias Church in the Castle District is one of the most magnificent and historic churches in the country."},
    
    descriptionAdvanced: {
      "de": "",
      "hu": "A MÃ¡tyÃ¡s-templom, hivatalos nevÃ©n a BudavÃ¡ri Nagyboldogasszony-templom, a Budai VÃ¡rnegyed Ã©s Budapest egyik legfontosabb tÃ¶rtÃ©nelmi Ã©s vallÃ¡si szimbÃ³luma. A 13. szÃ¡zadban alapÃ­tott templom az Ã©vszÃ¡zadok sorÃ¡n a magyar kirÃ¡lyok koronÃ¡zÃ¡si helyszÃ­nÃ©vÃ© Ã©s eskÃ¼vÅ‘ik szÃ­nterÃ©vÃ© vÃ¡lt, nevÃ©t pedig a nÃ©pszerÅ± MÃ¡tyÃ¡s kirÃ¡lyrÃ³l kapta, aki jelentÅ‘sen bÅ‘vÃ­ttette az Ã©pÃ¼letet. A tÃ¶rÃ¶k hÃ³doltsÃ¡g alatt mecsetkÃ©nt hasznÃ¡ltÃ¡k, majd a 19. szÃ¡zad vÃ©gÃ©n Schulek Frigyes vezetÃ©sÃ©vel nyerte el mai, lenyÅ±gÃ¶zÅ‘ neogÃ³tikus formÃ¡jÃ¡t. A templom tetÅ‘zetÃ©t dÃ­szÃ­tÅ‘ szÃ­nes Zsolnay-cserepek Ã©s a belsÅ‘ terek gazdag festÃ©se egyedÃ¼lÃ¡llÃ³ lÃ¡tvÃ¡nyt nyÃºjt. Itt talÃ¡lhatÃ³ a magyar kirÃ¡lyi pÃ¡r, III. BÃ©la Ã©s Antiochiai Anna sÃ­rhelye is, s a templom ma is fontos egyhÃ¡zi Ã©s zenei esemÃ©nyek otthona.",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Diente Ã¼ber Jahrhunderte als KrÃ¶nungskirche der ungarischen KÃ¶nige.", "Das farbenfrohe Dach aus Zsolnay-Ziegeln ist ein weithin bekanntes Markenzeichen."], "hu": ["Ã‰vszÃ¡zadokon keresztÃ¼l a magyar kirÃ¡lyok koronÃ¡zÃ¡si helyszÃ­nekÃ©nt szolgÃ¡lt.", "A szÃ­nes Zsolnay-cserepekbÅ‘l Ã¡llÃ³ tetÅ‘zete a templom egyik legismertebb vÃ©djegye."], "ro": ["A servit timp de secole ca bisericÄƒ de Ã®ncoronare a regilor maghiari.", "AcoperiÈ™ul colorat din È›iglÄƒ Zsolnay este o emblemÄƒ cunoscutÄƒ peste tot."], "en": ["Served as the coronation church for Hungarian kings for centuries.", "The colorful roof made of Zsolnay tiles is a widely recognized landmark."]},
  
    factsAdvanced: {
      "de": [],
      "hu": [
        "Itt koronÃ¡ztÃ¡k meg az utolsÃ³ kÃ©t magyar kirÃ¡lyt, Ferenc JÃ³zsefet Ã©s IV. KÃ¡rolyt.",
        "A templom dÃ©li tornya, a MÃ¡tyÃ¡s-torony 78 mÃ©ter magas, Ã©s tetejÃ©n a hollÃ³s cÃ­mer lÃ¡thatÃ³.",
        "A tetÅ‘zetet borÃ­tÃ³ szÃ­nes mÃ¡zas cserepek a pÃ©csi Zsolnay-gyÃ¡rbÃ³l szÃ¡rmaznak.",
        "A templom belsÅ‘ falfestÃ©seit olyan hÃ­res mÅ±vÃ©szek kÃ©szÃ­tettÃ©k, mint Lotz KÃ¡roly Ã©s SzÃ©kely Bertalan.",
        "A templomban ma is mÅ±kÃ¶dik egy egyhÃ¡ztÃ¶rtÃ©neti gyÅ±jtemÃ©ny, ahol a koronÃ¡zÃ¡si jelvÃ©nyek mÃ¡solatai is lÃ¡thatÃ³k."
      ],
      "ro": [],
      "en": []
    },
  },
  {
    id: "baradla-barlang",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.49, 48.47],
    name: {"de": "Baradla-HÃ¶hle", "hu": "Baradla-barlang", "ro": "PeÈ™tera Baradla", "en": "Baradla Cave"},
    image: "/geo-images/hungary/baradla-barlang.webp",
    description: {"de": "Ein riesiges TropfsteinhÃ¶hlensystem im Nationalpark Aggtelek.", "hu": "Hatalmas cseppkÅ‘barlang-rendszer az Aggteleki Nemzeti Parkban.", "ro": "Un sistem uriaÈ™ de peÈ™teri cu stalactite Ã®n Parcul NaÈ›ional Aggtelek.", "en": "A huge stalactite cave system in the Aggtelek National Park."},
    descriptionAdvanced: {
      "de": "Die Baradla-HÃ¶hle bei Aggtelek ist das grÃ¶ÃŸte TropfsteinhÃ¶hlensystem Ungarns und gehÃ¶rt zum UNESCO-Weltkulturerbe. Sie erstreckt sich Ã¼ber 25 Kilometer bis unter das Staatsgebiet der Slowakei und beeindruckt durch gigantische Hallen. In der 'Riesenhalle' kÃ¶nnen Besucher den hÃ¶chsten Tropfstein des Landes bewundern, der Ã¼ber Jahrtausende gewachsen ist. Die auÃŸergewÃ¶hnliche Akustik des 'Konzertsaals' macht klassische Konzerte in der HÃ¶hle zu einem mystischen Erlebnis. Die HÃ¶hle belegt, dass Menschen bereits in der Jungsteinzeit dieses unterirdische Labyrinth nutzten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Baradla-HÃ¶hle ist Teil eines grenzÃ¼berschreitenden UNESCO-Weltnaturerbes.", "Einige der Tropfsteinformationen sind schÃ¤tzungsweise Ã¼ber 200.000 Jahre alt.", "Die Temperatur in der HÃ¶hle betrÃ¤gt das ganze Jahr Ã¼ber konstant etwa 10 Grad.", "Der grÃ¶ÃŸte Tropfstein der HÃ¶hle, die 'Sternwarte', ist Ã¼ber 19 Meter hoch."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Teil des UNESCO-Welterbes.", "BerÃ¼hmt fÃ¼r beeindruckende Gesteinsformationen."], "hu": ["Az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.", "LenyÅ±gÃ¶zÅ‘ kÅ‘zetformÃ¡ciÃ³irÃ³l hÃ­res."], "ro": ["Parte a Patrimoniului Mondial UNESCO.", "FaimoasÄƒ pentru formaÈ›iunile sale stÃ¢ncoase impresionante."], "en": ["Part of the UNESCO World Heritage.", "Famous for its impressive rock formations."]}
  },
  {
    id: "hortobagyi-nemzeti-park",
    type: "landmark",
    parent: "HU-HB",
    coords: [21.09, 47.58],
    name: {"de": "Nationalpark HortobÃ¡gy", "hu": "HortobÃ¡gyi Nemzeti Park", "ro": "Parcul NaÈ›ional HortobÃ¡gy", "en": "HortobÃ¡gy National Park"},
    image: "/geo-images/hungary/hortobagyi-nemzeti-park.webp",
    description: {"de": "Das grÃ¶ÃŸte Naturschutzgebiet Ungarns und ein Symbol der Puszta.", "hu": "MagyarorszÃ¡g legnagyobb termÃ©szetvÃ©delmi terÃ¼lete Ã©s a puszta szimbÃ³luma.", "ro": "Cea mai mare rezervaÈ›ie naturalÄƒ din Ungaria È™i un simbol al pustei.", "en": "Hungary's largest nature reserve and a symbol of the puszta."},
    descriptionAdvanced: {
      "de": "Der Nationalpark HortobÃ¡gy reprÃ¤sentiert die ursprÃ¼ngliche Puszta-Landschaft und ist ein geschÃ¼tztes UNESCO-Welterbe. Die unendliche Weite der Grassteppe wird durch charakteristische Ziehbrunnen und traditionelle Hirtenkultur geprÃ¤gt. Der Park ist Lebensraum fÃ¼r seltene Tierrassen wie das graue Steppenrind, Zackelschafe und Nonius-Pferde. SpektakulÃ¤r ist der herbstliche Kranichzug, wenn Zehntausende VÃ¶gel in den Feuchtgebieten rasten. HortobÃ¡gy zeigt eindrucksvoll die tiefen kulturellen Wurzeln Ungarns in der ungarischen Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["HortobÃ¡gy ist die grÃ¶ÃŸte zusammenhÃ¤ngende Naturgrassteppe in Europa.", "Der Nationalpark ist als Kulturlandschaft Teil des UNESCO-Weltkulturerbes.", "Das Gebiet beherbergt die lÃ¤ngste SteinbrÃ¼cke Ungarns, die NeunbÃ¶gige BrÃ¼cke.", "Im Herbst ist der Park einer der bedeutendsten KranichrastplÃ¤tze weltweit."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r die Neunbogige BrÃ¼cke.", "Heimat vieler geschÃ¼tzter Vogelarten."], "hu": ["A KilenclyukÃº hÃ­drÃ³l ismert.", "SzÃ¡mos vÃ©dett madÃ¡rfaj otthona."], "ro": ["Cunoscut pentru Podul cu nouÄƒ arcuri.", "Casa multor specii de pÄƒsÄƒri protejate."], "en": ["Known for the Nine-holed Bridge.", "Home to many protected bird species."]}
  },
  {
    id: "bukki-nemzeti-park",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.52, 48.05],
    name: {"de": "Nationalpark BÃ¼kk", "hu": "BÃ¼kki Nemzeti Park", "ro": "Parcul NaÈ›ional BÃ¼kk", "en": "BÃ¼kk National Park"},
    image: "/geo-images/hungary/bukki-nemzeti-park.webp",
    description: {"de": "Ein waldreiches Berggebiet mit HÃ¶hlen und malerischen TÃ¤lern.", "hu": "ErdÅ‘kben gazdag hegyvidÃ©k barlangokkal Ã©s festÅ‘i vÃ¶lgyekkel.", "ro": "O zonÄƒ montanÄƒ Ã®mpÄƒduritÄƒ cu peÈ™teri È™i vÄƒi pitoreÈ™ti.", "en": "A heavily forested mountainous area with caves and picturesque valleys."},
    descriptionAdvanced: {
      "de": "Der Nationalpark BÃ¼kk schÃ¼tzt eine spektakulÃ¤re Mittelgebirgslandschaft mit dichten WÃ¤ldern und bizarren Kalksteinfelsen. Das BÃ¼kk-Plateau ist eine einzigartige KarsthochflÃ¤che mit tiefen Dolinen und seltenen alpinen Pflanzenarten. Ãœber 1000 HÃ¶hlen sind im Kalkstein des Gebirges bekannt, darunter wichtige prÃ¤historische FundstÃ¤tten. Der Park beherbergt eine reiche Fauna, wie den Kaiseradler und die seltene ungarische Wildkatze. Mit seinen weiten Ausblicken von den weiÃŸen Felsen bietet der Nationalpark dramatische Naturerlebnisse.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Nationalpark BÃ¼kk ist das waldreichste Naturschutzgebiet in Ungarn.", "Das Gebirge beherbergt das am hÃ¶chsten gelegene HÃ¶hlensystem des Landes.", "Im Nationalpark befindet sich die hÃ¶chste Ã¶ffentliche StraÃŸe Ungarns.", "Die Region ist bekannt fÃ¼r ihre BestÃ¤nde an frei lebenden Mufflons."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Beherbergt den wunderschÃ¶nen Szalajka-Tal.", "Einer der ersten Nationalparks Ungarns."], "hu": ["Itt talÃ¡lhatÃ³ a gyÃ¶nyÃ¶rÅ± Szalajka-vÃ¶lgy.", "MagyarorszÃ¡g egyik elsÅ‘ nemzeti parkja."], "ro": ["GÄƒzduieÈ™te frumoasa Vale Szalajka.", "Unul dintre primele parcuri naÈ›ionale din Ungaria."], "en": ["Home to the beautiful Szalajka Valley.", "One of Hungary's first national parks."]}
  },
  {
    id: "ferto-to",
    type: "lake",
    parent: "HU-GS",
    coords: [16.73, 47.74],
    name: {"de": "Neusiedler See", "hu": "FertÅ‘-tÃ³", "ro": "Lacul Neusiedl", "en": "Lake Neusiedl"},
    image: "/geo-images/hungary/ferto-to.webp",
    description: {"de": "Der westlichste Steppensee Europas, an der Grenze zu Ã–sterreich.", "hu": "EurÃ³pa legnyugatibb sztyepptava az osztrÃ¡k hatÃ¡ron.", "ro": "Cel mai vestic lac de stepÄƒ din Europa, la graniÈ›a cu Austria.", "en": "The westernmost steppe lake in Europe, on the border with Austria."},
    descriptionAdvanced: {
      "de": "Der Neusiedler See (FertÅ‘-tÃ³) ist der westlichste Steppensee Europas und ein grenzÃ¼berschreitendes UNESCO-Welterbe. Der riesige SchilfgÃ¼rtel und das extrem flache Wasser bieten Lebensraum fÃ¼r Tausende von WasservÃ¶geln. Die Kulturlandschaft um den See zeigt ein harmonisches Miteinander von Weinbau, Geschichte und unberÃ¼hrter Natur. Auf ungarischer Seite ist das prachtvolle Schloss EsterhÃ¡zy in FertÅ‘d das kulturelle Highlight. Der See ist ein Paradies fÃ¼r Radfahrer, Segler und Vogelbeobachter in einer einzigartigen Grenzlandschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Neusiedler See ist der zweitgrÃ¶ÃŸte Steppensee in Mitteleuropa.", "Der SchilfgÃ¼rtel des Sees ist ein international bedeutendes Vogelschutzgebiet.", "An vielen Stellen ist der See kaum tiefer als einen halben Meter.", "Die gesamte FertÅ‘-Region gehÃ¶rt seit 2001 zum UNESCO-Weltkulturerbe."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Einzigartige Flora und Fauna.", "UNESCO-WelterbestÃ¤tte."], "hu": ["EgyedÃ¼lÃ¡llÃ³ nÃ¶vÃ©ny- Ã©s Ã¡llatvilÃ¡g.", "UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­n."], "ro": ["FlorÄƒ È™i faunÄƒ unice.", "Sit al Patrimoniului Mondial UNESCO."], "en": ["Unique flora and fauna.", "UNESCO World Heritage site."]}
  },
  {
    id: "velencei-to",
    type: "lake",
    parent: "HU-FE",
    coords: [18.59, 47.20],
    name: {"de": "Velencer See", "hu": "Velencei-tÃ³", "ro": "Lacul Velence", "en": "Lake Velence"},
    image: "/geo-images/hungary/velencei-to.webp",
    description: {"de": "Einer der wÃ¤rmsten Seen in Europa, ideal fÃ¼r Erholung.", "hu": "EurÃ³pa egyik legmelegebb tava, ideÃ¡lis a pihenÃ©sre.", "ro": "Unul dintre cele mai calde lacuri din Europa, ideal pentru relaxare.", "en": "One of the warmest lakes in Europe, ideal for recreation."},
    descriptionAdvanced: {
      "de": "Der Velence-See, bekannt als 'See des Sonnenscheins', ist einer der wÃ¤rmsten Binnenseen in Mitteleuropa. Aufgrund seiner geringen Tiefe erreicht das Wasser im Sommer Temperaturen von Ã¼ber 26 Grad und lÃ¤dt zum Baden ein. Die dichten Schilfgebiete bieten Refugien fÃ¼r seltene Vogelarten und schwimmende Inseln aus Vegetation. Am Nordufer erheben sich die Velence-Berge mit ihren bizarren Granitfelsformationen, die ein tolles Wandergebiet sind. Der See ist ein ideales Ziel fÃ¼r Erholungssuchende, Wassersportler und Naturbeobachter.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Velence-See ist mit durchschnittlich 1,5 Metern Tiefe extrem flach.", "Die Wassertemperaturen gehÃ¶ren im Sommer zu den hÃ¶chsten in Europa.", "Etwa ein Drittel der WasserflÃ¤che ist als Vogelschutzgebiet streng geschÃ¼tzt.", "Die Granitsteine am Nordufer werden aufgrund ihrer Form 'Wackelsteine' genannt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wird aufgrund der vielen Sonnenstunden 'See der Sonne' genannt.", "Beliebt bei Seglern und Surfern."], "hu": ["A magas napsÃ¼tÃ©ses Ã³rÃ¡k szÃ¡ma miatt a 'NapfÃ©ny tavÃ¡nak' is hÃ­vjÃ¡k.", "NÃ©pszerÅ± a vitorlÃ¡zÃ³k Ã©s szÃ¶rfÃ¶zÅ‘k kÃ¶rÃ©ben."], "ro": ["Numit 'Lacul Soarelui' datoritÄƒ numÄƒrului mare de ore de soare.", "Popular printre navigatori È™i surferi."], "en": ["Called the 'Lake of Sunshine' due to the high number of sunny hours.", "Popular among sailors and surfers."]}
  },
  {
    id: "borzsony",
    type: "mountain",
    parent: "HU-PE",
    coords: [18.91, 47.92],
    name: {"de": "BÃ¶rzsÃ¶ny", "hu": "BÃ¶rzsÃ¶ny", "ro": "BÃ¶rzsÃ¶ny", "en": "BÃ¶rzsÃ¶ny"},
    image: "/geo-images/hungary/borzsony.webp",
    description: {"de": "Ein vulkanisches Gebirge nÃ¶rdlich von Budapest mit dichten WÃ¤ldern.", "hu": "VulkÃ¡ni hegysÃ©g BudapesttÅ‘l Ã©szakra sÅ±rÅ± erdÅ‘kkel.", "ro": "Un munte vulcanic la nord de Budapesta cu pÄƒduri dense.", "en": "A volcanic mountain range north of Budapest with dense forests."},
    descriptionAdvanced: {
      "de": "Das BÃ¶rzsÃ¶ny-Gebirge im Norden Ungarns ist ein fast kreisrundes Vulkangebirge von wilder SchÃ¶nheit. Es umschlieÃŸt eine der grÃ¶ÃŸten Calderas Europas und bietet dichte WÃ¤lder sowie tiefe TÃ¤ler. Das Gebirge ist ein Paradies fÃ¼r Wanderer, die Einsamkeit und unberÃ¼hrte Natur suchen. Markante Gipfel wie der CsÃ³vÃ¡nyos bieten weite Ausblicke bis zur Hohen Tatra. Zahlreiche saubere BergbÃ¤che und eine reiche Fauna prÃ¤gen dieses wertvolle Naturschutzgebiet am Donauknie.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das BÃ¶rzsÃ¶ny-Gebirge ist vulkanischen Ursprungs mit einer Ringstruktur.", "In den abgelegenen WÃ¤ldern leben heute wieder Luchse.", "Die Region beherbergt einige der saubersten Quellen Ungarns.", "KirÃ¡lyrÃ©t ist ein beliebter Ausgangspunkt fÃ¼r historische Waldbahnfahrten."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Der hÃ¶chste Gipfel ist der CsÃ³vÃ¡nyos.", "Bietet tolle Aussichten auf das Donauknie."], "hu": ["Legmagasabb csÃºcsa a CsÃ³vÃ¡nyos.", "NagyszerÅ± kilÃ¡tÃ¡st nyÃºjt a Dunakanyarra."], "ro": ["Cel mai Ã®nalt vÃ¢rf este CsÃ³vÃ¡nyos.", "OferÄƒ vederi minunate asupra Cotului DunÄƒrii."], "en": ["The highest peak is CsÃ³vÃ¡nyos.", "Offers great views of the Danube Bend."]}
  },
  {
    id: "villanyi-borvidek",
    type: "landmark",
    parent: "HU-BA",
    coords: [18.45, 45.86],
    name: {"de": "Weinregion VillÃ¡ny", "hu": "VillÃ¡nyi borvidÃ©k", "ro": "Regiunea viticolÄƒ VillÃ¡ny", "en": "VillÃ¡ny Wine Region"},
    image: "/geo-images/hungary/villanyi-borvidek.webp",
    description: {"de": "Eine der berÃ¼hmtesten Rotweinregionen Ungarns im SÃ¼den.", "hu": "MagyarorszÃ¡g egyik leghÃ­resebb dÃ©li vÃ¶rÃ¶sborvidÃ©ke.", "ro": "Una dintre cele mai faimoase regiuni de vin roÈ™u din Ungaria Ã®n sud.", "en": "One of the most famous red wine regions in Hungary in the south."},
    descriptionAdvanced: {
      "de": "Die Weinregion VillÃ¡ny im Ã¤uÃŸersten SÃ¼den Ungarns gilt als die beste Rotweinregion des Landes. Das submediterrane Klima und die kalkhaltigen BÃ¶den bringen vollmundige Weine von Weltklasse hervor. Besonders der VillÃ¡nyi Franc hat die Region international bekannt gemacht. Die malerischen Kellergassen in VillÃ¡ny und Palkonya laden zu Verkostungen in historischem Ambiente ein. VillÃ¡ny war die erste Region Ungarns, die konsequenten Weintourismus und Herkunftsschutz etablierte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["VillÃ¡ny ist die sÃ¼dlichste und sonnigste Weinregion Ungarns.", "Die Region ist berÃ¼hmt fÃ¼r erstklassige Cabernet Franc und Merlot Weine.", "Die historische Kellergasse von Palkonya steht unter nationalem Denkmalschutz.", "In VillÃ¡ny wurde 1988 der erste WeinstraÃŸenverein Ungarns gegrÃ¼ndet."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Produziert erstklassige Cabernet Franc Weine.", "VerfÃ¼gt Ã¼ber malerische Weinkellerreihen."], "hu": ["KivÃ¡lÃ³ minÅ‘sÃ©gÅ± Cabernet Franc borokat termel.", "FestÅ‘i pincesorokkal rendelkezik."], "ro": ["Produce vinuri Cabernet Franc de calitate superioarÄƒ.", "Are È™iruri pitoreÈ™ti de crame."], "en": ["Produces premium Cabernet Franc wines.", "Features picturesque rows of wine cellars."]}
  },
  {
    id: "egri-var",
    type: "historical",
    parent: "HU-HE",
    coords: [20.38, 47.90],
    name: {"de": "Burg Eger", "hu": "Egri vÃ¡r", "ro": "Castelul Eger", "en": "Castle of Eger"},
    image: "/geo-images/hungary/egri-var.webp",
    description: {"de": "Eine historische Burg, die 1552 der tÃ¼rkischen Belagerung standhielt.", "hu": "TÃ¶rtÃ©nelmi vÃ¡r, amely 1552-ben ellenÃ¡llt a tÃ¶rÃ¶k ostromnak.", "ro": "Un castel istoric care a rezistat asediului turcesc din 1552.", "en": "A historical castle that withstood the Turkish siege in 1552."},
    descriptionAdvanced: {
      "de": "Die Burg von Eger ist ein Symbol fÃ¼r heldenhaften Widerstand und nationalen Stolz in Ungarn. Im Jahr 1552 verteidigte eine kleine Garnison unter IstvÃ¡n DobÃ³ die Festung erfolgreich gegen eine gewaltige osmanische Ãœbermacht. Die Burgmauern beherbergen heute umfangreiche Ausstellungen zum mittelalterlichen Leben und zur Belagerungsgeschichte. Besucher kÃ¶nnen die unterirdischen Kasematten und die Ruinen der einstigen Kathedrale erkunden. Von der Burg aus bietet sich ein herrlicher Blick Ã¼ber das barocke Stadtbild von Eger.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die erfolgreiche Verteidigung von 1552 stoppte vorerst den tÃ¼rkischen Vormarsch.", "In der Burg ruht der Schriftsteller GÃ©za GÃ¡rdonyi, Autor von 'Die Sterne von Eger'.", "Das Museum zeigt originale Waffen und AusrÃ¼stungen aus der TÃ¼rkenzeit.", "Die Burg ist Schauplatz zahlreicher historischer Ritterspiele."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Schauplatz von GÃ¡rdonyis Roman 'Sterne von Eger'.", "Ein wichtiges nationales Symbol."], "hu": ["GÃ¡rdonyi GÃ©za 'Egri csillagok' cÃ­mÅ± regÃ©nyÃ©nek helyszÃ­ne.", "Fontos nemzeti szimbÃ³lum."], "ro": ["Cadrul romanului lui GÃ¡rdonyi 'Stelele din Eger'.", "Un simbol naÈ›ional important."], "en": ["Setting of GÃ¡rdonyi's novel 'Eclipse of the Crescent Moon'.", "An important national symbol."]}
  },
  {
    id: "visegradi-fellegvar",
    type: "historical",
    parent: "HU-PE",
    coords: [18.98, 47.79],
    name: {"de": "Zitadelle VisegrÃ¡d", "hu": "VisegrÃ¡di FellegvÃ¡r", "ro": "Cetatea VisegrÃ¡d", "en": "VisegrÃ¡d Citadel"},
    image: "/geo-images/hungary/visegrad.webp",
    description: {"de": "Eine mittelalterliche Festung mit atemberaubendem Blick auf das Donauknie.", "hu": "KÃ¶zÃ©pkori erÅ‘dÃ­tmÃ©ny, lenyÅ±gÃ¶zÅ‘ kilÃ¡tÃ¡ssal a Dunakanyarra.", "ro": "O cetate medievalÄƒ cu o vedere uluitoare asupra Cotului DunÄƒrii.", "en": "A medieval fortress with a breathtaking view of the Danube Bend."},
    descriptionAdvanced: {
      "de": "Die Wolkenburg (FellegvÃ¡r) von VisegrÃ¡d thront auf einem steilen Fels hoch Ã¼ber dem malerischen Donauknie. Die im 13. Jahrhundert errichtete Festung war Ã¼ber lange Zeit eine bevorzugte Residenz der ungarischen KÃ¶nige. Sie diente zudem als sicherer Verwahrort fÃ¼r die ungarischen KrÃ¶nungsinsignien. Das spektakulÃ¤re Panorama Ã¼ber die Donauschleife macht die Burg zu einem der meistfotografierten Orte Ungarns. In den AusstellungsrÃ¤umen wird die Geschichte der Jagd und des hÃ¶fischen Lebens im Mittelalter lebendig.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg beherbergte jahrhundertelang die heilige ungarische Stephanskrone.", "VisegrÃ¡d war im 14. Jahrhundert der Ort des ersten 'VisegrÃ¡d-KÃ¶nigstreffens'.", "Der Blick von der Oberburg gilt als das schÃ¶nste Panorama an der Donau.", "RegelmÃ¤ÃŸige Mittelalter-Festivals locken Tausende Besucher auf den Burgberg."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wurde im 13. Jahrhundert erbaut.", "Bewahrte einst die Heilige Krone Ungarns auf."], "hu": ["A 13. szÃ¡zadban Ã©pÃ¼lt.", "Egykor itt Å‘riztÃ©k a Szent KoronÃ¡t."], "ro": ["A fost construitÄƒ Ã®n secolul al XIII-lea.", "A pÄƒstrat odatÄƒ SfÃ¢nta CoroanÄƒ a Ungariei."], "en": ["Built in the 13th century.", "Once kept the Holy Crown of Hungary."]}
  },
  {
    id: "szigetvari-var",
    type: "historical",
    parent: "HU-BA",
    coords: [17.79, 46.05],
    name: {"de": "Burg SzigetvÃ¡r", "hu": "SzigetvÃ¡ri vÃ¡r", "ro": "Castelul SzigetvÃ¡r", "en": "Castle of SzigetvÃ¡r"},
    image: "/geo-images/hungary/szigetvari-var.webp",
    description: {"de": "Bekannt fÃ¼r die heroische Verteidigung durch MiklÃ³s ZrÃ­nyi im Jahr 1566.", "hu": "ZrÃ­nyi MiklÃ³s hÅ‘sies, 1566-os vÃ¡rvÃ©delmÃ©rÅ‘l ismert.", "ro": "Cunoscut pentru apÄƒrarea eroicÄƒ condusÄƒ de MiklÃ³s ZrÃ­nyi Ã®n 1566.", "en": "Known for the heroic defense by MiklÃ³s ZrÃ­nyi in 1566."},
    descriptionAdvanced: {
      "de": "Die Burg von SzigetvÃ¡r ist untrennbar mit der heldenhaften Belagerung von 1566 verbunden. Unter der FÃ¼hrung von Nikolaus Zrinyi leisteten die Verteidiger erbitterten Widerstand gegen das Heer von Sultan SÃ¼leyman dem PrÃ¤chtigen. WÃ¤hrend der Belagerung verstarb der gealterte Sultan in seinem Zelt vor der Festung. Heute ist die Burg ein Ort des Gedenkens und beherbergt Ausstellungen Ã¼ber die ungarisch-tÃ¼rkischen Kriege. Eine ehemalige Moschee im Inneren erinnert an die Zeit der osmanischen Herrschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["SzigetvÃ¡r wird aufgrund des Opfergangs oft als das 'ungarische Thermopylae' bezeichnet.", "Nikolaus Zrinyi wird als einer der grÃ¶ÃŸten Nationalhelden Ungarns verehrt.", "Sultan SÃ¼leyman starb hier am Vorabend des Falls der Festung.", "In der NÃ¤he befindet sich der ungarisch-tÃ¼rkische Freundschaftspark."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Sultan SÃ¼leyman der PrÃ¤chtige starb wÃ¤hrend der Belagerung.", "Ein Symbol des ungarischen Widerstands."], "hu": ["Nagy SzulejmÃ¡n szultÃ¡n az ostrom alatt hunyt el.", "A magyar ellenÃ¡llÃ¡s szimbÃ³luma."], "ro": ["Sultanul Suleiman Magnificul a murit Ã®n timpul asediului.", "Un simbol al rezistenÈ›ei maghiare."], "en": ["Sultan Suleiman the Magnificent died during the siege.", "A symbol of Hungarian resistance."]}
  },
  {
    id: "sarvari-var",
    type: "historical",
    parent: "HU-VA",
    coords: [16.93, 47.25],
    name: {"de": "Burg SÃ¡rvÃ¡r", "hu": "SÃ¡rvÃ¡ri vÃ¡r", "ro": "Castelul SÃ¡rvÃ¡r", "en": "Castle of SÃ¡rvÃ¡r"},
    image: "/geo-images/hungary/sarvari-var.webp",
    description: {"de": "Die Burg NÃ¡dasdy ist ein Meisterwerk der Renaissance-Architektur.", "hu": "A NÃ¡dasdy-vÃ¡r a reneszÃ¡nsz Ã©pÃ­tÃ©szet remekmÅ±ve.", "ro": "Castelul NÃ¡dasdy este o capodoperÄƒ a arhitecturii renascentiste.", "en": "NÃ¡dasdy Castle is a masterpiece of Renaissance architecture."},
    descriptionAdvanced: {
      "de": "Die Burg NÃ¡dasdy in SÃ¡rvÃ¡r ist eines der prachtvollsten RenaissanceschlÃ¶sser in Westungarn. Die charakteristische fÃ¼nfseitige Anlage ist von einem idyllischen Wassergraben und einem weitlÃ¤ufigen Park umgeben. Der monumentale Rittersaal beeindruckt durch seine riesigen Deckenfresken, die kriegerische Szenen darstellen. Die Burg beherbergt das NÃ¡dasdy-Museum mit einer einzigartigen Sammlung zur Geschichte der ungarischen Husaren. SÃ¡rvÃ¡r war zudem ein bedeutendes geistiges Zentrum, in dem das erste Buch in ungarischer Sprache gedruckt wurde.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg NÃ¡dasdy besitzt einen der schÃ¶nsten barocken FestsÃ¤le des Landes.", "Im Jahr 1541 wurde hier das ungarische Neue Testament gedruckt.", "Das Burgmuseum beherbergt die weltweit einzige Husaren-Dauerausstellung.", "Das angrenzende Arboretum ist Ã¼ber 200 Jahre alt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Hier wurde das erste in Ungarn gedruckte Buch auf Ungarisch verlegt.", "Befindet sich im Stadtzentrum."], "hu": ["Itt nyomtattÃ¡k az elsÅ‘ magyar nyelvÅ± kÃ¶nyvet MagyarorszÃ¡gon.", "A vÃ¡roskÃ¶zpontban talÃ¡lhatÃ³."], "ro": ["Aici a fost tipÄƒritÄƒ prima carte Ã®n limba maghiarÄƒ din Ungaria.", "Situat Ã®n centrul oraÈ™ului."], "en": ["The first Hungarian book printed in Hungary was published here.", "Located in the city center."]}
  },
  {
    id: "diosgyori-var",
    type: "historical",
    parent: "HU-BZ",
    coords: [20.69, 48.09],
    name: {"de": "Burg DiÃ³sgyÅ‘r", "hu": "DiÃ³sgyÅ‘ri vÃ¡r", "ro": "Castelul DiÃ³sgyÅ‘r", "en": "Castle of DiÃ³sgyÅ‘r"},
    image: "/geo-images/hungary/diosgyori-var.webp",
    description: {"de": "Eine mittelalterliche Burg, die oft als die Burg der KÃ¶niginnen bezeichnet wird.", "hu": "KÃ¶zÃ©pkori vÃ¡r, amelyet gyakran a kirÃ¡lynÃ©k vÃ¡rakÃ©nt emlegetnek.", "ro": "Un castel medieval, adesea numit Castelul Reginelor.", "en": "A medieval castle, often referred to as the Queens' Castle."},
    descriptionAdvanced: {
      "de": "Die Burg DiÃ³sgyÅ‘r in Miskolc war im Mittelalter traditionell der Witwensitz und die Lieblingsresidenz der ungarischen KÃ¶niginnen. KÃ¶nig Ludwig der GroÃŸe baute die Festung im 14. Jahrhundert zu einem prachtvollen gotischen Palast aus. In den letzten Jahren wurde die Burg originalgetreu rekonstruiert und erstrahlt heute wieder in ihrem alten Glanz. Besonders beeindruckend ist die Ritterhalle, die einst eine der grÃ¶ÃŸten ihrer Art in Europa war. Historische VorfÃ¼hrungen und Ritterspiele lassen den Alltag an einem KÃ¶nigshof lebendig werden.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["DiÃ³sgyÅ‘r war Ã¼ber Jahrhunderte das traditionelle Morgengabe-Geschenk fÃ¼r KÃ¶niginnen.", "In der Burg befindet sich eine der grÃ¶ÃŸten Wachsfigurenausstellungen des Landes.", "Die Ritterhalle war im Mittelalter ein Zentrum der europÃ¤ischen Diplomatie.", "Das jÃ¤hrliche Burgfestival gehÃ¶rt zu den wichtigsten Kulturevents der Region."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["War ein beliebtes Ziel von KÃ¶nig Ludwig dem GroÃŸen.", "Wurde kÃ¼rzlich umfassend restauriert."], "hu": ["Nagy Lajos kirÃ¡ly kedvelt tartÃ³zkodÃ¡si helye volt.", "NemrÃ©giben nagyszabÃ¡sÃº felÃºjÃ­tÃ¡son esett Ã¡t."], "ro": ["A fost o destinaÈ›ie popularÄƒ pentru Regele Ludovic cel Mare.", "A fost restaurat recent pe scarÄƒ largÄƒ."], "en": ["Was a popular destination for King Louis the Great.", "Has been extensively restored recently."]}
  },
  {
    id: "esztergomi-bazilika",
    type: "historical",
    parent: "HU-KE",
    coords: [18.73, 47.79],
    name: {"de": "Basilika von Esztergom", "hu": "Esztergomi Bazilika", "ro": "Bazilica din Esztergom", "en": "Esztergom Basilica"},
    image: "/geo-images/hungary/esztergomi-bazilika.webp",
    description: {"de": "Die grÃ¶ÃŸte und hÃ¶chste Kirche Ungarns mit monumentaler Architektur.", "hu": "MagyarorszÃ¡g legnagyobb Ã©s legmagasabb temploma monumentÃ¡lis Ã©pÃ­tÃ©szettel.", "ro": "Cea mai mare È™i cea mai Ã®naltÄƒ bisericÄƒ din Ungaria, cu o arhitecturÄƒ monumentalÄƒ.", "en": "Hungary's largest and tallest church with monumental architecture."},
    descriptionAdvanced: {
      "de": "Die Basilika von Esztergom ist das grÃ¶ÃŸte Kirchenbauwerk Ungarns und das geistige Zentrum des Landes. Sie thront majestÃ¤tisch auf dem Burgberg Ã¼ber der Donau und ist von weitem sichtbar. Das monumentale klassizistische Bauwerk beeindruckt durch seine gewaltige Kuppel und die prachtvolle Innenausstattung. In der Krypta ruhen bedeutende KirchenfÃ¼rsten, und die Schatzkammer bewahrt unschÃ¤tzbare sakrale Kunstwerke auf. Von der Kuppelgalerie bietet sich ein atemberaubender Blick bis weit in die Slowakei hinein.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Basilika ist die Kathedrale des ungarischen Primas und Erzbischofs.", "Das Altarbild ist das weltweit grÃ¶ÃŸte GemÃ¤lde auf einer einzigen Leinwand.", "Die BakÃ³cz-Kapelle im Inneren ist ein Juwel der ungarischen Renaissance.", "Die Orgel der Basilika gehÃ¶rt zu den klanggewaltigsten Instrumenten Europas."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Der Hauptsitz der katholischen Kirche in Ungarn.", "Das Altarbild ist das grÃ¶ÃŸte GemÃ¤lde auf einer einzigen Leinwand."], "hu": ["A magyar katolikus egyhÃ¡z kÃ¶zpontja.", "OltÃ¡rkÃ©pe a vilÃ¡g legnagyobb egyetlen vÃ¡szonra festett kÃ©pe."], "ro": ["Sediul Bisericii Catolice din Ungaria.", "Imaginea altarului este cea mai mare picturÄƒ pe o singurÄƒ pÃ¢nzÄƒ."], "en": ["The headquarters of the Catholic Church in Hungary.", "The altarpiece is the largest painting on a single canvas."]}
  },
  {
    id: "szentendrei-skanzen",
    type: "historical",
    parent: "HU-PE",
    coords: [19.04, 47.69],
    name: {"de": "Skanzen Szentendre", "hu": "Szentendrei Skanzen", "ro": "Skanzen Szentendre", "en": "Szentendre Skanzen"},
    image: "/geo-images/hungary/szentendrei-skanzen.webp",
    description: {"de": "Das grÃ¶ÃŸte ungarische Freilichtmuseum, das lÃ¤ndliche Architektur zeigt.", "hu": "A legnagyobb magyar szabadtÃ©ri nÃ©prajzi mÃºzeum, amely a vidÃ©ki Ã©pÃ­tÃ©szetet mutatja be.", "ro": "Cel mai mare muzeu Ã®n aer liber maghiar, prezentÃ¢nd arhitectura ruralÄƒ.", "en": "The largest Hungarian open-air museum, showcasing rural architecture."},
    descriptionAdvanced: {
      "de": "Das Ungarische Freilichtmuseum (Skanzen) in Szentendre ist das bedeutendste Museum fÃ¼r Volksarchitektur im Land. Auf einem riesigen Areal werden originale BauernhÃ¤user und Kirchen aus allen Regionen Ungarns prÃ¤sentiert. Besucher kÃ¶nnen hier den Alltag der LandbevÃ¶lkerung aus drei Jahrhunderten hautnah miterleben. In den WerkstÃ¤tten werden traditionelle Handwerke wie Brotbacken und TÃ¶pfern live vorgefÃ¼hrt. Eine historische Museumsbahn verbindet die verschiedenen Regionen des Parks und macht den Besuch fÃ¼r Familien attraktiv.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Skanzen umfasst Ã¼ber 300 historische GebÃ¤ude in zehn regionalen Einheiten.", "In dem Museum werden zahlreiche bedrohte Handwerkstechniken bewahrt.", "JÃ¤hrlich finden hier groÃŸe Volksfeste zu Ostern und Pfingsten statt.", "Das Museum wurde fÃ¼r seine pÃ¤dagogische Arbeit international ausgezeichnet."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Umfasst authentisch nachgebaute Dorfregionen.", "Organisiert traditionelle Feste und Programme."], "hu": ["Hitelesen ÃºjjÃ¡Ã©pÃ­tett falusi tÃ¡jegysÃ©geket mutat be.", "HagyomÃ¡nyos fesztivÃ¡lokat Ã©s programokat szervez."], "ro": ["PrezintÄƒ regiuni de sate reconstruite autentic.", "OrganizeazÄƒ festivaluri È™i programe tradiÈ›ionale."], "en": ["Features authentically reconstructed village regions.", "Organizes traditional festivals and programs."]}
  },
  {
    id: "tihanyi-apatsag",
    type: "historical",
    parent: "HU-VE",
    coords: [17.88, 46.91],
    name: {"de": "Abtei Tihany", "hu": "Tihanyi ApÃ¡tsÃ¡g", "ro": "AbaÈ›ia Tihany", "en": "Tihany Abbey"},
    image: "/geo-images/hungary/tihanyi-apatsag.webp",
    description: {"de": "Eine Benediktinerabtei auf der Tihany-Halbinsel mit einer tausendjÃ¤hrigen Geschichte.", "hu": "BencÃ©s apÃ¡tsÃ¡g a Tihanyi-fÃ©lszigeten, ezerÃ©ves tÃ¶rtÃ©nelemmel.", "ro": "O abaÈ›ie benedictinÄƒ pe Peninsula Tihany cu o istorie de o mie de ani.", "en": "A Benedictine abbey on the Tihany Peninsula with a thousand-year history."},
    descriptionAdvanced: {
      "de": "Die Benediktinerabtei von Tihany auf der gleichnamigen Halbinsel ist eines der bekanntesten Wahrzeichen am Plattensee. GegrÃ¼ndet im Jahr 1055, beherbergt sie eine romanische Krypta mit dem Grab von KÃ¶nig Andreas I. Die barocke Doppelturmkirche bietet einen der schÃ¶nsten Ausblicke Ã¼ber das tiefblaue Wasser des Sees. Die Abtei ist zudem ein bedeutender Ort fÃ¼r die ungarische Sprache, da ihre GrÃ¼ndungsurkunde die Ã¤ltesten schriftlichen WÃ¶rter des Landes enthÃ¤lt. Die spirituelle Ruhe der Anlage und die umgebenden Lavendelfelder machen Tihany zu einem einzigartigen Ort.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Abtei beherbergt die einzige erhaltene GrabstÃ¤tte eines KÃ¶nigs aus der Arpaden-Dynastie.", "Die GrÃ¼ndungsurkunde von 1055 ist das Ã¤lteste Schriftdenkmal in ungarischer Sprache.", "Die prachtvollen barocken Schnitzereien im Inneren stammen von Sebastian Stuhlhof.", "Tihany ist berÃ¼hmt fÃ¼r sein Echo, das an der Nordmauer der Abtei entsteht."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die GrÃ¼ndungsurkunde enthÃ¤lt die Ã¤ltesten ungarischen WÃ¶rter.", "Bietet einen herrlichen Blick Ã¼ber den Plattensee."], "hu": ["AlapÃ­tÃ³levele tartalmazza a legrÃ©gebbi magyar szavakat.", "CsodÃ¡latos kilÃ¡tÃ¡st nyÃºjt a Balatonra."], "ro": ["Carta de fondare conÈ›ine cele mai vechi cuvinte maghiare.", "OferÄƒ o priveliÈ™te magnificÄƒ asupra Lacului Balaton."], "en": ["Its founding charter contains the oldest Hungarian words.", "Offers a magnificent view over Lake Balaton."]}
  },
  {
    id: "pannonhalmi-foapatsag",
    type: "historical",
    parent: "HU-GS",
    coords: [17.76, 47.55],
    name: {"de": "Erzabtei Pannonhalma", "hu": "Pannonhalmi FÅ‘apÃ¡tsÃ¡g", "ro": "ArhiabaÈ›ia Pannonhalma", "en": "Pannonhalma Archabbey"},
    image: "/geo-images/hungary/pannonhalmi-foapatsag.webp",
    description: {"de": "Ein UNESCO-Weltkulturerbe und spirituelles Zentrum auf dem Martinsberg.", "hu": "UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g Ã©s spirituÃ¡lis kÃ¶zpont a MÃ¡rton-hegyen.", "ro": "Un sit al Patrimoniului Mondial UNESCO È™i centru spiritual pe Dealul Sf. Martin.", "en": "A UNESCO World Heritage site and spiritual center on St. Martin's Hill."},
    descriptionAdvanced: {
      "de": "Die Erzabtei Pannonhalma, gegrÃ¼ndet im Jahr 996, ist das Ã¤lteste Kloster Ungarns und gehÃ¶rt zum UNESCO-Weltkulturerbe. Sie thront erhaben auf dem Heiligen Berg von Pannonien und ist das geistige Herz der ungarischen Benediktiner. Die Anlage vereint Baustile aus Ã¼ber einem Jahrtausend, von der romanischen Krypta bis zur klassizistischen Bibliothek. In der Bibliothek werden Ã¼ber 400.000 wertvolle BÃ¤nde und unschÃ¤tzbare historische Dokumente aufbewahrt. Die MÃ¶nche von Pannonhalma fÃ¼hren zudem eine lange Tradition im Weinbau und in der KrÃ¤uterkunde fort.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Pannonhalma ist das einzige Kloster Ungarns, das seit dem Mittelalter fast stetig besteht.", "Die Abtei betreibt ein international anerkanntes Elitegymnasium.", "Das Klosterweingut produziert preisgekrÃ¶nte Weine nach alten Traditionen.", "Der ArzneikrÃ¤utergarten der Abtei ist ein Zentrum der Naturheilkunde."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wurde im Jahr 996 gegrÃ¼ndet.", "VerfÃ¼gt Ã¼ber eine beeindruckende Bibliothek mit alten Handschriften."], "hu": ["996-ban alapÃ­tottÃ¡k.", "LenyÅ±gÃ¶zÅ‘ kÃ¶nyvtÃ¡ra van rÃ©gi kÃ©ziratokkal."], "ro": ["A fost fondatÄƒ Ã®n anul 996.", "Are o bibliotecÄƒ impresionantÄƒ cu manuscrise vechi."], "en": ["Founded in 996.", "Features an impressive library with ancient manuscripts."]}
  },
  {
    id: "holloko-ofalu",
    type: "historical",
    parent: "HU-NO",
    coords: [19.58, 47.99],
    name: {"de": "Altes Dorf HollÃ³kÅ‘", "hu": "HollÃ³kÅ‘ Ã“falu", "ro": "Satul vechi HollÃ³kÅ‘", "en": "HollÃ³kÅ‘ Old Village"},
    image: "/geo-images/hungary/holloko-ofalu.webp",
    description: {"de": "Ein intaktes PalÃ³czen-Dorf und UNESCO-Weltkulturerbe.", "hu": "Ã‰rintetlen palÃ³c falu Ã©s UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­n.", "ro": "Un sat PalÃ³c intact È™i un sit al Patrimoniului Mondial UNESCO.", "en": "An intact PalÃ³c village and UNESCO World Heritage site."},
    descriptionAdvanced: {
      "de": "Das alte Dorf von HollÃ³kÅ‘ ist ein lebendiges Freilichtmuseum im Norden Ungarns und gehÃ¶rt zum UNESCO-Weltkulturerbe. Es besteht aus 67 traditionellen WohnhÃ¤usern, die nach einem Brand im ursprÃ¼nglichen Stil der PalÃ³cen-Volksgruppe wiedererrichtet wurden. Die Bewohner pflegen noch heute aktiv ihre farbenfrohen Trachten und alten Handwerke, besonders an Festtagen. Ãœber dem Dorf thront die Ruine der Burg HollÃ³kÅ‘, die einen weiten Blick Ã¼ber die sanften HÃ¼gel des CserhÃ¡t bietet. Ein Besuch in HollÃ³kÅ‘ fÃ¼hlt sich an wie eine Zeitreise in das lÃ¤ndliche Ungarn des 18. Jahrhunderts.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["HollÃ³kÅ‘ war 1987 das erste Dorf weltweit, das zum UNESCO-Welterbe erklÃ¤rt wurde.", "Die charakteristische PalÃ³c-Architektur ist hier in ihrer reinsten Form erhalten.", "Die aufwendigen, handgestickten Trachten werden zu festlichen AnlÃ¤ssen stolz getragen.", "Die Burg wurde im 13. Jahrhundert zum Schutz gegen tatarische ÃœberfÃ¤lle errichtet."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bewahrt die Traditionen des 17. und 18. Jahrhunderts.", "Die Bewohner tragen an Festtagen Tracht."], "hu": ["A 17-18. szÃ¡zadi hagyomÃ¡nyokat Å‘rzi.", "A lakosok Ã¼nnepekkor nÃ©pviseletet hordanak."], "ro": ["PÄƒstreazÄƒ tradiÈ›iile din secolele XVII È™i XVIII.", "Locuitorii poartÄƒ costume tradiÈ›ionale la festivaluri."], "en": ["Preserves the traditions of the 17th and 18th centuries.", "Residents wear traditional costumes on holidays."]}
  },
  {
    id: "szepmuveszeti-muzeum",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.07, 47.51],
    name: {"de": "Museum der Bildenden KÃ¼nste", "hu": "SzÃ©pmÅ±vÃ©szeti MÃºzeum", "ro": "Muzeul de Arte Frumoase", "en": "Museum of Fine Arts"},
    image: "/geo-images/hungary/szepmuveszeti-muzeum.webp",
    description: {"de": "Eines der bedeutendsten Museen in Budapest mit internationaler Kunst.", "hu": "Budapest egyik legjelentÅ‘sebb mÃºzeuma nemzetkÃ¶zi mÅ±vÃ©szeti alkotÃ¡sokkal.", "ro": "Unul dintre cele mai importante muzee din Budapesta cu artÄƒ internaÈ›ionalÄƒ.", "en": "One of the most important museums in Budapest with international art."},
    descriptionAdvanced: {
      "de": "Das Museum der Bildenden KÃ¼nste am Budapester Heldenplatz beherbergt die bedeutendste Kunstsammlung Ungarns. Das monumentale neoklassizistische GebÃ¤ude zeigt Meisterwerke von der Antike bis zum Ende des 18. Jahrhunderts. Besonders berÃ¼hmt ist die Sammlung spanischer Meister, darunter Werke von El Greco, VelÃ¡zquez und Goya, die als eine der besten auÃŸerhalb Spaniens gilt. Die Ã¤gyptische Abteilung und die Galerie alter Meister ziehen Kunstliebhaber aus aller Welt an. In den prachtvoll renovierten SÃ¤len, wie dem romanischen Saal, begegnen sich europÃ¤ische Kunstgeschichte und ungarische Museumstradition.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Museum besitzt eine der bedeutendsten Sammlungen spanischer Malerei in Europa.", "Der Romanische Saal gehÃ¶rt zu den prachtvollsten AusstellungsrÃ¤umen der Welt.", "Die Sammlung umfasst Ã¼ber 100.000 Kunstwerke aus verschiedenen Epochen.", "Das GebÃ¤ude wurde 1906 zum 1000-jÃ¤hrigen JubilÃ¤um der Landnahme erÃ¶ffnet."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Liegt am Heldenplatz.", "Besitzt eine groÃŸe Sammlung spanischer Malerei."], "hu": ["A HÅ‘sÃ¶k terÃ©n talÃ¡lhatÃ³.", "Nagy spanyol festÃ©szeti gyÅ±jtemÃ©nnyel rendelkezik."], "ro": ["Situat Ã®n PiaÈ›a Eroilor.", "Are o mare colecÈ›ie de picturÄƒ spaniolÄƒ."], "en": ["Located at Heroes' Square.", "Has a large collection of Spanish painting."]}
  },
  {
    id: "gellert-hegy",
    type: "mountain",
    parent: "HU-BU",
    coords: [19.04, 47.48],
    name: {"de": "GellÃ©rtberg", "hu": "GellÃ©rt-hegy", "ro": "Dealul GellÃ©rt", "en": "GellÃ©rt Hill"},
    image: "/geo-images/hungary/gellert-hegy.webp",
    description: {"de": "Ein prominenter HÃ¼gel in Budapest, der einen Panoramablick auf die Stadt bietet.", "hu": "Budapest kiemelkedÅ‘ hegye, amely panorÃ¡mÃ¡s kilÃ¡tÃ¡st nyÃºjt a vÃ¡rosra.", "ro": "Un deal proeminent Ã®n Budapesta, oferind vedere panoramicÄƒ asupra oraÈ™ului.", "en": "A prominent hill in Budapest offering panoramic views of the city."},
    descriptionAdvanced: {
      "de": "Der GellÃ©rtberg erhebt sich steil Ã¼ber der Donau im Herzen von Budapest und bietet den wohl berÃ¼hmtesten Panoramablick Ã¼ber die Stadt. Auf seinem Gipfel thront die Zitadelle, eine ehemalige Festungsanlage, sowie die imposante Freiheitsstatue, ein Symbol der ungarischen Hauptstadt. Der Berg ist nach dem Heiligen GellÃ©rt benannt, der der Legende nach hier den MÃ¤rtyrertod starb. Neben den DenkmÃ¤lern beherbergt der Berg die einzigartige Felsenkirche und ist fÃ¼r seine Thermalquellen am FuÃŸe des Hanges bekannt. Ein Spaziergang Ã¼ber die bewaldeten Wege des GellÃ©rtberges gehÃ¶rt zum Pflichtprogramm jedes Budapest-Besuchers.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Vom Gipfel des Berges aus hat man einen uneingeschrÃ¤nkten Blick auf alle DonaubrÃ¼cken.", "Die Freiheitsstatue auf dem Berg ist 14 Meter hoch und weithin sichtbar.", "Im Inneren des Berges befindet sich ein Reservoir fÃ¼r das Budapester Trinkwasser.", "Der GellÃ©rtberg gehÃ¶rt seit 1987 zum UNESCO-Weltkulturerbe."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Hier steht die Freiheitsstatue.", "Die Zitadelle krÃ¶nt den Gipfel."], "hu": ["Itt Ã¡ll a SzabadsÃ¡g-szobor.", "A hegy tetejÃ©t a Citadella koronÃ¡zza meg."], "ro": ["Aici se aflÄƒ Statuia LibertÄƒÈ›ii.", "Cetatea Ã®ncoroneazÄƒ vÃ¢rful."], "en": ["The Liberty Statue stands here.", "The Citadel crowns the summit."]}
  },
  {
    id: "normafa",
    type: "landmark",
    parent: "HU-BU",
    coords: [18.96, 47.50],
    name: {"de": "Normafa", "hu": "Normafa", "ro": "Normafa", "en": "Normafa"},
    image: "/geo-images/hungary/normafa.webp",
    description: {"de": "Ein beliebtes Ausflugsziel in den Budaer Bergen, ideal zum Wandern.", "hu": "NÃ©pszerÅ± kirÃ¡ndulÃ³hely a Budai-hegysÃ©gben, ideÃ¡lis tÃºrÃ¡zÃ¡sra.", "ro": "O destinaÈ›ie popularÄƒ de excursie Ã®n MunÈ›ii Buda, idealÄƒ pentru drumeÈ›ii.", "en": "A popular excursion destination in the Buda Hills, ideal for hiking."},
    descriptionAdvanced: {
      "de": "Die Normafa ist das beliebteste Naherholungsgebiet der Budapester in den Budaer Bergen und bietet zu jeder Jahreszeit Naturerlebnisse. Der Name geht auf einen alten Baum zurÃ¼ck, unter dem OpernsÃ¤nger im 19. Jahrhundert traditionell Arien sangen. Die Hochebene bietet fantastische Ausblicke Ã¼ber die ungarische Hauptstadt und ist ein Zentrum fÃ¼r Wanderer, Jogger und Familien. Im Winter verwandelt sich die Normafa bei entsprechendem Wetter in ein kleines Ski- und Rodelparadies direkt am Stadtrand. Zahlreiche Wanderwege fÃ¼hren von hier aus zu weiteren SehenswÃ¼rdigkeiten wie dem Aussichtsturm auf dem JÃ¡nos-Berg.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Normafa bietet einen der besten Aussichtspunkte in den Budaer Bergen.", "Das Gebiet ist ein historischer Treffpunkt der Budapester KÃ¼nstler- und Kulturszene.", "Die Zahnradbahn und die Kindereisenbahn sind von hier aus bequem zu erreichen.", "Der Ort ist berÃ¼hmt fÃ¼r seine traditionellen Strudel-VerkaufsstÃ¤nde."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bietet im Winter MÃ¶glichkeiten zum Skifahren.", "BerÃ¼hmt fÃ¼r seine StrudelspezialitÃ¤ten."], "hu": ["TÃ©len sÃ­elÃ©si lehetÅ‘sÃ©get kÃ­nÃ¡l.", "HÃ­res a rÃ©tesÃ©rÅ‘l."], "ro": ["OferÄƒ oportunitÄƒÈ›i de schi iarna.", "Cunoscut pentru specialitÄƒÈ›ile sale de È™trudel."], "en": ["Offers skiing opportunities in winter.", "Famous for its strudel specialties."]}
  },
  {
    id: "magyar-allami-operahaz",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.05, 47.50],
    name: {"de": "Staatsoper", "hu": "Magyar Ãllami OperahÃ¡z", "ro": "Opera de Stat", "en": "State Opera"},
    image: "/geo-images/hungary/magyar-allami-operahaz.webp",
    description: {"de": "Ein prachtvolles Neorenaissance-GebÃ¤ude auf der AndrÃ¡ssy-StraÃŸe.", "hu": "LenyÅ±gÃ¶zÅ‘ neoreneszÃ¡nsz Ã©pÃ¼let az AndrÃ¡ssy Ãºton.", "ro": "O clÄƒdire magnificÄƒ neo-renascentistÄƒ pe Bulevardul AndrÃ¡ssy.", "en": "A magnificent Neo-Renaissance building on AndrÃ¡ssy Avenue."},
    descriptionAdvanced: {
      "de": "Die Ungarische Staatsoper an der AndrÃ¡ssy-StraÃŸe ist ein architektonisches Juwel der Neorenaissance und eines der schÃ¶nsten OpernhÃ¤user weltweit. Entworfen von MiklÃ³s Ybl, wurde das GebÃ¤ude 1884 im Beisein von Kaiser Franz Joseph I. feierlich erÃ¶ffnet. Das prachtvolle Innere besticht durch reich vergoldete Logen, Deckenfresken bedeutender ungarischer Maler und einen riesigen Kronleuchter. Die Akustik des Hauses gilt als eine der besten in Europa und zieht internationale SpitzenkÃ¼nstler und ein begeistertes Publikum an. Ein Besuch einer Vorstellung oder eine FÃ¼hrung durch die glanzvollen SÃ¤le vermittelt den aristokratischen Glanz der Budapester BlÃ¼tezeit.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Wiener Expertenkommission stufte die Akustik der Oper als drittbeste in Europa ein.", "Gustav Mahler wirkte hier mehrere Jahre als kÃ¼nstlerischer Direktor.", "Das GebÃ¤ude wurde im Jahr 2022 nach einer umfassenden Restaurierung wiedererÃ¶ffnet.", "Die Oper besitzt den zweitgrÃ¶ÃŸten Vorhang in ganz Europa."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["ErÃ¶ffnet im Jahr 1884.", "BerÃ¼hmt fÃ¼r seine hervorragende Akustik."], "hu": ["1884-ben nyitotta meg kapuit.", "KivÃ¡lÃ³ akusztikÃ¡jÃ¡rÃ³l ismert."], "ro": ["DeschisÄƒ Ã®n 1884.", "FaimoasÄƒ pentru acustica sa excelentÄƒ."], "en": ["Opened in 1884.", "Famous for its excellent acoustics."]}
  },
  {
    id: "csodak-palotaja",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.03, 47.53],
    name: {"de": "Palast der Wunder", "hu": "CsodÃ¡k PalotÃ¡ja", "ro": "Palatul Minunilor", "en": "Center of Scientific Wonders"},
    image: "/geo-images/hungary/csodak-palotaja.webp",
    description: {"de": "Ein interaktives Wissenschaftszentrum, das spielerisch Wissen vermittelt.", "hu": "InteraktÃ­v tudomÃ¡nyos kÃ¶zpont, amely jÃ¡tÃ©kosan adja Ã¡t az ismereteket.", "ro": "Un centru È™tiinÈ›ific interactiv care transmite cunoÈ™tinÈ›e Ã®n mod ludic.", "en": "An interactive science center that imparts knowledge playfully."},
    descriptionAdvanced: {
      "de": "Der Palast der Wunder (CsodÃ¡k PalotÃ¡ja) in Budapest ist das erste interaktive wissenschaftliche Erlebniszentrum in Mittel- und Osteuropa. Auf einer riesigen FlÃ¤che bietet das Zentrum Ã¼ber 250 Spiele und Experimente, die physikalische und naturwissenschaftliche GesetzmÃ¤ÃŸigkeiten spielerisch vermitteln. Besucher aller Altersgruppen kÃ¶nnen hier NaturphÃ¤nomene hautnah erleben, von der Optik Ã¼ber die Mechanik bis hin zur Weltraumforschung. RegelmÃ¤ÃŸige spektakulÃ¤re Wissenschaftsshows in den Laboren begeistern das Publikum mit Experimenten zum Mitmachen. Der Palast der Wunder ist der ideale Ort fÃ¼r Familien, um die Welt der Wissenschaft mit SpaÃŸ und Staunen zu entdecken.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der CsodÃ¡k PalotÃ¡ja wurde 1995 als Pionierprojekt in Ungarn gegrÃ¼ndet.", "Das Zentrum bietet Themenbereiche von der Nanotechnologie bis zum Magnetismus.", "Es ist eines der beliebtesten auÃŸerschulischen Bildungszentren in der ungarischen Hauptstadt.", "In den 5D- und 9D-Kinos kÃ¶nnen Besucher virtuelle Reisen durch die Wissenschaft erleben."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das erste seiner Art in Mitteleuropa.", "Bietet Ã¼ber 250 interaktive Spiele."], "hu": ["Az elsÅ‘ ilyen jellegÅ± intÃ©zmÃ©ny KÃ¶zÃ©p-EurÃ³pÃ¡ban.", "TÃ¶bb mint 250 interaktÃ­v jÃ¡tÃ©kot kÃ­nÃ¡l."], "ro": ["Primul de acest fel din Europa CentralÄƒ.", "OferÄƒ peste 250 de jocuri interactive."], "en": ["The first of its kind in Central Europe.", "Offers over 250 interactive games."]}
  },
  {
    id: "boldogko-var-b2",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.23, 48.34],
    name: {"de": "Burg BoldogkÅ‘", "hu": "BoldogkÅ‘i vÃ¡r", "ro": "Cetatea BoldogkÅ‘", "en": "BoldogkÅ‘ Castle"},
    image: "/geo-images/hungary/boldogko-var.webp",
    description: {"de": "Mittelalterliche Burg auf einem markanten Felsen im ZemplÃ©n-Gebirge.", "hu": "KÃ¶zÃ©pkori vÃ¡r a ZemplÃ©ni-hegysÃ©g egyik meredek sziklÃ¡jÃ¡n.", "ro": "Cetate medievalÄƒ situatÄƒ pe o stÃ¢ncÄƒ abruptÄƒ Ã®n munÈ›ii ZemplÃ©n.", "en": "Medieval castle perched on a steep rock in the ZemplÃ©n Mountains."},
    descriptionAdvanced: {
      "de": "Die Burg BoldogkÅ‘ im ZemplÃ©n-Gebirge thront spektakulÃ¤r auf einem schmalen, schiffartigen FelsrÃ¼cken und ist eine der romantischsten Burgen Ungarns. Der markanteste Teil der Anlage ist die sogenannte 'LÃ¶wenkammer' auf dem Felssporn, von der aus man einen weiten Blick Ã¼ber das HernÃ¡d-Tal hat. Die im 13. Jahrhundert errichtete Festung beherbergt heute interessante Ausstellungen zur MilitÃ¤rgeschichte und eine einzigartige Zinnfigurensammlung. In den Sommermonaten finden in der Burg regelmÃ¤ÃŸig historische Ritterspiele und mittelalterliche Festmahle statt. Die ungewÃ¶hnliche Form der Burg und die unberÃ¼hrte Landschaft der Umgebung machen BoldogkÅ‘ zu einem Geheimtipp fÃ¼r Entdecker.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg BoldogkÅ‘ steht auf einem vulkanischen FelsrÃ¼cken im ZemplÃ©n-Gebirge.", "Der Name 'BoldogkÅ‘' bedeutet Ã¼bersetzt etwa 'GlÃ¼cklicher Stein'.", "Die Burg beherbergt die grÃ¶ÃŸte Zinnfigurensammlung Mitteleuropas.", "Ein markanter Holzsteg fÃ¼hrt entlang des schmalen Felsgrates zur Aussichtsplattform."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r den hÃ¶lzernen Wehrgang.", "Beherbergt eine groÃŸe Zinnfigurenausstellung."], "hu": ["HÃ­res a sziklÃ¡n futÃ³ fapadlÃ³s gyilokjÃ¡rÃ³rÃ³l.", "Itt talÃ¡lhatÃ³ az orszÃ¡g egyik legnagyobb Ã³lomkatona-kiÃ¡llÃ­tÃ¡sa."], "ro": ["CunoscutÄƒ pentru galeria sa de lemn pe stÃ¢ncÄƒ.", "GÄƒzduieÈ™te o mare expoziÈ›ie de soldÄƒÈ›ei de plumb."], "en": ["Famous for its wooden walkway on the rock.", "Home to a large exhibition of tin soldiers."]}
  },
  {
    id: "fuzer-var-b2",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.46, 48.54],
    name: {"de": "Burg FÃ¼zÃ©r", "hu": "FÃ¼zÃ©ri vÃ¡r", "ro": "Cetatea FÃ¼zÃ©r", "en": "FÃ¼zÃ©r Castle"},
    image: "/geo-images/hungary/fuzer-var.webp",
    description: {"de": "SpektakulÃ¤r restaurierte HÃ¶henburg auf einem vulkanischen Gipfel.", "hu": "LÃ¡tvÃ¡nyosan felÃºjÃ­tott hegyi vÃ¡r egy vulkÃ¡ni kÃºpon.", "ro": "Cetate montanÄƒ restauratÄƒ spectaculos pe un con vulcanic.", "en": "Spectacularly restored hilltop castle on a volcanic cone."},
    descriptionAdvanced: {
      "de": "Die Burg FÃ¼zÃ©r im Ã¤uÃŸersten Norden Ungarns thront majestÃ¤tisch auf einem steilen Vulkankegel und gilt als eine der spektakulÃ¤rsten rekonstruierten Festungen des Landes. Die im 13. Jahrhundert gegrÃ¼ndete Burg spielte eine wichtige Rolle in der ungarischen Geschichte und bewahrte nach der Schlacht von MohÃ¡cs ein Jahr lang die ungarische Stephanskrone auf. In den letzten Jahren wurde die Oberburg mit ihrer prachtvollen gotischen Kapelle und dem PalastflÃ¼gel aufwendig und detailgetreu wiederaufgebaut. Besucher kÃ¶nnen heute in originalgetreu eingerichteten RÃ¤umen in das Leben des 16. und 17. Jahrhunderts eintauchen. Die Lage im ZemplÃ©n-Gebirge bietet zudem fantastische WandermÃ¶glichkeiten und unberÃ¼hrte Naturerlebnisse.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg FÃ¼zÃ©r war eine der ersten steinernen Festungen in Ungarn.", "In der Burgkapelle wurde 1526-27 die ungarische Heilige Krone vor den TÃ¼rken versteckt.", "Die Burg wurde aufgrund ihrer strategischen Lage und SchÃ¶nheit zum Naturwunder gewÃ¤hlt.", "Der Aufstieg zur Burg bietet ein Panorama Ã¼ber das gesamte HegykÃ¶z-Gebiet."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Eine der ersten Steinburgen des Landes.", "Bewahrte einst die ungarische Heilige Krone."], "hu": ["Az orszÃ¡g egyik legkorÃ¡bbi kÅ‘vÃ¡ra.", "Egykor itt Å‘riztÃ©k a Szent KoronÃ¡t."], "ro": ["Una dintre primele cetÄƒÈ›i de piatrÄƒ din È›arÄƒ.", "Aici a fost pÄƒstratÄƒ odatÄƒ SfÃ¢nta CoroanÄƒ."], "en": ["One of the country's earliest stone castles.", "The Holy Crown was once kept here."]}
  },
  {
    id: "sirok-var",
    type: "landmark",
    parent: "HU-HE",
    coords: [20.19, 47.93],
    name: {"de": "Burg Sirok", "hu": "Siroki vÃ¡r", "ro": "Cetatea Sirok", "en": "Sirok Castle"},
    image: "/geo-images/hungary/sirok-var.webp",
    description: {"de": "Ungarns am besten erhaltene in den Fels gehauene HÃ¶hlenburg.", "hu": "MagyarorszÃ¡g legjelentÅ‘sebb barlang- Ã©s sziklavÃ¡ra a MÃ¡tra keleti rÃ©szÃ©n.", "ro": "Cea mai bine conservatÄƒ cetate sÄƒpatÄƒ Ã®n stÃ¢ncÄƒ din Ungaria.", "en": "Hungary's best-preserved cave and rock castle in the MÃ¡tra."},
    descriptionAdvanced: {
      "de": "Die Burg von Sirok ist die am spektakulÃ¤rsten gelegene Felsenburg im MÃ¡tra-Gebirge, teilweise direkt in den weichen Tuffstein gehauen. Die Ruinen thronen auf einem hohen FelsrÃ¼cken und bieten ein Labyrinth aus unterirdischen GÃ¤ngen, Hallen und Verteidigungsanlagen, die in den Stein gemeiÃŸelt wurden. Besonders markant sind die bizarren Felsformationen in der Umgebung der Burg, die sogenannten 'BarÃ¡t' und 'ApÃ¡ca' (MÃ¶nch und Nonne), um die sich zahlreiche Legenden ranken. Ein gut ausgebauter Lehrpfad fÃ¼hrt Besucher durch die Geschichte der Festung und zu den schÃ¶nsten Aussichtspunkten Ã¼ber die bewaldeten HÃ¤nge der MÃ¡tra. Sirok ist ein Ort von wildromantischer SchÃ¶nheit, der die Verbindung von Natur und mittelalterlicher Wehrarchitektur zeigt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["GroÃŸe Teile der Burg Sirok wurden direkt aus dem vulkanischen Felsgestein gehauen.", "Die Burg war im 16. Jahrhundert ein wichtiger Vorposten gegen die osmanische Expansion.", "Unter der Burg erstreckt sich ein weitlÃ¤ufiges System aus kÃ¼nstlichen FelsenhÃ¶hlen.", "Von den Burgmauern aus kann man bis zum fernen BÃ¼kk-Gebirge blicken."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["VerfÃ¼gt Ã¼ber ein weitlÃ¤ufiges Tunnelsystem.", "Bietet Panoramablick auf die MÃ¡tra."], "hu": ["Kiterjedt fÃ¶ldalatti kazamata-rendszerrel bÃ­r.", "Pazar kilÃ¡tÃ¡st nyÃºjt a MÃ¡trÃ¡ra."], "ro": ["Are un sistem extins de tuneluri subterane.", "OferÄƒ vedere panoramicÄƒ asupra munÈ›ilor MÃ¡tra."], "en": ["Features an extensive underground tunnel system.", "Offers panoramic views of the MÃ¡tra."]}
  },
  {
    id: "sumeg-var-b2",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.43, 46.98],
    name: {"de": "Burg SÃ¼meg", "hu": "SÃ¼megi vÃ¡r", "ro": "Cetatea SÃ¼meg", "en": "SÃ¼meg Castle"},
    image: "/geo-images/hungary/sumeg-var.webp",
    description: {"de": "Imposante Festung, die Ã¼ber der Stadt SÃ¼meg auf einem HÃ¼gel thront.", "hu": "ImpozÃ¡ns erÅ‘dÃ­tmÃ©ny, amely a Balaton-felvidÃ©k kapujÃ¡ban magasodik.", "ro": "FortÄƒreaÈ›Äƒ impunÄƒtoare care dominÄƒ oraÈ™ul SÃ¼meg de pe un deal.", "en": "Imposing fortress towering over the town of SÃ¼meg on a hill."},
    descriptionAdvanced: {
      "de": "Die Burg SÃ¼meg thront majestÃ¤tisch auf einem steilen Kalksteinfelsen Ã¼ber der gleichnamigen Stadt und gilt als eine der besterhaltenen Festungen Ungarns. Im 13. Jahrhundert nach dem Tatarensturm errichtet, diente sie Ã¼ber Jahrhunderte als wichtiger Verteidigungsposten. Besonders markant ist der mÃ¤chtige Alte Turm und die weitlÃ¤ufigen Burgmauern, die die gesamte Bergkuppe umschlieÃŸen. Heute ist die Burg ein lebendiges Zentrum fÃ¼r mittelalterliche Kultur, bekannt fÃ¼r ihre spektakulÃ¤ren Ritterspiele und historischen VorfÃ¼hrungen. Von der Burg aus bietet sich ein herrlicher Blick Ã¼ber das Tapolcaer Becken bis hin zum Plattensee.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg SÃ¼meg ist eine der am besten erhaltenen mittelalterlichen Festungen des Landes.", "In der Burg werden regelmÃ¤ÃŸig historische Burgspiele und Ritterturniere veranstaltet.", "Die Anlage besitzt ein eigenes Waffenmuseum und eine Folterkammer.", "Vom Burgberg aus kann man bei gutem Wetter bis zum Plattensee blicken."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["BerÃ¼hmt fÃ¼r historische Ritterspiele.", "Widerstand erfolgreich osmanischen Belagerungen."], "hu": ["HÃ­res a lÃ¡tvÃ¡nyos lovagi tornÃ¡irÃ³l.", "Sikeresen ellenÃ¡llt a tÃ¶rÃ¶k ostromoknak."], "ro": ["FaimoasÄƒ pentru jocurile cavalereÈ™ti istorice.", "A rezistat cu succes asediilor otomane."], "en": ["Famous for historical knight tournaments.", "Successfully resisted Ottoman sieges."]}
  },
  {
    id: "somlo-var",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.37, 47.15],
    name: {"de": "Burg SomlÃ³", "hu": "SomlÃ³i vÃ¡r", "ro": "Cetatea SomlÃ³", "en": "SomlÃ³ Castle"},
    image: "/geo-images/hungary/somlo-var.webp",
    description: {"de": "Malerische Burgruine auf dem vulkanischen Berg SomlÃ³.", "hu": "RegÃ©nyes vÃ¡rrom a SomlÃ³ vulkanikus tanÃºhegyÃ©nek tetejÃ©n.", "ro": "Ruine pitoreÈ™ti ale cetÄƒÈ›ii pe muntele vulcanic SomlÃ³.", "en": "Picturesque castle ruins on the volcanic SomlÃ³ mountain."},
    descriptionAdvanced: {
      "de": "Die Burgruine SomlÃ³ liegt auf dem gleichnamigen Zeugenberg, der vor allem fÃ¼r seinen exzellenten WeiÃŸwein bekannt ist. Die im 14. Jahrhundert errichtete Festung schmiegt sich an die steilen BasaltwÃ¤nde des Berges und bietet ein faszinierendes Labyrinth aus Mauern und TÃ¼rmen. Trotz ihres Ruinenzustands vermittelt die Anlage noch heute die strategische Bedeutung, die sie einst fÃ¼r den Schutz der Region hatte. Der Aufstieg zur Burg fÃ¼hrt durch die berÃ¼hmten WeinhÃ¤nge von SomlÃ³, wo der 'Wein der HochzeitsnÃ¤chte' wÃ¤chst. Von den Ruinen aus genieÃŸt man einen weiten Panoramablick Ã¼ber die ungarische Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der SomlÃ³-Berg ist der kleinste Weinbauort Ungarns, aber weltberÃ¼hmt fÃ¼r seine QualitÃ¤t.", "Die Burg war einst im Besitz bedeutender ungarischer Adelsfamilien wie der ErdÅ‘dys.", "Der Weg zur Burg fÃ¼hrt an bizarren Basaltformationen vulkanischen Ursprungs vorbei.", "Die Ruine ist ein beliebtes Ziel fÃ¼r Wanderer und Weinliebhaber gleichermaÃŸen."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Umgeben von berÃ¼hmten Weinbergen.", "Ein beliebtes Ziel fÃ¼r Wanderer."], "hu": ["HÃ­res borvidÃ©k veszi kÃ¶rÃ¼l.", "Kedvelt kirÃ¡ndulÃ³hely a tÃºrÃ¡zÃ³k kÃ¶rÃ©ben."], "ro": ["ÃŽnconjuratÄƒ de podgorii faimoase.", "O destinaÈ›ie popularÄƒ pentru drumeÈ›i."], "en": ["Surrounded by famous vineyards.", "A popular destination for hikers."]}
  },
  {
    id: "nagyvazsony-kinizsi-var",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.69, 46.98],
    name: {"de": "Kinizsi-Burg", "hu": "NagyvÃ¡zsonyi Kinizsi-vÃ¡r", "ro": "Cetatea Kinizsi", "en": "Kinizsi Castle"},
    image: "/geo-images/hungary/nagyvazsony-var.webp",
    description: {"de": "Historische Burg, die einst dem legendÃ¤ren Paul Kinizsi gehÃ¶rte.", "hu": "A legendÃ¡s verhetetlen hadvezÃ©r, Kinizsi PÃ¡l egykori vÃ¡ra.", "ro": "Cetate istoricÄƒ care a aparÈ›inut legendarului Paul Kinizsi.", "en": "Historic castle once owned by the legendary Paul Kinizsi."},
    descriptionAdvanced: {
      "de": "Die Burg von NagyvÃ¡zsony, auch als Kinizsi-Burg bekannt, ist eng mit dem legendÃ¤ren HeerfÃ¼hrer Paul Kinizsi verbunden. Paul Kinizsi, berÃ¼hmt fÃ¼r seine unglaubliche Kraft und Tapferkeit in den Schlachten gegen die Osmanen, erhielt die Burg von KÃ¶nig Matthias Corvinus als Geschenk. Der markante quadratische Wohnturm ist bis heute erhalten und beherbergt ein interessantes Burgmuseum. In den Sommermonaten werden im Burghof regelmÃ¤ÃŸig mittelalterliche Spiele veranstaltet, die an die Heldentaten Kinizsis erinnern. NagyvÃ¡zsony liegt am FuÃŸe des Bakony-Gebirges und bewahrt eine ruhige, historische AtmosphÃ¤re.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Paul Kinizsi war ein unbesiegbarer Feldherr des schwarzen Heeres von KÃ¶nig Matthias.", "Der fÃ¼nfstÃ¶ckige Wohnturm ist eines der besterhaltenen Beispiele spÃ¤tgotischer Profanarchitektur.", "Im Burgmuseum werden persÃ¶nliche GegenstÃ¤nde und RÃ¼stungen aus der Kinizsi-Zeit gezeigt.", "JÃ¤hrlich finden hier die Kinizsi-Tage mit spektakulÃ¤ren Reiter- und KampfvorfÃ¼hrungen statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Besitzt einen markanten Wohnturm.", "Veranstaltet im Sommer Ritterspiele."], "hu": ["Jellegzetes, magas lakÃ³toronnyal rendelkezik.", "NyÃ¡ron lovagi jÃ¡tÃ©kokat rendeznek a vÃ¡rudvaron."], "ro": ["Are un turn de locuinÈ›Äƒ proeminent.", "GÄƒzduieÈ™te jocuri cavalereÈ™ti Ã®n timpul verii."], "en": ["Has a distinctive residential tower.", "Hosts knightly tournaments in the summer."]}
  },
  {
    id: "szerencs-var",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.20, 48.16],
    name: {"de": "Burg Szerencs", "hu": "Szerencsi vÃ¡r", "ro": "Cetatea Szerencs", "en": "Szerencs Castle"},
    image: "/geo-images/hungary/szerencs-var.webp",
    description: {"de": "Renaissanceschloss im Herzen der Schokoladenstadt Szerencs.", "hu": "ReneszÃ¡nsz vÃ¡rkastÃ©ly a csokolÃ¡dÃ© vÃ¡rosÃ¡nak szÃ­vÃ©ben.", "ro": "Castel renascentist Ã®n inima oraÈ™ului ciocolatei, Szerencs.", "en": "Renaissance castle in the heart of the chocolate town, Szerencs."},
    descriptionAdvanced: {
      "de": "Die Burg Szerencs im Nordosten Ungarns ist ein bedeutendes Baudenkmal der SpÃ¤trenaissance und eng mit der Geschichte der Familie RÃ¡kÃ³czi verknÃ¼pft. Die Stadt Szerencs gilt als das Tor zum Weinbaugebiet Hegyalja und war im 17. Jahrhundert ein wichtiger Schauplatz politischer Versammlungen. Die Burg wurde auf den Fundamenten eines Klosters errichtet und besticht heute durch ihre harmonische Architektur und den umliegenden See. Im Inneren befindet sich das ZemplÃ©n-Museum, das eine der grÃ¶ÃŸten Postkartensammlungen der Welt sowie Ausstellungen zur Schokoladenherstellung beherbergt. Die Burg strahlt eine vornehme Ruhe aus und ist ein kulturelles Zentrum der Region.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg Szerencs war im Jahr 1605 der Ort der Wahl von IstvÃ¡n Bocskai zum FÃ¼rsten.", "Das stÃ¤dtische Museum beherbergt eine Postkartensammlung mit Ã¼ber einer Million Exemplaren.", "Szerencs ist historisch fÃ¼r seine traditionsreiche Zucker- und Schokoladenindustrie bekannt.", "Die Burganlage ist von einem malerischen Wassergraben und einem Park umgeben."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Sitz des ZemplÃ©n-Museums.", "Verbunden mit dem FÃ¼rsten Bocskai."], "hu": ["A ZemplÃ©ni MÃºzeumnak ad otthont.", "Bocskai IstvÃ¡n fejedelemmel fonÃ³dott Ã¶ssze a mÃºltja."], "ro": ["Sediul Muzeului ZemplÃ©n.", "LegatÄƒ de principele Bocskai."], "en": ["Home to the ZemplÃ©n Museum.", "Connected with Prince Bocskai."]}
  },
  {
    id: "koszeg-jurisics-var",
    type: "landmark",
    parent: "HU-VA",
    coords: [16.54, 47.39],
    name: {"de": "Jurisics-Burg", "hu": "KÅ‘szegi Jurisics-vÃ¡r", "ro": "Cetatea Jurisics", "en": "Jurisics Castle"},
    image: "/geo-images/hungary/koszeg-var.webp",
    description: {"de": "GeschichtstrÃ¤chtige Burg, die 1532 den Vormarsch der Osmanen stoppte.", "hu": "TÃ¶rtÃ©nelmi vÃ¡r, mely 1532-ben megÃ¡llÃ­totta a tÃ¶rÃ¶k sereget.", "ro": "Cetate istoricÄƒ ce a oprit avansul otomanilor Ã®n 1532.", "en": "Historic castle that stopped the Ottoman advance in 1532."},
    descriptionAdvanced: {
      "de": "Die Burg Jurisics in KÅ‘szeg ist ein nationales Symbol fÃ¼r Tapferkeit und Ausdauer in Ungarn. Im Jahr 1532 hielt hier eine kleine Gruppe von Verteidigern unter dem Kommando von Nikolaus Jurisics einer gewaltigen osmanischen Ãœbermacht stand. Zu Ehren dieses Sieges lÃ¤uten in KÅ‘szeg bis heute tÃ¤glich um 11 Uhr die Kirchenglocken. Die Burganlage selbst vereint Elemente der Gotik und der Renaissance und beherbergt heute das Jurisics-Burgmuseum. Besucher kÃ¶nnen die WehrgÃ¤nge, den Rittersaal und die historischen Ausstellungen erkunden, die die Geschichte der 'treuesten Stadt' lebendig werden lassen. KÅ‘szeg bewahrt durch seine Burg und die Altstadt ein fast unversehrtes mittelalterliches Flair.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Belagerung von KÅ‘szeg 1532 dauerte 25 Tage und verhinderte einen Angriff auf Wien.", "Das tÃ¤gliche 11-Uhr-LÃ¤uten in KÅ‘szeg erinnert an den Abzug der tÃ¼rkischen Truppen.", "In der Burg ist ein bedeutendes Archiv mit Dokumenten zur Regionalgeschichte untergebracht.", "Der Burghof dient im Sommer als stimmungsvolle Kulisse fÃ¼r TheaterauffÃ¼hrungen."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["In KÅ‘szeg lÃ¤uten die Glocken um 11 Uhr.", "Wahrzeichen der Grenzstadt KÅ‘szeg."], "hu": ["KÅ‘szegen 11 Ã³rakor is szÃ³lnak a harangok.", "A hatÃ¡rmenti kisvÃ¡ros jelkÃ©pe."], "ro": ["ÃŽn KÅ‘szeg clopotele bat È™i la ora 11.", "Simbolul oraÈ™ului de graniÈ›Äƒ KÅ‘szeg."], "en": ["Bells ring at 11 AM in KÅ‘szeg.", "Symbol of the border town KÅ‘szeg."]}
  },
  {
    id: "simontornya-var",
    type: "landmark",
    parent: "HU-TO",
    coords: [18.55, 46.75],
    name: {"de": "Burg Simontornya", "hu": "Simontornyai vÃ¡r", "ro": "Cetatea Simontornya", "en": "Simontornya Castle"},
    image: "/geo-images/hungary/simontornya-var.webp",
    description: {"de": "PrÃ¤chtiges Renaissanceschloss mit einer wechselvollen Geschichte.", "hu": "Pazar reneszÃ¡nsz palotaszÃ¡rnyakkal dÃ­szÃ­tett alfÃ¶ldi vÃ¡r.", "ro": "Castel renascentist splendid cu o istorie bogatÄƒ.", "en": "Splendid Renaissance castle with a rich history."},
    descriptionAdvanced: {
      "de": "Die Burg von Simontornya im Komitat Tolna ist ein faszinierendes Beispiel fÃ¼r den Wandel einer mittelalterlichen Festung in einen Renaissance-Palast. Der Name 'Simon-Turm' geht auf den ersten Erbauer im 13. Jahrhundert zurÃ¼ck, doch ihre architektonische BlÃ¼tezeit erlebte die Burg unter der Familie Buzlay in der Renaissance. Besonders sehenswert sind die prÃ¤chtigen Terrakotta-Verzierungen und die harmonisch gestalteten Arkaden des Innenhofs. Trotz spÃ¤terer Umbauten und BeschÃ¤digungen wÃ¤hrend der TÃ¼rkenkriege strahlt die Burg noch heute eine vornehme Eleganz aus. Heute beherbergt sie ein interessantes Museum, das die Architekturgeschichte des GebÃ¤udes und archÃ¤ologische Funde aus der Umgebung prÃ¤sentiert.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Simontornya besitzt eines der schÃ¶nsten Renaissance-Tore in ganz Ungarn.", "Die Burg wurde wÃ¤hrend der TÃ¼rkenherrschaft als Sitz eines Sandschaks genutzt.", "In der Burgkapelle sind wertvolle Freskenreste aus dem Mittelalter zu sehen.", "Der Wohnturm der Burg bietet einen weiten Blick Ã¼ber die Landschaft des SÃ¡rvÃ­z-Tals."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Einst eine wichtige Festung an der SiÃ³.", "Besitzt schÃ¶ne Terrakotta-Verzierungen."], "hu": ["Valaha a SiÃ³ menti vÃ©delmi vonal rÃ©sze volt.", "GyÃ¶nyÃ¶rÅ± reneszÃ¡nsz faragvÃ¡nyok dÃ­szÃ­tik."], "ro": ["OdatÄƒ o fortÄƒreaÈ›Äƒ importantÄƒ pe rÃ¢ul SiÃ³.", "Are frumoase decoraÈ›iuni din teracotÄƒ."], "en": ["Once an important fortress along the SiÃ³.", "Features beautiful terracotta decorations."]}
  },
  {
    id: "varpalota-thury-var",
    type: "landmark",
    parent: "HU-VE",
    coords: [18.14, 47.20],
    name: {"de": "Thury-Burg", "hu": "VÃ¡rpalotai Thury-vÃ¡r", "ro": "Cetatea Thury", "en": "Thury Castle"},
    image: "/geo-images/hungary/varpalota-var.webp",
    description: {"de": "Mittelalterliche Festung im Zentrum von VÃ¡rpalota.", "hu": "KÃ¶zÃ©pkori erÅ‘dÃ­tmÃ©ny VÃ¡rpalota vÃ¡rosÃ¡nak szÃ­vÃ©ben.", "ro": "FortÄƒreaÈ›Äƒ medievalÄƒ Ã®n centrul oraÈ™ului VÃ¡rpalota.", "en": "Medieval fortress in the center of VÃ¡rpalota."},
    descriptionAdvanced: {
      "de": "Die Burg Thury in VÃ¡rpalota ist benannt nach ihrem berÃ¼hmtesten Verteidiger, dem legendÃ¤ren BurgkapitÃ¤n Georg Thury. Thury war bekannt fÃ¼r seine unzÃ¤hligen siegreichen ZweikÃ¤mpfe gegen tÃ¼rkische Krieger und seine Standhaftigkeit in den Grenzkriegen des 16. Jahrhunderts. Die Burg selbst ist eine mÃ¤chtige quadratische Festung mit EcktÃ¼rmen, die im Laufe der Jahrhunderte mehrfach umgebaut wurde. Heute beherbergt die Burg das Ungarische Chemische Museum und eine Ausstellung zur Geschichte des ungarischen Handwerks. Die Burganlage bildet das Herz der Stadt VÃ¡rpalota und erinnert an die Zeit, als sie ein wichtiger Vorposten im Kampf gegen die osmanische Expansion war. RegelmÃ¤ÃŸige Veranstaltungen halten das Andenken an Georg Thury und seine Epoche wach.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Georg Thury, der 'ungarische Cid', besiegte laut Legende Ã¼ber 600 Gegner im Zweikampf.", "Die Burg VÃ¡rpalota war eine der wichtigsten Grenzfestungen im Bakony-Gebiet.", "Im Inneren befindet sich eine weltweit bedeutende Sammlung historischer Bergbaukarten.", "Der Renaissance-Hof der Burg ist ein architektonisches Highlight der Anlage."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Benannt nach KapitÃ¤n GyÃ¶rgy Thury.", "Beherbergt ein Chemie-Museum."], "hu": ["Thury GyÃ¶rgy vÃ¡rkapitÃ¡ny nevÃ©t viseli.", "Itt talÃ¡lhatÃ³ a VegyÃ©szeti MÃºzeum."], "ro": ["NumitÄƒ dupÄƒ cÄƒpitanul GyÃ¶rgy Thury.", "GÄƒzduieÈ™te un muzeu al chimiei."], "en": ["Named after Captain GyÃ¶rgy Thury.", "Houses a chemistry museum."]}
  },
  {
    id: "szelce-volgy",
    type: "landmark",
    parent: "HU-NO",
    coords: [19.06, 48.15],
    name: {"de": "Szelce-Tal", "hu": "Szelce-vÃ¶lgy", "ro": "Valea Szelce", "en": "Szelce Valley"},
    image: "/geo-images/hungary/szelce-volgy.webp",
    description: {"de": "UnberÃ¼hrtes Tal in Nordungarn mit dichter Waldlandschaft.", "hu": "Ã‰rintetlen Ã©szaki vÃ¶lgy dÃºs erdÅ‘kkel Ã©s friss levegÅ‘vel.", "ro": "Vale neatinsÄƒ Ã®n nordul Ungariei cu pÄƒduri dese.", "en": "Pristine valley in North Hungary with dense forest landscape."},
    descriptionAdvanced: {
      "de": "Das Szelce-Tal ist eines der versteckten Naturjuwele im Nationalpark Aggtelek, bekannt fÃ¼r seine unberÃ¼hrte Stille und tiefe TÃ¤ler. Fernab der HaupttouristenstrÃ¶me bietet das Tal ideale Bedingungen fÃ¼r Wanderer, die die authentische Wildnis der nordungarischen Karstlandschaft erleben mÃ¶chten. Die Region ist geprÃ¤gt von dichten WÃ¤ldern, seltenen Bergpflanzen und einer artenreichen Fauna, zu der auch Rehe und Wildschweine gehÃ¶ren. Das Tal ist zudem reich an geologischen Formationen, die typisch fÃ¼r die Karstregion sind, wie kleine Quellen und Dolinen. Im Herbst verwandelt sich der Wald in ein farbenprÃ¤chtiges Meer aus Rot- und GoldtÃ¶nen. Szelce-vÃ¶lgy ist der perfekte Ort fÃ¼r Naturliebhaber, die Ruhe und Entspannung in einer fast archaischen Umgebung suchen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Szelce-Tal gehÃ¶rt zum grenzÃ¼berschreitenden UNESCO-Weltnaturerbe Aggtelek.", "In dem Gebiet wurden bereits Spuren von WÃ¶lfen und Luchsen gesichtet.", "Es ist eines der dunkelsten Gebiete Ungarns, ideal zur Sternenbeobachtung.", "Zahlreiche markierte Wanderwege verbinden das Tal mit den berÃ¼hmten HÃ¶hlen von Aggtelek."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Einzigartige Gebirgsflora.", "Ideal fÃ¼r ruhige Naturwanderungen."], "hu": ["KÃ¼lÃ¶nleges hegyi flÃ³rÃ¡val rendelkezik.", "TÃ¶kÃ©letes hely a csendes erdei tÃºrÃ¡khoz."], "ro": ["FlorÄƒ montanÄƒ unicÄƒ.", "IdealÄƒ pentru drumeÈ›ii liniÈ™tite Ã®n naturÄƒ."], "en": ["Unique mountain flora.", "Ideal for quiet nature hikes."]}
  },
  {
    id: "palvolgyi-barlang",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.016, 47.532],
    name: {"de": "PÃ¡lvÃ¶lgyi-HÃ¶hle", "hu": "PÃ¡lvÃ¶lgyi-barlang", "ro": "PeÈ™tera PÃ¡lvÃ¶lgyi", "en": "PÃ¡lvÃ¶lgyi Cave"},
    image: "/geo-images/hungary/palvolgyi-barlang.webp",
    description: {"de": "Die lÃ¤ngste HÃ¶hle in den Budaer Bergen mit tollen Formationen.", "hu": "A Budai-hegysÃ©g leghosszabb, lÃ¡tvÃ¡nyos cseppkÃ¶ves barlangja.", "ro": "Cea mai lungÄƒ peÈ™terÄƒ din munÈ›ii Budapesta cu formaÈ›iuni superbe.", "en": "The longest cave in the Buda Hills with amazing formations."},
    descriptionAdvanced: {
      "de": "Die PÃ¡lvÃ¶lgyi-HÃ¶hle ist das lÃ¤ngste HÃ¶hlensystem von Budapest und eines der faszinierendsten unterirdischen Ziele in der Hauptstadt. Sie wurde 1904 entdeckt und ist bekannt fÃ¼r ihre ungewÃ¶hnlich engen GÃ¤nge, riesigen HÃ¶henunterschiede und wunderschÃ¶nen Tropfsteinformationen. In der HÃ¶hle kÃ¶nnen Besucher faszinierende Kalksintergebilde bewundern, die oft an Figuren oder Tiere erinnern, sowie funkelnde Calcit-Kristalle. Die gefÃ¼hrten Touren fÃ¼hren durch spektakulÃ¤re Hallen wie den 'Theater-Saal' und bieten Einblicke in die geologischen Besonderheiten der Budaer Berge. Die Temperatur in der HÃ¶hle liegt ganzjÃ¤hrig bei konstanten 11 Grad, was sie auch im Sommer zu einem erfrischenden Erlebnis macht. Die PÃ¡lvÃ¶lgyi-HÃ¶hle ist ein geschÃ¼tztes Naturdenkmal von europÃ¤ischer Bedeutung.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die PÃ¡lvÃ¶lgyi-HÃ¶hle ist mit Ã¼ber 31 Kilometern das lÃ¤ngste HÃ¶hlensystem Ungarns.", "Sie ist weltberÃ¼hmt fÃ¼r ihre einzigartigen muschelfÃ¶rmigen Tropfsteingebilde.", "In der HÃ¶hle befindet sich die steilste begehbare Treppe ungarischer SchauhÃ¶hlen.", "Das HÃ¶hlensystem ist direkt mit der benachbarten MÃ¡tyÃ¡shegyi-HÃ¶hle verbunden."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r bizarre Tropfsteine.", "Konstante Temperatur von 11 Grad."], "hu": ["KÃ¼lÃ¶nleges cseppkÅ‘formÃ¡ciÃ³irÃ³l ismert.", "HÅ‘mÃ©rsÃ©klete Ã¡llandÃ³an 11 fok."], "ro": ["CunoscutÄƒ pentru stalactite bizare.", "TemperaturÄƒ constantÄƒ de 11 grade."], "en": ["Known for bizarre dripstones.", "Constant temperature of 11 degrees."]}
  },
  {
    id: "mecsek-hegyseg",
    type: "landmark",
    parent: "HU-BA",
    coords: [18.23, 46.10],
    name: {"de": "Mecsek-Gebirge", "hu": "Mecsek hegysÃ©g", "ro": "MunÈ›ii Mecsek", "en": "Mecsek Mountains"},
    image: "/geo-images/hungary/mecsek.webp",
    description: {"de": "Mittelgebirge im SÃ¼den mit mediterranem Flair und HÃ¶hlen.", "hu": "DÃ©li kÃ¶zÃ©phegysÃ©g mediterrÃ¡n hangulattal Ã©s barlangokkal.", "ro": "MunÈ›i de Ã®nÄƒlÈ›ime medie Ã®n sud cu aer mediteranean È™i peÈ™teri.", "en": "Middle mountains in the south with Mediterranean flair and caves."},
    descriptionAdvanced: {
      "de": "Das Mecsek-Gebirge im SÃ¼dwesten Ungarns ist eine facettenreiche Mittelgebirgslandschaft mit einem fast mediterranen Flair. Seine bewaldeten HÃ¤nge schÃ¼tzen die Stadt PÃ©cs vor kalten Nordwinden und ermÃ¶glichen den Anbau von Feigen und edlen Reben. Das Gebirge beherbergt zahlreiche NaturschÃ¤tze, darunter tiefe TÃ¤ler wie das Meleg-mÃ¡nyi-vÃ¶lgy mit seinen Kalktuff-WasserfÃ¤llen und markante Gipfel wie den ZengÅ‘. Die Region ist zudem bekannt fÃ¼r ihre reichen Vorkommen an HeilkrÃ¤utern und eine vielfÃ¤ltige Tierwelt, darunter seltene Orchideenarten. Zahlreiche Wanderwege, AussichtstÃ¼rme und idyllische BergdÃ¶rfer machen das Mecsek-Gebirge zu einem der beliebtesten Erholungsgebiete des Landes. Hier trifft mittelmitteleuropÃ¤ische Waldnatur auf den Hauch des SÃ¼dens.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der hÃ¶chste Gipfel des Mecsek ist der ZengÅ‘ mit 682 Metern HÃ¶he.", "Das Gebirge beherbergt die weltweit einzige Population der seltenen Banater Pfingstrose.", "Im Mecsek-Gebirge wurde jahrzehntelang ungarisches Uran und Steinkohle abgebaut.", "Die Region ist berÃ¼hmt fÃ¼r das Thermalwasser von HarkÃ¡ny und den Wein von VillÃ¡ny."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["HÃ¶chster Gipfel ist der ZengÅ‘.", "Reich an seltenen Pflanzenarten."], "hu": ["Legmagasabb csÃºcsa a ZengÅ‘.", "Ritka nÃ¶vÃ©nyfajokban rendkÃ­vÃ¼l gazdag."], "ro": ["Cel mai Ã®nalt vÃ¢rf este ZengÅ‘.", "BogaÈ›i Ã®n specii de plante rare."], "en": ["Highest peak is ZengÅ‘.", "Rich in rare plant species."]}
  },
  {
    id: "balatonfelvideki-np",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.80, 46.90],
    name: {"de": "NP Balaton-Oberland", "hu": "Balaton-felvidÃ©ki Nemzeti Park", "ro": "PN Balatonul de Sus", "en": "Balaton Uplands NP"},
    image: "/geo-images/hungary/balaton-felvidek.webp",
    description: {"de": "Abwechslungsreiche Landschaft mit Vulkanbergen und Lavendel.", "hu": "VÃ¡ltozatos tÃ¡j tanÃºhegyekkel, barlangokkal Ã©s levendulÃ¡val.", "ro": "Peisaj divers cu munÈ›i vulcanici È™i lavandÄƒ.", "en": "Diverse landscape with volcanic hills and lavender fields."},
    descriptionAdvanced: {
      "de": "Der Nationalpark Balaton-Oberland schÃ¼tzt eine der abwechslungsreichsten und geschichtstrÃ¤chtigsten Landschaften Ungarns am Nordufer des Plattensees. Er umfasst spektakulÃ¤re Zeugenberge wie den Badacsony, die Halbinsel Tihany und das malerische KÃ¡li-Becken. Die Region ist geprÃ¤gt von erloschenen Vulkanen, riesigen Basaltorgeln und einer einzigartigen Flora und Fauna, die im SchilfgÃ¼rtel des Klein-Balaton ein Refugium findet. Neben der Natur bewahrt der Nationalpark auch bedeutende KulturschÃ¤tze, von mittelalterlichen Burgruinen bis zu traditionellen ReetdachhÃ¤usern. Jedes Dorf im Oberland hat seinen eigenen Charme, oft verbunden mit einer jahrhundertealten Weinbaukultur. Der Nationalpark ist ein Symbol fÃ¼r die harmonische Verbindung von Ã¶kologischer Vielfalt und menschlicher Kulturlandschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Nationalpark wurde 1997 gegrÃ¼ndet und umfasst sechs verschiedene Landschaftsschutzgebiete.", "Die Halbinsel Tihany war das erste geschÃ¼tzte Landschaftsgebiet in ganz Ungarn.", "Der Klein-Balaton ist ein international bedeutendes Feuchtgebiet fÃ¼r WasservÃ¶gel.", "Im KÃ¡li-Becken befinden sich bizarre Steinmeere, die durch Erosion entstanden sind."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Beinhaltet das KÃ¡li-Becken.", "BerÃ¼hmt fÃ¼r Basaltorgeln."], "hu": ["MagÃ¡ban foglalja a KÃ¡li-medencÃ©t.", "HÃ­res a bazaltorgonÃ¡irÃ³l."], "ro": ["Include bazinul KÃ¡li.", "Faimos pentru coloanele de bazalt."], "en": ["Includes the KÃ¡li Basin.", "Famous for basalt organs."]}
  },
  {
    id: "koros-maros-np",
    type: "landmark",
    parent: "HU-BE",
    coords: [21.00, 46.50],
    name: {"de": "NP KÃ¶rÃ¶s-Maros", "hu": "KÃ¶rÃ¶s-Maros Nemzeti Park", "ro": "PN CriÈ™-MureÈ™", "en": "KÃ¶rÃ¶s-Maros NP"},
    image: "/geo-images/hungary/koros-maros-np.webp",
    description: {"de": "Schutzgebiet in der sÃ¼dlichen Tiefebene mit reicher Vogelwelt.", "hu": "DÃ©l-alfÃ¶ldi vÃ©dett terÃ¼let gazdag madÃ¡rvilÃ¡ggal Ã©s rÃ©tekkel.", "ro": "ZonÄƒ protejatÄƒ Ã®n cÃ¢mpia de sud cu o avifaunÄƒ bogatÄƒ.", "en": "Protected area in the southern plains with rich birdlife."},
    descriptionAdvanced: {
      "de": "Der Nationalpark KÃ¶rÃ¶s-Maros im SÃ¼dosten Ungarns schÃ¼tzt die ursprÃ¼nglichen Steppen- und Flusslandschaften zwischen den FlÃ¼ssen KÃ¶rÃ¶s und Maros. Die Region ist geprÃ¤gt von weiten Graslandschaften (Puszta), geheimnisvollen LÃ¶sswÃ¤nden und idyllischen Altarmen, die eine reiche Vogelwelt beherbergen. Besonders bekannt ist der Park fÃ¼r seinen Schutz der GroÃŸtrappe, eines der schwersten flugfÃ¤higen VÃ¶gel der Welt, der hier eines seiner wichtigsten RÃ¼ckzugsgebiete in Europa hat. Die unberÃ¼hrten Flussauen bieten zudem Lebensraum fÃ¼r seltene Pflanzen wie die ungarische Distel und zahlreiche Fischarten. In Zentren wie Szarvas kÃ¶nnen Besucher die Natur des Parks hautnah erleben und in die Hirtenkultur der Tiefebene eintauchen. KÃ¶rÃ¶s-Maros ist ein Ort von stiller SchÃ¶nheit, der die Weite des ungarischen Horizonts widerspiegelt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Nationalpark bewahrt bedeutende Reste der ursprÃ¼nglichen LÃ¶sssteppe der Tiefebene.", "In der Region DÃ©vavÃ¡nya befindet sich die grÃ¶ÃŸte GroÃŸtrappen-Population Mitteleuropas.", "Der Maros-Fluss ist bekannt fÃ¼r seinen Reichtum an seltenen Flussmuscheln.", "Der Park umfasst 13 verschiedene Teilgebiete mit einer GesamtflÃ¤che von Ã¼ber 50.000 Hektar."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wichtig fÃ¼r den Trappenschutz.", "Beheimatet alte Haustierrassen."], "hu": ["Fontos tÃºzokvÃ©delmi terÃ¼let.", "Åsi magyar Ã¡llatfajtÃ¡k otthona."], "ro": ["Important pentru protecÈ›ia dropiilor.", "GÄƒzduieÈ™te rase vechi de animale."], "en": ["Important for great bustard protection.", "Home to ancient domestic animal breeds."]}
  },
  {
    id: "oreg-bakony",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.75, 47.25],
    name: {"de": "Alter Bakony", "hu": "Ã–reg-Bakony", "ro": "Bakonyul Vechi", "en": "Old Bakony"},
    image: "/geo-images/hungary/bakony.webp",
    description: {"de": "Der Kern des Bakony-Waldes mit dichten BuchenwÃ¤ldern.", "hu": "A Bakony-erdÅ‘ szÃ­ve dÃºs bÃ¼kkÃ¶sÃ¶kkel Ã©s szurdokokkal.", "ro": "Nucleul pÄƒdurii Bakony cu fÄƒgete dese.", "en": "The core of the Bakony forest with dense beech woods."},
    descriptionAdvanced: {
      "de": "Der Alte Bakony (Ã–reg-Bakony) ist der zentrale und wildeste Teil des Bakony-Gebirges, geprÃ¤gt von dichten BuchenwÃ¤ldern und tiefen Kalksteinschluchten. Hier befindet sich mit dem KÅ‘ris-hegy der hÃ¶chste Gipfel des Gebirges, von dem aus man an klaren Tagen bis zum Plattensee blicken kann. Die Region ist berÃ¼hmt fÃ¼r ihre geheimnisvolle AtmosphÃ¤re, die einst den berÃ¼hmten Bakonyer 'BetyÃ¡ren' (Outlaws) als Versteck diente. Zahlreiche Karstquellen und HÃ¶hlen machen den Bakony zu einem spannenden Ziel fÃ¼r Entdecker und Naturfreunde. Historische Orte wie die Abtei Zirc oder die Burg Csesznek liegen eingebettet in diese waldreiche Mittelgebirgslandschaft. Der Ã–reg-Bakony ist das grÃ¼ne Herz Transdanubiens und bietet unberÃ¼hrte Naturerlebnisse fernab der Zivilisation.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der KÅ‘ris-hegy ist mit 706 Metern die hÃ¶chste Erhebung im Bakony-Gebirge.", "Der Name des Gebirges leitet sich wahrscheinlich vom slawischen Wort fÃ¼r 'Buchenwald' ab.", "In den HÃ¶hlen des Bakony versteckten sich im 19. Jahrhundert legendÃ¤re Gesetzlose.", "Die Cuha-Schlucht ist eines der malerischsten DurchbruchstÃ¤ler im Alten Bakony."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["HÃ¶chster Punkt ist der KÅ‘ris-hegy.", "Bekannt fÃ¼r seine KarstphÃ¤nomene."], "hu": ["Legmagasabb pontja a KÅ‘ris-hegy.", "KarsztjelensÃ©geirÅ‘l nevezetes."], "ro": ["Cel mai Ã®nalt punct este KÅ‘ris-hegy.", "Cunoscut pentru fenomenele carstice."], "en": ["Highest point is KÅ‘ris-hegy.", "Known for its karst phenomena."]}
  },
  {
    id: "zempleni-hegyseg-b2",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.40, 48.40],
    name: {"de": "ZemplÃ©n-Gebirge", "hu": "ZemplÃ©ni-hegysÃ©g", "ro": "MunÈ›ii ZemplÃ©n", "en": "ZemplÃ©n Mountains"},
    image: "/geo-images/hungary/zemplen.webp",
    description: {"de": "Abgelegenes, vulkanisches Gebirge mit vielen Burgen im Nordosten.", "hu": "Ã‰szakkeleti vulkanikus hegysÃ©g vadregÃ©nyes vÃ¡rakkal.", "ro": "MunÈ›i vulcanici izolaÈ›i cu multe cetÄƒÈ›i Ã®n nord-est.", "en": "Remote volcanic mountains with many castles in the northeast."},
    descriptionAdvanced: {
      "de": "Das ZemplÃ©n-Gebirge, im Ã¤uÃŸersten Nordosten Ungarns an der slowakischen Grenze gelegen, ist ein waldreiches Vulkangebirge von herber SchÃ¶nheit. Es beherbergt einige der einsamsten und unberÃ¼hrtesten Waldgebiete des Landes, in denen heute wieder WÃ¶lfe und Luchse heimisch sind. Die Region ist geprÃ¤gt von markanten Bergkuppen, tiefen TÃ¤lern und zahlreichen Burgruinen wie FÃ¼zÃ©r oder RegÃ©c, die stolz Ã¼ber den WÃ¤ldern thronen. Das ZemplÃ©n-Gebirge ist zudem untrennbar mit dem Tokajer Weinbau verbunden, da die vulkanischen BÃ¶den an seinen SÃ¼dhÃ¤ngen die Basis fÃ¼r den berÃ¼hmten AszÃº-Wein bilden. Die ruhigen BergdÃ¶rfer bewahren oft noch ihre alten Traditionen und bieten eine authentische Gastfreundschaft. FÃ¼r Wanderer und Naturliebhaber ist das ZemplÃ©n-Gebirge ein wahres Paradies am Rande der Karpaten.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das ZemplÃ©n-Gebirge ist das nÃ¶rdlichste und geologisch jÃ¼ngste Gebirge Ungarns.", "In den abgelegenen WÃ¤ldern wurden in den letzten Jahren wiederholt BraunbÃ¤ren gesichtet.", "Die Region ist bekannt fÃ¼r ihre hochwertigen EichenhÃ¶lzer, die fÃ¼r WeinfÃ¤sser genutzt werden.", "Zahlreiche Wanderwege wie der 'Nationalblaue Weg' (KÃ©ktÃºra) fÃ¼hren durch das Gebirge."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Heimat der Tokajer Weine.", "Reich an vulkanischen Formen."], "hu": ["A tokaji borok hazÃ¡ja.", "Vulkanikus formÃ¡kban gazdag."], "ro": ["Casa vinurilor de Tokaj.", "BogaÈ›i Ã®n forme vulcanice."], "en": ["Home of the Tokaj wines.", "Rich in volcanic formations."]}
  },
  {
    id: "pilis-hegyseg",
    type: "landmark",
    parent: "HU-PE",
    coords: [18.90, 47.70],
    name: {"de": "Pilis-Gebirge", "hu": "Pilis hegysÃ©g", "ro": "MunÈ›ii Pilis", "en": "Pilis Mountains"},
    image: "/geo-images/hungary/pilis.webp",
    description: {"de": "Wanderparadies nahe Budapest mit AussichtstÃ¼rmen und HÃ¶hlen.", "hu": "Budapest kÃ¶zeli hegysÃ©g kilÃ¡tÃ³kkal Ã©s barlangokkal.", "ro": "Paradis al drumeÈ›iilor lÃ¢ngÄƒ Budapesta cu turnuri È™i peÈ™teri.", "en": "Hiking paradise near Budapest with lookout towers and caves."},
    descriptionAdvanced: {
      "de": "Das Pilis-Gebirge, nordwestlich von Budapest am Donauknie gelegen, ist eine sagenumwobene Berglandschaft von groÃŸer historischer und spiritueller Bedeutung. FÃ¼r die frÃ¼hen Ungarn galt der Pilis als heiliges Zentrum, und heute ziehen Orte wie der RÃ¡m-Abgrund (RÃ¡m-szakadÃ©k) Tausende von Wanderern an. Das Gebirge ist geprÃ¤gt von steilen KalksteinwÃ¤nden, bizarren Felsformationen und zahlreichen HÃ¶hlen, die fantastische Ausblicke Ã¼ber die Donauschleife bieten. Der hÃ¶chste Punkt, der Pilis-Gipfel, bietet ein Panorama von auÃŸergewÃ¶hnlicher Weite bis hin zu den Gipfeln der Matra. Historisch bedeutsam ist das Zisterzienserkloster in Pilisszentkereszt, das einst ein geistiges Zentrum des ungarischen Mittelalters war. Die NÃ¤he zur Hauptstadt macht den Pilis zum beliebtesten Naherholungsgebiet der Budapester.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Pilis-Gebirge ist Teil des BiosphÃ¤renreservats der UNESCO.", "Der RÃ¡m-Abgrund ist eine der spektakulÃ¤rsten und abenteuerlichsten Wanderrouten Ungarns.", "Im Mittelalter war das Gebirge das Jagdrevier der ungarischen KÃ¶nige.", "Die DobogÃ³kÅ‘-Hochebene gilt als einer der wichtigsten energetischen Orte des Landes."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["HÃ¶chster Gipfel ist der Pilis-tetÅ‘.", "Gilt als spirituelles Zentrum."], "hu": ["Legmagasabb pontja a Pilis-tetÅ‘.", "Sokan spirituÃ¡lis kÃ¶zpontnak tartjÃ¡k."], "ro": ["Cel mai Ã®nalt vÃ¢rf este Pilis-tetÅ‘.", "Considerat un centru spiritual."], "en": ["Highest peak is Pilis-tetÅ‘.", "Considered a spiritual center."]}
  },
  {
    id: "vertes-hegyseg",
    type: "landmark",
    parent: "HU-FE",
    coords: [18.40, 47.40],
    name: {"de": "VÃ©rtes-Gebirge", "hu": "VÃ©rtes hegysÃ©g", "ro": "MunÈ›ii VÃ©rtes", "en": "VÃ©rtes Mountains"},
    image: "/geo-images/hungary/vertes.webp",
    description: {"de": "Karstgebirge in Transdanubien mit Ruinen und WÃ¤ldern.", "hu": "DunÃ¡ntÃºli karszthegysÃ©g vÃ¡rromokkal Ã©s sÅ±rÅ± erdÅ‘kkel.", "ro": "MunÈ›i carstici Ã®n Transdanubia cu ruine È™i pÄƒduri.", "en": "Karst mountains in Transdanubia with ruins and forests."},
    descriptionAdvanced: {
      "de": "Das VÃ©rtes-Gebirge ist eine idyllische Mittelgebirgsregion zwischen dem Bakony und dem Gerecse, bekannt fÃ¼r seine unberÃ¼hrten WÃ¤lder und geschichtstrÃ¤chtigen Ruinen. Der Name 'VÃ©rtes' (Panzer) erinnert an eine Legende aus dem 11. Jahrhundert, wonach die fliehenden deutschen Ritter ihre Panzerharnische im Gebirge wegwarfen. Die Landschaft ist geprÃ¤gt von sanften HÃ¼geln, tiefen Karstschluchten und bizarren Dolomitfelsen, die eine reiche Flora und Fauna beherbergen. Ein besonderes Highlight ist die Burgruine VitÃ¡nyvÃ¡r, die versteckt im dichten Wald liegt und einen Hauch von Romantik versprÃ¼ht. Das Gebirge bietet zudem hervorragende MÃ¶glichkeiten fÃ¼r Radtouren und ruhige WaldspaziergÃ¤nge in einer fast unberÃ¼hrten Natur. Die DÃ¶rfer am Rande des VÃ©rtes, wie CsÃ¡kvÃ¡r, bewahren stolz ihr handwerkliches und adeliges Erbe.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das VÃ©rtes-Gebirge ist eines der am dÃ¼nnsten besiedelten Gebiete Ungarns.", "Die Region beherbergt seltene submediterrane Pflanzenarten auf den Dolomitfelsen.", "In der NÃ¤he von GÃ¡nt befindet sich eine ehemalige Bauxit-Mine mit einer marsÃ¤hnlichen Landschaft.", "Die Burg CsÃ³kakÅ‘ am SÃ¼drand bietet einen weiten Blick Ã¼ber das MÃ³ri-Becken."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Wichtige historische Schlachtfelder.", "Reich an Bauxitvorkommen."], "hu": ["Fontos tÃ¶rtÃ©nelmi csatÃ¡k helyszÃ­ne.", "BauxitlelÅ‘helyekben gazdag."], "ro": ["Locul unor importante bÄƒtÄƒlii istorice.", "BogaÈ›i Ã®n zÄƒcÄƒminte de bauxitÄƒ."], "en": ["Site of important historical battles.", "Rich in bauxite deposits."]}
  },
  {
    id: "gemenc-arter-b2",
    type: "landmark",
    parent: "HU-TO",
    coords: [18.85, 46.25],
    name: {"de": "Gemenc-Aue", "hu": "Gemenc Ã¡rtÃ©r", "ro": "Lunca Gemenc", "en": "Gemenc Floodplain"},
    image: "/geo-images/hungary/gemenc.webp",
    description: {"de": "Einzigartiger Auenwald an der Donau mit reicher Fauna.", "hu": "EgyedÃ¼lÃ¡llÃ³ Ã¡rtÃ©ri erdÅ‘ a Duna mentÃ©n, vadon Ã©lÅ‘ Ã¡llatokkal.", "ro": "PÄƒdure de luncÄƒ unicÄƒ pe DunÄƒre cu o faunÄƒ bogatÄƒ.", "en": "Unique floodplain forest along the Danube with rich fauna."},
    descriptionAdvanced: {
      "de": "Die Gemencer Aue im SÃ¼den Ungarns ist das grÃ¶ÃŸte zusammenhÃ¤ngende Ãœberschwemmungsgebiet Mitteleuropas und eine Wildnis von Weltrang. RegelmÃ¤ÃŸig von den Fluten der Donau Ã¼berspÃ¼lt, hat sich hier eine archaische Landschaft aus dichten AuwÃ¤ldern, Totarmen und Schilfgebieten erhalten. Gemenc ist berÃ¼hmt fÃ¼r seine riesigen BestÃ¤nde an Rothirschen und Schwarzwild, die hier optimale Lebensbedingungen finden. Auch seltene VÃ¶gel wie der Schwarzstorch und der Seeadler brÃ¼ten in den ungestÃ¶rten Wipfeln der jahrhundertealten BÃ¤ume. Eine Fahrt mit der Gemencer Waldbahn bietet Besuchern die einzigartige MÃ¶glichkeit, tief in dieses Labyrinth aus Wasser und Wald einzudringen. Gemenc ist ein lebendiges Beispiel fÃ¼r die Kraft der Natur und ein unersetzlicher Teil des ungarischen Ã–kosystems.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Gemencer Aue ist Teil des Nationalparks Donau-Drau.", "Das Gebiet beherbergt die weltweit hÃ¶chste Dichte an Schwarzstorch-Nestern.", "Die Donau-Altarme in Gemenc sind ein Paradies fÃ¼r Sportfischer und Naturfotografen.", "Im Winter bietet die Aue eine mystische Kulisse aus Eis und Reif in den WÃ¤ldern."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["BerÃ¼hmt fÃ¼r RotwildbestÃ¤nde.", "Besitzt eine Schmalspurbahn."], "hu": ["HÃ­res a gÃ­mszarvas Ã¡llomÃ¡nyÃ¡rÃ³l.", "Erdei kisvasÃºt fut Ã¡t rajta."], "ro": ["FaimoasÄƒ pentru cerbi.", "Are o cale feratÄƒ cu ecartament Ã®ngust."], "en": ["Famous for its red deer population.", "Has a narrow-gauge forest railway."]}
  },
  {
    id: "debreceni-allatkert",
    type: "landmark",
    parent: "HU-HB",
    coords: [21.638, 47.552],
    name: {"de": "Zoo Debrecen", "hu": "Debreceni Ãllatkert", "ro": "GrÄƒdina ZoologicÄƒ DebreÈ›in", "en": "Debrecen Zoo"},
    image: "/geo-images/hungary/debrecen.webp",
    description: {"de": "Ungarns erster Zoo auÃŸerhalb von Budapest, im GroÃŸen Wald gelegen.", "hu": "Az orszÃ¡g elsÅ‘ vidÃ©ki Ã¡llatkertje a NagyerdÅ‘ szÃ­vÃ©ben.", "ro": "Prima grÄƒdinÄƒ zoologicÄƒ provincialÄƒ din Ungaria, Ã®n PÄƒdurea Mare.", "en": "Hungary's first provincial zoo, located in the Great Forest."},
    descriptionAdvanced: {
      "de": "Der Zoo und VergnÃ¼gungspark von Debrecen, im idyllischen Stadtwald (Nagyerdei KultÃºrpark) gelegen, war der erste Tierpark Ungarns auÃŸerhalb der Hauptstadt. Seit seiner ErÃ¶ffnung im Jahr 1958 bietet er Besuchern eine charmante Mischung aus Tierbegegnungen und nostalgischer JahrmarktsatmosphÃ¤re. Der Zoo beherbergt eine Vielzahl von Tierarten aus aller Welt, darunter Giraffen, Flusspferde und seltene Affenarten, in einer parkÃ¤hnlichen Umgebung. Besonders beliebt ist das angrenzende 'Ludas Matyi' VergnÃ¼gungsviertel mit seinen historischen Karussells und modernen FahrgeschÃ¤ften. Der Tierpark legt groÃŸen Wert auf die Umweltbildung und bietet interaktive Programme fÃ¼r Schulklassen und Familien an. Ein Spaziergang durch den Debrecener Zoo ist ein fester Bestandteil jedes Besuchs in der 'kalvinistischen Hauptstadt' Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Debrecener Zoo war der erste Regionaltiergarten in Ungarn.", "Er liegt inmitten des GroÃŸen Stadtwaldes (NagyerdÅ‘), dem ersten Naturschutzgebiet des Landes.", "Der VergnÃ¼gungspark beherbergt das einzige noch funktionierende historische Riesenrad Ungarns.", "Der Zoo ist fÃ¼r seine erfolgreiche Zucht seltener exotischer Vogelarten bekannt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Verbunden mit einem VergnÃ¼gungspark.", "Spezialisiert auf exotische VÃ¶gel."], "hu": ["VidÃ¡mparkkal van Ã¶sszekapcsolva.", "KÃ¼lÃ¶nleges madÃ¡rfajokat is bemutat."], "ro": ["ConectatÄƒ cu un parc de distracÈ›ii.", "SpecializatÄƒ Ã®n pÄƒsÄƒri exotice."], "en": ["Connected with an amusement park.", "Specializes in exotic bird species."]}
  },
  {
    id: "nyiregyhazi-allatkert",
    type: "landmark",
    parent: "HU-SZ",
    coords: [21.724, 48.006],
    name: {"de": "SÃ³stÃ³ Zoo", "hu": "NyÃ­regyhÃ¡zi Ãllatkert", "ro": "GrÄƒdina ZoologicÄƒ NyÃ­regyhÃ¡za", "en": "NyÃ­regyhÃ¡za Zoo"},
    image: "/geo-images/hungary/nyiregyhaza-zoo.webp",
    description: {"de": "PreisgekrÃ¶nter Tierpark mit naturnahen Gehegen und Ozeanarium.", "hu": "VilÃ¡gszÃ­nvonalÃº Ã¡llatpark Ã³ceanÃ¡riummal a SÃ³stÃ³ partjÃ¡n.", "ro": "Parc zoologic premiat cu habitate naturale È™i oceanariu.", "en": "Award-winning zoo with natural habitats and an oceanarium."},
    descriptionAdvanced: {
      "de": "Der SÃ³stÃ³-Zoo in NyÃ­regyhÃ¡za gilt als einer der besten und modernsten TiergÃ¤rten Europas und ist ein absolutes Highlight im Nordosten Ungarns. In einem 30 Hektar groÃŸen Eichenwald untergebracht, bietet der Zoo den Tieren naturnahe und weitlÃ¤ufige Gehege, die nach Kontinenten gegliedert sind. Besonders beeindruckend ist die 'GrÃ¼ne Pyramide', ein riesiges Tropenhaus mit einem Ozeanarium, in dem Besucher die faszinierende Unterwasserwelt und die Flora und Fauna des Regenwaldes erleben kÃ¶nnen. NyÃ­regyhÃ¡za beherbergt zudem seltene Arten wie WeiÃŸe Tiger und Afrikanische Elefanten und ist international fÃ¼r seine Zuchterfolge bekannt. Mit seinen interaktiven Ausstellungen und modernen Informationszentren setzt der Zoo MaÃŸstÃ¤be in Sachen Bildung und Artenschutz. Ein Besuch in SÃ³stÃ³ ist ein unvergessliches Erlebnis fÃ¼r die ganze Familie.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Der Zoo von NyÃ­regyhÃ¡za wurde mehrfach zum besten Tiergarten Europas in seiner Kategorie gewÃ¤hlt.", "Die 'GrÃ¼ne Pyramide' beherbergt das grÃ¶ÃŸte Haifischbecken in ganz Mitteleuropa.", "Besucher kÃ¶nnen im 'Tarzan-Pfad' den Tieren der Savanne Ã¼ber HÃ¤ngebrÃ¼cken ganz nah kommen.", "Der Zoo besitzt ein eigenes Hotel direkt auf dem GelÃ¤nde fÃ¼r ein besonderes Ãœbernachtungserlebnis."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Gilt als einer der besten Europas.", "Beherbergt seltene weiÃŸe Tiger."], "hu": ["EurÃ³pa egyik legjobb Ã¡llatkertje.", "Ritka fehÃ©r tigrisek is Ã©lnek itt."], "ro": ["ConsideratÄƒ una dintre cele mai bune din Europa.", "GÄƒzduieÈ™te rari tigri albi."], "en": ["Considered one of the best in Europe.", "Home to rare white tigers."]}
  },
  {
    id: "tropicarium-budapest",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.017, 47.410],
    name: {"de": "Tropicarium", "hu": "Tropicarium Budapest", "ro": "Tropicarium Budapesta", "en": "Tropicarium Budapest"},
    image: "/geo-images/hungary/tropicarium.webp",
    description: {"de": "Das 'Haifisch-Zoo' in Budapest mit einem riesigen Glastunnel.", "hu": "A 'cÃ¡pÃ¡s Ã¡llatkert' hatalmas vÃ­z alatti alagÃºttal.", "ro": "'GrÄƒdina zoologicÄƒ cu rechini' din Budapesta cu un tunel de sticlÄƒ.", "en": "The 'shark zoo' in Budapest with a massive glass tunnel."},
    descriptionAdvanced: {
      "de": "Das Tropicarium Budapest im Einkaufszentrum Campona ist das grÃ¶ÃŸte Meerwasseraquarium Mitteleuropas und bietet ein faszinierendes Abenteuer in der Welt der Ozeane und Tropen. Die Hauptattraktion ist der riesige Haifischtunnel, in dem man unter zwei Millionen Litern Salzwasser spazieren kann, wÃ¤hrend majestÃ¤tische Haie und Rochen Ã¼ber die KÃ¶pfe der Besucher hinweggleiten. Im tropischen Regenwald-Bereich kÃ¶nnen Besucher alle 15 Minuten ein echtes Tropengewitter mit Regen und Blitzen miterleben, umgeben von Alligatoren und exotischen VÃ¶geln. Das Tropicarium zeigt zudem eine Vielzahl von SÃ¼ÃŸwasserfischen aus der ungarischen Heimat und ferner LÃ¤nder. Es ist ein Ort der Unterhaltung und Information, der das Bewusstsein fÃ¼r die Zerbrechlichkeit der marinen Ã–kosysteme stÃ¤rkt. Ein Besuch im 'Hai-Zoo' ist ein spannendes Erlebnis fÃ¼r GroÃŸ und Klein, unabhÃ¤ngig vom Wetter.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Tropicarium beherbergt acht verschiedene Haiarten in seinem Hauptbecken.", "Die Besucher kÃ¶nnen in den Aquarien auch die Fauna des heimischen Plattensees bewundern.", "Es gibt spezielle 'Streichelbecken', in denen man Rochen unter Aufsicht berÃ¼hren kann.", "Das Tropicarium beteiligt sich aktiv an internationalen Forschungs- und Zuchtprogrammen."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Hat ein echtes Regenwald-Erlebnis.", "Man kann HaifÃ¼tterungen sehen."], "hu": ["ValÃ³di esÅ‘erdÅ‘ Ã©lmÃ©nyt nyÃºjt.", "LÃ¡tvÃ¡nyos cÃ¡paetetÃ©sek helyszÃ­ne."], "ro": ["OferÄƒ o experienÈ›Äƒ de junglÄƒ tropicalÄƒ.", "Se pot vedea hrÄƒniri de rechini."], "en": ["Provides a real rainforest experience.", "Spectacular shark feedings can be viewed."]}
  },
  {
    id: "miskolctapolca-barlangfurdo",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.744, 48.061],
    name: {"de": "HÃ¶hlenbad Miskolctapolca", "hu": "Miskolctapolca BarlangfÃ¼rdÅ‘", "ro": "Baia Ã®n PeÈ™terÄƒ Miskolctapolca", "en": "Miskolctapolca Cave Bath"},
    image: "/geo-images/hungary/barlangfurdo.webp",
    description: {"de": "Einzigartiges Thermalbad in einer natÃ¼rlichen HÃ¶hle.", "hu": "EgyedÃ¼lÃ¡llÃ³ gyÃ³gyfÃ¼rdÅ‘ termÃ©szetes barlangjÃ¡ratokban.", "ro": "Baie termalÄƒ unicÄƒ Ã®ntr-o peÈ™terÄƒ naturalÄƒ.", "en": "Unique thermal bath located in a natural cave system."},
    
    descriptionAdvanced: {
      "de": "Das HÃ¶hlenbad von Miskolctapolca ist ein in Europa einzigartiges Thermalbad, das in einem natÃ¼rlichen HÃ¶hlensystem Ã¼ber Jahrtausende durch Wassererosion entstanden ist. Besucher kÃ¶nnen in angenehm warmem Wasser durch die verwinkelten GÃ¤nge und Hallen der HÃ¶hle schwimmen und die heilende Wirkung der Quellen genieÃŸen. Die Luft in der HÃ¶hle ist besonders rein und frei von Allergenen, was das Baden zu einem ganzheitlichen Erlebnis fÃ¼r KÃ¶rper und Geist macht. Neben den natÃ¼rlichen HÃ¶hlengÃ¤ngen bietet der Komplex auch moderne AuÃŸenbecken und Saunalandschaften. Das sanfte Licht in der Grotte und das Echo der Stimmen verleihen dem Bad eine fast mystische AtmosphÃ¤re. Miskolctapolca ist ein unverzichtbares Ziel fÃ¼r alle, die Entspannung in einer spektakulÃ¤ren natÃ¼rlichen Umgebung suchen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Angenehme 30 Grad Wassertemperatur.", "Heilklimatische Wirkung der Luft."], "hu": ["Kellemes, 30 fokos termÃ¡lvÃ­z.", "A barlang levegÅ‘je gyÃ³gyhatÃ¡sÃº."], "ro": ["TemperaturÄƒ plÄƒcutÄƒ de 30 de grade.", "Efect curativ al aerului din peÈ™terÄƒ."], "en": ["Pleasant 30-degree water temperature.", "Therapeutic effect of the cave air."]},
  
    factsAdvanced: {
      "de": ["Das HÃ¶hlenbad ist das einzige Thermalbad dieser Art in ganz Europa.", "Das Wasser hat eine konstante Temperatur von etwa 30 Grad Celsius.", "In der HÃ¶hle gibt es keine Dampfbildung, was das Atmen besonders angenehm macht.", "Das Bad ist von einem idyllischen Park mit einem See und Bootshafen umgeben."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "mohacsi-busojaras-poi",
    type: "landmark",
    parent: "HU-BA",
    coords: [18.683, 45.991],
    name: {"de": "BusÃ³jÃ¡rÃ¡s-Ort", "hu": "MohÃ¡csi BusÃ³jÃ¡rÃ¡s helye", "ro": "Locul BusÃ³jÃ¡rÃ¡s", "en": "MohÃ¡cs BusÃ³jÃ¡rÃ¡s Site"},
    image: "/geo-images/hungary/mohacs.webp",
    description: {"de": "Ort der berÃ¼hmten Winteraustreibung mit gruseligen Masken.", "hu": "A tÃ©lÅ±zÅ‘ BusÃ³jÃ¡rÃ¡s helyszÃ­ne, UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g.", "ro": "Locul faimosului ritual de alungare a iernii cu mÄƒÈ™ti.", "en": "Site of the famous winter expulsion ritual with scary masks."},
    
    descriptionAdvanced: {
      "de": "Das BusÃ³jÃ¡rÃ¡s in MohÃ¡cs ist der bedeutendste Volksbrauch Ungarns zum Ende des Winters und gehÃ¶rt zum immateriellen UNESCO-Weltkulturerbe. Die Tradition geht auf die Legende zurÃ¼ck, wonach die Å okci-Kroaten mit schrecklichen Masken und LÃ¤rm die tÃ¼rkischen Besatzer aus der Stadt vertrieben haben. Heute ziehen Hunderte von 'BusÃ³s' in furchterregenden Holzmasken und SchafsfellkostÃ¼men durch die StraÃŸen, wirbeln Staub auf und lÃ¤rmen mit hÃ¶lzernen Ratschen. Das Festival gipfelt im Verbrennen eines riesigen Sargs auf einem Scheiterhaufen, was symbolisch den Winter beerdigt. Zehntausende Besucher aus aller Welt kommen jÃ¤hrlich nach MohÃ¡cs, um dieses farbenfrohe und archaische Spektakel mitzuerleben. Es ist ein Fest der Gemeinschaft, der Freude und des Sieges Ã¼ber das Dunkle.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["UNESCO-Weltkulturerbe.", "Findet jÃ¤hrlich im Februar statt."], "hu": ["Az UNESCO szellemi Ã¶rÃ¶ksÃ©g rÃ©sze.", "Ã‰vente februÃ¡rban rendezik meg."], "ro": ["Patrimoniu cultural UNESCO.", "Are loc anual Ã®n februarie."], "en": ["UNESCO Cultural Heritage.", "Takes place annually in February."]},
  
    factsAdvanced: {
      "de": ["Das BusÃ³jÃ¡rÃ¡s-Festival findet jedes Jahr im Februar wÃ¤hrend der Faschingszeit statt.", "Die handgeschnitzten Holzmasken sind Unikate und werden oft Ã¼ber Generationen vererbt.", "Die Teilnehmer tragen traditionelle Rindslederschuhe und weiÃŸe Leinenhosen.", "Das Fest wurde 2009 als erster ungarischer Brauch in die UNESCO-Liste aufgenommen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zsolnay-negyed",
    type: "landmark",
    parent: "HU-BA",
    coords: [18.243, 46.084],
    name: {"de": "Zsolnay-Viertel", "hu": "Zsolnay KulturÃ¡lis Negyed", "ro": "Cartierul Zsolnay", "en": "Zsolnay Cultural Quarter"},
    image: "/geo-images/hungary/zsolnay-negyed.webp",
    description: {"de": "WunderschÃ¶n restauriertes Fabrikareal mit Porzellankunst.", "hu": "PÃ©cs Ã©kkÃ¶ve, a vilÃ¡ghÃ­rÅ± porcelÃ¡ngyÃ¡r felÃºjÃ­tott terÃ¼lete.", "ro": "ZonÄƒ industrialÄƒ restauratÄƒ superb cu artÄƒ din porÈ›elan.", "en": "Beautifully restored factory area with world-famous ceramics."},
    
    descriptionAdvanced: {
      "de": "Das Zsolnay-Kulturviertel in PÃ©cs ist ein spektakulÃ¤res Zeugnis ungarischer Industriegeschichte und Ã¤sthetischer Exzellenz. Auf dem GelÃ¤nde der ehemaligen Porzellanmanufaktur entstand ein modernes Kunstzentrum, das die Geschichte der Familie Zsolnay und ihrer weltberÃ¼hmten Keramiken wÃ¼rdigt. Besonders beeindruckend ist die Verwendung der charakteristischen Eosin-Glasur und der farbenfrohen Pyrogranit-Elemente an den GebÃ¤uden. Besucher kÃ¶nnen Museen, Galerien, WerkstÃ¤tten und das markante Zsolnay-Mausoleum erkunden. Das Viertel war das HerzstÃ¼ck des Projekts PÃ©cs - Kulturhauptstadt Europas 2010 und ist heute ein lebendiger Treffpunkt fÃ¼r KÃ¼nstler und Touristen. Die Symbiose aus historischer Industriearchitektur und moderner Nutzung ist in Ungarn einzigartig.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Heimat der Eosin-Keramik.", "Beherbergt Museen und Ateliers."], "hu": ["Az eozin mÃ¡zas kerÃ¡mia hazÃ¡ja.", "MÃºzeumoknak Ã©s mÅ±helyeknek ad otthont."], "ro": ["Casa ceramicii de tip eozinÄƒ.", "GÄƒzduieÈ™te muzee È™i ateliere."], "en": ["Home of the eosin-glazed ceramics.", "Houses museums and art studios."]},
  
    factsAdvanced: {
      "de": ["Das Zsolnay-Viertel umfasst 15 denkmalgeschÃ¼tzte GebÃ¤ude auf einer FlÃ¤che von 5 Hektar.", "Die Familie Zsolnay erfand die einzigartige Eosin-Glasur, die metallisch schimmert.", "Im Viertel befindet sich das 'Gyugyi-Sammlung', eine der bedeutendsten Zsolnay-Kollektionen weltweit.", "Die GebÃ¤ude sind mit Frost- und wetterbestÃ¤ndigen Pyrogranit-Keramiken verziert."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szegedi-dom",
    type: "landmark",
    parent: "HU-CS",
    coords: [20.148, 46.248],
    name: {"de": "Votivkirche Szeged", "hu": "Szegedi DÃ³m", "ro": "Catedrala din Seghedin", "en": "Votive Church of Szeged"},
    image: "/geo-images/hungary/szeged.webp",
    description: {"de": "Monumentale neoromanische Kathedrale am Domplatz von Szeged.", "hu": "MonumentÃ¡lis neoromÃ¡n dÃ³m a NapfÃ©ny vÃ¡rosÃ¡nak szÃ­vÃ©ben.", "ro": "CatedralÄƒ neoromanicÄƒ monumentalÄƒ Ã®n PiaÈ›a Domului.", "en": "Monumental Neo-Romanesque cathedral on Szeged's Dome Square."},
    
    descriptionAdvanced: {
      "de": "Der Dom von Szeged, auch Votivkirche genannt, ist das markanteste Wahrzeichen der Stadt und eine der grÃ¶ÃŸten Kirchen Ungarns. Das neoromanische Bauwerk wurde nach der verheerenden Flut von 1879 als GelÃ¼bde der BÃ¼rger errichtet, um den Wiederaufbau der Stadt zu danken. Der riesige Domplatz vor der Kirche, umgeben von Arkaden, bietet die perfekte Kulisse fÃ¼r die berÃ¼hmten Szegeder Freilichtspiele. Im Inneren beeindruckt der Dom durch seine monumentale Orgel und die prachtvollen Mosaike sowie die Statue der 'Madonna im Pelz'. Die zwei markanten TÃ¼rme des Doms sind schon von weitem sichtbar und prÃ¤gen die Silhouette der Stadt an der TheiÃŸ. Der Dom ist nicht nur ein religiÃ¶ses Zentrum, sondern auch ein Ort des Gedenkens an die Standhaftigkeit der Szegeder BÃ¼rger.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Nach dem groÃŸen Hochwasser erbaut.", "Besitzt eine der grÃ¶ÃŸten Orgeln."], "hu": ["A nagy Ã¡rvÃ­z utÃ¡ni fogadalombÃ³l Ã©pÃ¼lt.", "Az orszÃ¡g egyik legnagyobb orgonÃ¡ja van itt."], "ro": ["ConstruitÄƒ dupÄƒ marea inundaÈ›ie.", "Are una dintre cele mai mari orgi."], "en": ["Built after the great flood.", "Houses one of the largest organs."]},
  
    factsAdvanced: {
      "de": ["Der Dom wurde zwischen 1913 und 1930 nach PlÃ¤nen von Frigyes Schulek und ErnÅ‘ Foerk erbaut.", "Die Orgel des Doms besitzt Ã¼ber 9000 Pfeifen und ist eine der grÃ¶ÃŸten in Europa.", "Die Mosaike im Innenraum stellen Szenen aus der ungarischen Geschichte und Bibel dar.", "Vom Aussichtsturm des Doms hat man einen Panoramablick Ã¼ber die gesamte Stadt und die TheiÃŸ."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "pannonhalmi-leveltar",
    type: "landmark",
    parent: "HU-GS",
    coords: [17.761, 47.554],
    name: {"de": "Archiv Pannonhalma", "hu": "Pannonhalmi ApÃ¡tsÃ¡gi LevÃ©ltÃ¡r", "ro": "Arhiva Pannonhalma", "en": "Pannonhalma Abbey Archives"},
    image: "/geo-images/hungary/pannonhalma.webp",
    description: {"de": "Bedeutendes Archiv mit dem Ã¤ltesten ungarischen SchriftstÃ¼ck.", "hu": "TÃ¶rtÃ©nelmi levÃ©ltÃ¡r a legÅ‘sibb magyar nyelvemlÃ©kkel.", "ro": "ArhivÄƒ importantÄƒ cu cel mai vechi document scris maghiar.", "en": "Significant archive with the oldest Hungarian written record."},
    
    descriptionAdvanced: {
      "de": "Das Archiv der Erzabtei Pannonhalma ist eines der bedeutendsten historischen Archive Ungarns und bewahrt die schriftliche Ãœberlieferung aus Ã¼ber tausend Jahren auf. Sein kostbarster Schatz ist die GrÃ¼ndungsurkunde der Abtei Tihany aus dem Jahr 1055, die die Ã¤ltesten geschriebenen WÃ¶rter der ungarischen Sprache enthÃ¤lt. Das Archiv dokumentiert nicht nur die Geschichte des Benediktinerordens, sondern liefert auch unschÃ¤tzbare Informationen zur Rechts-, Wirtschafts- und Sozialgeschichte des mittelalterlichen Ungarns. Die sorgfÃ¤ltig bewahrten Pergamente, Siegel und Handschriften sind fÃ¼r Forscher aus aller Welt von grÃ¶ÃŸtem Interesse. Untergebracht in den ehrwÃ¼rdigen Mauern der Abtei, strahlt das Archiv eine AtmosphÃ¤re von gelehrter Ruhe und KontinuitÃ¤t aus. Es ist ein wahres GedÃ¤chtnis der ungarischen Nation und des europÃ¤ischen MÃ¶nchtums.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Teil der Benediktinerabtei.", "Bewahrt die Tihanyer Stiftungsurkunde."], "hu": ["A bencÃ©s fÅ‘apÃ¡tsÃ¡g rÃ©sze.", "Itt Å‘rzik a tihanyi alapÃ­tÃ³levelet."], "ro": ["Parte a abaÈ›iei benedictine.", "PÄƒstreazÄƒ documentul de fondare din Tihany."], "en": ["Part of the Benedictine Abbey.", "Preserves the Tihany founding charter."]},
  
    factsAdvanced: {
      "de": ["Das Archiv bewahrt Ã¼ber 300.000 Dokumente und 1.500 Urkunden aus dem Mittelalter auf.", "Die GrÃ¼ndungsurkunde von Tihany ist das wichtigste Sprachdenkmal des Archivs.", "Viele Dokumente tragen wertvolle historische Siegel ungarischer KÃ¶nige und FÃ¼rsten.", "Das Archiv ist Teil des UNESCO-Welterbes der Erzabtei Pannonhalma."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "magyar-nemzeti-galeria-poi",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.039, 47.496],
    name: {"de": "Nationalgalerie", "hu": "Magyar Nemzeti GalÃ©ria", "ro": "Galeria NaÈ›ionalÄƒ", "en": "Hungarian National Gallery"},
    image: "/geo-images/hungary/nemzeti-galeria.webp",
    description: {"de": "Die grÃ¶ÃŸte Sammlung ungarischer bildender Kunst im Budaer Schloss.", "hu": "A legjelentÅ‘sebb hazai kÃ©pzÅ‘mÅ±vÃ©szeti gyÅ±jtemÃ©ny a VÃ¡rban.", "ro": "Cea mai mare colecÈ›ie de artÄƒ maghiarÄƒ Ã®n Castelul Buda.", "en": "The largest collection of Hungarian fine arts in Buda Castle."},
    
    descriptionAdvanced: {
      "de": "Die Ungarische Nationalgalerie im prachtvollen Budapester Burgpalast beherbergt die umfassendste Sammlung ungarischer bildender Kunst von den AnfÃ¤ngen bis zur Gegenwart. Die Ausstellungen fÃ¼hren den Besucher durch die Epochen des Mittelalters, der Renaissance, des Barock bis hin zum 19. und 20. Jahrhundert. Besonders beeindruckend sind die riesigen AltÃ¤re aus der SpÃ¤tgotik und die monumentalen Historienbilder ungarischer Meister wie MihÃ¡ly MunkÃ¡csy. In den prachtvollen SÃ¤len des Palastes kommen die Kunstwerke besonders zur Geltung und erzÃ¤hlen die bewegte Geschichte des Landes. Die Galerie bietet zudem einen fantastischen Blick Ã¼ber die Donau und das Parlament von den Fenstern des Burgbergs aus. FÃ¼r jeden Kunstliebhaber ist ein Besuch der Nationalgalerie eine Reise durch die Seele Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["PrÃ¤sentiert Kunst vom Mittelalter.", "Befindet sich im ehemaligen Palast."], "hu": ["KÃ¶zÃ©pkortÃ³l napjainkig mutatja be a mÅ±vÃ©szetet.", "A volt KirÃ¡lyi Palota Ã©pÃ¼letÃ©ben talÃ¡lhatÃ³."], "ro": ["PrezintÄƒ artÄƒ din Evul Mediu.", "Se aflÄƒ Ã®n fostul Palat Regal."], "en": ["Presents art from the Middle Ages.", "Located in the former Royal Palace."]},
  
    factsAdvanced: {
      "de": ["Die Galerie ist in den FlÃ¼geln A, B, C und D des Budapester Burgpalastes untergebracht.", "Die Sammlung umfasst Ã¼ber 100.000 Kunstwerke ungarischer KÃ¼nstler.", "Das Altarbild-Archiv ist eines der bedeutendsten seiner Art in Mitteleuropa.", "Die Galerie beherbergt die weltweit grÃ¶ÃŸte Sammlung von Werken von MihÃ¡ly MunkÃ¡csy."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "corvin-negyed-poi",
    type: "landmark",
    parent: "HU-BU",
    coords: [19.073, 47.486],
    name: {"de": "Corvin-Viertel", "hu": "Corvin Negyed", "ro": "Cartierul Corvin", "en": "Corvin Quarter"},
    image: "/geo-images/hungary/corvin-negyed.webp",
    description: {"de": "Modernes Stadtviertel mit historischem Erbe in Budapest.", "hu": "Budapest modern, megÃºjult vÃ¡rosrÃ©sze tÃ¶rtÃ©nelmi emlÃ©kekkel.", "ro": "Cartier urban modern cu moÈ™tenire istoricÄƒ Ã®n Budapesta.", "en": "Modern urban district with historical heritage in Budapest."},
    
    descriptionAdvanced: {
      "de": "Das Corvin-Viertel in Budapest ist eines der ehrgeizigsten Stadterneuerungsprojekte Zentraleuropas und verbindet moderne Architektur mit urbanem Lebensstil. Wo frÃ¼her graue MietshÃ¤user standen, erstreckt sich heute eine moderne Promenade mit GeschÃ¤ften, Restaurants, BÃ¼ros und Wohnanlagen von internationalem Standard. Das HerzstÃ¼ck ist das Corvin-Plaza-Einkaufszentrum und die markante Corvin-Promenade, die als neue pulsierende Ader des 8. Bezirks dient. Trotz der Modernisierung bewahrt das Viertel historische Ankerpunkte wie das Corvin-Kino, das im 1956er Freiheitskampf eine zentrale Rolle spielte. Die Architektur besticht durch klare Linien, viel Glas und grÃ¼ne InnenhÃ¶fe, die eine hohe LebensqualitÃ¤t bieten. Das Viertel ist ein Symbol fÃ¼r das dynamische und zukunftsorientierte Budapest.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt fÃ¼r die Corvin-Promenade.", "StÃ¤tte wichtiger 1956er KÃ¤mpfe."], "hu": ["HÃ­res a Corvin-sÃ©tÃ¡nyrÃ³l.", "Az 1956-os harcok egyik fontos helyszÃ­ne."], "ro": ["Cunoscut pentru promenada Corvin.", "Locul unor lupte importante din 1956."], "en": ["Known for the Corvin Promenade.", "Site of important 1956 battles."]},
  
    factsAdvanced: {
      "de": ["Das Corvin-Viertel Projekt wurde mit zahlreichen internationalen Immobilienpreisen ausgezeichnet.", "Die Corvin-Promenade ist die lÃ¤ngste neu geschaffene FuÃŸgÃ¤ngerzone in Budapest.", "In der NÃ¤he befindet sich die Statue des Jungen von PÃ¡l-StraÃŸe, einem Wahrzeichen des Viertels.", "Das Viertel ist ein bedeutender Standort fÃ¼r internationale Technologie- und IT-Unternehmen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "hatvan",
    type: "city",
    parent: "HU-HE",
    coords: [19.6833, 47.6667],
    name: {"de": "Hatvan", "hu": "Hatvan", "ro": "Hatvan", "en": "Hatvan"},
    image: "/geo-images/hungary/hatvan.webp",
    description: {"de": "Stadt an der Zagyva, bekannt fÃ¼r das Grassalkovich-Schloss.", "hu": "Zagyva-parti vÃ¡ros, a Grassalkovich-kastÃ©lyrÃ³l ismert.", "ro": "OraÈ™ pe rÃ¢ul Zagyva, cunoscut pentru Castelul Grassalkovich.", "en": "City on the Zagyva river, known for the Grassalkovich Castle."},
    
    descriptionAdvanced: {
      "de": "Hatvan liegt an der Schnittstelle zwischen der GroÃŸen Tiefebene und dem HÃ¼gelland der MÃ¡tra und blickt auf eine traditionsreiche Geschichte als Verkehrsknotenpunkt zurÃ¼ck. Das Wahrzeichen der Stadt ist das prachtvolle barocke Grassalkovich-Schloss, in dem heute das Ungarische Jagdmuseum untergebracht ist. Die Ausstellungen zeigen die reiche Jagdkultur des Landes und die Naturwerte der Region in einem herrschaftlichen Ambiente. Die Stadt ist zudem fÃ¼r ihren bedeutenden Bahnhof und die Industriegeschichte bekannt, die die moderne Entwicklung maÃŸgeblich prÃ¤gten. Ein Spaziergang durch den Schlosspark bietet Erholung und einen Blick auf die architektonische Eleganz vergangener Jahrhunderte. Hatvan verbindet auf angenehme Weise lÃ¤ndliche Tradition mit urbaner Dynamik.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wichtiger Eisenbahnknotenpunkt.", "Beherbergt das Ungarische Jagdmuseum."], "hu": ["Fontos vasÃºti csomÃ³pont.", "Itt talÃ¡lhatÃ³ a Magyar VadÃ¡szati MÃºzeum."], "ro": ["Nod feroviar important.", "GÄƒzduieÈ™te Muzeul Maghiar al VÃ¢nÄƒtorii."], "en": ["Important railway junction.", "Home to the Hungarian Hunting Museum."]},
  
    factsAdvanced: {
      "de": ["Das Grassalkovich-Schloss in Hatvan ist eines der bedeutendsten BarockgebÃ¤ude der Region.", "Das Ungarische Jagdmuseum beherbergt eine weltweit anerkannte TrophÃ¤ensammlung.", "Der Name 'Hatvan' bedeutet im Ungarischen 'Sechzig', was auf die Entfernung zu Budapest hindeutet.", "Die Stadt ist ein historisch wichtiger Eisenbahnknotenpunkt im Norden Ungarns."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tapolca",
    type: "city",
    parent: "HU-VE",
    coords: [17.4333, 46.8833],
    name: {"de": "Tapolca", "hu": "Tapolca", "ro": "Tapolca", "en": "Tapolca"},
    image: "/geo-images/hungary/tapolca.webp",
    description: {"de": "Stadt am Rande des Balaton-Oberlandes, berÃ¼hmt fÃ¼r ihre SeehÃ¶hle.", "hu": "VÃ¡ros a Balaton-felvidÃ©k szÃ©lÃ©n, hÃ­res a tavasbarlangjÃ¡rÃ³l.", "ro": "OraÈ™ la marginea regiunii Balaton-Oberland, faimos pentru peÈ™tera sa cu lac.", "en": "City on the edge of the Balaton Uplands, famous for its lake cave."},
    descriptionAdvanced: {
      "de": "Tapolca, im malerischen Balaton-Oberland gelegen, ist berÃ¼hmt fÃ¼r sein unterirdisches See-HÃ¶hlensystem, das man mit Booten erkunden kann. Der glasklare, tÃ¼rkisfarbene See in der HÃ¶hle bietet ein unvergessliches Erlebnis in einer mystischen Unterwelt. In der Altstadt von Tapolca befindet sich der idyllische MÃ¼hlenteich (Malom-tÃ³), umgeben von historischen GebÃ¤uden und gemÃ¼tlichen CafÃ©s, der zum Verweilen einlÃ¤dt. Die Stadt liegt im Herzen einer erloschenen Vulkanlandschaft und ist ein idealer Ausgangspunkt fÃ¼r Wanderungen zu den umliegenden Zeugenbergen. Bekannt ist Tapolca auch fÃ¼r sein spezielles Heilklima in den HÃ¶hlen, das besonders bei Atemwegserkrankungen Linderung verschafft. Die entspannte AtmosphÃ¤re und die einzigartige Verbindung von Wasser und HÃ¶hle machen die Stadt zu einem besonderen Ziel.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die SeehÃ¶hle von Tapolca wurde 1903 durch Zufall bei einer Brunnenbohrung entdeckt.", "Tapolca ist eine der wenigen StÃ¤dte der Welt, in denen man direkt unter der Innenstadt Boot fahren kann.", "Der MÃ¼hlenteich wird durch warmes Quellwasser gespeist und friert im Winter nie zu.", "Das Heilklima der Tapolcaer HÃ¶hlen ist staatlich fÃ¼r medizinische Anwendungen anerkannt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die SeehÃ¶hle kann mit Booten befahren werden.", "Der Malom-See im Zentrum ist sehr malerisch."], "hu": ["A tavasbarlang csÃ³nakkal bejÃ¡rhatÃ³.", "A kÃ¶zpontban talÃ¡lhatÃ³ Malom-tÃ³ rendkÃ­vÃ¼l festÅ‘i."], "ro": ["PeÈ™tera cu lac poate fi exploratÄƒ cu barca.", "Lacul Malom din centru este foarte pitoresc."], "en": ["The lake cave can be explored by boat.", "The Malom Lake in the center is very picturesque."]},
  },
  {
    id: "kazincbarcika",
    type: "city",
    parent: "HU-BZ",
    coords: [20.6333, 48.25],
    name: {"de": "Kazincbarcika", "hu": "Kazincbarcika", "ro": "Kazincbarcika", "en": "Kazincbarcika"},
    description: {"de": "Industriestadt im SajÃ³-Tal, bekannt als die 'Stadt der Farben'.", "hu": "Ipari vÃ¡ros a SajÃ³-vÃ¶lgyben, a 'SzÃ­nes vÃ¡ros' nÃ©ven ismert.", "ro": "OraÈ™ industrial Ã®n valea SajÃ³, cunoscut ca 'oraÈ™ul culorilor'.", "en": "Industrial city in the SajÃ³ Valley, known as the 'City of Colors'."},
    descriptionAdvanced: {
      "de": "Kazincbarcika im Norden Ungarns ist als die 'Stadt der Farben' bekannt und hat sich von einer sozialistischen Industriestadt zu einem modernen urbanen Kunstzentrum gewandelt. Im Rahmen des Projekts 'Kolorcity' wurden zahlreiche Fassaden der Plattenbauten durch groÃŸflÃ¤chige, bunte WandgemÃ¤lde ungarischer und internationaler KÃ¼nstler verziert. Das Stadtbild ist heute geprÃ¤gt von dieser lebendigen StraÃŸenkunst, die Kazincbarcika landesweit einzigartig macht. Trotz der chemischen Industrie, die weiterhin ein wichtiger wirtschaftlicher Faktor ist, legt die Stadt groÃŸen Wert auf GrÃ¼nflÃ¤chen und Parks. RegelmÃ¤ÃŸige Kulturfestivals und Sportveranstaltungen prÃ¤gen das gesellschaftliche Leben der Bewohner. Die Stadt ist ein interessantes Beispiel fÃ¼r den erfolgreichen Wandel einer Industriestadt durch KreativitÃ¤t und Farbe.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Kazincbarcika beherbergt Ã¼ber 40 groÃŸformatige WandgemÃ¤lde an Ã¶ffentlichen GebÃ¤uden.", "Die Stadt wurde in den 1950er Jahren durch die Zusammenlegung dreier DÃ¶rfer gegrÃ¼ndet.", "Der Name 'Kolorcity' steht fÃ¼r das Konzept der farbenfrohen und lebenswerten Stadt.", "Kazincbarcika ist ein bedeutendes Zentrum der chemischen Industrie in Ungarn."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["BerÃ¼hmt fÃ¼r seine groÃŸflÃ¤chigen Wandmalereien an WohngebÃ¤uden.", "Wichtiges Zentrum der chemischen Industrie."], "hu": ["HÃ­res a lakÃ³Ã©pÃ¼leteken talÃ¡lhatÃ³ nagymÃ©retÅ± falfestmÃ©nyeirÅ‘l.", "A vegyipar fontos kÃ¶zpontja."], "ro": ["Faimos pentru picturile sale murale mari de pe clÄƒdirile rezidenÈ›iale.", "Centru important al industriei chimice."], "en": ["Famous for its large-scale murals on residential buildings.", "Important center of the chemical industry."]},
  },
  {
    id: "ozd",
    type: "city",
    parent: "HU-BZ",
    coords: [20.2833, 48.2167],
    name: {"de": "Ã“zd", "hu": "Ã“zd", "ro": "Ã“zd", "en": "Ã“zd"},
    description: {"de": "Ehemaliges Zentrum der ungarischen Schwerindustrie in Nordungarn.", "hu": "A magyar nehÃ©zipar egykori kÃ¶zpontja Ã‰szak-MagyarorszÃ¡gon.", "ro": "Fost centru al industriei grele maghiare Ã®n nordul Ungariei.", "en": "Former center of Hungarian heavy industry in northern Hungary."},
    descriptionAdvanced: {
      "de": "Ã“zd ist eine Stadt mit einer tief verwurzelten industriellen IdentitÃ¤t im Norden Ungarns, geprÃ¤gt durch die einstige Stahl- und Eisenverarbeitung. Nach dem Niedergang der Schwerindustrie hat die Stadt begonnen, ihr industrielles Erbe in kulturelle Projekte umzuwandeln. Ein Highlight ist das 'Digitale Kraftwerk' und das Nationale Filminstitut, die in den historischen Werkshallen untergebracht sind und modernste Technik in alten Mauern prÃ¤sentieren. Die Umgebung von Ã“zd ist Ã¼berraschend grÃ¼n und gebirgig, eingebettet in die HÃ¼gellandschaft des GÃ¶mÃ¶r-Heveser Berglandes. Historische Arbeitersiedlungen mit ihrer charakteristischen Architektur vermitteln noch heute ein authentisches Bild der hiesigen Industriegeschichte. Ã“zd ist ein Ort des Umbruchs, der mutig neue Wege zwischen Tradition und Moderne sucht.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["In Ã“zd befindet sich das Nationale Filminstitut â€“ Filmarcivums, ein modernes digitales Kulturzentrum.", "Die Stadt war Ã¼ber ein Jahrhundert lang eines der Zentren der ungarischen Metallurgie.", "Der industrielle Denkmalkomplex der Stadt ist landesweit einzigartig.", "In der Umgebung von Ã“zd befinden sich zahlreiche malerische Wanderwege und NaturschÃ¤tze."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r sein industrielles Erbe und Museen.", "Umgeben von den HÃ¼geln des Heves-Borsodi-HÃ¼gellandes."], "hu": ["Ipari Ã¶rÃ¶ksÃ©gÃ©rÅ‘l Ã©s mÃºzeumairÃ³l ismert.", "A Hevesâ€“Borsodi-dombsÃ¡g dombjai veszik kÃ¶rÃ¼l."], "ro": ["Cunoscut pentru moÈ™tenirea sa industrialÄƒ È™i muzee.", "ÃŽnconjurat de dealurile regiunii Heves-Borsod."], "en": ["Known for its industrial heritage and museums.", "Surrounded by the hills of the Heves-Borsod region."]},
  },
  {
    id: "szigliget",
    type: "city",
    parent: "HU-VE",
    coords: [17.4333, 46.8],
    name: {"de": "Szigliget", "hu": "Szigliget", "ro": "Szigliget", "en": "Szigliget"},
    description: {"de": "Malerisches Dorf am Nordufer des Plattensees, bekannt fÃ¼r seine Burg.", "hu": "FestÅ‘i falu a Balaton Ã©szaki partjÃ¡n, vÃ¡rÃ¡rÃ³l ismert.", "ro": "Sat pitoresc pe malul nordic al Lacului Balaton, cunoscut pentru cetatea sa.", "en": "Picturesque village on the northern shore of Lake Balaton, known for its castle."},
    descriptionAdvanced: {
      "de": "Szigliget, oft als 'Perle des Plattensees' bezeichnet, liegt malerisch auf einer Halbinsel am Nordufer und ist bekannt fÃ¼r seine imposante Burgruine. Die Burg SzigetvÃ¡r thront hoch auf einem Vulkankegel und bietet einen der atemberaubendsten Ausblicke Ã¼ber den See und die umliegenden Zeugenberge. Das Dorf selbst besticht durch seinen authentischen Charakter mit reetgedeckten HÃ¤usern und schmalen Gassen, die sich den Hang hinaufziehen. Szigliget ist zudem ein bedeutendes Zentrum fÃ¼r Literatur und Kunst, da sich hier das EsterhÃ¡zy-Schloss befindet, das heute als Erholungsheim fÃ¼r ungarische Schriftsteller dient. Die umliegenden WeinhÃ¤nge produzieren hervorragende Weine, die in den gemÃ¼tlichen Kellern des Dorfes verkostet werden kÃ¶nnen. Szigliget ist ein Ort der Ruhe, der Inspiration und der zeitlosen SchÃ¶nheit am Balaton.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Burg SzigetvÃ¡r ist die einzige Burg am Plattensee, die von den TÃ¼rken nie eingenommen wurde.", "Das EsterhÃ¡zy-Schloss in SzigetvÃ¡r beherbergt seit 1952 eine traditionsreiche KÃ¼nstlerkolonie.", "Die vulkanischen BasaltbÃ¶den verleihen den hiesigen Weinen eine besondere MineralitÃ¤t.", "SzigetvÃ¡r ist bekannt fÃ¼r seine sommerlichen Burgspiele und Konzerte im Schlosspark."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die Burg Szigliget bietet einen der schÃ¶nsten Ausblicke auf den See.", "Bekannt fÃ¼r seine reetgedeckten HÃ¤user und Weinkeller."], "hu": ["A szigligeti vÃ¡rbÃ³l nyÃ­lik az egyik legszebb kilÃ¡tÃ¡s a Balatonra.", "NÃ¡dfedeles hÃ¡zairÃ³l Ã©s borpincÃ©irÅ‘l is ismert."], "ro": ["Cetatea Szigliget oferÄƒ una dintre cele mai frumoase vederi asupra lacului.", "Cunoscut pentru casele sale cu acoperiÈ™ de stuf È™i crame."], "en": ["Szigliget Castle offers one of the most beautiful views of the lake.", "Known for its thatched-roof houses and wine cellars."]},
  },
  {
    id: "herend",
    type: "city",
    parent: "HU-VE",
    coords: [17.8167, 47.1333],
    name: {"de": "Herend", "hu": "Herend", "ro": "Herend", "en": "Herend"},
    image: "/geo-images/hungary/herend.webp",
    description: {"de": "WeltberÃ¼hmt fÃ¼r seine Porzellanmanufaktur, die seit 1826 besteht.", "hu": "VilÃ¡ghÃ­rÅ± porcelÃ¡nmanufaktÃºrÃ¡jÃ¡rÃ³l ismert, amely 1826 Ã³ta mÅ±kÃ¶dik.", "ro": "Renumit Ã®n Ã®ntreaga lume pentru manufactura sa de porÈ›elan, fondatÄƒ Ã®n 1826.", "en": "World-famous for its porcelain manufactory, operating since 1826."},
    descriptionAdvanced: {
      "de": "Herend ist weltweit ein Synonym fÃ¼r exquisites Porzellan und handwerkliche Perfektion aus Ungarn. Die 1826 gegrÃ¼ndete Porzellanmanufaktur Herend ist eine der grÃ¶ÃŸten und traditionsreichsten Europas und belieferte bereits kÃ¶nigliche HÃ¶fe wie den von KÃ¶nigin Victoria. Im Besucherzentrum 'Porcelanium' kÃ¶nnen GÃ¤ste die einzelnen Schritte der Porzellanherstellung, vom Formen bis zur feinen Bemalung, live miterleben. Das Herender Porzellanmuseum zeigt eine beeindruckende Sammlung historischer StÃ¼cke und moderner Meisterwerke, die den Weltruf der Marke begrÃ¼nden. Die charakteristischen Muster wie 'Victoria' oder 'Rothschild' sind Sammlern auf allen Kontinenten bekannt. Ein Besuch in Herend ist ein Eintauchen in eine Welt voller Eleganz, Tradition und ungarischer Handwerkskunst auf hÃ¶chstem Niveau.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Herender Porzellan gewann 1851 auf der Londoner Weltausstellung die Goldmedaille.", "Die Manufaktur stellt noch heute jedes einzelne StÃ¼ck in reiner Handarbeit her.", "BerÃ¼hmte Kunden waren unter anderem Kaiser Franz Joseph I. und die britische KÃ¶nigsfamilie.", "Das Museum beherbergt eine Sammlung von Ã¼ber 8000 verschiedenen Porzellanobjekten."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Herend-Porzellan ist ein ungarisches Kulturerbe (Hungarikum).", "Beherbergt das Porzellanmuseum und die Minimanufaktur."], "hu": ["A herendi porcelÃ¡n magyar Ã¶rÃ¶ksÃ©g (Hungarikum).", "Itt talÃ¡lhatÃ³ a PorcelÃ¡nmÃºzeum Ã©s a MinimanufaktÃºra."], "ro": ["PorÈ›elanul de Herend este un patrimoniu cultural maghiar (Hungarikum).", "GÄƒzduieÈ™te Muzeul PorÈ›elanului È™i Minimanufactura."], "en": ["Herend porcelain is a Hungarian cultural heritage (Hungarikum).", "Home to the Porcelain Museum and the Minimanufactory."]},
  },
  {
    id: "mezokovesd",
    type: "city",
    parent: "HU-BZ",
    coords: [20.5833, 47.8167],
    name: {"de": "MezÅ‘kÃ¶vesd", "hu": "MezÅ‘kÃ¶vesd", "ro": "MezÅ‘kÃ¶vesd", "en": "MezÅ‘kÃ¶vesd"},
    description: {"de": "Zentrum der MatyÃ³-Kultur, bekannt fÃ¼r ihre farbenfrohen Stickereien.", "hu": "A matyÃ³ kultÃºra kÃ¶zpontja, szÃ­nes hÃ­mzÃ©seirÅ‘l ismert.", "ro": "Centrul culturii MatyÃ³, cunoscut pentru broderiile sale colorate.", "en": "Center of the MatyÃ³ culture, known for its colorful embroideries."},
    descriptionAdvanced: {
      "de": "MezÅ‘kÃ¶vesd ist die 'Hauptstadt' des MatyÃ³-Landes und weltberÃ¼hmt fÃ¼r seine farbenfrohe Volkskunst und Stickereien. Die MatyÃ³-Stickerei mit ihren charakteristischen bunten Rosenmotiven gehÃ¶rt zum immateriellen UNESCO-Weltkulturerbe und prÃ¤gt die IdentitÃ¤t der Stadt. Im Stadtteil 'Hadas' kÃ¶nnen Besucher das ursprÃ¼ngliche Dorfbild mit traditionellen HÃ¤usern und WerkstÃ¤tten der VolkskÃ¼nstler erleben. MezÅ‘kÃ¶vesd ist zudem fÃ¼r das ZsÃ³ry-Heil- und Strandbad bekannt, das Ã¼ber eines der wirksamsten schwefelhaltigen Thermalwasser in Ungarn verfÃ¼gt. Die Stadt verbindet auf einzigartige Weise die Bewahrung lebendiger Traditionen mit modernen ErholungsmÃ¶glichkeiten. Ein Besuch bei den stickenden Frauen oder in den Museen der Stadt bietet tiefe Einblicke in die ungarische Volksseele.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die MatyÃ³-Volkskunst in MezÅ‘kÃ¶vesd ist seit 2012 Teil des UNESCO-Weltkulturerbes.", "Das ZsÃ³ry-Bad besitzt eines der schwefelreichsten Thermalwasser in ganz Mitteleuropa.", "Das MatyÃ³-Museum zeigt prÃ¤chtige Trachten, die durch ihre enorme Farbenpracht bestechen.", "JÃ¤hrlich findet in MezÅ‘kÃ¶vesd das MatyÃ³-Festival zur Feier der regionalen IdentitÃ¤t statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Die MatyÃ³-Stickerei gehÃ¶rt zum UNESCO-Weltkulturerbe.", "Bekannt fÃ¼r das ZsÃ³ry-Heilbad."], "hu": ["A matyÃ³ hÃ­mzÃ©s az UNESCO szellemi vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.", "A ZsÃ³ry-gyÃ³gyfÃ¼rdÅ‘rÅ‘l is ismert."], "ro": ["Broderia MatyÃ³ face parte din patrimoniul UNESCO.", "Cunoscut È™i pentru baia curativÄƒ ZsÃ³ry."], "en": ["MatyÃ³ embroidery is part of the UNESCO Intangible Cultural Heritage.", "Known for the ZsÃ³ry medicinal bath."]},
  },
  {
    id: "hajos",
    type: "city",
    parent: "HU-BK",
    coords: [19.1167, 46.4],
    name: {"de": "HajÃ³s", "hu": "HajÃ³s", "ro": "HajÃ³s", "en": "HajÃ³s"},
    image: "/geo-images/hungary/hajos.webp",
    description: {"de": "Stadt in der Tiefebene, berÃ¼hmt fÃ¼r ihr einzigartiges Weinkellerdorf.", "hu": "AlfÃ¶ldi vÃ¡ros, egyedÃ¼lÃ¡llÃ³ pincefalujÃ¡rÃ³l hÃ­res.", "ro": "OraÈ™ Ã®n cÃ¢mpie, faimos pentru satul sÄƒu unic de crame.", "en": "City in the plains, famous for its unique wine cellar village."},
    descriptionAdvanced: {
      "de": "HajÃ³s ist weit Ã¼ber die Grenzen des Komitats BÃ¡cs-Kiskun hinaus fÃ¼r sein einzigartiges Kellerdorf bekannt, das aus Ã¼ber 1.200 historischen Weinkellern besteht. Diese Keller wurden von den im 18. Jahrhundert eingewanderten Donauschwaben in die LÃ¶sswand gegraben und bilden heute ein geschlossenes architektonisches Ensemble. Die weiÃŸ getÃ¼nchten PresshÃ¤user in den schmalen Gassen des Kellerdorfes vermitteln eine ganz besondere, nostalgische AtmosphÃ¤re. HajÃ³s ist zudem als bedeutender Wallfahrtsort bekannt, dessen barocke Kirche eine wertvolle Marienstatue beherbergt. Das barocke Erzbischofsschloss ist ein weiteres architektonisches Highlight und dokumentiert den einstigen Glanz der Region. Ein Besuch in HajÃ³s verbindet den Genuss exzellenter Weine mit dem Erlebnis einer lebendigen schwÃ¤bischen Tradition.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Das Kellerdorf von HajÃ³s ist das grÃ¶ÃŸte zusammenhÃ¤ngende seiner Art in ganz Europa.", "Die Weinregion ist vor allem fÃ¼r ihre charaktervollen Rotweine wie Cabernet Sauvignon bekannt.", "JÃ¤hrlich am Urbantag findet in HajÃ³s ein groÃŸes Weinfestival im Kellerdorf statt.", "Das Erzbischofsschloss von HajÃ³s ist das Ã¤lteste seiner Art im Komitat BÃ¡cs-Kiskun."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Das Kellerdorf besteht aus over 1200 kleinen Weinkellern.", "Bekannt fÃ¼r das Barockschloss des Erzbischofs."], "hu": ["A pincefalu tÃ¶bb mint 1200 aprÃ³ borpincÃ©bÅ‘l Ã¡ll.", "Az Ã©rseki barokk kastÃ©lyÃ¡rÃ³l is ismert."], "ro": ["Satul de crame este format din peste 1200 de mici pivniÈ›e de vin.", "Cunoscut È™i pentru castelul baroc al arhiepiscopului."], "en": ["The cellar village consists of over 1200 small wine cellars.", "Known for the Archbishop's Baroque Castle."]},
  },
  {
    id: "szentgotthard",
    type: "city",
    parent: "HU-VA",
    coords: [16.2833, 46.95],
    name: {"de": "SzentgotthÃ¡rd", "hu": "SzentgotthÃ¡rd", "ro": "SzentgotthÃ¡rd", "en": "SzentgotthÃ¡rd"},
    description: {"de": "Westlichste Stadt Ungarns an der Grenze zu Ã–sterreich.", "hu": "MagyarorszÃ¡g legnyugatibb vÃ¡rosa az osztrÃ¡k hatÃ¡rnÃ¡l.", "ro": "Cel mai vestic oraÈ™ din Ungaria, la graniÈ›a cu Austria.", "en": "Hungary's westernmost city at the Austrian border."},
    descriptionAdvanced: {
      "de": "SzentgotthÃ¡rd, die westlichste Stadt Ungarns direkt an der Ã¶sterreichischen Grenze, blickt auf eine geschichtstrÃ¤chtige Vergangenheit und eine lebendige Gegenwart zurÃ¼ck. BerÃ¼hmt wurde sie durch die Schlacht von SzentgotthÃ¡rd im Jahr 1664, in der ein vereintes christliches Heer den Vormarsch der Osmanen stoppte. Das Wahrzeichen der Stadt ist die prachtvolle Barockkirche des Zisterzienserklosters, die zu den schÃ¶nsten des Landes gehÃ¶rt. Heute ist SzentgotthÃ¡rd ein bedeutendes industrielles Zentrum und ein Vorreiter in Sachen grenzÃ¼berschreitender Zusammenarbeit. Das moderne Spa- und Wellnesszentrum 'St. Gotthard' bietet erstklassige Erholung in einer fast mediterranen AtmosphÃ¤re. Die Stadt ist zudem ein Tor zum Nationalpark ÅrsÃ©g und bietet ideale Bedingungen fÃ¼r Natur- und Aktivtouristen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["SzentgotthÃ¡rd liegt am Zusammenfluss der Raab (RÃ¡ba) und der Lafnitz (Lapincs).", "Die Barockkirche der Stadt besitzt Deckenfresken, die die berÃ¼hmte Schlacht gegen die TÃ¼rken darstellen.", "In der Stadt befindet sich eines der modernsten Motorenwerke des Opel-Konzerns.", "SzentgotthÃ¡rd ist ein wichtiges Zentrum der slowenischen Minderheit in Ungarn."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Ort der berÃ¼hmten Schlacht von SzentgotthÃ¡rd im Jahr 1664.", "Besitzt eine prÃ¤chtige Zisterzienserabtei."], "hu": ["Az 1664-es hÃ­res szentgotthÃ¡rdi csata helyszÃ­ne.", "PompÃ¡s ciszterci apÃ¡tsÃ¡ggal rendelkezik."], "ro": ["Locul faimoasei bÄƒtÄƒlii de la SzentgotthÃ¡rd din 1664.", "Are o abaÈ›ie cistercianÄƒ magnificÄƒ."], "en": ["Site of the famous Battle of SzentgotthÃ¡rd in 1664.", "Features a magnificent Cistercian abbey."]},
  },
  {
    id: "lenti",
    type: "city",
    parent: "HU-ZA",
    coords: [16.5333, 46.6167],
    name: {"de": "Lenti", "hu": "Lenti", "ro": "Lenti", "en": "Lenti"},
    description: {"de": "Stadt im SÃ¼dwesten, bekannt fÃ¼r ihr Thermalbad und den Energiepark.", "hu": "DÃ©lnyugati vÃ¡ros, termÃ¡lfÃ¼rdÅ‘jÃ©rÅ‘l Ã©s energiaparkjÃ¡rÃ³l ismert.", "ro": "OraÈ™ Ã®n sud-vest, cunoscut pentru baia sa termalÄƒ È™i parcul energetic.", "en": "Southwestern city, known for its thermal bath and energy park."},
    descriptionAdvanced: {
      "de": "Lenti, im SÃ¼dwesten Ungarns am Treffpunkt dreier Grenzen gelegen, ist ein bekannter Kurort mit einer ganz besonderen energetischen Kraft. Das dortige Heil- und Erlebnisbad ist nicht nur fÃ¼r sein wertvolles Thermalwasser bekannt, sondern beherbergt auch den St.-Georg-Energiepark. Man glaubt, dass hier heilende EnergiestrÃ¶me flieÃŸen, die den Genesungsprozess zusÃ¤tzlich unterstÃ¼tzen sollen. Die Stadt ist zudem ein idealer Ausgangspunkt fÃ¼r Erkundungen in der hÃ¼geligen Landschaft des Komitats Zala und zum nahegelegenen Kerka-Tal. Eine Schmalspurbahn fÃ¼hrt von Lenti aus durch die dichten WÃ¤lder der Umgebung und bietet Naturerlebnisse fÃ¼r die ganze Familie. Lenti strahlt eine angenehme, ruhige AtmosphÃ¤re aus und ist ein Ort der Harmonie zwischen Mensch und Natur.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Lenti besitzt ein einzigartiges Heilwasser, das besonders wirksam bei Gelenkerkrankungen ist.", "Der St.-Georg-Energiepark im Bad ist landesweit fÃ¼r seine energetische Wirkung bekannt.", "Von Lenti aus startet die lÃ¤ngste Schmalspurbahn Ungarns durch Waldgebiete.", "Die Stadt liegt in unmittelbarer NÃ¤he zur Grenze von Slowenien und Kroatien."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Der St. Georg Energiepark soll heilende Erdstrahlen haben.", "Ausgangspunkt der lÃ¤ngsten Waldbahn Ungarns."], "hu": ["A Szent GyÃ¶rgy Energiapark gyÃ³gyÃ­tÃ³ fÃ¶ldsugÃ¡rzÃ¡sÃ¡rÃ³l ismert.", "Itt talÃ¡lhatÃ³ MagyarorszÃ¡g leghosszabb erdei vasÃºtjÃ¡nak kiindulÃ³pontja."], "ro": ["Parcul energetic Sf. Gheorghe ar avea radiaÈ›ii terestre curative.", "Punctul de plecare al celei mai lungi cÄƒi ferate forestiere din Ungaria."], "en": ["The St. George Energy Park is said to have healing earth radiations.", "Starting point of the longest forest railway in Hungary."]},
  },
  {
    id: "karcag",
    type: "city",
    parent: "HU-JN",
    coords: [20.9167, 47.3167],
    name: {"de": "Karcag", "hu": "Karcag", "ro": "Karcag", "en": "Karcag"},
    description: {"de": "Hauptstadt der Region GroÃŸ-Kumanien, bewahrt kumanische Traditionen.", "hu": "A NagykunsÃ¡g fÅ‘vÃ¡rosa, a kun hagyomÃ¡nyok Å‘rzÅ‘je.", "ro": "Capitala regiunii Cumania Mare, pÄƒstreazÄƒ tradiÈ›iile cumane.", "en": "Capital of the Greater Cumania region, preserving Cuman traditions."},
    descriptionAdvanced: {
      "de": "Karcag ist das historische und kulturelle Zentrum von GroÃŸkumanien (NagykunsÃ¡g) und bewahrt stolz das Erbe der einstigen NomadenstÃ¤mme. Die Stadt ist geprÃ¤gt von einer weiten, offenen Landschaft und einer Architektur, die vom Stolz der kumanischen Bewohner zeugt. Das GyÃ¶rffy-IstvÃ¡n-Nagykun-Museum dokumentiert die faszinierende Geschichte der Kumanen und zeigt bedeutende archÃ¤ologische Funde aus der Bronzezeit. Karcag ist zudem fÃ¼r seine kulinarische Tradition berÃ¼hmt, insbesondere fÃ¼r das Karcager Hammelgulasch, das zum ungarischen Kulturerbe gehÃ¶rt. Das moderne AkÃ¡cliget-Heilbad bietet Entspannung in einer waldreichen Umgebung am Rande der Stadt. Karcag ist ein Ort, an dem die Tradition der Tiefebene noch immer lebendig gelebt und gefeiert wird.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Karcag ist die 'Hauptstadt' der historischen Region GroÃŸkumanien.", "Das Karcager Hammelgulasch wird traditionell in groÃŸen Kesseln Ã¼ber offenem Feuer zubereitet.", "In der Stadt befindet sich das markante Nagykun-Denkmal, das an die Ansiedlung der Kumanen erinnert.", "Karcag beherbergt eine bedeutende WindmÃ¼hle, die ein Symbol fÃ¼r die Agrartradition der Region ist."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Bekannt fÃ¼r das Hammelgulasch nach Karcager Art (Hungarikum).", "Beherbergt das GyÃ¶rffy-IstvÃ¡n-Nagykun-Museum."], "hu": ["HÃ­res a karcagi birkapÃ¶rkÃ¶ltrÅ‘l (Hungarikum).", "Itt talÃ¡lhatÃ³ a GyÃ¶rffy IstvÃ¡n Nagykun MÃºzeum."], "ro": ["Faimos pentru tocanÄƒ de berbec Ã®n stil Karcag (Hungarikum).", "GÄƒzduieÈ™te Muzeul GyÃ¶rffy IstvÃ¡n Nagykun."], "en": ["Famous for the Karcag-style mutton stew (Hungarikum).", "Home to the GyÃ¶rffy IstvÃ¡n Nagykun Museum."]},
  },
  {
    id: "jaszapati",
    type: "city",
    parent: "HU-JN",
    coords: [20.15, 47.52],
    name: {"de": "JÃ¡szapÃ¡ti", "hu": "JÃ¡szapÃ¡ti", "ro": "JÃ¡szapÃ¡ti", "en": "JÃ¡szapÃ¡ti"},
    description: {"de": "Kleinstadt im JÃ¡szsÃ¡g, bekannt fÃ¼r ihr Thermalbad und die barocke Kirche.", "hu": "JÃ¡szsÃ¡gi kisvÃ¡ros, termÃ¡lfÃ¼rdÅ‘jÃ©rÅ‘l Ã©s barokk templomÃ¡rÃ³l ismert.", "ro": "OraÈ™ mic Ã®n JÃ¡szsÃ¡g, cunoscut pentru baia sa termalÄƒ È™i biserica barocÄƒ.", "en": "Small town in JÃ¡szsÃ¡g, known for its thermal bath and Baroque church."},
    descriptionAdvanced: {
      "de": "JÃ¡szapÃ¡ti ist eine traditionsreiche Stadt in der Region JÃ¡szsÃ¡g, bekannt fÃ¼r ihr reiches religiÃ¶ses Erbe und ihre heilenden Quellen. Die monumentale katholische Kirche der Stadt mit ihren prachtvollen DeckengemÃ¤lden ist ein bedeutendes barockes Denkmal der ungarischen Tiefebene. JÃ¡szapÃ¡ti beherbergt zudem das TÃ¶lgyes Heil- und Strandbad, das in einem schattigen Eichenpark angelegt wurde und fÃ¼r sein heilendes Thermalwasser geschÃ¤tzt wird. Die Stadt pflegt intensiv die Traditionen der Jazygen-Volksgruppe, was sich in zahlreichen Festen und kulturellen Veranstaltungen widerspiegelt. Die umliegende Landschaft ist geprÃ¤gt von fruchtbaren Feldern und einer ruhigen, lÃ¤ndlichen AtmosphÃ¤re. JÃ¡szapÃ¡ti bietet eine ideale Kombination aus sakraler Kunst, gesundheitlicher Erholung und regionaler IdentitÃ¤t.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["Die Stadt wurde im 13. Jahrhundert von den einwandernden Jazygen besiedelt.", "Die Deckenfresken der katholischen Kirche stammen von bedeutenden Meistern des 18. Jahrhunderts.", "Das TÃ¶lgyes-Bad ist nach dem angrenzenden Eichenwald benannt.", "JÃ¡szapÃ¡ti ist ein wichtiges Zentrum fÃ¼r den Anbau von Getreide und Sonnenblumen in der Tiefebene."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["Besitzt eine der grÃ¶ÃŸten Kirchen der Region.", "Das Heilwasser ist seit den 1960ern beliebt."], "hu": ["A rÃ©giÃ³ egyik legnagyobb templomÃ¡val rendelkezik.", "GyÃ³gyvize az 1960-as Ã©vek Ã³ta nÃ©pszerÅ±."], "ro": ["Are una dintre cele mai mari biserici din regiune.", "Apa curativÄƒ este popularÄƒ din anii 1960."], "en": ["Has one of the largest churches in the region.", "Its healing water has been popular since the 1960s."]},
  },
  {
    id: "tiszaujvaros",
    type: "city",
    parent: "HU-BZ",
    coords: [21.05, 47.93],
    name: {"de": "TiszaÃºjvÃ¡ros", "hu": "TiszaÃºjvÃ¡ros", "ro": "TiszaÃºjvÃ¡ros", "en": "TiszaÃºjvÃ¡ros"},
    description: {"de": "Moderne Industriestadt an der TheiÃŸ, bekannt fÃ¼r Chemie und Sport.", "hu": "Modern iparvÃ¡ros a Tisza partjÃ¡n, vegyiparÃ¡rÃ³l Ã©s sportÃ©letÃ©rÅ‘l ismert.", "ro": "OraÈ™ industrial modern pe Tisa, cunoscut pentru industria chimicÄƒ È™i sport.", "en": "Modern industrial city on the Tisza, known for chemistry and sports."},
    descriptionAdvanced: {
      "de": "TiszaÃºjvÃ¡ros ist eine moderne, dynamische Stadt am Ufer der TheiÃŸ, die vor allem durch ihre bedeutende chemische Industrie und ihr erstklassiges Heilbad bekannt ist. In den 1960er Jahren als sozialistische Musterstadt gegrÃ¼ndet, hat sich TiszaÃºjvÃ¡ros heute zu einem attraktiven Wohn- und Tourismusstandort entwickelt. Das Thermal- und Erlebnisbad der Stadt gehÃ¶rt zu den modernsten Ungarns und bietet mit seinem jod- und bromhaltigen Wasser hervorragende Bedingungen fÃ¼r Erholung und Heilung. Die Stadt legt groÃŸen Wert auf Sport und Freizeitgestaltung, was sich in zahlreichen modernen Sportanlagen und gepflegten Parks widerspiegelt. Die NÃ¤he zum Fluss TheiÃŸ ermÃ¶glicht zudem vielfÃ¤ltige AktivitÃ¤ten wie Angeln, Bootfahren und Radtouren entlang des Ufers. TiszaÃºjvÃ¡ros ist ein Beispiel fÃ¼r erfolgreiche Stadtentwicklung in der ungarischen Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    factsAdvanced: {
      "de": ["TiszaÃºjvÃ¡ros wurde ursprÃ¼nglich unter dem Namen LeninvÃ¡ros (Leninstadt) gegrÃ¼ndet.", "Die Stadt beherbergt eines der grÃ¶ÃŸten Chemieunternehmen Mitteleuropas.", "Das Heilbad von TiszaÃºjvÃ¡ros ist fÃ¼r seine moderne Architektur und hohe WasserqualitÃ¤t bekannt.", "Die Stadt ist ein regelmÃ¤ÃŸiger Austragungsort internationaler Triathlon-Wettbewerbe."],
      "hu": [],
      "ro": [],
      "en": []
    },
    facts: {"de": ["HieÃŸ frÃ¼her LeninvÃ¡ros.", "VerfÃ¼gt Ã¼ber ein groÃŸes Heil- und Erlebnisbad."], "hu": ["KorÃ¡bban LeninvÃ¡rosnak hÃ­vtÃ¡k.", "Hatalmas gyÃ³gy- Ã©s Ã©lmÃ©nyfÃ¼rdÅ‘vel rendelkezik."], "ro": ["Se numea anterior LeninvÃ¡ros.", "Are o baie curativÄƒ È™i de aventurÄƒ imensÄƒ."], "en": ["Formerly called LeninvÃ¡ros.", "Features a large medicinal and adventure bath."]},
  },
  {
    id: "komlo",
    type: "city",
    parent: "HU-BA",
    coords: [18.27, 46.19],
    name: {"de": "KomlÃ³", "hu": "KomlÃ³", "ro": "KomlÃ³", "en": "KomlÃ³"},
    description: {"de": "Ehemalige Bergbaustadt im Mecsek-Gebirge mit schÃ¶ner natÃ¼rlicher Umgebung.", "hu": "Egykori bÃ¡nyÃ¡szvÃ¡ros a Mecsekben, szÃ©p termÃ©szeti kÃ¶rnyezettel.", "ro": "Fost oraÈ™ minier Ã®n munÈ›ii Mecsek cu Ã®mprejurimi naturale frumoase.", "en": "Former mining town in the Mecsek Mountains with beautiful natural surroundings."},
    
    descriptionAdvanced: {
      "de": "KomlÃ³, eingebettet in die bewaldeten TÃ¤ler des Mecsek-Gebirges, blickt auf eine bedeutende Geschichte als Bergbaustadt zurÃ¼ck. Im 20. Jahrhundert entwickelte sich die Stadt zu einem der wichtigsten Steinkohlezentren Ungarns, was das Stadtbild und die Gemeinschaft maÃŸgeblich prÃ¤gte. Nach der Einstellung des Bergbaus hat sich KomlÃ³ zu einem Tor fÃ¼r Naturtouristen entwickelt, die die unberÃ¼hrten WÃ¤lder des Mecsek erkunden mÃ¶chten. Einzigartig ist das Mini-Zoo-Zentrum, das eine Vielzahl einheimischer und exotischer Kleintiere in einer familienfreundlichen AtmosphÃ¤re prÃ¤sentiert. Die Stadt ist zudem ein idealer Ausgangspunkt fÃ¼r Wanderungen zu den Ruinen der Burg MÃ¡rÃ© und durch das idyllische Sikonda-Tal. KomlÃ³ verbindet industrielles Erbe mit der natÃ¼rlichen Frische des Mittelgebirges.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["War ein wichtiges Zentrum des Steinkohlebergbaus.", "Ein beliebtes Wandergebiet am FuÃŸe des Mecsek."], "hu": ["A feketekÅ‘szÃ©n-bÃ¡nyÃ¡szat fontos kÃ¶zpontja volt.", "NÃ©pszerÅ± tÃºrahelyszÃ­n a Mecsek lÃ¡bÃ¡nÃ¡l."], "ro": ["A fost un centru important al minieritului de cÄƒrbune.", "O zonÄƒ popularÄƒ de drumeÈ›ii la poalele munÈ›ilor Mecsek."], "en": ["Was an important center of coal mining.", "A popular hiking area at the foot of the Mecsek."]},
  
    factsAdvanced: {
      "de": ["KomlÃ³ war jahrzehntelang eine der bedeutendsten BergbaustÃ¤dte in SÃ¼dungarn.", "In der NÃ¤he befindet sich das malerische Sikonda-Bad mit seinem heilenden Wasser.", "Die Stadt beherbergt ein interessantes Bergbaumuseum zur Geschichte der Kohlegewinnung.", "Die umliegenden WÃ¤lder des Mecsek bieten ein dichtes Netz an markierten Wanderwegen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szazhalombatta",
    type: "city",
    parent: "HU-PE",
    coords: [18.91, 47.32],
    name: {"de": "SzÃ¡zhalombatta", "hu": "SzÃ¡zhalombatta", "ro": "SzÃ¡zhalombatta", "en": "SzÃ¡zhalombatta"},
    description: {"de": "Industriestadt an der Donau, bekannt fÃ¼r ihre Raffinerie und ArchÃ¤ologie.", "hu": "Duna-parti iparvÃ¡ros, finomÃ­tÃ³jÃ¡rÃ³l Ã©s rÃ©gÃ©szeti parkjÃ¡rÃ³l ismert.", "ro": "OraÈ™ industrial pe DunÄƒre, cunoscut pentru rafinÄƒria sa È™i parkul arheologic.", "en": "Industrial city on the Danube, known for its refinery and archaeological park."},
    
    descriptionAdvanced: {
      "de": "SzÃ¡zhalombatta liegt am rechten Ufer der Donau sÃ¼dlich von Budapest und ist bekannt fÃ¼r seine beeindruckende prÃ¤historische Vergangenheit und moderne Industrie. Der Name der Stadt bedeutet wÃ¶rtlich 'Hundert HÃ¼gel' und bezieht sich auf die Ã¼ber 100 eisenzeitlichen GrabhÃ¼gel im hiesigen ArchÃ¤ologischen Park. Dieser Park ist das erste interaktive Freilichtmuseum seiner Art in Ungarn und prÃ¤sentiert rekonstruierte HÃ¤user und GrabstÃ¤tten aus der Hallstattzeit. Heute ist die Stadt zudem ein bedeutendes Energiezentrum mit einer der grÃ¶ÃŸten ErdÃ¶lraffinerien des Landes. Die Donaupromenade von SzÃ¡zhalombatta bietet moderne FreizeitmÃ¶glichkeiten und einen weiten Blick Ã¼ber den Fluss. Die Stadt verbindet auf faszinierende Weise die Ã¤ltesten Siedlungsspuren der Region mit technischem Fortschritt.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der Name bedeutet 'Hundert HÃ¼gel'.", "Beherbergt ein bedeutendes Eisenzeit-Museum."], "hu": ["Neve szÃ¡z halmot jelent.", "JelentÅ‘s vaskori rÃ©gÃ©szeti parkkal rendelkezik."], "ro": ["Numele Ã®nseamnÄƒ 'O sutÄƒ de movile'.", "GÄƒzduieÈ™te un muzeu important al epocii fierului."], "en": ["The name means 'Hundred Mounds'.", "Home to a significant Iron Age archaeological park."]},
  
    factsAdvanced: {
      "de": ["SzÃ¡zhalombatta beherbergt den grÃ¶ÃŸten prÃ¤historischen GrabhÃ¼gel-Park Mitteleuropas.", "Der Name der Stadt stammt von den zahlreichen kÃ¼nstlichen HÃ¼geln der Eisenzeit.", "In der Stadt befindet sich die bedeutende 'Matrica'-Museumssammlung zur rÃ¶mischen Geschichte.", "SzÃ¡zhalombatta ist ein wichtiges Zentrum der ungarischen Energiewirtschaft."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "monor",
    type: "city",
    parent: "HU-PE",
    coords: [19.45, 47.35],
    name: {"de": "Monor", "hu": "Monor", "ro": "Monor", "en": "Monor"},
    description: {"de": "Stadt am Rande des GÃ¶dÃ¶llÅ‘-HÃ¼gellandes, bekannt fÃ¼r ihr Kellerdorf.", "hu": "VÃ¡ros a GÃ¶dÃ¶llÅ‘i-dombsÃ¡g szÃ©lÃ©n, pincefalujÃ¡rÃ³l ismert.", "ro": "OraÈ™ la poalele dealurilor GÃ¶dÃ¶llÅ‘, cunoscut pentru satul sÄƒu de crame.", "en": "City at the edge of the GÃ¶dÃ¶llÅ‘ Hills, known for its cellar village."},
    
    descriptionAdvanced: {
      "de": "Monor liegt am Rande der HÃ¼gellandschaft von GÃ¶dÃ¶llÅ‘ und ist landesweit fÃ¼r sein einzigartiges Kellerdorf am StrÃ¡zsa-HÃ¼gel bekannt. Das Kellerdorf umfasst fast 1000 historische Weinkeller, die in geschlossenen Reihen angeordnet sind und ein bedeutendes architektonisches Denkmal bilden. Die Region hat eine lange Tradition im Weinbau, die bis in die Zeit des Mittelalters zurÃ¼ckreicht. JÃ¤hrlich finden hier Weinfeste und kulinarische Veranstaltungen statt, die die exzellenten Weine der Region und die Gastfreundschaft der Bewohner feiern. Neben dem Wein bietet Monor eine ruhige, kleinstÃ¤dtische AtmosphÃ¤re und ist ein wichtiger Verkehrsknotenpunkt sÃ¼dÃ¶stlich von Budapest. Ein Spaziergang durch die Kellergassen bietet authentische Einblicke in die ungarische Weinkultur der Tiefebene.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Kellerdorf StrÃ¡zsa-hegy hat fast 1000 Weinkeller.", "Wichtiges Weinbauzentrum in der NÃ¤he von Budapest."], "hu": ["A StrÃ¡zsa-hegyi pincefalu kÃ¶zel 1000 borpincÃ©t szÃ¡mlÃ¡l.", "Fontos borÃ¡szati kÃ¶zpont Budapest kÃ¶zelÃ©ben."], "ro": ["Satul de crame StrÃ¡zsa-hegy are aproape 1000 de pivniÈ›e.", "Centru viticol important lÃ¢ngÄƒ Budapesta."], "en": ["The StrÃ¡zsa-hegy cellar village has nearly 1000 wine cellars.", "Important viticultural center near Budapest."]},
  
    factsAdvanced: {
      "de": ["Das Kellerdorf von Monor am StrÃ¡zsa-HÃ¼gel ist eines der grÃ¶ÃŸten zusammenhÃ¤ngenden Ensembles dieser Art.", "Die Region gehÃ¶rt zum Weinbaugebiet Etyek-Buda.", "In Monor befindet sich ein bedeutendes klassizistisches Rathaus aus dem 19. Jahrhundert.", "Die Stadt feiert jÃ¤hrlich das 'Monorer Kellerfest' mit traditioneller Musik und Weinproben."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nagykoros",
    type: "city",
    parent: "HU-PE",
    coords: [19.78, 47.03],
    name: {"de": "NagykÅ‘rÃ¶s", "hu": "NagykÅ‘rÃ¶s", "ro": "NagykÅ‘rÃ¶s", "en": "NagykÅ‘rÃ¶s"},
    description: {"de": "Historische Stadt in der Tiefebene, berÃ¼hmt fÃ¼r Landwirtschaft und Arany JÃ¡nos.", "hu": "TÃ¶rtÃ©nelmi alfÃ¶ldi vÃ¡ros, mezÅ‘gazdasÃ¡gÃ¡rÃ³l Ã©s Arany JÃ¡nosrÃ³l hÃ­res.", "ro": "OraÈ™ istoric Ã®n cÃ¢mpie, faimos pentru agriculturÄƒ È™i Arany JÃ¡nos.", "en": "Historic city in the plains, famous for agriculture and Arany JÃ¡nos."},
    
    descriptionAdvanced: {
      "de": "NagyÅ‘rÃ¶s, im Herzen Ungarns gelegen, ist als die 'Hauptstadt des ungarischen Marktes' und bedeutender Ort der literaturgeschichte bekannt. Die Stadt war Ã¼ber Jahrhunderte ein blÃ¼hendes Handelszentrum, was sich in den groÃŸzÃ¼gigen PlÃ¤tzen und prÃ¤chtigen BÃ¼rgerhÃ¤usern widerspiegelt. Ein kulturelles Highlight ist das Arany-JÃ¡nos-Museum, das dem groÃŸen ungarischen Dichter gewidmet ist, der hier als Lehrer wirkte und einige seiner bedeutendsten Werke schuf. NagyÅ‘rÃ¶s ist zudem berÃ¼hmt fÃ¼r seine erstklassige Obstproduktion, insbesondere fÃ¼r Ã„pfel und Kirschen, die auf den fruchtbaren BÃ¶den der Umgebung gedeihen. Die Stadt bewahrt eine ruhige, bÃ¼rgerliche Eleganz und pflegt stolz ihr reiches kulturelles und landwirtschaftliches Erbe. Die weiten Parks und Alleen verleihen NagyÅ‘rÃ¶s eine angenehme, grÃ¼ne AtmosphÃ¤re.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Arany JÃ¡nos lehrte hier am Lyzeum.", "Bekannt fÃ¼r den KÅ‘rÃ¶ser Markt."], "hu": ["Arany JÃ¡nos itt tanÃ­tott a gimnÃ¡ziumban.", "HÃ­res a kÅ‘rÃ¶si vÃ¡sÃ¡rokrÃ³l."], "ro": ["Arany JÃ¡nos a predat aici la liceu.", "Faimos pentru tÃ¢rgurile din NagykÅ‘rÃ¶s."], "en": ["Arany JÃ¡nos taught here at the lyceum.", "Famous for the NagykÅ‘rÃ¶s market."]},
  
    factsAdvanced: {
      "de": ["NagyÅ‘rÃ¶s beherbergt den einzigen Safaripark Ungarns am Stadtrand.", "Der Dichter Arany JÃ¡nos lebte und lehrte fast ein Jahrzehnt lang in dieser Stadt.", "Die Stadt ist ein historisches Zentrum der ungarischen Obstverarbeitung.", "Das reformierte Gymnasium von NagyÅ‘rÃ¶s blickt auf eine Ã¼ber 450-jÃ¤hrige Geschichte zurÃ¼ck."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "marcali",
    type: "city",
    parent: "HU-SO",
    coords: [17.41, 46.58],
    name: {"de": "Marcali", "hu": "Marcali", "ro": "Marcali", "en": "Marcali"},
    description: {"de": "Kleinstadt sÃ¼dlich des Plattensees mit einem modernen Thermalbad.", "hu": "KisvÃ¡ros a BalatontÃ³l dÃ©lre, modern termÃ¡lfÃ¼rdÅ‘vel.", "ro": "OraÈ™ mic la sud de Lacul Balaton, cu o baie termalÄƒ modernÄƒ.", "en": "Small town south of Lake Balaton with a modern thermal bath."},
    
    descriptionAdvanced: {
      "de": "Marcali, sÃ¼dlich des Plattensees gelegen, ist das wirtschaftliche und kulturelle Zentrum der Region Somogy-Hinterland. Die Stadt besticht durch ihr gepflegtes Stadtbild und das moderne Heil- und Strandbad, das Entspannung fÃ¼r Bewohner und Besucher bietet. Ein bedeutendes Wahrzeichen ist das Schloss SzÃ©chÃ©nyi, das von einem weitlÃ¤ufigen Park umgeben ist und heute ein Museum beherbergt. Marcali blickt auf eine lange handwerkliche Tradition zurÃ¼ck, die in den lokalen Sammlungen zur Volkskunde gewÃ¼rdigt wird. Die Umgebung der Stadt ist geprÃ¤gt von sanften HÃ¼geln, dichten WÃ¤ldern und Weinbergen, die zu Naturerlebnissen einladen. Marcali strahlt eine angenehme Ruhe aus und ist ein idealer Ort fÃ¼r alle, die das authentische lÃ¤ndliche Ungarn unweit des Balaton suchen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wirtschaftliches Zentrum des Marcali-Beckens.", "Beliebtes Ziel fÃ¼r Jagd- und Naturtourismus."], "hu": ["A Marcali-hÃ¡t gazdasÃ¡gi kÃ¶zpontja.", "NÃ©pszerÅ± vadÃ¡sz- Ã©s termÃ©szetjÃ¡rÃ³ cÃ©lpont."], "ro": ["Centrul economic al bazinului Marcali.", "DestinaÈ›ie popularÄƒ pentru vÃ¢nÄƒtoare È™i ecoturism."], "en": ["Economic center of the Marcali Basin.", "Popular destination for hunting and nature tourism."]},
  
    factsAdvanced: {
      "de": ["Das Heilbad von Marcali ist fÃ¼r sein fluoridhaltiges Thermalwasser bekannt.", "Das Schloss SzÃ©chÃ©nyi war einst im Besitz einer der bedeutendsten Adelsfamilien Ungarns.", "Die Stadt ist ein wichtiges Zentrum fÃ¼r den lÃ¤ndlichen Tourismus im Komitat Somogy.", "Marcali feiert jÃ¤hrlich ein groÃŸes Erntedankfest zur Pflege bÃ¤uerlicher Traditionen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "barcs",
    type: "city",
    parent: "HU-SO",
    coords: [17.46, 45.96],
    name: {"de": "Barcs", "hu": "Barcs", "ro": "Barcs", "en": "Barcs"},
    description: {"de": "Grenzstadt an der Drau, Tor zum Nationalpark Donau-Drau.", "hu": "HatÃ¡rvÃ¡ros a DrÃ¡va partjÃ¡n, a Dunaâ€“DrÃ¡va Nemzeti Park kapuja.", "ro": "OraÈ™ de graniÈ›Äƒ pe rÃ¢ul Drava, poarta cÄƒtre Parcul NaÈ›ional DunÄƒre-Drava.", "en": "Border city on the Drava river, gateway to the Danube-Drava National Park."},
    
    descriptionAdvanced: {
      "de": "Barcs liegt direkt am Ufer der Drau im SÃ¼den Ungarns und ist ein bedeutendes Tor zum Nationalpark Donau-Drau. Die Stadt ist geprÃ¤gt von der NÃ¤he zum Fluss, der hier die Grenze zu Kroatien bildet und fÃ¼r seine unberÃ¼hrte Natur bekannt ist. Das DrÃ¡va-Heilbad von Barcs bietet mit seinem wertvollen Thermalwasser Erholung in einer ruhigen Grenzlandschaft. Ein kulturelles Highlight ist das DrÃ¡va-Museum, das die Natur- und Kulturgeschichte des Flusstals eindrucksvoll dokumentiert. Barcs ist ein Paradies fÃ¼r Angler, Kanufahrer und Radfahrer, die die Stille der AuenwÃ¤lder und die reiche Vogelwelt schÃ¤tzen. Die Stadt verbindet auf charmante Weise ungarische und kroatische KultureinflÃ¼sse am Ufer eines der saubersten FlÃ¼sse Europas.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt fÃ¼r den DrÃ¡va-Freistrand.", "Wichtiger Flusshafen und GrenzÃ¼bergang."], "hu": ["HÃ­res a drÃ¡vai szabadstrandjÃ¡rÃ³l.", "Fontos folyami kikÃ¶tÅ‘ Ã©s hatÃ¡rÃ¡tkelÅ‘."], "ro": ["Cunoscut pentru plaja liberÄƒ de pe Drava.", "Port fluvial È™i punct de trecere a frontierei important."], "en": ["Known for the Drava free beach.", "Important river port and border crossing."]},
  
    factsAdvanced: {
      "de": ["Barcs ist die 'Hauptstadt der Drau' und ein wichtiges Zentrum fÃ¼r Flusstourismus.", "Der Fluss Drau ist bei Barcs Teil eines grenzÃ¼berschreitenden BiosphÃ¤renreservats.", "Die Stadt beherbergt ein bedeutendes Bildungszentrum fÃ¼r Forst- und Wasserwirtschaft.", "Das Heilwasser von Barcs ist besonders reich an Natriumhydrogencarbonat."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "celldomolk",
    type: "city",
    parent: "HU-VA",
    coords: [17.15, 47.25],
    name: {"de": "CelldÃ¶mÃ¶lk", "hu": "CelldÃ¶mÃ¶lk", "ro": "CelldÃ¶mÃ¶lk", "en": "CelldÃ¶mÃ¶lk"},
    description: {"de": "Stadt am FuÃŸe des Berges SÃ¡g, bekannt fÃ¼r den Wallfahrtsort Kemenesalja.", "hu": "VÃ¡ros a SÃ¡g-hegy lÃ¡bÃ¡nÃ¡l, a kemenesaljai bÃºcsÃºjÃ¡rÃ³helyrÅ‘l ismert.", "ro": "OraÈ™ la poalele muntelui SÃ¡g, cunoscut pentru locul de pelerinaj Kemenesalja.", "en": "City at the foot of SÃ¡g Mountain, known for the Kemenesalja pilgrimage site."},
    
    descriptionAdvanced: {
      "de": "CelldÃ¶mÃ¶lk, am FuÃŸe des vulkanischen SÃ¡g-Berges gelegen, ist einer der bedeutendsten Wallfahrtsorte Westungarns. Die prachtvolle barocke Maria-Himmelfahrt-Kirche und das angrenzende Benediktinerkloster ziehen seit Jahrhunderten Pilger an. Ein einzigartiges Naturwunder ist der SÃ¡g-Berg selbst, ein erloschener Vulkan, dessen erstarrte KraterwÃ¤nde einen faszinierenden Einblick in die Erdgeschichte bieten. Im Kemenes-Vulkanpark kÃ¶nnen Besucher alles Ã¼ber die vulkanischen AktivitÃ¤ten der Region und der Welt erfahren. Die Stadt bietet zudem Entspannung im modernen VulkÃ¡n-Heilbad, das direkt am FuÃŸe des Berges liegt. CelldÃ¶mÃ¶lk verbindet auf beeindruckende Weise tiefe ReligiositÃ¤t mit spektakulÃ¤ren NaturphÃ¤nomenen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der Berg SÃ¡g ist ein erloschener Vulkan.", "Beherbergt das Kemenes Vulkanpark-Museum."], "hu": ["A SÃ¡g-hegy egy kialudt vulkÃ¡ni tanÃºhegy.", "Itt talÃ¡lhatÃ³ a Kemenes VulkÃ¡npark mÃºzeuma."], "ro": ["Muntele SÃ¡g este un vulcan stins.", "GÄƒzduieÈ™te muzeul Parcului Vulcanic Kemenes."], "en": ["SÃ¡g Mountain is an extinct volcanic hill.", "Home to the Kemenes Volcano Park museum."]},
  
    factsAdvanced: {
      "de": ["Die Wallfahrtskirche von CelldÃ¶mÃ¶lk beherbergt eine Gnadenstatue aus dem 18. Jahrhundert.", "Der SÃ¡g-Berg ist ein bedeutendes geologisches Denkmal und Weinbaugebiet.", "Der Kemenes-Vulkanpark ist das einzige vulkanologische Besucherzentrum in Ungarn.", "In der Stadt wurde im 18. Jahrhundert eine der ersten Druckereien der Region gegrÃ¼ndet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "kormend",
    type: "city",
    parent: "HU-VA",
    coords: [16.61, 47.01],
    name: {"de": "KÃ¶rmend", "hu": "KÃ¶rmend", "ro": "KÃ¶rmend", "en": "KÃ¶rmend"},
    description: {"de": "Stadt an der Raab, berÃ¼hmt fÃ¼r das Schloss BatthyÃ¡ny-Strattmann.", "hu": "RÃ¡ba-parti vÃ¡ros, a BatthyÃ¡nyâ€“Strattmann-kastÃ©lyrÃ³l hÃ­res.", "ro": "OraÈ™ pe rÃ¢ul RÃ¡ba, faimos pentru Castelul BatthyÃ¡ny-Strattmann.", "en": "City on the RÃ¡ba river, famous for the BatthyÃ¡ny-Strattmann Castle."},
    
    descriptionAdvanced: {
      "de": "KÃ¶rmend, an der Raab (RÃ¡ba) gelegen, ist vor allem fÃ¼r das prachtvolle Schloss BatthyÃ¡ny bekannt, eines der bedeutendsten Barock-Ensembles Ungarns. Das Schloss war Ã¼ber Jahrhunderte der Hauptsitz der mÃ¤chtigen Familie BatthyÃ¡ny und beherbergt heute ein Museum sowie eine wertvolle Bibliothek. Der weitlÃ¤ufigen Schlosspark mit seinen jahrhundertealten BÃ¤umen ist eines der wertvollsten Arboretums des Landes. KÃ¶rmend blickt auf eine reiche Geschichte als Grenzstadt und Handelszentrum zurÃ¼ck, was sich in der Architektur des Zentrums widerspiegelt. Die Stadt ist zudem fÃ¼r ihre erfolgreiche Basketballtradition und ihre lebendige Sportkultur bekannt. KÃ¶rmend bietet eine elegante AtmosphÃ¤re, die von adeliger Geschichte und der natÃ¼rlichen SchÃ¶nheit des Raab-Tals geprÃ¤gt ist.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Schloss beherbergt ein Schuhmuseum.", "Umgeben von einem prÃ¤chtigen Schlosspark."], "hu": ["A kastÃ©lyban cipÅ‘tÃ¶rtÃ©neti mÃºzeum mÅ±kÃ¶dik.", "PompÃ¡s kastÃ©lypark veszi kÃ¶rÃ¼l."], "ro": ["Castelul gÄƒzduieÈ™te un muzeu al pantofilor.", "ÃŽnconjurat de un parc magnific al castelului."], "en": ["The castle houses a shoe museum.", "Surrounded by a magnificent castle park."]},
  
    factsAdvanced: {
      "de": ["Das Schloss BatthyÃ¡ny in KÃ¶rmend besitzt eine der wertvollsten historischen Waffensammlungen des Landes.", "Der Schlosspark beherbergt Exemplare von Platanen, die bereits Ã¼ber 200 Jahre alt sind.", "KÃ¶rmend wird oft als 'Hauptstadt der ungarischen Basketballkultur' bezeichnet.", "Die Stadt liegt an der historischen PoststraÃŸe zwischen Wien und Triest."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "jaki-templom",
    type: "landmark",
    parent: "HU-VA",
    coords: [16.58, 47.14],
    name: {"de": "Kirche von JÃ¡k", "hu": "JÃ¡ki templom", "ro": "Biserica din JÃ¡k", "en": "Church of JÃ¡k"},
    description: {"de": "Meisterwerk der romanischen Architektur in Ungarn mit berÃ¼hmtem Portal.", "hu": "A magyarorszÃ¡gi romÃ¡n stÃ­lusÃº Ã©pÃ­tÃ©szet remekmÅ±ve, hÃ­res bÃ©lletes kapujÃ¡val.", "ro": "CapodoperÄƒ a arhitecturii romanice din Ungaria cu celebrul sÄƒu portal.", "en": "A masterpiece of Romanesque architecture in Hungary with its famous portal."},
    
    descriptionAdvanced: {
      "de": "Die Kirche von JÃ¡k ist das herausragendste Denkmal der romanischen Architektur in Ungarn und ein Symbol christlicher Kunst im Karpatenbecken. GegrÃ¼ndet im 13. Jahrhundert als Abteikirche des Benediktinerordens, beeindruckt sie vor allem durch ihr prachtvolles Stufenportal mit seinen reichen Steinmetzarbeiten. Die monumentale Doppelturmfassade und die schlichte Erhabenheit des Innenraums zeugen von der Meisterschaft mittelalterlicher Baumeister. Die Kirche steht erhaben auf einem HÃ¼gel und ist schon von weitem sichtbar, was ihre Bedeutung als spirituelles Zentrum unterstreicht. Direkt neben der Kirche befindet sich die St.-Jakobus-Kapelle, die ebenfalls ein Juwel romanischer Baukunst ist. JÃ¡k ist ein Ort von zeitloser SchÃ¶nheit, der Besucher tief in die religiÃ¶se Geschichte Ungarns eintauchen lÃ¤sst.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Im 13. Jahrhundert als Benediktinerklosterkirche erbaut.", "Das Portal ist reich mit Skulpturen verziert."], "hu": ["A 13. szÃ¡zadban Ã©pÃ¼lt bencÃ©s apÃ¡tsÃ¡gi templomkÃ©nt.", "Kapuzata gazdagon dÃ­szÃ­tett szobrokkal."], "ro": ["ConstruitÄƒ Ã®n secolul al XIII-lea ca bisericÄƒ a abaÈ›iei benedictine.", "Portalul este bogat decorat cu sculpturi."], "en": ["Built in the 13th century as a Benedictine abbey church.", "The portal is richly decorated with sculptures."]},
  
    factsAdvanced: {
      "de": ["Die Abteikirche von JÃ¡k wurde im Jahr 1256 zu Ehren des Heiligen Georg geweiht.", "Das Hauptportal der Kirche gilt als eines der schÃ¶nsten romanischen Portale in ganz Europa.", "Die Kirche ist die GrabstÃ¤tte der bedeutenden Adelsfamilie JÃ¡k.", "Nach einer umfangreichen Restaurierung erstrahlen die Skulpturen und Steinmetzarbeiten wieder im alten Glanz."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nyirbatori-templom",
    type: "landmark",
    parent: "HU-SZ",
    coords: [22.13, 47.84],
    name: {"de": "Reformierte Kirche NyÃ­rbÃ¡tor", "hu": "NyÃ­rbÃ¡tori reformÃ¡tus templom", "ro": "Biserica reformatÄƒ din NyÃ­rbÃ¡tor", "en": "NyÃ­rbÃ¡tor Reformed Church"},
    description: {"de": "SpÃ¤tgotische Hallenkirche mit beeindruckendem NetzgewÃ¶lbe.", "hu": "KÃ©sÅ‘ gÃ³tikus csarnoktemplom lenyÅ±gÃ¶zÅ‘ hÃ¡lÃ³boltozattal.", "ro": "BisericÄƒ halÄƒ Ã®n stil gotic tÃ¢rziu cu o boltÄƒ Ã®n reÈ›ea impresionantÄƒ.", "en": "Late Gothic hall church with an impressive net vault."},
    
    descriptionAdvanced: {
      "de": "Die reformierte Kirche von NyÃ­rbÃ¡tor ist eines der bedeutendsten spÃ¤tgotischen Bauwerke in Ostungarn und eng mit der mÃ¤chtigen Familie BÃ¡thory verbunden. Das GebÃ¤ude beeindruckt durch sein enormes einschiffiges Halleninnere und das kunstvolle NetzgewÃ¶lbe, das als Meisterwerk der ungarischen Gotik gilt. Direkt neben der Kirche befindet sich der markante hÃ¶lzerne Glockenturm, der grÃ¶ÃŸte und Ã¤lteste seiner Art im Land. NyÃ­rbÃ¡tor war im Mittelalter ein spirituelles Zentrum der Region und beherbergt zudem eine prachtvolle katholische Minoritenkirche mit barocker Ausstattung. Die Geschichte der BÃ¡thorys, die sowohl Helden als auch sagenumwobene Gestalten hervorbrachten, ist in der ganzen Stadt spÃ¼rbar. Ein Besuch in NyÃ­rbÃ¡tor bietet tiefe Einblicke in die Architektur und die Mythenwelt des ungarischen Nordostens.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Besitzt einen hÃ¶lzernen Glockenturm aus dem 17. Jahrhundert.", "Einstige GrabstÃ¤tte der Familie BÃ¡thori."], "hu": ["17. szÃ¡zadi fa harangtoronnyal rendelkezik.", "A BÃ¡thori csalÃ¡d egykori temetkezÃ©si helye."], "ro": ["Are o clopotniÈ›Äƒ din lemn din secolul al XVII-lea.", "Fostul loc de Ã®nmormÃ¢ntare al familiei BÃ¡thori."], "en": ["Has a wooden bell tower from the 17th century.", "Former burial place of the BÃ¡thori family."]},
  
    factsAdvanced: {
      "de": ["Die Kirche wurde Ende des 15. Jahrhunderts von IstvÃ¡n BÃ¡thory nach der Schlacht von Brotfield errichtet.", "Der hÃ¶lzerne Glockenturm stammt aus dem Jahr 1640 und ist ein Wahrzeichen der Region.", "In der Kirche befinden sich wertvolle Renaissance-GrabdenkmÃ¤ler der Familie BÃ¡thory.", "NyÃ­rbÃ¡tor feiert jÃ¤hrlich ein groÃŸes Renaissance-Festival mit historischen KostÃ¼men."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "edelenyi-kastely",
    type: "landmark",
    parent: "HU-BZ",
    coords: [20.74, 48.30],
    name: {"de": "Schloss EdelÃ©ny", "hu": "EdelÃ©nyi kastÃ©ly", "ro": "Castelul din EdelÃ©ny", "en": "EdelÃ©ny Palace"},
    description: {"de": "Eines der grÃ¶ÃŸten und prÃ¤chtigsten BarockschlÃ¶sser Ungarns.", "hu": "MagyarorszÃ¡g egyik legnagyobb Ã©s legpompÃ¡sabb barokk kastÃ©lya.", "ro": "Unul dintre cele mai mari È™i mai splendide castele baroce din Ungaria.", "en": "One of the largest and most magnificent Baroque palaces in Hungary."},
    
    descriptionAdvanced: {
      "de": "Das Schloss Lâ€™Huillier-Coburg in EdelÃ©ny ist eines der grÃ¶ÃŸten und prachtvollsten BarockschlÃ¶sser im Nordosten Ungarns. Das Bauwerk besticht durch seine enorme GrÃ¶ÃŸe und die sieben markanten ZwiebeltÃ¼rme, die ihm ein fast mÃ¤rchenhaftes Aussehen verleihen. Das absolute Highlight im Inneren sind die einzigartigen Wandmalereien von Ferenc Lieb aus dem 18. Jahrhundert, die das Leben des Adels in lebhaften Farben darstellen. Das Schloss wurde in den letzten Jahren aufwendig restauriert und dient heute als modernes Kulturzentrum mit interaktiven Ausstellungen. Es liegt inmitten eines weiten Parks am Ufer des Flusses BÃ³dva und strahlt eine vornehme Ruhe aus. EdelÃ©ny ist ein Muss fÃ¼r jeden Liebhaber barocker Architektur und aristokratischer Wohnkultur.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt fÃ¼r seine einzigartigen Rokoko-Wandmalereien.", "Auf einer Insel im Fluss BÃ³dva erbaut."], "hu": ["EgyedÃ¼lÃ¡llÃ³ rokokÃ³ falfestmÃ©nyeirÅ‘l ismert.", "A BÃ³dva folyÃ³ szigetÃ©n Ã©pÃ¼lt fel."], "ro": ["Cunoscut pentru picturile sale murale unice Ã®n stil rococo.", "Construit pe o insulÄƒ a rÃ¢ului BÃ³dva."], "en": ["Known for its unique Rococo wall paintings.", "Built on an island in the BÃ³dva River."]},
  
    factsAdvanced: {
      "de": ["Das Schloss in EdelÃ©ny ist das siebtgrÃ¶ÃŸte SchlossgebÃ¤ude in Ungarn.", "Es beherbergt den grÃ¶ÃŸten zusammenhÃ¤ngenden Zyklus profaner Barockfresken des Landes.", "Das Schloss wurde im 18. Jahrhundert fÃ¼r den lothringischen General Jean-FranÃ§ois L'Huillier erbaut.", "Eine Besonderheit ist der interaktive 3D-Film, der die Geschichte des Schlosses fÃ¼r Besucher lebendig macht."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "csakvari-kastely",
    type: "landmark",
    parent: "HU-FE",
    coords: [18.46, 47.39],
    name: {"de": "Schloss CsÃ¡kvÃ¡r", "hu": "CsÃ¡kvÃ¡ri EsterhÃ¡zy-kastÃ©ly", "ro": "Castelul EsterhÃ¡zy din CsÃ¡kvÃ¡r", "en": "CsÃ¡kvÃ¡r EsterhÃ¡zy Palace"},
    description: {"de": "Klassizistisches Schloss der Familie EsterhÃ¡zy im VÃ©rtes-Gebirge.", "hu": "Az EsterhÃ¡zy csalÃ¡d klasszicista kastÃ©lya a VÃ©rtes lÃ¡bÃ¡nÃ¡l.", "ro": "Castelul clasicist al familiei EsterhÃ¡zy la poalele munÈ›ilor VÃ©rtes.", "en": "Neoclassical palace of the EsterhÃ¡zy family at the foot of the VÃ©rtes."},
    
    descriptionAdvanced: {
      "de": "Das EsterhÃ¡zy-Schloss in CsÃ¡kvÃ¡r ist ein herausragendes Beispiel klassizistischer Architektur im VÃ©rtes-Gebirge. Das ehemalige herrschaftliche Anwesen war Ã¼ber Jahrhunderte ein Zentrum fÃ¼r Kultur und Pferdezucht der Familie EsterhÃ¡zy. Das Schloss beeindruckt durch seine harmonischen Proportionen und die monumentale SÃ¤ulenhalle im Zentrum. Umgeben ist das GebÃ¤ude von einem der schÃ¶nsten englischen GÃ¤rten Ungarns, der seltene Baumarten und romantische Pavillons beherbergt. Heute ist in einem Teil des Schlosses ein Krankenhaus untergebracht, wÃ¤hrend die ReprÃ¤sentationsrÃ¤ume und der Park fÃ¼r Besucher zugÃ¤nglich sind. CsÃ¡kvÃ¡r ist zudem fÃ¼r seine traditionsreiche TÃ¶pferkunst bekannt, die im Ã¶rtlichen Museum dokumentiert wird.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["FrÃ¼her ein bedeutendes kulturelles Zentrum.", "Umgeben von einem groÃŸen englischen Landschaftsgarten."], "hu": ["Egykor jelentÅ‘s kulturÃ¡lis kÃ¶zpont volt.", "Hatalmas angolpark veszi kÃ¶rÃ¼l."], "ro": ["OdatÄƒ un centru cultural important.", "ÃŽnconjurat de un imens parc englezesc."], "en": ["Once a significant cultural center.", "Surrounded by a vast English landscape garden."]},
  
    factsAdvanced: {
      "de": ["Das Schloss CsÃ¡kvÃ¡r war einst die bevorzugte Sommerresidenz der grÃ¤flichen Linie der Familie EsterhÃ¡zy.", "Der Schlosspark erstreckt sich Ã¼ber 40 Hektar und ist ein geschÃ¼tztes Naturdenkmal.", "In CsÃ¡kvÃ¡r wurde im 19. Jahrhundert die berÃ¼hmte ungarische Pferderasse 'Nonius' gezÃ¼chtet.", "Die Stadt liegt im Herzen des VÃ©rtes-Gebirges und ist ein Tor zum Nationalpark."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "nadasdy-kastely",
    type: "landmark",
    parent: "HU-VE",
    coords: [18.22, 47.21],
    name: {"de": "Schloss NÃ¡dasdy", "hu": "NÃ¡dasdy-kastÃ©ly", "ro": "Castelul NÃ¡dasdy", "en": "NÃ¡dasdy Mansion"},
    description: {"de": "Einzigartiges neugotisches Schloss im Tudor-Stil in NÃ¡dasdladÃ¡ny.", "hu": "EgyedÃ¼lÃ¡llÃ³ neogÃ³tikus, Tudor-stÃ­lusÃº kastÃ©ly NÃ¡dasdladÃ¡nyban.", "ro": "Castel neogotic unic Ã®n stil Tudor Ã®n NÃ¡dasdladÃ¡ny.", "en": "Unique Neo-Gothic Tudor-style mansion in NÃ¡dasdladÃ¡ny."},
    
    descriptionAdvanced: {
      "de": "Das Schloss NÃ¡dasdy in NÃ¡dasdladÃ¡ny ist ein einzigartiges architektonisches Juwel, das im Tudor-Stil erbaut wurde und an englische Herrensitze erinnert. Das neugotische Schloss wurde im 19. Jahrhundert fÃ¼r Graf Ferenc NÃ¡dasdy als Liebesbeweis fÃ¼r seine Frau Ilona Zichy errichtet. Besonders beeindruckend ist der prachtvolle Ahnensaal mit seinen geschnitzten Holzdecken und den PortrÃ¤ts der Familie BatthyÃ¡ny und NÃ¡dasdy. Das Schloss verfÃ¼gte bereits bei seinem Bau Ã¼ber modernste Technik wie Zentralheizung und elektrisches Licht, was damals eine Sensation war. Umgeben von einem idyllischen englischen Garten, strahlt die Anlage eine romantische und zugleich mystische AtmosphÃ¤re aus. NÃ¡dasdladÃ¡ny bietet einen faszinierenden Einblick in die eklektische Architektur und den aristokratischen Lebensstil des ungarischen Historismus.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt fÃ¼r den prachtvollen Ahnen-Saal.", "Eines der romantischsten SchlÃ¶sser Ungarns."], "hu": ["HÃ­res a pompÃ¡s ÅsÃ¶k csarnokÃ¡rÃ³l.", "MagyarorszÃ¡g egyik legromantikusabb kastÃ©lya."], "ro": ["Cunoscut pentru splendida salÄƒ a strÄƒmoÈ™ilor.", "Unul dintre cele mai romantice castele din Ungaria."], "en": ["Known for the magnificent Ancestors' Hall.", "One of the most romantic mansions in Hungary."]},
  
    factsAdvanced: {
      "de": ["Das Schloss NÃ¡dasdy ist das einzige bedeutende Bauwerk im Tudor-Stil in ganz Ungarn.", "Im Ahnensaal hÃ¤ngen lebensgroÃŸe PortrÃ¤ts der Vorfahren, die in die WandtÃ¤felung eingelassen sind.", "Das GebÃ¤ude diente aufgrund seiner besonderen AtmosphÃ¤re bereits als Filmkulisse fÃ¼r internationale Produktionen.", "Das Schloss wurde in den letzten Jahren originalgetreu saniert und ist fÃ¼r Besucher zugÃ¤nglich."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "deg-kastely",
    type: "landmark",
    parent: "HU-FE",
    coords: [18.44, 46.88],
    name: {"de": "Schloss DÃ©g", "hu": "DÃ©gi Festetics-kastÃ©ly", "ro": "Castelul Festetics din DÃ©g", "en": "DÃ©g Festetics Palace"},
    description: {"de": "Eines der bedeutendsten klassizistischen SchlÃ¶sser mit dem grÃ¶ÃŸten englischen Garten.", "hu": "Az orszÃ¡g egyik legjelentÅ‘sebb klasszicista kastÃ©lya a legnagyobb angolparkkal.", "ro": "Unul dintre cele mai importante castele clasiciste cu cel mai mare parc englezesc.", "en": "One of the most significant Neoclassical palaces with the largest English garden."},
    
    descriptionAdvanced: {
      "de": "Das Festetics-Schloss in DÃ©g ist eines der frÃ¼hesten und bedeutendsten DenkmÃ¤ler der klassizistischen Architektur in Ungarn. Entworfen vom berÃ¼hmten Architekten MihÃ¡ly Pollack, besticht das Bauwerk durch seine edle Schlichtheit und die monumentale dorische SÃ¤ulenhalle. Einzigartig ist das sogenannte 'HollÃ¤nderhaus', ein rotes BacksteingebÃ¤ude auf einer Insel im Schlosspark, das einst als QuarantÃ¤nestation diente. Das Schloss war Ã¼ber lange Zeit ein geheimes Zentrum der ungarischen Freimaurerei, woran heute noch architektonische Details erinnern. Der weitlÃ¤ufige englische Garten mit seinem verzweigten Kanalsystem ist einer der grÃ¶ÃŸten und romantischsten des Landes. DÃ©g bietet eine AtmosphÃ¤re von erhabener Ruhe und geheimnisvoller Geschichte inmitten der HÃ¼gellandschaft von FejÃ©r.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt fÃ¼r das 'HollÃ¤nderhaus' im Park.", "Ein wichtiges Zentrum der ungarischen Freimaurerei."], "hu": ["HÃ­res a parkban talÃ¡lhatÃ³ Hollandi-hÃ¡zrÃ³l.", "A magyar szabadkÅ‘mÅ±vessÃ©g egyik kÃ¶zpontja volt."], "ro": ["Cunoscut pentru 'Casa OlandezÄƒ' din parc.", "Un centru important al masoneriei maghiare."], "en": ["Known for the 'Dutch House' in the park.", "An important center of Hungarian Freemasonry."]},
  
    factsAdvanced: {
      "de": ["Das Schloss DÃ©g beherbergte einst das bedeutendste Freimaurer-Archiv Mitteleuropas.", "Das 'HollÃ¤nderhaus' auf der Parkinsel ist ein landesweit einzigartiges Baudenkmal.", "Der Schlosspark besitzt das grÃ¶ÃŸte kÃ¼nstliche Seensystem ungarischer Gartenanlagen.", "Das Schloss wurde nach umfangreichen Restaurierungsarbeiten im Jahr 2022 wiedererÃ¶ffnet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tiszadob-kastely",
    type: "landmark",
    parent: "HU-HB",
    coords: [21.17, 47.92],
    name: {"de": "Schloss AndrÃ¡ssy", "hu": "Tiszadobi AndrÃ¡ssy-kastÃ©ly", "ro": "Castelul AndrÃ¡ssy din Tiszadob", "en": "Tiszadob AndrÃ¡ssy Castle"},
    description: {"de": "MÃ¤rchenhaftes historistisches Schloss an der TheiÃŸ mit Labyrinth.", "hu": "Mesebeli historizÃ¡lÃ³ kastÃ©ly a Tisza partjÃ¡n, labirintussal.", "ro": "Castel istoric de basm pe malul Tisei, cu un labirint.", "en": "Fairytale-like Historicist castle on the Tisza with a labyrinth."},
    
    descriptionAdvanced: {
      "de": "Das Schloss AndrÃ¡ssy in Tiszadob ist ein mÃ¤rchenhaftes Bauwerk am Ufer der TheiÃŸ, das durch seine eklektische Architektur mit Elementen der Gotik und Renaissance besticht. Das Schloss wurde Ende des 19. Jahrhunderts fÃ¼r Graf Gyula AndrÃ¡ssy erbaut und sollte der Ãœberlieferung nach die vier Jahreszeiten, die 12 Monate, die 52 Wochen und die 365 Tage im Jahr widerspiegeln. Ein absolutes Highlight ist der kunstvoll angelegte Buchsbaum-Irrgarten im Schlosspark, der einer der grÃ¶ÃŸten und schÃ¶nsten Ungarns ist. Das Schloss thront auf einem Hochufer und bietet fantastische Ausblicke Ã¼ber die weiten Flusslandschaften der TheiÃŸ. Die romantischen TÃ¼rmchen und verwinkelten Fassaden verleihen dem GebÃ¤ude den Charakter eines echten Zauberschlosses. Tiszadob ist ein Ort, an dem sich aristokratische TrÃ¤ume und die wilde Natur des Flusstals begegnen.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Die Architektur ist von franzÃ¶sischen SchlÃ¶ssern inspiriert.", "Hat einen berÃ¼hmten Buchsbaum-Irrgarten."], "hu": ["Ã‰pÃ­tÃ©szetÃ©t francia kastÃ©lyok ihlettÃ©k.", "HÃ­res a bukszus-labirintusÃ¡rÃ³l."], "ro": ["Arhitectura sa este inspiratÄƒ de castelele franceze.", "Are un faimos labirint de cimiÈ™ir."], "en": ["Its architecture was inspired by French castles.", "Has a famous boxwood labyrinth."]},
  
    factsAdvanced: {
      "de": ["Das Schloss besitzt exakt 4 TÃ¼rme, 12 EingÃ¤nge, 52 Zimmer und 365 Fenster.", "Der Irrgarten im Park ist ein einzigartiges Beispiel historischer Gartenkunst in Ungarn.", "Graf Gyula AndrÃ¡ssy war ein bedeutender Staatsmann und MinisterprÃ¤sident der k.u.k. Monarchie.", "In dem Schloss finden regelmÃ¤ÃŸig internationale Kultur- und Kunstfestivals statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "fuzerradvany-kastely",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.53, 48.48],
    name: {"de": "Schloss FÃ¼zÃ©rradvÃ¡ny", "hu": "FÃ¼zÃ©rradvÃ¡nyi KÃ¡rolyi-kastÃ©ly", "ro": "Castelul KÃ¡rolyi din FÃ¼zÃ©rradvÃ¡ny", "en": "FÃ¼zÃ©rradvÃ¡ny KÃ¡rolyi Palace"},
    description: {"de": "PrÃ¤chtiges Schloss im eklektischen Stil mit riesigem Landschaftspark.", "hu": "PompÃ¡s eklektikus kastÃ©ly hatalmas tÃ¡jkÃ©pi kerttel a ZemplÃ©nben.", "ro": "Castel splendid Ã®n stil eclectic cu un imens parc peisagistic.", "en": "Magnificent eclectic-style palace with a huge landscape park in ZemplÃ©n."},
    
    descriptionAdvanced: {
      "de": "Das Schloss KÃ¡rolyi in FÃ¼zÃ©rradvÃ¡ny ist ein prachtvolles Beispiel des Historismus im ZemplÃ©n-Gebirge, das vor allem durch sein italienisches Flair besticht. UrsprÃ¼nglich ein Barockbau, wurde das Schloss im 19. Jahrhundert im Stil der Neorenaissance umgestaltet, wobei originale Bauelemente aus italienischen Palazzi integriert wurden. Besucher sind fasziniert von den Marmorkaminen, den geschnitzten HolztÃ¼ren und den prachtvollen SÃ¤len, die ein StÃ¼ck Italien in den Norden Ungarns bringen. Das Schloss ist von einem der bedeutendsten Landschaftsparks des Landes umgeben, der fÃ¼r seine riesigen Platanen und seltenen NadelhÃ¶lzer berÃ¼hmt ist. In den 1930er Jahren fungierte das Schloss als elegantes Luxushotel und zog die High Society der Monarchie an. Heute bietet das renovierte Schloss faszinierende Einblicke in die Welt des ungarischen Hochadels.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bekannt fÃ¼r sein italienisches Renaissance-Interieur.", "Der Park beherbergt jahrhundertealte Platanen."], "hu": ["HÃ­res itÃ¡liai reneszÃ¡nsz belsÅ‘ tereirÅ‘l.", "A parkban Ã©vszÃ¡zados platÃ¡nfÃ¡k talÃ¡lhatÃ³k."], "ro": ["Cunoscut pentru interiorul sÄƒu Ã®n stil renascentist italian.", "Parcul gÄƒzduieÈ™te platani seculari."], "en": ["Known for its Italian Renaissance interiors.", "The park is home to centuries-old plane trees."]},
  
    factsAdvanced: {
      "de": ["Das Schloss beherbergt zahlreiche originale Renaissance-Details, die direkt aus Italien importiert wurden.", "Der Park von FÃ¼zÃ©rradvÃ¡ny beherbergt die Ã¤ltesten und grÃ¶ÃŸten Platanen Ungarns.", "Die Burganlage diente in der Zwischenkriegszeit als Drehort fÃ¼r zahlreiche Filme.", "Vom Schlossturm aus hat man einen weiten Blick bis hin zur Burg FÃ¼zÃ©r."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szabadkigyos-kastely",
    type: "landmark",
    parent: "HU-BE",
    coords: [21.08, 46.61],
    name: {"de": "Schloss Wenckheim", "hu": "SzabadkÃ­gyÃ³si Wenckheim-kastÃ©ly", "ro": "Castelul Wenckheim din SzabadkÃ­gyÃ³s", "en": "SzabadkÃ­gyÃ³s Wenckheim Palace"},
    description: {"de": "Meisterwerk von MiklÃ³s Ybl im eklektischen und Neorenaissance-Stil.", "hu": "Ybl MiklÃ³s remekmÅ±ve eklektikus Ã©s neoreneszÃ¡nsz stÃ­lusban.", "ro": "CapodoperÄƒ a lui MiklÃ³s Ybl Ã®n stil eclectic È™i neorenascentist.", "en": "A masterpiece by MiklÃ³s Ybl in eclectic and Neo-Renaissance style."},
    
    descriptionAdvanced: {
      "de": "Das Schloss Wenckheim in SzabadkÃ­gyÃ³s ist eines der prÃ¤chtigsten eklektischen SchlÃ¶sser im SÃ¼dosten Ungarns, entworfen vom berÃ¼hmten Architekten MiklÃ³s Ybl. Das zwischen 1875 und 1879 errichtete Bauwerk besticht durch seine harmonische Architektur, die deutsche und franzÃ¶sische EinflÃ¼sse vereint. Einzigartig ist die symbolische Gestaltung des GebÃ¤udes mit seinen 365 Fenstern, 52 Zimmern und 12 EingÃ¤ngen, die den Kalender widerspiegeln. Das Schloss besitzt einen markanten Aussichtsturm und eine prachtvolle Kapelle, die die religiÃ¶se Bedeutung fÃ¼r die Familie Wenckheim unterstreicht. Der umliegende Park mit seinem kÃ¼nstlichen See und den seltenen Baumarten lÃ¤dt zu ausgiebigen SpaziergÃ¤ngen ein. SzabadkÃ­gyÃ³s ist ein leuchtendes Beispiel fÃ¼r die glanzvolle Ã„ra der ungarischen Schlossbaukunst am Ende des 19. Jahrhunderts.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Hat 365 Fenster, 52 Zimmer und 4 EingÃ¤nge (wie das Jahr).", "Umgeben von einem herrlichen Schlosspark."], "hu": ["365 ablaka, 52 szobÃ¡ja Ã©s 4 bejÃ¡rata van.", "GyÃ¶nyÃ¶rÅ± kastÃ©lypark veszi kÃ¶rÃ¼l."], "ro": ["Are 365 de ferestre, 52 de camere È™i 4 intrÄƒri.", "ÃŽnconjurat de un parc superb al castelului."], "en": ["Has 365 windows, 52 rooms, and 4 entrances.", "Surrounded by a beautiful castle park."]},
  
    factsAdvanced: {
      "de": ["Das Schloss wurde mit modernster Technik seiner Zeit, darunter eine Gasbeleuchtung, ausgestattet.", "Die Fassade des GebÃ¤udes ist mit aufwendigen Zierelementen und Wappen der Familie Wenckheim geschmÃ¼ckt.", "In dem Schloss befand sich eine der bedeutendsten privaten Bibliotheken des Komitats BÃ©kÃ©s.", "Das Schloss wurde im Jahr 2022 nach einer vollstÃ¤ndigen Rekonstruktion als Besucherzentrum neu erÃ¶ffnet."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "zsambek-romtemplom",
    type: "landmark",
    parent: "HU-PE",
    coords: [18.72, 47.55],
    name: {"de": "Kirchenruine von ZsÃ¡mbÃ©k", "hu": "ZsÃ¡mbÃ©ki romtemplom", "ro": "Biserica ruinÄƒ din ZsÃ¡mbÃ©k", "en": "ZsÃ¡mbÃ©k Church Ruins"},
    description: {"de": "Beeindruckende Ruine einer spÃ¤tromanisch-gotischen Basilika.", "hu": "KÃ©sÅ‘ romÃ¡n-kori Ã©s gÃ³tikus bazilika lenyÅ±gÃ¶zÅ‘ romjai.", "ro": "Ruinele impresionante ale unei bazilici Ã®n stil romanic tÃ¢rziu È™i gotic.", "en": "Impressive ruins of a late Romanesque and Gothic basilica."},
    
    descriptionAdvanced: {
      "de": "Die Kirchenruine von ZsÃ¡mbÃ©k ist eines der eindrucksvollsten und dramatischsten BaudenkmÃ¤ler des ungarischen Mittelalters. Die im 13. Jahrhundert errichtete spÃ¤tromanisch-frÃ¼hgotische Basilika wurde durch ein verheerendes Erdbeben im Jahr 1763 weitgehend zerstÃ¶rt. Die stehengebliebenen Mauern und die markanten DoppeltÃ¼rme ragen heute als steinerne Zeugen in den Himmel und bieten ein faszinierendes Bild verfallener Pracht. Die Ruine bewahrt meisterhafte Steinmetzarbeiten und Kapitelle, die den Ãœbergang der Stilepochen dokumentieren. Am FuÃŸe der Ruine befindet sich ein Lapidarium, in dem wertvolle architektonische Fragmente der einstigen Abtei ausgestellt sind. ZsÃ¡mbÃ©k ist ein Ort von groÃŸer spiritueller Kraft und ein beliebtes Ziel fÃ¼r Fotografen und Geschichtsinteressierte. Die Ruine dient zudem als stimmungsvolle Kulisse fÃ¼r sommerliche Freilichtkonzerte.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wurde durch ein Erdbeben im Jahr 1763 zerstÃ¶rt.", "Ein Symbol der mittelalterlichen ungarischen Architektur."], "hu": ["Az 1763-as fÃ¶ldrengÃ©s sorÃ¡n pusztult el.", "A kÃ¶zÃ©pkori magyar Ã©pÃ­tÃ©szet egyik jelkÃ©pe."], "ro": ["A fost distrusÄƒ de un cutremur Ã®n anul 1763.", "Un simbol al arhitecturii maghiare medievale."], "en": ["Destroyed by an earthquake in 1763.", "A symbol of medieval Hungarian architecture."]},
  
    factsAdvanced: {
      "de": ["Die Kirche wurde ursprÃ¼nglich fÃ¼r den PrÃ¤monstratenserorden erbaut.", "Das Erdbeben von 1763 war so stark, dass es die gesamte Region um ZsÃ¡mbÃ©k erschÃ¼tterte.", "Die Ruine gilt als das bedeutendste Denkmal des Ãœbergangsstils zwischen Romanik und Gotik in Ungarn.", "Von der AnhÃ¶he der Ruine hat man einen weiten Blick Ã¼ber das ZsÃ¡mbÃ©ker Becken."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szentendre-varazshegy",
    type: "landmark",
    parent: "HU-PE",
    coords: [19.04, 47.67],
    name: {"de": "VarÃ¡zsciki VÃ¶lgy", "hu": "VarÃ¡zsciki VÃ¶lgy", "ro": "VarÃ¡zsciki VÃ¶lgy", "en": "VarÃ¡zsciki Valley"},
    description: {"de": "Ein versteckter MÃ¤rchenpark und Erlebnispfad in Szentendre.", "hu": "Rejtett mesepark Ã©s Ã©lmÃ©nyÃ¶svÃ©ny SzentendrÃ©n.", "ro": "Un parc de basm ascuns È™i o potecÄƒ de aventurÄƒ Ã®n Szentendre.", "en": "A hidden fairytale park and adventure trail in Szentendre."},
    
    descriptionAdvanced: {
      "de": "Der Zauberberg (VarÃ¡zshegy) in Szentendre ist ein kreativer Erlebnisraum fÃ¼r Familien, der die Welt der MÃ¤rchen und Mythen mit der Kunst verbindet. Inmitten der malerischen Stadt Szentendre bietet dieser Ort interaktive Ausstellungen, bei denen Kinder und Erwachsene in phantastische Welten eintauchen kÃ¶nnen. Die Installationen nutzen Lichteffekte, Klangwelten und kÃ¼nstlerische Objekte, um die Phantasie der Besucher anzuregen. Es ist ein Ort des Staunens, der zeigt, wie vielfÃ¤ltig die kulturelle Szene der 'Stadt der KÃ¼nstler' ist. RegelmÃ¤ÃŸige Workshops laden dazu ein, selbst kreativ zu werden und kleine Kunstwerke zu erschaffen. Der Zauberberg ist eine wunderbare ErgÃ¤nzung zu den klassischen Museen der Stadt und bietet ein modernes, spielerisches Kulturerlebnis.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Einzigartige Installationen aus Naturmaterialien.", "Ideal fÃ¼r Familien mit kleinen Kindern."], "hu": ["EgyedÃ¼lÃ¡llÃ³ installÃ¡ciÃ³k termÃ©szetes anyagokbÃ³l.", "IdeÃ¡lis kisgyermekes csalÃ¡dok szÃ¡mÃ¡ra."], "ro": ["InstalaÈ›ii unice din materiale naturale.", "Ideal pentru familii cu copii mici."], "en": ["Unique installations from natural materials.", "Ideal for families with young children."]},
  
    factsAdvanced: {
      "de": ["Der Zauberberg ist ein modernes interaktives Zentrum fÃ¼r zeitgenÃ¶ssische Kunstvermittlung.", "Der Ort ist besonders auf die BedÃ¼rfnisse und Interessen von Kindern ausgerichtet.", "RegelmÃ¤ÃŸig finden hier MÃ¤rchenlesungen und theatralische VorfÃ¼hrungen statt.", "Das Zentrum befindet sich in einem historischen GebÃ¤ude, das modern umgestaltet wurde."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "balatonalmadi-strand",
    type: "landmark",
    parent: "HU-VE",
    coords: [18.02, 47.03],
    name: {"de": "Strand BalatonalmÃ¡di", "hu": "BalatonalmÃ¡di strand", "ro": "Plaja BalatonalmÃ¡di", "en": "BalatonalmÃ¡di Beach"},
    description: {"de": "Gepflegter Strand am Nordostufer des Plattensees.", "hu": "Gondozott strand a Balaton Ã©szakkeleti partjÃ¡n.", "ro": "PlajÄƒ bine Ã®ntreÈ›inutÄƒ pe malul de nord-est al Lacului Balaton.", "en": "Well-kept beach on the northeastern shore of Lake Balaton."},
    
    descriptionAdvanced: {
      "de": "Der Strand von BalatonalmÃ¡di ist einer der beliebtesten und am besten ausgestatteten BadeplÃ¤tze am Nordostufer des Plattensees. Mit seinen weitlÃ¤ufigen RasenflÃ¤chen, den schattenspendenden alten BÃ¤umen und dem klaren Wasser bietet er ideale Bedingungen fÃ¼r einen entspannten Sommertag. Besonders attraktiv fÃ¼r Familien ist der flach abfallende Uferbereich und die Vielzahl an SpielplÃ¤tzen und SportmÃ¶glichkeiten. BalatonalmÃ¡di ist zudem fÃ¼r seine markanten roten Sandsteinfelsen bekannt, die dem Ort ein besonderes geologisches GeprÃ¤ge geben. Am Strand finden im Sommer regelmÃ¤ÃŸig Sportwettbewerbe und Unterhaltungsprogramme statt, die fÃ¼r eine lebendige UrlaubsatmosphÃ¤re sorgen. Die NÃ¤he zum Bahnhof und zur Promenade macht den Strand besonders leicht erreichbar und komfortabel.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["GroÃŸe Liegewiesen und Schatten spendende BÃ¤ume.", "Bietet einen weiten Blick Ã¼ber den See."], "hu": ["Nagy fÃ¼ves terÃ¼let Ã©s Ã¡rnyas fÃ¡k vÃ¡rjÃ¡k a strandolÃ³kat.", "SzÃ©p kilÃ¡tÃ¡st nyÃºjt a tÃ³ra."], "ro": ["Zone largi cu iarbÄƒ È™i copaci umbroÈ™i.", "OferÄƒ o vedere frumoasÄƒ asupra lacului."], "en": ["Large grassy areas and shady trees.", "Offers a beautiful view over the lake."]},
  
    factsAdvanced: {
      "de": ["BalatonalmÃ¡di besitzt einen der grÃ¶ÃŸten und gepflegtesten StrÃ¤nde am Nordufer des Sees.", "Die Region ist berÃ¼hmt fÃ¼r ihren roten Perm-Sandstein, der auch fÃ¼r die Gestaltung des Strandes genutzt wurde.", "Vom Ufer aus hat man einen fantastischen Blick auf das SÃ¼dufer und den Yachthafen.", "Der Strand trÃ¤gt seit Jahren die 'Blaue Welle'-Flagge fÃ¼r exzellente WasserqualitÃ¤t und Service."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "keszthely-strand",
    type: "landmark",
    parent: "HU-ZA",
    coords: [17.25, 46.76],
    name: {"de": "StÃ¤dtischer Strand Keszthely", "hu": "Keszthelyi vÃ¡rosi strand", "ro": "Plaja municipalÄƒ Keszthely", "en": "Keszthely City Beach"},
    description: {"de": "Historischer Strand mit dem ikonischen InselbadgebÃ¤ude.", "hu": "TÃ¶rtÃ©nelmi strand az ikonikus SzigetfÃ¼rdÅ‘ Ã©pÃ¼letÃ©vel.", "ro": "PlajÄƒ istoricÄƒ cu clÄƒdirea iconicÄƒ SzigetfÃ¼rdÅ‘.", "en": "Historic beach with the iconic SzigetfÃ¼rdÅ‘ island bath building."},
    
    descriptionAdvanced: {
      "de": "Der Stadtstrand von Keszthely ist der traditionsreichste und am schÃ¶nsten gestaltete Badeplatz am Westbecken des Plattensees. Besonders markant ist das historische Inselbad (SzigetfÃ¼rdÅ‘), ein prachtvoller Holzbau aus dem 19. Jahrhundert, der dem Strand eine nostalgische Eleganz verleiht. Der Strand bietet weitlÃ¤ufige Liegewiesen, gepflegte Promenaden und eine Vielzahl an Sport- und FreizeitmÃ¶glichkeiten fÃ¼r alle Altersklassen. Das flache, saubere Wasser und der Blick auf die Berge des Balaton-Oberlandes machen das Baden hier zu einem besonderen Genuss. Keszthely verbindet an seinem Strand auf einzigartige Weise kaiserliche Badetradition mit modernem Urlaubsstandard.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Das Inselbad wurde im 19. Jahrhundert erbaut.", "Bietet vielfÃ¤ltige Sport- und FreizeitmÃ¶glichkeiten."], "hu": ["A SzigetfÃ¼rdÅ‘ a 19. szÃ¡zadban Ã©pÃ¼lt.", "VÃ¡ltozatos sport- Ã©s szabadidÅ‘s lehetÅ‘sÃ©geket kÃ­nÃ¡l."], "ro": ["Baia insularÄƒ a fost construitÄƒ Ã®n secolul al XIX-lea.", "OferÄƒ diverse oportunitÄƒÈ›i de sport È™i agrement."], "en": ["The island bath was built in the 19th century.", "Offers diverse sports and leisure opportunities."]},
  
    factsAdvanced: {
      "de": ["Der Strand beherbergt das einzige erhaltene historische Inselbad am Plattensee.", "Die Anlage wurde originalgetreu nach PlÃ¤nen aus dem Jahr 1864 restauriert.", "In den Sommermonaten finden hier regelmÃ¤ÃŸig stimmungsvolle Abendkonzerte statt.", "Der Strand ist direkt an die belebte Seeuferpromenade von Keszthely angeschlossen."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "siofok-strand",
    type: "landmark",
    parent: "HU-SO",
    coords: [18.05, 46.91],
    name: {"de": "Nagystrand SiÃ³fok", "hu": "SiÃ³foki Nagystrand", "ro": "Plaja Mare SiÃ³fok", "en": "SiÃ³fok Great Beach"},
    description: {"de": "GrÃ¶ÃŸter und belebtester Strand am SÃ¼dufer mit ClubatmosphÃ¤re.", "hu": "A dÃ©li part legnagyobb Ã©s legpezsgÅ‘bb strandja klubhangulattal.", "ro": "Cea mai mare È™i mai animatÄƒ plajÄƒ de pe malul sudic.", "en": "The largest and busiest beach on the southern shore with a club atmosphere."},
    
    descriptionAdvanced: {
      "de": "Der GroÃŸe Strand von SiÃ³fok ist der bekannteste und belebteste Badeplatz an der ungarischen Riviera. Mit seiner kilometerlangen Uferlinie und dem flach abfallenden Wasser ist er der Inbegriff des Balaton-Sommers fÃ¼r Generationen von Urlaubern. Das Zentrum des Geschehens ist der 'Plage-SiÃ³fok', ein moderner Erlebniskomplex mit Sandstrand, Pools und zahlreichen Bars. Hier treffen sich tagsÃ¼ber Sonnenanbeter und Wassersportler, wÃ¤hrend sich der Strand am Abend in eine pulsierende Partymeile verwandelt. SiÃ³fok bietet an seinem Strand die perfekte Infrastruktur fÃ¼r einen abwechslungsreichen Urlaub zwischen Sport, Spiel und Unterhaltung.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Heimat des PlÃ¡zs SiÃ³fok, einem Zentrum fÃ¼r Konzerte.", "Bekannt fÃ¼r sein Riesenrad."], "hu": ["Itt talÃ¡lhatÃ³ a PlÃ¡zs SiÃ³fok, a koncertek kÃ¶zpontja.", "HÃ­res az Ã³riÃ¡skerekÃ©rÅ‘l."], "ro": ["GÄƒzduieÈ™te PlÃ¡zs SiÃ³fok, un centru pentru concerte.", "FaimoasÄƒ pentru roata sa panoramicÄƒ."], "en": ["Home to PlÃ¡zs SiÃ³fok, a center for concerts.", "Famous for its Ferris wheel."]},
  
    factsAdvanced: {
      "de": ["SiÃ³fok besitzt den lÃ¤ngsten zusammenhÃ¤ngenden Sandstrand am gesamten Plattensee.", "Der Strand ist der Hauptveranstaltungsort fÃ¼r das jÃ¤hrliche 'Balaton Sound' Rahmenprogramm.", "Von der Mole aus hat man den besten Blick auf die SonnenuntergÃ¤nge Ã¼ber dem See.", "Die WasserqualitÃ¤t wird regelmÃ¤ÃŸig mit der hÃ¶chsten Auszeichnung prÃ¤miert."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "gyor-gyerekvonat",
    type: "landmark",
    parent: "HU-GS",
    coords: [17.63, 47.68],
    name: {"de": "Kindereisenbahn GyÅ‘r", "hu": "GyÅ‘ri gyerekvonat", "ro": "TrenuleÈ›ul copiilor din GyÅ‘r", "en": "GyÅ‘r Children's Train"},
    description: {"de": "Kleine Parkeisenbahn, ein Favorit fÃ¼r Familien in GyÅ‘r.", "hu": "GyÅ‘ri kerti vasÃºt, a csalÃ¡dok kedvence a pÃ¼spÃ¶kvÃ¡ri kertben.", "ro": "TrenuleÈ› de parc, un favorit al familiilor din GyÅ‘r.", "en": "Small park railway, a favorite for families in GyÅ‘r."},
    
    descriptionAdvanced: {
      "de": "Die Kindereisenbahn in GyÅ‘r ist ein charmantes technisches Denkmal und ein beliebtes Ausflugsziel fÃ¼r Familien im Norden Ungarns. In einer idyllischen Waldumgebung gelegen, bietet sie eine nostalgische Fahrt durch das GrÃ¼ne und vermittelt Kindern spielerisch die Welt der Eisenbahn. Die Wagen und Lokomotiven sind liebevoll gepflegt und erinnern an die BlÃ¼tezeit der ungarischen Schmalspurbahnen. Entlang der Strecke befinden sich SpielplÃ¤tze und Picknickareale, die zum Verweilen in der Natur einladen. FÃ¼r viele Kinder in GyÅ‘r ist eine Fahrt mit der kleinen Bahn ein unvergessliches Erlebnis und ein fester Bestandteil der regionalen Freizeitkultur.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["FÃ¤hrt durch eine malerische GrÃ¼nanlage.", "Ein beliebtes Wochenendprogramm."], "hu": ["FestÅ‘i zÃ¶ldÃ¶vezeten halad keresztÃ¼l.", "NÃ©pszerÅ± hÃ©tvÃ©gi program."], "ro": ["CirculÄƒ printr-o zonÄƒ verde pitoreascÄƒ.", "Un program popular de weekend."], "en": ["Runs through a scenic green area.", "A popular weekend activity."]},
  
    factsAdvanced: {
      "de": ["Die kleine Eisenbahn in GyÅ‘r wird oft liebevoll als 'GÅ‘zÃ¶s' (Dampferchen) bezeichnet.", "Die Strecke fÃ¼hrt durch eines der schÃ¶nsten Waldgebiete am Rande der Stadt.", "Die Bahn ist Teil eines grÃ¶ÃŸeren Familienfreizeitparks in GyÅ‘r.", "RegelmÃ¤ÃŸig finden thematische Sonderfahrten zu Nikolaus oder Ostern statt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "budakeszi-vadaspark",
    type: "landmark",
    parent: "HU-PE",
    coords: [18.91, 47.51],
    name: {"de": "Wildpark Budakeszi", "hu": "Budakeszi Vadaspark", "ro": "Parcul de animale sÄƒlbatice Budakeszi", "en": "Budakeszi Wildlife Park"},
    description: {"de": "Wildpark in der NÃ¤he von Budapest mit einheimischen Tierarten.", "hu": "Budapest kÃ¶zeli vadaspark Å‘shonos Ã¡llatfajokkal.", "ro": "Parc de animale sÄƒlbatice lÃ¢ngÄƒ Budapesta cu specii native.", "en": "Wildlife park near Budapest featuring native species."},
    
    descriptionAdvanced: {
      "de": "Der Wildpark Budakeszi am westlichen Stadtrand von Budapest bietet ein authentisches Naturerlebnis im Waldgebirge der Budaer Berge. Hier kÃ¶nnen Besucher die einheimische Tierwelt des Karpatenbeckens in ihrer natÃ¼rlichen Umgebung beobachten, von Rothirschen und Wildschweinen bis hin zu BraunbÃ¤ren und WÃ¶lfen. Der Park legt groÃŸen Wert auf Umweltbildung und bietet interaktive Lehrpfade, die Kindern und Erwachsenen das Ã–kosystem Wald nÃ¤herbringen. Ein besonderes Highlight ist der integrierte Abenteuerpark mit Kletterparcours und der Bauernhofbereich mit alten ungarischen Haustierrassen. Der Wildpark ist der ideale Ort fÃ¼r StÃ¤dter, um Ruhe zu finden und mehr Ã¼ber den Schutz der heimischen Fauna zu erfahren.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Bietet Abenteuerparks und Streichelzoo.", "Liegt im wunderschÃ¶nen Budaer Bergland."], "hu": ["Kalandparkkal Ã©s Ã¡llatsimogatÃ³val is vÃ¡rja a lÃ¡togatÃ³kat.", "A Budai-hegysÃ©g gyÃ¶nyÃ¶rÅ± kÃ¶rnyezetÃ©ben fekszik."], "ro": ["OferÄƒ parcuri de aventurÄƒ È™i grÄƒdinÄƒ zoologicÄƒ.", "Situat Ã®n frumoÈ™ii munÈ›i Buda."], "en": ["Offers adventure parks and a petting zoo.", "Located in the beautiful Buda Hills."]},
  
    factsAdvanced: {
      "de": ["Der Wildpark Budakeszi beherbergt Ã¼ber 50 verschiedene Tierarten aus Ungarn und Europa.", "Ein Highlight ist die regelmÃ¤ÃŸige FÃ¼tterungsshow, bei der Besucher viel Ã¼ber das Verhalten der Tiere lernen.", "Der Park ist Teil eines riesigen Waldgebietes, das als 'Lunge von Budapest' gilt.", "In dem Park befindet sich zudem ein Dino-Park mit lebensgroÃŸen Modellen prÃ¤historischer Tiere."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "veszpremi-allatkert",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.89, 47.10],
    name: {"de": "Zoo VeszprÃ©m", "hu": "VeszprÃ©mi Ãllatkert", "ro": "GrÄƒdina ZoologicÄƒ VeszprÃ©m", "en": "VeszprÃ©m Zoo"},
    description: {"de": "Einer der schÃ¶nsten Zoos Ungarns mit weiten Gehegen und Dinopark.", "hu": "Az orszÃ¡g egyik legszebb Ã¡llatkertje tÃ¡gas kifutÃ³kkal Ã©s dinÃ³parkkal.", "ro": "Una dintre cele mai frumoase grÄƒdini zoologice din Ungaria cu parc de dinozauri.", "en": "One of the most beautiful zoos in Hungary with spacious enclosures and a dino park."},
    
    descriptionAdvanced: {
      "de": "Der Zoo von VeszprÃ©m ist einer der traditionsreichsten und landschaftlich schÃ¶nsten TiergÃ¤rten Ungarns, gelegen im malerischen Fejes-Tal. Er ist bekannt fÃ¼r seine weitlÃ¤ufigen Gehege, die die Tiere in einer naturnahen Umgebung prÃ¤sentieren, darunter seltene Arten wie den Roten Panda und Afrikanische NashÃ¶rner. Besonders spektakulÃ¤r ist das Giraffenhaus und die weitlÃ¤ufige Savannen-Anlage, die das GefÃ¼hl einer Safari vermitteln. Einzigartig ist der integrierte Dinopark mit lebensgroÃŸen Modellen, der die Erdgeschichte fÃ¼r Kinder lebendig werden lÃ¤sst. Der Zoo legt groÃŸen Wert auf Artenschutzprogramme und ist ein bedeutendes Bildungszentrum in Westungarn. Ein Besuch in VeszprÃ©m bietet Erlebnisse fÃ¼r alle Generationen inmitten einer beeindruckenden Mittelgebirgslandschaft.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Der Dinopark zeigt lebensgroÃŸe Modelle.", "Bekannt fÃ¼r seine Elefanten und NashÃ¶rner."], "hu": ["A dinÃ³park Ã©lethÅ± modelleket mutat be.", "HÃ­res az elefÃ¡ntjairÃ³l Ã©s orrszarvÃºirÃ³l."], "ro": ["Parcul de dinozauri prezintÄƒ modele Ã®n mÄƒrime naturalÄƒ.", "Cunoscut pentru elefanÈ›i È™i rinoceri."], "en": ["The dino park features life-sized models.", "Famous for its elephants and rhinos."]},
  
    factsAdvanced: {
      "de": ["Der VeszprÃ©mer Zoo wurde bereits im Jahr 1958 als dritter Zoo des Landes erÃ¶ffnet.", "Der Park beherbergt den grÃ¶ÃŸten Elefanten-Park in ganz Ungarn.", "Vom Zoo aus hat man einen fantastischen Blick auf die Viadukt-BrÃ¼cke von VeszprÃ©m.", "Der Zoo ist ganzjÃ¤hrig geÃ¶ffnet und bietet auch im Winter spannende Einblicke."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "szegedi-vadaspark",
    type: "landmark",
    parent: "HU-CS",
    coords: [20.12, 46.25],
    name: {"de": "Wildpark Szeged", "hu": "Szegedi Vadaspark", "ro": "GrÄƒdina ZoologicÄƒ Seghedin", "en": "Szeged Wildlife Park"},
    description: {"de": "GroÃŸflÃ¤chiger Tierpark, der sich auf den Schutz seltener Arten konzentriert.", "hu": "Nagy terÃ¼letÅ± Ã¡llatpark, amely ritka fajok vÃ©delmÃ©re Ã¶sszpontosÃ­t.", "ro": "Parc zoologic Ã®ntins, concentrat pe protecÈ›ia speciilor rare.", "en": "Large-scale wildlife park focused on the protection of rare species."},
    
    descriptionAdvanced: {
      "de": "Der Wildpark Szeged ist der flÃ¤chenmÃ¤ÃŸig grÃ¶ÃŸte Zoo Ungarns und bekannt fÃ¼r seine naturnahe Haltung seltener und gefÃ¤hrdeter Tierarten. In einem weitlÃ¤ufigen Waldgebiet gelegen, bietet er Tieren von fast allen Kontinenten einen Lebensraum, der ihren natÃ¼rlichen BedÃ¼rfnissen entspricht. Ein Schwerpunkt des Parks liegt auf der Haltung sÃ¼damerikanischer Arten und Raubtiere wie dem Schneeleoparden. Besucher kÃ¶nnen auf schattigen Wegen durch den Wald wandern und dabei Tiere entdecken, die in anderen Zoos oft nur in engen Gehegen zu sehen sind. Der Wildpark engagiert sich intensiv fÃ¼r internationale Zuchtprogramme und die Wiederauswilderung bedrohter Arten. Die entspannte AtmosphÃ¤re und die pÃ¤dagogisch wertvollen Informationen machen ihn zu einem Top-Ziel im sonnigen SÃ¼den Ungarns.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["GrÃ¶ÃŸter Tierpark Ungarns nach FlÃ¤che.", "Spezialisiert auf sÃ¼damerikanische Fauna."], "hu": ["TerÃ¼letileg MagyarorszÃ¡g legnagyobb Ã¡llatkertje.", "DÃ©l-amerikai Ã¡llatfajokra specializÃ¡lÃ³dott."], "ro": ["Cea mai mare grÄƒdinÄƒ zoologicÄƒ din Ungaria ca suprafaÈ›Äƒ.", "SpecializatÄƒ pe fauna sud-americanÄƒ."], "en": ["The largest zoo in Hungary by area.", "Specializes in South American fauna."]},
  
    factsAdvanced: {
      "de": ["Der Wildpark Szeged erstreckt sich Ã¼ber eine FlÃ¤che von fast 45 Hektar.", "Der Park beherbergt eine weltweit anerkannte Zuchtgruppe von Krallenaffen.", "Es gibt spezielle Beobachtungsstationen, um die Tiere ohne StÃ¶rung studieren zu kÃ¶nnen.", "Der Wildpark ist ein wichtiger Partner der europÃ¤ischen Zoo-Assoziation (EAZA)."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "tihany-levendulamezo",
    type: "landmark",
    parent: "HU-VE",
    coords: [17.88, 46.91],
    name: {"de": "Lavendelfelder Tihany", "hu": "Tihanyi levendulamezÅ‘", "ro": "CÃ¢mpurile de lavandÄƒ din Tihany", "en": "Tihany Lavender Fields"},
    description: {"de": "WunderschÃ¶ne Lavendelfelder, die die Halbinsel Tihany im Juni lila fÃ¤rben.", "hu": "GyÃ¶nyÃ¶rÅ± levendulamezÅ‘k, melyek jÃºniusban lilÃ¡ra festik a fÃ©lszigetet.", "ro": "CÃ¢mpuri superbe de lavandÄƒ care coloreazÄƒ peninsula Ã®n violet Ã®n iunie.", "en": "Beautiful lavender fields that turn the peninsula purple in June."},
    
    descriptionAdvanced: {
      "de": "Die Lavendelfelder von Tihany sind ein leuchtendes Symbol der Halbinsel und verwandeln die Landschaft im FrÃ¼hsommer in ein duftendes violettes Meer. Der Anbau von Lavendel hat in Tihany eine lange Tradition, die auf den BenediktinermÃ¶nch Gyula Bittera zurÃ¼ckgeht, der den ersten Lavendel im Jahr 1924 aus Frankreich einfÃ¼hrte. Durch das vulkanische Gestein und das milde Klima besitzt das Tihanyer LavendelÃ¶l einen auÃŸergewÃ¶hnlich hohen Gehalt an wertvollen Inhaltsstoffen. Besucher kÃ¶nnen wÃ¤hrend der Lavendelwochen im Juni den Lavendel selbst pflÃ¼cken und im Lavendelhaus-Besucherzentrum alles Ã¼ber die Verarbeitung erfahren. Die blÃ¼henden Felder vor der Kulisse des azurblauen Plattensees sind eines der meistfotografierten Motive Ungarns. Tihany ist das 'ungarische Provence' und ein Fest fÃ¼r die Sinne.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Heimat des Lavendelhauses, eines Besucherzentrums.", "Ein Symbol fÃ¼r die Halbinsel Tihany."], "hu": ["Itt talÃ¡lhatÃ³ a Levendula HÃ¡z lÃ¡togatÃ³kÃ¶zpont.", "A Tihanyi-fÃ©lsziget egyik jelkÃ©pe."], "ro": ["Casa Casei Lavandei, un centru pentru vizitatori.", "Un simbol al peninsulei Tihany."], "en": ["Home to the Lavender House visitor center.", "A symbol of the Tihany Peninsula."]},
  
    factsAdvanced: {
      "de": ["Der Lavendel von Tihany hat aufgrund des Mikroklimas eine hÃ¶here QualitÃ¤t als der ursprÃ¼ngliche franzÃ¶sische Lavendel.", "Die Ernte findet jÃ¤hrlich Ende Juni im Rahmen des groÃŸen Lavendel-Festivals statt.", "Aus dem Lavendel werden hochwertige Ã–le, Seifen, Tees und sogar LikÃ¶re hergestellt.", "Die Lavendelfelder stehen aufgrund ihrer Bedeutung fÃ¼r das Landschaftsbild unter Schutz."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
  {
    id: "megyer-hegyi-tengerszem",
    type: "landmark",
    parent: "HU-BZ",
    coords: [21.57, 48.34],
    name: {"de": "Megyer-hegy Meerauge", "hu": "Megyer-hegyi tengerszem", "ro": "Ochiul de mare de pe muntele Megyer", "en": "Megyer-hegy Tarn"},
    description: {"de": "Eindrucksvoller Bergsee in einem ehemaligen MÃ¼hlsteinbruch.", "hu": "LenyÅ±gÃ¶zÅ‘ tÃ³ egy egykori malomkÅ‘bÃ¡nya helyÃ©n.", "ro": "Lac montan impresionant Ã®n locul unei foste cariere de pietre de moarÄƒ.", "en": "Impressive mountain lake in a former millstone quarry."},
    
    descriptionAdvanced: {
      "de": "Der Megyer-Hegyi Tengerszem (Meerauge vom Megyer-Berg) bei SÃ¡rospatak ist eines der faszinierendsten Naturwunder Ungarns. Entstanden in einem ehemaligen MÃ¼hlsteinbruch aus dem 15. Jahrhundert, hat sich in dem tiefen Felsenkessel Ã¼ber die Zeit ein kristallklarer Bergsee gebildet. Die senkrecht aufragenden, bis zu 70 Meter hohen FelswÃ¤nde um den See erzeugen eine atemberaubende und fast mystische Kulisse. Ein schmaler Pfad fÃ¼hrt Besucher durch die in den Stein gehauenen GÃ¤nge bis zum Rand des Sees, von wo aus man die Tiefe und Stille des Ortes erleben kann. Das Gebiet ist heute ein Naturschutzgebiet und wurde 2011 zum schÃ¶nsten NaturphÃ¤nomen Ungarns gewÃ¤hlt. FÃ¼r Wanderer und Naturfotografen ist dieser Ort im ZemplÃ©n-Gebirge ein absolutes Muss.",
      "hu": "",
      "ro": "",
      "en": ""
    },
    facts: {"de": ["Wurde 2011 zum schÃ¶nsten Naturwunder Ungarns gewÃ¤hlt.", "Besitzt spektakulÃ¤re, 70 Meter hohe FelswÃ¤nde."], "hu": ["2011-ben MagyarorszÃ¡g legszebb termÃ©szeti csodÃ¡jÃ¡nak vÃ¡lasztottÃ¡k.", "LÃ¡tvÃ¡nyos, 70 mÃ©ter magas sziklafalak veszik kÃ¶rÃ¼l."], "ro": ["Votat cea mai frumoasÄƒ minune naturalÄƒ a Ungariei Ã®n 2011.", "Are pereÈ›i de stÃ¢ncÄƒ spectaculoÈ™i, Ã®nalÈ›i de 70 de metri."], "en": ["Voted the most beautiful natural wonder of Hungary in 2011.", "Features spectacular 70-meter-high rock walls."]},
  
    factsAdvanced: {
      "de": ["Der See ist an seiner tiefsten Stelle Ã¼ber 6 Meter tief und wird nur von Regenwasser gespeist.", "Der einstige Steinbruch lieferte Ã¼ber Jahrhunderte die besten MÃ¼hlsteine der Region.", "Um den See herum fÃ¼hrt ein gut ausgebauter geologischer Lehrpfad.", "Der Ort ist auch bei Kletterern aufgrund der steilen Rhyolith-FelswÃ¤nde beliebt."],
      "hu": [],
      "ro": [],
      "en": []
    },
  },
];

export const hungaryAllPoi: POI[] = [
  ...hungaryCountry,
  ...hungaryRegions,
  ...hungaryCities,
];
