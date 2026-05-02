import { poiExtraItalyCitiesC1 } from "./poiExtraItalyCitiesC1";
import { poiExtraItalyNatureGeschichteC2 } from "./poiExtraItalyNatureGeschichteC2";
import { poiExtraItalyWirtschaftLebenC3 } from "./poiExtraItalyWirtschaftLebenC3";

﻿import type { POI } from "./poi";

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
    descriptionAdvanced: {
      de: "",
      hu: "Lombardia, Olaszország gazdasági motorja, nem csupán Milánó divatvilágáról szól. A régió ad otthont az ország legnagyobb tavainak, mint a Garda-tó és a Comói-tó, melyek az Alpok lábainál fekszenek, lenyűgöző panorámát kínálva. Történelme során a longobárdoktól a Visconti és Sforza családokig számos hatalom formálta, gazdag építészeti és művészeti örökséget hagyva maga után. A Pó-síkság termékeny földjei jelentős mezőgazdasági központtá teszik, különösen a rizstermesztés területén, amely az olyan híres ételek alapja, mint a milánói rizottó. Ez a kettősség – a modern ipar és az ősi tájak találkozása – teszi Lombardiát egyedülállóvá. Földrajz K7 — Európa gazdasági és természeti földrajza.",
      ro: "",
      en: "Lombardy, the economic engine of Italy, is more than just Milan's fashion world. The region is home to the country's largest lakes, such as Lake Garda and Lake Como, which lie at the foot of the Alps, offering stunning panoramic views. Throughout its history, it was shaped by powers from the Lombards to the Visconti and Sforza families, leaving behind a rich architectural and artistic heritage. The fertile lands of the Po Valley make it a significant agricultural center, especially for rice cultivation, which is the basis for famous dishes like Risotto alla Milanese. This duality—the meeting of modern industry and ancient landscapes—is what makes Lombardy unique. Geography K7 — Economic and Natural Geography of Europe."
    },
    factsAdvanced: {
      de: [],
      hu: ["A régióban található a legtöbb UNESCO Világörökségi helyszín Olaszországon belül, beleértve a Valcamonica sziklarajzait.","Lombardia GDP-je önmagában nagyobb, mint számos európai országé.","A Comói-tó több mint 400 méteres mélységével Olaszország legmélyebb tava.","A Franciacorta borvidék világhírű pezsgőket termel, melyeket a klasszikus módszerrel készítenek.","A híres longobárd vaskorona, amelyet évszázadokon át használtak az itáliai királyok koronázásához, Monzában található.","A régióban található a Stelvio Nemzeti Park egy része, amely az Alpok egyik legnagyobb védett területe.","Stradivari, a híres hegedűkészítő Cremonában élt és alkotott, amely ma is a hegedűkészítés fellegvára."],
      ro: [],
      en: [
        "The region has the most UNESCO World Heritage sites within Italy, including the rock drawings of Valcamonica.",
        "Lombardy's GDP alone is larger than that of many European countries.",
        "Lake Como, with a depth of over 400 meters, is the deepest lake in Italy.",
        "The Franciacorta wine region produces world-renowned sparkling wines made with the classic method.",
        "The famous Iron Crown of Lombardy, used for centuries to crown the kings of Italy, is located in Monza.",
        "Part of the Stelvio National Park, one of the largest protected areas in the Alps, is in the region.",
        "Stradivari, the famous violin maker, lived and worked in Cremona, which remains a center for violin making today."
      ]
    }
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
    descriptionAdvanced: {
      de: "",
      hu: "Toszkána az olasz reneszánsz bölcsője, ahol a művészet és a táj elválaszthatatlan egységet alkot. A Firenzében található Uffizi Képtár és a Galleria dell'Accademia a világ legjelentősebb művészeti kincseit őrzik. A régió azonban több, mint a városok; a Val d'Orcia hullámzó dombjai, a ciprusokkal szegélyezett utak és a középkori dombtetőn álló falvak, mint San Gimignano, festői hátteret biztosítanak. A gasztronómia központi szerepet játszik, alapja a helyi, kiváló minőségű alapanyagok, mint az olívaolaj, a Chianti bor és a Chianina marha. Történelem K6 — A reneszánsz és a nagy földrajzi felfedezések.",
      ro: "",
      en: "Tuscany is the cradle of the Italian Renaissance, where art and landscape form an inseparable whole. The Uffizi Gallery and the Galleria dell'Accademia in Florence house some of the world's most important art treasures. However, the region is more than its cities; the rolling hills of Val d'Orcia, roads lined with cypresses, and medieval hilltop villages like San Gimignano provide a picturesque backdrop. Gastronomy plays a central role, based on high-quality local ingredients like olive oil, Chianti wine, and Chianina beef. History K6 — The Renaissance and the Great Geographical Discoveries."
    },
    factsAdvanced: {
      de: [],
      hu: ["Az olasz irodalmi nyelv a toszkán dialektuson alapul, Dante, Petrarca és Boccaccio munkásságának köszönhetően.","A régióban több mint 120 természetvédelmi terület található, ami a biológiai sokféleség megőrzése iránti elkötelezettséget mutatja.","A pisai ferde torony dőlése a puha altalajnak köszönhető, és az építése közel 200 évig tartott.","A Saturnia hőforrásai természetes, kénes vizű medencéket alkotnak, amelyek már az etruszkok és a rómaiak körében is népszerűek voltak.","A 'Super Tuscan' borok az 1970-es években jelentek meg, amikor néhány borász szembement a Chianti Classico szabályaival, hogy új, kiváló minőségű borokat hozzon létre.","Carrara márványbányáiból származik a márvány, amelyet Michelangelo is használt a Dávid-szoborhoz.","Az évente kétszer megrendezett sienai Palio lóverseny egy mélyen gyökerező középkori hagyomány, amelyben a városrészek (contrade) versengenek egymással."],
      ro: [],
      en: [
        "The modern Italian language is based on the Tuscan dialect, thanks to the works of Dante, Petrarch, and Boccaccio.",
        "The region has over 120 nature reserves, demonstrating a commitment to preserving biodiversity.",
        "The lean of the Leaning Tower of Pisa is due to the soft subsoil, and its construction took nearly 200 years.",
        "The thermal springs of Saturnia form natural, sulphurous pools that were popular even among the Etruscans and Romans.",
        "'Super Tuscan' wines emerged in the 1970s when some winemakers went against Chianti Classico rules to create new, high-quality wines.",
        "The marble quarries of Carrara are the source of the marble used by Michelangelo for his David statue.",
        "The Palio horse race in Siena, held twice a year, is a deep-rooted medieval tradition where the city's districts (contrade) compete."
      ]
    }
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
    descriptionAdvanced: {
      de: "",
      hu: "Szicília a Földközi-tenger kulturális olvasztótégelye, ahol a görög templomok, normann katedrálisok és arabeszk díszítésű paloták egymás mellett élnek. Az Etna, Európa legmagasabb aktív vulkánja, folyamatosan formálja a tájat és termékeny talajt biztosít a mezőgazdaságnak, különösen a pisztácia- és citrusfélék termesztésének. A sziget konyhája tükrözi ezt a sokszínűséget: az arancini, a caponata és a cannoli mind a helyi történelem ízeit hordozzák. Palermo nyüzsgő piacaitól a barokk városok, mint Noto és Ragusa eleganciájáig Szicília egyedi és felejthetetlen utazást kínál az időben és a kultúrák között. Földrajz K8 — Vulkanizmus és szeizmikus tevékenységek.",
      ro: "",
      en: "Sicily is the cultural melting pot of the Mediterranean, where Greek temples, Norman cathedrals, and arabesque palaces coexist. Mount Etna, Europe's highest active volcano, constantly shapes the landscape and provides fertile soil for agriculture, especially for pistachios and citrus fruits. The island's cuisine reflects this diversity: arancini, caponata, and cannoli all carry the flavors of local history. From the bustling markets of Palermo to the elegance of baroque towns like Noto and Ragusa, Sicily offers a unique and unforgettable journey through time and cultures. Geography K8 — Volcanism and Seismic Activities."
    },
    factsAdvanced: {
      de: [],
      hu: ["Az agrigentói Templomok Völgye a görög világ egyik legkiemelkedőbb régészeti lelőhelye a görög anyaországon kívül.","A sziget a 'Magna Graecia' (Nagy Görögország) fontos része volt, olyan városokkal, mint Szirakúza, amely egykor Athénnal vetekedett.","A palermói kapucinus katakombákban több ezer mumifikálódott holttestet őriznek, amelyek a 16. és 20. század között éltek.","A szicíliai bábszínház (Opera dei Pupi) az UNESCO Szellemi Kulturális Örökség része.","A sólepárlók Trapani és Marsala környékén festői tájat alkotnak a szélmalmokkal, és kiváló minőségű tengeri sót termelnek.","Szicíliában forgatták a 'Keresztapa' trilógia számos ikonikus jelenetét.","Az Aeoli-szigetek, köztük a folyamatosan aktív Stromboli, a sziget partjainál található vulkáni szigetcsoport."],
      ro: [],
      en: [
        "The Valley of the Temples in Agrigento is one of the most outstanding archaeological sites of the Greek world outside of Greece itself.",
        "The island was an important part of 'Magna Graecia' (Greater Greece), with cities like Syracuse that once rivaled Athens.",
        "The Capuchin Catacombs of Palermo hold thousands of mummified bodies from the 16th to the 20th centuries.",
        "The Sicilian puppet theatre (Opera dei Pupi) is a UNESCO Intangible Cultural Heritage.",
        "The salt pans around Trapani and Marsala, with their windmills, create a picturesque landscape and produce high-quality sea salt.",
        "Many iconic scenes from 'The Godfather' trilogy were filmed in Sicily.",
        "The Aeolian Islands, including the constantly active Stromboli, are a volcanic archipelago off the island's coast."
      ]
    }
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
    descriptionAdvanced: {
      de: "",
      hu: "Veneto régiója sokkal többet kínál Velence csatornáinál. A Dolomitok fenséges csúcsaitól a Garda-tó keleti partjáig és a termékeny Pó-síkságig terjedő táj rendkívül változatos. A régió a Velencei Köztársaság ezeréves történelmi örökségét hordozza, amely a kereskedelem és a művészetek központja volt. Padova és Verona városa is büszkélkedhet gazdag kulturális élettel; előbbi Európa egyik legrégebbi egyetemének, utóbbi pedig Shakespeare Rómeó és Júliájának helyszíne. A Prosecco borvidék dombjai, amelyek ma már az UNESCO Világörökség részét képezik, a világhírű habzóbor hazája. Történelem K5 — Kereskedővárosok a középkorban.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A padovai botanikus kert (1545) a világ legrégebbi egyetemi botanikus kertje, és az UNESCO Világörökség része.","A Bassano del Grappa-i Alpini-híd, amelyet Andrea Palladio tervezett, a hegyi csapatok szimbóluma.","A régióban található a 'Strada del Prosecco', Olaszország első borútja.","Veronában egy római kori aréna található, amely ma is operaelőadásoknak ad otthont, és akusztikája világhírű.","A Velencei-lagúnában található Chioggia várost 'Kis Velencének' is nevezik csatornái és hídjai miatt.","A Tiramisu desszertet a venetói Trevisóban találták fel az 1960-as években.","A régió gazdasága a turizmus mellett jelentős ipari és mezőgazdasági termelésre is támaszkodik."],
      ro: [],
      en: []
    }
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
    descriptionAdvanced: {
      de: "",
      hu: "Lazio, Olaszország szíve, a Római Birodalom és a pápaság történelmének epicentruma. Róma ókori romjai és a Vatikán művészeti kincsei mellett a régió rejtett gyöngyszemeket is kínál. A Castelli Romani vulkanikus tavai, mint az Albano-tó és a Nemi-tó, a rómaiak kedvelt nyári menedékhelyei. Tivoli városa a Villa d'Este lenyűgöző szökőkútjaival és Hadrianus császár hatalmas villájával büszkélkedhet. Az etruszk civilizáció nyomai Tarquinia és Cerveteri nekropoliszaiban fedezhetők fel, amelyek az UNESCO Világörökség részét képezik. Lazio tájai a Tirrén-tenger partjától az Appenninek hegyeiig terjednek, változatos élményeket nyújtva. Történelem K5 — Az ókori Róma.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Az Appia Antica út, az egyik első római út, ma egy regionális park, ahol ókori síremlékek és katakombák találhatók.","A 'Szent Szörnyek Parkja' Bomarzóban egy bizarr, 16. századi szoborkert, tele mitológiai lényekkel.","Frascati városa híres a fehérboráról, amelyet a környék vulkanikus talaján termesztenek.","A régióban található a világ egyik legkisebb országa, a Vatikán.","Ostia Antica, Róma ókori kikötővárosa, Pompejihez hasonlóan lenyűgöző bepillantást enged a római mindennapokba.","A Civita di Bagnoregio egy lassan erodálódó tufasziklára épült, haldokló városként ismert középkori falu.","A tésztaételek, mint a Carbonara, Amatriciana és Cacio e Pepe, mind a lazioi konyhából származnak."],
      ro: [],
      en: []
    }
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
      de: [],
      hu: ["A város 1871 óta az egységes Olaszország fővárosa.","Róma hét dombra épült: Palatinus, Aventinus, Capitolinus, Quirinalis, Viminalis, Esquilinus és Caelius.","A Borghese Galéria és Kert egy lenyűgöző művészeti gyűjteményt rejt egy hatalmas parkban.","Minden évben több millió eurónyi érmét dobnak a Trevi-kútba.","Az Appia Antica, a 'utak királynője', az egyik legrégebbi és stratégiailag legfontosabb római út volt.","Rómában több mint 900 templom található, ami a világon a legtöbb egy városban.","A 'La Sapienza' Egyetemet 1303-ban alapították, Európa egyik legnagyobb egyeteme."],
      ro: [],
      en: []
    }
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
      de: "",
      hu: "Milánó Olaszország pénzügyi és divatfővárosa, ahol a modern felhőkarcolók és a történelmi épületek izgalmas kontrasztot alkotnak. A gótika mesterműve, a Dóm, tetőteraszáról páratlan kilátás nyílik a városra. A Santa Maria delle Grazie-templomban Leonardo da Vinci 'Az utolsó vacsora' című freskója a reneszánsz művészet egyik csúcsa. A Quadrilatero della Moda luxusüzletei a divat szerelmeseinek zarándokhelyei. A Navigli-csatornák mentén esténként pezsgő élet zajlik, a bárok és éttermek hangulatosak. Milánó az üzlet, a művészet és az 'aperitivo' kultúrájának tökéletes elegye. Gazdaságföldrajz K8 — Divatipar és globális márkák.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A La Scala operaház a világ egyik leghíresebb operaháza, 1778-ban nyílt meg.","A város ad otthont Olaszország legrégebbi bevásárlóközpontjának, a Galleria Vittorio Emanuele II-nek.","A milánói rizottó (Risotto alla Milanese) sáfránnyal készül, ami jellegzetes sárga színét adja.","Két világhírű futballcsapat, az AC Milan és az Inter Milan otthona.","A Pirelli-torony a modern olasz építészet egyik első és legjelentősebb példája.","A Brera negyed a művészek és a bohém élet központja, tele galériákkal és hangulatos utcákkal.","Milánóban található a legrégebbi, még működő villamoshálózatiak egyike.","A város a 4. században rövid ideig a Nyugat-Római Birodalom fővárosa volt."],
      ro: [],
      en: []
    }
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
      de: "",
      hu: "Velence, a lagúnák városa, egyedülálló csoda, amely 118 szigetre épült. A Canal Grande, a város fő ütőere, reneszánsz és gótikus palotákkal van szegélyezve, amelyeken a vaporettók és gondolák közlekednek. A Szent Márk tér a város szíve, ahol a bizánci stílusú bazilika, a Dózse-palota és a Campanile harangtorony áll. A szűk sikátorok (calle) és hidak labirintusában eltévedni a legjobb módja a város rejtett zugainak felfedezésének. A velencei karnevál a maszkok és a jelmezek pazar ünnepe. Velence a művészet, a történelem és a romantika páratlan keveréke, amely lassan, de méltóságteljesen küzd az idő és a víz ellen. Történelem K6 — Kereskedőállamok.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Velence több mint 1100 évig volt független köztársaság.","A városban több mint 400 híd található, a leghíresebbek a Rialto-híd és a Sóhajok hídja.","A 'Libreria Acqua Alta' a világ egyik legkülönlegesebb könyvesboltja, ahol a könyveket gondolákban és csónakokban tárolják.","Az Acqua Alta, a periodikus magas vízállás, a város életének természetes része.","A Velencei Biennále a világ egyik legrangosabb kortárs képzőművészeti kiállítása.","A Murano-sziget a híres velencei üveggyártás központja, míg Burano a csipkekészítésről és a színes házakról ismert.","A városban nincsenek autók, a közlekedés kizárólag vízen és gyalogosan történik.","A Campari és az Aperol Spritz népszerű aperitifek, amelyek szorosan kötődnek Velencéhez."],
      ro: [],
      en: []
    }
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
      de: "",
      hu: "Firenze, a reneszánsz bölcsője, olyan, mint egy szabadtéri múzeum. A város látképét a Dóm lenyűgöző, Brunelleschi által tervezett kupolája uralja. Az Uffizi Képtár és a Galleria dell'Accademia a világ legjelentősebb művészeti kincseit őrzik, köztük Botticelli 'Vénusz születését' és Michelangelo 'Dávidját'. A Ponte Vecchio, az Arno folyó felett átívelő középkori híd, ékszerüzleteivel egyedülálló látvány. A Medici család öröksége mindenütt jelen van, a Pitti-palotától a San Lorenzo-templomig. Firenze a művészet, a történelem és a toszkán gasztronómia fellegvára. Művészettörténet K7 — A reneszánsz művészet.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A modern olasz nyelv a firenzei dialektusból fejlődött ki, Dante Alighieri munkásságának köszönhetően.","A Pitti-palota mögött elterülő Boboli-kert az olasz kerttervezés egyik legkorábbi és legfontosabb példája.","Firenze volt az Olasz Királyság fővárosa 1865 és 1871 között.","A városban találták fel a zongorát, Bartolomeo Cristofori munkája révén.","A 'lampredotto', egy pacalból készült szendvics, a helyi street food specialitás.","Az 1966-os nagy árvíz súlyos károkat okozott a város művészeti kincseiben.","A város jelképe a 'Marzocco', a pajzsot tartó oroszlán, Donatello szobrának másolata a Piazza della Signoria-n áll.","Gucci, a híres divatmárka, Firenzében alakult 1921-ben."],
      ro: [],
      en: []
    }
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
      de: "",
      hu: "Nápoly, Dél-Olaszország lüktető szíve, egy város tele ellentmondásokkal és élettel. A Vezúv árnyékában fekvő metropolisz a pizza szülőhazája, ahol a 'vera pizza napoletana' hagyományát szigorúan őrzik. A történelmi központ, az UNESCO Világörökség része, egy szűk utcákból álló labirintus, ahol a mindennapi élet zajos és színes. A föld alatt alagutak és katakombák hálózata húzódik, amely a város egy másik, rejtett arcát mutatja meg. A Nemzeti Régészeti Múzeum a Pompejiből és Herculaneumból származó leletek leggazdagabb gyűjteményének ad otthont. Nápoly egy nyers, autentikus és felejthetetlen olasz élmény. Kultúrtörténet K6 — Ókori római mindennapok.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A nápolyi nyelv egy különálló, gazdag irodalommal rendelkező újlatin nyelv, nem csupán egy olasz dialektus.","A San Carlo Operaház (1737) a legrégebbi, folyamatosan működő operaház Európában.","A 'Spaccanapoli' egy hosszú, egyenes utca, amely kettészeli a város ősi központját.","A nápolyi betlehemkészítés (presepe) egy aprólékos, generációkon átívelő művészeti hagyomány.","A város alatt egy kiterjedt geotermikus alagútrendszer húzódik, amelyet a görögök kezdtek el építeni.","A kávéfogyasztás kultúrája mélyen gyökerezik, a 'caffè sospeso' (felfüggesztett kávé) hagyománya is innen ered.","A 'sfogliatella', egy kagyló alakú, ricottával töltött sütemény, a város ikonikus édessége.","Nápoly ad otthont a világ egyik legrégebbi állami egyetemének, a II. Frigyes Egyetemnek (1224)."],
      ro: [],
      en: []
    }
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
      de: "",
      hu: "A Colosseum, eredeti nevén Flavius Amphitheatrum, a Római Birodalom nagyságának és mérnöki zsenialitásának örök szimbóluma. Az i.sz. 1. században épült monumentális aréna a birodalom legnagyobb amfiteátruma volt, amely becslések szerint 50 000-80 000 nézőt tudott befogadni. Itt tartották a hírhedt gladiátorviadalokat, állatvadászatokat (venationes) és nyilvános kivégzéseket. A föld alatti, bonyolult alagútrendszer, a hypogeum, lehetővé tette a harcosok és állatok drámai megjelenését az arénában. Bár az évszázadok során földrengések és kőrablók károsították, ma is Róma leglátogatottabb műemléke. Történelem K5 — Az ókori Róma mindennapjai.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["Építését Vespasianus császár kezdte meg és fia, Titus fejezte be i.sz. 80-ban.","A külső falakhoz több mint 100 000 köbméter travertin követ használtak fel, vas kapcsokkal rögzítve.","A bonyolult, 80 bejáratból álló rendszer lehetővé tette a hatalmas tömeg gyors és rendezett be- és kiáramlását.","A forró napokon egy hatalmas vászontetőt, a velariumot feszítettek ki a nézőtér fölé, árnyékot biztosítva.","Alkalmanként vízi csatákat (naumachia) is rendeztek az aréna vízzel való elárasztásával.","A középkorban erőddé, majd lakóépületekké és műhelyekké alakították.","2007-ben a világ hét új csodájának egyikeként választották meg.","A Colosseum képe szerepel az olasz 5 centes euróérmén."],
      ro: [],
      en: []
    }
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
      de: "",
      hu: "A pisai ferde torony, a város katedrálisának harangtornya (campanile), Olaszország egyik legismertebb jelképe. A dőlés már az építkezés korai szakaszában, a 12. században megkezdődött a gyenge altalaj miatt. Az évszázadok során a mérnökök folyamatosan próbálták korrigálni a dőlést, az egyik oldalon magasabbra építve az újabb szinteket, ami a torony enyhe banán-alakját eredményezte. A 20. század végén végzett komoly stabilizációs munkálatoknak köszönhetően a torony ma már biztonságosan látogatható. A Piazza dei Miracoli (Csodák tere) részeként a Dómmal és a Keresztelőkápolnával együtt az UNESCO Világörökség része. Fizika K7 — Gravitáció és tömegközéppont.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A torony építése három szakaszban, közel 200 évig tartott.","A dőlés mértéke a stabilizálás előtt elérte az 5,5 fokot, ma körülbelül 3,97 fok.","A tetején hét harang található, amelyek a zenei skála hét hangjának felelnek meg.","A legenda szerint Galileo Galilei a toronyból leejtett tárgyakkal végezte gravitációs kísérleteit.","A 296 lépcsőfok vezet fel a csúcsra.","A torony hengeres teste hat oszlopsorból áll, amelyek a román stílusú építészet jegyeit viselik.","A 20. századi beavatkozás során több tonna földet távolítottak el az északi oldal alól, hogy csökkentsék a dőlést."],
      ro: [],
      en: []
    }
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
      de: "",
      hu: "Pompeji, az ókori római város, amelyet a Vezúv i.sz. 79-es kitörése konzervált, egyedülálló régészeti lelőhely. A több méter vastag hamu- és habkőréteg alatt megőrződött város egy pillanatfelvételt ad egy virágzó kereskedelmi központ mindennapjairól. A feltárt utcák, lakóházak (domusok), üzletek, fürdők és templomok lenyűgöző részletességgel mutatják be a római életmódot. A freskók, mozaikok és a falakon talált graffitik betekintést engednek a kor művészetébe, politikájába és humorába. A legmegrendítőbb leletek a kitörés áldozatainak gipszöntvényei, amelyek az utolsó pillanataikban örökítették meg őket. Történelem K5 — Az ókori Róma.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A város a Sarno folyó torkolatánál feküdt, ami fontos kereskedelmi útvonallá tette.","A feltárások során komplett pékségeket találtak kemencékkel és elszenesedett kenyerekkel.","A 'Cave Canem' ('Vigyázz a kutyával!') mozaik egy híres lelet egy pompeji ház bejáratától.","Pompejiben volt amfiteátrum, két színház és számos közfürdő.","A Vénusznak szentelt templom a város egyik legfontosabb vallási központja volt.","A 'Villa dei Misteri' (Misztériumok Villája) híres freskói egy titokzatos vallási beavatási szertartást ábrázolnak.","A lakosok nem tudták, hogy a Vezúv egy vulkán, hegynek hitték.","Ifjabb Plinius levelei részletesen dokumentálták a kitörést, nagybátyja, Idősebb Plinius halálát is beleértve."],
      ro: [],
      en: []
    }
  },
  {
    id: "etna",
    type: "landmark",
    parent: "reg-sicilia",
    coords: [14.9969, 37.751],
    name: { de: "Čtna", hu: "Etna", ro: "Etna", en: "Mount Etna" },
    
    
    description: {
          "en": "Mount Etna, situated on the east coast of Sicily, is the highest and most active volcano in Europe. Soaring to over 3,300 meters, its elevation changes frequently due to summit eruptions and subsequent collapses. The volcano's rich, fertile soils support extensive agriculture, including vineyards, orchards, and olive groves spread across its lower slopes. Mount Etna has been erupting for half a million years, with a documented history of historical eruptions that stretch back to ancient times. Recognized as a UNESCO World Heritage site, it remains a captivating destination for tourists and a living laboratory for volcanologists.",
          "de": "Der Čtna, an der Ostküste Siziliens gelegen, ist der höchste und aktivste Vulkan Europas. Er erhebt sich auf über 3.300 Meter, wobei sich seine Höhe aufgrund von Gipfeleruptionen und anschließenden Einstürzen häufig ändert. Die reichen, fruchtbaren Böden des Vulkans unterstützen eine umfangreiche Landwirtschaft, darunter Weinberge, Obstgärten und Olivenhaine, die sich über seine unteren Hänge erstrecken. Der Čtna bricht seit einer halben Million Jahren aus, mit einer dokumentierten Geschichte historischer Eruptionen, die bis in die Antike zurückreicht. Er ist als UNESCO-Weltkulturerbe anerkannt und bleibt ein faszinierendes Reiseziel für Touristen und ein lebendes Labor für Vulkanologen.",
          "hu": "A Szicília keleti partján fekvő Etna Európa legmagasabb és legaktívabb vulkánja. Több mint 3300 méter magasra emelkedik, magassága a csúcskitörések és az azt követő omlások miatt gyakran változik. A vulkán gazdag, termékeny talaja kiterjedt mezőgazdaságot támogat, beleértve a szőlőültetvényeket, gyümölcsösöket és olajfaligeteket, amelyek az alsó lejtőin terülnek el. Az Etna félmillió éve tör ki, történelmi kitöréseinek dokumentált története egészen az ókorig nyúlik vissza. Az UNESCO világörökség részeként elismert vulkán továbbra is a turisták lenyűgöző célpontja és a vulkanológusok élő laboratóriuma.",
          "ro": "Muntele Etna, situat pe coasta de est a Siciliei, este cel mai înalt și cel mai activ vulcan din Europa. Ridicându-se la peste 3.300 de metri, elevația sa se schimbă frecvent din cauza erupțiilor de la vârf și a prăbușirilor ulterioare. Solurile bogate și fertile ale vulcanului susțin o agricultură extinsă, inclusiv podgorii, livezi și plantații de măslini răspândite pe versanții săi inferiori. Muntele Etna erupe de o jumătate de milion de ani, având o istorie documentată a erupțiilor care se întinde până în cele mai vechi timpuri. Recunoscut ca sit al Patrimoniului Mondial UNESCO, rămâne o destinație captivantă pentru turiști și un laborator viu pentru vulcanologi."
    },
    facts: {
          "en": [
                "Mount Etna is one of the most active volcanoes in the world.",
                "In Greek mythology, the deadly monster Typhon was trapped under the mountain.",
                "The circumetnea railway offers a scenic route around the volcano's base.",
                "Etna's eruptions are generally classified as 'effusive' and not extremely explosive.",
                "The mountain features several active craters at the summit.",
                "During winter, Etna's slopes are covered in snow, allowing for skiing.",
                "It was added to the UNESCO World Heritage list in 2013.",
                "The volcanic soil produces unique and highly prized DOC wines."
          ],
          "de": [
                "Der Čtna ist einer der aktivsten Vulkane der Welt.",
                "In der griechischen Mythologie war das tödliche Monster Typhon unter dem Berg gefangen.",
                "Die Circumetnea-Eisenbahn bietet eine malerische Route um die Basis des Vulkans.",
                "Die Ausbrüche des Čtna werden im Allgemeinen als 'effusiv' und nicht extrem explosiv eingestuft.",
                "Der Berg verfügt über mehrere aktive Krater am Gipfel.",
                "Im Winter sind die Hänge des Čtna mit Schnee bedeckt, was das Skifahren ermöglicht.",
                "Er wurde 2013 in die Liste des UNESCO-Weltkulturerbes aufgenommen.",
                "Der vulkanische Boden produziert einzigartige und hoch geschätzte DOC-Weine."
          ],
          "hu": [
                "Az Etna a világ egyik legaktívabb vulkánja.",
                "A görög mitológiában a halálos szörnyeteg, Tüphón a hegy alatt rekedt.",
                "A circumetnea vasút festői útvonalat kínál a vulkán lába körül.",
                "Az Etna kitöréseit általában 'effuzívnak', és nem rendkívül robbanásveszélyesnek minősítik.",
                "A hegy csúcsán számos aktív kráter található.",
                "Télen az Etna lejtőit hó borítja, ami lehetővé teszi a síelést.",
                "2013-ban felvették az UNESCO világörökségi listájára.",
                "A vulkáni talaj egyedi és nagyra értékelt DOC borokat hoz létre."
          ],
          "ro": [
                "Muntele Etna este unul dintre cei mai activi vulcani din lume.",
                "În mitologia greacă, monstrul mortal Typhon a fost prins sub munte.",
                "Calea ferată circumetnea oferă un traseu pitoresc în jurul bazei vulcanului.",
                "Erupțiile Etnei sunt în general clasificate ca 'efuzive' și nu extrem de explozive.",
                "Muntele prezintă mai multe cratere active la vârf.",
                "În timpul iernii, versanții Etnei sunt acoperiți de zăpadă, permițând schiatul.",
                "A fost adăugat pe lista Patrimoniului Mondial UNESCO în 2013.",
                "Solul vulcanic produce vinuri DOC unice și foarte apreciate."
          ]
    },
    image: "/geo-images/italy/etna.webp",
    descriptionAdvanced: {
        de: "",
        hu: "Az Etna, Európa legmagasabb és legaktívabb vulkánja, Szicília keleti partjának látképét uralja. Folyamatos tevékenysége, a lávafolyamoktól a gáz- és hamukibocsátásig, folyamatosan formálja a környező tájat. A hegy oldala egyedülálló ökoszisztéma, ahol a termékeny vulkáni talajon citrusligetek és szőlőültetvények virágoznak, míg a magasabb régiókban holdbéli táj fogadja a látogatót. A hegyre felvonóval és terepjáró buszokkal lehet feljutni, amelyek a fő kráterek közelébe visznek. Az Etna nemcsak természeti csoda, hanem a helyi kultúra és gazdaság szerves része is. Földrajz K8 – Vulkáni tevékenység.",
        ro: "",
        en: ""
    },
    factsAdvanced: {
        de: [],
        hu: [
            "Az Etna kitöréseit több mint 2700 éve dokumentálják, ezzel a világ leghosszabb ideig feljegyzett vulkáni tevékenységével rendelkezik.",
            "A hegy magassága a kitörések miatt folyamatosan változik.",
            "A görög mitológiában Héphaisztosz, a kovácsisten műhelye az Etna alatt volt.",
            "A 'Valle del Bove' egy hatalmas patkó alakú mélyedés a hegy keleti oldalán, amelyet egy ősi, katasztrofális összeomlás hozott létre.",
            "A Circumetnea vasút egy 110 km hosszú, keskeny nyomtávú vasútvonal, amely körbejárja a vulkán lábát.",
            "Az Etna lejtőin termelt borok (Etna DOC) különleges, ásványos ízvilágukról ismertek.",
            "Télen a hegyen síelni is lehet, a sípályák egyedülálló kilátást nyújtanak a Jón-tengerre."
        ],
        ro: [],
        en: []
    }
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
      de: "",
      hu: "A Vatikán, a világ legkisebb független állama, a katolicizmus spirituális és adminisztratív központja. A Szent Péter-bazilika, a kereszténység legnagyobb temploma, lenyűgöző kupolájával és Michelangelo Pietà szobrával a reneszánsz építészet csúcsa. A Vatikáni Múzeumok a világ egyik leggazdagabb művészeti gyűjteményét őrzik, amelynek csúcspontja a Sixtus-kápolna, Michelangelo 'Ádám teremtése' és 'Utolsó ítélet' című freskóival. A Szent Péter tér, Bernini ölelő oszlopsorával, a hívők és turisták gyülekezőhelye. A Vatikán a hit, a történelem és a művészet egyedülálló ötvözete. Történelem K8 – A pápaság története.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A Vatikánnak saját postaszolgálata, vasútállomása és médiaorgánumai vannak.","A Svájci Gárda, a világ legkisebb és legrégebbi hadserege, 1506 óta védi a pápát.","A Vatikáni Titkos Levéltár évszázadok történelmi dokumentumait őrzi.","A Vatikáni Kertek az állam területének több mint felét elfoglalják.","A Vatikán saját euró érméket bocsát ki.","A Passetto di Borgo egy titkos folyosó, amely a Vatikánt köti össze az Angyalvárral.","Az államnak nincs saját repülőtere."],
      ro: [],
      en: []
    }
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
      de: "",
      hu: "Herculaneum, Pompeji kevésbé ismert, de gazdagabb testvérvárosa, a Vezúv 79-es kitörésének egy másik, egyedülálló időkapszulája. Míg Pompejit hamu borította, Herculaneumot forró iszap és vulkáni anyag árasztotta el, ami sokkal jobban konzerválta a szerves anyagokat. Ennek köszönhetően elszenesedett fa ajtókeretek, bútorok, sőt, papirusztekercseket tartalmazó könyvtár is fennmaradt. A város lakóházai, mint a Szarvasos Ház, a tehetősebb réteg életébe engednek bepillantást, csodálatos mozaikjaikkal és freskóikkal. A csónakházakban talált csontvázak drámai módon tanúskodnak a menekülni próbálók tragikus sorsáról. Történelem K5 — Az ókori Róma.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A várost a mitikus hősről, Héraklészről (Herkules) nevezték el.","A Papiruszok Villája az egyetlen épségben fennmaradt antik könyvtár a világon.","A vulkáni anyag magas hőmérséklete azonnal elszenesítette a szerves anyagokat, megőrizve formájukat.","A feltárt terület kisebb, mint Pompejiben, mert a modern Ercolano városa ráépült.","A leletek között élelmiszer-maradványokat, például kenyeret és tojást is találtak.","A fürdők (thermae) különösen jó állapotban maradtak fenn, bemutatva a római fürdőkultúrát.","A falakon lévő választási felhívások és hirdetések a politikai életbe engednek betekintést."],
      ro: [],
      en: []
    }
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
      de: "",
      hu: "Ostia Antica, Róma ókori kikötővárosa, lenyűgöző betekintést nyújt a Római Birodalom kereskedelmi életébe. A Tiberis folyó torkolatánál fekvő város a birodalom kapuja volt, ahol a gabona, bor és egzotikus áruk partra szálltak. A hatalmas régészeti parkban sétálva felfedezhetjük a raktárakat (horrea), a kereskedelmi társaságok irodáit (a Corporazioni téren), és a többszintes bérházakat (insulae), ahol a dokkmunkások és kereskedők éltek. A színház, a fürdők és a pékségek mind a nyüzsgő városi életről tanúskodnak. Pompejivel ellentétben Ostiát nem egy katasztrófa, hanem a kikötő eliszaposodása miatt hagyták el lassan az évszázadok során. Történelem K6 — Kereskedelem az ókorban.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A Corporazioni terén található mozaikok a különböző kereskedelmi céheket és árucikkeket hirdetik.","Az 'insulae' nevű bérházak a római városi lakhatás korai és jól megőrzött példái.","A Thermopolium egy ókori gyorsétterem, ahol a pultban lévő edényekben tárolták a meleg ételt.","A városnak több fürdője is volt, köztük a Neptunus fürdő, amelynek mozaikjai a tenger istenét ábrázolják.","Ostia saját tűzoltósággal (vigiles) rendelkezett a gyakori tüzek miatt.","A Capitolium a város fő temploma volt, amelyet Jupiter, Juno és Minerva tiszteletére emeltek.","A feltárt nekropoliszok a római temetkezési szokások sokféleségét mutatják be."],
      ro: [],
      en: []
    }
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
    image: "/geo-images/italy/it-siena.webp"
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
      de: "",
      hu: "San Gimignano, a 'középkor Manhattan-je', a toszkán dombok között emelkedik ki egyedülálló toronysziluettjével. A középkorban a gazdag patrícius családok egymással versengve építették a lakótornyokat, hogy demonstrálják hatalmukat és gazdagságukat. Fénykorában 72 torony meredezett az ég felé, mára 14 maradt fenn. A város a Via Francigena, egy fontos zarándokút mentén feküdt, ami hozzájárult gazdasági fellendüléséhez. A ciszterna tér (Piazza della Cisterna) és a Dóm tér (Piazza del Duomo) a középkori városi élet központjai voltak. San Gimignano ma egy tökéletesen megőrzött időkapszula, amely visszarepíti a látogatót a 14. századba. Történelem K6 — Középkori városok.",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [],
      hu: ["A legmagasabb torony, a Torre Grossa, 54 méter magas és látogatható.","A város a Vernaccia di San Gimignano nevű, száraz fehérboráról híres, amely az első DOCG minősítésű borok egyike volt Olaszországban.","A Fekete Halál (pestisjárvány) 1348-ban megtizedelte a lakosságot, ami a város hanyatlásához vezetett.","A Dóm freskói bibliai jeleneteket ábrázolnak, és a középkori 'képregényként' szolgáltak az írástudatlan hívek számára.","A város falai a 13. században épültek és szinte teljes egészében fennmaradtak.","A sáfránytermesztés fontos bevételi forrás volt a középkori város számára."],
      ro: [],
      en: []
    }
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
    image: "/geo-images/italy/it-assisi.webp"
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
    image: "/geo-images/italy/it-montecassino.webp"
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
    image: "/geo-images/italy/it-orvieto.webp"
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
    image: "/geo-images/italy/it-matera-sassi.webp"
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
    image: "/geo-images/italy/it-pietraperla.webp"
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
    image: "/geo-images/italy/it-gran-paradiso.webp"
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
    image: "/geo-images/italy/it-abruzzo-np.webp"
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
    image: "/geo-images/italy/it-pollino-np.webp"
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
    image: "/geo-images/italy/it-lago-di-garda.webp"
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
    image: "/geo-images/italy/it-lago-di-como.webp"
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
    image: "/geo-images/italy/it-lago-maggiore.webp"
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
    image: "/geo-images/italy/it-vesuvio.webp"
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
    image: "/geo-images/italy/it-stromboli.webp"
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
    image: "/geo-images/italy/it-portofino.webp"
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
    image: "/geo-images/italy/it-cinque-terre.webp"
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
    image: "/geo-images/italy/it-lecce.webp"
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
    image: "/geo-images/italy/it-bari.webp"
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
    image: "/geo-images/italy/it-perugia.webp"
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
    image: "/geo-images/italy/it-ravenna.webp"
  },
  {
    id: "it-trieste",
    type: "city",
    parent: "IT-36",
    coords: [13.776, 45.650],
    name: { de: "Triest", hu: "Trieszt", ro: "Trieste", en: "Trieste" },
    description: {
      en: "Trieste is a captivating seaport city in northeastern Italy, located on a narrow strip of land nestled between the Adriatic Sea and Slovenia. For centuries, it served as the vital principal port of the Austro-Hungarian Empire, an influence still visible in its grand Viennese architecture and vibrant coffeehouse culture. The city uniquely blends Italian, Slavic, and Germanic traditions, creating a deeply cosmopolitan and literary atmosphere. The beautiful Piazza dell'UnitÁ  d'Italia is one of the largest sea-facing squares in Europe. Trieste remains a bustling hub of scientific research and maritime commerce.",
      de: "Triest ist eine faszinierende Hafenstadt im Nordosten Italiens, gelegen auf einem schmalen Landstreifen zwischen der Adria und Slowenien. Jahrhundertelang diente sie als wichtigster Hafen der Österreichisch-Ungarischen Monarchie, ein Einfluss, der in ihrer großartigen Wiener Architektur und der lebendigen Kaffeehauskultur noch immer sichtbar ist. Die Stadt verbindet auf einzigartige Weise italienische, slawische und germanische Traditionen und schafft so eine zutiefst weltoffene und literarische Atmosphäre. Die wunderschöne Piazza dell'UnitÁ  d'Italia ist einer der größten zum Meer ausgerichteten Plätze Europas. Triest bleibt ein geschäftiges Zentrum für wissenschaftliche Forschung und Seehandel.",
      hu: "Trieszt egy lenyűgöző kikötőváros Északkelet-Olaszországban, amely egy keskeny földsávon fekszik az Adriai-tenger és Szlovénia között. Évszázadokon át az Osztrák-Magyar Monarchia létfontosságú fő kikötőjeként szolgált, és ez a hatás ma is látható nagyszerű bécsi építészetében és élénk kávéházi kultúrájában. A város egyedülálló módon ötvözi az olasz, szláv és germán hagyományokat, mélyen kozmopolita és irodalmi légkört teremtve. A gyönyörű Piazza dell'UnitÁ  d'Italia az egyik legnagyobb tengerre néző tér Európában. Trieszt továbbra is a tudományos kutatás és a tengeri kereskedelem nyüzsgő központja.",
      ro: "Trieste este un oraș portuar captivant în nord-estul Italiei, situat pe o fâșie îngustă de pământ, cuibărită între Marea Adriatică și Slovenia. Timp de secole, a servit drept port principal vital al Imperiului Austro-Ungar, o influență încă vizibilă în măreața sa arhitectură vieneză și în cultura vibrantă a cafenelelor. Orașul îmbină în mod unic tradițiile italiene, slave și germanice, creând o atmosferă profund cosmopolită și literară. Frumoasa Piazza dell'UnitÁ  d'Italia este una dintre cele mai mari piețe cu deschidere la mare din Europa. Trieste rămâne un centru plin de viață al cercetării științifice și al comerțului maritim."
    },
    facts: {
      en: ["Trieste was the main seaport of the Habsburg Monarchy from 1382 to 1918.","The writer James Joyce lived in Trieste for over a decade and wrote parts of 'Ulysses' there.","It is considered the coffee capital of Italy, home to the famous Illy brand.","Piazza dell'UnitÁ  d'Italia is the largest square in Europe directly facing the sea.","The Miramare Castle, built by Archduke Maximilian of Habsburg, overlooks the Gulf of Trieste.","Following WWII, the city was part of the 'Free Territory of Trieste' before returning to Italy in 1954.","The city is known for the Bora, a strong and cold katabatic wind.","Trieste has one of the highest concentrations of researchers in Europe."],
      de: ["Triest war von 1382 bis 1918 der wichtigste Seehafen der Habsburgermonarchie.","Der Schriftsteller James Joyce lebte über ein Jahrzehnt in Triest und schrieb dort Teile von 'Ulysses'.","Es gilt als Kaffeehauptstadt Italiens, Heimat der berühmten Marke Illy.","Die Piazza dell'UnitÁ  d'Italia ist der größte Platz in Europa, der direkt dem Meer zugewandt ist.","Das von Erzherzog Maximilian von Habsburg erbaute Schloss Miramare überblickt den Golf von Triest.","Nach dem Zweiten Weltkrieg war die Stadt Teil des 'Freien Territoriums Triest', bevor sie 1954 an Italien zurückfiel.","Die Stadt ist bekannt für die Bora, einen starken und kalten Fallwind.","Triest hat eine der höchsten Dichten an Forschern in Europa."],
      hu: ["Trieszt a Habsburg Monarchia fő tengeri kikötője volt 1382-től 1918-ig.","James Joyce író több mint egy évtizedig élt Triesztben, és itt írta az 'Ulysses' egyes részeit.","Olaszország kávéfővárosának tartják, itt található a híres Illy márka központja.","A Piazza dell'UnitÁ  d'Italia a legnagyobb olyan tér Európában, amely közvetlenül a tengerre néz.","A Habsburg Miksa főherceg által építtetett Miramare-kastély a Trieszti-öbölre néz.","A II. világháború után a város a 'Trieszti Szabad Terület' része volt, mielőtt 1954-ben visszatért Olaszországhoz.","A város a Boráról, egy erős és hideg bukószélről ismert.","Triesztben az egyik legmagasabb a kutatók koncentrációja Európában."],
      ro: ["Trieste a fost principalul port maritim al Monarhiei Habsburgice din 1382 până în 1918.","Scriitorul James Joyce a locuit în Trieste peste un deceniu și a scris părți din 'Ulise' acolo.","Este considerată capitala cafelei din Italia, sediul faimosului brand Illy.","Piazza dell'UnitÁ  d'Italia este cea mai mare piață din Europa situată direct la mare.","Castelul Miramare, construit de Arhiducele Maximilian de Habsburg, are vedere la Golful Trieste.","După al Doilea Război Mondial, orașul a făcut parte din 'Teritoriul Liber Trieste' înainte de a reveni Italiei în 1954.","Orașul este cunoscut pentru Bora, un vânt catabatic puternic și rece.","Trieste are una dintre cele mai mari concentrații de cercetători din Europa."]
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
      en: "Padua is an elegant and ancient city in the Veneto region, famous for its prestigious university and extraordinary art heritage. According to legend, it is the oldest city in northern Italy, founded by the Trojan prince Antenor. Padua is most celebrated for the Scrovegni Chapel, which houses a priceless cycle of frescoes by Giotto that revolutionized Western art. The sprawling Prato della Valle is one of the largest public squares in Europe, surrounded by a picturesque canal and statues. The city's lively academic environment and rich history make it a dynamic cultural hub.",
      de: "Padua ist eine elegante und alte Stadt in der Region Venetien, berühmt für ihre prestigeträchtige Universität und ihr außergewöhnliches Kunsterbe. Der Legende nach ist sie die älteste Stadt Norditaliens, gegründet vom trojanischen Prinzen Antenor. Padua ist vor allem für die Scrovegni-Kapelle bekannt, die einen unschätzbaren Freskenzyklus von Giotto beherbergt, der die westliche Kunst revolutionierte. Der weitläufige Prato della Valle ist einer der größten öffentlichen Plätze in Europa, umgeben von einem malerischen Kanal und Statuen. Das lebhafte akademische Umfeld und die reiche Geschichte machen die Stadt zu einem dynamischen kulturellen Zentrum.",
      hu: "Padova egy elegáns és ősi város Veneto régióban, amely híres tekintélyes egyeteméről és rendkívüli művészeti örökségéről. A legenda szerint ez Észak-Olaszország legrégebbi városa, amelyet Anténór trójai herceg alapított. Padovát leginkább a Scrovegni-kápolna teszi híressé, amely Giotto felbecsülhetetlen értékű freskóciklusának ad otthont, amely forradalmasította a nyugati művészetet. A kiterjedt Prato della Valle Európa egyik legnagyobb köztéri tere, amelyet egy festői csatorna és szobrok vesznek körül. A város élénk tudományos környezete és gazdag történelme dinamikus kulturális központtá teszi.",
      ro: "Padova este un oraș elegant și antic din regiunea Veneto, faimos pentru universitatea sa prestigioasă și patrimoniul artistic extraordinar. Conform legendei, este cel mai vechi oraș din nordul Italiei, fondat de prințul troian Antenor. Padova este cel mai mult celebrată pentru Capela Scrovegni, care găzduiește un ciclu neprețuit de fresce realizate de Giotto, care a revoluționat arta occidentală. Vastul Prato della Valle este una dintre cele mai mari piețe publice din Europa, înconjurată de un canal pitoresc și statui. Mediul academic plin de viață și istoria bogată a orașului îl fac un centru cultural dinamic."
    },
    facts: {
      en: ["The University of Padua, founded in 1222, is one of the oldest in the world.","Galileo Galilei taught mathematics at the university for 18 years.","The Scrovegni Chapel contains frescoes by Giotto, a masterpiece of the early Renaissance.","Prato della Valle is the largest square in Italy and one of the largest in Europe.","St. Anthony of Padua, a highly venerated Catholic saint, is buried in the city's basilica.","The Botanical Garden of Padua, created in 1545, is the world's oldest academic botanical garden.","Padua is considered the oldest city in northern Italy, dating back to 1183 BC by legend.","William Shakespeare's play 'The Taming of the Shrew' is set in Padua."],
      de: ["Die Universität Padua, gegründet 1222, ist eine der ältesten der Welt.","Galileo Galilei lehrte 18 Jahre lang Mathematik an der Universität.","Die Scrovegni-Kapelle enthält Fresken von Giotto, ein Meisterwerk der Frührenaissance.","Prato della Valle ist der größte Platz in Italien und einer der größten in Europa.","Der heilige Antonius von Padua, ein hoch verehrter katholischer Heiliger, ist in der Basilika der Stadt begraben.","Der Botanische Garten von Padua, der 1545 angelegt wurde, ist der älteste akademische botanische Garten der Welt.","Padua gilt als älteste Stadt Norditaliens, die der Legende nach auf 1183 v. Chr. zurückgeht.","William Shakespeares Stück 'Der Widerspenstigen Zähmung' spielt in Padua."],
      hu: ["Az 1222-ben alapított Padovai Egyetem az egyik legrégebbi a világon.","Galileo Galilei 18 évig tanított matematikát az egyetemen.","A Scrovegni-kápolnában Giotto freskói találhatók, amelyek a kora reneszánsz remekművei.","A Prato della Valle a legnagyobb tér Olaszországban és az egyik legnagyobb Európában.","Páduai Szent Antal, a nagy tiszteletnek örvendő katolikus szent a város bazilikájában nyugszik.","A padovai botanikus kertet 1545-ben hozták létre, és ez a világ legrégebbi tudományos botanikus kertje.","Padovát Észak-Olaszország legrégebbi városának tartják, a legenda szerint i.e. 1183-ból származik.","William Shakespeare 'A makrancos hölgy' című darabja Padovában játszódik."],
      ro: ["Universitatea din Padova, fondată în 1222, este una dintre cele mai vechi din lume.","Galileo Galilei a predat matematică la universitate timp de 18 ani.","Capela Scrovegni conține fresce de Giotto, o capodoperă a Renașterii timpurii.","Prato della Valle este cea mai mare piață din Italia și una dintre cele mai mari din Europa.","Sfântul Anton de Padova, un sfânt catolic foarte venerat, este înmormântat în bazilica orașului.","Grădina Botanică din Padova, creată în 1545, este cea mai veche grădină botanică academică din lume.","Padova este considerată cel mai vechi oraș din nordul Italiei, datând din 1183 î.Hr. conform legendei.","Piesa lui William Shakespeare, 'Îmblânzirea scorpiei', se desfășoară la Padova."]
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
    image: "/geo-images/italy/it-cremona.webp"
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
    image: "/geo-images/italy/it-cagliari.webp"
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
    image: "/geo-images/italy/it-taormina.webp"
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
    image: "/geo-images/italy/it-amalfi.webp"
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
    image: "/geo-images/italy/castel-del-monte.webp"
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
    image: "/geo-images/italy/castello-sforzesco.webp"
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
    image: "/geo-images/italy/palazzo-ducale-venezia.webp"
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
    image: "/geo-images/italy/palazzo-pitti.webp"
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
    image: "/geo-images/italy/reggia-di-caserta.webp"
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
    image: "/geo-images/italy/palazzo-vecchio.webp"
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
    image: "/geo-images/italy/castel-sant-angelo.webp"
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
    image: "/geo-images/italy/dolomiti.webp"
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
    image: "/geo-images/italy/amalfi-coast.webp"
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
    image: "/geo-images/italy/uffizi.webp"
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
    image: "/geo-images/italy/piazza-san-marco.webp"
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
    image: "/geo-images/italy/duomo-firenze.webp"
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
    image: "/geo-images/italy/vatican-museums.webp"
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
    image: "/geo-images/italy/trevi-fountain.webp"
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
    image: "/geo-images/italy/pantheon.webp"
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
    image: "/geo-images/italy/st-peters-square.webp"
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
    image: "/geo-images/italy/piazza-del-campo.webp"
  }
];

export const italyAllPoi: POI[] = [italyCountry,
  ...italyRegions,
  ...italyCities,, ...poiExtraItalyCitiesC1, ...poiExtraItalyNatureGeschichteC2, ...poiExtraItalyWirtschaftLebenC3];
