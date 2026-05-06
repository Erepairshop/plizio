// @ts-nocheck
import type { POI } from "./poi";
import { poiExtraAndorraCities } from "./poiExtraAndorraCities";
import { poiExtraAndorraOther } from "./poiExtraAndorraOther";

export const andorraCountry: POI = {
  id: "country-andorra",
  type: "country",
  parent: "europe",
  coords: [1.5218, 42.5063],
  name: {
    de: "Andorra",
    hu: "Andorra",
    ro: "Andorra",
    en: "Andorra"
  },
  description: {
    de: "Andorra ist ein kleiner, malerischer Zwergstaat in den Pyrenäen zwischen Spanien und Frankreich, bekannt für seine Berge und Steuervorteile.",
    hu: "Andorra egy kis, festői törpeállam a Pireneusokban Spanyolország és Franciaország között, amely hegyeiről és adókedvezményeiről ismert.",
    ro: "Andorra este un mic și pitoresc microstat din Pirinei, între Spania și Franța, cunoscut pentru munții săi și facilitățile fiscale.",
    en: "Andorra is a small, picturesque microstate in the Pyrenees between Spain and France, known for its mountains and tax advantages."
  },
  descriptionAdvanced: {
    de: "Das Fürstentum Andorra liegt hoch in den Pyrenäen und lockt mit erstklassigen Skigebieten wie Grandvalira und Vallnord sowie einer atemberaubenden Bergwelt. Neben dem Tourismus ist das Land für seinen Status als Steuerparadies und seine zahlreichen Einkaufsmöglichkeiten bekannt. Politisch ist es ein Co-Fürstentum, regiert vom Bischof von Urgell und dem französischen Staatspräsidenten.",
    hu: "Az Andorrai Hercegség magasan a Pireneusokban fekszik, kiváló síterepekkel (Grandvalira, Vallnord) és lélegzetelállító hegyvidékkel csábítja a látogatókat. A turizmus mellett az ország adóparadicsomi státuszáról és bevásárlási lehetőségeiről is ismert. Politikailag egy társhercegség, melynek államfői az urgelli püspök és a francia köztársasági elnök.",
    ro: "Principatul Andorra este situat la mare altitudine în Pirinei și atrage turiști prin stațiunile sale de schi de primă clasă, precum Grandvalira și Vallnord, și peisajul montan uluitor. Pe lângă turism, țara este cunoscută pentru statutul său de paradis fiscal și numeroasele opțiuni de cumpărături. Politic, este un coprincipat condus de Episcopul de Urgell și de Președintele Franței.",
    en: "The Principality of Andorra is located high in the Pyrenees and attracts visitors with world-class ski resorts like Grandvalira and Vallnord, along with breathtaking mountain scenery. Besides tourism, the country is known for its status as a tax haven and its numerous shopping opportunities. Politically, it is a co-principality governed by the Bishop of Urgell and the French President."
  },
  factsAdvanced: {
    de: [
      "Höchstgelegener Staat Europas.",
      "Einzigartiges politisches System des Ko-Fürstentums.",
      "Mehr als 300 Sonnentage im Jahr.",
      "Nur 8% des Landes sind bebaut, der Rest ist Natur.",
      "Amtssprache ist Katalanisch."
    ],
    hu: [
      "Európa legmagasabban fekvő állama.",
      "Egyedülálló társhercegségi politikai rendszer.",
      "Több mint 300 napsütéses nap évente.",
      "Az ország csupán 8%-a beépített, a többi természetes terület.",
      "Hivatalos nyelve a katalán."
    ],
    ro: [
      "Este cel mai înalt stat din Europa.",
      "Un sistem politic unic co-principal.",
      "Peste 300 de zile însorite pe an.",
      "Doar 8% din țară este construită, restul este natural.",
      "Limba sa oficială este catalana."
    ],
    en: ["Highest country in Europe by average elevation.", "Unique political system of a co-principality.", "More than 300 sunny days a year.", "Only 8% of the country is built up, the rest is nature.", "Catalan is the official language."]
  },
  facts: {
    de: [
      "Andorra hat keine eigene Armee.",
      "Die Amtssprache ist Katalanisch.",
      "Andorra gehört nicht zur EU, verwendet aber den Euro.",
      "Die Lebenserwartung in Andorra ist eine der höchsten der Welt.",
      "Andorra ist das sechstkleinste Land Europas."
    ],
    hu: [
      "Andorrának nincs saját hadserege.",
      "A hivatalos nyelv a katalán.",
      "Andorra nem tagja az EU-nak, de az eurót használja.",
      "A várható élettartam Andorrában az egyik legmagasabb a világon.",
      "Andorra Európa hatodik legkisebb országa."
    ],
    ro: [
      "Andorra nu are armată proprie.",
      "Limba oficială este catalana.",
      "Andorra nu este membră a UE, dar folosește moneda Euro.",
      "Speranța de viață în Andorra este una dintre cele mai mari din lume.",
      "Andorra este a șasea cea mai mică țară din Europa."
    ],
    en: [
      "Andorra does not have its own army.",
      "The official language is Catalan.",
      "Andorra is not in the EU but uses the Euro.",
      "Life expectancy in Andorra is one of the highest in the world.",
      "Andorra is the sixth smallest country in Europe."
    ]
  },
  image: "/geo-images/andorra/country-andorra.webp"
};

