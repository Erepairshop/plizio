import type { POI } from "./poi";

export const albaniaCountry: POI = {
  id: "country-albania",
  name: {
    de: "Albanien",
    hu: "Albánia",
    ro: "Albania",
    en: "Albania"
  },
  description: {
    de: "Land der Adler",
    hu: "A sasok földje",
    ro: "Țara Vulturilor",
    en: "Land of the Eagles"
  },
  descriptionAdvanced: {
    de: "Ein faszinierendes Land auf der Balkanhalbinsel mit einer reichen Geschichte, beeindruckenden Berglandschaften und einer wunderschönen Adriaküste.",
    hu: "Albánia a Balkán-félsziget délnyugati részén fekvő ország, amely lenyűgöző természeti adottságaival és gazdag történelmi múltjával várja a látogatókat. Az ország partjait az Adriai- és a Jón-tenger mossa, kristálytiszta strandjai pedig vetekednek a népszerűbb mediterrán úti célokéval. A tájat vadregényes hegyvonulatok, mint például az Albán-Alpok, és mély kanyonok teszik változatossá, ahol a túrázók érintetlen természetre bukkanhatnak. Történelme során Albánia görög, római, bizánci és oszmán hatások alatt állt, ami az építészetében és kulturális szokásaiban is visszatükröződik. Az ország hosszú ideig elszigetelten élt a világtól, de mára Európa egyik leggyorsabban fejlődő és legvendégszeretőbb turisztikai célpontjává vált.",
    ro: "O țară fascinantă din Peninsula Balcanică, cu o istorie bogată, peisaje montane impresionante și o coastă adriatică superbă.",
    en: "Albania, situated on the Balkan Peninsula, is a hidden gem that boasts a stunning coastline along the Adriatic and Ionian Seas. The country offers a unique blend of Ottoman-era architecture, ancient Greek and Roman ruins, and rugged mountain ranges known as the 'Accursed Mountains'. For decades, it remained isolated from the world, which helped preserve its rich cultural heritage and pristine natural landscapes. Today, it is becoming a top destination for adventurers seeking off-the-beaten-path experiences and warm Mediterranean hospitality. Visitors can explore vibrant cities, remote mountain villages, and some of the cleanest beaches in Europe."
  },
  factsAdvanced: {
    de: [],
    hu: [
        "Albánia büszkélkedhet a világ egyik legkülönlegesebb nyelvével, amely nem hasonlít semmilyen más európai nyelvhez.",
        "Az országban több mint 170 000 betonbunker található, amelyeket a kommunista diktatúra idején építettek országszerte.",
        "Albánia partvonalát két tenger, az Adriai és a Jón-tenger mossa, amelyek a Vlorë-öbölnél találkoznak.",
        "Az ország vallási toleranciája világhírű, a különböző felekezetek évszázadok óta békében élnek egymás mellett.",
        "Albánia az egyik legnagyobb króm- és vízenergia-termelő a balkáni régióban."],
    ro: [
      "Albania a fost una dintre cele mai izolate țări din lume în timpul regimului comunist.",
      "Peste 170.000 de buncăre sunt răspândite pe întreg teritoriul țării.",
      "Albania este una dintre puținele țări europene fără restaurante McDonald's.",
      "Codul de onoare Besa obligă albanezii să protejeze oaspeții cu prețul propriei vieți."
    ],
    en: [
      "The country has more than 170,000 concrete bunkers built during the communist era to defend against potential invasions.",
      "Albania is one of the few countries in Europe that has no McDonald's restaurants, favoring local fast-food traditions.",
      "The traditional code of honor known as 'Besa' dictates that protecting a guest is a sacred duty above all else.",
      "It is one of the world's leading producers of medicinal herbs, which grow abundantly in its diverse climate zones."
    ]
  },
  type: "country",
  coords: [20.1683, 41.1533],
  parent: "europe",
  facts: {
    de: [
      "Albanien hat über 300 Sonnentage im Jahr.",
      "Die albanische Sprache ist ein eigener Zweig der indogermanischen Sprachen.",
      "Es gibt mehr Albaner, die außerhalb des Landes leben als innerhalb.",
      "Mutter Teresa war albanischer Herkunft.",
      "Das Land hat eine der gastfreundlichsten Kulturen der Welt."
    ],
    hu: [
      "Albániában évente több mint 300 napsütéses nap van.",
      "Az albán nyelv az indoeurópai nyelvcsalád különálló ága.",
      "Több albán él az országon kívül, mint azon belül.",
      "Teréz anya albán származású volt.",
      "Az ország a világ egyik legvendégszeretőbb kultúrájával rendelkezik."
    ],
    ro: [
      "Albania are peste 300 de zile însorite pe an.",
      "Limba albaneză este o ramură distinctă a limbilor indoeuropene.",
      "Există mai mulți albanezi care trăiesc în afara țării decât în interiorul ei.",
      "Maica Tereza a fost de origine albaneză.",
      "Țara are una dintre cele mai ospitaliere culturi din lume."
    ],
    en: [
      "Albania has over 300 sunny days a year.",
      "The Albanian language is a distinct branch of the Indo-European languages.",
      "There are more Albanians living outside the country than inside.",
      "Mother Teresa was of Albanian descent.",
      "The country has one of the most hospitable cultures in the world."
    ]
  }
};

