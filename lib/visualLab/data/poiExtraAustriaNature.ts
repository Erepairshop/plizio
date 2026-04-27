
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
      de: "",
      hu: "A Kalkalpen Nemzeti Park Felső-Ausztriában fekszik, és az Alpok legnagyobb egybefüggő erdőterületét, valamint Ausztria legnagyobb erdővédelmi területét foglalja magában. A parkot a Reichraminger Hintergebirge és a Sengsengebirge hegységek alkotják. Különlegessége a hatalmas, háborítatlan erdőség, ahol az erdő a maga természetes módján fejlődhet. A park ad otthont Ausztria legnagyobb, ősi bükkerdőinek, amelyek 2017 óta az UNESCO Világörökség részét képezik. Ez a vadon élővilágban rendkívül gazdag: a visszatelepített hiúzok mellett medvék, sasok és számos ritka madárfaj is él itt. A parkot több mint 200 kilométernyi jelzett túraútvonal hálózza be, de a látogatók hegyikerékpárral vagy lóháton is felfedezhetik a tájat. A park mélyén rejtőző források, patakok és szurdokok páratlan természeti élményt nyújtanak.",
      ro: "Parcul Național Kalkalpen din Austria Superioară cuprinde cea mai mare zonă forestieră contiguă din Alpi și cea mai mare arie de protecție a pădurilor din Austria. Parcul este format din lanțurile muntoase Reichraminger Hintergebirge și Sengsengebirge. Caracteristica sa specială este pădurea vastă și neperturbată, unde natura se poate dezvolta liber. Parcul găzduiește cele mai mari păduri de fag seculare din Austria, sit al Patrimoniului Mondial UNESCO din 2017. Această sălbăticie este extrem de bogată în faună: pe lângă râșii reintroduși, aici trăiesc urși, vulturi și numeroase specii rare de păsări. Parcul este străbătut de peste 200 de kilometri de trasee de drumeție marcate. Biologie K8 - Conservarea sălbăticiei.",
      en: "Kalkalpen National Park in Upper Austria comprises the largest contiguous forest area in the Alps and Austria's largest forest protection area. The park consists of the Reichraminger Hintergebirge and Sengsengebirge mountain ranges. Its special feature is the vast, undisturbed forest where nature can develop freely. The park is home to Austria's largest ancient beech forests, a UNESCO World Heritage site since 2017. This wilderness is extremely rich in wildlife: in addition to reintroduced lynxes, bears, eagles, and numerous rare bird species live here. The park is crossed by more than 200 kilometers of marked hiking trails. Biology Grade 8 - Wilderness Conservation."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A nemzeti park területe több mint 20 850 hektár.",
        "A park 81%-a erdővel borított, ezzel Ausztria legerdősebb nemzeti parkja.",
        "A területen több mint 30 különböző erdőtársulás található.",
        "A hiúzokat sikeresen telepítették vissza a 2010-es években.",
        "A parkban több mint 800 forrás található, amelyek kiváló minőségű ivóvizet biztosítanak.",
        "A 'Wurbauerkogel' kilátótoronyból lenyűgöző panoráma nyílik a parkra és a környező hegyekre.",
        "A parkban több mint 1000 különböző lepkefaj él.",
        "Télen a parkban hótalpas túrákat és vadmegfigyelő programokat is szerveznek."
      ],
      ro: [
        "Parcul național acoperă o suprafață de peste 20.850 de hectare.",
        "81% din parc este acoperit de păduri, fiind cel mai împădurit parc național din Austria.",
        "În zonă există peste 30 de comunități forestiere diferite.",
        "Râșii au fost reintroduși cu succes în anii 2010.",
        "În parc există peste 800 de izvoare care furnizează apă potabilă de înaltă calitate.",
        "Turnul de observație 'Wurbauerkogel' oferă o panoramă impresionantă asupra parcului.",
        "În parc trăiesc peste 1.000 de specii diferite de fluturi.",
        "Iarna, în parc se organizează tururi cu rachete de zăpadă și programe de observare a vieții sălbatice."
      ],
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
    }
  },
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
      de: "",
      hu: "Az Attersee, a Salzkammerguti tóvidék legnagyobb tava, egy igazi természeti kincs Felső-Ausztriában. A tó lenyűgöző méretei és a környező Höllengebirge és Schafberg hegyvonulatok drámai látványa mindenkit elvarázsol. A tó vize legendásan tiszta és ivóvíz minőségű, színe pedig az időjárástól és a fényviszonyoktól függően a türkizkéktől a mélyzöldig változik. Ez a különleges 'Attersee-zöld' szín a festőket is megihlette, köztük Gustav Klimtet, aki számos nyarat töltött a tó partján és híres tájképeket festett itt. A tó népszerű a vitorlázók, búvárok és a vízi sportok szerelmesei körében. A tó partján történelem előtti cölöpházas települések maradványait tárták fel, amelyek az UNESCO Világörökség részét képezik. A tó körül számos bájos üdülőfalu található, mint például Seewalchen, Schörfling és Unterach, amelyek ideális kiindulópontot jelentenek a régió felfedezéséhez.",
      ro: "Lacul Attersee, cel mai mare lac din regiunea lacurilor Salzkammergut, este o adevărată comoară naturală în Austria Superioară. Dimensiunile impresionante ale lacului și priveliștea dramatică a lanțurilor muntoase înconjurătoare Höllengebirge și Schafberg captivează pe oricine. Apa lacului este legendar de limpede, având calitatea apei potabile, iar culoarea sa variază de la turcoaz la verde închis. Această culoare specială 'verde Attersee' i-a inspirat pe pictori, inclusiv pe Gustav Klimt. Lacul este popular pentru navigație și scufundări. Rămășițele așezărilor preistorice pe piloni de pe malul lacului fac parte din Patrimoniul Mondial UNESCO. În jurul lacului se află numeroase sate de vacanță fermecătoare. Geografie K7 - Lacuri glaciare.",
      en: "Lake Attersee, the largest lake in the Salzkammergut lake district, is a true natural treasure in Upper Austria. The impressive size of the lake and the dramatic view of the surrounding Höllengebirge and Schafberg mountain ranges captivate everyone. The lake's water is legendarily clear, with drinking water quality, and its color varies from turquoise to deep green. This special 'Attersee green' color has inspired painters, including Gustav Klimt. The lake is popular for sailing and diving. The remains of prehistoric pile dwellings on the lake shore are part of the UNESCO World Heritage. Around the lake are numerous charming resort villages. Geography Grade 7 - Glacial Lakes."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "Az Attersee 46,2 négyzetkilométeres területével Ausztria legnagyobb, teljes egészében az országban található tava.",
        "A tó legmélyebb pontja 169 méter.",
        "A tó vizének minősége olyan jó, hogy a látótávolság a víz alatt elérheti a 25 métert.",
        "A tóban található cölöpházas települések az i.e. 5. és 1. évezred között épültek.",
        "Gustav Klimt 1900 és 1916 között 40 tájképet festett az Attersee-ről.",
        "A tó körül egy 48 km hosszú kerékpárút vezet.",
        "A 'Klimt a az Attersee-nél' tematikus központ bemutatja a festő és a tó kapcsolatát.",
        "Az Attersee hajózási társaság nosztalgiautakat is kínál egy 1913-ban épült lapátkerekes gőzhajóval."
      ],
      ro: [
        "Cu o suprafață de 46,2 kilometri pătrați, Attersee este cel mai mare lac situat în întregime în Austria.",
        "Cel mai adânc punct al lacului este de 169 de metri.",
        "Calitatea apei lacului este atât de bună încât vizibilitatea subacvatică poate ajunge la 25 de metri.",
        "Așezările pe piloni din lac au fost construite între mileniile 5 și 1 î.Hr.",
        "Gustav Klimt a pictat 40 de peisaje cu Attersee între 1900 și 1916.",
        "În jurul lacului există o pistă de biciclete lungă de 48 km.",
        "Centrul tematic 'Klimt pe Attersee' prezintă legătura dintre pictor și lac.",
        "Compania de navigație Attersee oferă excursii de nostalgie cu un vapor cu aburi cu zbaturi construit în 1913."
      ],
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
    }
  },
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
      de: "",
      hu: "A Dachstein-masszívum egy lenyűgöző hegyvonulat az Északi-Mészkőalpokban, Felső-Ausztria, Stájerország és Salzburg tartományok határán. A régió, beleértve Hallstattot is, az UNESCO Világörökség része. A Hoher Dachstein 2995 méteres csúcsával Stájerország és Felső-Ausztria legmagasabb pontja. A Dachstein nemcsak a hegymászók paradicsoma, hanem számos egyedülálló látnivalót is kínál. A Dachstein-gleccser, a Keleti-Alpok legkeletibb gleccsere, egész évben síelhető. A hegy gyomra két lenyűgöző barlangot rejt: az Óriás-jégbarlangot (Rieseneishöhle) és a mamutbarlangot (Mammuthöhle). A Krippenstein csúcsán található '5fingers' kilátóplatform öt különböző, a mélység fölé nyúló 'ujjról' kínál lélegzetelállító kilátást a Hallstatti-tóra és a környező hegyekre. Az adrenalinra vágyókat a Dachstein függőhídja és a 'Lépcső a semmibe' várja, amely egy üvegpadlós platformon végződik a sziklafalon kívül.",
      ro: "Masivul Dachstein este un lanț montan impresionant în Alpii Calcaroși de Nord, la granița dintre Austria Superioară, Stiria și Salzburg. Regiunea, inclusiv Hallstatt, este un sit al Patrimoniului Mondial UNESCO. Cu o înălțime de 2.995 de metri, Hoher Dachstein este cel mai înalt punct din Stiria și Austria Superioară. Dachstein este un paradis pentru alpiniști, dar oferă și atracții unice. Ghețarul Dachstein permite schiatul pe tot parcursul anului. Muntele ascunde două peșteri impresionante: Peștera Gigantă de Gheață și Peștera Mamut. Platforma de observare '5fingers' de pe vârful Krippenstein oferă priveliști uluitoare. Podul suspendat Dachstein și 'Scara spre Nicăieri' oferă senzații tari. Geologie K9 - Carst și peșteri.",
      en: "The Dachstein Massif is an impressive mountain range in the Northern Limestone Alps, on the border of Upper Austria, Styria, and Salzburg. The region, including Hallstatt, is a UNESCO World Heritage site. At 2,995 meters, the Hoher Dachstein is the highest point in Styria and Upper Austria. Dachstein is a paradise for mountaineers, but also offers unique attractions. The Dachstein Glacier allows for year-round skiing. The mountain hides two impressive caves: the Giant Ice Cave and the Mammoth Cave. The '5fingers' viewing platform on the Krippenstein summit offers breathtaking views. The Dachstein suspension bridge and the 'Stairway to Nothingness' offer thrills. Geology Grade 9 - Karst and Caves."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A Hoher Dachstein csúcsát először 1834-ben mászták meg.",
        "A Dachstein-gleccser az Alpok nyolc gleccserének egyike, amely nyáron is síelhető.",
        "Az Óriás-jégbarlangban a jég vastagsága helyenként eléri a 25 métert.",
        "A '5fingers' kilátó 400 méterrel a sziklafal fölött található.",
        "Ausztria legmagasabban fekvő függőhídja a Dachsteinen található.",
        "A Dachstein-masszívum karsztos fennsíkját gyakran 'holdbéli tájnak' is nevezik.",
        "A hegyvonulat a nevét a 'Dach' (tető) szóról kapta, utalva a meredek sziklafalakra.",
        "A 'Super-G' a világ egyik legmeredekebb, ratrakolt sípályája, amely a Dachstein-gleccseren található."
      ],
      ro: [
        "Vârful Hoher Dachstein a fost urcat pentru prima dată în 1834.",
        "Ghețarul Dachstein este unul dintre cei opt ghețari din Alpi unde se poate schia vara.",
        "În Peștera Gigantă de Gheață, grosimea gheții ajunge pe alocuri la 25 de metri.",
        "Platforma de observare '5fingers' este situată la 400 de metri deasupra peretelui de stâncă.",
        "Cel mai înalt pod suspendat din Austria se află pe Dachstein.",
        "Platoul carstic al masivului Dachstein este adesea numit 'peisaj lunar'.",
        "Lanțul montan își trage numele de la cuvântul 'Dach' (acoperiș), referindu-se la stâncile sale abrupte.",
        "Pârtia 'Super-G' de pe ghețarul Dachstein este una dintre cele mai abrupte pârtii de schi amenajate din lume."
      ],
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
    }
  },
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
      de: "",
      hu: "A Donau-Auen (Duna-ártér) Nemzeti Park egyedülálló természeti táj, amely Bécstől egészen a szlovák határig, 36 kilométer hosszan húzódik a Duna mentén. Ez Közép-Európa utolsó, nagyrészt érintetlen nagy ártéri ökoszisztémája. A nemzeti parkot a Duna és annak mellékágai, holtágai, valamint a kiterjedt ártéri erdők és rétek alkotják. A víz folyamatosan formálja a tájat, dinamikus és változatos élőhelyeket teremtve. A park rendkívül gazdag élővilággal rendelkezik; több mint 800 növényfaj, 30 emlősfaj és 100 madárfaj otthona. A legsikeresebb visszatelepítési programok egyike a hódoké, amelyek mára ismét elterjedtek a területen. A park fontos pihenőhely a vonuló madarak számára is, mint például a rétisas. A látogatók gyalog, kerékpárral vagy csónakkal fedezhetik fel a parkot. A nemzeti park központja, a 'schlossORTH' látogatóközpont az Orthi kastélyban található, ahol interaktív kiállítások és egy 'árvízi sziget' mutatja be a régió élővilágát.",
      ro: "Parcul Național Lunca Dunării este un peisaj natural unic care se întinde pe 36 de kilometri de-a lungul Dunării, de la Viena la granița cu Slovacia. Este ultimul mare ecosistem de luncă inundabilă în mare parte intact din Europa Centrală. Parcul național este format din Dunăre și afluenții săi, brațe moarte, precum și păduri și pajiști inundabile extinse. Apa modelează în mod constant peisajul, creând habitate dinamice și diverse. Parcul are o faună extrem de bogată; găzduiește peste 800 de specii de plante, 30 de specii de mamifere și 100 de specii de păsări. Unul dintre cele mai de succes programe de reintroducere este cel al castorilor. Centrul parcului național se află la Castelul Orth. Biologie K7 - Ecosisteme de luncă inundabilă.",
      en: "The Donau-Auen (Danube-Wetlands) National Park is a unique natural landscape that stretches for 36 kilometers along the Danube from Vienna to the Slovak border. It is the last major, largely intact riverine wetland ecosystem in Central Europe. The national park consists of the Danube and its tributaries, backwaters, and extensive floodplain forests and meadows. Water constantly shapes the landscape, creating dynamic and diverse habitats. The park has an extremely rich wildlife; it is home to over 800 plant species, 30 mammal species, and 100 bird species. One of the most successful reintroduction programs is that of the beavers. The park's center is at Orth Castle. Biology Grade 7 - Floodplain Ecosystems."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A nemzeti parkot 1996-ban alapították, miután egy civil mozgalom sikeresen megakadályozta egy vízerőmű építését a területen.",
        "A park területe 93 négyzetkilométer.",
        "A parkban több mint 60 halfaj él, köztük a dunai galóca is.",
        "A 'Tschaiken', a hagyományos dunai fahajók, vezetett túrákat kínálnak a park vizein.",
        "A park a 'Zöld szalag' (European Green Belt) része, amely az egykori vasfüggöny mentén húzódó természetvédelmi területek láncolata.",
        "A park területén több kilátótorony is található, amelyekből kiválóan megfigyelhető a madárvilág.",
        "A nemzeti park a bécsiek kedvelt rekreációs területe.",
        "A park logójában egy jégmadár látható, amely a tiszta vizek és az egészséges ökoszisztéma szimbóluma."
      ],
      ro: [
        "Parcul național a fost înființat în 1996, după ce o mișcare civică a împiedicat cu succes construcția unei hidrocentrale în zonă.",
        "Parcul are o suprafață de 93 de kilometri pătrați.",
        "În parc trăiesc peste 60 de specii de pești, inclusiv lostrița.",
        "'Tschaiken', bărcile tradiționale de lemn de pe Dunăre, oferă tururi ghidate pe apele parcului.",
        "Parcul face parte din 'Centura Verde Europeană', un lanț de rezervații naturale de-a lungul fostei Cortine de Fier.",
        "În parc există mai multe turnuri de observație pentru observarea păsărilor.",
        "Parcul național este o zonă de recreere populară pentru vienezi.",
        "Logo-ul parcului prezintă un pescăruș albastru, simbol al apelor curate și al unui ecosistem sănătos."
      ],
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
    }
  },
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
      de: "",
      hu: "Az Eisriesenwelt (Jégóriások Világa) Werfen mellett, a Tennengebirge-hegységben található, és a Föld legnagyobb jégbarlangja. A barlangrendszer teljes hossza meghaladja a 42 kilométert, amelyből az első, jéggel borított kilométer látogatható. A barlang egy dinamikus jégbarlang, ami azt jelenti, hogy a barlang és a külvilág közötti hőmérséklet-különbség által keltett légáramlatok (a 'kémény-effektus') formálják a jégképződményeket. Télen a hideg levegő beáramlik és lehűti a barlangot, míg nyáron a melegebb levegő nem tud bejutni. A beszivárgó víz tavasszal megfagy, és hatalmas, lenyűgöző jégszobrokat, tornyokat és függönyöket hoz létre. A barlangot fáklyákkal és a vezetők által kiosztott karbidlámpákkal világítják meg, ami misztikus hangulatot teremt. A barlang bejárata 1641 méter magasan van, ahová egy meredek felvonó is vezet, páratlan kilátást nyújtva a Salzach-völgyre.",
      ro: "Eisriesenwelt (Lumea Giganților de Gheață) de lângă Werfen, în munții Tennengebirge, este cea mai mare peșteră de gheață de pe Pământ. Lungimea totală a sistemului de peșteri depășește 42 de kilometri, din care primul kilometru acoperit de gheață este deschis vizitatorilor. Este o peșteră de gheață dinamică, ceea ce înseamnă că curenții de aer creați de diferența de temperatură dintre peșteră și exterior ('efectul de coș') modelează formațiunile de gheață. Apa care se infiltrează îngheață primăvara, creând sculpturi de gheață impresionante. Peștera este iluminată de lămpi cu carbură, creând o atmosferă mistică. Intrarea în peșteră se află la o altitudine de 1.641 de metri, accesibilă cu un teleferic abrupt. Geologie K7 - Peșteri de gheață.",
      en: "The Eisriesenwelt (World of the Ice Giants) near Werfen, in the Tennengebirge mountains, is the largest ice cave on Earth. The total length of the cave system exceeds 42 kilometers, of which the first, ice-covered kilometer is open to visitors. It is a dynamic ice cave, meaning that air currents created by the temperature difference between the cave and the outside ('chimney effect') shape the ice formations. Infiltrating water freezes in spring, creating impressive ice sculptures. The cave is illuminated by carbide lamps, creating a mystical atmosphere. The entrance to the cave is at an altitude of 1,641 meters, accessible by a steep cable car. Geology Grade 7 - Ice Caves."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A barlangot hivatalosan 1879-ben fedezte fel Anton von Posselt-Czorich salzburgi természettudós.",
        "A jégréteg vastagsága a barlangban helyenként meghaladja a 20 métert.",
        "A barlangban a hőmérséklet egész évben 0°C körül van.",
        "A látogatóknak a túra során 134 méteres szintkülönbséget kell leküzdeniük, ami körülbelül 1400 lépcsőfoknak felel meg.",
        "A barlanghoz vezető felvonó Ausztria egyik legmeredekebb felvonója.",
        "A barlang csak májustól októberig látogatható a hóviszonyok miatt.",
        "A legnagyobb jégképződmény a 'Posselt-torony', amely több mint 25 méter magas.",
        "A barlang a közeli Hohenwerfen várával együtt népszerű kirándulóhely."
      ],
      ro: [
        "Peștera a fost descoperită oficial în 1879 de naturalistul salzburghez Anton von Posselt-Czorich.",
        "Grosimea stratului de gheață din peșteră depășește pe alocuri 20 de metri.",
        "Temperatura din peșteră este în jur de 0°C pe tot parcursul anului.",
        "În timpul turului, vizitatorii trebuie să urce o diferență de nivel de 134 de metri, ceea ce corespunde cu aproximativ 1.400 de trepte.",
        "Telefericul care duce la peșteră este unul dintre cele mai abrupte din Austria.",
        "Peștera poate fi vizitată doar din mai până în octombrie, din cauza condițiilor de zăpadă.",
        "Cea mai mare formațiune de gheață este 'Turnul Posselt', care are peste 25 de metri înălțime.",
        "Peștera, împreună cu castelul Hohenwerfen din apropiere, este o destinație populară pentru excursii."
      ],
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
    }
  },
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
      de: "",
      hu: "A Grüner See (Zöld-tó) egy természeti jelenség és egy páratlan szépségű tó Stájerországban, Tragöß falu közelében, a Hochschwab-hegység lábánál. A tó különlegessége a drámai vízszint-ingadozásban rejlik. Télen a tó szinte teljesen eltűnik, csak egy-két méter mély tavacska marad. Tavasszal azonban, a hóolvadás hatására a hegyekből lezúduló kristálytiszta karsztvíz feltölti a medencét, és a tó mélysége akár 11 méterre is megnő. A víz elárasztja a tó körüli parkot, beleértve a padokat, gyaloghidakat és a túraútvonalakat, létrehozva egy varázslatos, szürreális víz alatti világot. A víz hihetetlen tisztasága és a tó alján lévő fű és sziklák smaragdzöld színt kölcsönöznek a tónak, amelyről a nevét is kapta. Ezt a helyet 2014-ben Ausztria legszebb rejtett helyének választották. A törékeny ökoszisztéma védelme érdekében a búvárkodás és az úszás már nem engedélyezett a tóban.",
      ro: "Grüner See (Lacul Verde) este un fenomen natural și un lac de o frumusețe de neegalat în Stiria, la poalele munților Hochschwab. Particularitatea lacului constă în fluctuația sa dramatică a nivelului apei. Iarna, lacul aproape dispare. Cu toate acestea, primăvara, apa cristalină din topirea zăpezilor umple bazinul, iar adâncimea lacului crește până la 11 metri. Apa inundă parcul din jur, inclusiv băncile și potecile, creând o lume subacvatică magică. Limpezimea incredibilă a apei și iarba de pe fundul lacului îi conferă o culoare verde-smarald. În 2014, acest loc a fost votat cel mai frumos loc ascuns din Austria. Pentru a proteja ecosistemul fragil, scufundările și înotul nu mai sunt permise. Hidrologie K8 - Lacuri sezoniere.",
      en: "Grüner See (Green Lake) is a natural phenomenon and a lake of unparalleled beauty in Styria, at the foot of the Hochschwab mountains. The lake's special feature is its dramatic water level fluctuation. In winter, the lake almost disappears. In spring, however, crystal-clear karst water from the snowmelt fills the basin, and the lake's depth increases to 11 meters. The water floods the surrounding park, including benches and hiking trails, creating a magical, surreal underwater world. The incredible clarity of the water and the grass at the bottom of the lake give it an emerald green color. In 2014, this place was voted the most beautiful hidden place in Austria. To protect the fragile ecosystem, diving and swimming are no longer permitted. Hydrology Grade 8 - Seasonal Lakes."
    },
    factsAdvanced: {
      de: [],
      hu: [
        "A tó vize annyira tiszta, hogy a látótávolság a víz alatt akár 30 méter is lehet.",
        "A víz hőmérséklete még nyáron is csak 6-8 °C.",
        "A legmagasabb vízszintet általában júniusban éri el.",
        "A tó körüli terület természetvédelmi oltalom alatt áll.",
        "A tavat a Hochschwab-hegység sziklafalai veszik körül, ami drámai hátteret biztosít.",
        "A tó vizét a 'Marienklamm' szurdokon keresztül vezetik le.",
        "A tó népszerűsége robbanásszerűen megnőtt, miután Ashton Kutcher színész posztolt róla az interneten.",
        "Bár a búvárkodás már tilos, a tó partjáról is lenyűgöző látványt nyújt az elárasztott táj."
      ],
      ro: [
        "Apa lacului este atât de limpede încât vizibilitatea subacvatică poate ajunge la 30 de metri.",
        "Temperatura apei este de numai 6-8 °C, chiar și vara.",
        "Cel mai înalt nivel al apei este atins de obicei în iunie.",
        "Zona din jurul lacului este o rezervație naturală protejată.",
        "Lacul este înconjurat de stâncile munților Hochschwab, oferind un fundal dramatic.",
        "Apa lacului se scurge prin defileul 'Marienklamm'.",
        "Popularitatea lacului a explodat după ce actorul Ashton Kutcher a postat despre el online.",
        "Deși scufundările sunt acum interzise, peisajul inundat oferă o priveliște impresionantă de pe mal."
      ],
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
    }
  }
];
