import type { POI } from "./poi";

const estoniaAllPoiBase: POI[] = [
  {
    id: "ee-country",
    type: "country",
    coords: [24.7536, 59.4370],
    name: {
      de: "Estland",
      hu: "Észtország",
      ro: "Estonia",
      en: "Estonia"
    },
    description: {
      de: "Estland ist der nördlichste der baltischen Staaten, bekannt für seine fortschrittliche digitale Gesellschaft, unberührte Natur und die mittelalterliche Hauptstadt Tallinn.",
      hu: "Észtország a balti államok legészakibbika, amely fejlett digitális társadalmáról, érintetlen természetéről és középkori fővárosáról, Tallinnról ismert.",
      ro: "Estonia este cel mai nordic dintre statele baltice, cunoscut pentru societatea sa digitală avansată, natura virgină și capitala medievală Tallinn.",
      en: "Estonia is the northernmost of the Baltic states, known for its advanced digital society, untouched nature, and medieval capital Tallinn."
    },
    descriptionAdvanced: {
      de: "Estland, offiziell die Republik Estland, ist ein faszinierendes Land im Nordosten Europas, das als nördlichster der drei baltischen Staaten eine einzigartige Brücke zwischen Skandinavien und Osteuropa schlägt. Das Land grenzt im Norden an den Finnischen Meerbusen, im Westen an die Ostsee, im Süden an Lettland und im Osten an Russland. Estland ist weltberühmt für seine Vorreiterrolle in der Digitalisierung; als 'e-Estonia' hat es eine der fortschrittlichsten digitalen Gesellschaften der Welt aufgebaut, in der fast alle Behördengänge online erledigt werden können. Die Hauptstadt Tallinn besticht durch eine der am besten erhaltenen mittelalterlichen Altstädte Europas, die zum UNESCO-Welterbe gehört und in der Kopfsteinpflastergassen auf moderne Start-up-Kultur treffen. Doch Estland ist weit mehr als nur Technologie. Über 50 % der Landesfläche sind von dichten Wäldern bedeckt, und das Land beherbergt über 2.000 Inseln sowie unzählige Moore und Seen, die eine Oase der Ruhe und unberührten Natur bieten. Die estnische Kultur ist tief in der Folklore und dem Gesang verwurzelt, was sich im beeindruckenden Sängerfest widerspiegelt, das alle fünf Jahre Zehntausende von Menschen zusammenbringt. Kulinarisch bietet Estland eine Mischung aus nordischen Einflüssen und traditionellen baltischen Gerichten, wobei Wert auf lokale und saisonale Zutaten gelegt wird. Heute präsentiert sich Estland als moderne, dynamische Nation mit einer starken Wirtschaft und einem hohen Bildungsniveau, die stolz auf ihr Erbe ist und gleichzeitig die Zukunft der digitalen Welt mitgestaltet. Ob man durch die historischen Gassen von Tallinn schlendert, die Stille in den Nationalparks wie Lahemaa genießt oder die lebendige Universitätsstadt Tartu erkundet – Estland empfängt seine Besucher mit einer Mischung aus nordischer Klarheit, technologischer Innovation und herzlicher Gastfreundschaft.",
      hu: "Észtország, hivatalos nevén az Észt Köztársaság, egy lenyűgöző ország Északkelet-Európában, amely a három balti állam legészakibbika, és egyedülálló hidat képez Skandinávia és Kelet-Európa között. Az ország északon a Finn-öböllel, nyugaton a Balti-tengerrel, délen Lettországgal, keleten pedig Oroszországgal határos. Észtország világhírű a digitalizációban betöltött úttörő szerepéről; 'e-Estonia' néven a világ egyik legfejlettebb digitális társadalmát építette ki, ahol szinte minden közigazgatási ügy online intézhető. A főváros, Tallinn, Európa egyik legjobban megőrzött középkori óvárosával büszkélkedhet, amely az UNESCO Világörökség része, és ahol a macskaköves utcák modern start-up kultúrával találkoznak. Észtország azonban sokkal több, mint technológia. Az ország területének több mint 50%-át sűrű erdők borítják, és több mint 2000 sziget, valamint számtalan mocsár és tó található itt, amelyek a nyugalom és az érintetlen természet oázisát kínálják. Az észt kultúra mélyen gyökerezik a folklórban és az éneklésben, ami a lenyűgöző Dalünnepen mutatkozik meg, amely ötévente több tízezer embert hoz össze. Kulináris szempontból Észtország az északi hatások és a hagyományos balti ételek keverékét kínálja, hangsúlyt fektetve a helyi és szezonális alapanyagokra. Ma Észtország modern, dinamikus nemzet, erős gazdasággal és magas oktatási színvonallal, amely büszke örökségére, miközben aktívan alakítja a digitális világ jövőjét. Akár Tallinn történelmi utcáin sétál valaki, akár a Lahemaa Nemzeti Park csendjét élvezi, vagy a vibráló egyetemi várost, Tartut fedezi fel – Észtország az északi tisztaság, a technológiai innováció és a szívélyes vendégszeretet keverékével fogadja látogatóit.",
      ro: "Estonia, oficial Republica Estonia, este o țară fascinantă situată în nord-estul Europei, care, fiind cea mai nordică dintre cele trei state baltice, reprezintă o punte unică între Scandinavia și Europa de Est. Țara se învecinează la nord cu Golful Finlandei, la vest cu Marea Baltică, la sud cu Letonia și la est cu Rusia. Estonia este renumită în întreaga lume pentru rolul său de pionier în digitalizare; sub numele de „e-Estonia”, a construit una dintre cele mai avansate societăți digitale din lume, unde aproape toate procedurile administrative pot fi efectuate online. Capitala Tallinn impresionează prin unul dintre cele mai bine conservate centre vechi medievale din Europa, inclus în Patrimoniul Mondial UNESCO, unde străzile pietruite se întâlnesc cu cultura modernă a start-up-urilor. Totuși, Estonia este mult mai mult decât tehnologie. Peste 50% din suprafața țării este acoperită de păduri dese, iar țara găzduiește peste 2.000 de insule, precum și nenumărate mlaștini și lacuri care oferă o oază de liniște și natură virgină. Cultura estonă este profund înrădăcinată în folclor și cântec, fapt reflectat în impresionantul Festival al Cântecului, care reunește zeci de mii de oameni la fiecare cinci ani. Din punct de vedere culinar, Estonia oferă un amestec de influențe nordice și mâncăruri tradiționale baltice, punând accent pe ingrediente locale și sezoniere. Astăzi, Estonia se prezintă ca o națiune modernă și dinamică, cu o economie puternică și un nivel ridicat de educație, fiind mândră de moștenirea sa și contribuind în același timp la modelarea viitorului lumii digitale. Fie că vă plimbați pe străzile istorice din Tallinn, vă bucurați de liniștea din parcurile naționale precum Lahemaa sau explorați orașul universitar vibrant Tartu – Estonia își întâmpină vizitatorii cu un amestec de claritate nordică, inovație tehnologică și ospitalitate caldă.",
      en: "Estonia, officially the Republic of Estonia, is a fascinating country in Northeastern Europe that, as the northernmost of the three Baltic states, serves as a unique bridge between Scandinavia and Eastern Europe. The country borders the Gulf of Finland to the north, the Baltic Sea to the west, Latvia to the south, and Russia to the east. Estonia is world-renowned for its pioneering role in digitalization; as 'e-Estonia,' it has built one of the most advanced digital societies in the world, where almost all government services can be accessed online. The capital, Tallinn, boasts one of the best-preserved medieval old towns in Europe, a UNESCO World Heritage site where cobblestone streets meet modern startup culture. However, Estonia is much more than just technology. Over 50% of the country's land area is covered by dense forests, and the nation is home to over 2,000 islands as well as countless bogs and lakes that offer an oasis of peace and untouched nature. Estonian culture is deeply rooted in folklore and song, reflected in the impressive Song Festival that brings together tens of thousands of people every five years. Culinarily, Estonia offers a blend of Nordic influences and traditional Baltic dishes, with an emphasis on local and seasonal ingredients. Today, Estonia presents itself as a modern, dynamic nation with a strong economy and a high level of education, proud of its heritage while simultaneously helping to shape the future of the digital world. Whether strolling through the historic streets of Tallinn, enjoying the silence in national parks like Lahemaa, or exploring the vibrant university city of Tartu—Estonia welcomes its visitors with a blend of Nordic clarity, technological innovation, and warm hospitality."
    },
    facts: {
      de: [
        "Hauptstadt: Tallinn",
        "Währung: Euro",
        "Bevölkerung: ca. 1,3 Millionen",
        "Digitalisierung: Estland gilt als eine der fortschrittlichsten digitalen Gesellschaften weltweit ('e-Estonia').",
        "Natur: Über 50 % der Landesfläche sind von Wäldern bedeckt.",
        "Inseln: Estland hat über 2.000 Inseln in der Ostsee.",
        "Bildung: Das Land hat eine der höchsten Alphabetisierungsraten der Welt (99,8 %).",
        "Innovation: Skype wurde 2003 von estnischen Entwicklern mitbegründet.",
        "Wirtschaft: Estland hat die höchste Anzahl an Start-ups pro Kopf in Europa.",
        "Sprache: Estnisch ist eng mit dem Finnischen und entfernt mit dem Ungarischen verwandt."
      ],
      hu: [
        "Főváros: Tallinn",
        "Pénznem: Euró",
        "Népesség: kb. 1,3 millió",
        "Digitalizáció: Észtország a világ egyik legfejlettebb digitális társadalma ('e-Estonia').",
        "Természet: Az ország területének több mint 50%-át erdők borítják.",
        "Szigetek: Észtországnak több mint 2000 szigete van a Balti-tengeren.",
        "Oktatás: Az országban a világ egyik legmagasabb az írástudók aránya (99,8%).",
        "Innováció: A Skype-ot 2003-ban észt fejlesztők közreműködésével hozták létre.",
        "Gazdaság: Észtországban a legmagasabb az egy főre jutó start-upok száma Európában.",
        "Nyelv: Az észt nyelv közeli rokona a finnek, és távoli rokona a magyarnak."
      ],
      ro: [
        "Capitala: Tallinn",
        "Moneda: Euro",
        "Populație: aprox. 1,3 milioane",
        "Digitalizare: Estonia este considerată una dintre cele mai avansate societăți digitale din lume („e-Estonia”).",
        "Natură: Peste 50% din suprafața țării este acoperită de păduri.",
        "Insule: Estonia are peste 2.000 de insule în Marea Baltică.",
        "Educație: Țara are una dintre cele mai ridicate rate de alfabetizare din lume (99,8%).",
        "Inovație: Skype a fost co-fondat de dezvoltatori estonieni în 2003.",
        "Economie: Estonia are cel mai mare număr de start-up-uri pe cap de locuitor din Europa.",
        "Limbă: Limba estonă este strâns înrudită cu finlandeza și înrudită îndepărtat cu maghiara."
      ],
      en: [
        "Capital: Tallinn",
        "Currency: Euro",
        "Population: approx. 1.3 million",
        "Digitalization: Estonia is considered one of the most advanced digital societies in the world ('e-Estonia').",
        "Nature: Over 50% of the country's land area is covered by forests.",
        "Islands: Estonia has over 2,000 islands in the Baltic Sea.",
        "Education: The country has one of the highest literacy rates in the world (99.8%).",
        "Innovation: Skype was co-founded by Estonian developers in 2003.",
        "Economy: Estonia has the highest number of startups per capita in Europe.",
        "Language: Estonian is closely related to Finnish and distantly to Hungarian."
      ]
    },
    image: "/images/visualLab/estonia/country.jpg"
  },
  {
    id: "ee-tallinn",
    type: "city",
    parent: "ee-country",
    coords: [24.7536, 59.4370],
    name: {
      de: "Tallinn",
      hu: "Tallinn",
      ro: "Tallinn",
      en: "Tallinn"
    },
    description: {
      de: "Tallinn ist die Hauptstadt Estlands, berühmt für ihre außergewöhnlich gut erhaltene mittelalterliche Altstadt, die zum UNESCO-Welterbe gehört.",
      hu: "Tallinn Észtország fővárosa, amely kivételesen jól megőrzött, UNESCO világörökségi középkori óvárosáról híres.",
      ro: "Tallinn este capitala Estoniei, faimoasă pentru orașul său vechi medieval excepțional de bine conservat, inclus în Patrimoniul Mondial UNESCO.",
      en: "Tallinn is the capital of Estonia, famous for its exceptionally well-preserved medieval old town, a UNESCO World Heritage site."
    },
    descriptionAdvanced: {
      de: "Die Hauptstadt Estlands, berühmt für ihre außergewöhnlich gut erhaltene mittelalterliche Altstadt.",
      hu: "Észtország fővárosa, amely kivételesen jól megőrzött középkori óvárosáról híres.",
      ro: "Capitala Estoniei, faimoasă pentru orașul său vechi medieval excepțional de bine conservat.",
      en: "The capital of Estonia, famous for its exceptionally well-preserved medieval old town."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Ehemalige Hansestadt"],
      hu: ["UNESCO világörökség", "Egykori Hanza-város"],
      ro: ["Patrimoniul Mondial UNESCO", "Fost oraș hanseatic"],
      en: ["UNESCO World Heritage site", "Former Hanseatic city"]
    },
    image: "/images/visualLab/estonia/tallinn.jpg"
  },
  {
    id: "ee-tartu",
    type: "city",
    parent: "ee-country",
    coords: [26.7290, 58.3780],
    name: {
      de: "Tartu",
      hu: "Tartu",
      ro: "Tartu",
      en: "Tartu"
    },
    description: {
      de: "Die zweitgrößte Stadt Estlands und das intellektuelle Zentrum des Landes mit der ältesten Universität.",
      hu: "Észtország második legnagyobb városa és az ország szellemi központja a legrégebbi egyetemmel.",
      ro: "Al doilea oraș ca mărime din Estonia și centrul intelectual al țării, cu cea mai veche universitate.",
      en: "The second-largest city in Estonia and the intellectual center of the country with the oldest university."
    },
    facts: {
      de: ["Universität Tartu (gegr. 1632)", "Kulturhauptstadt Europas 2024"],
      hu: ["Tartui Egyetem (alapítva 1632)", "Európa Kulturális Fővárosa 2024"],
      ro: ["Universitatea din Tartu (fondată 1632)", "Capitala Europeană a Culturii 2024"],
      en: ["University of Tartu (est. 1632)", "European Capital of Culture 2024"]
    },
    image: "/images/visualLab/estonia/tartu.jpg"
  },
  {
    id: "ee-parnu",
    type: "city",
    parent: "ee-country",
    coords: [24.4971, 58.3859],
    name: {
      de: "Pärnu",
      hu: "Pärnu",
      ro: "Pärnu",
      en: "Pärnu"
    },
    description: {
      de: "Die 'Sommerhauptstadt' Estlands, ein beliebter Kurort mit langen Sandstränden.",
      hu: "Észtország 'nyári fővárosa', népszerű gyógyüdülőhely hosszú homokos strandokkal.",
      ro: "'Capitala de vară' a Estoniei, o stațiune balneară populară cu plaje lungi de nisip.",
      en: "The 'summer capital' of Estonia, a popular spa resort with long sandy beaches."
    },
    facts: {
      de: ["Historische Schlammbäder", "Lange Sandstrände"],
      hu: ["Történelmi iszapfürdők", "Hosszú homokos strandok"],
      ro: ["Băi de nămol istorice", "Plaje lungi de nisip"],
      en: ["Historic mud baths", "Long sandy beaches"]
    },
    image: "/images/visualLab/estonia/parnu.jpg"
  },
  {
    id: "ee-saaremaa",
    type: "landmark",
    parent: "ee-country",
    coords: [22.5000, 58.4000],
    name: {
      de: "Saaremaa",
      hu: "Saaremaa",
      ro: "Saaremaa",
      en: "Saaremaa"
    },
    description: {
      de: "Die größte Insel Estlands, bekannt für ihre Windmühlen, Meteoritenkrater und die Burg Kuressaare.",
      hu: "Észtország legnagyobb szigete, amely szélmalmairól, meteoritkrátereiről és a Kuressaare várról ismert.",
      ro: "Cea mai mare insulă a Estoniei, cunoscută pentru morile sale de vânt, craterele de meteoriți și Castelul Kuressaare.",
      en: "The largest island in Estonia, known for its windmills, meteorite craters, and Kuressaare Castle."
    },
    facts: {
      de: ["Kaali-Meteoritenkrater", "Bischofsburg Kuressaare"],
      hu: ["Kaali meteoritkráter", "Kuressaare püspöki vár"],
      ro: ["Craterul de meteorit Kaali", "Castelul episcopal Kuressaare"],
      en: ["Kaali meteorite crater", "Kuressaare Episcopal Castle"]
    },
    image: "/images/visualLab/estonia/saaremaa.jpg"
  },
  {
    id: "ee-lahemaa",
    type: "landmark",
    parent: "ee-country",
    coords: [25.8333, 59.5667],
    name: {
      de: "Lahemaa-Nationalpark",
      hu: "Lahemaa Nemzeti Park",
      ro: "Parcul Național Lahemaa",
      en: "Lahemaa National Park"
    },
    description: {
      de: "Der älteste und größte Nationalpark Estlands, der Küstenlandschaften, Moore und historische Gutshöfe schützt.",
      hu: "Észtország legrégebbi és legnagyobb nemzeti parkja, amely part menti tájakat, mocsarakat és történelmi udvarházakat véd.",
      ro: "Cel mai vechi și cel mai mare parc național din Estonia, protejând peisaje de coastă, mlaștini și conace istorice.",
      en: "The oldest and largest national park in Estonia, protecting coastal landscapes, bogs, and historic manors."
    },
    facts: {
      de: ["Gegründet 1971", "Viru-Moor"],
      hu: ["1971-ben alapították", "Viru-mocsár"],
      ro: ["Înființat în 1971", "Mlaștina Viru"],
      en: ["Established in 1971", "Viru Bog"]
    },
    image: "/images/visualLab/estonia/lahemaa.jpg"
  },
  {
    id: "ee-narva",
    type: "city",
    parent: "ee-country",
    coords: [28.1833, 59.3833],
    name: {
      de: "Narva",
      hu: "Narva",
      ro: "Narva",
      en: "Narva"
    },
    description: {
      de: "Die östlichste Stadt Estlands an der Grenze zu Russland, dominiert von der mächtigen Hermannsburg.",
      hu: "Észtország legkeletibb városa az orosz határon, amelyet a hatalmas Hermann-vár ural.",
      ro: "Cel mai estic oraș din Estonia, la granița cu Rusia, dominat de puternicul Castel Hermann.",
      en: "The easternmost city in Estonia on the border with Russia, dominated by the mighty Hermann Castle."
    },
    facts: {
      de: ["Hermannsburg", "Grenzstadt zu Russland"],
      hu: ["Hermann-vár", "Határváros Oroszországgal"],
      ro: ["Castelul Hermann", "Oraș de graniță cu Rusia"],
      en: ["Hermann Castle", "Border city with Russia"]
    },
    image: "/images/visualLab/estonia/narva.jpg"
  },
  {
    id: "ee-haapsalu",
    type: "city",
    parent: "ee-country",
    coords: [23.5333, 58.9333],
    name: {
      de: "Haapsalu",
      hu: "Haapsalu",
      ro: "Haapsalu",
      en: "Haapsalu"
    },
    description: {
      de: "Eine historische Kurstadt an der Westküste, bekannt für ihre Bischofsburg und die hölzerne Promenade.",
      hu: "Történelmi fürdőváros a nyugati parton, amely püspöki váráról és fa sétányáról ismert.",
      ro: "Un oraș balnear istoric pe coasta de vest, cunoscut pentru castelul său episcopal și promenada din lemn.",
      en: "A historic spa town on the west coast, known for its episcopal castle and wooden promenade."
    },
    facts: {
      de: ["Bischofsburg Haapsalu", "Tschaikowski-Bank"],
      hu: ["Haapsalu püspöki vár", "Csajkovszkij-pad"],
      ro: ["Castelul episcopal Haapsalu", "Banca Ceaikovski"],
      en: ["Haapsalu Episcopal Castle", "Tchaikovsky's Bench"]
    },
    image: "/images/visualLab/estonia/haapsalu.jpg"
  }
];

export const estoniaCountry = estoniaAllPoiBase[0] as POI;
export const estoniaRegions: POI[] = estoniaAllPoiBase.slice(1);