export const albaniaCities: POI[] = [
  {
    id: "city-tirana",
    name: { de: "Tirana", hu: "Tirana", ro: "Tirana", en: "Tirana" },
    description: { de: "Die Hauptstadt", hu: "A főváros", ro: "Capitala", en: "The capital" },
    descriptionAdvanced: {
      de: "Die pulsierende Hauptstadt Albaniens.",
      hu: "Tirana, Albánia lüktető fővárosa, az ország politikai, gazdasági és kulturális központja, amely az utóbbi évtizedekben látványos átalakuláson ment keresztül. A város egyik legismertebb jellegzetessége a színesre festett épületek sora, amelyeket a korábbi polgármester kezdeményezésére varázsoltak vidámmá a szürke kommunista tömbökből. A város szíve a Szkander bég tér, ahol az ország nemzeti hősének szobra mellett történelmi mecsetek és modern középületek sorakoznak. Tirana tele van kávézókkal, élettel teli terekkel és parkokkal, ahol a látogatók megtapasztalhatják a modern balkáni életérzést. A közeli Dajti-hegyre felvonóval juthatunk fel, ahonnan páratlan kilátás nyílik a terjeszkedő metropoliszra és a környékre.",
      ro: "Capitala vibrantă a Albaniei.",
      en: "Tirana, the capital of Albania, has undergone a dramatic transformation from a gray communist center to a vibrant, colorful metropolis. The city is famous for its buildings painted in bright primary colors, a project initiated to revitalize the urban environment. At its heart lies Skanderbeg Square, surrounded by important landmarks like the National History Museum and the Et'hem Bey Mosque. Tirana is also a city of contrasts, where Ottoman-style houses sit alongside sleek modern skyscrapers and remnants of the socialist past. The Blloku district, once reserved for the communist elite, is now a trendy hub of cafes, restaurants, and nightlife."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A város központjában található Szkander bég tér 1968-ban kapta mai nevét az albán nemzeti hős után.",
        "Tirana az 1990-es évek óta hatalmas átalakuláson ment keresztül, ma már modern felhőkarcolók és bevásárlóközpontok tarkítják.",
        "A város körüli hegyek, mint például a Dajti-hegy, népszerű hétvégi kirándulóhelyek a helyiek számára.",
        "A tiranai piramis, amelyet eredetileg Enver Hoxha múzeumának szántak, ma kulturális központként funkcionál.",
        "A Blloku negyed, amely egykor a kommunista elit zárt lakóhelye volt, ma a város legdivatosabb szórakozónegyede."],
      ro: [
        "Tirana este faimoasă pentru clădirile sale vopsite în culori extrem de vii.",
        "Piața Skanderbeg reprezintă inima orașului și locul principal de întâlnire.",
        "Piramida din Tirana a fost inițial construită ca un muzeu pentru fostul dictator.",
        "Muzeele Bunk'Art sunt buncăre nucleare transformate în spații expoziționale fascinante."
      ],
      en: [
        "The Pyramid of Tirana was originally built as a museum for the former dictator Enver Hoxha and is now a modern youth center.",
        "The city is surrounded by mountains and hills, with Mount Dajti accessible by one of the longest cable cars in the Balkans.",
        "Tirana features unique 'Bunk'Art' museums, which are former nuclear bunkers converted into contemporary art and history spaces.",
        "The city's Clock Tower, built in 1822, was once the tallest building in Tirana and remains a symbol of the capital."
      ]
    },
    type: "city",
    coords: [19.8187, 41.3275],
    parent: "AL-009",
    facts: {
      de: ["Hauptstadt seit 1920.", "Bekannt für bunte Gebäude.", "Zentrum der albanischen Kultur."],
      hu: ["1920 óta főváros.", "Színes épületeiről ismert.", "Az albán kultúra központja."],
      ro: ["Capitală din 1920.", "Cunoscută pentru clădirile colorate.", "Centrul culturii albaneze."],
      en: ["Capital since 1920.", "Known for colorful buildings.", "Center of Albanian culture."]
    }
  },
  {
    id: "city-durres",
    name: { de: "Durrës", hu: "Durrës", ro: "Durrës", en: "Durrës" },
    description: { de: "Hafenstadt", hu: "Kikötőváros", ro: "Oraș portuar", en: "Port city" },
    descriptionAdvanced: {
      de: "Eine der ältesten Städte Albaniens mit einem großen römischen Amphitheater.",
      hu: "Durrës Albánia második legnagyobb városa és legfontosabb kikötője, amely több mint 2500 éves múltra tekint vissza. Az ókorban Epidamnosz, majd Dyrrhachium néven ismert település a római korban a Via Egnatia, a Konstantinápolyba vezető kereskedelmi útvonal kiindulópontja volt. Itt található a Balkán-félsziget legnagyobb római kori amfiteátruma, amely egykor 20 000 néző befogadására volt képes. A modern Durrës egy népszerű tengerparti üdülőhely, ahol a történelmi romok és a pezsgő strandélet harmonikusan megférnek egymás mellett. Hosszú homokos strandjai és a tengerparti sétány miatt a város a helyiek és a turisták egyik kedvenc nyári célpontja.",
      ro: "Unul dintre cele mai vechi orașe din Albania, cu un mare amfiteatru roman.",
      en: "Durrës is Albania's second-largest city and its most important port, with a history stretching back over 2,500 years. Founded as Epidamnos by Greek colonists, it later became a vital Roman hub known as Dyrrhachium, serving as the starting point of the Via Egnatia. The city is home to the largest Roman amphitheater in the Balkans, which once held up to 20,000 spectators and features rare early Christian mosaics. Today, Durrës is a popular seaside destination where ancient ruins coexist with a bustling modern beach scene. Its coastal promenade and archaeological museum make it a key center for both culture and tourism."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Durrës római kori amfiteátruma a Balkán-félsziget egyik legnagyobb ilyen jellegű építménye, amelyet a 2. században emeltek.",
        "A város az ókorban Epidamnosz, majd Dyrrhachium néven volt ismert, és fontos állomása volt a Via Egnatia útvonalnak.",
        "Durrës kikötője Albánia legfontosabb tengeri kapuja, amely összeköti az országot Olaszországgal és Görögországgal.",
        "A város tengerparti sétánya, a Vollga, a helyiek kedvenc találkozóhelye, különösen naplementekor.",
        "A durrësi Régészeti Múzeumban őrzik az ország egyik leggazdagabb ókori leletgyűjteményét."],
      ro: [
        "Amfiteatrul din Durrës este cel mai mare de acest tip din Peninsula Balcanică.",
        "Orașul a fost fondat în anul 627 î.Hr. de către coloniști greci.",
        "Durrës a fost un punct de plecare crucial pentru drumul antic Via Egnatia.",
        "Zidurile castelului medieval oferă o perspectivă asupra importanței istorice a portului."
      ],
      en: [
        "The Roman Amphitheater was rediscovered accidentally in the 1960s during construction work.",
        "The city's Byzantine walls are some of the best-preserved fortifications on the Adriatic coast.",
        "Durrës served as the capital of Albania for a brief period between 1914 and 1920.",
        "The Archaeological Museum of Durrës is the largest of its kind in the country, housing artifacts from Illyrian and Roman times."
      ]
    },
    type: "city",
    coords: [19.4558, 41.3246],
    parent: "AL-010",
    facts: {
      de: ["Größter Hafen des Landes.", "Antikes Amphitheater.", "Beliebter Strandort."],
      hu: ["Az ország legnagyobb kikötője.", "Ókori amfiteátrum.", "Népszerű tengerparti hely."],
      ro: ["Cel mai mare port al țării.", "Amfiteatru antic.", "Stațiune populară."],
      en: ["Largest port in the country.", "Ancient amphitheater.", "Popular beach destination."]
    }
  },
  {
    id: "city-vlore",
    name: { de: "Vlorë", hu: "Vlorë", ro: "Vlorë", en: "Vlorë" },
    description: { de: "Stadt der Unabhängigkeit", hu: "A függetlenség városa", ro: "Orașul independenței", en: "City of independence" },
    descriptionAdvanced: {
      de: "Hier wurde 1912 die Unabhängigkeit Albaniens ausgerufen.",
      hu: "Vlorë egy történelmi jelentőségű kikötőváros az Adriai- és a Jón-tenger találkozásánál, ahol 1912-ben kikiáltották Albánia függetlenségét. A város különleges fekvése miatt változatlan strandokkal rendelkezik: az északi részen homokos partok, délen pedig sziklás öblök és kristálytiszta víz várja a fürdőzőket. Vlorë az albán riviéra kapuja, ahonnan a látogatók könnyen elérhetik a déli partvidék legszebb falvait és természeti kincseit. A városban számos történelmi emlékmű, mint például a Függetlenségi Múzeum, emlékeztet az ország sorsfordító pillanataira. A tengerparti sugárút pálmafáival és modern éttermeivel igazi mediterrán hangulatot áraszt a látogatók számára.",
      ro: "Aici a fost proclamată independența Albaniei în 1912.",
      en: "Vlorë is a historic coastal city where the Adriatic and Ionian seas meet, creating a unique coastline of sandy beaches and rocky coves. It holds a special place in the hearts of Albanians as the site where the country's independence was proclaimed in 1912. The city is a gateway to the Albanian Riviera, offering a blend of historical monuments and modern tourist facilities. Visitors can explore the Independence Museum or take a boat trip to the nearby Sazan Island and Karaburun Peninsula. Its palm-lined boulevard and vibrant atmosphere make it one of the most attractive destinations in southern Albania."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Vlorë volt az a hely, ahol Ismail Qemali 1912. november 28-án kikiáltotta Albánia függetlenségét az Oszmán Birodalomtól.",
        "A város két tenger találkozásánál fekszik, így a látogatók élvezhetik az Adriai-tenger homokos és a Jón-tenger kavicsos strandjait is.",
        "A Vlorë melletti Sazan-sziget, amely egykor katonai bázis volt, ma már látogatható természeti park.",
        "A közeli Zvërnec-szigeten található a 13. századi Szűz Mária kolostor, amely egy fapadon keresztül érhető el.",
        "Vlorë az albán riviéra kapuja, ahonnan a látogatók elindulhatnak a déli partvidék felfedezésére."],
      ro: [
        "Independența Albaniei a fost proclamată în acest oraș în anul 1912.",
        "Vlorë este locul unde Marea Adriatică se întâlnește cu Marea Ionică.",
        "Insula Sazan din apropiere este o fostă bază militară deschisă recent turismului.",
        "Muzeul Independenței păstrează amintirea momentului fondator al statului modern."
      ],
      en: [
        "Vlorë was the first capital of independent Albania after the fall of the Ottoman Empire.",
        "The nearby Sazan Island was a restricted military zone for decades and was only recently opened to the public.",
        "The city is home to the Zvërnec Monastery, a 13th-century Byzantine site located on a small island in the Narta Lagoon.",
        "It is the starting point of the Llogara Pass, which offers some of the most dramatic coastal views in the Mediterranean."
      ]
    },
    type: "city",
    coords: [19.4897, 40.4667],
    parent: "AL-006",
    facts: {
      de: ["Wo Adria und Ionisches Meer aufeinandertreffen.", "Erste Hauptstadt Albaniens.", "Wichtige Hafenstadt."],
      hu: ["Ahol az Adria és a Jón-tenger találkozik.", "Albánia első fővárosa.", "Fontos kikötőváros."],
      ro: ["Unde se întâlnesc Mările Adriatică și Ionică.", "Prima capitală a Albaniei.", "Important oraș port."],
      en: ["Where the Adriatic and Ionian seas meet.", "First capital of Albania.", "Important port city."]
    }
  },
  {
    id: "city-shkoder",
    name: { de: "Shkodra", hu: "Shkodra", ro: "Shkodra", en: "Shkodra" },
    description: { de: "Kulturstadt des Nordens", hu: "Az észak kulturális városa", ro: "Orașul cultural al nordului", en: "Cultural city of the north" },
    descriptionAdvanced: {
      de: "Ein historisches Zentrum am Shkodrasee.",
      hu: "Shkodra az ország északi részének kulturális és történelmi központja, amely Albánia egyik legrégebbi és legkarakteresebb városa. A Shkodrai-tó partján, az Albán-Alpok lábánál fekvő település évszázadokon át fontos kereskedelmi és művészeti csomópont volt. A város felett uralkodó Rozafa vár az illír időktől kezdve védte a környékre, falai között ma is érezhető a történelem súlya. Shkodra híres a vallási toleranciájáról, ahol mecsetek és templomok egymás szomszédságában hirdetik a békés együttélést. A város kerékpáros kultúrája és a Marubi Nemzeti Fotómúzeum gyűjteménye egyedülálló színfoltot képvisel az albán turisztikai palettán.",
      ro: "Un centru istoric de pe malul lacului Shkodra.",
      en: "Shkodra is often considered the cultural capital of Albania, boasting a rich history that dates back to the Illyrian period. Located at the foot of the Albanian Alps and on the shores of Lake Skadar, it has long been a crossroads of different cultures and religions. The city is famous for its traditional architecture, the impressive Rozafa Castle, and its long-standing tradition in photography and the arts. Shkodra is a city of bicycles and music, with a relaxed atmosphere that reflects its diverse heritage. It serves as the main gateway for travelers heading to the remote and beautiful mountain regions of Theth and Valbona."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Shkodra Albánia egyik legrégebbi városa, amely már az illír időkben is fontos központ volt.",
        "A város a Shkodrai-tó partján fekszik, amely a Balkán legnagyobb tava és gazdag madárvilágáról ismert.",
        "Itt található a Marubi Nemzeti Fotómúzeum, amely az ország történelmét dokumentáló páratlan fotógyűjteménynek ad otthont.",
        "A Rozafa vár, amely a város felett magasodik, több mint 2000 éves múltra tekint vissza és számos legendát őriz.",
        "Shkodra a kerékpárosok városa, ahol a helyiek nagy része biciklivel közlekedik a mindennapokban."],
      ro: [
        "Shkodër este considerată capitala culturală a Albaniei datorită istoriei sale bogate.",
        "Fototeca Națională Marubi găzduiește o colecție impresionantă de fotografii istorice.",
        "Orașul se află la confluența a drie râuri importante din nordul țării.",
        "Armonia religioasă este o trăsătură definitorie a vieții sociale din Shkodër."
      ],
      en: [
        "The Marubi National Museum of Photography houses over 500,000 negatives documenting Albanian life since the 1850s.",
        "Shkodra was one of the most important cities of the Illyrian Kingdom under Queen Teuta.",
        "The city is known for its religious harmony, featuring a cathedral, a mosque, and an Orthodox church in close proximity.",
        "It is the only city in Albania where bicycle culture is deeply rooted and widely practiced by all generations."
      ]
    },
    type: "city",
    coords: [19.5126, 42.0683],
    parent: "AL-007",
    facts: {
      de: ["Einer der ältesten Orte des Balkans.", "Heimat der Marubi-Fotothek.", "Tor zu den albanischen Alpen."],
      hu: ["A Balkán egyik legrégebbi helye.", "A Marubi fotótár otthona.", "Kapu az albán Alpokhoz."],
      ro: ["Una dintre cele mai vechi așezări din Balcani.", "Găzduiește Fototeca Marubi.", "Poarta către Alpii Albanezi."],
      en: ["One of the oldest sites in the Balkans.", "Home of the Marubi National Museum of Photography.", "Gateway to the Albanian Alps."]
    }
  },
  {
    id: "city-korce",
    name: { de: "Korçë", hu: "Korçë", ro: "Korçë", en: "Korçë" },
    description: { de: "Stadt der Serenaden", hu: "A szerenádok városa", ro: "Orașul serenadelor", en: "City of serenades" },
    descriptionAdvanced: {
      de: "Bekannt für seine Kultur, Museen und Architektur.",
      hu: "Korçë, amelyet gyakran az „albán Párizsként” is emlegetnek, az ország délkeleti részén fekvő elegáns, kulturális hagyományokban gazdag város. A település híres a 19. századi polgári építészetéről, macskaköves utcáiról és a „szerenádok” hagyományáról, amely ma is népszerű az éttermekben. Korçë kulcsszerepet játszott az albán nemzeti öntudat ébredésében, itt nyílt meg az első albán nyelvű iskola a 19. század végén. A városban több neves múzeum is található, köztük a Nemzeti Középkori Művészeti Múzeum, amely világhírű ikon-gyűjteménnyel rendelkezik. A felújított régi bazár modern kávézóival és kézműves boltjaival a város legélénkebb társasági központjává vált.",
      ro: "Cunoscut pentru cultură, muzee și arhitectură.",
      en: "Korçë, often called the 'Paris of Albania,' is a city of elegance, serenades, and intellectual tradition located in a high plateau in the southeast. It is renowned for its well-preserved 19th-century architecture, cobblestone streets, and a vibrant cultural scene that includes several prestigious museums. The city played a crucial role in the Albanian national awakening, hosting the first school to teach in the Albanian language. Korçë is also famous for its traditional music, known as serenades, which are still performed in its cozy taverns. The Old Bazaar, recently restored, has become a bustling center of artisan shops and modern cafes."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Korçë városában nyílt meg 1887-ben az első albán nyelvű iskola, amely ma múzeumként működik.",
        "A várost gyakran nevezik az „albán Párizsnak” elegáns villái, széles sugárútjai és kifinomult kulturális élete miatt.",
        "Korçë híres a sörgyáráról, amely az ország első és egyik legnépszerűbb sörmárkáját gyártja.",
        "A város ortodox katedrálisa, a Feltámadás székesegyház, Albánia egyik legnagyobb és legszebb temploma.",
        "A korçëi szerenádok hagyománya a 20. század elejére nyúlik vissza, és a mai napig népszerű a helyi éttermekben."],
      ro: [
        "Korçë este cunoscut drept orașul serenadelor, o tradiție muzicală romantică locală.",
        "Aici a fost deschisă prima școală de limbă albaneză în anul 1887.",
        "Catedrala Învierea Domnului este una dintre cele mai mari biserici ortodoxe din țară.",
        "Vechiul Bazar a fost restaurat și este acum un centru vibrant de recreere."
      ],
      en: [
        "Korçë is home to the National Museum of Medieval Art, which houses one of the most important collections of icons in Europe.",
        "The first Albanian-language school, the Mësonjëtorja, was opened here in 1887 during the Ottoman era.",
        "The city hosts the largest beer festival in Albania, celebrating the local Korça Beer, which has been brewed since 1928.",
        "The Resurrection Cathedral is one of the largest Orthodox churches in the Balkans and a landmark of the city."
      ]
    },
    type: "city",
    coords: [20.7778, 40.6141],
    parent: "AL-003",
    facts: {
      de: ["Erste albanische Schule.", "Bekanntes Bierfest.", "Architektur im französischen Stil."],
      hu: ["Az első albán iskola.", "Híres sörfesztivál.", "Francia stílusú építészet."],
      ro: ["Prima școală albaneză.", "Faimos festival al berii.", "Arhitectură în stil francez."],
      en: ["First Albanian school.", "Famous beer festival.", "French-style architecture."]
    }
  },
  {
    id: "city-fier",
    name: { de: "Fier", hu: "Fier", ro: "Fier", en: "Fier" },
    description: { de: "Industrie- und Kulturzentrum", hu: "Ipari és kulturális központ", ro: "Centru industrial și cultural", en: "Industrial and cultural center" },
    descriptionAdvanced: {
      de: "Wichtige Stadt in der Nähe der antiken Stätte Apollonia.",
      hu: "Fier egy modern ipari és mezőgazdasági központ Albánia délnyugati részén, amely fontos kapocsként szolgál a parti és a belső területek között. Bár maga a város viszonylag fiatal, környéke rendkívül gazdag történelmi emlékekben, hiszen itt találhatók az ókori Apollónia romjai. A régió termékeny síkságai miatt Fier Albánia egyik éléskamrája, és itt összpontosul az ország kőolajipara is. A város fejlődése során a modern urbanizáció és a hagyományos mezőgazdasági életmód ötvöződött, ami egyedi arcot kölcsönöz a településnek. Fier kiváló kiindulópont a közeli régészeti parkok és a Myzeqe-síkság kulturális értékeinek felfedezéséhez.",
      ro: "Oraș important în apropierea sitului antic Apollonia.",
      en: "Fier is a modern industrial and agricultural hub in southwestern Albania, serving as a vital link between the coastal and inland regions. While the city itself is relatively young, it is surrounded by some of the most important archaeological sites in the country, most notably Apollonia. The region's fertile plains have made it the center of Albania's agricultural production and its growing oil industry. Fier offers a mix of modern urban developments and proximity to historical landmarks that reveal the ancient roots of the area. It is a bustling city that reflects the economic energy of contemporary Albania while honoring its ancient heritage."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Fier közelében találhatók az ókori Apollónia romjai, amely egykor híres filozófiai és oktatási központ volt.",
        "A város fontos ipari központ, különösen az olajfinomítás és a mezőgazdasági feldolgozás területén.",
        "Fier az ország egyik legfontosabb közlekedési csomópontja, amely összeköti Közép- és Dél-Albániát.",
        "A város modern építészete a 20. századi városfejlesztési tervek eredménye, tágas tereivel és parkjaival.",
        "A fier-i színház és kulturális központ a régió művészeti életének meghatározó helyszíne."],
      ro: [
        "Orașul se află în imediata apropiere a anticului sit arheologic Apollonia.",
        "Fier a fost fondat oficial în secolul al XIX-lea ca un centru comercial.",
        "Teatrul antic de la Byllis se află la mică distanță de oraș.",
        "Regiunea este centrul industriei de extracție a petrolului din Albania."
      ],
      en: [
        "The city of Fier was officially founded in the mid-19th century as a marketplace for local farmers.",
        "It is located just a few kilometers away from the ancient city of Apollonia, one of the most important Greek colonies in the Adriatic.",
        "The nearby Byllis Archaeological Park features an impressive ancient theater with views over the Vjosa River valley.",
        "Fier is the center of Albania's oil and gas industry, with major refineries located in the surrounding area."
      ]
    },
    type: "city",
    coords: [19.5561, 40.7239],
    parent: "AL-008",
    facts: {
      de: ["Wirtschaftlicher Knotenpunkt.", "Nahe Apollonia.", "Landwirtschaftliches Zentrum."],
      hu: ["Gazdasági csomópont.", "Apollónia közelében.", "Mezőgazdasági központ."],
      ro: ["Nod economic.", "Lângă Apollonia.", "Centru agricol."],
      en: ["Economic hub.", "Near Apollonia.", "Agricultural center."]
    }
  },
  {
    id: "city-berat",
    name: { de: "Berat", hu: "Berat", ro: "Berat", en: "Berat" },
    description: { de: "Stadt der tausend Fenster", hu: "Az ezer ablak városa", ro: "Orașul celor o mie de ferestre", en: "City of a thousand windows" },
    descriptionAdvanced: {
      de: "UNESCO-Welterbe, bekannt für seine osmanische Architektur.",
      hu: "Berat, az „ezer ablak városa”, az UNESCO Világörökség része és Albánia egyik legszebb, legjobb állapotban megőrzött történelmi városa. Különleges építészeti képét a meredek hegyoldalba épült fehér oszmán házak adják, amelyek apró ablakai mintha egymás felett sorakoznának. A várost az Osum folyó osztja két történelmi negyedre, Mangalemre és Goricára, amelyek évszázadok óta változatlan formában őrzik a múltat. A város feletti várnegyed, a Kala, még ma is lakott, falai között középkori templomok és ikonfestő múzeum bújik meg. Berat a vallási és kulturális együttélés élő múzeuma, ahol az iszlám és a keresztény emlékek békésen simulnak a tájba.",
      ro: "Patrimoniu UNESCO, cunoscut pentru arhitectura otomană.",
      en: "Berat, known as the 'City of a Thousand Windows,' is a UNESCO World Heritage site and one of Albania's most beautiful historic towns. Its unique architecture is characterized by white Ottoman houses climbing up the hillside towards a massive 13th-century citadel. The city is divided by the Osum River into two historic districts, Mangalem and Gorica, which have remained remarkably preserved over the centuries. Inside the castle walls, life continues as it has for generations, with residents living among ancient churches and ruins. Berat is a living museum that showcases the peaceful coexistence of different religious and cultural traditions."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Beratot az ezer ablak városának hívják az óváros meredek hegyoldalába épült, fehér falú oszmán házai miatt.",
        "A várnegyed, azaz a Kala, az egyik ritka példája annak, ahol a lakók még mindig a történelmi várfalakon belül élnek.",
        "A város az UNESCO Világörökség része, mint az oszmán építészet egyik legjobban megőrzött példája a Balkánon.",
        "Berat híres a vallási együttéléséről, ahol ortodox templomok és mecsetek állnak egymás közvetlen közelében.",
        "Az Onufri Múzeum a vár területén található Szent Mária templomban kapott helyet, bemutatva a híres ikonfestő munkáit."],
      ro: [
        "Berat este supranumit oraşul celor o mie de ferestre datorită fațadelor sale unice.",
        "Cartierele Mangalem și Gorica fac parte din patrimoniul mondial UNESCO.",
        "Cetatea Beratului este una dintre puținele fortărețe medievale încă locuite.",
        "Muzeul Onufri găzduiește o colecție rară de icoane pictate de maestrul albanez."
      ],
      en: [
        "The Berat Castle is one of the few medieval fortresses in the world that remains continuously inhabited.",
        "The Onufri Museum, located inside a cathedral within the castle, displays masterpieces by the famous 16th-century icon painter.",
        "The city's nickname comes from the many windows of the traditional houses that seem to be 'stacked' on top of each other.",
        "Berat was designated as a 'Museum City' by the Albanian government in 1961 to protect its historic character."
      ]
    },
    type: "city",
    coords: [19.9497, 40.7049],
    parent: "AL-012",
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Einzigartige osmanische Häuser.", "Bewohnte Burg."],
      hu: ["UNESCO világörökség.", "Egyedülálló oszmán házak.", "Lakott vár."],
      ro: ["Patrimoniu mondial UNESCO.", "Case otomane unice.", "Cetate locuită."],
      en: ["UNESCO World Heritage site.", "Unique Ottoman houses.", "Inhabited castle."]
    }
  },
  {
    id: "city-gjirokaster",
    name: { de: "Gjirokastra", hu: "Gjirokastra", ro: "Gjirokastra", en: "Gjirokastra" },
    description: { de: "Stadt der Steine", hu: "A kövek városa", ro: "Orașul de piatră", en: "City of stone" },
    descriptionAdvanced: {
      de: "Eine gut erhaltene osmanische Stadt, Geburtsort von Ismail Kadare und Enver Hoxha.",
      hu: "Gjirokastra, egy másik UNESCO világörökségi kincs, egy lenyűgöző „kőváros”, amely a Drino-völgy meredek lejtőire épült. Híres az erődített toronyházairól, az úgynevezett „kule”-kről, amelyeket jellegzetes ezüstszürke palatetők borítanak. A város felett trónoló hatalmas vár a Balkán egyik legnagyobb erődítménye, ahonnan páratlan panoráma nyílik a környező hegyekre. Gjirokastra a világhírű író, Ismail Kadare és a korábbi diktátor, Enver Hoxha szülőhelye, akiknek egykori otthonai ma múzeumként működnek. A bazár macskaköves utcái és a hagyományos kézműves műhelyek miatt a város elengedhetetlen állomás a történelem iránt érdeklődők számára.",
      ro: "Un oraș otoman bine conservat, locul de naștere al lui Ismail Kadare și Enver Hoxha.",
      en: "Gjirokastra, another UNESCO World Heritage site, is a strikingly beautiful 'Stone City' built on the steep slopes of the Drino Valley. It is famous for its distinctive fortified tower houses, known as 'kulle,' which feature silver-colored slate roofs and elaborate stone carvings. The city's massive fortress, one of the largest in the Balkans, dominates the skyline and offers panoramic views of the surrounding mountains. Gjirokastra is the birthplace of the world-renowned writer Ismail Kadare and the former dictator Enver Hoxha, both of whom have museums dedicated to them. Its cobblestone bazaar and traditional crafts make it a must-visit destination for those interested in Balkan history."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Gjirokastra városa az UNESCO Világörökség része, híres az erődített toronyházairól, az úgynevezett kule-kről.",
        "Ez a város volt Albánia egykori kommunista diktátorának, Enver Hoxhának és a világhírű írónak, Ismail Kadarénak a szülőhelye.",
        "A város felett trónoló vár Albánia egyik legnagyobb erődítménye, amely ma múzeumnak és fegyvergyűjteménynek ad otthont.",
        "Gjirokastra macskaköves utcái és kőből épült tetői egyedülálló, középkori hangulatot árasztanak.",
        "A városban kétévente rendezik meg az Országos Folklórfesztivált, amely az albán népzene legfontosabb eseménye."],
      ro: [
        "Gjirokastër este renumit pentru casele sale fortificate din piatră numite kulle.",
        "Orașul este locul de naștere al celebrului scriitor Ismail Kadare.",
        "Vechiul Bazar din piatră păstrează atmosfera perioadei otomane.",
        "Centrul istoric al orașului beneficiază de statutul de patrimoniu UNESCO."
      ],
      en: [
        "The city's roofs are covered with flat stones instead of tiles, giving Gjirokastra its unique 'Stone City' appearance.",
        "Gjirokastra Castle houses a military museum featuring a captured US Air Force plane from the Cold War era.",
        "The National Folklore Festival, the most important cultural event in Albania, is held every five years in the city's fortress.",
        "The Skenduli House is a perfectly preserved example of a wealthy Ottoman-style residence from the early 19th century."
      ]
    },
    type: "city",
    coords: [20.1388, 40.0758],
    parent: "AL-005",
    facts: {
      de: ["Steildächer aus Schiefer.", "Große Festung.", "UNESCO-Weltkulturerbe."],
      hu: ["Pala tetős házak.", "Hatalmas erőd.", "UNESCO világörökség."],
      ro: ["Acoperișuri de ardezie.", "Fortăreață mare.", "Patrimoniu mondial UNESCO."],
      en: ["Slate-roofed houses.", "Massive fortress.", "UNESCO World Heritage site."]
    }
  },
  {
    id: "city-sarande",
    name: { de: "Saranda", hu: "Saranda", ro: "Saranda", en: "Saranda" },
    description: { de: "Badeort im Süden", hu: "Tengerparti üdülőhely délen", ro: "Stațiune litorală în sud", en: "Southern coastal resort" },
    descriptionAdvanced: {
      de: "Wichtiges Touristenzentrum an der Ionischen Küste gegenüber von Korfu.",
      hu: "Saranda az albán riviéra nem hivatalos fővárosa, egy napsütötte tengerparti város a Jón-tenger partján, közvetlenül a görögországi Korfu szigetével szemben. A patkó alakú öböl mentén fekvő település modern turisztikai központtá vált, amely kristálytiszta vizéről és élénk éjszakai életéről ismert. Saranda kiváló bázis a közeli Butrint ókori romvárosának és a varázslatos Kék Szem-forrásnak a felfedezéséhez. A város tengerparti sétánya nyáron megtelik élettel, számos étterem és kávézó kínál friss tengeri ételeket a tengerre néző kilátással. A modern épületek között lépten-nyomon ókori romok bukkannak fel, tanúskodva a város évezredes történelméről.",
      ro: "Important centru turistic pe coasta Ionică, vizavi de Corfu.",
      en: "Saranda is the unofficial capital of the Albanian Riviera, a sun-drenched coastal town located just a short ferry ride from the Greek island of Corfu. Built along a horseshoe-shaped bay, it has transformed into a major tourist destination known for its vibrant promenade, crystal-clear waters, and Mediterranean climate. Saranda serves as the perfect base for exploring the nearby UNESCO site of Butrint and the mesmerizing Blue Eye spring. The city comes alive in the summer months with a bustling nightlife and numerous seafood restaurants overlooking the Ionian Sea. Despite its modern growth, it retains its charm with ancient ruins scattered throughout the urban landscape."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Saranda a Jón-tenger partján fekszik, és Albánia egyik legnépszerűbb turisztikai célpontja a kristálytiszta vize miatt.",
        "A város közelében található Butrint ókori romvárosa, amely az ország első UNESCO Világörökségi helyszíne volt.",
        "Saranda partjairól tiszta időben jól látható a görögországi Korfu szigete, ahová rendszeres kompjáratok közlekednek.",
        "A Lëkurësi vár a város feletti dombon kínál panorámás kilátást az öbölre és a környező tájra.",
        "A város mediterrán éghajlata évente közel 300 napsütéses napot biztosít a látogatók számára."],
      ro: [
        "Numele orașului provine de la mănăstirea celor Patruzeci de Sfinți.",
        "Sarandă se bucură de aproximativ 300 de zile însorite pe parcursul unui an.",
        "Promenada de pe malul mării este centrul vieții sociale pe timp de vară.",
        "Ruinele unei sinagogi antice atestă prezența unei comunități evreiești timpurii."
      ],
      en: [
        "The name Saranda comes from the 'Agioi Saranda' or the Forty Saints, referring to a local 6th-century monastery.",
        "The city enjoys more than 300 sunny days per year, making it one of the sunniest spots in Europe.",
        "The ruins of a 5th-century synagogue in the city center testify to the long history of the local Jewish community.",
        "Lëkurësi Castle, located on a hill above the city, offers spectacular sunset views over the bay and Corfu."
      ]
    },
    type: "city",
    coords: [20.0049, 39.8739],
    parent: "AL-006",
    facts: {
      de: ["Tor zu Butrint.", "Wunderschöne Buchten.", "Ganzjähriger Sonnenschein."],
      hu: ["Kapu Butrint felé.", "Gyönyörű öblök.", "Egész évben napsütés."],
      ro: ["Poarta către Butrint.", "Golfuri superbe.", "Soare tot anul."],
      en: ["Gateway to Butrint.", "Beautiful bays.", "Year-round sunshine."]
    }
  },
  {
    id: "city-elbasan",
    name: { de: "Elbasan", hu: "Elbasan", ro: "Elbasan", en: "Elbasan" },
    description: { de: "Historische Festungsstadt", hu: "Történelmi erődváros", ro: "Oraș fortăreață istoric", en: "Historical fortress city" },
    descriptionAdvanced: {
      de: "Zentralalbanische Stadt mit einer gut erhaltenen Burg.",
      hu: "Elbasan egy nagy múltú város Albánia szívében, amely az ókori Via Egnatia kereskedelmi útvonal egyik kulcsfontosságú állomása volt. A város központja egy jól megőrzött, 15. századi oszmán erőd köré épült, amelynek falai között ma is egy élettel teli lakónegyed található. Elbasan gazdag ipari múltjáról is nevezetes, emellett fontos oktatási központ, itt működik az ország egyik elismert egyeteme. Itt rendezik meg minden évben a tavaszváró „Dita e Verës” (A nyár napja) fesztivált, amely az ország egyik legnépszerűbb pogány gyökerű ünnepe. A városban az ókori történelem, az ipari fejlődés and a mélyen gyökerező helyi hagyományok különleges elegye figyelhető meg.",
      ro: "Oraș din centrul Albaniei cu o cetate bine conservată.",
      en: "Elbasan is a historic city located in the heart of Albania, serving as a crucial junction along the ancient Via Egnatia trade route. The city is built around a well-preserved 15th-century Ottoman fortress, which remains a vibrant residential neighborhood today. Elbasan is known for its rich industrial heritage and its role as an educational center, hosting one of the country's most respected universities. It is also famous for the 'Dita e Verës' (Summer Day) festival, a pagan-rooted celebration of spring that attracts visitors from all over the country. The city reflects a blend of ancient history, industrial development, and deeply rooted local traditions."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Elbasan városa a történelmi Via Egnatia útvonalon fekszik, amely egykor Rómát és Konstantinápolyt kötötte össze.",
        "A város vára, amely a 15. században épült, az ország egyik legjobban megőrzött alföldi erődítménye.",
        "Elbasan híres az évi rendes tavaszköszöntő ünnepségéről, a Dita e Verës-ről, amelyet március 14-én tartanak.",
        "A városban található a Király-mecset, amely Albánia egyik legrégebbi iszlám vallási épülete.",
        "Elbasan fontos oktatási központ is, itt található az ország egyik legnagyobb egyeteme."],
      ro: [
        "Cetatea din Elbasan este una dintre puținele fortificații de câmpie rămase.",
        "Festivalul Dita e Verës are origini păgâne și este sărbătorit cu mare fast aici.",
        "Poarta Via Egnatia amintește de vechiul drum roman ce traversa regiunea.",
        "Orașul este un model de diversitate și conviețuire religioasă exemplară."
      ],
      en: [
        "The Elbasan Castle is one of the few examples of a 'field castle' in Albania, built on flat ground rather than a hilltop.",
        "The city is the birthplace of 'Ballokume,' a traditional large cookie made for the Summer Day celebrations.",
        "The King's Mosque inside the fortress is one of the oldest Islamic buildings in Albania, dating back to 1492.",
        "Elbasan was a major center for the production of leather and silk during the Ottoman period."
      ]
    },
    type: "city",
    coords: [20.0822, 41.1125],
    parent: "AL-004",
    facts: {
      de: ["Via Egnatia verlief hier.", "Berühmt für 'Ballokume'.", "Osmanische Einflüsse."],
      hu: ["A Via Egnatia itt haladt át.", "Híres a 'Ballokume' süteményéről.", "Oszmán hatások."],
      ro: ["Via Egnatia trecea pe aici.", "Faimos pentru 'Ballokume'.", "Influențe otomane."],
      en: ["Via Egnatia passed through here.", "Famous for 'Ballokume' sweets.", "Ottoman influences."]
    }
  },
  {
    id: "city-peshkopi",
    name: { de: "Peshkopi", hu: "Peshkopi", ro: "Peshkopi", en: "Peshkopi" },
    description: { de: "Stadt in den Bergen", hu: "Város a hegyekben", ro: "Oraș în munți", en: "City in the mountains" },
    descriptionAdvanced: {
      de: "Hauptstadt der Region Dibër, bekannt für ihre Thermalbäder und die Nähe zum Korab-Gebirge.",
      hu: "Peshkopi egy hangulatos hegyi város Albánia keleti részén, a festői Dibër régióban, az észak-macedón határ közelében. Leginkább gyógyhatású kénes termálfürdőiről ismert, amelyeket évszázadok óta használnak, és ma is sok látogatót vonzanak gyógyulási céllal. A várost drámai hegycsúcsok veszik körül, köztük a Korab-hegy, Albánia legmagasabb pontja, így ideális célpont a túrázók és a természet szerelmesei számára. Peshkopi megőrizte hagyományos karakterét kőépítészetével és gazdag gyümölcsöskertjeivel, különösen híres kiváló minőségű almájáról. A település bepillantást enged az albán hegyvidék autentikus és nyugodt mindennapjaiba.",
      ro: "Capitala regiunii Dibër, cunoscută pentru băile sale termale și proximitatea față de Munții Korab.",
      en: "Peshkopi is a charming mountain town in eastern Albania, situated in the rugged and beautiful Dibër region near the border with North Macedonia. It is best known for its healing thermal sulfur baths, which have been used for centuries and continue to attract visitors seeking health treatments. The town is surrounded by dramatic peaks, including Mount Korab, the highest mountain in Albania, making it a prime destination for hikers and nature lovers. Peshkopi retains a traditional atmosphere with its stone architecture and lush fruit orchards, particularly famous for its high-quality apples. It offers a glimpse into the authentic rural life of the Albanian highlands."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Peshkopi híres a kénes termálforrásairól, amelyek gyógyhatását már az oszmán időkben is ismerték.",
        "A város az ország legmagasabb hegye, a Korab-hegy lábánál fekszik, és ideális kiindulópont a túrázók számára.",
        "A régió mezőgazdasága kiemelkedő, különösen az alma- és cseresznyetermesztéséről nevezetes.",
        "Peshkopi óvárosában még láthatók a hagyományos, kőből és fából épült népi építészet remekei.",
        "A városban évente megrendezik a Dibra Oda fesztivált, amely a környék népi hagyományait és ételeit mutatja be."],
      ro: [
        "Peshkopi este renumit pentru băile sale termale cu proprietăți curative.",
        "Orașul servește ca punct de plecare principal pentru ascensiunea pe muntele Korab.",
        "Regiunea este faimoasă pentru livezile sale întinse de meri.",
        "Arhitectura tradițională din piatră conferă orașului un farmec aparte."
      ],
      en: [
        "The thermal springs of Peshkopi are rich in sulfur and are said to have significant therapeutic properties for various ailments.",
        "The town serves as the main starting point for expeditions to the summit of Mount Korab, which stands at 2,764 meters.",
        "The Dibër region, where Peshkopi is located, is famous throughout Albania for producing the best apples in the country.",
        "Peshkopi's architecture features many traditional 'kulla' style stone houses that are typical of the northern Albanian mountains."
      ]
    },
    type: "city",
    coords: [20.4289, 41.6850],
    parent: "AL-001",
    facts: {
      de: ["Heilende Thermalquellen.", "Tor zum Berg Korab.", "Traditionelle osmanische Architektur."],
      hu: ["Gyógyító termálforrások.", "Kapu a Korab-hegyhez.", "Hagyományos oszmán építészet."],
      ro: ["Izvoare termale curative.", "Poarta către muntele Korab.", "Arhitectură tradițională otomană."],
      en: ["Healing thermal springs.", "Gateway to Mount Korab.", "Traditional Ottoman architecture."]
    }
  },
  {
    id: "city-kukes",
    name: { de: "Kukës", hu: "Kukës", ro: "Kukës", en: "Kukës" },
    description: { de: "Stadt im Nordosten", hu: "Város az északkeleten", ro: "Oraș în nord-est", en: "City in the northeast" },
    descriptionAdvanced: {
      de: "Eine Stadt in den albanischen Alpen, die für den Friedensnobelpreis nominiert wurde.",
      hu: "Kukës egy különleges sorsú város Albánia északkeleti részén, a Fehér- és a Fekete-Drin folyók összefolyásánál. Az eredeti város az 1970-es években víz alá került egy vízerőmű gátjának megépítésekor, így a mai Kukës egy fennsíkon épült újjá, a Fierza-tóra néző panorámával. A város 1999-ben vált világszerte ismertté, amikor több százezer koszovói menekültnek nyújtott menedéket a háború idején. Ez a rendkívüli vendégszeretet vezetett oda, hogy Kukës volt az első város a történelemben, amelyet Nobel-békedíjra jelöltek. Az Albán-Alpok magas csúcsai között fekvő település kapuként szolgál az ország legeldugottabb és legszebb hegyi tájai felé.",
      ro: "Un oraș din Alpii Albanezi, nominalizat la Premiul Nobel pentru Pace.",
      en: "Kukës is a resilient city located in the mountainous northeast of Albania, at the confluence of the White and Black Drin rivers. The original town was submerged in the 1970s to make way for a hydroelectric dam, and the current city was rebuilt on a plateau overlooking the new Fierza Lake. Kukës gained international recognition in 1999 when it provided refuge to hundreds of thousands of people fleeing the conflict in Kosovo. This act of extraordinary hospitality led to the city becoming the first ever to be nominated for the Nobel Peace Prize. Surrounded by the high peaks of the Albanian Alps, it is a gateway to some of the most remote and beautiful mountain landscapes in the country."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Kukës az első város a világon, amelyet Nobel-békedíjra jelöltek az 1999-es koszovói menekültválság idején nyújtott segítségéért.",
        "Az eredeti város az 1970-es években víz alá került a Fierza vízerőmű gátjának megépítése miatt, így a mai város teljesen új építésű.",
        "Kukës a Gjallica-hegy lábánál fekszik, amely télen népszerű síelési és túrázási helyszín.",
        "A város alatt egy hatalmas, földalatti bunkerrendszer található, amelyet a hidegháború idején építettek.",
        "A kukësi nemzetközi repülőtér Albánia második legnagyobb repülőtere, amely fontos szerepet játszik a régió fejlődésében."],
      ro: [
        "Kukës a fost primul oraș nominalizat la Premiul Nobel pentru Pace în 2000.",
        "Orașul actual a fost reconstruit în anii '70 după ce vechiul oraș a fost inundat.",
        "Un sistem complex de tuneluri subterane a fost construit sub oraș în timpul comunismului.",
        "Aeroportul Zayed a fost construit aici pentru a sprijini operațiunile umanitare."
      ],
      en: [
        "Kukës was nominated for the Nobel Peace Prize in 2000 for its role in hosting refugees during the Kosovo War.",
        "Old Kukës still lies at the bottom of the Fierza reservoir and can occasionally be seen when water levels are exceptionally low.",
        "A vast network of underground tunnels and bunkers was built beneath the city during the Cold War to house its entire population.",
        "The Zayed Airport in Kukës was funded by the United Arab Emirates to support humanitarian efforts in the region."
      ]
    },
    type: "city",
    coords: [20.4217, 42.0767],
    parent: "AL-002",
    facts: {
      de: ["Wurde 1970 neu erbaut.", "Hilfe für Flüchtlinge 1999.", "Wunderschöne Bergkulisse."],
      hu: ["1970-ben épült újjá.", "Segítség a menekülteknek 1999-ben.", "Gyönyörű hegyi panoráma."],
      ro: ["Reconstruit în 1970.", "Ajutor pentru refugiați în 1999.", "Peisaj montan superb."],
      en: ["Rebuilt in 1970.", "Aid for refugees in 1999.", "Beautiful mountain scenery."]
    }
  },
  {
    id: "city-lezhe",
    name: { de: "Lezhë", hu: "Lezhë", ro: "Lezhë", en: "Lezhë" },
    description: { de: "Historische Küstenstadt", hu: "Történelmi parti város", ro: "Oraș de coastă istoric", en: "Historical coastal city" },
    descriptionAdvanced: {
      de: "Eine Stadt mit großer Bedeutung für die albanische Geschichte und das Grab von Skanderbeg.",
      hu: "Lezhë kiemelkedő történelmi jelentőségű város Északnyugat-Albániában, ott, ahol a hegyek találkoznak az adriai partvidékkel. 1444-ben itt hozta létre Szkander bég a Lezhëi Ligát, egyesítve az albán fejedelmeket az Oszmán Birodalom elleni harcra. A városban található Szkander bég mauzóleuma, amelyet az egykori katedrális romjai köré emeltek, és ma a nemzeti emlékezet fontos zarándokhelye. Lezhë büszkélkedhet az ókori Lissus romjaival is, amely egy fontos illír erődítmény volt már az i.e. 4. században. A közeli lagúnák és homokos strandok miatt a város a gazdag történelem és az érintetlen természet egyedülálló kombinációját nyújtja.",
      ro: "Un oraș cu o mare importanță pentru istoria albaneză și locul de înmormântare al lui Skanderbeg.",
      en: "Lezhë is a city of immense historical importance, located in northwestern Albania where the mountains meet the Adriatic coast. It was here in 1444 that the national hero Skanderbeg united the Albanian princes into the League of Lezhë to fight against the Ottoman Empire. The city is home to the Skanderbeg Memorial, built over the ruins of the cathedral where he was buried, serving as a site of national pilgrimage. Lezhë also boasts the ancient ruins of Lissus, an Illyrian stronghold that dates back to the 4th century BC. With its nearby lagoons and sandy beaches, the city offers a unique combination of rich history and pristine natural beauty."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Lezhë volt a helyszíne az 1444-es Lezhëi Ligának, ahol Szkander bég egyesítette az albán nemeseket a törökök ellen.",
        "A városban található Szkander bég mauzóleuma, amelyet az egykori Szent Miklós-székesegyház romjai fölé építettek.",
        "Lezhë vára a város feletti dombon stratégiai pont volt az Adria-part és a szárazföld közötti kereskedelem ellenőrzésére.",
        "A város közeli Kunë-Vain-Tale természetvédelmi terület fontos vizes élőhely a költöző madarak számára.",
        "Az ókori Lissus romjai a mai napig láthatók, tanúskodva a város több mint 2500 éves múltjáról."],
      ro: [
        "Liga de la Lezhë a fost formată aici în 1444 pentru a rezista otomanilor.",
        "Memorialul lui Skanderbeg marchează locul unde a fost înmormântat eroul național.",
        "Orașul antic Lissus a fost o fortăreață iliră strategică de mare importanță.",
        "Rezervația naturală Kune-Vain-Tale oferă un habitat protejat pentru numeroase specii."
      ],
      en: [
        "The League of Lezhë is considered the first time that the Albanian people were united under a single leadership.",
        "The Skanderbeg Memorial is built around the remains of Saint Nicholas Cathedral, where the hero's tomb was once located.",
        "The ancient city of Lissus was founded by Dionysius of Syracuse and was one of the most important ports in Illyria.",
        "The Kune-Vain-Tale Lagoon near Lezhë is a protected nature reserve and a major stop for migratory birds."
      ]
    },
    type: "city",
    coords: [19.6500, 41.7833],
    parent: "AL-011",
    facts: {
      de: ["Gründungsort der Liga von Lezhë.", "Sitz des Skanderbeg-Memorials.", "Antiker Name: Lissus."],
      hu: ["A Lezhëi Liga alapítási helye.", "Itt található Szkander bég emlékhelye.", "Ókori neve: Lissus."],
      ro: ["Locul de fondare al Ligii de la Lezhë.", "Găzduiește Memorialul lui Skanderbeg.", "Nume antic: Lissus."],
      en: ["Founding place of the League of Lezhë.", "Site of the Skanderbeg Memorial.", "Ancient name: Lissus."]
    }
  }
];

