// @ts-nocheck

import type { POI } from "./poi";

export const poiExtraAustriaNature: POI[] = [
  {
    id: "nature-nationalpark-kalkalpen-extra",
    type: "nature",
    parent: "AT-4",
    coords: [14.40, 47.80],
    name: { de: "Nationalpark Kalkalpen", hu: "Kalkalpen Nemzeti Park", ro: "Parcul Național Kalkalpen", en: "Kalkalpen National Park" },
    description: {
      de: "Österreichs größtes Waldschutzgebiet, bekannt für seine alten Buchenwälder (UNESCO-Welterbe) und die unberührte Berglandschaft.",
      hu: "Ausztria legnagyobb erdővédelmi területe, amely öreg bükkerdőiről (UNESCO Világörökség) és érintetlen hegyvidéki tájáról ismert.",
      ro: "Cea mai mare zonă de protecție a pădurilor din Austria, cunoscută pentru pădurile sale vechi de fag (Patrimoniul Mondial UNESCO) și peisajul montan neatins.",
      en: "Austria's largest forest protection area, known for its old beech forests (UNESCO World Heritage) and untouched mountain landscape."
    },
    facts: {
      de: ["Heimat von Luchsen, Bären und Adlern.", "Über 200 km Wanderwege.", "Die Buchenwälder gehören zum UNESCO-Weltnaturerbe 'Buchenurwälder der Karpaten'."],
      hu: ["Hiúzok, medvék és sasok otthona.", "Több mint 200 km túraútvonal.", "A bükkerdők a 'Kárpátok ősi bükkösei' UNESCO Világörökség részét képezik."],
      ro: ["Habitat pentru râși, urși și vulturi.", "Peste 200 km de trasee de drumeții.", "Pădurile de fag fac parte din Patrimoniul Natural Mondial UNESCO 'Pădurile primare de fag din Carpați'."],
      en: ["Home to lynxes, bears, and eagles.", "Over 200 km of hiking trails.", "The beech forests are part of the UNESCO World Natural Heritage 'Ancient and Primeval Beech Forests of the Carpathians'."]
    },
    descriptionAdvanced: {
      de: "Der Nationalpark Kalkalpen in Oberösterreich bewahrt das größte zusammenhängende Waldgebiet Österreichs und stellt ein beeindruckendes Refugium unberührter Natur dar. Die Region ist geprägt durch dichte, alte Buchenwälder, tiefe Schluchten, klare Bergbäche und versteckte Höhlensysteme. Ein großer Teil dieser Wälder wurde wegen ihrer Ursprünglichkeit in das UNESCO-Weltnaturerbe aufgenommen, was die ökologische Bedeutung des Gebiets unterstreicht. Ohne menschliche Eingriffe dürfen sich Flora und Fauna hier frei entfalten, weshalb seltene Tierarten wie der Luchs, der Braunbär und der Steinadler wieder eine Heimat gefunden haben. Für Naturliebhaber bietet der Park ein weitläufiges Netz an Wander- und Radwegen sowie geführte Ranger-Touren, die tiefe Einblicke in dieses wilde Ökosystem gewähren. Geografie K7 — Ökosystem Wald und Naturschutz.",
      hu: "A Kalkalpen Nemzeti Park Felső-Ausztriában, a Sengsengebirge és a Reichraminger Hintergebirge lenyűgöző hegyvonulatai között terül el. Ez Ausztria legnagyobb egybefüggő erdőterülete, ahol a természet emberi beavatkozás nélkül térhet vissza ősi, vadon állapotába. A park különlegessége a hihetetlen biológiai sokféleség, rengeteg barlanggal, szurdokkal és rejtett patakvölggyel. A védett területeken ismét megjelentek olyan ritka ragadozók, mint a hiúz, és az itt fészkelő szirtisas-állomány is növekedésnek indult. Az öreg bükkösök egy része 2017 óta az UNESCO Világörökség listáján is szerepel. Biológia K6 – érintetlen erdő-ökoszisztémák és természetvédelem.",
      ro: "Parcul Național Kalkalpen (Alpii Calcaroși) protejează cea mai extinsă și frumoasă regiune împădurită din întreaga Austrie Superioară. Fiind așezat în mijlocul peisajului muntos format din lanțurile Sengsengebirge și Reichraminger Hintergebirge, acesta cuprinde vaste și magnifice canioane abrupte, un număr considerabil de ape izolate și curgătoare, peșteri montane de neexplorat și suprafețe bogate de molid pur, brad și fag antic, unele dintre ele fiind catalogate recent de UNESCO drept zone neatinse, de importanță primară (păduri primare). O astfel de oază incredibilă a readus la viață numeroase specii de animale pe cale de dispariție pe teritoriul austriac, printre care celebrul și agilul râs alpin.",
      en: "Kalkalpen National Park in Upper Austria comprises the largest contiguous forest area in the Alps and Austria's largest forest protection area. The park consists of the Reichraminger Hintergebirge and Sengsengebirge mountain ranges. Its special feature is the vast, undisturbed forest where nature can develop freely. The park is home to Austria's largest ancient beech forests, a UNESCO World Heritage site since 2017. This wilderness is extremely rich in wildlife: in addition to reintroduced lynxes, bears, eagles, and numerous rare bird species live here. The park is crossed by more than 200 kilometers of marked hiking trails. Biology Grade 8 - Wilderness Conservation."
    },
    factsAdvanced: {
      de: [
        "Etwa vier Fünftel der Nationalparkfläche sind von dichten Wäldern bedeckt.",
        "Das Gebiet beheimatet mit rund 1.500 Schmetterlingsarten eine außergewöhnliche Insektenvielfalt.",
        "Aufgrund der strengen Schutzbestimmungen werden umgestürzte Bäume bewusst im Wald belassen, um Lebensraum für Mikroorganismen zu schaffen.",
        "Der Wurbauerkogel bietet als markanter Aussichtspunkt einen spektakulären Panoramablick über das gesamte Gebiet."
      ],
      hu: [
        "A Kalkalpen Nemzeti Park Ausztria legnagyobb érintetlen, egybefüggő erdeje.",
        "A park öreg bükkerdeinek egy része az UNESCO Világörökség részét képezi.",
        "Sikerrel telepítettek vissza olyan csúcsragadozókat a területre, mint a ritka hiúz.",
        "Több mint 800 különböző forrás, búvópatak és számtalan mészkőbarlang található itt."
      ],
      ro: ["Parcul conservă cea mai extinsă zonă forestieră neîntreruptă de pe teritoriul Austriei, faimoasă pentru frumusețea sa solitară.", "Anumite părți spectaculoase din faimoasele sale păduri străvechi de fag sunt oficial recunoscute ca parte a Patrimoniului Mondial UNESCO.", "Aceste zone protejează uimitor și cu succes un uimitor sistem masiv de peșteri adânci, întinzându-se pe o lungime extinsă.", "Specii foarte rare la nivel național, inclusiv falnicul râs eurasiatic și impresionantul acvilă de stâncă, prosperă extrem de bine aici."],
      en: [
        "The national park covers an area of over 20,850 hectares.",
        "81% of the park is covered by forest, making it the most forested national park in Austria.",
        "There are over 30 different forest communities in the area.",
        "Lynxes were successfully reintroduced in the 2010s.",
        "There are over 800 springs in the park that provide high-quality drinking water.",
        "The 'Wurbauerkogel' observation tower offers a breathtaking panorama of the park.",
        "Over 1,000 different butterfly species live in the park.",
        "In winter, the park also organizes snowshoe tours and wildlife watching programs."
      ]
    }, image: "/poi-images/nature-nationalpark-kalkalpen-extra.webp"},
  {
    id: "lake-attersee-extra",
    type: "lake",
    parent: "AT-4",
    coords: [13.54, 47.86],
    name: { de: "Attersee", hu: "Attersee", ro: "Lacul Attersee", en: "Lake Attersee" },
    description: {
      de: "Der größte zur Gänze in Österreich liegende See, bekannt für sein türkisfarbenes, klares Wasser und als beliebtes Segel- und Tauchrevier.",
      hu: "A legnagyobb, teljes egészében Ausztriában fekvő tó, amely türkizkék, tiszta vizéről, valamint népszerű vitorlás- és búvárterületként ismert.",
      ro: "Cel mai mare lac situat în întregime în Austria, cunoscut pentru apa sa turcoaz, limpede și ca o zonă populară pentru navigație și scufundări.",
      en: "The largest lake located entirely in Austria, known for its turquoise, clear water and as a popular sailing and diving area."
    },
    facts: {
      de: ["Inspirierte den Komponisten Gustav Mahler.", "Pfahlbauten am See sind Teil des UNESCO-Welterbes.", "Das Wasser ist so klar, dass die Sichtweite bis zu 25 Meter beträgt."],
      hu: ["Gustav Mahler zeneszerzőt is megihlette.", "A tónál található cölöpházak az UNESCO Világörökség részét képezik.", "A víz annyira tiszta, hogy a látótávolság akár 25 méter is lehet."],
      ro: ["A inspirat compozitorul Gustav Mahler.", "Așezările lacustre de pe malul lacului fac parte din Patrimoniul Mondial UNESCO.", "Apa este atât de limpede încât vizibilitatea ajunge până la 25 de metri."],
      en: ["Inspired the composer Gustav Mahler.", "Pile dwellings on the lake are part of the UNESCO World Heritage.", "The water is so clear that visibility is up to 25 meters."]
    },
    descriptionAdvanced: {
      de: "Der Attersee, als größter vollständig in Österreich liegender See, ist das smaragdgrüne Juwel des Salzkammerguts. Eingebettet in eine spektakuläre Bergkulisse des Höllengebirges fasziniert der See nicht nur durch seine schiere Größe, sondern auch durch eine herausragende Wasserqualität, die ihn zu einem Mekka für Segler und Taucher macht. Bereits um die Jahrhundertwende zog das milde Klima und das charakteristische Licht zahlreiche Künstler an, darunter den Maler Gustav Klimt, der viele seiner berühmten Landschaftsgemälde am Attersee schuf. Unter der Wasseroberfläche ruhen die prähistorischen Pfahlbauten, die zum UNESCO-Weltkulturerbe zählen und wichtige Einblicke in frühe menschliche Siedlungsformen geben. Rund um den See laden gepflegte Strandbäder und Promenaden zum Entspannen ein. Sachkunde K5 — Gewässer und historische Siedlungsformen.",
      hu: "Az Attersee a Salzkammergut egyik legimpozánsabb természeti kincse, egyben Ausztria legnagyobb teljes egészében az ország területén fekvő tava. A tó vizének különleges, mélykék és türkizzöld színe, valamint ivóvíz-minőségű tisztasága évszázadok óta vonzza a művészeket, köztük Gustav Klimtet, aki számos nyarat töltött itt, és lenyűgöző tájképeket festett a tóparton. Az Attersee nemcsak a fürdőzők és a vitorlázók, hanem a búvárok körében is legendás célpont a kristálytiszta vízben rejlő látótávolság és a víz alatti sziklafalak miatt. A tó déli partját a Höllengebirge (Pokol-hegység) drámai sziklafalai szegélyezik. Földrajz K5 – glaciális tavak és édesvízi ökoszisztémák.",
      ro: "Attersee, cel mai extins lac situat în întregime pe teritoriul Austriei, este mândria turcoaz a renumitei regiuni Salzkammergut. Acest uriaș și spectaculos corp de apă se distinge la prima vedere printr-o culoare radiantă acvamarină incredibilă, ce reiese firesc din topirea gheaței străvechi preistorice și puritatea inestimabilă a apelor potabile alpine. În mod absolut uimitor, condițiile unice ale aerului au influențat constant zeci de artiști vizionari de-a lungul deceniilor trecute, printre care și celebrul Gustav Klimt, care și-a pictat aici unele dintre renumitele portrete peisagistice fermecătoare. Rămâne una din cele mai excepționale suprafețe austriece de explorare de elită cu bărci, iahturi sau chiar scuba-diving.",
      en: "Lake Attersee, the largest lake in the Salzkammergut lake district, is a true natural treasure in Upper Austria. The impressive size of the lake and the dramatic view of the surrounding Höllengebirge and Schafberg mountain ranges captivate everyone. The lake's water is legendarily clear, with drinking water quality, and its color varies from turquoise to deep green. This special 'Attersee green' color has inspired painters, including Gustav Klimt. The lake is popular for sailing and diving. The remains of prehistoric pile dwellings on the lake shore are part of the UNESCO World Heritage. Around the lake are numerous charming resort villages. Geography Grade 7 - Glacial Lakes."
    },
    factsAdvanced: {
      de: [
        "Mit einer maximalen Tiefe von 169 Metern ist der See ein ideales Gebiet für anspruchsvolles technisches Tauchen.",
        "Die berühmte 'Rosenwind'-Thermik macht den See in den Sommermonaten zu einem der verlässlichsten Segelreviere Österreichs.",
        "Der Klimt-Themenweg am Nordufer beleuchtet die Sommeraufenthalte des Künstlers mit informativen Schautafeln.",
        "Aufgrund der exzellenten Sichttiefen unter Wasser wird der See auch von Unterwasserarchäologen stark frequentiert."
      ],
      hu: [
        "Az Attersee Ausztria legnagyobb felületű, teljesen az országban található tava.",
        "A tiszta vize nyáron is hűsítő, és gyakran eléri az ivóvíz-minőséget.",
        "A híres festő, Gustav Klimt rendszeresen az Attersee partján töltötte a nyarait.",
        "A tó a búvárok kedvelt európai célpontja a kristálytiszta látótávolság miatt."
      ],
      ro: ["Dincolo de aparențe, Attersee reprezintă ca întindere cel mai masiv corp de apă de pe teritoriul exclusiv alpin al națiunii.", "Renumitul maestru simbolist Gustav Klimt și-a dedicat veri prețioase repetate pictând cu grație aici faimoasele peisaje.", "Fundul curat al lacului din zona de vest expune incredibil de bine locuințe preistorice din perioada palafitelor ce susțin un mister antic.", "Lacul este celebru și respectat extrem de mult pentru un vânt termic regional faimos – poreclit iubitor și familiar ca 'Rosenwind'."],
      en: [
        "With an area of 46.2 square kilometers, Attersee is the largest lake located entirely in Austria.",
        "The deepest point of the lake is 169 meters.",
        "The water quality of the lake is so good that underwater visibility can reach 25 meters.",
        "The pile dwellings in the lake were built between the 5th and 1st millennia BC.",
        "Gustav Klimt painted 40 landscapes of the Attersee between 1900 and 1916.",
        "There is a 48 km long cycle path around the lake.",
        "The 'Klimt on the Attersee' theme center presents the connection between the painter and the lake.",
        "The Attersee shipping company also offers nostalgic trips on a paddle steamer built in 1913."
      ]
    }, image: "/poi-images/lake-attersee-extra.webp"},
  {
    id: "mountain-dachstein-massiv-extra",
    type: "mountain",
    parent: "AT-6",
    coords: [13.60, 47.47],
    name: { de: "Dachstein-Massiv", hu: "Dachstein-masszívum", ro: "Masivul Dachstein", en: "Dachstein Massif" },
    description: {
      de: "Ein stark verkarstetes Gebirgsmassiv der Alpen, berühmt für seine Gletscher, die Rieseneishöhle und die Aussichtsplattform 5fingers.",
      hu: "Erősen karsztosodott hegymasszívum az Alpokban, híres gleccsereiről, az Óriás-jégbarlangról és az 5fingers kilátóplatformról.",
      ro: "Un masiv montan puternic carstificat din Alpi, renumit pentru ghețarii săi, peștera uriașă de gheață și platforma de observare 5fingers.",
      en: "A heavily karstified mountain massif in the Alps, famous for its glaciers, the Giant Ice Cave, and the 5fingers viewing platform."
    },
    descriptionAdvanced: {
      de: "Das Dachstein-Massiv markiert mit seinen knapp 3.000 Metern Höhe eine der prächtigsten Berglandschaften der Nördlichen Kalkalpen. Diese UNESCO-geschützte Region formt die atemberaubende natürliche Kulisse für das weltberühmte Dorf Hallstatt. Typisch für das Massiv sind seine steil abfallenden, schroffen Südwände, während das nördliche Plateau von weiten Gletschern und Karstfeldern bedeckt ist. Spektakuläre Naturwunder verbergen sich im Inneren des Berges, darunter die weit verzweigte Rieseneishöhle und die Mammuthöhle. Für Abenteuerlustige hält der Dachstein außergewöhnliche Attraktionen bereit, wie die exponierte Aussichtsplattform '5fingers', eine schwebende Hängebrücke sowie die sogenannte 'Treppe ins Nichts', die eine unvergleichliche Panoramasicht bieten. Geografie K8 — Alpine Geologie und Karstlandschaften.",
      hu: "A Dachstein-masszívum Ausztria egyik legmonumentálisabb hegytömbje, amely a 'Salzkammergut, Felső-Ausztria és Stájerország hármas határán magasodik. A csúcs eléri a 2995 méteres magasságot, és a térség legismertebb mészkőplatója, amelyet drámai sziklafalak és hatalmas gleccserek borítanak. A Hallstatt-Dachstein régió páratlan természeti és kulturális jelentősége miatt az UNESCO Világörökség része. A hegy vonzerejét növeli a 'Dachstein Sky Walk' üvegfenekű kilátó, valamint a híres 'Lépcső a Semmibe', ahonnan szédítő, 400 méteres mélységbe tekinthetnek le az adrenalint kereső látogatók. Földrajz K7 – karsztosodás, gleccserek és hegyvidéki formák.",
      ro: "Masivul montan Dachstein este o culme grandioasă care servește ca un impresionant punct comun și o frontieră ascuțită extrem de vizibilă la hotarul natural dintre Stiria, Austria Superioară și pitoreasca provincie Salzburg. Ghețarul Dachstein fascinează puternic pasionații iernii glaciare alpine și exploratorii temerari, având puncte memorabile spectaculoase suspendate pentru observatori curajoși precum podurile Skywalk. Peșterile Mamut, un uriaș labirint subteran, sporesc splendoarea stâncoasă de o proporție epică nemaivăzută. Prin statutul onorific suprem impus de forul mondial UNESCO, Muntele Hoher Dachstein a rămas incontestabil unul dintre cele mai iubite comori alpine, plin de ghețari strălucitori atemporali și platouri ascuțite amețitoare de neegalat.",
      en: "The Dachstein Massif is an impressive mountain range in the Northern Limestone Alps, on the border of Upper Austria, Styria, and Salzburg. The region, including Hallstatt, is a UNESCO World Heritage site. At 2,995 meters, the Hoher Dachstein is the highest point in Styria and Upper Austria. Dachstein is a paradise for mountaineers, but also offers unique attractions. The Dachstein Glacier allows for year-round skiing. The mountain hides two impressive caves: the Giant Ice Cave and the Mammoth Cave. The '5fingers' viewing platform on the Krippenstein summit offers breathtaking views. The Dachstein suspension bridge and the 'Stairway to Nothingness' offer thrills. Geology Grade 9 - Karst and Caves."
    },
    factsAdvanced: {
      de: [
        "Der Hoher Dachstein ist mit 2.995 Metern der höchste Gipfel sowohl der Steiermark als auch Oberösterreichs.",
        "Das weitläufige Höhlensystem der Mammuthöhle erstreckt sich auf über 70 Kilometern unterhalb des Berges.",
        "Die Dachstein-Südwand ist in der Alpinisten-Szene als eine der herausforderndsten Kletterwände Österreichs berühmt.",
        "Die Dachstein-Gletscherbahn überwindet bei der Fahrt auf den Berg ohne einzige Stütze einen massiven Höhenunterschied."
      ],
      hu: [
        "A Dachstein csúcsa 2995 méterével Stájerország és Felső-Ausztria legmagasabb pontja.",
        "A hegy belsejében hatalmas barlangrendszerek, köztük a Dachsteini Jégbarlang található.",
        "A csúcson lévő üvegfenekű 'Sky Walk' kilátó alpesi panorámát kínál a semmi felett.",
        "A terület a festői Hallstatt-tal együtt az UNESCO Természeti és Kulturális Világörökség része."
      ],
      ro: ["Acest grandios și venerat masiv constituie apogeul maiestuos cel mai ridicat și impunător din statele Stiria și din frumoasa Austria Superioară.", "Platforma absolut superbă 'Dachstein Skywalk' permite admiratorilor să traverseze direct aerian la o copleșitoare și vertiginoasă elevație prăpăstioasă.", "Complexul carstic Dachstein a fost oficial și grandios celebrat și catalogat ca prețioasă și sacră parte esențială din marele Patrimoniu UNESCO.", "Acest fenomen unic ascunde fascinanta și monumentala gigantică Peșteră Eisriesenwelt și alte cavități carstice enigmatice imense și vaste."],
      en: [
        "The Hoher Dachstein peak was first climbed in 1834.",
        "The Dachstein Glacier is one of the eight glaciers in the Alps where you can ski in summer.",
        "In the Giant Ice Cave, the ice thickness reaches up to 25 meters in places.",
        "The '5fingers' viewing platform is located 400 meters above the rock face.",
        "Austria's highest suspension bridge is on the Dachstein.",
        "The karst plateau of the Dachstein massif is often called a 'lunar landscape'.",
        "The mountain range takes its name from the word 'Dach' (roof), referring to its steep rock faces.",
        "The 'Super-G' on the Dachstein Glacier is one of the steepest groomed ski slopes in the world."
      ]
    }, image: "/poi-images/mountain-dachstein-massiv-extra.webp"},
  {
    id: "river-donau-auen-nationalpark-extra",
    type: "river",
    parent: "AT-3",
    coords: [16.71, 48.18],
    name: { de: "Nationalpark Donau-Auen", hu: "Donau-Auen Nemzeti Park", ro: "Parcul Național Lunca Dunării", en: "Donau-Auen National Park" },
    description: {
      de: "Eine der letzten großen unverbauten Flussauenlandschaften Mitteleuropas, die sich zwischen Wien und der slowakischen Grenze erstreckt.",
      hu: "Közép-Európa egyik utolsó nagy, beépítetlen folyómenti árterülete, amely Bécs és a szlovák határ között húzódik.",
      ro: "Una dintre ultimele mari peisaje de luncă fluvială nealterată din Europa Centrală, care se întinde între Viena și granița cu Slovacia.",
      en: "One of the last large, undeveloped riverine wetland landscapes in Central Europe, stretching between Vienna and the Slovak border."
    },
    descriptionAdvanced: {
      de: "Als grüne Lebensader erstreckt sich der Nationalpark Donau-Auen auf über 36 Kilometern Länge von den Toren Wiens bis an die slowakische Grenze. Dieses Schutzgebiet ist die letzte große und intakte Flussauenlandschaft Mitteleuropas und stellt einen unersetzlichen Hochwasserschutz dar. Das ständige Wechselspiel von Überflutung und Trockenfallen formt eine äußerst dynamische Wildnis, die Heimat für unzählige bedrohte Tier- und Pflanzenarten ist. Weitläufige Galeriewälder, versteckte Altarme und ausgedehnte Schilfgürtel bilden ein Paradies für Naturliebhaber, das sich am besten mit dem Kanu oder bei ausgedehnten Wanderungen erkunden lässt. Die Bemühungen des Parks konzentrieren sich insbesondere auf die Erhaltung der Flussdynamik und erfolgreiche Wiederansiedlungen, wie beim heimischen Biber. Biologie K7 — Flussökosysteme und Auenlandschaften.",
      hu: "A Donau-Auen Nemzeti Park Bécstől a szlovák határig húzódik, és Közép-Európa utolsó megmaradt nagy, szabadon folyó ártéri erdőségét védi. Mivel a Duna ezen a szakaszon nem szabályozott betonmederben folyik, az áradások és apadások ritmusa folyamatosan alakítja a kavicszátonyokat, a holtágakat és a mocsári erdőket. Ez az ártéri dzsungel menedéket nyújt olyan ritka fajoknak, mint a jégmadár, a hód, a mocsári teknős és a viza. A nemzeti park a folyószabályozások korában hatalmas értéket képvisel a természetes víztisztítás és az árvízvédelem szempontjából, látogatóit pedig kenu- és csónaktúrákkal várja. Biológia K6 – ártéri ökoszisztémák és folyódinamika.",
      ro: "Parcul Național Donau-Auen se întinde maiestuos de-a lungul puternicului curs liber al râului pan-european, fix între cele două faimoase capitale marcante: maiestuoasa Viena și romantica Bratislava. Parcul acesta este cea din urmă, și unica din toată Europa de Vest, o veritabilă luncă naturală continuă și neîmblânzită ce depinde în continuare exclusiv și liber doar de uriașa și constanta pulsație dinamică neregulară a nivelurilor fluviului. Această uriașă pădure aluvială adăpostește de milenii peste 5.000 de specii remarcabile ale faunei terestre și floristice amfibii adaptate miraculos schimbărilor climatice. Parcul oferă expediții spectaculoase și aventuri pitorești navigabile folosind canoe și bărci ecologice, descoperind bogata tradiție imperială a luncii dunărene austriece.",
      en: "The Donau-Auen (Danube-Wetlands) National Park is a unique natural landscape that stretches for 36 kilometers along the Danube from Vienna to the Slovak border. It is the last major, largely intact riverine wetland ecosystem in Central Europe. The national park consists of the Danube and its tributaries, backwaters, and extensive floodplain forests and meadows. Water constantly shapes the landscape, creating dynamic and diverse habitats. The park has an extremely rich wildlife; it is home to over 800 plant species, 30 mammal species, and 100 bird species. One of the most successful reintroduction programs is that of the beavers. The park's center is at Orth Castle. Biology Grade 7 - Floodplain Ecosystems."
    },
    factsAdvanced: {
      de: [
        "Der Park wurde 1996 gegründet, nachdem Bürgerproteste den Bau eines Wasserkraftwerks in der Au erfolgreich verhindert hatten.",
        "Im Herzen des Parks liegt das schlossORTH, das als nationales Besucherzentrum und interaktives Museum dient.",
        "Das Gewässersystem ist ein wichtiger Lebensraum für seltene Fische, wie den Hundsfisch und den majestätischen Huchen.",
        "Geführte Schlauchboottouren erlauben es, die abgelegenen Seitenarme der Donau auf schonende Weise zu erforschen."
      ],
      hu: [
        "Ez Közép-Európa legnagyobb, még szabadon folyó, érintetlen ártéri folyószakasza.",
        "A park létrehozását egy hatalmas környezetvédelmi tiltakozóhullám előzte meg az 1980-as években.",
        "A terület ritka fajok, például tengeri sasok, hódok és mocsári teknősök otthona.",
        "A Duna ár- és apályszintje akár 7 métert is ingadozhat ezen a vad szakaszon."
      ],
      ro: ["Protejează cu loialitate absolută și unică cea mai mare zonă forestieră continuă, complet neîngrădită de inundații ale masivei câmpii din Europa.", "Peste incredibila cifră de 800 de specii rare botanice unice plus mai bine de mii de soiuri de mamifere și pești prosperă aici cu real succes.", "Există faimosul și fermecătorul centru verde Schloss Orth (Castelul vienez Orth) vizitat intens cu ocazia tururilor de cercetare științifică educativă.", "Incredibilul parc ecologic rezonează cu o independență glorioasă ce sfidează marile inginerii hidraulice și construcții urbane megalitice din istoria recentă."],
      en: [
        "The national park was founded in 1996 after a citizens' movement successfully prevented the construction of a power plant in the area.",
        "The park covers an area of 93 square kilometers.",
        "More than 60 species of fish live in the park, including the Danube salmon.",
        "'Tschaiken', the traditional Danube wooden boats, offer guided tours on the park's waters.",
        "The park is part of the 'European Green Belt', a chain of nature reserves along the former Iron Curtain.",
        "There are several observation towers in the park, from which the birdlife can be excellently observed.",
        "The national park is a popular recreational area for the Viennese.",
        "The park's logo features a kingfisher, a symbol of clean water and a healthy ecosystem."
      ]
    }, image: "/poi-images/river-donau-auen-nationalpark-extra.webp"},
  {
    id: "nature-eisriesenwelt-werfen-extra",
    type: "nature",
    parent: "AT-5",
    coords: [13.18, 47.50],
    name: { de: "Eisriesenwelt Werfen", hu: "Werfeni Jégóriásvilág", ro: "Lumea Giganților de Gheață Werfen", en: "Werfen Ice Giants World" },
    description: {
      de: "Die größte Eishöhle der Welt, ein riesiges Höhlensystem mit spektakulären Eisformationen im Tennengebirge.",
      hu: "A világ legnagyobb jégbarlangja, egy hatalmas barlangrendszer látványos jégképződményekkel a Tennengebirge-hegységben.",
      ro: "Cea mai mare peșteră de gheață din lume, un sistem gigantic de peșteri cu formațiuni de gheață spectaculoase în munții Tennengebirge.",
      en: "The largest ice cave in the world, a giant cave system with spectacular ice formations in the Tennengebirge mountains."
    },
    descriptionAdvanced: {
      de: "Die Eisriesenwelt in Werfen ist ein geologisches Wunder und gilt mit über 42 Kilometern erforschtem Ausmaß als die größte Eishöhle der Erde. Hoch droben im rauen Karst des Tennengebirges gelegen, fasziniert das Höhlensystem vor allem durch die gewaltigen, gefrorenen Wasserfälle und Eispaläste, die sich in den vorderen Gängen gebildet haben. Der physikalische Ursprung dieses Phänomens beruht auf einem ausgeprägten Höhlenwind, der im Winter eiskalte Luft tief in das Berginnere bläst und so eindringendes Schmelzwasser im Frühjahr erstarren lässt. Eine Besichtigung gleicht einer magischen Expedition: Nur mit nostalgischen Karbidlampen ausgerüstet, durchqueren Besucher die gewaltigen, eisgepanzerten Hallen und bewältigen dabei zahlreiche Stufen in klirrender Kälte. Geografie K7 — Höhlenbildung und Glaziologie.",
      hu: "A salzburgi Werfen felett található Eisriesenwelt a világ legnagyobb ismert jégbarlangrendszere, amelynek hossza meghaladja a 42 kilométert. A barlang a Tennengebirge mészkőmasszívumának belsejében, mintegy 1641 méteres magasságban nyílik. A barlangban lévő gigantikus, kristályos jégalakzatokat a sajátos mikroklíma és a huzat hozza létre: télen a hideg levegő beáramlik, megfagyasztva a beszivárgó vizet, míg nyáron a barlang hűvös marad. A látogatók régi karbidlámpákkal járhatják végig a lenyűgöző jégpalotákat, ahol a fagyott vízesések és jégszobrok varázslatos atmoszférát teremtenek. Földrajz K7 – barlangászat, karsztjelenségek és barlangi jég.",
      ro: "Lumea Giganților de Gheață (Eisriesenwelt) din satul Werfen ascunde fără nici un fel de dubiu cel mai titanic, grandios și amplu regat monumental al imenselor peșteri de gheață care pot fi vizitate de pe fața globului. Situat în lanțurile spectaculoase glaciare Tennengebirge de lângă idilicul stat Salzburg, acesta reprezintă un uriaș coridor înghețat creat din procese termale de lungă durată uimitoare și de topirea prelungită antică din rocă stâncoasă formată milenii. Dincolo de simpla gheață perenă cristalină lucioasă masivă care ornează pereții în proporții de catedrale maiestuoase, o excursie aventuroasă, folosind felinare cu carbid uluitor de clasice adaugă experienței preistorice un caracter mistic magic greu de descris vizual prin alte superlative.",
      en: "The Eisriesenwelt (World of the Ice Giants) near Werfen, in the Tennengebirge mountains, is the largest ice cave on Earth. The total length of the cave system exceeds 42 kilometers, of which the first, ice-covered kilometer is open to visitors. It is a dynamic ice cave, meaning that air currents created by the temperature difference between the cave and the outside ('chimney effect') shape the ice formations. Infiltrating water freezes in spring, creating impressive ice sculptures. The cave is illuminated by carbide lamps, creating a mystical atmosphere. The entrance to the cave is at an altitude of 1,641 meters, accessible by a steep cable car. Geology Grade 7 - Ice Caves."
    },
    factsAdvanced: {
      de: [
        "Die offizielle Entdeckung der Höhle wird dem Naturforscher Anton von Posselt-Czorich im Jahr 1879 zugeschrieben.",
        "Der Zugang zur Höhle erfolgt über eine extrem steile Seilbahn, die bereits beeindruckende Tiefblicke bietet.",
        "Um das natürliche Mikroklima zu schützen, wird auf künstliche elektrische Dauerbeleuchtung im Inneren verzichtet.",
        "Während der Führung überwinden die Besucher insgesamt 1.400 Stufen bei Temperaturen knapp unter dem Gefrierpunkt."
      ],
      hu: [
        "Az Eisriesenwelt a maga 42 kilométeres hosszával a világ legnagyobb jégbarlangja.",
        "A gigantikus jégalakzatokat a barlang belsejében fújó erős téli huzat alakítja ki.",
        "A látogatók a mai napig hagyományos, nyílt lángú karbidlámpákkal fedezik fel a mélyt.",
        "A barlang bejárata meredek sziklafalon, több mint 1600 méteres tengerszint feletti magasságban nyílik."
      ],
      ro: ["Sistemul stâncos masiv subteran de o unicitate extremă se întinde total și colosal pe fenomenala, imensa distanță masivă de 42 de kilometri.", "Sculpturile imaculate monumentale translucide și incredibile înghețate sunt în permanență, veșnic modificate înfățișând un constant suflu arhitectural ireal termal.", "Descoperirea științifică epocală, târzie a fascinantei minuni ascunse a fost abia înfăptuită de către faimosul căutător Anton Posselt în apropierea anilor 1879.", "Curajoșii musafiri depășesc absolut amețitor un volum grandios formidabil total numărând aproximativ fabuloasa cantitate de 700 de trepte alunecoase de ascensiune și coborâre continuă."],
      en: [
        "The cave was officially discovered in 1879 by the Salzburg naturalist Anton von Posselt-Czorich.",
        "The thickness of the ice layer in the cave exceeds 20 meters in places.",
        "The temperature in the cave is around 0°C all year round.",
        "During the tour, visitors have to climb a difference in altitude of 134 meters, which corresponds to about 1,400 steps.",
        "The cable car leading to the cave is one of the steepest in Austria.",
        "The cave can only be visited from May to October due to snow conditions.",
        "The largest ice formation is the 'Posselt Tower', which is over 25 meters high.",
        "The cave, together with the nearby Hohenwerfen Castle, is a popular excursion destination."
      ]
    }, image: "/poi-images/nature-eisriesenwelt-werfen-extra.webp"},
  {
    id: "lake-grüner-see-extra",
    type: "lake",
    parent: "AT-6",
    coords: [15.05, 47.54],
    name: { de: "Grüner See", hu: "Zöld-tó", ro: "Lacul Verde", en: "Green Lake" },
    description: {
      de: "Ein Schmelzwassersee in der Steiermark, der im Frühling Bänke und Wanderwege überflutet und so eine surreale Unterwasserwelt schafft.",
      hu: "Olvadtvízi tó Stájerországban, amely tavasszal elárasztja a padokat és a túraútvonalakat, szürreális víz alatti világot teremtve.",
      ro: "Un lac format din topirea zăpezii în Stiria, care inundă băncile și potecile primăvara, creând o lume subacvatică suprarealistă.",
      en: "A meltwater lake in Styria that floods benches and hiking trails in spring, creating a surreal underwater world."
    },
    descriptionAdvanced: {
      de: "Eingebettet in die Gebirgslandschaft des Hochschwabs ist der Grüner See in der Steiermark eines der faszinierendsten Naturschauspiele Europas. Der See ist ein Karst-Phänomen, das primär durch das Schmelzwasser der umliegenden Berge gespeist wird. Sein Wasserstand ändert sich im Jahresverlauf drastisch: Während er im tiefen Winter fast vollkommen verschwindet, schwillt er im späten Frühjahr an und flutet das gesamte umliegende Tal mitsamt Spazierwegen, Brücken und Ruhebänken. Dieses Schmelzwasser ist von unglaublicher Reinheit, wodurch der See seine tief smaragdgrüne Färbung und eine unvergleichliche Unterwassersichtweite erhält. Um dieses äußerst sensible Ökosystem vor Zerstörung zu bewahren, wurden Tauchen und Schwimmen gänzlich untersagt, sodass das Naturwunder nun von den Ufern aus bestaunt werden kann. Hydrologie K8 — Karstseen und saisonale Gewässer.",
      hu: "A Grüner See (Zöld-tó) a stájerországi Tragöß közelében, a Hochschwab-hegység lábánál található, és Ausztria egyik legkülönlegesebb természeti csodája. A tó valójában egy karsztforrás, amely minden tavasszal, a hegyi hóolvadás hatására telik meg jéghideg, kristálytiszta vízzel. A csúcson a vízszint eléri a 10 métert is, ilyenkor az egész völgy – beleértve a padokat, hidakat és túraösvényeket – smaragdzöld víz alá kerül, lenyűgöző látványt nyújtva a búvároknak és a fotósoknak. Őszre és télre a tó vize nagyrészt elszivárog, visszaadva a területet a túrázóknak. Földrajz K6 – karsztforrások és időszakos tavak.",
      ro: "Lacul Verde (Grüner See) cuibărit discret în inima montană ascunsă a Stiriei Superioare super-fermecătoare prezintă și oferă garantat unul din rarele și minunatele fenomene ale iluziilor naturii pure montane. Denumirea nobilă celebră, primită tocmai grație fascinantei transparențe adânci lucioase a nuanței ireale de verde-smarald viu ce strălucește, atrage magic mii de admiratori și visători din numeroasele zări uimite. Primăvara timpurie târzie devine cel mai important, momentul epic magic de inundație lentă provenind din zăpezile generoase din Hochschwab deasupra minunatului platou alpin lăsând imerse cu adevărat băncile drăguțe pentru trecători și copacii sub straturile transparente imaculate acvatice uimitor de clare. Minunăția ecologică impune, totuși, limite drastice și stricte conservării evitând daune din scufundările turismului intens și agasant.",
      en: "Grüner See (Green Lake) is a natural phenomenon and a lake of unparalleled beauty in Styria, at the foot of the Hochschwab mountains. The lake's special feature is its dramatic water level fluctuation. In winter, the lake almost disappears. In spring, however, crystal-clear karst water from the snowmelt fills the basin, and the lake's depth increases to 11 meters. The water floods the surrounding park, including benches and hiking trails, creating a magical, surreal underwater world. The incredible clarity of the water and the grass at the bottom of the lake give it an emerald green color. In 2014, this place was voted the most beautiful hidden place in Austria. To protect the fragile ecosystem, diving and swimming are no longer permitted. Hydrology Grade 8 - Seasonal Lakes."
    },
    factsAdvanced: {
      de: [
        "In den Frühlingsmonaten kann der Wasserspiegel des Sees auf eine maximale Tiefe von bis zu 11 Metern ansteigen.",
        "Das Wasser besitzt mit nur rund 6 bis 8 Grad Celsius selbst im Hochsommer eine klirrende Kälte.",
        "Internationale Berühmtheit erlangte der See unter anderem durch die Verbreitung surrealer Unterwasserbilder in sozialen Medien.",
        "Seit dem Jahr 2016 ist jegliche Nutzung des Gewässers für Wassersport strikt verboten, um den feinen Untergrund zu schützen."
      ],
      hu: [
        "A tó minden tavasszal a hegyi hóolvadás jéghideg, tiszta karsztvizéből telik meg.",
        "A víz szintje évente ingadozik, nyáron akár a 10-12 méteres mélységet is elérheti.",
        "Tavasszal a víz elárasztja a völgy túraútvonalait, hídjait és fa padjait is.",
        "Mély smaragdzöld színét a tófenéken lévő zöldellő alpesi növényzet adja."
      ],
      ro: ["Extraordinara prețioasă și de o claritate magnifică cromatică inegalabilă verde a apei adânci provine din fenomenala ei origine glaciara complet imaculată și nepoluată.", "Adâncimea uimitoare, ciudată și flexibilă alternează vertiginos și extrem în funcție sezonieră bruscă trecând variat masiv între 1 metru pe iarnă ajungând la uluitorii colosali 12 metri maxim pe lunile varatice.", "Toate echipamentele terestre absolut pitorești adiacente scufundate de apă magic clară par misterios încadrate natural în pozele și filmele excepționale de poveste.", "Prestigiosul, prețiosul faimos lac mirific ecologic de o frumusețe inegalabilă a primit nobilul și doritul de mulți titlu râvnit onorific de prestigiu cel mai curat și iubit loc ascuns superb regional de natură neîntinată."],
      en: [
        "The water of the lake is so clear that underwater visibility can reach up to 30 meters.",
        "The water temperature is only 6-8 °C, even in summer.",
        "The highest water level is usually reached in June.",
        "The area around the lake is a protected nature reserve.",
        "The lake is surrounded by the rock faces of the Hochschwab mountains, providing a dramatic backdrop.",
        "The lake's water is drained through the 'Marienklamm' gorge.",
        "The lake's popularity exploded after actor Ashton Kutcher posted about it online.",
        "Although diving is now prohibited, the flooded landscape offers a breathtaking view from the shore."
      ]
    },
    image: "/poi-images/lake-grüner-see-extra.webp",
  }
];