export const estoniaCities: POI[] = [
  {
    id: "city-tapa",
    type: "city",
    parent: "ee-country",
    coords: [25.9583, 59.2606],
    name: { de: "Tapa", hu: "Tapa", ro: "Tapa", en: "Tapa" },
    description: {
      de: "Tapa ist eine Eisenbahnstadt in Lääne-Viru und ein wichtiger Verkehrsknotenpunkt im Nordosten Estlands. Die Stadt liegt an der Verbindung zwischen Tallinn, Narva und Tartu und ist deshalb seit jeher strategisch bedeutsam. Neben dem Bahnerbe prägen Kasernen, Wohnviertel und ein ruhiger Kleinstadtcharakter das Bild. Für Reisende ist Tapa ein praktischer Ausgangspunkt für Ausflüge in Richtung Lahemaa und Rakvere.",
      hu: "Tapa Lääne-Viru megye vasútvárosa és Északkelet-Észtország fontos közlekedési csomópontja. A város Tallinn, Narva és Tartu kapcsolata miatt mindig is stratégiai jelentőségű volt. A vasúti örökség mellett laktanyák, lakónegyedek és nyugodt kisvárosi hangulat jellemzi. Az utazók számára Tapa jó kiindulópont Lahemaa és Rakvere felé.",
      ro: "Tapa este un oraș feroviar din Lääne-Viru și un nod de transport important în nord-estul Estoniei. Orașul a avut mereu o valoare strategică datorită legăturilor sale cu Tallinn, Narva și Tartu. Moștenirea feroviară, cazărmi și cartiere liniștite definesc atmosfera locală. Pentru vizitatori, Tapa este o bază practică pentru excursii spre Lahemaa și Rakvere.",
      en: "Tapa is a rail town in Lääne-Viru and an important transport hub in northeastern Estonia. The town has long held strategic value because of its links between Tallinn, Narva, and Tartu. Railway heritage, military facilities, and a calm small-town atmosphere shape the local identity. For visitors, Tapa is a practical base for trips toward Lahemaa and Rakvere."
    },
    facts: {
      de: ["Wichtiger Eisenbahnknoten in Nordost-Estland", "Liegt an der Route Tallinn-Narva", "Teil von Lääne-Viru", "Bekannt für Militär- und Bahntradition", "Praktischer Zwischenstopp für Reisende"],
      hu: ["Fontos vasúti csomópont Északkelet-Észtországban", "A Tallinn-Narva útvonalon fekszik", "Lääne-Viru megyéhez tartozik", "Vasúti és katonai örökségéről ismert", "Jó megálló az utazóknak"],
      ro: ["Nod feroviar important în nord-estul Estoniei", "Situat pe ruta Tallinn-Narva", "Ține de județul Lääne-Viru", "Cunoscut pentru tradiția militară și feroviară", "O oprire practică pentru călători"],
      en: ["Important rail hub in northeastern Estonia", "Located on the Tallinn-Narva route", "Part of Lääne-Viru County", "Known for railway and military heritage", "A useful stop for travelers"]
    },
    image: "/geo-images/estonia/tapa.webp"
  },
  {
    id: "city-viljandi",
    type: "city",
    parent: "ee-country",
    coords: [25.5906, 58.3639],
    name: { de: "Viljandi", hu: "Viljandi", ro: "Viljandi", en: "Viljandi" },
    description: {
      de: "Viljandi ist eine Kulturstadt in Südestland mit Hügelblick, Seenlage und einer starken Musikszene. Die Altstadt wirkt kompakt und historisch, während das berühmte Schlossgelände über dem See an die mittelalterliche Vergangenheit erinnert. Jedes Jahr zieht das Volksmusikfestival Besucher aus ganz Estland an und stärkt das Profil der Stadt. Wer authentisches, ruhiges Estland mit viel Charakter sucht, findet in Viljandi ein starkes Reiseziel.",
      hu: "Viljandi Dél-Észtország kulturális városa, dombos fekvéssel, tóparttal és erős zenei élettel. A belváros kompakt és történelmi, míg a híres várrom a tó fölött a középkori múltat idézi. Az évente megrendezett népzenei fesztivál az ország minden részéről vonzza a látogatókat. Aki karakteres, nyugodt és hiteles Észtországot keres, Viljandiban megtalálja.",
      ro: "Viljandi este un oraș cultural din sudul Estoniei, cu dealuri, lac și o scenă muzicală puternică. Centrul vechi este compact și istoric, iar ruinele castelului de pe malul lacului amintesc de trecutul medieval. Festivalul anual de muzică populară atrage vizitatori din toată Estonia. Pentru cei care caută o Estonie autentică și liniștită, Viljandi este o destinație excelentă.",
      en: "Viljandi is a cultural city in southern Estonia with hills, a lakeside setting, and a strong music scene. Its old town feels compact and historic, while the famous castle site above the lake recalls the medieval past. The annual folk music festival draws visitors from across Estonia and raises the city's profile. For travelers seeking authentic and quiet Estonia with character, Viljandi is a strong destination."
    },
    facts: {
      de: ["Südestnische Kulturstadt", "Berühmt für das Viljandi-Folkfestival", "Lage am Viljandi-See", "Mittelalterliche Burganlage über der Stadt", "Beliebtes Ziel für Architektur- und Musikfans"],
      hu: ["Dél-észt kulturális város", "Híres a Viljandi népzenei fesztiválról", "A Viljandi-tó partján fekszik", "Középkori várhelyszín a város fölött", "Népszerű az építészet és a zene kedvelői körében"],
      ro: ["Oraș cultural din sudul Estoniei", "Faima festivalului de muzică populară Viljandi", "Situat pe malul lacului Viljandi", "Ruine medievale de castel deasupra orașului", "Popular printre iubitorii de arhitectură și muzică"],
      en: ["Southern Estonian cultural city", "Known for the Viljandi Folk Music Festival", "Located beside Lake Viljandi", "Medieval castle site above the town", "Popular with architecture and music lovers"]
    },
    image: "/geo-images/estonia/viljandi.webp"
  },
  {
    id: "city-paide",
    type: "city",
    parent: "ee-country",
    coords: [25.5560, 58.8856],
    name: { de: "Paide", hu: "Paide", ro: "Paide", en: "Paide" },
    description: {
      de: "Paide liegt im Herzen Estlands und wird oft als Mittelpunkt des Landes beschrieben. Die Stadt ist für den Wasserturm, die ruhige Innenstadt und die historische Burganlage bekannt. Paide verbindet Kleinstadtkomfort mit einer klaren regionalen Rolle in Järva County. Durch die zentrale Lage eignet sich die Stadt gut für Rundreisen durch das mittelestnische Hügelland.",
      hu: "Paide Észtország szívében fekszik, ezért gyakran az ország közepének nevezik. A város a víztoronyáról, a csendes belvárosáról és a történelmi várromról ismert. Paide kisvárosi kényelmet és erős regionális szerepet egyesít Järva megyében. Központi fekvése miatt jó kiindulópont a közép-észt dombvidék bejárásához.",
      ro: "Paide se află chiar în inima Estoniei și este adesea descris ca centrul țării. Orașul este cunoscut pentru turnul de apă, centrul liniștit și situl istoric al castelului. Paide combină confortul unui oraș mic cu un rol regional clar în județul Järva. Datorită poziției centrale, este o bază bună pentru explorarea dealurilor din centrul Estoniei.",
      en: "Paide sits in the heart of Estonia and is often described as the country's center point. The town is known for its water tower, quiet downtown, and historic castle site. Paide combines small-town comfort with a clear regional role in Järva County. Its central location makes it a useful base for exploring central Estonia's rolling landscapes."
    },
    facts: {
      de: ["Oft als geografischer Mittelpunkt Estlands beschrieben", "Burganlage von Paide ist ein lokales Wahrzeichen", "Sitz in Järva County", "Bekannt für den Paide-Wasserturm", "Geeignet als Basis für Mittelestland-Reisen"],
      hu: ["Gyakran Észtország földrajzi közepének tartják", "A Paide-vár helye helyi jelkép", "Järva megyében található", "Híres a Paide víztoronyról", "Jó bázis Közép-Észtország felfedezéséhez"],
      ro: ["Adesea descris ca centrul geografic al Estoniei", "Situl castelului Paide este un reper local", "Aflat în județul Järva", "Cunoscut pentru turnul de apă din Paide", "Bază utilă pentru excursii în centrul Estoniei"],
      en: ["Often described as Estonia's geographic center", "Paide castle site is a local landmark", "Located in Järva County", "Known for the Paide water tower", "Useful base for central Estonia trips"]
    },
    image: "/geo-images/estonia/paide.webp"
  },
  {
    id: "city-voru",
    type: "city",
    parent: "ee-country",
    coords: [27.0194, 57.8339],
    name: { de: "Võru", hu: "Võru", ro: "Võru", en: "Võru" },
    description: {
      de: "Võru ist eine südestnische Stadt mit starkem regionalem Charakter und einem klaren Bezug zum Haanja-Hügelland. Die Stadt ist für ihre gemütliche Größe, grüne Umgebung und die Nähe zu Seen und Wanderwegen bekannt. Lokale Kultur und der Võru-Dialekt geben dem Ort eine eigenständige Identität. Wer den Süden Estlands versteht, sollte Võru als wichtige Station im Blick haben.",
      hu: "Võru dél-észt város, erős regionális karakterrel és a Haanja-dombvidékhez való szoros kapcsolattal. A város barátságos méretéről, zöld környezetéről és a tavakhoz, túraútvonalakhoz való közelségéről ismert. A helyi kultúra és a võru nyelvjárás külön arculatot ad a településnek. Aki meg akarja érteni Dél-Észtországot, annak Võrut is látni kell.",
      ro: "Võru este un oraș din sudul Estoniei, cu un caracter regional puternic și o legătură clară cu zonele deluroase din Haanja. Orașul este cunoscut pentru dimensiunea sa prietenoasă, mediul verde și apropierea de lacuri și trasee de drumeție. Cultura locală și dialectul võru oferă o identitate aparte. Cine vrea să înțeleagă sudul Estoniei, trebuie să includă Võru pe listă.",
      en: "Võru is a southern Estonian city with a strong regional character and a clear connection to the Haanja uplands. The city is known for its friendly size, green surroundings, and proximity to lakes and hiking trails. Local culture and the Võru dialect give the place a distinct identity. Anyone trying to understand southern Estonia should put Võru on the map."
    },
    facts: {
      de: ["Verbindung zum Haanja-Hügelland", "Teil von Võru County", "Bekannt für lokale Sprache und Traditionen", "Nähe zu Wander- und Naturgebieten", "Beliebter Stopp im Süden Estlands"],
      hu: ["Kapcsolat a Haanja-dombvidékkel", "Võru megye része", "Helyi nyelvjárásáról és hagyományairól ismert", "Közel túra- és természetvédelmi területekhez", "Népszerű megálló Dél-Észtországban"],
      ro: ["Legătură cu zonele deluroase Haanja", "Parte din județul Võru", "Cunoscut pentru limba și tradițiile locale", "Aproape de trasee de drumeție și natură", "O oprire populară în sudul Estoniei"],
      en: ["Connected to the Haanja uplands", "Part of Võru County", "Known for local language and traditions", "Close to hiking and nature areas", "A popular stop in southern Estonia"]
    },
    image: "/geo-images/estonia/voru.webp"
  },
  {
    id: "city-rapla",
    type: "city",
    parent: "ee-country",
    coords: [24.7936, 58.9940],
    name: { de: "Rapla", hu: "Rapla", ro: "Rapla", en: "Rapla" },
    description: {
      de: "Rapla ist ein ruhiger Landkreis- und Marktort in Westzentral-Estland. Die Stadt ist ein praktischer Dienstleistungsstandort mit Schulen, Verwaltung und guter Anbindung an Tallinn. Rund um Rapla liegen Felder, Wälder und kleine Ortschaften, die den ländlichen Charakter stärken. Für SEO-Reisen nach Mittelestland ist Rapla ein wichtiger, aber oft unterschätzter Name.",
      hu: "Rapla csendes járási és piaci központ Nyugat-Közép-Észtországban. A város fontos szolgáltatási csomópont iskolákkal, közigazgatással és jó tallinni kapcsolattal. Rapla körül mezők, erdők és kisebb települések erősítik a vidéki jelleget. Közép-észt utazásoknál Rapla fontos, mégis gyakran alulértékelt név.",
      ro: "Rapla este un centru liniștit de județ și târg în centrul-vest al Estoniei. Orașul este un punct de servicii important, cu școli, administrație și legături bune cu Tallinn. În jurul Rapla se află câmpuri, păduri și sate mici care întăresc caracterul rural. Pentru călătoriile de tip SEO în centrul Estoniei, Rapla este un nume important, dar adesea subestimat.",
      en: "Rapla is a quiet county and market town in west-central Estonia. The city serves as a practical service hub with schools, administration, and good links to Tallinn. Fields, forests, and small settlements around Rapla reinforce its rural character. For central Estonia travel, Rapla is an important but often underrated name."
    },
    facts: {
      de: ["Verwaltungszentrum von Rapla County", "Gute Bahn- und Straßenverbindungen nach Tallinn", "Ländliche Landschaften rund um die Stadt", "Wichtiger Serviceort für die Region", "Praktischer Stopp zwischen Tallinn und Südwesten"],
      hu: ["Rapla megye közigazgatási központja", "Jó vasúti és közúti kapcsolat Tallinnnal", "Vidéki táj veszi körül", "Fontos szolgáltatási központ a térségben", "Hasznos megálló Tallinn és Délnyugat-Észtország között"],
      ro: ["Centru administrativ al județului Rapla", "Legături bune cu Tallinnul prin cale ferată și șosea", "Peisaje rurale în jurul orașului", "Centru important de servicii pentru regiune", "O oprire utilă între Tallinn și sud-vestul Estoniei"],
      en: ["Administrative center of Rapla County", "Good rail and road links to Tallinn", "Rural landscapes surround the town", "Important service center for the region", "Useful stop between Tallinn and southwest Estonia"]
    },
    image: "/geo-images/estonia/rapla.webp"
  },
  {
    id: "city-kuressaare",
    type: "city",
    parent: "ee-country",
    coords: [22.4897, 58.2522],
    name: { de: "Kuressaare", hu: "Kuressaare", ro: "Kuressaare", en: "Kuressaare" },
    description: {
      de: "Kuressaare ist die Hauptstadt von Saaremaa und einer der wichtigsten Kurorte Estlands. Die Stadt verbindet Kuratmosphäre, Küstenleben und eine starke historische Kulisse mit der berühmten Burg. Im Sommer wächst das Besucheraufkommen deutlich, weil Strand, Altstadt und Wellnessangebote eng zusammenliegen. Für Inselreisen in Westestland ist Kuressaare ein zentrales SEO-Ziel.",
      hu: "Kuressaare Saaremaa fővárosa és Észtország egyik legfontosabb fürdővárosa. A város a fürdőhangulatot, a tengerparti életet és a történelmi környezetet a híres várral ötvözi. Nyáron a látogatottság erősen megnő, mert a strand, az óváros és a wellness-lehetőségek közel vannak egymáshoz. Nyugat-észt szigettúráknál Kuressaare központi SEO-célpont.",
      ro: "Kuressaare este capitala insulei Saaremaa și una dintre cele mai importante stațiuni balneare din Estonia. Orașul combină atmosfera de wellness, viața de coastă și un cadru istoric puternic în jurul faimosului castel. Vara, numărul vizitatorilor crește mult, deoarece plaja, centrul vechi și serviciile spa sunt foarte apropiate. Pentru tururile insulare din vestul Estoniei, Kuressaare este un punct SEO esențial.",
      en: "Kuressaare is the capital of Saaremaa and one of Estonia's most important spa towns. The city combines a resort atmosphere, coastal life, and a strong historic setting centered on the famous castle. Visitor numbers rise sharply in summer because the beach, old town, and wellness services sit close together. For island travel in western Estonia, Kuressaare is a key SEO target."
    },
    facts: {
      de: ["Hauptstadt von Saaremaa", "Berühmter Kurort an der Ostsee", "Kuressaare Castle prägt das Stadtbild", "Beliebt für Wellness und Strandurlaub", "Wichtiger Verkehrsknoten für die Insel"],
      hu: ["Saaremaa fővárosa", "Híres balti-tengeri fürdőváros", "A Kuressaare-vár uralja a városképet", "Népszerű wellness- és strandcélpont", "Fontos közlekedési csomópont a szigeten"],
      ro: ["Capitala insulei Saaremaa", "Stațiune balneară renumită la Marea Baltică", "Castelul Kuressaare definește orașul", "Popular pentru wellness și vacanțe la plajă", "Nod important de transport pentru insulă"],
      en: ["Capital of Saaremaa", "Famous Baltic Sea spa town", "Kuressaare Castle shapes the skyline", "Popular for wellness and beach holidays", "Important transport hub on the island"]
    },
    image: "/geo-images/estonia/kuressaare.webp"
  },
  {
    id: "city-kardla",
    type: "city",
    parent: "ee-country",
    coords: [22.7492, 58.9983],
    name: { de: "Kärdla", hu: "Kärdla", ro: "Kärdla", en: "Kärdla" },
    description: {
      de: "Kärdla ist die kleinste Kreisstadt Estlands und das Zentrum von Hiiumaa. Die Stadt ist ruhig, grün und stark von der Inselnatur geprägt. Besucher finden hier einen angenehmen Mix aus kleinen Cafés, Hafenatmosphäre und lokaler Identität. Kärdla ist ein guter Ausgangspunkt für Leuchtturm-, Küsten- und Inselrundreisen.",
      hu: "Kärdla Észtország legkisebb megyei székhelye és Hiiumaa központja. A város nyugodt, zöld és erősen szigetjellegű környezetben fekszik. A látogatók kellemes kávézókat, kikötői hangulatot és erős helyi identitást találnak itt. Kärdla jó kiindulópont világítótornyos, tengerparti és szigettúrákhoz.",
      ro: "Kärdla este cel mai mic oraș-reședință de județ din Estonia și centrul insulei Hiiumaa. Orașul este liniștit, verde și puternic influențat de peisajul insular. Vizitatorii găsesc aici cafenele plăcute, atmosferă de port și identitate locală clară. Kärdla este o bază bună pentru trasee cu faruri, coastă și tururi de insulă.",
      en: "Kärdla is Estonia's smallest county town and the center of Hiiumaa. The city is quiet, green, and strongly shaped by island life. Visitors find pleasant cafes, harbor atmosphere, and a strong local identity here. Kärdla is a good starting point for lighthouse, coast, and island tours."
    },
    facts: {
      de: ["Hauptort von Hiiumaa", "Kleinste Kreisstadt Estlands", "Starker Inselcharakter", "Guter Ausgangspunkt für Leuchtturmrouten", "Ruhige Küstenatmosphäre"],
      hu: ["Hiiumaa központja", "Észtország legkisebb megyeszékhelye", "Erős szigetjelleg", "Jó kiindulópont a világítótornyokhoz", "Nyugodt tengerparti hangulat"],
      ro: ["Centrul insulei Hiiumaa", "Cel mai mic oraș-reședință de județ din Estonia", "Caracter insular puternic", "Bază bună pentru rute cu faruri", "Atmosferă liniștită de coastă"],
      en: ["Center of Hiiumaa", "Estonia's smallest county town", "Strong island character", "Good base for lighthouse routes", "Calm coastal atmosphere"]
    },
    image: "/geo-images/estonia/kardla.webp"
  },
  {
    id: "city-johvi",
    type: "city",
    parent: "ee-country",
    coords: [27.4258, 59.3598],
    name: { de: "Jõhvi", hu: "Jõhvi", ro: "Jõhvi", en: "Jõhvi" },
    description: {
      de: "Jõhvi ist das Verwaltungs- und Kulturzentrum von Ida-Viru County. Die Stadt verbindet moderne Infrastruktur mit einer stark industriell geprägten Umgebung. Durch Theater, Konzerthalle und gute Verbindungen nach Narva bleibt Jõhvi ein wichtiges regionales Zentrum. Für Ostestland-Reisen ist die Stadt ein nützlicher und gut erreichbarer Standort.",
      hu: "Jõhvi Ida-Viru megye közigazgatási és kulturális központja. A város a modern infrastruktúrát erősen ipari környezettel ötvözi. Színház, koncertterem és a Narvába vezető jó kapcsolatok miatt Jõhvi fontos regionális központ. Kelet-észt utazások során hasznos és könnyen elérhető állomás.",
      ro: "Jõhvi este centrul administrativ și cultural al județului Ida-Viru. Orașul combină infrastructura modernă cu un mediu puternic industrializat. Datorită teatrului, sălii de concerte și legăturilor bune cu Narva, Jõhvi rămâne un centru regional important. Pentru călătoriile în estul Estoniei, orașul este o oprire utilă și ușor accesibilă.",
      en: "Jõhvi is the administrative and cultural center of Ida-Viru County. The city combines modern infrastructure with a strongly industrial setting. With a theater, concert hall, and good links to Narva, Jõhvi remains an important regional center. For eastern Estonia trips, it is a useful and accessible stop."
    },
    facts: {
      de: ["Verwaltungszentrum von Ida-Viru", "Wichtiger Kulturstandort im Osten", "Gute Verbindung nach Narva und Tallinn", "Von Industriegeschichte umgeben", "Geeignet als Basis für Ostestland"],
      hu: ["Ida-Viru közigazgatási központja", "Fontos kulturális helyszín keleten", "Jó kapcsolat Narvával és Tallinnnal", "Ipari történelem veszi körül", "Jó bázis Kelet-Észtországban"],
      ro: ["Centru administrativ al județului Ida-Viru", "Important reper cultural în est", "Legături bune cu Narva și Tallinn", "Înconjurat de istorie industrială", "Bază bună pentru estul Estoniei"],
      en: ["Administrative center of Ida-Viru", "Important cultural site in the east", "Good links to Narva and Tallinn", "Surrounded by industrial history", "A good base for eastern Estonia"]
    },
    image: "/geo-images/estonia/johvi.webp"
  },
  {
    id: "city-polva",
    type: "city",
    parent: "ee-country",
    coords: [27.0552, 58.0599],
    name: { de: "Põlva", hu: "Põlva", ro: "Põlva", en: "Põlva" },
    description: {
      de: "Põlva ist ein freundlicher Ort im Südosten Estlands mit Fokus auf Natur, Schule und regionales Leben. Die Stadt liegt in der Nähe von Hügeln, Seen und Waldgebieten, die den Freizeitwert deutlich erhöhen. Põlva ist ruhig, ordentlich und für Besucher oft angenehm überschaubar. Im SEO-Kontext eignet sich der Ort gut als Suchbegriff für Südestland und Outdoor-Reisen.",
      hu: "Põlva egy barátságos település Délkelet-Észtországban, ahol a természet, az iskolaélet és a regionális mindennapok dominálnak. A város közel van dombokhoz, tavakhoz és erdős területekhez, ami erősen növeli a szabadidős értékét. Põlva csendes, rendezett és a látogatók számára jól átlátható. SEO-szempontból jó kulcsszó Dél-Észtország és az outdoor utazások kereséséhez.",
      ro: "Põlva este un oraș prietenos din sud-estul Estoniei, unde natura, școala și viața regională sunt în prim-plan. Orașul se află aproape de dealuri, lacuri și zone împădurite, ceea ce îi crește valoarea recreativă. Põlva este liniștit, ordonat și ușor de parcurs pentru vizitatori. În context SEO, este un termen util pentru căutări despre sudul Estoniei și călătorii în aer liber.",
      en: "Põlva is a friendly town in southeastern Estonia where nature, schools, and regional everyday life take center stage. The town sits near hills, lakes, and forested areas, which adds strong recreation value. Põlva feels quiet, tidy, and easy to navigate for visitors. In SEO terms, it works well as a keyword for southern Estonia and outdoor travel."
    },
    facts: {
      de: ["Südostestnischer Regionalort", "Nahe an Wäldern und Seen", "Wichtiger lokaler Dienstleistungsstandort", "Ruhige, familienfreundliche Atmosphäre", "Praktischer Startpunkt für Naturtouren"],
      hu: ["Délkelet-észt regionális település", "Erdők és tavak közelében", "Fontos helyi szolgáltatási központ", "Nyugodt, családbarát hangulat", "Jó kiindulópont természetjáráshoz"],
      ro: ["Oraș regional din sud-estul Estoniei", "Aproape de păduri și lacuri", "Centru local important de servicii", "Atmosferă liniștită, potrivită familiilor", "Punct de plecare bun pentru tururi în natură"],
      en: ["Regional town in southeastern Estonia", "Close to forests and lakes", "Important local service center", "Quiet, family-friendly atmosphere", "Good starting point for nature tours"]
    },
    image: "/geo-images/estonia/polva.webp"
  },
  {
    id: "city-valga",
    type: "city",
    parent: "ee-country",
    coords: [26.0410, 57.7778],
    name: { de: "Valga", hu: "Valga", ro: "Valga", en: "Valga" },
    description: {
      de: "Valga liegt an der Grenze zu Lettland und ist ein klassischer Grenz- und Bahnort. Die Stadt bildet zusammen mit Valka eine seltene grenzüberschreitende Doppelstadt. Dadurch besitzt Valga eine besondere Rolle im baltischen Verkehrs- und Alltagsraum. Für Suchanfragen zu Grenzstädten in Estland ist Valga ein sehr starkes Ziel.",
      hu: "Valga Lettország határán fekszik, és klasszikus határváros és vasúti település. A város Valkával együtt ritka, határokon átívelő ikervárost alkot. Emiatt Valga különleges szerepet tölt be a balti közlekedési és mindennapi térben. Az észt határvárosokra vonatkozó keresésekben Valga nagyon erős célpont.",
      ro: "Valga se află la granița cu Letonia și este un oraș clasic de frontieră și cale ferată. Împreună cu Valka, formează un rar oraș dublu transfrontalier. Din acest motiv, Valga are un rol special în spațiul baltic de transport și viață cotidiană. Pentru căutările despre orașe de frontieră din Estonia, Valga este un obiectiv foarte bun.",
      en: "Valga lies on the Latvian border and is a classic border and rail town. Together with Valka, it forms a rare cross-border twin city. This gives Valga a special role in the Baltic transport and everyday landscape. For searches about Estonian border towns, Valga is a strong target."
    },
    facts: {
      de: ["Grenzstadt zu Lettland", "Bildet mit Valka eine Doppelstadt", "Wichtiger Bahnstandort", "Südlicher Verkehrsknoten Estlands", "Interessant für grenzüberschreitenden Tourismus"],
      hu: ["Lett határváros", "Valkával ikervárost alkot", "Fontos vasúti helyszín", "Észtország déli közlekedési csomópontja", "Érdekes a határon átnyúló turizmushoz"],
      ro: ["Oraș de frontieră cu Letonia", "Formează un oraș dublu cu Valka", "Nod important feroviar", "Punct de transport sudic al Estoniei", "Interesant pentru turismul transfrontalier"],
      en: ["Border city with Latvia", "Forms a twin city with Valka", "Important rail location", "Southern transport hub of Estonia", "Interesting for cross-border tourism"]
    },
    image: "/geo-images/estonia/valga.webp"
  }
];