export const albaniaHistorical: POI[] = [
  {
    id: "hist-butrint",
    name: { de: "Butrint", hu: "Butrint", ro: "Butrint", en: "Butrint" },
    description: { de: "Antike Ruinenstadt", hu: "Ókori romváros", ro: "Oraș antic în ruine", en: "Ancient ruined city" },
    descriptionAdvanced: {
      de: "Eine der bedeutendsten archäologischen Stätten des Balkans, UNESCO-Weltkulturerbe.",
      hu: "Butrint Albánia legjelentősebb régészeti lelőhelye és az UNESCO Világörökség része, amely több mint 2500 év történelmét öleli fel. A Jón-tenger és a Butrinti-tó közötti festői félszigeten fekvő romváros görög, római, bizánci és velencei civilizációk nyomait őrzi. A látogatók megcsodálhatják az ókori színházat, a keresztelőkápolna finom mozaikpadlóit és a hatalmas római fórumot. A romokat dús növényzetű nemzeti park veszi körül, ahol az ókori kövek és a mediterrán természet találkozása mágikus hangulatot áraszt. Butrint egykor fontos kikötő és kifinomult város volt, amelyet még Julius Caesar is meglátogatott hadjáratai során.",
      ro: "Unul dintre cele mai importante situri arheologice din Balcani, patrimoniu UNESCO.",
      en: "Butrint is Albania's most significant archaeological site and a UNESCO World Heritage treasure, showcasing over 2,500 years of history. Located on a scenic peninsula between the Ionian Sea and Lake Butrint, it contains layers of Greek, Roman, Byzantine, and Venetian civilizations. Visitors can wander through the ancient theater, admire well-preserved floor mosaics in the baptistery, and explore the massive Roman forum. The ruins are nestled within a lush national park, where the combination of ancient stone and Mediterranean vegetation creates a magical atmosphere. Butrint was once a major port and a refined city that even Julius Caesar visited during his campaigns."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Butrint területén görög, római, bizánci és velencei építészeti emlékek is megtalálhatók, tükrözve a város változatos történetét.",
        "Az ókori színház, amely a 3. században épült, ma is remek állapotban van és kulturális események helyszíne.",
        "A város egy sós vizű lagúna partján fekszik, és egy különleges, kézzel hajtott kompon keresztül érhető el.",
        "Butrint az első albán helyszín volt, amely 1992-ben felkerült az UNESCO Világörökségi listájára.",
        "A területen található nagy bazilika és a keresztelőkápolna mozaikjai a korai keresztény művészet remekművei."],
      ro: [
        "Legendele spun că Butrint a fost fondat de exilați din Troia antică.",
        "Situl conține ruine impresionante din perioadele romană și bizantină.",
        "Butrint a fost inclus în patrimoniul mondial UNESCO în anul 1992.",
        "Zona umedă Ramsar din jurul sitului adăpostește o biodiversitate bogată."
      ],
      en: [
        "According to mythology, Butrint was founded by exiles fleeing the fall of Troy, including the prophet Helenus.",
        "The 6th-century baptistery features one of the most elaborate and best-preserved floor mosaics in the Mediterranean.",
        "Butrint was designated as Albania's first UNESCO World Heritage site in 1992 and later expanded to include a national park.",
        "The site features a triangular Venetian castle that guarded the entrance to the strategic Vivari Channel."
      ]
    },
    type: "historical",
    coords: [20.0195, 39.7431],
    parent: "AL-006",
    facts: {
      de: ["Römische und griechische Ruinen.", "Inmitten eines Nationalparks.", "Venedig hat hier Spuren hinterlassen."],
      hu: ["Római és görög romok.", "Egy nemzeti park közepén.", "Velence is nyomot hagyott itt."],
      ro: ["Ruine romane și grecești.", "În mijlocul unui parc național.", "Veneția a lăsat urme aici."],
      en: ["Roman and Greek ruins.", "In the middle of a national park.", "Venice left traces here."]
    }
  },
  {
    id: "hist-apollonia",
    name: { de: "Apollonia", hu: "Apollónia", ro: "Apollonia", en: "Apollonia" },
    description: { de: "Antike griechische Stadt", hu: "Ókori görög város", ro: "Oraș antic grec", en: "Ancient Greek city" },
    descriptionAdvanced: {
      de: "Eine bedeutende antike Siedlung, die einst ein wichtiges Bildungszentrum war.",
      hu: "Apollónia az ókor egyik legfontosabb görög gyarmatvárosa volt, amelyet i.e. 588-ban alapítottak, majd később neves római oktatási központtá vált. Filozófiai iskolája olyan híres volt, hogy még a későbbi Augustus császár is ide jött tanulni fiatal korában. A régészeti parkban látható az Agonothetész-emlékmű, egy ókori színház és könyvtár romjai, mindez ezüstös olajfaligetek között. A helyszín különlegessége a 13. századi Szent Mária-kolostor, amelyben a romok között talált leleteket bemutató múzeum kapott helyet. Apollónia békés és lenyűgöző bepillantást nyújt a klasszikus ókor szellemi és politikai világába.",
      ro: "O așezare antică importantă, care a fost odată un centru educațional major.",
      en: "Apollonia was one of the most important Greek colonies in the ancient world, founded in 588 BC and later becoming a prestigious Roman center of learning. It was famous for its school of philosophy, which was so renowned that the future Emperor Augustus came here to study. The archaeological park features the impressive Monument of Agonothetes, an ancient theater, and a library, all set against a backdrop of olive groves. A unique feature of the site is the 13th-century Monastery of Saint Mary, which houses a museum showcasing artifacts discovered in the ruins. Apollonia offers a peaceful and evocative glimpse into the intellectual and political life of classical antiquity."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Apollónia városa Arisztotelész szerint az oligarchiák és a demokráciák keveredésének tökéletes példája volt.",
        "A városban tanult az ifjú Octavianus, a későbbi Augustus császár, amikor hírt kapott Julius Caesar haláláról.",
        "A helyszínen található Agonothetész emlékmű a város egyik leglátványosabb és legismertebb romja.",
        "Apollónia pusztulását egy 4. századi földrengés okozta, amely megváltoztatta a környező folyók folyását, elvágva a várost a tengertől.",
        "Az egykori város területén található 13. századi Szűz Mária kolostor ma régészeti múzeumnak ad otthont."],
      ro: [
        "Apollonia a fost fondată în anul 588 î.Hr. de coloniști din Corint și Corfu.",
        "Viitorul împărat roman Augustus a studiat filosofia și retorica în acest oraș.",
        "Monumentul Agonothetes este cea mai recunoscută structură a sitului arheologic.",
        "Complexul include un muzeu arheologic situat într-o mănăstire medievală."
      ],
      en: [
        "The future Roman Emperor Augustus was studying in Apollonia when he received news of Julius Caesar's assassination.",
        "At its peak, Apollonia was home to around 60,000 residents and was a major stop on the trade routes to the east.",
        "The site's museum is housed in a medieval monastery, where the courtyard is filled with ancient statues and inscriptions.",
        "Apollonia was once a major port on the Vjosa River before the river changed its course following a massive earthquake."
      ]
    },
    type: "historical",
    coords: [19.4678, 40.7226],
    parent: "AL-008",
    facts: {
      de: ["Gegründet im 6. Jh. v. Chr.", "Besucht von Kaiser Augustus.", "Bedeutendes Kloster vor Ort."],
      hu: ["Kr. e. 6. században alapították.", "Augustus császár is megfordult itt.", "Jelentős kolostor található a területén."],
      ro: ["Fondat în secolul VI î.Hr.", "Vizitat de împăratul Augustus.", "Mănăstire importantă la fața locului."],
      en: ["Founded in the 6th century BC.", "Visited by Emperor Augustus.", "Important monastery on site."]
    }
  },
  {
    id: "hist-rozafa",
    name: { de: "Burg Rozafa", hu: "Rozafa vára", ro: "Cetatea Rozafa", en: "Rozafa Castle" },
    description: { de: "Mächtige Festung", hu: "Hatalmas erőd", ro: "Fortăreață impunătoare", en: "Massive fortress" },
    descriptionAdvanced: {
      de: "Eine alte illyrische Burg mit Blick auf Shkodra.",
      hu: "A Rozafa vár egy monumentális erődítmény, amely egy sziklás dombon magasodik Shkodra városa és három folyó összefolyása felett. Falai az illír korig nyúlnak vissza, és több mint kétezer éven át stratégiai fontosságú helyszín volt, amelyért illírek, rómaiak, velenceiek és oszmánok harcoltak. A vár legismertebb legendája Rozafáról, a fiatal asszonyról szól, akit élve falaztak be az alapokba, hogy az erőd soha ne omoljon le. A kiterjedt romok között középkori ciszternák, mecsetté alakított templom és egy hadtörténeti múzeum várja a felfedezőket. A csúcsról nyíló panoráma, amely magában foglalja a Shkodrai-tavat és a távoli hegyeket, Albánia egyik legszebb kilátása.",
      ro: "O veche cetate iliră cu vedere spre Shkodra.",
      en: "Rozafa Castle is a massive fortress that stands on a rocky hill overlooking the city of Shkodra and the confluence of three rivers. With walls dating back to the Illyrian period, it has been a site of strategic importance for over two millennia, contested by Illyrians, Romans, Venetians, and Ottomans. The castle is best known for the haunting legend of Rozafa, a young woman who was supposedly walled into its foundations to ensure the fortress would never fall. Inside the sprawling ruins, visitors can explore medieval cisterns, a church-turned-mosque, and a small museum that tells the story of the castle's many sieges. The panoramic views from the top, encompassing Lake Skadar and the distant mountains, are among the best in Albania."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Rozafa vár legendája szerint egy fiatal asszonyt, Rozafát élve befalaztak a vár falaiba, hogy az építmény szilárd maradjon.",
        "Az erőd három nagy udvarra oszlik, ahol oszmán kori börtönök, mecsetromok és egy velencei stílusú kapitányi szállás is látható.",
        "A várból lenyűgöző kilátás nyílik a Drin, a Buna és a Kir folyók összefolyására, valamint a Shkodrai-tóra.",
        "A vár falai az illír, a római, a bizánci, a velencei és az oszmán uralom nyomait is magukon viselik.",
        "Ma a várban egy kis múzeum működik, amely bemutatja az erőd és Shkodra környékének hadtörténetét."],
      ro: [
        "Legenda spune că o femeie a fost zidită în pereții cetății pentru a-i asigura trăinicia.",
        "Cetatea oferă o vedere panoramică spectaculoasă asupra a drie râuri diferite.",
        "Fortăreața a rezistat unor asedii otomane celebre în secolul al XV-lea.",
        "Săpăturile arheologice au scos la iveală urme de locuire din epoca bronzului."
      ],
      en: [
        "The legend says Rozafa asked to have her right breast, hand, and foot left exposed so she could continue to nurse and comfort her infant son.",
        "The oldest parts of the castle walls were built by the Illyrians long before the Roman conquest of the region.",
        "Rozafa Castle successfully withstood two major Ottoman sieges in the 15th century, becoming a symbol of heroic resistance.",
        "The castle's area covers about 9 hectares, making it one of the largest and most impressive fortresses in the Balkans."
      ]
    },
    type: "historical",
    coords: [19.4939, 42.0463],
    parent: "AL-007",
    facts: {
      de: ["Legende der eingemauerten Frau.", "Blick auf drei Flüsse.", "Strategische Lage."],
      hu: ["A befalazott asszony legendája.", "Kilátás három folyóra.", "Stratégiai elhelyezkedés."],
      ro: ["Legenda femeii zidite.", "Vedere spre trei râuri.", "Locație strategică."],
      en: ["Legend of the walled-in woman.", "View of three rivers.", "Strategic location."]
    }
  },
  {
    id: "hist-berat-castle",
    name: { de: "Burg von Berat", hu: "Berati vár", ro: "Cetatea Berat", en: "Berat Castle" },
    description: { de: "Bewohnte Zitadelle", hu: "Lakott citadella", ro: "Citadelă locuită", en: "Inhabited citadel" },
    descriptionAdvanced: {
      de: "Eine der größten Festungsanlagen Albaniens, die noch bewohnt ist.",
      hu: "A Berati vár, más néven a Kala, egy hatalmas, 13. századi erődítmény, amely különleges módon ma is egy élő, lakott városnegyed. Az Osum folyó felett magasodó falak macskaköves utcák útvesztőjét, hagyományos kőházakat és számos ódon bizánci templomot rejtenek. Ez a világon azon kevés helyek egyike, ahol a középkori erődítmények még mindig egy állandó lakóközösség otthonául szolgálnak. A citadellából csodálatos kilátás nyílik az alatta fekvő Mangalem negyed „egymásra tornyozott” ablakaira és a távolban magasodó Tomorr-hegy havas csúcsaira. A vár felfedezése olyan érzés, mintha visszalépnénk az időben, ahol az évszázados falak között még ma is lüktet az élet.",
      ro: "Una dintre cele mai mari fortificații din Albania, care este încă locuită.",
      en: "The Castle of Berat, also known as the Kala, is a massive 13th-century fortress that uniquely remains a living, breathing neighborhood. High above the Osum River, its walls enclose a maze of narrow cobblestone streets, traditional stone houses, and several ancient Byzantine churches. It is one of the few places in the world where medieval fortifications are still home to a permanent community of residents. The castle offers spectacular views of the 'stacked' windows of the Mangalem district below and the snowy peaks of Mount Tomorr in the distance. Exploring the citadel feels like stepping back in time, as the sounds of everyday life echo through centuries-old alleys and ruins."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Berati vár Albánia azon kevés középkori erődítményeinek egyike, amelynek falain belül a mai napig lakott negyed található.",
        "A vár területén egykor több mint 40 ortodox templom állt, amelyek közül sok még ma is látogatható.",
        "A Kala negyed macskaköves utcái és kőházai az UNESCO Világörökség részét képezik, megőrizve a középkori hangulatot.",
        "Az Onufri Nemzeti Ikonográfiai Múzeum a várban található Szent Mária elszenderedése templomban működik.",
        "A várból nyíló kilátás az Osum folyóra és a város fehér házaira Albánia egyik legtöbbet fotózott panorámája."],
      ro: [
        "Castelul este situat pe dealul Kala și oferă o poziție defensivă naturală.",
        "În interiorul cetății se aflau odată peste 40 de biserici bizantine.",
        "Ruinele Moscheii Roșii demonstrează coexistența diferitelor religii în cetate.",
        "Berat este una dintre puținele cetăți din lume care au rămas permanent locuite."
      ],
      en: [
        "The castle once housed over 40 churches, many of which still stand and contain priceless medieval frescoes.",
        "The Red Mosque, located within the castle walls, is one of the oldest mosques in Albania, dating to the early Ottoman period.",
        "The White Mosque ruins within the castle testify to the diverse religious history of the citadel over the centuries.",
        "Residents of the castle still use ancient cisterns for water and maintain traditions that have lasted for hundreds of years."
      ]
    },
    type: "historical",
    coords: [19.9452, 40.7081],
    parent: "AL-012",
    facts: {
      de: ["Viele alte Kirchen im Inneren.", "Blick über den Osum.", "Bilderbuch-Architektur."],
      hu: ["Sok régi templom a falakon belül.", "Kilátás az Osum folyóra.", "Mesébe illő építészet."],
      ro: ["Multe biserici vechi în interior.", "Vedere peste râul Osum.", "Arhitectură de poveste."],
      en: ["Many old churches inside.", "View over the Osum river.", "Picture-perfect architecture."]
    }
  },
  {
    id: "hist-gjirokaster-castle",
    name: { de: "Burg von Gjirokastra", hu: "Gjirokastrai vár", ro: "Cetatea Gjirokastra", en: "Gjirokastra Castle" },
    description: { de: "Dominante Festung", hu: "Domináns erőd", ro: "Fortăreață dominantă", en: "Dominant fortress" },
    descriptionAdvanced: {
      de: "Eine massive Burg, die das Stadtbild von Gjirokastra beherrscht.",
      hu: "A Gjirokastrai vár a Balkán egyik legnagyobb és legimpozánsabb erődítménye, amely az UNESCO által védett „kőváros” látképét uralja. A stratégiai hegygerincre épült várat évszázadokon át bővítették és erősítették, szolgált citadellaként, börtönként és katonai helyőrségként is. Az erődítményben egy hatalmas óratorony, egy tüzérségi eszközökkel teli boltozatos galéria és a hidegháború idején épült alagútrendszer is található. Ma a vár az Országos Folklórfesztivál drámai díszleteként szolgál, és egy gazdag hadtörténeti múzeumnak ad otthont. Vastag kőfalai és sötét boltozatai erőteljes képet festenek Albánia viharos történelméről és függetlenségi küzdelmeiről.",
      ro: "O cetate masivă care domină peisajul urban al Gjirokastrei.",
      en: "The Gjirokastra Castle is one of the largest and most imposing fortresses in the Balkans, dominating the skyline of the UNESCO-protected 'Stone City.' Built on a strategic ridge, it has been expanded and reinforced over centuries, serving as a citadel, a prison, and a military garrison. The fortress features a massive clock tower, a long vaulted gallery filled with heavy artillery, and a series of deep tunnels used during the Cold War. Today, it serves as a dramatic stage for the National Folklore Festival and houses a comprehensive military museum. Its thick stone walls and dark vaults provide a powerful insight into Albania's turbulent history and its struggle for independence."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Gjirokastrai vár ad otthont az Országos Fegyvermúzeumnak, ahol Albánia hadtörténetének emlékeit őrzik.",
        "A vár udvarán látható egy amerikai Lockheed T-33-as repülőgép roncsa, amely 1957-ben kényszerleszállást hajtott végre Albániában.",
        "Az erőd alatt egy titkos, hidegháborús bunkerrendszer található, amelyet a politikai elit védelmére építettek.",
        "A vár óratornya a 19. században épült, és a város egyik legismertebb jelképévé vált.",
        "Az erőd falairól belátható az egész Drino-völgy és a környező, hófödte hegycsúcsok."],
      ro: [
        "Cetatea găzduiește un muzeu militar cu armament din diverse perioade istorice.",
        "Festivalul Național de Folclor are loc periodic în incinta castelului.",
        "Turnul cu ceas este cel mai vizibil simbol al fortificației din Gjirokastăr.",
        "Tunelurile construite în perioada Războiului Rece pot fi vizitate sub castel."
      ],
      en: [
        "The castle's clock tower was added in the 19th century by Ali Pasha of Tepelena to modernize the fortress's appearance.",
        "In the castle's courtyard sits the silver-colored wreck of a US Air Force T-33 trainer jet that was forced to land in 1957.",
        "The fortress was used as a high-security prison for political dissidents during the reign of King Zog and the communist era.",
        "The castle's foundations date back to the 12th century, though most of what is visible today was built in the 19th century."
      ]
    },
    type: "historical",
    coords: [20.1415, 40.0735],
    parent: "AL-005",
    facts: {
      de: ["Uhrturm aus dem 19. Jh.", "Flugzeugwrack im Innenhof.", "Historisches Gefängnis."],
      hu: ["19. századi óratorony.", "Repülőgép-roncs az udvaron.", "Történelmi börtön."],
      ro: ["Turn cu ceas din sec. XIX.", "Epavă de avion în curte.", "Închisoare istorică."],
      en: ["19th-century clock tower.", "Airplane wreck in the courtyard.", "Historical prison."]
    }
  },
  {
    id: "hist-kruje",
    name: { de: "Burg Kruja", hu: "Krujai vár", ro: "Cetatea Kruja", en: "Kruja Castle" },
    description: { de: "Symbol des Widerstands", hu: "Az ellenállás szimbóluma", ro: "Simbolul rezistenței", en: "Symbol of resistance" },
    descriptionAdvanced: {
      de: "Das Zentrum von Skanderbegs Kampf gegen das Osmanische Reich.",
      hu: "A Krujai vár az albán nemzeti büszkeség egyik legfontosabb helyszíne, hiszen innen vezette Szkander bég 25 éven át az ellenállást az Oszmán Birodalom ellen. A drámai sziklára épült erődítmény három nagy oszmán ostromot is sikeresen visszavert, így Európa-szerte a keresztény ellenállás szimbólumává vált. Ma a várban található a Szkander bég múzeum, amely nagyívű stílusban mutatja be a nemzeti hős életét és csatáit. Mellette egy 18. századi oszmán házban berendezett néprajzi múzeum várja a látogatókat, bemutatva a korabeli életmódot. A várfalakról lélegzetelállító kilátás nyílik a tengerparti síkságra egészen az Adriai-tengerig.",
      ro: "Centrul luptei lui Skanderbeg împotriva Imperiului Otoman.",
      en: "Kruja Castle is a site of profound national pride, serving as the base from which the hero Skanderbeg led the resistance against the Ottoman Empire for 25 years. Perched on a dramatic cliff, the fortress successfully repelled three major Ottoman sieges, becoming a symbol of Christian resistance in Europe. Today, the castle houses the Skanderbeg Museum, designed in a grand socialist-realist style, which tells the epic story of the hero's life and battles. Adjacent to it is a beautiful ethnographic museum located in an authentic 18th-century Ottoman house. The castle offers breathtaking views that stretch across the coastal plains all the way to the Adriatic Sea."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Kruja vára volt az ellenállás központja Szkander bég idején, aki 25 éven át verte vissza az oszmán ostromokat.",
        "A várban található Szkander bég múzeumát Enver Hoxha lánya tervezte, és az albán nemzeti identitás egyik legfontosabb szimbóluma.",
        "Az erőd lábánál fekvő régi bazár Albánia egyik legrégebbi és leghangulatosabb piaca, ahol hagyományos kézműves termékeket árulnak.",
        "A vár területén található egy bektasi teke (kolostor) is, amely a vallási sokszínűség bizonyítéka.",
        "Kruja elhelyezkedése miatt stratégiai jelentőséggel bírt, hiszen innen belátható volt az egész adriai síkság."],
      ro: [
        "Cetatea a fost centrul rezistenței lui Skanderbeg împotriva expansiunii otomane.",
        "Muzeul Etnografic oferă o imagine detaliată a vieții tradiționale albaneze.",
        "De pe zidurile castelului se poate vedea până la Marea Adriatică în zilele senine.",
        "Vechiul Bazar din apropiere este locul ideal pentru suveniruri artizanale."
      ],
      en: [
        "Kruja was the capital of the first autonomous Albanian state, the Principality of Arber, during the Middle Ages.",
        "The castle's Bektashi teke (shrine) remains an important place of pilgrimage and spiritual significance for the local community.",
        "The Old Bazar at the foot of the castle is one of the oldest in Albania, famous for its hand-woven carpets and silver filigree.",
        "Skanderbeg's family crest, featuring a double-headed eagle, became the basis for the modern Albanian national flag."
      ]
    },
    type: "historical",
    coords: [19.7925, 41.5100],
    parent: "AL-010",
    facts: {
      de: ["Skanderbeg-Museum.", "Alter Basar am Fuße.", "Wichtiger Wallfahrtsort."],
      hu: ["Szkander bég múzeum.", "Régi bazár a vár tövében.", "Fontos zarándokhely."],
      ro: ["Muzeul Skanderbeg.", "Bazar vechi la poale.", "Important loc de pelerinaj."],
      en: ["Skanderbeg Museum.", "Old bazaar at the foot.", "Important pilgrimage site."]
    }
  },
  {
    id: "hist-lezhe-castle",
    name: { de: "Burg von Lezhë", hu: "Lezhëi vár", ro: "Cetatea Lezhë", en: "Lezhë Castle" },
    description: { de: "Mittelalterliche Akropolis", hu: "Középkori akropolisz", ro: "Acropolă medievală", en: "Medieval acropolis" },
    descriptionAdvanced: {
      de: "Eine strategische Festung mit Blick auf die Adria und die Stadt Lezhë.",
      hu: "A vár falait a 15. században Szkander bég parancsára erősítették meg, hogy ellenálljanak a török előretörésnek. Az erőd területén talált régészeti leletek bizonyítják, hogy a helyszín már az illírek előtt is lakott volt. A várból látható a közeli Shëngjin kikötője és a Drin folyó torkolata, ami fontos kereskedelmi útvonal volt. A lezhei várban az oszmán uralom idején egy mecset is épült, amelynek romjai ma is láthatók az udvaron. A vár rekonstrukciója során feltárták az eredeti illír falmaradványokat, amelyekre a későbbi korszakok építkeztek.",
      ro: "O fortăreață strategică cu vedere la Marea Adriatică și la orașul Lezhë.",
      en: "Lezhë Castle stands on a high hill overlooking the city of Lezhë, offering a strategic vantage point that has been used since the time of the ancient Illyrians. The fortress was built upon the ruins of the Illyrian Acropolis of Lissus and saw significant reconstructions during the Roman, Byzantine, and Ottoman periods. It played a vital role in the defense of the region and served as a key stronghold for the League of Lezhë in the 15th century. Today, visitors can see the remains of Ottoman-era buildings, including a mosque and residential quarters, within its ancient walls. The hike to the castle is rewarded with some of the most stunning panoramic views of the Adriatic coast and the surrounding lagoons."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A vár falait a 15. században Szkander bég parancsára erősítették meg, hogy ellenálljanak a török előretörésnek.",
        "Az erőd területén talált régészeti leletek bizonyítják, hogy a helyszín már az illírek előtt is lakott volt.",
        "A várból látható a közeli Shëngjin kikötője és a Drin folyó torkolata, ami fontos kereskedelmi útvonal volt.",
        "A lezhei várban az oszmán uralom idején egy mecset is épült, amelynek romjai ma is láthatók az udvaron.",
        "A vár rekonstrukciója során feltárták az eredeti illír falmaradványokat, amelyekre a későbbi korszakok építkeztek."],
      ro: [
        "Fundațiile cetății datează din perioada antică a orașului ilir Lissus.",
        "Castul a jucat un rol strategic crucial în controlul rutelor de coastă.",
        "Venețienii au reconstruit parțial fortificația pentru a-și proteja interesele.",
        "Panorama asupra coastei adriatice de la înălțimea cetății este spectaculoasă."
      ],
      en: [
        "The castle walls feature unique 'cyclopean' masonry from the Illyrian period, using massive stones without mortar.",
        "It was a major military base for the Venetians in the 15th century before falling to the Ottoman Empire in 1478.",
        "The castle's position allowed it to control the main trade routes between the coast and the northern Albanian interior.",
        "Recent archaeological excavations have revealed that the site was inhabited as early as the Bronze Age."
      ]
    },
    type: "historical",
    coords: [19.6510, 41.7820],
    parent: "AL-011",
    facts: {
      de: ["Illyrische Fundamente.", "Osmanische Moschee-Ruinen.", "Panoramablick auf die Küste."],
      hu: ["Illír alapok.", "Oszmán mecsetromok.", "Panorámás kilátás a partra."],
      ro: ["Fundații ilire.", "Ruinele unei moschei otomane.", "Vedere panoramică a coastei."],
      en: ["Illyrian foundations.", "Ottoman mosque ruins.", "Panoramic view of the coast."]
    }
  },
  {
    id: "hist-elbasan-castle",
    name: { de: "Burg von Elbasan", hu: "Elbasani vár", ro: "Cetatea Elbasan", en: "Elbasan Castle" },
    description: { de: "Osmanische Stadtburg", hu: "Oszmán városi vár", ro: "Cetate otomană în oraș", en: "Ottoman city castle" },
    descriptionAdvanced: {
      de: "Eine flache Festungsanlage mitten im Stadtzentrum von Elbasan.",
      hu: "Az Elbasani vár egy ritka példája az alföldi erődítményeknek, amely a modern városközpontban található, és az ókori római Scampis állomás maradványaira épült. II. Mehmed oszmán szultán építtette 1466-ban, hogy bázisként szolgáljon a Szkander bég elleni hadjárataihoz. Az erődítmény különlegessége, hogy ma is lakott negyed, ahol családok élnek a falakon belüli hagyományos házakban. A látogatók ódon templomokat, történelmi mecseteket és egy régi törökfürdőt (hamamot) is felfedezhetnek pár utcányi területen belül. A vár hatalmas déli kapuja Elbasan jelképe, és emlékeztet a várost átszelő ókori Via Egnatia kereskedelmi útra.",
      ro: "O fortificație joasă aflată chiar în centrul orașului Elbasan.",
      en: "The Elbasan Castle is a rare example of a low-lying 'field castle' located in the center of the modern city, built on the remains of the Roman station of Scampis. It was constructed by the Ottoman Sultan Mehmet II in 1466 as a base for his campaigns against the Albanian hero Skanderbeg. The fortress is unusual because it remains a fully functioning residential neighborhood, with families living in traditional houses inside the walls. Visitors can explore ancient churches, historic mosques, and a traditional bathhouse (hamam) all within a few blocks. The castle's massive South Gate remains a symbol of Elbasan and its enduring connection to the ancient Via Egnatia."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Elbasan vára egyike azon kevés albán erődítménynek, amely nem dombtetőre, hanem sík terepre épült.",
        "A vár falai között található a Szent Mária templom, amely a régió egyik legfontosabb ortodox vallási központja.",
        "Az erődítmény eredetileg 26 toronnyal rendelkezett, amelyekből mára csak néhány maradt épségben.",
        "A várnegyed szűk utcái és hagyományos házai hűen tükrözik a 17-18. századi albán városi építészetet.",
        "II. Mehmed oszmán szultán 1466-ban mindössze 25 nap alatt építtette fel a vár nagy részét, hogy bázisként szolgáljon Kruja ellen."],
      ro: [
        "Fortificația originală avea 26 de turnuri de apărare uniform distribuite.",
        "Turnul cu ceas din incinta cetății este un reper istoric important al orașului.",
        "Poarta sudică a fost punctul de acces principal pentru drumul Via Egnatia.",
        "Interiorul cetății adăpostește astăzi o comunitate multietnică vibrantă."
      ],
      en: [
        "The castle was originally built in just 25 days by thousands of workers under the command of Sultan Mehmet II.",
        "It had 26 defensive towers, each 9 meters high, though only some of the original walls remain intact today.",
        "The Saint Mary Church inside the castle is a beautiful example of 18th-century Orthodox architecture and wood carving.",
        "The castle's Clock Tower was added in 1899 and remains one of the city's most recognizable landmarks."
      ]
    },
    type: "historical",
    coords: [20.0822, 41.1125],
    parent: "AL-004",
    facts: {
      de: ["Erbaut von Sultan Mehmet II.", "Wohnviertel im Inneren.", "Alte Kirchen und Moscheen."],
      hu: ["II. Mehmed szultán építtette.", "Lakónegyed a falakon belül.", "Régi templomok és mecsetek."],
      ro: ["Construită de Sultanul Mehmet II.", "Cartier rezidențial în interior.", "Biserici și moschei vechi."],
      en: ["Built by Sultan Mehmet II.", "Residential neighborhood inside.", "Old churches and mosques."]
    }
  }
];