export const andorraCities: POI[] = [
  {
    id: "city-andorra-la-vella",
    type: "state-capital",
    parent: "country-andorra",
    coords: [1.5218, 42.5063],
    name: { de: "Andorra la Vella", hu: "Andorra la Vella", ro: "Andorra la Vella", en: "Andorra la Vella" },
    description: {
      de: "Die höchstgelegene Hauptstadt Europas.",
      hu: "Európa legmagasabban fekvő fővárosa.",
      ro: "Capitala situată la cea mai mare altitudine din Europa.",
      en: "The highest capital city in Europe."
    },
    descriptionAdvanced: {
      de: "Andorra la Vella ist nicht nur ein Verwaltungszentrum, sondern das pulsierende, kosmopolitische Herz des Fürstentums auf 1.023 Metern Höhe. Die Stadt bietet eine einzigartige Mischung aus Moderne und Geschichte: Die glitzernde Avinguda Meritxell mit ihren Duty-Free-Geschäften ist nur wenige Gehminuten vom Barri Antic, der Altstadt mit ihren Kopfsteinpflasterstraßen und Steinhäusern, entfernt. Sie ist ein ausgezeichneter Ausgangspunkt, um die umliegenden Skigebiete und Wanderwege zu erkunden.",
      hu: "Andorra la Vella nem csupán egy adminisztratív központ, hanem a hercegség nyüzsgő, kozmopolita szíve, 1023 méteres magasságban. A város a Valira folyó völgyében terül el, meredek hegyek ölelésében. A modernitás és a történelem különleges egyvelegét kínálja: a vámmentes üzletekkel teli, csillogó Meritxell sugárút pár perces sétára van a Barri Antictól, az óváros macskaköves utcáitól és kőházaitól. Itt található a Casa de la Vall, az egykori parlament, és a Sant Esteve-templom. A város kiváló kiindulópont a környező síterepek és túraútvonalak felfedezéséhez, miközben gazdag gasztronómiai és kulturális kínálattal várja a látogatókat a nap végén.",
      ro: "Andorra la Vella nu este doar un centru administrativ, ci și inima vibrantă și cosmopolită a principatului, la o altitudine de 1.023 de metri. Orașul oferă un amestec unic de modernitate și istorie: strălucitoarea Avinguda Meritxell, cu magazinele sale duty-free, se află la doar câteva minute de mers pe jos de Barri Antic, orașul vechi cu străzile sale pietruite și casele de piatră. Este un punct de plecare excelent pentru a explora stațiunile de schi și traseele de drumeție din jur.",
      en: "Andorra la Vella, the capital of the Principality of Andorra, is a bustling hub nestled high in the Pyrenees mountains. At an altitude of 1,023 meters, it holds the distinction of being Europe's highest capital city. The city is a major draw for tourists, not just for its stunning mountain scenery but also for its extensive duty-free shopping along Avinguda Meritxell. The historic quarter, or 'Barri Antic', offers a glimpse into the past with its stone-paved streets and the historic Casa de la Vall parliament building. It's a city where modernity and tradition converge, offering both vibrant urban life and easy access to nature. Geography K7 - Capital cities and their functions."
    },
    factsAdvanced: {
      de: [
        "Mit 1.023 Metern über dem Meeresspiegel die höchstgelegene Hauptstadt Europas.",
        "Der Name bedeutet 'das alte Andorra'.",
        "Die berühmte Skulptur 'Die Noblesse der Zeit' von Salvador Dalí ist ein modernes Wahrzeichen.",
        "Das größte Fest der Stadt, die Festa Major, findet jährlich im August statt.",
        "Das historische Zentrum, das Barri Antic, bewahrt seine mittelalterliche Atmosphäre.",
        "Duty-Free-Shopping ist eine Hauptattraktion für Touristen."
        ],
      hu: [
        "1023 méteres tengerszint feletti magasságával Európa legmagasabban fekvő fővárosa.",
        "Nevének jelentése 'az öreg Andorra'.",
        "A városon keresztülfolyik a Gran Valira folyó.",
        "Népessége körülbelül 22 000 fő, ami az ország lakosságának majdnem egyharmada.",
        "Salvador Dalí 'Az idő nemessége' című híres szobra a város egyik modern jelképe.",
        "A város minden év augusztusában tartja nagy ünnepét, a Festa Majort.",
        "A történelmi központ, a Barri Antic, a 21. században is megőrizte középkori hangulatát.",
        "Az adómentes vásárlás a város egyik fő vonzereje a turisták számára."
      ],
      ro: [
        "Cu o altitudine de 1.023 de metri, este cea mai înaltă capitală din Europa.",
        "Numele său înseamnă 'Andorra cea veche'.",
        "Sculptura faimoasă 'Nobilimea Timpului' de Salvador Dalí este un simbol modern.",
        "Cea mai mare sărbătoare a orașului, Festa Major, are loc anual în august.",
        "Centrul istoric, Barri Antic, își păstrează atmosfera medievală.",
        "Cumpărăturile duty-free sunt o atracție principală pentru turiști."
        ],
      en: [
        "The name 'Vella' does not mean 'old' but comes from the word 'vila', meaning 'town'.",
        "The city's population is around 23,000, but it swells significantly with tourists and shoppers daily.",
        "The Gran Valira river flows through the city.",
        "Salvador Dalí's sculpture 'The Nobility of Time' is a prominent public artwork in the city center.",
        "The city hosted stages of the Tour de France and Vuelta a España cycling races.",
        "Andorra la Vella is a parliamentary co-principality.",
        "The main industry is tourism, accounting for an estimated 80% of the GDP.",
        "It is one of the few capitals in the world not to have its own airport; visitors must arrive via Spain or France."
      ]
    }
  },
  {
    id: "city-escaldes-engordany",
    type: "city",
    parent: "country-andorra",
    coords: [1.5341, 42.5083],
    name: { de: "Escaldes-Engordany", hu: "Escaldes-Engordany", ro: "Escaldes-Engordany", en: "Escaldes-Engordany" },
    description: {
      de: "Bekannt für heiße Quellen und das Caldea Spa.",
      hu: "Hőforrásairól és a Caldea fürdőről ismert.",
      ro: "Cunoscută pentru izvoarele termale și complexul Caldea.",
      en: "Known for hot springs and the Caldea Spa."
    },
    descriptionAdvanced: {
      de: "Escaldes-Engordany ist die Stadt des Wassers und des Wohlbefindens, die eng mit der Hauptstadt verbunden ist. Ihr Name leitet sich von den heißen, schwefelhaltigen Thermalquellen ab. Dieser Naturschatz wird im Caldea genutzt, dem größten Berg-Thermalbadkomplex Europas, dessen futuristische Glaspyramide zum modernen Symbol der Stadt geworden ist. Neben Wellness ist die Stadt auch ein wichtiges Handelszentrum. Die Kultur wird durch das Carmen Thyssen Museum und das Parfummuseum repräsentiert.",
      hu: "Escaldes-Engordany a víz és a wellness városa, amely szorosan egybeépült a fővárossal. Nevét a területén feltörő, kénben és ásványi anyagokban gazdag forró vizekről kapta. Ezt a természeti kincset hasznosítja a Caldea, Európa legnagyobb hegyi termálfürdő-komplexuma, melynek futurisztikus üvegpiramisa a város modern szimbólumává vált. A wellness mellett a város fontos kereskedelmi központ is, az Avinguda Carlemany sétálóutca a fővárosi Meritxell sugárút folytatása. A kultúra iránt érdeklődők a Carmen Thyssen Múzeumot és a Parfüm Múzeumot is itt találják. Escaldes ad otthont a Madriu-Perafita-Claror völgy egy részének is, amely az UNESCO Világörökség része.",
      ro: "Escaldes-Engordany este orașul apei și al bunăstării, strâns legat de capitală. Numele său provine de la izvoarele termale fierbinți, bogate în sulf și minerale. Această resursă naturală este utilizată la Caldea, cel mai mare complex balnear montan din Europa, a cărui piramidă de sticlă futuristă a devenit un simbol modern al orașului. Pe lângă wellness, orașul este și un important centru comercial. Cultura este reprezentată de Muzeul Carmen Thyssen și Muzeul Parfumului.",
      en: "Escaldes-Engordany is a parish renowned for its natural thermal waters, which are harnessed in the futuristic Caldea-INÚU spa complex, the largest of its kind in southern Europe. The name 'Escaldes' itself refers to the presence of these hot springs. The parish is a major commercial and tourist center, seamlessly connected to the capital, Andorra la Vella. Its main artery, Avinguda Carlemany, is a bustling pedestrianized shopping street. Beyond the commerce and wellness, the parish also holds a portion of the Madriu-Perafita-Claror Valley, a UNESCO World Heritage site, offering pristine landscapes for hiking. Urban Geography K8 - Urban development and functional zones."
    },
    factsAdvanced: {
      de: [
        "Der Name der Stadt leitet sich vom lateinischen Wort 'calidae' (heiße Wasser) ab.",
        "Andorras jüngste Gemeinde, 1978 von Andorra la Vella getrennt.",
        "Das Thermalwasser von Caldea tritt mit einer Temperatur von 68°C aus.",
        "Der Zusammenfluss der Flüsse Valira d'Orient und Valira del Nord befindet sich hier.",
        "Beherbergt das historische Pont d'Engordany.",
        "Veranstaltet ein jährliches Jazzfestival."
        ],
      hu: [
        "A város neve a latin 'calidae' (forró vizek) szóból ered.",
        "Andorra legfiatalabb közössége, 1978-ban vált külön Andorra la Vellától.",
        "A Caldea komplexum termálvize 68°C-os hőmérsékleten tör a felszínre.",
        "Itt egyesül a Valira d'Orient és a Valira del Nord, létrehozva a Gran Valira folyót.",
        "A városban található a történelmi Pont d'Engordany híd.",
        "Az Art Központ (CAEE) a román kori művészetnek és a Föld modellezésének szentelt kiállításoknak ad otthont.",
        "A város évente jazz fesztivált rendez.",
        "Az Engordany történelmi városrész megőrizte hagyományos pireneusi építészetét."
      ],
      ro: [
        "Numele orașului provine din latinescul 'calidae' (ape fierbinți).",
        "Cea mai tânără parohie din Andorra, separată de Andorra la Vella în 1978.",
        "Apa termală a complexului Caldea iese la suprafață la 68°C.",
        "Aici se unesc râurile Valira d'Orient și Valira del Nord, formând Gran Valira.",
        "Orașul găzduiește podul istoric Pont d'Engordany.",
        "Organizează anual un festival de jazz."
        ],
      en: [
        "It is the second most populated parish in Andorra.",
        "The parish was formed relatively recently, in 1978, by separating from Andorra la Vella.",
        "The water from its hot springs can reach temperatures of up to 70°C (158°F).",
        "It is home to the Carmen Thyssen Museum, displaying a significant art collection.",
        "The historic center of Engordany preserves traditional stone architecture.",
        "The confluence of the two main rivers, Valira d'Orient and Valira del Nord, occurs here.",
        "An annual international jazz festival is a major cultural event.",
        "The Pont d'Engordany is a medieval bridge that is a testament to the area's history."
      ]
    }, image: "/poi-images/city-escaldes-engordany.webp"},
  {
    id: "city-encamp",
    type: "city",
    parent: "country-andorra",
    coords: [1.5801, 42.5360],
    name: { de: "Encamp", hu: "Encamp", ro: "Encamp", en: "Encamp" },
    description: {
      de: "Tor zum Skigebiet Grandvalira per Funicamp.",
      hu: "Kapu a Grandvalira síterephez a Funicamp révén.",
      ro: "Poartă către zona de schi Grandvalira prin Funicamp.",
      en: "Gateway to the Grandvalira ski resort via Funicamp."
    },
    descriptionAdvanced: {
      de: "Encamp, im Herzen von Andorra gelegen, ist eine dynamische Stadt, die Tradition und modernen Tourismus perfekt verbindet. Ihre Hauptattraktion ist der Funicamp, eine 6 Kilometer lange, moderne Seilbahn, die Besucher in nur 15 Minuten ins Herz des Skigebiets Grandvalira auf 2.500 Meter Höhe bringt. Die Stadt beherbergt auch das Nationale Automobilmuseum. Für Geschichtsinteressierte bietet der historische Komplex von Les Bons eine mittelalterliche Wachturm und eine romanische Kirche.",
      hu: "Encamp Andorra szívében fekszik, egy dinamikus város, amely tökéletesen ötvözi a hagyományokat a modern turizmussal. Legfőbb vonzereje a Funicamp, egy 6 kilométer hosszú, modern kabinos felvonó, amely 15 perc alatt repíti fel az utasokat a Grandvalira síparadicsom szívébe, 2500 méteres magasságba. A város azonban nem csak a síelésről szól; itt található a Nemzeti Autómúzeum, amely egy lenyűgöző gyűjteményt mutat be a járműipar történetéből. A történelem iránt érdeklődők a Les Bons történelmi komplexumot kereshetik fel, ahol egy középkori őrtorony és egy román stílusú templom is található. Encamp a kontrasztok városa, ahol a modern felvonók árnyékában megbújnak az ősi kőházak.",
      ro: "Encamp, situat în inima Andorrei, este un oraș dinamic care îmbină perfect tradiția cu turismul modern. Principala sa atracție este Funicamp, o telecabină modernă de 6 kilometri lungime, care transportă pasagerii în inima stațiunii de schi Grandvalira, la 2.500 de metri altitudine, în doar 15 minute. Orașul găzduiește și Muzeul Național al Automobilului. Pentru iubitorii de istorie, complexul istoric Les Bons oferă un turn de veghe medieval și o biserică romanică.",
      en: "Encamp is a parish of contrasts, situated in the geographical heart of Andorra. It comprises two distinct main towns: Encamp, a lively urban center near the capital, and Pas de la Casa, a high-altitude ski resort on the French border known for its vibrant nightlife and shopping. The Funicamp, a 6-kilometer-long cable car, provides a direct link from Encamp town to the Grandvalira ski area's slopes. Culturally, Encamp offers the National Automobile Museum and the Electricity Museum. The historical complex of Les Bons provides a window into the region's medieval past. Technology and History K8 - Infrastructure's impact on mountain communities."
    },
    factsAdvanced: {
      de: [
        "Der Funicamp ist eine der längsten Seilbahnen Europas.",
        "Pas de la Casa, an der französischen Grenze, gehört zur Gemeinde.",
        "Der Glockenturm der Pfarrkirche Santa Eulàlia ist der höchste romanische Turm in Andorra.",
        "Das Elektrizitätsmuseum erklärt die Geschichte der Energieversorgung des Landes.",
        "Das UNESCO-anerkannte 'Fallas'-Fest wird zur Sommersonnenwende gefeiert.",
        "Encamp ist die drittbevölkerungsreichste Gemeinde Andorras."
        ],
      hu: [
        "A Funicamp az egyik leghosszabb felvonó Európában.",
        "A közösséghez tartozik Pas de la Casa is, amely a francia határon fekszik.",
        "A Santa Eulàlia plébániatemplom harangtornya a legmagasabb román kori torony Andorrában (23 méter).",
        "Az Elektromossági Múzeum az ország energiaellátásának történetét mutatja be.",
        "Az UNESCO által elismert 'falles' (fáklyás) ünnepség a nyári napfordulókor hagyomány.",
        "Encamp ad otthont a Radio Andorra egykori adóállomásának is.",
        "Az Engolasters-tó és a körülötte lévő túraútvonalak is a közösséghez tartoznak.",
        "Népessége alapján Andorra harmadik legnagyobb közössége."
      ],
      ro: [
        "Funicamp este una dintre cele mai lungi telecabine din Europa.",
        "Pas de la Casa, la granița cu Franța, aparține parohiei.",
        "Turnul clopotniță al bisericii parohiale Santa Eulàlia este cel mai înalt turn romanic din Andorra.",
        "Muzeul Electricității explică istoria aprovizionării cu energie a țării.",
        "Festivalul 'Fallas', recunoscut de UNESCO, este sărbătorit la solstițiul de vară.",
        "Encamp este a treia cea mai populată parohie din Andorra."
        ],
      en: [
        "Pas de la Casa is the only border crossing between Andorra and France.",
        "The Port d'Envalira, at 2,408 meters, is the highest paved pass in the Pyrenees.",
        "The parish church, Santa Eulàlia, boasts the tallest Romanesque bell tower in Andorra, standing at 23 meters.",
        "The town celebrates the summer solstice with traditional 'Fallas', a torch-bearing festival recognized by UNESCO.",
        "It is the third most populated parish in the country.",
        "Radio Andorra, a historic and powerful radio station, was based in Encamp.",
        "The Pessons Lakes, a circle of glacial lakes, are located in the Grau Roig sector of Encamp.",
        "The Engolasters Lake and its hydroelectric power station are crucial for the country's energy supply."
      ]
    }, image: "/poi-images/city-encamp.webp"},
  {
    id: "city-la-massana",
    type: "city",
    parent: "country-andorra",
    coords: [1.5149, 42.5449],
    name: { de: "La Massana", hu: "La Massana", ro: "La Massana", en: "La Massana" },
    description: {
      de: "Basis für das Vallnord Skigebiet.",
      hu: "A Vallnord síterep bázisa.",
      ro: "Baza pentru stațiunea de schi Vallnord.",
      en: "Base for the Vallnord ski resort."
    },
    descriptionAdvanced: {
      de: "La Massana ist das Paradies für aktiven Urlaub und Outdoor-Sport in Andorra. Die Stadt beherbergt Andorras höchsten Gipfel, den Coma Pedrosa (2.942 m). Im Winter ist sie das Tor zum Skigebiet Pal-Arinsal und im Sommer zum weltberühmten Vallnord Bike Park. Eine Seilbahn vom Stadtzentrum aus bietet einfachen Zugang zu den Bergaktivitäten. Die Kultur wird durch das Eisenverarbeitungsmuseum Farga Rossell und das Comic-Museum repräsentiert.",
      hu: "La Massana az aktív pihenés és a szabadtéri sportok paradicsoma Andorrában. A város a Valira del Nord völgyében fekszik, és innen indul a kabinos felvonó a Pal-Arinsal síterepre, amely télen a síelők és snowboardosok, nyáron pedig a világhírű Vallnord Bike Park otthona. A közösség területén emelkedik Andorra legmagasabb csúcsa, a 2942 méteres Coma Pedrosa, amely népszerű célpont a hegymászók körében. La Massana azonban nemcsak a sportról szól; a városközpontban pezsgő az élet, tele éttermekkel és bárokkal. A kultúrát a Farga Rossell vaskohó-múzeum és a Képregény Múzeum képviseli. La Massana tökéletes választás azoknak, akik a természeti szépséget és az aktív kikapcsolódást keresik.",
      ro: "La Massana este paradisul vacanțelor active și al sporturilor în aer liber din Andorra. Orașul găzduiește cel mai înalt vârf din Andorra, Coma Pedrosa (2.942 m). Iarna, este poarta de acces către stațiunea de schi Pal-Arinsal, iar vara, către faimosul parc de biciclete Vallnord. O telecabină din centrul orașului oferă acces facil la activitățile montane. Cultura este reprezentată de muzeul de prelucrare a fierului Farga Rossell și de Muzeul Benzilor Desenate.",
      en: "La Massana is celebrated as Andorra's 'most active' parish, a true paradise for outdoor sports enthusiasts. It is home to the country's highest peak, Coma Pedrosa (2,942 m), which is located within a protected nature park. In winter, the Pal-Arinsal ski resort (part of the larger Vallnord area) offers slopes for all abilities. In summer, the same mountains transform into the Vallnord Bike Park, one of Europe's most prestigious mountain biking destinations and a regular host for UCI World Cup events. A cable car from the town center provides easy access to the mountain activities. Economics K8 - Economic models based on sports tourism."
    },
    factsAdvanced: {
      de: [
        "Die Gemeinde beherbergt den höchsten Berg Andorras, den Coma Pedrosa.",
        "Der Vallnord Bike Park ist regelmäßiger Austragungsort von Mountainbike-Weltcup-Rennen.",
        "Die Kirche Sant Climent de Pal hat einen einzigartigen Zwillingsfenster-Glockenturm.",
        "Ein Teil der 'Eisenroute' (Ruta del Ferro) führt durch die Gemeinde.",
        "Das Farga Rossell Museum zeigt die Eisenindustrie des 19. Jahrhunderts.",
        "Die Gemeinde verfügt über mehrere 'Via Ferrata'-Routen."
        ],
      hu: [
        "A közösség ad otthont Andorra legmagasabb hegycsúcsának, a Coma Pedrosának.",
        "A Vallnord Bike Park rendszeresen ad otthont mountain bike világkupa-versenyeknek.",
        "A Sant Climent de Pal templom ikerablakos harangtornya egyedülálló az országban.",
        "A 'Vas útja' (Ruta del Ferro) egy része áthalad a közösség területén.",
        "A Farga Rossell múzeum a 19. századi vasipar emlékeit őrzi.",
        "A városközpontból induló felvonó közvetlen összeköttetést biztosít Pal sípályáival.",
        "A közösség több 'via ferrata' (vasalt út) útvonallal is rendelkezik.",
        "A Pal falu az egyik legjobb állapotban megőrzött példája a hagyományos pireneusi építészetnek."
      ],
      ro: [
        "Parohia găzduiește cel mai înalt vârf din Andorra, Coma Pedrosa.",
        "Parcul de biciclete Vallnord găzduiește regulat curse de Cupa Mondială de mountain bike.",
        "Biserica Sant Climent de Pal are un turn clopotniță unic, cu ferestre gemene.",
        "O parte din 'Ruta del Ferro' (Ruta Fierului) traversează parohia.",
        "Muzeul Farga Rossell prezintă industria fierului din secolul al XIX-lea.",
        "Parohia are mai multe trasee de 'via ferrata'."
        ],
      en: [
        "The parish is home to the villages of Pal and Arinsal, both major tourist centers.",
        "The village of Pal is a well-preserved example of traditional Pyrenean architecture.",
        "The Vallnord Bike Park has over 40 km of trails.",
        "The Iron Route (Ruta del Ferro), which explores Andorra's industrial past, passes through the parish.",
        "La Massana hosts a popular weekly market every Thursday.",
        "The parish has several 'via ferrata' routes for climbing enthusiasts.",
        "The Comic Museum in the town center is a unique cultural attraction.",
        "The Farga Rossell Interpretation Centre showcases the region's history of iron production."
      ]
    }, image: "/poi-images/city-la-massana.webp"},
  {
    id: "city-ordino",
    type: "city",
    parent: "country-andorra",
    coords: [1.5332, 42.5562],
    name: { de: "Ordino", hu: "Ordino", ro: "Ordino", en: "Ordino" },
    description: {
      de: "Historisches Dorf im Norden Andorras.",
      hu: "Történelmi falu Észak-Andorrában.",
      ro: "Sat istoric din nordul Andorrei.",
      en: "Historic village in northern Andorra."
    },
    descriptionAdvanced: {
      de: "Ordino gilt als das kulturelle Herz Andorras. Im Nordwesten gelegen, ist es eine Gemeinde, die für ihre atemberaubende Naturlandschaft und ihre gut erhaltene traditionelle Architektur bekannt ist. Das gesamte Gemeindegebiet wurde zum UNESCO-Biosphärenreservat erklärt. Die Landschaft wird von hohen Gipfeln dominiert. Die Dörfer Ordino, La Cortinada und Ansalonga haben ihren historischen Charme bewahrt. Zu den wichtigsten kulturellen Stätten gehören das Areny-Plandolit-Museum und das Postmuseum.",
      hu: "Ordino Andorra leginkább érintetlen és kulturálisan leggazdagabb faluja, amely egy festői völgyben fekszik az ország északi részén. A teljes közösség területe UNESCO bioszféra-rezervátum, ami tanúskodik a természet megőrzése iránti elkötelezettségéről. A falu központja megőrizte hagyományos pireneusi karakterét a kőből épült házakkal, palatetőivel és kovácsoltvas erkélyeivel. Ordino ad otthont a Casa d'Areny-Plandolit múzeumnak, amely egykor egy befolyásos andorrai család otthona volt, valamint a Postamúzeumnak. A faluból könnyen elérhető a Sorteny-völgy Nemzeti Park és az Ordino-Arcalís síterep, amely a freeride síelés fellegvára. Ordino a nyugalom és a kultúra szigete a nyüzsgő Andorra szívében.",
      ro: "Ordino este considerat inima culturală a Andorrei. Situată în nord-vest, este o parohie renumită pentru peisajele sale naturale uimitoare și arhitectura tradițională bine conservată. Întreaga parohie a fost desemnată Rezervație a Biosferei UNESCO. Peisajul este dominat de vârfuri înalte. Satele Ordino, La Cortinada și Ansalonga și-au păstrat farmecul istoric. Printre siturile culturale cheie se numără Muzeul Areny-Plandolit și Muzeul Poștal.",
      en: "Ordino is considered the cultural heart of Andorra. Located in the northwest, it is a parish renowned for its stunning natural landscapes and well-preserved traditional architecture. The entire parish has been designated a UNESCO Biosphere Reserve, highlighting its commitment to balancing human activity and nature conservation. The landscape is dominated by high peaks, including Pic de Tristaina. The villages of Ordino, La Cortinada, and Ansalonga have retained their historic charm with stone houses and slate roofs. Key cultural sites include the Areny-Plandolit Museum and the Postal Museum. Geography K8 - Biosphere reserves and sustainable development."
    },
    factsAdvanced: {
      de: [
        "Die gesamte Gemeinde ist ein UNESCO-Biosphärenreservat.",
        "Ordino hat die niedrigste Bevölkerungsdichte in Andorra.",
        "Das Skigebiet Ordino-Arcalís ist berühmt für sein Freeride-Gelände.",
        "Das Nationale Auditorium von Andorra befindet sich in Ordino.",
        "Der Naturpark Sorteny-Tal ist bekannt für seine botanische Vielfalt.",
        "Die Gastronomie ist berühmt für traditionelle Berggerichte wie 'trinxat'."
        ],
      hu: [
        "Az egész közösséget az UNESCO 2020-ban bioszféra-rezervátummá nyilvánította.",
        "Ordino rendelkezik a legalacsonyabb népsűrűséggel Andorrában.",
        "Itt található a Miniatűr Múzeum, Nicolai Siadristy mikro-alkotásaival.",
        "A 'Vas útja' (Ruta del Ferro) a közösség ipari múltját mutatja be.",
        "Az Ordino-Arcalís síterep híres a kiváló porhó minőségéről.",
        "A Casa d'Areny-Plandolit az egyetlen teljes egészében megmaradt nemesi ház Andorrában.",
        "A falu ad otthont Andorra Nemzeti Auditóriumának, a komolyzenei élet központjának.",
        "A helyi gasztronómia híres a gombás ételeiről és a 'trinxat'-ról."
      ],
      ro: [
        "Întreaga parohie este o Rezervație a Biosferei UNESCO.",
        "Ordino are cea mai mică densitate a populației din Andorra.",
        "Stațiunea de schi Ordino-Arcalís este renumită pentru terenul său de freeride.",
        "Auditoriul Național al Andorrei se află în Ordino.",
        "Parcul Natural Valea Sorteny este cunoscut pentru diversitatea sa botanică.",
        "Gastronomia este renumită pentru mâncărurile tradiționale montane, cum ar fi 'trinxat'."
        ],
      en: [
        "Ordino has the lowest population density in Andorra.",
        "The Ordino-Arcalís ski area is famous for its off-piste and freeride terrain.",
        "The National Auditorium of Andorra is located in Ordino.",
        "The Iron Route (Ruta del Ferro) also passes through this parish, detailing its industrial history.",
        "The Sorteny Valley Nature Park is known for its botanical diversity, with over 700 species of flowers.",
        "The Miniature Museum displays the incredible micro-miniature art of Nicolai Siadristy.",
        "Its gastronomy is famous for traditional mountain dishes like 'trinxat' (cabbage and potato cake).",
        "The parish was the last in Andorra to get a paved road."
      ]
    }, image: "/poi-images/city-ordino.webp"},
  {
    id: "city-canillo",
    type: "city",
    parent: "country-andorra",
    coords: [1.5976, 42.5671],
    name: { de: "Canillo", hu: "Canillo", ro: "Canillo", en: "Canillo" },
    description: {
      de: "Die größte Gemeinde Andorras.",
      hu: "Andorra legnagyobb kiterjedésű közössége.",
      ro: "Cea mai mare parohie din Andorra.",
      en: "The largest parish in Andorra."
    },
    descriptionAdvanced: {
      de: "Canillo ist flächenmäßig die größte Gemeinde Andorras und ein wichtiges religiöses und abenteuerliches Tourismuszentrum. Hier befindet sich das Heiligtum von Meritxell, der Schutzpatronin von Andorra, dessen moderne Basilika von Ricardo Bofill entworfen wurde. Moderne Attraktionen wie der Aussichtspunkt Roc del Quer und die Tibetische Brücke verbinden sich mit dem romanischen Erbe wie der Kirche Sant Joan de Caselles.",
      hu: "Canillo a vallási és kalandturizmus központja Andorrában. A falu ad otthont a Meritxell-szentélynek, az ország védőszentjének otthonának, amely egyben Andorra legfontosabb zarándokhelye. A modern építészet iránt érdeklődők számára a Ricardo Bofill által tervezett új bazilika lenyűgöző látványt nyújt. Canillo a Grandvalira sírégió része, a Soldeu és El Tarter pályái innen könnyen elérhetők. A kalandvágyók számára a Roc del Quer kilátó és a völgy felett átívelő, lélegzetelállító Tibeti függőhíd kínál felejthetetlen élményeket. A falu központjában található a Palau de Gel (Jégpalota), ahol korcsolyázni, úszni és gokartozni is lehet.",
      ro: "Canillo este centrul turismului religios și de aventură din Andorra. Satul găzduiește Sanctuarul Meritxell, casa sfintei patroane a țării, care este și cel mai important loc de pelerinaj din Andorra. Pentru iubitorii de arhitectură modernă, noua bazilică proiectată de Ricardo Bofill oferă o priveliște impresionantă. Canillo face parte din regiunea de schi Grandvalira, cu pârtiile din Soldeu și El Tarter ușor accesibile. Pentru cei aventuroși, punctul de belvedere Roc del Quer și podul suspendat Tibetan, care traversează valea, oferă experiențe de neuitat.",
      en: "Canillo is the largest parish by area in Andorra and serves as a major religious and adventure tourism hub. It is home to the Sanctuary of Meritxell, the patron saint of Andorra, whose modern basilica was designed by renowned architect Ricardo Bofill. The parish is a key gateway to the vast Grandvalira ski area, with major access points in Soldeu and El Tarter. Modern attractions include the Roc del Quer viewpoint, with its skywalk platform, and the Tibetan Bridge, one of the longest pedestrian suspension bridges in the world. The parish skillfully blends these modern attractions with its Romanesque heritage, such as the church of Sant Joan de Caselles. Architecture K8 - Tradition and innovation in mountain architecture."
    },
    factsAdvanced: {
      de: [
        "Das Dorf Soldeu ist ein regelmäßiger Austragungsort des alpinen Ski-Weltcups.",
        "Die Tibetische Brücke ist 603 Meter lang.",
        "Canillo ist die höchstgelegene Gemeinde des Landes.",
        "Das Motorradmuseum zeigt eine beeindruckende Privatsammlung.",
        "Der Nationalfeiertag Andorras, der 8. September, wird zu Ehren Unserer Lieben Frau von Meritxell gefeiert.",
        "Das Val d'Incles ist ein beliebtes Wandergebiet im Sommer."
        ],
      hu: [
        "Területét tekintve Canillo Andorra legnagyobb közössége.",
        "Itt található a Meritxell-szentély, Andorra nemzeti szentélye.",
        "A 603 méter hosszú Tibeti híd a világ egyik leghosszabb gyalogos függőhídja.",
        "A Roc del Quer kilátóról panorámás kilátás nyílik a völgyre.",
        "A Sant Joan de Caselles templom a román kori építészet egyik legszebb példája az országban.",
        "A Palau de Gel egész évben nyitva tartó sport- és szabadidőközpont.",
        "A Motorkerékpár Múzeum több mint 150 ritka járművet mutat be.",
        "A Val d'Incles völgy népszerű túrahelyszín nyáron."
      ],
      ro: [
        "După suprafață, Canillo este cea mai mare parohie din Andorra.",
        "Aici se află Sanctuarul Meritxell, sanctuarul național al Andorrei.",
        "Podul Tibetan de 603 metri este unul dintre cele mai lungi poduri suspendate pentru pietoni din lume.",
        "Punctul de belvedere Roc del Quer oferă vederi panoramice ale văii.",
        "Biserica Sant Joan de Caselles este unul dintre cele mai frumoase exemple de arhitectură romanică din țară.",
        "Palatul de Gheață (Palau de Gel) este un centru sportiv și de agrement deschis pe tot parcursul anului."
        ],
      en: [
        "The village of Soldeu is a regular host of the FIS Alpine Ski World Cup.",
        "The Tibetan Bridge is 603 meters long and is suspended 158 meters above the valley floor.",
        "Canillo is the highest parish in the country.",
        "The Palau de Gel (Ice Palace) in Canillo offers year-round activities like ice skating and karting.",
        "Andorra's national day, September 8th, is celebrated in honor of Our Lady of Meritxell.",
        "The Val d'Incles is a picturesque U-shaped valley, popular for hiking in the summer.",
        "The Motorcycle Museum in Canillo displays an impressive private collection.",
        "The parish is made up of numerous small villages and hamlets."
      ]
    }, image: "/poi-images/city-canillo.webp"},
  {
    id: "city-sant-julia",
    type: "city",
    parent: "country-andorra",
    coords: [1.4913, 42.4637],
    name: { de: "Sant Julià de Lòria", hu: "Sant Julià de Lòria", ro: "Sant Julià de Lòria", en: "Sant Julià de Lòria" },
    description: {
      de: "Die südlichste und am tiefsten gelegene Stadt.",
      hu: "A legdélibb és legalacsonyabban fekvő város.",
      ro: "Cel mai sudic și cel mai jos oraș.",
      en: "The southernmost and lowest city."
    },
    descriptionAdvanced: {
      de: "Sant Julià de Lòria ist das südliche Tor zu Andorra mit dem mildesten Klima, das historisch den Tabakanbau begünstigte, wie das Tabakmuseum zeigt. Heute ist die Hauptattraktion Naturlandia, ein Abenteuerpark im Wald von La Rabassa, mit dem Tobotronc, der längsten Naturrodelbahn der Welt. Die Stadt ist auch ein Universitätszentrum, was ihr eine jugendliche Atmosphäre verleiht. Die mittelalterliche Brücke Pont de la Margineda ist ein wichtiges historisches Zeugnis.",
      hu: "Sant Julià de Lòria Andorra déli kapuja, a legenyhébb klímájú közösség, amely a spanyol határ mentén fekszik. Ez a földrajzi közelség mindig is meghatározta a város kereskedelmi és kulturális jellegét. Történelmileg a dohánytermesztés központja volt, amiről a Dohánymúzeum tanúskodik. Ma a város fő vonzereje a Naturlandia kalandpark, amely a La Rabassa erdőben található. Itt működik a Tobotronc, a világ leghosszabb alpesi szánkópályája, valamint egy állatpark, ahol a Pireneusok őshonos állatai láthatók. Sant Julià egyben egyetemi város is, az Andorrai Egyetem campusa élénk, fiatalos hangulatot kölcsönöz neki.",
      ro: "Sant Julià de Lòria este poarta de sud a Andorrei, parohia cu cel mai blând climat, situată de-a lungul graniței cu Spania. Această proximitate geografică a definit întotdeauna caracterul comercial și cultural al orașului. Din punct de vedere istoric, a fost centrul cultivării tutunului, fapt atestat de Muzeul Tutunului. Astăzi, principala atracție a orașului este parcul de aventuri Naturlandia, situat în pădurea La Rabassa. Aici se află Tobotronc, cel mai lung tobogan alpin din lume, precum și un parc de animale unde pot fi văzute animalele native din Pirinei.",
      en: "Sant Julià de Lòria is the southernmost parish, acting as the main gateway to Andorra from Spain. Being the lowest-lying parish, it enjoys a milder, more Mediterranean climate than the rest of the country. Historically, the area was a center for tobacco cultivation, a past that is now elegantly showcased in the Tobacco Museum, housed in the former Reig factory. Today, its main draw is Naturlandia, a large adventure park set in the La Rabassa forest, famous for its animal park and the Tobotronc, the world's longest alpine coaster. The parish is also home to a university campus, lending it a vibrant, youthful atmosphere. Economic Geography K7 - Regional transformation from agriculture to services."
    },
    factsAdvanced: {
      de: [
        "Die am tiefsten gelegene Gemeinde Andorras (ca. 900 Meter).",
        "Der Tobotronc ist eine 5,3 km lange Rodelbahn.",
        "Das Tabakmuseum befindet sich in einer ehemaligen Tabakfabrik.",
        "Die mittelalterliche Brücke Pont de la Margineda ist ein wichtiges Denkmal.",
        "Die Kirche Sant Serni de Nagol aus dem 11. Jahrhundert ist auf einer Klippe erbaut.",
        "Der Weinanbau wird in der Gemeinde wiederbelebt."
        ],
      hu: [
        "Ez Andorra legalacsonyabban fekvő közössége (kb. 900 méter).",
        "A Tobotronc szánkópálya 5,3 km hosszú.",
        "A Dohánymúzeum egy egykori dohánygyárban kapott helyet.",
        "A Pont de la Margineda középkori híd a közösség fontos műemléke.",
        "A Sant Serni de Nagol templom a 11. században épült egy sziklaszirtre.",
        "A közösségben újjáéledt a bortermelés, több magaslati borászat is működik.",
        "A Juberri kortárs szoborkert egy meglepő és érdekes látnivaló.",
        "Itt található Andorra egyetlen állandó határátkelője Spanyolország felé."
      ],
      ro: [
        "Este cea mai joasă parohie din Andorra (aprox. 900 de metri).",
        "Toboganul Tobotronc are o lungime de 5,3 km.",
        "Muzeul Tutunului se află într-o fostă fabrică de tutun.",
        "Podul medieval Pont de la Margineda este un monument important al parohiei.",
        "Biserica Sant Serni de Nagol din secolul al XI-lea este construită pe o stâncă.",
        "Producția de vin a fost revitalizată în parohie."
        ],
      en: [
        "The parish directly borders the Spanish region of Catalonia.",
        "The Tobotronc alpine coaster is 5.3 km long and has a vertical drop of 400 meters.",
        "The 11th-century church of Sant Serni de Nagol is perched dramatically on a cliff.",
        "A number of high-altitude wineries are reviving viticulture in the parish.",
        "The border crossing with Spain is open 24 hours a day.",
        "Naturlandia's animal park features species native to the Pyrenees, such as brown bears and wolves.",
        "The parish's Festa Major (main festival) is one of the largest and most popular in Andorra.",
        "The Juberri Gardens, a contemporary sculpture park, is a surprising and delightful attraction."
      ]
    }, image: "/poi-images/city-sant-julia.webp"},
  {
    id: "city-pas-de-la-casa",
    type: "city",
    parent: "country-andorra",
    coords: [1.7336, 42.5428],
    name: { de: "Pas de la Casa", hu: "Pas de la Casa", ro: "Pas de la Casa", en: "Pas de la Casa" },
    description: {
      de: "Beliebter Wintersportort an der französischen Grenze.",
      hu: "Népszerű téli üdülőhely a francia határon.",
      ro: "Stațiune populară de iarnă la granița cu Franța.",
      en: "Popular winter resort on the French border."
    },
    descriptionAdvanced: {
      de: "Pas de la Casa, 'das Haus am Pass', ist die höchstgelegene und östlichste Siedlung Andorras, direkt an der französischen Grenze. Die Höhe von über 2.100 Metern garantiert eine lange und schneesichere Skisaison und hat es zu einem der lebhaftesten Zentren des Skigebiets Grandvalira gemacht. Der Ort dreht sich hauptsächlich um Skifahren und ein pulsierendes Nachtleben mit vielen Bars, Restaurants und Duty-Free-Shops. Der Pass Port d'Envalira verbindet den Ort mit dem Rest von Andorra und ist der höchste asphaltierte Pass der Pyrenäen.",
      hu: "Pas de la Casa, a 'Ház a hágón', Andorra legmagasabban fekvő és legkeletibb települése, közvetlenül a francia határon. A 2100 méter feletti magasság garantálja a hosszú és hóbiztos síszezont, így nem meglepő, hogy a Grandvalira sírégió egyik legélénkebb és legnépszerűbb központjává vált. A település elsősorban a síelésről és a pezsgő éjszakai életről szól, tele bárokkal, éttermekkel és vámmentes üzletekkel. Pas de la Casa a legfiatalabb korosztály kedvelt célpontja. A Port d'Envalira hágó, amely összeköti a települést a többi andorrai várossal, a Pireneusok legmagasabb aszfaltozott hágója, amely télen is nyitva tart.",
      ro: "Pas de la Casa, 'Casa de la Trecătoare', este cea mai înaltă și cea mai estică așezare din Andorra, situată chiar la granița cu Franța. Altitudinea de peste 2.100 de metri garantează un sezon de schi lung și cu zăpadă sigură, transformând-o într-unul dintre cele mai animate centre ale regiunii de schi Grandvalira. Așezarea se concentrează în principal pe schi și o viață de noapte vibrantă, plină de baruri, restaurante și magazine duty-free. Pasul Port d'Envalira leagă așezarea de restul Andorrei și este cel mai înalt pas asfaltat din Pirinei.",
      en: "Pas de la Casa is a high-altitude town and ski resort located in the parish of Encamp, right on the border with France. At an elevation of 2,100 meters, it is one of the highest resorts in the Pyrenees. It's a key part of the Grandvalira ski area, offering extensive slopes and a vibrant, youthful atmosphere. The town is famous for its lively après-ski scene and a wide array of duty-free shops, attracting many visitors from across the border. Its name translates to 'the pass of the house,' referring to a single shepherd's hut that existed there in the early 20th century. It serves as Andorra's only border crossing with France, via the Envalira Pass or tunnel. Tourism Geography K7 - Border towns and cross-border tourism."
    },
    factsAdvanced: {
      de: [
        "Die Siedlung liegt auf über 2.100 Metern Höhe.",
        "Es ist Andorras einziger Grenzübergang zu Frankreich.",
        "Der Name bezieht sich auf eine einzige Hirtenhütte aus dem frühen 20. Jahrhundert.",
        "Der Ort begann erst in den 1950er Jahren mit dem Bau der Skilifte zu wachsen.",
        "Der Port d'Envalira-Pass ist 2.408 Meter hoch.",
        "Beliebt bei jungen Leuten wegen des pulsierenden Nachtlebens."
        ],
      hu: [
        "A település több mint 2100 méteres magasságban fekszik.",
        "Ez Andorra egyetlen határátkelője Franciaország felé.",
        "A név ('Ház a hágón') egyetlen, a 20. század elején itt álló pásztorkunyhóra utal.",
        "A Grandvalira síterep több mint 210 km-nyi sípályával rendelkezik.",
        "A település csak az 1950-es években kezdett el kiépülni a sífelvonók megjelenésével.",
        "Nyáron a terület népszerű a túrázók és a hegyi kerékpárosok körében.",
        "A Port d'Envalira hágó 2408 méter magas.",
        "Pezsgő éjszakai élete miatt a bulizni vágyó fiatalok kedvelt helye."
      ],
      ro: [
        "Așezarea se află la peste 2.100 de metri altitudine.",
        "Este singurul punct de trecere a frontierei Andorrei cu Franța.",
        "Numele se referă la o singură colibă de păstor de la începutul secolului al XX-lea.",
        "Dezvoltarea așezării a început abia în anii 1950, odată cu apariția teleschiurilor.",
        "Pasul Port d'Envalira are o altitudine de 2.408 metri.",
        "Este un loc popular pentru tineri datorită vieții de noapte vibrante."
        ],
      en: [
        "It is the highest town in Andorra and one of the highest in Europe.",
        "The town's growth is directly linked to the development of the ski resort, which opened in 1957.",
        "It has a reputation for being one of the most snow-sure resorts in the Pyrenees.",
        "The town is connected to the rest of Grandvalira's sectors by a comprehensive lift system.",
        "Beyond skiing, shopping is a primary activity for visitors.",
        "The population is highly seasonal, increasing dramatically during the winter months.",
        "The Envalira Tunnel provides an alternative to the high mountain pass, especially in winter.",
        "The nightlife in Pas de la Casa is considered among the liveliest in the Pyrenees."
      ]
    }, image: "/poi-images/city-pas-de-la-casa.webp"},
  {
    id: "city-soldeu",
    type: "city",
    parent: "country-andorra",
    coords: [1.6669, 42.5768],
    name: { de: "Soldeu", hu: "Soldeu", ro: "Soldeu", en: "Soldeu" },
    description: {
      de: "Austragungsort von Ski-Weltcup-Rennen.",
      hu: "Sí Világkupa-versenyek helyszíne.",
      ro: "Gazdă a curselor de la Cupa Mondială de schi.",
      en: "Host of Ski World Cup races."
    },
    descriptionAdvanced: {
      de: "Soldeu, ein malerisches Bergdorf in der Gemeinde Canillo, hat sich zu einem der wichtigsten Zentren des Skigebiets Grandvalira entwickelt. Auf 1.800 Metern Höhe gelegen, ist es durch eine moderne Gondelbahn mit den Pisten verbunden. Soldeu hat sich weltweit einen Namen gemacht, indem es regelmäßig Rennen des Alpinen Ski-Weltcups ausrichtet. Das Dorf konzentriert sich auf hochwertige Dienstleistungen und eine familienfreundliche Atmosphäre. Im Sommer verwandelt sich das Gebiet in ein Paradies für Wanderer und Golfer, mit dem höchstgelegenen Golfplatz Europas.",
      hu: "Soldeu egy festői hegyi falu a Canillo közösségben, amely mára a Grandvalira sírégió egyik legfontosabb és legmodernebb központjává nőtte ki magát. A falu 1800 méteres magasságban fekszik, és egy modern kabinos felvonó köti össze a sípályákkal. Soldeu világhírnevét azzal alapozta meg, hogy rendszeresen ad otthont az Alpesi Sí Világkupa futamainak, köztük a híres Avet lesiklópályán. A falu a minőségi szolgáltatásokra és a családbarát légkörre összpontosít, számos magas színvonalú szállodával, étteremmel és síiskolával. Nyáron a sípályák zöld legelőkké változnak, és a falu a túrázók és a golf szerelmeseinek paradicsomává válik, köszönhetően Európa legmagasabban fekvő golfpályájának.",
      ro: "Soldeu, un sat montan pitoresc din parohia Canillo, a devenit unul dintre cele mai importante centre ale regiunii de schi Grandvalira. Situat la 1.800 de metri altitudine, este conectat la pârtii printr-o telecabină modernă. Soldeu și-a câștigat renumele mondial găzduind regulat curse de Cupa Mondială de schi alpin. Satul se concentrează pe servicii de înaltă calitate și o atmosferă prietenoasă cu familiile. Vara, zona se transformă într-un paradis pentru drumeți și jucători de golf, cu cel mai înalt teren de golf din Europa.",
      en: "Soldeu is a village in the parish of Canillo, internationally renowned as a world-class ski destination. It is a central hub within the Grandvalira ski area, the largest in the Pyrenees. Soldeu is particularly famous for hosting major international ski competitions, including several FIS Alpine Ski World Cup events, on its iconic Avet slope. The village has a sophisticated yet relaxed atmosphere, with a wide range of high-quality hotels, restaurants, and spa facilities. In summer, the ski slopes transform into a lush golf course, the highest in Europe, and numerous hiking and mountain biking trails open up, making it a year-round mountain destination. Sports Science K8 - The impact of altitude on athletic performance and event hosting."
    },
    factsAdvanced: {
      de: [
        "Soldeu ist regelmäßiger Austragungsort von FIS-Weltcuprennen im alpinen Skisport.",
        "Die Avet-Piste ist eine der steilsten und technisch anspruchsvollsten Pisten der Welt.",
        "Hier befindet sich der höchstgelegene 9-Loch-Golfplatz Europas.",
        "Der Name des Dorfes könnte vom lateinischen Wort 'sol' (Sonne) stammen.",
        "Viele Luxus- und Wellnesshotels befinden sich in der Ortschaft.",
        "Im Sommer transportieren die Lifte Wanderer und Mountainbiker."
        ],
      hu: [
        "Soldeu rendszeresen ad otthont FIS Alpesi Sí Világkupa futamoknak.",
        "Az Avet lesiklópálya a világ egyik legmeredekebb és legtechnikásabb pályája.",
        "A falu a Valira d'Orient folyó völgyében fekszik.",
        "Itt található Európa legmagasabban fekvő 9 lyukú golfpályája, 2250 méteren.",
        "A falu neve a latin 'sol' (nap) szóból eredhet, utalva a napos fekvésére.",
        "Számos luxus- és wellness-szálloda található a településen.",
        "A szomszédos El Tarter faluval egy modern felvonórendszer köti össze.",
        "Nyáron a felvonók a túrázókat és a hegyi kerékpárosokat szállítják."
      ],
      ro: [
        "Soldeu găzduiește regulat curse de Cupa Mondială de schi alpin FIS.",
        "Pârtia Avet este una dintre cele mai abrupte și tehnice pârtii din lume.",
        "Aici se află cel mai înalt teren de golf cu 9 găuri din Europa.",
        "Numele satului ar putea proveni de la cuvântul latin 'sol' (soare).",
        "Numeroase hoteluri de lux și de wellness se află în localitate.",
        "Vara, teleschiurile transportă drumeți și cicliști montani."
        ],
      en: [
        "The Avet slope in Soldeu is a challenging black run used for World Cup slalom and giant slalom races.",
        "The Soldeu Golf Course is a 9-hole, par-33 course situated at an altitude of 2,250 meters.",
        "The village is situated at an elevation of 1,800 meters.",
        "It has a significant British and Irish influence, with many English-speaking seasonal workers and tourists.",
        "The main gondola provides swift access to the heart of the ski area.",
        "It is connected by lift and piste to the neighbouring villages of El Tarter and Canillo.",
        "Many of the hotels feature luxurious wellness centers and spas.",
        "The village offers a high-end experience compared to the more budget-focused Pas de la Casa."
      ]
    }, image: "/poi-images/city-soldeu.webp"},
  {
    id: "city-arinsal",
    type: "city",
    parent: "country-andorra",
    coords: [1.4845, 42.5721],
    name: { de: "Arinsal", hu: "Arinsal", ro: "Arinsal", en: "Arinsal" },
    description: {
      de: "Dorf im Valira del Nord Tal, bekannt fürs Skifahren.",
      hu: "Falu a Valira del Nord völgyben, népszerű síhely.",
      ro: "Sat în valea Valira del Nord, popular pentru schi.",
      en: "Village in the Valira del Nord valley, known for skiing."
    },
    descriptionAdvanced: {
      de: "Arinsal ist ein charmantes Bergdorf in der Gemeinde La Massana und eines der Tore zum Skigebiet Pal-Arinsal. Das Dorf hat eine freundliche, familiäre Atmosphäre bewahrt und verfügt gleichzeitig über eine moderne touristische Infrastruktur. Eine moderne Gondelbahn führt vom Dorf zu den Skipisten, die durch eine Hochleistungsseilbahn mit dem benachbarten Sektor Pal verbunden sind. Arinsal ist besonders bei Anfängern, Fortgeschrittenen und Familien beliebt. Im Sommer ist das Dorf ein Paradies für Wanderer, mit Routen zum Gipfel des Coma Pedrosa.",
      hu: "Arinsal egy bájos hegyi falu La Massana közösségben, amely a Pal-Arinsal síterep egyik kapuja. A falu megőrizte barátságos, családias hangulatát, miközben modern turisztikai infrastruktúrával rendelkezik. A településről egy modern kabinos felvonó visz fel a sípályákhoz, amelyeket egy nagy kapacitású drótkötélpálya köt össze a szomszédos Pal szektorral. Arinsal különösen kedvelt a kezdő és középhaladó síelők, valamint a családok körében. Nyáron a falu a túrázók paradicsoma, innen indulnak a legnépszerűbb útvonalak a Coma Pedrosa csúcsára és a közeli tavakhoz. Élénk, angolszász pubokkal tarkított éjszakai élete miatt a fiatalabb korosztály körében is népszerű.",
      ro: "Arinsal este un sat montan fermecător din parohia La Massana și una dintre porțile de acces către stațiunea de schi Pal-Arinsal. Satul și-a păstrat atmosfera prietenoasă, familială, având în același timp o infrastructură turistică modernă. O telecabină modernă duce de la sat la pârtiile de schi, care sunt conectate la sectorul vecin Pal printr-o telecabină de mare capacitate. Arinsal este deosebit de popular printre schiorii începători și intermediari, precum și printre familii. Vara, satul este un paradis pentru drumeți, cu trasee către vârful Coma Pedrosa.",
      en: "Arinsal is a village located in a narrow valley in the parish of La Massana in northwest Andorra. It is primarily known as a friendly, family-oriented ski resort that is part of the Vallnord-Pal-Arinsal ski area. The village sits at an altitude of around 1,550 meters and is linked by a cable car to the Pal sector, forming a combined ski area of over 60 km. Arinsal is particularly popular with beginners and intermediate skiers and snowboarders. During the summer, it's a base for hiking, especially for those looking to conquer Coma Pedrosa, Andorra's highest peak, which lies within the parish. The village has a relaxed, informal atmosphere with numerous pubs and restaurants catering to a diverse international crowd. Sociology K7 - Tourism's effect on small mountain communities."
    },
    factsAdvanced: {
      de: [
        "Das Dorf liegt auf einer Höhe zwischen 1.550 und 1.950 Metern.",
        "Im Sommer ist das Dorf der Haupteingang zum Coma Pedrosa Nationalpark.",
        "Eine 50-Personen-Seilbahn verbindet Arinsal mit dem Pal-Sektor.",
        "Arinsal ist bei britischen und irischen Touristen sehr beliebt.",
        "Die Kirche Sant Andreu d'Arinsal stammt aus dem 17. Jahrhundert.",
        "Im Sommer findet hier das Comapedrosa Skyrace statt."
        ],
      hu: [
        "A falu 1550 és 1950 méter közötti magasságban fekszik.",
        "A Pal-Arinsal síterep összesen 63 km-nyi pályával rendelkezik.",
        "Nyáron a falu a Coma Pedrosa Nemzeti Park fő bejárata.",
        "A 'Teleféric de Arinsal-Pal' egy 50 fős kabin, amely összeköti a két síterepet.",
        "Arinsal népszerű a brit és ír turisták körében, számos pub és étterem szolgálja ki őket.",
        "A falu temploma, a Sant Andreu d'Arinsal, a 17. században épült.",
        "A nyári hónapokban a falu ad otthont a Comapedrosa Skyrace hegyi futóversenynek.",
        "A falu felett található egy via ferrata útvonal is."
      ],
      ro: [
        "Satul se află la o altitudine între 1.550 și 1.950 de metri.",
        "Vara, satul este intrarea principală în Parcul Național Coma Pedrosa.",
        "O telecabină de 50 de persoane leagă Arinsal de sectorul Pal.",
        "Arinsal este foarte popular printre turiștii britanici și irlandezi.",
        "Biserica Sant Andreu d'Arinsal datează din secolul al XVII-lea.",
        "Vara, aici are loc cursa de alergare montană Comapedrosa Skyrace."
        ],
      en: [
        "Arinsal is connected to the Pal ski area by a 50-person cable car.",
        "The village is situated in the Valira del Nord valley.",
        "It's particularly popular with British, Irish, and Spanish tourists.",
        "The Coma Pedrosa Communal Park is located just above the village.",
        "The village retains a few traditional stone buildings, but is mostly modern tourist infrastructure.",
        "The Arinsal river flows through the center of the village.",
        "In summer, the area becomes part of the Vallnord Bike Park.",
        "It has a reputation for a lively but family-friendly après-ski scene."
      ]
    }, image: "/poi-images/city-arinsal.webp"}
];

