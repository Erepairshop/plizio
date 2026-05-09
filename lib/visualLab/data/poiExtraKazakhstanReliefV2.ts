import type { POI } from "./poi";

export const poiExtraKazakhstanReliefV2: POI[] = [
  {
    id: "khan-tengri-relief-v2",
    type: "mountain",
    parent: "KZ-ALM",
    coords: [80.1744, 42.2133],
    name: { de: "Khan Tengri", hu: "Hantengri", ro: "Han Tengri", en: "Khan Tengri" },
    description: { de: "Der Khan Tengri ist einer der höchsten Gipfel des Tian Shan und der höchste Punkt Kasachstans.", hu: "A Hantengri a Tien-san egyik legmagasabb csúcsa, és Kazahsztán legmagasabb pontja.", ro: "Han Tengri este unul dintre cele mai înalte vârfuri din Tian Shan și cel mai înalt punct din Kazahstan.", en: "Khan Tengri is one of the highest peaks in the Tian Shan and the highest point in Kazakhstan." },
    facts: {
      de: ["Gipfelhöhe von 7010 Metern.", "Liegt an der Grenze zu Kirgisistan und China."],
      hu: ["A csúcs magassága 7010 méter.", "Kirgizisztán és Kína határán fekszik."],
      ro: ["Altitudinea vârfului este de 7010 metri.", "Situat la granița cu Kârgâzstan și China."],
      en: ["Peak elevation of 7010 meters.", "Located on the border with Kyrgyzstan and China."]
    }
  },
  {
    id: "belukha-mountain-relief-v2",
    type: "mountain",
    parent: "KZ-VOS",
    coords: [86.5911, 49.8077],
    name: { de: "Belucha", hu: "Beluha", ro: "Muntele Beluha", en: "Belukha Mountain" },
    description: { de: "Die Belucha ist der höchste Berg des Altai-Gebirges an der Grenze zwischen Kasachstan und Russland.", hu: "A Beluha az Altaj hegység legmagasabb hegye Kazahsztán és Oroszország határán.", ro: "Beluha este cel mai înalt munte din Munții Altai, la granița dintre Kazahstan și Rusia.", en: "Belukha is the highest peak of the Altai Mountains, on the border between Kazakhstan and Russia." },
    facts: {
      de: ["Erreicht eine Höhe von 4506 Metern.", "Ein bedeutender Gletscherberg."],
      hu: ["Magassága eléri a 4506 métert.", "Jelentős gleccserhegy."],
      ro: ["Atinge o altitudine de 4506 metri.", "Un munte glaciar important."],
      en: ["Reaches an elevation of 4506 meters.", "A significant glaciated mountain."]
    }
  },
  {
    id: "charyn-canyon-relief-v2",
    type: "valley",
    parent: "KZ-ALM",
    coords: [79.0833, 43.3500],
    name: { de: "Scharyn-Canyon", hu: "Sarin-kanyon", ro: "Canionul Charyn", en: "Charyn Canyon" },
    description: { de: "Der Scharyn-Canyon ist eine tiefe Schlucht am Scharyn-Fluss, oft als kleiner Bruder des Grand Canyon bezeichnet.", hu: "A Sarin-kanyon a Sarin-folyó mély szurdoka, amelyet gyakran a Grand Canyon kistestvérének neveznek.", ro: "Canionul Charyn este un defileu adânc pe râul Charyn, adesea numit fratele mai mic al Marelui Canion.", en: "Charyn Canyon is a deep gorge on the Charyn River, often referred to as the little brother of the Grand Canyon." },
    facts: {
      de: ["Etwa 90 Kilometer lang.", "Berühmt für das Tal der Schlösser."],
      hu: ["Körülbelül 90 kilométer hosszú.", "Híres a Kastélyok völgyéről."],
      ro: ["Aproximativ 90 de kilometri lungime.", "Faimos pentru Valea Castelelor."],
      en: ["About 90 kilometers long.", "Famous for the Valley of Castles."]
    }
  },
  {
    id: "ustyurt-plateau-relief-v2",
    type: "plateau",
    parent: "KZ-MAN",
    coords: [54.0000, 43.0000],
    name: { de: "Ustjurt-Plateau", hu: "Ustyurt-fennsík", ro: "Podișul Ustyurt", en: "Ustyurt Plateau" },
    description: { de: "Das Ustjurt-Plateau ist eine riesige, wüstenartige Hochebene zwischen dem Kaspischen Meer und dem Aralsee.", hu: "Az Ustyurt-fennsík egy hatalmas, sivatagos fennsík a Kaszpi-tenger és az Aral-tó között.", ro: "Podișul Ustyurt este un vast platou deșertic situat între Marea Caspică și Marea Aral.", en: "The Ustyurt Plateau is a vast, desert-like plateau located between the Caspian and Aral seas." },
    facts: {
      de: ["Umfasst etwa 200.000 Quadratkilometer.", "Bekannt für seine steilen Klippen (Chinks)."],
      hu: ["Mintegy 200 000 négyzetkilométer kiterjedésű.", "Híres meredek sziklafalairól."],
      ro: ["Acoperă aproximativ 200.000 de kilometri pătrați.", "Cunoscut pentru stâncile sale abrupte."],
      en: ["Covers about 200,000 square kilometers.", "Known for its steep cliffs (chinks)."]
    }
  },
  {
    id: "kyzylkum-desert-relief-v2",
    type: "desert",
    parent: "KZ-KZY",
    coords: [63.0000, 44.0000],
    name: { de: "Kysylkum", hu: "Kizil-kum", ro: "Deșertul Kyzylkum", en: "Kyzylkum Desert" },
    description: { de: "Die Kysylkum ist eine der größten Wüsten Zentralasiens und erstreckt sich über Kasachstan, Usbekistan und Turkmenistan.", hu: "A Kizil-kum Közép-Ázsia egyik legnagyobb sivataga, amely Kazahsztán, Üzbegisztán és Türkmenisztán területén fekszik.", ro: "Kyzylkum este unul dintre cele mai mari deșerturi din Asia Centrală, întinzându-se în Kazahstan, Uzbekistan și Turkmenistan.", en: "The Kyzylkum is one of the largest deserts in Central Asia, stretching across Kazakhstan, Uzbekistan, and Turkmenistan." },
    facts: {
      de: ["Der Name bedeutet Roter Sand.", "Eine kalte Wüste mit extremen Temperaturunterschieden."],
      hu: ["A neve azt jelenti: Vörös homok.", "Hideg sivatag szélsőséges hőmérséklet-ingadozásokkal."],
      ro: ["Numele înseamnă Nisipul Roșu.", "Un deșert rece cu variații extreme de temperatură."],
      en: ["The name means Red Sand.", "A cold desert with extreme temperature variations."]
    }
  },
  {
    id: "caspian-sea-coast-kz-relief-v2",
    type: "coast",
    parent: "KZ-MAN",
    coords: [51.5000, 44.5000],
    name: { de: "Küste des Kaspischen Meeres", hu: "Kaszpi-tenger partvidéke", ro: "Coasta Mării Caspice", en: "Caspian Sea Coast" },
    description: { de: "Die kasachische Küste des Kaspischen Meeres ist reich an Erdöl und bietet bedeutende Lebensräume für Wildtiere.", hu: "A Kaszpi-tenger kazahsztáni partvidéke kőolajban gazdag, és fontos élőhelyet biztosít a vadvilág számára.", ro: "Coasta kazahă a Mării Caspice este bogată în petrol și oferă habitate importante pentru fauna sălbatică.", en: "The Kazakh coast of the Caspian Sea is rich in oil and provides important habitats for wildlife." },
    facts: {
      de: ["Der größte See der Erde.", "Die Küstenlinie Kasachstans ist über 1800 km lang."],
      hu: ["A Föld legnagyobb tava.", "Kazahsztán partvonala több mint 1800 km hosszú."],
      ro: ["Cel mai mare lac de pe Pământ.", "Linia de coastă a Kazahstanului are peste 1800 km lungime."],
      en: ["The largest lake on Earth.", "Kazakhstan's coastline is over 1800 km long."]
    }
  },
  {
    id: "karagiye-depression-relief-v2",
    type: "valley",
    parent: "KZ-MAN",
    coords: [51.9333, 43.4000],
    name: { de: "Karagije-Senke", hu: "Karagije-mélyföld", ro: "Depresiunea Karagiye", en: "Karagiye Depression" },
    description: { de: "Die Karagije-Senke ist eine der tiefsten trockenen Senken der Welt und der tiefste Punkt Kasachstans.", hu: "A Karagije-mélyföld a világ egyik legmélyebb szárazföldi mélyedése, és Kazahsztán legmélyebb pontja.", ro: "Depresiunea Karagiye este una dintre cele mai adânci depresiuni uscate din lume și cel mai jos punct din Kazahstan.", en: "The Karagiye Depression is one of the deepest dry depressions in the world and the lowest point in Kazakhstan." },
    facts: {
      de: ["Liegt 132 Meter unter dem Meeresspiegel.", "Befindet sich auf der Mangyschlack-Halbinsel."],
      hu: ["132 méterrel a tengerszint alatt fekszik.", "A Mangislak-félszigeten található."],
      ro: ["Se află la 132 de metri sub nivelul mării.", "Situată pe Peninsula Mangyshlak."],
      en: ["Lies 132 meters below sea level.", "Located on the Mangyshlak Peninsula."]
    }
  },
  {
    id: "betpak-dala-relief-v2",
    type: "desert",
    parent: "KZ-KAR",
    coords: [70.0000, 46.0000],
    name: { de: "Betpak-Dala", hu: "Betpak-Dala", ro: "Betpak-Dala", en: "Betpak-Dala" },
    description: { de: "Die Betpak-Dala ist eine flache, halbwüstenartige Region in Zentral-Kasachstan, bekannt als die Hungersteppe.", hu: "A Betpak-Dala egy sík, félsivatagos régió Közép-Kazahsztánban, amelyet Éhség-sztyeppének is neveznek.", ro: "Betpak-Dala este o regiune plată, semideșertică din centrul Kazahstanului, cunoscută sub numele de Stepa Foamei.", en: "Betpak-Dala is a flat, semi-desert region in central Kazakhstan, known as the Hunger Steppe." },
    facts: {
      de: ["Fläche von etwa 75.000 Quadratkilometern.", "Heimat der stark bedrohten Saiga-Antilopen."],
      hu: ["Területe mintegy 75 000 négyzetkilométer.", "A súlyosan veszélyeztetett szajga antilopok otthona."],
      ro: ["Suprafață de aproximativ 75.000 de kilometri pătrați.", "Căminul antilopelor saiga, grav amenințate."],
      en: ["Area of about 75,000 square kilometers.", "Home to the critically endangered saiga antelopes."]
    }
  },
  {
    id: "zailiysky-alatau-relief-v2",
    type: "mountain",
    parent: "KZ-ALM",
    coords: [77.0000, 43.1000],
    name: { de: "Transili-Alatau", hu: "Zailijszkij Alatau", ro: "Zailiysky Alatau", en: "Trans-Ili Alatau" },
    description: { de: "Der Transili-Alatau ist ein Gebirgszug im nördlichen Tian Shan, der sich südlich der Stadt Almaty erhebt.", hu: "A Zailijszkij Alatau az északi Tien-san hegylánca, amely Almati városától délre emelkedik.", ro: "Zailiysky Alatau este un lanț muntos din nordul Tian Shan, situat la sud de orașul Almatî.", en: "The Trans-Ili Alatau is a mountain range in the northern Tian Shan, rising south of the city of Almaty." },
    facts: {
      de: ["Der Pik Talgar ist mit 4979 Metern der höchste Gipfel.", "Ein beliebtes Gebiet für Wintersport."],
      hu: ["Legmagasabb csúcsa a 4979 méteres Talgar-csúcs.", "Népszerű téli sportközpont."],
      ro: ["Pik Talgar este cel mai înalt vârf, având 4979 metri.", "O zonă populară pentru sporturile de iarnă."],
      en: ["Pik Talgar is the highest peak at 4979 meters.", "A popular area for winter sports."]
    }
  },
  {
    id: "muyunkum-desert-relief-v2",
    type: "desert",
    parent: "KZ-ZHA",
    coords: [71.0000, 44.0000],
    name: { de: "Mujunkum-Wüste", hu: "Mujunkum", ro: "Deșertul Muyunkum", en: "Muyunkum Desert" },
    description: { de: "Die Mujunkum ist eine Sandwüste im Süden Kasachstans, die durch extreme Temperaturen gekennzeichnet ist.", hu: "A Mujunkum egy homoksivatag Dél-Kazahsztánban, amelyet szélsőséges hőmérséklet jellemez.", ro: "Muyunkum este un deșert de nisip în sudul Kazahstanului, caracterizat de temperaturi extreme.", en: "Muyunkum is a sand desert in southern Kazakhstan characterized by extreme temperatures." },
    facts: {
      de: ["Begrenzt durch den Fluss Tschüi im Norden.", "Beherbergt angepasste Wüstenflora und -fauna."],
      hu: ["Északon a Csu folyó határolja.", "Alkalmazkodott sivatagi növény- és állatvilágnak ad otthont."],
      ro: ["Mărginit de râul Chu la nord.", "Găzduiește floră și faună adaptate la deșert."],
      en: ["Bounded by the Chu River to the north.", "Hosts adapted desert flora and fauna."]
    }
  },
  {
    id: "saryarka-steppe-relief-v2",
    type: "plateau",
    parent: "KZ-KAR",
    coords: [71.0000, 48.0000],
    name: { de: "Saryarka", hu: "Szariarka", ro: "Saryarka", en: "Saryarka" },
    description: { de: "Saryarka, auch als Kasachische Schwelle bekannt, ist ein großes, sanft gewelltes Hochland in Zentral-Kasachstan.", hu: "A Szariarka, más néven Kazah-hátság egy hatalmas, enyhén hullámzó fennsík Közép-Kazahsztánban.", ro: "Saryarka, cunoscută și sub numele de Înălțimile kazahe, este o zonă de podiș vastă și ușor ondulată din centrul Kazahstanului.", en: "Saryarka, also known as the Kazakh Uplands, is a large, gently rolling highland in central Kazakhstan." },
    facts: {
      de: ["Teil des UNESCO-Weltnaturerbes.", "Reich an Mineralien und Bodenschätzen."],
      hu: ["Az UNESCO Világörökség része.", "Gazdag ásványi anyagokban és kincsekben."],
      ro: ["Face parte din Patrimoniul Mondial UNESCO.", "Bogată în minerale și resurse naturale."],
      en: ["Part of the UNESCO World Heritage Site.", "Rich in minerals and natural resources."]
    }
  },
  {
    id: "mangyshlak-peninsula-relief-v2",
    type: "plateau",
    parent: "KZ-MAN",
    coords: [52.0000, 44.0000],
    name: { de: "Mangyschlack", hu: "Mangislak-félsziget", ro: "Peninsula Mangyshlak", en: "Mangyshlak Peninsula" },
    description: { de: "Die Halbinsel Mangyschlack ist ein raues Plateau am Kaspischen Meer mit einzigartigen geologischen Formationen.", hu: "A Mangislak-félsziget egy zord fennsík a Kaszpi-tengernél, egyedi geológiai képződményekkel.", ro: "Peninsula Mangyshlak este un platou accidentat la Marea Caspică, cu formațiuni geologice unice.", en: "The Mangyshlak Peninsula is a rugged plateau by the Caspian Sea with unique geological formations." },
    facts: {
      de: ["Reich an Erdöl- und Erdgasvorkommen.", "Bekannt für seine wüstenartigen Landschaften."],
      hu: ["Gazdag kőolaj- és földgázkészletekben.", "Sivatagos tájairól ismert."],
      ro: ["Bogată în zăcăminte de petrol și gaze naturale.", "Cunoscută pentru peisajele sale deșertice."],
      en: ["Rich in oil and natural gas reserves.", "Known for its desert-like landscapes."]
    }
  },
  {
    id: "turgay-trough-relief-v2",
    type: "valley",
    parent: "KZ-KUS",
    coords: [64.0000, 49.0000],
    name: { de: "Turgai-Senke", hu: "Turgaj-völgy", ro: "Depresiunea Turgai", en: "Turgay Trough" },
    description: { de: "Die Turgai-Senke ist ein breites Tal in Kasachstan, das das Westsibirische Tiefland mit der Aral-Senke verbindet.", hu: "A Turgaj-völgy egy széles völgy Kazahsztánban, amely összeköti a Nyugat-szibériai-alföldet az Aral-medencével.", ro: "Depresiunea Turgai este o vale largă din Kazahstan, care leagă Câmpia Siberiei de Vest de Depresiunea Aral.", en: "The Turgay Trough is a broad valley in Kazakhstan connecting the West Siberian Plain with the Aral depression." },
    facts: {
      de: ["Wichtiger Migrationskorridor für Vögel.", "Durchflossen vom Fluss Turgai."],
      hu: ["Fontos madárvonulási folyosó.", "A Turgaj folyó folyik rajta keresztül."],
      ro: ["Coridor important de migrație pentru păsări.", "Traversată de râul Turgai."],
      en: ["Important migration corridor for birds.", "Flowed through by the Turgay River."]
    }
  },
  {
    id: "aral-sea-coast-kz-relief-v2",
    type: "coast",
    parent: "KZ-KZY",
    coords: [60.0000, 45.5000],
    name: { de: "Küste des Aralsees", hu: "Aral-tó partvidéke", ro: "Coasta Mării Aral", en: "Aral Sea Coast" },
    description: { de: "Die Küste des Aralsees in Kasachstan zeugt von einer der größten Umweltkatastrophen, aber auch von Bemühungen zur Wiederherstellung des nördlichen Teils.", hu: "Az Aral-tó kazahsztáni partvidéke az egyik legnagyobb környezeti katasztrófáról, de az északi rész helyreállítására tett erőfeszítésekről is tanúskodik.", ro: "Coasta Mării Aral din Kazahstan mărturisește una dintre cele mai mari catastrofe ecologice, dar și eforturile de refacere a părții nordice.", en: "The Aral Sea coast in Kazakhstan bears witness to one of the greatest environmental disasters, but also to efforts to restore the northern part." },
    facts: {
      de: ["Der Nördliche Aralsee stabilisiert sich langsam wieder.", "Ehemals einer der vier größten Seen der Welt."],
      hu: ["Az Északi-Aral-tó lassan újra stabilizálódik.", "Egykor a világ négy legnagyobb tavának egyike volt."],
      ro: ["Marea Aral de Nord se stabilizează încet.", "Fostul unul dintre cele mai mari patru lacuri din lume."],
      en: ["The North Aral Sea is slowly stabilizing.", "Formerly one of the four largest lakes in the world."]
    }
  },
  {
    id: "dzungarian-alatau-relief-v2",
    type: "mountain",
    parent: "KZ-JET",
    coords: [80.0000, 45.0000],
    name: { de: "Dsungarischer Alatau", hu: "Dzsungár-Alatau", ro: "Dzungarian Alatau", en: "Dzungarian Alatau" },
    description: { de: "Der Dsungarische Alatau ist ein Gebirgssystem an der Grenze zwischen Kasachstan und China, bekannt für seine vielfältige Flora.", hu: "A Dzsungár-Alatau egy hegységrendszer Kazahsztán és Kína határán, amely változatos növényvilágáról ismert.", ro: "Dzungarian Alatau este un sistem muntos la granița dintre Kazahstan și China, cunoscut pentru flora sa diversă.", en: "The Dzungarian Alatau is a mountain system on the border between Kazakhstan and China, known for its diverse flora." },
    facts: {
      de: ["Höchster Punkt ist der Pik Semjonow-Tjan-Schanski.", "Ein wichtiger Lebensraum für den Schneeleoparden."],
      hu: ["Legmagasabb pontja a Szemjonov-Tyan-Sanszkij-csúcs.", "A hópárduc fontos élőhelye."],
      ro: ["Cel mai înalt punct este Vârful Semyonov-Tian-Shansky.", "Un habitat important pentru leopardul de zăpadă."],
      en: ["Highest point is Pik Semyonov-Tian-Shansky.", "An important habitat for the snow leopard."]
    }
  },
  {
    id: "karkaraly-mountains-relief-v2",
    type: "mountain",
    parent: "KZ-KAR",
    coords: [75.4000, 49.4000],
    name: { de: "Karkaraly-Gebirge", hu: "Karkarali-hegység", ro: "Munții Karkaraly", en: "Karkaraly Mountains" },
    description: { de: "Das Karkaraly-Gebirge ist ein dicht bewaldetes Bergmassiv inmitten der kasachischen Steppe.", hu: "A Karkarali-hegység egy sűrű erdővel borított hegytömb a kazah sztyeppe közepén.", ro: "Munții Karkaraly reprezintă un masiv muntos dens împădurit în mijlocul stepei kazahe.", en: "The Karkaraly Mountains are a densely forested mountain massif in the middle of the Kazakh steppe." },
    facts: {
      de: ["Teil des Karkaraly-Nationalparks.", "Berühmt für malerische Seen und Kiefernwälder."],
      hu: ["A Karkarali Nemzeti Park része.", "Festői tavairól és fenyőerdeiről híres."],
      ro: ["Parte a Parcului Național Karkaraly.", "Faimoși pentru lacurile pitorești și pădurile de pini."],
      en: ["Part of the Karkaraly National Park.", "Famous for picturesque lakes and pine forests."]
    }
  },
  {
    id: "tarbagatai-mountains-relief-v2",
    type: "mountain",
    parent: "KZ-VOS",
    coords: [82.0000, 47.0000],
    name: { de: "Tarbagatai-Gebirge", hu: "Tarbagataj-hegység", ro: "Munții Tarbagatai", en: "Tarbagatai Mountains" },
    description: { de: "Das Tarbagatai-Gebirge ist ein Gebirgszug, der die Grenze zwischen Kasachstan und der chinesischen Region Xinjiang bildet.", hu: "A Tarbagataj-hegység Kazahsztán és a kínai Hszincsiang régió határát képező hegylánc.", ro: "Munții Tarbagatai sunt un lanț muntos care formează granița dintre Kazahstan și regiunea chineză Xinjiang.", en: "The Tarbagatai Mountains are a mountain range forming the border between Kazakhstan and China's Xinjiang region." },
    facts: {
      de: ["Der Name bedeutet Ort der Murmeltiere.", "Höchster Berg ist der Tastau mit fast 3000 Metern."],
      hu: ["A név jelentése: Mormoták helye.", "Legmagasabb hegye a közel 3000 méteres Tasztau."],
      ro: ["Numele înseamnă Locul marmotelor.", "Cel mai înalt munte este Tastau, cu aproape 3000 de metri."],
      en: ["The name means Place of marmots.", "Highest mountain is Tastau at nearly 3000 meters."]
    }
  },
  {
    id: "aralkum-desert-relief-v2",
    type: "desert",
    parent: "KZ-KZY",
    coords: [60.0000, 44.5000],
    name: { de: "Aralkum", hu: "Aralkum", ro: "Deșertul Aralkum", en: "Aralkum Desert" },
    description: { de: "Die Aralkum ist eine neue Wüste, die auf dem ausgetrockneten Grund des ehemaligen Aralsees entstanden ist.", hu: "Az Aralkum egy új sivatag, amely az egykori Aral-tó kiszáradt medrében jött létre.", ro: "Aralkum este un deșert nou format pe fundul secat al fostei Mări Aral.", en: "The Aralkum is a new desert that has formed on the dried-up seabed of the former Aral Sea." },
    facts: {
      de: ["Entstand in der zweiten Hälfte des 20. Jahrhunderts.", "Bedeckt eine Fläche von über 60.000 Quadratkilometern."],
      hu: ["A 20. század második felében alakult ki.", "Több mint 60 000 négyzetkilométeres területet borít."],
      ro: ["S-a format în a doua jumătate a secolului al XX-lea.", "Acoperă o suprafață de peste 60.000 de kilometri pătrați."],
      en: ["Formed in the second half of the 20th century.", "Covers an area of over 60,000 square kilometers."]
    }
  },
  {
    id: "altai-mountains-kz-relief-v2",
    type: "mountain",
    parent: "KZ-VOS",
    coords: [85.0000, 49.0000],
    name: { de: "Altai-Gebirge", hu: "Altaj hegység", ro: "Munții Altai", en: "Altai Mountains" },
    description: { de: "Der kasachische Teil des Altai-Gebirges ist bekannt für seine unberührten Landschaften und reiche Biodiversität.", hu: "Az Altaj hegység kazahsztáni része érintetlen tájairól és gazdag biológiai sokféleségéről ismert.", ro: "Partea kazahă a Munților Altai este cunoscută pentru peisajele sale virgine și biodiversitatea bogată.", en: "The Kazakh part of the Altai Mountains is known for its pristine landscapes and rich biodiversity." },
    facts: {
      de: ["Weltnaturerbe der UNESCO.", "Heimat zahlreicher seltener Tierarten."],
      hu: ["Az UNESCO Világörökség része.", "Számos ritka állatfaj otthona."],
      ro: ["Patrimoniu Mondial UNESCO.", "Căminul a numeroase specii de animale rare."],
      en: ["UNESCO World Heritage Site.", "Home to numerous rare animal species."]
    }
  },
  {
    id: "ili-valley-relief-v2",
    type: "valley",
    parent: "KZ-ALM",
    coords: [78.0000, 44.0000],
    name: { de: "Ili-Tal", hu: "Ili-völgy", ro: "Valea Ili", en: "Ili Valley" },
    description: { de: "Das Ili-Tal ist eine fruchtbare Region entlang des Ili-Flusses, die historisch eine wichtige Rolle auf der Seidenstraße spielte.", hu: "Az Ili-völgy egy termékeny régió az Ili folyó mentén, amely történelmileg fontos szerepet játszott a Selyemúton.", ro: "Valea Ili este o regiune fertilă de-a lungul râului Ili, care a jucat un rol istoric important pe Drumul Mătăsii.", en: "The Ili Valley is a fertile region along the Ili River that played an historically important role on the Silk Road." },
    facts: {
      de: ["Ein wichtiges landwirtschaftliches Zentrum.", "Verfügt über antike Felszeichnungen und Denkmäler."],
      hu: ["Fontos mezőgazdasági központ.", "Ősi sziklarajzokkal és műemlékekkel rendelkezik."],
      ro: ["Un important centru agricol.", "Prezintă petroglife și monumente antice."],
      en: ["An important agricultural center.", "Features ancient petroglyphs and monuments."]
    }
  }
];
