import type { POI } from "./poi";

export const poiExtraTaiwanReliefV2: POI[] = [
  {
    id: "yushan-relief-v2",
    type: "mountain",
    parent: "TW-NAN",
    coords: [120.9573, 23.4700],
    name: { de: "Yushan", hu: "Yushan", ro: "Muntele Yushan", en: "Yushan" },
    description: {
      de: "Mit 3.952 Metern der höchste Berg Taiwans und ein Wahrzeichen der Insel.",
      hu: "Tajvan legmagasabb csúcsa, egy 3952 méter magas hegy, a sziget jelképe.",
      ro: "Cel mai înalt vârf din Taiwan, cu 3.952 metri, fiind un simbol al insulei.",
      en: "At 3,952 meters, it is the highest peak in Taiwan and a symbol of the island."
    },
    facts: {
      de: ["Höchster Berg in Taiwan.", "3.952 Meter hoch.", "Oft als Jadeberg bezeichnet.", "Teil der zentralen Gebirgskette."],
      hu: ["Tajvan legmagasabb hegye.", "3952 méter magas.", "Gyakran Jáde-hegyként emlegetik.", "A Központi-hegység része."],
      ro: ["Cel mai înalt munte din Taiwan.", "Are 3.952 metri înălțime.", "Numit adesea Muntele de Jad.", "Parte a Lanțului Muntos Central."],
      en: ["Highest mountain in Taiwan.", "3,952 meters tall.", "Often called Jade Mountain.", "Part of the Central Range."]
    }
  },
  {
    id: "xueshan-relief-v2",
    type: "mountain",
    parent: "TW-TXG",
    coords: [121.2319, 24.3828],
    name: { de: "Xueshan", hu: "Xueshan", ro: "Muntele Xueshan", en: "Xueshan" },
    description: {
      de: "Der zweithöchste Berg Taiwans, berühmt für seine eiszeitlichen Formationen.",
      hu: "Tajvan második legmagasabb hegye, mely jégkorszaki formációiról híres.",
      ro: "Al doilea cel mai înalt munte din Taiwan, faimos pentru formațiunile sale glaciare.",
      en: "The second highest mountain in Taiwan, famous for its glacial formations."
    },
    facts: {
      de: ["Zweithöchster Berg Taiwans.", "3.886 Meter hoch.", "Bedeutet \"Schneeberg\".", "Heimat seltener Flora."],
      hu: ["Tajvan második legmagasabb csúcsa.", "3886 méter magas.", "Jelentése \"Hó-hegy\".", "Ritka növények élőhelye."],
      ro: ["Al doilea cel mai înalt munte.", "Are 3.886 metri înălțime.", "Înseamnă \"Muntele de Zăpadă\".", "Găzduiește floră rară."],
      en: ["Second highest mountain.", "Stands 3,886 meters tall.", "Means \"Snow Mountain\".", "Home to rare flora."]
    }
  },
  {
    id: "qingshui-cliff-relief-v2",
    type: "coast",
    parent: "TW-HUA",
    coords: [121.6736, 24.2052],
    name: { de: "Qingshui-Kliff", hu: "Qingshui-szikla", ro: "Stânca Qingshui", en: "Qingshui Cliff" },
    description: {
      de: "Spektakuläre Klippen, die fast senkrecht in den Pazifischen Ozean abfallen.",
      hu: "Látványos sziklák, melyek szinte függőlegesen zuhannak a Csendes-óceánba.",
      ro: "Stânci spectaculoase care coboară aproape vertical în Oceanul Pacific.",
      en: "Spectacular cliffs that drop almost vertically into the Pacific Ocean."
    },
    facts: {
      de: ["Mehr als 1.000 Meter hoch.", "Erstreckt sich über 21 Kilometer.", "Teil des Taroko-Nationalparks.", "Besteht aus Marmor und Gneis."],
      hu: ["Több mint 1000 méter magas.", "21 kilométer hosszan húzódik.", "A Taroko Nemzeti Park része.", "Márványból és gneiszből áll."],
      ro: ["Peste 1.000 de metri înălțime.", "Se întinde pe 21 de kilometri.", "Parte a Parcului Național Taroko.", "Făcută din marmură și gnais."],
      en: ["Over 1,000 meters high.", "Stretches for 21 kilometers.", "Part of Taroko National Park.", "Made of marble and gneiss."]
    }
  },
  {
    id: "east-rift-valley-relief-v2",
    type: "valley",
    parent: "TW-HUA",
    coords: [121.3650, 23.2720],
    name: { de: "Huadong-Tal", hu: "Huadong-völgy", ro: "Valea Huadong", en: "East Rift Valley" },
    description: {
      de: "Ein fruchtbares Tal zwischen dem Zentralgebirge und dem Küstengebirge.",
      hu: "Termékeny völgy a Központi-hegység és a Parti-hegység között.",
      ro: "O vale fertilă situată între Lanțul Muntos Central și cel de Coastă.",
      en: "A fertile valley located between the Central and Coastal mountain ranges."
    },
    facts: {
      de: ["160 Kilometer lang.", "Geprägt von Landwirtschaft.", "Liegt an einer Plattengrenze.", "Bekannt für heiße Quellen."],
      hu: ["160 kilométer hosszú.", "Mezőgazdasági terület.", "Két tektonikus lemez határán fekszik.", "Hőforrásairól is ismert."],
      ro: ["Lungă de 160 de kilometri.", "Dominată de agricultură.", "Situată pe o graniță tectonică.", "Cunoscută pentru izvoare termale."],
      en: ["160 kilometers long.", "Dominated by agriculture.", "Located on a tectonic boundary.", "Known for hot springs."]
    }
  },
  {
    id: "hehuanshan-relief-v2",
    type: "mountain",
    parent: "TW-NAN",
    coords: [121.2811, 24.1417],
    name: { de: "Hehuanshan", hu: "Hehuanshan", ro: "Muntele Hehuan", en: "Hehuanshan" },
    description: {
      de: "Ein leicht zugänglicher Dreitausender, der oft im Winter Schnee trägt.",
      hu: "Egy könnyen megközelíthető, 3000 méter feletti hegy, amely télen gyakran havas.",
      ro: "Un munte accesibil de peste trei mii de metri, adesea acoperit de zăpadă iarna.",
      en: "An accessible 3,000-meter peak that is often covered in snow during winter."
    },
    facts: {
      de: ["3.416 Meter hoch.", "Beliebt für Sonnenaufgänge.", "Straße führt bis zum Gipfel.", "Oft schneebedeckt im Winter."],
      hu: ["3416 méter magas.", "Népszerű a napfelkelték miatt.", "Út vezet majdnem a csúcsig.", "Télen gyakran hó fedi."],
      ro: ["Are 3.416 metri înălțime.", "Popular pentru răsărituri.", "Un drum duce până în vârf.", "Adesea înzăpezit iarna."],
      en: ["3,416 meters tall.", "Popular for sunrises.", "A road goes near the summit.", "Often snow-capped in winter."]
    }
  },
  {
    id: "qixingshan-relief-v2",
    type: "mountain",
    parent: "TW-TPE",
    coords: [121.5539, 25.1708],
    name: { de: "Qixingshan", hu: "Qixingshan", ro: "Muntele Qixing", en: "Qixingshan" },
    description: {
      de: "Ein ruhender Vulkan und der höchste Berg im Großraum Taipeh.",
      hu: "Egy szunnyadó vulkán és a tágabb Tajpej régió legmagasabb hegye.",
      ro: "Un vulcan adormit și cel mai înalt munte din zona metropolitană Taipei.",
      en: "A dormant volcano and the highest mountain in the Taipei metropolitan area."
    },
    facts: {
      de: ["Höchster Punkt von Taipeh.", "1.120 Meter hoch.", "Name bedeutet \"Siebensterneberg\".", "Liegt im Yangmingshan-Nationalpark."],
      hu: ["Tajpej legmagasabb pontja.", "1120 méter magas.", "Neve \"Hétcsillag-hegyet\" jelent.", "A Yangmingshan Nemzeti Park része."],
      ro: ["Cel mai înalt punct din Taipei.", "1.120 metri înălțime.", "Înseamnă \"Muntele cu Șapte Stele\".", "Situat în Parcul Național Yangmingshan."],
      en: ["Highest point in Taipei.", "1,120 meters tall.", "Means \"Seven Star Mountain\".", "Located in Yangmingshan National Park."]
    }
  },
  {
    id: "dabajianshan-relief-v2",
    type: "mountain",
    parent: "TW-HSQ",
    coords: [121.2619, 24.4608],
    name: { de: "Dabajianshan", hu: "Dabajianshan", ro: "Muntele Dabajian", en: "Dabajianshan" },
    description: {
      de: "Ein markanter, fassförmiger Berg, der für Ureinwohner heilig ist.",
      hu: "Egy jellegzetes, hordó alakú hegy, amely az őslakosok számára szent hely.",
      ro: "Un munte distinctiv, în formă de butoi, sacru pentru popoarele indigene.",
      en: "A distinctive barrel-shaped mountain that is sacred to indigenous people."
    },
    facts: {
      de: ["3.492 Meter hoch.", "Teil der Shei-Pa-Bergkette.", "Bekannt für steile Klippen.", "Heiligtum der Atayal und Saisiyat."],
      hu: ["3492 méter magas.", "A Shei-Pa hegység része.", "Meredek szikláiról ismert.", "Az Atayal és Saisiyat népek szentélye."],
      ro: ["3.492 de metri înălțime.", "Parte a lanțului Shei-Pa.", "Cunoscut pentru stâncile abrupte.", "Sacru pentru Atayal și Saisiyat."],
      en: ["3,492 meters tall.", "Part of the Shei-Pa range.", "Known for sheer cliffs.", "Sacred to Atayal and Saisiyat."]
    }
  },
  {
    id: "laomei-green-reef-relief-v2",
    type: "coast",
    parent: "TW-NWT",
    coords: [121.5447, 25.2925],
    name: { de: "Laomei-Grünriff", hu: "Laomei zöld zátony", ro: "Reciful Verde Laomei", en: "Laomei Green Reef" },
    description: {
      de: "Eine Küstenformation mit von Vulkanismus geformten Rinnen, die im Frühjahr mit grünen Algen bedeckt sind.",
      hu: "Vulkanikus tevékenység által formált parti zátony, melyet tavasszal zöld alga borít.",
      ro: "O formațiune de coastă cu șanțuri vulcanice acoperite de alge verzi primăvara.",
      en: "A coastal formation with volcanic trenches covered in green algae during spring."
    },
    facts: {
      de: ["Gegründet durch Vulkangestein.", "Rinnen vom Meer geformt.", "Leuchtend grün im Frühling.", "Einzigartiges Küstenphänomen."],
      hu: ["Vulkanikus kőzetből alakult ki.", "A tenger vájta ki a barázdákat.", "Tavasszal élénkzöld színű.", "Egyedülálló természeti jelenség."],
      ro: ["Format din rocă vulcanică.", "Șanțuri sculptate de mare.", "Verde strălucitor primăvara.", "Un fenomen de coastă unic."],
      en: ["Formed from volcanic rock.", "Trenches carved by the sea.", "Vibrant green in spring.", "A unique coastal phenomenon."]
    }
  },
  {
    id: "nanhushan-relief-v2",
    type: "mountain",
    parent: "TW-TXG",
    coords: [121.4344, 24.3619],
    name: { de: "Nanhushan", hu: "Nanhushan", ro: "Muntele Nanhu", en: "Nanhushan" },
    description: {
      de: "Ein massiver Berggipfel im Zentralgebirge, bekannt für seine rauen und weiten Landschaften.",
      hu: "Egy hatalmas hegycsúcs a Központi-hegységben, amely zord és kiterjedt tájairól ismert.",
      ro: "Un vârf masiv din Lanțul Muntos Central, cunoscut pentru peisajele sale aspre și vaste.",
      en: "A massive peak in the Central Mountain Range, known for its rugged and vast landscapes."
    },
    facts: {
      de: ["3.742 Meter hoch.", "Gilt als König des Zentralgebirges.", "Beliebt bei erfahrenen Bergsteigern.", "Hat eiszeitliche Spuren."],
      hu: ["3742 méter magas.", "A Központi-hegység királyának is hívják.", "Népszerű a tapasztalt hegymászók körében.", "Jégkorszaki nyomok találhatók rajta."],
      ro: ["Are 3.742 metri înălțime.", "Numit regele Lanțului Central.", "Popular printre alpiniștii experimentați.", "Prezintă urme glaciare."],
      en: ["3,742 meters tall.", "Called the king of the Central Range.", "Popular with experienced climbers.", "Has glacial remnants."]
    }
  },
  {
    id: "liji-badlands-relief-v2",
    type: "valley",
    parent: "TW-TTT",
    coords: [121.1394, 22.8122],
    name: { de: "Liji-Badlands", hu: "Liji rosszföldek", ro: "Badlands-urile Liji", en: "Liji Badlands" },
    description: {
      de: "Eine unwirkliche mondähnliche Landschaft aus erodiertem Schlammstein nahe Taitung.",
      hu: "Egy szürreális, holdszerű táj, amelyet erodált iszapkőzet alkot Taitung közelében.",
      ro: "Un peisaj ireal, asemănător lunii, format din rocă sedimentară erodată lângă Taitung.",
      en: "A surreal moon-like landscape composed of eroded mudstone near Taitung."
    },
    facts: {
      de: ["Besteht aus Liji-Mélange.", "Oft als Mondlandschaft bezeichnet.", "Kaum Vegetation möglich.", "Entstand durch Plattentektonik."],
      hu: ["A Liji-melanzsból áll.", "Gyakran holdbéli tájnak nevezik.", "Alig van rajta növényzet.", "Lemeztektonikai folyamatok hozták létre."],
      ro: ["Compus din melanj Liji.", "Adesea numit peisaj lunar.", "Aproape lipsit de vegetație.", "Format de tectonica plăcilor."],
      en: ["Composed of Liji mélange.", "Often called a moonscape.", "Hardly any vegetation.", "Formed by plate tectonics."]
    }
  },
  {
    id: "xiuguluanshan-relief-v2",
    type: "mountain",
    parent: "TW-HUA",
    coords: [121.0664, 23.5303],
    name: { de: "Xiuguluanshan", hu: "Xiuguluanshan", ro: "Muntele Xiuguluan", en: "Xiuguluanshan" },
    description: {
      de: "Der höchste Punkt des Yushan-Nationalparks außerhalb des Yushan-Hauptgipfels selbst.",
      hu: "A Yushan Nemzeti Park legmagasabb pontja a Yushan főcsúcsán kívül.",
      ro: "Cel mai înalt punct din Parcul Național Yushan, în afară de vârful principal Yushan.",
      en: "The highest point of Yushan National Park outside of the main Yushan peak itself."
    },
    facts: {
      de: ["3.825 Meter hoch.", "Liegt im Yushan-Nationalpark.", "Quellgebiet des Xiuguluan-Flusses.", "Weite Ausblicke über die Insel."],
      hu: ["3825 méter magas.", "A Yushan Nemzeti Parkban fekszik.", "A Xiuguluan folyó forrásvidéke.", "Széles kilátást nyújt a szigetre."],
      ro: ["Are 3.825 metri înălțime.", "Situat în Parcul Național Yushan.", "Izvorul râului Xiuguluan.", "Oferă priveliști largi asupra insulei."],
      en: ["3,825 meters tall.", "Located in Yushan National Park.", "Source of the Xiuguluan River.", "Offers sweeping island views."]
    }
  },
  {
    id: "beidawushan-relief-v2",
    type: "mountain",
    parent: "TW-PIF",
    coords: [120.7619, 22.6272],
    name: { de: "Beidawushan", hu: "Beidawushan", ro: "Muntele Beidawu", en: "Beidawushan" },
    description: {
      de: "Der südlichste Dreitausender Taiwans, berühmt für seine dichten Wolkenmeere.",
      hu: "Tajvan legdélebbi 3000 méter feletti hegye, sűrű felhőtengereiről híres.",
      ro: "Cel mai sudic vârf de peste 3.000 de metri din Taiwan, faimos pentru marea sa de nori.",
      en: "Taiwan's southernmost 3,000-meter peak, famous for its dense seas of clouds."
    },
    facts: {
      de: ["3.092 Meter hoch.", "Südlichster Dreitausender Taiwans.", "Heilig für das Rukai-Volk.", "Bekannt für unglaubliche Wolkenmeere."],
      hu: ["3092 méter magas.", "A sziget legdélebbi 3000-es csúcsa.", "A Rukai nép szent hegye.", "Lélegzetelállító felhőtengereiről ismert."],
      ro: ["Are 3.092 metri înălțime.", "Cel mai sudic pisc de 3.000m.", "Munte sacru pentru poporul Rukai.", "Cunoscut pentru mările de nori."],
      en: ["3,092 meters tall.", "Southernmost 3,000m peak.", "Sacred to the Rukai people.", "Known for incredible seas of clouds."]
    }
  },
  {
    id: "qilaishan-relief-v2",
    type: "mountain",
    parent: "TW-HUA",
    coords: [121.3289, 24.1089],
    name: { de: "Qilaishan", hu: "Qilaishan", ro: "Muntele Qilai", en: "Qilaishan" },
    description: {
      de: "Ein zerklüfteter Berg, der wegen seiner extrem steilen Klippen als \"Schwarzer Berg\" bekannt ist.",
      hu: "Egy zord hegy, amelyet rendkívül meredek sziklái miatt \"Fekete Hegynek\" is neveznek.",
      ro: "Un munte accidentat, cunoscut sub numele de \"Muntele Negru\" din cauza stâncilor abrupte.",
      en: "A rugged mountain known as the \"Black Mountain\" due to its extremely steep cliffs."
    },
    facts: {
      de: ["3.560 Meter hoch.", "Hat sehr steile Klippen.", "Gilt als gefährlicher Aufstieg.", "Oft in schwarze Felsen gehüllt."],
      hu: ["3560 méter magas.", "Nagyon meredek szikláfalakkal bír.", "Veszélyes mászást igényel.", "Gyakran fekete sziklák borítják."],
      ro: ["Are 3.560 metri înălțime.", "Are stânci foarte abrupte.", "Considerată o ascensiune periculoasă.", "Adesea acoperit de roci negre."],
      en: ["3,560 meters tall.", "Has very steep cliffs.", "Considered a dangerous climb.", "Often covered in black rock."]
    }
  },
  {
    id: "guanshan-relief-v2",
    type: "mountain",
    parent: "TW-KHH",
    coords: [120.9083, 23.2428],
    name: { de: "Guanshan", hu: "Guanshan", ro: "Muntele Guan", en: "Guanshan" },
    description: {
      de: "Einer der prominentesten Gipfel im südlichen Abschnitt des Zentralgebirges.",
      hu: "A Központi-hegység déli szakaszának egyik legkiemelkedőbb hegycsúcsa.",
      ro: "Unul dintre cele mai proeminente vârfuri din secțiunea sudică a Lanțului Central.",
      en: "One of the most prominent peaks in the southern section of the Central Mountain Range."
    },
    facts: {
      de: ["3.668 Meter hoch.", "Sticht in Südtaiwan hervor.", "Gehört zum Yushan-Nationalpark.", "Formt eine markante Pyramide."],
      hu: ["3668 méter magas.", "Dél-Tajvan egyik legfontosabb hegye.", "A Yushan Nemzeti Park része.", "Jellegzetes piramis alakot formál."],
      ro: ["Are 3.668 metri înălțime.", "Se distinge în sudul Taiwanului.", "Parte a Parcului Național Yushan.", "Formează o piramidă distinctivă."],
      en: ["3,668 meters tall.", "Stands out in southern Taiwan.", "Part of Yushan National Park.", "Forms a distinctive pyramid."]
    }
  },
  {
    id: "pintianshan-relief-v2",
    type: "mountain",
    parent: "TW-HSQ",
    coords: [121.2611, 24.4283],
    name: { de: "Pintianshan", hu: "Pintianshan", ro: "Muntele Pintian", en: "Pintianshan" },
    description: {
      de: "Ein Berg mit spektakulären V-förmigen Schluchten, bekannt als die Wuling-Vier-Berge.",
      hu: "Látványos V-alakú szurdokokkal tagolt hegy, a Wuling Négy Hegyének egyike.",
      ro: "Un munte cu defilee spectaculoase în formă de V, cunoscut ca parte a Celor Patru Munți Wuling.",
      en: "A mountain with spectacular V-shaped ravines, known as part of the Wuling Four Mountains."
    },
    facts: {
      de: ["3.524 Meter hoch.", "Hat die berühmte V-Klippe.", "Teil der Shei-Pa-Gebirgskette.", "Beliebt für technisch anspruchsvolle Wanderungen."],
      hu: ["3524 méter magas.", "Itt található a híres V-szikla.", "A Shei-Pa hegylánc része.", "Népszerű a technikás túrázók körében."],
      ro: ["Are 3.524 metri înălțime.", "Are celebra Stâncă în V.", "Parte a lanțului montan Shei-Pa.", "Popular pentru drumeții tehnice."],
      en: ["3,524 meters tall.", "Features the famous V-cliff.", "Part of the Shei-Pa mountain range.", "Popular for technical hikes."]
    }
  },
  {
    id: "taipingshan-relief-v2",
    type: "mountain",
    parent: "TW-ILN",
    coords: [121.5369, 24.4947],
    name: { de: "Taipingshan", hu: "Taipingshan", ro: "Muntele Taiping", en: "Taipingshan" },
    description: {
      de: "Ein dicht bewaldeter Berg, der früher ein wichtiges Zentrum der Holzindustrie war.",
      hu: "Sűrű erdővel borított hegy, amely régen a faipar fontos központja volt.",
      ro: "Un munte dens împădurit, care a fost în trecut un centru major al exploatării forestiere.",
      en: "A densely forested mountain that was formerly a major center for the logging industry."
    },
    facts: {
      de: ["Gipfelhöhe ca. 1.950 Meter.", "Bekannt für alte Zypressenwälder.", "Hat historische Holzfällerpfade.", "Oft in dichten Nebel gehüllt."],
      hu: ["A csúcs magassága kb. 1950 méter.", "Öreg cipruserdőiről ismert.", "Történelmi favágóösvényekkel rendelkezik.", "Gyakran sűrű köd borítja."],
      ro: ["Altitudine de aproximativ 1.950m.", "Cunoscut pentru pădurile de chiparoși vechi.", "Are trasee istorice forestiere.", "Adesea învăluit în ceață deasă."],
      en: ["Summit elevation around 1,950m.", "Known for old-growth cypress forests.", "Features historic logging trails.", "Often shrouded in thick fog."]
    }
  },
  {
    id: "dulanshan-relief-v2",
    type: "mountain",
    parent: "TW-TTT",
    coords: [121.1925, 22.9056],
    name: { de: "Dulanshan", hu: "Dulanshan", ro: "Muntele Dulan", en: "Dulanshan" },
    description: {
      de: "Ein markanter Berg an der Ostküste, der für die indigenen Amis und Puyuma von spiritueller Bedeutung ist.",
      hu: "Egy kiemelkedő hegy a keleti parton, mely spirituális jelentőséggel bír az amis és puyuma őslakosok számára.",
      ro: "Un munte proeminent pe coasta de est, de importanță spirituală pentru popoarele indigene Amis și Puyuma.",
      en: "A prominent mountain on the east coast with spiritual significance for the indigenous Amis and Puyuma people."
    },
    facts: {
      de: ["1.190 Meter hoch.", "Liegt in der Nähe der Küste.", "Wichtiger Ort für Rituale.", "Reich an tropischen Pflanzen."],
      hu: ["1190 méter magas.", "Közvetlenül a part közelében fekszik.", "Fontos rituálék helyszíne.", "Trópusi növényekben gazdag."],
      ro: ["1.190 de metri înălțime.", "Situat aproape de coastă.", "Loc important pentru ritualuri.", "Bogat în plante tropicale."],
      en: ["1,190 meters tall.", "Located close to the coast.", "Important site for rituals.", "Rich in tropical plants."]
    }
  },
  {
    id: "dajianshan-relief-v2",
    type: "mountain",
    parent: "TW-PIF",
    coords: [120.8039, 21.9422],
    name: { de: "Dajianshan", hu: "Dajianshan", ro: "Muntele Dajian", en: "Dajianshan" },
    description: {
      de: "Ein markanter Felsengipfel im Kenting-Nationalpark, der oft als Matterhorn des Südens bezeichnet wird.",
      hu: "Jellegzetes sziklacsúcs a Kenting Nemzeti Parkban, amit gyakran Dél-Tajvan Matterhornjának neveznek.",
      ro: "Un vârf stâncos distinctiv în Parcul Național Kenting, numit adesea Matterhorn-ul Sudului.",
      en: "A distinctive rocky peak in Kenting National Park, often referred to as the Matterhorn of the South."
    },
    facts: {
      de: ["Nur 318 Meter hoch.", "Sehr steile Felswände.", "Wahrzeichen von Kenting.", "Klettern ist verboten."],
      hu: ["Mindössze 318 méter magas.", "Rendkívül meredek sziklafalak.", "Kenting egyik jelképe.", "A hegymászás tilos rajta."],
      ro: ["Are doar 318 metri înălțime.", "Pereți de stâncă foarte abrupți.", "Un simbol al zonei Kenting.", "Alpinismul este interzis."],
      en: ["Only 318 meters tall.", "Very steep rock faces.", "A landmark of Kenting.", "Rock climbing is prohibited."]
    }
  },
  {
    id: "shitoushan-relief-v2",
    type: "mountain",
    parent: "TW-HSQ",
    coords: [121.0092, 24.6464],
    name: { de: "Shitoushan", hu: "Oroszlánfej-hegy", ro: "Muntele Shitou", en: "Lion's Head Mountain" },
    description: {
      de: "Ein sanfter Bergrücken, der für seine buddhistischen Höhlentempel in den Felswänden bekannt ist.",
      hu: "Egy enyhe hegygerinc, amely a sziklafalakba vájt buddhista barlangtemplomairól híres.",
      ro: "O creastă montană blândă, faimoasă pentru templele sale budiste sculptate în stâncă.",
      en: "A gentle mountain ridge famous for its Buddhist cave temples carved into the cliff faces."
    },
    facts: {
      de: ["492 Meter hoch.", "Sieht aus wie ein Löwenkopf.", "Besitzt viele Tempel.", "Teil eines Landschaftsgebiets."],
      hu: ["492 méter magas.", "Egy oroszlán fejére emlékeztet.", "Számos templommal rendelkezik.", "Festői terület része."],
      ro: ["Are 492 de metri înălțime.", "Arată ca un cap de leu.", "Găzduiește multe temple.", "Parte a unei zone pitorești."],
      en: ["492 meters tall.", "Looks like a lion's head.", "Houses many temples.", "Part of a scenic area."]
    }
  },
  {
    id: "alangyi-coast-relief-v2",
    type: "coast",
    parent: "TW-PIF",
    coords: [120.8931, 22.2514],
    name: { de: "Alangyi-Küste", hu: "Alangyi-partvidék", ro: "Coasta Alangyi", en: "Alangyi Coast" },
    description: {
      de: "Eine der wenigen verbliebenen unberührten Küstenlinien Taiwans, berühmt für ihre runden Kieselsteine.",
      hu: "Tajvan egyik utolsó érintetlen partvidéke, amely kerek kavicsos strandjairól híres.",
      ro: "Una dintre puținele coaste neatinse rămase în Taiwan, faimoasă pentru plajele sale cu pietriș rotund.",
      en: "One of Taiwan's few remaining pristine coastlines, famous for its round pebble beaches."
    },
    facts: {
      de: ["Unberührte Natur.", "Bekannt für den Alangyi-Pfad.", "Keine Straßen entlang der Küste.", "Naturschutzgebiet für Schildkröten."],
      hu: ["Érintetlen természetes állapot.", "Az Alangyi-ösvényről ismert.", "Nincsenek utak a part mentén.", "Teknősök természetvédelmi területe."],
      ro: ["Natură neatinsă.", "Cunoscută pentru traseul Alangyi.", "Fără drumuri de-a lungul coastei.", "Rezervație pentru țestoase."],
      en: ["Pristine natural environment.", "Known for the Alangyi Historic Trail.", "No roads along the coastline.", "Conservation area for turtles."]
    }
  }
];