export const estoniaCulture: POI[] = [
  {
    id: "cult-tallinn-oldtown",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7442, 59.4394],
    name: {
      de: "Tallinner Altstadt",
      hu: "Tallinn óváros",
      ro: "Orașul vechi Tallinn",
      en: "Tallinn Old Town"
    },
    description: {
      de: "UNESCO-Mauern aus dem 13. Jahrhundert mit Türmen.",
      hu: "UNESCO 13. századi fal + tornyok.",
      ro: "Zid UNESCO din secolul al XIII-lea + turnuri.",
      en: "UNESCO 13th-century wall and towers."
    },
    facts: {
      de: ["UNESCO-Welterbe", "13. Jahrhundert"],
      hu: ["UNESCO világörökség", "13. század"],
      ro: ["Patrimoniu UNESCO", "Secolul al XIII-lea"],
      en: ["UNESCO World Heritage", "13th century"]
    },
    image: "/geo-images/estonia/tallinn-oldtown.webp"
  },
  {
    id: "cult-tartu-university",
    type: "landmark",
    parent: "ee-country",
    coords: [26.7208, 58.3806],
    name: {
      de: "Universität Tartu",
      hu: "Tartu egyetem",
      ro: "Universitatea din Tartu",
      en: "University of Tartu"
    },
    description: {
      de: "Schwedische Gründung von 1632.",
      hu: "Svéd alapítás 1632.",
      ro: "Fondată de suedezi în 1632.",
      en: "Founded by Sweden in 1632."
    },
    facts: {
      de: ["Gegründet 1632", "Alte Universitätsstadt"],
      hu: ["1632-ben alapították", "Régi egyetemi város"],
      ro: ["Fondată în 1632", "Oraș universitar istoric"],
      en: ["Founded in 1632", "Historic university city"]
    },
    image: "/geo-images/estonia/tartu-university.webp"
  },
  {
    id: "cult-kadriorg",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7897, 59.4394],
    name: {
      de: "Kadriorg-Palast",
      hu: "Kadriorg-palota Tallinn",
      ro: "Palatul Kadriorg",
      en: "Kadriorg Palace"
    },
    description: {
      de: "Peter der Große, 1718, Barock.",
      hu: "Nagy Péter 1718 barokk.",
      ro: "Petru cel Mare, 1718, baroc.",
      en: "Peter the Great, 1718, baroque."
    },
    facts: {
      de: ["Barockpalast", "1718 erbaut"],
      hu: ["Barokk palota", "1718-ban épült"],
      ro: ["Palat baroc", "Construit în 1718"],
      en: ["Baroque palace", "Built in 1718"]
    },
    image: "/geo-images/estonia/kadriorg.webp"
  },
  {
    id: "cult-narva-castle",
    type: "historical",
    parent: "ee-country",
    coords: [28.2, 59.378],
    name: {
      de: "Hermannsfeste Narva",
      hu: "Narva Hermann-vár",
      ro: "Cetatea Hermann din Narva",
      en: "Narva Hermann Castle"
    },
    description: {
      de: "Livländische Burg aus dem 13. Jahrhundert.",
      hu: "13. századi livóniai kastély.",
      ro: "Castel livonian din secolul al XIII-lea.",
      en: "13th-century Livonian castle."
    },
    facts: {
      de: ["13. Jahrhundert", "Livländische Burg"],
      hu: ["13. század", "Livóniai kastély"],
      ro: ["Secolul al XIII-lea", "Cetate livoniană"],
      en: ["13th century", "Livonian castle"]
    },
    image: "/geo-images/estonia/narva-castle.webp"
  },
  {
    id: "cult-tartu-observatory",
    type: "historical",
    parent: "ee-country",
    coords: [26.72, 58.378],
    name: {
      de: "Sternwarte Tartu",
      hu: "Tartu csillagvizsgáló",
      ro: "Observatorul din Tartu",
      en: "Tartu Observatory"
    },
    description: {
      de: "UNESCO-Struve-Bogen, 1820er Jahre.",
      hu: "UNESCO Struve-geodéziai ív, 1820.",
      ro: "Arcul geodezic Struve UNESCO, 1820.",
      en: "UNESCO Struve Geodetic Arc, 1820."
    },
    facts: {
      de: ["UNESCO-Struve-Bogen", "1820er Jahre"],
      hu: ["UNESCO Struve-ív", "1820"],
      ro: ["Arcul Struve UNESCO", "1820"],
      en: ["UNESCO Struve Arc", "1820"]
    },
    image: "/geo-images/estonia/tartu-observatory.webp"
  },
  {
    id: "cult-rakvere",
    type: "historical",
    parent: "ee-country",
    coords: [26.355, 59.35],
    name: {
      de: "Rakvere-Burg",
      hu: "Rakvere vár",
      ro: "Cetatea Rakvere",
      en: "Rakvere Castle"
    },
    description: {
      de: "13. Jahrhundert, gut erhaltene Ruinenburg.",
      hu: "13. századi romvár.",
      ro: "Ruine de castel din secolul al XIII-lea.",
      en: "13th-century ruined castle."
    },
    facts: {
      de: ["13. Jahrhundert", "Ruinenburg"],
      hu: ["13. század", "Romvár"],
      ro: ["Secolul al XIII-lea", "Ruine de castel"],
      en: ["13th century", "Ruined castle"]
    },
    image: "/geo-images/estonia/rakvere-castle.webp"
  },
  {
    id: "cult-alexander-nevsky",
    type: "landmark",
    parent: "ee-country",
    coords: [24.742, 59.435],
    name: {
      de: "Alexander-Newski-Kathedrale Tallinn",
      hu: "Alekszandr Nyevszkij-székesegyház Tallinn",
      ro: "Catedrala Alexander Nevsky din Tallinn",
      en: "Alexander Nevsky Cathedral, Tallinn"
    },
    description: {
      de: "Russisch-orthodoxe Kathedrale von 1900.",
      hu: "Orosz ortodox templom 1900-ból.",
      ro: "Catedrală ortodoxă rusă din 1900.",
      en: "Russian Orthodox cathedral from 1900."
    },
    facts: {
      de: ["Russisch-orthodox", "Erbaut 1900"],
      hu: ["Orosz ortodox", "1900-ban épült"],
      ro: ["Ortodoxă rusă", "Construită în 1900"],
      en: ["Russian Orthodox", "Built in 1900"]
    },
    image: "/geo-images/estonia/alexander-nevsky.webp"
  },
  {
    id: "cult-kihnu",
    type: "landmark",
    parent: "ee-country",
    coords: [24.0, 58.133],
    name: {
      de: "Insel Kihnu",
      hu: "Kihnu-sziget",
      ro: "Insula Kihnu",
      en: "Kihnu Island"
    },
    description: {
      de: "UNESCO-Insel mit lebendiger Frauentradition.",
      hu: "UNESCO-sziget élő női hagyományokkal.",
      ro: "Insulă UNESCO cu tradiții feminine vii.",
      en: "UNESCO island with living women's traditions."
    },
    facts: {
      de: ["UNESCO-Kulturerbe", "Frauentraditionen"],
      hu: ["UNESCO örökség", "Női hagyományok"],
      ro: ["Patrimoniu UNESCO", "Tradiții feminine"],
      en: ["UNESCO heritage", "Women's traditions"]
    },
    image: "/geo-images/estonia/kihnu.webp"
  },
  {
    id: "cult-parnu-beach",
    type: "landmark",
    parent: "ee-country",
    coords: [24.495, 58.38],
    name: {
      de: "Strand von Pärnu",
      hu: "Pärnu strand",
      ro: "Plaja din Pärnu",
      en: "Pärnu Beach"
    },
    description: {
      de: "Sommerhauptstadt mit Strandpromenade.",
      hu: "Nyári főváros, strand sétány.",
      ro: "Capitala de vară cu promenadă pe plajă.",
      en: "Summer capital with a beachfront promenade."
    },
    facts: {
      de: ["Sommerhauptstadt", "Strandpromenade"],
      hu: ["Nyári főváros", "Strand sétány"],
      ro: ["Capitala de vară", "Promenadă pe plajă"],
      en: ["Summer capital", "Beach promenade"]
    },
    image: "/geo-images/estonia/parnu-beach.webp"
  },
  {
    id: "hist-toompea-castle",
    type: "historical",
    parent: "ee-country",
    coords: [24.7409, 59.4396],
    name: {
      de: "Toompea-Burg",
      hu: "Toompea vára",
      ro: "Castelul Toompea",
      en: "Toompea Castle"
    },
    description: {
      de: "Toompea Castle thront über Tallinn und ist eines der wichtigsten historischen Machtzentren Estlands. Die Anlage verbindet mittelalterliche Festungsstrukturen mit dem heutigen Parlamentssitz. Der Standort prägt das politische und visuelle Profil der Hauptstadt seit Jahrhunderten. Für historische Tallinn-Recherchen ist Toompea ein unverzichtbarer Name.",
      hu: "A Toompea-vár Tallinn fölé magasodik, és Észtország egyik legfontosabb történelmi hatalmi központja. Az épület középkori erődítményt és a mai parlament székhelyét egyesíti. A helyszín évszázadok óta meghatározza a főváros politikai és vizuális arculatát. Történelmi tallinni kereséseknél Toompea kihagyhatatlan név.",
      ro: "Castelul Toompea domină Tallinnul și este unul dintre cele mai importante centre istorice de putere ale Estoniei. Ansamblul combină structuri medievale de fortificație cu sediul actual al parlamentului. Locația a modelat profilul politic și vizual al capitalei timp de secole. Pentru documentarea istorică despre Tallinn, Toompea este un nume esențial.",
      en: "Toompea Castle rises above Tallinn and is one of Estonia's most important historic power centers. The complex combines medieval fortress structures with the current seat of parliament. The site has shaped the political and visual profile of the capital for centuries. For historic Tallinn research, Toompea is an essential name."
    },
    facts: {
      de: ["Sitz des estnischen Parlaments", "Mittelalterliche Festungsanlage", "Auf dem Toompea-Hügel gelegen", "Prägt die Silhouette Tallinns", "Wichtiges Symbol staatlicher Macht"],
      hu: ["Az észt parlament székhelye", "Középkori erődítmény", "A Toompea-dombon áll", "Meghatározza Tallinn látképét", "Fontos állami hatalmi szimbólum"],
      ro: ["Sediul parlamentului estonian", "Fortificație medievală", "Situat pe dealul Toompea", "Definește silueta Tallinnului", "Simbol important al puterii statale"],
      en: ["Seat of the Estonian Parliament", "Medieval fortress complex", "Located on Toompea Hill", "Shapes Tallinn's skyline", "Important symbol of state power"]
    },
    image: "/geo-images/estonia/toompea-castle.webp"
  },
  {
    id: "hist-tallinn-city-wall",
    type: "historical",
    parent: "ee-country",
    coords: [24.7451, 59.4387],
    name: {
      de: "Tallinner Stadtmauer",
      hu: "Tallinn városfala",
      ro: "Zidul orașului Tallinn",
      en: "Tallinn City Wall"
    },
    description: {
      de: "Die Tallinner Stadtmauer gehört zu den besterhaltenen mittelalterlichen Befestigungen Nordeuropas. Türme, Mauern und Toranlagen erzählen von der Hansezeit und von der strategischen Bedeutung der Stadt. Heute ist die Anlage ein starkes Argument für Kulturtourismus und historische Stadterkundung. Wer Tallinns Altstadt verstehen will, beginnt bei der Stadtmauer.",
      hu: "A tallinni városfal Észak-Európa egyik legjobban megőrzött középkori erődrendszere. Tornyok, falak és kapuk mesélnek a Hanza-korszakról és a város stratégiai fontosságáról. Ma az épületegyüttes erős vonzerő a kulturális turizmus és a történelmi városnézés számára. Tallinn óvárosának megértése a városfallal kezdődik.",
      ro: "Zidul orașului Tallinn este una dintre cele mai bine conservate fortificații medievale din nordul Europei. Turnurile, zidurile și porțile povestesc despre epoca hanseatică și importanța strategică a orașului. Astăzi, ansamblul este un argument puternic pentru turismul cultural și explorarea istorică a orașului. Pentru a înțelege centrul vechi al Tallinnului, trebuie început cu zidul orașului.",
      en: "Tallinn City Wall is one of the best-preserved medieval fortifications in Northern Europe. Its towers, walls, and gate structures tell the story of the Hanseatic era and the city's strategic importance. Today the complex is a strong draw for cultural tourism and historic city exploration. To understand Tallinn Old Town, start with the city wall."
    },
    facts: {
      de: ["Teil des UNESCO-Altstadtbildes", "Mittelalterliche Wehranlage", "Prägend für die Skyline der Altstadt", "Beliebt bei Geschichts- und Architekturfans", "Ein Kernmotiv für Tallinn-Suchanfragen"],
      hu: ["Az UNESCO óváros része", "Középkori védműrendszer", "Meghatározza az óváros látképét", "Népszerű a történelem és építészet rajongóinak", "Fontos kulcstéma Tallinn-kereséseknél"],
      ro: ["Parte din centrul vechi UNESCO", "Fortificație medievală", "Definitorie pentru silueta orașului vechi", "Populară printre pasionații de istorie și arhitectură", "Temă centrală pentru căutările despre Tallinn"],
      en: ["Part of the UNESCO old town landscape", "Medieval defensive system", "Shapes the old town skyline", "Popular with history and architecture fans", "A core keyword for Tallinn searches"]
    },
    image: "/geo-images/estonia/tallinn-city-wall.webp"
  },
  {
    id: "hist-kuressaare-castle",
    type: "historical",
    parent: "ee-country",
    coords: [22.4895, 58.2519],
    name: {
      de: "Burg Kuressaare",
      hu: "Kuressaare vára",
      ro: "Castelul Kuressaare",
      en: "Kuressaare Castle"
    },
    description: {
      de: "Kuressaare Castle ist das bekannteste historische Bauwerk auf Saaremaa und ein Schlüsselobjekt der Inselgeschichte. Die Festung entstand im mittelalterlichen Machtgefüge des Baltikums und wurde über Jahrhunderte ausgebaut. Heute verbindet sie Museum, Stadtraum und touristische Inszenierung auf starke Weise. Für Saaremaa und westestnische Reiserouten ist das Schloss ein SEO-Magnet.",
      hu: "A Kuressaare-vár Saaremaa leghíresebb történelmi épülete és a sziget történetének kulcseleme. Az erőd a balti középkori hatalmi viszonyok között jött létre, majd évszázadokon át bővítették. Ma múzeumot, városi környezetet és turisztikai élményt kapcsol össze. Saaremaa és a nyugat-észt útvonalak számára a vár SEO-mágnes.",
      ro: "Castelul Kuressaare este cea mai cunoscută construcție istorică de pe Saaremaa și un element-cheie al istoriei insulei. Cetatea a apărut în contextul puterilor medievale din zona baltică și a fost extinsă timp de secole. Astăzi combină muzeul, spațiul urban și turismul într-un mod foarte vizibil. Pentru Saaremaa și rutele din vestul Estoniei, castelul este un magnet SEO.",
      en: "Kuressaare Castle is the best-known historic building on Saaremaa and a key piece of the island's history. The fortress emerged within the medieval power structure of the Baltic region and was expanded over centuries. Today it combines museum, urban space, and tourism in a very strong way. For Saaremaa and western Estonia travel routes, the castle is an SEO magnet."
    },
    facts: {
      de: ["Wichtigste Burg auf Saaremaa", "Mittelalterliche Ursprünge", "Heute Museum und Sehenswürdigkeit", "Prägt das Stadtzentrum von Kuressaare", "Beliebtes Motiv für Inselreisen"],
      hu: ["Saaremaa legfontosabb vára", "Középkori eredet", "Ma múzeum és látványosság", "Meghatározza Kuressaare központját", "Népszerű motívum a szigettúráknál"],
      ro: ["Cel mai important castel de pe Saaremaa", "Origini medievale", "Astăzi muzeu și atracție", "Definește centrul orașului Kuressaare", "Motiv popular pentru turismul insular"],
      en: ["Main castle on Saaremaa", "Medieval origins", "Now a museum and attraction", "Defines Kuressaare's center", "Popular motif for island trips"]
    },
    image: "/geo-images/estonia/kuressaare-castle.webp"
  },
  {
    id: "hist-padise-abbey",
    type: "historical",
    parent: "ee-country",
    coords: [24.1444, 59.2247],
    name: { de: "Padise-Kloster", hu: "Padise kolostor", ro: "Mănăstirea Padise", en: "Padise Abbey" },
    description: {
      de: "Padise Abbey ist eine der stimmungsvollsten historischen Klosteranlagen in Estland. Die Ruinen erinnern an die Zeit der Zisterzienser und an die Einbindung Estlands in die nordeuropäische Kirchenwelt. Der Ort liegt landschaftlich ruhig und eignet sich sehr gut für slow travel und Geschichtstourismus. Als SEO-Thema verbindet Padise Klosterarchitektur, Mittelalter und Naturumgebung.",
      hu: "A Padise kolostor Észtország egyik leghangulatosabb történelmi egyházi romja. A romok a ciszterci korszakra és Észtország észak-európai egyházi kapcsolataira emlékeztetnek. A hely csendes, tájképi környezetben fekszik, így kiváló slow travel és történelmi turizmus célpont. SEO-szempontból Padise az egyházi építészetet, a középkort és a természeti környezetet kapcsolja össze.",
      ro: "Mănăstirea Padise este unul dintre cele mai atmosferice ansambluri monastice istorice din Estonia. Ruinele amintesc de perioada cisterciană și de integrarea Estoniei în lumea religioasă din nordul Europei. Locul este situat într-un cadru liniștit și se potrivește foarte bine pentru slow travel și turism istoric. Ca subiect SEO, Padise leagă arhitectura monastică, Evul Mediu și peisajul natural.",
      en: "Padise Abbey is one of the most atmospheric historic monastic sites in Estonia. The ruins recall the Cistercian era and Estonia's place in the northern European church world. The site sits in a quiet landscape and works well for slow travel and history tourism. As an SEO topic, Padise connects monastic architecture, the Middle Ages, and natural surroundings."
    },
    facts: {
      de: ["Ehemaliges Zisterzienserkloster", "Wichtiger mittelalterlicher Klosterort", "Ruhige Lage im Westen Estlands", "Beliebt bei Kultur- und Slow-Travel-Gästen", "Starkes Motiv für Klostertourismus"],
      hu: ["Egykori ciszterci kolostor", "Fontos középkori egyházi hely", "Nyugodt fekvés Nyugat-Észtországban", "Népszerű a kultúra- és slow travel-rajongók körében", "Erős motívum a kolostorturizmusban"],
      ro: ["Fostă mănăstire cisterciană", "Loc monastic medieval important", "Așezare liniștită în vestul Estoniei", "Populară printre turiștii de cultură și slow travel", "Motiv puternic pentru turismul monastic"],
      en: ["Former Cistercian monastery", "Important medieval religious site", "Quiet setting in western Estonia", "Popular with culture and slow-travel visitors", "Strong motif for monastery tourism"]
    },
    image: "/geo-images/estonia/padise-abbey.webp"
  },
  {
    id: "hist-koluvere-castle",
    type: "historical",
    parent: "ee-country",
    coords: [24.1180, 58.8329],
    name: { de: "Koluvere-Burg", hu: "Koluvere vára", ro: "Castelul Koluvere", en: "Koluvere Castle" },
    description: {
      de: "Koluvere Castle gehört zu den markanten historischen Gut- und Festungsanlagen Westestlands. Die Burg ist von Wasserläufen und einer ländlichen Landschaft umgeben, was ihr einen besonders malerischen Charakter gibt. Über die Jahrhunderte diente sie als Adelsresidenz, Verteidigungsort und regionales Symbol. Für SEO-Inhalte über estnische Schlösser ist Koluvere ein wertvoller Baustein.",
      hu: "A Koluvere-vár Nyugat-Észtország egyik jellegzetes történelmi birtok- és erődítményegyüttese. A várat vízfolyások és vidéki táj veszik körül, ami különösen festői karaktert ad neki. Az évszázadok során nemesi rezidenciaként, védelmi pontként és regionális szimbólumként is szolgált. Az észt kastélyokról szóló SEO-tartalmakban Koluvere értékes elem.",
      ro: "Castelul Koluvere este unul dintre cele mai distinctive ansambluri istorice de conac și fortificație din vestul Estoniei. Castelul este înconjurat de cursuri de apă și peisaj rural, ceea ce îi conferă un caracter foarte pitoresc. De-a lungul secolelor a servit ca reședință nobilă, punct defensiv și simbol regional. Pentru conținutul SEO despre castelele estoniene, Koluvere este o piesă valoroasă.",
      en: "Koluvere Castle is one of western Estonia's most distinctive historic manor and fortress complexes. It is surrounded by waterways and rural landscapes, which give it a particularly picturesque character. Over the centuries it served as a noble residence, a defensive site, and a regional symbol. For SEO content about Estonian castles, Koluvere is a valuable addition."
    },
    facts: {
      de: ["Historische Festung in Westestland", "Von Wasser und Landschaft geprägt", "Ehemaliger Adelssitz", "Starkes Motiv für Schlossrouten", "Malerisches Umfeld für Fototourismus"],
      hu: ["Történelmi erőd Nyugat-Észtországban", "Víz és táj veszi körül", "Egykori nemesi rezidencia", "Erős motívum kastélyútvonalakhoz", "Festői környezet fotóturizmushoz"],
      ro: ["Fortificație istorică în vestul Estoniei", "Definită de apă și peisaj", "Fostă reședință nobilă", "Motiv puternic pentru rute cu castele", "Cadru pitoresc pentru turism foto"],
      en: ["Historic fortress in western Estonia", "Shaped by water and landscape", "Former noble residence", "Strong motif for castle routes", "Picturesque setting for photo tourism"]
    },
    image: "/geo-images/estonia/koluvere-castle.webp"
  },
  {
    id: "hist-sinimaed-battlefield",
    type: "historical",
    parent: "ee-country",
    coords: [27.7990, 59.3950],
    name: { de: "Sinimäed-Schlachtfeld", hu: "Sinimäed csatatér", ro: "Câmpul de luptă Sinimäed", en: "Sinimäed Battlefield" },
    description: {
      de: "Die Sinimäed-Höhen gehören zu den bekanntesten Kriegsschauplätzen des 20. Jahrhunderts in Estland. Der Ort ist stark mit den Frontkämpfen des Zweiten Weltkriegs verbunden und wird bis heute als historisches Erinnerungsgebiet wahrgenommen. Die Hügel geben der Landschaft eine markante Form und machen den Schauplatz auch geografisch interessant. Für Geschichts- und Gedenkturismus ist Sinimäed ein bedeutender Name.",
      hu: "A Sinimäed-dombok Észtország egyik legismertebb 20. századi hadszíntere. A helyszín erősen kötődik a második világháborús frontküzdelmekhez, és ma is történelmi emlékterületként él. A dombok markánssá teszik a tájat, ezért földrajzilag is érdekesek. A történelmi és emlékturizmus számára Sinimäed fontos név.",
      ro: "Înălțimile Sinimäed se numără printre cele mai cunoscute câmpuri de luptă ale secolului XX din Estonia. Locul este puternic asociat cu luptele de pe frontul celui de-al Doilea Război Mondial și este perceput ca zonă istorică de memorie. Colinele dau peisajului o formă distinctă și îl fac interesant și geografic. Pentru turismul istoric și memorial, Sinimäed este un nume important.",
      en: "The Sinimäed heights are among the best-known 20th-century battle sites in Estonia. The location is strongly tied to World War II front-line fighting and is still viewed as a historic memorial landscape. The hills give the area a distinct form and make it geographically interesting as well. For history and remembrance tourism, Sinimäed is an important name."
    },
    facts: {
      de: ["Bekannter Zweiter-Weltkrieg-Schauplatz", "Teil der Sinimäed-Höhen", "Wichtig für Erinnerungs- und Gedenktourismus", "Geografisch markante Hügellandschaft", "Eng verbunden mit Ostestland-Geschichte"],
      hu: ["Ismert második világháborús hadszíntér", "A Sinimäed dombok része", "Fontos emlékezet- és emlékturizmushoz", "Földrajzilag jellegzetes dombvidék", "Szorosan kapcsolódik Kelet-Észtország történetéhez"],
      ro: ["Câmp de luptă cunoscut din Al Doilea Război Mondial", "Parte din înălțimile Sinimäed", "Important pentru turismul memorial", "Peisaj deluros cu formă distinctă", "Legat strâns de istoria estului Estoniei"],
      en: ["Well-known World War II battlefield", "Part of the Sinimäed heights", "Important for remembrance tourism", "Geographically distinct hill landscape", "Closely tied to eastern Estonia's history"]
    },
    image: "/geo-images/estonia/sinimaed-battlefield.webp"
  },
  {
    id: "land-kumu-art-museum",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7994, 59.4377],
    name: {
      de: "Kumu-Kunstmuseum",
      hu: "Kumu Művészeti Múzeum",
      ro: "Muzeul de Artă Kumu",
      en: "Kumu Art Museum"
    },
    description: {
      de: "Das Kumu-Kunstmuseum ist das wichtigste Kunstmuseum Estlands und ein moderner Kulturanker in Tallinn. Das Gebäude selbst ist architektonisch auffällig und zieht Besucher sowohl wegen seiner Sammlung als auch wegen seines Designs an. Kumu zeigt estnische Kunst im europäischen Kontext und stärkt das Profil der Hauptstadt als Kulturort. Für SEO-Reisen nach Tallinn ist Kumu ein sehr starkes Landmark-Thema.",
      hu: "A Kumu Művészeti Múzeum Észtország legfontosabb művészeti múzeuma és Tallinn modern kulturális horgonya. Maga az épület is látványos, és a gyűjtemény mellett az építészet miatt is vonzza a látogatókat. A Kumu az észt művészetet európai összefüggésben mutatja be, és erősíti a főváros kulturális arculatát. Tallinn SEO-utazásainál a Kumu nagyon erős landmark téma.",
      ro: "Muzeul de Artă Kumu este cel mai important muzeu de artă din Estonia și o ancoră culturală modernă în Tallinn. Clădirea în sine este arhitectural remarcabilă și atrage vizitatori atât prin colecție, cât și prin design. Kumu prezintă arta estoniană în context european și întărește profilul capitalei ca oraș cultural. Pentru călătoriile SEO în Tallinn, Kumu este o temă foarte puternică.",
      en: "Kumu Art Museum is Estonia's most important art museum and a modern cultural anchor in Tallinn. The building itself is architecturally striking and attracts visitors for both its collection and its design. Kumu presents Estonian art in a European context and strengthens the capital's cultural profile. For Tallinn SEO travel, Kumu is a very strong landmark topic."
    },
    facts: {
      de: ["Größtes Kunstmuseum Estlands", "Wichtiger Teil des Tallinn-Kulturtourismus", "Moderne Architektur am Kadriorg-Rand", "Stark für Kunst- und Design-SEO", "Zentrale Sammlung estnischer Kunst"],
      hu: ["Észtország legnagyobb művészeti múzeuma", "Tallinn kulturális turizmusának fontos része", "Modern építészet Kadriorg szélén", "Erős művészeti és design SEO-téma", "Az észt művészet központi gyűjteménye"],
      ro: ["Cel mai mare muzeu de artă din Estonia", "Parte importantă a turismului cultural din Tallinn", "Arhitectură modernă la marginea Kadriorg", "Temă SEO puternică pentru artă și design", "Colecție centrală de artă estoniană"],
      en: ["Estonia's largest art museum", "Key part of Tallinn cultural tourism", "Modern architecture on the edge of Kadriorg", "Strong art and design SEO topic", "Central collection of Estonian art"]
    },
    image: "/geo-images/estonia/kumu-art-museum.webp"
  },
  {
    id: "land-estonian-national-museum",
    type: "landmark",
    parent: "ee-country",
    coords: [26.7378, 58.3990],
    name: {
      de: "Estnisches Nationalmuseum",
      hu: "Észt Nemzeti Múzeum",
      ro: "Muzeul Național al Estoniei",
      en: "Estonian National Museum"
    },
    description: {
      de: "Das Estnische Nationalmuseum in Tartu ist ein modernes Leitmuseum für Geschichte, Identität und Alltagskultur. Das Gebäude steht auf einem ehemaligen Militärgelände und verbindet Erinnerung mit zeitgenössischer Architektur. Die Ausstellungen machen das Museum zu einem zentralen Anziehungspunkt in Südestland. Für Tartu und Kulturreisen ist es ein bedeutender SEO-Schlüsselbegriff.",
      hu: "Az Észt Nemzeti Múzeum Tartu egyik modern zászlóshajója a történelem, identitás és mindennapi kultúra bemutatásában. Az épület egykori katonai területen áll, így az emlékezetet kortárs építészettel kapcsolja össze. Kiállításai miatt a múzeum Dél-Észtország központi vonzereje. Tartu és a kulturális utazások szempontjából fontos SEO-kulcsszó.",
      ro: "Muzeul Național al Estoniei din Tartu este un muzeu modern de referință pentru istorie, identitate și cultură cotidiană. Clădirea se află pe un fost teren militar, combinând memoria cu arhitectura contemporană. Expozițiile îl transformă într-un punct central de atracție în sudul Estoniei. Pentru Tartu și turism cultural, este un cuvânt-cheie SEO major.",
      en: "The Estonian National Museum in Tartu is a modern flagship museum for history, identity, and everyday culture. The building stands on a former military site, blending memory with contemporary architecture. Its exhibitions make the museum a central attraction in southern Estonia. For Tartu and cultural travel, it is a major SEO keyword."
    },
    facts: {
      de: ["Wichtigstes Museum für Estlands Identität", "Modernes Wahrzeichen in Tartu", "Auf ehemaligem Militärgelände gebaut", "Starkes Ziel für Kulturreisen", "Zentral für Tartu-SEO"],
      hu: ["Észtország identitásának legfontosabb múzeuma", "Modern jelkép Tartutban", "Egykori katonai területre épült", "Erős célpont kulturális utazásokhoz", "Központi kulcsszó Tartu SEO-hoz"],
      ro: ["Cel mai important muzeu pentru identitatea Estoniei", "Reper modern în Tartu", "Construit pe un fost teren militar", "Destinație puternică pentru turism cultural", "Cuvânt-cheie central pentru SEO-ul din Tartu"],
      en: ["Estonia's key identity museum", "A modern landmark in Tartu", "Built on a former military site", "Strong destination for cultural travel", "Central keyword for Tartu SEO"]
    },
    image: "/geo-images/estonia/estonian-national-museum.webp"
  },
  {
    id: "land-seaplane-harbour",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7330, 59.4539],
    name: {
      de: "Wasserflugzeug-Hafen",
      hu: "Vízirepülőgép-kikötő",
      ro: "Portul Hidroavioanelor",
      en: "Seaplane Harbour"
    },
    description: {
      de: "Der Seaplane Harbour in Tallinn gehört zu den kreativsten Museumsstandorten im Ostseeraum. In den historischen Hangars werden Seefahrt, Technik und Militärgeschichte mit modernen Ausstellungen präsentiert. Die Lage am Wasser macht das Erlebnis besonders stark und fotogen. Für Familien, Technikfans und Tallinn-SEO ist der Ort äußerst wertvoll.",
      hu: "A tallinni Vízirepülőgép-kikötő a Balti-térség egyik legkreatívabb múzeumi helyszíne. A történelmi hangárokban a tengeri hajózás, a technika és a katonai történelem modern kiállításokkal jelenik meg. A vízparti fekvés különösen erőssé és fotóssá teszi az élményt. Családoknak, technika-rajongóknak és Tallinn SEO-nak nagyon értékes hely.",
      ro: "Portul Hidroavioanelor din Tallinn este unul dintre cele mai creative spații muzeale din zona baltică. În hangarele istorice, navigația, tehnologia și istoria militară sunt prezentate prin expoziții moderne. Amplasarea la apă face experiența deosebit de puternică și fotogenică. Pentru familii, pasionați de tehnică și SEO-ul din Tallinn, locul este foarte valoros.",
      en: "The Seaplane Harbour in Tallinn is one of the most creative museum sites in the Baltic region. Historic hangars present maritime, technical, and military history through modern exhibitions. The waterfront setting makes the experience especially strong and photogenic. For families, tech fans, and Tallinn SEO, the site is highly valuable."
    },
    facts: {
      de: ["Maritimes Spitzenmuseum in Tallinn", "Historische Hangars am Wasser", "Stark für Familien und Technikfans", "Wichtiger Fotostandort", "Beliebtes Tallinn-Landmark"],
      hu: ["Kiemelkedő tengeri múzeum Tallinnban", "Történelmi hangárok a vízparton", "Erős családi és technikai vonzerő", "Fontos fotóhelyszín", "Népszerű tallinni landmark"],
      ro: ["Muzeu marin de top în Tallinn", "Hangare istorice pe malul apei", "Atracție puternică pentru familii și tehnică", "Loc foarte bun pentru fotografii", "Landmark popular al Tallinnului"],
      en: ["Top maritime museum in Tallinn", "Historic hangars on the waterfront", "Strong for families and tech fans", "Important photo location", "Popular Tallinn landmark"]
    },
    image: "/geo-images/estonia/seaplane-harbour.webp"
  },
  {
    id: "land-tallinn-tv-tower",
    type: "landmark",
    parent: "ee-country",
    coords: [24.8731, 59.4710],
    name: {
      de: "Tallinner Fernsehturm",
      hu: "Tallinni tévétorony",
      ro: "Turnul de televiziune Tallinn",
      en: "Tallinn TV Tower"
    },
    description: {
      de: "Der Tallinner Fernsehturm ist eines der sichtbarsten Wahrzeichen der Hauptstadt und ein starkes Aussichtsobjekt. Die Plattform eröffnet weite Blicke über Tallinn, den Finnischen Meerbusen und die bewaldete Umgebung. Gleichzeitig steht der Turm für moderne Technik und für die jüngere estnische Geschichte. Im SEO-Kontext ist er ein Schlüsselwort für Aussicht, Skyline und Tallinn.",
      hu: "A tallinni tévétorony a főváros egyik leglátványosabb jelképe és erős kilátóhelye. A kilátóplatform széles panorámát ad Tallinnra, a Finn-öbölre és az erdős környezetre. A torony egyben a modern technikát és az újabb észt történelmet is jelképezi. SEO-szempontból kulcsszó a panoráma, a skyline és Tallinn témákhoz.",
      ro: "Turnul de televiziune din Tallinn este unul dintre cele mai vizibile simboluri ale capitalei și un important punct de belvedere. Platforma oferă panorame largi asupra Tallinnului, Golfului Finlandei și împrejurimilor împădurite. În același timp, turnul simbolizează tehnologia modernă și istoria mai recentă a Estoniei. În SEO, este un cuvânt-cheie pentru panorame, skyline și Tallinn.",
      en: "The Tallinn TV Tower is one of the capital's most visible landmarks and a powerful viewpoint attraction. Its observation platform opens wide views over Tallinn, the Gulf of Finland, and the wooded surroundings. At the same time, the tower stands for modern engineering and Estonia's recent history. In SEO, it is a keyword for views, skyline, and Tallinn."
    },
    facts: {
      de: ["Hoher Aussichtsturm in Tallinn", "Blick über Stadt und Meer", "Symbol moderner estnischer Technik", "Beliebt bei Touristen und Familien", "Starkes Skyline-Motiv"],
      hu: ["Magas kilátótorony Tallinnban", "Kilátás a városra és a tengerre", "A modern észt technika szimbóluma", "Népszerű turisták és családok körében", "Erős skyline-motívum"],
      ro: ["Turn de belvedere înalt în Tallinn", "Vedere asupra orașului și mării", "Simbol al tehnologiei moderne estoniene", "Popular pentru turiști și familii", "Motiv puternic de skyline"],
      en: ["Tall viewpoint tower in Tallinn", "Views over city and sea", "Symbol of modern Estonian engineering", "Popular with tourists and families", "Strong skyline motif"]
    },
    image: "/geo-images/estonia/tallinn-tv-tower.webp"
  },
  {
    id: "land-kadriorg-art-museum",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7910, 59.4379],
    name: {
      de: "Kadriorg-Kunstmuseum",
      hu: "Kadriorg Művészeti Múzeum",
      ro: "Muzeul de Artă Kadriorg",
      en: "Kadriorg Art Museum"
    },
    description: {
      de: "Das Kadriorg-Kunstmuseum ist in einem barocken Schlossumfeld untergebracht und ergänzt Tallinns Kunstlandschaft auf elegante Weise. Die Sammlung zeigt europäische Kunst in einem historischen Rahmen, der den Museumsbesuch besonders atmosphärisch macht. Der Ort verbindet Palastarchitektur, Parkanlage und Kultur auf sehr SEO-taugliche Weise. Für Tallinn-Kulturreisen ist Kadriorg ein starker Name.",
      hu: "A Kadriorg Művészeti Múzeum barokk palota környezetében működik, és elegánsan egészíti ki Tallinn művészeti világát. A gyűjtemény európai művészetet mutat be történelmi térben, így a látogatás különösen hangulatos. A helyszín ötvözi a palotaépítészetet, a parkot és a kultúrát, ami SEO-szempontból is erős. Tallinn kulturális utazásaihoz Kadriorg erős név.",
      ro: "Muzeul de Artă Kadriorg funcționează într-un cadru baroc de palat și completează elegant peisajul artistic al Tallinnului. Colecția prezintă artă europeană într-un decor istoric, ceea ce face vizita deosebit de atmosferică. Locul combină arhitectura de palat, parcul și cultura într-un mod foarte potrivit pentru SEO. Pentru turismul cultural din Tallinn, Kadriorg este un nume puternic.",
      en: "Kadriorg Art Museum is housed in a baroque palace setting and elegantly complements Tallinn's art landscape. The collection presents European art in a historic frame, making the visit especially atmospheric. The site combines palace architecture, parkland, and culture in a very SEO-friendly way. For Tallinn cultural travel, Kadriorg is a strong name."
    },
    facts: {
      de: ["Barockes Museumsumfeld", "Teil des Kadriorg-Parks", "Europäische Kunst in historischem Rahmen", "Wichtig für Kunsttourismus in Tallinn", "Starkes Kultur-Keyword"],
      hu: ["Barokk múzeumi környezet", "A Kadriorg park része", "Európai művészet történelmi térben", "Fontos Tallinn művészeti turizmusában", "Erős kulturális kulcsszó"],
      ro: ["Cadru muzeal baroc", "Parte din parcul Kadriorg", "Artă europeană într-un spațiu istoric", "Important pentru turismul de artă din Tallinn", "Cuvânt-cheie cultural puternic"],
      en: ["Baroque museum setting", "Part of Kadriorg Park", "European art in a historic frame", "Important for Tallinn art tourism", "Strong cultural keyword"]
    },
    image: "/geo-images/estonia/kadriorg-art-museum.webp"
  },
  {
    id: "land-st-olafs-church",
    type: "landmark",
    parent: "ee-country",
    coords: [24.7490, 59.4375],
    name: {
      de: "Olavkirche",
      hu: "Szent Olaf-templom",
      ro: "Biserica Sfântul Olaf",
      en: "St Olaf's Church"
    },
    description: {
      de: "St Olaf's Church ist eines der bekanntesten Gotteshäuser in Tallinn und ein starkes Symbol der Altstadt. Der Turm dominiert über weite Teile des historischen Zentrums und macht die Kirche zu einem klaren Landmark-Punkt. Sie steht für mittelalterliche Stadtkultur, Sakralarchitektur und den vertikalen Charakter der Skyline. Für Tallinn-Suchanfragen ist die Olavkirche extrem relevant.",
      hu: "A Szent Olaf-templom Tallinn egyik legismertebb temploma és az óváros erős szimbóluma. Tornya az egész történelmi központ fölé magasodik, így a templom világos landmark-pont. A középkori városi kultúrát, a szakrális építészetet és a skyline függőleges karakterét képviseli. Tallinn-kereséseknél az Olav-templom rendkívül releváns.",
      ro: "Biserica Sfântul Olaf este una dintre cele mai cunoscute biserici din Tallinn și un simbol puternic al centrului vechi. Turnul domină o mare parte din centrul istoric, făcând biserica un punct de reper clar. Reprezintă cultura urbană medievală, arhitectura sacră și caracterul vertical al skyline-ului. Pentru căutările despre Tallinn, biserica Olaf este extrem de relevantă.",
      en: "St Olaf's Church is one of Tallinn's best-known churches and a strong symbol of the old town. Its tower dominates much of the historic center, making it a clear landmark point. It represents medieval urban culture, sacred architecture, and the vertical character of the skyline. For Tallinn searches, St Olaf's is extremely relevant."
    },
    facts: {
      de: ["Berühmte Kirche der Tallinner Altstadt", "Markanter hoher Turm", "Starkes Motiv für Skyline-Bilder", "Historisch mit Handelsstadt Tallinn verbunden", "Wichtiges Landmark für Stadtführungen"],
      hu: ["A tallinni óváros híres temploma", "Jellegzetes magas torony", "Erős skyline-fotó motívum", "Történelmileg kapcsolódik Tallinn kereskedővárosához", "Fontos landmark városnézésekhez"],
      ro: ["Biserică faimoasă din centrul vechi al Tallinnului", "Turn înalt și foarte vizibil", "Motiv puternic pentru imagini de skyline", "Legată istoric de orașul comercial Tallinn", "Landmark important pentru tururile orașului"],
      en: ["Famous church in Tallinn Old Town", "Distinctive tall tower", "Strong skyline photo motif", "Historically tied to Tallinn as a trading city", "Important landmark for city tours"]
    },
    image: "/geo-images/estonia/st-olafs-church.webp"
  },
  {
    id: "land-tartu-town-hall",
    type: "landmark",
    parent: "ee-country",
    coords: [26.7228, 58.3806],
    name: {
      de: "Rathaus Tartu",
      hu: "Tartu városháza",
      ro: "Primăria din Tartu",
      en: "Tartu Town Hall"
    },
    description: {
      de: "Das Tartu Town Hall ist eines der elegantesten Gebäude auf dem Rathausplatz und ein Kernstück der Innenstadt. Es repräsentiert die bürgerliche Geschichte der Universitätsstadt und ist zugleich ein wichtiges Fotomotiv. Der Platz rund um das Rathaus verbindet Gastronomie, Kultur und urbanes Leben auf engem Raum. Für Tartu-SEO ist das Rathaus ein zentraler Landmark-Begriff.",
      hu: "A Tartu városháza a főtér egyik legszebb épülete és a belváros kulcseleme. A város polgári történelmét képviseli, és egyben fontos fotómotívum is. A tér a városháza körül rövid távolságon belül ötvözi a gasztronómiát, a kultúrát és a városi életet. Tartu SEO-ban a városháza központi landmark-kifejezés.",
      ro: "Primăria din Tartu este una dintre cele mai elegante clădiri din piața centrală și un element-cheie al centrului orașului. Reprezintă istoria burgheză a orașului universitar și este totodată un subiect foto important. Piața din jurul primăriei combină gastronomia, cultura și viața urbană pe o suprafață mică. Pentru SEO-ul din Tartu, primăria este un termen landmark central.",
      en: "Tartu Town Hall is one of the most elegant buildings on the Town Hall Square and a core part of the city center. It represents the civic history of the university city and is also a major photo subject. The square around it combines food, culture, and urban life in a compact area. For Tartu SEO, the town hall is a central landmark keyword."
    },
    facts: {
      de: ["Zentrum des Tartu-Rathauses", "Prägt den Rathausplatz", "Wichtiges Fotomotiv der Universitätsstadt", "Stark für Gastronomie- und Kultur-SEO", "Symbol des bürgerlichen Tartu"],
      hu: ["A Tartu főtér központi épülete", "Meghatározza a városháza teret", "Fontos fotómotívum az egyetemi városban", "Erős gasztronómiai és kulturális SEO-téma", "A polgári Tartu szimbóluma"],
      ro: ["Clădire centrală a Pieței Primăriei din Tartu", "Definește piața centrală", "Subiect foto important al orașului universitar", "Puternic pentru SEO de gastronomie și cultură", "Simbol al Tartu-ului burghez"],
      en: ["Centerpiece of Tartu Town Hall Square", "Defines the square", "Major photo subject in the university city", "Strong for food and culture SEO", "Symbol of civic Tartu"]
    },
    image: "/geo-images/estonia/tartu-town-hall.webp"
  },
  {
    id: "land-open-air-museum",
    type: "landmark",
    parent: "ee-country",
    coords: [24.6578, 59.4525],
    name: {
      de: "Estnisches Freilichtmuseum",
      hu: "Észt Szabadtéri Múzeum",
      ro: "Muzeul Estonian în Aer Liber",
      en: "Estonian Open Air Museum"
    },
    description: {
      de: "Das Estnische Freilichtmuseum zeigt traditionelle ländliche Architektur und Alltagskultur in einer weitläufigen Anlage. Besucher erleben hier Bauernhöfe, Windmühlen und historische Wohnformen aus verschiedenen Regionen Estlands. Der Ort ist besonders stark für Familien, Schulgruppen und Kulturreisende. Als Landmark für Tallinn verbindet das Museum Bildung, Nostalgie und SEO-Wert.",
      hu: "Az Észt Szabadtéri Múzeum a hagyományos vidéki építészetet és mindennapi kultúrát mutatja be nagy területen. A látogatók különböző észt régiók parasztházait, szélmalmait és történelmi lakóformáit ismerhetik meg. A helyszín különösen erős családok, iskolai csoportok és kulturális utazók számára. Tallinn landmarkként a múzeum egyszerre oktató, nosztalgikus és SEO-értékű.",
      ro: "Muzeul Estonian în Aer Liber prezintă arhitectura rurală tradițională și cultura cotidiană într-un ansamblu extins. Vizitatorii descoperă gospodării, mori de vânt și forme istorice de locuire din diferite regiuni ale Estoniei. Locul este foarte potrivit pentru familii, grupuri școlare și turiști culturali. Ca landmark pentru Tallinn, muzeul combină educația, nostalgia și valoarea SEO.",
      en: "The Estonian Open Air Museum showcases traditional rural architecture and everyday culture in a large outdoor complex. Visitors see farmsteads, windmills, and historic living forms from different regions of Estonia. The place is especially strong for families, school groups, and cultural travelers. As a Tallinn landmark, the museum combines education, nostalgia, and SEO value."
    },
    facts: {
      de: ["Freilichtmuseum bei Tallinn", "Zeigt ländliche estnische Architektur", "Beliebt bei Familien und Schulen", "Stark für Kultur- und Bildungs-SEO", "Großes Gelände mit historischen Bauten"],
      hu: ["Tallinn melletti szabadtéri múzeum", "Bemutatja a vidéki észt építészetet", "Népszerű családok és iskolák körében", "Erős kulturális és oktatási SEO", "Nagy terület történelmi épületekkel"],
      ro: ["Muzeu în aer liber lângă Tallinn", "Prezintă arhitectura rurală estoniană", "Popular printre familii și școli", "Puternic pentru SEO cultural și educațional", "Teren mare cu clădiri istorice"],
      en: ["Open-air museum near Tallinn", "Shows rural Estonian architecture", "Popular with families and schools", "Strong for culture and education SEO", "Large grounds with historic buildings"]
    },
    image: "/geo-images/estonia/open-air-museum.webp"
  }
];

