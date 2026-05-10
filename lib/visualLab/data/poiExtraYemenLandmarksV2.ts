import type { POI } from "./poi";

export const poiExtraYemenLandmarksV2: POI[] = [
  {
    id: "bab-al-yemen-landmarks-v2",
    type: "monument",
    parent: "YE-SA",
    coords: [44.2153, 15.3503],
    name: { de: "Bab al-Jemen", hu: "Bab al-Jemen", ro: "Bab al-Yemen", en: "Bab al-Yemen" },
    description: {
      de: "Das Bab al-Jemen ist das historische Haupttor der Altstadt von Sanaa. Mit seiner beeindruckenden traditionellen jemenitischen Ziegelarchitektur markiert es den Eingang zu einem über 1.000 Jahre alten Handelsviertel.",
      hu: "A Bab al-Jemen a szanaai óváros történelmi főkapuja. Lenyűgöző hagyományos jemeni téglaépítészetével egy több mint 1000 éves kereskedelmi negyed bejáratát jelzi.",
      ro: "Bab al-Yemen este poarta principală istorică a orașului vechi Sana'a. Cu arhitectura sa tradițională yemenită impresionantă din cărămidă, marchează intrarea într-un cartier comercial vechi de peste 1000 de ani.",
      en: "Bab al-Yemen is the historic main gate of the Old City of Sanaa. With its impressive traditional Yemeni brick architecture, it marks the entrance to a commercial district over 1,000 years old."
    },
    facts: {
      de: ["Das einzige erhaltene Tor der alten Stadtmauer", "Führt direkt in den traditionellen Suq", "Über 1.000 Jahre alt"],
      hu: ["A régi városfal egyetlen fennmaradt kapuja", "Közvetlenül a hagyományos szúkba vezet", "Több mint 1000 éves"],
      ro: ["Singura poartă rămasă din vechiul zid al orașului", "Conduce direct în souq-ul tradițional", "Are o vechime de peste 1000 de ani"],
      en: ["The only surviving gate of the old city wall", "Leads directly into the traditional souq", "Over 1,000 years old"]
    }, image: "/poi-images/bab-al-yemen-landmarks-v2.webp"},
  {
    id: "dar-al-hajar-landmarks-v2",
    type: "landmark",
    parent: "YE-SA",
    coords: [44.1264, 15.4397],
    name: { de: "Dar al-Hadschar", hu: "Dar al-Hadzsar", ro: "Dar al-Hajar", en: "Dar al-Hajar" },
    description: {
      de: "Der Dar al-Hadschar, auch als Felsenpalast bekannt, ist ein ikonisches Gebäude im Wadi Dhar. Er wurde in den 1930er Jahren als Sommerresidenz für Imam Yahya direkt auf eine markante Felsnadel gebaut.",
      hu: "A Dar al-Hadzsar, más néven Sziklapalota, a Wadi Dhar egy ikonikus épülete. Az 1930-as években épült Jahja imám nyári rezidenciájaként, közvetlenül egy sziklaoszlop tetejére.",
      ro: "Dar al-Hajar, cunoscut și sub numele de Palatul de Stâncă, este o clădire iconică din Wadi Dhar. A fost construit în anii 1930 ca reședință de vară pentru Imamul Yahya, direct pe un vârf de stâncă.",
      en: "Dar al-Hajar, also known as the Rock Palace, is an iconic building in Wadi Dhar. It was built in the 1930s as a summer residence for Imam Yahya, directly atop a prominent rock pinnacle."
    },
    facts: {
      de: ["Auf einer einzelnen Felsnadel erbaut", "Diente als Sommerresidenz von Imam Yahya", "Fünfstöckige Architektur"],
      hu: ["Egyetlen sziklaoszlopra épült", "Jahja imám nyári rezidenciája volt", "Ötemeletes építészet"],
      ro: ["Construit pe un singur vârf de stâncă", "A servit drept reședință de vară pentru Imamul Yahya", "Arhitectură pe cinci etaje"],
      en: ["Built on a single rock pinnacle", "Served as Imam Yahya's summer residence", "Five-story architecture"]
    }, image: "/poi-images/dar-al-hajar-landmarks-v2.webp"},
  {
    id: "al-saleh-mosque-landmarks-v2",
    type: "landmark",
    parent: "YE-SA",
    coords: [44.2003, 15.3134],
    name: { de: "Al-Saleh-Moschee", hu: "Al-Száleh mecset", ro: "Moscheea Al-Saleh", en: "Al Saleh Mosque" },
    description: {
      de: "Die Al-Saleh-Moschee ist die größte moderne Moschee des Jemen, eröffnet im Jahr 2008 in Sanaa. Sie verbindet jemenitische Architektur mit modernen Bautechniken und fasst bis zu 44.000 Gläubige.",
      hu: "Az Al-Száleh mecset Jemen legnagyobb modern mecsetje, amelyet 2008-ban nyitottak meg Szanaában. A jemeni építészetet modern építési technikákkal ötvözi, és akár 44 000 hívő befogadására is alkalmas.",
      ro: "Moscheea Al-Saleh este cea mai mare moschee modernă din Yemen, deschisă în 2008 în Sana'a. Combină arhitectura yemenită cu tehnicile moderne de construcție și poate găzdui până la 44.000 de credincioși.",
      en: "The Al Saleh Mosque is the largest modern mosque in Yemen, opened in 2008 in Sanaa. It blends Yemeni architecture with modern construction techniques and accommodates up to 44,000 worshippers."
    },
    facts: {
      de: ["Jemens größte Moschee", "Bietet Platz für 44.000 Menschen", "Eröffnet im Jahr 2008"],
      hu: ["Jemen legnagyobb mecsetje", "44 000 ember befogadására alkalmas", "2008-ban nyitották meg"],
      ro: ["Cea mai mare moschee din Yemen", "Poate găzdui 44.000 de persoane", "Inaugurată în anul 2008"],
      en: ["Yemen's largest mosque", "Accommodates 44,000 people", "Opened in 2008"]
    }, image: "/poi-images/al-saleh-mosque-landmarks-v2.webp"},
  {
    id: "great-mosque-of-sanaa-landmarks-v2",
    type: "monument",
    parent: "YE-SA",
    coords: [44.2152, 15.3533],
    name: { de: "Große Moschee von Sanaa", hu: "Szanaai nagymecset", ro: "Marea Moschee din Sana'a", en: "Great Mosque of Sanaa" },
    description: {
      de: "Die Große Moschee von Sanaa ist eine der ältesten Moscheen der Welt und wurde noch zu Lebzeiten des Propheten Mohammed gegründet. Ihre alten Säulen und die Bibliothek beherbergen wertvolle islamische Manuskripte.",
      hu: "A szanaai nagymecset a világ egyik legrégebbi mecsetje, amelyet még Mohamed próféta életében alapítottak. Ősi oszlopai és könyvtára értékes iszlám kéziratokat őriznek.",
      ro: "Marea Moschee din Sana'a este una dintre cele mai vechi moschei din lume, fondată în timpul vieții profetului Mahomed. Stâlpii săi vechi și biblioteca găzduiesc manuscrise islamice valoroase.",
      en: "The Great Mosque of Sanaa is one of the oldest mosques in the world, founded during the lifetime of the Prophet Muhammad. Its ancient pillars and library house valuable Islamic manuscripts."
    },
    facts: {
      de: ["Eine der ältesten Moscheen der Welt", "Bewahrt alte Koranfragmente", "UNESCO-Weltkulturerbe als Teil der Altstadt"],
      hu: ["A világ egyik legrégebbi mecsetje", "Ősi Korán-töredékeket őriz", "Az óváros részeként UNESCO világörökség"],
      ro: ["Una dintre cele mai vechi moschei din lume", "Păstrează fragmente antice din Coran", "Patrimoniu UNESCO ca parte a orașului vechi"],
      en: ["One of the oldest mosques in the world", "Preserves ancient Quranic fragments", "UNESCO World Heritage as part of the Old City"]
    }, image: "/poi-images/great-mosque-of-sanaa-landmarks-v2.webp"},
  {
    id: "tawila-cisterns-landmarks-v2",
    type: "landmark",
    parent: "YE-AD",
    coords: [45.0322, 12.7758],
    name: { de: "Tawila-Zisternen", hu: "Tawila-ciszternák", ro: "Cisternele Tawila", en: "Cisterns of Tawila" },
    description: {
      de: "Die Tawila-Zisternen in Aden sind ein antikes Wassermanagementsystem aus vernetzten Becken vulkanischen Ursprungs. Sie wurden errichtet, um Regenwasser aufzufangen und Überschwemmungen in der Stadt zu verhindern.",
      hu: "Az ádeni Tawila-ciszternák egy ősi vízgazdálkodási rendszer, amely vulkanikus eredetű, összekapcsolt medencékből áll. Azért építették, hogy összegyűjtse az esővizet, és megakadályozza a város áradásait.",
      ro: "Cisternele Tawila din Aden reprezintă un sistem antic de gestionare a apei, format din bazine vulcanice interconectate. Au fost construite pentru a colecta apa de ploaie și a preveni inundațiile în oraș.",
      en: "The Tawila Cisterns in Aden are an ancient water management system of interconnected volcanic basins. They were built to collect rainwater and prevent flooding in the city."
    },
    facts: {
      de: ["Fassungsvermögen von Millionen Litern", "In Vulkangestein geschlagen", "Stammen vermutlich aus der himyaritischen Zeit"],
      hu: ["Több millió literes kapacitás", "Vulkanikus kőzetbe vájták", "Valószínűleg a himjarita időszakból származnak"],
      ro: ["Capacitate de milioane de litri", "Sculptate în rocă vulcanică", "Datează probabil din perioada himyarită"],
      en: ["Capacity of millions of liters", "Carved into volcanic rock", "Likely date back to the Himyarite period"]
    }, image: "/poi-images/tawila-cisterns-landmarks-v2.webp"},
  {
    id: "sira-fortress-landmarks-v2",
    type: "monument",
    parent: "YE-AD",
    coords: [45.0485, 12.7781],
    name: { de: "Sira-Festung", hu: "Sira erőd", ro: "Fortăreața Sira", en: "Sira Fortress" },
    description: {
      de: "Die Sira-Festung thront auf einer vulkanischen Insel vor der Küste von Aden. Sie wurde im 11. Jahrhundert errichtet und spielte eine entscheidende Rolle bei der Verteidigung der Stadt gegen zahlreiche Invasoren.",
      hu: "A Sira erőd egy vulkanikus szigeten magasodik Áden partjainál. A 11. században épült, és döntő szerepet játszott a város védelmében számos megszállóval szemben.",
      ro: "Fortăreața Sira se înalță pe o insulă vulcanică în largul coastei Adenului. A fost construită în secolul al XI-lea și a jucat un rol crucial în apărarea orașului împotriva numeroșilor invadatori.",
      en: "Sira Fortress is perched on a volcanic island off the coast of Aden. Built in the 11th century, it played a crucial role in defending the city against numerous invaders."
    },
    facts: {
      de: ["Auf der Vulkaninsel Sira erbaut", "Wichtige historische Verteidigungsanlage", "Bietet Panoramablick auf Aden"],
      hu: ["A Sira vulkanikus szigetre épült", "Fontos történelmi védelmi építmény", "Panorámás kilátást nyújt Ádenre"],
      ro: ["Construită pe insula vulcanică Sira", "Importantă structură defensivă istorică", "Oferă vederi panoramice asupra Adenului"],
      en: ["Built on the volcanic Sira Island", "Important historical defensive structure", "Offers panoramic views of Aden"]
    }, image: "/poi-images/sira-fortress-landmarks-v2.webp"},
  {
    id: "qahira-castle-taiz-landmarks-v2",
    type: "monument",
    parent: "YE-TA",
    coords: [44.0153, 13.5701],
    name: { de: "Kairo-Zitadelle von Taiz", hu: "Kairó-citadella (Taiz)", ro: "Castelul Cairo din Taiz", en: "Cairo Castle of Taiz" },
    description: {
      de: "Die Kairo-Zitadelle (Qal'at al-Qahira) thront auf einem markanten Felsvorsprung über Taiz. Sie wurde von den Sulaihiden erbaut und diente jahrhundertelang als Festung und königliche Residenz der Rasuliden.",
      hu: "A Kairó-citadella (Qal'at al-Qahira) egy kiemelkedő sziklás hegyfokon magasodik Taiz felett. A szulajhidák építették, és évszázadokon át erődként és a raszulidák királyi rezidenciájaként szolgált.",
      ro: "Cetatea Cairo (Qal'at al-Qahira) se înalță pe un promontoriu stâncos deasupra orașului Taiz. A fost construită de sulayhizi și a servit timp de secole ca fortăreață și reședință regală a rasulizilor.",
      en: "The Cairo Castle (Qal'at al-Qahira) sits on a prominent rocky outcrop above Taiz. Built by the Sulayhids, it served for centuries as a fortress and the royal residence of the Rasulids."
    },
    facts: {
      de: ["Überblickt die gesamte Stadt Taiz", "Hauptresidenz der Rasuliden-Dynastie", "Wurde teilweise aufwendig restauriert"],
      hu: ["Az egész Taiz városára kilátás nyílik", "A raszulida dinasztia fő rezidenciája volt", "Részben gondosan felújították"],
      ro: ["Domină întregul oraș Taiz", "Reședința principală a dinastiei rasulizilor", "A fost parțial restaurată cu grijă"],
      en: ["Overlooks the entire city of Taiz", "Main residence of the Rasulid dynasty", "Has been partially and extensively restored"]
    }, image: "/poi-images/qahira-castle-taiz-landmarks-v2.webp"},
  {
    id: "ashrafiya-mosque-landmarks-v2",
    type: "monument",
    parent: "YE-TA",
    coords: [44.0195, 13.5756],
    name: { de: "Al-Aschrafiya-Moschee", hu: "Al-Asrafija mecset", ro: "Moscheea Al-Ashrafiya", en: "Al-Ashrafiya Mosque" },
    description: {
      de: "Die Al-Aschrafiya-Moschee in Taiz ist eines der prächtigsten Beispiele rasulidischer Architektur. Sie ist bekannt für ihre strahlend weißen Kuppeln, ihre Zwillingstürme und die farbenfrohen Fresken im Innenraum.",
      hu: "A taizi Al-Asrafija mecset a raszulida építészet egyik legpompásabb példája. Híres ragyogó fehér kupoláiról, ikertornyairól és a belső tér színes freskóiról.",
      ro: "Moscheea Al-Ashrafiya din Taiz este unul dintre cele mai magnifice exemple de arhitectură rasulidă. Este cunoscută pentru cupolele sale albe strălucitoare, turnurile gemene și frescele colorate din interior.",
      en: "The Al-Ashrafiya Mosque in Taiz is one of the most magnificent examples of Rasulid architecture. It is known for its brilliant white domes, twin minarets, and colorful interior frescoes."
    },
    facts: {
      de: ["Erbaut im 13. oder 14. Jahrhundert", "Beherbergt wertvolle rasulidische Fresken", "Besitzt charakteristische weiße Kuppeln"],
      hu: ["A 13. vagy 14. században épült", "Értékes raszulida freskókat őriz", "Jellegzetes fehér kupolákkal rendelkezik"],
      ro: ["Construită în secolul al XIII-lea sau al XIV-lea", "Adăpostește fresce rasulide valoroase", "Are cupole albe caracteristice"],
      en: ["Built in the 13th or 14th century", "Houses valuable Rasulid frescoes", "Features distinctive white domes"]
    }, image: "/poi-images/ashrafiya-mosque-landmarks-v2.webp"},
  {
    id: "shibam-skyscrapers-landmarks-v2",
    type: "icon",
    parent: "YE-HD",
    coords: [48.6259, 15.9262],
    name: { de: "Lehmhochhäuser von Shibam", hu: "Sibámi vályogfelhőkarcolók", ro: "Zgârie-norii din lut de la Shibam", en: "Mud Skyscrapers of Shibam" },
    description: {
      de: "Die ummauerte Stadt Shibam im Wadi Hadramaut ist als 'Manhattan der Wüste' bekannt. Ihre bis zu elfstöckigen Lehmhochhäuser sind eine architektonische Meisterleistung und bieten seit dem 16. Jahrhundert Schutz vor Überschwemmungen.",
      hu: "A Wadi Hadramautban található, fallal körülvett Sibám várost a 'sivatag Manhattanjeként' ismerik. Az akár tizenegy emeletes vályogfelhőkarcolók építészeti remekművek, és a 16. század óta nyújtanak védelmet az áradások ellen.",
      ro: "Orașul fortificat Shibam din Wadi Hadramaut este cunoscut ca 'Manhattan-ul deșertului'. Zgârie-norii săi din lut, cu până la unsprezece etaje, sunt o capodoperă arhitecturală, oferind protecție împotriva inundațiilor din secolul al XVI-lea.",
      en: "The walled city of Shibam in Wadi Hadramaut is known as the 'Manhattan of the Desert'. Its mud skyscrapers, up to eleven stories high, are an architectural masterpiece providing protection from floods since the 16th century."
    },
    facts: {
      de: ["Das Manhattan der Wüste", "Älteste Hochhausstadt der Welt", "UNESCO-Weltkulturerbe"],
      hu: ["A sivatag Manhattanje", "A világ legrégebbi felhőkarcoló-városa", "UNESCO világörökség"],
      ro: ["Manhattan-ul deșertului", "Cel mai vechi oraș de zgârie-nori din lume", "Patrimoniu mondial UNESCO"],
      en: ["The Manhattan of the Desert", "Oldest skyscraper city in the world", "UNESCO World Heritage Site"]
    }, image: "/poi-images/shibam-skyscrapers-landmarks-v2.webp"},
  {
    id: "great-dam-marib-landmarks-v2",
    type: "monument",
    parent: "YE-MA",
    coords: [45.2415, 15.4024],
    name: { de: "Großer Damm von Marib", hu: "Máribi nagy gát", ro: "Marele Baraj din Marib", en: "Great Dam of Marib" },
    description: {
      de: "Die Ruinen des historischen Damms von Marib sind ein Wunderwerk antiker Ingenieurskunst. Dieses Bauwerk der Sabäer transformierte die Wüste für über tausend Jahre in eine blühende Oase, bevor es im 6. Jahrhundert brach.",
      hu: "A történelmi máribi gát romjai az ókori mérnöki munka csodái. A szabeusok építménye több mint ezer évig virágzó oázissá változtatta a sivatagot, mielőtt a 6. században átszakadt volna.",
      ro: "Ruinele barajului istoric din Marib reprezintă o minune a ingineriei antice. Această structură a sabeenilor a transformat deșertul într-o oază înfloritoare timp de peste o mie de ani, înainte de a ceda în secolul al VI-lea.",
      en: "The ruins of the historic Dam of Marib are a marvel of ancient engineering. This Sabaean structure transformed the desert into a flourishing oasis for over a thousand years before breaking in the 6th century."
    },
    facts: {
      de: ["Wunder der antiken Ingenieurskunst", "Bruch des Damms wird im Koran erwähnt", "Grundstein der sabäischen Zivilisation"],
      hu: ["Az ókori mérnöki munka csodája", "A gát átszakadását a Korán is említi", "A szabeus civilizáció alapköve"],
      ro: ["Minune a ingineriei antice", "Ruperea barajului este menționată în Coran", "Piatra de temelie a civilizației sabee"],
      en: ["Marvel of ancient engineering", "The breaking of the dam is mentioned in the Quran", "Cornerstone of the Sabaean civilization"]
    }, image: "/poi-images/great-dam-marib-landmarks-v2.webp"},
  {
    id: "awam-temple-landmarks-v2",
    type: "monument",
    parent: "YE-MA",
    coords: [45.3533, 15.4035],
    name: { de: "Awam-Tempel", hu: "Avám-templom", ro: "Templul Awam", en: "Awam Temple" },
    description: {
      de: "Der Awam-Tempel, auch als Mahram Bilqis bekannt, ist eine riesige sabäische Kultstätte nahe Marib. Der dem Mondgott Almaqah gewidmete Komplex war über Jahrhunderte ein wichtiges religiöses Pilgerzentrum Südarabiens.",
      hu: "Az Avám-templom, más néven Mahram Bilkisz, egy hatalmas szabeus kultuszhely Márib közelében. Az Almakah holdistennek szentelt komplexum évszázadokon át Dél-Arábia fontos vallási zarándokközpontja volt.",
      ro: "Templul Awam, cunoscut și sub numele de Mahram Bilqis, este un vast lăcaș de cult sabean lângă Marib. Dedicat zeului lunii Almaqah, complexul a fost un important centru de pelerinaj religios în sudul Arabiei timp de secole.",
      en: "The Awam Temple, also known as Mahram Bilqis, is a vast Sabaean sanctuary near Marib. Dedicated to the moon god Almaqah, the complex was a major religious pilgrimage center of South Arabia for centuries."
    },
    facts: {
      de: ["Dem sabäischen Mondgott Almaqah gewidmet", "Auch bekannt als Mahram Bilqis (Heiligtum der Königin von Saba)", "Umfangreiche Ausgrabungen durch Archäologen"],
      hu: ["Almakah szabeus holdistennek szentelték", "Mahram Bilkisz (Sába királynőjének szentélye) néven is ismert", "Kiterjedt régészeti ásatások helyszíne"],
      ro: ["Dedicat zeului sabean al lunii Almaqah", "Cunoscut și ca Mahram Bilqis (Sanctuarul Reginei din Saba)", "Excavații extinse efectuate de arheologi"],
      en: ["Dedicated to the Sabaean moon god Almaqah", "Also known as Mahram Bilqis (Sanctuary of the Queen of Sheba)", "Site of extensive archaeological excavations"]
    }, image: "/poi-images/awam-temple-landmarks-v2.webp"},
  {
    id: "baran-temple-landmarks-v2",
    type: "monument",
    parent: "YE-MA",
    coords: [45.3422, 15.4265],
    name: { de: "Baran-Tempel", hu: "Barán-templom", ro: "Templul Baran", en: "Baran Temple" },
    description: {
      de: "Der Baran-Tempel, bekannt für seine sechs charakteristischen monolithischen Säulen, ist eine weitere bedeutende sabäische Stätte in Marib. Auch er wurde dem Gott Almaqah gewidmet und zeugt vom Reichtum der Weihrauchstraße.",
      hu: "A hat jellegzetes monolitikus oszlopáról ismert Barán-templom egy másik jelentős szabeus lelőhely Máribban. Szintén Almakah istennek szentelték, és a Tömjénút gazdagságáról tanúskodik.",
      ro: "Templul Baran, cunoscut pentru cele șase coloane monolitice caracteristice, este un alt sit sabean important din Marib. A fost de asemenea dedicat zeului Almaqah și stă mărturie bogăției Drumului Tămâiei.",
      en: "The Baran Temple, known for its six distinctive monolithic pillars, is another major Sabaean site in Marib. Also dedicated to the god Almaqah, it bears witness to the wealth of the Incense Route."
    },
    facts: {
      de: ["Bekannt als der 'Thron der Bilqis'", "Besitzt markante monolithische Säulen", "Wichtige religiöse Stätte der Sabäer"],
      hu: ["'Bilkisz trónja' néven ismert", "Jellegzetes monolitikus oszlopokkal rendelkezik", "A szabeusok fontos vallási helyszíne"],
      ro: ["Cunoscut ca 'Tronul lui Bilqis'", "Are coloane monolitice distinctive", "Important sit religios al sabeenilor"],
      en: ["Known as the 'Throne of Bilqis'", "Features distinctive monolithic pillars", "Important religious site of the Sabaeans"]
    }, image: "/poi-images/baran-temple-landmarks-v2.webp"},
  {
    id: "al-mihdar-minaret-landmarks-v2",
    type: "monument",
    parent: "YE-HD",
    coords: [48.9954, 16.0521],
    name: { de: "Al-Mihdar-Minarett", hu: "Al-Mihdar minaret", ro: "Minaretul Al-Mihdar", en: "Al-Mihdar Minaret" },
    description: {
      de: "Das Minarett der Al-Mihdar-Moschee in Tarim ist mit etwa 50 Metern das höchste Lehmminarett der Welt. Es besticht durch seine leuchtend weiße Kalksteinfassade und ist ein Symbol für die islamische Gelehrsamkeit der Stadt.",
      hu: "A tarimi Al-Mihdar mecset minaretje mintegy 50 méterével a világ legmagasabb vályogminaretje. Ragyogó fehér mészkőhomlokzatával lenyűgöző látvány, és a város iszlám tudományosságának szimbóluma.",
      ro: "Minaretul moscheii Al-Mihdar din Tarim, cu o înălțime de aproximativ 50 de metri, este cel mai înalt minaret din lut din lume. Cu fațada sa de un alb strălucitor, este un simbol al erudiției islamice a orașului.",
      en: "The minaret of the Al-Mihdar Mosque in Tarim, at about 50 meters, is the tallest mud-brick minaret in the world. With its brilliant white limestone wash, it stands as a symbol of the city's Islamic scholarship."
    },
    facts: {
      de: ["Das höchste Lehmminarett der Welt", "Rund 50 Meter hoch", "Zentrum der Gelehrtenstadt Tarim"],
      hu: ["A világ legmagasabb vályogminaretje", "Körülbelül 50 méter magas", "Tarim tudósvárosának központja"],
      ro: ["Cel mai înalt minaret din lut din lume", "Are aproximativ 50 de metri înălțime", "Centrul orașului savanților Tarim"],
      en: ["The tallest mud-brick minaret in the world", "Approximately 50 meters high", "Center of the scholarly city of Tarim"]
    }, image: "/poi-images/al-mihdar-minaret-landmarks-v2.webp"},
  {
    id: "shaharah-bridge-landmarks-v2",
    type: "landmark",
    parent: "YE-AM",
    coords: [43.6961, 16.1837],
    name: { de: "Brücke von Shaharah", hu: "Sahara hídja", ro: "Podul din Shaharah", en: "Shaharah Bridge" },
    description: {
      de: "Die Brücke von Shaharah ist eine atemberaubende steinerne Bogenbrücke aus dem 17. Jahrhundert, die eine tiefe Schlucht überspannt. Sie verbindet zwei Berggipfel in den unwirtlichen Hängen des nördlichen Jemen.",
      hu: "A Sahara hídja egy lélegzetelállító, 17. századi kő ívhíd, amely egy mély szurdokon ível át. Két hegycsúcsot köt össze Észak-Jemen zord hegyoldalain.",
      ro: "Podul din Shaharah este un pod uluitor din piatră cu arc din secolul al XVII-lea, care traversează un defileu adânc. Leagă două vârfuri muntoase pe pantele neprimitoare ale nordului Yemenului.",
      en: "The Shaharah Bridge is a breathtaking 17th-century stone arch bridge that spans a deep gorge. It connects two mountain peaks in the unforgiving slopes of northern Yemen."
    },
    facts: {
      de: ["Erbaut im 17. Jahrhundert", "Überspannt eine 300 Meter tiefe Schlucht", "Bekanntes Fotomotiv des Jemen"],
      hu: ["A 17. században épült", "Egy 300 méter mély szurdokon ível át", "Jemen híres fotótémája"],
      ro: ["Construit în secolul al XVII-lea", "Traversează un defileu de 300 de metri adâncime", "Motiv fotografic celebru din Yemen"],
      en: ["Built in the 17th century", "Spans a 300-meter deep gorge", "Famous photographic motif of Yemen"]
    }, image: "/poi-images/shaharah-bridge-landmarks-v2.webp"},
  {
    id: "queen-arwa-mosque-landmarks-v2",
    type: "monument",
    parent: "YE-IB",
    coords: [44.1481, 13.9213],
    name: { de: "Moschee der Königin Arwa", hu: "Arva királynő mecsetje", ro: "Moscheea Reginei Arwa", en: "Queen Arwa Mosque" },
    description: {
      de: "Die Moschee der Königin Arwa in Jibla stammt aus dem 11. Jahrhundert und war das Zentrum des sulaihidischen Reiches. Königin Arwa ließ ihren Palast in diese wunderschöne Moschee umwandeln, in der sie auch bestattet ist.",
      hu: "A dzsiblái Arva királynő mecset a 11. századból származik, és a szulajhida birodalom központja volt. Arva királynő saját palotáját alakíttatta át erre a gyönyörű mecsetre, ahol el is temették.",
      ro: "Moscheea Reginei Arwa din Jibla datează din secolul al XI-lea și a fost centrul imperiului sulayhid. Regina Arwa și-a transformat palatul în această frumoasă moschee, unde este și înmormântată.",
      en: "The Queen Arwa Mosque in Jibla dates back to the 11th century and was the center of the Sulayhid empire. Queen Arwa had her palace converted into this beautiful mosque, where she is also buried."
    },
    facts: {
      de: ["Grabstätte der Königin Arwa al-Sulayhi", "Ehemaliger Königspalast", "Wichtige historische Pilgerstätte"],
      hu: ["Arva al-Szulajhi királynő sírhelye", "Egykori királyi palota", "Fontos történelmi zarándokhely"],
      ro: ["Mormântul reginei Arwa al-Sulayhi", "Fost palat regal", "Important loc de pelerinaj istoric"],
      en: ["Tomb of Queen Arwa al-Sulayhi", "Former royal palace", "Important historical pilgrimage site"]
    }, image: "/poi-images/queen-arwa-mosque-landmarks-v2.webp"},
  {
    id: "amiriya-mosque-landmarks-v2",
    type: "monument",
    parent: "YE-BA",
    coords: [44.9455, 14.4172],
    name: { de: "Amiriya-Moschee", hu: "Amirija mecset", ro: "Moscheea Amiriya", en: "Amiriya Mosque" },
    description: {
      de: "Die Amiriya-Moschee in Rada'a ist ein exquisites Bauwerk aus dem 16. Jahrhundert. Sie vereint jemenitische und indische Stilelemente und wurde für ihre meisterhafte Restaurierung mit dem Aga Khan Award ausgezeichnet.",
      hu: "A rada'a-i Amirija mecset egy remek 16. századi építmény. Jemeni és indiai stíluselemeket ötvöz, mesteri felújításáért pedig Aga Khan építészeti díjjal tüntették ki.",
      ro: "Moscheea Amiriya din Rada'a este o clădire rafinată din secolul al XVI-lea. Combină elemente stilistice yemenite și indiene, iar pentru restaurarea sa magistrală a primit Premiul Aga Khan.",
      en: "The Amiriya Mosque in Rada'a is an exquisite 16th-century structure. It combines Yemeni and Indian stylistic elements and was awarded the Aga Khan Award for its masterful restoration."
    },
    facts: {
      de: ["Erbaut von Sultan Amir ibn 'Abd al-Wahhab", "Gewinner des Aga Khan Award for Architecture", "Einzigartige Stuckverzierungen"],
      hu: ["Amír ibn Abd al-Vahháb szultán építtette", "Az Aga Khan építészeti díj nyertese", "Egyedülálló stukkódíszítések"],
      ro: ["Construită de sultanul Amir ibn 'Abd al-Wahhab", "Câștigătoarea Premiului Aga Khan pentru Arhitectură", "Decorațiuni unice din stuc"],
      en: ["Built by Sultan Amir ibn 'Abd al-Wahhab", "Winner of the Aga Khan Award for Architecture", "Unique stucco decorations"]
    }, image: "/poi-images/amiriya-mosque-landmarks-v2.webp"},
  {
    id: "kawkaban-old-city-landmarks-v2",
    type: "tourist-attraction",
    parent: "YE-MW",
    coords: [43.9054, 15.5002],
    name: { de: "Historische Stadt Kawkaban", hu: "Kawkaban történelmi városa", ro: "Orașul istoric Kawkaban", en: "Historic City of Kawkaban" },
    description: {
      de: "Kawkaban ist eine befestigte historische Stadt, die auf einem Tafelberg in fast 3.000 Metern Höhe thront. Sie war ein uneinnehmbarer Rückzugsort für Imame und ist bekannt für ihre traditionellen Steinhäuser.",
      hu: "Kawkaban egy erődített történelmi város, amely egy fennsíkon, majdnem 3000 méteres magasságban fekszik. Bevehetetlen menedékhely volt az imámok számára, és hagyományos kőházairól ismert.",
      ro: "Kawkaban este un oraș istoric fortificat, situat pe un platou la aproape 3.000 de metri altitudine. A fost un refugiu inexpugnabil pentru imami și este cunoscut pentru casele sale tradiționale din piatră.",
      en: "Kawkaban is a fortified historic city perched on a mesa at nearly 3,000 meters altitude. It was an impregnable retreat for imams and is known for its traditional stone houses."
    },
    facts: {
      de: ["Liegt auf rund 2.800 Metern Höhe", "War oft Rückzugsort vor Invasoren", "Klassische Bergbaufestung des Jemen"],
      hu: ["Körülbelül 2800 méteres magasságban fekszik", "Gyakran nyújtott menedéket a betolakodók elől", "Klasszikus jemeni hegyi erőd"],
      ro: ["Situat la aproximativ 2.800 de metri altitudine", "A fost adesea un refugiu împotriva invadatorilor", "Fortăreață montană clasică din Yemen"],
      en: ["Located at around 2,800 meters altitude", "Was often a retreat from invaders", "Classic Yemeni mountain fortress"]
    }, image: "/poi-images/kawkaban-old-city-landmarks-v2.webp"},
  {
    id: "thula-fortress-landmarks-v2",
    type: "tourist-attraction",
    parent: "YE-AM",
    coords: [43.9038, 15.5684],
    name: { de: "Altstadt von Thula", hu: "Thula óvárosa", ro: "Orașul vechi Thula", en: "Old City of Thula" },
    description: {
      de: "Die außergewöhnlich gut erhaltene Stadt Thula ist von massiven Steinmauern umgeben und gehört zu den schönsten Bergstädten des Jemen. Ihre Architektur fügt sich nahtlos in die umgebende Felslandschaft ein.",
      hu: "A kivételesen jól megőrzött Thula várost masszív kőfalak veszik körül, és Jemen legszebb hegyi városai közé tartozik. Építészete zökkenőmentesen illeszkedik a környező sziklás tájba.",
      ro: "Orașul excepțional de bine conservat Thula este înconjurat de ziduri masive de piatră și se numără printre cele mai frumoase orașe montane din Yemen. Arhitectura sa se integrează perfect în peisajul stâncos din jur.",
      en: "The exceptionally well-preserved city of Thula is surrounded by massive stone walls and is one of the most beautiful mountain towns in Yemen. Its architecture blends seamlessly into the surrounding rocky landscape."
    },
    facts: {
      de: ["Steht auf der Tentativliste der UNESCO", "Perfekt erhaltene Steinarchitektur", "Wurde während der osmanischen Kriege nie erobert"],
      hu: ["Az UNESCO világörökségi javaslati listáján szerepel", "Tökéletesen megőrzött kőépítészet", "Az oszmán háborúk során soha nem hódították meg"],
      ro: ["Pe lista tentativă a UNESCO", "Arhitectură din piatră perfect conservată", "Nu a fost niciodată cucerit în timpul războaielor otomane"],
      en: ["On the UNESCO tentative list", "Perfectly preserved stone architecture", "Was never conquered during the Ottoman wars"]
    }
  },
  {
    id: "al-qahira-hajjah-landmarks-v2",
    type: "monument",
    parent: "YE-HJ",
    coords: [43.5937, 15.6133],
    name: { de: "Zitadelle Al-Qahira (Hajjah)", hu: "Al-Qahira citadella (Hajjah)", ro: "Cetatea Al-Qahira (Hajjah)", en: "Al-Qahira Citadel (Hajjah)" },
    description: {
      de: "Die mächtige Zitadelle von Al-Qahira in Hajjah dominiert die Berglandschaft der Region. Die aus der Ferne sichtbare Festung diente als politisches und militärisches Zentrum, von dem aus weite Täler kontrolliert wurden.",
      hu: "A hatalmas hajjahi Al-Qahira citadella uralja a régió hegyvidéki táját. A messziről látható erőd politikai és katonai központként szolgált, ahonnan hatalmas völgyeket ellenőriztek.",
      ro: "Puternica cetate Al-Qahira din Hajjah domină peisajul montan al regiunii. Fortăreața, vizibilă de departe, a servit drept centru politic și militar din care erau controlate văi întinse.",
      en: "The mighty Al-Qahira Citadel in Hajjah dominates the mountainous landscape of the region. The fortress, visible from afar, served as a political and military center from which vast valleys were controlled."
    },
    facts: {
      de: ["Strategische Festung im nördlichen Jemen", "Bietet weitreichende Ausblicke auf Täler", "Symbolisiert die jemenitische Bergbauweise"],
      hu: ["Stratégiai erőd Észak-Jemenben", "Messzemenő kilátást nyújt a völgyekre", "A jemeni hegyi építkezést szimbolizálja"],
      ro: ["Fortăreață strategică în nordul Yemenului", "Oferă vederi ample asupra văilor", "Simbolizează metodele de construcție montană din Yemen"],
      en: ["Strategic fortress in northern Yemen", "Offers far-reaching views of valleys", "Symbolizes Yemeni mountain construction"]
    }
  },
  {
    id: "socotra-dragon-tree-reserve-landmarks-v2",
    type: "tourist-attraction",
    parent: "YE-SU",
    coords: [53.9572, 12.5159],
    name: { de: "Diksam-Plateau", hu: "Diksam-fennsík", ro: "Platoul Diksam", en: "Diksam Plateau" },
    description: {
      de: "Das Diksam-Plateau auf der Insel Sokotra ist weltbekannt für seinen Wald aus endemischen Drachenblutbäumen. Diese schirmförmigen Bäume gelten als lebende Fossilien und bilden eine der einzigartigsten Landschaften der Erde.",
      hu: "A Szokotra szigetén található Diksam-fennsík világszerte ismert az endemikus sárkányvérfákból álló erdejéről. Ezeket az esernyő alakú fákat élő kövületeknek tekintik, és a Föld egyik legegyedibb táját alkotják.",
      ro: "Platoul Diksam de pe insula Socotra este faimos în întreaga lume pentru pădurea sa de arbori de sângele dragonului endemici. Acești arbori în formă de umbrelă sunt considerați fosile vii și formează unul dintre cele mai unice peisaje de pe Pământ.",
      en: "The Diksam Plateau on the island of Socotra is world-renowned for its forest of endemic Dragon's Blood trees. These umbrella-shaped trees are considered living fossils and form one of the most unique landscapes on Earth."
    },
    facts: {
      de: ["Heimat der endemischen Drachenblutbäume", "Gehört zum UNESCO-Weltnaturerbe Sokotra", "Roter Baumharz wurde historisch als Medizin genutzt"],
      hu: ["Az endemikus sárkányvérfák otthona", "A Szokotra UNESCO természeti világörökség része", "A piros fagyantát történelmileg gyógyszerként használták"],
      ro: ["Casa arborilor de sângele dragonului endemici", "Face parte din Patrimoniul Natural Mondial UNESCO Socotra", "Rășina roșie a copacului era folosită istoric ca medicament"],
      en: ["Home to the endemic Dragon's Blood trees", "Part of the Socotra UNESCO World Natural Heritage", "Red tree resin was historically used as medicine"]
    }
  }
];