export const albaniaNature: POI[] = [
  {
    id: "nat-lake-skadar",
    name: { de: "Shkodrasee", hu: "Shkodrai-tó", ro: "Lacul Shkodra", en: "Lake Skadar" },
    description: { de: "Größter See des Balkans", hu: "A Balkán legnagyobb tava", ro: "Cel mai mare lac din Balcani", en: "Largest lake in the Balkans" },
    descriptionAdvanced: {
      de: "Ein bedeutendes Naturreservat an der Grenze zwischen Albanien und Montenegro.",
      hu: "A Shkodrai-tó a Balkán-félsziget legnagyobb tava, egy különleges ökoszisztéma, amelyen Albánia és Montenegró osztozik. A tó híres elképesztő biológiai sokféleségéről, Európa egyik legfontosabb madárparadicsoma, és a ritka borzas pelikán egyik utolsó menedékhelye. Kristálytiszta vizét tündérrózsák borítják, partjait pedig drámai karszthegyek és hagyományos halászfalvak szegélyezik. A tó albán oldala, Shkodra környékén, vadregényesebb és autentikusabb élményt nyújt érintetlen vizes élőhelyeivel és történelmi emlékeivel. Legyen szó csónakázásról, kerékpározásról vagy túrázásról, a Shkodrai-tó a régió egyik legtisztább természeti táját kínálja a látogatóknak.",
      ro: "O rezervație naturală importantă la granița dintre Albania și Muntenegru.",
      en: "Lake Skadar is the largest lake in the Balkan Peninsula and a vital ecosystem shared between Albania and Montenegro. The lake is famous for its incredible biodiversity, serving as one of Europe's top bird-watching destinations and a home to the rare Dalmatian pelican. Its crystal-clear waters are dotted with floating water lilies and surrounded by dramatic karst mountains and traditional fishing villages. The Albanian side of the lake, centered around Shkodra, offers a more rugged and authentic experience with its peaceful wetlands and historic sites. Whether by boat, bicycle, or on foot, Lake Skadar provides a serene escape into some of the most pristine nature in the region."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A tó vízszintje az évszakoktól függően jelentősen változik, így területe 370 és 530 négyzetkilométer között mozog.",
        "Ez az egyik utolsó menedékhelye a borzas pelikánnak Európában, amely a tó egyik legfontosabb szimbóluma.",
        "A Shkodrai-tó vize több mint 50 halfajnak ad otthont, köztük a csak itt őshonos albán domolykónak.",
        "A tó partján számos kis sziget található, amelyeken középkori kolostorok és erődök romjai bújnak meg.",
        "A Shkodrai-tó Nemzeti Park Albánia egyik legfontosabb vizes élőhelye, amely a Ramsari egyezmény védelme alatt áll."],
      ro: [
        "Lacul Shkodra este cel mai mare lac din Peninsula Balcanică.",
        "Este unul dintre ultimele refugii pentru pelicanul creț din Europa.",
        "Fenomenul „ochilor carstici” creează izvoare subacvatice adânci în lac.",
        "Peste 270 de specii de păsări populează apele și malurile acestui lac."
      ],
      en: [
        "The lake's surface area varies dramatically between seasons, expanding from 370 to over 530 square kilometers.",
        "It is home to over 270 species of birds, making it a Ramsar site of international importance for migratory species.",
        "Lake Skadar is one of the last places in Europe where the endangered Dalmatian pelican can still be found nesting.",
        "The lake is famous for its 'carps' and 'bleaks,' which are local fish species traditionally smoked and sold in Shkodra."
      ]
    },
    type: "landmark",
    coords: [19.2974, 42.1794],
    parent: "AL-007",
    facts: {
      de: ["Reiche Vogelwelt.", "Seltene Pelikane.", "Teilweise Nationalpark."],
      hu: ["Gazdag madárvilág.", "Ritka pelikánok.", "Részben nemzeti park."],
      ro: ["Faună aviară bogată.", "Pelicani rari.", "Parțial parc național."],
      en: ["Rich birdlife.", "Rare pelicans.", "Partially a national park."]
    }
  },
  {
    id: "nat-lake-ohrid",
    name: { de: "Ohridsee", hu: "Ohridi-tó", ro: "Lacul Ohrid", en: "Lake Ohrid" },
    description: { de: "UNESCO-Naturerbe", hu: "UNESCO természeti örökség", ro: "Patrimoniu natural UNESCO", en: "UNESCO Natural Heritage" },
    descriptionAdvanced: {
      de: "Einer der ältesten und tiefsten Seen Europas.",
      hu: "Az Ohridi-tó a világ egyik legrégebbi és legmélyebb tava, amelyet egyedülálló ökoszisztémája miatt gyakran „élő kövületek múzeumaként” emlegetnek. Az Észak-Macedóniával közös tavat az UNESCO 1979-ben vette fel a Világörökségi listára természeti és kulturális értékei miatt egyaránt. Hihetetlenül tiszta vize helyenként a 300 méteres mélységet is eléri, és több mint 200 olyan fajnak ad otthont, amely sehol máshol nem található meg a Földön. Az albán partvidék híres Pogradec hangulatos városáról és a festői Drilon-forrásokról, ahol hattyúk úsznak a kristálytiszta vízben. A tó ősi eredete és nyugodt szépsége a Balkán egyik legfontosabb ökológiai kincse.",
      ro: "Unul dintre cele mai vechi și mai adânci lacuri din Europa.",
      en: "Lake Ohrid is one of the oldest and deepest lakes in the world, often described as a 'museum of living fossils' due to its unique ecosystem. Shared with North Macedonia, the lake has been a UNESCO World Heritage site since 1979 for both its outstanding natural and cultural values. Its incredibly clear waters reach depths of nearly 300 meters and house over 200 endemic species that are found nowhere else on Earth. The Albanian shore is known for the scenic town of Pogradec and the beautiful Drilon springs, where swans glide through crystal waters. The lake's ancient origin and serene beauty make it one of the most spiritually and ecologically significant places in the Balkans."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Az Ohridi-tó becsült kora 3-5 millió év, ezzel a világ egyik legősibb tava, hasonlóan a Bajkál-tóhoz.",
        "A tó vizében több mint 200 olyan faj él, amely a világon sehol máshol nem található meg, például az ohridi lazac.",
        "Átlagos mélysége 155 méter, de legmélyebb pontján eléri a 289 métert is, kristálytiszta vize pedig 20 méterig átlátszó.",
        "Az albán oldalon fekvő Pogradec városa a tó partjának egyik legnépszerűbb üdülőhelye, híres parkjairól és strandjairól.",
        "Az Ohridi-tó és környéke közös albán-macedón UNESCO világörökségi védelmet élvez."],
      ro: [
        "Lacul Ohrid are o vechime estimată la peste 3 milioane de ani.",
        "Găzduiește numeroase specii endemice care nu se găsesc nicăieri altundeva.",
        "Peștele Koran este o delicatesă locală celebră specifică acestui lac.",
        "Claritatea apei permite vizibilitatea până la o adâncime de peste 20 de metri."
      ],
      en: [
        "Lake Ohrid is estimated to be around 3 to 5 million years old, making it one of the few truly ancient lakes on Earth.",
        "The lake is home to the Ohrid trout, a delicious and rare fish species that has lived in these waters since the Ice Age.",
        "Due to its extraordinary clarity, underwater visibility in Lake Ohrid can often reach up to 22 meters deep.",
        "It is one of the most biodiverse lakes in the world per unit of area, housing many species that survived from the Tertiary period."
      ]
    },
    type: "landmark",
    coords: [20.7161, 41.0366],
    parent: "AL-003",
    facts: {
      de: ["Einzigartige Fischarten.", "Kristallklares Wasser.", "UNESCO-Schutz."],
      hu: ["Egyedülálló halfajok.", "Kristálytiszta víz.", "UNESCO védelem."],
      ro: ["Specii de pești unice.", "Apă de cristal.", "Protecție UNESCO."],
      en: ["Unique fish species.", "Crystal clear water.", "UNESCO protection."]
    }
  },
  {
    id: "nat-valbone",
    name: { de: "Valbona-Tal", hu: "Valbona-völgy", ro: "Valea Valbone", en: "Valbona Valley" },
    description: { de: "Albanische Alpen", hu: "Albán Alpok", ro: "Alpii Albanezi", en: "Albanian Alps" },
    descriptionAdvanced: {
      de: "Ein spektakuläres Hochtal im Norden Albaniens.",
      hu: "A Valbona-völgyet gyakran az „Albán-Alpok ékköveként” emlegetik, ahol meredek sziklafalak, türkizkék folyók és dús zöld rétek alkotnak lélegzetelállító alpesi tájat. A távoli Tropoja régióban található völgy Európa egyik leglátványosabb hegyi panorámáját kínálja, amelyet érintetlensége miatt sokan a svájci Alpok vadregényesebb változatának tartanak. A völgy a túrázók paradicsoma, ösvényei ősi bükkerdőkön és magas hágókon vezetnek át a szomszégos Theth-völgy felé. A hagyományos kőházak, a „kule”-k, a hegyi vendégszeretetet és a felvidéki kultúra egyedülálló ízét kínálják az utazóknak. A levegő kristálytiszta, a hegyek csendje pedig mély nyugalmat áraszt.",
      ro: "O vale montană spectaculoasă în nordul Albaniei.",
      en: "The Valbona Valley is often hailed as the 'Gem of the Albanian Alps,' a breathtaking alpine landscape of jagged peaks, turquoise rivers, and lush green meadows. Located in the remote Tropoja region, it offers some of the most spectacular mountain scenery in Europe, often compared to the Swiss Alps but with a much more wild and untouched feel. The valley is a paradise for hikers, with trails leading through ancient beech forests and over high passes to the neighboring Theth Valley. Traditional stone houses, known as 'kulla,' offer warm mountain hospitality and a taste of the unique culture of the northern highlands. The air is incredibly pure, and the silence of the mountains provides a deep sense of tranquility."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Valbona-völgyet gyakran nevezik az „Albán Alpok ékkövének” kristálytiszta folyója és hatalmas hegycsúcsai miatt.",
        "A völgyben található Valbona folyó vize olyan tiszta, hogy közvetlenül iható, és színe az ég kékjét tükrözi.",
        "A környék a túrázók paradicsoma, a leghíresebb útvonal a Valbonát a szomszédos Theth faluval összekötő hágó.",
        "A völgy lakói még mindig őrizik az ősi albán vendégszeretetet és a hegyi életmód hagyományait.",
        "Télen a völgyet gyakran vastag hótakaró borítja, ilyenkor a falu szinte teljesen elzáródik a külvilágtól."],
      ro: [
        "Valea Valbonei este adesea numită perla Alpilor Albanezi.",
        "Râul Valbona are o culoare turcoaz cristalină impresionantă pe tot parcursul său.",
        "Traseul montan Valbona-Theth este una dintre cele mai populare drumeții.",
        "Tradițiile montane și ospitalitatea locală sunt păstrate cu sfințenie aici."
      ],
      en: [
        "The Valbona River is famous for its intense turquoise color, which remains crystal clear even during the spring snowmelt.",
        "The valley is part of the 'Peaks of the Balkans' cross-border hiking trail that connects Albania, Kosovo, and Montenegro.",
        "Many of the traditional guesthouses in Valbona are converted 'kulla' towers that were once used for defense.",
        "The region is home to rare wildlife, including brown bears, wolves, and the elusive Balkan lynx."
      ]
    },
    type: "landmark",
    coords: [19.8920, 42.4410],
    parent: "AL-002",
    facts: {
      de: ["Wandermeldorado.", "Wilde Flusslandschaften.", "Traditionelle Berggasthöfe."],
      hu: ["Túrázók paradicsoma.", "Vadvízi tájak.", "Hagyományos hegyi vendégházak."],
      ro: ["Paradisul drumețiilor.", "Peisaje fluviale sălbatice.", "Pensiuni montane tradiționale."],
      en: ["Hiking paradise.", "Wild river landscapes.", "Traditional mountain guesthouses."]
    }
  },
  {
    id: "nat-blue-eye",
    name: { de: "Das Blaue Auge", hu: "Kék Szem-forrás", ro: "Ochiul Albastru", en: "The Blue Eye" },
    description: { de: "Karstquelle", hu: "Karsztforrás", ro: "Izvor carstic", en: "Karst spring" },
    descriptionAdvanced: {
      de: "Eine faszinierende tiefblaue Wasserquelle in der Nähe von Saranda.",
      hu: "A Kék Szem-forrás (Syri i Kaltër) egy lenyűgöző természeti jelenség és geológiai csoda Saranda városa közelében. A forrás egy mélykék vizű tavat alkot, amely egy karsztbarlangból tör fel több mint 50 méteres mélységből a felszínre. Nevét onnan kapta, hogy a forrás sötétkék közepe úgy néz ki, mint egy szem pupillája, amelyet világosabb türkizkék víz vesz körül, mint az írisz. A víz hihetetlenül tiszta, és az év során állandó, hűvös, 10 Celsius-fokos hőmérsékletű marad. Sűrű növényzet és hatalmas tölgyfák veszik körül, népszerű kirándulóhely azok számára, akik meg akarják csodálni ezt a hipnotikus szépségű, vibráló színű vízi oázist.",
      ro: "Un izvor de apă de un albastru profund, fascinant, lângă Saranda.",
      en: "The Blue Eye (Syri i Kaltër) is a mesmerizing natural spring and a geological marvel located near the city of Saranda. The spring forms a deep pool of strikingly blue water that bubbles up from a karst cave more than 50 meters below the surface. Its name comes from the way the deep blue center of the spring resembles the pupil of an eye, surrounded by a ring of lighter turquoise water like an iris. The water is incredibly clear and remains at a constant, chilly temperature of 10 degrees Celsius throughout the year. Surrounded by lush vegetation and old oak trees, it is a popular spot for visitors who come to admire its hypnotic beauty and vibrant colors."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A forrás mélységét eddig pontosan nem sikerült meghatározni, a búvárok több mint 50 méter mélyre merültek le benne.",
        "A víz hőmérséklete állandóan 10 Celsius-fok körül mozog, így a legforróbb nyári napokon is hűsítő élményt nyújt.",
        "A forrásból feltörő víz mennyisége elképesztő, másodpercenként körülbelül 18 400 liter víz tör a felszínre.",
        "A forrás nevét a víz közepén lévő sötétkék mélyedésről kapta, amely egy íriszre emlékeztet, körülötte pedig világosabb azúr színű.",
        "A Kék Szem-forrás környéke dús növényzetű természetvédelmi terület, ahol ritka páfrányfajok és vadon élő állatok találhatók."],
      ro: [
        "Debitul apei la izvorul Ochiul Albastru este de aproximativ 18 metri cubi pe secundă.",
        "Culoarea apei seamănă cu irisul unui ochi uman, având nuanțe intense de albastru.",
        "Adâncimea exactă a izvorului rămâne necunoscută, scafandrii ajungând la 50 de metri.",
        "Temperatura apei rămâne constantă la aproximativ 10 grade Celsius tot anul."
      ],
      en: [
        "The exact depth of the Blue Eye remains unknown; divers have reached 50 meters, but the spring goes much deeper.",
        "The spring discharges around 18 cubic meters of water per second, creating a powerful river that flows toward the sea.",
        "Legend has it that a dragon once lived in the spring and was defeated by a local hero, creating the blue 'eye'.",
        "During the communist era, the Blue Eye was a restricted area reserved only for high-ranking government officials."
      ]
    },
    type: "landmark",
    coords: [20.1923, 39.9234],
    parent: "AL-006",
    facts: {
      de: ["Über 50 Meter tief.", "Konstante 10 Grad Celsius.", "Saphirblaue Farbe."],
      hu: ["Több mint 50 méter mély.", "Állandó 10 Celsius-fok.", "Zafírkék szín."],
      ro: ["Peste 50 de metri adâncime.", "Constant 10 grade Celsius.", "Culoare de safir."],
      en: ["Over 50 meters deep.", "Constant 10 degrees Celsius.", "Sapphire blue color."]
    }
  },
  {
    id: "nat-llogara",
    name: { de: "Llogara-Pass", hu: "Llogara-hágó", ro: "Pasul Llogara", en: "Llogara Pass" },
    description: { de: "Gebirgspass zur Riviera", hu: "Hágó a riviérára", ro: "Pas montan spre rivieră", en: "Mountain pass to the Riviera" },
    descriptionAdvanced: {
      de: "Ein Nationalpark mit atemberaubendem Blick auf das Ionische Meer.",
      hu: "A Llogara-hágó egy látványos hegyi hágó, amely az albán riviéra kapujaként szolgál, és a Földközi-tenger egyik legdrámaibb partmenti kilátását nyújtja. Több mint 1000 méteres magasságban a hágóról belátni a türkizkék Jón-tengert és a távoli Korfu szigetét, miközben az út hajtűkanyarokkal kanyarog lefelé. A környező Llogara Nemzeti Park sűrű fenyő- és fenyőerdője hűvös hegyi menedéket nyújt a közeli strandok forrósága után. A hágó teteje a siklóernyősök kedvelt starthelye, akik innen indulnak repülni a tengerparti sziklák felett. A hegyi levegő és a tengeri panoráma kombinációja felejthetetlen élményt nyújt minden dél-albániai utazás során.",
      ro: "Un parc național cu o vedere uluitoare spre Marea Ionică.",
      en: "The Llogara Pass is a spectacular mountain pass that serves as the gateway to the Albanian Riviera, offering some of the most dramatic coastal views in the Mediterranean. At an elevation of over 1,000 meters, the pass overlooks the turquoise Ionian Sea and the distant island of Corfu, with the road winding down in a series of hair-raising hairpin turns. The surrounding Llogara National Park is a lush forest of pine and fir trees, providing a cool mountain refuge just minutes away from the sunny beaches. It is a favorite spot for paragliders who launch from its heights to glide over the coastal cliffs. The combination of mountain air and sea views makes Llogara a unique and unforgettable stop on any trip to southern Albania."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Llogara-hágó az a pont, ahol az Adriai- és a Jón-tenger látványa egyesül, lenyűgöző panorámát nyújtva az utazóknak.",
        "Julius Caesar a polgárháború idején ezen a hágón kelt át seregeivel, hogy megtámadja Pompeius erőit Palaeste mellett.",
        "A hágó környékén található „Zászló-fenyő” egy különleges fa, amelyet a szél formált az albán zászló sasára emlékeztető alakra.",
        "A Llogara Nemzeti Parkban számos ritka állatfaj él, köztük az európai őz és a szirti sas.",
        "A hágó tetejéről induló siklóernyősök Saranda és Dhërmi irányába repülhetnek a tenger felett."],
      ro: [
        "Pasul Llogara se află la o altitudine de 1027 de metri deasupra nivelului mării.",
        "Se spune că Iulius Cezar a traversat acest pas în campania sa împotriva lui Pompei.",
        "Pinul Steag este un monument al naturii cu o formă ciudată datorată vântului.",
        "Zona este un punct de lansare renumit pentru pasionații de parapantă."
      ],
      en: [
        "Julius Caesar is said to have crossed the Llogara Pass in 48 BC while pursuing his rival Pompey during the Roman Civil War.",
        "The 'Flag Pine' (Pisha Flamur) is a famous tree in the park that has been shaped by the wind to resemble the Albanian eagle.",
        "The pass marks the geographical divide between the Adriatic Sea to the north and the Ionian Sea to the south.",
        "Llogara is one of the best places in Albania for paragliding, with landing spots on the beautiful beaches of Palasa and Dhërmi."
      ]
    },
    type: "landmark",
    coords: [19.5854, 40.1983],
    parent: "AL-006",
    facts: {
      de: ["Über 1000 Meter Höhe.", "Blick auf Korfu.", "Gleitschirmflieger-Hotspot."],
      hu: ["Több mint 1000 méter magasan.", "Kilátás Korfura.", "Siklóernyős központ."],
      ro: ["Peste 1000 de metri altitudine.", "Vedere spre Corfu.", "Loc preferat de parapantiști."],
      en: ["Over 1000 meters high.", "View of Corfu.", "Paragliding hotspot."]
    }
  },
  {
    id: "nat-osum-canyon",
    name: { de: "Osum-Canyon", hu: "Osum-kanyon", ro: "Canionul Osum", en: "Osum Canyon" },
    description: { de: "Albaniens Grand Canyon", hu: "Albánia Grand Canyonja", ro: "Grand Canyon al Albaniei", en: "Albania's Grand Canyon" },
    descriptionAdvanced: {
      de: "Eine spektakuläre Schlucht im Süden Albaniens.",
      hu: "Az Osum-kanyont gyakran „Albánia Grand Canyonjának” nevezik, amely egy látványos, 26 kilométer hosszú szurdok a déli felvidéken. Függőleges sziklafalai helyenként a 450 méteres magasságot is elérik, falairól dús növényzet és számos vízesés zúdul az alatta kanyargó folyóba. A kanyon a vadvízi evezés és kajakozás egyik elsőszámú helyszíne, különösen tavasszal, amikor a vízállás magas és a táj a legdrámaibb arcát mutatja. Egyik leghíresebb szakasza az „Ördög kapuja”, egy keskeny átjáró, ahol a sziklák majdnem összeérnek. A kanyon felfedezése izgalmas kalandot ígér Albánia egyik legimpozánsabb természeti képződményében.",
      ro: "Un canion spectaculos în sudul Albaniei.",
      en: "The Osum Canyon is often called the 'Grand Canyon of Albania,' a spectacular 26-kilometer-long gorge carved into the limestone of the southern highlands. Its vertical walls reach heights of up to 450 meters and are draped with lush vegetation and numerous waterfalls that cascade into the river below. The canyon is a premier destination for rafting and kayaking, especially in the spring when the water levels are high and the scenery is at its most dramatic. One of its most famous sections is the 'Gate of the Devil,' a narrow passage where the cliffs nearly touch. Exploring the canyon offers a thrilling adventure through one of Albania's most impressive and powerful natural landscapes."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Az Osum-kanyon Albánia egyik leglátványosabb természeti képződménye, amelynek falai helyenként a 150 méteres magasságot is elérik.",
        "A kanyon hossza körülbelül 26 kilométer, és tavasszal, a hóolvadás után a legalkalmasabb a vadvízi evezésre.",
        "A szurdokvölgyben nyolc nagy vízesés található, amelyek közül a leghíresebb a „Menyasszony-fátyol” nevet viseli.",
        "A kanyon különleges mikroklímája miatt a falakon dús növényzet és ritka vadvirágok telepedtek meg.",
        "A helyi legendák szerint a kanyont egy óriási kígyó vágta a sziklába, amikor a hegyek között menekült."],
      ro: [
        "Canionul Osum are o lungime de 26 de kilometri și pereți de până la 450 de metri.",
        "Există opt cascade spectaculoase de-a lungul traseului prin canion.",
        "Poarta Diavolului este una dintre cele mai înguste și dramatice porțiuni.",
        "Legendele locale îl asociază pe sfântul Abaz Aliu cu formarea canionului."
      ],
      en: [
        "There are eight major waterfalls in the canyon, some of which are only accessible by boat or by hiking through the riverbed.",
        "Local legends say the canyon was formed when a giant saint struck the mountain with his sword to create a path for his followers.",
        "The canyon features several unusual rock formations, including one that resembles a 'Bride' in a traditional wedding dress.",
        "The best time for rafting is between March and June, when the melting snow from Mount Tomorr fills the Osum River."
      ]
    },
    type: "landmark",
    coords: [20.2520, 40.4851],
    parent: "AL-012",
    facts: {
      de: ["Rafting-Möglichkeit.", "Hohe Felswände.", "Zahlreiche Wasserfälle."],
      hu: ["Rafting lehetőség.", "Magas sziklafalak.", "Számos vízesés."],
      ro: ["Posibilitate de rafting.", "Pereți de stâncă înalți.", "Numeroase cascade."],
      en: ["Rafting opportunity.", "High rock walls.", "Numerous waterfalls."]
    }
  },
  {
    id: "nat-korab",
    name: { de: "Berg Korab", hu: "Korab-hegy", ro: "Muntele Korab", en: "Mount Korab" },
    description: { de: "Höchster Berg", hu: "Legmagasabb hegy", ro: "Cel mai înalt munte", en: "Highest mountain" },
    descriptionAdvanced: {
      de: "Der höchste Punkt Albaniens an der Grenze zu Nordmazedonien.",
      hu: "A Korab-hegy Albánia és Észak-Macedónia legmagasabb csúcsa, amely 2764 méteres magasságával mindkét ország büszkesége. A határon fekvő hegyvonulatot éles mészkőcsúcsok, mély gleccsertavak és hatalmas alpesi rétek jellemzik. A csúcsra vezető túra kihívást jelentő, de hálás feladat, ahonnan tiszta időben egészen az Adriai-tengerig el lehet látni. A hegy számos ritka növény- és állatfaj otthona, lejtőin pedig még ma is láthatók a nomád pásztorok, akik nyaranta ide hajtják nyájaikat legelni. A Korab-hegy a balkáni felföld vad és érintetlen szépségének szimbóluma, amely távol esik a tömegturizmustól.",
      ro: "Cel mai înalt punct din Albania la granița cu Macedonia de Nord.",
      en: "Mount Korab is the highest peak in both Albania and North Macedonia, standing at an impressive 2,764 meters above sea level. Located on the border between the two countries, it is part of a rugged mountain range characterized by sharp limestone peaks, deep glacial lakes, and vast alpine meadows. The climb to the summit is a challenging but rewarding experience, offering panoramic views that on clear days can stretch as far as the Adriatic Sea. The mountain is home to a variety of rare flora and fauna, and its slopes are still used by nomadic shepherds who bring their flocks to graze during the summer. Mount Korab is a symbol of the wild and untamed beauty of the Balkan highlands."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Korab-hegy Albánia és Észak-Macedónia legmagasabb pontja, így mindkét ország számára kiemelt jelentőséggel bír.",
        "A hegy csúcsa az év nagy részében hóval borított, és a legalkalmasabb időszak a megmászására júliustól szeptemberig tart.",
        "A hegy oldalai meredek sziklafalakból és gleccservölgyekből állnak, amelyek egyedülálló alpesi tájat alkotnak.",
        "A Korab-hegység területén található Albánia legmagasabb vízesése, a Korab-vízesés, amely több mint 130 méter magas.",
        "A túrázók gyakran találkozhatnak a környéken legelésző birkanyájakkal és a hagyományos pásztorkunyhókkal."],
      ro: [
        "Vârful Korab este cel mai înalt punct din Albania, având 2764 de metri.",
        "Muntele prezintă numeroase fenomene carstice și formațiuni geologice unice.",
        "Drumețiile de vară oferă peisaje alpine ce rivalizează cu cele din Europa Centrală.",
        "Păstorii nomazi încă își aduc turmele pe pășunile înalte ale muntelui."
      ],
      en: [
        "Mount Korab is one of only two peaks in Europe that is the highest point for two different countries simultaneously.",
        "The mountain features a spectacular waterfall on the North Macedonian side, which is the highest in the Balkans at 138 meters.",
        "The ascent from the Albanian side usually starts from the village of Radomirë and takes about 4 to 5 hours to reach the summit.",
        "During the summer, the slopes of Korab are covered in a colorful carpet of rare alpine flowers, including several endemic species."
      ]
    },
    type: "mountain",
    coords: [20.5469, 41.7903],
    parent: "AL-001",
    facts: {
      de: ["2764 Meter hoch.", "Grenzberg.", "Herausfordernde Wanderung."],
      hu: ["2764 méter magas.", "Határhegy.", "Kihívást jelentő túra."],
      ro: ["2764 metri înălțime.", "Munte de graniță.", "Drumeție solicitantă."],
      en: ["2764 meters high.", "Border mountain.", "Challenging hike."]
    }
  },
  {
    id: "nat-theth",
    name: { de: "Theth Nationalpark", hu: "Thethi Nemzeti Park", ro: "Parcul Național Theth", en: "Theth National Park" },
    description: { de: "Herz der Alpen", hu: "Az Alpok szíve", ro: "Inima Alpilor", en: "Heart of the Alps" },
    descriptionAdvanced: {
      de: "Ein unberührtes Bergdorf und Nationalpark im Norden.",
      hu: "A Thethi Nemzeti Park az Albán-Alpok koronaékszere, egy elszigetelt és lélegzetelállító völgy, amelyet az ország legmagasabb és legcsipkézettebb csúcsai veszik körül. Ez az érintetlen hegyi paradicsom híres hagyományos, fatornyos kőházairól, kristálytiszta folyójáról és az egyedülálló „vérbosszú-toronyról”, amely az ősi albán törvénykönyv, a Kanun emlékeit őrzi. A völgy olyan természeti csodáknak ad otthont, mint a Grunas-vízesés és a Kapre kék szeme nevű forrás. Theth bepillantást enged egy olyan életmódba, amely évszázadok óta változatlan, és ahol a hegyi vendégszeretet szent kötelesség. Ez a kiindulópontja a Balkán legikonikusabb túraútvonalainak is.",
      ro: "Un sat montan virgin și parc național în nord.",
      en: "Theth National Park is the crown jewel of the Albanian Alps, a remote and breathtaking valley surrounded by some of the highest and most jagged peaks in the country. This untouched mountain paradise is famous for its traditional stone houses with wooden roofs, its crystal-clear river, and the unique 'Lock-in Tower' that tells the story of the ancient Kanun code of honor. The valley is home to spectacular natural wonders like the Grunas Waterfall and the Blue Eye of Kapre, a stunning mountain spring. Theth offers a glimpse into a way of life that has remained unchanged for centuries, where mountain hospitality is a way of life. It is the starting point for some of the most iconic hiking trails in the Balkans."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Theth faluja híres a „kulla”-ról, azaz a vérbosszú elől menedéket nyújtó toronyházról, amely ma múzeumként működik.",
        "A Grunas-vízesés egy 30 méter magas, lenyűgöző vízzuhatag, amely rövid túrával érhető el a faluból.",
        "Theth környékén található a „Kék Szem” (Syri i Kaltër) nevű hegyi forrás, amely nem tévesztendő össze a Saranda közelivel.",
        "A nemzeti park területén még mindig élnek farkasok, barnamedvék és zergék a sűrű bükkerdőkben.",
        "A Thethi katolikus templom a falu közepén a környék egyik legszebb és legnyugodtabb épülete."],
      ro: [
        "Turnul de izolare din Theth amintește de vechile tradiții ale codului Kanun.",
        "Cascada Grunas este un monument al naturii cu o cădere de apă de 30 de metri.",
        "Satul rămâne adesea izolat pe timp de iarnă din cauza zăpezilor abundente.",
        "Biserica din Theth este una dintre cele mai fotogenice structuri din Alpi."
      ],
      en: [
        "The 'Lock-in Tower' (Kulla e Ngujimit) was used by men involved in blood feuds to seek protection from their pursuers.",
        "The Grunas Waterfall is a 30-meter-high cascade that is designated as a national monument for its extraordinary beauty.",
        "Theth was declared a National Park in 1966 and remains one of the most pristine and protected areas in Albania.",
        "The village church in Theth, built in 1892, is one of the most photographed and iconic structures in the Albanian mountains."
      ]
    },
    type: "landmark",
    coords: [19.7822, 42.3986],
    parent: "AL-007",
    facts: {
      de: ["Traditionelle Steinhäuser.", "Wasserfall von Grunas.", "Isolation in den Bergen."],
      hu: ["Hagyományos kőházak.", "Grunas-vízesés.", "Hegyi elszigeteltség."],
      ro: ["Case tradiționale de piatră.", "Cascada Grunas.", "Izolare în munți."],
      en: ["Traditional stone houses.", "Grunas Waterfall.", "Mountain isolation."]
    }
  },
  {
    id: "nat-dajti",
    name: { de: "Berg Dajti", hu: "Dajti-hegy", ro: "Muntele Dajti", en: "Mount Dajti" },
    description: { de: "Hausberg von Tirana", hu: "Tirana házhegye", ro: "Muntele local al Tiranei", en: "Tirana's backyard mountain" },
    descriptionAdvanced: {
      de: "Ein beliebtes Ausflugsziel mit Seilbahn in der Nähe der Hauptstadt.",
      hu: "A Dajti-hegy Tirana kedvelt „hátsó kertje”, amely zöld menedéket nyújt mindössze néhány kilométerre a nyüzsgő városközponttól. A legtöbb látogató a Dajti Ekspres felvonóval jut fel a csúcsra, amely 15 perces útja során páratlan kilátást kínál a fővárosra, a környező dombokra és tiszta időben még az Adriai-tengerer is. A hegy egy nemzeti park része, dús tölgy- és bükkerdői olyan vadon élő állatoknak adnak otthont, mint a barnamedvék és vaddisznók. A csúcson éttermek, túraútvonalak és olyan sportolási lehetőségek várják a látogatókat, mint a siklóernyőzés vagy a hegyi kerékpározás. Kiváló hely Albánia természeti szépségeinek élvezetéhez a főváros kényelmének közelében.",
      ro: "O destinație de excursie populară cu telecabină lângă capitală.",
      en: "Mount Dajti is the beloved 'backyard mountain' of Tirana, providing a fresh and green escape just a few kilometers from the bustling city center. Most visitors reach the summit via the Dajti Ekspres, a 15-minute cable car ride that offers spectacular views of the capital, the surrounding hills, and even the Adriatic Sea on clear days. The mountain is part of a national park that features dense forests of oak and beech, home to wildlife like brown bears and wild boars. At the top, there are several restaurants, hiking trails, and activities like paragliding and mountain biking. Mount Dajti is the perfect place to experience Albania's natural beauty without leaving the convenience of the capital."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Dajti-hegyre közlekedő Dajti Ekspres felvonó a leghosszabb ilyen jellegű pálya a Balkánon, 15 perc alatt visz fel a csúcsra.",
        "A hegytetőről nemcsak Tirana városa látható, hanem tiszta időben az Adriai-tengerig is el lehet látni.",
        "A hegy Albánia egyik legrégebbi nemzeti parkja, amelyet már 1966-ban védetté nyilvánítottak.",
        "A Dajti-hegyen számos kikapcsolódási lehetőség várja a látogatókat, beleértve a kalandparkot, lovaglást és túraútvonalakat.",
        "Télen a tiranaiak kedvenc helye a hegy, ahol élvezhetik a havat, miközben a városban gyakran csak eső esik."],
      ro: [
        "Telecabina Dajti Ekspres este cea mai lungă de acest tip din Balcani.",
        "Muntele este considerat „balconul Tiranei” datorită vederii asupra capitalei.",
        "Parcul Național găzduiește o biodiversitate bogată, inclusiv urși și lupi.",
        "Este refugiul preferat al locuitorilor din Tirană pentru a scăpa de căldura verii."
      ],
      en: [
        "The Dajti Ekspres is the longest cable car in the Balkans, stretching for about 4.6 kilometers from the city to the mountain.",
        "In the winter, Mount Dajti is often covered in snow, providing a rare opportunity for Tirana's residents to enjoy winter sports.",
        "The mountain has been inhabited since ancient times, with ruins of a prehistoric castle found near its summit.",
        "The Dajti National Park covers over 3,300 hectares and is a vital 'green lung' for the rapidly growing capital city."
      ]
    },
    type: "mountain",
    coords: [19.9294, 41.3653],
    parent: "AL-009",
    facts: {
      de: ["Dajti Ekspres Seilbahn.", "Blick auf Tirana.", "Nationalpark-Status."],
      hu: ["Dajti Ekspres felvonó.", "Kilátás Tiranára.", "Nemzeti parki státusz."],
      ro: ["Telecabina Dajti Ekspres.", "Vedere asupra Tiranei.", "Statut de parc național."],
      en: ["Dajti Ekspres cable car.", "View of Tirana.", "National park status."]
    }
  },
  {
    id: "nat-koman",
    name: { de: "Koman-Stausee", hu: "Komani-tó", ro: "Lacul Koman", en: "Lake Koman" },
    description: { de: "Fjordähnliche Landschaft", hu: "Fjordhoz hasonló táj", ro: "Peisaj asemănător fiordurilor", en: "Fjord-like landscape" },
    descriptionAdvanced: {
      de: "Ein Stausee mit einer der spektakulärsten Fährfahrten Europas.",
      hu: "A Komani-tó egy lenyűgöző türkizkék víztározó Észak-Albániában, amelyet sokan a világ egyik legszebb hajóútjaként tartanak számon. A tó a Drin folyó felduzzasztásával jött létre, mély és keskeny kanyonokon kanyarog át, ahol a meredek sziklafalak több száz méter magasra emelkednek. A tavon közlekedő komp az egyetlen módja annak, hogy elérjük a régió legeldugottabb hegyi falvait, elhaladva apró gazdaságok és függőleges sziklák mellett. A tájat gyakran hasonlítják a norvég fjordokhoz, ahol a smaragdzöld víz visszatükrözi az Albán-Alpok drámai csúcsait. Ez egy békés és ámulatba ejtő élmény, amely bemutatja az albán táj vad és fenséges arcát.",
      ro: "Un lac de acumulare cu una dintre cele mai spectaculoase călătorii cu feribotul din Europa.",
      en: "Lake Koman is a stunning turquoise reservoir in northern Albania, often described as one of the most beautiful ferry journeys in the world. The lake was created by a hydroelectric dam on the Drin River, winding its way through deep, narrow canyons with sheer rock walls that rise hundreds of meters into the sky. The ferry ride across the lake is the only way to reach some of the most remote mountain communities in the region, passing by small farms and vertical cliffs. The scenery is often compared to the Norwegian fjords, with the emerald water reflecting the dramatic peaks of the Albanian Alps. It is a peaceful and awe-inspiring experience that showcases the wild and majestic side of the country's landscape."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Koman-tó valójában egy mesterséges víztározó, amely a Drin folyó felduzzasztásával jött létre az 1980-as években.",
        "A rajta közlekedő kompjáratot gyakran hasonlítják a norvég fjordokhoz a meredek, több száz méter magas sziklafalak miatt.",
        "A kompút az egyetlen módja annak, hogy sok távoli hegyi falu lakói elérjék a legközelebbi várost.",
        "A tó vize fontos szerepet játszik Albánia áramellátásában a Koman vízerőmű gátján keresztül.",
        "A hajóút során a látogatók érintetlen tájakat és apró, csak vízről megközelíthető gazdaságokat láthatnak."],
      ro: [
        "Peisajul lacului Koman este adesea comparat cu fiordurile norvegiene.",
        "Barajul Fierza a fost construit pentru a produce energie hidroelectrică esențială.",
        "Traversarea cu feribotul trece prin canioane foarte înguste și spectaculoase.",
        "Lacul oferă singura cale de acces către multe sate izolate din munți."
      ],
      en: [
        "The ferry journey between Koman and Fierza takes about 2.5 to 3 hours and covers 30 kilometers of spectacular canyon scenery.",
        "The Fierza dam, which created the lake, is one of the largest of its kind in Europe and a major source of electricity for Albania.",
        "The lake is incredibly deep in some parts, reaching over 90 meters, and its water remains cold throughout the year.",
        "Small passenger boats still serve as 'water buses' for the locals who live in the roadless villages along the lake's shores."
      ]
    },
    type: "landmark",
    coords: [19.8272, 42.1075],
    parent: "AL-002",
    facts: {
      de: ["Steile Felswände.", "Wichtig für Wasserkraft.", "Bootstouren."],
      hu: ["Meredek sziklafalak.", "Fontos a vízerőművek számára.", "Hajótúrák."],
      ro: ["Pereți de stâncă abrupți.", "Important pentru hidroenergie.", "Excursii cu barca."],
      en: ["Steep rock walls.", "Important for hydropower.", "Boat tours."]
    }
  },
  {
    id: "nat-karavasta",
    name: { de: "Karavasta-Lagune", hu: "Karavasta-lagúna", ro: "Laguna Karavasta", en: "Karavasta Lagoon" },
    description: { de: "Größte Lagune", hu: "A legnagyobb lagúna", ro: "Cea mai mare lagună", en: "Largest lagoon" },
    descriptionAdvanced: {
      de: "Ein bedeutendes Feuchtgebiet an der Adriaküste.",
      hu: "A Karavasta-lagúna Albánia legnagyobb és legfontosabb vizes élőhelye, amely az Adriai-tenger partján fekvő Divjaka-Karavasta Nemzeti Park területén található. Ez a kiterjedt ökoszisztéma sekély vizekből, homokdűnékből és egyedülálló mediterrán fenyőerdőkből áll, amely madarak ezreinek nyújt létfontosságú élőhelyet. A lagúna leginkább a veszélyeztetett borzas pelikán költőhelyeként híres, itt található Európa egyik legnagyobb kolóniája. A látogatók csónakkal fedezhetik fel a vizet, madármegfigyelő tornyokból nézhetik a ritka fajokat, vagy sétálhatnak az ősi fenyvesben. Karavasta a nyugalom és a biológiai sokféleség szentélye a partvidéken.",
      ro: "O zonă umedă importantă de pe coasta Adriaticii.",
      en: "The Karavasta Lagoon is the largest and most ecologically significant lagoon in Albania, located within the Divjaka-Karavasta National Park on the Adriatic coast. It is a sprawling wetland of shallow waters, sand dunes, and a unique forest of Mediterranean pines that provides a vital habitat for thousands of birds. The lagoon is most famous as the nesting ground of the endangered Dalmatian pelican, hosting one of the largest colonies in Europe. Visitors can explore the lagoon by boat, watch rare birds from observation towers, or walk through the ancient pine forest. Karavasta is a sanctuary of peace and biodiversity, offering a stark contrast to the rugged mountains that dominate much of the country."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Karavasta-lagúna a legnagyobb ilyen jellegű vizes élőhely Albániában, területe meghaladja a 4000 hektárt.",
        "Itt fészkel a veszélyeztetett borzas pelikán Albánia teljes állományának nagy része.",
        "A lagúnát az Adriai-tengertől egy dús fenyőerdőkkel borított homokturzás választja el.",
        "A terület a nemzetközi jelentőségű vadvizek listáján, a Ramsari jegyzékben is szerepel.",
        "A lagúna sekély vize ideális táplálkozóhely számos gázlómadár, köztük a flamingók számára is."],
      ro: [
        "Laguna Karavasta este cea mai mare și mai importantă lagună din Albania.",
        "Pădurea de pini Divjaka înconjoară laguna, creând un ecosistem unic.",
        "Aproximativ 5% din populația mondială de pelicani creți cuibărește aici.",
        "Situl este protejat prin Convenția Ramsar datorită importanței sale ecologice."
      ],
      en: [
        "The Karavasta Lagoon covers an area of about 43 square kilometers and is separated from the sea by a narrow strip of sand.",
        "It is home to about 5% of the world's population of the rare and majestic Dalmatian pelican.",
        "The 'Divjaka Pine' forest that borders the lagoon features trees that are over 300 years old and have a unique umbrella shape.",
        "The area has been a Ramsar site of international importance since 1994, protecting its delicate and rich ecosystem."
      ]
    },
    type: "landmark",
    coords: [19.4975, 40.9231],
    parent: "AL-008",
    facts: {
      de: ["Heimat krausköpfiger Pelikane.", "Nationalpark Divjaka-Karavasta.", "Große Artenvielfalt."],
      hu: ["Borzas pelikánok otthona.", "Divjaka-Karavasta Nemzeti Park.", "Nagy biológiai sokféleség."],
      ro: ["Habitat al pelicanilor creți.", "Parcul Național Divjaka-Karavasta.", "Biodiversitate mare."],
      en: ["Home to Dalmatian pelicans.", "Divjaka-Karavasta National Park.", "Great biodiversity."]
    }
  },
  {
    id: "nat-tomorr",
    name: { de: "Berg Tomorr", hu: "Tomorr-hegy", ro: "Muntele Tomorr", en: "Mount Tomorr" },
    description: { de: "Heiliger Berg", hu: "Szent hegy", ro: "Muntele sfânt", en: "Holy mountain" },
    descriptionAdvanced: {
      de: "Ein imposanter Bergmassiv in der Nähe von Berat, ein heiliger Ort für Bektaschi.",
      hu: "A Tomorr-hegy egy fenséges és szent hegytömb Dél-Albániában, amely Berat városa felett uralkodik a tájon. Mind a bektasi közösség, mind a helyi lakosság szent helyként tiszteli, és úgy tartják, hogy itt lakik a „Hegyek Atyja”. Minden év augusztusában zarándokok ezrei mássznak fel a csúcsra egy vallási fesztivál alkalmából, így az ország egyik legfontosabb szellemi központja. A hegy egy nemzeti park része, amely változatos tájakat kínál a sűrű fenyvesektől a kopár, sziklás csúcsokig, amelyeket az év nagy részében hó borít. A Tomorr-hegy az áhítat és a spiritualitás érzését nyújtja, kombinálva a tengerig érő lenyűgöző kilátással.",
      ro: "Un masiv muntos impunător lângă Berat, un loc sfânt pentru bectași.",
      en: "Mount Tomorr is a majestic and sacred mountain mass in southern Albania, dominating the landscape around the city of Berat. It is considered a holy place by both the Bektashi community and local people, who believe it is the home of the 'Father of the Mountains.' Every August, thousands of pilgrims climb to the summit for a religious festival, making it one of the most important spiritual sites in the country. The mountain is part of a national park that offers diverse landscapes, from dense pine forests to barren, rocky peaks that remain snow-capped for much of the year. Mount Tomorr provides a powerful sense of awe and spirituality, combined with breathtaking views that reach all the way to the sea."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Tomorr-hegy az albán néphit szerint az istenek lakhelye, és „Baba Tomorr”-ként, azaz Tomorr apóként tisztelik.",
        "Minden év augusztusában több ezer bektasi zarándok mászik fel a hegyre, hogy megemlékezzenek Abas Ali szentről.",
        "A hegytetőn található bektasi teke (szentély) az ország egyik legfontosabb vallási helyszíne.",
        "A hegy környéke nemzeti park, ahol különleges növényfajok és vadon élő ragadozó madarak találtak menedéket.",
        "A hegy meredek lejtői és karsztformái miatt a túrázás itt komoly fizikai felkészültséget igényel."],
      ro: [
        "Muntele Tomorr este considerat Olimpul Albaniei în mitologia populară.",
        "Pelerinajul anual dedicat lui Abaz Aliu atrage mii de credincioși în august.",
        "Muntele găzduiește o diversitate botanică remarcabilă cu multe specii rare.",
        "Legenda gigantului Tomorr spune că acesta veghează asupra oraşului Berat."
      ],
      en: [
        "Mount Tomorr stands at 2,416 meters and is often referred to as the 'Olympus of Albania' in local folklore and poetry.",
        "The Bektashi shrine of Abaz Aliu, located near the summit, is the center of the massive annual pilgrimage in late August.",
        "According to legend, the mountain was formed by a giant named Tomorr who fought a duel with another giant over a beautiful maiden.",
        "The national park is home to many rare plant species and provides a habitat for large predators like wolves and bears."
      ]
    },
    type: "mountain",
    coords: [20.1558, 40.6319],
    parent: "AL-012",
    facts: {
      de: ["Wallfahrtsort.", "Nationalpark.", "Blick über ganz Albanien."],
      hu: ["Zarándokhely.", "Nemzeti park.", "Kilátás egész Albániára."],
      ro: ["Loc de pelerinaj.", "Parc național.", "Vedere peste toată Albania."],
      en: ["Pilgrimage site.", "National park.", "View over all of Albania."]
    }
  }
];

export const albaniaAllPoi: POI[] = [
  albaniaCountry,
  ...albaniaCities,
  ...albaniaHistorical,
  ...albaniaNature
];