export const andorraLandmarks: POI[] = [
  {
    id: "landmark-casa-de-la-vall",
    type: "landmark",
    parent: "city-andorra-la-vella",
    coords: [1.5206, 42.5065],
    name: { de: "Casa de la Vall", hu: "Casa de la Vall", ro: "Casa de la Vall", en: "Casa de la Vall" },
    description: {
      de: "Historisches Parlamentsgebäude aus dem 16. Jahrhundert.",
      hu: "Történelmi parlamenti épület a 16. századból.",
      ro: "Clădire istorică a parlamentului din secolul al XVI-lea.",
      en: "Historical parliament building from the 16th century."
    },
    descriptionAdvanced: {
      de: "Die Casa de la Vall ist eines der symbolträchtigsten Gebäude in Andorra la Vella. Erbaut im Jahr 1580, diente es über drei Jahrhunderte als Sitz des andorranischen Parlaments und Gerichts. Heute ist es ein Museum, das die einzigartige politische Geschichte Andorras zeigt. Besucher können die alten Sitzungssäle und die historische Küche besichtigen. Im Garten befindet sich der Schrank der sieben Schlüssel, ein Symbol für die Einheit der sieben Gemeinden des Landes.",
      hu: "A Casa de la Vall, azaz 'A Völgy Háza', Andorra egyik legfontosabb történelmi és szimbolikus épülete. Az Andorra la Vella óvárosában álló, robusztus kőépület 1580-ban épült egy nemesi család számára, majd 1702-ben a Consell de la Terra (a mai andorrai parlament, a Consell General elődje) megvásárolta. Több mint három évszázadon át itt ülésezett a törvényhozás, és itt működött a bíróság is. Az épület ma múzeumként működik, bemutatva Andorra egyedülálló politikai történelmét. Látogathatók a régi üléstermek, a konyha és a bírósági terem. A ház melletti téren áll a 'Hét Kulcs Ládája', amely az ország hét közösségének egységét szimbolizálja.",
      ro: "Casa de la Vall este una dintre cele mai emblematice clădiri din Andorra la Vella. Construită în 1580, a servit drept sediu al parlamentului și al justiției andorrane timp de peste trei secole. Astăzi, este un muzeu care prezintă istoria politică unică a Andorrei. Vizitatorii pot explora vechile săli de ședință și bucătăria istorică. În grădină se află Dulapul cu șapte chei, un simbol al unității celor șapte parohii ale țării.",
      en: "The Casa de la Vall is one of the most emblematic buildings in Andorra la Vella. Constructed in 1580 as a manor and defensive tower for the Busquets family, it was purchased in 1702 to serve as the headquarters of the Consell de la Terra, Andorra's historic parliament. It functioned as the seat of government and justice for over three centuries until the new parliament building was inaugurated in 2011. The building is a magnificent example of traditional Andorran architecture, with thick stone walls and a slate roof. Inside, visitors can explore the old courtroom, the kitchen, and the main chamber where the council met, which features original 16th-century murals and the historic 'Closet of the Seven Keys' where the state's most important documents were kept. History K8 - Systems of Government and Parliament."
    },
    factsAdvanced: {
      de: [
        "Ursprünglich eine befestigte Adelsresidenz der Familie Busquets.",
        "Das Parlament zog 2011 in das neue Gebäude um.",
        "Der 'Schrank der sieben Schlüssel' bewahrte die wichtigsten Dokumente des Landes auf.",
        "Das Motto Andorras, 'Virtus Unita Fortior', ist über dem Eingang eingraviert.",
        "Die Mauern des alten Gerichtssaals sind mit Wandmalereien aus dem 16. Jahrhundert verziert.",
        "Führungen bieten Einblicke in die einzigartige politische Geschichte Andorras."
        ],
      hu: [
        "Az épület eredetileg a Busquets család erődített nemesi kúriája volt.",
        "A parlament 2011-ben költözött át az új, modern épületbe a Casa de la Vall mellé.",
        "A 'Hét Kulcs Ládájában' őrizték az ország legfontosabb dokumentumait, és csak a hét közösség képviselőjének együttes jelenlétében lehetett kinyitni.",
        "Az épület alagsorában egykor börtön is működött.",
        "A bejárat felett Andorra címere látható, alatta az ország mottója: 'Virtus Unita Fortior' (Egységben erősebb az erény).",
        "A régi ülésterem falait 16. századi freskók díszítik.",
        "Az épületet csak vezetett túrák keretében lehet látogatni.",
        "A ház kertjéből gyönyörű kilátás nyílik a völgyre."
      ],
      ro: [
        "Inițial, a fost o reședință nobiliară fortificată a familiei Busquets.",
        "Parlamentul s-a mutat în noua clădire în 2011.",
        "„Dulapul cu șapte chei” păstra cele mai importante documente ale țării.",
        "Deviza Andorrei, 'Virtus Unita Fortior', este gravată deasupra intrării.",
        "Pereții vechii săli de judecată sunt decorați cu picturi murale din secolul al XVI-lea.",
        "Tururile ghidate oferă o perspectivă asupra istoriei politice unice a Andorrei."
        ],
      en: [
        "The name translates to 'House of the Valley'.",
        "The Closet of the Seven Keys required a key from each of the seven parishes to be opened.",
        "The building served as a courthouse, parliament, and even a prison.",
        "It is located in the heart of the Barri Antic, the old town of the capital.",
        "The main floor holds the Council Chamber with its original 16th-century furnishings.",
        "Guided tours are available, offering insight into Andorra's unique political history.",
        "The building is a declared Asset of Cultural Interest.",
        "The gardens of the Casa de la Vall offer beautiful views over the city."
      ]
    }
  },
  {
    id: "landmark-sant-joan-caselles",
    type: "landmark",
    parent: "city-canillo",
    coords: [1.6080, 42.5714],
    name: { de: "Sant Joan de Caselles", hu: "Sant Joan de Caselles", ro: "Sant Joan de Caselles", en: "Sant Joan de Caselles" },
    description: {
      de: "Eine romanische Kirche in Canillo.",
      hu: "Egy román stílusú templom Canillóban.",
      ro: "O biserică romanică în Canillo.",
      en: "A Romanesque church in Canillo."
    },
    descriptionAdvanced: {
      de: "Die Kirche Sant Joan de Caselles in Canillo ist ein Juwel der andorranischen Romanik aus dem 11.-12. Jahrhundert. Sie zeichnet sich durch ihren hohen Glockenturm im lombardischen Stil und ein prächtiges gotisches Altarretabel aus dem 16. Jahrhundert aus. Im Inneren befinden sich auch Reste romanischer Fresken, darunter eine Darstellung der Kreuzigung. Die Kirche steht in perfekter Harmonie mit der umgebenden Alpenlandschaft und ist ein Muss für Liebhaber von Kunst und Geschichte.",
      hu: "A Canillo határában, a Valira d'Orient folyó partján álló Sant Joan de Caselles templom az andorrai román kori építészet egyik legszebb és legjobb állapotban megőrzött példája. A 11-12. században épült templom a lombard stílus jellegzetességeit viseli magán: magas, különálló harangtorony, félköríves apszis és egyszerű, téglalap alaprajz. Belül egy lenyűgöző, 16. századi gótikus-reneszánsz oltárkép található, amely Szent János életének jeleneteit ábrázolja. Az apszisban 12. századi román kori freskók maradványai is láthatók, melyek a 'Maiestas Domini'-t (Krisztus dicsőségben) ábrázolják. A templom tökéletes harmóniában áll a környező alpesi tájjal.",
      ro: "Biserica Sant Joan de Caselles din Canillo este o bijuterie a arhitecturii romanice andorrane din secolele XI-XII. Se remarcă prin turnul său clopotniță înalt în stil lombard și un magnific retablu gotic din secolul al XVI-lea. În interior, se păstrează și resturi de fresce romanice, inclusiv o reprezentare a Răstignirii. Biserica se află în perfectă armonie cu peisajul alpin înconjurător și este o vizită obligatorie pentru iubitorii de artă și istorie.",
      en: "Sant Joan de Caselles is a prime example of Andorran Romanesque architecture, located just outside the town of Canillo. Dating back to the 11th-12th centuries, the church has a distinctive rectangular nave, a semi-circular apse, and a striking bell tower in the Lombard Romanesque style. Inside, it houses a magnificent stucco sculpture of Christ in Majesty surrounded by murals, and a well-preserved 16th-century altarpiece of exceptional quality, depicting scenes from the life of St. John the Evangelist. The church's setting, by a river and surrounded by mountains, adds to its charm. It is one of the best-preserved Romanesque churches in the Pyrenees. Art History K7 - Romanesque Art and Architecture."
    },
    factsAdvanced: {
      de: [
        "Der Glockenturm zeichnet sich durch seine doppelten, gewölbten Fenster aus.",
        "Das gotische Altarretabel wird den Meistern Miquel de la Coromina und Guillem de la Borda zugeschrieben.",
        "Der Friedhof um die Kirche enthält alte Grabsteine.",
        "Das Gebäude steht neben einem Motorradmuseum, was einen interessanten Kontrast bildet.",
        "Die Kirche ist auf der Liste des andorranischen Kulturerbes aufgeführt.",
        "Der Eintritt ist in den Sommermonaten frei."
        ],
      hu: [
        "A harangtorony különlegessége, hogy az utolsó szintjén kettős, boltíves ablakok (ikerablakok) vannak.",
        "A templom belsejében egy 12. századi, stukkóból készült 'Kálvária' szoborcsoport is található.",
        "A gótikus oltárképet Miquel de la Coromina és Guillem de la Borda mestereknek tulajdonítják.",
        "A templom körüli temetőben régi sírkövek láthatók.",
        "Az épületet egy motorkerékpár múzeum mellett találjuk, érdekes kontrasztot alkotva.",
        "Az apszis külső falát jellegzetes lombard vakívek és lizénák (falsávok) díszítik.",
        "A templom ingyenesen látogatható a nyári hónapokban.",
        "A templom szerepel Andorra kulturális örökségének listáján."
      ],
      ro: [
        "Turnul clopotniță se remarcă prin ferestrele sale duble, arcuite.",
        "Retablul gotic este atribuit maeștrilor Miquel de la Coromina și Guillem de la Borda.",
        "Cimitirul din jurul bisericii conține pietre funerare vechi.",
        "Clădirea se află lângă un muzeu de motociclete, creând un contrast interesant.",
        "Biserica este inclusă pe lista patrimoniului cultural andorran.",
        "Intrarea este gratuită în lunile de vară."
        ],
      en: [
        "The bell tower is three stories high with mullioned windows.",
        "The church has two porticoes, added in the 16th and 18th centuries.",
        "The altarpiece is attributed to the workshop of Miquel Ramells and Guy de Borgonyó.",
        "It retains some of the original Romanesque frescoes in the apse.",
        "The church is a designated Asset of Cultural Interest in Andorra.",
        "The key to visit the interior can be obtained from the tourist office in Canillo.",
        "Its structure has remained largely unchanged for nearly a thousand years.",
        "The stucco Christ in Majesty is a unique piece in Andorra."
      ]
    }, image: "/poi-images/landmark-sant-joan-caselles.webp"},
  {
    id: "landmark-santa-coloma",
    type: "landmark",
    parent: "city-andorra-la-vella",
    coords: [1.4975, 42.4944],
    name: { de: "Església de Santa Coloma", hu: "Església de Santa Coloma", ro: "Església de Santa Coloma", en: "Església de Santa Coloma" },
    description: {
      de: "Eine der ältesten Kirchen des Landes.",
      hu: "Az ország egyik legrégebbi temploma.",
      ro: "Una dintre cele mai vechi biserici din țară.",
      en: "One of the oldest churches in the country."
    },
    descriptionAdvanced: {
      de: "Die Kirche Santa Coloma d'Andorra ist eines der ältesten und einzigartigsten Sakralbauten des Landes. Sie wurde in der vorromanischen Zeit erbaut und im 12. Jahrhundert um einen einzigartigen, runden lombardischen Glockenturm ergänzt. Die berühmten romanischen Fresken der Apsis wurden in den 1930er Jahren verkauft, aber kürzlich zurückerworben. Heute können diese Malereien in einer innovativen virtuellen Ausstellung, dem Espai Columba, bewundert werden, wo sie auf die Apsiswände projiziert werden.",
      hu: "A Santa Coloma d'Andorra templom az ország egyik legrégebbi és legkülönlegesebb egyházi épülete. A preromán (a román kor előtti) időszakban, a 8-9. században épült templomot a 12. században egy egyedülálló, kör alaprajzú, négyemeletes lombard harangtoronnyal egészítették ki, amely ma az épület legjellegzetesebb része. Az apszist díszítő híres, 12. századi román kori freskókat az 1930-as években eladták és csak nemrég kerültek vissza Andorrába. Ma ezek a festmények egy innovatív, 'video mapping' technikával létrehozott virtuális kiállításon, az Espai Columban tekinthetők meg a templom mellett, ahol az eredeti freskókat vetítik vissza az apszis falára.",
      ro: "Biserica Santa Coloma d'Andorra este una dintre cele mai vechi și mai unice clădiri ecleziastice din țară. Construită în perioada preromanică, a fost completată în secolul al XII-lea cu un turn clopotniță lombard unic, circular. Celebrele fresce romanice ale absidei au fost vândute în anii 1930, dar au fost recent recuperate. Astăzi, aceste picturi pot fi admirate într-o expoziție virtuală inovatoare, Espai Columba, unde sunt proiectate pe pereții absidei.",
      en: "The church of Santa Coloma is one of the oldest and most unusual pre-Romanesque buildings in Andorra, located in the village of Santa Coloma just south of the capital. Originating in the 8th-9th century, its most distinctive feature is the circular four-story bell tower, a rare shape in the Pyrenees, which was added in the 12th century. The church once housed a magnificent collection of 12th-century Romanesque frescoes, including the famous 'Agnus Dei'. While the originals were removed, an innovative video mapping projection now allows visitors to experience the frescoes in their original location. The church stands as a testament to Andorra's earliest Christian history. World History K6 - Early Medieval Europe."
    },
    factsAdvanced: {
      de: [
        "Der runde Glockenturm ist einzigartig in Andorra.",
        "Die berühmten Fresken wurden vom 'Meister von Santa Coloma' geschaffen.",
        "Die Fresken kehrten 2007 nach Andorra zurück.",
        "Der Espai Columba ist ein moderner musealer Raum, der für die Präsentation der Fresken geschaffen wurde.",
        "Die Kirche ist Teil der andorranischen Romanik-Route.",
        "Das Dorf Santa Coloma gehört zur Gemeinde Andorra la Vella."
        ],
      hu: [
        "A kör alaprajzú harangtorony egyedülálló Andorrában.",
        "A templom eredeti, preromán apszisa négyszögletes volt.",
        "A híres freskókat a 'Santa Coloma-i Mester' néven ismert művész alkotta.",
        "A freskók 2007-ben kerültek vissza Andorrába, miután a kormány visszavásárolta őket.",
        "Az Espai Columba egy modern múzeumi tér, amely a freskók bemutatására jött létre.",
        "A templom belsejében egy 18. századi barokk oltár is található.",
        "A templom az andorrai román kori útvonal (Ruta del Romànic) része.",
        "Santa Coloma falu Andorra la Vella közösséghez tartozik."
      ],
      ro: [
        "Turnul clopotniță circular este unic în Andorra.",
        "Celebrele fresce au fost create de 'Maestrul din Santa Coloma'.",
        "Frescele au revenit în Andorra în 2007.",
        "Espai Columba este un spațiu muzeal modern creat pentru prezentarea frescelor.",
        "Biserica face parte din ruta romanică andorrană.",
        "Satul Santa Coloma aparține parohiei Andorra la Vella."
        ],
      en: [
        "It is the only church in Andorra with a circular Lombard-style bell tower.",
        "The main nave of the church is pre-Romanesque.",
        "The original frescoes were sold in the 1930s but have since been mostly recovered by the Andorran government.",
        "The video mapping projection is called the 'Espai Columba'.",
        "The church is dedicated to Saint Columba of Sens, a 3rd-century martyr.",
        "The bell tower is 17.5 meters high.",
        "The site has been excavated, revealing Visigothic and Roman era remains.",
        "It is part of the Andorran Romanesque route."
      ]
    }, image: "/poi-images/landmark-santa-coloma.webp"},
  {
    id: "landmark-sant-climent",
    type: "landmark",
    parent: "city-la-massana",
    coords: [1.4795, 42.5441],
    name: { de: "Sant Climent de Pal", hu: "Sant Climent de Pal", ro: "Sant Climent de Pal", en: "Sant Climent de Pal" },
    description: {
      de: "Romanische Kirche in La Massana.",
      hu: "Román stílusú templom La Massanában.",
      ro: "Biserică romanică în La Massana.",
      en: "Romanesque church in La Massana."
    },
    descriptionAdvanced: {
      de: "Die Kirche Sant Climent de Pal im malerischen Dorf Pal ist ein herausragendes Beispiel der andorranischen Romanik. Erbaut im 11.-12. Jahrhundert, ist ihr auffälligstes Merkmal der dreistöckige lombardische Glockenturm mit seinen einzigartigen Zwillingsfenstern. Im Inneren befinden sich ein barockes Altarretabel und eine romanische Holzstatue der 'Jungfrau von Pal' aus dem 12. Jahrhundert. Die Kirche fügt sich perfekt in das Bild des traditionellen Dorfes ein, das selbst ein geschütztes Baudenkmal ist.",
      hu: "A Sant Climent de Pal templom a La Massana közösséghez tartozó Pal festői falujában található, és az andorrai román kori építészet egyik legérdekesebb példája. A 11-12. században épült templom legfeltűnőbb jellegzetessége a háromszintes lombard harangtorony, amelyet a felső két szinten ikerablakok díszítenek – ez a megoldás egyedülálló Andorrában. A templom belseje egyszerű, de figyelemre méltó a 18. századi barokk oltárkép és egy 12. századi, a 'Pali Szűzanya' néven ismert román kori faszobor. A templomot egy fal veszi körül, amely egykor a temetőt zárta körbe. Az épület tökéletesen illeszkedik a hagyományos kőházakból és palatetőkből álló falu képébe.",
      ro: "Biserica Sant Climent de Pal, situată în pitorescul sat Pal, este un exemplu remarcabil al arhitecturii romanice andorrane. Construită în secolele XI-XII, cea mai izbitoare caracteristică a sa este turnul clopotniță lombard cu trei etaje, cu ferestrele sale gemene unice. În interior se află un retablu baroc și o statuie romanică din lemn a 'Fecioarei din Pal' din secolul al XII-lea. Biserica se integrează perfect în imaginea satului tradițional, care este el însuși un monument istoric protejat.",
      en: "Located in the picturesque village of Pal within the parish of La Massana, Sant Climent de Pal is a quintessential example of Andorran rural Romanesque architecture. The church dates from the late 11th or early 12th century. Its most notable feature is its three-story bell tower, adorned with twin-mullioned windows, a characteristic of the Lombard Romanesque style. This style of bell tower is unique in Andorra, as the windows are not paired. The church also preserves two 18th-century Baroque altarpieces and a 12th-century wooden statue of Our Lady of the Remedies. The village of Pal itself is one of the best-preserved traditional villages in the country, making a visit to the church a trip back in time. Architecture K7 - Romanesque Period."
    },
    factsAdvanced: {
      de: [
        "Der Glockenturm ist der einzige in Andorra mit Zwillingsfenstern.",
        "Das Dorf Pal ist ein geschütztes historisches Ensemble.",
        "Die Kirche beherbergt eine romanische Marienstatue aus Holz.",
        "Sie ist ein wichtiges Beispiel für die ländliche romanische Architektur der Pyrenäen.",
        "Die Kirche steht auf der Liste des andorranischen Kulturerbes.",
        "Sie ist noch immer für Gottesdienste in Gebrauch."
        ],
      hu: [
        "A templom harangtornya az egyetlen Andorrában, amely ikerablakokkal rendelkezik.",
        "Az ablakok nemcsak díszítő, hanem akusztikai funkciót is elláttak, segítve a harangszó terjedését.",
        "A templom egyhajós, félköríves apszissal.",
        "A bejáratot egy előtető (tornác) védi.",
        "Pal falu maga is védett műemlékegyüttes, a hagyományos pireneusi építészet egyik legjobb példája.",
        "A templom kulcsa a falu egyik házánál kérhető el.",
        "A templomban található Szűz Mária szobor a román kori faszobrászat szép példája.",
        "A templom szerepel az andorrai kulturális örökség listáján."
      ],
      ro: [
        "Turnul clopotniță este singurul din Andorra cu ferestre gemene.",
        "Satul Pal este un ansamblu istoric protejat.",
        "Biserica adăpostește o statuie romanică din lemn a Fecioarei Maria.",
        "Este un exemplu important al arhitecturii romanice rurale din Pirinei.",
        "Biserica este inclusă pe lista patrimoniului cultural andorran.",
        "Este încă folosită pentru slujbe."
        ],
      en: [
        "The church's bell tower is one of the most photographed in Andorra.",
        "It is dedicated to Saint Clement of Rome.",
        "The village of Pal is a protected site, ensuring the preservation of its traditional architecture.",
        "The church is still in active use by the local community.",
        "The original Romanesque frescoes from the interior are now kept in Barcelona.",
        "Guided tours can be arranged through the La Massana tourist office.",
        "The church is built from local granite stone.",
        "The windows in the bell tower are progressively larger on each level, creating a sense of height."
      ]
    }, image: "/poi-images/landmark-sant-climent.webp"},
  {
    id: "landmark-sant-marti",
    type: "landmark",
    parent: "city-ordino",
    coords: [1.5186, 42.5766],
    name: { de: "Sant Martí de la Cortinada", hu: "Sant Martí de la Cortinada", ro: "Sant Martí de la Cortinada", en: "Sant Martí de la Cortinada" },
    description: {
      de: "Romanische Kirche mit Wandmalereien.",
      hu: "Román stílusú templom falfestményekkel.",
      ro: "Biserică romanică cu picturi murale.",
      en: "Romanesque church with wall paintings."
    },
    descriptionAdvanced: {
      de: "Die Kirche Sant Martí in La Cortinada ist ein kunsthistorischer Schatz, der die Juwelen der andorranischen Romanik bewahrt. Die ursprünglich im 12. Jahrhundert erbaute Kirche wurde später erweitert und vereint romanische und barocke Stilelemente. Ihre Besonderheit sind die gut erhaltenen Wandmalereien aus dem späten 12. Jahrhundert, die das Leben des Heiligen Martin und fantastische Tierfiguren darstellen. Zur Kirche gehören auch schmiedeeiserne Gitter aus dem 17. und 18. Jahrhundert, ein Taubenschlag und eine alte Wassermühle.",
      hu: "A La Cortinada faluban található Sant Martí-templom egy igazi művészettörténeti kincs, amely az andorrai román kor ékességeit őrzi. Az eredetileg a 12. században épült templomot a 17. és 18. században jelentősen kibővítették, így a román kori és barokk stílusjegyek keverednek benne. A templom igazi különlegessége a 12. század végi, kiváló állapotban megmaradt falfestmény-együttes, amelyet a 'Cortinadai Mester' alkotott. A freskók Szent Márton életét, valamint fantasztikus állatfigurákat és a hónapokat ábrázolják. A templomhoz tartozik egy 17-18. századi kovácsoltvas rács, egy galambdúc és egy régi vízimalom is.",
      ro: "Biserica Sant Martí din La Cortinada este un tezaur de istorie a artei care păstrează bijuteriile perioadei romanice andorrane. Construită inițial în secolul al XII-lea, biserica a fost extinsă ulterior, combinând elemente de stil romanic și baroc. Caracteristica sa specială este ansamblul de picturi murale bine conservate de la sfârșitul secolului al XII-lea, care înfățișează viața Sfântului Martin și figuri de animale fantastice. Biserica include, de asemenea, grilaje din fier forjat din secolele XVII-XVIII, un porumbar și o moară de apă veche.",
      en: "The church of Sant Martí de la Cortinada, located in the parish of Ordino, is a Romanesque gem that was extended in the 17th and 18th centuries. The original 12th-century church preserves a significant set of Romanesque mural paintings attributed to the 'Master of La Cortinada'. These frescoes depict fantastical animals, a bishop, and figures from the lives of saints. Later additions to the church include beautiful wrought-iron railings, typical of Andorran craftsmanship, and several Baroque altarpieces. The church is part of a larger historical site that includes a traditional water-powered sawmill and a manor house, offering a comprehensive look at life in rural Andorra through the centuries. Art History K7 - Narrative in Medieval Art."
    },
    factsAdvanced: {
      de: [
        "Die Fresken wurden im 20. Jahrhundert hinter dem barocken Altar wiederentdeckt.",
        "Das Bestiarium mit fantastischen Tieren ist einzigartig in der Pyrenäenregion.",
        "Die schmiedeeisernen Gitter sind Meisterwerke der andorranischen Eisenkunst.",
        "Die alte Mühle neben der Kirche ist heute noch funktionsfähig.",
        "Die Kirche ist eine wichtige Station auf der andorranischen Romanik-Route.",
        "Der Eintritt ist frei und ein Audioguide ist verfügbar."
        ],
      hu: [
        "A templom eredetileg egyhajós volt, de a bővítések során oldalkápolnákkal egészítették ki.",
        "A freskókat a 20. században fedezték fel a barokk oltár mögött.",
        "A fantasztikus állatokat ábrázoló bestiárium egyedülálló a pireneusi régióban.",
        "A templomban több, különböző korokból származó barokk oltárkép is található.",
        "A kovácsoltvas rácsok a 17-18. századi andorrai vasművesség remekei.",
        "A templom melletti régi malom ma is működőképes.",
        "Az épület az andorrai román kori útvonal egyik legfontosabb állomása.",
        "A templom ingyenesen látogatható, audioguide is rendelkezésre áll."
      ],
      ro: [
        "Frescele au fost redescoperite în spatele altarului baroc în secolul al XX-lea.",
        "Bestiarul cu animale fantastice este unic în regiunea Pirineilor.",
        "Grilele din fier forjat sunt capodopere ale meșteșugului andorran al fierului.",
        "Moara veche de lângă biserică este încă funcțională.",
        "Biserica este o oprire importantă pe ruta romanică andorrană.",
        "Intrarea este gratuită și este disponibil un ghid audio."
        ],
      en: [
        "The Romanesque frescoes were rediscovered during a restoration in 1968.",
        "The church has a separate bell tower that was part of the original structure.",
        "The side chapels, sacristy, and nave were enlarged in the Baroque period.",
        "The wrought-iron railings date from the 17th-18th centuries and were made in local forges.",
        "The church is dedicated to Saint Martin of Tours.",
        "A small cemetery surrounds the church.",
        "The village of La Cortinada is on the Iron Route tourist trail.",
        "The combination of Romanesque and Baroque elements is a key feature of the church."
      ]
    }, image: "/poi-images/landmark-sant-marti.webp"},
  {
    id: "landmark-meritxell",
    type: "landmark",
    parent: "city-canillo",
    coords: [1.5830, 42.5540],
    name: { de: "Santuari de Meritxell", hu: "Santuari de Meritxell", ro: "Santuari de Meritxell", en: "Santuari de Meritxell" },
    description: {
      de: "Basilika und wichtigster Wallfahrtsort Andorras.",
      hu: "Bazilika és Andorra legfontosabb zarándokhelye.",
      ro: "Bazilică și principalul loc de pelerinaj din Andorra.",
      en: "Basilica and most important pilgrimage site in Andorra."
    },
    descriptionAdvanced: {
      de: "Das Heiligtum von Meritxell ist das spirituelle Zentrum Andorras und die Heimat seiner Schutzpatronin, Unserer Lieben Frau von Meritxell. Nachdem die ursprüngliche romanische Kirche 1972 niederbrannte, entwarf der berühmte Architekt Ricardo Bofill eine neue, moderne Basilika. Das Gebäude verbindet romanische Elemente mit moderner Architektur und symbolisiert so die Kontinuität des Glaubens. Im Heiligtum wird eine Kopie der romanischen Holzstatue der Jungfrau von Meritxell aufbewahrt, da das Original im Feuer zerstört wurde. Der Ort ist ein Treffpunkt von Glaube, Kultur und Natur.",
      hu: "A Meritxell-szentély Andorra spirituális központja és nemzeti szentélye, a Meritxelli Szűzanya, az ország védőszentjének otthona. Az eredeti, 17. századi román kori templom 1972-ben egy tűzvészben szinte teljesen elpusztult. A romok mellett épült fel a híres katalán építész, Ricardo Bofill által tervezett új, modern bazilika, amelyet 1976-ban szenteltek fel. Az épület a román kori elemeket (mint a harangtorony) ötvözi a modern építészet formanyelvével, szimbolizálva a hit folytonosságát. A szentélyben őrzik a Meritxelli Szűzanya 12. századi, román kori faszobrának másolatát (az eredeti a tűzben megsemmisült). A szentély a hit, a kultúra és a természet találkozási pontja.",
      ro: "Sanctuarul Meritxell este centrul spiritual al Andorrei și casa sfintei sale patroane, Maica Domnului de la Meritxell. După ce biserica romanică originală a ars în 1972, o nouă bazilică modernă a fost proiectată de celebrul arhitect Ricardo Bofill. Clădirea combină elemente romanice cu arhitectura modernă, simbolizând continuitatea credinței. Sanctuarul adăpostește o copie a statuii romanice din lemn a Fecioarei de la Meritxell, originalul fiind distrus în incendiu. Locul este un punct de întâlnire între credință, cultură și natură.",
      en: "The Sanctuary of Meritxell is the spiritual heart of Andorra and home to its patron saint, Our Lady of Meritxell. The original Romanesque chapel, dating from the 12th century, tragically burned down in a fire in 1972, destroying the original statue of the Virgin. A new, grand sanctuary was designed by the renowned Spanish architect Ricardo Bofill and inaugurated in 1976. Bofill's design is a bold and eclectic reinterpretation of Romanesque style, blending elements of architecture, sculpture, and landscape. The complex, which includes the remains of the old church and the new basilica, was declared a Minor Basilica by Pope Francis in 2014. It is part of the Marian Route, linking several major shrines. Architecture K8 - Modernism and Postmodernism."
    },

    factsAdvanced: {
      de: [
        "Die Legende besagt, dass die Statue der Jungfrau im Winter neben einem blühenden Rosenstrauch gefunden wurde.",
        "Der 8. September, der Tag der Muttergottes von Meritxell, ist der Nationalfeiertag Andorras.",
        "Die neue Basilika ist Teil der 'Marianischen Route'.",
        "Die Ruinen der alten Kirche wurden als Mahnmal erhalten.",
        "Papst Franziskus verlieh der Basilika den Titel 'Basilica minor'.",
        "Das Design von Ricardo Bofill integriert die vier natürlichen Elemente."
        ],
      hu: [
        "A legenda szerint a Szűzanya szobrát egy virágzó vadrózsabokor mellett találták meg januárban, hóval borított tájon.",
        "Szeptember 8-a, a Meritxelli Szűzanya napja, Andorra nemzeti ünnepe.",
        "Az új bazilika a 'Máriás Út' (Ruta Mariana) része, amely több spanyol és francia szentélyt köt össze.",
        "A komplexumhoz tartozik egy állandó kiállítás is, 'Meritxell, a memória' címmel.",
        "A régi templom romjai megmaradtak mementóként az új bazilika mellett.",
        "A bazilika elnyerte a 'Basilica minor' címet Ferenc pápától.",
        "Ricardo Bofill terveiben a négy természeti elem - föld, víz, levegő, tűz - is megjelenik.",
        "A szentély Canillo közösségben található, és Andorra egyik leglátogatottabb helye."
      ],
      ro: [
        "Legenda spune că statuia Fecioarei a fost găsită iarna lângă un trandafir înflorit.",
        "8 septembrie, ziua Maicii Domnului de la Meritxell, este sărbătoarea națională a Andorrei.",
        "Noua bazilică face parte din 'Ruta Mariană'.",
        "Ruinele vechii biserici au fost păstrate ca un memorial.",
        "Papa Francisc a acordat bazilicii titlul de 'Basilica minor'.",
        "Designul lui Ricardo Bofill integrează cele patru elemente naturale."
        ],
      en: [
        "The original statue was a Romanesque wood carving of a seated Virgin and Child.",
        "A faithful replica of the original statue is now housed in the new sanctuary.",
        "Andorra's National Day on September 8th is the feast day of Our Lady of Meritxell.",
        "The new sanctuary features a large open cloister and a soaring bell tower.",
        "The design uses materials like stone, slate, and copper to blend with the mountain environment.",
        "The fire in 1972 occurred on the night of the national holiday.",
        "The 'Meritxell Memory' exhibition inside explains the history of the site.",
        "It is the most important religious site in the Principality of Andorra."
      ]
    }, image: "/poi-images/landmark-meritxell.webp"},
  {
    id: "landmark-engolasters-church",
    type: "landmark",
    parent: "city-escaldes-engordany",
    coords: [1.5583, 42.5113],
    name: { de: "Sant Miquel d'Engolasters", hu: "Sant Miquel d'Engolasters", ro: "Sant Miquel d'Engolasters", en: "Sant Miquel d'Engolasters" },
    description: {
      de: "Kirche mit einem markanten Glockenturm.",
      hu: "Templom jellegzetes harangtoronnyal.",
      ro: "Biserică cu un turn clopotniță distinctiv.",
      en: "Church with a distinctive bell tower."
    },
    descriptionAdvanced: {
      de: "Sant Miquel d'Engolasters ist eine romanische Kirche aus dem 12. Jahrhundert, die auf einer Terrasse mit malerischem Blick über das Tal von Andorra la Vella liegt. Ihr markantestes Merkmal ist der 17 Meter hohe, proportionierte Glockenturm im lombardischen Stil. Im Inneren sind Kopien der berühmten romanischen Fresken zu sehen. Die Einfachheit der Kirche und die Schönheit der umliegenden Landschaft bilden eine perfekte Harmonie.",
      hu: "A Sant Miquel d'Engolasters egy 12. századi román kori templom, amely egy teraszon helyezkedik el, festői kilátással Andorra la Vella völgyére, közel az Engolasters-tóhoz. Az épület legjellegzetesebb része a 17 méter magas, arányos lombard stílusú harangtorony. A templom belsejében a híres román kori freskók másolatai láthatók (az eredetieket a barcelonai Katalán Nemzeti Múzeumban őrzik), amelyek a Maiestas Dominit és az arkangyalokat ábrázolják. A templom egyszerűsége és a környező táj szépsége tökéletes harmóniát alkot. A legenda szerint a közeli tó vizének mágikus ereje van, és az építkezéshez is felhasználták.",
      ro: "Sant Miquel d'Engolasters este o biserică romanică din secolul al XII-lea, situată pe o terasă cu o vedere pitorească asupra văii Andorra la Vella. Cea mai distinctivă trăsătură a sa este turnul clopotniță înalt de 17 metri, proporționat, în stil lombard. În interior pot fi văzute copii ale celebrelor fresce romanice. Simplitatea bisericii și frumusețea peisajului înconjurător formează o armonie perfectă.",
      en: "Sant Miquel d'Engolasters is a Romanesque church from the 12th century, perched on a scenic terrace overlooking the Andorra la Vella valley. It is renowned for its elegant, slightly leaning Lombard-style bell tower and the fine Romanesque frescoes that once adorned its apse. The original paintings, attributed to the Master of Santa Coloma, are now displayed in the National Art Museum of Catalonia in Barcelona, but high-quality copies can be seen inside the church. The church has a simple rectangular nave and a semi-circular apse. Its location near Engolasters Lake makes it a popular stop for hikers and those seeking panoramic views. Its distinctive, slightly disproportionate bell tower is one of its most famous features. Art History K7 - Romanesque Fresco Painting."
    },
    factsAdvanced: {
      de: [
        "Der Glockenturm ist ein herausragendes Beispiel für den lombardischen Stil in Andorra.",
        "Die Originalfresken wurden 1925 entfernt und verkauft.",
        "Die Kirche ist nur in den Sommermonaten im Rahmen von Führungen von innen zu besichtigen.",
        "In der Nähe befindet sich der See von Engolasters, ein beliebtes Ausflugsziel.",
        "Die Kirche ist eine wichtige Station auf der andorranischen Romanik-Route.",
        "Eine Legende besagt, dass der Turm mit Wasser aus dem See gebaut wurde."
        ],
      hu: [
        "A harangtorony arányai rendkívül harmonikusak, és a lombard stílus egyik legszebb példája Andorrában.",
        "Az eredeti falfestményeket 1925-ben távolították el és adták el.",
        "A templom egyhajós, félköríves apszissal.",
        "A templomot csak a nyári hónapokban lehet belülről megtekinteni, vezetett túrák keretében.",
        "A templom mellett egy kálvária is található.",
        "Az Engolasters-tó egy népszerű kirándulóhely, amely gyalogosan is elérhető a templomtól.",
        "A templom az andorrai román kori útvonal fontos állomása.",
        "A legenda szerint a torony építéséhez az Engolasters-tó vizét használták habarcsként."
      ],
      ro: [
        "Turnul clopotniță este un exemplu remarcabil al stilului lombard în Andorra.",
        "Frescele originale au fost îndepărtate și vândute în 1925.",
        "Biserica poate fi vizitată în interior doar în lunile de vară, în cadrul tururilor ghidate.",
        "În apropiere se află lacul Engolasters, o destinație populară pentru excursii.",
        "Biserica este o oprire importantă pe ruta romanică andorrană.",
        "O legendă spune că turnul a fost construit cu apă din lac."
        ],
      en: [
        "The bell tower is almost as tall as the nave is long, giving it a unique proportion.",
        "The frescoes depict the Adoration of the Magi and the Archangel Michael fighting a dragon.",
        "The church was built with local pumice stone, which is unusually light.",
        "The church is believed to have been built on the site of an earlier temple.",
        "A legend says the bell tower leans because the ground beneath it is filled with treasure.",
        "It is easily accessible via the road leading to Engolasters Lake.",
        "The porch was added at a later date.",
        "The church offers a perfect viewpoint over the capital city and Escaldes-Engordany."
      ]
    }, image: "/poi-images/landmark-engolasters-church.webp"},
  {
    id: "landmark-pont-margineda",
    type: "landmark",
    parent: "city-sant-julia",
    coords: [1.4920, 42.4830],
    name: { de: "Pont de la Margineda", hu: "Pont de la Margineda", ro: "Pont de la Margineda", en: "Pont de la Margineda" },
    description: {
      de: "Die größte erhaltene mittelalterliche Brücke.",
      hu: "A legnagyobb épen maradt középkori híd.",
      ro: "Cel mai mare pod medieval păstrat.",
      en: "The largest preserved medieval bridge."
    },
    descriptionAdvanced: {
      de: "Die Pont de la Margineda ist die größte und beeindruckendste mittelalterliche Brücke Andorras, die sich über den Fluss Gran Valira spannt. Erbaut im 12.-13. Jahrhundert, ist diese Steinbrücke mit ihrem einzigen, eleganten Bogen ein beeindruckendes Beispiel romanischer Ingenieurskunst. Neben der Brücke steht eine moderne Skulptur, die einen Dialog zwischen Mittelalter und Gegenwart schafft. Die Brücke ist heute für Fußgänger zugänglich und ein geschütztes Denkmal des andorranischen Kulturerbes.",
      hu: "A Pont de la Margineda Andorra legnagyobb és legimpozánsabb középkori hídja, amely a Sant Julià de Lòria és Andorra la Vella közötti régi úton ível át a Gran Valira folyón. A 12-13. században épült, egyetlen, 33 méter fesztávolságú, elegáns ívvel rendelkező kőhíd a román kori mérnöki tudás lenyűgöző példája. A híd legmagasabb pontján egy kis fülke található, amely egykor egy szent szobrát őrizhette. A híd mellett egy modern szobor áll, amelyet a japán művész, Michio Fukazawa készített, emléket állítva az Első Andorrai Nemzetközi Földművészeti Biennálénak. A híd ma is használatban van a gyalogosok számára, és Andorra kulturális örökségének védett műemléke.",
      ro: "Pont de la Margineda este cel mai mare și mai impresionant pod medieval din Andorra, care traversează râul Gran Valira. Construit în secolele XII-XIII, acest pod de piatră cu un singur arc elegant este un exemplu impresionant de inginerie romanică. Lângă pod se află o sculptură modernă, creând un dialog între medieval și contemporan. Podul este astăzi accesibil pietonilor și este un monument protejat al patrimoniului cultural andorran.",
      en: "The Pont de la Margineda is the largest and most slender medieval bridge in Andorra, located in the parish of Sant Julià de Lòria. Spanning the Gran Valira river, this Romanesque bridge dates back to the 12th-13th centuries and was part of the old royal road connecting Sant Julià to the capital. The bridge is notable for its large 33-meter single arch and its construction from local stone bound with lime mortar. A modern sculpture by the Valencian artist Andreu Alfaro stands near the bridge, creating a dialogue between the medieval and the contemporary. The bridge is a testament to the engineering skills of the period and remains a vital piece of Andorra's historical heritage. Engineering History K6 - Bridge Construction."
    },
    factsAdvanced: {
      de: [
        "Die Brücke ist 33 Meter lang und 9,2 Meter hoch.",
        "Sie wurde aus lokalem Granit und Kalkmörtel gebaut.",
        "Sie war von strategischer Bedeutung als einzige Verbindung über das Tal.",
        "Die Brücke wurde im 20. Jahrhundert mehrfach restauriert.",
        "Sie ist ein beliebter Ort für Fotografen und Hochzeitsfotos.",
        "Sie steht auf der Liste des andorranischen Kulturerbes."
        ],
      hu: [
        "A híd 33 méter hosszú és 9,2 méter magas.",
        "A híd építéséhez a környéken bányászott gránitot és habarcsot használtak.",
        "Az útburkolat macskaköves, és a híd két végén alacsony kőkorlát található.",
        "A híd stratégiai fontosságú volt, mivel az egyetlen összeköttetést biztosította a völgy két oldala között.",
        "A hidat a 20. században többször is megerősítették és restaurálták.",
        "A híd népszerű fotótéma és a helyi esküvői fotózások kedvelt helyszíne.",
        "A híd szerepel Andorra postabélyegein is.",
        "A híd környéke kellemes sétákat kínál a folyóparton."
      ],
      ro: [
        "Podul are 33 de metri lungime și 9,2 metri înălțime.",
        "A fost construit din granit local și mortar de var.",
        "A avut o importanță strategică, fiind singura legătură peste vale.",
        "Podul a fost restaurat de mai multe ori în secolul al XX-lea.",
        "Este un loc popular pentru fotografi și ședințe foto de nuntă.",
        "Este inclus pe lista patrimoniului cultural andorran."
        ],
      en: [
        "The main arch has a span of 33 meters and a height of 9.2 meters.",
        "The bridge is built with stone and features a lighter, upper section made of pumice stone to reduce weight.",
        "It is located on the old 'Camí Ral' or royal road.",
        "The bridge has been declared an Asset of Cultural Interest.",
        "It has survived numerous floods over the centuries.",
        "The pavement is cobbled, as it was in medieval times.",
        "The contemporary sculpture nearby is called 'Arc, Punt, Trobada' (Arch, Point, Meeting).",
        "It is a popular spot for photographers and history enthusiasts."
      ]
    }, image: "/poi-images/landmark-pont-margineda.webp"},
  {
    id: "landmark-auto-museum",
    type: "landmark",
    parent: "city-encamp",
    coords: [1.5772, 42.5331],
    name: { de: "Museu Nacional de l'Automòbil", hu: "Museu Nacional de l'Automòbil", ro: "Muzeul Național al Automobilului", en: "National Automobile Museum" },
    description: {
      de: "Museum zur Geschichte des Automobils in Encamp.",
      hu: "Autótörténeti múzeum Encamp-ban.",
      ro: "Muzeu dedicat istoriei automobilului în Encamp.",
      en: "Museum dedicated to automobile history in Encamp."
    },
    descriptionAdvanced: {
      de: "Das Nationale Automobilmuseum in Encamp lädt zu einer faszinierenden Zeitreise durch die Welt der Vierräder ein. Die Sammlung ist eine der bedeutendsten in Europa und zeigt über 80 Autos, 60 Motorräder und hundert Fahrräder von den Dampfmaschinen von 1886 bis zu den Sportwagen der 1970er Jahre. Die Ausstellung veranschaulicht perfekt die technische und ästhetische Entwicklung der Fahrzeuge und beleuchtet, wie das Automobil die Gesellschaft des 20. Jahrhunderts verändert hat.",
      hu: "Az encampi Nemzeti Autómúzeum egy lenyűgöző időutazásra invitálja a látogatókat a négykerekűek világába. A gyűjtemény Európa egyik legjelentősebbje, több mint 80 autót, 60 motorkerékpárt és száz kerékpárt mutat be, az 1886-os gőzgépektől az 1970-es évek sportautóiig. A kiállítás tökéletesen szemlélteti a járművek technikai és esztétikai fejlődését. A látogatók megcsodálhatnak olyan legendás márkákat, mint a Rolls-Royce, a Hispano-Suiza vagy a Bugatti, és bepillantást nyerhetnek abba, hogyan változtatta meg az automobil a 20. század társadalmát. A múzeum nemcsak az autórajongók számára kötelező, hanem mindenkinek, aki érdeklődik a technikatörténet iránt.",
      ro: "Muzeul Național al Automobilului din Encamp invită vizitatorii la o călătorie fascinantă în timp prin lumea celor patru roți. Colecția este una dintre cele mai importante din Europa, prezentând peste 80 de mașini, 60 de motociclete și o sută de biciclete, de la motoarele cu aburi din 1886 până la mașinile sport din anii 1970. Expoziția ilustrează perfect dezvoltarea tehnică și estetică a vehiculelor și arată cum automobilul a schimbat societatea secolului al XX-lea.",
      en: "The National Automobile Museum in Encamp offers a fascinating journey through the history of the automobile, from the earliest steam engines to modern classics. The museum showcases an extraordinary collection of over eighty cars, sixty motorcycles, and a hundred bicycles. The vehicles are arranged chronologically, allowing visitors to trace the evolution of mechanical engineering, design, and social customs. Highlights of the collection include a Pinette steam engine from 1886 and rare models from brands like Hispano-Suiza and Rolls-Royce. It is considered one of the most important automobile collections in Southern Europe. Technology History K8 - The Evolution of Personal Transportation."
    },
    factsAdvanced: {
      de: [
        "Die Sammlung entstand aus der Zusammenlegung mehrerer Privatsammlungen.",
        "Das älteste Ausstellungsstück ist eine Dampfmaschine von 1886.",
        "Das Museum beleuchtet auch den Einfluss des Automobils auf Mode und Tourismus.",
        "Alle ausgestellten Fahrzeuge sind fahrbereit.",
        "Die Sammlung enthält viele seltene und einzigartige Stücke.",
        "Neben den Autos sind auch zeitgenössische Plakate und Accessoires zu sehen."
        ],
      hu: [
        "A gyűjtemény több magángyűjtemény összevonásából jött létre.",
        "A legrégebbi kiállított darab egy 1886-os gőzgép.",
        "A múzeum bemutatja az autózás hatását a divatra és a turizmusra is.",
        "Külön részleg foglalkozik a kerékpárok történetével, a velocipédtől a modern versenykerékpárig.",
        "A kiállított járművek mindegyike működőképes.",
        "A múzeum Encamp központjában, egy modern épületben található.",
        "A gyűjteményben számos ritka és egyedi darab is található.",
        "Az autók mellett korabeli plakátok és kiegészítők is láthatók."
      ],
      ro: [
        "Colecția a fost formată prin unirea mai multor colecții private.",
        "Cel mai vechi exponat este un motor cu aburi din 1886.",
        "Muzeul arată și impactul automobilului asupra modei și turismului.",
        "Toate vehiculele expuse sunt funcționale.",
        "Colecția include multe piese rare și unice.",
        "Pe lângă mașini, sunt expuse și afișe și accesorii de epocă."
        ],
      en: [
        "The collection is the result of private acquisitions over many years.",
        "The museum covers the period from 1886 to the 1970s.",
        "It provides a look at how vehicles have transformed from luxury items to everyday objects.",
        "The exhibits are complemented by maps, posters, and miniature models.",
        "The museum is located in a modern building in the center of Encamp.",
        "It is a popular attraction for families and classic car enthusiasts.",
        "The collection illustrates the rapid technological advancements of the 20th century.",
        "Special exhibitions are sometimes held to focus on a particular brand or era."
      ]
    }, image: "/poi-images/landmark-auto-museum.webp"},
  {
    id: "landmark-casa-rull",
    type: "landmark",
    parent: "city-la-massana",
    coords: [1.5152, 42.5342],
    name: { de: "Museu Casa Rull", hu: "Museu Casa Rull", ro: "Muzeul Casa Rull", en: "Casa Rull Museum" },
    description: {
      de: "Einblicke in das traditionelle andorranische Landleben.",
      hu: "Bepillantás a hagyományos andorrai vidéki életbe.",
      ro: "Informații despre viața rurală tradițională andorrană.",
      en: "Insights into traditional Andorran rural life."
    },
    descriptionAdvanced: {
      de: "Das Museum Casa Rull in Sispony bietet einen einzigartigen Einblick in das ländliche Leben in Andorra im 19. Jahrhundert. Das Gebäude war einst das Zuhause der wohlhabenden Familie Perich und rekonstruiert originalgetreu den damaligen Lebensstil. Besucher können die verschiedenen Teile des Hauses erkunden, von der Küche und Vorratskammer bis hin zu den Wirtschaftsgebäuden. Originalgetreue Möbel, Werkzeuge und Alltagsgegenstände lassen die Vergangenheit lebendig werden und vermitteln ein Bild davon, wie eine autarke Bergbauernfamilie vor dem Zeitalter des Tourismus lebte.",
      hu: "A Casa Rull Múzeum Sispony festői falujában, La Massana közösségben található, és egyedülálló bepillantást nyújt a 19. századi Andorra vidéki életébe. Az épület egykor a gazdag földbirtokos Perich család otthona volt, és a múzeum hűen rekonstruálja az egykori életmódot. A látogatók bejárhatják a ház különböző részeit, a konyhától és az éléskamrától kezdve a hálószobákon át egészen a gazdasági épületekig, ahol az állatokat tartották és a terményeket tárolták. A korhű bútorok, szerszámok és használati tárgyak segítségével megelevenedik a múlt, és képet kapunk arról, hogyan élt egy önellátó, hegyi gazdaságban élő andorrai család a turizmus kora előtt.",
      ro: "Muzeul Casa Rull din Sispony oferă o perspectivă unică asupra vieții rurale din Andorra secolului al XIX-lea. Clădirea a fost odată casa bogatei familii Perich și reconstituie fidel stilul de viață de atunci. Vizitatorii pot explora diferitele părți ale casei, de la bucătărie și cămară până la clădirile anexe. Mobilierul de epocă, uneltele și obiectele de uz casnic aduc la viață trecutul și oferă o imagine a modului în care trăia o familie de fermieri montani autonomi înainte de era turismului.",
      en: "The Casa Rull Museum, located in the village of Sispony in La Massana, is a perfectly preserved example of a traditional 17th-century Andorran house belonging to a wealthy land-owning family. The house was inhabited until the 20th century, and it provides an authentic glimpse into the Pyrenean way of life, where a single building served as a home, barn, and workshop. Visitors can explore the kitchen with its large hearth, the bedrooms, the pantry where food was preserved, and the attic where grain was stored. The house demonstrates the self-sufficient lifestyle of Andorran families, whose wealth was based on agriculture and livestock. Social History K7 - Family and Society in Pre-Industrial Europe."
    },
    factsAdvanced: {
      de: [
        "Die Casa Rull wurde im 17. Jahrhundert erbaut und im 19. Jahrhundert erheblich umgebaut.",
        "Das Haus ist ein typisches Beispiel für die 'borda'-Architektur Andorras.",
        "Die Familie Perich war eine der einflussreichsten Familien Andorras.",
        "Das Museum zeigt die jährlichen Aktivitäten der Familie, von der Aussaat bis zur Schlachtung.",
        "Führungen sind erforderlich, um das Museum zu besuchen.",
        "Das Haus verfügt auch über einen kleinen Garten und einen Gemüsegarten."
        ],
      hu: [
        "A Casa Rull a 17. században épült, de a 19. században jelentősen átalakították.",
        "A ház az andorrai 'borda' típusú építészet jellegzetes példája.",
        "A Perich család Andorra egyik legbefolyásosabb családja volt, amely mezőgazdasággal és állattenyésztéssel foglalkozott.",
        "A múzeum bemutatja azokat a tevékenységeket, amelyek a család éves ciklusát meghatározták, a vetéstől a disznóvágásig.",
        "A házban még a szellemeknek és a mitológiai lényeknek is volt helyük a hiedelmek szerint.",
        "A múzeumot csak vezetett túrák keretében lehet látogatni.",
        "A Casa Rull az 'Andorrai Múzeumok Útvonalának' része.",
        "A házhoz egy kis kert és veteményes is tartozik."
      ],
      ro: [
        "Casa Rull a fost construită în secolul al XVII-lea și a fost modificată semnificativ în secolul al XIX-lea.",
        "Casa este un exemplu tipic de arhitectură 'borda' andorrană.",
        "Familia Perich a fost una dintre cele mai influente familii din Andorra.",
        "Muzeul prezintă activitățile anuale ale familiei, de la semănat la tăierea porcului.",
        "Muzeul poate fi vizitat doar în cadrul tururilor ghidate.",
        "Casa are și o mică grădină și o grădină de legume."
        ],
      en: [
        "The house belonged to the Perich family, prominent local landowners.",
        "The current structure dates mainly from the 17th and 18th centuries.",
        "The ground floor was for livestock and the upper floors for the family.",
        "The museum shows how every space and object had a specific function.",
        "It illustrates the importance of the pig in the traditional diet, with tools for making sausages.",
        "The house was turned into a museum and opened to the public in 2000.",
        "Guided tours explain the social hierarchy and daily routines of the time.",
        "Casa Rull is part of Andorra's network of rural habitat museums."
      ]
    }, image: "/poi-images/landmark-casa-rull.webp"}
];

