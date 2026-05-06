// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraChinaLandmarksV2: POI[] = [
  {
    id: "great-wall-of-china-landmarks-v2",
    type: "landmark",
    parent: "CN-HE",
    coords: [117.2333, 40.6833],
    name: {
      de: "Chinesische Mauer",
      hu: "Kínai nagy fal",
      ro: "Marele Zid Chinezesc",
      en: "Great Wall of China"
    },
    description: {
      de: "Eine Reihe von Befestigungsanlagen, die quer durch die historischen Nordgrenzen Chinas gebaut wurden, um chinesische Staaten und Reiche zu schützen.",
      hu: "Védelmi erődítmények sorozata, amelyek Kína történelmi északi határain húzódnak, hogy megvédjék a kínai államokat és birodalmakat.",
      ro: "O serie de fortificații construite de-a lungul frontierelor istorice de nord ale Chinei pentru a proteja statele și imperiile chineze.",
      en: "A series of fortifications built across the historical northern borders of China to protect Chinese states and empires."
    },
    facts: {
      de: ["Die Gesamtlänge beträgt über 21.000 km.", "Wurde über Jahrhunderte von verschiedenen Dynastien gebaut.", "Ist ein UNESCO-Weltkulturerbe."],
      hu: ["Teljes hossza több mint 21 000 km.", "Évszázadokon át különböző dinasztiák építették.", "Az UNESCO Világörökség része."],
      ro: ["Lungimea totală este de peste 21.000 km.", "A fost construit de-a lungul secolelor de diverse dinastii.", "Este un sit al Patrimoniului Mondial UNESCO."],
      en: ["The total length is over 21,000 km.", "Built over centuries by various dynasties.", "It is a UNESCO World Heritage Site."]
    }, image: "/poi-images/great-wall-of-china-landmarks-v2.webp"},
  {
    id: "forbidden-city-landmarks-v2",
    type: "tourist-attraction",
    parent: "CN-BJ",
    coords: [116.3975, 39.916],
    name: {
      de: "Verbotene Stadt",
      hu: "Tiltott Város",
      ro: "Orașul Interzis",
      en: "Forbidden City"
    },
    description: {
      de: "Ein Palastkomplex im Zentrum von Peking, China. Er diente als kaiserlicher Palast für chinesische Kaiser und als politisches Zentrum der chinesischen Regierung.",
      hu: "Peking központjában található palotakomplexum. A kínai császárok császári palotájaként és a kínai kormány politikai központjaként szolgált.",
      ro: "Un complex de palate în centrul Beijingului, China. A servit drept palat imperial pentru împărații chinezi și centru politic al guvernului chinez.",
      en: "A palace complex in central Beijing, China. It served as the imperial palace for Chinese emperors and the political center of the Chinese government."
    },
    facts: {
      de: ["War fast 500 Jahre lang die Heimat der Kaiser.", "Hat 980 Gebäude.", "Beherbergt heute das Palastmuseum."],
      hu: ["Közel 500 évig volt a császárok otthona.", "980 épületből áll.", "Ma a Palotamúzeumnak ad otthont."],
      ro: ["A fost reședința împăraților timp de aproape 500 de ani.", "Are 980 de clădiri.", "Acum găzduiește Muzeul Palatului."],
      en: ["Was the home of emperors for almost 500 years.", "Has 980 buildings.", "Now houses the Palace Museum."]
    }, image: "/poi-images/forbidden-city-landmarks-v2.webp"},
  {
    id: "terracotta-army-landmarks-v2",
    type: "monument",
    parent: "CN-SN",
    coords: [109.273, 34.3851],
    name: {
      de: "Terrakotta-Armee",
      hu: "Agyaghadsereg",
      ro: "Armata de Teracotă",
      en: "Terracotta Army"
    },
    description: {
      de: "Eine Sammlung von Terrakotta-Skulpturen, die die Armeen von Qin Shi Huang, dem ersten Kaiser von China, darstellen.",
      hu: "Csin Si Huang-ti, Kína első császárának seregeit ábrázoló terrakotta szobrok gyűjteménye.",
      ro: "O colecție de sculpturi din teracotă care înfățișează armatele lui Qin Shi Huang, primul împărat al Chinei.",
      en: "A collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China."
    },
    facts: {
      de: ["Wurde 1974 von lokalen Bauern entdeckt.", "Jede Figur hat einzigartige Gesichtszüge.", "Teil des Mausoleums des ersten Qin-Kaisers."],
      hu: ["Helyi farmerek fedezték fel 1974-ben.", "Minden katona arca egyedi.", "Az első Csin császár mauzóleumának része."],
      ro: ["A fost descoperită în 1974 de fermierii locali.", "Fiecare figură are trăsături faciale unice.", "Parte a mausoleului primului împărat Qin."],
      en: ["Discovered in 1974 by local farmers.", "Each figure has unique facial features.", "Part of the First Qin Emperor's mausoleum."]
    }, image: "/poi-images/terracotta-army-landmarks-v2.webp"},
  {
    id: "summer-palace-landmarks-v2",
    type: "landmark",
    parent: "CN-BJ",
    coords: [116.298, 39.999],
    name: {
      de: "Sommerpalast",
      hu: "Nyári Palota",
      ro: "Palatul de Vară",
      en: "Summer Palace"
    },
    description: {
      de: "Ein weitläufiger Komplex aus Palästen, Seen und Gärten in Peking, der als Meisterwerk des chinesischen Landschaftsgartendesigns gilt.",
      hu: "Peking császári kertjeinek hatalmas együttese, a kínai tájkertészet remekműve.",
      ro: "Un ansamblu vast de palate, lacuri și grădini din Beijing, considerat o capodoperă a designului peisagistic chinezesc.",
      en: "A vast ensemble of palaces, lakes, and gardens in Beijing, considered a masterpiece of Chinese landscape garden design."
    },
    facts: {
      de: ["War ein kaiserlicher Garten in der Qing-Dynastie.", "Bedeckt eine Fläche von 2,9 Quadratkilometern.", "Der Kunming-See macht etwa drei Viertel der Fläche aus."],
      hu: ["A Csing-dinasztia császári kertje volt.", "Területe 2,9 négyzetkilométer.", "A Kunming-tó a terület mintegy háromnegyedét teszi ki."],
      ro: ["A fost o grădină imperială în dinastia Qing.", "Acoperă o suprafață de 2,9 kilometri pătrați.", "Lacul Kunming ocupă aproximativ trei sferturi din suprafață."],
      en: ["Was an imperial garden in the Qing Dynasty.", "Covers an expanse of 2.9 square kilometres.", "Kunming Lake takes up about three-quarters of the area."]
    }, image: "/poi-images/summer-palace-landmarks-v2.webp"},
  {
    id: "potala-palace-landmarks-v2",
    type: "tourist-attraction",
    parent: "CN-XZ",
    coords: [91.1172, 29.6575],
    name: {
      de: "Potala-Palast",
      hu: "Potala palota",
      ro: "Palatul Potala",
      en: "Potala Palace"
    },
    description: {
      de: "Ein Dzong-Festung in Lhasa, Tibet. Es war die Winterresidenz der Dalai Lamas von 1649 bis 1959.",
      hu: "Dzong erőd Lhászában, Tibetben. 1649-től 1959-ig a dalai lámák téli rezidenciája volt.",
      ro: "O fortăreață dzong în Lhasa, Tibet. A fost reședința de iarnă a Dalai Lamilor din 1649 până în 1959.",
      en: "A dzong fortress in Lhasa, Tibet. It was the winter residence of the Dalai Lamas from 1649 to 1959."
    },
    facts: {
      de: ["Liegt auf dem Roten Berg auf 3.700 m Höhe.", "Hat über 1.000 Räume.", "UNESCO-Weltkulturerbe."],
      hu: ["A Vörös-hegyen fekszik, 3700 méter magasan.", "Több mint 1000 szobája van.", "Az UNESCO Világörökség része."],
      ro: ["Situat pe Muntele Roșu la o altitudine de 3.700 m.", "Are peste 1.000 de camere.", "Sit al Patrimoniului Mondial UNESCO."],
      en: ["Located on Red Mountain at 3,700m altitude.", "Has over 1,000 rooms.", "UNESCO World Heritage site."]
    }, image: "/poi-images/potala-palace-landmarks-v2.webp"},
  {
    id: "leshan-giant-buddha-landmarks-v2",
    type: "monument",
    parent: "CN-SC",
    coords: [103.774, 29.545],
    name: {
      de: "Großer Buddha von Leshan",
      hu: "Lesani óriás Buddha",
      ro: "Marele Buddha din Leshan",
      en: "Leshan Giant Buddha"
    },
    description: {
      de: "Eine 71 Meter hohe Steinstatue, die während der Tang-Dynastie aus einer Klippe gemeißelt wurde.",
      hu: "Egy 71 méter magas kőszobor, amelyet a Tang-dinasztia idején faragtak ki egy sziklafalból.",
      ro: "O statuie de piatră înaltă de 71 de metri, sculptată într-o stâncă în timpul dinastiei Tang.",
      en: "A 71-meter-tall stone statue, carved out of a cliff face during the Tang dynasty."
    },
    facts: {
      de: ["Die größte und höchste Steinstatue der Welt.", "Der Bau dauerte über 90 Jahre.", "Soll die turbulenten Flüsse beruhigen."],
      hu: ["A világ legnagyobb és legmagasabb kő Buddha-szobra.", "Építése több mint 90 évig tartott.", "Azt remélték, lecsillapítja a viharos folyókat."],
      ro: ["Cea mai mare și mai înaltă statuie de Buddha din piatră din lume.", "Construcția a durat peste 90 de ani.", "Construit pentru a calma apele turbulente ale râurilor."],
      en: ["The largest and tallest stone Buddha statue in the world.", "Construction took over 90 years.", "Built to calm the turbulent rivers."]
    }, image: "/poi-images/leshan-giant-buddha-landmarks-v2.webp"},
  {
    id: "the-bund-landmarks-v2",
    type: "landmark",
    parent: "CN-SH",
    coords: [121.481, 31.238],
    name: {
      de: "The Bund",
      hu: "A Bund",
      ro: "Bund",
      en: "The Bund"
    },
    description: {
      de: "Ein Uferbereich im Zentrum von Shanghai, bekannt für seine historischen Gebäude entlang des Huangpu-Flusses.",
      hu: "Sanghaj központjában található vízparti sétány, amely a Huangpu-folyó mentén álló történelmi épületeiről ismert.",
      ro: "O zonă riverană în centrul Shanghaiului, renumită pentru clădirile sale istorice de-a lungul râului Huangpu.",
      en: "A waterfront area in central Shanghai, famous for its historic buildings along the Huangpu River."
    },
    facts: {
      de: ["Enthält Dutzende historischer Gebäude.", "Stile reichen von Gotik bis Art Deco.", "Ein Symbol für das koloniale Shanghai."],
      hu: ["Több tucat történelmi épület található itt.", "Stílusuk a gótikustól az art decóig terjed.", "A gyarmati Sanghaj szimbóluma."],
      ro: ["Conține zeci de clădiri istorice.", "Stilurile variază de la gotic la Art Deco.", "Un simbol al Shanghaiului colonial."],
      en: ["Contains dozens of historical buildings.", "Styles range from Gothic to Art Deco.", "A symbol of colonial Shanghai."]
    }
  },
  {
    id: "li-river-landmarks-v2",
    type: "tourist-attraction",
    parent: "CN-GX",
    coords: [110.29, 25.27],
    name: {
      de: "Li-Fluss",
      hu: "Li-folyó",
      ro: "Râul Li",
      en: "Li River"
    },
    description: {
      de: "Ein Fluss in der Autonomen Region Guangxi Zhuang, berühmt für seine Karsthügel-Landschaft.",
      hu: "A Kuanghszi-Csuang Autonóm Területen található folyó, amely a karszthegyekről híres.",
      ro: "Un râu în Regiunea Autonomă Guangxi Zhuang, renumit pentru peisajul său cu dealuri carstice.",
      en: "A river in Guangxi Zhuang Autonomous Region, famous for its karst mountain landscape."
    },
    facts: {
      de: ["Die Landschaft inspirierte viele chinesische Dichter und Maler.", "Eine Kreuzfahrt auf dem Fluss ist eine beliebte Touristenattraktion.", "Abgebildet auf der 20-Yuan-Note."],
      hu: ["A táj számos kínai költőt és festőt ihletett.", "A folyami hajókirándulás népszerű turisztikai attrakció.", "A 20 jüanos bankjegyen szerepel."],
      ro: ["Peisajul a inspirat mulți poeți și pictori chinezi.", "O croazieră pe râu este o atracție turistică populară.", "Reprezentat pe bancnota de 20 de yuani."],
      en: ["The scenery inspired many Chinese poets and painters.", "A cruise on the river is a popular tourist attraction.", "Featured on the 20 yuan note."]
    }, image: "/poi-images/li-river-landmarks-v2.webp"},
  {
    id: "jade-dragon-snow-mountain-landmarks-v2",
    type: "landmark",
    parent: "CN-YN",
    coords: [100.23, 27.1],
    name: {
      de: "Jadedrachen-Schneegebirge",
      hu: "Jáde Sárkány-hegység",
      ro: "Muntele de Zăpadă al Dragonului de Jad",
      en: "Jade Dragon Snow Mountain"
    },
    description: {
      de: "Ein Gebirgsmassiv in der Nähe von Lijiang, dessen höchster Gipfel 5.596 Meter hoch ist.",
      hu: "Lijiang közelében található hegylánc, melynek legmagasabb csúcsa 5596 méter.",
      ro: "Un masiv montan lângă Lijiang, cu cel mai înalt vârf la 5.596 de metri.",
      en: "A mountain massif near Lijiang, with its highest peak at 5,596 meters."
    },
    facts: {
      de: ["Hat 13 Gipfel, die wie ein Drache aussehen.", "Der untere Teil ist mit Wiesen und Wäldern bedeckt.", "Der Gipfel ist ganzjährig mit Schnee bedeckt."],
      hu: ["13 csúcsa van, amelyek egy sárkányra emlékeztetnek.", "Alsó részét rétek és erdők borítják.", "Csúcsát egész évben hó fedi."],
      ro: ["Are 13 vârfuri care arată ca un dragon.", "Partea inferioară este acoperită de pajiști și păduri.", "Vârful este acoperit de zăpadă pe tot parcursul anului."],
      en: ["Has 13 peaks that look like a dragon.", "Its lower part is covered with meadows and forests.", "The summit is perennially covered with snow."]
    }, image: "/poi-images/jade-dragon-snow-mountain-landmarks-v2.webp"},
  {
    id: "zhangjiajie-national-forest-park-landmarks-v2",
    type: "tourist-attraction",
    parent: "CN-HN",
    coords: [110.45, 29.32],
    name: {
      de: "Nationaler Waldpark Zhangjiajie",
      hu: "Csangcsiacsie Nemzeti Erdőpark",
      ro: "Parcul Național Forestier Zhangjiajie",
      en: "Zhangjiajie National Forest Park"
    },
    description: {
      de: "Bekannt für seine hohen, säulenartigen Felsformationen, die aus Quarz-Sandstein bestehen. Inspiration für die 'Hallelujah-Berge' im Film Avatar.",
      hu: "Magas, oszlopszerű, kvarc-homokkőből álló sziklaalakzatairól ismert. Az Avatar című film 'Hallelujah-hegyeinek' ihletője.",
      ro: "Renumit pentru formațiunile sale stâncoase înalte, asemănătoare unor stâlpi, din gresie de cuarț. Inspirație pentru 'Munții Aleluia' din filmul Avatar.",
      en: "Known for its tall, pillar-like rock formations made of quartz-sandstone. Inspiration for the 'Hallelujah Mountains' in the movie Avatar."
    },
    facts: {
      de: ["Chinas erster nationaler Waldpark.", "Beherbergt den Bailong-Aufzug, den höchsten Außenaufzug der Welt.", "Die Formationen sind das Ergebnis jahrelanger Erosion."],
      hu: ["Kína első nemzeti erdőparkja.", "Itt található a Bailong lift, a világ legmagasabb kültéri liftje.", "A képződmények több évnyi erózió eredményei."],
      ro: ["Primul parc național forestier al Chinei.", "Găzduiește Liftul Bailong, cel mai înalt lift exterior din lume.", "Formațiunile sunt rezultatul a ani de eroziune."],
      en: ["China's first national forest park.", "Home to the Bailong Elevator, the world's tallest outdoor lift.", "The formations are the result of years of erosion."]
    }, image: "/poi-images/zhangjiajie-national-forest-park-landmarks-v2.webp"},
  {
    id: "temple-of-heaven-landmarks-v2",
    type: "icon",
    parent: "CN-BJ",
    coords: [116.406, 39.882],
    name: {
      de: "Himmelstempel",
      hu: "Mennyei Béke Temploma",
      ro: "Templul Cerului",
      en: "Temple of Heaven"
    },
    description: {
      de: "Ein Komplex religiöser Gebäude in Peking. Er wurde von den Kaisern der Ming- und Qing-Dynastien für jährliche Gebetszeremonien zum Himmel für eine gute Ernte besucht.",
      hu: "Vallási épületek komplexuma Pekingben. A Ming- és Csing-dinasztia császárai látogatták évente, hogy a jó termésért imádkozzanak az Éghez.",
      ro: "Un complex de clădiri religioase din Beijing. Era vizitat de împărații dinastiilor Ming și Qing pentru ceremonii anuale de rugăciune la Cer pentru o recoltă bună.",
      en: "A complex of religious buildings in Beijing. It was visited by the Emperors of the Ming and Qing dynasties for annual ceremonies of prayer to Heaven for good harvest."
    },
    facts: {
      de: ["Symbolisiert die Beziehung zwischen Erde und Himmel.", "Die Architektur ist voller numerischer Symbolik.", "Der Komplex ist viermal so groß wie die Verbotene Stadt."],
      hu: ["A Föld és az Ég kapcsolatát szimbolizálja.", "Az építészet tele van numerikus szimbolikával.", "A komplexum négyszer nagyobb, mint a Tiltott Város."],
      ro: ["Simbolizează relația dintre Pământ și Cer.", "Arhitectura este plină de simbolism numeric.", "Complexul este de patru ori mai mare decât Orașul Interzis."],
      en: ["Symbolizes the relationship between Earth and Heaven.", "The architecture is full of numerical symbolism.", "The complex is four times the size of the Forbidden City."]
    }, image: "/poi-images/temple-of-heaven-landmarks-v2.webp"},
  {
    id: "mogao-caves-landmarks-v2",
    type: "historical",
    parent: "CN-GS",
    coords: [94.8083, 40.043],
    name: {
      de: "Mogao-Grotten",
      hu: "Mokao-barlangok",
      ro: "Peșterile Mogao",
      en: "Mogao Caves"
    },
    description: {
      de: "Ein System von 492 Tempeln 25 km südöstlich des Zentrums von Dunhuang, einer Oasenstadt an der Seidenstraße.",
      hu: "492 templomból álló barlangrendszer Tunhuang központjától 25 km-re délkeletre, a Selyemút egyik oázisvárosában.",
      ro: "Un sistem de 492 de temple la 25 km sud-est de centrul Dunhuang, un oraș oază de pe Drumul Mătăsii.",
      en: "A system of 492 temples 25 km southeast of the center of Dunhuang, an oasis city on the Silk Road."
    },
    facts: {
      de: ["Auch bekannt als die Tausend-Buddha-Grotten.", "Enthalten einige der schönsten Beispiele buddhistischer Kunst.", "Spannen einen Zeitraum von 1.000 Jahren ab."],
      hu: ["Ezer Buddha Barlangjaként is ismert.", "A buddhista művészet legszebb példáit tartalmazza.", "A leletek ezer évet ölelnek fel."],
      ro: ["Cunoscute și sub numele de Grotele celor O Mie de Buddha.", "Conțin unele dintre cele mai frumoase exemple de artă budistă.", "Acoperă o perioadă de 1.000 de ani."],
      en: ["Also known as the Thousand Buddha Grottoes.", "Contain some of the finest examples of Buddhist art.", "Span a period of 1,000 years."]
    }, image: "/poi-images/mogao-caves-landmarks-v2.webp"},
  {
    id: "longmen-grottoes-landmarks-v2",
    type: "historical",
    parent: "CN-HA",
    coords: [112.466, 34.559],
    name: {
      de: "Longmen-Grotten",
      hu: "Lungmen-barlangok",
      ro: "Grotele Longmen",
      en: "Longmen Grottoes"
    },
    description: {
      de: "Zehntausende von Statuen buddhistischer Figuren und ihrer Schüler, die in den Kalksteinfelsen der Xiangshan- und Longmenshan-Berge gehauen sind.",
      hu: "Több tízezer, buddhista alakokat és tanítványaikat ábrázoló szobor a Hsziangsan és Lungmensan hegyek mészkőszikláiba faragva.",
      ro: "Zeci de mii de statui ale figurilor budiste și discipolilor lor, sculptate în stâncile de calcar ale munților Xiangshan și Longmenshan.",
      en: "Tens of thousands of statues of Buddhist figures and their disciples, carved into the limestone cliffs of the Xiangshan and Longmenshan mountains."
    },
    facts: {
      de: ["Der Bau begann im Jahr 493 n. Chr.", "Es gibt bis zu 100.000 Statuen.", "Die größte Statue ist 17 Meter hoch."],
      hu: ["Az építkezés i.sz. 493-ban kezdődött.", "Akár 100 000 szobor is található itt.", "A legnagyobb szobor 17 méter magas."],
      ro: ["Construcția a început în anul 493 d.Hr.", "Există până la 100.000 de statui.", "Cea mai mare statuie are 17 metri înălțime."],
      en: ["Construction began in 493 AD.", "There are as many as 100,000 statues.", "The largest statue is 17 meters high."]
    }, image: "/poi-images/longmen-grottoes-landmarks-v2.webp"},
  {
    id: "three-pagodas-landmarks-v2",
    type: "monument",
    parent: "CN-YN",
    coords: [100.155, 25.705],
    name: {
      de: "Drei Pagoden",
      hu: "Három pagoda",
      ro: "Cele Trei Pagode",
      en: "Three Pagodas"
    },
    description: {
      de: "Drei unabhängige Pagoden, die in einem Dreieck angeordnet sind, in der Nähe der Stadt Dali.",
      hu: "Három különálló pagoda, amelyek háromszög alakban helyezkednek el Dali város közelében.",
      ro: "Trei pagode independente aranjate într-un triunghi, lângă orașul Dali.",
      en: "Three independent pagodas arranged in a triangle, near the city of Dali."
    },
    facts: {
      de: ["Die mittlere Pagode ist 69,6 Meter hoch.", "Sie wurden im 9. und 10. Jahrhundert erbaut.", "Sind widerstandsfähig gegen Erdbeben."],
      hu: ["A középső pagoda 69,6 méter magas.", "A 9. és 10. században épültek.", "Ellenállnak a földrengéseknek."],
      ro: ["Pagoda din mijloc are 69,6 metri înălțime.", "Au fost construite în secolele al IX-lea și al X-lea.", "Sunt rezistente la cutremure."],
      en: ["The middle pagoda is 69.6 meters high.", "They were built in the 9th and 10th centuries.", "Are resilient to earthquakes."]
    }, image: "/poi-images/three-pagodas-landmarks-v2.webp"},
  {
    id: "huangshan-landmarks-v2",
    type: "landmark",
    parent: "CN-AH",
    coords: [118.166, 30.133],
    name: {
      de: "Huangshan (Gelbes Gebirge)",
      hu: "Huang-san (Sárga-hegy)",
      ro: "Munții Galbeni (Huangshan)",
      en: "Huangshan (Yellow Mountains)"
    },
    description: {
      de: "Ein Gebirgszug in Süd-Anhui, bekannt für seine malerische Landschaft mit seltsam geformten Granitgipfeln, Huangshan-Kiefern und Wolkenmeeren.",
      hu: "Hegylánc Dél-Anhuiban, amely a különös alakú gránitcsúcsokról, a Huangshan-fenyőkről és a felhőtengerekről ismert festői tájáról híres.",
      ro: "Un lanț muntos în sudul provinciei Anhui, renumit pentru peisajul său pitoresc cu vârfuri de granit cu forme ciudate, pini Huangshan și mări de nori.",
      en: "A mountain range in southern Anhui, known for its scenic landscape with oddly-shaped granite peaks, Huangshan pine trees, and seas of clouds."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Häufiges Motiv in der traditionellen chinesischen Malerei.", "Der 'Lotusgipfel' ist der höchste Punkt mit 1.864 m."],
      hu: ["Az UNESCO Világörökség része.", "Gyakori téma a hagyományos kínai festészetben.", "A 'Lótusz-csúcs' a legmagasabb pontja, 1864 m."],
      ro: ["Sit al Patrimoniului Mondial UNESCO.", "Subiect frecvent în pictura tradițională chineză.", "Vârful Lotus este cel mai înalt punct, la 1.864 m."],
      en: ["A UNESCO World Heritage site.", "A frequent subject in traditional Chinese painting.", "The 'Lotus Peak' is the highest point at 1,864 m."]
    }, image: "/poi-images/huangshan-landmarks-v2.webp"},
  {
    id: "west-lake-landmarks-v2",
    type: "tourist-attraction",
    parent: "CN-ZJ",
    coords: [120.14, 30.24],
    name: {
      de: "Westsee",
      hu: "Nyugati-tó",
      ro: "Lacul de Vest",
      en: "West Lake"
    },
    description: {
      de: "Ein Süßwassersee in Hangzhou, bekannt für seine natürliche Schönheit und historischen Relikte.",
      hu: "Édesvízi tó Hangcsouban, amely természeti szépségéről és történelmi emlékeiről ismert.",
      ro: "Un lac de apă dulce în Hangzhou, renumit pentru frumusețea sa naturală și relicvele istorice.",
      en: "A freshwater lake in Hangzhou, known for its natural beauty and historic relics."
    },
    facts: {
      de: ["Hat zahlreiche Tempel, Pagoden und Gärten um den See.", "Hat chinesische Dichter und Maler seit Jahrhunderten beeinflusst.", "UNESCO-Weltkulturerbe."],
      hu: ["Számos templom, pagoda és kert veszi körül.", "Évszázadok óta hatással van a kínai költőkre és festőkre.", "Az UNESCO Világörökség része."],
      ro: ["Are numeroase temple, pagode și grădini în jurul lacului.", "A influențat poeți și pictori chinezi de secole.", "Sit al Patrimoniului Mondial UNESCO."],
      en: ["Has numerous temples, pagodas, and gardens around the lake.", "Has influenced Chinese poets and painters for centuries.", "A UNESCO World Heritage Site."]
    }, image: "/poi-images/west-lake-landmarks-v2.webp"},
  {
    id: "mount-tai-landmarks-v2",
    type: "icon",
    parent: "CN-SD",
    coords: [117.1, 36.25],
    name: {
      de: "Taishan",
      hu: "Taj-san",
      ro: "Muntele Tai",
      en: "Mount Tai"
    },
    description: {
      de: "Ein Berg von historischer und kultureller Bedeutung nördlich der Stadt Tai'an. Einer der 'Fünf Heiligen Berge Chinas'.",
      hu: "Történelmi és kulturális jelentőségű hegy Tai'an városától északra. Kína 'Öt Szent Hegyének' egyike.",
      ro: "Un munte de importanță istorică și culturală la nord de orașul Tai'an. Unul dintre 'Cei Cinci Munți Sacri ai Chinei'.",
      en: "A mountain of historical and cultural significance located north of the city of Tai'an. One of the 'Five Great Mountains of China'."
    },
    facts: {
      de: ["Ort der Anbetung für mindestens 3.000 Jahre.", "7.200 Stufen führen zum Gipfel.", "Symbol für Sonnenaufgang, Geburt und Erneuerung."],
      hu: ["Legalább 3000 éve zarándokhely.", "7200 lépcső vezet a csúcsra.", "A napfelkelte, a születés és a megújulás szimbóluma."],
      ro: ["Loc de cult de cel puțin 3.000 de ani.", "7.200 de trepte duc spre vârf.", "Simbolizează răsăritul, nașterea și reînnoirea."],
      en: ["A place of worship for at least 3,000 years.", "7,200 steps lead to the summit.", "A symbol of sunrise, birth, and renewal."]
    }, image: "/poi-images/mount-tai-landmarks-v2.webp"},
  {
    id: "hanging-monastery-landmarks-v2",
    type: "monument",
    parent: "CN-SX",
    coords: [113.709, 39.664],
    name: {
      de: "Hängendes Kloster",
      hu: "Függő kolostor",
      ro: "Mănăstirea Suspendată",
      en: "Hanging Monastery"
    },
    description: {
      de: "Ein in eine Klippe gebautes Kloster in der Nähe des Berges Heng in der Provinz Shanxi. Es ist das einzige existierende Kloster, in dem drei chinesische Religionen zusammen praktiziert werden: Buddhismus, Taoismus und Konfuzianismus.",
      hu: "Sziklafalba épített kolostor a Heng-hegy közelében, Sanhszi tartományban. Ez az egyetlen fennmaradt kolostor, ahol három kínai vallást is gyakorolnak: a buddhizmust, a taoizmust és a konfucianizmust.",
      ro: "O mănăstire construită pe o stâncă lângă Muntele Heng din provincia Shanxi. Este singura mănăstire existentă unde sunt practicate împreună trei religii chineze: budismul, taoismul și confucianismul.",
      en: "A monastery built into a cliff near Mount Heng in Shanxi province. It is the only existing temple with the combination of three Chinese traditional religions: Buddhism, Taoism, and Confucianism."
    },
    facts: {
      de: ["Über 1.500 Jahre alt.", "Wird von Eichenbalken getragen, die in Löcher in der Klippe eingelassen sind.", "Steht 75 Meter über dem Boden."],
      hu: ["Több mint 1500 éves.", "A sziklafalba fúrt lyukakba illesztett tölgyfa gerendák tartják.", "75 méterrel a föld felett áll."],
      ro: ["Are o vechime de peste 1.500 de ani.", "Susținută de grinzi de stejar fixate în găuri săpate în stâncă.", "Se află la 75 de metri deasupra solului."],
      en: ["Over 1,500 years old.", "Supported by oak crossbeams fitted into holes chiseled into the cliff.", "Stands 75 meters above the ground."]
    }, image: "/poi-images/hanging-monastery-landmarks-v2.webp"},
  {
    id: "oriental-pearl-tower-landmarks-v2",
    type: "icon",
    parent: "CN-SH",
    coords: [121.499, 31.245],
    name: {
      de: "Oriental Pearl Tower",
      hu: "Kelet Gyöngye tévétorony",
      ro: "Turnul Perla Orientului",
      en: "Oriental Pearl Tower"
    },
    description: {
      de: "Ein Fernsehturm in Shanghai. Sein markantes Design aus 11 Kugeln, die von Säulen getragen werden, macht ihn zu einem Wahrzeichen der Stadt.",
      hu: "Tévétorony Sanghajban. Jellegzetes, 11 gömbből álló, oszlopokon nyugvó kialakítása a város egyik szimbólumává teszi.",
      ro: "Un turn TV din Shanghai. Designul său distinctiv, cu 11 sfere susținute de coloane, îl face un simbol al orașului.",
      en: "A TV tower in Shanghai. Its distinctive design of 11 spheres supported by columns makes it a landmark of the city."
    },
    facts: {
      de: ["468 Meter hoch.", "War von 1994 bis 2007 das höchste Bauwerk in China.", "Verfügt über eine Aussichtsplattform mit Glasboden."],
      hu: ["468 méter magas.", "1994 és 2007 között Kína legmagasabb épülete volt.", "Üvegpadlós kilátóterasszal rendelkezik."],
      ro: ["Are 468 de metri înălțime.", "A fost cea mai înaltă structură din China între 1994 și 2007.", "Are o platformă de observare cu podea de sticlă."],
      en: ["468 meters high.", "Was the tallest structure in China from 1994 to 2007.", "Features a glass-bottomed observation deck."]
    }, image: "/poi-images/oriental-pearl-tower-landmarks-v2.webp"},
  {
    id: "giant-wild-goose-pagoda-landmarks-v2",
    type: "monument",
    parent: "CN-SN",
    coords: [108.959, 34.219],
    name: {
      de: "Große Wildganspagode",
      hu: "Nagy Vadlúd pagoda",
      ro: "Pagoda Gâștei Sălbatice Mari",
      en: "Giant Wild Goose Pagoda"
    },
    description: {
      de: "Eine buddhistische Pagode in Xi'an. Sie wurde 652 während der Tang-Dynastie erbaut und hatte ursprünglich fünf Stockwerke.",
      hu: "Buddhista pagoda Hszianban. A Tang-dinasztia idején, 652-ben épült, eredetileg öt emeletes volt.",
      ro: "O pagodă budistă în Xi'an. A fost construită în 652 în timpul dinastiei Tang și avea inițial cinci etaje.",
      en: "A Buddhist pagoda located in Xi'an. It was built in 652 during the Tang dynasty and originally had five stories."
    },
    facts: {
      de: ["Wurde gebaut, um buddhistische Sutras aufzubewahren, die von Xuanzang aus Indien geholt wurden.", "Die heutige Höhe beträgt 64 Meter.", "Man kann auf die Spitze steigen, um einen Ausblick auf Xi'an zu genießen."],
      hu: ["A Xuanzang által Indiából hozott buddhista szútrák tárolására épült.", "Jelenlegi magassága 64 méter.", "A tetejére fel lehet menni, ahonnan kilátás nyílik Hszianra."],
      ro: ["Construită pentru a găzdui sutrele budiste aduse din India de Xuanzang.", "Înălțimea actuală este de 64 de metri.", "Se poate urca în vârf pentru o vedere panoramică a orașului Xi'an."],
      en: ["Built to house Buddhist sutras brought from India by Xuanzang.", "Current height is 64 meters.", "You can climb to the top for a view of Xi'an."]
    }
  }
];

