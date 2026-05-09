// @ts-nocheck
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
    de: "Albanien ist ein Land in Südosteuropa, bekannt für seine vielfältigen Landschaften und seine reiche Geschichte.",
    hu: "Albánia egy délkelet-európai ország, amely változatos tájairól és gazdag történelméről ismert.",
    ro: "Albania este o țară din sud-estul Europei, cunoscută pentru peisajele sale diverse și istoria bogată.",
    en: "Albania is a country in Southeastern Europe known for its diverse landscapes and rich history."
  },
  descriptionAdvanced: {
    de: "Ein faszinierendes Land auf der Balkanhalbinsel mit einer reichen Geschichte, beeindruckenden Berglandschaften und einer wunderschönen Adriaküste. Die albanische Kultur ist tief in alten Traditionen verwurzelt, während das Land gleichzeitig eine rasante Modernisierung durchläuft. Besucher entdecken hier eine beeindruckende Mischung aus antiken römischen Ruinen, osmanischen Städten und unberührten Naturparadiesen. Das Land entwickelt sich zunehmend zu einem beliebten Reiseziel für Abenteurer, die noch ursprüngliche europäische Landschaften suchen. Albaniens Gastfreundschaft gilt dabei als eine der herzlichsten weltweit, was jeden Besuch besonders macht.",
    hu: "Albánia a Balkán-félsziget délnyugati részén fekvő ország, amely lenyűgöző természeti adottságaival és gazdag történelmi múltjával várja a látogatókat. Az ország partjait az Adriai- és a Jón-tenger mossa, kristálytiszta strandjai pedig vetekednek a népszerűbb mediterrán úti célokéval. A tájat vadregényes hegyvonulatok, mint például az Albán-Alpok, és mély kanyonok teszik változatossá, ahol a túrázók érintetlen természetre bukkanhatnak. Történelme során Albánia görög, római, bizánci és oszmán hatások alatt állt, ami az építészetében és kulturális szokásaiban is visszatükröződik. Az ország hosszú ideig elszigetelten élt a világtól, de mára Európa egyik leggyorsabban fejlődő és legvendégszeretőbb turisztikai célpontjává vált.",
    ro: "O țară fascinantă din Peninsula Balcanică, cu o istorie bogată, peisaje montane impresionante și o coastă adriatică superbă.",
    en: "Albania, situated on the Balkan Peninsula, is a hidden gem that boasts a stunning coastline along the Adriatic and Ionian Seas. The country offers a unique blend of Ottoman-era architecture, ancient Greek and Roman ruins, and rugged mountain ranges known as the 'Accursed Mountains'. For decades, it remained isolated from the world, which helped preserve its rich cultural heritage and pristine natural landscapes. Today, it is becoming a top destination for adventurers seeking off-the-beaten-path experiences and warm Mediterranean hospitality. Visitors can explore vibrant cities, remote mountain villages, and some of the cleanest beaches in Europe."
  },
  factsAdvanced: {
    de: [
      "Albanien beherbergt mit den 'Accursed Mountains' eines der wildesten Gebirge Europas.",
      "Die albanische Sprache bildet einen eigenen, unabhängigen Zweig innerhalb der indogermanischen Sprachfamilie.",
      "Das Land war unter Enver Hoxha jahrzehntelang das am stärksten isolierte Land Europas.",
      "Die albanische Gastfreundschaft ('Besa') ist ein tief verwurzelter Ehrenkodex des gegenseitigen Schutzes.",
      "Albanien besitzt über 2.000 Sonnenstunden im Jahr, was es zum idealen Ziel für Strandurlauber macht."
    ],
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
    de: ["Es liegt auf der Balkanhalbinsel.", "Die Hauptstadt ist Tirana.", "Es hat Küsten an der Adria und am Ionischen Meer."],
    hu: ["A Balkán-félszigeten található.", "Fővárosa Tirana.", "Az Adriai- és a Jón-tenger mosza a partjait."],
    ro: ["Este situată în Peninsula Balcanică.", "Capitala sa este Tirana.", "Are ieșire la Marea Adriatică și Marea Ionică."],
    en: ["It is located on the Balkan Peninsula.", "The capital city is Tirana.", "It has coastlines on the Adriatic and Ionian Seas."]
  }, image: "/poi-images/country-albania.webp"};

