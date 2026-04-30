import type { POI } from "./poi";

export const kosovoCountry: POI = {
  id: "country-kosovo",
  type: "country",
  parent: "europe",
  coords: [20.903, 42.6026],
  name: {
    de: "Kosovo",
    hu: "Koszovó",
    ro: "Kosovo",
    en: "Kosovo"
  },
  description: {
    de: "Ein junger Staat im Balkan, bekannt für seine kulturelle Vielfalt.",
    hu: "Fiatal állam a Balkánon, amely kulturális sokszínűségéről ismert.",
    ro: "Un stat tânăr din Balcani, cunoscut pentru diversitatea sa culturală.",
    en: "A young state in the Balkans, known for its cultural diversity."
  },
  descriptionAdvanced: {
    de: "Kosovo ist ein Binnenstaat auf dem Westbalkan, der 2008 seine Unabhängigkeit erklärte. Seine Landschaft ist geprägt von hohen Bergen wie den Šar-Bergen und den Albanischen Alpen, ideal für Wanderer und Naturliebhaber. Die Hauptstadt Pristina ist ein lebhaftes Zentrum mit moderner Architektur, wie der eindrucksvollen Nationalbibliothek, und einer jungen, dynamischen Bevölkerung. Kulturell ist Prizren das Herz des Landes, mit seiner gut erhaltenen osmanischen Altstadt, der Steinbrücke und der Sinan-Pascha-Moschee. Das Land beherbergt zudem wichtige serbisch-orthodoxe Klöster, darunter das UNESCO-Weltkulturerbe Visoki Dečani. Die kosovarische Küche ist eine köstliche Mischung aus albanischen, serbischen und osmanischen Einflüssen.",
    hu: "Koszovó, Európa legfiatalabb állama, a Balkán-félsziget szívében helyezkedik el. Bár tengerparttal nem rendelkezik, hegyekkel és dombokkal tarkított tájai, valamint gazdag történelmi és kulturális öröksége miatt egyre kedveltebb célpont. A 2008-ban kikiáltott függetlensége óta az ország dinamikusan fejlődik, miközben igyekszik megőrizni sokszínű identitását, melyet az albán, szerb, és más kisebbségek együttélése formált. Gazdasága a szolgáltatásokra, a mezőgazdaságra és a fejlődő iparra épül, jelentős szerepet játszik a diaszpórából érkező tőke is. A főváros, Pristina, egy modern, lüktető város, tele kávézókkal és fiatalokkal, míg a vidéki területek, mint Prizren vagy Peja, az oszmán és bizánci korok építészeti emlékeit őrzik. A természeti szépségek, mint a Rugova-szurdok vagy a Šar-hegység, kiváló túrázási és síelési lehetőségeket kínálnak, feltárva az ország rejtett kincseit.",
    ro: "Kosovo este un stat fără ieșire la mare din Balcanii de Vest, care și-a declarat independența în 2008. Inima sa culturală, Prizren, prezintă o arhitectură otomană bine conservată, în timp ce capitala, Pristina, este un centru vibrant și modern. Munții spectaculoși, precum Alpii Albanezi (Prokletije) și Munții Šar, oferă oportunități excelente pentru drumeții și explorarea naturii. Deși este o națiune tânără, Kosovo are o istorie bogată, cu numeroase mănăstiri ortodoxe sârbe medievale, inclusiv situri din Patrimoniul Mondial UNESCO, și moschei din perioada otomană. Diversitatea sa etnică, cu o majoritate albaneză și comunități semnificative de sârbi, turci, gorani și romi, contribuie la un peisaj cultural dinamic și complex, reflectat în bucătăria, muzica și tradițiile sale.",
    en: "Kosovo is a landlocked country in the Western Balkans that declared independence in 2008."
  },
  facts: {
    de: ["Pristina ist die Hauptstadt."],
    hu: ["Pristina a főváros."],
    ro: ["Pristina este capitala."],
    en: ["Pristina is the capital."]
  },
  factsAdvanced: {
    de: [
        "Die Bevölkerung des Kosovo ist die jüngste in Europa, mehr als die Hälfte ist unter 25 Jahre alt.",
        "Obwohl es kein EU-Mitglied ist, verwendet das Land den Euro als offizielle Währung.",
        "Das Filmfestival Dokufest in Prizren ist eines der wichtigsten Dokumentarfilmfestivals in Südosteuropa.",
        "Der Fluss Nerodime weist eine seltene Bifurkation auf und fließt sowohl in die Ägäis als auch ins Schwarze Meer.",
        "Das Kloster Visoki Dečani beherbergt die größte mittelalterliche Kirche auf dem Balkan.",
        "Die Nationalbibliothek in Pristina ist für ihre einzigartige Architektur mit 99 Kuppeln bekannt.",
        "Die Šar-Berge sind die Heimat der Hunderasse Šarplaninac, einem robusten Hirtenhund.",
        "Flija, ein geschichteter Pfannkuchen, ist eines der bekanntesten traditionellen Gerichte."
    ],
    hu: [
      "Koszovó lakosságának több mint fele 25 év alatti, ezzel Európa egyik legfiatalabb társadalma.",
      "Az ország hivatalos pénzneme az euró, annak ellenére, hogy nem tagja az Európai Uniónak.",
      "A koszovói gasztronómia a balkáni és oszmán konyha keveréke, jellegzetes ételei a flija (réteges pite) és a tave kosi (sült bárány joghurttal).",
      "Pristinában található a világ egyik legkülönlegesebb épülete, a Nemzeti Könyvtár, melyet 99 különböző méretű kupola díszít.",
      "A Gazivoda-tó Koszovó legnagyobb mesterséges tava, amely vízzel és energiával látja el az ország jelentős részét.",
      "A Prizrenben évente megrendezett Dokufest a Balkán egyik legjelentősebb dokumentumfilm-fesztiválja.",
      "A Nerodime folyó bifurkációja egyedülálló természeti jelenség Európában: a folyó két ágra szakad, melyek a Fekete-tengerbe és az Égei-tengerbe torkollnak.",
      "Koszovó területén több UNESCO Világörökségi helyszín is található, köztük a Dečani kolostor és a Peći Patriarchátus."
    ],
    ro: [
      "Kosovo este a doua cea mai tânără țară din lume, declarându-și independența în 2008.",
      "Utilizează moneda Euro, deși nu este membră a Uniunii Europene.",
      "Peste 50% din populația sa are sub 25 de ani, fiind cea mai tânără populație din Europa.",
      "Găzduiește Mănăstirea Visoki Dečani, un sit al Patrimoniului Mondial UNESCO.",
      "Râul Nerodimka din Kosovo prezintă un fenomen rar de bifurcație, vărsându-se în două mări diferite: Marea Egee și Marea Neagră.",
      "Capitala, Pristina, are una dintre cele mai unice clădiri din lume, Biblioteca Națională, cu 99 de cupole.",
      "Bucătăria locală este un amestec de influențe balcanice și otomane, cu preparate precum flija și tave kosi.",
      "Festivalul internațional de film documentar Dokufest, organizat în Prizren, este cel mai mare eveniment de acest gen din Balcani."
    ],
    en: []
  }
};

