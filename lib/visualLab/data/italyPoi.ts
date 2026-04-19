import type { POI } from "./poi";

export const italyCountry: POI = {
  id: "italy",
  type: "country",
  parent: "EU",
  coords: [12.5674, 41.8719],
  name: { de: "Italien", hu: "Olaszország", ro: "Italia", en: "Italy" },
  description: {
    de: "Italien ist ein Land im Süden Europas, das für seine reiche Geschichte, Kunst und Küche bekannt ist.",
    hu: "Olaszország dél-európai ország, amely gazdag történelméről, művészetéről és konyhájáról ismert.",
    ro: "Italia este o țară din sudul Europei, cunoscută pentru istoria sa bogată, artă și bucătărie.",
    en: "Italy is a country in southern Europe known for its rich history, art, and cuisine.",
  },
  facts: {
    de: ["Hauptstadt ist Rom.", "Heimat des Römischen Reiches.", "Bekannt für Pizza und Pasta.", "Besitzt die meisten UNESCO-Welterbestätten."],
    hu: ["Fővárosa Róma.", "A Római Birodalom hazája.", "Híres a pizzáról és a tésztáról.", "Itt található a legtöbb UNESCO világörökségi helyszín."],
    ro: ["Capitala este Roma.", "Patria Imperiului Roman.", "Cunoscută pentru pizza și paste.", "Deține cele mai multe situri din patrimoniul mondial UNESCO."],
    en: ["Capital is Rome.", "Home of the Roman Empire.", "Famous for pizza and pasta.", "Has the most UNESCO World Heritage sites."],
  },
  image: "/geo-images/italy/italy-main.webp",
};

export const italyRegions: POI[] = [
  {
    id: "reg-lombardia",
    type: "region",
    parent: "italy",
    coords: [9.19, 45.46],
    name: { de: "Lombardei", hu: "Lombardia", ro: "Lombardia", en: "Lombardy" },
    description: {
      de: "Die Lombardei ist die bevölkerungsreichste und wohlhabendste Region Italiens.",
      hu: "Lombardia Olaszország legnépesebb és leggazdagabb régiója.",
      ro: "Lombardia este cea mai populată și bogată regiune a Italiei.",
      en: "Lombardy is the most populous and wealthiest region of Italy.",
    },
    facts: {
      de: ["Hauptstadt ist Mailand.", "Wirtschaftliches Zentrum Italiens.", "Heimat der oberitalienischen Seen.", "Bekannt für Mode und Design."],
      hu: ["Székhelye Milánó.", "Olaszország gazdasági központja.", "Itt találhatók az észak-olasz tavak.", "Híres a divatról és a dizájnról."],
      ro: ["Capitala este Milano.", "Centrul economic al Italiei.", "Găzduiește lacurile din nordul Italiei.", "Cunoscută pentru modă și design."],
      en: ["Capital is Milan.", "Economic center of Italy.", "Home to the northern Italian lakes.", "Famous for fashion and design."],
    },
    image: "/geo-images/italy/lombardia.webp",
  },
  {
    id: "reg-toscana",
    type: "region",
    parent: "italy",
    coords: [11.25, 43.77],
    name: { de: "Toskana", hu: "Toszkána", ro: "Toscana", en: "Tuscany" },
    description: {
      de: "Die Toskana ist weltberühmt für ihre Landschaften, Kunstgeschichte und Weine.",
      hu: "Toszkána világhírű tájairól, művészettörténetéről és borairól.",
      ro: "Toscana este faimoasă în întreaga lume pentru peisajele sale, istoria artei și vinuri.",
      en: "Tuscany is world-famous for its landscapes, art history, and wines.",
    },
    facts: {
      de: ["Hauptstadt ist Florenz.", "Geburtsort der Renaissance.", "Bekannt für den Chianti-Wein.", "Heimat des Schiefen Turms von Pisa."],
      hu: ["Székhelye Firenze.", "A reneszánsz szülőhelye.", "Híres a Chianti borról.", "Itt található a pisai ferde torony."],
      ro: ["Capitala este Florența.", "Locul de naștere al Renașterii.", "Cunoscută pentru vinul Chianti.", "Găzduiește Turnul Înclinat din Pisa."],
      en: ["Capital is Florence.", "Birthplace of the Renaissance.", "Famous for Chianti wine.", "Home to the Leaning Tower of Pisa."],
    },
    image: "/geo-images/italy/toscana.webp",
  },
  {
    id: "reg-sicilia",
    type: "region",
    parent: "italy",
    coords: [14.0, 37.5],
    name: { de: "Sizilien", hu: "Szicília", ro: "Sicilia", en: "Sicily" },
    description: {
      de: "Sizilien ist die größte Insel im Mittelmeer und reich an antiken Ruinen.",
      hu: "Szicília a Földközi-tenger legnagyobb szigete, gazdag ókori romokban.",
      ro: "Sicilia este cea mai mare insulă din Marea Mediterană și este bogată în ruine antice.",
      en: "Sicily is the largest island in the Mediterranean and rich in ancient ruins.",
    },
    facts: {
      de: ["Hauptstadt ist Palermo.", "Heimat des Vulkans Ätna.", "Bekannt für Arancini und Cannoli.", "Besitzt beeindruckende griechische Tempel."],
      hu: ["Székhelye Palermo.", "Az Etna vulkán hazája.", "Híres az aranciniről és a cannoliról.", "Lenyűgöző görög templomokkal rendelkezik."],
      ro: ["Capitala este Palermo.", "Găzduiește vulcanul Etna.", "Cunoscută pentru arancini și cannoli.", "Deține temple grecești impresionante."],
      en: ["Capital is Palermo.", "Home to Mount Etna.", "Famous for arancini and cannoli.", "Has impressive Greek temples."],
    },
    image: "/geo-images/italy/sicilia.webp",
  },
  {
    id: "reg-veneto",
    type: "region",
    parent: "italy",
    coords: [12.33, 45.43],
    name: { de: "Venetien", hu: "Veneto", ro: "Veneto", en: "Veneto" },
    description: {
      de: "Venetien ist eine Region im Nordosten Italiens, die von den Dolomiten bis zur Adria reicht.",
      hu: "Veneto északkelet-olaszországi régió, amely a Dolomitoktól az Adriai-tengerig terjed.",
      ro: "Veneto este o regiune din nord-estul Italiei, care se întinde de la Dolomiți până la Marea Adriatică.",
      en: "Veneto is a region in northeastern Italy, stretching from the Dolomites to the Adriatic Sea.",
    },
    facts: {
      de: ["Hauptstadt ist Venedig.", "Bekannt für die Lagunenstadt.", "Heimat des Prosecco.", "Besitzt die Arena von Verona."],
      hu: ["Székhelye Velence.", "A lagúnák városáról híres.", "A Prosecco hazája.", "Itt található a veronai Aréna."],
      ro: ["Capitala este Veneția.", "Cunoscută pentru orașul lagunelor.", "Patria vinului Prosecco.", "Deține Arena din Verona."],
      en: ["Capital is Venice.", "Famous for the city of lagoons.", "Home of Prosecco.", "Has the Verona Arena."],
    },
    image: "/geo-images/italy/veneto.webp",
  },
  {
    id: "reg-lazio",
    type: "region",
    parent: "italy",
    coords: [12.49, 41.89],
    name: { de: "Latium", hu: "Lazio", ro: "Lazio", en: "Lazio" },
    description: {
      de: "Latium ist die Region in Mittelitalien, in der sich die Hauptstadt Rom befindet.",
      hu: "Lazio közép-olaszországi régió, ahol a főváros, Róma található.",
      ro: "Lazio este regiunea din centrul Italiei unde se află capitala, Roma.",
      en: "Lazio is the region in central Italy where the capital, Rome, is located.",
    },
    facts: {
      de: ["Hauptstadt ist Rom.", "Zentrum des antiken Römischen Reiches.", "Beherbergt den Vatikanstadt.", "Bekannt für die Via Appia."],
      hu: ["Székhelye Róma.", "Az ókori Római Birodalom központja.", "Itt található a Vatikán.", "Híres a Via Appiáról."],
      ro: ["Capitala este Roma.", "Centrul anticului Imperiu Roman.", "Găzduiește Vaticanul.", "Cunoscută pentru Via Appia."],
      en: ["Capital is Rome.", "Center of the ancient Roman Empire.", "Houses Vatican City.", "Famous for the Appian Way."],
    },
    image: "/geo-images/italy/lazio.webp",
  },
];

