import type { POI } from "./poi";
import { poiExtraIrelandAnimal } from "./poiExtraIrelandAnimal";
import { poiExtraIrelandCities } from "./poiExtraIrelandCities";
import { poiExtraIrelandOther } from "./poiExtraIrelandOther";

export const irelandCountry: POI = {
  id: "ireland",
  type: "country",
  parent: "EU",
  coords: [-7.5023, 53.4129],
  name: { de: "Irland", hu: "Írország", ro: "Irlanda", en: "Ireland" },
  description: {
    de: "Irland ist ein Inselstaat in Westeuropa, der für seine üppigen grünen Landschaften, seine reiche Geschichte und seine lebendige keltische Kultur bekannt ist.",
    hu: "Írország egy nyugat-európai szigetország, amely buja zöld tájairól, gazdag történelméről és élénk kelta kultúrájáról ismert.",
    ro: "Irlanda este o țară insulară din Europa de Vest, cunoscută pentru peisajele sale verzi luxuriante, istoria bogată și cultura celtică vibrantă.",
    en: "Ireland is an island nation in Western Europe known for its lush green landscapes, rich history, and vibrant Celtic culture."
  },
  descriptionAdvanced: {
    de: "Irland, offiziell die Republik Irland, ist ein faszinierendes Land am westlichen Rand Europas, das für seine atemberaubende natürliche Schönheit, seine tief verwurzelte Geschichte und seine weltweit geschätzte Kultur bekannt ist. Die Insel, die oft als 'Grüne Insel' bezeichnet wird, besticht durch ihre dramatischen Küstenlinien, wie die Cliffs of Moher, und ihre sanften, smaragdgrünen Hügellandschaften. Die irische Geschichte reicht von den antiken keltischen Stämmen über die christliche Missionierung durch den Heiligen Patrick bis hin zur modernen, dynamischen Republik. Die Hauptstadt Dublin ist ein lebendiges Zentrum für Literatur, Musik und Technologie, in dem historisches Erbe auf zeitgenössische Innovation trifft. Irland ist weltberühmt für seine literarischen Giganten wie James Joyce, Oscar Wilde und Samuel Beckett sowie für seine mitreißende traditionelle Musik und den Stepptanz. Ein zentraler Aspekt der irischen Identität ist die Gastfreundschaft und das Konzept von 'Craic' – ein Gefühl von Spaß, Unterhaltung und angenehmer Gesellschaft. Kulinarisch bietet Irland ehrliche Genüsse wie das Irish Stew, frische Meeresfrüchte und natürlich das weltbekannte Guinness-Bier. Heute ist Irland ein modernes EU-Mitglied mit einer der am schnellsten wachsenden Volkswirtschaften Europas, insbesondere im IT- und Pharmasektor. Ob man durch die mystischen Landschaften von Connemara wandert, die historischen Klöster wie Glendalough besichtigt oder die lebendige Pub-Kultur in Dublin genießt – Irland empfängt seine Besucher mit einer Herzlichkeit und einer landschaftlichen Pracht, die einen bleibenden Eindruck hinterlassen.",
    hu: "Írország, hivatalos nevén az Ír Köztársaság, egy lenyűgöző ország Európa nyugati peremén, amely lélegzetelállító természeti szépségéről, mélyen gyökerező történelméről és világszerte elismert kultúrájáról ismert. A szigetet, amelyet gyakran \\\"Smaragd-szigetnek\\\" neveznek, drámai tengerpartok – mint például a Moher-sziklák – és szelíd, smaragdzöld dombvidékek jellemzik. Az ír történelem az ősi kelta törzsektől kezdve Szent Patrik keresztény misszióján át a modern, dinamikus köztársaságig ível. A főváros, Dublin, az irodalom, a zene és a technológia vibráló központja, ahol a történelmi örökség találkozik a kortárs innovációval. Írország világhírű olyan irodalmi óriásairól, mint James Joyce, Oscar Wilde és Samuel Beckett, valamint magával ragadó hagyományos zenéjéről és sztepptáncáról. Az ír identitás központi eleme a vendégszeretet és a \\\"Craic\\\" fogalma – ami a szórakozást, a jókedvet és a kellemes társaságot jelenti. Kulináris szempontból Írország olyan őszinte élvezeteket kínál, mint az ír gulyás (Irish Stew), a friss tenger gyümölcsei és természetesen a világhírű Guinness sör. Ma Írország modern EU-tagállam, Európa egyik leggyorsabban növekvő gazdaságával, különösen az informatikai és gyógyszerészeti szektorban. Akár Connemara misztikus tájain túrázik valaki, akár olyan történelmi kolostorokat látogat meg, mint Glendalough, vagy Dublin pezsgő pub-kultúráját élvezi – Írország olyan szívélyességgel és természeti pompával fogadja látogatóit, amely maradandó élményt nyújt.",
    ro: "Irlanda, situată în nord-vestul Europei, este o națiune insulară renumită pentru moștenirea sa celtică și peisajele predominant rurale. Istoria sa complexă include perioada migrațiilor, dominația britanică și formarea Republicii în 1922, elemente studiate frecvent la cursurile de istorie europeană. Relieful este definit de câmpii centrale întinse, mărginite de lanțuri muntoase de coastă și străbătute de râuri precum Shannon. Din punct de vedere cultural, literatura și folclorul irlandez au o influență globală semnificativă. Studiul geografiei și economiei sale oferă elevilor un exemplu excelent de dezvoltare a unui stat insular în cadrul Uniunii Europene.",
    en: "Ireland, officially the Republic of Ireland, is an island nation on the westernmost edge of Europe, celebrated for its verdant landscapes and deeply rooted Celtic heritage. From the rugged Atlantic coastline to its lush, rolling inland plains, the geography is as dramatic as its history. The nation's journey stretches from ancient tribal kingdoms and the arrival of St. Patrick, through centuries of British rule, culminating in an independent modern republic. Today, Ireland serves as a global hub for technology and pharmaceuticals while maintaining a vibrant literary and musical culture. Its study offers K8 students an inspiring example of resilience, post-colonial nation-building, and rapid economic transformation.",
  },
  factsAdvanced: {
      en: [
      "The Republic of Ireland has a population of over 5.1 million people.",
      "It covers approximately 83% of the island of Ireland.",
      "The longest river is the Shannon, flowing for 360 kilometers.",
      "It achieved independence from the United Kingdom in 1922.",
      "Ireland is consistently ranked among the world's wealthiest nations by GDP per capita."
    ],

    ro: [
      "Populația Republicii Irlanda depășește 5 milioane de locuitori.",
      "Râul Shannon este cel mai lung din țară, având o lungime de 360 de kilometri.",
      "Statul și-a obținut independența față de Regatul Unit în anul 1922.",
      "Irlanda ocupă aproximativ 83% din suprafața insulei cu același nume."
    ]
  },
  facts: {
    en: ["It is often referred to as the Emerald Isle due to its expansive green fields.", "The country has two official languages: English and Irish (Gaeilge).", "Dublin is the capital city and home to the famous Trinity College."],
    de: ["Wegen ihrer weiten grünen Felder wird sie oft die Grüne Insel genannt.", "Das Land hat zwei Amtssprachen: Englisch und Irisch (Gaeilge).", "Dublin ist die Hauptstadt und Heimat des berühmten Trinity College."],
    hu: ["Kiterjedt zöld mezői miatt gyakran nevezik Smaragd-szigetnek.", "Az országnak két hivatalos nyelve van: az angol és az ír (Gaeilge).", "Dublin a főváros, és itt található a híres Trinity College."],
    ro: ["Este adesea numită Insula de Smarald datorită câmpurilor sale verzi întinse.", "Țara are două limbi oficiale: engleza și irlandeza (Gaeilge).", "Dublin este capitala și găzduiește celebrul Trinity College."]
  },
  image: "/geo-images/ireland/ireland-main.webp",
};

export const irelandRegions: POI[] = [
  {
    id: "city-dublin",
    type: "city",
    parent: "ireland",
    coords: [-6.2603, 53.3498],
    name: { de: "Dublin", hu: "Dublin", ro: "Dublin", en: "Dublin" },
    description: {
      de: "Dublin ist die Hauptstadt Irlands, bekannt für ihr reiches literarisches Erbe, das Trinity College und die lebendige Pub-Kultur im Viertel Temple Bar.",
      hu: "Dublin Írország fővárosa, amely gazdag irodalmi örökségéről, a Trinity College-ról és a Temple Bar negyed pezsgő pub-kultúrájáról ismert.",
      ro: "Dublin este capitala Irlandei, cunoscută pentru bogata sa moștenire literară, Trinity College și cultura vibrantă a pub-urilor din cartierul Temple Bar.",
      en: "Dublin is the capital of Ireland, known for its rich literary heritage, Trinity College, and the vibrant pub culture in the Temple Bar district."
    },
    descriptionAdvanced: {
      en: "Dublin, the vibrant capital of the Republic of Ireland, is situated at the mouth of the River Liffey on the east coast. Originally founded as a Viking settlement in the 9th century, it evolved into the administrative heart of English rule in Ireland. The city is a living museum, where medieval castles and Georgian squares blend seamlessly with cutting-edge tech campuses. For students studying European history, Dublin provides crucial context for the 1916 Easter Rising and the Irish war of independence. Today, it stands as a bustling, cosmopolitan city globally renowned for its literature, music, and welcoming atmosphere.",
      de: "Dublin ist die Hauptstadt und größte Stadt Irlands und liegt an der Mündung des Flusses Liffey. Es ist eine geschichtsträchtige Stadt, von ihren Wikinger-Ursprüngen bis zu ihrer georgianischen Architektur. Dublin ist weltberühmt für sein literarisches Erbe und die Heimat berühmter Schriftsteller wie James Joyce und Oscar Wilde. Die Stadt bietet eine Mischung aus historischen Wahrzeichen, lebhaften Pubs und wunderschönen Parks wie St. Stephen's Green.",
      hu: "Dublin Írország fővárosa és legnagyobb városa, a Liffey-folyó torkolatánál fekszik. Történelemben gazdag város, a viking eredettől a georgiánus építészetig. Dublin világhírű irodalmi örökségéről, olyan híres írók otthona, mint James Joyce és Oscar Wilde. A város történelmi nevezetességek, vibráló pubok és gyönyörű parkok, például a St. Stephen's Green keverékét kínálja.",
      ro: "Dublin, capitala Republicii Irlanda, a fost fondată inițial ca o așezare vikingă în secolul al IX-lea la gura de vărsare a râului Liffey. Orașul a devenit centrul administrativ al dominației engleze în timpul Evului Mediu, păstrând numeroase edificii istorice din acea perioadă. Din perspectivă educațională, Dublin oferă un context valoros pentru înțelegerea revoluției industriale și a luptelor pentru independență din secolul XX. În prezent, metropola este un pol tehnologic major la nivel european, atrăgând companii internaționale. Geografia sa urbană ilustrează perfect tranziția de la un port istoric la o capitală modernă cu influență globală."
    },
  factsAdvanced: {
      en: [
      "The Greater Dublin Area is home to over 1.4 million residents.",
      "Trinity College, established in 1592, is Ireland's oldest university.",
      "The River Liffey divides the city into the Northside and the Southside.",
      "Phoenix Park in Dublin is one of the largest enclosed public parks in any European capital city."
    ],

    ro: [
      "Dublin găzduiește peste 1,1 milioane de locuitori în zona sa metropolitană.",
      "Trinity College, fondat în 1592, este cea mai veche universitate din țară.",
      "Revolta de Paști din 1916 a avut epicentrul în clădirea Poștei Centrale din Dublin.",
      "Râul Liffey împarte orașul în două regiuni distincte: Northside și Southside."
    ]
  },
    facts: {
      en: ["Dublin was founded by Vikings in the 9th century.","Trinity College Dublin is home to the famous Book of Kells.","The city has more than 600 pubs.","Dublin is a UNESCO City of Literature."],
      de: ["Dublin wurde im 9. Jahrhundert von Wikingern gegründet.","Das Trinity College Dublin beherbergt das berühmte Book of Kells.","Die Stadt hat mehr als 600 Pubs.","Dublin ist eine UNESCO-Literaturstadt."],
      hu: ["Dublint a vikingek alapították a 9. században.","A dublini Trinity College ad otthont a híres Book of Kells-nek.","A városban több mint 600 pub található.","Dublin az UNESCO irodalmi városa."],
      ro: ["Dublin a fost fondat de vikingi în secolul al IX-lea.","Trinity College Dublin găzduiește faimoasa Book of Kells.","Orașul are peste 600 de pub-uri.","Dublin este un oraș al literaturii UNESCO."]
    },
    image: "/geo-images/ireland/dublin.webp",
  },
  {
    id: "city-cork",
    type: "city",
    parent: "ireland",
    coords: [-8.4756, 51.8985],
    name: { de: "Cork", hu: "Cork", ro: "Cork", en: "Cork" },
    description: {
      en: "Cork is Ireland's second-largest city, located in the southwest of the country. Known for its maritime history and vibrant food scene, it is often called the 'real capital' by its residents. The city is built on islands in the River Lee and features charming streets, historic churches, and the famous English Market. Cork is a gateway to the beautiful scenery of West Cork and the Wild Atlantic Way.",
      de: "Cork ist Irlands zweitgrößte Stadt und liegt im Südwesten des Landes. Bekannt für seine maritime Geschichte und seine lebendige Food-Szene, wird es von seinen Bewohnern oft als 'wahre Hauptstadt' bezeichnet. Die Stadt ist auf Inseln im Fluss Lee erbaut und bietet charmante Straßen, historische Kirchen und den berühmten English Market. Cork ist ein Tor zur wunderschönen Landschaft von West Cork und dem Wild Atlantic Way.",
      hu: "Cork Írország második legnagyobb városa, az ország délnyugati részén található. Tengerészeti múltjáról és élénk gasztronómiájáról ismert, lakói gyakran az 'igazi fővárosnak' nevezik. A város a Lee-folyó szigeteire épült, bájos utcákkal, történelmi templomokkal és a híres English Markettel rendelkezik. Cork kapu Nyugat-Cork gyönyörű tájaihoz és a Wild Atlantic Way-hez.",
      ro: "Cork este al doilea oraș ca mărime din Irlanda, situat în sud-vestul țării. Cunoscut pentru istoria sa maritimă și scena culinară vibrantă, este adesea numit 'adevărata capitală' de către rezidenții săi. Orașul este construit pe insule în râul Lee și are străzi fermecătoare, biserici istorice și faimoasa English Market. Cork este o poartă către peisajele frumoase din West Cork și Wild Atlantic Way."
    },
  descriptionAdvanced: {
      en: "Cork is Ireland's second-largest city, located in the south-west on the River Lee, which splits into two channels to form an island in the city center. Originally a monastic settlement founded by St. Finbarr in the 6th century, Cork developed into an essential transatlantic trading port. Locals proudly refer to it as the 'Real Capital' due to its prominent role during the Irish Civil War. Its deep-water harbor and strategic location have historically driven its economy, making it an excellent case study in maritime trade and urban development. Modern Cork is a major center for the global pharmaceutical and tech industries.",

    ro: "Cork, situat în sud-vestul extrem al insulei, s-a dezvoltat inițial ca o așezare monahală în secolul al VI-lea, fondată de Sfântul Finbarr. Orașul este construit pe o insulă formată de canalele râului Lee, extinzându-se ulterior pe malurile adiacente. Din punct de vedere istoric, a fost un important port comercial transatlantic, facilitând exporturile de produse agricole și textile. Studiul evoluției sale urbane sprijină înțelegerea rutelor comerciale maritime și a dezvoltării economice regionale. Astăzi, Cork este recunoscut pentru industria sa farmaceutică și pentru portul maritim de mare adâncime, al doilea ca mărime din lume."
  },
  factsAdvanced: {
      en: [
      "Cork Harbour is recognized as the second-largest natural harbor in the world.",
      "The city was designated as the European Capital of Culture in 2005.",
      "Many of Cork's main streets are built over river channels that were covered over in the 19th century.",
      "The city's population is approximately 220,000 within the metropolitan area."
    ],

    ro: [
      "Portul Cork este al doilea port natural ca mărime din lume, după Sydney.",
      "Orașul a fost desemnat Capitală Europeană a Culturii în anul 2005.",
      "Canalele râului Lee au fost acoperite în mare parte în secolul al XIX-lea pentru a crea străzi principale.",
      "Cork este adesea denumit 'Adevărata Capitală' de către localnici, datorită rolului său în Războiul Civil Irlandez."
    ]
  },
    facts: {
      en: ["Cork Harbour is one of the largest natural harbours in the world.","The city is famous for the Shandon Bells.","Blarney Castle, home to the Blarney Stone, is located nearby.","Cork was a major port for Irish emigration to America."],
      de: ["Der Hafen von Cork ist einer der größten Naturhäfen der Welt.","Die Stadt ist berühmt für die Shandon Bells.","Blarney Castle mit dem Blarney Stone befindet sich in der Nähe.","Cork war ein wichtiger Hafen für die irische Auswanderung nach Amerika."],
      hu: ["Cork kikötője a világ egyik legnagyobb természetes kikötője.","A város híres a Shandon-harangokról.","A közelben található a Blarney-kastély, a Blarney-kő otthona.","Cork az Amerikába irányuló ír kivándorlás egyik fő kikötője volt."],
      ro: ["Portul Cork este unul dintre cele mai mari porturi naturale din lume.","Orașul este faimos pentru clopotele Shandon.","Castelul Blarney, unde se află Piatra Blarney, este situat în apropiere.","Cork a fost un port major pentru emigrarea irlandeză în America."]
    },
    image: "/geo-images/ireland/cork.webp",
  }
];

export const irelandCities: POI[] = [
  {
    id: "city-galway",
    type: "city",
    parent: "ireland",
    coords: [-9.0568, 53.2707],
    name: { de: "Galway", hu: "Galway", ro: "Galway", en: "Galway" },
    description: {
      en: "Galway is a western Irish city with a lively arts scene and a strong link to Gaelic culture.",
      de: "Galway ist eine westirische Stadt mit lebendiger Kunstszene und enger Verbindung zur gälischen Kultur.",
      hu: "Galway nyugat-írországi város, élénk művészeti élettel és erős gael kulturális kapcsolattal.",
      ro: "Galway este un oraș din vestul Irlandei, cu o scenă artistică vie și o legătură puternică cu cultura gaelică."
    },
  descriptionAdvanced: {
      en: "Galway, perched on the west coast of Ireland where the River Corrib meets the Atlantic Ocean, is widely regarded as the cultural heart of the country. Growing from a 12th-century fort into a prosperous medieval walled town, it was famously ruled by fourteen merchant families. Galway serves as a primary gateway to the Connemara region and is a stronghold of the traditional Irish language. Its thriving arts scene and status as a major university city demonstrate how historical maritime hubs can transition into modern cultural and educational powerhouses.",

    ro: "Galway este situat pe coasta de vest a Irlandei, unde râul Corrib se varsă în Oceanul Atlantic. Inițial un fort construit în 1124, orașul a prosperat în Evul Mediu ca un centru comercial fortificat, condus de patrusprezece familii de negustori. Datorită poziției sale geografice, Galway ilustrează pentru elevi modul în care comerțul maritim cu regiuni precum Spania a modelat cultura și economia locală. Zona înconjurătoare reprezintă o graniță lingvistică, orașul fiind o poartă de acces către regiunea Connemara unde se vorbește predominant irlandeza. Orașul modern susține un sector educațional și tehnologic robust, păstrându-și în același timp arhitectura medievală."
  },
  factsAdvanced: {
      en: [
      "Galway was named the European Capital of Culture in 2020.",
      "The city is heavily associated with the Claddagh ring, a traditional Irish symbol of love and friendship.",
      "It is the fourth most populous urban area in the Republic of Ireland.",
      "The River Corrib is one of the shortest rivers in Europe but has a massive flow volume."
    ],

    ro: [
      "Galway este recunoscut ca al șaselea cel mai populat oraș de pe insula Irlanda.",
      "În Evul Mediu, orașul a fost condus de un grup de elită cunoscut sub numele de 'Cele 14 Triburi din Galway'.",
      "Universitatea din Galway a fost fondată în anul 1845 sub numele de Queen's College.",
      "Aproximativ 10% din populația regiunii înconjurătoare utilizează limba irlandeză (Gaeilge) ca primă limbă."
    ]
  },
    facts: {
      en: ["It is a gateway to Connemara.", "It has a strong festival culture.", "Irish language is highly visible here.", "The city sits on the Atlantic coast."],
      de: ["Es ist ein Tor nach Connemara.", "Es hat eine starke Festivalkultur.", "Die irische Sprache ist hier sehr präsent.", "Die Stadt liegt an der Atlantikküste."],
      hu: ["Connemara kapuja.", "Erős fesztiválkultúrája van.", "Az ír nyelv nagyon jelen van itt.", "A város az Atlanti-óceán partján fekszik."],
      ro: ["Este o poartă către Connemara.", "Are o cultură puternică a festivalurilor.", "Limba irlandeză este foarte vizibilă aici.", "Orașul se află pe coasta Atlanticului."]
    },
    image: "/geo-images/ireland/city-galway.webp",
  },
  {
    id: "city-limerick",
    type: "city",
    parent: "ireland",
    coords: [-8.6305, 52.6638],
    name: { de: "Limerick", hu: "Limerick", ro: "Limerick", en: "Limerick" },
    description: {
      en: "Limerick sits on the River Shannon and is known for King John's Castle and a strong sporting identity.",
      de: "Limerick liegt am Fluss Shannon und ist für King John's Castle und eine starke Sportkultur bekannt.",
      hu: "Limerick a Shannon folyó partján fekszik, és a King John's Castle-ről, valamint erős sportéletéről ismert.",
      ro: "Limerick se află pe râul Shannon și este cunoscut pentru King John's Castle și o identitate sportivă puternică."
    },
  descriptionAdvanced: {
      en: "Limerick is a historic city situated on the River Shannon estuary in the mid-west of Ireland. Founded by the Vikings in 812, it grew into an important medieval stronghold, dominated by the imposing King John's Castle. The city played a pivotal role in the Williamite War in Ireland, notably during the Siege of Limerick in 1691. Today, Limerick exemplifies successful urban regeneration, transforming its post-industrial waterfront into a dynamic cultural and commercial zone. It offers students a clear example of how strategic river navigation shapes a region's economic destiny.",

    ro: "Limerick este așezat strategic pe estuarul râului Shannon, o locație care a determinat istoria sa comercială și militară. Fondat de vikingi în anul 812, orașul a fost ulterior fortificat de normanzi, devenind un centru de putere regională. Istoria asediilor sale din secolul al XVII-lea oferă elevilor studii de caz relevante privind conflictele politice și religioase din Europa modernă timpurie. Din punct de vedere geografic, funcționează ca un nod de transport esențial între vestul și sudul Irlandei. Economia contemporană a orașului s-a diversificat, integrând ingineria avansată și tehnologia informației în zona industrială Shannon."
  },
  factsAdvanced: {
      en: [
      "Limerick was Ireland's first National City of Culture in 2014.",
      "King John's Castle, built in 1200, remains one of the best-preserved Norman castles in Europe.",
      "The city has a metropolitan population exceeding 100,000.",
      "It is intrinsically linked to the humorous, five-line poem style known as the limerick."
    ],

    ro: [
      "Castelul Regelui Ioan din Limerick a fost construit între anii 1200 și 1210 pe Insula King's.",
      "Limerick este al treilea cel mai populat oraș din Republica Irlanda.",
      "Tratatul de la Limerick a fost semnat în 1691, punând capăt Războiului Williamit în Irlanda.",
      "Estuarul râului Shannon de la Limerick facilitează accesul navelor oceanice către portul orașului."
    ]
  },
    facts: {
      en: ["King John's Castle is a major landmark.", "The River Shannon runs through the city.", "It has a strong rugby tradition.", "It is one of Ireland's oldest cities."],
      de: ["King John's Castle ist ein wichtiges Wahrzeichen.", "Der Fluss Shannon fließt durch die Stadt.", "Die Stadt hat eine starke Rugby-Tradition.", "Sie ist eine der ältesten Städte Irlands."],
      hu: ["A King John's Castle fontos nevezetesség.", "A Shannon folyó áthalad a városon.", "Erős rögbihagyományai vannak.", "Írország egyik legrégebbi városa."],
      ro: ["King John's Castle este un reper major.", "Râul Shannon trece prin oraș.", "Are o puternică tradiție în rugby.", "Este unul dintre cele mai vechi orașe din Irlanda."]
    },
    image: "/geo-images/ireland/city-limerick.webp",
  },
  {
    id: "ie-belfast",
    type: "city",
    parent: "ireland",
    coords: [-5.9301, 54.5973],
    name: { de: "Belfast", hu: "Belfast", ro: "Belfast", en: "Belfast" },
    description: {
      en: "Belfast is the capital of Northern Ireland and is closely linked to shipbuilding and the Titanic Quarter.",
      de: "Belfast ist die Hauptstadt Nordirlands und eng mit dem Schiffbau sowie dem Titanic Quarter verbunden.",
      hu: "Belfast Észak-Írország fővárosa, és szorosan kötődik a hajóépítéshez és a Titanic Quarterhöz.",
      ro: "Belfast este capitala Irlandei de Nord și este strâns legat de construcțiile navale și Titanic Quarter."
    },
  descriptionAdvanced: {
      en: "Belfast, the capital and largest city of Northern Ireland, lies at the mouth of the River Lagan on Belfast Lough. During the Industrial Revolution, it became a global powerhouse in linen production and shipbuilding, famously constructing the RMS Titanic. The city's 20th-century history is deeply marked by the political and sectarian conflict known as the Troubles, making it a crucial subject for modern European history studies. Today, Belfast is a city transformed, known for its vibrant arts, aerospace innovation, and successful peace-building and reconciliation efforts.",

    ro: "Belfast, capitala Irlandei de Nord, s-a impus în secolul al XIX-lea ca un centru industrial global, specializat în producția de in, frânghii și construcții navale. Orașul este situat la gura râului Lagan, oferind un context geografic ideal pentru expansiunea sa portuară. Istoria sa recentă include decenii de conflict politic cunoscut sub numele de 'The Troubles', a căror studiere ajută la înțelegerea proceselor de pace și a diviziunilor sociale în istoria contemporană. Acordul de la Belfast din 1998 a marcat o transformare semnificativă, favorizând regenerarea urbană și creșterea economică. Astăzi, șantierele navale istorice au fost reconvertite în spații comerciale și culturale moderne."
  },
  factsAdvanced: {
      en: [
      "The Harland and Wolff shipyard in Belfast built the RMS Titanic in 1912.",
      "It has a population of over 340,000 within the city limits.",
      "The city is home to the iconic Samson and Goliath shipbuilding cranes.",
      "Belfast played a central role during the Troubles, which largely ended with the 1998 Good Friday Agreement."
    ],

    ro: [
      "RMS Titanic a fost construit în șantierele navale Harland and Wolff din Belfast, fiind lansat la apă în 1911.",
      "Populația orașului depășește 340.000 de locuitori în limitele sale administrative.",
      "Orașul este înconjurat de un lanț de dealuri, cel mai proeminent fiind Cavehill.",
      "Belfast a primit statutul de oraș de la Regina Victoria în anul 1888."
    ]
  },
    facts: {
      en: ["It is the capital of Northern Ireland.", "The Titanic was built here.", "The Titanic Quarter is a major redevelopment area.", "It has a strong industrial heritage."],
      de: ["Es ist die Hauptstadt Nordirlands.", "Die Titanic wurde hier gebaut.", "Das Titanic Quarter ist ein großes Entwicklungsgebiet.", "Es hat ein starkes industrielles Erbe."],
      hu: ["Észak-Írország fővárosa.", "A Titanic itt épült.", "A Titanic Quarter jelentős fejlesztési terület.", "Erős ipari örökséggel rendelkezik."],
      ro: ["Este capitala Irlandei de Nord.", "Titanic a fost construit aici.", "Titanic Quarter este o zonă majoră de regenerare.", "Are o moștenire industrială puternică."]
    },
    image: "/geo-images/ireland/city-belfast.webp",
  }
  ,
  {
    id: "city-sligo",
    type: "city",
    parent: "ireland",
    coords: [-8.4706, 54.2697],
    name: { de: "Sligo", hu: "Sligo", ro: "Sligo", en: "Sligo" },
    description: {
      en: "Sligo is a lively northwest Irish town known for Yeats, surfing, and easy access to the Atlantic coast. It sits near the Garavogue River and works as a compact base for exploring Donegal Bay and Benbulben. The town blends literary tourism with a strong outdoor lifestyle and a visible food scene. Sligo is also a practical gateway for road trips across the Wild Atlantic Way.",
      de: "Sligo ist eine lebendige Stadt im Nordwesten Irlands, bekannt für Yeats, Surfen und die Nähe zur Atlantikküste. Sie liegt am Garavogue River und dient als kompakter Ausgangspunkt für Ausflüge zur Donegal Bay und zum Benbulben. Die Stadt verbindet Literaturtourismus mit einem aktiven Outdoor-Leben und einer sichtbaren Foodszene. Sligo ist zudem ein praktisches Tor für Roadtrips entlang des Wild Atlantic Way.",
      hu: "Sligo egy pezsgő északnyugat-írországi város, amely Yeatsről, a szörfözésről és az Atlanti-óceán közelségéről ismert. A Garavogue folyó mellett fekszik, és kényelmes bázist ad a Donegal-öböl vagy a Benbulben felfedezéséhez. A város az irodalmi turizmust aktív szabadtéri életmóddal és erős gasztronómiai kínálattal ötvözi. Sligo a Wild Atlantic Way útvonal egyik hasznos kapuja is.",
      ro: "Sligo este un oraș animat din nord-vestul Irlandei, cunoscut pentru Yeats, surf și accesul rapid la coasta Atlanticului. Se află lângă râul Garavogue și este o bază compactă pentru explorarea golfului Donegal și a muntelui Benbulben. Orașul combină turismul literar cu un stil de viață outdoor și o scenă culinară vizibilă. Sligo este și o poartă practică pentru drumurile de pe Wild Atlantic Way."
    },
  descriptionAdvanced: {
      en: "Sligo is a coastal seaport and the premier urban center in the northwest of Ireland. Nestled between the Atlantic Ocean and the dramatic Dartry Mountains, its stunning landscapes heavily inspired the works of Nobel laureate W.B. Yeats. The area is exceptionally rich in prehistoric sites, including the massive megalithic cemetery at Carrowmore. Sligo's geographic position makes it a natural focal point for agriculture, tourism, and education in the region, illustrating the deep connection between Irish literature and the natural environment.",

    ro: "Sligo este un important centru regional și portuar situat în nord-vestul Republicii Irlanda, la gura râului Garavogue. Regiunea are o densitate remarcabilă de monumente preistorice, precum mormintele megalitice de la Carrowmore, oferind perspective valoroase asupra așezărilor umane timpurii. Evoluția sa ca oraș a fost puternic influențată de comerțul maritim și de infrastructura feroviară dezvoltată în secolul al XIX-lea. Geografia zonei, dominată de munții Benbulben și Knocknarea, este frecvent asociată cu poezia lui W.B. Yeats, fiind un exemplu de influență a peisajului asupra literaturii. Astăzi, Sligo funcționează ca un pol industrial și educațional pentru întreaga regiune de nord-vest."
  },
  factsAdvanced: {
      en: [
      "The surrounding Dartry Mountains include the distinctive, flat-topped Benbulben.",
      "Sligo has a population of roughly 20,000 people.",
      "The poet W.B. Yeats is buried in nearby Drumcliffe, at the foot of Benbulben.",
      "It is a prominent hub along the Wild Atlantic Way tourist route."
    ],

    ro: [
      "Complexul megalitic de la Carrowmore din Sligo conține peste 30 de morminte cu pasaj datând din mileniul IV î.Hr.",
      "Abilitatea portului Sligo de a acomoda nave a fost esențială pentru emigrarea din secolul al XIX-lea.",
      "Muntele Benbulben, format din calcar în timpul erei glaciare, atinge o altitudine de 526 metri.",
      "Numele orașului derivă din irlandezul 'Sligeach', care se traduce prin 'locul abundent în scoici'."
    ]
  },
    facts: {
      en: ["Sligo is associated with poet W. B. Yeats.", "The town lies near Benbulben, one of Ireland's best-known mountains.", "Its coastline is popular for surfing.", "The Garavogue River flows through the town.", "Sligo serves as a gateway to Donegal Bay."],
      de: ["Sligo ist eng mit dem Dichter W. B. Yeats verbunden.", "Die Stadt liegt in der Nähe des Benbulben, eines der bekanntesten Berge Irlands.", "Die Küste ist bei Surfern beliebt.", "Der Garavogue River fließt durch die Stadt.", "Sligo ist ein Tor zur Donegal Bay."],
      hu: ["Sligo szorosan kötődik W. B. Yeats költőhöz.", "A város a Benbulben közelében fekszik, Írország egyik legismertebb hegye mellett.", "Partjai népszerűek a szörfösök körében.", "A Garavogue folyó átszeli a várost.", "Sligo kapu a Donegal-öböl felé."],
      ro: ["Sligo este asociat cu poetul W. B. Yeats.", "Orașul se află lângă Benbulben, unul dintre cei mai cunoscuți munți ai Irlandei.", "Coasta este populară pentru surfing.", "Râul Garavogue traversează orașul.", "Sligo este o poartă către Donegal Bay."]
    },
    image: "/geo-images/ireland/city-sligo.webp",
  },
  {
    id: "city-waterford",
    type: "city",
    parent: "ireland",
    coords: [-7.1101, 52.2593],
    name: { de: "Waterford", hu: "Waterford", ro: "Waterford", en: "Waterford" },
    description: {
      en: "Waterford is Ireland's oldest city and a major south-east gateway with a strong maritime identity. Founded by the Vikings, it became an important port and commercial center on the River Suir. Today the city combines historic streets, crystal heritage, and a growing reputation for food and festivals. Waterford is a smart stop for visitors heading through the Waterford Greenway and Ireland's Ancient East.",
      de: "Waterford ist die älteste Stadt Irlands und ein wichtiger Zugangspunkt im Südosten mit starker maritimer Identität. Von den Wikingern gegründet, wurde sie zu einem bedeutenden Hafen und Handelszentrum am Fluss Suir. Heute verbindet die Stadt historische Straßen, Kristalltradition und einen wachsenden Ruf für Essen und Festivals. Waterford ist ein guter Zwischenstopp für Reisende auf dem Waterford Greenway und durch Irlands Ancient East.",
      hu: "Waterford Írország legrégebbi városa és a délkeleti régió fontos kapuja erős tengeri identitással. A vikingek alapították, később pedig a Suir folyó mentén jelentős kikötővé és kereskedelmi központtá vált. Ma a város a történelmi utcákat, az üvegkristály-hagyományt és az egyre erősebb gasztronómiai-fesztiválkínálatot egyesíti. Waterford ideális megálló a Waterford Greenway és az Ancient East útvonalán.",
      ro: "Waterford este cel mai vechi oraș al Irlandei și o poartă importantă în sud-est, cu o identitate maritimă puternică. Fondat de vikingi, a devenit un port și centru comercial major pe râul Suir. Astăzi, orașul combină străzile istorice, tradiția cristalului și o reputație tot mai bună pentru gastronomie și festivaluri. Waterford este o oprire bună pentru cei care parcurg Waterford Greenway și Ireland's Ancient East."
    },
  descriptionAdvanced: {
      en: "Waterford holds the distinguished title of Ireland's oldest city, established by Viking raiders in 914. Situated in the southeast along the River Suir, it quickly became a vital center of trade and maritime activity. The city's history is vividly preserved in its 'Viking Triangle', which features monumental stone towers and ancient walls. Beyond its heritage, Waterford achieved global fame through its exquisite lead crystal manufacturing. For students, it serves as a perfect example of a millennium-old continuous settlement adapting to modern industrial changes.",

    ro: "Waterford, situat în sud-estul Irlandei, este recunoscut ca cel mai vechi oraș al țării, fiind fondat de vikingi în anul 914. Poziția sa pe estuarul râului Suir l-a transformat rapid într-un port strategic pentru apărare și comerț pe parcursul Evului Mediu. Istoria manufacturilor locale oferă exemple practice pentru lecțiile despre meșteșuguri și industrializare timpurie, în special datorită tradiției prelucrării cristalului. Arhitectura orașului reflectă straturile sale istorice, incluzând fortificații vikinge și normande, precum Turnul lui Reginald. Din punct de vedere economic, Waterford continuă să fie un port maritim activ și un centru pentru industria manufacturieră de precizie."
  },
  factsAdvanced: {
      en: [
      "Waterford was founded by Vikings in 914 AD, making it Ireland's oldest city.",
      "Reginald's Tower in Waterford is the oldest civic urban structure in Ireland.",
      "The city is world-renowned for Waterford Crystal, which has been manufactured there since 1783.",
      "It is part of the 'Three Sisters' river system: the Barrow, the Nore, and the Suir."
    ],

    ro: [
      "Waterford a fost fondat în 914 d.Hr., fiind prima așezare din Irlanda cu statut oficial de oraș.",
      "Turnul lui Reginald, cea mai veche clădire civică din Irlanda, a fost construit în anul 1003.",
      "Tradiția fabricării cristalului în Waterford datează din anul 1783.",
      "Râurile Suir, Nore și Barrow, cunoscute sub numele de 'Cele Trei Surori', se varsă în mare în apropierea orașului."
    ]
  },
    facts: {
      en: ["Waterford was founded by Vikings in 914.", "The city gave its name to Waterford Crystal.", "It stands on the River Suir.", "The Viking Triangle is a major heritage district.", "Waterford is a key city in Ireland's Ancient East."],
      de: ["Waterford wurde 914 von Wikingern gegründet.", "Die Stadt gab Waterford Crystal ihren Namen.", "Sie liegt am Fluss Suir.", "Das Viking Triangle ist ein wichtiges historisches Viertel.", "Waterford ist eine wichtige Stadt in Ireland's Ancient East."],
      hu: ["Waterfordot a vikingek alapították 914-ben.", "A város adta a nevét a Waterford Crystalnak.", "A Suir folyó partján fekszik.", "A Viking Triangle jelentős örökségi negyed.", "Waterford kulcsfontosságú város az Ireland's Ancient East útvonalon."],
      ro: ["Waterford a fost fondat de vikingi în anul 914.", "Orașul a dat numele brandului Waterford Crystal.", "Se află pe râul Suir.", "Viking Triangle este un cartier patrimonial important.", "Waterford este un oraș-cheie în Ireland's Ancient East."]
    },
    image: "/geo-images/ireland/city-waterford.webp",
  },
  {
    id: "city-kilkenny",
    type: "city",
    parent: "ireland",
    coords: [-7.2449, 52.6485],
    name: { de: "Kilkenny", hu: "Kilkenny", ro: "Kilkenny", en: "Kilkenny" },
    description: {
      en: "Kilkenny is a compact medieval city known for its castle, cathedral, and vibrant arts calendar. Its historic core makes it one of the most walkable destinations in Ireland. The city is strongly associated with craft, design, and traditional sporting culture. Kilkenny also works as a tourism base for exploring the south-east and the River Nore valley.",
      de: "Kilkenny ist eine kompakte mittelalterliche Stadt, bekannt für ihre Burg, Kathedrale und den lebendigen Kulturkalender. Ihr historischer Kern macht sie zu einem der am besten zu Fuß erkundbaren Ziele in Irland. Die Stadt ist stark mit Handwerk, Design und traditioneller Sportkultur verbunden. Kilkenny dient außerdem als Ausgangspunkt, um den Südosten und das Nore-Tal zu erkunden.",
      hu: "Kilkenny egy kompakt középkori város, amely kastélyáról, katedrálisáról és élénk művészeti programjairól ismert. Történelmi magja miatt Írország egyik legjobban gyalog bejárható úti célja. A város erősen kötődik a kézművességhez, a dizájnhoz és a hagyományos sportkultúrához. Kilkenny jó kiindulópont a délkeleti térség és a Nore-völgy felfedezéséhez.",
      ro: "Kilkenny este un oraș medieval compact, cunoscut pentru castel, catedrală și calendarul său artistic foarte activ. Nucleul său istoric îl face una dintre cele mai ușor de explorat pe jos destinații din Irlanda. Orașul este strâns asociat cu meșteșugurile, designul și cultura sportivă tradițională. Kilkenny este și o bază bună pentru a descoperi sud-estul și valea râului Nore."
    },
  descriptionAdvanced: {
      en: "Kilkenny is often referred to as the 'Marble City' due to the distinctive black limestone once quarried locally. Located in the southeast, it boasts an exceptionally well-preserved medieval center, anchored by the majestic Kilkenny Castle and St. Canice's Cathedral. During the 17th century, it briefly served as the capital of Confederate Ireland, a crucial period of rebellion against English rule. Today, Kilkenny is a powerhouse of arts, crafts, and design, offering a vivid window into medieval urban planning and architecture.",

    ro: "Kilkenny este situat pe ambele maluri ale râului Nore, în sud-estul Irlandei, remarcându-se prin conservarea excepțională a structurilor sale medievale. Orașul a funcționat ca o capitală de facto a Irlandei în secolul al XVII-lea sub Confederația Catolică, un episod central în predarea istoriei constituționale. Planimetria urbană, cu un castel impresionant și numeroase biserici de piatră, ilustrează perfect organizarea spațială a unei așezări normande. Deși poartă titlul istoric de oraș datorită unui hrisov regal, dimensiunile sale corespund unui centru urban de mărime medie. Economia sa contemporană se bazează pe procesarea produselor agricole, turism istoric și meșteșuguri tradiționale."
  },
  factsAdvanced: {
      en: [
      "Kilkenny Castle was the principal seat of the powerful Butler family for over 600 years.",
      "The city's 'medieval mile' is a concentrated area of historic buildings and narrow alleyways.",
      "It is famous for Smithwick's ale, which has been brewed in the city since 1710.",
      "Despite its small population of around 27,000, it officially holds city status by royal charter."
    ],

    ro: [
      "Statutele de la Kilkenny au fost adoptate în anul 1366, cu scopul de a separa populația de origine engleză de cea irlandeză.",
      "Castelul Kilkenny a fost fondat în anul 1195 pentru a controla un punct de trecere strategic peste râul Nore.",
      "Populația orașului numără aproximativ 27.000 de locuitori.",
      "Kilkenny este supranumit 'Orașul de Marmură' datorită utilizării frecvente a calcarului negru local în construcțiile istorice."
    ]
  },
    facts: {
      en: ["Kilkenny Castle dominates the city center.", "The city is known for Irish design and craft.", "The River Nore runs through the area.", "It hosts a popular arts festival each year.", "Kilkenny is one of Ireland's best-preserved medieval towns."],
      de: ["Kilkenny Castle prägt das Stadtzentrum.", "Die Stadt ist für irisches Design und Handwerk bekannt.", "Der Fluss Nore fließt durch das Gebiet.", "Jedes Jahr findet dort ein beliebtes Kunstfestival statt.", "Kilkenny ist eine der am besten erhaltenen mittelalterlichen Städte Irlands."],
      hu: ["A Kilkenny Castle uralja a belvárost.", "A város ismert az ír dizájnról és kézművességről.", "A Nore folyó keresztülhalad a környéken.", "Évente népszerű művészeti fesztiválnak ad otthont.", "Kilkenny Írország egyik legjobb állapotban megmaradt középkori városa."],
      ro: ["Kilkenny Castle domină centrul orașului.", "Orașul este cunoscut pentru design și meșteșuguri irlandeze.", "Râul Nore trece prin zonă.", "Găzduiește anual un festival de artă popular.", "Kilkenny este unul dintre cele mai bine păstrate orașe medievale din Irlanda."]
    },
    image: "/geo-images/ireland/city-kilkenny.webp",
  },
  {
    id: "city-athlone",
    type: "city",
    parent: "ireland",
    coords: [-7.9408, 53.4239],
    name: { de: "Athlone", hu: "Athlone", ro: "Athlone", en: "Athlone" },
    description: {
      en: "Athlone sits close to the center of Ireland on the River Shannon and is known for its strategic bridge crossing. The town has a long history as a defensive point and later as a modern regional hub. Athlone mixes riverfront scenery, shopping, and a relaxed inland pace that appeals to road-trippers. Its location makes it a practical stop between Dublin, Galway, and the west coast.",
      de: "Athlone liegt nahe dem Zentrum Irlands am Fluss Shannon und ist für seine strategische Brückenquerung bekannt. Die Stadt hat eine lange Geschichte als Verteidigungspunkt und später als moderner regionaler Knotenpunkt. Athlone verbindet Flussuferlandschaft, Einkaufsmöglichkeiten und ein entspanntes Binnenland-Tempo, das Roadtripper anspricht. Ihre Lage macht sie zu einem praktischen Stopp zwischen Dublin, Galway und der Westküste.",
      hu: "Athlone Írország közepéhez közel, a Shannon folyónál fekszik, és stratégiai hídjáról ismert. A város hosszú ideig védelmi pontként, később pedig modern regionális központként működött. Athlone a folyóparti látványt, a vásárlási lehetőségeket és a nyugodt belső-írországi ritmust ötvözi. Fekvése miatt praktikus megálló Dublin, Galway és a nyugati part között.",
      ro: "Athlone se află aproape de centrul Irlandei, pe râul Shannon, și este cunoscut pentru podul său strategic. Orașul are o istorie lungă ca punct defensiv și, mai târziu, ca nod regional modern. Athlone combină peisajul de mal de râu, cumpărăturile și ritmul relaxat al zonei centrale. Poziția sa îl face o oprire practică între Dublin, Galway și coasta de vest."
    },
  descriptionAdvanced: {
      en: "Athlone is strategically located in the very center of Ireland, straddling the River Shannon and lying near the geographical midpoint of the island. Due to this prime location, Athlone Castle was built in the 12th century to guard a critical river crossing, making it a focal point in several military campaigns, including the Siege of Athlone in 1691. Its central position has transformed it into a modern hub for transportation, military defense, and technological education, illustrating the ongoing importance of geographic chokepoints.",

    ro: "Athlone este situat pe râul Shannon, în centrul geografic al Irlandei, funcționând istoric ca un punct principal de traversare est-vest. Datorită acestei locații strategice, orașul a fost puternic fortificat, Castelul Athlone jucând un rol defensiv major în timpul Războiului Williamit. Geografia așezării sale, la granița dintre provinciile Leinster și Connacht, oferă un studiu de caz clar asupra modului în care barierele fizice definesc granițele politice și militare. În perioada modernă, orașul a devenit un centru de transport terestru și o bază militară activă. Economia s-a adaptat, atrăgând industrii tehnologice și instituții de învățământ superior cu impact la nivel național."
  },
  factsAdvanced: {
      en: [
      "Sean's Bar in Athlone is recognized by the Guinness World Records as the oldest pub in Ireland, dating to 900 AD.",
      "The town straddles two provinces: Leinster and Connacht.",
      "Athlone is home to Custume Barracks, the headquarters of the Irish Defence Forces' Western Command.",
      "It is a key navigational point on the River Shannon waterway system."
    ],

    ro: [
      "Castelul Athlone a fost construit în anul 1210 de către regele Ioan al Angliei.",
      "Orașul este situat exact la intersecția dintre două județe: Westmeath și Roscommon.",
      "Asediul orașului Athlone din 1691 a fost o bătălie decisivă în istoria militară irlandeză.",
      "Barul Sean's, situat în oraș, deține atestări care sugerează că ar fi fost fondat în anul 900 d.Hr."
    ]
  },
    facts: {
      en: ["Athlone is often described as the geographic heart of Ireland.", "The River Shannon passes through the town.", "Athlone Castle is a key historic attraction.", "It is an important transport hub on the Dublin-Galway axis.", "The town has a strong boating and waterside identity."],
      de: ["Athlone wird oft als geografisches Herz Irlands bezeichnet.", "Der Fluss Shannon fließt durch die Stadt.", "Athlone Castle ist eine wichtige historische Attraktion.", "Es ist ein wichtiger Verkehrsknotenpunkt auf der Achse Dublin-Galway.", "Die Stadt hat eine starke Boots- und Uferidentität."],
      hu: ["Athlone-t gyakran Írország földrajzi szívének nevezik.", "A Shannon folyó áthalad a városon.", "Az Athlone Castle fontos történelmi látványosság.", "Fontos közlekedési csomópont Dublin és Galway között.", "A város erős hajós és vízparti identitással rendelkezik."],
      ro: ["Athlone este adesea descris ca inima geografică a Irlandei.", "Râul Shannon trece prin oraș.", "Athlone Castle este o atracție istorică importantă.", "Este un nod de transport esențial pe axa Dublin-Galway.", "Orașul are o identitate puternică legată de apă și navigație."]
    },
    image: "/geo-images/ireland/city-athlone.webp",
  },
  {
    id: "city-tralee",
    type: "city",
    parent: "ireland",
    coords: [-9.7056, 52.2704],
    name: { de: "Tralee", hu: "Tralee", ro: "Tralee", en: "Tralee" },
    description: {
      en: "Tralee is the county town of Kerry and a lively base for the Ring of Kerry and nearby beaches. It combines a compact urban core with access to some of Ireland's best-known coastal scenery. The town has a strong festival profile and a visible sporting culture. Tralee works well as a practical stop for travelers looking for both town life and Atlantic landscapes.",
      de: "Tralee ist die County-Stadt von Kerry und ein lebendiger Ausgangspunkt für den Ring of Kerry und nahe Strände. Sie verbindet einen kompakten Stadtkern mit Zugang zu einigen der bekanntesten Küstenlandschaften Irlands. Die Stadt hat ein starkes Festivalprofil und eine sichtbare Sportkultur. Tralee eignet sich gut als praktischer Stopp für Reisende, die Stadtleben und Atlantiklandschaften verbinden wollen.",
      hu: "Tralee Kerry megye központja, és élénk kiindulópont a Ring of Kerry vagy a közeli strandok felé. Kompakt városi magja mellett Írország egyik legismertebb tengerparti tájához biztosít hozzáférést. A város erős fesztiválkínálattal és jól látható sportkultúrával rendelkezik. Tralee jó választás azoknak, akik a városi életet atlanti tájakkal szeretnék összekötni.",
      ro: "Tralee este orașul de județ din Kerry și o bază animată pentru Ring of Kerry și plajele din apropiere. Îmbină un nucleu urban compact cu acces la unele dintre cele mai cunoscute peisaje de coastă ale Irlandei. Orașul are un profil puternic de festivaluri și o cultură sportivă vizibilă. Tralee este o oprire practică pentru cei care caută atât viață urbană, cât și peisaje atlantice."
    },
  descriptionAdvanced: {
      en: "Tralee is the vibrant county town of Kerry, situated in the southwest of Ireland near the base of the Dingle Peninsula. Founded in the 13th century by the Anglo-Norman Fitzgerald family, it grew as a significant administrative and commercial center. The town is globally recognized for the Rose of Tralee International Festival, which celebrates Irish culture and diaspora each year. Tralee's development provides insight into how regional market towns support expansive rural and tourism-heavy hinterlands.",

    ro: "Tralee, situat în sud-vestul extrem, a fost fondat în secolul al XIII-lea ca principal fort al contelui de Desmond. Geografia orașului este definită de proximitatea sa la Oceanul Atlantic și de terenul mlăștinos de pe valea râului Lee, care a necesitat eforturi ample de drenare în secolul al XIX-lea. Istoria sa marchează perioade de revolte majore împotriva stăpânirii engleze, culminând cu Războiul de Independență și Războiul Civil Irlandez. Din punct de vedere economic, a evoluat de la o economie de piață agricolă la un centru de servicii și turism pentru întreaga peninsulă Kerry. Analiza acestei regiuni ajută elevii să înțeleagă relația dintre peisajele de coastă și dezvoltarea socio-economică."
  },
  factsAdvanced: {
      en: [
      "Tralee is the largest town in County Kerry, with a population approaching 24,000.",
      "The town was founded in the early 13th century by John FitzThomas Fitzgerald.",
      "It is the western terminus of the restored Tralee Ship Canal.",
      "The annual Rose of Tralee festival has been running since 1959."
    ],

    ro: [
      "Tralee a fost fondat în 1216 de către cavalerul normand John FitzThomas Fitzgerald.",
      "Populația orașului depășește 23.000 de locuitori.",
      "Portul local a fost conectat cu centrul orașului printr-un canal navigabil finalizat în anul 1846.",
      "Orașul găzduiește anual festivalul internațional Rose of Tralee începând din 1959."
    ]
  },
    facts: {
      en: ["Tralee is the county town of Kerry.", "It is close to the Ring of Kerry route.", "The town has a strong festival calendar.", "Tralee Bay is an important local feature.", "It is a good base for exploring the Dingle Peninsula."],
      de: ["Tralee ist die County-Stadt von Kerry.", "Es liegt nahe der Ring-of-Kerry-Route.", "Die Stadt hat einen starken Festivalkalender.", "Die Tralee Bay ist ein wichtiges lokales Merkmal.", "Es ist ein guter Ausgangspunkt für die Dingle-Halbinsel."],
      hu: ["Tralee Kerry megye központja.", "Közel van a Ring of Kerry útvonalhoz.", "Erős fesztiválnaptárral rendelkezik.", "A Tralee-öböl fontos helyi adottság.", "Jó bázis a Dingle-félsziget felfedezéséhez."],
      ro: ["Tralee este orașul de județ al comitatului Kerry.", "Este aproape de ruta Ring of Kerry.", "Orașul are un calendar puternic de festivaluri.", "Tralee Bay este o caracteristică locală importantă.", "Este o bază bună pentru explorarea peninsulei Dingle."]
    },
    image: "/geo-images/ireland/city-tralee.webp",
  },
  {
    id: "city-dundalk",
    type: "city",
    parent: "ireland",
    coords: [-6.4049, 54.0000],
    name: { de: "Dundalk", hu: "Dundalk", ro: "Dundalk", en: "Dundalk" },
    description: {
      en: "Dundalk is a border town in County Louth with a strong commercial and transport role. It sits between Dublin and Belfast, which gives it a strategic position for business and travel. The town is known for sporting tradition, coastal access, and a compact urban center. Dundalk also works as a gateway to the Cooley Peninsula and northern Ireland's east coast.",
      de: "Dundalk ist eine Grenzstadt in County Louth mit starker Handels- und Verkehrsrolle. Sie liegt zwischen Dublin und Belfast, was ihr eine strategische Position für Geschäft und Reisen verleiht. Die Stadt ist für ihre Sporttradition, den Küstenzugang und ihren kompakten Stadtkern bekannt. Dundalk dient außerdem als Tor zur Cooley-Halbinsel und zur Ostküste Nordirlands.",
      hu: "Dundalk egy határmenti város Louth megyében, erős kereskedelmi és közlekedési szereppel. Dublin és Belfast között fekszik, ami stratégiai pozíciót ad neki az üzleti életben és az utazásban. A város sporthagyományáról, tengerparti kapcsolatairól és kompakt belvárosáról ismert. Dundalk kapu a Cooley-félsziget és az északi keleti part felé.",
      ro: "Dundalk este un oraș de graniță din comitatul Louth, cu un rol comercial și de transport important. Se află între Dublin și Belfast, ceea ce îi oferă o poziție strategică pentru afaceri și călătorii. Orașul este cunoscut pentru tradiția sportivă, accesul la coastă și centrul urban compact. Dundalk este și o poartă către peninsula Cooley și coasta de est din nord."
    },
  descriptionAdvanced: {
      en: "Dundalk is a major town in County Louth, located near the border with Northern Ireland, exactly halfway between Dublin and Belfast. Its position on the Castletown River made it a historical frontier town, often acting as a defensive boundary known as the Pale during medieval English rule. In the 19th and 20th centuries, Dundalk industrialized rapidly, focusing on brewing, distilling, and railway engineering. Today, its cross-border location makes it an essential case study in economic integration and regional development on the island.",

    ro: "Dundalk este situat în nord-estul Irlandei, pe râul Castletown, la granița cu Irlanda de Nord. Poziția sa de frontieră l-a transformat istoric într-o zonă tampon între așezările englezești din jurul Dublinului și teritoriile galice din Ulster. Dezvoltarea sa modernă a fost catalizată de construcția rețelei feroviare în secolul al XIX-lea, transformându-l într-un important pol industrial, cu fabrici de încălțăminte și berării. Geografia sa, situată exact la jumătatea distanței dintre Dublin și Belfast, ilustrează importanța coridoarelor comerciale în dezvoltarea urbană. Astăzi, Dundalk s-a reorientat către sectoarele de inginerie software și tehnologie curată."
  },
  factsAdvanced: {
      en: [
      "Dundalk is the county town of Louth, Ireland's smallest county by area.",
      "It was the birthplace of Cú Chulainn, a legendary hero in Irish mythology.",
      "The town sits roughly 80 kilometers from both Dublin and Belfast.",
      "It has a significant modern pharmaceutical and technology manufacturing sector."
    ],

    ro: [
      "Orașul se află la o distanță aproape egală de 80 de kilometri atât față de Dublin, cât și față de Belfast.",
      "Dundalk a primit prima sa carte de privilegii regale (charter) în anul 1189.",
      "Calea ferată Dublin-Belfast a ajuns în Dundalk în anul 1849, stimulând industrializarea rapidă.",
      "Așezarea este asociată în mitologia irlandeză cu eroul legendar Cú Chulainn."
    ]
  },
    facts: {
      en: ["Dundalk lies near the border with Northern Ireland.", "It is positioned between Dublin and Belfast.", "The town has a strong racing and sporting culture.", "The Cooley Peninsula is nearby.", "Dundalk is an important stop on the east coast corridor."],
      de: ["Dundalk liegt nahe der Grenze zu Nordirland.", "Es liegt zwischen Dublin und Belfast.", "Die Stadt hat eine starke Renn- und Sportkultur.", "Die Cooley-Halbinsel liegt in der Nähe.", "Dundalk ist ein wichtiger Stopp am Ostkorridor."],
      hu: ["Dundalk közel van az északír határhoz.", "Dublin és Belfast között helyezkedik el.", "Erős verseny- és sportkultúrával rendelkezik.", "Közel van a Cooley-félsziget.", "Fontos megálló az keleti part menti útvonalon."],
      ro: ["Dundalk se află aproape de granița cu Irlanda de Nord.", "Este poziționat între Dublin și Belfast.", "Orașul are o cultură puternică de curse și sport.", "Peninsula Cooley este în apropiere.", "Dundalk este o oprire importantă pe coridorul de est."]
    },
    image: "/geo-images/ireland/city-dundalk.webp",
  },
  {
    id: "city-ennis",
    type: "city",
    parent: "ireland",
    coords: [-8.9774, 52.8438],
    name: { de: "Ennis", hu: "Ennis", ro: "Ennis", en: "Ennis" },
    description: {
      en: "Ennis is the county town of Clare and a well-known base for exploring the west of Ireland. It is a compact market town with a strong music tradition and an easygoing streetscape. The town sits close to Shannon Airport and the Cliffs of Moher corridor, which makes it attractive for visitors. Ennis combines local character, heritage shopping, and practical access to major Clare sights.",
      de: "Ennis ist die County-Stadt von Clare und ein bekannter Ausgangspunkt zur Erkundung des Westens von Irland. Es ist eine kompakte Marktstadt mit starker Musiktradition und entspannter Straßenatmosphäre. Die Stadt liegt nahe dem Shannon Airport und dem Korridor zu den Cliffs of Moher, was sie für Besucher attraktiv macht. Ennis verbindet lokalen Charakter, Einkaufsmöglichkeiten und praktischen Zugang zu den wichtigsten Sehenswürdigkeiten in Clare.",
      hu: "Ennis Clare megye központja és jól ismert bázis Írország nyugati részének felfedezéséhez. Kompakt vásárváros, erős zenei hagyományokkal és barátságos utcaképpel. Közel van a Shannon repülőtérhez és a Cliffs of Moher felé vezető útvonalhoz, ezért népszerű a látogatók körében. Ennis helyi karaktert, hangulatos vásárlási lehetőségeket és kényelmes hozzáférést kínál Clare fő látványosságaihoz.",
      ro: "Ennis este orașul de județ al comitatului Clare și o bază bine cunoscută pentru explorarea vestului Irlandei. Este un oraș de târg compact, cu o tradiție muzicală puternică și o atmosferă relaxată pe străzi. Orașul se află aproape de aeroportul Shannon și de coridorul către Cliffs of Moher, ceea ce îl face atractiv pentru vizitatori. Ennis îmbină caracterul local, cumpărăturile și accesul practic la principalele obiective din Clare."
    },
  descriptionAdvanced: {
      en: "Ennis is the picturesque county town of Clare, nestled along the River Fergus in the mid-west. Its history is deeply intertwined with the O'Brien dynasty and the establishment of the Ennis Friary in the 13th century, which became a prominent center of European learning. The town's narrow, winding streets reflect its medieval origins and spontaneous growth. Today, Ennis is celebrated as a vital stronghold of traditional Irish music and culture, representing the preservation of heritage within a growing modern economy.",

    ro: "Ennis este situat pe râul Fergus, în vestul Irlandei, dezvoltându-se organic în jurul unei mănăstiri franciscane fondate în secolul al XIII-lea. Arhitectura orașului este caracterizată prin străzi înguste și clădiri istorice din piatră, reflectând structura urbană de piață medievală. În secolul al XIX-lea, a fost un centru activ de agitație politică, cu un rol semnificativ în mișcarea de emancipare catolică condusă de Daniel O'Connell. Orașul oferă un exemplu didactic relevant privind modul în care piețele regionale susțineau economia agricolă a zonelor rurale izolate. Astăzi, Ennis servește ca un important nod comercial și de tranzit pentru regiunea comitatului Clare."
  },
  factsAdvanced: {
      en: [
      "Ennis has repeatedly won the title of Ireland's Tidiest Town.",
      "The historic Ennis Friary contains some of the finest medieval stone carvings in Ireland.",
      "It is known as the 'Capital of Traditional Irish Music'.",
      "The town's population is approximately 25,000, making it the largest town in Munster."
    ],

    ro: [
      "Abația Ennis, care a stat la baza formării orașului, a fost înființată în anul 1242.",
      "Numele orașului derivă din cuvântul irlandez 'Inis', care înseamnă insulă.",
      "În 1828, Daniel O'Connell a fost ales membru al Parlamentului reprezentând Clare, având baza la Ennis.",
      "Populația orașului depășește 25.000 de locuitori, fiind una dintre cele mai mari așezări urbane fără statut de city."
    ]
  },
    facts: {
      en: ["Ennis is the county town of Clare.", "It has a strong reputation for Irish traditional music.", "The town is close to Shannon Airport.", "It is a common base for visiting the Cliffs of Moher.", "Ennis retains the feel of a classic market town."],
      de: ["Ennis ist die County-Stadt von Clare.", "Sie hat einen starken Ruf für irische traditionelle Musik.", "Die Stadt liegt nahe dem Shannon Airport.", "Sie ist ein häufiger Ausgangspunkt für die Cliffs of Moher.", "Ennis bewahrt das Gefühl einer klassischen Marktstadt."],
      hu: ["Ennis Clare megye központja.", "Erős hírneve van az ír hagyományos zene terén.", "Közel található a Shannon repülőtérhez.", "Gyakori bázis a Cliffs of Moher meglátogatásához.", "Megőrizte a klasszikus vásárváros hangulatát."],
      ro: ["Ennis este orașul de județ al comitatului Clare.", "Are o reputație puternică pentru muzica tradițională irlandeză.", "Orașul este aproape de aeroportul Shannon.", "Este o bază frecventă pentru vizitarea Cliffs of Moher.", "Ennis păstrează atmosfera unui târg clasic."]
    },
    image: "/geo-images/ireland/city-ennis.webp",
  },
  {
    id: "city-carlow",
    type: "city",
    parent: "ireland",
    coords: [-6.9312, 52.8365],
    name: { de: "Carlow", hu: "Carlow", ro: "Carlow", en: "Carlow" },
    description: {
      en: "Carlow is a south-east Irish town with a strong agricultural hinterland and a compact urban center. It sits on the River Barrow and offers easy access to the wider Leinster region. The town is known for a friendly scale, local food, and historic connections to river trade. Carlow is a practical stop for travelers moving between Kilkenny, Kildare, and Waterford.",
      de: "Carlow ist eine Stadt im Südosten Irlands mit starkem landwirtschaftlichem Umland und einem kompakten Stadtkern. Sie liegt am Fluss Barrow und bietet leichten Zugang zur weiteren Region Leinster. Die Stadt ist für ihre überschaubare Größe, lokale Lebensmittel und historischen Verbindungen zum Flusshandel bekannt. Carlow ist ein praktischer Stopp für Reisende zwischen Kilkenny, Kildare und Waterford.",
      hu: "Carlow délkelet-ír város, erős mezőgazdasági háttérrel és kompakt belvárossal. A Barrow folyó partján fekszik, és könnyű hozzáférést biztosít Leinster tágabb térségéhez. A város barátságos méretéről, helyi élelmiszereiről és a folyami kereskedelemhez kötődő múltjáról ismert. Carlow praktikus megálló Kilkenny, Kildare és Waterford között.",
      ro: "Carlow este un oraș din sud-estul Irlandei, cu un hinterland agricol puternic și un centru urban compact. Se află pe râul Barrow și oferă acces ușor la regiunea extinsă Leinster. Orașul este cunoscut pentru dimensiunea prietenoasă, produsele locale și legăturile istorice cu comerțul pe apă. Carlow este o oprire practică între Kilkenny, Kildare și Waterford."
    },
  descriptionAdvanced: {
      en: "Carlow is a historic town located in the southeast, situated at the confluence of the rivers Barrow and Burren. As one of the earliest Norman strongholds in Ireland, Carlow Castle was constructed in the early 13th century to guard the river crossing. The town became a critical agricultural trading center, particularly known for its sugar beet industry which drove the local economy for decades. Carlow illustrates the evolution of a medieval defensive post into an agricultural and educational hub.",

    ro: "Carlow este situat pe râul Barrow, în sud-estul Irlandei, o regiune cu terenuri fertile, propice agriculturii intensive. Istoria orașului a fost definită de construcția Castelului Carlow în secolul al XIII-lea, o fortăreață strategică pentru controlul traversării râului. Din punct de vedere geografic, dezvoltarea transportului fluvial pe Barrow a impulsionat comerțul, transformând așezarea într-un centru de prelucrare a resurselor agricole locale, în special în industria morăritului. Acest parcurs istoric este folosit în educație pentru a exemplifica interdependența dintre agricultură, infrastructura de transport și dezvoltarea urbană timpurie. Economia actuală combină industria prelucrătoare cu sectorul educațional superior."
  },
  factsAdvanced: {
      en: [
      "Carlow was the capital of Ireland for a brief period in the 14th century.",
      "The town was home to Ireland's first sugar factory, which operated from 1926 to 2005.",
      "Carlow Castle was significantly damaged in 1814 by a physician attempting to repurpose it as an asylum.",
      "The impressive Brownshill Dolmen, a megalithic portal tomb, is located just outside the town."
    ],

    ro: [
      "Castelul Carlow a fost construit în jurul anului 1210 de către William Marshal.",
      "Colegiul St. Patrick, fondat în 1793, este unul dintre cele mai vechi colegii catolice din Irlanda.",
      "Prima fabrică de prelucrare a sfeclei de zahăr din Irlanda a fost deschisă la Carlow în 1926.",
      "Fluviul Barrow, pe care este situat orașul, este al doilea cel mai lung râu din țară."
    ]
  },
    facts: {
      en: ["Carlow stands on the River Barrow.", "The town is linked to a strong farming region.", "It has a compact and walkable center.", "Carlow is well placed for south-east road trips.", "Local food and markets are part of its appeal."],
      de: ["Carlow liegt am Fluss Barrow.", "Die Stadt ist mit einer starken Agrarregion verbunden.", "Sie hat ein kompaktes und gut zu Fuß erkundbares Zentrum.", "Carlow ist gut für Roadtrips im Südosten gelegen.", "Lokale Lebensmittel und Märkte gehören zu ihrem Charme."],
      hu: ["Carlow a Barrow folyó partján fekszik.", "Erős mezőgazdasági térséghez kapcsolódik.", "Kompakt, gyalogosan jól bejárható központja van.", "Jól elhelyezkedik délkeleti körutazásokhoz.", "A helyi élelmiszerek és piacok vonzerejét adják."],
      ro: ["Carlow se află pe râul Barrow.", "Orașul este legat de o regiune agricolă puternică.", "Are un centru compact și ușor de parcurs pe jos.", "Este bine poziționat pentru excursii rutiere în sud-est.", "Mâncarea locală și piețele fac parte din farmecul său."]
    },
    image: "/geo-images/ireland/city-carlow.webp",
  },
  {
    id: "city-wexford",
    type: "city",
    parent: "ireland",
    coords: [-6.4689, 52.3369],
    name: { de: "Wexford", hu: "Wexford", ro: "Wexford", en: "Wexford" },
    description: {
      en: "Wexford is a coastal town in the south-east with strong Viking roots and a lively summer atmosphere. It is known for its festivals, harbor, and access to long beaches and bird-rich wetlands. The town gives travelers a mix of history, seaside leisure, and a pleasant compact center. Wexford is also closely associated with the wider heritage of Ireland's Ancient East.",
      de: "Wexford ist eine Küstenstadt im Südosten mit starken Wikingern-Wurzeln und lebendiger Sommeratmosphäre. Sie ist bekannt für ihre Festivals, ihren Hafen und den Zugang zu langen Stränden und vogelreichen Feuchtgebieten. Die Stadt bietet eine Mischung aus Geschichte, Badeort-Flair und einem angenehmen kompakten Zentrum. Wexford ist auch eng mit dem Erbe von Ireland's Ancient East verbunden.",
      hu: "Wexford délkeleti tengerparti város, erős viking gyökerekkel és pezsgő nyári hangulattal. Fesztiváljairól, kikötőjéről, valamint hosszú strandjaihoz és madárban gazdag vizes élőhelyeihez való hozzáféréséről ismert. A város a történelmet, a tengerparti kikapcsolódást és a kellemesen kompakt belvárost ötvözi. Wexford szorosan kapcsolódik Ireland's Ancient East örökségéhez is.",
      ro: "Wexford este un oraș de coastă din sud-est, cu rădăcini vikinge puternice și o atmosferă de vară foarte animată. Este cunoscut pentru festivaluri, port și accesul la plaje lungi și zone umede bogate în păsări. Orașul oferă un amestec de istorie, relaxare la mare și un centru compact plăcut. Wexford este strâns asociat și cu patrimoniul mai larg al Ireland's Ancient East."
    },
  descriptionAdvanced: {
      en: "Wexford is a maritime town in the southeast of Ireland, uniquely situated where the River Slaney enters Wexford Harbour. Founded by Viking raiders around 800 AD, its Old Norse name, 'Waesfjord', translates to 'inlet of mud flats'. The town was the site of the first Norman invasion of Ireland in 1169 and later played a central role in the tragic 1798 Rebellion. Today, Wexford's narrow streets and active fishing port offer students a vivid timeline of Ireland's invasion history and maritime resilience.",

    ro: "Wexford, un oraș de coastă din sud-est, a fost întemeiat de vikingi în anul 800 ca o bază navală strategică. Estuarul larg al râului Slaney a facilitat o istorie maritimă îndelungată, orașul fiind poarta de intrare pentru invazia normandă din secolul al XII-lea. Istoria modernă a orașului este marcată de Rebeliunea Irlandeză din 1798, Wexford fiind un focar al luptelor și un studiu de caz frecvent pentru fenomenele revoluționare europene din acea perioadă. Din punct de vedere geografic, terenul mlăștinos din nordul orașului a fost asanat în secolul al XIX-lea, ilustrând impactul uman asupra peisajului de coastă. Orașul modern își valorifică moștenirea istorică, fiind concomitent un pol regional de servicii administrative."
  },
  factsAdvanced: {
      en: [
      "Wexford was founded by Vikings approximately 1,200 years ago.",
      "The town is internationally famous for the annual Wexford Festival Opera.",
      "Commodore John Barry, known as the 'Father of the American Navy', was born in County Wexford.",
      "The nearby Irish National Heritage Park features detailed reconstructions of historic Irish settlements."
    ],

    ro: [
      "Wexford a fost fondat în anul 800 sub numele viking 'Veisafjǫrðr'.",
      "Invazia normandă a Irlandei a început cu debarcarea la golful Bannow, lângă Wexford, în anul 1169.",
      "Peste 10.000 km de suprafețe mlăștinoase adiacente orașului au fost recuperate din mare la mijlocul secolului al XIX-lea.",
      "Orașul a fost epicentrul luptelor majore în timpul Rebeliunii din 1798."
    ]
  },
    facts: {
      en: ["Wexford has strong Viking-era roots.", "The town is a well-known festival destination.", "It offers access to beaches and estuaries.", "Wexford Harbour shaped its historical role.", "It is part of Ireland's Ancient East tourism story."],
      de: ["Wexford hat starke Wurzeln aus der Wikingerzeit.", "Die Stadt ist ein bekanntes Festivalziel.", "Sie bietet Zugang zu Stränden und Mündungsgebieten.", "Der Hafen von Wexford prägte seine historische Rolle.", "Sie ist Teil der Tourismusgeschichte von Ireland's Ancient East."],
      hu: ["Wexford erős vikingkori gyökerekkel rendelkezik.", "A város ismert fesztiválcélpont.", "Strandokhoz és torkolatvidékekhez biztosít hozzáférést.", "Wexford Harbour történelmi szerepet adott neki.", "Az Ireland's Ancient East turisztikai történetének része."],
      ro: ["Wexford are rădăcini vikinge puternice.", "Orașul este o destinație bine cunoscută pentru festivaluri.", "Oferă acces la plaje și estuare.", "Wexford Harbour i-a modelat rolul istoric.", "Face parte din povestea turistică Ireland's Ancient East."]
    },
    image: "/geo-images/ireland/city-wexford.webp",
  },
  {
    id: "city-navan",
    type: "city",
    parent: "ireland",
    coords: [-6.6889, 53.6515],
    name: { de: "Navan", hu: "Navan", ro: "Navan", en: "Navan" },
    description: {
      en: "Navan is a fast-growing town in County Meath with strong links to the Boyne Valley. It combines commuter convenience with direct access to some of Ireland's best-known historical landscapes. The town has a practical retail and services role while also acting as a base for heritage tourism. Navan is useful for travelers exploring Trim, Tara, and the wider north Leinster corridor.",
      de: "Navan ist eine schnell wachsende Stadt in County Meath mit starken Verbindungen zum Boyne Valley. Sie verbindet Pendlerfreundlichkeit mit direktem Zugang zu einigen der bekanntesten historischen Landschaften Irlands. Die Stadt hat eine praktische Rolle im Handel und Dienstleistungsbereich und dient zugleich als Basis für Kulturtourismus. Navan ist nützlich für Reisende, die Trim, Tara und den breiteren Nord-Leinster-Korridor erkunden.",
      hu: "Navan egy gyorsan növekvő város Meath megyében, erős kötődéssel a Boyne-völgyhöz. Összeköti az ingázóbarát mindennapokat Írország leghíresebb történelmi tájaihoz való közvetlen hozzáféréssel. A város kereskedelmi és szolgáltatási központként is működik, miközben örökségturisztikai bázis. Navan hasznos kiindulópont Trim, Tara és a tágabb észak-leinsteri térség felfedezéséhez.",
      ro: "Navan este un oraș în creștere rapidă din comitatul Meath, cu legături puternice cu valea Boyne. Combină avantajul pentru navetiști cu acces direct la unele dintre cele mai cunoscute peisaje istorice ale Irlandei. Orașul are un rol practic în comerț și servicii, dar și ca bază pentru turismul de patrimoniu. Navan este util pentru cei care explorează Trim, Tara și coridorul nordic din Leinster."
    },
  descriptionAdvanced: {
      en: "Navan is the county town of Meath, located in the fertile Boyne Valley where the River Boyne meets the River Blackwater. Although it originated as a Norman settlement in the late 12th century, the surrounding area has been of massive prehistoric and royal significance, closely tied to the legendary Hill of Tara. Navan grew rapidly as a market town and center for the carpet-making and mining industries. Its proximity to ancient monuments makes it a modern gateway to Ireland's ancient east.",

    ro: "Navan este amplasat la confluența râurilor Boyne și Blackwater, funcționând ca un centru administrativ vital pentru valea râului Boyne, o regiune cu bogate vestigii arheologice. Inițial, un oraș piață normand fortificat, Navan s-a dezvoltat datorită poziției sale geografice care facilita controlul rutelor comerciale către interiorul insulei. Pe parcursul secolului XX, descoperirea și exploatarea zăcămintelor majore de zinc și plumb a transformat economia locală, adăugând o puternică dimensiune industrială și extractivă. Acest exemplu demonstrează elevilor modul în care exploatarea resurselor naturale poate modifica rapid demografia și structura economică a unei regiuni rurale. În prezent, orașul continuă să atragă navetiști datorită proximității sale față de rețeaua rutieră a capitalei."
  },
  factsAdvanced: {
      en: [
      "Navan is home to the Tara Mine, which was one of Europe's largest zinc and lead mines.",
      "The town's name is a palindrome, spelling the same forwards and backwards.",
      "It is located just a few kilometers from the ancient royal site of the Hill of Tara.",
      "Navan has a rapidly growing population of over 33,000 residents."
    ],

    ro: [
      "La periferia orașului se află Tara Mines, cea mai mare mină de zinc din Europa.",
      "Așezarea a fost stabilită la confluența a două râuri importante: Boyne și Blackwater.",
      "Traseul autostrăzii M3 a fost finalizat în apropiere în 2010, reducând timpul de tranzit spre Dublin.",
      "Navan este reședința comitatului Meath, o zonă recunoscută ca fost sediu al Înalților Regi ai Irlandei."
    ]
  },
    facts: {
      en: ["Navan is a major town in County Meath.", "It is closely linked to the Boyne Valley.", "The town supports both commuters and heritage tourism.", "Trim and Tara are nearby historic anchors.", "Navan sits within the wider Dublin commuter belt."],
      de: ["Navan ist eine wichtige Stadt in County Meath.", "Sie ist eng mit dem Boyne Valley verbunden.", "Die Stadt unterstützt sowohl Pendler als auch Kulturtourismus.", "Trim und Tara liegen als historische Zentren in der Nähe.", "Navan liegt im weiteren Pendlergürtel von Dublin."],
      hu: ["Navan Meath megye fontos városa.", "Szorosan kötődik a Boyne-völgyhöz.", "Az ingázókat és az örökségturizmust is kiszolgálja.", "Trim és Tara közeli történelmi központok.", "Navan a dublini ingázóövezet tágabb része."],
      ro: ["Navan este un oraș important din comitatul Meath.", "Este strâns legat de valea Boyne.", "Susține atât navetiștii, cât și turismul de patrimoniu.", "Trim și Tara sunt repere istorice din apropiere.", "Navan se află în zona extinsă de navetă a Dublinului."]
    },
    image: "/geo-images/ireland/city-navan.webp",
  }
];

export const irelandNature: POI[] = [
  {
    id: "nat-cliffs-of-moher",
    type: "landmark",
    parent: "ireland",
    coords: [-9.4725, 52.9719],
    name: { de: "Cliffs of Moher", hu: "Moher-sziklák", ro: "Stâncile Moher", en: "Cliffs of Moher" },
    description: {
      en: "The Cliffs of Moher are one of Ireland's most iconic natural landmarks, stretching for 14 kilometers along the Atlantic coast of County Clare. Rising up to 214 meters above the ocean, they offer breathtaking views of the Aran Islands and the vast Atlantic. The cliffs are home to thousands of seabirds, including puffins, and are a UNESCO Global Geopark. They represent the raw beauty and power of the Irish coastline.",
      de: "Die Cliffs of Moher sind eines der bekanntesten Naturdenkmäler Irlands und erstrecken sich über 14 Kilometer entlang der Atlantikküste der Grafschaft Clare. Sie ragen bis zu 214 Meter über den Ozean empor und bieten atemberaubende Ausblicke auf die Aran-Inseln und den weiten Atlantik. Die Klippen sind die Heimat von Tausenden von Seevögeln, darunter Papageitaucher, und sind ein UNESCO Global Geopark. Sie repräsentieren die rohe Schönheit und Kraft der irischen Küste.",
      hu: "A Moher-sziklák Írország egyik legikonikusabb természeti látványossága, amely 14 kilométer hosszan húzódik az Atlanti-óceán partján, Clare megyében. Akár 214 méterrel az óceán fölé magasodva lélegzetelállító kilátást nyújtanak az Aran-szigetekre és a hatalmas Atlanti-óceánra. A sziklák több ezer tengeri madárnak, köztük lunda-féléknek adnak otthont, és az UNESCO Globális Geopark részét képezik. Az ír tengerpart nyers szépségét és erejét jelképezik.",
      ro: "Stâncile Moher sunt unul dintre cele mai emblematice repere naturale ale Irlandei, întinzându-se pe 14 kilometri de-a lungul coastei atlantice a comitatului Clare. Ridicându-se până la 214 metri deasupra oceanului, acestea oferă vederi uluitoare ale insulelor Aran și ale vastului Atlantic. Stâncile găzduiesc mii de păsări marine, inclusiv pufini, și sunt un Geoparc Global UNESCO. Ele reprezintă frumusețea brută și puterea coastei irlandeze."
    },
  descriptionAdvanced: {
      en: "The Cliffs of Moher are one of Ireland's most awe-inspiring natural landmarks, stretching for 14 kilometers along the rugged Atlantic coast of County Clare. Formed over 300 million years ago, these colossal shale and sandstone precipices plunge vertically into the churning ocean below. They provide a critical habitat for thousands of seabirds, including the charismatic Atlantic Puffin. For geography students, the cliffs are a dramatic demonstration of coastal erosion, geological stratification, and the raw power of the Atlantic Ocean.",

    ro: "Stâncile Moher sunt formațiuni geologice spectaculoase situate pe coasta de vest a Irlandei, reprezentând un prag natural între Oceanul Atlantic și uscat. Ele sunt alcătuite din straturi succesive de șisturi și gresii, formate în urmă cu aproximativ 300 de milioane de ani din depozitele unui bazin maritim antic. În educația geografică, situl este utilizat pentru a ilustra procesele de eroziune marină și acțiunea forțelor hidrodinamice asupra formațiunilor stâncoase litorale. Peisajul influențează semnificativ microclimatul local și susține un ecosistem avifaunistic complex, protejat la nivel european. Din perspectivă economică, stâncile constituie unul dintre pilonii principali ai industriei turismului de coastă din Republica Irlanda."
  },
  factsAdvanced: {
      en: [
      "The cliffs reach their maximum height of 214 meters (702 feet) just north of O'Brien's Tower.",
      "They are composed primarily of beds of Namurian shale and sandstone.",
      "The site supports over 20 species of nesting seabirds, including large colonies of puffins.",
      "On a clear day, the Aran Islands and Galway Bay are visible from the cliff tops."
    ],

    ro: [
      "Stâncile se întind pe o lungime de aproximativ 14 kilometri de-a lungul țărmului Oceanului Atlantic.",
      "Altitudinea maximă a stâncilor atinge 214 metri în apropierea Turnului O'Brien.",
      "Formațiunile găzduiesc o colonie de peste 30.000 de păsări marine din peste 20 de specii diferite.",
      "Stratificațiile rocilor vizibile aici aparțin perioadei geologice Carboniferul Superior."
    ]
  },
    facts: {
      en: ["The cliffs are featured in movies like 'Harry Potter and the Half-Blood Prince'.","O'Brien's Tower marks the highest point of the cliffs.","They are made of Namurian shale and sandstone.","Over 1.5 million people visit the cliffs every year."],
      de: ["Die Klippen sind in Filmen wie 'Harry Potter und der Halbblutprinz' zu sehen.","O'Brien's Tower markiert den höchsten Punkt der Klippen.","Sie bestehen aus namurischem Schiefer und Sandstein.","Über 1,5 Millionen Menschen besuchen die Klippen jedes Jahr."],
      hu: ["A sziklák olyan filmekben szerepelnek, mint a 'Harry Potter és a Félvér Herceg'.","Az O'Brien-torony jelzi a sziklák legmagasabb pontját.","Namuri palából és homokkőből állnak.","Évente több mint 1,5 millió ember látogatja meg a sziklákat."],
      ro: ["Stâncile apar în filme precum 'Harry Potter și Prințul Semipur'.","Turnul lui O'Brien marchează cel mai înalt punct al stâncilor.","Sunt formate din ardezie și gresie namuriană.","Peste 1,5 milioane de oameni vizitează stâncile în fiecare an."]
    },
    image: "/geo-images/ireland/cliffs-of-moher.webp",
  },
  {
    id: "nat-giants-causeway",
    type: "landmark",
    parent: "ireland",
    coords: [-6.5116, 55.2408],
    name: { de: "Giant's Causeway", hu: "Óriások útja", ro: "Giant's Causeway", en: "Giant's Causeway" },
    description: {
      en: "The Giant's Causeway is an area of about 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption. Located on the north coast of Ireland, it is a UNESCO World Heritage site and a place of great geological interest and mythical legend. According to folklore, the columns were built by the giant Finn MacCool as a causeway to Scotland. It is one of the most popular tourist attractions on the island.",
      de: "Der Giant's Causeway ist ein Gebiet mit etwa 40.000 ineinandergreifenden Basaltsäulen, das Ergebnis eines antiken vulkanischen Spaltenausbruchs. Er liegt an der Nordküste Irlands, ist ein UNESCO-Weltkulturerbe und ein Ort von großem geologischem Interesse und mythischer Legende. Der Folklore nach wurden die Säulen vom Riesen Finn MacCool als Damm nach Schottland gebaut. Er ist eine der beliebtesten Touristenattraktionen auf der Insel.",
      hu: "Az Óriások útja körülbelül 40 000 egymásba kapcsolódó bazaltoszlopból álló terület, amely egy ősi vulkáni repedéskitörés eredménye. Írország északi partján található, az UNESCO Világörökség része, és nagy geológiai érdeklődésre számot tartó, mitikus legendákkal övezett hely. A folklór szerint az oszlopokat az óriás Finn MacCool építette útként Skóciába. A sziget egyik legnépszerűbb turisztikai látványossága.",
      ro: "Giant's Causeway este o zonă cu aproximativ 40.000 de coloane de bazalt interconectate, rezultatul unei vechi erupții vulcanice. Situat pe coasta de nord a Irlandei, este un sit al Patrimoniului Mondial UNESCO și un loc de mare interes geologic și legendă mitică. Conform folclorului, coloanele au fost construite de gigantul Finn MacCool ca un drum către Scoția. Este una dintre cele mai populare atracții turistice de pe insulă."
    },
  descriptionAdvanced: {
      en: "The Giant's Causeway, located on the northern coast of Northern Ireland, is a geological wonder renowned for its tens of thousands of interlocking basalt columns. Formed approximately 50 to 60 million years ago during intense volcanic activity, the rapidly cooling lava contracted and fractured into near-perfect hexagonal pillars. According to local folklore, it was built by the mythical giant Finn MacCool as a stepping-stone bridge to Scotland. This UNESCO World Heritage site is an outstanding outdoor classroom for studying volcanism and igneous rock formations.",

    ro: "Giant's Causeway, situat pe coasta de nord a Irlandei de Nord, este o structură geologică rară rezultată în urma unei activități vulcanice intense în epoca Paleocenului. Formațiunea este alcătuită din zeci de mii de coloane de bazalt interconectate, generate de răcirea și contracția rapidă a lavei topite. Acest sit reprezintă un material didactic de excepție pentru explicarea vulcanismului, a geometriei fracturilor de răcire și a geomorfologiei litorale. În paralel cu formarea sa geologică, situl a generat o bogată mitologie locală, ilustrând tendința istorică a comunităților umane de a explica fenomenele naturale complexe prin intermediul legendelor. Astăzi, situl este protejat internațional și contribuie substanțial la dezvoltarea regiunii."
  },
  factsAdvanced: {
      en: [
      "The Causeway consists of roughly 40,000 interlocking basalt columns.",
      "The tallest columns reach heights of nearly 12 meters (39 feet).",
      "It is the only UNESCO World Heritage site located in Northern Ireland.",
      "The distinct hexagonal shapes were caused by the rapid contraction of cooling lava."
    ],

    ro: [
      "Situl cuprinde aproximativ 40.000 de coloane de bazalt poligonale, majoritatea având șase laturi.",
      "Giant's Causeway a fost inclus în Patrimoniul Mondial UNESCO în anul 1986.",
      "Erupțiile vulcanice care au creat structura au avut loc cu aproximativ 50 până la 60 de milioane de ani în urmă.",
      "Cea mai înaltă coloană din ansamblu măsoară 12 metri în înălțime."
    ]
  },
    facts: {
      en: ["Most of the columns are hexagonal in shape.","The tallest columns are about 12 meters high.","It was formed approximately 50 to 60 million years ago.","The site is managed by the National Trust."],
      de: ["Die meisten Säulen haben eine sechseckige Form.","Die höchsten Säulen sind etwa 12 Meter hoch.","Es entstand vor etwa 50 bis 60 Millionen Jahren.","Die Stätte wird vom National Trust verwaltet."],
      hu: ["Az oszlopok többsége hatszögletű.","A legmagasabb oszlopok körülbelül 12 méter magasak.","Körülbelül 50-60 millió évvel ezelőtt keletkezett.","A helyszínt a National Trust kezeli."],
      ro: ["Majoritatea coloanelor au formă hexagonală.","Cele mai înalte coloane au aproximativ 12 metri înălțime.","S-a format acum aproximativ 50 până la 60 de milioane de ani.","Situl este administrat de National Trust."]
    },
    image: "/geo-images/ireland/giants-causeway.webp",
  },
    {
    id: "nat-ring-kerry",
    type: "landmark",
    parent: "ireland",
    coords: [-9.8, 51.9],
    name: { de: "Ring of Kerry", hu: "Ring of Kerry", ro: "Ring of Kerry", en: "Ring of Kerry" },
    description: {
      en: "The Ring of Kerry is a scenic coastal circuit around the Iveragh Peninsula in southwest Ireland.",
      de: "Der Ring of Kerry ist eine landschaftlich reizvolle Küstenroute rund um die Iveragh-Halbinsel im Südwesten Irlands.",
      hu: "A Ring of Kerry egy festői part menti körút az Iveragh-félsziget körül Írország délnyugati részén.",
      ro: "Ring of Kerry este un traseu scenic de coastă în jurul Peninsulei Iveragh, în sud-vestul Irlandei."
    },
  descriptionAdvanced: {
      en: "The Ring of Kerry is a legendary 179-kilometer circular scenic route in southwestern Ireland, tracing the perimeter of the Iveragh Peninsula. The landscape is a breathtaking tapestry of sheer ocean cliffs, pristine lakes, and the towering MacGillycuddy's Reeks mountain range. It weaves through ancient stone forts, ruined monasteries, and traditional Gaelic-speaking villages. This route is an extraordinary geographical showcase of glacial carving, coastal resilience, and the deep historical layering of rural Ireland.",

    ro: "Ring of Kerry este un traseu circular pitoresc situat pe Peninsula Iveragh, în sud-vestul Irlandei, ce oferă o sinteză a diversității geografice a coastei atlantice. Relieful este dominat de lanțuri muntoase accidentate formate din gresie veche roșie și văi adânci sculptate de activitatea glaciară din Pleistocen. Regiunea a conservat o parte semnificativă a moștenirii istorice celte și creștine timpurii, datorită izolării sale geografice relative. Studiul acestei regiuni permite înțelegerea impactului glaciațiunilor asupra morfologiei terenului și a adaptării așezărilor rurale la un mediu cu soluri subțiri și climat oceanic umed. Astăzi, managementul acestui peisaj reflectă eforturile de echilibrare între conservarea naturală și fluxurile turistice constante."
  },
  factsAdvanced: {
      en: [
      "The driving route is approximately 179 kilometers (111 miles) long.",
      "It encircles the Iveragh Peninsula, one of Ireland's largest peninsulas.",
      "The route includes the expansive Killarney National Park and the Lakes of Killarney.",
      "It passes close to Skellig Michael, an ancient island monastery and UNESCO World Heritage site."
    ],

    ro: [
      "Traseul circuitului măsoară aproximativ 179 de kilometri în lungime.",
      "Peninsula este străbătută de lanțul muntos MacGillycuddy's Reeks, cel mai înalt masiv din Irlanda.",
      "Parcul Național Killarney, traversat de acest traseu, are o suprafață de 10.236 de hectare.",
      "Zona include regiuni 'Gaeltacht', unde se utilizează în mod curent limba irlandeză."
    ]
  },
    facts: {
      en: ["It is about 179 kilometers long.", "It passes Killarney National Park.", "It is one of Ireland's classic drives.", "It combines sea, mountains, and lakes."],
      de: ["Er ist etwa 179 Kilometer lang.", "Er führt am Killarney National Park vorbei.", "Er ist eine klassische Irland-Rundfahrt.", "Er verbindet Meer, Berge und Seen."],
      hu: ["Körülbelül 179 kilométer hosszú.", "Érinti a Killarney Nemzeti Parkot.", "Írország klasszikus körútjai közé tartozik.", "A tenger, a hegyek és a tavak keveréke."],
      ro: ["Are aproximativ 179 de kilometri.", "Trece pe lângă Parcul Național Killarney.", "Este unul dintre drumurile clasice ale Irlandei.", "Combină marea, munții și lacurile."]
    },
    image: "/geo-images/ireland/ring-of-kerry.webp",
  },
  {
    id: "nat-connemara",
    type: "landmark",
    parent: "ireland",
    coords: [-9.7, 53.5],
    name: { de: "Connemara", hu: "Connemara", ro: "Connemara", en: "Connemara" },
    description: {
      en: "Connemara is a wild western region known for moorland, mountains, and a strong Gaelic identity.",
      de: "Connemara ist eine wilde westliche Region, bekannt für Moorlandschaften, Berge und eine starke gälische Identität.",
      hu: "Connemara egy vad nyugati régió, amely mocsárvidékeiről, hegyeiről és erős gael identitásáról ismert.",
      ro: "Connemara este o regiune sălbatică din vest, cunoscută pentru mlaștini, munți și o identitate gaelică puternică."
    },
  descriptionAdvanced: {
      en: "Connemara is a region of stark and untamed beauty situated in western County Galway. Bounded by the Atlantic Ocean and defined by the rugged Twelve Bens mountain range, it is a landscape of expansive bogs, hidden lakes, and pristine beaches. Connemara is notably recognized as a Gaeltacht, an area where the Irish language and traditional customs are fiercely preserved. The difficult, rocky terrain historically limited agricultural development, leading to a unique culture deeply adapted to a harsh but mesmerizing environment.",

    ro: "Connemara este o regiune geografică izolată și sălbatică situată în vestul comitatului Galway, caracterizată prin soluri turboase, lacuri glaciare și munți stâncoși. Geologia complexă a zonei include formațiuni de cuarțit masiv, cunoscute sub numele de Twelve Bens, care domină peisajul arid și defrișat istoric. Din punct de vedere cultural, Connemara funcționează ca un bastion principal al limbii irlandeze (Gaeltacht) și al tradițiilor rurale pre-industriale. Studiul geografiei sale evidențiază modul în care terenurile marginale, inospitaliere agriculturii pe scară largă, au conservat practicile de subzistență, cum ar fi tăierea turbei pentru combustibil. Peisajul distinct a inspirat numeroși artiști și rămâne o arie protejată de interes național."
  },
  factsAdvanced: {
      en: [
      "Connemara National Park covers nearly 3,000 hectares of mountains, bogs, and heaths.",
      "The region is famous for breeding the Connemara Pony, known for its hardiness and agility.",
      "It is one of the largest Gaeltacht (Irish-speaking) regions in the country.",
      "The area's geology is dominated by ancient metamorphic rocks like quartzite and marble."
    ],

    ro: [
      "Lanțul muntos Twelve Bens din Connemara include vârfuri care depășesc frecvent altitudinea de 700 de metri.",
      "Parcul Național Connemara acoperă o suprafață de aproximativ 2.957 de hectare.",
      "O porțiune semnificativă a solului regiunii este formată din turbării extinse, utilizate istoric ca sursă de încălzire.",
      "Regiunea deține cea mai mare populație vorbitoare nativ de limba irlandeză din țară."
    ]
  },
    facts: {
      en: ["It is strongly associated with the Irish language.", "The landscape is rugged and remote.", "The Twelve Bens are a key mountain group.", "It is a major hiking area."],
      de: ["Sie ist stark mit der irischen Sprache verbunden.", "Die Landschaft ist rau und abgelegen.", "Die Twelve Bens sind eine wichtige Berggruppe.", "Sie ist ein wichtiges Wandergebiet."],
      hu: ["Erősen kötődik az ír nyelvhez.", "A táj vad és félreeső.", "A Twelve Bens fontos hegység.", "Népszerű túrahely."],
      ro: ["Este puternic asociată cu limba irlandeză.", "Peisajul este aspru și izolat.", "Twelve Bens este un grup muntos important.", "Este o zonă majoră pentru drumeții."]
    },
    image: "/geo-images/ireland/connemara.webp",
  },
  {
    id: "nat-burren",
    type: "landmark",
    parent: "ireland",
    coords: [-9.2, 53.0],
    name: { de: "The Burren", hu: "The Burren", ro: "The Burren", en: "The Burren" },
    description: {
      en: "The Burren is a limestone karst landscape in County Clare known for its rocks, flowers, and archaeological remains.",
      de: "The Burren ist eine Kalkstein-Karstlandschaft in County Clare, bekannt für ihre Felsen, Blumen und archäologischen Überreste.",
      hu: "The Burren egy mészkőből álló karsztvidék Clare megyében, amely szikláiról, virágairól és régészeti maradványairól ismert.",
      ro: "The Burren este un peisaj carstic calcaros din comitatul Clare, cunoscut pentru stânci, flori și vestigii arheologice."
    },
  descriptionAdvanced: {
      en: "The Burren, located in County Clare, is a vast glaciated karst landscape that appears almost lunar in its desolation. Covering over 250 square kilometers, it features expansive pavements of limestone rock, deeply fissured by crevices called 'grikes'. Despite its barren appearance, the Burren hosts an extraordinary microclimate where Arctic, Alpine, and Mediterranean plant species grow side by side. It provides geography students with a unique example of subterranean drainage systems, cave formation, and highly specialized ecological niches.",

    ro: "The Burren este un platou carstic extins situat în nord-vestul comitatului Clare, definit de pavaje de calcar arid expuse la suprafață. Această formațiune a fost creată prin acumularea sedimentelor marine în perioada Carboniferului, urmată de ridicarea tectonică și eroziunea glacială. Fenomenele carstice, cum ar fi dolinele, sistemele extinse de peșteri și râurile subterane, oferă material excelent pentru studiul hidrologiei și geomorfologiei. Peisajul susține un ecosistem botanic unic în lume, în care flora arctic-alpină coexistă cu specii mediteraneene, datorită microclimatului generat de absorbția căldurii de către roci. Din punct de vedere arheologic, regiunea abundă în morminte portal și forturi circulare, demonstrând o locuire umană timpurie densă."
  },
  factsAdvanced: {
      en: [
      "The name 'Burren' comes from the Irish word 'Boireann', meaning 'great rock'.",
      "It contains over 70% of Ireland's native flora species.",
      "The Burren is home to numerous prehistoric sites, including the 5,800-year-old Poulnabrone Dolmen.",
      "The limestone pavement was primarily formed during the Carboniferous period, over 300 million years ago."
    ],

    ro: [
      "Aria de calcar a regiunii Burren acoperă o suprafață de aproximativ 250 de kilometri pătrați.",
      "Monumentul megalitic Poulnabrone Dolmen din zonă a fost datat între anii 3800 și 3200 î.Hr.",
      "Sistemul de peșteri de la Aillwee are o lungime explorată de peste 1.000 de metri.",
      "Peste 70% din speciile de plante indigene din Irlanda se găsesc pe teritoriul acestui parc național."
    ]
  },
    facts: {
      en: ["It has rare Arctic-Alpine plants.", "It is a karst landscape.", "Ancient tombs are found there.", "It lies near the Cliffs of Moher."],
      de: ["Dort wachsen seltene arktisch-alpine Pflanzen.", "Es ist eine Karstlandschaft.", "Dort gibt es alte Gräber.", "Es liegt in der Nähe der Cliffs of Moher."],
      hu: ["Ritka sarkvidéki-alpesi növények élnek itt.", "Karsztvidék.", "Ősi sírok találhatók ott.", "A Cliffs of Moher közelében fekszik."],
      ro: ["Acolo cresc plante rare arctic-alpine.", "Este un peisaj carstic.", "Acolo se găsesc morminte antice.", "Se află lângă Cliffs of Moher."]
    },
    image: "/geo-images/ireland/burren.webp",
  }
  ,
  {
    id: "nat-carrauntoohil",
    type: "mountain",
    parent: "ireland",
    coords: [-9.7428, 52.0055],
    name: { de: "Carrauntoohil", hu: "Carrauntoohil", ro: "Carrauntoohil", en: "Carrauntoohil" },
    description: {
      en: "Carrauntoohil is Ireland's highest mountain and the flagship peak of the MacGillycuddy's Reeks. It rises sharply above Kerry and draws hikers who want a serious but rewarding summit route. The mountain is a strong SEO keyword for Irish adventure travel because it combines altitude, scenery, and challenge. From the top, visitors get wide views over lakes, ridges, and the southwest coast.",
      de: "Carrauntoohil ist Irlands höchster Berg und der markante Gipfel der MacGillycuddy's Reeks. Er ragt steil über Kerry auf und zieht Wanderer an, die eine anspruchsvolle, aber lohnende Gipfeltour suchen. Der Berg ist ein starkes SEO-Thema für Irlands Abenteuertourismus, weil er Höhe, Landschaft und Herausforderung verbindet. Vom Gipfel aus reicht der Blick weit über Seen, Grate und die Südwestküste.",
      hu: "A Carrauntoohil Írország legmagasabb hegye és a MacGillycuddy's Reeks zászlóshajó csúcsa. Meredeken emelkedik Kerry fölé, és azokat a túrázókat vonzza, akik komoly, de jutalmazó csúcstúrát keresnek. Az ír aktív turizmus egyik erős SEO-kulcsszava, mert magasságot, tájat és kihívást egyesít. A csúcsról széles kilátás nyílik tavakra, gerincekre és a délnyugati partra.",
      ro: "Carrauntoohil este cel mai înalt munte din Irlanda și vârful emblematic al masivului MacGillycuddy's Reeks. Se ridică abrupt deasupra comitatului Kerry și atrage drumeți care caută un traseu de vârf serios, dar răsplătitor. Muntele este un cuvânt-cheie puternic pentru turismul de aventură din Irlanda, deoarece combină altitudinea, peisajul și provocarea. De pe vârf, vizitatorii au priveliști largi asupra lacurilor, crestelor și coastei de sud-vest."
    },
  descriptionAdvanced: {
      en: "Carrauntoohil is the highest mountain on the island of Ireland, standing proudly within the MacGillycuddy's Reeks range in County Kerry. Formed primarily of old red sandstone, its sharp ridges and deep corrie lakes are a dramatic testament to the intensive glacial action during the last Ice Age. The mountain's summit is marked by a large steel cross and offers sweeping views of the surrounding rugged peninsula. It is a critical study site for understanding alpine glaciation and high-altitude ecology in a maritime climate.",

    ro: "Carrauntoohil este cel mai înalt vârf muntos de pe insula Irlanda, localizat în masivul MacGillycuddy's Reeks din sud-vestul țării. Structura sa geologică este predominant alcătuită din gresie veche roșie, fiind masiv sculptată și modelată de procesele de îngheț-dezgheț și de ghețarii din ultima eră glaciară. Studiul topografiei sale, care include circuri glaciare adânci și creste ascuțite, sprijină direct programa de geografie fizică privind acțiunea morfologică a glaciațiunilor alpine. Deși altitudinea sa nu este comparabilă cu marile lanțuri muntoase continentale, ascensiunea sa prezintă dificultăți tehnice din cauza condițiilor meteorologice oceanice instabile. Zona este integrată într-un areal de conservare montană esențial pentru protejarea habitatelor de altitudine."
  },
  factsAdvanced: {
      en: [
      "Carrauntoohil stands at an elevation of 1,038 meters (3,407 feet).",
      "It is part of the MacGillycuddy's Reeks, Ireland's highest mountain range.",
      "The summit is adorned with a 5-meter-tall steel cross erected in 1976.",
      "The mountain is composed primarily of durable Devonian sandstone."
    ],

    ro: [
      "Vârful Carrauntoohil atinge o altitudine maximă de 1.038 de metri deasupra nivelului mării.",
      "O cruce metalică de 5 metri înălțime a fost ridicată pe vârf în anul 1976.",
      "Muntele prezintă trei circuri glaciare majore formate în timpul ultimei glaciațiuni.",
      "Fauna montană locală include specii rare de păsări de pradă, precum șoimul călător."
    ]
  },
    facts: {
      en: ["Carrauntoohil is the highest peak in Ireland.", "It stands in County Kerry.", "The mountain is part of the MacGillycuddy's Reeks.", "Popular routes include the Devil's Ladder.", "Summit views reach across much of southwest Ireland."],
      de: ["Carrauntoohil ist der höchste Gipfel Irlands.", "Er liegt in County Kerry.", "Der Berg gehört zu den MacGillycuddy's Reeks.", "Beliebte Routen führen über die Devil's Ladder.", "Vom Gipfel sieht man weite Teile des Südwestens."],
      hu: ["A Carrauntoohil Írország legmagasabb csúcsa.", "County Kerryben található.", "A MacGillycuddy's Reeks hegység része.", "Népszerű útvonal a Devil's Ladder.", "A csúcsról a délnyugat jelentős része belátható."],
      ro: ["Carrauntoohil este cel mai înalt vârf din Irlanda.", "Se află în comitatul Kerry.", "Face parte din MacGillycuddy's Reeks.", "Un traseu popular este Devil's Ladder.", "De pe vârf se vede mare parte din sud-vestul Irlandei."]
    },
    image: "/geo-images/ireland/carrauntoohil.webp",
  },
  {
    id: "nat-croagh-patrick",
    type: "mountain",
    parent: "ireland",
    coords: [-9.6587, 53.7595],
    name: { de: "Croagh Patrick", hu: "Croagh Patrick", ro: "Croagh Patrick", en: "Croagh Patrick" },
    description: {
      en: "Croagh Patrick is a famous pilgrimage mountain in County Mayo overlooking Clew Bay. Its conical shape and religious significance make it one of the most recognizable natural landmarks in western Ireland. The annual climb attracts walkers, pilgrims, and travel content focused on Irish heritage and scenery. Croagh Patrick delivers a strong mix of outdoor challenge, faith history, and coastal panoramas.",
      de: "Croagh Patrick ist ein berühmter Pilgerberg in County Mayo mit Blick auf Clew Bay. Seine kegelförmige Gestalt und seine religiöse Bedeutung machen ihn zu einem der bekanntesten Naturdenkmäler im Westen Irlands. Der jährliche Aufstieg zieht Wanderer, Pilger und Reisefans an, die sich für irisches Erbe und Landschaft interessieren. Croagh Patrick verbindet Outdoor-Herausforderung, Religionsgeschichte und Küstenpanorama.",
      hu: "A Croagh Patrick egy híres zarándokhegy Mayo megyében, kilátással a Clew-öbölre. Kúpos alakja és vallási jelentősége miatt Nyugat-Írország egyik legismertebb természeti jelképe. Az évenkénti megmászása túrázókat, zarándokokat és örökségturizmusra épülő tartalmakat vonz. A Croagh Patrick a szabadtéri kihívást, a hit történetét és a tengerparti panorámát ötvözi.",
      ro: "Croagh Patrick este un munte de pelerinaj celebru din comitatul Mayo, cu vedere spre Clew Bay. Forma sa conică și semnificația religioasă îl fac unul dintre cele mai recognoscibile repere naturale din vestul Irlandei. Urcarea anuală atrage drumeți, pelerini și conținut de turism axat pe patrimoniul și peisajele irlandeze. Croagh Patrick oferă o combinație puternică de provocare outdoor, istorie religioasă și panorame de coastă."
    },
  descriptionAdvanced: {
      en: "Croagh Patrick, towering over Clew Bay in County Mayo, is a mountain of immense religious and cultural significance in Ireland. Often referred to as 'The Reek', it is celebrated as the site where Saint Patrick supposedly fasted for forty days in 441 AD. Visually striking due to its distinctive quartzite pyramidal peak, the mountain has been a site of pagan and Christian pilgrimage for over 3,000 years. It offers a fascinating intersection of physical geology and ancient human tradition.",

    ro: "Croagh Patrick este un munte cu o formă conică distinctivă, situat în comitatul Mayo, care a căpătat o importanță spirituală și istorică remarcabilă. Geologic, forma sa piramidală este rezultatul compoziției masive de cuarțit și al proceselor prelungite de eroziune glaciară. Din punct de vedere cultural și istoric, muntele a fost un loc de pelerinaj păgân, asimilat ulterior de tradiția creștină prin legenda Sfântului Patrick, care ar fi postit aici timp de patruzeci de zile. Acest fenomen de continuitate a practicilor religioase ilustrează pentru elevi modul în care tradițiile precreștine au fost integrate în cultura galică medievală. Ascensiunile anuale reprezintă un aspect fundamental al practicării religioase și al identității locale din vestul Irlandei."
  },
  factsAdvanced: {
      en: [
      "Croagh Patrick stands at a height of 764 meters (2,507 feet) above sea level.",
      "Every year on Reek Sunday, tens of thousands of pilgrims climb the mountain.",
      "The distinctive conical shape is due to its highly resistant quartzite composition.",
      "A small chapel was built on the summit in 1905 to accommodate pilgrims."
    ],

    ro: [
      "Croagh Patrick are o altitudine de 764 de metri, fiind vizibil de la distanțe mari de pe coastă.",
      "Se estimează că peste 100.000 de pelerini urcă pe munte în fiecare an, majoritatea în luna iulie.",
      "O mică capelă a fost construită în mod voluntar pe vârful muntelui în anul 1905.",
      "Baza muntelui oferă o perspectivă largă asupra Golfului Clew, care conține peste 100 de insule scufundate (drumlin)."
    ]
  },
    facts: {
      en: ["Croagh Patrick is linked to Saint Patrick.", "It overlooks Clew Bay in County Mayo.", "The summit climb is a major pilgrimage tradition.", "Its shape is visible from far across the coast.", "It is one of Ireland's best-known hiking peaks."],
      de: ["Croagh Patrick ist mit dem heiligen Patrick verbunden.", "Er überblickt die Clew Bay in County Mayo.", "Der Aufstieg ist eine wichtige Pilgertradition.", "Seine Form ist weit entlang der Küste sichtbar.", "Er gehört zu Irlands bekanntesten Wanderbergen."],
      hu: ["A Croagh Patrick Szent Patrikhoz kapcsolódik.", "A County Mayo-beli Clew-öböl fölé magasodik.", "A csúcsra vezető út fontos zarándokhagyomány.", "Formája messziről látható a part mentén.", "Írország egyik legismertebb túrahegye."],
      ro: ["Croagh Patrick este legat de Sfântul Patrick.", "Domină Clew Bay din comitatul Mayo.", "Urcarea pe vârf este o tradiție majoră de pelerinaj.", "Forma sa se vede de departe de-a lungul coastei.", "Este unul dintre cei mai cunoscuți munți de drumeție din Irlanda."]
    },
    image: "/geo-images/ireland/croagh-patrick.webp",
  },
  {
    id: "nat-lough-corrib",
    type: "lake",
    parent: "ireland",
    coords: [-9.3000, 53.4250],
    name: { de: "Lough Corrib", hu: "Lough Corrib", ro: "Lough Corrib", en: "Lough Corrib" },
    description: {
      en: "Lough Corrib is one of Ireland's largest lakes and a major freshwater tourism destination in the west. It stretches north of Galway and is known for angling, islands, and peaceful scenic boating. The lake is a strong fit for SEO content about Irish nature, water travel, and outdoor breaks. Its shoreline links rural landscapes with access to Galway city and Connemara.",
      de: "Lough Corrib ist einer der größten Seen Irlands und ein bedeutendes Süßwasserreiseziel im Westen. Er erstreckt sich nördlich von Galway und ist für Angeln, Inseln und ruhige Bootstouren bekannt. Der See eignet sich stark für SEO-Inhalte über irische Natur, Wasserreisen und Outdoor-Aufenthalte. Seine Ufer verbinden ländliche Landschaften mit dem Zugang zur Stadt Galway und nach Connemara.",
      hu: "A Lough Corrib Írország egyik legnagyobb tava és a nyugati régió kiemelt édesvízi turisztikai célpontja. Galwaytől északra húzódik, és horgászatról, szigetekről, valamint nyugodt hajózásról ismert. A tó jól illik az ír természetről, vízi utazásról és aktív pihenésről szóló SEO tartalmakba. Partvidéke a vidéki tájat Galway városával és Connemarával köti össze.",
      ro: "Lough Corrib este unul dintre cele mai mari lacuri din Irlanda și o destinație majoră de turism pe apă dulce în vest. Se întinde la nord de Galway și este cunoscut pentru pescuit, insule și plimbări liniștite cu barca. Lacul se potrivește foarte bine pentru conținut SEO despre natura irlandeză, călătorii pe apă și escapade outdoor. Țărmurile sale leagă peisajele rurale de orașul Galway și de Connemara."
    },
  descriptionAdvanced: {
      en: "Lough Corrib, situated mostly in County Galway, is the largest lake within the Republic of Ireland. It acts as a vast natural boundary, separating the fertile limestone plains to the east from the rugged bogs of Connemara to the west. The lake is famously dotted with hundreds of small islands, many containing ancient monastic ruins and wildlife habitats. Its extensive freshwater ecosystem is vital for regional biodiversity, making it an excellent subject for studying wetland conservation and hydrology.",

    ro: "Lough Corrib este al doilea cel mai mare lac de pe insula Irlanda, situat în regiunea de vest și divizând peisajele din comitatul Galway. Bazinul său hidrografic joacă un rol central în drenarea regiunilor de câmpie spre Oceanul Atlantic prin scurtul curs al râului Corrib. Geografia lacului este remarcabilă prin prezența a sute de mici insule împădurite și a unui relief carstic în partea sa nordică. Din punct de vedere istoric, lacul a facilitat transportul și a găzduit numeroase așezări monahale și fortificații izolate pe insulele sale. Astăzi, corpul de apă este vital pentru biodiversitatea locală și este recunoscut pe plan internațional pentru importanța sa în managementul apelor interioare și pescuit."
  },
  factsAdvanced: {
      en: [
      "Lough Corrib covers an area of approximately 176 square kilometers.",
      "Legend claims the lake has 365 islands, though modern mapping counts over 1,300.",
      "It drains into the Atlantic Ocean via the short River Corrib in Galway City.",
      "The lake is an internationally renowned destination for wild brown trout fishing."
    ],

    ro: [
      "Lough Corrib acoperă o suprafață totală de aproximativ 176 de kilometri pătrați.",
      "Lacul conține oficial peste 1.300 de mici insule și aflorimente stâncoase.",
      "Râul Corrib, care drenează lacul, are o lungime de doar 6 kilometri până la vărsarea în ocean.",
      "Adâncimea maximă a lacului atinge aproximativ 47 de metri în bazinul nordic."
    ]
  },
    facts: {
      en: ["Lough Corrib is one of the largest lakes in Ireland.", "It lies north of Galway city.", "The lake is popular for angling.", "It contains numerous islands.", "Lough Corrib is connected with scenic boat travel."],
      de: ["Lough Corrib ist einer der größten Seen Irlands.", "Er liegt nördlich der Stadt Galway.", "Der See ist bei Anglern beliebt.", "Er enthält zahlreiche Inseln.", "Lough Corrib ist mit malerischen Bootstouren verbunden."],
      hu: ["A Lough Corrib Írország egyik legnagyobb tava.", "Galway városától északra fekszik.", "Népszerű horgászhely.", "Számos szigetet tartalmaz.", "A Lough Corrib festői hajókirándulásokkal is összekapcsolt."],
      ro: ["Lough Corrib este unul dintre cele mai mari lacuri din Irlanda.", "Se află la nord de orașul Galway.", "Lacul este popular pentru pescuit.", "Conține numeroase insule.", "Lough Corrib este asociat cu plimbări pitorești cu barca."]
    },
    image: "/geo-images/ireland/lough-corrib.webp",
  },
  {
    id: "nat-lough-derg",
    type: "lake",
    parent: "ireland",
    coords: [-8.28, 52.93],
    name: { de: "Lough Derg", hu: "Lough Derg", ro: "Lough Derg", en: "Lough Derg" },
    description: {
      en: "Lough Derg is a large Shannon lake that shapes the borders of several counties in western Ireland. It is valued for boating, lakeside villages, and its role in the river system of the Shannon. The lake supports calm travel content, holiday search intent, and strong scenic keyword coverage for Irish water destinations. Around its shores, visitors find a mix of quiet nature, heritage stops, and waterside leisure.",
      de: "Lough Derg ist ein großer Shannon-See, der die Grenzen mehrerer westirischer Counties prägt. Er ist für Bootsfahrten, Seeuferdörfer und seine Rolle im Shannon-Flusssystem geschätzt. Der See eignet sich gut für Inhalte über ruhiges Reisen, Urlaubsabsichten und starke SEO-Keywords zu irischen Wasserzielen. An seinen Ufern finden Besucher eine Mischung aus stiller Natur, Kulturobjekten und Freizeit am Wasser.",
      hu: "A Lough Derg egy nagy Shannon-tó, amely több nyugat-írországi megye határát is formálja. Hajózásról, tóparti falvakról és a Shannon folyórendszerében betöltött szerepéről ismert. A tó jól használható a nyugodt utazásról, pihenésről és az ír vízi célpontok SEO-kulcsszavairól szóló tartalmakban. Partjain csendes természet, örökségi megállók és vízparti kikapcsolódás várja a látogatót.",
      ro: "Lough Derg este un lac mare de pe Shannon, care modelează granițele mai multor comitate din vestul Irlandei. Este apreciat pentru plimbări cu barca, sate de pe mal și rolul său în sistemul fluvial Shannon. Lacul susține conținut despre călătorii liniștite, intenție de vacanță și cuvinte-cheie puternice pentru destinațiile acvatice din Irlanda. Pe țărmurile sale, vizitatorii găsesc un amestec de natură calmă, opriri de patrimoniu și relaxare la apă."
    },
  descriptionAdvanced: {
      en: "Lough Derg is the second-largest lake in the Republic of Ireland and forms a massive, elongated basin along the lower reaches of the River Shannon. Bordering counties Clare, Galway, and Tipperary, the lake has been a critical navigational artery and food source since prehistoric times. During the early Christian period, its shores and islands were highly sought after for monastic settlements. Today, Lough Derg is a vital resource for hydroelectric power and water management, demonstrating human interaction with major aquatic systems.",

    ro: "Lough Derg, situat pe cursul inferior al râului Shannon, este unul dintre cele mai extinse lacuri de apă dulce din Irlanda, acționând ca o graniță naturală între mai multe comitate. Funcția sa hidrologică principală este reglarea debitului masivului sistem hidrografic Shannon înainte ca acesta să atingă estuarul și oceanul. Din perspectiva istoriei ecleziastice, insulele lacului au adăpostit comunități monahale semnificative, esențiale pentru înțelegerea monahismului irlandez timpuriu și a invaziilor vikinge pe căile navigabile interioare. De asemenea, lacul a fost o componentă cheie a transportului comercial prin canalele navigabile construite în secolul al XIX-lea. Astăzi, este valorificat pentru generarea de energie hidroelectrică, protecția mediului și activități de navigație de agrement."
  },
  factsAdvanced: {
      en: [
      "Lough Derg covers an area of roughly 130 square kilometers.",
      "It is the largest of the three main lakes on the River Shannon system.",
      "Inishcealtra (Holy Island) in the lake features the ruins of an ancient monastic settlement.",
      "The lake is utilized for regulating water levels for the Ardnacrusha hydroelectric power station."
    ],

    ro: [
      "Suprafața totală a lacului Lough Derg este de aproximativ 130 de kilometri pătrați.",
      "Lacul este al treilea ca mărime de pe insula Irlanda și se întinde pe o lungime de 40 de kilometri.",
      "Hidrocentrala de la Ardnacrusha, situată în aval, utilizează debitul reglat de acest lac încă din 1929.",
      "Lacul este situat la confluența granițelor comitatelor Clare, Galway și Tipperary."
    ]
  },
    facts: {
      en: ["Lough Derg is part of the River Shannon system.", "It borders several counties.", "Boating is a major activity on the lake.", "The area includes quiet lakeside villages.", "It is a strong keyword for inland Irish travel."],
      de: ["Lough Derg gehört zum Flusssystem des Shannon.", "Es grenzt an mehrere Counties.", "Bootfahren ist eine Hauptaktivität auf dem See.", "Die Gegend umfasst ruhige Seeuferdörfer.", "Es ist ein starkes Keyword für Reisen ins Binnenland."],
      hu: ["A Lough Derg a Shannon folyórendszer része.", "Több megyével határos.", "A hajózás fontos tevékenység a tavon.", "A térségben csendes tóparti falvak találhatók.", "Erős kulcsszó az ír belföldi utazásokhoz."],
      ro: ["Lough Derg face parte din sistemul râului Shannon.", "Se învecinează cu mai multe comitate.", "Plimbările cu barca sunt o activitate importantă pe lac.", "Zona include sate liniștite pe malul apei.", "Este un cuvânt-cheie puternic pentru turismul inland din Irlanda."]
    },
    image: "/geo-images/ireland/lough-derg.webp",
  },
  {
    id: "nat-river-shannon",
    type: "river",
    parent: "ireland",
    coords: [-8.628, 52.664],
    name: { de: "River Shannon", hu: "Shannon folyó", ro: "Râul Shannon", en: "River Shannon" },
    description: {
      en: "The River Shannon is the longest river in Ireland and one of the country's defining waterways. It flows through lakes, towns, and broad inland landscapes, making it central to Irish travel and geography. Shannon-focused content performs well because the river connects nature, boating, heritage, and regional identity. From source to estuary, it shapes the story of central and western Ireland.",
      de: "Der River Shannon ist der längste Fluss Irlands und eine der prägenden Wasserstraßen des Landes. Er fließt durch Seen, Städte und weite Binnenlandschaften und ist damit zentral für Reisen und Geografie in Irland. Shannon-Inhalte funktionieren stark, weil der Fluss Natur, Bootstouren, Geschichte und regionale Identität verbindet. Von der Quelle bis zur Mündung prägt er die Geschichte Zentral- und Westirlands.",
      hu: "A Shannon folyó Írország leghosszabb folyója és az ország egyik legmeghatározóbb vízi útja. Tavakon, városokon és széles belső tájakon át folyik, ezért központi szerepet játszik az ír utazási és földrajzi tartalmakban. A Shannonra épülő SEO témák erősek, mert a folyó a természetet, hajózást, örökséget és regionális identitást összekapcsolja. A forrástól a torkolatig alakítja Közép- és Nyugat-Írország történetét.",
      ro: "Râul Shannon este cel mai lung râu din Irlanda și una dintre căile navigabile definitorii ale țării. Curge prin lacuri, orașe și peisaje largi din interior, ceea ce îl face central pentru călătorii și geografia Irlandei. Conținutul despre Shannon performează bine deoarece râul unește natura, navigația, patrimoniul și identitatea regională. De la izvor până la estuar, el modelează povestea Irlandei centrale și de vest."
    },
  descriptionAdvanced: {
      en: "The River Shannon is the longest and most voluminous river in Ireland, effectively dividing the western province of Connacht from the rest of the island. For millennia, it has served as a vital transport artery, a defensive barrier, and a source of immense biodiversity. From its source in County Cavan to its vast estuary entering the Atlantic Ocean, the Shannon passes through an intricate system of lakes and wetlands. It is a prime geographical example of a mature river basin supporting both agriculture and modern hydroelectric engineering.",

    ro: "Râul Shannon este cel mai lung curs de apă din Insulele Britanice, divizând geografic vestul Irlandei de provinciile estice și sudice. Bazinul său hidrografic extins drenează peste o cincime din suprafața teritoriului național, curgând cu un gradient foarte redus, ceea ce determină formarea unor lacuri și zone mlăștinoase extinse. Din punct de vedere istoric, râul a reprezentat o barieră defensivă naturală și un coridor de invazie, de la raidurile vikinge până la campaniile militare din secolul al XVII-lea. Studiul hidrologiei sale exemplifică modul în care rețelele fluviale influențează dezvoltarea infrastructurii naționale, incluzând canalele de navigație și marile proiecte hidroenergetice moderne. Estuarul său reprezintă unul dintre cele mai importante medii ecologice și comerciale din țară."
  },
  factsAdvanced: {
      en: [
      "The River Shannon is 360 kilometers (224 miles) long.",
      "It touches or borders 11 of Ireland's 32 traditional counties.",
      "The river's flow was harnessed in the 1920s to build the Ardnacrusha power station, a massive engineering feat.",
      "Viking raiders frequently used the Shannon to navigate deeply into the Irish interior."
    ],

    ro: [
      "Râul Shannon are o lungime totală estimată la 360 de kilometri de la izvor până la estuar.",
      "Bazinul său de recepție acoperă o suprafață de 15.600 de kilometri pătrați.",
      "Căderea totală de altitudine de la izvor până la nivelul mării este de doar 76 de metri.",
      "Canalul Grand Canal a fost finalizat în 1804 pentru a conecta râul Shannon cu orașul Dublin."
    ]
  },
    facts: {
      en: ["The Shannon is Ireland's longest river.", "It flows through a chain of lakes.", "The river is central to inland boating.", "It connects many counties in the west and midlands.", "Shannon heritage is a major travel keyword."],
      de: ["Der Shannon ist Irlands längster Fluss.", "Er fließt durch eine Kette von Seen.", "Der Fluss ist zentral für Binnenbootsfahrten.", "Er verbindet viele Counties im Westen und in den Midlands.", "Shannon-Erbe ist ein wichtiges Reisethema."],
      hu: ["A Shannon Írország leghosszabb folyója.", "Tavak láncolatán keresztül halad.", "Központi szerepe van a belföldi hajózásban.", "Sok nyugati és közép-írországi megyét köt össze.", "A Shannon örökség fontos utazási kulcsszó."],
      ro: ["Shannon este cel mai lung râu din Irlanda.", "Curge printr-un șir de lacuri.", "Râul este central pentru navigația interioară.", "Leagă multe comitate din vest și Midlands.", "Patrimoniul Shannon este un cuvânt-cheie important de călătorie."]
    },
    image: "/geo-images/ireland/river-shannon.webp",
  },
  {
    id: "nat-river-boyne",
    type: "river",
    parent: "ireland",
    coords: [-6.6426, 53.6994],
    name: { de: "River Boyne", hu: "Boyne folyó", ro: "Râul Boyne", en: "River Boyne" },
    description: {
      en: "The River Boyne is one of Ireland's most historically loaded rivers and a key corridor through County Meath and beyond. It is closely associated with ancient monuments, royal sites, and one of Ireland's most famous battles. The river also supports strong tourism storytelling around the Boyne Valley and Ireland's east. Its landscape combines archaeology, farmland, and river scenery in a compact and searchable package.",
      de: "Der River Boyne ist einer der historisch aufgeladensten Flüsse Irlands und ein wichtiger Korridor durch County Meath und darüber hinaus. Er ist eng mit antiken Monumenten, königlichen Stätten und einer der berühmtesten Schlachten Irlands verbunden. Der Fluss unterstützt außerdem starke Tourismusgeschichten rund um das Boyne Valley und den Osten Irlands. Seine Landschaft verbindet Archäologie, Farmland und Flusslandschaft in einem kompakten, gut suchbaren Paket.",
      hu: "A Boyne folyó Írország egyik történelmileg legterheltebb folyója, és fontos folyosó Meath megyén át és azon túl. Szorosan kapcsolódik az ősi emlékhelyekhez, királyi helyszínekhez és Írország egyik leghíresebb csatájához. A folyó a Boyne-völgy és Kelet-Írország turisztikai történeteit is erősíti. Tája régészetet, mezőgazdaságot és folyóparti látványt egyesít egy tömör, jól kereshető csomagban.",
      ro: "Râul Boyne este unul dintre cele mai încărcate istoric râuri din Irlanda și un coridor important prin comitatul Meath și dincolo de el. Este strâns asociat cu monumente antice, situri regale și una dintre cele mai celebre bătălii ale Irlandei. Râul susține și povești turistice puternice despre Boyne Valley și estul Irlandei. Peisajul său combină arheologie, terenuri agricole și decor de râu într-un pachet compact și ușor de găsit online."
    },
  descriptionAdvanced: {
      en: "The River Boyne, flowing through the lush plains of Leinster, is arguably Ireland's most historically and mythologically significant waterway. Rising in County Kildare and entering the Irish Sea near Drogheda, its valley is a treasure trove of ancient civilization, flanked by the prehistoric monuments of Brú na Bóinne and the medieval Trim Castle. The river is famously the site of the pivotal 1690 Battle of the Boyne. Studying this river offers students a vivid timeline showing how ancient settlements clustered around fertile river valleys.",

    ro: "Râul Boyne este un curs de apă de importanță istorică majoră, traversând regiunea de est a Irlandei și vărsându-se în Marea Irlandei. Valea sa fertila a atras așezări umane încă din perioada neolitică, găzduind complexul arheologic Brú na Bóinne, care include faimoasele morminte de la Newgrange. Din perspectiva istoriei politice, valea râului a fost scena Bătăliei de la Boyne în 1690, un conflict militar decisiv ale cărui consecințe rezonează și astăzi în politica irlandeză. În cadrul orelor de istorie și geografie, bazinul râului Boyne este utilizat ca model clasic pentru studierea modului în care resursele acvatice și terenurile fertile concentrează puterea politică și dezvoltarea culturală timpurie. Cursul său inferior păstrează o importanță deosebită pentru ecosistemele locale de somon și floră riverană."
  },
  factsAdvanced: {
      en: [
      "The River Boyne flows for approximately 112 kilometers (70 miles).",
      "The Boyne Valley contains Newgrange, a passage tomb older than the Egyptian pyramids.",
      "In Irish mythology, the river was the home of the Salmon of Knowledge.",
      "The river valley is designated as a UNESCO World Heritage site."
    ],

    ro: [
      "Lungimea totală a râului Boyne este de aproximativ 112 kilometri.",
      "Mormântul megalitic Newgrange, situat în valea râului, este mai vechi decât piramidele din Egipt.",
      "Bătălia de la Boyne a avut loc în anul 1690, implicând forțele regelui Iacob al II-lea și ale lui William de Orania.",
      "Sistemul râului este recunoscut istoric ca unul dintre cele mai bune habitate pentru pescuitul de somon sălbatic din estul Irlandei."
    ]
  },
    facts: {
      en: ["The Boyne is associated with the Battle of the Boyne.", "It flows through the Boyne Valley.", "The river is important to Irish archaeology.", "It is linked with historic royal landscapes.", "Boyne Valley tourism is a major search theme."],
      de: ["Der Boyne ist mit der Schlacht am Boyne verbunden.", "Er fließt durch das Boyne Valley.", "Der Fluss ist wichtig für die irische Archäologie.", "Er ist mit historischen königlichen Landschaften verbunden.", "Der Tourismus im Boyne Valley ist ein großes Suchthema."],
      hu: ["A Boyne a Boyne-i csatához kapcsolódik.", "A Boyne-völgyön keresztül folyik.", "Fontos az ír régészet szempontjából.", "Történelmi királyi tájakhoz kötődik.", "A Boyne-völgyi turizmus fontos keresési téma."],
      ro: ["Boyne este asociat cu Bătălia de la Boyne.", "Curge prin Boyne Valley.", "Râul este important pentru arheologia irlandeză.", "Este legat de peisaje regale istorice.", "Turismul Boyne Valley este un subiect major de căutare."]
    },
    image: "/geo-images/ireland/river-boyne.webp",
  },
  {
    id: "nat-achill-island",
    type: "island",
    parent: "ireland",
    coords: [-9.98, 53.96],
    name: { de: "Achill Island", hu: "Achill-sziget", ro: "Insula Achill", en: "Achill Island" },
    description: {
      en: "Achill Island is Ireland's largest offshore island and a headline destination on the Wild Atlantic Way. It offers cliffs, beaches, bogs, and a strong sense of remote western Ireland. The island is ideal for SEO-rich travel pages because it combines dramatic nature with simple access by bridge. Achill is a classic search term for coastal adventure, Gaelic culture, and scenic island breaks.",
      de: "Achill Island ist die größte vorgelagerte Insel Irlands und ein Hauptziel am Wild Atlantic Way. Sie bietet Klippen, Strände, Moore und ein starkes Gefühl des abgelegenen Westirlands. Die Insel eignet sich ideal für SEO-starke Reiseseiten, weil sie dramatische Natur mit einfacher Brückenanbindung verbindet. Achill ist ein klassischer Suchbegriff für Küstenabenteuer, gälische Kultur und landschaftliche Inselauszeiten.",
      hu: "Achill-sziget Írország legnagyobb part menti szigete és a Wild Atlantic Way egyik kiemelt úti célja. Sziklákat, strandokat, lápokat és az elszigetelt nyugat-ír hangulat erős érzetét kínálja. A sziget kiváló SEO-téma, mert drámai természetet és könnyű híddal megközelíthetőséget ötvöz. Achill klasszikus keresőkifejezés a tengerparti kalandhoz, a gael kultúrához és a festői szigetes pihenéshez.",
      ro: "Insula Achill este cea mai mare insulă offshore din Irlanda și o destinație importantă pe Wild Atlantic Way. Oferă stânci, plaje, mlaștini și o puternică senzație de vest îndepărtat al Irlandei. Insula este ideală pentru pagini de turism SEO deoarece combină natura spectaculoasă cu acces ușor peste pod. Achill este un termen clasic pentru aventură de coastă, cultură gaelică și escapade pitorești pe insulă."
    },
  descriptionAdvanced: {
      en: "Achill Island, located off the coast of County Mayo, is the largest of Ireland's offshore islands. Connected to the mainland by a short bridge, its landscape is defined by sweeping peat bogs, soaring sea cliffs, and pristine sandy beaches. The island has a stark and poignant history, bearing visible scars from the Great Famine in the form of abandoned 'deserted villages'. Achill's rugged geography and resilient community provide a compelling case study of survival, emigration, and the harsh realities of remote coastal living.",

    ro: "Insula Achill este cea mai mare insulă de pe coasta Irlandei, conectată de continent printr-un pod în comitatul Mayo. Peisajul său este dominat de munți de turbă, stânci abrupte pe coasta vestică și plaje extinse modelate de curenții oceanici puternici. Istoria sa ilustrează condițiile dure ale vieții rurale din vestul Irlandei, în special impactul devastator al Marii Foamete din secolul al XIX-lea, vizibil în satele abandonate precum Slievemore. În context educațional, insula servește ca exemplu de izolare geografică, adaptare economică și conservare lingvistică. Astăzi, depinzând istoric de pescuit și agricultura de subzistență, economia insulei este susținută majoritar de turism și de industria prelucrării peștelui."
  },
  factsAdvanced: {
      en: [
      "Achill Island spans an area of approximately 148 square kilometers.",
      "Croaghaun mountain on Achill features some of the highest sea cliffs in Europe, dropping 688 meters.",
      "The Slievemore cliffs are the highest sea cliffs in Ireland.",
      "The island's population experienced a massive decline during the 19th-century potato famine."
    ],

    ro: [
      "Suprafața totală a Insulei Achill este de aproximativ 148 de kilometri pătrați.",
      "Satul părăsit (Deserted Village) de la Slievemore conține ruinele a aproximativ 80 de case de piatră tradiționale.",
      "Stâncile de la Croaghaun, situate pe insulă, ating altitudinea de 688 metri, printre cele mai înalte stânci marine din Europa.",
      "Podul Michael Davitt care leagă insula de continent a fost construit inițial în anul 1887."
    ]
  },
    facts: {
      en: ["Achill is Ireland's largest offshore island.", "A bridge connects it to the mainland.", "It is part of the Wild Atlantic Way.", "The island is known for beaches and cliffs.", "Achill has a strong remote-west identity."],
      de: ["Achill ist Irlands größte vorgelagerte Insel.", "Eine Brücke verbindet sie mit dem Festland.", "Sie ist Teil des Wild Atlantic Way.", "Die Insel ist für Strände und Klippen bekannt.", "Achill hat eine starke Identität des abgelegenen Westens."],
      hu: ["Achill Írország legnagyobb part menti szigete.", "Híd köti össze a szárazfölddel.", "A Wild Atlantic Way része.", "Strandjairól és szikláiról ismert.", "Erős a távoli nyugati identitása."],
      ro: ["Achill este cea mai mare insulă offshore din Irlanda.", "Este conectată de continent printr-un pod.", "Face parte din Wild Atlantic Way.", "Insula este cunoscută pentru plaje și stânci.", "Achill are o identitate puternică de vest îndepărtat."]
    },
    image: "/geo-images/ireland/achill-island.webp",
  },
  {
    id: "nat-avondale-forest",
    type: "forest",
    parent: "ireland",
    coords: [-6.2535, 52.9070],
    name: { de: "Avondale Forest", hu: "Avondale-erdő", ro: "Pădurea Avondale", en: "Avondale Forest" },
    description: {
      en: "Avondale Forest is a Wicklow woodland destination known for walking trails, tree cover, and the legacy of Charles Stewart Parnell. It offers a classic Irish forest search term that blends nature, family outings, and heritage tourism. The area is popular with visitors who want fresh air, easy routes, and a scenic stop in east Ireland. Avondale adds strong keyword value for forest stays and outdoor itineraries.",
      de: "Avondale Forest ist ein Waldziel in Wicklow, bekannt für Wanderwege, Baumbestand und das Erbe von Charles Stewart Parnell. Es bietet einen klassischen irischen Wald-Suchbegriff, der Natur, Familienausflüge und Kulturtourismus verbindet. Das Gebiet ist bei Besuchern beliebt, die frische Luft, einfache Wege und einen malerischen Zwischenstopp im Osten Irlands suchen. Avondale bringt starken Keyword-Wert für Waldaufenthalte und Outdoor-Routen.",
      hu: "Az Avondale-erdő Wicklow megyében található, és túraútvonalairól, lombos fáiról, valamint Charles Stewart Parnell örökségéről ismert. Klasszikus ír erdős keresőkifejezés, amely a természetet, családi kirándulásokat és az örökségturizmust ötvözi. A terület népszerű azok körében, akik friss levegőt, könnyű útvonalakat és festői megállót keresnek Kelet-Írországban. Az Avondale erős kulcsszóértéket ad az erdei pihenésekhez és a szabadtéri útitervhez.",
      ro: "Pădurea Avondale este o destinație forestieră din Wicklow, cunoscută pentru trasee de plimbare, coronamentul de arbori și moștenirea lui Charles Stewart Parnell. Oferă un termen clasic de căutare pentru păduri irlandeze care îmbină natura, ieșirile în familie și turismul de patrimoniu. Zona este populară printre vizitatorii care vor aer curat, trasee ușoare și o oprire scenică în estul Irlandei. Avondale adaugă valoare SEO puternică pentru sejururi în pădure și itinerarii outdoor."
    },
  descriptionAdvanced: {
      en: "Avondale Forest Park, located in the glacial valleys of County Wicklow, is celebrated as the birthplace of Irish forestry. Covering over 500 acres, it was the historic estate of Charles Stewart Parnell, one of Ireland's most influential 19th-century political leaders. In the early 20th century, the estate was repurposed as a pioneering forestry school, introducing exotic tree species from around the world to test their viability in the Irish climate. It serves as an excellent educational site for studying sustainable land management and arboriculture.",

    ro: "Pădurea Avondale este un domeniu împădurit din comitatul Wicklow, considerat locul de naștere al silviculturii moderne în Irlanda. Terenul se remarcă printr-o varietate de ecosisteme forestiere, plantate inițial la începutul secolului XX sub formă de loturi experimentale pentru a testa adaptabilitatea diverselor specii de arbori. Această inițiativă a reprezentat un efort de stat pentru a remedia despăduririle masive istorice care lăsaseră Irlanda cu o acoperire forestieră de sub 2%. Istoria domeniului este, de asemenea, legată de Charles Stewart Parnell, o figură politică centrală în campaniile pentru reforma agrară din secolul al XIX-lea. Astăzi, silvicultura practicată aici susține lecții aplicate despre biodiversitate, exploatarea durabilă a lemnului și conservarea patrimoniului național."
  },
  factsAdvanced: {
      en: [
      "The estate covers over 500 acres of woodland along the Avonmore River.",
      "It features a state-of-the-art treetop walkway and a 38-meter high viewing tower.",
      "Avondale House was built in 1777 and was the birthplace of Charles Stewart Parnell.",
      "The forest was established as the first state forestry school in Ireland in 1904."
    ],

    ro: [
      "Domeniul forestier de la Avondale acoperă o suprafață de peste 200 de hectare.",
      "Prima școală forestieră din Irlanda a fost înființată pe acest domeniu în anul 1904.",
      "Conacul Avondale, aflat pe domeniu, a fost locul de naștere al politicianului Charles Stewart Parnell în 1846.",
      "În pădure au fost plantate inițial peste 100 de specii diferite de arbori pentru experimente silvice."
    ]
  },
    facts: {
      en: ["Avondale is located in County Wicklow.", "It is known for forest walks.", "The site is linked to Charles Stewart Parnell.", "It appeals to family and outdoor visitors.", "Avondale is a strong east-Ireland woodland keyword."],
      de: ["Avondale liegt in County Wicklow.", "Es ist für Waldwanderungen bekannt.", "Der Ort ist mit Charles Stewart Parnell verbunden.", "Er spricht Familien- und Outdoor-Besucher an.", "Avondale ist ein starkes Wald-Keyword für Ostirland."],
      hu: ["Az Avondale County Wicklowban található.", "Erdőjárásairól ismert.", "A hely Charles Stewart Parnellhez kötődik.", "Családok és szabadtéri látogatók számára vonzó.", "Erős erdős kulcsszó Kelet-Írországban."],
      ro: ["Avondale se află în comitatul Wicklow.", "Este cunoscut pentru plimbările prin pădure.", "Locul este legat de Charles Stewart Parnell.", "Atrage vizitatori de familie și outdoor.", "Avondale este un cuvânt-cheie puternic pentru păduri din estul Irlandei."]
    },
    image: "/geo-images/ireland/avondale-forest.webp",
  }
];

export const irelandCulture: POI[] = [
  {
    id: "cult-blarney-castle",
    type: "landmark",
    parent: "city-cork",
    coords: [-8.5704, 51.9291],
    name: { de: "Blarney Castle", hu: "Blarney vár", ro: "Castelul Blarney", en: "Blarney Castle" },
    description: {
      en: "Blarney Castle is a medieval stronghold in Blarney, near Cork, famous for the Blarney Stone. Built by the MacCarthy of Muskerry dynasty, the castle dates back to 1446. Visitors from all over the world come to kiss the Blarney Stone, which is said to bestow the 'gift of the gab' or great eloquence. The castle is surrounded by beautiful gardens, including a poisonous plant garden and the Rock Close.",
      de: "Blarney Castle ist eine mittelalterliche Festung in Blarney, in der Nähe von Cork, die für den Blarney Stone bekannt ist. Die Burg wurde von der Dynastie der MacCarthy of Muskerry erbaut und stammt aus dem Jahr 1446. Besucher aus aller Welt kommen, um den Blarney Stone zu küssen, von dem es heißt, er verleihe die 'Gabe des Redens' oder große Beredsamkeit. Die Burg ist von wunderschönen Gärten umgeben, darunter ein Giftpflanzengarten und der Rock Close.",
      hu: "A Blarney vár egy középkori erődítmény Blarney-ben, Cork közelében, amely a Blarney-kőről híres. A MacCarthy of Muskerry dinasztia építette, a vár 1446-ból származik. A világ minden tájáról érkeznek látogatók, hogy megcsókolják a Blarney-követ, amelyről azt mondják, hogy megadja a 'beszéd ajándékát' vagy a nagy ékesszólást. A várat gyönyörű kertek veszik körül, köztük egy mérgező növénykert és a Rock Close.",
      ro: "Castelul Blarney este o fortăreață medievală din Blarney, lângă Cork, faimoasă pentru Piatra Blarney. Construit de dinastia MacCarthy din Muskerry, castelul datează din 1446. Vizitatori din întreaga lume vin să sărute Piatra Blarney, despre care se spune că oferă 'darul vorbirii' sau o mare elocvență. Castelul este înconjurat de grădini frumoase, inclusiv o grădină de plante otrăvitoare și Rock Close."
    },
  descriptionAdvanced: {
      en: "Blarney Castle, an iconic medieval stronghold in County Cork, is world-famous for its legends and lush estate. Built nearly 600 years ago by the MacCarthy of Muskerry dynasty, the castle's ruined keep stands as a testament to medieval defensive architecture. The fortress is most renowned for the Blarney Stone, which, according to myth, grants the 'gift of the gab' (eloquence) to anyone who kisses it backwards. The expansive gardens feature poison plants, ancient druidic rock formations, and elaborate water features, illustrating the blend of history and folklore.",

    ro: "Castelul Blarney, situat în apropiere de Cork, este o fortăreață medievală construită în secolul al XV-lea de familia MacCarthy din Munster. Din punct de vedere arhitectural, reprezintă un exemplu clasic de turn de apărare irlandez (tower house), conceput cu ziduri groase și metereze pentru a rezista asediilor specifice conflictelor feudale. Domeniul castelului înconjurător exemplifică dezvoltarea grădinilor ornamentale din secolul al XVIII-lea și integrarea resurselor de apă locale în arhitectura peisagistică. Situl este celebru la nivel mondial pentru Piatra Blarney, care, conform folclorului, conferă darul elocinței, un aspect ce ilustrează rolul major al miturilor în industria turistică. Astăzi, situl este unul dintre cele mai vizitate monumente istorice, demonstrând sustenabilitatea economică a conservării patrimoniului."
  },
  factsAdvanced: {
      en: [
      "The current castle keep was constructed in 1446 by Cormac MacCarthy.",
      "Over 400,000 visitors travel to kiss the Blarney Stone every year.",
      "The estate includes a 'Poison Garden' containing toxic plants like wolfsbane and mandrake.",
      "The term 'blarney', meaning flattering talk, was reportedly coined by Queen Elizabeth I."
    ],

    ro: [
      "Structura principală a turnului a fost construită în jurul anului 1446 de către Cormac MacCarthy.",
      "Piatra Blarney este încastrată în parapetul castelului la o înălțime de aproape 26 de metri de la sol.",
      "Situl atrage anual peste 400.000 de vizitatori internaționali și naționali.",
      "Grădinile domeniului includ peste 60 de acri de spații amenajate, inclusiv o zonă dedicată exclusiv plantelor otrăvitoare."
    ]
  },
    facts: {
      en: ["To kiss the stone, you must lean backwards over a drop from the battlements.","The current castle is the third to be built on the site.","The gardens feature many mystical rock formations.","The Blarney Stone is a block of Carboniferous limestone."],
      de: ["Um den Stein zu küssen, muss man sich rückwärts über einen Abgrund von den Zinnen lehnen.","Die heutige Burg ist die dritte, die an dieser Stelle errichtet wurde.","Die Gärten weisen viele mystische Felsformationen auf.","Der Blarney Stone ist ein Block aus karbonischem Kalkstein."],
      hu: ["A kő megcsókolásához hátra kell dőlni a várfalról egy mélyedés fölé.","A jelenlegi vár a harmadik, amely ezen a helyen épült.","A kertekben számos misztikus sziklaformáció található.","A Blarney-kő egy karbon időszaki mészkőtömb."],
      ro: ["Pentru a săruta piatra, trebuie să te apleci pe spate peste o prăpastie de pe creneluri.","Castelul actual este al treilea construit pe acest sit.","Grădinile prezintă multe formațiuni stâncoase mistice.","Piatra Blarney este un bloc de calcar carbonifer."]
    },
    image: "/geo-images/ireland/blarney-castle.webp",
  },
  {
    id: "cult-trinity",
    type: "landmark",
    parent: "city-dublin",
    coords: [-6.2575, 53.3438],
    name: { de: "Trinity College", hu: "Trinity College", ro: "Trinity College", en: "Trinity College" },
    description: {
      en: "Trinity College Dublin is Ireland's best-known university and home of the Book of Kells.",
      de: "Das Trinity College Dublin ist Irlands bekannteste Universität und Heimat des Book of Kells.",
      hu: "A dublini Trinity College Írország legismertebb egyeteme és a Book of Kells otthona.",
      ro: "Trinity College Dublin este cea mai cunoscută universitate din Irlanda și găzduiește Book of Kells."
    },
  descriptionAdvanced: {
      en: "Trinity College Dublin is Ireland's oldest and most prestigious university, founded by Queen Elizabeth I in 1592. Located in the heart of the capital, its cobbled squares and neoclassical architecture represent a haven of academic tradition amid a bustling modern city. The university has educated literary titans like Oscar Wilde and Samuel Beckett. It is most famous for housing the Book of Kells, a breathtaking 9th-century illuminated manuscript. The college is a prime study in the evolution of higher education and institutional heritage over four centuries.",

    ro: "Fondat în 1592 de regina Elisabeta I, Trinity College este cea mai veche și mai prestigioasă universitate din Irlanda. Instituția a fost inițial creată pentru a consolida dominația engleză, dar a devenit un centru de excelență academică de renume mondial. Arhitectura campusului, cu clădirile sale neoclasice și curțile pietruite, reflectă importanța sa istorică și culturală. Pe parcursul studiilor gimnaziale, elevii pot asocia acest loc cu dezvoltarea educației și a științei în Europa post-renascentistă. Aici au studiat personalități marcante precum Oscar Wilde și Samuel Beckett, aducând o contribuție imensă literaturii universale."
  },
  factsAdvanced: {
      en: [
      "The university was officially founded in 1592 by royal charter.",
      "It houses the Book of Kells, an intricately illuminated gospel manuscript created by Celtic monks.",
      "The university's library is a legal deposit, entitled to a copy of every book published in Ireland.",
      "Notable alumni include writers Bram Stoker, Jonathan Swift, and physicist Ernest Walton."
    ],

    ro: [
      "Universitatea a fost fondată pe locul unei foste mănăstiri augustiniene desființate în timpul Reformei.",
      "Femeile au fost admise pentru prima dată ca studente la Trinity College în anul 1904.",
      "Campusul universitar se întinde pe o suprafață de 19 hectare chiar în centrul capitalei irlandeze.",
      "Colegiul deține faimoasa Bibliotecă veche, unde este păstrată Cartea din Kells, o capodoperă a manuscriselor medievale."
    ]
  },
    facts: {
      en: ["Founded in 1592.", "The Old Library contains the Book of Kells.", "The Long Room is world-famous.", "It is a major Dublin landmark."],
      de: ["1592 gegründet.", "Die Old Library beherbergt das Book of Kells.", "Der Long Room ist weltberühmt.", "Es ist ein wichtiges Wahrzeichen Dublins."],
      hu: ["1592-ben alapították.", "Az Old Library őrzi a Book of Kells-t.", "A Long Room világhírű.", "Dublin egyik fő nevezetessége."],
      ro: ["Fondat în 1592.", "Old Library găzduiește Book of Kells.", "Long Room este faimoasă în lume.", "Este un reper major din Dublin."]
    },
    image: "/geo-images/ireland/trinity-college.webp",
  },
        {
    id: "cult-kilkenny",
    type: "landmark",
    parent: "ireland",
    coords: [-7.2449, 52.6485],
    name: { de: "Kilkenny Castle", hu: "Kilkenny Castle", ro: "Castelul Kilkenny", en: "Kilkenny Castle" },
    description: {
      en: "Kilkenny Castle is a Norman castle and one of Ireland's most recognizable historic buildings.",
      de: "Kilkenny Castle ist eine normannische Burg und eines der bekanntesten historischen Gebäude Irlands.",
      hu: "A Kilkenny Castle egy normann vár és Írország egyik legismertebb történelmi épülete.",
      ro: "Castelul Kilkenny este un castel normand și una dintre cele mai recognoscibile clădiri istorice ale Irlandei."
    },
  descriptionAdvanced: {
      en: "Kilkenny Castle is a majestic stronghold that has dominated the 'Marble City' for over eight centuries. Originally constructed as a wooden tower by the Normans in the 12th century, it was later rebuilt in stone and became the primary residence of the powerful Butler family. The castle's evolution from an imposing military fortress to a luxurious Victorian stately home mirrors the broader social and political changes in Irish aristocratic history. Its extensive parklands and beautifully restored Long Gallery make it a centerpiece of cultural heritage.",

    ro: "Castelul Kilkenny a fost construit în anul 1195 de către William Marshal, fiind un punct strategic major de apărare la o cotitură a râului Nore. Timp de peste 600 de ani, fortăreața a fost reședința puternicei familii Butler, care a jucat un rol central în istoria politică a Irlandei. Deși structura inițială era o fortificație anglo-normandă clasică din piatră, castelul a suferit numeroase transformări arhitecturale de-a lungul secolelor. Pentru elevii pasionați de istorie, castelul oferă un exemplu excelent al modului în care o structură militară medievală a evoluat într-o reședință nobiliară elegantă. Astăzi, domeniul impresionează prin grădinile sale terasate și o extinsă galerie de artă."
  },
  factsAdvanced: {
      en: [
      "The first stone castle on the site was completed by William Marshal in 1213.",
      "The Butler family owned the castle for nearly 600 years until 1967.",
      "The castle was famously sold to the people of Kilkenny for just £50.",
      "Its Long Gallery features a spectacular hammer-beam roof decorated with Celtic motifs."
    ],

    ro: [
      "Trei dintre cele patru turnuri originale ale castelului s-au păstrat intacte până în prezent.",
      "Familia Butler a achiziționat castelul în 1391 și l-a vândut statului irlandez în 1967 pentru suma simbolică de 50 de lire.",
      "Galeria Long Gallery din interiorul castelului are un tavan de sticlă pictat, susținut de grinzi de lemn bogat decorate.",
      "Parcul aferent castelului se întinde pe o suprafață de peste 20 de hectare și include un lac ornamental."
    ]
  },
    facts: {
      en: ["It was founded in the 12th century.", "It once belonged to the Butler family.", "It overlooks the River Nore.", "It is a key symbol of Kilkenny."],
      de: ["Es wurde im 12. Jahrhundert gegründet.", "Es gehörte einst der Familie Butler.", "Es überblickt den Fluss Nore.", "Es ist ein zentrales Symbol von Kilkenny."],
      hu: ["A 12. században alapították.", "Valaha a Butler család birtoka volt.", "A Nore folyóra néz.", "Kilkenny egyik fő szimbóluma."],
      ro: ["A fost fondat în secolul al XII-lea.", "A aparținut cândva familiei Butler.", "Oferă vedere spre râul Nore.", "Este un simbol important al orașului Kilkenny."]
    },
    image: "/geo-images/ireland/kilkenny-castle.webp",
  }
  ,
  {
    id: "hist-trim-castle",
    type: "historical",
    parent: "ireland",
    coords: [-6.7867, 53.5558],
    name: { de: "Trim Castle", hu: "Trim vára", ro: "Castelul Trim", en: "Trim Castle" },
    description: {
      en: "Trim Castle is Ireland's largest Anglo-Norman castle and a headline historical site in County Meath. Its massive stone keep dominates the Boyne Valley and makes Trim a strong search term for castle tourism. The castle is famous for medieval power, film location appeal, and easy access from Dublin. It anchors the story of Norman Ireland and gives visitors a very photogenic riverside setting.",
      de: "Trim Castle ist die größte anglonormannische Burg Irlands und eine historische Hauptattraktion in County Meath. Ihr massiver Steinkern dominiert das Boyne Valley und macht Trim zu einem starken Suchbegriff für Burgtourismus. Die Burg ist bekannt für mittelalterliche Macht, Filmkulisse und die gute Erreichbarkeit von Dublin. Sie verankert die Geschichte des normannischen Irlands und bietet eine sehr fotogene Lage am Fluss.",
      hu: "A Trim Castle Írország legnagyobb anglo-normann vára és County Meath kiemelt történelmi helyszíne. Masszív kőtornya uralja a Boyne-völgyet, ezért Trim erős keresési kifejezés a várturizmusban. A vár a középkori hatalom, a filmes helyszín és a Dublinból könnyen elérhető úti cél szerepét is betölti. A normann Írország történetét őrzi, és nagyon fotogén folyóparti környezetet kínál.",
      ro: "Trim Castle este cel mai mare castel anglo-normand din Irlanda și un sit istoric de prim rang în comitatul Meath. Donjonul său masiv domină Boyne Valley și face din Trim un termen puternic pentru turismul de castele. Castelul este cunoscut pentru puterea medievală, pentru rolul în producții de film și pentru accesul ușor din Dublin. El ancorează povestea Irlandei normande și oferă un cadru foarte fotogenic pe malul râului."
    },
  descriptionAdvanced: {
      en: "Trim Castle, located on the banks of the River Boyne in County Meath, is the largest and most impressive Anglo-Norman castle in Ireland. Constructed over a period of 30 years in the late 12th century by Hugh de Lacy, its massive twenty-sided keep was designed to project raw military power and subdue the local population. The fortress played a critical role in establishing English control over the region known as the Pale. It stands as a brilliant architectural textbook on medieval siege warfare and defensive engineering.",

    ro: "Situat pe malurile râului Boyne, Castelul Trim este cel mai mare castel anglo-normand din Irlanda, reflectând puterea și autoritatea cuceritorilor normanzi din secolul al XII-lea. Construcția sa a fost începută în 1176 de către Hugh de Lacy, durând peste 30 de ani până la finalizare. Arhitectura unică a donjonului său masiv, de formă cruciformă cu 20 de laturi, îl distinge de alte fortificații contemporane. Din perspectiva curriculumului de istorie, acesta ilustrează perfect arhitectura militară defensivă și organizarea feudală timpurie. Dimensiunile sale colosale au fost menite să intimideze populația locală și să asigure controlul asupra regatului Meath."
  },
  factsAdvanced: {
      en: [
      "Trim Castle is the largest Anglo-Norman fortification in Ireland, covering an area of 30,000 square meters.",
      "The central three-story keep features a unique twenty-sided cruciform design.",
      "Construction of the stone castle began in 1176 and took several decades to complete.",
      "The castle was used extensively as a filming location for the movie 'Braveheart'."
    ],

    ro: [
      "Structura centrală, donjonul, are ziduri de piatră cu o grosime de aproximativ 3 metri pentru a rezista asediilor.",
      "Incinta castelului acoperă o suprafață impresionantă de peste 3 hectare, fiind protejată de un șanț defensiv și un zid cu turnuri.",
      "A fost folosit ca locație de filmare principală pentru fortăreața engleză din faimosul film istoric Braveheart.",
      "Castelul dispunea de o cale de acces maritim direct de la Marea Irlandei prin intermediul râului Boyne."
    ]
  },
    facts: {
      en: ["Trim Castle is the largest Anglo-Norman castle in Ireland.", "It stands in County Meath.", "The castle overlooks the River Boyne valley.", "It is a famous film location.", "Trim is one of the key heritage towns of Ireland's Ancient East."],
      de: ["Trim Castle ist die größte anglonormannische Burg Irlands.", "Sie steht in County Meath.", "Die Burg überblickt das Boyne-Valley.", "Sie ist ein bekannter Drehort.", "Trim gehört zu den wichtigsten Kulturerbestädten von Ireland's Ancient East."],
      hu: ["A Trim Castle Írország legnagyobb anglo-normann vára.", "County Meathben áll.", "A Boyne-völgy fölé magasodik.", "Híres forgatási helyszín.", "Trim az Ireland's Ancient East egyik kulcsörökségi városa."],
      ro: ["Trim Castle este cel mai mare castel anglo-normand din Irlanda.", "Se află în comitatul Meath.", "Domină valea râului Boyne.", "Este o locație celebră de filmare.", "Trim este unul dintre orașele-cheie de patrimoniu din Ireland's Ancient East."]
    },
    image: "/geo-images/ireland/trim-castle.webp",
  },
  {
    id: "hist-newgrange",
    type: "historical",
    parent: "ireland",
    coords: [-6.4754, 53.6947],
    name: { de: "Newgrange", hu: "Newgrange", ro: "Newgrange", en: "Newgrange" },
    description: {
      en: "Newgrange is a prehistoric passage tomb in the Boyne Valley and one of Ireland's most searched archaeological sites. Older than Stonehenge and the Egyptian pyramids, it delivers huge SEO value for ancient history and world heritage travel. The monument is famous for its winter solstice alignment and carefully reconstructed mound. Newgrange offers a rare mix of mystery, science, and ancient Irish storytelling.",
      de: "Newgrange ist ein prähistorisches Ganggrab im Boyne Valley und eine der meistgesuchten archäologischen Stätten Irlands. Člter als Stonehenge und die ägyptischen Pyramiden, liefert es großen SEO-Wert für Antike und Weltkulturerbe. Das Monument ist berühmt für seine Ausrichtung auf die Wintersonnenwende und seinen sorgfältig rekonstruierten Hügel. Newgrange verbindet Geheimnis, Wissenschaft und uraltes irisches Erzählen.",
      hu: "A Newgrange egy őskori átjárósír a Boyne-völgyben, és Írország egyik legkeresettebb régészeti helyszíne. Idősebb Stonehenge-nél és az egyiptomi piramisoknál, így óriási SEO-értéket jelent az ókori történelem és világörökségi utazás témájában. Az emlékmű a téli napfordulóhoz igazított bejáratáról és gondosan rekonstruált dombjáról híres. Newgrange ritka keveréke a misztikumnak, a tudománynak és az ősi ír történetmesélésnek.",
      ro: "Newgrange este un mormânt preistoric de tip passage în Boyne Valley și unul dintre cele mai căutate situri arheologice din Irlanda. Mai vechi decât Stonehenge și piramidele egiptene, oferă valoare SEO uriașă pentru istorie antică și turism de patrimoniu mondial. Monumentul este faimos pentru alinierea la solstițiul de iarnă și pentru tumulul său reconstruit cu grijă. Newgrange oferă un amestec rar de mister, știință și poveste irlandeză străveche."
    },
  descriptionAdvanced: {
      en: "Newgrange is a prehistoric monument of staggering engineering and astronomical precision, situated in the Boyne Valley. Built during the Neolithic period, around 3200 BC, it is a massive circular mound concealing an inner stone passage and cruciform chamber. Remarkably, it predates both the Egyptian Pyramids and Stonehenge. Newgrange is famous for its winter solstice alignment, where a beam of sunlight perfectly illuminates the inner chamber. It offers an unparalleled window into the religious beliefs and advanced astronomical knowledge of ancient farming communities.",

    ro: "Newgrange este un monument funerar preistoric remarcabil, situat în valea râului Boyne, care precedă ca vechime atât Stonehenge, cât și Marile Piramide din Giza. Construit în jurul anului 3200 î.Hr. în perioada neolitică, acest tumul masiv demonstrează cunoștințe avansate de astronomie, inginerie și arhitectură ale constructorilor săi antici. Trăsătura sa cea mai spectaculoasă este iluminarea camerei funerare interioare în diminețile solstițiului de iarnă, când o rază de soare pătrunde printr-o deschizătură specială. Pentru educația gimnazială, monumentul reprezintă un studiu de caz fascinant despre credințele și capacitățile tehnologice ale comunităților preistorice agricole. Complexul a fost desemnat sit al Patrimoniului Mondial UNESCO, atrăgând cercetători din întreaga lume."
  },
  factsAdvanced: {
      en: [
      "Newgrange was constructed around 3200 BC, making it over 5,000 years old.",
      "It is a UNESCO World Heritage site, part of the Brú na Bóinne complex.",
      "The mound covers an area of over one acre and is surrounded by 97 massive kerbstones.",
      "During the winter solstice, sunlight travels 19 meters down the passageway to light the chamber."
    ],

    ro: [
      "Movila principală are un diametru de aproximativ 85 de metri și este înconjurată de un cerc de 97 de pietre mari.",
      "Construcția a necesitat mutarea și asamblarea a peste 200.000 de tone de piatră și pământ.",
      "Pasajul interior măsoară 19 metri lungime și duce către o cameră cruciformă cu acoperiș boltit susținut fără mortar.",
      "Fenomenul de iluminare a camerei la solstițiul de iarnă durează aproximativ 17 minute."
    ]
  },
    facts: {
      en: ["Newgrange dates to around 3200 BC.", "It is older than Stonehenge.", "The passage aligns with the winter solstice sunrise.", "It is in the Boyne Valley UNESCO landscape.", "Newgrange is one of Europe's great prehistoric monuments."],
      de: ["Newgrange stammt ungefähr aus dem Jahr 3200 v. Chr.", "Es ist älter als Stonehenge.", "Der Gang ist auf den Sonnenaufgang der Wintersonnenwende ausgerichtet.", "Es liegt in der UNESCO-Landschaft des Boyne Valley.", "Newgrange zählt zu Europas großen prähistorischen Monumenten."],
      hu: ["Newgrange körülbelül Kr. e. 3200-ból származik.", "Idősebb Stonehenge-nél.", "A folyosó a téli napforduló napfelkeltéjéhez igazodik.", "A Boyne-völgy UNESCO tájának része.", "Newgrange Európa nagy őskori emlékművei közé tartozik."],
      ro: ["Newgrange datează din jurul anului 3200 î.Hr.", "Este mai vechi decât Stonehenge.", "Coridorul este aliniat cu răsăritul de la solstițiul de iarnă.", "Se află în peisajul UNESCO Boyne Valley.", "Newgrange este unul dintre marile monumente preistorice ale Europei."]
    },
    image: "/geo-images/ireland/newgrange.webp",
  }
  ,
  {
    id: "hist-kilmainham-gaol",
    type: "historical",
    parent: "ireland",
    coords: [-6.3021, 53.3439],
    name: { de: "Kilmainham Gaol", hu: "Kilmainham börtön", ro: "Kilmainham Gaol", en: "Kilmainham Gaol" },
    description: {
      en: "Kilmainham Gaol in Dublin is one of Ireland's most important political history sites. The former prison is linked to rebellion, independence, and the story of modern Irish statehood. Its guided tours create strong search interest around Dublin history, revolution, and heritage travel. The building is a powerful reminder of how national identity was shaped through hardship and reform.",
      de: "Kilmainham Gaol in Dublin ist eine der wichtigsten Stätten der politischen Geschichte Irlands. Das ehemalige Gefängnis ist mit Aufständen, Unabhängigkeit und der Entstehung des modernen irischen Staates verbunden. Seine Führungen erzeugen starkes Suchinteresse rund um Dublins Geschichte, Revolution und Kulturtourismus. Das Gebäude erinnert eindrucksvoll daran, wie nationale Identität durch Leid und Reform geformt wurde.",
      hu: "A dublini Kilmainham Gaol Írország egyik legfontosabb politikai történelmi helyszíne. A volt börtön összekapcsolódik a felkelésekkel, a függetlenséggel és a modern ír államiság történetével. Vezetett túrái erős keresési érdeklődést generálnak Dublin történelme, a forradalom és az örökségturizmus iránt. Az épület erőteljes emlékeztető arra, hogy a nemzeti identitás hogyan formálódott meg a nehézségek és reformok során.",
      ro: "Kilmainham Gaol din Dublin este unul dintre cele mai importante situri ale istoriei politice irlandeze. Fosta închisoare este legată de răscoale, independență și de povestea statului irlandez modern. Tururile ghidate generează interes puternic de căutare pentru istoria Dublinului, revoluție și turism de patrimoniu. Clădirea amintește clar modul în care identitatea națională a fost modelată prin suferință și reformă."
    },
  descriptionAdvanced: {
      en: "Kilmainham Gaol in Dublin is a stark and somber monument to Ireland's turbulent political history. Opened in 1796, this imposing prison held many of the most famous figures involved in the struggle for Irish independence, right up to the Irish Civil War in the 1920s. Most notably, it was the site of the execution of the leaders of the 1916 Easter Rising. The cold, echoing corridors and cramped cells provide students with a visceral understanding of the penal system and the human cost of political revolution.",

    ro: "Kilmainham Gaol este una dintre cele mai mari și mai cunoscute foste închisori din Europa, deschisă în 1796 sub denumirea de 'Noua Închisoare'. Locul poartă o încărcătură emoțională și istorică profundă, fiind direct legat de lupta Irlandei pentru independență și de numeroasele rebeliuni împotriva stăpânirii britanice. Condițiile de detenție de aici au fost deseori brutale, mai ales în timpul Marii Foamete, când mii de oameni au fost închiși pentru infracțiuni minore provocate de disperare. Studierea acestei locații oferă elevilor o perspectivă tulburătoare asupra sistemelor penale din secolele trecute și a sacrificiului pentru formarea statului modern irlandez. În anul 1924, închisoarea a fost oficial închisă, devenind ulterior un muzeu dedicat memoriei naționale."
  },
  factsAdvanced: {
      en: [
      "The prison opened in 1796 and officially closed its doors in 1924.",
      "It features a Victorian East Wing, designed with a panopticon layout to constantly observe prisoners.",
      "Fourteen leaders of the 1916 Easter Rising were executed in the prison's Stonebreakers' Yard.",
      "The youngest prisoner ever held at Kilmainham was reportedly a seven-year-old child."
    ],

    ro: [
      "Liderii Revoltei de Paști din 1916 au fost executați în curtea principală a acestei închisori.",
      "Designul aripii de est se bazează pe conceptul panoptic, permițând supravegherea constantă a deținuților din celule.",
      "Cea mai tânără persoană documentată ca fiind închisă aici a fost un copil de doar 7 ani, reținut pentru furt.",
      "La momentul deschiderii sale, închisoarea nu avea geamuri la ferestre, deținuții fiind expuși direct la frig și intemperii."
    ]
  },
    facts: {
      en: ["Kilmainham Gaol opened in 1796.", "It played a major role in Irish independence history.", "Many rebel leaders were imprisoned there.", "The building is now a museum.", "It is one of Dublin's most important historic sites."],
      de: ["Kilmainham Gaol wurde 1796 eröffnet.", "Es spielte eine große Rolle in der irischen Unabhängigkeitsgeschichte.", "Viele Rebellenführer waren dort inhaftiert.", "Das Gebäude ist heute ein Museum.", "Es ist eine der wichtigsten historischen Stätten Dublins."],
      hu: ["A Kilmainham Gaol 1796-ban nyílt meg.", "Fontos szerepe volt az ír függetlenség történetében.", "Sok lázadó vezetőt tartottak itt fogva.", "Az épület ma múzeum.", "Dublin egyik legfontosabb történelmi helyszíne."],
      ro: ["Kilmainham Gaol s-a deschis în 1796.", "A avut un rol major în istoria independenței irlandeze.", "Mulți lideri rebeli au fost închiși aici.", "Clădirea este acum muzeu.", "Este unul dintre cele mai importante situri istorice din Dublin."]
    },
    image: "/geo-images/ireland/kilmainham-gaol.webp",
  },
  {
    id: "hist-rock-of-cashel",
    type: "historical",
    parent: "ireland",
    coords: [-7.8892, 52.5200],
    name: { de: "Rock of Cashel", hu: "Rock of Cashel", ro: "Rock of Cashel", en: "Rock of Cashel" },
    description: {
      en: "The Rock of Cashel rises dramatically above the plains of Tipperary and is one of Ireland's iconic medieval sites. Its cathedral ruins, round tower, and royal associations make it essential for history-focused travel content. The location delivers strong search appeal because it combines scenic drama with deep ecclesiastical heritage. Cashel is a classic stop for anyone tracing early Irish kingship and church power.",
      de: "Der Rock of Cashel erhebt sich dramatisch über die Ebenen von Tipperary und ist eine der ikonischen mittelalterlichen Stätten Irlands. Seine Kathedralruinen, der Rundturm und die königlichen Bezüge machen ihn für geschichtsorientierte Reiseseiten unverzichtbar. Der Ort besitzt starke Suchattraktivität, weil er landschaftliche Dramatik mit tiefer kirchlicher Geschichte verbindet. Cashel ist ein klassischer Halt für alle, die frühe irische Königsmacht und Kirchenmacht nachvollziehen wollen.",
      hu: "A Rock of Cashel drámaian emelkedik Tipperary síksága fölé, és Írország egyik ikonikus középkori helyszíne. Katedrálisromjai, kerek tornya és királyi kapcsolatai miatt a történelemközpontú utazási tartalmak nélkülözhetetlen eleme. A hely erős keresési vonzerőt jelent, mert a táji látványt mély egyházi örökséggel köti össze. Cashel klasszikus megálló mindazoknak, akik az ír királyság és egyházi hatalom korai történetét követik.",
      ro: "Rock of Cashel se ridică spectaculos deasupra câmpiilor din Tipperary și este unul dintre siturile medievale emblematice ale Irlandei. Ruinele catedralei, turnul rotund și legăturile regale îl fac esențial pentru conținutul de călătorie axat pe istorie. Locația are un puternic atractiv pentru căutări, deoarece combină dramatismul peisajului cu patrimoniul ecleziastic profund. Cashel este o oprire clasică pentru cei care urmăresc începuturile regalității și puterii bisericești irlandeze."
    },
  descriptionAdvanced: {
      en: "The Rock of Cashel is a spectacular cluster of medieval ecclesiastical buildings set on an outcrop of limestone in County Tipperary. Historically the seat of the High Kings of Munster, the site was gifted to the Church in the 12th century. The complex features a remarkably preserved round tower, a high cross, a Romanesque chapel, and a massive Gothic cathedral. The Rock serves as a profound symbol of the entwined nature of royal power and religious authority in medieval Ireland.",

    ro: "Cunoscut și sub numele de Stânca Sfântului Patrick, Rock of Cashel este un complex arhitectural medieval spectaculos situat pe un afloriment de calcar din provincia Munster. Acesta a servit drept reședință tradițională pentru regii din Munster timp de sute de ani înainte de a fi donat Bisericii în anul 1101. Ruinele includ un turn rotund complet conservat, o catedrală gotică, un castel din secolul al XV-lea și Capela lui Cormac, una dintre cele mai rafinate structuri romanice din Irlanda. Pentru cursurile de istorie și geografie, complexul exemplifică tranziția puterii de la structurile regale seculare la autoritatea ecleziastică medievală. Situl a supraviețuit mai multor asedii distructive, inclusiv celui condus de trupele lui Cromwell în 1647."
  },
  factsAdvanced: {
      en: [
      "The Rock of Cashel served as the traditional seat of the Kings of Munster for several hundred years.",
      "Cormac's Chapel, consecrated in 1134, is one of the finest examples of Romanesque architecture in Ireland.",
      "The site's impressive round tower stands at 28 meters (90 feet) high.",
      "According to legend, the rock was deposited here when the devil took a bite out of a nearby mountain."
    ],

    ro: [
      "Turnul rotund, cel mai vechi edificiu de pe stâncă, are o înălțime impresionantă de 28 de metri.",
      "Capela lui Cormac găzduiește singurele fresce romanice supraviețuitoare din întreaga Irlandă.",
      "În 1647, trupele engleze au masacrat aproximativ 3000 de oameni care se refugiaseră în incinta complexului.",
      "Aflorimentul stâncos pe care este construit complexul se înalță la 60 de metri deasupra câmpiei înconjurătoare."
    ]
  },
    facts: {
      en: ["The Rock of Cashel was associated with the kings of Munster.", "It includes a round tower and cathedral ruins.", "It is one of Ireland's best-known medieval landmarks.", "The site sits on a limestone outcrop.", "Cashel is a major heritage stop in Tipperary."],
      de: ["Der Rock of Cashel war mit den Königen von Munster verbunden.", "Er umfasst einen Rundturm und Kathedralruinen.", "Er ist eines der bekanntesten mittelalterlichen Wahrzeichen Irlands.", "Der Ort liegt auf einem Kalksteinfelsen.", "Cashel ist ein wichtiger Kulturerbe-Stopp in Tipperary."],
      hu: ["A Rock of Cashel a munsteri királyokhoz kötődött.", "Kerek tornyot és katedrálisromokat is magában foglal.", "Írország egyik legismertebb középkori látványossága.", "A hely mészkőszirten fekszik.", "Cashel fontos örökségi megálló Tipperaryben."],
      ro: ["Rock of Cashel a fost asociat cu regii din Munster.", "Include un turn rotund și ruine de catedrală.", "Este unul dintre cele mai cunoscute repere medievale ale Irlandei.", "Situl se află pe un afloriment de calcar.", "Cashel este o oprire majoră de patrimoniu în Tipperary."]
    },
    image: "/geo-images/ireland/rock-of-cashel.webp",
  },
  {
    id: "hist-clonmacnoise",
    type: "historical",
    parent: "ireland",
    coords: [-7.9876, 53.3267],
    name: { de: "Clonmacnoise", hu: "Clonmacnoise", ro: "Clonmacnoise", en: "Clonmacnoise" },
    description: {
      en: "Clonmacnoise is a major monastic site on the banks of the River Shannon in County Offaly. Its ruins, high crosses, and round towers make it a must-see for Irish medieval history searches. The site tells the story of learning, faith, and power in early Christian Ireland. Clonmacnoise remains one of the most atmospheric heritage stops in the midlands.",
      de: "Clonmacnoise ist eine bedeutende Klosterstätte am Ufer des Shannon in County Offaly. Seine Ruinen, Hochkreuze und Rundtürme machen es zu einem Muss für Suchanfragen zur irischen Mittelaltergeschichte. Der Ort erzählt die Geschichte von Bildung, Glauben und Macht im frühchristlichen Irland. Clonmacnoise bleibt einer der stimmungsvollsten Kulturerbestopps in den Midlands.",
      hu: "Clonmacnoise egy jelentős monostorhely a Shannon folyó partján, County Offalyban. Romjai, magas keresztjei és kerek tornyai miatt kihagyhatatlan az ír középkori történelem kereséseiben. A hely a tanulás, a hit és a hatalom történetét meséli el a korai keresztény Írországban. Clonmacnoise ma is az egyik legkülönlegesebb hangulatú örökségi megálló a Midlandsben.",
      ro: "Clonmacnoise este un sit monastic major pe malul râului Shannon, în comitatul Offaly. Ruinele, crucile înalte și turnurile rotunde îl fac obligatoriu pentru căutările despre istoria medievală irlandeză. Situl spune povestea învățării, credinței și puterii în Irlanda creștină timpurie. Clonmacnoise rămâne una dintre cele mai atmosferice opriri de patrimoniu din Midlands."
    },
  descriptionAdvanced: {
      en: "Clonmacnoise is an early Christian monastic site positioned on a strategic esker overlooking the River Shannon. Founded by Saint Ciarán in 544 AD, it rapidly evolved into a major center of religion, learning, and craftsmanship, attracting scholars from across Europe. The extensive ruins include a cathedral, several churches, round towers, and intricately carved high crosses. Studying Clonmacnoise provides deep insights into how isolated monasteries acted as vital hubs of civilization and commerce during the turbulent Early Middle Ages.",

    ro: "Fondată în anul 544 de Sfântul Ciarán, mănăstirea Clonmacnoise a devenit rapid unul dintre cele mai importante centre de religie și învățământ din Europa Occidentală timpurie. Poziționată strategic pe malul râului Shannon, într-o zonă de intersecție a rutelor comerciale majore, a atras cărturari din întregul continent. De-a lungul secolelor, mănăstirea a produs manuscrise valoroase, obiecte de artă din metal și a servit drept loc de înmormântare pentru regii înalți din Tara. Elevii de gimnaziu pot descoperi aici rolul crucial pe care l-au jucat mănăstirile irlandeze în conservarea cunoștințelor clasice în timpul Evului Mediu Întunecat. Complexul include astăzi ruinele unei catedrale, mai multe biserici, două turnuri rotunde și trei cruci înalte celtice remarcabile."
  },
  factsAdvanced: {
      en: [
      "The monastery was founded by Saint Ciarán in 544 AD.",
      "It became a major center of religion and trade, thriving until the 12th century.",
      "The site features two remarkably preserved round towers and three high crosses.",
      "Clonmacnoise was frequently attacked by Vikings, Anglo-Normans, and even rival Irish factions."
    ],

    ro: [
      "Clonmacnoise a fost vizată de peste 40 de raiduri vikinge, anglo-normande și ale triburilor irlandeze rivale de-a lungul istoriei sale.",
      "Cea mai celebră lucrare păstrată de la Clonmacnoise este Cartea Văcii Brune, un manuscris din secolul al XII-lea.",
      "Crucea Scripturilor din incinta sitului are o înălțime de 4 metri și este decorată cu panouri sculptate complex.",
      "Situl mănăstirii a fost lăsat în ruină după ce a fost prădat și distrus definitiv de trupele engleze în 1552."
    ]
  },
    facts: {
      en: ["Clonmacnoise was founded in the 6th century.", "It stands beside the River Shannon.", "The site includes high crosses and round towers.", "It was an important center of learning.", "Clonmacnoise is a core Irish monastic heritage landmark."],
      de: ["Clonmacnoise wurde im 6. Jahrhundert gegründet.", "Es liegt am River Shannon.", "Der Ort umfasst Hochkreuze und Rundtürme.", "Es war ein wichtiges Bildungszentrum.", "Clonmacnoise ist ein zentrales irisches Klosterdenkmal."],
      hu: ["Clonmacnoise a 6. században alapult.", "A Shannon folyó mellett áll.", "Magas kereszteket és kerek tornyokat is magában foglal.", "Fontos oktatási központ volt.", "Clonmacnoise az ír monasztikus örökség kulcshelyszíne."],
      ro: ["Clonmacnoise a fost fondat în secolul al VI-lea.", "Se află lângă râul Shannon.", "Situl include cruci înalte și turnuri rotunde.", "A fost un important centru de învățare.", "Clonmacnoise este un reper central al patrimoniului monastic irlandez."]
    },
    image: "/geo-images/ireland/clonmacnoise.webp",
  },
  {
    id: "hist-cahir-castle",
    type: "historical",
    parent: "ireland",
    coords: [-7.9238, 52.3734],
    name: { de: "Cahir Castle", hu: "Cahir vára", ro: "Castelul Cahir", en: "Cahir Castle" },
    description: {
      en: "Cahir Castle is one of Ireland's largest and best-preserved castles, standing on a rocky island in the River Suir. It is a strong keyword for Irish castle tourism because it combines size, authenticity, and easy access. The castle's walls and towers create a classic medieval experience for visitors. Cahir also fits well into routes between Cork, Tipperary, and Waterford.",
      de: "Cahir Castle ist eine der größten und best erhaltenen Burgen Irlands und steht auf einer Felseninsel im River Suir. Es ist ein starkes Keyword für irischen Burgtourismus, weil es Größe, Authentizität und gute Erreichbarkeit verbindet. Die Mauern und Türme der Burg schaffen ein klassisches mittelalterliches Erlebnis für Besucher. Cahir passt auch gut auf Routen zwischen Cork, Tipperary und Waterford.",
      hu: "A Cahir Castle Írország egyik legnagyobb és legjobb állapotban megőrzött vára, amely a Suir folyó sziklás szigetén áll. Erős kulcsszó az ír várturizmusban, mert méretet, hitelességet és könnyű megközelíthetőséget egyesít. Falai és tornyai klasszikus középkori élményt nyújtanak a látogatóknak. Cahir jól illeszkedik Cork, Tipperary és Waterford közötti útvonalakba is.",
      ro: "Castelul Cahir este unul dintre cele mai mari și mai bine păstrate castele din Irlanda, ridicat pe o insulă stâncoasă din râul Suir. Este un cuvânt-cheie puternic pentru turismul de castele irlandeze deoarece combină dimensiunea, autenticitatea și accesibilitatea. Zidurile și turnurile sale oferă vizitatorilor o experiență medievală clasică. Cahir se potrivește bine și pe rutele dintre Cork, Tipperary și Waterford."
    },
  descriptionAdvanced: {
      en: "Cahir Castle, located on a rocky island in the River Suir, is one of Ireland's largest and best-preserved medieval fortresses. Built in 1142 by the Prince of Thomond, it later became a formidable stronghold of the powerful Butler family. The castle's sheer stone walls and formidable keep demonstrate advanced Norman defensive techniques. Its strategic island location made it highly defensible, offering students a classic example of military architecture dictating control over vital river crossings and regional trade.",

    ro: "Așezat strategic pe o insulă stâncoasă de pe râul Suir, Castelul Cahir este unul dintre cele mai mari și mai bine conservate castele medievale din Irlanda. A fost construit în 1142 de către Conchobar Ua Briain și ulterior extins și fortificat de puternica familie Butler. Arhitectura sa defensivă inovatoare a inclus structuri concepute special pentru a rezista artileriei grele, o noutate la momentul respectiv. Situl este excelent pentru a explica elevilor evoluția tacticii militare și a arhitecturii de apărare în fața apariției prafului de pușcă. Designul său formidabil a făcut ca, adesea, asediatorii să prefere negocierile în locul unui atac direct, deși a fost capturat de trupele lui Cromwell în 1650."
  },
  factsAdvanced: {
      en: [
      "Cahir Castle was originally built in 1142 by Conor O'Brien.",
      "It features a functioning portcullis, a rare surviving example of this defensive gate mechanism.",
      "The castle was famously captured by the Earl of Essex in 1599 after a brief siege.",
      "It was heavily used as a filming location for the movie 'Excalibur'."
    ],

    ro: [
      "În zidurile castelului pot fi observate și astăzi proiectile de tun încastrate din timpul unui scurt asediu din 1599.",
      "Castelul a fost restaurat masiv în anul 1840, păstrând în mare parte designul său original defensiv.",
      "Poarta principală era protejată de un pod mobil și de un sistem complex de apărare de tip capcană.",
      "Fortăreața a rămas în posesia familiei Butler până în 1961, când ultimul descendent a murit fără urmași."
    ]
  },
    facts: {
      en: ["Cahir Castle stands on an island in the River Suir.", "It is among Ireland's largest castles.", "The fortress dates to the 13th century.", "It is one of the best-preserved castles in Ireland.", "Cahir is a popular stop on south-east travel routes."],
      de: ["Cahir Castle steht auf einer Insel im River Suir.", "Es gehört zu den größten Burgen Irlands.", "Die Festung stammt aus dem 13. Jahrhundert.", "Sie ist eine der am besten erhaltenen Burgen Irlands.", "Cahir ist ein beliebter Stopp auf Routen im Südosten."],
      hu: ["A Cahir Castle a Suir folyó egyik szigetén áll.", "Írország legnagyobb várai közé tartozik.", "A 13. századból származik.", "Az egyik legjobb állapotban megmaradt ír vár.", "Cahir népszerű megálló a délkeleti útvonalakon."],
      ro: ["Castelul Cahir stă pe o insulă din râul Suir.", "Este printre cele mai mari castele din Irlanda.", "Fortăreața datează din secolul al XIII-lea.", "Este unul dintre cele mai bine păstrate castele irlandeze.", "Cahir este o oprire populară pe rutele din sud-est."]
    },
    image: "/geo-images/ireland/cahir-castle.webp",
  }
  ,
  {
    id: "hist-battle-of-the-boyne",
    type: "historical",
    parent: "ireland",
    coords: [-6.5082, 53.7350],
    name: { de: "Battle of the Boyne", hu: "Boyne-i csata", ro: "Bătălia de la Boyne", en: "Battle of the Boyne" },
    description: {
      en: "The Battle of the Boyne is one of the most famous historical battle sites in Ireland and a major search topic for Irish history tours. The 1690 battle shaped the political future of the island and remains central to conversations about memory and identity. Visitors can explore the Boyne landscape, river crossings, and interpretation sites around Oldbridge. It is a high-value location for history, conflict, and heritage keyword coverage.",
      de: "Die Schlacht am Boyne ist eine der berühmtesten historischen Schlachtstätten Irlands und ein großes Suchthema für Irland-Historientouren. Die Schlacht von 1690 prägte die politische Zukunft der Insel und bleibt zentral für Gespräche über Erinnerung und Identität. Besucher können die Boyne-Landschaft, Flussübergänge und die Ausstellungsorte rund um Oldbridge erkunden. Es ist ein hochwertiger Ort für Suchbegriffe zu Geschichte, Konflikt und Kulturerbe.",
      hu: "A Boyne-i csata Írország egyik leghíresebb történelmi csatatere, és az ír történelmi túrák egyik fontos keresési témája. Az 1690-es ütközet meghatározta a sziget politikai jövőjét, és ma is központi szerepet játszik az emlékezet és identitás kérdéseiben. A látogatók felfedezhetik a Boyne táját, a folyóátkelőket és az oldbridge-i értelmező helyszíneket. Ez kiemelt értékű helyszín a történelem-, konfliktus- és örökségi kulcsszavak szempontjából.",
      ro: "Bătălia de la Boyne este unul dintre cele mai celebre situri istorice de luptă din Irlanda și un subiect major pentru tururile de istorie irlandeză. Bătălia din 1690 a modelat viitorul politic al insulei și rămâne esențială în discuțiile despre memorie și identitate. Vizitatorii pot explora peisajul Boyne, trecerile peste râu și punctele de interpretare din zona Oldbridge. Este o locație cu valoare ridicată pentru acoperirea cuvintele-cheie despre istorie, conflict și patrimoniu."
    },
  descriptionAdvanced: {
      en: "The Battle of the Boyne Visitor Centre commemorates the site of one of the most consequential military engagements in Irish and European history. Fought in 1690 along the River Boyne, the battle saw the Protestant King William III defeat the Catholic King James II. This victory secured Protestant ascendancy in Ireland for centuries. The site's geography, particularly the river ford used for the crucial flank attack, demonstrates how physical landscapes can directly determine the outcomes of monumental historical events.",

    ro: "Bătălia de la Boyne, purtată în iulie 1690 de-a lungul râului omonim, este unul dintre cele mai definitorii evenimente din istoria irlandeză și europeană. Conflictul i-a opus pe regele catolic iacobit Iacob al II-lea și pe ginerele său, regele protestant Wilhelm al III-lea de Orania, pentru controlul asupra tronurilor englez, scoțian și irlandez. Rezultatul bătăliei a asigurat dominația protestantă în Irlanda timp de secole și a avut un impact profund asupra structurii politice a insulei. În contextul istoriei gimnaziale, bătălia exemplifică impactul deciziilor monarhice și al războaielor religioase asupra populației civile. Astăzi, situl istoric dispune de un centru de vizitare modern care detaliază complexitatea acestui conflict european la scară largă."
  },
  factsAdvanced: {
      en: [
      "The Battle of the Boyne was fought on July 1 (Old Style) or July 11 (New Style), 1690.",
      "It involved roughly 36,000 troops fighting for King William and 25,000 for King James.",
      "It was the largest assembly of troops ever on an Irish battlefield.",
      "The battle was part of the wider War of the Grand Alliance spanning across Europe."
    ],

    ro: [
      "Aproximativ 60.000 de soldați au participat la bătălie, aceasta fiind cea mai mare desfășurare de trupe de pe teritoriul irlandez.",
      "Wilhelm al III-lea de Orania a fost rănit ușor de un glonț de muschetă chiar înainte de începerea confruntării.",
      "Trupele implicate includeau mercenari olandezi, francezi, danezi, precum și soldați din Anglia, Scoția și Irlanda.",
      "În ciuda importanței sale politice majore, numărul victimelor a fost relativ scăzut, estimându-se în jur de 2000 de morți."
    ]
  },
    facts: {
      en: ["The battle took place in 1690.", "It was fought near the River Boyne.", "The site is a major Irish historical memory location.", "Oldbridge is central to visitor interpretation.", "It is one of the best-known battlefields in Ireland."],
      de: ["Die Schlacht fand 1690 statt.", "Sie wurde nahe dem River Boyne ausgetragen.", "Der Ort ist ein wichtiger Erinnerungsort der irischen Geschichte.", "Oldbridge ist zentral für die Vermittlung an Besucher.", "Es ist eines der bekanntesten Schlachtfelder Irlands."],
      hu: ["A csata 1690-ben zajlott.", "A Boyne folyó közelében vívták.", "A helyszín az ír történelmi emlékezet fontos pontja.", "Oldbridge központi szerepű a látogatói értelmezésben.", "Írország egyik legismertebb csatamezeje."],
      ro: ["Bătălia a avut loc în 1690.", "S-a purtat lângă râul Boyne.", "Situl este o locație majoră a memoriei istorice irlandeze.", "Oldbridge este central pentru interpretarea pentru vizitatori.", "Este unul dintre cele mai cunoscute câmpuri de luptă din Irlanda."]
    },
    image: "/geo-images/ireland/battle-of-the-boyne.webp",
  },
  {
    id: "hist-charles-fort",
    type: "historical",
    parent: "ireland",
    coords: [-8.4990, 51.7039],
    name: { de: "Charles Fort", hu: "Charles erőd", ro: "Fortul Charles", en: "Charles Fort" },
    description: {
      en: "Charles Fort guards Kinsale Harbour and is one of Ireland's most impressive star forts. Built in the late 17th century, it reflects military engineering and coastal defense history. The site is a strong SEO target for visitors interested in forts, harbors, and southern Ireland routes. Its long walls and water views make it especially appealing for photography and family trips.",
      de: "Charles Fort bewacht den Hafen von Kinsale und ist eine der beeindruckendsten Sternfestungen Irlands. Er wurde im späten 17. Jahrhundert erbaut und spiegelt Militärtechnik und Küstenverteidigung wider. Der Ort ist ein starkes SEO-Ziel für Besucher, die sich für Festungen, Häfen und Routen im Süden Irlands interessieren. Seine langen Mauern und der Blick aufs Wasser machen ihn besonders attraktiv für Fotos und Familienausflüge.",
      hu: "A Charles Fort őrzi a Kinsale-öblöt, és Írország egyik legimpozánsabb csillag alakú erődje. A 17. század végén épült, és a hadmérnöki megoldásokat, valamint a parti védelem történetét tükrözi. Erős SEO-célpont azoknak, akiket az erődök, kikötők és a dél-ír útvonalak érdekelnek. Hosszú falai és vízre néző panorámája különösen vonzó fotózáshoz és családi kirándulásokhoz.",
      ro: "Fortul Charles păzește golful Kinsale și este unul dintre cele mai impresionante forturi stelare din Irlanda. Construit la sfârșitul secolului al XVII-lea, reflectă ingineria militară și istoria apărării de coastă. Situl este o țintă SEO puternică pentru vizitatorii interesați de forturi, porturi și rute din sudul Irlandei. Zidurile sale lungi și priveliștile către apă îl fac deosebit de atractiv pentru fotografie și ieșiri cu familia."
    },
  descriptionAdvanced: {
      en: "Charles Fort is a massive, star-shaped military fortification located on the water's edge in Kinsale, County Cork. Constructed in the late 17th century, its geometric design was specifically engineered to withstand heavy artillery and cannon fire, a major advancement in military architecture. The fort played a significant role during the Williamite War and the Irish Civil War before being partially destroyed. It offers an excellent educational model of post-medieval coastal defense strategies and engineering.",

    ro: "Situat în portul Kinsale din sudul Irlandei, Fortul Charles este un exemplu clasic de fortificație militară în formă de stea, construit în secolul al XVII-lea. Structura a fost concepută pentru a proteja portul împotriva atacurilor navale, având ziduri masive așezate în unghiuri menite să devieze tirul artileriei inamice. Proiectarea fortului atribuie fiecărui bastion un rol specific în focul încrucișat defensiv, făcându-l aproape inexpugnabil dinspre mare. Din perspectivă istorică, fortul ilustrează tranziția spre războiul bazat pe artilerie și importanța controlului rutelor maritime. Fortul a rămas în uz militar până în anul 1922, când a fost parțial distrus în timpul Războiului Civil Irlandez."
  },
  factsAdvanced: {
      en: [
      "Charles Fort is an expansive star fort constructed between 1677 and 1682.",
      "Its geometric design was built to resist the impact of cannon fire.",
      "The fort was named in honor of King Charles II of England.",
      "It remained a functioning military garrison until the Irish Civil War in 1922."
    ],

    ro: [
      "Construcția fortului a durat din 1677 până în 1682 și a fost condusă de inginerul militar Sir William Robinson.",
      "Zidurile fortificației ajung în anumite puncte la o grosime de 6 metri și o înălțime de 18 metri.",
      "Designul în formă de stea a fortului asigura că niciun punct al zidurilor nu avea 'unghiuri moarte' nesupravegheate.",
      "A fost asediat cu succes doar o singură dată, în 1690, când forțele au atacat dinspre partea terestră mai puțin fortificată."
    ]
  },
    facts: {
      en: ["Charles Fort overlooks Kinsale Harbour.", "It is a star-shaped fortification.", "The fort dates to the late 1600s.", "It played a role in coastal defense.", "It is one of Ireland's standout military heritage sites."],
      de: ["Charles Fort überblickt den Hafen von Kinsale.", "Es ist eine sternförmige Festungsanlage.", "Die Festung stammt aus dem späten 17. Jahrhundert.", "Sie spielte eine Rolle in der Küstenverteidigung.", "Es ist eine der herausragenden militärischen Kulturerbestätten Irlands."],
      hu: ["A Charles Fort a Kinsale-öböl fölött magasodik.", "Csillag alakú erődítmény.", "A 17. század végéről származik.", "Szerepe volt a parti védelemben.", "Írország egyik kiemelkedő katonai örökségi helye."],
      ro: ["Fortul Charles domină golful Kinsale.", "Este o fortificație în formă de stea.", "Fortul datează de la sfârșitul secolului al XVII-lea.", "A avut un rol în apărarea de coastă.", "Este unul dintre cele mai importante situri de patrimoniu militar din Irlanda."]
    },
    image: "/geo-images/ireland/charles-fort.webp",
  },
  {
    id: "landmark-guinness-storehouse",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2869, 53.3414],
    name: { de: "Guinness Storehouse", hu: "Guinness Storehouse", ro: "Guinness Storehouse", en: "Guinness Storehouse" },
    description: {
      en: "The Guinness Storehouse is Dublin's flagship tourist landmark and one of Ireland's most searched attractions. Built inside the old fermentation plant, it tells the story of the country's most famous stout and brand identity. The experience combines skyline views, marketing history, and a powerful Dublin check-in moment. It is a key keyword for Irish city travel, brewery tourism, and iconic indoor attractions.",
      de: "Das Guinness Storehouse ist Dublins Flaggschiff unter den Touristenattraktionen und eine der meistgesuchten Sehenswürdigkeiten Irlands. In der alten Gäranlage untergebracht, erzählt es die Geschichte des berühmtesten Stouts und der Markenidentität des Landes. Das Erlebnis verbindet Skyline-Blicke, Marketinggeschichte und einen starken Dublin-Check-in-Moment. Es ist ein wichtiges Keyword für Städtereisen, Brauereitourismus und ikonische Indoor-Attraktionen.",
      hu: "A Guinness Storehouse Dublin zászlóshajó látványossága és Írország egyik legkeresettebb attrakciója. A régi erjesztőüzemben kialakítva az ország leghíresebb stout sörének és márkaidentitásának történetét mutatja be. Az élmény összekapcsolja a panorámát, a marketingtörténetet és egy erős dublini \\\"check-in\\\" pontot. Kulcsszóként fontos az ír városlátogatás, a sörturizmus és az ikonikus beltéri attrakciók témájában.",
      ro: "Guinness Storehouse este atracția emblematică a Dublinului și unul dintre cele mai căutate obiective din Irlanda. Amenajat în vechea fabrică de fermentare, spune povestea celei mai faimoase beri stout și a identității de brand a țării. Experiența combină priveliștea asupra orașului, istoria marketingului și un moment puternic de check-in în Dublin. Este un cuvânt-cheie esențial pentru turism urban irlandez, turism de berărie și atracții indoor iconice."
    },
  descriptionAdvanced: {
      en: "The Guinness Storehouse is a towering seven-story landmark situated within the historic St. James's Gate Brewery in Dublin. Originally built in 1904 as a fermentation plant, it is now Ireland's most popular tourist attraction. The building is famously shaped around a massive, glass atrium designed to resemble a pint of stout. The site offers an interactive journey through the brewing process, the brand's iconic advertising history, and its massive economic impact on Dublin, culminating in a panoramic view of the city.",

    ro: "Situat la St. James's Gate în Dublin, Guinness Storehouse este un simbol industrial și cultural major, spunând povestea celei mai faimoase beri din Irlanda. Construită inițial în 1904 ca uzină de fermentare, clădirea uimește prin arhitectura sa bazată pe o structură masivă de oțel inspirată din stilul Școlii de la Chicago. Pentru cursurile de geografie economică, facilitatea servește drept studiu de caz privind revoluția industrială, crearea de branduri globale și impactul unei companii asupra dezvoltării unui oraș. În prezent, este cea mai vizitată atracție turistică din Irlanda, atrăgând milioane de oaspeți anual. Designul interior este modelat sub forma unui pahar imens de bere care se ridică pe șapte etaje."
  },
  factsAdvanced: {
      en: [
      "The Storehouse was originally built in 1904 as a fermentation plant.",
      "Arthur Guinness famously signed a 9,000-year lease for the brewery in 1759.",
      "It spans seven floors, designed around a central atrium shaped like a pint glass.",
      "The Gravity Bar at the top offers 360-degree views across Dublin city."
    ],

    ro: [
      "Contractul de închiriere original semnat de Arthur Guinness în 1759 a fost valabil pentru 9000 de ani la un cost de 45 de lire pe an.",
      "Clădirea Guinness Storehouse a fost prima structură cu mai multe etaje cu schelet de oțel construită în Irlanda.",
      "Paharul de sticlă central ar putea conține teoretic 14,3 milioane de halbe de bere dacă ar fi umplut.",
      "Berăria consumă zilnic aproximativ 100.000 de tone de orz irlandez pentru procesul de fabricație."
    ]
  },
    facts: {
      en: ["It is one of Dublin's top visitor attractions.", "The building is seven stories high.", "The Gravity Bar offers city views.", "It is linked to the Guinness brewing story.", "The site is a major Irish tourism brand."],
      de: ["Es ist eine der wichtigsten Attraktionen Dublins.", "Das Gebäude ist sieben Stockwerke hoch.", "Die Gravity Bar bietet Stadtblick.", "Es ist mit der Guinness-Braugeschichte verbunden.", "Der Ort ist eine große irische Tourismusmarke."],
      hu: ["Dublin egyik legfontosabb turisztikai attrakciója.", "Az épület hét emeletes.", "A Gravity Bar városra néző kilátást ad.", "A Guinness sörfőzés történetéhez kötődik.", "Fontos ír turisztikai márka."],
      ro: ["Este una dintre atracțiile de top din Dublin.", "Clădirea are șapte niveluri.", "Gravity Bar oferă vedere asupra orașului.", "Este legat de povestea fabricării Guinness.", "Situl este un brand major de turism irlandez."]
    },
    image: "/geo-images/ireland/guinness-storehouse.webp",
  },
  {
    id: "landmark-trinity-long-room",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2561, 53.3439],
    name: { de: "Long Room", hu: "Long Room", ro: "Long Room", en: "Long Room" },
    description: {
      en: "The Long Room at Trinity College is one of Dublin's most iconic interior landmarks. Its oak shelves, vaulted ceiling, and literary aura make it a top search result for library and history tourism in Ireland. The room is closely associated with the Book of Kells and the prestige of Trinity College Dublin. It is a visually rich, instantly recognizable Dublin landmark with strong SEO value.",
      de: "Der Long Room im Trinity College ist eines der ikonischsten Innenwahrzeichen Dublins. Seine Eichregale, das Gewölbe und die literarische Aura machen ihn zu einem Top-Suchergebnis für Bibliotheks- und Kulturtourismus in Irland. Der Raum ist eng mit dem Book of Kells und dem Ansehen des Trinity College Dublin verbunden. Es ist ein visuell reiches, sofort erkennbares Dubliner Wahrzeichen mit starkem SEO-Wert.",
      hu: "A Trinity College Long Roomja Dublin egyik legikonikusabb beltéri nevezetessége. Tölgyfa polcai, boltozatos mennyezete és irodalmi hangulata miatt kiemelt keresési találat a könyvtár- és történelmi turizmusban. A terem szorosan kapcsolódik a Book of Kellshez és a Trinity College Dublin rangjához. Látványos, azonnal felismerhető dublini jelkép, erős SEO-értékkel.",
      ro: "Long Room de la Trinity College este unul dintre cele mai iconice repere interioare ale Dublinului. Rafturile de stejar, tavanul boltit și aura literară îl fac un rezultat de top pentru turismul de bibliotecă și istorie din Irlanda. Sala este strâns legată de Book of Kells și de prestigiul Trinity College Dublin. Este un reper dublinnez foarte vizual și imediat recognoscibil, cu valoare SEO puternică."
    },
  descriptionAdvanced: {
      en: "The Long Room is the spectacular main chamber of the Old Library at Trinity College Dublin, recognized globally for its breathtaking architecture. Measuring 65 meters in length, the room is lined with majestic oak bookcases housing 200,000 of the library's oldest books. Built between 1712 and 1732, its iconic barrel-vaulted ceiling was added later to accommodate an expanding collection. The room holds profound historical artifacts, including an original copy of the 1916 Proclamation of the Irish Republic, bridging the gap between scholarship and nation-building.",

    ro: "Long Room este sala principală a Vechii Biblioteci de la Trinity College și una dintre cele mai uluitoare biblioteci istorice din lume. Măsurând aproape 65 de metri în lungime, sala a fost construită între 1712 și 1732 pentru a găzdui o colecție impresionantă de manuscrise și cărți rare. Arhitectura sa dominată de lemn masiv de stejar, arcade înalte și busturi de marmură ale filosofilor și scriitorilor iluștri îi conferă o atmosferă de monumentalitate intelectuală. Pentru educația tinerilor, reprezintă o mărturie palpabilă a modului în care cunoașterea umană a fost păstrată și organizată înainte de era digitală. În prezent, sala adăpostește peste 200.000 de volume dintre cele mai vechi ale bibliotecii."
  },
  factsAdvanced: {
      en: [
      "The Long Room measures nearly 65 meters (213 feet) in length.",
      "It houses approximately 200,000 of the library's oldest and most valuable books.",
      "The iconic barrel-vaulted ceiling was constructed in 1860 to add a second gallery of bookcases.",
      "The room contains the Brian Boru harp, one of the oldest surviving Gaelic harps."
    ],

    ro: [
      "Acoperișul plat original a fost înlocuit cu o boltă curbată din lemn de stejar în anul 1860, pentru a permite adăugarea de noi rafturi superioare.",
      "Sala găzduiește și cea mai veche harpă irlandeză supraviețuitoare, datând din secolul al XV-lea, model care este stema națională a Irlandei.",
      "Biblioteca are dreptul legal de a primi o copie gratuită a fiecărei cărți publicate în Marea Britanie și Irlanda.",
      "Printre artefactele expuse se află o copie rară a Proclamației Republicii Irlandeze de la 1916."
    ]
  },
    facts: {
      en: ["The Long Room is part of Trinity College Dublin.", "It is famous for its long vaulted hall.", "The Book of Kells is associated with the site.", "It is one of Ireland's most photographed interiors.", "The room is central to Dublin literary tourism."],
      de: ["Der Long Room gehört zum Trinity College Dublin.", "Er ist berühmt für seine lange Gewölbehalle.", "Das Book of Kells ist mit dem Ort verbunden.", "Er ist eines der meistfotografierten Innenräume Irlands.", "Der Raum ist zentral für den literarischen Tourismus in Dublin."],
      hu: ["A Long Room a Trinity College Dublin része.", "Híres hosszú boltozatos terméről.", "A Book of Kells kapcsolódik hozzá.", "Írország egyik legtöbbet fényképezett belső tere.", "A terem központi eleme Dublin irodalmi turizmusának."],
      ro: ["Long Room face parte din Trinity College Dublin.", "Este celebră pentru sala sa lungă boltită.", "Book of Kells este asociată cu acest loc.", "Este unul dintre cele mai fotografiate interioare din Irlanda.", "Sala este centrală pentru turismul literar din Dublin."]
    },
    image: "/geo-images/ireland/trinity-long-room.webp",
  }
  ,
  {
    id: "landmark-dublin-castle",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2663, 53.3430],
    name: { de: "Dublin Castle", hu: "Dublin Castle", ro: "Castelul Dublin", en: "Dublin Castle" },
    description: {
      en: "Dublin Castle is a central landmark for Irish state history and a must-see in the city center. It served as a seat of British rule and later became a ceremonial and governmental site for independent Ireland. The castle combines medieval foundations, Georgian additions, and major state rooms. It is a powerful keyword for Dublin heritage, politics, and guided city visits.",
      de: "Dublin Castle ist ein zentrales Wahrzeichen der irischen Staatsgeschichte und ein Muss im Stadtzentrum. Es diente als Sitz der britischen Herrschaft und wurde später ein zeremonieller und staatlicher Ort des unabhängigen Irlands. Die Burg verbindet mittelalterliche Fundamente, georgianische Ergänzungen und bedeutende Staatsräume. Sie ist ein starkes Keyword für Dubliner Kulturerbe, Politik und geführte Stadtbesuche.",
      hu: "A Dublin Castle az ír államtörténet központi nevezetessége és a belváros kihagyhatatlan pontja. A brit uralom székhelye volt, később pedig az önálló Írország ceremoniális és kormányzati helyszínévé vált. A vár középkori alapokat, georgiánus bővítéseket és fontos állami termeket egyesít. Erős kulcsszó Dublin öröksége, politikája és városnézése szempontjából.",
      ro: "Castelul Dublin este un reper central pentru istoria statului irlandez și o vizită obligatorie în centrul orașului. A servit ca sediu al guvernării britanice și apoi a devenit un sit ceremonial și guvernamental pentru Irlanda independentă. Castelul combină fundații medievale, adăugiri georgiene și săli de stat importante. Este un cuvânt-cheie puternic pentru patrimoniul Dublinului, politică și tururi ghidate ale orașului."
    },
  descriptionAdvanced: {
      en: "Dublin Castle, situated in the heart of the capital, served as the fortified seat of British administration in Ireland for over seven centuries until 1922. Originally commissioned by King John in 1204, much of the medieval structure was replaced by grand Georgian palaces after a fire. The complex now features lavish State Apartments, the medieval Record Tower, and the subterranean remnants of the original Viking defenses. It is a profound architectural timeline of Ireland's transition from colonial rule to independent governance.",

    ro: "Castelul Dublin a fost centrul puterii guvernamentale britanice în Irlanda pentru mai bine de șapte secole, de la fondarea sa în 1204 de către regele Ioan al Angliei până la obținerea independenței în 1922. Construit inițial ca un bastion defensiv medieval, castelul a evoluat într-un palat regal opulent în secolul al XVIII-lea, reflectând schimbările politice și administrative ale epocii. Apartamentele de Stat au găzduit monarhi, viceregi și numeroase evenimente de maximă importanță diplomatică. Din punct de vedere educațional, complexul ilustrează tranziția de la arhitectura militară la cea civilă și reprezentativă, marcând transformarea Dublinului într-o metropolă modernă. Astăzi, complexul este utilizat de guvernul irlandez pentru evenimente și ceremonii de stat oficiale."
  },
  factsAdvanced: {
      en: [
      "The castle was originally founded by order of King John of England in 1204.",
      "It served as the seat of British rule in Ireland until the establishment of the Free State in 1922.",
      "The Record Tower is the sole surviving tower of the original medieval fortress.",
      "The State Apartments are now used for presidential inaugurations and state receptions."
    ],

    ro: [
      "Record Tower, datând din anul 1228, este singurul element arhitectural intact rămas din castelul medieval normand inițial.",
      "Sala Sfântului Patrick din Apartamentele de Stat are un tavan magnific pictat și este locul unde sunt învestiți președinții irlandezi.",
      "O mare parte din castelul medieval a fost distrusă de un incendiu devastator în anul 1684.",
      "A fost construit pe locul unei așezări fortificate anterioare înființate de vikingi."
    ]
  },
    facts: {
      en: ["Dublin Castle sits in the historic city center.", "It was a British administrative center for centuries.", "The site now hosts state events and tours.", "Its State Apartments are a major highlight.", "It is one of Dublin's core historic landmarks."],
      de: ["Dublin Castle liegt im historischen Zentrum.", "Es war jahrhundertelang ein britisches Verwaltungszentrum.", "Heute finden dort Staatsveranstaltungen und Führungen statt.", "Die State Apartments sind ein Hauptanziehungspunkt.", "Es gehört zu Dublins wichtigsten historischen Wahrzeichen."],
      hu: ["A Dublin Castle a történelmi belvárosban áll.", "Évszázadokon át brit közigazgatási központ volt.", "Ma állami rendezvényeknek és túráknak ad otthont.", "A State Apartments a fő látványossága.", "Dublin egyik alapvető történelmi nevezetessége."],
      ro: ["Castelul Dublin se află în centrul istoric al orașului.", "A fost secole întregi un centru administrativ britanic.", "Astăzi găzduiește evenimente de stat și tururi.", "State Apartments sunt un punct de atracție major.", "Este unul dintre reperele istorice esențiale ale Dublinului."]
    },
    image: "/geo-images/ireland/dublin-castle.webp",
  },
  {
    id: "landmark-st-patricks-cathedral",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2744, 53.3397],
    name: { de: "St. Patrick's Cathedral", hu: "Szent Patrik-katedrális", ro: "Catedrala Sf. Patrick", en: "St. Patrick's Cathedral" },
    description: {
      en: "St. Patrick's Cathedral is Dublin's largest church and a defining landmark of Irish religious heritage. Its Gothic architecture, memorials, and literary links make it a strong search topic for Dublin sightseeing. The cathedral is closely tied to Saint Patrick and long-running urban history on the south side of the city. It is both a spiritual site and a major piece of the capital's visual identity.",
      de: "Die St. Patrick's Cathedral ist die größte Kirche Dublins und ein prägendes Wahrzeichen des irischen religiösen Erbes. Ihre gotische Architektur, Denkmäler und literarischen Bezüge machen sie zu einem starken Suchthema für Dubliner Sehenswürdigkeiten. Die Kathedrale ist eng mit dem heiligen Patrick und der langen Stadtgeschichte auf der Südseite verbunden. Sie ist sowohl ein spiritueller Ort als auch ein wichtiges Element der visuellen Identität der Hauptstadt.",
      hu: "A Szent Patrik-katedrális Dublin legnagyobb temploma és az ír vallási örökség meghatározó nevezetessége. Gótikus építészete, emlékművei és irodalmi kapcsolatai miatt erős keresési téma Dublin látnivalóinak körében. A katedrális szorosan kötődik Szent Patrikhoz és a város déli oldalának hosszú történetéhez. Egyszerre spirituális helyszín és a főváros vizuális identitásának fontos része.",
      ro: "Catedrala Sf. Patrick este cea mai mare biserică din Dublin și un reper definitoriu al patrimoniului religios irlandez. Arhitectura gotică, memorialele și legăturile literare o fac un subiect puternic pentru căutările despre obiectivele Dublinului. Catedrala este strâns legată de Sfântul Patrick și de istoria urbană de lungă durată a părții sudice a orașului. Este atât un loc spiritual, cât și o piesă majoră a identității vizuale a capitalei."
    },
  descriptionAdvanced: {
      en: "St. Patrick's Cathedral is the National Cathedral of the Church of Ireland and the largest church building in the country. Founded in 1191 in Dublin, it is reputedly built on the site where Saint Patrick baptized converts in a holy well. The soaring Gothic architecture is accompanied by a rich musical tradition, particularly its world-renowned choir. The cathedral also holds the tomb of Jonathan Swift, author of Gulliver's Travels, blending religious history with monumental literary heritage.",

    ro: "Catedrala Sf. Patrick este cea mai mare biserică din Irlanda și a fost fondată în anul 1191 în onoarea sfântului patron al insulei. Legenda spune că a fost construită pe locul unde Sfântul Patrick obișnuia să boteze convertiții la creștinism folosind un izvor local. Clădirea se remarcă prin impresionanta sa arhitectură gotică timpurie englezească, având vitralii uluitoare și un cor somptuos sculptat. În contextul istoriei, catedrala oferă elevilor ocazia de a studia arhitectura gotică, rolul bisericilor în viața urbană medievală și mecenatul cultural al instituțiilor religioase. Scriitorul Jonathan Swift a fost decan al acestei catedrale în secolul al XVIII-lea și este înmormântat aici."
  },
  factsAdvanced: {
      en: [
      "St. Patrick's Cathedral is the tallest and largest church in Ireland, with a 43-meter spire.",
      "It was officially founded in 1191, replacing an earlier wooden church on the site.",
      "Jonathan Swift, the renowned author of 'Gulliver's Travels', served as Dean from 1713 to 1745.",
      "The cathedral choir school, founded in 1432, is the oldest school in Ireland."
    ],

    ro: [
      "Turnul catedralei a fost adăugat abia în anul 1370, iar fleșa superioară a fost construită mult mai târziu, în 1749.",
      "Catedrala a suferit lucrări de restaurare masive în 1860, finanțate integral de moștenitorul imperiului berii Guinness, Sir Benjamin Lee Guinness.",
      "Naosul catedralei are o lungime de aproximativ 91 de metri, susținut de bolți arhitecturale elaborate.",
      "Catedrala funcționează ca biserică națională a Bisericii Irlandei, fără a aparține de o anumită eparhie."
    ]
  },
    facts: {
      en: ["It is the largest church in Dublin.", "It is linked to Saint Patrick.", "The cathedral dates back to medieval Dublin.", "Jonathan Swift served there as dean.", "It is a key stop on Dublin sightseeing routes."],
      de: ["Es ist die größte Kirche Dublins.", "Es ist mit dem heiligen Patrick verbunden.", "Die Kathedrale geht auf das mittelalterliche Dublin zurück.", "Jonathan Swift war dort Dekan.", "Sie ist ein wichtiger Halt auf Dubliner Rundgängen."],
      hu: ["Ez Dublin legnagyobb temploma.", "Szent Patrikhoz kapcsolódik.", "A katedrális a középkori Dublinig nyúlik vissza.", "Jonathan Swift is itt szolgált dékánként.", "Fontos állomás a dublini városnézésben."],
      ro: ["Este cea mai mare biserică din Dublin.", "Este legată de Sfântul Patrick.", "Catedrala datează din Dublinul medieval.", "Jonathan Swift a fost aici decan.", "Este o oprire cheie pe traseele turistice din Dublin."]
    },
    image: "/geo-images/ireland/st-patricks-cathedral.webp",
  },
  {
    id: "landmark-the-spire",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2604, 53.3498],
    name: { de: "The Spire", hu: "A Spire", ro: "The Spire", en: "The Spire" },
    description: {
      en: "The Spire is Dublin's modern vertical landmark and one of the most recognizable city-center symbols in Ireland. Rising from O'Connell Street, it creates a strong visual anchor for urban tourism and map searches. The monument is useful for SEO because it is simple, iconic, and closely associated with Dublin's contemporary identity. It contrasts old and new Dublin in a single sharp skyline feature.",
      de: "The Spire ist Dublins modernes vertikales Wahrzeichen und eines der bekanntesten Symbole im Stadtzentrum Irlands. Es erhebt sich auf der O'Connell Street und bildet einen starken visuellen Anker für Stadttourismus und Kartensuchen. Das Denkmal ist SEO-stark, weil es schlicht, ikonisch und eng mit Dublins heutiger Identität verbunden ist. Es kontrastiert altes und neues Dublin in einem einzigen klaren Skyline-Element.",
      hu: "A Spire Dublin modern függőleges jelképe és Írország egyik legfelismerhetőbb belvárosi szimbóluma. Az O'Connell Streeten emelkedik, így erős vizuális horgonyt ad a városi turizmusnak és a térképes kereséseknek. Az emlékmű SEO-szempontból is erős, mert egyszerű, ikonikus és szorosan kapcsolódik Dublin kortárs identitásához. Egyetlen tiszta városi sziluettben ütközteti a régi és az új Dublin képét.",
      ro: "The Spire este reperul vertical modern al Dublinului și unul dintre cele mai recognoscibile simboluri din centrul orașului în Irlanda. Se ridică pe O'Connell Street și oferă un punct vizual puternic pentru turism urban și căutări pe hartă. Monumentul este util pentru SEO deoarece este simplu, iconic și strâns asociat cu identitatea contemporană a Dublinului. El contrastează vechiul și noul Dublin într-un singur element clar de skyline."
    },
  descriptionAdvanced: {
      en: "The Spire of Dublin, officially titled the 'Monument of Light', is a striking, needle-like stainless steel monument standing proudly on O'Connell Street. Erected in 2003 as part of a major urban regeneration project, it replaced the controversial Nelson's Pillar. The sleek structure rises 120 meters into the sky, narrowing to a point that sways gently in the wind. The Spire represents modern, forward-looking Ireland and serves as an imposing focal point demonstrating contemporary urban architectural design.",

    ro: "The Spire, cunoscut și sub numele de Monumentul Luminii, este o structură arhitecturală monumentală în formă de ac situată pe strada O'Connell, în inima Dublinului. Finalizat în anul 2003 ca parte a unui proiect de modernizare urbană, acest con alungit din oțel inoxidabil a redefinit linia orizontului capitalei irlandeze. În timpul zilei, suprafața sa metalică reflectă cerul și dinamismul orașului, iar noaptea, vârful este iluminat subtil. Pentru educația geografică și de urbanism, monumentul reprezintă o abordare inovatoare de regenerare a spațiului public și de marcare a unei identități moderne a orașului. Baza monumentului este gravată cu modele artistice subtile inspirate din geologia irlandeză."
  },
  factsAdvanced: {
      en: [
      "The Spire stands at an impressive 120 meters (390 feet) tall.",
      "It is constructed from eight hollow stainless steel tubes.",
      "The base measures 3 meters in diameter, narrowing to just 15 centimeters at the apex.",
      "The top section is perforated and illuminated from within by LEDs at night."
    ],

    ro: [
      "Monumentul are o înălțime de 120 de metri, fiind una dintre cele mai înalte sculpturi urbane din lume.",
      "Diametrul său la bază măsoară 3 metri, îngustându-se treptat până la doar 15 centimetri în punctul superior.",
      "A fost construit pe fostul amplasament al monumentului dedicat Amiralului Nelson, care a fost distrus în urma unui atentat cu bombă în 1966.",
      "Structura este proiectată să se balanseze flexibil până la un metru și jumătate în timpul furtunilor puternice."
    ]
  },
    facts: {
      en: ["The Spire stands on O'Connell Street.", "It is a modern Dublin landmark.", "It replaced the old Nelson's Pillar site.", "The structure is made of stainless steel.", "It is one of the city's simplest visual icons."],
      de: ["The Spire steht auf der O'Connell Street.", "Es ist ein modernes Dubliner Wahrzeichen.", "Es ersetzte den Standort der früheren Nelson's Pillar.", "Die Struktur besteht aus Edelstahl.", "Es ist eines der schlichtesten visuellen Symbole der Stadt."],
      hu: ["A Spire az O'Connell Streeten áll.", "Modern dublini nevezetesség.", "A régi Nelson's Pillar helyét váltotta.", "Rozsdamentes acélból készült.", "A város egyik legegyszerűbb vizuális ikonja."],
      ro: ["The Spire se află pe O'Connell Street.", "Este un reper modern al Dublinului.", "A înlocuit locul fostului Nelson's Pillar.", "Structura este din oțel inoxidabil.", "Este unul dintre cele mai simple simboluri vizuale ale orașului."]
    },
    image: "/geo-images/ireland/the-spire.webp",
  },
  {
    id: "landmark-belfast-city-hall",
    type: "landmark",
    parent: "ireland",
    coords: [-5.9262, 54.5964],
    name: { de: "Belfast City Hall", hu: "Belfast City Hall", ro: "Belfast City Hall", en: "Belfast City Hall" },
    description: {
      en: "Belfast City Hall is an iconic civic building and a central landmark in Northern Ireland's capital. Its grand dome and public square make it a strong search point for city tours, architecture, and Belfast travel. The building reflects the wealth and ambition of the city's industrial era. It is a highly photogenic symbol of Belfast's civic identity and urban pride.",
      de: "Belfast City Hall ist ein ikonisches Verwaltungsgebäude und ein zentrales Wahrzeichen der Hauptstadt Nordirlands. Seine große Kuppel und der öffentliche Platz machen es zu einem starken Suchpunkt für Stadtrundgänge, Architektur und Belfast-Reisen. Das Gebäude spiegelt den Wohlstand und Ehrgeiz der industriellen Čra der Stadt wider. Es ist ein äußerst fotogenes Symbol für Belfasts Bürgeridentität und städtischen Stolz.",
      hu: "A Belfast City Hall ikonikus közigazgatási épület és Észak-Írország fővárosának központi nevezetessége. Nagy kupolája és a nyilvános tér erős keresési ponttá teszi városi túrák, építészet és Belfast-utazás kapcsán. Az épület a város ipari korszakának gazdagságát és ambícióját tükrözi. Nagyon fotogén jelképe Belfast városi identitásának és polgári büszkeségének.",
      ro: "Belfast City Hall este o clădire civică emblematică și un reper central în capitala Irlandei de Nord. Domul său mare și piața publică îl transformă într-un punct puternic pentru tururi ale orașului, arhitectură și călătorii în Belfast. Clădirea reflectă bogăția și ambiția erei industriale a orașului. Este un simbol foarte fotogenic al identității civice și mândriei urbane a Belfastului."
    },
  descriptionAdvanced: {
      en: "Belfast City Hall is a magnificent civic building that dominates Donegall Square in the center of Northern Ireland's capital. Completed in 1906, its grand Baroque Revival architecture, complete with copper domes and opulent marble interiors, was designed to reflect Belfast's immense wealth during the industrial shipbuilding boom. The building and its surrounding memorial gardens, including the Titanic Memorial, offer a profound look into the civic pride and complex socio-political history of the region.",

    ro: "Belfast City Hall, clădirea Primăriei din Belfast, este o capodoperă a stilului arhitectural Renașterea Clasică și centrul simbolic al orașului. Finalizată în 1906, clădirea marchează perioada în care Belfastul a primit statutul de oraș datorită expansiunii sale industriale explozive, mai ales în construcția de nave și prelucrarea inului. Structura este construită din piatră de Portland albă, cu un dom de cupru dominant și interioare fastuoase decorate cu marmură italiană. Pentru elevi, acest edificiu subliniază legătura dintre prosperitatea economică din timpul Revoluției Industriale și grandiozitatea arhitecturii publice civice. Grădinile din jurul primăriei includ numeroase statui și un monument dedicat victimelor de pe Titanic."
  },
  factsAdvanced: {
      en: [
      "Belfast City Hall was completed in 1906 following Belfast's elevation to city status.",
      "It was designed by architect Sir Alfred Brumwell Thomas in the Baroque Revival style.",
      "The building's impressive central copper dome rises to a height of 53 meters (173 feet).",
      "The grounds feature a dedicated memorial to the victims of the RMS Titanic disaster."
    ],

    ro: [
      "Domul central al clădirii are o înălțime de 53 de metri și domină întregul bulevard Donegall Square.",
      "Construcția clădirii a costat la acea vreme suma enormă de 369.000 de lire sterline.",
      "Primăria găzduiește scaune de consiliu fabricate din lemn de stejar importat exclusiv din Rusia.",
      "Vitrailele din interior spun povestea istoriei industriale, culturale și a mitologiei Irlandei de Nord."
    ]
  },
    facts: {
      en: ["It stands in Donegall Square.", "The building is a Belfast civic symbol.", "It reflects the city's Edwardian era wealth.", "The grounds often host public events.", "It is a key landmark in the city center."],
      de: ["Es steht am Donegall Square.", "Das Gebäude ist ein bürgerliches Symbol Belfasts.", "Es spiegelt den Wohlstand der Edwardianischen Zeit wider.", "Auf dem Gelände finden oft öffentliche Veranstaltungen statt.", "Es ist ein wichtiges Wahrzeichen im Stadtzentrum."],
      hu: ["A Donegall Square-en áll.", "Belfast polgári szimbóluma.", "A város Edward-kori gazdagságát tükrözi.", "A környéken gyakran tartanak nyilvános eseményeket.", "A belváros egyik fő nevezetessége."],
      ro: ["Se află în Donegall Square.", "Este un simbol civic al Belfastului.", "Reflectă bogăția orașului din epoca edwardiană.", "În zonă au loc adesea evenimente publice.", "Este un reper cheie din centrul orașului."]
    },
    image: "/geo-images/ireland/belfast-city-hall.webp",
  },
  {
    id: "landmark-port-of-cork",
    type: "port",
    parent: "ireland",
    coords: [-8.3164, 51.8976],
    name: { de: "Port of Cork", hu: "Cork kikötője", ro: "Portul Cork", en: "Port of Cork" },
    description: {
      en: "The Port of Cork is one of Ireland's major maritime gateways and a strong keyword for logistics and cruise tourism. It supports commercial shipping, ferry activity, and the wider economy of the south coast. The port also connects naturally with Cork City, Cobh, and the Irish Sea and Atlantic routes. It is an important part of the modern Irish port story and regional trade network.",
      de: "Der Port of Cork ist einer der wichtigsten Seehäfen Irlands und ein starkes Keyword für Logistik- und Kreuzfahrttourismus. Er unterstützt den Handelsschiffsverkehr, Fähraktivität und die Wirtschaft der Südküste. Der Hafen verbindet sich natürlich mit Cork City, Cobh sowie den Irischen-Meer- und Atlantikrouten. Er ist ein wichtiger Teil der modernen irischen Hafen- und Handelsgeschichte.",
      hu: "A Port of Cork Írország egyik fő tengeri kapuja és erős kulcsszó a logisztika és a hajókikötő turizmus terén. Teherhajózást, kompforgalmat és a déli part gazdaságát is szolgálja. A kikötő szervesen kapcsolódik Cork városához, Cobhhoz és az Ír-tenger, illetve az Atlanti-útvonalakhoz. A modern ír kikötőtörténet és a regionális kereskedelmi hálózat fontos része.",
      ro: "Portul Cork este una dintre principalele porți maritime ale Irlandei și un cuvânt-cheie puternic pentru logistică și turism de croazieră. Susține transportul comercial, feriboturile și economia coastei de sud. Portul se leagă natural de Cork City, Cobh și rutele din Marea Irlandei și Atlantic. Este o parte importantă a poveștii moderne a porturilor irlandeze și a rețelei regionale de comerț."
    },
  descriptionAdvanced: {
      en: "The Port of Cork is a critical maritime gateway situated on the southern coast of Ireland, utilizing the vast natural expanse of Cork Harbour. Historically, it was a central hub for exporting agricultural goods to the British Empire and provisioning transatlantic ships, including the ill-fated Titanic. Today, it remains one of the country's most vital commercial ports, handling enormous volumes of freight and luxury cruise liners. Studying the port highlights the enduring importance of deep-water navigation to an island nation's economy.",

    ro: "Portul Cork, recunoscut drept al doilea cel mai mare port natural din lume după cel din Sydney, a fost o componentă vitală a economiei maritime irlandeze timp de secole. Situat pe coasta de sud a Irlandei, acesta oferă un ancoraj adânc și protejat de capriciile Oceanului Atlantic. A fost un punct de plecare crucial pentru milioane de emigranți irlandezi în secolul al XIX-lea, în special din zona orașului portuar Cobh, aflat în inima estuarului. În cadrul cursurilor de geografie economică, portul exemplifică importanța așezărilor strategice costiere și influența comerțului maritim asupra dezvoltării urbane. Astăzi, continuă să fie un important centru industrial, logistic și terminal pentru nave de croazieră."
  },
  factsAdvanced: {
      en: [
      "The Port of Cork utilizes the second-largest natural harbor by navigational area in the world.",
      "It is a 'Tier 1' port of national significance in Ireland.",
      "The port handles over 10 million tonnes of commercial freight annually.",
      "Cobh, located within the harbor, was the final port of call for the RMS Titanic in 1912."
    ],

    ro: [
      "Baza navală Haulbowline, sediul principal al Serviciului Naval Irlandez, este situată pe o insulă în interiorul portului.",
      "Aproximativ 2,5 milioane de irlandezi au emigrat prin acest port între anii 1848 și 1950.",
      "Portul Cork gestionează anual peste 10 milioane de tone de mărfuri cargo diversificate.",
      "Ultimul punct de ancorare al faimosului vas RMS Titanic, înainte de traversarea oceanului, a fost în zona Cobh din Portul Cork."
    ]
  },
    facts: {
      en: ["It is one of Ireland's main ports.", "The port supports cargo and cruise traffic.", "Cork Harbour is closely linked to it.", "It is important for south-coast trade.", "Port of Cork is a major maritime logistics keyword."],
      de: ["Es ist einer der wichtigsten Häfen Irlands.", "Der Hafen unterstützt Fracht- und Kreuzfahrtverkehr.", "Der Cork Harbour ist eng mit ihm verbunden.", "Er ist wichtig für den Handel an der Südküste.", "Port of Cork ist ein wichtiges Keyword für maritime Logistik."],
      hu: ["Írország egyik fő kikötője.", "Teher- és hajóforgalmat is kiszolgál.", "Szorosan kapcsolódik a Cork Harbourhoz.", "Fontos a déli part kereskedelme számára.", "A Port of Cork jelentős tengeri logisztikai kulcsszó."],
      ro: ["Este unul dintre principalele porturi ale Irlandei.", "Portul susține trafic de marfă și croaziere.", "Este strâns legat de Cork Harbour.", "Este important pentru comerțul de pe coasta de sud.", "Port of Cork este un cuvânt-cheie major pentru logistică maritimă."]
    },
    image: "/geo-images/ireland/port-of-cork.webp",
  },
  {
    id: "landmark-dublin-port",
    type: "port",
    parent: "ireland",
    coords: [-6.2228, 53.3490],
    name: { de: "Dublin Port", hu: "Dublin kikötője", ro: "Portul Dublin", en: "Dublin Port" },
    description: {
      en: "Dublin Port is the country's busiest ferry and freight gateway and a key search term for Irish transport. It sits close to the city center, linking the capital to Britain and continental trade routes. The port's role in logistics, tourism, and energy supply makes it central to Ireland's modern economy. It also anchors the city's long relationship with the sea and river mouth.",
      de: "Dublin Port ist Irlands verkehrsreichster Fähr- und Frachtknoten und ein wichtiges Suchwort für irischen Verkehr. Er liegt nahe am Stadtzentrum und verbindet die Hauptstadt mit Großbritannien und kontinentalen Handelsrouten. Die Rolle des Hafens in Logistik, Tourismus und Energieversorgung macht ihn zentral für die moderne irische Wirtschaft. Er verankert zudem die lange Beziehung der Stadt zum Meer und zur Flussmündung.",
      hu: "A Dublin Port az ország legforgalmasabb komp- és árufuvarozási kapuja, valamint fontos keresőkifejezés az ír közlekedés témájában. A belváros közelében fekszik, és összeköti a fővárost Nagy-Britanniával és a kontinentális kereskedelmi útvonalakkal. A kikötő logisztikai, turisztikai és energiaellátási szerepe miatt központi jelentőségű Írország modern gazdaságában. Emellett a város tengerrel és folyótorkolattal való hosszú kapcsolatát is megtestesíti.",
      ro: "Portul Dublin este cea mai aglomerată poartă de feribot și marfă din țară și un termen-cheie important pentru transportul irlandez. Se află aproape de centrul orașului și leagă capitala de Marea Britanie și de rutele comerciale continentale. Rolul portului în logistică, turism și aprovizionarea cu energie îl face central pentru economia modernă a Irlandei. De asemenea, ancorează relația îndelungată a orașului cu marea și gura de vărsare a râului."
    },
  descriptionAdvanced: {
      en: "Dublin Port is the largest and busiest seaport in the Republic of Ireland, located at the mouth of the River Liffey. It acts as the primary logistical artery for the nation, managing a massive percentage of the country's import and export trade. The port's development over centuries has drastically altered the natural coastline through extensive land reclamation. For students of economic geography, Dublin Port is an essential study of modern logistics, ro-ro (roll-on/roll-off) ferry transport, and infrastructural expansion.",

    ro: "Portul Dublin, situat în gura de vărsare a râului Liffey, reprezintă inima comercială maritimă a Irlandei, gestionând cea mai mare parte a traficului de pasageri și mărfuri al țării. Originile sale datează din perioada așezărilor vikinge, însă infrastructura modernă de dane, terminale de feriboturi și macarale s-a dezvoltat masiv odată cu revoluția industrială. Astăzi, acesta constituie poarta principală de conectare a Irlandei la rețelele logistice europene și globale. Analiza acestui port ajută elevii să înțeleagă conceptele de globalizare, comerț internațional și logistică multimodală. Datorită unei expansiuni atente, facilitățile portuare coexistă cu un biosistem estuarian protejat, reprezentând un echilibru între industrie și ecologie."
  },
  factsAdvanced: {
      en: [
      "Dublin Port handles approximately 50% of the Republic of Ireland's total trade volume.",
      "The port estate covers an expansive area of over 260 hectares (640 acres).",
      "It manages over 2 million twenty-foot equivalent units (TEU) of cargo annually.",
      "The port's constant expansion involves significant ongoing land reclamation projects."
    ],

    ro: [
      "Portul Dublin procesează aproape 50% din totalul comerțului maritim internațional al Irlandei.",
      "Complexul portuar acoperă o suprafață de peste 260 de hectare chiar la marginea estică a orașului Dublin.",
      "Terminalul portuar gestionează anual trecerea a aproximativ 2 milioane de pasageri cu feribotul.",
      "Zidul Marii Sudice, un dig masiv construit în secolul al XVIII-lea pentru a proteja portul, măsoară peste 6 kilometri lungime."
    ]
  },
    facts: {
      en: ["Dublin Port is Ireland's busiest port.", "It handles ferries and freight.", "The port is close to the city center.", "It links Ireland with Britain and Europe.", "It is essential to the national supply chain."],
      de: ["Dublin Port ist Irlands verkehrsreichster Hafen.", "Er wickelt Fähren und Fracht ab.", "Der Hafen liegt nahe am Stadtzentrum.", "Er verbindet Irland mit Großbritannien und Europa.", "Er ist für die nationale Lieferkette unverzichtbar."],
      hu: ["A Dublin Port Írország legforgalmasabb kikötője.", "Komp- és áruforgalmat kezel.", "A belvároshoz közel fekszik.", "Összeköti Írországot Nagy-Britanniával és Európával.", "Nélkülözhetetlen a nemzeti ellátási láncban."],
      ro: ["Portul Dublin este cel mai aglomerat port al Irlandei.", "Gestionează feriboturi și marfă.", "Portul este aproape de centrul orașului.", "Leagă Irlanda de Marea Britanie și Europa.", "Este esențial pentru lanțul național de aprovizionare."]
    },
    image: "/geo-images/ireland/dublin-port.webp",
  }
  ,
  {
    id: "landmark-national-museum-archaeology",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2541, 53.3409],
    name: { de: "National Museum of Ireland", hu: "Írország Nemzeti Múzeuma", ro: "National Museum of Ireland", en: "National Museum of Ireland" },
    description: {
      en: "The National Museum of Ireland in Dublin is a flagship cultural landmark for archaeology and Irish history. Its collections cover gold, bog bodies, weapons, and everyday objects that trace the island's long past. The museum is a strong keyword for educational travel, family visits, and rain-proof Dublin itineraries. It offers a deep, curated view of Ireland from prehistory to the modern era.",
      de: "Das National Museum of Ireland in Dublin ist ein Flaggschiff unter den kulturellen Wahrzeichen für Archäologie und irische Geschichte. Seine Sammlungen umfassen Gold, Moorleichen, Waffen und Alltagsgegenstände, die die lange Vergangenheit der Insel nachzeichnen. Das Museum ist ein starkes Keyword für Bildungstourismus, Familienbesuche und wetterfeste Dublin-Programme. Es bietet einen tiefen, kuratierten Blick auf Irland von der Urgeschichte bis zur Moderne.",
      hu: "A dublini Írország Nemzeti Múzeuma zászlóshajó kulturális nevezetesség régészet és ír történelem témában. Gyűjteményei aranyat, lápibeadványokat, fegyvereket és mindennapi tárgyakat tartalmaznak, amelyek végigkövetik a sziget hosszú múltját. A múzeum erős kulcsszó az oktatási utazás, családi látogatás és az esőbiztos dublini programok terén. Mély, kurált nézőpontot ad Írországról az őskortól a modern korig.",
      ro: "National Museum of Ireland din Dublin este un reper cultural de prim rang pentru arheologie și istorie irlandeză. Colecțiile sale includ aur, corpuri conservate în turbă, arme și obiecte cotidiene care urmăresc trecutul lung al insulei. Muzeul este un cuvânt-cheie puternic pentru turism educațional, vizite în familie și itinerarii Dublin pe vreme ploioasă. Oferă o perspectivă profundă și curată asupra Irlandei, de la preistorie până în epoca modernă."
    },
  descriptionAdvanced: {
      en: "The National Museum of Ireland - Archaeology, located on Kildare Street in Dublin, is the premier repository of the nation's ancient artifacts. The museum's stunning Victorian Palladian architecture houses an unparalleled collection ranging from prehistoric gold hoards to astonishingly preserved Iron Age 'bog bodies'. Its Viking exhibits and the intricate Ardagh Chalice demonstrate the high level of early metalworking. The institution is a crucial educational resource for understanding the physical evidence of Ireland's deep, complex past.",

    ro: "Muzeul Național al Irlandei, filiala dedicată arheologiei, este depozitarul principal al comorilor istorice și preistorice ale națiunii. Găzduit într-o clădire impresionantă de pe strada Kildare, muzeul adăpostește o colecție neprețuită de artefacte, de la arme vikinge și podoabe din Epoca Bronzului până la capodoperele artei celtice și medievale creștine. Expozițiile detaliază evoluția tehnologică și culturală a locuitorilor insulei, oferind o perspectivă cronologică unică. Pentru curriculumul școlar de istorie, vizitarea virtuală sau reală a acestor colecții ajută la demistificarea vieții strămoșilor europeni, transformând concepte abstracte în obiecte tangibile. Printre cele mai renumite exponate se numără relicvele de aur bogat ornamentate, recunoscute pe plan mondial."
  },
  factsAdvanced: {
      en: [
      "The museum's building opened in 1890 and features a beautiful domed rotunda.",
      "It houses the Broighter Hoard, which includes one of the finest examples of early Christian metalwork.",
      "The museum displays several incredibly well-preserved Iron Age 'bog bodies'.",
      "Its collection of prehistoric gold artifacts is one of the most extensive in Western Europe."
    ],

    ro: [
      "Printre cele mai faimoase exponate se află faimosul Caliciu de la Ardagh, datând din secolul al VIII-lea.",
      "Muzeul găzduiește \\\"Oamenii din mlaștină\\\", corpuri umane din Epoca Fierului mumificate natural în turbării.",
      "Colecția de artefacte din aur preistoric a muzeului este una dintre cele mai extinse din Europa.",
      "Clădirea muzeului se remarcă prin holul central impresionant în stil renascentist paladian cu un dom spaniol, inaugurată în anul 1890."
    ]
  },
    facts: {
      en: ["It is a major Dublin museum.", "The archaeology branch is especially famous.", "Its collection includes the Ardagh Chalice.", "The museum is free to enter.", "It is central to Irish school and family visits."],
      de: ["Es ist ein großes Dubliner Museum.", "Der archäologische Zweig ist besonders berühmt.", "Die Sammlung umfasst den Ardagh Chalice.", "Der Eintritt ist frei.", "Es ist zentral für Schul- und Familienbesuche in Irland."],
      hu: ["Ez egy jelentős dublini múzeum.", "Különösen híres a régészeti részlege.", "Gyűjteményében megtalálható az Ardagh Chalice.", "A belépés ingyenes.", "Fontos helyszín iskolai és családi látogatásokhoz."],
      ro: ["Este un muzeu important din Dublin.", "Secția de arheologie este deosebit de celebră.", "Colecția include Ardagh Chalice.", "Intrarea este gratuită.", "Este central pentru vizite școlare și de familie în Irlanda."]
    },
    image: "/geo-images/ireland/national-museum-archaeology.webp",
  },
  {
    id: "landmark-the-custom-house",
    type: "landmark",
    parent: "ireland",
    coords: [-6.2487, 53.3498],
    name: { de: "The Custom House", hu: "Custom House", ro: "The Custom House", en: "The Custom House" },
    description: {
      en: "The Custom House is one of Dublin's finest neoclassical landmarks and a symbol of the city's riverfront. Designed by James Gandon, it remains central to Irish architectural tourism and cityscape photography. The building also carries strong historical meaning through fire, reconstruction, and state administration. It is a classic keyword for Dublin architecture, Georgian design, and waterfront heritage.",
      de: "The Custom House ist eines der besten neoklassizistischen Wahrzeichen Dublins und ein Symbol der Flussfront der Stadt. Von James Gandon entworfen, bleibt es zentral für irischen Architekturtourismus und Stadtfotografie. Das Gebäude hat auch durch Feuer, Wiederaufbau und staatliche Verwaltung starke historische Bedeutung. Es ist ein klassisches Keyword für Dubliner Architektur, georgianisches Design und Ufererbe.",
      hu: "A Custom House Dublin egyik legszebb neoklasszicista nevezetessége és a folyópart egyik jelképe. James Gandon tervezte, és ma is központi szerepet játszik az ír építészeti turizmusban és városképi fotózásban. Az épület a tűz, az újjáépítés és az államigazgatás miatt történelmileg is fontos. Klasszikus kulcsszó Dublin építészetére, georgiánus stílusára és vízparti örökségére.",
      ro: "The Custom House este unul dintre cele mai frumoase repere neoclasice ale Dublinului și un simbol al malului râului. Proiectată de James Gandon, rămâne centrală pentru turismul arhitectural irlandez și fotografia de cityscape. Clădirea are și o puternică semnificație istorică prin incendiu, reconstrucție și administrarea statului. Este un cuvânt-cheie clasic pentru arhitectura Dublinului, designul georgian și patrimoniul de pe malul apei."
    },
  descriptionAdvanced: {
      en: "The Custom House in Dublin is a masterpiece of neoclassical architecture, stretching gracefully along the north bank of the River Liffey. Completed in 1791, it was designed by James Gandon to manage the collection of customs duties, symbolizing Dublin's booming 18th-century maritime trade. The building was famously engulfed in flames during the Irish War of Independence in 1921, burning for five days. Its subsequent meticulous restoration makes it a powerful emblem of both colonial administration and modern republic resilience.",

    ro: "The Custom House din Dublin este una dintre cele mai rafinate capodopere arhitecturale ale stilului neoclasic de pe întreg continentul european. Proiectată de arhitectul James Gandon și finalizată în anul 1791, clădirea a funcționat inițial drept centru pentru colectarea taxelor vamale portuare ale orașului. Fațada sa monumentală de-a lungul râului Liffey, marcată de coloane dorice, sculpturi alegorice și un dom elegant, simboliza prosperitatea comercială crescândă a Dublinului. Elevii studiază adesea această clădire ca un prim exemplu al arhitecturii instituționale care reflectă puterea politică și comercială din secolul al XVIII-lea. Clădirea a fost grav avariată în timpul Războiului de Independență în 1921, dar a fost ulterior meticulos restaurată."
  },
  factsAdvanced: {
      en: [
      "The Custom House was designed by renowned architect James Gandon and completed in 1791.",
      "It features four monumental facades and a copper dome topped with a statue of Commerce.",
      "The building was deliberately set on fire by the IRA in 1921, destroying centuries of historical records.",
      "Its extensive post-war restoration took over a decade to complete."
    ],

    ro: [
      "Domul central al clădirii este încununat cu o statuie mare din cupru, o reprezentare alegorică a Comerțului.",
      "Fiecare arcadă din fațada clădirii este împodobită cu un cap sculptat din piatră reprezentând câte un mare râu al Irlandei.",
      "Construcția clădirii a provocat inițial controverse majore, necesitând mutarea vechiului port și generând proteste.",
      "În incendiul din 1921, focul a ars timp de cinci zile, distrugând registre vamale și istorice neprețuite."
    ]
  },
    facts: {
      en: ["The Custom House stands on the River Liffey.", "It was designed by James Gandon.", "It is a major neoclassical building.", "The structure has a dramatic fire history.", "It is one of Dublin's most photographed riverfront sites."],
      de: ["The Custom House steht am River Liffey.", "Es wurde von James Gandon entworfen.", "Es ist ein bedeutendes neoklassizistisches Gebäude.", "Das Gebäude hat eine dramatische Brandgeschichte.", "Es ist einer der meistfotografierten Orte an Dublins Flussufer."],
      hu: ["A Custom House a Liffey folyónál áll.", "James Gandon tervezte.", "Jelentős neoklasszicista épület.", "Dramatikus tűz története van.", "Dublin egyik legtöbbet fotózott folyóparti helye."],
      ro: ["The Custom House se află pe râul Liffey.", "A fost proiectată de James Gandon.", "Este o clădire neoclasică majoră.", "Structura are o istorie dramatică a incendiului.", "Este unul dintre cele mai fotografiate situri de pe malul râului din Dublin."]
    },
    image: "/geo-images/ireland/the-custom-house.webp",
  },
  {
    id: "landmark-belfast-harbour",
    type: "port",
    parent: "ireland",
    coords: [-5.8951, 54.6179],
    name: { de: "Belfast Harbour", hu: "Belfast Harbour", ro: "Portul Belfast", en: "Belfast Harbour" },
    description: {
      en: "Belfast Harbour is a key maritime complex and a major part of the city's industrial and cruise identity. It connects Belfast with trade, shipbuilding memory, and redevelopment on the waterfront. The harbour area is also relevant for tourism searches because of Titanic links and modern waterfront regeneration. Belfast Harbour remains one of the strongest keywords for Northern Ireland port travel.",
      de: "Belfast Harbour ist ein wichtiger Hafenkontakt und ein zentraler Teil der industriellen und Kreuzfahrtidentität der Stadt. Er verbindet Belfast mit Handel, Schiffbau-Erinnerung und Umgestaltung am Wasser. Das Hafengebiet ist auch für Tourismussuchen relevant, da es mit der Titanic und der modernen Uferentwicklung verbunden ist. Belfast Harbour bleibt eines der stärksten Keywords für den Hafen-Tourismus in Nordirland.",
      hu: "A Belfast Harbour fontos tengeri komplexum és a város ipari, valamint hajókikötő identitásának központi része. Összeköti Belfastot a kereskedelemmel, a hajógyártás emlékezetével és a vízparti átépítéssel. A kikötőterület turisztikai keresésekben is jelentős a Titanic-kapcsolat és a modern partmenti fejlesztések miatt. A Belfast Harbour Észak-Írország kikötőturizmusának egyik legerősebb kulcsszava.",
      ro: "Portul Belfast este un complex maritim-cheie și o parte majoră a identității industriale și de croazieră a orașului. Leagă Belfast de comerț, memoria construcțiilor navale și regenerarea zonei waterfront. Zona portuară este relevantă și pentru căutările turistice datorită legăturilor cu Titanic și reamenajării moderne a malului. Belfast Harbour rămâne unul dintre cele mai puternice cuvinte-cheie pentru turismul de port din Irlanda de Nord."
    },
  descriptionAdvanced: {
      en: "Belfast Harbour is a major seaport and industrial zone located at the mouth of the River Lagan in Northern Ireland. During the 19th and early 20th centuries, it was the beating heart of global shipbuilding, dominated by the Harland and Wolff shipyard. The legacy of this industrial titan is still visible in the colossal Samson and Goliath cranes that tower over the skyline. Today, the harbor area has been heavily revitalized into the 'Titanic Quarter', blending heavy industry with tourism, media production, and modern technology.",

    ro: "Portul Belfast are o istorie industrială impresionantă, fiind faimos în special pentru rolul său global în construcția de nave în secolele al XIX-lea și al XX-lea. Situat pe râul Lagan, portul s-a transformat dintr-un simplu golf noroios într-un complex masiv de șantiere navale unde a operat faimoasa companie Harland and Wolff, locul de naștere al vasului RMS Titanic. Astăzi, pe lângă gestionarea unui volum masiv de mărfuri și pasageri, vechile docuri au fost rejuvenate în cartierul modern Titanic Quarter. Analizarea acestui port permite elevilor să înțeleagă ciclurile economice, de la apogeul industrial la declinul maritim și succesul unei renașteri urbane moderne. Macaralele galbene uriașe ale portului au devenit un simbol iconic al orizontului Belfastului."
  },
  factsAdvanced: {
      en: [
      "Belfast Harbour handles around 70% of Northern Ireland's seaborne trade.",
      "The harbor estate covers an area of roughly 2,000 acres, representing 20% of Belfast city.",
      "The iconic Samson and Goliath cranes stand at 106 and 96 meters tall, respectively.",
      "The harbor's Titanic Quarter is one of Europe's largest urban waterfront regeneration projects."
    ],

    ro: [
      "Domeniul portuar gestionează în prezent aproximativ 20% din comerțul portuar maritim al întregii insule a Irlandei.",
      "Cele două macarale uriașe, cunoscute local ca 'Samson și Goliat', au o înălțime de peste 90 de metri.",
      "Șantierul naval a angajat, la apogeul său, peste 30.000 de muncitori din comunitatea locală.",
      "Belfast Lough, canalul navigabil al portului, a trebuit să fie dragat intensiv de-a lungul timpului pentru a permite trecerea vaselor transatlantice mari."
    ]
  },
    facts: {
      en: ["Belfast Harbour is central to the city's waterfront.", "It is tied to shipbuilding history.", "The Titanic story is closely linked to the area.", "Cruise traffic is part of its modern role.", "It is a major Northern Ireland port keyword."],
      de: ["Belfast Harbour ist zentral für die Uferfront der Stadt.", "Er ist mit der Schiffbaugeschichte verbunden.", "Die Titanic-Geschichte ist eng mit dem Gebiet verknüpft.", "Kreuzfahrtverkehr gehört zu seiner modernen Rolle.", "Es ist ein wichtiges Keyword für den Hafen Nordirlands."],
      hu: ["A Belfast Harbour a város vízpartjának központi része.", "A hajóépítés történetéhez kötődik.", "A Titanic története szorosan kapcsolódik hozzá.", "A modern szerepében a hajókikötő-forgalom is jelen van.", "Fontos északír kikötői kulcsszó."],
      ro: ["Belfast Harbour este central pentru malul apei al orașului.", "Este legat de istoria construcțiilor navale.", "Povestea Titanic este strâns asociată zonei.", "Traficul de croazieră face parte din rolul său modern.", "Este un cuvânt-cheie major pentru porturile din Irlanda de Nord."]
    },
    image: "/geo-images/ireland/belfast-harbour.webp",
  },
  {
    id: "landmark-shannon-free-zone",
    type: "industry",
    parent: "ireland",
    coords: [-8.8918, 52.7030],
    name: { de: "Shannon Free Zone", hu: "Shannon Free Zone", ro: "Shannon Free Zone", en: "Shannon Free Zone" },
    description: {
      en: "Shannon Free Zone is one of Ireland's landmark industrial and business zones and a major keyword for economic travel content. Built around Shannon Airport, it became a symbol of modern investment, export activity, and international business. The zone is central to discussions about Irish industry, aviation-linked development, and regional jobs. It offers a strong modern contrast to the historic and scenic sites elsewhere in the country.",
      de: "Die Shannon Free Zone ist eine der markanten Industrie- und Wirtschaftsflächen Irlands und ein wichtiges Keyword für Wirtschaftstourismus. Rund um den Shannon Airport entstanden, wurde sie zum Symbol für moderne Investitionen, Exportaktivitäten und internationales Geschäft. Die Zone ist zentral für Diskussionen über irische Industrie, luftfahrtnahen Ausbau und regionale Arbeitsplätze. Sie bildet einen starken modernen Kontrast zu den historischen und landschaftlichen Orten des Landes.",
      hu: "A Shannon Free Zone Írország egyik meghatározó ipari és üzleti övezete, valamint fontos kulcsszó a gazdasági turizmusban. A Shannon repülőtér köré épült, és a modern befektetés, exporttevékenység és nemzetközi üzlet szimbólumává vált. Az övezet központi szerepet játszik az ír ipar, a repülőgéphez kapcsolódó fejlesztések és a regionális munkahelyek témájában. Erős modern kontrasztot ad az ország történelmi és festői helyszínei mellett.",
      ro: "Shannon Free Zone este una dintre zonele industriale și de afaceri emblematice ale Irlandei și un cuvânt-cheie major pentru conținutul despre economia țării. Dezvoltată în jurul aeroportului Shannon, a devenit un simbol al investițiilor moderne, activității de export și afacerilor internaționale. Zona este centrală în discuțiile despre industria irlandeză, dezvoltarea legată de aviație și locurile de muncă regionale. Oferă un contrast modern puternic față de siturile istorice și naturale ale țării."
    },
  descriptionAdvanced: {
      en: "The Shannon Free Zone, located adjacent to Shannon Airport in County Clare, is a pioneering business park with immense historical significance. Established in 1959, it was the world's very first modern Free Trade Zone, designed to encourage foreign direct investment and counter local economic decline. The initiative was a resounding success, attracting hundreds of international companies and serving as a blueprint for special economic zones globally, particularly in China. It is a critical study of how innovative economic policies can transform regional geography.",

    ro: "Shannon Free Zone, creată în 1959 lângă aeroportul Shannon din vestul Irlandei, reprezintă prima zonă economică liberă din lume și un succes major al politicilor industriale irlandeze. Ideea a fost dezvoltată pentru a stimula economia locală după ce avioanele cu reacție au început să traverseze oceanul fără a mai avea nevoie de escale de realimentare la Shannon. Zona a atras rapid multinaționale oferind stimulente fiscale considerabile, un mediu fără taxe vamale și proceduri administrative simplificate. Pentru cursurile de geografie și educație antreprenorială, ilustrează perfect cum inovația administrativă și crearea de medii favorabile afacerilor pot aduce investiții străine directe majore. Succesul modelului Shannon a fost studiat și replicat ulterior de numeroase alte țări, inclusiv în dezvoltarea zonelor economice speciale din Asia."
  },
  factsAdvanced: {
      en: [
      "The Shannon Free Zone was established in 1959, making it the world's first modern Free Trade Zone.",
      "The concept was heavily studied and replicated by the Chinese government in the 1980s.",
      "It covers over 600 acres and houses more than 100 international companies.",
      "The zone was a critical driver in establishing Ireland's modern aviation and technology sectors."
    ],

    ro: [
      "În prezent, Shannon Free Zone găzduiește peste 170 de companii internaționale cu profil tehnologic și de aviație.",
      "Zona economică a generat locuri de muncă pentru peste 8000 de profesioniști înalt calificați.",
      "Modelul creat aici a fost luat ca inspirație directă pentru înființarea Zonelor Economice Speciale din China.",
      "Este recunoscută global ca un centru de excelență pentru sectorul de leasing, mentenanță și inginerie aeronautică."
    ]
  },
    facts: {
      en: ["Shannon Free Zone is linked to Shannon Airport.", "It is a major Irish business and industry district.", "The zone is associated with export-oriented development.", "It helped define modern regional economic policy.", "It is a strong keyword for Irish industry content."],
      de: ["Die Shannon Free Zone ist mit dem Shannon Airport verbunden.", "Sie ist ein wichtiges irisches Wirtschafts- und Industriegebiet.", "Die Zone steht für exportorientierte Entwicklung.", "Sie prägte die moderne regionale Wirtschaftspolitik.", "Sie ist ein starkes Keyword für Industrieinhalte zu Irland."],
      hu: ["A Shannon Free Zone a Shannon repülőtérhez kapcsolódik.", "Fontos ír üzleti és ipari negyed.", "Az exportorientált fejlődéshez kötődik.", "Meghatározta a modern regionális gazdaságpolitikát.", "Erős kulcsszó az ír ipari tartalmakban."],
      ro: ["Shannon Free Zone este legată de aeroportul Shannon.", "Este un important district irlandez de afaceri și industrie.", "Zona este asociată cu dezvoltarea orientată spre export.", "A ajutat la definirea politicii economice regionale moderne.", "Este un cuvânt-cheie puternic pentru conținutul despre industria irlandeză."]
    },
    image: "/geo-images/ireland/shannon-free-zone.webp",
  },
  {
    id: "landmark-waterford-crystal",
    type: "industry",
    parent: "ireland",
    coords: [-7.1090, 52.2598],
    name: { de: "Waterford Crystal", hu: "Waterford Crystal", ro: "Waterford Crystal", en: "Waterford Crystal" },
    description: {
      en: "Waterford Crystal is a famous Irish manufacturing name and a strong tourism keyword for craftsmanship and luxury. The brand connects Waterford with premium design, export reputation, and a long tradition of skilled glassmaking. Visitors search for it as part of industrial heritage, factory visits, and Irish-made gifts. It is one of the clearest examples of Irish industry becoming a global brand story.",
      de: "Waterford Crystal ist ein berühmter irischer Produktionsname und ein starkes Tourismus-Keyword für Handwerk und Luxus. Die Marke verbindet Waterford mit Premiumdesign, Exportreputation und einer langen Glasmachertradition. Besucher suchen danach im Zusammenhang mit Industrieerbe, Werksbesuchen und Geschenken aus Irland. Es ist eines der klarsten Beispiele dafür, wie irische Industrie zu einer globalen Markengeschichte wurde.",
      hu: "A Waterford Crystal híres ír gyártómárka és erős turisztikai kulcsszó a kézművesség és a luxus témájában. A márka Waterfordot a prémium dizájnnal, az exporthírnévvel és az üvegművesség hosszú hagyományával köti össze. A látogatók ipari örökség, gyárlátogatás és ír ajándéktárgyak kapcsán keresik. Ez az egyik legtisztább példa arra, hogyan vált az ír ipar globális márkatörténetté.",
      ro: "Waterford Crystal este un nume celebru al producției irlandeze și un cuvânt-cheie puternic pentru meșteșug și lux. Brandul leagă Waterford de design premium, reputație de export și o lungă tradiție a sticlăriei. Vizitatorii îl caută pentru patrimoniu industrial, tururi de fabrică și cadouri made in Ireland. Este unul dintre cele mai clare exemple despre cum industria irlandeză a devenit o poveste globală de brand."
    },
  descriptionAdvanced: {
      en: "The House of Waterford Crystal is a world-renowned manufacturing facility and visitor center situated in the heart of Waterford city. The brand's origins date back to 1783, when it began producing exceptionally pure and intricately cut lead glass. Over the centuries, Waterford Crystal became synonymous with luxury, producing massive chandeliers for Westminster Abbey and the famous Times Square New Year's Eve ball. The facility offers students a vivid look at high-end artisan manufacturing, showcasing the physics of glassblowing and the precision of hand-cutting.",

    ro: "Waterford Crystal este o marcă mondială sinonimă cu sticlăria de cristal de cea mai înaltă calitate, ale cărei origini datează din 1783 în orașul Waterford din sud-estul Irlandei. Meșteșugul se bazează pe procesul tradițional de topire, suflare și gravare manuală a cristalului, proces rafinat de generații întregi de artizani locali. Fabrica și centrul de vizitatori oferă o demonstrație remarcabilă a îmbinării dintre chimia industrială a fabricării sticlei și talentul artistic uman. Studiul acestei industrii ajută elevii să aprecieze meșteșugurile tradiționale și modul în care materialele brute sunt transformate în bunuri de lux cu valoare adăugată uriașă. Cristalele Waterford au fost folosite pentru a crea trofee sportive faimoase și candelabre instalate în palate și catedrale din întreaga lume."
  },
  factsAdvanced: {
      en: [
      "Waterford Crystal was originally founded by brothers William and George Penrose in 1783.",
      "The manufacturing process involves mixing silica sand, potash, and litharge (potassium carbonate).",
      "Master blowers at the facility train for a minimum of five years.",
      "The factory produced the crystal panels for the famous Times Square New Year's Eve ball."
    ],

    ro: [
      "Un cristal Waterford autentic conține un procent ridicat de oxid de plumb (în jur de 33%), care îi conferă strălucirea și greutatea specifică.",
      "Compania a creat celebra sferă uriașă de cristal care este coborâtă în Times Square din New York de Revelion.",
      "Procesul de tăiere a cristalului implică utilizarea de discuri speciale cu diamant, necesitând ani de pregătire pentru un maestru tăietor.",
      "Fiecare piesă autentică produsă la fabrică poartă o ștampilă subtilă de autenticitate Waterford pe baza sa."
    ]
  },
    facts: {
      en: ["Waterford Crystal is a famous Irish brand.", "It is linked to glassmaking and craftsmanship.", "The name is associated with Waterford city.", "It is a key industrial heritage keyword.", "It is popular in luxury gift and tourism searches."],
      de: ["Waterford Crystal ist eine berühmte irische Marke.", "Sie ist mit Glasmacherei und Handwerk verbunden.", "Der Name ist mit der Stadt Waterford verbunden.", "Es ist ein wichtiges Keyword für Industrieerbe.", "Es ist beliebt bei Suchanfragen zu Luxusgeschenken und Tourismus."],
      hu: ["A Waterford Crystal híres ír márka.", "Az üvegművességhez és kézművességhez kötődik.", "A név Waterford városához kapcsolódik.", "Fontos ipari örökségi kulcsszó.", "Népszerű a luxusajándék és turisztikai keresésekben."],
      ro: ["Waterford Crystal este un brand irlandez celebru.", "Este legat de fabricarea sticlei și meșteșug.", "Numele este asociat cu orașul Waterford.", "Este un cuvânt-cheie important pentru patrimoniul industrial.", "Este popular în căutările pentru cadouri de lux și turism."]
    },
    image: "/geo-images/ireland/waterford-crystal.webp",
  },
  {
    id: "landmark-golden-vale",
    type: "agriculture",
    parent: "ireland",
    coords: [-8.2800, 52.2500],
    name: { de: "Golden Vale", hu: "Golden Vale", ro: "Golden Vale", en: "Golden Vale" },
    description: {
      en: "Golden Vale is one of Ireland's best-known agricultural regions and a powerful keyword for Irish farming tourism. The fertile landscape spans parts of Munster and is strongly associated with dairy production and pastureland. It represents the backbone of rural Irish food culture, export quality, and green landscape branding. Golden Vale is useful for content that connects agriculture, scenery, and traditional countryside identity.",
      de: "Golden Vale ist eine der bekanntesten Agrarregionen Irlands und ein starkes Keyword für irischen Landwirtschaftstourismus. Die fruchtbare Landschaft erstreckt sich über Teile von Munster und ist stark mit Milchproduktion und Weideland verbunden. Sie repräsentiert das Rückgrat der ländlichen irischen Esskultur, Exportqualität und grünen Landschaftsmarke. Golden Vale eignet sich gut für Inhalte, die Landwirtschaft, Landschaft und traditionelle Landidentität verbinden.",
      hu: "A Golden Vale Írország egyik legismertebb mezőgazdasági régiója és erős kulcsszó az ír farmturizmusban. A termékeny táj Munster részein terül el, és erősen kötődik a tejtermeléshez és a legelőkhöz. A vidéki ír gasztronómiai kultúra, az exportminőség és a zöld táj brandingjének gerincét jelképezi. A Golden Vale jól használható olyan tartalmakban, amelyek a mezőgazdaságot, a tájat és a hagyományos vidéki identitást kapcsolják össze.",
      ro: "Golden Vale este una dintre cele mai cunoscute regiuni agricole ale Irlandei și un cuvânt-cheie puternic pentru turismul agricol irlandez. Peisajul fertil se întinde în părți din Munster și este strâns asociat cu producția de lactate și pășunile. Reprezintă coloana vertebrală a culturii alimentare rurale irlandeze, a calității de export și a brandului de peisaj verde. Golden Vale este util pentru conținut care leagă agricultura, peisajul și identitatea tradițională de la țară."
    },
  descriptionAdvanced: {
      en: "The Golden Vale is an expansive area of gently rolling pastureland in the province of Munster, primarily covering parts of Limerick, Tipperary, and Cork. Renowned as the best agricultural land in Ireland, its rich, well-drained limestone soils have supported intensive dairy and beef farming for generations. The region's geography provides the backbone for Ireland's global reputation as a premier producer of high-quality dairy products. For students of agriculture and geography, the Golden Vale illustrates the direct link between bedrock geology and economic prosperity.",

    ro: "Golden Vale, sau Valea de Aur, este o zonă de o frumusețe rurală remarcabilă și o vastă întindere de terenuri agricole deosebit de fertile situate în sud-vestul Irlandei. Acoperind regiuni din comitatele Tipperary, Limerick și Cork, această vale verde ondulată este susținută de soluri calcaroase extrem de nutritive. Agricultura este inima economică a regiunii, axată în principal pe creșterea bovinelor și producția produselor lactate superioare. Elevii pot învăța din acest peisaj despre corelația directă dintre geologie, fertilitatea solului și formarea unei industrii agroalimentare durabile. Datorită pajiștilor sale abundente, regiunea a fost centrul unei dispute istorice continue privind proprietatea terenurilor agricole."
  },
  factsAdvanced: {
      en: [
      "The Golden Vale is universally recognized as Ireland's prime dairy farming region.",
      "It sits predominantly on a bed of rich, fertile carboniferous limestone.",
      "The area is bordered by the Galtee Mountains to the south and the Slieve Felim Mountains to the north.",
      "The rich pasture supports grass growth for nearly 10 months of the year."
    ],

    ro: [
      "Termenul 'Golden' (Aur) se referă la productivitatea și valoarea enormă a solului agricol din zonă.",
      "Regiunea este renumită la nivel european pentru calitatea untului, brânzeturilor și a laptelui produs aici.",
      "Valea este străbătută de fluviul Suir și este protejată pe laturi de lanțuri muntoase de altitudine mică precum munții Galtee.",
      "Orașele din această regiune au prosperat istoric funcționând ca piețe mari de tranzacționare a animalelor și produselor lactate."
    ]
  },
    facts: {
      en: ["Golden Vale is a fertile farming region.", "It is strongly associated with dairy production.", "It lies in parts of Munster.", "The area is important to rural Irish branding.", "Golden Vale is a classic agriculture keyword."],
      de: ["Golden Vale ist eine fruchtbare Agrarregion.", "Sie ist stark mit Milchproduktion verbunden.", "Sie liegt in Teilen von Munster.", "Das Gebiet ist wichtig für die ländliche irische Markenbildung.", "Golden Vale ist ein klassisches Landwirtschafts-Keyword."],
      hu: ["A Golden Vale termékeny mezőgazdasági régió.", "Erősen kötődik a tejtermeléshez.", "Munster részein található.", "Fontos a vidéki ír márkaépítés szempontjából.", "A Golden Vale klasszikus mezőgazdasági kulcsszó."],
      ro: ["Golden Vale este o regiune agricolă fertilă.", "Este strâns asociată cu producția de lactate.", "Se află în părți din Munster.", "Zona este importantă pentru brandingul rural irlandez.", "Golden Vale este un cuvânt-cheie clasic pentru agricultură."]
    },
    image: "/geo-images/ireland/golden-vale.webp",
  },
  {
    id: "city-naas",
    type: "city",
    parent: "ireland",
    coords: [-6.6616, 53.2158],
    name: { de: "Naas", hu: "Naas", ro: "Naas", en: "Naas" },
    description: {
      en: "Naas is a fast-growing town in County Kildare. It works as a commuter base and a practical local centre. The town is close to Dublin and the wider horse-country landscape. Naas is a useful keyword for short breaks and regional travel.",
      de: "Naas ist eine schnell wachsende Stadt im County Kildare. Sie dient als Pendlerbasis und praktisches lokales Zentrum. Der Ort liegt nahe an Dublin und der groesseren Pferdelandschaft. Naas ist ein nuetzliches Keyword fuer Kurztrips und Regionalreisen.",
      hu: "Naas egy gyorsan fejlodo varos County Kildare megyeben. Ingazoi baziskent es praktikus helyi kozpontkent mukodik. A varos kozel van Dublinhoz es a lovas videkhez. Naas hasznos kulcsszo rovid utazasokhoz es regionalis turizmushoz.",
      ro: "Naas este un oras in crestere rapida din County Kildare. Functioneaza ca baza de navetism si centru local practic. Orasul este aproape de Dublin si de peisajul mai larg al zonei calaretilor. Naas este un cuvant-cheie util pentru escapade scurte si calatorii regionale."
    },
  descriptionAdvanced: {
      en: "Naas is the bustling county town of Kildare, situated in the commuter belt just southwest of Dublin. Historically, it was a major meeting place for pre-Norman Irish kings. Today, Naas is synonymous with the equestrian industry, surrounded by world-class stud farms and the famous Punchestown Racecourse. The town's rapid expansion highlights the geographical pressures of urban sprawl from a major capital city, transitioning from a historical market town into a major commuter and commercial hub.",

    ro: "Naas, orașul de reședință al comitatului Kildare, este un important centru urban în plină dezvoltare, având o puternică conexiune istorică cu regalitatea irlandeză timpurie. Situat strategic de-a lungul axelor principale de transport rutier și feroviar spre Dublin, orașul și-a câștigat reputația de pol comercial și rezidențial vital în zona periurbană a capitalei. De secole, Naas este recunoscut și pentru tradiția sa legată de creșterea și cursele de cai de rasă, având o economie profund legată de industria ecvestră. Geografic și economic, dezvoltarea sa oferă un exemplu ideal despre fenomenul de navetism și extindere a metropolelor moderne, subiect important în geografia urbană pentru gimnaziu. Dincolo de modernizarea sa, orașul păstrează elemente arhitecturale clasice, reflectând istoria sa anglo-normandă."
  },
  factsAdvanced: {
      en: [
      "Naas is the largest town in County Kildare, with a population exceeding 21,000.",
      "The name Naas derives from the Irish 'Nás na Ríogh', meaning 'Meeting Place of the Kings'.",
      "The town is a major center for the Irish bloodstock and horse racing industry.",
      "A branch of the Grand Canal was built to connect the town to Dublin in the 18th century."
    ],

    ro: [
      "Numele orașului provine din irlandeza veche 'Nás na Ríogh', care înseamnă 'Locul de întâlnire al regilor'.",
      "Canalul Grand Canal trece prin oraș, fiind utilizat istoric pentru transportul de mărfuri către capitală.",
      "Populația orașului aproape s-a dublat în ultimii 25 de ani din cauza migrației rezidențiale dinspre Dublin.",
      "Naas găzduiește unul dintre cele mai populare hipodromuri din Irlanda, organizând numeroase curse importante."
    ]
  },
    facts: {
      en: ["County town of Kildare.", "Close to Dublin routes.", "Strong retail and service base.", "Linked to horse-country tourism.", "Good for short-break searches."],
      de: ["Bezirkshauptort von Kildare.", "Nahe an Dublin-Routen.", "Starke Basis fuer Handel und Service.", "Mit Pferdeland-Tourismus verbunden.", "Gut fuer Kurzreise-Suchen."],
      hu: ["Kildare megye szekhelye.", "Kozel van a dublini utakhoz.", "Eros kereskedelmi es szolgaltatasi bazis.", "A lovas turizmushoz is kotodik.", "Jó rovid utazas keresesehez."],
      ro: ["Oras de resedinta in Kildare.", "Aproape de rutele spre Dublin.", "Baza puternica in retail si servicii.", "Legat de turismul zonei calaretilor.", "Bun pentru cautari de city break."]
    },
    image: "/geo-images/ireland/naas.webp",
  },
  {
    id: "city-portlaoise",
    type: "city",
    parent: "ireland",
    coords: [-7.3016, 53.0344],
    name: { de: "Portlaoise", hu: "Portlaoise", ro: "Portlaoise", en: "Portlaoise" },
    description: {
      en: "Portlaoise is the county town of Laois. It sits on a key Midlands travel corridor. The town offers rail access, shopping, and easy day-trip planning. Portlaoise is a strong keyword for central Ireland itineraries.",
      de: "Portlaoise ist die Bezirkshauptstadt von Laois. Sie liegt an einem wichtigen Reisekorridor der Midlands. Der Ort bietet Bahnanschluss, Shopping und einfache Tagesausflugsplanung. Portlaoise ist ein starkes Keyword fuer Zentralirland-Routen.",
      hu: "Portlaoise Laois megye szekhelye. Egy fontos midlandszi utazasi folyoson fekszik. A varos vasuti kapcsolatot, vasarlast es konnyu egynapos tervezest ad. Portlaoise eros kulcsszo Kozep-Irorszag utvonalaihoz.",
      ro: "Portlaoise este orasul de resedinta al comitatului Laois. Se afla pe un coridor important de calatorie din Midlands. Orasul ofera acces feroviar, shopping si planificare usoara pentru excursii de o zi. Portlaoise este un cuvant-cheie puternic pentru itinerariile din centrul Irlandei."
    },
  descriptionAdvanced: {
      en: "Portlaoise is the fast-growing county town of Laois, located in the very heart of the Irish midlands. Originally established as a defensive fort named Maryborough during the 16th-century Tudor plantations, it was a pivotal site in early English efforts to colonize Ireland. Due to its central geographic location and intersection of major national road and rail networks, Portlaoise has developed into a critical logistical and administrative hub. It serves as an excellent example of how strategic transport links drive modern urban expansion.",

    ro: "Portlaoise este cel mai mare oraș din comitatul Laois și servește drept punct de legătură crucial în rețeaua rutieră și feroviară a Irlandei, aflându-se chiar în centrul insulei. Inițial un fort militar înființat în secolul al XVI-lea de britanici sub numele de Fortul Maryborough, localitatea s-a dezvoltat treptat într-un hub comercial aglomerat. Datorită poziționării sale centrale excelente, economia orașului se bazează puternic pe logistică, comerț și servicii rutiere. Din perspectiva studiului geografiei umane, Portlaoise este un studiu de caz excelent despre modul în care infrastructura de transport influențează direct expansiunea și profilul economic al așezărilor urbane din zonele de interior. În deceniile recente, orașul a cunoscut o modernizare rapidă, atrăgând o populație tânără și diversificată."
  },
  factsAdvanced: {
      en: [
      "Portlaoise was originally named Maryborough, after Queen Mary I of England.",
      "The town was established as a fort in 1556 during the Plantation of Queen's County.",
      "It is located at the intersection of major national road and rail networks, including the M7 motorway.",
      "The town's population has grown significantly, approaching 25,000 residents."
    ],

    ro: [
      "A fost înființat în 1556 sub domnia reginei Maria I a Angliei pentru a consolida controlul englez asupra regiunii centrale.",
      "Găzduiește singura închisoare de înaltă securitate a statului irlandez.",
      "Aproape toate rutele majore care leagă Dublinul de orașele din sud-vestul țării trec prin Portlaoise sau pe lângă acesta.",
      "Piața veche de legume și vite, deși acum închisă, a fost inima economică tradițională a orașului timp de 300 de ani."
    ]
  },
    facts: {
      en: ["County town of Laois.", "On a Midlands corridor.", "Easy rail and road access.", "Good base for day trips.", "Compact visitor centre."],
      de: ["Bezirkshauptort von Laois.", "An einem Midlands-Korridor.", "Gute Bahn- und Strassenanbindung.", "Praktische Basis fuer Tagesausfluege.", "Kompaktes Besucherzentrum."],
      hu: ["Laois megye szekhelye.", "Midlands folyoson fekszik.", "Jó vasuti es kozuti kapcsolat.", "Jo bazis egynapos kirandulasokhoz.", "Kompakt latogatoi kozpont."],
      ro: ["Oras de resedinta in Laois.", "Pe un coridor din Midlands.", "Acces bun feroviar si rutier.", "Baza buna pentru excursii de o zi.", "Centru compact pentru vizitatori."]
    },
    image: "/geo-images/ireland/portlaoise.webp",
  },
  {
    id: "city-mullingar",
    type: "city",
    parent: "ireland",
    coords: [-7.3355, 53.5245],
    name: { de: "Mullingar", hu: "Mullingar", ro: "Mullingar", en: "Mullingar" },
    description: {
      en: "Mullingar is a lively Midlands town in Westmeath. It works as a base between Dublin and the west of Ireland. The town has strong local commerce and easy access to lakes and countryside. Mullingar is a reliable keyword for central Ireland travel.",
      de: "Mullingar ist eine lebendige Midlands-Stadt in Westmeath. Sie dient als Basis zwischen Dublin und dem Westen Irlands. Der Ort hat starken lokalen Handel und guten Zugang zu Seen und Landschaft. Mullingar ist ein verlaessliches Keyword fuer Zentralirland-Reisen.",
      hu: "Mullingar egy elelénk midlandszi varos Westmeath megyeben. Dublin es Nyugat-Irorszag kozott jo baziskent mukodik. A varos eros helyi kereskedelmet es jo hozzafertest ad tavakhoz es videkhez. Mullingar megbizhato kulcsszo a kozep-irorszagi utazasokhoz.",
      ro: "Mullingar este un oras animat din Midlands, in Westmeath. Functioneaza ca baza intre Dublin si vestul Irlandei. Orasul are comert local puternic si acces usor la lacuri si peisaj rural. Mullingar este un cuvant-cheie sigur pentru calatoriile in centrul Irlandei."
    },
  descriptionAdvanced: {
      en: "Mullingar is the traditional county town of Westmeath, situated in the heart of Ireland's lakeland region. Founded by the Normans in the 12th century, it prospered as an agricultural market town, particularly famous for its beef. The town's geography is defined by its proximity to several large lakes and the Royal Canal, which once served as a vital commercial waterway to Dublin. Today, Mullingar blends its rich musical heritage with modern manufacturing, demonstrating the steady evolution of an inland regional center.",

    ro: "Mullingar, centrul administrativ al comitatului Westmeath, este o localitate pitorească situată în inima peisajului lacustru central al Irlandei (Lakelands). Având rădăcini care coboară până în perioada invaziilor normande din secolul al XII-lea, economia tradițională a zonei a fost dominată de creșterea intensivă a vitelor de carne. Mai mult, prezența canalului Royal și a marilor lacuri din zonă a adus orașului oportunități timpurii pentru comerțul pe apă și ulterior pentru turismul recreativ. Pentru elevi, așezarea demonstrează legătura armonioasă dintre ecosistemul corpurilor de apă dulce (lacurile Ennell, Owel și Derravaragh) și dezvoltarea unei comunități rurale active. Astăzi, Mullingar este, de asemenea, renumit pentru o scenă muzicală vibrantă și pentru catedralele sale impunătoare."
  },
  factsAdvanced: {
      en: [
      "Mullingar is famously situated between three large lakes: Lough Owel, Lough Ennell, and Lough Derravaragh.",
      "The town was a prominent beef trading center for centuries.",
      "The Royal Canal runs directly through the town, originally connecting it to Dublin.",
      "Mullingar is well known as a stronghold for traditional and contemporary Irish music."
    ],

    ro: [
      "Mullingar este considerat centrul național pentru producția tradițională a cărnii de vită premium irlandeză.",
      "Catedrala 'Christ the King' din oraș deține o colecție impresionantă de mozaicuri cu detalii uimitoare realizate de artistul Boris Anrep.",
      "Canalul Royal care leagă Dublinul de râul Shannon străbate nordul orașului, facilitând istoric comerțul barjelor.",
      "Zona din jurul orașului Mullingar inspiră frecvent mitologia irlandeză, inclusiv legendele legate de lacul Derravaragh."
    ]
  },
    facts: {
      en: ["Located in Westmeath.", "Midlands travel base.", "Close to lakes and countryside.", "Useful between Dublin and west.", "Strong central Ireland keyword."],
      de: ["In Westmeath gelegen.", "Basis fuer Midlands-Reisen.", "Nahe an Seen und Landschaft.", "Nuetzlich zwischen Dublin und Westen.", "Starkes Zentralirland-Keyword."],
      hu: ["Westmeathben talalhato.", "Midlands utazasi bazis.", "Kozel a tavakhoz es videkhez.", "Jo Dublin es nyugat kozott.", "Eros kozep-irorszagi kulcsszo."],
      ro: ["Situat in Westmeath.", "Baza de calatorie in Midlands.", "Aproape de lacuri si peisaj rural.", "Util intre Dublin si vest.", "Cuvant-cheie puternic pentru centrul Irlandei."]
    },
    image: "/geo-images/ireland/mullingar.webp",
  },
  {
    id: "city-tullamore",
    type: "city",
    parent: "ireland",
    coords: [-7.4947, 53.2736],
    name: { de: "Tullamore", hu: "Tullamore", ro: "Tullamore", en: "Tullamore" },
    description: {
      en: "Tullamore is the county town of Offaly. It has a clear Midlands identity and a strong link to whiskey history. The town works well for shopping, short stays, and local travel. Tullamore is a useful keyword for central county trips.",
      de: "Tullamore ist die Bezirkshauptstadt von Offaly. Sie hat eine klare Midlands-Identitaet und eine starke Verbindung zur Whiskygeschichte. Der Ort eignet sich gut fuer Shopping, Kurzaufenthalte und lokale Reisen. Tullamore ist ein nuetzliches Keyword fuer Reisen in zentrale Countys.",
      hu: "Tullamore Offaly megye szekhelye. Egyertelmu midlandszi identitasa es eros whiskeytorteneti kapcsolata van. A varos jo vasarlashoz, rovid ottlethez es helyi utazasokhoz. Tullamore hasznos kulcsszo a kozponti megyek utjaihoz.",
      ro: "Tullamore este orasul de resedinta al comitatului Offaly. Are o identitate clara de Midlands si o legatura puternica cu istoria whiskey-ului. Orasul este bun pentru shopping, sejururi scurte si calatorii locale. Tullamore este un cuvant-cheie util pentru excursiile din comitatele centrale."
    },
  descriptionAdvanced: {
      en: "Tullamore is the thriving county town of Offaly, located in the central midlands of Ireland. The town's history and geography are deeply connected to the Grand Canal, which fueled its rapid industrialization in the late 18th and 19th centuries. Tullamore is globally recognized for its whiskey distilling heritage, which began in the 1820s and recently saw a massive revival. The town's surrounding peat bogs also make it a central point for studying traditional Irish fuel harvesting and modern environmental conservation efforts.",

    ro: "Tullamore este centrul administrativ și comercial al comitatului Offaly, renumit la nivel internațional pentru producția tradițională de whiskey irlandez, cu un brand de top care îi poartă numele. Situat strategic pe Canalul Grand Canal, orașul a înflorit în perioada Revoluției Industriale, transformându-se dintr-un mic sat agricol într-un nod activ de comerț și distilerii. Expansiunea istorică a orașului este exemplul perfect pentru a arăta elevilor modul în care rețelele de canale au acționat drept 'autostrăzi' ale secolului al XIX-lea, încurajând exportul rapid de mărfuri manufacturate. Pe lângă moștenirea sa industrială, regiunea găzduiește și mlaștinile întinse din centrul Irlandei (Bog of Allen), un habitat natural unic. Turismul patrimonial bazat pe facilitățile industriale și frumusețea canalelor reprezintă o parte importantă a veniturilor orașului."
  },
  factsAdvanced: {
      en: [
      "Tullamore is the capital of County Offaly, with a population of approximately 15,000.",
      "The famous Tullamore D.E.W. whiskey was originally established in the town in 1829.",
      "A massive hot air balloon crash in 1785 destroyed dozens of houses in the town.",
      "The Grand Canal passes through Tullamore, historically linking it to Dublin's ports."
    ],

    ro: [
      "În 1785, un accident cu balonul cu aer cald a provocat un incendiu masiv care a distrus peste 100 de case în Tullamore.",
      "Distileria Tullamore D.E.W. originală a fost fondată în oraș în anul 1829.",
      "Canalul Grand Canal a ajuns la Tullamore în anul 1798, dublând populația și comerțul orașului în următorul deceniu.",
      "Orașul este dominat la sud de Munții Slieve Bloom, care sunt cunoscuți drept unii dintre cei mai vechi munți din Europa."
    ]
  },
    facts: {
      en: ["County town of Offaly.", "Linked to whiskey history.", "Strong Midlands identity.", "Good for short stays.", "Useful county-trip keyword."],
      de: ["Bezirkshauptort von Offaly.", "Mit Whiskygeschichte verbunden.", "Starke Midlands-Identitaet.", "Gut fuer Kurzaufenthalte.", "Nuetzliches Keyword fuer County-Trips."],
      hu: ["Offaly megye szekhelye.", "A whiskeytortenethez kotodik.", "Eros midlandszi identitas.", "Jo rovid ottlethez.", "Hasznos megyei utazas kulcsszo."],
      ro: ["Oras de resedinta in Offaly.", "Legat de istoria whiskey-ului.", "Identitate puternica de Midlands.", "Bun pentru sejururi scurte.", "Cuvant-cheie util pentru excursii in comitate."]
    },
    image: "/geo-images/ireland/tullamore.webp",
  },
  {
    id: "city-carrick-on-shannon",
    type: "city",
    parent: "ireland",
    coords: [-8.0943, 53.9460],
    name: { de: "Carrick-on-Shannon", hu: "Carrick-on-Shannon", ro: "Carrick-on-Shannon", en: "Carrick-on-Shannon" },
    description: {
      en: "Carrick-on-Shannon is a compact county town in Leitrim. It sits on the River Shannon and has a strong boating feel. The town is useful for short breaks and west of Ireland routes. Carrick-on-Shannon is a strong keyword for river travel.",
      de: "Carrick-on-Shannon ist eine kompakte Bezirkshauptstadt in Leitrim. Sie liegt an der Shannon und hat einen starken Bootscharakter. Der Ort ist nuetzlich fuer Kurzurlaube und Routen im Westen Irlands. Carrick-on-Shannon ist ein starkes Keyword fuer Flussreisen.",
      hu: "Carrick-on-Shannon egy kompakt megyekozpont Leitrimben. A Shannon partjan fekszik, es eros hajos hangulata van. A varos hasznos rovid pihenésekhez es nyugat-irorszagi utvonalakhoz. Carrick-on-Shannon eros kulcsszo a folyami utazasokhoz.",
      ro: "Carrick-on-Shannon este un oras de resedinta compact in Leitrim. Se afla pe raul Shannon si are o atmosfera puternica de navigatie. Orasul este util pentru escapade scurte si rute spre vestul Irlandei. Carrick-on-Shannon este un cuvant-cheie puternic pentru calatoriile pe rau."
    },
  descriptionAdvanced: {
      en: "Carrick-on-Shannon is the vibrant county town of Leitrim, strategically positioned at a major crossing point of the River Shannon. Despite being one of Ireland's smallest county towns, it holds immense importance as the epicenter of inland waterway tourism. Its large marina serves as the primary base for pleasure cruisers navigating the vast Shannon-Erne Waterway system. The town's geography illustrates how a historical river fort can successfully pivot its economy to capitalize on recreational boating and eco-tourism.",

    ro: "Carrick-on-Shannon, pitorescul centru administrativ al comitatului Leitrim, deține un rol dominant ca principala capitală națională de navigație și turism de agrement pe apele interioare. Așezat pe malurile faimosului râu Shannon, cel mai lung râu din Irlanda, orașul se bucură de porturi naturale și peisaje riverane deosebite, facilitând accesul către lacurile extinse din jur. Din punct de vedere geografic și economic, este esențial pentru înțelegerea valorificării resurselor de apă curgătoare ca o rețea majoră de agrement, transport și susținere a turismului ecologic regional. Infrastructura turistică modernă include porturi de agrement aglomerate cu zeci de ambarcațiuni de croazieră care aduc viață și dinamism comercial pe tot parcursul verii. Orașul se remarcă printr-o atmosferă primitoare, conservând arhitectura tradițională a vechilor străduțe cu prăvălii irlandeze."
  },
  factsAdvanced: {
      en: [
      "Carrick-on-Shannon is the smallest county town in Ireland, with a population of around 4,000.",
      "It is widely considered the cruising capital of Ireland's inland waterways.",
      "The town features a large, modern marina on the River Shannon.",
      "It is the gateway to the Shannon-Erne Waterway, a 63-kilometer restored canal system."
    ],

    ro: [
      "Carrick-on-Shannon a primit statutul de oraș de la regele Iacob I în anul 1613, devenind o fortăreață importantă.",
      "Este cel mai mic oraș-reședință de comitat din întreaga țară ca număr de locuitori.",
      "Orașul are un port de agrement uriaș capabil să găzduiască sute de bărci cu motor și croaziere fluviale de vacanță.",
      "Podul antic din piatră al orașului a fost mult timp unul dintre puținele puncte de trecere sigure peste secțiunea superioară a râului Shannon."
    ]
  },
    facts: {
      en: ["County town of Leitrim.", "On the River Shannon.", "Popular for boating breaks.", "Compact and easy to visit.", "Good west Ireland base."],
      de: ["Bezirkshauptort von Leitrim.", "An der Shannon gelegen.", "Beliebt fuer Boots-Kurzurlaube.", "Kompakt und leicht zu besuchen.", "Gute Basis fuer den Westen."],
      hu: ["Leitrim megye szekhelye.", "A Shannon partjan van.", "Népszeru hajos pihenésekhez.", "Kicsi es konnyen bejarhato.", "Jo bazis a nyugat fele."],
      ro: ["Oras de resedinta in Leitrim.", "Pe raul Shannon.", "Popular pentru escapade cu barca.", "Compact si usor de vizitat.", "Baza buna pentru vestul Irlandei."]
    },
    image: "/geo-images/ireland/carrick-on-shannon.webp",
  },
  {
    id: "city-cavan",
    type: "city",
    parent: "ireland",
    coords: [-7.3613, 53.9908],
    name: { de: "Cavan", hu: "Cavan", ro: "Cavan", en: "Cavan" },
    description: {
      en: "Cavan is the county town of Cavan. It is a practical gateway to the lakeland north midlands. The town is useful for border-region travel and local services. Cavan is a reliable keyword for inland Ireland trips.",
      de: "Cavan ist die Bezirkshauptstadt von Cavan. Sie ist ein praktisches Tor zu den Seenlandschaften der nördlichen Midlands. Der Ort ist nuetzlich fuer Grenzregion-Reisen und lokale Dienste. Cavan ist ein verlaessliches Keyword fuer Reisen ins irische Binnenland.",
      hu: "Cavan Cavan megye szekhelye. Gyakorlati kapu az eszaki midlandszi tavak vilagahoz. A varos jo hatarvideki utazasokhoz es helyi szolgaltatasokhoz. Cavan megbizhato kulcsszo az irorszagi belso utazasokhoz.",
      ro: "Cavan este orasul de resedinta al comitatului Cavan. Este o poarta practica spre zona lacurilor din nordul Midlands. Orasul este util pentru calatorii in zona de granita si pentru servicii locale. Cavan este un cuvant-cheie sigur pentru excursiile in interiorul Irlandei."
    },
  descriptionAdvanced: {
      en: "Cavan town is the commercial and administrative center of County Cavan, located in the northern midlands near the border with Northern Ireland. Established by the indigenous O'Reilly chieftains in the medieval period, it is unique as one of the few Irish towns not founded by Viking or Norman settlers. The surrounding landscape is characterized by a dense network of 'drumlins' (small glacial hills) and hundreds of small lakes. Cavan serves as a crucial geographical study of border economics and distinctive post-glacial terrain.",

    ro: "Orașul Cavan, situat în zona de nord-centru a Irlandei, servește ca centru comercial esențial pentru un peisaj definit de drumlinuri (dealuri glaciare) și un mozaic complex de sute de lacuri mici. Istoria așezării este strâns legată de clanul O'Reilly din Evul Mediu, care a dominat și a conturat organizarea locală. Pentru elevii de gimnaziu, regiunea din jurul orașului Cavan este o veritabilă lecție practică de geologie glaciară, reliefând felul în care ultima eră glaciară a sculptat și segmentat relieful, creând habitate unice. Astăzi, orașul îmbină liniștea tradițională a unei așezări rurale izolate cu o economie bazată pe meșteșuguri locale și o infrastructură turistică în creștere, atrăgând pasionații de natură și pescuit din toată Europa. De asemenea, orașul găzduiește structuri frumoase, printre care și catedrala în stil neoclasic inaugurată în secolul trecut."
  },
  factsAdvanced: {
      en: [
      "Cavan town was uniquely founded by the native Irish O'Reilly clan in the late 13th century.",
      "The surrounding county is often referred to as 'The Lakeland County', reputed to have 365 lakes.",
      "The geography is heavily characterized by a 'basket of eggs' topography of glacial drumlins.",
      "It is a significant border town, historically impacted by the division of the island."
    ],

    ro: [
      "Topografia unică a comitatului este adesea descrisă ca având 'un lac pentru fiecare zi a anului' (peste 365 de lacuri).",
      "Catedrala St. Patrick și St. Felim a fost terminată în 1942 și are un turn grandios cu o înălțime de peste 68 de metri.",
      "Teritoriul muntos, denivelat și împădurit din jurul orașului a protejat comunitățile locale de invaziile anglo-normande mult mai mult decât în restul insulei.",
      "Cavan are o tradiție unică de prelucrare manuală a dantelei, meșteșug păstrat și promovat de-a lungul generațiilor."
    ]
  },
    facts: {
      en: ["County town of Cavan.", "Gateway to lakeland routes.", "Useful near the border region.", "Local services hub.", "Good inland travel keyword."],
      de: ["Bezirkshauptort von Cavan.", "Tor zu Seenrouten.", "Nuetzlich nahe der Grenzregion.", "Zentrum fuer lokale Dienste.", "Gutes Binnenreise-Keyword."],
      hu: ["Cavan megye szekhelye.", "Kaput ad a tavak utvonalaihoz.", "Hasznos a hatarvidek kozeleben.", "Helyi szolgaltatasi kozpont.", "Jó belso utazasi kulcsszo."],
      ro: ["Oras de resedinta in Cavan.", "Poarta spre rutele cu lacuri.", "Util aproape de zona de granita.", "Centru local de servicii.", "Cuvant-cheie bun pentru calatorii interne."]
    },
    image: "/geo-images/ireland/cavan.webp",
  },
  {
    id: "city-monaghan",
    type: "city",
    parent: "ireland",
    coords: [-6.9663, 54.2490],
    name: { de: "Monaghan", hu: "Monaghan", ro: "Monaghan", en: "Monaghan" },
    description: {
      en: "Monaghan is the county town of Monaghan. It has a compact centre and a strong border-area role. The town is useful for short stays and cross-border travel. Monaghan fits small-town Ireland content well.",
      de: "Monaghan ist die Bezirkshauptstadt von Monaghan. Sie hat ein kompaktes Zentrum und eine starke Rolle im Grenzgebiet. Der Ort ist nuetzlich fuer Kurzaufenthalte und grenzueberschreitende Reisen. Monaghan passt gut zu Inhalten ueber das kleine irische Stadtleben.",
      hu: "Monaghan Monaghan megye szekhelye. Kompakt varoskozpontja es eros hatarvideki szerepe van. A varos hasznos rovid ottletekhez es hataron atnyulo utazasokhoz. Monaghan jol illik a kisméretu irorszagi varosi tartalmakhoz.",
      ro: "Monaghan este orasul de resedinta al comitatului Monaghan. Are un centru compact si un rol puternic in zona de granita. Orasul este util pentru sejururi scurte si calatorii transfrontaliere. Monaghan se potriveste bine continutului despre orasele mici din Irlanda."
    },
  descriptionAdvanced: {
      en: "Monaghan is a prominent town in the province of Ulster, located just south of the border with Northern Ireland. Originally a minor settlement, it expanded rapidly in the 17th century around its central 'Diamond' square. The town was a major hub for the linen industry, which profoundly shaped its economic and architectural development. Due to its proximity to the border, Monaghan's history reflects the complexities of partition and cross-border trade, making it a vital study in modern Irish political geography.",

    ro: "Monaghan este un oraș istoric situat în partea de nord a Republicii Irlanda, recunoscut pentru arhitectura sa de tip georgian și victorian. Așezarea s-a dezvoltat inițial în jurul unei mănăstiri fondate în secolul al VI-lea, devenind ulterior un centru important pentru prelucrarea inului. În prezent, orașul găzduiește Muzeul Județean Monaghan, care expune artefacte valoroase, inclusiv Crucea Clogher, datând din secolul al XIV-lea. Geografia regiunii, caracterizată prin dealuri joase și lacuri numeroase, este reprezentativă pentru peisajul glaciar al provinciei Ulster. Studiul dezvoltării sale industriale și arhitecturale oferă elevilor un model excelent pentru înțelegerea modului în care resursele naturale influențează creșterea urbană."
  },
  factsAdvanced: {
      en: [
      "Monaghan town's architecture features a distinctive central square known as 'The Diamond'.",
      "It was heavily involved in the lucrative Irish linen trade during the 18th and 19th centuries.",
      "The town suffered tragic bombings in 1974 during the period of conflict known as the Troubles.",
      "It serves as a major agricultural and administrative hub for the border region."
    ],

    ro: [
      "Populația orașului Monaghan a fost înregistrată la aproximativ 7.600 de locuitori în recensământul din 2016.",
      "Muzeul Județean Monaghan, înființat în 1974, a fost primul muzeu local din Irlanda care a primit premiul Consiliului Europei în 1980.",
      "Clădirea pieței centrale, Market House, a fost construită în 1792 și servește astăzi ca galerie de artă."
    ]
  },
    facts: {
      en: ["County town of Monaghan.", "Strong border-area base.", "Compact and walkable centre.", "Good for short stays.", "Useful cross-border keyword."],
      de: ["Bezirkshauptort von Monaghan.", "Starke Basis im Grenzgebiet.", "Kompaktes, gut begehbares Zentrum.", "Gut fuer Kurzaufenthalte.", "Nuetzliches Grenzreise-Keyword."],
      hu: ["Monaghan megye szekhelye.", "Eros bazis a hatarvideken.", "Kompakt es setalhato kozpont.", "Jo rovid ottlethez.", "Hasznos hataron atnyulo kulcsszo."],
      ro: ["Oras de resedinta in Monaghan.", "Baza puternica in zona de granita.", "Centru compact si usor de parcurs.", "Bun pentru sejururi scurte.", "Cuvant-cheie util pentru calatorii transfrontaliere."]
    },
    image: "/geo-images/ireland/monaghan.webp",
  },
  {
    id: "city-letterkenny",
    type: "city",
    parent: "ireland",
    coords: [-7.7409, 54.9503],
    name: { de: "Letterkenny", hu: "Letterkenny", ro: "Letterkenny", en: "Letterkenny" },
    description: {
      en: "Letterkenny is the largest town in Donegal. It works as a northwest hub for shopping and travel. The town is a strong base for coast, mountain, and border routes. Letterkenny is a high-value keyword for Donegal trips.",
      de: "Letterkenny ist die groesste Stadt in Donegal. Sie dient als Nordwest-Knotenpunkt fuer Shopping und Reisen. Der Ort ist eine starke Basis fuer Kueste, Berge und Grenzrouten. Letterkenny ist ein wertvolles Keyword fuer Donegal-Reisen.",
      hu: "Letterkenny Donegal legnagyobb varosa. Eszaknyugati kozpontkent mukodik vasarlasra es utazasra. A varos jo bazis part, hegyek es hatarutvonalak fele. Letterkenny nagy erteku kulcsszo a Donegal utazasokhoz.",
      ro: "Letterkenny este cel mai mare oras din Donegal. Functioneaza ca hub pentru nord-vest in shopping si calatorie. Orasul este o baza puternica pentru rute de coasta, munte si granita. Letterkenny este un cuvant-cheie valoros pentru excursiile in Donegal."
    },
  descriptionAdvanced: {
      en: "Letterkenny is the largest and most populous town in County Donegal, located in the remote northwest of Ireland. Originally a market town situated at the deep inlet of Lough Swilly, it grew rapidly to become the commercial powerhouse of the county. The town serves as a crucial urban anchor for a predominantly rural, rugged region heavily influenced by the Atlantic Ocean. Letterkenny's robust technology and education sectors demonstrate how peripheral towns can build strong, localized economies despite their distance from the capital.",

    ro: "Letterkenny este cel mai mare oraș și centrul economic al comitatului Donegal, fiind așezat strategic pe cursul râului Swilly. Inițial un simplu târg agricol fondat în secolul al XVII-lea pe un domeniu rural, orașul a cunoscut o expansiune rapidă datorită dezvoltării rețelelor de transport. Catedrala Saint Eunan, finalizată în 1901 în stil neogotic, domină orizontul localității și este construită din gresie extrasă din munții Mountcharles. Din punct de vedere geografic, orașul marchează poarta de intrare către regiunile montane din nord-vestul Irlandei. Pentru programa școlară, evoluția așezării exemplifică tranziția de la o economie preponderent agrară la una bazată pe servicii și tehnologie modernă."
  },
  factsAdvanced: {
      en: [
      "Letterkenny is the largest town in County Donegal, with a population of nearly 20,000.",
      "The striking St. Eunan's Cathedral dominates the town's skyline with its towering spire.",
      "It is a major employment center for the North West region, housing several multinational tech firms.",
      "The town is situated on the River Swilly, close to where it widens into Lough Swilly."
    ],

    ro: [
      "Catedrala Saint Eunan a fost sfințită pe 16 iunie 1901 și dispune de un turn cu o înălțime de peste 70 de metri.",
      "Orașul are cea mai lungă stradă principală continuă din Irlanda, cu o lungime de aproximativ 1,6 kilometri.",
      "Institutul de Tehnologie din Letterkenny a atras investiții majore în tehnologia informației, transformând profilul economic regional."
    ]
  },
    facts: {
      en: ["Largest town in Donegal.", "Northwest travel hub.", "Good base for road trips.", "Close to coast and mountains.", "Strong Donegal keyword."],
      de: ["Groesste Stadt in Donegal.", "Nordwestlicher Reiseknotenpunkt.", "Gute Basis fuer Roadtrips.", "Nahe an Kueste und Bergen.", "Starkes Donegal-Keyword."],
      hu: ["Donegal legnagyobb varosa.", "Eszaknyugati utazasi kozpont.", "Jo bazis autos utakhoz.", "Kozel a parthoz es hegyekhez.", "Eros Donegal kulcsszo."],
      ro: ["Cel mai mare oras din Donegal.", "Hub de calatorie pentru nord-vest.", "Baza buna pentru drumuri lungi.", "Aproape de coasta si munti.", "Cuvant-cheie puternic pentru Donegal."]
    },
    image: "/geo-images/ireland/letterkenny.webp",
  },
  {
    id: "city-killarney",
    type: "city",
    parent: "ireland",
    coords: [-9.5086, 52.0591],
    name: { de: "Killarney", hu: "Killarney", ro: "Killarney", en: "Killarney" },
    description: {
      en: "Killarney is one of Ireland's best-known visitor towns. It sits beside lakes and mountains in Kerry. The town has a strong hotel and tour economy. Killarney is a top keyword for scenic Ireland content.",
      de: "Killarney ist eine der bekanntesten Besucherstaedte Irlands. Sie liegt in Kerry neben Seen und Bergen. Der Ort hat eine starke Hotel- und Tourenwirtschaft. Killarney ist ein Top-Keyword fuer landschaftliche Irland-Inhalte.",
      hu: "Killarney Irorszag egyik legismertebb turisztikai varosa. Kerry megyeben tavak es hegyek mellett fekszik. A varosnak eros hotel- es turíras gazdasaga van. Killarney elso osztalyu kulcsszo a festoi irorszagi tartalmakhoz.",
      ro: "Killarney este unul dintre cele mai cunoscute orase turistice ale Irlandei. Se afla langa lacuri si munti in Kerry. Orasul are o economie solida de hoteluri si tururi. Killarney este un cuvant-cheie de top pentru continutul scenic despre Irlanda."
    },
  descriptionAdvanced: {
      en: "Killarney is a bustling town in County Kerry, internationally famous as the gateway to the stunning Killarney National Park. Nestled at the foot of the MacGillycuddy's Reeks mountain range and bordered by three majestic lakes, the town's geography is arguably the most picturesque in Ireland. Killarney has a long history as a tourist destination, dating back to a visit by Queen Victoria in 1861. It is a premier case study in how a town successfully manages a heavy, year-round influx of global eco-tourism.",

    ro: "Killarney este un centru urban situat în comitatul Kerry, la marginea Parcului Național Killarney, care include renumitele lacuri glaciare omonime. Orașul a jucat un rol central în istoria ecleziastică a regiunii, ruinele abației franciscane din secolul al XV-lea fiind o dovadă a importanței sale religioase timpurii. Din secolul al XVIII-lea, localitatea a devenit o destinație turistică de pionierat, atrăgând vizitatori datorită peisajelor sale spectaculoase și a biodiversității unice. Turismul a modelat profund arhitectura și infrastructura locală, păstrând în același timp integritatea cadrului natural protejat. Elevii pot studia acest oraș pentru a analiza impactul pe termen lung al turismului asupra conservării mediului înconjurător și dezvoltării sustenabile."
  },
  factsAdvanced: {
      en: [
      "Killarney is adjacent to Ireland's oldest national park, covering over 10,000 hectares.",
      "Queen Victoria's visit to the town in 1861 sparked a massive boom in international tourism.",
      "The town features the historic Ross Castle and Muckross House on the shores of its lakes.",
      "Despite a small permanent population of about 14,000, it has the highest concentration of hotel beds in Ireland after Dublin."
    ],

    ro: [
      "Parcul Național Killarney, adiacent orașului, a fost primul parc național din Irlanda, înființat în 1932 pe o suprafață de peste 10.000 de hectare.",
      "Abația Muckross, situată în apropiere, a fost fondată în anul 1448 și prezintă o structură bine conservată în jurul unui arbore de tisă multisecular.",
      "Populația locală se triplează în timpul lunilor de vară, orașul dispunând de a doua cea mai mare capacitate de cazare hotelieră din țară după Dublin."
    ]
  },
    facts: {
      en: ["Major Kerry visitor town.", "Near lakes and mountains.", "Strong hotel and tour base.", "Popular for day-trip planning.", "Top scenic travel keyword."],
      de: ["Wichtige Besucherstadt in Kerry.", "Nahe an Seen und Bergen.", "Starke Hotel- und Tourbasis.", "Beliebt fuer Tagesausfluege.", "Top-Keyword fuer Landschaftsreisen."],
      hu: ["Fontos Kerry turisztikai varos.", "Tavakhoz es hegyekhez kozel.", "Eros hotel- es turíras bazis.", "Népszeru egynapos tervezeshez.", "Elso osztalyu festoi kulcsszo."],
      ro: ["Oras turistic major in Kerry.", "Aproape de lacuri si munti.", "Baza puternica de hoteluri si tururi.", "Popular pentru excursii de o zi.", "Cuvant-cheie de top pentru peisaje."]
    },
    image: "/geo-images/ireland/killarney.webp",
  },
  {
    id: "city-clonmel",
    type: "city",
    parent: "ireland",
    coords: [-7.7039, 52.3550],
    name: { de: "Clonmel", hu: "Clonmel", ro: "Clonmel", en: "Clonmel" },
    description: {
      en: "Clonmel is a busy south Tipperary town. It has a strong commercial core and a river setting. The town is a practical base for the Suir valley. Clonmel is a useful keyword for southeast Ireland travel.",
      de: "Clonmel ist eine lebendige Stadt im Sueden von Tipperary. Sie hat einen starken Geschaeftskern und eine Flusslage. Der Ort ist eine praktische Basis fuer das Suir-Tal. Clonmel ist ein nuetzliches Keyword fuer Reisen im Suedosten Irlands.",
      hu: "Clonmel egy nyuzsgo deli Tipperary-i varos. Eros kereskedelmi kozpontja es folyoparti fekvesse van. A varos praktikus bazis a Suir-völgy felfedezesere. Clonmel hasznos kulcsszo a delkelet-irorszagi utazasokhoz.",
      ro: "Clonmel este un oras agitat din sudul Tipperary. Are un centru comercial puternic si o pozitie pe rau. Orasul este o baza practica pentru valea Suir. Clonmel este un cuvant-cheie util pentru calatoriile din sud-estul Irlandei."
    },
  descriptionAdvanced: {
      en: "Clonmel is the vibrant county town of South Tipperary, situated in a fertile valley along the River Suir. The town has a rich medieval history, retaining significant portions of its original defensive walls, which famously withstood a siege by Oliver Cromwell's army in 1650. Clonmel developed into a highly prosperous agricultural and industrial center, driven by milling and brewing. Today, its economy is bolstered by modern healthcare and pharmaceutical manufacturing, showing a seamless transition from a walled medieval fort to a modern industrial base.",

    ro: "Clonmel, situat în comitatul Tipperary pe malurile râului Suir, este un oraș cu o puternică moștenire medievală și industrială. Zidurile așezării au rezistat notabil asediului lui Oliver Cromwell din 1650, demonstrând importanța sa strategică în apărarea regiunii Munster. În secolul al XIX-lea, localitatea a devenit un nod comercial și industrial major, susținut de morile de cereale și de fondarea primei companii de transport public din Irlanda, condusă de Charles Bianconi. Geografia văii râului Suir a facilitat atât agricultura intensivă, cât și transportul mărfurilor către porturile de coastă. Din perspectivă educațională, Clonmel ilustrează perfect relația dintre geografia fluvială, apărarea militară și inovația în transporturi."
  },
  factsAdvanced: {
      en: [
      "Clonmel translates from Irish as 'Cluain Meala', meaning 'meadow of honey'.",
      "The town successfully fiercely resisted Oliver Cromwell's New Model Army in a massive siege in 1650.",
      "It is the largest town in County Tipperary, with a population of roughly 17,000.",
      "The town is historically noted as the birthplace of the commercial Irish cider industry."
    ],

    ro: [
      "Asediul de la Clonmel din primăvara anului 1650 i-a provocat armatei lui Oliver Cromwell cele mai mari pierderi din întreaga sa campanie irlandeză.",
      "Charles Bianconi a lansat primul serviciu de trăsuri regulate pentru pasageri din Clonmel în anul 1815, revoluționând transportul public național.",
      "Orașul este recunoscut pentru producția de cidru, fabrica Bulmers (Magners) având sediul aici încă din anul 1935."
    ]
  },
    facts: {
      en: ["Important town in South Tipperary.", "Set in the Suir valley.", "Commercial and food-focused base.", "Good for southeast routes.", "Near several historic stops."],
      de: ["Wichtige Stadt in Sued-Tipperary.", "In der Suir-Tal-Lage.", "Kommmerzieller und foodie-freundlicher Ort.", "Gut fuer Routen im Suedosten.", "Nahe bei mehreren historischen Zielen."],
      hu: ["Fontos varos South Tipperaryben.", "A Suir-völgyben fekszik.", "Kereskedelmi es gasztronomiai kozpont.", "Jo delkelet-irorszagi utvonalakhoz.", "Tobble tortenelmi hely kozeleben van."],
      ro: ["Oras important in South Tipperary.", "Situat in valea Suir.", "Baza comerciala si culinara.", "Bun pentru rute in sud-est.", "Aproape de mai multe situri istorice."]
    },
    image: "/geo-images/ireland/clonmel.webp",
  },
  {
    id: "city-dungarvan",
    type: "city",
    parent: "ireland",
    coords: [-7.6253, 52.0917],
    name: { de: "Dungarvan", hu: "Dungarvan", ro: "Dungarvan", en: "Dungarvan" },
    description: {
      en: "Dungarvan is a coastal town in Waterford. It has a strong harbour feel and a lively food scene. The town is a gateway to the Waterford Greenway and west Waterford coast. Dungarvan is a strong keyword for the southeast coast.",
      de: "Dungarvan ist eine Kuestenstadt in Waterford. Sie hat starken Hafencharakter und eine lebendige Food-Szene. Der Ort ist ein Tor zum Waterford Greenway und zur West-Waterford-Kueste. Dungarvan ist ein starkes Keyword fuer die Suedostkueste.",
      hu: "Dungarvan egy tengerparti varos Waterford megyeben. Erős kikotohangulata es elelénk gasztronomiai elet van. A varos kapu a Waterford Greenway es Nyugat-Waterford partja fele. Dungarvan eros kulcsszo a delkeleti part menten.",
      ro: "Dungarvan este un oras de coasta in Waterford. Are atmosfera de port si o scena gastronomica vie. Orasul este o poarta spre Waterford Greenway si coasta de vest a Waterfordului. Dungarvan este un cuvant-cheie puternic pentru coasta de sud-est."
    },
  descriptionAdvanced: {
      en: "Dungarvan is a picturesque coastal town and harbor in County Waterford, located at the mouth of the Colligan River. Historically an important fishing and administrative center, the town centers around the impressive 12th-century King John's Castle. In recent years, Dungarvan has undergone a major revitalization, primarily due to the creation of the Waterford Greenway, a spectacular cycling path built along an old railway line. It offers students an inspiring example of how repurposing obsolete infrastructure can rejuvenate coastal towns.",

    ro: "Dungarvan este un oraș portuar și centrul administrativ al comitatului Waterford, situat la gura de vărsare a râului Colligan. Așezarea a fost fortificată de normanzi în secolul al XII-lea, Castelul Dungarvan fiind construit sub domnia regelui Ioan pentru a controla accesul naval și rute comerciale din sudul Irlandei. Planul urbanistic central se distinge prin piața principală spațioasă, concepută în secolul al XIX-lea la inițiativa ducelui de Devonshire. Poziția sa de coastă a dictat o economie bazată inițial pe pescuit și comerț maritim, iar mai recent pe turism și industria alimentară. Elevii din ciclul gimnazial pot explora acest oraș pentru a înțelege evoluția planificării urbane și importanța estuarelor în dezvoltarea așezărilor umane."
  },
  factsAdvanced: {
      en: [
      "Dungarvan features a large, sheltered harbor that has supported fishing for centuries.",
      "King John's Castle, built in 1185, dominates the town's waterfront.",
      "It is the starting point of the highly successful 46-kilometer Waterford Greenway.",
      "The town is an administrative center for the Irish-speaking Gaeltacht region of An Rinn."
    ],

    ro: [
      "Castelul Dungarvan prezintă un donjon poligonal neobișnuit, fiind una dintre puținele fortărețe regale normande din regiune cu această formă.",
      "Traseul de ciclism Waterford Greenway, lung de 46 de kilometri, urmează fosta linie de cale ferată și se termină în centrul orașului Dungarvan.",
      "Piața Grattan, nucleul orașului modern, a fost sistematizată între anii 1801 și 1826 de către arhitecții angajați de familia Cavendish."
    ]
  },
    facts: {
      en: ["Coastal town in Waterford.", "Gateway to the Greenway.", "Strong seafood appeal.", "Has a harbour atmosphere.", "Good southeast coast keyword."],
      de: ["Kuestenstadt in Waterford.", "Tor zum Greenway.", "Stark fuer Seafood-Reiz.", "Mit Hafenatmosphaere.", "Gutes Keyword fuer die Suedostkueste."],
      hu: ["Waterfordi tengerparti varos.", "Kaput ad a Greenway-hez.", "Eros tengeri eteles vonzerő.", "Jellegzetes kikotohangulata van.", "Jó delkeleti parti kulcsszo."],
      ro: ["Oras de coasta in Waterford.", "Poarta spre Greenway.", "Atractiv pentru fructe de mare.", "Are atmosfera de port.", "Cuvant-cheie bun pentru coasta de sud-est."]
    },
    image: "/geo-images/ireland/dungarvan.webp",
  },
  {
    id: "city-mallow",
    type: "city",
    parent: "ireland",
    coords: [-8.6437, 52.1338],
    name: { de: "Mallow", hu: "Mallow", ro: "Mallow", en: "Mallow" },
    description: {
      en: "Mallow is a County Cork town with a convenient road and rail position. It is a common base for north Cork and the Blackwater valley. The town mixes services, shopping, and rural access. Mallow is a solid keyword for inland Cork travel.",
      de: "Mallow ist eine Stadt im County Cork mit guenstiger Strassen- und Bahnlage. Sie ist eine haeufige Basis fuer Nord-Cork und das Blackwater-Tal. Der Ort verbindet Dienstleistungen, Shopping und Zugang zur laendlichen Landschaft. Mallow ist ein solides Keyword fuer Reisen ins Innere von Cork.",
      hu: "Mallow Cork megye varosa, kedvezo kozuti es vasuti helyzettel. Gyakori bazis Eszak-Cork es a Blackwater-völgy felfedezesere. A varos a szolgaltatasokat, a vasarlast es a videki hozzaferest kapcsolja ossze. Mallow eros kulcsszo Cork belso utazasaiban.",
      ro: "Mallow este un oras din County Cork, cu o pozitie convenabila rutiera si feroviara. Este o baza frecventa pentru nordul Cork si valea Blackwater. Orasul combina servicii, shopping si acces la zona rurala. Mallow este un cuvant-cheie solid pentru calatoriile in interiorul lui Cork."
    },
  descriptionAdvanced: {
      en: "Mallow is a bustling town in north County Cork, historically situated at an essential crossing point of the River Blackwater. Known as the 'Crossroads of Munster', its central geography made it a critical junction for both road and railway networks traversing the south of Ireland. In the 18th century, Mallow gained fame as a spa resort due to its warm mineral springs, attracting the aristocracy. Today, it stands as a strong agricultural and commuter town, illustrating the economic benefits of strategic transport connectivity.",

    ro: "Mallow este o localitate istorică din comitatul Cork, așezată în valea fertilă a râului Blackwater, cunoscută adesea drept Răscrucea provinciei Munster. În secolele XVIII și XIX, orașul a câștigat o faimă considerabilă ca stațiune balneară, atrăgând aristocrația britanică și irlandeză datorită apelor sale considerate curative. Structura urbană este dominată de ruinele Castelului Mallow, o fortăreață din secolul al XVI-lea, și de domeniile conacelor construite în perioada de prosperitate balneară. Infrastructura feroviară timpurie a consolidat statutul orașului de punct central pentru comerțul agricol regional. Studiul dezvoltării sale oferă elevilor un exemplu clar despre cum o resursă naturală specifică, precum izvoarele termale, poate transforma radical economia unei comunități locale."
  },
  factsAdvanced: {
      en: [
      "Mallow is historically known as the 'Crossroads of Munster' due to its central location.",
      "The town briefly became a famous spa destination in the 18th century due to its warm springs.",
      "Mallow Castle, a large ruined 16th-century fortified house, sits on the banks of the River Blackwater.",
      "It remains a crucial railway junction connecting Cork, Dublin, and Tralee."
    ],

    ro: [
      "Castelul Mallow, finalizat în anul 1585 de Sir Thomas Norreys, a fost menținut de descendenții săi până în secolul al XX-lea, când a intrat în proprietatea statului.",
      "Spa-ul din Mallow a atins apogeul popularității sale în jurul anului 1730, fiind menționat frecvent în baladele tradiționale irlandeze.",
      "Orașul este recunoscut pentru viaductul său feroviar impresionant, cunoscut local drept podul cu zece arce, o realizare inginerească semnificativă a secolului al XIX-lea."
    ]
  },
    facts: {
      en: ["County Cork town.", "Useful rail and road stop.", "Base for north Cork trips.", "Close to Blackwater valley.", "Good inland Cork keyword."],
      de: ["Stadt im County Cork.", "Wichtiger Bahn- und Strassenhalt.", "Basis fuer Nord-Cork-Touren.", "Nahe am Blackwater-Tal.", "Gutes Inland-Cork-Keyword."],
      hu: ["Cork megyei varos.", "Fontos vasuti es kozuti megallo.", "Bazis eszak-corki kirandulasokhoz.", "Kozel a Blackwater-völgyhoz.", "Jo belso Cork kulcsszo."],
      ro: ["Oras din County Cork.", "Popas bun feroviar si rutier.", "Baza pentru excursii in nordul Cork.", "Aproape de valea Blackwater.", "Cuvant-cheie bun pentru Cork interior."]
    },
    image: "/geo-images/ireland/mallow.webp",
  },
  {
    id: "city-wicklow",
    type: "city",
    parent: "ireland",
    coords: [-6.0427, 52.9808],
    name: { de: "Wicklow", hu: "Wicklow", ro: "Wicklow", en: "Wicklow" },
    description: {
      en: "Wicklow is a coastal county town with easy access to the mountains and the east coast. It works well as a base for scenic drives, harbour visits, and garden tourism. The town is compact but strongly tied to the Garden County image. Wicklow is a useful keyword for southeast coastal searches.",
      de: "Wicklow ist eine Kuesten-Bezirkshauptstadt mit einfachem Zugang zu Bergen und Ostkueste. Sie eignet sich gut als Basis fuer Panoramafahrten, Hafenbesuche und Gartentourismus. Der Ort ist kompakt, aber eng mit dem Image des Garden County verbunden. Wicklow ist ein nuetzliches Keyword fuer Suchanfragen an der suedostlichen Kueste.",
      hu: "Wicklow egy tengerparti megyekozpont, amelyhez konnyu hozzaferes van a hegyekhez es a keleti parthoz. Jo bazis festoi autozasokhoz, kikotolatasokhoz es kertturizmushoz. A varos kompakt, de eros kapcsolatban all a Garden County kepevel. Wicklow hasznos kulcsszo a delkeleti parti kereseseiben.",
      ro: "Wicklow este un oras de resedinta de coasta, cu acces usor la munti si la coasta de est. Functioneaza bine ca baza pentru drumuri pitoresti, vizite in port si turism de gradini. Orasul este compact, dar foarte legat de imaginea Garden County. Wicklow este un cuvant-cheie util pentru cautarile de pe coasta de sud-est."
    },
  descriptionAdvanced: {
      en: "Wicklow is a charming coastal town and the county town of County Wicklow, located just south of Dublin. Founded by the Vikings in the 8th century, its name derives from 'Vikingaloo', meaning 'Viking's Meadow'. The town is famously associated with the brutal historic prison, Wicklow Gaol, which held rebels from the 1798 rebellion. Set against the backdrop of the rugged Wicklow Mountains and a sweeping coastline, the town provides a fascinating study of Viking coastal settlement patterns and subsequent British penal history.",

    ro: "Wicklow este capitala administrativă a comitatului omonim, situată pe coasta de est a Irlandei, la sud de Dublin, pe estuarul râului Vartry. Fundația așezării este atribuită vikingilor în secolul al VIII-lea, numele său derivând din termenul nordic vechi pentru pajiștea vikingilor. Castelul Neagră (Black Castle), ale cărui ruine se află pe un promontoriu stâncos, amintește de conflictul constant dintre forțele normande și clanurile locale irlandeze. Economia tradițională s-a bazat pe activități portuare, construcții navale și pescuit, adaptându-se treptat la turism datorită apropierii de Munții Wicklow. Analiza istoriei orașului permite elevilor să studieze interacțiunile culturale și conflictele asimetrice dintre populațiile autohtone și coloniștii scandinavi sau normanzi."
  },
  factsAdvanced: {
      en: [
      "Wicklow town was founded by Viking settlers in the late 8th century.",
      "The historic Wicklow Gaol operated as a harsh prison from 1702 until 1924.",
      "The ruins of the Black Castle, a 12th-century Norman fortress, overlook the town's harbor.",
      "It serves as a primary access point for the scenic Wicklow Mountains National Park."
    ],

    ro: [
      "Închisoarea istorică Wicklow Gaol, deschisă în anul 1702, a găzduit prizonieri implicați în Rebeliunea din 1798 înainte de deportarea lor în Australia.",
      "Farul Wicklow Head, construit în 1781, are o formă octogonală neobișnuită și a fost salvat de la demolare de o fundație pentru patrimoniu.",
      "Ruinele Castelului Neagră datează din 1169, fiind o structură de apărare crucială care a fost atacată în mod repetat de clanurile O'Byrne și O'Toole."
    ]
  },
    facts: {
      en: ["County town on the east coast.", "Gateway to mountain routes.", "Compact harbour-town feel.", "Strong Garden County branding.", "Good for scenic drive searches."],
      de: ["Bezirkshauptort an der Ostkueste.", "Tor zu Berg-Routen.", "Kompaktes Hafenstadt-Gefuehl.", "Starkes Garden-County-Image.", "Gut fuer Panoramafahrten-Suchen."],
      hu: ["Keleti parti megyekozpont.", "Kaput ad a hegyi utvonalakhoz.", "Kompakt kikotovarosi hangulat.", "Eros Garden County marka.", "Jó festoi vezeteses utakhoz."],
      ro: ["Oras de resedinta pe coasta de est.", "Poarta spre rutele montane.", "Atmosfera compacta de oras-port.", "Brand puternic de Garden County.", "Bun pentru cautari despre drumuri pitoresti."]
    },
    image: "/geo-images/ireland/wicklow.webp",
  },
  {
    id: "city-ballina",
    type: "city",
    parent: "ireland",
    coords: [-9.1535, 54.1169],
    name: { de: "Ballina", hu: "Ballina", ro: "Ballina", en: "Ballina" },
    description: {
      en: "Ballina is a major town in north Mayo. It has a busy local centre and good links to river activity. The town also works well for trips toward the Wild Atlantic Way. Ballina is a reliable keyword for Mayo travel content.",
      de: "Ballina ist eine groessere Stadt im Norden von Mayo. Sie hat ein lebendiges Zentrum und gute Beziuge zu Flussaktivitaeten. Der Ort eignet sich auch gut fuer Reisen in Richtung Wild Atlantic Way. Ballina ist ein verlaessliches Keyword fuer Mayo-Reiseinhalte.",
      hu: "Ballina Mayo eszaki reszenek fontos varosa. Nyuzsgo varoskozponttal es jo folyami kapcsolatokkal rendelkezik. A varos a Wild Atlantic Way fele induló utakhoz is jo. Ballina megbizhato kulcsszo a Mayo utazasi tartalmakban.",
      ro: "Ballina este un oras important in nordul lui Mayo. Are un centru animat si legaturi bune cu activitatile pe rau. Orasul este util si pentru excursii spre Wild Atlantic Way. Ballina este un cuvant-cheie de incredere pentru continutul despre Mayo."
    },
  descriptionAdvanced: {
      en: "Ballina is a vibrant town in north County Mayo, beautifully situated on the River Moy near its estuary at Killala Bay. It is internationally renowned as the 'Salmon Capital of Ireland', drawing anglers from across the globe to the famous Ridge Pool right in the center of town. Ballina's history includes heavy involvement in the 1798 Irish Rebellion, when French forces landed nearby to support the rebels. The town's geography highlights the incredible value of high-quality river ecosystems to a local tourism economy.",

    ro: "Ballina este principalul oraș din nordul comitatului Mayo, situat pe malurile fluviului Moy, recunoscut la nivel internațional pentru pescuitul de somon. Orașul a fost formal înființat în 1722 de către lordul local O'Hara, deși regiunea era locuită încă din preistorie, fapt atestat de monumentele megalitice din împrejurimi. Evenimentele din anul 1798 au marcat profund așezarea, când forțele franceze conduse de generalul Humbert au intrat în oraș pentru a sprijini rebeliunea irlandeză. Poziționarea sa între Oceanul Atlantic și lanțurile muntoase Nephin Beg influențează direct clima și resursele hidrologice ale zonei. Din punct de vedere educațional, Ballina ilustrează modul în care resursele piscicole dețin un rol vital în economia tradițională a unei așezări riverane."
  },
  factsAdvanced: {
      en: [
      "Ballina is widely celebrated as the 'Salmon Capital of Ireland'.",
      "The town is situated on the River Moy, one of the most prolific salmon rivers in Europe.",
      "It is the largest town in County Mayo, with a population of approximately 10,000.",
      "The historic Belleek Woods are located right on the edge of the town along the riverbank."
    ],

    ro: [
      "Râul Moy atrage anual mii de pescari, producând una dintre cele mai mari capturi de somon din Europa de Vest.",
      "Monumentul Dolmenul celor Patru Maols (Four Maols), situat în spatele gării locale, datează din epoca bronzului, în jurul anului 2000 î.Hr.",
      "Catedrala Sfântul Muredach, a cărei construcție a început în 1827 în timpul marii foamete irlandeze, servește drept sediu al diecezei Killala."
    ]
  },
    facts: {
      en: ["Major town in north Mayo.", "Linked to river activity.", "Good base for northwest coast.", "Busy local retail centre.", "Useful for Wild Atlantic Way."],
      de: ["Groessere Stadt im Norden von Mayo.", "Mit Flussaktivitaeten verbunden.", "Gute Basis fuer die Nordwestkueste.", "Lebhaftes lokales Handelszentrum.", "Nuetzlich fuer Wild-Atlantic-Way-Touren."],
      hu: ["Mayo eszaki nagyvarosa.", "A folyami aktivitashoz kotodik.", "Jo bazis az eszaknyugati parthoz.", "Nyuzsgo helyi kereskedelmi kozpont.", "Hasznos a Wild Atlantic Wayhez."],
      ro: ["Oras important in nordul lui Mayo.", "Legat de activitatile pe rau.", "Baza buna pentru coasta de nord-vest.", "Centru local comercial animat.", "Util pentru Wild Atlantic Way."]
    },
    image: "/geo-images/ireland/ballina.webp",
  },
  {
    id: "city-westport",
    type: "city",
    parent: "ireland",
    coords: [-9.5208, 53.8006],
    name: { de: "Westport", hu: "Westport", ro: "Westport", en: "Westport" },
    description: {
      en: "Westport is one of Mayo's best-known towns. It combines Georgian streets, harbour access, and quick routes to the mountains and islands. The town is strongly associated with leisure breaks and outdoor travel. Westport is a powerful keyword for west of Ireland itineraries.",
      de: "Westport ist eine der bekanntesten Staedte in Mayo. Sie verbindet georgianische Strassen, Hafenzugang und schnelle Routen zu Bergen und Inseln. Der Ort ist stark mit Freizeitpausen und Outdoor-Reisen verbunden. Westport ist ein starkes Keyword fuer Reiserouten im Westen Irlands.",
      hu: "Westport Mayo egyik legismertebb varosa. Georgiánus utcakat, kikotoi kapcsolatot es gyors utvonalat ad a hegyekhez es szigetekhez. A varos eros kapcsolatban all a pihenesekkel es a szabadtéri utazasokkal. Westport eros kulcsszo a nyugat-irorszagi utvonalakhoz.",
      ro: "Westport este unul dintre cele mai cunoscute orase din Mayo. Combina strazi georgiene, acces la port si rute rapide spre munti si insule. Orasul este asociat puternic cu escapadele de relaxare si calatoriile in aer liber. Westport este un cuvant-cheie puternic pentru itinerariile din vestul Irlandei."
    },
  descriptionAdvanced: {
      en: "Westport is an exceptionally well-planned town in County Mayo, located at the southeast corner of Clew Bay. Unusually for Ireland, it is a 'planned town', designed in the 18th century by the architect James Wyatt, featuring tree-lined promenades along the Carrowbeg River. The town sits in the shadow of Croagh Patrick, Ireland's holy mountain, making it a bustling hub for pilgrims and outdoor enthusiasts. Westport serves as an outstanding example of Georgian urban planning integrated with spectacular natural geography.",

    ro: "Westport este un oraș patrimonial de pe coasta vestică a comitatului Mayo, situat în golful Clew, faimos pentru peisajul său marin cu sute de insule scufundate parțial. Localitatea a fost proiectată și construită în secolul al XVIII-lea de arhitectul James Wyatt, la comanda familiei Browne, ca un efort sistematic de planificare urbană modernă. Axa centrală a orașului este reprezentată de The Mall, o stradă elegantă mărginită de arbori și străbătută de râul Carrowbeg, ale cărui maluri sunt unite prin poduri de piatră. Domeniul Westport House, o capodoperă a arhitecturii palladiene, este strâns legat de istoria pirateriei, fiind construit pe fundațiile castelului condus de legendara Grace O'Malley. Elevii pot studia Westport pentru a înțelege contrastul dintre dezvoltarea urbană planificată și peisajul accidentat al coastei atlantice."
  },
  factsAdvanced: {
      en: [
      "Westport is one of the few historically 'planned towns' in Ireland, designed in the 1780s.",
      "The town's elegant Mall features a tree-lined promenade running alongside the Carrowbeg River.",
      "It is consistently voted as one of the best places to live in Ireland.",
      "The nearby Clew Bay is famously reputed to contain 365 islands, one for every day of the year."
    ],

    ro: [
      "Muntele Croagh Patrick, vizibil din oraș și având o altitudine de 764 de metri, este considerat cel mai sfânt munte al Irlandei.",
      "Planul urbanistic al orașului Westport se distinge ca fiind unul dintre puținele din Irlanda conceput integral pe planșetă înainte de construcție.",
      "Traseul de agrement Great Western Greenway, lung de 42 de kilometri, conectează Westport de Insula Achill."
    ]
  },
    facts: {
      en: ["One of Mayo's best-known towns.", "Popular base for the west coast.", "Near mountain and island routes.", "Georgian streets and harbour access.", "Strong leisure travel keyword."],
      de: ["Eine der bekanntesten Staedte in Mayo.", "Beliebte Basis fuer die Westkueste.", "Nahe an Berg- und Inselrouten.", "Georgianische Strassen und Hafenbezug.", "Starkes Keyword fuer Freizeitreisen."],
      hu: ["Mayo egyik legismertebb varosa.", "Népszeru bazis a nyugati parthoz.", "Kozel a hegyi es szigeti utvonalakhoz.", "Georgiánus utcak es kikotoi kapcsolat.", "Eros kulcsszo a piheneshez."],
      ro: ["Unul dintre cele mai cunoscute orase din Mayo.", "Baza populara pentru coasta de vest.", "Aproape de rute montane si insulare.", "Strazi georgiene si acces la port.", "Cuvant-cheie puternic pentru calatorii de relaxare."]
    },
    image: "/geo-images/ireland/westport.webp",
  },
  {
    id: "hist-hill-of-tara",
    type: "historical",
    parent: "ireland",
    coords: [-6.6104, 53.5819],
    name: { de: "Hill of Tara", hu: "Hill of Tara", ro: "Hill of Tara", en: "Hill of Tara" },
    description: {
      en: "The Hill of Tara is one of Ireland's most iconic ancient sites. It is linked to the High Kings of Ireland and old ceremonial power. Visitors come for the earthworks, views, and national symbolism. The site is essential for ancient and mythic Ireland content.",
      de: "Der Hill of Tara ist eine der bekanntesten antiken Staetten Irlands. Er ist mit den High Kings of Ireland und alter Zeremonialmacht verbunden. Besucher kommen wegen der Erdwerke, der Aussicht und der nationalen Symbolik. Die Staette ist essenziell fuer antike und mythische Irland-Inhalte.",
      hu: "A Hill of Tara Irorszag egyik legikonikusabb osi helyszine. Az Ireland High Kingshoz es a regi szertartasi hatalomhoz kotodik. A latogatok a foldmunkak, a kilatas es a nemzeti szimbolika miatt jonnek. A hely alapveto az osi es mitikus irorszagi tartalmakban.",
      ro: "Hill of Tara este unul dintre cele mai iconice situri antice din Irlanda. Este legat de High Kings of Ireland si de puterea ceremoniala veche. Vizitatorii vin pentru valurile de pamant, privelisti si simbolism national. Situl este esential pentru continutul despre Irlanda antica si mitica."
    },
  descriptionAdvanced: {
      en: "The Hill of Tara, located in County Meath, is a low-lying ridge that holds an unparalleled status in Irish mythology and ancient history. For centuries, it served as the sacred inauguration site and the political and spiritual capital for the High Kings of Ireland. The landscape is dotted with mysterious earthworks, burial mounds, and the famous Lia Fáil (Stone of Destiny). Studying Tara allows students to explore the intersection of early Celtic religious practices, ceremonial landscapes, and the concept of sacred kingship.",

    ro: "Dealul Tara este un complex arheologic de importanță excepțională situat în comitatul Meath, fiind considerat sediul simbolic al Înalților Regi ai Irlandei. Situl cuprinde numeroase monumente preistorice și celtice, inclusiv movile funerare din neolitic și structuri de pământ din epoca fierului. Cel mai faimos element este Piatra Destinului, despre care legendele afirmă că ar fi scos un strigăt de recunoaștere atunci când era atinsă de regele de drept. Amplasarea sa pe o cotă relativ înaltă oferă o vizibilitate panoramică asupra câmpiilor centrale, subliniind valoarea sa defensivă și ceremonială. Pentru elevi, Dealul Tara oferă o legătură directă cu mitologia celtică și organizarea politică a societăților pre-creștine europene."
  },
  factsAdvanced: {
      en: [
      "The Hill of Tara contains ancient monuments dating from the Neolithic to the Iron Age.",
      "It was the traditional inauguration site of the High Kings of Ireland.",
      "The site features the Lia Fáil, a standing stone said to roar when touched by the rightful king.",
      "Despite its massive historical importance, the hill's elevation is relatively low at 155 meters."
    ],

    ro: [
      "Movila Ostaticilor, cel mai vechi monument de pe deal, este un mormânt de pasaj megalitic construit în jurul anului 2500 î.Hr.",
      "Săpăturile arheologice au identificat o structură de lemn enormă, de formă circulară, cu un diametru de peste 250 de metri, datând din perioada epocii fierului.",
      "Dealul a fost scena Bătăliei de la Tara în anul 1798, unde trupele britanice au învins o forță insurgentă a Societății Irlandezilor Uniți."
    ]
  },
    facts: {
      en: ["Linked to the High Kings of Ireland.", "Major ancient ceremonial site.", "Important national-symbol location.", "Known for earthworks and views.", "Top historical Ireland keyword."],
      de: ["Mit den High Kings of Ireland verbunden.", "Wichtige antike Zeremonialstaette.", "Bedeutender Ort nationaler Symbolik.", "Bekannt fuer Erdwerke und Aussicht.", "Top-Keyword fuer historische Irland-Themen."],
      hu: ["Az Ireland High Kingshoz kotodik.", "Fontos osi szertartasi helyszin.", "Nemzeti szimbolum szempontjabol jelentős.", "Foldmunkakrol es kilatasrol ismert.", "Elso osztalyu tortenelmi kulcsszo."],
      ro: ["Legat de High Kings of Ireland.", "Situl ceremonial antic important.", "Loc cu simbolism national puternic.", "Cunoscut pentru valuri de pamant si privelisti.", "Cuvant-cheie istoric de top."]
    },
    image: "/geo-images/ireland/hill-of-tara.webp",
  },
  {
    id: "hist-jerpoint-abbey",
    type: "historical",
    parent: "ireland",
    coords: [-7.1585, 52.5227],
    name: { de: "Jerpoint Abbey", hu: "Jerpoint Abbey", ro: "Jerpoint Abbey", en: "Jerpoint Abbey" },
    description: {
      en: "Jerpoint Abbey is a famous Cistercian ruin in County Kilkenny. It is known for carved stone detail and a strong monastic atmosphere. The site gives visitors a clear sense of medieval Ireland. Jerpoint Abbey works well for history and architecture searches.",
      de: "Jerpoint Abbey ist eine beruehmte Zisterzienserruine im County Kilkenny. Sie ist fuer ihre Steinmetzdetails und ihre starke monastische Atmosphaere bekannt. Die Staette vermittelt Besuchern ein klares Gefuehl fuer mittelalterliches Irland. Jerpoint Abbey eignet sich gut fuer Geschichts- und Architektur-Suchen.",
      hu: "A Jerpoint Abbey egy hires ciszterci kolostorrom Kilkenny megyeben. Faragott koreszleteirol es eros monasztikus hangulatarol ismert. A hely jol atadja a kozepkori Irorszag erzeseit. A Jerpoint Abbey jo tortenelmi es epiteszeti keresésekhez.",
      ro: "Jerpoint Abbey este o ruina cisterciana celebra din County Kilkenny. Este cunoscuta pentru detaliile sculptate in piatra si atmosfera monastica puternica. Situl le ofera vizitatorilor un sentiment clar al Irlandei medievale. Jerpoint Abbey functioneaza bine pentru cautari istorice si de arhitectura."
    },
  descriptionAdvanced: {
      en: "Jerpoint Abbey is a magnificent ruined Cistercian monastery located in County Kilkenny. Founded in the late 12th century, the abbey is renowned for its exceptional architectural details, particularly its sculptured cloister arcade. The stone carvings feature an array of fascinating figures, including knights, bishops, and mythical beasts, offering a vivid glimpse into medieval Irish society. The site demonstrates the immense wealth, architectural sophistication, and artistic capabilities of monastic orders before the dissolution of the monasteries.",

    ro: "Abația Jerpoint, localizată în comitatul Kilkenny, este una dintre cele mai remarcabile mănăstiri cisterciene ruinate din Irlanda. Fondată în a doua jumătate a secolului al XII-lea, arhitectura complexului îmbină elemente romanice târzii cu stilul gotic timpuriu. Mănăstirea s-a remarcat prin influența sa spirituală și economică asupra regiunii, deținând terenuri agricole întinse până la dizolvarea sa de către regele Henric al VIII-lea în 1540. Sculpturile detaliate din piatră, care decorează claustrul și mormintele cavalerilor, oferă indicii prețioase despre măiestria artizanilor medievali locali. Elevii pot analiza această structură pentru a aprofunda impactul ordinelor monastice asupra agriculturii, arhitecturii și educației în Europa medievală."
  },
  factsAdvanced: {
      en: [
      "Jerpoint Abbey was constructed in 1180, initially by the King of Osraige.",
      "The site belongs to the Cistercian order, known for their strict rules and architectural prowess.",
      "The cloister arcade contains uniquely detailed 15th-century stone carvings of saints and knights.",
      "The abbey was suppressed and dissolved by order of King Henry VIII in 1540."
    ],

    ro: [
      "Claustrul mănăstirii este celebru pentru coloanele sale sculptate unic, reprezentând cavaleri, doamne ale curții și creaturi mitologice din secolele XIV și XV.",
      "Biserica principală are o structură masivă în formă de cruce, turnul său central distinctiv fiind adăugat abia în secolul al XV-lea.",
      "Orașul medieval care s-a dezvoltat inițial în jurul abației a dispărut complet, situl său fiind astăzi acoperit doar de pășuni agricole."
    ]
  },
    facts: {
      en: ["Cistercian abbey ruin.", "Located in County Kilkenny.", "Known for carved stone detail.", "Set in a river valley.", "Strong medieval keyword."],
      de: ["Zisterzienserruine.", "Im County Kilkenny gelegen.", "Bekannt fuer Steinmetzdetails.", "In einem Flusstal gelegen.", "Starkes Mittelalter-Keyword."],
      hu: ["Ciszterci kolostorrom.", "Kilkenny megyeben talalhato.", "Faragott koreszleteirol ismert.", "Egy folyovölgyben fekszik.", "Eros kozepkori kulcsszo."],
      ro: ["Ruina cisterciana.", "Situata in County Kilkenny.", "Cunoscuta pentru detaliile in piatra.", "Asezata intr-o vale de rau.", "Cuvant-cheie puternic medieval."]
    },
    image: "/geo-images/ireland/jerpoint-abbey.webp",
  },
  {
    id: "landmark-king-johns-castle",
    type: "landmark",
    parent: "ireland",
    coords: [-8.6206, 52.6674],
    name: { de: "King John's Castle", hu: "King John's Castle", ro: "King John's Castle", en: "King John's Castle" },
    description: {
      en: "King John's Castle is a flagship Norman landmark in Limerick. The fortress overlooks the Shannon crossing and shapes the city's medieval story. It is a major attraction for castle searches and urban history content. The site is ideal for landmark travel planning.",
      de: "King John's Castle ist ein Vorzeige-Normannenwahrzeichen in Limerick. Die Festung ueberblickt die Shannon-Querung und praegt die mittelalterliche Geschichte der Stadt. Sie ist eine grosse Attraktion fuer Burgsuchen und Stadtgeschichten. Die Staette ist ideal fuer Landmark-Reiseplanung.",
      hu: "A King John's Castle Limerick egyik fontos normann nevezetessege. Az erosseg a Shannon-atkelest nezi, es a varos kozepkori tortenetet formálja. Nagy attrakcio a kastelykeresesekben es a varosi torteneti tartalmakban. A hely idealis landmark utazasi tervezeshez.",
      ro: "King John's Castle este un reper normand de prim rang in Limerick. Fortareata supravegheaza trecerea peste Shannon si modeleaza povestea medievala a orasului. Este o atractie majora pentru cautari despre castele si continut de istorie urbana. Situl este ideal pentru planificarea calatoriilor de tip landmark."
    },
  descriptionAdvanced: {
      en: "King John's Castle is a formidable 13th-century fortress standing proudly on King's Island in the heart of Limerick city. Commissioned by King John of England in 1200, its massive drum towers and imposing gatehouse were designed to exert absolute control over the crucial River Shannon crossing. The castle witnessed massive conflict, including a devastating siege in 1642. Today, a modern visitor center built into the remains of a Viking settlement beneath the castle provides a layered history of military engineering and urban defense.",

    ro: "Castelul Regelui Ioan este o fortificație masivă din secolul al XIII-lea, situată strategic pe o insulă a râului Shannon, în centrul orașului Limerick. Construită la ordinele regelui Ioan al Angliei, cetatea avea rolul de a proteja granițele cuceririlor normande împotriva regatelor gaelice din vest. Structura sa militară se distinge prin lipsa unui donjon central, apărarea bazându-se pe ziduri cortină formidabile și turnuri masive de colț cu formă circulară. De-a lungul secolelor, castelul a suportat numeroase asedii și reconstrucții, marcând capitole esențiale din conflictul anglo-irlandez. În cadrul educațional, fortăreața este un model clasic pentru predarea ingineriei militare medievale și a importanței strategice a controlului cursurilor de apă."
  },
  factsAdvanced: {
      en: [
      "The castle was ordered to be built in 1200 by King John of England.",
      "It features massive twin drum towers that provided maximum defensive visibility.",
      "During the 1642 siege, the castle's walls were severely undermined by extensive tunneling.",
      "Recent archaeological excavations revealed over 1,000 Viking artifacts directly beneath the castle."
    ],

    ro: [
      "Fundațiile castelului includ resturile unei așezări fortificate vikinge, datând de la începutul secolului al X-lea.",
      "Turnurile exterioare circulare au fost o inovație militară a vremii, fiind concepute pentru a devia proiectilele inamice mult mai eficient decât colțurile pătrate tradiționale.",
      "În timpul asediului din 1642, apărătorii castelului au săpat contra-tuneluri pentru a opri minarea zidurilor de către inamici."
    ]
  },
    facts: {
      en: ["Flagship Norman castle in Limerick.", "Overlooks the Shannon crossing.", "Major attraction for castle searches.", "Strong riverside landmark.", "Good for city-history content."],
      de: ["Vorzeige-Normannenburg in Limerick.", "Ueberblickt die Shannon-Querung.", "Wichtige Attraktion fuer Burgsuchen.", "Starkes historisches Ufer-Wahrzeichen.", "Gut fuer Stadtgeschichte-Inhalte."],
      hu: ["Limerick fontos normann kastelya.", "A Shannon-atkelest nezi.", "Nagy attrakcio a kastelykeresesekben.", "Eros folyoparti nevezetesseg.", "Jo varostorteneti tartalmakhoz."],
      ro: ["Castel normand de referinta in Limerick.", "Supravegheaza trecerea peste Shannon.", "Atractie majora pentru cautari despre castele.", "Reper istoric puternic pe malul apei.", "Bun pentru continut despre istoria orasului."]
    },
    image: "/geo-images/ireland/king-johns-castle.webp",
  },
  {
    id: "hist-glenveagh-castle",
    type: "historical",
    parent: "ireland",
    coords: [-7.9833, 55.0289],
    name: { de: "Glenveagh Castle", hu: "Glenveagh Castle", ro: "Glenveagh Castle", en: "Glenveagh Castle" },
    description: {
      en: "Glenveagh Castle is a striking 19th-century castle in Donegal. It combines a formal house, gardens, and a mountain and lake backdrop. Visitors often pair it with walks in the Glenveagh area. The castle is a strong keyword for Donegal heritage travel.",
      de: "Glenveagh Castle ist eine auffaellige Burg aus dem 19. Jahrhundert in Donegal. Sie verbindet ein formelles Haus, Gaerten und eine Kulisse aus Bergen und Seen. Besucher kombinieren den Ort oft mit Spaziergaengen im Glenveagh-Gebiet. Die Burg ist ein starkes Keyword fuer Donegal-Erbe.",
      hu: "A Glenveagh Castle egy lenyugozo 19. szazadi kastely Donegalban. Egy formalis hazat, kertet es hegyi-tavi hatteret kapcsol ossze. A latogatók gyakran Glenveagh setakkal parositjak. A kastely eros kulcsszo Donegal oroksegi utazasi tartalmakhoz.",
      ro: "Glenveagh Castle este un castel impresionant din secolul al XIX-lea in Donegal. Combina o casa formala, gradini si un fundal de munti si lacuri. Vizitatorii il combina adesea cu plimbari in zona Glenveagh. Castelul este un cuvant-cheie puternic pentru turismul de patrimoniu din Donegal."
    },
  descriptionAdvanced: {
      en: "Glenveagh Castle is a majestic 19th-century castellated mansion located deep within the remote and rugged Derryveagh Mountains in County Donegal. Constructed by a wealthy land speculator between 1867 and 1873, it was built following the infamous and brutal eviction of 244 local tenants, a tragic period in Irish agrarian history. The castle is surrounded by extensive, meticulously curated exotic gardens that sharply contrast with the wild, barren landscape. It serves as a powerful historical monument to Victorian wealth, landscape engineering, and the harsh realities of the Irish land struggle.",

    ro: "Castelul Glenveagh este un conac fortificat în stil baronial scoțian, construit între anii 1870 și 1873 pe malul lacului Lough Veagh din comitatul Donegal. Domeniul a fost înființat de John George Adair, un proprietar de pământuri controversat, care a evacuat peste două sute de chiriași locali pentru a-și crea o vastă rezervație de vânătoare. Grădinile exotice adiacente contrastează puternic cu mediul aspru, montan, incluzând specii rare de plante aduse din emisfera sudică. Astăzi, structura și terenurile înconjurătoare constituie centrul celui de-al doilea parc național ca mărime din țară. Elevii pot folosi acest studiu de caz pentru a înțelege consecințele sistemului de proprietate latifundiară din secolul al XIX-lea asupra comunităților rurale irlandeze."
  },
  factsAdvanced: {
      en: [
      "Glenveagh Castle was built by John George Adair, a controversial land speculator.",
      "The surrounding Glenveagh National Park covers over 16,000 hectares of wilderness.",
      "The estate famously hosted numerous Hollywood stars in the 20th century, including Greta Garbo.",
      "The estate was gifted to the Irish nation in 1981 by its final private owner, Henry McIlhenny."
    ],

    ro: [
      "Turma de cerbi roșii care trăiește pe domeniul Glenveagh a fost introdusă artificial în anul 1891 pentru a popula rezervația de vânătoare a domeniului.",
      "Castelul a găzduit numeroase personalități internaționale de-a lungul secolului al XX-lea, inclusiv actori de la Hollywood precum Charlie Chaplin și Greta Garbo.",
      "În 1981, întregul domeniu a fost donat statului irlandez de către ultimul său proprietar privat, filantropul americano-irlandez Henry McIlhenny."
    ]
  },
    facts: {
      en: ["19th-century castle in Donegal.", "Set among mountains and lakes.", "Popular for scenic day trips.", "Linked to Glenveagh area.", "Strong heritage keyword."],
      de: ["Burg aus dem 19. Jahrhundert in Donegal.", "Zwischen Bergen und Seen gelegen.", "Beliebt fuer landschaftliche Tagesausfluege.", "Mit dem Glenveagh-Gebiet verbunden.", "Starkes Erbe-Keyword."],
      hu: ["19. szazadi kastely Donegalban.", "Hegyek es tavak kozott fekszik.", "Népszeru festoi egynapos kirandulasokra.", "A Glenveagh teruleteihez kotodik.", "Eros oroksegi kulcsszo."],
      ro: ["Castel din secolul al XIX-lea in Donegal.", "Asezat intre munti si lacuri.", "Popular pentru excursii pitoresti de o zi.", "Legat de zona Glenveagh.", "Cuvant-cheie puternic pentru patrimoniu."]
    },
    image: "/geo-images/ireland/glenveagh-castle.webp",
  },
  {
    id: "hist-rathcroghan",
    type: "historical",
    parent: "ireland",
    coords: [-8.1341, 53.7381],
    name: { de: "Rathcroghan", hu: "Rathcroghan", ro: "Rathcroghan", en: "Rathcroghan" },
    description: {
      en: "Rathcroghan is a major archaeological landscape in Roscommon. It is linked to early kingship, burial mounds, and legendary stories. The area is valuable for ancient Ireland and archaeology searches. Rathcroghan is a high-value heritage destination.",
      de: "Rathcroghan ist eine wichtige archäologische Landschaft in Roscommon. Sie ist mit frueher Koenigsherrschaft, Grabhuellen und legendaren Geschichten verbunden. Das Gebiet ist wertvoll fuer Suchanfragen zu antikem Irland und Archäologie. Rathcroghan ist ein hochwertiges Kulturreiseziel.",
      hu: "Rathcroghan egy fontos regeszeti tajkép Roscommon megyeben. A korai kiralysaghoz, sirhalmokhoz es legendas tortenetekhez kotodik. A terulet ertekes az osi Irorszag es a regeszet kereseseiben. Rathcroghan kiemelt oroksegi celpont.",
      ro: "Rathcroghan este un peisaj arheologic major in Roscommon. Este legat de regalitatea timpurie, movile funerare si povesti legendare. Zona este valoroasa pentru cautari despre Irlanda antica si arheologie. Rathcroghan este o destinatie de patrimoniu de mare valoare."
    },
  descriptionAdvanced: {
      en: "Rathcroghan is an expansive and deeply significant archaeological landscape in County Roscommon. Identified in Irish mythology as the ancient capital of Connacht and the seat of the warrior Queen Medb (Maeve), it consists of over 240 archaeological sites, including burial mounds, ringforts, and ceremonial earthworks spanning the Neolithic to the Iron Age. It is most famously associated with the legendary epic tale, the Táin Bó Cúailnge (Cattle Raid of Cooley). The site offers students a profound connection between physical geography and Ireland's rich oral mythological traditions.",

    ro: "Rathcroghan, situat în comitatul Roscommon, este unul dintre cele mai importante și complexe peisaje arheologice din Irlanda pre-creștină. Complexul cuprinde peste 240 de situri individuale, incluzând movile funerare, structuri inelare de pământ și pietre ogham, întinse pe o suprafață de câțiva kilometri pătrați. În mitologia irlandeză, acesta este recunoscut drept capitala tradițională a provinciei Connacht și reședința legendară a reginei războinice Medb. Ca punct focal al epopeii naționale Raidul vitelor din Cooley, situl are o rezonanță culturală profundă. Explorarea acestui complex oferă elevilor ocazia de a corela descoperirile arheologice cu sursele mitologice și literare străvechi."
  },
  factsAdvanced: {
      en: [
      "Rathcroghan features over 240 identified archaeological sites spread across 2 square miles.",
      "It was the traditional inauguration site for the kings of Connacht.",
      "The site contains Oweynagat ('Cave of the Cats'), described in mythology as a portal to the Otherworld.",
      "Rathcroghan Mound, the largest structure, measures nearly 90 meters in diameter."
    ],

    ro: [
      "Structura principală, Movila Rathcroghan, este un monument circular cu diametrul de 85 de metri, care ascunde urmele unor temple de lemn masive.",
      "Peștera Oweynagat, denumită și Peștera Pisicilor, este considerată în folclorul local drept intrarea în lumea de dincolo a mitologiei celtice.",
      "În proximitatea complexului se află Dathi's Mound, marcat de un stâlp de gresie roșie despre care se crede că ar fi mormântul ultimului mare rege păgân al Irlandei."
    ]
  },
    facts: {
      en: ["Major royal archaeological site.", "Linked to early Irish kingship.", "Important for burial mound history.", "Strong mythology value.", "Top heritage keyword."],
      de: ["Wichtige koenigliche Archäologie-Staette.", "Mit frueher irischer Koenigsherrschaft verbunden.", "Wichtig fuer die Geschichte der Grabhuellen.", "Starker Mythologie-Wert.", "Top-Keyword fuer Erbe."],
      hu: ["Fontos kiralyi regeszeti helyszin.", "A korai ir kiralysaghoz kotodik.", "A sirhalmok tortenete miatt jelentős.", "Eros mitologiai erteke van.", "Elso osztalyu oroksegi kulcsszo."],
      ro: ["Situl arheologic regal major.", "Legat de regalitatea irlandeza timpurie.", "Important pentru istoria movilelor funerare.", "Are valoare mitologica puternica.", "Cuvant-cheie de top pentru patrimoniu."]
    },
    image: "/geo-images/ireland/rathcroghan.webp",
  },
  {
    id: "hist-fore-abbey",
    type: "historical",
    parent: "ireland",
    coords: [-7.3125, 53.6997],
    name: { de: "Fore Abbey", hu: "Fore Abbey", ro: "Fore Abbey", en: "Fore Abbey" },
    description: {
      en: "Fore Abbey is a ruined monastic site in Westmeath. It is famous for the legend of the seven wonders and its quiet atmosphere. The abbey is a useful stop for central Ireland history trips. Fore Abbey performs well for monastery search traffic.",
      de: "Fore Abbey ist eine Ruinenklosterstaette in Westmeath. Sie ist beruehmt fuer die Legende der sieben Wunder und ihre ruhige Atmosphaere. Die Abtei ist ein nuetzlicher Halt fuer Geschichtsreisen in Zentralirland. Fore Abbey funktioniert gut fuer Klostersuchanfragen.",
      hu: "A Fore Abbey egy romos kolostori helyszin Westmeath megyeben. A het csoda legendajarol es csendes hangulatarol ismert. Az apatsag hasznos megallo a kozep-irorszagi tortenelmi utakhoz. A Fore Abbey jol teljesit a kolostorkeresésekben.",
      ro: "Fore Abbey este un sit monastic in ruina din Westmeath. Este faimos pentru legenda celor sapte minuni si pentru atmosfera sa linistita. Abatia este un popas util pentru calatoriile istorice din Irlanda centrala. Fore Abbey functioneaza bine pentru cautarile despre manastiri."
    },
  descriptionAdvanced: {
      en: "Fore Abbey is a fascinating ruined Benedictine monastery located in a quiet valley in County Westmeath. Founded originally by Saint Feichin in the 7th century, the site is most famous for the 'Seven Wonders of Fore', a collection of seemingly miraculous phenomena, such as water that flows uphill and a monastery built on a bog. The substantial ruins visible today date primarily from the 13th century. The site vividly illustrates the blend of early Christian miracle lore and the massive logistical engineering capabilities of later medieval monks.",

    ro: "Abația Fore este o ruină monahală benedictină amplasată într-o vale liniștită din nordul comitatului Westmeath. Inițial fondată de Sfântul Feichin în secolul al VII-lea, comunitatea a crescut la peste trei sute de călugări, înainte ca actualele clădiri de piatră să fie ridicate în secolul al XIII-lea de influențele anglo-normande. Complexul este renumit în tradiția populară pentru cele Șapte Minuni ale localității Fore, fenomene naturale și arhitecturale interpretate drept miracole. Fortificațiile groase care înconjoară clădirile demonstrează necesitatea apărării împotriva raidurilor frecvente din perioada medievală. Din perspectivă pedagogică, așezarea exemplifică sinteza dintre credințele creștine timpurii, influențele arhitecturale europene și particularitățile geografice locale."
  },
  factsAdvanced: {
      en: [
      "The original monastery was founded by Saint Feichin around 630 AD.",
      "At its peak, the monastic settlement housed over 300 monks and 2,000 students.",
      "It is uniquely associated with the folklore of the 'Seven Wonders of Fore'.",
      "The site features a massive columbarium (dovecote) built to house pigeons for food."
    ],

    ro: [
      "Biserica originală a Sfântului Feichin prezintă un buiandrug masiv de piatră deasupra intrării, cântărind aproximativ două tone, montat fără utilizarea mortarului.",
      "Printre Minunile asociate sitului se numără un pârâu subteran care curge aparent în amonte și apa care nu fierbe dintr-un izvor sfânt.",
      "Abația actuală este structurată sub forma unui patrulater fortificat, fiind una dintre cele mai mari fundații de acest tip din Irlanda medievală."
    ]
  },
    facts: {
      en: ["Ruined monastic site in Westmeath.", "Known for the seven wonders.", "Strong early Christian atmosphere.", "Useful central Ireland stop.", "Good monastery keyword."],
      de: ["Ruinenklosterstaette in Westmeath.", "Bekannt fuer die sieben Wunder.", "Starke fruehchristliche Atmosphaere.", "Nuetzlicher Halt in Zentralirland.", "Gutes Keyword fuer Klostererbe."],
      hu: ["Romos kolostori hely Westmeathben.", "A het csoda legendajarol ismert.", "Eros korakereszteny hangulat.", "Hasznos kozep-irorszagi megallo.", "Jo kolostori kulcsszo."],
      ro: ["Situl monastic in ruina din Westmeath.", "Cunoscut pentru cele sapte minuni.", "Atmosfera crestina timpurie puternica.", "Popas util in centrul Irlandei.", "Cuvant-cheie bun pentru manastiri."]
    },
    image: "/geo-images/ireland/fore-abbey.webp",
  },
  {
    id: "landmark-dun-aonghasa",
    type: "landmark",
    parent: "ireland",
    coords: [-9.6480, 53.1238],
    name: { de: "Dun Aonghasa", hu: "Dun Aonghasa", ro: "Dun Aonghasa", en: "Dun Aonghasa" },
    description: {
      en: "Dun Aonghasa is a dramatic stone fort on Inis Mor. It stands on a cliff edge and offers one of the most memorable views in Ireland. The site combines prehistory, landscape drama, and island travel appeal. It is a strong landmark keyword for western Ireland.",
      de: "Dun Aonghasa ist eine dramatische Steinfestung auf Inis Mor. Sie steht am Rand einer Klippe und bietet einen der einpraegsamsten Ausblicke Irlands. Die Staette verbindet Vorgeschichte, Landschaftsdrama und Inselreise-Appeal. Sie ist ein starkes Landmark-Keyword fuer den Westen Irlands.",
      hu: "A Dun Aonghasa egy drmai koerosseg Inis Moron. Egy szakadek szelen all, es Irorszag egyik legemlekezetesebb kilatasat adja. A hely az oskort, a tajdramat es a szigeti utazas vonzerot egyesiti. Eros landmark kulcsszo Nyugat-Irorszaghoz.",
      ro: "Dun Aonghasa este o fortareata spectaculoasa de piatra pe Inis Mor. Sta pe marginea unei faleze si ofera una dintre cele mai memorabile privelisti din Irlanda. Situl combina preistoria, dramatismul peisajului si atractia calatoriilor pe insule. Este un cuvant-cheie puternic de landmark pentru vestul Irlandei."
    },
  descriptionAdvanced: {
      en: "Dún Aonghasa is a breathtaking prehistoric stone fort situated on the very edge of a 100-meter sheer cliff on Inis Mór, the largest of the Aran Islands. Consisting of massive, semi-circular concentric drystone walls, the fort utilizes the vertical drop to the Atlantic Ocean as a terrifying natural defense. Outside the walls lies a 'chevaux-de-frise', a dense network of jagged, upright stones designed to slow down attackers. It is one of the most spectacular examples of prehistoric defensive architecture in Western Europe.",

    ro: "Dún Aonghasa este un fort preistoric impresionant, situat pe marginea unei faleze abrupte de pe Inis Mór, cea mai mare dintre Insulele Aran. Construită inițial în epoca bronzului și extinsă în epoca fierului, structura se compune dintr-o serie de ziduri semicirculare din piatră uscată, sprijinite direct de prăpastia cu vedere la Oceanul Atlantic. O caracteristică defensivă distinctă a fortului o reprezintă chevaux-de-frise, o bandă de pietre ascuțite înfipte vertical în pământ pentru a încetini atacatorii. Funcția exactă a complexului rămâne subiect de dezbatere, teoriile oscilând între un refugiu defensiv extrem și un centru ritualic de maximă importanță. Studierea acestei arhitecturi permite elevilor să investigheze capacitățile inginerești ale populațiilor preistorice și adaptarea lor la un mediu costier sever."
  },
  factsAdvanced: {
      en: [
      "Dún Aonghasa covers an area of roughly 14 acres on the island of Inis Mór.",
      "The earliest construction at the site dates back to approximately 1100 BC.",
      "The defensive 'chevaux-de-frise' consists of thousands of jagged, closely packed limestone pillars.",
      "The fort's exact original purpose—whether military, ceremonial, or both—remains highly debated among archaeologists."
    ],

    ro: [
      "Faleza pe care este construit fortul are o înălțime de aproximativ 100 de metri deasupra apelor agitate ale Oceanului Atlantic.",
      "Sistemul de apărare defensivă include o rețea de stâlpi de piatră înclinați, care acoperă o suprafață de peste 10.000 de metri pătrați în fața zidurilor exterioare.",
      "Săpăturile au scos la iveală resturi de unelte de turnat bronzul, dovedind că locuitorii fortului erau artizani iscusiți."
    ]
  },
    facts: {
      en: ["Cliff-edge fort on Inis Mor.", "Iconic western Ireland view.", "Prehistoric and island appeal.", "Major landmark keyword.", "Strong scenic search term."],
      de: ["Festung am Klippenrand auf Inis Mor.", "Ikonischer Blick des Westens.", "Vorgeschichtlicher und inselbezogener Reiz.", "Wichtiges Wahrzeichen-Keyword.", "Starkes Landschafts-Suchwort."],
      hu: ["Szakadekparti erosseg Inis Moron.", "Ikonikus nyugati irorszagi kilatas.", "Osköri es szigeti vonzerő.", "Fontos landmark kulcsszo.", "Eros festoi keresesi kifejezes."],
      ro: ["Fortareata pe marginea falezei pe Inis Mor.", "Privire iconica din vestul Irlandei.", "Atractie preistorica si insulara.", "Cuvant-cheie major de landmark.", "Termen puternic pentru cautari pitoresti."]
    },
    image: "/geo-images/ireland/dun-aonghasa.webp",
  },
  {
    id: "historical-glasnevin-cemetery",
    type: "historical",
    parent: "ireland",
    coords: [-6.2710, 53.3730],
    name: { de: "Glasnevin Cemetery", hu: "Glasnevin Cemetery", ro: "Glasnevin Cemetery", en: "Glasnevin Cemetery" },
    description: {
      en: "Glasnevin Cemetery is one of Dublin's key memorial landscapes. It is linked to political history, public memory, and national figures. Visitors come for guided stories and the strong atmosphere. The site is a key stop for history and memorial searches.",
      de: "Glasnevin Cemetery ist eine der wichtigsten Gedenklandschaften Dublins. Sie ist mit politischer Geschichte, oeffentlichem Gedenken und nationalen Persoenlichkeiten verbunden. Besucher kommen wegen Fuehrungen und der starken Atmosphaere. Die Staette ist ein zentraler Halt fuer historische und Gedenk-Suchen.",
      hu: "A Glasnevin Cemetery Dublin egyik fontos emlekhelyi tajkepe. Politikai tortenelemhez, kozosségi emlekezethez es nemzeti alakokhoz kotodik. A latogatok vezetesek es az eros hangulat miatt jonnek. A hely kulcsfontossagu tortenelmi es emlekhelyi keresésekben.",
      ro: "Glasnevin Cemetery este unul dintre peisajele memoriale cheie ale Dublinului. Este legat de istoria politica, memoria publica si figuri nationale. Vizitatorii vin pentru tururi ghidate si atmosfera puternica. Situl este un popas cheie pentru cautari istorice si memoriale."
    },
  descriptionAdvanced: {
      en: "Glasnevin Cemetery in Dublin is Ireland's largest and most historically significant national necropolis. Opened in 1832 following efforts by Daniel O'Connell, it was the first cemetery in Ireland where Catholics could legally hold funeral services. Spanning 124 acres, it contains the graves of almost 1.5 million people, including many of the most prominent figures in modern Irish history, such as Michael Collins and Éamon de Valera. The cemetery serves as an open-air museum, mapping out the devastating impacts of famines, epidemics, and revolutions on the Irish population.",

    ro: "Cimitirul Glasnevin din Dublin este cel mai important spațiu funerar național al Irlandei, inaugurat în anul 1832 sub numele de Cimitirul Prospect. Instituția a fost creată în urma campaniilor politice ale lui Daniel O'Connell, cu scopul de a oferi un loc de înmormântare demn, indiferent de confesiunea religioasă. Aleile sale extinse găzduiesc monumente și mausolee care reflectă evoluția artei funerare și onorează cele mai proeminente figuri politice, culturale și sociale ale țării. Din punct de vedere geografic și urban, cimitirul s-a extins treptat pentru a reflecta ritmul de creștere demografică a capitalei. Vizitarea și studierea acestui loc oferă elevilor o cronică tangibilă a formării statului irlandez modern, punând accent pe drepturile civile și identitatea națională."
  },
  factsAdvanced: {
      en: [
      "Glasnevin Cemetery holds the remains of an estimated 1.5 million individuals.",
      "It features a massive, 51-meter-tall round tower built above the crypt of its founder, Daniel O'Connell.",
      "High walls and watchtowers were built around the cemetery in the 19th century to deter grave robbers.",
      "The site contains dedicated memorials to those who died in the 1916 Easter Rising and the Irish Civil War."
    ],

    ro: [
      "Peste 1,5 milioane de persoane sunt înmormântate în cimitirul Glasnevin, o cifră ce depășește numărul locuitorilor actuali ai orașului Dublin.",
      "Monumentul dedicat lui Daniel O'Connell include un turn rotund în stil tradițional irlandez care se înalță la peste 50 de metri, fiind vizibil din numeroase puncte ale orașului.",
      "Un zid înalt cu turnuri de observație a fost construit în secolul al XIX-lea pentru a descuraja practica frecventă a furtului de cadavre destinate disecțiilor medicale."
    ]
  },
    facts: {
      en: ["Major memorial site in Dublin.", "Linked to political history.", "Important national figures buried here.", "Known for guided tours.", "Strong memorial keyword."],
      de: ["Wichtige Gedenkstaette in Dublin.", "Mit politischer Geschichte verbunden.", "Wichtige nationale Persoenlichkeiten ruhen hier.", "Bekannt fuer Fuehrungen.", "Starkes Gedenk-Keyword."],
      hu: ["Fontos dublini emlekhely.", "A politikai tortenelemhez kotodik.", "Fontos nemzeti alakok nyugszanak itt.", "Vezetesekrol ismert.", "Eros emlekhelyi kulcsszo."],
      ro: ["Situl memorial major din Dublin.", "Legat de istoria politica.", "Aici sunt ingropate figuri nationale importante.", "Cunoscut pentru tururi ghidate.", "Cuvant-cheie puternic pentru memorial."]
    },
    image: "/geo-images/ireland/glasnevin-cemetery.webp",
  },
  {
    id: "mountain-mweelrea",
    type: "mountain",
    parent: "ireland",
    coords: [-9.8139, 53.6250],
    name: { de: "Mweelrea", hu: "Mweelrea", ro: "Mweelrea", en: "Mweelrea" },
    description: {
      en: "Mweelrea is one of the highest mountains in Connacht. It is prized by hikers for its steep profile and wide Atlantic views. The mountain adds strong outdoor value to west of Ireland content. Mweelrea is useful for hiking and Mayo travel searches.",
      de: "Mweelrea ist einer der hoechsten Berge in Connacht. Wanderer schaetzen ihn wegen seines steilen Profils und der weiten Atlantikblicke. Der Berg bringt starken Outdoor-Wert in Inhalte ueber den Westen Irlands. Mweelrea ist nuetzlich fuer Wander- und Mayo-Suchen.",
      hu: "Mweelrea Connacht egyik legmagasabb hegye. A turazok a meredek formaja es a szeles atlanti kilatas miatt kedvelik. A hegy eros szabadtéri erteket ad a nyugat-irorszagi tartalmakhoz. Mweelrea hasznos turazas- es Mayo keresésekhez.",
      ro: "Mweelrea este unul dintre cei mai inalti munti din Connacht. Este apreciat de drumeti pentru profilul abrupt si privelistile largi spre Atlantic. Muntele adauga valoare puternica pentru continutul despre outdoor din vestul Irlandei. Mweelrea este util pentru cautari despre drumetii si Mayo."
    },
  descriptionAdvanced: {
      en: "Mweelrea is the highest mountain in the province of Connacht, dominating the rugged landscape of County Mayo. Standing at 814 meters, its massive bulk drops precipitously into the deep, glaciated fjord of Killary Harbour to the south. The mountain's complex geology, composed primarily of sandstone and shale, features steep corries and treacherous ridges. Mweelrea's harsh, unpredictable weather and demanding terrain provide an excellent geographical study of high-altitude coastal environments and the sheer power of glacial erosion.",

    ro: "Mweelrea este cel mai înalt vârf muntos din provincia Connacht, fiind situat în vestul izolat al comitatului Mayo. Cu o altitudine impunătoare, masivul coboară dramatic spre apele adânci ale fiordului Killary, creând un peisaj spectaculos și extrem de accidentat. Geologia sa este compusă din gresii dure și conglomerate vechi de sute de milioane de ani, expuse puternic eroziunii glaciare și vânturilor atlantice. Ascensiunea muntelui este recunoscută pentru dificultatea sa, accentuată de condițiile meteorologice imprevizibile și de lipsa potecilor marcate. Pentru elevii pasionați de geografie, Mweelrea reprezintă un exemplu excelent pentru studiul proceselor glaciare, al climatului oceanic extrem și al reliefului montan izolat."
  },
  factsAdvanced: {
      en: [
      "Mweelrea is the highest peak in Connacht, standing at 814 meters (2,671 feet).",
      "The mountain overlooks Killary Harbour, one of only three glacial fjords in Ireland.",
      "Its name translates from Irish as 'the bald, grey mountain'.",
      "The mountain is known for its rapidly changing weather patterns coming off the Atlantic Ocean."
    ],

    ro: [
      "Vârful Mweelrea atinge o altitudine de 814 metri, fiind cel mai proeminent punct geografic de pe întreaga coastă de vest a Irlandei.",
      "În nordul și nord-estul masivului se află văi glaciare adânci, care găzduiesc mici lacuri montane suspendate.",
      "Regiunea muntoasă este un habitat protejat pentru flora alpină și păsări de pradă rare, deși ecosistemul său este vulnerabil la suprapășunat."
    ]
  },
    facts: {
      en: ["One of Connacht's highest peaks.", "Located in County Mayo.", "Known for steep hiking routes.", "Offers wide Atlantic views.", "Strong outdoor keyword."],
      de: ["Einer der hoechsten Gipfel Connachts.", "Im County Mayo gelegen.", "Bekannt fuer steile Wanderwege.", "Bietet weite Atlantikblicke.", "Starkes Outdoor-Keyword."],
      hu: ["Connacht egyik legmagasabb csucsa.", "Mayo megyeben talalhato.", "Meredek turautjairol ismert.", "Szeles atlanti kilatast ad.", "Eros szabadtéri kulcsszo."],
      ro: ["Unul dintre cele mai inalte varfuri din Connacht.", "Situat in County Mayo.", "Cunoscut pentru traseele abrupte.", "Ofera privelisti largi spre Atlantic.", "Cuvant-cheie puternic pentru outdoor."]
    },
    image: "/geo-images/ireland/mweelrea.webp",
  },
  {
    id: "mountain-mangerton",
    type: "mountain",
    parent: "ireland",
    coords: [-9.6048, 52.0051],
    name: { de: "Mangerton", hu: "Mangerton", ro: "Mangerton", en: "Mangerton" },
    description: {
      en: "Mangerton rises above the Killarney area. It is a classic Kerry mountain for walkers. The peak is known for its broad summit and lake views. Mangerton is a strong keyword for Kerry adventure searches.",
      de: "Mangerton erhebt sich ueber dem Killarney-Gebiet. Er ist ein klassischer Kerry-Berg fuer Wanderer. Der Gipfel ist fuer seinen breiten Gipfel und Seeblicke bekannt. Mangerton ist ein starkes Keyword fuer Kerry-Abenteuer-Suchen.",
      hu: "A Mangerton a Killarney-terseg fole magasodik. Klasszikus Kerry-hegy a turazok szamara. A csucs szeles tetejerol es tavi kilatasairol ismert. Mangerton eros kulcsszo Kerry kalandkeresesekhez.",
      ro: "Mangerton se ridica deasupra zonei Killarney. Este un munte clasic din Kerry pentru drumeti. Varful este cunoscut pentru platoul larg si privelistile asupra lacurilor. Mangerton este un cuvant-cheie puternic pentru cautarile de aventura din Kerry."
    },
  descriptionAdvanced: {
      en: "Mangerton Mountain is a prominent peak in the MacGillycuddy's Reeks range in County Kerry, rising to 839 meters. Its most famous geographical feature is the 'Devil's Punch Bowl', an incredibly deep, oval-shaped corrie lake carved near the summit by intense glacial action during the last Ice Age. The mountain provides essential habitat for varied upland flora and fauna. For students, Mangerton is a textbook example of glacial landforms, specifically demonstrating how ice sheets sculpt deep cirques and moraines into solid rock.",

    ro: "Muntele Mangerton, situat în comitatul Kerry la sud de Killarney, este un masiv extins care domină peisajul Parcului Național omonim. Topografia sa se caracterizează prin versanți cu pante mai blânde comparativ cu lanțul învecinat MacGillycuddy's Reeks, dar adăpostește formațiuni hidrologice deosebite. Cel mai notabil element geografic este o depresiune glaciară vastă denumită Bolul Diavolului, care conține un lac de un albastru intens. Muntele oferă o oportunitate rară de a observa tranziția ecologică de la pădurile de stejar de la bază la turbăriile de altitudine. În cadrul disciplinelor de științele naturii, acest ecosistem demonstrează capacitatea ghețarilor pleistoceni de a sculpta dramatic relieful montan."
  },
  factsAdvanced: {
      en: [
      "Mangerton stands at a height of 839 meters (2,753 feet).",
      "The 'Devil's Punch Bowl' is a classic example of a glacial corrie or cirque.",
      "It is one of the most popular hiking mountains within Killarney National Park.",
      "The mountain was the site of a historic battle between local clans in the 13th century."
    ],

    ro: [
      "Vârful principal al Muntelui Mangerton are o altitudine de 839 de metri și prezintă un platou vast, expus și adesea mlăștinos.",
      "Lacul Devil's Punch Bowl a fost principalul furnizor de apă potabilă pentru orașul Killarney timp de peste un secol.",
      "Pe versanții inferioari se găsesc specii rare de ferigi și mușchi, care beneficiază de umiditatea constantă a climatului hiper-oceanic local."
    ]
  },
    facts: {
      en: ["Classic Kerry hiking mountain.", "Above the Killarney area.", "Known for lake views.", "Linked to park scenery.", "Strong adventure keyword."],
      de: ["Klassischer Wanderberg in Kerry.", "Ueber dem Killarney-Gebiet.", "Bekannt fuer Seeblicke.", "Mit Parklandschaft verbunden.", "Starkes Abenteuer-Keyword."],
      hu: ["Klasszikus Kerry turagey.", "Killarney felett emelkedik.", "Tavi kilatairól ismert.", "A park tajahoz kotodik.", "Eros kaland-kulcsszo."],
      ro: ["Munte clasic pentru drumetii in Kerry.", "Deasupra zonei Killarney.", "Cunoscut pentru privelistile asupra lacurilor.", "Legat de peisajul parcului.", "Cuvant-cheie puternic pentru aventura."]
    },
    image: "/geo-images/ireland/mangerton.webp",
  },
  {
    id: "lake-lough-mask",
    type: "lake",
    parent: "ireland",
    coords: [-9.3371, 53.5354],
    name: { de: "Lough Mask", hu: "Lough Mask", ro: "Lough Mask", en: "Lough Mask" },
    description: {
      en: "Lough Mask is a large lake in County Mayo. It is popular for fishing, scenery, and quiet rural drives. The lake adds strong natural balance to west of Ireland content. Lough Mask is useful for lake break searches.",
      de: "Lough Mask ist ein grosser See im County Mayo. Er ist beliebt fuer Angeln, Landschaft und ruhige Landfahrten. Der See bringt starken natuerlichen Ausgleich in Inhalte ueber den Westen Irlands. Lough Mask ist nuetzlich fuer Suchanfragen nach Seeaufenthalten.",
      hu: "A Lough Mask egy nagy to Mayo megyeben. Horgaszatra, tajkepre es csendes videki autozasokra népszeru. A to eros termeszetes egyensulyt ad a nyugat-irorszagi tartalmaknak. Lough Mask hasznos a tavi pihenesek kereseseiben.",
      ro: "Lough Mask este un lac mare in County Mayo. Este popular pentru pescuit, peisaj si drumuri rurale linistite. Lacul adauga un echilibru natural puternic continutului despre vestul Irlandei. Lough Mask este util pentru cautari despre sejururi la lac."
    },
  descriptionAdvanced: {
      en: "Lough Mask is a vast, deeply indented limestone lake located primarily in County Mayo. It sits geologically between the fertile plains to its east and the harsh, mountainous terrain of the Partry Mountains to its west. The lake is connected to the neighboring Lough Corrib by a subterranean drainage system running through porous limestone rock, a fascinating feature of karst landscapes. Its clean, well-oxygenated waters support an internationally important wild brown trout fishery, highlighting the ecological value of pristine freshwater environments.",

    ro: "Lough Mask este un lac de mari dimensiuni situat în vestul Irlandei, poziționat la nord de Lough Corrib, cu care comunică printr-o serie de râuri și rețele carstice subterane. Lacul este faimos pentru malurile sale estice calcaroase, care contrastează puternic cu geologia granitică și stâncoasă a malurilor vestice de la poalele munților Partry. Bogăția biologică a apelor susține o populație remarcabilă de păstrăv brun, făcând din acest bazin acvatic un habitat esențial la nivel național și internațional. Istoria umană a zonei include prezența fortificațiilor medievale, precum Castelul Hag's, ridicat direct pe o insulă în mijlocul apelor. Elevii pot analiza Lough Mask ca pe un model de frontieră geologică naturală și ca sistem hidrologic complex, interconectat prin fenomene carstice."
  },
  factsAdvanced: {
      en: [
      "Lough Mask covers a total area of approximately 83 square kilometers.",
      "It drains into Lough Corrib through a complex network of underground limestone caves.",
      "The eastern shore is relatively flat, while the western shore is dominated by steep mountains.",
      "The ruined 15th-century Tourmakeady Abbey is situated close to its western shores."
    ],

    ro: [
      "Lough Mask acoperă o suprafață de peste 80 de kilometri pătrați și este conectat de Lough Corrib printr-un canal subteran masiv, care trece pe sub satul Cong.",
      "O încercare ambițioasă din secolul al XIX-lea de a construi un canal navigabil la suprafață între cele două lacuri a eșuat spectaculos, apa scurgându-se prin roca poroasă.",
      "Insula pe care se află ruinele Castelului Hag's a servit drept cetate de refugiu în timpul Evului Mediu pentru clanurile din provincia Connacht."
    ]
  },
    facts: {
      en: ["Large lake in County Mayo.", "Popular for fishing trips.", "Known for quiet scenic drives.", "Important inland water landscape.", "Useful lake keyword."],
      de: ["Grosser See im County Mayo.", "Beliebt fuer Angelausfluege.", "Bekannt fuer ruhige Panoramafahrten.", "Wichtige Binnenwasserlandschaft.", "Nuetzliches See-Keyword."],
      hu: ["Nagy to Mayo megyeben.", "Népszeru horgaszati celpont.", "Csendes festoi autozasokra ismert.", "Fontos belvizi taj.", "Hasznos tavi kulcsszo."],
      ro: ["Lac mare in County Mayo.", "Popular pentru iesiri la pescuit.", "Cunoscut pentru drumuri panoramice linistite.", "Peisaj acvatic interior important.", "Cuvant-cheie util pentru lacuri."]
    },
    image: "/geo-images/ireland/lough-mask.webp",
  },
  {
    id: "lake-lough-gill",
    type: "lake",
    parent: "ireland",
    coords: [-8.3898, 54.2813],
    name: { de: "Lough Gill", hu: "Lough Gill", ro: "Lough Gill", en: "Lough Gill" },
    description: {
      en: "Lough Gill is a scenic lake close to Sligo. It is linked to boat trips, river corridors, and literary landscape associations. The lake is compact and easy to include in regional travel planning. Lough Gill is a strong keyword for Sligo scenery content.",
      de: "Lough Gill ist ein landschaftlich reizvoller See nahe Sligo. Er ist mit Bootsfahrten, Flusskorridoren und literarischen Landschaftsbeziehungen verbunden. Der See ist kompakt und leicht in Regionalreisen einzuplanen. Lough Gill ist ein starkes Keyword fuer Sligo-Landschaftsinhalte.",
      hu: "A Lough Gill egy festoi to Sligo kozeleben. Hajokazasokhoz, folyoszakaszokhoz es irodalmi tajkapcsolatokhoz kotodik. A to kompakt es konnyen beillesztheto regionalis tervekbe. Lough Gill eros kulcsszo a Sligo tajkep tartalmakban.",
      ro: "Lough Gill este un lac pitoresc aproape de Sligo. Este legat de plimbari cu barca, coridoare fluviale si asociatii literare de peisaj. Lacul este compact si usor de inclus in planurile regionale de calatorie. Lough Gill este un cuvant-cheie puternic pentru peisajul din Sligo."
    },
  descriptionAdvanced: {
      en: "Lough Gill is a stunningly scenic lake in County Sligo, renowned for its serene beauty and deep literary connections. Measuring about 8 kilometers long, the lake is dotted with roughly twenty small, wooded islands. One of these islands, Innisfree, famously inspired W.B. Yeats's beloved poem 'The Lake Isle of Innisfree'. The lake's surrounding ancient woodlands and calm waters make it a vital habitat for native flora and fauna. It perfectly illustrates how physical geography and natural beauty can profoundly influence national literature.",

    ro: "Lough Gill este un lac pitoresc situat predominant în comitatul Sligo, renumit pentru frumusețea sa serenă și pentru împăduririle bogate de pe maluri. Insulele lacului, în special Innisfree, au dobândit o faimă literară mondială datorită operei poetului W.B. Yeats, fiind considerate simboluri ale păcii și retragerii în natură. Peisajul este definit de micro-climate favorabile care susțin dezvoltarea unor specii rare de arbuști de căpșuni și alte elemente de floră mediteraneană. Ruinele Castelului Parke de pe malul estic oferă dovezi ale prezenței militare și administrative ale coloniștilor plantațiilor din secolul al XVII-lea. Studiul acestui peisaj permite elevilor să evalueze intersecția profundă dintre mediul natural, inspirația artistică și colonizarea istorică a provinciei Connacht."
  },
  factsAdvanced: {
      en: [
      "Lough Gill spans roughly 8 kilometers (5 miles) in length and 2 kilometers (1.2 miles) in width.",
      "It contains approximately 20 small islands, including the famous Innisfree.",
      "The lake drains into the Atlantic Ocean via the short Garavogue River in Sligo town.",
      "The 17th-century Parke's Castle sits prominently on the lake's northern shore."
    ],

    ro: [
      "Lacul are o lungime de aproximativ opt kilometri și se varsă în Oceanul Atlantic prin râul Garavogue, care traversează centrul orașului Sligo.",
      "Poezia Insula din Innisfree a lui W.B. Yeats a transformat lacul dintr-o simplă formațiune geografică într-un element central al renașterii literare irlandeze.",
      "Microclimatul unic din jurul lacului Lough Gill susține unele dintre cele mai nordice populații naturale de arbore de căpșun din lume."
    ]
  },
    facts: {
      en: ["Scenic lake near Sligo.", "Good for boat-trip searches.", "Linked to literary themes.", "Compact and easy to visit.", "Strong northwest keyword."],
      de: ["Landschaftssee nahe Sligo.", "Gut fuer Bootstour-Suchen.", "Mit literarischen Themen verbunden.", "Kompakt und leicht zu besuchen.", "Starkes Nordwest-Keyword."],
      hu: ["Festoi to Sligo kozeleben.", "Jo a hajokazas kereseseihez.", "Irodalmi temakhoz is kotodik.", "Kompakt es konnyen meglatogathato.", "Eros eszaknyugati kulcsszo."],
      ro: ["Lac scenic aproape de Sligo.", "Bun pentru cautari de barci.", "Legat de teme literare.", "Compact si usor de vizitat.", "Cuvant-cheie puternic pentru nord-vest."]
    },
    image: "/geo-images/ireland/lough-gill.webp",
  },
  {
    id: "river-barrow",
    type: "river",
    parent: "ireland",
    coords: [-6.9714, 52.8949],
    name: { de: "River Barrow", hu: "River Barrow", ro: "River Barrow", en: "River Barrow" },
    description: {
      en: "The River Barrow is one of Ireland's great eastern rivers. It runs through fertile country and canal-linked heritage routes. The river is popular with walkers, boaters, and countryside explorers. River Barrow works well for inland waterway content.",
      de: "Der River Barrow ist einer der grossen Fluesse im Osten Irlands. Er fuehrt durch fruchtbares Land und kanaalverbundene Erbrouten. Der Fluss ist bei Wanderern, Bootsfahrern und Landentdeckern beliebt. River Barrow eignet sich gut fuer Inhalte zu Binnenwasserwegen.",
      hu: "A River Barrow Irorszag egyik nagy keleti folyója. Termekeny videken es csatornahoz kotodo oroksegi utvonalakon halad at. A folyó kedvelt a gyaloglok, hajozok es videkfelfedezok koreben. A River Barrow jo belvizi tartalomhoz.",
      ro: "River Barrow este unul dintre marile rauri din estul Irlandei. Curge prin zone fertile si trasee de patrimoniu legate de canale. Raul este popular printre drumeti, navigatori si exploratori rurali. River Barrow functioneaza bine pentru continutul despre cai navigabile interioare."
    },
  descriptionAdvanced: {
      en: "The River Barrow is the second-longest river in Ireland, flowing steadily through the southeastern counties before entering the Celtic Sea at Waterford Harbour. For centuries, the Barrow was a critical commercial artery; a massive navigation project in the 18th century added dozens of weirs and locks to allow heavy barges to transport grain and Guinness stout deeply inland. The river's transformation from a wild waterway to a managed canalized system offers an excellent study in pre-industrial transport logistics and civil engineering.",

    ro: "Râul Barrow, al doilea ca lungime din Irlanda, formează împreună cu Nore și Suir sistemul hidrologic cunoscut sub denumirea de Cele Trei Surori. Izvorând din Munții Slieve Bloom, fluviul traversează câmpiile centrale și estice, facilitând transportul fluvial de marfă încă din Evul Mediu datorită adâncimii și debitului său constant. În secolul al XVIII-lea, a fost dezvoltat un sistem extins de canale și ecluze, Barrow Navigation, care a conectat bazinul său direct cu Marea Irlandei prin Dublin. Dincolo de importanța economică istorică, valea râului este presărată cu fortărețe normande, mănăstiri ruinate și mori abandonate. Elevii pot studia bazinul râului Barrow pentru a înțelege conceptul de rețea hidrografică interconectată și rolul navigației interioare în revoluția industrială incipientă."
  },
  factsAdvanced: {
      en: [
      "The River Barrow flows for 192 kilometers (119 miles).",
      "It is one of the 'Three Sisters' rivers, alongside the Suir and the Nore.",
      "The river's navigation system features 23 locks built to facilitate heavy barge transport.",
      "Its valley was heavily settled by the Normans in the 12th century, dotted with castles and abbeys."
    ],

    ro: [
      "Râul Barrow are o lungime totală de 192 de kilometri, vărsându-se în Oceanul Atlantic prin estuarul Waterford Harbour.",
      "Sistemul de navigație Barrow include peste douăzeci de ecluze istorice, majoritatea fiind construite manual între anii 1759 și 1817.",
      "Malurile râului susțin coridoare ecologice importante, servind drept habitat pentru vidre, rațe sălbatice și pescăruși albaștri."
    ]
  },
    facts: {
      en: ["One of Ireland's major eastern rivers.", "Flows through fertile countryside.", "Linked to canal routes.", "Popular with walkers and boaters.", "Strong inland-waterway keyword."],
      de: ["Einer der grossen Fluesse im Osten Irlands.", "Fliesst durch fruchtbares Land.", "Mit Kanalufern verbunden.", "Beliebt bei Wanderern und Bootsfahrern.", "Starkes Binnenwasserweg-Keyword."],
      hu: ["Irorszag egyik nagy keleti folyója.", "Termekeny videken halad at.", "Csatornautvonalakhoz kotodik.", "Népszeru a gyaloglok es hajozok koreben.", "Eros belvizi kulcsszo."],
      ro: ["Unul dintre marile rauri din estul Irlandei.", "Curge prin peisaj rural fertil.", "Legat de rute de canale.", "Popular printre drumeti si navigatori.", "Cuvant-cheie puternic pentru ape interioare."]
    },
    image: "/geo-images/ireland/river-barrow.webp",
  },
  {
    id: "river-blackwater",
    type: "river",
    parent: "ireland",
    coords: [-7.8467, 52.1248],
    name: { de: "River Blackwater", hu: "River Blackwater", ro: "River Blackwater", en: "River Blackwater" },
    description: {
      en: "The River Blackwater is a major Munster river with a broad scenic presence. It passes through heritage towns, farmland, and attractive fishing stretches. The river is useful for travel content about Waterford and Cork rural routes. River Blackwater is a strong keyword for south Munster landscapes.",
      de: "Der River Blackwater ist ein grosser Munster-Fluss mit breiter landschaftlicher Wirkung. Er fuehrt durch historische Staedte, Farmland und attraktive Angelabschnitte. Der Fluss ist nuetzlich fuer Reiseinhalte zu laendlichen Routen in Waterford und Cork. River Blackwater ist ein starkes Keyword fuer Sued-Munster-Landschaften.",
      hu: "A River Blackwater egy fontos Munster-i folyó, melynek eros tajkepi jelenléte van. Oroksegi varosokon, mezogazdasagi teruleteken es jo horgaszszakaszokon halad at. A folyó hasznos Waterford es Cork videki utvonalairól szolo tartalmakban. A River Blackwater eros kulcsszo Dél-Munster tajaihoz.",
      ro: "River Blackwater este un rau major din Munster, cu prezenta larga peisagistica. Trece prin orase de patrimoniu, terenuri agricole si zone atractive pentru pescuit. Raul este util pentru continutul despre rutele rurale din Waterford si Cork. River Blackwater este un cuvant-cheie puternic pentru peisajele din sudul Munster."
    },
  descriptionAdvanced: {
      en: "The Munster Blackwater is one of Ireland's largest and most visually striking rivers, flowing predominantly eastward across County Cork and Waterford before turning sharply south to enter the sea at Youghal. The river valley, often dubbed the 'Irish Rhine', is lined with heavily forested steep banks and a succession of grand historic estates and castles, such as Lismore Castle. The Blackwater is famous for its exceptional salmon fishing and provides a prime example of a mature river shaping the agricultural and aristocratic history of a region.",

    ro: "Râul Blackwater, numit uneori Rinul Irlandez, este unul dintre cele mai pitorești și importante cursuri de apă din provinciile sudice Munster. Fluviul își are izvoarele în comitatul Kerry, curgând constant spre est înainte de a face un viraj abrupt spre sud pentru a se vărsa în Marea Celtică la Youghal. Datorită navigabilității sale pe porțiuni considerabile, valea sa a fost intens populată și apărată succesiv de elitele normande, fapt reflectat de numeroasele castele și conace grandioase de pe maluri. Astăzi, valea râului este vitală pentru ecosistemul agricol regional și este recunoscută pe plan internațional pentru pescuitul de agrement. Analiza cursului râului oferă elevilor un model clar de interacțiune între topografie, dezvoltare agricolă și amplasarea așezărilor aristocratice strategice."
  },
  factsAdvanced: {
      en: [
      "The River Blackwater is approximately 169 kilometers (105 miles) long.",
      "It is affectionately known as the 'Irish Rhine' due to its scenic, castle-lined valley.",
      "The river makes an abrupt 90-degree turn south near Cappoquin due to a geological fault line.",
      "It is recognized as one of the premier salmon fishing rivers in Europe."
    ],

    ro: [
      "Fluviul are o lungime de 169 de kilometri și drenează un bazin hidrografic extins, reprezentând o resursă esențială pentru sudul Irlandei.",
      "Denumirea râului provine de la apele sale întunecate, colorate natural de sedimentele de turbă din zonele înalte de unde izvorăște.",
      "În secolele trecute, peisajul idilic al văii Blackwater a atras atât de mulți nobili încât densitatea de castele pe kilometru pătrat a fost printre cele mai mari din Europa."
    ]
  },
    facts: {
      en: ["Major river in Munster.", "Passes through heritage towns.", "Important for fishing and scenery.", "Links Waterford and Cork areas.", "Strong south Munster keyword."],
      de: ["Wichtiger Fluss in Munster.", "Fuehrt durch historische Staedte.", "Wichtig fuer Angeln und Landschaft.", "Verbindet Waterford- und Cork-Gebiete.", "Starkes Keyword fuer Sued-Munster."],
      hu: ["Fontos folyó Munsterben.", "Oroksegi varosokon halad at.", "Horgaszat es tajkep szempontjabol jelentős.", "Waterford es Cork teruleteit kotheti.", "Eros del-munsteri kulcsszo."],
      ro: ["Rau important in Munster.", "Trece prin orase de patrimoniu.", "Important pentru pescuit si peisaj.", "Leaga zonele Waterford si Cork.", "Cuvant-cheie puternic pentru sudul Munster."]
    },
    image: "/geo-images/ireland/river-blackwater.webp",
  },
  {
    id: "river-liffey",
    type: "river",
    parent: "ireland",
    coords: [-6.2603, 53.3498],
    name: { de: "River Liffey", hu: "River Liffey", ro: "River Liffey", en: "River Liffey" },
    description: {
      en: "The River Liffey is Dublin's defining river. It runs through the capital and shapes bridges, quays, and riverside identity. The river is central to searches about Dublin sightseeing and city walks. River Liffey is essential for Dublin landscape content.",
      de: "Der River Liffey ist Dublins praegender Fluss. Er verlaeuft durch die Hauptstadt und praegt Bruecken, Quais und die Uferidentitaet. Der Fluss ist zentral fuer Suchanfragen zu Dublin-Sightseeing und Stadtspaziergaengen. River Liffey ist essenziell fuer Dublin-Landschaftsinhalte.",
      hu: "A River Liffey Dublin meghatarozo folyója. Atfut a fo varoson, es megalakitja a hidakat, rakpartokat es a folyoparti identitast. A folyó kozponti szerepet jatszik a dublini nevezetessegek es varosi setak kereseseiben. A River Liffey alapveto a Dublin tajkep tartalomhoz.",
      ro: "River Liffey este raul definitoriu al Dublinului. Curge prin capitala si modeleaza podurile, cheiurile si identitatea de pe malul apei. Raul este central in cautarile despre obiectivele din Dublin si plimbarile urbane. River Liffey este esential pentru continutul despre peisajul Dublinului."
    },
  descriptionAdvanced: {
      en: "The River Liffey is the iconic waterway that flows straight through the center of Dublin, physically and culturally dividing the capital into the Northside and Southside. Rising in the Wicklow Mountains, its relatively short course transitions rapidly from rugged highland peat bogs to a heavily industrialized urban estuary. Over the centuries, the Liffey provided the fresh water necessary for Dublin's massive brewing industry, most notably Guinness. Studying the Liffey offers a perfect microcosm of how a river dictates the growth, industry, and layout of a major capital city.",

    ro: "Râul Liffey este principala arteră hidrografică a capitalei irlandeze, traversând centrul orașului Dublin și vărsându-se în Marea Irlandei. Traseul său de la izvoarele din Munții Wicklow către estuar are forma unei curbe ample, modelând atât peisajul rural al comitatelor Kildare, cât și geografia urbană densă a capitalei. De-a lungul istoriei sale, cursul de apă a asigurat energie pentru morile de cereale, rute de transport esențiale pentru vikingi și normanzi, și apă pentru fabricile de bere legendare. Podurile istorice care unesc malurile nordice și sudice au o valoare arhitecturală inestimabilă și au marcat extinderea succesivă a orașului. Înțelegerea dinamicii râului Liffey ajută elevii să examineze rolul vital al surselor de apă dulce în supraviețuirea, planificarea și industrializarea marilor metropole europene."
  },
  factsAdvanced: {
      en: [
      "The River Liffey is relatively short, flowing for roughly 125 kilometers (78 miles).",
      "It provides approximately 60% of the drinking water for the Greater Dublin Area.",
      "The river is crossed by more than 20 bridges within Dublin city limits, including the Ha'penny Bridge.",
      "It features several hydroelectric dams, such as the Poulaphouca Dam built in the 1940s."
    ],

    ro: [
      "Râul Liffey alimentează centrala hidroelectrică de la Poulaphouca, finalizată în anii 1940 pentru a furniza energie și apă potabilă capitalei.",
      "Podul Ha'penny din Dublin, construit în anul 1816 peste râul Liffey, este probabil cel mai faimos pod pietonal din fontă din țară.",
      "Tradițional, apa din râul Liffey a fost esențială pentru răcirea și procesele de fabricație ale faimoasei fabrici de bere Guinness de la St. James's Gate."
    ]
  },
    facts: {
      en: ["Defines the city of Dublin.", "Runs through the capital centre.", "Shapes quays and bridges.", "Key for Dublin sightseeing.", "Core urban river keyword."],
      de: ["Praegt die Stadt Dublin.", "Fliesst durch das Stadtzentrum.", "Bestimmt Quais und Bruecken.", "Wichtig fuer Dublin-Sightseeing.", "Kern-Keyword fuer den Stadtfluss."],
      hu: ["Dublin arculatazo folyója.", "Atfut a fo varos kozpontjan.", "A rakpartokat es hidakat formálja.", "Fontos a dublini nevezetessegekhez.", "Alapveto varosi folyó kulcsszo."],
      ro: ["Defineste orasul Dublin.", "Curge prin centrul capitalei.", "Modeleaza cheiurile si podurile.", "Cheie pentru obiectivele din Dublin.", "Cuvant-cheie central pentru rau urban."]
    },
    image: "/geo-images/ireland/river-liffey.webp",
  },
  {
    id: "island-inishbofin",
    type: "island",
    parent: "ireland",
    coords: [-10.2000, 53.6200],
    name: { de: "Inishbofin", hu: "Inishbofin", ro: "Inishbofin", en: "Inishbofin" },
    description: {
      en: "Inishbofin is a small island off the Galway and Connemara coast. It is known for quiet beaches, wildlife, and a strong island escape feeling. The island is useful for slow travel and west coast content. Inishbofin is a valuable keyword for island searches.",
      de: "Inishbofin ist eine kleine Insel vor der Galway- und Connemara-Kueste. Sie ist bekannt fuer ruhige Straende, Tierwelt und ein starkes Insel-Fluchtgefuehl. Die Insel ist nuetzlich fuer Slow Travel und Inhalte zur Westkueste. Inishbofin ist ein wertvolles Keyword fuer Inselsuchen.",
      hu: "Inishbofin egy kicsi sziget Galway es Connemara partjainal. Csendes strandjairól, vadvilagarol es eros szigeti menekules hangulatarol ismert. A sziget hasznos a lassu utazas es a nyugati parti tartalmak szamara. Inishbofin ertekes kulcsszo a szigetkeresesekben.",
      ro: "Inishbofin este o mica insula langa coasta Galway si Connemara. Este cunoscuta pentru plajele linistite, fauna salbatica si senzatia puternica de evadare pe insula. Insula este utila pentru slow travel si continutul de pe coasta de vest. Inishbofin este un cuvant-cheie valoros pentru cautarile despre insule."
    },
  descriptionAdvanced: {
      en: "Inishbofin, translating to 'Island of the White Cow', is a rugged, enchanting island situated off the coast of Connemara in County Galway. Accessible only by ferry, the island has a deep history featuring a 7th-century monastery founded by Saint Colmán and a formidable 17th-century star fort built by Oliver Cromwell's forces to guard the harbor. Inishbofin's isolated geography has fostered a unique ecosystem and a resilient local community strongly tied to traditional fishing and farming, making it a pristine study of island socio-economics.",

    ro: "Inishbofin este o insulă pitorească situată în Oceanul Atlantic, la doar câțiva kilometri de coasta comitatului Galway din regiunea Connemara. Numele său se traduce tradițional ca Insula vacii albe, o denumire derivată din legendele locale pline de misticism antic. Insula a fost o comunitate religioasă importantă în secolul al VII-lea, fondată de Sfântul Colmán, și mai târziu a devenit o bază navală strategică și o colonie penală controlată de forțele lui Oliver Cromwell. Izolarea geografică a asigurat conservarea a numeroase specii de păsări marine și a contribuit la păstrarea tehnicilor tradiționale de agricultură de subzistență. Vizitarea sau studierea insulei oferă un context excelent pentru discutarea provocărilor moderne de supraviețuire demografică în comunitățile insulare periferice."
  },
  factsAdvanced: {
      en: [
      "Inishbofin covers an area of roughly 10 square kilometers (3.9 square miles).",
      "The island has a small permanent population of fewer than 200 residents.",
      "Cromwell's star fort, built in 1656, was used to imprison Catholic priests.",
      "It is a vital breeding ground for the elusive and endangered Corncrake bird."
    ],

    ro: [
      "Fortul Cromwell's Barracks, vizibil pe insulă, a fost utilizat în anii 1650 ca lagăr de detenție pentru clericii catolici în așteptarea deportării.",
      "Inishbofin nu a avut o sursă centralizată de electricitate stabilă până la sfârșitul anilor 1970, depinzând anterior de generatoare locale de mici dimensiuni.",
      "Astăzi, populația insulei se stabilizează în jurul a mai puțin de două sute de locuitori permanenți, economia bazându-se majoritar pe turism ecologic și cultural."
    ]
  },
    facts: {
      en: ["Offshore island off Galway.", "Known for quiet beaches.", "Strong slow-travel appeal.", "Useful west coast keyword.", "Good for island searches."],
      de: ["Kleine Insel vor Galway.", "Bekannt fuer ruhige Straende.", "Stark fuer Slow-Travel-Reiz.", "Gutes Westkueste-Keyword.", "Gut fuer Inselsuchen."],
      hu: ["Galway partjainal fekszik.", "Csendes strandjairól ismert.", "Eros lassu-utazasi vonzerő.", "Jo nyugati parti kulcsszo.", "Hasznos szigetkeresesekhez."],
      ro: ["Insula offshore langa Galway.", "Cunoscuta pentru plajele linistite.", "Atractie puternica pentru slow travel.", "Cuvant bun pentru coasta de vest.", "Util pentru cautari despre insule."]
    },
    image: "/geo-images/ireland/inishbofin.webp",
  },
  {
    id: "industry-midleton-distillery",
    type: "industry",
    parent: "ireland",
    coords: [-8.1692, 51.9135],
    name: { de: "Midleton Distillery", hu: "Midleton Distillery", ro: "Midleton Distillery", en: "Midleton Distillery" },
    description: {
      en: "Midleton Distillery is a famous Irish spirits site in County Cork. It is central to whiskey production and visitor experiences. The distillery links industry, heritage, and tasting tourism. Midleton Distillery is ideal for food and drink search traffic.",
      de: "Midleton Distillery ist eine beruehmte irische Spirituosenstaette im County Cork. Sie ist zentral fuer Whiskeyproduktion und Besuchererlebnisse. Die Brennerei verbindet Industrie, Geschichte und Verkostungstourismus. Midleton Distillery ist ideal fuer Food- und Drink-Suchanfragen.",
      hu: "A Midleton Distillery hires ir italgyarto helyszin Cork megyeben. Kozponti szerepet jatszik a whiskeygyartasban es a latogatoi elmenyekben. A fozde az ipart, az orokseget es a kostolasi turizmust koti ossze. A Midleton Distillery idealis etel-ital keresesi forgalomhoz.",
      ro: "Midleton Distillery este un sit celebru pentru bauturi spirtoase irlandeze in County Cork. Este central pentru productia de whiskey si experientele vizitatorilor. Distileria leaga industria, patrimoniul si turismul de degustare. Midleton Distillery este ideala pentru traficul de cautari food and drink."
    },
  descriptionAdvanced: {
      en: "The Midleton Distillery in County Cork is the beating heart of the modern Irish whiskey industry. The original complex, known as the Old Midleton Distillery, operated from 1825 and features the largest pot still in the world. In the 1970s, a massive, state-of-the-art facility was built directly beside it, which now produces nearly all of Ireland's most famous whiskey brands, including Jameson. This site provides an outstanding industrial case study of how traditional craftsmanship can be successfully scaled up using modern manufacturing technology.",

    ro: "Distileria Midleton, amplasată în sudul comitatului Cork, reprezintă o unitate monumentală a patrimoniului industrial irlandez și un pilon central al renașterii whiskey-ului național. Complexul originar a funcționat timp de peste o sută cincizeci de ani, demonstrând tranziția de la morile tradiționale la inovațiile termice și tehnologice ale Revoluției Industriale. La mijlocul anilor 1970, producția s-a mutat într-o fabrică ultra-modernă adiacentă, vechile instalații fiind conservate într-un muzeu de clasă mondială. Această conservare unică a permis păstrarea unor elemente inginerești de excepție, inclusiv cel mai mare alambic de cupru construit vreodată. Studiul distileriei arată elevilor cum convergența resurselor agricole locale și a resurselor de apă curată a generat o industrie de export recunoscută global."
  },
  factsAdvanced: {
      en: [
      "The Old Midleton Distillery houses a massive copper pot still with a capacity of 31,618 gallons.",
      "The modern facility produces over 64 million liters of alcohol every year.",
      "It consolidates the production of several historic brands, including Jameson, Powers, and Redbreast.",
      "The distillery sources the vast majority of its barley directly from local farmers in Munster."
    ],

    ro: [
      "Vechea distilerie Midleton găzduiește un alambic gigantic cu o capacitate de peste 140.000 de litri, cel mai mare instrument de acest tip existent.",
      "Complexul a fost format inițial din fuziunea mai multor companii locale în 1966, sub entitatea Irish Distillers, pentru a salva industria națională de la colaps.",
      "Noua unitate de producție este una dintre cele mai ecologice și eficiente din Europa, gestionând în mod durabil milioane de litri de reziduuri organice anual."
    ]
  },
    facts: {
      en: ["Famous whiskey site in Cork.", "Strong tasting-tourism appeal.", "Linked to premium visitor visits.", "Important Irish industry keyword.", "Well-known spirits destination."],
      de: ["Beruehmte Whiskey-Staette in Cork.", "Starker Reiz fuer Verkostungstourismus.", "Mit Premium-Besucherbesuchen verbunden.", "Wichtiges Industrie-Keyword Irlands.", "Bekanntes Spirituosen-Ziel."],
      hu: ["Híres whiskeyhely Corkban.", "Eros kostolasi turisztikai vonzerő.", "Premium latogatoi elmenyekhez kotodik.", "Fontos ir ipari kulcsszo.", "Ismert italos celpont."],
      ro: ["Sit celebru de whiskey in Cork.", "Atractie puternica pentru turismul de degustare.", "Legata de vizite premium pentru oaspeti.", "Cuvant-cheie important pentru industria irlandeza.", "Destinatie cunoscuta pentru spirtoase."]
    },
    image: "/geo-images/ireland/midleton-distillery.webp",
  },
  {
    id: "industry-teeling-whiskey-distillery",
    type: "industry",
    parent: "ireland",
    coords: [-6.2786, 53.3398],
    name: { de: "Teeling Whiskey Distillery", hu: "Teeling Whiskey Distillery", ro: "Teeling Whiskey Distillery", en: "Teeling Whiskey Distillery" },
    description: {
      en: "Teeling Whiskey Distillery is a major Dublin industry attraction. It supports searches about whiskey tours and tasting rooms. The site adds a contemporary industry angle to Dublin travel content. Teeling Whiskey Distillery is useful for premium city tourism.",
      de: "Teeling Whiskey Distillery ist eine wichtige Industrieattraktion in Dublin. Sie unterstuetzt Suchen nach Whisky-Touren und Verkostungsraeumen. Die Staette bringt einen modernen Industrieaspekt in Dublin-Reiseinhalte. Teeling Whiskey Distillery ist nuetzlich fuer Premium-Stadttourismus.",
      hu: "A Teeling Whiskey Distillery fontos dublini ipari attrakcio. Whiskeyturak es kostoloterem kereseseit tamogatja. A hely kortars ipari nezopontot ad a dublini tartalmakhoz. A Teeling Whiskey Distillery hasznos a premium varosi turizmushoz.",
      ro: "Teeling Whiskey Distillery este o atractie industriala majora din Dublin. Sustine cautarile despre tururi de whiskey si camere de degustare. Situl adauga un unghi industrial contemporan continutului despre Dublin. Teeling Whiskey Distillery este utila pentru turism urban premium."
    },
  descriptionAdvanced: {
      en: "The Teeling Whiskey Distillery, opened in 2015, marked a monumental milestone in Dublin's industrial history as the first new distillery established in the capital in over 125 years. Located in the historic Liberties area, a district once known as the 'Golden Triangle' due to its dense concentration of breweries and distilleries, Teeling represents a massive urban industrial revival. The working distillery offers students a firsthand look at the chemistry of fermentation and the economic impact of reviving heritage industries within an urban environment.",

    ro: "Distileria Teeling din Dublin, deschisă în zona The Liberties, marchează renașterea producției industriale artizanale în centrul istoric al capitalei irlandeze. Înființată în anul 2015, a fost prima distilerie nouă construită în oraș în ultimii o sută douăzeci și cinci de ani, revigorând o tradiție locală care dominase economia cartierului în secolul al XIX-lea. Designul facilității îmbină un flux de producție modern, cu eficiență energetică, într-un spațiu urban extrem de compact, necesitând soluții de inginerie inovatoare pentru gestionarea emisiilor și a siguranței. Această întreprindere demonstrează o renaștere a antreprenoriatului de familie și reconversia economică a unor spații urbane istorice degradate. Elevii pot utiliza acest model pentru a discuta despre dezvoltarea urbană, managementul brandurilor locale și inovația tehnică în sectoarele industriale tradiționale."
  },
  factsAdvanced: {
      en: [
      "Teeling was the first new distillery to open in Dublin since 1889.",
      "The distillery utilizes three traditional copper pot stills, distinctively named after the owner's daughters.",
      "It is located in the Liberties, historically the epicenter of Dublin's brewing and distilling industries.",
      "The facility has won multiple awards for its sustainable and energy-efficient urban production methods."
    ],

    ro: [
      "Zona The Liberties găzduia în secolul al XIX-lea peste 37 de distilerii diferite, fiind considerată centrul mondial al producției de whiskey la acea vreme.",
      "Distileria Teeling este un pionier în maturizarea spiritului folosind butoaie neconvenționale, cum ar fi cele anterior utilizate pentru vinuri albe sau rom.",
      "Producția curentă este axată în special pe metoda distilării triple, o trăsătură specifică și definitorie a whiskey-ului de tip irlandez."
    ]
  },
    facts: {
      en: ["Modern whiskey attraction in Dublin.", "Popular for tasting-room visits.", "Strong city-tourism keyword.", "Adds an industry angle to Dublin.", "Well known among spirit tours."],
      de: ["Moderne Whiskey-Attraktion in Dublin.", "Beliebt fuer Verkostungsbesuche.", "Starkes Keyword fuer Stadttourismus.", "Bringt Industrieaspekt in Dublin.", "Bekannt bei Spirituosen-Touren."],
      hu: ["Modern whiskey attrakcio Dublinban.", "Népszeru kostoloi latogatasokhoz.", "Eros varosi turisztikai kulcsszo.", "Ipari nezopontot ad Dublinhoz.", "Ismert ital-turak kozott."],
      ro: ["Atractie moderna de whiskey in Dublin.", "Populara pentru vizite de degustare.", "Cuvant-cheie puternic pentru city tourism.", "Adauga un unghi industrial Dublinului.", "Cunoscuta in tururile de bauturi spirtoase."]
    },
    image: "/geo-images/ireland/teeling-whiskey-distillery.webp",
  },
  {
    id: "industry-slane-distillery",
    type: "industry",
    parent: "ireland",
    coords: [-6.5441, 53.7098],
    name: { de: "Slane Distillery", hu: "Slane Distillery", ro: "Slane Distillery", en: "Slane Distillery" },
    description: {
      en: "Slane Distillery is a notable modern distilling site in County Meath. It connects rural estate scenery with premium spirits production. The site is useful for branded food and drink content in northeast Ireland. Slane Distillery gives a strong lifestyle angle to Meath searches.",
      de: "Slane Distillery ist eine bemerkenswerte moderne Brennerei im County Meath. Sie verbindet laendliche Gutshoflandschaft mit Premium-Spirituosenproduktion. Die Staette ist nuetzlich fuer markenbezogene Food- und Drink-Inhalte im Nordosten Irlands. Slane Distillery bringt einen starken Lifestyle-Aspekt in Meath-Suchen.",
      hu: "A Slane Distillery figyelemre melto modern fozde County Meathben. A videki birtoktajat kotheti ossze a premium italgyartassal. A hely hasznos markazas etel-ital tartalmakhoz Eszakkelet-Irorszagban. A Slane Distillery eros eletmodos szempontot ad a Meath kereseseihez.",
      ro: "Slane Distillery este un sit modern de distilare remarcabil in County Meath. Leaga peisajul rural al domeniului de productia de bauturi spirtoase premium. Situl este util pentru continutul de brand food and drink din nord-estul Irlandei. Slane Distillery adauga un unghi puternic de lifestyle cautarilor din Meath."
    },
  descriptionAdvanced: {
      en: "Slane Distillery is a cutting-edge whiskey production facility built within the historic 18th-century stables of Slane Castle in County Meath. Located near the River Boyne, the distillery is highly noted for its deep commitment to environmental sustainability. It utilizes the pristine local water supply and barley grown directly on the Slane Castle estate, significantly minimizing its carbon footprint. Slane Distillery is a prime example of eco-friendly industrial innovation successfully integrated with historical architectural preservation.",

    ro: "Distileria Slane este un proiect industrial remarcabil din comitatul Meath, fiind integrată direct în grajdurile și clădirile auxiliare ale domeniului istoric Castelul Slane. Această unitate ilustrează conceptul modern de reabilitare a clădirilor de patrimoniu, adaptând structurile rurale din secolul al XVIII-lea pentru a găzdui echipamente de distilare de înaltă tehnologie. Efortul de restaurare a necesitat standarde inginerești stricte pentru a proteja zidăria originală și pentru a crea o fabrică cu o amprentă de carbon minimă. Abordarea companiei integrează agricultura locală ecologică, utilizând materii prime de pe domeniul castelului și protejând sursa de apă proaspătă din valea râului Boyne. Din perspectivă pedagogică, distileria servește drept studiu de caz perfect pentru conservarea arhitecturală combinată cu practicile economiei circulare și sustenabile."
  },
  factsAdvanced: {
      en: [
      "The distillery was built within the meticulously restored 18th-century horse stables of Slane Castle.",
      "It features a highly sustainable production model, including an on-site anaerobic digester for waste.",
      "The barley used in production is grown extensively on the surrounding 1,500-acre estate.",
      "The facility utilizes a unique triple-casked maturation process to flavor its whiskey."
    ],

    ro: [
      "Distileria aplică o metodă inedită numită maturare în butoaie triple, combinând arome din lemn virgin, butoaie asezonate și butoaie de sherry.",
      "Implementarea unei politici energetice durabile include captarea apelor pluviale și utilizarea reziduurilor agricole pentru a genera energie în cadrul domeniului.",
      "Castelul Slane, unde este situată distileria, este renumit internațional și pentru organizarea unor concerte rock masive încă din anul 1981."
    ]
  },
    facts: {
      en: ["Modern distilling site in Meath.", "Good for branded drinks content.", "Linked to rural estate scenery.", "Strong northeast Ireland keyword.", "Visitor-friendly industry stop."],
      de: ["Moderne Brennerei in Meath.", "Gut fuer Marken-Getraenke-Inhalte.", "Mit laendlicher Gutshoflandschaft verbunden.", "Starkes Keyword fuer den Nordosten.", "Besucherfreundlicher Industriehalt."],
      hu: ["Modern fozde Meath megyeben.", "Jo markazas italos tartalomhoz.", "Videki birtoktajhoz kotodik.", "Eros eszakkeleti kulcsszo.", "Latogato barat ipari megallo."],
      ro: ["Situl modern de distilare in Meath.", "Bun pentru continut de bauturi branduit.", "Legat de peisajul rural al domeniului.", "Cuvant-cheie puternic pentru nord-est.", "Popas industrial prietenos cu vizitatorii."]
    },
    image: "/geo-images/ireland/slane-distillery.webp",
  },
  {
    id: "industry-foxford-woollen-mills",
    type: "industry",
    parent: "ireland",
    coords: [-9.1156, 53.9457],
    name: { de: "Foxford Woollen Mills", hu: "Foxford Woollen Mills", ro: "Foxford Woollen Mills", en: "Foxford Woollen Mills" },
    description: {
      en: "Foxford Woollen Mills is a classic Mayo production site. It combines manufacturing history, retail appeal, and a recognizable west of Ireland brand story. The site is ideal for visitors who want industry with a community feel. Foxford Woollen Mills is useful for craft and shopping searches.",
      de: "Foxford Woollen Mills ist eine klassische Produktionsstaette in Mayo. Sie verbindet Industriegeschichte, Einzelhandelsrelevanz und eine erkennbare Markengeschichte des Westens. Der Ort ist ideal fuer Besucher, die Industrie mit Gemeinschaftscharakter suchen. Foxford Woollen Mills ist nuetzlich fuer Handwerk- und Shopping-Suchen.",
      hu: "A Foxford Woollen Mills klasszikus mayo-i gyartasi helyszin. Az ipartortenetet, a vasarlasi vonzerot es a nyugat-irorszagi marka tortenetet kapcsolja ossze. A hely idealis azoknak, akik az ipart kozossegi hangulattal keresik. A Foxford Woollen Mills hasznos kzmves es vasarlasi keresésekhez.",
      ro: "Foxford Woollen Mills este un sit clasic de productie din Mayo. Imbina istoria industriala, atractia de retail si o poveste recognoscibila de brand din vestul Irlandei. Locul este ideal pentru vizitatorii care vor industrie cu atmosfera de comunitate. Foxford Woollen Mills este util pentru cautari despre artizanat si shopping."
    },
  descriptionAdvanced: {
      en: "The Foxford Woollen Mills, situated on the River Moy in County Mayo, is one of the last working textile mills in Ireland. Founded in 1892 by an incredibly enterprising nun, Mother Agnes Morrogh-Bernard, the mill was established to provide employment and alleviate extreme poverty in the region following the famine. Utilizing the powerful flow of the River Moy for energy, the mill revolutionized local industry. Today, it remains a vibrant testament to social entrepreneurship and the historical importance of water-powered manufacturing.",

    ro: "Morițele de lână Foxford, fondate la sfârșitul secolului al XIX-lea, sunt un element fundamental al patrimoniului textil și industrial din vestul Irlandei, în comitatul Mayo. Înființată de o călugăriță, Maica Agnes Morrogh-Bernard, ca o soluție pentru combaterea sărăciei extreme a populației rurale de după foamete, fabrica a utilizat energia hidraulică impresionantă a râului Moy. Complexul ilustrează evoluția prelucrării textile, de la mașinile cu abur și roți hidraulice la tehnologia modernă automatizată de țesut. Abordarea filantropică și viziunea antreprenorială a fondatoarei au garantat stabilitatea și educația tehnică a mii de muncitori locali pe parcursul mai multor generații. Acest sit industrial constituie un subiect valoros de studiu privind istoria socială, emanciparea femeilor în antreprenoriat și transformarea resurselor brute locale în produse finite."
  },
  factsAdvanced: {
      en: [
      "The mill was founded in 1892 by Mother Agnes, a Sister of Charity, to combat local poverty.",
      "It originally utilized the heavy flow of the River Moy to power its massive industrial looms.",
      "The mill produced over 100,000 blankets for the Irish army during the mid-20th century.",
      "It is recognized globally for its high-quality, traditionally woven tweed and wool products."
    ],

    ro: [
      "La inaugurarea fabricii în anul 1892, capitalul necesar a fost strâns prin donații și eforturi neobosite din partea comunității religioase catolice locale.",
      "Maica Agnes a adus experți în tehnologie textilă tocmai din regiunile puternic industrializate ale Angliei pentru a-i instrui pe muncitorii irlandezi lipsiți de experiență.",
      "Păturile de lână produse la Foxford au devenit un simbol recunoscut al designului tradițional irlandez, menținându-și popularitatea pe piața mondială modernă."
    ]
  },
    facts: {
      en: ["Classic Mayo production site.", "Known for woollen craft heritage.", "Also works as a retail stop.", "Strong west of Ireland brand.", "Useful for craft shopping searches."],
      de: ["Klassische Produktionsstaette in Mayo.", "Bekannt fuer Wollhandwerk.", "Auch als Einkaufsstopp geeignet.", "Starke Marke des Westens.", "Gut fuer Handwerks- und Shopping-Suchen."],
      hu: ["Klasszikus mayo-i gyartasi hely.", "A gyapjus kzmves oroksegrol ismert.", "Vasarlasi megallokent is mukodik.", "Eros nyugat-irorszagi marka.", "Hasznos kzmves vasarlasi keresésekhez."],
      ro: ["Situl clasic de productie din Mayo.", "Cunoscut pentru mostenirea tesaturilor din lana.", "Functioneaza si ca oprire de shopping.", "Brand puternic din vestul Irlandei.", "Util pentru cautari de artizanat si cumparaturi."]
    },
    image: "/geo-images/ireland/foxford-woollen-mills.webp",
  },
  {
    id: "industry-tullamore-dew",
    type: "industry",
    parent: "ireland",
    coords: [-7.4919, 53.2727],
    name: { de: "Tullamore Dew", hu: "Tullamore Dew", ro: "Tullamore Dew", en: "Tullamore Dew" },
    description: {
      en: "Tullamore Dew is one of Ireland's best-known whiskey brands. It links the town to export history and national brand recognition. The site is useful for searches about distilling in the Midlands. Tullamore Dew fits strongly into Irish food and drink tourism content.",
      de: "Tullamore Dew ist eine der bekanntesten Whiskey-Marken Irlands. Es verbindet die Stadt mit Exportgeschichte und nationaler Markenbekanntheit. Die Staette ist nuetzlich fuer Suchanfragen zur Brennerei in den Midlands. Tullamore Dew passt stark in irische Food- und Drink-Tourismusinhalte.",
      hu: "A Tullamore Dew Irorszag egyik legismertebb whiskeymarkaja. A varost exporttortenettel es orszagos markaertelmezessel kapcsolja ossze. A hely hasznos a Midlands fozdekeresesekhez. A Tullamore Dew jol illik az ir etel-ital turizmus tartalmaiba.",
      ro: "Tullamore Dew este unul dintre cele mai cunoscute branduri de whiskey din Irlanda. Leaga orasul de istoria exportului si de recunoasterea nationala a brandului. Locul este util pentru cautari despre distilare in Midlands. Tullamore Dew se potriveste bine in continutul de turism food and drink din Irlanda."
    },
  descriptionAdvanced: {
      en: "The Tullamore D.E.W. Visitor Centre and its massive modern distillery highlight the profound industrial heritage of County Offaly. The original whiskey brand was driven to global fame by Daniel E. Williams (D.E.W.) in the late 19th century, utilizing the Grand Canal to transport goods. After production ceased in the 1950s, the brand made a triumphant return to Tullamore in 2014 with a massive, state-of-the-art distillery. This site perfectly illustrates the cyclical nature of industry, demonstrating both historical decline and modern corporate investment.",

    ro: "Tullamore D.E.W. este unul dintre cele mai prestigioase branduri istorice de whiskey din Irlanda, fondat inițial în 1829 în centrul comercial al orașului Tullamore, pe malurile Marelui Canal. Inițialele din denumire provin de la Daniel E. Williams, un vizionar care a început ca un simplu muncitor și a ajuns să revoluționeze tehnicile de producție ale distileriei la sfârșitul secolului al XIX-lea. Astăzi, o unitate ultramodernă construită la periferia orașului a readus producția acasă, după câteva decenii de relocare națională. Așezarea strategică pe rețeaua istorică de canale a permis distribuția eficientă și globală a produsului finit în timpul perioadei de expansiune industrială. Analiza dezvoltării acestei afaceri este esențială pentru studierea rețelelor de transport din secolele trecute și importanța managementului corporativ inovator în industria grea."
  },
  factsAdvanced: {
      en: [
      "The initials 'D.E.W.' stand for Daniel E. Williams, a legendary general manager of the original distillery.",
      "The original distillery relied heavily on the adjacent Grand Canal for transport and water supply.",
      "A massive new €35 million distillery was opened in Tullamore in 2014, bringing production back to the town.",
      "Tullamore D.E.W. is currently the second-largest selling brand of Irish whiskey globally."
    ],

    ro: [
      "Daniel E. Williams a fost responsabil pentru introducerea electricității și a vehiculelor cu motor în orașul Tullamore cu mult înaintea altor localități regionale.",
      "Noua distilerie, inaugurată în 2014 cu o investiție de peste 35 de milioane de euro, este prima fabrică deschisă în zonă după mai bine de șaizeci de ani.",
      "Inițialele D.E.W. combinate formează jocul de cuvinte Give every man his Dew, un slogan publicitar istoric extrem de eficient."
    ]
  },
    facts: {
      en: ["Major Irish whiskey brand.", "Strong Offaly industry keyword.", "Linked to export history.", "Useful for Midlands searches.", "Well known nationwide."],
      de: ["Wichtige irische Whiskey-Marke.", "Starkes Industrie-Keyword fuer Offaly.", "Mit Exportgeschichte verbunden.", "Gut fuer Midlands-Suchen.", "Landesweit bekannt."],
      hu: ["Nagy ir whiskey marka.", "Eros Offaly ipari kulcsszo.", "Exporttortenethez kotodik.", "Jó midlandszi keresésekhez.", "Orszagszerte ismert."],
      ro: ["Brand major irlandez de whiskey.", "Cuvant-cheie industrial puternic pentru Offaly.", "Legat de istoria exportului.", "Bun pentru cautari in Midlands.", "Cunoscut la nivel national."]
    },
    image: "/geo-images/ireland/tullamore-dew.webp",
  },
  {
    id: "kid-landmark-dublin-zoo",
    type: "kid-landmark",
    parent: "ireland",
    coords: [-6.3006, 53.3554],
    name: { de: "Dublin Zoo", hu: "Dublin Zoo", ro: "Dublin Zoo", en: "Dublin Zoo" },
    description: {
      en: "Dublin Zoo is one of the country's best-known family attractions. It sits in Phoenix Park and offers a classic day-out for visitors of all ages. The zoo is central to Dublin family planning and school-holiday searches. Dublin Zoo is a strong child-focused landmark in the capital.",
      de: "Dublin Zoo ist eine der bekanntesten Familienattraktionen des Landes. Es liegt im Phoenix Park und bietet einen klassischen Tagesausflug fuer Besucher aller Altersgruppen. Der Zoo ist zentral fuer Dublin-Familienplanung und Suchanfragen in den Schulferien. Dublin Zoo ist ein starkes kindorientiertes Wahrzeichen der Hauptstadt.",
      hu: "A Dublin Zoo az orszag egyik legismertebb csaladi attrakcioja. A Phoenix Parkban talalhato, es klasszikus egesznapos programot ad minden korosztalynak. A zoo kozponti szerepet kap a dublini csaladi tervezesben es az iskolaszüneti keresésekben. A Dublin Zoo eros gyerekfokuszu nevezetesseg a fo varosban.",
      ro: "Dublin Zoo este una dintre cele mai cunoscute atractii pentru familii din tara. Se afla in Phoenix Park si ofera o zi clasica pentru vizitatori de toate varstele. Gradina zoologica este centrala pentru planificarea in familie in Dublin si pentru cautarile din vacantele scolare. Dublin Zoo este un reper puternic orientat spre copii in capitala."
    },
  descriptionAdvanced: {
      en: "Dublin Zoo, located within the expansive Phoenix Park, is Ireland's largest family attraction and one of the world's oldest zoos, having opened its doors in 1831. Originally established by the Zoological Society of Ireland, it has evolved from a Victorian menagerie into a leading modern institution for global wildlife conservation and education. Covering 28 hectares, the zoo closely mimics natural habitats, providing crucial breeding programs for endangered species. It is a vital educational resource for students studying biodiversity, zoology, and global habitat loss.",

    ro: "Inaugurată în anul 1831, Grădina Zoologică din Dublin este una dintre cele mai vechi instituții de acest fel din lume și ocupă un domeniu extins de 28 de hectare în interiorul parcului Phoenix. Amenajarea teritorială reproduce ecosisteme globale complexe, oferind habitat natural pentru sute de specii de animale amenințate cu dispariția. Vizitatorii, inclusiv elevii de gimnaziu care studiază biologia și geografia, pot explora zone precum savana africană și pădurile asiatice. Eforturile constante de conservare și programele educaționale transformă această locație dintr-o simplă expoziție într-un veritabil centru de cercetare zoologică. Arhitectura modernă a spațiilor a fost concepută pentru a prioritiza atât bunăstarea animalelor, cât și vizibilitatea optimă pentru publicul larg."
  },
  factsAdvanced: {
      en: [
      "Dublin Zoo was officially opened to the public in 1831, making it the fourth oldest zoo in Europe.",
      "It spans over 28 hectares (69 acres) within Phoenix Park.",
      "The zoo is famously reputed to be where the original MGM studio roaring lion mascot was born.",
      "It participates in over 30 international breeding programs for highly endangered species."
    ],

    ro: [
      "Se întinde pe o suprafață de peste 28 de hectare în Phoenix Park din Dublin.",
      "Găzduiește aproximativ 400 de animale reprezentând peste 100 de specii distincte.",
      "A fost fondată inițial în 1831, având un nucleu format dintr-o donație de 46 de animale de la London Zoo.",
      "Savana africană, una dintre secțiunile sale principale, include un lac care servește drept sursă de apă pentru girafe, rinoceri și struți."
    ]
  },
    facts: {
      en: ["Top family attraction in Dublin.", "Located in Phoenix Park.", "Popular for school-holiday visits.", "Classic day-out for all ages.", "Strong kid-friendly keyword."],
      de: ["Top-Familienattraktion in Dublin.", "Im Phoenix Park gelegen.", "Beliebt in den Schulferien.", "Klassischer Tagesausflug fuer alle.", "Starkes kinderfreundliches Keyword."],
      hu: ["Top csaladi attrakcio Dublinban.", "A Phoenix Parkban van.", "Népszeru iskolaszüneti latogatasra.", "Klasszikus egesznapos program.", "Eros gyerekbarat kulcsszo."],
      ro: ["Atractie de top pentru familii in Dublin.", "Situata in Phoenix Park.", "Populara in vacantele scolare.", "O zi clasica pentru toate varstele.", "Cuvant-cheie puternic pentru copii."]
    },
    image: "/geo-images/ireland/dublin-zoo.webp",
  },
  {
    id: "kid-landmark-fota-wildlife-park",
    type: "kid-landmark",
    parent: "ireland",
    coords: [-8.3169, 51.8955],
    name: { de: "Fota Wildlife Park", hu: "Fota Wildlife Park", ro: "Fota Wildlife Park", en: "Fota Wildlife Park" },
    description: {
      en: "Fota Wildlife Park is a major family attraction near Cork. It gives visitors open-space wildlife viewing in a relaxed island setting. The park works well for holiday itineraries and kid days out. Fota Wildlife Park is one of the top child-friendly landmarks in Ireland.",
      de: "Fota Wildlife Park ist eine grosse Familienattraktion nahe Cork. Er bietet offene Tierbeobachtung in entspannter Inselumgebung. Der Park eignet sich gut fuer Urlaubsrouten und Kindertage. Fota Wildlife Park ist eines der besten kinderfreundlichen Wahrzeichen Irlands.",
      hu: "A Fota Wildlife Park fontos csaladi attrakcio Cork kozeleben. Nyitott teru vadvilag-nezest ad nyugodt szigeti kornyezetben. A park jo nyaralasi utvonalakhoz es gyerekprogramokhoz. A Fota Wildlife Park Irorszag egyik legjobb gyerekbarat nevezetessege.",
      ro: "Fota Wildlife Park este o atractie majora pentru familii langa Cork. Ofera observarea faunei in spatiu deschis, intr-un cadru relaxat de insula. Parcul functioneaza bine pentru itinerarii de vacanta si zile pentru copii. Fota Wildlife Park este unul dintre cele mai bune repere prietenoase cu copiii din Irlanda."
    },
  descriptionAdvanced: {
      en: "Fota Wildlife Park is a remarkable 100-acre zoological park located on Fota Island in County Cork. Unlike traditional zoos, Fota is designed as an open-range environment where many species, such as lemurs, kangaroos, and free-roaming peacocks, interact directly with visitors. Opened in 1983, the park heavily prioritizes the conservation of highly endangered species, most notably the Cheetah. Fota's unique layout provides students with an immersive experience in animal behavior and modern, barrier-free zoological design.",

    ro: "Parcul Wildlife Fota, situat pe o insulă din comitatul Cork, oferă un model de conservare în care animalele se pot mișca liber pe spații întinse. Înființat în 1983 sub umbrela Societății Zoologice din Irlanda, acest domeniu de 40 de hectare a fost integrat în curriculumul educațional pentru a demonstra dinamica ecosistemelor. Spre deosebire de o grădină zoologică tradițională, aici numeroase specii de mamifere și păsări interacționează într-un mediu neîngrădit care simulează habitatele naturale. Peisajul insulei este împădurit cu specii rare de arbori, completând perfect secțiunile dedicate faunei din Asia și Africa. Tinerii cercetători au ocazia unică de a observa direct lanțurile trofice și comportamentul animalelor sălbatice fără bariere vizuale restrictive."
  },
  factsAdvanced: {
      en: [
      "Fota Wildlife Park spans 100 acres on a scenic island in Cork Harbour.",
      "It was opened to the public in 1983 as a joint project with the Zoological Society of Ireland.",
      "The park is globally renowned for its highly successful cheetah breeding program, raising over 200 cubs.",
      "Many non-predatory animals, such as lemurs and wallabies, roam freely among the visitors."
    ],

    ro: [
      "Acoperă un perimetru de aproximativ 40 de hectare pe insula Fota, la est de orașul Cork.",
      "Atrage anual peste 460.000 de vizitatori, fiind una dintre atracțiile turistice majore din sudul Irlandei.",
      "Sanctuarul a fost fondat în 1983 și se concentrează puternic pe reproducerea în captivitate a speciilor amenințate.",
      "Aproximativ 30 de specii de mamifere și zeci de specii de păsări trăiesc în sistem deschis în cadrul parcului."
    ]
  },
    facts: {
      en: ["Major family attraction near Cork.", "Open-space wildlife viewing.", "Relaxed island setting.", "Great for holiday itineraries.", "Top southeast kid keyword."],
      de: ["Grosse Familienattraktion nahe Cork.", "Tierbeobachtung im offenen Raum.", "Entspannte Inselumgebung.", "Gut fuer Urlaubsrouten.", "Top-Keyword fuer Kinder im Suedosten."],
      hu: ["Fontos csaladi attrakcio Cork mellett.", "Nyitott teru vadvilag-nezes.", "Nyugodt szigeti kornyezet.", "Jo nyaralasi utvonalakhoz.", "Top delkeleti gyerek kulcsszo."],
      ro: ["Atractie majora pentru familii langa Cork.", "Observare a faunei in spatiu deschis.", "Cadru relaxat pe insula.", "Excelent pentru itinerarii de vacanta.", "Cuvant de top pentru copii in sud-est."]
    },
    image: "/geo-images/ireland/fota-wildlife-park.webp",
  },
  {
    id: "kid-landmark-emerald-park",
    type: "kid-landmark",
    parent: "ireland",
    coords: [-6.4572, 53.5076],
    name: { de: "Emerald Park", hu: "Emerald Park", ro: "Emerald Park", en: "Emerald Park" },
    description: {
      en: "Emerald Park is one of Ireland's most popular amusement-style attractions for families. It combines rides, play areas, and a full day-out format. The park is especially useful for Leinster family searches. Emerald Park is a major keyword for fun-focused Ireland itineraries.",
      de: "Emerald Park ist eine der beliebtesten Freizeitattraktionen Irlands fuer Familien. Er verbindet Fahrgeschaefte, Spielbereiche und ein ganztägiges Tagesformat. Der Park ist besonders nuetzlich fuer Familien-Suchen in Leinster. Emerald Park ist ein wichtiges Keyword fuer spaassorientierte Irland-Routen.",
      hu: "Az Emerald Park Irorszag egyik legnepszerubb vidamparki jellegu attrakcioja csaladoknak. Jatekokat, jatszoteruleteket es egesznapos programot egyesit. A park kulonosen hasznos Leinster csaladi kereseseihez. Az Emerald Park fontos kulcsszo a szorakozasfokuszu irorszagi utvonalakhoz.",
      ro: "Emerald Park este una dintre cele mai populare atractii de tip parc de distractii din Irlanda pentru familii. Combina atractii, zone de joaca si un format de zi intreaga. Parcul este deosebit de util pentru cautarile de familie din Leinster. Emerald Park este un cuvant-cheie major pentru itinerariile distractive din Irlanda."
    },
  descriptionAdvanced: {
      en: "Emerald Park, formerly known as Tayto Park, is Ireland's premier theme park and zoo, located in County Meath. Originally centered around the famous Irish crisp brand, the park expanded rapidly into a massive entertainment complex. It features Cú Chulainn, Europe's largest wooden rollercoaster with an inversion, demonstrating extreme structural engineering. The park also maintains an impressive zoological collection, heavily focusing on big cats and birds of prey. It provides a fascinating case study in how corporate branding can successfully build large-scale regional tourism infrastructure.",

    ro: "Parcul Emerald, cunoscut anterior drept Tayto Park, a devenit un nucleu important de divertisment și educație biologică în localitatea Ashbourne. Parcul integrează un complex impresionant de montagne russe-uri cu o grădină zoologică diversificată care prezintă faună din mai multe continente. Studenții din ciclul gimnazial pot analiza aici principiile fizicii în cadrul structurilor de agrement din lemn, dar și diversitatea biologică în zona zoologică. Structura tematică a parcului include replici ale unor peisaje istorice și facilități moderne de observare. Tranziția la noul nume a coincis cu o extindere a eforturilor de sustenabilitate ecologică și a programelor de ocrotire a animalelor."
  },
  factsAdvanced: {
      en: [
      "Emerald Park is home to the Cú Chulainn, Ireland's only wooden rollercoaster.",
      "The park covers over 55 acres of land in the Meath countryside.",
      "It features a dedicated zoo with over 250 animals, including Amur tigers and leopards.",
      "The park attracts well over 700,000 visitors annually, making it one of Ireland's top attractions."
    ],

    ro: [
      "Găzduiește singurul montagne russe din lemn cu inversiune din Europa, denumit Cú Chulainn.",
      "Zona zoologică adăpostește peste 250 de animale, incluzând feline mari, primate și păsări de pradă.",
      "S-a deschis oficial publicului în luna noiembrie 2010 și ocupă o suprafață de 22 de hectare.",
      "Parcul dispune de o replică la scară a unui sat tradițional amerindian, utilizat în scopuri pedagogice."
    ]
  },
    facts: {
      en: ["Popular family amusement park.", "Strong Leinster day-trip appeal.", "Includes rides and play areas.", "Good for full-day planning.", "Major fun-focused keyword."],
      de: ["Beliebter Familien-Freizeitpark.", "Starke Tagesausflugswirkung in Leinster.", "Mit Fahrgeschaeften und Spielzonen.", "Gut fuer ganztägige Planung.", "Wichtiges Fun-Keyword."],
      hu: ["Népszeru csaladi vidampark.", "Eros Leinster egynapos vonzerő.", "Jatekokat es jatszoteruleteket tartalmaz.", "Jo egesznapos tervezeshez.", "Fontos szorakoztato kulcsszo."],
      ro: ["Parc de distractii popular pentru familii.", "Atractie puternica de excursie de o zi in Leinster.", "Include atractii si zone de joaca.", "Bun pentru planificare pe zi intreaga.", "Cuvant-cheie major pentru distractie."]
    },
    image: "/geo-images/ireland/emerald-park.webp",
  },
  {
    id: "kid-landmark-lough-key-adventure-park",
    type: "kid-landmark",
    parent: "ireland",
    coords: [-8.1470, 53.9993],
    name: { de: "Lough Key Adventure Park", hu: "Lough Key Adventure Park", ro: "Lough Key Adventure Park", en: "Lough Key Adventure Park" },
    description: {
      en: "Lough Key Adventure Park is a family-focused outdoor attraction in Roscommon. It combines treetop activity, lakeside scenery, and adventure-style play. The park works well for west of Ireland family breaks and school-holiday planning. Lough Key Adventure Park is a strong kid-friendly landmark keyword.",
      de: "Lough Key Adventure Park ist eine familienorientierte Outdoor-Attraktion in Roscommon. Er verbindet Aktivitaeten in den Baumwipfeln, Seelandschaft und abenteuerorientiertes Spielen. Der Park eignet sich gut fuer Familienpausen im Westen Irlands und fuer Schulferienplanung. Lough Key Adventure Park ist ein starkes kinderfreundliches Landmark-Keyword.",
      hu: "A Lough Key Adventure Park egy csaladkozpontu szabadtéri attrakcio Roscommon megyeben. Fakoneto aktivitast, tavi tajat es kalandos jatekot egyesit. A park jol mukodik nyugat-irorszagi csaladi pihenésekhez es iskolaszüneti tervezeshez. A Lough Key Adventure Park eros gyerekbarat landmark kulcsszo.",
      ro: "Lough Key Adventure Park este o atractie outdoor axata pe familie in Roscommon. Combina activitati in copaci, peisaj de lac si joaca in stil aventura. Parcul este potrivit pentru escapade in familie in vestul Irlandei si pentru planificarea vacantei scolare. Lough Key Adventure Park este un cuvant-cheie puternic pentru reperele prietenoase cu copiii."
    },
  descriptionAdvanced: {
      en: "Lough Key Forest and Adventure Park, situated in County Roscommon, is a massive outdoor recreational facility centered around a spectacularly scenic lake and ancient woodland. The park was originally a massive private estate before being developed for public eco-tourism. It features the 'Boda Borg' challenge course, a towering canopy walkway, and extensive zip-lining facilities. Lough Key serves as a premier example of how historically enclosed estates can be successfully transformed into sustainable, high-activity eco-tourism destinations.",

    ro: "Situat în comitatul Roscommon, Parcul de Aventură Lough Key valorifică un peisaj glaciar impresionant ce cuprinde lacuri, insule și păduri de foioase. Baza istorică a sitului este domeniul Rockingham, un fost teren aristocratic ale cărui ruine încă stau mărturie istoriei secolului al XIX-lea. Astăzi, parcul forestier funcționează ca un imens laborator în aer liber unde elevii pot studia formațiunile geomorfologice și ecosistemele de apă dulce. Vizitatorii navighează printr-o rețea de trasee suspendate la nivelul coroanelor arborilor și explorează tuneluri subterane rămase din arhitectura originală a conacului. Această îmbinare de explorare naturală și descoperire a patrimoniului arhitectural oferă o perspectivă completă asupra geografiei regiunii."
  },
  factsAdvanced: {
      en: [
      "The park covers approximately 350 hectares of ancient woodland and lakeshore.",
      "It features Ireland's first purpose-built treetop canopy walk.",
      "The lake contains several historic islands, including Castle Island, which holds medieval ruins.",
      "The estate was formerly the primary residence of the powerful King family for nearly 400 years."
    ],

    ro: [
      "Domeniul forestier și lacustru se întinde pe o suprafață vastă de 350 de hectare.",
      "Include singurul traseu suspendat printre coroanele arborilor din Irlanda deschis pe toată durata anului.",
      "Insula Castle, vizibilă din parc, adăpostește ruinele unui castel menționat în anale încă din anul 1184.",
      "Pe teritoriul parcului supraviețuiesc structuri de grădină specifice secolului XIX, incluzând o capelă și o fântână de gheață."
    ]
  },
    facts: {
      en: ["Family-focused outdoor attraction.", "Set by a scenic lake.", "Good for older kids and parents.", "Popular for school-holiday planning.", "Strong west Ireland kid keyword."],
      de: ["Familienorientierte Outdoor-Attraktion.", "An einem landschaftlichen See gelegen.", "Gut fuer aeltere Kinder und Eltern.", "Beliebt fuer Schulferienplanung.", "Starkes Kinder-Keyword fuer den Westen."],
      hu: ["Csaladkozpontu szabadtéri attrakcio.", "Festoi to mellett fekszik.", "Nagyobb gyerekeknek es szuloknek jo.", "Népszeru iskolaszüneti tervezeshez.", "Eros nyugat-irorszagi gyerek kulcsszo."],
      ro: ["Atractie outdoor orientata spre familie.", "Asezata langa un lac pitoresc.", "Buna pentru copii mai mari si parinti.", "Populara pentru planificarea vacantei scolare.", "Cuvant-cheie puternic pentru copii in vestul Irlandei."]
    },
    image: "/geo-images/ireland/lough-key-adventure-park.webp",
  }
];

export const irelandAllPoi: POI[] = [irelandCountry, ...irelandRegions, ...irelandCities, ...irelandCulture, ...irelandNature, ...poiExtraIrelandAnimal, ...poiExtraIrelandCities, ...poiExtraIrelandOther];
