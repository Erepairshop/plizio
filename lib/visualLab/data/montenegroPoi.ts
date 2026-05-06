// @ts-nocheck
import { type POI } from "./poi";

export const montenegroAllPoi: POI[] = [
  // CITIES
  // NATURE
  {
    id: "me-skadar-lake",
    name: { de: "Skutarisee", hu: "Szkadari-tó", ro: "Lacul Skadar", en: "Skadar Lake" },
    type: "lake",
    coords: [19.2500, 42.2000],
    parent: "ME-ALL",
    description: {
      de: "Der größte See auf der Balkanhalbinsel und ein wichtiger Lebensraum für Vögel.",
      hu: "A Balkán-félsziget legnagyobb tava, fontos madárélőhely.",
      ro: "Cel mai mare lac din Peninsula Balcanică și un habitat important pentru păsări.",
      en: "The largest lake on the Balkan Peninsula and an important bird habitat."
    },
    descriptionAdvanced: {
      de: "Der Skutarisee (Skadarsee) ist der größte Süßwassersee der Balkanhalbinsel und ein wichtiges Naturschutzgebiet, das sich Montenegro und Albanien teilen. Er zeichnet sich durch eine unglaubliche Artenvielfalt aus, darunter der seltene Krauskopfpelikan, und ist von malerischen Wasserlilien sowie alten Inselklöstern geprägt. Bootsfahrten auf dem ruhigen Gewässer bieten ein unvergessliches Erlebnis in unberührter Natur. Geographie K5 – Feuchtgebiete und Ökosysteme.",
      hu: "A Szkadari-tó a Balkán-félsziget legnagyobb tava, amely Montenegró és Albánia határán fekszik. Ez a lenyűgöző édesvízi ökoszisztéma Európa egyik legfontosabb madárrezervátuma, ahol a ritka borzas gödény is megtalálható. A víz felszínét tavirózsák borítják, míg a kis szigeteken ősi ortodox kolostorok bújnak meg. A tó körüli mocsaras vidékek és érintetlen természeti környezet páratlan élményt nyújtanak a természet szerelmeseinek. Földrajz K7 – vizes élőhelyek és ökoszisztémák.",
      ro: "Lacul Skadar este cel mai mare lac din Peninsula Balcanică, întinzându-se la granița dintre Muntenegru și Albania. Zona reprezintă unul dintre cele mai importante ecosisteme de zone umede din Europa, fiind faimos pentru biodiversitatea sa incredibilă, incluzând pelicanul creț. Lacul este un sanctuar pentru păsări migratoare, oferind totodată vizitatorilor posibilitatea de a explora insule istorice cu mănăstiri vechi, totul într-un peisaj natural spectaculos.",
      en: "Skadar Lake is the largest freshwater lake on the Balkan Peninsula, shared between Montenegro and Albania. It serves as an incredibly vital natural habitat, boasting a unique ecosystem that is home to the rare Dalmatian pelican and numerous other bird species. The calm waters, dotted with vibrant water lilies and ancient island monasteries, offer visitors an unforgettable boat-riding experience. This protected national park is a masterpiece of biodiversity and natural conservation. Geography K5 - Wetlands and ecosystems."
    },
    factsAdvanced: {
      de: ["Der See variiert in seiner Größe zwischen 370 und 530 km².", "Er beheimatet über 280 verschiedene Vogelarten.", "Der montenegrinische Teil ist seit 1983 ein Nationalpark.", "Zahlreiche kleine Inseln beherbergen historische orthodoxe Klöster.", "Das Gewässer ist besonders fischreich, vor allem an Karpfen."],
      hu: ["A tó mérete a vízállástól függően 370 és 530 négyzetkilométer között változik.", "Több mint 280 madárfaj és 50 halfaj otthona a tó területe.", "A montenegrói rész 1983 óta nemzeti parki védelem alatt áll.", "Számos apró szigeten ősi szerb ortodox kolostorok találhatók."],
      ro: ["Suprafața lacului variază sezonier între 370 și 530 km².", "Este considerată una dintre cele mai mari rezervații de păsări din Europa.", "Peste 280 de specii de păsări au fost identificate în ecosistemul lacului.", "Insulele lacului găzduiesc mănăstiri ortodoxe istorice, unele datând din secolul al XIV-lea.", "Zona este renumită pentru bogăția sa piscicolă, fiind un loc tradițional de pescuit."],
      en: ["The lake's surface area fluctuates between 370 and 530 square kilometers depending on the season.", "It provides a crucial habitat for more than 280 distinct bird species.", "The Montenegrin section was officially declared a National Park in 1983.", "Several small islands within the lake host historic Serbian Orthodox monasteries.", "The waters are renowned for their rich fish populations, particularly carp."]
    }, image: "/poi-images/me-skadar-lake.webp"},
  {
    id: "me-durmitor",
    name: { de: "Durmitor", hu: "Durmitor", ro: "Durmitor", en: "Durmitor" },
    type: "mountain",
    coords: [19.0333, 43.1333],
    parent: "ME-ALL",
    description: {
      de: "Ein Massiv und Nationalpark, Heimat des Bobotov Kuk und eiszeitlicher Seen.",
      hu: "Hegység és nemzeti park, a Bobotov Kuk és gleccsertavak otthona.",
      ro: "Un masiv și parc național, acasă pentru Bobotov Kuk și lacuri glaciare.",
      en: "A massif and national park, home to Bobotov Kuk and glacial lakes."
    },
    descriptionAdvanced: {
      de: "Der Durmitor-Nationalpark im Norden Montenegros ist ein majestätisches Bergmassiv, das von Gletschern geformt wurde und dramatische Kalksteingipfel aufweist. Die unberührte alpine Landschaft, dichte Schwarzkiefernwälder und versteckte Gletscherseen machen ihn zu einem Paradies für Wanderer und Bergsteiger. Das Gebiet gehört zum UNESCO-Weltnaturerbe und verkörpert die wilde, raue Schönheit des Balkans. Geographie K6 – Alpine Landschaften.",
      hu: "A Durmitor a Dinári-hegység egyik leglenyűgözőbb mészkőmasszívuma és Montenegró legismertebb nemzeti parkja. A gleccserek által formált tájat mély kanyonok, fenyvesek és 18 kristálytiszta tengerszem pettyezi. A zord, meredek csúcsok és az érintetlen alpesi környezet a túrázók és hegymászók igazi paradicsomává teszik. Az UNESCO Világörökség részét képező terület télen a sísportok, nyáron az aktív kikapcsolódás fellegvára. Földrajz K6 – alpesi tájak.",
      ro: "Durmitor este un masiv muntos impresionant din nordul Muntenegrului, parte a Parcului Național Durmitor, renumit pentru formele sale glaciare spectaculoase. Peisajul este definit de vârfuri calcaroase abrupte, păduri dense de pin negru și 18 lacuri glaciare, cunoscute sub numele de 'ochiuri de munte'. Zona, inclusă în Patrimoniul Mondial UNESCO, este un paradis pentru alpiniști, oferind peisaje sălbatice care reflectă frumusețea brută a regiunii balcanice.",
      en: "Durmitor National Park, located in northern Montenegro, is a majestic mountain massif shaped by ancient glaciers and characterized by dramatic limestone peaks. The pristine alpine landscape features dense black pine forests and hidden glacial lakes, making it a premier destination for hikers and mountaineers. Recognized as a UNESCO World Heritage site, it perfectly embodies the wild, rugged beauty of the Balkan Peninsula. Geography K6 - Alpine landscapes."
    },
    factsAdvanced: {
      de: ["Das Massiv umfasst 22 Gipfel, die über 2000 Meter hoch sind.", "Der höchste Punkt ist der Bobotov Kuk mit 2522 Metern.", "Im Park liegen 18 Gletscherseen, die 'Bergaugen' genannt werden.", "Der Nationalpark erstreckt sich über eine Fläche von 390 km².", "Er ist ein Zufluchtsort für Braunbären und Wölfe."],
      hu: ["A hegységben 48 olyan csúcs található, amely meghaladja a 2000 méteres magasságot.", "A legmagasabb pontja a Bobotov Kuk, amely 2523 méter magas.", "A park 18 gleccsertavát a helyiek hegyi szemeknek hívják.", "A Durmitor Nemzeti Park területén ritka barna medvék és farkasok is élnek."],
      ro: ["Durmitor găzduiește 22 de vârfuri montane cu altitudini de peste 2000 de metri.", "Parcul național acoperă o suprafață vastă de aproximativ 390 km².", "Vârful Bobotov Kuk este punctul cel mai înalt, atingând 2522 metri.", "Parcul include 18 lacuri glaciare fascinante, adesea numite 'ochiuri de munte'.", "Zona reprezintă un refugiu esențial pentru faună sălbatică, inclusiv pentru ursul brun și lup."],
      en: ["The highest peak in the Durmitor massif is Bobotov Kuk, reaching 2,522 meters.", "The park encompasses 18 distinct glacial lakes, affectionately called 'mountain eyes'.", "Durmitor was officially designated as a UNESCO World Heritage site in 1980.", "The region hosts some of the deepest and most spectacular river canyons in Europe.", "Winter months transform the area into Montenegro's leading ski resort destination."]
    }, image: "/poi-images/me-durmitor.webp"},
  {
    id: "me-tara-canyon",
    name: { de: "Tara-Schlucht", hu: "Tara-kanyon", ro: "Canionul Tara", en: "Tara Canyon" },
    type: "river",
    coords: [19.0833, 43.2000],
    parent: "ME-ALL",
    description: {
      de: "Einer der tiefsten Canyons in Europa, beliebt für Rafting.",
      hu: "Európa egyik legmélyebb kanyonja, népszerű vadvízi evezős helyszín.",
      ro: "Unul dintre cele mai adânci canioane din Europa, popular pentru rafting.",
      en: "One of the deepest canyons in Europe, popular for white-water rafting."
    },
    descriptionAdvanced: {
      de: "Die Tara-Schlucht ist ein beeindruckendes Naturwunder und gilt als die tiefste und längste Schlucht Europas. Der smaragdgrüne Tara-Fluss, auch 'Träne Europas' genannt, hat sich im Laufe der Jahrtausende tief in das Kalksteingebirge gegraben und bildet heute ein spektakuläres Ökosystem. Für Abenteurer ist sie ein erstklassiges Ziel für Wildwasser-Rafting in einer atemberaubenden Kulisse. Geographie K7 – Flusserosion und Schluchten.",
      hu: "A Tara-kanyon Európa legmélyebb és a világ második legmélyebb szurdokvölgye, amelyet a smaragdzöld Tara-folyó vájt ki. Az 'Európa könnyeként' is ismert folyó kristálytiszta vize meredek sziklafalak és dús erdők között kanyarog. A kanyon hatalmas szintkülönbségei és sebes zuhatagai ideális terepet biztosítanak a vadvízi evezés és a rafting szerelmeseinek. A drámai természeti képződmény a folyóvízi erózió egyik legszebb európai példája. Földrajz K7 – folyóvízi erózió és kanyonok.",
      ro: "Canionul Tara este cel mai adânc canion din Europa, săpat în stâncă de apele cristaline și turcoaz ale râului Tara. Supranumit 'Lacrima Europei', canionul oferă peisaje dramatice cu pereți verticali, fiind totodată una dintre cele mai apreciate destinații pentru sporturi de apă precum raftingul. Zona reprezintă un fenomen geologic remarcabil, rezultatul a milioane de ani de eroziune fluvială, oferind un habitat unic pentru flora și fauna locală.",
      en: "The Tara River Canyon is a breathtaking natural wonder, widely recognized as the deepest and longest canyon in Europe. Often referred to as the 'Tear of Europe', the emerald-green Tara River has carved its way through the limestone mountains over millennia, creating a spectacular and dramatic ecosystem. Today, it is a world-class destination for adventurers seeking thrilling white-water rafting experiences amidst unparalleled natural scenery. Geography K7 - River erosion and canyons."
    },
    factsAdvanced: {
      de: ["Die Schlucht erreicht eine maximale Tiefe von rund 1300 Metern.", "Sie erstreckt sich über eine Länge von etwa 82 Kilometern.", "Das Wasser der Tara ist so sauber, dass es an vielen Stellen trinkbar ist.", "Die Schlucht ist ein integraler Bestandteil des Durmitor-Nationalparks.", "Der Tara-Fluss überwindet auf seinem Weg ein beachtliches Gefälle."],
      hu: ["A szurdok maximális mélysége eléri az 1300 métert a környező hegyekhez képest.", "A kanyon hossza mintegy 82 kilométeren keresztül kanyarog a hegyek között.", "A Tara-folyó vize olyan tiszta, hogy számos szakaszon emberi fogyasztásra is alkalmas.", "A vadvízi evezés (rafting) során a sportolók számos zúgón kelnek át."],
      ro: ["Canionul atinge o adâncime maximă impresionantă de 1300 de metri.", "Lungimea totală a canionului este de aproximativ 82 km.", "Râul Tara este supranumit 'Lacrima Europei' datorită purității sale excepționale.", "Canionul reprezintă o parte esențială a Parcului Național Durmitor.", "Raftingul pe râul Tara atrage mii de turiști aventuroși anual.", "Apa canionului este atât de pură încât este considerată potabilă pe majoritatea traseului."],
      en: ["The canyon reaches an astonishing maximum depth of 1,300 meters.", "It extends for 82 kilometers, making it the longest canyon in Europe.", "The Tara River is famous for its exceptionally clear and drinkable water.", "The canyon forms a significant part of the Durmitor National Park.", "It is one of the most popular white-water rafting destinations in the entire world."]
    }, image: "/poi-images/me-tara-canyon.webp"},
  {
    id: "me-prokletije",
    name: { de: "Prokletije", hu: "Prokletije", ro: "Prokletije", en: "Prokletije" },
    type: "mountain",
    coords: [19.7667, 42.5000],
    parent: "ME-ALL",
    description: {
      de: "Das 'verwunschene Gebirge', bekannt für seine schroffe und dramatische Landschaft.",
      hu: "Az 'elátkozott hegyek', melyek zord és drámai tájukról ismertek.",
      ro: "„Munții Blestemați”, cunoscuți pentru peisajul lor accidentat și dramatic.",
      en: "The 'Accursed Mountains', known for their rugged and dramatic landscape."
    },
    descriptionAdvanced: {
      de: "Das Prokletije-Gebirge, oft auch als die 'Verwunschenen Berge' bezeichnet, ist das am schwersten zugängliche und dramatische Gebirgsmassiv des Balkans. Mit seinen schroffen, steil aufragenden Felsspitzen und tiefen, von Gletschern geformten Tälern bildet es eine natürliche Grenze zu Albanien und Kosovo. Dieses wilde Terrain bietet erfahrenen Alpinisten und Naturliebhabern eine fast völlig unberührte, alpine Wildnis fernab des Massentourismus. Geographie K7 – Karstgebirge und Grenzen.",
      hu: "A Prokletije, vagyis az 'Elátkozott-hegység' a Balkán-félsziget egyik legvadabb és legnehezebben járható hegyvidéke. A Montenegró és Albánia határán fekvő masszívum drámai mészkőcsúcsokkal, mély völgyekkel és meredek sziklafalakkal rendelkezik. Ez a viszonylag elzárt, érintetlen terület a tömegturizmustól mentes, valódi alpesi vadont kínál az idelátogató kalandoroknak. A terület növény- és állatvilága rendkívül gazdag, és a túrázók számára kihívást jelentő útvonalakat rejt. Földrajz K7 – karszthegységek és országhatárok.",
      ro: "Prokletije, cunoscut sub denumirea dramatică de 'Munții Blestemați', constituie unul dintre cele mai inaccesibile și spectaculoase lanțuri muntoase din Balcani. Situat la granița dintre Muntenegru, Albania și Kosovo, masivul se remarcă prin vârfuri calcaroase zimțate, văi adânci sculptate de ghețari și o natură complet sălbatică. Zona oferă un peisaj montan autentic și nealterat, fiind o destinație provocatoare pentru alpiniștii experimentați care caută experiențe montane autentice, departe de zonele turistice aglomerate.",
      en: "The Prokletije Mountains, often translated as the 'Accursed Mountains', represent the most inaccessible and dramatic mountain range in the Balkans. With its jagged, towering peaks and deep, glacially carved valleys, it forms a formidable natural border between Montenegro, Albania, and Kosovo. This wild, untamed terrain offers experienced alpinists and nature enthusiasts an almost entirely untouched alpine wilderness far from mass tourism. Geography K7 - Karst mountains and borders."
    },
    factsAdvanced: {
      de: ["Prokletije bildet den höchsten Teil der Dinarischen Alpen.", "Der höchste Gipfel in Montenegro ist die Zla Kolata mit 2534 Metern.", "Das Gebirge ist bekannt für extrem raue und schroffe Felsformationen.", "Es ist einer der jüngsten Nationalparks Montenegros, gegründet im Jahr 2009.", "In den abgelegenen Tälern leben noch seltene Luchs-Populationen."],
      hu: ["Ez a hegyvonulat alkotja a Dinári-hegység legmagasabb és legdélebbi szakaszát.", "Itt emelkedik Montenegró legmagasabb csúcsa, a 2534 méteres Zla Kolata.", "A hegyvidék a nevét a zord, veszélyes és nehezen járható terepviszonyokról kapta.", "A Prokletije Nemzeti Park az ország egyik legfiatalabb védett területe."],
      ro: ["Prokletije reprezintă cea mai înaltă și mai sudică secțiune a Munților Dinarici.", "Vârful Zla Kolata este cel mai înalt punct din Muntenegru, având 2534 de metri.", "Munții sunt renumiți pentru formațiunile stâncoase accidentate și dramatice.", "Parcul Național Prokletije a fost înființat în 2009, fiind unul dintre cele mai recente din țară.", "Văile izolate ale masivului adăpostesc populații rare de râs balcanic.", "Zona este considerată una dintre cele mai sălbatice zone montane din Balcani."],
      en: ["The highest peak in the Montenegrin section is Zla Kolata at 2,534 meters.", "Prokletije was officially declared a National Park in Montenegro in 2009.", "The mountain range is characterized by severe karst topography and sharp ridges.", "It remains one of the least explored and most rugged regions in Europe.", "The area is incredibly rich in endemic flora and diverse wildlife."]
    }, image: "/poi-images/me-prokletije.webp"},
  {
    id: "me-bay-kotor",
    name: { de: "Bucht von Kotor", hu: "Kotori-öböl", ro: "Golful Kotor", en: "Bay of Kotor" },
    type: "sea",
    coords: [18.6667, 42.4333],
    parent: "ME-ALL",
    description: {
      de: "Oft Europas südlichster Fjord genannt, eine beeindruckende Küstenlandschaft.",
      hu: "Gyakran Európa legdélebbi fjordjának nevezik, lenyűgöző parti táj.",
      ro: "Adesea numit cel mai sudic fiord din Europa, un peisaj de coastă uimitor.",
      en: "Often called Europe's southernmost fjord, a stunning coastal landscape."
    },
    descriptionAdvanced: {
      de: "Die Bucht von Kotor, oft als der südlichste Fjord Europas bezeichnet, ist eine atemberaubende Meeresbucht, die tief ins Festland einschneidet. Umgeben von steil abfallenden, dunklen Bergen, die sich im tiefblauen Wasser spiegeln, bietet die Region eine unvergleichliche maritime Landschaft. Ihre geschützte Lage machte sie über Jahrhunderte zu einem strategisch wichtigen Seehafen und einem Schmelztiegel der mediterranen Kulturen. Geographie K6 – Meeresbuchten und Küstenlinien.",
      hu: "A Kotori-öböl az Adriai-tenger egyik legkülönlegesebb képződménye, amelyet gyakran Európa legdélebbi fjordjaként emlegetnek. A mélyen a szárazföldbe nyúló vízfelületet drámai, sötét hegyek veszik körül, amelyek lenyűgöző kontrasztot alkotnak a tenger kékjével. Az öböl partját gazdag történelmi múlttal rendelkező városok és ősi tengerészeti központok, mint Kotor és Perast díszítik. A védett földrajzi elhelyezkedés évszázadokon át stratégiai fontosságú kikötővé tette a területet. Földrajz K6 – tengeröblök és tengerpartok.",
      ro: "Golful Kotor este un golf spectaculos care pătrunde adânc în uscat, fiind adesea supranumit cel mai sudic fiord din Europa. Înconjurată de versanți muntoși abrupți și ape cristaline, regiunea oferă un peisaj maritim de o frumusețe copleșitoare, reflectând măreția naturii într-un contrast cromatic inegalabil. Importanța sa strategică, ca port maritim protejat, a făcut ca golful să devină de-a lungul secolelor un centru cultural unde s-au intersectat diverse civilizații mediteraneene.",
      en: "The Bay of Kotor, frequently described as Europe's southernmost fjord, is a stunning marine inlet that cuts deep into the Montenegrin mainland. Surrounded by steep, dark mountains that reflect beautifully in the deep blue waters, the region offers an unparalleled maritime landscape. Its naturally protected position made it a strategically vital seaport for centuries, serving as a historic melting pot of Mediterranean cultures and empires. Geography K6 - Marine bays and coastlines."
    },
    factsAdvanced: {
      de: ["Die Bucht reicht fast 28 Kilometer tief ins Landesinnere.", "Sie besteht aus vier miteinander verbundenen Teilbecken.", "Das Gebiet wurde von der UNESCO zum Weltkulturerbe erklärt.", "Zahlreiche historische Seefahrerstädte wie Kotor und Perast säumen das Ufer.", "Das tiefe Wasser ermöglicht das Einlaufen von großen Kreuzfahrtschiffen."],
      hu: ["Az öböl több mint 28 kilométer mélyen hatol be a meredek montenegrói szárazföldbe.", "A vízfelület négy nagyobb, egymással szűk csatornákon összeköttetésben álló medencéből áll.", "A természeti és történelmi értékek miatt az UNESCO Világörökség részét képezi.", "A mély víz lehetővé teszi, hogy hatalmas tengerjáró hajók is kikössenek az óvárosoknál."],
      ro: ["Golful Kotor pătrunde aproape 28 de kilometri în interiorul uscatului.", "Este format din patru bazine marine interconectate.", "Zona este inclusă în patrimoniul mondial UNESCO datorită valorilor sale naturale și istorice.", "Pe malurile golfului sunt așezate numeroase orașe istorice maritime, cum ar fi Kotor și Perast.", "Adâncimea apei permite accesul marilor nave de croazieră în interiorul golfului.", "Peisajul golfului este dominat de munții Orjen și Lovćen."],
      en: ["The bay is actually a submerged river canyon, technically known as a ria.", "It consists of four interconnected smaller gulfs forming a unique shape.", "The region has been inhabited since ancient times, featuring Illyrian and Roman ruins.", "The bay's historical and cultural significance earned it a UNESCO World Heritage status.", "It is surrounded by the towering Orjen and Lovćen mountain ranges."]
    }, image: "/poi-images/me-bay-kotor.webp"},
  {
    id: "me-our-lady-rocks",
    name: { de: "Maria vom Felsen", hu: "Szirti Madonna", ro: "Maica Domnului de pe Stâncă", en: "Our Lady of the Rocks" },
    type: "historical",
    coords: [18.6869, 42.4864],
    parent: "ME-ALL",
    description: {
      de: "Künstliche Insel vor Perast mit einer wunderschönen Kirche und einem Museum.",
      hu: "Mesterséges sziget Perast partjainál egy gyönyörű templommal és múzeummal.",
      ro: "Insulă artificială în largul coastelor Perast, cu o frumoasă biserică și un muzeu.",
      en: "Artificial island off the coast of Perast with a beautiful church and museum."
    },
    descriptionAdvanced: {
      de: "Die künstliche Insel 'Maria vom Felsen' (Gospa od Škrpjela) liegt malerisch vor der historischen Stadt Perast in der Bucht von Kotor. Der Legende nach wurde sie von Seefahrern erschaffen, die nach einer sicheren Heimkehr stets Steine an dieser Stelle ins Meer warfen, wo einst eine Ikone der Madonna gefunden wurde. Die kleine katholische Kirche auf der Insel beherbergt prachtvolle Barockgemälde und ist ein lebendiges Symbol der tiefen Seefahrertradition der Region. Geschichte K7 – Maritime Legenden und Glaube.",
      hu: "A Szirti Madonna (Gospa od Škrpjela) egy egyedülálló, mesterséges szigetre épült katolikus templom Perast városa mellett. A helyi legenda szerint a szigetet a tengerészek és halászok hozták létre, akik szerencsés hazatérésük után köveket dobtak a tengerbe azon a helyen, ahol egy Szűz Mária-ikont találtak. A templom belseje lenyűgöző barokk festményekkel és ezüst fogadalmi tárgyakkal van díszítve. Ez a kis sziget a tengerészeti hit és az évszázados hagyományok élő szimbóluma. Történelem K7 – tengerészeti legendák és vallás.",
      ro: "Maica Domnului de pe Stâncă (Gospa od Škrpjela) este o biserică impresionantă construită pe o insulă artificială situată în golful Kotor, în fața orășelului istoric Perast. Conform legendei, insula a fost ridicată treptat de pescarii locali, care aruncau pietre pe locul unde a fost descoperită o icoană a Maicii Domnului. Această mică insulă catolică adăpostește astăzi numeroase picturi baroce de o valoare inestimabilă, fiind un simbol al credinței și al tradiției maritime adânc înrădăcinate în regiune.",
      en: "Our Lady of the Rocks (Gospa od Škrpjela) is a captivating artificial island located just off the coast of the historic town of Perast in the Bay of Kotor. According to local legend, the island was meticulously constructed over centuries by seafarers who threw rocks into the sea after safely returning from perilous voyages. The small Catholic church situated on the island houses magnificent Baroque paintings and stands as a vibrant symbol of the region's deep maritime traditions. History K7 - Maritime legends and faith."
    },
    factsAdvanced: {
      de: ["Die Insel ist komplett menschengemacht und besteht aus versenkten Steinen und alten Schiffswracks.", "Die heutige Kirche wurde im Jahr 1630 erbaut.", "Der Brauch des Steinewerfens (Fašinada) wird noch heute jährlich am 22. Juli gefeiert.", "Im Inneren befinden sich 68 Gemälde des Barockmalers Tripo Kokolja.", "Die Kirche besitzt einen beeindruckenden Altar aus feinstem Marmor."],
      hu: ["A szigetet teljes egészében emberek építették kövek és régi hajóroncsok elsüllyesztésével.", "A templomban Tripo Kokolja barokk festőművész 68 lenyűgöző alkotása található.", "A Fašinada nevű ünnep során a helyiek ma is köveket dobnak a sziget köré minden év júliusában.", "A templom oltára a legfinomabb itáliai márványból készült."],
      ro: ["Insula a fost creată integral de mâna omului prin scufundarea pietrelor.", "Biserica actuală a fost construită în anul 1630.", "Tradiția aruncării pietrelor în mare, cunoscută sub numele de 'Fašinada', este sărbătorită anual pe 22 iulie.", "În interiorul bisericii se află 68 de picturi realizate de renumitul artist baroc Tripo Kokolja.", "Altarul bisericii este o capodoperă sculptată din cel mai fin marmură."],
      en: ["The island is entirely man-made, built upon sunken old ships and stones.", "The present-day church was originally constructed in the year 1630.", "An annual tradition called Fašinada involves locals throwing rocks into the sea every July 22.", "The church's interior is decorated with 68 paintings by the famous Baroque artist Tripo Kokolja.", "The church features a magnificent altar crafted from the finest imported marble."]
    }, image: "/poi-images/me-our-lady-rocks.webp"},
  {
    id: "me-njegos-mausoleum",
    name: { de: "Njegoš-Mausoleum", hu: "Njegoš Mauzóleum", ro: "Mausoleul lui Njegoš", en: "Njegoš Mausoleum" },
    type: "landmark",
    coords: [18.8008, 42.3994],
    parent: "ME-ALL",
    description: {
      de: "Das Grabdenkmal für Petar II. Petrović-Njegoš auf dem Berg Lovćen.",
      hu: "Petar II. Petrović-Njegoš síremléke a Lovćen hegyen.",
      ro: "Mormântul lui Petar al II-lea Petrović-Njegoș de pe muntele Lovćen.",
      en: "The burial monument to Petar II Petrović-Njegoš on Mount Lovćen."
    },
    descriptionAdvanced: {
      de: "Auf dem Gipfel des Berges Lovćen thront das monumentale Mausoleum, das dem berühmtesten montenegrinischen Dichter und Fürstbischof Petar II. Petrović-Njegoš gewidmet ist. Das architektonisch beeindruckende Bauwerk ist ein Ort der nationalen Pilgerfahrt und bietet einen überwältigenden Panoramablick, der an klaren Tagen über das gesamte Land bis nach Italien reicht. Es verkörpert den Stolz und die kulturelle Identität des montenegrinischen Volkes in einer rauen, bergigen Umgebung. Geschichte K8 – Nationale Identität und Ikonen.",
      hu: "A Njegoš-mauzóleum a Lovćen-hegy egyik magas csúcsán týrónol, tisztelegve Petar II. Petrović-Njegoš fejedelem és költő előtt. Az impozáns gránit- és márványépület nem csupán végső nyughely, hanem a montenegrói nemzeti büszkeség és identitás egyik legfőbb szimbóluma is. A mauzóleumhoz vezető hosszú lépcsősor megmászása után páratlan panoráma tárul a látogatók elé, ahonnan szép időben szinte az egész ország belátható. Az épület monumentális szobrai az uralkodó szellemi nagyságát hirdetik. Történelem K8 – nemzeti hősök és emlékművek.",
      ro: "Mausoleul lui Njegoš este situat pe vârful muntelui Lovćen și servește drept mormânt pentru cel mai mare poet și conducător muntenegrean, Petar al II-lea Petrović-Njegoš. Acest monument arhitectural impunător atrage mii de vizitatori, fiind un loc de pelerinaj național și un punct de belvedere extraordinar. Panorama care se deschide de pe acest vârf, în zilele senine, poate ajunge până la coastele Italiei, simbolizând mândria și identitatea culturală puternică a poporului muntenegrean.",
      en: "Perched dramatically on the summit of Mount Lovćen, this monumental mausoleum is dedicated to Montenegro's most revered poet and Prince-Bishop, Petar II Petrović-Njegoš. This architecturally stunning structure serves as a site of national pilgrimage, offering sweeping panoramic views that extend across the entire country and, on clear days, even to Italy. It powerfully embodies the pride, resilience, and cultural identity of the Montenegrin people set against a harsh, mountainous backdrop. History K8 - National identity and icons."
    },
    factsAdvanced: {
      de: ["Das Mausoleum liegt auf einer Höhe von 1657 Metern über dem Meeresspiegel.", "Es wurde vom weltbekannten kroatischen Bildhauer Ivan Meštrović entworfen.", "Um das Gebäude zu erreichen, müssen 461 Treppenstufen durch einen Tunnel erklommen werden.", "Die Decke der Krypta ist mit rund 200.000 vergoldeten Mosaiksteinen verziert.", "Zwei riesige Karyatiden aus schwarzem Granit bewachen den Eingang."],
      hu: ["A mauzóleum tekintélyt parancsoló 1657 méteres tengerszint feletti magasságban épült.", "A hegycsúcs eléréséhez egy alagútban pontosan 461 lépcsőfokot kell megmászni.", "A kripta mennyezetét lenyűgöző, több mint 200 000 aranyozott mozaikdarab borítja.", "A bejáratot két hatalmas, fekete gránitból faragott női alak (kariatida) őrzi."],
      ro: ["Mausoleul este situat la o altitudine impresionantă de 1657 de metri.", "Proiectul a fost realizat de celebrul sculptor croat Ivan Meštrović.", "Vizitatorii trebuie să urce 461 de trepte printr-un tunel pentru a ajunge la mausoleu.", "Tavanul criptei este decorat cu peste 200.000 de piese de mozaic aurite.", "Intrarea este străjuită de două cariatide colosale sculptate în granit negru.", "Locul oferă o panoramă spectaculoasă asupra întregului Muntenegru."],
      en: ["The mausoleum is located at an impressive elevation of 1,657 meters above sea level.", "It was designed by the internationally renowned Croatian sculptor Ivan Meštrović.", "Visitors must climb exactly 461 steps through a tunnel to reach the monument.", "The ceiling of the crypt is adorned with approximately 200,000 gold-plated mosaic tiles.", "The entrance is guarded by two massive caryatids carved from black granite."]
    }, image: "/poi-images/me-njegos-mausoleum.webp"},
  {
    id: "me-mamula",
    name: { de: "Mamula", hu: "Mamula", ro: "Mamula", en: "Mamula" },
    type: "historical",
    coords: [18.5583, 42.3953],
    parent: "ME-ALL",
    description: {
      de: "Unbewohnte Insel mit einem Fort aus dem 19. Jahrhundert.",
      hu: "Lakatlan sziget egy 19. századi erőddel.",
      ro: "Insulă nelocuită cu un fort din secolul al XIX-lea.",
      en: "Uninhabited island featuring a 19th-century fort."
    },
    descriptionAdvanced: {
      de: "Die Insel Mamula, an der Einfahrt zur Bucht von Kotor gelegen, beherbergt eine massive, ringförmige Festung, die im 19. Jahrhundert vom österreichisch-ungarischen General Lazar Mamula erbaut wurde. Während sie ursprünglich als militärischer Vorposten zur Verteidigung der Küste diente, wurde sie während des Zweiten Weltkriegs als Gefangenenlager genutzt und trägt somit ein dunkles historisches Erbe. Heute ist die kreisrunde Insel ein faszinierendes Zeugnis der komplexen Militärgeschichte der Adria. Geschichte K7 – Festungsanlagen der Adria.",
      hu: "A Mamula-erőd egy masszív, kör alakú erődítmény a Kotori-öböl bejáratánál, a kis Lastavica-szigeten. Az erődöt az Osztrák-Magyar Monarchia építette a 19. század közepén az öböl védelmére, hogy megakadályozza az ellenséges hajók behatolását. A második világháború alatt az olasz csapatok börtönként használták, ami sötét árnyékot vetett a hely történelmére. Bár sokáig elhagyatottan állt és a természet kezdte visszahódítani, monumentális falai ma is lenyűgöző látványt nyújtanak. Történelem K7 – katonai erődítmények.",
      ro: "Mamula este o mică insulă situată la intrarea în Golful Kotor, dominată de o fortăreață circulară impunătoare, construită în secolul al XIX-lea sub comanda generalului austro-ungar Lazar Mamula. De-a lungul istoriei, fortificația a servit drept punct strategic de apărare a coastei, dar a fost folosită și ca lagăr de concentrare în timpul celui de-al Doilea Război Mondial. În prezent, insula reprezintă un sit istoric fascinant, marcat de o istorie militară complexă și de o arhitectură defensivă remarcabilă.",
      en: "Mamula Island, situated at the entrance to the Bay of Kotor, features a massive, circular fortress constructed in the 19th century by the Austro-Hungarian general Lazar Mamula. Originally designed as a strategic military outpost to defend the coastal waters, the fortress took on a dark history when it was used as a prison camp during World War II. Today, the island stands as a fascinating, albeit solemn, testament to the complex military history of the Adriatic region. History K7 - Adriatic fortifications."
    },
    factsAdvanced: {
      de: ["Die Festung nimmt fast die gesamte Fläche der kleinen Insel ein.", "Sie wurde im Jahr 1853 errichtet, um die Bucht vor Seeangriffen zu schützen.", "Im Zweiten Weltkrieg diente sie als faschistisches Gefängnis unter italienischer Kontrolle.", "Die Insel gehört offiziell zum Küstenort Herceg Novi.", "Mamula wurde kürzlich in ein umstrittenes Luxusresort umgewandelt."],
      hu: ["A sziget olyannyira kicsi, hogy az erődítmény gyakorlatilag lefedi a teljes területét.", "Az épületet Lazar Mamula osztrák-magyar tábornok parancsára építették.", "A második világháború alatt hírhedt börtöntáborként funkcionált.", "Az erőd stratégiai elhelyezkedése miatt az öböl bejáratának kulcsfontosságú védelmi pontja volt."],
      ro: ["Fortăreața ocupă aproape întreaga suprafață a insulei.", "Construcția fortificației a început în 1853 pentru apărarea golfului.", "În timpul celui de-al Doilea Război Mondial, a servit ca închisoare sub ocupație italiană.", "Insula este oficial parte a municipalității Herceg Novi.", "Recent, structura a fost transformată într-un resort de lux, stârnind dezbateri publice.", "Arhitectura circulară este un exemplu tipic pentru ingineria militară austro-ungară."],
      en: ["The fortress occupies almost the entirety of the small, circular island.", "It was built in 1853 to prevent enemy ships from entering the Bay of Kotor.", "During WWII, it was converted into a notorious concentration camp by fascist forces.", "The island features distinctive, monumental stone architecture typical of the Austro-Hungarian era.", "It has recently undergone significant redevelopment into a luxury hotel resort."]
    }, image: "/poi-images/me-mamula.webp"},
  {
    id: "me-san-giovanni",
    name: { de: "Festung San Giovanni", hu: "San Giovanni erőd", ro: "Fortăreața San Giovanni", en: "San Giovanni Fortress" },
    type: "historical",
    coords: [18.7750, 42.4267],
    parent: "ME-ALL",
    description: {
      de: "Alte Befestigungsanlage hoch über Kotor, die einen atemberaubenden Blick bietet.",
      hu: "Régi erődítmény Kotor fölött, amely lélegzetelállító kilátást nyújt.",
      ro: "Fortificație veche sus deasupra orașului Kotor, oferind priveliști uimitoare.",
      en: "Old fortification high above Kotor offering stunning views."
    },
    descriptionAdvanced: {
      de: "Die Festung San Giovanni thront hoch über der Altstadt von Kotor und bietet einen der spektakulärsten Ausblicke an der Adriaküste. Ihr Bau begann bereits in der illyrischen Zeit und wurde später von Byzantinern und Venezianern kontinuierlich zu einem nahezu uneinnehmbaren Bollwerk ausgebaut. Der steile Aufstieg über die alten Stadtmauern ist eine physische Herausforderung, die Besucher mit einer unvergleichlichen Aussicht auf die tiefblaue Bucht und die mittelalterliche Stadt belohnt. Geschichte K6 – Mittelalterliche Verteidigungssysteme.",
      hu: "A San Giovanni-erőd (Sveti Ivan) Kotor városa fölött, egy meredek sziklafalon magasodik, védelmezve a történelmi óvárost. Az erődítmény és a hozzá tartozó hatalmas falrendszer évszázadokon át épült bizánci, majd velencei irányítás alatt. A több mint ezer lépcsőfok megmászása fizikai kihívást jelent, de a csúcsról nyíló látvány a Kotori-öbölre és a kanyargós utcákra mindenért kárpótol. Az erőd a balkáni katonai építészet egyik legkiválóbb, máig fennmaradt példája. Történelem K6 – középkori védelem.",
      ro: "Fortăreața San Giovanni se înalță spectaculos deasupra orașului medieval Kotor, oferind una dintre cele mai impresionante priveliști din Balcani. Construcția a fost începută de iliri și extinsă semnificativ în timpul dominației venețiene pentru a proteja portul strategic. Pentru a ajunge la fortăreață, vizitatorii trebuie să urce peste 1350 de trepte abrupte, trecând pe lângă biserici vechi și ruine fortificate. Efortul este răsplătit cu o panoramă uluitoare a golfului și a acoperișurilor roșii ale orașului vechi.",
      en: "The San Giovanni Fortress stands majestically above the Old Town of Kotor, offering one of the most spectacular vantage points along the Adriatic coast. Its construction began during the Illyrian period and was continually expanded by the Byzantines and Venetians into a virtually impregnable stronghold. The steep ascent along the ancient city walls presents a physical challenge, rewarding climbers with unparalleled views of the deep blue bay and the medieval town below. History K6 - Medieval defensive systems."
    },
    factsAdvanced: {
      de: ["Die Festung liegt rund 280 Meter über dem Meeresspiegel.", "Über 1350 alte Steinstufen führen zur Hauptburg hinauf.", "Die byzantinische Anlage wurde unter Kaiser Justinian I. im 6. Jahrhundert verstärkt.", "Die Stadtmauern von Kotor, die zur Festung führen, sind 4,5 Kilometer lang.", "Von der Spitze aus überblickt man das steilste Fjordgebiet Südeuropas."],
      hu: ["Az erődítmény legmagasabb pontja 280 méterrel a tengerszint felett helyezkedik el.", "A csúcs eléréséhez több mint 1300 kőből rakott lépcsőfokot kell megmászni.", "A velenceiek a 15. században jelentősen megerősítették és kibővítették a védelmi rendszert.", "A falakon belül található egy 16. századi apró kápolna is."],
      ro: ["Fortăreața este situată la o altitudine de 280 de metri deasupra nivelului mării.", "Zidurile defensive se întind pe o distanță de peste 4,5 kilometri în jurul orașului.", "Traseul până la vârf necesită urcarea a peste 1350 de trepte din piatră.", "Fortificațiile au jucat un rol esențial în protejarea orașului împotriva atacurilor otomane.", "De-a lungul drumului către vârf, vizitatorii trec pe lângă Biserica 'Maica Domnului a Sănătății'.", "Poziția strategică a oferit o vedere panoramică completă asupra golfului Kotor."],
      en: ["The fortress sits at an elevation of 280 meters above sea level.", "Visitors must climb over 1,350 steep stone steps to reach the very top.", "The fortifications seamlessly integrate with the steep, natural limestone cliffs.", "The defensive walls stretch for approximately 4.5 kilometers around the city.", "It played a crucial role in protecting Kotor from numerous Ottoman sieges."]
    }, image: "/poi-images/me-san-giovanni.webp"},
  {
    id: "me-djurdjevica-tara",
    name: { de: "Đurđevića-Tara-Brücke", hu: "Đurđevića Tara híd", ro: "Podul Đurđevića Tara", en: "Đurđevića Tara Bridge" },
    type: "landmark",
    coords: [19.2953, 43.1506],
    parent: "ME-ALL",
    description: {
      de: "Beeindruckende Betonbogenbrücke über die Tara-Schlucht.",
      hu: "Lenyűgöző beton ívhíd a Tara-kanyon felett.",
      ro: "Un pod impresionant cu arce din beton peste Canionul Tara.",
      en: "Impressive concrete arch bridge over the Tara Canyon."
    },
    descriptionAdvanced: {
      de: "Die Đurđevića-Tara-Brücke ist ein beeindruckendes Meisterwerk der Ingenieurskunst und überspannt die dramatische, tiefe Schlucht der Tara. Bei ihrer Fertigstellung im Jahr 1940 galt sie als die größte Betonbogenbrücke Europas für den Fahrzeugverkehr. Ihr filigranes Design in einer rauen, unzugänglichen Gebirgslandschaft macht sie zu einem der meistfotografierten Wahrzeichen des Landes und einem perfekten Aussichtspunkt. Geographie K7 – Brückenbau und Schluchten.",
      hu: "A Đurđevića-Tara híd egy monumentális beton ívhíd, amely elegánsan ível át a mély Tara-kanyon felett. Amikor az 1940-es években felépült, a maga nemében Európa legnagyobb mérnöki teljesítményének számított. A híd nemcsak közlekedési szempontból volt kulcsfontosságú, hanem a második világháború alatt drámai események színhelye is lett, amikor egyik ívét a partizánok felrobbantották. Ma a híd népszerű turisztikai kilátópont és a kötélpályás (zipline) kalandok kiindulópontja. Földrajz K7 – hidak és mérnöki csodák.",
      ro: "Podul Đurđevića-Tara este o capodoperă a ingineriei civile, traversând spectaculos canionul râului Tara. La finalizarea sa în 1940, era cel mai mare pod cu arce din beton pentru trafic rutier din Europa. Designul său elegant, contrastând cu terenul muntos accidentat și inaccesibil, îl transformă într-unul dintre cele mai fotografiate monumente din Muntenegru, oferind o perspectivă unică asupra adâncimii și frumuseții naturale a canionului.",
      en: "The Đurđevića Tara Bridge is an astonishing masterpiece of civil engineering, elegantly spanning the dramatic and deep Tara River Canyon. Upon its completion in 1940, it held the title of the largest vehicular concrete arch bridge in all of Europe. Its delicate, soaring design contrasting with the rugged, inaccessible mountain terrain makes it one of the most photographed landmarks in Montenegro and an ideal observation point. Geography K7 - Bridge construction and canyons."
    },
    factsAdvanced: {
      de: ["Die Brücke erhebt sich 172 Meter über den Boden der Schlucht.", "Sie besteht aus fünf eleganten Betonbögen.", "Die Gesamtlänge des Bauwerks beträgt 365 Meter.", "Im Jahr 1942 wurde ein Brückenbogen gezielt gesprengt, um den Vormarsch feindlicher Truppen zu stoppen.", "Sie ist heute ein beliebter Ausgangspunkt für Zipline-Abenteuer und Rafting."],
      hu: ["A híd legmagasabb pontja 172 méterrel magasodik a Tara-folyó felett.", "Az építmény teljes hossza eléri a 365 métert, öt kecses ívre támaszkodva.", "A második világháború alatt az egyik tervező mérnök robbantotta fel az egyik ívet.", "A híd mellől indul Európa egyik leghosszabb és leggyorsabb drótkötélpályája."],
      ro: ["Podul se înalță la 172 de metri deasupra râului Tara.", "Structura este susținută de cinci arce elegante din beton.", "Lungimea totală a construcției este de 365 de metri.", "În 1942, un arc a fost distrus pentru a opri avansul trupelor inamice, fiind ulterior reconstruit.", "Podul a fost construit între anii 1937 și 1940.", "Astăzi, podul reprezintă punctul de plecare pentru aventuri de tip zipline."],
      en: ["The bridge stands an incredible 172 meters above the Tara River.", "The entire structure features five distinct, graceful concrete arches.", "The total length of the bridge measures 365 meters.", "During WWII, a section of the bridge was intentionally destroyed by partisans to halt enemy troops.", "It is now a prime starting point for thrilling zipline adventures across the canyon."]
    }, image: "/poi-images/me-djurdjevica-tara.webp"},
  {
    id: "me-cetinje-monastery",
    name: { de: "Kloster Cetinje", hu: "Cetinjei kolostor", ro: "Mănăstirea Cetinje", en: "Cetinje Monastery" },
    type: "historical",
    coords: [18.9222, 42.3875],
    parent: "ME-ALL",
    description: {
      de: "Bedeutendes serbisch-orthodoxes Kloster und Sitz der Metropolie von Montenegro.",
      hu: "Jelentős szerb ortodox kolostor, a montenegrói metropólia székhelye.",
      ro: "O mănăstire ortodoxă sârbă importantă și sediul Mitropoliei Muntenegrului.",
      en: "Significant Serbian Orthodox monastery and seat of the Metropolitanate of Montenegro."
    },
    descriptionAdvanced: {
      de: "Das Kloster Cetinje ist das historische und spirituelle Zentrum der montenegrinisch-orthodoxen Kirche, eingebettet in die alte königliche Hauptstadt. Es diente über Jahrhunderte als politischer und religiöser Sitz der Fürstbischöfe und ist ein Ort tiefer nationaler Verehrung. Das Kloster beherbergt unschätzbare Reliquien, darunter eine der wertvollsten Sammlungen frühchristlicher Artefakte in Europa, die die lange spirituelle Tradition des Landes dokumentieren. Geschichte K6 – Religiöses Erbe Montenegros.",
      hu: "A Cetinjei kolostor a montenegrói nemzet és az ortodox egyház történelmi, valamint szellemi központja. A hegyek között megbúvó Cetinje városában álló épületegyüttes évszázadokon át szolgált az uralkodó püspökök (vladikák) székhelyeként. Bár az oszmán támadások során többször lerombolták, mindig újjáépült, megőrizve a nemzet függetlenségi törekvéseit. A kolostorban ma páratlan értékű egyházi kincseket és fontos történelmi ereklyéket őriznek. Történelem K6 – egyházi történelem.",
      ro: "Mănăstirea Cetinje reprezintă centrul spiritual și istoric al Muntenegrului, situată în fosta capitală regală. De-a lungul secolelor, mănăstirea a servit drept sediu politic și religios pentru mitropoliții țării, fiind un simbol al rezistenței și al identității naționale. Complexul monahal adăpostește relicve sfinte de o importanță inestimabilă, inclusiv una dintre cele mai valoroase colecții de artefacte creștine timpurii din Europa, documentând tradiția spirituală profundă a poporului muntenegrean.",
      en: "The Cetinje Monastery represents the historic and spiritual epicenter of the Montenegrin Orthodox Church, beautifully situated in the old royal capital. For centuries, it functioned as the political and religious seat of the Prince-Bishops and remains a site of profound national reverence. The monastery safeguards priceless relics, including one of Europe's most valuable collections of early Christian artifacts, documenting the enduring spiritual tradition of the nation. History K6 - Religious heritage of Montenegro."
    },
    factsAdvanced: {
      de: ["Das Kloster wurde 1484 von Ivan Crnojević gegründet.", "Hier wird angeblich die rechte Hand von Johannes dem Täufer aufbewahrt.", "Das Gebäude wurde im Laufe der Geschichte mehrfach von den Osmanen zerstört.", "Es beherbergt einen Splitter des Wahren Kreuzes.", "Die erste montenegrinische Druckerei befand sich auf dem Klostergelände."],
      hu: ["Az eredeti kolostort Ivan Crnojević alapította a 15. század végén.", "Az épületben őrzik a hagyomány szerint Keresztelő Szent János jobb kezét.", "Itt működött a Balkán egyik első nyomdája a 15. század legvégén.", "A kolostor falai között nyugszik I. Péter montenegrói fejedelem."],
      ro: ["Mănăstirea a fost fondată în 1484 de Ivan Crnojević.", "Aici este păstrată, conform tradiției, mâna Sfântului Ioan Botezătorul.", "Complexul a fost distrus și reconstruit de mai multe ori de-a lungul istoriei din cauza conflictelor.", "Este sediul mitropoliei muntenegrene.", "Mănăstirea deține o colecție vastă de relicve și icoane prețioase.", "Prima tipografie din regiune a funcționat pe teritoriul mănăstirii."],
      en: ["The monastery was originally founded in 1484 by the ruler Ivan Crnojević.", "It reportedly houses the mummified right hand of Saint John the Baptist.", "The site contains a fragment believed to be from the True Cross.", "The first printing press in the Balkans was established within the monastery grounds.", "The complex has been destroyed and meticulously rebuilt multiple times throughout history."]
    }
  },
  {
    id: "me-moraca-monastery",
    name: { de: "Kloster Morača", hu: "Morača kolostor", ro: "Mănăstirea Morača", en: "Morača Monastery" },
    type: "historical",
    coords: [19.3908, 42.7667],
    parent: "ME-ALL",
    description: {
      de: "Mittelalterliches serbisch-orthodoxes Kloster aus dem Jahr 1252.",
      hu: "Középkori szerb ortodox kolostor, amely 1252-ben épült.",
      ro: "Mănăstire ortodoxă sârbă medievală fondată în 1252.",
      en: "Medieval Serbian Orthodox monastery founded in 1252."
    },
    descriptionAdvanced: {
      de: "Das Kloster Morača ist ein Juwel der mittelalterlichen serbisch-orthodoxen Architektur und liegt versteckt in der malerischen Schlucht des Flusses Morača. Es wurde im 13. Jahrhundert erbaut und ist besonders berühmt für seine gut erhaltenen, lebendigen Freskenzyklen, die zu den bedeutendsten Kunstwerken des Balkans zählen. Die ruhige und isolierte Lage machte das Kloster über Jahrhunderte zu einem wichtigen spirituellen Rückzugsort und Bildungszentrum. Geschichte K7 – Mittelalterliche Fresken.",
      hu: "A Morača-kolostor a Morača-folyó festői kanyonjában található, és Montenegró egyik legjelentősebb középkori ortodox műemléke. A 13. században alapított kolostoregyüttes különösen híres kiváló állapotban fennmaradt, élénk színű freskóiról, amelyek a középkori szerb-bizánci művészet remekművei. A zord hegyek között megbúvó békés kolostorudvar és a csobogó patak spirituális menedéket nyújtott az évszázadok során. A kolostor ma is működik, és a hívők mellett a művészettörténészek fontos zarándokhelye. Történelem K6 – középkori egyházművészet.",
      ro: "Mănăstirea Morača este o bijuterie a arhitecturii ortodoxe sârbe medievale, situată într-un cadru natural spectaculos în canionul râului Morača. Fondată în secolul al XIII-lea, mănăstirea este renumită pentru frescele sale vibrante, extrem de bine conservate, care reprezintă unele dintre cele mai importante opere de artă medievală din regiunea Balcanilor. Poziția sa izolată și liniștită a transformat-o timp de secole într-un sanctuar spiritual și un centru educațional vital.",
      en: "The Morača Monastery is a true jewel of medieval Serbian Orthodox architecture, peacefully hidden within the picturesque Morača River canyon. Constructed in the 13th century, it is especially renowned for its exceptionally well-preserved, vibrant fresco cycles that rank among the most significant artworks in the Balkans. Its tranquil and isolated location allowed the monastery to serve as a vital spiritual retreat and educational center for centuries. History K7 - Medieval frescoes."
    },
    factsAdvanced: {
      de: ["Das Kloster wurde im Jahr 1252 von Stefan Nemanjić gestiftet.", "Die Hauptkirche ist der Himmelfahrt der Jungfrau Maria gewidmet.", "Ein Fresko des Propheten Elia aus dem 13. Jahrhundert gehört zu den wertvollsten Schätzen.", "Die Architektur weist starke romanische Einflüsse auf.", "Das Klostergelände umfasst auch die kleine St. Nikolaus-Kapelle, die vollständig mit Fresken bedeckt ist."],
      hu: ["A kolostort 1252-ben alapította Stefan Vukanović, a Nemanjić-dinasztia tagja.", "A templom leghíresebb freskója Illés prófétát ábrázolja a sivatagban.", "A kolostor könyvtára ritka, kézzel írott és díszített középkori kódexeket őriz.", "Az épületegyüttest egy magas kőfal védi, amely egykor a támadások ellen szolgált."],
      ro: ["Mănăstirea a fost fondată în anul 1252.", "O parte semnificativă din frescele mănăstirii datează din secolul al XIII-lea.", "Biserica principală este construită într-un stil arhitectural cu influențe romanice.", "Mănăstirea este situată strategic pe o terasă deasupra râului Morača.", "Complexul monahal include și capela Sfântul Nicolae, complet decorată cu fresce.", "Mănăstirea a rămas un centru de învățământ și spiritualitate de-a lungul secolelor."],
      en: ["The monastery was founded in the year 1252 by Stefan Nemanjić.", "The main church is dedicated to the Assumption of the Virgin Mary.", "A 13th-century fresco depicting the Prophet Elijah is considered one of its greatest treasures.", "The architectural style exhibits strong Romanesque influences.", "The monastic complex includes a small St. Nicholas chapel completely covered in frescoes."]
    }, image: "/poi-images/me-moraca-monastery.webp"}
];