export const kosovoPois: POI[] = [
  // XK-001: Dečani
  {
    id: "xk-decan", type: "historical", parent: "XK-001", coords: [20.26, 42.54],
    name: { de: "Kloster Visoki Dečani", hu: "Visoki Dečani kolostor", ro: "Mănăstirea Visoki Dečani", en: "Visoki Dečani Monastery" },
    description: { de: "Bedeutendes serbisch-orthodoxes Kloster und UNESCO-Weltkulturerbe.", hu: "Jelentős szerb ortodox kolostor és UNESCO Világörökség.", ro: "Importantă mănăstire ortodoxă sârbă și patrimoniu mondial UNESCO.", en: "Important Serbian Orthodox monastery and UNESCO World Heritage site." },
    facts: {
      de: ["Gegründet im 14. Jahrhundert.", "Besitzt die größte mittelalterliche Kirche auf dem Balkan.", "Berühmt für seine über 1000 Fresken.", "UNESCO-Weltkulturerbe seit 2004."],
      hu: ["A 14. században alapították.", "A Balkán legnagyobb középkori templomával rendelkezik.", "Híres több mint 1000 freskójáról.", "2004 óta UNESCO Világörökség."],
      ro: ["Fondată în secolul al XIV-lea.", "Deține cea mai mare biserică medievală din Balcani.", "Faimoasă pentru cele peste 1000 de fresce.", "Patrimoniu mondial UNESCO din 2004."],
      en: ["Founded in the 14th century.", "Features the largest medieval church in the Balkans.", "Famous for its over 1,000 frescoes.", "UNESCO World Heritage site since 2004."]
    },
    descriptionAdvanced: {
      de: "Das Kloster Visoki Dečani, eingebettet in die malerische Landschaft der Dečani-Schlucht, ist ein Juwel der serbisch-orthodoxen Kunst und Spiritualität. Gegründet im 14. Jahrhundert von König Stefan Dečanski, stellt es eine harmonische Synthese aus romanischer und frühgotischer Architektur dar. Die Klosterkirche, Christus dem Pantokrator geweiht, ist die größte mittelalterliche Kirche auf dem Balkan. Ihr Inneres ist fast vollständig mit über 1000 bemerkenswert gut erhaltenen Fresken aus dem 14. Jahrhundert bedeckt, die als Meisterwerke der byzantinischen Malerei gelten. Aufgrund seiner universellen kulturellen und historischen Bedeutung wurde das Kloster 2004 zum UNESCO-Weltkulturerbe erklärt und steht aufgrund seiner prekären Lage auf der Liste des gefährdeten Welterbes.",
      hu: "A Visoki Dečani kolostor a szerb ortodox egyház egyik legfontosabb kincse és Koszovó egyik leglátogatottabb műemléke. A 14. században, III. István Uroš szerb király uralkodása alatt épült, és a középkori szerb építészet és művészet csúcspontját képviseli. Az épület a román és a gótikus stílusjegyeket ötvözi, ami egyedülállóvá teszi a régióban. A kolostor temploma, a Pantokrátor Krisztusnak szentelve, a Balkán legnagyobb fennmaradt középkori temploma. Belső tereit több mint 1000, lenyűgöző állapotban megőrzött freskó díszíti, amelyek a bizánci festészet késői korszakának remekművei. A kolostor 2004 óta az UNESCO Világörökség része, és a 'Veszélyeztetett Világörökségi Helyszínek' listáján is szerepel, ami kiemeli megóvásának fontosságát.",
      ro: "Mănăstirea Visoki Dečani, situată într-un defileu pitoresc la poalele munților Prokletije, este una dintre cele mai prețioase bijuterii ale patrimoniului cultural și spiritual din Kosovo. Construită în secolul al XIV-lea de către regele sârb Ștefan Dečanski, mănăstirea reprezintă o sinteză arhitecturală unică între stilurile romanic occidental și bizantin timpuriu. Biserica sa, dedicată lui Hristos Pantocrator, este cea mai mare structură medievală din Balcani și adăpostește peste 1.000 de fresce excepțional de bine conservate, considerate capodopere ale artei sârbe medievale. Complexul monahal, înconjurat de ziduri fortificate, a fost inclus în Patrimoniul Mondial UNESCO în 2004 și, ulterior, pe lista Patrimoniului Mondial în Pericol, subliniind importanța conservării sale pentru generațiile viitoare.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Bau des Klosters dauerte von 1327 bis 1335.",
        "Der Hauptarchitekt war Fra Vita, ein Franziskanermönch aus Kotor.",
        "Die Fresken umfassen über 20 Zyklen und stellen das umfangreichste erhaltene Beispiel serbischer mittelalterlicher Kunst dar.",
        "Die Schatzkammer des Klosters bewahrt wertvolle Ikonen und Manuskripte aus dem 14. bis 19. Jahrhundert.",
        "Die Fassade der Kirche ist mit abwechselnden Platten aus weißem und rotem Marmor verkleidet.",
        "König Stefan Dečanski, der Gründer, ist in der Kirche beigesetzt.",
        "Das Kloster ist seit seiner Gründung ununterbrochen von einer Mönchsgemeinschaft bewohnt.",
        "Es ist eines von vier serbisch-orthodoxen Monumenten im Kosovo, die zum UNESCO-Weltkulturerbe gehören."
      ],
      hu: [
        "Az építkezést 1327-ben kezdték és 1335-ben fejezték be.",
        "A főépítész Fra Vito ferences szerzetes volt a montenegrói Kotorból.",
        "A freskók a Biblia történeteit, szenteket és a Nemanjić-dinasztia tagjait ábrázolják.",
        "A kolostor kincstára értékes ikonokat, kéziratokat és liturgikus tárgyakat őriz.",
        "A templom külső falait fehér és vörös márvány borítja.",
        "A kolostor aktív, ma is szerzetesek közössége él és imádkozik benne.",
        "A komplexumot vastag kőfal veszi körül, amely a középkori erődítményekre emlékeztet.",
        "Az alapító király, III. István Uroš ereklyéit a kolostorban őrzik."
      ],
      ro: [
        "Construcția a început în 1327 și a fost finalizată în 1335.",
        "Arhitectul principal a fost călugărul franciscan Fra Vito din Kotor, Muntenegru.",
        "Frescele acoperă o suprafață de peste 3.600 de metri pătrați și ilustrează scene din Vechiul și Noul Testament.",
        "Tezaurul mănăstirii păstrează o colecție valoroasă de icoane, manuscrise și obiecte liturgice din secolele XIV-XIX.",
        "Fațada bisericii este realizată din blocuri alternate de marmură roșie-purpurie și galben-deschis.",
        "Este o mănăstire activă, cu o obște de călugări care continuă tradiția liturgică ortodoxă.",
        "Regele fondator, Ștefan Dečanski, este înmormântat în interiorul bisericii, iar moaștele sale sunt considerate făcătoare de minuni.",
        "În ciuda istoriei zbuciumate a regiunii, mănăstirea nu a fost niciodată abandonată de la fondarea sa."
      ],
      en: []
    }
  },
  {
    id: "xk-decan-mountains", type: "landmark", parent: "XK-001", coords: [20.20, 42.53],
    name: { de: "Dečani-Berge", hu: "Dečani-hegyek", ro: "Munții Dečani", en: "Dečani Mountains" },
    description: { de: "Teil des Prokletije-Gebirges mit unberührter Natur.", hu: "A Prokletije-hegység része érintetlen természettel.", ro: "Parte a munților Prokletije cu natură virgină.", en: "Part of the Prokletije mountains with untouched nature." },
    facts: {
      de: ["Beliebtes Ziel für Wanderer.", "Heimat seltener Tierarten.", "Bietet spektakuläre Ausblicke auf die Täler."],
      hu: ["Népszerű túrázóhely.", "Ritka állatfajok otthona.", "Látványos kilátást nyújt a völgyekre."],
      ro: ["Destinație populară pentru drumeții.", "Adăpostește specii de animale rare.", "Oferă vederi spectaculoase asupra văilor."],
      en: ["Popular destination for hikers.", "Home to rare animal species.", "Offers spectacular views of the valleys."]
    },
    descriptionAdvanced: {
      de: "Die Dečani-Berge sind ein atemberaubender Teil des Prokletije-Gebirges, auch bekannt als die Albanischen Alpen, im Westen des Kosovo. Dieses wilde und raue Gebirge ist ein Paradies für Outdoor-Enthusiasten und bietet dramatische Kalkstein-Gipfel, tiefe Schluchten und unberührte Wälder. Die Region ist bekannt für ihre hohe Biodiversität und beheimatet seltene Tierarten wie den Balkanluchs und den Braunbären. Die Dečani-Berge sind Teil des Fernwanderwegs 'Peaks of the Balkans', der durch Albanien, Kosovo und Montenegro führt. Wanderer können hier kristallklare Bergseen, traditionelle Hirtensiedlungen (Stan) entdecken und spektakuläre Ausblicke genießen, die bis zum Kloster Visoki Dečani reichen.",
      hu: "A Dečani-hegyek a hatalmas Prokletije-hegység, más néven az Albán-Alpok részét képezik, Koszovó nyugati peremén. Ez a vad és érintetlen vidék a természetszeretők és kalandvágyók paradicsoma. A hegyvonulat drámai, sziklás csúcsokból, mély völgyekből és kristálytiszta hegyi patakokból áll. A terület gazdag biodiverzitással rendelkezik, számos ritka és védett növény- és állatfajnak ad otthont, beleértve a barna medvét, a hiúzt és a zergét. A Dečani-hegyek kiváló lehetőséget nyújtanak túrázásra, hegymászásra és a nomád pásztorélet megismerésére. A kijelölt túraútvonalak sűrű erdőkön, alpesi réteken és eldugott gleccsertavakon vezetnek keresztül, felejthetetlen panorámát kínálva a környező tájra, beleértve a híres Visoki Dečani kolostorra nyíló kilátást is.",
      ro: "Munții Dečani fac parte din magnificul lanț montan Prokletije, cunoscut și sub numele de Alpii Albanezi, la granița de vest a statului Kosovo. Această zonă sălbatică și neatinsă este un paradis pentru iubitorii de natură și aventură, caracterizată prin vârfuri stâncoase dramatice, văi adânci și râuri de munte cristaline. Regiunea se mândrește cu o biodiversitate bogată, fiind habitatul a numeroase specii de plante și animale rare și protejate, inclusiv ursul brun, râsul și capra neagră. Munții Dečani oferă oportunități excelente pentru drumeții, alpinism și explorarea vieții pastorale tradiționale. Traseele marcate duc prin păduri dese, pășuni alpine și pe lângă lacuri glaciare ascunse, oferind panorame de neuitat asupra peisajului înconjurător, inclusiv priveliști spre renumita Mănăstire Visoki Dečani.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die höchsten Gipfel in diesem Teil des Prokletije erreichen über 2.500 Meter.",
        "Die Gegend ist reich an Gletscherseen, die oft als 'Augen der Berge' bezeichnet werden.",
        "Hier wachsen zahlreiche endemische Pflanzenarten der Balkanhalbinsel.",
        "Der Fluss Dečanska Bistrica hat eine tiefe Schlucht in das Gebirge gegraben.",
        "Die traditionelle Almwirtschaft mit Schafherden ist hier noch lebendig.",
        "Das Gebiet bietet hervorragende Bedingungen für Skitouren im Winter.",
        "Die Felswände sind bei Kletterern sehr beliebt.",
        "Die Berge sind ein wichtiger Wasserspeicher für die gesamte Region."
      ],
      hu: [
        "A hegység a 'Peaks of the Balkans' (Balkán csúcsai) nemzetközi túraútvonal része.",
        "A legmagasabb csúcsok meghaladják a 2500 méteres magasságot.",
        "A területen számos gleccsertó található, melyeket 'hegyi szemeknek' is neveznek.",
        "A flóra több mint 1000 fajt számlál, köztük több balkáni endémikus növényt.",
        "A Dečani-Bistrica folyó vájt mély szurdokot a hegység szívében.",
        "A hagyományos pásztorkunyhók, a 'stan'-ok, betekintést nyújtanak a helyi életmódba.",
        "A régió kiválóan alkalmas sziklamászásra és via ferrata útvonalak teljesítésére.",
        "Télen a területet vastag hótakaró borítja, ami a sítúrázóknak kedvez."
      ],
      ro: [
        "Lanțul montan face parte din traseul internațional de drumeții 'Vârfurile Balcanilor' (Peaks of the Balkans).",
        "Cele mai înalte vârfuri din această zonă depășesc 2.500 de metri altitudine.",
        "Zona este presărată cu numeroase lacuri glaciare, cunoscute local ca 'ochi de munte'.",
        "Flora include peste 1.000 de specii, multe dintre ele fiind endemice pentru Balcani.",
        "Râul Bistrica Dečani a sculptat un canion adânc în inima munților.",
        "Colibele tradiționale ale ciobanilor, numite 'stan', oferă o imagine a stilului de viață pastoral.",
        "Regiunea este excelentă pentru alpinism și trasee de via ferrata.",
        "Iarna, zona este acoperită de un strat gros de zăpadă, atrăgând iubitorii de schi de tură."
      ],
      en: []
    }
  },
  // XK-002: Đakovica
  {
    id: "xk-gjakova", type: "city", parent: "XK-002", coords: [20.43, 42.38],
    name: { de: "Gjakova", hu: "Gjakova", ro: "Gjakova", en: "Gjakova" },
    description: { de: "Historische Stadt bekannt für ihren alten Basar.", hu: "Történelmi város, amely az öreg bazárjáról ismert.", ro: "Oraș istoric cunoscut pentru vechiul său bazar.", en: "Historic city known for its old bazaar." },
    facts: {
      de: ["Beherbergt den längsten Basar im Kosovo.", "Wichtiges kulturelles Zentrum.", "Im Krieg 1999 schwer beschädigt und wiederaufgebaut."],
      hu: ["Itt található Koszovó leghosszabb bazárja.", "Fontos kulturális központ.", "Az 1999-es háborúban súlyosan megsérült, majd újjáépítették."],
      ro: ["Găzduiește cel mai lung bazar din Kosovo.", "Important centru cultural.", "Grav avariat în războiul din 1999 și reconstruit."],
      en: ["Houses the longest bazaar in Kosovo.", "Important cultural center.", "Heavily damaged in the 1999 war and rebuilt."]
    },
    descriptionAdvanced: {
      de: "Gjakova, im Südwesten des Kosovo gelegen, ist bekannt für sein reiches kulturelles Erbe und seine lebendige Atmosphäre. Das Herz der Stadt ist der Große Basar (Çarshia e Madhe), der längste auf dem Balkan, dessen Ursprünge bis ins 16. Jahrhundert zurückreichen. Nach schweren Zerstörungen im Kosovokrieg wurde er liebevoll restauriert und ist heute wieder ein pulsierendes Zentrum mit unzähligen Handwerksläden, Cafés und Restaurants. Die Architektur der Stadt ist eine faszinierende Mischung aus osmanischen und lokalen Stilen, die in Gebäuden wie der Hadum-Moschee aus dem 16. Jahrhundert zum Ausdruck kommt. Gjakova gilt auch als Stadt der Musik und Kunst und hat eine lange Tradition von Dichtern und Sängern. Die malerische Lage am Fluss Krena trägt zum einzigartigen Charme der Stadt bei.",
      hu: "Gjakova (albánul Gjakovë) Koszovó délnyugati részén fekszik, és az ország egyik legélénkebb kulturális és történelmi központja. A város büszkesége a Çarshia e Madhe, vagyis a Nagy Bazár, amely a Balkán-félsziget leghosszabb és egyik legrégebbi ilyen jellegű kereskedőnegyede. A macskaköves utcácskákon sétálva a látogatók kézműves műhelyek, hagyományos éttermek és kávézók sokaságát fedezhetik fel. A város építészete az oszmán kor és a helyi tradíciók keverékét tükrözi. Gjakova a zene és a költészet városaként is ismert. A koszovói háború súlyos károkat okozott a történelmi épületekben, de a helyiek és a nemzetközi közösség összefogásának köszönhetően a bazár nagy részét és a fontosabb műemlékeket, mint a Hadum-mecsetet, sikerült helyreállítani, megőrizve a város egyedi hangulatát.",
      ro: "Gjakova (în albaneză Gjakovë), situat în sud-vestul Kosovo, este unul dintre cele mai vibrante centre culturale și istorice ale țării. Mândria orașului este Çarshia e Madhe, sau Marele Bazar, cel mai lung și unul dintre cele mai vechi cartiere comerciale de acest fel din Peninsula Balcanică. Plimbându-se pe străduțele pietruite, vizitatorii pot descoperi o multitudine de ateliere meșteșugărești, restaurante tradiționale și cafenele. Arhitectura orașului reflectă un amestec de stil otoman și tradiții locale. Gjakova este, de asemenea, cunoscut ca un oraș al muzicii și poeziei. Războiul din Kosovo a provocat daune grave clădirilor istorice, dar datorită eforturilor comune ale localnicilor și ale comunității internaționale, o mare parte a bazarului și monumente importante precum Moscheea Hadum au fost restaurate, păstrând atmosfera unică a orașului.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Große Basar erstreckt sich über eine Länge von mehr als einem Kilometer.",
        "Vor dem Krieg gab es auf dem Basar über 500 Handwerksbetriebe.",
        "Die Hadum-Moschee, erbaut 1594, ist das spirituelle Zentrum des Basars.",
        "Die Terzi-Brücke, eine osmanische Steinbrücke aus dem 15. Jahrhundert, befindet sich in der Nähe der Stadt.",
        "Gjakova ist bekannt für seine traditionelle Volksmusik, gespielt auf dem 'Saze'-Instrument.",
        "Die Stadt hat eine reiche Tradition im Silberschmiedehandwerk.",
        "Viele historische Wohngebäude (Kullas) wurden nach dem Krieg wieder aufgebaut.",
        "Jährlich findet das Gjakova Sommerfestival mit zahlreichen kulturellen Veranstaltungen statt."
      ],
      hu: [
        "A Nagy Bazár eredetileg a 16. században alakult ki.",
        "A bazár hossza meghaladja az egy kilométert.",
        "A város a Krena folyó partján terül el.",
        "Gjakova híres a 'saze' nevű hangszeren játszott tradicionális zenéjéről.",
        "A 16. századi Hadum-mecset a város egyik legfontosabb iszlám műemléke.",
        "A Terzi-híd egy másik jelentős oszmán kori építmény a város közelében.",
        "A háború előtti időkben a bazárban több mint 500 kézműves műhely működött.",
        "A városban minden évben megrendezik a Gjakovai Nyári Fesztivált."
      ],
      ro: [
        "Marele Bazar a fost înființat inițial în secolul al XVI-lea.",
        "Lungimea bazarului depășește un kilometru.",
        "Orașul este așezat pe malurile râului Krena.",
        "Gjakova este renumit pentru muzica sa tradițională interpretată la un instrument numit 'saze'.",
        "Moscheea Hadum din secolul al XVI-lea este unul dintre cele mai importante monumente islamice ale orașului.",
        "Podul Terzi este o altă structură semnificativă din perioada otomană, situată în apropierea orașului.",
        "Înainte de război, în bazar funcționau peste 500 de ateliere meșteșugărești.",
        "Orașul găzduiește anual Festivalul de Vară din Gjakova."
      ],
      en: []
    }
  },
  {
    id: "xk-hadum-mosque", type: "historical", parent: "XK-002", coords: [20.42, 42.38],
    name: { de: "Hadum-Moschee", hu: "Hadum-mecset", ro: "Moscheea Hadum", en: "Hadum Mosque" },
    description: { de: "Osmanische Moschee aus dem 16. Jahrhundert.", hu: "16. századi oszmán mecset.", ro: "Moschee otomană din secolul al XVI-lea.", en: "16th-century Ottoman mosque." },
    facts: {
      de: ["Erbaut im Jahr 1594.", "Meisterwerk der klassischen osmanischen Architektur.", "Wurde während des Kosovo-Krieges beschädigt."],
      hu: ["1594-ben épült.", "A klasszikus oszmán építészet remekműve.", "A koszovói háború alatt megsérült."],
      ro: ["Construită în anul 1594.", "Capodoperă a arhitecturii otomane clasice.", "A fost avariată în timpul războiului din Kosovo."],
      en: ["Built in 1594.", "Masterpiece of classical Ottoman architecture.", "Was damaged during the Kosovo war."]
    },
    descriptionAdvanced: {
      de: "Die Hadum-Moschee, erbaut Ende des 16. Jahrhunderts, ist das Herzstück des Großen Basars von Gjakova und ein herausragendes Beispiel der osmanischen Sakralarchitektur im Kosovo. Sie wurde von Hadum Sylejman Aga gestiftet und bildete den Kern, um den sich die Stadt entwickelte. Der Komplex umfasste ursprünglich auch eine Religionsschule (Madrasa), eine Bibliothek und ein türkisches Bad (Hamam). Die Moschee selbst besticht durch ihre harmonischen Proportionen mit einem quadratischen Gebetssaal und einer einzelnen, imposanten Kuppel. Ihr Inneres ist reich mit floralen Malereien und Arabesken im Stil des türkischen Barocks verziert. Obwohl der Komplex im Kosovokrieg 1999 schwer beschädigt wurde, insbesondere die wertvolle Bibliothek, wurde die Moschee aufwendig restauriert und dient heute wieder als aktives Gebetshaus und Symbol des städtischen Erbes.",
      hu: "A Hadum-mecset Gjakova történelmi központjának, a Nagy Bazárnak a szívében áll, és a város egyik legfontosabb szimbóluma. A mecsetet 1594-ben alapította Hadum Sylejman Aga, a régió egyik befolyásos földesura, és a klasszikus oszmán építészet jellegzetes példája Koszovóban. A komplexumhoz eredetileg egy könyvtár, egy medresze (vallási iskola) és egy hamam (törökfürdő) is tartozott, amelyek a város kulturális és vallási életének központjává tették. A mecset belső terét gazdag növényi motívumokkal és geometriai mintákkal díszített festmények borítják, amelyek a török barokk stílus hatását mutatják. A koszovói háború során a mecset és a környező épületek súlyos károkat szenvedtek, de a nemzetközi segítséggel történő újjáépítésnek köszönhetően ma ismét eredeti pompájában csodálható meg.",
      ro: "Moscheea Hadum se află în inima centrului istoric al orașului Gjakova, Marele Bazar, fiind unul dintre cele mai importante simboluri ale orașului. Moscheea a fost fondată în 1594 de Hadum Sylejman Aga, un moșier influent din regiune, și este un exemplu caracteristic al arhitecturii otomane clasice din Kosovo. Inițial, complexul includea o bibliotecă, o medresă (școală religioasă) și un hamam (baie turcească), transformându-l într-un centru al vieții culturale și religioase a orașului. Interiorul moscheii este acoperit cu picturi bogate, cu motive vegetale și modele geometrice, care arată influența stilului baroc turcesc. În timpul războiului din Kosovo, moscheea și clădirile învecinate au suferit daune grave, dar datorită reconstrucției cu ajutor internațional, astăzi poate fi admirată din nou în splendoarea sa originală.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Stifter, Hadum Sylejman Aga, war ein Schüler des berühmten osmanischen Architekten Mimar Sinan.",
        "Das Minarett der Moschee ist 31 Meter hoch.",
        "Die dekorativen Malereien im Inneren stammen aus dem 19. Jahrhundert.",
        "Der ursprüngliche Hamam des Komplexes wurde im Krieg zerstört.",
        "Auf dem Friedhof der Moschee befinden sich die Gräber bedeutender Persönlichkeiten der Stadt.",
        "Die Restaurierung wurde maßgeblich durch internationale Hilfsorganisationen unterstützt.",
        "Die Architektur zeigt Einflüsse der klassischen osmanischen Schule von Istanbul.",
        "Der Name 'Hadum' bedeutet 'Eunuch' auf Türkisch, was auf die Position des Stifters am Sultanshof hinweist."
      ],
      hu: [
        "A mecset alapítója, Hadum Aga, a híres Mimar Sinan tanítványa volt.",
        "Az imaterem négyzet alaprajzú, melyet egyetlen nagy kupola fed.",
        "A minaret 31 méter magas.",
        "A mecset udvarán régi sírkövek találhatók, melyek a város neves személyiségeinek állítanak emléket.",
        "Az 1999-es háborúban a komplexum könyvtára és a benne őrzött ritka kéziratok megsemmisültek.",
        "A restaurálási munkálatokat török és szaúdi alapítványok támogatták.",
        "A mecset ma is aktív imaházként működik.",
        "A díszítőfestések a 19. században készültek."
      ],
      ro: [
        "Fondatorul moscheii, Hadum Aga, a fost un discipol al celebrului arhitect Mimar Sinan.",
        "Sala de rugăciune are un plan pătrat, acoperit de o singură cupolă mare.",
        "Minaretul are o înălțime de 31 de metri.",
        "În curtea moscheii se găsesc pietre funerare vechi, comemorând personalități notabile ale orașului.",
        "În timpul războiului din 1999, biblioteca complexului și manuscrisele rare pe care le adăpostea au fost distruse.",
        "Lucrările de restaurare au fost sprijinite de fundații din Turcia și Arabia Saudită.",
        "Moscheea funcționează și astăzi ca lăcaș de cult activ.",
        "Picturile decorative interioare datează din secolul al XIX-lea."
      ],
      en: []
    }
  },
  // XK-003: Dragaš
  {
    id: "xk-dragash", type: "city", parent: "XK-003", coords: [20.64, 42.06],
    name: { de: "Dragash", hu: "Dragash", ro: "Dragash", en: "Dragash" },
    description: { de: "Südlichste Stadt des Kosovo in bergiger Umgebung.", hu: "Koszovó legdélibb városa hegyvidéki környezetben.", ro: "Cel mai sudic oraș din Kosovo în mediu montan.", en: "Southernmost town in Kosovo in a mountainous environment." },
    facts: {
      de: ["Zentrum der Gorani-Minderheit.", "Berühmt für seinen Schafskäse.", "Umgeben von den Gipfeln der Šar-Berge."],
      hu: ["A goráni kisebbség központja.", "Híres a juhsajtjáról.", "A Šar-hegység csúcsai veszik körül."],
      ro: ["Centrul minorității Gorani.", "Faimos pentru brânza sa de oaie.", "Înconjurat de vârfurile Munților Šar."],
      en: ["Center of the Gorani minority.", "Famous for its sheep cheese.", "Surrounded by the peaks of the Šar Mountains."]
    },
    descriptionAdvanced: {
      de: "Dragash, auch Sharri genannt, ist die südlichste Gemeinde des Kosovo und liegt eingebettet in die majestätische Landschaft der Šar-Berge. Diese abgelegene Region ist das kulturelle Zentrum der Gorani, einer muslimisch-slawischen Volksgruppe mit eigener Sprache und reichen Traditionen. Die Wirtschaft der Gemeinde basiert hauptsächlich auf der Viehzucht, insbesondere der Schafhaltung, und der Herstellung des berühmten Šar-Käses (Šarski Sir), einer lokalen Delikatesse. Die unberührte Natur mit ihren hohen Gipfeln, weiten Almen und dichten Wäldern macht Dragash zu einem attraktiven Ziel für Wanderer und Naturliebhaber. Die Region bietet einen authentischen Einblick in ein traditionelles Leben, das eng mit der Natur verbunden ist, und ist Ausgangspunkt für Touren in den Šar-Planina-Nationalpark.",
      hu: "Dragash (albánul Dragash vagy Sharri) Koszovó legdélebbi községe és városa, a Šar-hegység lélegzetelállító tájain, Albánia és Észak-Macedónia határán. A régió egyedülálló etnikai és kulturális sokszínűségéről ismert, itt él a goráni népcsoport, egy délszláv muszlim közösség, care megőrizte sajátos nyelvét és hagyományait. A város és a környező falvak gazdasága elsősorban az állattenyésztésre, különösen a juhtartásra épül. A helyi 'Šarski sir' (Šar-hegyi sajt) messze földön híres csemege. A terület érintetlen természeti szépsége, a magas hegycsúcsok, zöldellő legelők és tiszta vizű patakok vonzzák a természetjárókat. Dragash a kiindulópontja számos túraútvonalnak, amelyek a Šar-hegység Nemzeti Park lenyűgöző vidékeire vezetnek, lehetőséget nyújtva a helyi, vendégszerető kultúra megismerésére is.",
      ro: "Dragash (în albaneză Dragash sau Sharri) este cea mai sudică municipalitate și oraș din Kosovo, situat în peisajul uluitor al Munților Šar, la granița cu Albania și Macedonia de Nord. Regiunea este cunoscută pentru diversitatea sa etnică și culturală unică, fiind locuită de comunitatea Gorani, un grup slav de sud musulman care și-a păstrat limba și tradițiile specifice. Economia orașului și a satelor înconjurătoare se bazează în principal pe creșterea animalelor, în special a oilor. Brânza locală 'Šarski sir' (brânza de Šar) este o delicatesă renumită. Frumusețea naturală neatinsă a zonei, cu vârfuri montane înalte, pășuni verzi și pâraie limpezi, atrage iubitorii de natură. Dragash este punctul de plecare pentru numeroase trasee de drumeții care duc spre peisajele impresionante ale Parcului Național Munții Šar, oferind și oportunitatea de a cunoaște cultura locală ospitalieră.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Gemeinde ist offiziell zweisprachig (Albanisch und Serbisch), aber die Gorani-Sprache ist weit verbreitet.",
        "Die Gorani sind bekannt für ihre farbenprächtigen, mehrtägigen Hochzeitszeremonien.",
        "Die Region ist die Heimat des Šarplaninac, einer robusten und loyalen Hirtenhunderasse.",
        "Über 20 Gipfel in der Umgebung von Dragash sind höher als 2.500 Meter.",
        "Die traditionelle Architektur zeichnet sich durch Steinhäuser mit Schindeldächern aus.",
        "Die lokale Küche ist reich an Lammfleisch, Milchprodukten und Wildkräutern.",
        "Das Dorf Restelica ist eine der höchstgelegenen und traditionellsten Siedlungen der Gemeinde.",
        "Die Handwerkskunst, insbesondere Holzschnitzerei und Weberei, wird hier noch gepflegt."
      ],
      hu: [
        "A község hivatalosan kétnyelvű: albán és szerb, de a goráni nyelvet is széles körben beszélik.",
        "A gorániak hagyományos esküvői szertartásai több napig tartanak és rendkívül látványosak.",
        "A régióban tenyésztik a Šarplaninac (sárhegyi juhászkutya) kutyafajtát, amely kiváló őrzőkutya.",
        "A helyi konyha alapja a bárányhús, a tejtermékek és a helyben termesztett zöldségek.",
        "A Dragash környéki hegyekben több mint 20, 2500 méternél magasabb csúcs található.",
        "A terület a medve, farkas és más vadon élő állatok fontos élőhelye.",
        "A Restelica falu a község egyik legmagasabban fekvő és leghagyományosabb települése.",
        "A térségben a kézművesség, különösen a fafaragás és a szövés, még élő hagyomány."
      ],
      ro: [
        "Municipalitatea este oficial bilingvă: albaneză și sârbă, dar limba gorani este, de asemenea, vorbită pe scară largă.",
        "Cermoniile tradiționale de nuntă ale goranilor durează mai multe zile și sunt extrem de spectaculoase.",
        "Regiunea este locul de origine al rasei de câini Šarplaninac (Ciobănesc de Šar), un excelent câine de pază.",
        "Bucătăria locală se bazează pe carne de miel, produse lactate și legume cultivate local.",
        "În munții din jurul Dragash există peste 20 de vârfuri cu o înălțime de peste 2.500 de metri.",
        "Zona este un habitat important pentru urși, lupi și alte animale sălbatice.",
        "Satul Restelica este una dintre cele mai înalte și mai tradiționale așezări din municipalitate.",
        "Meșteșugurile, în special sculptura în lemn și țesutul, sunt încă tradiții vii în zonă."
      ],
      en: []
    }
  },
  {
    id: "xk-restelica", type: "city", parent: "XK-003", coords: [20.67, 41.94],
    name: { de: "Restelica", hu: "Restelica", ro: "Restelica", en: "Restelica" },
    description: { de: "Eines der höchstgelegenen Dörfer im Kosovo.", hu: "Koszovó egyik legmagasabban fekvő faluja.", ro: "Unul dintre cele mai înalte sate din Kosovo.", en: "One of the highest villages in Kosovo." },
    facts: {
      de: ["Bekannt für traditionelle Architektur.", "Sehr schneereiche Winter.", "Teil der Gora-Region."],
      hu: ["Hagyományos építészetéről ismert.", "Nagyon havas telek jellemzik.", "A Gora régió része."],
      ro: ["Cunoscut pentru arhitectura tradițională.", "Ierni foarte bogate în zăpadă.", "Parte a regiunii Gora."],
      en: ["Known for traditional architecture.", "Very snowy winters.", "Part of the village in the Gora region."]
    },
    descriptionAdvanced: {
      de: "Restelica ist ein malerisches Dorf in der Gemeinde Dragash, hoch oben in den Šar-Bergen gelegen und eine der höchstgelegenen Siedlungen im Kosovo. Als eine der letzten Bastionen der Gorani-Kultur bewahren die Einwohner stolz ihre alten Traditionen, ihre Sprache und ihre Lebensweise. Die Landschaft wird von steilen Berghängen, üppigen Weiden und traditionellen, aus Stein und Holz gebauten Häusern geprägt. Die Winter sind hier extrem hart und schneereich, was das Dorf oft monatelang von der Außenwelt abschneidet. Die Haupteinnahmequelle der Einheimischen ist die Viehzucht. Ein Besuch in Restelica ist wie eine Zeitreise: fernab vom Lärm der modernen Welt erhalten Besucher einen Einblick in das Leben einer authentischen, gastfreundlichen Gemeinschaft, umgeben von der dramatischen Schönheit der Berge.",
      hu: "Restelica a Dragash községben, a Šar-hegység magaslatain megbúvó festői falu, amely Koszovó egyik legmagasabban fekvő és legelszigeteltebb települése. A falu a goráni kultúra egyik utolsó bástyája, ahol a lakosok büszkén őrzik ősi hagyományaikat, nyelvüket és életmódjukat. A tájra a meredek hegyoldalak, a zöldellő legelők és a hagyományos, kőből és fából épült házak jellemzőek. A telek itt rendkívül zordak és hóban gazdagok, gyakran előfordul, hogy a falu hónapokra el van vágva a külvilágtól. A helyiek fő megélhetési forrása az állattenyésztés. Restelica meglátogatása olyan, mint egy időutazás: a modern világ zajától távol a látogatók egy autentikus, vendégszerető közösség életébe nyerhetnek bepillantást, miközben a környező hegyek drámai szépségében gyönyörködhetnek.",
      ro: "Restelica este un sat pitoresc ascuns în înălțimile Munților Šar, în municipalitatea Dragash, fiind una dintre cele mai înalte și mai izolate așezări din Kosovo. Satul este un ultim bastion al culturii Gorani, unde locuitorii își păstrează cu mândrie tradițiile, limba și modul de viață ancestral. Peisajul este caracterizat de versanți abrupți, pășuni verzi și case tradiționale construite din piatră și lemn. Iernile aici sunt extrem de aspre și bogate în zăpadă, satul fiind adesea izolat de restul lumii pentru luni de zile. Principala sursă de venit pentru localnici este creșterea animalelor. O vizită în Restelica este ca o călătorie în timp: departe de zgomotul lumii moderne, vizitatorii pot arunca o privire în viața unei comunități autentice și ospitaliere, în timp ce se bucură de frumusețea dramatică a munților din jur.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Dorf liegt auf einer Höhe von etwa 1.400 Metern über dem Meeresspiegel.",
        "Die traditionellen Gorani-Häuser (Kule) sind hohe, turmartige Gebäude mit dicken Steinmauern.",
        "Die lokale Hochzeitstracht ist äußerst prunkvoll; das Gesicht der Braut wird mit komplexen Mustern bemalt.",
        "Der Name 'Gora' ist slawischen Ursprungs und bedeutet 'Berg' oder 'Wald'.",
        "Die Umgebung ist reich an Heil- und Gewürzkräutern, die von den Einheimischen gesammelt werden.",
        "Wanderwege vom Dorf führen zu nahegelegenen Bergseen und Gipfeln.",
        "Die Gemeinschaft ist für ihre außergewöhnliche Gastfreundschaft bekannt.",
        "Im Winter kann die Schneedecke mehrere Meter hoch sein."
      ],
      hu: [
        "A falu körülbelül 1400 méteres tengerszint feletti magasságban fekszik.",
        "A hagyományos goráni házak (kule) magas, toronyszerű épületek, vastag kőfalakkal.",
        "A helyi esküvői viselet rendkívül díszes, a menyasszony arcát bonyolult mintákkal festik ki.",
        "A falu lakossága főként goráni, de albánok is élnek itt.",
        "A környék tele van gyógy- és fűszernövényekkel, amelyeket a helyiek gyűjtenek és használnak.",
        "A 'Gora' név szláv eredetű, jelentése 'hegy' vagy 'erdő'.",
        "A faluból induló túraútvonalak elvezetnek a közeli hegyi tavakhoz és csúcsokhoz.",
        "A helyi közösség híres a vendégszeretetéről."
      ],
      ro: [
        "Satul se află la o altitudine de aproximativ 1.400 de metri deasupra nivelului mării.",
        "Casele tradiționale gorani (kule) sunt structuri înalte, asemănătoare unor turnuri, cu ziduri groase de piatră.",
        "Costumul de nuntă local este extrem de ornamentat, fața miresei fiind pictată cu modele complexe.",
        "Populația satului este predominant gorani, dar există și albanezi.",
        "Zona este bogată în plante medicinale și aromatice, pe care localnicii le culeg și le folosesc.",
        "Numele 'Gora' este de origine slavă și înseamnă 'munte' sau 'pădure'.",
        "Traseele de drumeție care pornesc din sat duc la lacuri și vârfuri montane din apropiere.",
        "Comunitatea locală este renumită pentru ospitalitatea sa."
      ],
      en: []
    }
  },
  // XK-004: Prizren
  {
    id: "xk-prizren", type: "city", parent: "XK-004", coords: [20.7397, 42.2138],
    name: { de: "Prizren", hu: "Prizren", ro: "Prizren", en: "Prizren" },
    description: { de: "Kulturelle Hauptstadt des Kosovo.", hu: "Koszovó kulturális fővárosa.", ro: "Capitala culturală a Kosovo.", en: "Cultural capital of Kosovo." },
    facts: {
      de: ["Gastgeber des Dokufest-Filmfestivals.", "Bekannt für die osmanische Steinbrücke.", "Sitz der Liga von Prizren."],
      hu: ["A Dokufest filmfesztivál házigazdája.", "Az oszmán kőhídjáról ismert.", "A Prizreni Liga székhelye."],
      ro: ["Gazda festivalului de film Dokufest.", "Cunoscut pentru podul de piatră otoman.", "Sediul Ligii de la Prizren."],
      en: ["Host of the Dokufest film festival.", "Known for its Ottoman stone bridge.", "Seat of the League of Prizren."]
    },
    descriptionAdvanced: {
      de: "Prizren gilt weithin als die kulturelle Hauptstadt des Kosovo und besticht durch seine unvergleichliche Atmosphäre und historische Schönheit. Am Fuße der Šar-Berge und am Ufer des Flusses Lumbardhi gelegen, ist die Stadt ein Mosaik aus osmanischen Moscheen, orthodoxen Kirchen und eleganten alten Bürgerhäusern. Das Wahrzeichen der Stadt ist die osmanische Steinbrücke (Ura e Gurit), die sich malerisch über den Fluss spannt. Über der Stadt thront die mittelalterliche Festung Kalaja, die einen atemberaubenden Panoramablick bietet. Prizren ist nicht nur reich an Geschichte, sondern auch ein Zentrum für zeitgenössische Kultur. Jedes Jahr im August beherbergt es das Dokufest, eines der bedeutendsten Dokumentar- und Kurzfilmfestivals der Region, das die Gassen und Plätze in ein riesiges Freiluftkino verwandelt. Die Stadt ist auch berühmt für ihr feines Filigran-Silberhandwerk.",
      hu: "Prizren vitathatatlanul Koszovó legszebb és leghangulatosabb városa, igazi kulturális olvasztótégely. A Šar-hegység lábánál, a Lumbardhi (Bistrica) folyó partján fekvő város tele van oszmán kori mecsetekkel, ortodox templomokkal és elegáns, régi házakkal. A város szimbóluma a Kőhíd (Ura e Gurit), amely a folyó két partját köti össze a nyüzsgő óvárosban. A város fölé magasodó középkori erőd, a Kalaja, lenyűgöző panorámát kínál a vörös cserepes háztetőkre és a környező hegyekre. Prizren nemcsak történelmi emlékekben, hanem kulturális eseményekben is gazdag; itt rendezik meg minden évben a Dokufestet, a régió egyik legjelentősebb nemzetközi dokumentumfilm- és rövidfilm-fesztiválját. A város macskaköves utcáin sétálva, a kávézók teraszán üldögélve vagy a helyi filigrán ékszereket csodálva a látogató a Balkán egyedi, multikulturális atmoszférájába merülhet el.",
      ro: "Prizren este, fără îndoială, cel mai frumos și mai atmosferic oraș din Kosovo, un adevărat creuzet cultural. Situat la poalele Munților Šar, pe malurile râului Lumbardhi (Bistrica), orașul este plin de moschei din perioada otomană, biserici ortodoxe și case vechi elegante. Simbolul orașului este Podul de Piatră (Ura e Gurit), care leagă cele două maluri ale râului în centrul vechi plin de viață. Fortăreața medievală, Kalaja, care se înalță deasupra orașului, oferă o panoramă impresionantă asupra acoperișurilor de țiglă roșie și a munților din jur. Prizren este bogat nu numai în monumente istorice, ci și în evenimente culturale; aici are loc anual Dokufest, unul dintre cele mai importante festivaluri internaționale de film documentar și de scurtmetraj din regiune. Plimbându-vă pe străzile pietruite, stând la terasele cafenelelor sau admirând bijuteriile locale din filigran, vizitatorul se poate cufunda în atmosfera unică și multiculturală a Balcanilor.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Prizren war zeitweise die Hauptstadt des mittelalterlichen serbischen Reiches.",
        "Die Sinan-Pascha-Moschee aus dem 17. Jahrhundert dominiert die Silhouette der Stadt.",
        "Die Kirche der Muttergottes von Ljeviš aus dem 14. Jahrhundert ist ein UNESCO-Weltkulturerbe.",
        "1878 wurde hier die Liga von Prizren gegründet, eine entscheidende Bewegung für die albanische Nationalbewegung.",
        "Prizren hat eine bedeutende türkische Minderheit, und Türkisch ist eine offizielle Sprache der Gemeinde.",
        "Während des Dokufests werden Filme an einzigartigen Orten wie in der Festung und auf einer Plattform im Fluss gezeigt.",
        "Die Stadt war ein wichtiger Knotenpunkt an alten Handelsrouten, die die Adria mit dem Landesinneren verbanden.",
        "Die lokale Gastronomie ist berühmt für gegrilltes Fleisch (Qebapa) und süße Nachspeisen."
      ],
      hu: [
        "Prizren a középkori Szerb Királyság idején egy ideig fővárosként is funkcionált.",
        "A Sinan Pasa mecset a 17. században épült, és a város egyik legimpozánsabb iszlám épülete.",
        "A Ljeviši Miasszonyunk-templom a 14. századból származik és az UNESCO Világörökség része.",
        "1878-ban itt alakult meg a Prizreni Liga, az albán nemzeti mozgalom egyik fontos szervezete.",
        "Prizren a filigrán ezüstművesség központja, a mesterséget generációk adják tovább.",
        "A városban jelentős török kisebbség él, a török nyelv hivatalos használatban van a községben.",
        "A Dokufest idején a város szabadtéri mozivá alakul, a filmeket a folyóparton és a várban is vetítik.",
        "A helyi gasztronómia híres a grillezett húsokról (qebapa) és az édességekről."
      ],
      ro: [
        "În timpul Regatului Sârb medieval, Prizren a servit pentru o perioadă drept capitală.",
        "Moscheea Sinan Pașa a fost construită în secolul al XVII-lea și este una dintre cele mai impunătoare clădiri islamice din oraș.",
        "Biserica Maicii Domnului din Ljeviš datează din secolul al XIV-lea și este un sit al Patrimoniului Mondial UNESCO.",
        "În 1878, aici a fost formată Liga de la Prizren, o organizație importantă a mișcării naționale albaneze.",
        "Prizren este un centru al meșteșugului de filigran în argint, o artă transmisă de-a lungul generațiilor.",
        "Orașul are o minoritate turcă semnificativă, iar limba turcă este în uz oficial în municipalitate.",
        "În timpul Dokufest, orașul se transformă într-un cinematograf în aer liber, cu proiecții pe malul râului și la fortăreață.",
        "Gastronomia locală este renumită pentru carnea la grătar (qebapa) și deserturi."
      ],
      en: []
    }
  },
  {
    id: "xk-kalaja-prizren", type: "historical", parent: "XK-004", coords: [20.74, 42.21],
    name: { de: "Festung von Prizren", hu: "Prizren vára", ro: "Cetatea Prizren", en: "Prizren Fortress" },
    description: { de: "Mittelalterliche Festung mit Blick über Prizren.", hu: "Középkori erőd, kilátással Prizrenre.", ro: "Cetate medievală cu vedere peste Prizren.", en: "Medieval fortress overlooking Prizren." },
    facts: {
      de: ["Bietet den besten Panoramablick auf die Stadt.", "Ursprünglich byzantinisch, später osmanisch erweitert.", "Nationaldenkmal des Kosovo."],
      hu: ["A legjobb panorámát nyújtja a városra.", "Eredetileg bizánci, később oszmán bővítéssel.", "Koszovó nemzeti műemléke."],
      ro: ["Oferă cea mai bună vedere panoramică asupra orașului.", "Originar bizantină, extinsă ulterior de otomani.", "Monument național al Kosovo."],
      en: ["Offers the best panoramic view of the city.", "Originally Byzantine, later expanded by the Ottomans.", "National monument of Kosovo."]
    },
    descriptionAdvanced: {
      de: "Die Festung von Prizren, Kalaja genannt, thront auf einem Hügel über der Altstadt und ist das markanteste Wahrzeichen der Stadt. Ihre Ursprünge reichen bis in die Antike zurück, mit Spuren von illyrischen und römischen Siedlungen. Die heutige Struktur ist das Ergebnis von Erweiterungen und Umbauten durch Byzantiner, Serben und Osmanen, die die Festung über die Jahrhunderte hinweg als strategischen Verteidigungspunkt nutzten. Ein Spaziergang durch die Ruinen der Oberen und Unteren Burg offenbart die komplexe Geschichte des Ortes. Der Aufstieg zur Festung wird mit einem unvergleichlichen 360-Grad-Blick auf die roten Ziegeldächer von Prizren, das Tal des Flusses Lumbardhi und die Gipfel der Šar-Berge belohnt. Heute ist die Festung ein archäologischer Park und ein beliebter Veranstaltungsort, insbesondere während des Dokufest-Filmfestivals.",
      hu: "A prizreni vár (Kalaja e Prizrenit) a város fölé magasodó dombon trónol, őrködve a macskaköves utcák és a vörös cserepes háztetők felett. Ez a monumentális erődítmény az ókortól kezdve stratégiai fontosságú pont volt. A régészeti leletek tanúsága szerint már az illírek idején is erődítmény állt itt, majd a rómaiak, a bizánciak, a szerbek és az oszmánok is birtokolták és folyamatosan bővítették. A vár mai formája nagyrészt a középkori és oszmán kori átépítések eredménye. A fellegvárból lélegzetelállító, 360 fokos panoráma nyílik Prizrenre, a Lumbardhi folyó völgyére és a Šar-hegység vonulataira. A vár területe ma régészeti parkként működik, ahol a látogatók felfedezhetik a különböző korokból származó falmaradványokat, tornyokat és épületeket, és bepillantást nyerhetnek a régió viharos történelmébe.",
      ro: "Cetatea Prizren (Kalaja e Prizrenit) tronează pe un deal deasupra orașului, veghind asupra străzilor pietruite și a acoperișurilor de țiglă roșie. Această fortificație monumentală a fost un punct strategic încă din antichitate. Descoperirile arheologice atestă existența unei fortificații aici încă din vremea ilirilor, fiind ulterior deținută și extinsă continuu de romani, bizantini, sârbi și otomani. Forma actuală a cetății este în mare parte rezultatul reconstrucțiilor medievale și otomane. De pe citadelă se deschide o panoramă uluitoare de 360 de grade asupra Prizrenului, a văii râului Lumbardhi și a lanțului Munților Šar. Astăzi, zona cetății funcționează ca un parc arheologic, unde vizitatorii pot explora ruinele zidurilor, turnurilor și clădirilor din diferite epoci și pot arunca o privire în istoria zbuciumată a regiunii.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die frühesten archäologischen Funde auf dem Festungshügel stammen aus der frühen Eisenzeit.",
        "Die Festung war eine wichtige Residenz der serbischen Nemanjić-Dynastie im Mittelalter.",
        "Die Osmanen eroberten die Festung im 15. Jahrhundert und bauten sie erheblich aus.",
        "Bis Anfang des 20. Jahrhunderts hatte die Festung eine militärische Funktion.",
        "Innerhalb der Mauern befanden sich einst Moscheen, Kirchen, Kasernen und Wohngebäude.",
        "Die Mauern sind an manchen Stellen bis zu 3 Meter dick.",
        "Ein steiler, aber charmanter Kopfsteinpflasterweg führt von der Altstadt hinauf zur Festung.",
        "Die Festung ist rund um die Uhr für Besucher geöffnet und bietet besonders bei Sonnenuntergang eine magische Atmosphäre."
      ],
      hu: [
        "A vár területe három fő részre oszlik: az alsó várra, a felső várra és a déli kiterjesztésre.",
        "A falakon belül egykor mecset, templomok, laktanyák és lakóépületek is álltak.",
        "A legkorábbi régészeti leletek a kora vaskorból származnak.",
        "A vár a középkori Szerb Királyság idején a Nemanjić-dinasztia egyik fontos székhelye volt.",
        "Az oszmánok a 15. században hódították meg és építették át jelentősen.",
        "A 20. század elejéig katonai funkciót töltött be.",
        "A Dokufest filmfesztivál idején a várban is tartanak vetítéseket.",
        "A várhoz egy meredek, de hangulatos macskaköves út vezet fel az óvárosból."
      ],
      ro: [
        "Zona cetății este împărțită în trei părți principale: Cetatea de Jos, Cetatea de Sus și extensia sudică.",
        "În interiorul zidurilor existau odinioară o moschee, biserici, cazărmi și clădiri rezidențiale.",
        "Cele mai vechi descoperiri arheologice datează din prima epocă a fierului.",
        "În timpul Regatului Sârb medieval, cetatea a fost o reședință importantă a dinastiei Nemanjić.",
        "Otomanii au cucerit-o în secolul al XV-lea și au reconstruit-o în mod semnificativ.",
        "A avut o funcție militară până la începutul secolului al XX-lea.",
        "În timpul festivalului de film Dokufest, în cetate au loc proiecții de film.",
        "Un drum pietruit abrupt, dar plin de farmec, duce la cetate din orașul vechi."
      ],
      en: []
    }
  },
  // XK-005: Gnjilane
  {
    id: "xk-gjilan", type: "city", parent: "XK-005", coords: [21.46, 42.46],
    name: { de: "Gjilan", hu: "Gjilan", ro: "Gjilan", en: "Gjilan" },
    description: { de: "Wirtschaftszentrum im Osten des Kosovo.", hu: "Gazdasági központ Kelet-Koszovóban.", ro: "Centru economic în estul Kosovo.", en: "Economic center in eastern Kosovo." },
    facts: {
      de: ["Bekannt für seine Gastfreundschaft.", "Wichtiger Verkehrsknotenpunkt.", "Sitz mehrerer Universitäten."],
      hu: ["Vendégszeretetéről ismert.", "Fontos közlekedési csomópont.", "Több egyetem székhelye."],
      ro: ["Cunoscut pentru ospitalitatea sa.", "Important nod de transport.", "Sediul mai multor universități."],
      en: ["Known for its hospitality.", "Important transport hub.", "Seat of several universities."]
    },
    descriptionAdvanced: {
      de: "Gjilan, das administrative und wirtschaftliche Zentrum der Region Anamorava im Osten des Kosovo, ist eine dynamische und moderne Stadt. Sie liegt in einer fruchtbaren Ebene und ist ein wichtiger Verkehrsknotenpunkt auf der Route zwischen Pristina und dem Preševo-Tal in Südserbien. Obwohl Gjilan nicht den historischen Reichtum von Prizren aufweist, hat es sich zu einer lebhaften Stadt mit regem Handel und einem pulsierenden sozialen Leben entwickelt. Das Stadtzentrum ist von breiten Boulevards und modernen Gebäuden geprägt, doch finden sich auch noch Spuren der osmanischen Vergangenheit. Gjilan ist eine multikulturelle Stadt, in der neben der albanischen Mehrheit auch serbische und Roma-Gemeinschaften leben. Die Stadt beherbergt mehrere Hochschuleinrichtungen und ist bekannt für ihre lebendige Café-Kultur und die Gastfreundschaft ihrer Einwohner.",
      hu: "Gjilan (szerbül Gnjilane) Koszovó keleti részének, az Anamorava régiónak a gazdasági és adminisztratív központja. A város a Morava e Binçës folyó mentén, termékeny síkságon terül el, és fontos közlekedési csomópont a Pristina és a dél-szerbiai Preševo-völgy közötti útvonalon. Bár nem rendelkezik Prizrenhez hasonló gazdag történelmi örökséggel, Gjilan egy dinamikusan fejlődő, modern város, élénk kereskedelemmel és pezsgő társadalmi élettel. A város központját a széles sugárutak és modern épületek jellemzik, de megtalálhatók a régi, oszmán stílusú házak is. Gjilan multikulturális város, ahol az albán többség mellett szerb és roma közösségek is élnek. A város otthont ad több felsőoktatási intézménynek és ismert a helyiek vendégszeretetéről, valamint a nyüzsgő kávézóiról és éttermeiről.",
      ro: "Gjilan (în sârbă Gnjilane) este centrul economic și administrativ al regiunii Anamorava din estul Kosovo. Orașul este situat pe o câmpie fertilă de-a lungul râului Morava e Binçës și este un nod de transport important pe ruta dintre Pristina și Valea Preševo din sudul Serbiei. Deși nu are un patrimoniu istoric la fel de bogat ca Prizren, Gjilan este un oraș modern, în dezvoltare dinamică, cu un comerț activ și o viață socială vibrantă. Centrul orașului este caracterizat de bulevarde largi și clădiri moderne, dar se pot găsi și case vechi în stil otoman. Gjilan este un oraș multicultural, cu o majoritate albaneză și comunități de sârbi și romi. Orașul găzduiește mai multe instituții de învățământ superior și este cunoscut pentru ospitalitatea localnicilor, precum și pentru cafenelele și restaurantele sale pline de viață.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Stadt wurde in der zweiten Hälfte des 18. Jahrhunderts von der einflussreichen albanischen Familie Gjinolli gegründet.",
        "Gjilan ist das Handelszentrum für die umliegenden landwirtschaftlichen Gebiete.",
        "Jedes Jahr im Januar findet hier das große Kulturfestival 'Flaka e Janarit' (Flamme des Januars) statt.",
        "Das Stadttheater von Gjilan ist eine der aktivsten kulturellen Institutionen des Landes.",
        "In der Nähe der Stadt befinden sich die Ruinen der mittelalterlichen Festung Pogragja.",
        "Die Region ist historisch für den Anbau von hochwertigem Tabak bekannt.",
        "Die beiden lokalen Fußballvereine, KF Gjilani und KF Drita, pflegen eine der intensivsten Rivalitäten im kosovarischen Fußball.",
        "Die Stadt hat eine starke Diaspora-Gemeinschaft, die zur wirtschaftlichen Entwicklung beiträgt."
      ],
      hu: [
        "A várost a 18. század második felében alapította a Gjinolli család, egy befolyásos albán földesúri família.",
        "Gjilan a környező mezőgazdasági területek kereskedelmi központja.",
        "A városban működik a Flaka e Janarit, egy jelentős kulturális fesztivál, amelyet minden januárban megrendeznek.",
        "A városi színház az ország egyik legaktívabb kulturális intézménye.",
        "A község területén található a Pogragja vára, egy középkori erődítmény romjai.",
        "A környék híres a minőségi dohánytermesztésről.",
        "Gjilanban jelentős a textil- és élelmiszeripar.",
        "A város sportélete is élénk, a KF Gjilani és a KF Drita a koszovói labdarúgó-bajnokság élvonalában szerepel."
      ],
      ro: [
        "Orașul a fost fondat în a doua jumătate a secolului al XVIII-lea de către familia Gjinolli, o influentă familie de moșieri albanezi.",
        "Gjilan este centrul comercial pentru zonele agricole înconjurătoare.",
        "Orașul găzduiește Flaka e Janarit, un important festival cultural organizat în fiecare ianuarie.",
        "Teatrul orașului este una dintre cele mai active instituții culturale din țară.",
        "Pe teritoriul municipalității se află Cetatea Pogragja, ruinele unei fortificații medievale.",
        "Zona este renumită pentru cultivarea tutunului de înaltă calitate.",
        "În Gjilan există o industrie textilă și alimentară semnificativă.",
        "Viața sportivă a orașului este, de asemenea, vibrantă, cu cluburile KF Gjilani și KF Drita concurând în prima ligă de fotbal din Kosovo."
      ],
      en: []
    }
  },
  {
    id: "xk-pogragja-castle", type: "historical", parent: "XK-005", coords: [21.58, 42.42],
    name: { de: "Burg Pogragja", hu: "Pogragja vára", ro: "Cetatea Pogragja", en: "Pogragja Castle" },
    description: { de: "Mittelalterliche Burgruine nahe Gjilan.", hu: "Középkori várrom Gjilan közelében.", ro: "Ruinele unei cetăți medievale lângă Gjilan.", en: "Medieval castle ruins near Gjilan." },
    facts: {
      de: ["Erbaut im 14. Jahrhundert.", "Diente dem Schutz der Handelswege.", "Strategisch auf einem Hügel gelegen."],
      hu: ["A 14. században épült.", "A kereskedelmi utak védelmét szolgálta.", "Stratégiailag egy dombon helyezkedik el."],
      ro: ["Construită în secolul al XIV-lea.", "A servit la protejarea rutelor comerciale.", "Situată strategic pe un deal."],
      en: ["Built in the 14th century.", "Served to protect trade routes.", "Strategically located on a hill."]
    },
    descriptionAdvanced: {
      de: "Die Burg Pogragja (Kalaja e Pogragjës) liegt etwa 10 Kilometer südöstlich von Gjilan auf einem strategisch wichtigen Hügel auf 567 Metern Höhe. Die Festung wurde wahrscheinlich im 6. Jahrhundert während der byzantinischen Zeit erbaut, um die Handelsrouten zu schützen, die zur wohlhabenden Minenstadt Novo Brdo führten, und wurde im Mittelalter weiter ausgebaut. Obwohl heute nur noch Ruinen erhalten sind, zeugen die verbliebenen Mauern und Turmreste von ihrer einstigen Stärke. Die oval angelegte Festung bietet einen herrlichen Ausblick auf das umliegende Anamorava-Tal. Die Ruinen sind ein beliebtes Ausflugsziel für Einheimische und geschichtsinteressierte Touristen, die nach einer kurzen Wanderung die historische Atmosphäre und die weite Aussicht genießen können.",
      hu: "Pogragja vára (Kalaja e Pogragjës) Gjilan városától mintegy 10 kilométerre délkeletre, egy stratégiai fontosságú, 567 méter magas domb tetején található. A vár a 14. században épült, és elsődleges feladata a Novo Brdo bányaváros felé vezető fontos kereskedelmi útvonalak ellenőrzése és védelme volt. Az erődítmény ovális alaprajzú, falait több torony erősítette. Bár ma már csak romos állapotban látható, a megmaradt falak és torony-maradványok is sejtetik egykori erejét és jelentőségét. A várból csodálatos kilátás nyílik a környező Anamorava-völgyre. A helyszín népszerű kirándulóhely a helyiek és a történelem iránt érdeklődő turisták körében, akik egy rövid túrával érhetik el a romokat és élvezhetik a panorámát és a történelmi atmoszférát.",
      ro: "Cetatea Pogragja (Kalaja e Pogragjës) este situată la aproximativ 10 kilometri sud-est de orașul Gjilan, pe un deal strategic la 567 de metri înălțime. Cetatea a fost construită în secolul al XIV-lea, iar sarcina sa principală era de a controla și proteja rutele comerciale importante care duceau spre orașul minier Novo Brdo. Fortificația are un plan oval, cu ziduri întărite de mai multe turnuri. Deși astăzi se află în ruine, zidurile și rămășițele turnurilor care au supraviețuit încă sugerează puterea și importanța sa de odinioară. De la cetate se deschide o priveliște minunată asupra văii Anamorava din jur. Locul este o destinație populară pentru excursii printre localnici și turiștii interesați de istorie, care pot ajunge la ruine printr-o scurtă drumeție și se pot bucura de panoramă și de atmosfera istorică.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Archäologische Funde deuten auf eine Gründung im 6. Jahrhundert unter Kaiser Justinian I. hin.",
        "Die Mauern der Festung sind an einigen Stellen bis zu 2 Meter dick.",
        "Bei Ausgrabungen wurden Keramikfragmente und verschiedene Werkzeuge gefunden.",
        "Die Festung war Teil des Verteidigungssystems des mittelalterlichen serbischen Staates und später des Osmanischen Reiches.",
        "Eine lokale Legende besagt, dass die Burg von Feen in einer einzigen Nacht erbaut wurde.",
        "Die Ruinen sind frei zugänglich und bieten eine großartige Gelegenheit, Geschichte und Natur zu verbinden.",
        "Der Hügel, auf dem die Burg steht, ist vom nahegelegenen Dorf aus leicht zu erreichen.",
        "Die strategische Lage ermöglichte die Kontrolle über ein weites Gebiet."
      ],
      hu: [
        "A várat valószínűleg a Bizánci Birodalom idején, a 6. században alapították, és a középkorban építették újjá.",
        "A falak vastagsága helyenként eléri a 2 métert.",
        "A régészeti feltárások során kerámiatöredékeket és különböző használati tárgyakat találtak.",
        "A vár a középkori szerb állam, majd az Oszmán Birodalom védelmi rendszerének is része volt.",
        "A legenda szerint a várat egyetlen éjszaka alatt építették tündérek.",
        "A várromok szabadon látogathatók.",
        "A domb, amelyen a vár áll, könnyen megközelíthető a közeli faluból.",
        "A helyszín kiváló lehetőséget nyújt a történelem és a természetjárás összekapcsolására."
      ],
      ro: [
        "Cetatea a fost probabil fondată în timpul Imperiului Bizantin în secolul al VI-lea și reconstruită în Evul Mediu.",
        "Grosimea zidurilor atinge pe alocuri 2 metri.",
        "În timpul săpăturilor arheologice au fost găsite fragmente ceramice și diverse unelte.",
        "Cetatea a făcut parte din sistemul defensiv al statului sârb medieval și, mai târziu, al Imperiului Otoman.",
        "O legendă locală spune că cetatea a fost construită într-o singură noapte de către zâne.",
        "Ruinele cetății pot fi vizitate liber.",
        "Dealul pe care se află cetatea este ușor accesibil din satul din apropiere.",
        "Locația oferă o oportunitate excelentă de a combina istoria cu drumețiile în natură."
      ],
      en: []
    }
  }
]
.map(p => {
    if(p.id.startsWith("xk-")) {
        // @ts-ignore
        p.descriptionAdvanced = p.descriptionAdvanced || { de: "", hu: "", ro: "", en: "" };
        // @ts-ignore
        p.factsAdvanced = p.factsAdvanced || { de: [], hu: [], ro: [], en: [] };
    }
    return p;
});

export const kosovoAllPoi: POI[] = [
  kosovoCountry,
  ...kosovoPois
];