export const estoniaNature: POI[] = [
  {
    id: "nat-saaremaa",
    type: "landmark",
    parent: "ee-country",
    coords: [22.5, 58.4],
    name: {
      de: "Saaremaa-Insel",
      hu: "Saaremaa-sziget",
      ro: "Insula Saaremaa",
      en: "Saaremaa Island"
    },
    description: {
      de: "Größte estnische Insel, Kuressaare-Burg.",
      hu: "Legnagyobb észt sziget, Kuressaare vár.",
      ro: "Cea mai mare insulă estoniană, castelul Kuressaare.",
      en: "Largest Estonian island, Kuressaare Castle."
    },
    facts: {
      de: ["Größte Insel Estlands", "Kuressaare-Burg"],
      hu: ["Észtország legnagyobb szigete", "Kuressaare vár"],
      ro: ["Cea mai mare insulă a Estoniei", "Castelul Kuressaare"],
      en: ["Largest island in Estonia", "Kuressaare Castle"]
    },
    image: "/geo-images/estonia/saaremaa.webp"
  },
  {
    id: "nat-hiiumaa",
    type: "landmark",
    parent: "ee-country",
    coords: [22.6, 58.9],
    name: {
      de: "Hiiumaa-Insel",
      hu: "Hiiumaa-sziget + Kõpu világítótorony",
      ro: "Insula Hiiumaa + farul Kõpu",
      en: "Hiiumaa Island + Kõpu Lighthouse"
    },
    description: {
      de: "Mit dem 1504 erbauten, zweitältesten Leuchtturm.",
      hu: "1504 második legrégebbi VT.",
      ro: "Cu farul din 1504, al doilea cel mai vechi.",
      en: "With the 1504 lighthouse, the second-oldest."
    },
    facts: {
      de: ["Leuchtturm von 1504", "Zweitältester Leuchtturm"],
      hu: ["1504-es világítótorony", "Második legrégebbi VT"],
      ro: ["Far din 1504", "Al doilea cel mai vechi far"],
      en: ["1504 lighthouse", "Second-oldest lighthouse"]
    },
    image: "/geo-images/estonia/hiiumaa-kopu-lighthouse.webp"
  },
  {
    id: "nat-soomaa",
    type: "landmark",
    parent: "ee-country",
    coords: [25.0, 58.5],
    name: {
      de: "Soomaa-Nationalpark",
      hu: "Soomaa NP",
      ro: "Parcul Național Soomaa",
      en: "Soomaa National Park"
    },
    description: {
      de: "Moorgebiet mit der Frühlingsflut als 'fünfte Jahreszeit'.",
      hu: "Mocsár 'ötödik évszak' tavaszi árvíz.",
      ro: "Mlaștină cu inundații de primăvară, 'al cincilea anotimp'.",
      en: "Bogland with spring floods, the 'fifth season'."
    },
    facts: {
      de: ["Moorgebiet", "Fünfte Jahreszeit"],
      hu: ["Mocsárvidék", "Ötödik évszak"],
      ro: ["Mlaștină", "Al cincilea anotimp"],
      en: ["Bogland", "Fifth season"]
    },
    image: "/geo-images/estonia/soomaa.webp"
  },
  {
    id: "nat-peipus",
    type: "lake",
    parent: "ee-country",
    coords: [27.5, 58.7],
    name: {
      de: "Peipussee",
      hu: "Peipus-tó",
      ro: "Lacul Peipus",
      en: "Lake Peipus"
    },
    description: {
      de: "Fünftgrößter See Europas an der russischen Grenze.",
      hu: "Európa 5. legnagyobb tava, orosz határnál.",
      ro: "Al cincilea cel mai mare lac european, la granița rusă.",
      en: "Europe's 5th-largest lake, on the Russian border."
    },
    facts: {
      de: ["5. größter See Europas", "Russische Grenze"],
      hu: ["Európa 5. legnagyobb tava", "Orosz határ"],
      ro: ["Al 5-lea lac ca mărime din Europa", "Granița cu Rusia"],
      en: ["5th-largest lake in Europe", "Russian border"]
    },
    image: "/geo-images/estonia/peipus.webp"
  },
  {
    id: "nat-emajogi",
    type: "river",
    parent: "ee-country",
    coords: [26.73, 58.38],
    name: {
      de: "Emajõgi",
      hu: "Emajõgi folyó",
      ro: "Râul Emajõgi",
      en: "Emajõgi River"
    },
    description: {
      de: "Mutterfluss, der durch Tartu fließt.",
      hu: "Anya-folyó, Tartut szeli át.",
      ro: "Râul-mamă care traversează Tartu.",
      en: "The mother river flowing through Tartu."
    },
    facts: {
      de: ["Fließt durch Tartu", "Mutterfluss"],
      hu: ["Tartun áthalad", "Anya-folyó"],
      ro: ["Trece prin Tartu", "Râu-mamă"],
      en: ["Flows through Tartu", "Mother river"]
    },
    image: "/geo-images/estonia/emajogi.webp"
  },
  {
    id: "nat-vilsandi",
    type: "island",
    parent: "ee-country",
    coords: [21.85, 58.38],
    name: {
      de: "Vilsandi-Nationalpark",
      hu: "Vilsandi Nemzeti Park",
      ro: "Parcul Național Vilsandi",
      en: "Vilsandi National Park"
    },
    description: {
      de: "Čltester estnischer Nationalpark, Vogelinsel.",
      hu: "Észtország legrégebbi NP-je, madársziget.",
      ro: "Cel mai vechi parc național estonian, insulă a păsărilor.",
      en: "Estonia's oldest national park, a bird island."
    },
    facts: {
      de: ["Čltester Nationalpark Estlands", "Vogelinsel"],
      hu: ["Észtország legrégebbi NP-je", "Madársziget"],
      ro: ["Cel mai vechi parc național estonian", "Insulă a păsărilor"],
      en: ["Estonia's oldest national park", "Bird island"]
    },
    image: "/geo-images/estonia/vilsandi.webp"
  },
  {
    id: "nat-matsalu",
    type: "landmark",
    parent: "ee-country",
    coords: [23.75, 58.75],
    name: {
      de: "Matsalu-Nationalpark",
      hu: "Matsalu Nemzeti Park",
      ro: "Parcul Național Matsalu",
      en: "Matsalu National Park"
    },
    description: {
      de: "Ramsar-Feuchtgebiet, bekannt für Kranichzug.",
      hu: "Ramsar vizes terület, daruvonulásáról híres.",
      ro: "Zona umedă Ramsar, faimoasă pentru migrația cocorilor.",
      en: "Ramsar wetland, known for crane migration."
    },
    facts: {
      de: ["Ramsar-Gebiet", "Kranichzug"],
      hu: ["Ramsar vizes terület", "Daruvonulás"],
      ro: ["Zonă umedă Ramsar", "Migrația cocorilor"],
      en: ["Ramsar wetland", "Crane migration"]
    },
    image: "/geo-images/estonia/matsalu.webp"
  },
  {
    id: "nat-suur-munamagi",
    type: "mountain",
    parent: "ee-country",
    coords: [27.0526, 57.7135],
    name: { de: "Suur Munamägi", hu: "Suur Munamägi", ro: "Suur Munamägi", en: "Suur Munamägi" },
    description: {
      de: "Suur Munamägi ist der höchste Punkt Estlands und ein klassisches Ziel für Natur- und Aussichtstourismus. Der Berg liegt im Haanja-Hügelland und bietet einen weiten Blick über die bewaldete Landschaft des Südostens. Trotz seiner moderaten Höhe hat der Ort eine starke Symbolkraft für die nationale Geografie. Für SEO-Themen zu Estlands Bergen ist Suur Munamägi unverzichtbar.",
      hu: "A Suur Munamägi Észtország legmagasabb pontja és klasszikus természet- és kilátóhely. A hegy a Haanja-dombvidéken fekszik, és messze ellátni róla a délkeleti erdős tájra. Bár magassága mérsékelt, erős szimbolikus jelentőséggel bír az ország földrajzában. Az észt hegyekről szóló SEO-témákban Suur Munamägi kihagyhatatlan.",
      ro: "Suur Munamägi este cel mai înalt punct al Estoniei și o destinație clasică pentru natură și panorame. Muntele se află în zona deluroasă Haanja și oferă vedere largă asupra peisajului împădurit din sud-est. Deși nu are o altitudine foarte mare, are o puternică valoare simbolică pentru geografia națională. Pentru temele SEO despre munții Estoniei, Suur Munamägi este esențial.",
      en: "Suur Munamägi is the highest point in Estonia and a classic destination for nature and viewpoint tourism. The hill sits in the Haanja uplands and offers wide views over the forested southeastern landscape. Although modest in absolute height, it carries strong symbolic value in national geography. For SEO topics about Estonia's mountains, Suur Munamägi is essential."
    },
    facts: {
      de: ["Höchster Punkt Estlands", "Liegt im Haanja-Hügelland", "Beliebter Aussichtspunkt", "Starkes Symbol der estnischen Natur", "Wichtiger Suchbegriff für Wanderreisen"],
      hu: ["Észtország legmagasabb pontja", "A Haanja-dombvidéken fekszik", "Népszerű kilátópont", "Erős szimbóluma az észt természetnek", "Fontos kulcsszó túrautazásokhoz"],
      ro: ["Cel mai înalt punct al Estoniei", "Situat în zona deluroasă Haanja", "Punct de belvedere popular", "Simbol important al naturii estoniene", "Cuvânt-cheie relevant pentru drumeții"],
      en: ["Estonia's highest point", "Located in the Haanja uplands", "Popular viewpoint", "Strong symbol of Estonian nature", "Key keyword for hiking travel"]
    },
    image: "/geo-images/estonia/suur-munamagi.webp"
  },
  {
    id: "nat-emumagi",
    type: "mountain",
    parent: "ee-country",
    coords: [26.5857, 58.9777],
    name: { de: "Emumägi", hu: "Emumägi", ro: "Emumägi", en: "Emumägi" },
    description: {
      de: "Emumägi ist einer der bekanntesten Hügel Nordostestlands und ein beliebtes Ziel für leichte Wanderungen. Die Region rund um den Hügel ist offen, landwirtschaftlich geprägt und bietet schöne Fernblicke. Obwohl Emumägi kein Hochgebirge ist, zählt er zu den wichtigsten Höhenzügen des Landes. Für Reiseführer über estnische Aussichtspunkte ist der Name sehr nützlich.",
      hu: "Az Emumägi Északkelet-Észtország egyik legismertebb dombja, és kedvelt célpont könnyű túrákhoz. A környező térség nyílt, mezőgazdasági jellegű, és szép távoli panorámákat kínál. Bár Emumägi nem magas hegy, az ország egyik legfontosabb magaslata közé tartozik. Az észt kilátópontokat bemutató útikönyvekben ez egy hasznos név.",
      ro: "Emumägi este unul dintre cele mai cunoscute dealuri din nord-estul Estoniei și o destinație populară pentru drumeții ușoare. Zona din jur este deschisă, agricolă și oferă panorame frumoase la distanță. Deși nu este un munte înalt, Emumägi se numără printre cele mai importante altitudini ale țării. Pentru ghidurile despre puncte de belvedere din Estonia, numele este foarte util.",
      en: "Emumägi is one of the best-known hills in northeastern Estonia and a popular destination for easy hikes. The surrounding area is open, agricultural, and offers pleasant long-distance views. Although not a high mountain, Emumägi is among the country's most important elevations. For guides to Estonian viewpoints, the name is very useful."
    },
    facts: {
      de: ["Bekannter Hügel in Nordost-Estland", "Beliebt für leichte Wanderungen", "Offene Agrarlandschaft rundherum", "Guter Aussichtspunkt", "Relevanter Begriff für Outdoor-SEO"],
      hu: ["Ismert domb Északkelet-Észtországban", "Népszerű könnyű túrákra", "Nyílt mezőgazdasági táj veszi körül", "Jó kilátópont", "Fontos outdoor SEO-kifejezés"],
      ro: ["Deal cunoscut în nord-estul Estoniei", "Popular pentru drumeții ușoare", "Înconjurat de peisaj agricol deschis", "Punct de belvedere bun", "Termen relevant pentru SEO outdoor"],
      en: ["Well-known hill in northeastern Estonia", "Popular for easy hikes", "Surrounded by open farmland", "Good viewpoint", "Relevant outdoor SEO term"]
    },
    image: "/geo-images/estonia/emumagi.webp"
  },
  {
    id: "nat-vortsjarv",
    type: "lake",
    parent: "ee-country",
    coords: [26.0300, 58.2800],
    name: { de: "Võrtsjärv", hu: "Võrtsjärv", ro: "Lacul Võrtsjärv", en: "Lake Võrtsjärv" },
    description: {
      de: "Võrtsjärv ist der größte vollständig in Estland liegende See und ein zentrales Gewässer für die Binnenlandschaft. Der See ist wichtig für Fischerei, Naturbeobachtung und regionale Identität. Seine offenen Ufer und das sanfte Umland machen ihn zu einem starken Ziel für Erholung und Landschaftsfotografie. Für SEO-Inhalte über estnische Seen ist Võrtsjärv ein Schlüsselname.",
      hu: "A Võrtsjärv Észtország legnagyobb, teljes egészében az ország területén fekvő tava és a belső táj egyik központi vízfelülete. A tó fontos a halászat, a természetmegfigyelés és a regionális identitás szempontjából. Nyílt partjai és a lágy környező táj miatt erős célpont a pihenés és tájfotózás számára. Az észt tavakról szóló SEO-tartalmakban Võrtsjärv kulcsnév.",
      ro: "Võrtsjärv este cel mai mare lac aflat complet în Estonia și un corp de apă central pentru peisajul continental. Lacul este important pentru pescuit, observarea naturii și identitatea regională. Țărmurile deschise și împrejurimile line îl fac o destinație bună pentru recreere și fotografie de peisaj. Pentru conținutul SEO despre lacurile estoniene, Võrtsjärv este un nume-cheie.",
      en: "Lake Võrtsjärv is the largest lake entirely within Estonia and a central water body in the inland landscape. The lake matters for fishing, nature watching, and regional identity. Its open shores and gentle surroundings make it a strong destination for recreation and landscape photography. For SEO content about Estonian lakes, Võrtsjärv is a key name."
    },
    facts: {
      de: ["Größter See vollständig in Estland", "Wichtig für Fischerei und Natur", "Offene Uferlandschaften", "Beliebt bei Fotografie und Erholung", "Starkes Keyword für Seenreisen"],
      hu: ["A legnagyobb, teljesen Észtországban fekvő tó", "Fontos a halászat és természet miatt", "Nyílt partszakaszok jellemzik", "Népszerű fotózásra és pihenésre", "Erős kulcsszó tóutazásokhoz"],
      ro: ["Cel mai mare lac aflat integral în Estonia", "Important pentru pescuit și natură", "Peisaje de țărm deschise", "Popular pentru fotografie și relaxare", "Cuvânt-cheie puternic pentru turismul lacustru"],
      en: ["Largest lake fully within Estonia", "Important for fishing and nature", "Open shoreline landscapes", "Popular for photography and relaxation", "Strong keyword for lake travel"]
    },
    image: "/geo-images/estonia/vortsjarv.webp"
  },
  {
    id: "nat-puhajarv",
    type: "lake",
    parent: "ee-country",
    coords: [26.4490, 58.0560],
    name: { de: "Pühajärv", hu: "Pühajärv", ro: "Lacul Pühajärv", en: "Lake Pühajärv" },
    description: {
      de: "Pühajärv liegt bei Otepää und gehört zu den beliebtesten Seen für Urlaub, Baden und Winteraktivitäten. Der See ist landschaftlich reizvoll, gut erreichbar und eng mit der Ferienregion Südestlands verbunden. Im Sommer ist er ein klassisches Ziel für Familien und Aktivurlauber. Als SEO-See für Otepää und den südlichen Naturtourismus ist Pühajärv besonders stark.",
      hu: "A Pühajärv Otepää közelében fekszik, és az egyik legnépszerűbb tó nyaraláshoz, fürdéshez és téli programokhoz. A tó tájképi szempontból vonzó, jól megközelíthető és szorosan kapcsolódik Dél-Észtország üdülőrégiójához. Nyáron klasszikus családi és aktív pihenési célpont. SEO-tóként Otepää és a déli természetjárás szempontjából különösen erős.",
      ro: "Pühajärv se află lângă Otepää și este unul dintre cele mai populare lacuri pentru vacanțe, înot și activități de iarnă. Lacul este pitoresc, ușor accesibil și strâns legat de regiunea de vacanță din sudul Estoniei. Vara este o destinație clasică pentru familii și turiști activi. Ca lac SEO pentru Otepää și turismul de natură din sud, Pühajärv este foarte puternic.",
      en: "Pühajärv lies near Otepää and is one of the most popular lakes for holidays, swimming, and winter activities. The lake is scenic, easy to reach, and closely tied to southern Estonia's holiday region. In summer it is a classic destination for families and active travelers. As an SEO lake for Otepää and southern nature tourism, Pühajärv is especially strong."
    },
    facts: {
      de: ["Liegt bei Otepää", "Beliebt für Bade- und Wintertourismus", "Teil der Südestland-Ferienregion", "Gut erreichbar und landschaftlich attraktiv", "Stark für Familienreisen"],
      hu: ["Otepää mellett található", "Népszerű fürdésre és téli turizmusra", "A dél-észt üdülőrégió része", "Jól megközelíthető és szép tájban fekszik", "Erős családi utazási célpont"],
      ro: ["Situat lângă Otepää", "Popular pentru turism de vară și iarnă", "Parte din regiunea de vacanță din sudul Estoniei", "Ușor accesibil și atractiv peisagistic", "Destinație puternică pentru familii"],
      en: ["Located near Otepää", "Popular for summer and winter tourism", "Part of southern Estonia's holiday region", "Easy to reach and scenic", "Strong destination for families"]
    },
    image: "/geo-images/estonia/puhajarv.webp"
  },
  {
    id: "nat-narva-river",
    type: "river",
    parent: "ee-country",
    coords: [28.1985, 59.3750],
    name: { de: "Narva", hu: "Narva folyó", ro: "Râul Narva", en: "Narva River" },
    description: {
      de: "Der Narva-Fluss bildet einen der markantesten Natur- und Grenzräume Estlands. Er verbindet den Peipussee mit dem Finnischen Meerbusen und trennt Estland von Russland. Entlang des Flusses liegen Narva, Kraftwerksanlagen und starke historische Erinnerungsorte. Für Geografie, Grenzgeschichte und Wasserlandschaften ist der Narva ein zentraler Name.",
      hu: "A Narva folyó Észtország egyik legjellegzetesebb természeti és határtérsége. Összeköti a Peipus-tavat a Finn-öböllel, és elválasztja Észtországot Oroszországtól. A folyó mentén Narva városa, erőművek és erős történelmi emlékhelyek találhatók. Földrajz, határtörténelem és vízi tájak szempontjából a Narva központi név.",
      ro: "Râul Narva formează una dintre cele mai distincte zone naturale și de frontieră ale Estoniei. Leagă lacul Peipus de Golful Finlandei și separă Estonia de Rusia. De-a lungul râului se află orașul Narva, instalații energetice și locuri istorice puternice. Pentru geografie, istoria frontierei și peisaje acvatice, Narva este un nume central.",
      en: "The Narva River forms one of Estonia's most distinctive natural and border landscapes. It connects Lake Peipus to the Gulf of Finland and separates Estonia from Russia. Along the river sit Narva, power infrastructure, and strong historic memorial sites. For geography, border history, and water landscapes, Narva is a central name."
    },
    facts: {
      de: ["Grenzfluss zu Russland", "Verbindet Peipussee und Finnischen Meerbusen", "Wichtig für Energie- und Industriegeschichte", "Prägt die Stadt Narva", "Starkes Geografie-Keyword"],
      hu: ["Határfolyó Oroszország felé", "Összeköti a Peipus-tavat és a Finn-öblöt", "Fontos az energia- és ipartörténetben", "Meghatározza Narva városát", "Erős földrajzi kulcsszó"],
      ro: ["Râu de frontieră cu Rusia", "Leagă lacul Peipus de Golful Finlandei", "Important pentru istoria energiei și industriei", "Definește orașul Narva", "Cuvânt-cheie geografic puternic"],
      en: ["Border river with Russia", "Connects Lake Peipus and the Gulf of Finland", "Important in energy and industrial history", "Shapes the city of Narva", "Strong geography keyword"]
    },
    image: "/geo-images/estonia/narva-river.webp"
  },
  {
    id: "nat-naissaar",
    type: "island",
    parent: "ee-country",
    coords: [24.5590, 59.5125],
    name: { de: "Naissaar", hu: "Naissaar", ro: "Naissaar", en: "Naissaar" },
    description: {
      de: "Naissaar liegt vor Tallinn und verbindet Natur, Militärgeschichte und Inselruhe auf engem Raum. Die Insel ist bekannt für ihre Kiefernwälder, Strände und historischen Küstenbefestigungen. Heute ist sie ein spannendes Ziel für Tagesausflüge und Naturentdeckung. Für Tallinn-nahe Inselrouten ist Naissaar ein besonders attraktiver Suchbegriff.",
      hu: "Naissaar Tallinn előtt fekszik, és kis területen ötvözi a természetet, a katonai múltat és a szigeti nyugalmat. A sziget fenyőerdőiről, strandjairól és történelmi parti erődítményeiről ismert. Ma izgalmas célpont egynapos kirándulásokhoz és természetfelfedezéshez. Tallinn-közeli szigetútvonalakhoz Naissaar különösen vonzó kulcsszó.",
      ro: "Naissaar se află în fața Tallinnului și combină natura, istoria militară și liniștea insulară într-un spațiu mic. Insula este cunoscută pentru pădurile de pini, plaje și fortificațiile costiere istorice. Astăzi este o destinație interesantă pentru excursii de o zi și explorare în natură. Pentru rutele insulare din apropierea Tallinnului, Naissaar este un termen foarte atractiv.",
      en: "Naissaar sits off Tallinn and combines nature, military history, and island calm in one compact place. The island is known for pine forests, beaches, and historic coastal fortifications. Today it is a compelling destination for day trips and nature exploration. For Tallinn-adjacent island routes, Naissaar is a particularly attractive search term."
    },
    facts: {
      de: ["Insel nahe Tallinn", "Kiefernwald und Küste", "Historische Militäranlagen", "Beliebt für Tagesausflüge", "Starkes Natur- und Geschichtsmotiv"],
      hu: ["Tallinn közeli sziget", "Fenyőerdő és partvidék", "Történelmi katonai létesítmények", "Népszerű egynapos kirándulásra", "Erős természet- és történelmi motívum"],
      ro: ["Insulă aproape de Tallinn", "Păduri de pini și coastă", "Fortificații militare istorice", "Populară pentru excursii de o zi", "Motiv puternic de natură și istorie"],
      en: ["Island near Tallinn", "Pine forest and coastline", "Historic military installations", "Popular for day trips", "Strong nature and history motif"]
    },
    image: "/geo-images/estonia/naissaar.webp"
  },
  {
    id: "nat-ruhnu",
    type: "island",
    parent: "ee-country",
    coords: [23.2550, 57.7990],
    name: { de: "Ruhnu", hu: "Ruhnu", ro: "Ruhnu", en: "Ruhnu" },
    description: {
      de: "Ruhnu ist eine abgelegene Insel im Golf von Riga mit sehr eigenständigem Charakter. Die kleine Gemeinschaft, die Strände und die ruhige Natur geben der Insel einen besonderen Charme. Ruhnu ist ideal für Reisende, die Einsamkeit, Inselleben und ursprüngliche Küstenlandschaften suchen. Im SEO-Kontext steht Ruhnu für entdeckungsorientierte Estland-Reisen.",
      hu: "Ruhnu egy távoli sziget a Rigai-öbölben, nagyon sajátos karakterrel. A kis közösség, a strandok és a csendes természet különleges bájt adnak a szigetnek. Ruhnu ideális azoknak az utazóknak, akik magányt, szigetlétet és eredeti tengerparti tájakat keresnek. SEO-szempontból Ruhnu az felfedező jellegű észt utazásokat jelenti.",
      ro: "Ruhnu este o insulă îndepărtată din Golful Riga, cu un caracter foarte distinct. Comunitatea mică, plajele și natura liniștită îi oferă un farmec aparte. Ruhnu este ideală pentru călători care caută singurătate, viață insulară și peisaje costiere autentice. În SEO, Ruhnu înseamnă călătorii de descoperire în Estonia.",
      en: "Ruhnu is a remote island in the Gulf of Riga with a very distinct character. The small community, beaches, and quiet nature give the island a special charm. Ruhnu is ideal for travelers seeking solitude, island life, and authentic coastal landscapes. In SEO terms, Ruhnu stands for discovery-oriented Estonia travel."
    },
    facts: {
      de: ["Abgelegene Insel im Golf von Riga", "Kleine Gemeinschaft mit starkem Inselcharakter", "Beliebt für Ruhe und Naturerlebnis", "Interessant für Entdeckerreisen", "Wichtiger Name für Insel-SEO"],
      hu: ["Távoli sziget a Rigai-öbölben", "Kis közösség erős szigetkarakterrel", "Népszerű nyugalomra és természetre", "Érdekes felfedező utakhoz", "Fontos kulcsszó a sziget SEO-ban"],
      ro: ["Insulă îndepărtată în Golful Riga", "Comunitate mică cu caracter insular puternic", "Populară pentru liniște și natură", "Interesantă pentru călătorii de descoperire", "Nume important pentru SEO-ul insular"],
      en: ["Remote island in the Gulf of Riga", "Small community with strong island character", "Popular for peace and nature experiences", "Interesting for discovery trips", "Important island SEO term"]
    },
    image: "/geo-images/estonia/ruhnu.webp"
  },
  {
    id: "nat-alutaguse-forest",
    type: "forest",
    parent: "ee-country",
    coords: [27.1770, 59.1290],
    name: { de: "Alutaguse-Wald", hu: "Alutaguse-erdő", ro: "Pădurea Alutaguse", en: "Alutaguse Forest" },
    description: {
      de: "Der Alutaguse-Wald steht für die große, stille Waldlandschaft Ostestlands. Das Gebiet ist reich an Mooren, Wildtieren und weiten Forstflächen und gilt als einer der naturnahsten Räume des Landes. Für Vogelbeobachtung, Outdoor-Touren und Natur-SEO bietet der Wald starke Inhalte. Alutaguse vermittelt das klassische Bild von Estland als Wald- und Moorland.",
      hu: "Az Alutaguse-erdő Kelet-Észtország nagy, csendes erdővilágát képviseli. A terület gazdag mocsarakban, vadállatokban és kiterjedt erdőségekben, ezért az ország egyik legtermészetközelibb térsége. Madármegfigyeléshez, outdoor túrákhoz és természet SEO-hoz erős tartalom. Az Alutaguse jól mutatja Észtország erdős és mocsaras arculatát.",
      ro: "Pădurea Alutaguse reprezintă peisajul forestier vast și liniștit din estul Estoniei. Zona este bogată în mlaștini, animale sălbatice și suprafețe întinse de pădure, fiind una dintre cele mai naturale regiuni ale țării. Oferă conținut puternic pentru observarea păsărilor, tururi outdoor și SEO de natură. Alutaguse arată Estonia ca țară a pădurilor și mlaștinilor.",
      en: "Alutaguse Forest represents the vast, quiet woodland landscape of eastern Estonia. The area is rich in bogs, wildlife, and extensive forest cover, making it one of the country's most nature-oriented regions. It offers strong material for birdwatching, outdoor tours, and nature SEO. Alutaguse captures the classic image of Estonia as a land of forests and bogs."
    },
    facts: {
      de: ["Großes Waldgebiet in Ostestland", "Reich an Wildtieren und Mooren", "Beliebt für Natur- und Vogelbeobachtung", "Typisches Bild von Estlands Waldland", "Starkes Keyword für Outdoor-Inhalte"],
      hu: ["Nagy erdőterület Kelet-Észtországban", "Gazdag vadállatokban és mocsarakban", "Népszerű természet- és madármegfigyelésre", "Jellemző az észt erdős tájra", "Erős kulcsszó outdoor tartalmakhoz"],
      ro: ["Zonă forestieră mare în estul Estoniei", "Bogată în animale sălbatice și mlaștini", "Populară pentru natură și birdwatching", "Imagine tipică a Estoniei împădurite", "Cuvânt-cheie puternic pentru conținut outdoor"],
      en: ["Large forest area in eastern Estonia", "Rich in wildlife and bogs", "Popular for nature and birdwatching", "Typical image of Estonia's woodland landscape", "Strong keyword for outdoor content"]
    },
    image: "/geo-images/estonia/alutaguse-forest.webp"
  },
  {
    id: "port-tallinn",
    type: "port",
    parent: "ee-country",
    coords: [24.7586, 59.4438],
    name: {
      de: "Hafen Tallinn",
      hu: "Tallinn kikötője",
      ro: "Portul Tallinn",
      en: "Port of Tallinn"
    },
    description: {
      de: "Der Hafen von Tallinn ist der wichtigste Seehafen Estlands und ein zentrales Tor zur Ostsee. Hier treffen Fährverkehr, Kreuzfahrten und Frachtlogistik aufeinander, was den Standort wirtschaftlich besonders stark macht. Für Tallinn und Estland insgesamt ist der Hafen ein Schlüsselthema in Tourismus und Handel. Als SEO-Begriff verbindet er Stadt, Meer und Mobilität auf sehr klare Weise.",
      hu: "A tallinni kikötő Észtország legfontosabb tengeri kikötője és a Balti-tenger egyik fő kapuja. Itt találkozik a kompforgalom, a hajózás és az áruszállítás, ami gazdaságilag különösen fontossá teszi a helyszínt. Tallinn és egész Észtország számára a kikötő kulcstéma a turizmusban és a kereskedelemben. SEO-kulcsszóként a várost, a tengert és a mobilitást nagyon tisztán összeköti.",
      ro: "Portul Tallinn este cel mai important port maritim al Estoniei și o poartă centrală către Marea Baltică. Aici se întâlnesc feriboturile, croazierele și logistica de marfă, ceea ce face locația foarte puternică economic. Pentru Tallinn și pentru Estonia în ansamblu, portul este o temă-cheie în turism și comerț. Ca termen SEO, leagă foarte clar orașul, marea și mobilitatea.",
      en: "The Port of Tallinn is Estonia's most important seaport and a central gateway to the Baltic Sea. Ferry traffic, cruises, and cargo logistics all meet here, making the site especially powerful economically. For Tallinn and Estonia overall, the port is a key topic in tourism and trade. As an SEO term, it clearly connects the city, the sea, and mobility."
    },
    facts: {
      de: ["Wichtigster Seehafen Estlands", "Knotenpunkt für Fähren und Kreuzfahrten", "Zentral für Handel und Logistik", "Starkes Tallinn- und Ostsee-Keyword", "Wirtschaftlich bedeutender Standort"],
      hu: ["Észtország legfontosabb tengeri kikötője", "Kompközlekedési és hajózási csomópont", "Kulcsfontosságú a kereskedelemben és logisztikában", "Erős Tallinn- és Balti-tenger kulcsszó", "Gazdaságilag jelentős helyszín"],
      ro: ["Cel mai important port maritim al Estoniei", "Nod pentru feriboturi și croaziere", "Central pentru comerț și logistică", "Cuvânt-cheie puternic pentru Tallinn și Marea Baltică", "Loc economic important"],
      en: ["Estonia's main seaport", "Hub for ferries and cruises", "Central for trade and logistics", "Strong Tallinn and Baltic Sea keyword", "Economically important location"]
    },
    image: "/geo-images/estonia/port-tallinn.webp"
  },
  {
    id: "port-muuga",
    type: "port",
    parent: "ee-country",
    coords: [24.9638, 59.4882],
    name: {
      de: "Muuga-Hafen",
      hu: "Muuga kikötő",
      ro: "Portul Muuga",
      en: "Muuga Harbour"
    },
    description: {
      de: "Muuga Harbour ist Estlands größter Güterhafen und ein wichtiger Logistikknoten am Finnischen Meerbusen. Die Anlage ist auf Container, Massengut und Tankerlösungen ausgerichtet und spielt eine große Rolle für die Außenwirtschaft. Trotz seiner industriellen Funktion ist der Hafen geographisch sehr relevant für Karten, Wirtschaft und Verkehr. Für Port-SEO in Estland ist Muuga ein Top-Begriff.",
      hu: "A Muuga kikötő Észtország legnagyobb árukikötője és fontos logisztikai csomópont a Finn-öbölnél. A létesítmény konténerekre, ömlesztett árura és tankerkiszolgálásra épül, és nagy szerepe van a külkereskedelemben. Ipari funkciója mellett földrajzilag is nagyon fontos a térképek, a gazdaság és a közlekedés szempontjából. Észt port SEO-ban a Muuga kiemelkedő kulcsszó.",
      ro: "Portul Muuga este cel mai mare port de marfă al Estoniei și un nod logistic important la Golful Finlandei. Facilitățile sunt orientate spre containere, mărfuri vrac și servicii pentru tancuri, având un rol major în comerțul exterior. În ciuda funcției sale industriale, portul are importanță geografică ridicată pentru hărți, economie și transport. Pentru SEO-ul despre porturi din Estonia, Muuga este un termen de top.",
      en: "Muuga Harbour is Estonia's largest cargo port and a major logistics node on the Gulf of Finland. The facility focuses on containers, bulk cargo, and tanker services and plays a major role in foreign trade. Despite its industrial function, the harbor is highly relevant geographically for maps, economics, and transport. For Estonian port SEO, Muuga is a top keyword."
    },
    facts: {
      de: ["Größter Güterhafen Estlands", "Wichtiger Logistikknoten am Finnischen Meerbusen", "Stark auf Container und Massengut ausgelegt", "Zentral für Außenhandel", "Wichtiges Industrie-SEO-Thema"],
      hu: ["Észtország legnagyobb árukikötője", "Fontos logisztikai csomópont a Finn-öbölnél", "Konténerekre és ömlesztett árura specializált", "Kulcsfontosságú a külkereskedelemben", "Fontos ipari SEO-téma"],
      ro: ["Cel mai mare port de marfă din Estonia", "Nod logistic important la Golful Finlandei", "Specializat în containere și mărfuri vrac", "Central pentru comerțul exterior", "Subiect SEO industrial important"],
      en: ["Estonia's largest cargo port", "Major logistics node on the Gulf of Finland", "Specialized in containers and bulk cargo", "Central to foreign trade", "Important industrial SEO topic"]
    },
    image: "/geo-images/estonia/muuga-harbour.webp"
  },
  {
    id: "port-paldiski-south",
    type: "port",
    parent: "ee-country",
    coords: [24.0586, 59.3478],
    name: {
      de: "Südhafen Paldiski",
      hu: "Paldiski déli kikötő",
      ro: "Portul sud Paldiski",
      en: "Paldiski South Harbour"
    },
    description: {
      de: "Der Südhafen von Paldiski liegt auf der Pakri-Halbinsel und ist ein stark industriell geprägter Hafenstandort. Die Lage an der Westküste macht ihn wichtig für Transport, Windenergie und maritime Infrastruktur. Gleichzeitig ist Paldiski selbst ein Symbol für Umbruch, Militärgeschichte und neue Nutzung. Als SEO-Ort verbindet der Hafen Industrie, Küste und Strategie.",
      hu: "A Paldiski déli kikötő a Pakri-félszigeten fekszik, és erősen ipari jellegű kikötőhelyszín. A nyugati parton elfoglalt helye miatt fontos a szállítás, a szélenergia és a tengeri infrastruktúra számára. Paldiski maga a változás, a katonai múlt és az újrahasznosítás szimbóluma is. SEO-helyként a kikötő az ipart, a partvidéket és a stratégiát köti össze.",
      ro: "Portul sud Paldiski se află pe peninsula Pakri și este o locație portuară puternic industrială. Poziția de pe coasta vestică îl face important pentru transport, energie eoliană și infrastructură maritimă. În același timp, Paldiski este un simbol al schimbării, istoriei militare și utilizării noi. Ca loc SEO, portul combină industria, coasta și strategia.",
      en: "Paldiski South Harbour sits on the Pakri Peninsula and is a strongly industrial port site. Its west-coast location makes it important for transport, wind energy, and maritime infrastructure. Paldiski itself also symbolizes change, military history, and redevelopment. As an SEO location, the harbor combines industry, coast, and strategy."
    },
    facts: {
      de: ["Industrieller Hafen an der Westküste", "Wichtig für Windenergie und Logistik", "Auf der Pakri-Halbinsel gelegen", "Eng mit Paldiski-Geschichte verbunden", "Starkes Hafen- und Infrastrukturmotiv"],
      hu: ["Ipari kikötő a nyugati parton", "Fontos a szélenergia és logisztika számára", "A Pakri-félszigeten található", "Szorosan kapcsolódik Paldiski történetéhez", "Erős kikötői és infrastruktúra-motívum"],
      ro: ["Port industrial pe coasta vestică", "Important pentru energie eoliană și logistică", "Situat pe peninsula Pakri", "Legat strâns de istoria Paldiski", "Motiv puternic de port și infrastructură"],
      en: ["Industrial harbor on the west coast", "Important for wind energy and logistics", "Located on the Pakri Peninsula", "Closely tied to Paldiski's history", "Strong port and infrastructure motif"]
    },
    image: "/geo-images/estonia/paldiski-south-harbour.webp"
  },
  {
    id: "port-parnu",
    type: "port",
    parent: "ee-country",
    coords: [24.4858, 58.3800],
    name: {
      de: "Hafen Pärnu",
      hu: "Pärnu kikötője",
      ro: "Portul Pärnu",
      en: "Port of Pärnu"
    },
    description: {
      de: "Der Hafen von Pärnu verbindet Ferienort und Wirtschaft auf charakteristische Weise. Er ist für Fracht, Küstenverkehr und die regionale Versorgung wichtig und liegt in einer Stadt, die zugleich Sommerhauptstadt ist. Dadurch entsteht ein starker Mix aus Tourismus und maritimer Infrastruktur. Für Pärnu-SEO bringt der Hafen zusätzliche wirtschaftliche Tiefe.",
      hu: "A Pärnu kikötője jellegzetesen köti össze az üdülővárost a gazdasággal. Fontos az áruszállítás, a part menti forgalom és a regionális ellátás szempontjából, miközben a város nyári főváros is. Így erős keverék jön létre turizmusból és tengeri infrastruktúrából. Pärnu SEO-ban a kikötő gazdasági mélységet ad a városnak.",
      ro: "Portul Pärnu combină în mod caracteristic stațiunea cu economia. Este important pentru marfă, trafic de coastă și aprovizionare regională, într-un oraș cunoscut și ca capitală de vară. Rezultă un mix puternic între turism și infrastructură maritimă. Pentru SEO-ul despre Pärnu, portul adaugă profunzime economică orașului.",
      en: "The Port of Pärnu connects the resort town and the economy in a distinctive way. It matters for cargo, coastal traffic, and regional supply in a city that is also known as the summer capital. That creates a strong mix of tourism and maritime infrastructure. For Pärnu SEO, the port adds economic depth to the city."
    },
    facts: {
      de: ["Hafen in Estlands Sommerhauptstadt", "Wichtig für Küstenverkehr und Fracht", "Ergänzt das Tourismusprofil von Pärnu", "Regional bedeutender Wirtschaftsstandort", "Stark für Hafen- und Stadt-SEO"],
      hu: ["A nyári főváros kikötője", "Fontos part menti forgalom és áruszállítás számára", "Kiegészíti Pärnu turisztikai profilját", "Regionálisan jelentős gazdasági helyszín", "Erős kikötői és városi SEO"],
      ro: ["Port în capitala de vară a Estoniei", "Important pentru trafic costier și marfă", "Completează profilul turistic al Pärnu", "Loc economic regional important", "Puternic pentru SEO de port și oraș"],
      en: ["Harbor in Estonia's summer capital", "Important for coastal traffic and cargo", "Adds to Pärnu's tourism profile", "Regionally important economic site", "Strong for port and city SEO"]
    },
    image: "/geo-images/estonia/port-parnu.webp"
  },
  {
    id: "industry-kreenholm",
    type: "industry",
    parent: "ee-country",
    coords: [28.1860, 59.3738],
    name: {
      de: "Kreenholm-Komplex",
      hu: "Kreenholm komplexum",
      ro: "Complexul Kreenholm",
      en: "Kreenholm Complex"
    },
    description: {
      de: "Der Kreenholm-Komplex in Narva steht für die industrielle Vergangenheit des Landes und ist ein starkes Symbol der Textilgeschichte. Die ehemalige Fabrikinsel am Fluss war einst einer der wichtigsten Industriebetriebe des Baltikums. Heute ist Kreenholm vor allem als historischer Industrieort und als Fotomotiv interessant. Für Industrie-SEO in Estland ist der Name äußerst wertvoll.",
      hu: "A narvai Kreenholm komplexum az ország ipari múltját jelképezi, és a textiltörténet egyik erős szimbóluma. A folyó szigetén álló egykori gyár a Baltikum egyik legfontosabb ipari üzeme volt. Ma Kreenholm elsősorban történelmi ipari helyszínként és fotómotívumként érdekes. Az észt ipari SEO-ban a név rendkívül értékes.",
      ro: "Complexul Kreenholm din Narva reprezintă trecutul industrial al Estoniei și este un simbol puternic al istoriei textile. Fosta insulă-fabrică de pe râu a fost cândva una dintre cele mai importante întreprinderi industriale din zona baltică. Astăzi, Kreenholm este interesant mai ales ca sit istoric industrial și subiect foto. Pentru SEO-ul industrial din Estonia, numele este foarte valoros.",
      en: "The Kreenholm complex in Narva represents Estonia's industrial past and stands as a strong symbol of textile history. The former factory island on the river was once one of the Baltic region's most important industrial enterprises. Today Kreenholm is best known as a historic industrial site and photo subject. For Estonian industrial SEO, the name is extremely valuable."
    },
    facts: {
      de: ["Historischer Textilindustriestandort", "Liegt in Narva am Fluss", "Ehemalige Fabrikinsel", "Wichtiger Teil der Industriegeschichte", "Starkes Motiv für Industriekultur"],
      hu: ["Történelmi textilipari helyszín", "Narvában, a folyó mellett található", "Egykori gyári sziget", "Fontos része az ipartörténetnek", "Erős motívum az ipari kultúrához"],
      ro: ["Situl istoric al industriei textile", "Situat în Narva, lângă râu", "Fostă insulă industrială", "Parte importantă a istoriei industriale", "Motiv puternic pentru cultura industrială"],
      en: ["Historic textile industry site", "Located in Narva by the river", "Former factory island", "Important part of industrial history", "Strong motif for industrial culture"]
    },
    image: "/geo-images/estonia/kreenholm.webp"
  },
  {
    id: "agriculture-estonian-agricultural-museum",
    type: "agriculture",
    parent: "ee-country",
    coords: [26.7148, 58.3789],
    name: {
      de: "Estnisches Landwirtschaftsmuseum",
      hu: "Észt Mezőgazdasági Múzeum",
      ro: "Muzeul Agricol Estonian",
      en: "Estonian Agricultural Museum"
    },
    description: {
      de: "Das Estnische Landwirtschaftsmuseum bei Tartu zeigt die ländlichen Wurzeln des Landes auf besonders anschauliche Weise. Besucher lernen hier Geräte, Hofstrukturen und Arbeitsweisen kennen, die Estlands Agrargeschichte geprägt haben. Der Standort verbindet Bildung, Erinnerung und regionale Identität auf engem Raum. Für Agrar-SEO ist das Museum ein klarer und glaubwürdiger Begriff.",
      hu: "Az Észt Mezőgazdasági Múzeum Tartu közelében nagyon szemléletesen mutatja be az ország vidéki gyökereit. A látogatók eszközöket, gazdasági struktúrákat és munkamódszereket ismerhetnek meg, amelyek formálták Észtország agrártörténetét. A helyszín rövid távolságon belül köti össze az oktatást, az emlékezetet és a regionális identitást. Az agrár SEO-ban a múzeum világos és hiteles kulcsszó.",
      ro: "Muzeul Agricol Estonian de lângă Tartu prezintă rădăcinile rurale ale țării într-un mod foarte clar. Vizitatorii descoperă unelte, structuri gospodărești și moduri de lucru care au modelat istoria agricolă a Estoniei. Locul combină educația, memoria și identitatea regională într-un spațiu compact. Pentru SEO-ul agricol, muzeul este un termen clar și credibil.",
      en: "The Estonian Agricultural Museum near Tartu presents the country's rural roots in a very clear way. Visitors learn about tools, farm structures, and working methods that shaped Estonia's agricultural history. The site combines education, memory, and regional identity in a compact space. For agricultural SEO, the museum is a clear and credible keyword."
    },
    facts: {
      de: ["Zeigt Estlands Agrargeschichte", "Nahe Tartu gelegen", "Stark für Bildungs- und Familienbesuche", "Verbindet ländliche Kultur und Erinnerung", "Wichtiges Landwirtschafts-SEO-Thema"],
      hu: ["Bemutatja Észtország agrártörténetét", "Tartu közelében található", "Erős oktatási és családi vonzerő", "Összeköti a vidéki kultúrát és az emlékezetet", "Fontos mezőgazdasági SEO-téma"],
      ro: ["Prezintă istoria agricolă a Estoniei", "Situat lângă Tartu", "Puternic pentru vizite educaționale și de familie", "Leagă cultura rurală de memorie", "Subiect SEO important pentru agricultură"],
      en: ["Shows Estonia's agricultural history", "Located near Tartu", "Strong for education and family visits", "Connects rural culture and memory", "Important agricultural SEO topic"]
    },
    image: "/geo-images/estonia/estonian-agricultural-museum.webp"
  },
  {
    id: "ee-r2big-loksa",
    type: "city",
    parent: "ee-country",
    coords: [25.6875, 59.5790],
    name: {
      de: "Loksa",
      hu: "Loksa",
      ro: "Loksa",
      en: "Loksa"
    },
    description: {
      de: "Loksa liegt an der Nordküste des Harju-Lands. Der Ort ist ein ruhiger Zwischenstopp zwischen Tallinn und Lahemaa. Der Hafen und die Lage am Meer geben dem kleinen Stadtbild ein klares Küstengefühl. Für Estland-Reisen mit Natur und Küste ist Loksa ein nützlicher Name.",
      hu: "Loksa Harju északi partján fekszik. A település nyugodt megálló Tallinn és Lahemaa között. A kikötő és a tenger közelsége erős tengerparti hangulatot ad neki. Az észt utazási útvonalakon Loksa jól működik természetes, part menti állomásként.",
      ro: "Loksa se află pe coasta de nord a regiunii Harju. Localitatea este o oprire liniștită între Tallinn și Lahemaa. Portul și apropierea de mare îi dau un caracter clar de litoral. Pentru rutele turistice din Estonia, Loksa este un nume util și credibil.",
      en: "Loksa sits on the northern coast of Harju County. The settlement is a quiet stop between Tallinn and Lahemaa. The harbor and the sea setting give it a clear coastal identity. For Estonia travel routes, Loksa is a practical and memorable name."
    },
    facts: {
      de: ["Harju maakond", "Nordküste am Finnischen Meerbusen", "Zwischen Tallinn und Lahemaa", "Kleiner Küstenort", "Guter Roadtrip-Stopp"],
      hu: ["Harju megye", "Északi tengerpart", "Tallinn és Lahemaa között", "Kis tengerparti település", "Hasznos autós megálló"],
      ro: ["Județul Harju", "Coasta nordică a Golfului Finic", "Între Tallinn și Lahemaa", "Localitate mică de litoral", "Punct util pe traseu"],
      en: ["Harju County", "Northern coast on the Gulf of Finland", "Between Tallinn and Lahemaa", "Small coastal town", "Useful road-trip stop"]
    },
    image: "/geo-images/estonia/r2big-loksa.webp"
  },
  {
    id: "ee-r2big-jogeva",
    type: "city",
    parent: "ee-country",
    coords: [26.3930, 58.7467],
    name: {
      de: "Jõgeva",
      hu: "Jõgeva",
      ro: "Jõgeva",
      en: "Jõgeva"
    },
    description: {
      de: "Jõgeva ist das Verwaltungszentrum des gleichnamigen Landkreises. Die Stadt ist bekannt für ihre zentrale Lage in Zentralestland und für ihren ruhigen Alltagscharakter. Sie ist ein guter Ausgangspunkt für Fahrten zwischen Tartu, Põltsamaa und dem Osten des Landes. Für Karten, Routen und regionale Inhalte ist Jõgeva ein sinnvoller POI.",
      hu: "Jõgeva az azonos nevű megye közigazgatási központja. A város közép-észtországi fekvéséről és nyugodt mindennapi hangulatáról ismert. Jó kiindulópont Tartu, Põltsamaa és az ország keleti része felé. Térképes, útvonalas és regionális tartalmakhoz Jõgeva hasznos POI.",
      ro: "Jõgeva este centrul administrativ al județului cu același nume. Orașul este cunoscut pentru poziția sa centrală în Estonia și pentru atmosfera sa liniștită de zi cu zi. Este un punct bun de plecare spre Tartu, Põltsamaa și estul țării. Pentru hărți și conținut regional, Jõgeva este un POI util.",
      en: "Jõgeva is the administrative center of its namesake county. The town is known for its central position in Estonia and for its calm everyday feel. It is a practical base for trips toward Tartu, Põltsamaa, and the east of the country. For maps and regional content, Jõgeva is a useful POI."
    },
    facts: {
      de: ["Jõgeva maakond", "Zentrale Lage in Estland", "Verwaltungszentrum", "Guter Roadtrip-Knotenpunkt", "Regionale SEO-Relevanz"],
      hu: ["Jõgeva megye", "Közép-észt fekvés", "Megyeszékhely", "Hasznos közlekedési pont", "Regionális SEO-érték"],
      ro: ["Județul Jõgeva", "Poziție centrală", "Centru administrativ", "Nod rutier util", "Relevanță SEO regională"],
      en: ["Jõgeva County", "Central location in Estonia", "Administrative center", "Useful route hub", "Regional SEO value"]
    },
    image: "/geo-images/estonia/r2big-jogeva.webp"
  },
  {
    id: "ee-r2big-lihula",
    type: "city",
    parent: "ee-country",
    coords: [23.8400, 58.6820],
    name: {
      de: "Lihula",
      hu: "Lihula",
      ro: "Lihula",
      en: "Lihula"
    },
    description: {
      de: "Lihula liegt im Westen im Landkreis Lääne und hat einen klaren Kleinstadtcharakter. Der Ort ist ein ruhiger Zugang zur westestnischen Landschaft und zu Matsalu. Historische Spuren und die Lage zwischen Küste und Binnenland machen Lihula interessant. Für Westestland-Routen ist der Name eine solide Ergänzung.",
      hu: "Lihula nyugaton, Lääne megyében található és erős kisvárosi karaktert hordoz. A település nyugodt kapu a nyugat-észt tájhoz és Matsalu térségéhez. A történelmi rétegek és a part-belső területi fekvés együtt teszik érdekessé. Nyugat-Észtország útvonalain Lihula jó kiegészítő.",
      ro: "Lihula se află în vest, în județul Lääne, și are un caracter clar de orășel. Localitatea este o poartă liniștită spre peisajele din vestul Estoniei și spre Matsalu. Straturile istorice și poziția dintre coastă și interior o fac interesantă. Pentru traseele din vestul Estoniei, Lihula este un adaos solid.",
      en: "Lihula is in western Estonia, in Lääne County, and has a clear small-town character. The settlement is a calm gateway to the western landscape and the Matsalu area. Historic layers and its position between coast and inland make it interesting. For west Estonia routes, Lihula is a solid addition."
    },
    facts: {
      de: ["Lääne maakond", "Westestland", "Nähe Matsalu", "Kleinstadt mit Geschichte", "Gut für Küstenrouten"],
      hu: ["Lääne megye", "Nyugat-Észtország", "Matsalu közelében", "Történelmi kisváros", "Jó parti útvonalakhoz"],
      ro: ["Județul Lääne", "Vestul Estoniei", "Aproape de Matsalu", "Orășel istoric", "Bun pentru trasee de coastă"],
      en: ["Lääne County", "Western Estonia", "Near Matsalu", "Historic small town", "Good for coastal routes"]
    },
    image: "/geo-images/estonia/r2big-lihula.webp"
  },
  {
    id: "ee-r2big-kilingi-nomme",
    type: "city",
    parent: "ee-country",
    coords: [24.9540, 58.1480],
    name: {
      de: "Kilingi-Nõmme",
      hu: "Kilingi-Nõmme",
      ro: "Kilingi-Nõmme",
      en: "Kilingi-Nõmme"
    },
    description: {
      de: "Kilingi-Nõmme liegt im Süden des Landkreises Pärnu und ist ein ruhiger Kleinstadtnamenpunkt. Der Ort ist bekannt für seine Lage zwischen Wäldern, Landstraßen und kleinen Siedlungen. Er passt gut zu Reisen, die das ländliche Südestland zeigen sollen. Für regionale Suchanfragen ist Kilingi-Nõmme ein sauberer und spezifischer Begriff.",
      hu: "Kilingi-Nõmme Pärnu megye déli részén fekszik és nyugodt kisvárosi helynév. A település erdők, mellékutak és kisebb falvak között helyezkedik el. Jól illik azokhoz az utazásokhoz, amelyek a vidéki dél-észt képet mutatják. A regionális keresésekben Kilingi-Nõmme egy tiszta és pontos név.",
      ro: "Kilingi-Nõmme se află în sudul județului Pärnu și este un nume de orășel liniștit. Localitatea este amplasată între păduri, drumuri secundare și așezări mici. Se potrivește bine cu trasee care arată Estonia rurală de sud. Pentru căutări regionale, Kilingi-Nõmme este un termen clar și precis.",
      en: "Kilingi-Nõmme is in the south of Pärnu County and works well as a quiet small-town reference. The settlement sits between forests, back roads, and smaller villages. It fits routes that want to show rural southern Estonia. For regional searches, Kilingi-Nõmme is a clean and specific name."
    },
    facts: {
      de: ["Pärnu maakond", "Südliches Estland", "Zwischen Wäldern und Landstraßen", "Kleinstadt-Charakter", "Sauberes Regional-Keyword"],
      hu: ["Pärnu megye", "Dél-Észtország", "Erdők és mellékutak között", "Kisvárosi hangulat", "Jó regionális kulcsszó"],
      ro: ["Județul Pärnu", "Sudul Estoniei", "Între păduri și drumuri locale", "Caracter de orășel", "Cuvânt-cheie regional clar"],
      en: ["Pärnu County", "Southern Estonia", "Between forests and local roads", "Small-town feel", "Clear regional keyword"]
    },
    image: "/geo-images/estonia/r2big-kilingi-nomme.webp"
  },
  {
    id: "ee-r2big-marjamaa",
    type: "city",
    parent: "ee-country",
    coords: [24.4300, 58.9030],
    name: {
      de: "Märjamaa",
      hu: "Märjamaa",
      ro: "Märjamaa",
      en: "Märjamaa"
    },
    description: {
      de: "Märjamaa ist ein regionales Zentrum im Landkreis Rapla. Die Stadt liegt günstig zwischen Tallinn, Pärnu und dem ländlichen Westen. Dadurch funktioniert sie gut als Alltagsort und als Reisehalt zugleich. Für Rapla-SEO ist Märjamaa ein relevanter und glaubwürdiger Ortsname.",
      hu: "Märjamaa Rapla megyében regionális központ. A város kedvező helyen fekszik Tallinn, Pärnu és a vidéki nyugat között. Emiatt egyszerre mindennapi település és utazási megálló. Rapla SEO szempontból Märjamaa hiteles és fontos név.",
      ro: "Märjamaa este un centru regional în județul Rapla. Orașul are o poziție bună între Tallinn, Pärnu și vestul rural. De aceea funcționează atât ca localitate de zi cu zi, cât și ca oprire de călătorie. Pentru SEO-ul din Rapla, Märjamaa este un nume credibil și relevant.",
      en: "Märjamaa is a regional center in Rapla County. The town sits in a useful position between Tallinn, Pärnu, and the rural west. That makes it work both as an everyday town and as a travel stop. For Rapla SEO, Märjamaa is a credible and relevant place name."
    },
    facts: {
      de: ["Rapla maakond", "Zwischen Tallinn und Pärnu", "Regionales Zentrum", "Ländlicher Westen", "Wichtig für Orts-SEO"],
      hu: ["Rapla megye", "Tallinn és Pärnu között", "Regionális központ", "Vidéki nyugat", "Fontos helynévi SEO"],
      ro: ["Județul Rapla", "Între Tallinn și Pärnu", "Centru regional", "Vest rural", "Important pentru SEO local"],
      en: ["Rapla County", "Between Tallinn and Pärnu", "Regional center", "Rural west", "Important for place SEO"]
    },
    image: "/geo-images/estonia/r2big-marjamaa.webp"
  },
  {
    id: "ee-r2big-orissaare",
    type: "city",
    parent: "ee-country",
    coords: [23.0010, 58.5590],
    name: {
      de: "Orissaare",
      hu: "Orissaare",
      ro: "Orissaare",
      en: "Orissaare"
    },
    description: {
      de: "Orissaare liegt auf Saaremaa und ist ein ruhiger Regionalort mit Inselcharakter. Der Ort ist bekannt als Verbindungspunkt für Ostsaaremaa und die Küstenwege der Insel. Durch den kompakten Aufbau wirkt Orissaare leicht zugänglich und freundlich. Für Saaremaa-Reisen ist der Name ein nützlicher Orientierungspunkt.",
      hu: "Orissaare Saaremaán található és nyugodt, szigeties hangulatú regionális település. A helyiség fontos kapcsolódási pont Kelet-Saaremaa és a parti útvonalak felé. Kompakt szerkezete miatt könnyen bejárható és barátságos. Saaremaa utazásokhoz Orissaare hasznos tájékozódási pont.",
      ro: "Orissaare se află pe Saaremaa și are un aer liniștit, specific insulei. Localitatea este un punct de legătură pentru estul insulei și traseele de coastă. Structura sa compactă o face ușor de parcurs și prietenoasă. Pentru călătoriile pe Saaremaa, Orissaare este un reper util.",
      en: "Orissaare is on Saaremaa and has a calm island-town feel. The settlement is a key connection point for eastern Saaremaa and the coastal routes. Its compact layout makes it easy to navigate and welcoming. For Saaremaa travel, Orissaare is a useful reference point."
    },
    facts: {
      de: ["Saaremaa", "Inselort", "Ostliche Inselrouten", "Kompakter Stadtkern", "Nützlich für Insel-SEO"],
      hu: ["Saaremaa", "Szigeti település", "Kelet-szigeti útvonalak", "Kompakt központ", "Hasznos sziget SEO"],
      ro: ["Saaremaa", "Localitate insulară", "Trasee de est ale insulei", "Centru compact", "Util pentru SEO de insulă"],
      en: ["Saaremaa", "Island settlement", "Eastern island routes", "Compact center", "Useful for island SEO"]
    },
    image: "/geo-images/estonia/r2big-orissaare.webp"
  },
  {
    id: "ee-r2big-elva",
    type: "city",
    parent: "ee-country",
    coords: [26.4230, 58.2220],
    name: {
      de: "Elva",
      hu: "Elva",
      ro: "Elva",
      en: "Elva"
    },
    description: {
      de: "Elva liegt südwestlich von Tartu und ist eine grüne Kleinstadt mit Freizeitgefühl. Der Ort ist eng mit Seen, Wäldern und Sommerausflügen verbunden. Viele Besucher nutzen Elva als ruhigen Kontrast zur Universitätsstadt Tartu. Für Natur- und Familienrouten in Ostestland passt Elva sehr gut.",
      hu: "Elva Tartu délnyugati részén fekszik és zöld, szabadidős hangulatú kisváros. A település szorosan kapcsolódik tavakhoz, erdőkhöz és nyári kiruccanásokhoz. Sok látogató nyugodt ellenpontként használja Tartu mellett. Természetes és családi útvonalakhoz Elva nagyon jól illik.",
      ro: "Elva se află la sud-vest de Tartu și este un orășel verde, cu atmosferă de recreere. Localitatea este strâns legată de lacuri, păduri și excursii de vară. Mulți vizitatori o folosesc ca alternativă liniștită la orașul universitar Tartu. Pentru trasee de natură și familie, Elva se potrivește foarte bine.",
      en: "Elva lies southwest of Tartu and is a green small town with a leisure feel. The settlement is closely linked to lakes, forests, and summer outings. Many visitors use Elva as a quiet contrast to university city Tartu. It fits very well into nature and family routes in eastern Estonia."
    },
    facts: {
      de: ["Tartu maakond", "Grüne Kleinstadt", "Nahe Tartu", "Beliebt für Ausflüge", "Gut für Natur-SEO"],
      hu: ["Tartu megye", "Zöld kisváros", "Tartu közelében", "Népszerű kirándulóhely", "Erős természetes SEO"],
      ro: ["Județul Tartu", "Oraș mic verde", "Aproape de Tartu", "Popular pentru excursii", "Bun pentru SEO de natură"],
      en: ["Tartu County", "Green small town", "Near Tartu", "Popular for outings", "Good for nature SEO"]
    },
    image: "/geo-images/estonia/r2big-elva.webp"
  },
  {
    id: "ee-r2big-karksi-nuia",
    type: "city",
    parent: "ee-country",
    coords: [25.5660, 58.1030],
    name: {
      de: "Karksi-Nuia",
      hu: "Karksi-Nuia",
      ro: "Karksi-Nuia",
      en: "Karksi-Nuia"
    },
    description: {
      de: "Karksi-Nuia liegt im Süden von Viljandi und ist ein kleiner Ort mit starker ländlicher Prägung. Die Umgebung verbindet sanfte Hügel, Feldlandschaften und historische Siedlungsspuren. Für Fahrten durch Südestland ist Karksi-Nuia ein ruhiger, aber nützlicher Name. Der Ort ergänzt das Viljandi-Thema um einen klaren regionalen Punkt.",
      hu: "Karksi-Nuia Viljandi megye déli részén található és erős vidéki karakterű kis település. Környezete dombokat, mezőket és történelmi településnyomokat kapcsol össze. Dél-Észtországon át vezető utakhoz Karksi-Nuia nyugodt, de hasznos név. A hely jól egészíti ki a Viljandi-témát egyértelmű regionális pontként.",
      ro: "Karksi-Nuia se află în sudul județului Viljandi și are un caracter rural puternic. Zona combină dealuri line, câmpuri și urme de așezări istorice. Pentru traseele prin sudul Estoniei, Karksi-Nuia este un nume liniștit, dar util. Localitatea completează foarte bine tema Viljandi ca punct regional clar.",
      en: "Karksi-Nuia is in the south of Viljandi County and has a strong rural character. The area combines gentle hills, farmland, and traces of historic settlement. For routes through southern Estonia, Karksi-Nuia is a calm but useful name. It complements Viljandi with a clear regional point."
    },
    facts: {
      de: ["Viljandi maakond", "Südliches Estland", "Ländlicher Charakter", "Zwischen Hügeln und Feldern", "Gutes Regional-Keyword"],
      hu: ["Viljandi megye", "Dél-Észtország", "Vidéki jelleg", "Dombok és mezők között", "Jó regionális kulcsszó"],
      ro: ["Județul Viljandi", "Sudul Estoniei", "Caracter rural", "Între dealuri și câmpuri", "Cuvânt-cheie regional bun"],
      en: ["Viljandi County", "Southern Estonia", "Rural character", "Between hills and fields", "Good regional keyword"]
    },
    image: "/geo-images/estonia/r2big-karksi-nuia.webp"
  },
  {
    id: "ee-r2big-varska",
    type: "city",
    parent: "ee-country",
    coords: [27.6380, 57.9580],
    name: {
      de: "Värska",
      hu: "Värska",
      ro: "Värska",
      en: "Värska"
    },
    description: {
      de: "Värska liegt im Setomaa-Gebiet im Südosten Estlands. Der Ort ist eng mit Wasser, Kurkultur und der Seto-Identität verbunden. Besucher verbinden Värska oft mit regionalen Traditionen und ruhigen Naturerlebnissen. Für Südostestland ist der Name sehr charakterstark.",
      hu: "Värska Setomaa területén fekszik Észtország délkeleti részén. A település szorosan kapcsolódik a vízhez, a fürdőkultúrához és a szetó identitáshoz. A látogatók gyakran regionális hagyományokkal és csendes természeti élményekkel társítják. Délkelet-Észtországban Värska nagyon karakteres név.",
      ro: "Värska se află în zona Setomaa din sud-estul Estoniei. Localitatea este strâns legată de apă, cultura balneară și identitatea seto. Vizitatorii o asociază adesea cu tradiții regionale și experiențe liniștite în natură. Pentru sud-estul Estoniei, Värska este un nume foarte distinct.",
      en: "Värska is in the Setomaa area of southeastern Estonia. The settlement is closely tied to water, spa culture, and Seto identity. Visitors often associate it with regional traditions and quiet nature experiences. For southeast Estonia, Värska is a very distinctive name."
    },
    facts: {
      de: ["Setomaa", "Südostestland", "Kurkultur und Wasser", "Starke Seto-Identität", "Wichtig für Regional-SEO"],
      hu: ["Setomaa", "Délkelet-Észtország", "Fürdőkultúra és víz", "Erős szetó identitás", "Fontos regionális SEO"],
      ro: ["Setomaa", "Sud-estul Estoniei", "Cultură balneară și apă", "Identitate seto puternică", "Important pentru SEO regional"],
      en: ["Setomaa", "Southeast Estonia", "Spa culture and water", "Strong Seto identity", "Important for regional SEO"]
    },
    image: "/geo-images/estonia/r2big-varska.webp"
  },
  {
    id: "ee-r2big-keila-joa-manor",
    type: "landmark",
    parent: "ee-country",
    coords: [24.3580, 59.3840],
    name: {
      de: "Keila-Joa-Herrenhaus",
      hu: "Keila-Joa kastély",
      ro: "Conacul Keila-Joa",
      en: "Keila-Joa Manor"
    },
    description: {
      de: "Das Keila-Joa-Herrenhaus steht an einem der bekanntesten Orte im Harju-Land. Die Kombination aus Wasserfallnähe, Parkanlage und historischer Architektur macht den Standort sehr fotogen. Der Ort verbindet Naturerlebnis und Adelsgeschichte auf engem Raum. Für Ausflüge westlich von Tallinn ist Keila-Joa ein echter Klassiker.",
      hu: "A Keila-Joa kastély Harju egyik legismertebb pontján áll. A vízesés közelsége, a park és a történelmi építészet együtt nagyon fotóssá teszik. A hely kis területen kapcsolja össze a természetet és az arisztokrata múltat. Tallinn nyugati kirándulásaihoz Keila-Joa igazi klasszikus.",
      ro: "Conacul Keila-Joa se află într-unul dintre cele mai cunoscute locuri din Harju. Apropierea de cascadă, parcul și arhitectura istorică îl fac foarte fotogenic. Locul combină peisajul natural și istoria aristocratică într-un spațiu compact. Pentru excursiile la vest de Tallinn, Keila-Joa este un clasic.",
      en: "Keila-Joa Manor stands in one of the best-known spots in Harju County. The waterfall setting, park grounds, and historic architecture make it very photogenic. The place combines nature and aristocratic history in a compact area. For trips west of Tallinn, Keila-Joa is a classic stop."
    },
    facts: {
      de: ["Harju maakond", "Nähe zum Keila-Wasserfall", "Historisches Herrenhaus", "Sehr fotogen", "Beliebt für Tagesausflüge"],
      hu: ["Harju megye", "Keila-vízesés közelében", "Történelmi kastély", "Nagyon fotogén", "Népszerű egynapos kirándulás"],
      ro: ["Județul Harju", "Lângă cascada Keila", "Conac istoric", "Foarte fotogenic", "Popular pentru excursii de o zi"],
      en: ["Harju County", "Near Keila waterfall", "Historic manor", "Very photogenic", "Popular day trip"]
    },
    image: "/geo-images/estonia/keila-joa-manor.webp"
  },
  {
    id: "ee-r2big-purtse-castle",
    type: "historical",
    parent: "ee-country",
    coords: [27.0600, 59.4220],
    name: {
      de: "Purtse-Burg",
      hu: "Purtse vár",
      ro: "Castelul Purtse",
      en: "Purtse Castle"
    },
    description: {
      de: "Purtse-Burg gehört zu den ältesten gut erhaltenen Adelssitzen in Ida-Viru. Der kompakte Bau verbindet Wehrcharakter mit Wohnfunktion und macht die Geschichte leicht lesbar. Besucher bekommen hier einen klaren Eindruck von der frühen regionalen Machtstruktur. Für Ostestland-Geschichten ist Purtse ein starker historischer Marker.",
      hu: "A Purtse vár Ida-Viru egyik legrégebbi, jól megőrzött nemesi épülete. A kompakt épület egyszerre védelmi és lakófunkciót mutat, így a története könnyen érthető. A látogatók itt világos képet kapnak a korai regionális hatalmi viszonyokról. Kelet-Észtország történeti tartalmaiban Purtse erős marker.",
      ro: "Castelul Purtse este unul dintre cele mai vechi și mai bine păstrate conace nobiliare din Ida-Viru. Clădirea compactă îmbină funcția defensivă cu cea rezidențială, ceea ce face istoria ușor de citit. Vizitatorii obțin aici o imagine clară a puterii regionale timpurii. Pentru poveștile despre estul Estoniei, Purtse este un marker istoric puternic.",
      en: "Purtse Castle is one of the oldest well-preserved manor fortresses in Ida-Viru County. The compact building combines defensive and residential functions, making its history easy to read. Visitors get a clear sense of early regional power structures here. For eastern Estonia stories, Purtse is a strong historical marker."
    },
    facts: {
      de: ["Ida-Viru", "Eines der ältesten Herrenhäuser", "Wehr- und Wohnbau", "Klarer Geschichtswert", "Stark für Ostestland-SEO"],
      hu: ["Ida-Viru", "Az egyik legrégebbi nemesi épület", "Védelmi és lakófunkció", "Erős történelmi érték", "Erős kelet-észt SEO"],
      ro: ["Ida-Viru", "Unul dintre cele mai vechi conace", "Fortificație și reședință", "Valoare istorică clară", "SEO puternic pentru estul Estoniei"],
      en: ["Ida-Viru", "One of the oldest manor houses", "Defensive and residential building", "Clear historical value", "Strong eastern Estonia SEO"]
    },
    image: "/geo-images/estonia/purtse-castle.webp"
  },
  {
    id: "ee-r2big-narva-alexander-cathedral",
    type: "landmark",
    parent: "ee-country",
    coords: [28.1930, 59.3785],
    name: {
      de: "Narvaer Alexanderkirche",
      hu: "Narvai Sándor-székesegyház",
      ro: "Catedrala Alexander din Narva",
      en: "Narva Alexander's Cathedral"
    },
    description: {
      de: "Die Narvaer Alexanderkirche prägt die Silhouette der Grenzstadt und gehört zu ihren wichtigsten Wahrzeichen. Das Gotteshaus steht für die religiöse und architektonische Geschichte der Region. Seine Lage in Narva macht es sofort erkennbar und leicht zu merken. Für Grenzstadt- und Kulturrouten in Estland ist der Ort sehr stark.",
      hu: "A narvai Sándor-székesegyház meghatározza a határváros látképét és egyik legfontosabb jelképe. A templom a régió vallási és építészeti történetét képviseli. Narvai elhelyezkedése miatt azonnal felismerhető és könnyen megjegyezhető. Az észt határvárosi és kulturális útvonalakon nagyon erős pont.",
      ro: "Catedrala Alexander din Narva definește silueta orașului de frontieră și este unul dintre cele mai importante repere ale sale. Lăcașul reprezintă istoria religioasă și arhitecturală a regiunii. Poziția sa în Narva o face ușor de recunoscut și de reținut. Pentru traseele culturale și de frontieră din Estonia, locul este foarte puternic.",
      en: "Narva Alexander's Cathedral defines the skyline of the border city and is one of its main landmarks. The church represents the region's religious and architectural history. Its position in Narva makes it instantly recognizable and easy to remember. For border-city and cultural routes in Estonia, the site is very strong."
    },
    facts: {
      de: ["Narva", "Wichtiges Wahrzeichen", "Grenzstadt-Silhouette", "Religiöse Architektur", "Stark für Landmark-SEO"],
      hu: ["Narva", "Fontos jelképe a városnak", "Határvárosi látkép", "Vallási építészet", "Erős landmark SEO"],
      ro: ["Narva", "Reper important", "Silueta orașului de frontieră", "Arhitectură religioasă", "SEO puternic pentru reper"],
      en: ["Narva", "Major landmark", "Border-city skyline", "Religious architecture", "Strong landmark SEO"]
    },
    image: "/geo-images/estonia/narva-alexander-cathedral.webp"
  },
  {
    id: "ee-r2big-tammsaare-museum",
    type: "historical",
    parent: "ee-country",
    coords: [25.6210, 59.1240],
    name: {
      de: "Tammsaare-Museum",
      hu: "Tammsaare Múzeum",
      ro: "Muzeul Tammsaare",
      en: "Tammsaare Museum"
    },
    description: {
      de: "Das Tammsaare-Museum in Järva verbindet Literatur, Geschichte und Bauernkultur. Der Ort erinnert an einen der bekanntesten estnischen Schriftsteller und an das ländliche Umfeld seines Werks. Besucher erhalten hier ein gutes Gefühl für das alte Hofleben in Zentralestland. Für Bildungs- und Kulturrouten ist das Museum äußerst nützlich.",
      hu: "A Järva megyében található Tammsaare Múzeum az irodalmat, a történelmet és a paraszti kultúrát kapcsolja össze. A hely Észtország egyik legismertebb írójára és műveinek vidéki környezetére emlékeztet. A látogatók jó képet kapnak a közép-észtországi régi udvarház-életről. Oktatási és kulturális útvonalakon a múzeum rendkívül hasznos.",
      ro: "Muzeul Tammsaare din județul Järva îmbină literatura, istoria și cultura rurală. Locul amintește de unul dintre cei mai cunoscuți scriitori estonieni și de mediul rural al operei sale. Vizitatorii obțin aici o imagine bună despre viața de gospodărie din Estonia centrală. Pentru traseele educaționale și culturale, muzeul este foarte util.",
      en: "The Tammsaare Museum in Järva County combines literature, history, and rural culture. The site recalls one of Estonia's best-known writers and the countryside context of his work. Visitors get a good sense of old manor life in central Estonia. For educational and cultural routes, the museum is very useful."
    },
    facts: {
      de: ["Järva", "Literatur und Bauernkultur", "Bezug zu A. H. Tammsaare", "Ländlicher Kontext", "Starkes Kultur-SEO"],
      hu: ["Järva", "Irodalom és paraszti kultúra", "A. H. Tammsaare kötődés", "Vidékies környezet", "Erős kulturális SEO"],
      ro: ["Järva", "Literatură și cultură rurală", "Legat de A. H. Tammsaare", "Context rural", "SEO cultural puternic"],
      en: ["Järva", "Literature and rural culture", "Linked to A. H. Tammsaare", "Rural context", "Strong cultural SEO"]
    },
    image: "/geo-images/estonia/tammsaare-museum.webp"
  },
  {
    id: "ee-r2big-puhajarv",
    type: "lake",
    parent: "ee-country",
    coords: [26.4890, 58.0590],
    name: {
      de: "Pühajärv",
      hu: "Pühajärv",
      ro: "Pühajärv",
      en: "Pühajärv"
    },
    description: {
      de: "Pühajärv ist ein bekannter See im Süden Estlands und eng mit dem Otepää-Gebiet verbunden. Der See steht für Erholung, Sommerfrische und ruhige Uferlandschaften. Viele Reisen in die Region kombinieren ihn mit Wanderungen und Kuraufenthalten. Für Seen- und Freizeitcontent ist Pühajärv ein sehr starker Name.",
      hu: "A Pühajärv ismert tó Észtország déli részén, szorosan kapcsolódik Otepää térségéhez. A tó a pihenést, a nyári üdülést és a nyugodt partvidéket jelképezi. Sok utazás túrákkal és gyógyüdüléssel együtt kapcsolja össze. A tó- és szabadidős tartalmakban Pühajärv nagyon erős név.",
      ro: "Pühajärv este un lac cunoscut din sudul Estoniei și este strâns legat de zona Otepää. Lacul reprezintă relaxarea, vacanțele de vară și țărmurile liniștite. Multe călătorii îl combină cu drumeții și sejururi balneare. Pentru conținutul despre lacuri și recreere, Pühajärv este un nume foarte puternic.",
      en: "Pühajärv is a well-known lake in southern Estonia and is closely tied to the Otepää area. The lake stands for relaxation, summer holidays, and quiet shore landscapes. Many trips combine it with hiking and spa stays. For lake and leisure content, Pühajärv is a very strong name."
    },
    facts: {
      de: ["Valga maakond", "Bekannter Südsee", "Nähe zu Otepää", "Erholungs- und Sommerort", "Stark für Lake-SEO"],
      hu: ["Valga megye", "Ismert dél-észt tó", "Otepää közelében", "Pihenőhely és nyári célpont", "Erős tó SEO"],
      ro: ["Județul Valga", "Lac cunoscut din sud", "Aproape de Otepää", "Loc de relaxare", "SEO puternic pentru lac"],
      en: ["Valga County", "Well-known southern lake", "Near Otepää", "Relaxation and summer spot", "Strong lake SEO"]
    },
    image: "/geo-images/estonia/puhajarv.webp"
  },
  {
    id: "ee-r2big-emajogi",
    type: "river",
    parent: "ee-country",
    coords: [26.7290, 58.3780],
    name: {
      de: "Emajõgi",
      hu: "Emajõgi",
      ro: "Emajõgi",
      en: "Emajõgi"
    },
    description: {
      de: "Der Emajõgi ist der wichtigste Fluss in Südestland und prägt Tartu stark. Er verbindet Seen, Uferwege und die städtische Identität der Region. Spaziergänge entlang des Flusses gehören zu den klassischsten Eindrücken in Tartu. Für Fluss-SEO in Estland ist Emajõgi ein Schlüsselname.",
      hu: "Az Emajõgi Dél-Észtország legfontosabb folyója és erősen meghatározza Tartut. Összeköti a tavakat, a parti sétányokat és a városi identitást. A folyó menti séták Tartu egyik legklasszikusabb élményét adják. Az észt folyó SEO-ban az Emajõgi kulcsnév.",
      ro: "Emajõgi este cel mai important râu din sudul Estoniei și definește puternic Tartu. Leagă lacuri, alei de pe mal și identitatea urbană a regiunii. Plimbările pe malul râului sunt printre cele mai clasice experiențe din Tartu. Pentru SEO de râu în Estonia, Emajõgi este un nume cheie.",
      en: "Emajõgi is the most important river in southern Estonia and strongly shapes Tartu. It connects lakes, riverside paths, and the city's regional identity. Walks along the river are among the most classic experiences in Tartu. For river SEO in Estonia, Emajõgi is a key name."
    },
    facts: {
      de: ["Tartu", "Wichtigster Südfluss", "Städtische Uferwege", "Verbindet Seen und Stadt", "Starkes Fluss-SEO"],
      hu: ["Tartu", "A legfontosabb déli folyó", "Parti sétányok", "Tavakat és várost köt össze", "Erős folyó SEO"],
      ro: ["Tartu", "Cel mai important râu sudic", "Alei pe mal", "Leagă lacuri și oraș", "SEO puternic pentru râu"],
      en: ["Tartu", "Most important southern river", "Riverside walks", "Links lakes and city", "Strong river SEO"]
    },
    image: "/geo-images/estonia/emajogi.webp"
  },
  {
    id: "ee-r2big-hiiumaa-island",
    type: "island",
    parent: "ee-country",
    coords: [22.6000, 58.9500],
    name: {
      de: "Hiiumaa",
      hu: "Hiiumaa",
      ro: "Hiiumaa",
      en: "Hiiumaa"
    },
    description: {
      de: "Hiiumaa ist die zweitgrößte Insel Estlands und steht für Ruhe, Weite und Küstenlandschaften. Die Insel ist bei Reisenden beliebt, die langsameres Tempo und wenig Verkehr suchen. Leuchttürme, Wälder und Seeufer prägen das Bild der Insel. Für Inselferien in Estland ist Hiiumaa ein Muss.",
      hu: "Hiiumaa Észtország második legnagyobb szigete, a nyugalom, a tágasság és a parti tájak jelképe. A sziget azoknak kedvelt célpont, akik lassabb tempót és kevés forgalmat keresnek. Világítótornyok, erdők és tópartok alakítják a képet. Az észt szigeti nyaralásokban Hiiumaa kihagyhatatlan.",
      ro: "Hiiumaa este a doua insulă ca mărime a Estoniei și reprezintă liniște, spațiu și peisaje de coastă. Insula este populară printre călătorii care caută ritm mai lent și trafic redus. Farurile, pădurile și țărmurile îi definesc imaginea. Pentru vacanțele insulare din Estonia, Hiiumaa este obligatorie.",
      en: "Hiiumaa is Estonia's second-largest island and stands for calm, space, and coastal scenery. The island is popular with travelers who want a slower pace and little traffic. Lighthouses, forests, and shorelines define the look of the island. For Estonian island holidays, Hiiumaa is a must."
    },
    facts: {
      de: ["Hiiu maakond", "Zweitgrößte Insel", "Ruhige Küstenlandschaft", "Lighthouse-Feeling", "Starkes Insel-SEO"],
      hu: ["Hiiu megye", "Második legnagyobb sziget", "Nyugodt partvidék", "Világítótorony-hangulat", "Erős sziget SEO"],
      ro: ["Județul Hiiu", "A doua insulă ca mărime", "Peisaj de coastă liniștit", "Atmosferă de faruri", "SEO puternic pentru insulă"],
      en: ["Hiiu County", "Second-largest island", "Calm coastal scenery", "Lighthouse feel", "Strong island SEO"]
    },
    image: "/geo-images/estonia/hiiumaa-island.webp"
  },
  {
    id: "ee-r2big-vilsandi-island",
    type: "island",
    parent: "ee-country",
    coords: [21.8200, 58.3720],
    name: {
      de: "Vilsandi",
      hu: "Vilsandi",
      ro: "Vilsandi",
      en: "Vilsandi"
    },
    description: {
      de: "Vilsandi ist eine kleine Insel im Westen Estlands und Teil eines bekannten Naturraums. Sie ist eng mit dem Meer, Vogelbeobachtung und geschützten Küsten verbunden. Die Insel steht für stille, fast unberührte Landschaften. Für Natur- und Inselcontent in Estland ist Vilsandi besonders stark.",
      hu: "Vilsandi egy kis sziget Észtország nyugati részén, ismert természeti térség része. Szorosan kapcsolódik a tengerhez, a madármegfigyeléshez és a védett partokhoz. A sziget csendes, szinte érintetlen tájakat jelképez. Természeti és szigeti tartalmakhoz Vilsandi különösen erős.",
      ro: "Vilsandi este o insulă mică în vestul Estoniei și face parte dintr-o zonă naturală cunoscută. Este strâns legată de mare, observarea păsărilor și țărmurile protejate. Insula reprezintă peisaje liniștite, aproape neatinse. Pentru conținutul despre natură și insule din Estonia, Vilsandi este foarte puternic.",
      en: "Vilsandi is a small island in western Estonia and part of a well-known natural area. It is closely linked to the sea, birdwatching, and protected shores. The island stands for quiet, almost untouched landscapes. For nature and island content in Estonia, Vilsandi is especially strong."
    },
    facts: {
      de: ["Saare maakond", "Kleine Westinsel", "Vogelbeobachtung", "Geschützte Küsten", "Starkes Natur-SEO"],
      hu: ["Saare megye", "Kis nyugati sziget", "Madármegfigyelés", "Védett partok", "Erős természetes SEO"],
      ro: ["Județul Saare", "Insulă mică în vest", "Observarea păsărilor", "Țărmuri protejate", "SEO puternic de natură"],
      en: ["Saare County", "Small western island", "Birdwatching", "Protected shores", "Strong nature SEO"]
    },
    image: "/geo-images/estonia/vilsandi-island.webp"
  },
  {
    id: "ee-r2big-vormsi-island",
    type: "island",
    parent: "ee-country",
    coords: [23.2500, 59.0000],
    name: {
      de: "Vormsi",
      hu: "Vormsi",
      ro: "Vormsi",
      en: "Vormsi"
    },
    description: {
      de: "Vormsi ist eine ruhige Insel in Lääne und ein gutes Beispiel für westestnische Küstenkultur. Die Insel ist klein, aber landschaftlich sehr charaktervoll. Besucher kommen wegen Weite, Natur und der entspannten Insellogik. Für Lääne und Inselreisen ist Vormsi ein guter Name mit starkem Wiedererkennungswert.",
      hu: "Vormsi egy nyugodt sziget Lääne megyében, és jó példája a nyugat-észt parti kultúrának. A sziget kicsi, de tájképi szempontból nagyon karakteres. A látogatók a tágasság, a természet és a lassú szigeti ritmus miatt érkeznek. Lääne és szigetutakhoz Vormsi jól felismerhető név.",
      ro: "Vormsi este o insulă liniștită din județul Lääne și un bun exemplu de cultură costieră vest-estoniană. Insula este mică, dar foarte caracteristică peisagistic. Vizitatorii vin pentru spațiu, natură și ritmul relaxat al vieții insulare. Pentru traseele din Lääne și excursiile insulare, Vormsi are mare recognoscibilitate.",
      en: "Vormsi is a quiet island in Lääne County and a good example of western Estonian coastal culture. The island is small but very distinctive in its landscape. Visitors come for the space, nature, and relaxed island rhythm. For Lääne and island trips, Vormsi is highly recognizable."
    },
    facts: {
      de: ["Lääne maakond", "Ruhige Insel", "Westestnische Küste", "Kleine charaktervolle Landschaft", "Gutes Insel-SEO"],
      hu: ["Lääne megye", "Nyugodt sziget", "Nyugat-észt partvidék", "Kis, karakteres táj", "Jó sziget SEO"],
      ro: ["Județul Lääne", "Insulă liniștită", "Coasta vest-estoniană", "Peisaj mic și caracteristic", "SEO bun pentru insulă"],
      en: ["Lääne County", "Quiet island", "Western Estonian coast", "Small distinctive landscape", "Good island SEO"]
    },
    image: "/geo-images/estonia/vormsi-island.webp"
  },
  {
    id: "ee-r2big-saku-brewery",
    type: "industry",
    parent: "ee-country",
    coords: [24.6640, 59.3020],
    name: {
      de: "Saku-Brauerei",
      hu: "Saku sörgyár",
      ro: "Berăria Saku",
      en: "Saku Brewery"
    },
    description: {
      de: "Die Saku-Brauerei gehört zu den bekanntesten Industrie- und Markenorten in Harju. Der Name ist in Estland weit verbreitet und steht für Braukultur und Produktion. Für Besucher verbindet der Ort Wirtschaftsgeschichte mit einem klaren Alltagsbezug. In Industrie- und Getränkerouten ist Saku ein sehr starker Eintrag.",
      hu: "A Saku sörgyár Harju egyik legismertebb ipari és márkahelyszíne. A név széles körben ismert Észtországban, és a sörfőzéshez, valamint a termeléshez kapcsolódik. A helyszín a gazdaságtörténetet és a mindennapi ismertséget köti össze. Ipari és italos útvonalakon Saku nagyon erős bejegyzés.",
      ro: "Berăria Saku este unul dintre cele mai cunoscute locuri industriale și de brand din Harju. Numele este foarte răspândit în Estonia și este asociat cu producția de bere. Pentru vizitatori, locul combină istoria economică cu o legătură clară cu viața de zi cu zi. În traseele industriale și de băuturi, Saku este o prezență foarte puternică.",
      en: "Saku Brewery is one of the best-known industrial and brand sites in Harju County. The name is widely recognized in Estonia and stands for brewing and production. For visitors, the site combines economic history with a clear everyday connection. In industry and beverage routes, Saku is a very strong entry."
    },
    facts: {
      de: ["Harju maakond", "Bekannte Brauerei", "Markenstarker Name", "Industrie und Produktion", "Stark für Industry-SEO"],
      hu: ["Harju megye", "Ismert sörgyár", "Erős márkanév", "Ipar és termelés", "Erős industry SEO"],
      ro: ["Județul Harju", "Berărie cunoscută", "Nume de brand puternic", "Industrie și producție", "SEO puternic pentru industrie"],
      en: ["Harju County", "Well-known brewery", "Strong brand name", "Industry and production", "Strong industry SEO"]
    },
    image: "/geo-images/estonia/saku-brewery.webp"
  },
  {
    id: "ee-r2big-a-le-coq-brewery",
    type: "industry",
    parent: "ee-country",
    coords: [26.7280, 58.3770],
    name: {
      de: "A. Le Coq Brauerei",
      hu: "A. Le Coq sörgyár",
      ro: "Berăria A. Le Coq",
      en: "A. Le Coq Brewery"
    },
    description: {
      de: "Die A. Le Coq Brauerei ist ein prägender Industriename in Tartu. Der Standort verbindet Produktionsgeschichte, Marke und Stadtidentität sehr eng miteinander. Für viele Besucher gehört er zum modernen Profil von Tartu dazu. Als Industrie-POI ist der Name landesweit sofort verständlich.",
      hu: "Az A. Le Coq sörgyár meghatározó ipari név Tartuban. A helyszín szorosan összeköti a termelést, a márkát és a városi identitást. Sok látogató számára Tartu modern arculatának része. Ipari POI-ként az országban azonnal érthető név.",
      ro: "Berăria A. Le Coq este un nume industrial definitoriu în Tartu. Locația leagă foarte strâns producția, brandul și identitatea orașului. Pentru mulți vizitatori, face parte din profilul modern al orașului Tartu. Ca POI industrial, numele este imediat inteligibil la nivel național.",
      en: "The A. Le Coq Brewery is a defining industrial name in Tartu. The site tightly links production, brand, and city identity. For many visitors, it is part of Tartu's modern profile. As an industrial POI, the name is instantly understandable nationwide."
    },
    facts: {
      de: ["Tartu", "Starker Markenname", "Industrie und Braukultur", "Teil des Stadtprofils", "Wichtig für Beverage-SEO"],
      hu: ["Tartu", "Erős márkanév", "Ipar és sörkultúra", "A város arculatának része", "Fontos ital SEO"],
      ro: ["Tartu", "Nume de brand puternic", "Industrie și cultură a berii", "Parte din profilul orașului", "Important pentru SEO de băuturi"],
      en: ["Tartu", "Strong brand name", "Industry and beer culture", "Part of the city profile", "Important for beverage SEO"]
    },
    image: "/geo-images/estonia/a-le-coq-brewery.webp"
  },
  {
    id: "ee-r2big-parnu-mud-baths",
    type: "landmark",
    parent: "ee-country",
    coords: [24.4940, 58.3850],
    name: {
      de: "Pärnu-Schlammbäder",
      hu: "Pärnu iszapfürdők",
      ro: "Băile de nămol din Pärnu",
      en: "Pärnu Mud Baths"
    },
    description: {
      de: "Die Pärnu-Schlammbäder gehören zur klassischen Kur-Identität der Sommerstadt. Der Ort verbindet Wellness, Gesundheit und Stadtgeschichte auf engem Raum. Für viele Gäste ist er ein Symbol für Erholung an der Westküste. In Pärnu-Routen ist dieser Landmark-Name besonders passend.",
      hu: "A Pärnu iszapfürdők a nyári főváros klasszikus gyógyhelyi identitásához tartoznak. A hely a wellness, az egészség és a várostörténet kapcsolatát mutatja meg. Sok vendég számára a nyugati part pihenésének szimbóluma. Pärnu útvonalain ez a landmark név különösen találó.",
      ro: "Băile de nămol din Pärnu fac parte din identitatea balneară clasică a capitalei de vară. Locul combină wellness, sănătate și istoria orașului într-un spațiu compact. Pentru mulți oaspeți, este un simbol al relaxării de pe coasta de vest. În traseele din Pärnu, acest nume de landmark este foarte potrivit.",
      en: "The Pärnu Mud Baths are part of the classic spa identity of the summer capital. The site combines wellness, health, and city history in a compact area. For many guests, it symbolizes relaxation on the west coast. In Pärnu routes, this landmark name fits especially well."
    },
    facts: {
      de: ["Pärnu", "Klassischer Kurort", "Wellness und Gesundheit", "Symbol der Sommerstadt", "Stark für Spa-SEO"],
      hu: ["Pärnu", "Klasszikus gyógyhely", "Wellness és egészség", "A nyári főváros szimbóluma", "Erős spa SEO"],
      ro: ["Pärnu", "Stațiune balneară clasică", "Wellness și sănătate", "Simbolul capitalei de vară", "SEO puternic pentru spa"],
      en: ["Pärnu", "Classic spa resort", "Wellness and health", "Symbol of the summer capital", "Strong spa SEO"]
    },
    image: "/geo-images/estonia/parnu-mud-baths.webp"
  },
  {
    id: "ee-r2big-varbola-stronghold",
    type: "historical",
    parent: "ee-country",
    coords: [24.5400, 59.1090],
    name: {
      de: "Varbola-Burgwall",
      hu: "Varbola sáncvár",
      ro: "Cetatea Varbola",
      en: "Varbola Stronghold"
    },
    description: {
      de: "Der Varbola-Burgwall in Rapla ist ein wichtiger prähistorischer und frühmittelalterlicher Ort. Die Anlage zeigt, wie stark befestigte Siedlungen im Norden früher aussahen. Besucher erleben dort Landschaft, archäologische Geschichte und eine besondere Offenheit des Ortes. Für Rapla und historische Routen ist Varbola ein sehr gutes Ziel.",
      hu: "A raplai Varbola sáncvár fontos őskori és kora középkori helyszín. Az erődítés megmutatja, milyen erős volt északon a korai településvédelem. A látogatók tájat, régészeti történetet és a hely különleges nyitottságát kapják egyszerre. Rapla és történelmi útvonalak számára Varbola nagyon jó célpont.",
      ro: "Cetatea Varbola din Rapla este un loc important preistoric și din epoca timpurie medievală. Ansamblul arată cum arătau așezările fortificate din nord în trecut. Vizitatorii primesc aici peisaj, istorie arheologică și o deschidere specială a locului. Pentru Rapla și traseele istorice, Varbola este o destinație foarte bună.",
      en: "Varbola Stronghold in Rapla County is an important prehistoric and early medieval site. The structure shows what fortified settlements in the north used to look like. Visitors get landscape, archaeological history, and a special sense of openness in one place. For Rapla and history routes, Varbola is a very good destination."
    },
    facts: {
      de: ["Rapla", "Prähistorischer Ort", "Frühmittelalterliche Befestigung", "Archäologischer Wert", "Gutes Heritage-SEO"],
      hu: ["Rapla", "Őskori helyszín", "Kora középkori erődítés", "Régészeti érték", "Jó heritage SEO"],
      ro: ["Rapla", "Loc preistoric", "Fortificație medievală timpurie", "Valoare arheologică", "SEO bun de patrimoniu"],
      en: ["Rapla", "Prehistoric site", "Early medieval fortification", "Archaeological value", "Good heritage SEO"]
    },
    image: "/geo-images/estonia/varbola-stronghold.webp"
  },
  {
    id: "ee-r2big-poltsamaa-wine-cellar",
    type: "agriculture",
    parent: "ee-country",
    coords: [25.9790, 58.6510],
    name: {
      de: "Põltsamaa-Weinkeller",
      hu: "Põltsamaa borpince",
      ro: "Crama Põltsamaa",
      en: "Põltsamaa Wine Cellar"
    },
    description: {
      de: "Der Põltsamaa-Weinkeller ist ein bekannter Agrar- und Genussort in Zentralestland. Der Name verbindet Obst, Weinproduktion und regionale Kulinarik. Besucher finden hier einen starken Bezug zu lokaler Verarbeitung und Geschmackskultur. Für Agrar- und Food-SEO ist Põltsamaa besonders nützlich.",
      hu: "A Põltsamaa borpince Közép-Észtország ismert mezőgazdasági és gasztronómiai helyszíne. A név a gyümölcsöt, a borkészítést és a regionális kulináris kultúrát köti össze. A látogatók itt erős kapcsolatot kapnak a helyi feldolgozással és az ízkultúrával. Agrár- és food SEO szempontból Põltsamaa különösen hasznos.",
      ro: "Crama Põltsamaa este un loc agricol și gastronomic cunoscut din Estonia centrală. Numele leagă fructele, producția de vin și cultura culinară regională. Vizitatorii găsesc aici o conexiune puternică cu procesarea locală și cultura gustului. Pentru SEO agricol și food, Põltsamaa este foarte util.",
      en: "The Põltsamaa Wine Cellar is a well-known agriculture and food site in central Estonia. The name connects fruit, wine production, and regional culinary culture. Visitors get a strong sense of local processing and taste culture here. For agriculture and food SEO, Põltsamaa is especially useful."
    },
    facts: {
      de: ["Jõgeva", "Obst und Wein", "Regionale Kulinarik", "Verarbeitung vor Ort", "Starkes Food-SEO"],
      hu: ["Jõgeva", "Gyümölcs és bor", "Regionális gasztronómia", "Helyi feldolgozás", "Erős food SEO"],
      ro: ["Jõgeva", "Fructe și vin", "Cultură culinară regională", "Procesare locală", "SEO puternic pentru food"],
      en: ["Jõgeva", "Fruit and wine", "Regional culinary culture", "Local processing", "Strong food SEO"]
    },
    image: "/geo-images/estonia/poltsamaa-wine-cellar.webp"
  },
  {
    id: "ee-r2big-estonian-dairy-museum",
    type: "agriculture",
    parent: "ee-country",
    coords: [25.7850, 58.7670],
    name: {
      de: "Estnisches Milchmuseum",
      hu: "Észt Tejmúzeum",
      ro: "Muzeul Laptelui Estonian",
      en: "Estonian Dairy Museum"
    },
    description: {
      de: "Das Estnische Milchmuseum zeigt, wie stark Milchverarbeitung und Hofwirtschaft das Land geprägt haben. Der Standort vermittelt landwirtschaftliche Erinnerung und praktische Alltagsgeschichte. Für Familien und Schulgruppen ist das Thema leicht zugänglich. In Agrar-SEO rundet es das Bild der estnischen Lebensmittelproduktion gut ab.",
      hu: "Az Észt Tejmúzeum bemutatja, mennyire meghatározta a tejfeldolgozás és a gazdasági élet az országot. A helyszín mezőgazdasági emlékezetet és mindennapi történetet közvetít. Családok és iskolai csoportok számára könnyen befogadható téma. Az agrár SEO-ban jól kerekíti az észt élelmiszertermelés képét.",
      ro: "Muzeul Laptelui Estonian arată cât de mult au modelat procesarea laptelui și gospodăria rurală țara. Locația transmite memorie agricolă și istorie cotidiană practică. Pentru familii și grupuri școlare, tema este ușor de înțeles. În SEO agricol, completează bine imaginea producției alimentare estoniene.",
      en: "The Estonian Dairy Museum shows how strongly milk processing and farm life shaped the country. The site conveys agricultural memory and practical everyday history. For families and school groups, the topic is very accessible. In agriculture SEO, it rounds out the picture of Estonian food production well."
    },
    facts: {
      de: ["Järva", "Milchverarbeitung", "Landwirtschaftliche Erinnerung", "Familienfreundlich", "Starkes Agrar-SEO"],
      hu: ["Järva", "Tejfeldolgozás", "Mezőgazdasági emlékezet", "Családbarát", "Erős agrár SEO"],
      ro: ["Järva", "Procesarea laptelui", "Memorie agricolă", "Prietenos pentru familii", "SEO agricol puternic"],
      en: ["Järva", "Milk processing", "Agricultural memory", "Family-friendly", "Strong agriculture SEO"]
    },
    image: "/geo-images/estonia/estonian-dairy-museum.webp"
  },
  {
    id: "ee-r2big-narva-power-plants",
    type: "industry",
    parent: "ee-country",
    coords: [28.0820, 59.4010],
    name: {
      de: "Narva-Kraftwerke",
      hu: "Narvai erőművek",
      ro: "Centralele electrice din Narva",
      en: "Narva Power Plants"
    },
    description: {
      de: "Die Narva-Kraftwerke sind ein zentraler Industriestandort im Nordosten Estlands. Sie stehen für Energiegeschichte, große Infrastruktur und die industrielle Prägung der Region. Der Name ist in Estland seit Jahrzehnten bekannt und stark aufgeladen. Für Industrie- und Energiethemen ist Narva ein Schlüsselort.",
      hu: "A Narvai erőművek Északkelet-Észtország központi ipari helyszíne. Az energiatermelés történetét, a nagy infrastruktúrát és a régió ipari jellegét képviselik. A név Észországban évtizedek óta ismert és erősen kötött. Ipari és energetikai témákhoz Narva kulcshelyszín.",
      ro: "Centralele electrice din Narva sunt un sit industrial central în nord-estul Estoniei. Ele reprezintă istoria energiei, infrastructura mare și profilul industrial al regiunii. Numele este cunoscut în Estonia de decenii și are multă greutate. Pentru temele industriale și energetice, Narva este un loc-cheie.",
      en: "The Narva Power Plants are a central industrial site in northeastern Estonia. They represent energy history, large infrastructure, and the region's industrial identity. The name has been well known in Estonia for decades and carries real weight. For industry and energy themes, Narva is a key place."
    },
    facts: {
      de: ["Ida-Viru", "Energie und Infrastruktur", "Großer Industriestandort", "Historisch wichtiger Name", "Starkes Energy-SEO"],
      hu: ["Ida-Viru", "Energia és infrastruktúra", "Nagy ipari helyszín", "Történelmileg fontos név", "Erős energia SEO"],
      ro: ["Ida-Viru", "Energie și infrastructură", "Sit industrial mare", "Nume istoric important", "SEO puternic pentru energie"],
      en: ["Ida-Viru", "Energy and infrastructure", "Large industrial site", "Historically important name", "Strong energy SEO"]
    },
    image: "/geo-images/estonia/narva-power-plants.webp"
  },
  {
    id: "ee-r2big-tallinn-zoo",
    type: "kid-landmark",
    parent: "ee-country",
    coords: [24.6920, 59.3960],
    name: {
      de: "Tallinner Zoo",
      hu: "Tallinni Állatkert",
      ro: "Grădina zoologică din Tallinn",
      en: "Tallinn Zoo"
    },
    description: {
      de: "Der Tallinner Zoo ist eines der bekanntesten Familienziele in Harju. Er verbindet Tierwelt, Bildung und einen langen Tagesaufenthalt in der Hauptstadt. Für Kinder ist er ein klassischer Ort mit breitem Erlebniswert. In Familien- und Kid-SEO ist der Zoo ein sicherer Treffer.",
      hu: "A Tallinni Állatkert Harju egyik legismertebb családi célpontja. Az állatvilágot, az oktatást és a hosszú városi programot köti össze. Gyerekek számára klasszikus hely széles élményértékkel. Családi és kid SEO-ban az állatkert biztos találat.",
      ro: "Grădina zoologică din Tallinn este una dintre cele mai cunoscute destinații de familie din Harju. Leagă lumea animalelor, educația și o zi întreagă în capitală. Pentru copii este un loc clasic, cu valoare mare de experiență. În SEO pentru familii și copii, grădina zoologică este o alegere sigură.",
      en: "Tallinn Zoo is one of Harju's best-known family destinations. It combines wildlife, education, and a full day in the capital. For children, it is a classic place with broad experience value. In family and kid SEO, the zoo is a safe win."
    },
    facts: {
      de: ["Harju", "Familienziel in Tallinn", "Tierwelt und Bildung", "Ganztagesprogramm", "Starkes Kid-SEO"],
      hu: ["Harju", "Családi célpont Tallinnban", "Állatvilág és oktatás", "Egész napos program", "Erős kid SEO"],
      ro: ["Harju", "Destinație de familie în Tallinn", "Animale și educație", "Program de o zi", "SEO puternic pentru copii"],
      en: ["Harju", "Family destination in Tallinn", "Wildlife and education", "Full-day program", "Strong kid SEO"]
    },
    image: "/geo-images/estonia/tallinn-zoo.webp"
  },
  {
    id: "ee-r2big-lottemaa",
    type: "kid-landmark",
    parent: "ee-country",
    coords: [24.3790, 58.4010],
    name: {
      de: "Lottemaa",
      hu: "Lottemaa",
      ro: "Lottemaa",
      en: "Lottemaa"
    },
    description: {
      de: "Lottemaa ist ein bekanntes Familien- und Themenziel im Landkreis Pärnu. Der Park spricht Kinder mit Geschichten, Spielbereichen und einer klaren Erlebniswelt an. Viele Sommerreisen an die Westküste verbinden Strand und Lottemaa. Für Kinderattraktionen in Estland gehört der Name ganz nach oben.",
      hu: "Lottemaa ismert családi és tematikus célpont Pärnu megyében. A park történetekkel, játéktérrel és erős élményvilággal szólítja meg a gyerekeket. Sok nyári nyugat-parti utazás a strandot és Lottemaa-t együtt kezeli. Az észt gyerekattrakciók között a név a csúcson van.",
      ro: "Lottemaa este o destinație de familie și tematică bine cunoscută în județul Pärnu. Parcul îi atrage pe copii cu povești, zone de joacă și o lume clară a experienței. Multe excursii de vară pe coasta de vest combină plaja cu Lottemaa. Printre atracțiile pentru copii din Estonia, numele este de top.",
      en: "Lottemaa is a well-known family and theme destination in Pärnu County. The park appeals to children with stories, play areas, and a clear experience world. Many summer trips on the west coast combine the beach with Lottemaa. Among Estonia's kid attractions, the name is top-tier."
    },
    facts: {
      de: ["Pärnu", "Themenpark für Kinder", "Sommer- und Familienziel", "Stark an der Westküste", "Top-Kid-SEO"],
      hu: ["Pärnu", "Gyerekeknek szóló park", "Nyári és családi célpont", "Erős a nyugati parton", "Top kid SEO"],
      ro: ["Pärnu", "Parc tematic pentru copii", "Destinație de vară și familie", "Puternic pe coasta de vest", "SEO de top pentru copii"],
      en: ["Pärnu", "Theme park for kids", "Summer and family destination", "Strong on the west coast", "Top kid SEO"]
    },
    image: "/geo-images/estonia/lottemaa.webp"
  },
  {
    id: "ee-r2big-ahhaa-science-centre",
    type: "kid-landmark",
    parent: "ee-country",
    coords: [26.7330, 58.3770],
    name: {
      de: "AHHAA Wissenschaftszentrum",
      hu: "AHHAA Tudományközpont",
      ro: "Centrul științific AHHAA",
      en: "AHHAA Science Centre"
    },
    description: {
      de: "Das AHHAA-Zentrum in Tartu ist eines der stärksten Familienziele des Landes. Es verbindet Wissenschaft, Interaktion und spielerisches Lernen für verschiedene Altersgruppen. Kinder bekommen hier einen besonders aktiven Zugang zu Technik und Naturthemen. Für Tartu und Kid-SEO ist das Zentrum extrem nützlich.",
      hu: "A Tartu-ban működő AHHAA központ az ország egyik legerősebb családi célpontja. A tudományt, az interaktivitást és a játékos tanulást köti össze több korosztály számára. A gyerekek itt nagyon aktív módon találkoznak a technikával és a természeti témákkal. Tartu és kid SEO szempontból a központ rendkívül hasznos.",
      ro: "Centrul AHHAA din Tartu este una dintre cele mai puternice destinații de familie din țară. Leagă știința, interacțiunea și învățarea prin joc pentru mai multe grupe de vârstă. Copiii au aici un contact foarte activ cu tehnologia și temele naturii. Pentru Tartu și SEO pentru copii, centrul este extrem de util.",
      en: "The AHHAA Center in Tartu is one of the country's strongest family destinations. It combines science, interaction, and playful learning for several age groups. Children get a very active introduction to technology and nature themes here. For Tartu and kid SEO, the center is extremely useful."
    },
    facts: {
      de: ["Tartu", "Interaktive Wissenschaft", "Familien-Highlight", "Spielerisches Lernen", "Starkes Bildungs-SEO"],
      hu: ["Tartu", "Interaktív tudomány", "Családi kiemelt hely", "Játékos tanulás", "Erős oktatási SEO"],
      ro: ["Tartu", "Știință interactivă", "Atracție pentru familie", "Învățare prin joc", "SEO educațional puternic"],
      en: ["Tartu", "Interactive science", "Family highlight", "Playful learning", "Strong education SEO"]
    },
    image: "/geo-images/estonia/ahhaa-science-centre.webp"
  },
  {
    id: "ee-r2big-vudila-playland",
    type: "kid-landmark",
    parent: "ee-country",
    coords: [26.8070, 58.4880],
    name: {
      de: "Vudila",
      hu: "Vudila",
      ro: "Vudila",
      en: "Vudila Playland"
    },
    description: {
      de: "Vudila ist ein beliebter Erlebnisort für Kinder im Landkreis Tartu. Der Park steht für Spielen, Wasser, Bewegung und Familienzeit im Freien. Viele Familien verbinden ihn mit Sommerurlauben rund um Tartu und die Seen. Für kinderfreundliche Estland-Routen ist Vudila sehr relevant.",
      hu: "A Vudila népszerű élményhely gyerekeknek Tartu megyében. A park a játékot, a vizet, a mozgást és a szabadtéri családi időt jelenti. Sok család a Tartu környéki nyári utakkal és tavakkal együtt tervezi. Gyerekbarát észt útvonalakhoz Vudila nagyon releváns.",
      ro: "Vudila este un loc de distracție popular pentru copii în județul Tartu. Parcul înseamnă joacă, apă, mișcare și timp de familie în aer liber. Multe familii îl combină cu vacanțele de vară din jurul Tartu și al lacurilor. Pentru traseele prietenoase cu copiii din Estonia, Vudila este foarte relevant.",
      en: "Vudila is a popular children's attraction in Tartu County. The park stands for play, water, movement, and family time outdoors. Many families combine it with summer trips around Tartu and the lakes. For child-friendly Estonia routes, Vudila is very relevant."
    },
    facts: {
      de: ["Tartu maakond", "Erlebnisort für Kinder", "Wasser und Bewegung", "Familienzeit im Freien", "Starkes Playland-SEO"],
      hu: ["Tartu megye", "Gyerek élményhely", "Víz és mozgás", "Családi szabadtéri idő", "Erős playland SEO"],
      ro: ["Județul Tartu", "Atracție pentru copii", "Apă și mișcare", "Timp de familie în aer liber", "SEO puternic pentru playland"],
      en: ["Tartu County", "Children's attraction", "Water and movement", "Outdoor family time", "Strong playland SEO"]
    },
    image: "/geo-images/estonia/vudila-playland.webp"
  }
];

export const estoniaAllPoi: POI[] = [estoniaCountry, ...estoniaRegions, ...estoniaCities, ...estoniaCulture, ...estoniaNature];