export const andorraNature: POI[] = [
  {
    id: "nature-coma-pedrosa",
    type: "mountain",
    parent: "country-andorra",
    coords: [1.4428, 42.5908],
    name: { de: "Coma Pedrosa", hu: "Coma Pedrosa", ro: "Coma Pedrosa", en: "Coma Pedrosa" },
    description: {
      de: "Der höchste Berg in Andorra (2.942 m).",
      hu: "Andorra legmagasabb hegye (2942 m).",
      ro: "Cel mai înalt munte din Andorra (2.942 m).",
      en: "The highest mountain in Andorra (2,942 m)."
    },
    descriptionAdvanced: {
      de: "Coma Pedrosa ist mit 2.942 Metern der höchste Gipfel Andorras und liegt im Nordwesten des Landes. Der Berg und das umliegende Tal gehören zum Naturpark Coma Pedrosa Valleys, der eine reiche alpine Flora und Fauna aufweist. Die Besteigung ist eine beliebte Herausforderung für erfahrene Wanderer. Vom Gipfel aus bietet sich bei klarem Wetter ein atemberaubender 360-Grad-Panoramablick auf die Pyrenäen. Am Fuße des Berges befindet sich die Berghütte Coma Pedrosa.",
      hu: "A Coma Pedrosa 2942 méteres magasságával Andorra legmagasabb csúcsa, amely a hercegség északnyugati részén, a spanyol és francia határ közelében emelkedik. A csúcs és a körülötte elterülő völgy a Coma Pedrosa Völgyeinek Természeti Parkjához tartozik, amely gazdag alpesi flórával és faunával rendelkezik. A hegy megmászása népszerű kihívás a tapasztalt túrázók körében; a csúcsra Arinsal faluból indul a leggyakoribb útvonal. A túra során a látogatók gleccsertavakat, például az Estanys de Baiau tavait is megcsodálhatják. A csúcsról tiszta időben lenyűgöző, 360 fokos panoráma nyílik a Pireneusok andorrai, spanyol és francia vonulataira. A hegy lábánál található a Coma Pedrosa menedékház, amely szállást és étkezést biztosít a túrázóknak.",
      ro: "Coma Pedrosa, cu o altitudine de 2.942 de metri, este cel mai înalt vârf din Andorra, situat în nord-vestul țării. Muntele și valea înconjurătoare fac parte din Parcul Natural Văile Coma Pedrosa, care are o bogată floră și faună alpină. Ascensiunea este o provocare populară pentru drumeții experimentați. De pe vârf, pe vreme senină, se deschide o panoramă uluitoare de 360 de grade asupra Pirineilor. La poalele muntelui se află refugiul Coma Pedrosa.",
      en: "Coma Pedrosa is the highest summit in the Principality of Andorra, standing at an impressive 2,942 meters (9,652 ft) above sea level. Located in the parish of La Massana in the northwestern part of the country, the mountain is the centerpiece of the Coma Pedrosa Valleys National Park. The ascent is a challenging but popular hike, typically taking about 4-5 hours from the village of Arinsal. The route passes through diverse landscapes, including pine forests, high mountain meadows, and glacial lakes like the Estanys de Tristaina. From the summit, hikers are rewarded with breathtaking panoramic views across the Pyrenees of Andorra, France, and Spain. Geology K7 - Mountain Formation and Glacial Landscapes."
    },
    factsAdvanced: {
      de: [
        "Der Berg befindet sich in der Gemeinde La Massana.",
        "Die Wanderung von Arinsal dauert ca. 4-5 Stunden.",
        "Coma Pedrosa besteht aus Granit und Schiefer.",
        "Auf dem Gipfel befinden sich ein kleines Metallkreuz und ein Gipfelbuch.",
        "Der Name bedeutet 'steiniges Tal'.",
        "Der Comapedrosa Skyrace ist ein beliebter Berglauf, der auch den Gipfel berührt."
        ],
      hu: [
        "A csúcs a La Massana közösség területén található.",
        "A hegy megmászása kb. 4-5 órát vesz igénybe Arinsalból.",
        "A Coma Pedrosa gránitból és palából épül fel.",
        "A csúcson egy kis fémkereszt és egy csúcskönyv található.",
        "A hegy a nevét a 'köves völgy' (coma pedregosa) kifejezésről kapta.",
        "A Comapedrosa Skyrace egy népszerű hegyi futóverseny, amely a csúcsot is érinti.",
        "A természeti park területe 15,4 km².",
        "A parkban zerge, mormota és számos ragadozómadár-faj is él."
      ],
      ro: [
        "Muntele se află în parohia La Massana.",
        "Drumeția de la Arinsal durează aproximativ 4-5 ore.",
        "Coma Pedrosa este compus din granit și șist.",
        "Pe vârf se află o mică cruce metalică și o carte de vârf.",
        "Numele înseamnă 'vale pietroasă'.",
        "Comapedrosa Skyrace este o cursă montană populară care include și vârful."
        ],
      en: [
        "The mountain is part of the Pyrenees mountain range.",
        "The name 'Coma Pedrosa' means 'stony cirque' in Catalan.",
        "The Coma Pedrosa Valleys National Park covers an area of 15.43 square kilometers.",
        "A mountain hut, the 'Refugi de Coma Pedrosa', is located at 2,265m for overnight stays.",
        "The final part of the ascent is a steep scramble over rocky terrain.",
        "The area is home to wildlife such as chamois, marmots, and the bearded vulture.",
        "In winter, the mountain is a destination for experienced ski mountaineers.",
        "The summit is marked with a small cairn and an Andorran flag."
      ]
    }
  },
  {
    id: "nature-tristaina",
    type: "lake",
    parent: "country-andorra",
    coords: [1.4883, 42.6373],
    name: { de: "Estanys de Tristaina", hu: "Estanys de Tristaina", ro: "Lacurile Tristaina", en: "Tristaina Lakes" },
    description: {
      de: "Drei malerische Hochgebirgsseen.",
      hu: "Három festői magashegyi tó.",
      ro: "Trei lacuri glaciare pitorești.",
      en: "Three picturesque high mountain lakes."
    },
    descriptionAdvanced: {
      de: "Die Estanys de Tristaina sind eine Gruppe von drei treppenförmig angeordneten, kristallklaren Gletscherseen in der Gemeinde Ordino, oberhalb des Skigebiets Ordino-Arcalís. Die Seen liegen in einem spektakulären, eiszeitlichen Zirkus, umgeben von hohen Gipfeln. Ein gut markierter Wanderweg verbindet die drei Seen und kann in einer angenehmen Rundwanderung von etwa anderthalb Stunden erkundet werden. Im Sommer sind die Seen und ihre Umgebung ein beliebtes Ziel für Wanderer, im Winter für Skitourengeher und Schneeschuhwanderer.",
      hu: "Az Estanys de Tristaina egy három, lépcsőzetesen elhelyezkedő, kristálytiszta vizű gleccsertóból álló együttes az Ordino közösségben, az Ordino-Arcalís síterep felett. A tavak egy látványos, jégkorszaki cirkuszvölgyben fekszenek, amelyet magas hegycsúcsok, köztük a Tristaina-csúcs (2878 m) ölelnek körül. A legalsó tó, az Estany Primer, a legkönnyebben megközelíthető, mindössze egy rövid sétára a sífelvonó végétől. Egy jól jelzett turistaútvonal köti össze a három tavat (Estany Primer, Estany del Mig, Estany de Més Amunt), és egy kellemes, kb. másfél órás körtúrával bejárható. A tavak és környékük nyáron a túrázók, télen pedig a sítúrázók és hótalpasok kedvelt célpontja.",
      ro: "Estanys de Tristaina este un grup de trei lacuri glaciare cu apă cristalină, dispuse în trepte, în parohia Ordino, deasupra stațiunii de schi Ordino-Arcalís. Lacurile sunt situate într-un circ glaciar spectaculos, înconjurat de vârfuri înalte. Un traseu de drumeție bine marcat leagă cele trei lacuri și poate fi parcurs într-o plimbare plăcută de aproximativ o oră și jumătate. Vara, lacurile și împrejurimile lor sunt o destinație populară pentru drumeți, iar iarna pentru schiorii de tură și cei cu rachete de zăpadă.",
      en: "The Tristaina Lakes (Estanys de Tristaina) are a set of three beautiful glacial lakes located high in the parish of Ordino. Situated in a stunning mountain cirque near the Ordino-Arcalís ski resort, they are a popular destination for hikers in the summer. The lakes are located at different altitudes: Estany Primer (First Lake), Estany del Mig (Middle Lake), and Estany de Més Amunt (Furthest Lake). The trail connecting the lakes is a relatively easy and well-marked loop, making it accessible to families. The crystal-clear waters of the lakes reflect the surrounding peaks, including the impressive Tristaina Peak. Geography K7 - Glacial landforms and high-altitude lakes."
    },
    factsAdvanced: {
      de: [
        "Der höchstgelegene See, der Estany de Més Amunt, liegt auf über 2.300 Metern.",
        "Am obersten See befindet sich eine moderne Sonnenuhr-Skulptur, der 'Solar Viewpoint'.",
        "Angeln auf Forellen ist in den Seen erlaubt.",
        "Im Sommer erleichtert der Skilift den Aufstieg zu den Seen.",
        "Die Rundwanderung hat einen Höhenunterschied von etwa 200 Metern.",
        "Das Wasser der Seen speist den Fluss Valira del Nord."
        ],
      hu: [
        "A legmagasabban fekvő tó, az Estany de Més Amunt, 2300 méter felett található.",
        "A tavak vize nyáron is rendkívül hideg.",
        "A legfelső tónál található egy modern napóra-szobor, a 'Solar Viewpoint'.",
        "A tavakban pisztrángok élnek, így a horgászok körében is népszerű.",
        "Nyáron a sífelvonó megkönnyíti a tavakhoz való feljutást.",
        "A tavakat körülvevő hegyoldalakon rododendronok virágoznak a kora nyári időszakban.",
        "A körtúra szintkülönbsége körülbelül 200 méter.",
        "A tavak vize a Valira del Nord folyót táplálja."
      ],
      ro: [
        "Cel mai înalt lac, Estany de Més Amunt, se află la peste 2.300 de metri.",
        "La cel mai de sus lac se află o sculptură modernă de ceas solar, 'Solar Viewpoint'.",
        "Pescuitul păstrăvului este permis în lacuri.",
        "Vara, teleschiul facilitează accesul la lacuri.",
        "Traseul circular are o diferență de nivel de aproximativ 200 de metri.",
        "Apa lacurilor alimentează râul Valira del Nord."
        ],
      en: [
        "The lakes are of glacial origin, formed by ancient ice sheets.",
        "The highest lake, Estany de Més Amunt, sits at an altitude of 2,320 meters.",
        "The loop trail to see all three lakes is about 4.4 km long.",
        "The area is known for its rich alpine flora, including Pyrenean lilies.",
        "In winter, the lakes are frozen and covered in snow, accessible to ski tourers.",
        "The Ordino-Arcalís gondola lift operates in summer, providing easy access to the start of the trail.",
        "The Tristaina Solar Viewpoint, a large sundial sculpture, is located near the viewpoint for the lakes.",
        "Fishing for trout is permitted in the lakes with a license."
      ]
    }, image: "/poi-images/nature-tristaina.webp"},
  {
    id: "nature-madriu",
    type: "valley",
    parent: "country-andorra",
    coords: [1.5833, 42.4833],
    name: { de: "Madriu-Perafita-Claror Tal", hu: "Madriu-Perafita-Claror völgy", ro: "Valea Madriu-Perafita-Claror", en: "Madriu-Perafita-Claror Valley" },
    description: {
      de: "Spektakuläres Tal und UNESCO-Weltkulturerbe.",
      hu: "Látványos völgy és UNESCO világörökségi helyszín.",
      ro: "Vale spectaculoasă și sit al Patrimoniului Mondial UNESCO.",
      en: "Spectacular valley and UNESCO World Heritage site."
    },
    descriptionAdvanced: {
      de: "Das Madriu-Perafita-Claror-Tal ist Andorras einziges UNESCO-Weltkulturerbe und nimmt fast 10 % des Staatsgebiets ein. Dieses riesige, von eiszeitlichen Gletschern geformte Talsystem ist ein einzigartiges Beispiel dafür, wie der Mensch seit Jahrtausenden in Harmonie mit der Bergwelt lebt. Das Tal hat keine permanenten Straßen, wodurch seine natürlichen und kulturellen Werte unberührt geblieben sind. Das Tal kann nur zu Fuß auf Wanderwegen erkundet werden.",
      hu: "A Madriu-Perafita-Claror völgy Andorra egyetlen UNESCO Világörökségi helyszíne, amely az ország területének közel 10%-át foglalja el. Ez a hatalmas, jégkorszaki gleccserek által formált völgyrendszer egyedülálló példája annak, hogyan élt az ember évezredeken át harmóniában a hegyi környezettel. A völgyben nincsenek állandó utak, így természeti és kulturális értékei érintetlenül maradtak meg. Magashegyi legelők, sűrű erdők, kristálytiszta tavak és meredek sziklafalak váltakoznak. A tájban megbújnak régi pásztorkunyhók (bordes), teraszos földművelés nyomai és a vasolvasztás emlékei, amelyek mind az ember és a természet szoros kapcsolatáról tanúskodnak. A völgyet csak gyalogosan, túraútvonalakon lehet felfedezni.",
      ro: "Valea Madriu-Perafita-Claror este singurul sit al Patrimoniului Mondial UNESCO din Andorra, acoperind aproape 10% din teritoriul țării. Acest vast sistem de văi, modelat de ghețarii din epoca glaciară, este un exemplu unic al modului în care omul a trăit în armonie cu mediul montan timp de milenii. Valea nu are drumuri permanente, astfel încât valorile sale naturale și culturale au rămas neatinse. Valea poate fi explorată doar pe jos, pe trasee de drumeție.",
      en: "The Madriu-Perafita-Claror Valley is a vast glacial valley and Andorra's only UNESCO World Heritage site, recognized for its cultural landscape. Covering about 9% of Andorra's total territory, the valley is a microcosm of the Pyrenees, showcasing how humans have lived in this mountainous environment for millennia. It features dramatic glacial landscapes, with steep pastures, rugged crags, and high-altitude lakes. The valley also contains evidence of its human history, including shepherds' huts ('bordes'), stone walls, and the remains of iron forges. It is a pristine, undeveloped area with no roads, accessible only by hiking trails, offering a unique sense of tranquility and a connection to the past. Human Geography K8 - Cultural Landscapes and Heritage."
    },
    factsAdvanced: {
      de: [
        "Das Tal wurde 2004 in die UNESCO-Welterbeliste aufgenommen.",
        "Es erstreckt sich über vier andorranische Gemeinden.",
        "Der höchste Punkt des Tals ist der Pic de la Portelleta (2.905 m).",
        "Die internationalen Wanderwege GR7, GR11 und GRP führen durch das Tal.",
        "Mehrere Berghütten (Refugis) bieten Wanderern Unterkunft.",
        "Das Gebiet ist reich an Biodiversität."
        ],
      hu: [
        "A völgyet 2004-ben vették fel az UNESCO Világörökség listájára 'kultúrtáj' kategóriában.",
        "A terület négy andorrai közösség (Encamp, Andorra la Vella, Sant Julià de Lòria, Escaldes-Engordany) határain húzódik.",
        "A völgy legmagasabb pontja a Pic de la Portelleta (2905 m).",
        "A GR7, GR11 és GRP nemzetközi túraútvonalak is áthaladnak a völgyön.",
        "Több hegyi menedékház (refugi) is található a völgyben, ahol a túrázók megszállhatnak.",
        "A völgy neve a 'Madre del Río' (a folyó anyja) kifejezésből eredhet.",
        "A terület rendkívül gazdag biodiverzitásban, számos ritka növény- és állatfaj otthona.",
        "A völgy a mai napig helyet ad a tradicionális legeltető állattartásnak."
      ],
      ro: [
        "Valea a fost inclusă pe lista Patrimoniului Mondial UNESCO în 2004.",
        "Se întinde pe patru parohii andorrane.",
        "Cel mai înalt punct al văii este Pic de la Portelleta (2.905 m).",
        "Traseele internaționale de drumeție GR7, GR11 și GRP traversează valea.",
        "Mai multe refugii montane (refugis) oferă cazare drumeților.",
        "Zona este bogată în biodiversitate."
        ],
      en: [
        "The valley was awarded UNESCO World Heritage status in 2004.",
        "It covers an area of 4,247 hectares.",
        "The main access point for hiking is from the Engolasters road.",
        "The valley is home to several mountain huts for long-distance hikers.",
        "It spans across parts of four Andorran parishes: Encamp, Escaldes-Engordany, Andorra la Vella, and Sant Julià de Lòria.",
        "The landscape shows a long history of pastoralism and resource management.",
        "The name 'Madriu' comes from the Latin for 'mother river'.",
        "The valley's protected status ensures it remains a haven for native flora and fauna."
      ]
    }, image: "/poi-images/nature-madriu.webp"},
  {
    id: "nature-engolasters-lake",
    type: "lake",
    parent: "city-escaldes-engordany",
    coords: [1.5711, 42.5204],
    name: { de: "Llac d'Engolasters", hu: "Llac d'Engolasters", ro: "Lacul Engolasters", en: "Engolasters Lake" },
    description: {
      de: "Ein leicht zugänglicher See nahe Andorra la Vella.",
      hu: "Könnyen megközelíthető tó Andorra la Vella közelében.",
      ro: "Un lac ușor accesibil lângă Andorra la Vella.",
      en: "An easily accessible lake near Andorra la Vella."
    },
    descriptionAdvanced: {
      de: "Der Engolasters-See ist ein künstlicher Stausee in der Gemeinde Encamp auf 1.616 Metern Höhe. Obwohl er in den 1930er Jahren zur Versorgung des Wasserkraftwerks von Escaldes angelegt wurde, hat er sich perfekt in die Landschaft eingefügt und ist heute eines der beliebtesten Familienausflugsziele Andorras. Ein flacher Spazierweg führt um den von Pinienwäldern umgebenen See, der auch für Kinderwagen und Rollstühle geeignet ist. In der Nähe befindet sich die romanische Kirche Sant Miquel d'Engolasters aus dem 12. Jahrhundert.",
      hu: "Az Engolasters-tó egy mesterséges víztározó Encamp közösségben, 1616 méteres magasságban. Bár a tavat az 1930-as években hozták létre az escaldesi vízerőmű ellátására, mára tökéletesen beilleszkedett a tájba, és Andorra egyik legnépszerűbb családi kirándulóhelyévé vált. A tavat fenyőerdő veszi körül, és egy könnyen járható, sík sétaút vezet körbe rajta, amely babakocsival és kerekesszékkel is megtehető. A környéken több piknikezőhely, játszótér és egy kalandpark is található. A tó partjáról indulnak túraútvonalak a környező hegyekbe. A tó közelében áll a Sant Miquel d'Engolasters 12. századi román kori templom.",
      ro: "Lacul Engolasters este un lac de acumulare artificial din parohia Encamp, la o altitudine de 1.616 metri. Deși a fost creat în anii 1930 pentru a alimenta hidrocentrala din Escaldes, astăzi s-a integrat perfect în peisaj și a devenit una dintre cele mai populare destinații de familie din Andorra. Un traseu de plimbare plat înconjoară lacul, care este înconjurat de păduri de pini, accesibil și pentru cărucioare și scaune cu rotile. În apropiere se află biserica romanică din secolul al XII-lea, Sant Miquel d'Engolasters.",
      en: "Engolasters Lake is an artificial lake located at an altitude of 1,616 meters in the parish of Escaldes-Engordany. The lake was formed by a dam built in 1934 to create a reservoir for the country's first hydroelectric power plant. It is now a popular and easily accessible recreational area, surrounded by forests and offering flat walking trails around its perimeter. The lake is a favorite spot for families, picnics, and fishing. Nearby is the Romanesque church of Sant Miquel d'Engolasters. A local legend tells of a village that was once here, submerged by the lake's waters as a divine punishment for the villagers' lack of piety. Environmental Science K7 - Water Resources and Hydroelectric Power."
    },
    factsAdvanced: {
      de: [
        "Das Wasser des Sees wird durch unterirdische Kanäle zum Wasserkraftwerk geleitet.",
        "Baden ist im See verboten, aber Angeln ist erlaubt.",
        "Der Weg um den See ist etwa 2 km lang.",
        "Am Ufer des Sees gibt es mehrere Restaurants.",
        "Im Winter friert der See zu und bietet einen herrlichen Anblick.",
        "Der botanische Lehrpfad 'Camí de les Pardines' beginnt am See."
        ],
      hu: [
        "A tó vizét egy föld alatti csatornarendszer vezeti le az escaldesi vízerőműbe.",
        "A tóban tilos a fürdés, de a horgászat engedélyezett.",
        "A tó körüli sétaút kb. 2 km hosszú.",
        "A tó partján több étterem is található.",
        "A tó körül számos legenda kering, többek között boszorkányokról és a tó mélyén rejtőző kincsekről.",
        "Télen a tó befagy, csodálatos látványt nyújtva.",
        "A tóhoz autóval és busszal is könnyen el lehet jutni.",
        "A 'Camí de les Pardines' egy botanikai tanösvény, amely a tótól indul."
      ],
      ro: [
        "Apa lacului este condusă prin canale subterane la hidrocentrală.",
        "Scăldatul în lac este interzis, dar pescuitul este permis.",
        "Traseul din jurul lacului are o lungime de aproximativ 2 km.",
        "Pe malul lacului există mai multe restaurante.",
        "Iarna, lacul îngheață și oferă o priveliște magnifică.",
        "Traseul botanic 'Camí de les Pardines' începe de la lac."
        ],
      en: [
        "The lake is approximately 7 hectares in size.",
        "The water from the lake is channeled through underground pipes to the hydroelectric plant below.",
        "It is one of the most easily accessible lakes in Andorra.",
        "The path around the lake is about 2 km long.",
        "There are several restaurants and picnic areas near the lake.",
        "An adventure park with zip lines is located in the forest nearby.",
        "The lake can be reached by a scenic, winding road from the capital.",
        "Despite being artificial, it has become a significant naturalized habitat."
      ]
    }, image: "/poi-images/nature-engolasters-lake.webp"},
  {
    id: "nature-naturlandia",
    type: "kid-landmark",
    parent: "city-sant-julia",
    coords: [1.5034, 42.4418],
    name: { de: "Naturlandia", hu: "Naturlandia", ro: "Naturlandia", en: "Naturlandia" },
    description: {
      de: "Abenteuerpark mit der längsten alpinen Achterbahn.",
      hu: "Kalandpark a leghosszabb alpesi hullámvasúttal.",
      ro: "Parc de aventură cu cel mai lung tobogan alpin.",
      en: "Adventure park with the longest alpine coaster."
    },
    descriptionAdvanced: {
      de: "Naturlandia ist ein riesiger, ganzjährig geöffneter Abenteuer- und Tierpark in der Gemeinde Sant Julià de Lòria. Die berühmteste Attraktion des Parks ist der Tobotronc, mit 5,3 Kilometern die längste Naturrodelbahn der Welt. Darüber hinaus gibt es zahlreiche weitere Abenteuer wie Seilrutschen, Bogenschießen und einen Tierpark, in dem einheimische Tiere der Pyrenäen wie Braunbären, Wölfe und Luchse in ihrer natürlichen Umgebung beobachtet werden können. Naturlandia ist das perfekte Programm für die ganze Familie.",
      hu: "A Naturlandia egy hatalmas, egész évben nyitva tartó kaland- és állatpark Sant Julià de Lòria közösségben, a La Rabassa erdőben. A park két fő részből áll: egy 1600 méteres magasságban lévő családi zónából és egy 2000 méteres magasságban található extrém sport zónából. A park leghíresebb attrakciója a Tobotronc, amely 5,3 kilométeres hosszával a világ leghosszabb alpesi 'hullámvasútja'. Ezen kívül számos más kaland is várja a látogatókat, például drótkötélpályák, íjászat, quadozás és egy állatpark, ahol a Pireneusok őshonos állatait, mint a barna medvét, a farkast és a hiúzt lehet megfigyelni természetes környezetükben. A Naturlandia tökéletes program az egész család számára.",
      ro: "Naturlandia este un parc imens de aventură și de animale, deschis pe tot parcursul anului, în parohia Sant Julià de Lòria. Cea mai faimoasă atracție a parcului este Tobotronc, cel mai lung tobogan natural din lume, cu o lungime de 5,3 kilometri. În plus, există numeroase alte aventuri, cum ar fi tiroliene, tir cu arcul și un parc de animale unde pot fi observate animale native din Pirinei, cum ar fi urșii bruni, lupii și râșii. Naturlandia este programul perfect pentru întreaga familie.",
      en: "Naturlandia is a large adventure and nature park located in the La Rabassa forest, in the parish of Sant Julià de Lòria. The park is split into two sections at different altitudes (1,600m and 2,000m), connected by a scenic road. Its most famous attraction is the Tobotronc, which at 5.3 kilometers is the longest alpine coaster in the world. The park also features an animal park where visitors can see species native to the Pyrenees, such as brown bears, wolves, and chamois, in semi-wild enclosures. Other activities include zip-lining, archery, buggy tours, and cross-country skiing in winter. It's a year-round destination focused on outdoor activities and environmental education. Tourism K8 - Management of Theme Parks and Natural Attractions."
    },
    factsAdvanced: {
      de: [
        "Der Tobotronc ist 5,3 km lang und überwindet 400 Höhenmeter.",
        "Der Tierpark erstreckt sich über 15 Hektar.",
        "Im Winter wird der Park zum Langlauf- und Schneeschuhwanderzentrum.",
        "Es gibt Waldseilgärten (Airtrekk) mit unterschiedlichen Schwierigkeitsgraden.",
        "Für die Kleinsten gibt es Ponyreiten und Spielplätze.",
        "Der Park verfügt über Restaurants und Picknickplätze."
        ],
      hu: [
        "A Tobotronc 5,3 km hosszú és 400 méter szintkülönbséget küzd le az erdőn keresztül.",
        "A park két zónája között ingyenes buszjárat közlekedik.",
        "Az állatpark több mint 15 hektáron terül el.",
        "Télen a park a sífutás és a hótalpas túrázás központjává válik.",
        "A parkban található Andorra egyetlen állandó jégpályája.",
        "Különböző nehézségű erdei drótkötélpályák (Airtrekk) is kipróbálhatók.",
        "A legkisebbeket pónilovaglás és játszóterek várják.",
        "A parkban éttermek és piknikezőhelyek is rendelkezésre állnak."
      ],
      ro: [
        "Tobotronc are 5,3 km lungime și o diferență de nivel de 400 de metri.",
        "Parcul de animale se întinde pe 15 hectare.",
        "Iarna, parcul devine un centru pentru schi fond și drumeții cu rachete de zăpadă.",
        "Există parcuri de aventură în copaci (Airtrekk) de diferite niveluri de dificultate.",
        "Pentru cei mici, există plimbări cu ponei și locuri de joacă.",
        "Parcul dispune de restaurante și zone de picnic."
        ],
      en: [
        "The Tobotronc ride takes about 10 minutes to descend.",
        "The park covers a vast area of the La Rabassa forest.",
        "The animal park at the higher altitude (2,000m) is a key feature.",
        "In winter, La Rabassa is Andorra's only dedicated cross-country ski resort.",
        "The park offers educational workshops for school groups.",
        "The lower section at 1,600m is focused on adventure activities.",
        "The ride on the Tobotronc offers spectacular views of the surrounding forest.",
        "It is a popular destination for families visiting Andorra."
      ]
    }, image: "/poi-images/nature-naturlandia.webp"},
  {
    id: "nature-vallnord",
    type: "landmark",
    parent: "city-la-massana",
    coords: [1.4812, 42.5562],
    name: { de: "Vallnord", hu: "Vallnord", ro: "Vallnord", en: "Vallnord" },
    description: {
      de: "Bekanntes Skigebiet im Westen Andorras.",
      hu: "Ismert síterep Andorra nyugati részén.",
      ro: "Renumită stațiune de schi în vestul Andorrei.",
      en: "Well-known ski resort in western Andorra."
    },
    descriptionAdvanced: {
      de: "Vallnord (jetzt offiziell Pal Arinsal und Ordino Arcalís) ist eine Skiregion im Westen Andorras, die aus zwei separaten Skigebieten besteht. Pal-Arinsal in La Massana ist ein familienfreundliches Gebiet mit über 60 km Pisten. Ordino Arcalís ist ein Paradies für Freerider, bekannt für seine ausgezeichnete Schneequalität. Im Sommer verwandelt sich Pal-Arinsal in den Vallnord Bike Park, einen der besten Mountainbike-Parks Europas.",
      hu: "A Vallnord (ma már hivatalosan Pal Arinsal és Ordino Arcalís) Andorra nyugati részén elterülő sírégió, amely két különálló, de egy síbérlettel használható síterepből áll. A La Massana közösségben található Pal-Arinsal egy családbarát síterep, amely több mint 60 km-nyi, főként kezdő és középhaladó pályával rendelkezik. A két szektort (Pal és Arinsal) egy nagy kabinos felvonó köti össze. Az Ordino közösségben fekvő Ordino Arcalís a freeride és a mélyhó síelés paradicsoma, híres a kiváló hóminőségéről és az érintetlen, vad tájairól. Nyáron Pal-Arinsal Európa egyik legjobb hegyikerékpár-parkjává, a Vallnord Bike Parkká alakul át, míg Arcalís a túrázók kedvelt célpontja.",
      ro: "Vallnord (acum oficial Pal Arinsal și Ordino Arcalís) este o regiune de schi din vestul Andorrei, formată din două stațiuni de schi separate. Pal-Arinsal din La Massana este o stațiune de familie cu peste 60 km de pârtii. Ordino Arcalís este un paradis pentru freerideri, renumit pentru calitatea excelentă a zăpezii. Vara, Pal-Arinsal se transformă în Vallnord Bike Park, unul dintre cele mai bune parcuri de biciclete montane din Europa.",
      en: "Vallnord is a major ski and mountain destination located in the western valleys of Andorra, primarily in the parish of La Massana. It comprises two main sectors: Pal-Arinsal and Ordino-Arcalís. The Pal-Arinsal sector is a large, linked area known for its family-friendly slopes and excellent ski schools, connected by a cable car. In summer, it transforms into the renowned Vallnord Bike Park, a mecca for mountain bikers. The Ordino-Arcalís sector, though smaller and not directly linked, is famous for its exceptional snow quality and is considered one of the best freeride and off-piste destinations in the Pyrenees. Together, they offer a diverse range of mountain experiences year-round. Business Studies K8 - Branding and Marketing in the Tourism Industry."
    },
    factsAdvanced: {
      de: [
        "Das Skigebiet Pal-Arinsal verfügt über ein 63 km langes Pistennetz.",
        "Ordino Arcalís bietet 30 km Pisten und riesige Freeride-Gebiete.",
        "Im Sommer finden im Vallnord Bike Park Mountainbike-Weltcup-Rennen statt.",
        "Im Skigebiet Ordino Arcalís wurden Szenen für den James-Bond-Film 'Der Morgen stirbt nie' gedreht.",
        "Die Pisten von Pal-Arinsal führen größtenteils durch Pinienwälder.",
        "Ordino Arcalís ist das nördlichste Skigebiet Andorras."
        ],
      hu: [
        "A Pal-Arinsal síterep 63 km-nyi pályarendszerrel rendelkezik.",
        "Az Ordino Arcalís 30 km-nyi pályát és hatalmas freeride területeket kínál.",
        "Nyáron a Vallnord Bike Park mountain bike világkupa futamoknak ad otthont.",
        "Az Ordino Arcalís síterepén forgatták a James Bond: A holnap markában című film egyes jeleneteit.",
        "A két síterep között nincs közvetlen sí-összeköttetés, de a síbusz ingyenesen használható a bérlettel.",
        "Mindkét síterepen található sí- és snowboardiskola, valamint felszerelés-kölcsönző.",
        "A Pal-Arinsal pályái nagyrészt fenyőerdők között vezetnek.",
        "Az Ordino Arcalís a legészakibb fekvésű síterep Andorrában, ami garantálja a jó hóviszonyokat."
      ],
      ro: [
        "Stațiunea de schi Pal-Arinsal are o rețea de pârtii de 63 km.",
        "Ordino Arcalís oferă 30 km de pârtii și zone vaste de freeride.",
        "Vara, parcul de biciclete Vallnord găzduiește curse de Cupa Mondială de mountain bike.",
        "Scene din filmul James Bond 'Mâine nu moare niciodată' au fost filmate în stațiunea de schi Ordino Arcalís.",
        "Pârtiile din Pal-Arinsal trec în mare parte prin păduri de pini.",
        "Ordino Arcalís este cea mai nordică stațiune de schi din Andorra."
        ],
      en: [
        "Until 2018, 'Vallnord' was the brand name for all three resorts; now Ordino-Arcalís is part of Grandvalira Resorts.",
        "The Vallnord Bike Park has hosted multiple UCI Mountain Bike World Cup events.",
        "The Pal-Arinsal sector has over 63 km of pistes.",
        "Ordino-Arcalís is often the last resort to close for the season due to its excellent snow preservation.",
        "The resorts offer 'ski-touring' and 'snowshoeing' circuits.",
        "The highest point in the ski area is Pic de Port Negre at 2,570m in Arinsal.",
        "The Freestyle ski school in Arinsal is highly regarded.",
        "The 'La Coma' restaurant in Arcalís is accessible only by ski or caterpillar track vehicle in winter."
      ]
    }, image: "/poi-images/nature-vallnord.webp"},
  {
    id: "nature-grandvalira",
    type: "mountain",
    parent: "country-andorra",
    coords: [1.6705, 42.5623],
    name: { de: "Grandvalira", hu: "Grandvalira", ro: "Grandvalira", en: "Grandvalira" },
    description: {
      de: "Das größte Skigebiet in den Pyrenäen.",
      hu: "A Pireneusok legnagyobb síterepe.",
      ro: "Cea mai mare stațiune de schi din Pirinei.",
      en: "The largest ski resort in the Pyrenees."
    },
    descriptionAdvanced: {
      de: "Grandvalira ist das größte Skigebiet der Pyrenäen und Südeuropas und erstreckt sich über den Osten Andorras. Die riesige, zusammenhängende Skiregion verfügt über mehr als 210 Pistenkilometer, die über sechs verschiedene Sektoren zugänglich sind. Dank des modernen und schnellen Liftsystems ist das gesamte Gebiet leicht zu befahren. Grandvalira ist die perfekte Wahl für Skifahrer und Snowboarder aller Niveaus und bietet alles von Anfängerpisten bis hin zu schwarzen Weltcup-Abfahrten, sowie zahlreiche Snowparks und Freeride-Zonen.",
      hu: "A Grandvalira a Pireneusok és Dél-Európa legnagyobb síterepe, amely Andorra keleti részén terül el. A hatalmas, összefüggő sírégió több mint 210 kilométernyi pályarendszerrel rendelkezik, amely hat különböző szektoron (Encamp, Canillo, El Tarter, Soldeu, Grau Roig, Pas de la Casa) keresztül érhető el. A modern és gyors felvonórendszernek köszönhetően az egész terület könnyedén bejárható. A Grandvalira minden tudásszintű síelő és snowboardos számára tökéletes választás: a kezdők számára kijelölt tanulópályáktól a fekete, világkupa-futamoknak is otthont adó lejtőkig minden megtalálható itt. Emellett számos snowpark, freeride zóna, és egyéb szórakozási lehetőség, mint a kutyaszánozás vagy a hótalpas túrázás, teszi teljessé a téli élményt.",
      ro: "Grandvalira este cea mai mare stațiune de schi din Pirinei și din sudul Europei, întinzându-se în estul Andorrei. Vasta regiune de schi interconectată are peste 210 de kilometri de pârtii, accesibile prin șase sectoare diferite. Datorită sistemului de teleschiuri modern și rapid, întreaga zonă este ușor de parcurs. Grandvalira este alegerea perfectă pentru schiorii și snowboarderii de toate nivelurile, oferind de la pârtii pentru începători la pârtii negre de Cupă Mondială, precum și numeroase snowpark-uri și zone de freeride.",
      en: "Grandvalira is the largest ski resort in the Pyrenees and one of the largest in Europe. It stretches across the eastern part of Andorra, linking the parishes of Encamp and Canillo. The resort is a vast, interconnected domain formed by the union of several smaller resorts, including Pas de la Casa, Grau Roig, Soldeu, El Tarter, Canillo, and Encamp. It offers over 210 kilometers of pistes, catering to all levels of skiers and snowboarders. The resort is known for its modern and efficient lift system, high-quality snowmaking, and a wide variety of services, including top-tier ski schools, freestyle parks, and gourmet mountain restaurants. It regularly hosts major international sporting events, such as the Alpine Ski World Cup. Economics K8 - Mergers and Economies of Scale."
    },
    factsAdvanced: {
      de: [
        "Das Skigebiet verfügt über 210 km Pisten und 74 Lifte.",
        "Der höchste Punkt liegt auf 2.640 Metern (Tossal de la Llosada).",
        "Die Avet-Piste in Soldeu ist regelmäßiger Austragungsort von Weltcup-Rennen.",
        "Das Skigebiet betreibt auch ein Iglu-Hotel.",
        "Drei Snowparks stehen Freestyle-Skifahrern und Snowboardern zur Verfügung.",
        "Der Funicamp-Lift bringt Skifahrer in 15 Minuten von Encamp ins Herz des Skigebiets."
        ],
      hu: [
        "A síterep 210 km-nyi sípályával és 74 felvonóval rendelkezik.",
        "A legmagasabb pontja 2640 méter (Tossal de la Llosada).",
        "A soldeui Avet pálya rendszeresen ad otthont Alpesi Sí Világkupa futamoknak.",
        "A Funicamp felvonó Encampból 15 perc alatt a síterep szívébe szállítja a síelőket.",
        "A síterepen több mint 40 étterem és bár található a hegyen.",
        "Három snowpark (El Tarter, Grau Roig, Peretol) várja a freestyle síelőket és snowboardosokat.",
        "A Peretol snowpark éjszakai világítással is rendelkezik.",
        "A síterep Igló Hotelt is üzemeltet, ahol a vendégek jégből készült szobákban alhatnak."
      ],
      ro: [
        "Stațiunea are 210 km de pârtii și 74 de teleschiuri.",
        "Cel mai înalt punct este la 2.640 de metri (Tossal de la Llosada).",
        "Pârtia Avet din Soldeu găzduiește regulat curse de Cupa Mondială.",
        "Stațiunea operează și un Hotel Iglu.",
        "Trei snowpark-uri sunt disponibile pentru schiorii și snowboarderii de freestyle.",
        "Telecabina Funicamp transportă schiorii de la Encamp în inima stațiunii în 15 minute."
        ],
      en: [
        "The resort was created in 2003 by the merger of the Pas de la Casa-Grau Roig and Soldeu-El Tarter ski areas.",
        "It has a capacity to transport over 100,000 skiers per hour.",
        "The highest skiable point is Tossal de la Llosada at 2,560 meters.",
        "Grandvalira offers three snowparks and a dedicated freeride area.",
        "The resort includes several adventure circuits for children.",
        "The Funicamp gondola in Encamp provides access to the slopes in just 15 minutes.",
        "In summer, a part of the resort becomes the highest golf course in Europe.",
        "The resort now also includes the Ordino-Arcalís sector under its 'Grandvalira Resorts' umbrella brand."
      ]
    }, image: "/poi-images/nature-grandvalira.webp"},
  {
    id: "nature-casamanya",
    type: "mountain",
    parent: "country-andorra",
    coords: [1.5647, 42.5852],
    name: { de: "Pic de Casamanya", hu: "Pic de Casamanya", ro: "Pic de Casamanya", en: "Pic de Casamanya" },
    description: {
      de: "Markanter Berg im Zentrum von Andorra.",
      hu: "Jellegzetes hegy Andorra közepén.",
      ro: "Munte proeminent în centrul Andorrei.",
      en: "Prominent mountain in the center of Andorra."
    },
    descriptionAdvanced: {
      de: "Der Pic de Casamanya ist ein 2.740 Meter hoher, markanter Berg im geografischen Zentrum von Andorra. Obwohl er nicht der höchste Gipfel ist, ist er aufgrund seiner zentralen Lage eines der beliebtesten Wanderziele. Der Gipfel bietet einen atemberaubenden 360-Grad-Panoramablick auf fast ganz Andorra. Der häufigste Aufstieg beginnt am Coll d'Ordino und erfordert keine technische Klettererfahrung, aber eine gute Kondition. Der Berg ist auch ein botanischer Hotspot, bekannt für seine Felder mit Alpenblumen.",
      hu: "A Pic de Casamanya egy 2740 méter magas, jellegzetes, piramis alakú hegy Andorra földrajzi középpontjában. Bár nem a legmagasabb csúcs, központi elhelyezkedése miatt az egyik legnépszerűbb és leglátványosabb túracélpont az országban. A hegy az Ordino és Canillo közösségeket elválasztó gerincen fekszik. A csúcsra az Ordino felőli Coll d'Ordino hágóból indul a leggyakoribb útvonal, amely nem igényel technikai hegymászótudást, de jó állóképességet igen. A csúcsról tiszta időben lélegzetelállító, 360 fokos panoráma nyílik szinte egész Andorrára, a völgyekre és a környező hegycsúcsokra. A hegy különlegessége, hogy három, egymáshoz közeli csúcsa van: a déli, a középső és az északi.",
      ro: "Pic de Casamanya este un munte proeminent, de 2.740 de metri, în centrul geografic al Andorrei. Deși nu este cel mai înalt vârf, este una dintre cele mai populare destinații de drumeție datorită locației sale centrale. Vârful oferă o panoramă uluitoare de 360 de grade asupra aproape întregii Andorre. Cea mai frecventă ascensiune începe de la Coll d'Ordino și nu necesită experiență tehnică de alpinism, dar o bună condiție fizică. Muntele este, de asemenea, un punct fierbinte botanic, cunoscut pentru câmpurile sale de flori alpine.",
      en: "Pic de Casamanya is one of the most iconic and centrally located mountains in Andorra. Standing at 2,740 meters, it's a prominent peak that separates the parishes of Ordino and Canillo. The mountain is particularly noted for its relatively straightforward ascent from the Coll d'Ordino, making it one of the most popular hikes in the country. Its central location means that the summit offers an extraordinary 360-degree panoramic view of almost the entire country, allowing hikers to identify many of Andorra's other major peaks and valleys. The mountain has three distinct summits: the south (2,740m), the middle (2,725m), and the north (2,752m). It's a botanical hotspot in summer, known for its fields of alpine flowers. Physical Geography K7 - Topography and Cartography."
    },
    factsAdvanced: {
      de: [
        "Der Berg hat drei Gipfel: Süd, Mitte und Nord.",
        "Die Wanderung vom Coll d'Ordino überwindet einen Höhenunterschied von ca. 760 Metern.",
        "Der Bergrücken bildet eine natürliche Grenze zwischen Ordino und Canillo.",
        "Der Name 'Casamanya' bedeutet wahrscheinlich 'großer Berg'.",
        "Der Gipfel ist ein traditioneller Ort für die Feuer zur Johannisnacht.",
        "Vom Gipfel aus kann man die Skigebiete Grandvalira und Vallnord sehen."
        ],
      hu: [
        "A hegy három csúcsa a Casamanya Sud (2740 m), a Casamanya Mig (2725 m) és a Casamanya Nord (2695 m).",
        "A túra a Coll d'Ordino hágóról (1980 m) indul, a szintkülönbség kb. 760 méter.",
        "A hegy gerince természetes határt képez Ordino és Canillo között.",
        "A hegy oldalában nyáron legelésző lovakkal és tehenekkel lehet találkozni.",
        "A 'Casamanya' név valószínűleg a 'casa magna' (nagy ház) kifejezésből ered.",
        "A hegycsúcs a Szentivánéji (Sant Joan) tűzgyújtás egyik hagyományos helyszíne.",
        "A hegy geológiailag főként mészkőből és palából épül fel, ami gazdag növényvilágot eredményez.",
        "A csúcsról jól látható az egész Grandvalira és Vallnord sírégió is."
      ],
      ro: [
        "Muntele are trei vârfuri: Sud, Mijloc și Nord.",
        "Drumeția de la Coll d'Ordino are o diferență de nivel de aproximativ 760 de metri.",
        "Creasta montană formează o graniță naturală între Ordino și Canillo.",
        "Numele 'Casamanya' înseamnă probabil 'munte mare'.",
        "Vârful este un loc tradițional pentru focurile de Sfântul Ioan.",
        "De pe vârf se pot vedea stațiunile de schi Grandvalira și Vallnord."
        ],
      en: [
        "The name 'Casamanya' is thought to mean 'great mountain' in a pre-Roman language.",
        "The standard hike from Coll d'Ordino involves a vertical gain of about 750 meters.",
        "From the top, you can see the three main valleys that form Andorra.",
        "The ridge walk connecting the three peaks is a popular extension to the hike.",
        "The mountain is known for its large population of Pyrenean chamois.",
        "The slopes are covered with alpine pine and rhododendron at lower altitudes.",
        "It is considered the geographical center of Andorra.",
        "The hike is not technical but requires a good level of fitness due to the sustained ascent."
      ]
    }, image: "/poi-images/nature-casamanya.webp"},
  {
    id: "nature-sorteny",
    type: "nature-reserve",
    parent: "city-ordino",
    coords: [1.5630, 42.6251],
    name: { de: "Parc Natural de Sorteny", hu: "Sorteny Természeti Park", ro: "Parcul Natural Sorteny", en: "Sorteny Nature Park" },
    description: {
      de: "Botanisches Paradies mit über 700 Pflanzenarten.",
      hu: "Botanikai paradicsom több mint 700 növényfajjal.",
      ro: "Paradis botanic cu peste 700 de specii de plante.",
      en: "Botanical paradise with over 700 plant species."
    },
    descriptionAdvanced: {
      de: "Der Naturpark Sorteny-Tal in Ordino ist ein geschütztes Gebiet, das für seine außergewöhnliche Artenvielfalt, insbesondere seine Pflanzenwelt, bekannt ist. Der Park wird oft als 'botanischer Garten Andorras' bezeichnet und beherbergt über 700 Blumen- und Pflanzenarten. Es gibt mehrere gut markierte Themenwege, einen botanischen Garten und eine Berghütte. Der Park ist auch die Heimat von Tieren wie Pyrenäen-Gämsen, Murmeltieren und dem seltenen Pyrenäen-Gebirgsmolch. Er ist Teil des UNESCO-Biosphärenreservats Ordino.",
      hu: "A Sorteny-völgy Természeti Park egy 1080 hektáros védett terület Ordino közösségben, amely Andorra és a Pireneusok botanikai kincsesbányája. A parkban több mint 700 féle virágos növényfaj él, amelyek közül több mint 50 a Pireneusokban endemikus (csak itt található meg). A park bejáratánál egy botanikus kert és egy tanösvény segít a látogatóknak megismerni a helyi flórát. A völgyön keresztül folyik a Sorteny folyó, és több túraútvonal is behálózza, amelyek elvezetnek a Sorteny menedékházhoz, valamint a közeli Estany de l'Estanyó tóhoz és a Pic de l'Estanyó csúcsához (2915 m). A park nemcsak a növények, hanem az állatok, például a zerge, a mormota és a szakállas saskeselyű otthona is.",
      ro: "Parcul Natural Valea Sorteny din Ordino este o arie protejată renumită pentru biodiversitatea sa excepțională, în special pentru flora sa. Adesea numit 'grădina botanică a Andorrei', parcul găzduiește peste 700 de specii de flori și plante. Există mai multe trasee tematice bine marcate, o grădină botanică și o cabană montană. Parcul este, de asemenea, casa unor animale precum capra neagră, marmotele și rara salamandră de pârâu din Pirinei. Face parte din Rezervația Biosferei UNESCO Ordino.",
      en: "The Sorteny Valley Nature Park, located in the parish of Ordino, is a protected natural area renowned for its exceptional biodiversity, particularly its plant life. Often called the 'botanical garden of Andorra', the park is home to over 700 species of flowers and plants, many of which are native to the Pyrenees. The park covers over 1,000 hectares and is a haven for hikers, nature lovers, and scientists. There are several well-marked themed trails, a botanical garden with an information center, and a mountain hut ('Refugi Borda de Sorteny'). The park is also home to fauna such as the Pyrenean chamois, marmots, and the rare Pyrenean brook salamander. It's part of the Ordino UNESCO Biosphere Reserve. Biology K8 - Ecosystems and Biodiversity."
    },
    factsAdvanced: {
      de: [
        "Der Park wurde 1999 als erster Naturpark Andorras gegründet.",
        "Er ist Teil des Biosphärenreservats Ordino.",
        "Der Name 'Sorteny' leitet sich vom Wort für 'Quelle' ab.",
        "Das Refugi Borda de Sorteny bietet ganzjährig Unterkunft.",
        "Im Sommer werden geführte botanische und geologische Touren angeboten.",
        "Der höchste Gipfel im Park ist der Pic de l'Estanyó (2.915 m)."
        ],
      hu: [
        "A parkot 1999-ben hozták létre Andorra első természeti parkjaként.",
        "A park az Ordinoi Bioszféra Rezervátum része.",
        "A 'Sorteny' név a 'surt' vagy 'sort' szóból ered, ami 'forrást' jelent.",
        "A parkban a lepkefajok száma is kiemelkedően magas.",
        "A Sorteny menedékház egész évben nyitva tart, és szállást biztosít a túrázóknak.",
        "A park bejáratánál található egy kis múzeum is, amely a völgy természeti és kulturális értékeit mutatja be.",
        "Nyáron vezetett botanikai és geológiai túrákat is szerveznek.",
        "Télen a park a sítúrázók és a hótalpasok kedvelt célpontja."
      ],
      ro: [
        "Parcul a fost creat în 1999 ca primul parc natural din Andorra.",
        "Face parte din Rezervația Biosferei Ordino.",
        "Numele 'Sorteny' provine de la cuvântul care înseamnă 'izvor'.",
        "Refugiul Borda de Sorteny oferă cazare pe tot parcursul anului.",
        "Vara sunt disponibile tururi ghidate botanice și geologice.",
        "Cel mai înalt vârf din parc este Pic de l'Estanyó (2.915 m)."
        ],
      en: [
        "The park was created in 1999.",
        "It is crossed by the Sorteny river, a tributary of the Valira del Nord.",
        "The 'Refugi Borda de Sorteny' is a guarded hut offering meals and accommodation.",
        "The botanical garden showcases plants from different Pyrenean alpine habitats.",
        "Guided tours focusing on botany and geology are available in summer.",
        "The park contains old shepherds' huts, demonstrating its history of pastoral use.",
        "The highest peak within the park is the Pic de l'Estanyó (2,915 m).",
        "The park's logo features the 'Grandalla', Andorra's national flower."
      ]
    }, image: "/poi-images/nature-sorteny.webp"},
  {
    id: "nature-roc-del-quer",
    type: "landmark",
    parent: "city-canillo",
    coords: [1.6000, 42.5600],
    name: { de: "Mirador Roc del Quer", hu: "Mirador Roc del Quer", ro: "Mirador Roc del Quer", en: "Roc del Quer viewpoint" },
    description: {
      de: "Aussichtsplattform mit atemberaubendem Blick.",
      hu: "Kilátó lélegzetelállító panorámával.",
      ro: "Platformă de vizionare cu priveliști uluitoare.",
      en: "Observation deck with breathtaking views."
    },
    descriptionAdvanced: {
      de: "Der Aussichtspunkt Roc del Quer ist eine spektakuläre Aussichtsplattform in der Gemeinde Canillo. Er verfügt über einen 20 Meter langen Steg, von dem 12 Meter über dem Abgrund schweben und ein aufregendes Erlebnis schaffen. Am Ende des Stegs befindet sich ein Glasboden und eine markante Skulptur eines nachdenklichen Mannes, 'Der Denker'. Der Aussichtspunkt bietet einen unvergleichlichen Panoramablick auf die Täler von Canillo und Encamp und ist leicht mit dem Auto oder einem Touristenbus erreichbar.",
      hu: "A Roc del Quer kilátó egy lenyűgöző mérnöki alkotás és turisztikai látványosság Canillo közösségben, a Coll d'Ordino hágóra vezető úton. A kilátó egy 20 méter hosszú palló, amely 12 méter hosszan kinyúlik a hegyoldalból, több száz méteres mélység felett lebegve. A palló végén áll 'A gondolkodó' szobra, egy emberalak, aki a lába alatt elterülő völgyet és a hegyeket szemléli. A kilátóról páratlan, 180 fokos panoráma nyílik Canillo és Encamp völgyeire, valamint a környező hegycsúcsokra. A palló egy része üvegből készült, ami tovább fokozza az adrenalin-élményt. A Roc del Quer a közeli Tibeti híddal együtt Andorra egyik legnépszerűbb modern kori attrakciójává vált.",
      ro: "Punctul de belvedere Roc del Quer este o platformă de observare spectaculoasă din parohia Canillo. Dispune de o pasarelă lungă de 20 de metri, din care 12 metri sunt suspendați deasupra prăpastiei, creând o experiență palpitantă. La capătul pasarelei se află o podea de sticlă și o sculptură izbitoare a unui om gânditor, 'Gânditorul'. Punctul de belvedere oferă vederi panoramice de neegalat asupra văilor Canillo și Encamp și este ușor accesibil cu mașina sau cu un autobuz turistic.",
      en: "The Roc del Quer viewpoint is a spectacular observation deck located in the parish of Canillo, offering breathtaking panoramic views over the valleys of Montaup and Valira d'Orient. The viewpoint features a 20-meter-long walkway, 12 meters of which are suspended over thin air, creating a thrilling and immersive experience. The end of the walkway has a glass floor, allowing visitors to see the valley floor hundreds of meters below. At the very tip of the platform sits a striking sculpture of a pensive man, 'The Ponderer', by artist Miguel Ángel González. The viewpoint is easily accessible by car or by a tourist bus from Canillo and has become one of Andorra's most photographed modern attractions. Engineering & Design K7 - Structural Design and Materials."
    },
    factsAdvanced: {
      de: [
        "Der Aussichtspunkt liegt auf 1.920 Metern Höhe.",
        "Die Skulptur am Ende des Stegs ist von Miguel Ángel Gónzalez.",
        "Der Eintritt zum Steg ist kostenpflichtig.",
        "Die Struktur ist so konzipiert, dass sie starkem Schnee und Wind standhält.",
        "Er wurde 2016 eingeweiht.",
        "Der Ort ist besonders bei Sonnenuntergang spektakulär."
        ],
      hu: [
        "A kilátó 1920 méteres tengerszint feletti magasságban található.",
        "A palló végén ülő szobor Miguel Ángel Gónzalez alkotása.",
        "A kilátó ingyenesen látogatható.",
        "A kilátó mellett egy geológiai tanösvény is található.",
        "A kilátót 2016-ban adták át.",
        "A 'Quer' szó sziklát vagy sziklaszirtet jelent.",
        "A kilátóhoz vezető út télen havas vagy jeges lehet, ezért óvatosság szükséges.",
        "A hely naplementekor különösen látványos."
      ],
      ro: [
        "Punctul de belvedere se află la o altitudine de 1.920 de metri.",
        "Sculptura de la capătul pasarelei este realizată de Miguel Ángel Gónzalez.",
        "Accesul pe pasarelă este contra cost.",
        "Structura este proiectată pentru a rezista la zăpadă abundentă și vânturi puternice.",
        "A fost inaugurat în 2016.",
        "Locul este deosebit de spectaculos la apus."
        ],
      en: [
        "The viewpoint is located on the Coll d'Ordino mountain road at an altitude of 1,913 meters.",
        "The walkway juts out from the rock face, providing an unobstructed 180-degree view.",
        "The sculpture 'The Ponderer' by Miguel Ángel González sits calmly at the end of the suspended platform.",
        "The structure is designed to withstand heavy snow and strong winds.",
        "It was inaugurated in 2016.",
        "There is a small entrance fee to access the walkway.",
        "The viewpoint is part of a scenic route that also includes the nearby Tibetan Bridge.",
        "It is a popular spot for watching sunsets."
      ]
    }, image: "/poi-images/nature-roc-del-quer.webp"}
];