export const italyCities: POI[] = [
  {
    id: "rome",
    type: "city",
    parent: "reg-lazio",
    coords: [12.4964, 41.9028],
    name: { de: "Rom", hu: "Róma", ro: "Roma", en: "Rome" },
    description: {
      de: "Rom, die 'Ewige Stadt', ist die Hauptstadt Italiens und reich an antiker Geschichte.",
      hu: "Róma, az 'Örök Város', Olaszország fővárosa és gazdag az ókori történelemben.",
      ro: "Roma, 'Orașul Etern', este capitala Italiei și este bogată în istorie antică.",
      en: "Rome, the 'Eternal City', is the capital of Italy and rich in ancient history.",
    },
    facts: {
      de: ["Größte Stadt Italiens.", "Heimat des Kolosseums.", "Umschließt den Vatikan.", "Bekannt für den Trevi-Brunnen."],
      hu: ["Olaszország legnagyobb városa.", "A Kolosszeum hazája.", "Körülöleli a Vatikánt.", "Híres a Trevi-kútról."],
      ro: ["Cel mai mare oraș din Italia.", "Găzduiește Colosseumul.", "Înconjoară Vaticanul.", "Cunoscută pentru Fontana di Trevi."],
      en: ["Largest city in Italy.", "Home to the Colosseum.", "Encloses the Vatican.", "Famous for the Trevi Fountain."],
    },
    image: "/geo-images/italy/rome.webp",
  },
  {
    id: "milan",
    type: "city",
    parent: "reg-lombardia",
    coords: [9.19, 45.4642],
    name: { de: "Mailand", hu: "Milánó", ro: "Milano", en: "Milan" },
    description: {
      de: "Mailand ist eine Weltstadt der Mode und des Designs sowie ein wichtiges Finanzzentrum.",
      hu: "Milánó a divat és a dizájn világvárosa, valamint fontos pénzügyi központ.",
      ro: "Milano este o metropolă mondială a modei și designului, precum și un important centru financiar.",
      en: "Milan is a global city of fashion and design, as well as an important financial center.",
    },
    facts: {
      de: ["Berühmt für den Mailänder Dom.", "Heimat des Abendmahls von Da Vinci.", "Zentrum der italienischen Mode.", "Besitzt das Opernhaus La Scala."],
      hu: ["Híres a milánói dómról.", "Itt található Da Vinci Az utolsó vacsora című műve.", "Az olasz divat központja.", "Itt található a La Scala operaház."],
      ro: ["Faimos pentru Domul din Milano.", "Găzduiește 'Cina cea de Taină' a lui Da Vinci.", "Centrul modei italiene.", "Deține opera La Scala."],
      en: ["Famous for the Milan Cathedral.", "Home to Da Vinci's Last Supper.", "Center of Italian fashion.", "Has the La Scala opera house."],
    },
    image: "/geo-images/italy/milan.webp",
  },
  {
    id: "venice",
    type: "city",
    parent: "reg-veneto",
    coords: [12.3155, 45.4408],
    name: { de: "Venedig", hu: "Velence", ro: "Veneția", en: "Venice" },
    description: {
      de: "Venedig ist eine einzigartige Stadt, die auf über 100 kleinen Inseln in einer Lagune erbaut wurde.",
      hu: "Velence egyedülálló város, amely több mint 100 kis szigetre épült egy lagúnában.",
      ro: "Veneția este un oraș unic, construit pe peste 100 de insule mici într-o lagună.",
      en: "Venice is a unique city built on more than 100 small islands in a lagoon.",
    },
    facts: {
      de: ["Bekannt für seine Kanäle und Gondeln.", "Autofreie Stadt.", "Heimat des Markusplatzes.", "Berühmt für den Karneval."],
      hu: ["Csatornáiról és gondoláiról ismert.", "Autómentes város.", "Itt található a Szent Márk tér.", "Híres a karneválról."],
      ro: ["Cunoscută pentru canalele și gondolele sale.", "Oraș fără mașini.", "Găzduiește Piața San Marco.", "Faimoasă pentru carnaval."],
      en: ["Known for its canals and gondolas.", "Car-free city.", "Home to St. Mark's Square.", "Famous for the Carnival."],
    },
    image: "/geo-images/italy/venice.webp",
  },
  {
    id: "florence",
    type: "city",
    parent: "reg-toscana",
    coords: [11.2558, 43.7696],
    name: { de: "Florenz", hu: "Firenze", ro: "Florența", en: "Florence" },
    description: {
      de: "Florenz gilt als Wiege der Renaissance und beherbergt zahlreiche Kunstmeisterwerke.",
      hu: "Firenze a reneszánsz bölcsőjeként ismert, és számos művészeti remekműnek ad otthont.",
      ro: "Florența este considerată leagănul Renașterii și găzduiește numeroase capodopere de artă.",
      en: "Florence is considered the cradle of the Renaissance and home to many art masterpieces.",
    },
    facts: {
      de: ["Heimat der Uffizien.", "Bekannt für den Dom von Florenz.", "Besitzt Michelangelos David.", "Wurde von der Familie Medici geprägt."],
      hu: ["Az Uffizi képtár hazája.", "Híres a firenzei dómról.", "Itt található Michelangelo Dávid-szobra.", "A Medici család határozta meg a város képét."],
      ro: ["Găzduiește Galeria Uffizi.", "Cunoscută pentru Domul din Florența.", "Deține statuia David a lui Michelangelo.", "A fost modelată de familia Medici."],
      en: ["Home to the Uffizi Gallery.", "Famous for the Florence Cathedral.", "Has Michelangelo's David.", "Was shaped by the Medici family."],
    },
    image: "/geo-images/italy/florence.webp",
  },
  {
    id: "naples",
    type: "city",
    parent: "reg-campania",
    coords: [14.2681, 40.8518],
    name: { de: "Neapel", hu: "Nápoly", ro: "Napoli", en: "Naples" },
    description: {
      de: "Neapel ist eine lebendige Stadt am Fuße des Vesuvs, bekannt für ihre Geschichte und Kulinarik.",
      hu: "Nápoly egy élettel teli város a Vezúv lábánál, híres történelméről és gasztronómiájáról.",
      ro: "Napoli este un oraș vibrant la poalele Vezuviului, cunoscut pentru istoria și gastronomia sa.",
      en: "Naples is a vibrant city at the foot of Mount Vesuvius, known for its history and culinary scene.",
    },
    facts: {
      de: ["Geburtsort der Pizza.", "Liegt in der Nähe von Pompeji.", "Besitzt eine riesige Altstadt.", "Bekannt für den Vesuv."],
      hu: ["A pizza szülőhelye.", "Pompeji közelében fekszik.", "Hatalmas óvárossal rendelkezik.", "Híres a Vezúvról."],
      ro: ["Locul de naștere al pizzei.", "Situat lângă Pompei.", "Deține un centru istoric uriaș.", "Cunoscut pentru Vezuviu."],
      en: ["Birthplace of pizza.", "Located near Pompeii.", "Has a huge historic center.", "Known for Mount Vesuvius."],
    },
    image: "/geo-images/italy/naples.webp",
  },
  {
    id: "colosseum",
    type: "landmark",
    parent: "rome",
    coords: [12.4922, 41.8902],
    name: { de: "Kolosseum", hu: "Kolosszeum", ro: "Colosseum", en: "Colosseum" },
    description: {
      de: "Das Kolosseum ist das größte antike Amphitheater der Welt und ein Symbol Roms.",
      hu: "A Kolosszeum a világ legnagyobb ókori amfiteátruma és Róma jelképe.",
      ro: "Colosseumul este cel mai mare amfiteatru antic din lume și un simbol al Romei.",
      en: "The Colosseum is the largest ancient amphitheater in the world and a symbol of Rome.",
    },
    facts: {
      de: ["Erbaut im 1. Jahrhundert n. Chr.", "Platz für bis zu 80.000 Zuschauer.", "Ort für Gladiatorenkämpfe.", "Eines der neuen sieben Weltwunder."],
      hu: ["Az 1. században épült.", "Akár 80 000 néző befogadására is alkalmas volt.", "Gladiátori játékok helyszíne.", "A világ hét új csodájának egyike."],
      ro: ["Construit în secolul I d.Hr.", "Capacitate de până la 80.000 de spectatori.", "Loc pentru lupte de gladiatori.", "Una dintre cele șapte noi minuni ale lumii."],
      en: ["Built in the 1st century AD.", "Capacity for up to 80,000 spectators.", "Site for gladiatorial contests.", "One of the New Seven Wonders of the World."],
    },
    image: "/geo-images/italy/colosseum.webp",
  },
  {
    id: "pisa-tower",
    type: "landmark",
    parent: "reg-toscana",
    coords: [10.3966, 43.723],
    name: { de: "Schiefer Turm von Pisa", hu: "Pisai ferde torony", ro: "Turnul Înclinat din Pisa", en: "Leaning Tower of Pisa" },
    description: {
      de: "Der Schiefe Turm von Pisa ist der freistehende Glockenturm des Doms in Pisa.",
      hu: "A pisai ferde torony a pisai dóm különálló harangtornya.",
      ro: "Turnul Înclinat din Pisa este clopotnița de sine stătătoare a catedralei din Pisa.",
      en: "The Leaning Tower of Pisa is the freestanding bell tower of the cathedral in Pisa.",
    },
    facts: {
      de: ["Bekannt für seine unbeabsichtigte Neigung.", "Bau dauerte fast 200 Jahre.", "Besteht aus weißem Marmor.", "Weltkulturerbe der UNESCO."],
      hu: ["Nem szándékos dőléséről híres.", "Az építése majdnem 200 évig tartott.", "Fehér márványból készült.", "Az UNESCO világörökség része."],
      ro: ["Cunoscut pentru înclinația sa neintenționată.", "Construcția a durat aproape 200 de ani.", "Realizat din marmură albă.", "Patrimoniu mondial UNESCO."],
      en: ["Known for its unintended tilt.", "Construction took nearly 200 years.", "Made of white marble.", "UNESCO World Heritage site."],
    },
    image: "/geo-images/italy/pisa-tower.webp",
  },
  {
    id: "pompeii",
    type: "landmark",
    parent: "reg-campania",
    coords: [14.4848, 40.7489],
    name: { de: "Pompeji", hu: "Pompeji", ro: "Pompei", en: "Pompeii" },
    description: {
      de: "Pompeji war eine antike Stadt, die beim Ausbruch des Vesuvs unter Asche begraben wurde.",
      hu: "Pompeji ókori város volt, amelyet a Vezúv kitörésekor hamu temetett el.",
      ro: "Pompei a fost un oraș antic care a fost îngropat sub cenușă în timpul erupției Vezuviului.",
      en: "Pompeii was an ancient city that was buried under ash during the eruption of Mount Vesuvius.",
    },
    facts: {
      de: ["Wurde im Jahr 79 n. Chr. zerstört.", "Hervorragend erhaltene Ruinen.", "Bietet Einblick in das römische Leben.", "Große archäologische Ausgrabungsstätte."],
      hu: ["Kr. u. 79-ben pusztult el.", "Kiválóan megőrzött romok.", "Betekintést nyújt a római életbe.", "Hatalmas régészeti lelőhely."],
      ro: ["Distrus în anul 79 d.Hr.", "Ruine excelent conservate.", "Oferă o perspectivă asupra vieții romane.", "Situl unei mari excavări arheologice."],
      en: ["Destroyed in 79 AD.", "Excellently preserved ruins.", "Provides insight into Roman life.", "Site of a large archaeological excavation."],
    },
    image: "/geo-images/italy/pompeii.webp",
  },
  {
    id: "etna",
    type: "landmark",
    parent: "reg-sicilia",
    coords: [14.9969, 37.751],
    name: { de: "Ätna", hu: "Etna", ro: "Etna", en: "Mount Etna" },
    description: {
      de: "Der Ätna ist einer der aktivsten Vulkane der Welt und der höchste in Europa.",
      hu: "Az Etna a világ egyik legaktívabb vulkánja és a legmagasabb Európában.",
      ro: "Etna este unul dintre cei mai activi vulcani din lume și cel mai înalt din Europa.",
      en: "Mount Etna is one of the world's most active volcanoes and the highest in Europe.",
    },
    facts: {
      de: ["Ständig aktiv.", "UNESCO-Weltnaturerbe.", "Bietet fruchtbaren Boden für Wein.", "Beliebtes Ziel für Wanderer."],
      hu: ["Folyamatosan aktív.", "Az UNESCO világörökség része.", "Termékeny talajt biztosít a bortermeléshez.", "Népszerű túracélpont."],
      ro: ["Activ în mod constant.", "Patrimoniu mondial natural UNESCO.", "Oferă sol fertil pentru vin.", "Destinație populară pentru drumeții."],
      en: ["Constantly active.", "UNESCO World Natural Heritage site.", "Provides fertile soil for wine.", "Popular destination for hikers."],
    },
    image: "/geo-images/italy/etna.webp",
  },
  {
    id: "vatican",
    type: "landmark",
    parent: "rome",
    coords: [12.4534, 41.9029],
    name: { de: "Vatikanstadt", hu: "Vatikán", ro: "Vatican", en: "Vatican City" },
    description: {
      de: "Der Vatikan ist der kleinste Staat der Welt und das Zentrum der katholischen Kirche.",
      hu: "A Vatikán a világ legkisebb állama és a katolikus egyház központja.",
      ro: "Vaticanul este cel mai mic stat din lume și centrul Bisericii Catolice.",
      en: "Vatican City is the smallest state in the world and the center of the Catholic Church.",
    },
    facts: {
      de: ["Sitz des Papstes.", "Heimat des Petersdoms.", "Besitzt die Sixtinische Kapelle.", "Eigener Stadtstaat innerhalb Roms."],
      hu: ["A pápa székhelye.", "Itt található a Szent Péter-bazilika.", "Itt található a Sixtus-kápolna.", "Önálló városállam Rómán belül."],
      ro: ["Sediul Papei.", "Găzduiește Bazilica Sfântul Petru.", "Deține Capela Sixtină.", "Stat-oraș independent în interiorul Romei."],
      en: ["Seat of the Pope.", "Home to St. Peter's Basilica.", "Has the Sistine Chapel.", "Independent city-state within Rome."],
    },
    image: "/geo-images/italy/vatican.webp",
  },
  {
    id: "it-pompei-full",
    type: "historical",
    parent: "IT-72",
    coords: [14.487, 40.749],
    name: { de: "Pompeji", hu: "Pompeji", ro: "Pompei", en: "Pompeii" },
    description: {
      de: "Die antike römische Stadt Pompeji wurde beim Ausbruch des Vesuvs im Jahr 79 n. Chr. verschüttet und dabei außergewöhnlich gut konserviert. Sie bietet einen einzigartigen Einblick in das Leben der Antike. Heute ist sie eine der bedeutendsten archäologischen Stätten der Welt.",
      hu: "Az ókori római várost, Pompejit a Vezúv kitörése temette maga alá Kr. u. 79-ben, kivételesen jól megőrizve azt. Egyedülálló betekintést nyújt az ókori életbe. Ma a világ egyik legfontosabb régészeti lelőhelye.",
      ro: "Orașul roman antic Pompei a fost îngropat în timpul erupției Vezuviului în 79 d.Hr., fiind excepțional de bine conservat. Oferă o perspectivă unică asupra vieții din antichitate. Astăzi este unul dintre cele mai importante situri arheologice din lume.",
      en: "The ancient Roman city of Pompeii was buried during the eruption of Mount Vesuvius in 79 AD, exceptionally well preserved. It provides a unique glimpse into ancient life. Today it is one of the most important archaeological sites in the world."
    },
    facts: {
      de: ["Im Jahr 79 n. Chr. durch den Vesuv zerstört.", "Unter einer meterhohen Ascheschicht konserviert.", "Einblick in das Alltagsleben der Römer.", "Gehört zum UNESCO-Weltkulturerbe.", "Wurde im 16. Jahrhundert wiederentdeckt.", "Zieht jährlich Millionen von Besuchern an."],
      hu: ["Kr. u. 79-ben a Vezúv pusztította el.", "Méteres hamuréteg alatt maradt fenn.", "Betekintést nyújt a rómaiak mindennapi életébe.", "Az UNESCO világörökség része.", "A 16. században fedezték fel újra.", "Évente látogatók millióit vonzza."],
      ro: ["Distrus de Vezuviu în 79 d.Hr.", "Conservat sub un strat de cenușă de câțiva metri.", "O perspectivă asupra vieții de zi cu zi a romanilor.", "Aparține Patrimoniului Mondial UNESCO.", "A fost redescoperit în secolul al XVI-lea.", "Atrage milioane de vizitatori anual."],
      en: ["Destroyed by Mount Vesuvius in 79 AD.", "Preserved under a meter-high layer of ash.", "Insight into the daily life of the Romans.", "Belongs to the UNESCO World Heritage.", "Was rediscovered in the 16th century.", "Attracts millions of visitors annually."]
    },
    image: "/geo-images/italy/it-pompei-full.webp"
  },
  {
    id: "it-herculaneum",
    type: "historical",
    parent: "IT-72",
    coords: [14.348, 40.806],
    name: { de: "Herculaneum", hu: "Herculaneum", ro: "Herculaneum", en: "Herculaneum" },
    description: {
      de: "Herculaneum war eine antike Stadt, die wie Pompeji beim Ausbruch des Vesuvs verschüttet wurde. Sie war kleiner, aber wohlhabender als Pompeji und die Gebäude sind zum Teil besser erhalten. Holzelemente und Dächer blieben oft unversehrt.",
      hu: "Herculaneum egy ókori város volt, amelyet Pompejihez hasonlóan a Vezúv kitörése temetett el. Kisebb, de gazdagabb volt Pompejinél, és az épületek részben jobban megőrződtek. A fa elemek és a tetők gyakran sértetlenek maradtak.",
      ro: "Herculaneum a fost un oraș antic care, la fel ca Pompei, a fost îngropat în timpul erupției Vezuviului. Era mai mic, dar mai bogat decât Pompei, iar clădirile sunt parțial mai bine conservate. Elementele din lemn și acoperișurile au rămas adesea intacte.",
      en: "Herculaneum was an ancient city that, like Pompeii, was buried during the eruption of Mount Vesuvius. It was smaller but wealthier than Pompeii, and the buildings are partly better preserved. Wooden elements and roofs often remained intact."
    },
    facts: {
      de: ["Gleichzeitig mit Pompeji 79 n. Chr. zerstört.", "Von einem pyroklastischen Strom erfasst.", "Hervorragend erhaltene Holzstrukturen.", "War ein beliebter Urlaubsort für wohlhabende Römer.", "Gehört zum UNESCO-Weltkulturerbe.", "Entdeckt im Jahr 1709."],
      hu: ["Pompejivel egy időben, 79-ben pusztult el.", "Piroklasztikus ár borította be.", "Kiválóan megőrzött faszerkezetek.", "A gazdag rómaiak kedvelt nyaralóhelye volt.", "Az UNESCO világörökség része.", "1709-ben fedezték fel."],
      ro: ["Distrus în același timp cu Pompei în 79 d.Hr.", "Lovit de un flux piroclastic.", "Structuri din lemn excelent conservate.", "Era o destinație populară de vacanță pentru romanii bogați.", "Aparține Patrimoniului Mondial UNESCO.", "Descoperit în anul 1709."],
      en: ["Destroyed at the same time as Pompeii in 79 AD.", "Hit by a pyroclastic flow.", "Excellently preserved wooden structures.", "Was a popular vacation spot for wealthy Romans.", "Belongs to the UNESCO World Heritage.", "Discovered in 1709."]
    },
    image: "/geo-images/italy/it-herculaneum.webp"
  },
  {
    id: "it-ostia-antica",
    type: "historical",
    parent: "IT-62",
    coords: [12.290, 41.755],
    name: { de: "Ostia Antica", hu: "Ostia Antica", ro: "Ostia Antica", en: "Ostia Antica" },
    description: {
      de: "Ostia Antica war die bedeutende Hafenstadt des antiken Roms an der Mündung des Tiber. Die Ruinenstadt bietet faszinierende Einblicke in Handel und Logistik des römischen Reiches. Sie zeichnet sich durch gut erhaltene Mosaike und Mehrfamilienhäuser aus.",
      hu: "Ostia Antica az ókori Róma fontos kikötővárosa volt a Tiberis torkolatánál. A romváros lenyűgöző betekintést nyújt a Római Birodalom kereskedelmébe és logisztikájába. Jól megőrzött mozaikok és bérházak jellemzik.",
      ro: "Ostia Antica a fost importantul oraș-port al Romei antice la gura râului Tibru. Orașul ruinelor oferă o perspectivă fascinantă asupra comerțului și logisticii Imperiului Roman. Se caracterizează prin mozaicuri bine conservate și blocuri de apartamente.",
      en: "Ostia Antica was the important port city of ancient Rome at the mouth of the Tiber. The ruined city offers fascinating insights into the trade and logistics of the Roman Empire. It is characterized by well-preserved mosaics and apartment blocks."
    },
    facts: {
      de: ["Ehemaliger Haupthafen Roms.", "Zentrum des antiken Seehandels.", "Berühmt für das Theater von Ostia.", "Besitzt beeindruckende Thermen und Mosaike.", "Zeigt das Leben in antiken Mietshäusern (Insulae).", "Wurde langsam wegen Versandung aufgegeben."],
      hu: ["Róma egykori fő kikötője.", "Az ókori tengeri kereskedelem központja.", "Híres az ostiai színházról.", "Lenyűgöző fürdőkkel és mozaikokkal rendelkezik.", "Bemutatja az ókori bérházak (Insulae) életét.", "A homokosodás miatt lassan elhagyták."],
      ro: ["Fostul port principal al Romei.", "Centrul comerțului maritim antic.", "Faimos pentru Teatrul din Ostia.", "Deține terme și mozaicuri impresionante.", "Arată viața în blocurile de locuințe antice (Insulae).", "A fost abandonat treptat din cauza înnisipării."],
      en: ["Former main port of Rome.", "Center of ancient sea trade.", "Famous for the Theater of Ostia.", "Has impressive baths and mosaics.", "Shows life in ancient apartment blocks (Insulae).", "Was slowly abandoned due to silting."]
    },
    image: "/geo-images/italy/it-ostia-antica.webp"
  },
  {
    id: "it-siena",
    type: "historical",
    parent: "IT-52",
    coords: [11.330, 43.318],
    name: { de: "Siena", hu: "Siena", ro: "Siena", en: "Siena" },
    description: {
      de: "Siena ist eine mittelalterliche Stadt in der Toskana, die für ihre gotische Architektur berühmt ist. Der muschelförmige Hauptplatz, die Piazza del Campo, ist weltbekannt. Hier findet das traditionelle Pferderennen Palio statt.",
      hu: "Siena egy toszkánai középkori város, amely gótikus építészetéről híres. A kagyló alakú főtér, a Piazza del Campo világszerte ismert. Itt rendezik meg a hagyományos Palio lóversenyt.",
      ro: "Siena este un oraș medieval din Toscana, faimos pentru arhitectura sa gotică. Piața principală în formă de scoică, Piazza del Campo, este faimoasă în întreaga lume. Aici are loc cursa tradițională de cai Palio.",
      en: "Siena is a medieval city in Tuscany, famous for its Gothic architecture. The shell-shaped main square, the Piazza del Campo, is world-famous. The traditional Palio horse race takes place here."
    },
    facts: {
      de: ["Heimat der historischen Piazza del Campo.", "Austragungsort des Palio di Siena.", "Das historische Zentrum ist UNESCO-Weltkulturerbe.", "Bekannt für den Siena-Dom aus schwarz-weißem Marmor.", "War im Mittelalter ein mächtiger Stadtstaat.", "Berühmt für die Sieneser Kunstschule."],
      hu: ["A történelmi Piazza del Campo otthona.", "A Palio di Siena helyszíne.", "A történelmi központ az UNESCO világörökség része.", "Híres a fekete-fehér márványból épült sienai dómról.", "A középkorban hatalmas városállam volt.", "Híres a sienai művészeti iskoláról."],
      ro: ["Găzduiește istorica Piazza del Campo.", "Locul de desfășurare al Palio di Siena.", "Centrul istoric este în Patrimoniul Mondial UNESCO.", "Cunoscut pentru Catedrala din Siena, din marmură alb-neagră.", "A fost un puternic oraș-stat în Evul Mediu.", "Faimos pentru școala de artă sieneză."],
      en: ["Home of the historic Piazza del Campo.", "Venue of the Palio di Siena.", "The historic center is a UNESCO World Heritage site.", "Known for the Siena Cathedral made of black and white marble.", "Was a powerful city-state in the Middle Ages.", "Famous for the Sienese School of art."]
    },
    image: "/geo-images/italy/it-siena.webp"
  },
  {
    id: "it-san-gimignano",
    type: "historical",
    parent: "IT-52",
    coords: [11.043, 43.468],
    name: { de: "San Gimignano", hu: "San Gimignano", ro: "San Gimignano", en: "San Gimignano" },
    description: {
      de: "San Gimignano ist eine malerische Hügelstadt in der Toskana, die als 'Manhattan des Mittelalters' bezeichnet wird. Sie ist berühmt für ihre markanten Geschlechtertürme, die einst Symbole für Reichtum und Macht waren. Das historische Zentrum hat seinen mittelalterlichen Charakter weitgehend bewahrt.",
      hu: "San Gimignano egy festői toszkánai hegyvidéki város, amelyet a 'középkor Manhattanének' neveznek. Híres jellegzetes lakótornyairól, amelyek egykor a gazdagság és a hatalom szimbólumai voltak. A történelmi központ nagyrészt megőrizte középkori jellegét.",
      ro: "San Gimignano este un oraș pitoresc pe deal în Toscana, denumit 'Manhattan-ul Evului Mediu'. Este faimos pentru turnurile sale distinctive care au fost cândva simboluri ale bogăției și puterii. Centrul istoric și-a păstrat în mare măsură caracterul medieval.",
      en: "San Gimignano is a picturesque hill town in Tuscany, referred to as the 'Manhattan of the Middle Ages'. It is famous for its distinctive tower houses, which were once symbols of wealth and power. The historic center has largely preserved its medieval character."
    },
    facts: {
      de: ["Bekannt für seine mittelalterlichen Türme.", "UNESCO-Weltkulturerbe seit 1990.", "Produziert den berühmten Weißwein Vernaccia.", "Wichtige Station auf der Via Francigena.", "Einst gab es hier über 70 Türme, heute noch 14.", "Beliebtes Touristenziel in der Toskana."],
      hu: ["Középkori tornyairól ismert.", "1990 óta az UNESCO világörökség része.", "Itt állítják elő a híres Vernaccia fehérbort.", "Fontos állomás a Via Francigena zarándokúton.", "Egykor több mint 70 tornya volt, ma már csak 14 áll.", "Népszerű turisztikai célpont Toszkánában."],
      ro: ["Cunoscut pentru turnurile sale medievale.", "Patrimoniu Mondial UNESCO din 1990.", "Produce celebrul vin alb Vernaccia.", "Stație importantă pe Via Francigena.", "Odinioară existau peste 70 de turnuri, astăzi mai sunt 14.", "Destinație turistică populară în Toscana."],
      en: ["Known for its medieval towers.", "UNESCO World Heritage site since 1990.", "Produces the famous white wine Vernaccia.", "Important stop on the Via Francigena.", "There were once over 70 towers, today 14 remain.", "Popular tourist destination in Tuscany."]
    },
    image: "/geo-images/italy/it-san-gimignano.webp"
  },
  {
    id: "it-assisi",
    type: "historical",
    parent: "IT-55",
    coords: [12.617, 43.070],
    name: { de: "Assisi", hu: "Assisi", ro: "Assisi", en: "Assisi" },
    description: {
      de: "Assisi ist eine charmante Stadt in Umbrien, weltbekannt als Geburtsort des Heiligen Franziskus. Die Basilika San Francesco ist ein Meisterwerk der mittelalterlichen Kunst und Architektur. Die Stadt ist ein bedeutendes Ziel für Pilger und Kunstliebhaber.",
      hu: "Assisi egy bájos umbriai város, világszerte ismert Assisi Szent Ferenc szülőhelyeként. A Szent Ferenc-bazilika a középkori művészet és építészet remekműve. A város fontos célpontja a zarándokoknak és a művészetkedvelőknek.",
      ro: "Assisi este un oraș fermecător din Umbria, faimos la nivel mondial ca loc de naștere al Sfântului Francisc. Bazilica San Francesco este o capodoperă a artei și arhitecturii medievale. Orașul este o destinație majoră pentru pelerini și iubitorii de artă.",
      en: "Assisi is a charming town in Umbria, world-famous as the birthplace of Saint Francis. The Basilica of San Francesco is a masterpiece of medieval art and architecture. The town is a major destination for pilgrims and art lovers."
    },
    facts: {
      de: ["Geburtsort des Heiligen Franziskus und der Heiligen Klara.", "Die Basilika beherbergt Fresken von Giotto.", "UNESCO-Weltkulturerbe.", "Erbaut an den Hängen des Monte Subasio.", "Wichtiger Wallfahrtsort für Christen.", "Symbol für Frieden und interreligiösen Dialog."],
      hu: ["Szent Ferenc és Szent Klára szülőhelye.", "A bazilikában Giotto freskói találhatók.", "Az UNESCO világörökség része.", "A Monte Subasio lejtőin épült.", "Fontos zarándokhely a keresztények számára.", "A béke és a vallásközi párbeszéd szimbóluma."],
      ro: ["Locul de naștere al Sfântului Francisc și al Sfintei Clara.", "Bazilica găzduiește fresce de Giotto.", "Patrimoniu Mondial UNESCO.", "Construit pe pantele Muntelui Subasio.", "Loc de pelerinaj important pentru creștini.", "Simbol al păcii și al dialogului interreligios."],
      en: ["Birthplace of Saint Francis and Saint Clare.", "The Basilica houses frescoes by Giotto.", "UNESCO World Heritage site.", "Built on the slopes of Mount Subasio.", "Important pilgrimage site for Christians.", "Symbol of peace and interreligious dialogue."]
    },
    image: "/geo-images/italy/it-assisi.webp"
  },
  {
    id: "it-montecassino",
    type: "historical",
    parent: "IT-62",
    coords: [13.813, 41.489],
    name: { de: "Kloster Montecassino", hu: "Montecassinoi apátság", ro: "Abația Monte Cassino", en: "Monte Cassino Abbey" },
    description: {
      de: "Die Abtei Montecassino ist das Stammkloster der Benediktiner und thront majestätisch auf einem Berg in der Region Latium. Sie wurde von Benedikt von Nursia gegründet und blickt auf eine bewegte Geschichte zurück. Im Zweiten Weltkrieg wurde sie zerstört und danach originalgetreu wieder aufgebaut.",
      hu: "A Montecassinoi apátság a bencés rend anyakolostora, amely fenségesen magasodik egy hegyen Lazio régióban. Nursiai Szent Benedek alapította, és mozgalmas múltra tekint vissza. A második világháborúban elpusztult, majd az eredetihez hűen újjáépítették.",
      ro: "Abația Monte Cassino este mănăstirea mamă a ordinului benedictin și se înalță maiestuos pe un munte din regiunea Lazio. A fost fondată de Benedict de Nursia și are o istorie zbuciumată. A fost distrusă în timpul celui de-al Doilea Război Mondial și ulterior reconstruită fidel.",
      en: "Monte Cassino Abbey is the mother monastery of the Benedictine order and sits majestically on a mountain in the Lazio region. It was founded by Benedict of Nursia and looks back on an eventful history. It was destroyed in World War II and subsequently rebuilt faithfully."
    },
    facts: {
      de: ["Gegründet um das Jahr 529 n. Chr.", "Wiege des Benediktinerordens.", "Mehrmals zerstört und wieder aufgebaut.", "Schauplatz einer blutigen Schlacht im Jahr 1944.", "Beherbergt wertvolle historische Manuskripte.", "Liegt etwa 130 km südöstlich von Rom."],
      hu: ["Kr. u. 529 körül alapították.", "A bencés rend bölcsője.", "Többször lerombolták és újjáépítették.", "Véres csata helyszíne 1944-ben.", "Értékes történelmi kéziratokat őriz.", "Rómától mintegy 130 km-re délkeletre fekszik."],
      ro: ["Fondată în jurul anului 529 d.Hr.", "Leagănul ordinului benedictin.", "Distrusă și reconstruită de mai multe ori.", "Locul unei bătălii sângeroase în 1944.", "Găzduiește manuscrise istorice valoroase.", "Situată la aproximativ 130 km sud-est de Roma."],
      en: ["Founded around 529 AD.", "Cradle of the Benedictine order.", "Destroyed and rebuilt several times.", "Site of a bloody battle in 1944.", "Houses valuable historical manuscripts.", "Located about 130 km southeast of Rome."]
    },
    image: "/geo-images/italy/it-montecassino.webp"
  },
  {
    id: "it-orvieto",
    type: "historical",
    parent: "IT-55",
    coords: [12.108, 42.717],
    name: { de: "Orvieto", hu: "Orvieto", ro: "Orvieto", en: "Orvieto" },
    description: {
      de: "Orvieto ist eine beeindruckende Stadt in Umbrien, die auf einem steilen Tuffsteinfelsen thront. Der Dom von Orvieto gilt als eines der Meisterwerke der italienischen Gotik. Die Stadt ist auch für ihre faszinierende unterirdische Welt und den Orvieto Classico Wein bekannt.",
      hu: "Orvieto egy lenyűgöző város Umbriában, amely egy meredek tufasziklán magasodik. Az orvietói dóm az olasz gótika egyik remekműve. A város lenyűgöző földalatti világáról és az Orvieto Classico borról is ismert.",
      ro: "Orvieto este un oraș impresionant din Umbria, așezat pe o stâncă abruptă de tuf vulcanic. Domul din Orvieto este considerat una dintre capodoperele goticului italian. Orașul este cunoscut și pentru lumea sa subterană fascinantă și vinul Orvieto Classico.",
      en: "Orvieto is an impressive city in Umbria, perched on a steep tuff cliff. The Orvieto Cathedral is considered one of the masterpieces of Italian Gothic. The city is also known for its fascinating underground world and Orvieto Classico wine."
    },
    facts: {
      de: ["Erbaut auf einem Plateau aus vulkanischem Tuffstein.", "Berühmt für die farbenprächtige Fassade des Doms.", "Besitzt den tiefen Brunnen Pozzo di San Patrizio.", "Ein bedeutendes Zentrum der etruskischen Kultur.", "Das unterirdische Höhlensystem ist begehbar.", "Produziert den berühmten Orvieto Weißwein."],
      hu: ["Vulkanikus tufából álló fennsíkra épült.", "Híres a dóm színpompás homlokzatáról.", "Itt található a mély Pozzo di San Patrizio kút.", "Az etruszk kultúra egyik fontos központja.", "A földalatti barlangrendszer látogatható.", "Itt termelik a híres Orvieto fehérbort."],
      ro: ["Construit pe un platou de tuf vulcanic.", "Faimos pentru fațada colorată a Domului.", "Deține fântâna adâncă Pozzo di San Patrizio.", "Un centru important al culturii etrusce.", "Sistemul de peșteri subterane este accesibil.", "Produce faimosul vin alb Orvieto."],
      en: ["Built on a plateau of volcanic tuff.", "Famous for the colorful facade of the cathedral.", "Has the deep well Pozzo di San Patrizio.", "An important center of Etruscan culture.", "The underground cave system is accessible.", "Produces the famous Orvieto white wine."]
    },
    image: "/geo-images/italy/it-orvieto.webp"
  },
  {
    id: "it-matera-sassi",
    type: "historical",
    parent: "IT-77",
    coords: [16.610, 40.666],
    name: { de: "Matera Sassi", hu: "Matera Sassi", ro: "Sassi di Matera", en: "Matera Sassi" },
    description: {
      de: "Die Sassi di Matera sind historische Höhlensiedlungen in der Region Basilikata. Diese einzigartigen in den Kalkstein geschlagenen Wohnungen gehören zu den ältesten durchgehend bewohnten Siedlungen der Welt. Sie bieten ein faszinierendes und archaisches Stadtbild.",
      hu: "A Sassi di Matera történelmi barlangtelepülések Basilicata régióban. Ezek az egyedülálló, mészkőbe vájt lakások a világ legrégebbi folyamatosan lakott települései közé tartoznak. Lenyűgöző és archaikus városképet nyújtanak.",
      ro: "Sassi di Matera sunt așezări istorice în peșteri din regiunea Basilicata. Aceste locuințe unice săpate în calcar sunt printre cele mai vechi așezări locuite continuu din lume. Ele oferă un peisaj urban fascinant și arhaic.",
      en: "The Sassi di Matera are historic cave settlements in the Basilicata region. These unique dwellings carved into the limestone are among the oldest continuously inhabited settlements in the world. They offer a fascinating and archaic cityscape."
    },
    facts: {
      de: ["Seit der Altsteinzeit bewohnt.", "UNESCO-Weltkulturerbe seit 1993.", "Europäische Kulturhauptstadt 2019.", "Beliebte Kulisse für biblische Filme.", "Besteht aus zwei Hauptvierteln: Sasso Caveoso und Sasso Barisano.", "Wurde einst als 'Schande Italiens' bezeichnet."],
      hu: ["A paleolitikum óta lakott.", "1993 óta az UNESCO világörökség része.", "2019-ben Európa Kulturális Fővárosa volt.", "Bibliai filmek kedvelt forgatási helyszíne.", "Két fő negyedből áll: Sasso Caveoso és Sasso Barisano.", "Egykor 'Olaszország szégyenének' nevezték."],
      ro: ["Locuit din paleolitic.", "Patrimoniu Mondial UNESCO din 1993.", "Capitală Europeană a Culturii în 2019.", "Decor popular pentru filme biblice.", "Este format din două cartiere principale: Sasso Caveoso și Sasso Barisano.", "A fost denumit cândva 'Rușinea Italiei'."],
      en: ["Inhabited since the Paleolithic era.", "UNESCO World Heritage site since 1993.", "European Capital of Culture in 2019.", "Popular setting for biblical films.", "Consists of two main districts: Sasso Caveoso and Sasso Barisano.", "Was once called the 'Shame of Italy'."]
    },
    image: "/geo-images/italy/it-matera-sassi.webp"
  },
  {
    id: "it-pietraperla",
    type: "landmark",
    parent: "IT-57",
    coords: [13.250, 43.220],
    name: { de: "Pietraperla", hu: "Pietraperla", ro: "Pietraperla", en: "Pietraperla" },
    description: {
      de: "Pietraperla ist ein verstecktes landschaftliches Juwel in den Marken. Bekannt für seine idyllische Umgebung und historischen Steinbauten bietet der Ort eine authentische Atmosphäre abseits des Massentourismus. Hier kann man die traditionelle italienische Lebensart in vollen Zügen genießen.",
      hu: "Pietraperla egy rejtett táji ékszerdoboz Marche régióban. Idilli környezetéről és történelmi kőépületeiről ismert, autentikus atmoszférát kínál a tömegturizmustól távol. Itt a hagyományos olasz életmódot lehet élvezni.",
      ro: "Pietraperla este o bijuterie ascunsă a peisajului din Marche. Cunoscută pentru împrejurimile sale idilice și clădirile istorice din piatră, locul oferă o atmosferă autentică, departe de turismul de masă. Aici vă puteți bucura din plin de stilul de viață tradițional italian.",
      en: "Pietraperla is a hidden scenic gem in the Marche region. Known for its idyllic surroundings and historic stone buildings, the place offers an authentic atmosphere away from mass tourism. Here you can fully enjoy the traditional Italian way of life."
    },
    facts: {
      de: ["Charmantes Dorf in der Region Marken.", "Geprägt von traditioneller Steinarchitektur.", "Abseits der großen Touristenströme.", "Umgeben von sanften Hügeln und Natur.", "Ideal für Ruhesuchende und Wanderer.", "Lokale Gastronomie mit regionalen Spezialitäten."],
      hu: ["Bájos falu Marche régióban.", "Hagyományos kőépítészet jellemzi.", "Távol a nagy turistahadaktól.", "Szelíd dombok és természet veszi körül.", "Ideális a nyugalmat keresőknek és túrázóknak.", "Helyi gasztronómia regionális specialitásokkal."],
      ro: ["Sat fermecător în regiunea Marche.", "Caracterizat prin arhitectura tradițională din piatră.", "Departe de mulțimile mari de turiști.", "Înconjurat de dealuri blânde și natură.", "Ideal pentru cei care caută liniște și pentru drumeții.", "Gastronomie locală cu specialități regionale."],
      en: ["Charming village in the Marche region.", "Characterized by traditional stone architecture.", "Away from the large tourist crowds.", "Surrounded by rolling hills and nature.", "Ideal for those seeking tranquility and hikers.", "Local gastronomy with regional specialties."]
    },
    image: "/geo-images/italy/it-pietraperla.webp"
  },
  {
    id: "it-gran-paradiso",
    type: "mountain",
    parent: "IT-23",
    coords: [7.267, 45.517],
    name: { de: "Nationalpark Gran Paradiso", hu: "Gran Paradiso Nemzeti Park", ro: "Parcul Național Gran Paradiso", en: "Gran Paradiso National Park" },
    description: {
      de: "Der Nationalpark Gran Paradiso ist der älteste Nationalpark Italiens, gelegen in den Grajischen Alpen. Er wurde ursprünglich als königliches Jagdrevier zum Schutz der Alpensteinböcke gegründet. Die unberührte alpine Landschaft bietet majestätische Gipfel, Gletscher und dichte Wälder.",
      hu: "A Gran Paradiso Nemzeti Park Olaszország legrégebbi nemzeti parkja, a Graji-Alpokban található. Eredetileg királyi vadászterületként hozták létre a kőszáli kecskék védelmére. Az érintetlen alpesi táj fenséges csúcsokat, gleccsereket és sűrű erdőket kínál.",
      ro: "Parcul Național Gran Paradiso este cel mai vechi parc național din Italia, situat în Alpii Graici. A fost fondat inițial ca un teren regal de vânătoare pentru a proteja ibexul alpin. Peisajul alpin neatins oferă vârfuri maiestuoase, ghețari și păduri dese.",
      en: "Gran Paradiso National Park is Italy's oldest national park, located in the Graian Alps. It was originally founded as a royal hunting ground to protect the Alpine ibex. The pristine alpine landscape offers majestic peaks, glaciers, and dense forests."
    },
    facts: {
      de: ["Gegründet im Jahr 1922.", "Erster Nationalpark Italiens.", "Benannt nach dem Berg Gran Paradiso (4.061 m).", "Schutzgebiet für den seltenen Alpensteinbock.", "Liegt im Piemont und im Aostatal.", "Bietet Hunderte von Kilometern an Wanderwegen."],
      hu: ["1922-ben alapították.", "Olaszország első nemzeti parkja.", "A Gran Paradiso hegyről (4061 m) kapta a nevét.", "A ritka kőszáli kecske védett területe.", "Piemontban és Valle d'Aosta-ban található.", "Több száz kilométernyi túraútvonalat kínál."],
      ro: ["Fondat în anul 1922.", "Primul parc național din Italia.", "Numit după muntele Gran Paradiso (4.061 m).", "Zonă protejată pentru rarii ibecși alpini.", "Situat în Piemont și Valea Aosta.", "Oferă sute de kilometri de trasee montane."],
      en: ["Founded in 1922.", "Italy's first national park.", "Named after the Gran Paradiso mountain (4,061 m).", "Protected area for the rare Alpine ibex.", "Located in Piedmont and the Aosta Valley.", "Offers hundreds of kilometers of hiking trails."]
    },
    image: "/geo-images/italy/it-gran-paradiso.webp"
  },
  {
    id: "it-abruzzo-np",
    type: "mountain",
    parent: "IT-65",
    coords: [13.750, 41.883],
    name: { de: "Nationalpark Abruzzen", hu: "Abruzzo Nemzeti Park", ro: "Parcul Național Abruzzo", en: "Abruzzo National Park" },
    description: {
      de: "Der Nationalpark Abruzzen, Latium und Molise ist eines der wichtigsten Naturschutzgebiete im Apennin. Er ist berühmt für den Schutz seltener heimischer Tierarten wie dem Marsischen Braunbären. Tiefe Wälder, weite Täler und malerische Dörfer prägen das Bild.",
      hu: "Az Abruzzo, Lazio és Molise Nemzeti Park az Appenninek egyik legfontosabb természetvédelmi területe. Híres az olyan ritka őshonos állatfajok védelméről, mint a marsicai barnamedve. Mély erdők, széles völgyek és festői falvak jellemzik a tájat.",
      ro: "Parcul Național Abruzzo, Lazio și Molise este una dintre cele mai importante rezervații naturale din Apenini. Este faimos pentru protejarea speciilor rare de animale autohtone, cum ar fi ursul brun marsican. Păduri adânci, văi largi și sate pitorești domină peisajul.",
      en: "The Abruzzo, Lazio and Molise National Park is one of the most important nature reserves in the Apennines. It is famous for protecting rare native animal species such as the Marsican brown bear. Deep forests, wide valleys, and picturesque villages characterize the landscape."
    },
    facts: {
      de: ["Gegründet im Jahr 1923.", "Wichtiges Refugium für den Apennin-Wolf und den Braunbären.", "Bedeckt über 500 Quadratkilometer.", "Landschaft aus Bergen, Seen und alten Wäldern.", "Pionier im italienischen Naturschutz.", "Ganzjährig beliebtes Ziel für Ökotourismus."],
      hu: ["1923-ban alapították.", "Az appennini farkas és a barnamedve fontos menedéke.", "Több mint 500 négyzetkilométert fed le.", "Hegyekből, tavakból és öreg erdőkből álló táj.", "Az olasz természetvédelem úttörője.", "Egész évben népszerű ökoturisztikai célpont."],
      ro: ["Fondat în anul 1923.", "Refugiu important pentru lupul apenin și ursul brun.", "Acoperă peste 500 de kilometri pătrați.", "Peisaj cu munți, lacuri și păduri seculare.", "Pionier în conservarea naturii din Italia.", "Destinație populară pe tot parcursul anului pentru ecoturism."],
      en: ["Founded in 1923.", "Important refuge for the Apennine wolf and brown bear.", "Covers over 500 square kilometers.", "Landscape of mountains, lakes, and ancient forests.", "Pioneer in Italian nature conservation.", "Year-round popular destination for ecotourism."]
    },
    image: "/geo-images/italy/it-abruzzo-np.webp"
  },
  {
    id: "it-pollino-np",
    type: "mountain",
    parent: "IT-78",
    coords: [16.100, 40.000],
    name: { de: "Nationalpark Pollino", hu: "Pollino Nemzeti Park", ro: "Parcul Național Pollino", en: "Pollino National Park" },
    description: {
      de: "Der Nationalpark Pollino ist der größte Nationalpark Italiens und erstreckt sich über die Regionen Basilikata und Kalabrien. Seine raue und vielfältige Landschaft reicht von tiefen Schluchten bis zu hohen Berggipfeln. Das Symbol des Parks ist die seltene Panzerkiefer.",
      hu: "A Pollino Nemzeti Park Olaszország legnagyobb nemzeti parkja, amely Basilicata és Calabria régiókon ível át. Zord és változatos tája a mély szurdokoktól a magas hegycsúcsokig terjed. A park szimbóluma a ritka páncélfenyő.",
      ro: "Parcul Național Pollino este cel mai mare parc național din Italia și se întinde pe regiunile Basilicata și Calabria. Peisajul său accidentat și divers variază de la defileuri adânci la vârfuri înalte de munți. Simbolul parcului este rarul pin loricat.",
      en: "Pollino National Park is the largest national park in Italy, stretching across the Basilicata and Calabria regions. Its rugged and diverse landscape ranges from deep gorges to high mountain peaks. The symbol of the park is the rare Bosnian pine."
    },
    facts: {
      de: ["Größter Nationalpark in Italien.", "Heimat der uralten Panzerkiefern (Pinus heldreichii).", "Bietet spektakuläre Flusstäler und Schluchten.", "Höchster Gipfel ist der Serra Dolcedorme (2.267 m).", "Gehört zum UNESCO-Geopark-Netzwerk.", "Ideal für Trekking, Rafting und Canyoning."],
      hu: ["Olaszország legnagyobb nemzeti parkja.", "Az ősi páncélfenyők (Pinus heldreichii) otthona.", "Látványos folyóvölgyeket és szurdokokat kínál.", "Legmagasabb csúcsa a Serra Dolcedorme (2267 m).", "Az UNESCO Geopark Hálózat része.", "Ideális túrázáshoz, raftinghoz és canyoninghoz."],
      ro: ["Cel mai mare parc național din Italia.", "Găzduiește pinii loricați antici (Pinus heldreichii).", "Oferă văi fluviale și defileuri spectaculoase.", "Cel mai înalt vârf este Serra Dolcedorme (2.267 m).", "Aparține Rețelei de Geoparcuri UNESCO.", "Ideal pentru drumeții, rafting și canyoning."],
      en: ["Largest national park in Italy.", "Home of the ancient Bosnian pines (Pinus heldreichii).", "Offers spectacular river valleys and gorges.", "Highest peak is Serra Dolcedorme (2,267 m).", "Belongs to the UNESCO Geopark Network.", "Ideal for trekking, rafting, and canyoning."]
    },
    image: "/geo-images/italy/it-pollino-np.webp"
  },
  {
    id: "it-lago-di-garda",
    type: "lake",
    parent: "IT-34",
    coords: [10.717, 45.583],
    name: { de: "Gardasee", hu: "Garda-tó", ro: "Lacul Garda", en: "Lake Garda" },
    description: {
      de: "Der Gardasee ist der größte und wohl bekannteste See Italiens. Er liegt zwischen den Alpen und der Poebene und bietet ein mildes, mediterranes Klima. Olivenhaine, Zitronengewächshäuser und charmante Uferstädtchen machen ihn zu einem Top-Reiseziel.",
      hu: "A Garda-tó Olaszország legnagyobb és talán legismertebb tava. Az Alpok és a Pó-síkság között fekszik, és enyhe, mediterrán klímát kínál. Olajfaligetek, citromházak és bájos parti városkák teszik csúcs turisztikai célponttá.",
      ro: "Lacul Garda este cel mai mare și, probabil, cel mai faimos lac din Italia. Este situat între Alpi și Valea Padului și oferă un climat blând, mediteranean. Livezile de măslini, serele de lămâi și micile orașe fermecătoare de pe mal îl fac o destinație de top.",
      en: "Lake Garda is the largest and perhaps most famous lake in Italy. It is located between the Alps and the Po Valley and offers a mild, Mediterranean climate. Olive groves, lemon greenhouses, and charming shore towns make it a top destination."
    },
    facts: {
      de: ["Größter See Italiens.", "Bekannt für seine starken Winde, ideal für Surfer.", "Berühmt für charmante Städte wie Sirmione und Riva.", "Beliebtes Ziel für Mountainbiker und Kletterer.", "Das Klima ermöglicht den Anbau von Zitronen und Oliven.", "Wurde von Gletschern in der letzten Eiszeit geformt."],
      hu: ["Olaszország legnagyobb tava.", "Erős szelei miatt a szörfösök kedvelt helye.", "Híres olyan bájos városairól, mint Sirmione és Riva.", "Népszerű célpont a hegyikerékpárosok és sziklamászók körében.", "Klíma lehetővé teszi a citrom és az olívabogyó termesztését.", "A legutóbbi jégkorszak gleccserei alakították ki."],
      ro: ["Cel mai mare lac din Italia.", "Cunoscut pentru vânturile sale puternice, ideal pentru surferi.", "Faimos pentru orașe fermecătoare precum Sirmione și Riva.", "Destinație populară pentru cicliștii montani și alpiniști.", "Clima permite cultivarea lămâilor și a măslinilor.", "A fost format de ghețari în ultima eră glaciară."],
      en: ["Largest lake in Italy.", "Known for its strong winds, ideal for surfers.", "Famous for charming towns like Sirmione and Riva.", "Popular destination for mountain bikers and climbers.", "The climate allows for the cultivation of lemons and olives.", "Was formed by glaciers in the last ice age."]
    },
    image: "/geo-images/italy/it-lago-di-garda.webp"
  },
  {
    id: "it-lago-di-como",
    type: "lake",
    parent: "IT-25",
    coords: [9.267, 46.000],
    name: { de: "Comer See", hu: "Comói-tó", ro: "Lacul Como", en: "Lake Como" },
    description: {
      de: "Der Comer See im Norden Italiens ist berühmt für seine markante Y-Form und die dramatische Alpenkulisse. Elegante Villen, prächtige Gärten und malerische Dörfer wie Bellagio säumen seine Ufer. Der See zieht seit Jahrhunderten Künstler und Prominente an.",
      hu: "Az észak-olaszországi Comói-tó jellegzetes Y-alakjáról és drámai alpesi hátteréről híres. Elegáns villák, pompás kertek és festői falvak, mint például Bellagio szegélyezik partjait. A tó évszázadok óta vonzza a művészeket és a hírességeket.",
      ro: "Lacul Como din nordul Italiei este faimos pentru forma sa distinctivă în Y și peisajul alpin dramatic. Vile elegante, grădini magnifice și sate pitorești precum Bellagio îi străjuiesc țărmurile. Lacul a atras artiști și celebrități de secole.",
      en: "Lake Como in northern Italy is famous for its distinctive Y-shape and dramatic alpine backdrop. Elegant villas, magnificent gardens, and picturesque villages like Bellagio line its shores. The lake has attracted artists and celebrities for centuries."
    },
    facts: {
      de: ["Tiefster Binnensee Europas (ca. 410 Meter).", "Hat die markante Form eines umgekehrten Y.", "Bekannt für luxuriöse Villen wie die Villa del Balbianello.", "Schauplatz für viele Hollywood-Filme (z.B. James Bond, Star Wars).", "Zieht seit Jahrhunderten die internationale Elite an.", "Umgeben von beeindruckenden Bergpanoramen."],
      hu: ["Európa legmélyebb tava (kb. 410 méter).", "Jellegzetes fordított Y alakja van.", "Olyan luxusvilláiról ismert, mint a Villa del Balbianello.", "Számos hollywoodi film helyszíne (pl. James Bond, Star Wars).", "Évszázadok óta vonzza a nemzetközi elitet.", "Lenyűgöző hegyi panorámák veszik körül."],
      ro: ["Cel mai adânc lac din Europa (aprox. 410 metri).", "Are forma distinctivă a unui Y inversat.", "Cunoscut pentru vilele luxoase precum Villa del Balbianello.", "Decor pentru multe filme de la Hollywood (de ex. James Bond, Star Wars).", "Atrage elita internațională de secole.", "Înconjurat de panorame montane impresionante."],
      en: ["Deepest lake in Europe (approx. 410 meters).", "Has the distinctive shape of an inverted Y.", "Known for luxurious villas like Villa del Balbianello.", "Setting for many Hollywood films (e.g., James Bond, Star Wars).", "Has attracted the international elite for centuries.", "Surrounded by impressive mountain panoramas."]
    },
    image: "/geo-images/italy/it-lago-di-como.webp"
  },
  {
    id: "it-lago-maggiore",
    type: "lake",
    parent: "IT-21",
    coords: [8.617, 45.983],
    name: { de: "Lago Maggiore", hu: "Lago Maggiore", ro: "Lacul Maggiore", en: "Lake Maggiore" },
    description: {
      de: "Der Lago Maggiore ist ein großer oberitalienischer See, dessen nördlicher Teil in der Schweiz liegt. Er ist berühmt für die Borromäischen Inseln, die prachtvolle Paläste und exotische Gärten beherbergen. Ein elegantes und zugleich entspanntes Reiseziel.",
      hu: "A Lago Maggiore egy nagy észak-olasz tó, melynek északi része Svájcban található. Híres a Borromeo-szigetekről, amelyek csodálatos palotáknak és egzotikus kerteknek adnak otthont. Elegáns és egyben pihentető turisztikai célpont.",
      ro: "Lacul Maggiore este un mare lac din nordul Italiei, a cărui parte nordică se află în Elveția. Este faimos pentru Insulele Borromeo, care adăpostesc palate magnifice și grădini exotice. O destinație elegantă, dar relaxată.",
      en: "Lake Maggiore is a large northern Italian lake, the northern part of which lies in Switzerland. It is famous for the Borromean Islands, which house magnificent palaces and exotic gardens. An elegant yet relaxed destination."
    },
    facts: {
      de: ["Zweitgrößter See Italiens nach dem Gardasee.", "Gliedert sich zwischen Italien und der Schweiz auf.", "Heimat der wunderschönen Borromäischen Inseln.", "Bekannt für prachtvolle Botanische Gärten.", "Stresa ist ein berühmter Kur- und Urlaubsort am Seeufer.", "Beliebt für Segeln und Wassersport."],
      hu: ["A Garda-tó után Olaszország második legnagyobb tava.", "Olaszország és Svájc között oszlik meg.", "A gyönyörű Borromeo-szigetek otthona.", "Csodálatos botanikus kertjeiről ismert.", "Stresa egy híres gyógy- és üdülőhely a tóparton.", "Népszerű a vitorlázók és a vízisportok kedvelői körében."],
      ro: ["Al doilea lac ca mărime din Italia, după Lacul Garda.", "Este împărțit între Italia și Elveția.", "Găzduiește frumoasele Insule Borromeo.", "Cunoscut pentru grădinile botanice magnifice.", "Stresa este o faimoasă stațiune balneară și de vacanță pe malul lacului.", "Popular pentru navigație și sporturi nautice."],
      en: ["Second largest lake in Italy after Lake Garda.", "Divided between Italy and Switzerland.", "Home to the beautiful Borromean Islands.", "Known for magnificent botanical gardens.", "Stresa is a famous spa and holiday resort on the lake shore.", "Popular for sailing and water sports."]
    },
    image: "/geo-images/italy/it-lago-maggiore.webp"
  },
  {
    id: "it-vesuvio",
    type: "mountain",
    parent: "IT-72",
    coords: [14.425, 40.822],
    name: { de: "Vesuv", hu: "Vezúv", ro: "Vezuviu", en: "Mount Vesuvius" },
    description: {
      de: "Der Vesuv ist der berühmteste Vulkan Europas, gelegen am Golf von Neapel. Er ist weltweit bekannt für seinen verheerenden Ausbruch im Jahr 79 n. Chr., der Pompeji zerstörte. Heute ist der imposante Kegel ein beliebtes Ziel für Wanderer.",
      hu: "A Vezúv Európa leghíresebb vulkánja, a Nápolyi-öböl partján. Világszerte ismert 79-ben történt pusztító kitöréséről, amely elpusztította Pompejit. Ma az impozáns vulkáni kúp a túrázók kedvelt célpontja.",
      ro: "Vezuviu este cel mai faimos vulcan din Europa, situat pe Golful Napoli. Este cunoscut în întreaga lume pentru erupția sa devastatoare din anul 79 d.Hr., care a distrus Pompei. Astăzi, conul impunător este o destinație populară pentru drumeții.",
      en: "Mount Vesuvius is Europe's most famous volcano, located on the Gulf of Naples. It is known worldwide for its devastating eruption in 79 AD, which destroyed Pompeii. Today, the imposing cone is a popular destination for hikers."
    },
    facts: {
      de: ["Einziger aktiver Vulkan auf dem europäischen Festland.", "Verursachte den Untergang von Pompeji und Herculaneum.", "Sein Nationalpark ist ein Biosphärenreservat.", "Stark überwacht aufgrund der Nähe zu Neapel.", "Ein Ausflug bis zum Kraterrand ist möglich.", "Prägt maßgeblich die Skyline von Neapel."],
      hu: ["Az egyetlen aktív vulkán az európai szárazföldön.", "Pompeji és Herculaneum pusztulását okozta.", "Nemzeti parkja bioszféra-rezervátum.", "Szigorúan megfigyelik a Nápolyhoz való közelsége miatt.", "Lehetőség van kirándulásra egészen a kráter pereméig.", "Meghatározó eleme Nápoly látképének."],
      ro: ["Singurul vulcan activ de pe continentul european.", "A cauzat distrugerea orașelor Pompei și Herculaneum.", "Parcul său național este o rezervație a biosferei.", "Monitorizat îndeaproape din cauza proximității față de Napoli.", "Este posibilă o excursie până la marginea craterului.", "Domină peisajul urban al orașului Napoli."],
      en: ["Only active volcano on the European mainland.", "Caused the destruction of Pompeii and Herculaneum.", "Its national park is a biosphere reserve.", "Heavily monitored due to its proximity to Naples.", "An excursion to the crater rim is possible.", "Significantly shapes the skyline of Naples."]
    },
    image: "/geo-images/italy/it-vesuvio.webp"
  },
  {
    id: "it-stromboli",
    type: "mountain",
    parent: "IT-82",
    coords: [15.213, 38.793],
    name: { de: "Stromboli", hu: "Stromboli", ro: "Stromboli", en: "Stromboli" },
    description: {
      de: "Stromboli ist eine Vulkaninsel der Liparischen Inseln im Tyrrhenischen Meer. Der Vulkan ist wegen seiner regelmäßigen kleinen Eruptionen als 'Leuchtturm des Mittelmeers' bekannt. Nachts bietet das rot glühende Lava-Schauspiel ein unvergessliches Erlebnis.",
      hu: "Stromboli a Tirrén-tengerben található Lipari-szigetek egyik vulkáni szigete. A vulkánt rendszeres kis kitörései miatt a 'Földközi-tenger világítótornyaként' is ismerik. Éjszaka a vörösen izzó láva játéka felejthetetlen élményt nyújt.",
      ro: "Stromboli este o insulă vulcanică din Insulele Eoliene din Marea Tireniană. Vulcanul este cunoscut sub numele de 'Farul Mediteranei' datorită erupțiilor sale mici și regulate. Noaptea, spectacolul lavei strălucitoare roșii oferă o experiență de neuitat.",
      en: "Stromboli is a volcanic island of the Aeolian Islands in the Tyrrhenian Sea. The volcano is known as the 'Lighthouse of the Mediterranean' due to its regular small eruptions. At night, the red glowing lava spectacle offers an unforgettable experience."
    },
    facts: {
      de: ["Kontinuierlich aktiv seit Tausenden von Jahren.", "Bietet das Phänomen der 'Strombolianischen Eruptionen'.", "Gehört zur Inselgruppe der Äolischen Inseln nördlich von Sizilien.", "Wurde durch den Rossellini-Film mit Ingrid Bergman berühmt.", "Ein Paradies für Vulkan-Tourismus.", "Die Eruptionen sind vor allem nachts gut sichtbar."],
      hu: ["Több ezer éve folyamatosan aktív.", "A 'stromboli típusú kitörések' jelenségét mutatja be.", "A Szicíliától északra fekvő vizik szigetek csoportjába tartozik.", "Rossellini Ingrid Bergmannal készült filmje tette híressé.", "A vulkánturizmus paradicsoma.", "A kitörések főleg éjszaka láthatók jól."],
      ro: ["Activ în mod continuu de mii de ani.", "Oferă fenomenul 'erupțiilor stromboliene'.", "Aparține grupului Insulelor Eoliene la nord de Sicilia.", "A devenit faimos prin filmul lui Rossellini cu Ingrid Bergman.", "Un paradis pentru turismul vulcanic.", "Erupțiile sunt vizibile în special noaptea."],
      en: ["Continuously active for thousands of years.", "Offers the phenomenon of 'Strombolian eruptions'.", "Belongs to the Aeolian Islands group north of Sicily.", "Became famous through the Rossellini film starring Ingrid Bergman.", "A paradise for volcano tourism.", "The eruptions are best seen at night."]
    },
    image: "/geo-images/italy/it-stromboli.webp"
  },
  {
    id: "it-portofino",
    type: "landmark",
    parent: "IT-42",
    coords: [9.210, 44.301],
    name: { de: "Portofino", hu: "Portofino", ro: "Portofino", en: "Portofino" },
    description: {
      de: "Portofino ist ein malerisches Fischerdorf an der italienischen Riviera. Die halbmondförmige Bucht, gesäumt von pastellfarbenen Häusern und Yachten, ist ein Inbegriff des 'Dolce Vita'. Es ist ein exklusiver Rückzugsort für den Jetset und Naturliebhaber.",
      hu: "Portofino egy festői halászfalu az Olasz Riviérán. A félhold alakú öböl, amelyet pasztellszínű házak és jachtok szegélyeznek, a 'Dolce Vita' megtestesítője. Exkluzív menedékhely a jetset és a természet szerelmesei számára.",
      ro: "Portofino este un sat de pescari pitoresc de pe Riviera Italiană. Golful în formă de semilună, mărginit de case în culori pastelate și iahturi, este simbolul 'Dolce Vita'. Este un refugiu exclusivist pentru jet set și iubitorii de natură.",
      en: "Portofino is a picturesque fishing village on the Italian Riviera. The crescent-shaped bay, lined with pastel-colored houses and yachts, is the epitome of the 'Dolce Vita'. It is an exclusive retreat for the jet set and nature lovers."
    },
    facts: {
      de: ["Berühmt für seinen malerischen Hafen und die pastellfarbenen Häuser.", "Ein Symbol für italienischen Luxus und den Jetset.", "Eingebettet in einen Naturpark mit reicher Vegetation.", "Die Piazzetta ist das Herzstück des Dorfes.", "Castello Brown bietet einen Panoramablick auf die Bucht.", "Nur ca. 400 Einwohner, aber Millionen von Besuchern."],
      hu: ["Híres festői kikötőjéről és pasztellszínű házairól.", "Az olasz luxus és a jetset szimbóluma.", "Gazdag növényzetű natúrparkban fekszik.", "A Piazzetta a falu szíve.", "A Castello Brown panorámás kilátást nyújt az öbölre.", "Mindössze kb. 400 lakosa van, de több millió látogatója."],
      ro: ["Faimos pentru portul său pitoresc și casele în culori pastelate.", "Un simbol al luxului italian și al jet set-ului.", "Situat într-un parc natural cu vegetație bogată.", "Piazzetta este inima satului.", "Castello Brown oferă vederi panoramice ale golfului.", "Doar aprox. 400 de locuitori, dar milioane de vizitatori."],
      en: ["Famous for its picturesque harbor and pastel-colored houses.", "A symbol of Italian luxury and the jet set.", "Nestled in a nature park with rich vegetation.", "The Piazzetta is the heart of the village.", "Castello Brown offers panoramic views of the bay.", "Only about 400 residents, but millions of visitors."]
    },
    image: "/geo-images/italy/it-portofino.webp"
  },
  {
    id: "it-cinque-terre",
    type: "landmark",
    parent: "IT-42",
    coords: [9.722, 44.125],
    name: { de: "Cinque Terre", hu: "Cinque Terre", ro: "Cinque Terre", en: "Cinque Terre" },
    description: {
      de: "Cinque Terre bezeichnet einen zerklüfteten Küstenabschnitt der italienischen Riviera, an dem sich fünf bunte Fischerdörfer an die steilen Klippen klammern. Die terrassierten Weinberge und malerischen Wanderwege bieten ein spektakuläres Küstenpanorama.",
      hu: "A Cinque Terre az Olasz Riviéra egy zord partszakaszát jelöli, ahol öt színes halászfalu kapaszkodik a meredek sziklákhoz. A teraszos szőlőültetvények és a festői túraútvonalak látványos tengerparti panorámát nyújtanak.",
      ro: "Cinque Terre se referă la o secțiune accidentată de coastă de pe Riviera Italiană, unde cinci sate colorate de pescari se agață de stânci abrupte. Podgoriile terasate și traseele de drumeții pitorești oferă o panoramă de coastă spectaculoasă.",
      en: "Cinque Terre refers to a rugged stretch of coast on the Italian Riviera, where five colorful fishing villages cling to steep cliffs. The terraced vineyards and picturesque hiking trails offer a spectacular coastal panorama."
    },
    facts: {
      de: ["Besteht aus den Dörfern Monterosso, Vernazza, Corniglia, Manarola und Riomaggiore.", "UNESCO-Weltkulturerbe seit 1997.", "Berühmt für Wanderwege, insbesondere den 'Sentiero Azzurro'.", "Autoverkehr ist in den Dörfern stark eingeschränkt.", "Die Region ist für ihren Weißwein und das Pesto Genovese bekannt.", "Die Dörfer sind am besten per Zug oder Boot erreichbar."],
      hu: ["Monterosso, Vernazza, Corniglia, Manarola és Riomaggiore falvakból áll.", "1997 óta az UNESCO világörökség része.", "Híres túraútvonalairól, különösen a 'Sentiero Azzurro'-ról.", "A falvakban az autóforgalom erősen korlátozott.", "A régió fehérboráról és a Pesto Genovese-ről ismert.", "A falvak legjobban vonattal vagy hajóval közelíthetők meg."],
      ro: ["Este format din satele Monterosso, Vernazza, Corniglia, Manarola și Riomaggiore.", "Patrimoniu Mondial UNESCO din 1997.", "Faimos pentru traseele de drumeții, în special 'Sentiero Azzurro'.", "Traficul auto este strict restricționat în sate.", "Regiunea este cunoscută pentru vinul său alb și Pesto Genovese.", "Satele sunt cel mai bine accesate cu trenul sau cu barca."],
      en: ["Consists of the villages Monterosso, Vernazza, Corniglia, Manarola and Riomaggiore.", "UNESCO World Heritage site since 1997.", "Famous for hiking trails, especially the 'Sentiero Azzurro'.", "Car traffic is strictly limited in the villages.", "The region is known for its white wine and Pesto Genovese.", "The villages are best accessed by train or boat."]
    },
    image: "/geo-images/italy/it-cinque-terre.webp"
  },
  {
    id: "it-lecce",
    type: "city",
    parent: "IT-75",
    coords: [18.169, 40.353],
    name: { de: "Lecce", hu: "Lecce", ro: "Lecce", en: "Lecce" },
    description: {
      de: "Lecce wird aufgrund seiner reichen Barockarchitektur oft als 'Florenz des Südens' bezeichnet. Die Stadt auf der Halbinsel Salento besticht durch Gebäude aus dem weichen, goldenen Lecce-Stein, der detaillierte Skulpturen und Verzierungen ermöglichte.",
      hu: "Lecce-t gazdag barokk építészete miatt gyakran a 'Dél Firenzéjének' nevezik. A Salento-félszigeten fekvő város puha, aranyszínű Lecce-kőből épült házaival hódít, amely lehetővé tette a részletgazdag szobrokat és díszítéseket.",
      ro: "Lecce este adesea denumită 'Florența Sudului' datorită arhitecturii sale baroce bogate. Orașul de pe peninsula Salento captivează cu clădirile sale realizate din piatră moale, aurie de Lecce, care a permis sculpturi și decorațiuni detaliate.",
      en: "Lecce is often called the 'Florence of the South' due to its rich Baroque architecture. The city on the Salento peninsula captivates with buildings made of the soft, golden Lecce stone, which allowed for detailed sculptures and decorations."
    },
    facts: {
      de: ["Berühmt für den Architekturstil 'Barocco Leccese'.", "Hauptstadt des Salento in Apulien.", "Die Basilika Santa Croce ist das Meisterwerk der Stadt.", "Hat ein gut erhaltenes römisches Amphitheater im Zentrum.", "Traditionelle Herstellung von Pappmaché-Kunstwerken.", "Bietet exzellente süditalienische Gastronomie."],
      hu: ["A 'Barocco Leccese' építészeti stílusáról híres.", "Salento fővárosa Pugliában.", "A Santa Croce-bazilika a város remekműve.", "A központban egy jól megőrzött római amfiteátrum található.", "A papírmasé műalkotások hagyományos készítése.", "Kiváló dél-olasz gasztronómiát kínál."],
      ro: ["Faimos pentru stilul arhitectural 'Barocco Leccese'.", "Capitala regiunii Salento din Puglia.", "Bazilica Santa Croce este capodopera orașului.", "Are un amfiteatru roman bine conservat în centru.", "Producția tradițională de opere de artă din papier-mâché.", "Oferă o excelentă gastronomie din sudul Italiei."],
      en: ["Famous for the architectural style 'Barocco Leccese'.", "Capital of Salento in Apulia.", "The Basilica of Santa Croce is the city's masterpiece.", "Has a well-preserved Roman amphitheater in the center.", "Traditional production of papier-mâché artworks.", "Offers excellent southern Italian gastronomy."]
    },
    image: "/geo-images/italy/it-lecce.webp"
  },
  {
    id: "it-bari",
    type: "city",
    parent: "IT-75",
    coords: [16.866, 41.117],
    name: { de: "Bari", hu: "Bari", ro: "Bari", en: "Bari" },
    description: {
      de: "Bari ist die Hauptstadt Apuliens und eine lebhafte Hafenstadt an der Adria. Die Altstadt, Bari Vecchia, ist ein Labyrinth aus engen Gassen, in denen Frauen traditionell auf der Straße Orecchiette-Nudeln formen. Hier verschmelzen Geschichte und authentischer Alltag.",
      hu: "Bari Puglia fővárosa és nyüzsgő kikötőváros az Adriai-tenger partján. Az óváros, Bari Vecchia szűk utcák útvesztője, ahol a nők hagyományosan az utcán készítik az orecchiette tésztát. Itt összefonódik a történelem és az autentikus mindennapok.",
      ro: "Bari este capitala regiunii Puglia și un oraș portuar animat la Marea Adriatică. Orașul vechi, Bari Vecchia, este un labirint de străzi înguste, unde femeile modelează tradițional pastele orecchiette pe stradă. Aici se împletesc istoria și viața de zi cu zi autentică.",
      en: "Bari is the capital of Apulia and a bustling port city on the Adriatic Sea. The old town, Bari Vecchia, is a maze of narrow streets where women traditionally shape orecchiette pasta on the street. History and authentic everyday life blend here."
    },
    facts: {
      de: ["Wichtiger Fährhafen nach Griechenland und zum Balkan.", "Die Basilika San Nicola beherbergt die Reliquien des Heiligen Nikolaus.", "Bari Vecchia ist für ihr authentisches Flair berühmt.", "Bekannt für Orecchiette (öhrchenförmige Nudeln).", "Besitzt eine beeindruckende Festung, das Castello Svevo.", "Kulturelles und wirtschaftliches Zentrum Süditaliens."],
      hu: ["Fontos kompkikötő Görögország és a Balkán felé.", "A San Nicola-bazilikában őrzik Szent Miklós ereklyéit.", "A Bari Vecchia autentikus hangulatáról híres.", "Híres az Orecchiette-ről (fül alakú tészta).", "Lenyűgöző erőddel, a Castello Svevo-val rendelkezik.", "Dél-Olaszország kulturális és gazdasági központja."],
      ro: ["Important port de feriboturi către Grecia și Balcani.", "Bazilica San Nicola găzduiește moaștele Sfântului Nicolae.", "Bari Vecchia este faimos pentru atmosfera sa autentică.", "Cunoscut pentru Orecchiette (paste în formă de ureche).", "Deține o fortăreață impresionantă, Castello Svevo.", "Centrul cultural și economic al sudului Italiei."],
      en: ["Important ferry port to Greece and the Balkans.", "The Basilica of San Nicola houses the relics of Saint Nicholas.", "Bari Vecchia is famous for its authentic flair.", "Known for Orecchiette (ear-shaped pasta).", "Has an impressive fortress, the Castello Svevo.", "Cultural and economic center of southern Italy."]
    },
    image: "/geo-images/italy/it-bari.webp"
  },
  {
    id: "it-perugia",
    type: "city",
    parent: "IT-55",
    coords: [12.389, 43.111],
    name: { de: "Perugia", hu: "Perugia", ro: "Perugia", en: "Perugia" },
    description: {
      de: "Perugia ist die Hauptstadt der Region Umbrien und thront hoch auf einem Hügel. Sie ist eine lebendige Universitätsstadt mit einer reichen etruskischen und mittelalterlichen Vergangenheit. Die Stadt ist weltbekannt für Schokolade und das Umbria Jazz Festival.",
      hu: "Perugia Umbria régió fővárosa, amely magasan egy hegytetőn magasodik. Élénk egyetemváros gazdag etruszk és középkori múlttal. A város világszerte ismert a csokoládéról és az Umbria Jazz Fesztiválról.",
      ro: "Perugia este capitala regiunii Umbria și se află la înălțime pe un deal. Este un oraș universitar vibrant, cu un bogat trecut etrusc și medieval. Orașul este cunoscut în întreaga lume pentru ciocolată și pentru Festivalul de Jazz Umbria.",
      en: "Perugia is the capital of the Umbria region and sits high on a hill. It is a vibrant university city with a rich Etruscan and medieval past. The city is world-famous for chocolate and the Umbria Jazz Festival."
    },
    facts: {
      de: ["Gegründet von den Etruskern.", "Berühmt für die Schokoladenmarke 'Baci Perugina'.", "Veranstaltet das jährlich stattfindende 'Eurochocolate'-Festival.", "Gastgeber des weltbekannten 'Umbria Jazz' Festivals.", "Besitzt eines der ältesten Universitäten Italiens (1308).", "Die Rocca Paolina ist eine faszinierende unterirdische Festung."],
      hu: ["Az etruszkok alapították.", "A 'Baci Perugina' csokoládémárkáról híres.", "Itt rendezik meg évente az 'Eurochocolate' fesztivált.", "A világhírű 'Umbria Jazz' fesztivál házigazdája.", "Olaszország egyik legrégebbi egyetemével rendelkezik (1308).", "A Rocca Paolina egy lenyűgöző földalatti erődítmény."],
      ro: ["Fondat de etrusci.", "Faimos pentru brandul de ciocolată 'Baci Perugina'.", "Găzduiește festivalul anual 'Eurochocolate'.", "Gazda festivalului mondial 'Umbria Jazz'.", "Deține una dintre cele mai vechi universități din Italia (1308).", "Rocca Paolina este o fortăreață subterană fascinantă."],
      en: ["Founded by the Etruscans.", "Famous for the 'Baci Perugina' chocolate brand.", "Hosts the annual 'Eurochocolate' festival.", "Host of the world-famous 'Umbria Jazz' festival.", "Has one of the oldest universities in Italy (1308).", "The Rocca Paolina is a fascinating underground fortress."]
    },
    image: "/geo-images/italy/it-perugia.webp"
  },
  {
    id: "it-ravenna",
    type: "city",
    parent: "IT-45",
    coords: [12.202, 44.418],
    name: { de: "Ravenna", hu: "Ravenna", ro: "Ravenna", en: "Ravenna" },
    description: {
      de: "Ravenna, einst die Hauptstadt des Weströmischen Reiches, ist weltberühmt für ihre atemberaubenden byzantinischen Mosaike. Keine andere Stadt in Europa bietet ein vergleichbares Ensemble frühchristlicher Kunst. Die ruhige Atmosphäre lädt zu einer Zeitreise ein.",
      hu: "Ravenna, a Nyugatrómai Birodalom egykori fővárosa, világhírű lenyűgöző bizánci mozaikjairól. Európa egyetlen más városa sem nyújt hasonlóan gazdag ókeresztény művészeti együttest. Csendes atmoszférája időutazásra hív.",
      ro: "Ravenna, fosta capitală a Imperiului Roman de Apus, este faimoasă în întreaga lume pentru mozaicurile sale bizantine uluitoare. Niciun alt oraș din Europa nu oferă un ansamblu comparabil de artă creștină timpurie. Atmosfera liniștită invită la o călătorie în timp.",
      en: "Ravenna, once the capital of the Western Roman Empire, is world-famous for its breathtaking Byzantine mosaics. No other city in Europe offers a comparable ensemble of early Christian art. The quiet atmosphere invites you on a journey through time."
    },
    facts: {
      de: ["War im 5. Jahrhundert Hauptstadt des Weströmischen Reiches.", "Weltweit bekannt für ihre byzantinischen Mosaike.", "Acht Bauwerke in Ravenna sind UNESCO-Weltkulturerbe.", "Hier befindet sich das Grab des Dichters Dante Alighieri.", "Die Basilica di San Vitale ist ein Meisterwerk frühchristlicher Kunst.", "Liegt in der Region Emilia-Romagna unweit der Adria."],
      hu: ["Az 5. században a Nyugatrómai Birodalom fővárosa volt.", "Világszerte ismert bizánci mozaikjairól.", "Ravennában nyolc épület az UNESCO világörökség része.", "Itt található Dante Alighieri költő sírja.", "A Basilica di San Vitale az ókeresztény művészet remekműve.", "Emilia-Romagna régióban, az Adria közelében található."],
      ro: ["A fost capitala Imperiului Roman de Apus în secolul al V-lea.", "Cunoscută în întreaga lume pentru mozaicurile sale bizantine.", "Opt clădiri din Ravenna sunt în Patrimoniul Mondial UNESCO.", "Mormântul poetului Dante Alighieri se află aici.", "Bazilica San Vitale este o capodoperă a artei creștine timpurii.", "Situată în regiunea Emilia-Romagna, aproape de Marea Adriatică."],
      en: ["Was the capital of the Western Roman Empire in the 5th century.", "Known worldwide for its Byzantine mosaics.", "Eight buildings in Ravenna are UNESCO World Heritage sites.", "The tomb of the poet Dante Alighieri is located here.", "The Basilica of San Vitale is a masterpiece of early Christian art.", "Located in the Emilia-Romagna region near the Adriatic Sea."]
    },
    image: "/geo-images/italy/it-ravenna.webp"
  },
  {
    id: "it-trieste",
    type: "city",
    parent: "IT-36",
    coords: [13.776, 45.650],
    name: { de: "Triest", hu: "Trieszt", ro: "Trieste", en: "Trieste" },
    description: {
      de: "Triest ist eine weltoffene Hafenstadt an der Grenze zu Slowenien mit einer ganz eigenen Atmosphäre. Geprägt von der langen Zugehörigkeit zu Österreich-Ungarn, findet man hier Wiener Kaffeehäuser neben römischen Ruinen und neoklassizistischer Architektur.",
      hu: "Trieszt egy kozmopolita kikötőváros a szlovén határon, egészen sajátos atmoszférával. A hosszú osztrák-magyar fennhatóság miatt bécsi kávéházak találhatók itt a római romok és a neoklasszicista építészet mellett.",
      ro: "Trieste este un oraș-port cosmopolit la granița cu Slovenia, cu o atmosferă cu totul unică. Influențat de lunga sa apartenență la Austro-Ungaria, aici veți găsi cafenele vieneze alături de ruine romane și arhitectură neoclasică.",
      en: "Trieste is a cosmopolitan port city on the border with Slovenia with a very unique atmosphere. Influenced by its long affiliation with Austria-Hungary, you will find Viennese coffee houses alongside Roman ruins and neoclassical architecture."
    },
    facts: {
      de: ["War lange Zeit der wichtigste Seehafen der Habsburgermonarchie.", "Die Piazza dell'Unità d'Italia öffnet sich majestätisch zum Meer.", "Bekannt als die 'Kaffeehauptstadt' Italiens.", "Das weiße Schloss Miramare liegt malerisch an der Küste.", "Ein Schmelztiegel italienischer, slawischer und germanischer Kulturen.", "War Wohnort von James Joyce und Italo Svevo."],
      hu: ["Sokáig a Habsburg Birodalom legfontosabb tengeri kikötője volt.", "A Piazza dell'Unità d'Italia fenségesen nyílik a tenger felé.", "Olaszország 'kávéfővárosaként' ismert.", "A fehér Miramare-kastély festőien fekszik a tengerparton.", "Olasz, szláv és germán kultúrák olvasztótégelye.", "James Joyce és Italo Svevo lakóhelye volt."],
      ro: ["A fost mult timp cel mai important port maritim al Monarhiei Habsburgice.", "Piazza dell'Unità d'Italia se deschide maiestuos spre mare.", "Cunoscută sub numele de 'Capitala Cafelei' a Italiei.", "Castelul alb Miramare este situat pitoresc pe coastă.", "Un creuzet al culturilor italiană, slavă și germanică.", "A fost locul de reședință al lui James Joyce și Italo Svevo."],
      en: ["Was for a long time the most important seaport of the Habsburg Monarchy.", "Piazza dell'Unità d'Italia opens majestically to the sea.", "Known as the 'Coffee Capital' of Italy.", "The white Miramare Castle is picturesquely situated on the coast.", "A melting pot of Italian, Slavic, and Germanic cultures.", "Was the home of James Joyce and Italo Svevo."]
    },
    image: "/geo-images/italy/it-trieste.webp"
  },
  {
    id: "it-padova",
    type: "city",
    parent: "IT-34",
    coords: [11.878, 45.408],
    name: { de: "Padua", hu: "Padova", ro: "Padova", en: "Padova" },
    description: {
      de: "Padua ist eine der ältesten Städte Norditaliens und eine bedeutende Universitätsstadt. Sie beherbergt die Basilika des Heiligen Antonius, ein wichtiges Pilgerziel, und Giottos Meisterwerke in der Scrovegni-Kapelle. Die eleganten Plätze verleihen ihr viel Charme.",
      hu: "Padova Észak-Olaszország egyik legrégebbi városa és fontos egyetemváros. Itt található Páduai Szent Antal bazilikája, amely jelentős zarándokhely, valamint Giotto remekművei a Scrovegni-kápolnában. Elegáns terei nagy bájt kölcsönöznek neki.",
      ro: "Padova este unul dintre cele mai vechi orașe din nordul Italiei și un important oraș universitar. Găzduiește Bazilica Sfântului Anton, o importantă destinație de pelerinaj, și capodoperele lui Giotto din Capela Scrovegni. Piețele sale elegante îi conferă mult farmec.",
      en: "Padova is one of the oldest cities in northern Italy and a major university city. It is home to the Basilica of Saint Anthony, an important pilgrimage destination, and Giotto's masterpieces in the Scrovegni Chapel. Its elegant squares give it a lot of charm."
    },
    facts: {
      de: ["Heimat der Universität Padua (gegründet 1222), wo Galileo lehrte.", "Die Scrovegni-Kapelle enthält weltberühmte Fresken von Giotto.", "Pilgerstätte für den Heiligen Antonius von Padua.", "Prato della Valle ist einer der größten Plätze Europas.", "Besitzt den ältesten botanischen Garten der Welt (UNESCO).", "Wichtiger Wirtschaftsstandort in der Region Venetien."],
      hu: ["A Padovai Egyetem (alapítva 1222) otthona, ahol Galileo tanított.", "A Scrovegni-kápolna Giotto világhírű freskóit őrzi.", "Páduai Szent Antal zarándokhelye.", "A Prato della Valle Európa egyik legnagyobb tere.", "Itt található a világ legrégebbi botanikus kertje (UNESCO).", "Fontos gazdasági központ Veneto régióban."],
      ro: ["Găzduiește Universitatea din Padova (fondată 1222), unde a predat Galileo.", "Capela Scrovegni conține fresce faimoase ale lui Giotto.", "Loc de pelerinaj pentru Sfântul Anton de Padova.", "Prato della Valle este una dintre cele mai mari piețe din Europa.", "Deține cea mai veche grădină botanică din lume (UNESCO).", "Locație economică importantă în regiunea Veneto."],
      en: ["Home to the University of Padua (founded 1222), where Galileo taught.", "The Scrovegni Chapel contains world-famous frescoes by Giotto.", "Pilgrimage site for Saint Anthony of Padua.", "Prato della Valle is one of the largest squares in Europe.", "Has the oldest botanical garden in the world (UNESCO).", "Important economic center in the Veneto region."]
    },
    image: "/geo-images/italy/it-padova.webp"
  },
  {
    id: "it-cremona",
    type: "city",
    parent: "IT-25",
    coords: [10.023, 45.133],
    name: { de: "Cremona", hu: "Cremona", ro: "Cremona", en: "Cremona" },
    description: {
      de: "Cremona in der Lombardei ist untrennbar mit der Kunst des Geigenbaus verbunden. Hier wirkten Meister wie Stradivari und Guarneri. Die wunderschöne Piazza del Comune mit dem Dom und dem Torrazzo bildet das elegante Zentrum der Musikstadt.",
      hu: "A lombardiai Cremona elválaszthatatlanul összefonódik a hegedűkészítés művészetével. Itt dolgoztak olyan mesterek, mint Stradivari és Guarneri. A gyönyörű Piazza del Comune a dómmal és a Torrazzóval a zenei város elegáns központját alkotja.",
      ro: "Cremona din Lombardia este indisolubil legată de arta construcției viorilor. Maeștri precum Stradivari și Guarneri au lucrat aici. Frumoasa Piazza del Comune, cu Domul și Torrazzo, formează centrul elegant al orașului muzical.",
      en: "Cremona in Lombardy is inextricably linked to the art of violin making. Masters like Stradivari and Guarneri worked here. The beautiful Piazza del Comune with the Cathedral and the Torrazzo forms the elegant center of the musical city."
    },
    facts: {
      de: ["Weltberühmtes Zentrum des traditionellen Geigenbaus.", "Heimat von Antonio Stradivari und der Familie Amati.", "Der Torrazzo ist der höchste historische Glockenturm Italiens.", "Das Violinmuseum (Museo del Violino) zeigt unschätzbare Instrumente.", "Der Cremoneser Geigenbau ist immaterielles UNESCO-Kulturerbe.", "Bekannt für kulinarische Spezialitäten wie Torrone und Mostarda."],
      hu: ["A hagyományos hegedűkészítés világhírű központja.", "Antonio Stradivari és az Amati család otthona.", "A Torrazzo Olaszország legmagasabb történelmi harangtornya.", "A Hegedűmúzeum (Museo del Violino) felbecsülhetetlen hangszereket mutat be.", "A cremonai hegedűkészítés szellemi UNESCO kulturális örökség.", "Olyan kulináris specialitásairól ismert, mint a Torrone és a Mostarda."],
      ro: ["Centru faimos în întreaga lume al construcției tradiționale de viori.", "Casa lui Antonio Stradivari și a familiei Amati.", "Torrazzo este cel mai înalt clopotniță istorică din Italia.", "Muzeul Viorii (Museo del Violino) expune instrumente inestimabile.", "Construcția de viori din Cremona este patrimoniu cultural imaterial UNESCO.", "Cunoscut pentru specialități culinare precum Torrone și Mostarda."],
      en: ["World-famous center of traditional violin making.", "Home of Antonio Stradivari and the Amati family.", "The Torrazzo is the highest historic bell tower in Italy.", "The Violin Museum (Museo del Violino) displays invaluable instruments.", "Cremonese violin making is an intangible UNESCO cultural heritage.", "Known for culinary specialties like Torrone and Mostarda."]
    },
    image: "/geo-images/italy/it-cremona.webp"
  },
  {
    id: "it-cagliari",
    type: "city",
    parent: "IT-88",
    coords: [9.114, 39.216],
    name: { de: "Cagliari", hu: "Cagliari", ro: "Cagliari", en: "Cagliari" },
    description: {
      de: "Cagliari ist die lebendige Hauptstadt Sardiniens, gelegen am idyllischen Golf der Engel. Mit einer langen, von Phöniziern, Römern und Spaniern geprägten Geschichte bietet die Altstadt Castello malerische Gassen und herrliche Ausblicke auf das Mittelmeer.",
      hu: "Cagliari Szardínia nyüzsgő fővárosa, amely az idilli Angyalok öblében fekszik. A föníciaiak, rómaiak és spanyolok által formált hosszú történelemmel rendelkező Castello óváros festői sikátorokat és csodálatos kilátást nyújt a Földközi-tengerre.",
      ro: "Cagliari este capitala vibrantă a Sardiniei, situată pe idilicul Golf al Îngerilor. Cu o istorie lungă, modelată de fenicieni, romani și spanioli, orașul vechi Castello oferă străzi pitorești și vederi magnifice la Marea Mediterană.",
      en: "Cagliari is the vibrant capital of Sardinia, located on the idyllic Gulf of Angels. With a long history shaped by Phoenicians, Romans, and Spaniards, the old town of Castello offers picturesque streets and magnificent views of the Mediterranean Sea."
    },
    facts: {
      de: ["Hauptstadt und größte Stadt der Insel Sardinien.", "Das historische Viertel 'Castello' thront auf einem Hügel.", "Der Strand Poetto erstreckt sich über 8 Kilometer.", "Salzlagunen in Stadtnähe ziehen rosa Flamingos an.", "Besitzt ein gut erhaltenes römisches Amphitheater.", "Wichtiger Hafen für Handel und Tourismus."],
      hu: ["Szardínia szigetének fővárosa és legnagyobb városa.", "A 'Castello' történelmi negyed egy hegyen magasodik.", "A Poetto strand 8 kilométer hosszan terül el.", "A városközeli sós lagúnák rózsaszín flamingókat vonzanak.", "Jól megőrzött római amfiteátrummal rendelkezik.", "Fontos kereskedelmi és turisztikai kikötő."],
      ro: ["Capitala și cel mai mare oraș al insulei Sardinia.", "Cartierul istoric 'Castello' este așezat pe un deal.", "Plaja Poetto se întinde pe 8 kilometri.", "Lagunele de sare din apropierea orașului atrag flamingo roz.", "Deține un amfiteatru roman bine conservat.", "Port important pentru comerț și turism."],
      en: ["Capital and largest city of the island of Sardinia.", "The historic 'Castello' district perches on a hill.", "Poetto beach stretches over 8 kilometers.", "Salt lagoons near the city attract pink flamingos.", "Has a well-preserved Roman amphitheater.", "Important port for trade and tourism."]
    },
    image: "/geo-images/italy/it-cagliari.webp"
  },
  {
    id: "it-taormina",
    type: "city",
    parent: "IT-82",
    coords: [15.290, 37.852],
    name: { de: "Taormina", hu: "Taormina", ro: "Taormina", en: "Taormina" },
    description: {
      de: "Taormina ist einer der glamourösesten Ferienorte Siziliens und thront auf Felsen hoch über dem Meer. Das antike griechisch-römische Theater mit dem Ätna als Kulisse ist weltberühmt. Elegante Boutiquen und historische Plätze prägen das mondäne Stadtbild.",
      hu: "Taormina Szicília egyik legelbűvölőbb üdülőhelye, amely a tenger felett magasan a sziklákon magasodik. Az ókori görög-római színház az Etnával a háttérben világhírű. Elegáns butikok és történelmi terek jellemzik a divatos városképet.",
      ro: "Taormina este una dintre cele mai pline de farmec stațiuni din Sicilia și se află pe stânci la mare înălțime deasupra mării. Teatrul antic greco-roman, cu vulcanul Etna ca fundal, este faimos în întreaga lume. Buticuri elegante și piețe istorice caracterizează peisajul urban monden.",
      en: "Taormina is one of Sicily's most glamorous resorts and is perched on cliffs high above the sea. The ancient Greco-Roman theater with Mount Etna as a backdrop is world-famous. Elegant boutiques and historic squares characterize the chic cityscape."
    },
    facts: {
      de: ["Berühmt für das antike Theater von Taormina (Teatro Antico).", "Bietet spektakuläre Ausblicke auf den Ätna und das Meer.", "Ein beliebtes Reiseziel seit der Grand Tour im 18. Jahrhundert.", "Die kleine Insel Isola Bella liegt direkt vor der Küste.", "Austragungsort des Taormina Film Fests.", "Bekannt für Luxushotels und anspruchsvolle Gastronomie."],
      hu: ["Híres az ókori színházáról (Teatro Antico).", "Látványos kilátást nyújt az Etnára és a tengerre.", "Népszerű úti cél a 18. századi Grand Tour óta.", "A kis Isola Bella sziget közvetlenül a partnál fekszik.", "A Taormina Film Fesztivál helyszíne.", "Luxusszállodáiról és igényes gasztronómiájáról ismert."],
      ro: ["Faimos pentru teatrul antic din Taormina (Teatro Antico).", "Oferă vederi spectaculoase asupra vulcanului Etna și a mării.", "O destinație populară de la Marele Tur din secolul al XVIII-lea.", "Mica insulă Isola Bella este situată chiar în largul coastei.", "Locul de desfășurare al Taormina Film Fest.", "Cunoscut pentru hoteluri de lux și gastronomie sofisticată."],
      en: ["Famous for the ancient theater of Taormina (Teatro Antico).", "Offers spectacular views of Mount Etna and the sea.", "A popular destination since the Grand Tour in the 18th century.", "The small island of Isola Bella is located just off the coast.", "Venue of the Taormina Film Fest.", "Known for luxury hotels and sophisticated gastronomy."]
    },
    image: "/geo-images/italy/it-taormina.webp"
  },
  {
    id: "it-amalfi",
    type: "city",
    parent: "IT-72",
    coords: [14.603, 40.634],
    name: { de: "Amalfi", hu: "Amalfi", ro: "Amalfi", en: "Amalfi" },
    description: {
      de: "Amalfi ist der namensgebende Hauptort der weltberühmten Amalfiküste. Eingebettet zwischen steilen Klippen und dem tiefblauen Meer verzaubert die Stadt mit weißen Häusern und dem prächtigen Dom. Einst war Amalfi eine mächtige Seerepublik.",
      hu: "Amalfi a világhírű Amalfi-part névadó fővárosa. A meredek sziklák és a mélykék tenger közé ékelt város fehér házaival és a csodálatos dómjával varázsolja el a látogatókat. Amalfi egykor hatalmas tengeri köztársaság volt.",
      ro: "Amalfi este capitala eponimă a faimoasei Coaste Amalfitane. Cuibărit între stânci abrupte și marea de un albastru intens, orașul încântă prin casele sale albe și Domul magnific. Odinioară, Amalfi a fost o puternică republică maritimă.",
      en: "Amalfi is the eponymous capital of the world-famous Amalfi Coast. Nestled between steep cliffs and the deep blue sea, the town enchants with its white houses and the magnificent cathedral. Amalfi was once a powerful maritime republic."
    },
    facts: {
      de: ["War eine der vier großen Seerepubliken Italiens.", "Namensgeber der malerischen Amalfiküste (UNESCO-Erbe).", "Der Dom von Amalfi (Cattedrale di Sant'Andrea) ist das Wahrzeichen.", "Bekannt für Limoncello und die sfusato amalfitano Zitrone.", "Historisches Zentrum der Papierherstellung (Bambagina).", "Ein sehr beliebtes, oft überlaufenes Touristenziel."],
      hu: ["Olaszország négy nagy tengeri köztársaságának egyike volt.", "A festői Amalfi-part (UNESCO-örökség) névadója.", "Az amalfi dóm (Cattedrale di Sant'Andrea) a város jelképe.", "Híres a limoncellóról és a sfusato amalfitano citromról.", "A papírgyártás (Bambagina) történelmi központja.", "Nagyon népszerű, gyakran zsúfolt turisztikai célpont."],
      ro: ["A fost una dintre cele patru mari republici maritime ale Italiei.", "Dă numele pitoreștii Coaste Amalfitane (patrimoniu UNESCO).", "Domul din Amalfi (Cattedrale di Sant'Andrea) este reperul său.", "Cunoscut pentru limoncello și lămâia sfusato amalfitano.", "Centru istoric al producției de hârtie (bambagina).", "O destinație turistică foarte populară, adesea aglomerată."],
      en: ["Was one of the four major maritime republics of Italy.", "Namesake of the picturesque Amalfi Coast (UNESCO heritage).", "The Amalfi Cathedral (Cattedrale di Sant'Andrea) is its landmark.", "Known for limoncello and the sfusato amalfitano lemon.", "Historic center of paper production (bambagina).", "A very popular, often crowded tourist destination."]
    },
    image: "/geo-images/italy/it-amalfi.webp"
  }
];

export const italyAllPoi: POI[] = [
  italyCountry,
  ...italyRegions,
  ...italyCities,
];
