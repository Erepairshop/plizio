import type { POI } from "./poi";

export const italyCountry: POI = {
  id: "italy",
  type: "country",
  parent: "EU",
  coords: [12.5674, 41.8719],
  name: { de: "Italien", hu: "Olaszország", ro: "Italia", en: "Italy" },
  description: {
    de: "Italien ist ein Land in Südeuropa, bekannt für seine jahrtausendealte Geschichte, weltberühmte Kunstschätze und die exzellente mediterrane Küche.",
    hu: "Olaszország egy dél-európai ország, amely évezredes történelméről, világhírű művészeti kincseiről és kiváló mediterrán konyhájáról ismert.",
    ro: "Italia este o țară din Europa de Sud, cunoscută pentru istoria sa de mii de ani, comorile artistice de renume mondial și excelenta bucătărie mediteraneană.",
    en: "Italy is a country in Southern Europe, known for its millennia-old history, world-famous art treasures, and excellent Mediterranean cuisine."
  },
  descriptionAdvanced: {
      en: "Italy is a country located in Southern Europe, renowned for its rich history, diverse culture, and influential art. The Italian Peninsula is shaped like a boot and extends into the central Mediterranean Sea. It was the heart of the Roman Empire and the birthplace of the Renaissance, leaving an indelible mark on Western civilization. Today, Italy is famous for its culinary excellence, fashion, beautiful landscapes, and historic cities like Rome, Venice, and Florence. It remains a major cultural and economic power in modern Europe.",
      de: "Italien ist ein Land in Südeuropa, bekannt für seine reiche Geschichte, vielfältige Kultur und einflussreiche Kunst. Die italienische Halbinsel hat die Form eines Stiefels und erstreckt sich in das zentrale Mittelmeer. Es war das Herz des Römischen Reiches und die Geburtsstätte der Renaissance, was tiefe Spuren in der westlichen Zivilisation hinterließ. Heute ist Italien berühmt für seine kulinarische Exzellenz, Mode, wunderschöne Landschaften und historische Städte wie Rom, Venedig und Florenz. Es bleibt eine große kulturelle und wirtschaftliche Macht in Europa.",
      hu: "Olaszország Dél-Európában található, és gazdag történelméről, változatos kultúrájáról, valamint nagy hatású művészetéről ismert. Az olasz félsziget csizma alakú, és a Földközi-tenger középső részébe nyúlik. A Római Birodalom központja és a reneszánsz szülőhazája volt, amely letörölhetetlen nyomot hagyott a nyugati civilizációban. Ma Olaszország kulináris kiválóságáról, divatjáról, gyönyörű tájairól és olyan történelmi városairól híres, mint Róma, Velence és Firenze. Továbbra is jelentős kulturális és gazdasági hatalom Európában.",
      ro: "Italia este o țară situată în Europa de Sud, renumită pentru istoria sa bogată, cultura diversă și arta influentă. Peninsula Italică are forma unei cizme și se extinde în Marea Mediterană centrală. A fost inima Imperiului Roman și locul de naștere al Renașterii, lăsând o amprentă profundă asupra civilizației occidentale. Astăzi, Italia este faimoasă pentru excelența culinară, modă, peisaje frumoase și orașe istorice precum Roma, Veneția și Florența. Rămâne o putere culturală și economică majoră în Europa modernă."
    },
  facts: {
      en: ["Italy has the most UNESCO World Heritage Sites in the world.","The country surrounds two independent microstates: Vatican City and San Marino.","Rome, the capital, is nearly 3,000 years old.","Italy is the world's largest producer of wine.","The colors of the Italian flag represent hope (green), faith (white), and charity (red).","It features Europe's only active volcanoes: Vesuvius, Etna, and Stromboli.","Pizza was invented in Naples during the 18th century.","The oldest university in continuous operation is the University of Bologna, founded in 1088."],
      de: ["Italien hat die meisten UNESCO-Welterbestätten der Welt.","Das Land umschließt zwei unabhängige Zwergstaaten: die Vatikanstadt und San Marino.","Rom, die Hauptstadt, ist fast 3.000 Jahre alt.","Italien ist der weltweit größte Weinproduzent.","Die Farben der italienischen Flagge stehen für Hoffnung (grün), Glaube (weiß) und Nächstenliebe (rot).","Es besitzt die einzigen aktiven Vulkane Europas: Vesuv, Čtna und Stromboli.","Die Pizza wurde im 18. Jahrhundert in Neapel erfunden.","Die älteste ununterbrochen betriebene Universität ist die 1088 gegründete Universität Bologna."],
      hu: ["Olaszországban található a világon a legtöbb UNESCO Világörökségi helyszín.","Az ország két független törpeállamot vesz körül: a Vatikánt és San Marinót.","A főváros, Róma közel 3000 éves múlttal rendelkezik.","Olaszország a világ legnagyobb bortermelője.","Az olasz zászló színei a reményt (zöld), a hitet (fehér) és a jótékonyságot (piros) jelképezik.","Itt találhatók Európa egyetlen aktív vulkánjai: a Vezúv, az Etna és a Stromboli.","A pizzát Nápolyban találták fel a 18. században.","A legrégebbi folyamatosan működő egyetem az 1088-ban alapított Bolognai Egyetem."],
      ro: ["Italia are cele mai multe situri din Patrimoniul Mondial UNESCO din lume.","Țara înconjoară două microstate independente: Cetatea Vaticanului și San Marino.","Roma, capitala, are o vechime de aproape 3.000 de ani.","Italia este cel mai mare producător de vin din lume.","Culorile steagului italian reprezintă speranța (verde), credința (alb) și caritatea (roșu).","Găzduiește singurii vulcani activi din Europa: Vezuviu, Etna și Stromboli.","Pizza a fost inventată în Napoli în secolul al XVIII-lea.","Cea mai veche universitate în funcționare continuă este Universitatea din Bologna, fondată în 1088."]
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
      en: "Lombardy is a region in Northern Italy known for its economic power, fashion industry, and stunning alpine lakes. Its capital, Milan, is a global hub for design, finance, and high-end fashion, attracting visitors worldwide. The region's geography ranges from the Po Valley plains to the towering peaks of the Alps. It boasts famous lakes such as Lake Como, Lake Garda, and Lake Maggiore, which are popular tourist destinations. Lombardy also features a rich historical heritage, including Renaissance architecture and ancient Roman ruins.",
      de: "Die Lombardei ist eine Region in Norditalien, die für ihre Wirtschaftskraft, Modeindustrie und atemberaubenden Alpenseen bekannt ist. Ihre Hauptstadt Mailand ist ein globales Zentrum für Design, Finanzen und Haute Couture und zieht Besucher aus aller Welt an. Die Geografie der Region reicht von den Ebenen der Poebene bis zu den hoch aufragenden Gipfeln der Alpen. Sie rühmt sich berühmter Seen wie dem Comer See, Gardasee und Lago Maggiore, die beliebte Touristenziele sind. Die Lombardei bietet auch ein reiches historisches Erbe, einschließlich Renaissance-Architektur und antiken römischen Ruinen.",
      hu: "Lombardia egy észak-olaszországi régió, amely gazdasági erejéről, divatiparáról és lenyűgöző alpesi tavairól ismert. Fővárosa, Milánó, a design, a pénzügyek és a csúcsdivat globális központja, amely világszerte vonzza a látogatókat. A régió földrajza a Pó-síkságtól az Alpok magasba tornyosuló csúcsaiig terjed. Olyan híres tavakkal büszkélkedhet, mint a Comói-tó, a Garda-tó és a Maggiore-tó, amelyek népszerű turisztikai célpontok. Lombardia gazdag történelmi örökséggel is rendelkezik, beleértve a reneszánsz építészetet és az ókori római romokat.",
      ro: "Lombardia este o regiune din nordul Italiei, cunoscută pentru puterea sa economică, industria modei și lacurile alpine uimitoare. Capitala sa, Milano, este un centru global pentru design, finanțe și modă de înaltă calitate, atrăgând vizitatori din întreaga lume. Geografia regiunii variază de la câmpiile Văii Po până la vârfurile falnice ale Alpilor. Se mândrește cu lacuri faimoase, cum ar fi Lacul Como, Lacul Garda și Lacul Maggiore, care sunt destinații turistice populare. Lombardia prezintă, de asemenea, o bogată moștenire istorică, incluzând arhitectura renascentistă și ruine romane antice."
    },
    facts: {
      en: ["Lombardy is the most populous and richest region in Italy.","Milan, its capital, is known as one of the fashion capitals of the world.","Lake Garda, the largest lake in Italy, is partially located in Lombardy.","The region is named after the Lombards, a Germanic people who ruled the area in the Middle Ages.","Leonardo da Vinci's famous painting 'The Last Supper' is located in Milan.","Lombardy produces a significant portion of Italy's GDP.","The region is famous for culinary dishes like Risotto alla Milanese and Ossobuco.","It shares a border with Switzerland to the north."],
      de: ["Die Lombardei ist die bevölkerungsreichste und reichste Region Italiens.","Mailand, die Hauptstadt, ist als eine der Modehauptstädte der Welt bekannt.","Der Gardasee, der größte See Italiens, liegt teilweise in der Lombardei.","Die Region ist nach den Langobarden benannt, einem germanischen Volk, das im Mittelalter herrschte.","Leonardo da Vincis berühmtes Gemälde 'Das Abendmahl' befindet sich in Mailand.","Die Lombardei erwirtschaftet einen erheblichen Teil des italienischen BIP.","Die Region ist berühmt für kulinarische Gerichte wie Risotto alla Milanese und Ossobuco.","Sie grenzt im Norden an die Schweiz."],
      hu: ["Lombardia Olaszország legnépesebb és leggazdagabb régiója.","Fővárosa, Milánó, a világ egyik divatfővárosaként ismert.","A Garda-tó, Olaszország legnagyobb tava részben Lombardiában található.","A régió a longobárdokról, egy germán népről kapta a nevét, akik a középkorban uralkodtak a területen.","Leonardo da Vinci híres festménye, 'Az utolsó vacsora' Milánóban található.","Lombardia adja az olasz GDP jelentős részét.","A régió olyan kulináris ételekről híres, mint a milánói rizottó és az Ossobuco.","Északon Svájccal határos."],
      ro: ["Lombardia este cea mai populată și mai bogată regiune din Italia.","Milano, capitala sa, este cunoscută ca una dintre capitalele modei din lume.","Lacul Garda, cel mai mare lac din Italia, se află parțial în Lombardia.","Regiunea este numită după lombarzi, un popor germanic care a condus zona în Evul Mediu.","Celebra pictură 'Cina cea de Taină' a lui Leonardo da Vinci se află la Milano.","Lombardia produce o parte semnificativă din PIB-ul Italiei.","Regiunea este faimoasă pentru preparate culinare precum Risotto alla Milanese și Ossobuco.","Se învecinează cu Elveția la nord."]
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
      en: "Tuscany is a central Italian region famous for its picturesque landscapes, artistic heritage, and world-class wine production. The rolling hills, adorned with cypress trees and vineyards, create some of Italy's most iconic scenery. It is widely considered the birthplace of the Italian Renaissance, with Florence at its cultural heart. Visitors flock to see masterpieces by Michelangelo and Leonardo da Vinci, as well as historic towns like Siena and Pisa. The region's rich culinary tradition is complemented by its famous Chianti wines.",
      de: "Die Toskana ist eine zentralitalienische Region, die für ihre malerischen Landschaften, ihr künstlerisches Erbe und ihre erstklassige Weinproduktion berühmt ist. Die sanften Hügel, geschmückt mit Zypressen und Weinbergen, bilden einige der ikonischsten Kulissen Italiens. Sie gilt weithin als Geburtsort der italienischen Renaissance, mit Florenz als ihrem kulturellen Zentrum. Besucher strömen herbei, um Meisterwerke von Michelangelo und Leonardo da Vinci sowie historische Städte wie Siena und Pisa zu sehen. Die reiche kulinarische Tradition der Region wird durch ihre berühmten Chianti-Weine ergänzt.",
      hu: "Toszkána egy közép-olaszországi régió, amely festői tájairól, művészeti örökségéről és világszínvonalú bortermeléséről híres. A ciprusfákkal és szőlőültetvényekkel díszített dombok Olaszország legikonikusabb tájait alkotják. Széles körben az olasz reneszánsz szülőhelyének tartják, melynek kulturális központja Firenze. A látogatók özönlenek, hogy lássák Michelangelo és Leonardo da Vinci remekműveit, valamint olyan történelmi városokat, mint Siena és Pisa. A régió gazdag kulináris hagyományait híres Chianti borai egészítik ki.",
      ro: "Toscana este o regiune centrală a Italiei faimoasă pentru peisajele sale pitorești, moștenirea artistică și producția de vin de clasă mondială. Dealurile ondulate, împodobite cu chiparoși și podgorii, creează unele dintre cele mai emblematice decoruri ale Italiei. Este considerată pe scară largă locul de naștere al Renașterii italiene, cu Florența ca centru său cultural. Vizitatorii se adună pentru a vedea capodopere de Michelangelo și Leonardo da Vinci, precum și orașe istorice precum Siena și Pisa. Bogata tradiție culinară a regiunii este completată de faimoasele sale vinuri Chianti."
    },
    facts: {
      en: ["Florence is the capital city of the Tuscany region.","Tuscany is home to the famous Leaning Tower of Pisa.","The region is renowned for its Chianti, Brunello di Montalcino, and Vino Nobile di Montepulciano wines.","Italian language is based on the Tuscan dialect, popularized by writers like Dante Alighieri.","It features seven UNESCO World Heritage Sites.","Tuscany has a long coastline on the Tyrrhenian Sea.","The Palio di Siena is a famous medieval horse race held twice a year.","Sunflowers are widely cultivated in the region, blooming beautifully in summer."],
      de: ["Florenz ist die Hauptstadt der Region Toskana.","In der Toskana befindet sich der berühmte Schiefe Turm von Pisa.","Die Region ist bekannt für ihre Weine Chianti, Brunello di Montalcino und Vino Nobile di Montepulciano.","Die italienische Sprache basiert auf dem toskanischen Dialekt, der von Dante Alighieri populär gemacht wurde.","Sie verfügt über sieben UNESCO-Welterbestätten.","Die Toskana hat eine lange Küste am Tyrrhenischen Meer.","Der Palio di Siena ist ein berühmtes mittelalterliches Pferderennen, das zweimal im Jahr stattfindet.","Sonnenblumen werden in der Region weit verbreitet angebaut und blühen im Sommer wunderschön."],
      hu: ["Firenze a Toszkána régió fővárosa.","Toszkánában található a híres pisai ferde torony.","A régió híres Chianti, Brunello di Montalcino és Vino Nobile di Montepulciano borairól.","Az olasz nyelv a toszkán dialektuson alapul, amelyet Dante Alighieri írói tettek népszerűvé.","Hét UNESCO Világörökségi helyszínnel rendelkezik.","Toszkánának hosszú partvonala van a Tirrén-tenger mentén.","A Palio di Siena egy híres középkori lóverseny, amelyet évente kétszer rendeznek meg.","A régióban széles körben termesztenek napraforgót, ami nyáron gyönyörűen virágzik."],
      ro: ["Florența este capitala regiunii Toscana.","În Toscana se află faimosul Turn Înclinat din Pisa.","Regiunea este renumită pentru vinurile sale Chianti, Brunello di Montalcino și Vino Nobile di Montepulciano.","Limba italiană se bazează pe dialectul toscan, popularizat de scriitori precum Dante Alighieri.","Are șapte situri din Patrimoniul Mondial UNESCO.","Toscana are o coastă lungă la Marea Tireniană.","Palio di Siena este o celebră cursă medievală de cai desfășurată de două ori pe an.","Floarea-soarelui este cultivată pe scară largă în regiune, înflorind frumos vara."]
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
      en: "Sicily is the largest island in the Mediterranean Sea and an autonomous region of Italy. It has a deeply complex history, having been ruled by Greeks, Romans, Arabs, Normans, and Spanish, all of whom left their cultural marks. The island's striking landscapes feature stunning coastlines, rugged mountains, and Europe's highest active volcano, Mount Etna. Sicily is famous for its distinct cuisine, vibrant markets, and well-preserved ancient ruins like the Valley of the Temples. It offers a unique blend of cultures that distinguishes it from mainland Italy.",
      de: "Sizilien ist die größte Insel im Mittelmeer und eine autonome Region Italiens. Sie hat eine tief komplexe Geschichte, da sie von Griechen, Römern, Arabern, Normannen und Spaniern beherrscht wurde, die alle ihre kulturellen Spuren hinterlassen haben. Die markanten Landschaften der Insel umfassen atemberaubende Küsten, schroffe Berge und Europas höchsten aktiven Vulkan, den Čtna. Sizilien ist berühmt für seine einzigartige Küche, lebhaften Märkte und gut erhaltenen antiken Ruinen wie das Tal der Tempel. Es bietet eine einzigartige Mischung aus Kulturen, die es vom italienischen Festland unterscheidet.",
      hu: "Szicília a Földközi-tenger legnagyobb szigete és Olaszország autonóm régiója. Mélyen összetett történelemmel rendelkezik, hiszen görögök, rómaiak, arabok, normannok és spanyolok is uralták, akik mind kulturális nyomot hagytak. A sziget lenyűgöző tájai között lenyűgöző tengerpartok, zord hegyek és Európa legmagasabb aktív vulkánja, az Etna is megtalálható. Szicília híres különleges konyhájáról, nyüzsgő piacairól és a jól megőrzött ókori romjairól, mint amilyen a Templomok Völgye. A kultúrák egyedi keverékét kínálja, amely megkülönbözteti a szárazföldi Olaszországtól.",
      ro: "Sicilia este cea mai mare insulă din Marea Mediterană și o regiune autonomă a Italiei. Are o istorie profund complexă, fiind condusă de greci, romani, arabi, normanzi și spanioli, toți lăsându-și amprenta culturală. Peisajele uimitoare ale insulei prezintă coaste uimitoare, munți accidentați și cel mai înalt vulcan activ din Europa, Muntele Etna. Sicilia este faimoasă pentru bucătăria sa distinctă, piețele vibrante și ruinele antice bine conservate, cum ar fi Valea Templelor. Oferă un amestec unic de culturi care o distinge de Italia continentală."
    },
    facts: {
      en: ["Sicily is separated from the Italian mainland by the narrow Strait of Messina.","Mount Etna in Sicily is one of the most active volcanoes in the world.","Palermo is the capital and largest city of the region.","The island has its own distinct language, Sicilian, though Italian is primarily spoken.","The Valley of the Temples in Agrigento is a prime example of Greater Greece architecture.","Cannoli, the famous pastry dessert, originated in Sicily.","Sicily is highly agricultural, known for producing lemons, oranges, and olives.","Archimedes, the famous mathematician and inventor, was born in Syracuse, Sicily."],
      de: ["Sizilien ist durch die schmale Straße von Messina vom italienischen Festland getrennt.","Der Čtna auf Sizilien ist einer der aktivsten Vulkane der Welt.","Palermo ist die Hauptstadt und größte Stadt der Region.","Die Insel hat ihre eigene, eigenständige Sprache, Sizilianisch, obwohl hauptsächlich Italienisch gesprochen wird.","Das Tal der Tempel in Agrigento ist ein Paradebeispiel für die Architektur von Großgriechenland.","Cannoli, das berühmte Gebäckdessert, stammt aus Sizilien.","Sizilien ist stark landwirtschaftlich geprägt und bekannt für den Anbau von Zitronen, Orangen und Oliven.","Archimedes, der berühmte Mathematiker und Erfinder, wurde im sizilianischen Syrakus geboren."],
      hu: ["Szicíliát a keskeny Messinai-szoros választja el az olasz szárazföldtől.","A szicíliai Etna a világ egyik legaktívabb vulkánja.","Palermo a régió fővárosa és legnagyobb városa.","A szigetnek saját, különálló nyelve van, a szicíliai, bár elsősorban olaszt beszélnek.","Az agrigentói Templomok Völgye a Magna Graecia építészetének kiváló példája.","A Cannoli, a híres tésztadesszert Szicíliából származik.","Szicília erősen mezőgazdasági jellegű, ismert citrom-, narancs- és olajbogyó-termesztéséről.","Arkhimédész, a híres matematikus és feltaláló a szicíliai Siracusában született."],
      ro: ["Sicilia este separată de continentul italian de strâmtoarea îngustă Messina.","Muntele Etna din Sicilia este unul dintre cei mai activi vulcani din lume.","Palermo este capitala și cel mai mare oraș al regiunii.","Insula are propria limbă distinctă, siciliana, deși limba italiană este vorbită în principal.","Valea Templelor din Agrigento este un prim exemplu al arhitecturii Greciei Mari.","Cannoli, faimosul desert de patiserie, își are originea în Sicilia.","Sicilia este puternic agricolă, cunoscută pentru producerea de lămâi, portocale și măsline.","Arhimede, celebrul matematician și inventator, s-a născut la Siracuza, Sicilia."]
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
      en: "Veneto is an enchanting region in northeastern Italy, stretching from the Dolomite Mountains to the Adriatic Sea. Its most famous city is Venice, globally renowned for its canals, historic architecture, and romantic gondolas. The region was once the heart of the powerful Venetian Republic, which dominated Mediterranean trade for centuries. Veneto features diverse landscapes, including the Prosecco wine hills, Lake Garda's eastern shore, and vast agricultural plains. It is a vital cultural and economic hub, blending rich history with modern industry.",
      de: "Venetien ist eine bezaubernde Region im Nordosten Italiens, die sich von den Dolomiten bis zur Adria erstreckt. Ihre berühmteste Stadt ist Venedig, weltweit bekannt für ihre Kanäle, historische Architektur und romantische Gondeln. Die Region war einst das Herz der mächtigen Republik Venedig, die den Mittelmeerhandel jahrhundertelang dominierte. Venetien bietet vielfältige Landschaften, darunter die Prosecco-Weinhügel, das Ostufer des Gardasees und weite landwirtschaftliche Ebenen. Es ist ein wichtiges kulturelles und wirtschaftliches Zentrum, das reiche Geschichte mit moderner Industrie verbindet.",
      hu: "Veneto egy varázslatos régió Északkelet-Olaszországban, amely a Dolomitoktól az Adriai-tengerig húzódik. Leghíresebb városa Velence, amely világszerte ismert csatornáiról, történelmi építészetéről és romantikus gondoláiról. A régió egykor a hatalmas Velencei Köztársaság szíve volt, amely évszázadokon át uralta a mediterrán kereskedelmet. Veneto változatos tájakkal rendelkezik, beleértve a Prosecco borvidék dombjait, a Garda-tó keleti partját és hatalmas mezőgazdasági síkságokat. Létfontosságú kulturális és gazdasági központ, amely ötvözi a gazdag történelmet a modern iparral.",
      ro: "Veneto este o regiune încântătoare din nord-estul Italiei, care se întinde de la Munții Dolomiți până la Marea Adriatică. Cel mai faimos oraș al său este Veneția, renumit la nivel global pentru canalele sale, arhitectura istorică și gondolele romantice. Regiunea a fost cândva inima puternicii Republici Venețiene, care a dominat comerțul mediteranean timp de secole. Veneto are peisaje diverse, inclusiv dealurile viticole Prosecco, malul estic al Lacului Garda și vaste câmpii agricole. Este un centru cultural și economic vital, care îmbină istoria bogată cu industria modernă."
    },
    facts: {
      en: ["Venice is the capital of the Veneto region.","Verona, the setting for Shakespeare's Romeo and Juliet, is located in Veneto.","The region is the birthplace of Prosecco, the popular Italian sparkling wine.","The Dolomite mountains in the north offer world-class skiing and hiking.","Veneto was an independent republic for over 1,000 years.","Padua is home to one of the oldest universities in the world, founded in 1222.","Tiramisu, the famous coffee-flavored dessert, originated in the Veneto region.","The region holds a major carnival in Venice, known for elaborate masks and costumes."],
      de: ["Venedig ist die Hauptstadt der Region Venetien.","Verona, der Schauplatz von Shakespeares Romeo und Julia, liegt in Venetien.","Die Region ist der Geburtsort des Prosecco, des beliebten italienischen Schaumweins.","Die Dolomiten im Norden bieten Weltklasse-Skifahren und Wandern.","Venetien war über 1.000 Jahre lang eine unabhängige Republik.","In Padua befindet sich eine der ältesten Universitäten der Welt, die 1222 gegründet wurde.","Tiramisu, das berühmte nach Kaffee schmeckende Dessert, stammt aus Venetien.","Die Region veranstaltet einen großen Karneval in Venedig, der für seine aufwendigen Masken und Kostüme bekannt ist."],
      hu: ["Velence a Veneto régió fővárosa.","Verona, Shakespeare Rómeó és Júliájának helyszíne Venetóban található.","A régió a népszerű olasz habzóbor, a Prosecco szülőhelye.","Az északi Dolomitok hegyei világszínvonalú síelést és túrázást kínálnak.","Veneto több mint 1000 évig független köztársaság volt.","Padova ad otthont a világ egyik legrégebbi egyetemének, amelyet 1222-ben alapítottak.","A Tiramisu, a híres kávé ízű desszert a Veneto régióból származik.","A régió nagy karnevált tart Velencében, amely a bonyolult maszkokról és jelmezekről ismert."],
      ro: ["Veneția este capitala regiunii Veneto.","Verona, cadrul pentru Romeo și Julieta de Shakespeare, este situată în Veneto.","Regiunea este locul de naștere al Prosecco, popularul vin spumant italian.","Munții Dolomiți din nord oferă schi și drumeții de clasă mondială.","Veneto a fost o republică independentă timp de peste 1.000 de ani.","Padova găzduiește una dintre cele mai vechi universități din lume, fondată în 1222.","Tiramisu, faimosul desert cu aromă de cafea, își are originea în regiunea Veneto.","Regiunea organizează un carnaval major în Veneția, cunoscut pentru măștile și costumele elaborate."]
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
      en: "Lazio is a central Italian region bordered by the Tyrrhenian Sea, celebrated for its rich history and profound cultural legacy. It serves as the home to Rome, Italy's capital, which is the heart of the region. Lazio features a diverse landscape that includes volcanic lakes, rugged mountains, and beautiful coastal stretches. It was the cradle of the ancient Roman Empire and the Papal States, leaving behind innumerable archaeological and architectural treasures. Today, it remains a vital political, historical, and touristic center in Italy.",
      de: "Latium ist eine zentralitalienische Region am Tyrrhenischen Meer, berühmt für ihre reiche Geschichte und ihr tiefgreifendes kulturelles Erbe. Sie beheimatet Rom, die Hauptstadt Italiens, die das Herz der Region bildet. Latium bietet eine vielfältige Landschaft, die vulkanische Seen, schroffe Berge und wunderschöne Küstenstreifen umfasst. Es war die Wiege des antiken Römischen Reiches und des Kirchenstaates und hinterließ unzählige archäologische und architektonische Schätze. Heute bleibt es ein wichtiges politisches, historisches und touristisches Zentrum in Italien.",
      hu: "Lazio egy közép-olaszországi régió a Tirrén-tenger partján, amelyet gazdag történelme és mély kulturális öröksége miatt ünnepelnek. Itt található Róma, Olaszország fővárosa, amely a régió szíve. Lazio változatos tájjal rendelkezik, amely vulkáni tavakat, zord hegyeket és gyönyörű tengerparti szakaszokat foglal magába. Az ókori Római Birodalom és a Pápai Állam bölcsője volt, és számtalan régészeti és építészeti kincset hagyott hátra. Ma is létfontosságú politikai, történelmi és turisztikai központ Olaszországban.",
      ro: "Lazio este o regiune din centrul Italiei mărginita de Marea Tireniană, celebrată pentru istoria sa bogată și moștenirea culturală profundă. Găzduiește Roma, capitala Italiei, care este inima regiunii. Lazio prezintă un peisaj divers care include lacuri vulcanice, munți accidentați și întinderi de coastă frumoase. A fost leagănul anticului Imperiu Roman și al Statelor Papale, lăsând în urmă nenumărate comori arheologice și arhitecturale. Astăzi, rămâne un centru politic, istoric și turistic vital în Italia."
    },
    facts: {
      en: ["Rome is both the capital of the Lazio region and of Italy.","Lazio is home to Vatican City, an independent country within Rome.","The region is known for its beautiful volcanic lakes, like Lake Bracciano and Lake Bolsena.","Tivoli in Lazio hosts the spectacular Villa d'Este and Hadrian's Villa.","The ancient port city of Ostia Antica is located in Lazio.","It is famous for classic Roman pasta dishes like Carbonara and Amatriciana.","The Appian Way, one of the earliest Roman roads, runs through Lazio.","The Etruscans lived in the northern part of Lazio before the rise of Rome."],
      de: ["Rom ist sowohl die Hauptstadt der Region Latium als auch von Italien.","Latium beheimatet die Vatikanstadt, ein unabhängiges Land innerhalb Roms.","Die Region ist bekannt für ihre wunderschönen vulkanischen Seen wie den Braccianosee und den Bolsenasee.","Tivoli in Latium beherbergt die spektakuläre Villa d'Este und die Hadriansvilla.","Die antike Hafenstadt Ostia Antica befindet sich in Latium.","Es ist berühmt für klassische römische Nudelgerichte wie Carbonara und Amatriciana.","Die Via Appia, eine der ältesten Römerstraßen, verläuft durch Latium.","Die Etrusker lebten im nördlichen Teil von Latium vor dem Aufstieg Roms."],
      hu: ["Róma egyaránt a Lazio régió és Olaszország fővárosa.","Lazio ad otthont a Vatikánnak, egy Rómán belüli független országnak.","A régió ismert gyönyörű vulkáni tavairól, mint a Bracciano-tó és a Bolsenai-tó.","A laziói Tivoliban található a látványos Villa d'Este és Hadrianus villája.","Ostia Antica ókori kikötővárosa Lazióban található.","Híres a klasszikus római tésztaételekről, mint a Carbonara és az Amatriciana.","A Via Appia, a legkorábbi római utak egyike, Lazión halad keresztül.","Az etruszkok Lazio északi részén éltek Róma felemelkedése előtt."],
      ro: ["Roma este atât capitala regiunii Lazio, cât și a Italiei.","Lazio găzduiește Vaticanul, o țară independentă în interiorul Romei.","Regiunea este cunoscută pentru frumoasele sale lacuri vulcanice, cum ar fi Lacul Bracciano și Lacul Bolsena.","Tivoli din Lazio găzduiește spectaculoasa Villa d'Este și Vila lui Hadrian.","Vechiul oraș portuar Ostia Antica este situat în Lazio.","Este faimos pentru mâncărurile clasice de paste romane precum Carbonara și Amatriciana.","Via Appia, unul dintre primele drumuri romane, trece prin Lazio.","Etruscii au trăit în partea de nord a Lazio înainte de ascensiunea Romei."]
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
      de: "Rom, die 'Ewige Stadt', ist die Hauptstadt Italiens und ein lebendiges Museum der Weltgeschichte, bekannt für das Kolosseum, den Vatikan und seine antike Pracht.",
      hu: "Róma, az „Örök Város”, Olaszország fővárosa és a világtörténelem élő múzeuma, amely a Kolosszeumról, a Vatikánról és ókori pompájáról ismert.",
      ro: "Roma, „Orașul Etern”, este capitala Italiei și un muzeu viu al istoriei universale, cunoscut pentru Colosseum, Vatican și splendoarea sa antică.",
      en: "Rome, the 'Eternal City', is the capital of Italy and a living museum of world history, known for the Colosseum, the Vatican, and its ancient splendor."
    },
    descriptionAdvanced: {
      en: "Rome, the capital city of Italy, is a sprawling, cosmopolitan metropolis with nearly 3,000 years of globally influential art, architecture, and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. Vatican City, headquarters of the Roman Catholic Church, has St. Peter's Basilica and the Vatican Museums, which house masterpieces such as Michelangelo's Sistine Chapel frescoes. Rome blends its historic monuments with a vibrant modern life, renowned cuisine, and bustling street culture.",
      de: "Rom, die Hauptstadt Italiens, ist eine weitläufige, kosmopolitische Metropole, in der fast 3.000 Jahre weltweit einflussreicher Kunst, Architektur und Kultur ausgestellt sind. Antike Ruinen wie das Forum und das Kolosseum zeugen von der Macht des ehemaligen Römischen Reiches. Die Vatikanstadt, der Hauptsitz der römisch-katholischen Kirche, beherbergt den Petersdom und die Vatikanischen Museen mit Meisterwerken wie Michelangelos Fresken in der Sixtinischen Kapelle. Rom verbindet seine historischen Denkmäler mit einem pulsierenden modernen Leben, renommierter Küche und geschäftiger Straßenkultur.",
      hu: "Róma, Olaszország fővárosa egy kiterjedt, kozmopolita metropolisz, ahol közel 3000 év globálisan is jelentős művészete, építészete és kultúrája tekinthető meg. Az ókori romok, mint a Forum és a Colosseum a hajdani Római Birodalom hatalmát idézik. A Vatikánban, a római katolikus egyház központjában található a Szent Péter-bazilika és a Vatikáni Múzeumok, amelyek olyan remekműveknek adnak otthont, mint Michelangelo Sixtus-kápolnai freskói. Róma történelmi emlékeit vibráló modern élettel, híres konyhával és nyüzsgő utcai kultúrával ötvözi.",
      ro: "Roma, capitala Italiei, este o metropolă vastă și cosmopolită, cu o istorie de aproape 3.000 de ani de artă, arhitectură și cultură cu influență globală. Ruinele antice, cum ar fi Forumul și Colosseumul, evocă puterea fostului Imperiu Roman. Vaticanul, sediul Bisericii Catolice, are Bazilica Sfântul Petru și Muzeele Vaticanului, care adăpostesc capodopere precum frescele Capelei Sixtine ale lui Michelangelo. Roma își îmbină monumentele istorice cu o viață modernă vibrantă, bucătărie renumită și o cultură stradală plină de viață."
    },
    facts: {
      en: ["Rome is often referred to as the 'Eternal City'.","It was founded in 753 BC, according to tradition by Romulus and Remus.","The Colosseum is the largest ancient amphitheater ever built.","Rome is the only city in the world to contain a whole state (Vatican City) within its interior.","The Trevi Fountain collects thousands of euros in coins every day, which are donated to charity.","Rome has a museum dedicated entirely to pasta.","The Pantheon in Rome is the most preserved and influential building of ancient Rome.","There are over 900 churches in Rome."],
      de: ["Rom wird oft als die 'Ewige Stadt' bezeichnet.","Es wurde 753 v. Chr. der Tradition nach von Romulus und Remus gegründet.","Das Kolosseum ist das größte jemals erbaute antike Amphitheater.","Rom ist die einzige Stadt der Welt, die einen ganzen Staat (Vatikanstadt) in ihrem Inneren beherbergt.","Der Trevi-Brunnen sammelt jeden Tag Tausende von Euro in Münzen, die für wohltätige Zwecke gespendet werden.","Rom hat ein Museum, das ausschließlich der Pasta gewidmet ist.","Das Pantheon in Rom ist das am besten erhaltene und einflussreichste Gebäude des antiken Roms.","Es gibt über 900 Kirchen in Rom."],
      hu: ["Rómát gyakran az 'Örök Városként' emlegetik.","Kr. e. 753-ban alapították, a hagyomány szerint Romulus és Remus.","A Colosseum a legnagyobb valaha épült ókori amfiteátrum.","Róma az egyetlen város a világon, amelynek belsejében egy egész állam (Vatikán) található.","A Trevi-kút naponta több ezer eurónyi érmét gyűjt össze, amelyet jótékonysági célokra adományoznak.","Rómában található egy múzeum, amelyet teljes egészében a tésztának szenteltek.","A római Pantheon az ókori Róma leginkább megőrzött és leghatásosabb épülete.","Rómában több mint 900 templom található."],
      ro: ["Roma este adesea menționată ca 'Orașul Etern'.","A fost fondată în 753 î.Hr., conform tradiției de Romulus și Remus.","Colosseumul este cel mai mare amfiteatru antic construit vreodată.","Roma este singurul oraș din lume care conține un stat întreg (Vaticanul) în interiorul său.","Fântâna Trevi colectează mii de euro în monede în fiecare zi, care sunt donați în scopuri caritabile.","Roma are un muzeu dedicat în întregime pastelor.","Panteonul din Roma este cea mai conservată și influentă clădire a Romei antice.","Există peste 900 de biserici în Roma."]
    },
    image: "/geo-images/italy/rome.webp",
    factsAdvanced: {
      de: ["Gegründet laut Legende im Jahr 753 v. Chr.", "Hauptstadt des vereinigten Italiens seit 1871", "Einwohnerzahl von etwa 2,8 Millionen Menschen", "Liegt am Fluss Tiber in der Region Latium", "Beherbergt über 900 Kirchen im Stadtgebiet", "Das historische Zentrum ist seit 1980 UNESCO-Erbe"],
      hu: ["A legenda szerint i.e. 753-ban alapították", "1871 óta az egyesült Olaszország fővárosa", "Lakossága körülbelül 2,8 millió fő", "A Tiberis folyó partján, Lazio régióban fekszik", "Több mint 900 templom található a városban", "Történelmi központja 1980 óta UNESCO világörökség"],
      ro: ["Fondată conform legendei în anul 753 î.Hr.", "Capitala Italiei unite începând cu anul 1871", "Populație de aproximativ 2,8 milioane de locuitori", "Situată pe râul Tibru în regiunea Lazio", "Găzduiește peste 900 de biserici în oraș", "Centrul istoric este sit UNESCO din anul 1980"],
      en: ["Founded according to legend in 753 BC", "Capital of united Italy since 1871", "Population of approximately 2.8 million people", "Located on the Tiber River in the Lazio region", "Home to over 900 churches within the city", "The historic center is a UNESCO site since 1980"],
    },
  },
  {
    id: "milan",
    type: "city",
    parent: "reg-lombardia",
    coords: [9.19, 45.4642],
    name: { de: "Mailand", hu: "Milánó", ro: "Milano", en: "Milan" },
    description: {
      en: "Milan, a metropolis in Italy's northern Lombardy region, is a global capital of fashion and design. Home to the national stock exchange, it is a financial hub known for its high-end restaurants and shops. The Gothic Duomo di Milano cathedral and the Santa Maria delle Grazie convent, housing Leonardo da Vinci's mural 'The Last Supper', testify to centuries of art and culture. Milan flawlessly blends historical grandeur with a fast-paced modern lifestyle, attracting business professionals, artists, and tourists alike.",
      de: "Mailand, eine Metropole in der norditalienischen Region Lombardei, ist eine globale Hauptstadt der Mode und des Designs. Als Sitz der nationalen Börse ist es ein Finanzzentrum, das für seine gehobenen Restaurants und Geschäfte bekannt ist. Die gotische Kathedrale Duomo di Milano und das Kloster Santa Maria delle Grazie, das Leonardo da Vincis Wandgemälde 'Das Abendmahl' beherbergt, zeugen von jahrhundertelanger Kunst und Kultur. Mailand verbindet makellos historische Größe mit einem schnelllebigen modernen Lebensstil und zieht Geschäftsleute, Künstler und Touristen gleichermaßen an.",
      hu: "Milánó, az észak-olaszországi Lombardia régió metropolisza, a divat és a design globális fővárosa. A nemzeti tőzsde otthona, és luxuséttermeiről, valamint üzleteiről ismert pénzügyi központ. A gótikus milánói dóm és a Santa Maria delle Grazie kolostor, amely Leonardo da Vinci 'Az utolsó vacsora' című freskójának ad otthont, az évszázados művészetről és kultúráról tanúskodik. Milánó hibátlanul ötvözi a történelmi nagyságot a felgyorsult modern életmóddal, egyaránt vonzva az üzletembereket, művészeket és turistákat.",
      ro: "Milano, o metropolă în regiunea de nord a Lombardiei, este o capitală globală a modei și designului. Găzduind bursa națională, este un centru financiar cunoscut pentru restaurantele și magazinele sale de lux. Catedrala gotică Duomo di Milano și mănăstirea Santa Maria delle Grazie, care găzduiește pictura murală 'Cina cea de Taină' a lui Leonardo da Vinci, mărturisesc secole de artă și cultură. Milano îmbină impecabil grandoarea istorică cu un stil de viață modern alert, atrăgând deopotrivă oameni de afaceri, artiști și turiști."
    },
    facts: {
      en: ["Milan is the second most populous city in Italy after Rome.","The Duomo di Milano took nearly six centuries to complete.","It hosts the Milan Fashion Week, one of the most important fashion events globally.","The Galleria Vittorio Emanuele II is Italy's oldest active shopping mall.","Milan is home to two major football clubs: AC Milan and Inter Milan.","The city has an extensive tram network dating back to 1881.","It was the capital of the Western Roman Empire from 286 to 402 AD.","Milan features the Navigli, a system of navigable and interconnected canals."],
      de: ["Mailand ist nach Rom die zweitbevölkerungsreichste Stadt Italiens.","Der Bau des Mailänder Doms dauerte fast sechs Jahrhunderte.","Es ist Gastgeber der Milan Fashion Week, eines der wichtigsten Modeereignisse weltweit.","Die Galleria Vittorio Emanuele II ist Italiens ältestes aktives Einkaufszentrum.","Mailand beheimatet zwei große Fußballvereine: AC Mailand und Inter Mailand.","Die Stadt verfügt über ein ausgedehntes Straßenbahnnetz, das bis ins Jahr 1881 zurückreicht.","Sie war von 286 bis 402 n. Chr. die Hauptstadt des Weströmischen Reiches.","Mailand verfügt über die Navigli, ein System schiffbarer und miteinander verbundener Kanäle."],
      hu: ["Róma után Milánó Olaszország második legnépesebb városa.","A milánói dóm építése közel hat évszázadig tartott.","Itt rendezik a milánói divathetet, amely globálisan a legfontosabb divatesemények egyike.","A Galleria Vittorio Emanuele II Olaszország legrégebbi aktív bevásárlóközpontja.","Milánó ad otthont két nagy futballklubnak: az AC Milannak és az Inter Milannak.","A város kiterjedt villamoshálózattal rendelkezik, amely 1881-ből származik.","Kr. u. 286 és 402 között a Nyugatrómai Birodalom fővárosa volt.","Milánóban található a Navigli, egy hajózható és egymáshoz kapcsolódó csatornarendszer."],
      ro: ["Milano este al doilea cel mai populat oraș din Italia după Roma.","Finalizarea Domului din Milano a durat aproape șase secole.","Găzduiește Săptămâna Modei de la Milano, unul dintre cele mai importante evenimente de modă la nivel global.","Galleria Vittorio Emanuele II este cel mai vechi centru comercial activ din Italia.","Milano găzduiește două cluburi majore de fotbal: AC Milan și Inter Milan.","Orașul are o rețea extinsă de tramvaie care datează din 1881.","A fost capitala Imperiului Roman de Apus între 286 și 402 d.Hr.","Milano dispune de Navigli, un sistem de canale navigabile și interconectate."]
    },
    image: "/geo-images/italy/milan.webp",
    descriptionAdvanced: {
      de: "Mailand ist das wirtschaftliche Zentrum Italiens und die Hauptstadt der Lombardei. Die Stadt ist weltbekannt für ihre Modeindustrie und das prächtige gotische Bauwerk des Mailänder Doms. Als bedeutender Verkehrsknotenpunkt verbindet sie Norditalien mit dem restlichen Europa.",
      hu: "Milánó Olaszország gazdasági központja és Lombardia régió székhelye. A város világszerte ismert divatiparáról és a gótikus Milánói Dóm lenyűgöző épületéről. Fontos közlekedési csomópontként összeköti Észak-Olaszországot Európa többi részével.",
      ro: "Milano este centrul economic al Italiei și capitala regiunii Lombardia. Orașul este cunoscut la nivel mondial pentru industria modei și structura gotică a Domului din Milano. Ca nod important de transport, face legătura între nordul Italiei și restul Europei.",
      en: "Milan is the economic heart of Italy and the capital of the Lombardy region. The city is world-renowned for its fashion industry and the magnificent Gothic architecture of the Milan Cathedral. As a major transport hub, it connects northern Italy with the rest of Europe.",
    },
    factsAdvanced: {
      de: ["Bau des Mailänder Doms begann im Jahr 1386", "Beherbergt Leonardo da Vincis Abendmahl", "Zweitgrößte Stadt Italiens nach Einwohnerzahl", "Sitz der italienischen Börse (Borsa Italiana)", "Heimat des berühmten Opernhauses La Scala", "Wurde im 4. Jahrhundert v. Chr. von Kelten gegründet"],
      hu: ["A Milánói Dóm építése 1386-ban kezdődött", "Itt található Leonardo da Vinci Utolsó vacsorája", "Olaszország második legnépesebb városa", "Az olasz tőzsde (Borsa Italiana) székhelye", "A híres La Scala operaház otthona", "A kelták alapították az i.e. 4. században"],
      ro: ["Construcția Domului din Milano a început în 1386", "Găzduiește Cina cea de Taină a lui Leonardo da Vinci", "Al doilea cel mai mare oraș din Italia după populație", "Sediul Bursei de Valori din Italia (Borsa Italiana)", "Gazda celebrei opere La Scala din Milano", "Fondat de celți în secolul al IV-lea î.Hr."],
      en: ["Construction of the Duomo began in 1386", "Houses Leonardo da Vinci's Last Supper painting", "Second largest city in Italy by population", "Headquarters of the Italian Stock Exchange", "Home to the famous La Scala opera house", "Founded by Celts in the 4th century BC"],
    },
  },
  {
    id: "venice",
    type: "city",
    parent: "reg-veneto",
    coords: [12.3155, 45.4408],
    name: { de: "Venedig", hu: "Velence", ro: "Veneția", en: "Venice" },
    description: {
      en: "Venice, the capital of northern Italy's Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals, including the Grand Canal thoroughfare lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark's Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city's red roofs. The romantic atmosphere, narrow alleys, and historic bridges make it an incomparable destination for global travelers.",
      de: "Venedig, die Hauptstadt der norditalienischen Region Venetien, ist auf über 100 kleinen Inseln in einer Lagune der Adria erbaut. Es hat keine Straßen, sondern nur Kanäle, darunter den Canal Grande, der von Palästen der Renaissance und Gotik gesäumt ist. Der zentrale Platz, die Piazza San Marco, beherbergt den Markusdom, der mit byzantinischen Mosaiken gefliest ist, und den Glockenturm Campanile, der einen Blick auf die roten Dächer der Stadt bietet. Die romantische Atmosphäre, die engen Gassen und die historischen Brücken machen es zu einem unvergleichlichen Reiseziel für Reisende aus aller Welt.",
      hu: "Velence, Észak-Olaszország Veneto régiójának fővárosa több mint 100 kis szigetre épült egy adriai-tengeri lagúnában. Nincsenek útjai, csak csatornái, köztük a reneszánsz és gótikus palotákkal szegélyezett Canal Grande. A központi téren, a Piazza San Marcón található a bizánci mozaikokkal burkolt Szent Márk-bazilika és a Campanile harangtorony, ahonnan kilátás nyílik a város piros tetőire. Romantikus hangulata, szűk sikátorai és történelmi hídjai egyedülálló célponttá teszik a világutazók számára.",
      ro: "Veneția, capitala regiunii Veneto din nordul Italiei, este construită pe mai mult de 100 de insule mici într-o lagună din Marea Adriatică. Nu are drumuri, doar canale, inclusiv Canal Grande mărginit de palate renascentiste și gotice. Piața centrală, Piazza San Marco, conține Bazilica Sfântul Marcu, pavată cu mozaicuri bizantine, și clopotnița Campanile oferind vederi ale acoperișurilor roșii ale orașului. Atmosfera romantică, aleile înguste și podurile istorice o fac o destinație incomparabilă pentru călătorii globali."
    },
    facts: {
      en: ["Venice is built on millions of petrified wooden piles driven into the marsh.","There are over 400 bridges connecting the city's islands.","The city is famous for its hand-blown Murano glass and intricate Burano lace.","Acqua Alta is the periodic flooding that affects Venice during high tides.","Gondolas are asymmetrical to counterbalance the weight of the gondolier.","The Venice Film Festival is the oldest film festival in the world.","Venice was once an independent maritime republic for over a millennium.","Motorized vehicles are strictly banned in the historic center."],
      de: ["Venedig ist auf Millionen von versteinerten Holzpfählen erbaut, die in den Sumpf getrieben wurden.","Es gibt über 400 Brücken, die die Inseln der Stadt verbinden.","Die Stadt ist berühmt für ihr mundgeblasenes Muranoglas und die aufwendige Burano-Spitze.","Acqua Alta ist die periodische Überschwemmung, die Venedig bei Flut betrifft.","Gondeln sind asymmetrisch, um das Gewicht des Gondolieres auszugleichen.","Die Filmfestspiele von Venedig sind das älteste Filmfestival der Welt.","Venedig war einst über ein Jahrtausend lang eine unabhängige Seerepublik.","Motorisierte Fahrzeuge sind im historischen Zentrum strengstens verboten."],
      hu: ["Velence milliónyi, a mocsárba vert megkövesedett facölöpre épült.","Több mint 400 híd köti össze a város szigeteit.","A város híres kézzel fújt muranói üvegéről és bonyolult buranói csipkéjéről.","Az Acqua Alta az az időszakos áradás, amely Velencét sújtja dagály idején.","A gondolák aszimmetrikusak, hogy ellensúlyozzák a gondoliér súlyát.","A Velencei Nemzetközi Filmfesztivál a világ legrégebbi filmfesztiválja.","Velence egykor független tengeri köztársaság volt több mint egy évezreden át.","A motoros járművek szigorúan tilosak a történelmi központban."],
      ro: ["Veneția este construită pe milioane de piloți de lemn pietrificați înfipți în mlaștină.","Există peste 400 de poduri care conectează insulele orașului.","Orașul este faimos pentru sticla sa de Murano suflată manual și dantela de Burano.","Acqua Alta este inundația periodică care afectează Veneția la maree înaltă.","Gondolele sunt asimetrice pentru a contrabalansa greutatea gondolierului.","Festivalul de Film de la Veneția este cel mai vechi festival de film din lume.","Veneția a fost cândva o republică maritimă independentă timp de peste un mileniu.","Vehiculele motorizate sunt strict interzise în centrul istoric."]
    },
    image: "/geo-images/italy/venice.webp",
    descriptionAdvanced: {
      de: "Venedig ist auf 118 kleinen Inseln in einer flachen Lagune der Adria erbaut. Die Stadt ist berühmt für ihre Kanäle, die gotischen Paläste und das Fehlen von Autoverkehr. Sie war über Jahrhunderte eine mächtige Seerepublik und ein wichtiges Handelszentrum zwischen Orient und Okzident.",
      hu: "Velence 118 kis szigetre épült az Adriai-tenger sekély lagúnájában. A város híres csatornáiról, gótikus palotáiról és az autóforgalom hiányáról. Évszázadokon át hatalmas tengeri köztársaság és fontos kereskedelmi központ volt Kelet és Nyugat között.",
      ro: "Veneția este construită pe 118 insule mici într-o lagună puțin adâncă a Mării Adriatice. Orașul este faimos pentru canalele sale, palatele gotice și absența traficului auto. Timp de secole a fost o republică maritimă puternică și un centru comercial vital.",
      en: "Venice is built on 118 small islands in a shallow lagoon in the Adriatic Sea. The city is famous for its canals, Gothic palaces, and the complete absence of car traffic. For centuries, it was a powerful maritime republic and a key trade link between East and West.",
    },
    factsAdvanced: {
      de: ["Traditionelles Gründungsdatum ist der 25. März 421", "Besteht aus 118 Inseln und über 400 Brücken", "Der Markusplatz ist der tiefste Punkt der Stadt", "Die Rialtobrücke wurde 1591 fertiggestellt", "Besitzt eine eigene Flotte von etwa 400 Gondeln", "UNESCO-Weltkulturerbe seit dem Jahr 1987"],
      hu: ["Hagyományos alapítási dátuma 421. március 25.", "118 szigetből és több mint 400 hídból áll", "A Szent Márk tér a város legalacsonyabb pontja", "A Rialto-híd 1591-ben készült el teljesen", "Saját, körülbelül 400 darabból álló gondolaflottája van", "1987 óta az UNESCO világörökség része"],
      ro: ["Data tradițională a fondării este 25 martie 421", "Compusă din 118 insule și peste 400 de poduri", "Piața San Marco este cel mai jos punct al orașului", "Podul Rialto a fost finalizat în anul 1591", "Are o flotă proprie de aproximativ 400 de gondole", "Înscrisă în patrimoniul UNESCO din anul 1987"],
      en: ["Traditional founding date is March 25, 421 AD", "Consists of 118 islands and over 400 bridges", "St. Mark's Square is the city's lowest point", "The Rialto Bridge was completed in 1591", "Maintains a fleet of approximately 400 gondolas", "UNESCO World Heritage site since 1987"],
    },
  },
  {
    id: "florence",
    type: "city",
    parent: "reg-toscana",
    coords: [11.2558, 43.7696],
    name: { de: "Florenz", hu: "Firenze", ro: "Florența", en: "Florence" },
    description: {
      en: "Florence, capital of Italy's Tuscany region, is home to many masterpieces of Renaissance art and architecture. One of its most iconic sights is the Duomo, a cathedral with a terracotta-tiled dome engineered by Brunelleschi and a bell tower by Giotto. The Galleria dell'Accademia displays Michelangelo's 'David' sculpture. The Uffizi Gallery exhibits Botticelli's 'The Birth of Venus' and da Vinci's 'Annunciation'. Often called the 'Athens of the Middle Ages', Florence is celebrated globally for its massive contribution to literature, science, and the fine arts.",
      de: "Florenz, Hauptstadt der italienischen Region Toskana, beherbergt viele Meisterwerke der Kunst und Architektur der Renaissance. Eine ihrer ikonischsten Sehenswürdigkeiten ist der Dom, eine Kathedrale mit einer terrakottagefliesten Kuppel, die von Brunelleschi entworfen wurde, und einem Glockenturm von Giotto. Die Galleria dell'Accademia zeigt Michelangelos Skulptur 'David'. Die Uffizien stellen Botticellis 'Geburt der Venus' und da Vincis 'Verkündigung' aus. Florenz wird oft das 'Athen des Mittelalters' genannt und weltweit für seinen massiven Beitrag zur Literatur, Wissenschaft und den bildenden Künsten gefeiert.",
      hu: "Firenze, Olaszország Toszkána régiójának fővárosa, a reneszánsz művészet és építészet számos remekművének ad otthont. Egyik legikonikusabb látványossága a Dóm, a Brunelleschi által tervezett terrakotta csempés kupolájú katedrális, és a Giotto-féle harangtorony. A Galleria dell'Accademia mutatja be Michelangelo 'Dávid' szobrát. Az Uffizi Képtár Botticelli 'Vénusz születése' és da Vinci 'Angyali üdvözlet' című művét állítja ki. Gyakran a 'Középkor Athénjának' is nevezik, Firenzét világszerte ünneplik az irodalomhoz, a tudományhoz és a képzőművészethez való hatalmas hozzájárulásáért.",
      ro: "Florența, capitala regiunii Toscana din Italia, găzduiește multe capodopere ale artei și arhitecturii renascentiste. Una dintre cele mai emblematice atracții este Domul, o catedrală cu un dom cu plăci de teracotă proiectat de Brunelleschi și un turn cu clopot de Giotto. Galleria dell'Accademia expune sculptura 'David' a lui Michelangelo. Galeria Uffizi expune 'Nașterea lui Venus' de Botticelli și 'Buna Vestire' de da Vinci. Adesea numită 'Atena Evului Mediu', Florența este celebrată global pentru contribuția sa masivă la literatură, știință și arte plastice."
    },
    facts: {
      en: ["Florence is considered the birthplace of the Italian Renaissance.","The city was governed for centuries by the powerful Medici family.","Ponte Vecchio is a famous medieval bridge over the Arno River known for its jewelry shops.","The Florence Cathedral (Il Duomo) took over 140 years to complete.","Dante Alighieri, the author of the Divine Comedy, was born in Florence.","Florence was briefly the capital of the Kingdom of Italy from 1865 to 1871.","The city suffered a devastating flood in 1966 that damaged many artworks.","The Uffizi Gallery is one of the most visited art museums in the world."],
      de: ["Florenz gilt als der Geburtsort der italienischen Renaissance.","Die Stadt wurde jahrhundertelang von der mächtigen Medici-Familie regiert.","Ponte Vecchio ist eine berühmte mittelalterliche Brücke über den Arno, die für ihre Juweliergeschäfte bekannt ist.","Die Fertigstellung des Florentiner Doms (Il Duomo) dauerte über 140 Jahre.","Dante Alighieri, der Autor der Göttlichen Komödie, wurde in Florenz geboren.","Florenz war von 1865 bis 1871 kurzzeitig die Hauptstadt des Königreichs Italien.","Die Stadt erlitt 1966 eine verheerende Überschwemmung, die viele Kunstwerke beschädigte.","Die Uffizien sind eines der meistbesuchten Kunstmuseen der Welt."],
      hu: ["Firenzét az olasz reneszánsz szülőhelyének tartják.","A várost évszázadokon át a hatalmas Medici család irányította.","A Ponte Vecchio egy híres középkori híd az Arno folyó felett, amely ékszerüzleteiről ismert.","A firenzei dóm (Il Duomo) építése több mint 140 évig tartott.","Dante Alighieri, az Isteni Színjáték szerzője Firenzében született.","Firenze rövid ideig, 1865 és 1871 között az Olasz Királyság fővárosa volt.","A város 1966-ban pusztító árvizet szenvedett, amely sok műalkotást megrongált.","Az Uffizi Képtár a világ egyik leglátogatottabb művészeti múzeuma."],
      ro: ["Florența este considerată locul de naștere al Renașterii italiene.","Orașul a fost guvernat timp de secole de puternica familie Medici.","Ponte Vecchio este un pod medieval celebru peste râul Arno, cunoscut pentru magazinele de bijuterii.","Catedrala din Florența (Il Duomo) a necesitat peste 140 de ani pentru a fi finalizată.","Dante Alighieri, autorul Divinei Comedii, s-a născut la Florența.","Florența a fost pentru scurt timp capitala Regatului Italiei din 1865 până în 1871.","Orașul a suferit o inundație devastatoare în 1966 care a avariat multe opere de artă.","Galeria Uffizi este unul dintre cele mai vizitate muzee de artă din lume."]
    },
    image: "/geo-images/italy/florence.webp",
    descriptionAdvanced: {
      de: "Florenz gilt als die Wiege der Renaissance und war die Heimat bedeutender Künstler wie Michelangelo und Leonardo da Vinci. Die Stadt am Arno beeindruckt durch den Dom von Florenz mit Brunelleschis Kuppel. Unter der Herrschaft der Medici wurde sie zu einem der reichsten Zentren Europas.",
      hu: "Firenzét a reneszánsz bölcsőjének tekintik, olyan művészek otthona volt, mint Michelangelo és Leonardo da Vinci. Az Arno-parti várost a firenzei dóm és Brunelleschi kupolája uralja. A Medici-család uralma alatt Európa egyik leggazdagabb központjává vált.",
      ro: "Florența este considerată leagănul Renașterii și a fost casa unor artiști precum Michelangelo și Leonardo da Vinci. Orașul de pe râul Arno impresionează prin domul cu cupola lui Brunelleschi. Sub dominația familiei Medici, a devenit un centru bogat al Europei.",
      en: "Florence is regarded as the birthplace of the Renaissance and was home to artists like Michelangelo and Leonardo da Vinci. The city on the Arno is dominated by the Florence Cathedral and Brunelleschi's dome. Under Medici rule, it became one of Europe's wealthiest centers.",
    },
    factsAdvanced: {
      de: ["War von 1865 bis 1871 Hauptstadt Italiens", "Die Uffizien beherbergen Werke aus dem 13. Jh.", "Die Kathedrale wurde im Jahr 1436 geweiht", "Der Ponte Vecchio stammt aus dem Jahr 1345", "Heimat von Michelangelos David in der Accademia", "Wurde im Jahr 59 v. Chr. als römische Kolonie gegründet"],
      hu: ["1865 és 1871 között Olaszország fővárosa volt", "Az Uffizi-képtár 13. századi műveket is őriz", "A székesegyházat 1436-ban szentelték fel", "A Ponte Vecchio híd 1345-ben épült meg", "Michelangelo Dávid-szobrának otthona az Accademiában", "I.e. 59-ben alapították római kolóniaként"],
      ro: ["A fost capitala Italiei între 1865 și 1871", "Galeria Uffizi deține opere din secolul al XIII-lea", "Catedrala a fost sfințită în anul 1436", "Podul Ponte Vecchio datează din anul 1345", "Găzduiește statuia David a lui Michelangelo", "Fondat în anul 59 î.Hr. ca colonie romană"],
      en: ["Served as the capital of Italy from 1865 to 1871", "The Uffizi Gallery holds works from the 13th century", "The cathedral was consecrated in 1436", "The Ponte Vecchio was completed in 1345", "Home to Michelangelo's David in the Accademia", "Founded in 59 BC as a Roman colony"],
    },
  },
  {
    id: "naples",
    type: "city",
    parent: "reg-campania",
    coords: [14.2681, 40.8518],
    name: { de: "Neapel", hu: "Nápoly", ro: "Napoli", en: "Naples" },
    
    
    description: {
          "en": "Naples is a vibrant and historic city in southern Italy, located on the picturesque Gulf of Naples. It is globally recognized as the birthplace of pizza and boasts a rich culinary tradition that influences kitchens worldwide. The city's historic center is a UNESCO World Heritage site, featuring ancient ruins, Baroque churches, and narrow, bustling streets. Looming over the city is Mount Vesuvius, the active volcano that famously destroyed nearby Pompeii. Naples is a city of intense energy, blending artistic masterpieces with raw, authentic Italian street life.",
          "de": "Neapel ist eine pulsierende und historische Stadt in Süditalien, gelegen am malerischen Golf von Neapel. Sie ist weltweit als Geburtsort der Pizza anerkannt und verfügt über eine reiche kulinarische Tradition, die Küchen weltweit beeinflusst. Das historische Zentrum der Stadt ist ein UNESCO-Weltkulturerbe und bietet antike Ruinen, barocke Kirchen und enge, belebte Straßen. Über der Stadt thront der Vesuv, der aktive Vulkan, der das nahe gelegene Pompeji zerstörte. Neapel ist eine Stadt voller Energie, die künstlerische Meisterwerke mit dem authentischen italienischen Straßenleben verbindet.",
          "hu": "Nápoly egy nyüzsgő és történelmi város Dél-Olaszországban, a festői Nápolyi-öböl partján. Világszerte a pizza szülőhelyeként tartják számon, és gazdag kulináris hagyományokkal büszkélkedhet, amely világszerte befolyásolja a konyhákat. A város történelmi központja UNESCO világörökségi helyszín, ahol ókori romok, barokk templomok és szűk, nyüzsgő utcák találhatók. A város fölé magasodik a Vezúv, a máig aktív vulkán, amely elpusztította a közeli Pompejit. Nápoly egy intenzív energiájú város, amely a művészeti remekműveket a nyers, autentikus olasz utcai élettel ötvözi.",
          "ro": "Napoli este un oraș vibrant și istoric din sudul Italiei, situat pe pitorescul Golf Napoli. Este recunoscut la nivel mondial ca locul de naștere al pizzei și se mândrește cu o bogată tradiție culinară care influențează bucătăriile din întreaga lume. Centrul istoric al orașului este un sit al Patrimoniului Mondial UNESCO, prezentând ruine antice, biserici baroce și străzi înguste și pline de viață. Deasupra orașului se înalță Vezuviul, vulcanul activ care a distrus faimosul Pompei din apropiere. Napoli este un oraș cu o energie intensă, îmbinând capodoperele artistice cu viața stradală italiană autentică și crudă."
    },
    facts: {
          "en": [
                "Naples is the third-largest municipality in Italy after Rome and Milan.",
                "It is considered the birthplace of the modern pizza, specifically the Margherita.",
                "The historic center of Naples is the largest in Europe.",
                "It is home to the National Archaeological Museum, containing extensive Roman artifacts.",
                "Naples has a vast underground geothermal network of tunnels and catacombs.",
                "The city was founded by Greeks in the first millennium BC.",
                "It features three major castles: Castel dell'Ovo, Castel Nuovo, and Castel Sant'Elmo.",
                "The traditional Neapolitan Nativity scenes (Presepe) are famous worldwide."
          ],
          "de": [
                "Neapel ist nach Rom und Mailand die drittgrößte Gemeinde in Italien.",
                "Es gilt als Geburtsort der modernen Pizza, insbesondere der Margherita.",
                "Das historische Zentrum von Neapel ist das größte in Europa.",
                "Es beherbergt das Archäologische Nationalmuseum mit umfangreichen römischen Artefakten.",
                "Neapel verfügt über ein riesiges unterirdisches geothermisches Netzwerk von Tunneln und Katakomben.",
                "Die Stadt wurde im ersten Jahrtausend v. Chr. von den Griechen gegründet.",
                "Sie verfügt über drei große Burgen: Castel dell'Ovo, Castel Nuovo und Castel Sant'Elmo.",
                "Die traditionellen neapolitanischen Krippen (Presepe) sind weltweit berühmt."
          ],
          "hu": [
                "Róma és Milánó után Nápoly Olaszország harmadik legnagyobb települése.",
                "A modern pizza, különösen a Margherita szülőhelyének tartják.",
                "Nápoly történelmi központja a legnagyobb Európában.",
                "Itt található a Nemzeti Régészeti Múzeum, amely kiterjedt római leleteket őriz.",
                "Nápoly hatalmas földalatti geotermikus alagút- és katakombarendszerrel rendelkezik.",
                "A várost a görögök alapították az i.e. első évezredben.",
                "Három jelentős kastélya van: Castel dell'Ovo, Castel Nuovo és Castel Sant'Elmo.",
                "A hagyományos nápolyi betlehemek (Presepe) világszerte híresek."
          ],
          "ro": [
                "Napoli este a treia cea mai mare municipalitate din Italia, după Roma și Milano.",
                "Este considerat locul de naștere al pizzei moderne, în special Margherita.",
                "Centrul istoric din Napoli este cel mai mare din Europa.",
                "Găzduiește Muzeul Național de Arheologie, care conține artefacte romane extinse.",
                "Napoli are o vastă rețea geotermală subterană de tuneluri și catacombe.",
                "Orașul a fost fondat de greci în primul mileniu î.Hr.",
                "Are trei castele majore: Castel dell'Ovo, Castel Nuovo și Castel Sant'Elmo.",
                "Scenetele tradiționale napolitane ale Nașterii Domnului (Presepe) sunt faimoase în întreaga lume."
          ]
    },
    image: "/geo-images/italy/naples.webp",
    descriptionAdvanced: {
      de: "Neapel ist eine der ältesten kontinuierlich bewohnten Städte der Welt und liegt am Fuße des Vesuvs. Die Stadt ist für ihr reiches kulturelles Erbe und als Geburtsort der Pizza bekannt. Das historische Zentrum gehört zum UNESCO-Weltkulturerbe und bewahrt griechische und römische Strukturen.",
      hu: "Nápoly a világ egyik legrégebbi folyamatosan lakott városa, a Vezúv lábánál fekszik. A város gazdag kulturális örökségéről és a pizza szülőhelyeként ismert. Történelmi központja az UNESCO világörökség része, és görög, valamint római kori emlékeket is őriz.",
      ro: "Napoli este unul dintre cele mai vechi orașe locuite continuu din lume, situat la poalele Vezuviului. Orașul este cunoscut pentru moștenirea culturală bogată și ca loc de naștere al pizzei. Centrul istoric este sit UNESCO și păstrează structuri antice.",
      en: "Naples is one of the world's oldest continuously inhabited cities, located at the foot of Mount Vesuvius. The city is famous for its rich cultural heritage and as the birthplace of pizza. Its historic center is a UNESCO site, preserving Greek and Roman urban layouts.",
    },
    factsAdvanced: {
      de: ["Gegründet von Griechen im 8. Jh. v. Chr.", "Größte historische Altstadt Europas (1700 Hektar)", "Untergrund von Neapel umfasst 450 km Tunnel", "Heimat des Nationalmuseums für Archäologie", "Das Teatro San Carlo wurde 1737 eröffnet", "Population von etwa 960.000 Einwohnern"],
      hu: ["A görögök alapították az i.e. 8. században", "Európa legnagyobb történelmi óvárosa (1700 hektár)", "Földalatti alagútrendszere 450 km hosszú", "Itt található a Nemzeti Régészeti Múzeum", "A Teatro San Carlo operaház 1737-ben nyílt meg", "Lakossága körülbelül 960 000 fő"],
      ro: ["Fondat de greci în secolul al VIII-lea î.Hr.", "Cel mai mare centru istoric din Europa (1700 ha)", "Subteranul are o rețea de 450 km de tuneluri", "Găzduiește Muzeul Național de Arheologie", "Teatrul San Carlo a fost inaugurat în 1737", "Populație de aproximativ 960.000 de locuitori"],
      en: ["Founded by Greeks in the 8th century BC", "Largest historic city center in Europe (1,700 ha)", "Naples Underground includes 450 km of tunnels", "Home to the National Archaeological Museum", "Teatro San Carlo opened its doors in 1737", "Current population of around 960,000 residents"],
    },
  },
  {
    id: "colosseum",
    type: "landmark",
    parent: "rome",
    coords: [12.4922, 41.8902],
    name: { de: "Kolosseum", hu: "Kolosszeum", ro: "Colosseum", en: "Colosseum" },
    
    
    description: {
          "en": "The Colosseum is an iconic ancient amphitheater situated in the center of Rome, built during the Flavian dynasty. Completed in 80 AD, it remains the largest standing amphitheater in the world despite centuries of earthquakes and stone robbers. In its prime, it could hold an estimated 50,000 to 80,000 spectators who gathered to watch gladiatorial contests, animal hunts, and public executions. Today, it stands as a monumental symbol of the grandeur and engineering prowess of the Roman Empire. The Colosseum is one of Italy's most popular tourist attractions and a defining landmark of Rome.",
          "de": "Das Kolosseum ist ein ikonisches antikes Amphitheater im Zentrum von Rom, das während der flavischen Dynastie erbaut wurde. Es wurde 80 n. Chr. fertiggestellt und ist trotz jahrhundertelanger Erdbeben und Steinraub das größte noch stehende Amphitheater der Welt. In seiner Blütezeit fasste es schätzungsweise 50.000 bis 80.000 Zuschauer, die sich versammelten, um Gladiatorenkämpfe, Tierjagden und öffentliche Hinrichtungen zu verfolgen. Heute steht es als monumentales Symbol für die Größe und Ingenieurskunst des Römischen Reiches. Das Kolosseum ist eine der beliebtesten Touristenattraktionen Italiens.",
          "hu": "A Colosseum egy ikonikus ókori amfiteátrum Róma központjában, amely a Flavius-dinasztia idején épült. A Kr. u. 80-ban befejezett épület a világ legnagyobb ma is álló amfiteátruma maradt az évszázadok során pusztító földrengések és kőrablások ellenére. Fénykorában becslések szerint 50 000-80 000 néző befogadására volt alkalmas, akik gladiátorviadalokat, állatvadászatokat és nyilvános kivégzéseket néztek meg. Ma a Római Birodalom nagyságának és mérnöki tudásának monumentális szimbóluma. A Colosseum Olaszország egyik legnépszerűbb turisztikai látványossága.",
          "ro": "Colosseumul este un amfiteatru antic emblematic situat în centrul Romei, construit în timpul dinastiei Flavienilor. Finalizat în 80 d.Hr., rămâne cel mai mare amfiteatru în picioare din lume, în ciuda secolelor de cutremure și a hoților de piatră. În perioada sa de glorie, putea găzdui aproximativ 50.000 până la 80.000 de spectatori care se adunau pentru a urmări lupte cu gladiatori, vânători de animale și execuții publice. Astăzi, reprezintă un simbol monumental al măreției și priceperii inginerești a Imperiului Roman. Colosseumul este una dintre cele mai populare atracții turistice din Italia."
    },
    facts: {
          "en": [
                "The Colosseum is also officially known as the Flavian Amphitheater.",
                "It was built primarily of travertine limestone, tuff, and brick-faced concrete.",
                "The arena floor covered a massive underground labyrinth called the hypogeum.",
                "Admission to the games at the Colosseum was free for all Roman citizens.",
                "It features 80 entrances, allowing huge crowds to enter and exit quickly.",
                "Naval battles (naumachiae) were occasionally staged by flooding the arena.",
                "In 2007, it was recognized as one of the New Seven Wonders of the World.",
                "Over 6 million people visit the Colosseum every year."
          ],
          "de": [
                "Das Kolosseum ist offiziell auch als Flavisches Amphitheater bekannt.",
                "Es wurde hauptsächlich aus Travertin-Kalkstein, Tuffstein und ziegelförmigem Beton erbaut.",
                "Der Arenaboden bedeckte ein riesiges unterirdisches Labyrinth namens Hypogäum.",
                "Der Eintritt zu den Spielen im Kolosseum war für alle römischen Bürger frei.",
                "Es verfügt über 80 Eingänge, wodurch große Menschenmengen schnell ein- und aussteigen konnten.",
                "Seeschlachten (Naumachien) wurden gelegentlich durch Überfluten der Arena inszeniert.",
                "Im Jahr 2007 wurde es als eines der neuen sieben Weltwunder anerkannt.",
                "Mehr als 6 Millionen Menschen besuchen jährlich das Kolosseum."
          ],
          "hu": [
                "A Colosseum hivatalos nevén Flavius-amfiteátrumként is ismert.",
                "Elsősorban travertin mészkőből, tufából és téglaburkolatú betonból épült.",
                "Az aréna padlója egy hatalmas földalatti labirintust, a hypogeumot fedte be.",
                "A Colosseumban tartott játékokra minden római állgampolgár számára ingyenes volt a belépés.",
                "80 bejárattal rendelkezik, ami lehetővé tette a hatalmas tömeg gyors be- és kilépését.",
                "Alkalmanként tengeri csatákat (naumachiae) is rendeztek az aréna elárasztásával.",
                "2007-ben a világ hét új csodájának egyikeként ismerték el.",
                "Évente több mint 6 millió ember látogatja meg a Colosseumot."
          ],
          "ro": [
                "Colosseumul este, de asemenea, cunoscut oficial ca Amfiteatrul Flavian.",
                "A fost construit în principal din calcar travertin, tuf și beton placat cu cărămidă.",
                "Podeaua arenei acoperea un labirint subteran masiv numit hipogeu.",
                "Intrarea la jocurile de la Colosseum era gratuită pentru toți cetățenii romani.",
                "Are 80 de intrări, permițând mulțimilor uriașe să intre și să iasă rapid.",
                "Bătălii navale (naumachiae) erau ocazional puse în scenă prin inundarea arenei.",
                "În 2007, a fost recunoscut drept una dintre cele șapte noi minuni ale lumii.",
                "Peste 6 milioane de oameni vizitează Colosseumul în fiecare an."
          ]
    },
    image: "/geo-images/italy/colosseum.webp",
    descriptionAdvanced: {
      de: "Das Kolosseum ist das größte jemals gebaute Amphitheater der Welt und ein Symbol des Römischen Reiches. Es wurde aus Travertin und Beton errichtet und diente hauptsächlich für Gladiatorenkämpfe. Trotz Erdbeben und Steinraub bleibt es ein beeindruckendes Beispiel antiker Ingenieurskunst.",
      hu: "A Colosseum a világ valaha épült legnagyobb amfiteátruma és a Római Birodalom jelképe. Travertin mészkőből és betonból épült, elsősorban gladiátorviadalok helyszínéül szolgált. A földrengések és a kőpusztítás ellenére az ókori mérnöki tudás lenyűgöző példája marad.",
      ro: "Colosseumul este cel mai mare amfiteatru construit vreodată și un simbol al Imperiului Roman. A fost ridicat din travertin și beton, servind în principal pentru luptele gladiatorilor. În ciuda cutremurelor, rămâne un exemplu impresionant de inginerie antică.",
      en: "The Colosseum is the largest amphitheater ever built and a symbol of the Roman Empire. Constructed of travertine and concrete, it primarily hosted gladiatorial contests and public spectacles. Despite damage from earthquakes, it remains a staggering feat of ancient engineering.",
    },
    factsAdvanced: {
      de: ["Bau wurde unter Kaiser Vespasian 70 n. Chr. begonnen", "Eröffnung erfolgte 80 n. Chr. durch Kaiser Titus", "Fasste zwischen 50.000 und 80.000 Zuschauer", "Ellipse misst 189 Meter in der Länge", "Besaß 80 durchnummerierte Eingangstore", "Das Untergeschoss (Hypogäum) beherbergte Käfige"],
      hu: ["Vespasianus császár kezdte építtetni i.sz. 70-ben", "Titus császár avatta fel i.sz. 80-ban", "50 000 és 80 000 közötti nézőt fogadott be", "Az ellipszis hossza 189 méter", "80 sorszámozott bejárati kapuja volt", "A küzdőtér alatti rész (hypogeum) ketreceket rejtett"],
      ro: ["Construcția a început sub Vespasian în anul 70 d.Hr.", "Inaugurat în anul 80 d.Hr. de către împăratul Titus", "Capacitate între 50.000 și 80.000 de spectatori", "Lungimea elipsei este de 189 de metri", "Avea 80 de porți de acces numerotate", "Subsolul (hipogeul) adăpostea cuști și tuneluri"],
      en: ["Construction began under Vespasian in 70 AD", "Opened in 80 AD by his successor Titus", "Capacity of 50,000 to 80,000 spectators", "Outer dimensions are 189 by 156 meters", "Featured 80 numbered entrance arches", "The hypogeum area housed animal cages and lifts"],
    },
  },
  {
    id: "pisa-tower",
    type: "landmark",
    parent: "reg-toscana",
    coords: [10.3966, 43.723],
    name: { de: "Schiefer Turm von Pisa", hu: "Pisai ferde torony", ro: "Turnul Înclinat din Pisa", en: "Leaning Tower of Pisa" },
    
    
    description: {
          "en": "The Leaning Tower of Pisa is the freestanding bell tower of the cathedral of the Italian city of Pisa. It is known worldwide for its nearly four-degree lean, the result of an unstable foundation on soft ground. Construction began in 1173 and took almost 200 years to complete due to the onset of the tilt and numerous wars. Today, engineers have stabilized the structure, ensuring it will remain safe for future generations. The tower, alongside the cathedral and baptistery in the Piazza dei Miracoli, forms a stunning UNESCO World Heritage site.",
          "de": "Der Schiefe Turm von Pisa ist der freistehende Glockenturm der Kathedrale der italienischen Stadt Pisa. Er ist weltweit bekannt für seine Neigung von fast vier Grad, die auf ein instabiles Fundament auf weichem Boden zurückzuführen ist. Der Bau begann 1173 und dauerte fast 200 Jahre, bedingt durch das Einsetzen der Neigung und zahlreiche Kriege. Heute haben Ingenieure die Struktur stabilisiert, um sicherzustellen, dass sie für zukünftige Generationen sicher bleibt. Der Turm bildet zusammen mit dem Dom und dem Baptisterium an der Piazza dei Miracoli ein atemberaubendes UNESCO-Weltkulturerbe.",
          "hu": "A pisai ferde torony az olaszországi Pisa város katedrálisának különálló harangtornya. Világszerte ismert a közel négy fokos dőléséről, amely a puha talajon lévő instabil alapozás eredménye. Az építkezés 1173-ban kezdődött, és a dőlés megjelenése, valamint számos háború miatt közel 200 évig tartott a befejezése. Mára a mérnökök stabilizálták a szerkezetet, biztosítva, hogy a jövő generációi számára is biztonságos maradjon. A torony a Piazza dei Miracoli téren álló katedrálissal és a keresztelőkápolnával együtt egy lenyűgöző UNESCO világörökségi helyszínt alkot.",
          "ro": "Turnul Înclinat din Pisa este clopotnița de sine stătătoare a catedralei din orașul italian Pisa. Este cunoscut în întreaga lume pentru înclinația sa de aproape patru grade, rezultatul unei fundații instabile pe un teren moale. Construcția a început în 1173 și a durat aproape 200 de ani pentru a fi finalizată din cauza apariției înclinației și a numeroaselor războaie. Astăzi, inginerii au stabilizat structura, asigurându-se că va rămâne sigură pentru generațiile viitoare. Turnul, alături de catedrală și baptisteriu din Piazza dei Miracoli, formează un uimitor sit al Patrimoniului Mondial UNESCO."
    },
    facts: {
          "en": [
                "The tower leans because its foundations were laid on unstable subsoil.",
                "It stands at roughly 56 meters (183 feet) tall on the high side.",
                "Galileo Galilei allegedly dropped cannonballs of different masses from the tower to test the laws of gravity.",
                "There are 251 steps to reach the top of the Leaning Tower.",
                "The tower contains seven bells, one for each note of the musical major scale.",
                "By 1990, the tilt had reached 5.5 degrees, prompting major stabilization efforts.",
                "It survived World War II because an American sergeant refused to call in an artillery strike on it.",
                "The complex it resides in is aptly named the 'Square of Miracles' (Piazza dei Miracoli)."
          ],
          "de": [
                "Der Turm neigt sich, weil seine Fundamente auf instabilem Untergrund gelegt wurden.",
                "Er ist auf der hohen Seite etwa 56 Meter hoch.",
                "Galileo Galilei soll Kanonenkugeln unterschiedlicher Masse vom Turm fallen gelassen haben, um die Gesetze der Schwerkraft zu testen.",
                "Es gibt 251 Stufen, um die Spitze des Schiefen Turms zu erreichen.",
                "Der Turm enthält sieben Glocken, eine für jede Note der musikalischen Dur-Tonleiter.",
                "Bis 1990 hatte die Neigung 5,5 Grad erreicht, was zu umfangreichen Stabilisierungsmaßnahmen führte.",
                "Er überstand den Zweiten Weltkrieg, weil ein amerikanischer Sergeant sich weigerte, einen Artillerieangriff darauf anzufordern.",
                "Der Komplex, in dem er sich befindet, heißt treffend 'Platz der Wunder' (Piazza dei Miracoli)."
          ],
          "hu": [
                "A torony azért dől, mert az alapjait instabil altalajra fektették.",
                "A magasabbik oldalán nagyjából 56 méter magas.",
                "Galileo Galilei a legenda szerint különböző tömegű ágyúgolyókat dobott le a toronyból a gravitáció törvényeinek tesztelésére.",
                "A ferde torony tetejére 251 lépcsőfok vezet.",
                "A toronyban hét harang található, a zenei dúr skála minden hangjához egy.",
                "1990-re a dőlés elérte az 5,5 fokot, ami jelentős stabilizációs erőfeszítéseket tett szükségessé.",
                "Túlélte a második világháborút, mert egy amerikai őrmester nem volt hajlandó tüzérségi csapást kérni rá.",
                "A komplexumot, amelyben található, találóan 'Csodák terének' (Piazza dei Miracoli) hívják."
          ],
          "ro": [
                "Turnul se înclină deoarece fundațiile sale au fost așezate pe un subsol instabil.",
                "Are o înălțime de aproximativ 56 de metri pe partea înaltă.",
                "Se presupune că Galileo Galilei a aruncat ghiulele de tun de mase diferite din turn pentru a testa legile gravitației.",
                "Există 251 de trepte pentru a ajunge în vârful Turnului Înclinat.",
                "Turnul conține șapte clopote, câte unul pentru fiecare notă a gamei muzicale majore.",
                "Până în 1990, înclinația a ajuns la 5,5 grade, determinând eforturi majore de stabilizare.",
                "A supraviețuit celui de-al Doilea Război Mondial pentru că un sergent american a refuzat să ceară un atac de artilerie asupra sa.",
                "Complexul în care se află este denumit în mod adecvat 'Piața Miracolelor' (Piazza dei Miracoli)."
          ]
    },
    image: "/geo-images/italy/pisa-tower.webp",
    descriptionAdvanced: {
      de: "Der Schiefe Turm von Pisa ist der freistehende Glockenturm des Doms in Pisa. Aufgrund eines unzureichenden Fundaments auf weichem Boden begann sich der Turm bereits während der Bauarbeiten im 12. Jahrhundert zu neigen. Er ist Teil des UNESCO-Weltkulturerbes auf der Piazza dei Miracoli.",
      hu: "A pisai ferde torony a pisai dóm különálló harangtornya. A puha talajra épített, nem megfelelő alapozás miatt a torony már az építkezés alatt, a 12. században dőlni kezdett. A Piazza dei Miracoli téren található építmény az UNESCO világörökség része.",
      ro: "Turnul înclinat din Pisa este clopotnița catedralei din Pisa. Din cauza fundației inadecvate pe sol moale, turnul a început să se încline încă din timpul construcției în secolul al XII-lea. Face parte din situl UNESCO situat în Piazza dei Miracoli.",
      en: "The Leaning Tower of Pisa is the freestanding bell tower of Pisa Cathedral. Due to an inadequate foundation on soft ground, the tower began to tilt during construction in the 12th century. It is a key element of the UNESCO World Heritage site in the Piazza dei Miracoli.",
    },
    factsAdvanced: {
      de: ["Grundsteinlegung erfolgte am 9. August 1173", "Bau dauerte über 199 Jahre bis 1372", "Höhe beträgt etwa 55,86 Meter (niedrige Seite)", "Gewicht wird auf 14.500 Tonnen geschätzt", "Besitzt insgesamt 294 Stufen bis zur Spitze", "Wurde zwischen 1990 und 2001 aufwendig stabilisiert"],
      hu: ["Az alapkőletétel 1173. augusztus 9-én történt", "Az építkezés 199 évig tartott, 1372-ben fejezték be", "Magassága az alacsonyabb oldalon 55,86 méter", "Becsült súlya 14 500 tonna", "Összesen 294 lépcsőfok vezet a tetejére", "1990 és 2001 között nagyszabású stabilizáláson esett át"],
      ro: ["Piatra de temelie a fost pusă pe 9 august 1173", "Construcția a durat 199 de ani, până în 1372", "Înălțimea este de 55,86 metri pe partea joasă", "Greutatea estimată este de 14.500 de tone", "Are un total de 294 de trepte până în vârf", "Stabilizat prin lucrări majore între 1990 și 2001"],
      en: ["Foundation stone laid on August 9, 1173", "Construction took 199 years, ending in 1372", "Height is 55.86 meters on the low side", "Estimated weight is approximately 14,500 tonnes", "Contains 294 steps leading to the top bell chamber", "Stabilization work was completed between 1990-2001"],
    },
  },
  {
    id: "pompeii",
    type: "landmark",
    parent: "reg-campania",
    coords: [14.4848, 40.7489],
    name: { de: "Pompeji", hu: "Pompeji", ro: "Pompei", en: "Pompeii" },
    
    
    description: {
          "en": "Pompeii was a vast Roman city located near modern Naples that was buried under volcanic ash and pumice after the catastrophic eruption of Mount Vesuvius in 79 AD. The ash acted as a miraculous preservative, freezing the city in time and providing an incredibly detailed snapshot of everyday Roman life. Discovered in the 16th century, ongoing excavations have revealed houses, temples, amphitheaters, and poignant plaster casts of the victims. Walking through Pompeii allows visitors to experience the streets, bakeries, and homes exactly as they were two millennia ago. It is one of the most significant archaeological sites in the world.",
          "de": "Pompeji war eine riesige römische Stadt in der Nähe des modernen Neapel, die nach dem katastrophalen Ausbruch des Vesuvs im Jahr 79 n. Chr. unter Vulkanasche und Bimsstein begraben wurde. Die Asche wirkte als wundersames Konservierungsmittel, das die Stadt in der Zeit einfror und einen unglaublich detaillierten Schnappschuss des römischen Alltags lieferte. Die im 16. Jahrhundert entdeckten und andauernden Ausgrabungen haben Häuser, Tempel, Amphitheater und ergreifende Gipsabgüsse der Opfer zutage gefördert. Bei einem Spaziergang durch Pompeji können Besucher die Straßen, Bäckereien und Häuser genau so erleben, wie sie vor zwei Jahrtausenden waren. Es ist eine der bedeutendsten archäologischen Stätten der Welt.",
          "hu": "Pompeji egy hatalmas római város volt a mai Nápoly közelében, amelyet vulkáni hamu és habkő temetett maga alá a Vezúv Kr. u. 79-es katasztrofális kitörése után. A hamu csodálatos tartósítószerként hatott, megfagyasztva a várost az időben, és hihetetlenül részletes pillanatképet nyújtva a mindennapi római életről. A 16. században felfedezett folyamatos ásatások házakat, templomokat, amfiteátrumokat és az áldozatok megrendítő gipszmásolatait tárták fel. Pompejiben sétálva a látogatók pontosan olyannak tapasztalhatják meg az utcákat, pékségeket és otthonokat, amilyenek két évezreddel ezelőtt voltak. Ez az egyik legjelentősebb régészeti lelőhely a világon.",
          "ro": "Pompei a fost un vast oraș roman situat lângă Napoliul modern, care a fost îngropat sub cenușă vulcanică și piatră ponce după erupția catastrofală a Vezuviului în 79 d.Hr. Cenușa a acționat ca un conservant miraculos, înghețând orașul în timp și oferind un instantaneu incredibil de detaliat al vieții romane de zi cu zi. Descoperite în secolul al XVI-lea, săpăturile continue au scos la iveală case, temple, amfiteatre și mulaje sfâșietoare din ipsos ale victimelor. Plimbarea prin Pompei permite vizitatorilor să experimenteze străzile, brutăriile și casele exact așa cum erau acum două milenii. Este unul dintre cele mai semnificative situri arheologice din lume."
    },
    facts: {
          "en": [
                "Pompeii was buried under 4 to 6 meters of volcanic ash and lapilli.",
                "The eruption preserved stunning frescoes, mosaics, and everyday objects.",
                "Plaster casts were created by pouring plaster into the voids left by decomposed bodies.",
                "The city featured a complex water system, an amphitheater, and a gymnasium.",
                "Graffiti on the walls of Pompeii offers insights into ancient Roman politics and humor.",
                "It is estimated that around 2,000 people died in Pompeii during the eruption.",
                "The site was initially rediscovered in 1599 but large-scale excavations didn't start until 1748.",
                "Pompeii has been a UNESCO World Heritage Site since 1997."
          ],
          "de": [
                "Pompeji wurde unter 4 bis 6 Metern Vulkanasche und Lapilli begraben.",
                "Der Ausbruch bewahrte atemberaubende Fresken, Mosaike und Alltagsgegenstände.",
                "Gipsabgüsse wurden hergestellt, indem Gips in die Hohlräume gegossen wurde, die von zersetzten Körpern hinterlassen wurden.",
                "Die Stadt verfügte über ein komplexes Wassersystem, ein Amphitheater und eine Turnhalle.",
                "Graffiti an den Wänden von Pompeji bieten Einblicke in die antike römische Politik und den Humor.",
                "Es wird geschätzt, dass etwa 2.000 Menschen während des Ausbruchs in Pompeji starben.",
                "Die Stätte wurde 1599 erstmals wiederentdeckt, aber groß angelegte Ausgrabungen begannen erst 1748.",
                "Pompeji ist seit 1997 ein UNESCO-Weltkulturerbe."
          ],
          "hu": [
                "Pompejit 4-6 méter vulkáni hamu és lapilli temette maga alá.",
                "A kitörés megőrizte a lenyűgöző freskókat, mozaikokat és mindennapi tárgyakat.",
                "Gipszmásolatokat készítettek úgy, hogy gipszet öntöttek a lebomlott testek által hagyott üregekbe.",
                "A város komplex vízrendszerrel, amfiteátrummal és tornateremmel rendelkezett.",
                "A pompeji falakon található falfirkák bepillantást engednek az ókori római politikába és humorba.",
                "A becslések szerint mintegy 2000 ember halt meg Pompejiben a kitörés során.",
                "A helyszínt 1599-ben fedezték fel újra, de a nagyarányú ásatások csak 1748-ban kezdődtek meg.",
                "Pompeji 1997 óta az UNESCO világörökség része."
          ],
          "ro": [
                "Pompei a fost îngropat sub 4 până la 6 metri de cenușă vulcanică și lapilli.",
                "Erupția a păstrat fresce uimitoare, mozaicuri și obiecte de zi cu zi.",
                "Mulajele din ipsos au fost create turnând ipsos în golurile lăsate de corpurile descompuse.",
                "Orașul avea un sistem complex de apă, un amfiteatru și un gimnaziu.",
                "Graffiti-urile de pe pereții din Pompei oferă perspective asupra politicii și umorului antic roman.",
                "Se estimează că aproximativ 2.000 de persoane au murit în Pompei în timpul erupției.",
                "Situl a fost redescoperit inițial în 1599, dar săpăturile la scară largă nu au început până în 1748.",
                "Pompei este un sit al Patrimoniului Mondial UNESCO din 1997."
          ]
    },
    image: "/geo-images/italy/pompeii.webp",
    descriptionAdvanced: {
      de: "Pompeji war eine antike römische Stadt, die im Jahr 79 n. Chr. beim Ausbruch des Vesuvs unter einer dicken Schicht aus Asche und Bimsstein begraben wurde. Die Katastrophe konservierte Gebäude, Alltagsgegenstände und sogar Abdrücke von Opfern. Heute bietet sie einen einzigartigen Einblick in das römische Leben.",
      hu: "Pompeji ókori római város volt, amelyet i.sz. 79-ben a Vezúv kitörése vastag hamu- és horzsakőréteg alá temetett. A katasztrófa konzerválta az épületeket, a mindennapi tárgyakat és az áldozatok alakját is. Ma egyedülálló betekintést nyújt a rómaiak mindennapi életébe.",
      ro: "Pompeii a fost un oraș roman antic îngropat sub un strat gros de cenușă și piatră ponce în urma erupției Vezuviului din anul 79 d.Hr. Dezastrul a conservat clădiri, obiecte cotidiene și chiar amprente ale victimelor. Astăzi oferă o imagine unică asupra vieții romane.",
      en: "Pompeii was an ancient Roman city buried under a thick layer of volcanic ash and pumice after the eruption of Mount Vesuvius in 79 AD. The disaster preserved buildings, everyday objects, and even the voids left by victims. Today, it offers a unique snapshot of Roman life.",
    },
    factsAdvanced: {
      de: ["Wurde im Jahr 1748 offiziell wiederentdeckt", "Ausgrabungsstätte erstreckt sich über 66 Hektar", "Hatte zum Zeitpunkt des Ausbruchs ca. 11.000 Einwohner", "UNESCO-Weltkulturerbe seit dem Jahr 1997", "Das Amphitheater stammt aus dem Jahr 70 v. Chr.", "Vesuv-Ausbruch dauerte schätzungsweise 18 bis 20 Stunden"],
      hu: ["Hivatalosan 1748-ban fedezték fel újra", "A régészeti terület 66 hektáron terül el", "A kitöréskor kb. 11 000 lakosa volt", "1997 óta az UNESCO világörökség része", "Az amfiteátrum i.e. 70-ből származik", "A Vezúv kitörése kb. 18-20 órán át tartott"],
      ro: ["Redescoperit oficial în anul 1748", "Situl arheologic se întinde pe 66 de hectare", "Avea aproximativ 11.000 de locuitori la momentul erupției", "Patrimoniu Mondial UNESCO din anul 1997", "Amfiteatrul datează din anul 70 î.Hr.", "Erupția Vezuviului a durat între 18 și 20 de ore"],
      en: ["Officially rediscovered in the year 1748", "The archaeological site spans 66 hectares", "Estimated population of 11,000 at time of eruption", "UNESCO World Heritage site since 1997", "The amphitheater dates back to 70 BC", "Vesuvius eruption lasted approximately 18-20 hours"],
    },
  },
  {
    id: "vatican",
    type: "landmark",
    parent: "rome",
    coords: [12.4534, 41.9029],
    name: { de: "Vatikanstadt", hu: "Vatikán", ro: "Vatican", en: "Vatican City" },
    
    
    description: {
          "en": "Vatican City, entirely enclaved within Rome, is the smallest independent state in the world both by area and population. As the spiritual and administrative center of the Roman Catholic Church, it is the residence of the Pope. The city-state is a treasure trove of art and architecture, featuring iconic sites like St. Peter's Basilica, the immense St. Peter's Square, and the expansive Vatican Museums. Millions of pilgrims and tourists visit annually to witness the unparalleled beauty of the Sistine Chapel ceiling, painted by Michelangelo. Despite its size, Vatican City holds immense global religious and cultural significance.",
          "de": "Die Vatikanstadt, die vollständig von Rom umschlossen ist, ist flächenmäßig und bevölkerungsmäßig der kleinste unabhängige Staat der Welt. Als spirituelles und administratives Zentrum der römisch-katholischen Kirche ist sie die Residenz des Papstes. Der Stadtstaat ist eine Fundgrube für Kunst und Architektur mit Wahrzeichen wie dem Petersdom, dem riesigen Petersplatz und den weitläufigen Vatikanischen Museen. Millionen von Pilgern und Touristen besuchen sie jährlich, um die unvergleichliche Schönheit der Decke der Sixtinischen Kapelle zu bewundern, die von Michelangelo gemalt wurde. Trotz ihrer Größe hat die Vatikanstadt eine immense weltweite religiöse und kulturelle Bedeutung.",
          "hu": "A Vatikán, amely teljesen Róma területén belül fekszik, a világ legkisebb független állama terület és lakosság szerint is. A római katolikus egyház szellemi és adminisztratív központjaként a pápa rezidenciája. A városállam a művészet és az építészet kincsesbányája, ikonikus helyszínekkel, mint a Szent Péter-bazilika, a hatalmas Szent Péter tér és a kiterjedt Vatikáni Múzeumok. Zarándokok és turisták milliói látogatnak el évente, hogy megcsodálják a Sixtus-kápolna Michelangelo által festett mennyezetének páratlan szépségét. Mérete ellenére a Vatikán hatalmas globális vallási és kulturális jelentőséggel bír.",
          "ro": "Cetatea Vaticanului, complet enclavată în interiorul Romei, este cel mai mic stat independent din lume, atât ca suprafață, cât și ca populație. Fiind centrul spiritual și administrativ al Bisericii Romano-Catolice, este reședința Papei. Orașul-stat este o comoară de artă și arhitectură, prezentând atracții emblematice precum Bazilica Sfântul Petru, imensa Piață Sfântul Petru și vastele Muzee ale Vaticanului. Milioane de pelerini și turiști o vizitează anual pentru a asista la frumusețea de neegalat a tavanului Capelei Sixtine, pictat de Michelangelo. În ciuda dimensiunii sale, Vaticanul are o semnificație religioasă și culturală globală imensă."
    },
    facts: {
          "en": [
                "Vatican City has an area of just 44 hectares (110 acres).",
                "It mints its own euros, prints its own stamps, and issues passports.",
                "The Swiss Guard has been responsible for the Pope's safety since 1506.",
                "The Vatican Museums hold over 70,000 works of art.",
                "St. Peter's Basilica is the largest Christian church in the world.",
                "Vatican City has a population of around 800 citizens.",
                "The Vatican Observatory is one of the oldest astronomical research institutions.",
                "The entire state is a designated UNESCO World Heritage site."
          ],
          "de": [
                "Die Vatikanstadt hat eine Fläche von nur 44 Hektar.",
                "Sie prägt ihre eigenen Euros, druckt eigene Briefmarken und stellt Pässe aus.",
                "Die Schweizergarde ist seit 1506 für die Sicherheit des Papstes verantwortlich.",
                "Die Vatikanischen Museen beherbergen über 70.000 Kunstwerke.",
                "Der Petersdom ist die größte christliche Kirche der Welt.",
                "Die Vatikanstadt hat eine Bevölkerung von rund 800 Bürgern.",
                "Die Vatikanische Sternwarte ist eine der ältesten astronomischen Forschungseinrichtungen.",
                "Der gesamte Staat ist ein ausgewiesenes UNESCO-Weltkulturerbe."
          ],
          "hu": [
                "A Vatikán területe mindössze 44 hektár.",
                "Saját eurót ver, saját bélyegeket nyomtat, és útleveleket bocsát ki.",
                "A Svájci Gárda 1506 óta felel a pápa biztonságáért.",
                "A Vatikáni Múzeumok több mint 70 000 műalkotást őriznek.",
                "A Szent Péter-bazilika a világ legnagyobb keresztény temploma.",
                "A Vatikán lakossága körülbelül 800 fő.",
                "A Vatikáni Obszervatórium az egyik legrégebbi csillagászati kutatóintézet.",
                "Az egész állam az UNESCO világörökség része."
          ],
          "ro": [
                "Cetatea Vaticanului are o suprafață de doar 44 de hectare.",
                "Bate propriile monede euro, tipărește propriile timbre și emite pașapoarte.",
                "Garda Elvețiană este responsabilă de siguranța Papei din 1506.",
                "Muzeele Vaticanului dețin peste 70.000 de opere de artă.",
                "Bazilica Sfântul Petru este cea mai mare biserică creștină din lume.",
                "Vaticanul are o populație de aproximativ 800 de cetățeni.",
                "Observatorul Vaticanului este una dintre cele mai vechi instituții de cercetare astronomică.",
                "Întregul stat este desemnat sit al Patrimoniului Mondial UNESCO."
          ]
    },
    image: "/geo-images/italy/vatican.webp",
    descriptionAdvanced: {
      de: "Vatikanstadt ist der kleinste unabhängige Staat der Welt und liegt als Enklave mitten in Rom. Er ist der Sitz des Papstes und das spirituelle Zentrum der römisch-katholischen Kirche. Der Staat beherbergt unschätzbare Kunstschätze im Petersdom und in den Vatikanischen Museen.",
      hu: "A Vatikán a világ legkisebb független állama, amely enklávéként fekszik Róma közepén. A pápa székhelye és a római katolikus egyház spirituális központja. Az állam felbecsülhetetlen értékű kincseknek ad otthont a Szent Péter-bazilikában és a Vatikáni Múzeumokban.",
      ro: "Vaticanul este cel mai mic stat independent din lume, situat ca o enclavă în centrul Romei. Este reședința Papei și centrul spiritual al Bisericii Romano-Catolice. Statul găzduiește comori inestimabile în Bazilica Sfântul Petru și Muzeele Vaticane.",
      en: "Vatican City is the smallest independent state in the world, located as an enclave within Rome. It is the residence of the Pope and the spiritual heart of the Roman Catholic Church. The state houses priceless art treasures within St. Peter's Basilica and the Vatican Museums.",
    },
    factsAdvanced: {
      de: ["Unabhängig seit den Lateranverträgen von 1929", "Gesamtfläche beträgt lediglich 0,44 Quadratkilometer", "Amtssprachen sind Italienisch und Latein", "Der Petersdom wurde im Jahr 1626 geweiht", "Besitzt eine eigene Armee, die Schweizergarde", "Einwohnerzahl liegt bei etwa 450 bis 800 Personen"],
      hu: ["Az 1929-es lateráni egyezmény óta független", "Teljes területe mindössze 0,44 négyzetkilométer", "Hivatalos nyelvei az olasz és a latin", "A Szent Péter-bazilikát 1626-ban szentelték fel", "Saját hadsereggel rendelkezik (Svájci Gárda)", "Lakossága körülbelül 450 és 800 fő között van"],
      ro: ["Independent din 1929 prin Tratatul de la Lateran", "Suprafața totală este de doar 0,44 kilometri pătrați", "Limbile oficiale sunt italiana și latina", "Bazilica Sfântul Petru a fost sfințită în 1626", "Are propria armată, Garda Elvețiană", "Populația este între 450 și 800 de persoane"],
      en: ["Independent since the Lateran Treaty of 1929", "Total land area is just 0.44 square kilometers", "Official languages are Italian and Latin", "St. Peter's Basilica was consecrated in 1626", "Maintains its own army, the Swiss Guard", "Population ranges between 450 and 800 people"],
    },
  },
  {
    id: "it-herculaneum",
    type: "historical",
    parent: "IT-72",
    coords: [14.348, 40.806],
    name: { de: "Herculaneum", hu: "Herculaneum", ro: "Herculaneum", en: "Herculaneum" },
    
    
    description: {
          "en": "Herculaneum was an ancient Roman town of immense wealth that shared the tragic fate of Pompeii when Mount Vesuvius erupted in 79 AD. Unlike Pompeii, Herculaneum was buried deep beneath a massive flow of volcanic mud and pyroclastic surges, which preserved it in astonishing detail. This unique form of burial protected organic materials such as wooden roofs, beds, doors, and even food. The town was smaller and wealthier than Pompeii, featuring elaborate multistory houses with exquisite mosaics and frescoes. Exploring Herculaneum offers an intimate and stunningly preserved view of elite Roman lifestyle.",
          "de": "Herculaneum war eine antike römische Stadt von immensem Reichtum, die das tragische Schicksal Pompejis teilte, als der Vesuv 79 n. Chr. ausbrach. Im Gegensatz zu Pompeji wurde Herculaneum tief unter einem massiven Strom aus vulkanischem Schlamm und pyroklastischen Strömen begraben, was es in erstaunlichem Detail bewahrte. Diese einzigartige Art der Bestattung schützte organische Materialien wie Holzdächer, Betten, Türen und sogar Lebensmittel. Die Stadt war kleiner und wohlhabender als Pompeji und verfügte über aufwendige mehrstöckige Häuser mit exquisiten Mosaiken und Fresken. Die Erkundung Herculaneums bietet einen intimen und erstaunlich gut erhaltenen Einblick in den elitären römischen Lebensstil.",
          "hu": "Herculaneum hatalmas gazdagságú ókori római város volt, amely osztozott Pompeji tragikus sorsában a Vezúv Kr. u. 79-es kitörésekor. Pompejivel ellentétben Herculaneumot hatalmas vulkáni iszapáram és piroklasztikus ár temette mélyre, amely elképesztő részletességgel őrizte meg. Ez az egyedülálló betemetkezési forma megvédte a szerves anyagokat, például a fatetőket, ágyakat, ajtókat és még az ételeket is. A város kisebb és gazdagabb volt Pompejinél, kidolgozott többszintes házakkal, gyönyörű mozaikokkal és freskókkal rendelkezett. Herculaneum felfedezése bensőséges és lenyűgözően megőrzött bepillantást nyújt az elit római életmódba.",
          "ro": "Herculaneum a fost un oraș roman antic de o bogăție imensă care a împărtășit soarta tragică a Pompeiului când Vezuviul a erupt în 79 d.Hr. Spre deosebire de Pompei, Herculaneum a fost îngropat adânc sub un flux masiv de noroi vulcanic și valuri piroclastice, care l-au păstrat în detalii uimitoare. Această formă unică de îngropare a protejat materialele organice, cum ar fi acoperișurile din lemn, paturile, ușile și chiar alimentele. Orașul era mai mic și mai bogat decât Pompei, prezentând case elaborate cu mai multe etaje, cu mozaicuri și fresce rafinate. Explorarea orașului Herculaneum oferă o vedere intimă și uimitor de bine conservată a stilului de viață de elită roman."
    },
    facts: {
          "en": [
                "Herculaneum was buried under approximately 20 meters of volcanic material.",
                "The town was discovered by accident in 1709 during the digging of a well.",
                "The Villa of the Papyri in Herculaneum contained a vast library of ancient scrolls.",
                "Skeletons found in the boat houses show how residents unsuccessfully tried to escape.",
                "The town is named after the mythical hero Hercules.",
                "Wooden elements, such as carbonized beams and furniture, survived intact.",
                "Many houses retained their upper stories and elaborate balconies.",
                "It forms part of the UNESCO World Heritage site alongside Pompeii and Torre Annunziata."
          ],
          "de": [
                "Herculaneum wurde unter etwa 20 Metern vulkanischen Materials begraben.",
                "Die Stadt wurde 1709 durch Zufall beim Graben eines Brunnens entdeckt.",
                "Die Villa der Papyri in Herculaneum enthielt eine riesige Bibliothek antiker Schriftrollen.",
                "In den Bootshäusern gefundene Skelette zeigen, wie Bewohner erfolglos versuchten zu entkommen.",
                "Die Stadt ist nach dem mythischen Helden Herkules benannt.",
                "Holzelemente wie verkohlte Balken und Möbel haben unversehrt überlebt.",
                "Viele Häuser haben ihre oberen Stockwerke und kunstvollen Balkone behalten.",
                "Sie ist zusammen mit Pompeji und Torre Annunziata Teil des UNESCO-Weltkulturerbes."
          ],
          "hu": [
                "Herculaneumot körülbelül 20 méter vulkáni anyag temette maga alá.",
                "A várost véletlenül fedezték fel 1709-ben kútásás közben.",
                "A herculaneumi Papiruszok villája egy hatalmas ősi tekercskönyvtárat rejtett.",
                "A csónakházakban talált csontvázak megmutatják, hogyan próbáltak a lakosok sikertelenül menekülni.",
                "A város a mitikus hős, Herkules nevét viseli.",
                "A faelemek, mint a szenesedett gerendák és bútorok, épen maradtak.",
                "Sok ház megőrizte felső emeletét és díszes erkélyét.",
                "Pompejivel és Torre Annunziatával együtt az UNESCO világörökség része."
          ],
          "ro": [
                "Herculaneum a fost îngropat sub aproximativ 20 de metri de material vulcanic.",
                "Orașul a fost descoperit din întâmplare în 1709 în timpul săpării unei fântâni.",
                "Vila Papirusurilor din Herculaneum conținea o vastă bibliotecă de pergamente antice.",
                "Scheletele găsite în casele pentru bărci arată cum locuitorii au încercat fără succes să evadeze.",
                "Orașul este numit după eroul mitic Hercule.",
                "Elementele din lemn, cum ar fi grinzile și mobilierul carbonizat, au supraviețuit intacte.",
                "Multe case și-au păstrat etajele superioare și balcoanele elaborate.",
                "Face parte din situl Patrimoniului Mondial UNESCO alături de Pompei și Torre Annunziata."
          ]
    },
    image: "/geo-images/italy/it-herculaneum.webp",
    descriptionAdvanced: {
      de: "Herculaneum war eine antike römische Stadt am Golf von Neapel, die wie Pompeji beim Ausbruch des Vesuvs im Jahr 79 n. Chr. zerstört wurde. Im Gegensatz zu Pompeji wurde Herculaneum nicht von Asche, sondern von einer massiven Schicht aus pyroklastischen Strömen bedeckt, die bis zu 25 Meter dick war. Diese Materie verfestigte sich zu Tuffstein und versiegelte die Stadt luftdicht, wodurch organische Materialien wie Holz, Lebensmittel und sogar Textilien außergewöhnlich gut erhalten blieben. Die Stadt war kleiner und wohlhabender als Pompeji, geprägt von luxuriösen Villen mit aufwendigen Mosaiken und Fresken. Besonders bedeutend ist die Villa dei Papiri, in der eine Bibliothek mit verkohlten Papyrusrollen entdeckt wurde, die heute mit modernster Röntgentechnik entziffert werden. Die systematischen Ausgrabungen begannen im 18. Jahrhundert und offenbarten ein faszinierendes Bild des täglichen Lebens im römischen Kaiserreich. Heute gehört die Ausgrabungsstätte zum UNESCO-Weltkulturerbe und bietet tiefere Einblicke in die antike Architektur als jede andere Ruinenstätte.",
      hu: "Herculaneum egy ókori római város volt a Nápolyi-öböl partján, amely Pompeihez hasonlóan a Vezúv i.sz. 79-es kitörésekor pusztult el. Pompeivel ellentétben Herculaneumot nem hamu, hanem egy masszív, helyenként 25 méter vastag piroklasztikus ár borította be. Ez az anyag tufa kőzetté szilárdult és légmentesen lezárta a várost, aminek köszönhetően a szerves anyagok, például fa, élelmiszer és textilek rendkívül jó állapotban maradtak meg. A város kisebb és tehetősebb volt, mint Pompeji, luxusvillák, bonyolult mozaikok és freskók jellemezték. Különösen jelentős a Villa dei Papiri, ahol szenesedett papirusztekercsekből álló könyvtárat fedeztek fel, amelyeket ma modern röntgen-technológiával fejtenek meg. A szisztematikus ásatások a 18. században kezdődtek, és lenyűgöző képet tártak fel a római császárkori mindennapi életről. Ma a régészeti lelőhely az UNESCO Világörökség része, és mélyebb betekintést nyújt az ókori építészetbe, mint bármely más romterület.",
      ro: "Herculaneum a fost un oraș roman antic situat în Golful Napoli, distrus, la fel ca Pompei, de erupția Vezuviului în anul 79 d.Hr. Spre deosebire de Pompei, Herculaneum nu a fost acoperit de cenușă, ci de un strat masiv de fluxuri piroclastice, gros de până la 25 de metri. Această materie s-a solidificat în tuf și a sigilat orașul ermetic, permițând conservarea excepțională a materialelor organice precum lemnul, alimentele și chiar textilele. Orașul era mai mic și mai bogat decât Pompei, fiind caracterizat prin vile luxoase cu mozaicuri și fresce elaborate. De o importanță deosebită este Villa dei Papiri, unde a fost descoperită o bibliotecă de papirusuri carbonizate, care sunt descifrate astăzi cu ajutorul tehnologiei moderne cu raze X. Săpăturile sistematice au început în secolul al XVIII-lea și au dezvăluit o imagine fascinantă a vieții cotidiene în Imperiul Roman. Astăzi, situl arheologic face parte din Patrimoniul Mondial UNESCO și oferă perspective asupra arhitecturii antice mai profunde decât orice alt sit.",
      en: "Herculaneum was an ancient Roman town located near the Bay of Naples, destroyed alongside Pompeii during the eruption of Mount Vesuvius in 79 AD. Unlike Pompeii, which was buried under falling ash, Herculaneum was submerged by massive pyroclastic flows that reached depths of up to 25 meters. This volcanic material solidified into a dense layer of tuff, creating an airtight seal that preserved organic materials such as wooden furniture, carbonized bread, and even skeletal remains with remarkable detail. The town was smaller and wealthier than Pompeii, serving as a seaside resort for the Roman elite, which is reflected in its high-quality mosaics, intricate frescoes, and grand villas. A standout discovery is the Villa of the Papyri, which contained the only library of the ancient world to survive to modern times. Systematic excavations began in 1738, revealing multi-story buildings that offer unparalleled insights into Roman domestic life. Today, it is a protected UNESCO World Heritage site and a crucial area for archaeological research.",
    },
    factsAdvanced: {
      de: ["Zerstörung durch den Ausbruch des Vesuvs im Jahr 79 n. Chr.", "Verschüttung unter bis zu 25 Meter dicken pyroklastischen Schichten", "Villa dei Papiri enthielt über 1.800 verkohlte Papyrusrollen", "Wurde im Jahr 1738 bei Brunnenbauarbeiten wiederentdeckt", "UNESCO-Weltkulturerbe seit dem Jahr 1997", "Holzstrukturen und Lebensmittel blieben durch Luftabschluss erhalten"],
      hu: ["A várost a Vezúv i.sz. 79-es kitörése pusztította el", "Helyenként 25 méter vastag piroklasztikus réteg fedte be", "A Villa dei Papiri több mint 1800 szenesedett tekercset rejtett", "1738-ban fedezték fel véletlenül kútfúrás közben", "1997 óta az UNESCO Világörökség része", "A légmentes lezárás miatt fa szerkezetek és ételek is megmaradtak"],
      ro: ["Distrus de erupția vulcanului Vezuviu în anul 79 d.Hr.", "Îngropat sub straturi piroclastice de până la 25 de metri grosime", "Villa dei Papiri conținea peste 1.800 de papirusuri carbonizate", "Redescoperit în 1738 în timpul forării unei fântâni", "Inclus în Patrimoniul Mondial UNESCO din anul 1997", "Structurile din lemn și alimentele au fost conservate ermetic"],
      en: ["Destroyed by the eruption of Mount Vesuvius in 79 AD", "Buried under volcanic material up to 25 meters deep", "Villa of the Papyri contained over 1,800 carbonized scrolls", "Accidentally rediscovered in 1738 during well-digging", "Listed as a UNESCO World Heritage site since 1997", "Airtight burial preserved wood structures and carbonized food"],
    },
  },
  {
    id: "it-ostia-antica",
    type: "historical",
    parent: "IT-62",
    coords: [12.290, 41.755],
    name: { de: "Ostia Antica", hu: "Ostia Antica", ro: "Ostia Antica", en: "Ostia Antica" },
    
    
    description: {
          "en": "Ostia Antica was a vital harbor city of ancient Rome, situated at the mouth of the River Tiber on the Tyrrhenian coast. As Rome's main seaport, it was a bustling hub of commerce, trade, and cultural exchange throughout the Empire's height. Over centuries, changing river courses and the silting of the harbor led to its gradual decline and abandonment. Today, Ostia Antica boasts incredibly well-preserved ruins, including multi-story apartment blocks (insulae), a large theater, public baths, and exquisite mosaics. It provides an exceptional glimpse into the daily lives of Rome's working class and merchants.",
          "de": "Ostia Antica war eine wichtige Hafenstadt des antiken Roms, gelegen an der Mündung des Tiber an der tyrrhenischen Küste. Als Haupthafen Roms war sie während des Höhepunkts des Imperiums ein geschäftiges Zentrum für Handel und kulturellen Austausch. Im Laufe der Jahrhunderte führten veränderte Flussläufe und die Verlandung des Hafens zu ihrem allmählichen Niedergang und ihrer Aufgabe. Heute verfügt Ostia Antica über unglaublich gut erhaltene Ruinen, darunter mehrstöckige Wohnblöcke (Insulae), ein großes Theater, öffentliche Bäder und exquisite Mosaike. Es bietet einen außergewöhnlichen Einblick in das tägliche Leben der römischen Arbeiterklasse und Kaufleute.",
          "hu": "Ostia Antica az ókori Róma létfontosságú kikötővárosa volt, a Tiberis folyó torkolatánál, a Tirrén-tenger partján. Róma fő tengeri kikötőjeként a kereskedelem és a kulturális csere nyüzsgő központja volt a birodalom fénykorában. Az évszázadok során a folyómeder változása és a kikötő eliszaposodása a város fokozatos hanyatlásához és elhagyásához vezetett. Ma Ostia Antica hihetetlenül jól megőrzött romokkal büszkélkedhet, köztük többszintes bérházakkal (insulae), egy nagy színházzal, nyilvános fürdőkkel és gyönyörű mozaikokkal. Kivételes bepillantást nyújt Róma munkásosztályának és kereskedőinek mindennapi életébe.",
          "ro": "Ostia Antica a fost un oraș-port vital al Romei antice, situat la gura râului Tibru, pe coasta Mării Tireniene. Ca principal port maritim al Romei, a fost un centru plin de viață al comerțului și schimbului cultural pe tot parcursul apogeului Imperiului. De-a lungul secolelor, schimbarea cursurilor râului și colmatarea portului au dus la declinul și abandonul său treptat. Astăzi, Ostia Antica se mândrește cu ruine incredibil de bine conservate, inclusiv blocuri de apartamente cu mai multe etaje (insulae), un teatru mare, băi publice și mozaicuri rafinate. Oferă o privire excepțională asupra vieții de zi cu zi a clasei muncitoare și a comercianților Romei."
    },
    facts: {
          "en": [
                "Ostia derives its name from 'os' or 'ostium', meaning 'mouth' in Latin.",
                "It is believed to be the first Roman colony, possibly founded by King Ancus Marcius.",
                "The Piazzale delle Corporazioni features mosaics denoting the trades of various merchants.",
                "The city's ancient theater could seat up to 4,000 spectators and is still used today.",
                "Ostia Antica showcases the development of early Roman brick and concrete architecture.",
                "Due to silting, the ruins now lie about three kilometers inland from the sea.",
                "The city was once home to a diverse population of up to 50,000 residents.",
                "Unlike Pompeii, Ostia was abandoned slowly over centuries, not destroyed suddenly."
          ],
          "de": [
                "Ostia leitet seinen Namen von 'os' oder 'ostium' ab, was auf Lateinisch 'Mund' bedeutet.",
                "Es wird angenommen, dass es die erste römische Kolonie ist, möglicherweise gegründet von König Ancus Marcius.",
                "Die Piazzale delle Corporazioni bietet Mosaike, die die Gewerbe verschiedener Kaufleute bezeichnen.",
                "Das antike Theater der Stadt bot Platz für bis zu 4.000 Zuschauer und wird heute noch genutzt.",
                "Ostia Antica zeigt die Entwicklung der frühen römischen Ziegel- und Betonarchitektur.",
                "Aufgrund der Verlandung liegen die Ruinen heute etwa drei Kilometer landeinwärts vom Meer entfernt.",
                "Die Stadt beheimatete einst eine vielfältige Bevölkerung von bis zu 50.000 Einwohnern.",
                "Im Gegensatz zu Pompeji wurde Ostia im Laufe der Jahrhunderte langsam aufgegeben, nicht plötzlich zerstört."
          ],
          "hu": [
                "Ostia neve az 'os' vagy 'ostium' szóból származik, ami latinul 'szájat' jelent.",
                "Ášgy tartják, hogy ez volt az első római gyarmat, amelyet valószínűleg Ancus Marcius király alapított.",
                "A Piazzale delle Corporazioni téren mozaikok láthatók, amelyek a különböző kereskedők mesterségeit jelölik.",
                "A város ókori színházában akár 4000 néző is helyet foglalhatott, és ma is használják.",
                "Ostia Antica a korai római tégla- és betonépítészet fejlődését mutatja be.",
                "Az eliszaposodás miatt a romok ma mintegy három kilométerre a szárazföld belsejében fekszenek.",
                "A város egykor akár 50 000 lakosú, sokszínű népességnek is otthont adott.",
                "Pompejivel ellentétben Ostiát az évszázadok során lassan hagyták el, nem hirtelen pusztult el."
          ],
          "ro": [
                "Ostia își trage numele de la 'os' sau 'ostium', care înseamnă 'gură' în latină.",
                "Se crede că este prima colonie romană, probabil fondată de regele Ancus Marcius.",
                "Piazzale delle Corporazioni prezintă mozaicuri care denotă meseriile diverșilor negustori.",
                "Teatrul antic al orașului putea găzdui până la 4.000 de spectatori și este folosit și astăzi.",
                "Ostia Antica prezintă dezvoltarea arhitecturii romane timpurii din cărămidă și beton.",
                "Din cauza colmatării, ruinele se află acum la aproximativ trei kilometri spre interior față de mare.",
                "Orașul găzduia odată o populație diversă de până la 50.000 de locuitori.",
                "Spre deosebire de Pompei, Ostia a fost abandonată lent de-a lungul secolelor, nu distrusă brusc."
          ]
    },
    image: "/geo-images/italy/it-ostia-antica.webp",
    descriptionAdvanced: {
      de: "Ostia Antica war der strategisch bedeutsame Hafen der antiken Stadt Rom und liegt an der ursprünglichen Mündung des Tibers. Die Stadt wurde im 4. Jahrhundert v. Chr. als militärisches Lager (Castrum) gegründet und entwickelte sich zu einem pulsierenden Handelszentrum mit über 100.000 Einwohnern im 2. Jahrhundert n. Chr. Die Ruinen bieten heute eines der besterhaltenen Beispiele für die römische Stadtplanung und das bürgerliche Leben, einschließlich großer Mietshäuser (Insulae), öffentlicher Bäder, Tempel und eines monumentalen Theaters. Da der Hafen durch Versandung unbrauchbar wurde und die Malaria im Mittelalter die Bevölkerung vertrieb, blieb die Stadt weitgehend unberührt und wurde nicht durch spätere Bauten überdeckt. Besonders beeindruckend ist der Platz der Korporationen, wo Mosaike der verschiedenen Gilden den Fernhandel des Imperiums dokumentieren. Die Ausgrabungen erstrecken sich über 150 Hektar und zeigen auch das religiöse Leben, von christlichen Kirchen bis hin zu Mithräen. Heute ist Ostia Antica ein archäologischer Park von Weltrang, der einen direkten Vergleich zum Alltagsleben in Rom ermöglicht.",
      hu: "Ostia Antica az ókori Róma stratégiailag jelentős kikötővárosa volt, amely a Tiberis folyó eredeti torkolatánál feküdt. A várost az i.e. 4. században alapították katonai táborként (Castrum), majd virágzó kereskedelmi központtá fejlődött, amelynek lakossága az i.sz. 2. században meghaladta a 100 000 főt. A romok ma a római várostervezés és a polgári élet egyik legjobb állapotban fennmaradt példáját nyújtják, beleértve a hatalmas bérházakat (Insulae), nyilvános fürdőket, templomokat és egy monumentális színházat. Mivel a kikötő az eliszaposodás miatt használhatatlanná vált, a középkorban pedig a malária elűzte a lakosságot, a város nagyrészt érintetlen maradt, és nem építettek rá későbbi épületeket. Különösen lenyűgöző a Testületek tere (Piazzale delle Corporazioni), ahol a különböző céhek mozaikjai dokumentálják a birodalom távolsági kereskedelmét. Az ásatások 150 hektáron terülnek el, és a vallási életet is bemutatják a keresztény templomoktól a Mithrász-szentélyekig. Ma Ostia Antica világszínvonalú régészeti park, amely közvetlen összehasonlítást tesz lehetővé a római mindennapokkal.",
      ro: "Ostia Antica a fost portul de o importanță strategică majoră al Romei antice, situat la gura originală de vărsare a râului Tibru. Orașul a fost fondat în secolul al IV-lea î.Hr. ca tabără militară (Castrum) și s-a dezvoltat într-un centru comercial vibrant, cu peste 100.000 de locuitori în secolul al II-lea d.Hr. Ruinele oferă astăzi unul dintre cele mai bine conservate exemple de planificare urbană romană și viață civilă, incluzând blocuri mari de locuințe (Insulae), băi publice, temple și un teatru monumental. Deoarece portul a devenit inutilizabil din cauza colmatării, iar malaria a alungat populația în Evul Mediu, orașul a rămas în mare parte neatins și nu a fost acoperit de construcții ulterioare. Impresionantă este Piazzale delle Corporazioni, unde mozaicurile diferitelor bresle documentează comerțul la distanță al imperiului. Săpăturile se întind pe 150 de hectare și ilustrează viața religioasă diversă, de la biserici creștine la sanctuare dedicate lui Mithra. Astăzi, Ostia Antica este un parc arheologic de renume mondial care permite o incursiune autentică în viața cotidiană romană.",
      en: "Ostia Antica was the principal harbor city of ancient Rome, situated at the original mouth of the Tiber River. Founded in the 4th century BC as a military fort (Castrum) to guard the coastline, it grew into a bustling commercial hub with a population exceeding 100,000 during its peak in the 2nd century AD. The archaeological site provides an exceptional record of Roman town planning and daily life, featuring multi-story apartment blocks (Insulae), public baths, storehouses, and a large theater. Unlike Pompeii, Ostia’s decline was gradual; the shifting of the coastline due to silting rendered its harbor useless, leading to its eventual abandonment in the early Middle Ages. This preservation by neglect means the city was never built over, leaving its brick structures and intricate floor mosaics largely intact. Key highlights include the Square of the Corporations, which served as the center for trade guilds from across the empire. Today, the park covers 150 hectares and offers a profound look at the social, economic, and religious fabric of a Roman port city.",
    },
    factsAdvanced: {
      de: ["Gegründet im 4. Jahrhundert v. Chr. als Militärlager", "Einwohnerzahl erreichte im 2. Jahrhundert n. Chr. über 100.000", "Das Theater wurde unter Agrippa erbaut und fasste 4.000 Zuschauer", "Die Stadt erstreckt sich heute über ein Grabungsfeld von 150 Hektar", "Besitzt über 18 erhaltene Mithräen (Heiligtümer des Mithras)", "Flussverlauf des Tibers änderte sich durch eine Flut im Jahr 1557"],
      hu: ["Az i.e. 4. században alapították katonai táborként", "Lakossága az i.sz. 2. században elérte a 100 000 főt", "A színház Agrippa idején épült és 4000 nézőt fogadott be", "A régészeti terület ma 150 hektáron terül el", "Több mint 18 épségben maradt Mithrász-szentély található itt", "A Tiberis folyása egy 1557-es árvíz miatt változott meg"],
      ro: ["Fondat în secolul al IV-lea î.Hr. ca tabără militară", "Populația a atins peste 100.000 de locuitori în secolul al II-lea d.Hr.", "Teatrul a fost construit sub Agrippa și avea 4.000 de locuri", "Situl arheologic se întinde pe o suprafață de 150 de hectare", "Adăpostește peste 18 sanctuare (mitree) dedicate lui Mithra", "Cursul Tibrului s-a schimbat în urma unei inundații în 1557"],
      en: ["Founded in the 4th century BC as a military fort", "Population reached over 100,000 during the 2nd century AD", "The theater built by Agrippa could seat 4,000 spectators", "The archaeological park covers 150 hectares today", "Contains over 18 well-preserved Mithraic sanctuaries", "The Tiber's course shifted significantly after a flood in 1557"],
    },
  },
  {
    id: "it-siena",
    type: "historical",
    parent: "IT-52",
    coords: [11.330, 43.318],
    name: { de: "Siena", hu: "Siena", ro: "Siena", en: "Siena" },
    
    
    description: {
          "en": "Siena is a stunning medieval city in the heart of Tuscany, distinguished by its medieval brick buildings and its fan-shaped central square, the Piazza del Campo. The city is world-famous for the Palio, a passionate and historic horse race held twice a year around the piazza. Siena's Gothic architecture is epitomized by the magnificent Siena Cathedral (Duomo), which features a striking black and white marble facade. Once a wealthy and powerful city-state that rivaled Florence, its historic center has been designated a UNESCO World Heritage site. It offers a perfect blend of artistic heritage and vibrant local traditions.",
          "de": "Siena ist eine atemberaubende mittelalterliche Stadt im Herzen der Toskana, die sich durch ihre mittelalterlichen Backsteingebäude und den fächerförmigen zentralen Platz, die Piazza del Campo, auszeichnet. Die Stadt ist weltberühmt für den Palio, ein leidenschaftliches und historisches Pferderennen, das zweimal im Jahr rund um die Piazza ausgetragen wird. Sienas gotische Architektur wird durch den prächtigen Dom (Duomo) verkörpert, der eine auffällige Fassade aus schwarzem und weißem Marmor aufweist. Einst ein wohlhabender und mächtiger Stadtstaat, der mit Florenz wetteiferte, wurde das historische Zentrum zum UNESCO-Weltkulturerbe erklärt. Es bietet eine perfekte Mischung aus künstlerischem Erbe und lebendigen lokalen Traditionen.",
          "hu": "Siena egy lenyűgöző középkori város Toszkána szívében, amelyet középkori téglaépületei és a legyező alakú központi tere, a Piazza del Campo tesz különlegessé. A város világhírű a Palio nevű történelmi és szenvedélyes lóversenyről, amelyet évente kétszer rendeznek a tér körül. Siena gótikus építészetének megtestesítője a csodálatos Sienai Dóm (Duomo), amelynek feltűnő fekete-fehér márványhomlokzata van. Egykor egy gazdag és hatalmas városállam volt, amely Firenzével versengett, történelmi központja ma UNESCO világörökségi helyszín. A művészeti örökség és az élénk helyi hagyományok tökéletes keverékét kínálja.",
          "ro": "Siena este un oraș medieval uimitor din inima Toscanei, distins prin clădirile sale medievale din cărămidă și piața centrală în formă de evantai, Piazza del Campo. Orașul este faimos în întreaga lume pentru Palio, o cursă de cai pasionantă și istorică, desfășurată de două ori pe an în jurul pieței. Arhitectura gotică a Sienei este exemplificată de magnifica Catedrală din Siena (Duomo), care prezintă o fațadă izbitoare din marmură alb-negru. Odinioară un oraș-stat bogat și puternic, care a rivalizat cu Florența, centrul său istoric a fost desemnat sit al Patrimoniului Mondial UNESCO. Oferă un amestec perfect de moștenire artistică și tradiții locale vibrante."
    },
    facts: {
          "en": [
                "The historic center of Siena was declared a UNESCO World Heritage site in 1995.",
                "The Palio horse race takes place on July 2 and August 16 every year.",
                "The city's symbol is the she-wolf suckling Romulus and Remus.",
                "The Siena Cathedral's mosaic floor is one of the most ornate in Italy.",
                "The Mangia Tower (Torre del Mangia) stands 102 meters tall offering panoramic views.",
                "Siena is divided into 17 historical wards known as 'Contrade'.",
                "The city was a major banking center in the 13th and 14th centuries.",
                "Sienese art heavily influenced the course of Italian painting during the Renaissance."
          ],
          "de": [
                "Das historische Zentrum von Siena wurde 1995 zum UNESCO-Weltkulturerbe erklärt.",
                "Das Palio-Pferderennen findet jedes Jahr am 2. Juli und 16. August statt.",
                "Das Wahrzeichen der Stadt ist die Wölfin, die Romulus und Remus säugt.",
                "Der Mosaikboden des Sieneser Doms ist einer der kunstvollsten Italiens.",
                "Der Mangia-Turm (Torre del Mangia) ist 102 Meter hoch und bietet einen Panoramablick.",
                "Siena ist in 17 historische Viertel unterteilt, die als 'Contrade' bekannt sind.",
                "Die Stadt war im 13. und 14. Jahrhundert ein wichtiges Bankenzentrum.",
                "Die sienesische Kunst beeinflusste den Verlauf der italienischen Malerei in der Renaissance stark."
          ],
          "hu": [
                "Siena történelmi központját 1995-ben az UNESCO világörökség részévé nyilvánították.",
                "A Palio lóversenyt minden évben július 2-án és augusztus 16-án rendezik.",
                "A város jelképe a Romulust és Remust szoptató anyafarkas.",
                "A sienai dóm mozaikpadlója Olaszország egyik legdíszesebbje.",
                "A Mangia-torony (Torre del Mangia) 102 méter magas, és panorámás kilátást nyújt.",
                "Sienát 17 történelmi negyedre, úgynevezett 'Contrade'-ra osztják.",
                "A város a 13. és a 14. században jelentős bankközpont volt.",
                "A sienai művészet erősen befolyásolta az olasz festészet alakulását a reneszánsz idején."
          ],
          "ro": [
                "Centrul istoric din Siena a fost declarat sit al Patrimoniului Mondial UNESCO în 1995.",
                "Cursa de cai Palio are loc pe 2 iulie și 16 august în fiecare an.",
                "Simbolul orașului este lupoaica alăptându-i pe Romulus și Remus.",
                "Podeaua de mozaic a Catedralei din Siena este una dintre cele mai ornamentate din Italia.",
                "Turnul Mangia (Torre del Mangia) are o înălțime de 102 metri, oferind vederi panoramice.",
                "Siena este împărțită în 17 cartiere istorice cunoscute sub numele de 'Contrade'.",
                "Orașul a fost un important centru bancar în secolele al XIII-lea și al XIV-lea.",
                "Arta sieneză a influențat masiv cursul picturii italiene în timpul Renașterii."
          ]
    },
    image: "/geo-images/italy/it-siena.webp",
    descriptionAdvanced: {
      de: "Siena ist eine der bedeutendsten Kunststädte Italiens und das Zentrum der gleichnamigen Provinz in der Toskana. Die Stadt ist weltberühmt für ihren fächerförmigen Hauptplatz, die Piazza del Campo, auf dem zweimal jährlich das Pferderennen Palio di Siena ausgetragen wird. Das historische Zentrum gehört seit 1995 zum UNESCO-Welterbe und ist ein Musterbeispiel für mittelalterliche Stadtplanung und gotische Architektur. Die Blütezeit der Stadt lag im 13. und 14. Jahrhundert, als die Republik Siena eine der reichsten Mächte Europas war und im ständigen Wettbewerb mit Florenz stand. Der Dom von Siena, Santa Maria Assunta, gilt mit seiner schwarz-weiß gestreiften Marmorfassade als eines der bedeutendsten Bauwerke der italienischen Gotik. Heute ist die Stadt zudem Sitz der Universität Siena, einer der ältesten Hochschulen des Landes, die bereits im Jahr 1240 gegründet wurde. Die Architektur der Stadt blieb über Jahrhunderte nahezu unverändert, da nach der Pestepidemie von 1348 und der späteren Eroberung durch Florenz im Jahr 1555 kaum neue Bauprojekte realisiert wurden.",
      hu: "Siena Toszkána egyik legfontosabb városa, amely híres középkori hangulatáról és gótikus építészetéről. A város központja a legyező alakú Piazza del Campo, amely Európa egyik legszebb tere, és itt rendezik meg évente kétszer a híres Palio lovasversenyt. A település aranykora a 13. és 14. századra tehető, amikor a Sienai Köztársaság Firenze legfőbb riválisa volt a kereskedelemben és a művészetekben. A sziénai dóm, a Santa Maria Assunta, a fehér és fekete márvány díszítésével az olasz gótika egyik mesterműve, amelynek építése a 12. században kezdődött. Az 1348-as nagy pestisjárvány tragikus módon vetett véget a város terjeszkedésének, így a történelmi városmag szinte érintetlenül maradt fenn az utókor számára. Siena belvárosát 1995-ben az UNESCO a Világörökség részévé nyilvánította. A város kulturális életének ma is meghatározó eleme a 17 történelmi városnegyed, azaz a „contrade”, amelyek közötti rivalizálás a mai napig élő hagyomány a helyiek körében.",
      ro: "Siena este un oraș istoric din regiunea Toscana, renumit pentru arhitectura sa medievală bine conservată și pentru patrimoniul său artistic excepțional. Centrul istoric al orașului, inclus în lista Patrimoniului Mondial UNESCO în 1995, este dominat de Piazza del Campo, una dintre cele mai mari piețe medievale din Europa. Această piață este locul unde se desfășoară celebrul Palio di Siena, o cursă istorică de cai care datează din secolul al XVII-lea. Catedrala din Siena, un exemplu magnific de arhitectură gotică italiană, impresionează prin fațada sa din marmură albă și neagră și prin interiorul bogat decorat cu opere de artă semnate de Donatello și Michelangelo. Orașul a cunoscut o perioadă de maximă înflorire în secolele al XIII-lea și al XIV-lea, fiind un centru financiar și comercial major care rivaliza direct cu Florența. Universitatea din Siena, fondată în 1240, este una dintre cele mai vechi universități din lume și continuă să fie un pilon cultural important. Structura urbană a Senei a rămas practic neschimbată de secole, oferind o perspectivă autentică asupra vieții urbane din perioada gotică târzie.",
      en: "Siena is a historic city in Tuscany, globally recognized for its remarkably preserved medieval cityscape and significant artistic heritage. The heart of the city is the shell-shaped Piazza del Campo, considered one of Europe's greatest medieval squares, where the famous Palio horse race is held twice every year. The city's golden age occurred during the 13th and 14th centuries when the Republic of Siena was a major financial and commercial power, competing directly with neighboring Florence. The Siena Cathedral, or Duomo di Santa Maria Assunta, is a masterpiece of Italian Gothic architecture, characterized by its striking facade and interior of black and white striped marble. In 1995, the entire historic center was designated a UNESCO World Heritage site for its architectural integrity and urban planning. The city is also home to the University of Siena, founded in 1240, making it one of the oldest continuously operating universities in the world. Today, Siena remains organized into 17 historical districts called 'contrade', which maintain a strong sense of community identity through centuries-old traditions and social structures.",
    },
    factsAdvanced: {
      de: ["Die Piazza del Campo hat einen Umfang von 333 Metern und ist in 9 Segmente unterteilt.", "Die Universität Siena wurde im Jahr 1240 offiziell als Hochschule gegründet.", "Der Torre del Mangia ist 88 Meter hoch und wurde zwischen 1325 und 1348 erbaut.", "Das historische Zentrum Sienas wurde 1995 in das UNESCO-Welterbe aufgenommen.", "Die Republik Siena kapitulierte im Jahr 1555 nach einer langen Belagerung gegenüber Florenz.", "Die schwarz-weißen Farben der Stadt gehen auf die legendären Gründer Senius und Aschius zurück."],
      hu: ["A Piazza del Campo teret kilő kilenc részre osztották a Kilencek Tanácsának tiszteletére.", "A sziénai egyetem (Università di Siena) alapítási éve 1240.", "A Torre del Mangia harangtorony magassága 88 méter, és 1348-ban fejezték be.", "A város történelmi központja 1995 óta az UNESCO Világörökség része.", "A Palio di Siena lovasversenyt minden évben július 2-án és augusztus 16-án rendezik meg.", "A dóm alapkövét a 12. század közepén fektették le, mai formáját 1382-ben nyerte el."],
      ro: ["Piazza del Campo este împărțită în 9 secțiuni, simbolizând Consiliul celor Nouă care a guvernat orașul.", "Torre del Mangia are o înălțime de 88 de metri și a fost construit între 1325 și 1348.", "Universitatea din Siena a fost înființată oficial în anul 1240.", "Centrul istoric a fost inclus în Patrimoniul Mondial UNESCO în anul 1995.", "Catedrala Santa Maria Assunta a fost sfințită în forma sa actuală în secolul al XIII-lea.", "Populația orașului a scăzut drastic în timpul ciumei din 1348, de la 50.000 la circa 15.000 de locuitori."],
      en: ["Piazza del Campo is divided into 9 sectors to represent the Council of Nine who ruled the city.", "The Torre del Mangia stands 88 meters tall and was constructed between 1325 and 1348.", "The University of Siena was officially established in 1240, one of the first in Europe.", "Siena's historic center was added to the UNESCO World Heritage list in 1995.", "The Palio di Siena horse race takes place annually on July 2nd and August 16th.", "The city's black and white colors reference the mythical founders, Senius and Aschius."],
    },
  },
  {
    id: "it-san-gimignano",
    type: "historical",
    parent: "IT-52",
    coords: [11.043, 43.468],
    name: { de: "San Gimignano", hu: "San Gimignano", ro: "San Gimignano", en: "San Gimignano" },
    
    
    description: {
          "en": "San Gimignano is a highly distinctive small walled medieval hill town in the province of Siena, Tuscany. Known as the 'Town of Fine Towers', it is famous for its surviving medieval tower houses that create an unforgettable skyline, often compared to a medieval Manhattan. At its peak, the town had 72 towers built by patrician families to display their wealth and power. Fourteen of these towers have survived the centuries. The historic center, with its authentic medieval atmosphere, charming piazzas, and Romanesque and Gothic architecture, is a UNESCO World Heritage site.",
          "de": "San Gimignano ist eine sehr markante, kleine, ummauerte mittelalterliche Hügelstadt in der Provinz Siena, Toskana. Bekannt als die 'Stadt der feinen Türme', ist sie berühmt für ihre erhaltenen mittelalterlichen Geschlechtertürme, die eine unvergessliche Skyline schaffen, die oft mit einem mittelalterlichen Manhattan verglichen wird. Auf ihrem Höhepunkt hatte die Stadt 72 Türme, die von Patrizierfamilien erbaut wurden, um ihren Reichtum und ihre Macht zu demonstrieren. Vierzehn dieser Türme haben die Jahrhunderte überlebt. Das historische Zentrum mit seiner authentischen mittelalterlichen Atmosphäre, bezaubernden Piazzas und romanischen sowie gotischen Architektur ist ein UNESCO-Weltkulturerbe.",
          "hu": "San Gimignano egy rendkívül jellegzetes, fallal körülvett kis középkori hegyvidéki város Siena tartományban, Toszkánában. A 'Szép tornyok városaként' ismert, és híres fennmaradt középkori lakótornyairól, amelyek felejthetetlen sziluettet alkotnak, gyakran egy középkori Manhattanhez hasonlítják. Fénykorában a városnak 72 tornya volt, amelyeket a patrícius családok építettek gazdagságuk és hatalmuk fitogtatására. E tornyok közül tizennégy vészelte át az évszázadokat. A történelmi központ autentikus középkori hangulatával, hangulatos tereivel, valamint román és gótikus építészetével az UNESCO világörökség része.",
          "ro": "San Gimignano este un mic oraș medieval pe deal, foarte distinctiv, cu ziduri, din provincia Siena, Toscana. Cunoscut drept 'Orașul Turnurilor Frumoase', este faimos pentru casele sale turn medievale supraviețuitoare care creează un orizont de neuitat, adesea comparat cu un Manhattan medieval. La apogeul său, orașul avea 72 de turnuri construite de familiile patriciene pentru a-și afișa bogăția și puterea. Paisprezece dintre aceste turnuri au supraviețuit secolelor. Centrul istoric, cu atmosfera sa medievală autentică, piețele fermecătoare și arhitectura romanică și gotică, este un sit al Patrimoniului Mondial UNESCO."
    },
    facts: {
          "en": [
                "San Gimignano's historic center has been a UNESCO World Heritage site since 1990.",
                "The town produces Vernaccia di San Gimignano, one of Italy's finest white wines.",
                "The tallest surviving tower is the Torre Grossa, standing at 54 meters.",
                "The town was an important relay point for pilgrims traveling to or from Rome on the Via Francigena.",
                "San Gimignano suffered heavily from the Black Death in 1348, causing its decline.",
                "The Collegiate Church contains stunning 14th-century frescoes depicting biblical scenes.",
                "Saffron has been cultivated in the area since the Middle Ages.",
                "Despite its small size, it draws millions of international visitors every year."
          ],
          "de": [
                "Das historische Zentrum von San Gimignano ist seit 1990 UNESCO-Weltkulturerbe.",
                "Die Stadt produziert Vernaccia di San Gimignano, einen der besten Weißweine Italiens.",
                "Der höchste erhaltene Turm ist der Torre Grossa mit einer Höhe von 54 Metern.",
                "Die Stadt war ein wichtiger Relais-Punkt für Pilger auf der Via Francigena nach oder von Rom.",
                "San Gimignano litt 1348 stark unter dem Schwarzen Tod, was zu seinem Niedergang führte.",
                "Die Stiftskirche enthält atemberaubende Fresken aus dem 14. Jahrhundert mit biblischen Szenen.",
                "Safran wird in der Gegend seit dem Mittelalter angebaut.",
                "Trotz ihrer geringen Größe zieht sie jedes Jahr Millionen internationaler Besucher an."
          ],
          "hu": [
                "San Gimignano történelmi központja 1990 óta az UNESCO világörökség része.",
                "A város a Vernaccia di San Gimignano nevű, Olaszország egyik legjobb fehérborát termeli.",
                "A legmagasabb fennmaradt torony a Torre Grossa, amely 54 méter magas.",
                "A város fontos pihenőhely volt a Rómába vagy onnan a Via Francigenán utazó zarándokok számára.",
                "San Gimignano sokat szenvedett az 1348-as fekete halál idején, ami hanyatlását okozta.",
                "Az apátsági templom lenyűgöző, 14. századi freskókat rejt, amelyek bibliai jeleneteket ábrázolnak.",
                "A középkor óta termesztenek sáfrányt a környéken.",
                "Kis mérete ellenére évente több millió nemzetközi látogatót vonz."
          ],
          "ro": [
                "Centrul istoric din San Gimignano este sit al Patrimoniului Mondial UNESCO din 1990.",
                "Orașul produce Vernaccia di San Gimignano, unul dintre cele mai bune vinuri albe din Italia.",
                "Cel mai înalt turn care a supraviețuit este Torre Grossa, având 54 de metri.",
                "Orașul a fost un punct de releu important pentru pelerinii care călătoreau spre sau dinspre Roma pe Via Francigena.",
                "San Gimignano a suferit puternic din cauza Morții Negre în 1348, provocând declinul său.",
                "Biserica Colegială conține fresce uimitoare din secolul al XIV-lea, care înfățișează scene biblice.",
                "Șofranul este cultivat în zonă din Evul Mediu.",
                "În ciuda dimensiunilor sale mici, atrage milioane de vizitatori internaționali în fiecare an."
          ]
    },
    image: "/geo-images/italy/it-san-gimignano.webp",
    descriptionAdvanced: {
      de: "San Gimignano ist eine Kleinstadt in der Toskana, die vor allem für ihre erhaltenen mittelalterlichen Geschlechtertürme bekannt ist, die ihr den Beinamen „Manhattan des Mittelalters“ eingebracht haben. Ursprünglich verfügte die Stadt über 72 dieser Wohntürme, von denen heute noch 14 das Stadtbild prägen. Diese Türme wurden im 12. und 13. Jahrhundert von wohlhabenden Adelsfamilien als Statussymbole und Verteidigungsanlagen errichtet. Die strategische Lage an der Via Francigena, dem Pilgerweg nach Rom, verhalf der Stadt zu erheblichem Reichtum durch Handel und Landwirtschaft. Das historische Zentrum gehört seit 1990 zum UNESCO-Welterbe und gilt als eines der besterhaltenen Beispiele einer mittelalterlichen Stadtstruktur in Italien. Neben den Türmen ist San Gimignano für den Weißwein Vernaccia di San Gimignano bekannt, der bereits seit dem 13. Jahrhundert in der Region angebaut wird. Die Architektur umfasst bedeutende romanische und gotische Bauwerke, darunter die Kollegiatkirche Santa Maria Assunta mit ihren Freskenzyklen. Die Stadt verlor Mitte des 14. Jahrhunderts nach der Pest ihre Unabhängigkeit und kam unter die Herrschaft von Florenz.",
      hu: "San Gimignano egy festői kisváros Toszkánában, amelynek jellegzetes körvonala és fennmaradt középkori lakótornyai miatt „a középkor Manhattanje” nevet kapta. A fénykorban, a 12. és 13. században a gazdag családok összesen 72 tornyot emeltek, hogy fitogtassák hatalmukat és gazdagságukat, ebből mára 14 maradt épségben. A város fekvése a Via Francigena mentén, amely a Rómába tartó zarándokok főútvonala volt, biztosította a település gazdasági fellendülését. 1990-ben az UNESCO a világörökség részévé nyilvánította a történelmi központot, amely szinte tökéletesen megőrizte 13-14. századi szerkezetét. A Collegiata-templom freskói, amelyek bibliai jeleneteket ábrázolnak, a középkori művészet kiemelkedő alkotásai közé tartoznak. San Gimignano gasztronómiája is jelentős, különösen a Vernaccia di San Gimignano nevű fehérboráról híres, amelyet már 1276-ban is említenek a források. A város hanyatlása az 1348-as pestisjárvány után kezdődött, amikor is Firenze fennhatósága alá került, de éppen ez a gazdasági stagnálás segített megőrizni középkori arculatát.",
      ro: "San Gimignano este un mic oraș medieval din Toscana, faimos la nivel mondial pentru cele 14 turnuri de piatră care îi definesc orizontul, oferindu-i porecla de „Manhattan-ul Evului Mediu”. În perioada de glorie a orașului, în secolele al XII-lea și al XIII-lea, existau aproximativ 72 de astfel de turnuri-locuință, construite de familiile nobile rivale ca simbol al puterii și bogăției. Prosperitatea orașului s-a datorat poziției sale strategice pe Via Francigena, principala rută de pelerinaj către Roma, facilitând comerțul cu produse agricole și șofran. Centrul istoric a fost inclus în Patrimoniul Mondial UNESCO în anul 1990, fiind considerat un exemplu excepțional de urbanism medieval. Un obiectiv cultural major este Collegiata di Santa Maria Assunta, o catedrală romanică ce adăpostește cicluri de fresce din secolul al XIV-lea. Regiunea este de asemenea celebră pentru producția de Vernaccia di San Gimignano, un vin alb de înaltă calitate care a fost primul vin italian ce a primit statutul DOC în 1966. După epidemia de ciumă din 1348, orașul a intrat sub dominația Florenței, ceea ce a oprit dezvoltarea sa ulterioară, dar a permis conservarea structurii sale istorice.",
      en: "San Gimignano is a small hill town in Tuscany, renowned for its medieval architecture and the remaining 14 stone towers that create a unique skyline, earning it the nickname 'the Manhattan of the Middle Ages.' During the town's height in the 12th and 13th centuries, as many as 72 tower-houses were built by wealthy rival families as symbols of their power and wealth. Its strategic location on the Via Francigena, the main pilgrimage route to Rome, fostered significant economic growth through the trade of agricultural products and saffron. In 1990, the historic center was designated a UNESCO World Heritage site for being an outstanding example of a medieval urban settlement. The town's Collegiate Church contains remarkable 14th-century frescoes depicting biblical scenes, created by masters of the Sienese school. San Gimignano is also famous for its Vernaccia di San Gimignano, a white wine produced in the area since at least the 13th century. The town's decline began after the Black Death in 1348, leading to its submission to Florence, which inadvertently helped preserve its medieval character by halting further modernization.",
    },
    factsAdvanced: {
      de: ["Von den ursprünglich 72 Türmen sind heute noch 14 im Stadtzentrum erhalten.", "Der höchste Turm, die Torre Grossa, hat eine Höhe von 54 Metern und wurde 1311 fertiggestellt.", "San Gimignano wurde im Jahr 1990 in die Liste des UNESCO-Welterbes aufgenommen.", "Der Weißwein Vernaccia wurde bereits 1276 in den städtischen Steuerregistern erwähnt.", "Die Stadtmauer von San Gimignano hat eine Gesamtlänge von etwa 2,1 Kilometern.", "Im Jahr 1348 verlor die Stadt durch die Pest etwa die Hälfte ihrer Bevölkerung."],
      hu: ["A város fénykorában 72 torony állt, amelyek közül ma 14 látható a központban.", "A legmagasabb torony a Torre Grossa, amely 54 méter magas és 1311-ben készült el.", "San Gimignano történelmi központja 1990 óta az UNESCO Világörökség része.", "A Vernaccia di San Gimignano bor 1966-ban kapta meg az első olasz DOC minősítést.", "A települést egy 2176 méter hosszú, több kapuval ellátott városfal veszi körül.", "Dante Alighieri 1300-ban járt a városban nagykövetként, hogy szövetséget kössön."],
      ro: ["În prezent mai există 14 turnuri medievale din cele 72 care au fost construite inițial.", "Turnul cel mai înalt se numește Torre Grossa și măsoară 54 de metri înălțime.", "San Gimignano a fost declarat sit al Patrimoniului Mondial UNESCO în anul 1990.", "Vernaccia di San Gimignano a fost primul vin italian care a primit certificarea DOC în 1966.", "Zidurile de apărare ale orașului au o lungime totală de peste 2 kilometri.", "Orașul a fost abandonat parțial după epidemia de ciumă neagră din anul 1348."],
      en: ["Only 14 of the original 72 towers remain standing in the town center today.", "The tallest tower, Torre Grossa, stands 54 meters high and was completed in 1311.", "San Gimignano's historic center was added to the UNESCO World Heritage list in 1990.", "Vernaccia di San Gimignano was the first Italian wine to receive the DOC status in 1966.", "The town walls encircle the historical center and stretch for about 2.1 kilometers.", "In 1300, the famous poet Dante Alighieri visited San Gimignano as an ambassador."],
    },
  },
  {
    id: "it-assisi",
    type: "historical",
    parent: "IT-55",
    coords: [12.617, 43.070],
    name: { de: "Assisi", hu: "Assisi", ro: "Assisi", en: "Assisi" },
    
    
    description: {
          "en": "Assisi is a serene and profoundly spiritual hill town in the Umbria region of central Italy. It is celebrated worldwide as the birthplace of St. Francis, one of Italy's patron saints and the founder of the Franciscan order. The focal point of the town is the Basilica of San Francesco, a massive, two-level church adorned with magnificent frescoes by Giotto and Cimabue that depict the saint's life. Assisi's cobblestone streets, well-preserved medieval houses, and ancient Roman remains create an atmosphere of timeless peace. It continues to be a major pilgrimage destination and a symbol of peace and reconciliation.",
          "de": "Assisi ist eine ruhige und zutiefst spirituelle Hügelstadt in der Region Umbrien in Mittelitalien. Sie wird weltweit als Geburtsort des Heiligen Franziskus, eines der Schutzpatrone Italiens und Gründer des Franziskanerordens, gefeiert. Der Mittelpunkt der Stadt ist die Basilika San Francesco, eine gewaltige zweistöckige Kirche, die mit prächtigen Fresken von Giotto und Cimabue geschmückt ist, welche das Leben des Heiligen darstellen. Die kopfsteingepflasterten Straßen, gut erhaltenen mittelalterlichen Häuser und antiken römischen Überreste Assisis schaffen eine Atmosphäre zeitlosen Friedens. Es ist nach wie vor ein wichtiges Pilgerziel und ein Symbol für Frieden und Versöhnung.",
          "hu": "Assisi egy nyugodt és mélyen spirituális hegyvidéki város a közép-olaszországi Umbria régióban. Világszerte Assisi Szent Ferenc, Olaszország egyik védőszentje és a ferences rend alapítója szülőhelyeként ünneplik. A város központja a Szent Ferenc-bazilika, egy hatalmas, kétszintes templom, amelyet Giotto és Cimabue csodálatos freskói díszítenek, amelyek a szent életét ábrázolják. Assisi macskaköves utcái, jól megőrzött középkori házai és ókori római maradványai az időtlen béke atmoszféráját teremtik meg. Továbbra is jelentős zarándokcélpont, valamint a béke és a megbékélés szimbóluma.",
          "ro": "Assisi este un oraș liniștit și profund spiritual de pe deal, în regiunea Umbria din centrul Italiei. Este celebrat în întreaga lume ca locul de naștere al Sfântului Francisc, unul dintre sfinții patroni ai Italiei și fondatorul ordinului franciscan. Punctul focal al orașului este Bazilica San Francesco, o biserică masivă pe două niveluri, împodobită cu fresce magnifice de Giotto și Cimabue care înfățișează viața sfântului. Străzile pietruite din Assisi, casele medievale bine conservate și rămășițele romane antice creează o atmosferă de pace atemporală. Continuă să fie o destinație majoră de pelerinaj și un simbol al păcii și reconcilierii."
    },
    facts: {
          "en": [
                "Assisi is also the birthplace of St. Clare, the founder of the Poor Clares.",
                "The Basilica of San Francesco contains the sacred tomb of St. Francis.",
                "In 2000, Assisi and its other Franciscan sites were designated a UNESCO World Heritage site.",
                "The town was severely damaged by a powerful earthquake in 1997 but has been meticulously restored.",
                "The Roman Temple of Minerva, located in the main square, is remarkably well-preserved.",
                "The Rocca Maggiore is a medieval fortress that looms over the town, offering vast views.",
                "Assisi hosts the 'Spirit of Assisi' interreligious prayer gatherings for peace.",
                "The Porziuncola, a tiny church crucial to the Franciscan movement, is located inside the Basilica of Santa Maria degli Angeli."
          ],
          "de": [
                "Assisi ist auch der Geburtsort der Heiligen Klara, der Gründerin der Klarissen.",
                "Die Basilika San Francesco enthält das heilige Grab des Heiligen Franziskus.",
                "Im Jahr 2000 wurden Assisi und seine anderen franziskanischen Stätten zum UNESCO-Weltkulturerbe erklärt.",
                "Die Stadt wurde 1997 durch ein starkes Erdbeben schwer beschädigt, aber akribisch restauriert.",
                "Der römische Minerva-Tempel auf dem Hauptplatz ist bemerkenswert gut erhalten.",
                "Die Rocca Maggiore ist eine mittelalterliche Festung, die über der Stadt thront und weite Ausblicke bietet.",
                "Assisi veranstaltet die interreligiösen Friedensgebete 'Geist von Assisi'.",
                "Die Portiunkula, eine kleine Kirche, die für die franziskanische Bewegung entscheidend ist, befindet sich in der Basilika Santa Maria degli Angeli."
          ],
          "hu": [
                "Assisi Szent Klára, a klarissza rend alapítójának szülőhelye is.",
                "A Szent Ferenc-bazilika őrzi Szent Ferenc szent sírját.",
                "2000-ben Assisi és más ferences helyszínei UNESCO világörökségi státuszt kaptak.",
                "A várost 1997-ben egy erős földrengés súlyosan megrongálta, de aprólékosan helyreállították.",
                "A főtéren található római Minerva-templom figyelemre méltóan jól megőrzött.",
                "A Rocca Maggiore egy középkori erőd, amely a város fölé magasodik, és hatalmas kilátást nyújt.",
                "Assisi ad otthont az 'Assisi Szelleme' vallásközi békeimádságoknak.",
                "A Porziuncola, a ferences mozgalom számára kulcsfontosságú apró templom a Santa Maria degli Angeli bazilikában található."
          ],
          "ro": [
                "Assisi este, de asemenea, locul de naștere al Sfintei Clara, fondatoarea Clarisei Sărace.",
                "Bazilica San Francesco conține mormântul sacru al Sfântului Francisc.",
                "În anul 2000, Assisi și celelalte situri franciscane ale sale au fost desemnate sit al Patrimoniului Mondial UNESCO.",
                "Orașul a fost grav avariat de un cutremur puternic în 1997, dar a fost restaurat cu meticulozitate.",
                "Templul roman al Minervei, situat în piața principală, este remarcabil de bine conservat.",
                "Rocca Maggiore este o fortăreață medievală care domină orașul, oferind vederi vaste.",
                "Assisi găzduiește întâlnirile de rugăciune interreligioase pentru pace 'Spiritul Assisi'.",
                "Porziuncola, o biserică minusculă crucială pentru mișcarea franciscană, este situată în interiorul Bazilicii Santa Maria degli Angeli."
          ]
    },
    image: "/geo-images/italy/it-assisi.webp",
    descriptionAdvanced: {
      de: "Assisi ist eine Stadt in der Region Umbrien, die weltweit als Geburtsort des Heiligen Franziskus, des Gründers des Franziskanerordens, bekannt ist. Die Stadt liegt an den Hängen des Monte Subasio und ist ein bedeutendes religiöses und kulturelles Zentrum. Das wichtigste Bauwerk ist die Basilika San Francesco, die über dem Grab des Heiligen errichtet wurde und seit dem Jahr 2000 zum UNESCO-Welterbe gehört. Die Basilika besteht aus einer Unter- und einer Oberkirche und ist mit bedeutenden Freskenzyklen von Giotto und Cimabue geschmückt, die Meilensteine der italienischen Malerei darstellen. Neben der christlichen Bedeutung besitzt Assisi auch antike Wurzeln, was durch den gut erhaltenen Minerva-Tempel auf der Piazza del Comune bezeugt wird, der im 1. Jahrhundert v. Chr. erbaut wurde. Die mittelalterliche Festung Rocca Maggiore thront über der Stadt und bietet einen weiten Blick über das umbrische Tal. Trotz schwerer Schäden durch ein Erdbeben im Jahr 1997 wurde die Stadt und insbesondere die Basilika umfassend restauriert. Heute ist Assisi ein Symbol für den interreligiösen Dialog und zieht jährlich Millionen von Pilgern und Touristen aus aller Welt an.",
      hu: "Assisi egy középkori hangulatú város Umbria régióban, amely világszerte Szent Ferenc, a ferences rend alapítójának szülőhelyeként ismert. A Monte Subasio lejtőin fekvő település vallási és művészettörténeti szempontból is kiemelkedő jelentőségű központ. Legfontosabb műemléke a Szent Ferenc-bazilika, amely 2000 óta az UNESCO Világörökség része, és amely az alsó és felső templomból, valamint a szent sírját őrző kriptából áll. A bazilika belső terét Giotto és Cimabue világhírű freskói díszítik, amelyek az itáliai festészet megújulását jelképezik a 13. század végén. Assisi történelme a római korig nyúlik vissza, aminek ékes bizonyítéka a Piazza del Comune téren álló Minerva-templom, amely az 1. századból maradt fenn. A város felett magasodik a Rocca Maggiore nevű erőd, amely évszázadokon át védelmi funkciót töltött be a rivális Perugia ellen. 1997-ben egy súlyos földrengés komoly károkat okozott a műemlékekben, de a gyors és szakszerű restaurálásnak köszönhetően a város visszanyerte eredeti pompáját. Assisi ma a béke és a vallások közötti párbeszéd nemzetközi jelképe.",
      ro: "Assisi este un oraș istoric din regiunea Umbria, faimos la nivel mondial ca fiind locul de naștere al Sfântului Francisc, fondatorul ordinului franciscan. Orașul este situat pe versanții Muntelui Subasio și reprezintă un centru major de pelerinaj și cultură. Cel mai important monument este Bazilica Sfântul Francisc, inclusă în Patrimoniul Mondial UNESCO în anul 2000, care adăpostește mormântul sfântului. Bazilica este compusă din două biserici suprapuse, cea inferioară și cea superioară, și este decorată cu fresce inestimabile realizate de maeștri precum Giotto și Cimabue. Moștenirea romană a orașului este vizibilă prin Templul Minervei, situat în Piazza del Comune, o structură din secolul I î.Hr. care a fost transformată ulterior în biserică. Deasupra orașului se află fortăreața Rocca Maggiore, care oferă o panoramă spectaculoasă asupra văii umbriene și a servit ca punct strategic de apărare. În anul 1997, un cutremur puternic a cauzat daune semnificative, dar eforturile masive de restaurare au redat orașului splendoarea sa originală. Astăzi, Assisi este un simbol internațional al păcii și al dialogului interreligios, primind anual milioane de vizitatori.",
      en: "Assisi is a historic town in the Umbria region, globally recognized as the birthplace of Saint Francis, the patron saint of Italy and founder of the Franciscan Order. Situated on the slopes of Mount Subasio, the town is a preeminent religious and artistic destination. Its crown jewel is the Basilica of San Francesco, designated a UNESCO World Heritage site in 2000, which houses the saint's tomb and exceptional art. The basilica consists of two superimposed churches, featuring cycles of frescoes by Cimabue and Giotto that are considered pivotal works in the history of Western painting. Assisi's history predates the medieval era, as evidenced by the well-preserved Temple of Minerva in the Piazza del Comune, which dates back to the 1st century BC. Overlooking the town is the Rocca Maggiore, a medieval fortress that provided defense for centuries against neighboring rival cities. Despite suffering significant damage during a severe earthquake in 1997, the town underwent a meticulous restoration process to preserve its cultural integrity. Today, Assisi serves as an international symbol of peace and interfaith dialogue, attracting millions of pilgrims and tourists every year.",
    },
    factsAdvanced: {
      de: ["Die Basilika San Francesco wurde im Jahr 2000 in die Liste des UNESCO-Welterbes aufgenommen.", "Der Minerva-Tempel auf der Piazza del Comune stammt aus dem 1. Jahrhundert v. Chr.", "Die Grundsteinlegung für die Basilika erfolgte im Jahr 1228, nur zwei Jahre nach dem Tod von Franziskus.", "Die Festung Rocca Maggiore wurde erstmals im Jahr 1174 urkundlich erwähnt.", "Ein schweres Erdbeben beschädigte die Stadt am 26. September 1997 erheblich.", "Assisi liegt auf einer Höhe von etwa 424 Metern über dem Meeresspiegel am Monte Subasio."],
      hu: ["Assisi ferences emlékhelyeit 2000-ben vette fel az UNESCO a Világörökség listájára.", "A Szent Ferenc-bazilika építése 1228-ban kezdődött, IX. Gergely pápa rendeletére.", "A Minerva-templom homlokzata az 1. századból származik, és hat korinthoszi oszlopa van.", "A Rocca Maggiore erődítményt I. Barbarossa Frigyes császár építtette újjá 1174-ben.", "Az 1997-es földrengés során a bazilika boltozatának egy része leomlott.", "A város minden évben otthont ad a 'Béke Menetének', amely Assisi és Perugia között zajlik."],
      ro: ["Bazilica Sfântul Francisc a fost înscrisă în lista UNESCO în anul 2000.", "Construcția bazilicii a început în anul 1228, la o zi după canonizarea Sfântului Francisc.", "Templul Minervei are o fațadă cu șase coloane corintice datând din secolul I î.Hr.", "Rocca Maggiore a fost reconstruită în forma sa actuală în secolul al XIV-lea.", "Suprafața zonei protejate UNESCO din Assisi acoperă aproximativ 14.500 de hectare.", "Cutremurul din 26 septembrie 1997 a avut o magnitudine de 6,0 grade pe scara Richter."],
      en: ["The Basilica of San Francesco was designated a UNESCO World Heritage site in 2000.", "The Temple of Minerva dates to the 1st century BC and was later converted into a church.", "Construction of the Lower Basilica began in 1228, immediately after Francis's canonization.", "The Rocca Maggiore fortress was first documented in historical records in 1174.", "Assisi is located at an elevation of approximately 424 meters on the slope of Mount Subasio.", "A major earthquake struck the town in 1997, leading to a massive 2-year restoration."],
    },
  },
  {
    id: "it-montecassino",
    type: "historical",
    parent: "IT-62",
    coords: [13.813, 41.489],
    name: { de: "Kloster Montecassino", hu: "Montecassinoi apátság", ro: "Abația Monte Cassino", en: "Monte Cassino Abbey" },
    
    
    description: {
          "en": "Monte Cassino is a rocky hill situated about 130 kilometers southeast of Rome, famed as the site of the first house of the Benedictine Order. Founded by St. Benedict of Nursia in 529 AD, the Abbey of Monte Cassino stands as a monumental spiritual and cultural center. Throughout its history, it has been destroyed and rebuilt multiple times, most notoriously during a fierce World War II battle in 1944. Today's meticulously reconstructed abbey shines in resplendent Baroque style and continues to operate as an active monastery. It symbolizes resilience, faith, and the preservation of Western knowledge through the Dark Ages.",
          "de": "Monte Cassino ist ein felsiger Hügel etwa 130 Kilometer südöstlich von Rom, berühmt als Standort des ersten Hauses des Benediktinerordens. Die 529 n. Chr. vom Heiligen Benedikt von Nursia gegründete Abtei Monte Cassino steht als monumentales spirituelles und kulturelles Zentrum. Im Laufe ihrer Geschichte wurde sie mehrmals zerstört und wieder aufgebaut, am berüchtigtsten während einer heftigen Schlacht im Zweiten Weltkrieg 1944. Die heute akribisch rekonstruierte Abtei erstrahlt in prächtigem Barockstil und fungiert weiterhin als aktives Kloster. Sie symbolisiert Widerstandsfähigkeit, Glauben und die Bewahrung westlichen Wissens im dunklen Zeitalter.",
          "hu": "Monte Cassino egy sziklás hegy Rómától körülbelül 130 kilométerre délkeletre, híres arról, hogy itt található a bencés rend első háza. A Nursiai Szent Benedek által Kr. u. 529-ben alapított Monte Cassino apátság monumentális spirituális és kulturális központ. Története során többször is elpusztult és újjáépült, a leghírhedtebb módon a második világháború egy heves csatája során, 1944-ben. A ma aprólékosan újjáépített apátság ragyogó barokk stílusban tündököl, és továbbra is aktív kolostorként működik. A rugalmasság, a hit és a nyugati tudás sötét középkoron átívelő megőrzésének szimbóluma.",
          "ro": "Monte Cassino este un deal stâncos situat la aproximativ 130 de kilometri sud-est de Roma, renumit ca situl primei case a Ordinului Benedictin. Fondată de Sfântul Benedict din Nursia în 529 d.Hr., Abația Monte Cassino se ridică ca un centru spiritual și cultural monumental. De-a lungul istoriei sale, a fost distrusă și reconstruită de mai multe ori, cel mai notoriu în timpul unei lupte acerbe din al Doilea Război Mondial în 1944. Abația de astăzi, reconstruită cu meticulozitate, strălucește într-un stil baroc splendid și continuă să funcționeze ca o mănăstire activă. Simbolizează rezistența, credința și conservarea cunoștințelor occidentale în timpul Epocii Întunecate."
    },
    facts: {
          "en": [
                "St. Benedict wrote his 'Rule' at Monte Cassino, which became the foundational guide for Western monasticism.",
                "The abbey was completely destroyed by Allied bombing in February 1944.",
                "Before the WW2 bombing, monks safely evacuated the abbey's invaluable archives to the Vatican.",
                "It was rebuilt exactly 'where it was and as it was' after the war.",
                "The abbey contains the tombs of St. Benedict and his twin sister, St. Scholastica.",
                "Monte Cassino is perched at an elevation of 520 meters (1,706 feet).",
                "The Polish War Cemetery nearby holds the graves of soldiers who captured the hill in 1944.",
                "The monastery has a museum displaying ancient manuscripts, paintings, and artifacts."
          ],
          "de": [
                "Der Heilige Benedikt schrieb seine 'Regel' auf Monte Cassino, die zum grundlegenden Leitfaden für das westliche Mönchtum wurde.",
                "Die Abtei wurde im Februar 1944 durch alliierte Bombenangriffe vollständig zerstört.",
                "Vor der Bombardierung im Zweiten Weltkrieg evakuierten die Mönche die unschätzbaren Archive der Abtei sicher in den Vatikan.",
                "Sie wurde nach dem Krieg genau 'dort, wo sie war, und so, wie sie war' wieder aufgebaut.",
                "Die Abtei beherbergt die Gräber des Heiligen Benedikt und seiner Zwillingsschwester, der Heiligen Scholastika.",
                "Monte Cassino thront auf einer Höhe von 520 Metern.",
                "Der nahegelegene Polnische Soldatenfriedhof birgt die Gräber von Soldaten, die den Hügel 1944 eroberten.",
                "Das Kloster verfügt über ein Museum, das antike Manuskripte, Gemälde und Artefakte zeigt."
          ],
          "hu": [
                "Szent Benedek Monte Cassinóban írta meg a 'Regulát', amely a nyugati szerzetesség alapvető útmutatójává vált.",
                "Az apátságot 1944 februárjában a szövetségesek bombázása teljesen megsemmisítette.",
                "A II. világháborús bombázás előtt a szerzetesek biztonságosan a Vatikánba menekítették az apátság felbecsülhetetlen értékű archívumát.",
                "A háború után pontosan 'ott, ahol volt, és úgy, ahogy volt' építették újjá.",
                "Az apátságban található Szent Benedek és ikertestvére, Szent Skolasztika sírja.",
                "A Monte Cassino 520 méteres magasságban helyezkedik el.",
                "A közeli lengyel katonai temetőben nyugszanak a dombot 1944-ben elfoglaló katonák.",
                "A kolostorban múzeum működik, amely ősi kéziratokat, festményeket és műtárgyakat mutat be."
          ],
          "ro": [
                "Sfântul Benedict și-a scris 'Regula' la Monte Cassino, care a devenit ghidul fundamental pentru monahismul occidental.",
                "Abația a fost complet distrusă de bombardamentele Aliate în februarie 1944.",
                "Înainte de bombardamentul din al Doilea Război Mondial, călugării au evacuat în siguranță arhivele inestimabile ale abației la Vatican.",
                "A fost reconstruită exact 'acolo unde a fost și așa cum a fost' după război.",
                "Abația conține mormintele Sfântului Benedict și ale surorii sale gemene, Sfânta Scolastica.",
                "Monte Cassino este cocoțat la o altitudine de 520 de metri.",
                "Cimitirul de Război Polonez din apropiere adăpostește mormintele soldaților care au capturat dealul în 1944.",
                "Mănăstirea are un muzeu care expune manuscrise antice, picturi și artefacte."
          ]
    },
    image: "/geo-images/italy/it-montecassino.webp",
    descriptionAdvanced: {
      de: "Die Abtei Montecassino ist eines der ältesten und bedeutendsten Klöster der christlichen Welt und liegt auf einem markanten Hügel in der Region Latium. Sie wurde im Jahr 529 vom Heiligen Benedikt von Nursia gegründet, der hier die Benediktinerregel verfasste, die zur Grundlage des abendländischen Mönchtums wurde. Im Laufe ihrer langen Geschichte wurde die Abtei mehrfach zerstört, unter anderem durch die Langobarden im Jahr 577, die Sarazenen im Jahr 883 und ein schweres Erdbeben im Jahr 1349. Die tragischste Zerstörung ereignete sich jedoch während des Zweiten Weltkriegs im Jahr 1944, als die Abtei durch alliierte Bombenangriffe fast vollständig in Schutt und Asche gelegt wurde. Nach dem Krieg wurde das Kloster originalgetreu nach den Plänen aus dem 17. Jahrhundert wiederaufgebaut, ein Prozess, der über ein Jahrzehnt dauerte. Heute beherbergt Montecassino ein bedeutendes Archiv und eine Bibliothek mit wertvollen mittelalterlichen Handschriften und Inkunabeln. Die Basilika der Abtei ist prachtvoll mit Marmor, Mosaiken und Fresken ausgestattet und dient als letzte Ruhestätte des Heiligen Benedikt und seiner Schwester Scholastika. Die Anlage ist nicht nur ein religiöser Ort, sondern auch ein nationales Denkmal Italiens und ein Symbol für die Widerstandsfähigkeit der Kultur.",
      hu: "A Monte Cassino-i apátság a keresztény világ egyik legfontosabb szerzetesi központja, amely Lazio régióban, egy 520 méter magas hegycsúcson található. Nursiai Szent Benedek alapította 529-ben, aki itt fektette le a bencés rend alapjait és írta meg a híres „Regulát”, amely meghatározta a nyugati szerzetesség fejlődését. Az apátság történelme során számos pusztítást élt át: a longobárdok 577-ben, a szaracénok 883-ban rombolták le, 1349-ben pedig egy földrengés döntötte romba. A legismertebb pusztulás a második világháború alatt, 1944 februárjában történt, amikor a szövetséges bombázók teljesen megsemmisítették a komplexumot a Monte Cassino-i csata során. A háború után az olasz állam „ahol volt és amilyen volt” elv alapján teljesen újjáépíttette az apátságot az eredeti tervek szerint. Ma az épületegyüttes értékes múzeumnak, levéltárnak és könyvtárnak ad otthont, amely több mint 40 000 kötetet és ritka kódexeket őriz. A bazilikában található Szent Benedek és ikertestvére, Szent Skolasztika sírja, amely fontos zarándokhely. Az apátság látogatása során a látogatók megismerhetik az európai keresztény kultúra gyökereit és a háborús emlékezetet is.",
      ro: "Abația Montecassino este una dintre cele mai vechi și mai prestigioase mănăstiri din Europa, fiind considerată leagănul ordinului benedictin. Fondată în anul 529 de către Sfântul Benedict de Nursia pe locul unui fost templu dedicat lui Apollo, mănăstirea a devenit centrul de difuzare a Regulii Benedictine. De-a lungul celor peste 1.500 de ani de existență, abația a fost distrusă de patru ori: de longobarzi în 577, de sarazini în 883, de un cutremur în 1349 și prin bombardamente în 1944. Distrugerea aproape totală din timpul celui de-al Doilea Război Mondial, în cadrul Bătăliei de la Monte Cassino, a reprezentat o pierdere culturală imensă pentru întreaga lume. Reconstrucția meticuloasă a început imediat după încheierea războiului, mănăstirea fiind sfințită din nou în anul 1964 de către Papa Paul al VI-lea. Complexul actual păstrează planurile arhitecturale ale structurii din secolele XVII-XVIII și găzduiește o bibliotecă remarcabilă cu manuscrise rare. Biserica abației este o capodoperă a artei baroce, fiind locul unde se află relicvele Sfântului Benedict și ale Sfintei Scolastica. Abația rămâne un far al spiritualității creștine și un simbol al renașterii culturale după tragedii istorice.",
      en: "The Abbey of Montecassino is one of the most famous and influential monasteries in the Christian world, situated on a prominent hill in the Lazio region of Italy. It was founded in 529 by Saint Benedict of Nursia, who established the Benedictine Rule here, which became the standard for Western monasticism for centuries. Throughout its long history, the abbey has been destroyed four separate times: by the Lombards in 577, the Saracens in 883, a massive earthquake in 1349, and most famously during World War II. In February 1944, allied bombing completely leveled the abbey during the Battle of Monte Cassino, as it was mistakenly believed to be a German observation point. After the war, the Italian government rebuilt the monastery exactly as it was, using original 17th-century designs, a task that was completed in the 1950s. Today, the abbey serves as a working monastery, a museum, and a repository for some of the world's most valuable medieval manuscripts and archives. The main basilica is ornately decorated with marble and mosaics and contains the tomb of Saint Benedict and his sister, Saint Scholastica.",
    },
    factsAdvanced: {
      de: ["Die Abtei wurde im Jahr 529 vom Heiligen Benedikt auf den Ruinen eines Apollo-Tempels gegründet.", "Die Bombardierung durch die Alliierten am 15. Februar 1944 zerstörte das Kloster fast vollständig.", "Die Abtei liegt auf einer Höhe von 520 Metern über der Stadt Cassino.", "Das Archiv der Abtei beherbergt über 40.000 Pergamente und wertvolle Inkunabeln.", "Nach der Zerstörung wurde das Kloster zwischen 1948 und 1956 originalgetreu wiederaufgebaut.", "Papst Paul VI. erklärte die Abtei im Jahr 1964 zum Nationaldenkmal Italiens."],
      hu: ["Nursiai Szent Benedek 529-ben alapította az apátságot egy egykori Apollón-templom helyén.", "A második világháborús bombázás 1944. február 15-én történt, 453 tonna bomba ledobásával.", "Az apátság könyvtára több mint 100 000 kötetet, köztük 40 000 pergamentet őriz.", "A Monte Cassino-i csata a háború egyik legvéresebb ütközete volt, mintegy 55 000 szövetséges áldozattal.", "Az újjáépített apátságot VI. Pál pápa szentelte fel ünnepélyesen 1964. október 24-én.", "Az épületegyüttes 520 méteres tengerszint feletti magasságban fekszik a Cassino feletti hegyen."],
      ro: ["Abația a fost fondată în anul 529 pe locul unui vechi templu al lui Apollo.", "Bombardamentul aliaților din 15 februarie 1944 a durat câteva ore și a distrus întreaga structură.", "Mănăstirea se află la o altitudine de 520 de metri deasupra nivelului mării.", "Regula Sfântului Benedict a fost redactată aici în jurul anului 530 d.Hr.", "Mormântul Sfântului Benedict a rămas miraculos intact după bombardamentul din 1944.", "Arhivele abației conțin documente istorice neîntrerupte încă din secolul al VI-lea."],
      en: ["Saint Benedict founded the abbey in 529 AD on the site of a temple dedicated to Apollo.", "The allied bombing on February 15, 1944, dropped 453 tons of bombs on the monastery.", "The abbey sits at an elevation of 520 meters (1,706 feet) overlooking the town of Cassino.", "The archives contain over 40,000 parchments and numerous rare medieval manuscripts.", "The rebuilt abbey was officially reconsecrated by Pope Paul VI in 1964.", "The monastery has been destroyed and rebuilt four times during its 1,500-year history."],
    },
  },
  {
    id: "it-orvieto",
    type: "historical",
    parent: "IT-55",
    coords: [12.108, 42.717],
    name: { de: "Orvieto", hu: "Orvieto", ro: "Orvieto", en: "Orvieto" },
    
    
    description: {
          "en": "Orvieto is a striking medieval city in Umbria, spectacularly perched atop a steep, flat-topped cliff of volcanic tuff. It has a rich history dating back to Etruscan times, offering visitors a unique blend of ancient and medieval architecture. The city's crown jewel is the magnificent Orvieto Cathedral (Duomo), renowned for its dazzling, golden Gothic facade and the profound frescoes inside by Luca Signorelli. Beneath the charming streets lies a vast underground labyrinth of caves, tunnels, and wells dug over millennia. Orvieto is also famous for its exceptional white wines, which have been celebrated since ancient times.",
          "de": "Orvieto ist eine beeindruckende mittelalterliche Stadt in Umbrien, die spektakulär auf einer steilen, flachen Klippe aus vulkanischem Tuffstein thront. Sie hat eine reiche Geschichte, die bis in die etruskische Zeit zurückreicht, und bietet Besuchern eine einzigartige Mischung aus antiker und mittelalterlicher Architektur. Das Kronjuwel der Stadt ist der prächtige Dom von Orvieto (Duomo), der für seine schillernde, goldene gotische Fassade und die tiefgründigen Fresken von Luca Signorelli im Inneren bekannt ist. Unter den charmanten Straßen liegt ein riesiges unterirdisches Labyrinth aus Höhlen, Tunneln und Brunnen, das über Jahrtausende gegraben wurde. Orvieto ist auch berühmt für seine außergewöhnlichen Weißweine, die seit der Antike gefeiert werden.",
          "hu": "Orvieto egy lenyűgöző középkori város Umbriában, amely látványosan egy vulkáni tufából álló, meredek, lapos tetejű sziklán magasodik. Gazdag története az etruszk időkig nyúlik vissza, és az ókori és középkori építészet egyedülálló keverékét kínálja a látogatóknak. A város koronaékszere a csodálatos orvietói dóm (Duomo), amely káprázatos, aranyszínű gótikus homlokzatáról és Luca Signorelli lenyűgöző belső freskóiról híres. A bájos utcák alatt barlangok, alagutak és kutak hatalmas földalatti labirintusa húzódik, amelyet évezredek alatt ástak ki. Orvieto híres a kiváló fehérborairól is, amelyeket az ókor óta ünnepelnek.",
          "ro": "Orvieto este un oraș medieval izbitor din Umbria, așezat spectaculos în vârful unei stânci abrupte, cu vârf plat, din tuf vulcanic. Are o istorie bogată care datează din epoca etruscă, oferind vizitatorilor un amestec unic de arhitectură antică și medievală. Bijuteria coroanei orașului este magnifica Catedrală din Orvieto (Duomo), renumită pentru fațada sa gotică orbitoare, aurie și pentru frescele profunde din interior realizate de Luca Signorelli. Sub străzile fermecătoare se află un vast labirint subteran de peșteri, tuneluri și fântâni săpate de-a lungul mileniilor. Orvieto este de asemenea faimos pentru vinurile sale albe excepționale, care au fost celebrate încă din antichitate."
    },
    facts: {
          "en": [
                "The city sits on a plug of volcanic tuff, giving it a natural defense.",
                "The Duomo of Orvieto took over three centuries to complete.",
                "Signorelli's frescoes in the San Brizio Chapel deeply influenced Michelangelo's Last Judgment.",
                "St. Patrick's Well (Pozzo di San Patrizio) features a double helix staircase to prevent mules from crossing paths.",
                "The Orvieto Underground tour explores the extensive network of over 1,200 caves.",
                "Orvieto Classico is one of Italy's most famous and historic white wines.",
                "The city was an important Etruscan center, likely the ancient city of Velzna.",
                "Popes often used Orvieto as a refuge during times of conflict in Rome."
          ],
          "de": [
                "Die Stadt liegt auf einem Pfropfen aus vulkanischem Tuffstein, der ihr eine natürliche Verteidigung verleiht.",
                "Die Fertigstellung des Doms von Orvieto dauerte über drei Jahrhunderte.",
                "Signorellis Fresken in der San-Brizio-Kapelle beeinflussten Michelangelos Jüngstes Gericht tiefgreifend.",
                "Der St.-Patricks-Brunnen (Pozzo di San Patrizio) verfügt über eine Doppelhelix-Treppe, um zu verhindern, dass sich die Wege von Maultieren kreuzen.",
                "Die Tour Orvieto Underground erkundet das ausgedehnte Netzwerk von über 1.200 Höhlen.",
                "Orvieto Classico ist einer der berühmtesten und historischsten Weißweine Italiens.",
                "Die Stadt war ein wichtiges etruskisches Zentrum, wahrscheinlich die antike Stadt Velzna.",
                "Päpste nutzten Orvieto oft als Zufluchtsort in Zeiten von Konflikten in Rom."
          ],
          "hu": [
                "A város egy vulkáni tufadugón fekszik, ami természetes védelmet biztosít számára.",
                "Az orvietói dóm befejezése több mint három évszázadig tartott.",
                "Signorelli freskói a San Brizio kápolnában mélyen befolyásolták Michelangelo Utolsó ítéletét.",
                "Szent Patrik kútja (Pozzo di San Patrizio) kettős spirál alakú lépcsővel rendelkezik, hogy az öszvérek útjai ne keresztezzék egymást.",
                "Az Orvieto Underground túra a több mint 1200 barlangból álló kiterjedt hálózatot fedezi fel.",
                "Az Orvieto Classico Olaszország egyik leghíresebb és legtörténelmibb fehérbora.",
                "A város fontos etruszk központ volt, valószínűleg Velzna ókori városa.",
                "A pápák gyakran használták Orvietót menedékként a római konfliktusok idején."
          ],
          "ro": [
                "Orașul se află pe un dop de tuf vulcanic, oferindu-i o apărare naturală.",
                "Finalizarea Domului din Orvieto a durat mai bine de trei secole.",
                "Frescele lui Signorelli din Capela San Brizio au influențat profund Judecata de Apoi a lui Michelangelo.",
                "Fântâna Sfântului Patrick (Pozzo di San Patrizio) are o scară cu dublă elice pentru a preveni încrucișarea catârilor.",
                "Turul Orvieto Underground explorează rețeaua extinsă de peste 1.200 de peșteri.",
                "Orvieto Classico este unul dintre cele mai faimoase și istorice vinuri albe din Italia.",
                "Orașul a fost un important centru etrusc, probabil orașul antic Velzna.",
                "Papii au folosit adesea Orvieto ca refugiu în perioadele de conflict din Roma."
          ]
    },
    image: "/geo-images/italy/it-orvieto.webp",
    descriptionAdvanced: {
      de: "Orvieto ist eine faszinierende Stadt in Umbrien, die spektakulär auf einem steilen Tuffsteinfelsen thront und über einem ausgedehnten Netz von unterirdischen Gängen und Kellern liegt. Die Stadt hat antike etruskische Wurzeln und war einst eines der wichtigsten Zentren der etruskischen Zivilisation, bekannt als Velzna. Das herausragendste Bauwerk der Stadt ist der Dom von Orvieto, ein Meisterwerk der italienischen Gotik, dessen Bau im Jahr 1290 begann. Die Fassade des Doms ist mit goldenen Mosaiken, filigranen Skulpturen und einer prächtigen Rosette geschmückt, während das Innere die berühmten Fresken von Luca Signorelli in der Kapelle San Brizio beherbergt. Ein weiteres technisches Wunderwerk ist der Pozzo di San Patrizio, ein 53 Meter tiefer Brunnen aus dem 16. Jahrhundert mit zwei spiralförmigen Treppen, die sich nie kreuzen. Unter der Stadt erstreckt sich Orvieto Underground, ein Labyrinth aus über 1.200 Höhlen, die seit etruskischer Zeit für Vorratslager, Werkstätten und Taubenschläge genutzt wurden. Orvieto ist auch für seinen trockenen Weißwein bekannt, der bereits in der Antike geschätzt wurde. Die Stadt verbindet auf einzigartige Weise mittelalterliche Architektur mit antiker Geschichte und einer beeindruckenden geologischen Lage.",
      hu: "Orvieto Umbria egyik legkülönlegesebb városa, amely egy hatalmas, függőleges falú tufaszikla tetejére épült, uralva a környező völgy látványát. A város alapjai az etruszk korig nyúlnak vissza, amikor Velzna néven az etruszk szövetség egyik vallási központja volt. Orvieto legismertebb jelképe a dóm, az olasz gótikus építészet egyik csúcspontja, amelynek építése 1290-ben kezdődött és évszázadokig tartott. A katedrális homlokzatát ragyogó aranymozaikok és domborművek díszítik, belül pedig Luca Signorelli utolsó ítéletet ábrázoló freskói láthatók. A város alatt egy hatalmas, több mint 1200 barlangból álló földalatti labirintus húzódik, amelyet az ókortól kezdve használtak tárolásra és menedékként. Technikai különlegesség a Szent Patrik-kút (Pozzo di San Patrizio), amelyet VII. Kelemen pápa építtetett a 16. században; a 53 méter mély kút kettős spirállépcsővel rendelkezik, hogy az öszvérek ne találkozzanak. Orvieto híres fehérboráról is, amelyet a vulkanikus talajnak köszönhetően különleges aromák jellemeznek. A város ma a „Cittaslow” (lassú város) mozgalom egyik alapítója, ahol a hagyományok és a nyugodt életvitel megőrzése kiemelt fontosságú.",
      ro: "Orvieto este un oraș impresionant din Umbria, situat în mod dramatic pe un platou de tuf vulcanic, oferind panorame spectaculoase asupra peisajului înconjurător. Orașul are origini etrusce profunde, fiind identificate numeroase necropole și vestigii ale vechiului oraș Velzna în apropiere. Piesa centrală a orașului este Catedrala din Orvieto, construită începând cu anul 1290, a cărei fațadă gotică decorată cu mozaicuri aurite și sculpturi detaliate este considerată una dintre cele mai frumoase din Italia. În interiorul catedralei se află Capela San Brizio, renumită pentru ciclul de fresce despre Judecata de Apoi realizat de Luca Signorelli, care l-a influențat pe Michelangelo. Un alt obiectiv remarcabil este Pozzo di San Patrizio, un puț adânc de 53 de metri construit în secolul al XVI-lea, dotat cu două scări elicoidale care nu se intersectează niciodată, o inovație inginerească a epocii. Sub străzile orașului se întinde „Orvieto Underground”, o rețea de peste 1.200 de peșteri și tuneluri săpate în stâncă, folosite de milenii pentru diverse activități economice. Orașul este de asemenea celebru pentru producția de vin alb Orvieto Classico, a cărui tradiție datează încă din perioada pre-romană.",
      en: "Orvieto is a stunning city in Umbria, spectacularly situated on a flat summit of a large butte of volcanic tuff overlooking the Paglia valley. The city boasts ancient Etruscan roots and was once a prominent center of their civilization, known as Velzna, as evidenced by nearby necropolises. Its most iconic landmark is the Orvieto Cathedral, a masterpiece of Italian Gothic architecture whose construction began in 1290. The cathedral's facade is exceptionally ornate, featuring golden mosaics, intricate sculptures, and a large rose window, while the interior houses Luca Signorelli's famous frescoes in the San Brizio Chapel. Another engineering marvel is the Pozzo di San Patrizio (St. Patrick's Well), a 53-meter-deep well commissioned by Pope Clement VII in 1527, featuring dual spiral staircases that never intersect. Beneath the city lies 'Orvieto Underground,' a complex labyrinth of over 1,200 caves and tunnels carved into the soft rock over three millennia. The town is also famous for its white wine, Orvieto Classico, produced in the surrounding volcanic hills since antiquity. Today, Orvieto is a prominent member of the 'Cittaslow' movement, emphasizing quality of life and the preservation of local traditions.",
    },
    factsAdvanced: {
      de: ["Der Bau des Doms von Orvieto begann im Jahr 1290 und dauerte rund 300 Jahre.", "Der Pozzo di San Patrizio ist 53 Meter tief und hat einen Durchmesser von 13 Metern.", "Unter der Stadt befinden sich über 1.200 künstlich angelegte Höhlen und Gänge.", "Orvieto liegt auf einem Tuffsteinfelsen in etwa 325 Metern Höhe über dem Meeresspiegel.", "Die Standseilbahn Funicolare di Orvieto verbindet seit 1888 den Bahnhof mit der Altstadt.", "Luca Signorelli arbeitete zwischen 1499 und 1504 an den Fresken in der San Brizio Kapelle."],
      hu: ["Az orvietói dóm alapkövét 1290-ben fektették le, homlokzatán több mint 150 szobor található.", "A Szent Patrik-kút mélysége 53 méter, és 248 lépcsőfok vezet le az aljára.", "A város alatti pincerendszert 2500 éven keresztül folyamatosan bővítették a lakók.", "A dómban őrzik a bolsenai mise véres korporáléját, amely a Corpus Christi ünnep alapja lett.", "Orvieto a Cittaslow mozgalom egyik alapító városa volt 1999-ben.", "Az etruszk időkben a várost Velzna néven ismerték, és az etruszk liga központja volt."],
      ro: ["Construcția catedralei a început în 1290 și a implicat peste 30 de arhitecți de-a lungul timpului.", "Pozzo di San Patrizio are 248 de trepte și a fost construit între 1527 și 1537.", "Rețeaua subterană a orașului conține peste 1.200 de cavități săpate manual în tufa vulcanică.", "Funicularul din Orvieto a fost inaugurat inițial în anul 1888, funcționând cu apă.", "Frescele lui Luca Signorelli din catedrală au fost realizate între anii 1499 și 1504.", "Orașul este situat pe un platou stâncos la o altitudine de 325 metri."],
      en: ["Construction of the Orvieto Cathedral began in 1290 and spanned nearly three centuries.", "St. Patrick's Well is 53 meters deep and features 248 steps on each of its two staircases.", "The underground network beneath Orvieto consists of over 1,200 man-made caves.", "The cathedral's facade is decorated with mosaics that cover an area of nearly 3,000 square meters.", "Orvieto Classico wine has been produced in the region since the Etruscan era (8th century BC).", "The town's funicular, connecting the rail station to the center, first opened in 1888."],
    },
  },
  {
    id: "it-matera-sassi",
    type: "historical",
    parent: "IT-77",
    coords: [16.610, 40.666],
    name: { de: "Matera Sassi", hu: "Matera Sassi", ro: "Sassi di Matera", en: "Matera Sassi" },
    
    
    description: {
          "en": "The Sassi di Matera are ancient cave dwellings carved directly into the calcareous rock of the Gravina gorge in the Basilicata region. They represent one of the oldest continuously inhabited human settlements in the world, with evidence of life dating back to the Paleolithic era. The Sassi form a complex and stunning maze of houses, churches, and staircases that seem to grow out of the mountain itself. Once a symbol of profound poverty, the area was revitalized and designated a UNESCO World Heritage site in 1993. Today, it is a bustling cultural destination, offering a unique, almost cinematic journey back in time.",
          "de": "Die Sassi di Matera sind alte Höhlenwohnungen, die direkt in den Kalkfelsen der Gravina-Schlucht in der Region Basilikata gehauen wurden. Sie stellen eine der ältesten kontinuierlich bewohnten menschlichen Siedlungen der Welt dar, mit Lebensspuren, die bis in die Altsteinzeit zurückreichen. Die Sassi bilden ein komplexes und atemberaubendes Labyrinth aus Häusern, Kirchen und Treppen, die aus dem Berg selbst herauszuwachsen scheinen. Einst ein Symbol tiefer Armut, wurde das Gebiet revitalisiert und 1993 zum UNESCO-Weltkulturerbe erklärt. Heute ist es ein lebhaftes kulturelles Reiseziel, das eine einzigartige, fast filmische Zeitreise bietet.",
          "hu": "A Sassi di Matera ősi barlanglakások, amelyeket közvetlenül a Basilicata régió Gravina-szurdokának mészkövébe vájtak. Ezek a világ egyik legrégebbi, folyamatosan lakott emberi települését képviselik, az élet nyomai a paleolitikumig nyúlnak vissza. A Sassi házak, templomok és lépcsők összetett és lenyűgöző labirintusát alkotják, amelyek mintha magából a hegyből nőnének ki. Egykor a mély szegénység szimbóluma volt, de a területet újjáélesztették, és 1993-ban UNESCO világörökségi helyszínné nyilvánították. Ma pezsgő kulturális célpont, amely egyedülálló, szinte filmes időutazást kínál.",
          "ro": "Sassi di Matera sunt locuințe antice în peșteri sculptate direct în stânca calcaroasă a defileului Gravina din regiunea Basilicata. Ele reprezintă una dintre cele mai vechi așezări umane locuite continuu din lume, cu dovezi de viață datând din era paleolitică. Sassi formează un labirint complex și uimitor de case, biserici și scări care par să crească din munte însuși. Odinioară simbol al sărăciei profunde, zona a fost revitalizată și desemnată sit al Patrimoniului Mondial UNESCO în 1993. Astăzi, este o destinație culturală plină de viață, oferind o călătorie unică, aproape cinematografică, înapoi în timp."
    },
    facts: {
          "en": [
                "People have lived in the Sassi di Matera for at least 9,000 years.",
                "In the 1950s, the Italian government relocated residents due to severe unsanitary conditions.",
                "The Sassi include over a hundred Rupestrian churches carved into the rock.",
                "It was named the European Capital of Culture in 2019.",
                "Matera has been a filming location for movies like 'The Passion of the Christ' and 'No Time to Die'.",
                "The architecture relies on a complex system of cisterns to collect rainwater.",
                "Many ancient caves have been converted into luxury hotels and restaurants.",
                "The area is divided into two main districts: Sasso Caveoso and Sasso Barisano."
          ],
          "de": [
                "Menschen leben seit mindestens 9.000 Jahren in den Sassi di Matera.",
                "In den 1950er Jahren siedelte die italienische Regierung die Bewohner aufgrund der katastrophalen hygienischen Bedingungen um.",
                "Die Sassi umfassen über hundert in den Fels gehauene Felsenkirchen.",
                "Sie wurde 2019 zur Kulturhauptstadt Europas ernannt.",
                "Matera war Drehort für Filme wie 'Die Passion Christi' und 'Keine Zeit zu sterben'.",
                "Die Architektur stützt sich auf ein komplexes Zisternensystem zum Sammeln von Regenwasser.",
                "Viele alte Höhlen wurden in Luxushotels und Restaurants umgewandelt.",
                "Das Gebiet ist in zwei Hauptbezirke unterteilt: Sasso Caveoso und Sasso Barisano."
          ],
          "hu": [
                "A Sassi di Materában legalább 9000 éve élnek emberek.",
                "Az 1950-es években az olasz kormány a súlyos egészségtelen körülmények miatt áttelepítette a lakosokat.",
                "A Sassi több mint száz sziklába vájt sziklatemplomot foglal magába.",
                "2019-ben Európa Kulturális Fővárosának választották.",
                "Matera olyan filmek forgatási helyszíne volt, mint 'A passió' és a 'Nincs idő meghalni'.",
                "Az építészet a csapadékvíz összegyűjtésére szolgáló komplex ciszternarendszerre támaszkodik.",
                "Sok ősi barlangot luxusszállodává és étteremmé alakítottak át.",
                "A terület két fő negyedre oszlik: Sasso Caveoso és Sasso Barisano."
          ],
          "ro": [
                "Oamenii au trăit în Sassi di Matera de cel puțin 9.000 de ani.",
                "În anii 1950, guvernul italian a relocat locuitorii din cauza condițiilor insalubre severe.",
                "Sassi includ peste o sută de biserici rupestre sculptate în stâncă.",
                "A fost numită Capitală Europeană a Culturii în 2019.",
                "Matera a fost o locație de filmare pentru filme precum 'Patimile lui Hristos' și 'Nu e vreme de murit'.",
                "Arhitectura se bazează pe un sistem complex de cisterne pentru a colecta apa de ploaie.",
                "Multe peșteri antice au fost transformate în hoteluri și restaurante de lux.",
                "Zona este împărțită în două cartiere principale: Sasso Caveoso și Sasso Barisano."
          ]
    },
    image: "/geo-images/italy/it-matera-sassi.webp",
    descriptionAdvanced: {
      de: "Die Sassi von Matera sind ein außergewöhnliches Ensemble von Höhlensiedlungen in der Region Basilikata und gehören zu den ältesten durchgehend bewohnten Orten der Welt. Die Stadt besteht aus zwei Hauptvierteln, dem Sasso Barisano und dem Sasso Caveoso, die direkt in den weichen Kalkstein (Tuff) einer steilen Schlucht gehauen wurden. Über Jahrtausende entwickelten die Bewohner ein komplexes System von Zisternen und Wasserläufen, um in der trockenen Region zu überleben. In den 1950er Jahren galt Matera aufgrund der prekären hygienischen Bedingungen in den Höhlen als „Schande Italiens“, woraufhin die Bewohner zwangsumgesiedelt wurden. In den letzten Jahrzehnten erlebte die Stadt jedoch eine bemerkenswerte Renaissance und wurde 1993 als erste Stätte in Süditalien zum UNESCO-Welterbe erklärt. Heute sind viele der Höhlen in Hotels, Restaurants und Museen umgewandelt worden, wobei der ursprüngliche Charakter gewahrt blieb. Matera war 2019 Kulturhauptstadt Europas und diente aufgrund seiner biblischen Anmutung als Kulisse für zahlreiche internationale Filmproduktionen. Die Architektur ist ein faszinierendes Beispiel für die Anpassung des Menschen an eine schwierige natürliche Umgebung über einen Zeitraum von fast 9.000 Jahren.",
      hu: "Matera barlanglakásai, az úgynevezett Sassi di Matera, a világ egyik legrégebbi, folyamatosan lakott települését alkotják Basilicata régióban. A város két fő negyedből, a Sasso Barisanóból és a Sasso Caveosóból áll, ahol a lakóházakat közvetlenül a mészkősziklákba vájták. A település különlegessége a rendkívül fejlett vízgyűjtő és csatornarendszer, amely lehetővé tette az életet ezen a száraz vidéken már a paleolitikum óta. Az 1950-es években Materát az „Olaszország szégyene” névvel illették a barlanglakásokban uralkodó tarthatatlan higiéniai állapotok miatt, ami a lakosság kényszerű kitelepítéséhez vezetett. A 20. század végén azonban a terület megítélése teljesen megváltozott, és 1993-ban az UNESCO a világörökség részévé nyilvánította. Matera 2019-ben Európa Kulturális Fővárosa volt, ami végleg felhelyezte a várost a nemzetközi turisztikai térképre. A város archaikus, bibliai tájra emlékeztető látványa miatt számos híres film, köztük Mel Gibson „Passiója” forgatási helyszíne is volt. Ma a Sassi negyed a modern kényelem és az ősi történelem különleges ötvözetét kínálja a látogatóknak.",
      ro: "Sassi di Matera reprezintă unul dintre cele mai vechi și mai fascinante așezări locuite continuu din lume, fiind situat în regiunea Basilicata din sudul Italiei. Orașul este compus din cartierele Sasso Barisano și Sasso Caveoso, unde casele și bisericile sunt săpate direct în roca calcaroasă a unui canion spectaculos numit Gravina. Această formă de arhitectură rupestră datează din perioada paleolitică, evoluând de-a lungul mileniilor într-un sistem urban complex cu rețele ingenioase de colectare a apei pluviale. În anii 1950, condițiile de viață precare au dus la evacuarea forțată a locuitorilor, orașul fiind considerat la acea vreme o „pata de rușine” a Italiei. Totuși, eforturile de conservare au transformat radical zona, Matera devenind în 1993 primul sit din sudul Italiei inclus în Patrimoniul Mondial UNESCO. În anul 2019, Matera a deținut titlul de Capitală Europeană a Culturii, atrăgând atenția internațională asupra patrimoniului său unic. Datorită aspectului său atemporal, Sassi a servit drept decor pentru numeroase producții cinematografice celebre, inclusiv filme cu tematică biblică. Astăzi, multe dintre vechile peșteri au fost restaurate și transformate în unități de cazare de lux și spații culturale.",
      en: "The Sassi di Matera are ancient cave dwellings in the Basilicata region, representing one of the oldest continuously inhabited settlements in the world. Carved directly into the calcarenite rock of a steep ravine, the Sassi consist of two main districts: Sasso Barisano and Sasso Caveoso. Over thousands of years, inhabitants developed an intricate system of cisterns and water channels to manage limited water resources in the arid climate. In the 1950s, the area was dubbed the 'shame of Italy' due to the extreme poverty and poor sanitary conditions in the caves, leading to the forced relocation of its residents. However, following extensive restoration efforts, the Sassi were designated a UNESCO World Heritage site in 1993, the first in southern Italy. Matera's remarkable transformation culminated in its selection as the European Capital of Culture for 2019. The city's timeless, biblical appearance has made it a preferred filming location for major international movies, including 'The Passion of the Christ.' Today, the Sassi are a vibrant cultural hub, with many former caves repurposed into unique hotels, restaurants, and galleries while preserving their historical integrity.",
    },
    factsAdvanced: {
      de: ["Matera wurde im Jahr 1993 als erste Stätte in Süditalien zum UNESCO-Welterbe erklärt.", "Die ältesten Siedlungsspuren in den Höhlen von Matera sind rund 9.000 Jahre alt.", "Bis in die 1950er Jahre lebten rund 15.000 Menschen unter prekären Bedingungen in den Sassi.", "Die Stadt verfügt über rund 150 Felsenkirchen (Chiese Rupestri), die in den Stein gehauen wurden.", "Matera war im Jahr 2019 gemeinsam mit Plovdiv die Kulturhauptstadt Europas.", "Die Zisterne Palombaro Lungo unter der Piazza Vittorio Veneto kann 5 Millionen Liter Wasser speichern."],
      hu: ["Matera Sassi negyedét 1993-ban vették fel az UNESCO Világörökség listájára.", "A területen található barlangok némelyike már 7000 évvel ezelőtt is lakott volt.", "A városban több mint 150 sziklatemplom található, amelyek közül sok bizánci stílusú freskókat őriz.", "A Palombaro Lungo egy hatalmas földalatti víztározó, amelyet 1846-ban alakítottak ki.", "Az 1950-es években egy külön törvényt (Legge Speciale) hoztak a Sassi lakóinak kitelepítésére.", "Matera 2019-ben nyerte el az Európa Kulturális Fővárosa címet."],
      ro: ["Sassi di Matera a fost inclus în Patrimoniul Mondial UNESCO în anul 1993.", "Se estimează că așezarea a fost locuită neîntrerupt de aproximativ 9.000 de ani.", "Există peste 150 de biserici rupestre în regiunea Matera, sculptate direct în stâncă.", "Cisterna 'Palombaro Lungo' este cea mai mare din oraș, având o înălțime de 15 metri.", "Matera a fost Capitală Europeană a Culturii în anul 2019.", "Filmul 'Patimile lui Hristos' regizat de Mel Gibson a fost filmat aici în anul 2004."],
      en: ["The Sassi di Matera was the first site in southern Italy to receive UNESCO status in 1993.", "Human settlement in the Matera area dates back to the Paleolithic era, about 9,000 years ago.", "There are approximately 150 rupestrian (rock-cut) churches located within and around the city.", "The Palombaro Lungo is a massive underground cistern that can hold up to 5 million liters of water.", "Matera served as the European Capital of Culture for the year 2019.", "The forced evacuation of the Sassi residents began in 1952 due to a government health mandate."],
    },
  },
  {
    id: "it-pietraperla",
    type: "landmark",
    parent: "IT-57",
    coords: [13.250, 43.220],
    name: { de: "Pietraperla", hu: "Pietraperla", ro: "Pietraperla", en: "Pietraperla" },
    
    
    description: {
          "en": "Pietraperla is a serene, hidden gem nestled in the picturesque landscapes of the Marche region. Characterized by its idyllic, rolling hills and traditional stone architecture, it offers a deeply authentic Italian experience far removed from the bustling crowds of mass tourism. The village exudes a quiet charm, where life moves at a leisurely pace and the traditions of the countryside are still fiercely preserved. Visitors can explore ancient, winding alleyways, historic churches, and breathtaking panoramic views of the Apennine Mountains. Pietraperla is an ideal retreat for hikers, nature lovers, and anyone seeking the soul of rural Italy.",
          "de": "Pietraperla ist ein ruhiges, verstecktes Juwel, eingebettet in die malerischen Landschaften der Region Marken. Geprägt von seinen idyllischen, sanften Hügeln und der traditionellen Steinarchitektur bietet es ein zutiefst authentisches italienisches Erlebnis fernab der geschäftigen Massen des Massentourismus. Das Dorf versprüht einen ruhigen Charme, wo das Leben in gemächlichem Tempo verläuft und die Traditionen des Landes noch immer leidenschaftlich bewahrt werden. Besucher können alte, verwinkelte Gassen, historische Kirchen und atemberaubende Panoramablicke auf den Apennin erkunden. Pietraperla ist ein idealer Rückzugsort für Wanderer, Naturliebhaber und alle, die die Seele des ländlichen Italiens suchen.",
          "hu": "Pietraperla egy békés, rejtett gyöngyszem a Marche régió festői tájain. Az idilli, lankás dombok és a hagyományos kőépítészet jellemzi, és mélyen autentikus olasz élményt nyújt, messze a tömegturizmus nyüzsgésétől. A falu csendes bájt áraszt, ahol az élet kényelmes tempóban zajlik, és a vidék hagyományait ma is hevesen őrzik. A látogatók ősi, kanyargós sikátorokat, történelmi templomokat és az Appenninekre nyíló lélegzetelállító panorámát fedezhetnek fel. Pietraperla ideális menedék a túrázók, a természet szerelmesei és bárki számára, aki a vidéki Olaszország lelkét keresi.",
          "ro": "Pietraperla este o bijuterie liniștită, ascunsă, cuibărită în peisajele pitorești ale regiunii Marche. Caracterizat prin dealurile sale idilice, ondulate și arhitectura tradițională din piatră, oferă o experiență italiană profund autentică, departe de mulțimile aglomerate ale turismului de masă. Satul emană un farmec liniștit, unde viața se desfășoară într-un ritm relaxat și tradițiile zonei rurale sunt încă păstrate cu sfințenie. Vizitatorii pot explora alei antice șerpuite, biserici istorice și vederi panoramice uluitoare ale Munților Apenini. Pietraperla este un refugiu ideal pentru drumeții, iubitorii de natură și oricine caută sufletul Italiei rurale."
    },
    facts: {
          "en": [
                "Pietraperla remains largely undiscovered by international tourism.",
                "Its architecture is primarily composed of local white and pink limestone.",
                "The village is surrounded by lush vineyards, olive groves, and sunflower fields.",
                "It serves as an excellent starting point for trekking and cycling in the Apennines.",
                "Local gastronomy features robust Marche specialties like truffles and pecorino cheese.",
                "Traditional festivals celebrating local harvests are a major part of community life.",
                "Many historic buildings in Pietraperla date back to the Middle Ages.",
                "It offers a completely tranquil environment, promoting a 'slow tourism' lifestyle."
          ],
          "de": [
                "Pietraperla ist vom internationalen Tourismus noch weitgehend unentdeckt.",
                "Seine Architektur besteht hauptsächlich aus lokalem weißem und rosa Kalkstein.",
                "Das Dorf ist von üppigen Weinbergen, Olivenhainen und Sonnenblumenfeldern umgeben.",
                "Es dient als hervorragender Ausgangspunkt für Trekking- und Radtouren im Apennin.",
                "Die lokale Gastronomie bietet kräftige Spezialitäten der Marken wie Trüffel und Pecorino-Käse.",
                "Traditionelle Feste zur Feier der lokalen Ernte sind ein wichtiger Bestandteil des Gemeindelebens.",
                "Viele historische Gebäude in Pietraperla stammen aus dem Mittelalter.",
                "Es bietet eine völlig ruhige Umgebung und fördert einen 'langsamen Tourismus'-Lebensstil."
          ],
          "hu": [
                "Pietraperla a nemzetközi turizmus számára még nagyrészt felfedezetlen.",
                "Építészete elsősorban helyi fehér és rózsaszín mészkőből áll.",
                "A falut buja szőlőültetvények, olajfaligetek és napraforgómezők veszik körül.",
                "Kiváló kiindulópontként szolgál az Appenninekben történő túrázáshoz és kerékpározáshoz.",
                "A helyi gasztronómia olyan robusztus Marche-i specialitásokat kínál, mint a szarvasgomba és a pecorino sajt.",
                "A helyi betakarítást ünneplő hagyományos fesztiválok a közösségi élet fontos részét képezik.",
                "Pietraperla számos történelmi épülete a középkorból származik.",
                "Teljesen nyugodt környezetet kínál, elősegítve a 'lassú turizmus' (slow tourism) életmódját."
          ],
          "ro": [
                "Pietraperla rămâne în mare parte nedescoperită de turismul internațional.",
                "Arhitectura sa este compusă în principal din calcar local alb și roz.",
                "Satul este înconjurat de podgorii luxuriante, plantații de măslini și câmpuri de floarea-soarelui.",
                "Servește ca un punct de plecare excelent pentru drumeții și ciclism în Apenini.",
                "Gastronomia locală prezintă specialități robuste din Marche, cum ar fi trufele și brânza pecorino.",
                "Festivalurile tradiționale care sărbătoresc recoltele locale sunt o parte majoră a vieții comunitare.",
                "Multe clădiri istorice din Pietraperla datează din Evul Mediu.",
                "Oferă un mediu complet liniștit, promovând un stil de viață 'turism lent'."
          ]
    },
    image: "/geo-images/italy/it-pietraperla.webp",
    descriptionAdvanced: {
      de: "Pietrapertosa ist ein malerisches Dorf in der Region Basilikata, das spektakulär in die zerklüfteten Felsen der Lukanischen Dolomiten eingebettet ist. Mit einer Höhe von 1.088 Metern über dem Meeresspiegel ist es die höchstgelegene Gemeinde der Region und bietet eine atemberaubende Aussicht auf das umliegende Tal. Der Name des Ortes leitet sich von einer durchlöcherten Felsformation (Pietra Perciata) ab, die charakteristisch für die Umgebung ist. Historisch gesehen wurde das Dorf von den Sarazenen im 10. Jahrhundert gegründet, wovon noch heute das Viertel Arabata mit seinen engen, labyrinthischen Gassen zeugt. Auf dem höchsten Punkt befinden sich die Ruinen einer antiken Festung, die im Laufe der Jahrhunderte von den Normannen und Staufern ausgebaut wurde. Eine der bekanntesten modernen Attraktionen ist der „Volo dell'Angelo“ (Engelsflug), eine Zipline, die Pietrapertosa mit dem Nachbardorf Castelmezzano verbindet. Das Dorf gehört zur Vereinigung der „Borghi più belli d'Italia“ (schönste Dörfer Italiens) und hat sich seinen ursprünglichen mittelalterlichen Charme fast vollständig bewahrt. Die Verbindung von Natur und historischer Architektur macht es zu einem einzigartigen Ziel für Abenteurer und Kulturliebhaber.",
      hu: "Pietrapertosa egy lenyűgöző hegyi falu Basilicata régióban, amely a Lukániai-Dolomitok bizarr sziklaalakzatai közé ékelődött. 1088 méteres tengerszint feletti magasságával ez a régió legmagasabban fekvő települése, ahonnan páratlan kilátás nyílik a Basento-völgyre. A falu neve az úgynevezett „átlyukasztott sziklából” (Pietra Perciata) ered, amely a falu bejáratánál található. Történelme a 10. századig nyúlik vissza, amikor a szaracénok alapították meg az Arabata negyedet, amely ma is őrzi különleges, szűk utcás szerkezetét. A falu legmagasabb pontján egy régi vár romjai állnak, amelynek alapjait még a rómaiak fektették le, majd a normannok bővítették tovább. Pietrapertosa világszerte ismertté vált a „Volo dell'Angelo” (Angyalrepülés) nevű attrakcióról, amely egy acélkötélen való repülést jelent a szomszédos Castelmezzano faluig. A település az „I Borghi più belli d'Italia” szövetség tagja, ami garantálja történelmi és esztétikai értékének megőrzését. A falu látképe, ahol a házak szinte beleolvadnak a függőleges sziklafalakba, az egyik leglátványosabb egész Dél-Olaszországban.",
      ro: "Pietrapertosa este un sat montan spectaculos situat în regiunea Basilicata, fiind faimos pentru modul în care este integrat direct în stâncile abrupte ale Dolomiților Lucani. Aflat la o altitudine de 1.088 de metri, este cea mai înaltă localitate din regiune, oferind priveliști uluitoare asupra văii Basento. Numele său provine de la o formațiune stâncoasă perforată, „Pietra Perciata”, vizibilă la intrarea în sat. Originile sale sunt legate de prezența sarazinilor în secolul al X-lea, care au fondat cartierul Arabata, caracterizat prin străduțe înguste și șerpuite care urmează profilul stâncii. Deasupra satului se înalță ruinele unui castel normand-șvab, sculptat parțial în piatră, care a servit drept punct de observație strategic timp de secole. Localitatea este renumită pentru „Volo dell'Angelo” (Zborul Îngerului), o tiroliană de mare viteză care leagă Pietrapertosa de satul vecin Castelmezzano, oferind o experiență unică de adrenalină. Pietrapertosa este inclus în lista celor mai frumoase sate din Italia (Borghi più belli d'Italia), datorită conservării excepționale a patrimoniului său istoric. Vizitatorii sunt atrași aici de liniștea locului, de traseele de drumeție montană și de gastronomia locală tradițională.",
      en: "Pietrapertosa is a picturesque mountain village in the Basilicata region, uniquely nestled within the dramatic rock formations of the Lucanian Dolomites. Situated at an altitude of 1,088 meters, it holds the title of the highest municipality in the region, offering sweeping views of the Basento Valley. The village's name originates from a 'pierced stone' (Pietra Perciata) located at the entrance to the settlement. Historically, the town was established in the 10th century by Saracens, whose influence is still visible in the oldest district, Arabata, known for its narrow, winding alleys that follow the natural contours of the rock. At the highest point of the village stand the ruins of a Norman-Swabian castle, partially carved into the mountain itself. Pietrapertosa is globally famous for the 'Volo dell'Angelo' (Flight of the Angel), a high-speed zip-line connecting it to the neighboring village of Castelmezzano across a deep valley. As a member of the 'I Borghi più belli d'Italia' (The Most Beautiful Villages of Italy), it maintains its medieval charm and traditional character. The seamless integration of ancient stone houses with the vertical crags creates one of the most striking urban landscapes in southern Italy.",
    },
    factsAdvanced: {
      de: ["Pietrapertosa liegt auf einer Höhe von 1.088 Metern über dem Meeresspiegel.", "Das Viertel Arabata wurde im 10. Jahrhundert von Sarazenen gegründet.", "Die Zipline 'Volo dell'Angelo' erreicht Geschwindigkeiten von bis zu 120 km/h.", "Die Entfernung zwischen Pietrapertosa und Castelmezzano per Zipline beträgt etwa 1.500 Meter.", "Die Ruinen des Schlosses stammen ursprünglich aus der römischen Zeit und wurden im Mittelalter ausgebaut.", "Pietrapertosa gehört seit Jahren zur Liste der schönsten Dörfer Italiens (Borghi più belli d'Italia)."],
      hu: ["A falu tengerszint feletti magassága 1088 méter, amivel Basilicata legmagasabb pontja.", "Az Arabata negyed neve az arab hódítókra (szaracénokra) utal, akik a 10. században éltek itt.", "Az Angyalrepülés (Volo dell'Angelo) során a látogatók több mint 100 km/h sebességgel repülnek.", "A falu bejáratánál álló Pietra Perciata szikla egy hatalmas természetes nyílással rendelkezik.", "A helyi vár romjai között egy ősi napórát is felfedezhetünk a sziklába vésve.", "A falu népessége mára 1000 fő alá csökkent, de a turizmus új lendületet adott a településnek."],
      ro: ["Pietrapertosa este situat la o altitudine maximă de 1.088 metri.", "Cartierul Arabata păstrează structura urbană din perioada sarazină (secolul al X-lea).", "Tiroliana 'Volo dell'Angelo' are o lungime de aproximativ 1.413 metri între cele două sate.", "Castelul local a fost construit inițial de normanzi în secolul al XI-lea.", "Localitatea face parte din asociația 'I Borghi più belli d'Italia'.", "Punctul cel mai înalt al castelului este accesibil printr-o scară săpată direct în stâncă."],
      en: ["Pietrapertosa is the highest village in Basilicata at 1,088 meters above sea level.", "The Arabata district was founded by Saracens around the year 1000 AD.", "The 'Volo dell'Angelo' zip-line reaches top speeds of approximately 120 km/h (75 mph).", "The castle ruins include a unique staircase carved into the living rock of the mountain.", "The village is officially listed as one of the most beautiful in Italy.", "The zip-line experience consists of two different flights: the Peschiera and the Paschiere."],
    },
  },
  {
    id: "it-gran-paradiso",
    type: "mountain",
    parent: "IT-23",
    coords: [7.267, 45.517],
    name: { de: "Nationalpark Gran Paradiso", hu: "Gran Paradiso Nemzeti Park", ro: "Parcul Național Gran Paradiso", en: "Gran Paradiso National Park" },
    
    
    description: {
          "en": "Gran Paradiso National Park is Italy's oldest and one of its most stunning national parks, situated in the Graian Alps between the Aosta Valley and Piedmont. Originally established in 1922 to protect the endangered Alpine ibex from extinction, it spans over 700 square kilometers of dramatic mountain terrain. The park's landscape is characterized by soaring, glacier-capped peaks, deep U-shaped valleys, and dense, ancient forests of larch and fir. The centerpiece is the Gran Paradiso mountain, the only peak over 4,000 meters entirely within Italian borders. It remains a premier destination for hiking, wildlife observation, and high-altitude mountaineering.",
          "de": "Der Nationalpark Gran Paradiso ist Italiens ältester und einer seiner atemberaubendsten Nationalparks, gelegen in den Grajischen Alpen zwischen dem Aostatal und dem Piemont. Ursprünglich 1922 gegründet, um den gefährdeten Alpensteinbock vor dem Aussterben zu bewahren, erstreckt er sich über mehr als 700 Quadratkilometer dramatisches Gebirgsgelände. Die Landschaft des Parks ist geprägt von hoch aufragenden, gletscherbedeckten Gipfeln, tiefen U-förmigen Tälern und dichten, alten Lärchen- und Tannenwäldern. Das Herzstück ist der Berg Gran Paradiso, der einzige Gipfel über 4.000 Meter, der vollständig innerhalb der italienischen Grenzen liegt. Er bleibt ein erstklassiges Ziel für Wanderungen, Wildtierbeobachtungen und Hochgebirgsalpinismus.",
          "hu": "A Gran Paradiso Nemzeti Park Olaszország legrégebbi és egyik leglenyűgözőbb nemzeti parkja, amely a Graji-Alpokban, Valle d'Aosta és Piemont között található. Eredetileg 1922-ben hozták létre a veszélyeztetett kőszáli kecske kihalástól való megmentésére, és több mint 700 négyzetkilométernyi drámai hegyvidéki terepet ölel fel. A park táját égbe nyúló, gleccserekkel borított csúcsok, mély U alakú völgyek és sűrű, ősi vörösfenyő- és jegenyefenyőerdők jellemzik. A központja a Gran Paradiso hegy, az egyetlen 4000 méter feletti csúcs, amely teljes egészében az olasz határokon belül található. Továbbra is a túrázás, a vadon élő állatok megfigyelése és a magashegyi hegymászás első számú célpontja.",
          "ro": "Parcul Național Gran Paradiso este cel mai vechi și unul dintre cele mai uimitoare parcuri naționale din Italia, situat în Alpii Graici între Valea Aosta și Piemont. Fondat inițial în 1922 pentru a proteja ibexul alpin pe cale de dispariție, acesta se întinde pe o suprafață de peste 700 de kilometri pătrați de teren montan dramatic. Peisajul parcului este caracterizat de vârfuri înalte, acoperite de ghețari, văi adânci în formă de U și păduri dese și antice de zadă și brad. Piesa centrală este muntele Gran Paradiso, singurul vârf de peste 4.000 de metri aflat în întregime în granițele italiene. Rămâne o destinație principală pentru drumeții, observarea faunei sălbatice și alpinism la mare altitudine."
    },
    facts: {
          "en": [
                "The park was originally the private hunting reserve of King Victor Emmanuel II.",
                "It succeeded in saving the Alpine ibex, which is now the symbol of the park.",
                "The Gran Paradiso peak reaches an elevation of 4,061 meters (13,323 feet).",
                "The park is home to golden eagles, chamois, marmots, and the bearded vulture.",
                "It features over 500 kilometers of marked trails for visitors.",
                "The park spans an area where both French and Italian are traditionally spoken.",
                "Alpine botanical gardens within the park showcase rare, high-altitude flora.",
                "The landscape was heavily shaped by glacial activity during the last Ice Age."
          ],
          "de": [
                "Der Park war ursprünglich das private Jagdrevier von König Viktor Emanuel II.",
                "Er war erfolgreich bei der Rettung des Alpensteinbocks, der heute das Symbol des Parks ist.",
                "Der Gipfel des Gran Paradiso erreicht eine Höhe von 4.061 Metern.",
                "Der Park beherbergt Steinadler, Gämsen, Murmeltiere und Bartgeier.",
                "Er bietet über 500 Kilometer markierte Wanderwege für Besucher.",
                "Der Park erstreckt sich über ein Gebiet, in dem traditionell sowohl Französisch als auch Italienisch gesprochen wird.",
                "Alpine botanische Gärten im Park zeigen seltene Hochgebirgsflora.",
                "Die Landschaft wurde stark von der Gletscheraktivität während der letzten Eiszeit geprägt."
          ],
          "hu": [
                "A park eredetileg II. Viktor Emánuel király magán vadászterülete volt.",
                "Sikeresen megmentette a kőszáli kecskét, amely ma a park szimbóluma.",
                "A Gran Paradiso csúcsa 4061 méter magasságot ér el.",
                "A park szirti sasok, zergék, mormoták és szakállas saskeselyűk otthona.",
                "Több mint 500 kilométer jelzett ösvényt kínál a látogatóknak.",
                "A park olyan területet ölel fel, ahol hagyományosan franciául és olaszul is beszélnek.",
                "A parkon belüli alpesi botanikus kertek ritka, magashegyi növényvilágot mutatnak be.",
                "A tájat erősen formálta a gleccsertevékenység a legutóbbi jégkorszak során."
          ],
          "ro": [
                "Parcul a fost inițial rezervația privată de vânătoare a regelui Victor Emanuel al II-lea.",
                "A reușit să salveze ibexul alpin, care este acum simbolul parcului.",
                "Vârful Gran Paradiso atinge o altitudine de 4.061 de metri.",
                "Parcul găzduiește vulturi aurii, capre negre, marmote și zăganul.",
                "Dispune de peste 500 de kilometri de trasee marcate pentru vizitatori.",
                "Parcul se întinde pe o zonă în care se vorbesc în mod tradițional atât franceza, cât și italiana.",
                "Grădinile botanice alpine din cadrul parcului prezintă o floră rară de mare altitudine.",
                "Peisajul a fost puternic modelat de activitatea glaciară din timpul ultimei ere glaciare."
          ]
    },
    image: "/geo-images/italy/it-gran-paradiso.webp",
    descriptionAdvanced: {
      de: "Der Nationalpark Gran Paradiso ist der älteste Nationalpark Italiens und liegt in den Grajischen Alpen zwischen den Regionen Aostatal und Piemont. Er wurde im Jahr 1922 gegründet, basierend auf einem ehemaligen königlichen Jagdrevier von König Viktor Emanuel II., um den Alpensteinbock vor der Ausrottung zu bewahren. Das Herzstück des Parks ist das Massiv des Gran Paradiso, der mit 4.061 Metern der einzige Berg über 4.000 Meter ist, der vollständig auf italienischem Staatsgebiet liegt. Die Landschaft ist geprägt von weiten Gletschern, tiefen Tälern, alpinen Wiesen und dichten Nadelwäldern, die einer vielfältigen Fauna und Flora Lebensraum bieten. Neben dem Steinbock, der heute wieder in großen Beständen vorkommt, sind hier auch Gämsen, Murmeltiere und der seltene Steinadler beheimatet. Der Park erstreckt sich über eine Fläche von rund 71.000 Hektar und bietet ein Wegenetz von über 500 Kilometern für Wanderer und Bergsteiger. Die strengen Schutzbestimmungen haben dazu beigetragen, dass die Ökosysteme des Hochgebirges in einem fast unberührten Zustand erhalten geblieben sind. Der Gran Paradiso ist nicht nur ein Symbol für den Naturschutz in Italien, sondern auch ein weltweit anerkanntes Beispiel für die Rettung bedrohter Tierarten.",
      hu: "A Gran Paradiso Nemzeti Park Olaszország legidősebb nemzeti parkja, amely az Alpok graji vonulatában, Valle d’Aosta és Piemont régiók határán fekszik. 1922-ben alapították meg, miután II. Viktor Emánuel király felajánlotta egykori vadászterületét az államnak az alpesi kőszáli kecske megmentése érdekében. A park névadója a 4061 méter magas Gran Paradiso csúcs, amely az egyetlen olyan négyezer méter feletti hegy, amely teljes egészében olasz területen található. A mintegy 71 000 hektáros terület változatos tájakkal rendelkezik: gleccserek, mély völgyek, alpesi rétek és sűrű erdők váltják egymást. A kőszáli kecskék mellett zergék, mormoták és kőszáli sasok is nagy számban élnek a területen, köszönhetően a szigorú védelmi szabályoknak. A park látogatóit több mint 500 kilométernyi túraútvonal várja, amelyek lehetővé teszik a vadon felfedezését anélkül, hogy kárt tennének az ökoszisztémában. A nemzeti park kutatási és környezetvédelmi szempontból is kiemelkedő, hiszen több évtizedes adatsorokkal rendelkeznek az alpesi élővilág változásairól. A Gran Paradiso ma az európai természetvédelem egyik legsikeresebb példája, ahol a biodiverzitás megőrzése és a fenntartható turizmus kéz a kézben jár.",
      ro: "Parcul Național Gran Paradiso este primul parc național înființat în Italia, fiind situat în Alpii Graici, la granița dintre regiunile Valle d'Aosta și Piemont. Fondat oficial în anul 1922, parcul a luat naștere din dorința de a proteja capra neagră alpină (ibexul), care fusese vânată până aproape de extincție în fostele domenii regale de vânătoare ale lui Vittorio Emanuele al II-lea. Masivul Gran Paradiso, cu vârful său de 4.061 de metri, este singurul munte de peste 4.000 de metri aflat în întregime pe teritoriul Italiei. Parcul se întinde pe o suprafață de peste 71.000 de hectare și este caracterizat de un peisaj alpin spectaculos, cu 57 de ghețari, văi adânci și păduri de conifere. Fauna parcului este extrem de bogată, pe lângă ibexi putând fi observate capre negre, marmote și exemplare impresionante de vultur auriu. Există o rețea vastă de poteci, însumând aproximativ 500 de kilometri, care permit turiștilor să exploreze mediul protejat într-un mod sustenabil. Managementul parcului este considerat un model de succes în conservarea biodiversității montane la nivel european. Vizitarea parcului oferă o experiență autentică de sălbăticie, unde intervenția umană a fost limitată pentru a permite naturii să se regenereze.",
      en: "Gran Paradiso National Park is Italy's oldest national park, located in the Graian Alps between the Valle d'Aosta and Piedmont regions. It was officially established in 1922, developing from a former royal hunting reserve donated by King Victor Emmanuel II to save the Alpine ibex from extinction. The park's namesake is the Gran Paradiso peak, which at 4,061 meters is the only mountain over 4,000 meters located entirely within Italian borders. Covering an area of approximately 71,000 hectares, the park features a diverse landscape of glaciers, deep glacial valleys, alpine meadows, and dense larch and fir forests. In addition to the ibex, which has seen its population fully recover, the park is home to chamois, marmots, and majestic golden eagles. Visitors can explore the wilderness through a well-maintained network of hiking trails exceeding 500 kilometers in total length. The park's strict conservation policies have made it a world-class example of ecosystem protection and wildlife management. Today, it remains a vital sanctuary for high-altitude biodiversity and a premier destination for mountain enthusiasts and researchers alike.",
    },
    factsAdvanced: {
      de: ["Gran Paradiso wurde am 3. Dezember 1922 als erster Nationalpark Italiens gegründet.", "Der Gipfel des Gran Paradiso erreicht eine Höhe von 4.061 Metern.", "Der Park umfasst eine Gesamtfläche von etwa 71.000 Hektar in zwei Regionen.", "Im Park befinden sich 57 Gletscher, die die Landschaft maßgeblich geformt haben.", "Das Wegenetz für Wanderer im Park erstreckt sich über eine Länge von 500 Kilometern.", "Die Steinbockpopulation im Park wurde von weniger als 100 Tieren auf mehrere Tausend gesteigert."],
      hu: ["A nemzeti parkot 1922. december 3-án alapították meg hivatalosan.", "A Gran Paradiso csúcs magassága 4061 méter, első megmászása 1860-ban történt.", "A park területén 57 különböző gleccser található, bár méretük a klímaváltozás miatt csökken.", "A túraútvonalak hossza meghaladja az 500 kilométert a park teljes területén.", "A park 710 négyzetkilométeren terül el, megosztva Valle d'Aosta és Piemont között.", "Az alpesi kőszáli kecske (Capra ibex) a park hivatalos szimbóluma."],
      ro: ["Parcul a fost înființat oficial pe 3 decembrie 1922 prin decret regal.", "Vârful Gran Paradiso are o înălțime de 4.061 metri deasupra nivelului mării.", "Suprafața totală a parcului este de aproximativ 710 kilometri pătrați.", "Există 57 de ghețari activi în interiorul limitelor parcului național.", "Rețeaua de poteci marcate pentru drumeție măsoară peste 500 de kilometri.", "Ibexul alpin a fost salvat de la extincție aici, populația actuală fiind stabilă."],
      en: ["Gran Paradiso became Italy's first national park on December 3, 1922.", "The highest point in the park is the Gran Paradiso peak at 4,061 meters.", "The park covers a total area of approximately 71,000 hectares (175,000 acres).", "There are 57 glaciers within the park, though they are currently receding.", "The park maintains a network of over 500 kilometers of hiking paths.", "King Victor Emmanuel II donated his hunting reserve to the state in 1920."],
    },
  },
  {
    id: "it-abruzzo-np",
    type: "mountain",
    parent: "IT-65",
    coords: [13.750, 41.883],
    name: { de: "Nationalpark Abruzzen", hu: "Abruzzo Nemzeti Park", ro: "Parcul Național Abruzzo", en: "Abruzzo National Park" },
    
    
    description: {
          "en": "The Abruzzo, Lazio and Molise National Park is one of Italy's most vital nature reserves, located in the heart of the Apennine Mountains. Spanning three regions, it is famous for its dense, ancient beech forests, rolling meadows, and pristine mountain lakes. The park plays a crucial global role in wildlife conservation, famously serving as the primary sanctuary for the endangered Marsican brown bear and the Apennine wolf. Its rugged, wild landscape is dotted with enchanting, well-preserved medieval villages that have lived in harmony with nature for centuries. It is a true paradise for ecotourism and hiking enthusiasts.",
          "de": "Der Nationalpark Abruzzen, Latium und Molise ist eines der wichtigsten Naturschutzgebiete Italiens und liegt im Herzen des Apennin. Er erstreckt sich über drei Regionen und ist berühmt für seine dichten, alten Buchenwälder, sanften Wiesen und unberührten Bergseen. Der Park spielt weltweit eine entscheidende Rolle beim Schutz der Tierwelt und ist berühmt als wichtigstes Zufluchtsgebiet für den stark gefährdeten Marsischen Braunbären und den Apennin-Wolf. Seine raue, wilde Landschaft ist übersät mit bezaubernden, gut erhaltenen mittelalterlichen Dörfern, die seit Jahrhunderten in Harmonie mit der Natur leben. Es ist ein wahres Paradies für Ökotourismus und Wanderfreunde.",
          "hu": "Az Abruzzo, Lazio és Molise Nemzeti Park Olaszország egyik legfontosabb természetvédelmi területe, amely az Appenninek szívében található. A három régiót átfogó park sűrű, ősi bükkerdőiről, lankás rétjeiről és érintetlen hegyi tavairól híres. A park kulcsfontosságú globális szerepet játszik a vadvilág megőrzésében, és híresen a veszélyeztetett marsicai barnamedve és az appennini farkas elsődleges menedékhelyeként szolgál. Zord, vad táját varázslatos, jól megőrzött középkori falvak tarkítják, amelyek évszázadok óta harmóniában élnek a természettel. Igazi paradicsom az ökoturizmus és a túrázás szerelmeseinek.",
          "ro": "Parcul Național Abruzzo, Lazio și Molise este una dintre cele mai vitale rezervații naturale din Italia, situată în inima Munților Apenini. Întinzându-se pe trei regiuni, este faimos pentru pădurile sale dese și antice de fagi, pajiștile ondulate și lacurile de munte imaculate. Parcul joacă un rol global crucial în conservarea faunei sălbatice, servind în mod faimos ca sanctuar principal pentru ursul brun marsican pe cale de dispariție și lupul apenin. Peisajul său accidentat și sălbatic este presărat cu sate medievale fermecătoare și bine conservate, care au trăit în armonie cu natura timp de secole. Este un adevărat paradis pentru ecoturism și pasionații de drumeții."
    },
    facts: {
          "en": [
                "The park was officially established in 1923 to protect local wildlife.",
                "It is the last stronghold of the critically endangered Marsican brown bear.",
                "The ancient beech forests of the park are recognized as a UNESCO World Heritage site.",
                "More than 60% of the park's territory is covered by forests.",
                "The park successfully reestablished the population of the Apennine chamois.",
                "Lake Barrea and Lake Vivo are picturesque artificial lakes within the park.",
                "Pescasseroli is often considered the 'capital' and main visitor hub of the park.",
                "It is one of the oldest national parks in Italy, pioneering conservation efforts."
          ],
          "de": [
                "Der Park wurde 1923 offiziell gegründet, um die lokale Tierwelt zu schützen.",
                "Er ist die letzte Hochburg des vom Aussterben bedrohten Marsischen Braunbären.",
                "Die alten Buchenwälder des Parks sind als UNESCO-Weltkulturerbe anerkannt.",
                "Mehr als 60 % der Parkfläche sind von Wäldern bedeckt.",
                "Der Park hat die Population der Apennin-Gämse erfolgreich wiederhergestellt.",
                "Der Barrea-See und der Vivo-See sind malerische künstliche Seen im Park.",
                "Pescasseroli wird oft als 'Hauptstadt' und Hauptbesuchszentrum des Parks angesehen.",
                "Er ist einer der ältesten Nationalparks in Italien und ein Pionier in Sachen Naturschutz."
          ],
          "hu": [
                "A parkot hivatalosan 1923-ban hozták létre a helyi vadvilág védelme érdekében.",
                "Ez a kritikusan veszélyeztetett marsicai barnamedve utolsó fellegvára.",
                "A park ősi bükkerdői az UNESCO világörökség részeként ismertek el.",
                "A park területének több mint 60%-át erdő borítja.",
                "A park sikeresen helyreállította az appennini zerge populációját.",
                "A Barrea-tó és a Vivo-tó festői mesterséges tavak a parkon belül.",
                "Pescasserolit gyakran a park 'fővárosának' és fő látogatói központjának tekintik.",
                "Olaszország egyik legrégebbi nemzeti parkja, amely úttörő szerepet játszott a természetvédelemben."
          ],
          "ro": [
                "Parcul a fost înființat oficial în 1923 pentru a proteja fauna locală.",
                "Este ultimul bastion al ursului brun marsican, aflat în pericol critic de dispariție.",
                "Pădurile antice de fagi ale parcului sunt recunoscute ca sit al Patrimoniului Mondial UNESCO.",
                "Peste 60% din teritoriul parcului este acoperit de păduri.",
                "Parcul a restabilit cu succes populația caprei negre apenine.",
                "Lacul Barrea și Lacul Vivo sunt lacuri artificiale pitorești în cadrul parcului.",
                "Pescasseroli este adesea considerată 'capitala' și principalul centru de vizitatori al parcului.",
                "Este unul dintre cele mai vechi parcuri naționale din Italia, pionierat în eforturile de conservare."
          ]
    },
    image: "/geo-images/italy/it-abruzzo-np.webp",
    descriptionAdvanced: {
      de: "Der Nationalpark Abruzzen, Latium und Molise ist eines der ältesten Naturschutzgebiete Italiens und liegt im Herzen des Apennin-Gebirges. Er wurde im Jahr 1923 gegründet, um die einzigartige Artenvielfalt Zentralitaliens zu schützen, und erstreckt sich heute über eine Fläche von rund 50.000 Hektar. Der Park ist weltberühmt für seine Rolle beim Schutz des Marsischen Braunbären, einer seltenen Unterart des Braunbären, von der nur noch wenige Dutzend Exemplare existieren. Die Landschaft wird von schroffen Kalksteingipfeln, dichten Buchenwäldern und weiten Hochebenen geprägt, die vielen bedrohten Tierarten wie dem Abruzzen-Gämse und dem Apennin-Wolf Zuflucht bieten. Einige der Buchenwälder im Park gehören seit 2017 zum UNESCO-Weltnaturerbe, da sie zu den besterhaltenen Urwäldern Europas zählen. Der Park umfasst zahlreiche malerische Dörfer wie Pescasseroli, die sich harmonisch in die Natur einfügen und das kulturelle Erbe der Region bewahren. Die Verwaltung des Parks setzt seit Jahrzehnten auf ein nachhaltiges Tourismusmodell, das den Schutz der Wildnis mit der wirtschaftlichen Entwicklung der lokalen Gemeinden verbindet. Für Besucher bietet der Park ein weitläufiges Netz an Wanderwegen und zahlreiche Beobachtungspunkte für die Tierwelt.",
      hu: "Az Abruzzo, Lazio és Molise Nemzeti Park Olaszország egyik legrégebbi és legfontosabb természetvédelmi területe, amely az Appenninek középső vonulatában található. Az 1923-ban alapított park elsődleges célja a régió különleges állatvilágának, különösen a marsicai barna medvének a megőrzése volt, amely ma is a park jelképe. A mintegy 50 000 hektáros terület változatos domborzati formákkal rendelkezik: 2000 méter feletti csúcsok, mély folyóvölgyek és érintetlen bükkerdők alkotják a tájat. 2017-ben a park egyes bükköseit az UNESCO Világörökség részévé nyilvánították, mint az európai őserdők kiemelkedő példáit. Az állatvilág rendkívül gazdag, a medvék mellett farkasok, zergék és szirti sasok is otthonra lelnek a vadonban. A park területén több történelmi település is található, mint például Pescasseroli, ahol a látogatóközpontok segítenek megismerni a természetvédelmi munkát. A fenntartható turizmus jegyében több száz kilométernyi túraútvonal áll rendelkezésre, amelyek szigorúan szabályozott keretek között járhatók. A park sikeresen ötvözi a vadvilág védelmét a helyi hagyományok és a legeltetéses állattartás megőrzésével.",
      ro: "Parcul Național Abruzzo, Lazio și Molise este o arie protejată istorică situată în inima Munților Apenini, fiind unul dintre cele mai importante sanctuare ale biodiversității din Europa. Înființat oficial în anul 1923, parcul are o suprafață de aproximativ 50.000 de hectare și este renumit la nivel mondial pentru eforturile de conservare a ursului brun marsican, o specie endemică extrem de rară. Peisajul este unul montan autentic, cu vârfuri calcaroase ce depășesc 2.000 de metri, păduri de fag seculare și văi glaciare spectaculoase. În anul 2017, pădurile de fag din cadrul parcului au fost incluse în Patrimoniul Mondial UNESCO, datorită integrității lor ecologice excepționale. Fauna parcului include, de asemenea, lupi apenini, capre negre de Abruzzo și vulturi aurii, oferind cercetătorilor un laborator natural neprețuit. Localități precum Pescasseroli servesc drept porți de intrare în parc, păstrând o arhitectură tradițională și o legătură strânsă cu natura. Parcul este un model de 'eco-turism', oferind sute de kilometri de trasee marcate care permit observarea faunei fără a deranja habitatele naturale. Succesul acestui parc constă în echilibrul delicat menținut între activitățile umane tradiționale și protecția strictă a mediului sălbatic.",
      en: "The National Park of Abruzzo, Lazio, and Molise is a cornerstone of Italian nature conservation, situated in the central Apennines. Established in 1923, it covers about 50,000 hectares and was primarily created to protect the endangered Marsican brown bear, a subspecies unique to this region. The park features a rugged mountain landscape with limestone peaks rising above 2,000 meters, pristine glacial valleys, and ancient beech forests. In 2017, several of these old-growth beech forests were recognized as a UNESCO World Heritage site for their ecological significance. Beyond its famous bears, the park is a vital habitat for the Apennine wolf, the Abruzzo chamois, and the golden eagle. The park's territory includes several charming historic villages, with Pescasseroli serving as the primary administrative and visitor center. It is widely regarded as a successful model for sustainable tourism, balancing the preservation of wilderness with the socio-economic needs of local communities. With over 150 hiking trails spanning hundreds of kilometers, the park offers unparalleled opportunities for wildlife watching and high-altitude trekking in one of Italy's wildest regions.",
    },
    factsAdvanced: {
      de: ["Der Park wurde am 11. Januar 1923 offiziell eingeweiht.", "Er erstreckt sich über eine Kernzone von etwa 50.000 Hektar in drei Regionen.", "Die Population des Marsischen Braunbären im Park wird auf etwa 50 bis 60 Tiere geschätzt.", "Einige Buchenwälder im Park sind seit 2017 Teil des UNESCO-Weltnaturerbes.", "Der höchste Berg im Park ist der Monte Petroso mit einer Höhe von 2.249 Metern.", "Es gibt über 150 markierte Wanderwege mit einer Gesamtlänge von rund 250 Kilometern."],
      hu: ["A nemzeti parkot hivatalosan 1923. január 11-én alapították meg.", "A park területének több mint 60%-át sűrű bükkerdők borítják.", "A marsicai barna medve (Ursus arctos marsicanus) kizárólag ebben a régióban él.", "A park legmagasabb pontja a Monte Petroso, amely 2249 méter magas.", "A területen mintegy 2000 különböző növényfaj található meg.", "A park látogatóinak száma évente meghaladja az egymillió főt."],
      ro: ["Parcul a fost inaugurat oficial pe data de 11 ianuarie 1923.", "Suprafața zonei de protecție integrală este de aproximativ 500 de kilometri pătrați.", "Populația de urs brun marsican este estimată la aproximativ 50 de exemplare adulte.", "Vârful Monte Petroso atinge o altitudine de 2.249 metri.", "Pădurile de fag din parc au o vechime de peste 500 de ani în unele zone.", "Există 12 centre de vizitare tematice distribuite în principalele sate din parc."],
      en: ["The national park was officially inaugurated on January 11, 1923.", "The park's core area spans approximately 50,000 hectares across three regions.", "The Marsican brown bear is a critically endangered subspecies with only about 50 individuals.", "Ancient beech forests in the park were added to the UNESCO World Heritage list in 2017.", "The highest peak in the park is Monte Petroso, standing at 2,249 meters.", "The park is home to about 2,000 species of vascular plants and over 40 species of mammals."],
    },
  },
  {
    id: "it-pollino-np",
    type: "mountain",
    parent: "IT-78",
    coords: [16.100, 40.000],
    name: { de: "Nationalpark Pollino", hu: "Pollino Nemzeti Park", ro: "Parcul Național Pollino", en: "Pollino National Park" },
    
    
    description: {
          "en": "Pollino National Park is the largest national park in Italy, sprawling across the southern regions of Basilikata and Calabria. Its rugged, mountainous landscape is defined by deep river gorges, sweeping plateaus, and impressive limestone peaks, including the towering Serra Dolcedorme. The park is renowned for being the last refuge of the rare Bosnian pine (Pinus heldreichii), an ancient and resilient tree that has become its emblem. The area is rich in biodiversity, hosting wolves, golden eagles, and the elusive roe deer. Pollino offers unparalleled opportunities for trekking, canyoning, and experiencing the untamed beauty of southern Italy.",
          "de": "Der Nationalpark Pollino ist der größte Nationalpark Italiens und erstreckt sich über die südlichen Regionen Basilikata und Kalabrien. Seine raue, bergige Landschaft ist geprägt von tiefen Flussschluchten, weiten Hochebenen und beeindruckenden Kalksteingipfeln, darunter die hoch aufragende Serra Dolcedorme. Der Park ist bekannt als das letzte Zufluchtsgebiet der seltenen Panzerkiefer (Pinus heldreichii), eines uralten und widerstandsfähigen Baumes, der zu seinem Wahrzeichen geworden ist. Das Gebiet ist reich an biologischer Vielfalt und beherbergt Wölfe, Steinadler und die schwer zu fassenden Rehe. Pollino bietet unvergleichliche Möglichkeiten für Trekking, Canyoning und das Erleben der ungezähmten Schönheit Süditaliens.",
          "hu": "A Pollino Nemzeti Park Olaszország legnagyobb nemzeti parkja, amely a déli Basilicata és Calabria régiókon ível át. Zord, hegyvidéki táját mély folyóvölgyek, kiterjedt fennsíkok és lenyűgöző mészkőcsúcsok, köztük a magasba törő Serra Dolcedorme határozzák meg. A park híres arról, hogy ez a ritka páncélfenyő (Pinus heldreichii) utolsó menedéke, egy ősi és ellenálló fáé, amely a park szimbólumává vált. A terület gazdag biológiai sokféleségben, farkasoknak, szirti sasoknak és a nehezen megfogható őzeknek ad otthont. A Pollino páratlan lehetőségeket kínál a túrázásra, canyoningra és Dél-Olaszország megszelídítetlen szépségének megtapasztalására.",
          "ro": "Parcul Național Pollino este cel mai mare parc național din Italia, întinzându-se pe regiunile sudice Basilicata și Calabria. Peisajul său montan accidentat este definit de defileuri adânci de râuri, platouri vaste și vârfuri impresionante de calcar, inclusiv impunătorul Serra Dolcedorme. Parcul este renumit ca ultimul refugiu al rari pinului bosniac (Pinus heldreichii), un copac antic și rezistent care a devenit emblema sa. Zona este bogată în biodiversitate, găzduind lupi, vulturi de aur și căprioara evazivă. Pollino oferă oportunități de neegalat pentru drumeții, canyoning și experimentarea frumuseții neîmblânzite a sudului Italiei."
    },
    facts: {
          "en": [
                "The park covers a massive area of almost 2,000 square kilometers.",
                "The Bosnian pine trees here can live for over a thousand years.",
                "The Raganello Gorge is a famous spot for dramatic canyoning adventures.",
                "It was officially recognized as a UNESCO Global Geopark in 2015.",
                "The park contains prehistoric sites, such as the Romito Cave with Paleolithic art.",
                "Traditional ArbÁ«reshÁ« (Italo-Albanian) communities live within the park's boundaries.",
                "Mount Pollino is the second highest peak in the park at 2,248 meters.",
                "The diverse climate ranges from Mediterranean scrub to alpine environments."
          ],
          "de": [
                "Der Park erstreckt sich über eine riesige Fläche von fast 2.000 Quadratkilometern.",
                "Die Panzerkiefern können hier über tausend Jahre alt werden.",
                "Die Raganello-Schlucht ist ein berühmter Ort für dramatische Canyoning-Abenteuer.",
                "Er wurde 2015 offiziell als UNESCO Global Geopark anerkannt.",
                "Der Park beherbergt prähistorische Stätten, wie die Romito-Höhle mit paläolithischer Kunst.",
                "Traditionelle ArbÁ«reshÁ«-Gemeinschaften (Italo-Albaner) leben innerhalb der Parkgrenzen.",
                "Der Monte Pollino ist mit 2.248 Metern der zweithöchste Gipfel des Parks.",
                "Das vielfältige Klima reicht von mediterraner Macchia bis hin zu alpinen Umgebungen."
          ],
          "hu": [
                "A park hatalmas, közel 2000 négyzetkilométeres területet fed le.",
                "Az itteni páncélfenyők akár ezer évnél is tovább élhetnek.",
                "A Raganello-szurdok egy híres helyszín drámai canyoning kalandokhoz.",
                "2015-ben hivatalosan is elismerték UNESCO Globális Geoparkként.",
                "A parkban őskori lelőhelyek találhatók, például a Romito-barlang paleolitikus művészettel.",
                "Hagyományos arbÁ«reshÁ« (olasz-albán) közösségek élnek a park határain belül.",
                "A Monte Pollino a park második legmagasabb csúcsa a maga 2248 méterével.",
                "A változatos éghajlat a mediterrán cserjésektől az alpesi környezetig terjed."
          ],
          "ro": [
                "Parcul acoperă o suprafață masivă de aproape 2.000 de kilometri pătrați.",
                "Pinii bosniaci de aici pot trăi peste o mie de ani.",
                "Defileul Raganello este un loc faimos pentru aventuri dramatice de canyoning.",
                "A fost recunoscut oficial ca Geoparc Global UNESCO în 2015.",
                "Parcul conține situri preistorice, precum Peștera Romito cu artă paleolitică.",
                "Comunitățile tradiționale ArbÁ«reshÁ« (italo-albaneze) trăiesc în limitele parcului.",
                "Muntele Pollino este al doilea cel mai înalt vârf din parc, la 2.248 de metri.",
                "Clima diversă variază de la tufăriș mediteranean la medii alpine."
          ]
    },
    image: "/geo-images/italy/it-pollino-np.webp",
    descriptionAdvanced: {
      de: "Der Nationalpark Pollino ist mit einer Fläche von fast 193.000 Hektar das größte Naturschutzgebiet Italiens und erstreckt sich über die Regionen Basilikata und Kalabrien. Das Massiv des Pollino bildet den südlichsten Teil des Apennins und beherbergt einige der höchsten Gipfel Süditaliens, die über 2.200 Meter aufragen. Das Wahrzeichen des Parks ist die Panzerkiefer (Pinus heldreichii), ein lebendes Fossil, das nur in den höchsten Lagen des Parks vorkommt und bis zu 1.000 Jahre alt werden kann. Die Landschaft ist geprägt von tiefen Schluchten, wie der spektakulären Raganello-Schlucht, weiten Plateaus und dichten Wäldern. Neben seiner biologischen Vielfalt ist der Park auch für sein kulturelles Erbe bekannt, darunter Siedlungen der arbëreshë (albanischstämmige Bevölkerung), die ihre Sprache und Traditionen seit dem 15. Jahrhundert bewahrt haben. Im Jahr 2015 wurde der Park in das Global Geoparks Network der UNESCO aufgenommen, was seine geologische Bedeutung unterstreicht. Zu den archäologischen Schätzen gehört die Romito-Grotte mit Felsritzungen aus der Altsteinzeit. Der Park bietet ideale Bedingungen für Outdoor-Aktivitäten wie Wandern, Rafting und Skilanglauf in einer der wildesten und unberührtesten Gegenden des Landes.",
      hu: "A Pollino Nemzeti Park Olaszország legnagyobb kiterjedésű nemzeti parkja, amely közel 193 000 hektáron terül el Basilicata és Calabria régiók határán. A park központi eleme a Pollino-masszívum, amelynek legmagasabb csúcsai meghaladják a 2200 métert, és a Déli-Appenninek legfontosabb vonulatát alkotják. A terület jelképe a páncélfenyő (Pinus heldreichii), egy ritka jégkorszaki maradványfaj, amelynek egyes példányai több mint ezer évesek. A park tájait mély kanyonok – mint a híres Raganello-szurdok –, hatalmas fennsíkok és karsztformációk teszik változatossá. 2015-ben az UNESCO a Globális Geoparkok hálózatába is felvette a területet kiemelkedő geológiai értékei miatt. A természetvédelmi értékek mellett a kulturális örökség is jelentős: a parkban számos albán eredetű (arbëreshë) falu található, ahol a lakók ma is őrzik ősi nyelvüket és szokásaikat. Az archeológiai leletek közül kiemelkedik a Grotta del Romito, ahol 10 000 éves barlangrajzokat láthatunk. A túrázók számára a Pollino igazi vadont kínál, ahol a tömegturizmustól távol fedezhető fel Olaszország egyik legérintetlenebb hegyvidéke.",
      ro: "Parcul Național Pollino este cea mai mare arie protejată din Italia, întinzându-se pe o suprafață vastă de aproape 193.000 de hectare între regiunile Basilicata și Calabria. Masivul Pollino, inima parcului, include unele dintre cele mai înalte vârfuri din sudul Italiei, atingând altitudini de peste 2.200 de metri. Simbolul parcului este Pinul Loricat (Pinus heldreichii), un arbore rar și extrem de longeviv, considerat un monument viu al naturii care supraviețuiește în condiții extreme pe crestele muntoase. Peisajul este diversificat, incluzând canioane spectaculoase, precum cel al râului Raganello, platouri carstice și peșteri adânci. Din anul 2015, parcul face parte din Rețeaua Globală de Geoparcuri UNESCO, recunoaștere acordată pentru patrimoniul său geologic unic. Un punct de interes cultural major este reprezentat de comunitățile Arbëreshë, de origine albaneză, care s-au stabilit aici în secolul al XV-lea și își păstrează limba și tradițiile specifice. Arheologia este de asemenea prezentă prin Grotta del Romito, unde se află un celebru grafitti preistoric reprezentând un taur, datând de acum aproximativ 11.000 de ani. Parcul este o destinație de top pentru drumeții, alpinism și rafting, oferind un mediu natural sălbatic și nealterat.",
      en: "Pollino National Park is the largest protected area in Italy, covering nearly 193,000 hectares across the regions of Basilicata and Calabria. The Pollino Massif dominates the landscape, featuring some of the highest peaks in southern Italy, exceeding 2,200 meters in altitude. The park's emblem is the Bosnian pine (Pinus heldreichii), a rare glacial relic that clings to the highest rocky crags and can live for over a millennium. Its territory is characterized by dramatic geological features, including the deep Raganello Gorges, vast high-altitude plateaus, and intricate cave systems. In 2015, the park was officially added to the UNESCO Global Geoparks Network due to its exceptional geological significance. Beyond its natural wonders, the park preserves a rich cultural tapestry, including several 'Arbëreshë' villages inhabited by an ethnic Albanian minority that has maintained its language and customs since the 15th century. Archaeological sites like the Romito Cave contain Paleolithic engravings, including a famous 11,000-year-old depiction of a bull. Today, Pollino offers a vast wilderness for trekking, rafting, and mountaineering, representing one of the most authentic and untouched natural landscapes in the Mediterranean.",
    },
    factsAdvanced: {
      de: ["Pollino ist mit 192.565 Hektar der flächenmäßig größte Nationalpark Italiens.", "Der höchste Gipfel im Park ist der Serra Dolcedorme mit 2.267 Metern.", "Einige Panzerkiefern im Park sind nachweislich über 1.200 Jahre alt.", "Der Park wurde im Jahr 2015 offiziell in das UNESCO Geopark-Netzwerk aufgenommen.", "Die Raganello-Schlucht hat eine Länge von 13 Kilometern und steile Wände.", "In der Romito-Grotte wurden Ritzzeichnungen aus der Zeit um 9.000 v. Chr. gefunden."],
      hu: ["A park 192 565 hektáros területével a legnagyobb védett övezet Olaszországban.", "A legmagasabb csúcs a Serra Dolcedorme, amely 2267 méterrel magasodik a tenger szintje fölé.", "A parkban található 'Italus' nevű páncélfenyő kora meghaladja az 1230 évet.", "A Pollino 2015 óta az UNESCO Globális Geoparkok hálózatának tagja.", "A Grotta del Romito barlangban talált bikát ábrázoló véset körülbelül 11 000 éves.", "A parkban 56 különböző település található Basilicata és Calabria régiókban."],
      ro: ["Parcul Pollino acoperă o suprafață totală de 1.925 kilometri pătrați.", "Vârful Serra Dolcedorme are o înălțime de 2.267 metri.", "Pinul 'Italus' din parc este considerat cel mai bătrân arbore din Europa, având peste 1.230 de ani.", "Parcul a primit statutul de Geoparc UNESCO în anul 2015.", "Grotta del Romito conține vestigii umane datând de acum 14.000 de ani.", "Canionul Raganello este unul dintre cele mai lungi și mai adânci din Italia."],
      en: ["Pollino is Italy's largest national park, spanning 192,565 hectares.", "The highest peak in the park and southern Apennines is Serra Dolcedorme at 2,267 meters.", "The 'Italus' pine tree in the park is scientifically dated to be over 1,230 years old.", "Pollino National Park was designated a UNESCO Global Geopark in 2015.", "The Romito Cave features a famous prehistoric rock engraving of a bull from the Upper Paleolithic.", "The park's territory is shared between 56 municipalities in Basilicata and Calabria."],
    },
  },
  {
    id: "it-lago-di-garda",
    type: "lake",
    parent: "IT-34",
    coords: [10.717, 45.583],
    name: { de: "Gardasee", hu: "Garda-tó", ro: "Lacul Garda", en: "Lake Garda" },
    
    
    description: {
          "en": "Lake Garda is Italy's largest and most geographically diverse lake, situated gracefully between the Alps and the Po Valley. Its northern shores are narrowly wedged between dramatic cliffs, creating a fjord-like landscape favored by windsurfers and sailors. Moving south, the lake widens into a serene, Mediterranean-like basin lined with olive groves, vineyards, and vibrant citrus orchards. Charming historical towns such as Sirmione, with its thermal baths and ancient Roman ruins, dot the water's edge. Lake Garda's combination of majestic scenery, mild climate, and endless outdoor activities makes it a premier European holiday destination.",
          "de": "Der Gardasee ist Italiens größter und geografisch vielfältigster See, der anmutig zwischen den Alpen und der Poebene liegt. Seine nördlichen Ufer sind eng zwischen dramatischen Klippen eingeklemmt und schaffen eine fjordähnliche Landschaft, die von Windsurfern und Seglern bevorzugt wird. Nach Süden hin weitet sich der See zu einem ruhigen, mediterran anmutenden Becken, das von Olivenhainen, Weinbergen und lebhaften Zitrushainen gesäumt ist. Charmante historische Städte wie Sirmione mit seinen Thermalbädern und antiken römischen Ruinen säumen das Ufer. Die Kombination aus majestätischer Landschaft, mildem Klima und endlosen Outdoor-Aktivitäten macht den Gardasee zu einem erstklassigen europäischen Urlaubsziel.",
          "hu": "A Garda-tó Olaszország legnagyobb és földrajzilag legváltozatosabb tava, amely kecsesen fekszik az Alpok és a Pó-síkság között. Északi partjai drámai sziklák közé ékelődnek, egy fjordszerű tájat hozva létre, amelyet a szörfösök és a vitorlázók kedvelnek. Dél felé haladva a tó egy csendes, mediterrán jellegű medencévé szélesedik, amelyet olajfaligetek, szőlőültetvények és élénk citrusligetek szegélyeznek. A vízparton olyan bájos történelmi városok sorakoznak, mint Sirmione, a maga termálfürdőivel és ókori római romjaival. A fenséges táj, az enyhe éghajlat és a végtelen szabadtéri tevékenységek kombinációja Európa egyik legfontosabb nyaralóhelyévé teszi a Garda-tavat.",
          "ro": "Lacul Garda este cel mai mare și mai divers din punct de vedere geografic lac din Italia, situat grațios între Alpi și Valea Padului. Țărmurile sale nordice sunt strâns prinse între stânci dramatice, creând un peisaj asemănător fiordurilor, preferat de windsurferi și marinari. Spre sud, lacul se lărgește într-un bazin senin, asemănător celui mediteranean, mărginit de plantații de măslini, podgorii și livezi vibrante de citrice. Orașe istorice fermecătoare, cum ar fi Sirmione, cu băile sale termale și ruinele romane antice, punctează malul apei. Combinația Lacului Garda de peisaje mărețe, climă blândă și activități infinite în aer liber îl face o destinație de vacanță europeană de prim rang."
    },
    facts: {
          "en": [
                "Lake Garda covers an area of roughly 370 square kilometers.",
                "The lake spans three Italian regions: Lombardy, Veneto, and Trentino-Alto Adige.",
                "Riva del Garda in the north is globally renowned for its sailing and windsurfing conditions.",
                "Sirmione features the stunning Scaligero Castle, a completely water-surrounded fortress.",
                "The 'Grotte di Catullo' are the impressive ruins of an enormous Roman villa.",
                "The eastern shore is often referred to as the 'Olive Riviera' (Riviera degli Olivi).",
                "Gardaland, one of Europe's most popular theme parks, is located on its southeastern shore.",
                "The lake was formed by glaciers at the end of the last Ice Age."
          ],
          "de": [
                "Der Gardasee umfasst eine Fläche von rund 370 Quadratkilometern.",
                "Der See erstreckt sich über drei italienische Regionen: Lombardei, Venetien und Trentino-Südtirol.",
                "Riva del Garda im Norden ist weltweit bekannt für seine Segel- und Windsurfbedingungen.",
                "Sirmione beherbergt das atemberaubende Castello Scaligero, eine vollständig von Wasser umgebene Festung.",
                "Die 'Grotte di Catullo' sind die beeindruckenden Ruinen einer riesigen römischen Villa.",
                "Das Ostufer wird oft als 'Olivenriviera' (Riviera degli Olivi) bezeichnet.",
                "Gardaland, einer der beliebtesten Themenparks Europas, befindet sich am Südostufer.",
                "Der See wurde am Ende der letzten Eiszeit durch Gletscher gebildet."
          ],
          "hu": [
                "A Garda-tó területe nagyjából 370 négyzetkilométer.",
                "A tó három olasz régióba nyúlik át: Lombardiába, Venetóba és Trentino-Alto Adigébe.",
                "Az északi Riva del Garda világszerte ismert vitorlás- és szörfözési feltételeiről.",
                "Sirmione a lenyűgöző Scaligero-kastéllyal büszkélkedhet, amely egy teljesen vízzel körülvett erődítmény.",
                "A 'Grotte di Catullo' egy hatalmas római villa lenyűgöző romjai.",
                "A keleti partot gyakran 'Olajfa-riviérának' (Riviera degli Olivi) nevezik.",
                "A Gardaland, Európa egyik legnépszerűbb vidámparkja a délkeleti parton található.",
                "A tavat gleccserek alakították ki a legutóbbi jégkorszak végén."
          ],
          "ro": [
                "Lacul Garda acoperă o suprafață de aproximativ 370 de kilometri pătrați.",
                "Lacul se întinde pe trei regiuni italiene: Lombardia, Veneto și Trentino-Alto Adige.",
                "Riva del Garda din nord este renumită la nivel mondial pentru condițiile sale de navigație și windsurfing.",
                "Sirmione prezintă uimitorul Castel Scaligero, o fortăreață înconjurată complet de apă.",
                "'Grotte di Catullo' sunt ruinele impresionante ale unei vile romane enorme.",
                "Țărmul estic este adesea denumit 'Riviera Măslinilor' (Riviera degli Olivi).",
                "Gardaland, unul dintre cele mai populare parcuri tematice din Europa, este situat pe țărmul său de sud-est.",
                "Lacul a fost format de ghețari la sfârșitul ultimei ere glaciare."
          ]
    },
    image: "/geo-images/italy/it-lago-di-garda.webp",
    descriptionAdvanced: {
      de: "Der Gardasee ist der größte See Italiens und liegt im Norden des Landes zwischen den Ausläufern der Alpen und der Po-Ebene. Er erstreckt sich über die drei Regionen Lombardei, Venetien und Trentino-Südtirol und wurde am Ende der letzten Eiszeit durch gewaltige Gletscherbewegungen geformt. Die Uferlänge beträgt etwa 158 Kilometer, während der See eine maximale Tiefe von 346 Metern erreicht und eine Fläche von 370 Quadratkilometern einnimmt. Das milde Mikroklima der Region begünstigt das Wachstum von mediterranen Pflanzen wie Olivenbäumen, Zitrusfrüchten und Weinreben, was für diese nördliche geografische Lage außergewöhnlich ist. Historisch gesehen war der See seit der Römerzeit ein strategisch wichtiger Punkt, was heute noch durch zahlreiche Festungsanlagen wie die berühmte Skaligerburg in Sirmione belegt wird. Geografisch markiert der See den Übergang von den schroffen alpinen Gipfeln im Norden zu den sanften moränischen Hügeln im Süden. Heute ist der See nicht nur ein bedeutendes ökologisches Reservoir, sondern auch ein wirtschaftlicher Motor für den Tourismus und die lokale Landwirtschaft.",
      hu: "A Garda-tó Olaszország legnagyobb tava, amely az Alpok déli lábánál és a Pó-síkság északi szélén helyezkedik el Lombardia, Veneto és Trentino régiók találkozásánál. A tó az utolsó jégkorszak idején, hatalmas gleccserek mozgása révén jött létre, és jelenleg mintegy 370 négyzetkilométeres felületet foglal el. Partvonala körülbelül 158 kilométer hosszú, legnagyobb mélysége pedig eléri a 346 métert, amivel Európa egyik legjelentősebb édesvízi tározója. A tó körüli sajátos mikroklíma rendkívül enyhe, így a mediterrán növényzet, például az olajfák, citromligetek és szőlőültetvények is megélnek a hegyek lábánál. Történelmileg stratégiai fontosságú helyszín volt a római kortól kezdve, amit a part mentén található számos erődítmény, például a sirmionei Scaliger-vár is hűen tükröz. Napjainkban a tó meghatározó gazdasági és turisztikai központ, ahol a halászat és a minőségi bortermelés évszázados hagyományokra tekint vissza. Északi része meredek sziklafalak közé ékelődik, míg déli része kiszélesedik a lankás dombságok irányába.",
      ro: "Lacul Garda este cel mai mare lac din Italia, situat în partea de nord a țării, la confluența regiunilor Lombardia, Veneto și Trentino-Tirolul de Sud. Acesta s-a format la sfârșitul ultimei ere glaciare prin acțiunea masivă a ghețarilor, ocupând astăzi o suprafață de aproximativ 370 de kilometri pătrați. Linia țărmului se întinde pe 158 de kilometri, iar adâncimea maximă a lacului atinge 346 de metri, fiind o resursă hidrografică vitală pentru întreaga regiune. Climatul temperat specific favorizează dezvoltarea unei vegetații mediteraneene atipice pentru această latitudine, incluzând plantații extinse de măslini, lămâi și viță-de-vie. Din punct de vedere istoric, lacul a reprezentat un punct strategic esențial încă din epoca romană, fapt atestat de numeroasele fortificații medievale, precum castelul Scaligero din Sirmione. În prezent, zona este un motor economic major bazat pe turism și agricultură, atrăgând vizitatori prin peisajele sale contrastante. Partea nordică este caracterizată de versanți muntoși abrupți, în timp ce partea sudică se deschide spre câmpiile fertile ale Italiei de Nord.",
      en: "Lake Garda is the largest lake in Italy, situated in the northern part of the country between the steep alpine foothills and the expansive Po Valley. It spans three administrative regions—Lombardy, Veneto, and Trentino-Alto Adige—and was carved out by massive glacial movements during the last Ice Age. The lake covers an area of roughly 370 square kilometers, with a perimeter of 158 kilometers and a maximum sounding depth of 346 meters. Its unique microclimate supports the growth of Mediterranean flora, such as olive groves, citrus trees, and vineyards, which is rare for such a northern geographic position. Historically, the lake has served as a vital strategic crossing since Roman times, evidenced today by prominent medieval structures like the Scaliger Castle in Sirmione. Geographically, it marks the transition from the rugged peaks of the Alps in the north to the rolling morainic hills in the south. Today, the region is a significant economic hub driven by international tourism, traditional fishing, and high-quality agricultural production.",
    },
    factsAdvanced: {
      de: ["Mit einer Fläche von 370 km² ist er der flächenmäßig größte See Italiens.", "Die maximale Tiefe des Sees liegt bei 346 Metern unter dem Meeresspiegel.", "Der See wird hauptsächlich durch den Fluss Sarca im Norden gespeist.", "Sirmione beherbergt die 'Grotten des Catull', eine antike römische Villa.", "Im See befinden sich fünf Hauptinseln, darunter die Isola del Garda.", "Die Uferstraße 'Gardesana' wurde in den 1930er Jahren fertiggestellt."],
      hu: ["A tó 370 négyzetkilométeres felszínével Olaszország legnagyobb állóvize.", "Legmélyebb pontja 346 méterrel található a vízfelszín alatt.", "A tó fő tápláló folyója az északi irányból érkező Sarca.", "Sirmione városában találhatók a Catullus-barlangok nevű római kori romok.", "Öt nagyobb sziget található a tóban, melyek közül az Isola del Garda a legnagyobb.", "A tavat megkerülő Gardesana utat az 1930-as években adták át a forgalomnak."],
      ro: ["Suprafața de 370 km² îl face cel mai întins lac de pe teritoriul Italiei.", "Punctul de maximă adâncime al lacului este situat la 346 de metri.", "Principalul emisar de alimentare este râul Sarca, care intră prin nord.", "Sirmione adăpostește 'Grotele lui Catullus', ruinele unei vile romane antice.", "Există cinci insule principale în lac, Isola del Garda fiind cea mai mare.", "Drumul panoramic Gardesana a fost construit și finalizat în anii 1930."],
      en: ["With a surface area of 370 km², it is the largest lake in Italy.", "The lake reaches a maximum depth of 346 meters in its northern basin.", "The primary inflow of the lake is the Sarca River at the northern end.", "Sirmione is home to the 'Grottoes of Catullus', a grand ancient Roman villa.", "There are five main islands in the lake, including the private Isola del Garda.", "The Gardesana coastal road was fully completed and opened in the 1930s."],
    },
  },
  {
    id: "it-lago-di-como",
    type: "lake",
    parent: "IT-25",
    coords: [9.267, 46.000],
    name: { de: "Comer See", hu: "Comói-tó", ro: "Lacul Como", en: "Lake Como" },
    
    
    description: {
          "en": "Lake Como, located in the Lombardy region, is globally renowned for its spectacular, inverted Y-shape and breathtaking alpine scenery. Surrounded by steep, forested mountains, the lake has been a luxurious retreat for aristocrats and the wealthy since Roman times. Its shores are dotted with elegant, historic villas and magnificent botanical gardens, most notably Villa del Balbianello and Villa Carlotta. The charming town of Bellagio, known as the 'Pearl of the Lake', sits perfectly at the intersection of its three branches. Lake Como represents the absolute pinnacle of Italian lakeside elegance and tranquility.",
          "de": "Der Comer See in der Region Lombardei ist weltweit bekannt für seine spektakuläre, umgekehrte Y-Form und seine atemberaubende alpine Landschaft. Umgeben von steilen, bewaldeten Bergen ist der See seit der Römerzeit ein luxuriöser Rückzugsort für Aristokraten und Wohlhabende. Seine Ufer sind gesäumt von eleganten, historischen Villen und prächtigen botanischen Gärten, allen voran die Villa del Balbianello und die Villa Carlotta. Die bezaubernde Stadt Bellagio, bekannt als die 'Perle des Sees', liegt perfekt an der Kreuzung seiner drei Arme. Der Comer See repräsentiert den absoluten Höhepunkt italienischer See-Eleganz und Ruhe.",
          "hu": "A Lombardia régióban található Comói-tó világszerte ismert látványos, fordított Y-alakjáról és lélegzetelállító alpesi tájáról. A meredek, erdős hegyekkel körülvett tó a római kor óta az arisztokraták és a gazdagok luxus menedékhelye. Partjait elegáns, történelmi villák és csodálatos botanikus kertek tarkítják, amelyek közül a legjelentősebb a Villa del Balbianello és a Villa Carlotta. A 'tó gyöngyszemeként' is ismert bájos Bellagio város tökéletesen a tó három ágának találkozásánál fekszik. A Comói-tó az olasz tóparti elegancia és nyugalom abszolút csúcsa.",
          "ro": "Lacul Como, situat în regiunea Lombardia, este renumit la nivel mondial pentru forma sa spectaculoasă în Y inversat și pentru peisajul alpin uluitor. Înconjurat de munți abrupți și împăduriți, lacul a fost un refugiu luxos pentru aristocrați și cei bogați încă din epoca romană. Țărmurile sale sunt presărate cu vile elegante, istorice și grădini botanice magnifice, în special Villa del Balbianello și Villa Carlotta. Fermecătorul oraș Bellagio, cunoscut sub numele de 'Perla Lacului', este așezat perfect la intersecția celor trei ramuri ale sale. Lacul Como reprezintă apogeul absolut al eleganței și liniștii pe malul lacului din Italia."
    },
    facts: {
          "en": [
                "Lake Como is the deepest lake in Italy, reaching a depth of over 400 meters (1,300 feet).",
                "The lake is of glacial origin, carved out over millions of years.",
                "It has been a popular filming location for movies like 'Star Wars: Episode II' and 'Casino Royale'.",
                "Como city, at the southern tip, was historically famous for its silk manufacturing industry.",
                "George Clooney famously owns a villa on the lake's shore.",
                "A traditional local wooden boat called 'Lucia' is widely used on the lake.",
                "The climate is unusually mild for its Alpine location, supporting Mediterranean and subtropical plants.",
                "The Funicular railway connects Como to the village of Brunate, offering spectacular views."
          ],
          "de": [
                "Der Comer See ist der tiefste See Italiens und erreicht eine Tiefe von über 400 Metern.",
                "Der See ist eiszeitlichen Ursprungs und wurde über Millionen von Jahren geformt.",
                "Er war ein beliebter Drehort für Filme wie 'Star Wars: Episode II' und 'Casino Royale'.",
                "Die Stadt Como an der Südspitze war historisch berühmt für ihre Seidenindustrie.",
                "George Clooney besitzt bekanntermaßen eine Villa am Ufer des Sees.",
                "Ein traditionelles lokales Holzboot namens 'Lucia' wird auf dem See häufig verwendet.",
                "Das Klima ist für seine alpine Lage ungewöhnlich mild und unterstützt mediterrane und subtropische Pflanzen.",
                "Die Standseilbahn verbindet Como mit dem Dorf Brunate und bietet spektakuläre Ausblicke."
          ],
          "hu": [
                "A Comói-tó Olaszország legmélyebb tava, mélysége meghaladja a 400 métert.",
                "A tó glaciális eredetű, évmilliók alatt vájódott ki.",
                "Népszerű forgatási helyszín volt olyan filmek esetében, mint a 'Star Wars: II. epizód' és a 'Casino Royale'.",
                "A déli csücsökben fekvő Como városa történelmileg híres volt selyemgyártó iparáról.",
                "George Clooney híres arról, hogy villát birtokol a tó partján.",
                "A 'Lucia' nevű hagyományos helyi fahajót széles körben használják a tavon.",
                "Az éghajlat az alpesi elhelyezkedéshez képest szokatlanul enyhe, amely támogatja a mediterrán és szubtrópusi növényeket.",
                "A sikló köti össze Comót Brunate falujával, látványos kilátást kínálva."
          ],
          "ro": [
                "Lacul Como este cel mai adânc lac din Italia, atingând o adâncime de peste 400 de metri.",
                "Lacul este de origine glaciară, sculptat de-a lungul a milioane de ani.",
                "A fost o locație populară de filmare pentru filme precum 'Star Wars: Episodul II' și 'Casino Royale'.",
                "Orașul Como, în extremitatea sudică, era faimos din punct de vedere istoric pentru industria de fabricare a mătăsii.",
                "George Clooney deține în mod faimos o vilă pe malul lacului.",
                "O barcă tradițională din lemn numită 'Lucia' este folosită pe scară largă pe lac.",
                "Clima este neobișnuit de blândă pentru locația sa alpină, susținând plante mediteraneene și subtropicale.",
                "Funicularul conectează Como cu satul Brunate, oferind vederi spectaculoase."
          ]
    },
    image: "/geo-images/italy/it-lago-di-como.webp",
    descriptionAdvanced: {
      de: "Der Comer See, im Italienischen Lago di Como genannt, liegt in der Lombardei und ist bekannt für seine charakteristische Form eines umgekehrten Ypsilons. Mit einer maximalen Tiefe von etwa 410 Metern gehört er zu den tiefsten Seen Europas und wurde durch die Erosion gewaltiger eiszeitlicher Gletscher geformt. Der See wird vom Fluss Adda gespeist, der bei Colico eintritt und bei Lecco wieder austritt, was die Hydrologie der Region maßgeblich beeinflusst. Historisch gesehen war der See seit der Antike ein Rückzugsort für den Adel und wohlhabende Bürger, was zur Entstehung prächtiger Villen wie der Villa Carlotta und der Villa del Balbianello führte. Das Klima ist dank der schützenden Berge mild und erlaubt das Gedeihen von subtropischen Pflanzen in den weitläufigen Gartenanlagen entlang des Ufers. Geografisch ist der See von steilen bewaldeten Bergen umgeben, die bis zu 2600 Meter in die Höhe ragen und eine dramatische Kulisse bilden. Die Region ist heute ein bedeutendes Zentrum für die Seidenindustrie, die im 16. Jahrhundert in der Stadt Como ihren Ursprung fand. Die architektonische Vielfalt der Uferdörfer spiegelt die jahrhundertelange Bedeutung als Handelsweg zwischen Italien und Mitteleuropa wider.",
      hu: "A Comói-tó Olaszország Lombardia régiójában található, és jellegzetes, fordított Y alakjáról ismert, amelyet az elágazó völgyek határoznak meg. Körülbelül 410 méteres maximális mélységével Európa egyik legmélyebb tava, medrét pedig a jégkorszaki gleccserek eróziója alakította ki az Alpok déli részén. A tavat az Adda-folyó táplálja, amely északon, Colicónál ömlik be, és délkeleten, Leccónál hagyja el a medret, meghatározva a vidék vízrajzát. Történelmileg a tó már az ókori rómaiak idején is a nemesség kedvelt pihenőhelye volt, később pedig olyan pompás villák épültek partján, mint a Villa Carlotta vagy a Villa del Balbianello. Az enyhe éghajlatnak köszönhetően a tóparti kertekben szubtrópusi növények is megélnek, ami különleges kontrasztot alkot a környező hegycsúcsokkal. Földrajzilag a tavat meredek, erdős hegyek övezik, amelyek csúcsai gyakran elérik a 2600 méteres magasságot is. A térség gazdasági életében ma is fontos szerepet játszik a Como városában a 16. században meghonosodott selyemipar. A tóparti települések építészeti stílusa hűen őrzi a közép-európai és itáliai kereskedelmi útvonalak találkozásának emlékét.",
      ro: "Lacul Como este situat în regiunea Lombardia din nordul Italiei și este faimos pentru forma sa distinctivă de Y răsturnat, definită de brațele muntoase. Cu o adâncime maximă de aproximativ 410 metri, acesta se numără printre cele mai adânce lacuri din Europa, fiind modelat de forța eroziunii glaciare în Alpii Lepontini. Lacul este alimentat în principal de râul Adda, care intră prin extremitatea nordică la Colico și iese prin brațul sud-estic la Lecco, reglând fluxul hidrologic. Din punct de vedere istoric, malurile sale au fost refugii căutate de aristocrație încă din perioada romană, ducând la construcția unor vile monumentale precum Villa Carlotta și Villa del Balbianello. Climatul blând, protejat de barierele muntoase, permite dezvoltarea unor grădini botanice luxuriante cu specii subtropicale rare. Geografia zonei este dominată de versanți abrupți care se ridică direct din apă până la altitudini de peste 2600 de metri. Regiunea rămâne un centru de referință pentru industria mătăsii, o tradiție care a început în orașul Como în secolul al XVI-lea. Diversitatea arhitecturală a satelor de pe mal reflectă importanța istorică a lacului ca rută comercială între Italia și Europa Centrală.",
      en: "Lake Como, located in the Lombardy region of Italy, is world-renowned for its distinctive inverted 'Y' shape formed by converging alpine valleys. With a maximum depth of approximately 410 meters, it is one of the deepest lakes in Europe, having been carved by the powerful erosive force of Quaternary glaciers. The lake is primarily fed by the Adda River, which enters at Colico in the north and exits through the southeastern branch at Lecco. Historically, the area has been a prestigious retreat for aristocrats and scholars since Roman times, leading to the construction of magnificent estates like Villa Carlotta and Villa del Balbianello. The sheltered climate facilitates the growth of subtropical plants in lush lakeside gardens, creating a sharp contrast with the surrounding snow-capped peaks. Geographically, the lake is encased by steep, forested mountains that rise up to 2,600 meters above sea level. The region is also an important historical center for the silk industry, which established deep roots in the city of Como during the 16th century. The architectural elegance of the shoreline villages reflects its long-standing role as a vital trade route between Italy and Central Europe.",
    },
    factsAdvanced: {
      de: ["Mit 410 Metern Tiefe ist er der tiefste See Italiens und einer der tiefsten Europas.", "Der See hat eine Fläche von 146 km² und eine Uferlänge von 170 Kilometern.", "Die Stadt Como war im 16. Jahrhundert das europäische Zentrum der Seidenproduktion.", "Die Villa del Balbianello diente als Drehort für Filme wie Star Wars und James Bond.", "Der einzige Abfluss des Sees ist der Fluss Adda bei der Stadt Lecco.", "Die Insel Isola Comacina ist die einzige bewohnte Insel im gesamten See."],
      hu: ["410 méteres mélységével Olaszország legmélyebb tava és Európa egyik legmélyebbje.", "A tó felszíne 146 négyzetkilométer, partvonala pedig 170 kilométer hosszú.", "Como városa a 16. század óta az európai selyemgyártás egyik legfontosabb központja.", "A Villa del Balbianello olyan filmek helyszínéül szolgált, mint a Star Wars és a James Bond.", "A tó egyetlen kifolyása az Adda-folyó, amely Lecco városánál hagyja el a medret.", "Az Isola Comacina az egyetlen sziget a tóban, amely történelmi romokkal rendelkezik."],
      ro: ["La 410 metri adâncime, este cel mai adânc lac din Italia și printre primele din Europa.", "Suprafața totală a lacului este de 146 km², iar linia țărmului măsoară 170 km.", "Orașul Como a devenit centrul european al producției de mătase în secolul al XVI-lea.", "Villa del Balbianello a fost locație de filmare pentru Star Wars și James Bond.", "Singura cale de ieșire a apei este râul Adda, care părăsește lacul pe la Lecco.", "Isola Comacina este singura insulă din lac, adăpostind ruine medievale importante."],
      en: ["At 410 meters deep, it is the deepest lake in Italy and among the deepest in Europe.", "The lake covers 146 square kilometers and has a total shoreline of 170 kilometers.", "The city of Como became Europe's premier silk-producing center in the 16th century.", "Villa del Balbianello was a filming location for movies like Star Wars and James Bond.", "The lake's only outlet is the Adda River, which flows out at the town of Lecco.", "Isola Comacina is the only island in the lake and features ancient ruins."],
    },
  },
  {
    id: "it-lago-maggiore",
    type: "lake",
    parent: "IT-21",
    coords: [8.617, 45.983],
    name: { de: "Lago Maggiore", hu: "Lago Maggiore", ro: "Lacul Maggiore", en: "Lake Maggiore" },
    
    
    description: {
          "en": "Lake Maggiore is a stunning pre-alpine lake that straddles the border between Italy and Switzerland. It is the second-largest lake in Italy and boasts an enchanting, romantic atmosphere characterized by grand Belle Époque hotels and lush waterfront promenades. The lake's absolute highlights are the Borromean Islands, a small archipelago featuring the spectacular Palazzo Borromeo with its terraced Baroque gardens and wandering white peacocks. Surrounded by majestic mountains, Lake Maggiore provides a sophisticated blend of natural beauty, mild climate, and aristocratic history, long favored by artists and writers.",
          "de": "Der Lago Maggiore ist ein atemberaubender Voralpensee, der sich über die Grenze zwischen Italien und der Schweiz erstreckt. Er ist der zweitgrößte See Italiens und besticht durch eine bezaubernde, romantische Atmosphäre, die von großen Belle-Époque-Hotels und üppigen Uferpromenaden geprägt ist. Die absoluten Höhepunkte des Sees sind die Borromäischen Inseln, ein kleines Archipel mit dem spektakulären Palazzo Borromeo mit seinen terrassenförmigen Barockgärten und umherstreifenden weißen Pfauen. Umgeben von majestätischen Bergen bietet der Lago Maggiore eine anspruchsvolle Mischung aus natürlicher Schönheit, mildem Klima und aristokratischer Geschichte, die seit langem von Künstlern und Schriftstellern bevorzugt wird.",
          "hu": "A Lago Maggiore egy lenyűgöző alpokalji tó, amely Olaszország és Svájc határán húzódik. Ez Olaszország második legnagyobb tava, és varázslatos, romantikus atmoszférával büszkélkedhet, amelyet nagy Belle Époque szállodák és buja vízparti sétányok jellemeznek. A tó abszolút fénypontjai a Borromeo-szigetek, egy kis szigetcsoport, ahol a látványos Palazzo Borromeo, annak teraszos barokk kertjei és kóborló fehér pávái találhatók. A fenséges hegyekkel körülvett Lago Maggiore a természeti szépség, az enyhe éghajlat és az arisztokratikus történelem kifinomult keverékét kínálja, amelyet a művészek és írók régóta kedvelnek.",
          "ro": "Lacul Maggiore este un lac prealpin uimitor, care se întinde pe granița dintre Italia și Elveția. Este al doilea lac ca mărime din Italia și se mândrește cu o atmosferă romantică și încântătoare, caracterizată de marile hoteluri Belle Époque și promenade luxuriante pe malul apei. Atracțiile absolute ale lacului sunt Insulele Borromeo, un mic arhipelag care prezintă spectaculosul Palazzo Borromeo, cu grădinile sale baroce terasate și păuni albi rătăcitori. Înconjurat de munți maiestuoși, Lacul Maggiore oferă un amestec sofisticat de frumusețe naturală, climă blândă și istorie aristocratică, favorizat de mult de artiști și scriitori."
    },
    facts: {
          "en": [
                "The northern tip of Lake Maggiore extends into the Ticino canton of Switzerland.",
                "The Borromean Islands are named after the aristocratic Borromeo family, who acquired them in the 16th century.",
                "Ernest Hemingway famously stayed in Stresa, a major resort town on the lake.",
                "Isola Bella, one of the islands, features a garden built on ten overlapping terraces.",
                "The lake contains Isola dei Pescatori, a charming island that remains a working fishing village.",
                "It is the longest lake in Italy, stretching for nearly 65 kilometers.",
                "The mild climate allows exotic plants like camelias, azaleas, and palm trees to thrive.",
                "A colossal 35-meter copper statue, the Sancarlone, stands near the town of Arona."
          ],
          "de": [
                "Die Nordspitze des Lago Maggiore erstreckt sich bis in den Schweizer Kanton Tessin.",
                "Die Borromäischen Inseln sind nach der aristokratischen Familie Borromeo benannt, die sie im 16. Jahrhundert erwarb.",
                "Ernest Hemingway hielt sich bekanntermaßen in Stresa auf, einem wichtigen Ferienort am See.",
                "Isola Bella, eine der Inseln, verfügt über einen Garten, der auf zehn übereinanderliegenden Terrassen angelegt ist.",
                "Im See befindet sich die Isola dei Pescatori, eine charmante Insel, die bis heute ein funktionierendes Fischerdorf ist.",
                "Er ist der längste See Italiens und erstreckt sich über fast 65 Kilometer.",
                "Das milde Klima lässt exotische Pflanzen wie Kamelien, Azaleen und Palmen gedeihen.",
                "Eine kolossale, 35 Meter hohe Kupferstatue, der Sancarlone, steht nahe der Stadt Arona."
          ],
          "hu": [
                "A Lago Maggiore északi csücske Svájc Ticino kantonjába nyúlik.",
                "A Borromeo-szigeteket az arisztokrata Borromeo családról nevezték el, akik a 16. században szerezték meg őket.",
                "Ernest Hemingway híresen Stresában, a tó egyik jelentős üdülővárosában szállt meg.",
                "Az egyik szigeten, az Isola Bellán egy tíz egymást átfedő teraszra épült kert található.",
                "A tavon fekszik az Isola dei Pescatori, egy bájos sziget, amely továbbra is egy működő halászfalu.",
                "Ez Olaszország leghosszabb tava, közel 65 kilométeren húzódik.",
                "Az enyhe éghajlat lehetővé teszi, hogy egzotikus növények, például kaméliák, azáleák és pálmafák virágozzanak.",
                "Egy hatalmas, 35 méteres rézszobor, a Sancarlone áll Arona városa közelében."
          ],
          "ro": [
                "Extremitatea nordică a Lacului Maggiore se extinde în cantonul Ticino din Elveția.",
                "Insulele Borromeo sunt numite după familia aristocratică Borromeo, care le-a achiziționat în secolul al XVI-lea.",
                "Ernest Hemingway a stat în mod faimos în Stresa, un oraș-stațiune major de pe lac.",
                "Isola Bella, una dintre insule, prezintă o grădină construită pe zece terase suprapuse.",
                "Lacul conține Isola dei Pescatori, o insulă fermecătoare care rămâne un sat de pescari funcțional.",
                "Este cel mai lung lac din Italia, întinzându-se pe o distanță de aproape 65 de kilometri.",
                "Clima blândă permite plantelor exotice, cum ar fi cameliile, azaleele și palmierii să prospere.",
                "O statuie colosală de cupru de 35 de metri, Sancarlone, se află lângă orașul Arona."
          ]
    },
    image: "/geo-images/italy/it-lago-maggiore.webp",
    descriptionAdvanced: {
      de: "Der Lago Maggiore ist nach dem Gardasee der zweitgrößte See Italiens und erstreckt sich über die Regionen Piemont und Lombardei sowie den Schweizer Kanton Tessin. Er liegt am südlichen Rand der Alpen und wurde in der Eiszeit durch das Vordringen der Tessin- und Toce-Gletscher geformt. Der See erstreckt sich über eine Länge von etwa 65 Kilometern und erreicht eine maximale Tiefe von 372 Metern, was ihn zu einem bedeutenden Wasserspeicher macht. Bekannt ist der See vor allem für den Borromäischen Golf, in dem sich die berühmten Borromäischen Inseln mit ihren barocken Palästen und botanischen Gärten befinden. Das Klima ist mild und feucht, was das Gedeihen von seltenen Pflanzenarten wie Kamelien, Azaleen und Rhododendren ermöglicht, die die Uferpromenaden prägen. Historisch war der See ein wichtiger Verkehrsweg für den Transport von Marmor, der unter anderem für den Bau des Mailänder Doms verwendet wurde. Die Umgebung ist geprägt von eleganten Kurorten des 19. Jahrhunderts wie Stresa, die den Glanz der Belle Époque bewahrt haben. Heute ist der Lago Maggiore ein grenzüberschreitendes Symbol für kulturelle Vielfalt und landschaftliche Schönheit im Alpenraum.",
      hu: "A Lago Maggiore Olaszország második legnagyobb tava, amely Piemont és Lombardia régiók, valamint a svájci Ticino kanton területén oszlik el. Az Alpok déli lábánál fekvő tó medrét a jégkorszakban a Ticino- és a Toce-gleccserek vájták ki, lenyűgöző mélységeket létrehozva. A tó körülbelül 65 kilométer hosszú, és eléri a 372 méteres maximális mélységet, amivel jelentős víztartalékot jelent a régió számára. Legismertebb része a Borromei-öböl, ahol a híres Borromei-szigetek találhatók barokk palotáikkal és különleges botanikai kertjeikkel. Az éghajlat itt enyhe és párás, ami kedvez az olyan dísznövényeknek, mint a kaméliák, azáleák és rhododendronok, amelyek a tóparti sétányok jelképévé váltak. Történelmileg a tó fontos kereskedelmi útvonalként szolgált, itt szállították például azt a márványt is, amelyből a milánói dóm épült. A környéket elegáns 19. századi fürdővárosok jellemzik, mint például Stresa, amely hűen őrzi a Belle Époque hangulatát. Napjainkban a Lago Maggiore a határokon átívelő kulturális sokszínűség és a lenyűgöző alpesi táj szimbóluma.",
      ro: "Lacul Maggiore este al doilea cel mai mare lac din Italia, întinzându-se pe teritoriile regiunilor Piemont și Lombardia, precum și în cantonul elvețian Ticino. Situat la poalele sudice ale Alpilor, bazinul său a fost sculptat în timpul epocii glaciare de înaintarea ghețarilor Ticino și Toce. Lacul are o lungime de aproximativ 65 de kilometri și o adâncime maximă de 372 de metri, fiind un element hidrografic crucial pentru nordul Italiei. Este renumit în special pentru Golful Borromeo, unde se află faimoasele insule Borromeice, cunoscute pentru palatele lor baroce și grădinile botanice spectaculoase. Climatul blând și umed permite creșterea unor specii rare de plante, cum ar fi cameliile, azaleele și rododendronii, care decorează malurile lacului. Din punct de vedere istoric, lacul a fost o cale de transport vitală pentru marmura utilizată la construcția Domului din Milano. Localitățile de pe mal, precum Stresa, păstrează farmecul stațiunilor balneare elegante din secolul al XIX-lea, specifice epocii Belle Époque. Astăzi, Lacul Maggiore reprezintă un simbol transfrontalier al frumuseții peisajului alpin și al patrimoniului cultural european.",
      en: "Lake Maggiore is the second largest lake in Italy, extending across the regions of Piedmont and Lombardy, as well as the Swiss canton of Ticino. Nestled at the southern edge of the Alps, the lake basin was carved during the glacial periods by the advance of the Ticino and Toce glaciers. The lake stretches approximately 65 kilometers in length and reaches a maximum depth of 372 meters, making it a vital water reservoir for the surrounding territories. It is most famous for the Borromean Gulf, which houses the iconic Borromean Islands, celebrated for their opulent Baroque palaces and manicured botanical gardens. The mild and humid climate facilitates the flourishing of exotic flora, including camellias, azaleas, and rhododendrons, which line the lakeside promenades. Historically, the lake served as an essential transport route for the marble used in the construction of the Milan Cathedral. The shoreline is dotted with elegant 19th-century resort towns like Stresa, which still exude the grandeur of the Belle Époque era. Today, Lake Maggiore stands as a transboundary symbol of cultural heritage and breathtaking alpine scenery.",
    },
    factsAdvanced: {
      de: ["Mit 212 km² Fläche ist er der zweitgrößte See Italiens nach dem Gardasee.", "Etwa 20 % der Seefläche liegen auf Schweizer Staatsgebiet im Kanton Tessin.", "Die tiefste Stelle des Sees liegt 372 Meter unter dem Wasserspiegel.", "Die Isola Bella beherbergt einen Palast aus dem 17. Jahrhundert mit zehn Terrassengärten.", "Der See wird hauptsächlich durch die Flüsse Ticino und Toce gespeist.", "In der Stadt Arona steht die 35 Meter hohe Kolossalstatue des San Carlo Borromeo."],
      hu: ["212 négyzetkilométeres területével ez Olaszország második legnagyobb tava.", "A tó felszínének körülbelül 20%-a Svájchoz, Ticino kantonhoz tartozik.", "A tó legmélyebb pontja 372 méterrel található a felszín alatt.", "Az Isola Bella szigeten egy 17. századi palota és tíz teraszos kert található.", "A tó legfontosabb vízutánpótlását a Ticino és a Toce folyók biztosítják.", "Arona városában áll a 35 méter magas San Carlo Borromeo óriásszobor."],
      ro: ["Cu o suprafață de 212 km², este al doilea cel mai mare lac din Italia.", "Aproximativ 20% din suprafața lacului aparține Elveției, în cantonul Ticino.", "Punctul de maximă adâncime este situat la 372 de metri sub oglinda apei.", "Insula Bella găzduiește un palat din secolul al XVII-lea și zece grădini terasate.", "Lacul este alimentat în principal de debitul râurilor Ticino și Toce.", "În orașul Arona se află statuia colosală de 35 de metri a lui San Carlo Borromeo."],
      en: ["With a surface area of 212 km², it is the second largest lake in Italy.", "Approximately 20% of the lake's surface area is located in Swiss territory.", "The deepest point of the lake is recorded at 372 meters below the surface.", "Isola Bella features a magnificent 17th-century palace and ten terraced gardens.", "The lake's primary inflows are the Ticino and Toce rivers from the north.", "The town of Arona hosts the 35-meter tall colossal statue of San Carlo Borromeo."],
    },
  },
  {
    id: "it-vesuvio",
    type: "mountain",
    parent: "IT-72",
    coords: [14.425, 40.822],
    name: { de: "Vesuv", hu: "Vezúv", ro: "Vezuviu", en: "Mount Vesuvius" },
    
    
    description: {
          "en": "Mount Vesuvius is a looming stratovolcano located on the Gulf of Naples, holding a formidable place in history and geology. It is globally infamous for its catastrophic eruption in 79 AD, which buried the Roman cities of Pompeii, Herculaneum, and others under a deadly cloud of ash and pyroclastic flows. Today, it remains the only active volcano on the European mainland. Despite its inherent danger, the volcano is the centerpiece of the Vesuvius National Park, attracting millions of visitors who hike up its steep slopes to peer into its dramatic, smoking crater and admire the panoramic views over the Bay of Naples.",
          "de": "Der Vesuv ist ein aufragender Stratovulkan am Golf von Neapel, der einen beeindruckenden Platz in der Geschichte und Geologie einnimmt. Er ist weltweit berüchtigt für seinen katastrophalen Ausbruch im Jahr 79 n. Chr., der die römischen Städte Pompeji, Herculaneum und andere unter einer tödlichen Wolke aus Asche und pyroklastischen Strömen begrub. Heute ist er der einzige aktive Vulkan auf dem europäischen Festland. Trotz seiner inhärenten Gefahr ist der Vulkan das Herzstück des Nationalparks Vesuv und zieht Millionen von Besuchern an, die seine steilen Hänge hinaufwandern, um in seinen dramatischen, rauchenden Krater zu blicken und den Panoramablick über die Bucht von Neapel zu bewundern.",
          "hu": "A Vezúv egy fenyegetően magasodó rétegvulkán a Nápolyi-öböl partján, amely tekintélyes helyet foglal el a történelemben és a geológiában. Világszerte hírhedt Kr. u. 79-es katasztrofális kitöréséről, amely Pompejit, Herculaneumot és más római városokat temetett maga alá a hamu és a piroklasztikus árak halálos felhőjében. Ma is ez az egyetlen aktív vulkán az európai szárazföldön. A benne rejlő veszély ellenére a vulkán a Vezúv Nemzeti Park központja, amely látogatók millióit vonzza, akik felmásznak meredek lejtőin, hogy bepillantsanak drámai, füstölgő kráterébe, és megcsodálják a Nápolyi-öbölre nyíló panorámát.",
          "ro": "Vezuviu este un stratovulcan impunător situat pe Golful Napoli, ocupând un loc formidabil în istorie și geologie. Este infam la nivel global pentru erupția sa catastrofală din 79 d.Hr., care a îngropat orașele romane Pompei, Herculaneum și altele sub un nor mortal de cenușă și fluxuri piroclastice. Astăzi, rămâne singurul vulcan activ de pe continentul european. În ciuda pericolului inerent, vulcanul este piesa centrală a Parcului Național Vezuviu, atrăgând milioane de vizitatori care urcă pe versanții săi abrupți pentru a privi în craterul său dramatic, fumegând, și pentru a admira vederile panoramice asupra Golfului Napoli."
    },
    facts: {
          "en": [
                "Vesuvius is part of the Campanian volcanic arc, formed by the convergence of the African and Eurasian plates.",
                "The 79 AD eruption is often considered the first documented volcanic eruption, described by Pliny the Younger.",
                "The volcano's last major eruption occurred in 1944 during World War II.",
                "Vesuvius is considered one of the most dangerous volcanoes in the world due to the dense population nearby.",
                "The term 'Plinian eruption', describing highly explosive volcanic activity, comes from Pliny the Younger's account.",
                "The mountain is currently about 1,281 meters high, though this changes with eruptions.",
                "A funicular railway was built to the crater in 1880, inspiring the famous song 'Funiculì, FuniculÁ '.",
                "The soil around Vesuvius is extremely fertile, famously producing Lacryma Christi wine."
          ],
          "de": [
                "Der Vesuv ist Teil des kampanischen Vulkanbogens, der durch die Konvergenz der afrikanischen und eurasischen Platten gebildet wurde.",
                "Der Ausbruch von 79 n. Chr. wird oft als der erste dokumentierte Vulkanausbruch angesehen, beschrieben von Plinius dem Jüngeren.",
                "Der letzte große Ausbruch des Vulkans ereignete sich 1944 während des Zweiten Weltkriegs.",
                "Der Vesuv gilt aufgrund der dichten Bevölkerung in der Nähe als einer der gefährlichsten Vulkane der Welt.",
                "Der Begriff 'Plinianische Eruption', der hochgradig explosive vulkanische Aktivität beschreibt, stammt aus dem Bericht von Plinius dem Jüngeren.",
                "Der Berg ist derzeit etwa 1.281 Meter hoch, obwohl sich dies mit Eruptionen ändert.",
                "Im Jahr 1880 wurde eine Standseilbahn zum Krater gebaut, die das berühmte Lied 'Funiculì, FuniculÁ ' inspirierte.",
                "Der Boden um den Vesuv ist extrem fruchtbar und bringt den berühmten Wein Lacryma Christi hervor."
          ],
          "hu": [
                "A Vezúv a campaniai vulkáni ív része, amelyet az afrikai és eurázsiai kőzetlemezek közeledése hozott létre.",
                "A 79-es kitörést gyakran az első dokumentált vulkánkitörésnek tekintik, amelyet Ifjabb Plinius írt le.",
                "A vulkán utolsó nagy kitörése 1944-ben, a második világháború alatt történt.",
                "A Vezúvot a közeli sűrű lakosság miatt a világ egyik legveszélyesebb vulkánjának tartják.",
                "A rendkívül robbanásveszélyes vulkáni tevékenységet leíró 'pliniusi kitörés' kifejezés Ifjabb Plinius beszámolójából származik.",
                "A hegy jelenleg körülbelül 1281 méter magas, bár ez a kitörésekkel változik.",
                "1880-ban siklót építettek a kráterhez, amely a híres 'Funiculì, FuniculÁ ' című dalt ihlette.",
                "A Vezúv körüli talaj rendkívül termékeny, híres terméke a Lacryma Christi bor."
          ],
          "ro": [
                "Vezuviul face parte din arcul vulcanic Campanian, format prin convergența plăcilor africană și eurasiatică.",
                "Erupția din 79 d.Hr. este adesea considerată prima erupție vulcanică documentată, descrisă de Pliniu cel Tânăr.",
                "Ultima erupție majoră a vulcanului a avut loc în 1944, în timpul celui de-al Doilea Război Mondial.",
                "Vezuviul este considerat unul dintre cei mai periculoși vulcani din lume din cauza populației dense din apropiere.",
                "Termenul 'erupție pliniană', care descrie o activitate vulcanică extrem de explozivă, provine din relatarea lui Pliniu cel Tânăr.",
                "Muntele are în prezent aproximativ 1.281 de metri înălțime, deși aceasta se schimbă o dată cu erupțiile.",
                "Un funicular a fost construit până la crater în 1880, inspirând faimosul cântec 'Funiculì, FuniculÁ '.",
                "Solul din jurul Vezuviului este extrem de fertil, producând faimosul vin Lacryma Christi."
          ]
    },
    image: "/geo-images/italy/it-vesuvio.webp",
    descriptionAdvanced: {
      de: "Der Vesuv ist einer der bekanntesten und gefährlichsten Vulkane der Welt und liegt direkt am Golf von Neapel in Kampanien. Er ist ein Somma-Vulkan, was bedeutet, dass sein heutiger Kegel aus den Überresten eines viel größeren, älteren Vulkans emporgewachsen ist. Weltberühmt wurde der Vesuv durch den verheerenden Ausbruch im Jahr 79 n. Chr., der die römischen Städte Pompeji und Herculaneum unter Asche und Schlamm begrub. Der Berg erreicht heute eine Höhe von etwa 1281 Metern, wobei die genaue Höhe nach jedem größeren Ausbruch variiert. Geologisch gesehen gehört der Vesuv zum kampanischen Vulkanbogen, der durch das Abtauchen der afrikanischen Platte unter die eurasische Platte entstanden ist. Aufgrund seiner Nähe zur Millionenstadt Neapel wird er ständig von Wissenschaftlern überwacht, um frühzeitig Warnungen vor künftigen Aktivitäten ausgeben zu können. Das fruchtbare vulkanische Gestein an seinen Hängen wird intensiv für den Weinbau genutzt, insbesondere für den berühmten Wein 'Lacryma Christi'. Heute ist der Vesuv Teil eines Nationalparks und dient als wichtiges Forschungsgebiet für Vulkanologen weltweit.",
      hu: "A Vezúv a világ egyik legismertebb és legveszélyesebb tűzhányója, amely a Nápolyi-öböl partján, Campania régióban magasodik. Ez egy úgynevezett Somma-vulkán, ami azt jelenti, hogy a jelenlegi kúpja egy sokkal nagyobb, ősi kráter maradványaiból emelkedett ki. Világhírnevét a Kr. u. 79-ben történt pusztító kitörésének köszönheti, amely hamuval és sárral borította be Pompeji és Herculaneum római városait, megőrizve azokat az utókornak. A hegy magassága jelenleg körülbelül 1281 méter, bár ez minden nagyobb aktivitás után módosulhat a törmeléklerakódás miatt. Földtanilag a Vezúv a campaniai vulkáni ív része, amely az afrikai és az eurázsiai kőzetlemezek ütközése nyomán alakult ki. Nápoly közelsége miatt a tudósok folyamatosan figyelik a hegy szeizmikus tevékenységét, hogy időben jelezhessék a várható kitöréseket. A vulkáni hamuval borított, rendkívül termékeny talaj kiválóan alkalmas szőlőtermesztésre, itt készül a híres 'Lacryma Christi' bor is. Ma a Vezúv egy nemzeti park központja és a vulkanológiai kutatások egyik legfontosabb helyszíne a világon.",
      ro: "Vezuviul este unul dintre cei mai faimoși și periculoși vulcani din lume, situat pe malul Golfului Napoli, în regiunea Campania. Este un vulcan de tip somma, caracterizat prin faptul că actualul con s-a format în interiorul caldeerei unui vulcan mult mai vechi și mai mare. Renumele său global provine din erupția catastrofală din anul 79 d.Hr., care a îngropat orașele romane Pompei și Herculaneum sub straturi groase de cenușă și noroi. În prezent, muntele are o înălțime de aproximativ 1281 de metri, deși cota sa variază ușor în urma activităților geologice periodice. Din punct de vedere geologic, Vezuviul face parte din arcul vulcanic campanian, rezultat din subducția plăcii africane sub cea eurasiatică. Datorită proximității sale față de densitatea mare a populației din Napoli, este unul dintre cei mai monitorizați vulcani de pe planetă pentru a preveni viitoare dezastre. Solul vulcanic fertil de pe pantele sale este utilizat intensiv pentru viticultură, producând faimosul vin 'Lacryma Christi'. Astăzi, zona este protejată sub forma unui parc național și constituie un laborator natural esențial pentru vulcanologi.",
      en: "Mount Vesuvius is one of the most famous and dangerous volcanoes in the world, located on the Gulf of Naples in the Campania region. It is a stratovolcano of the somma type, meaning its current cone has grown within the remains of a much larger and older volcano, Mount Somma. Vesuvius gained global notoriety following the devastating eruption in 79 AD, which buried the Roman cities of Pompeii and Herculaneum under layers of ash and pumice. The mountain currently stands at an elevation of approximately 1,281 meters, though its height fluctuates after major eruptive events due to structural changes. Geologically, it belongs to the Campanian volcanic arc, formed by the subduction of the African plate beneath the Eurasian plate. Because of its proximity to the densely populated city of Naples, it is constantly monitored by scientists to provide early warnings of future seismic activity. The fertile volcanic soil on its slopes is intensively cultivated for vineyards, producing the renowned 'Lacryma Christi' wine. Today, Vesuvius is the centerpiece of a national park and serves as a critical research site for volcanologists worldwide.",
    },
    factsAdvanced: {
      de: ["Die berühmte Eruption im Jahr 79 n. Chr. dauerte schätzungsweise 18 bis 25 Stunden.", "Der letzte größere Ausbruch des Vesuvs ereignete sich im März 1944.", "Vesuv ist der einzige Vulkan auf dem europäischen Festland, der in den letzten 100 Jahren aktiv war.", "Der Krater des Vesuvs hat einen Durchmesser von etwa 450 Metern.", "Unterhalb des Vulkans befindet sich eine Magmakammer in ca. 8-10 km Tiefe.", "Das Observatorium Vesuviano wurde bereits 1841 zur Überwachung gegründet."],
      hu: ["A híres Kr. u. 79-es kitörés becslések szerint 18-25 órán keresztül tartott.", "A Vezúv utolsó jelentősebb kitörése 1944 márciusában történt.", "Ez az egyetlen vulkán az európai szárazföldön, amely az elmúlt száz évben aktív volt.", "A Vezúv jelenlegi kráterének átmérője körülbelül 450 méter.", "A vulkán alatt körülbelül 8-10 kilométeres mélységben található a magmakamra.", "Az Osservatorio Vesuviano a világ legrégebbi vulkánmegfigyelő intézete, 1841-ben alapították."],
      ro: ["Erupția faimoasă din anul 79 d.Hr. a durat aproximativ între 18 și 25 de ore.", "Cea mai recentă erupție majoră a Vezuviului a avut loc în martie 1944.", "Este singurul vulcan de pe continentul european care a erupt în ultimul secol.", "Craterul actual al Vezuviului are un diametru de aproximativ 450 de metri.", "Camera magmatică se află la o adâncime de circa 8-10 kilometri sub vulcan.", "Osservatorio Vesuviano, fondat în 1841, este cel mai vechi institut de profil din lume."],
      en: ["The famous eruption of 79 AD is estimated to have lasted between 18 and 25 hours.", "The most recent significant eruption of Mount Vesuvius occurred in March 1944.", "Vesuvius is the only volcano on the European mainland to have erupted in the last century.", "The current crater of the volcano has a diameter of approximately 450 meters.", "A large magma chamber is located roughly 8 to 10 kilometers beneath the volcano.", "The Vesuvius Observatory, founded in 1841, is the oldest volcanology institute in the world."],
    },
  },
  {
    id: "it-stromboli",
    type: "mountain",
    parent: "IT-82",
    coords: [15.213, 38.793],
    name: { de: "Stromboli", hu: "Stromboli", ro: "Stromboli", en: "Stromboli" },
    
    
    description: {
          "en": "Stromboli is a small volcanic island in the Tyrrhenian Sea off the north coast of Sicily, part of the Aeolian archipelago. It is home to one of the most active volcanoes on Earth, which has been in almost continuous eruption for the past 2,000 years. Because of its spectacular nighttime displays of glowing lava ejected high into the air, it is famously known as the 'Lighthouse of the Mediterranean'. Stromboli features a striking, conical shape with a steep, barren scar called the Sciara del Fuoco, where lava rolls directly into the sea. Despite its volatility, it supports small villages and attracts adventurous tourists and geologists.",
          "de": "Stromboli ist eine kleine Vulkaninsel im Tyrrhenischen Meer vor der Nordküste Siziliens, Teil des Čolischen Archipels. Es beherbergt einen der aktivsten Vulkane der Erde, der seit 2.000 Jahren fast ununterbrochen ausbricht. Wegen seiner spektakulären nächtlichen Schauspiele, bei denen glühende Lava hoch in die Luft geschleudert wird, ist er berühmt als der 'Leuchtturm des Mittelmeers'. Stromboli zeichnet sich durch eine markante, konische Form mit einer steilen, kargen Narbe namens Sciara del Fuoco aus, wo Lava direkt ins Meer rollt. Trotz seiner Volatilität beherbergt es kleine Dörfer und zieht abenteuerlustige Touristen und Geologen an.",
          "hu": "Stromboli egy kis vulkáni sziget a Tirrén-tengerben, Szicília északi partjainál, az Aeoli-szigetcsoport része. A Föld egyik legaktívabb vulkánjának ad otthont, amely az elmúlt 2000 évben szinte folyamatosan kitört. Az éjszakai, magasba lövellő, izzó láva látványos megnyilvánulásai miatt a 'Földközi-tenger világítótornyaként' is ismert. A Stromboli feltűnő, kúpos alakú, egy Sciara del Fuoco nevű meredek, kietlen hegyoldallal rendelkezik, ahol a láva közvetlenül a tengerbe gördül. Változékonysága ellenére kis falvakat tart el, és kalandvágyó turistákat és geológusokat vonz.",
          "ro": "Stromboli este o mică insulă vulcanică din Marea Tireniană, în largul coastei de nord a Siciliei, parte a arhipelagului eolian. Găzduiește unul dintre cei mai activi vulcani de pe Pământ, care este în erupție aproape continuă de 2.000 de ani. Datorită spectacolelor sale nocturne spectaculoase cu lavă strălucitoare aruncată sus în aer, este cunoscut faimos ca 'Farul Mediteranei'. Stromboli prezintă o formă conică impresionantă, cu o cicatrice abruptă și pustie numită Sciara del Fuoco, unde lava se rostogolește direct în mare. În ciuda volatilității sale, susține mici sate și atrage turiști aventuroși și geologi."
    },
    facts: {
          "en": [
                "Stromboli gives its name to the specific 'Strombolian' type of volcanic eruption.",
                "The volcano stands about 924 meters above sea level, but its base is deep on the ocean floor.",
                "Eruptions typically occur every 20 to 30 minutes in a continuous mild cycle.",
                "Roberto Rossellini's 1950 film 'Stromboli' starring Ingrid Bergman brought global fame to the island.",
                "The permanent population is only a few hundred residents.",
                "There are no cars allowed in the island's main villages; transportation is mainly by ape car or scooter.",
                "The Sciara del Fuoco ('Stream of Fire') is the primary channel for lava to flow down to the sea.",
                "Guided night treks to the crater are a highly popular and thrilling tourist activity."
          ],
          "de": [
                "Stromboli gibt der spezifischen 'strombolianischen' Art des Vulkanausbruchs ihren Namen.",
                "Der Vulkan liegt etwa 924 Meter über dem Meeresspiegel, aber seine Basis befindet sich tief auf dem Meeresgrund.",
                "Eruptionen treten typischerweise alle 20 bis 30 Minuten in einem kontinuierlichen, milden Zyklus auf.",
                "Roberto Rossellinis Film 'Stromboli' von 1950 mit Ingrid Bergman in der Hauptrolle brachte der Insel weltweiten Ruhm.",
                "Die ständige Bevölkerung besteht nur aus wenigen hundert Einwohnern.",
                "In den Hauptdörfern der Insel sind keine Autos erlaubt; Der Transport erfolgt hauptsächlich mit Ape-Autos oder Rollern.",
                "Die Sciara del Fuoco ('Feuerstrom') ist der Hauptkanal für die Lava, die ins Meer fließt.",
                "Geführte Nachtwanderungen zum Krater sind eine sehr beliebte und aufregende Touristenaktivität."
          ],
          "hu": [
                "A Stromboli adja a nevét a vulkánkitörések sajátos 'stromboli' típusának.",
                "A vulkán körülbelül 924 méterrel a tengerszint felett emelkedik, de alapja mélyen az óceán fenekén van.",
                "A kitörések általában 20-30 percenként következnek be egy folyamatos, enyhe ciklusban.",
                "Roberto Rossellini 1950-es 'Stromboli' című filmje Ingrid Bergman főszereplésével globális hírnevet hozott a szigetnek.",
                "Az állandó lakosság mindössze néhány száz lakosból áll.",
                "A sziget fő falvaiban nem engedélyezettek az autók; a közlekedés főleg háromkerekű mopedekkel vagy robogókkal történik.",
                "A Sciara del Fuoco ('Tűzfolyam') a láva fő csatornája a tenger felé.",
                "A kráterhez vezető éjszakai túrák vezetett formában rendkívül népszerű és izgalmas turisztikai tevékenységek."
          ],
          "ro": [
                "Stromboli dă numele tipului specific de erupție vulcanică 'stromboliană'.",
                "Vulcanul se ridică la aproximativ 924 de metri deasupra nivelului mării, dar baza sa se află adânc pe fundul oceanului.",
                "Erupțiile au loc de obicei la fiecare 20 până la 30 de minute într-un ciclu blând continuu.",
                "Filmul lui Roberto Rossellini din 1950, 'Stromboli', cu Ingrid Bergman, a adus faimă globală insulei.",
                "Populația permanentă este de doar câteva sute de locuitori.",
                "Mașinile nu sunt permise în satele principale ale insulei; transportul se face în principal cu scutere sau vehicule utilitare mici cu trei roți.",
                "Sciara del Fuoco ('Râul de Foc') este principalul canal prin care lava curge în mare.",
                "Drumețiile de noapte cu ghid până la crater sunt o activitate turistică extrem de populară și palpitantă."
          ]
    },
    image: "/geo-images/italy/it-stromboli.webp",
    descriptionAdvanced: {
      de: "Stromboli ist eine kleine Vulkaninsel im Tyrrhenischen Meer, die zum Archipel der Äolischen Inseln nördlich von Sizilien gehört. Der gleichnamige Vulkan ist einer der aktivsten der Erde und bekannt für seine fast kontinuierlichen, kleinen Eruptionen, die als 'strombolianische Aktivität' bezeichnet werden. Diese regelmäßigen Ausbrüche werfen glühende Lavafetzen und Asche in den Nachthimmel, was der Insel den Beinamen 'Leuchtturm des Mittelmeers' eingebracht hat. Die Insel erhebt sich etwa 926 Meter über den Meeresspiegel, doch der eigentliche Vulkanfuß liegt in einer Tiefe von ca. 2000 Metern unter Wasser. Ein markantes Merkmal ist die 'Sciara del Fuoco', eine steile Schutthalde auf der Nordwestseite, über die Lavagestein direkt ins Meer stürzt. Historisch gesehen wurde die Insel bereits von antiken Seefahrern als Orientierungspunkt genutzt, da das Feuer des Vulkans weithin sichtbar war. Trotz der ständigen Aktivität ist die Insel bewohnt, wobei sich die Siedlungen in sicheren Bereichen fernab der aktiven Krater befinden. Geologisch gesehen ist Stromboli Teil des äolischen Inselbogens, der durch komplexe tektonische Verschiebungen zwischen Afrika und Europa entstanden ist. Heute ist die Insel ein wichtiges Ziel für Wanderer und Geologen, die das Naturschauspiel aus nächster Nähe beobachten möchten.",
      hu: "Stromboli egy kis vulkáni sziget a Tirrén-tengeren, amely a Szicíliától északra fekvő Lipari-szigetek (Aeoli-szigetek) részét képezi. A szigeten található tűzhányó a világ egyik legaktívabb vulkánja, amely szinte folyamatos, kisebb kitöréseiről híres; ezt a jelenséget a tudomány 'stromboli-típusú aktivitásnak' nevezi. Ezek a rendszeres robbanások izzó lávadarabokat és hamut lövellnek az éjszakai égboltra, ami miatt a sziget a 'Földközi-tenger világítótornya' nevet kapta. A hegy 926 méterrel emelkedik a tengerszint fölé, de a vulkán valódi alapja több mint 2000 méteres mélységben, a tengerfenéken található. A sziget egyik leglátványosabb formációja a 'Sciara del Fuoco', egy meredek törmeléklejtő az északnyugati oldalon, ahol a lávakövek közvetlenül a tengerbe zuhognak. Történelmileg az ókori hajósok is tájékozódási pontként használták a szigetet a vulkán messziről látható tüze miatt. A folyamatos aktivitás ellenére a sziget lakott, a települések pedig a kráterektől távolabb, biztonságos övezetekben épültek fel. Földtanilag Stromboli az afrikai és eurázsiai kőzetlemezek találkozásánál kialakult vulkáni ív tagja. Napjainkban a sziget a túrázók és geológusok kedvelt célpontja, akik a természet ezen lenyűgöző látványosságát kutatják.",
      ro: "Stromboli este o mică insulă vulcanică situată în Marea Tireniană, făcând parte din arhipelagul Insulelor Eoliene, la nord de Sicilia. Vulcanul omonim este unul dintre cei mai activi de pe glob, fiind renumit pentru erupțiile sale mici și aproape continue, fenomen cunoscut sub numele de „activitate stromboliană”. Aceste explozii regulate proiectează fragmente de lavă incandescentă și cenușă pe cerul nopții, ceea ce i-a atras insulei supranumele de „Farul Mediteranei”. Muntele se ridică la 926 de metri deasupra nivelului mării, însă baza reală a vulcanului se află pe fundul mării, la o adâncime de aproximativ 2000 de metri. O caracteristică geografică dominantă este „Sciara del Fuoco”, un versant abrupt de resturi vulcanice pe partea de nord-vest, unde lava se prăbușește direct în mare. Din punct de vedere istoric, insula a fost utilizată ca punct de reper de navigatorii antici datorită vizibilității mari a exploziilor nocturne. În ciuda activității seismice neîncetate, insula este locuită, așezările fiind poziționate în zone sigure, departe de fluxul de lavă. Geologic, Stromboli aparține arcului eolian format prin dinamica tectonică dintre plăcile africană și eurasiatică. Astăzi, insula este o destinație de top pentru cercetători și turiști pasionați de fenomene geologice rare.",
      en: "Stromboli is a small volcanic island in the Tyrrhenian Sea, part of the Aeolian archipelago located north of Sicily. The eponymous volcano is among the most active on Earth, famous for its nearly continuous small-scale eruptions, a phenomenon known in volcanology as 'Strombolian activity.' These regular bursts eject glowing lava fragments and ash into the night sky, earning the island the enduring nickname 'Lighthouse of the Mediterranean.' While the peak rises approximately 926 meters above sea level, the true base of the volcano lies on the seafloor at a depth of about 2,000 meters. A prominent feature of the island is the 'Sciara del Fuoco,' a steep slope of volcanic debris on the northwest side where lava rocks tumble directly into the sea. Historically, ancient mariners relied on the island as a navigational landmark due to the persistent visibility of its volcanic fire. Despite the constant activity, the island remains inhabited, with settlements located in safe zones far from the active craters. Geologically, Stromboli is part of the Aeolian volcanic arc formed by the subduction of the African plate. Today, it is a premier destination for hikers and geologists eager to witness one of nature's most spectacular displays of constant volcanic energy.",
    },
    factsAdvanced: {
      de: ["Der Vulkan Stromboli ist seit mindestens 2.000 Jahren nahezu ununterbrochen aktiv.", "Die Insel hat eine Fläche von nur etwa 12,6 Quadratkilometern.", "Stromboli hat drei aktive Hauptkrater an seinem Gipfel.", "Der Ausbruch im Jahr 2019 war einer der stärksten der letzten Jahrzehnte.", "Etwa 500 Menschen leben dauerhaft in den Dörfern Stromboli und Ginostra.", "Die Sciara del Fuoco entstand durch einen massiven Flankeneinsturz vor ca. 5.000 Jahren."],
      hu: ["A Stromboli vulkán legalább 2000 éve szinte megszakítás nélkül aktív.", "A sziget teljes területe mindössze körülbelül 12,6 négyzetkilométer.", "A vulkán tetején három fő aktív krátercsoport található.", "A 2019-es kitörés az elmúlt évtizedek egyik legerősebb eseménye volt.", "Körülbelül 500 ember él állandó jelleggel Stromboli és Ginostra falvakban.", "A Sciara del Fuoco egy 5000 évvel ezelőtti hatalmas hegyomlás nyomán jött létre."],
      ro: ["Vulcanul Stromboli este activ aproape neîntrerupt de cel puțin 2.000 de ani.", "Insula are o suprafață totală de numai aproximativ 12,6 kilometri pătrați.", "Există trei grupuri de cratere active situate în zona vârfului muntelui.", "Erupția din anul 2019 a fost una dintre cele mai violente din ultimele decenii.", "Aproximativ 500 de persoane locuiesc permanent în satele Stromboli și Ginostra.", "Panta Sciara del Fuoco s-a format în urma unei prăbușiri masive acum 5.000 de ani."],
      en: ["The Stromboli volcano has been almost continuously active for at least 2,000 years.", "The island occupies a total land area of only about 12.6 square kilometers.", "There are three main active crater groups located at the summit of the volcano.", "The 2019 eruption was one of the strongest recorded events in recent decades.", "Roughly 500 people live year-round in the villages of Stromboli and Ginostra.", "The Sciara del Fuoco was created by a massive flank collapse about 5,000 years ago."],
    },
  },
  {
    id: "it-portofino",
    type: "landmark",
    parent: "IT-42",
    coords: [9.210, 44.301],
    name: { de: "Portofino", hu: "Portofino", ro: "Portofino", en: "Portofino" },
    
    
    description: {
          "en": "Portofino is an iconic, impossibly picturesque fishing village on the Italian Riviera, renowned as a haven for the wealthy and the jet-set crowd since the 1950s. The village encircles a small, crescent-shaped harbor, where sleek mega-yachts share the water with traditional wooden fishing boats. Rising steeply from the water are rows of vibrant, pastel-colored houses framed by lush, green pine and olive trees. Beyond its glamorous boutiques and waterfront cafés, Portofino offers natural beauty through the surrounding Regional Natural Park and the imposing Castello Brown, which provides sweeping views of the Ligurian Sea.",
          "de": "Portofino ist ein ikonisches, unglaublich malerisches Fischerdorf an der italienischen Riviera, das seit den 1950er Jahren als Zufluchtsort für die Reichen und das Jetset-Publikum bekannt ist. Das Dorf umschließt einen kleinen, halbmondförmigen Hafen, wo schlanke Mega-Yachten das Wasser mit traditionellen hölzernen Fischerbooten teilen. Steil aus dem Wasser erheben sich Reihen lebhafter, pastellfarbener Häuser, umrahmt von üppigen, grünen Kiefern und Olivenbäumen. Jenseits seiner glamourösen Boutiquen und Cafés am Wasser bietet Portofino natürliche Schönheit durch den umliegenden Regionalen Naturpark und das imposante Castello Brown, das weite Ausblicke auf das Ligurische Meer bietet.",
          "hu": "Portofino egy ikonikus, hihetetlenül festői halászfalu az Olasz Riviérán, amely az 1950-es évek óta a gazdagok és a jet-set elit menedékhelyeként ismert. A falu egy kis, félhold alakú kikötőt vesz körül, ahol az elegáns mega-jachtok hagyományos fa halászhajókkal osztoznak a vízen. A vízből meredeken emelkednek ki a vibráló, pasztellszínű házsorok, amelyeket buja zöld fenyők és olajfák öveznek. A csillogó butikokon és vízparti kávézókon túl Portofino természeti szépséget is kínál a környező Regionális Természeti Park és az impozáns Castello Brown révén, amely elsöprő kilátást nyújt a Ligur-tengerre.",
          "ro": "Portofino este un sat de pescari emblematic, incredibil de pitoresc de pe Riviera Italiană, renumit ca un refugiu pentru cei bogați și pentru mulțimea de jet-set încă din anii 1950. Satul înconjoară un mic port în formă de semilună, unde mega-iahturile elegante împart apa cu bărcile tradiționale de pescuit din lemn. Ridicându-se abrupt din apă sunt rânduri de case vibrante, în culori pastelate, încadrate de pini verzi luxurianți și măslini. Dincolo de buticurile sale fermecătoare și cafenelele de pe malul apei, Portofino oferă frumusețe naturală prin Parcul Natural Regional înconjurător și impunătorul Castello Brown, care oferă vederi ample asupra Mării Ligurice."
    },
    facts: {
          "en": [
                "Portofino became a symbol of 'La Dolce Vita' in the 1950s, attracting Hollywood stars and royals.",
                "The name originates from 'Portus Delphini', meaning Port of the Dolphin, named by the Romans.",
                "The entire Portofino promontory is a protected marine reserve ideal for scuba diving.",
                "Castello Brown was a military fortress but is now used primarily for exhibitions and events.",
                "The Piazzetta, the central cobbled square, is the heart of the village's social life.",
                "The church of San Giorgio supposedly contains the relics of Saint George.",
                "The village has a permanent population of fewer than 400 people.",
                "To preserve its beauty, strict building codes forbid new construction in the village center."
          ],
          "de": [
                "Portofino wurde in den 1950er Jahren zu einem Symbol für 'La Dolce Vita' und zog Hollywoodstars und Könige an.",
                "Der Name stammt von 'Portus Delphini', was Delfinhafen bedeutet und von den Römern benannt wurde.",
                "Das gesamte Vorgebirge von Portofino ist ein geschütztes Meeresschutzgebiet, ideal zum Gerätetauchen.",
                "Castello Brown war eine militärische Festung, wird aber heute hauptsächlich für Ausstellungen und Veranstaltungen genutzt.",
                "Die Piazzetta, der zentrale gepflasterte Platz, ist das Herzstück des gesellschaftlichen Lebens des Dorfes.",
                "Die Kirche San Giorgio soll die Reliquien des Heiligen Georg enthalten.",
                "Das Dorf hat eine ständige Bevölkerung von weniger als 400 Menschen.",
                "Um seine Schönheit zu bewahren, verbieten strenge Bauvorschriften Neubauten im Dorfzentrum."
          ],
          "hu": [
                "Portofino az 1950-es években a 'La Dolce Vita' szimbólumává vált, vonzva a hollywoodi sztárokat és az uralkodócsaládok tagjait.",
                "A név a 'Portus Delphini'-ből származik, ami a Delfin kikötőjét jelenti, amelyet a rómaiak adtak neki.",
                "A teljes portofinói hegyfok védett tengeri rezervátum, amely ideális a búvárkodáshoz.",
                "A Castello Brown katonai erőd volt, de ma már elsősorban kiállításokra és rendezvényekre használják.",
                "A Piazzetta, a központi macskaköves tér a falu társadalmi életének szíve.",
                "A San Giorgio templom állítólag Szent György ereklyéit őrzi.",
                "A falu állandó lakossága kevesebb mint 400 fő.",
                "Szépségének megőrzése érdekében szigorú építési szabályzatok tiltják az új építkezéseket a falu központjában."
          ],
          "ro": [
                "Portofino a devenit un simbol al 'La Dolce Vita' în anii 1950, atrăgând vedete de la Hollywood și familii regale.",
                "Numele provine din 'Portus Delphini', însemnând Portul Delfinului, numit de romani.",
                "Întregul promontoriu Portofino este o rezervație marină protejată, ideală pentru scufundări.",
                "Castello Brown a fost o fortăreață militară, dar acum este folosit în principal pentru expoziții și evenimente.",
                "Piazzetta, piața centrală pietruită, este inima vieții sociale a satului.",
                "Biserica San Giorgio ar conține moaștele Sfântului Gheorghe.",
                "Satul are o populație permanentă de mai puțin de 400 de locuitori.",
                "Pentru a-și păstra frumusețea, codurile stricte de construcție interzic construcțiile noi în centrul satului."
          ]
    },
    image: "/geo-images/italy/it-portofino.webp",
    descriptionAdvanced: {
      de: "Portofino ist ein malerisches Fischerdorf an der italienischen Riviera in der Region Ligurien, bekannt für seine farbenfrohen Häuser und den exklusiven Jachthafen. Es liegt auf einer kleinen Halbinsel am Golf von Tigullio und ist Teil eines geschützten regionalen Naturparks sowie eines Meeresschutzgebiets. Historisch wurde das Dorf von den Römern als 'Portus Delphini' gegründet, vermutlich wegen der vielen Delfine, die damals im Golf heimisch waren. Die Architektur des Ortes ist geprägt von den schmalen, hohen Gebäuden in Pastelltönen, die sich um die zentrale 'Piazzetta' am Wasser gruppieren. Über dem Dorf thront die Festung Castello Brown, die im 16. Jahrhundert zur Verteidigung gegen Piraten errichtet wurde und heute einen weiten Blick über die Küste bietet. Das Meeresschutzgebiet von Portofino beherbergt eine außergewöhnliche Artenvielfalt, darunter seltene rote Korallen und weitläufige Seegraswiesen. Trotz seiner geringen Größe von nur wenigen Quadratkilometern ist der Ort ein weltweit bekanntes Symbol für luxuriösen Tourismus und mediterrane Eleganz geworden. Die strategische Lage zwischen Genua und den Cinque Terre macht Portofino zu einem wichtigen Knotenpunkt für die Schifffahrt und den gehobenen Tourismus in Ligurien. Heute bemüht sich die Gemeinde intensiv um den Erhalt des kulturellen Erbes und der empfindlichen marinen Ökosysteme.",
      hu: "Portofino egy festői halászfalu az olasz Riviérán, Liguria régióban, amely világszerte ismert színes házairól és exkluzív jachtkikötőjéről. A település a Tigullio-öböl egyik kis félszigetén fekszik, és egy védett regionális természeti park, valamint egy tengeri rezervátum része. Történelmileg a falut a rómaiak alapították 'Portus Delphini' néven, vélhetően az öbölben nagy számban előforduló delfinek után. Az építészetre a vízpart mentén sorakozó, pasztellszínű, keskeny és magas épületek jellemzőek, amelyek a központi 'Piazzetta' körül csoportosulnak. A falu felett magasodik a Castello Brown erőd, amelyet a 16. században építettek a kalóztámadások elleni védekezésül, ma pedig lenyűgöző kilátást nyújt a tengerpartra. A portofinói tengeri védett terület rendkívüli biológiai sokféleséggel rendelkezik, beleértve a ritka vörös korallokat és a kiterjedt tengerifű-mezőket. Csekély, mindössze néhány négyzetkilométeres területe ellenére a falu a luxusturizmus és a mediterrán elegancia globális jelképévé vált. Genova és a Cinque Terre közötti stratégiai elhelyezkedése révén Portofino fontos csomópont a liguriai hajózás és az elit turizmus számára. Napjainkban az önkormányzat kiemelt figyelmet fordít a kulturális örökség és a törékeny tengeri ökoszisztémák megőrzésére.",
      ro: "Portofino este un sat pescăresc pitoresc situat pe Riviera Italiană, în regiunea Liguria, renumit pentru casele sale multicolore și portul de iahturi exclusivist. Localitatea este amplasată pe o mică peninsulă în Golful Tigullio și face parte dintr-un parc natural regional protejat, precum și dintr-o arie marină protejată. Din punct de vedere istoric, satul a fost fondat de romani sub numele de 'Portus Delphini', probabil datorită numărului mare de delfini din apele golfului. Arhitectura locului se distinge prin clădirile înalte și înguste, vopsite în nuanțe pastelate, care înconjoară celebra 'Piazzetta' de la marginea apei. Deasupra satului veghează Castello Brown, o fortăreață construită în secolul al XVI-lea pentru apărarea împotriva piraților, care astăzi oferă o panoramă spectaculoasă asupra coastei. Aria marină protejată din Portofino adăpostește o biodiversitate rară, incluzând corali roșii și pajiști vaste de iarbă de mare Posidonia. În ciuda dimensiunii sale reduse, de numai câțiva kilometri pătrați, Portofino a devenit un simbol global al luxului și al eleganței mediteraneene. Poziția sa strategică între Genova și Cinque Terre face din Portofino un punct cheie pentru navigație și turismul de elită în Liguria. În prezent, autoritățile locale se concentrează pe conservarea patrimoniului istoric și a ecosistemelor marine fragile.",
      en: "Portofino is a picturesque fishing village on the Italian Riviera in the Liguria region, celebrated for its vividly colored houses and exclusive yacht harbor. It is situated on a small peninsula within the Gulf of Tigullio and is protected as part of a regional natural park and a marine reserve. Historically, the village was established by the Romans as 'Portus Delphini,' likely named after the many dolphins that inhabited the gulf at the time. The local architecture is defined by tall, narrow pastel-colored buildings clustered around the central 'Piazzetta' at the water's edge. Overlooking the village is Castello Brown, a fortress constructed in the 16th century for defense against pirates, which now serves as a museum with panoramic views. The Portofino Marine Protected Area boasts exceptional biodiversity, featuring rare red corals and vast meadows of Posidonia seagrass. Despite its small size of only a few square kilometers, the village has become a worldwide symbol of luxury tourism and Mediterranean elegance. Its strategic location between Genoa and the Cinque Terre makes it a vital hub for maritime activities and high-end tourism in Liguria. Today, the community is deeply committed to preserving both its cultural heritage and the delicate surrounding marine ecosystems.",
    },
    factsAdvanced: {
      de: ["Die Römer nannten den Ort 'Portus Delphini', was Hafen der Delfine bedeutet.", "Das Castello Brown stammt ursprünglich aus dem Jahr 1557.", "Portofino hat eine ständige Einwohnerzahl von weniger als 400 Personen.", "Die Region wurde 1935 zum ersten Mal als Naturpark unter Schutz gestellt.", "Im Hafenbecken wurde 1954 die Statue 'Christus der Abgründe' versenkt.", "Die berühmte 'Piazzetta' ist eigentlich der Marktplatz von Portofino."],
      hu: ["A rómaiak a települést 'Portus Delphini'-nek, azaz Delfinek kikötőjének hívták.", "A Castello Brown erőd eredeti formájában 1557-ben épült fel.", "Portofino állandó lakossága kevesebb mint 400 főt számlál.", "A területet először 1935-ben nyilvánították természetvédelmi területté.", "Az öböl vizében 1954-ben helyezték el a 'Mélység Krisztusa' szobrot.", "A híres 'Piazzetta' hivatalosan Portofino főtereként funkcionál."],
      ro: ["Romanii au numit așezarea 'Portus Delphini', adică Portul Delfinilor.", "Fortăreața Castello Brown datează în forma sa actuală din anul 1557.", "Populația permanentă a satului Portofino este de sub 400 de locuitori.", "Regiunea a fost declarată parc natural pentru prima dată în anul 1935.", "Statuia 'Cristos din Abis' a fost scufundată în golful din apropiere în 1954.", "Faimoasa 'Piazzetta' este de fapt piața centrală a localității Portofino."],
      en: ["The Romans named the settlement 'Portus Delphini,' or Port of the Dolphins.", "Castello Brown was originally built in 1557 for maritime defense.", "The permanent population of Portofino is fewer than 400 residents.", "The surrounding area was first designated as a natural park in 1935.", "The 'Christ of the Abyss' statue was submerged in the nearby bay in 1954.", "The famous 'Piazzetta' serves as the primary social and market hub of the village."],
    },
  },
  {
    id: "it-cinque-terre",
    type: "landmark",
    parent: "IT-42",
    coords: [9.722, 44.125],
    name: { de: "Cinque Terre", hu: "Cinque Terre", ro: "Cinque Terre", en: "Cinque Terre" },
    
    
    description: {
          "en": "Cinque Terre, meaning 'Five Lands', is a remarkably rugged portion of the Italian Riviera coastline in the Liguria region. It comprises five ancient, brightly colored fishing villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore. The villages are perched precariously on steep, terraced cliffs that plunge into the Ligurian Sea. For centuries, they were isolated and accessible only by foot or sea, allowing them to retain a timeless, authentic charm. The intricately engineered terraces, supported by dry stone walls, produce renowned wines and olives. Today, it is a hugely popular UNESCO World Heritage site, famous for its breathtaking hiking trails.",
          "de": "Cinque Terre, was 'Fünf Länder' bedeutet, ist ein bemerkenswert zerklüfteter Teil der Küste der italienischen Riviera in der Region Ligurien. Es umfasst fünf alte, farbenfrohe Fischerdörfer: Monterosso al Mare, Vernazza, Corniglia, Manarola und Riomaggiore. Die Dörfer thronen gefährlich auf steilen, terrassenförmig angelegten Klippen, die ins Ligurische Meer stürzen. Jahrhundertelang waren sie isoliert und nur zu Fuß oder auf dem Seeweg erreichbar, wodurch sie einen zeitlosen, authentischen Charme bewahren konnten. Die kunstvoll konstruierten Terrassen, gestützt von Trockenmauern, bringen renommierte Weine und Oliven hervor. Heute ist es ein sehr beliebtes UNESCO-Weltkulturerbe, berühmt für seine atemberaubenden Wanderwege.",
          "hu": "A Cinque Terre, ami 'Öt Földet' jelent, az Olasz Riviéra egy rendkívül zord partszakasza a Liguria régióban. Öt ősi, élénk színű halászfaluból áll: Monterosso al Mare, Vernazza, Corniglia, Manarola és Riomaggiore. A falvak bizonytalanul egyensúlyoznak a Ligur-tengerbe szakadó meredek, teraszos sziklákon. Évszázadokig elszigeteltek voltak, és csak gyalog vagy tengeren lehetett megközelíteni őket, ami lehetővé tette számukra, hogy megőrizzék időtlen, autentikus bájukat. A száraz kőfalakkal megtámasztott, bonyolultan kialakított teraszokon híres borokat és olajbogyókat termelnek. Ma rendkívül népszerű UNESCO világörökségi helyszín, amely lélegzetelállító túraútvonalairól híres.",
          "ro": "Cinque Terre, care înseamnă 'Cinci Pământuri', este o porțiune remarcabil de accidentată a coastei Rivierei Italiene din regiunea Liguria. Cuprinde cinci sate de pescari antice, viu colorate: Monterosso al Mare, Vernazza, Corniglia, Manarola și Riomaggiore. Satele sunt cocoțate precar pe stânci abrupte, terasate, care se scufundă în Marea Ligurică. Timp de secole, ele au fost izolate și accesibile doar pe jos sau pe mare, permițându-le să păstreze un farmec atemporal, autentic. Terasele cu inginerie complicată, susținute de pereți de piatră seacă, produc vinuri și măsline renumite. Astăzi, este un sit al Patrimoniului Mondial UNESCO extrem de popular, faimos pentru traseele sale uluitoare de drumeții."
    },
    facts: {
          "en": [
                "The region is connected by a scenic 19th-century railway line that tunnels through the cliffs.",
                "Corniglia is the only village not situated directly on the water, sitting 100 meters above the sea.",
                "The 'Via dell'Amore' (Path of Love) is a famous, romantic walkway between Riomaggiore and Manarola.",
                "Cars are largely banned or restricted within the five villages.",
                "The dry stone walls supporting the terraces measure over 6,000 kilometers in total length.",
                "Cinque Terre produces SciacchetrÁ , a sweet and highly prized dessert wine.",
                "The area was designated a National Park in 1999 to protect its delicate ecosystem.",
                "The houses are painted in bright colors so fishermen could see their homes from offshore."
          ],
          "de": [
                "Die Region ist durch eine malerische Eisenbahnlinie aus dem 19. Jahrhundert verbunden, die durch die Klippen tunnelt.",
                "Corniglia ist das einzige Dorf, das nicht direkt am Wasser liegt, sondern 100 Meter über dem Meer.",
                "Die 'Via dell'Amore' (Weg der Liebe) ist ein berühmter, romantischer Gehweg zwischen Riomaggiore und Manarola.",
                "Autos sind in den fünf Dörfern weitgehend verboten oder eingeschränkt.",
                "Die Trockenmauern, die die Terrassen stützen, messen eine Gesamtlänge von über 6.000 Kilometern.",
                "Cinque Terre produziert SciacchetrÁ , einen süßen und hochgeschätzten Dessertwein.",
                "Das Gebiet wurde 1999 zum Nationalpark erklärt, um sein empfindliches Ökosystem zu schützen.",
                "Die Häuser sind in leuchtenden Farben gestrichen, damit die Fischer ihre Häuser von der Küste aus sehen konnten."
          ],
          "hu": [
                "A régiót egy festői, 19. századi vasútvonal köti össze, amely a sziklákon keresztül halad.",
                "Corniglia az egyetlen falu, amely nem közvetlenül a víznél található, hanem 100 méterrel a tenger felett.",
                "A 'Via dell'Amore' (A Szerelem Áštja) egy híres, romantikus sétány Riomaggiore és Manarola között.",
                "A gépkocsiforgalom nagyrészt tiltott vagy korlátozott az öt faluban.",
                "A teraszokat tartó száraz kőfalak teljes hossza meghaladja a 6000 kilométert.",
                "A Cinque Terre-ben SciacchetrÁ -t, egy édes és nagyra értékelt desszertbort termelnek.",
                "A területet 1999-ben Nemzeti Parkká nyilvánították az érzékeny ökoszisztéma védelme érdekében.",
                "A házakat élénk színekre festették, hogy a halászok a tenger felől is láthassák otthonukat."
          ],
          "ro": [
                "Regiunea este conectată de o linie de cale ferată pitorească din secolul al XIX-lea, care trece prin stânci.",
                "Corniglia este singurul sat care nu este situat direct pe apă, aflându-se la 100 de metri deasupra mării.",
                "'Via dell'Amore' (Calea Dragostei) este o alee faimoasă și romantică între Riomaggiore și Manarola.",
                "Mașinile sunt în mare parte interzise sau restricționate în interiorul celor cinci sate.",
                "Pereții din piatră uscată care susțin terasele măsoară o lungime totală de peste 6.000 de kilometri.",
                "Cinque Terre produce SciacchetrÁ , un vin de desert dulce și foarte apreciat.",
                "Zona a fost desemnată Parc Național în 1999 pentru a-și proteja ecosistemul delicat.",
                "Casele sunt vopsite în culori strălucitoare, astfel încât pescarii să-și poată vedea casele din larg."
          ]
    },
    image: "/geo-images/italy/it-cinque-terre.webp",
    descriptionAdvanced: {
      de: "Die Cinque Terre sind ein zerklüfteter Küstenabschnitt an der italienischen Riviera in Ligurien, der aus den fünf historischen Dörfern Monterosso al Mare, Vernazza, Corniglia, Manarola und Riomaggiore besteht. Diese jahrhundertealten Orte sind weltberühmt für ihre terrassierten Weinberge, die mühsam in die steilen Hänge oberhalb des Meeres geschlagen wurden. Seit 1997 gehören die Cinque Terre zusammen mit Portovenere und den Inseln Palmaria, Tino und Tinetto zum UNESCO-Weltkulturerbe. Die Dörfer zeichnen sich durch ihre farbenfrohen Turmhäuser aus, die oft direkt in die Felsen gebaut wurden und durch schmale Gassen und Treppen miteinander verbunden sind. Historisch war die Region isoliert und nur über das Meer oder mühsame Saumpfade erreichbar, was zum Erhalt der einzigartigen Kultur und Architektur beitrug. Die lokale Wirtschaft basiert traditionell auf der Landwirtschaft, insbesondere dem Anbau von Weintrauben für den bekannten 'Sciacchetrà'-Wein, sowie auf dem Fischfang. Geografisch ist das Gebiet Teil eines Nationalparks, der zahlreiche Wanderwege wie den berühmten 'Sentiero Azzurro' umfasst. Die steile Küstenlinie bietet spektakuläre Ausblicke auf das Ligurische Meer und beherbergt eine geschützte Meereszone mit reicher Biodiversität. Heute stehen die Cinque Terre vor der Herausforderung, den Massentourismus mit dem Schutz der empfindlichen Umwelt und der traditionellen Lebensweise in Einklang zu bringen.",
      hu: "A Cinque Terre egy sziklás tengerparti szakasz az olasz Riviérán, Liguria régióban, amely öt történelmi faluból áll: Monterosso al Mare, Vernazza, Corniglia, Manarola és Riomaggiore. Ezek az évszázados települések világszerte ismertek a tenger feletti meredek lejtőkbe vájt teraszos szőlőültetvényeikről. 1997 óta a Cinque Terre, Portovenere és a környező szigetek az UNESCO Világörökség részét képezik. A falvakat színes toronyházak jellemzik, amelyeket gyakran közvetlenül a sziklákba építettek, és amelyeket szűk sikátorok és lépcsők hálózata köt össze. Történelmileg a régió elszigetelt volt, és csak a tenger felől vagy nehéz ösvényeken volt megközelíthető, ami hozzájárult az egyedülálló kultúra és építészet megőrzéséhez. A helyi gazdaság hagyományosan a mezőgazdaságra, különösen a híres 'Sciacchetrà' borhoz szükséges szőlő termesztésére, valamint a halászatra épült. Földrajzilag a terület egy nemzeti park része, amely számos túraútvonalat foglal magában, köztük a híres 'Sentiero Azzurro'-t (Kék ösvény). A meredek partvonal lenyűgöző kilátást nyújt a Ligur-tengerre, és gazdag élővilággal rendelkező tengeri védett területnek ad otthont. Napjainkban a Cinque Terre legnagyobb kihívása a tömegturizmus és az érzékeny környezet, valamint a hagyományos életmód közötti egyensúly fenntartása.",
      ro: "Cinque Terre este o secțiune accidentată de coastă de pe Riviera Italiană, în regiunea Liguria, formată din cinci sate istorice: Monterosso al Mare, Vernazza, Corniglia, Manarola și Riomaggiore. Aceste așezări vechi de secole sunt faimoase în întreaga lume pentru podgoriile terasate sculptate cu greu în versanții abrupți de deasupra mării. Din 1997, Cinque Terre, împreună cu Portovenere și insulele adiacente, fac parte din Patrimoniul Mondial UNESCO. Satele se caracterizează prin case-turn viu colorate, construite adesea direct în stâncă și conectate prin rețele de străduțe înguste și trepte abrupte. Din punct de vedere istoric, regiunea a fost izolată, fiind accesibilă doar pe mare sau prin poteci dificile, ceea ce a ajutat la conservarea culturii și arhitecturii unice. Economia locală se bazează tradițional pe agricultură, în special pe cultivarea strugurilor pentru celebrul vin 'Sciacchetrà', precum și pe pescuit. Geografic, zona este integrată într-un parc național care include numeroase trasee de drumeție, cum ar fi faimosul 'Sentiero Azzurro'. Linia de coastă oferă panorame spectaculoase asupra Mării Ligurice și adăpostește o zonă marină protejată cu o biodiversitate bogată. Astăzi, Cinque Terre se confruntă cu provocarea de a echilibra turismul de masă cu protejarea mediului fragil și a modului de viață tradițional.",
      en: "Cinque Terre is a rugged portion of coast on the Italian Riviera in Liguria, comprising the five historical villages of Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore. These centuries-old settlements are world-renowned for their steep terraced vineyards, meticulously carved into the hillsides overlooking the sea. Since 1997, Cinque Terre, along with Portovenere and the nearby islands, has been designated a UNESCO World Heritage site. The villages are characterized by vibrant tower houses, often built directly into the jagged cliffs and interconnected by narrow alleys and steep staircases. Historically, the region remained isolated and was reachable only by sea or arduous mule tracks, a factor that preserved its unique cultural and architectural identity. The local economy is traditionally rooted in agriculture, specifically the cultivation of grapes for the famous 'Sciacchetrà' wine, and artisanal fishing. Geographically, the area is part of a national park that features an extensive network of hiking trails, including the renowned 'Sentiero Azzurro' (Blue Trail). The precipitous coastline offers spectacular views of the Ligurian Sea and protects a marine area with significant biodiversity. Today, Cinque Terre faces the ongoing challenge of balancing global mass tourism with the preservation of its fragile environment and traditional way of life.",
    },
    factsAdvanced: {
      de: ["Die Cinque Terre wurden 1997 in die UNESCO-Welterbeliste aufgenommen.", "Corniglia ist das einzige der fünf Dörfer, das keinen direkten Zugang zum Meer hat.", "Der Nationalpark Cinque Terre ist der kleinste Nationalpark Italiens.", "Der 'Sciacchetrà' ist ein süßer Dessertwein, der nur hier produziert wird.", "Die berühmte 'Via dell'Amore' verbindet die Dörfer Riomaggiore und Manarola.", "Früher waren die Dörfer nur mit dem Schiff oder über Saumpfade erreichbar."],
      hu: ["A Cinque Terre 1997-ben került fel az UNESCO Világörökségi listájára.", "Corniglia az egyetlen falu az ötből, amely nem rendelkezik közvetlen tengerparttal.", "A Cinque Terre Nemzeti Park Olaszország legkisebb területű nemzeti parkja.", "A 'Sciacchetrà' egy édes desszertbor, amelyet kizárólag ebben a régióban készítenek.", "A híres 'Via dell'Amore' (Szerelmesek útja) Riomaggiore és Manarola falvakat köti össze.", "Régen a falvak csak hajóval vagy nehéz hegyi ösvényeken voltak megközelíthetők."],
      ro: ["Cinque Terre a fost inclus în Patrimoniul Mondial UNESCO în anul 1997.", "Corniglia este singurul sat dintre cele cinci care nu are acces direct la mare.", "Parcul Național Cinque Terre este cel mai mic parc național din Italia.", "Vinul 'Sciacchetrà' este un vin dulce de desert produs exclusiv în această zonă.", "Faimoasa 'Via dell'Amore' face legătura între satele Riomaggiore și Manarola.", "În trecut, satele erau accesibile doar pe cale maritimă sau prin poteci montane."],
      en: ["Cinque Terre was inscribed onto the UNESCO World Heritage list in 1997.", "Corniglia is the only one of the five villages that does not have a direct harbor.", "The Cinque Terre National Park is the smallest national park in Italy by area.", "The 'Sciacchetrà' is a rare sweet dessert wine produced only in this region.", "The famous 'Via dell'Amore' connects the villages of Riomaggiore and Manarola.", "Historically, the villages were only accessible via boat or steep mule paths."],
    },
  },
  {
    id: "it-lecce",
    type: "city",
    parent: "IT-75",
    coords: [18.169, 40.353],
    name: { de: "Lecce", hu: "Lecce", ro: "Lecce", en: "Lecce" },
    
    
    description: {
          "en": "Lecce, often dubbed the 'Florence of the South', is the principal city of the Salento peninsula in Apulia. The city is renowned for its exuberant, highly decorative Baroque architecture, a style uniquely its own known as 'Barocco Leccese'. This extravagant design is carved from the soft, honey-colored local limestone ('pietra leccese'), which allowed master stonemasons to create intricate facades of cherubs, monsters, flowers, and animals. Beyond its architectural splendor, Lecce has a profound ancient history, evidenced by a sunken Roman amphitheater located right in its central square. The city exudes an elegant, relaxed southern Italian charm.",
          "de": "Lecce, oft als 'Florenz des Südens' bezeichnet, ist die wichtigste Stadt der Halbinsel Salento in Apulien. Die Stadt ist bekannt für ihre üppige, hochdekorative Barockarchitektur, ein ganz eigener Stil, der als 'Barocco Leccese' bekannt ist. Dieses extravagante Design ist aus dem weichen, honigfarbenen lokalen Kalkstein ('Pietra Leccese') geschnitzt, der es Meistersteinmetzen ermöglichte, kunstvolle Fassaden mit Cherubim, Monstern, Blumen und Tieren zu schaffen. Jenseits seiner architektonischen Pracht hat Lecce eine tiefgreifende antike Geschichte, was durch ein versunkenes römisches Amphitheater belegt wird, das sich direkt auf dem zentralen Platz befindet. Die Stadt versprüht einen eleganten, entspannten süditalienischen Charme.",
          "hu": "Lecce-t, amelyet gyakran a 'Dél Firenzéjének' neveznek, a salentói félsziget fő városa Pugliában. A város híres a dús, rendkívül dekoratív barokk építészetéről, egy egyedi stílusról, amely 'Barocco Leccese' néven ismert. Ezt az extravagáns dizájnt a puha, mézszínű helyi mészkőből ('pietra leccese') faragták ki, amely lehetővé tette a kőfaragó mesterek számára, hogy kerubokból, szörnyekből, virágokból és állatokból álló bonyolult homlokzatokat hozzanak létre. Építészeti pompáján túl Lecce mély ókori történelemmel is rendelkezik, amit a központi terén található elsüllyedt római amfiteátrum bizonyít. A város elegáns, nyugodt dél-olasz bájt áraszt.",
          "ro": "Lecce, numită adesea 'Florența Sudului', este principalul oraș al peninsulei Salento din Puglia. Orașul este renumit pentru arhitectura sa barocă exuberantă, extrem de decorativă, un stil unic cunoscut sub numele de 'Barocco Leccese'. Acest design extravagant este sculptat din calcarul local moale, de culoarea mierii ('pietra leccese'), care a permis maeștrilor pietrari să creeze fațade complicate cu heruvimi, monștri, flori și animale. Dincolo de splendoarea sa arhitecturală, Lecce are o istorie antică profundă, evidențiată de un amfiteatru roman scufundat situat chiar în piața sa centrală. Orașul emană un farmec elegant și relaxat, specific sudului Italiei."
    },
    facts: {
          "en": [
                "The Basilica of Santa Croce is the pinnacle of Lecce's Baroque architectural style.",
                "The local 'pietra leccese' stone hardens over time but is soft when initially quarried.",
                "A Roman amphitheater, excavated in the early 20th century, seats up to 25,000 spectators.",
                "The city was once controlled by Greeks, Romans, Byzantines, Normans, and Spaniards.",
                "Lecce has a strong tradition of papier-mâché (cartapesta) artistry, dating back centuries.",
                "The Piazza del Duomo is considered one of the most beautiful closed squares in Italy.",
                "The city's symbol is a she-wolf beneath a holm oak tree.",
                "Lecce produces excellent olive oil and bold red wines, such as Primitivo and Negroamaro."
          ],
          "de": [
                "Die Basilika Santa Croce ist der Höhepunkt des barocken Architekturstils von Lecce.",
                "Der lokale Stein 'Pietra Leccese' härtet mit der Zeit aus, ist aber beim ersten Abbau weich.",
                "Ein römisches Amphitheater, das im frühen 20. Jahrhundert ausgegraben wurde, bietet Platz für bis zu 25.000 Zuschauer.",
                "Die Stadt wurde einst von Griechen, Römern, Byzantinern, Normannen und Spaniern kontrolliert.",
                "Lecce hat eine starke Tradition in der Pappmaché-Kunst (Cartapesta), die Jahrhunderte zurückreicht.",
                "Die Piazza del Duomo gilt als einer der schönsten geschlossenen Plätze Italiens.",
                "Das Symbol der Stadt ist eine Wölfin unter einer Steineiche.",
                "Lecce produziert exzellentes Olivenöl und kräftige Rotweine wie Primitivo und Negroamaro."
          ],
          "hu": [
                "A Santa Croce-bazilika a leccei barokk építészeti stílus csúcsa.",
                "A helyi 'pietra leccese' kő idővel megkeményedik, de a kezdeti bányászatkor még puha.",
                "A 20. század elején feltárt római amfiteátrum akár 25 000 néző befogadására is alkalmas volt.",
                "A várost egykor görögök, rómaiak, bizánciak, normannok és spanyolok irányították.",
                "Lecce erős papírmasé (cartapesta) művészeti hagyományokkal rendelkezik, amely évszázadokra nyúlik vissza.",
                "A Piazza del Duomo-t Olaszország egyik legszebb zárt terének tartják.",
                "A város szimbóluma egy anyafarkas egy magyaltölgyfa alatt.",
                "Lecce kiváló olívaolajat és testes vörösborokat termel, mint például a Primitivo és a Negroamaro."
          ],
          "ro": [
                "Bazilica Santa Croce este punctul culminant al stilului arhitectural baroc din Lecce.",
                "Piatra locală 'pietra leccese' se întărește în timp, dar este moale la prima extracție.",
                "Un amfiteatru roman, excavat la începutul secolului XX, poate găzdui până la 25.000 de spectatori.",
                "Orașul a fost cândva controlat de greci, romani, bizantini, normanzi și spanioli.",
                "Lecce are o tradiție puternică în arta papier-mâché (cartapesta), datând de secole.",
                "Piazza del Duomo este considerată una dintre cele mai frumoase piețe închise din Italia.",
                "Simbolul orașului este o lupoaică sub un stejar de stâncă.",
                "Lecce produce ulei de măsline excelent și vinuri roșii îndrăznețe, cum ar fi Primitivo și Negroamaro."
          ]
    },
    image: "/geo-images/italy/it-lecce.webp",
    descriptionAdvanced: {
      de: "Lecce, oft als das 'Florenz des Südens' bezeichnet, ist eine historische Stadt im Herzen der Halbinsel Salento in der Region Apulien. Sie ist weltberühmt für ihre Architektur im Stile des 'Barocco Leccese', einer besonderen Form des Barock, die durch die Verwendung des weichen, goldfarbenen Kalksteins aus der Region ermöglicht wurde. Dieser Stein lässt sich fast wie Holz bearbeiten, was zu den extrem detailreichen und filigranen Fassaden von Kirchen wie Santa Croce führte. Die Geschichte der Stadt reicht bis in die Zeit der Messapier zurück, doch ihre Blütezeit erlebte sie unter der Herrschaft der Spanier im 16. und 17. Jahrhundert. Im Stadtzentrum befinden sich bedeutende römische Überreste, darunter ein gut erhaltenes Amphitheater aus dem 2. Jahrhundert n. Chr., das erst Anfang des 20. Jahrhunderts wiederentdeckt wurde. Geografisch liegt Lecce im flachen Landesinneren, nur wenige Kilometer von der Adria und dem Ionischen Meer entfernt. Die Stadt ist ein kulturelles Zentrum, bekannt für ihre Universität und die traditionelle Handwerkskunst des Pappmaché (Cartapesta). Die lokale Gastronomie spiegelt die bäuerliche Tradition Apuliens wider, mit Spezialitäten wie Pasticciotto und regionalen Weinen. Heute ist Lecce ein wichtiges touristisches Ziel, das durch seine elegante Atmosphäre und seinen Reichtum an Kunstdenkmälern besticht.",
      hu: "Lecce, amelyet gyakran a 'Dél Firenzéje' néven emlegetnek, egy történelmi város Puglia régióban, a Salentói-félsziget szívében. Világhírnevét a 'Barocco Leccese' stílusú építészetének köszönheti, amely a barokk egy sajátos formája, és a helyi, puha, aranyszínű mészkő használata tette lehetővé. Ez a kőzet szinte úgy faragható, mint a fa, ami lehetővé tette az olyan templomok rendkívül részletgazdag és finom homlokzatának kialakítását, mint a Santa Croce-bazilika. A város története egészen a messzápok idejéig nyúlik vissza, de virágkorát a 16. és 17. században, a spanyol uralom alatt élte. A városközpontban jelentős római kori maradványok találhatók, köztük egy jó állapotban fennmaradt, 2. századi amfiteátrum, amelyet csak a 20. század elején fedeztek fel újra. Földrajzilag Lecce a síkságon fekszik, mindössze néhány kilométerre az Adriai- és a Jón-tengertől. A város jelentős kulturális központ, amely egyeteméről és a hagyományos papírmasé-művészetről (cartapesta) ismert. A helyi gasztronómia Puglia paraszti hagyományait tükrözi, olyan specialitásokkal, mint a pasticciotto és a kiváló helyi borok. Napjainkban Lecce a turisták kedvelt célpontja, amely elegáns hangulatával és művészeti emlékeinek gazdagságával nyűgözi le a látogatókat.",
      ro: "Lecce, supranumit adesea „Florența Sudului”, este un oraș istoric situat în inima peninsulei Salento, în regiunea Puglia. Orașul este celebru în întreaga lume pentru arhitectura sa în stil „Barocco Leccese”, o formă specifică de baroc facilitată de utilizarea pietrei locale de calcar, moale și aurie. Această piatră permite o prelucrare extrem de fină, similară cu sculptura în lemn, rezultând fațade incredibil de detaliate precum cea a bazilicii Santa Croce. Istoria orașului datează din perioada mesapilor, însă perioada sa de maximă înflorire a fost sub dominația spaniolă, în secolele al XVI-lea și al XVII-lea. În centrul istoric se află vestigii romane remarcabile, inclusiv un amfiteatru bine conservat din secolul al II-lea d.Hr., redescoperit abia la începutul secolului al XX-lea. Geografic, Lecce este amplasat într-o zonă de câmpie, la mică distanță de Marea Adriatică și Marea Ionică. Orașul este un centru cultural vibrant, renumit pentru universitatea sa și pentru tradiția meșteșugului în hârtie presată (cartapesta). Gastronomia locală reflectă tradițiile rurale ale Pugliei, cu specialități precum pasticciotto și vinuri regionale de renume. Astăzi, Lecce atrage numeroși vizitatori datorită atmosferei sale elegante și a bogăției monumentelor de artă.",
      en: "Lecce, often referred to as the 'Florence of the South,' is a historic city located in the heart of the Salento peninsula in the Puglia region. It is world-renowned for its distinct 'Barocco Leccese' architecture, a unique form of Baroque art characterized by the use of soft, golden-hued local limestone. This stone is easily carved, allowing for the intricate and flamboyant ornamentation seen on facades such as the Basilica of Santa Croce. The city's history traces back to the Messapian period, though it reached its artistic zenith under Spanish rule during the 16th and 17th centuries. The urban center preserves significant Roman remains, most notably a well-preserved amphitheater from the 2nd century AD, which was rediscovered only in the early 1900s. Geographically, Lecce sits on a flat plain just a few kilometers from both the Adriatic and Ionian seas. The city is a major cultural hub, famous for its historic university and the traditional craft of papier-mâché (cartapesta). Local gastronomy reflects the rustic traditions of Puglia, featuring specialties like pasticciotto and robust regional wines. Today, Lecce is a premier destination for travelers drawn to its elegant atmosphere and immense wealth of artistic monuments.",
    },
    factsAdvanced: {
      de: ["Der lokale Kalkstein wird 'Pietra Leccese' genannt und ist sehr weich.", "Das römische Amphitheater bot einst Platz für etwa 25.000 Zuschauer.", "Die Fassade der Basilika Santa Croce wurde über 150 Jahre lang gebaut.", "Lecce hat die höchste Dichte an Barockkirchen in Süditalien.", "Die Stadt wurde im 3. Jahrhundert v. Chr. von den Römern 'Lupiae' genannt.", "Pappmaché-Figuren aus Lecce werden seit dem 17. Jahrhundert hergestellt."],
      hu: ["A helyi mészkövet 'Pietra Leccese'-nek hívják, és rendkívül könnyen faragható.", "A római amfiteátrum fénykorában mintegy 25 000 néző befogadására volt alkalmas.", "A Santa Croce-bazilika homlokzatát több mint 150 éven keresztül építették.", "Lecce rendelkezik a legtöbb barokk stílusú templommal Dél-Olaszországban.", "A várost a rómaiak a Kr. e. 3. században 'Lupiae' néven ismerték.", "Lecce híres papírmasé-figuráit (cartapesta) már a 17. század óta készítik."],
      ro: ["Piatra locală de calcar se numește 'Pietra Leccese' și este renumită pentru maleabilitate.", "Amfiteatrul roman putea găzdui în antichitate aproximativ 25.000 de spectatori.", "Fațada bazilicii Santa Croce a necesitat peste 150 de ani pentru a fi finalizată.", "Lecce are cea mai mare densitate de biserici baroce din sudul Italiei.", "În secolul al III-lea î.Hr., orașul era cunoscut de romani sub numele de 'Lupiae'.", "Tradiția figurinelor din hârtie presată (cartapesta) datează din secolul al XVII-lea."],
      en: ["The local limestone is known as 'Pietra Leccese' and is exceptionally soft to carve.", "The Roman amphitheater could once accommodate approximately 25,000 spectators.", "The facade of the Basilica of Santa Croce took over 150 years to complete.", "Lecce possesses the highest density of Baroque churches in Southern Italy.", "The city was originally named 'Lupiae' by the Romans in the 3rd century BC.", "Papier-mâché (cartapesta) figures have been a specialty of Lecce since the 1600s."],
    },
  },
  {
    id: "it-bari",
    type: "city",
    parent: "IT-75",
    coords: [16.866, 41.117],
    name: { de: "Bari", hu: "Bari", ro: "Bari", en: "Bari" },
    description: {
      en: "Bari is the capital city of the Apulia region, situated on the Adriatic Sea in southern Italy. It serves as a major economic center and a critical port for ferries connecting Italy to the Balkan Peninsula. The city is famous for its historic Old Town, known as Bari Vecchia, which features a maze of narrow streets and ancient churches. One of its most significant landmarks is the Basilica of Saint Nicholas, a major pilgrimage destination for both Catholic and Orthodox Christians. Bari perfectly combines a vibrant modern harbor with profound historical and religious traditions.",
      de: "Bari ist die Hauptstadt der Region Apulien und liegt an der Adria in Süditalien. Sie dient als wichtiges Wirtschaftszentrum und bedeutender Hafen für Fähren, die Italien mit der Balkanhalbinsel verbinden. Die Stadt ist berühmt für ihre historische Altstadt, bekannt als Bari Vecchia, die ein Labyrinth aus engen Gassen und alten Kirchen aufweist. Eines ihrer bedeutendsten Wahrzeichen ist die Basilika San Nicola, ein wichtiges Pilgerziel für katholische und orthodoxe Christen. Bari verbindet auf perfekte Weise einen lebhaften modernen Hafen mit tiefen historischen und religiösen Traditionen.",
      hu: "Bari Puglia régió fővárosa, amely az Adriai-tenger partján fekszik Dél-Olaszországban. Jelentős gazdasági központként és kritikus fontosságú kikötőként szolgál, amely Olaszországot a Balkán-félszigettel köti össze kompjáratokon keresztül. A város híres történelmi óvárosáról, a Bari Vecchiáról, amelyet szűk utcák és ősi templomok útvesztője jellemez. Egyik legjelentősebb nevezetessége a Szent Miklós-bazilika, amely a katolikus és ortodox keresztények fontos zarándokhelye. Bari tökéletesen ötvözi a nyüzsgő modern kikötőt a mély történelmi és vallási hagyományokkal.",
      ro: "Bari este capitala regiunii Apulia, situată pe coasta Mării Adriatice, în sudul Italiei. Servește ca un centru economic major și un port critic pentru feriboturile care leagă Italia de Peninsula Balcanică. Orașul este faimos pentru Centrul său Vechi istoric, cunoscut sub numele de Bari Vecchia, care prezintă un labirint de străzi înguste și biserici antice. Unul dintre cele mai semnificative repere ale sale este Bazilica Sfântul Nicolae, o destinație majoră de pelerinaj atât pentru creștinii catolici, cât și pentru cei ortodocși. Bari combină perfect un port modern vibrant cu tradiții istorice și religioase profunde."
    },
    facts: {
      en: ["Bari is the second most important economic center of mainland Southern Italy.","The Basilica of Saint Nicholas holds the relics of St. Nicholas (Santa Claus).","The city's ancient core, Bari Vecchia, was redeveloped and is now a vibrant nightlife hub.","Bari has a long promenade along the sea, one of the longest in Italy.","The port of Bari is the largest passenger port in the Adriatic Sea.","The local dialect (Barese) is distinct and influenced by Greek and Norman languages.","Orecchiette pasta is a traditional culinary specialty of the city.","The Swabian Castle (Castello Svevo) is a historic fortress built by King Roger II of Sicily."],
      de: ["Bari ist nach Neapel das zweitwichtigste Wirtschaftszentrum des süditalienischen Festlandes.","Die Basilika San Nicola beherbergt die Reliquien des Heiligen Nikolaus.","Der historische Kern der Stadt, Bari Vecchia, wurde saniert und ist heute ein lebhaftes Zentrum des Nachtlebens.","Bari hat eine lange Uferpromenade am Meer, eine der längsten in Italien.","Der Hafen von Bari ist der größte Passagierhafen in der Adria.","Der lokale Dialekt (Barese) ist eigenständig und wurde von griechischen und normannischen Sprachen beeinflusst.","Orecchiette-Nudeln sind eine traditionelle kulinarische Spezialität der Stadt.","Das Schwäbische Schloss (Castello Svevo) ist eine historische Festung, die von König Roger II. von Sizilien erbaut wurde."],
      hu: ["Bari a dél-olaszországi szárazföld második legfontosabb gazdasági központja Nápoly után.","A Szent Miklós-bazilika őrzi Szent Miklós (Mikulás) ereklyéit.","A város ősi magját, a Bari Vecchiát felújították, és ma az éjszakai élet nyüzsgő központja.","Bari hosszú tengerparti sétánnyal rendelkezik, amely az egyik leghosszabb Olaszországban.","Bari kikötője a legnagyobb személyforgalmi kikötő az Adriai-tengeren.","A helyi dialektus (barese) egyedi, és görög, valamint normann nyelvek befolyásolták.","Az Orecchiette tészta a város egyik hagyományos kulináris specialitása.","A sváb kastély (Castello Svevo) egy történelmi erődítmény, amelyet II. Roger szicíliai király építtetett."],
      ro: ["Bari este al doilea cel mai important centru economic din sudul continental al Italiei.","Bazilica Sfântul Nicolae adăpostește moaștele Sfântului Nicolae (Moș Crăciun).","Nucleul antic al orașului, Bari Vecchia, a fost reamenajat și este acum un centru vibrant al vieții de noapte.","Bari are o lungă promenadă de-a lungul mării, una dintre cele mai lungi din Italia.","Portul Bari este cel mai mare port de pasageri din Marea Adriatică.","Dialectul local (Barese) este distinct și influențat de limbile greacă și normandă.","Pastele Orecchiette sunt o specialitate culinară tradițională a orașului.","Castelul Șvab (Castello Svevo) este o fortăreață istorică construită de regele Roger al II-lea al Siciliei."]
    },
    image: "/geo-images/italy/it-bari.webp",
    descriptionAdvanced: {
      de: "Bari ist die Hauptstadt der Region Apulien und eine bedeutende Hafenstadt an der Adriaküste Süditaliens. Sie ist in zwei gegensätzliche Teile gegliedert: die verwinkelte mittelalterliche Altstadt 'Bari Vecchia' auf einer Landzunge und das schachbrettartig angelegte moderne Viertel 'Murat' aus dem 19. Jahrhundert. Historisch gesehen war Bari ein wichtiger byzantinischer Stützpunkt und später ein bedeutendes Zentrum der Normannen. Das Herzstück der Altstadt ist die Basilika San Nicola, die im 11. Jahrhundert erbaut wurde, um die Reliquien des Heiligen Nikolaus zu beherbergen, was die Stadt zu einem wichtigen Wallfahrtsort für Katholiken und Orthodoxe macht. Geografisch ist Bari ein strategisches Tor zum Balkan und zum östlichen Mittelmeerraum, was sich in der regen Handelstätigkeit des Hafens widerspiegelt. Die Stadt beherbergt auch das imposante Castello Svevo, eine Festung, die ursprünglich von den Normannen errichtet und später von Kaiser Friedrich II. ausgebaut wurde. Kulinarisch ist Bari berühmt für seine handgemachten Orecchiette-Nudeln, die oft von Frauen in den Gassen der Altstadt im Freien zubereitet werden. Als bedeutendes Wirtschaftszentrum beherbergt die Stadt jedes Jahr die 'Fiera del Levante', eine der größten Handelsmessen im Mittelmeerraum. Heute verbindet Bari erfolgreich seine tiefe religiöse Tradition mit einer dynamischen modernen Entwicklung.",
      hu: "Bari Puglia régió fővárosa és egy jelentős kikötőváros Dél-Olaszország adriai partvidékén. A város két élesen elkülönülő részből áll: a középkori hangulatú, szűk utcás óvárosból (Bari Vecchia) és a 19. században, sakktáblaszerűen kiépített modern városrészből (Murat). Történelmileg Bari fontos bizánci támaszpont, majd jelentős normann központ volt a középkorban. Az óváros szíve a 11. században épült Szent Miklós-bazilika (Basilica di San Nicola), amelyet Szent Miklós ereklyéinek őrzésére emeltek, és amely ma is fontos zarándokhely mind a katolikusok, mind az ortodox hívők számára. Földrajzilag Bari stratégiai kapu a Balkán és a Kelet-Földközi-tenger felé, amit a kikötő élénk kereskedelmi forgalma is bizonyít. A városban található a monumentális Castello Svevo erőd, amelyet eredetileg a normannok építettek, majd II. Frigyes császár bővített ki. Gasztronómiai szempontból Bari a kézzel készített orecchiette tésztáról híres, amelyet az asszonyok ma is az óváros utcáin, a szabad ég alatt formáznak. Jelentős gazdasági központként a város minden évben otthont ad a 'Fiera del Levante' kereskedelmi vásárnak, amely a mediterrán térség egyik legnagyobbja. Bari ma sikeresen ötvözi mély vallási hagyományait a dinamikus modern fejlődéssel.",
      ro: "Bari este capitala regiunii Puglia și un important oraș portuar situat pe coasta adriatică a Italiei de Sud. Orașul este divizat în două zone distincte: orașul vechi medieval, „Bari Vecchia”, situat pe o peninsulă îngustă, și cartierul modern „Murat”, construit în secolul al XIX-lea cu un plan urbanistic ortogonal. Din punct de vedere istoric, Bari a fost un punct strategic bizantin și ulterior un centru normand de prim rang. Principalul monument al orașului este Basilica San Nicola, ridicată în secolul al XI-lea pentru a adăposti moaștele Sfântului Nicolae, transformând orașul într-un loc de pelerinaj esențial pentru catolici și ortodocși. Geografic, Bari reprezintă o poartă strategică spre Balcani și bazinul estic al Mediteranei, fapt reflectat de activitatea intensă a portului său. Orașul găzduiește, de asemenea, impresionantul Castello Svevo, o fortăreață construită inițial de normanzi și extinsă de împăratul Frederic al II-lea. În plan culinar, Bari este faimos pentru pastele „orecchiette” făcute manual, pe care localnicele le prepară adesea direct în străduțele centrului vechi. Ca centru economic major, orașul găzduiește anual „Fiera del Levante”, unul dintre cele mai mari târguri comerciale din zona mediteraneană. Astăzi, Bari îmbină armonios tradițiile religioase profunde cu o dezvoltare urbană modernă și dinamică.",
      en: "Bari is the capital of the Puglia region and a major port city on the Adriatic coast of Southern Italy. The city is divided into two contrasting districts: the winding medieval old town known as 'Bari Vecchia,' perched on a limestone headland, and the grid-planned 19th-century 'Murat' quarter. Historically, Bari served as a vital Byzantine stronghold and later as a prominent Norman administrative center. The heart of the old town is the Basilica of San Nicola, constructed in the 11th century to house the relics of Saint Nicholas, making the city a significant pilgrimage site for both Catholic and Orthodox Christians. Geographically, Bari acts as a strategic gateway to the Balkans and the Eastern Mediterranean, reflected in the bustling commercial activities of its harbor. The city is also home to the imposing Castello Svevo, a fortress originally built by the Normans and later expanded by Emperor Frederick II. Culinarily, Bari is famous for its handmade orecchiette pasta, often prepared by local women in the alleys of the old town. As a major economic hub, the city hosts the 'Fiera del Levante' every year, one of the largest international trade fairs in the Mediterranean. Today, Bari successfully integrates its deep religious heritage with dynamic modern urban development.",
    },
    factsAdvanced: {
      de: ["Die Basilika San Nicola wurde 1087 zur Aufbewahrung der Reliquien gegründet.", "Bari war im 9. Jahrhundert für kurze Zeit ein arabisches Emirat.", "Die 'Fiera del Levante' wird seit 1930 jährlich in Bari veranstaltet.", "Das moderne Viertel Murat wurde von Napoleons Schwager Joachim Murat geplant.", "Bari ist die zweitgrößte Stadt in Süditalien nach Neapel.", "Die Reliquien des Heiligen Nikolaus wurden von Seeleuten aus Myra geraubt."],
      hu: ["A Szent Miklós-bazilikát 1087-ben alapították az ereklyék elhelyezésére.", "A 9. században Bari rövid ideig egy arab emírség központja volt.", "A 'Fiera del Levante' vásárt 1930 óta minden évben megrendezik a városban.", "A modern Murat-negyedet Napóleon sógora, Joachim Murat tervezte.", "Bari Dél-Olaszország második legnagyobb városa Nápoly után.", "Szent Miklós ereklyéit bari tengerészek lopták el a kis-ázsiai Myrából."],
      ro: ["Basilica San Nicola a fost fondată în 1087 pentru a păstra moaștele sfântului.", "Bari a fost sediul unui emirat arab pentru o scurtă perioadă în secolul al IX-lea.", "Târgul 'Fiera del Levante' se desfășoară anual în Bari începând cu anul 1930.", "Cartierul modern Murat a fost proiectat de Joachim Murat, cumnatul lui Napoleon.", "Bari este al doilea cel mai mare oraș din sudul Italiei, după Napoli.", "Moaștele Sfântului Nicolae au fost aduse aici de marinari din orașul Myra."],
      en: ["The Basilica of San Nicola was founded in 1087 to safeguard the saint's relics.", "Bari was the seat of an Arab emirate for a short period during the 9th century.", "The 'Fiera del Levante' trade fair has been held annually in Bari since 1930.", "The modern Murat district was commissioned by Joachim Murat, Napoleon's brother-in-law.", "Bari is the second largest city in Southern Italy, surpassed only by Naples.", "The relics of Saint Nicholas were famously seized from Myra by Bari sailors."],
    },
  },
  {
    id: "it-perugia",
    type: "city",
    parent: "IT-55",
    coords: [12.389, 43.111],
    name: { de: "Perugia", hu: "Perugia", ro: "Perugia", en: "Perugia" },
    description: {
      en: "Perugia is the vibrant capital city of the Umbria region, dramatically perched on a high hilltop in central Italy. It is a major Etruscan city with a history that spans over two millennia, reflected in its medieval palaces and ancient walls. The city is internationally renowned for hosting the annual Umbria Jazz Festival, one of the most important jazz events in the world. Perugia is also deeply associated with chocolate production, particularly the famous 'Baci' chocolates. Home to a large university and a prominent university for foreigners, it boasts a lively, youthful atmosphere.",
      de: "Perugia ist die lebendige Hauptstadt der Region Umbrien, dramatisch auf einer hohen Hügelkuppe in Mittelitalien gelegen. Es ist eine bedeutende etruskische Stadt mit einer über zweitausendjährigen Geschichte, die sich in ihren mittelalterlichen Palästen und antiken Mauern widerspiegelt. Die Stadt ist international bekannt als Austragungsort des jährlichen Umbria Jazz Festivals, einem der wichtigsten Jazz-Events der Welt. Perugia ist auch eng mit der Schokoladenproduktion verbunden, insbesondere mit den berühmten 'Baci'-Pralinen. Als Sitz einer großen Universität und einer renommierten Ausländeruniversität herrscht hier eine lebhafte, jugendliche Atmosphäre.",
      hu: "Perugia az umbriai régió nyüzsgő fővárosa, amely egy magas dombtetőn helyezkedik el Közép-Olaszországban. Ez egy jelentős etruszk város, amely több mint két évezredes múlttal rendelkezik, ami középkori palotáiban és ősi falaiban is tükröződik. A város nemzetközileg ismert arról, hogy itt rendezik meg az éves Umbria Jazz Fesztivált, a világ egyik legfontosabb jazz eseményét. Perugia szorosan kapcsolódik a csokoládégyártáshoz is, különösen a híres 'Baci' csokoládékhoz. Mivel egy nagy egyetemnek és egy neves külföldiek számára fenntartott egyetemnek ad otthont, élénk, fiatalos légkörrel büszkélkedhet.",
      ro: "Perugia este capitala vibrantă a regiunii Umbria, cocoțată spectaculos pe un vârf de deal înalt în centrul Italiei. Este un important oraș etrusc cu o istorie care se întinde pe parcursul a peste două milenii, reflectată în palatele sale medievale și zidurile antice. Orașul este renumit pe plan internațional pentru găzduirea anuală a Festivalului de Jazz din Umbria, unul dintre cele mai importante evenimente de jazz din lume. Perugia este, de asemenea, profund asociată cu producția de ciocolată, în special faimoasele bomboane 'Baci'. Găzduind o mare universitate și o universitate proeminentă pentru străini, orașul se mândrește cu o atmosferă plină de viață și tinerețe."
    },
    facts: {
      en: ["Perugia is an ancient settlement that originally belonged to the Etruscan League.","The city is famous for its Eurochocolate festival held every October.","It features a unique underground city, the Rocca Paolina, a Renaissance fortress.","The Fontana Maggiore is a monumental medieval fountain located in the main square.","Perugia's historic center is largely pedestrianized and connected by a series of escalators.","The city is home to the National Gallery of Umbria, featuring significant Renaissance art.","Perugino, the famous Renaissance painter and teacher of Raphael, worked extensively here.","The University of Perugia, founded in 1308, is one of the oldest universities in Italy."],
      de: ["Perugia ist eine alte Siedlung, die ursprünglich zum Etruskischen Bund gehörte.","Die Stadt ist berühmt für ihr Eurochocolate-Festival, das jeden Oktober stattfindet.","Sie verfügt über eine einzigartige unterirdische Stadt, die Rocca Paolina, eine Renaissance-Festung.","Die Fontana Maggiore ist ein monumentaler mittelalterlicher Brunnen auf dem Hauptplatz.","Das historische Zentrum von Perugia ist weitgehend Fußgängerzone und durch eine Reihe von Rolltreppen verbunden.","Die Stadt beherbergt die Nationalgalerie von Umbrien mit bedeutender Renaissance-Kunst.","Perugino, der berühmte Renaissance-Maler und Lehrer von Raffael, arbeitete hier intensiv.","Die 1308 gegründete Universität von Perugia ist eine der ältesten Universitäten Italiens."],
      hu: ["Perugia egy ősi település, amely eredetileg az Etruszk Szövetséghez tartozott.","A város híres az Eurochocolate fesztiválról, amelyet minden októberben tartanak.","Egyedülálló földalatti várossal rendelkezik, a Rocca Paolinával, amely egy reneszánsz erődítmény.","A Fontana Maggiore egy monumentális középkori szökőkút a főtéren.","Perugia történelmi központja nagyrészt gyalogos övezet, amelyet mozgólépcsők sora köt össze.","A város ad otthont az Umbriai Nemzeti Galériának, amely jelentős reneszánsz művészeti alkotásokat mutat be.","Perugino, a híres reneszánsz festő és Raffaello tanára sokat dolgozott itt.","Az 1308-ban alapított Perugiai Egyetem az egyik legrégebbi egyetem Olaszországban."],
      ro: ["Perugia este o așezare antică care a aparținut inițial Ligii Etrusce.","Orașul este faimos pentru festivalul său Eurochocolate, desfășurat în fiecare octombrie.","Prezintă un oraș subteran unic, Rocca Paolina, o fortăreață renascentistă.","Fontana Maggiore este o fântână monumentală medievală situată în piața principală.","Centrul istoric al Perugiei este în mare parte pietonal și conectat printr-o serie de scări rulante.","Orașul găzduiește Galeria Națională a Umbriei, prezentând artă renascentistă semnificativă.","Perugino, celebrul pictor renascentist și profesor al lui Rafael, a lucrat intens aici.","Universitatea din Perugia, fondată în 1308, este una dintre cele mai vechi universități din Italia."]
    },
    image: "/geo-images/italy/it-perugia.webp",
    descriptionAdvanced: {
      de: "Perugia ist die Hauptstadt der Region Umbrien und eine der besterhaltenen mittelalterlichen Städte Italiens, gelegen auf einem Hügel über dem Tiber-Tal. Ihre Geschichte reicht über 2.500 Jahre zurück bis zu den Etruskern, von denen noch heute imposante Überreste wie der Etruskische Bogen und Teile der Stadtmauer zeugen. Im Mittelalter war Perugia ein mächtiger Stadtstaat, was sich in den monumentalen Bauten der Piazza IV Novembre widerspiegelt, darunter der Palazzo dei Priori und die Fontana Maggiore. Geografisch ist die Stadt durch ihre steile Lage geprägt, was den Bau von innovativen Transportsystemen wie der 'Minimetrò' und zahlreichen Rolltreppen durch historische Festungsanlagen erforderlich machte. Die Stadt ist ein bedeutendes Bildungszentrum und beherbergt die traditionsreiche Universität Perugia sowie die Università per Stranieri, die Studenten aus aller Welt anzieht. Weltweit bekannt ist Perugia auch für seine Schokoladentradition, insbesondere für das Unternehmen Perugina und das jährliche Festival 'Eurochocolate'. Die umbrische Küche, bekannt für Trüffel und handgemachte Nudeln, spielt eine zentrale Rolle im kulturellen Leben der Stadt. Heute verbindet Perugia meisterhaft sein antikes etruskisches und mittelalterliches Erbe mit einer lebendigen, modernen Atmosphäre als internationales Zentrum für Kunst und Kultur.",
      hu: "Perugia Umbria régió fővárosa és Olaszország egyik legjobban megőrzött középkori városa, amely a Tevere-völgy feletti dombon magasodik. Története több mint 2500 évre nyúlik vissza az etruszkokig, akiknek emlékét ma is őrzik az olyan építmények, mint az Etruszk kapu és a városfalak maradványai. A középkorban Perugia hatalmas városállam volt, amiről a Piazza IV Novembre monumentális épületei, például a Palazzo dei Priori és a Fontana Maggiore kút is tanúskodnak. Földrajzilag a várost meredek fekvése jellemzi, ami miatt olyan innovatív közlekedési rendszereket építettek ki, mint a 'Minimetrò' és a történelmi várfalakon átvezető mozgólépcsők. A város jelentős oktatási központ, itt található a nagy múltú Perugiai Egyetem és a híres Università per Stranieri (Külföldiek Egyeteme), amely a világ minden tájáról vonzza a hallgatókat. Világszerte ismert Perugia csokoládégyártásáról is, különösen a Perugina cégről és az évente megrendezett 'Eurochocolate' fesztiválról. Az umbriai konyha, amely híres a szarvasgombáról és a kézzel készített tésztákról, központi szerepet játszik a város kulturális életében. Napjainkban Perugia mesterien ötvözi az ősi etruszk és középkori örökséget a modern, nemzetközi művészeti és kulturális központ nyüzsgő hangulatával.",
      ro: "Perugia este capitala regiunii Umbria și unul dintre cele mai bine conservate orașe medievale din Italia, fiind cocoțat pe o colină deasupra văii râului Tibru. Istoria sa se întinde pe mai bine de 2.500 de ani, începând cu civilizația etruscă, din care s-au păstrat monumente impresionante precum Arcul Etrusc și fragmente vaste din zidurile cetății. În perioada medievală, Perugia a fost un oraș-stat puternic, fapt reflectat de splendoarea pieței Piazza IV Novembre, unde se află Palazzo dei Priori și faimoasa Fontana Maggiore. Din punct de vedere geografic, configurația abruptă a orașului a necesitat soluții ingenioase de transport, precum sistemul „Minimetrò” și scările rulante care traversează vechea fortăreață Rocca Paolina. Orașul este un centru educațional major, găzduind Universitatea din Perugia și renumita Università per Stranieri, care atrage studenți din întreaga lume pentru studiul limbii și culturii italiene. Perugia este celebră la nivel mondial și pentru industria ciocolatei, fiind sediul companiei Perugina și gazda festivalului anual „Eurochocolate”. Bucătăria umbriană, bazată pe trufe și paste artizanale, completează profilul cultural al orașului. Astăzi, Perugia îmbină într-un mod fascinant moștenirea sa etruscă și medievală cu vitalitatea unui centru cultural internațional modern.",
      en: "Perugia is the capital of the Umbria region and remains one of Italy's most remarkably preserved medieval cities, perched on a dominant hill overlooking the Tiber Valley. Its history spans over 2,500 years, dating back to the Etruscan civilization, evidenced today by monuments such as the massive Etruscan Arch and significant portions of ancient city walls. During the Middle Ages, Perugia emerged as a powerful independent city-state, a grandeur still visible in the monumental buildings of Piazza IV Novembre, including the Palazzo dei Priori and the intricate Fontana Maggiore. Geographically, the city's steep terrain led to the implementation of innovative transport solutions like the 'Minimetrò' and extensive escalators that navigate through the historic Rocca Paolina fortress. The city is a premier educational hub, home to the centuries-old University of Perugia and the prestigious University for Foreigners, which draws students globally. Perugia is also internationally acclaimed for its chocolate-making tradition, specifically the Perugina brand and the annual 'Eurochocolate' festival. Umbrian cuisine, celebrated for its truffles and handmade pastas, remains central to the city's cultural identity. Today, Perugia masterfully blends its ancient Etruscan and medieval heritage with a vibrant, modern atmosphere as a center for international art and culture.",
    },
    factsAdvanced: {
      de: ["Die Fontana Maggiore wurde im 13. Jahrhundert von den Brüdern Pisano erbaut.", "Der Etruskische Bogen ist eines der besterhaltenen etruskischen Tore der Welt.", "Die Rocca Paolina war eine massive Festung, die Papst Paul III. errichten ließ.", "Perugia beherbergt die 'Università per Stranieri', gegründet 1921.", "Die berühmte 'Baci Perugina' Schokolade wurde hier im Jahr 1922 erfunden.", "Die Stadtmauer von Perugia hat eine Gesamtlänge von etwa 9 Kilometern."],
      hu: ["A Fontana Maggiore kutat a 13. században építették a Pisano testvérek.", "Az Etruszk kapu a világ egyik legjobb állapotban fennmaradt etruszk építménye.", "A Rocca Paolina erődöt III. Pál pápa építtette a város feletti uralom jeléül.", "Perugiában található az 1921-ben alapított Külföldiek Egyeteme.", "A híres 'Baci Perugina' csokoládét 1922-ben alkották meg a városban.", "Perugia városfalainak teljes hossza körülbelül 9 kilométert tesz ki."],
      ro: ["Fontana Maggiore a fost realizată în secolul al XIII-lea de către frații Pisano.", "Arcul Etrusc este una dintre cele mai bine conservate porți etrusce din lume.", "Rocca Paolina a fost o fortăreață masivă construită din ordinul Papei Paul al III-lea.", "Orașul găzduiește Università per Stranieri, o instituție de elită fondată în 1921.", "Faimoasele bomboane de ciocolată 'Baci Perugina' au fost inventate aici în 1922.", "Sistemul de ziduri de apărare al orașului Perugia măsoară circa 9 kilometri lungime."],
      en: ["The Fontana Maggiore was sculpted in the 13th century by the Pisano brothers.", "The Etruscan Arch is one of the world's best-preserved Etruscan city gates.", "Rocca Paolina was a massive fortress built by Pope Paul III in the 16th century.", "Perugia is home to the University for Foreigners, established back in 1921.", "The famous 'Baci Perugina' chocolate was first created here in 1922.", "The historic city walls of Perugia extend for a total length of about 9 kilometers."],
    },
  },
  {
    id: "it-ravenna",
    type: "city",
    parent: "IT-45",
    coords: [12.202, 44.418],
    name: { de: "Ravenna", hu: "Ravenna", ro: "Ravenna", en: "Ravenna" },
    description: {
      en: "Ravenna is a historic city in the Emilia-Romagna region, celebrated worldwide for its extraordinarily well-preserved late Roman and Byzantine mosaics. It uniquely served as the capital of the Western Roman Empire from 402 until its collapse in 476. The city's magnificent early Christian monuments, eight of which are UNESCO World Heritage sites, testify to its immense historical and artistic significance. Though it was once a bustling seaport on the Adriatic, today it is connected to the sea by a canal. Ravenna's tranquil atmosphere, rich history, and dazzling art make it a profound cultural destination.",
      de: "Ravenna ist eine historische Stadt in der Region Emilia-Romagna, die weltweit für ihre außerordentlich gut erhaltenen spätantiken und byzantinischen Mosaike gefeiert wird. Sie diente von 402 bis zu ihrem Zusammenbruch im Jahr 476 einzigartigerweise als Hauptstadt des Weströmischen Reiches. Die prächtigen frühchristlichen Denkmäler der Stadt, von denen acht zum UNESCO-Weltkulturerbe gehören, zeugen von ihrer immensen historischen und künstlerischen Bedeutung. Obwohl sie einst ein geschäftiger Seehafen an der Adria war, ist sie heute durch einen Kanal mit dem Meer verbunden. Ravennas ruhige Atmosphäre, reiche Geschichte und blendende Kunst machen es zu einem tiefgründigen kulturellen Reiseziel.",
      hu: "Ravenna egy történelmi város Emilia-Romagna régióban, amelyet világszerte ünnepelnek rendkívül jól megőrzött késő római és bizánci mozaikjai miatt. Egyedülálló módon a Nyugatrómai Birodalom fővárosaként szolgált 402-től annak 476-os bukásáig. A város csodálatos ókeresztény műemlékei, amelyek közül nyolc UNESCO világörökségi helyszín, hatalmas történelmi és művészeti jelentőségéről tanúskodnak. Bár egykor nyüzsgő tengeri kikötő volt az Adrián, ma már egy csatorna köti össze a tengerrel. Ravenna nyugodt légköre, gazdag történelme és káprázatos művészete mély kulturális célponttá teszi.",
      ro: "Ravenna este un oraș istoric din regiunea Emilia-Romagna, celebrat în întreaga lume pentru mozaicurile sale romane și bizantine extrem de bine conservate. A servit în mod unic drept capitală a Imperiului Roman de Apus din 402 până la prăbușirea sa în 476. Magnificele monumente paleocreștine ale orașului, dintre care opt sunt situri ale Patrimoniului Mondial UNESCO, stau mărturie a imensei sale semnificații istorice și artistice. Deși a fost cândva un port maritim plin de viață la Marea Adriatică, astăzi este conectat la mare printr-un canal. Atmosfera liniștită, istoria bogată și arta uluitoare ale Ravennei o fac o destinație culturală profundă."
    },
    facts: {
      en: ["Ravenna was the capital of the Western Roman Empire during the 5th century.","The city is home to eight UNESCO World Heritage Sites due to its early Christian mosaics.","The poet Dante Alighieri died in Ravenna in 1321, and his tomb is located there.","The Basilica of San Vitale is considered a masterpiece of Byzantine architecture.","Ravenna was ruled by the Ostrogothic King Theodoric the Great in the 6th century.","The Mausoleum of Galla Placidia contains some of the oldest and most beautiful mosaics.","The city is situated slightly inland but remains an important commercial port via a canal.","Lord Byron and Oscar Wilde both spent significant time living in Ravenna."],
      de: ["Ravenna war im 5. Jahrhundert die Hauptstadt des Weströmischen Reiches.","Die Stadt beherbergt aufgrund ihrer frühchristlichen Mosaike acht UNESCO-Welterbestätten.","Der Dichter Dante Alighieri starb 1321 in Ravenna, und sein Grab befindet sich dort.","Die Basilika San Vitale gilt als Meisterwerk der byzantinischen Architektur.","Ravenna wurde im 6. Jahrhundert vom ostgotischen König Theoderich dem Großen regiert.","Das Mausoleum der Galla Placidia enthält einige der ältesten und schönsten Mosaike.","Die Stadt liegt leicht im Landesinneren, ist aber über einen Kanal weiterhin ein wichtiger Handelshafen.","Lord Byron und Oscar Wilde verbrachten beide viel Zeit in Ravenna."],
      hu: ["Ravenna az 5. században a Nyugatrómai Birodalom fővárosa volt.","A város nyolc UNESCO világörökségi helyszínnek ad otthont az ókeresztény mozaikjai miatt.","Dante Alighieri költő Ravennában halt meg 1321-ben, és a sírja is itt található.","A San Vitale bazilikát a bizánci építészet remekműveként tartják számon.","Ravennát a 6. században Nagy Theodorik keleti gót király uralta.","A Galla Placidia mauzóleum a legrégebbi és legszebb mozaikok némelyikét rejti.","A város kissé a szárazföld belsejében fekszik, de egy csatornán keresztül továbbra is fontos kereskedelmi kikötő.","Lord Byron és Oscar Wilde egyaránt jelentős időt töltött Ravennában."],
      ro: ["Ravenna a fost capitala Imperiului Roman de Apus în secolul al V-lea.","Orașul găzduiește opt situri din Patrimoniul Mondial UNESCO datorită mozaicurilor sale paleocreștine.","Poetul Dante Alighieri a murit la Ravenna în 1321, iar mormântul său este situat acolo.","Bazilica San Vitale este considerată o capodoperă a arhitecturii bizantine.","Ravenna a fost condusă de regele ostrogot Teodoric cel Mare în secolul al VI-lea.","Mausoleul Gallei Placidia conține unele dintre cele mai vechi și mai frumoase mozaicuri.","Orașul este situat ușor în interior, dar rămâne un port comercial important printr-un canal.","Lordul Byron și Oscar Wilde au petrecut ambii mult timp trăind în Ravenna."]
    },
    image: "/geo-images/italy/it-ravenna.webp",
    descriptionAdvanced: {
      de: "Ravenna, einst die Hauptstadt des Weströmischen Reiches, der Ostgoten und des Exarchats von Ravenna, ist heute weltberühmt für seine außergewöhnlich gut erhaltenen frühchristlichen Mosaike. Die Stadt beherbergt acht UNESCO-Welterbestätten, darunter das Mausoleum der Galla Placidia und die Basilika San Vitale, die Meisterwerke der byzantinischen Kunst aus dem 5. und 6. Jahrhundert darstellen. Geografisch liegt die Stadt in der Region Emilia-Romagna, nur wenige Kilometer von der Adria entfernt, mit der sie über einen schiffbaren Kanal verbunden ist. Neben ihrer byzantinischen Pracht ist Ravenna auch als letzte Ruhestätte des Dichters Dante Alighieri bekannt, der hier 1321 im Exil verstarb. In der modernen Ära hat sich die Stadt zu einem wichtigen Zentrum für die chemische Industrie und den Seehandel entwickelt, während sie gleichzeitig ihren Ruf als Bewahrerin antiker Mosaiktechniken pflegt. Die Kombination aus antiker Geschichte und einer lebendigen, modernen Hafenatmosphäre macht die Stadt zu einem bedeutenden kulturellen Zentrum Norditaliens.",
      hu: "Ravenna, a Nyugatrómai Birodalom, majd a Keleti Gótok Királysága és a Bizánci Exarchátus egykori fővárosa, ma világhírét rendkívüli állapotban fennmaradt kora keresztény mozaikjainak köszönheti. Az Emilia-Romagna régióban fekvő város nyolc helyszíne is az UNESCO Világörökség részét képezi, köztük a San Vitale-bazilika és Galla Placidia mauzóleuma, amelyek az 5-6. századi bizánci művészet csúcspontjait képviselik. Földrajzi elhelyezkedése stratégiai fontosságú volt az ókorban, ma pedig egy 11 kilométeres csatorna köti össze az Adriai-tengerrel, biztosítva kikötőjének forgalmát. A város nemcsak politikai központ volt, hanem Dante Alighieri, az Isteni színjáték szerzőjének utolsó menedékhelye is, aki itt hunyt el 1321-ben. A modern Ravenna jelentős ipari központ, különösen a vegyipar és a földgázkitermelés terén, miközben továbbra is a mozaikkészítés nemzetközi oktatási és művészeti központja. A látogatókat az ókori bazilikák misztikus hangulata és a város csendes, elegáns utcái egyedülálló időutazásra hívják.",
      ro: "Ravenna, fosta capitală a Imperiului Roman de Apus, a Regatului Ostrogot și a Exarhatului de Ravenna, este renumită la nivel mondial pentru mozaicurile sale creștine timpurii excepționale. Orașul găzduiește opt monumente incluse în Patrimoniul Mondial UNESCO, printre care se numără Bazilica San Vitale și Mausoleul Galiei Placidia, adevărate capodopere ale artei bizantine din secolele V și VI. Situat în regiunea Emilia-Romagna, orașul este legat de Marea Adriatică printr-un canal navigabil, păstrându-și relevanța ca port important și nod comercial în nordul Italiei. Din punct de vedere cultural, Ravenna este locul unde și-a petrecut ultimii ani de exil celebrul poet Dante Alighieri, mormântul său fiind un loc de pelerinaj literar încă din 1321. În prezent, orașul îmbină armonios conservarea patrimoniului istoric cu o economie modernă bazată pe industria chimică și sectorul energetic offshore. Mozaicurile sale, realizate cu o măiestrie tehnică uluitoare, continuă să influențeze artiștii contemporani și să atragă sute de mii de turiști anual.",
      en: "Ravenna, once the capital of the Western Roman Empire, the Ostrogothic Kingdom, and the Byzantine Exarchate, is globally renowned for its exceptionally preserved early Christian mosaics. The city boasts eight UNESCO World Heritage sites, including the Basilica of San Vitale and the Mausoleum of Galla Placidia, which represent the pinnacle of 5th and 6th-century Byzantine artistic achievement. Located in the Emilia-Romagna region, Ravenna is connected to the Adriatic Sea by a navigable canal, maintaining its historical significance as a strategic maritime gateway. Beyond its architectural splendor, the city is the final resting place of the poet Dante Alighieri, who died here in 1321 while in exile from Florence. Modern Ravenna is a thriving industrial and commercial center, particularly known for its chemical plants and as a hub for offshore oil and gas production in the Adriatic. The unique blend of profound historical layers and a dynamic contemporary port environment defines Ravenna as one of Italy's most significant cultural landmarks.",
    },
    factsAdvanced: {
      de: ["Ravenna diente von 402 bis 476 n. Chr. als Hauptstadt des Weströmischen Reiches.", "Die Stadt beherbergt insgesamt acht Monumente, die zum UNESCO-Welterbe gehören.", "Das Grab des Dichters Dante Alighieri befindet sich neben der Basilika San Francesco.", "Die Basilika San Vitale ist berühmt für Mosaike, die Kaiser Justinian und Theodora zeigen.", "Der Candiano-Kanal verbindet die Stadt über 11 Kilometer mit der Adria.", "Das Mausoleum des Theoderich wurde 520 n. Chr. aus massivem istrischem Stein erbaut."],
      hu: ["Ravenna 402 és 476 között a Nyugatrómai Birodalom hivatalos fővárosa volt.", "A város területén nyolc különálló UNESCO Világörökségi helyszín található.", "Dante Alighieri sírja a San Francesco-bazilika melletti kis kápolnában van.", "A San Vitale-bazilika mozaikjai Justinianus császárt és Theodóra császárnőt ábrázolják.", "A várost a 11 kilométer hosszú Candiano-csatorna köti össze az Adriai-tengerrel.", "Theoderich mauzóleuma 520-ban épült, tetőszerkezete egyetlen 300 tonnás kőtömbből áll."],
      ro: ["Ravenna a servit drept capitală a Imperiului Roman de Apus între anii 402 și 476.", "Orașul deține opt monumente paleocreștine incluse în lista Patrimoniului Mondial UNESCO.", "Mormântul lui Dante Alighieri este situat lângă Bazilica San Francesco din centrul orașului.", "Bazilica San Vitale conține mozaicuri celebre cu împăratul Iustinian și împărăteasa Teodora.", "Canalul Candiano, lung de 11 kilometri, leagă portul orașului de Marea Adriatică.", "Mausoleul lui Teodoric a fost construit în 520 d.Hr. din piatră de Istria adusă pe mare."],
      en: ["Ravenna served as the capital of the Western Roman Empire from 402 to 476 AD.", "The city contains eight distinct UNESCO World Heritage sites within its limits.", "The tomb of poet Dante Alighieri is located adjacent to the Basilica of San Francesco.", "The Basilica of San Vitale features famous mosaics depicting Emperor Justinian and Empress Theodora.", "The 11-kilometer Candiano Canal connects the city's port to the Adriatic Sea.", "The Mausoleum of Theodoric was built in 520 AD using massive blocks of Istrian stone."],
    },
  },
    {
    id: "it-cremona",
    type: "city",
    parent: "IT-25",
    coords: [10.023, 45.133],
    name: { de: "Cremona", hu: "Cremona", ro: "Cremona", en: "Cremona" },
    description: {
      en: "Cremona is a beautiful city in the Lombardy region, universally celebrated as the historical capital of violin making. Situated along the Po River, the city maintains a well-preserved medieval center characterized by stunning brick architecture. It was the home of master luthiers like Antonio Stradivari, whose instruments remain the standard of perfection to this day. The city's impressive Cathedral square features the Torrazzo, the tallest brick bell tower in Europe, offering breathtaking views. Cremona's musical legacy and traditional sweets, like torrone, attract visitors from across the globe.",
      de: "Cremona ist eine wunderschöne Stadt in der Region Lombardei, die allgemein als historische Hauptstadt des Geigenbaus gefeiert wird. Am Fluss Po gelegen, bewahrt die Stadt ein gut erhaltenes mittelalterliches Zentrum, das durch atemberaubende Backsteinarchitektur gekennzeichnet ist. Sie war die Heimat von Meister-Gitarrenbauern wie Antonio Stradivari, deren Instrumente bis heute der Inbegriff der Perfektion sind. Der beeindruckende Domplatz der Stadt beherbergt den Torrazzo, den höchsten Backsteinglockenturm Europas, der atemberaubende Ausblicke bietet. Cremonas musikalisches Erbe und traditionelle Süßigkeiten wie Torrone ziehen Besucher aus aller Welt an.",
      hu: "Cremona egy gyönyörű város a Lombardia régióban, amelyet egyetemesen a hegedűkészítés történelmi fővárosaként ünnepelnek. A Pó folyó mentén fekvő város egy jól megőrzött középkori központot őriz, amelyet lenyűgöző téglaépítészet jellemez. Olyan mester lantosok otthona volt, mint Antonio Stradivari, akinek hangszerei mind a mai napig a tökéletesség mércéi. A város lenyűgöző dómterén található a Torrazzo, Európa legmagasabb tégla harangtornya, amely lélegzetelállító kilátást nyújt. Cremona zenei öröksége és olyan hagyományos édességei, mint a torrone, a világ minden tájáról vonzzák a látogatókat.",
      ro: "Cremona este un oraș frumos din regiunea Lombardia, celebrat la nivel universal ca fiind capitala istorică a confecționării viorilor. Situat de-a lungul râului Po, orașul își păstrează un centru medieval bine conservat, caracterizat printr-o uimitoare arhitectură din cărămidă. A fost casa maeștrilor lutieri precum Antonio Stradivari, ale cărui instrumente rămân standardul perfecțiunii până în prezent. Impresionanta piață a Catedralei orașului prezintă Torrazzo, cel mai înalt turn cu clopot din cărămidă din Europa, oferind vederi care îți taie respirația. Moștenirea muzicală a Cremonei și dulciurile tradiționale, precum torrone, atrag vizitatori din întreaga lume."
    },
    facts: {
      en: ["Cremona is famous worldwide for its long tradition of stringed instrument making.","Antonio Stradivari, the most renowned luthier in history, lived and worked here.","The city's Torrazzo is the highest brick bell tower in Europe, standing at 112 meters.","Cremona has a dedicated Violin Museum featuring masterpieces by Amati, Guarneri, and Stradivari.","The traditional nougat sweet called 'Torrone' originated in Cremona in the 15th century.","Traditional Cremonese violin craft is listed by UNESCO as Intangible Cultural Heritage.","The city was originally established by the Romans in 218 BC as a military outpost.","Claudio Monteverdi, a crucial figure in the transition to Baroque music, was born in Cremona."],
      de: ["Cremona ist weltweit berühmt für seine lange Tradition im Bau von Saiteninstrumenten.","Antonio Stradivari, der berühmteste Geigenbauer der Geschichte, lebte und arbeitete hier.","Der Torrazzo der Stadt ist mit 112 Metern der höchste Backsteinglockenturm Europas.","Cremona hat ein spezielles Geigenmuseum mit Meisterwerken von Amati, Guarneri und Stradivari.","Die traditionelle Nougatsüßigkeit 'Torrone' stammt aus dem Cremona des 15. Jahrhunderts.","Das traditionelle Geigenbauhandwerk aus Cremona wird von der UNESCO als immaterielles Kulturerbe aufgeführt.","Die Stadt wurde ursprünglich 218 v. Chr. von den Römern als militärischer Außenposten gegründet.","Claudio Monteverdi, eine entscheidende Figur beim Übergang zur Barockmusik, wurde in Cremona geboren."],
      hu: ["Cremona világszerte híres a vonós hangszerek készítésének hosszú hagyományáról.","Antonio Stradivari, a történelem leghíresebb lantkészítője itt élt és dolgozott.","A város Torrazzója Európa legmagasabb tégla harangtornya, 112 méter magas.","Cremonában működik egy dedikált Hegedűmúzeum, amelyben Amati, Guarneri és Stradivari remekművei találhatók.","A 'Torrone' nevű hagyományos nugátos édesség a 15. századi Cremonából származik.","A hagyományos cremonai hegedűkészítést az UNESCO a szellemi kulturális örökség részeként tartja nyilván.","A várost eredetileg a rómaiak alapították i.e. 218-ban katonai előőrsként.","Claudio Monteverdi, a barokk zenébe való átmenet kulcsfigurája Cremonában született."],
      ro: ["Cremona este faimoasă în întreaga lume pentru lunga sa tradiție în fabricarea instrumentelor cu coarde.","Antonio Stradivari, cel mai renumit lutier din istorie, a trăit și a lucrat aici.","Torrazzo al orașului este cel mai înalt turn clopotniță din cărămidă din Europa, având 112 metri.","Cremona are un Muzeu al Viorii dedicat, prezentând capodopere de Amati, Guarneri și Stradivari.","Dulciul tradițional de nuga numit 'Torrone' își are originea în Cremona în secolul al XV-lea.","Mesteșugul tradițional al viorilor cremoneze este inclus de UNESCO ca Patrimoniu Cultural Imaterial.","Orașul a fost fondat inițial de romani în anul 218 î.Hr. ca un avanpost militar.","Claudio Monteverdi, o figură crucială în tranziția către muzica barocă, s-a născut la Cremona."]
    },
    image: "/geo-images/italy/it-cremona.webp",
    descriptionAdvanced: {
      de: "Cremona, gelegen im Herzen der Po-Ebene in der Lombardei, genießt weltweiten Ruhm als Hauptstadt des Geigenbaus. Die Stadt ist untrennbar mit dem Namen Antonio Stradivari verbunden, dessen Werkstatt hier im 17. und 18. Jahrhundert die präzisesten Saiteninstrumente der Geschichte schuf. Das Stadtbild wird vom Torrazzo dominiert, einem 112 Meter hohen Glockenturm, der einer der höchsten mittelalterlichen Ziegelbauten Europas ist und eine beeindruckende astronomische Uhr beherbergt. Der zentrale Platz, die Piazza del Comune, gilt mit dem romanischen Dom, dem Baptisterium und dem Rathaus als eines der harmonischsten mittelalterlichen Ensembles Italiens. Die traditionelle Geigenbaukunst von Cremona wurde 2012 von der UNESCO als immaterielles Kulturerbe anerkannt, und zahlreiche aktive Werkstätten prägen noch heute das kulturelle Leben. Neben der Musik ist Cremona auch für seine Gastronomie bekannt, insbesondere für den Torrone (Nougat) und den Senfmost (Mostarda). Die Stadt verbindet auf einzigartige Weise handwerkliche Perfektion, musikalische Geschichte und lombardische Architekturtradition.",
      hu: "Cremona a Pó-síkság szívében, Lombardiában fekszik, és világszerte a hegedűkészítés fővárosaként ismerik. A város neve elválaszthatatlanul összefonódott Antonio Stradivariéval, akinek műhelye a 17. és 18. században a történelem legtökéletesebb vonós hangszereit alkotta meg. A városkép meghatározó eleme a Torrazzo, egy 112 méter magas harangtorony, amely Európa egyik legmagasabb középkori téglaépítménye, és egy hatalmas asztrológiai órának ad otthont. A központi Piazza del Comune a román stílusú dómmal, a keresztelőkápolnával és a városházával Olaszország egyik legharmonikusabb középkori tere. A cremonai hegedűkészítés hagyománya 2012-ben felkerült az UNESCO szellemi kulturális örökség listájára, és ma is számos aktív műhely őrzi a mesterség titkait. A zene mellett Cremona gasztronómiájáról is híres, különösen a torrone (törökméz-szerű édesség) és a mustáros gyümölcs (mostarda) hazájaként. A város a kézműves tökéletesség, a zenei örökség és a lombard építészeti hagyományok egyedülálló ötvözete.",
      ro: "Cremona, situat în inima Câmpiei Padului din Lombardia, se bucură de o faimă mondială ca fiind capitala construcției de viori. Orașul este inseparabil legat de numele lui Antonio Stradivari, al cărui atelier a creat aici, în secolele XVII și XVIII, cele mai precise instrumente cu coarde din istorie. Peisajul urban este dominat de Torrazzo, un turn cu clopot de 112 metri înălțime, una dintre cele mai înalte structuri medievale din cărămidă din Europa, care găzduiește un ceas astronomic impresionant. Piața centrală, Piazza del Comune, este considerată unul dintre cele mai armonioase ansambluri medievale din Italia, incluzând Domul romanic, Baptisteriul și Primăria. Meșteșugul tradițional al viorii din Cremona a fost recunoscut de UNESCO în 2012 ca patrimoniu cultural imaterial, numeroase ateliere active modelând și astăzi viața culturală. Pe lângă muzică, Cremona este renumită pentru gastronomia sa, în special pentru torrone (nuga) și mostarda. Orașul îmbină într-un mod unic perfecțiunea artizanală, istoria muzicală și tradiția arhitecturală lombardă.",
      en: "Cremona, situated in the heart of the Po Valley in Lombardy, enjoys global fame as the capital of violin making. The city is inseparably linked to the name of Antonio Stradivari, whose workshop here in the 17th and 18th centuries produced the most precise string instruments in history. The cityscape is dominated by the Torrazzo, a 112-meter-high bell tower that is one of the tallest medieval brick structures in Europe and houses an impressive astronomical clock. The central square, Piazza del Comune, is considered one of Italy's most harmonious medieval ensembles, featuring the Romanesque Cathedral, the Baptistery, and the Town Hall. Cremona's traditional violin-making craftsmanship was recognized by UNESCO as Intangible Cultural Heritage in 2012, and numerous active workshops still shape the city's cultural life today. Beyond music, Cremona is also famous for its gastronomy, particularly torrone (nougat) and mostarda (candied fruit in mustard syrup). The city uniquely combines artisanal perfection, musical history, and Lombard architectural tradition.",
    },
    factsAdvanced: {
      de: ["Cremona beherbergt das Museo del Violino, das Originalinstrumente von Stradivari zeigt.", "Der Torrazzo ist 112 Meter hoch und hat 487 Stufen bis zur Spitze.", "Die astronomische Uhr des Torrazzo ist eine der größten weltweit (8 Meter Durchmesser).", "Antonio Stradivari produzierte im Laufe seines Lebens über 1.100 Instrumente.", "Der Bau des Doms von Cremona begann im Jahr 1107 in romanischem Stil.", "Die Stadt feiert jedes Jahr im November das traditionelle Torrone-Festival."],
      hu: ["Cremonában található a Hegedűmúzeum, ahol eredeti Stradivari-hangszereket őriznek.", "A Torrazzo 112 méter magas, és összesen 487 lépcső vezet fel a tetejére.", "A torony asztrológiai órája 8 méteres átmérőjével a világ egyik legnagyobbja.", "Antonio Stradivari élete során több mint 1100 hangszert készített műhelyében.", "A cremonai dóm építése 1107-ben kezdődött, eredetileg román stílusban.", "A város minden év novemberében megrendezi a hagyományos Torrone Fesztivált."],
      ro: ["Cremona găzduiește Museo del Violino, care expune instrumente originale de Stradivari.", "Torrazzo are o înălțime de 112 metri și 487 de trepte până în vârf.", "Ceasul astronomic din Torrazzo este unul dintre cele mai mari din lume (8m diametru).", "Antonio Stradivari a produs peste 1.100 de instrumente pe parcursul vieții sale.", "Construcția Domului din Cremona a început în anul 1107 în stil romanic.", "Orașul organizează în fiecare an, în noiembrie, celebrul Festival al Torrone-ului."],
      en: ["Cremona is home to the Museo del Violino, which displays original Stradivari instruments.", "The Torrazzo stands 112 meters tall and has 487 steps to the top.", "The astronomical clock of the Torrazzo is one of the world's largest (8m diameter).", "Antonio Stradivari produced over 1,100 instruments during his long career.", "The construction of Cremona Cathedral began in 1107 in the Romanesque style.", "The city hosts the traditional Torrone (nougat) Festival every year in November."],
    },
  },
  {
    id: "it-cagliari",
    type: "city",
    parent: "IT-88",
    coords: [9.114, 39.216],
    name: { de: "Cagliari", hu: "Cagliari", ro: "Cagliari", en: "Cagliari" },
    description: {
      en: "Cagliari is the capital and largest city of Sardinia, located on the island's southern coast. Boasting a rich history that spans over 5,000 years, it was shaped by Phoenician, Carthaginian, Roman, and Spanish influences. The city's historic center, the Castello district, sits fortified on a hilltop offering panoramic views over the Gulf of Angels. Cagliari is also famous for the Molentargius-Saline Regional Park, a wetland where flocks of pink flamingos nest just outside the urban area. The city seamlessly combines archaeological wonders with a relaxed, coastal Mediterranean lifestyle.",
      de: "Cagliari ist die Hauptstadt und größte Stadt Sardiniens und liegt an der Südküste der Insel. Mit einer über 5.000-jährigen Geschichte wurde sie durch phönizische, karthagische, römische und spanische Einflüsse geprägt. Das historische Zentrum der Stadt, das Viertel Castello, liegt befestigt auf einem Hügel und bietet einen Panoramablick über den Golf der Engel. Cagliari ist auch berühmt für den Regionalpark Molentargius-Saline, ein Feuchtgebiet, in dem Schwärme rosa Flamingos direkt vor den Toren der Stadt nisten. Die Stadt verbindet nahtlos archäologische Wunder mit einem entspannten mediterranen Küstenlebensstil.",
      hu: "Cagliari Szardínia fővárosa és legnagyobb városa, amely a sziget déli partján található. Több mint 5000 éves gazdag történelemmel büszkélkedhet, amelyet föníciai, karthágói, római és spanyol hatások formáltak. A város történelmi központja, a Castello negyed erődítve helyezkedik el egy dombtetőn, ahonnan panorámás kilátás nyílik az Angyalok öblére. Cagliari híres a Molentargius-Saline Regionális Parkról is, egy vizes élőhelyről, ahol rózsaszín flamingórajok fészkelnek közvetlenül a város határában. A város zökkenőmentesen ötvözi a régészeti csodákat a nyugodt, tengerparti mediterrán életmóddal.",
      ro: "Cagliari este capitala și cel mai mare oraș al Sardiniei, situat pe coasta de sud a insulei. Mândrindu-se cu o istorie bogată care se întinde pe peste 5.000 de ani, a fost modelat de influențe feniciene, cartagineze, romane și spaniole. Centrul istoric al orașului, cartierul Castello, se află fortificat pe un vârf de deal, oferind vederi panoramice asupra Golfului Îngerilor. Cagliari este faimos și pentru Parcul Regional Molentargius-Saline, o zonă umedă unde stoluri de flamingo roz cuibăresc chiar în afara zonei urbane. Orașul combină perfect minunile arheologice cu un stil de viață mediteranean de coastă, relaxat."
    },
    facts: {
      en: ["Cagliari is the economic and political center of the autonomous region of Sardinia.","The historic Castello district is surrounded by massive walls built by the Pisans.","Just outside the city center, pink flamingos live year-round in the salt pans.","The Roman Amphitheater of Cagliari, carved into rock, once held 10,000 spectators.","It has one of the longest city beaches in Italy, the Poetto beach.","The city was heavily bombed during World War II but meticulously restored.","The National Archaeological Museum houses incredible artifacts of the Nuragic civilization.","Cagliari's port is one of the largest sea ports in the Mediterranean Sea."],
      de: ["Cagliari ist das wirtschaftliche und politische Zentrum der autonomen Region Sardinien.","Das historische Viertel Castello ist von massiven, von den Pisanern erbauten Mauern umgeben.","Direkt vor den Toren des Stadtzentrums leben ganzjährig rosa Flamingos in den Salinen.","Das in den Fels gehauene römische Amphitheater von Cagliari fasste einst 10.000 Zuschauer.","Sie hat einen der längsten Stadtstrände Italiens, den Poetto-Strand.","Die Stadt wurde während des Zweiten Weltkriegs schwer bombardiert, aber sorgfältig restauriert.","Das Archäologische Nationalmuseum beherbergt unglaubliche Artefakte der Nuraghen-Kultur.","Der Hafen von Cagliari ist einer der größten Seehäfen im Mittelmeer."],
      hu: ["Cagliari Szardínia autonóm régió gazdasági és politikai központja.","A történelmi Castello negyedet hatalmas, a pisaiak által épített falak veszik körül.","Közvetlenül a városközpont mellett egész évben rózsaszín flamingók élnek a sólepárlókban.","A sziklába vájt cagliari római amfiteátrum egykor 10 000 nézőt fogadott be.","Itt található Olaszország egyik leghosszabb városi strandja, a Poetto strand.","A várost a második világháború alatt hevesen bombázták, de aprólékosan helyreállították.","A Nemzeti Régészeti Múzeum a nurági civilizáció hihetetlen tárgyait őrzi.","Cagliari kikötője a Földközi-tenger egyik legnagyobb tengeri kikötője."],
      ro: ["Cagliari este centrul economic și politic al regiunii autonome Sardinia.","Cartierul istoric Castello este înconjurat de ziduri masive construite de pisani.","Chiar lângă centrul orașului, păsările flamingo roz trăiesc pe tot parcursul anului în saline.","Amfiteatrul Roman din Cagliari, sculptat în stâncă, a găzduit odată 10.000 de spectatori.","Are una dintre cele mai lungi plaje orășenești din Italia, plaja Poetto.","Orașul a fost puternic bombardat în timpul celui de-al Doilea Război Mondial, dar a fost restaurat meticulos.","Muzeul Național de Arheologie găzduiește artefacte incredibile ale civilizației Nuragice.","Portul din Cagliari este unul dintre cele mai mari porturi maritime din Marea Mediterană."]
    },
    image: "/geo-images/italy/it-cagliari.webp",
    descriptionAdvanced: {
      de: "Cagliari, die Hauptstadt Sardiniens, blickt auf eine jahrtausendealte Geschichte zurück, die von den Phöniziern über die Römer bis hin zu den Pisanern und Spaniern reicht. Die Stadt liegt im Süden der Insel am Golf von Cagliari und wird von dem historischen Viertel Castello dominiert, das auf einem Hügel thronend den Hafen überragt. Hier finden sich beeindruckende Befestigungsanlagen aus pisanischer Zeit, wie der Elefanten- und der Pankratiusturm, sowie die Kathedrale Santa Maria. Zu den bedeutendsten archäologischen Stätten zählt das römische Amphitheater aus dem 2. Jahrhundert n. Chr., das direkt in den Kalksteinfelsen geschlagen wurde. Geografisch ist Cagliari von einer einzigartigen Naturlandschaft umgeben, darunter der Molentargius-Park, in dem Rosaflamingos nisten, und der acht Kilometer lange Sandstrand Poetto. Die Stadt ist heute ein wichtiges wirtschaftliches und kulturelles Zentrum mit einem bedeutenden Mittelmeerhafen und einer lebendigen Universitätsatmosphäre. Die Mischung aus antiken Ruinen, mittelalterlichen Gassen und moderner mediterraner Lebensqualität macht Cagliari zu einem faszinierenden Ziel.",
      hu: "Cagliari, Szardínia fővárosa, több évezredes múltra tekint vissza, amelyben föníciai, római, pisai és spanyol hatások ötvöződnek. A sziget déli részén, a Cagliari-öböl partján fekvő várost a Castello negyed uralja, amely egy dombtetőről tekint le a forgalmas kikötőre. Itt találhatók a pisai korszak lenyűgöző erődítményei, mint az Elefánt-torony és a Szent Pankráciusz-torony, valamint a Santa Maria-székesegyház. A legfontosabb régészeti emlékek közé tartozik a Kr. u. 2. századból származó római amfiteátrum, amelyet közvetlenül a mészkősziklába vájtak. Földrajzi környezete egyedülálló: a várost övező lagúnákban, mint a Molentargius-park, rózsás flamingók fészkelnek, a pihenést pedig a nyolc kilométer hosszú Poetto strand biztosítja. Cagliari ma jelentős gazdasági és kulturális központ, fontos földközi-tengeri kikötővel és pezsgő egyetemi élettel. Az ókori romok, a középkori sikátorok és a modern mediterrán életstílus találkozása teszi a várost felejthetetlenné.",
      ro: "Cagliari, capitala Sardiniei, are o istorie de milenii, fiind influențată succesiv de fenicieni, romani, pisani și spanioli. Orașul este situat în sudul insulei, în Golful Cagliari, și este dominat de cartierul istoric Castello, care tronează pe un deal deasupra portului. Aici se găsesc fortificații impresionante din epoca pisană, precum Turnul Elefantului și Turnul San Pancrazio, dar și Catedrala Santa Maria. Printre cele mai importante situri arheologice se numără Amfiteatrul Roman din secolul al II-lea d.Hr., săpat direct în stânca de calcar. Din punct de vedere geografic, Cagliari este înconjurat de un peisaj natural unic, incluzând Parcul Molentargius, unde cuibăresc flamingi roz, și plaja Poetto, lungă de opt kilometri. Orașul este astăzi un centru economic și cultural major, cu un port comercial important la Marea Mediterană și o viață universitară vibrantă. Amestecul de ruine antice, străzi medievale înguste și calitatea modernă a vieții mediteraneene face din Cagliari o destinație fascinantă.",
      en: "Cagliari, the capital of Sardinia, boasts a history spanning millennia, shaped by Phoenicians, Romans, Pisans, and Spaniards. Located in the south of the island on the Gulf of Cagliari, the city is dominated by the historic Castello district, perched on a hill overlooking the harbor. Here, impressive fortifications from the Pisan era, such as the Elephant Tower and the Tower of San Pancrazio, can be found alongside the Cathedral of Santa Maria. Among the most significant archaeological sites is the Roman Amphitheatre, dating back to the 2nd century AD and carved directly into the limestone rock. Geographically, Cagliari is surrounded by a unique natural landscape, including the Molentargius Park, where pink flamingos nest, and the eight-kilometer-long Poetto beach. Today, the city is a vital economic and cultural hub with a major Mediterranean port and a lively university atmosphere. The blend of ancient ruins, medieval alleys, and modern Mediterranean lifestyle defines Cagliari's multifaceted character.",
    },
    factsAdvanced: {
      de: ["Cagliari wurde von den Phöniziern unter dem Namen Karalis gegründet.", "Das römische Amphitheater bot einst Platz für etwa 10.000 Zuschauer.", "Der Poetto-Strand ist mit 8 Kilometern einer der längsten Stadtstrände Italiens.", "Der Elefantenturm wurde 1307 von dem sardischen Architekten Giovanni Capula erbaut.", "Im Molentargius-Saline-Park nisten jährlich über 10.000 Paare Rosaflamingos.", "Die Stadt verfügt über den größten überdachten Fischmarkt Italiens (San Benedetto)."],
      hu: ["Cagliari városát a föníciaiak alapították Karalis néven.", "A római amfiteátrum egykor mintegy 10 000 néző befogadására volt alkalmas.", "A Poetto strand 8 kilométeres hosszával Olaszország egyik leghosszabb városi strandja.", "Az Elefánt-tornyot 1307-ben építették a város védelmére pisai tervek alapján.", "A Molentargius-parkban évente több mint 10 000 rózsás flamingópár fészkel.", "Cagliariban található Olaszország legnagyobb fedett halpiaca, a San Benedetto."],
      ro: ["Cagliari a fost fondat de fenicieni sub numele de Karalis în antichitate.", "Amfiteatrul Roman avea o capacitate de aproximativ 10.000 de spectatori.", "Plaja Poetto este una dintre cele mai lungi plaje urbane din Italia, având 8 km.", "Turnul Elefantului a fost construit în 1307 de arhitectul Giovanni Capula.", "În Parcul Molentargius cuibăresc anual peste 10.000 de perechi de flamingi roz.", "Orașul găzduiește cea mai mare piață de pește acoperită din Italia, San Benedetto."],
      en: ["Cagliari was founded by the Phoenicians under the name Karalis.", "The Roman Amphitheatre once held approximately 10,000 spectators.", "Poetto Beach is one of the longest city beaches in Italy, stretching 8 kilometers.", "The Elephant Tower was built in 1307 by the Sardinian architect Giovanni Capula.", "Over 10,000 pairs of pink flamingos nest annually in the Molentargius Saline Park.", "The city features Italy's largest indoor fish market, the San Benedetto market."],
    },
  },
  {
    id: "it-taormina",
    type: "city",
    parent: "IT-82",
    coords: [15.290, 37.852],
    name: { de: "Taormina", hu: "Taormina", ro: "Taormina", en: "Taormina" },
    description: {
      en: "Taormina is a stunningly picturesque hilltop town on the east coast of Sicily, famous for its breathtaking views of the Ionian Sea and Mount Etna. It has been a highly favored tourist destination since the 19th century, attracting artists, writers, and celebrities. Its most famous monument is the Teatro Antico, an ancient Greco-Roman theater that is still used today for concerts and film festivals. The town features charming medieval streets, beautiful gardens, and elegant boutiques. Taormina perfectly captures the magical allure and complex history of Sicily in one compact, cliffside setting.",
      de: "Taormina ist eine atemberaubend malerische Hügelstadt an der Ostküste Siziliens, berühmt für ihren atemberaubenden Blick auf das Ionische Meer und den Čtna. Seit dem 19. Jahrhundert ist sie ein sehr beliebtes Touristenziel, das Künstler, Schriftsteller und Prominente anzieht. Ihr berühmtestes Denkmal ist das Teatro Antico, ein antikes griechisch-römisches Theater, das noch heute für Konzerte und Filmfestivals genutzt wird. Die Stadt bietet charmante mittelalterliche Gassen, wunderschöne Gärten und elegante Boutiquen. Taormina fängt den magischen Reiz und die komplexe Geschichte Siziliens in einer kompakten Umgebung an den Klippen perfekt ein.",
      hu: "Taormina egy lenyűgözően festői hegyvidéki kisváros Szicília keleti partján, amely híres a Jón-tengerre és az Etnára nyíló lélegzetelállító kilátásáról. A 19. század óta rendkívül kedvelt turisztikai célpont, amely művészeket, írókat és hírességeket vonz. Leghíresebb műemléke a Teatro Antico, egy ókori görög-római színház, amelyet ma is használnak koncertek és filmfesztiválok megrendezésére. A város hangulatos középkori utcákkal, gyönyörű kertekkel és elegáns butikokkal rendelkezik. Taormina tökéletesen megragadja Szicília varázslatos vonzerejét és összetett történelmét egyetlen kompakt, sziklafalon elhelyezkedő környezetben.",
      ro: "Taormina este un oraș pitoresc situat pe un deal pe coasta de est a Siciliei, faimos pentru priveliștile sale care îți taie respirația asupra Mării Ionice și Muntelui Etna. A fost o destinație turistică extrem de favorizată încă din secolul al XIX-lea, atrăgând artiști, scriitori și celebrități. Cel mai faimos monument al său este Teatro Antico, un antic teatru greco-roman care este folosit și astăzi pentru concerte și festivaluri de film. Orașul are străzi medievale fermecătoare, grădini frumoase și buticuri elegante. Taormina surprinde perfect alura magică și istoria complexă a Siciliei într-un cadru compact, pe stâncă."
    },
    facts: {
      en: ["The Teatro Antico in Taormina is the second largest ancient theater in Sicily.","It offers one of the most iconic panoramic views in Italy, featuring Mount Etna.","Taormina hosts an annual international film festival every summer.","The town sits approximately 250 meters above the beautiful Ionian Sea.","Isola Bella, a tiny picturesque island and nature reserve, lies just below the town.","Famous writers like Goethe, D.H. Lawrence, and Truman Capote spent time here.","It was founded by Greek colonists from Naxos around 400 BC.","The town's main street, Corso Umberto, is lined with medieval buildings and shops."],
      de: ["Das Teatro Antico in Taormina ist das zweitgrößte antike Theater auf Sizilien.","Es bietet einen der berühmtesten Panoramablicke Italiens mit dem Čtna im Hintergrund.","Taormina veranstaltet jeden Sommer ein jährliches internationales Filmfestival.","Die Stadt liegt etwa 250 Meter über dem wunderschönen Ionischen Meer.","Isola Bella, eine malerische kleine Insel und Naturschutzgebiet, liegt direkt unterhalb der Stadt.","Berühmte Schriftsteller wie Goethe, D.H. Lawrence und Truman Capote verbrachten hier Zeit.","Sie wurde um 400 v. Chr. von griechischen Kolonisten aus Naxos gegründet.","Die Hauptstraße der Stadt, der Corso Umberto, ist von mittelalterlichen Gebäuden und Geschäften gesäumt."],
      hu: ["A taorminai Teatro Antico a második legnagyobb ókori színház Szicíliában.","Olaszország egyik legikonikusabb panorámáját nyújtja az Etnával a háttérben.","Taormina minden nyáron ad otthont egy éves nemzetközi filmfesztiválnak.","A város körülbelül 250 méterrel a gyönyörű Jón-tenger felett fekszik.","Isola Bella, egy apró festői sziget és természetvédelmi terület közvetlenül a város alatt található.","Olyan híres írók töltöttek itt időt, mint Goethe, D.H. Lawrence és Truman Capote.","Naxoszból származó görög gyarmatosítók alapították i.e. 400 körül.","A város főutcáját, a Corso Umbertót középkori épületek és üzletek szegélyezik."],
      ro: ["Teatro Antico din Taormina este al doilea cel mai mare teatru antic din Sicilia.","Oferă una dintre cele mai iconice vederi panoramice din Italia, prezentând Muntele Etna.","Taormina găzduiește anual un festival internațional de film în fiecare vară.","Orașul se află la aproximativ 250 de metri deasupra frumoasei Mări Ionice.","Isola Bella, o mică insulă pitorească și rezervație naturală, se află chiar sub oraș.","Scriitori celebri precum Goethe, D.H. Lawrence și Truman Capote au petrecut timp aici.","A fost fondat de coloniștii greci din Naxos în jurul anului 400 î.Hr.","Strada principală a orașului, Corso Umberto, este mărginită de clădiri medievale și magazine."]
    },
    image: "/geo-images/italy/it-taormina.webp",
    descriptionAdvanced: {
      de: "Taormina, spektakulär auf einer Terrasse des Monte Tauro über dem Ionischen Meer gelegen, ist seit dem 19. Jahrhundert eines der exklusivsten Reiseziele Siziliens. Das Wahrzeichen der Stadt ist das antike griechisch-römische Theater, das nicht nur für seine Architektur, sondern auch für den unvergleichlichen Blick auf den Ätna und die Küste berühmt ist. Die Geschichte Taorminas reicht bis in die Zeit der Sikeloi zurück und wurde später von Griechen, Römern, Arabern und Normannen geprägt, was sich in der vielseitigen Architektur des Palazzo Corvaia widerspiegelt. Die Flaniermeile Corso Umberto durchzieht das mittelalterliche Zentrum und verbindet historische Tore mit eleganten Plätzen wie der Piazza IX Aprile. Unterhalb der Stadt liegt die Isola Bella, eine kleine Insel und Naturschutzgebiet, die durch eine schmale Sandbank mit dem Festland verbunden ist. Taormina war ein fester Bestandteil der Grand Tour und zog Schriftsteller wie Goethe und Oscar Wilde an. Heute ist die Stadt Schauplatz internationaler Filmfestivals und bewahrt ihren Ruf als kulturelles Juwel des Mittelmeers.",
      hu: "Taormina a Jón-tenger felett, a Monte Tauro egyik teraszán fekszik, és a 19. század óta Szicília egyik legexkluzívabb úti célja. A város jelképe az ókori görög-római színház, amely nemcsak építészeti megoldásai, hanem az Etna és a partvidék felé nyíló páratlan kilátása miatt is híres. Taormina története a szikeloszok idejéig nyúlik vissza, később görögök, rómaiak, arabok és normannok hagyták itt lábnyomukat, ami a Palazzo Corvaia sokszínű építészetében is tükröződik. A középkori központot átszeli a Corso Umberto sétálóutca, amely történelmi kapukat és elegáns tereket, például a Piazza IX Aprile-t köti össze. A város alatt található az Isola Bella, egy apró sziget és természetvédelmi terület, amelyet keskeny homokpad köt össze a szárazfölddel. Taormina a Grand Tour kötelező állomása volt, olyan írókat vonzva, mint Goethe és Oscar Wilde. Ma a város nemzetközi filmfesztiválok helyszíne, és továbbra is a Földközi-tenger egyik kulturális ékköve.",
      ro: "Taormina, situat spectaculos pe o terasă a Muntelui Tauro deasupra Mării Ionice, este una dintre cele mai exclusiviste destinații din Sicilia încă din secolul al XIX-lea. Simbolul orașului este Teatrul Antic greco-roman, celebru nu doar pentru arhitectura sa, ci și pentru panorama inegalabilă asupra vulcanului Etna și a coastei siciliene. Istoria Taorminei începe cu sicelii antici și a fost marcată ulterior de greci, romani, arabi și normanzi, influențe ce se regăsesc în arhitectura eclectică a Palazzo Corvaia. Strada principală, Corso Umberto, traversează centrul medieval, legând porți istorice de piețe elegante precum Piazza IX Aprile. La poalele orașului se află Isola Bella, o mică insulă și rezervație naturală conectată de mal printr-o fâșie îngustă de nisip. Taormina a fost o oprire esențială în Grand Tour, atrăgând scriitori precum Goethe și Oscar Wilde. Astăzi, orașul găzduiește festivaluri internaționale de film și își păstrează reputația de bijuterie culturală a Mediteranei.",
      en: "Taormina, spectacularly situated on a terrace of Monte Tauro overlooking the Ionian Sea, has been one of Sicily's most exclusive destinations since the 19th century. The city's landmark is the ancient Greco-Roman theater, famous not only for its architecture but also for its unparalleled views of Mount Etna and the coastline. Taormina's history dates back to the Sicels and was later shaped by Greeks, Romans, Arabs, and Normans, as reflected in the eclectic architecture of Palazzo Corvaia. The main pedestrian street, Corso Umberto, runs through the medieval center, connecting historic gates with elegant squares like Piazza IX Aprile. Below the town lies Isola Bella, a small island and nature reserve connected to the mainland by a narrow sandbar. Taormina was a staple of the Grand Tour, attracting writers such as Goethe and Oscar Wilde. Today, the town hosts international film festivals and maintains its reputation as a cultural jewel of the Mediterranean.",
    },
    factsAdvanced: {
      de: ["Das antike Theater von Taormina ist nach Syrakus das zweitgrößte Siziliens.", "Die Stadt liegt etwa 200 Meter über dem Meeresspiegel auf dem Monte Tauro.", "Isola Bella wurde 1990 zum Naturschutzgebiet erklärt und ist ein EU-Schutzgebiet.", "Der Palazzo Corvaia stammt ursprünglich aus dem 10. Jahrhundert (arabische Zeit).", "Der Corso Umberto folgt dem Verlauf der antiken römischen Konsularstraße Via Valeria.", "Taormina war im 19. Jahrhundert ein Zentrum des europäischen Ästhetizismus."],
      hu: ["Taormina antik színháza Szicília második legnagyobb színháza Szirakúza után.", "A város mintegy 200 méterrel a tengerszint felett fekszik a Monte Tauro csúcsán.", "Az Isola Bella szigetét 1990-ben nyilvánították természetvédelmi területté.", "A Palazzo Corvaia eredete a 10. századra, az arab fennhatóság idejére nyúlik vissza.", "A Corso Umberto sétálóutca az ókori római Via Valeria útvonalát követi.", "A város központi tere, a Piazza IX Aprile híres fekete-fehér sakktábla-mintás burkolatáról."],
      ro: ["Teatrul Antic din Taormina este al doilea ca mărime din Sicilia, după cel din Siracuza.", "Orașul este situat la aproximativ 200 de metri deasupra nivelului mării pe Muntele Tauro.", "Isola Bella a fost declarată rezervație naturală în 1990 datorită biodiversității sale.", "Palazzo Corvaia datează din secolul al X-lea și are elemente arabe, normande și gotice.", "Corso Umberto urmărește traseul vechiului drum roman consular Via Valeria.", "Grădinile Publice (Villa Comunale) au fost create de englezoaica Florence Trevelyan."],
      en: ["The Ancient Theatre of Taormina is the second largest in Sicily after Syracuse.", "The town is situated approximately 200 meters above sea level on Monte Tauro.", "Isola Bella was designated a nature reserve in 1990 to protect its ecosystem.", "Palazzo Corvaia dates back to the 10th century and reflects Arab and Norman styles.", "Corso Umberto follows the path of the ancient Roman consular road, Via Valeria.", "The town's Public Gardens were designed in the 19th century by Florence Trevelyan."],
    },
  },
  {
    id: "it-amalfi",
    type: "city",
    parent: "IT-72",
    coords: [14.603, 40.634],
    name: { de: "Amalfi", hu: "Amalfi", ro: "Amalfi", en: "Amalfi" },
    description: {
      en: "Amalfi is a historically significant town set in a dramatic ravine on Italy's renowned Amalfi Coast in Campania. During the Middle Ages, it was a powerful maritime republic that rivaled Genoa, Venice, and Pisa for control of the Mediterranean. Today, it is a UNESCO World Heritage site known for its stunning cliffside setting, lemon terraces, and sparkling blue waters. The striking Cathedral of St. Andrew, with its colorful mosaic façade and steep monumental staircase, dominates the main square. Amalfi offers an enchanting mix of seaside charm, rich history, and exquisite Mediterranean flavors.",
      de: "Amalfi ist eine historisch bedeutende Stadt in einer dramatischen Schlucht an Italiens berühmter Amalfiküste in Kampanien. Im Mittelalter war es eine mächtige Seerepublik, die mit Genua, Venedig und Pisa um die Kontrolle über das Mittelmeer wetteiferte. Heute ist es ein UNESCO-Weltkulturerbe, bekannt für seine atemberaubende Klippenlage, Zitronenterrassen und das glitzernde blaue Wasser. Die markante Kathedrale des Heiligen Andreas dominiert mit ihrer farbenfrohen Mosaikfassade und steilen monumentalen Treppe den Hauptplatz. Amalfi bietet eine bezaubernde Mischung aus maritimem Charme, reicher Geschichte und exquisiten mediterranen Aromen.",
      hu: "Amalfi egy történelmi jelentőségű város, amely egy drámai szurdokban fekszik Olaszország híres Amalfi-partján, Campania régióban. A középkorban egy hatalmas tengeri köztársaság volt, amely Genovával, Velencével és Pisával versengett a Földközi-tenger feletti uralomért. Ma az UNESCO világörökség része, amely lenyűgöző sziklafalairól, citromteraszairól és csillogó kék vizéről ismert. A lenyűgöző Szent András-katedrális színes mozaik homlokzatával és meredek monumentális lépcsőjével uralja a főteret. Amalfi a tengerparti báj, a gazdag történelem és a kiváló mediterrán ízek varázslatos keverékét kínálja.",
      ro: "Amalfi este un oraș cu o semnificație istorică importantă, așezat într-o râpă spectaculoasă pe renumita Coastă Amalfi din Italia, în regiunea Campania. În timpul Evului Mediu, a fost o republică maritimă puternică care a rivalizat cu Genova, Veneția și Pisa pentru controlul Mediteranei. Astăzi, este un sit al Patrimoniului Mondial UNESCO, cunoscut pentru așezarea sa uimitoare pe stânci, terasele cu lămâi și apele albastre strălucitoare. Impresionanta Catedrală a Sfântului Andrei, cu fațada sa mozaicată colorată și scara monumentală abruptă, domină piața principală. Amalfi oferă un amestec încântător de farmec litoral, istorie bogată și arome mediteraneene rafinate."
    },
    facts: {
      en: ["Amalfi was one of the four great Maritime Republics of Italy.","The Cathedral of St. Andrew supposedly contains the relics of the Apostle Andrew.","The town is famous for the production of Limoncello liqueur, made from local lemons.","The Amalfi maritime code (Tavole Amalfitane) influenced maritime law until the 16th century.","Much of the original ancient city slid into the sea during a devastating earthquake in 1343.","The entire Amalfi Coast was designated a UNESCO World Heritage site in 1997.","Handmade paper, called bambagina, is a traditional artisanal craft of the town.","The town's population peaks immensely during the summer due to heavy tourism."],
      de: ["Amalfi war eine der vier großen Seerepubliken Italiens.","Die Kathedrale St. Andreas soll die Reliquien des Apostels Andreas enthalten.","Die Stadt ist berühmt für die Herstellung des Limoncello-Likörs aus lokalen Zitronen.","Das Seerecht von Amalfi (Tavole Amalfitane) beeinflusste das Seerecht bis ins 16. Jahrhundert.","Ein Großteil der ursprünglichen antiken Stadt rutschte bei einem verheerenden Erdbeben 1343 ins Meer.","Die gesamte Amalfiküste wurde 1997 zum UNESCO-Weltkulturerbe erklärt.","Handgeschöpftes Papier, genannt Bambagina, ist ein traditionelles Handwerk der Stadt.","Die Bevölkerungszahl der Stadt erreicht im Sommer aufgrund des starken Tourismus ihren Höhepunkt."],
      hu: ["Amalfi Olaszország négy nagy tengeri köztársaságának egyike volt.","A Szent András-katedrális állítólag András apostol ereklyéit őrzi.","A város híres a helyi citromból készült Limoncello likőr gyártásáról.","Az amalfi tengerészeti kódex (Tavole Amalfitane) a 16. századig befolyásolta a tengeri jogot.","Az eredeti ókori város nagy része egy 1343-as pusztító földrengés során a tengerbe csúszott.","Az egész Amalfi-partot 1997-ben az UNESCO világörökség részévé nyilvánították.","A kézzel merített papír, a bambagina a város egyik hagyományos kézműves mestersége.","A város lakossága a nyár folyamán a nagy turizmus miatt hatalmasra duzzad."],
      ro: ["Amalfi a fost una dintre cele patru mari Republici Maritime ale Italiei.","Catedrala Sfântul Andrei conține, se presupune, moaștele Apostolului Andrei.","Orașul este faimos pentru producția de lichior Limoncello, făcut din lămâi locale.","Codul maritim din Amalfi (Tavole Amalfitane) a influențat dreptul maritim până în secolul al XVI-lea.","O mare parte a orașului antic original a alunecat în mare în timpul unui cutremur devastator în 1343.","Întreaga Coastă Amalfi a fost desemnată sit al Patrimoniului Mondial UNESCO în 1997.","Hârtia manuală, numită bambagina, este un meșteșug artizanal tradițional al orașului.","Populația orașului atinge un vârf imens în timpul verii datorită turismului intens."]
    },
    image: "/geo-images/italy/it-amalfi.webp",
    descriptionAdvanced: {
      de: "Amalfi, das Herzstück der gleichnamigen Küste in Kampanien, war im 9. Jahrhundert die erste der vier großen italienischen Seerepubliken. Die Stadt liegt in einer dramatischen Schlucht am Fuße des Monte Cerreto und ist bekannt für ihre steilen Gassen und weiß getünchten Häuser. Das architektonische Juwel ist der Dom von Amalfi (Cattedrale di Sant'Andrea), dessen monumentale Treppe und arabisch-normannische Fassade den zentralen Platz dominieren. Im Inneren beherbergt der Dom die Reliquien des Apostels Andreas sowie den Kreuzgang Chiostro del Paradiso, ein Meisterwerk mit maurischen Einflüssen. Amalfi war historisch ein Zentrum des Papierhandels; das Museo della Carta bewahrt die Tradition der Herstellung des handgeschöpften Bambagina-Papiers. Geografisch ist die Stadt durch das milde Klima und die terrassierten Zitronenhaine geprägt, die die berühmten Amalfi-Zitronen hervorbringen. Heute gehört die gesamte Amalfiküste zum UNESCO-Welterbe und zieht Besucher aus aller Welt an, die die Mischung aus maritimer Geschichte und atemberaubender Naturlandschaft schätzen.",
      hu: "Amalfi a kampániai Amalfi-part névadó központja, amely a 9. században az első volt a négy nagy olasz tengeri köztársaság közül. A város a Monte Cerreto lábánál, egy látványos szurdokban fekszik, híres meredek sikátorairól és fehérre meszelt házairól. Építészeti ékköve az Amalfi-dóm (Cattedrale di Sant'Andrea), amelynek monumentális lépcsősora és arab-normann homlokzata uralja a főteret. A dóm belsejében őrizik Szent András apostol ereklyéit, valamint itt található a Paradicsom-kolostor (Chiostro del Paradiso), amely mór stílusú árkádjaival nyűgözi le a látogatókat. Amalfi történelmileg a papírgyártás központja is volt; a Papírmúzeum ma is őrzi a kézzel merített Bambagina-papír készítésének hagyományát. Földrajzi környezetét az enyhe éghajlat és a teraszos citromligetek határozzák meg, amelyek a híres amalfi citromot adják. Ma az egész Amalfi-part az UNESCO Világörökség része, vonzva a látogatókat a tengeri történelem és a lenyűgöző természeti táj egyedülálló ötvözetével.",
      ro: "Amalfi, inima coastei cu același nume din Campania, a fost în secolul al IX-lea prima dintre cele patru mari republici maritime italiene. Orașul este situat într-o râpă dramatică la poalele Muntelui Cerreto și este cunoscut pentru străzile sale abrupte și casele albe caracteristice. Bijuteria arhitecturală este Domul din Amalfi (Cattedrale di Sant'Andrea), a cărui scară monumentală și fațadă arabo-normandă domină piața centrală. În interior, catedrala adăpostește moastele Sfântului Apostol Andrei și celebrul Chiostro del Paradiso, o mănăstire cu influențe maure. Amalfi a fost istoric un centru important al producției de hârtie; Museo della Carta păstrează și astăzi tradiția fabricării hârtiei manuale numite Bambagina. Din punct de vedere geografic, orașul este definit de clima blândă și de livezile de lămâi terasate care produc faimoasele lămâi de Amalfi. Astăzi, întreaga Coastă Amalfitană face parte din Patrimoniul Mondial UNESCO, fiind o destinație turistică de renume mondial datorită peisajelor sale unice.",
      en: "Amalfi, the namesake heart of the Amalfi Coast in Campania, was the first of Italy's four great maritime republics in the 9th century. The town is nestled in a dramatic ravine at the foot of Monte Cerreto and is known for its steep alleys and whitewashed Mediterranean houses. Its architectural jewel is the Amalfi Cathedral (Cattedrale di Sant'Andrea), whose monumental staircase and Arab-Norman facade dominate the central square. Inside, the cathedral houses the relics of Saint Andrew the Apostle and the Chiostro del Paradiso, a cloister featuring exquisite Moorish-style arches. Amalfi was historically a center for paper production; the Museo della Carta preserves the tradition of making handcrafted Bambagina paper. Geographically, the town is characterized by its mild climate and terraced lemon groves, which produce the famous Amalfi lemons used for limoncello. Today, the entire Amalfi Coast is a UNESCO World Heritage site, attracting global visitors with its blend of maritime history and breathtaking natural scenery.",
    },
    factsAdvanced: {
      de: ["Amalfi war im 10. Jahrhundert eine unabhängige Republik mit etwa 70.000 Einwohnern.", "Der Dom von Amalfi besitzt bronzene Tore, die 1066 in Konstantinopel gegossen wurden.", "Die Stadt gilt als Geburtsort der Compass-Tradition durch den legendären Flavio Gioia.", "Das Museo della Carta befindet sich in einer der ältesten Papiermühlen Europas.", "Amalfi wurde 1997 zusammen mit der Küste zum UNESCO-Welterbe erklärt.", "Die Regatta der antiken Seerepubliken findet alle vier Jahre in Amalfi statt."],
      hu: ["A 10. században Amalfi független köztársaság volt, mintegy 70 000 lakossal.", "Az Amalfi-dóm bronzkapuit 1066-ban öntötték Konstantinápolyban.", "A város az iránytű feltalálásának legendás helyszíne Flavio Gioia révén.", "A Papírmúzeum Európa egyik legrégebbi, épségben maradt papírmalmában működik.", "Az Amalfi-partot 1997-ben nyilvánították az UNESCO Világörökség részévé.", "Négyévente Amalfi rendezi meg a történelmi tengeri köztársaságok regattáját."],
      ro: ["În secolul al X-lea, Amalfi era o republică independentă cu circa 70.000 de locuitori.", "Porțile de bronz ale Domului din Amalfi au fost turnate în Constantinopol în 1066.", "Orașul este considerat locul de naștere al busolei maritime prin Flavio Gioia.", "Museo della Carta se află într-una dintre cele mai vechi mori de hârtie din Europa.", "Coasta Amalfitană a fost inclusă în lista Patrimoniului Mondial UNESCO în 1997.", "Regata Vechilor Republici Maritime are loc la Amalfi o dată la patru ani."],
      en: ["In the 10th century, Amalfi was an independent republic with around 70,000 residents.", "The bronze doors of Amalfi Cathedral were cast in Constantinople in 1066.", "The town is traditionally credited with the invention of the maritime compass by Flavio Gioia.", "The Paper Museum is housed in one of the oldest surviving paper mills in Europe.", "The Amalfi Coast was designated a UNESCO World Heritage site in 1997.", "The Regatta of the Ancient Maritime Republics is hosted in Amalfi every four years."],
    },
  },
  {
    id: "castel-del-monte",
    type: "historical",
    parent: "reg-puglia",
    coords: [16.269, 41.084],
    name: { de: "Castel del Monte", hu: "Castel del Monte", ro: "Castel del Monte", en: "Castel del Monte" },
    description: {
      en: "Castel del Monte is a 13th-century fortress in Apulia known for its exact octagonal plan and striking geometric design. Commissioned by Emperor Frederick II, it remains one of Italy's most unusual medieval monuments.",
      de: "Castel del Monte ist eine Festung aus dem 13. Jahrhundert in Apulien, die fÁƒÂ¼r ihren exakten achteckigen Grundriss und ihr markantes geometrisches Design bekannt ist. Sie wurde von Kaiser Friedrich II. in Auftrag gegeben und bleibt eines der eigenartigsten mittelalterlichen Monumente Italiens.",
      hu: "A Castel del Monte egy 13. szÁƒÂ¡zadi erÁ…‘dÁƒÂ­tmÁƒÂ©ny PugliÁƒÂ¡ban, amely pontos nyolcszÁƒÂ¶gletÁ…Â± alaprajzÁƒÂ¡rÁƒ³l ÁƒÂ©s feltÁ…Â±nÁ…‘ geometriai formÁƒÂ¡jÁƒÂ¡rÁƒ³l hÁƒÂ­res. II. Frigyes csÁƒÂ¡szÁƒÂ¡r rendelte meg, ÁƒÂ©s ma is OlaszorszÁƒÂ¡g egyik legkÁƒÂ¼lÁƒÂ¶nlegesebb kÁƒÂ¶zÁƒÂ©pkori emlÁƒÂ©kmÁ…Â±ve.",
      ro: "Castel del Monte este o fortČÆ’reaÈ”ºČÆ’ din secolul al XIII-lea din Apulia, cunoscutČÆ’ pentru planul sČÆ’u octogonal perfect Èâ„¢i designul geometric spectaculos. Comandat de ÁƒÂ®mpČÆ’ratul Frederic al II-lea, rČÆ’mÁƒÂ¢ne unul dintre cele mai neobiÈâ„¢nuite monumente medievale din Italia."
    },
    facts: {
      en: ["Its eight-sided shape is mirrored by eight towers around the perimeter.", "It is a UNESCO World Heritage site and its purpose is still debated."],
      de: ["Seine achteckige Form wird von acht TÁƒÂ¼rmen am Áƒ”žuÁƒŁ¸eren wiederholt.", "Es ist UNESCO-Welterbe und seine genaue Funktion wird bis heute diskutiert."],
      hu: ["NyolcszÁƒÂ¶gletÁ…Â± formÁƒÂ¡jÁƒÂ¡t kÁƒÂ­vÁƒÂ¼l nyolc torony ismÁƒÂ©tli meg.", "UNESCO VilÁƒÂ¡gÁƒÂ¶rÁƒÂ¶ksÁƒÂ©gi helyszÁƒÂ­n, amelynek pontos funkciÁƒ³ja ma is vita tÁƒÂ¡rgya."],
      ro: ["Forma sa octogonalČÆ’ este repetatČÆ’ de opt turnuri pe perimetru.", "Este sit UNESCO, iar funcÈ”ºia sa exactČÆ’ este ÁƒÂ®ncČÆ’ dezbČÆ’tutČÆ’."]
    },
    image: "/geo-images/italy/castel-del-monte.webp",
    descriptionAdvanced: {
      de: "Castel del Monte ist eine achteckige Burg in Apulien, die im 13. Jahrhundert von Kaiser Friedrich II. erbaut wurde. Das Bauwerk ist für seine mathematische und astronomische Präzision bekannt. Es verfügt weder über einen Graben noch über Zugbrücken, was auf eine symbolische Funktion hindeutet. Seit 1996 gehört die Burg zum UNESCO-Weltkulturerbe.",
      hu: "A Castel del Monte egy nyolcszögletű vár Apuliában, amelyet II. Frigyes császár építtetett a 13. században. Az építmény matematikai és csillagászati precizitásáról ismert. Nincsenek vizesárkai vagy felvonóhídjai, ami szimbolikus funkcióra utal. A vár 1996 óta az UNESCO Világörökség része.",
      ro: "Castel del Monte este un castel octogonal din Puglia, construit de împăratul Frederic al II-lea în secolul al XIII-lea. Edificiul este renumit pentru precizia sa matematică și astronomică. Nu dispune de șanțuri sau poduri mobile, ceea ce sugerează o funcție simbolică. Din 1996, castelul face parte din Patrimoniul Mondial UNESCO.",
      en: "Castel del Monte is an octagonal castle in Puglia, built by Emperor Frederick II in the 13th century. The structure is renowned for its mathematical and astronomical precision. It features neither moats nor drawbridges, suggesting a symbolic function. Since 1996, the castle has been listed as a UNESCO World Heritage site.",
    },
    factsAdvanced: {
      de: ["Baubeginn war im Jahr 1240.", "Der Grundriss besteht aus einem perfekten Achteck.", "Acht Türme stehen an den Ecken des Bauwerks.", "Das Schloss ist auf der italienischen 1-Cent-Münze abgebildet.", "Es liegt auf einer Höhe von 540 Metern.", "Friedrich II. nutzte es wahrscheinlich als Jagdschloss."],
      hu: ["Az építkezés 1240-ben kezdődött.", "Az alaprajz egy tökéletes nyolcszöget alkot.", "Az épület sarkain nyolc torony áll.", "A vár látható az olasz 1 eurócentes érmén.", "540 méteres magasságban található.", "II. Frigyes valószínűleg vadászkastélynak használta."],
      ro: ["Construcția a început în anul 1240.", "Planul clădirii este un octogon perfect.", "Opt turnuri sunt dispuse la colțurile edificiului.", "Castelul este reprezentat pe moneda italiană de 1 cent.", "Este situat la o altitudine de 540 de metri.", "Frederic al II-lea l-a folosit probabil ca reședință de vânătoare."],
      en: ["Construction began in the year 1240.", "The floor plan forms a perfect octagon.", "Eight towers stand at the corners of the building.", "The castle is depicted on the Italian 1-cent coin.", "It is situated at an altitude of 540 meters.", "Frederick II likely used it as a hunting lodge."],
    },
  },
  {
    id: "castello-sforzesco",
    type: "historical",
    parent: "milan",
    coords: [9.1797, 45.4706],
    name: { de: "Sforza-Schloss", hu: "Sforza-kastÁƒÂ©ly", ro: "Castelul Sforza", en: "Sforza Castle" },
    description: {
      en: "Castello Sforzesco is a massive Renaissance fortress in Milan that once protected the rulers of the city. Today it houses museums and collections that make it one of the city's most important cultural landmarks.",
      de: "Das Castello Sforzesco ist eine massive Renaissancefestung in Mailand, die einst die Herrscher der Stadt schÁƒÂ¼tzte. Heute beherbergt es Museen und Sammlungen und zÁƒÂ¤hlt zu den wichtigsten kulturellen Wahrzeichen der Stadt.",
      hu: "A Castello Sforzesco egy hatalmas reneszÁƒÂ¡nsz erÁ…‘dÁƒÂ­tmÁƒÂ©ny MilÁƒÂ¡nÁƒ³ban, amely egykor a vÁƒÂ¡ros urait vÁƒÂ©dte. Ma mÁƒÂºzeumoknak ÁƒÂ©s gyÁ…Â±jtemÁƒÂ©nyeknek ad otthont, ÁƒÂ­gy a vÁƒÂ¡ros egyik legfontosabb kulturÁƒÂ¡lis lÁƒÂ¡tnivalÁƒ³ja.",
      ro: "Castello Sforzesco este o fortČÆ’reaÈ”ºČÆ’ renascentistČÆ’ masivČÆ’ din Milano, care odinioarČÆ’ proteja conducČÆ’torii oraÈâ„¢ului. AstČÆ’zi gČÆ’zduieÈâ„¢te muzee Èâ„¢i colecÈ”ºii, fiind unul dintre cele mai importante repere culturale ale oraÈâ„¢ului."
    },
    facts: {
      en: ["It was built by the Visconti and later expanded by the Sforza family.", "The complex contains museums, courtyards, and works linked to Michelangelo."],
      de: ["Es wurde von den Visconti erbaut und spÁƒÂ¤ter von der Familie Sforza erweitert.", "Der Komplex umfasst Museen, InnenhÁƒÂ¶fe und Werke mit Bezug zu Michelangelo."],
      hu: ["A Viscontiak ÁƒÂ©pÁƒÂ­tettÁƒÂ©k, majd a Sforza csalÁƒÂ¡d bÁ…‘vÁƒÂ­tette.", "A komplexum mÁƒÂºzeumokat, udvarokat ÁƒÂ©s MichelangelÁƒ³hoz kÁƒÂ¶thetÁ…‘ mÁ…Â±veket is tartalmaz."],
      ro: ["A fost construit de familia Visconti Èâ„¢i extins ulterior de Sforza.", "Complexul include muzee, curÈ”ºi Èâ„¢i lucrČÆ’ri legate de Michelangelo."]
    },
    image: "/geo-images/italy/castello-sforzesco.webp",
    descriptionAdvanced: {
      de: "Das Castello Sforzesco in Mailand wurde im 15. Jahrhundert von Francesco Sforza auf den Ruinen einer älteren Festung errichtet. Es war einst eine der größten Zitadellen Europas und Residenz der Herzöge von Mailand. Heute beherbergt das Schloss mehrere bedeutende Museen und Kunstsammlungen. Zu den Highlights zählt Michelangelos unvollendete Pietà Rondanini.",
      hu: "A milánói Sforza-vár (Castello Sforzesco) a 15. században épült Francesco Sforza parancsára egy korábbi erőd romjain. Egykor Európa egyik legnagyobb citadellája és a milánói hercegek rezidenciája volt. Ma a kastély több jelentős múzeumnak és művészeti gyűjteménynek ad otthont. A legfontosabb műtárgyak közé tartozik Michelangelo befejezetlen Pietà Rondaninije.",
      ro: "Castello Sforzesco din Milano a fost construit în secolul al XV-lea de Francesco Sforza pe ruinele unei fortificații mai vechi. A fost cândva una dintre cele mai mari citadele din Europa și reședința ducilor de Milano. Astăzi, castelul găzduiește mai multe muzee și colecții de artă importante. Printre atracții se numără Pietà Rondanini a lui Michelangelo.",
      en: "Sforza Castle in Milan was built in the 15th century by Francesco Sforza on the ruins of an older fortress. It was once one of the largest citadels in Europe and the residence of the Dukes of Milan. Today, the castle houses several major museums and art collections. Highlights include Michelangelo's unfinished Pietà Rondanini.",
    },
    factsAdvanced: {
      de: ["Bau der heutigen Struktur begann im Jahr 1450.", "Der zentrale Filarete-Turm wurde 1905 rekonstruiert.", "Leonardo da Vinci gestaltete die Sala delle Asse.", "Das Schloss beherbergt das Museum für Antike Kunst.", "Die Anlage hat einen quadratischen Grundriss.", "Die Verteidigungsmauern wurden von Napoleon teilweise zerstört."],
      hu: ["A jelenlegi épület építése 1450-ben kezdődött.", "A központi Filarete-tornyot 1905-ben rekonstruálták.", "Leonardo da Vinci tervezte a Sala delle Asse dekorációját.", "A kastélyban található az Ókori Művészeti Múzeum.", "Az épületegyüttes alaprajza négyszögletes.", "A várfalakat Napóleon idején részben lerombolták."],
      ro: ["Construcția structurii actuale a început în 1450.", "Turnul central Filarete a fost reconstruit în 1905.", "Leonardo da Vinci a decorat Sala delle Asse.", "Castelul găzduiește Muzeul de Artă Antică.", "Complexul are un plan de formă pătrată.", "Zidurile de apărare au fost parțial distruse de Napoleon."],
      en: ["Construction of the current structure began in 1450.", "The central Filarete tower was reconstructed in 1905.", "Leonardo da Vinci decorated the Sala delle Asse.", "The castle houses the Museum of Ancient Art.", "The complex features a square floor plan.", "Defensive walls were partially destroyed by Napoleon."],
    },
  },
  {
    id: "palazzo-ducale-venezia",
    type: "historical",
    parent: "venice",
    coords: [12.3401, 45.4339],
    name: { de: "Dogenpalast", hu: "DÁƒ³zse-palota", ro: "Palatul Dogilor", en: "Doge's Palace" },
    description: {
      en: "The Doge's Palace is the former seat of Venetian power, standing beside St. Mark's Square in Venice. Its Gothic facades and grand halls reflect centuries of political influence, ceremony, and artistic wealth.",
      de: "Der Dogenpalast war der ehemalige Sitz der venezianischen Macht und steht neben dem Markusplatz in Venedig. Seine gotischen Fassaden und prÁƒÂ¤chtigen SÁƒÂ¤le spiegeln Jahrhunderte politischer Bedeutung, Zeremonien und kÁƒÂ¼nstlerischen Reichtums wider.",
      hu: "A DÁƒ³zse-palota a velencei hatalom egykori kÁƒÂ¶zpontja, a velencei Szent MÁƒÂ¡rk tÁƒÂ©r mellett ÁƒÂ¡ll. GÁƒ³tikus homlokzatai ÁƒÂ©s dÁƒÂ­szes termei ÁƒÂ©vszÁƒÂ¡zadok politikai befolyÁƒÂ¡sÁƒÂ¡t, ceremÁƒ³niÁƒÂ¡it ÁƒÂ©s mÁ…Â±vÁƒÂ©szeti gazdagsÁƒÂ¡gÁƒÂ¡t tÁƒÂ¼krÁƒÂ¶zik.",
      ro: "Palatul Dogilor a fost fosta reÈâ„¢edinÈ”ºČÆ’ a puterii veneÈ”ºiene Èâ„¢i se aflČÆ’ lÁƒÂ¢ngČÆ’ Piazza San Marco din VeneÈ”ºia. FaÈ”ºadele sale gotice Èâ„¢i sČÆ’lile grandioase reflectČÆ’ secole de influenÈ”ºČÆ’ politicČÆ’, ceremonie Èâ„¢i bogČÆ’È”ºie artisticČÆ’."
    },
    facts: {
      en: ["It was the residence of the Doge and the center of the Venetian Republic.", "The palace is linked to the prison by the famous Bridge of Sighs."],
      de: ["Hier residierte der Dogen, und es war das Zentrum der Venezianischen Republik.", "Der Palast ist durch die berÁƒÂ¼hmte SeufzerbrÁƒÂ¼cke mit dem GefÁƒÂ¤ngnis verbunden."],
      hu: ["Itt ÁƒÂ©lt a dÁƒ³zse, ÁƒÂ©s ez volt a Velencei KÁƒÂ¶ztÁƒÂ¡rsasÁƒÂ¡g kÁƒÂ¶zpontja.", "A palotÁƒÂ¡t a hÁƒÂ­rhedt SÁƒ³hajok hÁƒÂ­dja kÁƒÂ¶ti ÁƒÂ¶ssze a bÁƒÂ¶rtÁƒÂ¶nnel."],
      ro: ["A fost reÈâ„¢edinÈ”ºa dogelui Èâ„¢i centrul Republicii VeneÈ”ºiene.", "Palatul este legat de ÁƒÂ®nchisoare prin faimosul Pod al Suspinelor."]
    },
    image: "/geo-images/italy/palazzo-ducale-venezia.webp",
    descriptionAdvanced: {
      de: "Der Dogenpalast in Venedig ist ein Meisterwerk der venezianischen Gotik und war einst Sitz des Dogen und der Regierung. Das Gebäude liegt am Markusplatz und ist durch die Seufzerbrücke mit dem ehemaligen Gefängnis verbunden. Die prächtigen Säle sind mit Werken von Tintoretto und Veronese geschmückt. Der Palast ist eines der meistbesuchten Wahrzeichen der Stadt.",
      hu: "A velencei Dózse-palota a velencei gótika remekműve, amely egykor a dózse és a kormány székhelye volt. Az épület a Szent Márk téren található, és a Sóhajok hídja köti össze a volt börtönnel. A pompás termeket Tintoretto és Veronese alkotásai díszítik. A palota a város egyik leglátogatottabb jelképe.",
      ro: "Palatul Dogilor din Veneția este o capodoperă a goticului venețian și a fost sediul dogelui și al guvernului. Clădirea este situată în Piața San Marco și este legată de fosta închisoare prin Puntea Suspinelor. Sălile magnifice sunt decorate cu opere de Tintoretto și Veronese. Palatul este unul dintre cele mai vizitate simboluri ale orașului.",
      en: "The Doge's Palace in Venice is a masterpiece of Venetian Gothic architecture and served as the residence of the Doge and the seat of government. Located in St. Mark's Square, it is connected to the former prison by the Bridge of Sighs. The magnificent halls are decorated with works by Tintoretto and Veronese. The palace is one of the city's most visited landmarks.",
    },
    factsAdvanced: {
      de: ["Der heutige Bau stammt größtenteils aus dem 14. Jahrhundert.", "Die Seufzerbrücke wurde im Jahr 1600 erbaut.", "Der Saal des Großen Rates ist 54 Meter lang.", "Tintorettos 'Paradies' ist eines der größten Ölgemälde.", "Der Palast wurde 1923 in ein Museum umgewandelt.", "Die 'Bocca di Leone' diente für anonyme Denunziationen."],
      hu: ["A mai épület nagy része a 14. századból származik.", "A Sóhajok hídja 1600-ban épült.", "A Nagy Tanács terme 54 méter hosszú.", "Tintoretto 'Paradicsom' című műve az egyik legnagyobb olajfestmény.", "A palotát 1923-ban alakították múzeummá.", "A 'Bocca di Leone' postaláda névtelen feljelentésekre szolgált."],
      ro: ["Clădirea actuală datează în mare parte din secolul al XIV-lea.", "Puntea Suspinelor a fost construită în anul 1600.", "Sala Marelui Consiliu are o lungime de 54 de metri.", "„Paradisul” lui Tintoretto este una dintre cele mai mari picturi.", "Palatul a fost transformat în muzeu în anul 1923.", "„Bocca di Leone” era folosită pentru denunțuri anonime."],
      en: ["The current building mostly dates from the 14th century.", "The Bridge of Sighs was built in the year 1600.", "The Hall of the Great Council is 54 meters long.", "Tintoretto's 'Paradise' is one of the largest oil paintings.", "The palace was converted into a museum in 1923.", "The 'Bocca di Leone' was used for anonymous denunciations."],
    },
  },
  {
    id: "palazzo-pitti",
    type: "historical",
    parent: "florence",
    coords: [11.2494, 43.7639],
    name: { de: "Pitti-Palast", hu: "Pitti-palota", ro: "Palatul Pitti", en: "Pitti Palace" },
    description: {
      en: "Pitti Palace is a vast Renaissance palace in Florence that became one of the principal homes of the Medici family. Its galleries and gardens now showcase centuries of Florentine art, power, and taste.",
      de: "Der Pitti-Palast ist ein riesiger Renaissancepalast in Florenz und wurde zu einem der Hauptsitze der Familie Medici. Seine Galerien und GÁƒÂ¤rten zeigen heute Jahrhunderte florentinischer Kunst, Macht und Eleganz.",
      hu: "A Pitti-palota egy hatalmas reneszÁƒÂ¡nsz palota FirenzÁƒÂ©ben, amely a Medici csalÁƒÂ¡d egyik fÁ…‘ otthonÁƒÂ¡vÁƒÂ¡ vÁƒÂ¡lt. GalÁƒÂ©riÁƒÂ¡i ÁƒÂ©s kertjei ma firenzei mÁ…Â±vÁƒÂ©szetet, hatalmat ÁƒÂ©s ÁƒÂ­zlÁƒÂ©st mutatnak be ÁƒÂ©vszÁƒÂ¡zadokon ÁƒÂ¡t.",
      ro: "Palatul Pitti este un vast palat renascentist din FlorenÈ”ºa, care a devenit una dintre principalele reÈâ„¢edinÈ”ºe ale familiei Medici. Galeriile Èâ„¢i grČÆ’dinile sale prezintČÆ’ acum secole de artČÆ’, putere Èâ„¢i rafinament florentin."
    },
    facts: {
      en: ["The palace now contains several museums, including the Palatine Gallery.", "Behind it lie the Boboli Gardens, one of Italy's most influential historic gardens."],
      de: ["Der Palast beherbergt heute mehrere Museen, darunter die Palatina-Galerie.", "Hinter ihm liegen die Boboli-GÁƒÂ¤rten, einer der einflussreichsten historischen GÁƒÂ¤rten Italiens."],
      hu: ["A palota ma tÁƒÂ¶bb mÁƒÂºzeumnak ad otthont, kÁƒÂ¶ztÁƒÂ¼k a Palatina-kÁƒÂ©ptÁƒÂ¡rnax is.", "MÁƒÂ¶gÁƒÂ¶tte terÁƒÂ¼lnek el a Boboli-kert, OlaszorszÁƒÂ¡g egyik legbefolyÁƒÂ¡sosabb tÁƒÂ¶rtÁƒÂ©nelmi kertje."],
      ro: ["Palatul adČÆ’posteÈâ„¢te acum mai multe muzee, inclusiv Galeria PalatinČÆ’.", "ÁƒŽn spatele lui se aflČÆ’ GrČÆ’dinile Boboli, unul dintre cele mai influente grČÆ’dini istorice din Italia."]
    },
    image: "/geo-images/italy/palazzo-pitti.webp",
    descriptionAdvanced: {
      de: "Der Palazzo Pitti in Florenz ist ein monumentaler Renaissance-Palast, der ursprünglich für die Familie Pitti erbaut wurde. Später wurde er zur Hauptresidenz der Medici und der herrschenden Familien der Toskana. Hinter dem Palast erstrecken sich die weitläufigen Boboli-Gärten. Heute beherbergt er bedeutende Museen, darunter die Galleria Palatina mit Werken von Raffael.",
      hu: "A firenzei Pitti-palota egy monumentális reneszánsz palota, amely eredetileg a Pitti család számára épült. Később a Mediciek és Toszkána uralkodó családjainak fő rezidenciája lett. A palota mögött terül el a kiterjedt Boboli-kert. Ma jelentős múzeumoknak ad otthont, köztük a Galleria Palatinának, ahol Raffaello művei láthatók.",
      ro: "Palazzo Pitti din Florența este un palat renascentist monumental, construit inițial pentru familia Pitti. Ulterior, a devenit reședința principală a familiei Medici și a familiilor domnitoare din Toscana. În spatele palatului se întind vastele Grădini Boboli. Astăzi, găzduiește muzee importante, inclusiv Galleria Palatina cu opere de Rafael.",
      en: "The Pitti Palace in Florence is a monumental Renaissance palace originally built for the Pitti family. It later became the primary residence of the Medici and the ruling families of Tuscany. Behind the palace lie the extensive Boboli Gardens. Today, it houses significant museums, including the Palatine Gallery with works by Raphael.",
    },
    factsAdvanced: {
      de: ["Der Bau begann im Jahr 1458.", "Die Medici erwarben den Palast im Jahr 1549.", "Der Boboli-Garten umfasst etwa 45.000 m².", "Beherbergt über 500 bedeutende Renaissance-Gemälde.", "Wurde von 1865 bis 1871 als königliche Residenz genutzt.", "Die Fassade besteht aus rustiziertem Mauerwerk."],
      hu: ["Az építkezés 1458-ban kezdődött.", "A Medici család 1549-ben vásárolta meg a palotát.", "A Boboli-kert területe körülbelül 45 000 m².", "Több mint 500 jelentős reneszánsz festményt őriznek itt.", "1865 és 1871 között királyi rezidenciaként szolgált.", "A homlokzat rusztikus kőfaragással készült."],
      ro: ["Construcția a început în anul 1458.", "Familia Medici a achiziționat palatul în 1549.", "Grădinile Boboli acoperă aproximativ 45.000 m².", "Găzduiește peste 500 de picturi renascentiste importante.", "A fost folosit ca reședință regală între 1865 și 1871.", "Fațada este realizată din zidărie rustică."],
      en: ["Construction began in the year 1458.", "The Medici purchased the palace in 1549.", "The Boboli Gardens cover approximately 45,000 m².", "Houses over 500 significant Renaissance paintings.", "Used as a royal residence from 1865 to 1871.", "The facade is made of rusticated stonework."],
    },
  },
  {
    id: "reggia-di-caserta",
    type: "historical",
    parent: "reg-campania",
    coords: [14.3142, 41.0731],
    name: { de: "KÁƒÂ¶nigspalast von Caserta", hu: "Casertai kirÁƒÂ¡lyi palota", ro: "Palatul Regal din Caserta", en: "Royal Palace of Caserta" },
    description: {
      en: "The Royal Palace of Caserta is a monumental Bourbon palace near Naples, created to rival the grandeur of Versailles. Its vast rooms, ceremonial staircases, and planned park make it one of the largest royal residences in Europe.",
      de: "Der KÁƒÂ¶nigspalast von Caserta ist ein monumentaler Bourbonenpalast in der NÁƒÂ¤he von Neapel, der mit der Pracht von Versailles konkurrieren sollte. Seine riesigen RÁƒÂ¤ume, Zeremonientreppen und die geplante Parkanlage machen ihn zu einer der grÁƒÂ¶ÁƒŁ¸ten kÁƒÂ¶niglichen Residenzen Europas.",
      hu: "A Casertai kirÁƒÂ¡lyi palota egy monumentÁƒÂ¡lis Bourbon-palota NÁƒÂ¡poly kÁƒÂ¶zelÁƒÂ©ben, amelyet Versailles nagysÁƒÂ¡gÁƒÂ¡val vetekedve ÁƒÂ©pÁƒÂ­tettek. Hatalmas termei, dÁƒÂ­szlÁƒÂ©pcsÁ…‘i ÁƒÂ©s tervezett parkja EurÁƒ³pa egyik legnagyobb uralkodÁƒ³i rezidenciÁƒÂ¡jÁƒÂ¡vÁƒÂ¡ teszik.",
      ro: "Palatul Regal din Caserta este un palat bourbon monumental de lÁƒÂ¢ngČÆ’ Napoli, creat pentru a rivaliza cu grandoarea de la Versailles. SČÆ’lile sale vaste, scČÆ’rile ceremoniale Èâ„¢i parcul proiectat ÁƒÂ®l fac una dintre cele mai mari reÈâ„¢edinÈ”ºe regale din Europa."
    },
    facts: {
      en: ["Architect Luigi Vanvitelli designed both the palace and its formal park.", "It is a UNESCO World Heritage site and one of Italy's largest palaces."],
      de: ["Der Architekt Luigi Vanvitelli entwarf sowohl den Palast als auch den formalen Park.", "Es ist UNESCO-Welterbe und einer der grÁƒÂ¶ÁƒŁ¸ten PalÁƒÂ¤ste Italiens."],
      hu: ["Luigi Vanvitelli ÁƒÂ©pÁƒÂ­tÁƒÂ©sz tervezte a palotÁƒÂ¡t ÁƒÂ©s a formÁƒÂ¡lis parkot is.", "UNESCO VilÁƒÂ¡gÁƒÂ¶rÁƒÂ¶ksÁƒÂ©gi helyszÁƒÂ­n, ÁƒÂ©s OlaszorszÁƒÂ¡g egyik legnagyobb palotÁƒÂ¡ja."],
      ro: ["Arhitectul Luigi Vanvitelli a proiectat atÁƒÂ¢t palatul, cÁƒÂ¢t Èâ„¢i parcul formal.", "Este sit UNESCO Èâ„¢i unul dintre cele mai mari palate din Italia."]
    },
    image: "/geo-images/italy/reggia-di-caserta.webp",
    descriptionAdvanced: {
      de: "Der Königspalast von Caserta ist eine ehemalige königliche Residenz der Bourbonen und zählt zu den größten Palästen Europas. Das Bauwerk wurde im 18. Jahrhundert vom Architekten Luigi Vanvitelli entworfen. Der Palast ist für seine prunkvollen Säle und den riesigen Park mit spektakulären Wasserfällen bekannt. Er wurde als Konkurrenz zu Versailles konzipiert.",
      hu: "A casertai királyi palota a Bourbonok egykori rezidenciája, és Európa egyik legnagyobb palotája. Az épületet a 18. században tervezte Luigi Vanvitelli építész. A palota pompás termeiről és a hatalmas, látványos vízesésekkel díszített parkjáról ismert. A versailles-i kastély vetélytársának szánták.",
      ro: "Palatul Regal din Caserta este o fostă reședință regală a Bourbonilor și este unul dintre cele mai mari palate din Europa. Edificiul a fost proiectat în secolul al XVIII-lea de arhitectul Luigi Vanvitelli. Palatul este renumit pentru sălile sale fastuoase și parcul imens cu cascade spectaculoase. A fost conceput ca un rival pentru Versailles.",
      en: "The Royal Palace of Caserta is a former royal residence of the Bourbons and is one of the largest palaces in Europe. The building was designed in the 18th century by architect Luigi Vanvitelli. The palace is known for its lavish halls and the massive park featuring spectacular waterfalls. It was designed to compete with Versailles.",
    },
    factsAdvanced: {
      de: ["Der Grundstein wurde im Jahr 1752 gelegt.", "Der Palast verfügt über 1.200 Zimmer.", "Die Anlage umfasst eine Fläche von 47.000 m².", "Der Park erstreckt sich über eine Länge von 3 km.", "Gehört seit 1997 zum UNESCO-Weltkulturerbe.", "Das königliche Hoftheater wurde 1769 eingeweiht."],
      hu: ["Az alapkövet 1752-ben rakták le.", "A palotának 1200 szobája van.", "Az épületegyüttes területe 47 000 m².", "A park 3 kilométer hosszan nyúlik el.", "1997 óta az UNESCO Világörökség része.", "A királyi udvari színházat 1769-ben avatták fel."],
      ro: ["Piatra de temelie a fost pusă în anul 1752.", "Palatul dispune de 1.200 de camere.", "Complexul ocupă o suprafață de 47.000 m².", "Parcul se întinde pe o lungime de 3 km.", "Face parte din Patrimoniul UNESCO din 1997.", "Teatrul regal de curte a fost inaugurat în 1769."],
      en: ["The foundation stone was laid in 1752.", "The palace contains 1,200 rooms.", "The complex covers an area of 47,000 m².", "The park stretches over a length of 3 km.", "A UNESCO World Heritage site since 1997.", "The Royal Court Theater was inaugurated in 1769."],
    },
  },
  {
    id: "palazzo-vecchio",
    type: "historical",
    parent: "florence",
    coords: [11.2562, 43.7695],
    name: { de: "Palazzo Vecchio", hu: "Palazzo Vecchio", ro: "Palazzo Vecchio", en: "Palazzo Vecchio" },
    description: {
      en: "Palazzo Vecchio is Florence's medieval town hall and one of the city's strongest symbols of civic power. Its tower and richly decorated interiors preserve the atmosphere of Florence's political and artistic past.",
      de: "Der Palazzo Vecchio ist das mittelalterliche Rathaus von Florenz und eines der stÁƒÂ¤rksten Symbole der stÁƒÂ¤dtischen Macht. Sein Turm und die reich verzierten InnenrÁƒÂ¤ume bewahren die AtmosphÁƒÂ¤re der politischen und kÁƒÂ¼nstlerischen Vergangenheit der Stadt.",
      hu: "A Palazzo Vecchio Firenze kÁƒÂ¶zÁƒÂ©pkori vÁƒÂ¡roshÁƒÂ¡za ÁƒÂ©s a vÁƒÂ¡rosi hatalom egyik legerÁ…‘sebb szimbÁƒ³luma. Tornya ÁƒÂ©s gazdagon dÁƒÂ­szÁƒÂ­tett belsÁ…‘ terei Á…‘rzik Firenze politikai ÁƒÂ©s mÁ…Â±vÁƒÂ©szeti mÁƒÂºltjÁƒÂ¡nak hangulatÁƒÂ¡t.",
      ro: "Palazzo Vecchio este primČÆ’ria medievalČÆ’ a FlorenÈ”ºei Èâ„¢i unul dintre cele mai puternice simboluri ale puterii civice a oraÈâ„¢ului. Turnul sČÆ’u Èâ„¢i interioarele bogat decorate pČÆ’streazČÆ’ atmosfera trecutului politic Èâ„¢i artistic al FlorenÈ”ºei."
    },
    facts: {
      en: ["The Arnolfo Tower rises above Piazza della Signoria.", "It was once the seat of the Florentine government and the Medici court."],
      de: ["Der Arnolfo-Turm ragt ÁƒÂ¼ber die Piazza della Signoria auf.", "Es war einst Sitz der florentinischen Regierung und des Medici-Hofes."],
      hu: ["Az Arnolfo-torony a Piazza della Signoria fÁƒÂ¶lÁƒÂ© magasodik.", "Egykor a firenzei kormÁƒÂ¡ny ÁƒÂ©s a Medici-udvar szÁƒÂ©khelye volt."],
      ro: ["Turnul Arnolfo se ridicČÆ’ deasupra Piazza della Signoria.", "A fost odinioarČÆ’ sediul guvernului florentin Èâ„¢i al curÈ”ºii Medici."]
    },
    image: "/geo-images/italy/palazzo-vecchio.webp",
    descriptionAdvanced: {
      de: "Der Palazzo Vecchio in Florenz ist das Rathaus der Stadt und ein Symbol ihrer Geschichte. Das festungsähnliche Gebäude mit dem markanten Arnolfo-Turm dominiert die Piazza della Signoria. Im Inneren befindet sich der prächtige Saal der Fünfhundert, der für seine monumentalen Fresken bekannt ist. Vor dem Eingang steht eine Kopie von Michelangelos David.",
      hu: "A firenzei Palazzo Vecchio a város városháza és történelmének szimbóluma. Az erődnek beillő épület a jellegzetes Arnolfo-toronnyal uralja a Piazza della Signoriát. Belsejében található az Ötszázak terme, amely monumentális freskóiról híres. A bejárat előtt Michelangelo Dávid-szobrának másolata áll.",
      ro: "Palazzo Vecchio din Florența este primăria orașului și un simbol al istoriei sale. Clădirea asemănătoare unei cetăți, cu turnul proeminent Arnolfo, domină Piazza della Signoria. În interior se află fastuoasa Sală a celor Cinci Sute, renumită pentru frescele sale monumentale. În fața intrării se află o copie a lui David de Michelangelo.",
      en: "Palazzo Vecchio in Florence is the city's town hall and a symbol of its history. The fortress-like building with its prominent Arnolfo Tower dominates Piazza della Signoria. Inside is the magnificent Hall of the Five Hundred, famous for its monumental frescoes. A copy of Michelangelo's David stands in front of the entrance.",
    },
    factsAdvanced: {
      de: ["Der Bau begann im Jahr 1299.", "Der Arnolfo-Turm ist 94 Meter hoch.", "Der Saal der Fünfhundert wurde 1494 erbaut.", "Diente den Medici als Residenz bis 1540.", "Beherbergt die 'Maske von Dante'.", "Die Fassade besteht aus massivem Naturstein."],
      hu: ["Az építkezés 1299-ben kezdődött.", "Az Arnolfo-torony magassága 94 méter.", "Az Ötszázak terme 1494-ben épült.", "1540-ig a Medici család rezidenciája volt.", "Itt őrzik 'Dante halotti maszkját'.", "A homlokzat tömör terméskőből készült."],
      ro: ["Construcția a început în anul 1299.", "Turnul Arnolfo are o înălțime de 94 de metri.", "Sala celor Cinci Sute a fost construită în 1494.", "A servit drept reședință familiei Medici până în 1540.", "Adăpostește „Masca lui Dante”.", "Fațada este realizată din piatră masivă."],
      en: ["Construction began in the year 1299.", "The Arnolfo Tower is 94 meters high.", "The Hall of the Five Hundred was built in 1494.", "Served as the Medici residence until 1540.", "Houses the 'Death Mask of Dante'.", "The facade is built with massive natural stone."],
    },
  },
  {
    id: "castel-sant-angelo",
    type: "historical",
    parent: "rome",
    coords: [12.4663, 41.9031],
    name: { de: "Engelsburg", hu: "AngyalvÁƒÂ¡r", ro: "Castelul Sant'Angelo", en: "Castel Sant'Angelo" },
    description: {
      en: "Castel Sant'Angelo began as the mausoleum of Emperor Hadrian and later became a papal fortress in Rome. Its layered history, riverfront position, and link to the Vatican make it one of the city's most distinctive monuments.",
      de: "Die Engelsburg begann als Mausoleum des Kaisers Hadrian und wurde spÁƒÂ¤ter zu einer pÁƒÂ¤pstlichen Festung in Rom. Ihre vielschichtige Geschichte, die Lage am Fluss und die Verbindung zum Vatikan machen sie zu einem der markantesten Monumente der Stadt.",
      hu: "A Castel Sant'Angelo eredetileg Hadrianus csÁƒÂ¡szÁƒÂ¡r mauzÁƒ³leuma volt, majd kÁƒÂ©sÁ…‘bb pÁƒÂ¡pai erÁ…‘ddÁƒÂ© vÁƒÂ¡lt RÁƒ³mÁƒÂ¡ban. RÁƒÂ©tegezett tÁƒÂ¶rtÁƒÂ©nelme, folyÁƒ³parti elhelyezkedÁƒÂ©se ÁƒÂ©s a VatikÁƒÂ¡nnal valÁƒ³ kapcsolata a vÁƒÂ¡ros egyik legegyedibb emlÁƒÂ©kmÁ…Â±vÁƒÂ©vÁƒÂ© teszi.",
      ro: "Castel Sant'Angelo a ÁƒÂ®nceput ca mausoleu al ÁƒÂ®mpČÆ’ratului Hadrian Èâ„¢i a devenit ulterior o fortČÆ’reaÈ”ºČÆ’ papalČÆ’ la Roma. Istoria sa stratificatČÆ’, poziÈ”ºia pe malul Tibrului Èâ„¢i legČÆ’tura cu Vaticanul ÁƒÂ®l fac unul dintre cele mai distinctive monumente ale oraÈâ„¢ului."
    },
    facts: {
      en: ["A hidden passage called the Passetto links the castle to Vatican City.", "It later served as a fortress, prison, and papal refuge."],
      de: ["Ein geheimer Gang, das Passetto, verbindet die Burg mit dem Vatikan.", "SpÁƒÂ¤ter diente sie als Festung, GefÁƒÂ¤ngnis und Zufluchtsort fÁƒÂ¼r PÁƒÂ¤pste."],
      hu: ["A rejtett Passetto folyosÁƒ³ kÁƒÂ¶ti ÁƒÂ¶ssze a vÁƒÂ¡rat a VatikÁƒÂ¡nnal.", "KÁƒÂ©sÁ…‘bb erÁ…‘dkÁƒÂ©nt, bÁƒÂ¶rtÁƒÂ¶nkÁƒÂ©nt ÁƒÂ©s pÁƒÂ¡pai menedÁƒÂ©kkÁƒÂ©nt is szolgÁƒÂ¡lt."],
      ro: ["Un pasaj ascuns, Passetto, leagČÆ’ castelul de Vatican.", "Mai tÁƒÂ¢rziu a servit ca fortČÆ’reaÈ”ºČÆ’, ÁƒÂ®nchisoare Èâ„¢i refugiu papal."]
    },
    image: "/geo-images/italy/castel-sant-angelo.webp",
    descriptionAdvanced: {
      de: "Die Engelsburg in Rom wurde ursprünglich als Mausoleum für Kaiser Hadrian im 2. Jahrhundert errichtet. Später wurde sie in eine päpstliche Festung umgewandelt und durch einen geheimen Gang mit dem Vatikan verbunden. Das Gebäude diente auch als Gefängnis und Zufluchtsort für die Päpste in Krisenzeiten. Heute ist es ein bedeutendes Nationalmuseum.",
      hu: "A római Angyalvár eredetileg Hadrianus császár mauzóleumaként épült az i. sz. 2. században. Később pápai erőddé alakították, és egy titkos folyosóval kötötték össze a Vatikánnal. Az épület börtönként és a pápák menedékhelyeként is szolgált válságos időkben. Ma jelentős nemzeti múzeum.",
      ro: "Castelul Sant'Angelo din Roma a fost construit inițial ca mausoleu pentru împăratul Hadrian în secolul al II-lea. Ulterior, a fost transformat în fortăreață papală și legat de Vatican printr-un pasaj secret. Clădirea a servit și ca închisoare și refugiu pentru papi în perioade de criză. Astăzi este un muzeu național important.",
      en: "Castel Sant'Angelo in Rome was originally built as a mausoleum for Emperor Hadrian in the 2nd century. It was later converted into a papal fortress and connected to the Vatican by a secret passage. The building also served as a prison and a refuge for popes during times of crisis. Today, it is a prominent national museum.",
    },
    factsAdvanced: {
      de: ["Der Bau wurde im Jahr 139 n. Chr. vollendet.", "Die Engelsstatue auf der Spitze stammt von 1753.", "Der 'Passetto di Borgo' ist 800 Meter lang.", "Hadrians Asche wurde hier beigesetzt.", "Wurde im 14. Jahrhundert zur Festung ausgebaut.", "Die Engelsbrücke wurde im Jahr 134 n. Chr. erbaut."],
      hu: ["Az építkezés i. sz. 139-ben fejeződött be.", "A tetején lévő angyalszobor 1753-ból származik.", "A 'Passetto di Borgo' hossza 800 méter.", "Hadrianus hamvait itt helyezték el.", "A 14. században építették ki erőddé.", "Az Angyalhíd i. sz. 134-ben épült."],
      ro: ["Construcția a fost finalizată în anul 139 d.Hr.", "Statuia îngerului din vârf datează din 1753.", "„Passetto di Borgo” are o lungime de 800 de metri.", "Cenușa lui Hadrian a fost depusă aici.", "A fost consolidat ca fortăreață în secolul al XIV-lea.", "Podul Sant'Angelo a fost construit în anul 134 d.Hr."],
      en: ["Construction was completed in 139 AD.", "The angel statue on top dates from 1753.", "The 'Passetto di Borgo' is 800 meters long.", "Hadrian's ashes were interred here.", "It was converted into a fortress in the 14th century.", "Sant'Angelo Bridge was built in 134 AD."],
    },
  },
  {
    id: "dolomiti",
    type: "landmark",
    parent: "reg-veneto",
    coords: [11.8, 46.35],
    name: { de: "Dolomiten", hu: "Dolomitok", ro: "DolomiÈ”ºi", en: "Dolomites" },
    description: {
      en: "The Dolomites are a spectacular limestone mountain range in northern Italy known for their pale cliffs and dramatic spires. They are prized for hiking, skiing, and some of the most memorable alpine scenery in Europe.",
      de: "Die Dolomiten sind eine spektakulÁƒÂ¤re Kalkstein-Gebirgskette in Norditalien, die fÁƒÂ¼r ihre hellen Felsen und dramatischen Zinnen bekannt ist. Sie sind beliebt zum Wandern, Skifahren und wegen ihrer unvergesslichen Alpenlandschaften.",
      hu: "A Dolomitok egy lÁƒÂ¡tvÁƒÂ¡nyos, mÁƒÂ©szkÁ…‘bÁ…‘l ÁƒÂ¡llÁƒ³ hegylÁƒÂ¡nc Áƒ”°szak-OlaszorszÁƒÂ¡gban, amely vilÁƒÂ¡gos sziklÁƒÂ¡irÁƒ³l ÁƒÂ©s drÁƒÂ¡mai csÁƒÂºcsairÁƒ³l hÁƒÂ­res. Kedvelt hely tÁƒÂºrÁƒÂ¡zÁƒÂ¡shoz, sielÁƒÂ©shez ÁƒÂ©s EurÁƒ³pa egyik legemlÁƒÂ©kezetesebb alpesi tÁƒÂ¡jÁƒÂ¡hoz.",
      ro: "DolomiÈ”ºii sunt un lanÈ”º muntos spectaculos din calcar din nordul Italiei, cunoscut pentru stÁƒÂ¢ncile sale deschise la culoare Èâ„¢i turnurile dramatice. Sunt apreciaÈ”ºi pentru drumeÈ”ºii, schi Èâ„¢i unele dintre cele mai memorabile peisaje alpine din Europa."
    },
    facts: {
      en: ["They were inscribed as a UNESCO World Heritage site in 2009.", "Their peaks are famous for the alpenglow effect called enrosadira."],
      de: ["Sie wurden 2009 als UNESCO-Welterbe eingetragen.", "Ihre Gipfel sind fÁƒÂ¼r das AlpenglÁƒÂ¼hen bekannt, das als Enrosadira bezeichnet wird."],
      hu: ["2009-ben UNESCO VilÁƒÂ¡gÁƒÂ¶rÁƒÂ¶ksÁƒÂ©ggÁƒÂ© nyilvÁƒÂ¡nÁƒÂ­tottÁƒÂ¡k.", "CsÁƒÂºcsaik hÁƒÂ­resek az enrosadira nevÁ…Â± alpesi pirkadÁƒÂ¡srÁƒ³l."],
      ro: ["Au fost inscriÈâ„¢i ca sit UNESCO ÁƒÂ®n 2009.", "VÁƒÂ¢rfurile lor sunt celebre pentru fenomenul de alpenglow numit enrosadira."]
    },
    image: "/geo-images/italy/dolomiti.webp",
    descriptionAdvanced: {
      de: "Die Dolomiten sind eine Gebirgsgruppe in den italienischen Alpen und bekannt für ihre markanten Kalksteinfelsen. Die charakteristischen Gipfel leuchten bei Sonnenuntergang oft rötlich, ein Phänomen namens Alpenglühen. Das Gebiet ist ein bedeutendes Ziel für Skifahrer und Wanderer. Seit 2009 gehören weite Teile der Dolomiten zum UNESCO-Weltnaturerbe.",
      hu: "A Dolomitok az olasz Alpok egyik hegységcsoportja, amely jellegzetes mészkőszikláiról ismert. A karakteres csúcsok naplementekor gyakran vöröses színben tündökölnek, ezt a jelenséget alpenglühennek nevezik. A terület a síelők és túrázók fontos célpontja. A Dolomitok nagy része 2009 óta az UNESCO Világörökség része.",
      ro: "Dolomiții sunt un grup muntos din Alpii italieni, cunoscuți pentru stâncile lor calcaroase distinctive. Vârfurile caracteristice capătă adesea o nuanță roșiatică la apus, fenomen numit Alpenglühen. Zona este o destinație importantă pentru schiori și excursioniști. Din 2009, mari părți din Dolomiți sunt incluse în Patrimoniul Mondial UNESCO.",
      en: "The Dolomites are a mountain range in the Italian Alps known for their distinctive limestone rock formations. The characteristic peaks often glow reddish at sunset, a phenomenon known as alpenglow. The area is a major destination for skiers and hikers. Since 2009, large parts of the Dolomites have been listed as a UNESCO World Natural Heritage site.",
    },
    factsAdvanced: {
      de: ["Die Marmolada ist mit 3.343 Metern der höchste Gipfel.", "Bestehen aus magnesiumhaltigem Kalkstein (Dolomit).", "Die Drei Zinnen sind das berühmteste Wahrzeichen.", "Erstrecken sich über fünf italienische Provinzen.", "Wurden 2009 zum UNESCO-Weltnaturerbe erklärt.", "Waren Schauplatz heftiger Kämpfe im Ersten Weltkrieg."],
      hu: ["A Marmolada a legmagasabb csúcs (3343 méter).", "Magnéziumtartalmú mészkőből (dolomit) épülnek fel.", "A Drei Zinnen (Három nővér) a leghíresebb jelképük.", "Öt olasz tartomány területén húzódnak keresztül.", "2009-ben nyilvánították UNESCO Világörökséggé.", "Az első világháborúban heves harcok színhelye volt."],
      ro: ["Marmolada este cel mai înalt vârf, având 3.343 metri.", "Sunt compuși din calcar magnezian (dolomit).", "Cele Trei Cime sunt cel mai faimos simbol al lor.", "Se întind pe teritoriul a cinci provincii italiene.", "Au fost declarați sit UNESCO în anul 2009.", "Au fost teatrul unor lupte grele în Primul Război Mondial."],
      en: ["Marmolada is the highest peak at 3,343 meters.", "Composed of magnesium-rich limestone (dolomite).", "The Tre Cime di Lavaredo is the most famous landmark.", "They span across five Italian provinces.", "Declared a UNESCO World Heritage site in 2009.", "The range was a front line in World War I."],
    },
  },
  {
    id: "amalfi-coast",
    type: "landmark",
    parent: "reg-campania",
    coords: [14.65, 40.63],
    name: { de: "AmalfikÁƒÂ¼ste", hu: "Amalfi-part", ro: "Coasta Amalfi", en: "Amalfi Coast" },
    description: {
      en: "The Amalfi Coast is a dramatic stretch of coastline in Campania famous for its cliffs, pastel towns, and terraced lemon groves. It is one of Italy's most iconic landscapes and a UNESCO World Heritage site.",
      de: "Die AmalfikÁƒÂ¼ste ist ein dramatischer KÁƒÂ¼stenabschnitt in Kampanien, berÁƒÂ¼hmt fÁƒÂ¼r seine Klippen, pastellfarbenen Orte und terrassierten Zitronenhaine. Sie ist eine der ikonischsten Landschaften Italiens und UNESCO-Welterbe.",
      hu: "Az Amalfi-part egy drÁƒÂ¡mai partszakasz CampaniÁƒÂ¡ban, amely sziklafalairÁƒ³l, pasztellszÁƒÂ­nÁ…Â± vÁƒÂ¡rosairÁƒ³l ÁƒÂ©s teraszos citromligeteirÁ…‘l hÁƒÂ­res. OlaszorszÁƒÂ¡g egyik legikonikusabb tÁƒÂ¡ja ÁƒÂ©s UNESCO VilÁƒÂ¡gÁƒÂ¶rÁƒÂ¶ksÁƒÂ©gi helyszÁƒÂ­n.",
      ro: "Coasta Amalfi este o porÈ”ºiune dramaticČÆ’ de litoral din Campania, faimoasČÆ’ pentru stÁƒÂ¢ncile sale, oraÈâ„¢ele pastelate Èâ„¢i terasele cu lČÆ’mÁƒÂ¢i. Este unul dintre cele mai iconice peisaje ale Italiei Èâ„¢i sit UNESCO."
    },
    facts: {
      en: ["The coastline is dotted with towns like Positano, Amalfi, and Ravello.", "Its steep terraces have supported lemons, olives, and vines for centuries."],
      de: ["Die KÁƒÂ¼ste ist mit Orten wie Positano, Amalfi und Ravello gesÁƒÂ¤umt.", "Ihre steilen Terrassen tragen seit Jahrhunderten Zitronen, Oliven und Reben."],
      hu: ["A partszakaszon olyan vÁƒÂ¡rosok sorakoznak, mint Positano, Amalfi ÁƒÂ©s Ravello.", "Meredek teraszai ÁƒÂ©vszÁƒÂ¡zadok Áƒ³ta citromot, olajbogyÁƒ³t ÁƒÂ©s szÁ…‘lÁ…‘t hordoznak."],
      ro: ["Coasta este presČÆ’ratČÆ’ cu oraÈâ„¢e precum Positano, Amalfi Èâ„¢i Ravello.", "Terasele abrupte susÈ”ºin de secole lČÆ’mÁƒÂ¢i, mČÆ’sline Èâ„¢i viÈ”ºČÆ’ de vie."]
    },
    image: "/geo-images/italy/amalfi-coast.webp",
    descriptionAdvanced: {
      de: "Die Amalfiküste erstreckt sich über 50 Kilometer entlang der südlichen Seite der Halbinsel von Sorrent in der Region Kampanien. Die zerklüftete Küstenlinie ist für ihre steilen Klippen und die terrassenförmig angelegten Weinberge bekannt. Dreizehn Gemeinden bilden dieses Gebiet, das seit 1997 zum UNESCO-Welterbe gehört.",
      hu: "Az Amalfi-part egy 50 kilométeres bányászati partszakasz Campania régióban, a Sorrentói-félsziget déli oldalán. A terület meredek sziklafalairól, teraszos citromültetvényeiről és színes falvairól ismert. Tizenhárom település alkotja a térséget, amely 1997 óta az UNESCO Világörökség része.",
      ro: "Coasta Amalfi se întinde pe o distanță de 50 de kilometri de-a lungul laturii sudice a Peninsulei Sorrentine din regiunea Campania. Linia de coastă accidentată este cunoscută pentru stâncile sale abrupte și podgoriile terasate. Treisprezece municipalități alcătuiesc această zonă, care face parte din patrimoniul UNESCO din 1997.",
      en: "The Amalfi Coast spans 50 kilometers along the southern side of the Sorrentine Peninsula in the Campania region. The rugged coastline is known for its steep cliffs and terraced vineyards overlooking the Tyrrhenian Sea. Thirteen municipalities form this area, which has been a UNESCO World Heritage site since 1997.",
    },
    factsAdvanced: {
      de: ["UNESCO-Weltkulturerbe seit 1997", "Gesamtlänge der Küste beträgt 50 km", "Umfasst 13 verschiedene Gemeinden", "Höchster Punkt ist der Monte Faito mit 1131 m", "Bekannt für die Produktion von Limoncello", "Die Straße SS163 wurde 1852 fertiggestellt"],
      hu: ["1997-ben lett az UNESCO Világörökség része", "A partszakasz teljes hossza 50 kilométer", "Összesen 13 önálló település tartozik hozzá", "Legmagasabb pontja a Monte Faito (1131 m)", "A térség híres a Limoncello likőrgyártásról", "Az SS163-as főút 1852-ben készült el"],
      ro: ["Inclusă în patrimoniul UNESCO în 1997", "Lungimea totală a coastei este de 50 km", "Cuprinde 13 municipalități distincte", "Cel mai înalt punct este Monte Faito la 1131 m", "Faimoasă pentru producția de lichior Limoncello", "Drumul SS163 a fost finalizat în anul 1852"],
      en: ["UNESCO World Heritage site since 1997", "Total coastline length is 50 kilometers", "Comprises 13 distinct municipalities", "Highest point is Monte Faito at 1,131 meters", "Famous for the production of Limoncello liqueur", "The SS163 coastal road was completed in 1852"],
    },
  },
  {
    id: "uffizi",
    type: "historical",
    parent: "florence",
    coords: [11.2557, 43.7678],
    name: { de: "Uffizien", hu: "Uffizi KÁƒÂ©ptÁƒÂ¡r", ro: "Galeria Uffizi", en: "Uffizi Gallery" },
    description: {
      en: "The Uffizi Gallery in Florence is one of the world's most important art museums and a symbol of the Renaissance. Its rooms preserve masterpieces by Botticelli, Leonardo da Vinci, Michelangelo, and many others.",
      de: "Die Uffizien in Florenz sind eines der wichtigsten Kunstmuseen der Welt und ein Symbol der Renaissance. Ihre RÁƒÂ¤ume bewahren Meisterwerke von Botticelli, Leonardo da Vinci, Michelangelo und vielen anderen.",
      hu: "A firenzei Uffizi KÁƒÂ©ptÁƒÂ¡r a vilÁƒÂ¡g egyik legfontosabb mÁ…Â±vÁƒÂ©szeti mÁƒÂºzeuma ÁƒÂ©s a reneszÁƒÂ¡nsz szimbÁƒ³luma. Termei Botticelli, Leonardo da Vinci, Michelangelo ÁƒÂ©s sok mÁƒÂ¡s mester remekmÁ…Â±veit Á…‘rzik.",
      ro: "Galeria Uffizi din FlorenÈ”ºa este unul dintre cele mai importante muzee de artČÆ’ din lume Èâ„¢i un simbol al RenaÈâ„¢terii. SČÆ’lile sale pČÆ’streazČÆ’ capodopere de Botticelli, Leonardo da Vinci, Michelangelo Èâ„¢i mulÈ”ºi alÈ”ºii."
    },
    facts: {
      en: ["It began as the offices of the Medici government before becoming a museum.", "The gallery is especially famous for Botticelli's 'The Birth of Venus'."],
      de: ["Es begann als VerwaltungsgebÁƒÂ¤ude der Medici-Regierung, bevor es zum Museum wurde.", "Die Galerie ist besonders fÁƒÂ¼r Botticellis 'Geburt der Venus' berÁƒÂ¼hmt."],
      hu: ["Eredetileg a Medici-kormÁƒÂ¡ny hivatali ÁƒÂ©pÁƒÂ¼lete volt, majd mÁƒÂºzeummÁƒÂ¡ vÁƒÂ¡lt.", "A kÁƒÂ©ptÁƒÂ¡r kÁƒÂ¼lÁƒÂ¶nÁƒÂ¶sen Botticelli 'VÁƒÂ©nusz szÁƒÂ¼letÁƒÂ©se' cÁƒÂ­mÁ…Â± kÁƒÂ©pÁƒÂ©rÁ…‘l hÁƒÂ­res."],
      ro: ["A ÁƒÂ®nceput ca birouri ale guvernului Medici, apoi a devenit muzeu.", "Galeria este faimoasČÆ’ ÁƒÂ®n special pentru 'NaÈâ„¢terea lui Venus' a lui Botticelli."]
    },
    image: "/geo-images/italy/uffizi.webp",
    descriptionAdvanced: {
      de: "Die Uffizien in Florenz beherbergen eine der bedeutendsten Kunstsammlungen der Welt mit Schwerpunkt auf der italienischen Renaissance. Das Gebäude wurde 1560 von Giorgio Vasari im Auftrag von Cosimo I. de' Medici entworfen. Heute umfasst das Museum Meisterwerke von Künstlern wie Botticelli, Michelangelo und Leonardo da Vinci.",
      hu: "A firenzei Uffizi Galéria a világ egyik legjelentősebb művészeti múzeuma, amely az olasz reneszánsz alkotásaira összpontosít. Az épületet 1560-ban Giorgio Vasari tervezte I. Cosimo de' Medici megrendelésére. A gyűjtemény olyan mesterek műveit tartalmazza, mint Botticelli, Michelangelo és Leonardo da Vinci.",
      ro: "Galeria Uffizi din Florența adăpostește una dintre cele mai importante colecții de artă din lume, axată pe Renașterea italiană. Clădirea a fost proiectată în 1560 de Giorgio Vasari la comanda lui Cosimo I de' Medici. Astăzi, muzeul include capodopere de Botticelli, Michelangelo și Leonardo da Vinci.",
      en: "The Uffizi Gallery in Florence houses one of the world's most significant art collections, focusing on the Italian Renaissance. The building was designed in 1560 by Giorgio Vasari under the commission of Cosimo I de' Medici. Today, the museum features masterpieces by artists such as Botticelli, Michelangelo, and Leonardo da Vinci.",
    },
    factsAdvanced: {
      de: ["Baubeginn des Gebäudes war im Jahr 1560", "Eröffnung für die Öffentlichkeit seit 1765", "Beherbergt Botticellis 'Die Geburt der Venus'", "Jährlich besuchen über 2 Millionen Menschen das Museum", "Verfügt über insgesamt 101 Ausstellungsräume", "Der Vasarikorridor verbindet es mit dem Palazzo Pitti"],
      hu: ["Az épület építése 1560-ban kezdődött", "1765 óta látogatható a nyilvánosság számára", "Itt őrzik Botticelli 'Vénusz születése' művét", "Évente több mint 2 millió látogatót fogad", "Összesen 101 kiállítóteremmel rendelkezik", "A Vasari-folyosó köti össze a Palazzo Pittivel"],
      ro: ["Construcția clădirii a început în anul 1560", "Deschis publicului larg începând cu anul 1765", "Găzduiește opera 'Nașterea lui Venus' de Botticelli", "Peste 2 milioane de turiști vizitează muzeul anual", "Dispune de un număr total de 101 săli de expoziție", "Coridorul Vasari face legătura cu Palazzo Pitti"],
      en: ["Construction of the building began in 1560", "Open to the general public since 1765", "Houses Botticelli's 'The Birth of Venus'", "Receives over 2 million visitors annually", "Features a total of 101 exhibition rooms", "The Vasari Corridor connects it to Palazzo Pitti"],
    },
  },
  {
    id: "piazza-san-marco",
    type: "landmark",
    parent: "venice",
    coords: [12.3379, 45.434],
    name: { de: "Markusplatz", hu: "Szent MÁƒÂ¡rk tÁƒÂ©r", ro: "PiaÈ”ºa San Marco", en: "St. Mark's Square" },
    description: {
      en: "St. Mark's Square is the ceremonial heart of Venice, framed by the Basilica, the Campanile, and the Doge's Palace. Its open space, arcades, and waterfront views make it one of the city's most famous gathering places.",
      de: "Der Markusplatz ist das zeremonielle Herz Venedigs, umrahmt von der Basilika, dem Campanile und dem Dogenpalast. Sein offener Raum, die Arkaden und der Blick aufs Wasser machen ihn zu einem der berÁƒÂ¼hmtesten Treffpunkte der Stadt.",
      hu: "A Szent MÁƒÂ¡rk tÁƒÂ©r Velence ceremoniÁƒÂ¡lis kÁƒÂ¶zpontja, amelyet a bazilika, a Campanile ÁƒÂ©s a DÁƒ³zse-palota fog kÁƒÂ¶rbe. Nyitott tere, ÁƒÂ¡rkÁƒÂ¡dsorai ÁƒÂ©s vÁƒÂ­zparti panorÁƒÂ¡mÁƒÂ¡i a vÁƒÂ¡ros egyik leghÁƒÂ­resebb talÁƒÂ¡lkozÁƒ³helyÁƒÂ©vÁƒÂ© teszik.",
      ro: "Piazza San Marco este inima ceremonialČÆ’ a VeneÈ”ºiei, ÁƒÂ®ncadratČÆ’ de BazilicČÆ’, Campanile Èâ„¢i Palatul Dogilor. SpaÈ”ºiul deschis, arcadele Èâ„¢i vederea spre apČÆ’ ÁƒÂ®l fac unul dintre cele mai cunoscute locuri de ÁƒÂ®ntÁƒÂ¢lnire ale oraÈâ„¢ului."
    },
    facts: {
      en: ["Napoleon once called it the 'drawing room of Europe'.", "High tides can flood the square during the periodic acqua alta."],
      de: ["Napoleon nannte ihn einst das 'Wohnzimmer Europas'.", "Bei Acqua alta kann der Platz regelmÁƒÂ¤ÁƒŁ¸ig ÁƒÂ¼berflutet werden."],
      hu: ["Napoleon egyszer EurÁƒ³pa nappalijÁƒÂ¡nak nevezte.", "A kÁƒÂ¶zÁƒÂ¶ssÁƒÂ©gi dagÁƒÂ¡ly, az acqua alta idejÁƒÂ©n a tÁƒÂ©r elÁƒÂ¡radhat."],
      ro: ["Napoleon l-a numit cÁƒÂ¢ndva 'sufrageria Europei'.", "Mareele ÁƒÂ®nalte pot inunda piaÈ”ºa ÁƒÂ®n timpul episodului periodic de acqua alta."]
    },
    image: "/geo-images/italy/piazza-san-marco.webp",
    descriptionAdvanced: {
      de: "Die Piazza San Marco ist der zentrale öffentliche Platz von Venedig und einer der bekanntesten Plätze Italiens. Er wird von bedeutenden Bauwerken wie dem Markusdom, dem Campanile und dem Dogenpalast begrenzt. Napoleon nannte den Platz einst den 'schönsten Festsaal Europas' aufgrund seiner architektonischen Einheit.",
      hu: "A Szent Márk tér Velence központi tere és Olaszország egyik legismertebb közösségi helyszíne. Olyan jelentős épületek határolják, mint a Szent Márk-bazilika, a Campanile harangtorony és a Dózse-palota. Napóleon egykor 'Európa legszebb szalonjának' nevezte a teret építészeti egysége miatt.",
      ro: "Piazza San Marco este piața publică centrală din Veneția și una dintre cele mai faimoase piețe din Italia. Este delimitată de structuri importante precum Bazilica San Marco, Campanila și Palatul Dogilor. Napoleon a numit odată piața 'cel mai frumos salon al Europei' datorită unității sale arhitecturale.",
      en: "Piazza San Marco is the central public square of Venice and one of Italy's most famous locations. It is bordered by significant structures such as St. Mark's Basilica, the Campanile, and the Doge's Palace. Napoleon once called the square the \"finest drawing room in Europe\" due to its architectural unity.",
    },
    factsAdvanced: {
      de: ["Länge des Platzes beträgt etwa 175 Meter", "Der Markusdom wurde im Jahr 1094 geweiht", "Der Campanile stürzte 1902 ein und wurde 1912 neu gebaut", "Der tiefste Punkt Venedigs liegt auf diesem Platz", "Die Prokuratien umgeben den Platz auf drei Seiten", "Pflasterung mit Trachytsteinen erfolgte im Jahr 1723"],
      hu: ["A tér teljes hossza körülbelül 175 méter", "A Szent Márk-bazilikát 1094-ben szentelték fel", "A Campanile 1902-ben összeomlott, 1912-ben újjáépült", "Ez Velence legalacsonyabban fekvő pontja", "A Prokuráciák épületei három oldalról veszik körül", "A trachitkővel való burkolás 1723-ban készült el"],
      ro: ["Lungimea pieței este de aproximativ 175 metri", "Bazilica San Marco a fost sfințită în anul 1094", "Campanila s-a prăbușit în 1902 și a fost reconstruită în 1912", "Reprezintă cel mai jos punct din orașul Veneția", "Clădirile Procuratie înconjoară piața pe trei laturi", "Pavarea cu piatră trahit a fost realizată în 1723"],
      en: ["The length of the square is approximately 175 meters", "St. Mark's Basilica was consecrated in 1094", "The Campanile collapsed in 1902 and was rebuilt in 1912", "It is the lowest point in the city of Venice", "The Procuratie buildings surround the square on three sides", "Paving with trachyte stones was completed in 1723"],
    },
  },
  {
    id: "duomo-firenze",
    type: "historical",
    parent: "florence",
    coords: [11.2556, 43.7732],
    name: { de: "Kathedrale von Florenz", hu: "Firenzei dÁƒ³m", ro: "Domul din FlorenÈ”ºa", en: "Florence Cathedral" },
    description: {
      en: "Florence Cathedral, known as the Duomo, dominates the skyline of the city with Brunelleschi's famous dome. It is a masterpiece of Gothic and Renaissance engineering and one of Italy's most recognized sacred buildings.",
      de: "Die Kathedrale von Florenz, bekannt als der Duomo, dominiert mit ihrer berÁƒÂ¼hmten Kuppel von Brunelleschi die Silhouette der Stadt. Sie ist ein Meisterwerk gotischer und Renaissance-Ingenieurskunst und eines der bekanntesten SakralgebÁƒÂ¤ude Italiens.",
      hu: "A firenzei dÁƒ³m Brunelleschi hÁƒÂ­res kupolÁƒÂ¡jÁƒÂ¡val uralja a vÁƒÂ¡ros sziluettjÁƒÂ©t. A gÁƒ³tikus ÁƒÂ©s reneszÁƒÂ¡nsz mÁƒÂ©rnÁƒÂ¶ki tudÁƒÂ¡s remekmÁ…Â±ve, OlaszorszÁƒÂ¡g egyik legismertebb szakrÁƒÂ¡lis ÁƒÂ©pÁƒÂ¼lete.",
      ro: "Domul din FlorenÈ”ºa, cunoscut drept Duomo, dominČÆ’ silueta oraÈâ„¢ului prin faimoasa cupolČÆ’ a lui Brunelleschi. Este o capodoperČÆ’ a ingineriei gotice Èâ„¢i renascentiste Èâ„¢i una dintre cele mai cunoscute clČÆ’diri sacre din Italia."
    },
    facts: {
      en: ["The dome was an engineering breakthrough that influenced architecture across Europe.", "The nearby bell tower was designed by Giotto."],
      de: ["Die Kuppel war ein ingenieurtechnischer Durchbruch mit Einfluss auf ganz Europa.", "Der nahe Glockenturm wurde von Giotto entworfen."],
      hu: ["A kupola mÁƒÂ©rnÁƒÂ¶ki ÁƒÂ¡ttÁƒÂ¶rÁƒÂ©st jelentett, amely EurÁƒ³pa-szerte hatÁƒÂ¡ssal volt az ÁƒÂ©pÁƒÂ­tÁƒÂ©szetre.", "A kÁƒÂ¶zeli harangtornyot Giotto tervezte."],
      ro: ["Cupola a reprezentat un salt inginereÈâ„¢c care a influenÈ”ºat arhitectura din ÁƒÂ®ntreaga EuropČÆ’.", "ClopotniÈ”ºa din apropiere a fost proiectatČÆ’ de Giotto."]
    },
    image: "/geo-images/italy/duomo-firenze.webp",
    descriptionAdvanced: {
      de: "Die Kathedrale von Florenz, offiziell Cattedrale di Santa Maria del Fiore, ist das Wahrzeichen der Stadt. Sie wurde 1296 begonnen und ist vor allem für ihre gewaltige Kuppel von Filippo Brunelleschi bekannt. Die Fassade ist mit polychromen Marmorplatten in Grün, Weiß und Rosa verkleidet.",
      hu: "A firenzei dóm, hivatalos nevén Cattedrale di Santa Maria del Fiore, a város jelképe. Építése 1296-ban kezdődött, és leginkább Filippo Brunelleschi hatalmas kupolájáról ismert. A homlokzatot zöld, fehér és rózsaszín polikróm márványlapok díszítik.",
      ro: "Catedrala din Florența, oficial Cattedrale di Santa Maria del Fiore, este simbolul orașului. Construcția sa a început în 1296 și este faimoasă în special pentru cupola sa uriașă realizată de Filippo Brunelleschi. Fațada este decorată cu plăci de marmură policromă în verde, alb și roz.",
      en: "The Florence Cathedral, officially Cattedrale di Santa Maria del Fiore, is the primary landmark of the city. Construction began in 1296 and it is most famous for its massive dome engineered by Filippo Brunelleschi. The exterior is clad in polychrome marble panels in shades of green, white, and pink.",
    },
    factsAdvanced: {
      de: ["Grundsteinlegung erfolgte am 8. September 1296", "Die Kuppel wurde im Jahr 1436 fertiggestellt", "Gesamtlänge der Kathedrale beträgt 153 Meter", "Höhe der Kuppel bis zur Laterne ist 114,5 Meter", "Die Fassade wurde erst 1887 vollendet", "Viertgrößte Kirche der Welt nach Grundfläche"],
      hu: ["Az alapkövet 1296. szeptember 8-án rakták le", "A kupola építése 1436-ban fejeződött be", "A katedrális teljes hossza 153 méter", "A kupola magassága a lámpással együtt 114,5 méter", "A homlokzat végleges formáját csak 1887-ben nyerte el", "A világ negyedik legnagyobb temploma alapterület szerint"],
      ro: ["Piatra de temelie a fost pusă la 8 septembrie 1296", "Cupola a fost finalizată în anul 1436", "Lungimea totală a catedralei este de 153 metri", "Înălțimea cupolei până la lanternă este de 114,5 metri", "Fațada actuală a fost finalizată abia în 1887", "A patra cea mai mare biserică din lume ca suprafață"],
      en: ["The foundation stone was laid on September 8, 1296", "The dome was completed in the year 1436", "Total length of the cathedral is 153 meters", "Height of the dome to the lantern is 114.5 meters", "The facade was completed as late as 1887", "World's fourth largest church by floor area"],
    },
  },
  {
    id: "vatican-museums",
    type: "historical",
    parent: "vatican-city",
    coords: [12.4536, 41.9065],
    name: { de: "Vatikanische Museen", hu: "VatikÁƒÂ¡ni MÁƒÂºzeumok", ro: "Muzeele Vaticanului", en: "Vatican Museums" },
    description: {
      en: "The Vatican Museums hold one of the world's greatest art collections inside the Vatican City walls. Their vast route includes the Sistine Chapel, where Michelangelo's ceiling and Last Judgment remain unforgettable.",
      de: "Die Vatikanischen Museen bewahren innerhalb der Mauern der Vatikanstadt eine der grÁƒÂ¶ÁƒŁ¸ten Kunstsammlungen der Welt. Ihr ausgedehnter Rundgang umfasst die Sixtinische Kapelle, in der Michelangelos Decke und JÁƒÂ¼ngstes Gericht unvergesslich bleiben.",
      hu: "A VatikÁƒÂ¡ni MÁƒÂºzeumok a vilÁƒÂ¡g egyik legnagyobb mÁ…Â±vÁƒÂ©szeti gyÁ…Â±jtemÁƒÂ©nyÁƒÂ©t Á…‘rzik a VatikÁƒÂ¡n falain belÁƒÂ¼l. A hatalmas kiÁƒÂ¡llÁƒÂ­tÁƒÂ¡si ÁƒÂºtvonal rÁƒÂ©sze a Sixtus-kÁƒÂ¡polna is, ahol Michelangelo mennyezete ÁƒÂ©s UtolsÁƒ³ ÁƒÂ­tÁƒÂ©lete felejthetetlen.",
      ro: "Muzeele Vaticanului adČÆ’postesc una dintre cele mai mari colecÈ”ºii de artČÆ’ din lume ÁƒÂ®n interiorul zidurilor Vaticanului. Traseul lor vast include Capela SixtinČÆ’, unde tavanul Èâ„¢i Judecata de Apoi ale lui Michelangelo rČÆ’mÁƒÂ¢n de neuitat."
    },
    facts: {
      en: ["They contain more than 70,000 works of art across multiple museums and galleries.", "The museum route leads many visitors directly to the Sistine Chapel."],
      de: ["Sie enthalten mehr als 70.000 Kunstwerke in mehreren Museen und Galerien.", "Der Museumsrundgang fÁƒÂ¼hrt viele Besucher direkt in die Sixtinische Kapelle."],
      hu: ["TÁƒÂ¶bb mint 70 000 mÁ…Â±alkotÁƒÂ¡st ÁƒÂ¶lelnek fel tÁƒÂ¶bb mÁƒÂºzeumban ÁƒÂ©s galÁƒÂ©riÁƒÂ¡ban.", "A mÁƒÂºzeumi ÁƒÂºtvonal sok lÁƒÂ¡togatÁƒ³t kÁƒÂ¶zvetlenÁƒÂ¼l a Sixtus-kÁƒÂ¡polnÁƒÂ¡hoz vezet."],
      ro: ["AdČÆ’postesc peste 70.000 de lucrČÆ’ri de artČÆ’ ÁƒÂ®n mai multe muzee Èâ„¢i galerii.", "Traseul muzeului duce mulÈ”ºi vizitatori direct la Capela SixtinČÆ’."]
    },
    image: "/geo-images/italy/vatican-museums.webp",
    descriptionAdvanced: {
      de: "Die Vatikanischen Museen beherbergen die riesige Kunstsammlung, die von den Päpsten im Laufe der Jahrhunderte zusammengetragen wurde. Sie umfassen 54 Galerien und beherbergen bedeutende Werke wie die Sixtinische Kapelle und die Stanzen des Raffael. Gegründet wurden sie im frühen 16. Jahrhundert durch Papst Julius II.",
      hu: "A Vatikáni Múzeumok a pápák által az évszázadok során összegyűjtött hatalmas művészeti gyűjteménynek adnak otthont. Összesen 54 galériából állnak, és olyan jelentős alkotásokat tartalmaznak, mint a Sixtus-kápolna és Raffaello stanzái. A múzeumot a 16. század elején alapította II. Gyula pápa.",
      ro: "Muzeele Vaticane adăpostesc vasta colecție de artă adunată de papi de-a lungul secolelor. Acestea cuprind 54 de galerii și găzduiesc lucrări importante precum Capela Sixtină și Stanze di Raffaello. Au fost fondate la începutul secolului al XVI-lea de către Papa Iulius al II-lea.",
      en: "The Vatican Museums house the vast collection of art amassed by Popes over the centuries. They comprise 54 galleries and host significant works such as the Sistine Chapel and the Raphael Rooms. The institution was founded in the early 16th century by Pope Julius II.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1506 durch Papst Julius II.", "Gesamtlänge des Besucherwegs beträgt etwa 7 km", "Die Sixtinische Kapelle wurde 1481 fertiggestellt", "Beherbergt jährlich rund 6 Millionen Besucher", "Umfasst insgesamt 54 verschiedene Museen und Galerien", "Die Laokoon-Gruppe war das erste Ausstellungsstück"],
      hu: ["II. Gyula pápa alapította 1506-ban", "A látogatói útvonal teljes hossza kb. 7 km", "A Sixtus-kápolna építése 1481-ben fejeződött be", "Évente körülbelül 6 millió látogatót fogad", "Összesen 54 különböző múzeumból és galériából áll", "A Laokoón-csoport volt az első szerzeménye"],
      ro: ["Fondate în anul 1506 de către Papa Iulius al II-lea", "Lungimea totală a traseului de vizitare este de 7 km", "Capela Sixtină a fost finalizată în anul 1481", "Primește anual aproximativ 6 milioane de vizitatori", "Cuprinde un număr total de 54 de galerii și muzee", "Grupul statuar Laocoon a fost prima piesă achiziționată"],
      en: ["Founded in 1506 by Pope Julius II", "Total length of the visitor route is about 7 kilometers", "The Sistine Chapel was completed in 1481", "Receives approximately 6 million visitors annually", "Consists of 54 distinct galleries and museums", "The Laocoön sculpture was the first item collected"],
    },
  },
  {
    id: "trevi-fountain",
    type: "landmark",
    parent: "rome",
    coords: [12.4833, 41.9009],
    name: { de: "Trevi-Brunnen", hu: "Trevi-kÁƒÂºt", ro: "FÁƒÂ¢ntÁƒÂ¢na Trevi", en: "Trevi Fountain" },
    description: {
      en: "The Trevi Fountain is Rome's most famous fountain and one of the grandest Baroque monuments in the city. Its dramatic sculpture, flowing water, and mythological figures make it a magnet for visitors and coin tosses.",
      de: "Der Trevi-Brunnen ist Roms berÁƒÂ¼hmtester Brunnen und eines der groÁƒŁ¸artigsten BarockdenkmÁƒÂ¤ler der Stadt. Seine dramatische Skulptur, das flieÁƒŁ¸ende Wasser und die mythologischen Figuren machen ihn zum Magneten fÁƒÂ¼r Besucher und MÁƒÂ¼nzwÁƒÂ¼rfel.",
      hu: "A Trevi-kÁƒÂºt RÁƒ³ma leghÁƒÂ­resebb kÁƒÂºtja ÁƒÂ©s a vÁƒÂ¡ros egyik legnagyszerÁ…Â±bb barokk emlÁƒÂ©kmÁ…Â±ve. DrÁƒÂ¡mai szobrai, ÁƒÂ¡radÁƒ³ vize ÁƒÂ©s mitolÁƒ³giai alakjai vonzzÁƒÂ¡k a lÁƒÂ¡togatÁƒ³kat ÁƒÂ©s az ÁƒÂ©rmÁƒÂ©ket.",
      ro: "FÁƒÂ¢ntÁƒÂ¢na Trevi este cea mai faimoasČÆ’ fÁƒÂ¢ntÁƒÂ¢nČÆ’ din Roma Èâ„¢i unul dintre cele mai grandioase monumente baroce ale oraÈâ„¢ului. Sculptura sa dramaticČÆ’, apa curgČÆ’toare Èâ„¢i figurile mitologice o transformČÆ’ ÁƒÂ®ntr-un magnet pentru vizitatori Èâ„¢i monede."
    },
    facts: {
      en: ["Tradition says tossing a coin ensures a return to Rome.", "It is fed by the ancient Aqua Virgo aqueduct."],
      de: ["Der Brauch besagt, dass das Werfen einer MÁƒÂ¼nze die RÁƒÂ¼ckkehr nach Rom sichert.", "Sie wird vom antiken AquÁƒÂ¤dukt Aqua Virgo gespeist."],
      hu: ["A hagyomÁƒÂ¡ny szerint egy ÁƒÂ©rme bedobÁƒÂ¡sa biztosÁƒÂ­tja a visszatÁƒÂ©rÁƒÂ©st RÁƒ³mÁƒÂ¡ba.", "Az Áƒ³kori Aqua Virgo vÁƒÂ­zvezetÁƒÂ©k tÁƒÂ¡plÁƒÂ¡lja."],
      ro: ["TradiÈ”ºia spune cČÆ’ aruncarea unei monede asigurČÆ’ o revenire la Roma.", "Este alimentatČÆ’ de vechiul apeduct Aqua Virgo."]
    },
    image: "/geo-images/italy/trevi-fountain.webp",
    descriptionAdvanced: {
      de: "Der Trevi-Brunnen ist der größte und bekannteste Barockbrunnen in Rom. Er wurde von Nicola Salvi entworfen und 1762 von Giuseppe Pannini fertiggestellt. Der Brunnen zeigt den Meeresgott Oceanus auf einem muschelförmigen Wagen, der von zwei Seepferden gezogen wird.",
      hu: "A Trevi-kút Róma legnagyobb és legismertebb barokk szökőkútja. Nicola Salvi tervezte, és 1762-ben Giuseppe Pannini fejezte be. A kút Ókeanosz tengeristent ábrázolja egy kagyló alakú szekéren, amelyet két tengeri csikó vontat.",
      ro: "Fontana di Trevi este cea mai mare și mai cunoscută fântână barocă din Roma. A fost proiectată de Nicola Salvi și finalizată în 1762 de Giuseppe Pannini. Fântâna îl înfățișează pe zeul mării Oceanus pe un car în formă de scoică, tras de doi cai de mare.",
      en: "The Trevi Fountain is the largest and most famous Baroque fountain in Rome. It was designed by Nicola Salvi and completed in 1762 by Giuseppe Pannini. The fountain depicts the sea god Oceanus on a shell-shaped chariot pulled by two sea horses.",
    },
    factsAdvanced: {
      de: ["Höhe des Brunnens beträgt 26,3 Meter", "Breite des Bauwerks erreicht 49,15 Meter", "Fertigstellung erfolgte im Jahr 1762", "Täglich fließen ca. 80.000 Kubikmeter Wasser", "Es werden jährlich etwa 1,5 Millionen Euro eingeworfen", "Besteht hauptsächlich aus Travertin-Gestein"],
      hu: ["A szökőkút magassága 26,3 méter", "A szerkezet szélessége 49,15 méter", "A kút 1762-ben készült el teljesen", "Naponta kb. 80 000 köbméter víz áramlik át rajta", "Évente kb. 1,5 millió eurónyi érmét dobnak bele", "Fő építőanyaga a travertin mészkő"],
      ro: ["Înălțimea fântânii este de 26,3 metri", "Lățimea construcției atinge 49,15 metri", "Finalizarea lucrărilor a avut loc în anul 1762", "Zilnic circulă aproximativ 80.000 metri cubi de apă", "Se colectează anual circa 1,5 milioane de euro din monede", "Construită în principal din piatră de travertin"],
      en: ["The height of the fountain is 26.3 meters", "The width of the structure reaches 49.15 meters", "Construction was fully completed in 1762", "About 80,000 cubic meters of water flow daily", "Approximately 1.5 million euros in coins are collected yearly", "Primarily constructed using Travertine stone"],
    },
  },
  {
    id: "pantheon",
    type: "landmark",
    parent: "rome",
    coords: [12.4769, 41.8986],
    name: { de: "Pantheon", hu: "Pantheon", ro: "Pantheon", en: "Pantheon" },
    description: {
      en: "The Pantheon is one of the best-preserved monuments of ancient Rome and a masterpiece of engineering. Its immense dome and central oculus still inspire architects and visitors nearly two millennia after it was rebuilt.",
      de: "Das Pantheon ist eines der am besten erhaltenen Monumente des antiken Rom und ein Meisterwerk der Ingenieurskunst. Seine gewaltige Kuppel und das zentrale Opaion begeistern noch fast zwei Jahrtausende nach dem Wiederaufbau Architekten und Besucher.",
      hu: "A Pantheon az Áƒ³kori RÁƒ³ma egyik legjobban megÁ…‘rzÁƒÂ¶tt emlÁƒÂ©kmÁ…Â±ve ÁƒÂ©s a mÁƒÂ©rnÁƒÂ¶ki tudÁƒÂ¡s mestermÁ…Â±ve. Hatalmas kupolÁƒÂ¡ja ÁƒÂ©s kÁƒÂ¶zponti oculusa majdnem kÁƒÂ©tezer ÁƒÂ©vvel az ÁƒÂ¡tÁƒÂ©pÁƒÂ­tÁƒÂ©s utÁƒÂ¡n is lenyÁ…Â±gÁƒÂ¶zi az ÁƒÂ©pÁƒÂ­tÁƒÂ©szeket ÁƒÂ©s lÁƒÂ¡togatÁƒ³kat.",
      ro: "Pantheonul este unul dintre cele mai bine pČÆ’strate monumente ale Romei antice Èâ„¢i o capodoperČÆ’ a ingineriei. Cupola sa imensČÆ’ Èâ„¢i oculusul central continuČÆ’ sČÆ’ inspire arhitecÈ”ºi Èâ„¢i vizitatori la aproape douČÆ’ milenii dupČÆ’ reconstruire."
    },
    facts: {
      en: ["Its dome remains the largest unreinforced concrete dome in the world.", "The oculus is the building's main source of light and a signature feature."],
      de: ["Seine Kuppel bleibt die grÁƒÂ¶ÁƒŁ¸te unverstÁƒÂ¤rkte Betonkuppel der Welt.", "Das Opaion ist die Hauptlichtquelle des GebÁƒÂ¤udes und sein Markenzeichen."],
      hu: ["KupolÁƒÂ¡ja ma is a vilÁƒÂ¡g legnagyobb vasalatlan betonkupolÁƒÂ¡ja.", "Az oculus az ÁƒÂ©pÁƒÂ¼let fÁ…‘ fÁƒÂ©nyforrÁƒÂ¡sa ÁƒÂ©s egyik legfÁ…‘bb jellegzetessÁƒÂ©ge."],
      ro: ["Cupola sa rČÆ’mÁƒÂ¢ne cea mai mare cupolČÆ’ din beton nearmat din lume.", "Oculusul este principala sursČÆ’ de luminČÆ’ Èâ„¢i semnČÆ’tura clČÆ’dirii."]
    },
    image: "/geo-images/italy/pantheon.webp",
    descriptionAdvanced: {
      de: "Das Pantheon in Rom ist eines der am besten erhaltenen Bauwerke der römischen Antike. Es wurde um 126 n. Chr. unter Kaiser Hadrian vollendet und diente ursprünglich als Tempel für alle Götter. Die freitragende Betonkuppel mit ihrer zentralen Öffnung, dem Oculus, gilt als Meisterwerk der Ingenieurskunst.",
      hu: "A római Pantheon az ókori római építészet egyik legjobban megőrzött emléke. Kr. u. 126 körül fejezték be Hadrianus császár uralkodása alatt, és eredetileg minden isten templomaként szolgált. A központi nyílással (oculus) ellátott öntöttbeton kupola a mérnöki tudomány mesterműve.",
      ro: "Panteonul din Roma este una dintre cele mai bine conservate clădiri din antichitatea romană. A fost finalizat în jurul anului 126 d.Hr. sub împăratul Hadrian și a servit inițial ca templu pentru toți zeii. Cupola sa din beton, cu o deschidere centrală numită oculus, este o capodoperă a ingineriei.",
      en: "The Pantheon in Rome is one of the best-preserved buildings from Roman antiquity. It was completed around 126 AD under Emperor Hadrian and originally served as a temple to all gods. The unreinforced concrete dome with its central opening, the oculus, is considered a masterpiece of engineering.",
    },
    factsAdvanced: {
      de: ["Fertigstellung unter Hadrian um 126 n. Chr.", "Durchmesser der Kuppel beträgt 43,3 Meter", "Der Oculus hat einen Durchmesser von 9 Metern", "Wurde im Jahr 609 in eine christliche Kirche geweiht", "Grablege des Malers Raffael seit 1520", "Die Vorhalle besteht aus 16 korinthischen Säulen"],
      hu: ["Hadrianus alatt készült el Kr. u. 126 körül", "A kupola belső átmérője 43,3 méter", "Az oculus nyílásának átmérője 9 méter", "609-ben keresztény templommá szentelték", "Raffaello festőművész nyughelye 1520 óta", "Az előcsarnok 16 korinthoszi oszlopból áll"],
      ro: ["Finalizat sub Hadrian în jurul anului 126 d.Hr.", "Diametrul cupolei este de 43,3 metri", "Oculusul central are un diametru de 9 metri", "Sfințit ca biserică creștină în anul 609", "Locul de mormânt al lui Rafael din 1520", "Porticul are 16 coloane corintice masive"],
      en: ["Completed under Hadrian around 126 AD", "Interior diameter of the dome is 43.3 meters", "The oculus has a diameter of 9 meters", "Consecrated as a Christian church in 609 AD", "Burial site of the painter Raphael since 1520", "The portico features 16 massive Corinthian columns"],
    },
  },
  {
    id: "st-peters-square",
    type: "landmark",
    parent: "vatican-city",
    coords: [12.4556, 41.9022],
    name: { de: "Petersplatz", hu: "Szent PÁƒÂ©ter tÁƒÂ©r", ro: "PiaÈ”ºa SfÁƒÂ¢ntul Petru", en: "St. Peter's Square" },
    description: {
      en: "St. Peter's Square is the vast forecourt of St. Peter's Basilica in Vatican City. Its colonnades and open oval shape create one of the most recognizable ceremonial spaces in the world.",
      de: "Der Petersplatz ist der weitlÁƒÂ¤ufige Vorplatz des Petersdoms in der Vatikanstadt. Seine Kolonnaden und die offene ovale Form schaffen einen der weltweit bekanntesten ZeremonienrÁƒÂ¤ume.",
      hu: "A Szent PÁƒÂ©ter tÁƒÂ©r a vatikÁƒÂ¡ni Szent PÁƒÂ©ter-bazilika hatalmas elÁ…‘tere. Oszlopsorai ÁƒÂ©s nyitott ovÁƒÂ¡lis formÁƒÂ¡ja a vilÁƒÂ¡g egyik legismertebb ceremoniÁƒÂ¡lis terÁƒÂ©t hozzÁƒÂ¡k lÁƒÂ©tre.",
      ro: "PiaÈ”ºa SfÁƒÂ¢ntul Petru este vastul forecourt al Bazilicii SfÁƒÂ¢ntul Petru din Vatican. Colonadele Èâ„¢i forma ovalČÆ’ deschisČÆ’ creeazČÆ’ unul dintre cele mai recognoscibile spaÈ”ºii ceremoniale din lume."
    },
    facts: {
      en: ["Bernini designed the square's colonnades in the 17th century.", "The space can hold huge crowds for papal blessings and events."],
      de: ["Bernini entwarf die Kolonnaden des Platzes im 17. Jahrhundert.", "Der Platz kann riesige Menschenmengen fÁƒÂ¼r päpstliche Segnungen und Veranstaltungen aufnehmen."],
      hu: ["Bernini a 17. szÁƒÂ¡zadban tervezte a tÁƒÂ©r oszlopcsarnokait.", "A tÁƒÂ©r hatalmas tÁƒÂ¶megeket kÁƒÂ©pes befogadni pÁƒÂ¡pai ÁƒÂ¡ldÁƒÂ¡sok ÁƒÂ©s esemÁƒÂ©nyek idejÁƒÂ©n."],
      ro: ["Bernini a proiectat colonadele pieÈ”ºei ÁƒÂ®n secolul al XVII-lea.", "SpaÈ”ºiul poate primi mulÈ”ºimi uriaÈâ„¢e pentru binecuvÁƒÂ¢ntČÆ’ri Èâ„¢i evenimente papale."]
    },
    image: "/geo-images/italy/st-peters-square.webp",
    descriptionAdvanced: {
      de: "Der Petersplatz ist der Vorplatz des Petersdoms in der Vatikanstadt und wurde von Gian Lorenzo Bernini entworfen. Die ellipsenförmige Anlage wird von gewaltigen Kolonnaden mit 284 Säulen umschlossen, die symbolisch die 'mütterlichen Arme der Kirche' darstellen. Im Zentrum steht ein antiker ägyptischer Obelisk.",
      hu: "A Szent Péter tér a vatikáni Szent Péter-bazilika előtti hatalmas terület, amelyet Gian Lorenzo Bernini tervezett. Az ellipszis alakú teret 284 oszlopból álló kolonnád veszi körül, amely szimbolikusan az 'egyház anyai karjait' jelképezi. A tér közepén egy ókori egyiptomi obeliszk áll.",
      ro: "Piața Sfântul Petru este marea piață situată în fața Bazilicii Sfântul Petru din Vatican, proiectată de Gian Lorenzo Bernini. Forma eliptică este înconjurată de colonade masive cu 284 de coloane, simbolizând 'brațele materne ale bisericii'. În centru se află un obelisc egiptean antic.",
      en: "St. Peter's Square is the large plaza located directly in front of St. Peter's Basilica in Vatican City, designed by Gian Lorenzo Bernini. The elliptical space is enclosed by massive colonnades with 284 columns, symbolically representing the \"maternal arms of the church.\" An ancient Egyptian obelisk stands at its center.",
    },
    factsAdvanced: {
      de: ["Bauzeit des Platzes war von 1656 bis 1667", "Umfasst insgesamt 284 dorische Säulen", "Auf der Kolonnade stehen 140 Heiligenstatuen", "Der zentrale Obelisk ist 25,5 Meter hoch", "Der Obelisk wurde 1586 an seinen Platz gebracht", "Der Platz kann bis zu 300.000 Menschen fassen"],
      hu: ["A tér építése 1656 és 1667 között zajlott", "Összesen 284 dór oszlop alkotja a kolonnádot", "A kolonnád tetején 140 szent szobra áll", "A központi obeliszk magassága 25,5 méter", "Az obeliszket 1586-ban állították fel a helyére", "A tér befogadóképessége kb. 300 000 fő"],
      ro: ["Construită între anii 1656 și 1667", "Cuprinde un număr total de 284 coloane dorice", "Pe colonade sunt amplasate 140 de statui de sfinți", "Obeliscul central are o înălțime de 25,5 metri", "Obeliscul a fost mutat în poziția actuală în 1586", "Piața are o capacitate de până la 300.000 persoane"],
      en: ["Constructed between 1656 and 1667", "Features a total of 284 Doric columns", "The colonnade is topped by 140 statues of saints", "The central obelisk stands 25.5 meters high", "The obelisk was moved to its current site in 1586", "The square can accommodate up to 300,000 people"],
    },
  },
  {
    id: "piazza-del-campo",
    type: "landmark",
    parent: "reg-toscana",
    coords: [11.328, 43.3189],
    name: { de: "Piazza del Campo", hu: "Piazza del Campo", ro: "Piazza del Campo", en: "Piazza del Campo" },
    description: {
      en: "Piazza del Campo is Siena's famous shell-shaped square and the civic heart of the city. Its medieval architecture and open sloping space create one of the most distinctive urban settings in Italy.",
      de: "Die Piazza del Campo ist der berühmte muschelförmige Platz von Siena und das städtische Herz der Stadt. Ihre mittelalterliche Architektur und die offene, geneigte Fläche schaffen eine der markantesten Stadtkulissen Italiens.",
      hu: "A Piazza del Campo Siena híres, kagyló alakú tere és a város polgári központja. Középkori építészete és lejtős nyitott tere Olaszország egyik legjellegzetesebb városi környezetét hozza létre.",
      ro: "Piazza del Campo este celebra piață în formă de scoică din Siena și inima civică a orașului. Arhitectura medievală și spațiul deschis, în pantă, creează unul dintre cele mai distinctive decoruri urbane din Italia."
    },
    facts: {
      en: ["The Palio di Siena horse race is run here twice each year.", "The square slopes gently toward the central fountain and town hall."],
      de: ["Hier findet zweimal im Jahr das Pferderennen Palio di Siena statt.", "Der Platz fällt sanft zum zentralen Brunnen und zum Rathaus hin ab."],
      hu: ["Itt rendezik meg évente kétszer a Palio di Siena lóversenyt.", "A tér enyhén lejt a központi kút és a városháza felé."],
      ro: ["Aici are loc de două ori pe an cursa de cai Palio di Siena.", "Piața coboară ușor spre fântâna centrală și primărie."]
    },
    image: "/geo-images/italy/piazza-del-campo.webp",
    descriptionAdvanced: {
      de: "Die Piazza del Campo in Siena ist einer der bedeutendsten mittelalterlichen Plätze Europas. Er ist bekannt für seine charakteristische Muschelform und die neun Segmente der Pflasterung, die den 'Rat der Neun' symbolisieren. Hier findet zweimal jährlich das berühmte Pferderennen Palio di Siena statt.",
      hu: "A sienai Piazza del Campo Európa egyik legjelentősebb középkori tere. Jellegzetes kagyló alakjáról és a burkolat kilenc szegmenséről ismert, amelyek a 'Kilencek Tanácsát' jelképezik. Itt rendezik meg évente kétszer a híres Palio di Siena lovasversenyt.",
      ro: "Piazza del Campo din Siena este una dintre cele mai importante piețe medievale din Europa. Este cunoscută pentru forma sa caracteristică de scoică și pentru cele nouă segmente ale pavajului, care simbolizează 'Consiliul celor Nouă'. Aici are loc de două ori pe an celebra cursă de cai Palio di Siena.",
      en: "Piazza del Campo in Siena is one of Europe's greatest medieval squares. It is renowned for its distinct shell shape and the nine segments of its brick paving, which symbolize the \"Council of Nine.\" Twice a year, it hosts the famous Palio di Siena horse race.",
    },
    factsAdvanced: {
      de: ["Pflasterung wurde im Jahr 1349 fertiggestellt", "Umfasst den 102 Meter hohen Torre del Mangia", "Die Fonte Gaia wurde im Jahr 1419 eingeweiht", "Der Platz ist in genau neun Sektoren unterteilt", "Das Rathaus Palazzo Pubblico stammt von 1297", "Palio-Rennen finden am 2. Juli und 16. August statt"],
      hu: ["A tér burkolása 1349-ben fejeződött be", "Itt található a 102 méter magas Torre del Mangia", "A Fonte Gaia kutat 1419-ben avatták fel", "A tér felülete pontosan kilenc szektorra oszlik", "A Palazzo Pubblico városháza 1297-ben épült", "A Palio versenyeket július 2-án és augusztus 16-án tartják"],
      ro: ["Pavajul de cărămidă a fost finalizat în 1349", "Găzduiește Torre del Mangia, înalt de 102 metri", "Fântâna Gaia a fost inaugurată în anul 1419", "Piața este divizată în exact nouă sectoare distincte", "Palazzo Pubblico datează din anul 1297", "Cursele Palio au loc pe 2 iulie și 16 august"],
      en: ["The brick paving was completed in 1349", "Features the 102-meter high Torre del Mangia", "The Fonte Gaia was inaugurated in 1419", "The square is divided into exactly nine sectors", "The Palazzo Pubblico dates back to 1297", "Palio races occur on July 2nd and August 16th"],
    },
  }
];

export const italyAllPoi: POI[] = [
  italyCountry,
  ...italyRegions,
  ...italyCities,
];