export const andorraRegions: POI[] = [
  {
    id: "AD-07",
    type: "region",
    parent: "country-andorra",
    coords: [1.5218, 42.5063],
    name: { de: "Andorra la Vella", hu: "Andorra la Vella", ro: "Andorra la Vella", en: "Andorra la Vella" },
    description: {
      de: "Die Hauptstadt und das pulsierende Herz des Fürstentums.",
      hu: "A főváros és a hercegség lüktető szíve.",
      ro: "Capitala și inima vibrantă a principatului.",
      en: "The capital and the vibrant heart of the principality."
    },
    descriptionAdvanced: {
      de: "Andorra la Vella ist die Hauptstadt und das politische, wirtschaftliche und kulturelle Zentrum des Fürstentums. Sie ist die höchstgelegene Hauptstadt Europas und ein Einkaufsparadies mit zollfreien Geschäften entlang der Avinguda Meritxell. Neben dem modernen Treiben bietet das historische Viertel 'Barri Antic' mit der Casa de la Vall, dem ehemaligen Parlamentssitz, einen Einblick in die Vergangenheit. Die Skulptur 'Die Noblesse der Zeit' von Salvador Dalí ist zu einem modernen Wahrzeichen geworden.",
      hu: "Andorra la Vella, a hercegség fővárosa és lüktető szíve, Európa legmagasabban fekvő fővárosa. A város a politikai, gazdasági és kulturális élet központja. A bevásárlóturizmus fellegvára, melynek fő artériái a Meritxell és a Príncep Benlloch sugárutak, tele vámmentes üzletekkel. A modern forgatag mellett a 'Barri Antic' (Óváros) macskaköves utcái történelmi hangulatot árasztanak, itt áll a Casa de la Vall, a régi parlament épülete. A modern építészetet a parlament új épülete és a kormányzati negyed képviseli. Salvador Dalí 'Az idő nemessége' című szobra a város egyik legnépszerűbb fotópontja. Andorra la Vella egy kozmopolita város, ahol a hegyvidéki táj és a modern városi élet találkozik. Társadalomföldrajz K8 - Fővárosok szerepe egy ország életében.",
      ro: "Andorra la Vella, capitala și inima vibrantă a principatului, este cea mai înaltă capitală din Europa. Orașul este centrul vieții politice, economice și culturale. Este un paradis al turismului de cumpărături, cu principalele sale artere, Avinguda Meritxell și Avinguda Príncep Benlloch, pline de magazine duty-free. Pe lângă agitația modernă, străzile pietruite din 'Barri Antic' (Orașul Vechi) emană o atmosferă istorică, găzduind Casa de la Vall, vechea clădire a parlamentului. Arhitectura modernă este reprezentată de noua clădire a parlamentului și de cartierul guvernamental.",
      en: "Andorra la Vella, the capital and vibrant heart of the principality, is Europe's highest capital city. The city is the center of political, economic, and cultural life. It's a haven for shopping tourism, with its main arteries, Avinguda Meritxell and Avinguda Príncep Benlloch, filled with duty-free shops. Besides the modern hustle and bustle, the 'Barri Antic' (Old Town) with its cobblestone streets exudes a historical atmosphere, home to the Casa de la Vall, the old parliament building. Modern architecture is represented by the new parliament building and the government quarter. Salvador Dalí's sculpture 'The Nobility of Time' is one of the city's most popular photo spots. Andorra la Vella is a cosmopolitan city where mountain scenery meets modern urban life. Social Geography K8 - The Role of Capital Cities in a Country's Life."
    },
    factsAdvanced: {
      de: [
        "Andorra la Vella ist die bevölkerungsreichste Gemeinde des Landes.",
        "Die Gemeinde umfasst auch die Stadt Santa Coloma.",
        "Die Kirche Sant Esteve hat eine romanische Apsis aus dem 12. Jahrhundert.",
        "Der Parc Central ist die grüne Lunge der Stadt und ein beliebter Erholungsort.",
        "Die Festa Major, das größte Fest der Stadt, findet jährlich Anfang August statt.",
        "Von Westen her bietet die Stadt Zugang zum UNESCO-Welterbetal Madriu-Perafita-Claror."
        ],
      hu: [
        "Andorra la Vella a legnépesebb közösség az országban.",
        "A közösséghez tartozik a főváros és Santa Coloma település is.",
        "A Sant Esteve templom 12. századi román kori apszissal rendelkezik.",
        "A Parc Central a város zöld tüdeje, népszerű pihenőhely.",
        "A város nagy ünnepe, a Festa Major, minden év augusztus elején zajlik.",
        "Nyugatról innen lehet belépni a Madriu-Perafita-Claror UNESCO világörökségi völgybe.",
        "A város 1023 méteres tengerszint feletti magasságban fekszik.",
        "A város címere egy zöld fát ábrázol kék háttér előtt, utalva a völgyre és a folyóra."
      ],
      ro: [
        "Andorra la Vella este cea mai populată parohie din țară.",
        "Parohia include și orașul Santa Coloma.",
        "Biserica Sant Esteve are o absidă romanică din secolul al XII-lea.",
        "Parc Central este plămânul verde al orașului și un loc popular de recreere.",
        "Festa Major, cea mai mare sărbătoare a orașului, are loc anual la începutul lunii august.",
        "Din vest, orașul oferă acces la Valea Madriu-Perafita-Claror, sit al Patrimoniului Mondial UNESCO."
        ],
      en: [
        "Andorra la Vella is the most populous parish in the country.",
        "The parish also includes the town of Santa Coloma.",
        "The Church of Sant Esteve has a 12th-century Romanesque apse.",
        "Parc Central is the city's green lung and a popular recreational spot.",
        "The city's major festival, the Festa Major, takes place annually in early August.",
        "From the west, the city provides access to the Madriu-Perafita-Claror UNESCO World Heritage Valley.",
        "The city is located at an altitude of 1,023 meters above sea level.",
        "The city's coat of arms depicts a green tree on a blue background, referring to the valley and the river."
      ]
    }
  },
    {
    id: "AD-08",
    type: "region",
    parent: "country-andorra",
    coords: [1.5341, 42.5083],
    name: { de: "Escaldes-Engordany", hu: "Escaldes-Engordany", ro: "Escaldes-Engordany", en: "Escaldes-Engordany" },
    description: {
      de: "Berühmt für seine Thermalquellen und als modernes Handelszentrum.",
      hu: "Hőforrásairól és modern kereskedelmi központjáról híres.",
      ro: "Faimoasă pentru izvoarele sale termale și ca centru comercial modern.",
      en: "Famous for its thermal springs and as a modern commercial center."
    },
    descriptionAdvanced: {
      de: "Escaldes-Engordany ist die jüngste Gemeinde Andorras, die 1978 durch die Abspaltung von Andorra la Vella entstand. Sie ist bekannt für ihr reichlich vorhandenes Thermalwasser, das im spektakulären Thermalzentrum Caldea-INÚU genutzt wird. Die Gemeinde ist ein wichtiges Handels- und Geschäftszentrum, dessen Hauptschlagader, die Avinguda Carlemany, eine Fußgängerzone ist, die zum Einkaufen einlädt. Ein Teil des UNESCO-Weltkulturerbes Madriu-Perafita-Claror-Tal liegt auf dem Gebiet der Gemeinde. Kulturell ist Escaldes-Engordany mit dem Carmen Thyssen Museum, dem Museum für Parfüm und dem Zentrum für Kunst (CAEE) sehr gut aufgestellt.",
      hu: "Escaldes-Engordany, Andorra legfiatalabb, 1978-ban alapított közössége, amely a termálvíz és a modern kereskedelem köré épült. Itt található a Caldea-INÚU, Európa legnagyobb hegyi termálfürdő-komplexuma, amelynek futurisztikus üvegépülete a város szimbólumává vált. A közösség gyakorlatilag egybeépült a fővárossal, a gyalogosított Avinguda Carlemany sugárút Andorra egyik legfontosabb bevásárlóutcája. A kereskedelem mellett a kultúra is fontos szerepet játszik: a Carmen Thyssen Múzeum, a Parfümmúzeum és a Művészeti Központ (CAEE) is itt kapott helyet. A közösség területére nyúlik be a Madriu-Perafita-Claror völgy, amely az UNESCO világörökség része. Városföldrajz K8 - Városfejlődés, funkcionális zónák.",
      ro: "Escaldes-Engordany, cea mai tânără parohie a Andorrei, fondată în 1978, este construită în jurul apei termale și a comerțului modern. Aici se află Caldea-INÚU, cel mai mare complex balnear montan din Europa, a cărui clădire futuristă din sticlă a devenit un simbol al orașului. Parohia este practic unită cu capitala, iar bulevardul pietonal Avinguda Carlemany este una dintre cele mai importante străzi comerciale din Andorra. Pe lângă comerț, cultura joacă, de asemenea, un rol important: Muzeul Carmen Thyssen, Muzeul Parfumului și Centrul de Artă (CAEE) sunt toate situate aici. Parohia include, de asemenea, o parte din Valea Madriu-Perafita-Claror, un sit al Patrimoniului Mondial UNESCO.",
      en: "Escaldes-Engordany, Andorra's youngest parish founded in 1978, is built around thermal water and modern commerce. It is home to Caldea-INÚU, Europe's largest mountain thermal spa complex, whose futuristic glass building has become a symbol of the town. The parish is practically merged with the capital, and the pedestrianized Avinguda Carlemany is one of Andorra's most important shopping streets. Besides commerce, culture also plays a significant role: the Carmen Thyssen Museum, the Perfume Museum, and the Art Center (CAEE) are all located here. The parish also includes a part of the Madriu-Perafita-Claror Valley, a UNESCO World Heritage site. Urban Geography K8 - Urban Development, Functional Zones."
    },
    factsAdvanced: {
      de: [
        "Die Gemeinde hat die zweithöchste Bevölkerungszahl nach Andorra la Vella.",
        "Der Name 'Escaldes' leitet sich vom Verb 'escaldar' (brühen/erhitzen) ab, was auf das heiße Wasser hinweist.",
        "Das Caldea Spa wurde 1994 eröffnet.",
        "Das jährliche Jazzfestival ist eine wichtige kulturelle Veranstaltung.",
        "Der historische Kern von Engordany hat seine traditionelle Architektur bewahrt.",
        "Die Kirche Sant Pere Màrtir ist ein Beispiel für die Neo-Romanik."
        ],
      hu: [
        "Escaldes-Engordany Andorra második legnépesebb közössége.",
        "A 'caldes' szó forró vizet jelent, utalva a termálforrásokra.",
        "A Caldea fürdőt a híres francia építész, Jean-Michel Ruols tervezte.",
        "A minden évben megrendezett jazzfesztivál fontos kulturális esemény.",
        "Engordany történelmi magja megőrizte hagyományos pireneusi építészetét.",
        "A Sant Pere Màrtir templom a neoromán stílus egy példája.",
        "A közösség ad otthont Andorra központi kórházának is.",
        "A Valira d'Orient és a Valira del Nord folyók itt egyesülnek, létrehozva a Gran Valira folyót."
      ],
      ro: [
        "Escaldes-Engordany este a doua cea mai populată parohie din Andorra.",
        "Cuvântul 'caldes' înseamnă apă fierbinte, referindu-se la izvoarele termale.",
        "Centrul spa Caldea a fost proiectat de celebrul arhitect francez Jean-Michel Ruols.",
        "Festivalul anual de jazz este un eveniment cultural important.",
        "Centrul istoric al Engordany și-a păstrat arhitectura tradițională pirenaică.",
        "Biserica Sant Pere Màrtir este un exemplu de stil neoromanic."
        ],
      en: [
        "Escaldes-Engordany is the second most populous parish in Andorra.",
        "The word 'caldes' means hot water, referring to the thermal springs.",
        "The Caldea spa was designed by the famous French architect Jean-Michel Ruols.",
        "The annual jazz festival is an important cultural event.",
        "The historic core of Engordany has preserved its traditional Pyrenean architecture.",
        "The church of Sant Pere Màrtir is an example of neo-Romanesque style.",
        "The parish is also home to Andorra's central hospital.",
        "The Valira d'Orient and Valira del Nord rivers merge here, creating the Gran Valira river."
      ]
    }
  },
    {
    id: "AD-02",
    type: "region",
    parent: "country-andorra",
    coords: [1.5976, 42.5671],
    name: { de: "Canillo", hu: "Canillo", ro: "Canillo", en: "Canillo" },
    description: {
      de: "Die flächenmäßig größte Gemeinde Andorras und ein wichtiges religiöses Zentrum.",
      hu: "Andorra legnagyobb területű közössége és fontos vallási központja.",
      ro: "Cea mai mare parohie din punct de vedere al suprafeței și un important centru religios.",
      en: "The largest parish in Andorra by area and an important religious center."
    },
    descriptionAdvanced: {
      de: "Canillo ist flächenmäßig die größte der sieben Gemeinden Andorras und ein wichtiges touristisches und religiöses Zentrum. Hier befindet sich das Heiligtum von Meritxell, die Heimat der Schutzpatronin des Landes. Die Gemeinde ist ein Hauptzugangspunkt zum Skigebiet Grandvalira, mit Sektoren in Canillo, Soldeu und El Tarter. Zu den modernen Attraktionen gehören der Aussichtspunkt Roc del Quer und die Tibetische Brücke von Canillo. Trotz seiner Modernität bewahrt Canillo auch Schätze der romanischen Kunst, wie die Kirche Sant Joan de Caselles. Der Palau de Gel (Eispalast) in Canillo bietet das ganze Jahr über Freizeitaktivitäten.",
      hu: "Canillo, Andorra legnagyobb területű közössége, a vallási és kalandturizmus központja. Itt emelkedik a Meritxell-szentély, az ország védőszentjének otthona, melynek modern bazilikáját Ricardo Bofill tervezte. A közösség a Grandvalira sírégió kulcsfontosságú része, a Soldeu-El Tarter és Canillo szektorokkal. A modern kor vonzerejét a Roc del Quer kilátó lebegő pallója és a világ egyik leghosszabb gyalogos függőhídja, a Tibeti híd képviseli. Canillo sikeresen ötvözi a modern fejlesztéseket a történelmi örökség megőrzésével, amire a Sant Joan de Caselles román kori templom a legjobb példa. Építészet K8 - Tradíció és innováció a hegyvidéki építészetben.",
      ro: "Canillo, cea mai mare parohie din Andorra ca suprafață, este un centru al turismului religios și de aventură. Aici se află Sanctuarul Meritxell, casa sfintei patroane a țării, a cărui bazilică modernă a fost proiectată de Ricardo Bofill. Parohia este o parte cheie a regiunii de schi Grandvalira, cu sectoarele Soldeu-El Tarter și Canillo. Atracțiile moderne includ pasarela plutitoare a punctului de belvedere Roc del Quer și Podul Tibetan, unul dintre cele mai lungi poduri suspendate pentru pietoni din lume. Canillo combină cu succes dezvoltarea modernă cu conservarea patrimoniului istoric, cel mai bun exemplu fiind biserica romanică Sant Joan de Caselles.",
      en: "Canillo, Andorra's largest parish by area, is a hub for religious and adventure tourism. It is home to the Sanctuary of Meritxell, dedicated to the country's patron saint, with a modern basilica designed by Ricardo Bofill. The parish is a key part of the Grandvalira ski region, with the Soldeu-El Tarter and Canillo sectors. Modern attractions include the floating walkway of the Roc del Quer viewpoint and the Tibetan Bridge, one of the world's longest pedestrian suspension bridges. Canillo successfully combines modern development with the preservation of historical heritage, best exemplified by the Romanesque church of Sant Joan de Caselles. Architecture K8 - Tradition and Innovation in Mountain Architecture."
    },
    factsAdvanced: {
      de: [
        "Soldeu, ein Dorf in Canillo, ist regelmäßiger Austragungsort von alpinen Ski-Weltcup-Rennen.",
        "Die Tibetische Brücke von Canillo ist 603 Meter lang.",
        "Canillo ist die höchstgelegene Gemeinde des Landes.",
        "Das Motorradmuseum in Canillo zeigt eine bedeutende Sammlung historischer Zweiräder.",
        "Der Nationalfeiertag Andorras am 8. September wird zu Ehren der Muttergottes von Meritxell gefeiert.",
        "Die Gemeinde besteht aus zahlreichen kleinen Dörfern und Weilern wie Incles, Prats oder Ransol."
        ],
      hu: [
        "Soldeu településen rendszeresen rendeznek alpesi sí világkupa-futamokat.",
        "A Tibeti híd 603 méter hosszú és 158 méter magasan ível át a völgy felett.",
        "Canillo az ország legmagasabban fekvő közössége.",
        "A Motorkerékpár-múzeum Európa egyik legjelentősebb magángyűjteményét mutatja be.",
        "Szeptember 8-a, a Meritxelli Szűzanya napja, Andorra nemzeti ünnepe.",
        "A Palau de Gel (Jégpalota) egész évben nyitva álló sportkomplexum.",
        "A Val d'Incles egy L-alakú gleccservölgy, amely nyáron népszerű túrahelyszín.",
        "A közösség több mint tíz kisebb faluból és településrészből áll."
      ],
      ro: [
        "Satul Soldeu găzduiește regulat curse de Cupa Mondială de schi alpin.",
        "Podul Tibetan are 603 metri lungime și se întinde la o înălțime de 158 de metri deasupra văii.",
        "Canillo este cea mai înaltă parohie din țară.",
        "Muzeul Motocicletelor prezintă una dintre cele mai importante colecții private din Europa.",
        "8 septembrie, ziua Maicii Domnului de la Meritxell, este sărbătoarea națională a Andorrei.",
        "Palatul de Gheață (Palau de Gel) este un complex sportiv deschis pe tot parcursul anului."
        ],
      en: [
        "The village of Soldeu is a regular host of the FIS Alpine Ski World Cup.",
        "The Tibetan Bridge is 603 meters long and is suspended 158 meters above the valley floor.",
        "Canillo is the highest parish in the country.",
        "The Palau de Gel (Ice Palace) in Canillo offers year-round activities like ice skating and karting.",
        "Andorra's national day, September 8th, is celebrated in honor of Our Lady of Meritxell.",
        "The Val d'Incles is a picturesque U-shaped valley, popular for hiking in the summer.",
        "The Motorcycle Museum in Canillo displays an impressive private collection.",
        "The parish is made up of numerous small villages and hamlets."
      ]
    }
  },
  {
    id: "AD-03",
    type: "region",
    parent: "country-andorra",
    coords: [1.5801, 42.5360],
    name: { de: "Encamp", hu: "Encamp", ro: "Encamp", en: "Encamp" },
    description: {
      de: "Eine zentrale Gemeinde mit einer Mischung aus Tradition und modernem Skitourismus.",
      hu: "Központi fekvésű közösség, ahol keveredik a hagyomány és a modern síturizmus.",
      ro: "O parohie centrală cu un amestec de tradiție și turism de schi modern.",
      en: "A central parish with a mix of tradition and modern ski tourism."
    },
    descriptionAdvanced: {
      de: "Encamp liegt im Herzen von Andorra und ist eine Gemeinde der Kontraste. Sie besteht aus zwei sehr unterschiedlichen Hauptorten: Encamp, einem städtischen Zentrum nahe der Hauptstadt, und Pas de la Casa, einem hochgelegenen Skiort an der französischen Grenze. Der Funicamp, eine 6 km lange Seilbahn, verbindet Encamp direkt mit dem Herzen des Skigebiets Grandvalira. Kulturell bietet Encamp das Nationale Automobilmuseum und das Elektrizitätsmuseum. Das historische Ensemble von Les Bons, mit seiner romanischen Kirche und dem Verteidigungsturm, zeugt von der mittelalterlichen Vergangenheit der Region.",
      hu: "Encamp, Andorra földrajzi középpontjában, a kontrasztok közössége. Magában foglalja a főváros közeli, nyüzsgő Encamp várost és a francia határon fekvő, magashegyi síparadicsomot, Pas de la Casát. A két településrészt a Pireneusok legmagasabb közúti hágója, a Port d'Envalira is összeköti. A Funicamp, egy 6 km hosszú kabinos felvonó, közvetlen összeköttetést biztosít Encampból a Grandvalira síterep szívébe. A technikai érdekességek iránt fogékonyak számára az Autómúzeum és az Elektromossági Múzeum kínál egyedülálló élményt, míg a Les Bons történelmi komplexum a középkori Andorra világába kalauzol. Technika és történelem K8 - Az infrastruktúra hatása a hegyvidéki közösségekre.",
      ro: "Encamp, în centrul geografic al Andorrei, este o parohie a contrastelor. Include orașul aglomerat Encamp, aproape de capitală, și paradisul de schi de mare altitudine Pas de la Casa, la granița cu Franța. Cele două așezări sunt, de asemenea, conectate prin Port d'Envalira, cel mai înalt pas rutier din Pirinei. Funicamp, o telecabină de 6 km lungime, oferă o legătură directă de la Encamp la inima stațiunii de schi Grandvalira. Pentru cei interesați de tehnologie, Muzeul Automobilului și Muzeul Electricității oferă experiențe unice, în timp ce complexul istoric Les Bons transportă vizitatorii în Andorra medievală.",
      en: "Encamp, in the geographical center of Andorra, is a parish of contrasts. It includes the bustling town of Encamp near the capital and the high-altitude ski paradise of Pas de la Casa on the French border. The two settlements are also connected by the Port d'Envalira, the highest road pass in the Pyrenees. The Funicamp, a 6 km long cable car, provides a direct link from Encamp to the heart of the Grandvalira ski area. For those interested in technology, the Automobile Museum and the Electricity Museum offer unique experiences, while the Les Bons historical complex transports visitors to medieval Andorra. Technology and History K8 - The Impact of Infrastructure on Mountain Communities."
    },
    factsAdvanced: {
      de: [
        "Pas de la Casa ist der einzige Grenzübergang nach Frankreich.",
        "Der Port d'Envalira ist der höchste Straßenpass der Pyrenäen.",
        "Die Pfarrkirche Santa Eulàlia in Encamp hat den höchsten romanischen Glockenturm in Andorra.",
        "Das Fest von Sant Joan wird im Juni mit traditionellen Fallas (Fackeln) gefeiert.",
        "Der Gletschersee-Kreis von Pessons befindet sich im Sektor Grau Roig.",
        "Encamp ist die drittbevölkerungsreichste Gemeinde des Landes."
        ],
      hu: [
        "Pas de la Casa az egyetlen közúti határátkelő Andorra és Franciaország között.",
        "A Port d'Envalira hágó 2408 méter magas.",
        "A Santa Eulàlia templom román stílusú harangtornya a legmagasabb az országban.",
        "A 'falles' nevű nyári napfordulós fáklyás felvonulás az UNESCO szellemi kulturális örökség része.",
        "A Pessons-tavak gleccsertó-együttese a Grau Roig szektorban található, amely a közösséghez tartozik.",
        "Encamp Andorra harmadik legnépesebb közössége.",
        "A rádiózás iránt érdeklődők számára a Radio Andorra egykori adóállomása is látogatható.",
        "Az Engolasters-tó vízerőműve látja el az ország jelentős részét energiával."
      ],
      ro: [
        "Pas de la Casa este singurul punct de trecere a frontierei rutiere între Andorra și Franța.",
        "Pasul Port d'Envalira are o altitudine de 2.408 metri.",
        "Turnul clopotniță romanic al bisericii Santa Eulàlia este cel mai înalt din țară.",
        "Procesiunea cu torțe 'falles' de la solstițiul de vară face parte din patrimoniul cultural imaterial al UNESCO.",
        "Complexul lacurilor glaciare Pessons se află în sectorul Grau Roig, care aparține parohiei.",
        "Encamp este a treia cea mai populată parohie din Andorra."
        ],
      en: [
        "Pas de la Casa is the only road border crossing between Andorra and France.",
        "The Port d'Envalira pass is 2,408 meters high.",
        "The Romanesque bell tower of the Santa Eulàlia church is the tallest in the country.",
        "The 'falles', a summer solstice torchlight procession, is part of UNESCO's intangible cultural heritage.",
        "The Pessons glacial lake complex is located in the Grau Roig sector, which belongs to the parish.",
        "Encamp is the third most populous parish in Andorra.",
        "For radio enthusiasts, the former transmitter station of Radio Andorra can be visited.",
        "The Engolasters Lake hydroelectric power station supplies a significant part of the country with energy."
      ]
    }
  },
    {
    id: "AD-04",
    type: "region",
    parent: "country-andorra",
    coords: [1.5149, 42.5449],
    name: { de: "La Massana", hu: "La Massana", ro: "La Massana", en: "La Massana" },
    description: {
      de: "Heimat des höchsten Berges des Landes und beliebtes Ziel für Outdoor-Sportarten.",
      hu: "Az ország legmagasabb hegyének otthona és a szabadtéri sportok kedvelt célpontja.",
      ro: "Găzduiește cel mai înalt munte din țară și este o destinație populară pentru sporturi în aer liber.",
      en: "Home to the country's highest mountain and a popular destination for outdoor sports."
    },
    descriptionAdvanced: {
      de: "La Massana ist als die 'aktivste' Gemeinde Andorras bekannt und ein Paradies für Outdoor-Enthusiasten. Hier befindet sich der höchste Berg des Landes, der Coma Pedrosa (2.942 m), dessen Umgebung als Naturpark geschützt ist. Das Skigebiet Pal-Arinsal (Teil von Vallnord) bietet im Winter Pisten für alle Niveaus. Im Sommer wird es zum Vallnord Bike Park, einem der renommiertesten Mountainbike-Ziele Europas, das regelmäßig Weltcup-Veranstaltungen ausrichtet. Neben dem Sport bietet La Massana auch Kultur, wie das Comic-Museum und das Interpretationszentrum Farga Rossell, das die Bedeutung der Eisenindustrie zeigt.",
      hu: "La Massana, az 'aktív' közösség, a szabadtéri sportok andorrai fellegvára. Itt emelkedik az ország legmagasabb pontja, a 2942 méteres Coma Pedrosa, amely egyben egy védett természeti park központja is. Télen a Pal-Arinsal síterep, nyáron pedig a világhírű Vallnord Bike Park vonzza a sportok szerelmeseit. A közösség központjából induló kabinos felvonó gyors és kényelmes hozzáférést biztosít a hegyekhez. La Massana azonban nemcsak a sportról szól; a Farga Rossell vaskohó-múzeum az ipari örökséget, a Képregénymúzeum pedig a modern művészeteket képviseli, bemutatva a közösség sokszínűségét. Földrajz és gazdaság K8 - A sportturizmusra épülő gazdasági modellek.",
      ro: "La Massana, parohia 'activă', este fortăreața Andorrei pentru sporturile în aer liber. Aici se află cel mai înalt punct al țării, Coma Pedrosa de 2.942 de metri, care este și centrul unui parc natural protejat. Iarna, stațiunea de schi Pal-Arinsal atrage iubitorii de sport, în timp ce vara, faimosul parc de biciclete Vallnord face același lucru. O telecabină din centrul parohiei oferă acces rapid și convenabil la munți. Cu toate acestea, La Massana nu este doar despre sport; muzeul de fierărie Farga Rossell reprezintă patrimoniul industrial, iar Muzeul Benzilor Desenate prezintă artele moderne, demonstrând diversitatea parohiei.",
      en: "La Massana, the 'active' parish, is Andorra's stronghold for outdoor sports. It is home to the country's highest point, the 2,942-meter Coma Pedrosa, which is also the center of a protected nature park. In winter, the Pal-Arinsal ski resort attracts sports lovers, while in summer, it's the world-famous Vallnord Bike Park. A cable car from the parish center provides quick and convenient access to the mountains. However, La Massana is not just about sports; the Farga Rossell ironworks museum represents industrial heritage, and the Comic Museum showcases modern arts, demonstrating the parish's diversity. Geography and Economics K8 - Economic Models Based on Sports Tourism."
    },
    factsAdvanced: {
      de: [
        "Die Dörfer Pal und Arinsal sind wichtige Touristenzentren innerhalb der Gemeinde.",
        "Die Seilbahn von La Massana bietet direkten Zugang zum Sektor Pal.",
        "Das Dorf Pal ist ein gut erhaltenes Beispiel für traditionelle Pyrenäen-Architektur.",
        "La Massana ist bekannt für seine lebhafte Atmosphäre mit vielen Restaurants und Bars.",
        "Der Wochenmarkt findet jeden Donnerstagmorgen statt.",
        "Die Kirche Sant Climent de Pal ist ein herausragendes Beispiel der romanischen Kunst."
        ],
      hu: [
        "A Pal és Arinsal falvak a közösség két legfontosabb turisztikai központja.",
        "A Vallnord Bike Park rendszeresen ad otthont mountain bike világkupa-futamoknak.",
        "A Pal falu az egyik legjobb állapotban megőrzött példája a hagyományos pireneusi építészetnek.",
        "A közösség híres a nyüzsgő, barátságos hangulatáról, számos étteremmel és bárral.",
        "A Sant Climent de Pal templom ikerablakos harangtornya egyedülálló Andorrában.",
        "A 'Ruta del Ferro' (Vas út) egy része áthalad a közösség területén.",
        "Nyáron a sífelvonókat a túrázók és a hegyi kerékpárosok szállítására használják.",
        "A közösségben több via ferrata (vasalt út) is található a sziklamászás kedvelőinek."
      ],
      ro: [
        "Satele Pal și Arinsal sunt cele mai importante două centre turistice din parohie.",
        "Parcul de biciclete Vallnord găzduiește regulat curse de Cupa Mondială de mountain bike.",
        "Satul Pal este unul dintre cele mai bine conservate exemple de arhitectură tradițională pirenaică.",
        "Parohia este renumită pentru atmosfera sa vibrantă și prietenoasă, cu numeroase restaurante și baruri.",
        "Turnul clopotniță cu ferestre gemene al bisericii Sant Climent de Pal este unic în Andorra.",
        "O parte din 'Ruta del Ferro' (Ruta Fierului) traversează parohia."
        ],
      en: [
        "The villages of Pal and Arinsal are the two most important tourist centers in the parish.",
        "The Vallnord Bike Park regularly hosts mountain bike World Cup races.",
        "The village of Pal is one of the best-preserved examples of traditional Pyrenean architecture.",
        "The parish is famous for its lively, friendly atmosphere with numerous restaurants and bars.",
        "The twin-windowed bell tower of the Sant Climent de Pal church is unique in Andorra.",
        "Part of the 'Ruta del Ferro' (Iron Route) passes through the parish.",
        "In summer, ski lifts are used to transport hikers and mountain bikers.",
        "There are several via ferrata routes in the parish for climbing enthusiasts."
      ]
    }
  },
  {
    id: "AD-05",
    type: "region",
    parent: "country-andorra",
    coords: [1.5332, 42.5562],
    name: { de: "Ordino", hu: "Ordino", ro: "Ordino", en: "Ordino" },
    description: {
      de: "Eine malerische Gemeinde im Norden, bekannt für ihre gut erhaltenen Steinhäuser und Natur.",
      hu: "Festői közösség északon, amely jól megőrzött kőházairól és természeti szépségeiről ismert.",
      ro: "O parohie pitorească în nord, cunoscută pentru casele de piatră bine conservate și natură.",
      en: "A picturesque parish in the north, known for its well-preserved stone houses and nature."
    },
    descriptionAdvanced: {
      de: "Ordino ist die nordwestlichste Gemeinde Andorras und gilt als deren kulturelles Zentrum. Die gesamte Gemeinde wurde von der UNESCO zum Biosphärenreservat erklärt, was ihr Engagement für die Erhaltung des Gleichgewichts zwischen Mensch und Natur unterstreicht. Die Landschaft ist geprägt von hohen Gipfeln, darunter der Pic de Tristaina und der Pic de l'Estanyó. Das Skigebiet Ordino-Arcalís ist ein Paradies für Freerider. Die Dörfer wie Ordino, La Cortinada oder Ansalonga haben ihren traditionellen Charme mit Steinhäusern und Schieferdächern bewahrt. Kulturelle Highlights sind das Museum Casa d'Areny-Plandolit und die Eisenroute.",
      hu: "Ordino, Andorra északnyugati, leginkább érintetlen közössége, melynek teljes területe UNESCO bioszféra-rezervátum. Ez a cím is jelzi a régió elkötelezettségét a természet és az emberi tevékenység harmonikus egyensúlyának megőrzése mellett. A tájat magas csúcsok uralják, mint a Pic de Tristaina és a Pic de l'Estanyó. A falvak, mint Ordino, La Cortinada vagy Ansalonga, megőrizték hagyományos pireneusi építészetüket kőházaikkal és palatetőikkel. A kulturális örökség és a természeti szépségek egyedülálló ötvözete ez, ahol a Vasút (Ruta del Ferro) az ipari múltat, a Sorteny-völgy pedig a botanikai gazdagságot tárja fel. Földrajz K8 - Bioszféra-rezervátumok és fenntartható fejlődés.",
      ro: "Ordino, cea mai nord-vestică și mai bine conservată parohie a Andorrei, este în întregime o rezervație a biosferei UNESCO. Acest titlu indică angajamentul regiunii pentru menținerea unui echilibru armonios între natură și activitatea umană. Peisajul este dominat de vârfuri înalte precum Pic de Tristaina și Pic de l'Estanyó. Satele, cum ar fi Ordino, La Cortinada sau Ansalonga, și-au păstrat arhitectura tradițională pirenaică cu case de piatră și acoperișuri de ardezie. Este un amestec unic de patrimoniu cultural și frumusețe naturală, unde Ruta Fierului (Ruta del Ferro) explorează trecutul industrial, iar Valea Sorteny dezvăluie bogăția botanică.",
      en: "Ordino, located in the northwest, is Andorra's most preserved parish and its entire territory is a designated UNESCO Biosphere Reserve. This status highlights the region's commitment to maintaining a harmonious balance between nature and human activity. The landscape is dominated by high peaks like Pic de Tristaina and Pic de l'Estanyó. Villages such as Ordino, La Cortinada, and Ansalonga have retained their traditional Pyrenean architecture with stone houses and slate roofs. It is a unique blend of cultural heritage and natural beauty, where the Iron Route (Ruta del Ferro) explores industrial history and the Sorteny Valley reveals botanical richness. Geography K8 - Biosphere Reserves and Sustainable Development."
    },
    factsAdvanced: {
      de: [
        "Ordino hat die geringste Bevölkerungsdichte in Andorra.",
        "Der Naturpark Sorteny ist für seinen botanischen Reichtum bekannt.",
        "Das Nationale Auditorium von Andorra befindet sich in Ordino.",
        "Die Eisenroute (Ruta del Ferro) folgt den Spuren der alten Eisenindustrie.",
        "Das Dorf Ordino war der letzte Ort in Andorra, der eine asphaltierte Straße erhielt.",
        "Die Gastronomie ist für ihre traditionellen Gerichte wie 'trinxat' oder Reis mit Pilzen bekannt."
        ],
      hu: [
        "Ordino rendelkezik a legalacsonyabb népsűrűséggel Andorrában.",
        "Itt található az ország Nemzeti Auditóriuma, a komolyzenei élet központja.",
        "A Postamúzeum bemutatja az andorrai postaszolgálat egyedülálló, spanyol-francia kettős rendszerét.",
        "Az Ordino-Arcalís síterep a freeride síelés nemzetközileg elismert paradicsoma.",
        "A helyi gasztronómia híres fogása a 'trinxat', egy káposztás-burgonyás étel.",
        "A Miniatűr Múzeum Nicolai Siadristy lélegzetelállító mikroszkopikus alkotásait őrzi.",
        "A közösség címerében a hegyek és a víz motívumai is megjelennek.",
        "A régióban a dohánytermesztés helyett a turizmus vált a fő bevételi forrássá."
      ],
      ro: [
        "Ordino are cea mai mică densitate a populației din Andorra.",
        "Aici se află Auditoriul Național al țării, centrul vieții muzicii clasice.",
        "Muzeul Poștal prezintă sistemul poștal dual unic, spaniol-francez, al Andorrei.",
        "Stațiunea de schi Ordino-Arcalís este un paradis recunoscut internațional pentru schiul freeride.",
        "Un fel de mâncare renumit al gastronomiei locale este 'trinxat', un preparat din varză și cartofi.",
        "Muzeul Miniaturilor găzduiește creațiile microscopice uluitoare ale lui Nicolai Siadristy."
        ],
      en: [
        "Ordino has the lowest population density in Andorra.",
        "It is home to the country's National Auditorium, the center of classical music life.",
        "The Postal Museum explains Andorra's unique dual Spanish-French postal system.",
        "The Ordino-Arcalís ski resort is an internationally acclaimed paradise for freeride skiing.",
        "A famous local gastronomic dish is 'trinxat', a cabbage and potato dish.",
        "The Miniature Museum houses the breathtaking microscopic creations of Nicolai Siadristy.",
        "The parish's coat of arms features motifs of mountains and water.",
        "In the region, tourism has replaced tobacco cultivation as the main source of income."
      ]
    }
  },
  {
    id: "AD-06",
    type: "region",
    parent: "country-andorra",
    coords: [1.4913, 42.4637],
    name: { de: "Sant Julià de Lòria", hu: "Sant Julià de Lòria", ro: "Sant Julià de Lòria", en: "Sant Julià de Lòria" },
    description: {
      de: "Die südlichste Gemeinde, bekannt für ihr mildes Klima und die Tabaktradition.",
      hu: "A legdélibb közösség, amely enyhe éghajlatáról és dohánytermesztési hagyományairól ismert.",
      ro: "Cea mai sudică parohie, cunoscută pentru climatul blând și tradiția tutunului.",
      en: "The southernmost parish, known for its mild climate and tobacco tradition."
    },
    descriptionAdvanced: {
      de: "Sant Julià de Lòria ist das Tor zu Andorra von Spanien aus. Als südlichste und tiefstgelegene Gemeinde genießt sie ein milderes, mediterraneres Klima als der Rest des Landes. Historisch war die Region ein Zentrum des Tabakanbaus, wie das Tabakmuseum in der ehemaligen Reig-Fabrik eindrucksvoll dokumentiert. Die Hauptattraktion heute ist Naturlandia, ein riesiger Abenteuerpark in den Wäldern von La Rabassa, bekannt für seine Tiergehege und die alpine Rodelbahn Tobotronc. Die Gemeinde beherbergt auch einen Teil des Universitätscampus und hat ein lebendiges kulturelles Leben. Die Pont de la Margineda, eine mittelalterliche Brücke, ist ein wichtiges historisches Wahrzeichen.",
      hu: "Sant Julià de Lòria, Andorra déli kapuja, ahol az ország a szomszédos Spanyolországgal találkozik. Legalacsonyabb fekvésének köszönhetően klímája enyhébb, ami történelmileg a dohánytermesztés központjává tette. Ezt a múltat a Dohánymúzeum őrzi. Ma a közösség fő vonzereje a Naturlandia kalandpark, amely a La Rabassa erdőben helyezkedik el, és olyan egyedülálló attrakciókkal büszkélkedhet, mint a Tobotronc, a világ leghosszabb természetes szánkópályája. Sant Julià de Lòria emellett egyetemi város is, az Andorrai Egyetem campusa élénk, fiatalos hangulatot kölcsönöz neki. A középkori Pont de la Margineda híd a történelmi örökség fontos tanúja. Gazdaságföldrajz K7 - Mezőgazdaságtól a szolgáltatásokig: egy régió átalakulása.",
      ro: "Sant Julià de Lòria, poarta de sud a Andorrei, este locul unde țara se întâlnește cu Spania vecină. Datorită altitudinii sale mai joase, clima sa este mai blândă, ceea ce a făcut-o istoric centrul cultivării tutunului. Acest trecut este păstrat de Muzeul Tutunului. Astăzi, principala atracție a parohiei este parcul de aventuri Naturlandia, situat în pădurea La Rabassa, care se mândrește cu atracții unice precum Tobotronc, cel mai lung tobogan natural din lume. Sant Julià de Lòria este, de asemenea, un oraș universitar, campusul Universității din Andorra conferindu-i o atmosferă vibrantă și tânără. Podul medieval Pont de la Margineda este o mărturie importantă a patrimoniului său istoric.",
      en: "Sant Julià de Lòria, Andorra's southern gateway, is where the country meets neighboring Spain. Due to its lower altitude, its climate is milder, which historically made it the center of tobacco cultivation. This past is preserved in the Tobacco Museum. Today, the parish's main attraction is the Naturlandia adventure park, located in the La Rabassa forest, which boasts unique attractions like the Tobotronc, the world's longest natural toboggan run. Sant Julià de Lòria is also a university town, with the University of Andorra campus giving it a lively, youthful atmosphere. The medieval Pont de la Margineda bridge is an important witness to its historical heritage. Economic Geography K7 - From Agriculture to Services: The Transformation of a Region."
    },
    factsAdvanced: {
      de: [
        "Die Gemeinde grenzt an die spanische Region Katalonien.",
        "Der Tobotronc ist mit 5,3 km die längste alpine Rodelbahn der Welt.",
        "Die Kirche Sant Serni de Nagol aus dem 11. Jahrhundert ist ein Juwel der Romanik.",
        "In Sant Julià de Lòria gibt es zahlreiche Weingüter, die die Weinbautradition wiederbeleben.",
        "Die Festa Major von Sant Julià ist eine der größten in Andorra.",
        "Der Grenzübergang ist rund um die Uhr geöffnet."
        ],
      hu: [
        "A közösség közvetlenül határos a spanyolországi Katalóniával.",
        "A Tobotronc 5,3 km hosszú és 400 méter szintkülönbséget küzd le.",
        "A 11. századi Sant Serni de Nagol templom egy sziklaszirtre épült.",
        "A közösségben újjáéled a bortermelés, több magaslati borászat is működik itt.",
        "Itt található Andorra egyetlen állandó határátkelője Spanyolország felé.",
        "A Naturlandia állatparkjában a Pireneusok őshonos állatai láthatók természetes környezetükben.",
        "A közösség Festa Major ünnepe az egyik legnagyobb és legnépszerűbb az országban.",
        "A Juberri kortárs szoborkert egy meglepő és érdekes látnivaló."
      ],
      ro: [
        "Parohia se învecinează direct cu regiunea spaniolă Catalonia.",
        "Tobotronc are o lungime de 5,3 km și o diferență de nivel de 400 de metri.",
        "Biserica Sant Serni de Nagol din secolul al XI-lea este construită pe o stâncă.",
        "În parohie se reînvie producția de vin, cu mai multe crame de mare altitudine.",
        "Aici se află singurul punct permanent de trecere a frontierei Andorrei cu Spania.",
        "În parcul de animale Naturlandia pot fi văzute animale native din Pirinei."
        ],
      en: [
        "The parish directly borders the Spanish region of Catalonia.",
        "The Tobotronc has a length of 5.3 km and a vertical drop of 400 meters.",
        "The 11th-century church of Sant Serni de Nagol is built on a cliff.",
        "Wine production is being revived in the parish, with several high-altitude wineries operating here.",
        "Andorra's only permanent border crossing with Spain is located here.",
        "Native Pyrenean animals can be seen in their natural environment at the Naturlandia animal park.",
        "The parish's Festa Major celebration is one of the largest and most popular in the country.",
        "The Juberri contemporary sculpture garden is a surprising and interesting sight."
      ]
    }
  }
];

export const andorraAllPoi: POI[] = [
  andorraCountry,
  ...andorraCities,
  ...andorraLandmarks,
  ...andorraNature,
  ...andorraRegions,
  ...poiExtraAndorraCities,
  ...poiExtraAndorraOther
];

