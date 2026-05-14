import type { POI } from "./poi";

export const poiExtraIsraelNatureV2: POI[] = [
  {
    id: "il-dead-sea-nature-v2",
    type: "lake",
    parent: "IL-D",
    coords: [35.45, 31.5],
    name: { de: "Totes Meer", hu: "Holt-tenger", ro: "Marea Moartă", en: "Dead Sea"},
    image: "/poi-images/il-dead-sea-nature-v2.webp",
    description: {
      de: "Das Tote Meer ist ein abflussloser Salzsee, der an der tiefsten Landstelle der Erde liegt und für seinen extrem hohen Salzgehalt berühmt ist.",
      hu: "A Holt-tenger egy lefolyástalan sós tó a Föld legmélyebb szárazföldi pontján, amely extrém magas sótartalmáról híres.",
      ro: "Marea Moartă este un lac sărat fără scurgere, situat în cel mai jos punct terestru de pe Pământ, faimos pentru salinitatea sa extremă.",
      en: "The Dead Sea is an endorheic salt lake located at the lowest land elevation on Earth, famous for its extremely high salinity."
    },
    facts: {
      de: ["Tiefster Punkt der Erde", "Salzgehalt über 30 Prozent", "Kein Fischbestand", "Berühmt für Heilmittel"],
      hu: ["A Föld legmélyebb pontja", "Több mint 30 százalékos sótartalom", "Nincs benne hal", "Híres a gyógyhatású iszapjáról"],
      ro: ["Cel mai jos punct de pe Pământ", "Salinitate de peste 30 la sută", "Nu există pești", "Faimoasă pentru nămolul curativ"],
      en: ["Lowest point on Earth", "Salinity over 30 percent", "No fish population", "Famous for its healing mud"]
    }, image: "/poi-images/il-dead-sea-nature-v2.webp",
    descriptionAdvanced: {
      de: "Das Tote Meer liegt im Jordangraben zwischen Israel, Jordanien und dem Westjordanland. Es ist der tiefste Punkt der Erde mit etwa 430 m unter dem Meeresspiegel (Stand 2023). Das Meer hat einen extrem hohen Salzgehalt von etwa 34,2%, was das Schwimmen unmöglich macht (Auftrieb). Es ist bekannt für seine mineralreichen Schlämme und Heilwirkungen. Das Tote Meer schrumpft jährlich um etwa 1 m, bedingt durch Wasserentnahme und Verdunstung. Es gibt Hotels und Spa-Resorts entlang der Küste. Die Region hat ein arides Klima mit ganzjährig Sonnenschein.",
      hu: "A Holt-tenger a Jordán-árokban található, Izrael, Jordánia és Ciszjordánia között. Ez a Föld legmélyebb pontja, körülbelül 430 m-rel a tengerszint alatt (2023-as adat). A tenger rendkívül magas sótartalma (kb. 34,2%) lehetetlenné teszi az úszást (felhajtóerő). Híres ásványi anyagokban gazdag iszapjáról és gyógyító hatásáról. A Holt-tenger évente körülbelül 1 métert zsugorodik a vízelvonás és a párolgás miatt. Hotelek és gyógyfürdők találhatók a part mentén. A régióban arid éghajlat uralkodik, egész évben napsütéssel.",
      ro: "Marea Moartă este situată în Valea Iordanului, între Israel, Iordania și Cisiordania. Este cel mai jos punct de pe Pământ, la aproximativ 430 m sub nivelul mării (în 2023). Apa are o salinitate extrem de ridicată, de aproximativ 34,2%, ceea ce face imposibilă înotul (plutire). Este renumită pentru nămolurile bogate în minerale și efectele terapeutice. Marea Moartă se micșorează cu aproximativ 1 m pe an din cauza extragerii apei și evaporării. Există hoteluri și spa-uri de-a lungul coastei. Regiunea are un climat arid cu soare tot anul.",
      en: "The Dead Sea is located in the Jordan Rift Valley between Israel, Jordan, and the West Bank. It is the lowest point on Earth, at about 430 m below sea level (as of 2023). The sea has an extremely high salinity of about 34.2%, making swimming impossible (buoyancy). It is famous for its mineral-rich mud and healing properties. The Dead Sea is shrinking by about 1 m per year due to water diversion and evaporation. Hotels and spa resorts line the coast. The region has an arid climate with year-round sunshine.",
    },
    factsAdvanced: {
      de: ["Tiefster Punkt: 430 m unter dem Meeresspiegel", "Salzgehalt: 34,2%", "Länge: 50 km", "Breite: 15 km", "Jährlicher Rückgang des Wasserspiegels: 1 m", "Wassertemperatur im Winter: 22°C"],
      hu: ["Legmélyebb pont: 430 m tengerszint alatt", "Sótartalom: 34,2%", "Hossz: 50 km", "Szélesség: 15 km", "Éves vízszintcsökkenés: 1 m", "Vízhőmérséklet télen: 22°C"],
      ro: ["Cel mai jos punct: 430 m sub nivelul mării", "Salinitate: 34,2%", "Lungime: 50 km", "Lățime: 15 km", "Scăderea anuală a nivelului apei: 1 m", "Temperatura apei iarna: 22°C"],
      en: ["Lowest point: 430 m below sea level", "Salinity: 34.2%", "Length: 50 km", "Width: 15 km", "Annual water level drop: 1 m", "Water temperature in winter: 22°C"],
    },
  },
  {
    id: "il-sea-of-galilee-nature-v2",
    type: "lake",
    parent: "IL-Z",
    coords: [35.58, 32.83],
    name: { de: "See Genezareth", hu: "Galileai-tenger", ro: "Marea Galileei", en: "Sea of Galilee"},
    image: "/poi-images/il-sea-of-galilee-nature-v2.webp",
    description: {
      de: "Der See Genezareth ist der tiefstgelegene Süßwassersee der Erde und hat eine große historische und religiöse Bedeutung im Christentum.",
      hu: "A Galileai-tenger a Föld legalacsonyabban fekvő édesvizű tava, amely hatalmas történelmi és vallási jelentőséggel bír a kereszténységben.",
      ro: "Marea Galileei este cel mai jos lac cu apă dulce de pe Pământ și are o mare importanță istorică și religioasă în creștinism.",
      en: "The Sea of Galilee is the lowest freshwater lake on Earth and holds great historical and religious significance in Christianity."
    },
    facts: {
      de: ["Tiefster Süßwassersee", "Wichtiger Ort im Neuen Testament", "Israels größtes Trinkwasserreservoir", "Umgrenzt von Bergen"],
      hu: ["A legmélyebben fekvő édesvizű tó", "Fontos helyszín az Újszövetségben", "Izrael legnagyobb ivóvíztározója", "Hegyek veszik körül"],
      ro: ["Cel mai jos lac de apă dulce", "Loc important în Noul Testament", "Cel mai mare rezervor de apă potabilă", "Înconjurat de munți"],
      en: ["Lowest freshwater lake", "Important site in the New Testament", "Israel's largest drinking water reservoir", "Surrounded by mountains"]
    }, image: "/poi-images/il-sea-of-galilee-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der See Genezareth (auch Kinneret) ist ein Süßwassersee in Nordisrael, der Hauptteil des Jordan-Systems. Er liegt etwa 210 m unter dem Meeresspiegel und ist damit der niedrigste Süßwassersee der Erde. Der See hat eine Fläche von 166 km² und eine maximale Tiefe von 43 m. Er ist eine wichtige Trinkwasserquelle für Israel. Historisch bekannt durch das Neue Testament. Die Ufer sind dicht bebaut mit Städten wie Tiberias. Der See ist beliebt zum Schwimmen, Segeln und Pilgerfahrten. Das Klima ist mediterran mit heißen Sommern.",
      hu: "A Genezáreti-tó (más néven Kinneret) egy édesvizű tó Észak-Izraelben, a Jordán-rendszer fő része. Körülbelül 210 m-rel a tengerszint alatt fekszik, így a Föld legmélyebben fekvő édesvizű tava. Területe 166 km², maximális mélysége 43 m. Fontos ivóvízforrás Izrael számára. Történelmileg ismert az Újszövetségből. Partjai sűrűn beépítettek, olyan városokkal, mint Tiberias. A tó népszerű úszásra, vitorlázásra és zarándoklatokra. Az éghajlat mediterrán, forró nyarakkal.",
      ro: "Marea Galileii (cunoscută și ca Kinneret) este un lac de apă dulce din nordul Israelului, principala componentă a sistemului Iordan. Este situat la aproximativ 210 m sub nivelul mării, fiind cel mai jos lac de apă dulce de pe Pământ. Lacul are o suprafață de 166 km² și o adâncime maximă de 43 m. Este o sursă importantă de apă potabilă pentru Israel. Cunoscut istoric din Noul Testament. Malurile sunt dens populate cu orașe precum Tiberias. Lacul este popular pentru înot, navigație și pelerinaje. Clima este mediteraneană cu veri fierbinți.",
      en: "The Sea of Galilee (also known as Kinneret) is a freshwater lake in northern Israel, the main part of the Jordan River system. It lies about 210 m below sea level, making it the lowest freshwater lake on Earth. The lake covers 166 km² and has a maximum depth of 43 m. It is a major source of drinking water for Israel. Historically known from the New Testament. The shores are densely populated with cities like Tiberias. The lake is popular for swimming, sailing, and pilgrimage. The climate is Mediterranean with hot summers.",
    },
    factsAdvanced: {
      de: ["Höhe: 210 m unter dem Meeresspiegel", "Fläche: 166 km²", "Maximale Tiefe: 43 m", "Länge: 21 km", "Breite: 13 km", "Wassertemperatur im Sommer: 28°C"],
      hu: ["Magasság: 210 m tengerszint alatt", "Terület: 166 km²", "Maximális mélység: 43 m", "Hossz: 21 km", "Szélesség: 13 km", "Vízhőmérséklet nyáron: 28°C"],
      ro: ["Altitudine: 210 m sub nivelul mării", "Suprafață: 166 km²", "Adâncime maximă: 43 m", "Lungime: 21 km", "Lățime: 13 km", "Temperatura apei vara: 28°C"],
      en: ["Elevation: 210 m below sea level", "Area: 166 km²", "Maximum depth: 43 m", "Length: 21 km", "Width: 13 km", "Water temperature in summer: 28°C"],
    },
  },
  {
    id: "il-mount-hermon-nature-v2",
    type: "mountain",
    parent: "IL-Z",
    coords: [35.78, 33.3],
    name: { de: "Berg Hermon", hu: "Hermon-hegy", ro: "Muntele Hermon", en: "Mount Hermon"},
    image: "/poi-images/il-mount-hermon-nature-v2.webp",
    description: {
      de: "Der Berg Hermon ist das höchste Gebirge in Israel und bietet im Winter das einzige Skigebiet des Landes.",
      hu: "A Hermon-hegy Izrael legmagasabb hegysége, amely télen az ország egyetlen síterepének ad otthont.",
      ro: "Muntele Hermon este cel mai înalt lanț muntos din Israel și oferă singura stațiune de schi a țării pe timp de iarnă.",
      en: "Mount Hermon is the highest mountain range in Israel and features the country's only ski resort during the winter."
    },
    facts: {
      de: ["Höchster Berg Israels", "Beherbergt ein Skigebiet", "Wichtige Wasserquelle", "Grenzgebiet zu Syrien"],
      hu: ["Izrael legmagasabb hegye", "Síközponttal rendelkezik", "Fontos vízforrás", "Szíria határvidékén fekszik"],
      ro: ["Cel mai înalt munte din Israel", "Găzduiește o stațiune de schi", "Sursă importantă de apă", "La granița cu Siria"],
      en: ["Highest mountain in Israel", "Home to a ski resort", "Important water source", "On the border with Syria"]
    }, image: "/poi-images/il-mount-hermon-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Berg Hermon (auch Jabal al-Shaykh) ist der höchste Berg in Israel und Syrien, mit einer Höhe von 2.814 m. Er liegt im Golanhöhen, einem umstrittenen Gebiet. Der Berg ist die einzige Skiregion in Israel mit mehreren Betriebssaisons. Der Hermon ist eine wichtige Wasserquelle, da sein Schnee den Jordan speist. Das Gebiet ist ein Naturreservat mit einer reichen Flora und Fauna, einschließlich seltener Arten. Es gibt einen Skilift, der bis auf 2.040 m Höhe reicht. Der Berg ist auch ein militärischer Beobachtungspunkt.",
      hu: "A Hermon-hegy (más néven Jabal al-Shaykh) Izrael és Szíria legmagasabb hegye, 2814 m magas. A Golán-fennsíkon található, egy vitatott területen. A hegy az egyetlen sírégió Izraelben, több üzemszezonnal. A Hermon fontos vízforrás, mivel hava táplálja a Jordán folyót. A terület természetvédelmi terület, gazdag flórával és faunával, ritka fajokkal. Van egy sílift, amely 2040 m magasságig jut. A hegy katonai megfigyelőpontként is szolgál.",
      ro: "Muntele Hermon (cunoscut și ca Jabal al-Shaykh) este cel mai înalt munte din Israel și Siria, cu o înălțime de 2.814 m. Este situat în Înălțimile Golan, un teritoriu disputat. Este singura regiune de schi din Israel, cu mai multe sezoane de funcționare. Hermon este o sursă importantă de apă, deoarece zăpada sa alimentează râul Iordan. Zona este o rezervație naturală cu floră și faună bogată, inclusiv specii rare. Există un teleschi care ajunge până la 2.040 m altitudine. Muntele este și un punct de observație militar.",
      en: "Mount Hermon (also known as Jabal al-Shaykh) is the highest mountain in Israel and Syria, at 2,814 m. It is located in the Golan Heights, a disputed territory. It is the only ski region in Israel, with multiple operating seasons. Hermon is an important water source, as its snow feeds the Jordan River. The area is a nature reserve with rich flora and fauna, including rare species. There is a ski lift that reaches 2,040 m elevation. The mountain also serves as a military observation point.",
    },
    factsAdvanced: {
      de: ["Höhe: 2.814 m", "Höchster Punkt in Israel", "Länge des Skigebiets: 8 km", "Anzahl der Skilifte: 14", "Anzahl der Skipisten: 30", "Jährliche Schneehöhe: 2 m"],
      hu: ["Magasság: 2814 m", "Izrael legmagasabb pontja", "Síterület hossza: 8 km", "Sífelvonók száma: 14", "Sípályák száma: 30", "Éves hóvastagság: 2 m"],
      ro: ["Înălțime: 2.814 m", "Cel mai înalt punct din Israel", "Lungimea zonei de schi: 8 km", "Număr de teleschiuri: 14", "Număr de pârtii: 30", "Grosimea anuală a zăpezii: 2 m"],
      en: ["Height: 2,814 m", "Highest point in Israel", "Ski area length: 8 km", "Number of ski lifts: 14", "Number of ski runs: 30", "Annual snow depth: 2 m"],
    },
  },
  {
    id: "il-jordan-river-nature-v2",
    type: "river",
    parent: "IL-Z",
    coords: [35.56, 32.0],
    name: { de: "Jordan", hu: "Jordán folyó", ro: "Râul Iordan", en: "Jordan River"},
    image: "/poi-images/il-jordan-river-nature-v2.webp",
    description: {
      de: "Der Jordan ist ein historisch und religiös bedeutender Fluss, der durch das Jordantal fließt und in das Tote Meer mündet.",
      hu: "A Jordán folyó történelmi és vallási szempontból is jelentős folyó, amely a Jordán-völgyön keresztül folyik és a Holt-tengerbe ömlik.",
      ro: "Iordanul este un râu cu o semnificație istorică și religioasă profundă, care curge prin Valea Iordanului și se varsă în Marea Moartă.",
      en: "The Jordan River is a historically and religiously significant river that flows through the Jordan Valley and empties into the Dead Sea."
    },
    facts: {
      de: ["Mündet in das Tote Meer", "Natürliche Grenze", "Länge von über 250 km", "Ort der Taufe Jesu"],
      hu: ["A Holt-tengerbe ömlik", "Természetes határvonal", "Több mint 250 km hosszú", "Jézus megkeresztelkedésének helye"],
      ro: ["Se varsă în Marea Moartă", "Graniță naturală", "Lungime de peste 250 km", "Locul botezului lui Iisus"],
      en: ["Empties into the Dead Sea", "Natural border", "Over 250 km long", "Site of the baptism of Jesus"]
    }, image: "/poi-images/il-jordan-river-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Jordan ist mit etwa 251 km Länge der bedeutendste Fluss im Nahen Osten. Er entspringt an den Hängen des Hermongebirges und durchfließt das Huleh-Becken, den See Genezareth und mündet schließlich im Toten Meer. Der Fluss hat eine immense religiöse und historische Bedeutung, insbesondere als Ort der Taufe Jesu. In den 1960er Jahren wurde der Jordan im Rahmen des israelischen National Water Carriers stark reguliert, was zu einem drastischen Rückgang des Wasserflusses führte. Heute ist der Unterlauf stark verschmutzt und führt nur noch einen Bruchteil seiner historischen Wassermenge. Ökologische Projekte versuchen, den Fluss zu renaturieren, etwa durch die Zuführung von gereinigtem Abwasser. Die Uferzonen beherbergen eine vielfältige Flora und Fauna, darunter Papyrusstauden und zahlreiche Vogelarten. Der Jordan ist jedoch auch ein Symbol für politische Spannungen, da er von mehreren Anrainerstaaten genutzt wird.",
      hu: "A Jordán folyó hossza hozzávetőlegesen 251 km, ezzel a Közel-Kelet egyik legjelentősebb vízfolyása. Forrása a Hermon-hegy lejtőin található, majd áthalad a Hula-völgyön, a Genezáreti tavon, és végül a Holt-tengerbe torkollik. A folyó kultúrtörténeti szempontból kiemelkedő, hiszen Jézus megkeresztelkedésének helyszíneként ismert. A 20. század közepén a Jordánt csatornázták a Nemzeti Vízhálózat részeként, ami drasztikusan csökkentette a vízhozamát. Napjainkban az alsó szakasz erősen szennyezett, és a történelmi vízmennyiség töredékét szállítja. Ökológiai helyreállítási projektek folynak, például tisztított szennyvíz bevezetésével. A folyó menti növényvilágban papirusz és más mocsári növények találhatók, az állatvilág pedig gazdag madárpopulációval büszkélkedhet. A Jordán vízének megosztása politikai feszültségek forrása Izrael, Jordánia és a palesztin területek között.",
      ro: "Râul Iordan are o lungime de aproximativ 251 km și este cea mai importantă apă curgătoare din Orientul Mijlociu. Izvorăște de pe versanții Muntelui Hermon, străbate Valea Hula, lacul Galileei și se varsă în Marea Moartă. Acest râu are o semnificație istorică și religioasă profundă, fiind locul botezului lui Iisus. În anii 1960, cursul Iordanului a fost puternic modificat prin construirea Canalului Național Israeli, ceea ce a redus drastic debitul. Astăzi, sectorul inferior este puternic poluat și transportă doar o fracțiune din volumul istoric de apă. Proiecte ecologice încearcă refacerea ecosistemului, prin aport de apă tratată. Malurile râului adăpostesc o vegetație specifică, inclusiv papirus, și o faună bogată, mai ales păsări migratoare. Împărțirea apei Iordanului rămâne o sursă de tensiune între Israel, Iordania și Autoritatea Palestiniană.",
      en: "The Jordan River stretches approximately 251 km through the Middle East, originating on the slopes of Mount Hermon and flowing through the Hula Valley, the Sea of Galilee, and finally into the Dead Sea. Its lower course lies about 400 meters below sea level, making it the lowest river on Earth. Historically, the river served as a natural boundary and a vital water source for ancient civilizations. Today, over 90% of its historical flow is diverted for agriculture and domestic use, primarily by Israel through the National Water Carrier. The lower Jordan is heavily polluted due to agricultural runoff and untreated sewage, yet it remains ecologically significant as a stopover for migratory birds. Conservation efforts include the release of treated wastewater to restore flow. The river is a key site for Christian pilgrimage, with Yardenit and Qasr al-Yahud marking traditional baptismal locations. Politically, the Jordan is central to water-sharing disputes between Israel, Jordan, and Palestine.",
    },
    factsAdvanced: {
      de: ["Länge: ca. 251 km", "Höhenunterschied: von ca. 2.800 m (Hermon) bis 400 m unter Meeresspiegel (Totes Meer)", "Wasserführung: historisch 1,3 Milliarden m³/Jahr, heute weniger als 100 Millionen m³ im Unterlauf", "National Water Carrier: in Betrieb seit 1964, leitet 400 Millionen m³/Jahr um", "Salzgehalt: im Unterlauf bis zu 3.000 mg/l Chlorid", "Papyrusvorkommen: größtes zusammenhängendes Papyrusgebiet außerhalb Afrikas, etwa 1.000 Hektar im Hula-Tal"],
      hu: ["Hossz: kb. 251 km", "Vízgyűjtő terület: kb. 18.000 km²", "Vízhozamcsökkenés: az 1960-as évek óta a történelmi hozam több mint 90%-a eltűnt", "Nemzeti Vízhálózat (National Water Carrier) átadása: 1964", "Legmélyebb pont: a Holt-tenger, 430 m tengerszint alatt", "Bakteriális szennyezettség: a felső szakaszon alacsony, az alsón magas, E. coli szint gyakran meghaladja az 1000 CFU/100 ml-t"],
      ro: ["Lungime: aproximativ 251 km", "Diferența de altitudine: de la 2.800 m (Muntele Hermon) la -430 m (Marea Moartă)", "Debit istoric: 1,3 miliarde m³/an, actual: sub 100 milioane m³/an în sectorul inferior", "Construcția Canalului Național Israeli: finalizată în 1964, transportă 400 milioane m³/an", "Salinitate: în sectorul inferior ajunge la 3.000 mg/l clorură", "Suprafața de papirus: cea mai mare zonă de papirus din afara Africii, aproximativ 1.000 ha în Valea Hula"],
      en: ["Length: approx. 251 km", "Elevation drop: from ~2,800 m (Mount Hermon) to 430 m below sea level (Dead Sea)", "Historical flow: 1.3 billion m³/year; current lower course flow: less than 100 million m³/year", "National Water Carrier operational since 1964, diverting 400 million m³/year", "Salinity in lower Jordan up to 3,000 mg/L chloride", "Largest papyrus wetland outside Africa: ~1,000 hectares in the Hula Valley"],
    },
  },
  {
    id: "il-ein-gedi-nature-v2",
    type: "national-park",
    parent: "IL-D",
    coords: [35.39, 31.46],
    name: { de: "Nationalpark En Gedi", hu: "Én-Gedi Nemzeti Park", ro: "Parcul Național Ein Gedi", en: "Ein Gedi Nature Reserve"},
    image: "/poi-images/il-ein-gedi-nature-v2.webp",
    description: {
      de: "En Gedi ist eine grüne Oase in der Judäischen Wüste mit Wasserfällen, Quellen und einer reichen Tierwelt nahe dem Toten Meer.",
      hu: "Én-Gedi egy zöldellő oázis a Júdeai-sivatagban, amely vízeséseivel, forrásaival és gazdag vadvilágával a Holt-tenger közelében található.",
      ro: "Ein Gedi este o oază verde în deșertul Iudeei, cu cascade, izvoare și o faună bogată în apropierea Mării Moarte.",
      en: "Ein Gedi is a verdant oasis in the Judean Desert, featuring waterfalls, springs, and abundant wildlife near the Dead Sea."
    },
    facts: {
      de: ["Wüstenoase", "Beliebt für Wanderungen", "Heimat von Steinböcken", "Biblischer Zufluchtsort"],
      hu: ["Sivatagi oázis", "Népszerű túrahelyszín", "Kőszáli kecskék otthona", "Bibliai menedékhely"],
      ro: ["Oază în deșert", "Populară pentru drumeții", "Casa ibecșilor", "Refugiu biblic"],
      en: ["Desert oasis", "Popular for hiking", "Home to ibexes", "Biblical refuge"]
    }, image: "/poi-images/il-ein-gedi-nature-v2.webp",
    descriptionAdvanced: {
      de: "Das Naturschutzgebiet Ein Gedi liegt am Westufer des Toten Meeres, etwa 400 Meter unter dem Meeresspiegel. Es umfasst eine Oase mit mehreren Süßwasserquellen, die in der trockenen Judäischen Wüste eine einzigartige Flora und Fauna ermöglichen. Die Quellen entspringen dem judäischen Kalkstein und bilden Wasserfälle und natürliche Pools. Die Vegetation umfasst tropische und wüstenartige Pflanzen, darunter Sodomsäpfel und Akazien. Die Region ist reich an archäologischen Stätten, wie einer Synagoge aus dem 6. Jahrhundert mit Mosaikfußboden. In der hebräischen Bibel wird Ein Gedi mehrfach erwähnt, unter anderem als Zufluchtsort Davids vor Saul. Das Schutzgebiet beherbergt eine bedeutende Population des Klippschliefers und des Nubischen Steinbocks. Die jährliche Niederschlagsmenge beträgt weniger als 50 mm, doch die Quellen liefern ganzjährig Wasser. Ein Gedi ist ein wichtiger Zwischenstopp für Zugvögel auf dem afrikanisch-eurasischen Migrationskorridor.",
      hu: "Ein Gedi természetvédelmi területe a Holt-tenger nyugati partján, 400 méterrel a tengerszint alatt található. A terület oázis, amelyet több édesvizű forrás táplál, lehetővé téve a buja növényzetet a sivatagi környezetben. A források a júdai mészkőből törnek elő, vízeséseket és természetes medencéket alkotva. A növényvilág trópusi és sivatagi fajok keveréke, például a szodomaalma és akácok. A régészeti leletek között szerepel egy 6. századi zsinagóga mozaikpadlóval. A Bibliában Ein Gedit Dávid menedékhelyeként említik Saul elől. A rezervátum otthont ad a szirti borznak és a núbiai kőszáli kecskének. Az éves csapadékmennyiség kevesebb mint 50 mm, de a források egész évben vizet szolgáltatnak. A terület fontos pihenőhely a vándormadarak számára az afrikai-eurázsiai migrációs útvonalon.",
      ro: "Rezervația naturală Ein Gedi este situată pe malul vestic al Mării Moarte, la aproximativ 400 de metri sub nivelul mării. Este o oază alimentată de mai multe izvoare de apă dulce, care creează un ecosistem luxuriant în deșertul Iudeei. Izvoarele ies din calcarul iudeu, formând cascade și bazine naturale. Vegetația include specii tropicale și de deșert, precum mărul Sodomei și salcâmi. Zona este bogată în situri arheologice, inclusiv o sinagogă din secolul al VI-lea cu mozaic. În Biblie, Ein Gedi este menționată ca refugiu al lui David de Saul. Rezervația găzduiește populații semnificative de damani și capre sălbatice nubiene. Precipitațiile anuale sunt sub 50 mm, dar izvoarele asigură apă permanent. Ein Gedi este o escală importantă pentru păsările migratoare pe coridorul afro-eurasiatic.",
      en: "Ein Gedi Nature Reserve is located on the western shore of the Dead Sea, some 400 meters below sea level. This oasis is fed by four main springs—David, Shulamit, Arugot, and Zin—that emerge from the Judean limestone, creating waterfalls and pools amidst the arid desert. The reserve spans about 14.4 square kilometers and features a dramatic landscape of canyons and cliffs. It is home to over 1,000 plant species, including the Judean date palm and the Sodom apple. The fauna includes the Nubian ibex, rock hyrax, and numerous bird species such as the Tristram's starling. Archaeological excavations revealed a Chalcolithic temple (4th millennium BCE) and a Byzantine-era synagogue with a mosaic floor depicting animals and zodiac symbols. Ein Gedi is a UNESCO World Heritage candidate and a popular hiking destination, with trails leading to the waterfalls and to the ancient fortress of Masada nearby.",
    },
    factsAdvanced: {
      de: ["Höhe: 400 m unter dem Meeresspiegel", "Jährlicher Niederschlag: weniger als 50 mm", "Quellschüttung: etwa 3 Millionen m³ Wasser pro Jahr", "Fläche: 14,4 km²", "Höchste Erhebung: 200 m über dem Schutzgebiet", "Anzahl der Pflanzenarten: über 1.000"],
      hu: ["Tengerszint alatti magasság: 400 m", "Éves csapadék: kevesebb mint 50 mm", "Források hozama: kb. 3 millió m³ évente", "Terület: 14,4 km²", "Legmagasabb pont: 200 m a rezervátum felett", "Növényfajok száma: több mint 1 000"],
      ro: ["Altitudine: 400 m sub nivelul mării", "Precipitații anuale: sub 50 mm", "Debitul izvoarelor: aproximativ 3 milioane m³/an", "Suprafață: 14,4 km²", "Punctul cel mai înalt: 200 m deasupra rezervației", "Numărul de specii de plante: peste 1.000"],
      en: ["Elevation: 400 m below sea level", "Annual rainfall: less than 50 mm", "Spring discharge: approx. 3 million m³ per year", "Area: 14.4 km²", "Highest point: 200 m above the reserve floor", "Plant species: over 1,000"],
    },
  },
  {
    id: "il-mount-carmel-nature-v2",
    type: "mountain",
    parent: "IL-HA",
    coords: [35.03, 32.73],
    name: { de: "Karmelgebirge", hu: "Kármel-hegy", ro: "Muntele Carmel", en: "Mount Carmel"},
    image: "/poi-images/il-mount-carmel-nature-v2.webp",
    description: {
      de: "Das Karmelgebirge ist ein grüner Küstengebirgszug im Nordwesten Israels, der für seine dichten Wälder und reiche Flora bekannt ist.",
      hu: "A Kármel-hegy egy zöldellő tengerparti hegység Izrael északnyugati részén, amely sűrű erdeiről és gazdag növényvilágáról ismert.",
      ro: "Muntele Carmel este un lanț muntos de coastă verde din nord-vestul Israelului, cunoscut pentru pădurile sale dense și flora bogată.",
      en: "Mount Carmel is a lush coastal mountain range in northwestern Israel, known for its dense forests and rich flora."
    },
    facts: {
      de: ["Immergrüne Vegetation", "UNESCO-Biosphärenreservat", "Bedeutend im Alten Testament", "Reicht bis ans Meer"],
      hu: ["Örökzöld növényzet", "UNESCO bioszféra-rezervátum", "Jelentős az Ószövetségben", "Egészen a tengerig ér"],
      ro: ["Vegetație veșnic verde", "Rezervație a biosferei UNESCO", "Semnificativ în Vechiul Testament", "Ajunge până la mare"],
      en: ["Evergreen vegetation", "UNESCO Biosphere Reserve", "Significant in the Old Testament", "Reaches the sea"]
    }, image: "/poi-images/il-mount-carmel-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Karmel ist ein etwa 50 km langer Gebirgszug im Nordwesten Israels, der sich bis zur Küste des Mittelmeers erstreckt. Der höchste Gipfel erreicht 546 m. Das Karmelgebirge ist bekannt für seine dichte mediterrane Vegetation, darunter Kermeseichen, Pinien und Erdbeerbäume. Es beherbergt den Nationalpark Karmel (Nahal Me'arot), der aufgrund frühmenschlicher Funde zum UNESCO-Weltkulturerbe gehört. In den Höhlen wurden Überreste des Neandertalers und früher Homo sapiens gefunden, die bis zu 250.000 Jahre alt sind. Der biblische Berg Karmel ist Schauplatz des Wettstreits zwischen Elija und den Baalspriestern. Heute ist das Gebiet ein beliebtes Wanderziel und wichtiges Wassereinzugsgebiet. Der Karmel leidet unter Waldbränden; 2010 vernichtete ein Großbrand etwa 5.000 Hektar Wald. Die Stadt Haifa liegt an den Nordwesthängen des Karmel.",
      hu: "A Kármel-hegység egy körülbelül 50 km hosszú vonulat Északnyugat-Izraelben, egészen a Földközi-tenger partjáig. Legmagasabb csúcsa 546 m. A hegység sűrű mediterrán növényzetéről ismert, amely magában foglalja a paratölgyet, fenyőket és eperfákat. A területen található a Nahal Me'arot Nemzeti Park, amely az UNESCO Világörökség része, ahol neandervölgyi és korai emberi leleteket találtak, akár 250 000 évesek. A bibliai Kármel-hegy Illés és a Baál papok vetélkedésének helyszíne. Ma népszerű túracélpont és fontos vízgyűjtő terület. A hegységet erdőtüzek sújtják; 2010-ben egy nagy tűz mintegy 5 000 hektár erdőt pusztított el. Haifa városa a Kármel északnyugati lejtőin fekszik.",
      ro: "Muntele Carmel este un lanț muntos de aproximativ 50 km lungime în nord-vestul Israelului, care se întinde până la coasta Mediteranei. Cel mai înalt vârf atinge 546 m. Este cunoscut pentru vegetația mediteraneană densă, incluzând stejarul de Kermes, pini și arbuști de căpșuni. Aici se află Parcul Național Nahal Me'arot, patrimoniu UNESCO, cu peșteri ce au adăpostit resturi de neanderthalieni și Homo sapiens vechi de până la 250.000 de ani. În Biblie, Muntele Carmel este locul confruntării dintre Ilie și profeții lui Baal. Astăzi, zona este o destinație populară pentru drumeții și un bazin hidrografic important. Incendiile de pădure sunt frecvente; în 2010, un incendiu major a distrus aproximativ 5.000 de hectare de pădure. Orașul Haifa este situat pe versanții nord-vestici ai muntelui.",
      en: "Mount Carmel is a coastal mountain range in northern Israel, stretching about 50 km from the Mediterranean Sea inland. Its highest peak, Rom Carmel, reaches 546 meters above sea level. The range is a biodiversity hotspot, hosting over 1,200 plant species, including the Carmel iris and the Palestinian oak. The Nahal Me'arot Nature Reserve contains caves with evidence of human habitation spanning 500,000 years, including Neanderthal and early Homo sapiens, and is a UNESCO World Heritage site. The Carmel is historically significant as the site where the prophet Elijah challenged the prophets of Baal (1 Kings 18). The mountain's forests are predominantly Aleppo pine, and it provides green space for the nearby city of Haifa. However, it faces threats from development and wildfires; the 2010 Carmel fire was one of the deadliest in Israel's history. The Carmel is also a key source of limestone and has several monasteries, including the Stella Maris Carmelite monastery.",
    },
    factsAdvanced: {
      de: ["Länge: ca. 50 km", "Höchster Gipfel: 546 m (Rom Carmel)", "UNESCO-Weltkulturerbe seit 2012 (Nahal Me'arot)", "Pflanzenarten: über 1.200", "Waldbrand 2010: 5.000 Hektar verbrannt", "Bevölkerung der Stadt Haifa: etwa 280.000 (2021)"],
      hu: ["Hossz: kb. 50 km", "Legmagasabb csúcs: 546 m (Rom Carmel)", "UNESCO Világörökség 2012 óta (Nahal Me'arot)", "Növényfajok: több mint 1 200", "2010-es erdőtűz: 5 000 hektár égett le", "Haifa lakossága: kb. 280 000 (2021)"],
      ro: ["Lungime: aprox. 50 km", "Cel mai înalt vârf: 546 m (Rom Carmel)", "Patrimoniu UNESCO din 2012 (Peșterile Nahal Me'arot)", "Specii de plante: peste 1.200", "Incendiu din 2010: 5.000 hectare distruse", "Populația Haifei: aprox. 280.000 (2021)"],
      en: ["Length: ~50 km", "Highest peak: 546 m (Rom Carmel)", "UNESCO World Heritage since 2012 (Nahal Me'arot caves)", "Plant species: over 1,200", "2010 wildfire: 5,000 hectares burned", "Haifa population: ~280,000 (2021)"],
    },
  },
  {
    id: "il-yehudiya-forest-nature-v2",
    type: "forest",
    parent: "IL-Z",
    coords: [35.68, 32.92],
    name: { de: "Naturschutzgebiet Jehudija", hu: "Jehudija Erdőrezervátum", ro: "Rezervația Yehudiya", en: "Yehudiya Forest Reserve"},
    image: "/poi-images/il-yehudiya-forest-nature-v2.webp",
    description: {
      de: "Dieses Reservat in den Golanhöhen umfasst tiefe Schluchten, Eichenwälder und den berühmten Hexagon-Pool mit seinen Basaltsäulen.",
      hu: "Ez a Golán-fennsíkon található rezervátum mély szurdokokat, tölgyerdőket és a híres, bazaltoszlopokkal övezett Hatszögletű-medencét foglalja magában.",
      ro: "Această rezervație din Înălțimile Golan include defilee adânci, păduri de stejari și faimoasa piscină hexagonală cu coloane de bazalt.",
      en: "This reserve in the Golan Heights encompasses deep canyons, oak forests, and the famous Hexagon Pool with its basalt columns."
    },
    facts: {
      de: ["Spektakuläre Basaltsäulen", "Zahlreiche Wasserfälle", "Tiefe Schluchten", "Natürliche Schwimmbecken"],
      hu: ["Látványos bazaltoszlopok", "Számos vízesés", "Mély szurdokok", "Természetes medencék"],
      ro: ["Coloane spectaculoase de bazalt", "Numeroase cascade", "Defilee adânci", "Piscine naturale"],
      en: ["Spectacular basalt columns", "Numerous waterfalls", "Deep canyons", "Natural pools"]
    }, image: "/poi-images/il-yehudiya-forest-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Yehudiya-Wald liegt auf den Golanhöhen, etwa 15 km östlich des See Genezareth. Es handelt sich um ein Naturschutzgebiet, das den nördlichen Teil des Yehudiya-Reservats umfasst, das für seine Basaltfelsen und Wasserfälle bekannt ist. Der Wald besteht hauptsächlich aus Tabor-Eichen, Atlantischen Pistazien und Erdbeerbäumen. Das Gebiet ist durch tiefe Schluchten geprägt, die von saisonalen Bächen durchflossen werden. Der bekannteste Wasserfall ist der Yehudiya-Wasserfall mit einer Höhe von etwa 50 m. Der Wald ist Lebensraum für Wildschweine, Rehe und Schakale. In der Antike war die Region Teil des jüdischen Königreichs; Überreste einer byzantinischen Siedlung wurden gefunden. Der Yehudiya-Wald ist ein beliebtes Ziel für Wanderungen und Picknicks, besonders im Frühling, wenn Wildblumen blühen. Die jährliche Niederschlagsmenge beträgt etwa 800 mm, was die dichte Vegetation ermöglicht.",
      hu: "A Yehudiya-erdő a Golan-fennsíkon található, kb. 15 km-re keletre a Genezáreti-tótól. Ez egy természetvédelmi terület, amely a Yehudiya Rezervátum északi részét alkotja, híres bazaltsziklákról és vízesésekről. Az erdő főként tabori tölgyből, atlanti pisztáciából és eperfából áll. A területet mély szurdokok tagolják, amelyekben időszakos patakok folynak. A leghíresebb vízesés a Yehudiya-vízesés, kb. 50 m magas. Az erdő vaddisznóknak, őzeknek és sakáloknak ad otthont. Az ókorban a régió a zsidó királyság része volt; bizánci település maradványait találták. A Yehudiya-erdő népszerű kirándulóhely, különösen tavasszal, amikor a vadvirágok nyílnak. Az éves csapadék kb. 800 mm, ami lehetővé teszi a sűrű növényzetet.",
      ro: "Pădurea Yehudiya este situată pe Platoul Golan, la aproximativ 15 km est de Lacul Galileei. Este o rezervație naturală care face parte din Rezervația Yehudiya, cunoscută pentru stâncile de bazalt și cascade. Pădurea este compusă în principal din stejari Tabor, fistic atlantic și arbuști de căpșuni. Zona este brăzdată de chei adânci, prin care curg pâraie sezoniere. Cea mai faimoasă cascadă este Cascada Yehudiya, cu o înălțime de aproximativ 50 m. Pădurea adăpostește mistreți, căprioare și șacali. În antichitate, regiunea făcea parte din regatul evreiesc; au fost găsite rămășițe ale unei așezări bizantine. Pădurea Yehudiya este o destinație populară pentru drumeții și picnicuri, mai ales primăvara, când înfloresc florile sălbatice. Precipitațiile anuale sunt de aproximativ 800 mm, permițând o vegetație densă.",
      en: "Yehudiya Forest Reserve is located on the Golan Heights, about 15 km east of the Sea of Galilee. The reserve covers a rugged terrain of basalt rock formations, deep canyons, and seasonal streams. It is named after the Yehudiya Waterfall, which plunges approximately 50 meters into a natural pool. The forest is dominated by Tabor oak, Atlantic pistachio, and strawberry trees, creating a dense Mediterranean woodland. Wildlife includes wild boar, roe deer, jackals, and various bird species such as the Syrian woodpecker. The reserve also features archaeological remains from the Byzantine period, including a monastery and a village. Yehudiya is a popular hiking area, with marked trails leading to the waterfall and through the canyons. The climate is Mediterranean, with annual precipitation around 800 mm, supporting a rich flora. The reserve is part of a larger network of protected areas on the Golan.",
    },
    factsAdvanced: {
      de: ["Höhe des Wasserfalls: etwa 50 m", "Fläche: ca. 66 km² (gesamtes Yehudiya-Reservat)", "Jährlicher Niederschlag: ca. 800 mm", "Höchste Erhebung: ca. 1.000 m über dem Meeresspiegel", "Bekannte Baumarten: Tabor-Eiche, Atlantische Pistazie, Erdbeerbaum", "Entfernung zum See Genezareth: ca. 15 km"],
      hu: ["Vízesés magassága: kb. 50 m", "Terület: kb. 66 km² (teljes Yehudiya Rezervátum)", "Éves csapadék: kb. 800 mm", "Legmagasabb pont: kb. 1 000 m tengerszint felett", "Ismert fafajok: tabori tölgy, atlanti pisztácia, eperfa", "Távolság a Genezáreti-tótól: kb. 15 km"],
      ro: ["Înălțimea cascadei: aprox. 50 m", "Suprafață: aprox. 66 km² (întreaga Rezervație Yehudiya)", "Precipitații anuale: aprox. 800 mm", "Cel mai înalt punct: aprox. 1.000 m deasupra nivelului mării", "Specii de arbori cunoscute: stejar Tabor, fistic atlantic, arbore de căpșuni", "Distanța față de Lacul Galileei: aprox. 15 km"],
      en: ["Waterfall height: approx. 50 m", "Area: approximately 66 km² (entire Yehudiya Reserve)", "Annual precipitation: approx. 800 mm", "Highest elevation: approx. 1,000 m above sea level", "Notable tree species: Tabor oak, Atlantic pistachio, strawberry tree", "Distance from Sea of Galilee: approx. 15 km"],
    },
  },
  {
    id: "il-banias-nature-v2",
    type: "national-park",
    parent: "IL-Z",
    coords: [35.69, 33.24],
    name: { de: "Banias-Naturschutzgebiet", hu: "Baniasz Nemzeti Park", ro: "Parcul Național Banias", en: "Banias Nature Reserve"},
    image: "/poi-images/il-banias-nature-v2.webp",
    description: {
      de: "Banias ist bekannt für seine sprudelnden Quellen, antiken Ruinen und einen beeindruckenden Wasserfall an den Hängen des Hermon.",
      hu: "Baniasz a Hermon-hegy lejtőin fakadó bővizű forrásairól, ókori romjairól és lenyűgöző vízeséséről híres.",
      ro: "Banias este renumit pentru izvoarele sale abundente, ruinele antice și o cascadă impresionantă pe versanții Muntelui Hermon.",
      en: "Banias is known for its abundant springs, ancient ruins, and a stunning waterfall on the slopes of Mount Hermon."
    },
    facts: {
      de: ["Größter Wasserfall Israels", "Antike Tempelruinen", "Quelle des Jordan", "Üppige Vegetation"],
      hu: ["Izrael legnagyobb vízesése", "Ókori templomromok", "A Jordán folyó egyik forrása", "Buja növényzet"],
      ro: ["Cea mai mare cascadă din Israel", "Ruine ale unor temple antice", "Sursa râului Iordan", "Vegetație luxuriantă"],
      en: ["Largest waterfall in Israel", "Ancient temple ruins", "Source of the Jordan River", "Lush vegetation"]
    }, image: "/poi-images/il-banias-nature-v2.webp",
    descriptionAdvanced: {
      de: "Das Banias-Naturschutzgebiet befindet sich am Fuße des Hermongebirges im Norden der Golanhöhen. Es umfasst die Quellen des Banias-Flusses, der einer der Hauptzuflüsse des Jordan ist. Die Quellen entspringen aus einer Kalksteinhöhle, die in der Antike dem Gott Pan geweiht war – daher der Name Banias (Verballhornung von Paneas). Das Gebiet ist bekannt für seine üppige Vegetation, Wasserfälle und antike Ruinen. Die römische Stadt Caesarea Philippi befand sich hier, und es gibt Überreste eines Herodes-Tempels. Die Wasserfälle des Banias sind bis zu 10 m hoch. Die Flora umfasst Platanen, Weiden und Farne. Das Schutzgebiet beherbergt eine Vielzahl von Vögeln, darunter Eisvögel und Wasseramseln. Der Banias-Fluss ist ein beliebtes Ziel für Kajakfahrer und Wanderer. Die jährliche Niederschlagsmenge beträgt über 1.000 mm, was zu einer dichten Waldbedeckung führt.",
      hu: "A Banias-természetvédelmi terület a Hermon-hegység lábánál, a Golan-fennsík északi részén található. Magában foglalja a Banias-folyó forrásait, amely a Jordán egyik fő mellékfolyója. A források egy mészkőbarlangból törnek elő, amelyet az ókorban Pán istennek szenteltek – innen a Banias név (Paneas torzítása). A terület buja növényzetéről, vízeséseiről és ókori romjairól ismert. Itt állt a római Caesarea Philippi, és megtalálhatók Heródes templomának maradványai. A Banias-vízesés körülbelül 10 m magas. A növényvilágban platánok, fűzfák és páfrányok találhatók. A rezervátum számos madárnak ad otthont, például jégmadárnak és vízirigónak. A Banias-folyó népszerű a kajakosok és túrázók körében. Az éves csapadék meghaladja az 1 000 mm-t, ami sűrű erdőborítást eredményez.",
      ro: "Rezervația naturală Banias este situată la poalele Muntelui Hermon, în nordul Platoului Golan. Include izvoarele râului Banias, unul dintre principalele afluente ale Iordanului. Izvoarele ies dintr-o peșteră de calcar dedicată în antichitate zeului Pan – de aici numele Banias (o deformare a lui Paneas). Zona este cunoscută pentru vegetația luxuriantă, cascade și ruine antice. Aici se afla orașul roman Caesarea Philippi, cu rămășițe ale unui templu al lui Irod. Cascada Banias are aproximativ 10 m înălțime. Flora include platani, sălcii și ferigi. Rezervația găzduiește numeroase păsări, precum pescărușul albastru și mierla de apă. Râul Banias este popular pentru caiac și drumeții. Precipitațiile anuale depășesc 1.000 mm, ducând la o acoperire forestieră densă.",
      en: "Banias Nature Reserve is located at the foot of Mount Hermon in the northern Golan Heights, centered around the Banias spring, one of the main sources of the Jordan River. The spring emerges from a cave in a limestone cliff, which was a cult site for the Greek god Pan, giving the site its ancient name Paneas. The reserve features a 10-meter-high waterfall, lush vegetation of plane trees, willows, and ferns, and archaeological remains from the Roman and Byzantine periods, including the ruins of Caesarea Philippi and a palace built by Herod Philip. The Banias stream flows through a deep canyon, and the area is a popular hiking and kayaking destination. Wildlife includes foxes, wild boar, and many bird species like the gray wagtail. The reserve receives over 1,000 mm of rain annually, supporting a dense Mediterranean forest. A notable natural phenomenon is the Banias Cave, which was once thought to be the source of the river.",
    },
    factsAdvanced: {
      de: ["Quellschüttung: ca. 130 Millionen m³ Wasser pro Jahr", "Höhe des Wasserfalls: etwa 10 m", "Jährlicher Niederschlag: über 1.000 mm", "Fläche: ca. 10 km²", "Höhenlage: ca. 350 m über dem Meeresspiegel", "Römische Stadt: Caesarea Philippi, gegründet im 1. Jahrhundert v. Chr."],
      hu: ["Forráshozam: kb. 130 millió m³ víz évente", "Vízesés magassága: kb. 10 m", "Éves csapadék: több mint 1 000 mm", "Terület: kb. 10 km²", "Tengerszint feletti magasság: kb. 350 m", "Római város: Caesarea Philippi, alapítva az i.e. 1. században"],
      ro: ["Debitul izvorului: aprox. 130 milioane m³ de apă pe an", "Înălțimea cascadei: aprox. 10 m", "Precipitații anuale: peste 1.000 mm", "Suprafață: aprox. 10 km²", "Altitudine: aprox. 350 m deasupra nivelului mării", "Oraș roman: Caesarea Philippi, fondat în secolul I î.Hr."],
      en: ["Spring discharge: approx. 130 million m³ annually", "Waterfall height: approx. 10 m", "Annual precipitation: over 1,000 mm", "Area: approx. 10 km²", "Elevation: approx. 350 m above sea level", "Roman city: Caesarea Philippi, founded in 1st century BCE"],
    },
  },
  {
    id: "il-yarkon-river-nature-v2",
    type: "river",
    parent: "IL-TA",
    coords: [34.77, 32.1],
    name: { de: "Jarkon-Fluss", hu: "Jarkon folyó", ro: "Râul Yarkon", en: "Yarkon River"},
    image: "/poi-images/il-yarkon-river-nature-v2.webp",
    description: {
      de: "Der Jarkon ist ein Küstenfluss, der durch das Zentrum von Tel Aviv fließt und von einem weitläufigen Stadtpark gesäumt wird.",
      hu: "A Jarkon egy tengerparti folyó, amely Tel-Aviv központján folyik keresztül, partjait egy hatalmas városi park szegélyezi.",
      ro: "Yarkon este un râu de coastă care curge prin centrul orașului Tel Aviv, înconjurat de un parc urban extins.",
      en: "The Yarkon is a coastal river that flows through the center of Tel Aviv, bordered by a vast urban park."
    },
    facts: {
      de: ["Fließt durch Tel Aviv", "Beliebtes Naherholungsgebiet", "Mündet ins Mittelmeer", "Historische Mühlen entlang des Flusses"],
      hu: ["Tel-Avivon folyik keresztül", "Népszerű pihenőövezet", "A Földközi-tengerbe ömlik", "Történelmi malmok a part mentén"],
      ro: ["Curge prin Tel Aviv", "Zonă populară de recreere", "Se varsă în Marea Mediterană", "Mori istorice de-a lungul râului"],
      en: ["Flows through Tel Aviv", "Popular recreation area", "Empties into the Mediterranean Sea", "Historical mills along the river"]
    }, image: "/poi-images/il-yarkon-river-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Yarkon-Fluss ist ein 27 km langer Küstenfluss im zentralen Israel, der in den Quellen des Yarkon (Rosh HaAyin) entspringt und bei Tel Aviv ins Mittelmeer mündet. Der Fluss war einst stark verschmutzt, wurde aber ab den 1990er Jahren umfassend saniert. Heute fließt er weitgehend naturnah und ist von Parks umgeben, darunter der Yarkon-Park in Tel Aviv. Der Fluss spielt eine wichtige Rolle bei der Ableitung von Hochwasser und der Grundwasserneubildung. Seine Ufer beherbergen verschiedene Vogelarten und Kleinsäuger. Die Wasserqualität wird regelmäßig überwacht. Der Yarkon ist auch ein Naherholungsgebiet für die Bevölkerung des Großraums Tel Aviv. Sein Einzugsgebiet umfasst etwa 1.800 km².",
      hu: "A Jarkon folyó egy 27 km hosszú parti folyó Közép-Izraelben, amely a Jarkon-forrásokból (Rosh HaAyin) ered és Tel-Avivnál ömlik a Földközi-tengerbe. A folyó egykor erősen szennyezett volt, de az 1990-es évektől kezdődően nagyszabású tisztítási programok folytak. Ma már többnyire természetközeli állapotú, és parkok övezik, közülük a legnagyobb a Tel-Avivi Jarkon Park. A folyó fontos szerepet játszik az árvizek elvezetésében és a talajvíz utánpótlásában. Partjain madarak és kisemlősök élnek. Vízminőségét rendszeresen ellenőrzik. A Jarkon a nagytel-avivi térség lakóinak kedvelt pihenőhelye. Vízgyűjtő területe kb. 1800 km².",
      ro: "Râul Yarkon este un râu de coastă de 27 km lungime în centrul Israelului, care izvorăște din izvoarele Yarkon (Rosh HaAyin) și se varsă în Marea Mediterană lângă Tel Aviv. A fost puternic poluat, dar începând cu anii 1990 a fost supus unor ample lucrări de reabilitare. Acum curge în mare parte natural și este înconjurat de parcuri, inclusiv Parcul Yarkon din Tel Aviv. Râul joacă un rol important în drenarea inundațiilor și realimentarea apelor subterane. Malurile sale găzduiesc diverse păsări și mamifere mici. Calitatea apei este monitorizată periodic. Yarkon este o zonă de agrement pentru populația din zona metropolitană Tel Aviv. Bazinul său hidrografic acoperă aproximativ 1.800 km².",
      en: "The Yarkon River is a 27 km coastal river in central Israel, originating from the Yarkon springs (Rosh HaAyin) and flowing into the Mediterranean Sea near Tel Aviv. It was heavily polluted but underwent major rehabilitation from the 1990s onward. Today it flows mostly in a natural state and is flanked by parks, notably the Yarkon Park in Tel Aviv. The river is important for flood control and groundwater recharge. Its banks host diverse bird species and small mammals. Water quality is regularly monitored. The Yarkon is a recreational area for the Tel Aviv metropolitan population. Its drainage basin covers about 1,800 km².",
    },
    factsAdvanced: {
      de: ["Länge: 27 km", "Quelle: Yarkon-Quellen bei Rosh HaAyin", "Mündung: Mittelmeer nahe Tel Aviv", "Sanierung ab den 1990er Jahren", "Einzugsgebiet: ca. 1.800 km²", "Yarkon-Park: größter Park Tel Avivs"],
      hu: ["Hossz: 27 km", "Forrás: Jarkon-források (Rosh HaAyin)", "Torkolat: Földközi-tenger Tel-Avivnál", "Tisztítás az 1990-es évektől", "Vízgyűjtő terület: kb. 1800 km²", "Jarkon Park: Tel-Aviv legnagyobb parkja"],
      ro: ["Lungime: 27 km", "Izvor: Izvoarele Yarkon (Rosh HaAyin)", "Varsare: Marea Mediterana langa Tel Aviv", "Reabilitare incepand cu anii 1990", "Bazin hidrografic: cca 1.800 km²", "Parcul Yarkon: cel mai mare parc din Tel Aviv"],
      en: ["Length: 27 km", "Source: Yarkon springs at Rosh HaAyin", "Mouth: Mediterranean Sea near Tel Aviv", "Rehabilitation started in 1990s", "Drainage basin: approx. 1,800 km²", "Yarkon Park: largest park in Tel Aviv"],
    },
  },
  {
    id: "il-mount-meron-nature-v2",
    type: "mountain",
    parent: "IL-Z",
    coords: [35.41, 32.99],
    name: { de: "Berg Meron", hu: "Meron-hegy", ro: "Muntele Meron", en: "Mount Meron"},
    image: "/poi-images/il-mount-meron-nature-v2.webp",
    description: {
      de: "Der Berg Meron in Galiläa ist der höchste Berg, der vollständig innerhalb der international anerkannten Grenzen Israels liegt.",
      hu: "A galileai Meron-hegy a legmagasabb olyan csúcs, amely teljes egészében Izrael nemzetközileg elismert határain belül fekszik.",
      ro: "Muntele Meron din Galileea este cel mai înalt munte aflat în întregime în granițele recunoscute internațional ale Israelului.",
      en: "Mount Meron in Galilee is the highest mountain located entirely within the internationally recognized borders of Israel."
    },
    facts: {
      de: ["Über 1200 Meter hoch", "Wichtiges Naturschutzgebiet", "Beliebt für Pilgerreisen", "Dichte Eichenwälder"],
      hu: ["Több mint 1200 méter magas", "Fontos természetvédelmi terület", "Zarándoklatok kedvelt helyszíne", "Sűrű tölgyerdők borítják"],
      ro: ["Peste 1200 de metri înălțime", "Importantă rezervație naturală", "Popular pentru pelerinaje", "Păduri dense de stejari"],
      en: ["Over 1200 meters high", "Important nature reserve", "Popular for pilgrimages", "Dense oak forests"]
    }, image: "/poi-images/il-mount-meron-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Berg Meron ist mit 1.208 m der höchste Gipfel in Galiläa und liegt im Norden Israels. Das Naturschutzgebiet Mount Meron umfasst den Berg und seine Umgebung, die für ihre artenreiche mediterrane Flora und Fauna bekannt ist. Das Gebiet ist ein wichtiger Vogelbeobachtungspunkt, insbesondere während der Migration. Auf dem Berg Meron befinden sich Grabstätten jüdischer Gelehrter, darunter das Grab von Rabbi Schimon bar Jochai, das jedes Jahr tausende Pilger anzieht. Die Vegetation umfasst Kermeseichen, Lorbeerbäume und verschiedene Orchideenarten. Der Berg ist auch für seine Höhlen und Schluchten bekannt. Die jährliche Niederschlagsmenge beträgt etwa 1.000 mm, was zu dichten Wäldern führt. Der Berg Meron ist Teil des galiläischen Gebirges und hat eine bedeutende kulturelle und religiöse Bedeutung.",
      hu: "A Meron-hegy 1.208 m magas, Galilea legmagasabb csúcsa Észak-Izraelben. A Mount Meron természetvédelmi terület magában foglalja a hegyet és környékét, amely gazdag mediterrán növény- és állatvilágáról ismert. A terület fontos madármegfigyelő hely, különösen a vonulás idején. A Meron-hegyen zsidó tudósok sírjai találhatók, köztük Rabbi Simeon bar Jochai sírja, amely évente több ezer zarándokot vonz. A növényvilágban paratölgy, babér és különböző orchideafajok találhatók. A hegy híres barlangjairól és szurdokairól is. Az éves csapadék kb. 1.000 mm, ami sűrű erdőket eredményez. A Meron-hegy a galileai hegység része, jelentős kulturális és vallási szereppel.",
      ro: "Muntele Meron, cu 1.208 m, este cel mai înalt vârf din Galileea, în nordul Israelului. Rezervația naturală Muntele Meron include muntele și împrejurimile, cunoscute pentru flora și fauna mediteraneană bogată. Zona este un punct important de observare a păsărilor, în special în timpul migrației. Pe Muntele Meron se află morminte ale unor savanți evrei, inclusiv mormântul lui Rabbi Shimon bar Yochai, care atrage mii de pelerini anual. Vegetația include stejar de Kermes, dafin și diverse specii de orhidee. Muntele este cunoscut și pentru peșteri și chei. Precipitațiile anuale sunt de aproximativ 1.000 mm, ducând la păduri dese. Muntele Meron face parte din munții Galileii și are o semnificație culturală și religioasă importantă.",
      en: "Mount Meron, at 1,208 meters (3,963 ft), is the highest peak in the Upper Galilee region of northern Israel. The Mount Meron Nature Reserve encompasses the mountain and its surroundings, covering an area of about 84 km². The reserve is a biodiversity hotspot, home to over 1,300 plant species, including the rare Meron iris and the Syrian peony. It is also a crucial site for bird migration, with over 200 species recorded. The mountain holds religious significance as it contains the tomb of Rabbi Shimon bar Yochai, a major pilgrimage site for Lag BaOmer. The reserve features several hiking trails, including the Meron Ridge Trail. The climate is Mediterranean with cool winters and snow occasionally. The area is also known for its spring wildflowers and ancient olive trees.",
    },
    factsAdvanced: {
      de: ["Höhe: 1.208 m", "Fläche des Schutzgebiets: ca. 84 km²", "Pflanzenarten: über 1.300", "Jährlicher Niederschlag: ca. 1.000 mm", "Zahl der Vogelarten: über 200", "Pilger zum Grab von Rabbi Schimon bar Jochai: jährlich ca. 300.000 (Lag BaOmer)"],
      hu: ["Magasság: 1.208 m", "Védett terület: kb. 84 km²", "Növényfajok: több mint 1 300", "Éves csapadék: kb. 1 000 mm", "Madárfajok száma: több mint 200", "Zarándokok Rabbi Simeon bar Jochai sírjához: évente kb. 300 000 (Lag BaOmer ünnepén)"],
      ro: ["Înălțime: 1.208 m", "Suprafața rezervației: aprox. 84 km²", "Specii de plante: peste 1.300", "Precipitații anuale: aprox. 1.000 mm", "Număr de specii de păsări: peste 200", "Pelerini la mormântul lui Rabbi Shimon bar Yochai: aprox. 300.000 anual (Lag BaOmer)"],
      en: ["Height: 1,208 m (3,963 ft)", "Reserve area: approx. 84 km²", "Plant species: over 1,300", "Annual precipitation: approx. 1,000 mm", "Bird species: over 200", "Pilgrims to Rabbi Shimon bar Yochai's tomb: approx. 300,000 annually (Lag BaOmer)"],
    },
  },
  {
    id: "il-hula-valley-nature-v2",
    type: "national-park",
    parent: "IL-Z",
    coords: [35.61, 33.1],
    name: { de: "Hula-Naturschutzgebiet", hu: "Hula-völgy Nemzeti Park", ro: "Rezervația Hula", en: "Hula Nature Reserve"},
    image: "/poi-images/il-hula-valley-nature-v2.webp",
    description: {
      de: "Das Hula-Tal ist ein Feuchtgebiet von globaler Bedeutung, das Millionen von Zugvögeln auf ihrer Reise zwischen Europa und Afrika als Rastplatz dient.",
      hu: "A Hula-völgy egy globális jelentőségű vizenyős terület, amely vándormadarak millióinak szolgál pihenőhelyül az Európa és Afrika közötti útjukon.",
      ro: "Valea Hula este o zonă umedă de importanță globală, care servește drept loc de popas pentru milioane de păsări migratoare.",
      en: "The Hula Valley is a globally significant wetland that serves as a resting spot for millions of migratory birds traveling between Europe and Africa."
    },
    facts: {
      de: ["Paradies für Vogelbeobachter", "Bedeutende Feuchtgebiete", "Heimat seltener Tierarten", "Erfolgreich renaturiert"],
      hu: ["A madármegfigyelők paradicsoma", "Jelentős vizes élőhelyek", "Ritka állatfajok otthona", "Sikeresen helyreállított terület"],
      ro: ["Paradis pentru ornitologi", "Zone umede importante", "Găzduiește specii rare", "Zonă renaturată cu succes"],
      en: ["Birdwatcher's paradise", "Significant wetlands", "Home to rare animal species", "Successfully restored area"]
    }, image: "/poi-images/il-hula-valley-nature-v2.webp",
    descriptionAdvanced: {
      de: "Das Hula-Naturschutzgebiet liegt im nördlichen Israel, im Hula-Tal, nördlich des Sees Genezareth. Es ist ein bedeutendes Feuchtgebiet, das 1964 nach der Trockenlegung des Hula-Sees teilweise wiederhergestellt wurde. Das Reservat ist ein wichtiger Rastplatz für Zugvögel auf dem afrikanisch-eurasischen Migrationskorridor. Jährlich ziehen über 500 Millionen Vögel durch das Tal, darunter Kraniche, Störche und Pelikane. Die Vegetation besteht aus Papyrus, Schilf und Seerosen. Das Reservat beherbergt auch eine Vielzahl von Fischen und Amphibien. In den 1990er Jahren wurde das Gebiet erweitert, um die Biodiversität zu fördern. Das Hula-Tal ist auch für seine landwirtschaftliche Nutzung bekannt, insbesondere für den Anbau von Baumwolle und Mais. Das Besucherzentrum bietet Beobachtungspunkte und Lehrpfade.",
      hu: "A Hula Természetvédelmi Terület Észak-Izraelben, a Hula-völgyben található, a Genezáreti-tótól északra. Ez egy jelentős vizes élőhely, amelyet 1964-ben részben helyreállítottak a Hula-tó lecsapolása után. A rezervátum fontos pihenőhely a vándormadarak számára az afrikai-eurázsiai migrációs útvonalon. Évente több mint 500 millió madár halad át a völgyön, köztük darvak, gólyák és pelikánok. A növényzet papiruszból, nádasból és tavirózsából áll. A rezervátum számos halfajnak és kétéltűnek ad otthont. Az 1990-es években bővítették a területet a biodiverzitás növelése érdekében. A Hula-völgy mezőgazdasági hasznosításáról is ismert, különösen a gyapot- és kukoricatermesztésről. A látogatóközpontban megfigyelőhelyek és tanösvények találhatók.",
      ro: "Rezervația Naturală Hula se află în nordul Israelului, în Valea Hula, la nord de Lacul Galileei. Este o zonă umedă importantă, parțial restaurată în 1964 după desecarea Lacului Hula. Rezervația este un punct de popas crucial pentru păsările migratoare pe coridorul afro-eurasiatic. Anual, peste 500 de milioane de păsări traversează valea, inclusiv cocori, berze și pelicani. Vegetația este formată din papirus, stuf și nuferi. Rezervația adăpostește o varietate de pești și amfibieni. În anii 1990, zona a fost extinsă pentru a spori biodiversitatea. Valea Hula este cunoscută și pentru agricultură, în special bumbac și porumb. Centrul de vizitare oferă puncte de observare și trasee educaționale.",
      en: "The Hula Nature Reserve is located in the Hula Valley in northern Israel, north of the Sea of Galilee. It was established in 1964 on a portion of the former Lake Hula, which was drained in the 1950s to create agricultural land. The reserve covers about 3.5 km² and is one of the most important birdwatching sites in the world, with over 500 million birds migrating through annually. Key species include the common crane (up to 50,000 wintering), white stork, and great white pelican. The reserve features a 1.5 km walkway through the papyrus swamp, observation towers, and a visitor center. The Hula Valley is also known for its rich archaeological history, including the prehistoric site of Gesher Benot Ya'aqov. The reserve plays a crucial role in conservation and education, hosting over 300,000 visitors each year.",
    },
    factsAdvanced: {
      de: ["Fläche: ca. 3,5 km²", "Gründungsjahr: 1964", "Zugvögel pro Jahr: über 500 Millionen", "Winternde Kraniche: bis zu 50.000", "Besucher jährlich: über 300.000", "Länge der Fußgängerbrücke: 1,5 km"],
      hu: ["Terület: kb. 3,5 km²", "Alapítás éve: 1964", "Éves vándormadarak: több mint 500 millió", "Telelő darvak: akár 50 000", "Látogatók évente: több mint 300 000", "Gyalogoshíd hossza: 1,5 km"],
      ro: ["Suprafață: aprox. 3,5 km²", "Anul înființării: 1964", "Păsări migratoare pe an: peste 500 de milioane", "Cocori iernanți: până la 50.000", "Vizitatori anual: peste 300.000", "Lungimea pasarelei pietonale: 1,5 km"],
      en: ["Area: approx. 3.5 km²", "Year established: 1964", "Migratory birds per year: over 500 million", "Wintering cranes: up to 50,000", "Annual visitors: over 300,000", "Boardwalk length: 1.5 km"],
    },
  },
  {
    id: "il-carmel-forest-nature-v2",
    type: "forest",
    parent: "IL-HA",
    coords: [35.01, 32.71],
    name: { de: "Karmel-Wald", hu: "Kármel-erdő", ro: "Pădurea Carmel", en: "Carmel Forest"},
    image: "/poi-images/il-carmel-forest-nature-v2.webp",
    description: {
      de: "Der Karmel-Wald ist das größte Waldgebiet Israels, das sich über das Karmelgebirge erstreckt und für seine Pinien- und Eichenbestände bekannt ist.",
      hu: "A Kármel-erdő Izrael legnagyobb összefüggő erdősége, amely a Kármel-hegységen húzódik végig, és fenyő- valamint tölgyfáiról ismert.",
      ro: "Pădurea Carmel este cea mai mare zonă împădurită din Israel, extinzându-se pe Muntele Carmel și fiind cunoscută pentru pinii și stejarii săi.",
      en: "Carmel Forest is the largest forested area in Israel, stretching across Mount Carmel and known for its pine and oak trees."
    },
    facts: {
      de: ["Größter Wald in Israel", "Beliebt für Picknicks", "Umfangreiches Wegenetz", "Heimat von Wildschweinen"],
      hu: ["Izrael legnagyobb erdeje", "Népszerű piknikezőhely", "Kiterjedt túraútvonal-hálózat", "Vaddisznók élőhelye"],
      ro: ["Cea mai mare pădure din Israel", "Populară pentru picnicuri", "Rețea extinsă de trasee", "Habitat pentru mistreți"],
      en: ["Largest forest in Israel", "Popular for picnics", "Extensive trail network", "Habitat for wild boars"]
    }, image: "/poi-images/il-carmel-forest-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Karmelwald (Ya'ar HaCarmel) ist ein mediterraner Wald im Karmelgebirge im Nordwesten Israels. Er erstreckt sich über eine Fläche von etwa 100 km² und ist Teil des größeren Karmel-Nationalparks. Der Wald besteht hauptsächlich aus Aleppo-Kiefern, Kermeseichen und Erdbeerbäumen. In den 1990er Jahren wurde ein großes Aufforstungsprojekt durchgeführt, um die durch Brände und Abholzung verlorenen Flächen wiederherzustellen. Der Karmelwald ist Lebensraum für Wildschweine, Damhirsche und Schakale. Im Wald gibt es mehrere Wanderwege und Aussichtspunkte mit Blick auf das Mittelmeer. Der Wald leidet unter periodischen Waldbränden; der verheerende Brand von 2010 zerstörte große Teile des Waldes. Seitdem werden Wiederaufforstungsmaßnahmen durchgeführt. Der Karmelwald ist auch ein wichtiges Wassereinzugsgebiet für die Stadt Haifa.",
      hu: "A Kármel-erdő (Ya'ar HaCarmel) egy mediterrán erdő a Kármel-hegységben, Északnyugat-Izraelben. Körülbelül 100 km² területet fed le, és a nagyobb Kármel Nemzeti Park része. Az erdő főként aleppói fenyőből, paratölgyből és eperfából áll. Az 1990-es években nagy erdőtelepítési projekt zajlott a tüzek és erdőirtás által károsított területek helyreállítására. A Kármel-erdő vaddisznóknak, dámszarvasoknak és sakáloknak ad otthont. Az erdőben több túraútvonal és kilátópont található, ahonnan a Földközi-tengerre nyílik kilátás. Az erdőt időszakos erdőtüzek sújtják; a 2010-es pusztító tűz az erdő nagy részét elpusztította. Azóta erdősítési intézkedések folynak. A Kármel-erdő fontos vízgyűjtő terület Haifa városa számára.",
      ro: "Pădurea Carmel (Ya'ar HaCarmel) este o pădure mediteraneană din Munții Carmel, în nord-vestul Israelului. Se întinde pe o suprafață de aproximativ 100 km² și face parte din Parcul Național Carmel mai mare. Pădurea este compusă în principal din pin de Alep, stejar de Kermes și arbore de căpșuni. În anii 1990, un mare proiect de reîmpădurire a fost realizat pentru a restaura zonele degradate de incendii și despăduriri. Pădurea Carmel găzduiește mistreți, cerbi lopătari și șacali. Există mai multe trasee de drumeții și puncte de belvedere cu vedere la Marea Mediterană. Pădurea suferă de incendii periodice; incendiul devastator din 2010 a distrus o mare parte a pădurii. De atunci, se desfășoară măsuri de reîmpădurire. Pădurea Carmel este, de asemenea, un important bazin hidrografic pentru orașul Haifa.",
      en: "Carmel Forest (Ya'ar HaCarmel) is a Mediterranean forest located in the Carmel mountain range near Haifa, Israel. It covers about 100 km² and is part of the Carmel National Park. The forest is dominated by Aleppo pine, but also includes oak, pistachio, and other Mediterranean species. It was severely affected by the 2010 Carmel fire, which burned about 25 km² of forest. Since then, extensive reforestation efforts have been undertaken, including the planting of over 1 million trees. The forest is home to a reintroduced population of Persian fallow deer, as well as wild boar, wolves, and hyenas. It offers numerous hiking and biking trails, including the Carmel Trail. The forest serves as a green lung for the Haifa metropolitan area and plays a key role in water conservation and soil protection. The average annual precipitation is around 700 mm.",
    },
    factsAdvanced: {
      de: ["Fläche: ca. 100 km²", "Dominante Baumart: Aleppo-Kiefer (Pinus halepensis)", "Waldbrand 2010: 25 km² zerstört", "Wiederaufforstung: über 1 Million Bäume gepflanzt seit 2010", "Wiederansiedelung: Mesopotamischer Damhirsch (Dama dama mesopotamica)", "Jährlicher Niederschlag: ca. 700 mm"],
      hu: ["Terület: kb. 100 km²", "Domináns fafaj: aleppói fenyő (Pinus halepensis)", "2010-es erdőtűz: 25 km² pusztult el", "Újratelepítés: több mint 1 millió fát ültettek 2010 óta", "Visszatelepítve: mezopotámiai dámszarvas (Dama dama mesopotamica)", "Éves csapadék: kb. 700 mm"],
      ro: ["Suprafață: aprox. 100 km²", "Specie de arbore dominantă: pin de Alep (Pinus halepensis)", "Incendiul din 2010: 25 km² distruși", "Reîmpădurire: peste 1 milion de copaci plantați din 2010", "Reintroducere: cerb lopătar mesopotamian (Dama dama mesopotamica)", "Precipitații anuale: aprox. 700 mm"],
      en: ["Area: approx. 100 km²", "Dominant tree species: Aleppo pine (Pinus halepensis)", "2010 wildfire: 25 km² destroyed", "Reforestation: over 1 million trees planted since 2010", "Reintroduction: Persian fallow deer (Dama dama mesopotamica)", "Annual precipitation: approx. 700 mm"],
    },
  },
  {
    id: "il-dan-river-nature-v2",
    type: "river",
    parent: "IL-Z",
    coords: [35.65, 33.24],
    name: { de: "Dan", hu: "Dán folyó", ro: "Râul Dan", en: "Dan River"},
    image: "/poi-images/il-dan-river-nature-v2.webp",
    description: {
      de: "Der Dan ist der größte Quellfluss des Jordan, der aus starken, eiskalten Quellen im Norden des Landes entspringt.",
      hu: "A Dán a Jordán legnagyobb forrásfolyója, amely az ország északi részén található bővizű, jéghideg forrásokból ered.",
      ro: "Râul Dan este cel mai mare afluent al Iordanului, izvorând din izvoare puternice și reci din nordul țării.",
      en: "The Dan River is the largest tributary of the Jordan River, originating from strong, ice-cold springs in the north of the country."
    },
    facts: {
      de: ["Größter Quellfluss des Jordan", "Sehr sauberes Wasser", "Dicht bewachsenes Ufer", "Wichtige Trinkwasserquelle"],
      hu: ["A Jordán legbővizűbb ága", "Nagyon tiszta vizű", "Sűrű növényzet a parton", "Fontos ivóvízforrás"],
      ro: ["Cel mai mare afluent al Iordanului", "Apă foarte curată", "Maluri dens împădurite", "Sursă importantă de apă potabilă"],
      en: ["Largest source of the Jordan River", "Very clean water", "Densely vegetated banks", "Important source of drinking water"]
    }, image: "/poi-images/il-dan-river-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Dan ist einer der drei Hauptquellflüsse des Jordan, der am Fuße des Hermongebirges entspringt. Der Dan-Naturreservat umfasst die Quelle und den Oberlauf des Flusses, der für seine klaren, kalten Wasser bekannt ist. Die Quelle liefert etwa 240 Millionen m³ Wasser pro Jahr und ist damit die ergiebigste Quelle im Nahen Osten. Der Fluss fließt durch einen dichten Auenwald mit Platanen, Erlen und Weiden. Das Reservat ist ein beliebtes Ziel für Picknicks und Wanderungen. Der Dan River ist auch ein wichtiger Lebensraum für die gefährdete Bachforelle (Salmo aphelios). In der Antike war der Fluss als Dan bekannt, eine Stadt, die im Buch der Richter erwähnt wird. Das Reservat beherbergt archäologische Überreste, darunter ein Tor aus der Bronzezeit. Der Dan ist einer der wenigen ganzjährig wasserführenden Flüsse in der Region.",
      hu: "A Dán folyó a Jordán egyik fő forrásfolyója, amely a Hermon-hegység lábánál ered. A Dan Természetvédelmi Terület magában foglalja a forrást és a folyó felső szakaszát, amely tiszta, hideg vízéről ismert. A forrás kb. 240 millió m³ vizet biztosít évente, így a Közel-Kelet legbővizűbb forrása. A folyó sűrű ártéri erdőn folyik keresztül, platánokkal, égerrel és fűzfákkal. A rezervátum népszerű piknikező- és túracélpont. A Dán folyó fontos élőhely a veszélyeztetett pataki pisztráng (Salmo aphelios) számára. Az ókorban a folyó Dán néven volt ismert, egy város, amelyet a Bírák könyve említ. A rezervátum régészeti maradványokat rejt, köztük egy bronzkori kaput. A Dán az egyik kevés egész évben vízzel teli folyó a régióban.",
      ro: "Râul Dan este unul dintre cele trei principale izvoare ale Iordanului, care izvorăște la poalele Muntelui Hermon. Rezervația Naturală Dan include izvorul și cursul superior al râului, cunoscut pentru apele sale limpezi și reci. Izvorul furnizează aproximativ 240 de milioane m³ de apă pe an, fiind cel mai puternic izvor din Orientul Mijlociu. Râul curge printr-o pădure de luncă densă, cu platani, arini și sălcii. Rezervația este o destinație populară pentru picnicuri și drumeții. Râul Dan este un habitat important pentru păstrăvul de pârâu (Salmo aphelios), o specie amenințată. În antichitate, râul era cunoscut sub numele de Dan, un oraș menționat în Cartea Judecătorilor. Rezervația adăpostește rămășițe arheologice, inclusiv o poartă din epoca bronzului. Danul este unul dintre puținele râuri cu debit permanent în regiune.",
      en: "The Dan River is one of the three major sources of the Jordan River, rising from springs at the base of Mount Hermon. The Dan Nature Reserve protects the largest and most powerful spring in the Middle East, with an average annual discharge of 240 million m³. The river is only about 20 km long but has a constant flow of cold, clear water. It flows through a lush riparian forest of plane trees, maples, and willows. The reserve is a popular recreation area with picnic sites and walking trails. The Dan is home to the endemic Dan fish (Acanthobrama hulensis?) and the rare freshwater crab. Archaeological excavations at Tel Dan have uncovered a Canaanite city and a biblical gate from the Bronze Age. The reserve also features a small waterfall and natural pools. In 2016, the Dan River was declared a UNESCO Biosphere Reserve.",
    },
    factsAdvanced: {
      de: ["Quellschüttung: ca. 240 Millionen m³ pro Jahr", "Länge: ca. 20 km", "Wassertemperatur: ganzjährig etwa 15 °C", "Salmo aphelios: eine endemische Forellenart", "Archäologisch: Tor von Tel Dan aus der Bronzezeit (ca. 1750 v. Chr.)", "UNESCO-Biosphärenreservat: seit 2016"],
      hu: ["Forráshozam: kb. 240 millió m³ évente", "Hossz: kb. 20 km", "Vízhőmérséklet: egész évben kb. 15 °C", "Salmo aphelios: endemikus pisztrángfaj", "Régészet: Tel Dán bronzkori kapuja (kb. i. e. 1750)", "UNESCO Bioszféra Rezervátum: 2016 óta"],
      ro: ["Debitul izvorului: aprox. 240 milioane m³ pe an", "Lungime: aprox. 20 km", "Temperatura apei: constantă aproximativ 15 °C", "Salmo aphelios: o specie endemică de păstrăv", "Arheologie: poarta de la Tel Dan din epoca bronzului (cca. 1750 î.Hr.)", "Rezervație a Biosferei UNESCO: din 2016"],
      en: ["Spring discharge: approx. 240 million m³ per year", "Length: approx. 20 km", "Water temperature: constant around 15 °C", "Salmo aphelios: an endemic trout species", "Archaeology: Tel Dan gate from Bronze Age (c. 1750 BCE)", "UNESCO Biosphere Reserve: since 2016"],
    },
  },
  {
    id: "il-mount-arbel-nature-v2",
    type: "mountain",
    parent: "IL-Z",
    coords: [35.49, 32.82],
    name: { de: "Berg Arbel", hu: "Arbel-hegy", ro: "Muntele Arbel", en: "Mount Arbel"},
    image: "/poi-images/il-mount-arbel-nature-v2.webp",
    description: {
      de: "Der Berg Arbel erhebt sich mit steilen Klippen über dem See Genezareth und bietet eine spektakuläre Aussicht auf die gesamte Region Galiläa.",
      hu: "Az Arbel-hegy meredek szikláival magasodik a Galileai-tenger fölé, lenyűgöző kilátást nyújtva egész Galileára.",
      ro: "Muntele Arbel se înalță cu stânci abrupte deasupra Mării Galileei, oferind o vedere spectaculoasă asupra întregii regiuni Galileea.",
      en: "Mount Arbel rises with steep cliffs over the Sea of Galilee, offering a spectacular view of the entire Galilee region."
    },
    facts: {
      de: ["Beeindruckende Klippen", "Blick auf den See Genezareth", "Historische Höhlenfestungen", "Beliebtes Wanderziel"],
      hu: ["Látványos sziklafalak", "Kilátás a Galileai-tengerre", "Történelmi barlangerődök", "Népszerű túracélpont"],
      ro: ["Stânci impresionante", "Vedere spre Marea Galileei", "Cetăți rupestre istorice", "Destinație populară pentru drumeții"],
      en: ["Impressive cliffs", "View of the Sea of Galilee", "Historical cave fortresses", "Popular hiking destination"]
    }, image: "/poi-images/il-mount-arbel-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Berg Arbel ist ein 380 m hoher Berg in Galiläa im Nordosten Israels, nahe dem See Genezareth. Bekannt ist er für seine steilen Klippen, die aus Kalkstein des Miozäns bestehen. Auf dem Gipfel befinden sich die Ruinen einer jüdischen Siedlung aus der Zeit des Zweiten Tempels und eine Festung. Der Berg war ein strategischer Punkt während des Jüdischen Aufstands gegen die Römer. Der Nationalpark Arbel umfasst eine Fläche von etwa 2 Quadratkilometern und schützt eine vielfältige Flora und Fauna, darunter seltene Orchideen und Greifvögel. Vom Gipfel hat man einen weiten Blick auf das galiläische Bergland und den See Genezareth. Der Berg ist ein beliebtes Ziel für Wanderer und Kletterer. Jährlich besuchen etwa 150.000 Menschen das Gebiet.",
      hu: "Az Arbel-hegy egy 380 méter magas hegy Galileában, Izrael északkeleti részén, a Genezáreti-tó közelében. Híres meredek szikláiról, melyek miocén kori mészkőből állnak. A csúcson egy második templom kori zsidó település és erőd romjai találhatók. A hegy stratégiai pont volt a zsidó felkelés idején a rómaiak ellen. Az Arbel Nemzeti Park körülbelül 2 négyzetkilométer területet ölel fel, és változatos növény- és állatvilágot véd, beleértve ritka orchideákat és ragadozó madarakat. A csúcsról kilátás nyílik Galilea hegyeire és a Genezáreti-tóra. A hegy népszerű túra- és mászóhely. Évente mintegy 150.000 látogató keresi fel.",
      ro: "Muntele Arbel este un munte de 380 m înălțime în Galileea, nord-estul Israelului, lângă Marea Galileii. Este celebru pentru stâncile sale abrupte, formate din calcar miocen. Pe vârf se află ruinele unei așezări evreiești din perioada celui de-al Doilea Templu și ale unei fortărețe. Muntele a fost un punct strategic în timpul revoltei evreiești împotriva romanilor. Parcul Național Arbel se întinde pe aproximativ 2 km² și protejează o floră și faună diversă, inclusiv orhidee rare și păsări de pradă. De pe vârf se vede o panoramă a munților Galileii și a Mării Galileii. Muntele este o destinație populară pentru drumeții și alpinism. Aproximativ 150.000 de vizitatori vin anual.",
      en: "Mount Arbel is a 380 m high mountain in Galilee, northeastern Israel, near the Sea of Galilee. It is known for its steep cliffs composed of Miocene limestone. On the summit are ruins of a Jewish settlement from the Second Temple period and a fortress. The mountain was a strategic site during the Jewish revolt against Rome. The Arbel National Park covers about 2 square kilometers, protecting diverse flora and fauna, including rare orchids and birds of prey. The summit offers panoramic views of the Galilean hills and the Sea of Galilee. The mountain is popular for hiking and climbing. Approximately 150,000 visitors come annually.",
    },
    factsAdvanced: {
      de: ["Höhe: 380 m", "Gestein: miozäner Kalkstein", "Nationalparkfläche: ca. 2 km²", "Besucher jährlich: ca. 150.000", "Archäologie: Ruinen aus der Zeit des Zweiten Tempels", "Lage: nahe See Genezareth"],
      hu: ["Magasság: 380 m", "Kőzet: miocén mészkő", "Nemzeti Park területe: kb. 2 km²", "Éves látogatók: kb. 150.000", "Régészet: második templom kori romok", "Elhelyezkedés: Genezáreti-tó közelében"],
      ro: ["Inaltime: 380 m", "Roca: calcar miocen", "Suprafata parc national: cca 2 km²", "Vizitatori anual: cca 150.000", "Arheologie: ruine din perioada celui de-al Doilea Templu", "Langa Marea Galileii"],
      en: ["Elevation: 380 m", "Rock type: Miocene limestone", "National park area: approx. 2 km²", "Annual visitors: approx. 150,000", "Archaeology: Second Temple period ruins", "Near Sea of Galilee"],
    },
  },
  {
    id: "il-yatir-forest-nature-v2",
    type: "forest",
    parent: "IL-D",
    coords: [35.06, 31.34],
    name: { de: "Jatir-Wald", hu: "Jatir-erdő", ro: "Pădurea Yatir", en: "Yatir Forest"},
    image: "/poi-images/il-yatir-forest-nature-v2.webp",
    description: {
      de: "Der Jatir-Wald ist der größte künstlich angelegte Wald in Israel und liegt am Rande der Negev-Wüste.",
      hu: "A Jatir-erdő Izrael legnagyobb mesterségesen telepített erdeje, amely a Negev-sivatag peremén fekszik.",
      ro: "Pădurea Yatir este cea mai mare pădure plantată artificial din Israel, situată la marginea deșertului Negev.",
      en: "Yatir Forest is the largest planted forest in Israel, located on the edge of the Negev Desert."
    },
    facts: {
      de: ["Größter gepflanzter Wald", "Bollwerk gegen die Wüste", "Millionen von Bäumen", "Beherbergt ein Weingut"],
      hu: ["A legnagyobb telepített erdő", "Védvonal a sivatag ellen", "Fák milliói alkotják", "Egy borászat is található itt"],
      ro: ["Cea mai mare pădure plantată", "Barieră împotriva deșertului", "Milioane de copaci", "Găzduiește o cramă"],
      en: ["Largest planted forest", "Bulwark against the desert", "Millions of trees", "Home to a winery"]
    }, image: "/poi-images/il-yatir-forest-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Yatir-Wald ist ein aufgeforstetes Waldgebiet im nördlichen Negev in Israel, nahe der Stadt Meitar. Er wurde ab 1964 vom Jüdischen Nationalfonds (KKL) gepflanzt und bedeckt heute etwa 30 Quadratkilometer. Der Wald besteht hauptsächlich aus Kiefern (Aleppo-Kiefer) und Zypressen, die in der halbtrockenen Region angepflanzt wurden. Der Wald ist wichtig für den Bodenschutz und die Kohlenstoffbindung. Aufgrund der Lage am Rande der Wüste ist er ein einzigartiger Lebensraum für Arten wie den Negev-Küsten-Skorpion und verschiedene Vogelarten. Der Wald ist Teil eines Forschungsprojekts zur Messung von Kohlenstoffflüssen, dem Yatir Forest Eddy Flux Tower. Er wird für Erholungszwecke genutzt, mit Wanderwegen und Picknickplätzen. Jährlich besuchen etwa 200.000 Menschen den Wald.",
      hu: "A Jatir-erdő egy erdősített terület a Negev északi részén, Izraelben, Meitar városa közelében. 1964 óta ülteti a Zsidó Nemzeti Alap (KKL), ma kb. 30 négyzetkilométeren terül el. Főként aleppói fenyőből és ciprusból áll, melyeket a félszáraz éghajlaton telepítettek. Az erdő fontos szerepet játszik a talajvédelemben és a szén-dioxid megkötésében. A sivatag szélén fekszik, így egyedülálló élőhely olyan fajok számára, mint a negevi partiskorpió és különféle madarak. Az erdő része egy szén-dioxid-áramlást mérő kutatási projektnek, a Jatir Forest Eddy Flux Tower-nek. Szabadidős célokra is használják, túra- és piknikezőhelyekkel. Évente mintegy 200.000 látogató keresi fel.",
      ro: "Pădurea Yatir este o pădure reîmpădurită în nordul deșertului Negev, Israel, lângă orașul Meitar. Plantată de Fondul Național Evreiesc (KKL) începând din 1964, acoperă acum aproximativ 30 km². Este compusă în principal din pin de Alep și chiparoși, adaptați la climatul semiarid. Pădurea are un rol important în protejarea solului și sechestrarea carbonului. Aflată la marginea deșertului, este un habitat unic pentru specii precum scorpionul de coastă al Negevului și diverse păsări. Face parte dintr-un proiect de cercetare a fluxului de carbon, Turnul de Vânt Yatir. Este utilizată pentru recreere, cu trasee de drumeții și zone de picnic. Aproximativ 200.000 de vizitatori vin anual.",
      en: "Yatir Forest is a planted forest in the northern Negev of Israel, near the town of Meitar. It was established by the Jewish National Fund (KKL) in 1964 and now covers about 30 square kilometers. The forest is composed mainly of Aleppo pine and cypress trees, grown in a semi-arid environment. It plays a role in soil conservation and carbon sequestration. Located at the edge of the desert, it provides a unique habitat for species such as the Negev coastal scorpion and various birds. The forest is part of the Yatir Forest Eddy Flux Tower research project measuring carbon fluxes. It is used for recreation with hiking trails and picnic areas. Approximately 200,000 visitors come annually.",
    },
    factsAdvanced: {
      de: ["Aufforstung ab 1964", "Fläche: ca. 30 km²", "Hauptbaumarten: Aleppo-Kiefer, Zypresse", "Lage: nördlicher Negev", "Besucher jährlich: ca. 200.000", "Forschung: Kohlenstofffluss-Messung"],
      hu: ["Erdősítés kezdete: 1964", "Terület: kb. 30 km²", "Fő fafaj: aleppói fenyő, ciprus", "Elhelyezkedés: északi Negev", "Éves látogatók: kb. 200.000", "Kutatás: szén-dioxid áramlás mérése"],
      ro: ["Plantare inceputa: 1964", "Suprafata: cca 30 km²", "Specii principale: pin de Alep, chiparos", "Localizare: nordul Negevului", "Vizitatori anual: cca 200.000", "Cercetare: masurarea fluxului de carbon"],
      en: ["Afforestation started: 1964", "Area: approx. 30 km²", "Main tree species: Aleppo pine, cypress", "Location: northern Negev", "Annual visitors: approx. 200,000", "Research: carbon flux measurement"],
    },
  },
  {
    id: "il-snir-stream-nature-v2",
    type: "national-park",
    parent: "IL-Z",
    coords: [35.62, 33.22],
    name: { de: "Snir-Naturschutzgebiet", hu: "Snir Nemzeti Park", ro: "Rezervația Snir", en: "Snir Stream Nature Reserve"},
    image: "/poi-images/il-snir-stream-nature-v2.webp",
    description: {
      de: "Der Snir-Bach (Hasbani) bietet das ganze Jahr über fließendes Wasser und ist von dichten, dschungelartigen Wäldern umgeben.",
      hu: "A Snir-patak (Hasbani) egész évben bővizű, és sűrű, dzsungelszerű erdők veszik körül az északi országrészben.",
      ro: "Pârâul Snir (Hasbani) are apă curgătoare pe tot parcursul anului și este înconjurat de păduri dense, asemănătoare unei jungle.",
      en: "The Snir Stream (Hasbani) features flowing water year-round and is surrounded by dense, jungle-like forests."
    },
    facts: {
      de: ["Längster Quellfluss des Jordan", "Dichte Ufervegetation", "Ganzjährig fließendes Wasser", "Wanderwege durchs Wasser"],
      hu: ["A Jordán leghosszabb forrásága", "Sűrű parti növényzet", "Egész évben folyó víz", "A vízben haladó túraútvonalak"],
      ro: ["Cel mai lung afluent al Iordanului", "Vegetație riverană densă", "Apă curgătoare tot anul", "Trasee de drumeție prin apă"],
      en: ["Longest source of the Jordan River", "Dense riparian vegetation", "Year-round flowing water", "Hiking trails through the water"]
    }, image: "/poi-images/il-snir-stream-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Snir-Bach (hebräisch Nachal Snir) ist einer der Hauptzuflüsse des Jordans, der an den Hängen des Hermongebirges entspringt. Der Bach ist etwa 30 km lang und fließt durch die Golanhöhen. Er ist ein wichtiger Süßwasserlieferant für den See Genezareth. Das Snir-Bach Naturreservat wurde 1974 gegründet und erstreckt sich über etwa 3 Quadratkilometer. Es umfasst dichte Auwälder aus Platanen und Weiden. Die Region ist bekannt für ihre reiche Vogelwelt, darunter der Schwarzstorch und der Eisvogel. Im Frühling blühen zahlreiche Wildblumen. Der Bach ist ein beliebtes Ziel für Wanderungen und Picknicks. Jährlich besuchen rund 300.000 Menschen das Reservat.",
      hu: "A Snir-patak (héberül Nachal Snir) a Jordán egyik fő mellékfolyója, amely a Hermon-hegység lejtőin ered. Hossza kb. 30 km, és a Golán-fennsíkon keresztül folyik. Fontos édesvízforrás a Genezáreti-tó számára. A Snir-patak Természetvédelmi Területet 1974-ben hozták létre, területe kb. 3 négyzetkilométer. Sűrű ártéri erdők jellemzik, platánokkal és fűzfákkal. A régió gazdag madárvilággal rendelkezik, például fekete gólyák és jégmadarak élnek itt. Tavasszal számos vadvirág nyílik. A patak népszerű túra- és piknikezőhely. Évente mintegy 300.000 látogató keresi fel.",
      ro: "Pârâul Snir (ebraică Nachal Snir) este unul dintre principalii afluenți ai Iordanului, care izvorăște pe versanții Muntelui Hermon. Are aproximativ 30 km lungime și curge prin Înălțimile Golan. Este o sursă importantă de apă dulce pentru Marea Galileii. Rezervația Naturală Snir Stream a fost înființată în 1974 și se întinde pe circa 3 km². Cuprinde păduri de luncă dense, cu platani și sălcii. Zona este cunoscută pentru bogăția avifaunei, inclusiv barză neagră și pescăruș albastru. Primăvara înfloresc numeroase flori sălbatice. Pârâul este o destinație populară pentru drumeții și picnicuri. Aproximativ 300.000 de vizitatori anual.",
      en: "The Snir Stream (Hebrew: Nachal Snir) is a major tributary of the Jordan River, originating on the slopes of Mount Hermon. It is approximately 30 km long and flows through the Golan Heights. It is a significant freshwater source for the Sea of Galilee. The Snir Stream Nature Reserve was established in 1974 and covers about 3 square kilometers. It features dense riparian forests of plane trees and willows. The area is noted for its birdlife, including black storks and kingfishers. In spring, wildflowers bloom abundantly. The stream is a popular spot for hiking and picnics. Around 300,000 visitors come annually.",
    },
    factsAdvanced: {
      de: ["Länge: ca. 30 km", "Quelle: Hermon-Gebirge", "Mündung: Jordan", "Schutzgebietsgründung: 1974", "Fläche des Reservats: ca. 3 km²", "Jährliche Besucher: ca. 300.000"],
      hu: ["Hossz: kb. 30 km", "Eredet: Hermon-hegység", "Torkolat: Jordán", "Védett terület alapítása: 1974", "Terület: kb. 3 km²", "Éves látogatók: kb. 300.000"],
      ro: ["Lungime: cca 30 km", "Izvor: Muntele Hermon", "Varsare: raul Iordan", "Infinitare rezervatie: 1974", "Suprafata rezervatie: cca 3 km²", "Vizitatori anual: cca 300.000"],
      en: ["Length: approx. 30 km", "Source: Mount Hermon", "Mouth: Jordan River", "Reserve established: 1974", "Reserve area: approx. 3 km²", "Annual visitors: approx. 300,000"],
    },
  },
  {
    id: "il-lake-ram-nature-v2",
    type: "lake",
    parent: "IL-Z",
    coords: [35.76, 33.23],
    name: { de: "Ram-See", hu: "Ram-tó", ro: "Lacul Ram", en: "Lake Ram"},
    image: "/poi-images/il-lake-ram-nature-v2.webp",
    description: {
      de: "Der Ram-See ist ein malerischer Kratersee vulkanischen Ursprungs in den nördlichen Golanhöhen, umgeben von Obstgärten.",
      hu: "A Ram-tó egy festői vulkáni krátertó a Golán-fennsík északi részén, amelyet gyümölcsöskertek öveznek.",
      ro: "Lacul Ram este un lac de crater pitoresc, de origine vulcanică, în nordul Înălțimilor Golan, înconjurat de livezi.",
      en: "Lake Ram is a picturesque volcanic crater lake in the northern Golan Heights, surrounded by orchards."
    },
    facts: {
      de: ["Vulkanischer Kratersee", "Liegt in den Golanhöhen", "Von Apfelplantagen umgeben", "Kein natürlicher Abfluss"],
      hu: ["Vulkáni krátertó", "A Golán-fennsíkon fekszik", "Almaültetvények veszik körül", "Nincs természetes lefolyása"],
      ro: ["Lac de crater vulcanic", "Situat în Înălțimile Golan", "Înconjurat de livezi de meri", "Fără scurgere naturală"],
      en: ["Volcanic crater lake", "Located in the Golan Heights", "Surrounded by apple orchards", "No natural outlet"]
    }, image: "/poi-images/il-lake-ram-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Ram-See (hebräisch Agam Ram) ist ein kleiner Kratersee im Norden Israels, am Fuße des Berges Ram auf den Golanhöhen. Der See liegt in einem Maarkrater, der durch vulkanische Aktivität entstanden ist. Der See hat eine Fläche von etwa 3,5 Hektar und eine maximale Tiefe von 6 Metern. Das Wasser des Sees ist sauerstoffarm, beherbergt aber eine einzigartige Mikrofauna. Der See ist von Vulkanitgestein und mediterraner Macchia umgeben. Das Naturreservat Ram Lake wurde 1971 ausgewiesen. Das Gebiet ist ein wichtiger Rastplatz für Zugvögel. Der Ram-See ist auch ein beliebter Ort zum Picknicken und Wandern. Die durchschnittliche Wassertemperatur beträgt im Sommer 25°C.",
      hu: "A Ram-tó (héberül Agam Ram) egy kis krátertó Izrael északi részén, a Ram-hegy lábánál, a Golán-fennsíkon. A tó vulkanikus tevékenység következtében kialakult maar-kráterben fekszik. Területe kb. 3,5 hektár, maximális mélysége 6 méter. Vize oxigénszegény, de egyedi mikrofaunának ad otthont. A tavat vulkanikus kőzetek és mediterrán macchia veszi körül. A Ram-tó Természetvédelmi Területet 1971-ben hozták létre. A terület fontos pihenőhely a vonuló madarak számára. A tó népszerű piknikező és túrázóhely. Nyáron az átlagos vízhőmérséklet 25°C.",
      ro: "Lacul Ram (ebraică Agam Ram) este un mic lac de crater în nordul Israelului, la poalele Muntelui Ram în Înălțimile Golan. Lacul se află într-un maar format prin activitate vulcanică. Are o suprafață de aproximativ 3,5 hectare și o adâncime maximă de 6 metri. Apa este săracă în oxigen, dar găzduiește o microfaună unică. Lacul este înconjurat de roci vulcanice și maki mediteranean. Rezervația Naturală Lacul Ram a fost declarată în 1971. Zona este un important loc de popas pentru păsările migratoare. Lacul este popular pentru picnicuri și drumeții. Temperatura medie a apei vara este de 25°C.",
      en: "Lake Ram (Hebrew: Agam Ram) is a small crater lake in northern Israel, at the foot of Mount Ram on the Golan Heights. The lake sits in a maar crater formed by volcanic activity. It covers about 3.5 hectares with a maximum depth of 6 meters. The water is oxygen-poor but hosts a unique microfauna. The lake is surrounded by volcanic rocks and Mediterranean maquis. The Lake Ram Nature Reserve was established in 1971. The area is an important stopover for migratory birds. Lake Ram is a popular spot for picnicking and hiking. Summer average water temperature is 25°C.",
    },
    factsAdvanced: {
      de: ["Typ: Maarkratersee", "Fläche: ca. 3,5 ha", "Maximale Tiefe: 6 m", "Schutzgebietsausweisung: 1971", "Lage: Golánhöhen", "Sommerwassertemperatur: 25°C"],
      hu: ["Típus: maar-krátertó", "Terület: kb. 3,5 hektár", "Maximális mélység: 6 m", "Védetté nyilvánítás: 1971", "Elhelyezkedés: Golán-fennsík", "Nyári vízhőmérséklet: 25°C"],
      ro: ["Tip: lac de crater maar", "Suprafata: cca 3,5 ha", "Adancime maxima: 6 m", "Declarare rezervatie: 1971", "Locatie: Inaltimile Golan", "Temperatura apei vara: 25°C"],
      en: ["Type: maar crater lake", "Area: approx. 3.5 ha", "Maximum depth: 6 m", "Reserve declared: 1971", "Location: Golan Heights", "Summer water temperature: 25°C"],
    },
  },
  {
    id: "il-mount-gilboa-nature-v2",
    type: "mountain",
    parent: "IL-Z",
    coords: [35.41, 32.53],
    name: { de: "Gilboa-Gebirge", hu: "Gilboa-hegy", ro: "Muntele Gilboa", en: "Mount Gilboa"},
    image: "/poi-images/il-mount-gilboa-nature-v2.webp",
    description: {
      de: "Das Gilboa-Gebirge ist ein Höhenzug, der das Jesreeletal überblickt und im Frühling für seine prächtige Schwertlilienblüte bekannt ist.",
      hu: "A Gilboa-hegység a Jezréel-völgy fölé magasodik, és tavasszal a látványos nősziromvirágzásáról nevezetes.",
      ro: "Muntele Gilboa este o creastă care domină Valea Izreel și este cunoscut primăvara pentru înflorirea magnifică a irișilor.",
      en: "Mount Gilboa is a ridge overlooking the Jezreel Valley, famous in the spring for its magnificent iris blossoms."
    },
    facts: {
      de: ["Berühmte Irisblüte im Frühling", "Schauplatz biblischer Schlachten", "Blick auf das Jesreeletal", "Beliebte Panoramastraße"],
      hu: ["Híres tavaszi nősziromvirágzás", "Bibliai csaták helyszíne", "Kilátás a Jezréel-völgyre", "Népszerű panorámaút"],
      ro: ["Înflorirea faimoasă a irișilor", "Locul unor bătălii biblice", "Vedere spre Valea Izreel", "Drum panoramic popular"],
      en: ["Famous iris blossom in spring", "Site of biblical battles", "Overlooks the Jezreel Valley", "Popular scenic route"]
    }, image: "/poi-images/il-mount-gilboa-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Berg Gilboa (hebräisch Har HaGilboa) ist ein Gebirgszug im Nordosten Israels, südlich der Jesreel-Ebene. Der höchste Gipfel ist der Höhenzug mit 497 m. Das Gebirge besteht aus Kalkstein und Kreide. Bekannt ist der Gilboa für seine endemische Flora, insbesondere die Gilboa-Schwertlilie (Iris haynei), die nur hier wächst. Auf dem Gebirge liegen mehrere archäologische Stätten, darunter die Ruinen der antiken Stadt Beth-Schean. In der Bibel wird der Gilboa als Ort der Schlacht erwähnt, in der König Saul fiel. Der Nationalpark Gilboa umfasst etwa 30 Quadratkilometer und ist ein beliebtes Wandergebiet. Der Berg bietet einen weiten Blick über die Jesreel-Ebene und das Jordantal.",
      hu: "A Gilboa-hegy (héberül Har HaGilboa) egy hegyvonulat Izrael északkeleti részén, a Jezréel-síkságtól délre. Legmagasabb csúcsa 497 m. A hegység mészkőből és krétából áll. Híres endemikus növényvilágáról, különösen a Gilboa-nősziromról (Iris haynei), amely kizárólag itt nő. A hegyen több régészeti lelőhely található, köztük Bet-Sean ókori város romjai. A Bibliában a Gilboa Saul király halálának helyszíne. A Gilboa Nemzeti Park kb. 30 négyzetkilométeren terül el, népszerű túrázóhely. A hegyről kilátás nyílik a Jezréel-síkságra és a Jordán-völgyre.",
      ro: "Muntele Gilboa (ebraică Har HaGilboa) este un lanț muntos în nord-estul Israelului, la sud de Câmpia Jezreel. Cel mai înalt vârf atinge 497 m. Munții sunt formați din calcar și cretă. Sunt cunoscuți pentru flora endemică, în special stânjenelul Gilboa (Iris haynei), care crește doar aici. Pe munte se află situri arheologice, inclusiv ruinele orașului antic Beit She'an. În Biblie, Gilboa este menționat ca locul bătăliei în care a murit regele Saul. Parcul Național Gilboa se întinde pe aproximativ 30 km² și este o zonă populară pentru drumeții. Muntele oferă o panoramă a Câmpiei Jezreel și a Văii Iordanului.",
      en: "Mount Gilboa (Hebrew: Har HaGilboa) is a mountain range in northeastern Israel, south of the Jezreel Valley. Its highest peak is at 497 m. The mountains are composed of limestone and chalk. They are known for endemic flora, particularly the Gilboa iris (Iris haynei) that grows only there. Several archaeological sites exist, including ruins of the ancient city of Beit She'an. In the Bible, Gilboa is the site of the battle where King Saul fell. Gilboa National Park covers about 30 square kilometers and is popular for hiking. The mountain offers views of the Jezreel Valley and the Jordan Valley.",
    },
    factsAdvanced: {
      de: ["Höchster Gipfel: 497 m", "Gestein: Kalkstein, Kreide", "Endemische Art: Gilboa-Schwertlilie", "Nationalparkfläche: ca. 30 km²", "Biblischer Ort: Schlacht Sauls", "Lage: südlich der Jesreel-Ebene"],
      hu: ["Legmagasabb csúcs: 497 m", "Kőzet: mészkő, kréta", "Endemikus faj: Gilboa-nőszirom", "Nemzeti Park területe: kb. 30 km²", "Bibliai hely: Saúl király csatája", "Jezréel-síkságtól délre"],
      ro: ["Cel mai inalt varf: 497 m", "Roca: calcar, creta", "Specie endemica: stânjenel Gilboa", "Suprafata parc national: cca 30 km²", "Loc biblic: batalia regelui Saul", "Sudul Campiei Jezreel"],
      en: ["Highest peak: 497 m", "Rock type: limestone, chalk", "Endemic species: Gilboa iris", "National park area: approx. 30 km²", "Biblical site: King Saul's battle", "South of Jezreel Valley"],
    },
  },
  {
    id: "il-ben-shemen-forest-nature-v2",
    type: "forest",
    parent: "IL-M",
    coords: [34.95, 31.95],
    name: { de: "Ben-Schemen-Wald", hu: "Ben Semen-erdő", ro: "Pădurea Ben Shemen", en: "Ben Shemen Forest"},
    image: "/poi-images/il-ben-shemen-forest-nature-v2.webp",
    description: {
      de: "Der Ben-Schemen-Wald ist einer der größten Wälder Zentralisraels und bietet eine grüne Lunge mit zahlreichen archäologischen Stätten.",
      hu: "A Ben Semen-erdő Közép-Izrael egyik legnagyobb erdeje, amely zöld tüdőként szolgál és számos régészeti lelőhelyet rejt.",
      ro: "Pădurea Ben Shemen este una dintre cele mai mari păduri din centrul Israelului, oferind un plămân verde cu numeroase situri arheologice.",
      en: "Ben Shemen Forest is one of the largest forests in central Israel, providing a green lung with numerous archaeological sites."
    },
    facts: {
      de: ["Grüne Lunge Zentralisraels", "Zahlreiche Radwege", "Beherbergt antike Gräber", "Sehr beliebt an Wochenenden"],
      hu: ["Közép-Izrael zöld tüdeje", "Számos kerékpárút", "Ókori sírokat rejt", "Hétvégén nagyon népszerű"],
      ro: ["Plămânul verde al centrului Israelului", "Numeroase piste de biciclete", "Găzduiește morminte antice", "Foarte populară la sfârșit de săptămână"],
      en: ["Green lung of central Israel", "Numerous cycling trails", "Houses ancient tombs", "Very popular on weekends"]
    }, image: "/poi-images/il-ben-shemen-forest-nature-v2.webp",
    descriptionAdvanced: {
      de: "Der Ben-Shemen-Wald (hebräisch: יער בן שמן) ist ein 7.000 Hektar großer, vom Jüdischen Nationalfonds aufgeforsteter Wald im zentralen Israel. Er liegt östlich von Modi'in und südlich von Lod. Der Wald wurde in den 1920er Jahren begonnen und ist ein bedeutendes Beispiel für die Wiederaufforstung in einer semi-ariden Region. Er umfasst Kiefern-, Zypressen- und Eukalyptusbestände. Im Wald befindet sich das Ben-Shemen-Forstzentrum sowie mehrere archäologische Stätten, darunter eine byzantinische Kirche.",
      hu: "A Ben-Semen-erdő Izrael középső részén, a tengerparti síkságon elterülő erdősített terület. Területe körülbelül 70 négyzetkilométer. Az erdősítést a Zsidó Nemzeti Alap végezte az 1920-as években. Az erdőben található a Ben-Semen erdészeti központ, valamint számos régészeti lelőhely, például egy bizánci templom maradványai. A terület fontos szerepet játszik a talajerózió megakadályozásában és a biodiverzitás fenntartásában. A főbb fafajok: aleppói fenyő, ciprus és eukaliptusz.",
      ro: "Pădurea Ben Shemen (în ebraică: יער בן שמן) este o pădure plantată de Fondul Național Evreiesc, situată în centrul Israelului, cu o suprafață de aproximativ 7.000 de hectare. Plantarea a început în anii 1920. Pădurea include specii de pin, chiparos și eucalipt. În interior se găsește Centrul Forestier Ben Shemen și situri arheologice, inclusiv o biserică bizantină. Este o zonă importantă pentru recreere și conservare.",
      en: "Ben Shemen Forest is a large afforested area in central Israel, covering about 7,000 hectares. Planted by the Jewish National Fund starting in the 1920s, it is one of the earliest large-scale afforestation projects in the region. The forest consists mainly of Aleppo pine, cypress, and eucalyptus. It hosts the Ben Shemen Forest Center and several archaeological sites, including a Byzantine church. The forest plays a crucial role in preventing soil erosion and providing a green lung for the nearby urban areas.",
    },
    factsAdvanced: {
      de: ["Fläche: 7.000 Hektar.", "Gründung der Aufforstung: 1924.", "Höchste Erhebung: ca. 150 m über dem Meeresspiegel.", "Jährliche Niederschlagsmenge: ca. 500 mm.", "Anzahl der Besucher pro Jahr: über 500.000.", "Alter der ältesten Bäume: über 80 Jahre."],
      hu: ["Terület: 70 km².", "Az erdősítés kezdete: 1924.", "Legmagasabb pont: 150 m tengerszint felett.", "Éves csapadék: 500 mm.", "Látogatók száma évente: 500.000.", "Legidősebb fák: 80 évesek."],
      ro: ["Suprafață: 7.000 ha.", "Începutul plantării: 1924.", "Altitudinea maximă: 150 m.", "Precipitații anuale: 500 mm.", "Vizitatori pe an: peste 500.000.", "Cei mai bătrâni arbori: peste 80 de ani."],
      en: ["Area: 7,000 hectares.", "Afforestation started: 1924.", "Maximum elevation: 150 meters.", "Annual rainfall: 500 mm.", "Annual visitors: over 500,000.", "Oldest trees: over 80 years."],
    },
  },
  {
    id: "il-alexander-river-nature-v2",
    type: "river",
    parent: "IL-M",
    coords: [34.87, 32.39],
    name: { de: "Alexander-Fluss", hu: "Alexander folyó", ro: "Râul Alexander", en: "Alexander River"},
    image: "/poi-images/il-alexander-river-nature-v2.webp",
    description: {
      de: "Der Alexander-Fluss fließt in die Mittelmeerküste und ist besonders bekannt für seine Population von afrikanischen Weichschildkröten.",
      hu: "Az Alexander folyó a Földközi-tengerbe torkollik, és különösen az itt élő afrikai lágyhéjú teknősök populációjáról ismert.",
      ro: "Râul Alexander se varsă în coasta mediteraneană și este cunoscut în special pentru populația sa de broaște țestoase africane cu carapace moale.",
      en: "The Alexander River flows into the Mediterranean coast and is especially known for its population of African softshell turtles."
    },
    facts: {
      de: ["Heimat von Weichschildkröten", "Mündet ins Mittelmeer", "Erfolgreich gereinigt", "Schöne Uferparks"],
      hu: ["Lágyhéjú teknősök otthona", "A Földközi-tengerbe ömlik", "Sikeresen megtisztított folyó", "Szép parti parkok"],
      ro: ["Casa broaștelor țestoase cu carapace moale", "Se varsă în Marea Mediterană", "Râu curățat cu succes", "Parcuri riverane frumoase"],
      en: ["Home to softshell turtles", "Empties into the Mediterranean Sea", "Successfully cleaned river", "Beautiful riverside parks"]
    },
    descriptionAdvanced: {
      de: "Der Alexanderfluss (hebräisch: נחל אלכסנדר) ist ein 45 km langer Küstenfluss im zentralen Israel, der in die Mittelmeer mündet. Sein Einzugsgebiet umfasst etwa 700 km². Der Fluss entspringt in der Nähe von Ariel im Westjordanland und fließt durch die Scharonebene. In den 1990er Jahren wurde ein Renaturierungsprojekt gestartet, um die durch Abwasser und Industrie verursachte Verschmutzung zu beseitigen. Heute ist der Unterlauf ein Naturschutzgebiet mit Schildkröten und Wasservögeln. Der Fluss ist nach Alexander dem Großen benannt.",
      hu: "Az Alexander-folyó (héberül: נחל אלכסנדר) egy 45 km hosszú parti folyó Izrael középső részén, amely a Földközi-tengerbe ömlik. Vízgyűjtő területe körülbelül 700 km². A folyó az arab települések és a Saron-síkság közelében folyik. A 20. század végén szennyezett volt, de egy helyreállítási projektnek köszönhetően mára tiszta. A torkolatánál természetvédelmi terület található. Nevét Nagy Sándorról kapta.",
      ro: "Râul Alexander (în ebraică: נחל אלכסנדר) este un râu de coastă de 45 km lungime în centrul Israelului, care se varsă în Marea Mediterană. Bazinul său hidrografic are aproximativ 700 km². Izvorăște lângă Ariel și traversează Câmpia Sharon. În anii 1990 a fost lansat un proiect de reabilitare pentru a elimina poluarea. Astăzi, cursul inferior este o rezervație naturală, habitat pentru broaște țestoase și păsări acvatice. Numele provine de la Alexandru cel Mare.",
      en: "The Alexander River (Hebrew: נחל אלכסנדר) is a 45 km coastal river in central Israel, flowing into the Mediterranean Sea. Its watershed covers about 700 km². The river originates near Ariel and passes through the Sharon Plain. In the 1990s, a major restoration project was undertaken to clean up pollution from sewage and industry. Today, the lower reaches are a nature reserve hosting turtles and waterfowl. The river is named after Alexander the Great.",
    },
    factsAdvanced: {
      de: ["Länge: 45 km.", "Einzugsgebiet: 700 km².", "Mündung: Mittelmeer.", "Renaturierungsbeginn: 1993.", "Größte Breite: bis zu 10 m.", "Tierarten: über 200 Vogelarten."],
      hu: ["Hossz: 45 km.", "Vízgyűjtő terület: 700 km².", "Torkolat: Földközi-tenger.", "Helyreállítás kezdete: 1993.", "Legnagyobb szélesség: 10 m.", "Madárfajok száma: több mint 200."],
      ro: ["Lungime: 45 km.", "Bazin hidrografic: 700 km².", "Vărsare: Marea Mediterană.", "Început restaurare: 1993.", "Lățime maximă: 10 m.", "Specii de păsări: peste 200."],
      en: ["Length: 45 km.", "Watershed: 700 km².", "Mouth: Mediterranean Sea.", "Restoration started: 1993.", "Maximum width: 10 meters.", "Bird species: over 200."],
    },
  }
];
