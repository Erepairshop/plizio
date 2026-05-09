import type { POI } from "./poi";

export const poiExtraArmeniaReliefV2: POI[] = [
  {
    id: "mount-aragats-relief-v2",
    type: "mountain",
    parent: "AM-AG",
    coords: [44.195, 40.523],
    name: { de: "Berg Aragaz", hu: "Aragac-hegy", ro: "Muntele Aragats", en: "Mount Aragats" },
    description: { de: "Der höchste Berg in Armenien, ein massiver inaktiver Vulkan mit vier Gipfeln.", hu: "Örményország legmagasabb hegye, egy hatalmas inaktív vulkán négy csúccsal.", ro: "Cel mai înalt munte din Armenia, un vulcan masiv inactiv cu patru vârfuri.", en: "The highest mountain in Armenia, a massive inactive volcano with four peaks." },
    facts: {
      de: ["Der Vulkan ist vor etwa 2,5 Millionen Jahren entstanden.", "Er hat vier Gipfel, von denen der nördliche der höchste ist."],
      hu: ["A vulkán mintegy 2,5 millió évvel ezelőtt alakult ki.", "Négy csúcsa van, amelyek közül az északi a legmagasabb."],
      ro: ["Vulcanul s-a format acum aproximativ 2,5 milioane de ani.", "Are patru vârfuri, cel nordic fiind cel mai înalt."],
      en: ["The volcano was formed about 2.5 million years ago.", "It has four peaks, of which the northern one is the highest."]
    }
  },
  {
    id: "mount-kaputjugh-relief-v2",
    type: "mountain",
    parent: "AM-SU",
    coords: [46.028, 39.165],
    name: { de: "Berg Kaputjugh", hu: "Kaputdzsugh", ro: "Muntele Kaputjugh", en: "Mount Kaputjugh" },
    description: { de: "Der höchste Gipfel des Sangesur-Gebirges an der Grenze zu Nachitschewan.", hu: "A Zangezur-hegység legmagasabb csúcsa a nahicseváni határon.", ro: "Cel mai înalt vârf al lanțului muntos Zangezur de la granița cu Nahicevan.", en: "The highest peak of the Zangezur Mountains on the border with Nakhchivan." },
    facts: {
      de: ["Mit 3904 Metern ist er der höchste Berg im Sangesur-Gebirge.", "Er liegt genau auf der Grenze zur aserbaidschanischen Exklave Nachitschewan."],
      hu: ["3904 méterével a Zangezur-hegység legmagasabb hegye.", "Közvetlenül az azerbajdzsáni Nahicseván exklávé határán fekszik."],
      ro: ["Cu 3904 metri, este cel mai înalt munte din Munții Zangezur.", "Este situat exact pe granița cu exclava azeră Nahicevan."],
      en: ["At 3904 meters, it is the highest mountain in the Zangezur Mountains.", "It is located exactly on the border with the Azerbaijani exclave of Nakhchivan."]
    }
  },
  {
    id: "mount-azhdahak-relief-v2",
    type: "mountain",
    parent: "AM-GR",
    coords: [44.945, 40.225],
    name: { de: "Berg Aschdahak", hu: "Azhdahak", ro: "Muntele Azhdahak", en: "Mount Azhdahak" },
    description: { de: "Ein erloschener Vulkan und der höchste Gipfel des Geghama-Gebirges, mit einem Kratersee.", hu: "Kialudt vulkán és a Geghama-hegység legmagasabb csúcsa, amelynek krátertava van.", ro: "Un vulcan stins și cel mai înalt vârf al Munților Geghama, având un lac de crater.", en: "An extinct volcano and the highest peak of the Geghama Mountains, featuring a crater lake." },
    facts: {
      de: ["Die Höhe des Berges beträgt 3597 Meter über dem Meeresspiegel.", "Im Krater befindet sich ein kleiner, oft zugefrorener See."],
      hu: ["A hegy magassága 3597 méter a tengerszint felett.", "A kráterben egy kis, gyakran befagyott tó található."],
      ro: ["Înălțimea muntelui este de 3597 metri deasupra nivelului mării.", "În crater se află un lac mic, adesea înghețat."],
      en: ["The height of the mountain is 3597 meters above sea level.", "There is a small, often frozen lake in the crater."]
    }
  },
  {
    id: "geghama-mountains-relief-v2",
    type: "mountain",
    parent: "AM-GR",
    coords: [44.95, 40.2],
    name: { de: "Geghama-Gebirge", hu: "Geghama-hegység", ro: "Munții Geghama", en: "Geghama Mountains" },
    description: { de: "Ein vulkanisches Gebirge in Zentralarmenien, bekannt für seine zahlreichen Krater und Bergseen.", hu: "Vulkanikus hegység Közép-Örményországban, amely számos kráteréről és hegyi taváról ismert.", ro: "Un lanț muntos vulcanic în Armenia centrală, cunoscut pentru numeroasele sale cratere și lacuri de munte.", en: "A volcanic mountain range in central Armenia known for its numerous craters and mountain lakes." },
    facts: {
      de: ["Das Gebirge ist vulkanischen Ursprungs und reich an Obsidian.", "Zahlreiche Felszeichnungen aus der Bronzezeit wurden hier gefunden."],
      hu: ["A hegység vulkanikus eredetű és obszidiánban gazdag.", "Számos bronzkori sziklarajzot találtak itt."],
      ro: ["Lanțul muntos este de origine vulcanică și bogat în obsidian.", "Aici au fost găsite numeroase petroglife din epoca bronzului."],
      en: ["The mountain range is of volcanic origin and rich in obsidian.", "Numerous Bronze Age petroglyphs have been found here."]
    }
  },
  {
    id: "zangezur-mountains-relief-v2",
    type: "mountain",
    parent: "AM-SU",
    coords: [46.0, 39.2],
    name: { de: "Sangesur-Gebirge", hu: "Zangezur-hegység", ro: "Munții Zangezur", en: "Zangezur Mountains" },
    description: { de: "Eine Gebirgskette im Süden Armeniens, die die Grenze zu Aserbaidschan bildet und tiefe Schluchten aufweist.", hu: "Hegylánc Örményország déli részén, amely az azerbajdzsáni határt képezi és mély szurdokokkal rendelkezik.", ro: "Un lanț muntos în sudul Armeniei, care formează granița cu Azerbaidjan și prezintă defilee adânci.", en: "A mountain range in southern Armenia forming the border with Azerbaijan and featuring deep gorges." },
    facts: {
      de: ["Das Gebirge erstreckt sich über eine Länge von etwa 130 Kilometern.", "Es ist bekannt für seine reichen Kupfer- und Molybdänvorkommen."],
      hu: ["A hegylánc körülbelül 130 kilométer hosszan nyúlik el.", "Gazdag réz- és molibdénlelőhelyeiről ismert."],
      ro: ["Lanțul muntos se întinde pe o lungime de aproximativ 130 de kilometri.", "Este cunoscut pentru depozitele sale bogate de cupru și molibden."],
      en: ["The mountain range stretches for a length of about 130 kilometers.", "It is known for its rich copper and molybdenum deposits."]
    }
  },
  {
    id: "mount-ara-relief-v2",
    type: "mountain",
    parent: "AM-KT",
    coords: [44.44, 40.40],
    name: { de: "Berg Ara", hu: "Ara-hegy", ro: "Muntele Ara", en: "Mount Ara" },
    description: { de: "Ein markanter erloschener Vulkan nördlich von Jerewan, der für seine reiche Biodiversität bekannt ist.", hu: "Egy feltűnő kialudt vulkán Jerevántól északra, amely gazdag biológiai sokféleségéről ismert.", ro: "Un vulcan stins proeminent la nord de Erevan, cunoscut pentru biodiversitatea sa bogată.", en: "A prominent extinct volcano north of Yerevan known for its rich biodiversity." },
    facts: {
      de: ["Der Berg ist nach dem mythischen armenischen König Ara dem Schönen benannt.", "Seine Höhe beträgt 2577 Meter."],
      hu: ["A hegyet a mitikus örmény királyról, Szép Aráról nevezték el.", "Magassága 2577 méter."],
      ro: ["Muntele poartă numele miticului rege armean Ara cel Frumos.", "Înălțimea sa este de 2577 metri."],
      en: ["The mountain is named after the mythical Armenian king Ara the Handsome.", "Its height is 2577 meters."]
    }
  },
  {
    id: "mount-khustup-relief-v2",
    type: "mountain",
    parent: "AM-SU",
    coords: [46.33, 39.13],
    name: { de: "Berg Chustup", hu: "Husztup-hegy", ro: "Muntele Khustup", en: "Mount Khustup" },
    description: { de: "Ein bedeutender Berg in der Provinz Sjunik, der oft als heiliger Ort betrachtet wird.", hu: "Jelentős hegy Szjunik tartományban, amelyet gyakran szent helynek tekintenek.", ro: "Un munte important în provincia Syunik, considerat adesea un loc sacru.", en: "A significant mountain in the Syunik Province, often considered a sacred place." },
    facts: {
      de: ["Die Höhe des Berges beträgt 3206 Meter.", "Der armenische Nationalheld Garegin Nschdeh ist hier begraben."],
      hu: ["A hegy magassága 3206 méter.", "Garegin Nzseh örmény nemzeti hős itt van eltemetve."],
      ro: ["Înălțimea muntelui este de 3206 metri.", "Eroul național armean Garegin Nzhdeh este înmormântat aici."],
      en: ["The height of the mountain is 3206 meters.", "The Armenian national hero Garegin Nzhdeh is buried here."]
    }
  },
  {
    id: "pambak-mountains-relief-v2",
    type: "mountain",
    parent: "AM-LO",
    coords: [44.4, 40.8],
    name: { de: "Pambak-Gebirge", hu: "Pambak-hegység", ro: "Munții Pambak", en: "Pambak Mountains" },
    description: { de: "Eine von Ost nach West verlaufende Gebirgskette im Norden Armeniens, die dichte Wälder beherbergt.", hu: "Észak-Örményországban keletről nyugatra húzódó hegylánc, amely sűrű erdőknek ad otthont.", ro: "Un lanț muntos care se întinde de la est la vest în nordul Armeniei, găzduind păduri dese.", en: "An east-west oriented mountain range in northern Armenia hosting dense forests." },
    facts: {
      de: ["Der höchste Punkt ist der Berg Teschkenis mit 3016 Metern.", "Der Gebirgszug ist die Quelle der Flüsse Pambak und Aghstew."],
      hu: ["Legmagasabb pontja a 3016 méteres Teskenisz-hegy.", "A hegylánc a Pambak és az Aghsztav folyók forrása."],
      ro: ["Cel mai înalt punct este muntele Teshkenis la 3016 metri.", "Lanțul muntos este sursa râurilor Pambak și Aghstev."],
      en: ["The highest point is Mount Teshkenis at 3016 meters.", "The mountain range is the source of the Pambak and Aghstev rivers."]
    }
  },
  {
    id: "sevan-mountain-range-relief-v2",
    type: "mountain",
    parent: "AM-GR",
    coords: [45.4, 40.3],
    name: { de: "Sewan-Gebirge", hu: "Szeván-hegység", ro: "Munții Sevan", en: "Sevan Mountain Range" },
    description: { de: "Eine Bergkette entlang der östlichen Ufer des Sewansees, die malerische Ausblicke bietet.", hu: "A Szeván-tó keleti partjai mentén húzódó hegylánc, amely festői kilátást nyújt.", ro: "Un lanț muntos de-a lungul malurilor estice ale lacului Sevan, oferind priveliști pitorești.", en: "A mountain range along the eastern shores of Lake Sevan offering picturesque views." },
    facts: {
      de: ["Die Berge bilden eine natürliche Grenze zwischen Armenien und Aserbaidschan.", "Sie schützen den Sewansee vor kalten Winden aus dem Osten."],
      hu: ["A hegyek természetes határt képeznek Örményország és Azerbajdzsán között.", "Megvédik a Szeván-tavat a keletről fújó hideg szelektől."],
      ro: ["Munții formează o graniță naturală între Armenia și Azerbaidjan.", "Ei protejează Lacul Sevan de vânturile reci din est."],
      en: ["The mountains form a natural border between Armenia and Azerbaijan.", "They protect Lake Sevan from cold eastern winds."]
    }
  },
  {
    id: "vardenis-mountains-relief-v2",
    type: "mountain",
    parent: "AM-GR",
    coords: [45.4, 40.1],
    name: { de: "Wardenis-Gebirge", hu: "Vardenisz-hegység", ro: "Munții Vardenis", en: "Vardenis Mountains" },
    description: { de: "Eine Bergkette, die die südliche Grenze des Sewansee-Beckens bildet.", hu: "A Szeván-tó medencéjének déli határát alkotó hegylánc.", ro: "Un lanț muntos care formează granița sudică a bazinului Lacului Sevan.", en: "A mountain range forming the southern boundary of the Lake Sevan basin." },
    facts: {
      de: ["Der höchste Gipfel ist der 3522 Meter hohe Vardenis.", "Die Nordhänge fallen steil zum Sewansee hin ab."],
      hu: ["Legmagasabb csúcsa a 3522 méteres Vardenisz.", "Az északi lejtők meredeken ereszkednek a Szeván-tó felé."],
      ro: ["Cel mai înalt vârf este Vardenis, de 3522 metri.", "Pantele nordice coboară abrupt spre Lacul Sevan."],
      en: ["The highest peak is the 3522-meter Vardenis.", "The northern slopes drop steeply towards Lake Sevan."]
    }
  },
  {
    id: "ararat-plain-relief-v2",
    type: "valley",
    parent: "AM-AR",
    coords: [44.2, 40.1],
    name: { de: "Araratebene", hu: "Araráti-síkság", ro: "Câmpia Ararat", en: "Ararat Plain" },
    description: { de: "Eine weite und fruchtbare Ebene entlang des Flusses Aras, das landwirtschaftliche Herz Armeniens.", hu: "Széles és termékeny síkság az Araksz folyó mentén, Örményország mezőgazdasági szíve.", ro: "O câmpie largă și fertilă de-a lungul râului Aras, inima agricolă a Armeniei.", en: "A wide and fertile plain along the Aras River, the agricultural heart of Armenia." },
    facts: {
      de: ["Die Ebene liegt auf einer Höhe von 800 bis 1000 Metern.", "Sie erhält ihr Wasser hauptsächlich aus den Flüssen Aras und Hrasdan."],
      hu: ["A síkság 800-1000 méteres magasságban fekszik.", "Vizét főként az Araksz és a Hrazdan folyókból kapja."],
      ro: ["Câmpia este situată la o altitudine de 800 până la 1000 de metri.", "Își primește apa în principal din râurile Aras și Hrazdan."],
      en: ["The plain is located at an altitude of 800 to 1000 meters.", "It receives its water mainly from the Aras and Hrazdan rivers."]
    }
  },
  {
    id: "debed-valley-relief-v2",
    type: "valley",
    parent: "AM-LO",
    coords: [44.6, 41.1],
    name: { de: "Debed-Tal", hu: "Debed-völgy", ro: "Valea Debed", en: "Debed Valley" },
    description: { de: "Ein tief eingeschnittenes Flusstal im Norden Armeniens, reich an kulturellen und natürlichen Sehenswürdigkeiten.", hu: "Mélyen bevágott folyóvölgy Észak-Örményországban, amely gazdag kulturális és természeti látnivalókban.", ro: "O vale a râului adânc sculptată în nordul Armeniei, bogată în atracții culturale și naturale.", en: "A deeply incised river valley in northern Armenia, rich in cultural and natural sights." },
    facts: {
      de: ["Der Fluss Debed hat sich tief in das vulkanische Plateau eingeschnitten.", "Das Tal ist ein wichtiger Verkehrskorridor nach Georgien."],
      hu: ["A Debed folyó mélyen bevágta magát a vulkanikus fennsíkba.", "A völgy fontos közlekedési folyosó Grúzia felé."],
      ro: ["Râul Debed s-a tăiat adânc în platoul vulcanic.", "Valea este un important coridor de transport spre Georgia."],
      en: ["The Debed river has cut deeply into the volcanic plateau.", "The valley is an important transport corridor to Georgia."]
    }
  },
  {
    id: "kasakh-river-gorge-relief-v2",
    type: "valley",
    parent: "AM-AG",
    coords: [44.38, 40.35],
    name: { de: "Kasach-Schlucht", hu: "Kaszah-szurdok", ro: "Defileul râului Kasakh", en: "Kasakh River Gorge" },
    description: { de: "Eine beeindruckende Schlucht, die vom Fluss Kasach gegraben wurde und von historischen Klöstern gesäumt ist.", hu: "A Kaszah folyó által vájt lenyűgöző szurdok, amelyet történelmi kolostorok szegélyeznek.", ro: "Un defileu impresionant săpat de râul Kasakh, mărginit de mănăstiri istorice.", en: "An impressive gorge carved by the Kasakh River, lined with historical monasteries." },
    facts: {
      de: ["Die Schlucht erreicht an einigen Stellen eine Tiefe von 200 Metern.", "An ihren Rändern stehen die Klöster Saghmosawank und Howhannawank."],
      hu: ["A szurdok helyenként eléri a 200 méteres mélységet.", "Szélén állnak a Szaghmoszavank és Hovhannavank kolostorok."],
      ro: ["Defileul atinge o adâncime de 200 de metri în unele locuri.", "Pe marginile sale se află mănăstirile Saghmosavank și Hovhannavank."],
      en: ["The gorge reaches a depth of 200 meters in some places.", "The monasteries of Saghmosavank and Hovhannavank stand on its edges."]
    }
  },
  {
    id: "vorotan-gorge-relief-v2",
    type: "valley",
    parent: "AM-SU",
    coords: [46.25, 39.4],
    name: { de: "Worotan-Schlucht", hu: "Vorotan-szurdok", ro: "Defileul Vorotan", en: "Vorotan Gorge" },
    description: { de: "Eine der tiefsten und malerischsten Schluchten Armeniens im Süden des Landes.", hu: "Örményország egyik legmélyebb és legfestőibb szurdoka az ország déli részén.", ro: "Unul dintre cele mai adânci și mai pitorești defileuri din Armenia, situat în sudul țării.", en: "One of the deepest and most picturesque gorges in Armenia, located in the south of the country." },
    facts: {
      de: ["Der Fluss Worotan durchschneidet tiefe Basaltschluchten.", "Die längste Seilbahn der Welt, die Wings of Tatev, überquert diese Schlucht."],
      hu: ["A Vorotan folyó mély bazaltszurdokokat vág át.", "A világ leghosszabb drótkötélpályája, a Tatev szárnyai íveli át e szurdokot."],
      ro: ["Râul Vorotan taie prin defileuri adânci de bazalt.", "Cea mai lungă telecabină din lume, Wings of Tatev, traversează acest defileu."],
      en: ["The Vorotan river cuts through deep basalt gorges.", "The longest cable car in the world, the Wings of Tatev, crosses this gorge."]
    }
  },
  {
    id: "azat-valley-relief-v2",
    type: "valley",
    parent: "AM-KT",
    coords: [44.8, 40.1],
    name: { de: "Azat-Tal", hu: "Azat-völgy", ro: "Valea Azat", en: "Azat Valley" },
    description: { de: "Ein malerisches Tal in der Region Kotajk, das teilweise zum UNESCO-Welterbe gehört.", hu: "Festői völgy Kotajk régióban, amely részben az UNESCO világörökség része.", ro: "O vale pitorească în regiunea Kotayk, parțial inclusă în Patrimoniul Mondial UNESCO.", en: "A picturesque valley in the Kotayk region, partly designated as a UNESCO World Heritage site." },
    facts: {
      de: ["Das obere Azat-Tal ist Teil des UNESCO-Welterbes.", "Hier befindet sich die berühmte Basaltformation Symphonie der Steine."],
      hu: ["A Felső-Azat-völgy az UNESCO világörökség része.", "Itt található a híres Kövek szimfóniája bazaltképződmény."],
      ro: ["Valea superioară Azat face parte din Patrimoniul Mondial UNESCO.", "Aici se află faimoasa formațiune de bazalt Simfonia Pietrelor."],
      en: ["The upper Azat Valley is part of the UNESCO World Heritage.", "The famous Symphony of Stones basalt formation is located here."]
    }
  },
  {
    id: "shirak-plain-relief-v2",
    type: "plateau",
    parent: "AM-SH",
    coords: [43.8, 40.7],
    name: { de: "Schirak-Ebene", hu: "Siraki-síkság", ro: "Câmpia Shirak", en: "Shirak Plain" },
    description: { de: "Ein großes Hochplateau im Nordwesten Armeniens, das für seine kalten Winter und fruchtbaren Böden bekannt ist.", hu: "Egy nagy fennsík Északnyugat-Örményországban, amely hideg teleiről és termékeny talajáról ismert.", ro: "Un mare platou înalt în nord-vestul Armeniei, cunoscut pentru iernile sale reci și solurile fertile.", en: "A large high plateau in northwestern Armenia known for its cold winters and fertile soils." },
    facts: {
      de: ["Es ist eines der wichtigsten landwirtschaftlichen Zentren Armeniens.", "Die Region ist bekannt für den Anbau von Getreide und Zuckerrüben."],
      hu: ["Örményország egyik legfontosabb mezőgazdasági központja.", "A régió a gabona és a cukorrépa termesztéséről ismert."],
      ro: ["Este unul dintre cele mai importante centre agricole din Armenia.", "Regiunea este cunoscută pentru cultivarea cerealelor și a sfeclei de zahăr."],
      en: ["It is one of the most important agricultural centers of Armenia.", "The region is known for growing grain and sugar beets."]
    }
  },
  {
    id: "lori-plateau-relief-v2",
    type: "plateau",
    parent: "AM-LO",
    coords: [44.4, 41.0],
    name: { de: "Lori-Plateau", hu: "Lori-fennsík", ro: "Platoul Lori", en: "Lori Plateau" },
    description: { de: "Ein von tiefen Flusstälern durchzogenes vulkanisches Plateau im Norden des Landes.", hu: "Az ország északi részén található, mély folyóvölgyekkel szabdalt vulkanikus fennsík.", ro: "Un platou vulcanic străbătut de văi adânci ale râurilor din nordul țării.", en: "A volcanic plateau intersected by deep river valleys in the north of the country." },
    facts: {
      de: ["Das Plateau liegt auf einer Höhe von 1300 bis 1600 Metern.", "Es ist durch eine hügelige Landschaft mit tiefen Schluchten gekennzeichnet."],
      hu: ["A fennsík 1300-1600 méteres magasságban fekszik.", "Mély szurdokokkal szabdalt dombos táj jellemzi."],
      ro: ["Platoul se află la o altitudine de 1300 până la 1600 de metri.", "Se caracterizează printr-un peisaj deluros cu defileuri adânci."],
      en: ["The plateau is located at an altitude of 1300 to 1600 meters.", "It is characterized by a hilly landscape with deep gorges."]
    }
  },
  {
    id: "kotayk-plateau-relief-v2",
    type: "plateau",
    parent: "AM-KT",
    coords: [44.6, 40.3],
    name: { de: "Kotajk-Plateau", hu: "Kotajk-fennsík", ro: "Platoul Kotayk", en: "Kotayk Plateau" },
    description: { de: "Eine wellige Hochfläche, die sich zwischen dem Hrasdan-Tal und den Geghama-Bergen erstreckt.", hu: "Hullámzó fennsík, amely a Hrazdan-völgy és a Geghama-hegység között húzódik.", ro: "O suprafață înaltă ondulată care se întinde între valea Hrazdan și munții Geghama.", en: "An undulating highland stretching between the Hrazdan Valley and the Geghama Mountains." },
    facts: {
      de: ["Die Böden des Plateaus sind reich an vulkanischer Asche.", "Die Stadt Hrasdan ist das industrielle Zentrum dieser Region."],
      hu: ["A fennsík talaja vulkáni hamuban gazdag.", "Hrazdan városa a régió ipari központja."],
      ro: ["Solurile platoului sunt bogate în cenușă vulcanică.", "Orașul Hrazdan este centrul industrial al acestei regiuni."],
      en: ["The soils of the plateau are rich in volcanic ash.", "The city of Hrazdan is the industrial center of this region."]
    }
  },
  {
    id: "mets-ishkhanasar-relief-v2",
    type: "mountain",
    parent: "AM-SU",
    coords: [46.17, 39.58],
    name: { de: "Mets Ischchanasar", hu: "Metsz Iszhanaszar", ro: "Mets Ishkhanasar", en: "Mets Ishkhanasar" },
    description: { de: "Ein markanter Vulkankegel in der Provinz Sjunik nahe der aserbaidschanischen Grenze.", hu: "Feltűnő vulkáni kúp Szjunik tartományban, az azerbajdzsáni határ közelében.", ro: "Un con vulcanic proeminent în provincia Syunik, lângă granița cu Azerbaidjan.", en: "A prominent volcanic cone in the Syunik Province near the Azerbaijani border." },
    facts: {
      de: ["Der Berg erreicht eine Höhe von 3550 Metern.", "An seinem Hang liegt der idyllische Sew-See (Schwarzer See)."],
      hu: ["A hegy eléri a 3550 méteres magasságot.", "Lejtőjén fekszik az idilli Szev-tó (Fekete-tó)."],
      ro: ["Muntele atinge o înălțime de 3550 de metri.", "Pe versantul său se află idilicul Lac Sev (Lacul Negru)."],
      en: ["The mountain reaches a height of 3550 meters.", "The idyllic Lake Sev (Black Lake) is located on its slope."]
    }
  },
  {
    id: "vayk-mountain-range-relief-v2",
    type: "mountain",
    parent: "AM-VD",
    coords: [45.4, 39.6],
    name: { de: "Wajoz-Dsor-Gebirge", hu: "Vajk-hegység", ro: "Munții Vayk", en: "Vayk Mountain Range" },
    description: { de: "Ein zerklüfteter Gebirgszug im Süden Armeniens, der durch seine Trockenheit und Steilheit auffällt.", hu: "Zord hegylánc Örményország déli részén, amely szárazságával és meredekségével tűnik ki.", ro: "Un lanț muntos accidentat în sudul Armeniei, care iese în evidență prin ariditate și pante abrupte.", en: "A rugged mountain range in southern Armenia, standing out for its aridity and steepness." },
    facts: {
      de: ["Die Bergkette erstreckt sich über etwa 60 Kilometer.", "Der höchste Punkt ist der Berg Gogi mit 3120 Metern."],
      hu: ["A hegylánc körülbelül 60 kilométeren át húzódik.", "Legmagasabb pontja a 3120 méteres Gogi-hegy."],
      ro: ["Lanțul muntos se întinde pe aproximativ 60 de kilometri.", "Cel mai înalt punct este muntele Gogi la 3120 metri."],
      en: ["The mountain range stretches for about 60 kilometers.", "The highest point is Mount Gogi at 3120 meters."]
    }
  }
];