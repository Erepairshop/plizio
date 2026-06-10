// @ts-nocheck
import type { POI } from "./poi";
import { cyprusOtherPoi } from "./poiExtraCyprusOther";

export const cyprusCountry: POI = {
  id: "country-cyprus",
  type: "country",
  parent: "europe",
  coords: [33.4299, 35.1264],
  name: {
    de: "Zypern",
    hu: "Ciprus",
    ro: "Cipru",
    en: "Cyprus"
  },
  description: {
    de: "Zypern ist eine sonnenverwöhnte Insel im östlichen Mittelmeer, bekannt für ihre reiche Geschichte, antike Ruinen und traumhafte Strände.",
    hu: "Ciprus egy napsütötte sziget a Földközi-tenger keleti részén, amely gazdag történelméről, ókori romjairól és gyönyörű strandjairól ismert.",
    ro: "Cipru este o insulă însorită din estul Mării Mediterane, cunoscută pentru istoria sa bogată, ruinele antice și plajele de vis.",
    en: "Cyprus is a sun-drenched island in the eastern Mediterranean, known for its rich history, ancient ruins, and stunning beaches."
  },
  descriptionAdvanced: {
      de: "Zypern, die drittgrößte Insel des Mittelmeers, liegt am strategischen Schnittpunkt dreier Kontinente und blickt auf eine über zehntausendjährige Geschichte zurück, die von Mykenern, Phöniziern, Persern und Römern nachhaltig geprägt wurde. Besonders bedeutend ist die antike mythologische Verbindung zur Göttin Aphrodite, deren Geburtsstätte bei Paphos legendär ist und jährlich zahlreiche Kulturinteressierte anzieht, die die archäologischen Schätze der Insel erkunden. Geographisch dominiert das imposante Troodos-Gebirge im Zentrum die Insel, während die Küstenebenen fruchtbare Böden für den Anbau von Zitrusfrüchten, Oliven und Wein bieten. Die Lage Zyperns machte es durch die Jahrhunderte zum Spielball der Mächte, von den Kreuzrittern unter Richard Löwenherz bis zur venezianischen und später osmanischen Herrschaft. Seit 1960 ist die Insel unabhängig, doch die Ereignisse von 1974 führten zu einer bis heute andauernden faktischen Teilung in einen griechisch-zyprischen Süden und einen türkisch-zyprischen Norden, getrennt durch die sogenannte Grüne Linie der Vereinten Nationen. Trotz dieser politischen Komplexität hat sich die Republik Zypern zu einem modernen Dienstleistungszentrum entwickelt, das besonders für seinen Tourismus, den Schiffbau und den Finanzsektor bekannt ist. Die reiche Flora beherbergt endemische Arten wie das Zypern-Mufflon, und die archäologischen Stätten von Kourion und Chirokitia zählen zu den bedeutendsten Zeugnissen menschlicher Zivilisation im gesamten östlichen Mittelmeerraum.",
      hu: "Ciprus a Földközi-tenger harmadik legnagyobb szigete, amely földrajzi elhelyezkedése révén évezredeken át a Közel-Kelet és Európa közötti kereskedelmi útvonalak kulcsfontosságú állomása volt. A sziget neve szorosan összefonódik a rézzel, amelynek bányászata már a bronzkorban világhírnevet szerzett a területnek, és meghatározta gazdasági fejlődését az antikvitásban. A kulturális örökség rendkívül rétegzett: a neolitikus településektől kezdve a görög városállamokon és római színházakon át egészen a bizánci kolostorokig és gótikus katedrálisokig minden korszak otthagyta a nyomát. A sziget belsejében magasodó Tróodosz-hegység festői falvai és freskókkal díszített templomai az UNESCO Világörökség részét képezik, hűvös menedéket nyújtva a forró nyári hőség elől. A 20. század viharos történelme, különösen az 1960-as függetlenné válás és az 1974-es események következtében Ciprus ma kettéosztott ország, ahol a főváros, Nicosia az utolsó fallal elválasztott európai metropolisz maradt. A gazdaság pillérei ma már a turizmus mellett a tengeri szállítmányozás és a nemzetközi üzleti szolgáltatások, miközben a helyi gasztronómia olyan egyedi termékekkel büszkélkedhet, mint a világszerte ismert halloumi sajt vagy a Commandaria bor, amely a világ egyik legrégebbi nevesített borszfajtájaként ismert. Ciprus természeti értékei, mint az Akamas-félsziget érintetlen partjai vagy a Ciprusi muflon élőhelyei, különleges ökológiai jelentőséggel bírnak a térségben.",
      ro: "Cipru reprezintă o punte culturală și istorică între Orient și Occident, fiind situată strategic în bazinul estic al Mării Mediterane, la sud de Turcia și la vest de coasta Levantului. Insula este renumită pentru mozaicul său arheologic divers, care include situri preistorice precum Choirokoitia, dar și mărturii spectaculoase ale perioadei elenistice și romane, în special în Paphos, unde mozaicurile conservate sunt considerate printre cele mai valoroase din punct de vedere artistic din lume. Istoria medievală a insulei a fost marcată profund de dominația dinastiei Lusignan și a Republicii Venețiene, care au lăsat în urmă fortificații impunătoare și catedrale gotice transformate ulterior în moschei, precum cele din Nicosia sau Famagusta. Un aspect definitoriu al Ciprului modern este diviziunea administrativă și politică rezultată în urma conflictelor din 1974, fapt ce a dus la stabilirea unei zone tampon monitorizate de ONU între comunitățile greco-cipriotă și turco-cipriotă. Cu toate acestea, Republica Cipru a reușit să se integreze cu succes în Uniunea Europeană în 2004, devenind un hub financiar regional important și o destinație turistică de elită, apreciată pentru plajele sale impecabile și pentru biodiversitatea munților Troodos. Tradițiile locale autentice, precum broderia de Lefkara sau arta iconografică bizantină, continuă să fie păstrate cu mândrie, reflectând identitatea profundă a unei națiuni care a asimilat influențele marilor imperii istorice fără a-și pierde specificul mediteranean.",
      en: "Cyprus, situated in the northeastern corner of the Mediterranean Sea, serves as a crucial geographical crossroads where Europe, Asia, and Africa meet, fostering a unique civilization that dates back over 10,000 years. The island's identity is deeply rooted in its mythical status as the birthplace of Aphrodite, the goddess of love, whose ancient sanctuary at Palaepaphos was one of the most celebrated pilgrimage sites of the classical world. Throughout its long history, Cyprus has been a prized possession for numerous empires due to its abundant copper resources and strategic maritime location, passing through the control of the Assyrians, Egyptians, Persians, and Romans before becoming a vital province of the Byzantine Empire. The medieval period saw the arrival of the Crusaders under Richard the Lionheart, the long rule of the Frankish Lusignans, and the Venetians, who constructed the formidable defensive walls that still encircle the heart of Nicosia. After nearly three centuries of Ottoman rule and subsequent administration by Great Britain, Cyprus achieved independence in 1960, though ethnic tensions later led to the 1974 division which remains an unresolved geopolitical issue, leaving Nicosia as the world's last divided capital city. Economically, Cyprus has successfully transformed from an agrarian society into a robust service-based economy, excelling in international maritime shipping, high-end tourism, and financial services, while its accession to the European Union in 2004 marked a significant turning point in its modern development and international standing.",
    },
  facts: {
    de: ["Zypern ist als die Insel der Aphrodite bekannt."],
    hu: ["Ciprust Aphrodité szigeteként is ismerik."],
    ro: ["Cipru este cunoscută ca insula Afroditei."],
    en: ["Cyprus is known as the island of Aphrodite."]
  },
  factsAdvanced: {
      de: [
        "Zypern ist seit 2004 Mitglied der Europäischen Union.",
        "Die Insel ist seit 1974 de facto geteilt in die Republik Zypern im Süden und die Türkische Republik Nordzypern.",
        "Der Halloumi-Käse ist ein berühmtes zypriotisches Exportgut.",
        "Auf Zypern herrscht Linksverkehr, ein Überbleibsel der britischen Kolonialzeit.",
        "Die ältesten bekannten menschlichen Überreste auf Zypern sind etwa 10.500 Jahre alt.",
        "Das Mufflon, ein Wildschaf, ist das größte Säugetier der Insel und ein nationales Symbol."
    ],
      hu: ["A sziget teljes területe 9251 négyzetkilométer.", "Legmagasabb pontja az Olümposz-hegy, amely 1952 méter magas.", "Ciprus 1960. augusztus 16-án nyerte el függetlenségét Nagy-Britanniától.", "A sziget a rézbányászat egyik legfontosabb központja volt az ókorban.", "A lakosság száma meghaladja az 1,2 millió főt.", "A Commandaria bor a világ egyik legrégebbi, ma is gyártott bormárkája."],
      ro: [
        "Cipru este membru al Uniunii Europene din 2004.",
        "Insula este împărțită de facto din 1974 în Republica Cipru în sud și autoproclamata Republică Turcă a Ciprului de Nord.",
        "Brânza Halloumi este un celebru produs de export cipriot.",
        "În Cipru se conduce pe partea stângă, o moștenire a perioadei coloniale britanice.",
        "Cele mai vechi rămășițe umane cunoscute în Cipru au o vechime de aproximativ 10.500 de ani.",
        "Muflonul, o oaie sălbatică, este cel mai mare mamifer de pe insulă și un simbol național."
    ],
      en: ["Total land area measures approximately 9,251 square kilometers.", "The highest point is Mount Olympus, standing at 1,952 meters above sea level.", "Cyprus achieved formal independence from British rule on August 16, 1960.", "It joined the European Union as a full member on May 1, 2004.", "The island is home to several UNESCO World Heritage sites including Paphos.", "The currency changed from the Cypriot Pound to the Euro in 2008."],
    }, image: "/poi-images/country-cyprus.webp"};

export const cyprusRegions: POI[] = [
  {
    id: "cy-nicosia", "sights": {"de": [{"name": "Moyseio Istorikis Motosikletas Kyproy", "text": "Ein Museum in Nikosia, das klassische Motorräder zeigt.", "category": "museum", "coords": [33.358387, 35.172869]}, {"name": "Lefkoşa Mevlevihanesi", "text": "Ein Museum in Nikosia in einem ehemaligen Derwisch-Kloster.", "category": "museum", "coords": [33.361892, 35.180809]}, {"name": "Archontiko Chatzigeorgaki Kornesioy", "text": "Ein historisches Herrenhaus aus dem 18. Jahrhundert und Museum in Nikosia.", "category": "museum", "coords": [33.366766, 35.171871]}, {"name": "Derviş Paşa Konağı", "text": "Ein historisches Herrenhaus in Nikosia, das osmanische Architektur repräsentiert.", "category": "museum", "coords": [33.358505, 35.176372]}, {"name": "A.G Leventis Gallery", "text": "Eine Kunstgalerie in Nikosia mit europäischen und zyprischen Werken.", "category": "museum", "coords": [33.358391, 35.169311]}, {"name": "Mnimeio Eleytherias", "text": "Ein Denkmal in Nikosia, das den Kampf um die Freiheit symbolisiert.", "category": "historical", "coords": [33.370303, 35.171546]}, {"name": "Dimotiko Theatro Leykosias", "text": "Das städtische Theater für darstellende Künste in Nikosia.", "category": "cultural", "coords": [33.35507, 35.172637]}, {"name": "Selimiye-Moschee", "text": "Eine bedeutende Moschee in Nikosia, die ursprünglich als gotische Kathedrale errichtet wurde.", "category": "religious", "coords": [33.364546, 35.176515]}, {"name": "Johanneskirche", "text": "Die orthodoxe Johannes-Kathedrale in Nikosia.", "category": "religious", "coords": [33.367917, 35.173301]}, {"name": "Sarayönü Camii", "text": "Eine historische Moschee am Sarayönü-Platz in Nikosia.", "category": "religious", "coords": [33.360572, 35.177729]}, {"name": "Haydarpaşa Camii", "text": "Eine Kirche aus dem 14. Jahrhundert in Nikosia, heute bekannt als Haydar-Pascha-Moschee.", "category": "religious", "coords": [33.366062, 35.177476]}, {"name": "Akkavuk Masjid", "text": "Eine kleine historische Moschee oder Masdschid in Nikosia.", "category": "religious", "coords": [33.364498, 35.179865]}, {"name": "Tzami Mpairaktari", "text": "Eine Moschee in Nikosia, die an der Stelle einer venezianischen Bastion errichtet wurde.", "category": "religious", "coords": [33.365424, 35.169057]}, {"name": "Church of the Holy Cross", "text": "Eine katholische Kirche in Nikosia in der Nähe der Grünen Linie.", "category": "religious", "coords": [33.357419, 35.174328]}, {"name": "Yenicami", "text": "Eine Moschee in Nikosia, die auf den Ruinen einer Kirche aus dem 14. Jahrhundert errichtet wurde.", "category": "religious", "coords": [33.366237, 35.178598]}, {"name": "Büyük Hamam", "text": "Ein historisches traditionelles türkisches Bad in Nikosia.", "category": "landmark", "coords": [33.361678, 35.176765]}, {"name": "Belediye Pazarı", "text": "Ein traditioneller städtischer Markt in Nikosia.", "category": "landmark", "coords": [33.364634, 35.175412]}, {"name": "Çağlayan Parkı", "text": "Ein öffentlicher Park in Nikosia zur Erholung und Freizeitgestaltung.", "category": "park", "coords": [33.368092, 35.18095]}, {"name": "Laiki Geitonia", "text": "Ein traditionelles restauriertes Viertel in Nikosia mit Geschäften und Kunsthandwerk.", "category": "landmark", "coords": [33.362253, 35.169854]}, {"name": "Zypernmuseum", "text": "Das größte und älteste archäologische Museum Zyperns in Nikosia.", "category": "museum", "coords": [33.355753, 35.171733]}, {"name": "Dimotiko Kentro Technon Leykosias", "text": "Ein zeitgenössisches Kunstzentrum und Museum in Nikosia.", "category": "museum", "coords": [33.366724, 35.173929]}, {"name": "Moyseio Astynomias Kyproy", "text": "Ein Museum in Nikosia, das der Geschichte der zyprischen Polizei gewidmet ist.", "category": "museum", "coords": [33.374292, 35.144751]}, {"name": "Fylakismena Mnimata", "text": "Ein Denkmal und Friedhof in Nikosia für Kämpfer der EOKA-Bewegung.", "category": "historical", "coords": [33.343707, 35.180405]}, {"name": "Casteliotissa Medieval Hall", "text": "Eine mittelalterliche Halle in Nikosia für kulturelle Veranstaltungen und Ausstellungen.", "category": "cultural", "coords": [33.357433, 35.173411]}, {"name": "Panayia", "text": "Ein lokales Gotteshaus in Nikosia.", "category": "religious", "coords": [33.379584, 35.176132]}, {"name": "Ekklisia Faneromenis", "text": "Eine historische orthodoxe Kirche in Nikosia in der Nähe der Grünen Linie.", "category": "religious", "coords": [33.362508, 35.173481]}, {"name": "Sourp Asdvadzadzin", "text": "Eine historische armenische Kirche in Nikosia.", "category": "religious", "coords": [33.367166, 35.152416]}, {"name": "Agios Antonios", "text": "Eine griechisch-orthodoxe Kirche in Nikosia.", "category": "religious", "coords": [33.367897, 35.171692]}, {"name": "Chyisaliniotissa Church", "text": "Eine alte orthodoxe Kirche in Nikosia, bekannt für ihre byzantinischen Ikonen.", "category": "religious", "coords": [33.369689, 35.176274]}, {"name": "Archaggelos Michail Trypiotis", "text": "Eine historische orthodoxe Kirche in Nikosia mit feinen Holzschnitzereien.", "category": "religious", "coords": [33.362623, 35.171312]}, {"name": "Dimotikos Kipos Leykosias", "text": "Ein öffentlicher Stadtgarten in Nikosia, der Ruhe und Entspannung im Grünen bietet.", "category": "park", "coords": [33.353981, 35.17292]}, {"name": "National Art Gallery", "text": "Die Nationalgalerie in Nikosia präsentiert bedeutende Kunstwerke des Landes.", "category": "museum", "coords": [33.365661, 35.167944]}, {"name": "Shacolas Tower Museum & Observatory", "text": "Ein Museum und Aussichtspunkt in Nikosia mit Panoramablick über die geteilte Stadt.", "category": "museum", "coords": [33.361525, 35.171852]}, {"name": "Ypaithrio Moyseio Neroy", "text": "Ein Freilichtmuseum in Nikosia, das sich mit der Geschichte der Wasserversorgung befasst.", "category": "museum", "coords": [33.357653, 35.146021]}, {"name": "The National Struggle Museum", "text": "Ein Museum in Nikosia, das den Unabhängigkeitskampf Zyperns dokumentiert.", "category": "museum", "coords": [33.363595, 35.182054]}, {"name": "RIK Radio Museum", "text": "Ein Museum in Nikosia, das die Geschichte des zyprischen Rundfunks präsentiert.", "category": "museum", "coords": [33.381935, 35.145386]}, {"name": "Kentro Kypriakis Cheirotechnias", "text": "Ein Zentrum in Nikosia, das traditionelles zyprisches Kunsthandwerk fördert und ausstellt.", "category": "museum", "coords": [33.373207, 35.140212]}, {"name": "Zampelas Art Museum", "text": "Ein Kunstmuseum in Nikosia, das moderne und zeitgenössische Werke ausstellt.", "category": "museum", "coords": [33.377533, 35.181891]}, {"name": "Kratiki Pinakothiki Sygchronis Technis - SPEL", "text": "Eine staatliche Galerie in Nikosia für zeitgenössische Kunst in einem historischen Gebäude.", "category": "museum", "coords": [33.370733, 35.174718]}, {"name": "Agios Georgios", "text": "Ein See in Nikosia, der sich für entspannte Spaziergänge und zum Genießen der Landschaft eignet.", "category": "natural", "coords": [33.401273, 35.142867]}, {"name": "Limni toy Magli", "text": "Dieser See in Nikosia bietet einen ruhigen Ort zur Naturbeobachtung.", "category": "natural", "coords": [33.308401, 35.127047]}, {"name": "Limni Athalassas", "text": "Ein lokaler See in Nikosia, ideal für friedliche Spaziergänge und frische Luft.", "category": "natural", "coords": [33.387377, 35.127679]}, {"name": "Hamitköy Göleti", "text": "Ein Seegebiet in Nikosia, das eine natürliche Flucht aus der Stadt bietet.", "category": "natural", "coords": [33.362891, 35.238413]}, {"name": "Zembilas Park", "text": "Ein öffentlicher Spielplatz in Nikosia, auf dem Kinder in einer sicheren Umgebung spielen können.", "category": "family", "coords": [33.34221, 35.156117]}, {"name": "Tempelodentro", "text": "Ein Spielplatz in Nikosia, der Erholung für Familien und Kinder bietet.", "category": "family", "coords": [33.385714, 35.153162]}, {"name": "Kumsal Park", "text": "Dieser Park in Nikosia verfügt über einen Spielplatz für lokale Familien.", "category": "family", "coords": [33.354166, 35.186739]}, {"name": "Heraclis Playground", "text": "Ein ausgewiesener Spielbereich in Nikosia, in dem Kinder verschiedene Aktivitäten genießen können.", "category": "family", "coords": [33.361061, 35.173515]}, {"name": "Cocuk Oyun Alani", "text": "Ein lokaler Spielplatz in Nikosia, der Kindern Spaß im Freien bietet.", "category": "family", "coords": [33.360571, 35.180598]}, {"name": "Bubble", "text": "Ein Spielplatz in Nikosia, der Kindern einen unterhaltsamen Raum zum Interagieren bietet.", "category": "family", "coords": [33.335295, 35.166844]}, {"name": "Hamam Omerye", "text": "Ein traditionelles Hamam in Nikosia, das Einblicke in die orientalische Badekultur bietet.", "category": "family", "coords": [33.365357, 35.172563]}], "hu": [{"name": "Moyseio Istorikis Motosikletas Kyproy", "text": "Klasszikus motorkerékpárokat bemutató múzeum Nikosiában.", "category": "museum", "coords": [33.358387, 35.172869]}, {"name": "Lefkoşa Mevlevihanesi", "text": "Múzeum Nikosiában egy egykori dervis kolostorban.", "category": "museum", "coords": [33.361892, 35.180809]}, {"name": "Archontiko Chatzigeorgaki Kornesioy", "text": "18. századi történelmi kastély és múzeum Nikosiában.", "category": "museum", "coords": [33.366766, 35.171871]}, {"name": "Derviş Paşa Konağı", "text": "Oszmán építészetet képviselő történelmi kúria Nikosiában.", "category": "museum", "coords": [33.358505, 35.176372]}, {"name": "A.G Leventis Gallery", "text": "Művészeti galéria Nikosiában európai és ciprusi művekkel.", "category": "museum", "coords": [33.358391, 35.169311]}, {"name": "Mnimeio Eleytherias", "text": "A szabadságharcot jelképező emlékmű Nikosiában.", "category": "historical", "coords": [33.370303, 35.171546]}, {"name": "Dimotiko Theatro Leykosias", "text": "Nikosia városi színháza az előadóművészetek számára.", "category": "cultural", "coords": [33.35507, 35.172637]}, {"name": "Selimiye Camii", "text": "Nikosia egyik jelentős mecsete, amely eredetileg gótikus székesegyháznak épült.", "category": "religious", "coords": [33.364546, 35.176515]}, {"name": "Agios Ioannis", "text": "Szent János ortodox székesegyház Nikosiában.", "category": "religious", "coords": [33.367917, 35.173301]}, {"name": "Sarayönü Camii", "text": "Történelmi mecset a nikosiai Sarayönü téren.", "category": "religious", "coords": [33.360572, 35.177729]}, {"name": "Haydarpaşa Camii", "text": "14. századi templom Nikosiában, ma Haydarpaşa mecset néven ismert.", "category": "religious", "coords": [33.366062, 35.177476]}, {"name": "Akkavuk Masjid", "text": "Kisméretű történelmi mecset vagy imaház Nikosiában.", "category": "religious", "coords": [33.364498, 35.179865]}, {"name": "Tzami Mpairaktari", "text": "Egy velencei bástya helyén épült mecset Nikosiában.", "category": "religious", "coords": [33.365424, 35.169057]}, {"name": "Church of the Holy Cross", "text": "Katolikus templom Nikosiában, a zöld vonal közelében.", "category": "religious", "coords": [33.357419, 35.174328]}, {"name": "Yenicami", "text": "14. századi templom romjaira épült mecset Nikosiában.", "category": "religious", "coords": [33.366237, 35.178598]}, {"name": "Büyük Hamam", "text": "Történelmi, hagyományos törökfürdő Nikosiában.", "category": "landmark", "coords": [33.361678, 35.176765]}, {"name": "Belediye Pazarı", "text": "Hagyományos városi piac Nikosiában.", "category": "landmark", "coords": [33.364634, 35.175412]}, {"name": "Çağlayan Parkı", "text": "Nyilvános park Nikosiában kikapcsolódásra és pihenésre.", "category": "park", "coords": [33.368092, 35.18095]}, {"name": "Laiki Geitonia", "text": "Hagyományos, felújított negyed Nikosiában üzletekkel és kézműves termékekkel.", "category": "landmark", "coords": [33.362253, 35.169854]}, {"name": "Kypriako Moyseio", "text": "Ciprus legnagyobb és legrégebbi régészeti múzeuma Nikosiában.", "category": "museum", "coords": [33.355753, 35.171733]}, {"name": "Dimotiko Kentro Technon Leykosias", "text": "Kortárs művészeti központ és múzeum Nikosiában.", "category": "museum", "coords": [33.366724, 35.173929]}, {"name": "Moyseio Astynomias Kyproy", "text": "A ciprusi rendőrség történetének szentelt múzeum Nikosiában.", "category": "museum", "coords": [33.374292, 35.144751]}, {"name": "Fylakismena Mnimata", "text": "Emlékmű és temető Nikosiában az EOKA-mozgalom harcosai számára.", "category": "historical", "coords": [33.343707, 35.180405]}, {"name": "Casteliotissa Medieval Hall", "text": "Középkori csarnok Nikosiában kulturális események és kiállítások számára.", "category": "cultural", "coords": [33.357433, 35.173411]}, {"name": "Panayia", "text": "Helyi istentiszteleti hely Nikosiában.", "category": "religious", "coords": [33.379584, 35.176132]}, {"name": "Ekklisia Faneromenis", "text": "Történelmi ortodox templom Nikosiában, a zöld vonal közelében.", "category": "religious", "coords": [33.362508, 35.173481]}, {"name": "Sourp Asdvadzadzin", "text": "Történelmi örmény templom Nikosiában.", "category": "religious", "coords": [33.367166, 35.152416]}, {"name": "Agios Antonios", "text": "Görög ortodox templom Nikosiában.", "category": "religious", "coords": [33.367897, 35.171692]}, {"name": "Chyisaliniotissa Church", "text": "Régi ortodox templom Nikosiában, amely bizánci ikonjairól ismert.", "category": "religious", "coords": [33.369689, 35.176274]}, {"name": "Archaggelos Michail Trypiotis", "text": "Történelmi ortodox templom Nikosiában finom fafaragványokkal.", "category": "religious", "coords": [33.362623, 35.171312]}, {"name": "Dimotikos Kipos Leykosias", "text": "Nikosia városi kertje, amely nyugodt zöld környezetet kínál a kikapcsolódáshoz.", "category": "park", "coords": [33.353981, 35.17292]}, {"name": "National Art Gallery", "text": "A nikosiai Nemzeti Galéria az ország jelentős műalkotásait mutatja be.", "category": "museum", "coords": [33.365661, 35.167944]}, {"name": "Shacolas Observatory", "text": "Múzeum és kilátó Nikosiában, ahonnan panorámás kilátás nyílik a kettéosztott városra.", "category": "museum", "coords": [33.361525, 35.171852]}, {"name": "Ypaithrio Moyseio Neroy", "text": "A vízellátás történetével foglalkozó szabadtéri múzeum Nikosiában.", "category": "museum", "coords": [33.357653, 35.146021]}, {"name": "The National Struggle Museum", "text": "Ciprus függetlenségi harcát dokumentáló múzeum Nikosiában.", "category": "museum", "coords": [33.363595, 35.182054]}, {"name": "RIK Radio Museum", "text": "A ciprusi rádiózás történetét bemutató múzeum Nikosiában.", "category": "museum", "coords": [33.381935, 35.145386]}, {"name": "Kentro Kypriakis Cheirotechnias", "text": "A hagyományos ciprusi kézművességet népszerűsítő és bemutató központ Nikosiában.", "category": "museum", "coords": [33.373207, 35.140212]}, {"name": "Zampelas Art Museum", "text": "Modern és kortárs műveket bemutató művészeti múzeum Nikosiában.", "category": "museum", "coords": [33.377533, 35.181891]}, {"name": "Kratiki Pinakothiki Sygchronis Technis - SPEL", "text": "Nikosia kortárs művészeti állami galériája egy történelmi épületben.", "category": "museum", "coords": [33.370733, 35.174718]}, {"name": "Agios Georgios", "text": "Tó Nicosiában, amely alkalmas pihentető sétákra és a táj élvezetére.", "category": "natural", "coords": [33.401273, 35.142867]}, {"name": "Limni toy Magli", "text": "Ez a Nicosia-i tó csendes helyet kínál a természet megfigyelésére.", "category": "natural", "coords": [33.308401, 35.127047]}, {"name": "Limni Athalassas", "text": "Helyi tó Nicosiában, amely ideális a nyugodt sétákhoz és a friss levegőhöz.", "category": "natural", "coords": [33.387377, 35.127679]}, {"name": "Hamitköy Göleti", "text": "Tóvidék Nicosiában, amely természetes kikapcsolódást nyújt a várostól távol.", "category": "natural", "coords": [33.362891, 35.238413]}, {"name": "Zembilas Park", "text": "Nyilvános játszótér Nicosiában, ahol a gyerekek biztonságos környezetben játszhatnak.", "category": "family", "coords": [33.34221, 35.156117]}, {"name": "Tempelodentro", "text": "Játszótér Nicosiában, amely kikapcsolódást nyújt a családok és a gyermekek számára.", "category": "family", "coords": [33.385714, 35.153162]}, {"name": "Kumsal Park", "text": "Ebben a Nicosia-i parkban játszótér várja a helyi családokat.", "category": "family", "coords": [33.354166, 35.186739]}, {"name": "Heraclis Playground", "text": "Kijelölt játszóterület Nicosiában, ahol a gyerekek különféle tevékenységeket élvezhetnek.", "category": "family", "coords": [33.361061, 35.173515]}, {"name": "Cocuk Oyun Alani", "text": "Helyi játszótér Nicosiában, amely szabadtéri szórakozást kínál a gyerekeknek.", "category": "family", "coords": [33.360571, 35.180598]}, {"name": "Bubble", "text": "Játszótér Nicosiában, amely szórakoztató teret biztosít a gyerekeknek a közös játékhoz.", "category": "family", "coords": [33.335295, 35.166844]}, {"name": "Hamam Omerye", "text": "Hagyományos hamam Nicosiában, amely az orientális fürdőkultúra élményét kínálja.", "category": "family", "coords": [33.365357, 35.172563]}], "ro": [{"name": "Moyseio Istorikis Motosikletas Kyproy", "text": "Un muzeu din Nikosia care expune motociclete clasice.", "category": "museum", "coords": [33.358387, 35.172869]}, {"name": "Lefkoşa Mevlevihanesi", "text": "Un muzeu din Nikosia situat într-o fostă mănăstire de derviși.", "category": "museum", "coords": [33.361892, 35.180809]}, {"name": "Archontiko Chatzigeorgaki Kornesioy", "text": "Un conac istoric din secolul al XVIII-lea și muzeu din Nikosia.", "category": "museum", "coords": [33.366766, 35.171871]}, {"name": "Derviş Paşa Konağı", "text": "Un conac istoric din Nikosia, reprezentativ pentru arhitectura otomană.", "category": "museum", "coords": [33.358505, 35.176372]}, {"name": "A.G Leventis Gallery", "text": "O galerie de artă din Nikosia cu lucrări europene și cipriote.", "category": "museum", "coords": [33.358391, 35.169311]}, {"name": "Mnimeio Eleytherias", "text": "Un monument din Nikosia care simbolizează lupta pentru libertate.", "category": "historical", "coords": [33.370303, 35.171546]}, {"name": "Dimotiko Theatro Leykosias", "text": "Teatrul municipal pentru arte spectacolului din Nikosia.", "category": "cultural", "coords": [33.35507, 35.172637]}, {"name": "Selimiye Camii", "text": "O moschee importantă din Nikosia, construită inițial ca o catedrală gotică.", "category": "religious", "coords": [33.364546, 35.176515]}, {"name": "Agios Ioannis", "text": "Catedrala ortodoxă Sfântul Ioan din Nikosia.", "category": "religious", "coords": [33.367917, 35.173301]}, {"name": "Sarayönü Camii", "text": "O moschee istorică situată în Piața Sarayönü din Nikosia.", "category": "religious", "coords": [33.360572, 35.177729]}, {"name": "Haydarpaşa Camii", "text": "O biserică din secolul al XIV-lea din Nikosia, cunoscută astăzi sub numele de Moscheea Haydarpașa.", "category": "religious", "coords": [33.366062, 35.177476]}, {"name": "Akkavuk Masjid", "text": "O mică moschee istorică sau masjid în Nikosia.", "category": "religious", "coords": [33.364498, 35.179865]}, {"name": "Tzami Mpairaktari", "text": "O moschee din Nikosia construită pe locul unui bastion venețian.", "category": "religious", "coords": [33.365424, 35.169057]}, {"name": "Church of the Holy Cross", "text": "O biserică catolică din Nikosia situată lângă Linia Verde.", "category": "religious", "coords": [33.357419, 35.174328]}, {"name": "Yenicami", "text": "O moschee din Nikosia construită pe ruinele unei biserici din secolul al XIV-lea.", "category": "religious", "coords": [33.366237, 35.178598]}, {"name": "Büyük Hamam", "text": "O baie turcească tradițională istorică din Nikosia.", "category": "landmark", "coords": [33.361678, 35.176765]}, {"name": "Belediye Pazarı", "text": "O piață municipală tradițională din Nikosia.", "category": "landmark", "coords": [33.364634, 35.175412]}, {"name": "Çağlayan Parkı", "text": "Un parc public din Nikosia pentru recreere și petrecerea timpului liber.", "category": "park", "coords": [33.368092, 35.18095]}, {"name": "Laiki Geitonia", "text": "Un cartier tradițional restaurat din Nikosia, cu magazine și meșteșuguri.", "category": "landmark", "coords": [33.362253, 35.169854]}, {"name": "Kypriako Moyseio", "text": "Cel mai mare și mai vechi muzeu arheologic din Cipru, situat în Nikosia.", "category": "museum", "coords": [33.355753, 35.171733]}, {"name": "Dimotiko Kentro Technon Leykosias", "text": "Un centru de artă contemporană și muzeu din Nikosia.", "category": "museum", "coords": [33.366724, 35.173929]}, {"name": "Moyseio Astynomias Kyproy", "text": "Un muzeu din Nikosia dedicat istoriei poliției din Cipru.", "category": "museum", "coords": [33.374292, 35.144751]}, {"name": "Fylakismena Mnimata", "text": "Un monument și cimitir din Nikosia pentru luptătorii mișcării EOKA.", "category": "historical", "coords": [33.343707, 35.180405]}, {"name": "Casteliotissa Medieval Hall", "text": "O sală medievală din Nikosia utilizată pentru evenimente culturale și expoziții.", "category": "cultural", "coords": [33.357433, 35.173411]}, {"name": "Panayia", "text": "Un lăcaș de cult local din Nikosia.", "category": "religious", "coords": [33.379584, 35.176132]}, {"name": "Ekklisia Faneromenis", "text": "O biserică ortodoxă istorică din Nikosia situată lângă Linia Verde.", "category": "religious", "coords": [33.362508, 35.173481]}, {"name": "Biserica armeană „Sourp Asdvadzadzin” Nicosia", "text": "O biserică armeană istorică din Nikosia.", "category": "religious", "coords": [33.367166, 35.152416]}, {"name": "Agios Antonios", "text": "O biserică ortodoxă greacă din Nikosia.", "category": "religious", "coords": [33.367897, 35.171692]}, {"name": "Chyisaliniotissa Church", "text": "O veche biserică ortodoxă din Nikosia, cunoscută pentru icoanele sale bizantine.", "category": "religious", "coords": [33.369689, 35.176274]}, {"name": "Archaggelos Michail Trypiotis", "text": "O biserică ortodoxă istorică din Nikosia, cu sculpturi fine în lemn.", "category": "religious", "coords": [33.362623, 35.171312]}, {"name": "Dimotikos Kipos Leykosias", "text": "O grădină publică din Nicosia, care oferă un spațiu verde liniștit pentru relaxare.", "category": "park", "coords": [33.353981, 35.17292]}, {"name": "National Art Gallery", "text": "Galeria Națională din Nicosia prezintă opere de artă semnificative ale țării.", "category": "museum", "coords": [33.365661, 35.167944]}, {"name": "Shacolas Observatory", "text": "Un muzeu și punct de observare din Nicosia, oferind o vedere panoramică asupra orașului divizat.", "category": "museum", "coords": [33.361525, 35.171852]}, {"name": "Ypaithrio Moyseio Neroy", "text": "Un muzeu al apei în aer liber din Nicosia, axat pe istoria alimentării cu apă.", "category": "museum", "coords": [33.357653, 35.146021]}, {"name": "The National Struggle Museum", "text": "Un muzeu din Nicosia care documentează lupta pentru independență a Ciprului.", "category": "museum", "coords": [33.363595, 35.182054]}, {"name": "RIK Radio Museum", "text": "Un muzeu din Nicosia care prezintă istoria radiodifuziunii cipriote.", "category": "museum", "coords": [33.381935, 35.145386]}, {"name": "Kentro Kypriakis Cheirotechnias", "text": "Un centru din Nicosia care promovează și expune meșteșugurile tradiționale cipriote.", "category": "museum", "coords": [33.373207, 35.140212]}, {"name": "Zampelas Art Museum", "text": "Un muzeu de artă din Nicosia care expune lucrări moderne și contemporane.", "category": "museum", "coords": [33.377533, 35.181891]}, {"name": "Kratiki Pinakothiki Sygchronis Technis - SPEL", "text": "O galerie de stat din Nicosia pentru artă contemporană, situată într-o clădire istorică.", "category": "museum", "coords": [33.370733, 35.174718]}, {"name": "Agios Georgios", "text": "Un lac în Nicosia, potrivit pentru plimbări relaxante și admirarea peisajului.", "category": "natural", "coords": [33.401273, 35.142867]}, {"name": "Limni toy Magli", "text": "Acest lac din Nicosia oferă un loc liniștit pentru observarea naturii.", "category": "natural", "coords": [33.308401, 35.127047]}, {"name": "Limni Athalassas", "text": "Un lac local în Nicosia, ideal pentru plimbări liniștite și aer curat.", "category": "natural", "coords": [33.387377, 35.127679]}, {"name": "Hamitköy Göleti", "text": "O zonă lacustră în Nicosia care oferă o evadare naturală din oraș.", "category": "natural", "coords": [33.362891, 35.238413]}, {"name": "Zembilas Park", "text": "Un loc de joacă public în Nicosia pentru ca cei mici să se joace într-un mediu sigur.", "category": "family", "coords": [33.34221, 35.156117]}, {"name": "Tempelodentro", "text": "Un loc de joacă în Nicosia care oferă recreere pentru familii și copii.", "category": "family", "coords": [33.385714, 35.153162]}, {"name": "Kumsal Park", "text": "Acest parc din Nicosia dispune de un loc de joacă pentru familiile locale.", "category": "family", "coords": [33.354166, 35.186739]}, {"name": "Heraclis Playground", "text": "O zonă de joacă special amenajată în Nicosia, unde copiii se pot bucura de diverse activități.", "category": "family", "coords": [33.361061, 35.173515]}, {"name": "Cocuk Oyun Alani", "text": "Un loc de joacă local în Nicosia care oferă distracție în aer liber pentru copii.", "category": "family", "coords": [33.360571, 35.180598]}, {"name": "Bubble", "text": "Un loc de joacă în Nicosia care oferă un spațiu distractiv pentru interacțiunea copiilor.", "category": "family", "coords": [33.335295, 35.166844]}, {"name": "Hamam Omerye", "text": "Un hamam tradițional în Nicosia, oferind o experiență autentică de relaxare orientală.", "category": "family", "coords": [33.365357, 35.172563]}], "en": [{"name": "Cyprus Classic Motorcycle Museum", "text": "A museum in Nicosia showcasing classic motorcycles.", "category": "museum", "coords": [33.358387, 35.172869]}, {"name": "Mevleli Tekke Museum", "text": "A museum in Nicosia located in a former dervish lodge.", "category": "museum", "coords": [33.361892, 35.180809]}, {"name": "Hadjigeorgakis Kornesios Mansion", "text": "A historic 18th-century mansion and museum in Nicosia.", "category": "museum", "coords": [33.366766, 35.171871]}, {"name": "Dervish Pasha Mansion", "text": "A historic mansion in Nicosia representing Ottoman architecture.", "category": "museum", "coords": [33.358505, 35.176372]}, {"name": "A.G Leventis Gallery", "text": "An art gallery in Nicosia featuring European and Cypriot works.", "category": "museum", "coords": [33.358391, 35.169311]}, {"name": "Liberty Monument", "text": "A monument in Nicosia symbolizing the struggle for freedom.", "category": "historical", "coords": [33.370303, 35.171546]}, {"name": "Nicosia Municipal Theater", "text": "The main municipal theatre for performing arts in Nicosia.", "category": "cultural", "coords": [33.35507, 35.172637]}, {"name": "Selimiye Mosque", "text": "A major mosque in Nicosia, originally built as a Gothic cathedral.", "category": "religious", "coords": [33.364546, 35.176515]}, {"name": "Agios Ioannis", "text": "The Orthodox cathedral of St. John in Nicosia.", "category": "religious", "coords": [33.367917, 35.173301]}, {"name": "Sarayönü Camii", "text": "A historic mosque located in Sarayönü Square in Nicosia.", "category": "religious", "coords": [33.360572, 35.177729]}, {"name": "Church of St.Katerina (14 c.)", "text": "A 14th-century church in Nicosia, now known as the Haydarpaşa Mosque.", "category": "religious", "coords": [33.366062, 35.177476]}, {"name": "Akkavuk Masjid", "text": "A small historic mosque or masjid in Nicosia.", "category": "religious", "coords": [33.364498, 35.179865]}, {"name": "Bairaktar Mosque", "text": "A mosque in Nicosia built on the site of a Venetian bastion.", "category": "religious", "coords": [33.365424, 35.169057]}, {"name": "Church of the Holy Cross", "text": "A Catholic church in Nicosia located near the Green Line.", "category": "religious", "coords": [33.357419, 35.174328]}, {"name": "Yenicami", "text": "A mosque in Nicosia built on the ruins of a 14th-century church.", "category": "religious", "coords": [33.366237, 35.178598]}, {"name": "Büyük Hamam", "text": "A historic traditional Turkish bath in Nicosia.", "category": "landmark", "coords": [33.361678, 35.176765]}, {"name": "Municipal Market", "text": "A traditional municipal market in Nicosia.", "category": "landmark", "coords": [33.364634, 35.175412]}, {"name": "Çağlayan Parkı", "text": "A public park in Nicosia for recreation and leisure.", "category": "park", "coords": [33.368092, 35.18095]}, {"name": "Laiki Geitonia", "text": "A traditional restored neighborhood in Nicosia with shops and crafts.", "category": "landmark", "coords": [33.362253, 35.169854]}, {"name": "Cyprus Museum", "text": "The largest and oldest archaeological museum in Cyprus, located in Nicosia.", "category": "museum", "coords": [33.355753, 35.171733]}, {"name": "Nicosia Municipal Arts Centre", "text": "A contemporary arts centre and museum in Nicosia.", "category": "museum", "coords": [33.366724, 35.173929]}, {"name": "Cyprus Police Museum", "text": "A museum in Nicosia dedicated to the history of the Cyprus police.", "category": "museum", "coords": [33.374292, 35.144751]}, {"name": "The Imprisoned Graves", "text": "A monument and cemetery in Nicosia for fighters of the EOKA movement.", "category": "historical", "coords": [33.343707, 35.180405]}, {"name": "Casteliotissa Medieval Hall", "text": "A medieval hall in Nicosia used for cultural events and exhibitions.", "category": "cultural", "coords": [33.357433, 35.173411]}, {"name": "Panayia", "text": "A local place of worship in Nicosia.", "category": "religious", "coords": [33.379584, 35.176132]}, {"name": "Faneroumeni Church", "text": "A historic Orthodox church in Nicosia located near the Green Line.", "category": "religious", "coords": [33.362508, 35.173481]}, {"name": "Sourp Asdvadzadzin", "text": "A historic Armenian church in Nicosia.", "category": "religious", "coords": [33.367166, 35.152416]}, {"name": "Agios Antonios", "text": "A Greek Orthodox church in Nicosia.", "category": "religious", "coords": [33.367897, 35.171692]}, {"name": "Chyisaliniotissa Church", "text": "An old Orthodox church in Nicosia known for its Byzantine icons.", "category": "religious", "coords": [33.369689, 35.176274]}, {"name": "Archaggelos Michail Trypiotis", "text": "A historic Orthodox church in Nicosia featuring fine wood carvings.", "category": "religious", "coords": [33.362623, 35.171312]}, {"name": "Nicosia Municipal Gardens", "text": "A public municipal garden in Nicosia offering a peaceful green space for relaxation.", "category": "park", "coords": [33.353981, 35.17292]}, {"name": "National Art Gallery", "text": "The National Art Gallery in Nicosia showcases significant artworks of the country.", "category": "museum", "coords": [33.365661, 35.167944]}, {"name": "Shacolas Observatory", "text": "A museum and observatory in Nicosia providing panoramic views of the divided city.", "category": "museum", "coords": [33.361525, 35.171852]}, {"name": "Outdoor Water Museum", "text": "An outdoor water museum in Nicosia focusing on the history of water supply.", "category": "museum", "coords": [33.357653, 35.146021]}, {"name": "The National Struggle Museum", "text": "A museum in Nicosia documenting Cyprus's struggle for national independence.", "category": "museum", "coords": [33.363595, 35.182054]}, {"name": "RIK Radio Museum", "text": "A museum in Nicosia presenting the history of Cypriot radio broadcasting.", "category": "museum", "coords": [33.381935, 35.145386]}, {"name": "Cyprus Handicrafts Centre", "text": "A centre in Nicosia promoting and exhibiting traditional Cypriot handicrafts.", "category": "museum", "coords": [33.373207, 35.140212]}, {"name": "Zampelas Art Museum", "text": "An art museum in Nicosia exhibiting modern and contemporary works.", "category": "museum", "coords": [33.377533, 35.181891]}, {"name": "State Gallery of Contemporary Art - SPEL", "text": "A state gallery in Nicosia for contemporary art located in a historic building.", "category": "museum", "coords": [33.370733, 35.174718]}, {"name": "Agios Georgios", "text": "A lake in Nicosia suitable for relaxing walks and enjoying the scenery.", "category": "natural", "coords": [33.401273, 35.142867]}, {"name": "Maglee Lake", "text": "This lake in Nicosia provides a quiet spot for nature observation.", "category": "natural", "coords": [33.308401, 35.127047]}, {"name": "Athalassa Lake", "text": "A local lake in Nicosia ideal for peaceful strolls and fresh air.", "category": "natural", "coords": [33.387377, 35.127679]}, {"name": "Hamitköy Göleti", "text": "A lake area in Nicosia offering a natural escape from the city.", "category": "natural", "coords": [33.362891, 35.238413]}, {"name": "Zembilas Park", "text": "A public playground in Nicosia for children to play in a safe environment.", "category": "family", "coords": [33.34221, 35.156117]}, {"name": "Tempelodentro", "text": "A playground in Nicosia providing recreation for families and children.", "category": "family", "coords": [33.385714, 35.153162]}, {"name": "Kumsal Park", "text": "This park in Nicosia features a playground for local families.", "category": "family", "coords": [33.354166, 35.186739]}, {"name": "Heraclis Playground", "text": "A designated play area in Nicosia where children can enjoy various activities.", "category": "family", "coords": [33.361061, 35.173515]}, {"name": "Cocuk Oyun Alani", "text": "A local playground in Nicosia offering outdoor fun for kids.", "category": "family", "coords": [33.360571, 35.180598]}, {"name": "Bubble", "text": "A playground in Nicosia providing a fun space for children to interact.", "category": "family", "coords": [33.335295, 35.166844]}, {"name": "Hamam Omerye", "text": "A traditional hammam in Nicosia offering a glimpse into oriental bathing culture.", "category": "family", "coords": [33.365357, 35.172563]}]},
    type: "city",
    parent: "CY-003",
    coords: [33.3666, 35.1666],
    name: { de: "Nikosia", hu: "Nicosia", ro: "Nicosia", en: "Nicosia" },
    description: {
      de: "Die Hauptstadt von Zypern, bekannt für ihre geteilte Altstadt und venezianischen Mauern.",
      hu: "Ciprus fővárosa, mely kettéosztott óvárosáról és velencei falairól ismert.",
      ro: "Capitala Ciprului, cunoscută pentru orașul său vechi divizat și zidurile venețiene.",
      en: "The capital of Cyprus, known for its divided old town and Venetian walls.",
      es: "La capital de Chipre, conocida por su casco antiguo dividido y sus murallas venecianas.",
      pt: "A capital de Chipre, conhecida pelo seu centro histórico dividido e muralhas venezianas.",
      fr: "La capitale de Chypre, connue pour sa vieille ville divisée et ses remparts vénitiens.",
    },
    descriptionAdvanced: {
      de: "Nikosia, die Hauptstadt Zyperns, ist die weltweit letzte geteilte Hauptstadt und ein Ort von enormer historischer und politischer Bedeutung. Die Stadt liegt im Zentrum der Insel in der Mesaoria-Ebene und wird durch die sogenannte 'Grüne Linie' der UN in einen griechisch-zyprischen Süden und einen türkisch-zyprischen Norden getrennt. Die markantesten Merkmale der Altstadt sind die beeindruckenden venezianischen Mauern aus dem 16. Jahrhundert, die die Stadt in Form eines elfzackigen Sterns umschließen. Innerhalb dieser Mauern finden Besucher ein Labyrinth aus engen Gassen, in denen sich osmanische Architektur wie der Büyük Han (die große Karawanserei) und gotische Bauwerke wie die Selimiye-Moschee (ehemals St.-Sophia-Kathedrale) abwechseln. Seit der Öffnung der Grenzübergänge im Jahr 2003, insbesondere in der Ledra-Straße, ist ein kultureller Austausch zwischen den beiden Hälften wieder möglich geworden. Nikosia ist nicht nur das politische und administrative Zentrum der Republik Zypern, sondern auch ein pulsierender Ort für Bildung und Kunst, der zahlreiche Museen wie das Zypern-Museum mit Funden aus der Jungsteinzeit beherbergt. Die Stadt verbindet auf einzigartige Weise die Einflüsse der Byzantiner, Lusignans, Venezianer, Osmanen und Briten.",
      hu: "Nicosia, Ciprus fővárosa a világ utolsó kettéosztott fővárosa, amely az ország központi síkságán, a Measzoria-síkságon fekszik. A várost az ENSZ által ellenőrzött ütközőzóna, az úgynevezett 'Zöld Vonal' választja el görög ciprusi déli és török ciprusi északi részre. Az óváros legjellegzetesebb látnivalói a 16. században épült velencei falak, amelyek tizenegy bástyájával egy szabályos csillag alakot formáznak. A falakon belül szűk, hangulatos utcák, mecsetekké alakított gótikus katedrálisok és oszmán kori karavánszerájok, mint például a pompás Büyük Han találhatók. A Ledra utca, a város fő bevásárlóutcája ma már átjárható gyalogosan, lehetővé téve a turisták számára mindkét oldal felfedezését. Nicosia nemcsak politikai központ, hanem kulturális csomópont is, itt található a híres Ciprusi Múzeum, amely az ország leggazdagabb régészeti gyűjteményét őrzi a neolitikumtól a bizánci korig. A város építészete a bizánci, frank, velencei és oszmán hódítások rétegeit tükrözi, egyedülálló történelmi atmoszférát teremtve. A modern városrész a falakon kívül fejlődött ki, ahol üzleti központok és egyetemek kaptak helyet.",
      ro: "Nicosia, capitala Ciprului, este cunoscută la nivel mondial ca fiind ultima capitală divizată, o linie de demarcație a ONU separând orașul în două sectoare din 1974. Situată în inima insulei, în câmpia Mesaoria, Nicosia păstrează mărturii ale unei istorii ce se întinde pe mii de ani, de la regatele antice la ocupația britanică. Cele mai impresionante structuri istorice sunt zidurile venețiene din secolul al XVI-lea, construite în formă de stea cu 11 bastioane, care înconjoară orașul vechi. În interiorul acestui perimetru, vizitatorii pot explora repere precum caravanseraiul Büyük Han, un exemplu excepțional de arhitectură otomană, sau Moscheea Selimiye, o fostă catedrală gotică franceză. Deschiderea punctelor de control de pe strada Ledra în anul 2003 a transformat dinamica orașului, facilitând accesul liber între cele două părți. Nicosia servește drept principal centru financiar și administrativ al țării, fiind totodată gazda Muzeului Ciprului, cea mai importantă instituție arheologică a insulei. Mixul cultural este prezent la tot pasul, de la tavernele tradiționale grecești la bazarurile orientale, reflectând influențele bizantine, lusignane și otomane. Orașul este și un centru academic vibrant, atrăgând mii de studenți internaționali în universitățile sale moderne.",
      en: "Nicosia, the capital of Cyprus, holds the unique distinction of being the world's last divided capital city, with a UN buffer zone known as the 'Green Line' splitting it into northern and southern sectors. Located in the central Mesaoria Plain, the city has been the island's administrative heart since the 10th century. Its most iconic historical feature is the massive Venetian walls built in the 16th century, which encircle the old city in a star shape with eleven bastions. Inside these walls, a rich tapestry of history unfolds through sites like the Büyük Han, a stunning Ottoman caravanserai, and the Selimiye Mosque, originally a 13th-century Gothic cathedral. Since the opening of the Ledra Street pedestrian crossing in 2003, the city has seen a resurgence in shared cultural activities and tourism between the two communities. Nicosia is home to the Cyprus Museum, the island's premier archaeological museum, housing artifacts from the Neolithic age to the Roman period. The city seamlessly blends ancient history with modern life, featuring contemporary art galleries and business districts alongside traditional markets. Despite its division, Nicosia remains a symbol of Cypriot resilience and a meeting point for diverse cultural influences spanning millennia.",
      es: "Nicosia, la capital de Chipre, es la última capital dividida del mundo y un lugar de enorme importancia histórica y política. Situada en el centro de la isla, en la llanura de Mesaoria, está separada por la 'Línea Verde' de la ONU en un sur grecochipriota y un norte turcochipriota. Las murallas venecianas del siglo XVI, que rodean la ciudad en forma de estrella de once puntas, son su rasgo más distintivo. En su interior, el laberinto de callejuelas revela arquitectura otomana como el Büyük Han (el gran caravasar) y estructuras góticas como la Mezquita Selimiye. Desde 2003, la apertura de los pasos fronterizos en la calle Ledra ha permitido de nuevo el intercambio cultural. Nicosia es el centro político y administrativo de la República de Chipre y un foco cultural que alberga museos como el Museo de Chipre, con hallazgos que se remontan al Neolítico. La ciudad fusiona influencias bizantinas, de los Lusignan, venecianas, otomanas y británicas.",
      pt: "Nicósia, a capital de Chipre, é a última capital dividida do mundo e um local de enorme importância histórica e política. A cidade situa-se no centro da ilha, na planície de Mesaoria, e está separada pela chamada 'Linha Verde' da ONU num sul cipriota grego e num norte cipriota turco. As características mais marcantes da cidade velha são as impressionantes muralhas venezianas do século XVI, que cercam a cidade na forma de uma estrela de onze pontas. Dentro destas muralhas, os visitantes encontram um labirinto de ruas estreitas onde se alternam a arquitetura otomana, como o Büyük Han (o grande caravançarai), e edifícios góticos, como a Mesquita Selimiye (antiga Catedral de Santa Sofia). Desde a abertura das passagens de fronteira em 2003, especialmente na Rua Ledra, o intercâmbio cultural entre as duas metades tornou-se novamente possível. Nicósia não é apenas o centro político e administrativo da República de Chipre, mas também um local vibrante para a educação e as artes, que alberga inúmeros museus, como o Museu de Chipre, com achados do período Neolítico. A cidade combina de forma única as influências dos bizantinos, lusignanos, venezianos, otomanos e britânicos.",
      fr: "Nicosie, la capitale de Chypre, est la dernière capitale divisée au monde et un lieu d'une immense importance historique et politique. La ville se situe au centre de l'île, dans la plaine de la Mésorée, et est séparée par la célèbre 'Ligne verte' de l'ONU en un sud chypriote grec et un nord chypriote turc. Les remparts vénitiens du XVIe siècle, qui entourent la ville en forme d'étoile à onze branches, en sont la caractéristique la plus marquante. À l'intérieur de ces murs, les visiteurs découvrent un labyrinthe de ruelles où alternent l'architecture ottomane, comme le Büyük Han (le grand caravansérail), et les édifices gothiques, comme la mosquée Selimiye (ancienne cathédrale Sainte-Sophie). Depuis l'ouverture des points de passage en 2003, notamment dans la rue Ledra, un échange culturel entre les deux parties est redevenu possible. Nicosie n'est pas seulement le centre politique et administratif de la République de Chypre, mais aussi un pôle dynamique pour l'éducation et les arts, abritant de nombreux musées comme le Musée de Chypre avec des découvertes datant du Néolithique. La ville allie de manière unique les influences byzantines, lusignanes, vénitiennes, ottomanes et britanniques.",
    },
    factsAdvanced: {
      de: ["Nikosia ist seit dem 10. Jahrhundert die Hauptstadt der Insel Zypern.", "Die venezianischen Mauern haben eine Gesamtlänge von etwa 4,5 Kilometern.", "Die 'Grüne Linie' wurde erstmals im Jahr 1964 mit einem grünen Stift auf einer Karte markiert.", "Der Büyük Han wurde im Jahr 1572 kurz nach der osmanischen Eroberung erbaut.", "Das Zypern-Museum beherbergt Funde, die bis zu 10.000 Jahre alt sind.", "Die Stadt hat offiziell über 300.000 Einwohner in der gesamten Metropolregion."],
      hu: ["Nicosia görög neve Lefkoszia, amely a fehér színre utal.", "A város kör alakú velencei falaiban eredetileg három kapu volt.", "A Szent Zsófia-katedrálist (ma Szelimije-mecset) 1209 és 1326 között építették.", "A Ledra utca határátkelőjét csak 2008 áprilisában nyitották meg.", "Nicosia az egyetlen főváros a világon, amelynek két különböző időzónája is volt.", "A Ciprusi Múzeumot 1882-ben alapították a brit adminisztráció alatt."],
      ro: ["Nicosia este situată între munții Kyrenia la nord și munții Troodos la sud.", "Zidurile venețiene au fost proiectate de arhitectul Giulio Savorgnano în 1567.", "Büyük Han este considerat cea mai frumoasă clădire otomană din Cipru.", "Poarta Famagusta este cea mai bine conservată dintre cele trei porți ale zidului.", "Orașul a fost sediul regatului cruciat al Ciprului sub dinastia Lusignan.", "Punctul de trecere de pe strada Ledra este situat în centrul comercial al orașului."],
      en: ["Nicosia has been the island's capital for over 1,000 continuous years.", "The Venetian walls were built between 1567 and 1570 by the Republic of Venice.", "The Selimiye Mosque was the coronation site for the Lusignan kings of Cyprus.", "The UN Green Line was established following the military conflicts in 1974.", "Büyük Han contains 68 rooms and was once used as a city prison by the British.", "The city's elevation is approximately 149 meters above sea level."],
      es: ["Nicosia es la capital de la isla de Chipre desde el siglo X.", "Las murallas venecianas tienen una longitud total de unos 4,5 kilómetros.", "La 'Línea Verde' se marcó por primera vez en 1964 con un lápiz verde sobre un mapa.", "El Büyük Han fue construido en 1572, poco después de la conquista otomana.", "El Museo de Chipre alberga hallazgos de hasta 10.000 años de antigüedad.", "La ciudad cuenta oficialmente con más de 300.000 habitantes en toda su área metropolitana."],
      pt: ["Nicósia é a capital da ilha de Chipre desde o século X.", "As muralhas venezianas têm um comprimento total de cerca de 4,5 quilómetros.", "A 'Linha Verde' foi marcada pela primeira vez em 1964 com um lápis verde num mapa.", "O Büyük Han foi construído em 1572, pouco depois da conquista otomana.", "O Museu de Chipre alberga achados com até 10.000 anos de idade.", "A cidade tem oficialmente mais de 300.000 habitantes em toda a área metropolitana."],
      fr: ["Nicosie est la capitale de l'île de Chypre depuis le Xe siècle.", "Les remparts vénitiens ont une longueur totale d'environ 4,5 kilomètres.", "La 'Ligne verte' a été tracée pour la première fois en 1964 avec un crayon vert sur une carte.", "Le Büyük Han a été construit en 1572, peu après la conquête ottomane.", "Le Musée de Chypre abrite des objets datant de plus de 10 000 ans.", "La ville compte officiellement plus de 300 000 habitants dans l'ensemble de sa zone métropolitaine."],
    },
    image: "/poi-images/cy-nicosia.webp",
    facts: {
      de: ["Geteilte Hauptstadt der Welt", "Venezianische Stadtmauer", "Ledrastraße als Grenzübergang", "Über 1000 Jahre Geschichte"],
      hu: ["A világ utolsó osztott fővárosa", "16. századi velencei falak", "Ledra utca a határátkelő", "Kulturális és politikai központ"],
      ro: ["Ultima capitală divizată", "Ziduri venețiene circulare", "Punct de trecere Strada Ledra", "Oraș locuit de 4500 de ani"],
      en: ["World's last divided capital", "16th-century Venetian walls", "Ledra Street crossing point", "Capital since the 10th century"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-limassol", "sights": {
      "de": [
            {
                  "name": "Alyki Lemesoy",
                  "text": "Ein bedeutender Salzsee bei Limassol mit schöner Landschaft.",
                  "category": "natural",
                  "coords": [
                        32.970751,
                        34.621301
                  ]
            },
            {
                  "name": "Techniti Limni Polemidion",
                  "text": "Ein ruhiges Gewässer bei Limassol, ideal für Naturbeobachtungen.",
                  "category": "natural",
                  "coords": [
                        32.98375,
                        34.722661
                  ]
            },
            {
                  "name": "Agios Tychonas Swimming Area",
                  "text": "Ein beliebter Ort in Limassol zum Schwimmen und für Erholung am Wasser.",
                  "category": "natural",
                  "coords": [
                        33.121621,
                        34.705412
                  ]
            },
            {
                  "name": "Game on",
                  "text": "Eine moderne Spielhalle in Limassol für gemeinsamen Familienspaß.",
                  "category": "family",
                  "coords": [
                        33.043574,
                        34.673326
                  ]
            },
            {
                  "name": "Place 2 Race",
                  "text": "Ein Zentrum für Spiele und Unterhaltung in der Stadt Limassol.",
                  "category": "family",
                  "coords": [
                        33.060851,
                        34.68508
                  ]
            },
            {
                  "name": "Plateia Synergatismoy",
                  "text": "Ein Spielplatz in Limassol, der Kindern Raum zum Spielen bietet.",
                  "category": "family",
                  "coords": [
                        33.047853,
                        34.700708
                  ]
            },
            {
                  "name": "PlayLounge",
                  "text": "Ein einladender Spielbereich in Limassol für junge Besucher.",
                  "category": "family",
                  "coords": [
                        33.043405,
                        34.67628
                  ]
            },
            {
                  "name": "Akti Olympion Beach",
                  "text": "Ein beliebtes Strandresort in Limassol für Erholung am Wasser und Familienspaß.",
                  "category": "family",
                  "coords": [
                        33.053556,
                        34.680034
                  ]
            },
            {
                  "name": "Zoologikos Kipos Lemesoy",
                  "text": "Der Zoo von Limassol bietet ein spannendes Naturerlebnis für die gesamte Familie.",
                  "category": "family",
                  "coords": [
                        33.055905,
                        34.683179
                  ]
            },
            {
                  "name": "Limassol Medieval Castle",
                  "text": "Eine markante mittelalterliche Burg in Limassol, die heute ein Museum beherbergt.",
                  "category": "castle",
                  "coords": [
                        33.041666,
                        34.672249
                  ]
            },
            {
                  "name": "Archaeological Museum of the Limassol District",
                  "text": "Ein Museum in Limassol, das archäologische Funde aus dem Bezirk ausstellt.",
                  "category": "museum",
                  "coords": [
                        33.054407,
                        34.685333
                  ]
            },
            {
                  "name": "Museum of General Georgios Grivas-Digenis",
                  "text": "Ein Museum in Limassol, das dem Leben von General Georgios Grivas gewidmet ist.",
                  "category": "museum",
                  "coords": [
                        33.062186,
                        34.691429
                  ]
            },
            {
                  "name": "Water Museum and Centre of Water Awareness Development",
                  "text": "Ein Bildungszentrum und Museum in Limassol zum Thema Wasserressourcen.",
                  "category": "museum",
                  "coords": [
                        33.027395,
                        34.668786
                  ]
            },
            {
                  "name": "Cyprus Theatre Museum",
                  "text": "Ein Museum in Limassol, das die Entwicklung des Theaters auf Zypern zeigt.",
                  "category": "museum",
                  "coords": [
                        33.049844,
                        34.682367
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Alyki Lemesoy",
                  "text": "Jelentős sóstó Limassolnál, szép tájjal.",
                  "category": "natural",
                  "coords": [
                        32.970751,
                        34.621301
                  ]
            },
            {
                  "name": "Techniti Limni Polemidion",
                  "text": "Nyugodt vízfelület Limassolnál, ideális természetjáráshoz.",
                  "category": "natural",
                  "coords": [
                        32.98375,
                        34.722661
                  ]
            },
            {
                  "name": "Agios Tychonas Swimming Area",
                  "text": "Népszerű hely Limassolban úszáshoz és vízparti pihenéshez.",
                  "category": "natural",
                  "coords": [
                        33.121621,
                        34.705412
                  ]
            },
            {
                  "name": "Game on",
                  "text": "Modern játékterem Limassolban a közös családi szórakozáshoz.",
                  "category": "family",
                  "coords": [
                        33.043574,
                        34.673326
                  ]
            },
            {
                  "name": "Place 2 Race",
                  "text": "Játék- és szórakoztató központ Limassol városában.",
                  "category": "family",
                  "coords": [
                        33.060851,
                        34.68508
                  ]
            },
            {
                  "name": "Plateia Synergatismoy",
                  "text": "Játszótér Limassolban, amely teret biztosít a gyerekeknek a játékhoz.",
                  "category": "family",
                  "coords": [
                        33.047853,
                        34.700708
                  ]
            },
            {
                  "name": "PlayLounge",
                  "text": "Hívogató játszótér Limassolban a fiatal látogatók számára.",
                  "category": "family",
                  "coords": [
                        33.043405,
                        34.67628
                  ]
            },
            {
                  "name": "Akti Olympion Beach",
                  "text": "Népszerű tengerparti üdülőhely Limassolban a vízi pihenéshez és családi szórakozáshoz.",
                  "category": "family",
                  "coords": [
                        33.053556,
                        34.680034
                  ]
            },
            {
                  "name": "Zoologikos Kipos Lemesoy",
                  "text": "A limassoli állatkert izgalmas természeti élményt nyújt az egész család számára.",
                  "category": "family",
                  "coords": [
                        33.055905,
                        34.683179
                  ]
            },
            {
                  "name": "Limassol Medieval Castle",
                  "text": "Jelentős középkori vár Limassolban, amely ma múzeumnak ad otthont.",
                  "category": "castle",
                  "coords": [
                        33.041666,
                        34.672249
                  ]
            },
            {
                  "name": "Archaeological Museum of the Limassol District",
                  "text": "Limassoli múzeum, amely a kerület régészeti leleteit mutatja be.",
                  "category": "museum",
                  "coords": [
                        33.054407,
                        34.685333
                  ]
            },
            {
                  "name": "Museum of General Georgios Grivas-Digenis",
                  "text": "Georgios Grivas tábornok életének szentelt múzeum Limassolban.",
                  "category": "museum",
                  "coords": [
                        33.062186,
                        34.691429
                  ]
            },
            {
                  "name": "Water Museum and Centre of Water Awareness Development",
                  "text": "Oktatási központ és múzeum Limassolban a vízkészletek témakörében.",
                  "category": "museum",
                  "coords": [
                        33.027395,
                        34.668786
                  ]
            },
            {
                  "name": "Cyprus Theatre Museum",
                  "text": "Múzeum Limassolban, amely a ciprusi színházművészet fejlődését mutatja be.",
                  "category": "museum",
                  "coords": [
                        33.049844,
                        34.682367
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Alyki Lemesoy",
                  "text": "Un lac sărat important lângă Limassol, cu peisaje frumoase.",
                  "category": "natural",
                  "coords": [
                        32.970751,
                        34.621301
                  ]
            },
            {
                  "name": "Techniti Limni Polemidion",
                  "text": "O zonă cu apă liniștită lângă Limassol, ideală pentru observarea naturii.",
                  "category": "natural",
                  "coords": [
                        32.98375,
                        34.722661
                  ]
            },
            {
                  "name": "Agios Tychonas Swimming Area",
                  "text": "Un loc popular în Limassol pentru înot și relaxare la malul apei.",
                  "category": "natural",
                  "coords": [
                        33.121621,
                        34.705412
                  ]
            },
            {
                  "name": "Game on",
                  "text": "O sală de jocuri modernă în Limassol pentru distracția întregii familii.",
                  "category": "family",
                  "coords": [
                        33.043574,
                        34.673326
                  ]
            },
            {
                  "name": "Place 2 Race",
                  "text": "Un centru pentru jocuri și divertisment în orașul Limassol.",
                  "category": "family",
                  "coords": [
                        33.060851,
                        34.68508
                  ]
            },
            {
                  "name": "Plateia Synergatismoy",
                  "text": "Un loc de joacă în Limassol care oferă spațiu copiilor pentru joacă.",
                  "category": "family",
                  "coords": [
                        33.047853,
                        34.700708
                  ]
            },
            {
                  "name": "PlayLounge",
                  "text": "O zonă de joacă primitoare în Limassol pentru micii vizitatori.",
                  "category": "family",
                  "coords": [
                        33.043405,
                        34.67628
                  ]
            },
            {
                  "name": "Akti Olympion Beach",
                  "text": "O stațiune populară la plajă în Limassol pentru relaxare la apă și distracție în familie.",
                  "category": "family",
                  "coords": [
                        33.053556,
                        34.680034
                  ]
            },
            {
                  "name": "Zoologikos Kipos Lemesoy",
                  "text": "Grădina zoologică din Limassol oferă o experiență naturală captivantă pentru întreaga familie.",
                  "category": "family",
                  "coords": [
                        33.055905,
                        34.683179
                  ]
            },
            {
                  "name": "Limassol Medieval Castle",
                  "text": "Un castel medieval proeminent în Limassol, care astăzi găzduiește un muzeu.",
                  "category": "castle",
                  "coords": [
                        33.041666,
                        34.672249
                  ]
            },
            {
                  "name": "Archaeological Museum of the Limassol District",
                  "text": "Un muzeu în Limassol care expune descoperiri arheologice din district.",
                  "category": "museum",
                  "coords": [
                        33.054407,
                        34.685333
                  ]
            },
            {
                  "name": "Museum of General Georgios Grivas-Digenis",
                  "text": "Un muzeu în Limassol dedicat vieții generalului Georgios Grivas.",
                  "category": "museum",
                  "coords": [
                        33.062186,
                        34.691429
                  ]
            },
            {
                  "name": "Water Museum and Centre of Water Awareness Development",
                  "text": "Un centru educațional și muzeu în Limassol pe tema resurselor de apă.",
                  "category": "museum",
                  "coords": [
                        33.027395,
                        34.668786
                  ]
            },
            {
                  "name": "Cyprus Theatre Museum",
                  "text": "Un muzeu în Limassol care prezintă evoluția teatrului în Cipru.",
                  "category": "museum",
                  "coords": [
                        33.049844,
                        34.682367
                  ]
            }
      ],
      "en": [
            {
                  "name": "Limassol Salt Lake",
                  "text": "A significant salt lake near Limassol with beautiful scenery.",
                  "category": "natural",
                  "coords": [
                        32.970751,
                        34.621301
                  ]
            },
            {
                  "name": "Polemidia Reservoir",
                  "text": "A calm body of water near Limassol, ideal for nature observation.",
                  "category": "natural",
                  "coords": [
                        32.98375,
                        34.722661
                  ]
            },
            {
                  "name": "Agios Tychonas Swimming Area",
                  "text": "A popular spot in Limassol for swimming and waterside relaxation.",
                  "category": "natural",
                  "coords": [
                        33.121621,
                        34.705412
                  ]
            },
            {
                  "name": "Game on",
                  "text": "A modern amusement arcade in Limassol for shared family fun.",
                  "category": "family",
                  "coords": [
                        33.043574,
                        34.673326
                  ]
            },
            {
                  "name": "Place 2 Race",
                  "text": "A center for games and entertainment in Limassol city.",
                  "category": "family",
                  "coords": [
                        33.060851,
                        34.68508
                  ]
            },
            {
                  "name": "Plateia Synergatismoy",
                  "text": "A playground in Limassol providing space for children to play.",
                  "category": "family",
                  "coords": [
                        33.047853,
                        34.700708
                  ]
            },
            {
                  "name": "PlayLounge",
                  "text": "An inviting play area in Limassol for young visitors.",
                  "category": "family",
                  "coords": [
                        33.043405,
                        34.67628
                  ]
            },
            {
                  "name": "Akti Olympion Beach",
                  "text": "A popular beach resort in Limassol for relaxation by the water and family fun.",
                  "category": "family",
                  "coords": [
                        33.053556,
                        34.680034
                  ]
            },
            {
                  "name": "Limassol Zoo",
                  "text": "Limassol Zoo offers an exciting nature experience for the entire family.",
                  "category": "family",
                  "coords": [
                        33.055905,
                        34.683179
                  ]
            },
            {
                  "name": "Limassol Medieval Castle",
                  "text": "A prominent medieval castle in Limassol that now houses a museum.",
                  "category": "castle",
                  "coords": [
                        33.041666,
                        34.672249
                  ]
            },
            {
                  "name": "Archaeological Museum of the Limassol District",
                  "text": "A museum in Limassol exhibiting archaeological finds from the district.",
                  "category": "museum",
                  "coords": [
                        33.054407,
                        34.685333
                  ]
            },
            {
                  "name": "Museum of General Georgios Grivas-Digenis",
                  "text": "A museum in Limassol dedicated to the life of General Georgios Grivas.",
                  "category": "museum",
                  "coords": [
                        33.062186,
                        34.691429
                  ]
            },
            {
                  "name": "Water Museum and Centre of Water Awareness Development",
                  "text": "An educational centre and museum in Limassol regarding water resources.",
                  "category": "museum",
                  "coords": [
                        33.027395,
                        34.668786
                  ]
            },
            {
                  "name": "Cyprus Theatre Museum",
                  "text": "A museum in Limassol showing the development of theatre in Cyprus.",
                  "category": "museum",
                  "coords": [
                        33.049844,
                        34.682367
                  ]
            }
      ]
},
    type: "city",
    parent: "CY-004",
    coords: [33.0443, 34.6750],
    name: { de: "Limassol", hu: "Limassol", ro: "Limassol", en: "Limassol" },
    description: {
      de: "Zweitgrößte Stadt Zyperns und ein bedeutendes Handels- und Tourismuszentrum.",
      hu: "Ciprus második legnagyobb városa, jelentős kereskedelmi és turisztikai központ.",
      ro: "Al doilea oraș ca mărime din Cipru și un important centru comercial și turistic.",
      en: "The second largest city in Cyprus and a major commercial and tourist hub.",
      es: "Segunda ciudad más grande de Chipre y un importante centro comercial y turístico.",
      pt: "Segunda maior cidade de Chipre e um importante centro comercial e turístico.",
      fr: "Deuxième plus grande ville de Chypre et un centre commercial et touristique majeur.",
    },
    descriptionAdvanced: {
      de: "Limassol, die zweitgrößte Stadt Zyperns, ist das wirtschaftliche Zentrum der Insel und ein bedeutender Kreuzfahrthafen im östlichen Mittelmeer. Sie liegt an der Südküste zwischen den antiken Stadtkönigreichen Amathus im Osten und Kourion im Westen. Historisch bekannt ist Limassol vor allem als Ort, an dem Richard Löwenherz im Jahr 1191 Berengaria von Navarra heiratete und sie zur Königin von England krönte. Das mittelalterliche Schloss von Limassol, in dem diese Hochzeit stattgefunden haben soll, beherbergt heute das Zypern-Mittelaltermuseum mit Exponaten aus über tausend Jahren Geschichte. In den letzten Jahrzehnten hat sich die Stadt rasant entwickelt, was sich in der modernen Marina und der beeindruckenden Skyline entlang der Küstenpromenade (Molos) widerspiegelt. Limassol ist zudem das Herz der zyprischen Weinindustrie und Schauplatz des jährlichen Weinfestivals im September, bei dem die lange Tradition der Weinherstellung gefeiert wird. Mit seinen zahlreichen Luxushotels, internationalen Unternehmen und einem pulsierenden Nachtleben zieht die Stadt sowohl Geschäftsreisende als auch Touristen an. Trotz der Modernisierung hat sich die Altstadt rund um das Schloss ihren traditionellen Charme mit engen Gassen und Kunsthandwerksläden bewahrt.",
      hu: "Limassol Ciprus második legnagyobb városa és az ország legfontosabb kikötője, amely a déli parton, az Akrotíri-öböl mentén fekszik. A város történelme szorosan összefügg az angol történelemmel: 1191-ben itt, a limassoli várban vette feleségül Oroszlánszívű Richárd Navarrai Berengáriát, és itt koronázták őt Anglia királynéjává. A vár ma a Ciprusi Középkori Múzeumnak ad otthont, bemutatva a sziget gazdag múltját a bizánci kortól a velencei uralomig. Limassol ma Ciprus üzleti és pénzügyi központja, ahol a modern felhőkarcolók és az új, luxus kikötő (Limassol Marina) látványa dominál. A város híres pezsgő kulturális életéről, itt rendezik meg minden évben a Ciprusi Karnevált és a népszerű Sörfesztivált is. A borászatnak is nagy hagyományai vannak a környéken, a közeli falvakban készül a híres Commandaria, a világ egyik legrégebbi márkájú bora. A Molos néven ismert tengerparti sétány népszerű pihenőhely szoborparkkal és játszóterekkel. Limassol ideális kiindulópont a sziget felfedezéséhez, hiszen közel található hozzá az ókori Kurion színháza és az amathuszi romok is.",
      ro: "Limassol, al doilea oraș ca mărime din Cipru, este principalul hub comercial și portuar al insulei, situat strategic pe coasta sudică. Orașul este celebru pentru istoria sa medievală, fiind locul unde regele Richard Inimă de Leu s-a căsătorit cu Berengaria de Navarra în 1191, în timpul celei de-a treia cruciade. Castelul din Limassol, structura centrală a orașului vechi, servește astăzi ca Muzeu al Evului Mediu, adăpostind colecții impresionante de arme, ceramică și obiecte religioase. În prezent, Limassol a trecut printr-o transformare spectaculoasă, devenind o destinație cosmopolită cu o marină modernă de lux și zgârie-nori ce definesc noua linie a orizontului. Orașul este inima industriei vinicole cipriote, găzduind în fiecare septembrie Festivalul Vinului, un eveniment ce atrage mii de vizitatori dornici să guste faimosul vin Commandaria. Faleza Molos, cu parcul său de sculpturi și pistele de biciclete, este locul preferat de promenadă pentru localnici și turiști deopotrivă. Limassol este de asemenea cunoscut pentru carnavalul său exuberant, cel mai mare de pe insulă, care are loc anual înaintea Postului Mare. Între modernitate și tradiție, orașul oferă un amestec vibrant de afaceri internaționale și ospitalitate mediteraneană autentică.",
      en: "Limassol, the second-largest city in Cyprus, serves as the island's primary commercial port and a thriving business hub on the southern coast. Historically, it is famous for the marriage of King Richard the Lionheart to Berengaria of Navarre in 1191 at the Limassol Castle, marking the only time an English queen was crowned outside the British Isles. Today, the castle houses the Cyprus Medieval Museum, featuring artifacts ranging from the 4th to the 19th centuries. The city has undergone significant modernization, highlighted by the luxurious Limassol Marina and a coastline dotted with contemporary skyscrapers and high-end residential towers. Limassol is also the center of the Cypriot wine industry, hosting the grand Wine Festival every September to celebrate the region's ancient viticultural traditions. The Molos promenade, a beautifully designed seaside park, offers a scenic route for walking and cycling with stunning views of the Mediterranean. Known for its festive spirit, the city hosts the island's largest Carnival and Beer Festival annually. Strategically located between the ancient sites of Amathus and Kourion, Limassol perfectly balances its rich archaeological heritage with its status as a cosmopolitan destination for international business and tourism.",
      es: "Limassol, la segunda ciudad de Chipre, es el centro económico de la isla y un importante puerto de cruceros en el Mediterráneo oriental. Se sitúa en la costa sur, entre los antiguos reinos de Amatunte al este y Curio al oeste. Históricamente, Limassol es conocida como el lugar donde Ricardo Corazón de León se casó con Berenguela de Navarra en 1191 y la coronó reina de Inglaterra. El castillo medieval de Limassol, donde se dice que tuvo lugar la boda, alberga hoy el Museo Medieval de Chipre con piezas de más de mil años de historia. En las últimas décadas, la ciudad ha crecido rápidamente, algo visible en su moderna marina y el impresionante perfil urbano junto al paseo marítimo (Molos). Limassol es también el corazón de la industria vinícola chipriota y sede del festival anual del vino en septiembre, que celebra la larga tradición de producción vitivinícola. Con sus hoteles de lujo, empresas internacionales y vibrante vida nocturna, la ciudad atrae tanto a viajeros de negocios como a turistas. A pesar de la modernización, el casco antiguo mantiene su encanto tradicional con calles estrechas y tiendas de artesanía.",
      pt: "Limassol, a segunda maior cidade de Chipre, é o centro económico da ilha e um importante porto de cruzeiros no Mediterrâneo oriental. Situa-se na costa sul entre os antigos reinos de Amathus, a leste, e Kourion, a oeste. Historicamente, Limassol é conhecida como o local onde Ricardo Coração de Leão se casou com Berengária de Navarra em 1191 e a coroou rainha de Inglaterra. O castelo medieval de Limassol, onde se diz ter ocorrido o casamento, alberga hoje o Museu Medieval de Chipre com peças de mais de mil anos de história. Nas últimas décadas, a cidade desenvolveu-se rapidamente, o que se reflete na marina moderna e no impressionante horizonte urbano ao longo do passeio marítimo (Molos). Limassol é também o coração da indústria vinícola cipriota e palco do festival anual do vinho em setembro, que celebra a longa tradição da produção vinícola. Com os seus inúmeros hotéis de luxo, empresas internacionais e vida noturna vibrante, a cidade atrai tanto viajantes de negócios como turistas. Apesar da modernização, o centro histórico preservou o seu charme tradicional com ruas estreitas e lojas de artesanato.",
      fr: "Limassol, la deuxième plus grande ville de Chypre, est le centre économique de l'île et un port d'escale majeur pour les croisières en Méditerranée orientale. Elle se situe sur la côte sud, entre les anciens royaumes de cité d'Amathonte à l'est et de Kourion à l'ouest. Historiquement, Limassol est surtout connue comme le lieu où Richard Cœur de Lion épousa Bérengère de Navarre en 1191, la couronnant ainsi reine d'Angleterre. Le château médiéval de Limassol, où ce mariage aurait eu lieu, abrite aujourd'hui le musée médiéval de Chypre, présentant des objets de plus de mille ans d'histoire. Au cours des dernières décennies, la ville s'est développée rapidement, comme en témoignent sa marina moderne et sa silhouette impressionnante le long de la promenade côtière (Molos). Limassol est également le cœur de l'industrie vinicole chypriote et le théâtre de la fête annuelle du vin en septembre, célébrant la longue tradition de production viticole. Avec ses nombreux hôtels de luxe, ses entreprises internationales et sa vie nocturne animée, la ville attire aussi bien les voyageurs d'affaires que les touristes. Malgré la modernisation, la vieille ville autour du château a conservé son charme traditionnel avec ses ruelles étroites et ses boutiques d'artisanat.",
    },
    factsAdvanced: {
      de: ["Limassol ist nach der Hauptstadt Nikosia die zweitbevölkerungsreichste Stadt Zyperns.", "Das Weinfestival von Limassol findet jährlich seit dem Jahr 1961 statt.", "Die Limassol Marina wurde 2014 eröffnet und kostete über 350 Millionen Euro.", "Richard Löwenherz heiratete Berengaria von Navarra am 12. Mai 1191 in der Stadt.", "Die Stadt liegt etwa 70 Kilometer westlich vom internationalen Flughafen Larnaka.", "Das antike Königreich Kourion liegt nur 13 Kilometer westlich von Limassol."],
      hu: ["A limassoli kikötő az egyik legforgalmasabb tranzitkikötő a Földközi-tengeren.", "A Commandaria bor, amit a közelben készítenek, 1210 óta védett márkának számít.", "A város tengerparti sétánya (Molos) több mint 2 kilométer hosszú.", "Limassolban található Ciprus legnagyobb karneválja, amit 10 napig tartanak.", "A középkori várfalak egyes részei a bizánci korszakból (kb. 1000-ből) valók.", "A városban több mint 40 különböző nemzetiségű közösség él és dolgozik."],
      ro: ["Limassol Marina are o capacitate de ancorare pentru 650 de iahturi de lux.", "Festivalul Vinului din Limassol durează de obicei 10-12 zile în fiecare an.", "Richard Inimă de Leu a cucerit Ciprul în 1191 după ce flota sa a eșuat aici.", "Zgârie-norul 'The One' din Limassol este cea mai înaltă clădire rezidențială de pe malul mării din Europa.", "Muzeul Medieval din castel a fost deschis oficial în anul 1987.", "Limassol găzduiește sediul central al multor companii internaționale de shipping."],
      en: ["Limassol Castle was rebuilt by the Ottomans in 1590 over an older structure.", "The city's wine tradition dates back over 4,000 years to the Bronze Age.", "Limassol is the center of the Cyprus offshore banking and financial sector.", "The Wine Festival was inspired by ancient festivals dedicated to Dionysus.", "The Lady's Mile beach nearby is one of the longest on the entire island.", "The population of the Limassol urban area exceeds 180,000 residents."],
      es: ["Limassol es la segunda ciudad más poblada de Chipre después de Nicosia.", "El Festival del Vino de Limassol se celebra anualmente desde el año 1961.", "La Marina de Limassol se inauguró en 2014 con un coste de más de 350 millones de euros.", "Ricardo Corazón de León se casó con Berenguela de Navarra el 12 de mayo de 1191 en la ciudad.", "La ciudad se encuentra a unos 70 kilómetros al oeste del aeropuerto internacional de Larnaca.", "El antiguo reino de Curio se sitúa a solo 13 kilómetros al oeste de Limassol."],
      pt: ["Limassol é a segunda cidade mais populosa de Chipre, depois da capital Nicósia.", "O Festival do Vinho de Limassol realiza-se anualmente desde 1961.", "A Marina de Limassol foi inaugurada em 2014 e custou mais de 350 milhões de euros.", "Ricardo Coração de Leão casou-se com Berengária de Navarra em 12 de maio de 1191 na cidade.", "A cidade fica a cerca de 70 quilómetros a oeste do aeroporto internacional de Larnaca.", "O antigo reino de Kourion fica a apenas 13 quilómetros a oeste de Limassol."],
      fr: ["Limassol est la deuxième ville la plus peuplée de Chypre après la capitale Nicosie.", "La fête du vin de Limassol a lieu chaque année depuis 1961.", "La marina de Limassol a été inaugurée en 2014 pour un coût de plus de 350 millions d'euros.", "Richard Cœur de Lion a épousé Bérengère de Navarre le 12 mai 1191 dans la ville.", "La ville est située à environ 70 kilomètres à l'ouest de l'aéroport international de Larnaca.", "L'ancien royaume de Kourion se trouve à seulement 13 kilomètres à l'ouest de Limassol."],
    }, image: "/poi-images/cy-limassol.webp",
    facts: {
      de: ["Zweitgrößte Stadt der Insel", "Größter Hafen von Zypern", "Zentrum der Weinindustrie", "Moderne Marina für Yachten"],
      hu: ["Ciprus második legnagyobb városa", "A sziget legnagyobb kikötője", "A ciprusi borászat központja", "Modern jachtkikötővel rendelkezik"],
      ro: ["Al doilea oraș ca mărime", "Cel mai mare port al insulei", "Centrul industriei vinului", "Marina modernă pentru iahturi"],
      en: ["Second largest city in Cyprus", "Largest port on the island", "Center of the wine industry", "Modern marina opened in 2014"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-larnaca", "sights": {
      "de": [
            {
                  "name": "Pierides Museum",
                  "text": "Das Pierides-Museum ist ein bedeutendes Museum mit zypriotischen Altertümern in Larnaka.",
                  "category": "museum",
                  "coords": [
                        33.636397,
                        34.916163
                  ]
            },
            {
                  "name": "Larnaca Municipal Gallery",
                  "text": "Die Larnaca Municipal Gallery ist ein Museum, das Kunstwerke in Larnaka ausstellt.",
                  "category": "museum",
                  "coords": [
                        33.637521,
                        34.916912
                  ]
            },
            {
                  "name": "Kastro Larnakas",
                  "text": "Die Burg von Larnaka ist eine historische Festung an der Küste von Larnaka.",
                  "category": "castle",
                  "coords": [
                        33.63767,
                        34.910288
                  ]
            },
            {
                  "name": "Patticheio Dimotiko Theatro «Skala»",
                  "text": "Das städtische Pattichion-Theater \"Skala\" ist ein Veranstaltungsort für darstellende Kunst in Larnaka.",
                  "category": "cultural",
                  "coords": [
                        33.632235,
                        34.918977
                  ]
            },
            {
                  "name": "Vyzantino Moyseio Agioy Lazaroy",
                  "text": "Das Byzantinische Museum Saint Lazarus zeigt religiöse Artefakte in Larnaka.",
                  "category": "museum",
                  "coords": [
                        33.634573,
                        34.911429
                  ]
            },
            {
                  "name": "Iatriko Moyseio Kyriazi",
                  "text": "Das medizinische Museum Kyriazis präsentiert die Medizingeschichte Zyperns in Larnaka.",
                  "category": "museum",
                  "coords": [
                        33.634412,
                        34.913138
                  ]
            },
            {
                  "name": "Hellenistic period olive press",
                  "text": "Die Olivenpresse aus hellenistischer Zeit ist ein historisches Museumsexponat in Larnaka.",
                  "category": "museum",
                  "coords": [
                        33.633357,
                        34.919595
                  ]
            },
            {
                  "name": "Phinikoudes Bay und Promenade",
                  "text": "Phinikoudes ist ein beliebter, von Palmen gesäumter Strand im Zentrum von Larnaka.",
                  "category": "recreational",
                  "coords": [
                        33.638679,
                        34.912897
                  ]
            },
            {
                  "name": "Ancient Kition",
                  "text": "Das antike Kition ist eine bedeutende archäologische Stätte mit antiken Ruinen in Larnaka.",
                  "category": "historical",
                  "coords": [
                        33.630497,
                        34.923438
                  ]
            },
            {
                  "name": "Mackenzie Beach",
                  "text": "Dieser weithin bekannte Sandstrand bereichert auf wunderbare Weise das Küstenbild von Larnaka auf Zypern. Eine weltoffene, energiegeladene Stimmung macht den Ort zu einem starken Magneten für Sonnenhungrige. Der Sand lädt zum stundenlangen Sonnenbaden ein, während das warme Mittelmeer sanfte Erfrischung bietet. Ein früher Start in den Tag sichert Ihnen hier garantiert den besten Platz nah am Wasser.",
                  "category": "recreational",
                  "coords": [
                        33.638009,
                        34.890673
                  ]
            },
            {
                  "name": "Pattiicheio Amfitheatro",
                  "text": "Das Pattichion-Amphitheater ist ein Freilufttheater und Veranstaltungsort in Larnaka.",
                  "category": "cultural",
                  "coords": [
                        33.625432,
                        34.906052
                  ]
            },
            {
                  "name": "Larnaca Theatre",
                  "text": "Das Theater von Larnaka ist ein kultureller Veranstaltungsort für verschiedene Aufführungen in der Stadt.",
                  "category": "cultural",
                  "coords": [
                        33.62654,
                        34.916069
                  ]
            },
            {
                  "name": "Ancient Military Port of Kition",
                  "text": "Der antike Militärhafen von Kition ist eine archäologische Stätte in der Stadt Larnaka.",
                  "category": "historical",
                  "coords": [
                        33.632879,
                        34.920605
                  ]
            },
            {
                  "name": "Alyki Larnakas",
                  "text": "Der Salzsee von Larnaka ist eine bekannte Attraktion, die für ihre Scharen von Flamingos berühmt ist.",
                  "category": "landmark",
                  "coords": [
                        33.615931,
                        34.894847
                  ]
            },
            {
                  "name": "Catholic Church of The Virgin Mary of The Graces",
                  "text": "Die katholische Kirche der Jungfrau Maria der Gnaden ist eine bedeutende religiöse Attraktion in Larnaka.",
                  "category": "landmark",
                  "coords": [
                        33.626309,
                        34.923215
                  ]
            },
            {
                  "name": "Hala Sultan Tekke",
                  "text": "Hala Sultan Tekke ist ein bedeutendes islamisches Heiligtum und eine Attraktion in der Nähe der Salzseen in Larnaka.",
                  "category": "landmark",
                  "coords": [
                        33.60994,
                        34.885361
                  ]
            },
            {
                  "name": "Kimon",
                  "text": "Kimon ist ein sehenswertes Denkmal in der Stadt Larnaka.",
                  "category": "historical",
                  "coords": [
                        33.638169,
                        34.914457
                  ]
            },
            {
                  "name": "Larnaca Marina",
                  "text": "Die Marina von Larnaka ist ein malerischer Aussichtspunkt am Wasser.",
                  "category": "natural",
                  "coords": [
                        33.640731,
                        34.916333
                  ]
            },
            {
                  "name": "Melina Scordelli",
                  "text": "Melina Scordelli ist eine lokale Kunstgalerie in der Stadt Larnaka.",
                  "category": "museum",
                  "coords": [
                        33.636484,
                        34.91801
                  ]
            },
            {
                  "name": "Salt Lake Viewpoint",
                  "text": "Der Salt Lake Viewpoint bietet einen herrlichen Aussichtspunkt über die Landschaft von Larnaka.",
                  "category": "natural",
                  "coords": [
                        33.620266,
                        34.90609
                  ]
            },
            {
                  "name": "Dromolaxia-Byzakia Excavation Site",
                  "text": "Die Ausgrabungsstätte Hala Sultan Tekke umfasst historische Ruinen in Larnaka.",
                  "category": "historical",
                  "coords": [
                        33.604484,
                        34.886691
                  ]
            },
            {
                  "name": "Zenobia Shipwreck",
                  "text": "Das Zenobia-Schiffswrack vor der Küste von Larnaka ist eine gesunkene Fähre, die sich zu einem weltbekannten Tauchplatz entwickelt hat.",
                  "category": "landmark",
                  "coords": [
                        33.657621,
                        34.897244
                  ]
            },
            {
                  "name": "Armeniki ekklisia",
                  "text": "Die armenische Kirche ist ein lokales Gotteshaus in der Stadt Larnaka.",
                  "category": "religious",
                  "coords": [
                        33.635584,
                        34.91493
                  ]
            },
            {
                  "name": "Panagia Chrysopolitissa",
                  "text": "Panagia Chrysopolitissa ist ein dem Gebet gewidmeter Ort in der Stadt Larnaka.",
                  "category": "religious",
                  "coords": [
                        33.628506,
                        34.922063
                  ]
            },
            {
                  "name": "Panagia Faneromeni New Church",
                  "text": "Die Panagia Faneromeni New Church ist ein modernes Gotteshaus in Larnaka.",
                  "category": "religious",
                  "coords": [
                        33.628038,
                        34.910976
                  ]
            },
            {
                  "name": "Sotiros",
                  "text": "Sotiros ist eine lokale Andachtsstätte in Larnaka.",
                  "category": "religious",
                  "coords": [
                        33.623793,
                        34.921885
                  ]
            },
            {
                  "name": "Olympiako Kolymvitirio Larnakas",
                  "text": "Das Larnaka Olympic Swimming Pool ist ein großes Schwimmbecken in Larnaca, das sich zum Familienschwimmen eignet.",
                  "category": "family",
                  "coords": [
                        33.599955,
                        34.923361
                  ]
            },
            {
                  "name": "Alykes Larnakas",
                  "text": "Alykes Larnakas ist ein Naturschutzgebiet mit Salzseen, das für seine Flamingos bekannt ist.",
                  "category": "natural",
                  "coords": [
                        33.614706,
                        34.883633
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Pierides Museum - Bank of Cyprus Cultural Foundation",
                  "text": "A Pierides Múzeum egy jelentős múzeum, amely ciprusi régiségeket mutat be Lárnakában.",
                  "category": "museum",
                  "coords": [
                        33.636397,
                        34.916163
                  ]
            },
            {
                  "name": "Larnaca Municipal Gallery",
                  "text": "A lárnakai Városi Galéria művészeti alkotásokat bemutató múzeum.",
                  "category": "museum",
                  "coords": [
                        33.637521,
                        34.916912
                  ]
            },
            {
                  "name": "Kastro Larnakas",
                  "text": "A lárnakai vár egy történelmi erődítmény Lárnaka tengerpartján.",
                  "category": "castle",
                  "coords": [
                        33.63767,
                        34.910288
                  ]
            },
            {
                  "name": "Patticheio Dimotiko Theatro «Skala»",
                  "text": "A Pattichion Városi Színház \"Skala\" egy előadóművészeti központ Lárnakában.",
                  "category": "cultural",
                  "coords": [
                        33.632235,
                        34.918977
                  ]
            },
            {
                  "name": "Vyzantino Moyseio Agioy Lazaroy",
                  "text": "A Szent Lázár Bizánci Múzeum vallási tárgyakat mutat be Lárnakában.",
                  "category": "museum",
                  "coords": [
                        33.634573,
                        34.911429
                  ]
            },
            {
                  "name": "Iatriko Moyseio Kyriazi",
                  "text": "A Kyriazis Orvosi Múzeum Ciprus orvostörténetét mutatja be Lárnakában.",
                  "category": "museum",
                  "coords": [
                        33.634412,
                        34.913138
                  ]
            },
            {
                  "name": "Hellenistic period olive press",
                  "text": "A hellenisztikus kori olajprés egy történelmi múzeumi kiállítási tárgy Lárnakában.",
                  "category": "museum",
                  "coords": [
                        33.633357,
                        34.919595
                  ]
            },
            {
                  "name": "Phinikoudes",
                  "text": "A Phinikoudes egy népszerű pálmafás strand Lárnaka központjában.",
                  "category": "recreational",
                  "coords": [
                        33.638679,
                        34.912897
                  ]
            },
            {
                  "name": "Ancient Kition",
                  "text": "Az ősi Kition egy jelentős régészeti lelőhely, amely ókori romokat tár fel Lárnakában.",
                  "category": "historical",
                  "coords": [
                        33.630497,
                        34.923438
                  ]
            },
            {
                  "name": "Mackenzie Beach",
                  "text": "Ez a széles körben ismert homokos part csodálatos módon gazdagítja a ciprusi Lárnaka partképét. A kozmopolita, energiával teli hangulat a napozni vágyók erős mágnesévé teszi a helyet. A homok órákig tartó napozásra csábít, miközben a meleg Földközi-tenger lágy felfrissülést kínál. Egy korai napkezdés itt garantáltan biztosítja a legjobb helyet közel a vízhez.",
                  "category": "recreational",
                  "coords": [
                        33.638009,
                        34.890673
                  ]
            },
            {
                  "name": "Pattiicheio Amfitheatro",
                  "text": "A Pattichion Amfiteátrum egy szabadtéri színház és rendezvényhelyszín Lárnakában.",
                  "category": "cultural",
                  "coords": [
                        33.625432,
                        34.906052
                  ]
            },
            {
                  "name": "Larnaca Theatre",
                  "text": "A Lárnakai Színház kulturális helyszín, amely különféle előadásoknak ad otthont a városban.",
                  "category": "cultural",
                  "coords": [
                        33.62654,
                        34.916069
                  ]
            },
            {
                  "name": "Ancient Military Port of Kition",
                  "text": "Kition ókori katonai kikötője egy régészeti lelőhely Lárnaka városában.",
                  "category": "historical",
                  "coords": [
                        33.632879,
                        34.920605
                  ]
            },
            {
                  "name": "Larnaka sóstó",
                  "text": "A lárnakai Sóstó egy népszerű látványosság, amely a flamingók vonzásáról híres.",
                  "category": "landmark",
                  "coords": [
                        33.615931,
                        34.894847
                  ]
            },
            {
                  "name": "Catholic Church of The Virgin Mary of The Graces",
                  "text": "A Kegyelmes Szűzanya katolikus templom egy kiemelkedő vallási látványosság Lárnaka városában.",
                  "category": "landmark",
                  "coords": [
                        33.626309,
                        34.923215
                  ]
            },
            {
                  "name": "Hala Szultan Tekke mecset",
                  "text": "A Hala Szultan Tekke egy jelentős iszlám szentély és látványosság Lárnaka sóstavai közelében.",
                  "category": "landmark",
                  "coords": [
                        33.60994,
                        34.885361
                  ]
            },
            {
                  "name": "Kimon",
                  "text": "Kimón egy figyelemre méltó emlékmű Lárnaka városában.",
                  "category": "historical",
                  "coords": [
                        33.638169,
                        34.914457
                  ]
            },
            {
                  "name": "Larnaca Marina",
                  "text": "A lárnakai jachtkikötő egy festői kilátópont a vízparton.",
                  "category": "natural",
                  "coords": [
                        33.640731,
                        34.916333
                  ]
            },
            {
                  "name": "Melina Scordelli",
                  "text": "A Melina Scordelli egy helyi művészeti galéria Lárnaka városában.",
                  "category": "museum",
                  "coords": [
                        33.636484,
                        34.91801
                  ]
            },
            {
                  "name": "Salt Lake Viewpoint",
                  "text": "A Sóstó-kilátó egy kilátópont, amely Lárnaka tájaira nyújt rálátást.",
                  "category": "natural",
                  "coords": [
                        33.620266,
                        34.90609
                  ]
            },
            {
                  "name": "Dromolaxia-Byzakia Excavation Site",
                  "text": "A Hala Szultan Tekke ásatási terület történelmi romokat mutat be Lárnakában.",
                  "category": "historical",
                  "coords": [
                        33.604484,
                        34.886691
                  ]
            },
            {
                  "name": "Zenobia Shipwreck",
                  "text": "A Zenobia hajóroncs egy híres elsüllyedt komp Lárnaka partjainál, amely világszerte ismert búvárhelyszín lett.",
                  "category": "landmark",
                  "coords": [
                        33.657621,
                        34.897244
                  ]
            },
            {
                  "name": "Armeniki ekklisia",
                  "text": "Az örmény templom egy helyi istentiszteleti hely Lárnaka városában.",
                  "category": "religious",
                  "coords": [
                        33.635584,
                        34.91493
                  ]
            },
            {
                  "name": "Panagia Chrysopolitissa",
                  "text": "A Panagia Chrysopolitissa egy istentiszteleti hely Lárnaka városában.",
                  "category": "religious",
                  "coords": [
                        33.628506,
                        34.922063
                  ]
            },
            {
                  "name": "Panagia Faneromeni New Church",
                  "text": "A Panagia Faneromeni Új Templom egy istentiszteleti hely Lárnaka városában.",
                  "category": "religious",
                  "coords": [
                        33.628038,
                        34.910976
                  ]
            },
            {
                  "name": "Sotiros",
                  "text": "A Szótírosz egy helyi istentiszteleti hely Lárnaka városában.",
                  "category": "religious",
                  "coords": [
                        33.623793,
                        34.921885
                  ]
            },
            {
                  "name": "Olympiako Kolymvitirio Larnakas",
                  "text": "A Larnaka Olympic Swimming Pool egy nagy medence Larnakában, amely alkalmas családi úszásra.",
                  "category": "family",
                  "coords": [
                        33.599955,
                        34.923361
                  ]
            },
            {
                  "name": "Alykes Larnakas",
                  "text": "Az Alykes Larnakas egy sóstavas természetvédelmi terület, amely flamingóiról ismert.",
                  "category": "natural",
                  "coords": [
                        33.614706,
                        34.883633
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Pierides Museum - Bank of Cyprus Cultural Foundation",
                  "text": "Muzeul Pierides este un muzeu notabil care găzduiește antichități cipriote în Larnaca.",
                  "category": "museum",
                  "coords": [
                        33.636397,
                        34.916163
                  ]
            },
            {
                  "name": "Larnaca Municipal Gallery",
                  "text": "Galeria Municipală din Larnaca este un muzeu care expune opere de artă.",
                  "category": "museum",
                  "coords": [
                        33.637521,
                        34.916912
                  ]
            },
            {
                  "name": "Kastro Larnakas",
                  "text": "Castelul Larnaca este o fortăreață istorică situată pe coasta orașului Larnaca.",
                  "category": "castle",
                  "coords": [
                        33.63767,
                        34.910288
                  ]
            },
            {
                  "name": "Patticheio Dimotiko Theatro «Skala»",
                  "text": "Teatrul Municipal Pattichion \"Skala\" este o locație pentru artele spectacolului în Larnaca.",
                  "category": "cultural",
                  "coords": [
                        33.632235,
                        34.918977
                  ]
            },
            {
                  "name": "Vyzantino Moyseio Agioy Lazaroy",
                  "text": "Muzeul Bizantin Sfântul Lazăr expune artefacte religioase în Larnaca.",
                  "category": "museum",
                  "coords": [
                        33.634573,
                        34.911429
                  ]
            },
            {
                  "name": "Iatriko Moyseio Kyriazi",
                  "text": "Muzeul Medical Kyriazis prezintă istoria medicală a Ciprului în Larnaca.",
                  "category": "museum",
                  "coords": [
                        33.634412,
                        34.913138
                  ]
            },
            {
                  "name": "Hellenistic period olive press",
                  "text": "Presa de măsline din perioada elenistică este un exponat istoric de muzeu în Larnaca.",
                  "category": "museum",
                  "coords": [
                        33.633357,
                        34.919595
                  ]
            },
            {
                  "name": "Phinikoudes",
                  "text": "Phinikoudes este o plajă populară străjuită de palmieri în centrul orașului Larnaca.",
                  "category": "recreational",
                  "coords": [
                        33.638679,
                        34.912897
                  ]
            },
            {
                  "name": "Ancient Kition",
                  "text": "Anticul Kition este un sit arheologic semnificativ care explorează ruine antice în Larnaca.",
                  "category": "historical",
                  "coords": [
                        33.630497,
                        34.923438
                  ]
            },
            {
                  "name": "Mackenzie Beach",
                  "text": "Această plajă cu nisip, binecunoscută, îmbogățește într-un mod minunat peisajul de coastă din Larnaca, Cipru. O atmosferă cosmopolită și plină de energie transformă locul într-un magnet puternic pentru iubitorii de soare. Nisipul te invită la ore întregi de plajă, în timp ce Marea Mediterană caldă oferă o răcorire blândă. Un început de zi devreme vă asigură aici garantat cel mai bun loc aproape de apă.",
                  "category": "recreational",
                  "coords": [
                        33.638009,
                        34.890673
                  ]
            },
            {
                  "name": "Pattiicheio Amfitheatro",
                  "text": "Amfiteatrul Pattichion este un teatru în aer liber și un loc de evenimente în Larnaca.",
                  "category": "cultural",
                  "coords": [
                        33.625432,
                        34.906052
                  ]
            },
            {
                  "name": "Larnaca Theatre",
                  "text": "Teatrul din Larnaca este o locație culturală care găzduiește diverse spectacole în oraș.",
                  "category": "cultural",
                  "coords": [
                        33.62654,
                        34.916069
                  ]
            },
            {
                  "name": "Ancient Military Port of Kition",
                  "text": "Vechiul port militar din Kition este un sit arheologic situat în orașul Larnaca.",
                  "category": "historical",
                  "coords": [
                        33.632879,
                        34.920605
                  ]
            },
            {
                  "name": "Alyki Larnakas",
                  "text": "Lacul Sărat din Larnaca este o atracție proeminentă, renumită pentru atragerea stolurilor de flamingo.",
                  "category": "landmark",
                  "coords": [
                        33.615931,
                        34.894847
                  ]
            },
            {
                  "name": "Catholic Church of The Virgin Mary of The Graces",
                  "text": "Biserica Catolică a Fecioarei Maria a Harurilor este o atracție religioasă importantă din orașul Larnaca.",
                  "category": "landmark",
                  "coords": [
                        33.626309,
                        34.923215
                  ]
            },
            {
                  "name": "Hala Sultan Tekke",
                  "text": "Hala Sultan Tekke este un important sanctuar islamic și o atracție situată lângă lacurile sărate din Larnaca.",
                  "category": "landmark",
                  "coords": [
                        33.60994,
                        34.885361
                  ]
            },
            {
                  "name": "Kimon",
                  "text": "Kimon este un monument notabil situat în orașul Larnaca.",
                  "category": "historical",
                  "coords": [
                        33.638169,
                        34.914457
                  ]
            },
            {
                  "name": "Larnaca Marina",
                  "text": "Portul de agrement din Larnaca este un punct de belvedere pitoresc la malul apei.",
                  "category": "natural",
                  "coords": [
                        33.640731,
                        34.916333
                  ]
            },
            {
                  "name": "Melina Scordelli",
                  "text": "Melina Scordelli este o galerie de artă locală din orașul Larnaca.",
                  "category": "museum",
                  "coords": [
                        33.636484,
                        34.91801
                  ]
            },
            {
                  "name": "Salt Lake Viewpoint",
                  "text": "Punctul de belvedere Salt Lake oferă perspective pitorești asupra peisajului din Larnaca.",
                  "category": "natural",
                  "coords": [
                        33.620266,
                        34.90609
                  ]
            },
            {
                  "name": "Dromolaxia-Byzakia Excavation Site",
                  "text": "Situl de excavare Hala Sultan Tekke prezintă ruine istorice situate în Larnaca.",
                  "category": "historical",
                  "coords": [
                        33.604484,
                        34.886691
                  ]
            },
            {
                  "name": "Zenobia Shipwreck",
                  "text": "Epava Zenobia este un feribot scufundat în largul coastei orașului Larnaca, devenit un sit de scufundări de renume mondial.",
                  "category": "landmark",
                  "coords": [
                        33.657621,
                        34.897244
                  ]
            },
            {
                  "name": "Armeniki ekklisia",
                  "text": "Biserica armenească este un lăcaș de cult local situat în orașul Larnaca.",
                  "category": "religious",
                  "coords": [
                        33.635584,
                        34.91493
                  ]
            },
            {
                  "name": "Panagia Chrysopolitissa",
                  "text": "Panagia Chrysopolitissa este un lăcaș de cult situat în orașul Larnaca.",
                  "category": "religious",
                  "coords": [
                        33.628506,
                        34.922063
                  ]
            },
            {
                  "name": "Panagia Faneromeni New Church",
                  "text": "Noua Biserică Panagia Faneromeni este un lăcaș de cult situat în Larnaca.",
                  "category": "religious",
                  "coords": [
                        33.628038,
                        34.910976
                  ]
            },
            {
                  "name": "Sotiros",
                  "text": "Sotiros este un lăcaș de cult local situat în orașul Larnaca.",
                  "category": "religious",
                  "coords": [
                        33.623793,
                        34.921885
                  ]
            },
            {
                  "name": "Olympiako Kolymvitirio Larnakas",
                  "text": "Piscina Olimpică Larnaka este o piscină mare din Larnaca, potrivită pentru înot în familie.",
                  "category": "family",
                  "coords": [
                        33.599955,
                        34.923361
                  ]
            },
            {
                  "name": "Alykes Larnakas",
                  "text": "Alykes Larnakas este o rezervație naturală cu lacuri sărate, cunoscută pentru flamingo.",
                  "category": "natural",
                  "coords": [
                        33.614706,
                        34.883633
                  ]
            }
      ],
      "en": [
            {
                  "name": "Pierides Museum - Bank of Cyprus Cultural Foundation",
                  "text": "The Pierides Museum is a notable museum housing a significant collection of Cypriot antiquities in Larnaca.",
                  "category": "museum",
                  "coords": [
                        33.636397,
                        34.916163
                  ]
            },
            {
                  "name": "Larnaca Municipal Gallery",
                  "text": "Larnaca Municipal Gallery is a museum displaying artworks in Larnaca.",
                  "category": "museum",
                  "coords": [
                        33.637521,
                        34.916912
                  ]
            },
            {
                  "name": "Larnaca Castle",
                  "text": "Larnaca Castle is a historic fortress situated on the coast of Larnaca.",
                  "category": "castle",
                  "coords": [
                        33.63767,
                        34.910288
                  ]
            },
            {
                  "name": "Pattichion Municipal Theater \"Skala\"",
                  "text": "Pattichion Municipal Theater \"Skala\" is a performing arts venue in Larnaca.",
                  "category": "cultural",
                  "coords": [
                        33.632235,
                        34.918977
                  ]
            },
            {
                  "name": "Byzantine Museum Saint Lazarus",
                  "text": "The Byzantine Museum Saint Lazarus showcases religious artifacts in Larnaca.",
                  "category": "museum",
                  "coords": [
                        33.634573,
                        34.911429
                  ]
            },
            {
                  "name": "Kyriazis Medical Museum",
                  "text": "The Kyriazis Medical Museum presents the medical history of Cyprus in Larnaca.",
                  "category": "museum",
                  "coords": [
                        33.634412,
                        34.913138
                  ]
            },
            {
                  "name": "Hellenistic period olive press",
                  "text": "The Hellenistic period olive press is a historical museum exhibit in Larnaca.",
                  "category": "museum",
                  "coords": [
                        33.633357,
                        34.919595
                  ]
            },
            {
                  "name": "Phinikoudes",
                  "text": "Phinikoudes is a popular palm-lined beach in the center of Larnaca.",
                  "category": "recreational",
                  "coords": [
                        33.638679,
                        34.912897
                  ]
            },
            {
                  "name": "Ancient Kition",
                  "text": "Ancient Kition is a significant archaeological site exploring ancient ruins in Larnaca.",
                  "category": "historical",
                  "coords": [
                        33.630497,
                        34.923438
                  ]
            },
            {
                  "name": "Mackenzie Beach",
                  "text": "This widely known sandy beach wonderfully enriches the coastal scenery of Larnaca in Cyprus. A cosmopolitan, energetic mood makes the place a strong magnet for sun seekers. The sand invites you to hours of sunbathing, while the warm Mediterranean offers gentle refreshment. An early start to the day guarantees you the best spot close to the water here.",
                  "category": "recreational",
                  "coords": [
                        33.638009,
                        34.890673
                  ]
            },
            {
                  "name": "Pattichion Amphitheater",
                  "text": "Pattichion Amphitheater is an outdoor theatre and event venue in Larnaca.",
                  "category": "cultural",
                  "coords": [
                        33.625432,
                        34.906052
                  ]
            },
            {
                  "name": "Larnaca Theatre",
                  "text": "Larnaca Theatre is a cultural venue hosting various performances in the city.",
                  "category": "cultural",
                  "coords": [
                        33.62654,
                        34.916069
                  ]
            },
            {
                  "name": "Ancient Military Port of Kition",
                  "text": "The Ancient Military Port of Kition is an archaeological site located in the city of Larnaca.",
                  "category": "historical",
                  "coords": [
                        33.632879,
                        34.920605
                  ]
            },
            {
                  "name": "Larnaca Salt lake",
                  "text": "Larnaca Salt Lake is a prominent attraction famously known for attracting flocks of flamingos.",
                  "category": "landmark",
                  "coords": [
                        33.615931,
                        34.894847
                  ]
            },
            {
                  "name": "Catholic Church of The Virgin Mary of The Graces",
                  "text": "The Catholic Church of The Virgin Mary of The Graces is a prominent religious attraction serving the local community in Larnaca.",
                  "category": "landmark",
                  "coords": [
                        33.626309,
                        34.923215
                  ]
            },
            {
                  "name": "Hala Sultan Tekke",
                  "text": "Hala Sultan Tekke is a significant Islamic sanctuary and attraction located near the salt lakes in Larnaca.",
                  "category": "landmark",
                  "coords": [
                        33.60994,
                        34.885361
                  ]
            },
            {
                  "name": "Kimon",
                  "text": "Kimon is a notable monument located in the city of Larnaca.",
                  "category": "historical",
                  "coords": [
                        33.638169,
                        34.914457
                  ]
            },
            {
                  "name": "Larnaca Marina",
                  "text": "Larnaca Marina is a scenic viewpoint offering beautiful perspectives over the water.",
                  "category": "natural",
                  "coords": [
                        33.640731,
                        34.916333
                  ]
            },
            {
                  "name": "Melina Scordelli",
                  "text": "Melina Scordelli is a prominent local art gallery situated in Larnaca.",
                  "category": "museum",
                  "coords": [
                        33.636484,
                        34.91801
                  ]
            },
            {
                  "name": "Salt Lake Viewpoint",
                  "text": "The Salt Lake Viewpoint offers a dedicated observation area over the distinct landscape of Larnaca.",
                  "category": "natural",
                  "coords": [
                        33.620266,
                        34.90609
                  ]
            },
            {
                  "name": "Hala Sultan Tekke Excavation Site",
                  "text": "The Hala Sultan Tekke Excavation Site features historical ruins located in Larnaca.",
                  "category": "historical",
                  "coords": [
                        33.604484,
                        34.886691
                  ]
            },
            {
                  "name": "Zenobia Shipwreck",
                  "text": "The Zenobia Shipwreck is a famous sunken ferry off the coast of Larnaca that has become a world-renowned dive site.",
                  "category": "landmark",
                  "coords": [
                        33.657621,
                        34.897244
                  ]
            },
            {
                  "name": "Armenian church",
                  "text": "The Armenian church is a local place of worship serving the community in Larnaca.",
                  "category": "religious",
                  "coords": [
                        33.635584,
                        34.91493
                  ]
            },
            {
                  "name": "Panagia Chrysopolitissa",
                  "text": "Panagia Chrysopolitissa is a dedicated place of worship located in the city of Larnaca.",
                  "category": "religious",
                  "coords": [
                        33.628506,
                        34.922063
                  ]
            },
            {
                  "name": "Panagia Faneromeni New Church",
                  "text": "The Panagia Faneromeni New Church is a modern place of worship situated in Larnaca.",
                  "category": "religious",
                  "coords": [
                        33.628038,
                        34.910976
                  ]
            },
            {
                  "name": "Sotiros",
                  "text": "Sotiros is a local place of worship situated in Larnaca.",
                  "category": "religious",
                  "coords": [
                        33.623793,
                        34.921885
                  ]
            },
            {
                  "name": "Larnaka Olympic Swimming Pool (GSZ)",
                  "text": "Larnaka Olympic Swimming Pool is a large pool in Larnaca suitable for family swimming.",
                  "category": "family",
                  "coords": [
                        33.599955,
                        34.923361
                  ]
            },
            {
                  "name": "Alykes Larnakas",
                  "text": "Alykes Larnakas is a nature reserve featuring salt lakes, known for its flamingos.",
                  "category": "natural",
                  "coords": [
                        33.614706,
                        34.883633
                  ]
            }
      ]
},
    type: "city",
    parent: "CY-001",
    coords: [33.6333, 34.9000],
    name: { de: "Larnaca", hu: "Lárnaka", ro: "Larnaca", en: "Larnaca" },
    description: {
      de: "Küstenstadt mit einer palmengesäumten Promenade und dem internationalen Flughafen.",
      hu: "Tengerparti város pálmafás sétánnyal és a nemzetközi repülőtérrel.",
      ro: "Oraș de coastă cu o promenadă mărginită de palmieri și aeroportul internațional.",
      en: "A coastal city with a palm-lined promenade and the international airport.",
      es: "Ciudad costera con un paseo marítimo bordeado de palmeras y el aeropuerto internacional.",
      pt: "Cidade costeira com um passeio marítimo ladeado por palmeiras e o aeroporto internacional.",
      fr: "Ville côtière dotée d'une promenade bordée de palmiers et de l'aéroport international.",
    },
    descriptionAdvanced: {
      de: "Larnaka, an der Südostküste Zyperns gelegen, ist die älteste Stadt der Insel und das Tor zur Welt durch den wichtigsten internationalen Flughafen. Sie wurde auf den Ruinen des antiken Kition erbaut, das im 13. Jahrhundert v. Chr. von mykenischen Griechen gegründet wurde. Ein Wahrzeichen der Stadt ist die prächtige Lazarus-Kirche aus dem 9. Jahrhundert, die über dem Grab des von Jesus auferweckten Heiligen Lazarus errichtet wurde. Die berühmte Palmenpromenade Finikoudes ist das gesellschaftliche Herz der Stadt, gesäumt von Cafés, Restaurants und einem feinsandigen Strand. Nur wenige Kilometer außerhalb des Stadtzentrums liegt der Larnaka-Salzsee, ein wichtiges Ökosystem, das im Winter Tausende von rosa Flamingos beherbergt. Am Ufer des Sees befindet sich die Hala Sultan Tekke, eine der heiligsten Stätten des Islam, die der Tante des Propheten Mohammed gewidmet ist. Larnaka verbindet auf harmonische Weise seine antike Geschichte mit der Moderne, was sich in den archäologischen Stätten und dem modernen Yachthafen widerspiegelt. Die Stadt ist auch bekannt für das Zenobia-Wrack, eines der besten Tauchreviere der Welt, das Taucher aus aller Herren Länder anzieht. Mit ihrer entspannten Atmosphäre und der reichen Kulturgeschichte ist Larnaka ein unverzichtbares Ziel auf jeder Zypernreise.",
      hu: "Larnaca Ciprus délkeleti partján fekszik, és az ország legrégebbi folyamatosan lakott városa, amelyet az ókori Kition romjaira építettek. Kitiont mükénéi görögök alapították az i. e. 13. században, és később fontos föníciai kereskedelmi központtá vált. A város legismertebb műemléke a Szent Lázár-templom, amely a 9. században épült azon a helyen, ahol a Biblia szerint Jézus barátját, Lázárt másodszor is eltemették. Larnaca jelképe a pálmafákkal szegélyezett Finikoudes sétány, amely a város közösségi életének és turizmusának központja. A várostól délre található a larnacai sós tó, amely télen flamingók ezreinek ad otthont, partján pedig a Hala Sultan Tekke mecset áll, az iszlám világ egyik legfontosabb zarándokhelye. A modern Larnaca otthont ad a sziget legfontosabb nemzetközi repülőterének, így a legtöbb látogató itt érkezik Ciprusra. A búvárok számára a város melletti vizek rejtik a Zenobia hajóroncsot, amely a világ tíz legjobb merülőhelyének egyike. A városban sétálva lépten-nyomon ókori romokba, bizánci templomokba és oszmán kori erődökbe botlunk, miközben a tengerparti kávézók a modern mediterrán életérzést kínálják.",
      ro: "Larnaca este cel mai vechi oraș locuit neîntrerupt din Cipru, fiind construit pe locul anticului Kition, fondat în secolul al XIII-lea î.Hr. Situat pe coasta de sud-est, orașul servește drept principala poartă de intrare în țară datorită aeroportului internațional situat în imediata sa apropiere. Unul dintre cele mai importante repere spirituale este Biserica Sfântul Lazăr, un edificiu bizantin spectaculos din secolul al IX-lea, ridicat peste mormântul lui Lazăr din Betania. Faleza Finikoudes, flancată de palmieri înalți, reprezintă inima socială a orașului, fiind locul perfect pentru plimbări și relaxare la numeroasele terase cu vedere la mare. La periferie se află Lacul Sărat din Larnaca, un sit protejat care în sezonul rece devine casa a mii de flamingi roz, oferind un spectacol natural deosebit. Pe malul lacului este situată moscheea Hala Sultan Tekke, un loc de pelerinaj major pentru lumea musulmană, înconjurat de grădini liniștite. Larnaca atrage și amatorii de scufundări din întreaga lume datorită epavei Zenobia, considerată unul dintre cele mai bune locuri de diving din lume. Orașul reușește să păstreze un echilibru perfect între vestigiile sale arheologice valoroase și infrastructura turistică modernă.",
      en: "Larnaca is the oldest continuously inhabited city in Cyprus, built over the remains of ancient Kition, which was founded by Mycenaean Greeks in the 13th century BC. Located on the southeastern coast, it serves as the island's primary gateway through its major international airport. The city's most famous landmark is the Church of Saint Lazarus, a stunning 9th-century Byzantine structure built over the tomb of Lazarus of Bethany, whom Jesus is said to have raised from the dead. The Finikoudes promenade, lined with palm trees, is the social hub of the city, bustling with cafes, restaurants, and beachgoers. Just outside the city lies the Larnaca Salt Lake, a complex of four lakes that hosts thousands of flamingos during the winter months. On the shores of the lake stands the Hala Sultan Tekke, one of the holiest sites in Islam, dedicated to the aunt of the Prophet Muhammad. Larnaca is also a premier destination for scuba diving, home to the Zenobia shipwreck, consistently ranked among the world's top ten dive sites. The city's rich history is visible at every turn, from the ancient ruins of Kition to the 17th-century Larnaca Castle, blending seamlessly with its modern marina and vibrant tourist facilities.",
      es: "Larnaca, situada en la costa sureste de Chipre, es la ciudad más antigua de la isla y la puerta al mundo a través del principal aeropuerto internacional. Fue construida sobre las ruinas de la antigua Kition, fundada por los griegos micénicos en el siglo XIII a.C. Un emblema de la ciudad es la magnífica Iglesia de San Lázaro del siglo IX, erigida sobre la tumba del santo resucitado por Jesús. El famoso paseo marítimo de Finikoudes es el corazón social de la ciudad, repleto de cafés, restaurantes y una playa de arena fina. A pocos kilómetros del centro se encuentra el Lago Salado de Larnaca, un ecosistema vital que alberga miles de flamencos rosas en invierno. En la orilla del lago se halla el Hala Sultan Tekke, uno de los lugares más sagrados del islam, dedicado a la tía del profeta Mahoma. Larnaca combina armoniosamente su historia antigua con la modernidad, visible en sus yacimientos arqueológicos y su moderno puerto deportivo. La ciudad también es conocida por el pecio del Zenobia, uno de los mejores lugares de buceo del mundo, que atrae a submarinistas de todas partes. Con su ambiente relajado y su rica historia cultural, Larnaca es un destino imprescindible en cualquier viaje a Chipre.",
      pt: "Larnaca, situada na costa sudeste de Chipre, é a cidade mais antiga da ilha e a porta de entrada para o mundo através do principal aeroporto internacional. Foi construída sobre as ruínas da antiga Kition, fundada pelos gregos micénicos no século XIII a.C. Um marco da cidade é a magnífica Igreja de São Lázaro, do século IX, construída sobre o túmulo do santo ressuscitado por Jesus. O famoso passeio marítimo de Finikoudes é o coração social da cidade, repleto de cafés, restaurantes e uma praia de areia fina. A poucos quilómetros do centro da cidade encontra-se o Lago Salgado de Larnaca, um ecossistema importante que acolhe milhares de flamingos cor-de-rosa no inverno. Nas margens do lago situa-se a Hala Sultan Tekke, um dos locais mais sagrados do Islão, dedicado à tia do profeta Maomé. Larnaca combina harmoniosamente a sua história antiga com a modernidade, o que se reflete nos sítios arqueológicos e na moderna marina. A cidade também é conhecida pelo naufrágio do Zenobia, um dos melhores locais de mergulho do mundo, que atrai mergulhadores de todo o lado. Com a sua atmosfera relaxada e rica história cultural, Larnaca é um destino indispensável em qualquer viagem a Chipre.",
      fr: "Larnaca, située sur la côte sud-est de Chypre, est la plus ancienne ville de l'île et la porte d'entrée vers le monde grâce à son principal aéroport international. Elle a été bâtie sur les ruines de l'antique Kition, fondée par les Grecs mycéniens au XIIIe siècle av. J.-C. L'un des emblèmes de la ville est la magnifique église Saint-Lazare du IXe siècle, édifiée sur le tombeau du saint ressuscité par Jésus. La célèbre promenade des palmiers, Finikoudes, constitue le cœur social de la ville, bordée de cafés, de restaurants et d'une plage de sable fin. À quelques kilomètres du centre se trouve le lac salé de Larnaca, un écosystème majeur qui accueille des milliers de flamants roses en hiver. Sur les rives du lac se dresse la Hala Sultan Tekke, l'un des lieux les plus sacrés de l'islam, dédié à la tante du prophète Mahomet. Larnaca allie harmonieusement son histoire antique à la modernité, comme en témoignent ses sites archéologiques et son port de plaisance moderne. La ville est également réputée pour l'épave du Zenobia, l'un des meilleurs sites de plongée au monde, attirant des plongeurs du monde entier. Avec son atmosphère détendue et sa riche histoire culturelle, Larnaca est une étape incontournable de tout voyage à Chypre.",
    },
    factsAdvanced: {
      de: ["Larnaka wurde ursprünglich unter dem antiken Namen Kition gegründet.", "Die Lazarus-Kirche wurde um das Jahr 890 n. Chr. vom byzantinischen Kaiser erbaut.", "Der Larnaka-Flughafen wurde 1975 nach der Teilung der Insel eröffnet.", "Hala Sultan Tekke gilt als die viertheiligste Stätte des Islams weltweit.", "Der Salzsee von Larnaka hat eine Gesamtfläche von etwa 2,2 Quadratkilometern.", "Die Zenobia, eine schwedische Fähre, sank im Juni 1980 vor der Küste."],
      hu: ["Larnaca neve a görög 'larnax' szóból ered, aminek jelentése szarkofág.", "Szent Lázár Kition püspökeként élt 30 évig a feltámasztása után.", "A város melletti sós tó nyáron teljesen kiszárad, fehér sóréteg marad utána.", "A larnacai vár 1625-ben kapta meg mai formáját az oszmánoktól.", "A Zenobia hajóroncs 42 méteres mélységben fekszik a tengerfenéken.", "Zénón, a sztoikus filozófia megalapítója, i. e. 334-ben itt született."],
      ro: ["Larnaca a fost fondată de coloniști micenieni în epoca bronzului.", "Biserica Sfântul Lazăr păstrează moaștele sfântului într-o raclă de argint.", "Moscheea Hala Sultan Tekke a fost finalizată în forma actuală în 1817.", "Apeductul Kamares, construit în 1747, a adus apă în oraș timp de 200 de ani.", "Epava Zenobia are o lungime de 172 de metri și este plină de camioane.", "Larnaca are o populație de aproximativ 51.000 de locuitori în orașul propriu-zis."],
      en: ["Larnaca was the main port of Cyprus from the Middle Ages until the 19th century.", "The Church of Saint Lazarus was commissioned by Byzantine Emperor Leo VI.", "The Salt Lake is a Natura 2000 protected site since the late 20th century.", "Kition was a major center for copper trade in the ancient Mediterranean.", "The Finikoudes promenade gets its name from the palm trees planted in 1922.", "Larnaca International Airport handles over 8 million passengers annually."],
      es: ["Larnaca fue fundada originalmente bajo el nombre antiguo de Kition.", "La Iglesia de San Lázaro fue construida hacia el año 890 d.C. por el emperador bizantino.", "El aeropuerto de Larnaca fue inaugurado en 1975 tras la división de la isla.", "Hala Sultan Tekke es considerada el cuarto lugar más sagrado del islam en el mundo.", "El Lago Salado de Larnaca tiene una superficie total de unos 2,2 kilómetros cuadrados.", "El Zenobia, un ferry sueco, se hundió frente a la costa en junio de 1980."],
      pt: ["Larnaca foi originalmente fundada sob o nome antigo de Kition.", "A Igreja de São Lázaro foi construída por volta do ano 890 d.C. pelo imperador bizantino.", "O aeroporto de Larnaca foi inaugurado em 1975 após a divisão da ilha.", "Hala Sultan Tekke é considerada o quarto local mais sagrado do Islão no mundo.", "O Lago Salgado de Larnaca tem uma área total de cerca de 2,2 quilómetros quadrados.", "O Zenobia, um ferry sueco, afundou-se ao largo da costa em junho de 1980."],
      fr: ["Larnaca a été initialement fondée sous le nom antique de Kition.", "L'église Saint-Lazare a été construite vers 890 apr. J.-C. par l'empereur byzantin.", "L'aéroport de Larnaca a été ouvert en 1975 après la partition de l'île.", "Hala Sultan Tekke est considérée comme le quatrième lieu le plus sacré de l'islam au monde.", "Le lac salé de Larnaca s'étend sur une superficie totale d'environ 2,2 kilomètres carrés.", "Le Zenobia, un ferry suédois, a coulé au large des côtes en juin 1980."],
    }, image: "/poi-images/cy-larnaca.webp",
    facts: {
      de: ["Finikoudes Palmenpromenade", "Antikes Königreich Kition", "Hauptflughafen von Zypern", "Drittgrößte Stadt des Landes"],
      hu: ["Finikoudes pálmafás sétány", "Az ókori Kition helyén fekszik", "Ciprus legforgalmasabb repülőtere", "Ciprus harmadik legnagyobb városa"],
      ro: ["Promenada cu palmieri Finikoudes", "Construit pe ruinele Kitionului", "Principalul aeroport internațional", "Al treilea oraș ca mărime"],
      en: ["Finikoudes palm tree promenade", "Ancient city-state of Kition", "Largest international airport", "Third largest city in Cyprus"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-paphos", "sights": {"de": [{"name": "Saranta Kolones", "text": "Eine mittelalterliche Burgruine in Paphos, bekannt für ihre zahlreichen Säulen.", "category": "castle", "coords": [32.409716, 34.757599]}, {"name": "Ottoman Hamam", "text": "Ein traditionelles osmanisches Bad in Paphos, das die historische Badekultur zeigt.", "category": "landmark", "coords": [32.419428, 34.777518]}, {"name": "Paphos Archaeological Museum", "text": "Das archäologische Museum von Paphos beherbergt Funde aus der Region von der Jungsteinzeit bis zum Mittelalter.", "category": "museum", "coords": [32.430326, 34.771814]}, {"name": "Tafos", "text": "Eine antike Grabstätte innerhalb der berühmten Königsgräber von Paphos.", "category": "historical", "coords": [32.40507, 34.776461]}, {"name": "Tafos 6", "text": "Ein weiteres Beispiel für die antike Bestattungsarchitektur in Paphos.", "category": "historical", "coords": [32.405067, 34.777836]}, {"name": "Tafos 2", "text": "Ein historisches Grabmal in der Nekropole der Königsgräber von Paphos.", "category": "historical", "coords": [32.405706, 34.774785]}, {"name": "Tafos 1", "text": "Das erste Grabmal in der Abfolge der archäologischen Stätte in Paphos.", "category": "historical", "coords": [32.407002, 34.774793]}, {"name": "Paphos amphitheatre", "text": "Ein antikes Amphitheater in Paphos, das für historische Aufführungen genutzt wurde.", "category": "historical", "coords": [32.405321, 34.754957]}, {"name": "Roman Odeon", "text": "Ein kleines römisches Theater in Paphos, das heute für kulturelle Veranstaltungen genutzt wird.", "category": "historical", "coords": [32.407142, 34.76025]}, {"name": "Haus des Aion", "text": "Ruinen eines römischen Hauses in Paphos, berühmt für seine gut erhaltenen Mosaike.", "category": "historical", "coords": [32.405584, 34.756724]}, {"name": "Panagia Theoskepasti", "text": "Eine orthodoxe Kirche in Paphos, die auf einem Felsen über dem Hafen liegt.", "category": "religious", "coords": [32.415788, 34.757121]}, {"name": "Agia Kyriaki Chrisopolitissa", "text": "Eine byzantinische Kirche in Paphos, die für die Paulus-Säule bekannt ist.", "category": "religious", "coords": [32.414274, 34.757853]}, {"name": "Kathedrikos Naos Agioy Theodoroy", "text": "Ein religiöses Gebäude in Paphos, das dem Heiligen Theodor gewidmet ist.", "category": "religious", "coords": [32.420615, 34.772744]}, {"name": "Ayioi Anargiroi", "text": "Eine Kirche in Paphos, die den heiligen Anargyroi gewidmet ist.", "category": "religious", "coords": [32.417119, 34.76213]}, {"name": "Agios Georgios", "text": "Eine dem Heiligen Georg gewidmete Kultstätte in Paphos.", "category": "religious", "coords": [32.415354, 34.758663]}, {"name": "Agios Antonios", "text": "Eine historische Kirche in Paphos, die dem Heiligen Antonius gewidmet ist.", "category": "religious", "coords": [32.417299, 34.757587]}, {"name": "Agia Faneromeni", "text": "Eine Kultstätte in Paphos, die der Heiligen Faneromeni gewidmet ist.", "category": "religious", "coords": [32.416101, 34.760423]}, {"name": "Fabrica Hill", "text": "Ein Hügel in Paphos mit antiken Steinbrüchen, Gräbern und religiösen Stätten.", "category": "landmark", "coords": [32.413189, 34.762244]}, {"name": "Haus des Dionysos", "text": "Eine römische Villa in Paphos, bekannt für ihre prächtigen Mosaike aus der Mythologie.", "category": "landmark", "coords": [32.406059, 34.758199]}, {"name": "Lighthouse Beach", "text": "Unterhalb des markanten Leuchtturms von Paphos erstreckt sich dieser überaus beliebte zypriotische Küstenstreifen. Die malerische Verbindung von Meer und stolzer maritimer Architektur schafft ein ganz besonders entspanntes Flair. Gäste erfreuen sich an gemütlichen Strandspaziergängen, Sonnenbädern und einem angenehmen Sprung ins Wasser. Ein Spätnachmittagsbesuch wird oft mit einem atemberaubend schönen Sonnenuntergang belohnt.", "category": "recreational", "coords": [32.406249, 34.764387]}, {"name": "Psifida", "text": "Eine Galerie in Paphos, die verschiedene Kunstwerke und Mosaike ausstellt.", "category": "museum", "coords": [32.412646, 34.763942]}, {"name": "Tafos 9", "text": "Ein weiteres antikes Grabmal innerhalb des archäologischen Parks von Paphos.", "category": "historical", "coords": [32.40679, 34.776332]}, {"name": "Cut through old city wall", "text": "Eine archäologische Stätte in Paphos, die einen Durchbruch der alten Stadtmauer zeigt.", "category": "historical", "coords": [32.403002, 34.759413]}, {"name": "Catacombs", "text": "Antike unterirdische Grabanlagen und Gänge in Paphos.", "category": "historical", "coords": [32.422875, 34.774796]}, {"name": "Eastern Necropolis", "text": "Eine antike Nekropole im östlichen Teil von Paphos.", "category": "historical", "coords": [32.418051, 34.755715]}, {"name": "WW II's Paphos volunteers", "text": "Ein Denkmal für die Freiwilligen aus Paphos im Zweiten Weltkrieg.", "category": "historical", "coords": [32.427881, 34.772257]}, {"name": "Old windmill ruins", "text": "Überreste alter Windmühlen in Paphos, die Zeugnis der früheren Wirtschaft ablegen.", "category": "historical", "coords": [32.42513, 34.772025]}, {"name": "Spyros Kiprianos Bust", "text": "Eine Büste in Paphos zur Erinnerung an Spyros Kiprianos.", "category": "historical", "coords": [32.418583, 34.762263]}, {"name": "Evagoras Pallikarides Statue", "text": "Ein Denkmal in Paphos, das dem zypriotischen Freiheitskämpfer Evagoras Pallikarides gewidmet ist.", "category": "historical", "coords": [32.423779, 34.773922]}, {"name": "Resistance Bus", "text": "Ein historisches Denkmal in Paphos, das an den zypriotischen Widerstand erinnert.", "category": "historical", "coords": [32.441188, 34.788674]}, {"name": "Haus des Orpheus", "text": "Überreste eines antiken römischen Hauses in Paphos, bekannt für seine mythologischen Mosaike.", "category": "historical", "coords": [32.403696, 34.756753]}, {"name": "Toumpallos", "text": "Archäologische Ausgrabungsstätte mit antiken Ruinen in der Nähe des Hafens von Paphos.", "category": "historical", "coords": [32.410181, 34.762451]}, {"name": "Medieval baths (1191-1489)", "text": "Historische Ruinen mittelalterlicher Badeanlagen aus der Zeit der Lusignans in Paphos.", "category": "historical", "coords": [32.414863, 34.759606]}, {"name": "Amphitheater", "text": "Überreste eines antiken griechisch-römischen Amphitheaters in der Stadt Paphos.", "category": "historical", "coords": [32.41394, 34.761212]}, {"name": "Basilica of Panagia Limeniotissa", "text": "Ruinen einer frühchristlichen Basilika in der Nähe des Hafens von Paphos.", "category": "historical", "coords": [32.407848, 34.755764]}, {"name": "Castle Square", "text": "Ein öffentlicher Platz am Schloss von Paphos, der oft für kulturelle Veranstaltungen genutzt wird.", "category": "cultural", "coords": [32.407322, 34.753903]}, {"name": "Markideion Theater", "text": "Ein bedeutendes Theater in Paphos, in dem verschiedene kulturelle Aufführungen stattfinden.", "category": "cultural", "coords": [32.423138, 34.778183]}, {"name": "Municipal Gallery", "text": "Die städtische Kunstgalerie von Paphos mit Werken lokaler und zypriotischer Künstler.", "category": "cultural", "coords": [32.420521, 34.774014]}, {"name": "Polychoros politismoy Palia Ilektriki", "text": "Ein Kulturzentrum in einem ehemaligen Elektrizitätswerk in Paphos.", "category": "cultural", "coords": [32.42191, 34.776549]}, {"name": "Circle Creative Space", "text": "Ein kreativer Raum in Paphos für Kunstausstellungen und Workshops.", "category": "cultural", "coords": [32.429912, 34.784095]}, {"name": "Home of Arts & Literature", "text": "Ein Zentrum in Paphos, das der Förderung von Kunst und Literatur gewidmet ist.", "category": "cultural", "coords": [32.423317, 34.780893]}, {"name": "WaveDancer Cruises", "text": "Ein beliebtes Ausflugsschiff in Paphos, das verschiedene Kreuzfahrten und Veranstaltungen anbietet.", "category": "landmark", "coords": [32.408779, 34.755036]}, {"name": "Agios Lambrianos Catacombs", "text": "Antike unterirdische Grabanlagen in Paphos, die als Katakomben bekannt sind.", "category": "landmark", "coords": [32.412094, 34.761827]}, {"name": "Pachyammos Beach", "text": "Ein Strandresort in Paphos für erholsame Urlaubstage am Mittelmeer.", "category": "family", "coords": [32.425813, 34.743689]}, {"name": "Geroskipou Municipal Swimming Pool", "text": "Das städtische Schwimmbad von Geroskipou in Paphos bietet gute Sportmöglichkeiten.", "category": "family", "coords": [32.441268, 34.744709]}, {"name": "Hamam", "text": "Ein öffentliches Bad in Paphos für Wellness und Entspannung.", "category": "family", "coords": [32.41077, 34.759098]}, {"name": "Splash Pool", "text": "Ein Schwimmbad in Paphos mit Attraktionen für Kinder.", "category": "family", "coords": [32.434335, 34.745439]}, {"name": "Lagoon Pool", "text": "Ein weitläufiger Lagunenpool in Paphos für entspanntes Schwimmen.", "category": "family", "coords": [32.431409, 34.744228]}, {"name": "Alykes Beach", "text": "Ein beliebter Strand in Paphos für Sonne und Meer.", "category": "family", "coords": [32.416996, 34.754775]}], "hu": [{"name": "Saranta Kolones", "text": "Középkori várrom Paphosban, amely számos oszlopáról ismert.", "category": "castle", "coords": [32.409716, 34.757599]}, {"name": "Ottoman Hamam", "text": "Hagyományos oszmán fürdő Paphosban, amely a történelmi fürdőkultúrát mutatja be.", "category": "landmark", "coords": [32.419428, 34.777518]}, {"name": "Paphos Archaeological Museum", "text": "A Paphosi Régészeti Múzeum a régió leleteit őrzi az újkőkorszaktól a középkorig.", "category": "museum", "coords": [32.430326, 34.771814]}, {"name": "Tafos", "text": "Ókori sírhely a híres paphosi Királysírok területén.", "category": "historical", "coords": [32.40507, 34.776461]}, {"name": "Tafos 6", "text": "Paphos ókori temetkezési építészetének egy újabb példája.", "category": "historical", "coords": [32.405067, 34.777836]}, {"name": "Tafos 2", "text": "Történelmi síremlék a paphosi Királysírok nekropoliszában.", "category": "historical", "coords": [32.405706, 34.774785]}, {"name": "Tafos 1", "text": "Az első síremlék a paphosi régészeti lelőhely sorozatában.", "category": "historical", "coords": [32.407002, 34.774793]}, {"name": "Paphos amphitheatre", "text": "Ókori amfiteátrum Paphosban, amelyet történelmi előadásokhoz használtak.", "category": "historical", "coords": [32.405321, 34.754957]}, {"name": "Roman Odeon", "text": "Kisméretű római színház Paphosban, amelyet ma kulturális rendezvényekre használnak.", "category": "historical", "coords": [32.407142, 34.76025]}, {"name": "House of Aion", "text": "Római ház romjai Paphosban, amely jól megőrzött mozaikjairól híres.", "category": "historical", "coords": [32.405584, 34.756724]}, {"name": "Panagia Theoskepasti", "text": "Ortodox templom Paphosban, amely a kikötő feletti sziklán található.", "category": "religious", "coords": [32.415788, 34.757121]}, {"name": "Agia Kyriaki Chrisopolitissa", "text": "Bizánci templom Paphosban, amely a Szent Pál-oszlopról ismert.", "category": "religious", "coords": [32.414274, 34.757853]}, {"name": "Kathedrikos Naos Agioy Theodoroy", "text": "Szent Tivadarnak szentelt vallási épület Paphosban.", "category": "religious", "coords": [32.420615, 34.772744]}, {"name": "Ayioi Anargiroi", "text": "A Szent Anargyroi tiszteletére szentelt templom Paphosban.", "category": "religious", "coords": [32.417119, 34.76213]}, {"name": "Agios Georgios", "text": "Szent Györgynek szentelt kegyhely Paphosban.", "category": "religious", "coords": [32.415354, 34.758663]}, {"name": "Agios Antonios", "text": "Szent Antalnak szentelt történelmi templom Paphosban.", "category": "religious", "coords": [32.417299, 34.757587]}, {"name": "Agia Faneromeni", "text": "Szent Faneromeninek szentelt kegyhely Paphosban.", "category": "religious", "coords": [32.416101, 34.760423]}, {"name": "Fabrica Hill", "text": "Domb Paphosban ókori kőbányákkal, sírokkal és vallási helyszínekkel.", "category": "landmark", "coords": [32.413189, 34.762244]}, {"name": "The House of Dionysos", "text": "Római villa Paphosban, amely mitológiai jeleneteket ábrázoló pompás mozaikjairól ismert.", "category": "landmark", "coords": [32.406059, 34.758199]}, {"name": "Lighthouse Beach", "text": "Páfosz jellegzetes világítótornya alatt húzódik ez a rendkívül népszerű ciprusi partszakasz. A tenger és a büszke tengerészeti építészet festői kapcsolata különösen nyugodt hangulatot teremt. A vendégek élvezhetik a kényelmes tengerparti sétákat, a napozást és a kellemes csobbanást a vízbe. Egy késő délutáni látogatást gyakran lélegzetelállítóan szép naplemente koronáz meg.", "category": "recreational", "coords": [32.406249, 34.764387]}, {"name": "Psifida", "text": "Galéria Paphosban, ahol különféle műalkotások és mozaikok láthatók.", "category": "museum", "coords": [32.412646, 34.763942]}, {"name": "Tafos 9", "text": "Újabb ókori síremlék Paphos régészeti parkjában.", "category": "historical", "coords": [32.40679, 34.776332]}, {"name": "Cut through old city wall", "text": "Régészeti helyszín Paphosban, amely a régi városfal egyik áttörését mutatja be.", "category": "historical", "coords": [32.403002, 34.759413]}, {"name": "Catacombs", "text": "Ókori föld alatti sírkamrák és járatok Paphosban.", "category": "historical", "coords": [32.422875, 34.774796]}, {"name": "Eastern Necropolis", "text": "Ókori nekropolisz Paphos keleti részén.", "category": "historical", "coords": [32.418051, 34.755715]}, {"name": "WW II's Paphos volunteers", "text": "Emlékmű a második világháború paphosi önkénteseinek tiszteletére.", "category": "historical", "coords": [32.427881, 34.772257]}, {"name": "Old windmill ruins", "text": "Régi szélmalmok maradványai Paphosban, amelyek a korábbi gazdaság emlékei.", "category": "historical", "coords": [32.42513, 34.772025]}, {"name": "Spyros Kiprianos Bust", "text": "Spyros Kiprianos emlékére állított mellszobor Paphosban.", "category": "historical", "coords": [32.418583, 34.762263]}, {"name": "Evagoras Pallikarides Statue", "text": "Paphos városában található emlékmű, melyet Evagorasz Pallikaridesz ciprusi szabadságharcos emlékére emeltek.", "category": "historical", "coords": [32.423779, 34.773922]}, {"name": "Resistance Bus", "text": "Történelmi emlékmű Paphosban, amely a ciprusi ellenállásnak állít emléket.", "category": "historical", "coords": [32.441188, 34.788674]}, {"name": "The House of Orpheus", "text": "Egy ókori római ház maradványai Paphosban, amely mitológiai mozaikjairól ismert.", "category": "historical", "coords": [32.403696, 34.756753]}, {"name": "Toumpallos", "text": "Régészeti lelőhely ókori romokkal Paphos kikötőjének közelében.", "category": "historical", "coords": [32.410181, 34.762451]}, {"name": "Medieval baths (1191-1489)", "text": "Középkori fürdők történelmi romjai a luzignáni korszakból Paphosban.", "category": "historical", "coords": [32.414863, 34.759606]}, {"name": "Amphitheater", "text": "Egy ókori görög-római amfiteátrum maradványai Paphos városában.", "category": "historical", "coords": [32.41394, 34.761212]}, {"name": "Basilica of Panagia Limeniotissa", "text": "Egy kora keresztény bazilika romjai Paphos kikötőjének közelében.", "category": "historical", "coords": [32.407848, 34.755764]}, {"name": "Castle Square", "text": "Nyilvános tér a paphosi várnál, amelyet gyakran használnak kulturális eseményekre.", "category": "cultural", "coords": [32.407322, 34.753903]}, {"name": "Markideion Theater", "text": "Paphos egyik jelentős színháza, amely különféle kulturális előadásoknak ad otthont.", "category": "cultural", "coords": [32.423138, 34.778183]}, {"name": "Municipal Gallery", "text": "Paphos városi művészeti galériája, amely helyi és ciprusi művészek alkotásait mutatja be.", "category": "cultural", "coords": [32.420521, 34.774014]}, {"name": "Polychoros politismoy Palia Ilektriki", "text": "Kulturális központ egy egykori elektromos művek épületében Paphosban.", "category": "cultural", "coords": [32.42191, 34.776549]}, {"name": "Circle Creative Space", "text": "Kreatív központ Paphosban művészeti kiállítások és workshopok számára.", "category": "cultural", "coords": [32.429912, 34.784095]}, {"name": "Home of Arts & Literature", "text": "A művészetek és az irodalom népszerűsítésének szentelt központ Paphosban.", "category": "cultural", "coords": [32.423317, 34.780893]}, {"name": "WaveDancer Cruises", "text": "Népszerű kirándulóhajó Paphosban, amely különféle hajóutakat és eseményeket kínál.", "category": "landmark", "coords": [32.408779, 34.755036]}, {"name": "Agios Lambrianos Catacombs", "text": "Katakombákként ismert ókori földalatti sírrendszer Paphosban.", "category": "landmark", "coords": [32.412094, 34.761827]}, {"name": "Pachyammos Beach", "text": "Tengerparti üdülőhely Paphosban, ideális a mediterrán pihenéshez.", "category": "family", "coords": [32.425813, 34.743689]}, {"name": "Geroskipou Municipal Swimming Pool", "text": "Geroskipou városi uszodája Paphosban, kiváló lehetőséget nyújt a sportolásra.", "category": "family", "coords": [32.441268, 34.744709]}, {"name": "Hamam", "text": "Nyilvános fürdő Paphosban, ahol a látogatók kipihenhetik a mindennapok fáradalmait.", "category": "family", "coords": [32.41077, 34.759098]}, {"name": "Splash Pool", "text": "Úszómedence Paphosban, amely különféle attrakciókkal várja a gyermekeket.", "category": "family", "coords": [32.434335, 34.745439]}, {"name": "Lagoon Pool", "text": "Tágas lagúna-medence Paphosban, amely kellemes fürdőzési élményt nyújt.", "category": "family", "coords": [32.431409, 34.744228]}, {"name": "Alykes Beach", "text": "Népszerű strand Paphosban a napozás és a tengerparti pihenés kedvelőinek.", "category": "family", "coords": [32.416996, 34.754775]}], "ro": [{"name": "Saranta Kolones", "text": "O ruină de castel medieval din Paphos, cunoscută pentru numeroasele sale coloane.", "category": "castle", "coords": [32.409716, 34.757599]}, {"name": "Ottoman Hamam", "text": "O baie otomană tradițională din Paphos, care prezintă cultura istorică a băii.", "category": "landmark", "coords": [32.419428, 34.777518]}, {"name": "Paphos Archaeological Museum", "text": "Muzeul Arheologic din Paphos găzduiește descoperiri din regiune, din neolitic până în epoca medievală.", "category": "museum", "coords": [32.430326, 34.771814]}, {"name": "Tafos", "text": "Un mormânt antic în cadrul faimoaselor Morminte ale Regilor din Paphos.", "category": "historical", "coords": [32.40507, 34.776461]}, {"name": "Tafos 6", "text": "Un alt exemplu al arhitecturii funerare antice din Paphos.", "category": "historical", "coords": [32.405067, 34.777836]}, {"name": "Tafos 2", "text": "Un mormânt istoric în necropola Mormintelor Regilor din Paphos.", "category": "historical", "coords": [32.405706, 34.774785]}, {"name": "Tafos 1", "text": "Primul mormânt în secvența sitului arheologic din Paphos.", "category": "historical", "coords": [32.407002, 34.774793]}, {"name": "Paphos amphitheatre", "text": "Un amfiteatru antic în Paphos, folosit pentru spectacole istorice.", "category": "historical", "coords": [32.405321, 34.754957]}, {"name": "Roman Odeon", "text": "Un mic teatru roman din Paphos, folosit astăzi pentru evenimente culturale.", "category": "historical", "coords": [32.407142, 34.76025]}, {"name": "House of Aion", "text": "Ruinele unei case romane din Paphos, renumită pentru mozaicurile sale bine conservate.", "category": "historical", "coords": [32.405584, 34.756724]}, {"name": "Panagia Theoskepasti", "text": "O biserică ortodoxă din Paphos, situată pe o stâncă deasupra portului.", "category": "religious", "coords": [32.415788, 34.757121]}, {"name": "Agia Kyriaki Chrisopolitissa", "text": "O biserică bizantină din Paphos, cunoscută pentru coloana Sfântului Pavel.", "category": "religious", "coords": [32.414274, 34.757853]}, {"name": "Kathedrikos Naos Agioy Theodoroy", "text": "O clădire religioasă din Paphos dedicată Sfântului Teodor.", "category": "religious", "coords": [32.420615, 34.772744]}, {"name": "Ayioi Anargiroi", "text": "O biserică din Paphos dedicată Sfinților Anargiri.", "category": "religious", "coords": [32.417119, 34.76213]}, {"name": "Agios Georgios", "text": "Un lăcaș de cult dedicat Sfântului Gheorghe din Paphos.", "category": "religious", "coords": [32.415354, 34.758663]}, {"name": "Agios Antonios", "text": "O biserică istorică din Paphos dedicată Sfântului Anton.", "category": "religious", "coords": [32.417299, 34.757587]}, {"name": "Agia Faneromeni", "text": "Un lăcaș de cult din Paphos dedicat Sfintei Faneromeni.", "category": "religious", "coords": [32.416101, 34.760423]}, {"name": "Fabrica Hill", "text": "Un deal din Paphos cu cariere antice, morminte și situri religioase.", "category": "landmark", "coords": [32.413189, 34.762244]}, {"name": "The House of Dionysos", "text": "O vilă romană din Paphos, cunoscută pentru mozaicurile sale magnifice cu teme mitologice.", "category": "landmark", "coords": [32.406059, 34.758199]}, {"name": "Lighthouse Beach", "text": "Sub farul distinctiv din Paphos se întinde această fâșie de coastă cipriotă extrem de populară. Combinația pitorească dintre mare și mândra arhitectură maritimă creează un aer deosebit de relaxat. Oaspeții se bucură de plimbări confortabile pe plajă, de băi de soare și de o baie plăcută în apă. O vizită după-amiaza târziu este adesea răsplătită cu un apus de soare uluitor de frumos.", "category": "recreational", "coords": [32.406249, 34.764387]}, {"name": "Psifida", "text": "O galerie din Paphos care expune diverse opere de artă și mozaicuri.", "category": "museum", "coords": [32.412646, 34.763942]}, {"name": "Tafos 9", "text": "Un alt mormânt antic în cadrul parcului arheologic din Paphos.", "category": "historical", "coords": [32.40679, 34.776332]}, {"name": "Cut through old city wall", "text": "Un sit arheologic din Paphos care prezintă o secțiune prin vechiul zid al orașului.", "category": "historical", "coords": [32.403002, 34.759413]}, {"name": "Catacombs", "text": "Sisteme de morminte și pasaje subterane antice din Paphos.", "category": "historical", "coords": [32.422875, 34.774796]}, {"name": "Eastern Necropolis", "text": "O necropolă antică situată în partea de est a orașului Paphos.", "category": "historical", "coords": [32.418051, 34.755715]}, {"name": "WW II's Paphos volunteers", "text": "Un monument dedicat voluntarilor din Paphos din cel de-al Doilea Război Mondial.", "category": "historical", "coords": [32.427881, 34.772257]}, {"name": "Old windmill ruins", "text": "Resturile unor vechi mori de vânt din Paphos, care depun mărturie despre economia trecută.", "category": "historical", "coords": [32.42513, 34.772025]}, {"name": "Spyros Kiprianos Bust", "text": "Un bust în Paphos ridicat în memoria lui Spyros Kiprianos.", "category": "historical", "coords": [32.418583, 34.762263]}, {"name": "Evagoras Pallikarides Statue", "text": "Un monument în Paphos dedicat luptătorului pentru libertate cipriot Evagoras Pallikarides.", "category": "historical", "coords": [32.423779, 34.773922]}, {"name": "Resistance Bus", "text": "Un monument istoric din Paphos care comemorează rezistența cipriotă.", "category": "historical", "coords": [32.441188, 34.788674]}, {"name": "The House of Orpheus", "text": "Rămășițele unei case romane antice din Paphos, cunoscută pentru mozaicurile sale mitologice.", "category": "historical", "coords": [32.403696, 34.756753]}, {"name": "Toumpallos", "text": "Sit arheologic cu ruine antice situat în apropierea portului din Paphos.", "category": "historical", "coords": [32.410181, 34.762451]}, {"name": "Medieval baths (1191-1489)", "text": "Ruine istorice ale unor băi medievale din perioada Lusignan în Paphos.", "category": "historical", "coords": [32.414863, 34.759606]}, {"name": "Amphitheater", "text": "Rămășițele unui amfiteatru antic greco-roman în orașul Paphos.", "category": "historical", "coords": [32.41394, 34.761212]}, {"name": "Basilica of Panagia Limeniotissa", "text": "Ruinele unei bazilici creștine timpurii situate lângă portul din Paphos.", "category": "historical", "coords": [32.407848, 34.755764]}, {"name": "Castle Square", "text": "O piață publică lângă Castelul Paphos, utilizată adesea pentru evenimente culturale.", "category": "cultural", "coords": [32.407322, 34.753903]}, {"name": "Markideion Theater", "text": "Un teatru important din Paphos care găzduiește diverse spectacole culturale.", "category": "cultural", "coords": [32.423138, 34.778183]}, {"name": "Municipal Gallery", "text": "Galeria municipală din Paphos, care expune lucrări ale artiștilor locali și ciprioți.", "category": "cultural", "coords": [32.420521, 34.774014]}, {"name": "Polychoros politismoy Palia Ilektriki", "text": "Un centru cultural găzduit într-o fostă uzină electrică din Paphos.", "category": "cultural", "coords": [32.42191, 34.776549]}, {"name": "Circle Creative Space", "text": "Un spațiu creativ în Paphos pentru expoziții de artă și ateliere.", "category": "cultural", "coords": [32.429912, 34.784095]}, {"name": "Home of Arts & Literature", "text": "Un centru în Paphos dedicat promovării artelor și literaturii.", "category": "cultural", "coords": [32.423317, 34.780893]}, {"name": "WaveDancer Cruises", "text": "O navă de croazieră populară în Paphos, care oferă diverse excursii și evenimente.", "category": "landmark", "coords": [32.408779, 34.755036]}, {"name": "Agios Lambrianos Catacombs", "text": "Sisteme de morminte subterane antice din Paphos, cunoscute sub numele de catacombe.", "category": "landmark", "coords": [32.412094, 34.761827]}, {"name": "Pachyammos Beach", "text": "O stațiune de plajă în Paphos, perfectă pentru vacanțe relaxante la malul mării.", "category": "family", "coords": [32.425813, 34.743689]}, {"name": "Geroskipou Municipal Swimming Pool", "text": "Piscina municipală Geroskipou din Paphos oferă facilități bune pentru înot.", "category": "family", "coords": [32.441268, 34.744709]}, {"name": "Hamam", "text": "O baie publică în Paphos, potrivită pentru relaxare și wellness.", "category": "family", "coords": [32.41077, 34.759098]}, {"name": "Splash Pool", "text": "O piscină în Paphos cu diverse atracții acvatice pentru copii.", "category": "family", "coords": [32.434335, 34.745439]}, {"name": "Lagoon Pool", "text": "O piscină tip lagună în Paphos, ideală pentru înot și relaxare.", "category": "family", "coords": [32.431409, 34.744228]}, {"name": "Alykes Beach", "text": "O plajă populară în Paphos, excelentă pentru soare și activități la mare.", "category": "family", "coords": [32.416996, 34.754775]}], "en": [{"name": "Saranta Kolones", "text": "A medieval castle ruin in Paphos, known for its numerous columns.", "category": "castle", "coords": [32.409716, 34.757599]}, {"name": "Ottoman Hamam", "text": "A traditional Ottoman bath in Paphos showcasing historical bathing culture.", "category": "landmark", "coords": [32.419428, 34.777518]}, {"name": "Paphos Archaeological Museum", "text": "The Paphos Archaeological Museum houses finds from the region ranging from the Neolithic to the medieval period.", "category": "museum", "coords": [32.430326, 34.771814]}, {"name": "Kings Tomb 8", "text": "An ancient burial site within the famous Tombs of the Kings in Paphos.", "category": "historical", "coords": [32.40507, 34.776461]}, {"name": "Tomb 6", "text": "Another example of ancient burial architecture in Paphos.", "category": "historical", "coords": [32.405067, 34.777836]}, {"name": "Tomb 2", "text": "A historical tomb in the necropolis of the Tombs of the Kings in Paphos.", "category": "historical", "coords": [32.405706, 34.774785]}, {"name": "Tomb 1", "text": "The first tomb in the sequence of the archaeological site in Paphos.", "category": "historical", "coords": [32.407002, 34.774793]}, {"name": "Paphos amphitheatre", "text": "An ancient amphitheatre in Paphos used for historical performances.", "category": "historical", "coords": [32.405321, 34.754957]}, {"name": "Roman Odeon", "text": "A small Roman theatre in Paphos, now used for cultural events.", "category": "historical", "coords": [32.407142, 34.76025]}, {"name": "House of Aion", "text": "Ruins of a Roman house in Paphos, famous for its well-preserved mosaics.", "category": "historical", "coords": [32.405584, 34.756724]}, {"name": "Panagia Theoskepasti", "text": "An Orthodox church in Paphos situated on a rock overlooking the harbour.", "category": "religious", "coords": [32.415788, 34.757121]}, {"name": "Agia Kyriaki Chrisopolitissa", "text": "A Byzantine church in Paphos known for Saint Paul's Pillar.", "category": "religious", "coords": [32.414274, 34.757853]}, {"name": "Agios Theodoros", "text": "A religious building in Paphos dedicated to Saint Theodoros.", "category": "religious", "coords": [32.420615, 34.772744]}, {"name": "Ayioi Anargiroi", "text": "A church in Paphos dedicated to the Holy Anargiroi.", "category": "religious", "coords": [32.417119, 34.76213]}, {"name": "Agios Georgios", "text": "A place of worship dedicated to Saint George in Paphos.", "category": "religious", "coords": [32.415354, 34.758663]}, {"name": "Agios Antonios", "text": "A historical church in Paphos dedicated to Saint Anthony.", "category": "religious", "coords": [32.417299, 34.757587]}, {"name": "Agia Faneromeni", "text": "A place of worship in Paphos dedicated to Saint Faneromeni.", "category": "religious", "coords": [32.416101, 34.760423]}, {"name": "Fabrica Hill", "text": "A hill in Paphos featuring ancient quarries, tombs, and religious sites.", "category": "landmark", "coords": [32.413189, 34.762244]}, {"name": "The House of Dionysos", "text": "A Roman villa in Paphos known for its magnificent mosaics depicting mythology.", "category": "landmark", "coords": [32.406059, 34.758199]}, {"name": "Lighthouse Beach", "text": "Below the striking lighthouse of Paphos stretches this extremely popular Cypriot coastal strip. The picturesque combination of the sea and proud maritime architecture creates a particularly relaxed flair. Guests enjoy leisurely walks on the beach, sunbathing, and a pleasant jump into the water. A late afternoon visit is often rewarded with a breathtakingly beautiful sunset.", "category": "recreational", "coords": [32.406249, 34.764387]}, {"name": "Psifida", "text": "A gallery in Paphos exhibiting various artworks and mosaics.", "category": "museum", "coords": [32.412646, 34.763942]}, {"name": "Tomb 9", "text": "Another ancient tomb within the archaeological park of Paphos.", "category": "historical", "coords": [32.40679, 34.776332]}, {"name": "Cut through old city wall", "text": "An archaeological site in Paphos showing a cut through the old city wall.", "category": "historical", "coords": [32.403002, 34.759413]}, {"name": "Catacombs", "text": "Ancient underground burial chambers and passages in Paphos.", "category": "historical", "coords": [32.422875, 34.774796]}, {"name": "Eastern Necropolis", "text": "An ancient necropolis located in the eastern part of Paphos.", "category": "historical", "coords": [32.418051, 34.755715]}, {"name": "WW II's Paphos volunteers", "text": "A monument dedicated to the Paphos volunteers of World War II.", "category": "historical", "coords": [32.427881, 34.772257]}, {"name": "Old windmill ruins", "text": "Remains of old windmills in Paphos, reflecting the area's historical economy.", "category": "historical", "coords": [32.42513, 34.772025]}, {"name": "Spyros Kiprianos Bust", "text": "A bust in Paphos commemorating Spyros Kiprianos.", "category": "historical", "coords": [32.418583, 34.762263]}, {"name": "Evagoras Pallikarides Statue", "text": "A monument in Paphos dedicated to the Cypriot freedom fighter Evagoras Pallikarides.", "category": "historical", "coords": [32.423779, 34.773922]}, {"name": "Resistance Bus", "text": "A historical monument in Paphos commemorating the Cypriot resistance.", "category": "historical", "coords": [32.441188, 34.788674]}, {"name": "The House of Orpheus", "text": "Remains of an ancient Roman house in Paphos, known for its mythological mosaics.", "category": "historical", "coords": [32.403696, 34.756753]}, {"name": "Toumpallos", "text": "Archaeological site featuring ancient ruins located near the Paphos harbor.", "category": "historical", "coords": [32.410181, 34.762451]}, {"name": "Medieval baths (1191-1489)", "text": "Historical ruins of medieval baths from the Lusignan period in Paphos.", "category": "historical", "coords": [32.414863, 34.759606]}, {"name": "Amphitheater", "text": "Remains of an ancient Greco-Roman amphitheater in the city of Paphos.", "category": "historical", "coords": [32.41394, 34.761212]}, {"name": "Basilica of Panagia Limeniotissa", "text": "Ruins of an early Christian basilica located near the Paphos harbor.", "category": "historical", "coords": [32.407848, 34.755764]}, {"name": "Castle Square", "text": "A public square by Paphos Castle, often used for cultural events and performances.", "category": "cultural", "coords": [32.407322, 34.753903]}, {"name": "Markideion Theater", "text": "A prominent theater in Paphos hosting various cultural performances.", "category": "cultural", "coords": [32.423138, 34.778183]}, {"name": "Municipal Gallery", "text": "The municipal art gallery of Paphos, showcasing works by local and Cypriot artists.", "category": "cultural", "coords": [32.420521, 34.774014]}, {"name": "Polychoros politismoy Palia Ilektriki", "text": "A cultural center housed in a former electricity works building in Paphos.", "category": "cultural", "coords": [32.42191, 34.776549]}, {"name": "Circle Creative Space", "text": "A creative space in Paphos for art exhibitions and workshops.", "category": "cultural", "coords": [32.429912, 34.784095]}, {"name": "Home of Arts & Literature", "text": "A center in Paphos dedicated to the promotion of arts and literature.", "category": "cultural", "coords": [32.423317, 34.780893]}, {"name": "WaveDancer", "text": "A popular excursion ship in Paphos offering various cruises and events.", "category": "landmark", "coords": [32.408779, 34.755036]}, {"name": "Agios Lambrianos Catacombs", "text": "Ancient underground burial chambers in Paphos known as catacombs.", "category": "landmark", "coords": [32.412094, 34.761827]}, {"name": "Pachyammos Beach", "text": "A beach resort in Paphos ideal for relaxing Mediterranean holidays.", "category": "family", "coords": [32.425813, 34.743689]}, {"name": "Geroskipou Municipal Swimming Pool", "text": "The Geroskipou Municipal Swimming Pool in Paphos offers good facilities for sports.", "category": "family", "coords": [32.441268, 34.744709]}, {"name": "Hamam", "text": "A public bath in Paphos providing a space for wellness and relaxation.", "category": "family", "coords": [32.41077, 34.759098]}, {"name": "Splash Pool", "text": "A swimming pool in Paphos featuring water attractions for children.", "category": "family", "coords": [32.434335, 34.745439]}, {"name": "Lagoon Pool", "text": "A spacious lagoon pool in Paphos offering a relaxing swimming experience.", "category": "family", "coords": [32.431409, 34.744228]}, {"name": "Alykes Beach", "text": "A popular beach in Paphos perfect for enjoying the sun and the sea.", "category": "family", "coords": [32.416996, 34.754775]}]},
    type: "city",
    parent: "CY-005",
    coords: [32.4245, 34.7768],
    name: { de: "Paphos", hu: "Páfosz", ro: "Paphos", en: "Paphos" },
    description: {
      de: "Berühmt für seine antiken Ruinen und als mythischer Geburtsort der Aphrodite.",
      hu: "Híres ókori romjairól és mint Aphrodité mitikus szülőhelye.",
      ro: "Faimos pentru ruinele sale antice și ca locul mitic de naștere al Afroditei.",
      en: "Famous for its ancient ruins and as the mythical birthplace of Aphrodite.",
      es: "Famosa por sus ruinas antiguas y como lugar mítico del nacimiento de Afrodita.",
      pt: "Famosa pelas suas ruínas antigas e como local mítico do nascimento de Afrodite.",
      fr: "Célèbre pour ses ruines antiques et comme lieu mythique de la naissance d'Aphrodite.",
    },
    descriptionAdvanced: {
      de: "Paphos, an der Südwestküste Zyperns gelegen, ist ein Ort von außergewöhnlicher archäologischer Bedeutung und steht als Ganzes auf der UNESCO-Liste des Weltkulturerbes. Die Stadt ist tief mit der griechischen Mythologie verwurzelt und gilt als Geburtsort der Göttin Aphrodite, deren Kult hier jahrhundertelang zentriert war. Ein absolutes Highlight sind die prächtigen römischen Mosaike in den Häusern des Dionysos, Theseus und Aion, die zu den feinsten im gesamten Mittelmeerraum zählen. Ebenso beeindruckend sind die Königsgräber, eine monumentale unterirdische Nekropole aus dem 4. Jahrhundert v. Chr., die trotz ihres Namens wohlhabenden Adligen als letzte Ruhestätte diente. Der malerische Hafen von Paphos wird von einer mittelalterlichen Festung bewacht, die ursprünglich von den Byzantinern erbaut und später von den Venezianern und Osmanen umgestaltet wurde. In der Nähe der Stadt liegt der berühmte 'Petra tou Romiou' (Aphrodite-Felsen), wo die Göttin der Legende nach aus dem Meeresschaum stieg. Paphos wurde 2017 zur Kulturhauptstadt Europas ernannt, was zu einer umfassenden Modernisierung der städtischen Infrastruktur und kulturellen Einrichtungen führte. Heute verbindet die Stadt perfekt ihre antiken Wurzeln mit modernem Tourismus und erstklassigen Golfplätzen.",
      hu: "Paphos Ciprus délnyugati partján fekszik, és az egész város az UNESCO Világörökség része a rendkívüli régészeti kincsei miatt. A görög mitológia szerint itt született Aphrodité, a szerelem és szépség istennője, akinek kultusza az ókorban az egész sziget életét meghatározta. A város legfőbb látványosságai közé tartoznak a római kori mozaikok, amelyek a 2-5. századból származnak, és mitológiai jeleneteket ábrázolnak lenyűgöző épségben. Szintén világhírűek a Királysírok, amely egy hatalmas, sziklába vájt nekropolisz az i. e. 4. századból, ahol valójában a sziget előkelőségeit temették el. Paphos kikötőjét egy középkori vár őrzi, amely a bizánci, majd az oszmán időkben is fontos védelmi szerepet töltött be. A várostól nem messze található Petra tou Romiou sziklája, ahol a legenda szerint Aphrodité kilépett a tenger habjaiból. Paphos 2017-ben Európa Kulturális Fővárosa volt, ami számos fejlesztést és új kulturális programot hozott a városba. A modern Paphos luxusszállodákkal, kiváló éttermekkel és világszínvonalú golfpályákkal várja a látogatókat, miközben minden lépésnél érezhető az évezredes történelem jelenléte.",
      ro: "Paphos este un oraș-muzeu situat pe coasta de sud-vest a Ciprului, întregul sit fiind inclus în lista Patrimoniului Mondial UNESCO datorită vestigiilor sale antice inestimabile. Orașul are o legătură profundă cu mitologia greacă, fiind celebrat ca locul de naștere al zeiței Afrodita, care se spune că a ieșit din spuma mării lângă stânca Petra tou Romiou. Cele mai spectaculoase atracții sunt mozaicurile romane din secolele II-V d.Hr., descoperite în vilele nobiliare din Parcul Arheologic Kato Paphos, considerate printre cele mai bine conservate din bazinul mediteranean. Mormintele Regilor reprezintă o altă structură impresionantă, fiind o necropolă vastă săpată în stâncă, cu coloane dorice și camere funerare complexe datând din perioada elenistică. Portul pitoresc este dominat de Castelul Paphos, o fortăreață medievală ce a servit de-a lungul timpului drept închisoare și depozit de sare sub diverse ocupații. În anul 2017, Paphos a deținut titlul de Capitală Europeană a Culturii, perioadă în care infrastructura orașului a fost modernizată și au fost create noi spații artistice. Astăzi, Paphos atrage vizitatori prin mixul său unic de situri arheologice, plaje premiate cu Steagul Albastru și resorturi de lux de talie mondială.",
      en: "Paphos, located on the southwestern coast of Cyprus, is a site of immense archaeological significance and is listed in its entirety as a UNESCO World Heritage site. Deeply intertwined with Greek mythology, it is famed as the birthplace of Aphrodite, the goddess of love and beauty, whose cult was centered here for centuries. The city's primary highlights include the exquisite Roman mosaics in the Archaeological Park, dating from the 2nd to the 5th centuries AD, which are among the finest and best-preserved in the Mediterranean. Another major landmark is the Tombs of the Kings, a sprawling underground necropolis from the 4th century BC, characterized by impressive Doric columns and rock-cut chambers. The charming harbor is overlooked by the Paphos Medieval Castle, which has seen various reconstructions by Byzantines, Lusignans, and Ottomans. Nearby, the famous 'Petra tou Romiou' rock marks the spot where legend says Aphrodite rose from the sea foam. Paphos was honored as the European Capital of Culture in 2017, leading to significant urban revitalization and new cultural initiatives. Today, it remains a premier destination blending ancient wonders with modern luxury resorts, vibrant nightlife, and world-class golf courses.",
      es: "Pafos, situada en la costa suroeste de Chipre, es un lugar de excepcional importancia arqueológica y forma parte de la lista del Patrimonio de la Humanidad de la UNESCO. La ciudad está profundamente ligada a la mitología griega, considerada el lugar de nacimiento de la diosa Afrodita, cuyo culto se centró aquí durante siglos. Un punto destacado son los magníficos mosaicos romanos en las casas de Dioniso, Teseo y Aion, entre los mejores del Mediterráneo. También impresionan las Tumbas de los Reyes, una necrópolis subterránea monumental del siglo IV a.C. que servía de última morada a nobles adinerados. El pintoresco puerto de Pafos está custodiado por un castillo medieval, construido originalmente por los bizantinos y transformado después por venecianos y otomanos. Cerca se encuentra el famoso 'Petra tou Romiou' (Roca de Afrodita), donde según la leyenda la diosa emergió de la espuma del mar. Pafos fue Capital Europea de la Cultura en 2017, lo que impulsó una modernización integral de sus infraestructuras.",
      pt: "Pafos, situada na costa sudoeste de Chipre, é um local de importância arqueológica excecional e está inscrita como um todo na Lista do Património Mundial da UNESCO. A cidade está profundamente enraizada na mitologia grega e é considerada o local de nascimento da deusa Afrodite, cujo culto aqui esteve centrado durante séculos. Um destaque absoluto são os magníficos mosaicos romanos nas casas de Dionísio, Teseu e Aion, que estão entre os melhores de toda a região mediterrânica. Igualmente impressionantes são os Túmulos dos Reis, uma necrópole subterrânea monumental do século IV a.C. que, apesar do nome, serviu de última morada para nobres ricos. O pitoresco porto de Pafos é guardado por uma fortaleza medieval, originalmente construída pelos bizantinos e mais tarde remodelada pelos venezianos e otomanos. Perto da cidade encontra-se o famoso 'Petra tou Romiou' (Rocha de Afrodite), onde, segundo a lenda, a deusa emergiu da espuma do mar. Pafos foi nomeada Capital Europeia da Cultura em 2017, o que levou a uma modernização abrangente das infraestruturas urbanas e das instalações culturais.",
      fr: "Paphos, située sur la côte sud-ouest de Chypre, est un site d'une importance archéologique exceptionnelle et figure dans son ensemble sur la liste du patrimoine mondial de l'UNESCO. La ville est profondément ancrée dans la mythologie grecque et est considérée comme le lieu de naissance de la déesse Aphrodite, dont le culte fut centré ici pendant des siècles. Un point fort absolu réside dans les magnifiques mosaïques romaines des maisons de Dionysos, Thésée et Aion, qui comptent parmi les plus belles de tout le bassin méditerranéen. Tout aussi impressionnants sont les tombeaux des Rois, une nécropole souterraine monumentale du IVe siècle av. J.-C. qui, malgré son nom, servit de dernière demeure à de riches notables. Le port pittoresque de Paphos est gardé par une forteresse médiévale, initialement construite par les Byzantins puis transformée par les Vénitiens et les Ottomans. Près de la ville se trouve le célèbre 'Petra tou Romiou' (Rocher d'Aphrodite), où, selon la légende, la déesse surgit de l'écume de la mer. Paphos a été nommée capitale européenne de la culture en 2017, ce qui a entraîné une modernisation complète des infrastructures urbaines et des institutions culturelles.",
    },
    factsAdvanced: {
      de: ["Paphos steht seit dem Jahr 1980 vollständig unter dem Schutz der UNESCO.", "Die römischen Mosaike wurden erst im Jahr 1962 durch Zufall beim Pflügen entdeckt.", "Die Königsgräber beherbergen etwa 100 Gräber für wohlhabende Adlige.", "Paphos war während der ptolemäischen Zeit die Hauptstadt von ganz Zypern.", "Das Paphos Odeon ist ein römisches Theater aus dem 2. Jahrhundert n. Chr.", "Das mittelalterliche Schloss wurde im Jahr 1592 von den Osmanen wiederaufgebaut."],
      hu: ["A város két részből áll: a tengerparti Kato Paphosból és a dombtetőn lévő Pano Paphosból.", "Aphrodité szentélyét az i. e. 12. században alapították a közeli Paleopaphosban.", "A római mozaikok összesen több mint 500 négyzetméternyi területet fednek le.", "Szent Pál apostol i. sz. 45-ben járt a városban hittérítő útja során.", "A paphosi vár eredetileg bizánci erőd volt, amit egy földrengés rombolt le 1222-ben.", "A város repülőtere Ciprus második legforgalmasabb légikikötője."],
      ro: ["UNESCO a inclus Paphos pe lista sa în 1980 pentru mozaicurile sale unice.", "Parcul Arheologic Kato Paphos se întinde pe o suprafață de peste 100 de hectare.", "Stânca Afroditei, Petra tou Romiou, se află la 25 km sud-est de oraș.", "Mormintele Regilor nu au adăpostit niciodată regi, ci doar aristocrați locali.", "În oraș se află Stâlpul Sfântului Pavel, unde se spune că acesta a fost biciuit.", "Paphos a fost capitala Ciprului timp de aproximativ 600 de ani în antichitate."],
      en: ["Paphos was the capital of Cyprus during the Hellenistic and Roman periods.", "The Roman mosaics were discovered by a farmer in 1962 while tilling his land.", "The Tombs of the Kings feature architecture influenced by ancient Egyptian styles.", "Paphos Castle was dismantled by the Venetians in 1570 before being rebuilt.", "The Paphos Aphrodite Festival is an annual opera event held at the harbor.", "The city became a UNESCO World Heritage site due to its 'global archaeological value'."],
      es: ["Pafos está totalmente bajo la protección de la UNESCO desde 1980.", "Los mosaicos romanos se descubrieron por azar en 1962 mientras se araba la tierra.", "Las Tumbas de los Reyes albergan unas 100 tumbas para nobles adinerados.", "Pafos fue la capital de todo Chipre durante el periodo ptolemaico.", "El Odeón de Pafos es un teatro romano del siglo II d.C.", "El castillo medieval fue reconstruido por los otomanos en el año 1592."],
      pt: ["Pafos está inteiramente sob a proteção da UNESCO desde 1980.", "Os mosaicos romanos foram descobertos por acaso em 1962, enquanto se lavrava a terra.", "Os Túmulos dos Reis albergam cerca de 100 túmulos para nobres abastados.", "Pafos foi a capital de todo o Chipre durante o período ptolemaico.", "O Odeon de Pafos é um teatro romano do século II d.C.", "O castelo medieval foi reconstruído pelos otomanos no ano de 1592."],
      fr: ["Paphos est entièrement placée sous la protection de l'UNESCO depuis 1980.", "Les mosaïques romaines ont été découvertes par hasard en 1962 lors de labours.", "Les tombeaux des Rois abritent environ 100 sépultures pour de riches notables.", "Paphos fut la capitale de toute l'île de Chypre durant l'époque ptolémaïque.", "L'Odéon de Paphos est un théâtre romain datant du IIe siècle apr. J.-C.", "Le château médiéval a été reconstruit par les Ottomans en 1592."],
    }, image: "/poi-images/cy-paphos.webp",
    facts: {
      de: ["UNESCO Weltkulturerbe", "Geburtsort der Aphrodite", "Römische Mosaike entdeckt", "Europäische Kulturhauptstadt 2017"],
      hu: ["UNESCO világörökségi helyszín", "Aphrodité születési helye", "Híres ókori mozaikok", "Európa Kulturális Fővárosa 2017"],
      ro: ["Patrimoniu Mondial UNESCO", "Locul de naștere al Afroditei", "Mozaicuri romane unice", "Capitală Culturală Europeană 2017"],
      en: ["UNESCO World Heritage Site", "Birthplace of Aphrodite", "Intricate Roman mosaics", "European Capital of Culture 2017"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-famagusta", "sights": {
      "de": [
            {
                  "name": "Ayios Ioannis Church",
                  "text": "Ein Museum, das dem Evangelisten Johannes in Famagusta gewidmet ist.",
                  "category": "museum",
                  "coords": [
                        33.951573,
                        35.118941
                  ]
            },
            {
                  "name": "Canbulat Müzesi",
                  "text": "Ein Museum in der Canbulat-Bastion der Stadtmauer von Famagusta.",
                  "category": "museum",
                  "coords": [
                        33.947035,
                        35.123227
                  ]
            },
            {
                  "name": "Namik Kemal Prison and Museum Dungeon",
                  "text": "Ein historisches Gefängnis und Museum, in dem Namik Kemal inhaftiert war.",
                  "category": "historical",
                  "coords": [
                        33.941512,
                        35.124582
                  ]
            },
            {
                  "name": "Palm beach",
                  "text": "Flankiert von der Kulisse der Geisterstadt Varosha, präsentiert sich dieser Sandstrand in Famagusta überaus faszinierend. Eine geheimnisvolle und gleichzeitig völlig friedliche Stimmung liegt hier stetig in der Luft. Man kann den warmen Sand genießen, im Meer schwimmen und dabei den Blick auf die verlassene Historie richten. Ein absolut sehenswerter Ort für Entdecker, besonders wenn die Sommersonne vom Himmel lacht.",
                  "category": "recreational",
                  "coords": [
                        33.95836,
                        35.118152
                  ]
            },
            {
                  "name": "Famagusta Archaeological Museum",
                  "text": "Ein Museum mit archäologischen Funden aus der Region Famagusta.",
                  "category": "museum",
                  "coords": [
                        33.948745,
                        35.10995
                  ]
            },
            {
                  "name": "disused: Sinemas",
                  "text": "Ein ehemaliges Kinogebäude in Famagusta.",
                  "category": "cultural",
                  "coords": [
                        33.941372,
                        35.122197
                  ]
            },
            {
                  "name": "Ravelin",
                  "text": "Ein Teil der historischen Festungsanlagen von Famagusta.",
                  "category": "castle",
                  "coords": [
                        33.939099,
                        35.121425
                  ]
            },
            {
                  "name": "St. Georg der Lateiner",
                  "text": "Ruinen einer gotischen Kirche aus dem 13. Jahrhundert in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.942906,
                        35.126723
                  ]
            },
            {
                  "name": "Aygun Kabin magosa",
                  "text": "Ein lokales Denkmal im Stadtgebiet von Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.930195,
                        35.108785
                  ]
            },
            {
                  "name": "Locomotive",
                  "text": "Eine historische Lokomotive, die als Denkmal in Famagusta ausgestellt ist.",
                  "category": "historical",
                  "coords": [
                        33.942604,
                        35.118481
                  ]
            },
            {
                  "name": "Canak kale yasam sitesi 2",
                  "text": "Ein modernes Denkmal in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.919719,
                        35.118899
                  ]
            },
            {
                  "name": "Tıp med ecza deposu",
                  "text": "Ein Denkmal in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.937678,
                        35.119754
                  ]
            },
            {
                  "name": "Uzun 14",
                  "text": "Ein lokales Monument in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.91506,
                        35.137873
                  ]
            },
            {
                  "name": "Suphi Ezel Türbesi",
                  "text": "Grabmal und Denkmal für Suphi Ezel in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.933087,
                        35.116736
                  ]
            },
            {
                  "name": "Lala Mustafa Paşa Camii - St. Nicolas Katedrali",
                  "text": "Eine ehemalige gotische Kathedrale, die heute als Moschee in Famagusta dient.",
                  "category": "religious",
                  "coords": [
                        33.942677,
                        35.124895
                  ]
            },
            {
                  "name": "St. Georg-Kirche",
                  "text": "Die Ruine einer ehemals bedeutenden orthodoxen Kirche in Famagusta.",
                  "category": "religious",
                  "coords": [
                        33.943601,
                        35.123942
                  ]
            },
            {
                  "name": "Armenische Kirche",
                  "text": "Eine historische armenische Kirche in Famagusta.",
                  "category": "religious",
                  "coords": [
                        33.936386,
                        35.127316
                  ]
            },
            {
                  "name": "Yenişehir Gülselen Sulak Alanı",
                  "text": "Ein lokaler See in Famagusta mit einer ruhigen Atmosphäre.",
                  "category": "natural",
                  "coords": [
                        33.918716,
                        35.141419
                  ]
            },
            {
                  "name": "Fun Lab",
                  "text": "Ein bunter Spielplatz in Famagusta für abwechslungsreichen Kinderspaß.",
                  "category": "family",
                  "coords": [
                        33.92054,
                        35.125566
                  ]
            },
            {
                  "name": "Sea House Residences Havuz",
                  "text": "Ein Schwimmbad in Famagusta für eine angenehme Abkühlung und sportliche Betätigung.",
                  "category": "family",
                  "coords": [
                        33.931088,
                        35.13939
                  ]
            },
            {
                  "name": "Othello's Tower",
                  "text": "Eine historische Zitadelle in Famagusta, benannt nach der Figur aus Shakespeares Othello.",
                  "category": "castle",
                  "coords": [
                        33.943257,
                        35.127671
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Ayios Ioannis Church",
                  "text": "Szent János evangélistának szentelt múzeum Famagustában.",
                  "category": "museum",
                  "coords": [
                        33.951573,
                        35.118941
                  ]
            },
            {
                  "name": "Canbulat Müzesi",
                  "text": "Múzeum a famagustai városfal Canbulat-bástyájában.",
                  "category": "museum",
                  "coords": [
                        33.947035,
                        35.123227
                  ]
            },
            {
                  "name": "Namik Kemal Prison and Museum Dungeon",
                  "text": "Történelmi börtön és múzeum, ahol Namik Kemal raboskodott Famagustában.",
                  "category": "historical",
                  "coords": [
                        33.941512,
                        35.124582
                  ]
            },
            {
                  "name": "Palm beach",
                  "text": "A varósai szellemváros kulisszájával övezve ez a famagustai homokos part rendkívül lenyűgöző. Titokzatos, ugyanakkor teljesen békés hangulat uralkodik itt folyamatosan a levegőben. Évezhetjük a meleg homokot, úszhatunk a tengerben, miközben tekintetünket az elhagyatott történelemre vetjük. Felfedezők számára abszolút látványos hely, különösen, amikor a nyári nap nevet az égből.",
                  "category": "recreational",
                  "coords": [
                        33.95836,
                        35.118152
                  ]
            },
            {
                  "name": "Famagusta Archaeological Museum",
                  "text": "Múzeum, amely a Famagusta környéki régészeti leleteket mutatja be.",
                  "category": "museum",
                  "coords": [
                        33.948745,
                        35.10995
                  ]
            },
            {
                  "name": "disused: Sinemas",
                  "text": "Egykori moziépület Famagustában.",
                  "category": "cultural",
                  "coords": [
                        33.941372,
                        35.122197
                  ]
            },
            {
                  "name": "Ravelin",
                  "text": "Famagusta történelmi erődítményrendszerének része.",
                  "category": "castle",
                  "coords": [
                        33.939099,
                        35.121425
                  ]
            },
            {
                  "name": "Latinlerin Aziz George Kilisesi",
                  "text": "Egy 13. századi gótikus templom romjai Famagustában.",
                  "category": "historical",
                  "coords": [
                        33.942906,
                        35.126723
                  ]
            },
            {
                  "name": "Aygun Kabin magosa",
                  "text": "Helyi emlékmű Famagusta városában.",
                  "category": "historical",
                  "coords": [
                        33.930195,
                        35.108785
                  ]
            },
            {
                  "name": "Locomotive",
                  "text": "Emlékműként kiállított történelmi mozdony Famagustában.",
                  "category": "historical",
                  "coords": [
                        33.942604,
                        35.118481
                  ]
            },
            {
                  "name": "Canak kale yasam sitesi 2",
                  "text": "Modern emlékmű Famagustában.",
                  "category": "historical",
                  "coords": [
                        33.919719,
                        35.118899
                  ]
            },
            {
                  "name": "Tıp med ecza deposu",
                  "text": "Emlékmű Famagustában.",
                  "category": "historical",
                  "coords": [
                        33.937678,
                        35.119754
                  ]
            },
            {
                  "name": "Uzun 14",
                  "text": "Helyi emlékmű Famagustában.",
                  "category": "historical",
                  "coords": [
                        33.91506,
                        35.137873
                  ]
            },
            {
                  "name": "Suphi Ezel Türbesi",
                  "text": "Suphi Ezel síremléke és emlékműve Famagustában.",
                  "category": "historical",
                  "coords": [
                        33.933087,
                        35.116736
                  ]
            },
            {
                  "name": "Lala Mustafa Paşa Camii - St. Nicolas Katedrali",
                  "text": "Egykori gótikus székesegyház, amely ma mecsetként működik Famagustában.",
                  "category": "religious",
                  "coords": [
                        33.942677,
                        35.124895
                  ]
            },
            {
                  "name": "Rum Ortodoks Aziz George Kilisesi",
                  "text": "Egy korábban jelentős ortodox templom romjai Famagustában.",
                  "category": "religious",
                  "coords": [
                        33.943601,
                        35.123942
                  ]
            },
            {
                  "name": "Gançvor Manastırı",
                  "text": "Történelmi örmény templom Famagustában.",
                  "category": "religious",
                  "coords": [
                        33.936386,
                        35.127316
                  ]
            },
            {
                  "name": "Yenişehir Gülselen Sulak Alanı",
                  "text": "Helyi tó Famagustában, nyugodt légkörrel.",
                  "category": "natural",
                  "coords": [
                        33.918716,
                        35.141419
                  ]
            },
            {
                  "name": "Fun Lab",
                  "text": "Színes játszótér Famagustában a változatos gyerekprogramokhoz.",
                  "category": "family",
                  "coords": [
                        33.92054,
                        35.125566
                  ]
            },
            {
                  "name": "Sea House Residences Havuz",
                  "text": "Úszómedence Famagustában a kellemes felfrissüléshez és sportoláshoz.",
                  "category": "family",
                  "coords": [
                        33.931088,
                        35.13939
                  ]
            },
            {
                  "name": "Othello's Tower",
                  "text": "Történelmi citadella Famagustában, Shakespeare Othello-figurája után elnevezve.",
                  "category": "castle",
                  "coords": [
                        33.943257,
                        35.127671
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Ayios Ioannis Church",
                  "text": "Un muzeu dedicat Sfântului Ioan Teologul în Famagusta.",
                  "category": "museum",
                  "coords": [
                        33.951573,
                        35.118941
                  ]
            },
            {
                  "name": "Canbulat Müzesi",
                  "text": "Un muzeu situat în bastionul Canbulat al zidurilor cetății Famagusta.",
                  "category": "museum",
                  "coords": [
                        33.947035,
                        35.123227
                  ]
            },
            {
                  "name": "Namik Kemal Prison and Museum Dungeon",
                  "text": "O închisoare istorică și muzeu unde a fost deținut Namik Kemal în Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.941512,
                        35.124582
                  ]
            },
            {
                  "name": "Palm beach",
                  "text": "Flancată de decorul orașului fantomă Varosha, această plajă cu nisip din Famagusta se prezintă extrem de fascinantă. O atmosferă misterioasă, dar în același timp complet pașnică, plutește constant aici în aer. Vă puteți bucura de nisipul cald, puteți înota în mare, îndreptându-vă privirea spre istoria abandonată. Un loc care merită absolut văzut de către exploratori, mai ales când soarele de vară râde pe cer.",
                  "category": "recreational",
                  "coords": [
                        33.95836,
                        35.118152
                  ]
            },
            {
                  "name": "Famagusta Archaeological Museum",
                  "text": "Un muzeu care expune descoperiri arheologice din regiunea Famagusta.",
                  "category": "museum",
                  "coords": [
                        33.948745,
                        35.10995
                  ]
            },
            {
                  "name": "disused: Sinemas",
                  "text": "O fostă clădire de cinema în Famagusta.",
                  "category": "cultural",
                  "coords": [
                        33.941372,
                        35.122197
                  ]
            },
            {
                  "name": "Ravelin",
                  "text": "O parte a fortificațiilor istorice din Famagusta.",
                  "category": "castle",
                  "coords": [
                        33.939099,
                        35.121425
                  ]
            },
            {
                  "name": "Latinlerin Aziz George Kilisesi",
                  "text": "Ruinele unei biserici gotice din secolul al XIII-lea în Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.942906,
                        35.126723
                  ]
            },
            {
                  "name": "Aygun Kabin magosa",
                  "text": "Un monument local în zona urbană a Famagustei.",
                  "category": "historical",
                  "coords": [
                        33.930195,
                        35.108785
                  ]
            },
            {
                  "name": "Locomotive",
                  "text": "O locomotivă istorică expusă ca monument în Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.942604,
                        35.118481
                  ]
            },
            {
                  "name": "Canak kale yasam sitesi 2",
                  "text": "Un monument modern în Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.919719,
                        35.118899
                  ]
            },
            {
                  "name": "Tıp med ecza deposu",
                  "text": "Un monument în Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.937678,
                        35.119754
                  ]
            },
            {
                  "name": "Uzun 14",
                  "text": "Un monument local în Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.91506,
                        35.137873
                  ]
            },
            {
                  "name": "Suphi Ezel Türbesi",
                  "text": "Mormântul și monumentul lui Suphi Ezel în Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.933087,
                        35.116736
                  ]
            },
            {
                  "name": "Lala Mustafa Paşa Camii - St. Nicolas Katedrali",
                  "text": "O fostă catedrală gotică, transformată în moschee în Famagusta.",
                  "category": "religious",
                  "coords": [
                        33.942677,
                        35.124895
                  ]
            },
            {
                  "name": "Rum Ortodoks Aziz George Kilisesi",
                  "text": "Ruinele unei biserici ortodoxe odinioară importante în Famagusta.",
                  "category": "religious",
                  "coords": [
                        33.943601,
                        35.123942
                  ]
            },
            {
                  "name": "Gançvor Manastırı",
                  "text": "O biserică armeană istorică în Famagusta.",
                  "category": "religious",
                  "coords": [
                        33.936386,
                        35.127316
                  ]
            },
            {
                  "name": "Yenişehir Gülselen Sulak Alanı",
                  "text": "Un lac local în Famagusta, cu o atmosferă liniștită.",
                  "category": "natural",
                  "coords": [
                        33.918716,
                        35.141419
                  ]
            },
            {
                  "name": "Fun Lab",
                  "text": "Un loc de joacă colorat în Famagusta pentru distracția variată a copiilor.",
                  "category": "family",
                  "coords": [
                        33.92054,
                        35.125566
                  ]
            },
            {
                  "name": "Sea House Residences Havuz",
                  "text": "O piscină în Famagusta pentru o răcorire plăcută și activitate sportivă.",
                  "category": "family",
                  "coords": [
                        33.931088,
                        35.13939
                  ]
            },
            {
                  "name": "Othello's Tower",
                  "text": "O cetate istorică în Famagusta, numită după personajul Othello al lui Shakespeare.",
                  "category": "castle",
                  "coords": [
                        33.943257,
                        35.127671
                  ]
            }
      ],
      "en": [
            {
                  "name": "St. John the Theologian",
                  "text": "A museum dedicated to St. John the Theologian in Famagusta.",
                  "category": "museum",
                  "coords": [
                        33.951573,
                        35.118941
                  ]
            },
            {
                  "name": "Canbulat Müzesi",
                  "text": "A museum located in the Canbulat Bastion of the Famagusta city walls.",
                  "category": "museum",
                  "coords": [
                        33.947035,
                        35.123227
                  ]
            },
            {
                  "name": "Namik Kemal Prison and Museum Dungeon",
                  "text": "A historic prison and museum where Namik Kemal was imprisoned in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.941512,
                        35.124582
                  ]
            },
            {
                  "name": "Palm beach",
                  "text": "Flanked by the backdrop of the ghost town of Varosha, this sandy beach in Famagusta presents itself as extremely fascinating. A mysterious yet completely peaceful mood constantly fills the air here. You can enjoy the warm sand, swim in the sea, while gazing upon the abandoned history. An absolutely unmissable spot for explorers, especially when the summer sun smiles from the sky.",
                  "category": "recreational",
                  "coords": [
                        33.95836,
                        35.118152
                  ]
            },
            {
                  "name": "Famagusta Archaeological Museum",
                  "text": "A museum displaying archaeological finds from the Famagusta region.",
                  "category": "museum",
                  "coords": [
                        33.948745,
                        35.10995
                  ]
            },
            {
                  "name": "disused: Sinemas",
                  "text": "A former cinema building in Famagusta.",
                  "category": "cultural",
                  "coords": [
                        33.941372,
                        35.122197
                  ]
            },
            {
                  "name": "Ravelin",
                  "text": "A part of the historic fortifications of Famagusta.",
                  "category": "castle",
                  "coords": [
                        33.939099,
                        35.121425
                  ]
            },
            {
                  "name": "Church of St. George of the Latins",
                  "text": "Ruins of a 13th-century Gothic church in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.942906,
                        35.126723
                  ]
            },
            {
                  "name": "Aygun Kabin magosa",
                  "text": "A local monument in the urban area of Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.930195,
                        35.108785
                  ]
            },
            {
                  "name": "Locomotive",
                  "text": "A historic locomotive displayed as a monument in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.942604,
                        35.118481
                  ]
            },
            {
                  "name": "Canak kale yasam sitesi 2",
                  "text": "A modern monument in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.919719,
                        35.118899
                  ]
            },
            {
                  "name": "Tıp med ecza deposu",
                  "text": "A monument in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.937678,
                        35.119754
                  ]
            },
            {
                  "name": "Uzun 14",
                  "text": "A local monument in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.91506,
                        35.137873
                  ]
            },
            {
                  "name": "Suphi Ezel Türbesi",
                  "text": "Tomb and monument of Suphi Ezel in Famagusta.",
                  "category": "historical",
                  "coords": [
                        33.933087,
                        35.116736
                  ]
            },
            {
                  "name": "Lala Mustafa Pasha Mosque - St. Nicholas's Cathedral",
                  "text": "A former Gothic cathedral that now serves as a mosque in Famagusta.",
                  "category": "religious",
                  "coords": [
                        33.942677,
                        35.124895
                  ]
            },
            {
                  "name": "Church of St. George of the Greeks",
                  "text": "The ruins of a once-important Orthodox church in Famagusta.",
                  "category": "religious",
                  "coords": [
                        33.943601,
                        35.123942
                  ]
            },
            {
                  "name": "Ganchvor Sourp Asdvadzadzin",
                  "text": "A historic Armenian church in Famagusta.",
                  "category": "religious",
                  "coords": [
                        33.936386,
                        35.127316
                  ]
            },
            {
                  "name": "Yenişehir Gülselen Sulak Alanı",
                  "text": "A local lake in Famagusta with a peaceful atmosphere.",
                  "category": "natural",
                  "coords": [
                        33.918716,
                        35.141419
                  ]
            },
            {
                  "name": "Fun Lab",
                  "text": "A colorful playground in Famagusta for varied children's fun.",
                  "category": "family",
                  "coords": [
                        33.92054,
                        35.125566
                  ]
            },
            {
                  "name": "Sea House Residences Havuz",
                  "text": "A swimming pool in Famagusta for pleasant cooling and sporting activity.",
                  "category": "family",
                  "coords": [
                        33.931088,
                        35.13939
                  ]
            },
            {
                  "name": "Othello's Tower",
                  "text": "A historic citadel in Famagusta named after the character in Shakespeare's Othello.",
                  "category": "castle",
                  "coords": [
                        33.943257,
                        35.127671
                  ]
            }
      ]
},
    type: "city",
    parent: "CY-002",
    coords: [33.9422, 35.1250],
    name: { de: "Famagusta", hu: "Famagusta", ro: "Famagusta", en: "Famagusta" },
    description: {
      de: "Historische Hafenstadt an der Ostküste mit beeindruckenden mittelalterlichen Ruinen.",
      hu: "Történelmi kikötőváros a keleti parton, lenyűgöző középkori romokkal.",
      ro: "Oraș-port istoric pe coasta de est, cu ruine medievale impresionante.",
      en: "A historical port city on the east coast with impressive medieval ruins.",
      es: "Ciudad portuaria histórica en la costa este con impresionantes ruinas medievales.",
      pt: "Cidade portuária histórica na costa leste com impressionantes ruínas medievais.",
      fr: "Ville portuaire historique sur la côte est avec d'impressionnantes ruines médiévales.",
    },
    descriptionAdvanced: {
      de: "Famagusta, an der Ostküste Zyperns gelegen, ist eine Stadt mit einer der bewegtesten und tragischsten Geschichten des Mittelmeerraums. Im Mittelalter war sie unter der Herrschaft der Lusignans der reichste Hafen der Welt und ein Zentrum des christlichen Orients. Die gewaltigen venezianischen Mauern, die die Altstadt umschließen, zeugen von der strategischen Bedeutung und hielten 1571 einer monatelangen osmanischen Belagerung stand. Ein architektonisches Meisterwerk ist die Lala-Mustafa-Pascha-Moschee, die ursprünglich als gotische St.-Nikolaus-Kathedrale erbaut wurde und in der die Könige von Jerusalem und Zypern gekrönt wurden. Ein dunkles Kapitel der jüngeren Geschichte ist der Stadtteil Varosha, der seit der türkischen Intervention 1974 als 'Geisterstadt' unbewohnt blieb und erst in den letzten Jahren teilweise für Besucher geöffnet wurde. Der Othello-Turm, Teil der Stadtbefestigung, soll den Schauplatz für Shakespeares berühmtes Drama inspiriert haben. Heute ist Famagusta ein Ort voller Kontraste, wo antike Ruinen wie die nahegelegene Stadt Salamis auf modernes studentisches Leben der örtlichen Universität treffen. Die tiefblauen Buchten und goldenen Strände der Region zählen nach wie vor zu den schönsten der Insel.",
      hu: "Famagusta Ciprus keleti partján fekszik, és egykor a Földközi-tenger egyik leggazdagabb és legfontosabb városa volt, különösen a keresztes lovagok idején. A Lusignan-dinasztia alatt a város a Kelet és Nyugat közötti kereskedelem központjaként virágzott, amit a ma is álló hatalmas velencei falak és bástyák tanúsítanak. A leglátványosabb épület a Lala Musztafa pasa mecset, amely eredetileg Szent Miklós-székesegyházként épült a 14. században gótikus stílusban, és itt koronázták meg Jeruzsálem királyait. Famagusta történetének tragikus része Varosha negyed, amely az 1974-es török megszállás óta elzárt 'szellemvárosként' állt, és csak nemrég nyitották meg részben a látogatók előtt. A város erődrendszerének része az Othello-torony, amely a hagyomány szerint Shakespeare drámájának ihletője volt. A közelben található Salamis romvárosa, amely az ókori Ciprus egyik legjelentősebb települése volt színházzal és fürdőkkel. Ma Famagusta pezsgő egyetemi város, ahol a történelmi falak között modern kávézók és üzletek sorakoznak. A város kikötője ma is fontos gazdasági szerepet tölt be, miközben a turizmus ismét virágzásnak indult a környék aranyló strandjain.",
      ro: "Famagusta, situat pe coasta de est a Ciprului, este un oraș cu o istorie fascinantă și turbulentă, fiind odinioară cel mai bogat port din bazinul mediteranean sub dinastia Lusignan. Orașul este înconjurat de ziduri venețiene masive, construite în secolul al XV-lea, care au rămas până astăzi într-o stare de conservare remarcabilă. Unul dintre cele mai impresionante monumente este Moscheea Lala Mustafa Pașa, construită inițial ca Catedrala gotică Sfântul Nicolae, unde regii Ciprului primeau și titlul de regi ai Ierusalimului. Turnul lui Othello, parte a fortificațiilor orașului, este legendar pentru faptul că ar fi oferit cadrul de inspirație pentru celebra tragedie a lui William Shakespeare. Din păcate, istoria recentă a orașului este marcată de divizarea insulei din 1974, Varosha, cartierul său turistic de lux, devenind un 'oraș fantomă' pustiu timp de decenii. În apropierea orașului se află ruinele antice ale Salamisului, prima capitală a Ciprului, cu teatre și băi romane spectaculoase. Astăzi, Famagusta este un important centru educațional și portuar, oferind un mix contrastant între gloria sa medievală și realitățile geopolitice moderne. Plajele cu nisip auriu din jurul orașului continuă să fie considerate printre cele mai frumoase de pe întreaga insulă.",
      en: "Famagusta, located on the eastern coast of Cyprus, is a city of immense historical depth, once serving as the wealthiest port in the medieval world under the Lusignan dynasty. Its massive Venetian walls, completed in the 15th century, are some of the best-preserved military fortifications in existence, having famously withstood a massive Ottoman siege in 1571. The architectural centerpiece of the old city is the Lala Mustafa Pasha Mosque, originally the Gothic Cathedral of Saint Nicholas, where the Kings of Cyprus were crowned as Kings of Jerusalem. A more somber aspect of the city's identity is Varosha, the luxury resort quarter that became a 'ghost town' following the 1974 Turkish military intervention and remained abandoned for decades. The city is also home to Othello's Castle, a fortress tower that provided the legendary setting for Shakespeare’s famous play. Just north of the city lie the extensive ruins of ancient Salamis, a former capital of Cyprus featuring grand Roman amphitheaters and baths. Today, Famagusta is a vibrant university town, blending its medieval ruins with a growing modern population and a busy deep-water port. The region remains famous for its vast stretches of golden sand beaches and crystal-clear waters.",
      es: "Famagusta, situada en la costa este de Chipre, es una ciudad con una de las historias más movidas y trágicas del Mediterráneo. En la Edad Media, bajo el dominio de los Lusignan, fue el puerto más rico del mundo y un centro del Oriente cristiano. Las enormes murallas venecianas que rodean el casco antiguo atestiguan su importancia estratégica y resistieron un asedio otomano de meses en 1571. Una obra maestra arquitectónica es la mezquita Lala Mustafa Pasha, construida originalmente como la catedral gótica de San Nicolás, donde fueron coronados los reyes de Jerusalén y Chipre. Un capítulo oscuro de la historia reciente es el barrio de Varosha, que ha permanecido deshabitado como una 'ciudad fantasma' desde la intervención turca de 1974. La Torre de Otelo, parte de las fortificaciones, se dice que inspiró el escenario del famoso drama de Shakespeare. Hoy, Famagusta es un lugar lleno de contrastes, donde ruinas antiguas como la cercana ciudad de Salamina conviven con la vida estudiantil moderna. Sus bahías azules y playas doradas siguen estando entre las más bellas de la isla.",
      pt: "Famagusta, situada na costa leste de Chipre, é uma cidade com uma das histórias mais movimentadas e trágicas do Mediterrâneo. Na Idade Média, sob o domínio dos Lusignans, foi o porto mais rico do mundo e um centro do Oriente cristão. As enormes muralhas venezianas que rodeiam a cidade velha testemunham a sua importância estratégica e resistiram a um cerco otomano de meses em 1571. Uma obra-prima arquitetónica é a Mesquita Lala Mustafa Pasha, originalmente construída como a catedral gótica de São Nicolau, onde eram coroados os reis de Jerusalém e Chipre. Um capítulo sombrio da história recente é o bairro de Varosha, que permaneceu desabitado como uma 'cidade fantasma' desde a intervenção turca de 1974. A Torre de Otelo, parte das fortificações da cidade, terá inspirado o cenário do famoso drama de Shakespeare. Hoje, Famagusta é um local cheio de contrastes, onde ruínas antigas como a vizinha cidade de Salamis se cruzam com a vida estudantil moderna da universidade local. As baías de azul profundo e as praias douradas da região continuam a estar entre as mais belas da ilha.",
      fr: "Famagouste, située sur la côte est de Chypre, est une ville possédant l'une des histoires les plus mouvementées et les plus tragiques de la Méditerranée. Au Moyen Âge, sous le règne des Lusignan, elle était le port le plus riche du monde et un centre de l'Orient chrétien. Les imposantes murailles vénitiennes qui entourent la vieille ville témoignent de son importance stratégique et ont résisté à un siège ottoman de plusieurs mois en 1571. Un chef-d'œuvre architectural est la mosquée Lala Mustafa Pacha, construite à l'origine comme la cathédrale gothique Saint-Nicolas, où étaient couronnés les rois de Jérusalem et de Chypre. Un chapitre sombre de l'histoire récente est le quartier de Varosha, resté inhabité comme une 'ville fantôme' depuis l'intervention turque de 1974. La tour d'Othello, qui fait partie des fortifications, aurait inspiré le décor du célèbre drame de Shakespeare. Aujourd'hui, Famagouste est un lieu de contrastes, où les ruines antiques comme la ville voisine de Salamine côtoient la vie étudiante moderne. Les baies d'un bleu profond et les plages dorées de la région comptent toujours parmi les plus belles de l'île.",
    },
    factsAdvanced: {
      de: ["Famagusta hat den tiefsten Naturhafen auf der gesamten Insel Zypern.", "Die St.-Nikolaus-Kathedrale wurde zwischen 1298 und 1312 im gotischen Stil erbaut.", "Die venezianischen Mauern der Stadt sind an manchen Stellen bis zu 15 Meter dick.", "Varosha war vor 1974 das bedeutendste Touristenzentrum des Mittelmeerraums.", "Die Belagerung von Famagusta durch die Osmanen dauerte fast ein ganzes Jahr (1570-1571).", "Salamis, die antike Stadtruine im Norden, war einst die Hauptstadt Zyperns."],
      hu: ["Famagustát a 14. században a '365 templom városának' is nevezték.", "A város falait a híres építész, Michele Sanmicheli tervezte a 16. században.", "Othello tornyán a velencei Szent Márk oroszlánja ma is látható faragványként.", "A Lala Musztafa pasa mecset minaretjét az 1571-es oszmán ostrom után építették hozzá.", "Salamis ókori színháza 15 000 néző befogadására volt alkalmas.", "A város mai hivatalos török neve Gazimağusa, ahol a 'Gazi' jelentése veterán."],
      ro: ["Famagusta a fost capitala de facto a regatului cruciat al Ciprului în secolul XIV.", "Zidurile orașului au o circumferință totală de aproximativ 3,5 kilometri.", "Catedrala Sfântul Nicolae a fost transformată în moschee în anul 1571.", "Varosha a fost redeschisă parțial pentru vizitatori în octombrie 2020.", "În oraș se află Biserica Sfântul Gheorghe al Latinilor, construită în stil gotic pur.", "Portul din Famagusta este principalul nod comercial al părții de nord a insulei."],
      en: ["Famagusta was the last city in Cyprus to fall to the Ottomans in 1571.", "The Othello Tower was built by the Lusignans and later renovated by the Venetians.", "Ancient Salamis was founded, according to legend, by Teucer after the Trojan War.", "Varosha once hosted celebrities like Elizabeth Taylor and Brigitte Bardot.", "The city's walls contain 15 bastions, with the Martinengo Bastion being the strongest.", "The Lala Mustafa Pasha Mosque is considered the finest Gothic building in Cyprus."],
      es: ["Famagusta tiene el puerto natural más profundo de toda la isla de Chipre.", "La catedral de San Nicolás fue construida en estilo gótico entre 1298 y 1312.", "Las murallas venecianas de la ciudad tienen hasta 15 metros de espesor en algunos puntos.", "Varosha era el centro turístico más importante del Mediterráneo antes de 1974.", "El asedio de Famagusta por los otomanos duró casi un año entero (1570-1571).", "Salamina, la antigua ciudad en ruinas al norte, fue una vez la capital de Chipre."],
      pt: ["Famagusta tem o porto natural mais profundo de toda a ilha de Chipre.", "A Catedral de São Nicolau foi construída em estilo gótico entre 1298 e 1312.", "As muralhas venezianas da cidade têm até 15 metros de espessura em alguns pontos.", "Varosha era o centro turístico mais importante do Mediterrâneo antes de 1974.", "O cerco de Famagusta pelos otomanos durou quase um ano inteiro (1570-1571).", "Salamis, a antiga ruína da cidade ao norte, foi outrora a capital de Chipre."],
      fr: ["Famagouste possède le port naturel le plus profond de toute l'île de Chypre.", "La cathédrale Saint-Nicolas a été construite dans le style gothique entre 1298 et 1312.", "Les murailles vénitiennes de la ville atteignent par endroits 15 mètres d'épaisseur.", "Varosha était le plus important centre touristique de la Méditerranée avant 1974.", "Le siège de Famagouste par les Ottomans a duré près d'un an (1570-1571).", "Salamine, la cité antique en ruines au nord, fut autrefois la capitale de Chypre."],
    }, image: "/poi-images/cy-famagusta.webp",
    facts: {
      de: ["Die Stadtmauer ist etwa 3 Kilometer lang und fast vollständig erhalten.", "Die Lala-Mustafa-Pascha-Moschee war ursprünglich eine gotische Kathedrale.", "Der Othello-Turm inspirierte angeblich Shakespeare zu seinem berühmten Drama.", "Im Mittelalter galt Famagusta als eine der reichsten Städte der Welt."],
      hu: ["A városfal hossza kb. 3 kilométer, és szinte teljesen ép maradt.", "A Lala Musztafa pasa mecset eredetileg gótikus székesegyház volt.", "Az Othello-torony a legenda szerint Shakespeare-t is megihlette.", "A középkorban Famagusta a világ egyik leggazdagabb városának számított."],
      ro: ["Zidurile orașului au o lungime de 3 km și sunt aproape intacte.", "Moscheea Lala Mustafa Pașa a fost inițial o catedrală gotică.", "Turnul lui Othello ar fi fost sursa de inspirație pentru piesa lui Shakespeare.", "În Evul Mediu, Famagusta era considerată una dintre cele mai bogate cetăți."],
      en: ["The city walls are about 3 kilometers long and remarkably well-preserved.", "The Lala Mustafa Pasha Mosque was originally a Gothic cathedral.", "Othello Tower is said to have inspired Shakespeare's famous play.", "During the Middle Ages, Famagusta was one of the wealthiest cities in the world."],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-kyrenia", "sights": {"de": [{"name": "Karaoğlanoğlu Plajı", "text": "Strand in der Nähe von Kyrenia.", "category": "recreational", "coords": [33.275398, 35.344925]}, {"name": "Riviera Beach", "text": "Ganz in der Nähe von Kyrenia öffnet sich das Ufer zu diesem reizvollen und einladenden Küstenabschnitt Zyperns. Fern vom lauten Alltag taucht man hier in ein wunderbar ungestörtes und heiteres Inselerlebnis ein. Besucher schwärmen von langen Spaziergängen am Wasser, erfrischenden Bädern und ausgiebigem Sonnenbaden auf dem Strand. Planen Sie Ihren Aufenthalt am besten für einen klaren Vormittag.", "category": "recreational", "coords": [33.279888, 35.34528]}, {"name": "Schiffswrackmuseum", "text": "Das Schiffswrack-Museum in Kyrenia beherbergt die gut erhaltenen Überreste eines antiken griechischen Handelsschiffes.", "category": "museum", "coords": [33.322677, 35.341716]}, {"name": "Cyprus Housr", "text": "Das Cyprus Housr ist ein Museum, das kulturelle Einblicke in der Stadt Kyrenia bietet.", "category": "museum", "coords": [33.319834, 35.341519]}, {"name": "Greko-Romen Kaya Mezarları", "text": "Die griechisch-römischen Felsengräber sind eine bemerkenswerte archäologische Stätte in Kyrenia.", "category": "historical", "coords": [33.318335, 35.341915]}, {"name": "Girne Belediyesi Anfitiyatro", "text": "Das Girne Belediyesi Anfitiyatro ist ein Freilufttheater in der Stadt Kyrenia.", "category": "cultural", "coords": [33.326198, 35.339879]}, {"name": "Round Tower", "text": "Der Round Tower ist eine historische Befestigungsanlage in der Stadt Kyrenia.", "category": "fortress", "coords": [33.319357, 35.340404]}, {"name": "Bella Marin Beach", "text": "Als favorisiertes Ziel für Erholungssuchende glänzt dieser Strandbereich bei Kyrenia mit seinem echten maritimen Charme. Die gastfreundliche Umgebung zieht Urlauber an, die das süße Nichtstun unter freiem Himmel zelebrieren möchten. Genießen Sie wärmende Sonnenstrahlen auf der Haut, entspannte Spaziergänge und tauchen Sie in die zypriotischen Gewässer ein. An warmen Ferientagen ist dies ein hervorragender, leichter Zufluchtsort.", "category": "recreational", "coords": [33.334569, 35.338185]}, {"name": "Girne Ergene Sokak Doğal ve Arkeolojik Sit Alanı", "text": "Girne Ergene Sokak Doğal ve Arkeolojik Sit Alanı ist eine natürliche und archäologische Stätte in Kyrenia.", "category": "historical", "coords": [33.31353, 35.340274]}, {"name": "Atatürk Anıtı", "text": "Das Atatürk Anıtı ist ein lokales Denkmal in der Stadt Kyrenia.", "category": "historical", "coords": [33.313115, 35.341666]}, {"name": "Nusret Ertürk", "text": "Nusret Ertürk ist ein lokales Denkmal in der Stadt Kyrenia.", "category": "historical", "coords": [33.305695, 35.333034]}, {"name": "Istanbul Art Gallery", "text": "Die Istanbul Art Gallery ist ein Ausstellungsraum für verschiedene Kunstwerke in Kyrenia.", "category": "museum", "coords": [33.32519, 35.339538]}, {"name": "Dr. Fazıl Küçük Anıtı", "text": "Das Dr. Fazıl Küçük Monument ist eine Gedenkstätte in der Stadt Kyrenia.", "category": "historical", "coords": [33.317572, 35.325398]}, {"name": "Bella Marin", "text": "Bella Marin ist ein Strandresort mit Freizeiteinrichtungen in Kyrenia.", "category": "recreational", "coords": [33.331216, 35.341196]}, {"name": "Atatürk", "text": "Atatürk ist ein historisches Denkmal in der Stadt Kyrenia.", "category": "historical", "coords": [33.325788, 35.337097]}, {"name": "Phaneromeni Church", "text": "Die Ruinen der Phaneromeni-Kirche stellen eine historische Stätte in Kyrenia dar.", "category": "historical", "coords": [33.300787, 35.317306]}, {"name": "8 Mart Parkı", "text": "Ein schöner Spielplatz in Kyrenia, der Kindern viel Raum zum Spielen und Entdecken bietet.", "category": "family", "coords": [33.340293, 35.326079]}, {"name": "Bella Marin Main Pool", "text": "Der Bella Marin Main Pool in Kyrenia ist ein Schwimmbecken, das ideal für Familienspaß ist.", "category": "family", "coords": [33.333566, 35.338725]}], "hu": [{"name": "Karaoğlanoğlu Plajı", "text": "Strand Kyrenia közelében.", "category": "recreational", "coords": [33.275398, 35.344925]}, {"name": "Riviera Beach", "text": "Kireneia közvetlen közelében nyílik meg a part Ciprus ezen bájos és hívogató partvidékén. A zajos mindennapoktól távol itt egy csodálatosan zavartalan és derűs szigeti élménybe merülhetünk. A látogatók rajonganak a hosszú vízparti sétákért, a frissítő fürdőkért és a hosszas napozásért a strandon. Tervezze tartózkodását a legjobban egy tiszta délelőttre.", "category": "recreational", "coords": [33.279888, 35.34528]}, {"name": "Shipwreck museum", "text": "A keríniai Hajóroncs Múzeum egy ókori görög kereskedőhajó jól megőrzött maradványainak ad otthont.", "category": "museum", "coords": [33.322677, 35.341716]}, {"name": "Cyprus Housr", "text": "A Cyprus Housr egy kulturális ismereteket nyújtó múzeum Kerínia városában.", "category": "museum", "coords": [33.319834, 35.341519]}, {"name": "Greko-Romen Kaya Mezarları", "text": "A görög-római sziklasírok egy jelentős régészeti lelőhelyet képviselnek Kerínia városában.", "category": "historical", "coords": [33.318335, 35.341915]}, {"name": "Girne Belediyesi Anfitiyatro", "text": "A Girne Belediyesi Anfitiyatro egy színház, amely különböző eseményeknek ad otthont Kerínia városában.", "category": "cultural", "coords": [33.326198, 35.339879]}, {"name": "Round Tower", "text": "A Kerek Torony egy történelmi erődítmény Kerínia városában.", "category": "fortress", "coords": [33.319357, 35.340404]}, {"name": "Bella Marin Beach", "text": "A pihenni vágyók kedvelt célpontjaként ez a Kireneia melletti strandrész igazi tengeri bájával ragyog. A vendégszerető környezet vonzza a nyaralókat, akik az édes semmittevést a szabad ég alatt szeretnék ünnepelni. Élvezze a melengető napsugarakat a bőrén, a pihentető sétákat, és merüljön el a ciprusi vizekben. Meleg nyaralási napokon ez egy kiváló, könnyed menedék.", "category": "recreational", "coords": [33.334569, 35.338185]}, {"name": "Girne Ergene Sokak Doğal ve Arkeolojik Sit Alanı", "text": "A Girne Ergene Sokak Doğal ve Arkeolojik Sit Alanı egy védett természeti és régészeti lelőhely Kerínia városában.", "category": "historical", "coords": [33.31353, 35.340274]}, {"name": "Atatürk Anıtı", "text": "Az Atatürk Anıtı egy helyi emlékmű Kerínia városában.", "category": "historical", "coords": [33.313115, 35.341666]}, {"name": "Nusret Ertürk", "text": "A Nusret Ertürk egy helyi emlékmű Kerínia városában.", "category": "historical", "coords": [33.305695, 35.333034]}, {"name": "Istanbul Art Gallery", "text": "Az Istanbul Art Gallery egy különféle művészeti alkotásokat bemutató galéria Kerínia városában.", "category": "museum", "coords": [33.32519, 35.339538]}, {"name": "Dr. Fazıl Küçük Anıtı", "text": "A Dr. Fazıl Küçük Emlékmű egy dedikált szobor Kerínia városában.", "category": "historical", "coords": [33.317572, 35.325398]}, {"name": "Bella Marin", "text": "A Bella Marin egy pihenési lehetőségeket kínáló tengerparti üdülőhely Kerínia városában.", "category": "recreational", "coords": [33.331216, 35.341196]}, {"name": "Atatürk", "text": "Az Atatürk egy történelmi emlékmű Kerínia városában.", "category": "historical", "coords": [33.325788, 35.337097]}, {"name": "Phaneromeni Church", "text": "A Phaneromeni templom romjai egy történelmi jelentőségű látványosságot képviselnek Kerínia városában.", "category": "historical", "coords": [33.300787, 35.317306]}, {"name": "8 Mart Parkı", "text": "Kedvelt játszótér Kyrenia városában, amely vidám kikapcsolódást nyújt a gyermekeknek.", "category": "family", "coords": [33.340293, 35.326079]}, {"name": "Bella Marin Main Pool", "text": "A Bella Marin Main Pool Keriniában egy úszómedence, amely tökéletes a családi szórakozáshoz.", "category": "family", "coords": [33.333566, 35.338725]}], "ro": [{"name": "Karaoğlanoğlu Plajı", "text": "Plajă lângă Kyrenia.", "category": "recreational", "coords": [33.275398, 35.344925]}, {"name": "Riviera Beach", "text": "Foarte aproape de Kyrenia, țărmul se deschide către această secțiune fermecătoare și primitoare a coastei Ciprului. Departe de viața zgomotoasă de zi cu zi, vă scufundați aici într-o experiență insulară minunat de netulburată și senină. Vizitatorii adoră plimbările lungi pe malul apei, băile răcoritoare și băile prelungite de soare pe plajă. Cel mai bine este să vă planificați șederea pentru o dimineață senină.", "category": "recreational", "coords": [33.279888, 35.34528]}, {"name": "Shipwreck museum", "text": "Muzeul epavei din Kyrenia găzduiește rămășițele bine conservate ale unei nave comerciale antice grecești.", "category": "museum", "coords": [33.322677, 35.341716]}, {"name": "Cyprus Housr", "text": "Cyprus Housr este un muzeu care oferă perspective culturale în orașul Kyrenia.", "category": "museum", "coords": [33.319834, 35.341519]}, {"name": "Greko-Romen Kaya Mezarları", "text": "Mormintele săpate în stâncă greco-romane reprezintă un sit arheologic notabil din orașul Kyrenia.", "category": "historical", "coords": [33.318335, 35.341915]}, {"name": "Girne Belediyesi Anfitiyatro", "text": "Girne Belediyesi Anfitiyatro este un teatru care găzduiește diverse evenimente în orașul Kyrenia.", "category": "cultural", "coords": [33.326198, 35.339879]}, {"name": "Round Tower", "text": "Turnul Rotund este o structură istorică de fortificație situată în orașul Kyrenia.", "category": "fortress", "coords": [33.319357, 35.340404]}, {"name": "Bella Marin Beach", "text": "Fiind o destinație favorită pentru cei ce caută recreere, această zonă de plajă de lângă Kyrenia strălucește prin farmecul său maritim autentic. Mediul ospitalier atrage turiștii care doresc să sărbătorească dulcea lenevie în aer liber. Bucurați-vă de razele calde ale soarelui pe piele, de plimbări relaxante și scufundați-vă în apele cipriote. În zilele calde de vacanță, acesta este un refugiu excelent și ușor.", "category": "recreational", "coords": [33.334569, 35.338185]}, {"name": "Girne Ergene Sokak Doğal ve Arkeolojik Sit Alanı", "text": "Girne Ergene Sokak Doğal ve Arkeolojik Sit Alanı este un sit natural și arheologic situat în orașul Kyrenia.", "category": "historical", "coords": [33.31353, 35.340274]}, {"name": "Atatürk Anıtı", "text": "Atatürk Anıtı este un monument local situat în orașul Kyrenia.", "category": "historical", "coords": [33.313115, 35.341666]}, {"name": "Nusret Ertürk", "text": "Nusret Ertürk este un monument comemorativ situat în orașul Kyrenia.", "category": "historical", "coords": [33.305695, 35.333034]}, {"name": "Istanbul Art Gallery", "text": "Istanbul Art Gallery este o galerie de artă din orașul Kyrenia.", "category": "museum", "coords": [33.32519, 35.339538]}, {"name": "Dr. Fazıl Küçük Anıtı", "text": "Monumentul Dr. Fazıl Küçük este un memorial situat în orașul Kyrenia.", "category": "historical", "coords": [33.317572, 35.325398]}, {"name": "Bella Marin", "text": "Bella Marin este o stațiune balneară care oferă facilități de agrement în Kyrenia.", "category": "recreational", "coords": [33.331216, 35.341196]}, {"name": "Atatürk", "text": "Atatürk este un monument istoric situat în orașul Kyrenia.", "category": "historical", "coords": [33.325788, 35.337097]}, {"name": "Phaneromeni Church", "text": "Ruinele Bisericii Phaneromeni reprezintă un sit istoric din orașul Kyrenia.", "category": "historical", "coords": [33.300787, 35.317306]}, {"name": "8 Mart Parkı", "text": "Un teren de joacă plăcut în Kyrenia, care oferă copiilor spațiu pentru joacă și explorare.", "category": "family", "coords": [33.340293, 35.326079]}, {"name": "Bella Marin Main Pool", "text": "Bella Marin Main Pool din Kyrenia este o piscină perfectă pentru distracție în familie.", "category": "family", "coords": [33.333566, 35.338725]}], "en": [{"name": "Karaoğlanoğlu Plajı", "text": "Beach near Kyrenia.", "category": "recreational", "coords": [33.275398, 35.344925]}, {"name": "Riviera Beach", "text": "Very close to Kyrenia, the shore opens up to this charming and inviting coastal section of Cyprus. Far from loud everyday life, you immerse yourself here in a wonderfully undisturbed and serene island experience. Visitors rave about long walks by the water, refreshing dips, and extensive sunbathing on the beach. It is best to plan your stay for a clear morning.", "category": "recreational", "coords": [33.279888, 35.34528]}, {"name": "Shipwreck museum", "text": "The Shipwreck museum in Kyrenia houses the well-preserved remains of an ancient Greek merchant ship.", "category": "museum", "coords": [33.322677, 35.341716]}, {"name": "Cyprus Housr", "text": "Cyprus Housr is a museum offering cultural insights in the city of Kyrenia.", "category": "museum", "coords": [33.319834, 35.341519]}, {"name": "Greko-Roman rock graves", "text": "The Greko-Roman rock graves are a notable archaeological site preserving ancient history in Kyrenia.", "category": "historical", "coords": [33.318335, 35.341915]}, {"name": "Girne Belediyesi Anfitiyatro", "text": "Girne Belediyesi Anfitiyatro is an open-air theatre hosting various events in Kyrenia.", "category": "cultural", "coords": [33.326198, 35.339879]}, {"name": "Round Tower", "text": "The Round Tower is a historic fortification structure located in the city of Kyrenia.", "category": "fortress", "coords": [33.319357, 35.340404]}, {"name": "Bella Marin Beach", "text": "As a favorite destination for recreation seekers, this beach area near Kyrenia shines with its authentic maritime charm. The hospitable environment attracts vacationers who want to celebrate the sweet idleness out in the open. Enjoy warming sunbeams on your skin, relaxed walks, and dive into the Cypriot waters. On warm holiday days, this is an excellent, easy refuge.", "category": "recreational", "coords": [33.334569, 35.338185]}, {"name": "Girne Ergene Sokak Doğal ve Arkeolojik Sit Alanı", "text": "Girne Ergene Sokak Doğal ve Arkeolojik Sit Alanı is a designated natural and archaeological site in Kyrenia.", "category": "historical", "coords": [33.31353, 35.340274]}, {"name": "Atatürk Anıtı", "text": "Atatürk Anıtı is a local monument situated in the city of Kyrenia.", "category": "historical", "coords": [33.313115, 35.341666]}, {"name": "Nusret Ertürk", "text": "Nusret Ertürk is a monument honoring a specific individual in the city of Kyrenia.", "category": "historical", "coords": [33.305695, 35.333034]}, {"name": "Istanbul Art Gallery", "text": "The Istanbul Art Gallery is a cultural space showcasing various artworks in Kyrenia.", "category": "museum", "coords": [33.32519, 35.339538]}, {"name": "Dr. Fazıl Küçük Monument", "text": "The Dr. Fazıl Küçük Monument is a dedicated memorial situated in Kyrenia.", "category": "historical", "coords": [33.317572, 35.325398]}, {"name": "Bella Marin", "text": "Bella Marin is a dedicated beach resort offering leisure facilities in Kyrenia.", "category": "recreational", "coords": [33.331216, 35.341196]}, {"name": "Atatürk", "text": "Atatürk is a historic monument located in the city of Kyrenia.", "category": "historical", "coords": [33.325788, 35.337097]}, {"name": "Phaneromeni Church", "text": "The ruins of Phaneromeni Church represent a historical and archaeological site in Kyrenia.", "category": "historical", "coords": [33.300787, 35.317306]}, {"name": "8 Mart Parkı", "text": "A nice playground in Kyrenia, offering children plenty of space for play and exploration.", "category": "family", "coords": [33.340293, 35.326079]}, {"name": "Bella Marin Main Pool", "text": "Bella Marin Main Pool in Kyrenia is a swimming pool perfect for family fun.", "category": "family", "coords": [33.333566, 35.338725]}]},
    type: "city",
    parent: "country-cyprus",
    coords: [33.3167, 35.3333],
    name: { de: "Kyrenia", hu: "Kerínia", ro: "Kyrenia", en: "Kyrenia" },
    description: {
      de: "Malerische Stadt an der Nordküste mit einem hufeisenförmigen Hafen und einer Festung.",
      hu: "Festői város az északi parton, patkó alakú kikötővel és várral.",
      ro: "Oraș pitoresc pe coasta de nord, cu un port în formă de potcoavă și o fortăreață.",
      en: "A picturesque city on the north coast with a horseshoe-shaped harbor and a castle.",
      es: "Pintoresca ciudad en la costa norte con un puerto en forma de herradura y una fortaleza.",
      pt: "Cidade pitoresca na costa norte com um porto em forma de ferradura e uma fortaleza.",
      fr: "Ville pittoresque sur la côte nord avec un port en forme de fer à cheval et une forteresse.",
    },
    descriptionAdvanced: {
      de: "Kyrenia, bekannt als Girne, ist eine historische Hafenstadt an der Nordküste Zyperns, am Fuße des Pentadaktylos-Gebirges. Die Stadt wurde laut Legende nach dem Trojanischen Krieg von achäischen Griechen gegründet und entwickelte sich zu einem wichtigen Handelsplatz im östlichen Mittelmeer. Das markanteste Bauwerk ist die massive Festung Kyrenia, die ursprünglich von den Byzantinern errichtet und später von den Lusignans und Venezianern massiv ausgebaut wurde. Im Inneren der Burg befindet sich das Schiffswrack-Museum, das die Überreste eines griechischen Handelsschiffs aus dem 4. Jahrhundert v. Chr. beherbergt, eines der ältesten geborgenen Schiffe der Welt. Der hufeisenförmige Hafen, einst ein Zentrum für den Export von Johannisbrot, ist heute ein lebendiges Touristenzentrum mit zahlreichen historischen Lagerhäusern. Die Stadt bewahrt ihren mediterranen Charakter durch enge Gassen und Gebäude aus der osmanischen Zeit, während sie gleichzeitig das wirtschaftliche Zentrum Nordzyperns darstellt.",
      hu: "Kyrenia, helyi nevén Girne, egy történelmi kikötőváros Ciprus északi partján, a Pentadaktilosz-hegység lábánál. A várost a legenda szerint az akháj görögök alapították a trójai háború után, és az évszázadok során a Földközi-tenger keleti medencéjének fontos kereskedelmi csomópontjává vált. Legjelentősebb látnivalója a hatalmas Kyrenia-i vár, amelyet eredetileg a bizánciak építettek, majd később a Lusignan-ház és a velenceiek bővítettek ki a tengeri támadások ellen. A vár falain belül található a Hajóroncs Múzeum, amely egy Kr. e. 4. századból származó görög kereskedelmi hajó maradványait őrzi, ami a világ egyik legrégebbi feltárt hajólelete. A patkó alakú kikötő, amely egykor a szentjánoskenyér-export központja volt, ma népszerű turisztikai célpont történelmi raktárépületeivel. A város megőrizte mediterrán jellegét szűk utcáival és oszmán kori épületeivel, miközben Észak-Ciprus egyik gazdasági központja.",
      ro: "Kyrenia, cunoscut sub numele de Girne, este un oraș portuar istoric de pe coasta de nord a Ciprului, situat la poalele munților Pentadaktylos. Orașul a fost fondat, conform legendei, de grecii ahei după Războiul Troian și s-a dezvoltat ca un important centru comercial în estul Mediteranei. Cel mai proeminent monument este Castelul Kyrenia, o fortăreață masivă construită inițial de bizantini și extinsă ulterior de lusignani și venețieni pentru a se apăra de invaziile maritime. În interiorul castelului se află Muzeul Epavei, care adăpostește resturile unei nave comerciale grecești din secolul al IV-lea î.Hr., una dintre cele mai vechi nave recuperate din lume. Portul în formă de potcoavă, odinioară un centru pentru exportul de roșcove, este astăzi o zonă turistică vibrantă cu depozite istorice transformate. Orașul păstrează un caracter mediteranean autentic prin străzile sale înguste și clădirile din epoca otomană.",
      en: "Kyrenia, known locally as Girne, is a historic port city on the northern coast of Cyprus, nestled between the Pentadaktylos Mountains and the Mediterranean Sea. Settled by Achaean Greeks following the Trojan War, it grew into a strategic maritime hub in the Eastern Mediterranean. Its most dominant landmark is Kyrenia Castle, a massive fortification originally constructed by the Byzantines and later reinforced by the Lusignans and Venetians to guard against naval threats. Within the castle walls, the Shipwreck Museum houses the remains of a Greek merchant vessel from the 4th century BC, recognized as one of the oldest recovered ships in existence. The horseshoe-shaped harbor, formerly a center for the carob trade, is now a lively waterfront lined with historic stone warehouses. Kyrenia maintains its Mediterranean character through narrow cobblestone streets and Ottoman-era structures while serving as a cultural heart of the region.",
      es: "Kyrenia, o Girne en turco, es famosa por su puerto histórico y la fortaleza adyacente. El puerto, con su encantador paseo bordeado de antiguos almacenes que hoy albergan cafeterías y restaurantes, es considerado uno de los más bellos del Mediterráneo. La maciza fortaleza de Kyrenia, en el extremo oriental del puerto, encierra una capilla bizantina del siglo XII y el Museo del Naufragio. Este museo muestra los restos de un barco mercante griego del siglo IV a.C., uno de los naufragios rescatados más antiguos del mundo, expuesto junto con su carga de ánforas y piedras de molino.",
      pt: "Cirénia, ou Girne em turco, é famosa pelo seu porto histórico e pela fortaleza adjacente. O porto, com o seu encantador passeio marginal ladeado por antigos armazéns que hoje albergam cafés e restaurantes, é considerado um dos mais belos do Mediterrâneo. A maciça fortaleza de Cirénia, na extremidade oriental do porto, encerra uma capela bizantina do século XII e o Museu do Naufrágio. Este museu exibe os restos de um navio mercante grego do século IV a.C., um dos naufrágios recuperados mais antigos do mundo, exposto com a sua carga de ânforas e mós.",
      fr: "Kyrenia, ou Girne en turc, est célèbre pour son port historique et sa forteresse adjacente. Le port, avec sa charmante promenade bordée d'anciens entrepôts transformés aujourd'hui en cafés et restaurants, est considéré comme l'un des plus beaux de Méditerranée. L'imposante forteresse de Kyrenia, à l'extrémité est du port, abrite une chapelle byzantine du XIIe siècle et le Musée de l'épave. Ce musée présente les vestiges d'un navire marchand grec du IVe siècle av. J.-C., l'une des plus anciennes épaves renflouées au monde, exposée avec sa cargaison d'amphores et de meules.",
    },
    factsAdvanced: {
      de: ["Gegründet im 10. Jahrhundert v. Chr.", "Schiffswrack aus dem Jahr 300 v. Chr.", "Festung im Jahr 1540 von Venezianern umgebaut", "Hufeisenförmiger historischer Hafen", "Bevölkerung von etwa 33.000 Einwohnern", "Standort der St. Andreas Kirche"],
      hu: ["Alapítva az i. e. 10. században", "Kr. e. 300-ból származó hajóroncs", "A várat 1540-ben a velenceiek átépítették", "Patkó alakú történelmi kikötő", "Lakossága körülbelül 33 000 fő", "A Szent András-templom helyszíne"],
      ro: ["Fondat în secolul al X-lea î.Hr.", "Epava unei nave din anul 300 î.Hr.", "Castel reconstruit de venețieni în 1540", "Port istoric în formă de potcoavă", "Populație de aproximativ 33.000 de locuitori", "Locația bisericii Sfântul Andrei"],
      en: ["Founded in the 10th century BC", "Contains a shipwreck from 300 BC", "Castle rebuilt by Venetians in 1540", "Iconic horseshoe-shaped historic harbor", "Population of approximately 33,000", "Site of the historic St. Andrew Church"],
      es: ["Los orígenes de Kyrenia se remontan a los colonos aqueos después de la Guerra de Troya.", "La fortaleza de Kyrenia fue construida originalmente por los romanos, pero ampliada significativamente por los bizantinos y los Lusignan.", "El naufragio del museo se hundió alrededor del 300 a.C. y fue descubierto en 1965 por un buceador.", "La cercana abadía de Bellapais, una impresionante ruina gótica, ofrece una vista espectacular de la costa.", "El castillo de San Hilarión, que se alza en las montañas de Kyrenia, se dice que fue el modelo para el castillo en 'Blancanieves' de Disney.", "Kyrenia es un importante centro cultural y económico en el norte de Chipre.", "La ciudad fue un importante puerto militar durante el dominio veneciano."],
      pt: ["As origens de Cirénia remontam aos colonos aqueus após a Guerra de Troia.", "A fortaleza de Cirénia foi originalmente construída pelos romanos, mas significativamente ampliada pelos bizantinos e lusignanos.", "O naufrágio no museu afundou por volta de 300 a.C. e foi descoberto em 1965 por um mergulhador.", "A vizinha Abadia de Bellapais, uma impressionante ruína gótica, oferece uma vista espetacular da costa.", "O Castelo de Santo Hilarião, que se ergue nas montanhas de Cirénia, terá sido a inspiração para o castelo em 'Branca de Neve' da Disney.", "Cirénia é um importante centro cultural e económico no Norte de Chipre.", "A cidade foi um importante porto militar durante o domínio veneziano."],
      fr: ["Les origines de Kyrenia remontent aux colons achéens après la guerre de Troie.", "La forteresse de Kyrenia fut initialement bâtie par les Romains, puis considérablement agrandie par les Byzantins et les Lusignan.", "L'épave du musée a coulé vers 300 av. J.-C. et fut découverte en 1965 par un plongeur.", "L'abbaye de Bellapais toute proche, impressionnante ruine gothique, offre une vue spectaculaire sur la côte.", "Le château de Saint-Hilarion, situé dans les monts de Kyrenia, aurait inspiré le château de 'Blanche-Neige' de Disney.", "Kyrenia est un centre culturel et économique majeur du nord de Chypre.", "La ville était un port militaire important sous la domination vénitienne."],
    }, image: "/poi-images/cy-kyrenia.webp"},
  {
    id: "cy-ayianapa", "sights": {"de": [{"name": "Glyky Nero", "text": "Der Strand Glyky Nero liegt bei Ayia Napa.", "category": "recreational", "coords": [34.00844, 34.984219]}, {"name": "Paradisos", "text": "Paradisos ist ein Strand bei Ayia Napa.", "category": "recreational", "coords": [34.004897, 34.98376]}, {"name": "Paralia Loykkos toy Manti", "text": "Strand bei Ayia Napa.", "category": "recreational", "coords": [33.998397, 34.982451]}, {"name": "Parko Glyptikis Dimoy Agias Napas", "text": "Ein internationales Symposium für Bildhauerei mit zahlreichen Skulpturen im Freien in Ayia Napa.", "category": "museum", "coords": [34.016998, 34.985682]}, {"name": "Vathia Gonia", "text": "Ein malerischer Sandstrand mit kristallklarem Wasser in Ayia Napa.", "category": "recreational", "coords": [33.979366, 34.98678]}, {"name": "Dimotiko Moyseio Thalassa", "text": "Ein städtisches Museum in Ayia Napa, das dem Meer und der maritimen Geschichte gewidmet ist.", "category": "museum", "coords": [34.002224, 34.987567]}, {"name": "Nissi", "text": "Einer der bekanntesten Sandstrände Zyperns mit einer kleinen vorgelagerten Insel in Ayia Napa.", "category": "recreational", "coords": [33.96899, 34.98749]}, {"name": "Katsarka", "text": "Ein ruhigerer Strandabschnitt in Ayia Napa, ideal zum Entspannen.", "category": "recreational", "coords": [33.990083, 34.985045]}, {"name": "Pernera", "text": "Ein familienfreundlicher Strand in Ayia Napa mit goldenem Sand und flachem Wasser.", "category": "recreational", "coords": [33.983378, 34.984934]}, {"name": "Country House Museum", "text": "Ein kleines Museum in Ayia Napa, das Einblicke in das traditionelle zypriotische Landleben bietet.", "category": "museum", "coords": [33.99971, 34.988771]}, {"name": "Parko Paliatso Luna Park", "text": "Ein beliebter Freizeitpark in Ayia Napa mit zahlreichen Fahrgeschäften für alle Altersgruppen.", "category": "family", "coords": [33.997636, 34.985585]}, {"name": "Ammos Kambouri", "text": "Ein kleiner, ruhiger Strand in einer Bucht östlich von Ayia Napa.", "category": "recreational", "coords": [34.023652, 34.978583]}, {"name": "Black Pearl", "text": "Ein weiteres Ausflugsschiff im Piratenstil für Familienabenteuer in Ayia Napa.", "category": "landmark", "coords": [34.002497, 34.98132]}, {"name": "FantasyBoatParty", "text": "Ein bekanntes Partyboot in Ayia Napa, das Unterhaltung auf dem Meer bietet.", "category": "landmark", "coords": [34.003543, 34.98112]}, {"name": "Gefyra Ellinikis - Polonikis Filias", "text": "Ein symbolischer Ort in Ayia Napa, der die Freundschaft zwischen Griechenland und Polen feiert.", "category": "landmark", "coords": [34.018679, 34.98112]}, {"name": "To Ydragogeio tis Agias Napas", "text": "Überreste eines historischen Aquädukts, das einst die Stadt Ayia Napa mit Wasser versorgte.", "category": "landmark", "coords": [34.00458, 34.989086]}, {"name": "Skeleton rider", "text": "Eine markante Skulptur eines Skelettreiters im Skulpturenpark von Ayia Napa.", "category": "landmark", "coords": [33.989261, 34.987934]}, {"name": "Love stone", "text": "Ein malerischer Aussichtspunkt an der Küste von Ayia Napa, bekannt für seine Felsformationen.", "category": "natural", "coords": [33.981716, 34.98259]}, {"name": "Nissi Isle", "text": "Ein Besuch der Nissi Isle in Ayia Napa belohnt mit einem herrlichen Blick auf die kleine Insel vor der Küste. Dieser natürliche Aussichtspunkt nahe des Strandes lädt zum Verweilen und Fotografieren ein.", "category": "natural", "coords": [33.967973, 34.985829]}, {"name": "Monachus Monachus Arch", "text": "Eine natürliche Felsbrücke in Ayia Napa, die ein beliebtes Fotomotiv für Besucher ist.", "category": "landmark", "coords": [34.016465, 34.98255]}, {"name": "Geheime Brücke", "text": "Ein versteckter Ort in Ayia Napa mit einer natürlichen Felsformation.", "category": "landmark", "coords": [33.977629, 34.985524]}, {"name": "Agia Napa Promenade", "text": "Eine belebte Küstenpromenade in Ayia Napa, ideal für Spaziergänge am Meer.", "category": "landmark", "coords": [33.999875, 34.981818]}, {"name": "Sculpture Park", "text": "Ein weitläufiges Freiluftareal in Ayia Napa mit einer Vielzahl moderner Skulpturen.", "category": "landmark", "coords": [34.019559, 34.984622]}, {"name": "Cleopatra Apts swimming pool", "text": "Ein Schwimmbad in Ayia Napa für Gäste der Cleopatra Apartments.", "category": "family", "coords": [33.993903, 34.988882]}, {"name": "Blue Lagoon Pool", "text": "Ein Schwimmbad in Ayia Napa, das zum Entspannen einlädt.", "category": "family", "coords": [33.956696, 34.98991]}, {"name": "Fisherman's Village Pool", "text": "Ein weiteres Schwimmbad in Ayia Napa für Freizeitspaß.", "category": "family", "coords": [33.95791, 34.990835]}], "hu": [{"name": "Glyky Nero", "text": "A Glyky Nero strand Ayia Napa közelében található.", "category": "recreational", "coords": [34.00844, 34.984219]}, {"name": "Paradisos", "text": "Paradisos egy strand Ayia Napa közelében.", "category": "recreational", "coords": [34.004897, 34.98376]}, {"name": "Paralia Loykkos toy Manti", "text": "Strand Ajía Nápanál.", "category": "recreational", "coords": [33.998397, 34.982451]}, {"name": "Parko Glyptikis Dimoy Agias Napas", "text": "Nemzetközi szobrászati szimpózium számos szabadtéri alkotással Ayia Napában.", "category": "museum", "coords": [34.016998, 34.985682]}, {"name": "Vathia Gonia", "text": "Gleccserkék vizű, festői homokos strand Ayia Napában.", "category": "recreational", "coords": [33.979366, 34.98678]}, {"name": "Dimotiko Moyseio Thalassa", "text": "Ayia Napa városi múzeuma, amely a tengernek és a tengerészeti történelemnek van szentelve.", "category": "museum", "coords": [34.002224, 34.987567]}, {"name": "Nissi", "text": "Ciprus egyik legismertebb homokos strandja egy közeli kis szigettel Ayia Napában.", "category": "recreational", "coords": [33.96899, 34.98749]}, {"name": "Katsarka", "text": "Nyugodtabb tengerparti szakasz Ayia Napában, ideális a kikapcsolódáshoz.", "category": "recreational", "coords": [33.990083, 34.985045]}, {"name": "Pernera", "text": "Családbarát strand Ayia Napában, aranyhomokkal és sekély vízzel.", "category": "recreational", "coords": [33.983378, 34.984934]}, {"name": "Country House Museum", "text": "Kismúzeum Ayia Napában, amely betekintést nyújt a hagyományos ciprusi vidéki életbe.", "category": "museum", "coords": [33.99971, 34.988771]}, {"name": "Parko Paliatso Luna Park", "text": "Népszerű vidámpark Ayia Napában, számos játékkal minden korosztály számára.", "category": "family", "coords": [33.997636, 34.985585]}, {"name": "Ammos Kambouri", "text": "Kicsi, nyugodt strand egy öbölben, Ayia Napától keletre.", "category": "recreational", "coords": [34.023652, 34.978583]}, {"name": "Black Pearl", "text": "Újabb kalózhajó stílusú kirándulóhajó családi kalandokhoz Ayia Napában.", "category": "landmark", "coords": [34.002497, 34.98132]}, {"name": "FantasyBoatParty", "text": "Ismert bulihajó Ayia Napában, amely szórakozást kínál a tengeren.", "category": "landmark", "coords": [34.003543, 34.98112]}, {"name": "Gefyra Ellinikis - Polonikis Filias", "text": "Szimbolikus hely Ayia Napában, amely a Görögország és Lengyelország közötti barátságot hirdeti.", "category": "landmark", "coords": [34.018679, 34.98112]}, {"name": "To Ydragogeio tis Agias Napas", "text": "Egy történelmi vízvezeték maradványai, amely egykor Ayia Napa városát látta el vízzel.", "category": "landmark", "coords": [34.00458, 34.989086]}, {"name": "Skeleton rider", "text": "Egy csontvázlovast ábrázoló jellegzetes szobor az Ayia Napa-i szoborparkban.", "category": "landmark", "coords": [33.989261, 34.987934]}, {"name": "Love stone", "text": "Festői kilátópont Ayia Napa partvidékén, amely sziklaformációiról ismert.", "category": "natural", "coords": [33.981716, 34.98259]}, {"name": "Nissi Isle", "text": "Az Ayia Napa-i Nissi Isle egy csodálatos kilátópont, ahonnan a part menti kis szigetre nyílik rálátás. Ez a tengerpart közeli természeti látványosság tökéletes helyszín a kikapcsolódásra és a fotózásra.", "category": "natural", "coords": [33.967973, 34.985829]}, {"name": "Monachus Monachus Arch", "text": "Természetes sziklahíd Ayia Napában, amely a látogatók kedvelt fotótémája.", "category": "landmark", "coords": [34.016465, 34.98255]}, {"name": "Geheime Brücke", "text": "Rejtett hely Ayia Napában egy természetes sziklaformációval.", "category": "landmark", "coords": [33.977629, 34.985524]}, {"name": "Agia Napa Promenade", "text": "Nyüzsgő tengerparti sétány Ayia Napában, ideális tengerparti sétákhoz.", "category": "landmark", "coords": [33.999875, 34.981818]}, {"name": "Sculpture Park", "text": "Kiterjedt szabadtéri terület Ayia Napában, számos modern szoborral.", "category": "landmark", "coords": [34.019559, 34.984622]}, {"name": "Cleopatra Apts swimming pool", "text": "Úszómedence Ayia Napán a Cleopatra Apartments vendégei és látogatói számára.", "category": "family", "coords": [33.993903, 34.988882]}, {"name": "Blue Lagoon Pool", "text": "Kellemes úszómedence Ayia Napán a pihenni vágyó látogatók számára.", "category": "family", "coords": [33.956696, 34.98991]}, {"name": "Fisherman's Village Pool", "text": "Újabb medence Ayia Napán a felhőtlen vízi szórakozásért.", "category": "family", "coords": [33.95791, 34.990835]}], "ro": [{"name": "Glyky Nero", "text": "Plaja Glyky Nero este situată lângă Ayia Napa.", "category": "recreational", "coords": [34.00844, 34.984219]}, {"name": "Paradisos", "text": "Paradisos este o plajă lângă Ayia Napa.", "category": "recreational", "coords": [34.004897, 34.98376]}, {"name": "Paralia Loykkos toy Manti", "text": "Plajă lângă Ayia Napa.", "category": "recreational", "coords": [33.998397, 34.982451]}, {"name": "Parko Glyptikis Dimoy Agias Napas", "text": "Un simpozion internațional de sculptură cu numeroase opere expuse în aer liber în Ayia Napa.", "category": "museum", "coords": [34.016998, 34.985682]}, {"name": "Vathia Gonia", "text": "O plajă pitorească cu nisip și ape cristaline în Ayia Napa.", "category": "recreational", "coords": [33.979366, 34.98678]}, {"name": "Dimotiko Moyseio Thalassa", "text": "Un muzeu municipal din Ayia Napa dedicat mării și istoriei maritime.", "category": "museum", "coords": [34.002224, 34.987567]}, {"name": "Nissi", "text": "Una dintre cele mai faimoase plaje cu nisip din Cipru, cu o mică insulă în apropiere, în Ayia Napa.", "category": "recreational", "coords": [33.96899, 34.98749]}, {"name": "Katsarka", "text": "O porțiune de plajă mai liniștită în Ayia Napa, ideală pentru relaxare.", "category": "recreational", "coords": [33.990083, 34.985045]}, {"name": "Pernera", "text": "O plajă pentru familii în Ayia Napa, cu nisip auriu și ape puțin adânci.", "category": "recreational", "coords": [33.983378, 34.984934]}, {"name": "Country House Museum", "text": "Un mic muzeu din Ayia Napa care oferă o perspectivă asupra vieții rurale tradiționale cipriote.", "category": "museum", "coords": [33.99971, 34.988771]}, {"name": "Parko Paliatso Luna Park", "text": "Un parc de distracții popular în Ayia Napa, cu numeroase atracții pentru toate vârstele.", "category": "family", "coords": [33.997636, 34.985585]}, {"name": "Ammos Kambouri", "text": "O plajă mică și liniștită într-un golf la est de Ayia Napa.", "category": "recreational", "coords": [34.023652, 34.978583]}, {"name": "Black Pearl", "text": "O altă navă de croazieră în stil pirat pentru aventuri în familie în Ayia Napa.", "category": "landmark", "coords": [34.002497, 34.98132]}, {"name": "FantasyBoatParty", "text": "O barcă de petrecere cunoscută în Ayia Napa, care oferă divertisment pe mare.", "category": "landmark", "coords": [34.003543, 34.98112]}, {"name": "Gefyra Ellinikis - Polonikis Filias", "text": "Un loc simbolic în Ayia Napa care celebrează prietenia dintre Grecia și Polonia.", "category": "landmark", "coords": [34.018679, 34.98112]}, {"name": "To Ydragogeio tis Agias Napas", "text": "Rămășițele unui apeduct istoric care odinioară alimenta cu apă orașul Ayia Napa.", "category": "landmark", "coords": [34.00458, 34.989086]}, {"name": "Skeleton rider", "text": "O sculptură distinctivă reprezentând un călăreț schelet în parcul de sculpturi din Ayia Napa.", "category": "landmark", "coords": [33.989261, 34.987934]}, {"name": "Love stone", "text": "Un punct de observație pitoresc pe coasta din Ayia Napa, cunoscut pentru formațiunile sale stâncoase.", "category": "natural", "coords": [33.981716, 34.98259]}, {"name": "Nissi Isle", "text": "Nissi Isle din Ayia Napa oferă un punct de belvedere excelent spre mica insulă de lângă țărm. Această atracție naturală din apropierea plajei este perfectă pentru a admira peisajul și a face fotografii.", "category": "natural", "coords": [33.967973, 34.985829]}, {"name": "Monachus Monachus Arch", "text": "Un pod natural de piatră în Ayia Napa, fiind un loc preferat pentru fotografii de către vizitatori.", "category": "landmark", "coords": [34.016465, 34.98255]}, {"name": "Geheime Brücke", "text": "Un loc ascuns în Ayia Napa, cu o formațiune stâncoasă naturală.", "category": "landmark", "coords": [33.977629, 34.985524]}, {"name": "Agia Napa Promenade", "text": "O promenadă de coastă animată în Ayia Napa, ideală pentru plimbări pe malul mării.", "category": "landmark", "coords": [33.999875, 34.981818]}, {"name": "Sculpture Park", "text": "O zonă extinsă în aer liber în Ayia Napa, cu o varietate de sculpturen moderne.", "category": "landmark", "coords": [34.019559, 34.984622]}, {"name": "Cleopatra Apts swimming pool", "text": "Piscina apartamentelor Cleopatra din Ayia Napa, un loc de relaxare pentru turiști.", "category": "family", "coords": [33.993903, 34.988882]}, {"name": "Blue Lagoon Pool", "text": "O piscină în Ayia Napa, oferind un mediu plăcut pentru înot și relaxare.", "category": "family", "coords": [33.956696, 34.98991]}, {"name": "Fisherman's Village Pool", "text": "O piscină suplimentară în Ayia Napa pentru distracție și recreere.", "category": "family", "coords": [33.95791, 34.990835]}], "en": [{"name": "Glyky Nero", "text": "Glyky Nero beach is located near Ayia Napa.", "category": "recreational", "coords": [34.00844, 34.984219]}, {"name": "Paradisos", "text": "Paradisos is a beach near Ayia Napa.", "category": "recreational", "coords": [34.004897, 34.98376]}, {"name": "Paralia Loykkos toy Manti", "text": "Beach near Ayia Napa.", "category": "recreational", "coords": [33.998397, 34.982451]}, {"name": "Ayia Napa International sculpture symposium", "text": "An international sculpture symposium featuring numerous outdoor artworks in Ayia Napa.", "category": "museum", "coords": [34.016998, 34.985682]}, {"name": "Vathia Gonia", "text": "A picturesque sandy beach with crystal clear waters in Ayia Napa.", "category": "recreational", "coords": [33.979366, 34.98678]}, {"name": "Thalassa Municipal Museum", "text": "A municipal museum in Ayia Napa dedicated to the sea and maritime history.", "category": "museum", "coords": [34.002224, 34.987567]}, {"name": "Nissi beach", "text": "One of Cyprus's most famous sandy beaches with a small nearby islet in Ayia Napa.", "category": "recreational", "coords": [33.96899, 34.98749]}, {"name": "Katsarka", "text": "A quieter stretch of beach in Ayia Napa, ideal for relaxation.", "category": "recreational", "coords": [33.990083, 34.985045]}, {"name": "Pernera", "text": "A family-friendly beach in Ayia Napa with golden sand and shallow waters.", "category": "recreational", "coords": [33.983378, 34.984934]}, {"name": "Country House Museum", "text": "A small museum in Ayia Napa offering insight into traditional Cypriot rural life.", "category": "museum", "coords": [33.99971, 34.988771]}, {"name": "Parko Paliatso Luna Park", "text": "A popular amusement park in Ayia Napa with numerous rides for all ages.", "category": "family", "coords": [33.997636, 34.985585]}, {"name": "Ammos Kambouri", "text": "A small, quiet beach in a cove east of Ayia Napa.", "category": "recreational", "coords": [34.023652, 34.978583]}, {"name": "Black Pearl", "text": "Another pirate-style excursion boat for family adventures in Ayia Napa.", "category": "landmark", "coords": [34.002497, 34.98132]}, {"name": "FantasyBoatParty", "text": "A well-known party boat in Ayia Napa offering entertainment at sea.", "category": "landmark", "coords": [34.003543, 34.98112]}, {"name": "Bridge of Greek & Polish Friendship", "text": "A symbolic site in Ayia Napa celebrating the friendship between Greece and Poland.", "category": "landmark", "coords": [34.018679, 34.98112]}, {"name": "The Agia Napa Aqueduct", "text": "Remains of a historical aqueduct that once supplied water to the town of Ayia Napa.", "category": "landmark", "coords": [34.00458, 34.989086]}, {"name": "Skeleton rider", "text": "A striking sculpture of a skeleton rider located in the Ayia Napa sculpture park.", "category": "landmark", "coords": [33.989261, 34.987934]}, {"name": "Love stone", "text": "A scenic coastal viewpoint in Ayia Napa known for its rock formations.", "category": "natural", "coords": [33.981716, 34.98259]}, {"name": "Nissi Isle", "text": "Visiting Nissi Isle in Ayia Napa provides a wonderful vantage point overlooking the small offshore island. This natural spot near the beach is a great place for relaxation and photography.", "category": "natural", "coords": [33.967973, 34.985829]}, {"name": "Love Bridge", "text": "A natural rock bridge in Ayia Napa, a popular spot for visitors to take photographs.", "category": "landmark", "coords": [34.016465, 34.98255]}, {"name": "Geheime Brücke", "text": "A hidden spot in Ayia Napa featuring a natural rock formation.", "category": "landmark", "coords": [33.977629, 34.985524]}, {"name": "Agia Napa Promenade", "text": "A lively coastal promenade in Ayia Napa, ideal for walks by the sea.", "category": "landmark", "coords": [33.999875, 34.981818]}, {"name": "Sculpture Park", "text": "A large open-air area in Ayia Napa featuring a variety of modern sculptures.", "category": "landmark", "coords": [34.019559, 34.984622]}, {"name": "Cleopatra Apts swimming pool", "text": "A swimming pool in Ayia Napa located at the Cleopatra Apartments for leisure.", "category": "family", "coords": [33.993903, 34.988882]}, {"name": "Blue Lagoon Pool", "text": "A swimming pool in Ayia Napa providing a nice spot for family relaxation.", "category": "family", "coords": [33.956696, 34.98991]}, {"name": "Fisherman's Village Pool", "text": "Another swimming pool in Ayia Napa designed for water-based recreation.", "category": "family", "coords": [33.95791, 34.990835]}]},
    type: "city",
    parent: "CY-002",
    coords: [34.0000, 34.9833],
    name: { de: "Ayia Napa", hu: "Ayia Napa", ro: "Ayia Napa", en: "Ayia Napa" },
    description: {
      de: "Bekannt für seine Sandstrände, das mittelalterliche Kloster und ein lebhaftes Nachtleben.",
      hu: "Homokos tengerpartjairól, középkori kolostoráról és pezsgő éjszakai életéről ismert.",
      ro: "Cunoscută pentru plajele sale de nisip, mănăstirea medievală și viața de noapte vibrantă.",
      en: "Known for its sandy beaches, medieval monastery, and vibrant nightlife.",
      es: "Conocida por sus playas de arena, el monasterio medieval y una animada vida nocturna.",
      pt: "Conhecida pelas suas praias de areia, o mosteiro medieval e uma vida noturna animada.",
      fr: "Connue pour ses plages de sable, son monastère médiéval et sa vie nocturne animée.",
    },
    descriptionAdvanced: {
      de: "Ayia Napa, an der Südostküste Zyperns gelegen, hat sich von einem verschlafenen Fischerdorf zu einem der bekanntesten Ferienorte des Mittelmeerraums entwickelt. Der Ort ist weltberühmt für seine traumhaften Strände mit kristallklarem, türkisblauem Wasser und feinem weißen Sand, allen voran der legendäre Nissi Beach. Das historische Herz des Ortes bildet das mittelalterliche Kloster von Ayia Napa aus dem Jahr 1500, das der Jungfrau Maria gewidmet ist und inmitten des modernen Treibens eine Oase der Ruhe bietet. In der Nähe des Klosters steht ein jahrhundertealter Maulbeerbaum, der als eines der Wahrzeichen des Ortes gilt. Östlich von Ayia Napa liegt das Kap Greco, ein Nationalpark mit spektakulären Meereshöhlen, Klippen und Wanderwegen, der Naturliebhaber und Taucher gleichermaßen anzieht. Ayia Napa ist zudem für sein pulsierendes Nachtleben bekannt, das sich rund um den zentralen Platz konzentriert und in den Sommermonaten Tausende von jungen Menschen anzieht. Kulturell hat der Ort in den letzten Jahren durch den Skulpturenpark Ayia Napa und das Thalassa-Museum, das ein lebensgroßes Replikat eines antiken Schiffswracks beherbergt, an Bedeutung gewonnen. Die Region verbindet somit auf einzigartige Weise Party-Tourismus mit beeindruckender Natur und kulturellem Erbe.",
      hu: "Ayia Napa Ciprus délkeleti csücskén fekszik, és mára a Földközi-tenger egyik legnépszerűbb üdülőhelyévé vált, bár a 70-es évekig csak egy csendes halászfalu volt. Világhírnevét elsősorban lenyűgöző tengerpartjainak köszönheti, amelyek közül a Nissi Beach fehér homokja és türkizkék vize a legkeresettebb a turisták körében. A város központjában található a 15. században, a velencei korszakban épült Ayia Napa-kolostor, amely egy barlang köré épült, ahol a legenda szerint egy csodatevő ikont találtak. A kolostor udvarán egy több mint 600 éves platánfa áll, amely a város egyik legöregebb élő emléke. A várostól keletre fekszik a Greco-fok Nemzeti Park, ahol tengeri barlangok, természetes hidak és kristálytiszta merülőhelyek várják a természetbarátokat. Ayia Napa híres az élénk éjszakai életéről is, számos klub és bár vonzza a fiatalokat a világ minden tájáról. Az utóbbi években a város kulturális kínálata is bővült, például a különleges szoborparkkal és a Thalassa Múzeummal, amely Ciprus tengeri örökségét mutatja be. Ayia Napa tökéletes választás azoknak, akik a napsütést, a szórakozást és a természeti szépségeket egy helyen keresik.",
      ro: "Ayia Napa este cea mai faimoasă destinație de vacanță din Cipru, situată în extremitatea estică a coastei de sud, transformându-se dintr-un sat pescăresc izolat într-un centru turistic internațional după 1974. Stațiunea este renumită pentru plajele sale cu nisip alb și ape turcoaz, Nissi Beach fiind considerată una dintre cele mai frumoase plaje din Europa. În centrul stațiunii se află Mănăstirea Ayia Napa, o structură medievală bine conservată din perioada venețiană (circa 1500), care oferă un contrast spiritual liniștit față de viața de noapte vibrantă din exterior. Un punct de atracție natural major este Capul Greco, un parc național aflat la câțiva kilometri distanță, celebru pentru peșterile sale marine spectaculoase și apusurile de soare panoramice. Ayia Napa este de asemenea un pol al distracției nocturne, cu sute de cluburi și baruri care animă zona centrală în timpul sezonului estival. Oferta culturală include Parcul de Sculpturi, o expoziție în aer liber cu lucrări ale artiștilor internaționali, și Muzeul Thalassa, dedicat istoriei maritime a insulei. Regiunea este ideală pentru sporturi nautice, scufundări și explorări de coastă, păstrând totodată farmecul tradițiilor locale în portul său pescăresc autentic.",
      en: "Ayia Napa, located on the southeastern coast of Cyprus, has evolved from a quiet fishing village into one of the Mediterranean's most famous tourist resorts. It is globally renowned for its stunning beaches, particularly Nissi Beach, which is celebrated for its powdery white sand and shallow turquoise waters. At the heart of the town stands the medieval Ayia Napa Monastery, built around 1500 during the Venetian period, serving as a peaceful historical landmark amidst the modern leisure facilities. The monastery was originally constructed in a cave where an icon of the Virgin Mary was discovered by hunters. To the east of the town lies Cape Greco National Forest Park, a protected area offering dramatic sea caves, natural stone bridges, and panoramic hiking trails that attract nature enthusiasts and divers. Ayia Napa is equally famous for its vibrant nightlife, centered around the main square and the 'strip,' which becomes a bustling hub for international travelers every summer. In recent years, the town has boosted its cultural appeal with the addition of a vast Sculpture Park and the Thalassa Municipal Museum, which houses a life-size replica of the 4th-century BC Kyrenia shipwreck. This destination perfectly blends high-energy entertainment with breathtaking natural landscapes and rich religious heritage.",
      es: "Ayia Napa, situada en la costa sureste de Chipre, ha pasado de ser un tranquilo pueblo de pescadores a uno de los centros turísticos más famosos del Mediterráneo. El lugar es mundialmente conocido por sus playas de ensueño con aguas cristalinas de color turquesa y arena blanca y fina, destacando sobre todo la legendaria Nissi Beach. El corazón histórico de la localidad es el monasterio medieval de Ayia Napa, del año 1500, dedicado a la Virgen María y que ofrece un oasis de paz en medio del ajetreo moderno. Cerca del monasterio se encuentra una morera centenaria, considerada uno de los símbolos del lugar. Al este de Ayia Napa se encuentra el Cabo Greco, un parque nacional con espectaculares cuevas marinas, acantilados y senderos que atrae tanto a amantes de la naturaleza como a buceadores. Ayia Napa es además conocida por su vibrante vida nocturna, concentrada alrededor de la plaza central y que atrae a miles de jóvenes en los meses de verano. Culturalmente, el lugar ha ganado importancia en los últimos años gracias al Parque de Esculturas de Ayia Napa y al Museo Thalassa, que alberga una réplica a tamaño natural de un antiguo naufragio. La región combina así de forma única el turismo de fiesta con una naturaleza impresionante y herencia cultural.",
      pt: "Ayia Napa, situada na costa sudeste de Chipre, transformou-se de uma aldeia de pescadores pacata numa das estâncias de férias mais famosas do Mediterrâneo. O local é mundialmente conhecido pelas suas praias paradisíacas com águas cristalinas de cor turquesa e areia branca fina, com destaque para a lendária Nissi Beach. O coração histórico da localidade é o mosteiro medieval de Ayia Napa, de 1500, dedicado à Virgem Maria e que oferece um oásis de paz no meio da agitação moderna. Perto do mosteiro encontra-se uma amoreira centenária, considerada um dos símbolos do local. A leste de Ayia Napa situa-se o Cabo Greco, um parque nacional com espetaculares grutas marinhas, falésias e trilhos, que atrai tanto amantes da natureza como mergulhadores. Ayia Napa é também conhecida pela sua vibrante vida noturna, concentrada em torno da praça central e que atrai milhares de jovens nos meses de verão. Culturalmente, o local ganhou importância nos últimos anos graças ao Parque de Esculturas de Ayia Napa e ao Museu Thalassa, que abriga uma réplica em tamanho real de um antigo naufrágio. A região combina assim, de forma única, o turismo de festa com uma natureza impressionante e herança cultural.",
      fr: "Ayia Napa, située sur la côte sud-est de Chypre, est passée d'un paisible village de pêcheurs à l'une des stations balnéaires les plus célèbres de la Méditerranée. La localité est mondialement connue pour ses plages de rêve aux eaux turquoise cristallines et au sable blanc et fin, au premier rang desquelles la légendaire Nissi Beach. Le cœur historique du lieu est formé par le monastère médiéval d'Ayia Napa, datant de 1500, dédié à la Vierge Marie et offrant une oasis de calme au milieu de l'agitation moderne. Près du monastère se dresse un mûrier centenaire, considéré comme l'un des emblèmes de la ville. À l'est d'Ayia Napa se trouve le Cap Greco, un parc national doté de grottes marines spectaculaires, de falaises et de sentiers de randonnée, qui attire autant les amoureux de la nature que les plongeurs. Ayia Napa est également réputée pour sa vie nocturne trépidante, concentrée autour de la place centrale, attirant des milliers de jeunes pendant les mois d'été. Culturellement, la ville a gagné en importance ces dernières années grâce au parc de sculptures d'Ayia Napa et au musée Thalassa, qui abrite une réplique grandeur nature d'une épave antique. La région allie ainsi de manière unique le tourisme festif à une nature impressionnante et un patrimoine culturel.",
    },
    factsAdvanced: {
      de: ["Der Name Ayia Napa bedeutet übersetzt 'Heiliger Wald' auf Griechisch.", "Das Kloster von Ayia Napa wurde bereits um das Jahr 1500 erbaut.", "Nissi Beach wurde mehrfach zu einem der besten Strände der Welt gewählt.", "Der Kap Greco Nationalpark umfasst eine Fläche von 385 Hektar.", "Der Maulbeerbaum am Kloster ist Schätzungen zufolge über 600 Jahre alt.", "Das Thalassa-Museum zeigt das Wrack eines antiken griechischen Schiffes."],
      hu: ["Ayia Napa strandjai közül 14 kapta meg a Kék Zászló minősítést.", "A város központjában lévő kolostort eredetileg nők lakták a 15. században.", "A Greco-fok sziklái 10 méter magasan emelkednek a tenger fölé.", "A szoborparkban több mint 150 kortárs művészeti alkotás látható.", "A település lakossága nyáron a tízszeresére duzzad a turisták miatt.", "Az Ayia Napa-i víz alatti szobormúzeum (MUSAN) 2021-ben nyílt meg."],
      ro: ["Ayia Napa deține 27 de plaje cu distincția 'Blue Flag' pentru puritatea apei.", "Mănăstirea din centru a fost transformată în muzeu în anul 1978.", "Capul Greco este cel mai estic punct al Uniunii Europene pe uscat.", "Muzeul Thalassa găzduiește replica celebrului vas 'Kyrenia II'.", "Podul Iubitorilor este o arcadă de piatră naturală situată lângă stațiune.", "Viața de noapte din Ayia Napa este adesea comparată cu cea din Ibiza."],
      en: ["The town's name comes from a 14th-century icon of the Virgin Mary.", "Ayia Napa was the first place in Cyprus to open an underwater museum in 2021.", "The population of the village was only 200 people in the year 1974.", "Cape Greco is a designated Special Area of Conservation under Natura 2000.", "The monastery's fountain was built in the style of the Italian Renaissance.", "The Sculpture Park covers 20,000 square meters of rocky coastal land."],
      es: ["El nombre Ayia Napa se traduce como 'Bosque Sagrado' en griego.", "El monasterio de Ayia Napa ya fue construido alrededor del año 1500.", "Nissi Beach ha sido elegida varias veces como una de las mejores playas del mundo.", "El Parque Nacional Cabo Greco abarca una superficie de 385 hectáreas.", "Se estima que la morera del monasterio tiene más de 600 años.", "El Museo Thalassa muestra los restos de un antiguo barco griego."],
      pt: ["O nome Ayia Napa traduz-se como 'Floresta Sagrada' em grego.", "O mosteiro de Ayia Napa foi construído por volta do ano 1500.", "Nissi Beach foi eleita várias vezes como uma das melhores praias do mundo.", "O Parque Nacional Cabo Greco abrange uma área de 385 hectares.", "Estima-se que a amoreira no mosteiro tenha mais de 600 anos.", "O Museu Thalassa exibe os destroços de um antigo navio grego."],
      fr: ["Le nom Ayia Napa se traduit par 'Forêt sacrée' en grec.", "Le monastère d'Ayia Napa a été construit dès l'an 1500.", "Nissi Beach a été élue à plusieurs reprises parmi les meilleures plages du monde.", "Le parc national du Cap Greco couvre une superficie de 385 hectares.", "Le mûrier du monastère est estimé à plus de 600 ans.", "Le musée Thalassa expose l'épave d'un ancien navire grec."],
    }, image: "/poi-images/cy-ayianapa.webp",
    facts: {
      de: ["Der Nissi Beach gilt als einer der schönsten Strände in ganz Europa.", "Das mittelalterliche Kloster im Stadtzentrum wurde um das Jahr 1500 erbaut.", "Ayia Napa war bis in die 1970er Jahre nur ein kleines Fischerdorf.", "Der Name bedeutet übersetzt 'Heiliger Wald'."],
      hu: ["A Nissi Beach-et Európa legszebb strandjai között tartják számon.", "A város központjában álló középkori kolostor 1500 körül épült.", "Ayia Napa az 1970-es évekig csupán egy apró halászfalu volt.", "A település neve magyarul annyit tesz: 'Szent erdő'."],
      ro: ["Plaja Nissi este considerată una dintre cele mai frumoase din Europa.", "Mănăstirea medievală din centrul orașului a fost construită în jurul anului 1500.", "Până în anii 1970, Ayia Napa era doar un mic sat de pescari.", "Numele orașului se traduce prin 'Pădurea Sfântă'."],
      en: ["Nissi Beach is consistently ranked among the most beautiful in Europe.", "The medieval monastery in the town center was built around 1500 AD.", "Ayia Napa remained a small fishing village until the 1970s.", "The name Ayia Napa translates literally to 'Holy Wooded Valley'."],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-kourion", "sights": {
      "de": [
            {
                  "name": "Kourion Beach",
                  "text": "Ein Küstenabschnitt in der Nähe der antiken Ruinen von Kourion.",
                  "category": "recreational",
                  "coords": [
                        32.884463,
                        34.660054
                  ]
            },
            {
                  "name": "Kourion Stadium",
                  "text": "Ein gut erhaltenes antikes Stadion aus dem 2. Jahrhundert in Kourion.",
                  "category": "historical",
                  "coords": [
                        32.87631,
                        34.670696
                  ]
            },
            {
                  "name": "Kourio",
                  "text": "Eine bedeutende antike Stadtfestung auf Zypern mit römischen Theatern und Mosaiken.",
                  "category": "historical",
                  "coords": [
                        32.885714,
                        34.665169
                  ]
            },
            {
                  "name": "Sanctuary of Apollo",
                  "text": "Ein antikes Heiligtum, das Apollo Hylates gewidmet war, in der Nähe von Kourion.",
                  "category": "historical",
                  "coords": [
                        32.863561,
                        34.672946
                  ]
            },
            {
                  "name": "Topiko Arkhaiologiko Mouseio Kouriou",
                  "text": "Ein Museum, das Fundstücke aus der antiken Stadt Kourion ausstellt.",
                  "category": "museum",
                  "coords": [
                        32.901154,
                        34.669618
                  ]
            },
            {
                  "name": "Kupriako Oinomouseio",
                  "text": "Ein Museum in Erimi, das die 6000-jährige Geschichte der Weinherstellung auf Zypern zeigt.",
                  "category": "museum",
                  "coords": [
                        32.916575,
                        34.675023
                  ]
            },
            {
                  "name": "Small Basilica At Maydan",
                  "text": "Die Ruinen einer kleinen christlichen Basilika in der antiken Stätte Kourion.",
                  "category": "historical",
                  "coords": [
                        32.878758,
                        34.6706
                  ]
            },
            {
                  "name": "Ancient Basilica",
                  "text": "Die Überreste einer frühchristlichen Basilika in Kourion.",
                  "category": "historical",
                  "coords": [
                        32.883353,
                        34.663443
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Kourion Beach",
                  "text": "Tengerparti szakasz Kourion ókori romjai közelében.",
                  "category": "recreational",
                  "coords": [
                        32.884463,
                        34.660054
                  ]
            },
            {
                  "name": "Kourion Stadium",
                  "text": "Jó állapotban fennmaradt ókori stadion a 2. századból Kourionban.",
                  "category": "historical",
                  "coords": [
                        32.87631,
                        34.670696
                  ]
            },
            {
                  "name": "Kourio",
                  "text": "Jelentős ókori városállam Cipruson, római színházzal és mozaikokkal.",
                  "category": "historical",
                  "coords": [
                        32.885714,
                        34.665169
                  ]
            },
            {
                  "name": "Sanctuary of Apollo",
                  "text": "Apollón Hülátésznek szentelt ókori szentély Kourion közelében.",
                  "category": "historical",
                  "coords": [
                        32.863561,
                        34.672946
                  ]
            },
            {
                  "name": "Topiko Arkhaiologiko Mouseio Kouriou",
                  "text": "Múzeum, amely az ókori Kourion városából származó leleteket mutatja be.",
                  "category": "museum",
                  "coords": [
                        32.901154,
                        34.669618
                  ]
            },
            {
                  "name": "Kupriako Oinomouseio",
                  "text": "Erimiben található múzeum, amely Ciprus 6000 éves borkészítési múltját mutatja be.",
                  "category": "museum",
                  "coords": [
                        32.916575,
                        34.675023
                  ]
            },
            {
                  "name": "Small Basilica At Maydan",
                  "text": "Egy kis keresztény bazilika romjai Kourion ókori lelőhelyén.",
                  "category": "historical",
                  "coords": [
                        32.878758,
                        34.6706
                  ]
            },
            {
                  "name": "Ancient Basilica",
                  "text": "Egy korai keresztény bazilika maradványai Kourionban.",
                  "category": "historical",
                  "coords": [
                        32.883353,
                        34.663443
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Kourion Beach",
                  "text": "O zonă de coastă situată lângă ruinele antice din Kourion.",
                  "category": "recreational",
                  "coords": [
                        32.884463,
                        34.660054
                  ]
            },
            {
                  "name": "Kourion Stadium",
                  "text": "Un stadion antic bine conservat din secolul al II-lea în Kourion.",
                  "category": "historical",
                  "coords": [
                        32.87631,
                        34.670696
                  ]
            },
            {
                  "name": "Kourio",
                  "text": "Un important oraș-stat antic din Cipru, cu un teatru roman și mozaicuri.",
                  "category": "historical",
                  "coords": [
                        32.885714,
                        34.665169
                  ]
            },
            {
                  "name": "Sanctuary of Apollo",
                  "text": "Un sanctuar antic dedicat lui Apollo Hylates, situat lângă Kourion.",
                  "category": "historical",
                  "coords": [
                        32.863561,
                        34.672946
                  ]
            },
            {
                  "name": "Topiko Arkhaiologiko Mouseio Kouriou",
                  "text": "Un muzeu care expune artefacte descoperite în orașul antic Kourion.",
                  "category": "museum",
                  "coords": [
                        32.901154,
                        34.669618
                  ]
            },
            {
                  "name": "Kupriako Oinomouseio",
                  "text": "Un muzeu în Erimi care prezintă istoria de 6000 de ani a vinificației în Cipru.",
                  "category": "museum",
                  "coords": [
                        32.916575,
                        34.675023
                  ]
            },
            {
                  "name": "Small Basilica At Maydan",
                  "text": "Ruinele unei mici bazilici creștine în situl antic Kourion.",
                  "category": "historical",
                  "coords": [
                        32.878758,
                        34.6706
                  ]
            },
            {
                  "name": "Ancient Basilica",
                  "text": "Resturile unei bazilici creștine timpurii în Kourion.",
                  "category": "historical",
                  "coords": [
                        32.883353,
                        34.663443
                  ]
            }
      ],
      "en": [
            {
                  "name": "Kourion Beach",
                  "text": "A coastal beach area located near the ancient ruins of Kourion.",
                  "category": "recreational",
                  "coords": [
                        32.884463,
                        34.660054
                  ]
            },
            {
                  "name": "Kourion Stadium",
                  "text": "A well-preserved ancient stadium dating back to the 2nd century in Kourion.",
                  "category": "historical",
                  "coords": [
                        32.87631,
                        34.670696
                  ]
            },
            {
                  "name": "Curium",
                  "text": "A major ancient city-state in Cyprus featuring a Roman theater and mosaics.",
                  "category": "historical",
                  "coords": [
                        32.885714,
                        34.665169
                  ]
            },
            {
                  "name": "Sanctuary of Apollo",
                  "text": "An ancient sanctuary dedicated to Apollo Hylates located near Kourion.",
                  "category": "historical",
                  "coords": [
                        32.863561,
                        34.672946
                  ]
            },
            {
                  "name": "Local Archaeological Kourion Museum",
                  "text": "A museum displaying artifacts discovered at the ancient city of Kourion.",
                  "category": "museum",
                  "coords": [
                        32.901154,
                        34.669618
                  ]
            },
            {
                  "name": "The Cyprus Wine Museum",
                  "text": "A museum in Erimi showcasing Cyprus's 6000-year history of wine production.",
                  "category": "museum",
                  "coords": [
                        32.916575,
                        34.675023
                  ]
            },
            {
                  "name": "Small Basilica At Maydan",
                  "text": "The ruins of a small Christian basilica at the ancient site of Kourion.",
                  "category": "historical",
                  "coords": [
                        32.878758,
                        34.6706
                  ]
            },
            {
                  "name": "Ancient Basilica",
                  "text": "The remains of an early Christian basilica in Kourion.",
                  "category": "historical",
                  "coords": [
                        32.883353,
                        34.663443
                  ]
            }
      ]
},
    type: "historical",
    parent: "CY-004",
    coords: [32.8872, 34.6653],
    name: { de: "Kourion", hu: "Kourion", ro: "Kourion", en: "Kourion" },
    description: {
      de: "Eine der beeindruckendsten archäologischen Stätten Zyperns mit einem römischen Theater.",
      hu: "Ciprus egyik leglenyűgözőbb régészeti lelőhelye római kori színházzal.",
      ro: "Unul dintre cele mai impresionante situri arheologice din Cipru, cu un teatru roman.",
      en: "One of the most impressive archaeological sites in Cyprus, featuring a Roman theatre.",
      es: "Uno de los sitios arqueológicos más impresionantes de Chipre con un teatro romano.",
      pt: "Um dos sítios arqueológicos mais impressionantes de Chipre com um teatro romano.",
      fr: "L'un des sites archéologiques les plus impressionnants de Chypre avec un théâtre romain.",
    },
    descriptionAdvanced: {
      de: "Kourion war eines der bedeutendsten antiken Stadtkönigreiche Zyperns und liegt auf einem spektakulären Kalksteinfelsen an der Südwestküste. Die Ausgrabungsstätte umfasst beeindruckende Überreste aus verschiedenen Epochen, wobei das griechisch-römische Theater aus dem 2. Jahrhundert v. Chr. das architektonische Zentrum bildet. Es bot Platz für rund 3.500 Zuschauer und wird heute wieder für kulturelle Aufführungen genutzt. Besonders bemerkenswert sind das Haus des Eustolios mit seinen gut erhaltenen Mosaikböden aus dem 5. Jahrhundert n. Chr. sowie die frühchristliche Basilika. Die Stadt wurde im Jahr 365 n. Chr. durch eine Reihe schwerer Erdbeben weitgehend zerstört und später aufgegeben. Besucher können heute die komplexen Wasserleitungssysteme und die Ruinen der römischen Bäder besichtigen, die von der fortschrittlichen Ingenieurskunst der damaligen Bewohner zeugen. Die Lage bietet zudem einen weiten Blick über die Bucht von Episkopi.",
      hu: "Kourion az ókori Ciprus egyik legjelentősebb városkirálysága volt, amely egy látványos mészkősziklán fekszik a sziget délnyugati partján. A régészeti lelőhely különböző korszakokból származó maradványokat ölel fel, amelyek közül a Krisztus előtt 2. században épült görög-római színház a legkiemelkedőbb. A színház egykor 3500 néző befogadására volt alkalmas, és ma is kulturális események helyszínéül szolgál. Különösen jelentősek Eustolios házának 5. századi mozaikpadlói, amelyek keresztény szimbolikát is hordoznak, valamint a korai keresztény bazilika romjai. A várost 365-ben egy pusztító földrengéssorozat romba döntötte, ami a település fokozatos elnéptelenedéséhez vezetett. A látogatók megtekinthetik a római fürdők bonyolult vízellátó rendszerét és a gladiátorok házát is, ahol ritka, harci jeleneteket ábrázoló mozaikok maradtak fenn. A terület stratégiai elhelyezkedése lenyűgöző kilátást nyújt az Episkopi-öbölre.",
      ro: "Kourion a fost unul dintre cele mai importante orașe-regat antice din Cipru, situat pe o faleză de calcar spectaculoasă de pe coasta de sud-vest. Situl arheologic cuprinde vestigii impresionante din diverse epoci, teatrul greco-roman din secolul al II-lea î.Hr. fiind piesa centrală a complexului. Acesta avea o capacitate de aproximativ 3.500 de spectatori și este utilizat și astăzi pentru spectacole culturale. Deosebit de remarcabile sunt Casa lui Eustolios, cu mozaicurile sale bine conservate din secolul al V-lea d.Hr., și bazilica creștină timpurie. Orașul a fost distrus în mare parte de o serie de cutremure severe în anul 365 d.Hr. și ulterior abandonat de locuitorii săi. Vizitatorii pot explora sistemele complexe de alimentare cu apă și ruinele băilor romane, care demonstrează ingineria avansată a acelei perioade. Locația oferă, de asemenea, o panoramă extinsă asupra golfului Episkopi și a împrejurimilor sale naturale.",
      en: "Kourion was one of the most significant ancient city-kingdoms of Cyprus, situated on a spectacular limestone cliff on the southwestern coast. The archaeological site encompasses impressive remains from various eras, with the Greco-Roman theater from the 2nd century BC serving as its architectural centerpiece. It originally accommodated around 3,500 spectators and is still used today for cultural performances. Particularly noteworthy are the House of Eustolios with its well-preserved 5th-century AD mosaic floors and the early Christian basilica. The city was largely destroyed by a series of severe earthquakes in 365 AD and was subsequently abandoned. Visitors can today explore the complex water pipe systems and the ruins of the Roman baths, which testify to the advanced engineering skills of the inhabitants. The location also offers an expansive view over the Bay of Episkopi and the Mediterranean coastline.",
      es: "Kourion fue uno de los reinos-ciudad antiguos más importantes de Chipre y se asienta sobre un espectacular acantilado de piedra caliza en la costa suroeste. El sitio arqueológico comprende restos impresionantes de varias épocas, siendo el teatro greco-romano del siglo II a.C. el centro arquitectónico. Tenía capacidad para unos 3.500 espectadores y hoy se utiliza de nuevo para representaciones culturales. Son particularmente notables la Casa de Eustolios, con sus suelos de mosaico bien conservados del siglo V d.C., y la basílica paleocristiana. La ciudad fue destruida en gran parte en el año 365 d.C. por una serie de fuertes terremotos y posteriormente abandonada. Los visitantes pueden contemplar hoy los complejos sistemas de acueductos y las ruinas de los baños romanos, que atestiguan la avanzada ingeniería de sus antiguos habitantes. Además, su ubicación ofrece una amplia vista sobre la bahía de Episkopi.",
      pt: "Kourion foi um dos reinos-cidade antigos mais importantes de Chipre e situa-se num espetacular rochedo de calcário na costa sudoeste. O sítio arqueológico inclui restos impressionantes de várias épocas, sendo o teatro greco-romano do século II a.C. o centro arquitetónico. Tinha capacidade para cerca de 3.500 espetadores e hoje é novamente utilizado para espetáculos culturais. Particularmente notáveis são a Casa de Eustólios, com os seus pavimentos em mosaico bem preservados do século V d.C., bem como a basílica paleocristã. A cidade foi em grande parte destruída no ano 365 d.C. por uma série de terramotos graves e posteriormente abandonada. Os visitantes podem hoje visitar os complexos sistemas de canalização de água e as ruínas dos banhos romanos, que testemunham a avançada engenharia dos habitantes da época. A localização oferece também uma vista ampla sobre a baía de Episkopi.",
      fr: "Kourion était l'une des cités-royaumes antiques les plus importantes de Chypre, située sur une falaise calcaire spectaculaire de la côte sud-ouest. Le site archéologique comprend des vestiges impressionnants de différentes époques, le théâtre gréco-romain du IIe siècle av. J.-C. constituant le centre architectural. Il pouvait accueillir environ 3 500 spectateurs et est aujourd'hui de nouveau utilisé pour des représentations culturelles. La Maison d'Eustolios, avec ses sols en mosaïque bien conservés du Ve siècle apr. J.-C., ainsi que la basilique paléochrétienne sont particulièrement remarquables. La ville fut en grande partie détruite en 365 apr. J.-C. par une série de violents séismes, puis abandonnée. Les visiteurs peuvent aujourd'hui admirer les systèmes complexes d'adduction d'eau et les ruinas des thermes romains, qui témoignent du génie technique des habitants de l'époque. Le site offre en outre une vue imprenable sur la baie d'Episkopi.",
    },
    factsAdvanced: {
      de: ["Gegründet im 12. Jahrhundert v. Chr. durch mykenische Siedler.", "Das Theater wurde im 2. Jahrhundert n. Chr. für Gladiatorenkämpfe erweitert.", "Zerstörung der Stadt durch ein Erdbeben der Stärke 6,5 im Jahr 365.", "Die Mosaike im Haus des Eustolios enthalten erste christliche Inschriften.", "Das Nymphäum war ein prächtiger Brunnenbau aus dem 2. Jahrhundert.", "Die Anlage gehört zum UNESCO-Weltkulturerbe von Paphos."],
      hu: ["A várost a Krisztus előtt 12. században mükénéi telepesek alapították.", "A színházat a 2. században gladiátori játékokhoz alakították át.", "365-ben egy 6,5-ös erősségű földrengés pusztította el a várost.", "Eustolios házának mozaikjai az első keresztény feliratokat tartalmazzák.", "A Nymphaeum egy díszes, 2. századi közkút és szentély volt.", "A régészeti terület a Paphos-i UNESCO Világörökség része."],
      ro: ["Orașul a fost fondat în secolul al XII-lea î.Hr. de coloniști micenieni.", "Teatrul a fost extins în secolul al II-lea d.Hr. pentru lupte de gladiatori.", "Distrugerea orașului a avut loc în anul 365 din cauza unui cutremur de 6,5 grade.", "Mozaicurile din Casa lui Eustolios conțin primele inscripții creștine.", "Nymphaeum-ul era o fântână monumentală construită în secolul al II-lea.", "Situl este inclus în patrimoniul mondial UNESCO din zona Paphos."],
      en: ["Founded in the 12th century BC by Mycenaean settlers.", "The theater was expanded in the 2nd century AD for gladiator fights.", "Destruction occurred in 365 AD due to a 6.5 magnitude earthquake.", "Mosaics in the House of Eustolios contain early Christian inscriptions.", "The Nymphaeum was a grand fountain structure from the 2nd century.", "The site is part of the Paphos UNESCO World Heritage listing."],
      es: ["Fundada en el siglo XII a.C. por colonos micénicos.", "El teatro fue ampliado en el siglo II d.C. para luchas de gladiadores.", "Destrucción de la ciudad por un terremoto de magnitud 6,5 en el año 365.", "Los mosaicos en la Casa de Eustolios contienen las primeras inscripciones cristianas.", "El Ninfeo era una magnífica fuente del siglo II.", "El complejo forma parte del Patrimonio de la Humanidad de la UNESCO de Pafos."],
      pt: ["Fundada no século XII a.C. por colonos micénicos.", "O teatro foi ampliado no século II d.C. para combates de gladiadores.", "Destruição da cidade por um terramoto de magnitude 6,5 no ano 365.", "Os mosaicos na Casa de Eustólios contêm as primeiras inscrições cristãs.", "O Ninfeu era uma magnífica construção de fonte do século II.", "O complexo faz parte do Património Mundial da UNESCO de Paphos."],
      fr: ["Fondée au XIIe siècle av. J.-C. par des colons mycéniens.", "Le théâtre a été agrandi au IIe siècle apr. J.-C. pour les combats de gladiateurs.", "Destruction de la ville par un séisme de magnitude 6,5 en l'an 365.", "Les mosaïques de la Maison d'Eustolios contiennent les premières inscriptions chrétiennes.", "Le Nymphée était une magnifique fontaine monumentale du IIe siècle.", "Le site fait partie du patrimoine mondial de l'UNESCO de Paphos."],
    }, image: "/poi-images/cy-kourion.webp",
    facts: {
      de: ["Antikes römisches Theater", "Mosaike im Haus des Eustolios", "Blick auf das Mittelmeer", "Frühes christliches Baptisterium"],
      hu: ["Ókori görög-római színház", "Az Eustolios-ház mozaikjai", "Sziklaszirten fekvő romváros", "4. századi földrengés pusztította"],
      ro: ["Teatru antic greco-roman", "Mozaicurile din Casa Eustolios", "Situat pe o stâncă înaltă", "Distrus de cutremur în secolul IV"],
      en: ["Ancient Greco-Roman theater", "House of Eustolios mosaics", "Founded by Argive colonists", "Ruined by 4th-century earthquakes"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-tombs-kings", "sights": {"de": [{"name": "Lighthouse Beach", "text": "In direkter Nachbarschaft zu den historischen Königsgräbern erwartet Besucher dieser überaus stimmungsvolle Uferstreifen. Antikes Flair vermischt sich hier gekonnt mit einem sehr entspannten, zypriotischen Küstenleben. Nach einer spannenden Besichtigung der Ruinen lockt das Meer zur Abkühlung und der Strand zum Ausruhen. Kombinieren Sie spielend leicht Kultur und Entspannung an einem sonnigen Nachmittag.", "category": "recreational", "coords": [32.406249, 34.764387]}, {"name": "Faros Beach", "text": "Nicht weit von den ehrwürdigen Königsgräbern entfernt, verspricht dieser Strand eine ruhige Auszeit direkt am Wasser. Eine gelassene Brise prägt hier die friedliche Szenerie, fernab großer Menschenmassen. Es ist ein fabelhafter Ort, um nach den Ausgrabungen im Mittelmeer zu schwimmen, sich zu sonnen oder am Ufer zu wandeln. Bringen Sie etwas Zeit mit, um die sanften Wellen auf sich wirken zu lassen.", "category": "recreational", "coords": [32.408521, 34.770279]}, {"name": "Kefalos Beach", "text": "Eingebettet in die historische Küstenlandschaft nahe der Königsgräber liegt dieses auffallend friedliche Strandstück. Urlauber finden hier einen stillen Hafen, um nach dem Sightseeing wieder neue Energie zu tanken. Das klare Wasser lädt zum ausgiebigen Planschen ein, während der Strand zu kurzen, sonnigen Spaziergängen verführt. Ein unkomplizierter und erholsamer Abstecher in Zyperns schöne Sommerwelt.", "category": "recreational", "coords": [32.405099, 34.768829]}, {"name": "Elysium Beach", "text": "Dieser zypriotische Küstenabschnitt bei den Königsgräbern macht seinem himmlischen Namen alle Ehre. Die exklusive und entspannte Atmosphäre verspricht wundervolle Momente vollkommener Ruhe. Ungestörtes Sonnenbaden und leichte Schwimmzüge im sauberen Meer formen hier den perfekten Urlaubstag. Suchen Sie diesen Uferbereich unbedingt auf, wenn Sie dem Alltag für ein paar Stunden entfliehen möchten.", "category": "recreational", "coords": [32.404623, 34.771881]}, {"name": "Venus blue beach", "text": "Azurblaues Wasser umspielt sanft diesen Strandbereich an der antiken Küste der Königsgräber. Eine sehr harmonische und einladende Stimmung zieht Menschen an, die Entspannung in schöner Kulisse suchen. Gäste schwimmen durch die Wellen, spazieren am Ufer und wärmen sich anschließend im zypriotischen Sonnenlicht auf. Besonders am späten Vormittag zeigt sich die Farbe des Meeres am allerschönsten.", "category": "recreational", "coords": [32.402936, 34.779631]}, {"name": "Vrexi Beach", "text": "Versteckt an der rauen Küste der Königsgräber von Paphos, wartet dieser Strand mit seiner beschaulichen Art auf Entdecker. Das maritime Flair ist geprägt von Stille und einer herrlichen mediterranen Brise. Es ist ideal für ausgiebiges Strandliegen, das Lauschen der See und ein paar ruhige Runden im Wasser. Für eine kurze Auszeit während der Inselerkundung ist dieser Platz einfach grandios.", "category": "recreational", "coords": [32.40131, 34.784767]}], "hu": [{"name": "Lighthouse Beach", "text": "Közvetlenül a történelmi királysírok szomszédságában várja a látogatókat ez a rendkívül hangulatos partszakasz. Az ókori atmoszféra itt ügyesen keveredik a nagyon nyugodt, ciprusi partvidéki élettel. A romok izgalmas megtekintése után a tenger hűsölésre, a strand pedig pihenésre csábít. Kombinálja játszi könnyedséggel a kultúrát és a pihenést egy napsütéses délutánon.", "category": "recreational", "coords": [32.406249, 34.764387]}, {"name": "Faros Beach", "text": "Nem messze a tiszteletre méltó királysíroktól ez a strand csendes kikapcsolódást ígér közvetlenül a vízparton. Nyugodt szellő jellemzi itt a békés tájat, távol a nagy embertömegektől. Mesés hely, hogy az ásatások után a Földközi-tengerben ússzunk, napozzunk, vagy a parton sétáljunk. Szánjon rá egy kis időt, hogy hagyja hatni magára a lágy hullámokat.", "category": "recreational", "coords": [32.408521, 34.770279]}, {"name": "Kefalos Beach", "text": "A királysírok közeli történelmi partvidékbe ágyazva fekszik ez a feltűnően békés partszakasz. A nyaralók itt csendes menedéket találnak, hogy a városnézés után új energiával töltődjenek fel. A tiszta víz kiadós pancsolásra csábít, miközben a strand rövid, napos sétákra ösztönöz. Egyszerű és pihentető kitérő Ciprus gyönyörű nyári világába.", "category": "recreational", "coords": [32.405099, 34.768829]}, {"name": "Elysium Beach", "text": "Ez a ciprusi partszakasz a királysíroknál méltó mennyei nevéhez. Az exkluzív és nyugodt atmoszféra a tökéletes csend csodálatos pillanatait ígéri. A zavartalan napozás és a könnyed úszás a tiszta tengerben itt a tökéletes nyaralási napot alkotják. Mindenképpen keresse fel ezt a partszakaszt, ha néhány órára el akar menekülni a mindennapok elől.", "category": "recreational", "coords": [32.404623, 34.771881]}, {"name": "Venus blue beach", "text": "Azúrkék víz mossa lágyan ezt a strandrészt a királysírok ókori partvidékén. Nagyon harmonikus és hívogató hangulat vonzza azokat az embereket, akik gyönyörű környezetben keresnek kikapcsolódást. A vendégek a hullámok között úsznak, a parton sétálnak, majd felmelegednek a ciprusi napfényben. A tenger színe különösen a késő délelőtti órákban a legszebb.", "category": "recreational", "coords": [32.402936, 34.779631]}, {"name": "Vrexi Beach", "text": "Páfosz királysírjainak zord partján megbújva vár ez a strand a maga szemlélődő módján a felfedezőkre. A tengeri hangulatot a csend és egy pompás mediterrán szellő jellemzi. Ideális hosszas tengerparti fekvéshez, a tenger hallgatásához és néhány csendes körhöz a vízben. Szigetnézés közbeni rövid kikapcsolódáshoz ez a hely egyszerűen nagyszerű.", "category": "recreational", "coords": [32.40131, 34.784767]}], "ro": [{"name": "Lighthouse Beach", "text": "În imediata vecinătate a mormintelor istorice ale regilor, această fâșie de coastă extrem de plină de atmosferă își așteaptă vizitatorii. Aerul antic se îmbină aici cu pricepere cu o viață de coastă cipriotă foarte relaxată. După o vizită captivantă a ruinelor, marea te atrage la răcorire, iar plaja la odihnă. Combinați cu ușurință cultura și relaxarea într-o după-amiază însorită.", "category": "recreational", "coords": [32.406249, 34.764387]}, {"name": "Faros Beach", "text": "Nu departe de venerabilele morminte ale regilor, această plajă promite o pauză liniștită chiar la malul apei. O briză calmă caracterizează aici peisajul pașnic, departe de mulțimile mari. Este un loc fabulos pentru a înota în Marea Mediterană după vizitarea săpăturilor, pentru a face plajă sau pentru a vă plimba pe țărm. Aduceți cu voi puțin timp pentru a lăsa valurile blânde să aibă efect.", "category": "recreational", "coords": [32.408521, 34.770279]}, {"name": "Kefalos Beach", "text": "Ascunsă în peisajul istoric de coastă de lângă mormintele regilor, se află această porțiune de plajă remarcabil de pașnică. Turiștii găsesc aici un refugiu tăcut pentru a se reîncărca cu energie după vizitarea obiectivelor turistice. Apa limpede te invită la o bălăceală prelungită, în timp ce plaja te ispitește la scurte plimbări însorite. Un ocol necomplicat și relaxant în frumoasa lume estivală a Ciprului.", "category": "recreational", "coords": [32.405099, 34.768829]}, {"name": "Elysium Beach", "text": "Această secțiune de coastă cipriotă de lângă mormintele regilor își onorează din plin numele ceresc. Atmosfera exclusivistă și relaxată promite momente minunate de liniște desăvârșită. Băile de soare netulburate și înotul ușor în marea curată formează aici ziua perfectă de vacanță. Asigurați-vă că vizitați această zonă de coastă dacă doriți să evadați din viața de zi cu zi pentru câteva ore.", "category": "recreational", "coords": [32.404623, 34.771881]}, {"name": "Venus blue beach", "text": "Apa de un albastru azur scaldă blând această zonă de plajă de pe coasta antică a mormintelor regilor. O atmosferă foarte armonioasă și primitoare atrage oamenii care caută relaxare într-un decor frumos. Oaspeții înoată prin valuri, se plimbă pe țărm și apoi se încălzesc la lumina soarelui cipriot. Mai ales dimineața târziu, culoarea mării este cea mai frumoasă.", "category": "recreational", "coords": [32.402936, 34.779631]}, {"name": "Vrexi Beach", "text": "Ascunsă pe coasta aspră a mormintelor regilor din Paphos, această plajă își așteaptă exploratorii cu felul ei contemplativ. Aerul maritim este caracterizat de liniște și de o minunată briză mediteraneană. Este ideal pentru statul prelungit pe plajă, pentru a asculta marea și pentru câteva ture liniștite în apă. Pentru o scurtă pauză în timpul explorării insulei, acest loc este pur și simplu grandios.", "category": "recreational", "coords": [32.40131, 34.784767]}], "en": [{"name": "Lighthouse Beach", "text": "In the immediate vicinity of the historical Tombs of the Kings, this highly atmospheric stretch of shoreline awaits visitors. Ancient flair skillfully mixes here with a very relaxed Cypriot coastal life. After an exciting tour of the ruins, the sea beckons for a cooldown and the beach for resting. Playfully combine culture and relaxation on a sunny afternoon.", "category": "recreational", "coords": [32.406249, 34.764387]}, {"name": "Faros Beach", "text": "Not far from the venerable Tombs of the Kings, this beach promises a quiet break right by the water. A calm breeze characterizes the peaceful scenery here, far from large crowds. It is a fabulous place to swim in the Mediterranean after visiting the excavations, to sunbathe, or to wander along the shore. Bring some time to let the gentle waves work their magic on you.", "category": "recreational", "coords": [32.408521, 34.770279]}, {"name": "Kefalos Beach", "text": "Nestled in the historic coastal landscape near the Tombs of the Kings lies this strikingly peaceful stretch of beach. Vacationers find a quiet haven here to recharge their batteries after sightseeing. The clear water invites for extensive splashing, while the beach tempts with short, sunny walks. An uncomplicated and restful detour into Cyprus's beautiful summer world.", "category": "recreational", "coords": [32.405099, 34.768829]}, {"name": "Elysium Beach", "text": "This Cypriot coastal stretch near the Tombs of the Kings fully lives up to its heavenly name. The exclusive and relaxed atmosphere promises wonderful moments of complete tranquility. Undisturbed sunbathing and light swimming in the clean sea shape the perfect holiday day here. Be sure to seek out this shoreline area when you want to escape everyday life for a few hours.", "category": "recreational", "coords": [32.404623, 34.771881]}, {"name": "Venus blue beach", "text": "Azure blue water gently washes around this beach area on the ancient coast of the Tombs of the Kings. A very harmonious and inviting mood attracts people seeking relaxation in a beautiful setting. Guests swim through the waves, stroll along the shore, and then warm up in the Cypriot sunlight. The color of the sea is most beautiful, especially in the late morning.", "category": "recreational", "coords": [32.402936, 34.779631]}, {"name": "Vrexi Beach", "text": "Hidden on the rugged coast of the Tombs of the Kings of Paphos, this beach waits for explorers with its contemplative nature. The maritime flair is characterized by silence and a wonderful Mediterranean breeze. It is ideal for extensive lounging on the beach, listening to the sea, and a few quiet laps in the water. For a short break during your island exploration, this place is simply magnificent.", "category": "recreational", "coords": [32.40131, 34.784767]}]},
    type: "historical",
    parent: "CY-005",
    coords: [32.4053, 34.7675],
    name: { de: "Königsgräber", hu: "Királysírok", ro: "Mormintele Regilor", en: "Tombs of the Kings" },
    description: {
      de: "Große Nekropole aus hellenistischer und römischer Zeit in der Nähe von Paphos.",
      hu: "Nagy kiterjedésű, hellenisztikus és római kori nekropolisz Páfosz közelében.",
      ro: "O mare necropolă din perioada elenistică și romană în apropiere de Paphos.",
      en: "A large necropolis from the Hellenistic and Roman periods near Paphos.",
      es: "Gran necrópolis de la época helenística y romana cerca de Pafos.",
      pt: "Grande necrópole das épocas helenística e romana perto de Pafos.",
      fr: "Grande nécropole de l'époque hellénistique et romaine près de Paphos.",
    },
    descriptionAdvanced: {
      de: "Die Königsgräber von Paphos sind eine weitläufige unterirdische Nekropole, die trotz ihres Namens nie für Könige, sondern für hochrangige Beamte und Aristokraten der ptolemäischen Zeit genutzt wurde. Die Anlage stammt aus dem 4. Jahrhundert v. Chr. und erstreckt sich über ein karges Küstengebiet nördlich des Hafens von Paphos. Die Gräber wurden direkt in den massiven Fels gehauen und ahmen in ihrer Architektur die Häuser der Lebenden nach, oft mit dorischen Säulen und prächtigen Peristylhöfen. Diese Bauweise spiegelt den ägyptischen Einfluss jener Epoche wider, als Zypern unter der Herrschaft der Ptolemäer stand. Viele der Gräber dienten über Jahrhunderte hinweg als Begräbnisstätten und wurden in frühchristlicher Zeit teilweise als Wohnhäuser oder Werkstätten zweckentfremdet. Die Nekropole ist heute ein wichtiger Bestandteil des UNESCO-Weltkulturerbes und bietet Einblicke in die Bestattungsriten und sozialen Hierarchien des antiken Zyperns. Die monumentale Größe der Kammern unterstreicht den enormen Reichtum der herrschenden Klasse.",
      hu: "A paphosi Királysírok egy kiterjedt földalatti nekropolisz, amelyet neve ellenére nem királyok, hanem a ptolemaioszi korszak magas rangú tisztviselői és arisztokratái számára építettek. A Krisztus előtt 4. századból származó együttes Paphos kikötőjétől északra, egy kietlen tengerparti területen fekszik. A sírokat közvetlenül a sziklába vájták, építészetük pedig az élők házait utánozza, gyakran dór oszlopokkal és belső udvarokkal (peristylium) kiegészítve. Ez az építési stílus az egyiptomi hatást tükrözi, amely abban az időben Ciprust jellemezte a Ptolemaiosz-dinasztia uralma alatt. Sok sírhely évszázadokon át szolgált temetkezési helyként, majd a korai keresztény korban lakóhelyként vagy műhelyként is hasznosították őket. A nekropolisz ma az UNESCO Világörökség részét képezi, és egyedülálló betekintést nyújt az ókori Ciprus temetkezési rituáléiba és társadalmi ranglétrájába. A kamrák monumentális mérete az akkori uralkodó osztály hatalmas vagyonát jelzi.",
      ro: "Mormintele Regilor din Paphos reprezintă o necropolă subterană vastă care, în ciuda numelui său, nu a fost niciodată destinată regilor, ci oficialilor de rang înalt și aristocraților din perioada ptolemeică. Ansamblul datează din secolul al IV-lea î.Hr. și se întinde pe o zonă de coastă aridă, la nord de portul Paphos. Mormintele au fost săpate direct în roca masivă și imită prin arhitectura lor casele celor vii, având adesea coloane dorice și curți interioare cu peristil. Acest stil de construcție reflectă influența egipteană a epocii, când Ciprul se afla sub dominația dinastiei Ptolemeilor. Multe dintre morminte au servit ca locuri de înhumare timp de secole și au fost reutilizate parțial în epoca creștină timpurie ca locuințe sau ateliere. Necropola este astăzi o componentă esențială a patrimoniului mondial UNESCO, oferind perspective asupra riturilor funerare și ierarhiilor sociale din Ciprul antic. Dimensiunile monumentale ale camerelor subliniază bogăția imensă a clasei conducătoare de atunci.",
      en: "The Tombs of the Kings in Paphos is a vast underground necropolis that, despite its name, was never used for royalty but rather for high-ranking officials and aristocrats of the Ptolemaic period. The site dates back to the 4th century BC and spreads across a barren coastal area north of Paphos harbor. The tombs were carved directly into the solid rock, with their architecture mimicking the houses of the living, often featuring Doric columns and grand peristyle courtyards. This construction style reflects the Egyptian influence of that era when Cyprus was under Ptolemaic rule. Many of the tombs served as burial sites for centuries and were partially repurposed in early Christian times as dwellings or workshops. The necropolis is now a vital part of the UNESCO World Heritage list, providing insights into the burial rites and social hierarchies of ancient Cyprus. The monumental size of the chambers underscores the immense wealth of the ruling class of that time.",
      es: "Las Tumbas de los Reyes en Pafos son una extensa necrópolis subterránea que, a pesar de su nombre, nunca se utilizó para reyes, sino para altos funcionarios y aristócratas de la época ptolemaica. El complejo data del siglo IV a. C. y se extiende por una zona costera árida al norte del puerto de Pafos. Las tumbas fueron excavadas directamente en la roca maciza e imitan en su arquitectura las casas de los vivos, a menudo con columnas dóricas y magníficos patios con peristilo. Este estilo de construcción refleja la influencia egipcia de aquella época, cuando Chipre estaba bajo el dominio de los Ptolomeos. Muchas de las tumbas sirvieron como lugares de entierro durante siglos y fueron parcialmente reutilizadas en la época cristiana temprana como viviendas o talleres. La necrópolis es hoy una parte importante del Patrimonio de la Humanidad de la UNESCO y ofrece una visión de los ritos funerarios y las jerarquías sociales del antiguo Chipre. El tamaño monumental de las cámaras subraya la enorme riqueza de la clase dominante.",
      pt: "Os Túmulos dos Reis em Pafos são uma vasta necrópole subterrânea que, apesar do nome, nunca foi utilizada para reis, mas sim para funcionários de alto escalão e aristocratas do período ptolemaico. O complexo data do século IV a.C. e estende-se por uma zona costeira árida a norte do porto de Pafos. Os túmulos foram escavados diretamente na rocha maciça e imitam na sua arquitetura as casas dos vivos, frequentemente com colunas dóricas e magníficos pátios com peristilo. Este estilo de construção reflete a influência egípcia da época em que Chipre estava sob o domínio dos Ptolomeus. Muitos dos túmulos serviram como locais de sepultamento durante séculos e foram parcialmente reutilizados no início da era cristã como habitações ou oficinas. A necrópole é hoje uma parte importante do Património Mundial da UNESCO e oferece uma visão sobre os ritos funerários e as hierarquias sociais do antigo Chipre. O tamanho monumental das câmaras sublinha a enorme riqueza da classe dominante.",
      fr: "Les Tombeaux des Rois de Paphos constituent une vaste nécropole souterraine qui, malgré son nom, n'a jamais été utilisée pour des rois, mais pour des hauts fonctionnaires et des aristocrates de l'époque ptolémaïque. Le site date du IVe siècle avant J.-C. et s'étend sur une zone côtière aride au nord du port de Paphos. Les tombes ont été taillées directement dans le roc massif et imitent dans leur architecture les maisons des vivants, souvent avec des colonnes doriques et de magnifiques cours à péristyle. Ce mode de construction reflète l'influence égyptienne de cette époque, lorsque Chypre était sous la domination des Ptolémées. De nombreuses tombes ont servi de sépultures pendant des siècles et ont été partiellement détournées à l'époque paléochrétienne comme habitations ou ateliers. La nécropole est aujourd'hui un élément important du patrimoine mondial de l'UNESCO et offre un aperçu des rites funéraires et des hiérarchies sociales de la Chypre antique. La taille monumentale des chambres souligne l'énorme richesse de la classe dirigeante.",
    },
    factsAdvanced: {
      de: ["Die Nekropole umfasst sieben große, freigelegte Grabkomplexe.", "Die Gräber stammen aus dem Zeitraum zwischen dem 4. Jh. v. Chr. und dem 3. Jh. n. Chr.", "In den 1970er Jahren begannen systematische archäologische Ausgrabungen.", "Architektonisch sind die Gräber einzigartig durch ihre dörischen Peristyle.", "Es wurden hier keine Skelette von Königen gefunden, nur von Beamten.", "Die Anlage wurde 1980 in die Liste des UNESCO-Weltkulturerbes aufgenommen."],
      hu: ["A nekropolisz hét nagy, feltárt sírkomplexumot foglal magában.", "A sírok a Krisztus előtt 4. és a Krisztus után 3. század között épültek.", "A szisztematikus régészeti feltárások az 1970-es években kezdődtek.", "Az építmények dór oszlopos belső udvaraikkal egyedülállóak.", "Itt nem királyok, hanem magas rangú közigazgatási tisztviselők nyugodtak.", "A terület 1980-ban került fel az UNESCO Világörökségi listájára."],
      ro: ["Necropola cuprinde șapte complexe funerare majore excavate.", "Mormintele datează din perioada cuprinsă între secolul IV î.Hr. și secolul III d.Hr.", "Săpăturile arheologice sistematice au început în anii 1970.", "Mormintele sunt unice prin curțile lor interioare cu coloane dorice.", "Nu au fost găsite schelete de regi aici, ci doar de oficiali ptolemeici.", "Situl a fost inclus în patrimoniul mondial UNESCO în anul 1980."],
      en: ["The necropolis consists of seven major excavated tomb complexes.", "Tombs date from the 4th century BC to the 3rd century AD.", "Systematic archaeological excavations began in the 1970s.", "The tombs are unique for their Doric-style peristyle courtyards.", "No royal skeletons were found here, only those of high officials.", "The site was added to the UNESCO World Heritage list in 1980."],
      es: ["La necrópolis incluye siete grandes complejos funerarios expuestos.", "Las tumbas datan del periodo comprendido entre el siglo IV a. C. y el siglo III d. C.", "En la década de 1970 comenzaron las excavaciones arqueológicas sistemáticas.", "Arquitectónicamente, las tumbas son únicas por sus peristilos dóricos.", "No se encontraron esqueletos de reyes aquí, solo de funcionarios.", "El recinto fue incluido en la lista del Patrimonio Mundial de la UNESCO en 1980."],
      pt: ["A necrópole inclui sete grandes complexos funerários expostos.", "Os túmulos datam do período entre o século IV a.C. e o século III d.C.", "Na década de 1970, iniciaram-se as escavações arqueológicas sistemáticas.", "Arquitetonicamente, os túmulos são únicos pelos seus peristilos dóricos.", "Não foram encontrados esqueletos de reis aqui, apenas de funcionários.", "O complexo foi incluído na lista de Património Mundial da UNESCO em 1980."],
      fr: ["La nécropole comprend sept grands complexes funéraires mis au jour.", "Les tombes datent de la période comprise entre le IVe siècle av. J.-C. et le IIIe siècle apr. J.-C.", "Des fouilles archéologiques systématiques ont débuté dans les années 1970.", "Architecturalement, les tombes sont uniques par leurs péristyles doriques.", "Aucun squelette de roi n'a été trouvé ici, seulement des fonctionnaires.", "Le site a été inscrit sur la liste du patrimoine mondial de l'UNESCO en 1980."],
    }, image: "/poi-images/cy-tombs-kings.webp",
    facts: {
      de: ["UNESCO Weltkulturerbe", "Hellenistische Architektur", "Unterirdische Felsengräber", "Dorishe Säulen in den Höfen"],
      hu: ["UNESCO világörökségi helyszín", "Hellenisztikus stílusú sírok", "Sziklába vájt udvarok", "Dór oszlopos oszlopcsarnokok"],
      ro: ["Patrimoniu Mondial UNESCO", "Datate din perioada elenistică", "Necropolă săpată în stâncă", "Coloane dorice impresionante"],
      en: ["UNESCO World Heritage Site", "Hellenistic and Roman period", "Rock-cut underground tombs", "Features Doric style columns"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-kolossi",
    type: "historical",
    parent: "CY-004",
    coords: [32.9344, 34.6653],
    name: { de: "Burg Kolossi", hu: "Kolossi vár", ro: "Castelul Kolossi", en: "Kolossi Castle" },
    description: {
      de: "Ehemalige Kreuzritterburg in der Nähe von Limassol.",
      hu: "Egykori keresztes lovagvár Limassol közelében.",
      ro: "O fostă fortăreață a cruciaților în apropiere de Limassol.",
      en: "A former Crusader stronghold located near Limassol.",
      es: "Antiguo castillo de los cruzados cerca de Limasol.",
      pt: "Antigo castelo dos cruzados perto de Limassol.",
      fr: "Ancien château des croisés près de Limassol.",
    },
    descriptionAdvanced: {
      de: "Die Burg Kolossi ist eine ehemalige Kreuzritterfestung am Rande des Dorfes Kolossi, westlich von Limassol. Das heutige dreistöckige Turmhaus wurde 1454 vom Großprior der Johanniter, Louis de Magnac, auf den Ruinen einer älteren Burg aus dem 13. Jahrhundert errichtet. Kolossi war von großer strategischer Bedeutung, da es das Zentrum der wertvollsten Ländereien der Insel bildete, auf denen Zuckerrohr und Weinreben angebaut wurden. Die Festung diente als Hauptquartier der „Grande Commanderie“, was dem berühmten zypriotischen Süßwein Commandaria seinen Namen gab. Die Architektur der Burg ist geprägt durch massive Mauern mit einer Dicke von bis zu 1,25 Metern und eine gut erhaltene Wendeltreppe im Inneren. Direkt neben dem Turm befinden sich die Ruinen einer mittelalterlichen Zuckerraffinerie aus dem 14. Jahrhundert, die den wirtschaftlichen Wohlstand der Region unterstreicht. Heute gilt Kolossi als eines der besterhaltenen Beispiele militärischer Architektur aus der Zeit der Kreuzfahrer auf Zypern.",
      hu: "A Kolossziszi vár egy egykori keresztes lovagvár Kolosszi falu szélén, Limasszoltól nyugatra. A mai háromszintes lakótornyot 1454-ben építette Louis de Magnac, a Jeruzsálemi Szent János Ispotályos Lovagrend nagymestere, egy 13. századi vár romjaira. Kolosszisz stratégiai jelentősége abban rejlett, hogy a sziget legértékesebb mezőgazdasági területeinek központja volt, ahol cukornádat és szőlőt termesztettek. A vár a „Grande Commanderie” központjaként szolgált, amelyről a híres ciprusi desszertbor, a Commandaria is kapta a nevét. A vár építészetét az akár 1,25 méter vastag falak és a belső térben található, jó állapotban fennmaradt csigalépcső jellemzi. Közvetlenül a torony mellett láthatók egy 14. századi középkori cukorfinomító romjai, amelyek a régió gazdasági jólétét bizonyítják. Napjainkban Kolosszisz a keresztesek korabeli katonai építészet egyik legjobb állapotban fennmaradt példája Cipruson.",
      ro: "Castelul Kolossi este o fostă fortăreață a cruciaților situată la marginea satului Kolossi, la vest de Limassol. Actualul turn cu trei etaje a fost construit în 1454 de marele prior al Cavalerilor Ospitalieri, Louis de Magnac, pe ruinele unui castel mai vechi din secolul al XIII-lea. Kolossi avea o importanță strategică majoră, fiind centrul celor mai valoroase domenii agricole ale insulei, unde se cultivau trestie de zahăr și viță-de-vie. Fortăreața a servit drept sediu al „Grande Commanderie”, fapt ce a dat numele celebrului vin dulce cipriot Commandaria. Arhitectura castelului este marcată de ziduri masive cu o grosime de până la 1,25 metri și o scară în spirală bine conservată în interior. Chiar lângă turn se află ruinele unei rafinării de zahăr medievale din secolul al XIV-lea, care subliniază prosperitatea economică a regiunii. Astăzi, Kolossi este considerat unul dintre cele mai bine conservate exemple de arhitectură militară din epoca cruciaților din Cipru.",
      en: "Kolossi Castle is a former Crusader stronghold located on the edge of Kolossi village, west of Limassol. The current three-story tower house was built in 1454 by the Grand Prior of the Knights Hospitaller, Louis de Magnac, on the ruins of an older 13th-century castle. Kolossi was of great strategic importance as it was the center of the island's most valuable agricultural lands, where sugarcane and vineyards were cultivated. The fortress served as the headquarters of the 'Grande Commanderie', which gave its name to the famous Cypriot dessert wine, Commandaria. The architecture of the castle is characterized by massive walls up to 1.25 meters thick and a well-preserved spiral staircase inside. Directly adjacent to the tower are the ruins of a 14th-century medieval sugar refinery, highlighting the economic prosperity of the region. Today, Kolossi is considered one of the best-preserved examples of military architecture from the Crusader period in Cyprus.",
      es: "El castillo de Kolossi es una antigua fortaleza de los cruzados situada en las afueras del pueblo de Kolossi, al oeste de Limasol. La actual casa-torre de tres pisos fue erigida en 1454 por el Gran Prior de los Caballeros de San Juan, Louis de Magnac, sobre las ruinas de un castillo anterior del siglo XIII. Kolossi tenía una gran importancia estratégica, ya que era el centro de las tierras más valiosas de la isla, donde se cultivaba caña de azúcar y vides. La fortaleza sirvió como sede de la 'Grande Commanderie', lo que dio nombre al famoso vino dulce chipriota Commandaria. La arquitectura del castillo se caracteriza por muros macizos de hasta 1,25 metros de espesor y una escalera de caracol bien conservada en su interior. Justo al lado de la torre se encuentran las ruinas de una refinería de azúcar medieval del siglo XIV, que subraya la prosperidad económica de la región. Hoy en día, Kolossi es considerado uno de los mejores ejemplos de arquitectura militar de la época de las cruzadas en Chipre.",
      pt: "O Castelo de Colossi é uma antiga fortaleza dos cruzados na periferia da aldeia de Colossi, a oeste de Limassol. A atual casa-torre de três andares foi construída em 1454 pelo Grão-Prior dos Hospitalários, Louis de Magnac, sobre as ruínas de um castelo mais antigo do século XIII. Colossi tinha grande importância estratégica, pois constituía o centro das terras mais valiosas da ilha, onde se cultivavam cana-de-açúcar e vinhas. A fortaleza serviu como sede da 'Grande Commanderie', o que deu o nome ao famoso vinho doce cipriota Commandaria. A arquitetura do castelo é caracterizada por paredes maciças com uma espessura de até 1,25 metros e uma escada em caracol bem preservada no interior. Mesmo ao lado da torre encontram-se as ruínas de uma refinaria de açúcar medieval do século XIV, que realça a prosperidade económica da região. Hoje, Colossi é considerado um dos exemplos mais bem preservados da arquitetura militar do tempo dos cruzados em Chipre.",
      fr: "Le château de Kolossi est une ancienne forteresse des croisés située à la sortie du village de Kolossi, à l'ouest de Limassol. L'actuelle tour d'habitation de trois étages a été érigée en 1454 par le Grand Prieur des Hospitaliers, Louis de Magnac, sur les ruines d'un château plus ancien datant du XIIIe siècle. Kolossi revêtait une grande importance stratégique car il se trouvait au centre des terres les plus précieuses de l'île, où l'on cultivait la canne à sucre et la vigne. La forteresse servait de quartier général à la 'Grande Commanderie', ce qui a donné son nom au célèbre vin doux chypriote, le Commandaria. L'architecture du château se caractérise par des murs massifs atteignant 1,25 mètre d'épaisseur et un escalier en colimaçon bien conservé à l'intérieur. Juste à côté de la tour se trouvent les ruines d'une raffinerie de sucre médiévale du XIVe siècle, soulignant la prospérité économique de la région. Aujourd'hui, Kolossi est considéré comme l'un des exemples les mieux préservés d'architecture militaire de l'époque des croisés à Chypre.",
    },
    factsAdvanced: {
      de: ["Die ursprüngliche Burg wurde 1210 von König Hugo I. erbaut.", "Die Burgmauern sind im Erdgeschoss 1,25 Meter dick.", "Der Wohnturm ist 21 Meter hoch und hat eine Grundfläche von 15 x 13,5 Metern.", "In der Nähe befindet sich eine Zuckermühle aus dem 14. Jahrhundert.", "Die Templer besaßen die Burg kurzzeitig zwischen 1306 und 1313.", "Über dem Eingang befindet sich das Wappen des Louis de Magnac."],
      hu: ["Az eredeti várat 1210-ben I. Hugó király építtette.", "A vár falainak vastagsága a földszinten eléri az 1,25 métert.", "A lakótorony 21 méter magas, alapterülete 15 x 13,5 méter.", "A vár mellett egy 14. századi cukornád-feldolgozó üzem romjai állnak.", "A templomos lovagok rövid ideig, 1306 és 1313 között birtokolták.", "A bejárat felett Louis de Magnac nagymester címere látható."],
      ro: ["Castelul original a fost construit în 1210 de regele Hugo I.", "Zidurile castelului au o grosime de 1,25 metri la parter.", "Turnul are o înălțime de 21 de metri și o bază de 15 x 13,5 metri.", "În apropiere se află o moară de zahăr datând din secolul al XIV-lea.", "Cavalerii Templieri au deținut castelul pentru scurt timp între 1306 și 1313.", "Deasupra intrării se află blazonul lui Louis de Magnac."],
      en: ["The original castle was built in 1210 by King Hugh I.", "The castle walls are 1.25 meters thick at the ground level.", "The tower is 21 meters high with a base of 15 x 13.5 meters.", "A 14th-century sugar mill is located adjacent to the castle.", "The Knights Templar briefly owned the castle between 1306 and 1313.", "The coat of arms of Louis de Magnac is visible above the entrance."],
      es: ["El castillo original fue construido en 1210 por el rey Hugo I.", "Los muros del castillo tienen 1,25 metros de espesor en la planta baja.", "La torre residencial tiene 21 metros de altura y una base de 15 x 13,5 metros.", "Cerca se encuentra un molino de azúcar del siglo XIV.", "Los Templarios poseyeron el castillo brevemente entre 1306 y 1313.", "Sobre la entrada se encuentra el escudo de armas de Louis de Magnac."],
      pt: ["O castelo original foi construído em 1210 pelo Rei Hugo I.", "As muralhas do castelo têm 1,25 metros de espessura no rés-do-chão.", "A torre de habitação tem 21 metros de altura e uma base de 15 x 13,5 metros.", "Nas proximidades encontra-se um engenho de açúcar do século XIV.", "Os Templários possuíram o castelo por pouco tempo entre 1306 e 1313.", "Sobre a entrada encontra-se o brasão de Louis de Magnac."],
      fr: ["Le château d'origine a été construit en 1210 par le roi Hugues Ier.", "Les murs du château font 1,25 mètre d'épaisseur au rez-de-chaussée.", "La tour d'habitation mesure 21 mètres de haut pour une base de 15 x 13,5 mètres.", "Une sucrerie du XIVe siècle se trouve à proximité.", "Les Templiers ont brièvement possédé le château entre 1306 et 1313.", "Les armoiries de Louis de Magnac figurent au-dessus de l'entrée."],
    }, image: "/poi-images/cy-kolossi.webp",
    facts: {
      de: ["Erbaut im 13. Jahrhundert", "Sitz der Johanniter-Ritter", "Zentrum der Weinproduktion", "21 Meter hoher Wohnturm"],
      hu: ["A 13. században épült vár", "A johannita lovagok központja", "Híres a Commandaria borról", "21 méter magas toronnyal rendelkezik"],
      ro: ["Construit în secolul al XIII-lea", "Sediu al Cavalerilor Ioaniți", "Originea vinului Commandaria", "Turnul are 21 de metri înălțime"],
      en: ["Built in the 13th century", "Knights Hospitaller commandery", "Birthplace of Commandaria wine", "Three-story square keep structure"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-hala-sultan",
    type: "historical",
    parent: "CY-001",
    coords: [33.6083, 34.8856],
    name: { de: "Hala Sultan Tekke", hu: "Hala Szultan Tekke", ro: "Hala Sultan Tekke", en: "Hala Sultan Tekke" },
    description: {
      de: "Bedeutende islamische Pilgerstätte am Salzsee von Larnaca.",
      hu: "Jelentős iszlám zarándokhely a lárnakai Sós-tó partján.",
      ro: "Un important loc de pelerinaj islamic pe malul Lacului Sărat din Larnaca.",
      en: "A prominent Islamic pilgrimage site located on the Larnaca Salt Lake.",
      es: "Importante lugar de peregrinación islámica junto al lago salado de Larnaca.",
      pt: "Importante local de peregrinação islâmica junto ao lago salgado de Larnaca.",
      fr: "Important lieu de pèlerinage islamique au bord du lac salé de Larnaca.",
    },
    descriptionAdvanced: {
      de: "Hala Sultan Tekke, auch bekannt als Moschee von Umm Haram, ist eine bedeutende muslimische Kultstätte am Ufer des Salzsees von Larnaka. Sie gilt als eines der wichtigsten Heiligtümer des Islam weltweit, da sie über dem Grab von Umm Haram errichtet wurde, die laut Überlieferung eine Verwandte oder Begleiterin des Propheten Mohammed war. Sie verstarb im Jahr 647 während der ersten arabischen Invasion Zyperns nach einem Sturz von ihrem Maultier. Das heutige Moscheengebäude wurde 1816 unter der Herrschaft des osmanischen Gouverneurs von Zypern fertiggestellt und ist von einem prächtigen Garten umgeben. Der Komplex umfasst neben der Moschee auch Wohngebäude für Pilger und Geistliche sowie ein Mausoleum. Die Lage am Salzsee macht den Ort besonders im Winter zu einem Ort von natürlicher Schönheit, wenn Tausende von Flamingos den See besuchen. Die Tekke ist ein Symbol für die lange islamische Geschichte der Insel und bleibt ein aktiver Ort des Gebets und der Wallfahrt.",
      hu: "Hala Sultan Tekke, más néven Umm Haram mecset, egy jelentős muzulmán kegyhely a larnakai sóstó partján. Az iszlám világ egyik legfontosabb szentélyeként tartják számon, mivel Umm Haram sírja felett épült, aki a hagyomány szerint Mohamed próféta rokona vagy közeli kísérője volt. Umm Haram 647-ben, Ciprus első arab inváziója során vesztette életét, miután leesett az öszvéréről. A mecset mai épületét 1816-ban fejezték be az oszmán kormányzó idején, és egy gyönyörűen gondozott kert veszi körül. A komplexum a mecseten kívül zarándokok és papok számára kialakított lakóépületeket, valamint egy mauzóleumot is magában foglal. A sóstó partján fekvő helyszín különösen télen nyújt látványos képet, amikor több ezer flamingó pihen meg a vízen. A Tekke a sziget hosszú iszlám történelmének szimbóluma, és ma is aktív imahelyként és zarándoklatok célpontjaként szolgál.",
      ro: "Hala Sultan Tekke, cunoscută și sub numele de Moscheea lui Umm Haram, este un loc de cult musulman semnificativ situat pe malul Lacului Sărat din Larnaca. Este considerat unul dintre cele mai importante sanctuare ale islamului la nivel mondial, fiind construit deasupra mormântului lui Umm Haram, care, conform tradiției, a fost o rudă sau o însoțitoare a profetului Mahomed. Ea a murit în anul 647, în timpul primei invazii arabe în Cipru, după ce a căzut de pe catârul său. Actuala clădire a moscheii a fost finalizată în 1816 sub dominația guvernatorului otoman al Ciprului și este înconjurată de o grădină luxuriantă. Complexul include, pe lângă moschee, locuințe pentru pelerini și clerici, precum și un mausoleu. Locația de pe malul Lacului Sărat face ca acest loc să fie de o frumusețe naturală deosebită, în special iarna, când mii de flamingi vizitează lacul. Tekke rămâne un simbol al istoriei islamice îndelungate a insulei și un loc activ de rugăciune și pelerinaj.",
      en: "Hala Sultan Tekke, also known as the Mosque of Umm Haram, is a prominent Muslim place of worship situated on the shores of the Larnaca Salt Lake. It is regarded as one of the holiest shrines in Islam, as it was built over the tomb of Umm Haram, who according to tradition was a relative or companion of the Prophet Muhammad. She died in 647 AD during the first Arab invasion of Cyprus after falling from her mule. The current mosque building was completed in 1816 under the rule of the Ottoman governor of Cyprus and is surrounded by a magnificent garden. The complex includes the mosque, residential quarters for pilgrims and clergy, and a mausoleum. Its location by the salt lake makes it a site of exceptional natural beauty, particularly in winter when thousands of flamingos visit the lake. The Tekke serves as a symbol of the island's long Islamic history and remains an active place of prayer and pilgrimage for visitors from around the world.",
      es: "Hala Sultan Tekke, también conocida como la mezquita de Umm Haram, es un importante lugar de culto musulmán a orillas del lago salado de Larnaca. Es considerada uno de los santuarios más importantes del Islam en el mundo, ya que fue erigida sobre la tumba de Umm Haram, quien según la tradición era pariente o compañera del profeta Mahoma. Murió en el año 647 durante la primera invasión árabe de Chipre tras caer de su mula. El edificio actual de la mezquita se completó en 1816 bajo el dominio del gobernador otomano de Chipre y está rodeado por un magnífico jardín. El complejo incluye, además de la mezquita, edificios residenciales para peregrinos y clérigos, así como un mausoleo. Su ubicación junto al lago salado lo convierte en un lugar de belleza natural, especialmente en invierno, cuando miles de flamencos visitan el lago. La Tekke es un símbolo de la larga historia islámica de la isla y sigue siendo un lugar activo de oración y peregrinación.",
      pt: "Hala Sultan Tekke, também conhecida como Mesquita de Umm Haram, é um importante local de culto muçulmano nas margens do lago salgado de Larnaca. É considerado um dos santuários mais importantes do Islão em todo o mundo, pois foi construído sobre o túmulo de Umm Haram, que segundo a tradição era parente ou companheira do Profeta Maomé. Faleceu no ano 647, durante a primeira invasão árabe de Chipre, após uma queda da sua mula. O atual edifício da mesquita foi concluído em 1816, sob o domínio do governador otomano de Chipre, e está rodeado por um magnífico jardim. O complexo inclui, além da mesquita, edifícios residenciais para peregrinos e clérigos, bem como um mausoléu. A localização junto ao lago salgado torna o local de uma beleza natural particular no inverno, quando milhares de flamingos visitam o lago. A Tekke é um símbolo da longa história islâmica da ilha e continua a ser um local ativo de oração e peregrinação.",
      fr: "Hala Sultan Tekke, également connue sous le nom de mosquée d'Oumm Haram, est un lieu de culte musulman majeur situé sur les rives du lac salé de Larnaca. Elle est considérée comme l'un des sanctuaires les plus importants de l'islam au monde, car elle a été érigée sur la tombe d'Oumm Haram qui, selon la tradition, était une parente ou une compagne du prophète Mahomet. Elle est décédée en 647 lors de la première invasion arabe de Chypre après une chute de sa mule. Le bâtiment actuel de la mosquée a été achevé en 1816 sous le règne du gouverneur ottoman de Chypre et est entouré d'un magnifique jardin. Le complexe comprend, outre la mosquée, des bâtiments résidentiels pour les pèlerins et le clergé ainsi qu'un mausolée. Sa situation au bord du lac salé en fait un lieu d'une beauté naturelle exceptionnelle, surtout en hiver lorsque des milliers de flamants roses s'y rassemblent. La Tekke est un symbole de la longue histoire islamique de l'île et demeure un lieu de prière et de pèlerinage actif.",
    },
    factsAdvanced: {
      de: ["Das Heiligtum wurde über dem Grab von Umm Haram errichtet.", "Umm Haram starb im Jahr 647 nach einem Sturz vom Maultier.", "Das heutige Gebäude wurde im Jahr 1816 im osmanischen Stil erbaut.", "Der Komplex wurde im Jahr 2002 umfassend restauriert.", "In der Nähe wurden Siedlungsreste aus dem Jahr 1100 v. Chr. gefunden.", "Die Moschee wird oft als das viertwichtigste Heiligtum des Islam bezeichnet."],
      hu: ["A szentély Umm Haram sírhelye felett épült fel.", "Umm Haram 647-ben halt meg, miután leesett öszvéréről egy arab támadáskor.", "A jelenlegi mecsetépület 1816-ban készült el oszmán stílusban.", "A komplexumot 2002-ben teljes körűen restaurálták.", "A közelben Krisztus előtt 1100-ból származó településnyomokat találtak.", "A mecsetet gyakran az iszlám negyedik legfontosabb szentélyeként említik."],
      ro: ["Sanctuarul a fost ridicat deasupra mormântului lui Umm Haram.", "Umm Haram a murit în anul 647 după o cădere accidentală de pe catâr.", "Actuala clădire a fost construită în stil otoman în anul 1816.", "Complexul a fost restaurat integral în anul 2002.", "În apropiere s-au găsit resturi ale unei așezări din anul 1100 î.Hr.", "Moscheea este adesea citată ca al patrulea cel mai sfânt loc al islamului."],
      en: ["The shrine was built over the burial site of Umm Haram.", "Umm Haram died in 647 AD following a fall from her mule.", "The current building was constructed in 1816 in Ottoman style.", "The complex underwent extensive restoration in 2002.", "Remains of a settlement from 1100 BC were discovered nearby.", "The mosque is often cited as the fourth holiest site in Islam."],
      es: ["El santuario fue construido sobre la tumba de Umm Haram.", "Umm Haram murió en el año 647 tras caerse de una mula.", "El edificio actual fue construido en 1816 en estilo otomano.", "El complejo fue restaurado integralmente en el año 2002.", "Cerca se encontraron restos de un asentamiento del año 1100 a.C.", "La mezquita es a menudo citada como el cuarto santuario más importante del Islam."],
      pt: ["O santuário foi construído sobre o túmulo de Umm Haram.", "Umm Haram morreu no ano 647 após uma queda de mula.", "O atual edifício foi construído em 1816 em estilo otomano.", "O complexo foi extensamente restaurado no ano 2002.", "Nas proximidades foram encontrados restos de povoamento de 1100 a.C.", "A mesquita é frequentemente citada como o quarto santuário mais importante do Islão."],
      fr: ["Le sanctuaire a été érigé sur la tombe d'Oumm Haram.", "Oumm Haram est décédée en 647 après une chute de mule.", "Le bâtiment actuel a été construit en 1816 dans le style ottoman.", "Le complexe a été entièrement restauré en 2002.", "Des vestiges d'habitations datant de 1100 av. J.-C. ont été trouvés à proximité.", "La mosquée est souvent citée comme le quatrième lieu saint de l'islam."],
    }, image: "/poi-images/cy-hala-sultan.webp",
    facts: {
      de: ["Baujahr im Jahr 1816", "Grabstätte von Umm Haram", "Direkt am Larnaka Salzsee", "Viertwichtigste Stätte des Islams"],
      hu: ["1816-ban épült a mecset", "Umm Haram nyughelye", "Lárnaka repülőtere közelében", "Zarándokhely Ciprus szigetén"],
      ro: ["Construită în anul 1816", "Mormântul lui Umm Haram", "Lângă lacul sărat Larnaca", "Loc de pelerinaj musulman"],
      en: ["Built in the year 1816", "Tomb of Umm Haram inside", "Located near Larnaca airport", "Major Islamic shrine in Cyprus"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-kykkos", "sights": {
      "de": [
            {
                  "name": "Kykkos Museum",
                  "text": "Ein Museum im Komplex des Kykkos-Klosters, das religiöse Artefakte ausstellt.",
                  "category": "museum",
                  "coords": [
                        32.740228,
                        34.983672
                  ]
            },
            {
                  "name": "Kloster Kykkos",
                  "text": "Eines der reichsten und berühmtesten Klöster Zyperns im Troodos-Gebirge.",
                  "category": "landmark",
                  "coords": [
                        32.741232,
                        34.98388
                  ]
            },
            {
                  "name": "Aspro Xylo 1010m",
                  "text": "Ein malerischer Aussichtspunkt auf 1010 Metern Höhe in der Nähe des Kykkos-Klosters.",
                  "category": "natural",
                  "coords": [
                        32.762639,
                        34.982208
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Kykkos Museum",
                  "text": "A Kykkos-kolostor komplexumában található múzeum, amely vallási tárgyakat mutat be.",
                  "category": "museum",
                  "coords": [
                        32.740228,
                        34.983672
                  ]
            },
            {
                  "name": "Iera Mone Kukkou",
                  "text": "Ciprus egyik leggazdagabb és leghíresebb kolostora a Troodos-hegységben.",
                  "category": "landmark",
                  "coords": [
                        32.741232,
                        34.98388
                  ]
            },
            {
                  "name": "Aspro Xylo 1010m",
                  "text": "Festői kilátóhely 1010 méteres magasságban a Kykkos-kolostor közelében.",
                  "category": "natural",
                  "coords": [
                        32.762639,
                        34.982208
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Kykkos Museum",
                  "text": "Un muzeu din cadrul complexului mănăstirii Kykkos care expune artefacte religioase.",
                  "category": "museum",
                  "coords": [
                        32.740228,
                        34.983672
                  ]
            },
            {
                  "name": "Iera Mone Kukkou",
                  "text": "Una dintre cele mai bogate și renumite mănăstiri din Cipru, situată în Munții Troodos.",
                  "category": "landmark",
                  "coords": [
                        32.741232,
                        34.98388
                  ]
            },
            {
                  "name": "Aspro Xylo 1010m",
                  "text": "Un punct de belvedere pitoresc situat la o altitudine de 1010 metri lângă mănăstirea Kykkos.",
                  "category": "natural",
                  "coords": [
                        32.762639,
                        34.982208
                  ]
            }
      ],
      "en": [
            {
                  "name": "Kykkos Museum",
                  "text": "A museum within the Kykkos Monastery complex displaying religious artifacts.",
                  "category": "museum",
                  "coords": [
                        32.740228,
                        34.983672
                  ]
            },
            {
                  "name": "Kykkos Monastery",
                  "text": "One of the wealthiest and most famous monasteries in Cyprus, located in the Troodos Mountains.",
                  "category": "landmark",
                  "coords": [
                        32.741232,
                        34.98388
                  ]
            },
            {
                  "name": "Aspro Xylo 1010m",
                  "text": "A scenic viewpoint located at an altitude of 1010 meters near the Kykkos Monastery.",
                  "category": "natural",
                  "coords": [
                        32.762639,
                        34.982208
                  ]
            }
      ]
},
    type: "historical",
    parent: "CY-003",
    coords: [32.7400, 34.9800],
    name: { de: "Kykkos-Kloster", hu: "Kykkos-kolostor", ro: "Mănăstirea Kykkos", en: "Kykkos Monastery" },
    description: {
      de: "Das reichste und bekannteste Kloster Zyperns im Troodos-Gebirge.",
      hu: "Ciprus leggazdagabb és legismertebb kolostora a Troodos-hegységben.",
      ro: "Cea mai bogată și cunoscută mănăstire din Cipru, situată în munții Troodos.",
      en: "The wealthiest and best-known monastery in Cyprus, located in the Troodos Mountains.",
      es: "El monasterio más rico y famoso de Chipre en las montañas de Troodos.",
      pt: "O mosteiro mais rico e famoso de Chipre, nas montanhas de Troodos.",
      fr: "Le monastère le plus riche et le plus célèbre de Chypre dans les montagnes du Troodos.",
    },
    descriptionAdvanced: {
      de: "Das Kykkos-Kloster ist das prächtigste und wohlhabendste Kloster Zyperns und liegt in den nordwestlichen Ausläufern des Troodos-Gebirges auf einer Höhe von 1.318 Metern. Es wurde Ende des 11. Jahrhunderts vom byzantinischen Kaiser Alexios I. Komnenos gegründet. Das Kloster beherbergt eine der drei Ikonen, die dem Evangelisten Lukas zugeschrieben werden und die Jungfrau Maria darstellen sollen. Aufgrund zahlreicher Brände stammen die heutigen Gebäude hauptsächlich aus dem 18. und 19. Jahrhundert, während die Innenräume der Kirche mit prachtvollen Fresken und Mosaiken im spätbyzantinischen Stil geschmückt sind. Kykkos spielte eine zentrale Rolle im Widerstand gegen die britische Kolonialherrschaft, und der erste Präsident Zyperns, Erzbischof Makarios III., diente hier als Novize. Sein Grab befindet sich unweit des Klosters auf dem Berggipfel Throni. Der Klosterkomplex verfügt zudem über ein bedeutendes Museum mit einer umfangreichen Sammlung kirchlicher Kunstschätze, Goldgegenstände und antiker Handschriften.",
      hu: "A Kykkos-kolostor Ciprus leggazdagabb és legpompásabb kolostora, amely a Troodos-hegység északnyugati lábánál, 1318 méteres magasságban található. A kolostort a 11. század végén alapította I. Alexiosz Komnénosz bizánci császár. Itt őrzik a Szűz Máriát ábrázoló három ikon egyikét, amelyet a hagyomány szerint Szent Lukács evangélista festett. A számos tűzvész miatt a mai épületek többsége a 18. és 19. századból származik, a templom belső tereit pedig késő bizánci stílusú, lenyűgöző freskók és mozaikok díszítik. Kykkos központi szerepet játszott a brit gyarmati uralom elleni ellenállásban, és itt kezdte pályafutását novíciusként Ciprus első elnöke, III. Makariosz érsek is. Sírja nem messze a kolostortól, a Throni-hegycsúcson található. A kolostorkomplexum egy jelentős múzeumnak is otthont ad, amely egyházi kincsek, aranytárgyak és ősi kéziratok gazdag gyűjteményét mutatja be.",
      ro: "Mănăstirea Kykkos este cea mai bogată și fastuoasă mănăstire din Cipru, situată în contraforturile nord-vestice ale munților Troodos, la o altitudine de 1.318 metri. A fost fondată la sfârșitul secolului al XI-lea de împăratul bizantin Alexios I Komnenos. Mănăstirea adăpostește una dintre cele trei icoane atribuite Evanghelistului Luca, care o înfățișează pe Fecioara Maria. Din cauza numeroaselor incendii, clădirile actuale datează în principal din secolele XVIII și XIX, în timp ce interioarele bisericii sunt decorate cu fresce și mozaicuri magnifice în stil post-bizantin. Kykkos a jucat un rol central în rezistența împotriva dominației coloniale britanice, iar primul președinte al Ciprului, Arhiepiscopul Makarios al III-lea, și-a început aici viața monahală ca novice. Mormântul său se află nu departe de mănăstire, pe vârful muntelui Throni. Complexul monahal dispune și de un muzeu important, cu o colecție vastă de obiecte de artă ecleziastică, aurărie și manuscrise vechi.",
      en: "Kykkos Monastery is the wealthiest and most lavish monastery in Cyprus, situated in the northwestern Troodos Mountains at an altitude of 1,318 meters. It was founded at the end of the 11th century by the Byzantine Emperor Alexios I Komnenos. The monastery houses one of the three icons attributed to Saint Luke the Evangelist, which is said to depict the Virgin Mary. Due to several devastating fires, the current buildings date mostly from the 18th and 19th centuries, while the interior of the church is adorned with magnificent frescoes and mosaics in late Byzantine style. Kykkos played a pivotal role in the resistance against British colonial rule, and the first President of Cyprus, Archbishop Makarios III, served here as a novice. His tomb is located near the monastery on the mountain peak of Throni. The monastery complex also features an important museum with an extensive collection of ecclesiastical treasures, gold artifacts, and ancient manuscripts.",
      es: "El Monasterio de Kykkos es el más magnífico y próspero de Chipre, situado en las estribaciones del noroeste de las montañas de Troodos a una altitud de 1.318 metros. Fue fundado a finales del siglo XI por el emperador bizantino Alejo I Comneno. El monasterio alberga uno de los tres iconos atribuidos al evangelista Lucas que se dice representan a la Virgen María. Debido a numerosos incendios, los edificios actuales datan principalmente de los siglos XVIII y XIX, mientras que los interiores de la iglesia están decorados con espléndidos frescos y mosaicos de estilo tardobizantino. Kykkos desempeñó un papel central en la resistencia contra el dominio colonial británico, y el primer presidente de Chipre, el arzobispo Makarios III, sirvió aquí como novicio. Su tumba se encuentra no lejos del monasterio, en la cima de la montaña Throni. El complejo monástico cuenta además con un importante museo con una extensa colección de tesoros artísticos eclesiásticos, objetos de oro y manuscritos antiguos.",
      pt: "O Mosteiro de Kykkos é o mais magnífico e rico de Chipre, situado nas encostas noroeste das montanhas de Troodos, a uma altitude de 1.318 metros. Foi fundado no final do século XI pelo imperador bizantino Aleixo I Comneno. O mosteiro abriga um dos três ícones atribuídos ao evangelista Lucas e que se diz representar a Virgem Maria. Devido a inúmeros incêndios, os edifícios atuais datam principalmente dos séculos XVIII e XIX, enquanto o interior da igreja está decorado com frescos e mosaicos magníficos em estilo tardo-bizantino. Kykkos desempenhou um papel central na resistência contra o domínio colonial britânico, e o primeiro presidente de Chipre, o Arcebispo Makarios III, serviu aqui como noviço. O seu túmulo encontra-se perto do mosteiro, no topo da montanha Throni. O complexo monástico possui também um museu importante com uma vasta coleção de tesouros artísticos eclesiásticos, objetos de ouro e manuscritos antigos.",
      fr: "Le monastère de Kykkos est le plus somptueux et le plus riche de Chypre, situé sur les contreforts nord-ouest des monts Troodos à une altitude de 1 318 mètres. Il a été fondé à la fin du XIe siècle par l'empereur byzantin Alexis Ier Comnène. Le monastère abrite l'une des trois icônes attribuées à l'évangéliste Luc et censées représenter la Vierge Marie. Suite à de nombreux incendies, les bâtiments actuels datent principalement des XVIIIe et XIXe siècles, tandis que les intérieurs de l'église sont ornés de fresques et de mosaïques splendides de style byzantin tardif. Kykkos a joué un rôle central dans la résistance contre la domination coloniale britannique, et le premier président de Chypre, l'archevêque Makarios III, y fut novice. Sa tombe se trouve non loin du monastère, sur le sommet de la montagne Throni. Le complexe monastique possède également un musée important abritant une vaste collection de trésors artistiques ecclésiastiques, d'objets en or et de manuscrits anciens.",
    },
    factsAdvanced: {
      de: ["Das Kloster wurde um das Jahr 1092 gegründet.", "Es beherbergt eine silberbeschlagene Ikone der Jungfrau Maria.", "Erzbischof Makarios III. wurde hier im Jahr 1926 Novize.", "Das Kloster liegt auf einer Höhe von 1.318 Metern über dem Meeresspiegel.", "Der Komplex wurde nach Bränden in den Jahren 1365 und 1541 neu aufgebaut.", "Das angeschlossene Museum wurde im Jahr 1995 eröffnet."],
      hu: ["A kolostort 1092 körül alapították.", "Itt őrzik a Szűz Mária ezüsttel borított csodatevő ikonját.", "III. Makariosz érsek 1926-ban lett itt novícius.", "A kolostor 1318 méteres tengerszint feletti magasságban fekszik.", "Az épületeket az 1365-ös és az 1541-es tűzvész után újjáépítették.", "A kolostor területén működő múzeum 1995-ben nyílt meg."],
      ro: ["Mănăstirea a fost fondată în jurul anului 1092.", "Adăpostește o icoană a Fecioarei Maria acoperită cu argint.", "Arhiepiscopul Makarios III a devenit novice aici în 1926.", "Mănăstirea este situată la o altitudine de 1.318 metri.", "Complexul a fost reconstruit după incendii în 1365 și 1541.", "Muzeul atașat mănăstirii a fost deschis în anul 1995."],
      en: ["The monastery was founded around the year 1092.", "It houses a silver-covered miraculous icon of the Virgin Mary.", "Archbishop Makarios III became a novice here in 1926.", "The monastery is located at an altitude of 1,318 meters.", "The complex was rebuilt after fires in 1365 and 1541.", "The on-site museum was officially opened in 1995."],
      es: ["El monasterio fue fundado alrededor del año 1092.", "Alberga un icono de la Virgen María recubierto de plata.", "El arzobispo Makarios III se convirtió aquí en novicio en 1926.", "El monasterio se encuentra a una altitud de 1.318 metros sobre el nivel del mar.", "El complejo fue reconstruido tras incendios en los años 1365 y 1541.", "El museo anexo fue inaugurado en el año 1995."],
      pt: ["O mosteiro foi fundado por volta do ano 1092.", "Abriga um ícone da Virgem Maria revestido a prata.", "O Arcebispo Makarios III tornou-se noviço aqui em 1926.", "O mosteiro situa-se a uma altitude de 1.318 metros acima do nível do mar.", "O complexo foi reconstruído após incêndios nos anos 1365 e 1541.", "O museu anexo foi inaugurado no ano 1995."],
      fr: ["Le monastère a été fondé vers l'an 1092.", "Il abrite une icône de la Vierge Marie recouverte d'argent.", "L'archevêque Makarios III y fut novice en 1926.", "Le monastère est situé à 1 318 mètres d'altitude.", "Le complexe a été reconstruit après des incendies en 1365 et 1541.", "Le musée attenant a été ouvert en 1995."],
    }, image: "/poi-images/cy-kykkos.webp",
    facts: {
      de: ["Gründung im 11. Jahrhundert", "Marienikone des Lukas", "Höhe von 1318 Metern", "Grab von Erzbischof Makarios III."],
      hu: ["A 11. század végén alapították", "Szent Lukács Mária-ikonja", "1318 méterrel a tengerszint felett", "Makariosz érsek sírhelye itt van"],
      ro: ["Fondată în secolul al XI-lea", "Icoana Maicii Domnului de Sf. Luca", "Situată la 1318 metri altitudine", "Mormântul Arhiepiscopului Makarios III"],
      en: ["Founded in the late 11th century", "Icon painted by Apostle Luke", "Altitude of 1318 meters", "Burial site of Makarios III"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-salamis", "sights": {"de": [{"name": "Silver Beach", "text": "Silberfarbene Sandkörner säumen diese ruhige zyprische Küste unweit der Ruinen von Salamis. Die einzigartige Kombination aus endlosem Meer und reicher Historie verleiht der Bucht eine fast schon magische Gelassenheit. Nach einem Gang durch die Antike entspannt man fabelhaft am Ufer, genießt die Sonne oder wagt einen Sprung ins Wasser. Packen Sie Ihre Badesachen ein, um den Tag hier perfekt ausklingen zu lassen.", "category": "recreational", "coords": [33.909283, 35.171205]}], "hu": [{"name": "Silver Beach", "text": "Ezüstszínű homokszemek övezik ezt a csendes ciprusi partot, nem messze Szalamisz romjaitól. A végtelen tenger és a gazdag történelem egyedülálló kombinációja szinte már varázslatos nyugalmat kölcsönöz az öbölnek. Az ókorban tett séta után az ember mesésen ellazul a parton, élvezi a napot, vagy megkockáztat egy ugrást a vízbe. Csomagolja be a fürdőruháját, hogy itt tökéletesen zárhassa a napot.", "category": "recreational", "coords": [33.909283, 35.171205]}], "ro": [{"name": "Silver Beach", "text": "Boabe de nisip de culoare argintie mărginesc această coastă cipriotă liniștită, nu departe de ruinele din Salamis. Combinația unică de mare nesfârșită și istorie bogată conferă golfului o seninătate aproape magică. După o plimbare prin antichitate, vă puteți relaxa fabulos pe țărm, vă puteți bucura de soare sau puteți risca o săritură în apă. Împachetați-vă costumele de baie pentru a încheia ziua perfect aici.", "category": "recreational", "coords": [33.909283, 35.171205]}], "en": [{"name": "Silver Beach", "text": "Silver-colored grains of sand line this quiet Cypriot coast not far from the ruins of Salamis. The unique combination of the endless sea and rich history gives the bay an almost magical serenity. After a walk through antiquity, you can relax fabulously on the shore, enjoy the sun, or dare a jump into the water. Pack your swimwear to end the day perfectly here.", "category": "recreational", "coords": [33.909283, 35.171205]}]},
    type: "historical",
    parent: "CY-002",
    coords: [33.9011, 35.1836],
    name: { de: "Salamis", hu: "Szalamisz", ro: "Salamis", en: "Salamis" },
    description: {
      de: "Umfangreiche antike Ruinenstadt an der Ostküste Zyperns.",
      hu: "Kiterjedt ókori romváros Ciprus keleti partján.",
      ro: "Un oraș antic extins pe coasta de est a Ciprului.",
      en: "An extensive ancient ruined city on the east coast of Cyprus.",
      es: "Extensa ciudad antigua en ruinas en la costa este de Chipre.",
      pt: "Extensa cidade antiga em ruínas na costa leste de Chipre.",
      fr: "Vaste cité antique en ruines sur la côte est de Chypre.",
    },
    descriptionAdvanced: {
      de: "Salamis war über ein Jahrtausend lang die Hauptstadt Zyperns und ist heute eine der bedeutendsten archäologischen Stätten im Norden der Insel. Die antike Stadt liegt direkt an der Küste nördlich von Famagusta und wurde laut Legende von Teukros nach dem Trojanischen Krieg gegründet. Die Blütezeit erlebte Salamis unter römischer Herrschaft, wovon das beeindruckende Gymnasium mit seinen korinthischen Säulen und das große Theater zeugen, das einst 15.000 Zuschauern Platz bot. Im Stadtgebiet befinden sich zudem Überreste römischer Thermen mit komplexen Hypokaustum-Heizsystemen sowie frühchristliche Basiliken wie die des Heiligen Epiphanios. Infolge verheerender Erdbeben im 4. Jahrhundert und nachfolgender arabischer Überfälle im 7. Jahrhundert wurde die Stadt schließlich aufgegeben. Die Bewohner siedelten nach Famagusta um, wobei viele Steine aus Salamis als Baumaterial für die neue Stadt dienten. Die Ausgrabungen geben heute einen faszinierenden Einblick in das urbane Leben und die monumentale Architektur der römischen und byzantinischen Zeit.",
      hu: "Szalamisz több mint ezer éven át Ciprus fővárosa volt, és ma a sziget északi részének egyik legjelentősebb régészeti lelőhelye. Az ókori város Famagustától északra, közvetlenül a tengerparton fekszik, és a legenda szerint Teukrosz alapította a trójai háború után. Szalamisz virágkorát a római uralom alatt élte, amiről a lenyűgöző korinthoszi oszlopokkal díszített gümnaszion és a hatalmas, egykor 15 000 nézőt befogadó színház tanúskodik. A város területén római fürdők maradványai is megtalálhatók bonyolult fűtésrendszerekkel, valamint korai keresztény bazilikák romjai, mint például Szent Epiphaniosz bazilikája. A 4. századi pusztító földrengések és a 7. századi arab támadások után a várost végül elhagyták. A lakosok Famagustába költöztek, és Szalamisz köveinek nagy részét építőanyagként használták fel az új város kialakításához. A feltárások ma lenyűgöző betekintést nyújtanak a római és bizánci korszak városi életébe és monumentális építészetébe.",
      ro: "Salamis a fost capitala Ciprului timp de peste un mileniu și este astăzi unul dintre cele mai importante situri arheologice din nordul insulei. Orașul antic este situat direct pe coastă, la nord de Famagusta, și a fost fondat, conform legendei, de Teucros după Războiul Troian. Perioada de înflorire a orașului Salamis a avut loc sub dominație romană, fapt atestat de gimnaziul impresionant cu coloane corintice și de marele teatru, care avea o capacitate de 15.000 de spectatori. În zona urbană se găsesc și rămășițele băilor romane cu sisteme complexe de încălzire prin hipocaust, precum și bazilici creștine timpurii, cum ar fi cea a Sfântului Epifanie. În urma cutremurelor devastatoare din secolul al IV-lea și a atacurilor arabe ulterioare din secolul al VII-lea, orașul a fost în cele din urmă abandonat. Locuitorii s-au mutat la Famagusta, multe dintre pietrele din Salamis fiind folosite ca material de construcție pentru noul oraș. Săpăturile oferă astăzi o perspectivă fascinantă asupra vieții urbane și arhitecturii monumentale din epoca romană și bizantină.",
      en: "Salamis was the capital of Cyprus for over a millennium and is now one of the most significant archaeological sites in the northern part of the island. The ancient city is located directly on the coast north of Famagusta and was founded, according to legend, by Teucer after the Trojan War. Salamis experienced its golden age under Roman rule, as evidenced by the impressive gymnasium with its Corinthian columns and the large theater that once seated 15,000 spectators. Within the city area, there are remains of Roman baths with complex hypocaust heating systems as well as early Christian basilicas, such as that of Saint Epiphanius. Following devastating earthquakes in the 4th century and subsequent Arab raids in the 7th century, the city was eventually abandoned. The inhabitants relocated to Famagusta, with many stones from Salamis being used as building materials for the new city. Today, the excavations provide a fascinating insight into urban life and the monumental architecture of the Roman and Byzantine eras.",
      es: "Salamina fue la capital de Chipre durante más de un milenio y es hoy uno de los yacimientos arqueológicos más importantes del norte de la isla. La ciudad antigua se sitúa directamente en la costa, al norte de Famagusta, y según la leyenda fue fundada por Teucro tras la guerra de Troya. Salamina vivió su apogeo bajo el dominio romano, como atestiguan el impresionante gimnasio con sus columnas corintias y el gran teatro con capacidad para 15.000 espectadores. El área urbana alberga también restos de termas romanas con complejos sistemas de calefacción por hipocausto y basílicas paleocristianas como la de San Epifanio. Tras devastadores terremotos en el siglo IV e incursiones árabes en el VII, la ciudad fue finalmente abandonada. Los habitantes se trasladaron a Famagusta, utilizando piedras de Salamina como material de construcción para la nueva ciudad. Las excavaciones actuales ofrecen una visión fascinante de la vida urbana y la arquitectura monumental de las épocas romana y bizantina.",
      pt: "Salamina foi a capital de Chipre durante mais de um milénio e é hoje um dos sítios arqueológicos mais importantes no norte da ilha. A cidade antiga situa-se diretamente na costa, a norte de Famagusta, e, segundo a lenda, foi fundada por Teucro após a Guerra de Troia. Salamina viveu o seu apogeu sob o domínio romano, como testemunham o impressionante ginásio com as suas colunas coríntias e o grande teatro, que outrora tinha capacidade para 15.000 espetadores. Na área urbana encontram-se também vestígios de termas romanas com complexos sistemas de aquecimento por hipocausto, bem como basílicas paleocristãs, como a de Santo Epifânio. Na sequência de terramotos devastadores no século IV e subsequentes incursões árabes no século VII, a cidade foi finalmente abandonada. Os habitantes mudaram-se para Famagusta, utilizando muitas pedras de Salamina como material de construção para a nova cidade. As escavações oferecem hoje uma visão fascinante da vida urbana e da arquitetura monumental dos períodos romano e bizantino.",
      fr: "Salamine fut la capitale de Chypre pendant plus d'un millénaire et constitue aujourd'hui l'un des sites archéologiques les plus importants du nord de l'île. La cité antique est située directement sur la côte, au nord de Famagouste, et fut fondée selon la légende par Teucros après la guerre de Troie. Salamine connut son apogée sous la domination romaine, comme en témoignent l'impressionnant gymnase aux colonnes corinthiennes et le grand théâtre qui pouvait autrefois accueillir 15 000 spectateurs. Le site abrite également des vestiges de thermes romains dotés de systèmes de chauffage complexes par hypocauste, ainsi que des basiliques paléochrétiennes comme celle de Saint-Épiphane. À la suite de tremblements de terre dévastateurs au IVe siècle et d'incursions arabes au VIIe siècle, la ville fut finalement abandonnée. Les habitants s'installèrent à Famagouste, utilisant de nombreuses pierres de Salamine comme matériaux de construction pour la nouvelle cité. Les fouilles actuelles offrent un aperçu fascinant de la vie urbaine et de l'architecture monumentale des époques romaine et byzantine.",
    },
    factsAdvanced: {
      de: ["Gegründet im 11. Jahrhundert v. Chr. durch den Helden Teukros.", "Das antike Theater bot Platz für 15.000 Zuschauer.", "Die Stadt wurde 332 v. Chr. Teil des Reiches von Alexander dem Großen.", "Zwei schwere Erdbeben zerstörten die Stadt in den Jahren 332 und 342 n. Chr.", "Die Byzantiner nannten die Stadt zeitweise Constantia.", "Die Stadtmauer erstreckte sich über eine Länge von fast 4 Kilometern."],
      hu: ["A várost a Krisztus előtt 11. században alapította a hős Teukrosz.", "Az ókori színház befogadóképessége 15 000 fő volt.", "A város Krisztus előtt 332-ben Nagy Sándor birodalmának része lett.", "332-ben és 342-ben két súlyos földrengés rombolta le a várost.", "A bizánciak idején a város neve egy ideig Constantia volt.", "A városfalak hossza egykor megközelítette a 4 kilométert."],
      ro: ["Fondat în secolul al XI-lea î.Hr. de eroul legendar Teucros.", "Teatrul antic avea o capacitate de 15.000 de spectatori.", "Orașul a devenit parte a imperiului lui Alexandru cel Mare în 332 î.Hr.", "Două cutremure majore au distrus orașul în anii 332 și 342 d.Hr.", "Bizantinii au numit orașul Constantia pentru o perioadă de timp.", "Zidurile orașului se întindeau pe o lungime de aproape 4 kilometri."],
      en: ["Founded in the 11th century BC by the hero Teucer.", "The ancient theater had a seating capacity of 15,000.", "The city became part of Alexander the Great's empire in 332 BC.", "Two major earthquakes destroyed the city in 332 and 342 AD.", "The Byzantines temporarily renamed the city Constantia.", "The city walls once stretched for a length of nearly 4 kilometers."],
      es: ["Fundada en el siglo XI a.C. por el héroe Teucro.", "El teatro antiguo tenía capacidad para 15.000 espectadores.", "La ciudad pasó a formar parte del imperio de Alejandro Magno en 332 a.C.", "Dos fuertes terremotos destruyeron la ciudad en los años 332 y 342 d.C.", "Los bizantinos llamaron temporalmente a la ciudad Constantia.", "La muralla de la ciudad se extendía a lo largo de casi 4 kilómetros."],
      pt: ["Fundada no século XI a.C. pelo herói Teucro.", "O teatro antigo tinha capacidade para 15.000 espetadores.", "A cidade tornou-se parte do império de Alexandre, o Grande, em 332 a.C.", "Dois fortes terramotos destruíram a cidade nos anos 332 e 342 d.C.", "Os bizantinos chamaram temporariamente à cidade Constantia.", "A muralha da cidade estendia-se por um comprimento de quase 4 quilómetros."],
      fr: ["Fondée au XIe siècle av. J.-C. par le héros Teucros.", "Le théâtre antique pouvait accueillir 15 000 spectateurs.", "La ville fut intégrée à l'empire d'Alexandre le Grand en 332 av. J.-C.", "Deux séismes majeurs détruisirent la ville en 332 et 342 apr. J.-C.", "Les Byzantins renommèrent temporairement la ville Constantia.", "Le rempart de la ville s'étendait sur une longueur de près de 4 kilomètres."],
    }, image: "/poi-images/cy-salamis.webp",
    facts: {
      de: ["Ehemalige Hauptstadt Zyperns", "Großes römisches Theater", "Römische Thermen und Gymnasien", "Gegründet nach dem Trojanischen Krieg"],
      hu: ["Ciprus egykori fővárosa", "Hatalmas római színház", "Gimnázium és fürdők romjai", "A trójai háború után alapították"],
      ro: ["Fosta capitală a Ciprului", "Teatru roman impunător", "Ruine de băi și gimnaziu", "Fondat după Războiul Troian"],
      en: ["Ancient capital of the island", "Large Roman theater remains", "Complex of baths and gymnasium", "Founded by Teucer of Salamis"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-choirokoitia", "sights": {
      "de": [
            {
                  "name": "Ekklisiastiko Museio",
                  "text": "Ein kirchliches Museum in der Gemeinde Choirokoitia.",
                  "category": "museum",
                  "coords": [
                        33.322852,
                        34.781712
                  ]
            },
            {
                  "name": "Choirokoitia Remains",
                  "text": "Bedeutende Überreste einer jungsteinzeitlichen Siedlung auf Zypern.",
                  "category": "historical",
                  "coords": [
                        33.343599,
                        34.796851
                  ]
            },
            {
                  "name": "Reconstructed houses",
                  "text": "Rekonstruierte prähistorische Rundhäuser in Choirokoitia.",
                  "category": "museum",
                  "coords": [
                        33.345051,
                        34.79688
                  ]
            },
            {
                  "name": "Basketry Museum",
                  "text": "Ein Museum über die traditionelle Korbpflechterei in Choirokoitia.",
                  "category": "museum",
                  "coords": [
                        33.334553,
                        34.798901
                  ]
            },
            {
                  "name": "Golden Donkeys Farm",
                  "text": "Eine Besucherfarm zum Schutz zypriotischer Esel in Choirokoitia.",
                  "category": "landmark",
                  "coords": [
                        33.333837,
                        34.818042
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Ekklisiastiko Museio",
                  "text": "Egyházi múzeum Choirokoitia közösségében.",
                  "category": "museum",
                  "coords": [
                        33.322852,
                        34.781712
                  ]
            },
            {
                  "name": "Choirokoitia Remains",
                  "text": "Egy jelentős újkőkorszaki település maradványai Cipruson.",
                  "category": "historical",
                  "coords": [
                        33.343599,
                        34.796851
                  ]
            },
            {
                  "name": "Reconstructed houses",
                  "text": "Rekonstruált őskori kerek házak Choirokoitiában.",
                  "category": "museum",
                  "coords": [
                        33.345051,
                        34.79688
                  ]
            },
            {
                  "name": "Basketry Museum",
                  "text": "A hagyományos kosárfonást bemutató múzeum Choirokoitiában.",
                  "category": "museum",
                  "coords": [
                        33.334553,
                        34.798901
                  ]
            },
            {
                  "name": "Golden Donkeys Farm",
                  "text": "Látogatható farm a ciprusi szamarak védelmére Choirokoitiában.",
                  "category": "landmark",
                  "coords": [
                        33.333837,
                        34.818042
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Ekklisiastiko Museio",
                  "text": "Un muzeu ecleziastic în comunitatea Choirokoitia.",
                  "category": "museum",
                  "coords": [
                        33.322852,
                        34.781712
                  ]
            },
            {
                  "name": "Choirokoitia Remains",
                  "text": "Vestigii importante ale unei așezări neolitice din Cipru.",
                  "category": "historical",
                  "coords": [
                        33.343599,
                        34.796851
                  ]
            },
            {
                  "name": "Reconstructed houses",
                  "text": "Case circulare preistorice reconstruite în Choirokoitia.",
                  "category": "museum",
                  "coords": [
                        33.345051,
                        34.79688
                  ]
            },
            {
                  "name": "Basketry Museum",
                  "text": "Un muzeu despre împletirea tradițională a coșurilor în Choirokoitia.",
                  "category": "museum",
                  "coords": [
                        33.334553,
                        34.798901
                  ]
            },
            {
                  "name": "Golden Donkeys Farm",
                  "text": "O fermă vizitabilă pentru protejarea măgarilor ciprioți în Choirokoitia.",
                  "category": "landmark",
                  "coords": [
                        33.333837,
                        34.818042
                  ]
            }
      ],
      "en": [
            {
                  "name": "Ekklisiastiko Museio",
                  "text": "An ecclesiastical museum in the Choirokoitia community.",
                  "category": "museum",
                  "coords": [
                        33.322852,
                        34.781712
                  ]
            },
            {
                  "name": "Choirokoitia Remains",
                  "text": "Significant remains of a Neolithic settlement in Cyprus.",
                  "category": "historical",
                  "coords": [
                        33.343599,
                        34.796851
                  ]
            },
            {
                  "name": "Reconstructed houses",
                  "text": "Reconstructed prehistoric circular houses in Choirokoitia.",
                  "category": "museum",
                  "coords": [
                        33.345051,
                        34.79688
                  ]
            },
            {
                  "name": "Basketry Museum",
                  "text": "A museum about traditional basket weaving in Choirokoitia.",
                  "category": "museum",
                  "coords": [
                        33.334553,
                        34.798901
                  ]
            },
            {
                  "name": "Golden Donkeys Farm",
                  "text": "A visitor farm for the protection of Cypriot donkeys in Choirokoitia.",
                  "category": "landmark",
                  "coords": [
                        33.333837,
                        34.818042
                  ]
            }
      ]
},
    type: "historical",
    parent: "CY-001",
    coords: [33.3444, 34.7961],
    name: { de: "Choirokoitia", hu: "Khirokitia", ro: "Choirokoitia", en: "Choirokoitia" },
    description: {
      de: "Eine der wichtigsten prähistorischen Stätten im östlichen Mittelmeerraum (UNESCO).",
      hu: "A Földközi-tenger keleti medencéjének egyik legfontosabb történelem előtti lelőhelye (UNESCO).",
      ro: "Unul dintre cele mai importante situri preistorice din estul Mării Mediterane (UNESCO).",
      en: "One of the most important prehistoric sites in the eastern Mediterranean (UNESCO).",
      es: "Uno de los sitios prehistóricos más importantes del Mediterráneo oriental (UNESCO).",
      pt: "Um dos sítios pré-históricos mais importantes do Mediterrâneo Oriental (UNESCO).",
      fr: "L'un des sites préhistoriques les plus importants de la Méditerranée orientale (UNESCO).",
    },
    descriptionAdvanced: {
      de: "Choirokoitia ist eine archäologische Fundstätte im Bezirk Larnaka und gilt als eines der besterhaltenen Beispiele einer akeramischen neolithischen Siedlung im gesamten östlichen Mittelmeerraum. Die Siedlung stammt aus der Zeit zwischen dem 7. und 4. Jahrtausend v. Chr. und ist bekannt für ihre markanten zylindrischen Wohnhäuser aus Stein und Lehmziegeln. Diese runden Strukturen standen eng beieinander und waren durch eine massive Verteidigungsmauer geschützt. Ausgrabungen haben gezeigt, dass die Bewohner Ackerbau betrieben, Vieh züchteten und bereits fortgeschrittene Handwerkstechniken zur Herstellung von Steinwerkzeugen und Schmuck besaßen. Ein besonderes Merkmal der Siedlung ist die Bestattung der Toten unter den Fußböden der Häuser. Choirokoitia wurde 1998 in die Liste des UNESCO-Weltkulturerbes aufgenommen und bietet wichtige Erkenntnisse über die Entwicklung der ersten dauerhaften menschlichen Gemeinschaften auf der Insel. Vor Ort wurden einige der Rundhäuser rekonstruiert, um Besuchern ein lebendiges Bild des prähistorischen Lebens zu vermitteln.",
      hu: "Choirokoitia egy régészeti lelőhely Larnaka kerületében, amely az egész kelet-mediterrán térség egyik legjobb állapotban fennmaradt példája az akeramikus neolitikus településeknek. A település a Krisztus előtt 7. és 4. évezred közötti időszakból származik, és jellegzetes henger alakú, kőből és vályogtéglából épült lakóházairól ismert. Ezek a kerek építmények szorosan egymás mellett álltak, és egy masszív védőfal óvta őket. A feltárások kimutatták, hogy a lakók földműveléssel és állattenyésztéssel foglalkoztak, valamint fejlett kézműves technikákat alkalmaztak kőeszközök és ékszerek készítéséhez. A település különlegessége, hogy a halottakat a házak padlója alá temették. Choirokoitia 1998-ban került fel az UNESCO Világörökségi listájára, mivel alapvető információkat szolgáltat az első állandó emberi közösségek fejlődéséről a szigeten. A helyszínen több kerek házat is rekonstruáltak, hogy a látogatók képet kapjanak a történelem előtti életmódról.",
      ro: "Choirokoitia este un sit arheologic din districtul Larnaca și este considerat unul dintre cele mai bine conservate exemple de așezări neolitice aceramice din întreaga regiune a Mediteranei de Est. Așezarea datează din perioada cuprinsă între mileniile VII și IV î.Hr. și este cunoscută pentru locuințele sale cilindrice distinctive, construite din piatră și cărămizi de chirpici. Aceste structuri rotunde erau amplasate aproape una de alta și protejate de un zid defensiv masiv. Săpăturile au arătat că locuitorii practicau agricultura, creșterea animalelor și posedau tehnici avansate de meșteșugărit pentru fabricarea uneltelor de piatră și a bijuteriilor. O caracteristică specială a așezării este îngroparea morților sub podelele caselor. Choirokoitia a fost inclusă în patrimoniul mondial UNESCO în 1998 și oferă perspective importante asupra dezvoltării primelor comunități umane permanente de pe insulă. La fața locului au fost reconstruite câteva dintre casele rotunde pentru a oferi vizitatorilor o imagine vie a vieții preistorice.",
      en: "Choirokoitia is an archaeological site in the Larnaca district and is considered one of the best-preserved examples of an aceramic Neolithic settlement in the entire Eastern Mediterranean. The settlement dates from the period between the 7th and 4th millennia BC and is renowned for its distinctive cylindrical houses built of stone and mudbricks. These circular structures stood closely together and were protected by a massive defensive wall. Excavations have shown that the inhabitants practiced agriculture, raised livestock, and possessed advanced craftsmanship for producing stone tools and jewelry. A unique feature of the settlement is the burial of the deceased beneath the floors of the houses. Choirokoitia was added to the UNESCO World Heritage list in 1998, providing vital insights into the evolution of the first permanent human communities on the island. Several of the roundhouses have been reconstructed on-site to give visitors a vivid representation of prehistoric life.",
      es: "Choirokoitia es un yacimiento arqueológico en el distrito de Larnaca y se considera uno de los ejemplos mejor conservados de un asentamiento neolítico acerámico en todo el Mediterráneo oriental. El asentamiento data de entre los milenios VII y IV a.C. y es conocido por sus distintivas casas cilíndricas de piedra y ladrillo de barro. Estas estructuras redondas estaban muy juntas y protegidas por una muralla defensiva masiva. Las excavaciones han demostrado que los habitantes practicaban la agricultura, criaban ganado y poseían técnicas artesanales avanzadas para fabricar herramientas de piedra y joyas. Una característica especial del asentamiento es el entierro de los muertos bajo los suelos de las casas. Choirokoitia fue incluida en la lista del Patrimonio de la Humanidad de la UNESCO en 1998 y ofrece información importante sobre el desarrollo de las primeras comunidades humanas permanentes en la isla. Algunas casas redondas han sido reconstruidas en el lugar para dar a los visitantes una imagen vívida de la vida prehistórica.",
      pt: "Choirokoitia é um sítio arqueológico no distrito de Larnaca e é considerado um dos exemplos mais bem preservados de um povoado neolítico acerâmico em todo o Mediterrâneo Oriental. O povoado data do período entre o 7.º e o 4.º milénio a.C. e é conhecido pelas suas distintas casas cilíndricas de pedra e tijolos de barro. Estas estruturas redondas ficavam próximas umas das outras e eram protegidas por uma muralha defensiva maciça. As escavações mostraram que os habitantes praticavam agricultura, criavam gado e já possuíam técnicas artesanais avançadas para a produção de ferramentas de pedra e joias. Uma característica especial do povoado é o enterro dos mortos sob o chão das casas. Choirokoitia foi incluída na lista do Património Mundial da UNESCO em 1998 e oferece informações importantes sobre o desenvolvimento das primeiras comunidades humanas permanentes na ilha. No local, algumas das casas redondas foram reconstruídas para proporcionar aos visitantes uma imagem vívida da vida pré-histórica.",
      fr: "Choirokoitia est un site archéologique situé dans le district de Larnaca, considéré comme l'un des exemples les mieux préservés d'établissement néolithique acéramique de toute la Méditerranée orientale. L'occupation remonte à une période comprise entre le VIIe et le IVe millénaire av. J.-C. Elle est célèbre pour ses maisons cylindriques caractéristiques en pierre et en briques crues. Ces structures rondes étaient serrées les unes contre les autres et protégées par un imposant mur d'enceinte. Les fouilles ont révélé que les habitants pratiquaient l'agriculture, l'élevage et maîtrisaient déjà des techniques artisanales avancées pour la fabrication d'outils en pierre et de bijoux. Une particularité du site est l'inhumation des défunts sous le sol des maisons. Choirokoitia a été inscrite sur la liste du patrimoine mondial de l'UNESCO en 1998 et fournit des données essentielles sur le développement des premières communautés humaines permanentes de l'île. Quelques maisons rondes ont été reconstruites sur place pour offrir aux visiteurs une image vivante de la vie préhistorique.",
    },
    factsAdvanced: {
      de: ["Die Siedlung wurde im Jahr 1934 von Porphyrios Dikaios entdeckt.", "Die runden Häuser haben einen Außendurchmesser von 2,3 bis 9,2 Metern.", "Die Einwohner bauten Getreide wie Weizen und Gerste an.", "Skelettfunde zeigen, dass die durchschnittliche Lebenserwartung bei 35 Jahren lag.", "Der Ort wurde um das Jahr 6000 v. Chr. plötzlich verlassen.", "In Choirokoitia lebten schätzungsweise 300 bis 600 Menschen."],
      hu: ["A települést 1934-ben fedezte fel Porphyrios Dikaios.", "A kerek házak külső átmérője 2,3 és 9,2 méter között változik.", "A lakók gabonaféléket, például búzát és árpát termesztettek.", "A csontvázleletek alapján az átlagéletkor 35 év körül volt.", "A helyszínt Krisztus előtt 6000 körül hirtelen elhagyták lakói.", "Choirokoitiában becslések szerint 300–600 ember élt egy időben."],
      ro: ["Așezarea a fost descoperită în 1934 de Porphyrios Dikaios.", "Casele rotunde au un diametru exterior între 2,3 și 9,2 metri.", "Locuitorii cultivau cereale precum grâul și orzul.", "Descoperirile scheletice indică o speranță medie de viață de 35 de ani.", "Situl a fost abandonat brusc în jurul anului 6000 î.Hr.", "Se estimează că în Choirokoitia trăiau între 300 și 600 de persoane."],
      en: ["The settlement was discovered in 1934 by Porphyrios Dikaios.", "The circular houses have an outer diameter of 2.3 to 9.2 meters.", "Inhabitants cultivated grains such as wheat and barley.", "Skeletal remains indicate an average life expectancy of 35 years.", "The site was suddenly abandoned around 6000 BC.", "It is estimated that 300 to 600 people lived in Choirokoitia."],
      es: ["El asentamiento fue descubierto en 1934 por Porphyrios Dikaios.", "Las casas redondas tienen un diámetro exterior de 2,3 a 9,2 metros.", "Los habitantes cultivaban cereales como trigo y cebada.", "Los hallazgos de esqueletos muestran que la esperanza de vida promedio era de 35 años.", "El lugar fue abandonado repentinamente alrededor del año 6000 a.C.", "Se estima que en Choirokoitia vivían entre 300 y 600 personas."],
      pt: ["O povoado foi descoberto em 1934 por Porphyrios Dikaios.", "As casas redondas têm um diâmetro exterior de 2,3 a 9,2 metros.", "Os habitantes cultivavam cereais como trigo e cevada.", "Descobertas de esqueletos mostram que a esperança média de vida era de 35 anos.", "O local foi abandonado subitamente por volta do ano 6000 a.C.", "Estima-se que viviam em Choirokoitia entre 300 a 600 pessoas."],
      fr: ["Le village a été découvert en 1934 par Porphyrios Dikaios.", "Les maisons rondes ont un diamètre extérieur de 2,3 à 9,2 mètres.", "Les habitants cultivaient des céréales comme le blé et l'orge.", "Les squelettes retrouvés indiquent une espérance de vie moyenne de 35 ans.", "Le site a été soudainement abandonné vers l'an 6000 av. J.-C.", "On estime que 300 à 600 personnes vivaient à Choirokoitia."],
    }, image: "/poi-images/cy-choirokoitia.webp"},
  {
    id: "cy-st-lazarus",
    type: "historical",
    parent: "CY-001",
    coords: [33.6367, 34.9114],
    name: { de: "Lazarus-Kirche", hu: "Szent Lázár-templom", ro: "Biserica Sfântul Lazăr", en: "Church of Saint Lazarus" },
    description: {
      de: "Historische byzantinische Kirche im Zentrum von Larnaca.",
      hu: "Történelmi bizánci templom Lárnaka központjában.",
      ro: "O biserică istorică bizantină în centrul orașului Larnaca.",
      en: "A historical Byzantine church in the center of Larnaca.",
      es: "Histórica iglesia bizantina en el centro de Lárnaca.",
      pt: "Histórica igreja bizantina no centro de Larnaca.",
      fr: "Église byzantine historique au centre de Larnaca.",
    },
    descriptionAdvanced: {
      de: "Die Kirche des Heiligen Lazarus in Larnaka ist eine der bedeutendsten byzantinischen Sakralbauten Zyperns und stammt aus dem späten 9. Jahrhundert. Sie wurde über dem zweiten Grab des Lazarus von Bethanien errichtet, der laut christlicher Überlieferung von Jesus von den Toten auferweckt wurde und später nach Zypern floh, wo er als erster Bischof von Kition (dem heutigen Larnaka) diente. Die Architektur der Steinkirche ist durch drei Kuppeln und ein dreischiffiges Inneres geprägt, wobei die Kuppeln während der osmanischen Herrschaft entfernt und später nicht originalgetreu ersetzt wurden. Im Inneren befindet sich eine prachtvolle, vergoldete Ikonostase aus dem 18. Jahrhundert, die als eines der feinsten Beispiele Holzschnitzkunst auf der Insel gilt. In der Krypta können Besucher den Sarkophag des Heiligen Lazarus besichtigen. Die Kirche ist bis heute ein zentraler Ort der Verehrung und dient der griechisch-orthodoxen Gemeinde als wichtige Pfarrkirche. Jedes Jahr am Lazarus-Samstag findet eine feierliche Prozession statt, bei der die Ikone des Heiligen durch die Straßen von Larnaka getragen wird.",
      hu: "A larnakai Szent Lázár-templom Ciprus egyik legfontosabb bizánci szakrális építménye, amely a 9. század végén épült. A templomot Bethániai Lázár második sírja fölé emelték, akit a keresztény hagyomány szerint Jézus feltámasztott a halálból, majd Ciprusra menekült, ahol Kition (a mai Larnaka) első püspökeként szolgált. A kőtemplom építészetét eredetileg három kupola és háromhajós belső tér jellemezte, bár a kupolákat az oszmán uralom alatt eltávolították, és később nem az eredeti formájukban állították vissza. A belső térben egy lenyűgöző, 18. századi aranyozott ikonosztáz található, amely a sziget egyik legszebb fafaragási remekműve. A kriptában a látogatók megtekinthetik Szent Lázár szarkofágját is. A templom ma is a hívők központi helye, és a görög ortodox közösség fontos plébániatemplomaként működik. Minden évben Lázár-szombaton ünnepélyes körmenetet tartanak, amely során a szent ikonját körbehordozzák Larnaka utcáin.",
      ro: "Biserica Sfântul Lazăr din Larnaca este una dintre cele mai importante clădiri sacre bizantine din Cipru, datând de la sfârșitul secolului al IX-lea. A fost construită deasupra celui de-al doilea mormânt al lui Lazăr din Betania care, conform tradiției creștine, a fost înviat din morți de Iisus și a fugit ulterior în Cipru, unde a servit ca prim episcop al Kitionului (Larnaca de astăzi). Arhitectura bisericii din piatră este marcată de trei cupole și un interior cu trei nave, deși cupolele au fost îndepărtate în timpul dominației otomane și nu au fost înlocuite ulterior în forma lor originală. În interior se află un iconostas aurit magnific din secolul al XVIII-lea, considerat unul dintre cele mai fine exemple de sculptură în lemn de pe insulă. În criptă, vizitatorii pot vedea sarcofagul Sfântului Lazăr. Biserica rămâne un centru de venerație și servește drept parohie importantă pentru comunitatea greco-ortodoxă. În fiecare an, de Sâmbăta lui Lazăr, are loc o procesiune solemnă în care icoana sfântului este purtată pe străzile din Larnaca.",
      en: "The Church of Saint Lazarus in Larnaca is one of the most significant Byzantine religious buildings in Cyprus, dating back to the late 9th century. It was built over the second tomb of Lazarus of Bethany, who according to Christian tradition was raised from the dead by Jesus and later fled to Cyprus, serving as the first Bishop of Kition (modern-day Larnaca). The stone church architecture is characterized by three domes and a triple-aisle interior, although the domes were removed during Ottoman rule and were not later replaced in their original style. Inside, there is a magnificent 18th-century gilded iconostasis, considered one of the finest examples of woodcarving on the island. In the crypt, visitors can view the sarcophagus of Saint Lazarus. The church remains a central site of veneration and serves as an important parish church for the Greek Orthodox community. Every year on Lazarus Saturday, a solemn procession is held where the icon of the saint is carried through the streets of Larnaca.",
      es: "La Iglesia de San Lázaro en Lárnaca es una de las edificaciones sacras bizantinas más importantes de Chipre y data de finales del siglo IX. Fue construida sobre la segunda tumba de Lázaro de Betania, quien según la tradición cristiana fue resucitado por Jesús de entre los muertos y más tarde huyó a Chipre, donde sirvió como el primer obispo de Kition (la actual Lárnaca). La arquitectura de la iglesia de piedra está marcada por tres cúpulas y un interior de tres naves, aunque las cúpulas fueron retiradas durante el dominio otomano y más tarde reemplazadas de forma no original. En su interior se encuentra un magnífico iconostasio dorado del siglo XVIII, considerado uno de los mejores ejemplos de talla en madera de la isla. En la cripta, los visitantes pueden contemplar el sarcófago de San Lázaro. La iglesia sigue siendo hoy un lugar central de veneración y sirve a la comunidad ortodoxa griega como una importante iglesia parroquial. Cada año, el Sábado de Lázaro, se realiza una procesión solemne en la que el icono del santo es llevado por las calles de Lárnaca.",
      pt: "A Igreja de São Lázaro em Larnaca é um dos edifícios sagrados bizantinos mais importantes de Chipre e data do final do século IX. Foi construída sobre o segundo túmulo de Lázaro de Betânia que, segundo a tradição cristã, foi ressuscitado dos mortos por Jesus e mais tarde fugiu para Chipre, onde serviu como o primeiro bispo de Kition (a atual Larnaca). A arquitetura da igreja de pedra é marcada por três cúpulas e um interior de três naves, tendo as cúpulas sido removidas durante o domínio otomano e mais tarde substituídas de forma não original. No interior encontra-se uma magnífica iconostase dourada do século XVIII, considerada um dos melhores exemplos de talha em madeira da ilha. Na cripta, os visitantes podem ver o sarcófago de São Lázaro. A igreja continua a ser um local central de veneração e serve a comunidade ortodoxa grega como uma importante igreja paroquial. Todos os anos, no Sábado de Lázaro, realiza-se uma procissão solene, na qual o ícone do santo é transportado pelas ruas de Larnaca.",
      fr: "L'église Saint-Lazare de Larnaca est l'un des édifices sacrés byzantins les plus importants de Chypre et date de la fin du IXe siècle. Elle a été érigée sur le second tombeau de Lazare de Béthanie qui, selon la tradition chrétienne, fut ressuscité des morts par Jésus et s'enfuit plus tard à Chypre, où il servit comme premier évêque de Kition (l'actuelle Larnaca). L'architecture de l'église en pierre se caractérise par trois dômes et un intérieur à trois nefs ; les dômes ont été enlevés sous la domination ottomane et remplacés plus tard de manière non conforme à l'original. À l'intérieur se trouve une magnifique iconostase dorée du XVIIIe siècle, considérée comme l'un des plus beaux exemples de sculpture sur bois de l'île. Dans la crypte, les visiteurs peuvent voir le sarcophage de Saint Lazare. L'église reste aujourd'hui un lieu de culte central et sert d'importante église paroissiale à la communauté grecque-orthodoxe. Chaque année, le samedi de Lazare, une procession solennelle a lieu, au cours de laquelle l'icône du saint est portée dans les rues de Larnaca.",
    },
    factsAdvanced: {
      de: ["Die Kirche wurde um 890 n. Chr. von Kaiser Leo VI. erbaut.", "Lazarus soll nach seiner Auferstehung 30 Jahre auf Zypern gelebt haben.", "Die Ikonostase besteht aus über 120 kunstvollen Ikonen.", "Der Glockenturm wurde im Jahr 1857 im lateinischen Stil errichtet.", "Ein Brand im Jahr 1970 beschädigte Teile des Kircheninneren.", "Die Gebeine des Heiligen wurden 898 teilweise nach Konstantinopel überführt."],
      hu: ["A templomot 890 körül VI. León bizánci császár építtette.", "Lázár a feltámasztása után állítólag 30 évet élt még Cipruson.", "Az ikonosztáz több mint 120 művészien kidolgozott ikont tartalmaz.", "A harangtorony 1857-ben épült latin stílusban.", "1970-ben egy tűzvész súlyosan megrongálta a templom belső terét.", "A szent ereklyéit 898-ban részben Konstantinápolyba szállították."],
      ro: ["Biserica a fost construită în jurul anului 890 de împăratul Leon al VI-lea.", "Se spune că Lazăr a mai trăit 30 de ani în Cipru după învierea sa.", "Iconostasul cuprinde peste 120 de icoane elaborate.", "Turnul clopotniță a fost ridicat în stil latin în anul 1857.", "Un incendiu din 1970 a deteriorat părți din interiorul bisericii.", "Moaștele sfântului au fost transferate parțial la Constantinopol în 898."],
      en: ["The church was built around 890 AD by Emperor Leo VI.", "Lazarus is said to have lived 30 years in Cyprus after his resurrection.", "The iconostasis features over 120 intricately painted icons.", "The bell tower was constructed in 1857 in a Latin architectural style.", "A fire in 1970 damaged significant portions of the church interior.", "The saint's relics were partially transferred to Constantinople in 898."],
      es: ["La iglesia fue construida hacia el año 890 d. C. por el emperador León VI.", "Se dice que Lázaro vivió 30 años en Chipre tras su resurrección.", "El iconostasio consta de más de 120 iconos artísticos.", "El campanario fue erigido en 1857 en estilo latino.", "Un incendio en 1970 dañó partes del interior de la iglesia.", "Los restos del santo fueron trasladados parcialmente a Constantinopla en 898."],
      pt: ["A igreja foi construída por volta de 890 d.C. pelo imperador Leão VI.", "Diz-se que Lázaro viveu 30 anos em Chipre após a sua ressurreição.", "A iconostase é composta por mais de 120 ícones artísticos.", "A torre sineira foi erguida em 1857 em estilo latino.", "Um incêndio em 1970 danificou partes do interior da igreja.", "Os restos mortais do santo foram parcialmente transferidos para Constantinopla em 898."],
      fr: ["L'église a été construite vers 890 après J.-C. par l'empereur Léon VI.", "Lazare aurait vécu 30 ans à Chypre après sa résurrection.", "L'iconostase se compose de plus de 120 icônes artistiques.", "Le clocher a été érigé en 1857 dans le style latin.", "Un incendie en 1970 a endommagé des parties de l'intérieur de l'église.", "Les restes du saint ont été partiellement transférés à Constantinople en 898."],
    }, image: "/poi-images/cy-st-lazarus.webp",
    facts: {
      de: ["Bau im späten 9. Jahrhundert", "Grab von Lazarus von Bethanien", "Byzantinischer Baustil", "Goldener Ikonostas im Inneren"],
      hu: ["A 9. század végén épült", "Lázár második sírhelye", "Bizánci stílusú épület", "Aranyozott ikonosztáz látható"],
      ro: ["Construită în secolul al IX-lea", "Mormântul Sfântului Lazăr", "Stil arhitectural bizantin", "Iconostas sculptat și aurit"],
      en: ["Built in the late 9th century", "Tomb of Saint Lazarus", "Byzantine architectural style", "Intricate gold-covered iconostasis"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-mount-olympus", "sights": {
      "de": [
            {
                  "name": "Ethniko Dasiko Parko Troodous",
                  "text": "Ein weitläufiges Waldschutzgebiet im Troodos-Gebirge mit Wanderwegen und reicher Flora.",
                  "category": "natural",
                  "coords": [
                        32.882021,
                        34.931155
                  ]
            },
            {
                  "name": "Olympos",
                  "text": "Mit 1952 Metern der höchste Gipfel Zyperns, gelegen im Herzen des Troodos-Gebirges.",
                  "category": "landmark",
                  "coords": [
                        32.86495,
                        34.936613
                  ]
            },
            {
                  "name": "Kaledonian Waterfalls",
                  "text": "Ein beliebter Wasserfall auf Zypern, der über Wanderwege durch dichte Wälder erreichbar ist.",
                  "category": "landmark",
                  "coords": [
                        32.870001,
                        34.903055
                  ]
            },
            {
                  "name": "Kokkini",
                  "text": "Ein Aussichtspunkt im Troodos-Gebirge mit Panoramablick auf die umliegende Berglandschaft.",
                  "category": "natural",
                  "coords": [
                        32.829833,
                        34.915452
                  ]
            },
            {
                  "name": "Gerokamina",
                  "text": "Ein markanter Punkt im Troodos-Gebirge, bekannt für seine weite Sicht über die Region.",
                  "category": "natural",
                  "coords": [
                        32.860617,
                        34.909247
                  ]
            },
            {
                  "name": "chromium mine",
                  "text": "Ein ehemaliges Bergwerk auf dem Olymp, das an die Geschichte des Chromerzabbaus erinnert.",
                  "category": "landmark",
                  "coords": [
                        32.860436,
                        34.924428
                  ]
            },
            {
                  "name": "Viewpoint with telescope",
                  "text": "Ein ausgestatteter Aussichtspunkt auf dem Olymp für detaillierte Beobachtungen der Insel.",
                  "category": "natural",
                  "coords": [
                        32.873455,
                        34.93557
                  ]
            },
            {
                  "name": "Giant Black Pine",
                  "text": "Eine jahrhundertealte Schwarzkiefer, die als Naturattraktion im Troodos-Gebirge gilt.",
                  "category": "landmark",
                  "coords": [
                        32.871035,
                        34.928807
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Ethniko Dasiko Parko Troodous",
                  "text": "Kiterjedt erdővédelmi terület a Troodos-hegységben, túraútvonalakkal és gazdag flórával.",
                  "category": "natural",
                  "coords": [
                        32.882021,
                        34.931155
                  ]
            },
            {
                  "name": "Olumpos",
                  "text": "1952 méterével Ciprus legmagasabb csúcsa, a Troodos-hegység szívében.",
                  "category": "landmark",
                  "coords": [
                        32.86495,
                        34.936613
                  ]
            },
            {
                  "name": "Kaledonian Waterfalls",
                  "text": "Népszerű ciprusi vízesés, amely sűrű erdőkön átvezető túraútvonalakon érhető el.",
                  "category": "landmark",
                  "coords": [
                        32.870001,
                        34.903055
                  ]
            },
            {
                  "name": "Kokkini",
                  "text": "Kilátópont a Troodos-hegységben, panorámás kilátással a környező hegyvidékre.",
                  "category": "natural",
                  "coords": [
                        32.829833,
                        34.915452
                  ]
            },
            {
                  "name": "Gerokamina",
                  "text": "Jellegzetes pont a Troodos-hegységben, amely a régióra nyíló tágas kilátásáról ismert.",
                  "category": "natural",
                  "coords": [
                        32.860617,
                        34.909247
                  ]
            },
            {
                  "name": "chromium mine",
                  "text": "Egykori bánya az Olümposz-hegyen, amely a krómérc-bányászat történetét őrzi.",
                  "category": "landmark",
                  "coords": [
                        32.860436,
                        34.924428
                  ]
            },
            {
                  "name": "Viewpoint with telescope",
                  "text": "Távcsővel felszerelt kilátópont az Olümposzon a sziget részletes megfigyeléséhez.",
                  "category": "natural",
                  "coords": [
                        32.873455,
                        34.93557
                  ]
            },
            {
                  "name": "Giant Black Pine",
                  "text": "Több száz éves feketefenyő, amely természeti látványosság a Troodos-hegységben.",
                  "category": "landmark",
                  "coords": [
                        32.871035,
                        34.928807
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Ethniko Dasiko Parko Troodous",
                  "text": "O rezervație forestieră vastă în Munții Troodos, cu trasee de drumeție și floră bogată.",
                  "category": "natural",
                  "coords": [
                        32.882021,
                        34.931155
                  ]
            },
            {
                  "name": "Olumpos",
                  "text": "Cel mai înalt vârf din Cipru, cu o altitudine de 1952 metri, situat în Munții Troodos.",
                  "category": "landmark",
                  "coords": [
                        32.86495,
                        34.936613
                  ]
            },
            {
                  "name": "Kaledonian Waterfalls",
                  "text": "O cascadă populară din Cipru, accesibilă prin trasee de drumeție prin păduri dese.",
                  "category": "landmark",
                  "coords": [
                        32.870001,
                        34.903055
                  ]
            },
            {
                  "name": "Kokkini",
                  "text": "Un punct de observație în Munții Troodos, cu vedere panoramică asupra peisajului montan.",
                  "category": "natural",
                  "coords": [
                        32.829833,
                        34.915452
                  ]
            },
            {
                  "name": "Gerokamina",
                  "text": "Un punct proeminent în Munții Troodos, cunoscut pentru vederea largă asupra regiunii.",
                  "category": "natural",
                  "coords": [
                        32.860617,
                        34.909247
                  ]
            },
            {
                  "name": "chromium mine",
                  "text": "O fostă mină pe muntele Olimp, care amintește de istoria exploatării de crom.",
                  "category": "landmark",
                  "coords": [
                        32.860436,
                        34.924428
                  ]
            },
            {
                  "name": "Viewpoint with telescope",
                  "text": "Un punct de observație dotat cu telescop pe muntele Olimp pentru vederi detaliate ale insulei.",
                  "category": "natural",
                  "coords": [
                        32.873455,
                        34.93557
                  ]
            },
            {
                  "name": "Giant Black Pine",
                  "text": "Un pin negru secular, considerat o atracție naturală în Munții Troodos.",
                  "category": "landmark",
                  "coords": [
                        32.871035,
                        34.928807
                  ]
            }
      ],
      "en": [
            {
                  "name": "Troodos National Forest Park",
                  "text": "An extensive forest reserve in the Troodos Mountains with hiking trails and rich flora.",
                  "category": "natural",
                  "coords": [
                        32.882021,
                        34.931155
                  ]
            },
            {
                  "name": "Olympus",
                  "text": "The highest peak in Cyprus at 1,952 meters, located in the heart of the Troodos Mountains.",
                  "category": "landmark",
                  "coords": [
                        32.86495,
                        34.936613
                  ]
            },
            {
                  "name": "Kaledonian Waterfalls",
                  "text": "A popular Cypriot waterfall accessible via hiking trails through dense forests.",
                  "category": "landmark",
                  "coords": [
                        32.870001,
                        34.903055
                  ]
            },
            {
                  "name": "Kokkini",
                  "text": "A viewpoint in the Troodos Mountains offering panoramic views of the mountain landscape.",
                  "category": "natural",
                  "coords": [
                        32.829833,
                        34.915452
                  ]
            },
            {
                  "name": "Gerokamina",
                  "text": "A prominent spot in the Troodos Mountains known for its wide views over the region.",
                  "category": "natural",
                  "coords": [
                        32.860617,
                        34.909247
                  ]
            },
            {
                  "name": "Chromite mine",
                  "text": "A former mine on Mount Olympus, recalling the history of chromite mining.",
                  "category": "landmark",
                  "coords": [
                        32.860436,
                        34.924428
                  ]
            },
            {
                  "name": "Viewpoint with telescope",
                  "text": "An observation point equipped with a telescope on Mount Olympus for detailed views of the island.",
                  "category": "natural",
                  "coords": [
                        32.873455,
                        34.93557
                  ]
            },
            {
                  "name": "Giant Black Pine",
                  "text": "A centuries-old black pine tree, considered a natural attraction in the Troodos Mountains.",
                  "category": "landmark",
                  "coords": [
                        32.871035,
                        34.928807
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CY-004",
    coords: [32.8633, 34.9367],
    name: { de: "Olympos", hu: "Olymposz (Troodos)", ro: "Muntele Olimp", en: "Mount Olympus" },
    description: {
      de: "Der höchste Punkt Zyperns im Troodos-Gebirge (1.952 m).",
      hu: "Ciprus legmagasabb pontja a Troodos-hegységben (1952 m).",
      ro: "Cel mai înalt punct din Cipru, situat în munții Troodos (1.952 m).",
      en: "The highest point in Cyprus, located in the Troodos Mountains (1,952 m).",
      es: "El punto más alto de Chipre en las montañas de Troodos (1.952 m).",
      pt: "O ponto mais alto de Chipre nas montanhas de Troodos (1.952 m).",
      fr: "Le point culminant de Chypre dans le massif du Troodos (1 952 m).",
    },
    descriptionAdvanced: {
      de: "Der Berg Olymp ist mit 1.952 Metern die höchste Erhebung Zyperns und bildet das Herzstück des Troodos-Gebirges. Er ist geologisch gesehen Teil eines Ophiolith-Komplexes, was ihn für Wissenschaftler weltweit interessant macht, da hier Gesteine des antiken Meeresbodens an die Oberfläche treten. Der Gipfel bietet einen weiten Panoramablick über die gesamte Insel bis hin zum Meer. Während der Wintermonate zwischen Januar und März ist der Olymp das einzige Skigebiet Zyperns mit mehreren Skipisten und Liften. Auf dem höchsten Punkt befindet sich eine markante britische Radarstation der Royal Air Force, weshalb der eigentliche Gipfel militärisches Sperrgebiet ist. Die Hänge des Berges sind mit dichten Wäldern aus Schwarzkiefern und endemischen Troodos-Zedern bewachsen, die Wanderern im Sommer kühle Temperaturen bieten. Zahlreiche gut ausgeschilderte Wanderwege wie der Artemis-Pfad führen rund um den Gipfel und ermöglichen die Beobachtung seltener Pflanzenarten und Greifvögel.",
      hu: "Az Olümposz-hegy 1952 méteres magasságával Ciprus legmagasabb pontja, és a Troodos-hegység szívét alkotja. Földtani szempontból egy ofiolit-komplexum része, ami világszerte érdekessé teszi a tudósok számára, mivel itt az ősi tengerfenék kőzetei kerülnek a felszínre. A csúcsról panorámás kilátás nyílik az egész szigetre és a tengerre. A januártól márciusig tartó téli hónapokban az Olümposz Ciprus egyetlen síterületeként üzemel, több sípályával és felvonóval várva a látogatókat. A legmagasabb ponton a Brit Királyi Légierő (RAF) jellegzetes radarállomása található, ezért a közvetlen csúcs katonai zárt terület. A hegyoldalakat sűrű feketefenyő-erdők és endemikus troodoszi cédrusok borítják, amelyek a nyári hőségben hűvös menedéket nyújtanak a túrázóknak. Számos jól jelzett turistaút, például az Artemisz-ösvény kerüli meg a csúcsot, lehetőséget adva ritka növényfajok és ragadozó madarak megfigyelésére.",
      ro: "Muntele Olimp, cu o înălțime de 1.952 de metri, este cel mai înalt punct din Cipru și formează inima munților Troodos. Din punct de vedere geologic, face parte dintr-un complex ofiolitic, ceea ce îl face extrem de interesant pentru oamenii de știință, deoarece aici rocile de pe fundul mării antice ies la suprafață. Vârful oferă o panoramă vastă asupra întregii insule și a mării. În timpul lunilor de iarnă, între ianuarie și martie, Muntele Olimp este singura zonă de schi din Cipru, dotată cu mai multe pârtii și teleschiuri. Pe cel mai înalt punct se află o stație radar proeminentă a Royal Air Force britanice, motiv pentru care vârful propriu-zis este zonă militară restricționată. Versanții muntelui sunt acoperiți cu păduri dense de pini negri și cedri endemici de Troodos, care oferă temperaturi răcoroase drumeților pe timpul verii. Numeroase trasee de drumeție bine marcate, cum ar fi traseul Artemis, înconjoară vârful și permit observarea speciilor de plante rare și a păsărilor de pradă.",
      en: "Mount Olympus, standing at 1,952 meters, is the highest point in Cyprus and forms the heart of the Troodos Mountains. Geologically, it is part of an ophiolite complex, making it a site of global scientific interest as rocks from the ancient seabed are exposed here at the surface. The summit offers an expansive panoramic view across the entire island to the Mediterranean Sea. During the winter months between January and March, Mount Olympus serves as Cyprus's only ski resort, featuring several slopes and ski lifts. A prominent British Royal Air Force radar station is located at the highest point, which is why the actual summit is a restricted military zone. The mountain slopes are covered with dense forests of black pine and endemic Troodos cedars, providing cool temperatures for hikers in summer. Numerous well-marked hiking trails, such as the Artemis Trail, circle the summit, allowing for the observation of rare plant species and birds of prey.",
      es: "El monte Olimpo, con 1.952 metros, es la elevación más alta de Chipre y el núcleo de la cordillera de Troodos. Geológicamente, forma parte de un complejo ofiolítico, lo que atrae a científicos de todo el mundo por el afloramiento de rocas del antiguo fondo marino. La cima ofrece una vista panorámica de toda la isla hasta el mar. Durante los meses de invierno, entre enero y marzo, el Olimpo es la única estación de esquí de Chipre, con varias pistas y remontes. En el punto más alto se encuentra una destacada estación de radar británica de la Royal Air Force, por lo que la cima real es zona militar restringida. Las laderas están cubiertas de densos bosques de pino negro y cedros endémicos de Troodos, que ofrecen temperaturas frescas a los excursionistas en verano. Numerosos senderos señalizados, como la ruta de Artemisa, rodean la cima y permiten observar especies vegetales raras y aves rapaces.",
      pt: "O Monte Olimpo é, com 1.952 metros, a elevação mais alta de Chipre e constitui o coração das montanhas de Troodos. Geologicamente, faz parte de um complexo ofiolítico, o que o torna interessante para cientistas de todo o mundo, uma vez que aqui afloram rochas do antigo fundo marinho. O cume oferece uma vista panorâmica de toda a ilha até ao mar. Durante os meses de inverno, entre janeiro e março, o Olimpo é a única estância de esqui de Chipre, com várias pistas e teleféricos. No ponto mais alto encontra-se uma marcante estação de radar britânica da Royal Air Force, motivo pelo qual o cume propriamente dito é uma área militar restrita. As encostas da montanha estão cobertas por florestas densas de pinheiros negros e cedros endémicos de Troodos, que oferecem temperaturas frescas aos caminhantes no verão. Inúmeros trilhos bem sinalizados, como o trilho de Artemis, rodeiam o cume e permitem a observação de espécies de plantas raras e aves de rapina.",
      fr: "Le mont Olympe est, avec ses 1 952 mètres, le point culminant de Chypre et forme le cœur du massif du Troodos. D'un point de vue géologique, il fait partie d'un complexe ophiolitique, ce qui le rend mondialement célèbre auprès des scientifiques car des roches de l'ancien plancher océanique y affleurent. Le sommet offre une vue panoramique imprenable sur toute l'île jusqu'à la mer. Durant les mois d'hiver, de janvier à mars, l'Olympe devient l'unique station de ski de Chypre avec plusieurs pistes et remontées mécaniques. Sur le point le plus élevé se trouve une imposante station radar britannique de la Royal Air Force, raison pour laquelle le sommet réel est une zone militaire interdite. Les flancs de la montagne sont recouverts de denses forêts de pins noirs et de cèdres endémiques du Troodos, offrant aux randonneurs des températures fraîches en été. De nombreux sentiers bien balisés, comme le sentier d'Artémis, serpentent autour du sommet et permettent d'observer des espèces végétales rares et des oiseaux de proie.",
    },
    factsAdvanced: {
      de: ["Der Berg liegt im Zentrum des Troodos-Geoparks.", "Die Schneehöhe kann im Winter bis zu 2 Meter erreichen.", "Der Artemis-Rundwanderweg ist etwa 7 Kilometer lang.", "Die endemische Troodos-Zeder wächst nur in dieser Gebirgsregion.", "Auf dem Berg befinden sich vier Skilifte für Wintersportler.", "Die Radarstation auf dem Gipfel wird seit 1956 betrieben."],
      hu: ["A hegy a Troodos Geopark központi részén található.", "A hóvastagság télen akár a 2 métert is elérheti.", "Az Artemisz-körsétaút hossza körülbelül 7 kilométer.", "Az endemikus troodoszi cédrus csak ebben a régióban honos.", "A hegyen négy sífelvonó működik a téli szezonban.", "A csúcson lévő radarállomás 1956 óta üzemel."],
      ro: ["Muntele este situat în centrul Geoparcului Troodos.", "Grosimea zăpezii poate atinge 2 metri în timpul iernii.", "Traseul circular Artemis are o lungime de aproximativ 7 kilometri.", "Cedrul de Troodos endemic crește doar în această regiune montană.", "Pe munte funcționează patru teleschiuri pentru sporturile de iarnă.", "Stația radar de pe vârf este operată din anul 1956."],
      en: ["The mountain is located at the center of the Troodos Geopark.", "Snow depth can reach up to 2 meters during the winter season.", "The Artemis circular hiking trail is approximately 7 kilometers long.", "The endemic Troodos cedar grows only in this mountain region.", "There are four ski lifts available for winter sports enthusiasts.", "The radar station on the peak has been operational since 1956."],
      es: ["La montaña se encuentra en el centro del Geoparque de Troodos.", "El espesor de la nieve puede alcanzar los 2 metros en invierno.", "El sendero circular de Artemisa tiene unos 7 kilómetros de longitud.", "El cedro endémico de Troodos crece solo en esta región montañosa.", "En la montaña hay cuatro remontes para los entusiastas de los deportes de invierno.", "La estación de radar en la cima funciona desde 1956."],
      pt: ["A montanha situa-se no centro do Geoparque de Troodos.", "A espessura da neve pode atingir os 2 metros no inverno.", "O trilho circular de Artemis tem cerca de 7 quilómetros de comprimento.", "O cedro endémico de Troodos cresce apenas nesta região montanhosa.", "Existem quatro teleféricos na montanha para os entusiastas dos desportos de inverno.", "A estação de radar no cume está em funcionamento desde 1956."],
      fr: ["La montagne se situe au centre du géoparc du Troodos.", "L'épaisseur de la neige peut atteindre 2 mètres en hiver.", "Le sentier de randonnée circulaire d'Artémis fait environ 7 kilomètres de long.", "Le cèdre endémique du Troodos ne pousse que dans cette région montagneuse.", "La montagne dispose de quatre téléskis pour les amateurs de sports d'hiver.", "La station radar au sommet est en service depuis 1956."],
    }, image: "/poi-images/cy-mount-olympus.webp",
    facts: {
      de: ["Höhe von 1951 Metern", "Teil des Troodos-Gebirges", "Einzige Skigebiete der Insel", "Radaranlage auf dem Gipfel"],
      hu: ["Magassága 1951 méter", "A Troodos-hegység része", "Sípályák üzemelnek télen", "Radar állomás a csúcsán"],
      ro: ["Altitudine de 1951 metri", "Parte din munții Troodos", "Singura zonă de schi din insulă", "Radare militare pe vârf"],
      en: ["Height of 1,951 meters", "Part of Troodos Range", "Skiing available in winter", "British military radar station"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-cape-greco",
    type: "landmark",
    parent: "CY-002",
    coords: [34.0767, 34.9619],
    name: { de: "Kap Greco", hu: "Greco-fok", ro: "Capul Greco", en: "Cape Greco" },
    description: {
      de: "Ein atemberaubender Nationalpark mit Meereshöhlen und klarem blauen Wasser.",
      hu: "Lélegzetelállító nemzeti park tengeri barlangokkal és kristálytiszta vízzel.",
      ro: "Un parc național uimitor, cu peșteri marine și ape de un albastru limpede.",
      en: "A stunning national park featuring sea caves and clear blue waters.",
      es: "Un impresionante parque nacional con cuevas marinas y aguas de un azul cristalino.",
      pt: "Um parque nacional deslumbrante com grutas marinhas e águas azuis cristalinas.",
      fr: "Un parc national époustouflant avec des grottes marines et des eaux bleues cristallines.",
    },
    descriptionAdvanced: {
      de: "Cape Greco ist eine markante Halbinsel am südöstlichen Ende Zyperns und ein ausgewiesener Nationalpark zwischen Agia Napa und Protaras. Die Region ist bekannt für ihre zerklüftete Küstenlinie mit spektakulären Meereshöhlen und steilen Klippen, die bis zu 10 Meter in das kristallklare türkisfarbene Wasser abfallen. Ein beliebtes Ziel innerhalb des Parks ist die „Brücke der Liebhaber“, ein natürlicher Steinbogen, der durch Erosion entstanden ist. Cape Greco ist zudem ein wichtiger Rastplatz für Zugvögel und beherbergt eine Vielzahl endemischer Pflanzenarten. Zahlreiche Wander- und Radwege durchziehen das Gebiet, darunter ein Teilstück des europäischen Fernwanderwegs E4. Die Kapelle Agioi Anargyroi an der Nordseite bietet einen malerischen Anblick und ist ein beliebter Ort für Hochzeitsfotografien. Trotz der touristischen Beliebtheit hat sich das Gebiet seinen wilden, unberührten Charakter bewahrt und bietet ideale Bedingungen zum Tauchen, Schnorcheln und zur Naturbeobachtung.",
      hu: "A Cape Greco egy markáns félsziget Ciprus délkeleti végén, Ayia Napa és Protaras között, amely egyben kijelölt nemzeti park is. A régió híres tagolt partvonaláról, látványos tengeri barlangjairól és meredek szikláiról, amelyek helyenként 10 méter magasból szakadnak a kristálytiszta türkizkék vízbe. A park egyik legnépszerűbb pontja a „Szerelmesek hídja”, egy természetes kőív, amelyet az erózió formált az évezredek során. A Cape Greco fontos pihenőhely a költöző madarak számára, és számos endemikus növényfajnak ad otthont. A területet számos túra- és kerékpárút hálózza be, köztük az E4 európai távolsági túraútvonal egy szakasza. Az északi oldalon található Agioi Anargyroi kápolna festői látványt nyújt, és kedvelt helyszíne az esküvői fotózásoknak. A turisztikai népszerűség ellenére a terület megőrizte vad, érintetlen jellegét, ideális feltételeket biztosítva a búvárkodáshoz, a sznorkelezéshez és a természetjáráshoz.",
      ro: "Cape Greco este o peninsulă proeminentă la capătul sud-estic al Ciprului și un parc național desemnat, situat între Agia Napa și Protaras. Regiunea este cunoscută pentru linia sa de coastă zimțată, cu peșteri marine spectaculoase și stânci abrupte care cad până la 10 metri în apa turcoaz cristalină. O destinație populară în cadrul parcului este „Podul Îndrăgostiților”, un arc natural de piatră format prin eroziune. Cape Greco este, de asemenea, un loc important de popas pentru păsările migratoare și adăpostește o varietate de specii de plante endemice. Numeroase trasee de drumeție și ciclism străbat zona, inclusiv o secțiune a traseului european de lungă distanță E4. Capela Agioi Anargyroi de pe partea de nord oferă o vedere pitorească și este un loc preferat pentru fotografiile de nuntă. În ciuda popularității turistice, zona și-a păstrat caracterul sălbatic și nealterat, oferind condiții ideale pentru scufundări, snorkeling și observarea naturii.",
      en: "Cape Greco is a prominent peninsula at the southeastern tip of Cyprus and a designated national forest park located between Agia Napa and Protaras. The region is famous for its rugged coastline featuring spectacular sea caves and steep cliffs that drop up to 10 meters into the crystal-clear turquoise waters. A popular landmark within the park is the 'Love Bridge', a natural stone arch formed by centuries of erosion. Cape Greco is also a vital resting place for migratory birds and home to a variety of endemic plant species. Numerous hiking and cycling trails crisscross the area, including a segment of the European long-distance path E4. The Agioi Anargyroi chapel on the northern side provides a picturesque view and is a popular spot for wedding photography. Despite its tourist popularity, the area has maintained its wild, pristine character, offering ideal conditions for diving, snorkeling, and nature observation.",
      es: "Cabo Greco es una península prominente en el extremo sureste de Chipre y un parque nacional designado entre Ayia Napa y Protaras. La región es famosa por su costa escarpada con espectaculares cuevas marinas y acantilados que descienden hasta 10 metros en aguas turquesas cristalinas. Un destino popular es el 'Puente de los Enamorados', un arco de roca natural formado por la erosión. Cabo Greco es también un importante punto de descanso para aves migratorias y alberga diversas plantas endémicas. Numerosos senderos para caminar y rutas ciclistas recorren la zona, incluyendo parte de la ruta europea de gran recorrido E4. La capilla de Agioi Anargyroi ofrece una vista pintoresca y es un lugar favorito para fotografías de bodas. A pesar de su popularidad turística, la zona conserva su carácter salvaje e intacto, ofreciendo condiciones ideales para el buceo, el snorkel y la observación de la naturaleza.",
      pt: "O Cabo Greco é uma península proeminente na extremidade sudeste de Chipre e um parque nacional designado entre Ayia Napa e Protaras. A região é conhecida pela sua costa acidentada com grutas marinhas espetaculares e falésias íngremes que descem até 10 metros em águas azul-turquesa cristalinas. Um destino popular dentro do parque é a 'Ponte dos Namorados', um arco de pedra natural formado pela erosão. O Cabo Greco é também um importante local de descanso para aves migratórias e abriga uma variedade de espécies de plantas endémicas. Numerosos trilhos para caminhadas e ciclismo atravessam a área, incluindo um troço da rota europeia de longa distância E4. A capela Agioi Anargyroi oferece uma vista pitoresca e é um local popular para fotografias de casamento. Apesar da popularidade turística, a área manteve o seu carácter selvagem e intocado, oferecendo condições ideais para mergulho, snorkel e observação da natureza.",
      fr: "Le Cap Greco est une péninsule remarquable à l'extrémité sud-est de Chypre et un parc national désigné entre Agia Napa et Protaras. La région est réputée pour son littoral découpé avec des grottes marines spectaculaires et des falaises abruptes qui plongent jusqu'à 10 mètres dans des eaux turquoise cristallines. Une destination populaire au sein du parc est le 'Pont des Amoureux', une arche de pierre naturelle formée par l'érosion. Le Cap Greco est également une escale importante pour les oiseaux migrateurs et abrite une multitude d'espèces végétales endémiques. De nombreux sentiers de randonnée et pistes cyclables parcourent la zone, dont un tronçon du sentier de grande randonnée européen E4. La chapelle Agioi Anargyroi offre un spectacle pittoresque et est un lieu privilégié pour les photographies de mariage. Malgré sa popularité touristique, la zone a conservé son caractère sauvage et vierge, offrant des conditions idéales pour la plongée, le snorkeling et l'observation de la nature.",
    },
    factsAdvanced: {
      de: ["Der Nationalpark umfasst eine Fläche von 385 Hektar.", "Die Klippen erreichen eine Höhe von bis zu 10 Metern.", "Cape Greco ist der östlichste Punkt der Republik Zypern.", "Hier wachsen über 400 verschiedene Pflanzenarten.", "Ein britisches Leuchtfeuer markiert seit 1891 die Spitze der Halbinsel.", "In den Höhlen wurden früher Seehunde gesichtet."],
      hu: ["A nemzeti park területe 385 hektárt tesz ki.", "A sziklafalak magassága helyenként eléri a 10 métert.", "Cape Greco a Ciprusi Köztársaság legkeletibb pontja.", "A területen több mint 400 különböző növényfaj él.", "A félsziget csúcsán 1891 óta működik egy brit világítótorony.", "A part menti barlangokban korábban mediterrán barátfókák is éltek."],
      ro: ["Parcul național acoperă o suprafață de 385 de hectare.", "Stâncile ating o înălțime de până la 10 metri.", "Cape Greco este cel mai estic punct al Republicii Cipru.", "Peste 400 de specii diferite de plante cresc în această zonă.", "Un far britanic marchează vârful peninsulei încă din 1891.", "În trecut, în peșterile marine au fost observate foci călugăr."],
      en: ["The national park covers an area of 385 hectares.", "The coastal cliffs reach a height of up to 10 meters.", "Cape Greco is the easternmost point of the Republic of Cyprus.", "Over 400 different plant species are found in the area.", "A British lighthouse has marked the tip of the peninsula since 1891.", "Monk seals were historically spotted in the sea caves here."],
      es: ["El parque nacional cubre una superficie de 385 hectáreas.", "Los acantilados alcanzan una altura de hasta 10 metros.", "Cabo Greco es el punto más oriental de la República de Chipre.", "Aquí crecen más de 400 especies de plantas diferentes.", "Un faro británico marca la punta de la península desde 1891.", "Antiguamente se avistaban focas monje en las cuevas."],
      pt: ["O parque nacional cobre uma área de 385 hectares.", "As falésias atingem uma altura de até 10 metros.", "O Cabo Greco é o ponto mais oriental da República de Chipre.", "Mais de 400 espécies de plantas diferentes crescem aqui.", "Um farol britânico marca a ponta da península desde 1891.", "Antigamente eram avistadas focas nas grutas."],
      fr: ["Le parc national couvre une superficie de 385 hectares.", "Les falaises atteignent une hauteur allant jusqu'à 10 mètres.", "Le Cap Greco est le point le plus oriental de la République de Chypre.", "Plus de 400 espèces végétales différentes y poussent.", "Un phare britannique marque la pointe de la péninsule depuis 1891.", "Des phoques moines étaient autrefois aperçus dans les grottes."],
    }, image: "/poi-images/cy-cape-greco.webp",
    facts: {
      de: ["Der Park erstreckt sich über eine Fläche von fast 400 Hektar.", "Hier befindet sich die berühmte 'Liebesbrücke', ein natürlicher Steinbogen.", "Ein Netzwerk von Wanderwegen führt entlang der spektakulären Küstenlinie.", "Die Gegend ist ein beliebtes Revier für Taucher und Klippenspringer."],
      hu: ["A nemzeti park területe majdnem eléri a 400 hektárt.", "Itt található a híres 'Szerelmesek hídja' nevű természetes sziklaív.", "Túraútvonalak hálózata fut végig a látványos tengerparti vonalon.", "A környék a búvárok és a sziklaugrók egyik kedvelt találkozóhelye."],
      ro: ["Parcul național se întinde pe o suprafață de aproape 400 de hectare.", "Aici se află celebrul 'Pod al Îndrăgostiților', un arc de piatră natural.", "O rețea de trasee de drumeție străbate linia spectaculoasă a coastei.", "Zona este foarte populară printre scufundători și amatorii de salturi."],
      en: ["The national park covers an area of nearly 400 hectares.", "It features the famous 'Love Bridge', a natural limestone sea arch.", "A network of nature trails leads hikers along the dramatic coastline.", "The area is a highly popular spot for divers and cliff jumpers."],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-akamas", "sights": {
      "de": [
            {
                  "name": "Khersonesos Akama",
                  "text": "Ein unberührtes Naturschutzgebiet im Westen Zyperns mit reicher Biodiversität.",
                  "category": "natural",
                  "coords": [
                        32.313004,
                        35.011927
                  ]
            },
            {
                  "name": "Moutti tis Sotiras",
                  "text": "Ein markanter Berggipfel auf der Akamas-Halbinsel mit Panoramablick auf das Meer.",
                  "category": "landmark",
                  "coords": [
                        32.32399,
                        35.064002
                  ]
            },
            {
                  "name": "Purgos tes Regainas",
                  "text": "Die Ruinen eines mittelalterlichen Turms, der mit lokalen Legenden verbunden ist.",
                  "category": "historical",
                  "coords": [
                        32.325686,
                        35.05948
                  ]
            },
            {
                  "name": "Bad der Aphrodite",
                  "text": "Eine natürliche Grotte, in der der Legende nach die Göttin Aphrodite badete.",
                  "category": "landmark",
                  "coords": [
                        32.343854,
                        35.05636
                  ]
            },
            {
                  "name": "Smelting tower",
                  "text": "Überreste einer historischen Anlage zur Metallverarbeitung in der Region.",
                  "category": "landmark",
                  "coords": [
                        32.330198,
                        35.043514
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Khersonesos Akama",
                  "text": "Érintetlen természetvédelmi terület Ciprus nyugati részén, gazdag élővilággal.",
                  "category": "natural",
                  "coords": [
                        32.313004,
                        35.011927
                  ]
            },
            {
                  "name": "Moutti tis Sotiras",
                  "text": "Jellegzetes hegycsúcs az Akamas-félszigeten, panorámás kilátással a tengerre.",
                  "category": "landmark",
                  "coords": [
                        32.32399,
                        35.064002
                  ]
            },
            {
                  "name": "Purgos tes Regainas",
                  "text": "Egy középkori torony romjai, amelyhez helyi legendák fűződnek.",
                  "category": "historical",
                  "coords": [
                        32.325686,
                        35.05948
                  ]
            },
            {
                  "name": "Baths of Aphrodite",
                  "text": "Természetes barlang, ahol a legenda szerint Aphrodité istennő fürdött.",
                  "category": "landmark",
                  "coords": [
                        32.343854,
                        35.05636
                  ]
            },
            {
                  "name": "Smelting tower",
                  "text": "Egy történelmi fémfeldolgozó létesítmény maradványai a régióban.",
                  "category": "landmark",
                  "coords": [
                        32.330198,
                        35.043514
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Khersonesos Akama",
                  "text": "O peninsulă sălbatică și rezervație naturală în vestul Ciprului, cu o biodiversitate bogată.",
                  "category": "natural",
                  "coords": [
                        32.313004,
                        35.011927
                  ]
            },
            {
                  "name": "Moutti tis Sotiras",
                  "text": "Un vârf muntos de pe peninsula Akamas, oferind vederi panoramice spre mare.",
                  "category": "landmark",
                  "coords": [
                        32.32399,
                        35.064002
                  ]
            },
            {
                  "name": "Purgos tes Regainas",
                  "text": "Ruinele unui turn medieval, asociate cu legende locale.",
                  "category": "historical",
                  "coords": [
                        32.325686,
                        35.05948
                  ]
            },
            {
                  "name": "Baths of Aphrodite",
                  "text": "O grotă naturală unde, conform legendei, se scălda zeița Afrodita.",
                  "category": "landmark",
                  "coords": [
                        32.343854,
                        35.05636
                  ]
            },
            {
                  "name": "Smelting tower",
                  "text": "Vestigiile unei instalații istorice de prelucrare a metalelor din regiune.",
                  "category": "landmark",
                  "coords": [
                        32.330198,
                        35.043514
                  ]
            }
      ],
      "en": [
            {
                  "name": "Akamas Peninsula",
                  "text": "A pristine nature reserve in western Cyprus known for its rich biodiversity.",
                  "category": "natural",
                  "coords": [
                        32.313004,
                        35.011927
                  ]
            },
            {
                  "name": "Moutti tis Sotiras",
                  "text": "A prominent mountain peak on the Akamas Peninsula with panoramic sea views.",
                  "category": "landmark",
                  "coords": [
                        32.32399,
                        35.064002
                  ]
            },
            {
                  "name": "Pyrgos tis Rigainas",
                  "text": "The ruins of a medieval tower associated with local legends.",
                  "category": "historical",
                  "coords": [
                        32.325686,
                        35.05948
                  ]
            },
            {
                  "name": "Baths of Aphrodite",
                  "text": "A natural grotto where, according to legend, the goddess Aphrodite used to bathe.",
                  "category": "landmark",
                  "coords": [
                        32.343854,
                        35.05636
                  ]
            },
            {
                  "name": "Smelting tower",
                  "text": "Remains of a historical metal processing facility in the region.",
                  "category": "landmark",
                  "coords": [
                        32.330198,
                        35.043514
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CY-005",
    coords: [32.3167, 35.0333],
    name: { de: "Akamas-Halbinsel", hu: "Akamasz-félsziget", ro: "Peninsula Akamas", en: "Akamas Peninsula" },
    description: {
      de: "Ein Naturschutzgebiet im Westen mit unberührter Landschaft und großer Artenvielfalt.",
      hu: "Természetvédelmi terület a nyugati parton, érintetlen tájjal és gazdag élővilággal.",
      ro: "O rezervație naturală în vest, cu un peisaj neatins și o mare diversitate de specii.",
      en: "A nature reserve in the west with untouched landscapes and rich biodiversity.",
      es: "Una reserva natural en el oeste con paisajes vírgenes y gran biodiversidad.",
      pt: "Uma reserva natural no oeste com paisagens virgens e grande biodiversidade.",
      fr: "Une réserve naturelle à l'ouest avec des paysages préservés et une grande biodiversité.",
    },
    descriptionAdvanced: {
      de: "Die Akamas-Halbinsel im Nordwesten Zyperns umfasst eine Fläche von etwa 230 Quadratkilometern und stellt eines der bedeutendsten Naturschutzgebiete der Insel dar. Geologisch ist die Region durch zerklüftete Kalksteinklippen, tiefe Schluchten und unberührte Buchten wie die Blue Lagoon geprägt. Botanisch ist das Gebiet von herausragender Bedeutung, da hier über 530 Pflanzenarten wachsen, von denen 35 endemisch sind, darunter die seltene Zypern-Tulpe. An der Küste befindet sich der Lara Beach, ein kritischer Brutplatz für die bedrohten Unechten Karettschildkröten und Suppenschildkröten. In der Mythologie wird Akamas mit den Bädern der Aphrodite und der Fontana Amorosa in Verbindung gebracht, wo die Göttin der Liebe gebadet haben soll. Trotz des zunehmenden touristischen Drucks bleibt die Halbinsel weitgehend unbewohnt und bewahrt ihren wilden Charakter durch strenge Schutzbestimmungen der zypriotischen Regierung.",
      hu: "Az Akamas-félsziget Ciprus északnyugati részén található, mintegy 230 négyzetkilométernyi területet ölel fel, és a sziget egyik legjelentősebb természetvédelmi területe. Földtanilag a régiót meredek mészkősziklák, mély szurdokok és olyan érintetlen öblök jellemzik, mint a Kék Lagúna. Botanikai szempontból a terület kiemelkedő fontosságú, mivel több mint 530 növényfaj él itt, amelyek közül 35 endemikus, köztük a ciprusi tulipán. A tengerparton található a Lara-öböl, amely a veszélyeztetett álcserepes teknősök és zöld teknősök kritikus fontosságú fészkelőhelye. A mitológiában Akamaszt Aphrodité fürdőjével és a Fontana Amorosával hozzák összefüggésbe, ahol a szerelem istennője a legenda szerint fürdött. A növekvő turisztikai nyomás ellenére a félsziget nagyrészt lakatlan maradt, és szigorú védelmi előírások óvják vadregényes jellegét.",
      ro: "Peninsula Akamas, situată în nord-vestul Ciprului, acoperă o suprafață de aproximativ 230 de kilometri pătrați și reprezintă una dintre cele mai importante rezervații naturale ale insulei. Din punct de vedere geologic, regiunea este marcată de stânci de calcar abrupte, chei adânci și golfuri neatinse, precum Laguna Albastră. Botanic, zona are o importanță deosebită, găzduind peste 530 de specii de plante, dintre care 35 sunt endemice, inclusiv laleaua cipriotă. Pe coastă se află plaja Lara, un loc critic de cuibărit pentru țestoasele verzi și țestoasele cu cap pătrat, ambele specii fiind pe cale de dispariție. În mitologie, Akamas este asociat cu băile Afroditei și Fontana Amorosa, unde legenda spune că zeița iubirii se scălda. În ciuda presiunii turistice, peninsula rămâne în mare parte nelocuită, păstrându-și caracterul sălbatic prin reglementări stricte de protecție.",
      en: "The Akamas Peninsula in northwestern Cyprus covers an area of approximately 230 square kilometres and is one of the island's most significant nature reserves. Geologically, the region is characterized by rugged limestone cliffs, deep gorges, and pristine bays such as the Blue Lagoon. Botanically, the area is of outstanding importance, hosting over 530 plant species, 35 of which are endemic, including the rare Cyprus tulip. On the coast lies Lara Beach, a critical nesting ground for the endangered loggerhead and green turtles. In mythology, Akamas is associated with the Baths of Aphrodite and the Fontana Amorosa, where the goddess of love is said to have bathed. Despite increasing tourist pressure, the peninsula remains largely uninhabited and preserves its wild character through strict protective regulations implemented by the Cypriot government.",
      es: "La península de Akamas, en el noroeste de Chipre, abarca una superficie de unos 230 kilómetros cuadrados y constituye una de las reservas naturales más importantes de la isla. Geológicamente, la región se caracteriza por escarpados acantilados de piedra caliza, profundos desfiladeros y bahías vírgenes como la Laguna Azul. Botánicamente, la zona es de suma importancia, ya que aquí crecen más de 530 especies de plantas, de las cuales 35 son endémicas, incluido el raro tulipán de Chipre. En la costa se encuentra la playa de Lara, un lugar de anidación crítico para las tortugas bobas y tortugas verdes, ambas en peligro de extinción. En la mitología, Akamas se asocia con los Baños de Afrodita y la Fontana Amorosa, donde se dice que se bañaba la diosa del amor. A pesar de la creciente presión turística, la península permanece en gran parte deshabitada y conserva su carácter salvaje gracias a las estrictas normas de protección del gobierno chipriota.",
      pt: "A península de Akamas, no noroeste de Chipre, abrange uma área de cerca de 230 quilómetros quadrados e constitui uma das reservas naturais mais importantes da ilha. Geologicamente, a região é caracterizada por falésias calcárias escarpadas, desfiladeiros profundos e baías virgens como a Lagoa Azul. Botanicamente, a zona é de suma importância, pois aqui crescem mais de 530 espécies de plantas, das quais 35 são endémicas, incluindo a rara tulipa de Chipre. Na costa encontra-se a praia de Lara, um local de desova crítico para as tartarugas-comuns e tartarugas-verdes, ambas em perigo de extinção. Na mitologia, Akamas é associada aos Banhos de Afrodite e à Fontana Amorosa, onde se diz que a deusa do amor se banhava. Apesar da crescente pressão turística, a península permanece em grande parte desabitada e preserva o seu carácter selvagem graças às rigorosas normas de proteção do governo cipriota.",
      fr: "La péninsule d'Akamas, au nord-ouest de Chypre, s'étend sur une superficie d'environ 230 kilomètres carrés et constitue l'une des réserves naturelles les plus importantes de l'île. Géologiquement, la région est marquée par des falaises de calcaire escarpées, des gorges profondes et des baies vierges comme le Blue Lagoon. Botaniquement, la zone est d'une importance exceptionnelle, car plus de 530 espèces végétales y poussent, dont 35 sont endémiques, comme la rare tulipe de Chypre. Sur la côte se trouve Lara Beach, un site de reproduction critique pour les tortues caouannes et les tortues vertes menacées. Dans la mythologie, Akamas est associée aux bains d'Aphrodite et à la Fontana Amorosa, où la déesse de l'amour se serait baignée. Malgré la pression touristique croissante, la péninsule reste largement inhabitée et préserve son caractère sauvage grâce aux strictes réglementations de protection du gouvernement chypriote.",
    },
    factsAdvanced: {
      de: ["Die Halbinsel beherbergt 35 der 142 endemischen Pflanzenarten Zyperns.", "Das Lara Turtle Conservation Project schützt hier seit 1978 Schildkrötennester.", "Der Wanderweg Aphrodite Trail bietet Ausblicke aus 370 Metern Höhe.", "Die Region umfasst das letzte große unberührte Küstengebiet der Insel.", "Geologisch dominieren Kalksteinformationen aus dem Miozän.", "Die Fontana Amorosa ist eine natürliche Quelle nahe der Küste."],
      hu: ["A félsziget ad otthont Ciprus 142 endemikus növényfajából 35-nek.", "A Lara teknősvédelmi projekt 1978 óta működik a területen.", "Az Aphrodité-ösvény 370 méteres magasságból kínál kilátást.", "Ez a régió a sziget utolsó nagy érintetlen tengerparti területe.", "Földtanilag a miocén korból származó mészkőképződmények dominálnak.", "A Fontana Amorosa egy természetes forrás a tengerpart közelében."],
      ro: ["Peninsula găzduiește 35 dintre cele 142 de specii de plante endemice ale Ciprului.", "Proiectul de conservare a țestoaselor Lara funcționează aici din 1978.", "Traseul Aphrodite oferă vederi panoramice de la o altitudine de 370 de metri.", "Regiunea cuprinde ultima mare zonă de coastă virgină a insulei.", "Geologic, domină formațiunile de calcar datând din epoca miocenului.", "Fontana Amorosa este un izvor natural situat aproape de linia țărmului."],
      en: ["The peninsula hosts 35 of the 142 endemic plant species of Cyprus.", "The Lara Turtle Conservation Project has protected nests here since 1978.", "The Aphrodite Trail offers panoramic views from 370 metres above sea level.", "The region contains the last large pristine coastal area on the island.", "Geologically, the area is dominated by Miocene limestone formations.", "The Fontana Amorosa is a natural spring located near the shoreline."],
      es: ["La península alberga 35 de las 142 especies de plantas endémicas de Chipre.", "El Proyecto de Conservación de Tortugas de Lara protege aquí los nidos de tortuga desde 1978.", "El sendero Aphrodite Trail ofrece vistas desde 370 metros de altura.", "La región comprende la última gran zona costera virgen de la isla.", "Geológicamente dominan las formaciones de piedra caliza del Mioceno.", "La Fontana Amorosa es un manantial natural cerca de la costa."],
      pt: ["A península abriga 35 das 142 espécies de plantas endémicas de Chipre.", "O Projeto de Conservação de Tartarugas de Lara protege aqui os ninhos de tartaruga desde 1978.", "O trilho Aphrodite Trail oferece vistas a partir de 370 metros de altitude.", "A região compreende a última grande área costeira virgem da ilha.", "Geologicamente dominam as formações de calcário do Mioceno.", "A Fontana Amorosa é uma nascente natural perto da costa."],
      fr: ["La péninsule abrite 35 des 142 espèces végétales endémiques de Chypre.", "Le Lara Turtle Conservation Project y protège les nids de tortues depuis 1978.", "Le sentier Aphrodite Trail offre des vues imprenables depuis 370 mètres d'altitude.", "La région comprend la dernière grande zone côtière vierge de l'île.", "Les formations calcaires du Miocène dominent la géologie.", "La Fontana Amorosa est une source naturelle située près de la côte."],
    }, image: "/poi-images/cy-akamas.webp",
    facts: {
      de: ["Das Gebiet umfasst eine Fläche von etwa 230 Quadratkilometern.", "Hier nisten gefährdete Meeresschildkröten an abgelegenen Stränden.", "Es gibt über 168 verschiedene Vogelarten in diesem Nationalpark.", "Der Zugang ist größtenteils nur mit Geländewagen oder zu Fuß möglich."],
      hu: ["A terület megközelítőleg 230 négyzetkilométernyi felszínt ölel fel.", "A távoli strandokon veszélyeztetett tengeri teknősök fészkelnek.", "Ebben a nemzeti parkban több mint 168 különböző madárfaj él.", "A terület nagy része csak terepjáróval vagy gyalogosan közelíthető meg."],
      ro: ["Zona acoperă o suprafață de aproximativ 230 de kilometri pătrați.", "Țestoasele marine protejate cuibăresc pe plajele izolate de aici.", "În acest parc național pot fi observate peste 168 de specii de păsări.", "Accesul este permis în mare parte doar vehiculelor 4x4 sau drumeților."],
      en: ["The area covers a surface of approximately 230 square kilometers.", "Endangered sea turtles nest on the peninsula's secluded beaches.", "There are over 168 different species of birds within this national park.", "Most of the area is accessible only by off-road vehicles or on foot."],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-salt-lake",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6000, 34.8900],
    name: { de: "Salzsee von Larnaca", hu: "Lárnakai Sós-tó", ro: "Lacul Sărat din Larnaca", en: "Larnaca Salt Lake" },
    description: {
      de: "Ein komplexes Netzwerk von Salzseen, bekannt als Überwinterungsplatz für Flamingos.",
      hu: "Sós tavak hálózata, amely a flamingók téli menedékhelyeként ismert.",
      ro: "O rețea complexă de lacuri sărate, cunoscută ca loc de iernat pentru flamingi.",
      en: "A complex network of salt lakes, known as a wintering ground for flamingos.",
      es: "Un complejo sistema de lagos salados, conocido como lugar de hibernación para los flamencos.",
      pt: "Um complexo sistema de lagos salgados, conhecido como local de invernada para os flamingos.",
      fr: "Un réseau complexe de lacs salés, connu comme lieu d'hivernage pour les flamants roses.",
    },
    descriptionAdvanced: {
      de: "Der Salzsee von Larnaka ist ein komplexes System aus vier Salzseen mit einer Gesamtfläche von etwa 2,2 Quadratkilometern. Er ist nach dem Limassol-Salzsee das zweitgrößte Feuchtgebiet Zyperns und besitzt den Status eines Ramsar-Gebiets von internationaler Bedeutung. Im Winter füllt sich der See mit Regenwasser und bietet Lebensraum für bis zu 12.000 Flamingos, die hier überwintern. Im Sommer verdunstet das Wasser vollständig und hinterlässt eine dicke Salzkruste, die historisch eine wichtige Einnahmequelle darstellte. Am Ufer des Sees steht die Hala Sultan Tekke, eine der heiligsten Moscheen der muslimischen Welt, die 1816 über dem Grab der Tante des Propheten Mohammed errichtet wurde. Die ökologische Balance des Sees ist heute durch die Nähe zum Flughafen Larnaka und städtische Expansion gefährdet.",
      hu: "A Larnaca-sóstó egy négy tóból álló komplex rendszer, amelynek összterülete körülbelül 2,2 négyzetkilométer. Ez Ciprus második legnagyobb vizes élőhelye a Limassol-sóstó után, és nemzetközi jelentőségű Ramsari terület státusszal rendelkezik. Télen a tó megtelik esővízzel, és akár 12 000 flamingónak is élőhelyet biztosít, amelyek itt telelnek át. Nyáron a víz teljesen elpárolog, vastag sókérget hagyva maga után, amely történelmileg fontos bevételi forrás volt a sziget számára. A tó partján áll a Hala Sultan Tekke, a muszlim világ egyik legszentebb mecsete, amelyet 1816-ban emeltek Mohamed próféta nagynénjének sírja fölé. A tó ökológiai egyensúlyát ma a larnacai repülőtér közelsége és a városi terjeszkedés veszélyezteti.",
      ro: "Lacul Sărat din Larnaca este un sistem complex format din patru lacuri sărate, cu o suprafață totală de aproximativ 2,2 kilometri pătrați. Este a doua cea mai mare zonă umedă din Cipru, după Lacul Sărat din Limassol, și deține statutul de sit Ramsar de importanță internațională. În timpul iernii, lacul se umple cu apă de ploaie, oferind habitat pentru până la 12.000 de flamingo care iernează aici. Vara, apa se evaporă complet, lăsând în urmă o crustă groasă de sare, care istoric a reprezentat o sursă importantă de venit. Pe malul lacului se află Hala Sultan Tekke, una dintre cele mai sacre moschei din lumea musulmană, construită în 1816 peste mormântul mătușii profetului Mahomed. Echilibrul ecologic al lacului este astăzi amenințat de proximitatea aeroportului din Larnaca și de expansiunea urbană.",
      en: "The Larnaca Salt Lake is a complex network of four salt lakes with a total surface area of approximately 2.2 square kilometres. It is the second-largest wetland in Cyprus after the Limassol Salt Lake and holds the status of a Ramsar site of international importance. During the winter, the lake fills with rainwater, providing a vital habitat for up to 12,000 flamingos that spend the season here. In the summer, the water evaporates completely, leaving behind a thick crust of salt that was historically a major source of revenue for the island. On the lake's shores stands the Hala Sultan Tekke, one of the holiest mosques in the Muslim world, built in 1816 over the tomb of Prophet Muhammad's aunt. The lake's ecological balance is currently challenged by the proximity of Larnaca Airport and urban expansion.",
      es: "El Lago Salado de Lárnaca es un sistema complejo de cuatro lagos salados con una superficie total de unos 2,2 kilómetros cuadrados. Es el segundo humedal más grande de Chipre después del lago salado de Limassol y tiene el estatus de sitio Ramsar de importancia internacional. En invierno, el lago se llena de agua de lluvia y ofrece hábitat a hasta 12.000 flamencos que hibernan aquí. En verano, el agua se evapora por completo, dejando una gruesa costra de sal que históricamente fue una importante fuente de ingresos. A orillas del lago se encuentra la Hala Sultan Tekke, una de las mezquitas más sagradas del mundo musulmán, construida en 1816 sobre la tumba de la tía del profeta Mahoma. El equilibrio ecológico del lago está hoy amenazado por la proximidad al aeropuerto de Lárnaca y la expansión urbana.",
      pt: "O Lago Salgado de Larnaca é um sistema complexo de quatro lagos salgados com uma área total de cerca de 2,2 quilómetros quadrados. É a segunda maior zona húmida de Chipre, depois do lago salgado de Limassol, e detém o estatuto de sítio Ramsar de importância internacional. No inverno, o lago enche-se com água da chuva e oferece habitat a até 12.000 flamingos que aqui invernam. No verão, a água evapora-se completamente, deixando uma espessa crosta de sal que, historicamente, foi uma importante fonte de rendimento. Nas margens do lago situa-se a Hala Sultan Tekke, uma das mesquitas mais sagradas do mundo muçulmano, construída em 1816 sobre o túmulo da tia do profeta Maomé. O equilíbrio ecológico do lago está hoje ameaçado pela proximidade do aeroporto de Larnaca e pela expansão urbana.",
      fr: "Le lac salé de Larnaca est un système complexe de quatre lacs salés d'une superficie totale d'environ 2,2 kilomètres carrés. C'est la deuxième plus grande zone humide de Chypre après le lac salé de Limassol et il possède le statut de site Ramsar d'importance internationale. En hiver, le lac se remplit d'eau de pluie et offre un habitat à près de 12 000 flamants roses qui y hivernent. En été, l'eau s'évapore complètement, laissant une épaisse croûte de sel qui constituait historiquement une importante source de revenus. Sur les rives du lac se dresse la Hala Sultan Tekke, l'une des mosquées les plus sacrées du monde musulman, érigée en 1816 sur la tombe de la tante du prophète Mahomet. L'équilibre écologique du lac est aujourd'hui menacé par la proximité de l'aéroport de Larnaca et l'expansion urbaine.",
    },
    factsAdvanced: {
      de: ["Der See wurde 2001 offiziell als Ramsar-Feuchtgebiet deklariert.", "Die kommerzielle Salzgewinnung wurde erst im Jahr 1986 eingestellt.", "Zwischen 2.000 und 12.000 Flamingos besuchen den See jährlich im Winter.", "Das Seebecken liegt etwa 1,5 Meter unter dem Meeresspiegel.", "Archäologische Funde belegen eine Besiedlung am Ufer seit der Spätbronzezeit.", "Hala Sultan Tekke gilt als viertheiligste Stätte des Islam."],
      hu: ["A tavat 2001-ben hivatalosan Ramsari vizes élőhellyé nyilvánították.", "A kereskedelmi célú sókitermelés csak 1986-ban szűnt meg.", "Évente 2000 és 12 000 közötti flamingó telel a tónál.", "A tó medre körülbelül 1,5 méterrel a tengerszint alatt fekszik.", "Régészeti leletek bizonyítják a partmenti lakottságot a késő bronzkor óta.", "A Hala Sultan Tekke az iszlám negyedik legszentebb helyének számít."],
      ro: ["Lacul a fost declarat oficial zonă umedă Ramsar în anul 2001.", "Exploatarea comercială a sării a încetat abia în anul 1986.", "Între 2.000 și 12.000 de flamingo vizitează lacul anual în timpul iernii.", "Fundul lacului se află la aproximativ 1,5 metri sub nivelul mării.", "Descoperirile arheologice atestă așezări pe malul lacului încă din epoca bronzului târziu.", "Hala Sultan Tekke este considerată a patra cea mai sfântă locație a islamului."],
      en: ["The lake was officially designated as a Ramsar wetland site in 2001.", "Commercial salt harvesting at the lake only ceased in 1986.", "Between 2,000 and 12,000 flamingos migrate to the lake every winter.", "The lake bed sits approximately 1.5 metres below sea level.", "Archaeological evidence shows settlement on the shores since the Late Bronze Age.", "Hala Sultan Tekke is regarded as the fourth holiest site in Islam."],
      es: ["El lago fue declarado oficialmente humedal Ramsar en 2001.", "La extracción comercial de sal no se interrumpió hasta el año 1986.", "Entre 2.000 y 12.000 flamencos visitan el lago anualmente en invierno.", "La cuenca del lago se encuentra a unos 1,5 metros bajo el nivel del mar.", "Los hallazgos arqueológicos demuestran un asentamiento en la orilla desde la Edad del Bronce Final.", "Hala Sultan Tekke es considerada el cuarto lugar más sagrado del Islam."],
      pt: ["O lago foi oficialmente declarado zona húmida Ramsar em 2001.", "A extração comercial de sal só foi interrompida em 1986.", "Entre 2.000 e 12.000 flamingos visitam o lago anualmente no inverno.", "A bacia do lago situa-se a cerca de 1,5 metros abaixo do nível do mar.", "Achados arqueológicos comprovam a existência de povoações na margem desde a Idade do Bronze Final.", "Hala Sultan Tekke é considerada o quarto local mais sagrado do Islão."],
      fr: ["Le lac a été officiellement déclaré zone humide Ramsar en 2001.", "L'extraction commerciale du sel n'a cessé qu'en 1986.", "Entre 2 000 et 12 000 flamants roses visitent le lac chaque année en hiver.", "Le bassin du lac se situe à environ 1,5 mètre en dessous du niveau de la mer.", "Des découvertes archéologiques prouvent une occupation des rives depuis l'âge du bronze final.", "Hala Sultan Tekke est considérée comme le quatrième site le plus sacré de l'Islam."],
    }, image: "/poi-images/cy-salt-lake.webp",
    facts: {
      de: ["Zweitgrößter Salzsee der Insel", "Überwinterungsort für Flamingos", "Besteht aus vier Einzelseen", "Historische Salzgewinnung"],
      hu: ["Ciprus második legnagyobb sós tava", "Flamingók kedvelt pihenőhelye", "Négy kisebb tóból áll", "Hajdanán sót bányásztak itt"],
      ro: ["Al doilea lac sărat ca mărime", "Loc de iernare pentru flamingo", "Format din patru bazine", "Sursă istorică de sare"],
      en: ["Second largest salt lake in Cyprus", "Winter home for flamingos", "Consists of four distinct lakes", "Historic site for salt harvesting"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-aphrodite-rock", "sights": {
      "de": [
            {
                  "name": "Ligrin tou Digeni",
                  "text": "Archäologische Ausgrabungsstätte in der Nähe des berühmten Aphrodite-Felsens.",
                  "category": "historical",
                  "coords": [
                        32.624028,
                        34.690466
                  ]
            },
            {
                  "name": "Ethniko Dasiko Parko Petra tou Romiou",
                  "text": "Ein geschütztes Waldgebiet, das die Küstenformation Petra tou Romiou umgibt.",
                  "category": "natural",
                  "coords": [
                        32.621171,
                        34.671501
                  ]
            },
            {
                  "name": "Aphrodite's Rock - Petra Tou Romiou",
                  "text": "Ein markanter Felsen an der Küste, der als Geburtsort der Aphrodite gilt.",
                  "category": "landmark",
                  "coords": [
                        32.627071,
                        34.664091
                  ]
            },
            {
                  "name": "Saracens rock",
                  "text": "Eine interessante Felsformation in der Nähe von Petra tou Romiou.",
                  "category": "landmark",
                  "coords": [
                        32.634543,
                        34.663105
                  ]
            },
            {
                  "name": "Kiln",
                  "text": "Ruinen eines alten Brennofens an der zyprischen Küste.",
                  "category": "historical",
                  "coords": [
                        32.61068,
                        34.685728
                  ]
            },
            {
                  "name": "Ancient Olive Press",
                  "text": "Historische Überreste einer antiken Olivenpresse in der Region Paphos.",
                  "category": "historical",
                  "coords": [
                        32.608691,
                        34.679421
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Ligrin tou Digeni",
                  "text": "Régészeti lelőhely a híres Aphrodité-szikla közelében.",
                  "category": "historical",
                  "coords": [
                        32.624028,
                        34.690466
                  ]
            },
            {
                  "name": "Ethniko Dasiko Parko Petra tou Romiou",
                  "text": "Védett erdős terület, amely körülveszi a Petra tou Romiou parti képződményt.",
                  "category": "natural",
                  "coords": [
                        32.621171,
                        34.671501
                  ]
            },
            {
                  "name": "Petra tou Romiou",
                  "text": "Jellegzetes szikla a tengerparton, amelyet Aphrodité születési helyének tartanak.",
                  "category": "landmark",
                  "coords": [
                        32.627071,
                        34.664091
                  ]
            },
            {
                  "name": "Saracens rock",
                  "text": "Érdekes sziklaalakzat Petra tou Romiou közelében.",
                  "category": "landmark",
                  "coords": [
                        32.634543,
                        34.663105
                  ]
            },
            {
                  "name": "Kiln",
                  "text": "Egy régi égetőkemence romjai a ciprusi tengerparton.",
                  "category": "historical",
                  "coords": [
                        32.61068,
                        34.685728
                  ]
            },
            {
                  "name": "Ancient Olive Press",
                  "text": "Egy antik olajprés történelmi maradványai Paphos régiójában.",
                  "category": "historical",
                  "coords": [
                        32.608691,
                        34.679421
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Ligrin tou Digeni",
                  "text": "Situl arheologic situat în apropierea celebrei stânci a Afroditei.",
                  "category": "historical",
                  "coords": [
                        32.624028,
                        34.690466
                  ]
            },
            {
                  "name": "Ethniko Dasiko Parko Petra tou Romiou",
                  "text": "O zonă forestieră protejată care înconjoară formațiunea de coastă Petra tou Romiou.",
                  "category": "natural",
                  "coords": [
                        32.621171,
                        34.671501
                  ]
            },
            {
                  "name": "Petra tou Romiou",
                  "text": "O stâncă proeminentă de pe coastă, considerată locul de naștere al Afroditei.",
                  "category": "landmark",
                  "coords": [
                        32.627071,
                        34.664091
                  ]
            },
            {
                  "name": "Saracens rock",
                  "text": "O formațiune stâncoasă interesantă situată lângă Petra tou Romiou.",
                  "category": "landmark",
                  "coords": [
                        32.634543,
                        34.663105
                  ]
            },
            {
                  "name": "Kiln",
                  "text": "Ruinele unui cuptor vechi pe coasta cipriotă.",
                  "category": "historical",
                  "coords": [
                        32.61068,
                        34.685728
                  ]
            },
            {
                  "name": "Ancient Olive Press",
                  "text": "Rămășițele istorice ale unei vechi prese de măsline din regiunea Paphos.",
                  "category": "historical",
                  "coords": [
                        32.608691,
                        34.679421
                  ]
            }
      ],
      "en": [
            {
                  "name": "Ligrin tou Digeni",
                  "text": "Archaeological site located near the famous Aphrodite's Rock.",
                  "category": "historical",
                  "coords": [
                        32.624028,
                        34.690466
                  ]
            },
            {
                  "name": "Petra tou Romiou National Forest Park",
                  "text": "A protected forest area surrounding the Petra tou Romiou coastal formation.",
                  "category": "natural",
                  "coords": [
                        32.621171,
                        34.671501
                  ]
            },
            {
                  "name": "Petra tou Romiou",
                  "text": "A prominent rock on the coast, regarded as the birthplace of Aphrodite.",
                  "category": "landmark",
                  "coords": [
                        32.627071,
                        34.664091
                  ]
            },
            {
                  "name": "Saracens rock",
                  "text": "An interesting rock formation located near Petra tou Romiou.",
                  "category": "landmark",
                  "coords": [
                        32.634543,
                        34.663105
                  ]
            },
            {
                  "name": "Kiln",
                  "text": "Ruins of an old kiln on the Cypriot coast.",
                  "category": "historical",
                  "coords": [
                        32.61068,
                        34.685728
                  ]
            },
            {
                  "name": "Ancient Olive Press",
                  "text": "Historical remains of an ancient olive press in the Paphos region.",
                  "category": "historical",
                  "coords": [
                        32.608691,
                        34.679421
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CY-005",
    coords: [32.6269, 34.6642],
    name: { de: "Felsen der Aphrodite", hu: "Aphrodité sziklája", ro: "Stânca Afroditei", en: "Aphrodite's Rock (Petra tou Romiou)" },
    description: {
      de: "Eine markante Felsformation im Meer, der legendäre Geburtsort der Göttin Aphrodite.",
      hu: "Különleges sziklaalakzat a tengerben, Aphrodité istennő legendás szülőhelye.",
      ro: "O formațiune stâncoasă impresionantă în mare, locul legendar de naștere al zeiței Afrodita.",
      en: "A striking sea stack, the legendary birthplace of the goddess Aphrodite.",
      es: "Una llamativa formación rocosa en el mar, el legendario lugar de nacimiento de la diosa Afrodita.",
      pt: "Uma formação rochosa marcante no mar, o lendário local de nascimento da deusa Afrodite.",
      fr: "Une formation rocheuse remarquable dans la mer, lieu de naissance légendaire de la déesse Aphrodite.",
    },
    descriptionAdvanced: {
      de: "Der Aphrodite-Felsen, lokal als Petra tou Romiou bekannt, ist eine markante geologische Formation an der Südwestküste Zyperns bei Kouklia. Dieser Brandungspfeiler besteht aus Kalkstein und ragt imposant aus dem Mittelmeer empor. Der Name Petra tou Romiou (Fels des Griechen) bezieht sich auf den legendären Helden Basil, der laut Überlieferung riesige Felsen auf Invasoren schleuderte. In der antiken griechischen Mythologie gilt dieser Ort als Geburtsstätte der Aphrodite, die hier den Wellen entstiegen sein soll. Die Umgebung ist Teil des UNESCO-Welterbes von Paphos und stellt einen bedeutenden kulturellen Ankerpunkt dar. Trotz seiner mythologischen Bedeutung ist das Schwimmen direkt am Felsen aufgrund starker Strömungen und rauher See oft gefährlich. Die geologische Struktur ist ein Ergebnis tektonischer Hebungen und langanhaltender Küstenerosion.",
      hu: "Az Aphrodité-szikla, helyi nevén Petra tou Romiou, egy jellegzetes földtani képződmény Ciprus délnyugati partján, Kouklia közelében. Ez a tengeri szikla mészkőből áll, és impozánsan emelkedik ki a Földközi-tengerből. A Petra tou Romiou (a Görög sziklája) név a legendás hősre, Vaszilioszra utal, aki a hagyomány szerint hatalmas sziklákat hajított a betolakodókra. Az ókori görög mitológiában ezt a helyet Aphrodité születési helyének tekintik, aki a legenda szerint itt emelkedett ki a habokból. A környék a pafoszi UNESCO világörökség része, és jelentős kulturális tartópillér. Mitológiai jelentősége ellenére a közvetlenül a sziklánál való úszás a erős áramlatok és a viharos tenger miatt gyakran veszélyes. A geológiai szerkezet a tektonikus emelkedés és a hosszan tartó partmenti erózió eredménye.",
      ro: "Stânca Afroditei, cunoscută local sub numele de Petra tou Romiou, este o formațiune geologică distinctivă situată pe coasta de sud-vest a Ciprului, lângă Kouklia. Această coloană de stâncă marină este formată din calcar și se ridică impunător din Marea Mediterană. Numele Petra tou Romiou (Stânca Grecului) se referă la legendarul erou Vasile, care, conform tradiției, a aruncat stânci uriașe asupra invadatorilor. În mitologia greacă antică, acest loc este considerat locul de naștere al Afroditei, care se spune că a ieșit aici din spuma mării. Zona înconjurătoare face parte din patrimoniul mondial UNESCO din Paphos și reprezintă un punct cultural de referință. În ciuda semnificației sale mitologice, înotul direct lângă stâncă este adesea periculos din cauza curenților puternici. Structura geologică este rezultatul ridicărilor tectonice și al eroziunii costiere prelungite.",
      en: "Aphrodite's Rock, locally known as Petra tou Romiou, is a prominent geological formation on the southwestern coast of Cyprus near Kouklia. This sea stack is composed of limestone and rises imposingly from the Mediterranean waters. The name Petra tou Romiou (Rock of the Greek) refers to the legendary hero Basil, who according to tradition hurled giant boulders at invaders. In ancient Greek mythology, this site is revered as the birthplace of Aphrodite, who is said to have emerged from the sea foam here. The surrounding area is part of the Paphos UNESCO World Heritage site and serves as a major cultural landmark. Despite its mythological allure, swimming directly around the rock is often hazardous due to strong currents and rough seas. The geological structure resulted from tectonic uplift and sustained coastal erosion over millennia.",
      es: "La Roca de Afrodita, conocida localmente como Petra tou Romiou, es una formación geológica prominente en la costa suroeste de Chipre, cerca de Kouklia. Este pilar marino está compuesto de piedra caliza y se eleva imponentemente sobre el Mediterráneo. El nombre Petra tou Romiou (Roca del Griego) se refiere al legendario héroe Basil, quien según la tradición arrojó rocas gigantes contra los invasores. En la mitología griega antigua, este lugar es considerado el lugar de nacimiento de Afrodita, quien se dice que surgió de las olas aquí. El área circundante forma parte del Patrimonio de la Humanidad de la UNESCO de Pafos y representa un importante punto de anclaje cultural. A pesar de su importancia mitológica, nadar directamente en la roca suele ser peligroso debido a las fuertes corrientes y al mar agitado. La estructura geológica es el resultado de levantamientos tectónicos y una prolongada erosión costera.",
      pt: "A Rocha de Afrodite, conhecida localmente como Petra tou Romiou, é uma formação geológica proeminente na costa sudoeste de Chipre, perto de Kouklia. Este pilar marinho é composto por calcário e ergue-se imponentemente sobre o Mediterrâneo. O nome Petra tou Romiou (Rocha do Grego) refere-se ao lendário herói Basil, que, segundo a tradição, lançou rochas gigantes contra invasores. Na mitologia grega antiga, este local é considerado o berço de Afrodite, que aqui terá emergido das ondas. A área circundante faz parte do Património Mundial da UNESCO de Pafos e representa um importante ponto de referência cultural. Apesar da sua importância mitológica, nadar diretamente na rocha é muitas vezes perigoso devido às fortes correntes e ao mar agitado. A estrutura geológica é o resultado de levantamentos tectónicos e de uma erosão costeira prolongada.",
      fr: "Le rocher d'Aphrodite, connu localement sous le nom de Petra tou Romiou, est une formation géologique remarquable sur la côte sud-ouest de Chypre, près de Kouklia. Ce stack marin est composé de calcaire et s'élève de manière imposante au-dessus de la mer Méditerranée. Le nom Petra tou Romiou (le rocher du Grec) fait référence au héros légendaire Basile qui, selon la tradition, aurait jeté d'énormes rochers sur les envahisseurs. Dans la mythologie grecque antique, ce lieu est considéré comme le lieu de naissance d'Aphrodite, qui serait sortie des flots ici même. Les environs font partie du patrimoine mondial de l'UNESCO de Paphos et constituent un point d'ancrage culturel majeur. Malgré son importance mythologique, la baignade directe au rocher est souvent dangereuse en raison de courants forts et d'une mer agitée. La structure géologique est le résultat de soulèvements tectoniques et d'une érosion côtière de longue durée.",
    },
    factsAdvanced: {
      de: ["Der Felsen liegt etwa 15 Kilometer südöstlich der Stadt Paphos.", "Geologisch handelt es sich um ein Fragment einer afrikanischen Kontinentalplatte.", "Eine lokale Legende besagt, dass dreimaliges Umrunden des Felsens ewige Jugend verleiht.", "Die Formation besteht aus hartem Kreide-Kalkstein.", "Der Name Petra tou Romiou ehrt den byzantinischen Helden Digenis Akritas.", "Der Ort ist seit dem 12. Jahrhundert v. Chr. mit dem Aphrodite-Kult verbunden."],
      hu: ["A szikla körülbelül 15 kilométerre délkeletre található Paphos városától.", "Földtanilag a szikla az afrikai kontinentális lemez egy töredéke.", "Egy helyi legenda szerint a szikla háromszori körbeúszása örök fiatalságot ad.", "A képződmény kemény kréta-kori mészkőből áll.", "A Petra tou Romiou név a bizánci hős, Digenisz Akritasz előtt tiszteleg.", "A helyszín az i. e. 12. század óta kapcsolódik az Aphrodité-kultuszhoz."],
      ro: ["Stânca se află la aproximativ 15 kilometri sud-est de orașul Paphos.", "Geologic, stânca este un fragment al plăcii continentale africane.", "O legendă locală spune că înotul în jurul stâncii de trei ori oferă tinerețe veșnică.", "Formațiunea este compusă din calcar cretacic dur.", "Numele Petra tou Romiou îl onorează pe eroul bizantin Digenis Akritas.", "Locul este asociat cu cultul Afroditei încă din secolul al XII-lea î.Hr."],
      en: ["The rock is situated approximately 15 kilometres southeast of Paphos city.", "Geologically, the stack is a fragment of the African continental plate.", "A local legend claims that swimming around the rock three times grants eternal youth.", "The formation is composed of hard Cretaceous limestone.", "The name Petra tou Romiou honours the Byzantine hero Digenis Akritas.", "The site has been associated with the cult of Aphrodite since the 12th century BC."],
      es: ["La roca se encuentra a unos 15 kilómetros al sureste de la ciudad de Pafos.", "Geológicamente, se trata de un fragmento de una placa continental africana.", "Una leyenda local dice que rodear la roca tres veces otorga la juventud eterna.", "La formación consiste en piedra caliza cretácica dura.", "El nombre Petra tou Romiou honra al héroe bizantino Digenis Akritas.", "El lugar está vinculado al culto de Afrodita desde el siglo XII a.C."],
      pt: ["A rocha situa-se a cerca de 15 quilómetros a sudeste da cidade de Pafos.", "Geologicamente, trata-se de um fragmento de uma placa continental africana.", "Uma lenda local diz que contornar a rocha três vezes concede juventude eterna.", "A formação consiste em calcário cretáceo duro.", "O nome Petra tou Romiou homenageia o herói bizantino Digenis Akritas.", "O local está ligado ao culto de Afrodite desde o século XII a.C."],
      fr: ["Le rocher est situé à environ 15 kilomètres au sud-est de la ville de Paphos.", "Géologiquement, il s'agit d'un fragment d'une plaque continentale africaine.", "Une légende locale raconte que faire trois fois le tour du rocher apporte la jeunesse éternelle.", "La formation est composée de calcaire crayeux dur.", "Le nom Petra tou Romiou rend hommage au héros byzantin Digénis Akritas.", "Le site est lié au culte d'Aphrodite depuis le XIIe siècle av. J.-C."],
    }, image: "/poi-images/cy-aphrodite-rock.webp",
    facts: {
      de: ["Der Ort wird lokal auch Petra tou Romiou (Fels des Griechen) genannt.", "Die markante Felsformation liegt an der Küstenstraße zwischen Paphos und Limassol.", "Eine Legende besagt, dass dreimaliges Umrunden des Felsens ewige Jugend bringt.", "Wegen starker Strömungen ist das Schwimmen um den Felsen nicht empfohlen."],
      hu: ["A helyi lakosok Petra tou Romiounak, azaz Görög sziklának is hívják.", "A látványos formáció a Páfosz és Limassol közötti parti út mentén fekszik.", "A monda szerint aki háromszor körbeússza a sziklát, örök ifjúságot nyer.", "Az erős áramlatok miatt a szikla körüli úszás nem mindig biztonságos."],
      ro: ["Locul este cunoscut local și sub numele de Petra tou Romiou.", "Formațiunea este situată pe drumul de coastă între Paphos și Limassol.", "Legenda spune că înconjurarea stâncii de trei ori aduce tinerețe veșnică.", "Din cauza curenților puternici, înotul în jurul stâncii nu este recomandat."],
      en: ["The site is also known locally as Petra tou Romiou (Rock of the Greek).", "The iconic formation is located on the coast road between Paphos and Limassol.", "Legend claims that swimming around the rock three times grants eternal youth.", "Due to strong sea currents, swimming around the stack is not advised."],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-avakas-gorge", "sights": {
      "de": [
            {
                  "name": "Paralia Aspropotamoy",
                  "text": "Paralia Aspropotamou ist ein Strand bei der Avakas-Schlucht.",
                  "category": "recreational",
                  "coords": [
                        32.326024,
                        34.912006
                  ]
            },
            {
                  "name": "Pafos Zoo",
                  "text": "Der erste und größte Zoo auf Zypern mit einer Vielzahl exotischer Tiere.",
                  "category": "recreational",
                  "coords": [
                        32.341857,
                        34.892897
                  ]
            },
            {
                  "name": "The Necropolis at Meletis Forest",
                  "text": "Eine antike Begräbnisstätte in einem Waldgebiet nahe der Akamas-Halbinsel.",
                  "category": "historical",
                  "coords": [
                        32.328602,
                        34.905011
                  ]
            },
            {
                  "name": "Kafizis Beach",
                  "text": "Ein naturbelassener Küstenabschnitt in der Region Paphos.",
                  "category": "recreational",
                  "coords": [
                        32.323007,
                        34.894662
                  ]
            },
            {
                  "name": "Agios Georgios Ancient Basilikas",
                  "text": "Ruinen frühchristlicher Basiliken mit gut erhaltenen Mosaikböden.",
                  "category": "historical",
                  "coords": [
                        32.321154,
                        34.902171
                  ]
            },
            {
                  "name": "Traditional Clothes Museum",
                  "text": "Ein Museum, das die traditionelle zypriotische Kleidung und Handwerkskunst ausstellt.",
                  "category": "museum",
                  "coords": [
                        32.342799,
                        34.893702
                  ]
            },
            {
                  "name": "Asian Elephant Interactions",
                  "text": "Ein Bereich im Pafos Zoo, der Begegnungen mit asiatischen Elefanten ermöglicht.",
                  "category": "recreational",
                  "coords": [
                        32.341594,
                        34.89173
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Paralia Aspropotamoy",
                  "text": "A Paralia Aspropotamou egy strand az Avakas-szurdok közelében.",
                  "category": "recreational",
                  "coords": [
                        32.326024,
                        34.912006
                  ]
            },
            {
                  "name": "Pafos Zoo",
                  "text": "Ciprus első és legnagyobb állatkertje, számos egzotikus állattal.",
                  "category": "recreational",
                  "coords": [
                        32.341857,
                        34.892897
                  ]
            },
            {
                  "name": "The Necropolis at Meletis Forest",
                  "text": "Ókori temetkezési hely az Akamas-félsziget közelében lévő erdőben.",
                  "category": "historical",
                  "coords": [
                        32.328602,
                        34.905011
                  ]
            },
            {
                  "name": "Kafizis Beach",
                  "text": "Természetközeli tengerparti szakasz Paphos régiójában.",
                  "category": "recreational",
                  "coords": [
                        32.323007,
                        34.894662
                  ]
            },
            {
                  "name": "Agios Georgios Ancient Basilikas",
                  "text": "Kora keresztény bazilikák romjai jól megőrzött mozaikpadlókkal.",
                  "category": "historical",
                  "coords": [
                        32.321154,
                        34.902171
                  ]
            },
            {
                  "name": "Traditional Clothes Museum",
                  "text": "A hagyományos ciprusi viseleteket és kézművességet bemutató múzeum.",
                  "category": "museum",
                  "coords": [
                        32.342799,
                        34.893702
                  ]
            },
            {
                  "name": "Asian Elephant Interactions",
                  "text": "A Pafos Zoo területe, ahol ázsiai elefántokkal lehet találkozni.",
                  "category": "recreational",
                  "coords": [
                        32.341594,
                        34.89173
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Paralia Aspropotamoy",
                  "text": "Paralia Aspropotamou este o plajă lângă Cheile Avakas.",
                  "category": "recreational",
                  "coords": [
                        32.326024,
                        34.912006
                  ]
            },
            {
                  "name": "Pafos Zoo",
                  "text": "Prima și cea mai mare grădină zoologică din Cipru, cu o varietate de animale exotice.",
                  "category": "recreational",
                  "coords": [
                        32.341857,
                        34.892897
                  ]
            },
            {
                  "name": "The Necropolis at Meletis Forest",
                  "text": "O necropolă antică situată într-o zonă împădurită lângă peninsula Akamas.",
                  "category": "historical",
                  "coords": [
                        32.328602,
                        34.905011
                  ]
            },
            {
                  "name": "Kafizis Beach",
                  "text": "O porțiune de coastă naturală situată în regiunea Paphos.",
                  "category": "recreational",
                  "coords": [
                        32.323007,
                        34.894662
                  ]
            },
            {
                  "name": "Agios Georgios Ancient Basilikas",
                  "text": "Ruinele unor bazilici creștine timpurii, cu pardoseli de mozaic bine conservate.",
                  "category": "historical",
                  "coords": [
                        32.321154,
                        34.902171
                  ]
            },
            {
                  "name": "Traditional Clothes Museum",
                  "text": "Un muzeu care expune îmbrăcămintea tradițională cipriotă și meșteșugurile locale.",
                  "category": "museum",
                  "coords": [
                        32.342799,
                        34.893702
                  ]
            },
            {
                  "name": "Asian Elephant Interactions",
                  "text": "O zonă din grădina zoologică din Pafos care permite interacțiunea cu elefanți asiatici.",
                  "category": "recreational",
                  "coords": [
                        32.341594,
                        34.89173
                  ]
            }
      ],
      "en": [
            {
                  "name": "Paralia Aspropotamoy",
                  "text": "Paralia Aspropotamou is a beach near Avakas Gorge.",
                  "category": "recreational",
                  "coords": [
                        32.326024,
                        34.912006
                  ]
            },
            {
                  "name": "Pafos Zoo",
                  "text": "The first and largest zoo in Cyprus, featuring a variety of exotic animals.",
                  "category": "recreational",
                  "coords": [
                        32.341857,
                        34.892897
                  ]
            },
            {
                  "name": "The Necropolis at Meletis Forest",
                  "text": "An ancient burial site located in a forested area near the Akamas Peninsula.",
                  "category": "historical",
                  "coords": [
                        32.328602,
                        34.905011
                  ]
            },
            {
                  "name": "Kafizis Beach",
                  "text": "A natural coastal stretch located in the Paphos region.",
                  "category": "recreational",
                  "coords": [
                        32.323007,
                        34.894662
                  ]
            },
            {
                  "name": "Agios Georgios Ancient Basilikas",
                  "text": "Ruins of early Christian basilicas featuring well-preserved mosaic floors.",
                  "category": "historical",
                  "coords": [
                        32.321154,
                        34.902171
                  ]
            },
            {
                  "name": "Traditional Clothes Museum",
                  "text": "A museum showcasing traditional Cypriot clothing and local craftsmanship.",
                  "category": "museum",
                  "coords": [
                        32.342799,
                        34.893702
                  ]
            },
            {
                  "name": "Asian Elephant Interactions",
                  "text": "An area within Pafos Zoo offering interactions with Asian elephants.",
                  "category": "recreational",
                  "coords": [
                        32.341594,
                        34.89173
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CY-005",
    coords: [32.3333, 34.9250],
    name: { de: "Avakas-Schlucht", hu: "Avakas-szurdok", ro: "Cheile Avakas", en: "Avakas Gorge" },
    description: {
      de: "Eine tiefe, steile Schlucht auf der Akamas-Halbinsel, beliebt bei Wanderern.",
      hu: "Egy mély, meredek szurdok az Akamasz-félszigeten, kedvelt túrázóhely.",
      ro: "Un defileu adânc și abrupt pe Peninsula Akamas, popular printre drumeți.",
      en: "A deep, steep gorge on the Akamas Peninsula, popular with hikers.",
      es: "Un desfiladero profundo y escarpado en la península de Akamas, popular entre los excursionistas.",
      pt: "Um desfiladeiro profundo e íngreme na península de Akamas, popular entre os caminhantes.",
      fr: "Une gorge profonde et escarpée sur la péninsule d'Akamas, prisée des randonneurs.",
    },
    descriptionAdvanced: {
      de: "Die Avakas-Schlucht ist ein beeindruckendes Naturdenkmal am westlichen Rand der Akamas-Halbinsel in der Nähe von Paphos. Die Schlucht wurde über Jahrtausende durch die erosive Kraft eines kleinen Baches in den weichen Kalkstein gegraben. Sie erstreckt sich über eine Länge von etwa drei Kilometern, wobei die Wände an einigen Stellen bis zu 30 Meter senkrecht in die Höhe ragen. Die engste Stelle der Passage misst lediglich wenige Meter Breite, was ein intensives geologisches Erlebnis bietet. Botanisch ist die Schlucht ein Rückzugsort für seltene Arten wie die Centaurea akamantis, eine endemische Pflanze, die nur in diesem Gebiet vorkommt. Der Pfad durch die Schlucht ist oft rutschig und bei Regen aufgrund der Gefahr von Sturzfluten lebensgefährlich. Die Formationen zeigen deutlich die Schichtung des Sediments und die dynamische Veränderung der zyprischen Landschaft.",
      hu: "Az Avakas-szurdok Ciprus nyugati szélén, az Akamas-félszigeten, Paphos közelében található lenyűgöző természeti emlék. A szurdokot évezredek alatt vájta ki egy kis patak eróziós ereje a puha mészkőbe. Körülbelül három kilométer hosszan húzódik, falaik helyenként akár 30 méter magasságba is emelkednek. A folyosó legszűkebb pontja mindössze néhány méter széles, ami intenzív geológiai élményt nyújt. Botanikai szempontból a szurdok olyan ritka fajok menedékhelye, mint a Centaurea akamantis, egy endemikus növény, amely csak ezen a területen található meg. A szurdokon átvezető ösvény gyakran csúszós, és esőzés idején a hirtelen áradások veszélye miatt életveszélyes. A képződmények tisztán mutatják az üledék rétegződését és a ciprusi táj dinamikus változását.",
      ro: "Cheile Avakas reprezintă un monument natural impresionant situat la marginea vestică a Peninsulei Akamas, lângă Paphos. Cheile au fost săpate de-a lungul mileniilor de forța erozivă a unui mic pârâu în calcarul moale. Se întind pe o lungime de aproximativ trei kilometri, cu pereți care se ridică vertical până la 30 de metri în unele puncte. Cea mai îngustă parte a pasajului măsoară doar câțiva metri lățime, oferind o experiență geologică intensă. Din punct de vedere botanic, cheile sunt un refugiu pentru specii rare precum Centaurea akamantis, o plantă endemică ce se găsește doar în această zonă. Poteca prin chei este adesea alunecoasă și, în timpul ploilor, extrem de periculoasă din cauza riscului de viituri. Formațiunile arată clar stratificarea sedimentelor și schimbările dinamice ale peisajului cipriot.",
      en: "Avakas Gorge is a stunning natural monument located on the western edge of the Akamas Peninsula near Paphos. The gorge was carved over thousands of years by the erosive force of a small stream cutting through soft limestone rock. It stretches for about three kilometres, with walls rising vertically up to 30 metres in certain sections. The narrowest point of the passage measures only a few metres wide, providing an intense geological experience. Botanically, the gorge is a haven for rare species like Centaurea akamantis, an endemic plant found exclusively in this area. The path through the gorge is often slippery and can be life-threatening during rain due to the high risk of flash floods. The rock formations clearly display sedimentary layering and illustrate the dynamic evolution of the Cypriot landscape.",
      es: "La garganta de Avakas es un impresionante monumento natural en el borde occidental de la península de Akamas, cerca de Pafos. El desfiladero fue excavado a lo largo de milenios en la suave piedra caliza por la fuerza erosiva de un pequeño arroyo. Se extiende a lo largo de unos tres kilómetros, con paredes que en algunos puntos se elevan verticalmente hasta 30 metros de altura. El punto más estrecho del pasaje mide apenas unos pocos metros de ancho, ofreciendo una intensa experiencia geológica. Botánicamente, la garganta es un refugio para especies raras como la Centaurea akamantis, una planta endémica que solo se encuentra en esta zona. El sendero por la garganta suele estar resbaladizo y es extremadamente peligroso en caso de lluvia debido al riesgo de inundaciones repentinas. Las formaciones muestran claramente la estratificación del sedimento y el cambio dinámico del paisaje chipriota.",
      pt: "A garganta de Avakas é um monumento natural impressionante na extremidade ocidental da península de Akamas, perto de Pafos. O desfiladeiro foi escavado ao longo de milénios no calcário macio pela força erosiva de um pequeno ribeiro. Estende-se por um comprimento de cerca de três quilómetros, com paredes que em alguns pontos se elevam verticalmente até 30 metros de altura. O ponto mais estreito da passagem mede apenas alguns metros de largura, oferecendo uma experiência geológica intensa. Botanicamente, a garganta é um refúgio para espécies raras como a Centaurea akamantis, uma planta endémica que só se encontra nesta zona. O trilho pela garganta é muitas vezes escorregadio e extremamente perigoso em caso de chuva devido ao risco de inundações repentinas. As formações mostram claramente a estratificação do sedimento e a mudança dinâmica da paisagem cipriota.",
      fr: "La gorge d'Avakas est un monument naturel impressionnant situé à la bordure ouest de la péninsule d'Akamas, près de Paphos. La gorge a été creusée au fil des millénaires dans le calcaire tendre par la force érosive d'un petit ruisseau. Elle s'étend sur une longueur d'environ trois kilomètres, avec des parois s'élevant verticalement jusqu'à 30 mètres de haut par endroits. Le point le plus étroit du passage ne mesure que quelques mètres de large, offrant une expérience géologique intense. Botaniquement, la gorge est un refuge pour des espèces rares comme la Centaurea akamantis, une plante endémique qui ne pousse que dans cette zone. Le sentier à travers la gorge est souvent glissant et devient mortellement dangereux en cas de pluie à cause du risque de crues soudaines. Les formations montrent clairement la stratification des sédiments et l'évolution dynamique du paysage chypriote.",
    },
    factsAdvanced: {
      de: ["Die Schlucht erstreckt sich über eine Gesamtlänge von rund 3 Kilometern.", "Die vertikalen Kalksteinwände erreichen eine maximale Höhe von 30 Metern.", "Centaurea akamantis ist eine extrem seltene, hier endemische Pflanze.", "Der Zugang zur Schlucht ist bei Regen wegen Sturzflutgefahr gesperrt.", "Geologisch gehört das Gestein zu den Lefkara- und Pakhna-Formationen.", "Die Temperatur in der Schlucht ist meist deutlich kühler als in der Umgebung."],
      hu: ["A szurdok teljes hossza körülbelül 3 kilométer.", "A függőleges mészkőfalak maximális magassága eléri a 30 métert.", "A Centaurea akamantis egy rendkívül ritka, itt endemikus növényfaj.", "Esőzéskor a szurdok látogatása a villámárvizek miatt tilos.", "Földtanilag a kőzetek a Lefkara- és Pakhna-formációkhoz tartoznak.", "A szurdok belső hőmérséklete általában lényegesen hűvösebb a környezeténél."],
      ro: ["Cheile se întind pe o lungime totală de aproximativ 3 kilometri.", "Pereții verticali de calcar ating o înălțime maximă de 30 de metri.", "Centaurea akamantis este o plantă endemică extrem de rară ce crește aici.", "Accesul în chei este interzis în timpul ploilor din cauza riscului de viituri.", "Geologic, rocile aparțin formațiunilor Lefkara și Pakhna.", "Temperatura din interiorul cheilor este de obicei mult mai scăzută decât afară."],
      en: ["The gorge extends for a total length of approximately 3 kilometres.", "The vertical limestone walls reach a maximum height of 30 metres.", "Centaurea akamantis is an extremely rare plant endemic to this area.", "Access to the gorge is restricted during rain due to flash flood risks.", "Geologically, the rocks belong to the Lefkara and Pakhna formations.", "The temperature inside the gorge is usually significantly cooler than outside."],
      es: ["El desfiladero se extiende a lo largo de una longitud total de unos 3 kilómetros.", "Las paredes verticales de piedra caliza alcanzan una altura máxima de 30 metros.", "La Centaurea akamantis es una planta extremadamente rara y endémica de aquí.", "El acceso a la garganta está cerrado en caso de lluvia por riesgo de inundaciones repentinas.", "Geológicamente, la roca pertenece a las formaciones de Lefkara y Pakhna.", "La temperatura en la garganta suele ser significativamente más fresca que en los alrededores."],
      pt: ["O desfiladeiro estende-se por um comprimento total de cerca de 3 quilómetros.", "As paredes verticais de calcário atingem uma altura máxima de 30 metros.", "A Centaurea akamantis é uma planta extremamente rara, endémica desta zona.", "O acesso à garganta está fechado em caso de chuva por risco de inundações repentinas.", "Geologicamente, a rocha pertence às formações de Lefkara e Pakhna.", "A temperatura na garganta é geralmente significativamente mais fresca do que nos arredores."],
      fr: ["La gorge s'étend sur une longueur totale d'environ 3 kilomètres.", "Les parois calcaires verticales atteignent une hauteur maximale de 30 mètres.", "La Centaurea akamantis est une plante extrêmement rare, endémique à cet endroit.", "L'accès à la gorge est fermé en cas de pluie à cause du risque de crues soudaines.", "Géologiquement, la roche appartient aux formations de Lefkara et de Pakhna.", "La température dans la gorge est généralement bien plus fraîche que dans les environs."],
    }, image: "/poi-images/cy-avakas-gorge.webp",
    facts: {
      de: ["Die Schlucht wurde über Jahrtausende durch einen Bachlauf geformt.", "Der Wanderweg durch die Schlucht ist etwa 3 Kilometer lang.", "Hier wächst die seltene, endemische Pflanze Centaurea akamantis.", "An einigen Stellen ist die Passage weniger als 10 Meter breit."],
      hu: ["A szurdokot egy patak vize formálta évezredeken keresztül.", "A szurdokon átvezető túraútvonal hossza körülbelül 3 kilométer.", "Itt él a ritka és őshonos Centaurea akamantis nevű növényfaj.", "A kanyon legszűkebb részein a szélesség alig éri el a 10 métert."],
      ro: ["Defileul a fost sculptat de un pârâu pe parcursul a mii de ani.", "Traseul de drumeție prin chei are o lungime de aproximativ 3 kilometri.", "Aici crește planta rară și endemică numită Centaurea akamantis.", "În cele mai înguste puncte, lățimea cheilor este de sub 10 metri."],
      en: ["The gorge was carved out by a stream over thousands of years.", "The hiking trail through the canyon is approximately 3 kilometers long.", "The rare endemic plant Centaurea akamantis grows within the gorge.", "At its narrowest points, the passage is less than 10 meters wide."],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-nissi-beach", "sights": {"de": [{"name": "Landa Golden Beach", "text": "Gleich um die Ecke vom berühmten Nissi Beach strahlt dieser goldene Sandstrand einladend im Sonnenlicht. Das Ambiente ist stets vergnügt, etwas ruhiger als nebenan, aber immer von freudigen Badegästen erfüllt. Feiner Sand und das sanfte Meerwasser machen ausgiebiges Sonnenbaden und Schwimmen zum puren Genuss. Ein durchweg charmanter Ort für einen rundum klassischen zyprischen Sommertag am Meer.", "category": "recreational", "coords": [33.958957, 34.987242]}, {"name": "Nissi", "text": "Bekannter Strand in Ayia Napa.", "category": "recreational", "coords": [33.96899, 34.98749]}, {"name": "Adams beach", "text": "Gelegen in der Region von Nissi auf Zypern, bietet der Adams Beach eine einladende Küstenkulisse. Besucher können hier entspannte Stunden beim Schwimmen und Sonnenbaden am Mittelmeer verbringen. Die ruhige Umgebung zieht sowohl Einheimische als auch Reisende an. Für einen optimalen Platz am Wasser empfiehlt sich eine frühe Anreise während der Hauptsaison.", "category": "recreational", "coords": [33.965129, 34.986827]}, {"name": "Makronissos Beach", "text": "Der bekannte Makronissos Beach liegt malerisch an der zypriotischen Küste unweit von Nissi Beach. Hier erwartet die Gäste eine lebhafte Strandatmosphäre, die sich hervorragend für lange Spaziergänge und ausgiebiges Sonnenbaden eignet. Das einladende Meer verspricht eine angenehme Erfrischung an heißen Tagen. Ein Besuch lohnt sich besonders in den Morgenstunden, um die Schönheit des Ortes in Ruhe zu genießen.", "category": "recreational", "coords": [33.955546, 34.982686]}], "hu": [{"name": "Landa Golden Beach", "text": "Közvetlenül a híres Nissi Beach sarkánál ragyog ez az aranyhomokos strand hívogatóan a napfényben. A környezet mindig vidám, kicsit csendesebb, mint a szomszédban, de mindig tele van boldog fürdőzőkkel. A finom homok és a lágy tengervíz a bőséges napozást és az úszást tiszta élvezetté teszik. Teljesen bájos hely egy igazi klasszikus ciprusi nyári naphoz a tengernél.", "category": "recreational", "coords": [33.958957, 34.987242]}, {"name": "Nissi", "text": "Népszerű strand Ayia Napában.", "category": "recreational", "coords": [33.96899, 34.98749]}, {"name": "Adams beach", "text": "A ciprusi Nissi területén fekvő Adams Beach hívogató tengerparti környezetet kínál a kikapcsolódni vágyóknak. A látogatók nyugodt fürdőzésre és napozásra számíthatnak a Földközi-tenger partján. A kellemes atmoszféra vonzza a helyieket és az utazókat egyaránt. Érdemes a nyári főszezonban korán érkezni a legjobb helyekért.", "category": "recreational", "coords": [33.965129, 34.986827]}, {"name": "Makronissos Beach", "text": "A jól ismert Makronissos Beach festői környezetben terül el a ciprusi parton, Nissi Beach közelében. A vendégeket élénk tengerparti hangulat várja, amely tökéletes sétákhoz és hosszas napozáshoz. A hívogató tengervíz kellemes felfrissülést ígér a forró napokon. A reggeli órákban történő látogatás különösen ajánlott a környék szépségének nyugodt felfedezéséhez.", "category": "recreational", "coords": [33.955546, 34.982686]}], "ro": [{"name": "Landa Golden Beach", "text": "Chiar după colțul faimoasei Nissi Beach, această plajă cu nisip auriu strălucește primitor în lumina soarelui. Ambianța este mereu veselă, puțin mai liniștită decât cea de alături, dar întotdeauna plină de înotători fericiți. Nisipul fin și apa blândă a mării fac ca băile de soare prelungite și înotul să fie o plăcere pură. Un loc cu totul fermecător pentru o zi clasică de vară cipriotă, petrecută la malul mării.", "category": "recreational", "coords": [33.958957, 34.987242]}, {"name": "Nissi", "text": "Plajă populară în Ayia Napa.", "category": "recreational", "coords": [33.96899, 34.98749]}, {"name": "Adams beach", "text": "Situată în regiunea Nissi din Cipru, Adams Beach oferă un cadru de coastă primitor pentru relaxare. Vizitatorii se pot bucura de înot și plajă la malul Mării Mediterane într-o atmosferă liniștită. Acest loc este potrivit atât pentru localnici, cât și pentru turiști. Sosirea timpurie în timpul verii asigură găsirea unui loc ideal pe malul apei.", "category": "recreational", "coords": [33.965129, 34.986827]}, {"name": "Makronissos Beach", "text": "Cunoscuta Makronissos Beach este așezată pitoresc pe coasta cipriotă, nu departe de Nissi Beach. Oaspeții sunt întâmpinați de o atmosferă de plajă plină de viață, ideală pentru plimbări lungi și băi de soare. Apa primitoare a mării promite o răcorire plăcută în zilele călduroase. O vizită matinală este perfectă pentru a aprecia frumusețea locului în liniște.", "category": "recreational", "coords": [33.955546, 34.982686]}], "en": [{"name": "Landa Golden Beach", "text": "Just around the corner from the famous Nissi Beach, this golden sandy beach shines invitingly in the sunlight. The ambiance is always cheerful, a bit quieter than next door, but always filled with happy bathers. Fine sand and gentle seawater make extensive sunbathing and swimming a pure pleasure. A thoroughly charming place for an all-around classic Cypriot summer day by the sea.", "category": "recreational", "coords": [33.958957, 34.987242]}, {"name": "Nissi", "text": "Popular beach in Ayia Napa.", "category": "recreational", "coords": [33.96899, 34.98749]}, {"name": "Adams beach", "text": "Situated in the Nissi area of Cyprus, Adams Beach provides an inviting coastal setting for relaxation. Visitors can enjoy peaceful swimming and sunbathing along the Mediterranean shores. The tranquil environment naturally attracts both locals and travelers seeking a seaside escape. Arriving early during the peak summer months is highly recommended to secure a good spot.", "category": "recreational", "coords": [33.965129, 34.986827]}, {"name": "Makronissos Beach", "text": "The well-known Makronissos Beach is picturesquely situated on the Cypriot coast, close to Nissi Beach. Guests will discover a vibrant beach atmosphere that is perfect for long coastal walks and leisurely sunbathing. The inviting sea waters promise pleasant refreshment on hot days. A morning visit is ideal to appreciate the beauty of the location in a quieter setting.", "category": "recreational", "coords": [33.955546, 34.982686]}]},
    type: "landmark",
    parent: "CY-002",
    coords: [33.9686, 34.9881],
    name: { de: "Nissi Strand", hu: "Nissi Beach", ro: "Plaja Nissi", en: "Nissi Beach" },
    description: {
      de: "Einer der berühmtesten weißen Sandstrände in Ayia Napa.",
      hu: "Ayia Napa egyik leghíresebb fehér homokos strandja.",
      ro: "Una dintre cele mai faimoase plaje cu nisip alb din Ayia Napa.",
      en: "One of the most famous white sand beaches in Ayia Napa.",
      es: "Una de las playas de arena blanca más famosas de Ayia Napa.",
      pt: "Uma das praias de areia branca mais famosas de Ayia Napa.",
      fr: "L'une des plages de sable blanc les plus célèbres d'Ayia Napa.",
    },
    descriptionAdvanced: {
      de: "Nissi Beach ist einer der bekanntesten Sandstrände Zyperns und liegt im Ferienort Ayia Napa. Der Strand ist etwa 500 Meter lang und zeichnet sich durch seinen feinen weißen Sand und das extrem flache, türkisfarbene Wasser aus. Namensgebend ist die kleine Insel Nissi (griechisch für Insel), die sich in unmittelbarer Nähe befindet und bei Ebbe über eine schmale Sandbank zu Fuß erreichbar ist. Diese geografische Besonderheit schafft eine geschützte Lagune, die ideal für Wassersportarten ist. Der Strand trägt seit 1995 ununterbrochen die Blaue Flagge für hervorragende Wasserqualität und Umweltmanagement. Trotz seiner Popularität und der damit verbundenen hohen Besucherzahlen im Sommer bleibt die Wasserqualität stabil. Der Strand ist ein wirtschaftliches Zentrum der Region und zieht jährlich hunderttausende Touristen aus aller Welt an.",
      hu: "A Nissi Beach Ciprus egyik legismertebb homokos strandja, amely Ayia Napa üdülővárosában található. A strand körülbelül 500 méter hosszú, finom fehér homokja és rendkívül sekély, türkizkék vize teszi különlegessé. Nevét a közvetlen közelében található Nissi (görögül sziget) szigetecskéről kapta, amely apály idején egy keskeny homokpadon keresztül gyalog is megközelíthető. Ez a földrajzi jellegzetesség egy védett lagúnát hoz létre, amely ideális a vízi sportokhoz. A strand 1995 óta folyamatosan birtokolja a Kék Zászló minősítést a kiváló vízminőség és a környezetvédelmi gazdálkodás miatt. Népszerűsége és a nyári nagy látogatószám ellenére a vízminőség stabil marad. A strand a régió gazdasági központja, amely évente turisták százezreit vonzza a világ minden tájáról.",
      ro: "Nissi Beach este una dintre cele mai renumite plaje de nisip din Cipru, situată în stațiunea Ayia Napa. Plaja are o lungime de aproximativ 500 de metri și se caracterizează prin nisipul său alb fin și apa turcoaz extrem de puțin adâncă. Numele provine de la mica insulă Nissi (insulă în greacă), situată în imediata apropiere, care este accesibilă pe jos la reflux printr-o fâșie îngustă de nisip. Această caracteristică geografică creează o lagună protejată, ideală pentru sporturi nautice. Plaja deține neîntrerupt din 1995 distincția Steagul Albastru pentru calitatea excelentă a apei și managementul mediului. În ciuda popularității sale și a numărului mare de vizitatori pe timp de vară, calitatea apei rămâne stabilă. Plaja este un centru economic al regiunii, atrăgând anual sute de mii de turiști din întreaga lume.",
      en: "Nissi Beach is one of the most famous sandy beaches in Cyprus, located in the resort town of Ayia Napa. The beach stretches for approximately 500 metres and is distinguished by its fine white sand and extremely shallow, turquoise waters. It takes its name from the small islet of Nissi (Greek for island) situated just offshore, which is accessible on foot via a narrow sandbar during low tide. This geographical feature creates a protected lagoon that is ideal for various water sports. The beach has consistently held Blue Flag status since 1995 for its outstanding water quality and environmental management. Despite its immense popularity and the high volume of visitors during the summer months, the water quality remains remarkably stable. The beach is a vital economic hub for the region, attracting hundreds of thousands of international tourists annually.",
      es: "Nissi Beach es una de las playas más conocidas de Chipre y se encuentra en el complejo turístico de Ayia Napa. La playa tiene unos 500 metros de largo y se caracteriza por su arena blanca y fina y sus aguas turquesas extremadamente poco profundas. Su nombre proviene de la pequeña isla de Nissi (isla en griego), situada en las inmediaciones y accesible a pie durante la marea baja a través de un estrecho banco de arena. Esta particularidad geográfica crea una laguna protegida, ideal para practicar deportes acuáticos. La playa ostenta la Bandera Azul de forma ininterrumpida desde 1995 por la excelente calidad de sus aguas y su gestión medioambiental. A pesar de su popularidad y del gran número de visitantes en verano, la calidad del agua se mantiene estable. La playa es un motor económico para la región y atrae anualmente a cientos de miles de turistas de todo el mundo.",
      pt: "Nissi Beach é uma das praias de areia mais famosas de Chipre e está situada na estância de Ayia Napa. A praia tem cerca de 500 metros de comprimento e caracteriza-se pela sua areia branca e fina e pelas águas azul-turquesa extremamente rasas. O nome provém da pequena ilha Nissi (ilha em grego), que se encontra nas imediações e que pode ser alcançada a pé através de um estreito banco de areia durante a maré baixa. Esta particularidade geográfica cria uma lagoa protegida, ideal para desportos náuticos. A praia detém ininterruptamente a Bandeira Azul desde 1995 pela excelente qualidade da água e gestão ambiental. Apesar da sua popularidade e do consequente elevado número de visitantes no verão, a qualidade da água permanece estável. A praia é um centro económico da região e atrai anualmente centenas de milhares de turistas de todo o mundo.",
      fr: "Nissi Beach est l'une des plages de sable les plus célèbres de Chypre, située dans la station balnéaire d'Ayia Napa. La plage s'étend sur environ 500 mètres et se distingue par son sable blanc et fin ainsi que ses eaux turquoise extrêmement peu profondes. Elle doit son nom à la petite île Nissi (île en grec), située à proximité immédiate et accessible à pied à marée basse via un étroit banc de sable. Cette particularité géographique crée un lagon protégé, idéal pour les sports nautiques. La plage détient sans interruption le Pavillon Bleu depuis 1995 pour l'excellente qualité de son eau et sa gestion environnementale. Malgré sa popularité et le grand nombre de visiteurs en été, la qualité de l'eau reste stable. La plage est un moteur économique pour la région et attire chaque année des centaines de milliers de touristes du monde entier.",
    },
    factsAdvanced: {
      de: ["Die Strandlänge beträgt etwa 500 Meter.", "Die Insel Nissi ist bei Ebbe über einen natürlichen Sandweg erreichbar.", "Der Strand führt seit 1995 ununterbrochen die Blaue Flagge.", "Das Wasser bleibt über eine Distanz von 50 Metern sehr flach.", "In der Hochsaison besuchen täglich bis zu 10.000 Menschen den Strand.", "Nissi Beach gilt als einer der am meistfotografierten Strände Europas."],
      hu: ["A strand hossza körülbelül 500 méter.", "A Nissi-sziget apálykor egy természetes homokúton érhető el.", "A strand 1995 óta folyamatosan Kék Zászló minősítésű.", "A víz 50 méteres távolságig rendkívül sekély marad.", "Főszezonban naponta akár 10 000 ember is megfordul a strandon.", "A Nissi Beach Európa egyik legtöbbet fényképezett strandjának számít."],
      ro: ["Lungimea plajei este de aproximativ 500 de metri.", "Insula Nissi este accesibilă la reflux printr-un drum natural de nisip.", "Plaja deține distincția Steagul Albastru neîntrerupt din 1995.", "Apa rămâne foarte puțin adâncă pe o distanță de 50 de metri.", "În sezonul de vârf, până la 10.000 de persoane vizitează plaja zilnic.", "Nissi Beach este considerată una dintre cele mai fotografiate plaje din Europa."],
      en: ["The total length of the beach is approximately 500 metres.", "Nissi islet is reachable via a natural sand causeway at low tide.", "The beach has held continuous Blue Flag status since 1995.", "The water remains very shallow for a distance of up to 50 metres.", "During peak season, up to 10,000 people visit the beach daily.", "Nissi Beach is regarded as one of the most photographed beaches in Europe."],
      es: ["La longitud de la playa es de unos 500 metros.", "La isla de Nissi es accesible durante la marea baja a través de un camino de arena natural.", "La playa ostenta la Bandera Azul de forma ininterrumpida desde 1995.", "El agua permanece muy poco profunda en una distancia de 50 metros.", "En temporada alta, hasta 10.000 personas visitan la playa a diario.", "Nissi Beach es considerada una de las playas más fotografiadas de Europa."],
      pt: ["O comprimento da praia é de cerca de 500 metros.", "A ilha Nissi é acessível na maré baixa através de um caminho de areia natural.", "A praia ostenta ininterruptamente a Bandeira Azul desde 1995.", "A água permanece muito rasa numa distância de 50 metros.", "Na época alta, até 10.000 pessoas visitam a praia diariamente.", "Nissi Beach é considerada uma das praias mais fotografadas da Europa."],
      fr: ["La plage mesure environ 500 mètres de long.", "L'île Nissi est accessible à pied à marée basse par un sentier de sable naturel.", "La plage arbore le Pavillon Bleu sans interruption depuis 1995.", "L'eau reste très peu profonde sur une distance de 50 mètres.", "En haute saison, jusqu'à 10 000 personnes visitent la plage chaque jour.", "Nissi Beach est considérée comme l'une des plages les plus photographiées d'Europe."],
    }, image: "/poi-images/cy-nissi-beach.webp",
    facts: {
      de: ["500 Meter Sandstrand", "Kleine begehbare Insel", "Blaues Flagge-Zertifikat", "Zentrum für Wassersport"],
      hu: ["500 méter hosszú homokos part", "Gyalogosan elérhető kis sziget", "Kék zászlós minősítés", "Vízi sportok központja"],
      ro: ["500 de metri de nisip fin", "Insulă accesibilă la pas", "Certificat Blue Flag", "Locație populară de petreceri"],
      en: ["500 meters of golden sand", "Walkable islet offshore", "Blue Flag beach status", "Major hub for watersports"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-limassol-carnival",
    type: "landmark",
    parent: "CY-004",
    coords: [33.0450, 34.6760],
    name: { de: "Karneval in Limassol", hu: "Limassoli karnevál", ro: "Carnavalul din Limassol", en: "Limassol Carnival" },
    description: {
      de: "Ein jährliches zehntägiges Festival, das älteste und beliebteste in Zypern.",
      hu: "Évente megrendezett, tíz napos fesztivál, Ciprus legrégebbi és legnépszerűbb karneválja.",
      ro: "Un festival anual de zece zile, cel mai vechi și mai popular din Cipru.",
      en: "An annual ten-day festival, the oldest and most popular in Cyprus.",
      es: "Un festival anual de diez días, el más antiguo y popular de Chipre.",
      pt: "Um festival anual de dez dias, o mais antigo e popular de Chipre.",
      fr: "Un festival annuel de dix jours, le plus ancien et le plus populaire de Chypre.",
    },
    descriptionAdvanced: {
      de: "Der Karneval von Limassol ist das größte und älteste Volksfest auf Zypern und blickt auf eine über hundertjährige Tradition zurück. Die Feierlichkeiten beginnen traditionell am Donnerstag des Fleischverzehrs (Tsiknopempti) und erstrecken sich über zehn Tage bis zum Beginn der Fastenzeit. Den Höhepunkt bildet die große Parade am Sonntag, an der Zehntausende maskierte Teilnehmer und zahlreiche prachtvoll geschmückte Wagen durch die Makarios-Avenue ziehen. Historisch gesehen wurzelt das Fest in antiken dionysischen Feiern, entwickelte sich aber unter venezianischer und britischer Herrschaft zu seiner heutigen Form. Das Ereignis fördert den sozialen Zusammenhalt und zieht jährlich Touristen aus aller Welt an, die die Mischung aus Satire, Musik und Tanz erleben möchten. Die Stadtverwaltung von Limassol organisiert zudem zahlreiche Bälle, Serenadenkonzerte und Wettbewerbe für das beste Kostüm. Das Festival spiegelt die lebensfrohe Natur der Bewohner von Limassol wider und ist ein unverzichtbarer Teil des kulturellen Erbes der Insel.",
      hu: "A limassoli karnevál Ciprus legnagyobb és legrégebbi népünnepélye, amely több mint százéves hagyományra tekint vissza a sziget déli partján. Az ünnepségsorozat hagyományosan a húsfogyasztó csütörtökön (Tsiknopempti) veszi kezdetét, és tíz napon át tart, egészen a nagyböjt kezdetéig. A rendezvény csúcspontja a vasárnapi nagy felvonulás, ahol több tízezer maszkos résztvevő és számos díszes kocsi vonul végig a Makarios sugárúton. Történelmileg a fesztivál az ókori dionüszoszi ünnepségekben gyökerezik, de a velencei és brit fennhatóság alatt nyerte el mai, polgáribb formáját. Az esemény jelentős kulturális és gazdasági vonzerővel bír, amely ötvözi a szatírát, a zenét és a táncot a helyi közösség vidámságával. Limassol önkormányzata számos kísérőrendezvényt, például szerenádokat és jelmezversenyeket is szervez a fesztivál ideje alatt. A karnevál a ciprusi identitás egyik legvidámabb megnyilvánulása, amely minden évben megtölti élettel a várost.",
      ro: "Carnavalul din Limassol este cel mai mare și cel mai vechi festival popular din Cipru, având o tradiție documentată de peste un secol. Celebrările încep oficial în „Joia Grăsană” (Tsiknopempti) și se desfășoară pe parcursul a zece zile, culminând chiar înainte de intrarea în Postul Mare. Punctul culminant al evenimentului este marea paradă de duminică, la care participă zeci de mii de oameni costumați și numeroase care alegorice care defilează pe bulevardul Makarios. Din punct de vedere istoric, rădăcinile festivalului pot fi urmărite până la ritualurile dionisiace antice, deși forma sa modernă a fost influențată de perioadele venețiană și britanică. Festivalul reprezintă un element central al identității locale, atrăgând anual vizitatori internaționali dornici să experimenteze atmosfera de satiră, muzică și dans. Municipalitatea organizează, de asemenea, diverse baluri mascate și concerte de serenade în aer liber. Carnavalul contribuie semnificativ la coeziunea socială, fiind un eveniment așteptat cu nerăbdare de întreaga insulă.",
      en: "The Limassol Carnival is the largest and oldest folk festival in Cyprus, boasting a recorded history that spans over a century of tradition. The festivities traditionally commence on Meat-Eating Thursday (Tsiknopempti) and continue for ten days until the start of Lent. The event reaches its peak with the Grand Carnival Parade on the final Sunday, featuring tens of thousands of masked participants and dozens of elaborate floats processing along Makarios Avenue. Historically, the carnival has its roots in ancient Dionysian festivals, though it evolved significantly under Venetian and British influences into its current urban form. It serves as a vital cultural institution that fosters social cohesion while attracting thousands of international tourists with its blend of satire, music, and dance. The Limassol Municipality coordinates numerous supporting events, including street serenades, masked balls, and costume competitions. This vibrant celebration perfectly encapsulates the jovial spirit of the city’s residents and remains a cornerstone of the island's intangible cultural heritage.",
      es: "El Carnaval de Limassol es la fiesta popular más grande y antigua de Chipre, con una tradición de más de cien años. Las celebraciones comienzan tradicionalmente el jueves de Tsiknopempti (Día de la Carne) y se prolongan durante diez días hasta el inicio de la Cuaresma. El punto culminante es el gran desfile del domingo, donde decenas de miles de participantes disfrazados y carrozas decoradas recorren la Avenida Makarios. Históricamente, la fiesta tiene sus raíces en las antiguas celebraciones dionisíacas, pero evolucionó bajo el dominio veneciano y británico hasta su forma actual. El evento fomenta la cohesión social y atrae anualmente a turistas de todo el mundo que buscan experimentar la mezcla de sátira, música y danza. El ayuntamiento de Limassol organiza numerosos bailes, conciertos de serenatas y concursos de disfraces. El festival refleja la naturaleza alegre de los habitantes de Limassol y es una parte esencial del patrimonio cultural de la isla.",
      pt: "O Carnaval de Limassol é o maior e mais antigo festival popular de Chipre, com uma tradição de mais de cem anos. As celebrações começam tradicionalmente na quinta-feira de Tsiknopempti (dia do consumo de carne) e estendem-se por dez dias até ao início da Quaresma. O destaque é o grande desfile de domingo, onde dezenas de milhares de participantes mascarados e inúmeros carros alegóricos decorados desfilam pela Avenida Makarios. Historicamente, o festival tem raízes nas antigas celebrações dionisíacas, mas evoluiu sob o domínio veneziano e britânico para a sua forma atual. O evento promove a coesão social e atrai anualmente turistas de todo o mundo que querem vivenciar a mistura de sátira, música e dança. O município de Limassol organiza também inúmeros bailes, concertos de serenatas e concursos para o melhor fato. O festival reflete a natureza alegre dos habitantes de Limassol e é uma parte indispensável do património cultural da ilha.",
      fr: "Le carnaval de Limassol est la plus grande et la plus ancienne fête populaire de Chypre, avec une tradition de plus de cent ans. Les festivités commencent traditionnellement le jeudi de la consommation de viande (Tsiknopempti) et s'étendent sur dix jours jusqu'au début du Carême. Le point culminant est la grande parade du dimanche, au cours de laquelle des dizaines de milliers de participants masqués et de nombreux chars magnifiquement décorés défilent sur l'avenue Makarios. Historiquement, la fête prend ses racines dans les anciennes célébrations dionysiaques, mais elle a évolué sous les dominations vénitienne et britannique pour prendre sa forme actuelle. L'événement favorise la cohésion sociale et attire chaque année des touristes du monde entier venus découvrir ce mélange de satire, de musique et de danse. La municipalité de Limassol organise également de nombreux bals, des concerts de sérénades et des concours du meilleur costume. Le festival reflète la nature joyeuse des habitants de Limassol et constitue un élément indispensable du patrimoine culturel de l'île.",
    },
    factsAdvanced: {
      de: ["Die Wurzeln des Karnevals liegen in den antiken griechischen Festen für Dionysos.", "Das offizielle Programm dauert genau 10 Tage bis zum 'Grünen Montag'.", "Der 'Karnevalskönig' führt den großen Festumzug am letzten Sonntag an.", "Traditionell werden während der Festwoche spezielle Teigtaschen namens 'Bourekia' gegessen.", "Limassol gilt als die Karnevalshauptstadt der Insel mit den größten Paraden.", "Im Jahr 2020 nahmen schätzungsweise über 100 Gruppen an der Hauptparade teil."],
      hu: ["A karnevál gyökerei az ókori görög Dionüszosz-ünnepségekre nyúlnak vissza.", "A hivatalos program pontosan 10 napig tart a 'Zöld Hétfőig'.", "A 'Karnevál Királya' vezeti a nagy felvonulást az utolsó vasárnapon.", "Hagyományosan speciális 'Bourekia' nevű tésztaféléket fogyasztanak az ünnepi héten.", "Limassol a sziget karnevál-fővárosa, ahol a legnagyobb felvonulásokat tartják.", "2020-ban becslések szerint több mint 100 csoport vett részt a fő felvonuláson."],
      ro: ["Rădăcinile carnavalului se află în vechile festivaluri grecești dedicate lui Dionysos.", "Programul oficial durează exact 10 zile până la 'Lunea Curată' (Green Monday).", "„Regele Carnavalului” conduce marea paradă în ultima duminică a festivalului.", "În timpul săptămânii festive se consumă în mod tradițional produse de patiserie numite 'Bourekia'.", "Limassol este considerat capitala carnavalului din Cipru datorită amplorii paradelor.", "În 2020, peste 100 de grupuri au participat la parada principală de pe bulevardul Makarios."],
      en: ["The carnival's roots lie in ancient Greek festivals dedicated to Dionysus.", "The official program lasts exactly 10 days until 'Green Monday'.", "The 'Carnival King' leads the grand festive parade on the final Sunday.", "Traditionally, special pastries called 'Bourekia' are consumed during the festive week.", "Limassol is considered the carnival capital of the island with the largest parades.", "In 2020, an estimated 100 groups participated in the main parade on Makarios Avenue."],
      es: ["Las raíces del carnaval se encuentran en las antiguas fiestas griegas dedicadas a Dioniso.", "El programa oficial dura exactamente 10 días hasta el 'Lunes Limpio'.", "El 'Rey del Carnaval' encabeza el gran desfile el último domingo.", "Tradicionalmente se comen unas empanadillas llamadas 'Bourekia' durante la semana festiva.", "Limassol es considerada la capital del carnaval de la isla con los desfiles más grandes.", "En 2020, se estima que más de 100 grupos participaron en el desfile principal."],
      pt: ["As raízes do carnaval residem nos antigos festivais gregos em honra de Dionísio.", "O programa oficial dura exatamente 10 dias até à 'Segunda-feira Limpa'.", "O 'Rei do Carnaval' lidera o grande desfile no último domingo.", "Tradicionalmente, comem-se uns pastéis chamados 'Bourekia' durante a semana de festas.", "Limassol é considerada a capital do carnaval da ilha, com os maiores desfiles.", "Em 2020, estima-se que mais de 100 grupos participaram no desfile principal."],
      fr: ["Les racines du carnaval remontent aux anciennes fêtes grecques en l'honneur de Dionysos.", "Le programme officiel dure exactement 10 jours jusqu'au 'Lundi Vert'.", "Le 'Roi du Carnaval' mène la grande parade le dernier dimanche.", "Traditionnellement, on mange des chaussons appelés 'Bourekia' pendant la semaine de fête.", "Limassol est considérée comme la capitale du carnaval de l'île avec les plus grands défilés.", "En 2020, on estime que plus de 100 groupes ont participé à la parade principale."],
    }, image: "/poi-images/cy-limassol-carnival.webp",
    facts: {
      de: ["Elf Tage lange Feierlichkeiten", "Große Parade am Sonntag", "Tradition seit über 100 Jahren", "König Karneval wird gekrönt"],
      hu: ["11 napig tartó ünnepség", "Nagy vasárnapi felvonulás", "Több mint 100 éves hagyomány", "Karnevál Király megkoronázása"],
      ro: ["Sărbătoare de unsprezece zile", "Marea paradă de duminică", "Tradiție de peste un secol", "Încoronarea Regelui Carnaval"],
      en: ["Eleven days of festivities", "Grand parade on the last Sunday", "Century-old cultural tradition", "Coronation of King Carnival"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-paphos-aphrodite", "sights": {"de": [{"name": "St. George Beach", "text": "Unweit des Paphos Aphrodite Festivals auf Zypern erstreckt sich der idyllische St. George Beach. Dieser Küstenabschnitt bietet eine beschauliche Umgebung für erholsame Momente am Wasser. Badegäste können sich auf entspanntes Schwimmen und das Genießen der mediterranen Sonne freuen. Ein Aufenthalt am späten Nachmittag lässt den Tag wunderbar ausklingen.", "category": "recreational", "coords": [32.393744, 34.804018]}, {"name": "Kotsia Beach", "text": "Eingebettet in die Küstenlandschaft bei Paphos, präsentiert sich der Kotsia Beach als charmanter Rückzugsort. Die Atmosphäre vor Ort ist geprägt von Gelassenheit, was den Strand ideal für ruhesuchende Besucher macht. Man kann hier wunderbar dem Rauschen der Wellen lauschen und gemütliche Strandspaziergänge unternehmen. Es empfiehlt sich, ausreichend Sonnenschutz für einen unbeschwerten Aufenthalt mitzubringen.", "category": "recreational", "coords": [32.393842, 34.813081]}, {"name": "Alki Beach", "text": "Der Alki Beach, gelegen in der Nähe des Paphos Aphrodite Festivals, lockt mit seinem maritimen Flair. Diese zyprische Küstenperle bietet fantastische Gelegenheiten, um sich im warmen Meerwasser abzukühlen oder einfach die Seele baumeln zu lassen. Die lockere Stimmung ist typisch für die hiesigen Strände und lädt zum Verweilen ein. Besonders in den wärmeren Monaten ist der Ort ein beliebtes Ziel für Sonnenanbeter.", "category": "recreational", "coords": [32.393701, 34.80559]}], "hu": [{"name": "St. George Beach", "text": "A ciprusi Paphos Aphrodite Festival közelében húzódik a festői St. George Beach. Ez a partszakasz békés környezetet biztosít a vízparti pihenéshez és a feltöltődéshez. A fürdőzők nyugodt úszásra és a mediterrán napsütés élvezetére számíthatnak. Egy késő délutáni látogatás nagyszerű lehetőséget nyújt a nap kellemes lezárására.", "category": "recreational", "coords": [32.393744, 34.804018]}, {"name": "Kotsia Beach", "text": "A Paphos környéki tengerparti tájba simuló Kotsia Beach egy igazán bájos menedéket kínál a kikapcsolódni vágyóknak. A helyi atmoszférát a nyugalom jellemzi, ami ideálissá teszi a strandot a csendet kedvelő látogatók számára. Itt csodálatos élmény a hullámok morajlását hallgatni és kényelmes sétákat tenni a parton. A gondtalan pihenés érdekében érdemes megfelelő napvédelmet hozni.", "category": "recreational", "coords": [32.393842, 34.813081]}, {"name": "Alki Beach", "text": "A Paphos Aphrodite Festival közelében található Alki Beach tengeri varázsával vonzza a látogatókat. Ez a ciprusi parti gyöngyszem remek lehetőségeket kínál a meleg tengervízben való hűsölésre, vagy egyszerűen csak a pihenésre. A kötetlen hangulat jellemző az itteni strandokra, és maradásra csábítja a vendégeket. A melegebb hónapokban a hely különösen népszerű a napimádók körében.", "category": "recreational", "coords": [32.393701, 34.80559]}], "ro": [{"name": "St. George Beach", "text": "În apropiere de Paphos Aphrodite Festival din Cipru se întinde plaja idilică St. George Beach. Această secțiune de coastă oferă un cadru liniștit pentru momente relaxante la malul apei. Vizitatorii se pot bucura de înot și de soarele cald al Mediteranei. Petrecerea după-amiezii târzii aici este o modalitate minunată de a încheia ziua.", "category": "recreational", "coords": [32.393744, 34.804018]}, {"name": "Kotsia Beach", "text": "Integrată în peisajul de coastă de lângă Paphos, Kotsia Beach se prezintă ca o evadare fermecătoare. Atmosfera locală este definită de seninătate, făcând din această plajă un loc ideal pentru vizitatorii care caută liniște. Aici este minunat să asculți sunetul valurilor și să faci plimbări relaxante pe plajă. Se recomandă aducerea unei protecții solare adecvate pentru o ședere fără griji.", "category": "recreational", "coords": [32.393842, 34.813081]}, {"name": "Alki Beach", "text": "Alki Beach, situată în apropierea Paphos Aphrodite Festival, atrage prin farmecul său maritim. Această perlă a coastei cipriote oferă oportunități fantastice de a te răcori în apa caldă a mării sau pur și simplu de a te relaxa. Atmosfera relaxată este tipică plajelor de aici și te invită să zăbovești. Mai ales în lunile calde, locația este o destinație populară pentru iubitorii de soare.", "category": "recreational", "coords": [32.393701, 34.80559]}], "en": [{"name": "St. George Beach", "text": "Located near the Paphos Aphrodite Festival in Cyprus, the idyllic St. George Beach stretches along the coast. This section of the shoreline offers a peaceful environment for relaxing moments by the water. Bathers can look forward to leisurely swimming and soaking up the Mediterranean sun. Spending the late afternoon here is a wonderful way to wind down the day.", "category": "recreational", "coords": [32.393744, 34.804018]}, {"name": "Kotsia Beach", "text": "Nestled in the coastal landscape near Paphos, Kotsia Beach presents itself as a charming retreat. The local atmosphere is defined by serenity, making the beach ideal for visitors seeking a quiet escape. It is a wonderful place to listen to the sound of the waves and take leisurely walks along the shore. Bringing adequate sun protection is advisable for a carefree stay.", "category": "recreational", "coords": [32.393842, 34.813081]}, {"name": "Alki Beach", "text": "Alki Beach, located near the Paphos Aphrodite Festival, attracts visitors with its inviting maritime charm. This Cypriot coastal gem provides fantastic opportunities to cool off in the warm sea water or simply unwind. The laid-back mood is typical of the local beaches and encourages guests to linger. During the warmer months, the location is a particularly popular destination for sun worshippers.", "category": "recreational", "coords": [32.393701, 34.80559]}]},
    type: "landmark",
    parent: "CY-005",
    coords: [32.4240, 34.7770],
    name: { de: "Paphos Aphrodite Festival", hu: "Páfoszi Aphrodité Fesztivál", ro: "Festivalul Afrodita din Paphos", en: "Paphos Aphrodite Festival" },
    description: {
      de: "Ein internationales Opernfestival, das jeden Sommer in Paphos stattfindet.",
      hu: "Nemzetközi operafesztivál, melyet minden nyáron megrendeznek Páfoszban.",
      ro: "Un festival internațional de operă care are loc în fiecare vară în Paphos.",
      en: "An international opera festival held every summer in Paphos.",
      es: "Un festival internacional de ópera que se celebra cada verano en Pafos.",
      pt: "Um festival internacional de ópera que se realiza todos os verões em Pafos.",
      fr: "Un festival international d'opéra qui se déroule chaque été à Paphos.",
    },
    descriptionAdvanced: {
      de: "Das Paphos Aphrodite Festival ist ein international renommiertes Opernereignis, das jährlich im September auf dem Platz vor der mittelalterlichen Burg von Paphos stattfindet. Seit seiner Gründung im Jahr 1999 hat sich das Festival zu einem der bedeutendsten kulturellen Höhepunkte im östlichen Mittelmeerraum entwickelt. Vor der beeindruckenden Kulisse der byzantinischen Festung und des malerischen Hafens werden klassische Meisterwerke von weltbekannten Opernhäusern und Ensembles aufgeführt. Die Verbindung von archäologischem Erbe und hochkarätiger Kunst schafft eine einzigartige Atmosphäre, die Musikliebhaber aus aller Welt anzieht. Das Festival wird von der Paphos Aphrodite Festival Cyprus Ltd in Zusammenarbeit mit dem Bildungs- und Kulturministerium organisiert. Es zielt darauf ab, Paphos als ein Zentrum für hochwertige internationale Kulturveranstaltungen zu etablieren und den Kulturtourismus auf der Insel nachhaltig zu fördern. Die Aufführungen finden unter freiem Himmel statt und nutzen die natürliche Akustik sowie die romantische Abendstimmung am Meer.",
      hu: "A Paphos Aphrodite Fesztivál egy nemzetközileg elismert operafesztivál, amelyet minden év szeptemberében rendeznek meg a paphoszi középkori vár előtti téren. 1999-es alapítása óta a rendezvény Kelet-Mediterráneum egyik legjelentősebb kulturális eseményévé nőtte ki magát, amely világhírű operaházakat és művészeket vonultat fel. A bizánci eredetű vár és a festői kikötő monumentális díszletei között bemutatott klasszikus mesterművek különleges esztétikai élményt nyújtanak a látogatóknak. Az esemény sikeresen ötvözi a sziget gazdag régészeti örökségét a magas szintű művészeti produkciókkal, vonzva a komolyzene kedvelőit a világ minden tájáról. A fesztivált a Paphos Aphrodite Festival Cyprus Ltd szervezi szoros együttműködésben az Oktatási és Kulturális Minisztériummal. Fő célja, hogy Paphos városát a nemzetközi kulturális élet középpontjába helyezze és fellendítse a minőségi turizmust. Az előadások a csillagos ég alatt zajlanak, kihasználva a történelmi helyszín természetes akusztikáját.",
      ro: "Festivalul Paphos Aphrodite este un eveniment de operă cu renume internațional, organizat anual în luna septembrie în piața din fața castelului medieval din Paphos. De la înființarea sa în anul 1999, festivalul a devenit unul dintre cele mai importante repere culturale din regiunea mediteraneană estică. Reprezentațiile sunt susținute de companii de operă celebre la nivel mondial, care pun în scenă capodopere clasice într-un cadru istoric spectaculos lângă mare. Combinația dintre patrimoniul arheologic și arta interpretativă de înaltă clasă creează o atmosferă unică, apreciată de mii de spectatori. Organizarea este asigurată de Paphos Aphrodite Festival Cyprus Ltd, beneficiind de sprijinul Ministerului Educației și Culturii. Evenimentul contribuie semnificativ la promovarea orașului Paphos ca centru cultural de excelență și la dezvoltarea turismului cultural pe insulă. Spectacolele în aer liber profită de acustica deosebită a sitului istoric, oferind o experiență memorabilă sub cerul nocturn mediteranean.",
      en: "The Paphos Aphrodite Festival is an internationally acclaimed opera event held annually in September at the square facing the medieval castle in Paphos harbour. Since its inauguration in 1999, the festival has established itself as one of the premier cultural highlights in the Eastern Mediterranean region. It features world-renowned opera companies and performers who stage classical masterpieces against the dramatic backdrop of the Byzantine fortress and the Mediterranean Sea. This seamless integration of archaeological heritage with high-level performing arts creates a unique aesthetic experience for global audiences. The festival is organized by Paphos Aphrodite Festival Cyprus Ltd in close cooperation with the Ministry of Education and Culture. Its primary mission is to promote Paphos as a hub for international cultural tourism and to showcase the island's artistic capabilities. The open-air performances are noted for their exceptional acoustics and the romantic atmosphere provided by the historic maritime setting.",
      es: "El Festival de Afrodita de Pafos es un evento operístico de renombre internacional que se celebra anualmente en septiembre en la plaza frente al castillo medieval de Pafos. Desde su fundación en 1999, se ha convertido en uno de los hitos culturales más importantes del Mediterráneo oriental. Con el impresionante telón de fondo de la fortaleza bizantina y el puerto, se representan obras maestras clásicas a cargo de compañías de ópera famosas en todo el mundo. La fusión del patrimonio arqueológico y el arte de primer nivel crea una atmósfera única que atrae a amantes de la música de todas partes. El festival es organizado por Paphos Aphrodite Festival Cyprus Ltd en colaboración con el Ministerio de Educación y Cultura, con el fin de consolidar a Pafos como un centro de eventos culturales internacionales de alta calidad y promover el turismo cultural sostenible en la isla. Las representaciones al aire libre aprovechan la acústica natural y el ambiente romántico junto al mar.",
      pt: "O Paphos Aphrodite Festival é um evento de ópera de renome internacional que se realiza anualmente em setembro na praça em frente ao castelo medieval de Pafos. Desde a sua fundação em 1999, o festival tornou-se um dos destaques culturais mais importantes do Mediterrâneo oriental. Tendo como cenário impressionante a fortaleza bizantina e o porto pitoresco, são apresentadas obras-primas clássicas por companhias de ópera e agrupamentos de renome mundial. A combinação do património arqueológico com a arte de alto nível cria uma atmosfera única que atrai amantes da música de todo o mundo. O festival é organizado pela Paphos Aphrodite Festival Cyprus Ltd em colaboração com o Ministério da Educação e Cultura. O seu objetivo é estabelecer Pafos como um centro de eventos culturais internacionais de elevada qualidade e promover de forma sustentável o turismo cultural na ilha. As apresentações decorrem ao ar livre e aproveitam a acústica natural, bem como o ambiente romântico da noite junto ao mar.",
      fr: "Le Paphos Aphrodite Festival est un événement lyrique de renommée internationale qui se tient chaque année en septembre sur la place située devant le château médiéval de Paphos. Depuis sa création en 1999, ce festival est devenu l'un des points forts culturels les plus importants de la Méditerranée orientale. Dans le cadre impressionnant de la forteresse byzantine et du port pittoresque, des chefs-d'œuvre classiques sont interprétés par des maisons d'opéra et des ensembles de renommée mondiale. L'alliance du patrimoine archéologique et de l'excellence artistique crée une atmosphère unique qui attire les mélomanes du monde entier. Le festival est organisé par Paphos Aphrodite Festival Cyprus Ltd en collaboration avec le ministère de l'Éducation et de la Culture. Il vise à établir Paphos comme un centre d'événements culturels internationaux de haute qualité et à promouvoir durablement le tourisme culturel sur l'île. Les représentations ont lieu en plein air et tirent profit de l'acoustique naturelle ainsi que de l'ambiance romantique du bord de mer en soirée.",
    },
    factsAdvanced: {
      de: ["Das Festival wurde 1999 zur Förderung des Kulturtourismus gegründet.", "Die erste Aufführung war Giuseppe Verdis Oper 'Aida'.", "Der Veranstaltungsort ist der Platz vor der mittelalterlichen Burg von Paphos.", "Weltberühmte Ensembles wie das Bolshoi-Theater sind hier bereits aufgetreten.", "Die Kapazität der temporären Tribünen beträgt etwa 2.500 Sitzplätze pro Abend.", "Das Festival findet traditionell am ersten Septemberwochenende statt."],
      hu: ["A fesztivált 1999-ben alapították a kulturális turizmus fellendítésére.", "Az első előadás Giuseppe Verdi 'Aida' című operája volt.", "A helyszín a paphoszi középkori vár előtti nyitott tér.", "Világhírű együttesek, például a Bolsoj Színház is felléptek már itt.", "Az ideiglenes lelátók befogadóképessége esténként körülbelül 2500 fő.", "A fesztivált hagyományosan szeptember első hétvégéjén tartják."],
      ro: ["Festivalul a fost înființat în 1999 pentru a promova turismul cultural.", "Prima operă pusă în scenă a fost 'Aida' de Giuseppe Verdi.", "Locul de desfășurare este piața din fața castelului medieval din Paphos.", "Companii renumite, precum Teatrul Bolșoi, au susținut spectacole aici.", "Capacitatea tribunelor temporare este de aproximativ 2.500 de locuri pe seară.", "Festivalul are loc în mod tradițional în primul weekend din septembrie."],
      en: ["The festival was established in 1999 to promote cultural tourism.", "The very first production was Giuseppe Verdi's opera 'Aida'.", "The venue is the open square in front of the Paphos Medieval Castle.", "World-renowned ensembles, such as the Bolshoi Theatre, have performed here.", "The temporary grandstands have a capacity of approximately 2,500 seats per night.", "The festival is traditionally held during the first weekend of September."],
      es: ["El festival fue fundado en 1999 para promover el turismo cultural.", "La primera representación fue la ópera 'Aida' de Giuseppe Verdi.", "El lugar del evento es la plaza frente al castillo medieval de Pafos.", "Compañías famosas como la del Teatro Bolshoi han actuado en el festival.", "La capacidad de las gradas temporales es de unos 2.500 asientos por noche.", "El festival se celebra tradicionalmente el primer fin de semana de septiembre."],
      pt: ["O festival foi fundado em 1999 para promover o turismo cultural.", "A primeira apresentação foi a ópera 'Aida' de Giuseppe Verdi.", "O local do evento é a praça em frente ao castelo medieval de Pafos.", "Ensembles de renome mundial, como o Teatro Bolshoi, já se apresentaram aqui.", "A capacidade das bancadas temporárias é de cerca de 2.500 lugares por noite.", "O festival realiza-se tradicionalmente no primeiro fim de semana de setembro."],
      fr: ["Le festival a été créé en 1999 pour promouvoir le tourisme culturel.", "La première représentation fut l'opéra 'Aida' de Giuseppe Verdi.", "Le lieu de l'événement est la place devant le château médiéval de Paphos.", "Des ensembles de renommée mondiale, comme le Théâtre Bolchoï, s'y sont déjà produits.", "La capacité des tribunes temporaires est d'environ 2 500 places par soirée.", "Le festival se déroule traditionnellement le premier week-end de septembre."],
    },
    image: "/poi-images/cy-paphos-aphrodite.webp",
    facts: {
      de: ["Open-Air Opernfestival", "Vor der Burg von Paphos", "Jedes Jahr im September", "Internationale Besetzungen"],
      hu: ["Szabadtéri operafesztivál", "A páfoszi vár előtt tartják", "Minden év szeptemberében", "Nemzetközi produkciók"],
      ro: ["Festival de operă în aer liber", "În fața castelului din Paphos", "Se desfășoară în septembrie", "Spectacole internaționale"],
      en: ["Outdoor opera performances", "Held at Paphos Medieval Castle", "Annual event in September", "International cast and orchestras"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-kataklysmos",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6335, 34.9010],
    name: { de: "Kataklysmos", hu: "Kataklysmos", ro: "Kataklysmos", en: "Kataklysmos" },
    description: {
      de: "Das Fest der Sintflut, besonders groß in Larnaca mit Aktivitäten am Wasser gefeiert.",
      hu: "Az özönvíz ünnepe, melyet Lárnakában különösen látványos vízparti programokkal ünnepelnek.",
      ro: "Sărbătoarea Potopului, celebrată în special în Larnaca cu activități pe apă.",
      en: "The Festival of the Flood, celebrated grandly in Larnaca with waterfront activities.",
      es: "La Fiesta del Diluvio, celebrada con especial énfasis en Larnaca con actividades acuáticas.",
      pt: "A Festa do Dilúvio, celebrada com especial destaque em Larnaca com atividades aquáticas.",
      fr: "La fête du Déluge, célébrée avec faste à Larnaca avec des activités nautiques.",
    },
    descriptionAdvanced: {
      de: "Kataklysmos, auch bekannt als das Fest der Flut, ist ein einzigartiges religiöses und volkstümliches Fest, das 50 Tage nach dem orthodoxen Osterfest auf ganz Zypern gefeiert wird. Es hat seine Wurzeln sowohl in der biblischen Geschichte von Noahs Arche als auch in antiken griechischen Mythen über Deukalion und die Ehrung der Göttin Aphrodite. Die Feierlichkeiten finden hauptsächlich in den Küstenstädten statt, wobei Larnaca das größte und bekannteste Festival ausrichtet. Ein zentrales Element ist das Wasser, was sich in spielerischen Wasserschlachten, Bootsrennen und dem Brauch des gegenseitigen Bespritzens widerspiegelt. Neben den Wasseraktivitäten gibt es traditionelle Wettbewerbe in Volksmusik, Tanz und den berühmten 'Chattista', improvisierten Reimduellen in zypriotischem Dialekt. Das Fest dauert mehrere Tage und umfasst Jahrmärkte mit lokalem Handwerk und Köstlichkeiten. Es symbolisiert Reinigung und Erneuerung und ist ein lebendiger Ausdruck der zypriotischen Identität und Gastfreundschaft am Meer.",
      hu: "A Kataklysmos, más néven az özönvíz ünnepe, egy egyedülálló vallási és népi esemény, amelyet 50 nappal az ortodox húsvét után ünnepelnek Ciprus-szerte. A fesztivál gyökerei a bibliai Noé bárkájának történetéhez, valamint a görög mitológia Deukalión-legendájához és Aphrodité istennő tiszteletéhez nyúlnak vissza. Az ünnepségek középpontjában a víz áll, ami játékos vízi csatákban, hajóversenyekben és egymás lelocsolásának hagyományában nyilvánul meg. A legjelentősebb eseményeket Larnaca tengerparti sétányán rendezik, ahol napokon át tartó vásár és kulturális programok várják a látogatókat. A program fontos része a 'Chattista', amely egy improvizatív, rímekbe szedett párbaj ciprusi dialektusban, népzenei kísérettel. A fesztivál a megtisztulást és a megújulást szimbolizálja, miközben bemutatja a sziget gazdag folklórját és kézműves hagyományait. Ez az időszak az egyik legnépszerűbb ünnep a helyiek és a turisták körében egyaránt.",
      ro: "Kataklysmos, cunoscut și sub numele de Festivalul Potopului, este o sărbătoare religioasă și folclorică unică, celebrată în tot Ciprul la 50 de zile după Paștele ortodox. Rădăcinile sale sunt complexe, împletind povestea biblică a arcei lui Noe cu miturile grecești despre Deucalion și onorarea zeiței Afrodita. Celebrările au loc în principal în orașele de coastă, Larnaca fiind gazda celui mai mare și mai vibrant festival de acest gen. Apa este elementul central al sărbătorii, manifestându-se prin bătălii ludice cu apă, regate și tradiția stropirii reciproce ca simbol al purificării spirituale. Pe lângă activitățile nautice, festivalul găzduiește competiții de muzică populară, dansuri tradiționale și faimoasele 'Chattista', dueluri poetice improvizate în dialect cipriot. Evenimentul durează de obicei între trei și cinci zile, oferind târguri cu meșteșuguri locale și specialități culinare. Kataklysmos reprezintă o expresie vie a identității culturale cipriote.",
      en: "Kataklysmos, also known as the Flood Festival, is a unique religious and folk celebration held across Cyprus 50 days after Orthodox Easter, coinciding with Pentecost. The festival draws inspiration from both the biblical story of Noah’s Ark and ancient Greek myths involving Deucalion and the worship of Aphrodite. Celebrations are centered around the element of water, taking place primarily in coastal towns, with Larnaca hosting the most extensive and famous festivities. Key traditions include playful water fights, boat races, and the custom of splashing water on others as a symbol of spiritual and physical purification. Beyond maritime activities, the festival is renowned for its folk music competitions, traditional dances, and 'Chattista' sessions—improvised poetic duels performed in the local Cypriot dialect. The event typically spans several days, featuring bustling open-air markets that showcase traditional crafts and local delicacies. It remains one of the island's most vibrant expressions of community spirit.",
      es: "Kataklysmos, también conocida como la Fiesta de la Inundación, es una celebración religiosa y popular única que se festeja en todo Chipre 50 días después de la Pascua ortodoxa. Tiene sus raíces tanto en la historia bíblica del Arca de Noé como en los antiguos mitos griegos sobre Deucalión y la honra a la diosa Afrodita. Las festividades tienen lugar principalmente en las ciudades costeras, siendo Larnaca la que organiza el festival más grande y conocido. Un elemento central es el agua, que se refleja en batallas acuáticas lúdicas, regatas de barcos y la costumbre de mojarse unos a otros. Además de las actividades acuáticas, hay concursos tradicionales de música folclórica, danza y los famosos 'Chattista', duelos de rimas improvisadas en dialecto chipriota. La fiesta dura varios días e incluye ferias con artesanía local y delicias culinarias. Simboliza la purificación y la renovación, siendo una expresión viva de la identidad y hospitalidad chipriota junto al mar.",
      pt: "Kataklysmos, também conhecido como o Festival da Inundação, é uma festa religiosa e popular única celebrada em todo o Chipre 50 dias após a Páscoa Ortodoxa. Tem as suas raízes tanto na história bíblica da Arca de Noé como nos antigos mitos gregos sobre Deucalião e a honra à deusa Afrodite. As celebrações decorrem principalmente nas cidades costeiras, com Larnaca a acolher o maior e mais conhecido festival. Um elemento central é a água, que se reflete em batalhas de água lúdicas, corridas de barcos e no costume de se molharem uns aos outros. Além das atividades aquáticas, existem competições tradicionais de música folclórica, dança e os famosos 'Chattista', duelos de rimas improvisadas em dialeto cipriota. A festa dura vários dias e inclui feiras com artesanato local e iguarias. Simboliza purificação e renovação, sendo uma expressão viva da identidade e hospitalidade cipriota junto ao mar.",
      fr: "Kataklysmos, également connue sous le nom de fête du Déluge, est une fête religieuse et populaire unique célébrée dans toute l'île de Chypre 50 jours après la Pâques orthodoxe. Elle tire ses racines tant du récit biblique de l'Arche de Noé que des anciens mythes grecs sur Deucalion et l'hommage à la déesse Aphrodite. Les festivités se déroulent principalement dans les villes côtières, Larnaca accueillant le festival le plus important et le plus célèbre. L'eau est l'élément central, se manifestant par des batailles d'eau ludiques, des courses de bateaux et la coutume de s'asperger mutuellement. Outre les activités nautiques, on y trouve des concours traditionnels de musique folklorique, de danse et les célèbres 'Chattista', des joutes oratoires improvisées en dialecte chypriote. La fête dure plusieurs jours et comprend des foires proposant de l'artisanat local et des spécialités culinaires. Elle symbolise la purification et le renouveau, et constitue une expression vibrante de l'identité et de l'hospitalité chypriotes au bord de la mer.",
    },
    factsAdvanced: {
      de: ["Das Fest findet immer am Pfingstmontag des orthodoxen Kalenders statt.", "Larnaca ist das Zentrum der Feierlichkeiten mit einer riesigen Kirmes.", "Das Bespritzen mit Wasser symbolisiert die Reinigung von Körper und Geist.", "Die poetischen 'Chattista'-Wettbewerbe sind Teil des UNESCO-Weltkulturerbes.", "Es werden traditionelle Schwimmwettbewerbe und Bootsrennen organisiert.", "Kataklysmos markiert oft den inoffiziellen Beginn der Badesaison auf Zypern."],
      hu: ["Az ünnep mindig az ortodox pünkösdhétfőre esik.", "Larnaca az ünnepségek központja egy hatalmas tengerparti vásárral.", "A vízzel való lelocsolás a test és a lélek megtisztulását szimbolizálja.", "A 'Chattista' költői versenyek az UNESCO szellemi örökségének részei.", "Hagyományos úszóversenyeket és hajós regattákat is rendeznek.", "A Kataklysmos gyakran a ciprusi fürdőszezon nemhivatalos kezdetét jelzi."],
      ro: ["Sărbătoarea are loc întotdeauna în lunea Rusaliilor ortodoxe.", "Larnaca este centrul festivităților, găzduind un târg imens pe faleză.", "Stropirea cu apă simbolizează purificarea trupului și a sufletului.", "Competițiile poetice 'Chattista' fac parte din patrimoniul mondial UNESCO.", "Sunt organizate concursuri tradiționale de înot și regate cu bărci.", "Kataklysmos marchează adesea începutul neoficial al sezonului de scăldat în Cipru."],
      en: ["The festival always falls on the Monday of the Orthodox Pentecost.", "Larnaca is the epicenter of the celebrations with a massive seaside fair.", "Splashing people with water symbolizes the purification of body and soul.", "The poetic 'Chattista' competitions are part of UNESCO's Intangible Heritage.", "Traditional swimming contests and boat races are key parts of the event.", "Kataklysmos often marks the unofficial start of the swimming season in Cyprus."],
      es: ["La fiesta siempre tiene lugar el lunes de Pentecostés del calendario ortodoxo.", "Larnaca es el centro de las celebraciones con una enorme feria.", "Mojarse con agua simboliza la purificación del cuerpo y la mente.", "Los concursos poéticos 'Chattista' son Patrimonio Cultural Inmaterial de la UNESCO.", "Se organizan competiciones de natación tradicionales y regatas de barcos.", "Kataklysmos marca a menudo el inicio no oficial de la temporada de baño en Chipre."],
      pt: ["A festa ocorre sempre na segunda-feira de Pentecostes do calendário ortodoxo.", "Larnaca é o centro das celebrações com uma enorme feira popular.", "Molhar-se com água simboliza a purificação do corpo e da mente.", "As competições poéticas 'Chattista' fazem parte do Património Mundial da UNESCO.", "São organizadas competições tradicionais de natação e corridas de barcos.", "Kataklysmos marca frequentemente o início não oficial da época balnear em Chipre."],
      fr: ["La fête a toujours lieu le lundi de Pentecôte du calendrier orthodoxe.", "Larnaca est le centre des festivités avec une immense fête foraine.", "L'aspersion d'eau symbolise la purification du corps et de l'esprit.", "Les concours poétiques 'Chattista' font partie du patrimoine mondial de l'UNESCO.", "Des compétitions de natation traditionnelles et des courses de bateaux sont organisées.", "Kataklysmos marque souvent le début non officiel de la saison de baignade à Chypre."],
    }, image: "/poi-images/cy-kataklysmos.webp",
    facts: {
      de: ["50 Tage nach orthodoxem Ostern", "Feier der biblischen Flut", "Wasserspiele in Küstenstädten", "Großes Volksfest in Larnaka"],
      hu: ["50 nappal húsvét után tartják", "Az özönvíz ünnepének hívják", "Vízi sportok és versenyek", "Lárnakában a legnépszerűbb"],
      ro: ["Cunoscut ca Sărbătoarea Potopului", "Are loc după Paștele ortodox", "Concursuri de înot și bărci", "Eveniment cultural major pe litoral"],
      en: ["Marks the biblical flood story", "Held 50 days after Easter", "Focuses on water activities", "Main celebrations in Larnaca"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-wine-festival", "sights": {"de": [{"name": "Akti Olympion Beach", "text": "Direkt in der geschäftigen Umgebung von Limassol befindet sich der Akti Olympion Beach, der städtisches Leben mit Strandgefühl verbindet. Hier erwartet Badegäste eine leicht zugängliche Küste, an der man das Mittelmeer in vollen Zügen genießen kann. Die Kombination aus Meer und der Nähe zum Limassol Wine Festival macht diesen Ort besonders reizvoll. Ein Besuch bietet sich hervorragend als Ausgleich nach einer Erkundungstour durch die Stadt an.", "category": "recreational", "coords": [33.053556, 34.680034]}], "hu": [{"name": "Akti Olympion Beach", "text": "Limassol nyüzsgő környezetében fekszik az Akti Olympion Beach, amely nagyszerűen ötvözi a városi életet a strandélménnyel. A fürdőzőket egy könnyen megközelíthető partszakasz várja, ahol teljes mértékben kiélvezhetik a Földközi-tenger közelségét. A tenger és a Limassol Wine Festival közelségének kombinációja különösen vonzóvá teszi ezt a helyet. Egy itteni látogatás kiváló levezetés lehet a város felfedezése után.", "category": "recreational", "coords": [33.053556, 34.680034]}], "ro": [{"name": "Akti Olympion Beach", "text": "Chiar în mediul plin de viață din Limassol se află Akti Olympion Beach, care îmbină perfect viața urbană cu senzația de plajă. Oaspeții sunt așteptați de o coastă ușor accesibilă, unde se pot bucura din plin de Marea Mediterană. Combinația dintre mare și apropierea de Limassol Wine Festival face acest loc deosebit de atrăgător. O vizită aici este o excelentă modalitate de relaxare după explorarea orașului.", "category": "recreational", "coords": [33.053556, 34.680034]}], "en": [{"name": "Akti Olympion Beach", "text": "Right in the bustling environment of Limassol lies Akti Olympion Beach, seamlessly blending urban life with a classic beach feel. Bathers can expect an easily accessible coastline where the Mediterranean Sea can be fully enjoyed. The combination of the ocean and the proximity to the Limassol Wine Festival makes this location particularly appealing. A visit here serves as an excellent way to relax after exploring the city.", "category": "recreational", "coords": [33.053556, 34.680034]}]},
    type: "landmark",
    parent: "CY-004",
    coords: [33.0500, 34.6800],
    name: { de: "Weinfestival", hu: "Bor Fesztivál", ro: "Festivalul Vinului", en: "Limassol Wine Festival" },
    description: {
      de: "Ein beliebtes Festival in Limassol zur Feier der zypriotischen Weintradition.",
      hu: "Népszerű fesztivál Limassolban a ciprusi borászati hagyományok ünneplésére.",
      ro: "Un festival popular în Limassol pentru celebrarea tradiției vinului cipriot.",
      en: "A popular festival in Limassol celebrating the Cypriot winemaking tradition.",
      es: "Un popular festival en Limassol para celebrar la tradición vinícola chipriota.",
      pt: "Um festival popular em Limassol para celebrar a tradição vinícola cipriota.",
      fr: "Un festival populaire à Limassol pour célébrer la tradition viticole chypriote.",
    },
    descriptionAdvanced: {
      de: "Das Weinfest von Limassol findet seit 1961 jährlich Ende August bis Anfang September im Stadtpark von Limassol statt und ist eine Hommage an die jahrtausendealte Weinbautradition Zyperns. Inspiriert von antiken Feiern zu Ehren von Dionysos, dem Gott des Weines, bietet das Festival Besuchern die Möglichkeit, eine Vielzahl lokaler Weine von großen Kellereien und kleinen regionalen Erzeugern zu verkosten. Ein besonderes Merkmal ist das traditionelle Traubenstampfen, bei dem Gäste aktiv teilnehmen können, um den Prozess der Weinherstellung hautnah zu erleben. Begleitet wird die Veranstaltung von einem reichhaltigen kulturellen Programm mit Theateraufführungen, Volksmusik und traditionellen Tänzen unter dem Motto 'Trink Wein, er schenkt dir Leben'. Das Fest fördert nicht nur die zypriotische Weinindustrie, sondern dient auch als wichtiger Treffpunkt für Einheimische und Touristen. Kulinarische Spezialitäten der Insel, wie Souvla und Halloumi, ergänzen das Angebot und machen den Stadtpark zu einem lebendigen Zentrum der Gastronomie unter freiem Himmel.",
      hu: "A limassoli borfesztivált 1961 óta rendezik meg minden évben augusztus végén és szeptember elején a városi közparkban, tisztelegve Ciprus több évezredes borászati múltja előtt. A rendezvény az ókori dionüszoszi ünnepségeket idézi meg, lehetőséget biztosítva a látogatóknak, hogy megismerjék a sziget neves borászatait és kisebb pincészeteit. A fesztivál egyik legnépszerűbb eleme a hagyományos szőlőtaposás, amelyben a közönség is aktívan részt vehet, átélve a borkészítés régi módszereit. Az eseményt gazdag kulturális program kíséri, beleértve a népzenét, a hagyományos táncokat és a humoros színházi előadásokat a 'Igyál bort, egészséget ad' jelmondat jegyében. A fesztivál nemcsak a ciprusi borkultúrát népszerűsíti, hanem fontos társasági esemény is, amely összehozza a helyieket és az idelátogató turistákat. A borok mellé hagyományos ciprusi ételeket kínálnak, felejthetetlen gasztronómiai élményt nyújtva a park hűvös lombjai alatt.",
      ro: "Festivalul Vinului din Limassol are loc anual, din 1961, la sfârșitul lunii august în Grădina Publică a orașului, fiind un omagiu adus tradiției milenare a viticulturii din Cipru. Inspirat de serbările antice dedicate lui Dionysos, festivalul oferă vizitatorilor ocazia de a degusta o varietate largă de vinuri locale de la marii producători și cramele regionale mici. O atracție deosebită este zdrobirea tradițională a strugurilor cu picioarele, o activitate interactivă care permite publicului să experimenteze metodele arhaice de producție. Programul cultural este foarte diversificat, incluzând spectacole de teatru, concerte de muzică populară și dansuri tradiționale, sub deviza celebră 'Bea vin, căci îți dă viață'. Festivalul joacă un rol crucial în promovarea industriei vinicole cipriote și a turismului gastronomic. Pe lângă vinuri, vizitatorii se pot delecta cu specialități culinare precum souvla și halloumi, transformând parcul într-un punct vibrant de întâlnire mediteranean.",
      en: "The Limassol Wine Festival has been held annually since 1961 in the Limassol Municipal Gardens, typically running from late August to early September to celebrate Cyprus's millennia-old winemaking heritage. Inspired by the ancient festivals dedicated to Dionysus, the god of wine, the event allows visitors to sample a vast array of local wines from major wineries and small boutique producers alike. A signature feature of the festival is the traditional grape treading, where guests can participate in crushing grapes by foot to experience historical production methods firsthand. The atmosphere is enriched by a diverse cultural program featuring folk music, traditional dances, and theatrical performances centered around the motto 'Drink wine, it gives you life.' The festival serves as a vital platform for the Cypriot wine industry and a popular social gathering for both residents and international tourists. Culinary stands offering traditional dishes like souvla and halloumi complement the tastings, creating a complete gastronomic experience.",
      es: "El Festival del Vino de Limassol se celebra anualmente desde 1961, desde finales de agosto hasta principios de septiembre en el parque municipal de Limassol, y es un homenaje a la milenaria tradición vitivinícola de Chipre. Inspirado en las antiguas celebraciones en honor a Dioniso, el dios del vino, el festival ofrece a los visitantes la oportunidad de degustar una gran variedad de vinos locales de grandes bodegas y pequeños productores regionales. Una característica especial es el tradicional pisado de uvas, en el que los invitados pueden participar activamente para experimentar de cerca el proceso de elaboración del vino. El evento está acompañado por un rico programa cultural con representaciones teatrales, música folclórica y danzas tradicionales bajo el lema \"Bebe vino, te da vida\". El festival no solo promueve la industria vinícola chipriota, sino que también sirve como un importante punto de encuentro para locales y turistas. Especialidades culinarias de la isla, como Souvla y Halloumi, completan la oferta.",
      pt: "O Festival do Vinho de Limassol realiza-se anualmente desde 1961, entre o final de agosto e o início de setembro, no parque municipal de Limassol, e é uma homenagem à tradição vitivinícola milenar de Chipre. Inspirado nas celebrações antigas em honra de Dionísio, o deus do vinho, o festival oferece aos visitantes a oportunidade de degustar uma variedade de vinhos locais de grandes adegas e pequenos produtores regionais. Uma característica especial é a pisa tradicional das uvas, na qual os convidados podem participar ativamente para vivenciar de perto o processo de fabrico do vinho. O evento é acompanhado por um rico programa cultural com espetáculos de teatro, música folclórica e danças tradicionais sob o lema \"Bebe vinho, ele dá-te vida\". O festival não só promove a indústria vinícola cipriota, como também serve como um importante ponto de encontro para habitantes locais e turistas. Especialidades culinárias da ilha, como Souvla e Halloumi, completam a oferta.",
      fr: "Le festival du vin de Limassol se tient chaque année depuis 1961, de la fin août au début septembre, dans le parc municipal de Limassol et rend hommage à la tradition viticole millénaire de Chypre. Inspiré des célébrations antiques en l'honneur de Dionysos, le dieu du vin, le festival offre aux visiteurs l'occasion de déguster une variété de vins locaux provenant de grandes caves et de petits producteurs régionaux. Une caractéristique particulière est le foulage traditionnel des raisins, auquel les invités peuvent participer activement pour découvrir de près le processus de fabrication du vin. L'événement est accompagné d'un riche programme culturel comprenant des représentations théâtrales, de la musique folklorique et des danses traditionnelles sous la devise « Bois du vin, il te donne la vie ». Le festival ne promeut pas seulement l'industrie vinicole chypriote, mais sert également de point de rencontre important pour les habitants et les touristes. Des spécialités culinaires de l'île, comme la Souvla et le Halloumi, complètent l'offre.",
    },
    factsAdvanced: {
      de: ["Das erste Weinfest wurde im Jahr 1961 im Stadtpark von Limassol organisiert.", "Der Eintrittspreis beinhaltet oft eine kostenlose Flasche Wein eines lokalen Erzeugers.", "Das Festival dauert normalerweise zwischen 10 und 12 Tagen.", "Die berühmte Statue des 'Vrakas' (Zypriote in Volkstracht) ist das Symbol des Festes.", "Große Kellereien wie KEO, LOEL, SODAP und ETKO sind immer präsent.", "Es werden jährlich über 100.000 Besucher aus dem In- und Ausland erwartet."],
      hu: ["Az első borfesztivált 1961-ben rendezték meg a limassoli városi parkban.", "A belépőjegy ára gyakran tartalmaz egy üveg ingyen bort egy helyi termelőtől.", "A fesztivál általában 10-12 napig tart augusztus végétől kezdődően.", "A fesztivál jelképe a 'Vrakas' (hagyományos ciprusi viseletbe öltözött férfi) szobra.", "A sziget nagy borászatai, mint a KEO és a LOEL, saját standdal rendelkeznek.", "Évente több mint 100 000 látogatót fogad a rendezvény a világ minden tájáról."],
      ro: ["Primul festival al vinului a fost organizat în anul 1961 în Grădina Publică.", "Prețul biletului include adesea o sticlă de vin gratuită de la un producător local.", "Festivalul durează de obicei între 10 și 12 zile la sfârșitul verii.", "Simbolul festivalului este statuia gigantă a unui 'Vrakas' în costum popular.", "Marile crame cipriote, precum KEO și SODAP, sunt prezențe constante.", "Peste 100.000 de vizitatori participă anual la degustările de vin din parc."],
      en: ["The first wine festival was organized in 1961 in the Limassol Municipal Garden.", "The entrance fee often includes a complimentary bottle of local wine.", "The festival typically spans 10 to 12 days in late August and early September.", "The symbol of the festival is the giant statue of a 'Vrakas' in traditional dress.", "Major Cypriot wineries such as KEO, LOEL, and SODAP are always present.", "More than 100,000 visitors from Cyprus and abroad attend the festival annually."],
      es: ["El primer festival del vino se organizó en 1961 en el parque municipal de Limassol.", "El precio de la entrada suele incluir una botella de vino gratuita de un productor local.", "El festival suele durar entre 10 y 12 días.", "La famosa estatua del \"Vrakas\" (chipriota con traje tradicional) es el símbolo de la fiesta.", "Grandes bodegas como KEO, LOEL, SODAP y ETKO siempre están presentes.", "Se esperan anualmente más de 100.000 visitantes nacionales e internacionales."],
      pt: ["O primeiro festival do vinho foi organizado em 1961 no parque municipal de Limassol.", "O preço do bilhete inclui frequentemente uma garrafa de vinho gratuita de um produtor local.", "O festival dura normalmente entre 10 e 12 dias.", "A famosa estátua do \"Vrakas\" (cipriota em traje tradicional) é o símbolo da festa.", "Grandes adegas como KEO, LOEL, SODAP e ETKO estão sempre presentes.", "São esperados anualmente mais de 100.000 visitantes nacionais e estrangeiros."],
      fr: ["La première fête du vin a été organisée en 1961 dans le parc municipal de Limassol.", "Le prix d'entrée comprend souvent une bouteille de vin gratuite d'un producteur local.", "Le festival dure généralement entre 10 et 12 jours.", "La célèbre statue du « Vrakas » (Chypriote en costume traditionnel) est le symbole de la fête.", "Les grandes caves comme KEO, LOEL, SODAP et ETKO sont toujours présentes.", "Plus de 100 000 visiteurs nationaux et étrangers sont attendus chaque année."],
    }, image: "/poi-images/cy-wine-festival.webp",
    facts: {
      de: ["Ende August bis September", "Im Stadtgarten von Limassol", "Verkostung lokaler Weine", "Große Statue des Winzers"],
      hu: ["Augusztus végén kezdődik", "A városi parkban tartják", "Ciprusi borok kóstolója", "Hagyományos népzenei műsorok"],
      ro: ["Sfârșitul lunii august", "În grădina publică Limassol", "Degustări de vinuri locale", "Muzică și dansuri populare"],
      en: ["Starts late August annually", "Held in Limassol Municipal Garden", "Tasting of local Commandaria", "Traditional Cypriot folk dances"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-st-hilarion", "sights": {"de": [{"name": "Escape Beach", "text": "In der zypriotischen Küstenregion nahe dem St. Hilarion Castle lädt der Escape Beach zu unbeschwerten Stunden am Wasser ein. Dieser Strand zeichnet sich durch seine ansprechende Lage aus, die Erholungssuchende zum Schwimmen und Verweilen anzieht. Die familiäre und zugleich entspannte Stimmung sorgt für ein angenehmes Badeerlebnis. Für einen perfekten Strandtag sollten Besucher ausreichend Wasser und Strandutensilien einpacken.", "category": "recreational", "coords": [33.234734, 35.347123]}, {"name": "Kervansaray Beach", "text": "Entlang der reizvollen Küste unweit von St. Hilarion Castle bietet der Kervansaray Beach eine wunderschöne Gelegenheit für eine Auszeit am Meer. Die Besucher schätzen besonders die Möglichkeit, hier ungestört Sonne zu tanken und im klaren Wasser zu baden. Das ruhige Ambiente macht den Ort zu einem echten Geheimtipp für Erholungssuchende. Ein abendlicher Spaziergang entlang der Uferlinie verspricht unvergessliche Momente bei Sonnenuntergang.", "category": "recreational", "coords": [33.255157, 35.347353]}, {"name": "Municipality of Alsancak Beach", "text": "Der gepflegte Municipality of Alsancak Beach erstreckt sich in der Nähe des St. Hilarion Castle und ist ein beliebter Anlaufpunkt für Strandliebhaber. Die örtliche Küstenlinie eignet sich hervorragend für erfrischende Badegänge und entspannte Stunden im Sand. Eine einladende und freundliche Atmosphäre prägt das Bild dieses Küstenabschnitts. Es ist ratsam, den Strandbesuch an sonnigen Tagen frühzeitig zu beginnen.", "category": "recreational", "coords": [33.205326, 35.356498]}, {"name": "Bamboo Beach", "text": "Unter der zyprischen Sonne nahe dem St. Hilarion Castle verspricht der Bamboo Beach erholsame Strandtage in einer entspannten Umgebung. Das seichte Wasser und der angenehme Küstenstreifen bieten beste Bedingungen für ein erfrischendes Bad. Hier herrscht meist ein ruhiges Treiben, was den Strand für gemütliche Nachmittage prädestiniert. Ein Spaziergang am Wassersaum rundet das maritime Erlebnis gekonnt ab.", "category": "recreational", "coords": [33.217913, 35.353945]}], "hu": [{"name": "Escape Beach", "text": "A St. Hilarion Castle közelében fekvő ciprusi partszakaszon az Escape Beach gondtalan vízparti órákra hívogat. Ez a strand vonzó elhelyezkedésével tűnik ki, amely fürdőzésre és pihenésre csábítja a kikapcsolódni vágyókat. A családias, ugyanakkor nyugodt hangulat kellemes strandélményt biztosít. Egy tökéletes nyári naphoz érdemes elegendő ivóvizet és strandfelszerelést vinni magunkkal.", "category": "recreational", "coords": [33.234734, 35.347123]}, {"name": "Kervansaray Beach", "text": "A St. Hilarion Castle közelében húzódó bájos partvidéken a Kervansaray Beach csodálatos lehetőséget kínál a tengerparti kikapcsolódásra. A látogatók különösen értékelik a zavartalan napozás és a tiszta vízben való fürdőzés lehetőségét. A nyugodt környezet igazi rejtett kincs a pihenésre vágyók számára. Egy esti séta a part mentén felejthetetlen pillanatokat ígér naplementekor.", "category": "recreational", "coords": [33.255157, 35.347353]}, {"name": "Municipality of Alsancak Beach", "text": "A gondozott Municipality of Alsancak Beach a St. Hilarion Castle közelében terül el, és a strandolás szerelmeseinek kedvelt célpontja. A helyi partszakasz kiválóan alkalmas frissítő fürdőzésre és a homokban töltött pihentető órákra. Hívogató és barátságos atmoszféra jellemzi ezt a tengerparti részt. Napsütéses napokon érdemes a strandolást már korán reggel elkezdeni.", "category": "recreational", "coords": [33.205326, 35.356498]}, {"name": "Bamboo Beach", "text": "A ciprusi napsütésben, a St. Hilarion Castle közelében fekvő Bamboo Beach pihentető strandnapokat ígér egy nyugodt környezetben. A sekély víz és a kellemes partszakasz kiváló feltételeket biztosít egy frissítő fürdőzéshez. Itt többnyire csendes az élet, ami a strandot a ráérős délutánok tökéletes helyszínévé teszi. Egy könnyű séta a vízparton remekül kiegészíti a tengeri élményt.", "category": "recreational", "coords": [33.217913, 35.353945]}], "ro": [{"name": "Escape Beach", "text": "În regiunea de coastă cipriotă, lângă St. Hilarion Castle, Escape Beach te invită la ore fără griji petrecute la apă. Această plajă se remarcă prin locația sa atrăgătoare, care atrage vizitatorii pentru înot și relaxare. Atmosfera familiară, dar relaxantă, asigură o experiență plăcută la scăldat. Pentru o zi perfectă de plajă, este bine să aveți la voi apă suficientă și accesorii pentru nisip.", "category": "recreational", "coords": [33.234734, 35.347123]}, {"name": "Kervansaray Beach", "text": "De-a lungul coastei fermecătoare, nu departe de St Hilarion Castle, Kervansaray Beach oferă o oportunitate minunată pentru o pauză la malul mării. Vizitatorii apreciază în mod deosebit șansa de a se bronza netulburați și de a se scălda în apa curată. Ambianța liniștită face din acest loc o adevărată comoară ascunsă pentru cei care caută relaxare. O plimbare de seară de-a lungul malului promite momente de neuitat la apus.", "category": "recreational", "coords": [33.255157, 35.347353]}, {"name": "Municipality of Alsancak Beach", "text": "Plaja bine întreținută Municipality of Alsancak Beach se întinde în apropierea St Hilarion Castle și este un punct de atracție popular pentru iubitorii de mare. Linia de coastă locală este excelentă pentru băi revigorante și ore relaxante pe nisip. O atmosferă primitoare și prietenoasă domină această porțiune de coastă. Este recomandabil să începeți vizita la plajă devreme în zilele însorite.", "category": "recreational", "coords": [33.205326, 35.356498]}, {"name": "Bamboo Beach", "text": "Sub soarele cipriot, lângă St Hilarion Castle, Bamboo Beach promite zile relaxante de plajă într-un mediu destins. Apa puțin adâncă și porțiunea plăcută de coastă oferă condiții excelente pentru o baie răcoritoare. Aici predomină o activitate liniștită, ceea ce face ca plaja să fie predestinată pentru după-amiezi leneșe. O plimbare la marginea apei completează perfect această experiență maritimă.", "category": "recreational", "coords": [33.217913, 35.353945]}], "en": [{"name": "Escape Beach", "text": "In the Cypriot coastal region near St Hilarion Castle, Escape Beach invites guests for carefree hours by the water. This beach stands out with its appealing location, attracting relaxation seekers for swimming and lingering. The familiar yet relaxed mood ensures a very pleasant bathing experience. To enjoy a perfect beach day, visitors should pack plenty of water and beach essentials.", "category": "recreational", "coords": [33.234734, 35.347123]}, {"name": "Kervansaray Beach", "text": "Along the charming coastline not far from St Hilarion Castle, Kervansaray Beach offers a wonderful opportunity for a seaside break. Visitors particularly appreciate the chance to soak up the sun undisturbed and bathe in the clear waters. The tranquil ambiance makes the location a true hidden gem for those seeking pure relaxation. An evening stroll along the shoreline promises unforgettable moments at sunset.", "category": "recreational", "coords": [33.255157, 35.347353]}, {"name": "Municipality of Alsancak Beach", "text": "The well-maintained Municipality of Alsancak Beach stretches near St Hilarion Castle and is a popular destination for beach lovers. The local coastline is perfectly suited for refreshing swims and relaxing hours spent on the sand. An inviting and friendly atmosphere characterizes this stretch of the coast. Starting your beach visit early is highly advisable on particularly sunny days.", "category": "recreational", "coords": [33.205326, 35.356498]}, {"name": "Bamboo Beach", "text": "Under the Cypriot sun near St Hilarion Castle, Bamboo Beach promises restful beach days in a thoroughly relaxed environment. The pleasant coastline and waters offer excellent conditions for taking a refreshing dip. A generally quiet vibe prevails here, making the beach a perfect spot for unhurried afternoons. A gentle walk along the water's edge wonderfully completes the maritime experience.", "category": "recreational", "coords": [33.217913, 35.353945]}]},
    type: "historical",
    parent: "country-cyprus",
    coords: [33.2408, 35.3117],
    name: { de: "Burg St. Hilarion", hu: "Szent Hilarion vár", ro: "Castelul Sfântul Ilarion", en: "St. Hilarion Castle" },
    description: {
      de: "Eine Burgruine im Kyrenia-Gebirge, die angeblich Walt Disney inspirierte.",
      hu: "Várrom a Kerínia-hegységben, amely a legenda szerint Walt Disneyt is megihlette.",
      ro: "O ruină a unui castel din munții Kyrenia, care se presupune că l-ar fi inspirat pe Walt Disney.",
      en: "A castle ruin in the Kyrenia Mountains, said to have inspired Walt Disney.",
      es: "Una ruina de castillo en las montañas de Kyrenia que supuestamente inspiró a Walt Disney.",
      pt: "Uma ruína de castelo nas montanhas de Kyrenia que terá inspirado Walt Disney.",
      fr: "Une ruine de château dans les montagnes de Kyrenia qui aurait inspiré Walt Disney.",
    },
    descriptionAdvanced: {
      de: "Die Burg St. Hilarion ist eine der drei großen Bergfestungen im Kyrenia-Gebirge in Nordzypern und liegt auf einer Höhe von 732 Metern. Benannt nach einem Eremiten des 4. Jahrhunderts, der aus Palästina floh, um auf dem Berg zu leben, war der Ort ursprünglich ein Kloster, bevor er im 11. Jahrhundert von den Byzantinern befestigt wurde. Während der Lusignan-Zeit diente die Anlage als königliche Sommerresidenz und als kritischer Verteidigungspunkt gegen arabische Überfälle und genuesische Invasionen. Die Burg ist in drei Ebenen unterteilt: die untere Vorburg für Soldaten, die mittlere Ebene mit der Kirche und den königlichen Gemächern sowie die obere Burg auf den Gipfeln. Es wird oft behauptet, dass das märchenhafte Erscheinungsbild der Burg Walt Disney als Inspiration für das Schloss der Königin in Schneewittchen diente. Obwohl die Venezianer die Festung im 15. Jahrhundert teilweise demontierten, zeugen die Ruinen noch heute von mittelalterlicher Wehrarchitektur.",
      hu: "Szent Hilárión vára Ciprus északi részén, a Pentadaktilosz-hegység egyik csúcsán található, 732 méteres magasságban. A vár egy 4. századi remetéről kapta a nevét, aki Palesztinából menekült ide, és a hegyen élt; a hely eredetileg kolostor volt, mielőtt a bizánciak a 11. században megerősítették. A Lusignan-dinasztia idején a vár királyi nyári rezidenciaként és fontos védelmi pontként szolgált az arab portyák és a genovai támadások ellen. Az építmény három szintre tagolódik: az alsó udvar a katonák számára, a középső udvar a templommal és a királyi lakosztályokkal, valamint a felső vár a sziklák tetején. Gyakran említik, hogy a vár mesebeli megjelenése ihlette Walt Disney-t a Hófehérke gonosz királynőjének kastélyához. Bár a velenceiek a 15. században részben lebontották a védműveket a karbantartási költségek csökkentése érdekében, romjai ma is lenyűgözőek.",
      ro: "Castelul Sfântul Hilarion este una dintre cele trei mari fortărețe montane din lanțul Kyrenia din nordul Ciprului, situat la o altitudine de 732 de metri. Numit după un pustnic din secolul al IV-lea care a fugit din Palestina pentru a trăi pe munte, situl a fost inițial o mănăstire înainte de a fi fortificat de bizantini în secolul al XI-lea. În perioada Lusignan, a servit drept reședință regală de vară și punct critic de apărare împotriva raidurilor arabe și invaziilor genoveze. Castelul este împărțit în trei niveluri distincte: secțiunea inferioară pentru soldați, secțiunea mijlocie care conține biserica și apartamentele regale și secțiunea superioară cocoțată pe vârfuri. Legenda sugerează că aspectul de basm al castelului l-a inspirat pe Walt Disney pentru castelul reginei din Albă ca Zăpada. Deși parțial demantelat de venețieni în secolul al XV-lea, ruinele sale rămân o dovadă a arhitecturii militare medievale.",
      en: "St. Hilarion Castle is one of the three great mountain fortresses in the Kyrenia range of northern Cyprus, perched at an elevation of 732 meters. Named after a 4th-century hermit who fled Palestine to live on the peak, the site evolved from a monastery into a Byzantine fortification in the 11th century. During the Lusignan era, it became a royal summer residence and a pivotal defense position against Arab raids and Genoese invasions. The castle is architecturally organized into three levels: the lower ward for military personnel, the middle ward featuring a church and royal apartments, and the upper ward integrated into the jagged peaks. It is widely claimed that the castle's fairy-tale silhouette served as inspiration for Walt Disney's depiction of the Queen's castle in Snow White. Although partially dismantled by the Venetians in the 15th century to lower maintenance costs, its extensive ruins remain a masterpiece of medieval military design.",
      es: "El Castillo de San Hilarión es el mejor conservado de los tres castillos de los cruzados en las montañas de Kyrenia, en el norte de Chipre. Se alza dramáticamente sobre una cumbre rocosa a 732 metros de altitud. Originalmente un monasterio que llevaba el nombre de un monje ermitaño llamado Hilarión, fue ampliado por los bizantinos y más tarde por los Lusignan hasta convertirlo en una fortaleza estratégica que custodiaba la carretera de la costa. El castillo se divide en tres niveles conectados por empinadas escaleras. El nivel superior alberga los aposentos reales y ofrece una vista panorámica impresionante. Se rumorea que la apariencia de cuento de hadas del castillo sirvió de inspiración a Walt Disney para el castillo de \"Blancanieves y los siete enanitos\".",
      pt: "O Castelo de Santo Hilarião é o mais bem preservado dos três castelos cruzados nas montanhas de Kyrenia, no norte de Chipre. Ergue-se dramaticamente num cume rochoso a 732 metros de altitude. Originalmente um mosteiro com o nome de um monge eremita chamado Hilarião, foi ampliado pelos bizantinos e mais tarde pelos Lusignans para se tornar uma fortaleza estratégica que guardava a estrada costeira. O castelo divide-se em três níveis ligados por escadas íngremes. O nível superior alberga os aposentos reais e oferece uma vista panorâmica deslumbrante. Rumores dizem que a aparência de conto de fadas do castelo serviu de inspiração a Walt Disney para o castelo em \"Branca de Neve e os Sete Anões\".",
      fr: "Le château de Saint-Hilarion est le mieux conservé des trois châteaux croisés des montagnes de Kyrenia, au nord de Chypre. Il trône de manière spectaculaire sur un sommet rocheux à 732 mètres d'altitude. À l'origine un monastère nommé d'après un moine ermite nommé Hilarion, il fut transformé par les Byzantins puis par les Lusignans en une forteresse stratégique gardant la route côtière. Le château est divisé en trois niveaux reliés par des escaliers escarpés. Le niveau supérieur abrite les appartements royaux et offre une vue panoramique imprenable. On raconte que l'apparence féerique du château a inspiré Walt Disney pour le château de « Blanche-Neige et les Sept Nains ».",
    },
    factsAdvanced: {
      de: ["Höhe von 732 Metern über dem Meer", "Ursprung als Kloster im 4. Jahrhundert", "Befestigung durch Byzantiner im 11. Jahrhundert", "Königliche Sommerresidenz der Lusignans", "Teilweise Demontage durch Venezianer 1489", "Inspiration für Disney-Filmschloss"],
      hu: ["Tengerszint feletti magasság 732 méter", "4. századi kolostori eredet", "Bizánci erődítés a 11. században", "A Lusignanok királyi nyári rezidenciája", "A velenceiek 1489-ben részben lebontották", "Walt Disney kastélyának állítólagos ihletője"],
      ro: ["Altitudine de 732 de metri", "Origine monahală în secolul al IV-lea", "Fortificat de bizantini în secolul al XI-lea", "Reședință regală de vară a dinastiei Lusignan", "Demantelat parțial de venețieni în 1489", "Inspirație pentru castelul din filmele Disney"],
      en: ["Elevation of 732 meters above sea level", "Original monastic origin in the 4th century", "Fortified by Byzantines in the 11th century", "Royal summer residence for Lusignan kings", "Partially dismantled by Venetians in 1489", "Alleged inspiration for Disney's Snow White castle"],
      es: ["El castillo fue parcialmente demolido por los venecianos en el siglo XV para reducir los costes de la guarnición.", "Los niveles inferiores servían a soldados y trabajadores, mientras que los medios albergaban una iglesia y comedores.", "Las \"ventanas del príncipe\" en el nivel superior son un lugar famoso y fotogénico.", "El castillo fue un importante refugio para los reyes Lusignan durante las Cruzadas.", "San Hilarión fue escenario de feroces combates entre Ricardo Corazón de León y el gobernante bizantino de la isla.", "El ascenso a la cima es agotador, pero la vista merece el esfuerzo.", "El castillo también es conocido como \"Dio Kynoi\" (Los dos perros)."],
      pt: ["O castelo foi parcialmente demolido pelos venezianos no século XV para reduzir os custos da guarnição.", "Os níveis inferiores serviam os soldados e trabalhadores, enquanto os médios albergavam uma igreja e refeitórios.", "As \"janelas do príncipe\" no nível superior são um local famoso e fotogénico.", "O castelo foi um refúgio importante para os reis Lusignan durante as Cruzadas.", "Santo Hilarião foi palco de combates ferozes entre Ricardo Coração de Leão e o governante bizantino da ilha.", "A subida até ao topo é cansativa, mas a vista vale o esforço.", "O castelo também é conhecido como \"Dio Kynoi\" (Os dois cães)."],
      fr: ["Le château a été partiellement démoli par les Vénitiens au XVe siècle pour réduire les coûts de la garnison.", "Les niveaux inférieurs servaient aux soldats et ouvriers, tandis que les niveaux intermédiaires abritaient une église et des réfectoires.", "Les « fenêtres du prince » au niveau supérieur sont un lieu célèbre et photogénique.", "Le château fut un refuge important pour les rois Lusignans pendant les Croisades.", "Saint-Hilarion fut le théâtre de violents combats entre Richard Cœur de Lion et le souverain byzantin de l'île.", "L'ascension vers le sommet est fatigante, mais la vue en vaut la peine.", "Le château est également connu sous le nom de « Dio Kynoi » (Les deux chiens)."],
    }, image: "/poi-images/cy-st-hilarion.webp"},
  {
    id: "cy-bellapais", "sights": {"de": [{"name": "Diana Beach", "text": "Der Diana Beach, in der malerischen Region der Bellapais Abbey gelegen, ist ein bezaubernder Rückzugsort an der Küste Zyperns. Badegäste erfreuen sich an der Möglichkeit, in einer von Ruhe geprägten Atmosphäre das warme Mittelmeer zu genießen. Die Umgebung lädt dazu ein, sich bei einem Sonnenbad vollkommen zu entspannen. Für einen ungestörten Aufenthalt empfiehlt sich ein Besuch außerhalb der Hauptstoßzeiten.", "category": "recreational", "coords": [33.375489, 35.335649]}], "hu": [{"name": "Diana Beach", "text": "A Bellapais Abbey festői régiójában található Diana Beach egy varázslatos tengerparti menedék Cipruson. A fürdőzők örömmel élvezik a meleg Földközi-tengert egy igazán békés atmoszférában. A környezet szinte hívogat, hogy egy napozás során teljesen átadjuk magunkat a pihenésnek. A zavartalan időtöltés érdekében érdemes a legnagyobb tömegen kívüli időszakban érkezni.", "category": "recreational", "coords": [33.375489, 35.335649]}], "ro": [{"name": "Diana Beach", "text": "Diana Beach, situată în regiunea pitorească a Bellapais Abbey, este o evadare fermecătoare pe coasta Ciprului. Oaspeții care se scaldă se bucură de oportunitatea de a experimenta Marea Mediterană caldă într-o atmosferă dominată de liniște. Împrejurimile te invită să te relaxezi complet în timpul unei băi de soare. Pentru o ședere netulburată, se recomandă vizitarea în afara orelor de vârf.", "category": "recreational", "coords": [33.375489, 35.335649]}], "en": [{"name": "Diana Beach", "text": "Diana Beach, situated in the picturesque region of Bellapais Abbey, is a charming coastal retreat in Cyprus. Bathers delight in the opportunity to enjoy the warm Mediterranean in an atmosphere defined by tranquility. The surroundings naturally invite you to completely unwind while soaking up the sun. For an undisturbed stay, visiting outside of the main peak hours is highly recommended.", "category": "recreational", "coords": [33.375489, 35.335649]}]},
    type: "historical",
    parent: "country-cyprus",
    coords: [33.3556, 35.3061],
    name: { de: "Abtei Bellapais", hu: "Bellapais apátság", ro: "Abația Bellapais", en: "Bellapais Abbey" },
    description: {
      de: "Die Ruine eines Klosters aus dem 13. Jahrhundert in der Nähe von Kyrenia.",
      hu: "Egy 13. századi kolostor lenyűgöző romjai Kerínia közelében.",
      ro: "Ruinele unei mănăstiri din secolul al XIII-lea lângă Kyrenia.",
      en: "The ruin of a 13th-century monastery near Kyrenia.",
      es: "La ruina de un monasterio del siglo XIII cerca de Kyrenia.",
      pt: "A ruína de um mosteiro do século XIII perto de Cirénia.",
      fr: "Les ruines d'un monastère du XIIIe siècle près de Kyrenia.",
    },
    descriptionAdvanced: {
      de: "Die Abtei Bellapais, auch bekannt als die „Abtei des Friedens“, ist eine prachtvolle Ruine eines Klosters aus dem 13. Jahrhundert im Dorf Bellapais in Nordzypern. Gegründet von Augustiner-Chorherren, die Ende des 12. Jahrhunderts aus Jerusalem flohen, wurde die heutige gotische Struktur größtenteils während der Herrschaft von König Hugo III. aus der Lusignan-Dynastie errichtet. Die Abtei ist berühmt für ihren gut erhaltenen Kreuzgang mit achtzehn Spitzbögen und das große Refektorium, das den Höhepunkt des fränkischen Architektureinflusses auf der Insel darstellt. Nach der osmanischen Eroberung im Jahr 1571 wurde die Abtei der griechisch-orthoxen Kirche übergeben, verfiel jedoch in den folgenden Jahrhunderten zusehends. Zusätzliche Berühmtheit erlangte der Ort Mitte des 20. Jahrhunderts durch den Schriftsteller Lawrence Durrell, der sein Leben im Dorf in dem Buch „Bittere Limonen“ beschrieb. Heute dient die Anlage als kultureller Veranstaltungsort für internationale Musikfestivals.",
      hu: "A Bellapais-apátság, más néven a „Béke Apátsága”, egy 13. századi kolostor lenyűgöző romja Bellapais faluban, Észak-Cipruson. Az apátságot a 12. század végén Jeruzsálemből menekülő ágostonos kanonokok alapították, a mai gótikus épületegyüttes nagy része pedig III. Hugó király uralkodása alatt épült a Lusignan-dinasztia idején. Az apátság híres jó állapotban fennmaradt kerengőjéről, amely tizennyolc csúcsíves árkáddal rendelkezik, valamint a hatalmas refektóriumáról, amely a frank építészeti befolyás csúcspontját jelenti a szigeten. Az 1571-es oszmán hódítás után az apátságot a görög ortodox egyház kapta meg, de az évszázadok során állapota romlott. A helyszín a 20. század közepén vált világszerte ismertté Lawrence Durrell „Keserű citromok” című műve révén, amelyben a faluban töltött éveit örökítette meg. Ma az apátság kulturális eseményeknek és nemzetközi zenei fesztiváloknak ad otthont.",
      ro: "Abația Bellapais, cunoscută și sub numele de „Abația Păcii”, este o ruină splendidă a unei mănăstiri din secolul al XIII-lea situată în satul Bellapais din nordul Ciprului. Fondată de canonici augustinieni care au fugit din Ierusalim la sfârșitul secolului al XII-lea, structura gotică actuală a fost construită în mare parte în timpul domniei regelui Hugh al III-lea din dinastia Lusignan. Abația este renumită pentru claustrul său bine conservat, cu optsprezece arcuri ascuțite, și pentru marele refectoriu, care demonstrează apogeul influenței arhitecturale franceze pe insulă. După cucerirea otomană din 1571, abația a fost predată Bisericii Ortodoxe Grecești, deși a căzut treptat în ruină în secolele următoare. Situl a câștigat faimă suplimentară la mijlocul secolului al XX-lea prin scrierile lui Lawrence Durrell, care a descris viața în sat în cartea „Bitter Lemons”. Astăzi, servește drept locație culturală pentru festivaluri internaționale de muzică.",
      en: "Bellapais Abbey, also known as the 'Abbey of Peace,' is a magnificent 13th-century monastic ruin located in the village of Bellapais in northern Cyprus. Founded by Augustinian canons fleeing Jerusalem in the late 12th century, the current Gothic structure was primarily developed during the reign of King Hugh III of the Lusignan dynasty. The abbey is celebrated for its exceptionally well-preserved cloister, featuring eighteen pointed arches, and its grand refectory, which exemplifies the height of Frankish architectural influence on the island. Following the Ottoman conquest in 1571, the abbey was transferred to the Greek Orthodox Church, though it eventually fell into disuse and decay over the succeeding centuries. The site gained literary fame in the mid-20th century through Lawrence Durrell’s book 'Bitter Lemons,' which chronicled his life in the village. Today, the abbey functions as a prestigious cultural venue hosting international music festivals within its historic walls.",
      es: "La abadía de Bellapais es la evocadora ruina de un monasterio agustino del siglo XIII en el pueblo de Bellapais, con vistas a la ciudad de Kyrenia. El nombre 'Bellapais' deriva del francés 'Abbaye de la Paix' (Abadía de la Paz). La abadía es una obra maestra de la arquitectura gótica trasplantada al Levante. El edificio conservado más impresionante es el refectorio (comedor) con su techo alto y el púlpito. La iglesia de la abadía también está bien conservada. La ruina del monasterio, rodeada de cipreses, irradia una atmósfera de paz y serenidad y ha inspirado a muchos artistas y escritores a lo largo de los años, incluido Lawrence Durrell, quien vivió aquí y escribió su libro 'Limones amargos'.",
      pt: "A abadia de Bellapais é a ruína evocativa de um mosteiro agostiniano do século XIII na aldeia de Bellapais, com vista para a cidade de Cirénia. O nome 'Bellapais' deriva do francês 'Abbaye de la Paix' (Abadia da Paz). A abadia é uma obra-prima da arquitetura gótica transplantada para o Levante. O edifício preservado mais impressionante é o refeitório com o seu teto alto e o púlpito. A igreja da abadia também está bem preservada. A ruína do mosteiro, rodeada por ciprestes, irradia uma atmosfera de paz e serenidade e inspirou muitos artistas e escritores ao longo dos anos, incluindo Lawrence Durrell, que viveu aqui e escreveu o seu livro 'Limões Amargos'.",
      fr: "L'abbaye de Bellapais est la ruine évocatrice d'un monastère augustin du XIIIe siècle situé dans le village de Bellapais, surplombant la ville de Kyrenia. Le nom 'Bellapais' dérive du français 'Abbaye de la Paix'. L'abbaye est un chef-d'œuvre de l'architecture gothique transplanté au Levant. Le bâtiment le mieux conservé est le réfectoire avec son haut plafond et sa chaire. L'église de l'abbaye est également bien préservée. Les ruines du monastère, entourées de cyprès, dégagent une atmosphère de calme et de sérénité et ont inspiré de nombreux artistes et écrivains au fil des ans, dont Lawrence Durrell, qui a vécu ici et a écrit son livre 'Citrons amers'.",
    },
    factsAdvanced: {
      de: ["Gründung zwischen 1198 und 1205", "Bau der Hauptstruktur im 13. Jahrhundert", "Kreuzgang mit 18 gotischen Bögen", "Übergabe an Orthodoxe Kirche 1571", "Schauplatz des Buches Bittere Limonen", "Jährliches Bellapais Musikfestival"],
      hu: ["Alapítás éve: 1198-1205 között", "A főépület 13. századi gótikus stílusú", "A kerengőnek 18 csúcsíves árkádja van", "1571-ben az ortodox egyházhoz került", "A Keserű citromok című könyv helyszíne", "Nemzetközi zenei fesztiválok helyszíne"],
      ro: ["Fondată între anii 1198 și 1205", "Structura principală din secolul al XIII-lea", "Claustru cu 18 arcuri gotice", "Predată Bisericii Ortodoxe în 1571", "Decorul cărții Bitter Lemons (1957)", "Găzduiește festivalul de muzică Bellapais"],
      en: ["Founded between 1198 and 1205", "Main Gothic structure from the 13th century", "Cloister features 18 pointed arches", "Transferred to Orthodox Church in 1571", "Setting for the book Bitter Lemons (1957)", "Venue for the annual Bellapais Music Festival"],
      es: ["La construcción de la abadía comenzó alrededor de 1200 bajo el reinado de los Lusignan.", "El refectorio es considerado una de las salas góticas más bellas de Oriente Próximo.", "La abadía fue saqueada durante la conquista otomana y cayó lentamente en la ruina.", "Hoy en día se celebran conciertos y festivales de música en la abadía.", "El 'Árbol de la ociosidad' en el pueblo de Bellapais se hizo famoso por el libro de Durrell.", "Desde la abadía se tiene una vista espectacular de la costa y del Mediterráneo.", "Dos sarcófagos romanos en la entrada servían antiguamente como lavabos."],
      pt: ["A construção da abadia começou por volta de 1200 sob o reinado dos Lusignans.", "O refeitório é considerado uma das salas góticas mais belas do Médio Oriente.", "A abadia foi saqueada durante a conquista otomana e caiu lentamente em ruínas.", "Hoje realizam-se concertos e festivais de música na abadia.", "A 'Árvore do Ócio' na aldeia de Bellapais tornou-se famosa pelo livro de Durrell.", "Da abadia tem-se uma vista espetacular sobre a costa e o Mediterrâneo.", "Dois sarcófagos romanos na entrada serviam outrora como lavatórios."],
      fr: ["La construction de l'abbaye a commencé vers 1200 sous le règne des Lusignan.", "Le réfectoire est considéré comme l'une des plus belles salles gothiques du Proche-Orient.", "L'abbaye fut pillée lors de la conquête ottomane et tomba lentement en ruine.", "Aujourd'hui, l'abbaye accueille des concerts et des festivals de musique.", "L''Arbre de l'oisiveté' dans le village de Bellapais est devenu célèbre grâce au livre de Durrell.", "Depuis l'abbaye, on a une vue spectaculaire sur la côte et la mer Méditerranée.", "Deux sarcophages romains à l'entrée servaient autrefois de lavabos."],
    }, image: "/poi-images/cy-bellapais.webp"},
  {
    id: "cy-othello-castle",
    type: "historical",
    parent: "CY-002",
    coords: [33.9422, 35.1264],
    name: { de: "Othello-Turm", hu: "Othello-torony", ro: "Turnul Othello", en: "Othello Castle" },
    description: {
      de: "Eine Burg in Famagusta, die nach Shakespeares berühmtem Stück benannt wurde.",
      hu: "Vár Famagustában, amelyet Shakespeare híres drámája után neveztek el.",
      ro: "Un castel din Famagusta, numit după faimoasa piesă a lui Shakespeare.",
      en: "A castle in Famagusta, named after Shakespeare's famous play.",
      es: "Un castillo en Famagusta bautizado en honor a la famosa obra de Shakespeare.",
      pt: "Um castelo em Famagusta nomeado em homenagem à famosa peça de Shakespeare.",
      fr: "Un château à Famagouste nommé d'après la célèbre pièce de Shakespeare.",
    },
    descriptionAdvanced: {
      de: "Die Burg Othello, ursprünglich als Zitadelle zum Schutz des Hafens von Famagusta im 14. Jahrhundert von den Lusignans erbaut, ist ein bedeutendes Denkmal der Militärarchitektur auf Zypern. Ihren populären Namen erhielt die Festung während der venezianischen Herrschaft im 15. Jahrhundert, als sie modernisiert und verstärkt wurde, um Kanonenbeschuss standzuhalten. Der Name leitet sich von William Shakespeares berühmtem Drama 'Othello' ab, das in einer Hafenstadt auf Zypern spielt; man glaubt, dass die Burg als Vorbild für den Schauplatz diente. Über dem Haupteingang prangt noch heute das Relief des Löwen von San Marco, das Symbol der venezianischen Republik, mit einer Inschrift aus dem Jahr 1492. Die Anlage besteht aus einem quadratischen Grundriss mit vier markanten Ecktürmen und beherbergt in ihrem Inneren einen geräumigen Innenhof sowie eine gotische Halle. Nach umfangreichen Restaurierungsarbeiten im Jahr 2015 ist die Burg wieder für die Öffentlichkeit zugänglich und bietet einen Einblick in die bewegte Geschichte der Verteidigungskämpfe.",
      hu: "Az Othello-vár, amelyet eredetileg a Lusignan-ház építtetett a 14. században Famagusta kikötőjének védelmére, a katonai építészet egyik kiemelkedő emléke Cipruson. Mai nevét a 15. századi velencei fennhatóság idején kapta, amikor az erődítményt jelentősen megerősítették és alkalmassá tették az ágyútűz elleni védekezésre. A név William Shakespeare híres tragédiájára, az 'Othello'-ra utal, amelynek cselekménye egy ciprusi kikötővárosban játszódik; a hagyomány szerint ez a vár szolgált a mű helyszínéül. A főbejárat felett ma is látható Szent Márk oroszlánja, a Velencei Köztársaság jelképe, amely az 1492-es felújítási munkálatoknak állít emléket. A vár alaprajza négyszögletes, sarkaiban masszív tornyokkal, belső udvarán pedig egy impozáns gótikus terem található. A 2015-ben befejezett nagyszabású restaurálást követően a vár ismét látogatható, bemutatva Famagusta stratégiai jelentőségét a középkorban.",
      ro: "Castelul Othello, construit inițial ca citadelă pentru protecția portului Famagusta în secolul al XIV-lea de către dinastia Lusignan, este un monument remarcabil al arhitecturii militare din Cipru. Fortăreața și-a primit numele popular în timpul stăpânirii venețiene din secolul al XV-lea, când a fost modernizată și fortificată pentru a rezista atacurilor cu artilerie. Denumirea face referire la faimoasa piesă de teatru 'Othello' a lui William Shakespeare, a cărei acțiune este plasată într-un port din Cipru; se crede că acest castel a servit drept inspirație pentru decorul dramei. Deasupra intrării principale se păstrează basorelieful Leului Sfântului Marcu, simbolul Republicii Venețiene, datând din perioada reconstrucției din 1492. Structura are un plan patrulater cu patru turnuri de colț și adăpostește o curte interioară vastă și o sală gotică impresionantă. După restaurări ample finalizate în 2015, castelul a fost redeschis publicului, oferind o perspectivă asupra istoriei asediilor maritime.",
      en: "Othello Castle, originally constructed as a citadel by the Lusignans in the 14th century to protect Famagusta's harbour, is a significant example of medieval military architecture in Cyprus. The fortress acquired its popular name during the Venetian period in the 15th century, when it was extensively remodeled and strengthened to withstand artillery fire. The name is derived from William Shakespeare's tragedy 'Othello,' which is set in a Cypriot seaport; tradition holds that this castle served as the model for the play's setting. Above the main entrance, the relief of the Lion of Saint Mark, the symbol of the Venetian Republic, remains visible today, commemorating the 1492 renovations led by Nicolo Foscari. The castle features a rectangular layout with four circular corner towers and contains a spacious courtyard and a high-vaulted Gothic hall. Following major restoration efforts completed in 2015, the site is open to visitors, showcasing the strategic importance of Famagusta in the late Middle Ages and the Renaissance.",
      es: "El Castillo de Otelo, construido originalmente como ciudadela por los Lusignan en el siglo XIV para proteger el puerto de Famagusta, es un monumento destacado de la arquitectura militar en Chipre. Recibió su nombre popular durante el dominio veneciano en el siglo XV, cuando fue modernizado para resistir el fuego de los cañones. El nombre deriva del drama 'Otelo' de William Shakespeare, ambientado en una ciudad portuaria de Chipre; se cree que el castillo sirvió de modelo para el escenario. Sobre la entrada principal aún se conserva el relieve del león de San Marcos, símbolo de la República veneciana, con una inscripción de 1492. El complejo tiene planta cuadrada con cuatro torres de esquina y alberga un amplio patio interior y un salón gótico. Tras una restauración exhaustiva en 2015, el castillo está abierto al público, ofreciendo una visión de la agitada historia de las luchas defensivas.",
      pt: "O Castelo de Otelo, construído originalmente como cidadela pelos lusignanos no século XIV para proteger o porto de Famagusta, é um monumento importante da arquitetura militar em Chipre. A fortaleza recebeu o seu nome popular durante o domínio veneziano no século XV, quando foi modernizada e reforçada para resistir ao bombardeamento de canhões. O nome deriva do famoso drama de William Shakespeare, 'Otelo', que se desenrola numa cidade portuária em Chipre; acredita-se que o castelo serviu de modelo para o cenário. Sobre a entrada principal ainda se encontra o relevo do Leão de São Marcos, o símbolo da República de Veneza, com uma inscrição do ano de 1492. O complexo possui uma planta quadrada com quatro torres de canto marcantes e alberga no seu interior um pátio espaçoso, bem como um salão gótico. Após extensos trabalhos de restauro em 2015, o castelo está novamente aberto ao público e oferece uma visão da história agitada das lutas defensivas.",
      fr: "Le château d'Othello, initialement construit au XIVe siècle par les Lusignan comme citadelle pour protéger le port de Famagouste, est un monument majeur de l'architecture militaire à Chypre. La forteresse a reçu son nom populaire sous la domination vénitienne au XVe siècle, lorsqu'elle fut modernisée et renforcée pour résister aux tirs de canons. Le nom provient de la célèbre pièce de William Shakespeare, 'Othello', qui se déroule dans une ville portuaire de Chypre ; on pense que le château a servi de modèle au décor. Au-dessus de l'entrée principale trône encore aujourd'hui le relief du Lion de Saint-Marc, symbole de la République vénitienne, avec une inscription datant de 1492. L'édifice présente un plan carré doté de quatre tours d'angle imposantes et abrite une vaste cour intérieure ainsi qu'une salle gothique. Après d'importants travaux de restauration en 2015, le château est de nouveau ouvert au public, offrant un aperçu de l'histoire mouvementée des luttes défensives.",
    },
    factsAdvanced: {
      de: ["Die ursprüngliche Zitadelle wurde im Jahr 1310 von den Lusignans erbaut.", "Nicolo Foscari leitete 1492 den venezianischen Umbau der Festung.", "Das Relief des Markuslöwen trägt die Inschrift 'Nicolo Foscari Capitano'.", "Die Burg war einst von einem tiefen, in den Fels gehauenen Wassergraben umgeben.", "In der gotischen 'Großen Halle' hielten die Lusignans ihre Versammlungen ab.", "Shakespeare hat Zypern vermutlich nie besucht, nutzte aber historische Berichte."],
      hu: ["Az eredeti citadellát 1310-ben építtette a Lusignan-dinasztia.", "Nicolo Foscari irányította az erőd 1492-es velencei átépítését.", "Szent Márk oroszlánjának domborművén a 'Nicolo Foscari Capitano' felirat olvasható.", "A várat egykor mély, sziklába vájt vizesárok vette körül a védelem érdekében.", "A gótikus 'Nagy Terem' szolgált a Lusignanok tanácskozási helyszínéül.", "Shakespeare valószínűleg soha nem járt Cipruson, de ismerte a sziget történelmét."],
      ro: ["Citadela originală a fost construită în anul 1310 de către dinastia Lusignan.", "Nicolo Foscari a condus reconstrucția venețiană a fortăreței în 1492.", "Basorelieful Leului Sfântului Marcu poartă inscripția 'Nicolo Foscari Capitano'.", "Castelul a fost odinioară înconjurat de un șanț de apărare adânc săpat în stâncă.", "„Marea Sală” gotică era locul unde membrii dinastiei Lusignan țineau adunările.", "Se crede că Shakespeare s-a inspirat din guvernarea lui Cristoforo Moro în Cipru."],
      en: ["The original citadel was built in 1310 by the Lusignan dynasty.", "Nicolo Foscari directed the Venetian reconstruction of the fortress in 1492.", "The Lion of Saint Mark relief bears the inscription 'Nicolo Foscari Capitano'.", "The castle was once surrounded by a deep moat cut directly into the rock.", "The Gothic 'Great Hall' was used by the Lusignans for their formal assemblies.", "Shakespeare likely based the setting on the real-life governor Cristoforo Moro."],
      es: ["La ciudadela original fue construida en 1310 por los Lusignan.", "Nicolo Foscari dirigió la remodelación veneciana de la fortaleza en 1492.", "El relieve del León de San Marcos lleva la inscripción 'Nicolo Foscari Capitano'.", "El castillo estuvo rodeado por un profundo foso excavado en la roca.", "Los Lusignan celebraban sus asambleas en el 'Gran Salón' gótico.", "Es probable que Shakespeare nunca visitara Chipre, pero utilizó relatos históricos."],
      pt: ["A cidadela original foi construída em 1310 pelos lusignanos.", "Nicolo Foscari dirigiu a reconstrução veneziana da fortaleza em 1492.", "O relevo do Leão de São Marcos ostenta a inscrição 'Nicolo Foscari Capitano'.", "O castelo esteve em tempos rodeado por um fosso profundo escavado na rocha.", "No gótico 'Grande Salão', os lusignanos realizavam as suas assembleias.", "Shakespeare provavelmente nunca visitou Chipre, mas utilizou relatos históricos."],
      fr: ["La citadelle d'origine a été construite en 1310 par les Lusignan.", "Nicolo Foscari a dirigé la reconstruction vénitienne de la forteresse en 1492.", "Le relief du Lion de Saint-Marc porte l'inscription 'Nicolo Foscari Capitano'.", "Le château était autrefois entouré de douves profondes taillées dans la roche.", "Les Lusignan tenaient leurs assemblées dans la 'Grande Salle' gothique.", "Shakespeare n'a probablement jamais visité Chypre, mais s'est appuyé sur des récits historiques."],
    }, image: "/poi-images/cy-othello-castle.webp",
    facts: {
      de: ["In Famagusta gelegen", "Benannt nach Shakespeares Othello", "Venezianische Festungsbaukunst", "Löwe von San Marco am Tor"],
      hu: ["Famagusta városában található", "Shakespeare drámája ihlette", "Velencei stílusú építészet", "Szent Márk oroszlánja a kapun"],
      ro: ["Situat în portul Famagusta", "Legat de piesa lui Shakespeare", "Arhitectură de apărare venețiană", "Basorelief cu leul Sfântului Marcu"],
      en: ["Located in Famagusta port", "Linked to Shakespeare's play", "Venetian military architecture", "Lion of St. Mark carving"],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "cy-blue-lagoon", "sights": {
      "de": [
            {
                  "name": "Amphitheatre",
                  "text": "Amphitheatre-Strand an der Blauen Lagune.",
                  "category": "recreational",
                  "coords": [
                        32.317763,
                        35.075006
                  ]
            },
            {
                  "name": "Blue Lagoon",
                  "text": "Blaue Lagune auf Zypern, bekannt für ihr kristallklares Wasser.",
                  "category": "recreational",
                  "coords": [
                        32.305789,
                        35.082879
                  ]
            },
            {
                  "name": "Ttakkas Bay",
                  "text": "Ein malerischer Strand in der Küstenregion in der Nähe der Blauen Lagune.",
                  "category": "recreational",
                  "coords": [
                        32.356921,
                        35.048617
                  ]
            },
            {
                  "name": "Moutti tis Sotiras",
                  "text": "Ein Berggipfel mit Panoramablick in der Nähe der Blauen Lagune.",
                  "category": "landmark",
                  "coords": [
                        32.32399,
                        35.064002
                  ]
            },
            {
                  "name": "Purgos tes Regainas",
                  "text": "Antike Ruinen eines mittelalterlichen Turms in der Nähe der Blauen Lagune.",
                  "category": "historical",
                  "coords": [
                        32.325686,
                        35.05948
                  ]
            },
            {
                  "name": "Bad der Aphrodite",
                  "text": "Eine natürliche Grotte, in der nach der Legende die griechische Göttin Aphrodite badete.",
                  "category": "landmark",
                  "coords": [
                        32.343854,
                        35.05636
                  ]
            },
            {
                  "name": "Fontana Amorosa",
                  "text": "Ein Aussichtspunkt an der Akamas-Küste mit herrlichem Blick auf das Mittelmeer.",
                  "category": "natural",
                  "coords": [
                        32.300767,
                        35.089431
                  ]
            },
            {
                  "name": "Reef approx. 8 meters high",
                  "text": "Eine bemerkenswerte Unterwasser- oder Küstenriffformation in der Nähe der Blauen Lagune.",
                  "category": "landmark",
                  "coords": [
                        32.348047,
                        35.058601
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Amphitheatre",
                  "text": "Amphitheatre-part a Kék Lagúnánál.",
                  "category": "recreational",
                  "coords": [
                        32.317763,
                        35.075006
                  ]
            },
            {
                  "name": "Blue Lagoon",
                  "text": "Kék Lagúna Cipruson, híres kristálytiszta vizéről.",
                  "category": "recreational",
                  "coords": [
                        32.305789,
                        35.082879
                  ]
            },
            {
                  "name": "Ttakkas Bay",
                  "text": "Egy festői tengerpart a Kék Lagúna közelében.",
                  "category": "recreational",
                  "coords": [
                        32.356921,
                        35.048617
                  ]
            },
            {
                  "name": "Moutti tis Sotiras",
                  "text": "Hegycsúcs panorámás kilátással a Kék Lagúna közelében.",
                  "category": "landmark",
                  "coords": [
                        32.32399,
                        35.064002
                  ]
            },
            {
                  "name": "Purgos tes Regainas",
                  "text": "Egy középkori torony ősi romjai a Kék Lagúna közelében.",
                  "category": "historical",
                  "coords": [
                        32.325686,
                        35.05948
                  ]
            },
            {
                  "name": "Baths of Aphrodite",
                  "text": "Természetes barlang, ahol a legenda szerint Aphrodité görög istennő fürdött.",
                  "category": "landmark",
                  "coords": [
                        32.343854,
                        35.05636
                  ]
            },
            {
                  "name": "Fontana Amorosa",
                  "text": "Kilátópont az Akamas-parton, ahonnan szép kilátás nyílik a Földközi-tengerre.",
                  "category": "natural",
                  "coords": [
                        32.300767,
                        35.089431
                  ]
            },
            {
                  "name": "Reef approx. 8 meters high",
                  "text": "Figyelemre méltó víz alatti vagy parti zátonyképződmény a Kék Lagúna közelében.",
                  "category": "landmark",
                  "coords": [
                        32.348047,
                        35.058601
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Amphitheatre",
                  "text": "Plaja Amphitheatre la Laguna Albastră.",
                  "category": "recreational",
                  "coords": [
                        32.317763,
                        35.075006
                  ]
            },
            {
                  "name": "Blue Lagoon",
                  "text": "Laguna Albastră din Cipru, cunoscută pentru apele sale cristaline.",
                  "category": "recreational",
                  "coords": [
                        32.305789,
                        35.082879
                  ]
            },
            {
                  "name": "Ttakkas Bay",
                  "text": "O plajă pitorească situată în zona de coastă de lângă Laguna Albastră.",
                  "category": "recreational",
                  "coords": [
                        32.356921,
                        35.048617
                  ]
            },
            {
                  "name": "Moutti tis Sotiras",
                  "text": "Un vârf muntos care oferă vedere panoramică în apropierea zonei Laguna Albastră.",
                  "category": "landmark",
                  "coords": [
                        32.32399,
                        35.064002
                  ]
            },
            {
                  "name": "Purgos tes Regainas",
                  "text": "Ruinele antice ale unui turn medieval situat lângă Laguna Albastră.",
                  "category": "historical",
                  "coords": [
                        32.325686,
                        35.05948
                  ]
            },
            {
                  "name": "Baths of Aphrodite",
                  "text": "O grotă naturală unde, conform legendei, se scălda zeița greacă Afrodita.",
                  "category": "landmark",
                  "coords": [
                        32.343854,
                        35.05636
                  ]
            },
            {
                  "name": "Fontana Amorosa",
                  "text": "Un punct de belvedere de-a lungul coastei Akamas, care oferă vederi frumoase ale Mediteranei.",
                  "category": "natural",
                  "coords": [
                        32.300767,
                        35.089431
                  ]
            },
            {
                  "name": "Reef approx. 8 meters high",
                  "text": "O formațiune de recif subacvatic sau de coastă notabilă lângă Laguna Albastră.",
                  "category": "landmark",
                  "coords": [
                        32.348047,
                        35.058601
                  ]
            }
      ],
      "en": [
            {
                  "name": "Amphitheatre",
                  "text": "Amphitheatre beach at the Blue Lagoon.",
                  "category": "recreational",
                  "coords": [
                        32.317763,
                        35.075006
                  ]
            },
            {
                  "name": "Blue Lagoon",
                  "text": "Blue Lagoon in Cyprus, known for its crystal clear water.",
                  "category": "recreational",
                  "coords": [
                        32.305789,
                        35.082879
                  ]
            },
            {
                  "name": "Ttakkas Bay",
                  "text": "A scenic beach located in the coastal area near the Blue Lagoon.",
                  "category": "recreational",
                  "coords": [
                        32.356921,
                        35.048617
                  ]
            },
            {
                  "name": "Moutti tis Sotiras",
                  "text": "A mountain peak offering panoramic views near the Blue Lagoon area.",
                  "category": "landmark",
                  "coords": [
                        32.32399,
                        35.064002
                  ]
            },
            {
                  "name": "Pyrgos tis Rigainas",
                  "text": "Ancient ruins of a medieval tower located near the Blue Lagoon.",
                  "category": "historical",
                  "coords": [
                        32.325686,
                        35.05948
                  ]
            },
            {
                  "name": "Baths of Aphrodite",
                  "text": "A natural grotto where, according to legend, the Greek goddess Aphrodite bathed.",
                  "category": "landmark",
                  "coords": [
                        32.343854,
                        35.05636
                  ]
            },
            {
                  "name": "Fontana Amorosa",
                  "text": "A viewpoint along the Akamas coast offering beautiful views of the Mediterranean.",
                  "category": "natural",
                  "coords": [
                        32.300767,
                        35.089431
                  ]
            },
            {
                  "name": "Reef approx. 8 meters high",
                  "text": "A notable underwater or coastal reef formation near the Blue Lagoon.",
                  "category": "landmark",
                  "coords": [
                        32.348047,
                        35.058601
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CY-005",
    coords: [32.3250, 35.0667],
    name: { de: "Blaue Lagune", hu: "Kék Lagúna", ro: "Laguna Albastră", en: "Blue Lagoon" },
    description: {
      de: "Ein beliebtes Badeziel mit kristallklarem Wasser auf der Akamas-Halbinsel.",
      hu: "Népszerű fürdőzőhely kristálytiszta vízzel az Akamasz-félszigeten.",
      ro: "O destinație populară pentru înot, cu apă cristalină, pe Peninsula Akamas.",
      en: "A popular swimming spot with crystal-clear water on the Akamas Peninsula.",
      es: "Un popular destino de baño con aguas cristalinas en la península de Akamas.",
      pt: "Um destino popular para banhos com águas cristalinas na península de Akamas.",
      fr: "Une destination de baignade populaire aux eaux cristallines sur la péninsule d'Akamas.",
    },
    descriptionAdvanced: {
      de: "Die Blaue Lagune an der Westküste Zyperns, innerhalb des Akamas-Nationalparks gelegen, gilt als einer der isoliertesten und unberührtesten Orte der Insel. Sie zeichnet sich durch ihr außergewöhnlich klares, türkisfarbenes Wasser und den hellen Sandboden aus, was ihr ein fast tropisches Aussehen verleiht. Da die Lagune durch felsige Landzungen geschützt ist, bleibt das Wasser hier meist ruhig und warm, was sie zu einem idealen Ort zum Schnorcheln und Schwimmen macht. Der Zugang zum Gebiet ist aufgrund des unwegsamen Geländes am besten per Boot von Latchi oder Polis aus möglich, obwohl auch Allradfahrzeuge über steile Pfade dorthin gelangen können. Die Unterwasserwelt der Lagune ist reich an Meeresflora und kleinen Fischarten, die in den Felsspalten Schutz suchen. Ökologisch ist die Region von großer Bedeutung, da sie Teil eines geschützten Naturschutzgebietes ist, das seltene Pflanzenarten und eine vielfältige Fauna beherbergt. Die Blaue Lagune ist ein Paradebeispiel für die natürliche Schönheit Zyperns fernab der großen Touristenzentren.",
      hu: "A Ciprus nyugati partján, az Akamasz-félszigeten található Kék Lagúna a sziget egyik legeldugottabb és legérintetlenebb természeti kincse. Az öböl különlegessége a rendkívül tiszta, türkizkék víz és a világos homokos aljzat, amely trópusi hangulatot kölcsönöz a tájnak. Mivel a lagúnát sziklás földnyelvek védik az erős áramlatoktól, a víz itt szinte mindig nyugodt és kellemesen meleg, így kiválóan alkalmas búvárkodásra és úszásra. A terület megközelítése a nehéz terepviszonyok miatt leginkább hajóval ajánlott Latchi vagy Polisz kikötőjéből, de terepjáróval is elérhető a meredek partmenti utakon. A lagúna víz alatti világa gazdag tengeri élővilággal büszkélkedhet, számos halfaj és tengeri növény figyelhető meg a sziklák mentén. Ökológiai szempontból a régió kiemelt jelentőségű, hiszen a nemzeti park részeként ritka növényfajoknak ad otthont. A Kék Lagúna Ciprus természeti szépségének szimbóluma, amely távol esik a nagyvárosok zajától.",
      ro: "Laguna Albastră, situată pe coasta de vest a Ciprului în cadrul Parcului Național Akamas, este considerată unul dintre cele mai izolate și spectaculoase locuri de pe insulă. Se remarcă prin apele sale de un turcoaz ireal și fundul nisipos de culoare deschisă, care conferă zonei un aspect exotic, aproape tropical. Deoarece laguna este protejată de promontorii stâncoase, apele rămân calme și calde pe tot parcursul sezonului, fiind o destinație ideală pentru snorkeling și înot. Accesul în zonă este limitat de terenul accidentat, fiind recomandat transportul cu barca din porturile Latchi sau Polis, deși se poate ajunge și cu vehicule 4x4 pe drumuri forestiere dificile. Biodiversitatea marină a lagunei este remarcabilă, oferind adăpost multor specii de pești și vegetație marină printre formațiunile calcaroase. Din punct de vedere ecologic, regiunea face parte dintr-o arie protejată ce găzduiește plante endemice și o faună diversă. Laguna Albastră rămâne o emblemă a frumuseții naturale nealterate a Ciprului.",
      en: "The Blue Lagoon, located on the western coast of Cyprus within the Akamas Peninsula National Park, is widely regarded as one of the island's most secluded and breathtaking natural sites. It is famous for its exceptionally clear turquoise waters and bright sandy seabed, which give the bay a tropical appearance unique to the region. Sheltered by rocky headlands, the waters in the lagoon remain remarkably calm and warm, making it a premier destination for snorkeling and swimming. Access to the lagoon is restricted due to the rugged terrain; it is best reached by boat from the harbours of Latchi or Polis, though it can also be accessed via challenging off-road tracks using 4x4 vehicles. The underwater ecosystem is vibrant, hosting a variety of marine life and flora amidst the submerged rock formations. Ecologically, the area is of high significance as part of a protected reserve that sustains rare endemic plants and diverse wildlife. The Blue Lagoon epitomizes the raw natural beauty of Cyprus, offering a tranquil escape.",
      es: "La Laguna Azul, en la costa oeste de Chipre y dentro del Parque Nacional de Akamas, es considerada uno de los lugares más aislados y vírgenes de la isla. Se caracteriza por sus aguas turquesas excepcionalmente claras y su fondo de arena clara, lo que le confiere un aspecto casi tropical. Protegida por promontorios rocosos, el agua permanece generalmente tranquila y cálida, siendo ideal para el snorkel y la natación. Debido al terreno accidentado, el acceso es mejor por barco desde Latchi o Polis, aunque los vehículos 4x4 pueden llegar por senderos empinados. El mundo submarino es rico en flora marina y pequeñas especies de peces que se refugian en las grietas de las rocas. Ecológicamente, la región es de gran importancia al formar parte de una reserva natural protegida que alberga plantas raras y una fauna diversa. La Laguna Azul es un ejemplo perfecto de la belleza natural de Chipre, lejos de los grandes centros turísticos.",
      pt: "A Lagoa Azul, na costa oeste de Chipre e situada dentro do Parque Nacional de Akamas, é considerada um dos locais mais isolados e preservados da ilha. Caracteriza-se pelas suas águas azul-turquesa excecionalmente límpidas e pelo fundo de areia clara, o que lhe confere uma aparência quase tropical. Protegida por promontórios rochosos, a água permanece geralmente calma e quente, tornando-a um local ideal para mergulho com snorkel e natação. O acesso à área é feito preferencialmente de barco a partir de Latchi ou Polis devido ao terreno acidentado, embora veículos todo-o-terreno possam chegar através de trilhos íngremes. O mundo subaquático da lagoa é rico em flora marinha e pequenas espécies de peixes que procuram abrigo nas fendas das rochas. Ecologicamente, a região é de grande importância, pois faz parte de uma reserva natural protegida que alberga espécies de plantas raras e uma fauna diversificada. A Lagoa Azul é um exemplo primordial da beleza natural de Chipre, longe dos grandes centros turísticos.",
      fr: "Le Lagon Bleu, situé sur la côte ouest de Chypre au sein du parc national d'Akamas, est considéré comme l'un des endroits les plus isolés et les plus préservés de l'île. Il se caractérise par ses eaux turquoise exceptionnellement claires et son fond de sable clair, ce qui lui donne un aspect presque tropical. Protégée par des promontoires rocheux, l'eau y reste généralement calme et chaude, ce qui en fait un lieu idéal pour la plongée en apnée et la baignade. L'accès à la zone est préférable en bateau depuis Latchi ou Polis en raison du terrain accidenté, bien que des véhicules tout-terrain puissent s'y rendre par des sentiers escarpés. Le monde sous-marin du lagon est riche en flore marine et en petites espèces de poissons qui s'abritent dans les crevasses rocheuses. Sur le plan écologique, la région est d'une grande importance car elle fait partie d'une réserve naturelle protégée abritant des espèces végétales rares et une faune diversifiée. Le Lagon Bleu est un exemple parfait de la beauté naturelle de Chypre, loin des grands centres touristiques.",
    },
    factsAdvanced: {
      de: ["Die Blaue Lagune ist der meistbesuchte Ort innerhalb des Akamas-Nationalparks.", "Das Wasser hat aufgrund des hohen Reflexionsgrads des weißen Sandes ein tiefes Türkis.", "Die Durchschnittstiefe in der Lagune beträgt nur etwa 2 bis 4 Meter.", "Es gibt keine festen Gebäude oder sanitären Einrichtungen an diesem geschützten Ort.", "Tagesausflugsboote aus Latchi bieten oft Grillen an Bord für Besucher an.", "In der Nähe befindet sich die Insel Chamili, die ebenfalls zum Schnorcheln einlädt."],
      hu: ["A Kék Lagúna az Akamasz-félsziget leglátogatottabb természeti pontja.", "A víz mély türkiz színét a fehér homokos aljzat fényvisszaverődése adja.", "A lagúna átlagos vízmélysége mindössze 2-4 méter között mozog.", "A védett területen nincsenek épített létesítmények vagy utak.", "A Latchiból induló kirándulóhajók gyakran ebédet is biztosítanak a fedélzeten.", "A közeli Chamili-sziget szintén népszerű megálló a búvárok számára."],
      ro: ["Laguna Albastră este cel mai vizitat punct din Parcul Național Akamas.", "Culoarea turcoaz intensă este datorată reflexiei luminii pe fundul alb nisipos.", "Adâncimea medie în interiorul lagunei este de aproximativ 2 până la 4 metri.", "Nu există construcții permanente sau facilități turistice pe malul protejat.", "Ambarcațiunile care pleacă din Latchi oferă adesea prânzuri tradiționale la bord.", "Insula Chamili din apropiere este un loc renumit pentru diversitatea coralilor moi."],
      en: ["The Blue Lagoon is the most frequented natural site within the Akamas National Park.", "The intense turquoise colour is caused by light reflecting off the white sandy floor.", "The average depth within the lagoon ranges between only 2 and 4 metres.", "There are no permanent structures or paved roads within this protected area.", "Excursion boats from Latchi frequently offer on-board barbecues for visitors.", "Nearby Chamili Island is another popular spot for observing Mediterranean marine life."],
      es: ["La Laguna Azul es el lugar más visitado dentro del Parque Nacional de Akamas.", "El agua tiene un tono turquesa profundo debido a la alta reflectividad de la arena blanca.", "La profundidad promedio en la laguna es de solo unos 2 a 4 metros.", "No hay edificios permanentes ni instalaciones sanitarias en este lugar protegido.", "Los barcos de excursión desde Latchi suelen ofrecer barbacoas a bordo para los visitantes.", "Cerca se encuentra la isla de Chamili, que también invita a practicar snorkel."],
      pt: ["A Lagoa Azul é o local mais visitado dentro do Parque Nacional de Akamas.", "A água tem um tom azul-turquesa profundo devido à alta refletividade da areia branca.", "A profundidade média na lagoa é de apenas cerca de 2 a 4 metros.", "Não existem edifícios permanentes ou instalações sanitárias neste local protegido.", "Os barcos de passeio de Latchi oferecem frequentemente churrascos a bordo para os visitantes.", "Perto encontra-se a ilha de Chamili, que também convida à prática de snorkel."],
      fr: ["Le Lagon Bleu est le site le plus visité du parc national d'Akamas.", "L'eau présente un turquoise profond en raison de la forte réflectivité du sable blanc.", "La profondeur moyenne dans le lagon n'est que de 2 à 4 mètres environ.", "Il n'y a pas de bâtiments fixes ni d'installations sanitaires dans ce lieu protégé.", "Les bateaux d'excursion de Latchi proposent souvent des barbecues à bord pour les visiteurs.", "À proximité se trouve l'île de Chamili, qui invite également à la plongée en apnée."],
    }, image: "/poi-images/cy-blue-lagoon.webp",
    facts: {
      de: ["Das Wasser ist so klar, dass man den Meeresboden bis in große Tiefe sieht.", "Die Lagune ist am besten mit Ausflugsbooten vom Hafen Latchi erreichbar.", "Der sandige Untergrund verleiht dem Wasser seine markante helle Farbe.", "Es ist einer der am meisten fotografierten Naturorte auf ganz Zypern."],
      hu: ["A víz olyan tiszta, hogy nagy mélységben is látni lehet a tengerfeneket.", "A lagúna legkönnyebben Latchi kikötőjéből induló hajókkal érhető el.", "A fehér homokos aljzat adja a víz jellegzetes, világítóan kék színét.", "Ez Ciprus egyik legtöbbet fényképezett természeti helyszíne."],
      ro: ["Apa este atât de limpede încât fundul mării este vizibil la mari adâncimi.", "Laguna este accesibilă cel mai ușor cu barca din portul Latchi.", "Fundul mării nisipos îi conferă apei culoarea azurie caracteristică.", "Este unul dintre cele mai fotografiate locuri naturale din întreg Ciprul."],
      en: ["The water is so transparent that the seabed is visible at great depths.", "The lagoon is most easily reached by boat excursions from Latchi harbor.", "The sandy bottom gives the water its distinctively bright turquoise hue.", "It is one of the most photographed natural locations in all of Cyprus."],
      es: [],
      pt: [],
      fr: [],
    },
  },
  {
    id: "CY-001-zenobia",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6558, 34.8986],
    name: { de: "Zenobia Wrack", hu: "Zenobia roncs", ro: "Epava Zenobia", en: "Zenobia Wreck" },
    description: {
      de: "Einer der besten Tauchplätze der Welt, ein gesunkenes Fährschiff vor der Küste von Larnaca.",
      hu: "A világ egyik legjobb merülőhelye, egy elsüllyedt komp Larnaca partjainál.",
      ro: "Unul dintre cele mai bune locuri de scufundări din lume, un feribot scufundat în largul coastei Larnaca.",
      en: "One of the world's top diving sites, a sunken ferry located off the coast of Larnaca.",
      es: "Uno de los mejores lugares de buceo del mundo, un ferry hundido frente a la costa de Lárnaca.",
      pt: "Um dos melhores locais de mergulho do mundo, um ferry afundado ao largo de Lárnaca.",
      fr: "L'un des meilleurs sites de plongée au monde, une épave de ferry au large de Larnaca.",
    },
    facts: {
      de: ["Die Zenobia sank 1980 auf ihrer Jungfernfahrt.", "Das Wrack liegt in einer Tiefe von 16 bis 42 Metern.", "Es wird oft als die 'Titanic des Mittelmeers' bezeichnet."],
      hu: ["A Zenobia 1980-ban süllyedt el első útján.", "A roncs 16 és 42 méter közötti mélységben fekszik.", "Gyakran a 'Földközi-tenger Titanicjaként' emlegetik."],
      ro: ["Zenobia s-a scufundat în 1980 în timpul călătoriei sale inaugurale.", "Epava se află la o adâncime cuprinsă între 16 și 42 de metri.", "Este adesea numită 'Titanicul Mediteranei'."],
      en: ["The Zenobia sank in 1980 on her maiden voyage.", "The wreck lies at a depth of 16 to 42 meters.", "It is often referred to as the 'Titanic of the Mediterranean'."],
      es: ["El Zenobia se hundió en 1980 en su viaje inaugural.", "El pecio se encuentra a una profundidad de 16 a 42 metros.", "A menudo se le llama el 'Titanic del Mediterráneo'."],
      pt: ["O Zenobia afundou-se em 1980 na sua viagem inaugural.", "O naufrágio encontra-se a uma profundidade de 16 a 42 metros.", "É frequentemente chamado o 'Titanic do Mediterrâneo'."],
      fr: ["Le Zenobia a coulé en 1980 lors de son voyage inaugural.", "L'épave repose à une profondeur de 16 à 42 mètres.", "Il est souvent surnommé le 'Titanic de la Méditerranée'."],
    },
    descriptionAdvanced: {
      de: "Das Wrack der Zenobia, eine schwedische Roll-on-Roll-off-Fähre, die im Juni 1980 bei ihrer Jungfernfahrt vor Larnaca sank, gilt heute als einer der zehn besten Tauchplätze weltweit. Das Schiff liegt auf der Backseite in einer Tiefe von etwa 42 Metern auf einem sandigen Meeresboden, wobei die obersten Teile bereits bei 16 Metern erreicht werden können. Da das Sinken aufgrund eines Defekts im Ballastsystem langsam erfolgte und keine Menschenleben forderte, blieb die gesamte Ladung von über 100 Lastwagen und Sattelschleppern an Bord erhalten. Diese bizarren Unterwasserszenen, in denen Lastwagen noch an ihren Ketten hängen, ziehen jährlich Tausende von Sporttauchern an. Das Wrack hat sich im Laufe der Jahrzehnte zu einem künstlichen Riff entwickelt, das eine enorme Vielfalt an Meereslebewesen beherbergt, darunter Zackenbarsche, Barrakudas und Muränen. Für erfahrene Taucher bietet die Zenobia zudem die Möglichkeit, die Ladungsdecks und den Maschinenraum zu erkunden. Die Zenobia ist nicht nur ein Abenteuerspielplatz für Taucher, sondern auch ein wichtiges ökologisches Refugium.",
      hu: "A Zenobia roncsa egy svéd gyártmányú komp, amely 1980 júniusában süllyedt el Larnaca partjainál első útja során, és mára a világ tíz legjobb búvárhelyszínének egyikeként tartják számon. A hajó az oldalára dőlve, körülbelül 42 méteres mélységben fekszik a homokos aljzaton, legmagasabb pontjai pedig már 16 méteres mélységben elérhetők. Mivel a süllyedés a ballasztrendszer hibája miatt lassan következett be, és nem követelt emberéletet, a fedélzeten maradt több mint 100 kamion és teherautó ma is látható. Ez a különleges látvány, ahol a járművek még mindig a láncaikon függnek a víz alatt, évente több ezer búvárt vonz a szigetre. Az évtizedek során a roncs hatalmas mesterséges zátonnyá alakult, amely gazdag tengeri élővilágnak, köztük csoportos sügéreknek és barrakudáknak ad otthont. A tapasztaltabb búvárok számára lehetőség nyílik a rakodóterek, a gépház és a parancsnoki híd felfedezésére is. A Zenobia nem csupán turisztikai látványosság, hanem jelentős ökológiai menedékhely is.",
      ro: "Epava Zenobia, un feribot suedez de tip roll-on/roll-off care s-a scufundat în iunie 1980 în timpul călătoriei sale inaugurale lângă Larnaca, este astăzi considerată unul dintre primele zece locuri de scufundări din lume. Nava se află pe partea stângă la o adâncime de aproximativ 42 de metri pe un fund nisipos, părțile sale superioare fiind accesibile la doar 16 metri adâncime. Deoarece scufundarea cauzată de o defecțiune a sistemului de balast a fost lentă și nu s-au înregistrat victime, întreaga încărcătură de peste 100 de camioane a rămas la bord. Această scenă subacvatică suprarealistă, în care camioanele sunt încă fixate cu lanțuri, atrage anual mii de scafandri sportivi. De-a lungul deceniilor, epava s-a transformat într-un recif artificial imens, adăpostind o diversitate incredibilă de viață marină, inclusiv bibani de mare și baracude. Scafandrii experimentați pot explora punțile de marfă, sala mașinilor și puntea de comandă. Zenobia nu este doar o destinație de aventură, ci și un refugiu ecologic vital în bazinul estic al Mediteranei.",
      en: "The Zenobia wreck, a Swedish-built roll-on/roll-off ferry that sank in June 1980 during her maiden voyage off the coast of Larnaca, is now ranked among the top ten wreck diving sites in the world. The vessel lies on her port side at a maximum depth of 42 meters on a flat sandy seabed, with her upper sections reachable at a depth of just 16 meters. Since the sinking resulted from a ballast system malfunction and occurred slowly without any loss of life, the entire cargo of over 100 trucks and articulated lorries remained on board. This eerie underwater graveyard, where vehicles are still chained to the decks, attracts thousands of divers annually. Over the decades, the wreck has evolved into a massive artificial reef, supporting a rich biodiversity of marine life including groupers, barracudas, and moray eels. For advanced divers, the Zenobia offers extensive penetration opportunities into the cargo decks, engine room, and bridge. It stands as both a major contributor to the local economy and a significant ecological sanctuary.",
      es: "El pecio del Zenobia, un ferry sueco que se hundió en 1980 durante su viaje inaugural, es considerado uno de los diez mejores puntos de buceo del mundo. Reposa sobre su costado a unos 42 metros de profundidad, con las partes más altas alcanzables a los 16 metros. Al hundirse lentamente por un fallo en el sistema de lastre sin pérdida de vidas, conservó su carga de más de 100 camiones. Con el tiempo se ha convertido en un arrecife artificial con una enorme biodiversidad, incluyendo meros y barracudas. Es un destino fascinante tanto para buceadores experimentados como para barcos con fondo de cristal.",
      pt: "O naufrágio do Zenobia, um ferry sueco que se afundou em junho de 1980 na sua viagem inaugural, é hoje considerado um dos dez melhores locais de mergulho do mundo. O navio repousa sobre o seu costado a uma profundidade de cerca de 42 metros, sendo as partes superiores alcançáveis aos 16 metros. Como o afundamento foi lento e sem perda de vidas, toda a carga de mais de 100 camiões permaneceu a bordo. O naufrágio tornou-se um recife artificial que abriga uma enorme diversidade de vida marinha, atraindo milhares de mergulhadores anualmente.",
      fr: "L'épave du Zenobia, un ferry suédois qui a coulé en 1980 lors de son voyage inaugural, est considérée comme l'un des dix meilleurs sites de plongée au monde. Le navire repose sur le flanc à environ 42 mètres de profondeur, ses parties supérieures étant accessibles dès 16 mètres. Coulant lentement sans faire de victimes, il a conservé sa cargaison de plus de 100 camions. L'épave est devenue un récif artificiel abritant une grande biodiversité marine, attirant chaque année des milliers de plongeurs pour explorer ses ponts et sa salle des machines.",
    },
    factsAdvanced: {
      de: ["Die Zenobia sank am 7. Juni 1980 nur etwa 1,5 km vor der Küste Larnacas.", "Das Schiff ist 172 Meter lang und liegt komplett auf der Seite.", "Die Wassertemperaturen liegen zwischen 16°C im Winter und 27°C im Sommer.", "Es befinden sich 108 Lastwagen an Bord, deren Ladung noch teilweise erkennbar ist.", "Das Wrack trägt den Spitznamen 'Titanic des Mittelmeers'.", "Aufgrund der Lage ist das Wrack auch mit Glasbodenbooten von oben sichtbar."],
      hu: ["A Zenobia 1980. június 7-én süllyedt el, mindössze 1,5 km-re Larnaca partjaitól.", "A hajó hossza 172 méter, és teljes egészében az oldalán fekszik.", "A víz hőmérséklete télen 16°C, nyáron pedig akár 27°C is lehet.", "Összesen 108 teherautó maradt a fedélzeten, rakományuk ma is felismerhető.", "A roncsot gyakran emlegetik a 'Földközi-tenger Titanikjaként'.", "Elhelyezkedése miatt a roncs tiszta időben üvegfenekű hajókból is látható."],
      ro: ["Zenobia s-a scufundat pe 7 iunie 1980 la doar 1,5 km de coasta orașului Larnaca.", "Nava are o lungime de 172 de metri și este complet răsturnată pe o parte.", "Temperaturile apei variază între 16°C iarna și 27°C în vârful verii.", "La bord se află 108 camioane, a căror încărcătură este încă parțial vizibilă.", "Epava este supranumită 'Titanicul Mediteranei' datorită dimensiunilor sale.", "Datorită vizibilității bune, epava poate fi observată și din bărci cu fund de sticlă."],
      en: ["The Zenobia sank on June 7, 1980, only 1.5 km off the Larnaca coastline.", "The vessel is 172 metres long and lies completely on its port side.", "Water temperatures range from 16°C in winter to 27°C in late summer.", "There are 108 trucks on board, with their cargoes still partially identifiable.", "The wreck is frequently referred to as the 'Titanic of the Mediterranean'.", "Due to its position, the wreck is visible from the surface using glass-bottom boats."],
      es: ["Se hundió el 7 de junio de 1980 a solo 1,5 km de la costa.", "El barco mide 172 metros de largo y está completamente de lado.", "Las temperaturas del agua oscilan entre 16°C y 27°C.", "Hay 108 camiones a bordo con carga aún visible.", "Lleva el apodo de 'Titanic del Mediterráneo'.", "Es visible desde arriba con barcos de fondo de cristal."],
      pt: ["Afundou-se a 7 de junho de 1980 a apenas 1,5 km da costa.", "O navio tem 172 metros de comprimento e está completamente de lado.", "As temperaturas da água variam entre 16°C no inverno e 27°C no verão.", "Estão 108 camiões a bordo com carga ainda parcialmente reconhecível.", "O naufrágio tem a alcunha de 'Titanic do Mediterrâneo'.", "Devido à sua localização, é visível de cima através de barcos com fundo de vidro."],
      fr: ["Il a coulé le 7 juin 1980 à seulement 1,5 km de la côte.", "Le navire mesure 172 mètres de long et repose sur le flanc.", "La température de l'eau varie entre 16°C et 27°C.", "108 camions sont à bord, avec une cargaison encore visible.", "L'épave porte le surnom de 'Titanic de la Méditerranée'.", "L'épave est visible d'en haut par des bateaux à fond de verre."],
    }, image: "/poi-images/CY-001-zenobia.webp"},
  {
    id: "CY-001-larnaca-fort",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6375, 34.9103],
    name: { de: "Festung von Larnaca", hu: "Larnaca erőd", ro: "Cetatea din Larnaca", en: "Larnaca Castle" },
    description: {
      de: "Eine mittelalterliche Festung am südlichen Ende der Finikoudes-Promenade.",
      hu: "Középkori erőd a Finikoudes sétány déli végén.",
      ro: "O cetate medievală la capătul sudic al promenadei Finikoudes.",
      en: "A medieval castle located at the southern end of the Finikoudes promenade.",
      es: "Una fortaleza medieval en el extremo sur del paseo marítimo Finikoudes.",
      pt: "Uma fortaleza medieval na extremidade sul da marginal Finikoudes.",
      fr: "Une forteresse médiévale à l'extrémité sud de la promenade Finikoudes.",
    },
    facts: {
      de: ["Ursprünglich im 14. Jahrhundert erbaut.", "Diente während der britischen Herrschaft als Gefängnis.", "Beherbergt heute ein kleines mittelalterliches Museum."],
      hu: ["Eredetileg a 14. században épült.", "A brit uralom idején börtönként szolgált.", "Ma egy kis középkori múzeumnak ad otthont."],
      ro: ["Construită inițial în secolul al XIV-lea.", "A servit ca închisoare în timpul stăpânirii britanice.", "Astăzi găzduiește un mic muzeu medieval."],
      en: ["Originally built in the 14th century.", "Served as a prison during British rule.", "Now houses a small medieval museum."],
      es: ["Originalmente construida en el siglo XIV.", "Sirvió como prisión durante el dominio británico.", "Hoy alberga un pequeño museo medieval."],
      pt: ["Originalmente construída no século XIV.", "Serviu como prisão durante o domínio britânico.", "Hoje alberga um pequeno museu medieval."],
      fr: ["Construit à l'origine au XIVe siècle.", "A servi de prison pendant la domination britannique.", "Abrite aujourd'hui un petit musée médiéval."],
    },
    descriptionAdvanced: {
      de: "Das Kastell von Larnaca, am südlichen Ende der Foinikoudes-Promenade gelegen, ist eine bedeutende mittelalterliche Festung, die ursprünglich im 12. Jahrhundert zur Verteidigung des Hafens errichtet wurde. Die heutige Struktur stammt größtenteils aus der Zeit der osmanischen Herrschaft im 17. Jahrhundert, weist jedoch auch deutliche Merkmale venezianischer und britischer Einflüsse auf. Während der britischen Kolonialzeit diente die Burg als Gefängnis und Hinrichtungsstätte, was ihr eine düstere historische Note verleiht. Heute beherbergt das Kastell ein kleines mittelalterliches Museum, das Funde aus den frühchristlichen, byzantinischen und osmanischen Epochen der Region ausstellt. Besucher können die massiven Mauern und Kanonen besichtigen sowie den zentralen Innenhof, der heute oft für kulturelle Veranstaltungen und Konzerte genutzt wird. Von den Wehrgängen der Burg bietet sich ein beeindruckender Blick über den Hafen und das Mittelmeer. Die Festung ist ein Symbol für die strategische Bedeutung Larnacas im Laufe der Jahrhunderte.",
      hu: "A larnacai vár, amely a Foinikoudes sétány déli végén található, egy fontos középkori erődítmény, amelyet eredetileg a 12. században építettek a kikötő védelmére. A ma látható épület nagy része az 1625-ös oszmán újjáépítés eredménye, de az erőd falai velencei és brit építészeti jegyeket is őriznek. A brit gyarmati uralom idején a vár börtönként és kivégzőhelyként szolgált, ami sötét fejezetet jelent az épület történetében. Napjainkban az erőd egy kis középkori múzeumnak ad otthont, ahol a környéken talált kora keresztény, bizánci és oszmán kori leleteket mutatják be. A látogatók bejárhatják a masszív falakat, megtekinthetik a régi ágyúkat és a központi udvart, amely ma gyakran kulturális események és koncertek helyszíne. A vár bástyáiról lenyűgöző kilátás nyílik a tengerre és a kikötőre, bemutatva a város stratégiai jelentőségét az évszázadok során. Az építmény Ciprus történelmi rétegeinek egyik leglátványosabb tanúja.",
      ro: "Castelul din Larnaca, situat la capătul sudic al promenadei Foinikoudes, este o fortăreață medievală importantă, ridicată inițial în secolul al XII-lea pentru apărarea portului. Structura actuală datează în mare parte din perioada otomană, fiind reconstruită în 1625, deși păstrează elemente arhitecturale venețiene și britanice. În timpul administrației coloniale britanice, castelul a fost utilizat ca închisoare și loc de execuție, fapt ce adaugă o notă sumbră istoriei sale. Astăzi, fortul găzduiește un mic muzeu medieval ce expune vestigii din perioadele creștină timpurie, bizantină și otomană descoperite în regiune. Vizitatorii pot explora zidurile masive, platformele pentru tunuri și curtea centrală, care servește în prezent ca scenă pentru evenimente culturale și concerte în aer liber. De pe meterezele castelului se deschide o vedere panoramică superbă asupra portului și a Mării Mediterane. Fortificația rămâne un simbol al importanței strategice a orașului Larnaca.",
      en: "Larnaca Castle, positioned at the southern edge of the Foinikoudes promenade, is a significant medieval fortress originally established in the 12th century to defend the town's harbour. The structure seen today largely reflects Ottoman reconstruction from 1625, though it incorporates distinct architectural elements from the Venetian and British eras. During the British colonial period, the castle served a grim role as a police station, prison, and place of execution until 1948. Nowadays, it houses a small Medieval Museum displaying artefacts from the early Christian, Byzantine, and Ottoman periods of the Larnaca district. Visitors can explore the heavy walls, the battery of cannons, and the central courtyard, which has been repurposed as an open-air theatre for cultural festivals and concerts. The ramparts offer commanding views of the Mediterranean Sea and the modern marina, illustrating the site's enduring strategic value. The castle stands as a testament to the diverse historical layers of Cyprus.",
      es: "El castillo de Lárnaca es una importante fortaleza medieval construida originalmente en el siglo XII para defender el puerto. La estructura actual data principalmente de la ocupación otomana del siglo XVII, aunque muestra influencias venecianas y británicas. Durante la época colonial británica, sirvió como prisión y lugar de ejecución. Hoy alberga un pequeño museo medieval con hallazgos de las épocas paleocristiana, bizantina y otomana. Los visitantes pueden recorrer los muros, ver los cañones y disfrutar de eventos culturales en el patio central, además de obtener vistas impresionantes del puerto.",
      pt: "O castelo de Lárnaca é uma importante fortaleza medieval originalmente construída no século XII para defender o porto. A estrutura atual data principalmente do período otomano no século XVII, mas apresenta características de influências venezianas e britânicas. Durante o período colonial britânico, o castelo serviu como prisão e local de execução. Hoje, alberga um pequeno museu medieval que exibe achados das épocas paleocristã, bizantina e otomana. Os visitantes podem visitar as muralhas maciças e canhões, bem como o pátio central, que é frequentemente utilizado para eventos culturais, oferecendo uma vista impressionante sobre o porto.",
      fr: "Le fort de Larnaca est une importante forteresse médiévale construite à l'origine au XIIe siècle pour défendre le port. La structure actuelle date principalement de l'époque ottomane au XVIIe siècle, mais présente des influences vénitiennes et britanniques. Pendant la période coloniale britannique, le château servit de prison et de lieu d'exécution. Aujourd'hui, il abrite un petit musée médiéval exposant des découvertes des époques paléochrétienne, byzantine et ottomane. Les visiteurs peuvent explorer les remparts et les canons, ainsi que la cour centrale utilisée pour des événements culturels, offrant une vue imprenable sur le port.",
    },
    factsAdvanced: {
      de: ["Die Festung wurde im Jahr 1625 von den Osmanen auf byzantinischen Ruinen errichtet.", "Eine Inschrift über dem Eingang erinnert an die Wiederherstellung durch die Türken.", "Die Briten nutzten die Burg bis 1948 als zentrales Gefängnis der Stadt.", "In der Nordwand der Burg sind venezianische Inschriften und Wappen eingemauert.", "Das Museum im ersten Stock zeigt Funde aus dem antiken Kition.", "Im Sommer finden im Innenhof Aufführungen des Larnaca Summer Festivals statt."],
      hu: ["Az erődöt 1625-ben építették újjá az oszmánok bizánci romokon.", "A bejárat feletti felirat az oszmán helyreállításnak állít emléket.", "A britek 1948-ig a várost központi börtöneként használták az épületet.", "Az északi falba velencei feliratokat és címereket építettek be.", "Az emeleti múzeumban az ókori Kitionból származó leleteket is láthatunk.", "Nyáron az udvar a Larnaca Summer Festival előadásainak ad otthont."],
      ro: ["Fortificația a fost reconstruită de otomani în 1625 pe ruine bizantine.", "O inscripție deasupra porții comemorează restaurarea turcească a fortului.", "Britanicii au utilizat castelul ca închisoare centrală până în anul 1948.", "În zidul nordic sunt încastrate inscripții și blazoane din epoca venețiană.", "Muzeul de la etaj expune obiecte arheologice din anticul oraș Kition.", "Curtea interioară găzduiește spectacole în cadrul Festivalului de Vară din Larnaca."],
      en: ["The fortress was rebuilt by the Ottomans in 1625 on top of Byzantine ruins.", "An inscription above the entrance commemorates the Turkish restoration of the fort.", "The British used the castle as a central prison for the town until 1948.", "Venetian inscriptions and coats of arms are built into the northern wall.", "The museum on the upper floor displays artefacts from ancient Kition.", "The inner courtyard serves as a venue for the Larnaca Summer Festival performances."],
      es: ["La fortaleza fue erigida en 1625 por los otomanos sobre ruinas bizantinas.", "Una inscripción sobre la entrada recuerda su restauración por los turcos.", "Los británicos usaron el castillo como prisión central hasta 1948.", "Inscripciones y escudos venecianos están incrustados en el muro norte.", "El museo muestra hallazgos de la antigua Kition.", "En verano se celebran espectáculos del Festival de Verano de Lárnaca."],
      pt: ["A fortaleza foi erguida em 1625 pelos otomanos sobre ruínas bizantinas.", "Uma inscrição sobre a entrada recorda a restauração pelos turcos.", "Os britânicos utilizaram o castelo como prisão central da cidade até 1948.", "Inscrições e brasões venezianos estão embutidos na muralha norte.", "O museu no primeiro andar mostra achados da antiga Kition.", "No verão, o pátio acolhe espetáculos do Festival de Verão de Lárnaca."],
      fr: ["La forteresse fut érigée en 1625 par les Ottomans sur des ruines byzantines.", "Une inscription au-dessus de l'entrée rappelle la restauration par les Turcs.", "Les Britanniques utilisèrent le château comme prison centrale jusqu'en 1948.", "Des inscriptions et blasons vénitiens sont encastrés dans le mur nord.", "Le musée expose des découvertes de l'ancienne Kition.", "En été, la cour accueille des spectacles du festival d'été de Larnaca."],
    }, image: "/poi-images/CY-001-larnaca-fort.webp"},
  {
    id: "CY-002-varosha",
    type: "landmark",
    parent: "CY-002",
    coords: [33.9553, 35.1097],
    name: { de: "Varosha (Geisterstadt)", hu: "Varoszi (Szellemváros)", ro: "Varosha (Orașul Fantomă)", en: "Varosha (Ghost Town)" },
    description: {
      de: "Ein einst blühendes Tourismusviertel von Famagusta, das seit 1974 verlassen ist.",
      hu: "Famagusta egykor virágzó turisztikai negyede, amely 1974 óta elhagyatott.",
      ro: "Un cartier turistic odinioară înfloritor din Famagusta, abandonat din 1974.",
      en: "A once-thriving tourist district of Famagusta, abandoned since 1974.",
      es: "Un próspero distrito turístico de Famagusta que está abandonado desde 1974.",
      pt: "Um antigo distrito turístico próspero de Famagusta, abandonado desde 1974.",
      fr: "Un quartier touristique autrefois prospère de Famagouste, abandonné depuis 1974.",
    },
    facts: {
      de: ["Vor 1974 war es eines der beliebtesten Urlaubsziele der Welt.", "Es blieb jahrzehntelang für die Öffentlichkeit gesperrt.", "Seit 2020 sind Teile der Stadt wieder für Besucher zugänglich."],
      hu: ["1974 előtt a világ egyik legnépszerűbb üdülőhelye volt.", "Évtizedekig zárva volt a nyilvánosság előtt.", "2020 óta a város egyes részei újra látogathatók."],
      ro: ["Înainte de 1974, a fost una dintre cele mai populare destinații de vacanță din lume.", "A rămas închis publicului timp de decenii.", "Din 2020, părți ale orașului au fost redeschise vizitatorilor."],
      en: ["Before 1974, it was one of the most popular holiday destinations in the world.", "It remained closed to the public for decades.", "Since 2020, parts of the city have been reopened to visitors."],
      es: ["Antes de 1974 era uno de los destinos vacacionales más populares del mundo.", "Permaneció cerrada al público durante décadas.", "Desde 2020, partes de la ciudad son accesibles de nuevo."],
      pt: ["Antes de 1974, era um dos destinos de férias mais populares do mundo.", "Permaneceu fechada ao público durante décadas.", "Desde 2020, partes da cidade estão novamente acessíveis."],
      fr: ["Avant 1974, c'était l'une des destinations de vacances les plus prisées au monde.", "Le quartier est resté fermé au public pendant des décennies.", "Depuis 2020, des parties de la ville sont à nouveau accessibles."],
    },
    descriptionAdvanced: {
      de: "Varosha, einst das luxuriöse Viertel der Stadt Famagusta und ein weltberühmtes Touristenziel der 1970er Jahre, ist heute eine der bekanntesten 'Geisterstädte' der Welt. Nach der türkischen Invasion Zyperns im Jahr 1974 wurde das Viertel eingezäunt und zur militärischen Sperrzone erklärt, was die Bewohner zur Flucht zwang und das Gebiet für fast fünf Jahrzehnte unbewohnt ließ. Die einstigen Nobelhotels, Villen und Einkaufsstraßen sind seither dem Verfall und der Natur preisgegeben, was eine surreale Kulisse aus bröckelnden Fassaden und überwucherten Ruinen geschaffen hat. Lange Zeit war der Zugang streng verboten, doch seit Ende 2020 wurden Teile der Stadt für Besucher und Touristen geöffnet, was international für Kontroversen sorgte. Die Öffnung ermöglicht es heute, durch die verlassenen Straßen zu spazieren und die Überreste eines einst blühenden Lebens zu sehen, das abrupt unterbrochen wurde. Varosha bleibt ein tiefgreifendes Symbol für den Zypernkonflikt und die ungelösten politischen Spannungen auf der Insel.",
      hu: "Varosha, amely egykor Famagusta városának luxusnegyede és a 70-es évek világhírű turisztikai célpontja volt, ma a világ egyik legismertebb 'szellemvárosa'. Az 1974-es török inváziót követően a negyedet fallal vették körül és katonai övezetté nyilvánították, ami menekülésre kényszerítette a lakosokat, és közel öt évtizedre lakatlanná tette a területet. Az egykori elegáns szállodák, villák és bevásárlóutcák azóta az enyészeté lettek, a természet pedig lassan visszahódította a betonépületeket, szürreális látványt nyújtva. Sokáig szigorúan tilos volt a belépés, de 2020 végétől a város bizonyos részeit megnyitották a turisták előtt, ami nemzetközi szinten is nagy port kavart. A látogatók ma végigsétálhatnak az elhagyatott utcákon, megtekintve az egykor virágzó élet maradványait, amely hirtelen szakadt félbe. Varosha továbbra is a ciprusi konfliktus és a sziget megoldatlan politikai feszültségeinek fájdalmas szimbóluma.",
      ro: "Varosha, odinioară cartierul de lux al orașului Famagusta și o destinație turistică de renume mondial în anii '70, este astăzi unul dintre cele mai faimoase 'orașe fantomă' din lume. În urma invaziei turcești din 1974, zona a fost împrejmuită și declarată zonă militară închisă, forțând locuitorii să fugă și lăsând regiunea nelocuită timp de aproape cinci decenii. Hotelurile de lux, vilele și străzile comerciale de altădată au fost lăsate în paragină, natura reintrând treptat în posesia structurilor de beton, creând un peisaj suprarealist de ruine degradate. Mult timp accesul a fost strict interzis, însă începând cu finele anului 2020, porțiuni din oraș au fost deschise pentru public, fapt ce a generat controverse internaționale majore. Vizitatorii pot acum să se plimbe pe străzile pustii și să observe resturile unei vieți prospere care a fost întreruptă brusc de conflict. Varosha rămâne un simbol profund al divizării Ciprului și al tensiunilor politice nerezolvate.",
      en: "Varosha, once the glamorous quarter of Famagusta and a world-class tourist destination in the early 1970s, is now one of the most famous 'ghost towns' on the planet. Following the Turkish invasion of Cyprus in 1974, the district was fenced off and declared a restricted military zone, forcing its Greek Cypriot inhabitants to flee and leaving the area uninhabited for nearly five decades. The high-rise hotels, luxury villas, and commercial boulevards have since been reclaimed by nature and decay, creating a surreal landscape of crumbling facades and overgrown vegetation. For years, access was strictly forbidden, but since late 2020, parts of the city have been controversially opened to visitors and tourists. This opening allows people to walk or cycle through the abandoned streets, witnessing the frozen remnants of a vibrant lifestyle that was abruptly halted. Varosha remains a poignant and controversial symbol of the Cyprus problem and the ongoing division of the island.",
      es: "Varosha, antaño el destino de lujo de los años 70, es hoy una de las ciudades fantasma más famosas del mundo. Tras la invasión turca de 1974, fue cercada como zona militar, quedando deshabitada por décadas. Hoteles de lujo y villas se han deteriorado ante el paso de la naturaleza. Desde finales de 2020, se han abierto partes de la ciudad a visitantes, lo que generó controversia internacional. Caminar por sus calles ofrece una visión surrealista de una vida próspera interrumpida abruptamente, siendo un símbolo del conflicto de Chipre.",
      pt: "Varosha, outrora o bairro luxuoso de Famagusta e um destino turístico mundialmente famoso na década de 1970, é hoje uma das 'cidades fantasma' mais conhecidas do mundo. Após a invasão turca de 1974, a área foi vedada e declarada zona militar, permanecendo desabitada por quase cinco décadas. Os hotéis de luxo e ruas comerciais estão agora entregues ao abandono e à natureza. Desde o final de 2020, partes da cidade foram abertas a visitantes, tornando-se um símbolo profundo do conflito cipriota.",
      fr: "Varosha, autrefois quartier de luxe de Famagouste et destination de renommée mondiale dans les années 1970, est aujourd'hui l'une des 'villes fantômes' les plus célèbres au monde. Après l'invasion turque de 1974, le quartier fut clôturé et déclaré zone militaire interdite, restant inhabité pendant près de cinq décennies. Les hôtels de luxe et villas sont depuis lors livrés à la ruine et à la nature. Depuis fin 2020, des parties de la ville sont ouvertes aux touristes, restant un symbole poignant du conflit chypriote.",
    },
    factsAdvanced: {
      de: ["Vor 1974 war Varosha das wichtigste Tourismuszentrum Zyperns.", "Berühmtheiten wie Elizabeth Taylor und Richard Burton verbrachten hier ihren Urlaub.", "Die UN-Resolution 550 fordert die Übergabe des Gebiets an die Vereinten Nationen.", "Seit Oktober 2020 ist die Demokratias-Avenue für Besucher teilweise zugänglich.", "Die Gebäude sind aufgrund der fehlenden Instandhaltung teilweise einsturzgefährdet.", "Es gibt geführte Fahrradtouren durch die freigegebenen Zonen der Geisterstadt."],
      hu: ["1974 előtt Varosha volt Ciprus legfontosabb turisztikai központja.", "Olyan hírességek nyaraltak itt, mint Elizabeth Taylor és Richard Burton.", "Az ENSZ 550-es határozata a terület ENSZ-irányítás alá helyezését kéri.", "2020 októbere óta a Demokratias sugárút egy része nyitva áll a látogatók előtt.", "Az épületek a karbantartás hiánya miatt helyenként életveszélyes állapotban vannak.", "A megnyitott zónákban vezetett kerékpártúrákon is részt vehetnek a turisták."],
      ro: ["Înainte de 1974, Varosha era cel mai important centru turistic din Cipru.", "Vedete precum Elizabeth Taylor și Richard Burton obișnuiau să își petreacă vacanțele aici.", "Rezoluția ONU 550 solicită transferul zonei sub administrarea Națiunilor Unite.", "Din octombrie 2020, bulevardul Demokratias a fost parțial redeschis vizitatorilor.", "Structurile clădirilor sunt grav afectate de lipsa mentenanței, fiind instabile.", "Sunt disponibile tururi cu bicicleta prin zonele permise ale orașului părăsit."],
      en: ["Before 1974, Varosha was the most important tourism hub in Cyprus.", "Celebrities like Elizabeth Taylor and Richard Burton used to holiday here.", "UN Resolution 550 calls for the area to be placed under UN administration.", "Since October 2020, Demokratias Avenue has been partially reopened to visitors.", "The buildings are in a state of advanced decay and many are structurally unsound.", "Guided bicycle tours are available for tourists in the newly opened zones."],
      es: ["Fue el centro turístico más importante de Chipre.", "Famosos como Elizabeth Taylor veranearon aquí.", "La resolución 550 de la ONU pide su entrega a Naciones Unidas.", "La avenida Demokratias es parcialmente accesible desde 2020.", "Los edificios están en riesgo de derrumbe.", "Hay tours guiados en bicicleta por las zonas abiertas."],
      pt: ["Antes de 1974, Varosha era o centro turístico mais importante de Chipre.", "Celebridades como Elizabeth Taylor e Richard Burton passavam férias aqui.", "A resolução 550 da ONU exige a entrega da área às Nações Unidas.", "Desde outubro de 2020, a Avenida Demokratias está parcialmente acessível.", "Os edifícios estão em risco de colapso devido à falta de manutenção.", "Existem passeios de bicicleta guiados pelas zonas abertas da cidade fantasma."],
      fr: ["Varosha était le principal centre touristique de Chypre avant 1974.", "Des célébrités comme Elizabeth Taylor y passaient leurs vacances.", "La résolution 550 de l'ONU demande la remise de la zone aux Nations Unies.", "L'avenue Demokratias est partiellement accessible depuis octobre 2020.", "Les bâtiments menacent ruine en raison du manque d'entretien.", "Des visites guidées à vélo sont organisées dans les zones ouvertes."],
    }, image: "/poi-images/CY-002-varosha.webp"},
  {
    id: "CY-002-fig-tree-bay", "sights": {"de": [{"name": "Nissia Bay Beach", "text": "In der direkten Nachbarschaft zur berühmten Fig Tree Bay entfaltet der Nissia Bay Beach seinen ganz eigenen, ruhigen Charme. Dieser malerische Strandabschnitt ist prädestiniert für ausgedehnte Schwimmrunden und erholsames Sonnenbaden am Mittelmeer. Abseits der großen Menschenmengen kann man hier das sanfte Rauschen des Wassers genießen. Ein Besuch am frühen Vormittag sichert die besten Plätze im Sand.", "category": "recreational", "coords": [34.066714, 34.999617]}, {"name": "Fig Tree Bay", "text": "Bekannter Strand mit Feigenbäumen.", "category": "recreational", "coords": [34.05871, 35.012827]}, {"name": "Paralia Vyzakia", "text": "Παραλία Βυζακιά ist ein Strand bei der Fig Tree Bay.", "category": "recreational", "coords": [34.063173, 35.003375]}, {"name": "Glifades (Mimosa Beach)", "text": "Der zauberhafte Strand Glifades, auch als Mimosa Beach bekannt, schmiegt sich an die Küste in der Nähe der Fig Tree Bay. Besucher erwartet hier eine idyllische Szenerie, die zum entspannten Schwimmen und Verweilen am Meer einlädt. Die Atmosphäre ist angenehm unaufgeregt und zieht vor allem Naturliebhaber und Ruhesuchende an. Wer Erholung pur sucht, sollte genügend Zeit für einen langen Aufenthalt einplanen.", "category": "recreational", "coords": [34.068915, 34.996546]}], "hu": [{"name": "Nissia Bay Beach", "text": "A híres Fig Tree Bay közvetlen szomszédságában a Nissia Bay Beach egyedi, csendes varázsával hódít. Ez a festői strandszakasz kifejezetten alkalmas hosszas úszásokra és pihentető napozásra a Földközi-tenger partján. A nagy tömegektől távol itt zavartalanul élvezhetjük a víz lágy csobogását. Kora délelőtti érkezéssel biztosíthatjuk a legjobb helyeket a homokban.", "category": "recreational", "coords": [34.066714, 34.999617]}, {"name": "Fig Tree Bay", "text": "Népszerű strand fügefákkal.", "category": "recreational", "coords": [34.05871, 35.012827]}, {"name": "Paralia Vyzakia", "text": "A Παραλία Βυζακιά egy strand a Fig Tree Bay közelében.", "category": "recreational", "coords": [34.063173, 35.003375]}, {"name": "Glifades (Mimosa Beach)", "text": "A varázslatos Glifades strand, mely Mimosa Beach néven is ismert, a Fig Tree Bay közelében simul a parthoz. A látogatókat idilli környezet várja, amely nyugodt úszásra és a tenger melletti időtöltésre ösztönöz. A hangulat kellemesen csendes, ami elsősorban a természetkedvelőket és a pihenni vágyókat vonzza. Aki tiszta feltöltődésre vágyik, tervezzen be elegendő időt egy hosszú látogatásra.", "category": "recreational", "coords": [34.068915, 34.996546]}], "ro": [{"name": "Nissia Bay Beach", "text": "În imediata vecinătate a celebrei Fig Tree Bay, Nissia Bay Beach își dezvăluie propriul farmec liniștit. Această porțiune pitorească de plajă este ideală pentru sesiuni lungi de înot și plajă relaxantă la Marea Mediterană. Departe de mulțimile mari, te poți bucura aici de sunetul blând al apei. O vizită la mijlocul dimineții asigură cele mai bune locuri pe nisip.", "category": "recreational", "coords": [34.066714, 34.999617]}, {"name": "Fig Tree Bay", "text": "Plajă populară cu smochini.", "category": "recreational", "coords": [34.05871, 35.012827]}, {"name": "Paralia Vyzakia", "text": "Παραλία Βυζακιά este o plajă lângă Fig Tree Bay.", "category": "recreational", "coords": [34.063173, 35.003375]}, {"name": "Glifades (Mimosa Beach)", "text": "Plaja fermecătoare Glifades, cunoscută și sub numele de Mimosa Beach, se cuibărește pe coasta din apropiere de Fig Tree Bay. Oaspeții sunt așteptați de un peisaj idilic, care îi invită la înot relaxant și la zăbovire la malul mării. Atmosfera este plăcut de calmă și atrage în special iubitorii de natură și pe cei care caută liniște. Oricine caută relaxare pură ar trebui să rezerve suficient timp pentru o ședere lungă.", "category": "recreational", "coords": [34.068915, 34.996546]}], "en": [{"name": "Nissia Bay Beach", "text": "In the immediate vicinity of the famous Fig Tree Bay, Nissia Bay Beach unfolds its very own quiet charm. This picturesque stretch of beach is highly suited for extended swimming sessions and relaxing sunbathing by the Mediterranean. Away from the larger crowds, visitors can peacefully enjoy the gentle sound of the water. A mid-morning visit typically secures the best spots on the sand.", "category": "recreational", "coords": [34.066714, 34.999617]}, {"name": "Fig Tree Bay", "text": "Popular beach known for fig trees.", "category": "recreational", "coords": [34.05871, 35.012827]}, {"name": "Paralia Vyzakia", "text": "Παραλία Βυζακιά is a beach near Fig Tree Bay.", "category": "recreational", "coords": [34.063173, 35.003375]}, {"name": "Glifades (Mimosa Beach)", "text": "The enchanting Glifades beach, also known as Mimosa Beach, nestles along the coast near Fig Tree Bay. Visitors are greeted by an idyllic scene that readily invites them for relaxing swims and seaside lingering. The atmosphere is pleasantly calm, primarily attracting nature lovers and those seeking peace. Anyone looking for pure relaxation should allocate plenty of time for a lengthy stay.", "category": "recreational", "coords": [34.068915, 34.996546]}]},
    type: "landmark",
    parent: "CY-002",
    coords: [34.0583, 35.0125],
    name: { de: "Feigenbaumbucht", hu: "Fügefa-öböl", ro: "Fig Tree Bay", en: "Fig Tree Bay" },
    description: {
      de: "Ein beliebter Sandstrand in Protaras, bekannt für sein kristallklares Wasser.",
      hu: "Népszerű homokos strand Protarasban, kristálytiszta vizéről ismert.",
      ro: "O plajă populară cu nisip în Protaras, cunoscută pentru apele sale cristaline.",
      en: "A popular sandy beach in Protaras, known for its crystal-clear waters.",
      es: "Una popular playa de arena en Protaras, conocida por sus aguas cristalinas.",
      pt: "Uma praia de areia popular em Protaras, conhecida pelas suas águas cristalinas.",
      fr: "Une plage de sable populaire à Protaras, connue pour ses eaux cristallines.",
    },
    facts: {
      de: ["Benannt nach einem einzelnen Feigenbaum, der dort seit dem 17. Jahrhundert stehen soll.", "Wird oft als einer der besten Strände Europas gewählt.", "Verfügt über eine kleine Insel, die man schwimmend erreichen kann."],
      hu: ["Egyetlen fügefáról kapta a nevét, amely a 17. század óta áll ott.", "Gyakran választják Európa egyik legjobb strandjának.", "Van egy kis szigete, amely úszva is elérhető."],
      ro: ["Numită după un singur smochin care ar fi stat acolo încă din secolul al XVII-lea.", "Este adesea votată printre cele mai bune plaje din Europa.", "Are o mică insulă care poate fi accesată prin înot."],
      en: ["Named after a single fig tree that has supposedly stood there since the 17th century.", "Often voted among the best beaches in Europe.", "Features a small islet that can be reached by swimming."],
      es: ["Llamada así por una higuera que se dice está allí desde el siglo XVII.", "Elegida a menudo como una de las mejores playas de Europa.", "Cuenta con una pequeña isla a la que se puede llegar nadando."],
      pt: ["Nomeada devido a uma figueira que dizem estar lá desde o século XVII.", "Frequentemente eleita como uma das melhores praias da Europa.", "Possui uma pequena ilha que se pode alcançar a nado."],
      fr: ["Nommée d'après un figuier qui s'y trouverait depuis le XVIIe siècle.", "Souvent élue parmi les meilleures plages d'Europe.", "Possède une petite île accessible à la nage."],
    },
    descriptionAdvanced: {
      de: "Fig Tree Bay in Protaras ist einer der populärsten und am besten bewerteten Strände Zyperns, bekannt für seinen feinen, goldenen Sand und das kristallklare, seichte Wasser. Seinen Namen verdankt die Bucht einem einsamen Feigenbaum, der dort seit dem 17. Jahrhundert stehen soll und noch immer die Küste ziert. Ein besonderes Merkmal ist die kleine, unbewohnte Felseninsel, die etwa 100 Meter vom Ufer entfernt liegt und von Schwimmern leicht erreicht werden kann; sie dient als natürlicher Wellenbrecher und Schnorchelplatz. Der Strand ist mit der Blauen Flagge ausgezeichnet, was für seine hohe Wasserqualität und erstklassige Infrastruktur spricht, die von Wassersportmöglichkeiten bis hin zu modernen Liegeeinrichtungen reicht. Während der Sommermonate ist die Bucht ein lebendiger Anziehungspunkt für Familien und internationale Touristen gleichermaßen. Östlich des Strandes befinden sich zudem Überreste antiker griechischer Gräber, die dem Ort eine historische Dimension verleihen. Fig Tree Bay kombiniert natürliche Schönheit mit modernem Komfort.",
      hu: "A Protarasban található Fügefa-öböl (Fig Tree Bay) Ciprus egyik legnépszerűbb és legmagasabbra értékelt strandja, amely finom aranyló homokjáról és kristálytiszta, sekély vizéről híres. Nevét egy magányos fügefáról kapta, amely a hagyomány szerint a 17. század óta áll a parton, és ma is az öböl jelképe. A strand egyik különlegessége a parttól körülbelül 100 méterre fekvő apró, lakatlan sziklasziget, amely könnyen elérhető az úszók számára, és kiváló helyszínt biztosít a búvárkodáshoz. A strand Kék Zászló minősítéssel rendelkezik, ami garantálja a kiváló vízminőséget és a fejlett szolgáltatásokat. A nyári hónapokban az öböl nyüzsgő központtá válik, amely családok és külföldi turisták tömegeit vonzza. A part keleti részén ókori görög sírok maradványai is megtalálhatók, amelyek történelmi mélységet adnak a festői tájnak. A Fügefa-öböl a természetes szépség és a modern kényelem tökéletes ötvözete, a sziget turizmusának egyik ékköve.",
      ro: "Golful Smochinului (Fig Tree Bay) din Protaras este una dintre cele mai populare și apreciate plaje din Cipru, faimoasă pentru nisipul său auriu fin și apele sale cristaline. Numele golfului provine de la un smochin singuratic, despre care se spune că a fost plantat în secolul al XVII-lea și care încă străjuiește țărmul. O caracteristică distinctivă este mica insulă stâncoasă nelocuită, situată la aproximativ 100 de metri de mal, la care se poate ajunge ușor înot; aceasta servește drept dig natural și loc excelent pentru snorkeling. Plaja deține certificarea 'Blue Flag', atestând calitatea superioară a apei și infrastructura modernă, care include numeroase facilități pentru sporturi nautice. În lunile de vară, golful devine un punct de atracție vibrant pentru familii și turiști internaționali. În partea de est a plajei pot fi observate vestigii ale unor morminte grecești antice, oferind locului o dimensiune istorică fascinantă. Fig Tree Bay îmbină frumusețea naturală cu confortul turistic.",
      en: "Fig Tree Bay in Protaras is consistently ranked as one of the best beaches in Europe, renowned for its fine golden sand and crystal-clear, shallow waters. Its name is derived from a solitary fig tree that has stood near the shore since the 17th century and continues to be a landmark for the bay. A defining feature is the small, uninhabited islet located about 100 meters from the coast, which is easily accessible to swimmers and offers excellent opportunities for snorkeling and underwater exploration. The beach proudly flies the Blue Flag, signifying its high water quality and superior facilities, ranging from varied water sports to accessible lounging areas. During the peak summer season, the bay is a bustling destination for both local families and international travellers. Just to the east of the sandy area, ancient Greek tombs have been excavated, adding a layer of historical significance to this picturesque spot. Fig Tree Bay remains a flagship of Cypriot tourism.",
      es: "Fig Tree Bay en Protaras es una de las playas mejor valoradas de Chipre, famosa por su arena dorada y aguas poco profundas. Debe su nombre a una higuera solitaria que se dice está allí desde el siglo XVII. Un rasgo distintivo es el pequeño islote rocoso a 100 metros de la costa, ideal para nadadores y amantes del esnórquel. Galardonada con la Bandera Azul, ofrece una excelente infraestructura y deportes acuáticos. Cerca se encuentran restos de tumbas griegas antiguas que añaden una dimensión histórica a este paraíso natural.",
      pt: "Fig Tree Bay, em Protaras, é uma das praias mais populares e bem avaliadas de Chipre, conhecida pela sua areia dourada e águas rasas cristalinas. Deve o seu nome a uma figueira solitária que dizem estar lá desde o século XVII. Uma característica especial é a pequena ilha rochosa a 100 metros da costa, facilmente acessível a nado e ideal para snorkeling. Galardoada com a Bandeira Azul, combina beleza natural com infraestruturas modernas e vestígios de túmulos gregos antigos nas proximidades.",
      fr: "Fig Tree Bay à Protaras est l'une des plages les plus populaires de Chypre, célèbre pour son sable doré et ses eaux peu profondes. Elle doit son nom à un figuier solitaire qui s'y trouverait depuis le XVIIe siècle. Un îlot rocheux situé à 100 mètres de la rive sert de brise-lames naturel et de site de snorkeling. Pavillon Bleu pour sa qualité, la plage offre d'excellentes infrastructures. Des vestiges de tombes grecques antiques à proximité ajoutent une dimension historique à ce lieu de détente moderne.",
    },
    factsAdvanced: {
      de: ["Der Strand wurde mehrfach unter die Top 10 Strände in Europa gewählt.", "Der namensgebende Feigenbaum wurde angeblich im Jahr 1640 gepflanzt.", "Die kleine Insel vor der Küste schützt die Bucht vor starken Wellen.", "Das Wasser bleibt über eine weite Strecke sehr flach, ideal für Kinder.", "In der Nähe befinden sich die Ruinen hellenistischer Felsengräber.", "Ein moderner Holzsteg verbindet den Strand mit anderen Buchten in Protaras."],
      hu: ["A strandot többször is Európa 10 legjobb tengerpartja közé választották.", "A névadó fügefát állítólag 1640-ben ültették a part közelében.", "A part menti kis sziget megvédi az öblöt az erős hullámzástól.", "A víz hosszú szakaszon sekély marad, ami ideális kisgyermekes családoknak.", "A közelben hellenisztikus kori sziklasírok romjai találhatók.", "Egy modern fa sétány köti össze a strandot Protaras többi öblével."],
      ro: ["Plaja a fost votată de mai multe ori în top 10 cele mai bune plaje din Europa.", "Smochinul care dă numele golfului ar fi fost plantat în anul 1640.", "Mica insulă din larg protejează golful de valurile puternice ale mării.", "Apa rămâne foarte mică pe o distanță mare, fiind ideală pentru copii.", "În apropiere se află ruinele unor morminte rupestre din perioada elenistică.", "O pasarelă modernă din lemn leagă plaja de alte golfuri din stațiunea Protaras."],
      en: ["The beach has been repeatedly voted among the top 10 beaches in Europe.", "The eponymous fig tree was allegedly planted in the year 1640.", "The small islet offshore protects the bay from strong waves and currents.", "The water remains very shallow for a long distance, making it ideal for children.", "Nearby ruins of Hellenistic rock tombs are accessible to visitors.", "A modern wooden boardwalk connects the beach with other bays in Protaras."],
      es: ["Elegida varias veces entre las 10 mejores playas de Europa.", "La higuera original fue supuestamente plantada en 1640.", "La isla protege la bahía de las olas fuertes.", "El agua permanece poco profunda por un largo tramo.", "Cerca hay ruinas de tumbas helenísticas.", "Un paseo de madera conecta la playa con otras calas."],
      pt: ["A praia foi eleita várias vezes entre as 10 melhores praias da Europa.", "A figueira que dá o nome foi alegadamente plantada em 1640.", "A pequena ilha ao largo protege a baía de ondas fortes.", "A água permanece muito rasa por uma longa distância, ideal para crianças.", "Nas proximidades encontram-se ruínas de túmulos rochosos helenísticos.", "Um passadiço moderno liga a praia a outras baías em Protaras."],
      fr: ["La plage a été classée plusieurs fois dans le top 10 européen.", "Le figuier éponyme aurait été planté en 1640.", "L'îlot protège la baie des fortes vagues.", "L'eau reste peu profonde sur une longue distance.", "Des ruines de tombes hellénistiques se trouvent à proximité.", "Une passerelle en bois relie la plage à d'autres criques."],
    }, image: "/poi-images/CY-002-fig-tree-bay.webp"},
  {
    id: "CY-003-cyprus-museum",
    type: "landmark",
    parent: "CY-003",
    coords: [33.3553, 35.1717],
    name: { de: "Zypern-Museum", hu: "Ciprusi Múzeum", ro: "Muzeul Ciprului", en: "Cyprus Museum" },
    description: {
      de: "Das älteste und größte archäologische Museum Zyperns in Nicosia.",
      hu: "Ciprus legrégebbi és legnagyobb régészeti múzeuma Nicosiában.",
      ro: "Cel mai vechi și mai mare muzeu arheologic din Cipru, în Nicosia.",
      en: "The oldest and largest archaeological museum in Cyprus, in Nicosia.",
      es: "El museo arqueológico más antiguo y grande de Chipre, situado en Nicosia.",
      pt: "O museu arqueológico mais antigo e maior de Chipre, em Nicósia.",
      fr: "Le plus ancien et le plus grand musée archéologique de Chypre, à Nicosie.",
    },
    facts: {
      de: ["Beherbergt Funde von der Jungsteinzeit bis zur byzantinischen Zeit.", "Gegründet wurde es im Jahr 1882.", "Die berühmte Statue der Aphrodite von Soli ist hier ausgestellt."],
      hu: ["A neolitikumtól a bizánci korig őriz leleteket.", "1882-ben alapították.", "Itt látható a híres szoli Aphrodité-szobor."],
      ro: ["Găzduiește descoperiri din epoca neolitică până în perioada bizantină.", "A fost fondat în 1882.", "Celebra statuie a Afroditei din Soli este expusă aici."],
      en: ["It houses finds from the Neolithic age to the Byzantine period.", "It was founded in 1882.", "The famous statue of Aphrodite of Soli is exhibited here."],
      es: ["Alberga hallazgos desde el Neolítico hasta la era bizantina.", "Fue fundado en el año 1882.", "La famosa estatua de Afrodita de Soli se exhibe aquí."],
      pt: ["Abriga achados desde o Neolítico até ao período bizantino.", "Foi fundado no ano de 1882.", "A famosa estátua de Afrodite de Soli está aqui exposta."],
      fr: ["Abrite des découvertes allant du Néolithique à l'époque byzantine.", "Il a été fondé en 1882.", "La célèbre statue d'Aphrodite de Soli y est exposée."],
    },
    descriptionAdvanced: {
      de: "Das Zypern-Museum in Nikosia, gegründet im Jahr 1882, ist das größte und älteste archäologische Museum der Insel und beherbergt die weltweit bedeutendste Sammlung zypriotischer Antiquitäten. Das heutige Hauptgebäude wurde während der britischen Herrschaft zu Ehren von Königin Victoria erbaut und im Laufe der Jahre mehrfach erweitert, um die ständig wachsende Zahl an Fundstücken aufzunehmen. Die Exponate umfassen eine Zeitspanne von der Jungsteinzeit bis zur frühen byzantinischen Periode und bieten einen umfassenden Überblick über die Entwicklung der Zivilisation auf der Insel. Zu den herausragenden Schätzen gehören die einzigartigen Terrakotta-Figuren aus Ayia Irini, die berühmte Statue der Aphrodite von Soli und eine beeindruckende Sammlung von Bronzewerkzeugen. Die chronologisch geordneten Galerien führen den Besucher durch die bewegte Geschichte Zyperns als Schnittpunkt der Kulturen im östlichen Mittelmeer. Das Museum dient nicht nur als kulturelles Schaufenster, sondern ist auch ein wichtiges Zentrum für archäologische Forschung.",
      hu: "A nicosiai Ciprusi Múzeum, amelyet 1882-ben alapítottak, a sziget legnagyobb és legrégebbi régészeti múzeuma, amely a világ legjelentősebb ciprusi antikvitás-gyűjteményének ad otthont. A jelenlegi épületet a brit fennhatóság idején emelték Viktória királynő tiszteletére, és az évek során többször bővítették, hogy helyet biztosítsanak a folyamatosan gazdagodó leletanyagnak. A kiállítások az újkőkorszaktól a kora bizánci korszakig terjedő időszakot ölelik fel, átfogó képet nyújtva a szigeten kialakult civilizációk fejlődéséről. A legfontosabb kincsek közé tartoznak az Ayia Irini-ből származó egyedülálló terracotta szobrok, a soli-i Aphrodité-szobor, valamint a bronzkori eszközök lenyűgöző gyűjteménye. A kronológiai sorrendben felépített tárlatok végigvezetik a látogatót Ciprus viharos történelmén, bemutatva a sziget szerepét a kulturális találkozási pontként. A múzeum nemcsak kulturális bemutatóhely, hanem a régészeti kutatás nemzetközileg elismert központja is.",
      ro: "Muzeul Ciprului din Nicosia, fondat în anul 1882, este cel mai mare și cel mai vechi muzeu arheologic de pe insulă, adăpostind cea mai importantă colecție de antichități cipriote din lume. Clădirea principală actuală a fost construită în timpul administrației britanice în onoarea Reginei Victoria și a fost extinsă de mai multe ori pentru a găzdui numărul tot mai mare de artefacte descoperite. Expozițiile acoperă o perioadă vastă, de la neolitic până la epoca bizantină timpurie, oferind o perspectivă cuprinzătoare asupra evoluției civilizației pe insulă. Printre cele mai valoroase comori se numără figurinele unice din teracotă de la Ayia Irini, celebra statuie a Afroditei din Soli și o colecție impresionantă de obiecte din bronz. Galeriile organizate cronologic poartă vizitatorul prin istoria tumultuoasă a Ciprului ca punct de confluență a culturilor din estul Mediteranei. Muzeul nu este doar un spațiu de expunere, ci și un centru vital pentru cercetarea arheologică.",
      en: "The Cyprus Museum in Nicosia, established in 1882, is the island's largest and oldest archaeological museum, housing the world's most comprehensive collection of Cypriot antiquities. The current primary building was constructed during the British colonial era as a memorial to Queen Victoria and has undergone several expansions to accommodate the vast number of finds from ongoing excavations. The exhibits span a massive timeline from the Neolithic Age to the early Byzantine period, providing an unparalleled overview of the development of human civilization on Cyprus. Highlights of the collection include the thousands of unique terracotta figurines from Ayia Irini, the famous marble statue of Aphrodite of Soli, and a magnificent array of Bronze Age tools and jewellery. Its chronologically arranged galleries guide visitors through the complex history of Cyprus as a cultural crossroads in the Eastern Mediterranean. The museum remains a cornerstone of the island's cultural identity and a major centre for research.",
      es: "El Museo de Chipre en Nicosia, fundado en 1882, alberga la colección de antigüedades chipriotas más importante del mundo. El edificio principal fue construido durante el dominio británico en honor a la reina Victoria. Sus exhibiciones abarcan desde el Neolítico hasta la época bizantina temprana, ofreciendo una visión completa de la civilización de la isla. Destacan las figuras de terracota de Ayia Irini, la estatua de Afrodita de Soli y una vasta colección de herramientas de bronce, siendo un centro vital para la investigación arqueológica.",
      pt: "O Museu de Chipre em Nicósia, fundado em 1882, é o maior e mais antigo museu arqueológico da ilha, abrigando a coleção mais importante de antiguidades cipriotas do mundo. O edifício atual foi construído durante o domínio britânico em honra da Rainha Vitória. As exposições abrangem desde o período Neolítico até ao início do período Bizantino. Entre os tesouros destacam-se as figuras de terracota de Ayia Irini, a famosa estátua de Afrodite de Soli e uma impressionante coleção de ferramentas de bronze.",
      fr: "Le musée de Chypre à Nicosie, fondé en 1882, est le plus ancien et le plus grand musée archéologique de l'île, abritant la plus importante collection d'antiquités chypriotes au monde. Le bâtiment actuel fut érigé sous la domination britannique en l'honneur de la reine Victoria. Les pièces exposées couvrent une période allant du Néolithique au début de l'ère byzantine. Parmi les trésors figurent les statuettes en terre cuite d'Ayia Irini, la statue d'Aphrodite de Soli et une collection d'outils en bronze, faisant du musée un centre de recherche majeur.",
    },
    factsAdvanced: {
      de: ["Das Museum wurde ursprünglich gegründet, um den Schmuggel von Antiquitäten zu stoppen.", "Das heutige Gebäude wurde im Jahr 1908 fertiggestellt.", "Es beherbergt die größte Sammlung von zypriotischer Keramik weltweit.", "Die Statue der Aphrodite von Soli stammt aus dem 1. Jahrhundert v. Chr.", "Der Komplex von Ayia Irini umfasst etwa 2.000 Terrakotta-Figuren.", "Pläne für ein neues, moderneres Museumsgebäude sind bereits in der Umsetzung."],
      hu: ["A múzeumot eredetileg a ciprusi antikvitások kicsempészésének megállítására alapították.", "A jelenlegi neoklasszicista épületet 1908-ban fejezték be.", "Itt található a világ legnagyobb ciprusi kerámiagyűjteménye.", "A soli-i Aphrodité-szobor az i. e. 1. századból származik.", "Az Ayia Irini-lelet körülbelül 2000 darab terracotta figurából áll.", "Már folyamatban vannak egy új, modernebb múzeumi épület kivitelezési tervei."],
      ro: ["Muzeul a fost fondat inițial pentru a opri traficul ilegal cu antichități cipriote.", "Clădirea actuală a fost finalizată în anul 1908 în stil neoclasic.", "Găzduiește cea mai extinsă colecție de ceramică cipriotă din lume.", "Statuia Afroditei din Soli datează din secolul I î.Hr.", "Ansamblul de la Ayia Irini conține aproximativ 2.000 de figurine de teracotă.", "Sunt în desfășurare planuri pentru construcția unui nou sediu muzeal modern."],
      en: ["The museum was originally established to curb the illicit smuggling of antiquities.", "The current neoclassical building was completed in the year 1908.", "It houses the most extensive collection of Cypriot pottery in the world.", "The famous statue of Aphrodite of Soli dates back to the 1st century BC.", "The Ayia Irini collection features approximately 2,000 terracotta figurines.", "Plans for a new, larger museum building are currently under development."],
      es: ["Se fundó para detener el contrabando de antigüedades.", "El edificio actual se completó en 1908.", "Posee la mayor colección de cerámica chipriota del mundo.", "La Afrodita de Soli data del siglo I a.C.", "El complejo de Ayia Irini incluye unas 2.000 figuras de terracota.", "Hay planes para un edificio nuevo y más moderno."],
      pt: ["O museu foi originalmente fundado para impedir o contrabando de antiguidades.", "O edifício atual foi concluído em 1908.", "Alberga a maior coleção de cerâmica cipriota do mundo.", "A estátua de Afrodite de Soli data do século I a.C.", "O complexo de Ayia Irini inclui cerca de 2.000 figuras de terracota.", "Estão já em curso planos para um novo edifício museológico mais moderno."],
      fr: ["Le musée fut fondé pour stopper le pillage des antiquités.", "Le bâtiment actuel fut achevé en 1908.", "Il possède la plus grande collection de céramiques chypriotes au monde.", "La statue d'Aphrodite de Soli date du Ier siècle av. J.-C.", "Le complexe d'Ayia Irini comprend environ 2 000 figurines en terre cuite.", "Des projets pour un nouveau bâtiment plus moderne sont en cours."],
    }, image: "/poi-images/CY-003-cyprus-museum.webp"},
  {
    id: "CY-003-ledra-street",
    type: "landmark",
    parent: "CY-003",
    coords: [33.3614, 35.1744],
    name: { de: "Ledrastraße", hu: "Ledra utca", ro: "Strada Ledra", en: "Ledra Street" },
    description: {
      de: "Die Haupteinkaufsstraße in der Altstadt von Nicosia.",
      hu: "Nicosia óvárosának fő bevásárlóutcája.",
      ro: "Principala stradă comercială din orașul vechi al Nicosiei.",
      en: "The main shopping street in the old town of Nicosia.",
      es: "La principal calle comercial del casco antiguo de Nicosia.",
      pt: "A principal rua comercial do centro histórico de Nicósia.",
      fr: "La principale rue commerçante de la vieille ville de Nicosie.",
    },
    facts: {
      de: ["Bekannt für den Grenzübergang zwischen dem griechischen und türkischen Teil.", "Benannt nach dem antiken Stadtkönigreich Ledra.", "Fußgängerzone mit vielen Cafés und Geschäften."],
      hu: ["A görög és török részek közötti határátkelőről ismert.", "Az ókori Ledra városkirályságról kapta a nevét.", "Gyalogos övezet számos kávézóval és üzlettel."],
      ro: ["Cunoscută pentru punctul de trecere a frontierei între partea greacă și cea turcă.", "Numită după regatul antic Ledra.", "Zonă pietonală cu multe cafenele și magazine."],
      en: ["Known for the border crossing between the Greek and Turkish sides.", "Named after the ancient city-kingdom of Ledra.", "Pedestrian zone with many cafes and shops."],
      es: ["Conocida por el paso fronterizo entre la parte griega y la turca.", "Nombrada en honor al antiguo reino de la ciudad de Ledra.", "Zona peatonal con numerosos cafés y tiendas."],
      pt: ["Conhecida pelo posto de fronteira entre a parte grega e turca.", "Nomeada em homenagem ao antigo reino da cidade de Ledra.", "Zona pedonal com muitos cafés e lojas."],
      fr: ["Connue pour le point de passage entre la partie grecque et la partie turque.", "Nommée d'après l'ancien royaume de Ledra.", "Zone piétonne avec de nombreux cafés et magasins."],
    },
    descriptionAdvanced: {
      de: "Die Ledrastraße ist die bekannteste Einkaufsstraße im Herzen der Altstadt von Nikosia und ein symbolträchtiger Ort für die Geschichte und Teilung der Stadt. Über Jahrzehnte war die Straße durch eine Barrikade unterbrochen, die den griechisch-zypriotischen Teil im Süden vom türkisch-zypriotischen Teil im Norden trennte. Im April 2008 wurde hier ein Grenzübergang für Fußgänger eröffnet, was als bedeutender Schritt zur Annäherung der beiden Gemeinschaften gefeiert wurde. Die Straße ist heute eine lebhafte Fußgängerzone, gesäumt von einer Mischung aus internationalen Marken, lokalen Boutiquen und traditionellen Cafés. Historisch gesehen war sie schon immer das kommerzielle Zentrum der Hauptstadt und ist bekannt für ihre Architektur, die Einflüsse aus verschiedenen Epochen vereint. Ein Besuch auf der Ledrastraße bietet nicht nur Einkaufsmöglichkeiten, sondern auch einen direkten Einblick in den Alltag und die politische Realität der letzten geteilten Hauptstadt Europas. Die Atmosphäre ist geprägt von einer ständigen Bewegung und einem regen Austausch.",
      hu: "A Ledra utca Nicosia óvárosának legismertebb bevásárlóutcája, amely egyben a város történelmének és kettéosztottságának emblematikus helyszíne. Az utca évtizedeken át egy barikáddal volt kettévágva, amely elválasztotta a görög ciprusi déli részt a török ciprusi északi résztől. 2008 áprilisában itt nyitották meg az egyik legfontosabb gyalogos határátkelőt, amelyet a két közösség közötti közeledés mérföldköveként ünnepeltek. Az utca ma nyüzsgő sétálóövezet, ahol nemzetközi márkák üzletei, helyi butikok és hagyományos kávézók váltják egymást. Történelmileg is a főváros kereskedelmi központjának számított, építészete pedig a ciprusi történelem különböző korszakainak hatásait ötvözi. A Ledra utcán tett séta nemcsak vásárlási lehetőséget kínál, hanem közvetlen betekintést enged Európa utolsó kettéosztott fővárosának mindennapjaiba és politikai valóságába. A területet a folyamatos mozgás és a sziget két oldala közötti emberi érintkezés jellemzi.",
      ro: "Strada Ledra este cea mai faimoasă arteră comercială din inima centrului vechi al Nicosiei și un loc simbolic pentru istoria și divizarea orașului. Timp de decenii, strada a fost întreruptă de o baricadă care separa sectorul greco-cipriot din sud de cel turco-cipriot din nord. În aprilie 2008, aici a fost deschis un punct de trecere pietonal, gest salutat ca un pas major spre reconcilierea celor două comunități ale insulei. În prezent, strada este o zonă pietonală vibrantă, mărginită de un amestec de branduri internaționale, buticuri locale și cafenele tradiționale. Din punct de vedere istoric, Ledra a fost întotdeauna inima comercială a capitalei, arhitectura sa reflectând influențe din diverse epoci ale istoriei cipriote. O vizită pe strada Ledra oferă nu doar oportunități de cumpărături, ci și o perspectivă directă asupra vieții cotidiene și a realității politice din ultima capitală divizată a Europei. Atmosfera este definită de un flux constant de oameni.",
      en: "Ledra Street is the primary shopping thoroughfare in the heart of Nicosia's walled city and serves as a powerful symbol of the capital's history and division. For decades, the street was severed by a barricade that marked the boundary between the Greek Cypriot south and the Turkish Cypriot north. In April 2008, a landmark pedestrian crossing was opened here, hailed as a significant step towards the rapprochement of the island's two main communities. Today, the street is a bustling pedestrian zone lined with a mix of international retail chains, local boutiques, and traditional coffee shops. Historically, it has always been the commercial heartbeat of Nicosia, featuring architecture that blends various eras of the city's past. A walk down Ledra Street offers more than just shopping; it provides a direct insight into the daily lives and political complexities of Europe's last divided capital. The area is characterized by constant movement and serves as a vital point of contact for residents.",
      es: "La calle Ledra es la vía comercial más famosa en el corazón del casco antiguo de Nicosia y un lugar emblemático de la historia y división de la ciudad. Durante décadas, la calle estuvo interrumpida por una barricada que separaba la parte grecochipriota al sur de la parte turcochipriota al norte. En abril de 2008, se abrió aquí un paso fronterizo para peatones, celebrado como un paso importante hacia el acercamiento de ambas comunidades. Hoy en día, la calle es una animada zona peatonal, flanqueada por una mezcla de marcas internacionales, boutiques locales y cafés tradicionales. Históricamente, siempre ha sido el centro comercial de la capital y es conocida por su arquitectura que combina influencias de varias épocas. Una visita a la calle Ledra no solo ofrece oportunidades de compra, sino también una visión directa de la vida cotidiana y la realidad política de la última capital dividida de Europa. El ambiente está marcado por un movimiento constante y un intercambio dinámico.",
      pt: "A rua Ledra é a via comercial mais famosa no coração do centro histórico de Nicósia e um local emblemático da história e divisão da cidade. Durante décadas, a rua foi interrompida por uma barricada que separava a parte cipriota grega, ao sul, da parte cipriota turca, ao norte. Em abril de 2008, foi aberto aqui um posto de fronteira para pedestres, celebrado como um passo importante para a aproximação das duas comunidades. Hoje, a rua é uma zona pedonal animada, ladeada por uma mistura de marcas internacionais, boutiques locais e cafés tradicionais. Historicamente, sempre foi o centro comercial da capital e é conhecida pela sua arquitetura que combina influências de várias épocas. Uma visita à rua Ledra oferece não apenas compras, mas também uma visão direta do quotidiano e da realidade política da última capital dividida da Europa. A atmosfera é marcada por um movimento constante e uma troca vibrante.",
      fr: "La rue Ledra est la rue commerçante la plus célèbre au cœur de la vieille ville de Nicosie et un lieu emblématique de l'histoire et de la division de la ville. Pendant des décennies, la rue a été interrompue par une barricade séparant la partie chypriote grecque au sud de la partie chypriote turque au nord. En avril 2008, un point de passage pour piétons y a été ouvert, célébré comme une étape majeure vers le rapprochement des deux communautés. Aujourd'hui, la rue est une zone piétonne animée, bordée d'un mélange de marques internationales, de boutiques locales et de cafés traditionnels. Historiquement, elle a toujours été le centre commercial de la capitale et est connue pour son architecture alliant des influences de diverses époques. Une visite de la rue Ledra offre non seulement des possibilités de shopping, mais aussi un aperçu direct de la vie quotidienne et de la réalité politique de la dernière capitale divisée d'Europe. L'atmosphère est marquée par un mouvement constant et des échanges animés.",
    },
    factsAdvanced: {
      de: ["Die Straße ist nach dem antiken Stadtkönigreich Ledra benannt.", "Der Grenzübergang wurde am 3. April 2008 offiziell eröffnet.", "Die Ledrastraße ist etwa 1 Kilometer lang und verläuft in Nord-Süd-Richtung.", "In den 1950er Jahren war sie als 'The Murder Mile' bekannt.", "Der Shacolas Tower am Ende der Straße bietet einen Panoramablick über die ganze Stadt.", "Die Straße liegt innerhalb der venezianischen Stadtmauern von Nikosia."],
      hu: ["Az utcát az ókori Ledra királyságról nevezték el.", "A határátkelőt 2008. április 3-án nyitották meg hivatalosan.", "A Ledra utca körülbelül 1 kilométer hosszú és észak-déli irányú.", "Az 1950-es években 'Gyilkos mérföld' néven volt ismert az EOKA-harcok alatt.", "Az utca végén található Shacolas-toronyból panorámás kilátás nyílik a városra.", "Az utca Nicosia velencei városfalain belül helyezkedik el."],
      ro: ["Strada este numită după regatul antic Ledra, aflat pe locul actual al Nicosiei.", "Punctul de trecere a frontierei a fost deschis oficial pe 3 aprilie 2008.", "Strada Ledra are o lungime de aproximativ 1 kilometru.", "În anii '50, era supranumită 'The Murder Mile' din cauza conflictelor armate.", "Turnul Shacolas oferă un observator cu vedere panoramică asupra întregului oraș.", "Strada traversează 'Linia Verde' supravegheată de trupele ONU."],
      en: ["The street is named after the ancient city-kingdom of Ledra.", "The pedestrian crossing was officially opened on April 3, 2008.", "Ledra Street is approximately 1 kilometre long and runs north-to-south.", "In the 1950s, it was known as 'The Murder Mile' during the EOKA struggle.", "The Shacolas Tower at the street's edge features a high-altitude observatory.", "The street is situated within the historic Venetian walls of Nicosia."],
      es: ["La calle lleva el nombre del antiguo reino de la ciudad de Ledra.", "El paso fronterizo se abrió oficialmente el 3 de abril de 2008.", "La calle Ledra tiene aproximadamente 1 kilómetro de longitud y corre de norte a sur.", "En la década de 1950, era conocida como 'The Murder Mile'.", "La Torre Shacolas al final de la calle ofrece una vista panorámica de toda la ciudad.", "La calle se encuentra dentro de las murallas venecianas de Nicosia."],
      pt: ["A rua tem o nome do antigo reino da cidade de Ledra.", "O posto de fronteira foi inaugurado oficialmente em 3 de abril de 2008.", "A rua Ledra tem cerca de 1 quilómetro de comprimento e corre na direção norte-sul.", "Nos anos 50, era conhecida como 'The Murder Mile'.", "A Torre Shacolas, no final da rua, oferece uma vista panorâmica de toda a cidade.", "A rua situa-se dentro das muralhas venezianas de Nicósia."],
      fr: ["La rue porte le nom de l'ancien royaume de Ledra.", "Le point de passage a été officiellement ouvert le 3 avril 2008.", "La rue Ledra mesure environ 1 kilomètre de long et s'étend du nord au sud.", "Dans les années 1950, elle était connue sous le nom de 'The Murder Mile'.", "La tour Shacolas, au bout de la rue, offre une vue panoramique sur toute la ville.", "La rue est située à l'intérieur des remparts vénitiens de Nicosie."],
    }, image: "/poi-images/CY-003-ledra-street.webp"},
  {
    id: "CY-004-amathus", "sights": {"de": [{"name": "Aphrodite Beach", "text": "Geküsst von der Sonne Zyperns liegt der Aphrodite Beach in der geschichtsträchtigen Umgebung von Amathus. Dieser Küstenabschnitt bietet wunderbare Gelegenheiten für ein ausgiebiges Sonnenbad und ein erfrischendes Bad in den Wellen. Die lebendige und doch entspannte Stimmung vor Ort verspricht maritimes Urlaubsgefühl. Ein Besuch lässt sich ideal mit einem Spaziergang entlang der faszinierenden archäologischen Stätten verbinden.", "category": "recreational", "coords": [33.126614, 34.707615]}, {"name": "Vouppa Beach", "text": "In der Nähe der antiken Stätte Amathus präsentiert sich der Vouppa Beach als einladender Rückzugsort direkt am Meer. Die Badegäste können sich auf klares Wasser und hervorragende Bedingungen für einen entspannten Tag am Strand freuen. Eine familiäre, ruhige Atmosphäre prägt diesen Küstenstreifen auf Zypern. An heißen Sommertagen bietet das Schwimmen im Mittelmeer eine willkommene Abkühlung.", "category": "recreational", "coords": [33.130283, 34.708151]}, {"name": "Armonia Beach", "text": "Der malerische Armonia Beach liegt in der Küstenregion um Amathus und bietet eine herrliche Kulisse für Sonnenanbeter. Hier findet man beste Voraussetzungen für entspannte Stunden beim Schwimmen und Genießen der Meeresbrise. Das Ambiente ist geprägt von Gelassenheit, wodurch der Strand besonders bei Ruhesuchenden beliebt ist. Ein gemütliches Picknick am Strand ist die perfekte Ergänzung für den Badeausflug.", "category": "recreational", "coords": [33.120953, 34.706369]}, {"name": "Loures", "text": "Strand in der Nähe von Amathus.", "category": "recreational", "coords": [33.134891, 34.708893]}], "hu": [{"name": "Aphrodite Beach", "text": "A ciprusi napfény fürdeti az Aphrodite Beach homokját, mely Amathus történelmi környezetében fekszik. Ez a partszakasz csodás lehetőségeket kínál egy alapos napozásra és a hullámokban való frissítő megmártózásra. A helyi élénk, mégis laza hangulat igazi tengeri nyaralás-érzést garantál. A strandolás ideálisan összeköthető egy sétával a lenyűgöző régészeti lelőhelyek mentén.", "category": "recreational", "coords": [33.126614, 34.707615]}, {"name": "Vouppa Beach", "text": "Az ókori Amathus romjai közelében a Vouppa Beach egy hívogató, közvetlenül a tengerparton fekvő menedékként mutatkozik be. A fürdőzők tiszta vízre és kiváló feltételekre számíthatnak egy pihentető strandnaphoz. Ezt a ciprusi partszakaszt egy családias, rendkívül nyugodt atmoszféra jellemzi. A forró nyári napokon a Földközi-tengerben való úszás igazi felfrissülést nyújt.", "category": "recreational", "coords": [33.130283, 34.708151]}, {"name": "Armonia Beach", "text": "A festői Armonia Beach az Amathus körüli partvidéken terül el, és csodás kulisszát biztosít a napozás szerelmeseinek. Itt kiváló feltételek várnak a pihentető úszáshoz és a tengeri szellő élvezetéhez. A környezetet a nyugalom hatja át, ami miatt a strand különösen népszerű a csendet keresők körében. Egy hangulatos piknik a parton tökéletes kiegészítője lehet a fürdőzésnek.", "category": "recreational", "coords": [33.120953, 34.706369]}, {"name": "Loures", "text": "Strand amathuszi közelében.", "category": "recreational", "coords": [33.134891, 34.708893]}], "ro": [{"name": "Aphrodite Beach", "text": "Sărutată de soarele Ciprului, Aphrodite Beach este situată în împrejurimile încărcate de istorie ale orașului Amathus. Această secțiune de coastă oferă oportunități minunate pentru a face plajă din plin și a face o baie răcoritoare în valuri. Atmosfera vibrantă, dar relaxată, promite un adevărat sentiment de vacanță maritimă. O vizită poate fi combinată ideal cu o plimbare de-a lungul siturilor arheologice fascinante.", "category": "recreational", "coords": [33.126614, 34.707615]}, {"name": "Vouppa Beach", "text": "În apropierea sitului antic Amathus, Vouppa Beach se prezintă ca o retragere primitoare direct la mare. Căutătorii de soare se pot aștepta la o apă limpede și condiții excelente pentru o zi relaxantă la plajă. O atmosferă familiară și liniștită caracterizează această porțiune de coastă cipriotă. În zilele fierbinți de vară, înotul în Marea Mediterană oferă o răcorire binevenită.", "category": "recreational", "coords": [33.130283, 34.708151]}, {"name": "Armonia Beach", "text": "Pitoreasca Armonia Beach este situată în regiunea de coastă din jurul Amathus și oferă un cadru minunat pentru cei care adoră soarele. Aici veți găsi cele mai bune condiții pentru ore relaxante de înot și de savurat briza mării. Ambianța este dominată de seninătate, ceea ce face ca plaja să fie deosebit de populară printre cei care caută liniștea. Un picnic confortabil pe plajă este completarea perfectă pentru ieșirea la scăldat.", "category": "recreational", "coords": [33.120953, 34.706369]}, {"name": "Loures", "text": "Plajă lângă Amathus.", "category": "recreational", "coords": [33.134891, 34.708893]}], "en": [{"name": "Aphrodite Beach", "text": "Kissed by the sun of Cyprus, Aphrodite Beach lies within the history-rich surroundings of Amathus. This coastal stretch offers wonderful opportunities for extensive sunbathing and a refreshing dip in the rolling waves. The lively yet completely relaxed local mood guarantees a true maritime holiday feel. A beach visit here pairs ideally with a stroll along the fascinating nearby archaeological sites.", "category": "recreational", "coords": [33.126614, 34.707615]}, {"name": "Vouppa Beach", "text": "Located near the ancient site of Amathus, Vouppa Beach presents itself as a highly inviting retreat right on the sea. Sunbathers can look forward to clear waters and excellent conditions for a relaxed day spent on the beach. A familiar and quiet atmosphere strongly characterizes this particular stretch of the Cypriot coast. On hot summer days, swimming in the Mediterranean provides a much-welcomed cool-down.", "category": "recreational", "coords": [33.130283, 34.708151]}, {"name": "Armonia Beach", "text": "The picturesque Armonia Beach lies in the coastal region around Amathus, offering a magnificent backdrop for sun worshippers. Here you will find the very best conditions for relaxing hours of swimming and enjoying the fresh sea breeze. The ambiance is heavily defined by serenity, making the beach especially popular with those seeking a quiet time. Having a cozy beach picnic is the perfect addition to any swimming excursion.", "category": "recreational", "coords": [33.120953, 34.706369]}, {"name": "Loures", "text": "Beach near Amathus.", "category": "recreational", "coords": [33.134891, 34.708893]}]},
    type: "landmark",
    parent: "CY-004",
    coords: [33.1417, 34.7125],
    name: { de: "Amathous", hu: "Amathousz", ro: "Amathus", en: "Amathus" },
    description: {
      de: "Eine der bedeutendsten antiken Stadtkönigreiche Zyperns an der Küste von Limassol.",
      hu: "Ciprus egyik legjelentősebb ókori városkirálysága Limassol partjainál.",
      ro: "Unul dintre cele mai importante regate antice din Cipru, pe coasta Limassolului.",
      en: "One of the most important ancient city-kingdoms of Cyprus, located on the coast of Limassol.",
      es: "Uno de los reinos urbanos antiguos más importantes de Chipre, en la costa de Limasol.",
      pt: "Um dos reinos urbanos antigos mais importantes de Chipre, na costa de Limassol.",
      fr: "L'un des plus importants anciens royaumes de Chypre sur la côte de Limassol.",
    },
    facts: {
      de: ["Es war ein Zentrum der Verehrung der Göttin Aphrodite.", "Die Ausgrabungsstätte umfasst eine Akropolis und eine Basilika.", "Hier wurde der größte jemals gefundene Steinkrug entdeckt."],
      hu: ["Aphrodité istennő tiszteletének egyik központja volt.", "A régészeti területen akropolisz és bazilika is található.", "Itt fedezték fel a valaha talált legnagyobb kőkancsót."],
      ro: ["A fost un centru de cult al zeiței Afrodita.", "Situl arheologic include o acropolă și o basilică.", "Aici a fost descoperit cel mai mare vas de piatră găsit vreodată."],
      en: ["It was a center for the worship of the goddess Aphrodite.", "The archaeological site includes an acropolis and a basilica.", "The largest stone jar ever found was discovered here."],
      es: ["Fue un centro de adoración a la diosa Afrodita.", "El sitio arqueológico incluye una acrópolis y una basílica.", "Aquí se descubrió la vasija de piedra más grande jamás encontrada."],
      pt: ["Foi um centro de adoração da deusa Afrodite.", "O sítio arqueológico inclui uma acrópole e uma basílica.", "Aqui foi descoberto o maior jarro de pedra alguma vez encontrado."],
      fr: ["C'était un centre de culte de la déesse Aphrodite.", "Le site archéologique comprend une acropole et une basilique.", "On y a découvert la plus grande jarre en pierre jamais trouvée."],
    },
    descriptionAdvanced: {
      de: "Amathus war eine der bedeutendsten antiken Stadtkönige Zyperns und liegt etwa elf Kilometer östlich von Limassol an der Südküste. Die Legende besagt, dass die Stadt von Amathus, einem Sohn des Königs Aerias, gegründet wurde und eng mit dem Kult der Aphrodite verbunden war, die hier einen prächtigen Tempel besaß. Die archäologische Stätte erstreckt sich über einen Hügel und die angrenzende Küstenebene und beherbergt Ruinen aus der geometrischen, archaischen, klassischen, hellenistischen und römischen Zeit. Besonders beeindruckend sind die Überreste der Akropolis, der antike Hafen, der heute teilweise unter Wasser liegt, und die frühchristlichen Basiliken. Einer der berühmtesten Funde aus Amathus ist ein monumentaler Steinkrug, der heute im Louvre in Paris ausgestellt ist; eine Nachbildung befindet sich vor Ort. Die strategische Lage am Meer machte Amathus zu einem wichtigen Handelszentrum für Kupfer und Getreide. Heute bieten die Ruinen einen faszinierenden Einblick in die religiöse und politische Organisation der antiken Inselbewohner.",
      hu: "Amathusz Ciprus egyik legfontosabb ókori városkirálysága volt, amely Limassoltól tizenegy kilométerre keletre, a déli parton fekszik. A legenda szerint a várost Amathusz, Aeriasz király fia alapította, és szoros kapcsolatban állt Aphrodité kultuszával, akinek egy hatalmas templomot szenteltek itt. A régészeti lelőhely egy domboldalon és a szomszédos tengerparti síkságon terül el, geometrikus, archaikus, klasszikus, hellenisztikus és római kori romokat őrizve. Különösen lenyűgözőek az akropolisz maradványai, az ókori kikötő, amely ma részben víz alatt található, valamint a kora keresztény bazilikák romjai. Amathusz egyik leghíresebb lelete egy monumentális kővázza, amelyet ma a párizsi Louvre-ban őriznek, de másolata a helyszínen is megtekinthető. Stratégiai fekvése révén a város fontos kereskedelmi központ volt, ahol rezet és gabonát exportáltak. Napjainkban a romok különleges betekintést nyújtanak az ókori ciprusiak vallási és politikai életébe.",
      ro: "Amathus a fost unul dintre cele mai importante regate-oraș antice din Cipru, situat la aproximativ unsprezece kilometri est de Limassol. Legenda spune că orașul a fost fondat de Amathus, fiul regelui Aerias, și a fost strâns legat de cultul Afroditei, care avea aici un templu magnific pe acropolă. Situl arheologic se întinde pe un deal și pe câmpia de coastă adiacentă, adăpostind ruine din perioadele geometrică, arhaică, clasică, elenistică și romană. Printre elementele remarcabile se numără vestigiile acropolei, portul antic care astăzi este parțial scufundat și bazilicile creștine timpurii. Una dintre cele mai faimoase descoperiri din Amathus este un vas monumental de piatră, care este expus în prezent la Muzeul Luvru din Paris; o replică a acestuia poate fi văzută la fața locului. Poziția strategică la mare a făcut din Amathus un centru comercial vital pentru exportul de cupru. Astăzi, ruinele oferă o perspectivă fascinantă asupra organizării religioase a locuitorilor antici.",
      en: "Amathus was one of the most significant ancient city-kingdoms of Cyprus, situated about eleven kilometres east of Limassol on the island's southern coast. According to legend, the city was founded by Amathus, son of King Aerias, and it was deeply connected to the cult of Aphrodite, who possessed a grand temple on its acropolis. The sprawling archaeological site covers a coastal hill and plain, featuring ruins from the Geometric, Archaic, Classical, Hellenistic, and Roman periods. Key highlights include the remains of the upper city, the ancient harbour which is now partially submerged, and several early Christian basilicas. One of the most famous artefacts discovered here is a monumental limestone vase, which is currently displayed in the Louvre Museum in Paris, with a replica standing at the site. Its strategic maritime location established Amathus as a vital trading hub for copper and grain in antiquity. Today, the ruins provide a fascinating glimpse into the religious and political structures of ancient Cyprus.",
      es: "Amathus fue uno de los reinos urbanos más significativos del antiguo Chipre, situado a unos once kilómetros al este de Limasol, en la costa sur. La leyenda cuenta que la ciudad fue fundada por Amathus, hijo del rey Aerias, y estaba estrechamente vinculada al culto de Afrodita, quien poseía aquí un espléndido templo. El sitio arqueológico se extiende por una colina y la llanura costera adyacente, albergando ruinas de las épocas geométrica, arcaica, clásica, helenística y romana. Son particularmente impresionantes los restos de la acrópolis, el antiguo puerto que hoy se encuentra parcialmente sumergido y las basílicas paleocristianas. Uno de los hallazgos más famosos de Amathus es una monumental vasija de piedra que actualmente se exhibe en el Louvre de París; una réplica se encuentra en el sitio. Su ubicación estratégica junto al mar convirtió a Amathus en un importante centro comercial de cobre y cereales. Hoy, las ruinas ofrecen una visión fascinante de la organización religiosa y política de los antiguos habitantes de la isla.",
      pt: "Amathus foi um dos reinos urbanos mais significativos do antigo Chipre, situado a cerca de onze quilómetros a leste de Limassol, na costa sul. A lenda diz que a cidade foi fundada por Amathus, filho do rei Aerias, e estava estreitamente ligada ao culto de Afrodite, que aqui possuía um templo magnífico. O sítio arqueológico estende-se por uma colina e pela planície costeira adjacente, abrigando ruínas das épocas geométrica, arcaica, clássica, helenística e romana. São particularmente impressionantes os restos da acrópole, o antigo porto que hoje se encontra parcialmente submerso e as basílicas paleocristãs. Um dos achados mais famosos de Amathus é um monumental jarro de pedra, atualmente em exibição no Louvre, em Paris; uma réplica encontra-se no local. A sua localização estratégica junto ao mar tornou Amathus um importante centro comercial de cobre e cereais. Hoje, as ruínas oferecem uma visão fascinante da organização religiosa e política dos antigos habitantes da ilha.",
      fr: "Amathous était l'un des royaumes urbains antiques les plus importants de Chypre, situé à environ onze kilomètres à l'est de Limassol sur la côte sud. La légende raconte que la ville fut fondée par Amathous, un fils du roi Aerias, et était étroitement liée au culte d'Aphrodite, qui y possédait un temple magnifique. Le site archéologique s'étend sur une colline et la plaine côtière adjacente, et abrite des ruines des périodes géométrique, archaïque, classique, hellénistique et romaine. Les vestiges de l'acropole, l'ancien port aujourd'hui partiellement sous l'eau et les basiliques paléochrétiennes sont particulièrement impressionnants. L'une des découvertes les plus célèbres d'Amathous est une jarre monumentale en pierre, aujourd'hui exposée au Louvre à Paris ; une réplique se trouve sur place. Sa situation stratégique en bord de mer a fait d'Amathous un important centre commercial pour le cuivre et les céréales. Aujourd'hui, les ruines offrent un aperçu fascinant de l'organisation religieuse et politique des anciens habitants de l'île.",
    },
    factsAdvanced: {
      de: ["Die Stadt wurde im 11. Jahrhundert v. Chr. gegründet.", "Der Tempel der Aphrodite von Amathus war eines der wichtigsten Heiligtümer der Insel.", "Amathus war die erste Hauptstadt der Insel unter ptolemäischer Herrschaft.", "Die Stadt wurde im 7. Jahrhundert n. Chr. durch arabische Überfälle weitgehend zerstört.", "Der antike Steinkrug im Louvre wiegt über 14 Tonnen.", "Unterhalb des Wasserspiegels sind noch die Umrisse der antiken Hafenmauern erkennbar."],
      hu: ["A várost az i. e. 11. században alapították.", "Az amathuszi Aphrodité-templom a sziget egyik legjelentősebb szentélye volt.", "Amathusz volt a sziget első fővárosa a ptolemaioszi uralom alatt.", "A várost a 7. századi arab betörések során rombolták le nagyrészt.", "A Louvre-ban látható hatalmas kővázza több mint 14 tonnát nyom.", "A tengerparton még ma is láthatók az ókori kikötőgátak víz alatti körvonalai."],
      ro: ["Orașul a fost întemeiat în secolul al XI-lea î.Hr.", "Templul Afroditei din Amathus era unul dintre principalele locuri de pelerinaj.", "Amathus a servit drept capitală a insulei sub administrația ptolemeică.", "Localitatea a fost distrusă în urma raidurilor arabe din secolul al VII-lea d.Hr.", "Vasul gigantic de piatră expus la Luvru are o greutate de peste 14 tone.", "Digurile portului antic sunt vizibile sub apa mării în zilele senine."],
      en: ["The city was established in the 11th century BC.", "The Temple of Aphrodite Amathusia was one of the island's major sanctuaries.", "Amathus served as the first capital of Cyprus under Ptolemaic rule.", "The city was largely destroyed during Arab raids in the 7th century AD.", "The monumental stone vase now in the Louvre weighs over 14 tonnes.", "The outlines of the ancient harbour moles are still visible beneath the sea surface."],
      es: ["La ciudad fue fundada en el siglo XI a.C.", "El templo de Afrodita de Amathus fue uno de los santuarios más importantes de la isla.", "Amathus fue la primera capital de la isla bajo el dominio ptolemaico.", "La ciudad fue destruida en gran parte por incursiones árabes en el siglo VII d.C.", "La vasija de piedra antigua del Louvre pesa más de 14 toneladas.", "Bajo el nivel del agua todavía se pueden ver los contornos de los muros del puerto antiguo."],
      pt: ["A cidade foi fundada no século XI a.C.", "O templo de Afrodite de Amathus foi um dos santuários mais importantes da ilha.", "Amathus foi a primeira capital da ilha sob o domínio ptolemaico.", "A cidade foi destruída em grande parte por ataques árabes no século VII d.C.", "O antigo jarro de pedra no Louvre pesa mais de 14 toneladas.", "Abaixo do nível da água ainda são visíveis os contornos das muralhas do antigo porto."],
      fr: ["La ville a été fondée au XIe siècle av. J.-C.", "Le temple d'Aphrodite d'Amathous était l'un des sanctuaires les plus importants de l'île.", "Amathous fut la première capitale de l'île sous la domination ptolémaïque.", "La ville fut en grande partie détruite par des raids arabes au VIIe siècle apr. J.-C.", "L'ancienne jarre en pierre du Louvre pèse plus de 14 tonnes.", "Sous le niveau de l'eau, les contours des anciens murs du port sont encore visibles."],
    }, image: "/poi-images/CY-004-amathus.webp"},
  {
    id: "CY-004-sanctuary-apollo", "sights": {
      "de": [
            {
                  "name": "Kourion Beach",
                  "text": "Ein beliebter Strand nahe der antiken Stätte Kourion, bekannt für sein klares Wasser und gute Bedingungen zum Windsurfen.",
                  "category": "recreational",
                  "coords": [
                        32.884463,
                        34.660054
                  ]
            },
            {
                  "name": "Kourion Stadium",
                  "text": "Die Überreste eines antiken Stadions aus dem 2. Jahrhundert, das einst für sportliche Wettkämpfe in der Stadt Kourion genutzt wurde.",
                  "category": "historical",
                  "coords": [
                        32.87631,
                        34.670696
                  ]
            },
            {
                  "name": "Kourio",
                  "text": "Ein bedeutender antiker griechischer Stadtstaat auf Zypern mit beeindruckenden Mosaiken und archäologischen Überresten.",
                  "category": "historical",
                  "coords": [
                        32.885714,
                        34.665169
                  ]
            },
            {
                  "name": "Sanctuary of Apollo",
                  "text": "Ein heiliger Tempelkomplex, der Apollo Hylates gewidmet ist, dem Gott der Wälder und Beschützer von Kourion.",
                  "category": "historical",
                  "coords": [
                        32.863561,
                        34.672946
                  ]
            },
            {
                  "name": "Topiko Arkhaiologiko Mouseio Kouriou",
                  "text": "Ein Museum in Episkopi, das bedeutende Artefakte und Funde aus der nahe gelegenen antiken Stadt Kourion beherbergt.",
                  "category": "museum",
                  "coords": [
                        32.901154,
                        34.669618
                  ]
            },
            {
                  "name": "Small Basilica At Maydan",
                  "text": "Die archäologischen Überreste einer frühchristlichen Basilika im Gebiet von Kourion.",
                  "category": "historical",
                  "coords": [
                        32.878758,
                        34.6706
                  ]
            },
            {
                  "name": "Ancient Basilica",
                  "text": "Die Ruinen einer großen christlichen Basilika in Kourion, die die religiöse Geschichte der Region widerspiegeln.",
                  "category": "historical",
                  "coords": [
                        32.883353,
                        34.663443
                  ]
            },
            {
                  "name": "ourion Ancient Amphitheater",
                  "text": "Ein restauriertes griechisch-römisches Theater in Kourion, das ursprünglich Tausenden Platz bot und heute noch für Aufführungen genutzt wird.",
                  "category": "historical",
                  "coords": [
                        32.887946,
                        34.664235
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Kourion Beach",
                  "text": "Népszerű strand Kourion ősi lelőhelye közelében, tiszta vizéről és szörfözési lehetőségeiről ismert.",
                  "category": "recreational",
                  "coords": [
                        32.884463,
                        34.660054
                  ]
            },
            {
                  "name": "Kourion Stadium",
                  "text": "Egy 2. századi ókori stadion maradványai, amelyet egykor atlétikai versenyekre használtak Kourion városában.",
                  "category": "historical",
                  "coords": [
                        32.87631,
                        34.670696
                  ]
            },
            {
                  "name": "Kourio",
                  "text": "Fontos ókori görög városállam Cipruson, amely lenyűgöző mozaikokkal és régészeti maradványokkal rendelkezik.",
                  "category": "historical",
                  "coords": [
                        32.885714,
                        34.665169
                  ]
            },
            {
                  "name": "Sanctuary of Apollo",
                  "text": "Apollón Hülatésznek, az erdők istenének és Kourion védelmezőjének szentelt templomkomplexum.",
                  "category": "historical",
                  "coords": [
                        32.863561,
                        34.672946
                  ]
            },
            {
                  "name": "Topiko Arkhaiologiko Mouseio Kouriou",
                  "text": "Episkopi múzeuma, amely a közeli ókori Kourion városából származó jelentős leleteket és tárgyakat őriz.",
                  "category": "museum",
                  "coords": [
                        32.901154,
                        34.669618
                  ]
            },
            {
                  "name": "Small Basilica At Maydan",
                  "text": "Egy kora keresztény bazilika régészeti maradványai Kourion területén.",
                  "category": "historical",
                  "coords": [
                        32.878758,
                        34.6706
                  ]
            },
            {
                  "name": "Ancient Basilica",
                  "text": "Egy nagy keresztény bazilika romjai Kourionban, amelyek a környék vallástörténetét tükrözik.",
                  "category": "historical",
                  "coords": [
                        32.883353,
                        34.663443
                  ]
            },
            {
                  "name": "Kourion Theatre",
                  "text": "Restaurált görög-római színház Kourionban, amely eredetileg több ezer fő befogadására volt alkalmas, és ma is tartanak benne előadásokat.",
                  "category": "historical",
                  "coords": [
                        32.887946,
                        34.664235
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Kourion Beach",
                  "text": "O plajă populară lângă situl antic Kourion, cunoscută pentru apele sale limpezi și condițiile de windsurfing.",
                  "category": "recreational",
                  "coords": [
                        32.884463,
                        34.660054
                  ]
            },
            {
                  "name": "Kourion Stadium",
                  "text": "Rămășițele unui stadion antic din secolul al II-lea, folosit odinioară pentru concursuri atletice în orașul Kourion.",
                  "category": "historical",
                  "coords": [
                        32.87631,
                        34.670696
                  ]
            },
            {
                  "name": "Kourio",
                  "text": "Un important oraș-stat grec antic din Cipru, cu mozaicuri impresionante și resturi arheologice.",
                  "category": "historical",
                  "coords": [
                        32.885714,
                        34.665169
                  ]
            },
            {
                  "name": "Sanctuary of Apollo",
                  "text": "Un complex de temple sacre dedicat lui Apollo Hylates, zeul pădurilor și protectorul Kourionului.",
                  "category": "historical",
                  "coords": [
                        32.863561,
                        34.672946
                  ]
            },
            {
                  "name": "Topiko Arkhaiologiko Mouseio Kouriou",
                  "text": "Un muzeu din Episkopi care adăpostește artefacte și descoperiri semnificative din orașul antic Kourion din apropiere.",
                  "category": "museum",
                  "coords": [
                        32.901154,
                        34.669618
                  ]
            },
            {
                  "name": "Small Basilica At Maydan",
                  "text": "Rămășițele arheologice ale unei bazilici creștine timpurii situate în zona Kourion.",
                  "category": "historical",
                  "coords": [
                        32.878758,
                        34.6706
                  ]
            },
            {
                  "name": "Ancient Basilica",
                  "text": "Ruinele unei mari bazilici creștine din Kourion, reflectând istoria religioasă a zonei.",
                  "category": "historical",
                  "coords": [
                        32.883353,
                        34.663443
                  ]
            },
            {
                  "name": "Kourion Theatre",
                  "text": "Un teatru greco-roman restaurat din Kourion, care inițial avea mii de locuri și este folosit și astăzi pentru spectacole.",
                  "category": "historical",
                  "coords": [
                        32.887946,
                        34.664235
                  ]
            }
      ],
      "en": [
            {
                  "name": "Kourion Beach",
                  "text": "A popular beach near the ancient site of Kourion, known for its clear waters and windsurfing conditions.",
                  "category": "recreational",
                  "coords": [
                        32.884463,
                        34.660054
                  ]
            },
            {
                  "name": "Kourion Stadium",
                  "text": "The remains of a 2nd-century ancient stadium, once used for athletic contests in the city of Kourion.",
                  "category": "historical",
                  "coords": [
                        32.87631,
                        34.670696
                  ]
            },
            {
                  "name": "Curium",
                  "text": "An important ancient Greek city-state on Cyprus, featuring impressive mosaics and archaeological remains.",
                  "category": "historical",
                  "coords": [
                        32.885714,
                        34.665169
                  ]
            },
            {
                  "name": "Sanctuary of Apollo",
                  "text": "A sacred temple complex dedicated to Apollo Hylates, the god of the woodlands and protector of Kourion.",
                  "category": "historical",
                  "coords": [
                        32.863561,
                        34.672946
                  ]
            },
            {
                  "name": "Local Archaeological Kourion Museum",
                  "text": "A museum in Episkopi housing significant artifacts and finds from the nearby ancient city of Kourion.",
                  "category": "museum",
                  "coords": [
                        32.901154,
                        34.669618
                  ]
            },
            {
                  "name": "Small Basilica At Maydan",
                  "text": "The archaeological remains of an early Christian basilica located within the Kourion area.",
                  "category": "historical",
                  "coords": [
                        32.878758,
                        34.6706
                  ]
            },
            {
                  "name": "Ancient Basilica",
                  "text": "The ruins of a large Christian basilica in Kourion, reflecting the area's religious history.",
                  "category": "historical",
                  "coords": [
                        32.883353,
                        34.663443
                  ]
            },
            {
                  "name": "Curium Ancient Theatre",
                  "text": "A restored Greco-Roman theatre in Kourion that originally seated thousands and is still used for performances today.",
                  "category": "historical",
                  "coords": [
                        32.887946,
                        34.664235
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CY-004",
    coords: [32.8639, 34.6736],
    name: { de: "Heiligtum des Apollon Hylates", hu: "Apollón Hülátész szentélye", ro: "Sanctuarul lui Apollo Hylates", en: "Sanctuary of Apollo Hylates" },
    description: {
      de: "Ein bedeutendes antikes Heiligtum, das Apollon als Gott der Wälder gewidmet war.",
      hu: "Apollónnak, az erdők istenének szentelt jelentős ókori szentély.",
      ro: "Un important sanctuar antic dedicat lui Apollo ca zeu al pădurilor.",
      en: "A major ancient sanctuary dedicated to Apollo as god of the woodlands.",
      es: "Un importante santuario antiguo dedicado a Apolo como dios de los bosques.",
      pt: "Um importante santuário antigo dedicado a Apolo como deus das florestas.",
      fr: "Un sanctuaire antique majeur dédié à Apollon en tant que dieu des forêts.",
    },
    facts: {
      de: ["Liegt westlich der antiken Stadt Kourion.", "War eines der wichtigsten religiösen Zentren Zyperns.", "Die Anlage umfasst einen Tempel, eine Palästra und Bäder."],
      hu: ["Kourion ókori városától nyugatra fekszik.", "Ciprus egyik legfontosabb vallási központja volt.", "A területen templom, palatestra és fürdők is találhatók."],
      ro: ["Situat la vest de orașul antic Kourion.", "A fost unul dintre cele mai importante centre religioase din Cipru.", "Complexul include un templu, o palestră și băi."],
      en: ["Located west of the ancient city of Kourion.", "Was one of the most important religious centers of Cyprus.", "The site includes a temple, a palaestra, and baths."],
      es: ["Situado al oeste de la antigua ciudad de Curio.", "Fue uno de los centros religiosos más importantes de Chipre.", "El complejo incluye un templo, una palestra y baños."],
      pt: ["Situado a oeste da antiga cidade de Kourion.", "Foi um dos centros religiosos mais importantes de Chipre.", "O complexo inclui um templo, uma palestra e banhos."],
      fr: ["Situé à l'ouest de l'ancienne cité de Kourion.", "C'était l'un des centres religieux les plus importants de Chypre.", "Le site comprend un temple, une palestre et des bains."],
    },
    descriptionAdvanced: {
      de: "Das Heiligtum des Apollo Hylates, westlich der antiken Stadt Kourion gelegen, war eines der wichtigsten religiösen Zentren des antiken Zyperns. Apollo Hylates wurde hier als Gott der Wälder verehrt, wobei der Kult vom 8. Jahrhundert v. Chr. bis zum 4. Jahrhundert n. Chr. praktiziert wurde. Die heute sichtbaren Ruinen stammen größtenteils aus der römischen Restaurierung im 1. Jahrhundert n. Chr., weisen jedoch Spuren früherer archaischer Strukturen auf. Zu der weitläufigen Anlage gehören ein Tempel, der teilweise rekonstruiert wurde, Priesterunterkünfte, eine Palästra für sportliche Übungen und ein Badekomplex. Ein besonderes Merkmal ist der ummauerte heilige Bezirk, in dem archäologische Grabungen zahlreiche Votivgaben aus Terrakotta und Bronze ans Licht gebracht haben. Das Heiligtum war einst durch eine Prozessionsstraße mit der Stadt Kourion verbunden, was seine zentrale Rolle im religiösen Leben unterstreicht. Die friedliche Lage inmitten von Olivenhainen und Zypressen vermittelt noch heute einen Eindruck von der spirituellen Bedeutung dieses Ortes als heiliger Hain.",
      hu: "Apollón Hylates szentélye, amely az ókori Kourion várostól nyugatra található, az ókori Ciprus egyik legfontosabb vallási központja volt. Apollón Hylatest itt az erdők isteneként tisztelték, a kultusz pedig az i. e. 8. századtól az i. sz. 4. századig virágzott. A ma látható romok nagy része az i. sz. 1. századi római helyreállítás idejéből származik, de korábbi, archaikus épületek nyomai is fellelhetők. A komplexum magában foglalja a részben rekonstruált templomot, a papok szállásait, egy sportgyakorlatokra használt palasztrát és egy fürdőépületet. A szentély területét fallal vették körül, ahol a régészeti feltárások során számos fogadalmi ajándékot, köztük terracotta figurákat találtak. A helyszínt egykor ünnepi felvonulási út kötötte össze Kourion városával, hangsúlyozva központi szerepét. Az olajfák és ciprusok között fekvő szentély ma is a béke és a spirituális elmélyülés hangulatát árasztja, felidézve a hajdani szent liget emlékét.",
      ro: "Sanctuarul lui Apollo Hylates, situat la vest de orașul antic Kourion, a fost unul dintre cele mai importante centre religioase ale Ciprului antic. Apollo Hylates era venerat aici ca zeu al pădurilor, cultul său fiind practicat din secolul al VIII-lea î.Hr. până în secolul al IV-lea d.Hr. Ruinele vizibile astăzi datează în mare parte din perioada restaurării romane din secolul I d.Hr., deși păstrează urme ale structurilor arhaice anterioare. Complexul vast include un templu parțial reconstruit, locuințe pentru preoți, o palestra pentru exerciții atletice și un ansamblu de băi. O caracteristică notabilă este incinta sacră împrejmuită, unde săpăturile arheologice au scos la iveală numeroase ofrande votive din teracotă și bronz. Sanctuarul era odinioară conectat de orașul Kourion printr-o cale procesională, subliniind rolul său central în viața spirituală a regiunii. Locația liniștită, înconjurată de măslini și chiparoși, transmite și astăzi atmosfera sacră a dumbravei antice.",
      en: "The Sanctuary of Apollo Hylates, located just west of the ancient city of Kourion, was one of the pre-eminent religious centres of ancient Cyprus. Apollo Hylates was worshipped here as the god of the woodland, with cult activities spanning from the 8th century BC to the 4th century AD. Most of the ruins currently visible date to the Roman restoration in the 1st century AD, although they rest upon earlier Archaic foundations. The extensive complex features a partially reconstructed temple, priest quarters, a palaestra for athletic training, and a sophisticated bathhouse. A unique aspect of the site is the enclosed sacred precinct, where archaeologists have discovered thousands of votive offerings made of terracotta and bronze. The sanctuary was originally linked to Kourion by a ceremonial processional road, highlighting its vital role in the region's spiritual life. Nestled among olive groves and cypress trees, the site still evokes the tranquil and sacred atmosphere of an ancient holy grove.",
      es: "El Santuario de Apolo Hilates, situado al oeste de la antigua ciudad de Curio, fue uno de los centros religiosos más importantes del antiguo Chipre. Apolo Hilates era adorado aquí como el dios de los bosques, con el culto practicado desde el siglo VIII a.C. hasta el siglo IV d.C. Las ruinas visibles hoy datan en su mayoría de la restauración romana en el siglo I d.C., aunque presentan rastros de estructuras arcaicas anteriores. El extenso complejo incluye un templo parcialmente reconstruido, alojamientos para sacerdotes, una palestra para ejercicios deportivos y un complejo de baños. Una característica especial es el recinto sagrado amurallado, donde las excavaciones arqueológicas han sacado a la luz numerosas ofrendas votivas de terracota y bronce. El santuario estaba conectado en su día por una vía procesional con la ciudad de Curio, lo que subraya su papel central en la vida religiosa. La ubicación tranquila entre olivares y cipreses todavía transmite hoy una impresión de la importancia espiritual de este lugar como bosque sagrado.",
      pt: "O Santuário de Apolo Hilates, situado a oeste da antiga cidade de Kourion, foi um dos centros religiosos mais importantes do antigo Chipre. Apolo Hilates era aqui adorado como o deus das florestas, sendo o culto praticado do século VIII a.C. ao século IV d.C. As ruínas visíveis hoje datam maioritariamente da restauração romana no século I d.C., mas apresentam vestígios de estruturas arcaicas anteriores. O complexo extenso inclui um templo parcialmente reconstruído, alojamentos para sacerdotes, uma palestra para exercícios desportivos e um complexo de banhos. Uma característica especial é o recinto sagrado amuralhado, onde escavações arqueológicas revelaram inúmeras oferendas votivas em terracota e bronze. O santuário esteve outrora ligado por uma via processional à cidade de Kourion, o que sublinha o seu papel central na vida religiosa. A localização tranquila entre olivais e ciprestes ainda hoje transmite uma impressão da importância espiritual deste local como bosque sagrado.",
      fr: "Le sanctuaire d'Apollon Hylates, situé à l'ouest de l'ancienne ville de Kourion, était l'un des centres religieux les plus importants de la Chypre antique. Apollon Hylates y était vénéré comme le dieu des forêts, le culte ayant été pratiqué du VIIIe siècle av. J.-C. au IVe siècle apr. J.-C. Les ruines visibles aujourd'hui datent pour la plupart de la restauration romaine au Ier siècle apr. J.-C., mais présentent des traces de structures archaïques antérieures. Le vaste complexe comprend un temple partiellement reconstruit, des logements pour les prêtres, une palestre pour les exercices sportifs et un complexe thermal. Une caractéristique particulière est l'enceinte sacrée murée, où des fouilles archéologiques ont mis au jour de nombreuses offrandes votives en terre cuite et en bronze. Le sanctuaire était autrefois relié à la ville de Kourion par une voie processionnelle, ce qui souligne son rôle central dans la vie religieuse. Sa situation paisible au milieu des oliviers et des cyprès donne encore aujourd'hui une impression de l'importance spirituelle de ce lieu en tant que bois sacré.",
    },
    factsAdvanced: {
      de: ["Hylates bedeutet 'Gott der Wälder' auf Altgriechisch.", "Ein schweres Erdbeben zerstörte das Heiligtum im Jahr 365 n. Chr. fast vollständig.", "Der Haupttempel wurde nach korinthischem Baustil entworfen.", "In der Palästra trainierten Athleten für die religiösen Wettkämpfe.", "Wer den heiligen Altar ohne Erlaubnis berührte, wurde der Legende nach ins Meer geworfen.", "Grabungen der University of Pennsylvania lieferten wertvolle Erkenntnisse über den Kult."],
      hu: ["A 'Hylates' név ógörögül az erdők istenét jelenti.", "Egy i. sz. 365-ben bekövetkezett erős földrengés szinte teljesen elpusztította a szentélyt.", "A főtemplom korinthoszi stílusú építészeti jegyeket hordoz.", "A palasztrában az atléták a vallási ünnepekhez kapcsolódó versenyekre edzettek.", "A legenda szerint aki engedély nélkül érintette az oltárt, azt a tengerbe dobták.", "A Pennsylvaniai Egyetem ásatásai tárták fel a kultusz legfontosabb részleteit."],
      ro: ["Numele 'Hylates' provine din greaca veche și înseamnă 'al pădurilor'.", "Cutremurul devastator din anul 365 d.Hr. a dus la distrugerea sanctuarului.", "Templul principal a fost reconstruit în stil corintic în perioada romană.", "Palestra era folosită pentru antrenamentul sportivilor înaintea jocurilor sacre.", "Legenda spune că profanatorii altarului erau pedepsiți prin aruncarea în mare.", "Excavațiile Universității din Pennsylvania au scos la lumină mii de artefacte votive."],
      en: ["The epithet 'Hylates' means 'of the woodland' in Ancient Greek.", "A massive earthquake in 365 AD caused the final destruction of the sanctuary.", "The main temple was designed in the Corinthian architectural style.", "The palaestra was used for training athletes who competed in sacred games.", "Legend states that those who touched the altar without permission were thrown into the sea.", "Excavations by the University of Pennsylvania revealed the extent of the ritual activities."],
      es: ["Hilates significa 'Dios de los bosques' en griego antiguo.", "Un fuerte terremoto destruyó el santuario casi por completo en el año 365 d.C.", "El templo principal fue diseñado según el estilo arquitectónico corintio.", "En la palestra, los atletas entrenaban para las competiciones religiosas.", "Según la leyenda, quien tocara el altar sagrado sin permiso era arrojado al mar.", "Las excavaciones de la Universidad de Pensilvania proporcionaron valiosa información sobre el culto."],
      pt: ["Hilates significa 'Deus das florestas' em grego antigo.", "Um forte terramoto destruiu o santuário quase por completo no ano 365 d.C.", "O templo principal foi projetado de acordo com o estilo arquitetónico coríntio.", "Na palestra, os atletas treinavam para as competições religiosas.", "Segundo a lenda, quem tocasse no altar sagrado sem permissão era lançado ao mar.", "Escavações da Universidade da Pensilvânia forneceram informações valiosas sobre o culto."],
      fr: ["Hylates signifie 'Dieu des forêts' en grec ancien.", "Un grave tremblement de terre a presque entièrement détruit le sanctuaire en 365 apr. J.-C.", "Le temple principal a été conçu selon le style architectural corinthien.", "Dans la palestre, les athlètes s'entraînaient pour les compétitions religieuses.", "Selon la légende, quiconque touchait l'autel sacré sans permission était jeté à la mer.", "Des fouilles de l'Université de Pennsylvanie ont fourni des informations précieuses sur le culte."],
    }, image: "/poi-images/CY-004-sanctuary-apollo.webp"},
  {
    id: "CY-005-paphos-castle",
    type: "landmark",
    parent: "CY-005",
    coords: [32.4069, 34.7536],
    name: { de: "Burg Paphos", hu: "Páfoszi vár", ro: "Castelul din Paphos", en: "Paphos Castle" },
    description: {
      de: "Eine am Hafen von Paphos gelegene mittelalterliche Festung.",
      hu: "Páfosz kikötőjében található középkori erődítmény.",
      ro: "O fortăreață medievală situată în portul Paphos.",
      en: "A medieval fortress located at the edge of Paphos harbor.",
      es: "Una fortaleza medieval situada en el puerto de Pafos.",
      pt: "Uma fortaleza medieval situada no porto de Pafos.",
      fr: "Une forteresse médiévale située sur le port de Paphos.",
    },
    facts: {
      de: ["Ursprünglich als byzantinische Festung zum Schutz des Hafens erbaut.", "Es wurde von den Lusignans und später von den Osmanen umgebaut.", "Heute dient es als Kulisse für das jährliche Paphos Aphrodite Festival."],
      hu: ["Eredetileg bizánci erődként épült a kikötő védelmére.", "A Lusignanok, majd később az oszmánok építették újjá.", "Ma az évenkénti Páfoszi Aphrodité Fesztivál díszleteként szolgál."],
      ro: ["Construit inițial ca o fortăreață bizantină pentru a proteja portul.", "A fost reconstruit de familia Lusignan și ulterior de otomani.", "Astăzi servește ca decor pentru festivalul anual de operă din Paphos."],
      en: ["Originally built as a Byzantine fort to protect the harbor.", "It was rebuilt by the Lusignans and later by the Ottomans.", "Today it serves as the backdrop for the annual Paphos Aphrodite Festival."],
      es: ["Originalmente construido como una fortaleza bizantina para proteger el puerto.", "Fue reconstruido por los Lusignan y más tarde por los otomanos.", "Hoy sirve como escenario para el festival anual Paphos Aphrodite Festival."],
      pt: ["Originalmente construído como uma fortaleza bizantina para proteger o porto.", "Foi reconstruído pelos Lusignans e mais tarde pelos otomanos.", "Hoje serve de cenário para o festival anual Paphos Aphrodite Festival."],
      fr: ["Construit à l'origine comme une forteresse byzantine pour protéger le port.", "Il a été reconstruit par les Lusignan puis par les Ottomans.", "Il sert aujourd'hui de cadre au festival annuel Paphos Aphrodite Festival."],
    },
    descriptionAdvanced: {
      de: "Die mittelalterliche Burg von Paphos, die den westlichen Rand des Hafens bewacht, ist eines der ikonischsten Wahrzeichen der Stadt. Ursprünglich von den Byzantinern als Festung zum Schutz des Hafens erbaut, wurde sie im 13. Jahrhundert von den Lusignans verstärkt, später jedoch von den Venezianern im Jahr 1570 zerstört, um sie nicht in die Hände der Osmanen fallen zu lassen. Die heutige massive Steinstruktur wurde 1592 von den Osmanen wieder aufgebaut, worauf eine Inschrift über dem Eingang hinweist. Die Burg hat eine wechselvolle Geschichte hinter sich und diente im Laufe der Jahrhunderte als Festung, Gefängnis und während der britischen Herrschaft sogar als Salzlager. Sie besteht aus einem zentralen Turm, der von einer Mauer mit Zinnen umgeben ist und über eine kleine Brücke über den Burggraben erreicht wird. Heute ist die Burg ein geschütztes Denkmal und dient als beeindruckende Kulisse für kulturelle Veranstaltungen wie das jährliche Paphos Aphrodite Festival. Von der Dachterrasse bietet sich ein herrlicher Blick über den Hafen.",
      hu: "A paphoszi középkori vár, amely a kikötő nyugati szélét őrzi, a város egyik legjellegzetesebb és legismertebb szimbóluma. Eredetileg a bizánciak építették erődítményként a kikötő védelmére, majd a 13. században a Lusignan-ház megerősítette, de 1570-ben a velenceiek lerombolták, hogy ne kerüljön az oszmánok kezére. A ma látható masszív kőtömböt 1592-ben építették újjá az oszmánok, amint azt a bejárat feletti felirat is hirdeti. A vár hányatott történelme során szolgált erődként, börtönként, a brit fennhatóság idején pedig sós raktárként is használták. Az építmény egy központi toronyból áll, amelyet bástyás fal vesz körül, bejárata pedig egy kis hídon keresztül érhető el a várárok felett. Napjainkban a vár védett műemlék, és lenyűgöző díszletként szolgál az évente megrendezett Paphos Aphrodite Fesztiválhoz. A tetőteraszról csodálatos kilátás nyílik a kikötőre és a város gazdag régészeti leleteire.",
      ro: "Castelul medieval din Paphos, care străjuiește marginea vestică a portului, este unul dintre cele mai emblematice repere ale orașului. Construit inițial de bizantini ca fortăreață pentru apărarea portului, a fost fortificat de dinastia Lusignan în secolul al XIII-lea, dar ulterior distrus de venețieni în 1570 pentru a preveni capturarea sa de către otomani. Structura masivă din piatră pe care o vedem astăzi a fost reconstruită de otomani în 1592, fapt atestat de o inscripție deasupra intrării. De-a lungul secolelor, castelul a avut diverse utilizări, servind drept fortăreață, închisoare și chiar depozit de sare în timpul administrației britanice. Edificiul constă dintr-un turn central înconjurat de un zid cu metereze, accesul făcându-se printr-un mic pod peste șanțul de apărare. În prezent, castelul este un monument protejat și găzduiește anual Festivalul Paphos Aphrodite, oferind un decor spectaculos. De pe terasa superioară, vizitatorii pot admira o vedere panoramică asupra portului.",
      en: "Paphos Medieval Castle, standing guard at the western edge of the city's harbour, is one of the most iconic and frequently photographed landmarks in Cyprus. Originally built as a Byzantine fort to protect the port, it was later expanded by the Lusignans in the 13th century, only to be dismantled by the Venetians in 1570 to prevent it from falling into Ottoman hands. The massive stone structure seen today is an Ottoman reconstruction dating back to 1592, as indicated by an inscription above its main entrance. Throughout its turbulent history, the castle has served multiple purposes, including as a fortress, a prison, and even a salt warehouse during the British colonial period. It consists of a sturdy central tower surrounded by a defensive wall, accessible via a small bridge spanning a moat. Today, the castle is a protected monument and serves as the majestic backdrop for the annual Paphos Aphrodite Festival opera performances. Its rooftop platform offers visitors sweeping views of the Mediterranean Sea.",
      es: "El castillo medieval de Pafos, que guarda el extremo occidental del puerto, es uno de los monumentos más icónicos de la ciudad. Originalmente construido por los bizantinos como una fortaleza para proteger el puerto, fue reforzado en el siglo XIII por los Lusignan, pero más tarde destruido por los venecianos en 1570 para evitar que cayera en manos de los otomanos. La estructura de piedra maciza actual fue reconstruida en 1592 por los otomanos, como indica una inscripción sobre la entrada. El castillo tiene una historia variada a sus espaldas y sirvió a lo largo de los siglos como fortaleza, prisión y, durante el dominio británico, incluso como almacén de sal. Consta de una torre central rodeada por un muro con almenas, a la que se accede por un pequeño puente sobre el foso. Hoy en día, el castillo es un monumento protegido y sirve como un impresionante telón de fondo para eventos culturales como el festival anual Paphos Aphrodite Festival. Desde la terraza de la azotea se ofrece una vista magnífica del puerto.",
      pt: "O castelo medieval de Pafos, que guarda a extremidade ocidental do porto, é um dos marcos mais icónicos da cidade. Originalmente construído pelos bizantinos como uma fortaleza para proteger o porto, foi reforçado no século XIII pelos Lusignans, mas mais tarde destruído pelos venezianos em 1570 para evitar que caísse nas mãos dos otomanos. A estrutura de pedra maciça atual foi reconstruída em 1592 pelos otomanos, como indica uma inscrição sobre a entrada. O castelo tem uma história variada e serviu ao longo dos séculos como fortaleza, prisão e, durante o domínio britânico, até como armazém de sal. Consiste numa torre central rodeada por uma muralha com ameias, à qual se acede por uma pequena ponte sobre o fosso. Hoje, o castelo é um monumento protegido e serve como um cenário impressionante para eventos culturais como o festival anual Paphos Aphrodite Festival. Do terraço no telhado oferece-se uma vista magnífica sobre o porto.",
      fr: "Le château médiéval de Paphos, qui garde l'extrémité ouest du port, est l'un des monuments les plus emblématiques de la ville. Construit à l'origine par les Byzantins comme forteresse pour protéger le port, il fut renforcé au XIIIe siècle par les Lusignan, puis détruit par les Vénitiens en 1570 pour éviter qu'il ne tombe aux mains des Ottomans. La structure actuelle en pierre massive a été reconstruite en 1592 par les Ottomans, comme l'indique une inscription au-dessus de l'entrée. Le château a une histoire mouvementée et a servi au fil des siècles de forteresse, de prison et même d'entrepôt de sel pendant la domination britannique. Il se compose d'une tour centrale entourée d'un mur crénelé et on y accède par un petit pont enjambant les douves. Aujourd'hui, le château est un monument protégé et sert de cadre impressionnant à des événements culturels tels que le festival annuel Paphos Aphrodite Festival. Depuis le toit-terrasse, on jouit d'une vue magnifique sur le port.",
    },
    factsAdvanced: {
      de: ["Die Osmanen bauten die Burg im Jahr 1592 komplett neu auf.", "Eine Inschrift über der Hauptpforte bestätigt den Wiederaufbau durch Ahmet Pascha.", "Die Briten nutzten die Festung bis 1935 als Lagerhaus für Salz.", "Das Gebäude ist Teil des UNESCO-Weltkulturerbes von Paphos.", "Die Burg verfügt über mehrere dunkle Kerkerzellen im Erdgeschoss.", "Der Zugang zur Burg erfolgt über eine schmale Steinbrücke."],
      hu: ["Az oszmánok 1592-ben építették újjá teljesen a várat.", "A főkapu feletti felirat megerősíti az Ahmet pasa általi újjáépítést.", "A britek 1935-ig sóraktárként használták az erődítményt.", "Az épület a paphoszi UNESCO világörökségi helyszín részét képezi.", "A vár földszintjén több sötét börtöncella is megtekinthető.", "A várba egy keskeny kőhídon keresztül lehet bejutni a várárok felett."],
      ro: ["Otomanii au reconstruit castelul complet în anul 1592.", "O inscripție deasupra porții principale confirmă refacerea ordonată de Ahmet Pașa.", "Britanicii au folosit fortificația ca depozit de sare până în anul 1935.", "Edificiul face parte din situl Patrimoniului Mondial UNESCO din Paphos.", "La parterul castelului se află mai multe celule de închisoare întunecate.", "Accesul în interior se face pe un pod de piatră îngust peste șanțul uscat."],
      en: ["The Ottomans completely rebuilt the castle in the year 1592.", "An inscription above the main gate confirms the reconstruction by Ahmet Pasha.", "The British utilized the fortress as a salt warehouse until 1935.", "The building is part of the Paphos UNESCO World Heritage Site.", "The castle features several dark dungeon cells on the ground floor.", "Entry to the castle is via a narrow stone bridge across the moat."],
      es: ["Los otomanos reconstruyeron el castillo por completo en el año 1592.", "Una inscripción sobre la puerta principal confirma la reconstrucción por Ahmet Pasha.", "Los británicos utilizaron la fortaleza como almacén de sal hasta 1935.", "El edificio forma parte del Patrimonio de la Humanidad de la UNESCO de Pafos.", "El castillo cuenta con varias celdas de mazmorras oscuras en la planta baja.", "El acceso al castillo se realiza a través de un estrecho puente de piedra."],
      pt: ["Os otomanos reconstruíram o castelo por completo no ano 1592.", "Uma inscrição sobre a porta principal confirma a reconstrução por Ahmet Pasha.", "Os britânicos utilizaram a fortaleza como armazém de sal até 1935.", "O edifício faz parte do Património Mundial da UNESCO de Pafos.", "O castelo possui várias celas de masmorras escuras no rés-do-chão.", "O acesso ao castelo é feito através de uma ponte estreita de pedra."],
      fr: ["Les Ottomans ont entièrement reconstruit le château en 1592.", "Une inscription au-dessus de la porte principale confirme la reconstruction par Ahmet Pacha.", "Les Britanniques ont utilisé la forteresse comme entrepôt de sel jusqu'en 1935.", "Le bâtiment fait partie du patrimoine mondial de l'UNESCO de Paphos.", "Le château possède plusieurs sombres cellules de cachot au rez-de-chaussée.", "L'accès au château se fait par un étroit pont de pierre."],
    }, image: "/poi-images/CY-005-paphos-castle.webp"},
  {
    id: "CY-005-adonis-baths", "sights": {
      "de": [
            {
                  "name": "House of Adonis",
                  "text": "Ein kleines Museum an den Adonis-Bädern, das sich mit der griechischen Mythologie befasst.",
                  "category": "museum",
                  "coords": [
                        32.435885,
                        34.87141
                  ]
            },
            {
                  "name": "Amphitheater",
                  "text": "Ein im klassischen Stil erbautes Freilichttheater in der Nähe der Adonis-Bäder.",
                  "category": "cultural",
                  "coords": [
                        32.433844,
                        34.870373
                  ]
            }
      ],
      "hu": [
            {
                  "name": "House of Adonis",
                  "text": "Kisméretű múzeum az Adonisz-fürdőnél, amely a görög mitológiával foglalkozik.",
                  "category": "museum",
                  "coords": [
                        32.435885,
                        34.87141
                  ]
            },
            {
                  "name": "Amphitheatre",
                  "text": "Klasszikus stílusban épült szabadtéri színház az Adonisz-fürdő közelében.",
                  "category": "cultural",
                  "coords": [
                        32.433844,
                        34.870373
                  ]
            }
      ],
      "ro": [
            {
                  "name": "House of Adonis",
                  "text": "Un mic muzeu situat la Băile lui Adonis, dedicat mitologiei grecești.",
                  "category": "museum",
                  "coords": [
                        32.435885,
                        34.87141
                  ]
            },
            {
                  "name": "Amphitheatre",
                  "text": "Un teatru în aer liber construit în stil clasic, situat lângă Băile lui Adonis.",
                  "category": "cultural",
                  "coords": [
                        32.433844,
                        34.870373
                  ]
            }
      ],
      "en": [
            {
                  "name": "House of Adonis",
                  "text": "A small museum at the Adonis Baths focusing on Greek mythology.",
                  "category": "museum",
                  "coords": [
                        32.435885,
                        34.87141
                  ]
            },
            {
                  "name": "Amphitheatre",
                  "text": "An open-air theatre built in a classical style, located near the Adonis Baths.",
                  "category": "cultural",
                  "coords": [
                        32.433844,
                        34.870373
                  ]
            }
      ]
},
    type: "landmark",
    parent: "CY-005",
    coords: [32.4436, 34.8697],
    name: { de: "Adonis-Bäder", hu: "Adonisz-fürdő", ro: "Băile lui Adonis", en: "Adonis Baths" },
    description: {
      de: "Ein malerischer Wasserfall und natürliches Schwimmbecken in der Nähe von Paphos.",
      hu: "Festői vízesés és természetes medence Páfosz közelében.",
      ro: "O cascadă pitorească și o piscină naturală lângă Paphos.",
      en: "A picturesque waterfall and natural swimming pool located near Paphos.",
      es: "Una pintoresca cascada y piscina natural cerca de Pafos.",
      pt: "Uma cascata pitoresca e piscina natural perto de Pafos.",
      fr: "Une cascade pittoresque et un bassin naturel près de Paphos.",
    },
    facts: {
      de: ["Der Legende nach trafen sich hier Adonis und Aphrodite.", "Unter dem Wasserfall befindet sich eine tiefe Lagune.", "Ein beliebter Ort für Naturliebhaber und Schwimmer."],
      hu: ["A legenda szerint Adonisz és Aphrodité itt találkoztak.", "A vízesés alatt egy mély lagúna található.", "A természetkedvelők és úszók kedvelt helye."],
      ro: ["Conform legendei, Adonis și Afrodita s-au întâlnit aici.", "Sub cascadă se află o lagună adâncă.", "Un loc popular pentru iubitorii de natură și înotători."],
      en: ["According to legend, Adonis and Aphrodite used to meet here.", "There is a deep lagoon underneath the waterfall.", "A popular spot for nature lovers and swimmers."],
      es: ["Según la leyenda, Adonis y Afrodita se encontraban aquí.", "Bajo la cascada se encuentra una profunda laguna.", "Un lugar popular para los amantes de la naturaleza y los nadadores."],
      pt: ["Segundo a lenda, Adónis e Afrodite encontravam-se aqui.", "Sob a cascata encontra-se uma lagoa profunda.", "Um local popular para amantes da natureza e nadadores."],
      fr: ["Selon la légende, Adonis et Aphrodite s'y retrouvaient.", "Un lagon profond se trouve sous la cascade.", "Un lieu prisé des amoureux de la nature et des baigneurs."],
    },
    descriptionAdvanced: {
      de: "Die Adonis-Bäder befinden sich in der Nähe des Dorfes Koili im Bezirk Paphos auf Zypern und stellen ein bedeutendes geologisches und mythologisches Denkmal dar. Der griechischen Mythologie zufolge war dieser Ort ein bevorzugter Treffpunkt der Göttin Aphrodite und ihres Liebhabers Adonis, wo der Legende nach auch viele ihrer Kinder geboren wurden. Die Anlage besteht aus zwei Ebenen natürlicher Wasserfälle, die in smaragdgrüne Felsenbecken stürzen, umgeben von dichter Vegetation und steilen Kalksteinfelsen. Historisch gesehen dienten diese Quellen als natürlicher Abkühlungsort für die Bewohner der rauen Akamas-Region und wurden über Jahrhunderte für die lokale Wasserversorgung genutzt. Heute umfasst der Standort ein kleines Museum in einer über 400 Jahre alten traditionellen Mühle, das Exponate zum zyprischen Landleben und zur antiken Geschichte zeigt. Das untere Becken erreicht eine Tiefe von etwa 5 Metern, während die umliegenden Pfade Ausblicke auf den Mavrokolympos-Staudamm und das Tal bieten.",
      hu: "Az Adonisz-fürdők Cipruson, Páfosz közelében, Koili falu mellett találhatók, és a sziget egyik legjelentősebb geológiai és mitológiai emlékhelyét alkotják. A görög mitológia szerint ez a hely volt Aphrodité istennő és szerelme, Adonisz kedvenc találkozóhelye, és a legenda úgy tartja, hogy számos gyermekük is itt jött a világra. A helyszínen két szinten természetes vízesések zúdulnak le smaragdzöld sziklamedencékbe, amelyeket sűrű növényzet és meredek mészkőfalak vesznek körül. Történelmileg a terület természetes hűsölőhelyként szolgált az Akamasz-félsziget zord vidékén élők számára, és évszázadokon át fontos vízforrásként is funkcionált. Napjainkban a helyszínen egy 400 éves hagyományos malomban kialakított kis múzeum is működik, amely a ciprusi vidéki élethez és az antik történelemhez kapcsolódó tárgyakat mutat be. Az alsó medence körülbelül 5 méter mély, a környékbeli ösvények pedig rálátást biztosítanak a Mavrokolympos-gátra és a völgyre.",
      ro: "Băile lui Adonis sunt situate lângă satul Koili, în districtul Paphos din Cipru, reprezentând un important monument geologic și mitologic al insulei. Conform mitologiei grecești, acest sit a fost locul preferat de întâlnire al zeiței Afrodita și al iubitului ei Adonis, fiind locul unde se spune că s-au născut mulți dintre copiii lor. Locația prezintă două niveluri de cascade naturale care se varsă în bazine de un verde smarald, înconjurate de vegetație densă și stânci abrupte de calcar. Din punct de vedere istoric, zona a servit ca loc natural de răcorire pentru locuitorii regiunii accidentate Akamas și a fost utilizată timp de secole pentru alimentarea locală cu apă. Astăzi, situl include un mic muzeu găzduit într-o moară tradițională veche de peste 400 de ani, care expune artefacte legate de viața rurală cipriotă și istoria antică. Bazinul inferior are o adâncime de aproximativ 5 metri, în timp ce traseele din jur oferă vederi panoramice spre barajul Mavrokolympos și valea învecinată.",
      en: "The Adonis Baths Waterfalls are situated near the village of Koili in the Paphos district of Cyprus, serving as a significant geological and mythological landmark. According to Greek mythology, this site was a favorite meeting place for the goddess Aphrodite and her lover Adonis, and it is where many of their children were allegedly born. The site features two levels of natural waterfalls cascading into emerald green pools surrounded by dense vegetation and steep limestone cliffs. Historically, the area served as a natural cooling spot for inhabitants of the rugged Akamas region and was utilized for centuries as a vital water source. Today, the location includes a small museum housed in a 400-year-old traditional water mill, which displays artifacts related to Cypriot rural life and ancient history. The lower pool is approximately 5 meters deep, while the surrounding trails offer views of the Mavrokolympos dam and the expansive valley.",
      es: "Los Baños de Adonis se encuentran cerca del pueblo de Koili, en el distrito de Pafos, Chipre, y constituyen un importante monumento geológico y mitológico. Según la mitología griega, este lugar era el punto de encuentro favorito de la diosa Afrodita y su amante Adonis, donde la leyenda cuenta que nacieron muchos de sus hijos. El complejo consta de dos niveles de cascadas naturales que caen en pozas de roca color esmeralda, rodeadas de densa vegetación y escarpados acantilados de piedra caliza. Históricamente, estos manantiales sirvieron como lugar de enfriamiento natural para los habitantes de la agreste región de Akamas y se utilizaron durante siglos para el suministro local de agua. Hoy en día, el sitio incluye un pequeño museo en un molino tradicional de más de 400 años de antigüedad, que exhibe piezas de la vida rural chipriota y la historia antigua. La poza inferior alcanza una profundidad de unos 5 metros, mientras que los senderos circundantes ofrecen vistas de la presa de Mavrokolympos y del valle.",
      pt: "Os Banhos de Adónis encontram-se perto da aldeia de Koili, no distrito de Pafos, em Chipre, e constituem um importante monumento geológico e mitológico. Segundo a mitologia grega, este local era o ponto de encontro favorito da deusa Afrodite e do seu amante Adónis, onde a lenda diz que nasceram muitos dos seus filhos. O complexo consiste em dois níveis de cascatas naturais que caem em bacias de rocha cor de esmeralda, rodeadas por vegetação densa e falésias íngremes de calcário. Historicamente, estas nascentes serviram como local de arrefecimento natural para os habitantes da região agreste de Akamas e foram utilizadas durante séculos para o abastecimento local de água. Hoje, o local inclui um pequeno museu num moinho tradicional com mais de 400 anos, que exibe peças da vida rural cipriota e da história antiga. A bacia inferior atinge uma profundidade de cerca de 5 metros, enquanto os trilhos circundantes oferecem vistas para a barragem de Mavrokolympos e para o vale.",
      fr: "Les bains d'Adonis sont situés près du village de Koili, dans le district de Paphos à Chypre, et constituent un monument géologique et mythologique majeur. Selon la mythologie grecque, cet endroit était un lieu de rencontre privilégié de la déesse Aphrodite et de son amant Adonis, où la légende raconte que nombre de leurs enfants sont nés. Le site se compose de deux niveaux de cascades naturelles tombant dans des bassins rocheux vert émeraude, entourés d'une végétation dense et de falaises de calcaire escarpées. Historiquement, ces sources servaient de lieu de rafraîchissement naturel pour les habitants de la région sauvage d'Akamas et ont été utilisées pendant des siècles pour l'approvisionnement local en eau. Aujourd'hui, le site comprend un petit musée dans un moulin traditionnel vieux de plus de 400 ans, présentant des objets de la vie rurale chypriote et de l'histoire antique. Le bassin inférieur atteint une profondeur d'environ 5 mètres, tandis que les sentiers environnants offrent des vues sur le barrage de Mavrokolympos et la vallée.",
    },
    factsAdvanced: {
      de: ["Liegt 12 km nördlich von Paphos in der Nähe des Dorfes Koili.", "Zwei Ebenen natürlicher Wasserfälle mit smaragdgrünen Becken.", "Mythologischer Geburtsort der Kinder von Aphrodite und Adonis.", "Beherbergt ein Museum in einer 400 Jahre alten Wassermühle.", "Das Wasser speist den Mavrokolympos-Fluss und den nahen Staudamm.", "Eingangsbereich mit einer 10 Meter hohen Statue der Aphrodite."],
      hu: ["Páfosztól 12 km-re északra, Koili falu közelében található.", "Két szinten elhelyezkedő természetes vízesések smaragdzöld medencékkel.", "Aphrodité és Adonisz gyermekeinek mitológiai születési helye.", "Egy 400 éves vízimalomban kialakított múzeumnak ad otthont.", "A víz a Mavrokolympos-folyót és a közeli gátat táplálja.", "A bejáratnál egy 10 méter magas Aphrodité-szobor látható."],
      ro: ["Situat la 12 km nord de Paphos, lângă satul Koili.", "Prezintă două niveluri de cascade naturale cu bazine de smarald.", "Locul mitologic de naștere al copiilor Afroditei și ai lui Adonis.", "Găzduiește un muzeu într-o moară de apă veche de 400 de ani.", "Apa alimentează râul Mavrokolympos și barajul din apropiere.", "Intrarea este marcată de o statuie a Afroditei înaltă de 10 metri."],
      en: ["Located 12 km north of Paphos near the village of Koili.", "Features two natural waterfalls on different elevation levels.", "Mythological birthplace of the children of Aphrodite and Adonis.", "Houses a museum inside a 400-year-old traditional water mill.", "The water feeds into the Mavrokolympos river and nearby dam.", "Includes a 10-meter high statue of Aphrodite at the entrance."],
      es: ["Situado a 12 km al norte de Pafos, cerca del pueblo de Koili.", "Dos niveles de cascadas naturales con pozas color esmeralda.", "Lugar de nacimiento mitológico de los hijos de Afrodita y Adonis.", "Alberga un museo en un molino de agua de 400 años de antigüedad.", "El agua alimenta el río Mavrokolympos y la presa cercana.", "Zona de entrada con una estatua de Afrodita de 10 metros de altura."],
      pt: ["Situado a 12 km a norte de Pafos, perto da aldeia de Koili.", "Dois níveis de cascatas naturais com bacias cor de esmeralda.", "Local de nascimento mitológico dos filhos de Afrodite e Adónis.", "Abriga um museu num moinho de água com 400 anos.", "A água alimenta o rio Mavrokolympos e a barragem próxima.", "Área de entrada com uma estátua de Afrodite de 10 metros de altura."],
      fr: ["Situé à 12 km au nord de Paphos, près du village de Koili.", "Deux niveaux de cascades naturelles avec des bassins émeraude.", "Lieu de naissance mythologique des enfants d'Aphrodite et d'Adonis.", "Abrite un musée dans un moulin à eau vieux de 400 ans.", "L'eau alimente la rivière Mavrokolympos et le barrage voisin.", "L'entrée comporte une statue d'Aphrodite haute de 10 mètres."],
    },
    image: "/poi-images/CY-005-adonis-baths.webp",
  }
];

export const cyprusAllPoi: POI[] = [cyprusCountry,
  ...cyprusRegions, ...cyprusOtherPoi];