export const albaniaCities: POI[] = [
  {
    id: "city-tirana",
    name: { de: "Tirana", hu: "Tirana", ro: "Tirana", en: "Tirana" },
    description: { de: "Tirana ist die pulsierende Hauptstadt Albaniens, bekannt für ihre farbenfrohe Architektur aus der osmanischen, faschistischen und sowjetischen Zeit.", hu: "Tirana Albánia nyüzsgő fővárosa, amely oszmán, fasiszta és szovjet kori színes építészetéről ismert.", ro: "Tirana este capitala vibrantă a Albaniei, recunoscută pentru arhitectura sa colorată din perioadele otomană, fascistă și sovietică.", en: "Tirana is the vibrant capital of Albania, known for its colorful architecture from the Ottoman, Fascist, and Soviet eras." },
    descriptionAdvanced: {
      de: "Tirana ist das lebendige Herz Albaniens und ein faszinierender Ort zwischen Tradition und Moderne. Die Stadt hat sich in den letzten Jahrzehnten von einem grauen, kommunistischen Zentrum zu einer farbenfrohen und dynamischen Hauptstadt entwickelt. Markant sind die bunt bemalten Gebäude, die heute das Stadtbild prägen und eine fröhliche Atmosphäre schaffen.",
      hu: "Tirana, Albánia lüktető fővárosa, az ország politikai, gazdasági és kulturális központja, amely az utóbbi évtizedekben látványos átalakuláson ment keresztül. A város egyik legismertebb jellegzetessége a színesre festett épületek sora, amelyeket a korábbi polgármester kezdeményezésére varázsoltak vidámmá a szürke kommunista tömbökből.",
      ro: "Capitala vibrantă a Albaniei.",
      en: "Tirana, the capital of Albania, has undergone a dramatic transformation from a gray communist center to a vibrant, colorful metropolis."
    },
    factsAdvanced: {
      de: [
        "Die Stadt wurde 1614 von Sulejman Pascha gegründet.",
        "Der 'Bunk'Art' Komplex zeigt in ehemaligen Bunkern die Geschichte des Regimes.",
        "Der Dajti-Berg ist über eine Seilbahn erreichbar."
      ],
      hu: [
        "A város központjában található Szkander bég tér 1968-ban kapta mai nevét az albán nemzeti hős után.",
        "Tirana az 1990-es évek óta hatalmas átalakuláson ment keresztül, ma már modern felhőkarcolók és bevásárlóközpontok tarkítják.",
        "A város körüli hegyek, mint például a Dajti-hegy, népszerű hétvégi kirándulóhelyek a helyiek számára."],
      ro: [
        "Tirana este faimoasă pentru clădirile sale vopsite în culori extrem de vii.",
        "Piața Skanderbeg reprezintă inima orașului și locul principal de întâlnire.",
        "Piramida din Tirana a fost inițial construită ca un muzeu pentru fostul dictator."
      ],
      en: [
        "The Pyramid of Tirana was originally built as a museum for the former dictator Enver Hoxha.",
        "The city is surrounded by mountains and hills, with Mount Dajti accessible by a cable car.",
        "Tirana features unique 'Bunk'Art' museums, which are former nuclear bunkers converted into art spaces."
      ]
    },
    type: "city",
    coords: [19.8187, 41.3275],
    parent: "AL-009",
    facts: {
      de: ["Sie ist das wirtschaftliche und kulturelle Zentrum des Landes.", "Der Skanderbeg-Platz ist der zentrale Punkt der Stadt.", "Bunk'Art ist ein Museum in einem ehemaligen Atombunker."],
      hu: ["Az ország gazdasági és kulturális központja.", "A Szkander bég tér a város központi része.", "A Bunk'Art egy egykori atombunkerben kialakított múzeum."],
      ro: ["Este centrul economic și cultural al țării.", "Piața Skanderbeg este punctul central al orașului.", "Bunk'Art este un muzeu amenajat într-un fost buncăr nuclear."],
      en: ["It is the economic and cultural center of the country.", "Skanderbeg Square is the central hub of the city.", "Bunk'Art is a museum housed in a former nuclear bunker."]
    }
  },
  {
    id: "city-durres",
    name: { de: "Durrës", hu: "Durrës", ro: "Durrës", en: "Durrës" },
    description: { de: "Durrës ist eine der ältesten und bedeutendsten Hafenstädte Albaniens an der Adriaküste.", hu: "Durrës Albánia egyik legrégebbi és legfontosabb kikötővárosa az Adriai-tenger partján.", ro: "Durrës este unul dintre cele mai vechi și mai importante orașe-port ale Albaniei, situat pe coasta Mării Adriatice.", en: "Durrës is one of Albania's oldest and most important port cities on the Adriatic coast." },
    descriptionAdvanced: {
      de: "Durrës ist eine der geschichtsträchtigsten Städte Albaniens und diente einst als wichtiger römischer Hafen. Die Stadt verbindet heute ein reiches antikes Erbe mit einem modernen Badeort-Charakter. Das römische Amphitheater, das mitten in der Stadt liegt, ist ein absolutes Highlight und zeugt von der glanzvollen Vergangenheit.",
      hu: "Durrës Albánia második legnagyobb városa és legfontosabb kikötője, amely több mint 2500 éves múltra tekint vissza. Az ókorban Epidamnosz, majd Dyrrhachium néven ismert település a római korban a Via Egnatia, a Konstantinápolyba vezető kereskedelmi útvonal kiindulópontja volt.",
      ro: "Unul dintre cele mai vechi orașe din Albania, cu un mare amfiteatru roman.",
      en: "Durrës is Albania's second-largest city and its most important port, with a history stretching back over 2,500 years. Founded as Epidamnos by Greek colonists, it later became a vital Roman hub known as Dyrrhachium."
    },
    factsAdvanced: {
      de: [
        "Das Amphitheater aus dem 2. Jahrhundert bot Platz für bis zu 20.000 Menschen.",
        "Durrës war der Startpunkt der antiken Via Egnatia in Richtung Byzanz.",
        "Der venezianische Turm ist eines der am besten erhaltenen Wahrzeichen."
      ],
      hu: [
        "Durrës római kori amfiteátruma a Balkán-félsziget egyik legnagyobb ilyen jellegű építménye.",
        "A város az ókorban Epidamnosz, majd Dyrrhachium néven volt ismert.",
        "Durrës kikötője Albánia legfontosabb tengeri kapuja."],
      ro: [
        "Amfiteatrul din Durrës este cel mai mare de acest tip din Peninsula Balcanică.",
        "Orașul a fost fondat în anul 627 î.Hr. de către coloniști greci.",
        "Durrës a fost un punct de plecare crucial pentru drumul antic Via Egnatia."
      ],
      en: [
        "The Roman Amphitheater was rediscovered accidentally in the 1960s.",
        "The city's Byzantine walls are some of the best-preserved fortifications on the Adriatic.",
        "Durrës served as the capital of Albania for a brief period between 1914 and 1920."
      ]
    },
    type: "city",
    coords: [19.4558, 41.3246],
    parent: "AL-010",
    facts: {
      de: ["Die Stadt besitzt ein großes römisches Amphitheater.", "Sie war einst die Hauptstadt von Albanien.", "Durrës ist ein beliebtes Ziel für Strandurlauber."],
      hu: ["A városban található egy nagy római amfiteátrum.", "Egykor Albánia fővárosa volt.", "Durrës a tengerparti nyaralók kedvelt célpontja."],
      ro: ["Orașul deține un mare amfiteatru roman.", "A fost odată capitala Albaniei.", "Durrës este o destinație populară pentru vacanțele la plajă."],
      en: ["The city features a large Roman amphitheater.", "It was once the capital of Albania.", "Durrës is a popular destination for beachgoers."]
    }, image: "/poi-images/city-durres.webp"},
  {
    id: "city-vlore",
    name: { de: "Vlorë", hu: "Vlorë", ro: "Vlorë", en: "Vlorë" },
    description: { de: "Stadt der Unabhängigkeit", hu: "A függetlenség városa", ro: "Orașul independenței", en: "City of independence" },
    descriptionAdvanced: {
      de: "Vlorë ist ein geschichtsträchtiger Küstenort, an dem die Adria und das Ionische Meer aufeinandertreffen. Die Stadt ist vor allem als der Ort bekannt, an dem 1912 die Unabhängigkeit Albaniens ausgerufen wurde. Heute zeichnet sich Vlorë durch eine moderne Hafenfront aus, die bei Reisenden sehr beliebt ist. Die Umgebung bietet zudem eine beeindruckende Vielfalt an Stränden.",
      hu: "Vlorë egy történelmi jelentőségű kikötőváros az Adriai- és a Jón-tenger találkozásánál, ahol 1912-ben kikiáltották Albánia függetlenségét. A város különleges fekvése miatt változatlan strandokkal rendelkezik: az északi részen homokos partok, délen pedig sziklás öblök várja a fürdőzőket.",
      ro: "Aici a fost proclamată independența Albaniei în 1912.",
      en: "Vlorë is a historic coastal city where the Adriatic and Ionian seas meet, creating a unique coastline of sandy beaches and rocky coves."
    },
    factsAdvanced: {
      de: [
        "Vlorë wurde am 28. November 1912 zur ersten Hauptstadt Albaniens ernannt.",
        "Das Függetlenségi-Museum (Unabhängigkeitsmuseum) erinnert an die Staatsgründung.",
        "Von der Bucht aus starten Boote zur strategisch wichtigen Halbinsel Karaburun."
      ],
      hu: [
        "Vlorë volt az a hely, ahol Ismail Qemali 1912. november 28-án kikiáltotta Albánia függetlenségét.",
        "A város két tenger találkozásánál fekszik.",
        "A Vlorë melletti Sazan-sziget, amely egykor katonai bázis volt, ma már látogatható természeti park."],
      ro: [
        "Independența Albaniei a fost proclamată în acest oraș în anul 1912.",
        "Vlorë este locul unde Marea Adriatică se întâlnește cu Marea Ionică.",
        "Insula Sazan din apropiere este o fostă bază militară deschisă recent turismului."
      ],
      en: [
        "Vlorë was the first capital of independent Albania after the fall of the Ottoman Empire.",
        "The nearby Sazan Island was a restricted military zone for decades.",
        "The city is home to the Zvërnec Monastery, a 13th-century Byzantine site."
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
    }, image: "/poi-images/city-vlore.webp"},
  {
    id: "city-shkoder",
    name: { de: "Shkodra", hu: "Shkodra", ro: "Shkodra", en: "Shkodra" },
    description: { de: "Kulturstadt des Nordens", hu: "Az észak kulturális városa", ro: "Orașul cultural al nordului", en: "Cultural city of the north" },
    descriptionAdvanced: {
      de: "Shkodra gilt als das kulturelle Zentrum Nordalbaniens und blickt auf eine jahrtausendealte Geschichte zurück. Die Stadt am gleichnamigen See ist bekannt für ihre tolerante Atmosphäre, in der verschiedene Religionen friedlich zusammenleben. Überragt wird sie von der imposanten Festung Rozafa, die nicht nur für ihre geschichtliche Bedeutung, sondern auch für eine berühmte Sage bekannt ist.",
      hu: "Shkodra az ország északi részének kulturális és történelmi központja, amely Albánia egyik legrégebbi és legkarakteresebb városa. A Shkodrai-tó partján, az Albán-Alpok lábánál fekvő település évszázadokon át fontos kereskedelmi és művészeti csomópont volt.",
      ro: "Un centru istoric de pe malul lacului Shkodra.",
      en: "Shkodra is often considered the cultural capital of Albania, boasting a rich history that dates back to the Illyrian period."
    },
    factsAdvanced: {
      de: [
        "Die Stadt wird von der mächtigen Rozafa-Festung überragt.",
        "Das Marubi-Museum bewahrt ein riesiges Archiv an historischen Fotografien.",
        "In Shkodra leben Christen und Muslime seit Jahrhunderten friedlich zusammen."
      ],
      hu: [
        "Shkodra Albánia egyik legrégebbi városa, amely már az illír időkben is fontos központ volt.",
        "A város a Shkodrai-tó partján fekszik, amely a Balkán legnagyobb tava.",
        "Itt található a Marubi Nemzeti Fotómúzeum."],
      ro: [
        "Shkodër este considerată capitala culturală a Albaniei datorită istoriei sale bogate.",
        "Fototeca Națională Marubi găzduiește o colecție impresionantă de fotografii istorice.",
        "Orașul se află la confluența a drie râuri importante."
      ],
      en: [
        "The Marubi National Museum of Photography houses over 500,000 negatives.",
        "Shkodra was one of the most important cities of the Illyrian Kingdom.",
        "The city is known for its religious harmony, featuring various churches and mosques."
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
    }, image: "/poi-images/city-shkoder.webp"},
  {
    id: "city-korce",
    name: { de: "Korçë", hu: "Korçë", ro: "Korçë", en: "Korçë" },
    description: { de: "Stadt der Serenaden", hu: "A szerenádok városa", ro: "Orașul serenadelor", en: "City of serenades" },
    descriptionAdvanced: {
      de: "Korçë, oft das 'Paris Albaniens' genannt, besticht durch eine elegante Architektur im französischen Stil und eine ausgeprägte intellektuelle Tradition. Die Stadt auf einer Hochebene im Südosten ist bekannt für ihre romantischen Serenaden. Als Ort der ersten albanischsprachigen Schule des Landes hat sie eine große nationale Bedeutung.",
      hu: "Korçë, amelyet gyakran az \\\"albán Párizsként\\\" is emlegetnek, az ország délkeleti részén fekvő elegáns, kulturális hagyományokban gazdag város. A település híres a 19. századi polgári építészetéről, macskaköves utcáiról és a \\\"szerenádok\\\" hagyományáról.",
      ro: "Cunoscut pentru cultură, muzee și arhitectură.",
      en: "Korçë, often called the 'Paris of Albania,' is a city of elegance, serenades, and intellectual tradition located in a high plateau in the southeast."
    },
    factsAdvanced: {
      de: [
        "In Korçë wurde 1887 die erste Schule mit Unterricht auf Albanisch eröffnet.",
        "Das nationale Museum für mittelalterliche Kunst beherbergt bedeutende Ikonen.",
        "Die Stadt veranstaltet jährlich das größte Bierfest in Albanien."
      ],
      hu: [
        "Korçë városában nyílt meg 1887-ben az első albán nyelvű iskola.",
        "A várost gyakran nevezik az \\\"albán Párizsnak\\\" elegáns villái miatt.",
        "Korçë híres a sörgyáráról, amely az ország első és egyik legnépszerűbb sörmárkáját gyártja."],
      ro: [
        "Korçë este cunoscut drept orașul serenadelor.",
        "Aici a fost deschisă prima școală de limbă albaneză în anul 1887.",
        "Catedrala Învierea Domnului este una dintre cele mai mari biserici ortodoxe din țară."
      ],
      en: [
        "Korçë is home to the National Museum of Medieval Art, housing an important collection of icons.",
        "The first Albanian-language school, the Mësonjëtorja, was opened here in 1887.",
        "The city hosts the largest beer festival in Albania, celebrating the local Korça Beer."
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
    }, image: "/poi-images/city-korce.webp"},
  {
    id: "city-fier",
    name: { de: "Fier", hu: "Fier", ro: "Fier", en: "Fier" },
    description: { de: "Industrie- und Kulturzentrum", hu: "Ipari és kulturális központ", ro: "Centru industrial și cultural", en: "Industrial and cultural center" },
    descriptionAdvanced: {
      de: "Fier ist eine aufstrebende Stadt in Südwestalbanien und dient als bedeutendes wirtschaftliches Zentrum der Region. Sie ist die wichtigste Basis, um die weltberühmten Ruinen von Apollonia zu besuchen. Die Region um Fier gilt als landwirtschaftliches Kraftzentrum Albaniens.",
      hu: "Fier egy modern ipari és mezőgazdasági központ Albánia délnyugati részén, amely fontos kapocsként szolgál. Bár maga a város fiatal, környéke rendkívül gazdag történelmi emlékekben, hiszen itt találhatók az ókori Apollónia romjai.",
      ro: "Oraș important în apropierea sitului antic Apollonia.",
      en: "Fier is a modern industrial and agricultural hub in southwestern Albania, serving as a vital link between the coastal and inland regions."
    },
    factsAdvanced: {
      de: [
        "Fier fungiert als wichtiger Verkehrsknotenpunkt zwischen der Küste und dem Binnenland.",
        "In der Nähe liegt Apollonia, eine bedeutende griechische Kolonie mit antiken Theatern.",
        "Die Wirtschaft der Stadt ist stark von der Öl- und Gasindustrie geprägt."
      ],
      hu: [
        "Fier közelében találhatók az ókori Apollónia romjai.",
        "A város fontos ipari központ, különösen az olajfinomítás területén.",
        "Fier az ország egyik legfontosabb közlekedési csomópontja."],
      ro: [
        "Orașul se află în imediata apropiere a anticului sit arheologic Apollonia.",
        "Fier a fost fondat oficial în secolul al XIX-lea ca un centru comercial.",
        "Regiunea este centrul industriei de extracție a petrolului din Albania."
      ],
      en: [
        "The city of Fier was officially founded in the mid-19th century.",
        "It is located just a few kilometers away from the ancient city of Apollonia.",
        "Fier is the center of Albania's oil and gas industry."
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
    }, image: "/poi-images/city-fier.webp"},
  {
    id: "city-berat",
    name: { de: "Berat", hu: "Berat", ro: "Berat", en: "Berat" },
    description: { de: "Stadt der tausend Fenster", hu: "Az ezer ablak városa", ro: "Orașul celor o mie de ferestre", en: "City of a thousand windows" },
    descriptionAdvanced: {
      de: "Berat gehört zum UNESCO-Welterbe und ist ein Meisterwerk osmanischer Baukunst. Die charakteristischen weißen Häuser mit ihren vielen kleinen Fenstern scheinen sich den Hügel hinaufzustapeln. Die Altstadt, bestehend aus Mangalem und Gorica, bietet eine bezaubernde Atmosphäre mit engen Gassen und einer reichen Geschichte.",
      hu: "Berat, az \\\"ezer ablak városa\\\", az UNESCO Világörökség része és Albánia egyik legszebb, legjobb állapotban megőrzött történelmi városa. A várost az Osum folyó osztja két történelmi negyedre, Mangalemre és Goricára.",
      ro: "Patrimoniu UNESCO, cunoscut pentru arhitectura otomană.",
      en: "Berat, known as the 'City of a Thousand Windows,' is a UNESCO World Heritage site and one of Albania's most beautiful historic towns."
    },
    factsAdvanced: {
      de: [
        "Die Stadt steht auf der Liste des UNESCO-Weltkulturerbes.",
        "Der Spitzname stammt von den vielen kleinen Fenstern der alten Häuser.",
        "Die Festung (Kala) ist eine der wenigen mittelalterlichen Burgen, die noch bewohnt sind."
      ],
      hu: [
        "Beratot az ezer ablak városának hívják az óváros meredek hegyoldalába épült házai miatt.",
        "A várnegyed, azaz a Kala, az egyik ritka példája annak, ahol a lakók még mindig a történelmi várfalakon belül élnek.",
        "A város az UNESCO Világörökség része."],
      ro: [
        "Berat este supranumit oraşul celor o mie de ferestre datorită fațadelor sale unice.",
        "Cartierele Mangalem și Gorica fac parte din patrimoniul mondial UNESCO.",
        "Cetatea Beratului este una dintre puținele fortărețe medievale încă locuite."
      ],
      en: [
        "The Berat Castle is one of the few medieval fortresses in the world that remains continuously inhabited.",
        "The city's nickname comes from the many windows of the traditional houses.",
        "Berat was designated as a 'Museum City' by the Albanian government in 1961."
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
    }, image: "/poi-images/city-berat.webp"},
  {
    id: "city-gjirokaster",
    name: { de: "Gjirokastra", hu: "Gjirokastra", ro: "Gjirokastra", en: "Gjirokastra" },
    description: { de: "Gjirokastra ist eine historische Stadt im Süden Albaniens, die für ihre gut erhaltene osmanische Architektur bekannt ist.", hu: "Gjirokastra egy történelmi város Albánia déli részén, amely jól karbantartott oszmán építészetéről híres.", ro: "Gjirokastra este un oraș istoric din sudul Albaniei, renumit pentru arhitectura sa otomană bine conservată.", en: "Gjirokaster is a historic city in southern Albania, renowned for its well-preserved Ottoman architecture." },
    descriptionAdvanced: {
      de: "Gjirokastra wird oft als die 'Stadt der Steine' bezeichnet und gehört zum UNESCO-Welterbe. Die osmanische Architektur hier ist besonders wehrhaft und beeindruckend, geprägt von den charakteristischen 'Kulle'-Häusern. Die Stadt thront majestätisch am Hang über dem Drino-Tal, und ihre riesige Burg ist eine der größten in der gesamten Balkanregion.",
      hu: "Gjirokastra, egy másik UNESCO világörökségi kincs, egy lenyűgöző \\\"kőváros\\\", amely a Drino-völgy meredek lejtőire épült. Híres az erődített toronyházairól, az úgynevezett \\\"kule\\\"-kről.",
      ro: "Un oraș otoman bine conservat, locul de naștere al lui Ismail Kadare și Enver Hoxha.",
      en: "Gjirokastra, another UNESCO World Heritage site, is a strikingly beautiful 'Stone City' built on the steep slopes of the Drino Valley."
    },
    factsAdvanced: {
      de: [
        "Die Schieferdächer geben der Stadt ihr einzigartiges, 'steinernes' Erscheinungsbild.",
        "Die riesige Burg beherbergt ein Museum und ein ausrangiertes US-Flugzeug.",
        "Gjirokastra ist der Geburtsort des bekannten Schriftstellers Ismail Kadare."
      ],
      hu: [
        "Gjirokastra városa az UNESCO Világörökség része, híres az erődített toronyházairól.",
        "Ez a város volt Albánia egykori kommunista diktátorának, Enver Hoxhának és Ismail Kadarénak a szülőhelye.",
        "A város felett trónoló vár Albánia egyik legnagyobb erődítménye."],
      ro: [
        "Gjirokastër este renumit pentru casele sale fortificate din piatră numite kulle.",
        "Orașul este locul de naștere al celebrului scriitor Ismail Kadare.",
        "Centrul istoric al orașului beneficiază de statutul de patrimoniu UNESCO."
      ],
      en: [
        "The city's roofs are covered with flat stones instead of tiles.",
        "Gjirokastra Castle houses a military museum featuring a captured US Air Force plane.",
        "The National Folklore Festival is held every five years in the city's fortress."
      ]
    },
    type: "city",
    coords: [20.1388, 40.0758],
    parent: "AL-005",
    facts: {
      de: ["Die Altstadt gehört zum UNESCO-Weltkulturerbe.", "Sie wird wegen ihrer Steindächer auch \"Stadt der Steine\" genannt.", "Die Burg von Gjirokastra überragt die Stadt."],
      hu: ["Az óváros az UNESCO Világörökség része.", "Kőtetős házai miatt \"Kővárosnak\" is nevezik.", "A Gjirokastrai vár a város fölé magasodik."],
      ro: ["Centrul vechi este inclus în Patrimoniul Mondial UNESCO.", "Mai este numit \"Orașul de Piatră\" datorită acoperișurilor sale din piatră.", "Castelul Gjirokastra domină orașul."],
      en: ["The old town is a UNESCO World Heritage site.", "It is often called the \"City of Stone\" because of its distinctive stone roofs.", "Gjirokaster Castle overlooks the city."]
    }, image: "/poi-images/city-gjirokaster.webp"},
  {
    id: "city-sarande",
    name: { de: "Saranda", hu: "Saranda", ro: "Saranda", en: "Saranda" },
    description: { de: "Badeort im Süden", hu: "Tengerparti üdülőhely délen", ro: "Stațiune litorală în sud", en: "Southern coastal resort" },
    descriptionAdvanced: {
      de: "Saranda ist der lebhafte Knotenpunkt der albanischen Riviera am Ionischen Meer. Direkt gegenüber der griechischen Insel Korfu gelegen, bietet die Stadt eine wunderschöne Bucht, die im Sommer voller Leben ist. Von hier aus lassen sich die antiken Ruinen von Butrint oder das 'Blaue Auge' sehr leicht erreichen.",
      hu: "Saranda az albán riviéra nem hivatalos fővárosa, egy napsütötte tengerparti város a Jón-tenger partján, közvetlenül a görögországi Korfu szigetével szemben.",
      ro: "Important centru turistic pe coasta Ionică, vizavi de Corfu.",
      en: "Saranda is the unofficial capital of the Albanian Riviera, a sun-drenched coastal town located just a short ferry ride from the Greek island of Corfu."
    },
    factsAdvanced: {
      de: [
        "Saranda ist der wichtigste Ausgangspunkt für die berühmte Ruinenstadt Butrint.",
        "Die Stadt genießt ein mediterranes Klima mit sehr vielen Sonnentagen pro Jahr.",
        "Von der Hafenfront aus blickt man direkt auf die griechische Insel Korfu."
      ],
      hu: [
        "Saranda a Jón-tenger partján fekszik, és Albánia egyik legnépszerűbb turisztikai célpontja.",
        "A város közelében található Butrint ókori romvárosa.",
        "Saranda partjairól tiszta időben jól látható a görögországi Korfu szigete."],
      ro: [
        "Numele orașului provine de la mănăstirea celor Patruzeci de Sfinți.",
        "Sarandă se bucură de aproximativ 300 de zile însorite pe parcursul unui an.",
        "Promenada de pe malul mării este centrul vieții sociale pe timp de vară."
      ],
      en: [
        "The name Saranda comes from the 'Agioi Saranda' or the Forty Saints.",
        "The city enjoys more than 300 sunny days per year.",
        "The ruins of a 5th-century synagogue in the city center testify to its history."
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
    }, image: "/poi-images/city-sarande.webp"}
];

export const albaniaHistorical: POI[] = [
  {
    id: "hist-butrint",
    name: { de: "Butrint", hu: "Butrint", ro: "Butrint", en: "Butrint" },
    description: { de: "Butrint ist eine antike Ruinenstadt und ein Nationalpark im Süden Albaniens in der Nähe von Saranda.", hu: "Butrint egy ókori romváros és nemzeti park Albánia déli részén, Saranda közelében.", ro: "Butrint este un vechi oraș în ruine și un parc național în sudul Albaniei, aproape de Saranda.", en: "Butrint is an ancient ruined city and a national park in southern Albania near Saranda." },
    descriptionAdvanced: {
      de: "Butrint ist einer der bedeutendsten archäologischen Schätze auf dem Balkan. Die Stätte liegt auf einer Halbinsel, umgeben von Wasser und üppiger Vegetation, was ihr eine fast magische Atmosphäre verleiht. Hier lassen sich Schichten aus griechischer, römischer, byzantinischer und venezianischer Zeit freilegen, die die wechselvolle Geschichte der Region dokumentieren.",
      hu: "Butrint Albánia legjelentősebb régészeti lelőhelye és az UNESCO Világörökség része, amely több mint 2500 év történelmét öleli fel.",
      ro: "Unul dintre cele mai importante situri arheologice din Balcani, patrimoniu UNESCO.",
      en: "Butrint is Albania's most significant archaeological site and a UNESCO World Heritage treasure, showcasing over 2,500 years of history."
    },
    factsAdvanced: {
      de: [
        "Butrint diente einst als wichtige griechische Kolonie und später als römischer Hafen.",
        "Das antike Theater zeugt von der kulturellen Blüte der Stadt in hellenistischer Zeit.",
        "Die Bodenmosaike im Baptisterium sind kunsthistorisch von Weltrang."
      ],
      hu: [
        "Butrint területén görög, római, bizánci és velencei építészeti emlékek is megtalálhatók.",
        "Az ókori színház, amely a 3. században épült, ma is remek állapotban van.",
        "A keresztelőkápolna finom mozaikpadlóit különleges leletként tartják számon."],
      ro: [
        "Legendele spun că Butrint a fost fondat de exilați din Troia antică.",
        "Situl conține ruine impresionante din perioadele romană și bizantină.",
        "Butrint a fost inclus în patrimoniul mondial UNESCO în anul 1992."
      ],
      en: [
        "According to mythology, Butrint was founded by exiles fleeing the fall of Troy.",
        "The 6th-century baptistery features one of the most elaborate floor mosaics in the Mediterranean.",
        "Butrint was designated as Albania's first UNESCO World Heritage site in 1992."
      ]
    },
    type: "historical",
    coords: [20.0195, 39.7431],
    parent: "AL-006",
    facts: {
      de: ["Es ist eine UNESCO-Welterbestätte.", "Die Ruinen umfassen griechische, römische, byzantinische und venezianische Bauwerke.", "Es liegt malerisch an einer Lagune am Ionischen Meer."],
      hu: ["UNESCO Világörökségi helyszín.", "A romok között görög, római, bizánci és velencei építmények is találhatók.", "Festői környezetben, a Jón-tenger egyik lagúnájánál fekszik."],
      ro: ["Este un sit al Patrimoniului Mondial UNESCO.", "Ruinele includ structuri grecești, romane, bizantine și venețiene.", "Este situat pitoresc pe o lagună la Marea Ionică."],
      en: ["It is a UNESCO World Heritage site.", "The ruins include Greek, Roman, Byzantine, and Venetian structures.", "It is picturesquely situated on a lagoon by the Ionian Sea."]
    }
  },
  {
    id: "hist-apollonia",
    name: { de: "Apollonia", hu: "Apollónia", ro: "Apollonia", en: "Apollonia" },
    description: { de: "Antike griechische Stadt", hu: "Ókori görög város", ro: "Oraș antic grec", en: "Ancient Greek city" },
    descriptionAdvanced: {
      de: "Apollonia war im antiken Griechenland eine einflussreiche Kolonie und später ein hochgeschätztes römisches Bildungszentrum. Die Anlage besticht durch ihre gut erhaltenen Strukturen, darunter das prachtvolle Agonotheten-Denkmal und ein antikes Theater.",
      hu: "Apollónia az ókor egyik legfontosabb görög gyarmatvárosa volt, amelyet i.e. 588-ban alapítottak, majd később neves római oktatási központtá vált.",
      ro: "O așezare antică importantă, care a fost odată un centru educațional major.",
      en: "Apollonia was one of the most important Greek colonies in the ancient world, founded in 588 BC and later becoming a prestigious Roman center of learning."
    },
    factsAdvanced: {
      de: [
        "Apollonia galt in der Antike als Zentrum für Philosophie und Bildung.",
        "Der römische Kaiser Augustus verbrachte hier seine Studienjahre.",
        "Das Agonotheten-Denkmal ist das architektonische Highlight der Anlage."
      ],
      hu: [
        "Apollónia városa Arisztotelész szerint az oligarchiák és a demokráciák keveredésének tökéletes példája volt.",
        "A városban tanult az ifjú Octavianus, a későbbi Augustus császár.",
        "A helyszínen található Agonothetész emlékmű a város egyik leglátványosabb romja."],
      ro: [
        "Apollonia a fost fondată în anul 588 î.Hr. de coloniști din Corint și Corfu.",
        "Viitorul împărat roman Augustus a studiat filosofia și retorica în acest oraș.",
        "Monumentul Agonothetes este cea mai recunoscută structură a sitului arheologic."
      ],
      en: [
        "The future Roman Emperor Augustus was studying in Apollonia.",
        "At its peak, Apollonia was home to around 60,000 residents.",
        "The site's museum is housed in a medieval monastery, where the courtyard is filled with ancient statues."
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
    }, image: "/poi-images/hist-apollonia.webp"},
  {
    id: "hist-rozafa",
    name: { de: "Burg Rozafa", hu: "Rozafa vára", ro: "Cetatea Rozafa", en: "Rozafa Castle" },
    description: { de: "Mächtige Festung", hu: "Hatalmas erőd", ro: "Fortăreață impunătoare", en: "Massive fortress" },
    descriptionAdvanced: {
      de: "Die Burg Rozafa dominiert Shkodra von einem felsigen Hügel aus und blickt auf eine über 2000-jährige Geschichte zurück. Die Festung ist untrennbar mit der ergreifenden Sage der Rozafa verbunden, einer jungen Frau, die geopfert wurde, um die Mauern unzerstörbar zu machen.",
      hu: "A Rozafa vár egy monumentális erődítmény, amely egy sziklás dombon magasodik Shkodra városa és három folyó összefolyása felett.",
      ro: "O veche cetate iliră cu vedere spre Shkodra.",
      en: "Rozafa Castle is a massive fortress that stands on a rocky hill overlooking the city of Shkodra and the confluence of three rivers."
    },
    factsAdvanced: {
      de: [
        "Die Sage um die eingemauerte Frau ist ein zentrales Element albanischer Folklore.",
        "Der strategische Blick auf die drei Flüsse Buna, Drin und Kir war kriegsentscheidend.",
        "Die Festungsanlage vereint Baukunst aus verschiedenen Epochen über zwei Jahrtausende."
      ],
      hu: [
        "A Rozafa vár legendája szerint egy fiatal asszonyt, Rozafát élve befalaztak a vár falaiba.",
        "A várból lenyűgöző kilátás nyílik a Drin, a Buna és a Kir folyók összefolyására.",
        "A vár falai az illír, a római, a bizánci, a velencei és az oszmán uralom nyomait is magukon viselik."],
      ro: [
        "Legenda spune că o femeie a fost zidită în pereții cetății pentru a-i asigura trăinicia.",
        "Cetatea oferă o vedere panoramică spectaculoasă asupra a drie râuri diferite.",
        "Fortăreața a rezistat unor asedii otomane celebre în secolul al XV-lea."
      ],
      en: [
        "The legend says Rozafa asked to have her body left exposed so she could continue to nurse her infant son.",
        "The oldest parts of the castle walls were built by the Illyrians long before the Roman conquest.",
        "Rozafa Castle successfully withstood two major Ottoman sieges in the 15th century."
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
    }, image: "/poi-images/hist-rozafa.webp"},
  {
    id: "hist-berat-castle",
    name: { de: "Burg von Berat", hu: "Berati vár", ro: "Cetatea Berat", en: "Berat Castle" },
    description: { de: "Bewohnte Zitadelle", hu: "Lakott citadella", ro: "Citadelă locuită", en: "Inhabited citadel" },
    descriptionAdvanced: {
      de: "Die Burg von Berat (Kala) ist ein einzigartiges Beispiel für eine mittelalterliche Festung, die bis heute ein lebendiges Wohnviertel geblieben ist. Innerhalb der massiven Mauern aus dem 13. Jahrhundert findet man eine Ansammlung von traditionellen Steinhäusern und alten byzantinischen Kirchen.",
      hu: "A Berati vár, más néven a Kala, egy hatalmas, 13. századi erődítmény, amely különleges módon ma is egy élő, lakott városnegyed.",
      ro: "Una dintre cele mai mari fortificații din Albania, care este încă locuită.",
      en: "The Castle of Berat, also known as the Kala, is a massive 13th-century fortress that uniquely remains a living, breathing neighborhood."
    },
    factsAdvanced: {
      de: [
        "Die Festung ist heute noch bewohnt, was in der Welt ein seltenes Phänomen ist.",
        "Das Gelände beherbergte einst über 40 orthodoxe Kirchen und Kapellen.",
        "Das Onufri-Ikonenmuseum ist ein kulturelles Highlight innerhalb der Burg."
      ],
      hu: [
        "A Berati vár Albánia azon kevés középkori erődítményeinek egyike, amelynek falain belül a mai napig lakott negyed található.",
        "A vár területén egykor több mint 40 ortodox templom állt, amelyek közül sok még ma is látogatható.",
        "Az Onufri Nemzeti Ikonográfiai Múzeum a várban található Szent Mária templomban működik."],
      ro: [
        "Castelul este situat pe dealul Kala și oferă o poziție defensivă naturală.",
        "În interiorul cetății se aflau odată peste 40 de biserici bizantine.",
        "Berat este una dintre puținele cetăți din lume care au rămas permanent locuite."
      ],
      en: [
        "The castle once housed over 40 churches, many of which still stand.",
        "The Onufri Museum, located inside a cathedral within the castle, displays masterpieces.",
        "Residents of the castle still use ancient cisterns for water and maintain traditions."
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
    }, image: "/poi-images/hist-berat-castle.webp"},
  {
    id: "hist-gjirokaster-castle",
    name: { de: "Burg von Gjirokastra", hu: "Gjirokastrai vár", ro: "Cetatea Gjirokastra", en: "Gjirokastra Castle" },
    description: { de: "Dominante Festung", hu: "Domináns erőd", ro: "Fortăreață dominantă", en: "Dominant fortress" },
    descriptionAdvanced: {
      de: "Die Burg Gjirokastra ist ein gewaltiges Bollwerk, das hoch über der 'Stadt der Steine' thront. Sie ist eine der größten Festungen der gesamten Balkanregion und Zeugnis einer langen, bewegten Geschichte als Zitadelle und Gefängnis. Neben einer beeindruckenden Sammlung von Artilleriegeschützen und einem kleinen Museum bietet der Ort tiefe Einblicke.",
      hu: "A Gjirokastrai vár a Balkán egyik legnagyobb és legimpozánsabb erődítménye, amely az UNESCO által védett \\\"kőváros\\\" látképét uralja. A stratégiai hegygerincre épült várat évszázadokon át bővítették.",
      ro: "O cetate masivă care domină peisajul urban al Gjirokastrei.",
      en: "The Gjirokastra Castle is one of the largest and most imposing fortresses in the Balkans, dominating the skyline of the UNESCO-protected 'Stone City.'"
    },
    factsAdvanced: {
      de: [
        "Die Burganlage gilt als eine der größten Festungen auf dem gesamten Balkan.",
        "Das Wrack eines US-Flugzeugs erinnert an die Zeiten des Kalten Krieges.",
        "Die Festung diente während verschiedener Regimes als Hochsicherheitsgefängnis."
      ],
      hu: [
        "A Gjirokastrai vár ad otthont az Országos Fegyvermúzeumnak, ahol Albánia hadtörténetének emlékeit őrzik.",
        "A vár udvarán látható egy amerikai Lockheed T-33-as repülőgép roncsa.",
        "Az erőd alatt egy titkos, hidegháborús bunkerrendszer található."],
      ro: [
        "Cetatea găzduiește un muzeu militar cu armament din diverse perioade istorice.",
        "Festivalul Național de Folclor are loc periodic în incinta castelului.",
        "Turnul cu ceas este cel mai vizibil simbol al fortificației."
      ],
      en: [
        "The castle's clock tower was added in the 19th century.",
        "In the castle's courtyard sits the silver-colored wreck of a US Air Force T-33 trainer jet.",
        "The fortress was used as a high-security prison for political dissidents."
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
    }, image: "/poi-images/hist-gjirokaster-castle.webp"},
  {
    id: "hist-kruje",
    name: { de: "Burg Kruja", hu: "Krujai vár", ro: "Cetatea Kruja", en: "Kruja Castle" },
    description: { de: "Symbol des Widerstands", hu: "Az ellenállás szimbóluma", ro: "Simbolul rezistenței", en: "Symbol of resistance" },
    descriptionAdvanced: {
      de: "Die Burg Kruja ist untrennbar mit dem Nationalhelden Skanderbeg verbunden. Von hier aus verteidigte er im 15. Jahrhundert 25 Jahre lang erfolgreich Albanien gegen die osmanische Truppen. Das markante Skanderbeg-Museum erinnert an diese heroische Periode.",
      hu: "A Krujai vár az albán nemzeti büszkeség egyik legfontosabb helyszíne, hiszen innen vezette Szkander bég 25 éven át az ellenállást az Oszmán Birodalom ellen.",
      ro: "Centrul luptei lui Skanderbeg împotriva Imperiului Otoman.",
      en: "Kruja Castle is a site of profound national pride, serving as the base from which the hero Skanderbeg led the resistance."
    },
    factsAdvanced: {
      de: [
        "Die Burg war das Bollwerk gegen die osmanische Expansion im 15. Jahrhundert.",
        "Skanderbegs Widerstand machte Kruja zu einem Symbol europäischer Freiheit.",
        "Das ethnografische Museum zeigt das Leben der Menschen im 18. Jahrhundert."
      ],
      hu: [
        "Kruja vára volt az ellenállás központja Szkander bég idején.",
        "A várban található Szkander bég múzeuma az albán nemzeti identitás egyik legfontosabb szimbóluma.",
        "Az erőd lábánál fekvő régi bazár Albánia egyik legrégebbi piaca."],
      ro: [
        "Cetatea a fost centrul rezistenței lui Skanderbeg împotriva expansiunii otomane.",
        "Muzeul Etnografic oferă o imagine detaliată a vieții tradiționale albaneze.",
        "Vechiul Bazar din apropiere este locul ideal pentru suveniruri artizanale."
      ],
      en: [
        "Kruja was the capital of the first autonomous Albanian state.",
        "The Old Bazar at the foot of the castle is one of the oldest in Albania.",
        "Skanderbeg's family crest became the basis for the modern Albanian national flag."
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
    }, image: "/poi-images/hist-kruje.webp"},
  {
    id: "hist-lezhe-castle",
    name: { de: "Burg von Lezhë", hu: "Lezhëi vár", ro: "Cetatea Lezhë", en: "Lezhë Castle" },
    description: { de: "Mittelalterliche Akropolis", hu: "Középkori akropolisz", ro: "Acropolă medievală", en: "Medieval acropolis" },
    descriptionAdvanced: {
      de: "Die Burg von Lezhë thront majestätisch auf einem Hügel über der Stadt. Die Festung basiert auf einer antiken illyrischen Akropolis, die durch zahlreiche Herrscher kontinuierlich ausgebaut wurde. In ihrem Inneren sind noch heute Ruinen einer Moschee zu finden.",
      hu: "A vár falait a 15. században Szkander bég parancsára erősítették meg, hogy ellenálljanak a török előretörésnek.",
      ro: "O fortăreață strategică cu vedere la Marea Adriatică și la orașul Lezhë.",
      en: "Lezhë Castle stands on a high hill overlooking the city of Lezhë, offering a strategic vantage point."
    },
    factsAdvanced: {
      de: [
        "Die Basis der Festung geht auf die antike Stadt Lissus zurück.",
        "Der Ort diente als zentraler Verteidigungspunkt für die Liga von Lezhë.",
        "Überreste einer Moschee im Inneren zeugen von der osmanischen Epoche."
      ],
      hu: [
        "A vár falait a 15. században Szkander bég parancsára erősítették meg.",
        "Az erőd területén talált régészeti leletek bizonyítják, hogy a helyszín már az illírek előtt is lakott volt.",
        "A lezhei várban az oszmán uralom idején egy mecset is épült."],
      ro: [
        "Fundațiile cetății datează din perioada antică a orașului ilir Lissus.",
        "Castul a jucat un rol strategic crucial în controlul rutelor de coastă.",
        "Venețienii au reconstruit parțial fortificația."
      ],
      en: [
        "The castle walls feature unique 'cyclopean' masonry from the Illyrian period.",
        "It was a major military base for the Venetians in the 15th century.",
        "The castle's position allowed it to control the main trade routes."
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
    }, image: "/poi-images/hist-lezhe-castle.webp"},
  {
    id: "hist-elbasan-castle",
    name: { de: "Burg von Elbasan", hu: "Elbasani vár", ro: "Cetatea Elbasan", en: "Elbasan Castle" },
    description: { de: "Osmanische Stadtburg", hu: "Oszmán városi vár", ro: "Cetate otomană în oraș", en: "Ottoman city castle" },
    descriptionAdvanced: {
      de: "Die Burg von Elbasan ist ein faszinierendes Beispiel einer osmanischen Stadtburg. Sie wurde auf den Fundamenten der römischen Anlage von Scampis erbaut. Besonders reizvoll ist, dass die Burg noch heute als lebendiges Wohnquartier genutzt wird.",
      hu: "Az Elbasani vár egy ritka példája az alföldi erődítményeknek, amely a modern városközpontban található, és az ókori római Scampis állomás maradványaira épült.",
      ro: "O fortificație joasă aflată chiar în centrul orașului Elbasan.",
      en: "The Elbasan Castle is a rare example of a low-lying 'field castle' located in the center of the modern city."
    },
    factsAdvanced: {
      de: [
        "Die Festung wurde von Sultan Mehmed II. in nur 25 Tagen errichtet.",
        "Sie entstand auf den Fundamenten der antiken römischen Station Scampis.",
        "Die Anlage ist heute ein bewohnter Stadtteil mit lebendiger Atmosphäre."
      ],
      hu: [
        "Elbasan vára egyike azon kevés albán erődítménynek, amely nem dombtetőre, hanem sík terepre épült.",
        "A vár falai között található a Szent Mária templom.",
        "A várnegyed szűk utcái hűen tükrözik a 17-18. századi albán városi építészetet."],
      ro: [
        "Fortificația originală avea 26 de turnuri de apărare uniform distribuite.",
        "Turnul cu ceas din incinta cetății este un reper istoric important.",
        "Interiorul cetății adăpostește astăzi o comunitate multietnică vibrantă."
      ],
      en: [
        "The castle was originally built in just 25 days by Sultan Mehmet II.",
        "It had 26 defensive towers, though only some of the original walls remain.",
        "The Saint Mary Church inside the castle is a beautiful example of Orthodox architecture."
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
    }, image: "/poi-images/hist-elbasan-castle.webp"}
];

export const albaniaNature: POI[] = [
  {
    id: "nat-lake-skadar",
    name: { de: "Shkodrasee", hu: "Shkodrai-tó", ro: "Lacul Shkodra", en: "Lake Skadar" },
    description: { de: "Größter See des Balkans", hu: "A Balkán legnagyobb tava", ro: "Cel mai mare lac din Balcani", en: "Largest lake in the Balkans" },
    descriptionAdvanced: {
      de: "Der Shkodrasee ist ein ökologisches Juwel an der albanisch-montenegrinischen Grenze und der größte See auf dem Balkan. Mit seiner beeindruckenden Vielfalt an Vögeln, darunter der seltene Krauskopfpelikan, zieht er Naturliebhaber an.",
      hu: "A Shkodrai-tó a Balkán-félsziget legnagyobb tava, egy különleges ökoszisztéma, amelyen Albánia és Montenegró osztozik.",
      ro: "O rezervație naturală importantă la granița dintre Albania și Muntenegru.",
      en: "Lake Skadar is the largest lake in the Balkan Peninsula and a vital ecosystem shared between Albania and Montenegro."
    },
    factsAdvanced: {
      de: [
        "Er ist einer der letzten Rückzugsorte für den Krauskopfpelikan in Europa.",
        "Der See bietet Lebensraum für über 270 Vogelarten.",
        "Die Größe des Sees variiert je nach Saison zwischen 370 und 530 km²."
      ],
      hu: [
        "A tó vízszintje az évszakoktól függően jelentősen változik.",
        "Ez az egyik utolsó menedékhelye a borzas pelikánnak Európában.",
        "A Shkodrai-tó vize több mint 50 halfajnak ad otthont."],
      ro: [
        "Lacul Shkodra este cel mai mare lac din Peninsula Balcanică.",
        "Este unul dintre ultimele refugii pentru pelicanul creț din Europa.",
        "Peste 270 de specii de păsări populează apele."
      ],
      en: [
        "The lake's surface area varies dramatically between seasons.",
        "It is home to over 270 species of birds.",
        "Lake Skadar is one of the last places in Europe where the endangered Dalmatian pelican can still be found nesting."
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
      de: "Der Ohridsee ist einer der ältesten und tiefsten Seen der Welt und wurde aufgrund seiner einzigartigen biologischen Vielfalt in die UNESCO-Liste aufgenommen. Oft als 'Museum lebender Fossilien' bezeichnet, beherbergt er hunderte endemische Arten.",
      hu: "Az Ohridi-tó a világ egyik legrégebbi és legmélyebb tava, amelyet egyedülálló ökoszisztémája miatt gyakran \\\"élő kövületek múzeumaként\\\" emlegetnek.",
      ro: "Unul dintre cele mai vechi și mai adânci lacuri din Europa.",
      en: "Lake Ohrid is one of the oldest and deepest lakes in the world, often described as a 'museum of living fossils' due to its unique ecosystem."
    },
    factsAdvanced: {
      de: [
        "Mit einem Alter von bis zu 5 Millionen Jahren zählt er zu den ältesten Seen der Welt.",
        "Der Ohridsee besitzt eine außergewöhnliche Klarheit bis in 20 Meter Tiefe.",
        "Die endemische Ohrid-Forelle ist eine kulinarische Rarität der Region."
      ],
      hu: [
        "Az Ohridi-tó becsült kora 3-5 millió év, ezzel a világ egyik legősibb tava.",
        "A tó vizében több mint 200 olyan faj él, amely a világon sehol máshol nem található meg.",
        "Az albán oldalon fekvő Pogradec városa a tó partjának egyik legnépszerűbb üdülőhelye."],
      ro: [
        "Lacul Ohrid are o vechime estimată la peste 3 milioane de ani.",
        "Găzduiește numeroase specii endemice care nu se găsesc nicăieri altundeva.",
        "Peștele Koran este o delicatesă locală celebră."
      ],
      en: [
        "Lake Ohrid is estimated to be around 3 to 5 million years old.",
        "The lake is home to the Ohrid trout, a delicious and rare fish species.",
        "Due to its extraordinary clarity, underwater visibility in Lake Ohrid can often reach 22 meters."
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
    }, image: "/poi-images/nat-lake-ohrid.webp"},
  {
    id: "nat-valbone",
    name: { de: "Valbona-Tal", hu: "Valbona-völgy", ro: "Valea Valbone", en: "Valbona Valley" },
    description: { de: "Albanische Alpen", hu: "Albán Alpok", ro: "Alpii Albanezi", en: "Albanian Alps" },
    descriptionAdvanced: {
      de: "Das Valbona-Tal ist die 'Perle der albanischen Alpen' und besticht durch dramatische Gipfel, reißende türkisblaue Flüsse und unberührte Natur. Es gilt als eines der wildesten Täler Europas und bietet Wanderern unvergleichliche Erlebnisse.",
      hu: "A Valbona-völgyet gyakran az \\\"Albán-Alpok ékköveként\\\" emlegetik, ahol meredek sziklafalak, türkizkék folyók alkotnak lélegzetelállító tájat.",
      ro: "O vale montană spectaculoasă în nordul Albaniei.",
      en: "The Valbona Valley is often hailed as the 'Gem of the Albanian Alps,' a breathtaking alpine landscape of jagged peaks and turquoise rivers."
    },
    factsAdvanced: {
      de: [
        "Die Valbona ist bekannt für ihr glasklares, türkisblaues Wasser.",
        "Das Tal ist Teil der 'Peaks of the Balkans' Wanderroute.",
        "Traditionelle Kulle-Türme dienten früher auch zur Verteidigung."
      ],
      hu: [
        "A Valbona-völgyet gyakran nevezik az \\\"Albán Alpok ékkövének\\\" kristálytiszta folyója miatt.",
        "A környék a túrázók paradicsoma.",
        "A völgy lakói még mindig őrizik az ősi albán vendégszeretetet."],
      ro: [
        "Valea Valbonei este adesea numită perla Alpilor Albanezi.",
        "Râul Valbona are o culoare turcoaz cristalină impresionantă.",
        "Tradițiile montane și ospitalitatea locală sunt păstrate cu sfințenie."
      ],
      en: [
        "The Valbona River is famous for its intense turquoise color.",
        "The valley is part of the 'Peaks of the Balkans' cross-border hiking trail.",
        "Many of the traditional guesthouses in Valbona are converted 'kulla' towers."
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
    }, image: "/poi-images/nat-valbone.webp"},
  {
    id: "nat-blue-eye",
    name: { de: "Das Blaue Auge", hu: "Kék Szem-forrás", ro: "Ochiul Albastru", en: "The Blue Eye" },
    description: { de: "Karstquelle", hu: "Karsztforrás", ro: "Izvor carstic", en: "Karst spring" },
    descriptionAdvanced: {
      de: "Die Karstquelle 'Syri i Kaltër' (Das Blaue Auge) ist ein faszinierendes Naturwunder nahe Saranda. Aus einem tiefen Unterwassersystem sprudelt kristallklares Wasser an die Oberfläche und bildet eine Oase in leuchtenden Türkis- und Blautönen.",
      hu: "A Kék Szem-forrás (Syri i Kaltër) egy lenyűgöző természeti jelenség és geológiai csoda Saranda városa közelében.",
      ro: "Un izvor de apă de un albastru profund, fascinant, lângă Saranda.",
      en: "The Blue Eye (Syri i Kaltër) is a mesmerizing natural spring and a geological marvel located near the city of Saranda."
    },
    factsAdvanced: {
      de: [
        "Die Tiefe der Karstquelle ist bis heute nicht vollständig erforscht.",
        "Das Wasser ist das ganze Jahr über konstant 10 Grad Celsius kühl.",
        "Der dunkle Kern und die hellere Umgebung lassen das Becken wie ein Auge erscheinen."
      ],
      hu: [
        "A forrás mélységét eddig pontosan nem sikerült meghatározni.",
        "A víz hőmérséklete állandóan 10 Celsius-fok körül mozog.",
        "A forrás nevét a víz közepén lévő sötétkék mélyedésről kapta."],
      ro: [
        "Debitul apei la izvorul Ochiul Albastru este remarcabil.",
        "Culoarea apei seamănă cu irisul unui ochi uman.",
        "Temperatura apei rămâne constantă la aproximativ 10 grade Celsius tot anul."
      ],
      en: [
        "The exact depth of the Blue Eye remains unknown; divers have reached 50 meters.",
        "The spring discharges around 18 cubic meters of water per second.",
        "Legend has it that a dragon once lived in the spring and was defeated by a local hero."
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
    }, image: "/poi-images/nat-blue-eye.webp"},
  {
    id: "nat-llogara",
    name: { de: "Llogara-Pass", hu: "Llogara-hágó", ro: "Pasul Llogara", en: "Llogara Pass" },
    description: { de: "Gebirgspass zur Riviera", hu: "Hágó a riviérára", ro: "Pas montan spre rivieră", en: "Mountain pass to the Riviera" },
    descriptionAdvanced: {
      de: "Der Llogara-Pass ist einer der spektakulärsten Gebirgspässe des Balkans und das Tor zur albanischen Riviera. Auf über 1000 Metern Höhe bietet er einen dramatischen Blick auf das tiefblaue Ionische Meer und die Insel Korfu.",
      hu: "A Llogara-hágó egy látványos hegyi hágó, amely az albán riviéra kapujaként szolgál, és a Földközi-tenger egyik legdrámaibb partmenti kilátását nyújtja.",
      ro: "Un parc național cu o vedere uluitoare spre Marea Ionică.",
      en: "The Llogara Pass is a spectacular mountain pass that serves as the gateway to the Albanian Riviera, offering some of the most dramatic coastal views."
    },
    factsAdvanced: {
      de: [
        "Die Passstraße liegt auf einer Höhe von über 1000 Metern.",
        "Der Pass markiert die Grenze zwischen Adria und Ionischem Meer.",
        "Der 'Flaggen-Kiefer' genannte Baum ist ein natürliches Symbol der Region."
      ],
      hu: [
        "A Llogara-hágó az a pont, ahol az Adriai- és a Jón-tenger látványa egyesül.",
        "A hágó környékén található \\\"Zászló-fenyő\\\" egy különleges fa.",
        "A Llogara Nemzeti Parkban számos ritka állatfaj él."],
      ro: [
        "Pasul Llogara se află la o altitudine de 1027 de metri deasupra nivelului mării.",
        "Pinul Steag este un monument al naturii cu o formă ciudată datorată vântului.",
        "Zona este un punct de lansare renumit pentru pasionații de parapantă."
      ],
      en: [
        "Julius Caesar is said to have crossed the Llogara Pass in 48 BC.",
        "The 'Flag Pine' (Pisha Flamur) is a famous tree in the park shaped by the wind.",
        "Llogara is one of the best places in Albania for paragliding."
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
    }, image: "/poi-images/nat-llogara.webp"},
  {
    id: "nat-osum-canyon",
    name: { de: "Osum-Canyon", hu: "Osum-kanyon", ro: "Canionul Osum", en: "Osum Canyon" },
    description: { de: "Albaniens Grand Canyon", hu: "Albánia Grand Canyonja", ro: "Grand Canyon al Albaniei", en: "Albania's Grand Canyon" },
    descriptionAdvanced: {
      de: "Der Osum-Canyon ist eine beeindruckende, 26 Kilometer lange Schlucht, die tief in die Kalksteinlandschaft des Südens eingeschnitten ist. Oft als der 'Grand Canyon Albaniens' bezeichnet, besticht er durch seine gewaltigen senkrechten Felswände.",
      hu: "Az Osum-kanyont gyakran \\\"Albánia Grand Canyonjának\\\" nevezik, amely egy látványos, 26 kilométer hosszú szurdok a déli felvidéken.",
      ro: "Un canion spectaculos în sudul Albaniei.",
      en: "The Osum Canyon is often called the 'Grand Canyon of Albania,' a spectacular 26-kilometer-long gorge carved into the limestone."
    },
    factsAdvanced: {
      de: [
        "Die Schlucht erstreckt sich über 26 Kilometer durch den Kalkstein.",
        "Zahlreiche Wasserfälle stürzen über die Klippen in den Osum-Fluss.",
        "Der 'Teufelstor'-Abschnitt bietet eine besonders enge und spektakuläre Passage."
      ],
      hu: [
        "Az Osum-kanyon Albánia egyik leglátványosabb természeti képződménye.",
        "A kanyon hossza körülbelül 26 kilométer.",
        "A szurdokvölgyben nyolc nagy vízesés található."],
      ro: [
        "Canionul Osum are o lungime de 26 de kilometri și pereți de până la 450 de metri.",
        "Există opt cascade spectaculoase de-a lungul traseului prin canion.",
        "Poarta Diavolului este una dintre cele mai înguste și dramatice porțiuni."
      ],
      en: [
        "There are eight major waterfalls in the canyon.",
        "The best time for rafting is between March and June.",
        "One of its most famous sections is the 'Gate of the Devil,' a narrow passage."
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
    }, image: "/poi-images/nat-osum-canyon.webp"},
  {
    id: "nat-korab",
    name: { de: "Berg Korab", hu: "Korab-hegy", ro: "Muntele Korab", en: "Mount Korab" },
    description: { de: "Höchster Berg", hu: "Legmagasabb hegy", ro: "Cel mai înalt munte", en: "Highest mountain" },
    descriptionAdvanced: {
      de: "Der Korab ist mit 2.764 Metern der höchste Gipfel Albaniens und bildet eine beeindruckende Grenze zu Nordmazedonien. Die Region um diesen Grenzberg ist geprägt von schroffen Kalksteinformationen, einsamen Gletscherseen und weiten, unberührten Almwiesen.",
      hu: "A Korab-hegy Albánia és Észak-Macedónia legmagasabb csúcsa, amely 2764 méteres magasságával mindkét ország büszkesége.",
      ro: "Cel mai înalt punct din Albania la granița cu Macedonia de Nord.",
      en: "Mount Korab is the highest peak in both Albania and North Macedonia, standing at an impressive 2,764 meters."
    },
    factsAdvanced: {
      de: [
        "Mit 2.764 Metern der höchste Punkt beider Länder.",
        "Der Berg bildet einen natürlichen, wilden Grenzwall.",
        "Sommerliche Wanderungen führen durch unberührte alpine Wiesen."
      ],
      hu: [
        "A Korab-hegy Albánia és Észak-Macedónia legmagasabb pontja.",
        "A hegy csúcsa az év nagy részében hóval borított.",
        "A hegy oldalai meredek sziklafalakból és gleccservölgyekből állnak."],
      ro: [
        "Vârful Korab este cel mai înalt punct din Albania, având 2764 de metri.",
        "Muntele prezintă numeroase fenomene carstice și formațiuni geologice unice.",
        "Drumețiile de vară oferă peisaje alpine ce rivalizează cu cele din Europa Centrală."
      ],
      en: [
        "Mount Korab is one of only two peaks in Europe that is the highest point for two different countries simultaneously.",
        "The mountain features a spectacular waterfall on the North Macedonian side.",
        "The ascent from the Albanian side usually takes about 4 to 5 hours."
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
    }, image: "/poi-images/nat-korab.webp"},
  {
    id: "nat-theth",
    name: { de: "Theth Nationalpark", hu: "Thethi Nemzeti Park", ro: "Parcul Național Theth", en: "Theth National Park" },
    description: { de: "Herz der Alpen", hu: "Az Alpok szíve", ro: "Inima Alpilor", en: "Heart of the Alps" },
    descriptionAdvanced: {
      de: "Theth ist das Herz der albanischen Alpen und bietet ein Bild wie aus einem Märchen. Das isolierte Dorf inmitten von schroffen Gipfeln ist berühmt für seine traditionellen Steinhäuser mit Schindeldächern und den 'Blutrache-Turm'.",
      hu: "A Thethi Nemzeti Park az Albán-Alpok koronaékszere, egy elszigetelt és lélegzetelállító völgy.",
      ro: "Un sat montan virgin și parc național în nord.",
      en: "Theth National Park is the crown jewel of the Albanian Alps, a remote and breathtaking valley."
    },
    factsAdvanced: {
      de: [
        "Der 'Blutrache-Turm' erinnert an alte soziale Regeln des Kanun.",
        "Die Grunas-Wasserfälle sind ein monumentaler Anblick inmitten der Berge.",
        "Theth ist einer der wenigen Orte in Europa, die noch völlig abseits der Moderne liegen."
      ],
      hu: [
        "Theth faluja híres a \\\"kulla\\\"-ról, azaz a vérbosszú elől menedéket nyújtó toronyházról.",
        "A Grunas-vízesés egy 30 méter magas, lenyűgöző vízzuhatag.",
        "A nemzeti park területén még mindig élnek farkasok és barnamedvék."],
      ro: [
        "Turnul de izolare din Theth amintește de vechile tradiții ale codului Kanun.",
        "Cascada Grunas este un monument al naturii cu o cădere de apă de 30 de metri.",
        "Satul rămâne adesea izolat pe timp de iarnă."
      ],
      en: [
        "The 'Lock-in Tower' (Kulla e Ngujimit) was used by men involved in blood feuds.",
        "The Grunas Waterfall is a 30-meter-high cascade.",
        "Theth was declared a National Park in 1966."
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
    }, image: "/poi-images/nat-theth.webp"},
  {
    id: "nat-dajti",
    name: { de: "Berg Dajti", hu: "Dajti-hegy", ro: "Muntele Dajti", en: "Mount Dajti" },
    description: { de: "Hausberg von Tirana", hu: "Tirana házhegye", ro: "Muntele local al Tiranei", en: "Tirana's backyard mountain" },
    descriptionAdvanced: {
      de: "Der Dajti ist Tiranas Hausberg und das 'grüne Lungen' der Hauptstadt. Mit der Dajti Ekspres Seilbahn erreicht man in wenigen Minuten eine beeindruckende Höhe, von der aus man Tirana aus der Vogelperspektive betrachten kann.",
      hu: "A Dajti-hegy Tirana kedvelt \\\"hátsó kertje\\\", amely zöld menedéket nyújt mindössze néhány kilométerre a nyüzsgő városközponttól.",
      ro: "O destinație de excursie populară cu telecabină lângă capitală.",
      en: "Mount Dajti is the beloved 'backyard mountain' of Tirana, providing a fresh and green escape just a few kilometers from the city center."
    },
    factsAdvanced: {
      de: [
        "Die Dajti Ekspres ist die längste Seilbahn auf dem Balkan.",
        "Der Berg dient als natürliche grüne Lunge für die wachsende Hauptstadt.",
        "An klaren Tagen reicht der Blick über die Stadt bis zum Meer."
      ],
      hu: [
        "A Dajti-hegyre közlekedő Dajti Ekspres felvonó a leghosszabb ilyen jellegű pálya a Balkánon.",
        "A hegytetőről nemcsak Tirana városa látható, hanem tiszta időben az Adriai-tengerig is el lehet látni.",
        "A hegy Albánia egyik legrégebbi nemzeti parkja."],
      ro: [
        "Telecabina Dajti Ekspres este cea mai lungă de acest tip din Balcani.",
        "Muntele este considerat \\\"balconul Tiranei\\\" datorită vederii asupra capitalei.",
        "Parcul Național găzduiește o biodiversitate bogată."
      ],
      en: [
        "The Dajti Ekspres is the longest cable car in the Balkans.",
        "In the winter, Mount Dajti is often covered in snow.",
        "The Dajti National Park covers over 3,300 hectares."
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
  }
];

export const albaniaAllPoi: POI[] = [
  albaniaCountry,
  ...albaniaCities,
  ...albaniaHistorical,
  ...albaniaNature
];

