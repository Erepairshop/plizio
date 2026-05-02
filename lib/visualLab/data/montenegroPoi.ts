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
      hu: "A Szkadari-tó a Balkán-félsziget legnagyobb tava, amely Montenegró és Albánia határán fekszik. Ez a lenyűgöző édesvízi ökoszisztéma Európa egyik legfontosabb madárrezervátuma, ahol a ritka borzas gödény is megtalálható. A víz felszínét tavirózsák borítják, míg a kis szigeteken ősi ortodox kolostorok bújnak meg. A tó körüli mocsaras vidékek és érintetlen természeti környezet páratlan élményt nyújtanak a természet szerelmeseinek. Földrajz K5 – vizes élőhelyek és ökoszisztémák.",
      ro: "Lacul Skadar este cel mai mare lac din Peninsula Balcanică, întinzându-se la granița dintre Muntenegru și Albania. Zona este un teritoriu protejat, cu o avifaună incomparabilă, insule plutitoare și mănăstiri istorice, oferind o experiență de neuitat pentru iubitorii naturii care vizitează această regiune.",
      en: "Skadar Lake is the largest freshwater lake on the Balkan Peninsula, shared between Montenegro and Albania. It serves as an incredibly vital natural habitat, boasting a unique ecosystem that is home to the rare Dalmatian pelican and numerous other bird species. The calm waters, dotted with vibrant water lilies and ancient island monasteries, offer visitors an unforgettable boat-riding experience. This protected national park is a masterpiece of biodiversity and natural conservation. Geography K5 - Wetlands and ecosystems."
    },
    factsAdvanced: {
      de: ["Der See variiert in seiner Größe zwischen 370 und 530 km².", "Er beheimatet über 280 verschiedene Vogelarten.", "Der montenegrinische Teil ist seit 1983 ein Nationalpark.", "Zahlreiche kleine Inseln beherbergen historische orthodoxe Klöster.", "Das Gewässer ist besonders fischreich, vor allem an Karpfen."],
      hu: ["A tó mérete a vízállástól függően 370 és 530 négyzetkilométer között változik.", "Több mint 280 madárfaj és 50 halfaj otthona a tó területe.", "A montenegrói rész 1983 óta nemzeti parki védelem alatt áll.", "Számos apró szigeten ősi szerb ortodox kolostorok találhatók."],
      ro: ["Suprafața lacului variază între 370 și 530 km².", "Este una dintre cele mai mari rezervații de păsări din Europa.", "Peste 280 de specii de păsări trăiesc în zona lacului.", "Pe insulele din lac se află numeroase mănăstiri antice.", "Apa lacului este bogată în resurse piscicole (de exemplu, crap).", "Partea de sud a lacului este un parc național muntenegrean."],
      en: ["The lake's surface area fluctuates between 370 and 530 square kilometers depending on the season.", "It provides a crucial habitat for more than 280 distinct bird species.", "The Montenegrin section was officially declared a National Park in 1983.", "Several small islands within the lake host historic Serbian Orthodox monasteries.", "The waters are renowned for their rich fish populations, particularly carp."]
    }
  },
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
      ro: "Durmitor este un lanț muntos și un parc național din nordul Muntenegrului, cunoscut pentru lacurile sale glaciare, canioanele adânci și vârfurile dramatice. Zona face parte din Patrimoniul Mondial UNESCO și oferă o gamă largă de activități sportive de iarnă și vară pentru vizitatorii care doresc să exploreze peisajele montane.",
      en: "Durmitor National Park, located in northern Montenegro, is a majestic mountain massif shaped by ancient glaciers and characterized by dramatic limestone peaks. The pristine alpine landscape features dense black pine forests and hidden glacial lakes, making it a premier destination for hikers and mountaineers. Recognized as a UNESCO World Heritage site, it perfectly embodies the wild, rugged beauty of the Balkan Peninsula. Geography K6 - Alpine landscapes."
    },
    factsAdvanced: {
      de: ["Das Massiv umfasst 22 Gipfel, die über 2000 Meter hoch sind.", "Der höchste Punkt ist der Bobotov Kuk mit 2522 Metern.", "Im Park liegen 18 Gletscherseen, die 'Bergaugen' genannt werden.", "Der Nationalpark erstreckt sich über eine Fläche von 390 km².", "Er ist ein Zufluchtsort für Braunbären und Wölfe."],
      hu: ["A hegységben 48 olyan csúcs található, amely meghaladja a 2000 méteres magasságot.", "A legmagasabb pontja a Bobotov Kuk, amely 2523 méter magas.", "A park 18 gleccsertavát a helyiek hegyi szemeknek hívják.", "A Durmitor Nemzeti Park területén ritka barna medvék és farkasok is élnek."],
      ro: ["Durmitor include 22 de vârfuri montane de peste 2000 de metri.", "Suprafața parcului național este de 390 km².", "Aici se află vârful Bobotov Kuk, de 2522 de metri.", "Parcul include 18 lacuri glaciare (ochiuri de munte).", "Canionul Tara este unul dintre cele mai adânci din lume.", "Zona este bogată în floră și faună specială."],
      en: ["The highest peak in the Durmitor massif is Bobotov Kuk, reaching 2,522 meters.", "The park encompasses 18 distinct glacial lakes, affectionately called 'mountain eyes'.", "Durmitor was officially designated as a UNESCO World Heritage site in 1980.", "The region hosts some of the deepest and most spectacular river canyons in Europe.", "Winter months transform the area into Montenegro's leading ski resort destination."]
    }
  },
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
      ro: "Canionul Tara este cel mai adânc din Europa și unul dintre cele mai importante din lume, săpat de apele cristaline ale râului Tara prin munți. Frumusețea naturală a canionului, posibilitățile de rafting și mediul sălbatic fac din acesta una dintre cele mai mari atracții naturale ale Muntenegrului.",
      en: "The Tara River Canyon is a breathtaking natural wonder, widely recognized as the deepest and longest canyon in Europe. Often referred to as the 'Tear of Europe', the emerald-green Tara River has carved its way through the limestone mountains over millennia, creating a spectacular and dramatic ecosystem. Today, it is a world-class destination for adventurers seeking thrilling white-water rafting experiences amidst unparalleled natural scenery. Geography K7 - River erosion and canyons."
    },
    factsAdvanced: {
      de: ["Die Schlucht erreicht eine maximale Tiefe von rund 1300 Metern.", "Sie erstreckt sich über eine Länge von etwa 82 Kilometern.", "Das Wasser der Tara ist so sauber, dass es an vielen Stellen trinkbar ist.", "Die Schlucht ist ein integraler Bestandteil des Durmitor-Nationalparks.", "Der Tara-Fluss überwindet auf seinem Weg ein beachtliches Gefälle."],
      hu: ["A szurdok maximális mélysége eléri az 1300 métert a környező hegyekhez képest.", "A kanyon hossza mintegy 82 kilométeren keresztül kanyarog a hegyek között.", "A Tara-folyó vize olyan tiszta, hogy számos szakaszon emberi fogyasztásra is alkalmas.", "A vadvízi evezés (rafting) során a sportolók számos zúgón kelnek át."],
      ro: ["Adâncimea canionului atinge 1300 de metri.", "Canionul are o lungime de 82 km.", "Râul Tara este supranumit 'Lacrima Europei'.", "Canionul face parte din Parcul Național Durmitor.", "Raftingul este cea mai populară activitate de aici.", "Apa din canion este de o puritate potabilă."],
      en: ["The canyon reaches an astonishing maximum depth of 1,300 meters.", "It extends for 82 kilometers, making it the longest canyon in Europe.", "The Tara River is famous for its exceptionally clear and drinkable water.", "The canyon forms a significant part of the Durmitor National Park.", "It is one of the most popular white-water rafting destinations in the entire world."]
    }
  },
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
      de: "Das Prokletije-Gebirge, oft auch als die 'Verwunschenen Berge' bezeichnet, ist das am schwersten zugängliche und dramatischste Gebirgsmassiv des Balkans. Mit seinen schroffen, steil aufragenden Felsspitzen und tiefen, von Gletschern geformten Tälern bildet es eine natürliche Grenze zu Albanien und Kosovo. Dieses wilde Terrain bietet erfahrenen Alpinisten und Naturliebhabern eine fast völlig unberührte, alpine Wildnis fernab des Massentourismus. Geographie K7 – Karstgebirge und Grenzen.",
      hu: "A Prokletije, vagyis az 'Elátkozott-hegység' a Balkán-félsziget egyik legvadabb és legnehezebben járható hegyvidéke. A Montenegró és Albánia határán fekvő masszívum drámai mészkőcsúcsokkal, mély völgyekkel és meredek sziklafalakkal rendelkezik. Ez a viszonylag elzárt, érintetlen terület a tömegturizmustól mentes, valódi alpesi vadont kínál az idelátogató kalandoroknak. A terület növény- és állatvilága rendkívül gazdag, és a túrázók számára kihívást jelentő útvonalakat rejt. Földrajz K7 – karszthegységek és országhatárok.",
      ro: "Prokletije, cunoscut și sub numele de 'Munții Blestemați', este un lanț muntos dramatic situat la granița dintre Muntenegru și Albania. Cu vârfurile sale stâncoase abrupte, văile adânci și peisajele neatinse, reprezintă unul dintre cele mai populare, dar și dificile terenuri pentru drumeți și alpiniști din Balcani.",
      en: "The Prokletije Mountains, often translated as the 'Accursed Mountains', represent the most inaccessible and dramatic mountain range in the Balkans. With its jagged, towering peaks and deep, glacially carved valleys, it forms a formidable natural border between Montenegro, Albania, and Kosovo. This wild, untamed terrain offers experienced alpinists and nature enthusiasts an almost entirely untouched alpine wilderness far from mass tourism. Geography K7 - Karst mountains and borders."
    },
    factsAdvanced: {
      de: ["Prokletije bildet den höchsten Teil der Dinarischen Alpen.", "Der höchste Gipfel in Montenegro ist die Zla Kolata mit 2534 Metern.", "Das Gebirge ist bekannt für extrem raue und schroffe Felsformationen.", "Es ist einer der jüngsten Nationalparks Montenegros, gegründet im Jahr 2009.", "In den abgelegenen Tälern leben noch seltene Luchs-Populationen."],
      hu: ["Ez a hegyvonulat alkotja a Dinári-hegység legmagasabb és legdélebbi szakaszát.", "Itt emelkedik Montenegró legmagasabb csúcsa, a 2534 méteres Zla Kolata.", "A hegyvidék a nevét a zord, veszélyes és nehezen járható terepviszonyokról kapta.", "A Prokletije Nemzeti Park az ország egyik legfiatalabb védett területe."],
      ro: ["Prokletije este partea cea mai sudică și mai înaltă a Munților Dinarici.", "Cel mai înalt vârf este Zla Kolata (2534 m).", "Lanțul muntos este faimos pentru peisajele sale dramatice și stâncoase.", "Denumirea ('munții blestemați') se referă la dificultatea de accesibilitate a zonei.", "În zonă se găsesc numeroase lacuri alpine.", "Parcul Național Prokletije face parte din una dintre ultimele adevărate sălbăticii din Balcani."],
      en: ["The highest peak in the Montenegrin section is Zla Kolata at 2,534 meters.", "Prokletije was officially declared a National Park in Montenegro in 2009.", "The mountain range is characterized by severe karst topography and sharp ridges.", "It remains one of the least explored and most rugged regions in Europe.", "The area is incredibly rich in endemic flora and diverse wildlife."]
    }
  },
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
      ro: "Golful Kotor este un golf spectaculos în partea de sud-est a Mării Adriatice, numit adesea cel mai sudic fiord al Europei. Întâlnirea dintre versanții muntoși abrupți și marea cristalină oferă un spectacol inegalabil, care atrage vizitatori de secole.",
      en: "The Bay of Kotor, frequently described as Europe's southernmost fjord, is a stunning marine inlet that cuts deep into the Montenegrin mainland. Surrounded by steep, dark mountains that reflect beautifully in the deep blue waters, the region offers an unparalleled maritime landscape. Its naturally protected position made it a strategically vital seaport for centuries, serving as a historic melting pot of Mediterranean cultures and empires. Geography K6 - Marine bays and coastlines."
    },
    factsAdvanced: {
      de: ["Die Bucht reicht fast 28 Kilometer tief ins Landesinnere.", "Sie besteht aus vier miteinander verbundenen Teilbecken.", "Das Gebiet wurde von der UNESCO zum Weltkulturerbe erklärt.", "Zahlreiche historische Seefahrerstädte wie Kotor und Perast säumen das Ufer.", "Das tiefe Wasser ermöglicht das Einlaufen von großen Kreuzfahrtschiffen."],
      hu: ["Az öböl több mint 28 kilométer mélyen hatol be a meredek montenegrói szárazföldbe.", "A vízfelület négy nagyobb, egymással szűk csatornákon összeköttetésben álló medencéből áll.", "A természeti és történelmi értékek miatt az UNESCO Világörökség részét képezi.", "A mély víz lehetővé teszi, hogy hatalmas tengerjáró hajók is kikössenek az óvárosoknál."],
      ro: ["Golful este format din mai multe golfuri mai mici (ex: Kotor, Risan, Tivat).", "Lungimea golfului atinge 28 de kilometri.", "Zona face parte din patrimoniul mondial UNESCO.", "Pe coasta sa se află numeroase orașe istorice (Kotor, Perast).", "Coasta golfului este bogată în vegetație mediteraneană.", "În interiorul golfului se află mai multe insule (ex: Madonna de pe Stâncă)."],
      en: ["The bay is actually a submerged river canyon, technically known as a ria.", "It consists of four interconnected smaller gulfs forming a unique shape.", "The region has been inhabited since ancient times, featuring Illyrian and Roman ruins.", "The bay's historical and cultural significance earned it a UNESCO World Heritage status.", "It is surrounded by the towering Orjen and Lov\u0107en mountain ranges."]
    }
  },
  // HISTORY / LANDMARKS
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
      ro: "Madonna de pe Stâncă (Gospa od Škrpjela) este o biserică construită pe o insulă artificială în golful Kotor, vis-à-vis de orașul Perast. Conform legendei, insula a fost construită de pescarii locali de-a lungul secolelor, după ce au găsit icoana Maicii Domnului pe un recif stâncos.",
      en: "Our Lady of the Rocks (Gospa od \u0160krpjela) is a captivating artificial island located just off the coast of the historic town of Perast in the Bay of Kotor. According to local legend, the island was meticulously constructed over centuries by seafarers who threw rocks into the sea after safely returning from perilous voyages. The small Catholic church situated on the island houses magnificent Baroque paintings and stands as a vibrant symbol of the region's deep maritime traditions. History K7 - Maritime legends and faith."
    },
    factsAdvanced: {
      de: ["Die Insel ist komplett menschengemacht und besteht aus versenkten Steinen und alten Schiffswracks.", "Die heutige Kirche wurde im Jahr 1630 erbaut.", "Der Brauch des Steinewerfens (Fašinada) wird noch heute jährlich am 22. Juli gefeiert.", "Im Inneren befinden sich 68 Gemälde des Barockmalers Tripo Kokolja.", "Die Kirche besitzt einen beeindruckenden Altar aus feinstem Marmor."],
      hu: ["A szigetet teljes egészében emberek építették kövek és régi hajóroncsok elsüllyesztésével.", "A templomban Tripo Kokolja barokk festőművész 68 lenyűgöző alkotása található.", "A Fašinada nevű ünnep során a helyiek ma is köveket dobnak a sziget köré minden év júliusában.", "A templom oltára a legfinomabb itáliai márványból készült."],
      ro: ["Insula a fost construită artificial prin scufundarea de pietre.", "Biserica există din secolul al XV-lea, actuala clădire datând din secolul al XVII-lea.", "În biserică funcționează un muzeu.", "Insula a fost creată de pescarii locali.", "Legendele spun că pescarii aruncau o piatră în mare de fiecare dată când se întorceau în siguranță.", "Biserica este faimoasă pentru picturile sale din secolul al XVII-lea."],
      en: ["The island is entirely man-made, built upon sunken old ships and stones.", "The present-day church was originally constructed in the year 1630.", "An annual tradition called Fa\u0161inada involves locals throwing rocks into the sea every July 22.", "The church's interior is decorated with 68 paintings by the famous Baroque artist Tripo Kokolja.", "The church features a magnificent altar crafted from the finest imported marble."]
    }
  },
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
      ro: "Mausoleul lui Njegoš este situat pe vârful muntelui Lovćen și servește drept loc de veci pentru conducătorul și poetul muntenegrean Petar II. Petrović-Njegoš. Monumentul impunător impresionează nu doar prin arhitectura sa, ci și prin panorama spectaculoasă care se deschide către întreaga țară.",
      en: "Perched dramatically on the summit of Mount Lov\u0107en, this monumental mausoleum is dedicated to Montenegro's most revered poet and Prince-Bishop, Petar II Petrovi\u0107-Njego\u0161. This architecturally stunning structure serves as a site of national pilgrimage, offering sweeping panoramic views that extend across the entire country and, on clear days, even to Italy. It powerfully embodies the pride, resilience, and cultural identity of the Montenegrin people set against a harsh, mountainous backdrop. History K8 - National identity and icons."
    },
    factsAdvanced: {
      de: ["Das Mausoleum liegt auf einer Höhe von 1657 Metern über dem Meeresspiegel.", "Es wurde vom weltbekannten kroatischen Bildhauer Ivan Meštrović entworfen.", "Um das Gebäude zu erreichen, müssen 461 Treppenstufen durch einen Tunnel erklommen werden.", "Die Decke der Krypta ist mit rund 200.000 vergoldeten Mosaiksteinen verziert.", "Zwei riesige Karyatiden aus schwarzem Granit bewachen den Eingang."],
      hu: ["A mauzóleum tekintélyt parancsoló 1657 méteres tengerszint feletti magasságban épült.", "A hegycsúcs eléréséhez egy alagútban pontosan 461 lépcsőfokot kell megmászni.", "A kripta mennyezetét lenyűgöző, több mint 200 000 aranyozott mozaikdarab borítja.", "A bejáratot két hatalmas, fekete gránitból faragott női alak (kariatida) őrzi."],
      ro: ["Mausoleul este situat la o altitudine de 1657 de metri.", "Petar II. Petrović-Njegoš a fost conducător și poet.", "Mausoleul a fost proiectat de sculptorul Ivan Meštrović.", "Peste 400 de trepte duc către vârf.", "În zilele senine, întreg Muntenegrul poate fi văzut din mausoleu.", "Monumentul funerar este un simbol al identității naționale a țării."],
      en: ["The mausoleum is located at an impressive elevation of 1,657 meters above sea level.", "It was designed by the internationally renowned Croatian sculptor Ivan Me\u0161trovi\u0107.", "Visitors must climb exactly 461 steps through a tunnel to reach the monument.", "The ceiling of the crypt is adorned with approximately 200,000 gold-plated mosaic tiles.", "The entrance is guarded by two massive caryatids carved from black granite."]
    }
  },
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
      ro: "Mamula este o mică insulă nelocuită situată la intrarea în Golful Kotor. Pe insulă se află o fortăreață impresionantă construită în secolul al XIX-lea de generalul austro-ungar Lazar Mamula. De-a lungul istoriei sale zbuciumate, fortăreața a servit ca punct de apărare și, mai târziu, ca închisoare în timpul celor două războaie mondiale. Astăzi, insula atrage vizitatori datorită frumuseții sale naturale aspre și ruinelor sale fascinante.",
      en: "Mamula Island, situated at the entrance to the Bay of Kotor, features a massive, circular fortress constructed in the 19th century by the Austro-Hungarian general Lazar Mamula. Originally designed as a strategic military outpost to defend the coastal waters, the fortress took on a dark history when it was used as a prison camp during World War II. Today, the island stands as a fascinating, albeit solemn, testament to the complex military history of the Adriatic region. History K7 - Adriatic fortifications."
    },
    factsAdvanced: {
      de: ["Die Festung nimmt fast die gesamte Fläche der kleinen Insel ein.", "Sie wurde im Jahr 1853 errichtet, um die Bucht vor Seeangriffen zu schützen.", "Im Zweiten Weltkrieg diente sie als faschistisches Gefängnis unter italienischer Kontrolle.", "Die Insel gehört offiziell zum Küstenort Herceg Novi.", "Mamula wurde kürzlich in ein umstrittenes Luxusresort umgewandelt."],
      hu: ["A sziget olyannyira kicsi, hogy az erődítmény gyakorlatilag lefedi a teljes területét.", "Az épületet Lazar Mamula osztrák-magyar tábornok parancsára építették.", "A második világháború alatt hírhedt börtöntáborként funkcionált.", "Az erőd stratégiai elhelyezkedése miatt az öböl bejáratának kulcsfontosságú védelmi pontja volt."],
      ro: ["Insula are o formă circulară cu un diametru de aproximativ 200 de metri.", "Fortăreața a fost construită în 1853.", "În timpul celui de-al Doilea Război Mondial, a fost folosită ca lagăr de concentrare.", "Insula este înconjurată de ape adânci și limpezi.", "Numele oficial al insulei este Lastavica."],
      en: ["The fortress occupies almost the entirety of the small, circular island.", "It was built in 1853 to prevent enemy ships from entering the Bay of Kotor.", "During WWII, it was converted into a notorious concentration camp by fascist forces.", "The island features distinctive, monumental stone architecture typical of the Austro-Hungarian era.", "It has recently undergone significant redevelopment into a luxury hotel resort."]
    }
  },
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
      ro: "Fortăreața San Giovanni se înalță spectaculos deasupra orașului medieval Kotor, oferind una dintre cele mai impresionante priveliști din Balcani. Construcția a fost începută de iliri și extinsă semnificativ în timpul dominației venețiene. Pentru a ajunge la fortăreață, vizitatorii trebuie să urce peste 1350 de trepte abrupte, trecând pe lângă biserici vechi și ruine. Efortul este răsplătit cu o panoramă uluitoare a golfului și a acoperișurilor roșii ale orașului vechi.",
      en: "The San Giovanni Fortress stands majestically above the Old Town of Kotor, offering one of the most spectacular vantage points along the Adriatic coast. Its construction began during the Illyrian period and was continually expanded by the Byzantines and Venetians into a virtually impregnable stronghold. The steep ascent along the ancient city walls presents a physical challenge, rewarding climbers with unparalleled views of the deep blue bay and the medieval town below. History K6 - Medieval defensive systems."
    },
    factsAdvanced: {
      de: ["Die Festung liegt rund 280 Meter über dem Meeresspiegel.", "Über 1350 alte Steinstufen führen zur Hauptburg hinauf.", "Die byzantinische Anlage wurde unter Kaiser Justinian I. im 6. Jahrhundert verstärkt.", "Die Stadtmauern von Kotor, die zur Festung führen, sind 4,5 Kilometer lang.", "Von der Spitze aus überblickt man das steilste Fjordgebiet Südeuropas."],
      hu: ["Az erődítmény legmagasabb pontja 280 méterrel a tengerszint felett helyezkedik el.", "A csúcs eléréséhez több mint 1300 kőből rakott lépcsőfokot kell megmászni.", "A velenceiek a 15. században jelentősen megerősítették és kibővítették a védelmi rendszert.", "A falakon belül található egy 16. századi apró kápolna is."],
      ro: ["Fortăreața se află la o altitudine de 280 de metri deasupra nivelului mării.", "Zidurile de apărare au fost extinse între secolele al IX-lea și al XIX-lea.", "Pentru a ajunge în vârf sunt necesare peste 1350 de trepte.", "Ocupă o poziție strategică pentru apărarea golfului Kotor.", "Pe drum se află Biserica Doamna Noastră a Sănătății, din secolul al XV-lea."],
      en: ["The fortress sits at an elevation of 280 meters above sea level.", "Visitors must climb over 1,350 steep stone steps to reach the very top.", "The fortifications seamlessly integrate with the steep, natural limestone cliffs.", "The defensive walls stretch for approximately 4.5 kilometers around the city.", "It played a crucial role in protecting Kotor from numerous Ottoman sieges."]
    }
  },
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
      ro: "Podul Đurđevića-Tara este un pod impresionant din beton, arcuit, care traversează canionul râului Tara și reprezintă una dintre cele mai importante atracții ale zonei. Construit în anii 1940, podul a fost o realizare arhitecturală deosebită pentru acea vreme, iar astăzi servește ca punct de belvedere asupra frumuseții canionului.",
      en: "The \u0110ur\u0111evi\u0107a Tara Bridge is an astonishing masterpiece of civil engineering, elegantly spanning the dramatic and deep Tara River Canyon. Upon its completion in 1940, it held the title of the largest vehicular concrete arch bridge in all of Europe. Its delicate, soaring design contrasting with the rugged, inaccessible mountain terrain makes it one of the most photographed landmarks in Montenegro and an ideal observation point. Geography K7 - Bridge construction and canyons."
    },
    factsAdvanced: {
      de: ["Die Brücke erhebt sich 172 Meter über den Boden der Schlucht.", "Sie besteht aus fünf eleganten Betonbögen.", "Die Gesamtlänge des Bauwerks beträgt 365 Meter.", "Im Jahr 1942 wurde ein Brückenbogen gezielt gesprengt, um den Vormarsch feindlicher Truppen zu stoppen.", "Sie ist heute ein beliebter Ausgangspunkt für Zipline-Abenteuer und Rafting."],
      hu: ["A híd legmagasabb pontja 172 méterrel magasodik a Tara-folyó felett.", "Az építmény teljes hossza eléri a 365 métert, öt kecses ívre támaszkodva.", "A második világháború alatt az egyik tervező mérnök robbantotta fel az egyik ívet.", "A híd mellől indul Európa egyik leghosszabb és leggyorsabb drótkötélpályája."],
      ro: ["Podul se întinde la o înălțime de 172 de metri deasupra canionului Tara.", "Structura este formată din cinci arce.", "Podul are o lungime de 365 de metri.", "Construcția s-a desfășurat între anii 1937 și 1940.", "Podul a fost parțial distrus într-o explozie în 1942, apoi reconstruit.", "Zona este o bază populară pentru rafting."],
      en: ["The bridge stands an incredible 172 meters above the Tara River.", "The entire structure features five distinct, graceful concrete arches.", "The total length of the bridge measures 365 meters.", "During WWII, a section of the bridge was intentionally destroyed by partisans to halt enemy troops.", "It is now a prime starting point for thrilling zipline adventures across the canyon."]
    }
  },
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
      ro: "Mănăstirea Cetinje este sediul bisericii ortodoxe muntenegrene, situată în centrul istoric al orașului. De secole, aceasta reprezintă centrul spiritual al statalității și bisericii din Muntenegru, păstrând numeroase relicve sfinte și comori istorice neprețuite.",
      en: "The Cetinje Monastery represents the historic and spiritual epicenter of the Montenegrin Orthodox Church, beautifully situated in the old royal capital. For centuries, it functioned as the political and religious seat of the Prince-Bishops and remains a site of profound national reverence. The monastery safeguards priceless relics, including one of Europe's most valuable collections of early Christian artifacts, documenting the enduring spiritual tradition of the nation. History K6 - Religious heritage of Montenegro."
    },
    factsAdvanced: {
      de: ["Das Kloster wurde 1484 von Ivan Crnojević gegründet.", "Hier wird angeblich die rechte Hand von Johannes dem Täufer aufbewahrt.", "Das Gebäude wurde im Laufe der Geschichte mehrfach von den Osmanen zerstört.", "Es beherbergt einen Splitter des Wahren Kreuzes.", "Die erste montenegrinische Druckerei befand sich auf dem Klostergelände."],
      hu: ["Az eredeti kolostort Ivan Crnojević alapította a 15. század végén.", "Az épületben őrzik a hagyomány szerint Keresztelő Szent János jobb kezét.", "Itt működött a Balkán egyik első nyomdája a 15. század legvégén.", "A kolostor falai között nyugszik I. Péter montenegrói fejedelem."],
      ro: ["Mănăstirea a fost fondată în 1484 de Ivan Crnojević.", "Aici este păstrată mâna Sfântului Ioan Botezătorul.", "Mănăstirea a fost distrusă de mai multe ori de-a lungul istoriei.", "Aici se află sediul mitropoliei muntenegrene.", "Între zidurile mănăstirii sunt păstrate multe icoane prețioase.", "În curtea mănăstirii se află o cruce de piatră din secolul al XV-lea."],
      en: ["The monastery was originally founded in 1484 by the ruler Ivan Crnojevi\u0107.", "It reportedly houses the mummified right hand of Saint John the Baptist.", "The site contains a fragment believed to be from the True Cross.", "The first printing press in the Balkans was established within the monastery grounds.", "The complex has been destroyed and meticulously rebuilt multiple times throughout history."]
    }
  },
  {
    id: "me-king-nikola-palace",
    name: { de: "Palast von König Nikola", hu: "Nikola király palotája", ro: "Palatul Regelui Nikola", en: "King Nikola's Palace" },
    type: "landmark",
    coords: [18.9236, 42.3867],
    parent: "ME-ALL",
    description: {
      de: "Ehemalige Residenz in Cetinje, die heute das Nationalmuseum beherbergt.",
      hu: "Egykori rezidencia Cetinjében, amely ma a Nemzeti Múzeumnak ad otthont.",
      ro: "Fosta reședință din Cetinje, care găzduiește acum Muzeul Național.",
      en: "Former residence in Cetinje that now houses the National Museum."
    },
    descriptionAdvanced: {
      de: "Der Palast von König Nikola in Cetinje war die offizielle Residenz des letzten Monarchen von Montenegro und spiegelt die glanzvolle Zeit des späten 19. Jahrhunderts wider. Das elegante Gebäude im europäischen Stil ist heute das Nationalmuseum und bewahrt königliche Möbel, Waffen und historische Dokumente. Es bietet einen faszinierenden Einblick in das höfische Leben und die geschickte Diplomatie eines kleinen Balkanstaates auf der europäischen Bühne. Geschichte K8 – Europäische Monarchien.",
      hu: "Nikola király palotája Cetinjében az utolsó montenegrói uralkodó rezidenciájaként szolgált a 19. és 20. század fordulóján. Az elegáns, piros homlokzatú épület a korszak európai uralkodói stílusát tükrözi, ötvözve a helyi hagyományokat a nyugati diplomáciai ízléssel. Ma a palota nemzeti múzeumként működik, ahol a látogatók megtekinthetik az egykori királyi család bútorait, fegyvereit és személyes tárgyait. A kiállítások hiteles képet adnak Montenegró független királyságának mindennapjairól. Történelem K8 – 19. századi monarchiák.",
      ro: "Palatul Regelui Nikola din Cetinje a fost reședința familiei regale muntenegrene și reprezintă o mărturie a istoriei naționale. Construit la sfârșitul secolului al XIX-lea, clădirea elegantă găzduiește astăzi Muzeul Național al Muntenegrului. Aici sunt expuse obiecte personale, mobilier de epocă, arme și decorații care reflectă viața curții regale. Vizitarea palatului oferă o perspectivă fascinantă asupra tranziției Muntenegrului de la principat la regat.",
      en: "King Nikola's Palace in Cetinje served as the official residence for Montenegro's last monarch, perfectly reflecting the elegant, glamorous era of the late 19th century. Today, this European-style building operates as the National Museum, preserving an extensive collection of royal furniture, weaponry, and vital historical documents. It provides visitors with a fascinating glimpse into the courtly life and the astute diplomacy of a small Balkan state navigating the European stage. History K8 - European monarchies."
    },
    factsAdvanced: {
      de: ["Der Palast wurde 1867 im architektonischen Jugendstil errichtet.", "König Nikola I. herrschte von 1860 bis 1918.", "Das Museum beherbergt eine umfangreiche Sammlung von Originalwaffen.", "Zahlreiche Staatsgeschenke europäischer Königshäuser sind hier ausgestellt.", "Der Palast war das Zentrum der politischen Entscheidungen Montenegros."],
      hu: ["Az épületet 1867-ben emelték a Petrović-Njegoš dinasztia számára.", "A palota múzeumában több ezer történelmi fegyver és diplomáciai ajándék található.", "Az épület körüli gondozott parkban számos külföldi követség épülete állt.", "A palota adott otthont Montenegró legfontosabb diplomáciai fogadásainak az első világháborúig."],
      ro: ["Palatul a fost construit în anul 1867.", "A servit drept reședință regală până în 1916.", "Stilul arhitectural îmbină elemente neoclasice și tradiționale.", "Găzduiește în prezent departamentul istoric al Muzeului Național.", "Sunt expuse daruri primite de la alte case regale europene."],
      en: ["The palace was constructed in 1867 following modern European architectural trends.", "King Nikola I ruled Montenegro for over 50 years, primarily from this residence.", "The museum features an impressive collection of international diplomatic gifts.", "The interior displays original furnishings, maintaining the authentic royal atmosphere.", "The palace grounds include carefully curated gardens in the French style."]
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
      ro: "Mănăstirea Morača este o mănăstire ortodoxă sârbă medievală, situată în canionul râului Morača. Construită în secolul al XIII-lea, frescele și soluțiile arhitecturale ale mănăstirii reprezintă una dintre cele mai importante moșteniri culturale ale acelei epoci în Muntenegru.",
      en: "The Mora\u010da Monastery is a true jewel of medieval Serbian Orthodox architecture, peacefully hidden within the picturesque Mora\u010da River canyon. Constructed in the 13th century, it is especially renowned for its exceptionally well-preserved, vibrant fresco cycles that rank among the most significant artworks in the Balkans. Its tranquil and isolated location allowed the monastery to serve as a vital spiritual retreat and educational center for centuries. History K7 - Medieval frescoes."
    },
    factsAdvanced: {
      de: ["Das Kloster wurde im Jahr 1252 von Stefan Nemanjić gestiftet.", "Die Hauptkirche ist der Himmelfahrt der Jungfrau Maria gewidmet.", "Ein Fresko des Propheten Elia aus dem 13. Jahrhundert gehört zu den wertvollsten Schätzen.", "Die Architektur weist starke romanische Einflüsse auf.", "Das Klostergelände umfasst auch die kleine St. Nikolaus-Kapelle, die vollständig mit Fresken bedeckt ist."],
      hu: ["A kolostort 1252-ben alapította Stefan Vukanović, a Nemanjić-dinasztia tagja.", "A templom leghíresebb freskója Illés prófétát ábrázolja a sivatagban.", "A kolostor könyvtára ritka, kézzel írott és díszített középkori kódexeket őriz.", "Az épületegyüttest egy magas kőfal védi, amely egykor a támadások ellen szolgált."],
      ro: ["Mănăstirea a fost fondată în 1252.", "O parte din fresce datează din secolul al XIII-lea.", "Mănăstirea a fost construită pe o terasă deasupra râului Morača.", "Biserica este o clădire cu o singură navă, în stil romanic.", "Pe teritoriul mănăstirii se află un complex format din mai multe clădiri.", "Locația este situată într-un cadru liniștit și pitoresc."],
      en: ["The monastery was founded in the year 1252 by Stefan Nemanji\u0107.", "The main church is dedicated to the Assumption of the Virgin Mary.", "A 13th-century fresco depicting the Prophet Elijah is considered one of its greatest treasures.", "The architectural style exhibits strong Romanesque influences.", "The monastic complex includes a small St. Nicholas chapel completely covered in frescoes."]
    }
  },
  // REGIONAL POIS (2 per region)
  // ME-001: Herceg Novi
  {
    id: "me-001-city",
    name: { de: "Herceg Novi", hu: "Herceg Novi", ro: "Herceg Novi", en: "Herceg Novi" },
    type: "city",
    coords: [18.5375, 42.4531],
    parent: "ME-001",
    description: {
      de: "Eine Küstenstadt am Eingang der Bucht von Kotor.",
      hu: "Tengerparti város a Kotori-öböl bejáratánál.",
      ro: "Un oraș de coastă la intrarea în Golful Kotor.",
      en: "A coastal town located at the entrance to the Bay of Kotor."
    },
    facts: {
      de: ["Bekannt für seine vielen Treppen.", "Heimat der Festung Forte Mare.", "Berühmt für das Mimosenfestival.", "Tor zur Bucht von Kotor."],
      hu: ["A 'lépcsők városaként' is ismert.", "Itt található a Forte Mare erőd.", "Híres a Mimóza-fesztiválról.", "A Kotori-öböl bejárata."],
      ro: ["Cunoscut sub numele de „orașul scărilor”.", "Găzduiește fortăreața Forte Mare.", "Faimos pentru Festivalul Mimozelor.", "Poarta către Golful Kotor."],
      en: ["Known as the 'city of stairs'.", "Home to the Forte Mare fortress.", "Famous for the Mimosa Festival.", "The gateway to the Bay of Kotor."]
    },
    descriptionAdvanced: {
      de: "Herceg Novi ist als die 'Stadt der Sonne' bekannt und fungiert als botanischer Garten der Bucht von Kotor. Die Küstenstadt wurde stark von venezianischen, osmanischen und spanischen Einflüssen geprägt, was sich in ihren zahlreichen Festungen widerspiegelt. Die mediterrane Vegetation, das milde Klima und die charmante Altstadt mit endlosen Treppen machen sie zu einem einzigartigen Küstenort. Geographie K6 – Mediterrane Hafenstädte.",
      hu: "Herceg Novi egy napfényes tengerparti város a Kotori-öböl bejáratánál, amelyet buja mediterrán növényzet és történelmi erődítmények jellemeznek. A várost gyakran a 'lépcsők városának' nevezik a domboldalon kanyargó végtelen kőlépcsői miatt. Történelme során spanyol, velencei és oszmán uralom alatt is állt, ami különleges építészeti keveredést eredményezett. Herceg Novi kiváló klímája miatt egész évben vonzza a látogatókat és a művészeket. Földrajz K6 – mediterrán partvidékek.",
      ro: "Herceg Novi este un oraș de coastă superb situat la intrarea în golful Kotor, fiind atractiv datorită climei sale mediteraneene, vegetației bogate și fortărețelor istorice. Orașul este adesea numit 'orașul scărilor', deoarece multe dintre străzile sale urcă pe pante abrupte și sunt conectate prin numeroase trepte, creând un peisaj urban unic.",
      en: "Herceg Novi is affectionately known as the 'City of the Sun' and serves as the botanical garden of the Bay of Kotor. The coastal town's architecture has been profoundly shaped by Venetian, Ottoman, and Spanish influences, evident in its numerous historic fortresses. Its lush Mediterranean vegetation, consistently mild climate, and a charming Old Town characterized by endless staircases make it an utterly unique coastal destination. Geography K6 - Mediterranean port cities."
    },
    factsAdvanced: {
      de: ["Die Stadt wurde 1382 vom bosnischen König Tvrtko I. gegründet.", "Sie wird wegen ihrer steilen Gassen oft als 'Stadt der tausend Treppen' bezeichnet.", "Die Festung Forte Mare bietet einen perfekten Blick auf die Adria.", "Ein lokales Festival im Februar widmet sich ausschließlich der Mimosenblüte.", "Herceg Novi besitzt eine über 7 Kilometer lange Strandpromenade."],
      hu: ["A várost 1382-ben alapították, eredetileg tengeri sókereskedelmi központként.", "A Kanli Kula erőd az oszmán uralom idején hírhedt börtönként funkcionált.", "A város februárban rendezi meg híres Mimóza-fesztiválját a tavasz köszöntésére.", "Több mint 100 egzotikus növényfaj él a helyi parkokban és kertekben."],
      ro: ["Orașul a fost fondat în secolul al XIV-lea.", "Peste 100 de specii de plante exotice diferite pot fi găsite în oraș.", "Herceg Novi este gazda celebrului Festival al Mimozelor.", "Fortărețele Forte Mare și Kanli Kula sunt principalele monumente defensive ale orașului.", "Promenada de coastă (Šetalište) are o lungime de peste 6 km.", "Orașul se bucură de o climă mediteraneană plăcută pe tot parcursul anului."],
      en: ["The city was officially founded in 1382 by the Bosnian King Tvrtko I.", "It is frequently called the 'City of a Thousand Steps' due to its steep topography.", "The Forte Mare fortress provides spectacular panoramic views of the Adriatic Sea.", "A famous local festival held every February is dedicated to the blooming mimosa flowers.", "Herceg Novi boasts a beautiful coastal promenade that stretches for over 7 kilometers."]
    }
  },
  {
    id: "me-001-kanli-kula",
    name: { de: "Kanli Kula", hu: "Kanli Kula", ro: "Kanli Kula", en: "Kanli Kula" },
    type: "historical",
    coords: [18.5390, 42.4545],
    parent: "ME-001",
    description: {
      de: "Eine beeindruckende Festung aus der osmanischen Zeit in Herceg Novi.",
      hu: "Lenyűgöző oszmán kori erőd Herceg Noviban.",
      ro: "O fortăreață impresionantă din epoca otomană în Herceg Novi.",
      en: "An impressive Ottoman-era fortress in Herceg Novi."
    },
    facts: {
      de: ["Name bedeutet 'Blutiger Turm'.", "Diente als Gefängnis.", "Heute ein Freilichttheater.", "Bietet Blick auf die Bucht."],
      hu: ["A neve 'véres tornyot' jelent.", "Börtönként is funkcionált.", "Ma szabadtéri színpadként működik.", "Pazar kilátás nyílik az öbölre."],
      ro: ["Numele înseamnă „Turnul Însângerat”.", "A servit drept închisoare.", "Astăzi este un teatru în aer liber.", "Oferă vedere spre golf."],
      en: ["The name means 'Bloody Tower'.", "It served as a prison.", "Now an open-air theater.", "Offers views over the bay."]
    },
    descriptionAdvanced: {
      de: "Die Kanli Kula (Blutturm) ist eine gewaltige osmanische Festung, die über der Stadt Herceg Novi wacht und eine dunkle Vergangenheit als Gefängnis verbirgt. Heute dient ihr beeindruckendes steinernes Amphitheater als eine der spektakulärsten Open-Air-Bühnen der Adria für Konzerte und Filmfestivals. Die massiven Mauern bieten einen endlosen Blick über den Eingang zur Bucht von Kotor. Geschichte K7 – Osmanische Festungsarchitektur.",
      hu: "A Kanli Kula, amelynek neve törökül 'Véres Tornyot' jelent, Herceg Novi óvárosa fölé magasodó félelmetes erődítmény. Az oszmán uralom alatt épült masszív kőépület egykor kegyetlen börtönként szolgált, amelynek falai között a szabadságharcosokat tartották fogva. A komor történelem ellenére ma az erőd Montenegró egyik leglátványosabb szabadtéri amfiteátrumává alakult át. A falakról lenyűgöző panoráma nyílik az egész Kotori-öbölre és a nyílt tengerre. Történelem K7 – oszmán erődítmények.",
      ro: "Kanli Kula este o fortăreață masivă de origine otomană situată în orașul de coastă Herceg Novi. Numele său înseamnă \"Turnul Însângerat\" în limba turcă, amintind de perioada în care a servit ca o închisoare temută. Construită la o altitudine de 85 de metri, fortăreața oferă o vedere panoramică superbă asupra Mării Adriatice. Astăzi, incinta istorică a fost transformată într-unul dintre cele mai frumoase amfiteatre în aer liber din regiune.",
      en: "The Kanli Kula (Bloody Tower) is a massive Ottoman fortress that watches over the town of Herceg Novi, harboring a dark past as a notorious prison. Today, its impressive stone amphitheater has been repurposed into one of the most spectacular open-air stages on the Adriatic coast, hosting concerts and film festivals. The imposing, heavy walls provide visitors with endless, sweeping views over the entrance to the Bay of Kotor. History K7 - Ottoman fortress architecture."
    },
    factsAdvanced: {
      de: ["Die Festung wurde im 16. Jahrhundert von den Osmanen erbaut.", "Der Name 'Kanli Kula' stammt aus dem Türkischen und bedeutet wörtlich 'Blutturm'.", "An den Wänden im Inneren sind noch heute alte Inschriften der damaligen Gefangenen zu finden.", "Das Freilichttheater fasst heute mehr als 1000 Zuschauer.", "Nach einem starken Erdbeben im Jahr 1979 wurde die Festung aufwendig restauriert."],
      hu: ["Az erődítményt a 16. században építették az oszmán birodalom hódítói.", "A börtön falain ma is láthatók az egykori rabok által bekarcolt rajzok és feliratok.", "A modern szabadtéri színpad több mint 1000 néző befogadására alkalmas.", "A nyári hónapokban neves nemzetközi film- és zenei fesztiválokat tartanak itt."],
      ro: ["Fortăreața a fost construită în anul 1539.", "A fost grav avariată în urma unui cutremur din 1979.", "Amfiteatrul modern poate găzdui peste 1000 de spectatori.", "Zidurile groase poartă încă desenele prizonierilor de odinioară.", "Găzduiește anual festivaluri de film și spectacole de teatru."],
      en: ["The fortress was constructed by the Ottomans in the 16th century.", "Its name translates directly to 'Bloody Tower', reflecting its history as a severe prison.", "The site features incredibly well-preserved ancient prison graffiti carved into the stone walls.", "It now functions as a premier open-air venue with a seating capacity of over 1,000.", "The fortress sits at an elevation of exactly 85 meters above sea level."]
    }
  },
  // ME-002: Rožaje
  {
    id: "me-002-city",
    name: { de: "Rožaje", hu: "Rožaje", ro: "Rožaje", en: "Rožaje" },
    type: "city",
    coords: [20.1667, 42.8333],
    parent: "ME-002",
    description: {
      de: "Eine Stadt im Nordosten Montenegros, umgeben von hohen Bergen.",
      hu: "Város Montenegró északkeleti részén, magas hegyekkel körülvéve.",
      ro: "Un oraș în nord-estul Muntenegrului, înconjurat de munți înalți.",
      en: "A town in northeastern Montenegro, surrounded by high mountains."
    },
    facts: {
      de: ["Liegt am Fluss Ibar.", "Bekannt für die Holzindustrie.", "Ausgangspunkt für Wanderungen.", "Reich an Waldressourcen."],
      hu: ["Az Ibar folyó partján fekszik.", "Fafeldolgozó iparáról ismert.", "Kedvelt túraútvonalak kiindulópontja.", "Gazdag erdőállománnyal rendelkezik."],
      ro: ["Situat pe râul Ibar.", "Cunoscut pentru industria lemnului.", "Punct de plecare pentru drumeții.", "Bogat în resurse forestiere."],
      en: ["Located on the Ibar River.", "Known for its wood industry.", "Starting point for hiking.", "Rich in forest resources."]
    },
    descriptionAdvanced: {
      de: "Rožaje liegt in einer bewaldeten Gebirgsregion im Osten Montenegros und ist von einer tiefen, osmanisch geprägten Kultur durchdrungen. Die Stadt dient als Tor zu den majestätischen Bergen des Hajla-Massivs und ist berühmt für ihre Holzverarbeitung und traditionelle Gastfreundschaft. Das von der muslimischen Gemeinschaft geprägte Stadtbild bietet eine faszinierende kulturelle Vielfalt im Balkangebirge. Geschichte K7 – Osmanischer Einfluss.",
      hu: "Rožaje egy csendes, fenyvesekkel ölelt hegyi kisváros Montenegró keleti részén, közel a szerb és koszovói határhoz. A település az Ibar-folyó mentén fekszik, és a hagyományos fakitermelés, valamint a kézműves fafeldolgozás központja. A város lakossága nagyrészt bosnyákokból áll, ami különleges kulturális és kulináris arculatot kölcsönöz a térségnek. A környező hegyek, különösen a Hajla-csúcs, kiváló terepet nyújtanak a túrázás szerelmeseinek. Földrajz K5 – hegyvidéki gazdaság.",
      ro: "Rožaje este un oraș montan pitoresc situat în nord-estul Muntenegrului, înconjurat de păduri dense și vârfuri alpine. Așezarea se află de-a lungul râului Ibar și servește ca poartă de intrare către masivul Hajla. Regiunea este renumită pentru tradițiile sale în prelucrarea lemnului și pentru peisajele sale rurale intacte. Orașul are un amestec interesant de culturi și oferă numeroase posibilități pentru drumeții și explorări în natură.",
      en: "Ro\u017eaje is situated in a densely forested mountainous region in eastern Montenegro, deeply steeped in a rich Ottoman-influenced culture. The town serves as a primary gateway to the majestic peaks of the Hajla massif and is renowned for its exceptional wood processing industry and traditional hospitality. Characterized by a predominantly Muslim community, the urban landscape offers a fascinating and unique cultural diversity within the Balkan mountains. History K7 - Ottoman influence."
    },
    factsAdvanced: {
      de: ["Die Stadt liegt an den Ufern des Flusses Ibar.", "Die lokale Architektur ist stark von traditionellen osmanischen Holzhäusern geprägt.", "Rožaje ist das Zentrum der bosniakischen Minderheit in Montenegro.", "Das Gebiet ist ein Geheimtipp für Off-Piste-Skiing und Wandern.", "Die Kučanska-Moschee ist ein bedeutendes religiöses Gebäude der Stadt."],
      hu: ["A város az ország egyik legfontosabb fafeldolgozó és erdészeti központja.", "Rožaje híres a hagyományos, kézzel faragott fatermékeiről.", "A helyi konyha erősen őrzi az oszmán és bosnyák gasztronómiai hagyományokat.", "A város a téli hónapokban vastag hótakaró alá kerül, elzárva a világtól."],
      ro: ["Orașul este situat la o altitudine de aproximativ 1000 de metri.", "Economia locală se bazează puternic pe industria lemnului.", "Râul Ibar izvorăște din apropierea orașului.", "Rožaje are o istorie de conviețuire armonioasă a diferitelor etnii.", "Iarna, regiunea atrage pasionați de schi și sporturi montane."],
      en: ["The town is primarily populated by ethnic Bosniaks and Muslims.", "Ro\u017eaje is heavily surrounded by some of Montenegro's densest coniferous forests.", "The local economy relies heavily on the timber and woodworking industries.", "The Gani\u0107a Kula is a notable historic defensive tower house located in the town.", "The region experiences long, snowy winters ideal for emerging winter tourism."]
    }
  },
  {
    id: "me-002-hajla",
    name: { de: "Hajla", hu: "Hajla", ro: "Hajla", en: "Hajla" },
    type: "mountain",
    coords: [20.1333, 42.7500],
    parent: "ME-002",
    description: {
      de: "Ein markanter Berg an der Grenze zwischen Montenegro und dem Kosovo.",
      hu: "Jellegzetes hegy Montenegró és Koszovó határán.",
      ro: "Un munte proeminent la granița dintre Muntenegru și Kosovo.",
      en: "A prominent mountain on the border between Montenegro and Kosovo."
    },
    facts: {
      de: ["Höchster Punkt 2403 m.", "Bekannt für botanische Vielfalt.", "Teil der verfluchten Berge.", "Bietet dramatische Gipfel."],
      hu: ["Legmagasabb pontja 2403 méter.", "Botanikai sokszínűségéről híres.", "Az Elátkozott-hegység része.", "Drámai sziklacsúcsok jellemzik."],
      ro: ["Cel mai înalt punct are 2403 m.", "Cunoscut pentru diversitatea botanică.", "Face parte din Munții Blestemați.", "Oferă vârfuri dramatice."],
      en: ["Highest point is 2403 m.", "Known for botanical diversity.", "Part of the Accursed Mountains.", "Features dramatic peaks."]
    },
    descriptionAdvanced: {
      de: "Der Berg Hajla ist einer der markantesten Gipfel der östlichen Prokletije-Kette und ein Paradies für anspruchsvolle Wanderer und Botaniker. An der Grenze zum Kosovo gelegen, besticht die steile Bergflanke durch eine raue, felsige Nordwand und sanftere, mit Almwiesen bedeckte südliche Hänge. Die reiche Flora und die traditionellen Hirtensiedlungen machen die Region zu einem Geheimtipp. Geographie K6 – Alpine Biodiversität.",
      hu: "A Hajla egy masszív hegycsúcs a Prokletije hegységrendszer keleti szélén, amely természetes határt képez Montenegró és Koszovó között. A hegy különlegessége a viszonylagos érintetlensége, valamint a sűrű fenyőerdők és kiterjedt alpesi legelők váltakozása. A csúcsra vezető túraútvonalak csendes, vadregényes tájakon vezetnek keresztül, távol a forgalmas turisztikai központoktól. Télen a terület a sítúrázók és hótalpasok kedvelt, rejtett célpontja. Földrajz K6 – országhatárok és hegyvidékek.",
      ro: "Hajla este un masiv muntos spectaculos care marchează granița naturală dintre Muntenegru și Kosovo. Parte a Munților Prokletije, acest munte se distinge prin crestele sale dramatice și diversitatea botanică excepțională. Versanții săi abrupți oferă trasee de alpinism provocatoare, în timp ce pajiștile alpine ascund o multitudine de plante rare. Este o destinație de top pentru montaniarzii care caută sălbăticie și izolare.",
      en: "Mount Hajla is one of the most prominent and striking peaks in the eastern Prokletije range, acting as a true paradise for ambitious hikers and botanists. Situated directly on the border with Kosovo, the mountain features a dramatic, sheer rocky northern face contrasted by gentler, verdant alpine pastures on its southern slopes. The exceptional floral diversity and the presence of traditional shepherd settlements make this region a brilliant hidden gem. Geography K6 - Alpine biodiversity."
    },
    factsAdvanced: {
      de: ["Der Hauptgipfel der Hajla erreicht eine Höhe von 2403 Metern.", "Auf den Bergwiesen wachsen zahlreiche endemische Pflanzenarten des Balkans.", "Die gewaltige Nordwand der Hajla fällt mehrere hundert Meter steil ab.", "Im Sommer leben Hirten in den traditionellen Bergsiedlungen am Fuße des Berges.", "Das Gebiet gilt als hervorragendes Ziel für Schneeschuhwandern im Winter."],
      hu: ["A hegycsúcs legmagasabb pontja 2403 méter magasra emelkedik.", "A csúcsgerincről tiszta időben Koszovó és Szerbia hegyei is láthatók.", "A hegyoldalakat gazdag, endemikus növényfajok sokasága borítja.", "A környéken számos hagyományos alpesi pásztorkunyhó (katun) található."],
      ro: ["Cel mai înalt punct, Vârful Hajla, atinge 2403 metri.", "Masivul face parte din sistemul Munților Blestemați.", "Peste 1000 de specii de plante sunt înregistrate în această zonă.", "Muntele este o graniță naturală între Muntenegru și Kosovo.", "Pe versanții sudici există numeroase izvoare și cascade."],
      en: ["The summit of Mount Hajla reaches an impressive altitude of 2,403 meters.", "The mountain forms a natural geographical border between Montenegro and Kosovo.", "The region is renowned for its incredibly rich and diverse endemic plant life.", "During summer, traditional shepherd huts known as 'katuns' are actively used.", "The steep northern face provides challenging routes for experienced alpinists."]
    }
  },
  // ME-003: Berane
  {
    id: "me-003-city",
    name: { de: "Berane", hu: "Berane", ro: "Berane", en: "Berane" },
    type: "city",
    coords: [19.8733, 42.8425],
    parent: "ME-003",
    description: {
      de: "Ein bedeutendes wirtschaftliches und kulturelles Zentrum im Norden.",
      hu: "Fontos gazdasági és kulturális központ északon.",
      ro: "Un important centru economic și cultural din nord.",
      en: "A significant economic and cultural center in the north."
    },
    facts: {
      de: ["Liegt am Fluss Lim.", "Einst Ivangrad genannt.", "Hat einen regionalen Flughafen.", "Umgeben von Bergmassiven."],
      hu: ["A Lim folyó mentén fekszik.", "Korábban Ivangradnak hívták.", "Regionális repülőtere van.", "Hegyek veszik körül."],
      ro: ["Situat pe râul Lim.", "Numit anterior Ivangrad.", "Are un aeroport regional.", "Înconjurat de masive montane."],
      en: ["Located on the Lim River.", "Formerly called Ivangrad.", "Has a regional airport.", "Surrounded by mountain massifs."]
    },
    descriptionAdvanced: {
      de: "Berane ist das pulsierende Zentrum der Lim-Region und liegt in einem weiten, grünen Tal umgeben von hohen Bergen. Die Stadt vereint jahrhundertealte serbisch-orthodoxe Geschichte mit der industriellen Entwicklung des 20. Jahrhunderts. Als wichtiger Verkehrsknotenpunkt im Norden Montenegros bietet sie Zugang zu einigen der ältesten Klöster des Landes und unberührten Naturlandschaften. Geographie K5 – Flusstäler.",
      hu: "Berane egy élénk északkelet-montenegrói város, amely a Lim-folyó széles völgyében fekszik, hegyekkel körülvéve. A település a régió gazdasági, oktatási és kulturális központja, amely fontos kereskedelmi útvonalak kereszteződésében épült ki. Bár a város modern arculatát a 20. századi iparosodás formálta, környéke számos ősi kolostort és történelmi emléket rejt. Berane kiváló kiindulópont a közeli Bjelasica-hegység felfedezéséhez. Földrajz K6 – folyóvölgyi települések.",
      ro: "Berane este unul dintre cele mai importante centre urbane și economice din nordul Muntenegrului. Situat în depresiunea râului Lim, orașul are un bogat patrimoniu istoric și cultural. De la mănăstiri medievale la arhitectură din perioada iugoslavă, Berane reflectă diverse epoci istorice. Zona este, de asemenea, recunoscută pentru ospitalitatea localnicilor și ca bază excelentă pentru explorarea munților Bjelasica.",
      en: "Berane acts as the vibrant center of the Lim River region, nestled within a broad, lush green valley completely surrounded by imposing mountains. The town seamlessly combines centuries-old Serbian Orthodox history with the rapid industrial development characteristic of the 20th century. As a critical transportation hub in northern Montenegro, it offers visitors unparalleled access to some of the country's oldest monasteries and untouched natural landscapes. Geography K5 - River valleys and urban centers."
    },
    factsAdvanced: {
      de: ["Die Stadt hieß von 1949 bis 1992 Ivangrad.", "Das nahegelegene Kloster Đurđevi Stupovi stammt aus dem 12. Jahrhundert.", "Berane liegt am Fluss Lim, der für Fliegenfischen bekannt ist.", "Das Jasikovac-Denkmal erinnert an den anti-faschistischen Widerstand.", "Die Region ist landwirtschaftlich geprägt und für ihre Obstgärten bekannt."],
      hu: ["A várost a múltban Ivangrad néven is ismerték a jugoszláv időszak alatt.", "A Lim-folyó a Balkán egyik leghosszabb hegyi folyója, amely átszeli a várost.", "Berane lakossága sokszínű, montenegrói, szerb és bosnyák közösségek is élnek itt.", "A város környékén jelentős szén- és ércbányák is működtek korábban."],
      ro: ["Orașul a fost cunoscut sub numele de Ivangrad între 1949 și 1992.", "Râul Lim împarte orașul în două părți.", "Găzduiește Muzeul Polimski, bogat în artefacte arheologice.", "În apropiere se află faimoasa Mănăstire Đurđevi Stupovi.", "Este un centru important pentru sporturile de iarnă din nordul țării."],
      en: ["The town was historically known as Ivangrad between 1949 and 1992.", "It is beautifully situated along the banks of the Lim River.", "Berane serves as a major educational and cultural center in the northern region.", "The surrounding valley is highly fertile, supporting significant local agriculture.", "The town features notable examples of brutalist Yugoslav-era architecture."]
    }
  },
  {
    id: "me-003-djurdjevi-stupovi",
    name: { de: "Đurđevi Stupovi", hu: "Đurđevi Stupovi", ro: "Đurđevi Stupovi", en: "Đurđevi Stupovi" },
    type: "historical",
    coords: [19.8633, 42.8550],
    parent: "ME-003",
    description: {
      de: "Ein historisches serbisch-orthodoxes Kloster aus dem 13. Jahrhundert.",
      hu: "13. századi történelmi szerb ortodox kolostor.",
      ro: "O mănăstire ortodoxă sârbă istorică din secolul al XIII-lea.",
      en: "A historic 13th-century Serbian Orthodox monastery."
    },
    facts: {
      de: ["Gegründet im Jahr 1213.", "Sitz der Eparchie Budimlja-Nikšić.", "Bedeutendes Denkmal der Nemanjić.", "Kulturhistorisches Erbe."],
      hu: ["1213-ban alapították.", "A Budimlja-Nikšić egyházmegye székhelye.", "A Nemanjić-dinasztia emléke.", "Kulturális örökség."],
      ro: ["Fondată în anul 1213.", "Sediul Eparhiei de Budimlja-Nikšić.", "Monument important al dinastiei Nemanjić.", "Moștenire cultural-istorică."],
      en: ["Founded in 1213.", "Seat of the Eparchy of Budimlja-Nikšić.", "Important Nemanjić dynasty monument.", "Cultural and historical heritage."]
    },
    descriptionAdvanced: {
      de: "Das Kloster Đurđevi Stupovi nahe Berane ist eines der wichtigsten mittelalterlichen orthodoxen Klöster in Montenegro und wurde im frühen 13. Jahrhundert gegründet. Es zeichnet sich durch seine charakteristischen, mächtigen Zwillingstürme aus und spielte eine Schlüsselrolle im spirituellen und nationalen Überleben der Region unter osmanischer Herrschaft. Geschichte K6 – Mittelalterliche serbisch-orthodoxe Baukunst.",
      hu: "A Đurđevi Stupovi (Szent György Oszlopai) kolostor Berane városa felett, egy csendes domboldalon helyezkedik el. A 12. század végén alapított ortodox kolostor több mint nyolcszáz éve áll ellen a történelem viharainak, és a régió vallási életének központja. Az épület egyedülálló, kőből faragott homlokzata és masszív védőfalai lenyűgöző példái a középkori szerb építészetnek. A kolostorban ma is szerzetesek élnek, fenntartva a több évszázados spirituális hagyományokat. Történelem K6 – középkori kolostorok.",
      ro: "Mănăstirea Đurđevi Stupovi este o capodoperă a arhitecturii medievale sârbești, situată în apropierea orașului Berane. Construită la începutul secolului al XIII-lea, a servit ca centru spiritual al eparhiei de Budimlja de secole. Biserica mănăstirii păstrează fragmente de fresce valoroase și se remarcă prin arhitectura sa influențată de stilul romanic. A supraviețuit mai multor distrugeri și a rămas un far de cultură și credință în regiune.",
      en: "The \u0110ur\u0111evi Stupovi Monastery, located near Berane, is one of the most significant medieval Orthodox monasteries in Montenegro, founded in the early 13th century. Characterized by its distinctive and powerful twin towers, the monastery has played a pivotal role in the spiritual and national survival of the region during centuries of Ottoman rule. Today, it remains an active center of faith and a masterpiece of medieval ecclesiastical architecture. History K6 - Medieval Serbian Orthodox architecture."
    },
    factsAdvanced: {
      de: ["Das Kloster wurde um das Jahr 1213 vom Nemanjiden-Fürsten Stefan Prvoslav gestiftet.", "Es war jahrhundertelang der Sitz des orthodoxen Bistums von Budimlje.", "Die Gebäude wurden in der Geschichte von Berane fünfmal von osmanischen Truppen verbrannt.", "Die Architektur verbindet romanische und byzantinische Bauelemente.", "Das Kloster ist dem Heiligen Georg (Sveti Đorđe) gewidmet."],
      hu: ["A kolostort 1196-ban alapította Prvoslav, a híres Nemanjić-dinasztia egyik tagja.", "A történelem során a kolostort öt alkalommal égették fel és rombolták le.", "Az épületben ma is láthatók az eredeti 12. századi freskók részletei.", "A komplexum a montenegrói és szerb ortodoxia egyik legfontosabb szent helye."],
      ro: ["Mănăstirea a fost fondată în anul 1213 de Prvoslav Nemanjić.", "A fost arsă și reconstruită de cel puțin cinci ori în istoria sa.", "Este sediul Eparhiei de Budimlja-Nikšić.", "Păstrează fragmente de fresce din perioada medievală timpurie.", "Este declarată monument cultural de o importanță excepțională."],
      en: ["The monastery was founded in the year 1213 by Stefan Prvoslav.", "It serves as the central seat of the Eparchy of Budimlja and Nik\u0161i\u0107.", "The structure has been burned and devastated by Ottoman forces exactly five times.", "The church's architecture beautifully blends Romanesque and Byzantine stylistic elements.", "It holds immense historical significance as a center of medieval literacy and culture."]
    }
  },
  // ME-004: Plav
  {
    id: "me-004-city",
    name: { de: "Plav", hu: "Plav", ro: "Plav", en: "Plav" },
    type: "city",
    coords: [19.9450, 42.5967],
    parent: "ME-004",
    description: {
      de: "Eine malerische Stadt am Fuße der Prokletije-Berge.",
      hu: "Gleccser menti város a Prokletije lábánál.",
      ro: "Un oraș pitoresc la poalele munților Prokletije.",
      en: "A picturesque town at the foot of the Prokletije mountains."
    },
    facts: {
      de: ["Bekannt für den Redžepagić-Turm.", "Liegt am Plav-See.", "Eingang zum Nationalpark Prokletije.", "Reich an Quellen und Bächen."],
      hu: ["A Redžepagić-toronyról híres.", "A Plavi-tó partján fekszik.", "A Prokletije Nemzeti Park kapuja.", "Forrásokban és patakokban gazdag."],
      ro: ["Cunoscut pentru Turnul Redžepagić.", "Situat pe malul lacului Plav.", "Intrarea în Parcul Național Prokletije.", "Bogat în izvoare și pâraie."],
      en: ["Known for the Redžepagić Tower.", "Located by Lake Plav.", "Gateway to Prokletije National Park.", "Rich in springs and streams."]
    },
    descriptionAdvanced: {
      de: "Die Stadt Plav liegt eingebettet an den Ufern eines eiszeitlichen Sees, direkt am Fuße der gewaltigen Prokletije-Berge. Sie ist eine kleine, multikulturelle Gemeinde, die als Ausgangspunkt für abenteuerliche Bergtouren in die 'Verwunschenen Berge' dient. Die traditionellen Steinhäuser und die unberührte alpine Natur machen Plav zu einem Paradies für Ökotourismus und Ruhesuchende. Geographie K7 – Glaziale Seenlandschaften.",
      hu: "Plav egy lenyűgöző természeti környezetben fekvő kisváros a Prokletije hegység lábánál, közvetlenül az azonos nevű tó partján. A település történelme az oszmán időkig nyúlik vissza, amit a városban ma is álló régi mecsetek és a jellegzetes balkáni kőházak (kula) is bizonyítanak. A hegyvidéki elszigeteltség miatt a helyiek évszázadokig megőrizték ősi hagyományaikat és életmódjukat. Plav ma elsősorban a hegymászók, természetfotósok és horgászok bázisvárosa. Földrajz K5 – hegyvidéki tavak és turizmus.",
      ro: "Plav este o așezare liniștită situată la poalele Munților Prokletije, renumită pentru frumusețea sa naturală. Așezat pe malul lacului glaciar omonim, orașul atrage iubitori de natură și pasionați de pescuit. Arhitectura tradițională, reprezentată de faimoasele turnuri din piatră (Kula), amintește de un trecut tumultuos, când familiile locale trebuiau să se apere. Plav este punctul de plecare perfect pentru expediții în Parcul Național Prokletije.",
      en: "The picturesque town of Plav is perfectly nestled on the shores of a stunning glacial lake, resting directly at the foot of the massive Prokletije mountains. It is a small, multicultural community that serves as an ideal base camp for adventurous mountain expeditions into the 'Accursed Mountains'. The traditional stone houses, pristine alpine nature, and rich local traditions make Plav a true paradise for eco-tourism and those seeking profound tranquility. Geography K7 - Glacial lake settlements."
    },
    factsAdvanced: {
      de: ["Der Plav-See ist der größte von Gletschern geschaffene See Montenegros.", "Die Redžepagić-Kula ist ein gut erhaltenes Verteidigungshaus aus dem 17. Jahrhundert.", "Die hiesige Holzarbeitertradition ist weithin bekannt.", "Die Region ist ein wichtiger Lebensraum für Braunbären und seltene Greifvögel.", "Der See friert in strengen Wintern oft komplett zu."],
      hu: ["A város 900 méteres tengerszint feletti magasságban helyezkedik el.", "A település központjában található a Redžepagić kőtorony (Kula), amely egy erődített lakóház.", "A lakosság jelentős része az iszlám vallást követi, ami meghatározza a kultúrát.", "A város a Prokletije Nemzeti Park egyik legfontosabb bejárati kapuja."],
      ro: ["Turnul Redžepagić din secolul al XVII-lea este cea mai veche clădire din oraș.", "Râul Lim curge direct din Lacul Plav.", "Orașul a fost fondat ca un post comercial otoman.", "Populația locală este un amestec de culturi și etnii balcanice.", "Găzduiește anual festivalul de culegere a afinelor."],
      en: ["Plav is located at a high altitude of over 900 meters above sea level.", "The town is renowned for its well-preserved traditional stone tower houses (kulas).", "It boasts a diverse population featuring a vibrant mix of Islamic and Orthodox cultures.", "The area is considered a primary gateway to the expansive Prokletije National Park.", "Local cuisine is heavily influenced by the harsh mountain climate and pastoral traditions."]
    }
  },
  {
    id: "me-004-plav-lake",
    name: { de: "Plav-See", hu: "Plavi-tó", ro: "Lacul Plav", en: "Lake Plav" },
    type: "lake",
    coords: [19.9250, 42.5983],
    parent: "ME-004",
    description: {
      de: "Ein wunderschöner See glazialen Ursprungs.",
      hu: "Gyönyörű gleccsereredetű tó.",
      ro: "Un lac frumos de origine glaciară.",
      en: "A beautiful lake of origin glacial origin."
    },
    facts: {
      de: ["Größter Gletschersee der Region.", "Fischreiches Gewässer.", "Beliebt für Bootsfahrten.", "Wichtiges Ökosystem."],
      hu: ["A régió legnagyobb gleccsertava.", "Halakban gazdag víz.", "Kedvelt csónakázóhely.", "Fontos ökoszisztéma."],
      ro: ["Cel mai mare lac glaciar din regiune.", "Ape bogate în pește.", "Popular pentru plimbări cu barca.", "Ecosistem important."],
      en: ["Largest glacial lake in the region.", "Waters rich in fish.", "Popular for boat rides.", "Important ecosystem."]
    },
    descriptionAdvanced: {
      de: "Der Plav-See (Plavsko jezero) ist der größte eiszeitliche See Montenegros, malerisch umgeben von den dramatischen Bergen des Prokletije-Massivs. Das kristallklare Wasser wird vom Fluss Ljuča gespeist und fließt als Fluss Lim weiter. Der See ist ein Zentrum für Ökotourismus, beliebt bei Fliegenfischern, Seglern und Naturliebhabern, die die absolute Stille der Berge suchen. Geographie K5 – Glaziale Seensysteme.",
      hu: "A Plav-tó Montenegró legnagyobb glaciális tava, amely a Prokletije-hegység hófedte csúcsai alatt terül el. A tó vizét kristálytiszta hegyi források táplálják, így a nyári hónapokban is kellemesen hűsítő marad. A tó körüli sűrű nádasok és ártéri rétek számos madárfaj számára nyújtanak menedéket. Bár a tó vize a nyári hőségben fürdőzésre is alkalmas, igazi vonzerejét a horgászat és a csónakázás adja a hegyek drámai árnyékában. Földrajz K6 – gleccsertavak.",
      ro: "Lacul Plav este cel mai mare lac glaciar din Muntenegru, oferind un peisaj de vis la baza masivului Prokletije. Apele sale clare și reci abundă în pește, fiind o destinație de top pentru pescarii de păstrăv. Lacul este alimentat de râul Ljuča și este locul din care izvorăște râul Lim, unul dintre cele mai importante râuri din țară. Iarna, suprafața lacului îngheață complet, adăugând un farmec aparte peisajului montan.",
      en: "Plav Lake (Plavsko jezero) is the largest and most breathtaking glacial lake in the Prokletije mountain range, surrounded by lush green meadows and towering peaks. Fed by the crystal-clear waters of the Lju\u010da River, the lake acts as a vital regional ecosystem and a popular destination for fishing, swimming, and kayaking. In the winter, the expansive surface freezes entirely, while summer offers a vibrant reflection of the majestic alpine landscape. Geography K6 - Alpine lakes."
    },
    factsAdvanced: {
      de: ["Der See erstreckt sich auf einer Höhe von 906 Metern über dem Meeresspiegel.", "In strengen Wintern friert der See oft dick zu und wird zum Schlittschuhlaufen genutzt.", "Er beherbergt die Huchen-Forelle (Mladica), einen seltenen Raubfisch.", "Das Wasser im See erneuert sich etwa alle 82 Tage komplett.", "Zahlreiche Wanderwege zum Prokletije-Gebirge beginnen an seinen Ufern."],
      hu: ["A tó átlagos mélysége körülbelül 9 méter, területe pedig 2 négyzetkilométer.", "A Ljuča-folyó az egyik legfőbb vízforrása, amely átfolyik a tavon.", "A tó vize különösen híres a ritka dunai galóca (Hucho hucho) állományáról.", "Télen a tó felülete gyakran teljesen befagy a zord hegyi klíma miatt."],
      ro: ["Lacul are o suprafață de aproape 2 kilometri pătrați.", "Altitudinea lacului este de 906 metri deasupra nivelului mării.", "Găzduiește specii rare de păstrăv, cum ar fi păstrăvul Hucho hucho.", "Adâncimea maximă a lacului este de aproximativ 9 metri.", "Este o zonă de iernat importantă pentru numeroase păsări acvatice."],
      en: ["The lake covers a substantial surface area of approximately 2 square kilometers.", "It is positioned at an altitude of 906 meters above sea level.", "The waters are exceptionally rich in various fish species, particularly trout and huchen.", "It is primarily fed by the Lju\u010da River and drains directly into the Lim River.", "The lake often completely freezes over during the severe winter months."]
    }
  },
  // ME-005: Pljevlja
  {
    id: "me-005-city",
    name: { de: "Pljevlja", hu: "Pljevlja", ro: "Pljevlja", en: "Pljevlja" },
    type: "city",
    coords: [19.3583, 43.3567],
    parent: "ME-005",
    description: {
      de: "Eine Industriestadt im Norden mit einer reichen multikulturellen Geschichte.",
      hu: "Északi iparváros gazdag multikulturális történelemmel.",
      ro: "Un oraș industrial din nord, cu o bogată istorie multiculturală.",
      en: "An industrial town in the north with a rich multicultural history."
    },
    facts: {
      de: ["Bekannt für Kohlebergbau.", "Heimat eines Wärmekraftwerks.", "Hat osmanische Architektur.", "Sitz des Municipium S."],
      hu: ["Szénbányászatáról ismert.", "Itt található egy hőerőmű.", "Oszmán építészeti emlékek.", "A római Municipium S helyszíne."],
      ro: ["Cunoscut pentru minele de cărbune.", "Găzduiește o termocentrală.", "Are arhitectură otomană.", "Situl vechiului Municipium S."],
      en: ["Known for coal mining.", "Home to a thermal power plant.", "Has Ottoman architecture.", "Site of ancient Municipium S."]
    },
    descriptionAdvanced: {
      de: "Pljevlja ist die nördlichste Stadt Montenegros und ein faszinierender Schmelztiegel aus industriellem Erbe und reicher osmanischer Geschichte. Sie liegt in einem weiten Tal und ist berühmt für ihre prächtige islamische Architektur, die harmonisch neben alten christlichen Klöstern existiert. Obwohl sie das industrielle Herz des Landes ist, bewahrt die Stadt einen tiefen kulturellen Reichtum. Geschichte K6 – Industrielle und religiöse Koexistenz.",
      hu: "Pljevlja Montenegró legészakibb és harmadik legnagyobb városa, amely a szerb és bosnyák határhoz közel fekszik. A város egy hatalmas szénmedence közepén épült, ami az ország legfontosabb ipari és energiatermelő központjává tette. Az ipari jelleg ellenére Pljevlja gazdag történelemmel büszkélkedhet, hiszen itt találták meg a híres római Municipium S lelőhelyet is. A városban az iszlám és az ortodox kultúra békésen él egymás mellett, lenyűgöző mecseteket és kolostorokat hagyva az utókorra. Földrajz K6 – bányászat és ipar.",
      ro: "Pljevlja este cel mai nordic oraș al Muntenegrului, cunoscut pentru moștenirea sa industrială, dar și pentru o istorie culturală vastă. Orașul este situat într-o depresiune fertilă și găzduiește o combinație unică de monumente creștine și islamice. Deși este recunoscut în special pentru exploatarea cărbunelui și termocentrala sa, Pljevlja păstrează situri arheologice romane și arhitectură otomană splendidă. Este un veritabil creuzet al istoriei balcanice.",
      en: "Pljevlja is the northernmost city in Montenegro, situated in a broad valley and famous for its significant industrial heritage and deep Ottoman roots. The city is a unique melting pot where towering minarets stand alongside ancient Orthodox monasteries, reflecting a long history of multicultural coexistence. Despite its modern role as a center for energy production, Pljevlja retains a charming historical core and is surrounded by vast, dense coniferous forests. Geography K6 - Industrial cities."
    },
    factsAdvanced: {
      de: ["Die Husein-Pascha-Moschee besitzt das höchste Minarett auf dem Balkan (42 Meter).", "Das orthodoxe Kloster der Heiligen Dreifaltigkeit beherbergt wertvolle mittelalterliche Schriften.", "In der Stadt befindet sich Montenegros einziges Kohlekraftwerk.", "In der Antike befand sich hier die römische Siedlung Municipium S.", "Pljevlja ist berühmt für den traditionellen gereiften Käse 'Pljevaljski Sir'."],
      hu: ["Itt található Montenegró egyetlen jelentős szénerőműve, amely az ország áramellátását biztosítja.", "A város közelében lévő bányákban nyílt színi feketekőszén-kitermelés folyik.", "A római időkben a város térsége fontos kereskedelmi megállóhely volt.", "A város télen rendkívül hideg, itt mérték az ország történetének legalacsonyabb hőmérsékletét."],
      ro: ["În apropierea orașului se află ruinele așezării romane Municipium S.", "Orașul este centrul producției de energie din Muntenegru.", "Găzduiește faimoasa Moschee Husein-paša.", "Mănăstirea Sfânta Treime (Sveta Trojica) se află la periferia orașului.", "Este recunoscut pentru serile reci de iarnă, fiind adesea învelit în ceață."],
      en: ["Pljevlja hosts Montenegro's largest thermal power plant and a major coal mine.", "The city exhibits a fascinating blend of Islamic and Orthodox architectural styles.", "It is often considered one of the coldest urban settlements in the country during winter.", "The historical core features well-preserved Ottoman-era houses and narrow streets.", "The surrounding region contains significant archaeological sites from the Roman period."]
    }
  },
  {
    id: "me-005-husein-pasa",
    name: { de: "Husein-paša-Moschee", hu: "Husein-paša mecset", ro: "Moscheea Husein-paša", en: "Husein-paša Mosque" },
    type: "historical",
    coords: [19.3580, 43.3570],
    parent: "ME-005",
    description: {
      de: "Eines der schönsten Denkmäler der islamischen Architektur auf dem Balkan.",
      hu: "A balkáni iszlám építészet egyik legszebb emléke.",
      ro: "Unul dintre cele mai frumoase monumente de arhitectură islamică din Balcani.",
      en: "One of the most beautiful monuments of Islamic architecture in the Balkans."
    },
    facts: {
      de: ["Erbaut im 16. Jahrhundert.", "Höchstes Minarett auf dem Balkan.", "Besitzt ein seltenes Koran-Manuskript.", "Prächtige Wandmalereien."],
      hu: ["A 16. században épült.", "A Balkán legmagasabb minaretje.", "Ritka Korán-kéziratot őriz.", "Pompás falfestmények."],
      ro: ["Construită în secolul al XVI-lea.", "Cel mai înalt minaret din Balcani.", "Deține un manuscris rar al Coranului.", "Picturi murale superbe."],
      en: ["Built in the 16th century.", "Highest minaret in the Balkans.", "Preserves a rare Quran manuscript.", "Stunning wall paintings."]
    },
    descriptionAdvanced: {
      de: "Die Husein-Pascha-Moschee in Pljevlja ist ein Meisterwerk der klassischen osmanischen Architektur und eines der bedeutendsten islamischen Gotteshäuser auf dem Balkan. Sie wurde im 16. Jahrhundert aus präzise behauenem Stein erbaut und ist berühmt für ihr außergewöhnlich hohes Minarett und die kunstvolle Innendekoration mit handgemalten arabesken Ornamenten. Geschichte K7 – Osmanische Architektur auf dem Balkan.",
      hu: "A Husein-pasa mecset Pljevlja városának központjában áll, és a balkáni oszmán építészet egyik legkiemelkedőbb alkotása. A 16. században épült mecset a klasszikus oszmán stílusjegyeket viseli magán, köztük egy karcsú, az égbe törő minarettel és bonyolult, színes belső falfestésekkel. Az épület udvarán található díszes kút és az évszázados fák csendes, elmélyült atmoszférát biztosítanak a nyüzsgő város közepén. A mecset nemcsak vallási, hanem kulturális és történelmi szempontból is felbecsülhetetlen értékű. Történelem K7 – oszmán építészet.",
      ro: "Moscheea Husein-paša din Pljevlja este considerată una dintre cele mai rafinate clădiri islamice din Balcani. A fost construită în secolul al XVI-lea, demonstrând un măiestrie arhitecturală de excepție și decorațiuni interioare remarcabile. Minaretul său elegant domină orizontul orașului, iar curtea adăpostește fântâni vechi și morminte istorice. Moscheea este faimoasă pentru păstrarea unui manuscris rar, decorat cu foiță de aur, al Coranului.",
      en: "The Husein Pasha Mosque in Pljevlja is a magnificent architectural masterpiece and one of the most important Islamic monuments in the entire Balkan region. Constructed in the 16th century, the mosque is renowned for its extraordinarily tall, elegant minaret and its intricately decorated, colorful interior featuring stunning floral motifs. It stands as a profound symbol of the region's rich Ottoman heritage and continues to serve as an active place of worship. History K7 - Ottoman religious architecture."
    },
    factsAdvanced: {
      de: ["Die Moschee wurde zwischen 1573 und 1594 erbaut.", "Ihr Minarett ist mit 42 Metern das höchste auf dem gesamten Balkan.", "Im Inneren wird ein seltener Koran aus dem 16. Jahrhundert aufbewahrt.", "Ein alter, hölzerner Uhrturm steht in unmittelbarer Nähe der Moschee.", "Der Boden im Inneren ist mit echten orientalischen Teppichen aus Ägypten bedeckt."],
      hu: ["A mecset minaretje 42 méter magas, amivel az egyik legmagasabb a Balkánon.", "Az épületet Husein-pasa Boljanić, egy magas rangú oszmán tisztviselő építtette 1569-ben.", "A mecset belsejében egy rendkívül értékes, 16. századi egyiptomi szőnyeget őriznek.", "Az épület kupoláját lenyűgöző arabeszk minták és eredeti kalligráfiák díszítik."],
      ro: ["Moscheea a fost construită între anii 1573 și 1594.", "Minaretul său are o înălțime impresionantă de 42 de metri.", "Designul este adesea comparat cu marile moschei din Istanbul.", "Coranul manuscris datează din secolul al XVI-lea.", "Covorul moscheii este o piesă antică, adusă direct din Egipt."],
      en: ["The mosque was officially built between 1573 and 1594.", "It features the tallest minaret in the entire Balkan Peninsula, reaching 42 meters.", "The interior houses a highly valuable, centuries-old illuminated manuscript of the Quran.", "The building exhibits classic, refined Ottoman architectural elements and proportions.", "The intricate interior decorations include beautiful, hand-painted floral frescoes."]
    }
  },
  // ME-006: Bijelo Polje
  {
    id: "me-006-city",
    name: { de: "Bijelo Polje", hu: "Bijelo Polje", ro: "Bijelo Polje", en: "Bijelo Polje" },
    type: "city",
    coords: [19.7475, 43.0383],
    parent: "ME-006",
    description: {
      de: "Die 'Weiße Stadt', ein wichtiger Verkehrsknotenpunkt im Norden.",
      hu: "A 'fehér város', fontos északi közlekedési csomópont.",
      ro: "„Câmpul Alb”, un important nod de transport din nord.",
      en: "The 'White Field', an important transport hub in the north."
    },
    facts: {
      de: ["Liegt an der Lim-Schlucht.", "Bedeutendes Handelszentrum.", "Bekannt für das Miroslav-Evangelium.", "Tor zu Serbien."],
      hu: ["A Lim-kanyonban fekszik.", "Jelentős kereskedelmi központ.", "A Miroszláv-evangéliumról híres.", "Kapu Szerbia felé."],
      ro: ["Situat pe valea râului Lim.", "Centru comercial important.", "Cunoscut pentru Evangheliarul lui Miroslav.", "Poarta spre Serbia."],
      en: ["Located in the Lim valley.", "Significant commercial center.", "Famous for Miroslav's Gospel.", "Gateway to Serbia."]
    },
    descriptionAdvanced: {
      de: "Bijelo Polje, was wörtlich 'Weißes Feld' bedeutet, liegt an den Ufern des Flusses Lim und ist eine der größten Städte im Norden. Ihr Name stammt von den weißen Blumen, die im Frühling das Tal bedecken. Die Stadt blickt auf eine lange literarische und religiöse Geschichte zurück und fungiert als wichtiges landwirtschaftliches Zentrum Montenegros. Geographie K5 – Landwirtschaftliche Ebenen.",
      hu: "Bijelo Polje, amelynek neve szó szerint 'Fehér Mezőt' jelent, Észak-Montenegró egyik legnépesebb települése, a Lim-folyó termékeny völgyében. A város nevét a tavaszi virágzáskor a környéket beborító fehér margarétákról és gyümölcsfa-virágokról kapta. A régió mezőgazdasági és kereskedelmi központként funkcionál, emellett híres ásványvízforrásairól is. A városban évente több kulturális és irodalmi fesztivált rendeznek, ami pezsgő szellemi életet biztosít. Földrajz K5 – folyóvölgyi mezőgazdaság.",
      ro: "Bijelo Polje, tradus ca \"Câmpul Alb\", este un important nod comercial și de transport în nordul Muntenegrului. Așezat pe valea fertilă a râului Lim, orașul este faimos pentru peisajele sale bucolice care se acoperă cu flori albe primăvara. Zona are o istorie bogată, fiind locul unde s-au intersectat rutele comerciale antice. Astăzi, este un centru cultural vibrant, cu festivaluri de poezie și o tradiție a ospitalității.",
      en: "Bijelo Polje, which literally translates to 'White Field', is the unofficial capital of northern Montenegro and a lively cultural and commercial hub. Nestled in the fertile valley of the Lim River, the city got its name from the brilliant white daisy flowers that once covered the surrounding plains every spring. Today, it is known for its vibrant literary festivals, rich agricultural production, and an incredibly diverse, multi-ethnic population. Geography K5 - Agricultural valleys."
    },
    factsAdvanced: {
      de: ["Die Kirche St. Peter und Paul wurde im 12. Jahrhundert erbaut.", "Hier entstand das berühmte mittelalterliche Manuskript 'Miroslav-Evangeliar'.", "Bijelo Polje ist ein bedeutendes Zentrum für die montenegrinische Himbeerproduktion.", "Die Stadt ist für ihr alljährliches internationales Poesiefestival bekannt.", "In der Nähe liegt die Đalovića-Höhle, die längste Tropfsteinhöhle des Landes."],
      hu: ["A város lakossága meghaladja a 15 000 főt, ezzel a régió legnagyobb települése.", "Bijelo Polje az ország híres Rada nevű ásványvizének palackozási központja.", "A város fontos állomás a Belgrád-Bar vasútvonal hegyvidéki szakaszán.", "A városban született Risto Ratković, az egyik leghíresebb montenegrói költő."],
      ro: ["Numele orașului provine de la câmpurile de flori albe de primăvară.", "Este al treilea oraș ca mărime din Muntenegru după populație.", "Găzduiește anual festivalul internațional de poezie 'Serile lui Ratković'.", "Biserica Sfântul Petru din oraș este monumentul său istoric principal.", "Calea ferată Belgrad-Bar traversează acest oraș."],
      en: ["Bijelo Polje is the third most populous municipality in Montenegro.", "The city is bisected by the fast-flowing Lim River.", "It acts as a critical transit hub on the main railway line connecting Belgrade and Bar.", "The region is widely celebrated for its high-quality mineral water springs.", "It hosts an annual poetry festival known as 'Ratkovi\u0107's Poetry Evenings'."]
    }
  },
  {
    id: "me-006-st-peter",
    name: { de: "St. Peter-Kirche", hu: "Szent Péter-templom", ro: "Biserica Sf. Petru", en: "St. Peter's Church" },
    type: "historical",
    coords: [19.7500, 43.0400],
    parent: "ME-006",
    description: {
      de: "Eine Kirche aus dem 12. Jahrhundert, in der das Miroslav-Evangelium geschrieben wurde.",
      hu: "12. századi templom, ahol a Miroszláv-evangélium íródott.",
      ro: "O biserică din secolul al XII-lea, unde a fost scris Evangheliarul lui Miroslav.",
      en: "A 12th-century church where the Miroslav's Gospel was written."
    },
    facts: {
      de: ["Von Prinz Miroslav gestiftet.", "Prächtige romanische Architektur.", "Bedeutendes kulturelles Denkmal.", "Einst Sitz eines Bistums."],
      hu: ["Miroszláv herceg alapította.", "Pompás román kori építészet.", "Kiemelkedő kulturális emlék.", "Egykor püspöki székhely volt."],
      ro: ["Fondată de prințul Miroslav.", "Arhitectură romanică superbă.", "Monument cultural deosebit.", "Fost sediu episcopal."],
      en: ["Founded by Prince Miroslav.", "Superb Romanesque architecture.", "Significant cultural monument.", "Former episcopal seat."]
    },
    descriptionAdvanced: {
      de: "Die St.-Peter-Kirche in Bijelo Polje ist ein bedeutendes romanisches Gebäude, in dem das berühmte Miroslav-Evangeliar, das älteste erhaltene serbische Manuskript, geschrieben wurde. Im Laufe der Geschichte wurde die Kirche unter osmanischer Herrschaft zwischenzeitlich in eine Moschee umgewandelt, bevor sie ihre ursprüngliche christliche Bestimmung zurückerhielt. Heute steht sie als Symbol für das komplexe historische Erbe des Balkans. Geschichte K6 – Mittelalterliche Schriften.",
      hu: "A Szent Péter-templom (Sveti Petar) Bijelo Polje egyik legősibb és legfontosabb műemléke, amely a középkori szerb ortodoxia lenyomatát őrzi. A 12. század végén épült templom eredetileg egy kolostor központja volt, és itt írták a híres Miroslav-evangéliumot, a legrégebbi szerb cirill betűs kéziratot. Bár az épületet az oszmán időkben mecsetté alakították, később visszakapta eredeti formáját. A zömök kőfalak és a két masszív harangtorony igazi középkori erődtemplom benyomását keltik. Történelem K6 – középkori kéziratok és vallás.",
      ro: "Biserica Sfântul Petru și Pavel din Bijelo Polje este un monument inestimabil al culturii sârbe medievale. Construită în secolul al XII-lea de către Prințul Miroslav, biserica a fost locul în care a fost scris faimosul Evangheliar al lui Miroslav, cel mai vechi manuscris sârbesc ilustrat. Arhitectura sa îmbină influențe romanice cu cele bizantine, mărturisind istoria complexă a orașului. După o lungă perioadă de transformare în moschee, a revenit la funcția sa inițială.",
      en: "The Church of St. Peter in Bijelo Polje is an exceptionally significant medieval Orthodox landmark, originally built in the 12th century. The church is most famous worldwide as the location where the Miroslav Gospel, one of the oldest and most beautiful surviving illuminated manuscripts in the Cyrillic alphabet, was originally commissioned and written. Its thick stone walls and quiet courtyard offer a profound connection to the earliest days of Slavic literacy and faith. History K6 - Medieval literacy and manuscripts."
    },
    factsAdvanced: {
      de: ["Die Kirche wurde um 1190 von Fürst Miroslav, dem Bruder von Stefan Nemanja, erbaut.", "Das Miroslav-Evangeliar steht auf der Liste des UNESCO-Weltdokumentenerbes.", "Im 17. Jahrhundert fügten die Osmanen der Kirche ein Minarett hinzu.", "Der Bau verbindet typisch byzantinische Raumaufteilung mit westlich-romanischer Fassadengestaltung.", "Nach der Befreiung der Stadt wurde die Kirche vollständig restauriert."],
      hu: ["A templomot Miroslav Zavidović, Nemanja István testvére építtette 1190 körül.", "A híres Miroslav-evangéliumot az UNESCO a Világ Emlékezete programjába is felvette.", "Az épület belsejében oszmán kori falfestések és eredeti ortodox freskók is találhatók.", "A templomot 1922-ben szentelték fel újra ortodox istentiszteleti helyként."],
      ro: ["Biserica a fost fondată la sfârșitul secolului al XII-lea.", "Evangheliarul lui Miroslav a fost scris aici în jurul anului 1190.", "Clădirea are o fațadă cu elemente arhitecturale romanice.", "A funcționat ca moschee pe timpul dominației otomane.", "Include două turnuri distinctive care străjuiesc fațada principală."],
      en: ["The church was commissioned by Prince Miroslav, brother of Stefan Nemanja, in the 12th century.", "It is the original home of the famous Miroslav Gospel, written in 1180.", "The structure exhibits a fascinating blend of Romanesque and Byzantine architectural styles.", "The church underwent significant architectural changes during the Ottoman occupation.", "It remains one of the most historically important religious sites in northern Montenegro."]
    }
  },
  // ME-007: Žabljak
  {
    id: "me-007-city",
    name: { de: "Žabljak", hu: "Žabljak", ro: "Žabljak", en: "Žabljak" },
    type: "city",
    coords: [19.1228, 43.1542],
    parent: "ME-007",
    description: {
      de: "Die höchstgelegene Stadt auf dem Balkan, im Herzen des Durmitor.",
      hu: "A Balkán legmagasabban fekvő városa a Durmitor szívében.",
      ro: "Orașul situat la cea mai mare altitudine din Balcani, în inima Durmitorului.",
      en: "The highest town in the Balkans, in the heart of Durmitor."
    },
    facts: {
      de: ["Liegt auf 1456 m Höhe.", "Zentrum des Wintersports.", "Tor zum Nationalpark Durmitor.", "Umgeben von 18 Gletscherseen."],
      hu: ["1456 méter magasan fekszik.", "A téli sportok központja.", "A Durmitor Nemzeti Park kapuja.", "18 gleccsertó veszi körül."],
      ro: ["Situat la 1456 m altitudine.", "Centru al sporturilor de iarnă.", "Poarta către Parcul Național Durmitor.", "Înconjurat de 18 lacuri glaciare."],
      en: ["Located at 1456 m altitude.", "Center for winter sports.", "Gateway to Durmitor National Park.", "Surrounded by 18 glacial lakes."]
    },
    descriptionAdvanced: {
      de: "Žabljak ist die höchstgelegene städtische Siedlung auf dem Balkan und das Zentrum des alpinen Tourismus in Montenegro. Die kleine Stadt liegt mitten im Durmitor-Nationalpark und ist umgeben von tiefen Wäldern, schroffen Gipfeln und Bergseen. Sie ist das unangefochtene Hauptquartier für Wintersportler und Bergwanderer, die die ungezähmte Natur des Massivs suchen. Geographie K6 – Hochgebirgssiedlungen.",
      hu: "Žabljak a Balkán-félsziget legmagasabban fekvő városi települése, amely a Durmitor Nemzeti Park szívében, egy lenyűgöző fennsíkon terül el. A település a téli és nyári hegyvidéki turizmus vitathatatlan központja Montenegróban. Míg télen a síelők és hódeszkások paradicsoma, nyáron túrázók, hegymászók és vadvízi evezősök lepik el a városka hangulatos utcáit. A környező sűrű fenyőerdők és a drámai csúcsok egész évben friss alpesi levegőt biztosítanak a látogatóknak. Földrajz K6 – magashegyi települések.",
      ro: "Žabljak este cel mai înalt oraș din Balcani, situat în inima Parcului Național Durmitor. Orașul este un paradis pentru schiori iarna și pentru drumeți și alpiniști vara, fiind faimos pentru cele 18 lacuri glaciare uluitoare din împrejurimi, care oferă peisaje montane spectaculoase.",
      en: "\u017dabljak is widely recognized as the highest urban settlement in the Balkans, acting as the undisputed capital of alpine tourism in Montenegro. Situated squarely within the Durmitor National Park, the small town is surrounded by deep, aromatic pine forests, rugged peaks, and spectacular glacial lakes. It serves as a premier destination for winter sports enthusiasts and summer hikers alike, offering direct access to the untamed nature of the high mountains. Geography K6 - High mountain settlements."
    },
    factsAdvanced: {
      de: ["Die Stadt liegt auf einer beachtlichen Höhe von 1456 Metern über dem Meeresspiegel.", "Žabljak ist das wichtigste Skigebiet Montenegros.", "In der Nähe befindet sich der berühmte tiefschwarze Crno Jezero (Schwarze See).", "Die Region verzeichnet oft die niedrigsten Temperaturen des Landes.", "Die traditionellen Berghütten werden hier 'Katun' genannt."],
      hu: ["A város 1456 méteres tengerszint feletti magasságban helyezkedik el.", "A település körül 18 tengerszem, úgynevezett 'hegyi szem' található.", "Télen a hóvastagság gyakran meghaladja a két métert, hónapokig fedve a tájat.", "A helyi éttermekben népszerű a hagyományos hegyvidéki étel, a kacamak."],
      ro: ["Orașul este situat la o altitudine de 1456 de metri.", "Parcul Național Durmitor face parte din patrimoniul mondial UNESCO.", "În împrejurimi se află 18 lacuri glaciare (ochiuri de munte).", "Žabljak este cel mai faimos centru de sporturi de iarnă din Muntenegru.", "Cel mai înalt vârf din zonă este Bobotov Kuk (2522 m).", "În jurul orașului alternează pădurile de conifere cu pășunile alpine."],
      en: ["The town is situated at an impressive elevation of 1,456 meters above sea level.", "It is the central hub for exploring the magnificent Durmitor National Park.", "During the winter, \u017dabljak transforms into Montenegro's most popular ski resort.", "The local climate frequently records the lowest temperatures in the entire country.", "Traditional mountain agriculture and pastoral farming remain vital to the local economy."]
    }
  },
  {
    id: "me-007-black-lake",
    name: { de: "Schwarzer See", hu: "Fekete-tó", ro: "Lacul Negru", en: "Black Lake" },
    type: "lake",
    coords: [19.0911, 43.1467],
    parent: "ME-007",
    description: {
      de: "Der bekannteste und größte der 18 Gletscherseen im Durmitor.",
      hu: "A leghíresebb és legnagyobb a Durmitor 18 gleccsertava közül.",
      ro: "Cel mai faimos și mai mare dintre cele 18 lacuri glaciare din Durmitor.",
      en: "The most famous and largest of the 18 glacial lakes in Durmitor."
    },
    facts: {
      de: ["Besteht aus zwei Seen.", "Liegt am Fuße des Medjed.", "Spiegelt die Tannenwälder wider.", "Beliebt für Wanderungen."],
      hu: ["Két tóból áll.", "A Međed-csúcs lábánál fekszik.", "Vize fenyőerdőket tükröz.", "Népszerű túraútvonal."],
      ro: ["Format din două lacuri.", "Situat la poalele vârfului Medjed.", "Reflectă pădurile de brazi.", "Popular pentru drumeții."],
      en: ["Composed of two lakes.", "Located at the foot of Medjed peak.", "Reflects the fir forests.", "Popular for hiking."]
    },
    descriptionAdvanced: {
      de: "Der Crno Jezero (Schwarze See) ist das unangefochtene Kronjuwel des Durmitor-Nationalparks. Dieser atemberaubende Gletschersee liegt versteckt in dichten, dunklen Nadelwäldern, deren Spiegelung dem Wasser seine charakteristische, tiefgrüne bis schwarze Farbe verleiht. Umgeben von steilen Bergen wie dem markanten Međed Peak, ist er ein Traum für Wanderer und Fotografen. Geographie K6 – Bergseen.",
      hu: "A Fekete-tó (Crno Jezero) a Durmitor Nemzeti Park leghíresebb és legnagyobb gleccsertava, amely sűrű, sötét fenyőerdőkkel van övezve. Nevét a fák sötét visszatükröződéséről és a mély, rejtélyes vizéről kapta. A tó valójában két kisebb tavacskából áll, amelyeket egy szűk csatorna köt össze, nyáron pedig gyakran különválnak. A tó körüli kiépített ösvények és a háttérben magasodó Medjed-csúcs drámai látványa vonzza a természetfotósokat és túrázókat. Földrajz K6 – hegyvidéki tavak.",
      ro: "Lacul Negru este cel mai cunoscut lac glaciar din Parcul Național Durmitor, situat la poalele muntelui Međed. Apa cristalină a lacului, în care se reflectă pădurile întunecate de pini din jur, dă denumirea specială a lacului.",
      en: "The Black Lake (Crno Jezero) is the undisputed crown jewel of Durmitor National Park, an exquisite glacial lake situated just a short walk from \u017dabljak. Surrounded by a dense, towering forest of black pines, the lake derives its name from the dark, mesmerizing reflection of the trees in its incredibly clear waters. Dominated by the imposing Me\u0111ed peak in the background, it provides a perfectly tranquil setting for hiking, photography, and deep nature immersion. Geography K6 - Alpine glacial lakes."
    },
    factsAdvanced: {
      de: ["Der See besteht eigentlich aus zwei durch einen Kanal verbundenen Becken: dem Großen und dem Kleinen See.", "Er liegt auf einer Höhe von 1416 Metern über dem Meeresspiegel.", "Im Sommer erreicht das Wasser Temperaturen, die mutigen Besuchern das Schwimmen erlauben.", "Ein gut ausgebauter, 3,5 Kilometer langer Wanderweg führt komplett um das Gewässer.", "Das Eis auf dem See kann im Winter dicker als einen halben Meter werden."],
      hu: ["A tó körülbelül 1416 méteres tengerszint feletti magasságban fekszik.", "A tavat egy 3,5 kilométer hosszú, könnyen járható túraútvonal öleli körbe.", "Télen a tó teljesen befagy, nyáron viszont hőmérséklete elérheti a 20 Celsius-fokot is.", "A tó medrét hatalmas, ősi gleccserek vájták ki a jégkorszak idején."],
      ro: ["Lacul este compus de fapt din două părți: Lacul Mare și Lacul Mic.", "Lacul este situat la o altitudine de 1416 metri.", "Apa lacului este extrem de curată și transparentă.", "În jurul lacului există o potecă tematică de 3,5 km.", "Apa este alimentată de pârâurile care coboară din munții înconjurători.", "Lacul este simbolul Parcului Național Durmitor."],
      en: ["The lake consists of two distinct bodies of water, the 'Big Lake' and the 'Small Lake'.", "A scenic, well-maintained 3.5-kilometer walking trail completely circles the lake.", "It is located at an altitude of 1,416 meters above sea level.", "The water temperature in the summer rarely exceeds a refreshing 20 degrees Celsius.", "The lake's dark appearance is due to the dense surrounding black pine forest."]
    }
  },
  // ME-008: Plužine
  {
    id: "me-008-city",
    name: { de: "Plužine", hu: "Plužine", ro: "Plužine", en: "Plužine" },
    type: "city",
    coords: [18.8394, 43.1544],
    parent: "ME-008",
    description: {
      de: "Eine Stadt am Ufer des Piva-Stausees, umgeben von Schluchten.",
      hu: "Város a Piva-tó partján, kanyonokkal körülvéve.",
      ro: "Un oraș pe malul lacului Piva, înconjurat de canioane.",
      en: "A town on the shores of Lake Piva, surrounded by canyons."
    },
    facts: {
      de: ["Erbaut nach der Überflutung.", "Zentrum der Piva-Region.", "Bekannt für das Piva-Kloster.", "Bietet Wassersportmöglichkeiten."],
      hu: ["Az árasztás után épült fel.", "A Piva-régió központja.", "A Piva-kolostorról ismert.", "Vízi sportlehetőségeket kínál."],
      ro: ["Construit după inundație.", "Centrul regiunii Piva.", "Cunoscut pentru mănăstirea Piva.", "Oferă activități nautice."],
      en: ["Built after the flood.", "Center of the Piva region.", "Known for the Piva Monastery.", "Offers water sports."]
    },
    descriptionAdvanced: {
      de: "Plužine ist eine junge, moderne Siedlung am smaragdgrünen Piva-Stausee, umgeben von dramatischen Kalksteinklippen. Die ursprüngliche Stadt wurde in den 1970er Jahren überflutet, um einen riesigen hydroelektrischen Staudamm zu errichten, weshalb die gesamte Siedlung, einschließlich eines historischen Klosters, in höhere Lagen verlegt wurde. Heute ist die Region ein Paradies für Bootsfahrten und Naturliebhaber. Geographie K7 – Stauseen und Wasserkraft.",
      hu: "Plužine egy festői fekvésű kisváros a Piva-tó partján, Északnyugat-Montenegró hegyei között. A település története drámai fordulatot vett a 20. században, amikor az eredeti várost a Piva-folyó felduzzasztása miatt teljesen elárasztották, és a lakosságot feljebb költöztették. A mai Plužine modern, csendes, és tökéletes bázis a Piva-kanyon, valamint a közeli Durmitor felfedezéséhez. A smaragdzöld tó és a meredek sziklafalak drámai kontrasztja felejthetetlen látványt nyújt. Földrajz K7 – mesterséges tavak és települések.",
      ro: "Plužine este un oraș tânăr, mutat piatră cu piatră de pe fundul văii în timpul construirii barajului pe râul Piva. Situat pe malurile spectaculosului lac Piva, orașul este un paradis pentru iubitorii de natură, pescari și exploratori. Înconjurat de canioane și munți stâncoși, Plužine oferă un peisaj de o frumusețe sălbatică. Așezarea reprezintă principala poartă de acces către minunile naturale ale regiunii Piva.",
      en: "Plu\u017eine is a young, modern settlement located on the spectacular shores of Lake Piva in the northwestern corner of Montenegro. The original town was completely submerged when a massive hydroelectric dam was constructed in the 1970s, necessitating the relocation of the entire community to higher ground. Today, it stands as a peaceful, picturesque center for eco-tourism, offering incredible boat tours on the intensely turquoise waters of the artificial lake. Geography K7 - Artificial lakes and dams."
    },
    factsAdvanced: {
      de: ["Die Stadt liegt am Rande des Piva-Naturparks.", "Das Piva-Kloster wurde Stein für Stein abgebaut und an einem neuen Ort wieder aufgebaut.", "Der Piva-Staudamm ist mit 220 Metern eine der höchsten Bogenstaumauern Europas.", "Die Umgebung ist für unberührte, tiefgrüne Karstschluchten bekannt.", "Der Piva-See ist extrem kalt und eignet sich kaum zum Schwimmen, aber hervorragend zum Kajakfahren."],
      hu: ["A várost 1975-ben teljesen újjáépítették, mivel az eredeti település víz alá került.", "A Piva-tó Montenegró második legnagyobb mesterséges tava, amely energiatermelést szolgál.", "A város fontos állomása a hegyi túrázóknak és a kerékpárosoknak.", "A tó vizén a nyári hónapokban népszerűek a csónaktúrák és a horgászat."],
      ro: ["Orașul original se află acum scufundat pe fundul lacului Piva.", "Populația orașului nu depășește câteva mii de locuitori.", "Apele lacului Piva sunt de un albastru-smarald izbitor.", "Zona este populară pentru croaziere pe lac și drumeții montane.", "Economia locală se bazează mult pe hidroenergie și ecoturism."],
      en: ["The entire original town of Plu\u017eine was flooded to create Lake Piva.", "The current town was newly built in the 1970s on the steep slopes above the lake.", "Lake Piva is an artificial reservoir created by the massive 220-meter-high Mratinje Dam.", "The region is renowned for its breathtakingly steep canyons and crystal-clear waters.", "It serves as a primary access point for the pristine Tara River canyon."]
    }
  },
  {
    id: "me-008-piva-monastery",
    name: { de: "Kloster Piva", hu: "Piva-kolostor", ro: "Mănăstirea Piva", en: "Piva Monastery" },
    type: "historical",
    coords: [18.8250, 43.1110],
    parent: "ME-008",
    description: {
      de: "Ein Kloster, das Stein für Stein an einen neuen Ort verlegt wurde.",
      hu: "Kolostor, amelyet kőről kőre költöztettek új helyre.",
      ro: "O mănăstire care a fost mutată piatră cu piatră într-un loc nou.",
      en: "A monastery that was moved stone by stone to a new location."
    },
    facts: {
      de: ["Erbaut im 16. Jahrhundert.", "Wegen Kraftwerksbau verlegt.", "Prächtige Freskenzyklen.", "Besitzt reiche Schatzkammer."],
      hu: ["A 16. században épült.", "Vízi erőmű miatt költöztették.", "Pompás freskóciklusok.", "Gazdag kincstárral bír."],
      ro: ["Construită în secolul al XVI-lea.", "Mutată din cauza hidrocentralei.", "Cicluri superbe de fresce.", "Deține un tezaur bogat."],
      en: ["Built in the 16th century.", "Moved due to power plant construction.", "Superb fresco cycles.", "Has a rich treasury."]
    },
    descriptionAdvanced: {
      de: "Das Piva-Kloster ist ein faszinierendes serbisch-orthodoxes Kloster aus dem 16. Jahrhundert, dessen Existenz auf einer ingenieurtechnischen Meisterleistung beruht. Um es vor den Fluten des neuen Piva-Stausees zu retten, wurde die gesamte Anlage, einschließlich der wertvollen Fresken, Stein für Stein abgebaut und an einem höher gelegenen Ort wieder originalgetreu aufgebaut. Geschichte K7 – Bewahrung kulturellen Erbes.",
      hu: "A Piva-kolostor Montenegró egyik legkülönlegesebb ortodox szentélye, amely egyedülálló módon túlélte a Piva-tó duzzasztását. A 16. századi épületet az 1970-es években kőről kőre bontották szét, majd az eredeti helyétől több kilométerre, magasabban építették újjá. A kolostor külseje egyszerű és dísztelen, hogy ne vonzza magára az oszmán hódítók figyelmét, belseje azonban lélegzetelállító freskókkal van tele. A gondos áttelepítés a modern műemlékvédelem egyik legnagyobb balkáni bravúrja. Történelem K7 – műemlékvédelem.",
      ro: "Mănăstirea Piva este o adevărată minune a conservării istorice, fiind demontată și reconstruită bucată cu bucată pentru a o salva de la scufundare. Această acțiune monumentală, realizată în anii '70, a salvat fresce incredibile de o valoare inestimabilă. Aspectul exterior sobru al bisericii ascunde un interior strălucitor, cu un tezaur impresionant ce reflectă bogăția spirituală a regiunii. Este unul dintre cele mai importante lăcașuri de cult din nordul țării.",
      en: "The Piva Monastery is a fascinating testament to historical preservation and architectural resilience, originally built in the 16th century near the Piva River. When the river was dammed in the 1970s to create a hydroelectric reservoir, the entire monastery, including thousands of square meters of delicate frescoes, was meticulously dismantled stone by stone and moved to higher ground. Today, it stands exactly as it did centuries ago, a remarkably peaceful sanctuary hidden in the woods. History K8 - Monument preservation."
    },
    factsAdvanced: {
      de: ["Der aufwendige Umzug des Klosters dauerte volle 12 Jahre, von 1970 bis 1982.", "Über 1200 Quadratmeter an originalen Fresken wurden von den Wänden abgenommen und wieder angebracht.", "Das Kloster wurde ursprünglich von Sokollu Mehmed Pascha, einem osmanischen Wesir serbischer Herkunft, finanziert.", "Es beherbergt eine äußerst wertvolle Sammlung alter silberner Kreuze und handgeschriebener Bücher.", "Von außen wirkt das Kloster wie eine einfache steinerne Scheune, um keine Feinde anzulocken."],
      hu: ["A kolostort eredetileg 1573 és 1586 között építették a Piva-folyó forrásánál.", "Az átköltöztetés több mint egy évtizedig tartott, minden egyes követ beszámoztak.", "Belsejét több mint 1260 négyzetméternyi hiánytalanul átmentett freskó díszíti.", "A kolostor kincstára számos ősi kéziratot és értékes ezüsttárgyat őriz."],
      ro: ["Mănăstirea a fost construită inițial între anii 1573 și 1586.", "A fost mutată cu grijă cu câțiva kilometri mai sus, proces ce a durat peste un deceniu.", "Păstrează un iconostas impresionant sculptat în lemn și aurit.", "Pereții sunt acoperiți cu 1260 de metri pătrați de fresce.", "Adăpostește un psalm tipărit de unică valoare istorică."],
      en: ["The monastery was originally constructed between 1573 and 1586.", "It was completely relocated stone-by-stone between 1970 and 1982 to save it from flooding.", "The complex interior boasts over 1,260 square meters of highly valuable frescoes.", "The church's exterior was intentionally designed without a dome to avoid Ottoman detection.", "It houses a rich treasury featuring intricate silverwork and historic liturgical books."]
    }
  },
  // ME-009: Nikšic
  {
    id: "me-009-city",
    name: { de: "Nikšić", hu: "Nikšić", ro: "Nikšić", en: "Nikšić" },
    type: "city",
    coords: [18.9445, 42.7731],
    parent: "ME-009",
    description: {
      de: "Ein Industrie- und Bildungszentrum und die zweitgrößte Stadt.",
      hu: "Ipari és oktatási központ, az ország második legnagyobb városa.",
      ro: "Un centru industrial și educațional și al doilea oraș ca mărime.",
      en: "An industrial and educational center and the second largest city."
    },
    facts: {
      de: ["Heimat der Trebjesa-Brauerei.", "Bedeutende römische Wurzeln.", "Sitz der philosophischen Fakultät.", "Bekannt für seine Parks."],
      hu: ["A Trebjesa sörgyár otthona.", "Jelentős római gyökerek.", "Bölcsészettudományi kar székhelye.", "Parkjairól is ismert."],
      ro: ["Găzduiește berăria Trebjesa.", "Rădăcini romane importante.", "Sediul facultății de filozofie.", "Cunoscut pentru parcurile sale."],
      en: ["Home to the Trebjesa brewery.", "Significant Roman roots.", "Seat of the philosophy faculty.", "Known for its parks."]
    },
    descriptionAdvanced: {
      de: "Nikšić ist die zweitgrößte Stadt Montenegros und das industrielle Zentrum der Nation. Ursprünglich eine römische Festung, entwickelte sie sich im 20. Jahrhundert zu einer florierenden Universitäts- und Arbeiterstadt. Sie ist überregional berühmt für ihr exzellentes Bier und ihre stolze urbane Kultur, umgeben von großen Stauseen und weiten Karstfeldern. Geographie K5 – Industrie und Urbanisierung.",
      hu: "Nikšić Montenegró második legnagyobb városa, az ország ipari, oktatási és kulturális motorja. A tágas Nikšići-mezőn elterülő város eredetileg római katonai táborként indult, ma pedig pezsgő diákélettel és híres sörfőzdével büszkélkedhet. A város határában tornyosul a Trebjesa-hegy, míg a környék mesterséges tavai hűsítő menedéket kínálnak a nyári hőségben. Nikšić egy igazi montenegrói munkásváros, amely a modern ipar és a történelmi emlékek különleges keveréke. Földrajz K6 – ipari városok.",
      ro: "Nikšić este al doilea oraș ca mărime din Muntenegru, fiind recunoscut ca centru industrial și educațional al țării. Orașul este situat la poalele muntelui Trebjesa, iar numeroasele lacuri artificiale din împrejurimi oferă oportunități excelente pentru relaxare și pescuit sportiv, completând profilul economic al zonei.",
      en: "Nik\u0161i\u0107 serves as the industrial and educational core of Montenegro, nestled securely at the base of the Trebjesa mountain. As the second-largest city in the country, it successfully combines a heavy industrial legacy with a rapidly growing cultural and academic scene. The surrounding region is defined by several picturesque man-made lakes, which have become essential hubs for local recreation, sports fishing, and broad economic activity. Geography K6 - Regional industrial development."
    },
    factsAdvanced: {
      de: ["Nikšić ist die Heimat des berühmtesten montenegrinischen Biers, 'Nikšićko Pivo'.", "Die moderne Stadt wurde im späten 19. Jahrhundert nach einem strengen Schachbrettmuster geplant.", "In der Nähe liegt die gewaltige Festung Bedem, die über der Stadt thront.", "Drei künstliche Seen (Krupac, Slano, Vrtac) umgeben die Stadt und dienen der Erholung.", "Die Rote Felsenhöhle (Crvena Stijena) unweit der Stadt ist eine bedeutende paläolithische Fundstätte."],
      hu: ["Itt gyártják a híres Nikšićko sört (Nikšićko Pivo), amely Montenegró nemzeti itala.", "A várost egyedi, 19. században tervezett sugárutas utcahálózat jellemzi.", "Nikšić az ország legfontosabb acélipari és bányászati központja.", "A város fölé magasodik az ősi Bedem erődítmény romja."],
      ro: ["Orașul are o suprafață de 2065 km².", "Aici funcționează fabrica de bere Trebjesa, care produce faimoasa bere Nikšićko.", "Nikšić este sediul Facultății de Filozofie.", "Lacul Krupac este cel mai mare centru de recreere din apropierea orașului.", "Muntele Trebjesa este o pădure-parc vastă în centrul orașului.", "În împrejurimi se găsesc mai multe situri arheologice importante din perioada romană."],
      en: ["Nik\u0161i\u0107 is the largest municipality in Montenegro by total land area.", "The city is famous for brewing Nik\u0161i\u0107ko Pivo, the most popular national beer.", "It hosts the primary campus of the national Faculty of Philosophy.", "The modern city layout was designed in the 19th century with a strict grid pattern.", "The area was historically a significant Roman military settlement called Anderba."]
    }
  },
  {
    id: "me-009-krupac",
    name: { de: "Krupac-See", hu: "Krupac-tó", ro: "Lacul Krupac", en: "Krupac Lake" },
    type: "lake",
    coords: [18.8900, 42.7800],
    parent: "ME-009",
    description: {
      de: "Ein künstlicher See in der Nähe von Nikšić, ein beliebtes Erholungsgebiet.",
      hu: "Mesterséges tó Nikšić közelében, népszerű üdülőhely.",
      ro: "Un lac artificial lângă Nikšić, o zonă populară de recreere.",
      en: "An artificial lake near Nikšić, a popular recreation area."
    },
    facts: {
      de: ["Wird 'Meer von Nikšić' genannt.", "Austragungsort von Musikfestivals.", "Beliebt zum Schwimmen.", "Reich an Fischbestand."],
      hu: ["'Nikšić tengerének' is hívják.", "Zenei fesztiválok helyszíne.", "Kedvelt fürdőhely.", "Gazdag halállománnyal bír."],
      ro: ["Numit „marea din Nikšić”.", "Gazda unor festivaluri de muzică.", "Popular pentru înot.", "Bogat în resurse piscicole."],
      en: ["Called the 'Nikšić sea'.", "Host to music festivals.", "Popular for swimming.", "Rich in fish stock."]
    },
    descriptionAdvanced: {
      de: "Der Krupac-See ist ein künstlicher Stausee in der Nähe von Nikšić, der in den warmen Sommermonaten als das 'Meer von Nikšić' fungiert. Mit seinem klaren Wasser, langen Kiesstränden und großzügigen Erholungsgebieten ist der See das beliebteste Ausflugsziel für Schwimmer, Angler und Wassersportler der Region. Das angrenzende Pappelwäldchen spendet angenehmen Schatten. Geographie K5 – Künstliche Seen und Erholung.",
      hu: "A Krupac-tó (Krupačko jezero) Nikšić városának legnagyobb és legnépszerűbb mesterséges tava, amelyet a helyiek gyakran a 'Nikšići-tengernek' neveznek. A tavat elsősorban energiatermelés céljából hozták létre, ám napjainkra jelentős rekreációs központtá vált. A tiszta vizű, hatalmas kiterjedésű tó kiválóan alkalmas úszásra, vízi sportokra és horgászatra. A nyári hónapokban a partja fesztiváloknak és koncerteknek ad otthont, a tó körüli sétányok pedig megtelnek élettel. Földrajz K5 – rekreáció és mesterséges tavak.",
      ro: "Lacul Krupac, situat în apropiere de Nikšić, este supranumit \"marea\" orașului de către locuitorii săi. Acest mare lac artificial oferă condiții excelente pentru înot, sporturi nautice și relaxare pe timp de vară. Malurile sale împădurite ascund plaje mici și faleze pitorești, care se umplu de viață în weekenduri. În fiecare vară, lacul este scena festivalului de muzică Lake Fest, care atrage artiști internaționali.",
      en: "Lake Krupac is an expansive artificial reservoir located just outside of Nik\u0161i\u0107, serving as the city's primary recreational oasis during the hot summer months. Known locally as the 'Sea of Nik\u0161i\u0107', its clean, refreshing waters are extremely popular for swimming, kayaking, and various water sports. Surrounded by a beautifully maintained promenade and tall poplar trees, the lake perfectly demonstrates how industrial water management can successfully create vibrant public leisure spaces. Geography K5 - Recreational reservoirs."
    },
    factsAdvanced: {
      de: ["Der See entstand im Jahr 1950 durch den Bau eines Staudamms.", "Er ist ein wichtiger Veranstaltungsort für das jährliche 'Lake Fest' Rockmusik-Festival.", "Eine massive, begehbare Staumauer schließt das Becken auf einer Seite ab.", "Das Wasser ist bekannt für seine Klarheit und Sauberkeit.", "Im Sommer gibt es hier Wasserski-Angebote und Reitschulen."],
      hu: ["A tó partján rendezik meg évente a népszerű Lake Fest rockzenei fesztivált.", "A víztározó nyári vízhőmérséklete elérheti a kellemes 24 Celsius-fokot is.", "A tavat egy hatalmas földgát duzzasztja fel, amely kiváló sétálóhely.", "A vízfelület számos vándormadár számára nyújt ideiglenes pihenőhelyet."],
      ro: ["Lacul Krupac este o acumulare artificială formată pentru a regla apele din zonă.", "Este cea mai mare atracție de vară pentru locuitorii din Nikšić.", "Lake Fest, organizat aici, este unul dintre marile festivaluri din Muntenegru.", "Apa lacului este renumită pentru puritatea și răcoarea sa.", "Dispune de o faleză lungă folosită intens pentru plimbări."],
      en: ["The lake was artificially created to support the local hydroelectric power system.", "It features a popular, well-developed beach area utilized by thousands during summer.", "The lake annually hosts the renowned 'Lake Fest' international rock music festival.", "A scenic walking and cycling path completely surrounds the water's edge.", "The waters are highly regarded for sport fishing, particularly for trout and carp."]
    }
  },
  // ME-010: Kotor
  {
    id: "me-010-city",
    name: { de: "Kotor", hu: "Kotor", ro: "Kotor", en: "Kotor" },
    type: "city",
    coords: [18.7712, 42.4247],
    parent: "ME-010",
    description: {
      de: "Eine mittelalterliche Stadt unter UNESCO-Schutz in einer tiefen Bucht.",
      hu: "UNESCO-védelem alatt álló középkori város egy mély öbölben.",
      ro: "Un oraș medieval protejat de UNESCO, situat într-un golf adânc.",
      en: "A UNESCO-protected medieval town situated in a deep bay."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Berühmt für venezianische Mauern.", "Kathedrale des Hl. Tryphon.", "Bekannt für seine Katzen."],
      hu: ["UNESCO Világörökség része.", "Híres velencei falak.", "Szent Tripun-székesegyház.", "Macskáiról is nevezetes."],
      ro: ["Patrimoniu Mondial UNESCO.", "Faimos pentru zidurile venețiene.", "Catedrala Sfântul Tryphon.", "Cunoscut pentru pisicile sale."],
      en: ["UNESCO World Heritage site.", "Famous for Venetian walls.", "St. Tryphon's Cathedral.", "Known for its cats."]
    },
    descriptionAdvanced: {
      de: "Kotor ist eine mittelalterliche Küstenstadt in der gleichnamigen Bucht und ein wahres Labyrinth aus gepflasterten Gassen, alten Kirchen und malerischen Plätzen. Geschützt von steilen Bergen und massiven Verteidigungsmauern, hat die Stadt die Einflüsse der venezianischen Republik perfekt bewahrt. Ihre Architektur und die tiefe Seefahrertradition machen sie zu einem der faszinierendsten UNESCO-Welterbestätten der Adria. Geschichte K6 – Venezianische Seemacht.",
      hu: "Kotor Montenegró egyik leglátogatottabb és történelmileg legjelentősebb tengerparti városa, amely a Kotori-öböl legvédettebb pontján fekszik. A meredek sziklafalak tövében épült középkori óvárost masszív, velencei stílusú várfalak veszik körül, amelyek egyenesen felkúsznak a San Giovanni-erődhöz. Az UNESCO Világörökség részeként számon tartott macskaköves, szűk utcák és terek valóságos szabadtéri múzeumot alkotnak. A város évszázadokon át a tengeri kereskedelem és hajózás egyik legfontosabb balkáni központja volt. Történelem K6 – velencei tengeri birodalom.",
      ro: "Kotor este un oraș cu atmosferă medievală, inclus în patrimoniul UNESCO, situat la baza golfului Kotor și înconjurat de munți impunători. Orașul vechi este un adevărat muzeu în aer liber, cu străzi înguste, întortocheate și o arhitectură medievală bine conservată, care amintește de perioada în care orașul se afla sub influența Republicii Venețiene, fiind un port comercial strategic.",
      en: "Kotor is a mesmerizing medieval coastal town located deep within the Bay of Kotor, completely surrounded by imposing, dark mountains. The UNESCO-listed Old Town is a meticulously preserved labyrinth of narrow cobblestone streets, hidden piazzas, and ancient stone churches. Strongly influenced by centuries of Venetian rule, the city\u2019s unique maritime heritage and striking architecture make it an unparalleled living museum. Geography K6 - Medieval coastal towns."
    },
    factsAdvanced: {
      de: ["Die Stadtmauern von Kotor sind beeindruckende 4,5 Kilometer lang.", "Die Kathedrale St. Tryphon wurde im Jahr 1166 geweiht.", "Die Altstadt in Form eines Dreiecks wird vom Berg Lovćen und der Bucht begrenzt.", "Kotor war vom 15. bis zum späten 18. Jahrhundert unter venezianischer Herrschaft.", "Kotor wird oft als die 'Stadt der Katzen' bezeichnet, da zahllose Streuner die Altstadt bevölkern."],
      hu: ["Kotor óvárosában található a 12. században épült, román stílusú Szent Tripun-székesegyház.", "A várost övező védőfalak hossza meghaladja a 4,5 kilométert.", "A várost szokatlanul nagy számú, a lakosok által tisztelt kóbor macska lakja.", "A helyi Tengerészeti Múzeum az Adriai-tenger hajózásának gazdag történelmét mutatja be."],
      ro: ["Lungimea zidurilor orașului atinge 4,5 kilometri.", "Catedrala Sfântul Trifon a fost construită în anul 1166.", "Kotor face parte din Patrimoniul Mondial UNESCO din 1979.", "Orașul se mândrește cu o catedrală veche de peste 300 de ani.", "Golful Kotor este adesea numit cel mai sudic fiord al Europei.", "Peste 2000 de trepte duc către fortăreața San Giovanni."],
      en: ["The city is fortified by massive ancient walls stretching over 4.5 kilometers.", "Kotor was officially inscribed as a UNESCO World Heritage site in 1979.", "The town is famous for its large population of friendly, roaming stray cats.", "The Cathedral of Saint Tryphon within the walls dates back to 1166.", "It served as an incredibly strategic commercial port for the Venetian Republic."]
    }
  },
  {
    id: "me-010-perast",
    name: { de: "Perast", hu: "Perast", ro: "Perast", en: "Perast" },
    type: "city",
    coords: [18.7000, 42.4867],
    parent: "ME-010",
    description: {
      de: "Eine ruhige, barocke Stadt direkt am Wasser in der Bucht von Kotor.",
      hu: "Csendes, barokk stílusú vízparti város a Kotori-öbölben.",
      ro: "Un oraș baroc liniștit pe malul apei în Golful Kotor.",
      en: "A quiet, baroque-style waterfront town in the Bay of Kotor."
    },
    facts: {
      de: ["Einst eine wichtige Seefahrerstadt.", "Hat 16 Paläste und 19 Kirchen.", "Blick auf zwei Inseln.", "Vollständig geschützte Altstadt."],
      hu: ["Egykor fontos hajós város volt.", "16 palotája és 19 temploma van.", "Kilátás két kis szigetre.", "Teljesen védett óváros."],
      ro: ["Fost oraș important de navigatori.", "Are 16 palate și 19 biserici.", "Vedere spre două insule.", "Oraș vechi complet protejat."],
      en: ["Once an important maritime town.", "Has 16 palaces and 19 churches.", "Overlooks two islets.", "Completely protected old town."]
    },
    descriptionAdvanced: {
      de: "Perast ist ein makellos erhaltenes Barockstädtchen in der Bucht von Kotor, das einst eine mächtige Seefahrerhochburg der venezianischen Republik war. Mit seinen prachtvollen Palästen aus weißem Stein, den zahlreichen alten Kirchen und dem völligen Fehlen von moderner Bebauung wirkt es wie ein riesiges Freilichtmuseum. Das Dorf bietet einen ungestörten Blick auf die berühmten Zwillingsinseln in der Bucht. Geschichte K6 – Seefahrt und Barockarchitektur.",
      hu: "Perast egy festői szépségű, apró tengerparti városka a Kotori-öböl szívében, amely egykor gazdag tengerészek és hajóskapitányok otthona volt. A barokk palotákkal és kőből épült templomokkal szegélyezett partvidék szinte érintetlenül őrzi a velencei aranykor hangulatát. Bár ma alig néhány százan lakják, Perast lenyűgöző eleganciája és a két közeli apró szigetre nyíló kilátás mágnesként vonzza a látogatókat. A település történelme szorosan összefonódik a kalózkodással és az adriai tengeri kereskedelemmel. Történelem K7 – tengerészeti hatalom és kereskedelem.",
      ro: "Perast este un mic oraș baroc situat în Golful Kotor, renumit pentru palatele sale grandioase și istoria navală legendară. Așezat pe o pantă îngustă cu vedere la mare, Perast pare înghețat în timp, oferind un peisaj pitoresc dominat de turnul zvelt al bisericii sale centrale. Orașul a dat naștere unor navigatori și amirali celebri și a prosperat în perioada dominației venețiene. Este locul de unde vizitatorii pot porni spre insula artificială Madonna de pe Stâncă.",
      en: "Perast is a flawlessly preserved Baroque jewel situated gracefully on the shores of the Bay of Kotor. This tiny, peaceful settlement was once a thriving maritime powerhouse, home to wealthy sea captains and skilled sailors whose grand stone palaces still line the waterfront. Today, it offers a remarkably tranquil atmosphere, free from modern urban development, perfectly capturing the romance and elegance of the 17th and 18th centuries. History K7 - Baroque maritime architecture."
    },
    factsAdvanced: {
      de: ["Perast besitzt 16 barocke Paläste, die von wohlhabenden Seekapitänen erbaut wurden.", "Die Stadt hatte im 18. Jahrhundert eine Flotte von über 100 Handelsschiffen.", "Im Ort gibt es fast ebenso viele historische Kirchen (19) wie ständige Einwohner.", "Zar Peter der Große schickte seine Offiziere nach Perast, um dort Navigation zu studieren.", "Der markante Glockenturm der St. Nikolaus-Kirche ist mit 55 Metern der höchste der Bucht."],
      hu: ["A kisváros fénykorában 16 pompás barokk palotával és 19 katolikus templommal büszkélkedhetett.", "A város parti sétányáról tökéletes kilátás nyílik a Szirti Madonna szigetére.", "Az orosz cár, Nagy Péter is küldött ide tengerészeket, hogy a helyi kapitányoktól tanuljanak.", "Perastban tilos az új építkezés, hogy megőrizzék a történelmi városképet."],
      ro: ["Perast găzduiește 16 palate baroce și 19 biserici istorice.", "Orașul vechi este pietonal, interzicând traficul mașinilor pe faleză.", "A avut o școală navală unde ofițerii ruși veneau să învețe navigația.", "Cel mai proeminent palat este Palatul Bujović, transformat în muzeu.", "Populația stabilă a orașului este astăzi sub 300 de persoane."],
      en: ["The small town boasts exactly 16 preserved Baroque palaces and 19 historic churches.", "It has a permanent year-round population of fewer than 300 residents.", "Perast played a critical role in defending the bay against Ottoman naval attacks.", "The local maritime school once trained famous Russian naval officers.", "Motorized vehicles are largely banned from the waterfront promenade during summer."]
    }
  },
  // ME-011: Andrijevica
  {
    id: "me-011-city",
    name: { de: "Andrijevica", hu: "Andrijevica", ro: "Andrijevica", en: "Andrijevica" },
    type: "city",
    coords: [19.7917, 42.7339],
    parent: "ME-011",
    description: {
      de: "Eine kleine Stadt im Tal des Flusses Lim, umgeben von Komovi.",
      hu: "Kisváros a Lim folyó völgyében, a Komovi-hegység gyűrűjében.",
      ro: "Un oraș mic în valea râului Lim, înconjurat de Komovi.",
      en: "A small town in the Lim river valley, surrounded by Komovi."
    },
    facts: {
      de: ["Gegründet im 19. Jahrhundert.", "Zentrum der Vasojevići-Region.", "Ausgangspunkt für Bergsteiger.", "Reich an Bergquellen."],
      hu: ["A 19. században alapították.", "A Vasojevići régió központja.", "Hegymászók kedvelt bázisa.", "Hegyi forrásokban gazdag."],
      ro: ["Fondat în secolul al XIX-lea.", "Centrul regiunii Vasojevići.", "Punct de plecare pentru alpiniști.", "Bogat în izvoare montane."],
      en: ["Founded in the 19th century.", "Center of the Vasojevići region.", "Starting point for mountaineers.", "Rich in mountain springs."]
    },
    descriptionAdvanced: {
      de: "Andrijevica ist eine kleine, beschauliche Bergstadt im Komovi-Gebirge und ein Ort von großer historischer Bedeutung für die Region. Sie liegt auf einer Flussterrasse des Lim und ist von majestätischen Alpengipfeln umgeben, was sie zu einem perfekten Zufluchtsort für Naturliebhaber macht. Die Region ist reich an orthodoxer Geschichte und traditionellem Bergleben. Geographie K5 – Alpentäler.",
      hu: "Andrijevica egy apró, békés település Északkelet-Montenegróban, a Lim-folyó festői völgyében. A település a magasba törő Komovi-hegység kapuja, így elsősorban a természetjárók, hegymászók és a nyugodt pihenésre vágyók keresik fel. A városka építészete egyszerű, a fafeldolgozás és a mezőgazdaság határozza meg a helyiek mindennapjait. Bár távol esik a nagy turisztikai központoktól, Andrijevica barátságos atmoszférája és az érintetlen természeti környezet egyedülálló bájt kölcsönöz neki. Földrajz K5 – hegyvidéki kisvárosok.",
      ro: "Andrijevica este un mic orășel montan situat de-a lungul râului Lim, înconjurat de masivele Komovi, Bjelasica și Prokletije. Cunoscut pentru istoria sa legată de tribul Vasojevići, așezarea păstrează o atmosferă tradițională autentică, oferind o ospitalitate de neegalat. Orașul atrage alpinisti și drumeți dornici să exploreze vârfurile stâncoase neatinse ale regiunii. De asemenea, oferă peisaje idilice perfecte pentru relaxare și conectare cu natura.",
      en: "Andrijevica is a small, serene town nestled deeply within the Lim River valley, surrounded by the dramatic peaks of the Komovi mountains. Traditionally serving as a crucial crossroads between the northern highlands and the capital, it remains deeply connected to pastoral traditions and agricultural life. The town\u2019s peaceful atmosphere provides a perfect, authentic starting point for eco-tourism and demanding hiking expeditions into the wilderness. Geography K5 - Highland river valleys."
    },
    factsAdvanced: {
      de: ["Die Stadt liegt malerisch am Zusammenfluss der Flüsse Lim und Zlorečica.", "Das Komovi-Gebirge gehört zu den spektakulärsten alpinen Massiven des Landes.", "Die Region ist berühmt für ihre alten Buchen- und Nadelwälder.", "Andrijevica war ein wichtiges kulturelles Zentrum während der Nemanjić-Dynastie.", "Die umliegenden Almdörfer bewahren die jahrhundertealte Tradition der Schafzucht."],
      hu: ["A városka népessége alig haladja meg az ezer főt, így az ország egyik legkisebb központja.", "Andrijevica a történelmi szerb-montenegrói hegyi átjárók egyik fontos pihenőhelye volt.", "A helyi gazdaság nagyrészt a gyümölcstermesztésre és a juhászatra épül.", "A település központjában egy kis park állít emléket a balkáni háborúk áldozatainak."],
      ro: ["Este considerat centrul istoric al tribului montenegrean Vasojevići.", "Orașul a fost fondat abia la sfârșitul secolului al XIX-lea.", "Parcul central al orașului găzduiește un monument dedicat eroilor locali.", "Reprezintă punctul de plecare principal către masivul montan Komovi.", "Râul Lim oferă oportunități excelente pentru pescuit sportiv."],
      en: ["The town is situated at the confluence of the Lim and Zlore\u010dica rivers.", "It is surrounded by several mountain massifs including Komovi, Bjelasica, and Prokletije.", "The local economy is heavily sustained by forestry, agriculture, and livestock farming.", "Andrijevica played a highly significant role during the Balkan Wars and World War I.", "The region is known for its unspoiled natural beauty and traditional highland culture."]
    }
  },
  {
    id: "me-011-komovi",
    name: { de: "Komovi", hu: "Komovi", ro: "Komovi", en: "Komovi" },
    type: "mountain",
    coords: [19.6667, 42.7167],
    parent: "ME-011",
    description: {
      de: "Eines der beeindruckendsten Gebirgsmassive Montenegros.",
      hu: "Montenegró egyik leglenyűgözőbb hegymasszívuma.",
      ro: "Unul dintre cele mai impresionante masive montane din Muntenegru.",
      en: "One of the most impressive mountain massifs in Montenegro."
    },
    facts: {
      de: ["Drei markante Gipfel.", "Über 2400 m hoch.", "Reich an Almwiesen.", "Beliebt für Hochgebirgswandern."],
      hu: ["Három jellegzetes csúcsból áll.", "2400 méter feletti magasság.", "Alpesi legelőkben gazdag.", "Népszerű magashegyi túrahely."],
      ro: ["Trei vârfuri proeminente.", "Peste 2400 m înălțime.", "Bogat în pășuni alpine.", "Popular pentru drumeții montane."],
      en: ["Composed of three prominent peaks.", "Over 2400 m high.", "Rich in alpine meadows.", "Popular for high mountain hiking."]
    },
    descriptionAdvanced: {
      de: "Das Komovi-Gebirge gehört zu den beeindruckendsten und wildesten Karstmassiven der Dinarischen Alpen. Es zeichnet sich durch drei hoch aufragende, felsige Gipfel aus, die von weiten, unberührten Almwiesen umgeben sind. Die Region bietet abseits der großen Touristenströme eine pure Naturerfahrung und ist die Heimat traditioneller Schafhirten, die hier in den Sommermonaten in Holzhütten leben. Geographie K7 – Karstformationen.",
      hu: "A Komovi-hegység Montenegró egyik legimpozánsabb, egyben legkevésbé felfedezett magashegységi területe. A drámai, sziklás csúcsok és a mély, gleccserek által vájt völgyek lenyűgöző alpesi tájat alkotnak. A hegyvidéket sűrű erdők és dús, vadvirágos legelők (katunok) borítják, ahol a pásztorok a mai napig hagyományos módon legeltetik nyájaikat. A sziklás hegygerincek kihívást jelentenek az alpinisták számára, míg az alacsonyabb lankák idilli túrázóhelyek. Földrajz K6 – karszthegységek.",
      ro: "Masivul Komovi este unul dintre cele mai impresionante și dramatice lanțuri muntoase din Muntenegru, oferind vârfuri stâncoase ascuțite ce domină peisajul. Deși este mai puțin vizitat decât Durmitor, munții Komovi recompensează alpiniștii cu priveliști neobstrucționate asupra întregului nord al țării și asupra Albaniei vecine. Pășunile alpine sunt punctate vara cu colibe pastorale tradiționale numite „katun”, reflectând un mod de viață care a rămas neschimbat de secole.",
      en: "The Komovi mountain range stands out as one of the most impressive and visually striking massifs in Montenegro, characterized by its sharp, jagged rocky peaks. Surrounded by vast, undulating alpine pastures known as '\u0161tavna', the area has been historically utilized by local shepherds for centuries. The demanding terrain offers exceptional, challenging trekking routes and pristine vistas, making it a highly rewarding destination for serious alpinists. Geography K6 - Karst alpine peaks."
    },
    factsAdvanced: {
      de: ["Die drei Hauptgipfel sind Kom Kučki (2487m), Kom Vasojevićki (2461m) und Kom Ljevorečki (2453m).", "Das Gebirge ist eine wichtige Wasserscheide zwischen dem Schwarzen Meer und der Adria.", "Komovi wurde aufgrund seiner einzigartigen Flora und Fauna zum Naturpark erklärt.", "Im Sommer dominieren wilde Blaubeeren und seltene Alpenblumen die Wiesen.", "Das Gebiet ist ein hervorragendes Revier für anspruchsvolles Bergsteigen."],
      hu: ["A hegycsoport három fő csúcsból áll, amelyek közül a Kučki Kom a legmagasabb (2487 m).", "A terület 2018-ban kapott regionális természeti parki besorolást a flóra védelmére.", "A hegység a nevét a helyi illír-kelta gyökerű szavakból kapta.", "A hegyoldalakon gyakran találkozhatunk hagyományos faházakban élő pásztorokkal."],
      ro: ["Cel mai înalt vârf din masiv este Kom Kučki, având 2487 de metri.", "Zona este locuită sezonier de ciobani, în adăposturile tradiționale katun.", "Masivul face parte dintr-o rezervație naturală protejată.", "Pădurile de fag și conifere acoperă etajele inferioare ale muntelui.", "Traseele spre vârfuri sunt provocatoare și necesită echipament de munte adecvat."],
      en: ["The highest peak in the range is Kom Ku\u010dki, towering at 2,487 meters.", "The mountains are primarily composed of harsh limestone and dolomite rock formations.", "The region is home to several rare endemic plant species and diverse wildlife.", "During summer, traditional shepherd settlements temporarily populate the high pastures.", "The area provides critical headwaters for the Tara and Lim river systems."]
    }
  },
  // ME-012: Podgorica
  {
    id: "me-012-city",
    name: { de: "Podgorica", hu: "Podgorica", ro: "Podgorica", en: "Podgorica" },
    type: "city",
    coords: [19.2594, 42.4411],
    parent: "ME-012",
    description: {
      de: "Die moderne Hauptstadt und das administrative Zentrum Montenegros.",
      hu: "Modern főváros és Montenegró adminisztratív központja.",
      ro: "Capitala modernă și centrul administrativ al Muntenegrului.",
      en: "The modern capital and administrative center of Montenegro."
    },
    facts: {
      de: ["Früher Titograd genannt.", "Liegt an fünf Flüssen.", "Hat viele Grünflächen.", "Größte Stadt des Landes."],
      hu: ["Korábban Titogradnak hívták.", "Öt folyó találkozásánál fekszik.", "Sok zöldfelülettel rendelkezik.", "Az ország legnagyobb városa."],
      ro: ["Anterior numit Titograd.", "Situat la intersecția a cinci râuri.", "Are multe spații verzi.", "Cel mai mare oraș din țară."],
      en: ["Formerly called Titograd.", "Located at the confluence of five rivers.", "Has many green spaces.", "Largest city in the country."]
    },
    descriptionAdvanced: {
      de: "Podgorica ist die moderne Hauptstadt Montenegros und das politische, wirtschaftliche und kulturelle Herz des Landes. Sie liegt in einer weiten Ebene, wo fünf Flüsse zusammenfließen, und vereint Überreste osmanischer Architektur mit brutalisitischen sozialistischen Bauten und modernen Glasfassaden. Nach massiven Zerstörungen im Zweiten Weltkrieg wurde die Stadt als Titograd neu aufgebaut und ist heute eine grüne, aufstrebende Metropole. Geographie K7 – Stadtentwicklung.",
      hu: "Podgorica Montenegró modern és lüktető fővárosa, az ország politikai, gazdasági és oktatási központja. A város öt folyó – a Morača, Ribnica, Zeta, Cijevna és Sitnica – találkozásánál fekszik egy tágas síkságon. Mivel a második világháború alatt szinte teljesen elpusztult, ma széles sugárutak, zöld parkok és a jugoszláv szocialista építészet emlékei határozzák meg a képét. Podgorica (egykor Titograd) dinamikusan fejlődik, ötvözve az ősi római és oszmán múlt töredékeit a modern metropoliszok lendületével. Földrajz K7 – városfejlődés és fővárosok.",
      ro: "Podgorica este capitala modernă a Muntenegrului, servind drept centru administrativ, economic și cultural al țării. Orașul este situat la confluența a cinci râuri, ceea ce îi conferă un peisaj unic, iar după secole de provocări istorice, s-a transformat într-o metropolă vibrantă, plină de parcuri verzi și zone recreative. Este un punct de plecare ideal pentru a explora istoria diversă a țării și frumusețea naturală a regiunii balcanice.",
      en: "Podgorica serves as the modern capital and the undisputed political, economic, and cultural heart of Montenegro. Located in a wide, flat plain at the confluence of five rivers, the city presents a fascinating contrast of Ottoman remnants, brutalist socialist-era blocks, and sleek modern architecture. Having been largely destroyed during World War II, it was rapidly rebuilt as Titograd and continues to expand today as a vibrant, green metropolis. Geography K7 - Urban development and capital cities."
    },
    factsAdvanced: {
      de: ["Die Stadt wird von den fünf Flüssen Morača, Ribnica, Zeta, Cijevna und Sitnica durchquert.", "Von 1946 bis 1992 trug die Stadt den Namen Titograd.", "Die Millennium-Brücke ist ein weithin sichtbares Wahrzeichen der modernen Architektur.", "Die antike römische Siedlung Doclea (Duklja) befand sich nur drei Kilometer vom heutigen Zentrum entfernt.", "Die Sahat Kula (Uhrturm) ist eines der wenigen erhaltenen osmanischen Gebäude im Stadtteil Stara Varoš."],
      hu: ["A várost 1946 és 1992 között Titogradnak hívták a jugoszláv elnök, Josip Broz Tito tiszteletére.", "A város területén található az ősi római település, Doclea (Duklja) romja.", "Podgorica az egyik legforróbb európai főváros a nyári hónapokban.", "A Stara Varoš (Óváros) negyedben máig fennmaradt az oszmán óratorony (Sahat Kula)."],
      ro: ["Are o suprafață de 108 km².", "Orașul este situat la confluența râurilor Morača, Ribnica, Zeta, Cijevna și Sitnica.", "Aici se află cel mai mare aeroport din Muntenegru.", "Între anii 1946 și 1992, orașul a purtat numele de Titograd.", "Podul Millennium este unul dintre cele mai cunoscute simboluri moderne ale orașului.", "Orașul găzduiește peste 10 parcuri semnificative."],
      en: ["The city is uniquely situated at the confluence of the Mora\u010da, Ribnica, Zeta, Cijevna, and Sitnica rivers.", "Between 1946 and 1992, the city was officially named Titograd.", "It experiences some of the hottest summer temperatures among all European capitals.", "The ancient Roman settlement of Doclea (Duklja) is located just outside the modern center.", "Podgorica contains over ten significant public parks, making it remarkably green."]
    }
  },
  {
    id: "me-012-millennium",
    name: { de: "Millennium-Brücke", hu: "Milenijum híd", ro: "Podul Mileniului", en: "Millennium Bridge" },
    type: "landmark",
    coords: [19.2589, 42.4450],
    parent: "ME-012",
    description: {
      de: "Ein modernes Wahrzeichen der Hauptstadt über den Fluss Morača.",
      hu: "A főváros modern jelképe a Morača folyó felett.",
      ro: "Un simbol modern al capitalei peste râul Morača.",
      en: "A modern symbol of the capital over the Morača river."
    },
    facts: {
      de: ["Eröffnet im Jahr 2005.", "173 Meter lang.", "Beeindruckende Pylon-Struktur.", "Verbindet Alt- und Neustadt."],
      hu: ["2005-ben adták át.", "173 méter hosszú.", "Lenyűgöző pilonos szerkezet.", "Összeköti az óvárost az újjal."],
      ro: ["Inaugurat în anul 2005.", "Lung de 173 metri.", "Structură de pilon impresionantă.", "Conectează orașul vechi de cel nou."],
      en: ["Opened in 2005.", "173 meters long.", "Impressive pylon structure.", "Connects old and new town."]
    },
    descriptionAdvanced: {
      de: "Die Millennium-Brücke ist das architektonische Wahrzeichen des modernen Podgorica und überspannt elegant den Fluss Morača. Mit ihrem asymmetrischen Design und dem massiven weißen Pylon, von dem strahlend weiße Stahlseile ausgehen, symbolisiert sie den Aufbruch Montenegros ins 21. Jahrhundert. Bei Nacht wird die Brücke eindrucksvoll beleuchtet und ist ein beliebtes Fotomotiv der Hauptstadt. Geographie K7 – Moderne urbane Infrastruktur.",
      hu: "A Millennium-híd Podgorica legjellegzetesebb modern építészeti szimbóluma, amely a gyors folyású Morača-folyót íveli át. A 2005-ben átadott, látványos ferdekábeles híd összeköti a sűrűn beépített, modern városrészeket a történelmi központtal. Hófehér, 57 méter magas pilonja és acélkábelei dinamikus, futurisztikus megjelenést kölcsönöznek az építménynek. Éjszaka a hidat lenyűgöző díszkivilágítás világítja meg, így a montenegrói főváros éjszakai panorámájának elengedhetetlen része. Földrajz K6 – modern infrastruktúra és hidak.",
      ro: "Podul Mileniului este o emblemă modernă a orașului Podgorica, remarcându-se prin pilonul său impunător de 57 de metri și cablurile de susținere care traversează râul Morača. Inaugurat în anul 2005, podul nu doar că a facilitat fluidizarea traficului din capitală, dar a devenit un simbol al modernizării rapide a țării. Noaptea, iluminatul podului îi conferă o eleganță aparte, reflectându-se spectaculos în apele rapide ale râului.",
      en: "The Millennium Bridge in Podgorica is a striking piece of modern architecture that has quickly become the primary visual symbol of the capital city. Gracefully spanning the emerald-green Mora\u010da River, its massive, soaring white pylon and elegant cable-stayed design sharply contrast with the surrounding urban landscape. It effectively connects the older sections of the city with the rapidly developing new commercial and residential districts. Geography K6 - Modern urban infrastructure."
    },
    factsAdvanced: {
      de: ["Die Brücke wurde offiziell am 13. Juli 2005 eröffnet.", "Der markante Pylon auf der Ostseite ist 57 Meter hoch.", "Die Gesamtlänge des Bauwerks beträgt 173 Meter.", "Sie wurde vom slowenischen Ingenieur Mladen Ulićević entworfen.", "Die Baukosten betrugen rund 7 Millionen Euro."],
      hu: ["A híd teljes hossza 173 méter, és fontos közlekedési csomópontot alkot a városban.", "A szerkezet 12 masszív kábellel van rögzítve az egyetlen, aszimmetrikus pilonhoz.", "Az építményt egy szlovén mérnöki iroda tervezte, és a nemzeti ünnep napján adták át.", "A híd alatt futó folyópart népszerű rekreációs övezet a helyiek körében."],
      ro: ["Podul are o lungime totală de 173 de metri.", "Pilonul principal se înalță la 57 de metri deasupra platformei.", "Costurile de construcție s-au ridicat la aproximativ 7 milioane de euro.", "Conectează centrul vechi al orașului cu cartierele moderne.", "A fost proiectat de arhitectul Mladen Ulićević."],
      en: ["The bridge was officially opened to traffic in July 2005.", "The main central pylon stands an impressive 57 meters tall.", "It is a cable-stayed bridge featuring exactly 12 thick supportive cables.", "The structure spans a total length of 173 meters across the Mora\u010da River.", "It was specifically designed by the acclaimed Slovenian civil engineer Mladen Uli\u0107evi\u0107."]
    }
  },
  // ME-013: Bar
  {
    id: "me-013-city",
    name: { de: "Bar", hu: "Bar", ro: "Bar", en: "Bar" },
    type: "city",
    coords: [19.1000, 42.1000],
    parent: "ME-013",
    description: {
      de: "Ein moderner Seehafen und ein wichtiges Handelszentrum an der Küste.",
      hu: "Modern tengeri kikötő és fontos kereskedelmi központ a parton.",
      ro: "Un port maritim modern și un important centru comercial de pe coastă.",
      en: "A modern seaport and an important commercial center on the coast."
    },
    facts: {
      de: ["Größter Hafen Montenegros.", "Endpunkt der Bahnstrecke Belgrad-Bar.", "Bekannt für Olivenöl.", "Mischung aus Kulturen."],
      hu: ["Montenegró legnagyobb kikötője.", "A Belgrád-Bar vasútvonal vége.", "Olívaolajáról híres.", "Kultúrák találkozóhelye."],
      ro: ["Cel mai mare port din Muntenegru.", "Punctul final al căii ferate Belgrad-Bar.", "Cunoscut pentru uleiul de măsline.", "Un amestec de culturi."],
      en: ["Montenegro's largest port.", "End of the Belgrade-Bar railway.", "Famous for olive oil.", "A blend of cultures."]
    },
    descriptionAdvanced: {
      de: "Bar ist die wichtigste Hafenstadt Montenegros und das primäre Tor des Landes zum Mittelmeer. Während das moderne Bar am Meer mit seinem Seehafen, palmengesäumten Promenaden und breiten Boulevards glänzt, zeugt das alte Stari Bar in den Bergen von einer jahrtausendealten, turbulenten Geschichte. Die Stadt ist ein faszinierendes Beispiel für das Zusammenleben verschiedener Religionen und Kulturen an der Adriaküste. Geographie K6 – Mittelmeerhäfen.",
      hu: "Bar Montenegró legfontosabb és legnagyobb tengeri kikötője, a mediterrán tengeri kereskedelem fő kapuja. A modern város széles, pálmafákkal övezett sétányokkal, tágas terekkel és hatalmas strandokkal büszkélkedhet. Bar egyedülálló példája a vallási és kulturális toleranciának, ahol ortodoxok, katolikusok és muszlimok élnek békésen egymás mellett évszázadok óta. A tengerparti nyüzsgéstől alig néhány kilométerre a hegyekben megbújó ősi romváros emlékeztet a terület gazdag, hányatott történelmére. Földrajz K7 – tengeri kereskedelem és kikötők.",
      ro: "Bar este cel mai important port maritim al Muntenegrului, fiind un oraș portuar modern, dar și un loc cunoscut pentru bogăția sa istorică. Ruinele orașului vechi, Stari Bar, aflate în imediata apropiere, oferă o privire unică asupra istoriei milenare a regiunii, fiind un punct strategic pe rutele comerciale maritime ale Adriaticei.",
      en: "Bar is Montenegro's most significant port city, acting as the nation's primary gateway to the Mediterranean Sea and international maritime trade. The modern coastal center features wide, palm-lined boulevards and expansive beaches, perfectly demonstrating modern urban planning. Beyond its commercial importance, the city represents a remarkable example of religious harmony, where Orthodox, Catholic, and Muslim communities have coexisted peacefully for generations. Geography K6 - Mediterranean port cities."
    },
    factsAdvanced: {
      de: ["Die Stadt besitzt den größten Seehafen des Landes.", "Hier befindet sich der angeblich älteste Olivenbaum der Welt, die über 2000 Jahre alte 'Stara Maslina'.", "Die Bar-Belgrad-Eisenbahnstrecke ist ein Meisterwerk der Ingenieurskunst mit Hunderten von Tunneln und Brücken.", "Bar ist bekannt für das harmonische Zusammenleben von orthodoxen, katholischen und muslimischen Einwohnern.", "Die prächtige orthodoxe Kirche des Heiligen Jovan Vladimir ist eines der größten Gotteshäuser des Balkans."],
      hu: ["A kikötőváros a híres, hegyeken átvezető Belgrád-Bar vasútvonal végállomása.", "Itt áll a Balkán egyik legnagyobb és legkorszerűbb ortodox temploma, a Szent Jovan Vladimir-templom.", "A város kikötőjéből közvetlen kompjáratok indulnak az olaszországi Bariba.", "A modern Bar városa csak a 19. század végén kezdett kiépülni a tengerparton."],
      ro: ["Orașul este capătul de linie al căii ferate Belgrad-Bar.", "Stari Bar este unul dintre cele mai mari orașe fortificate în ruine din lume.", "Bar este unul dintre centrele producției de ulei de măsline din Muntenegru.", "Un măslin cu o vechime de peste 2000 de ani se află în împrejurimi.", "Portul orașului este unul dintre cele mai importante centre de pe Marea Adriatică.", "Orașul Bar a fost grav afectat de un cutremur în 1979, după care a fost reconstruit."],
      en: ["Bar hosts the largest and most commercially active seaport in Montenegro.", "The city serves as the final terminal for the impressive Belgrade-Bar railway line.", "It is home to an ancient olive tree, 'Stara Maslina', believed to be over 2,000 years old.", "The monumental Orthodox Temple of St. Jovan Vladimir is one of the largest in the Balkans.", "The modern coastal city was largely built after the late 19th century."]
    }
  },
  {
    id: "me-013-stari-bar",
    name: { de: "Stari Bar", hu: "Stari Bar", ro: "Stari Bar", en: "Stari Bar" },
    type: "historical",
    coords: [19.1350, 42.0933],
    parent: "ME-013",
    description: {
      de: "Ruinenstadt und eine der weltweit größten befestigten archäologischen Stätten.",
      hu: "Romváros és a világ egyik legnagyobb erődített régészeti lelőhelye.",
      ro: "Oraș în ruină și unul dintre cele mai mari situri arheologice fortificate din lume.",
      en: "Ruined town and one of the world's largest fortified archaeological sites."
    },
    facts: {
      de: ["Bewahrt 2500 Jahre Geschichte.", "Bedeutendes Aquädukt.", "Festung mit Meerblick.", "Von Olivenhainen umgeben."],
      hu: ["2500 év történelmét őrzi.", "Jelentős vízvezeték (akvadukt).", "Erőd tengeri kilátással.", "Olajfaligetek veszik körül."],
      ro: ["Păstrează 2500 de ani de istorie.", "Apeduct important.", "Fortăreață cu vedere la mare.", "Înconjurat de livezi de măslini."],
      en: ["Preserves 2500 years of history.", "Significant aqueduct.", "Fortress with sea views.", "Surrounded by olive groves."]
    },
    descriptionAdvanced: {
      de: "Stari Bar ist eine der faszinierendsten archäologischen Stätten des Balkans: eine verlassene, befestigte Geisterstadt an den Ausläufern des Rumija-Gebirges. Durch byzantinische, venezianische und osmanische Bauphasen geprägt, erzählen die Ruinen von Jahrhunderten wechselvoller Herrschaft. Ein Erdbeben zerstörte die Stadt weitgehend, doch die steinernen Überreste inmitten uralter Olivenhaine bilden heute ein beeindruckendes Freilichtmuseum. Geschichte K7 – Festungswesen.",
      hu: "Stari Bar (Ó-Bar) a világ egyik legnagyobb, elhagyatott erődített romvárosa, amely a modern kikötővárostól néhány kilométerre, a meredek Rumija-hegy lábánál fekszik. A települést évszázadokon át formálták a bizánciak, a velenceiek és az oszmánok, ám egy pusztító földrengés után a lakosok végleg elhagyták. Ma a terület egy hatalmas, nyitott régészeti park, ahol ősi templomok, fürdők és akvaduktok romjai között sétálhatunk. A kövek között megbújó egykori város az adriai történelem lenyűgöző mementója. Történelem K6 – erődvárosok és régészet.",
      ro: "Stari Bar este unul dintre cele mai mari orașe fortificate în ruine din lume, situat la câțiva kilometri de orașul modern Bar, la poalele munților. Istoria așezării cuprinde perioadele iliră, romană, bizantină, venețiană și otomană, iar astăzi funcționează ca un muzeu în aer liber.",
      en: "Stari Bar is a captivating ruined fortress city located dramatically on the steep slopes of the Rumija mountains, just a few kilometers inland from the modern port. This expansive open-air museum vividly showcases the overlapping architectural influences of the Byzantine, Venetian, and Ottoman empires that once controlled the region. Although abandoned after a devastating earthquake in 1979, its stone streets and ancient aqueduct remain remarkably preserved. History K7 - Ancient fortifications and ruined cities."
    },
    factsAdvanced: {
      de: ["Stari Bar umfasst die gut erhaltenen Ruinen von über 240 Gebäuden.", "Ein beeindruckendes osmanisches Aquädukt aus dem 17. Jahrhundert versorgte die Stadt mit Wasser.", "Die Festungsmauern stammen teilweise noch aus dem 11. Jahrhundert.", "Die Stadt wurde nach verheerenden Explosionen und einem Erdbeben 1979 aufgegeben.", "In der Umgebung stehen über 100.000 Olivenbäume."],
      hu: ["A romváros több mint 240 épület maradványait foglalja magában egy meredek sziklán.", "Egy lenyűgöző, 17. századi oszmán vízvezeték (akvadukt) áll a város határában.", "A város területén több mint 2000 éves olajfák találhatók (pl. a híres Stara Maslina).", "Az utolsó lakosok az 1979-es pusztító földrengés után költöztek le a tengerpartra."],
      ro: ["Orașul are o istorie de 2500 de ani.", "Fortăreața a fost modelată de influențele bizantine, venețiene și otomane.", "În oraș se află un apeduct semnificativ din secolul al XVII-lea.", "Stari Bar este situat pe o creastă stâncoasă.", "Printre ruine se află mai multe foste biserici.", "Fortăreața a fost locuită până la sfârșitul secolului al XIX-lea."],
      en: ["The fortified city contains the well-preserved ruins of over 240 historic buildings.", "An impressive, fully functioning 17th-century Ottoman aqueduct still stands at the site.", "The site has documented historical habitation stretching back over 2,500 years.", "The last remaining residents completely abandoned the city following the 1979 earthquake.", "The ruins are surrounded by over 100,000 cultivated, ancient olive trees."]
    }
  },
  // ME-014: Ulcinj
  {
    id: "me-014-city",
    name: { de: "Ulcinj", hu: "Ulcinj", ro: "Ulcinj", en: "Ulcinj" },
    type: "city",
    coords: [19.2244, 41.9294],
    parent: "ME-014",
    description: {
      de: "Eine Stadt mit orientalien Flair und endlosen Sandstränden.",
      hu: "Keleties hangulatú város végtelen homokos strandokkal.",
      ro: "Un oraș cu o atmosferă orientală și plaje nesfârșite de nisip.",
      en: "A town with an oriental flair and endless sandy beaches."
    },
    facts: {
      de: ["Einst ein Piratenstützpunkt.", "Älteste Stadt an der Küste.", "Bekannt für die Altstadt.", "Multikulturelle Bevölkerung."],
      hu: ["Egykor kalózok bázisa volt.", "A legöregebb város a parton.", "Híres az óvárosáról.", "Multikulturális lakosság."],
      ro: ["Fostă bază de pirați.", "Cel mai vechi oraș de pe coastă.", "Cunoscut pentru orașul vechi.", "Populație multiculturală."],
      en: ["Once a pirate stronghold.", "Oldest town on the coast.", "Known for its old town.", "Multicultural population."]
    },
    descriptionAdvanced: {
      de: "Ulcinj ist die südlichste Stadt Montenegros an der albanischen Grenze und besticht durch ein deutlich orientalisches Flair. Einst eine berüchtigte Piratenhochburg an der Adria, ist die Stadt heute für ihre endlosen, feinen Sandstrände und ihr lebendiges, multikulturelles Erbe berühmt. Die beeindruckende Altstadt auf den Klippen und die Mündung des Flusses Bojana machen Ulcinj zu einem einzigartigen Küstenort. Geschichte K7 – Piraten und Seehandel.",
      hu: "Ulcinj Montenegró legdélibb tengerparti városa, amely egyedi keleti (orientális) hangulatával és több kilométer hosszú homokos strandjaival tűnik ki. A történelem során a város híres és hírhedt kalóztanyaként működött, ma pedig az ország egyik legfontosabb turisztikai központja. A lakosság nagyrészt albán nemzetiségű, ami az építészetben, a gasztronómiában és a bazárok pezsgő életében is megmutatkozik. A sziklán trónoló óváros lenyűgöző kilátást nyújt az Adriai-tengerre és a környező olajfaligetekre. Történelem K5 – mediterrán kalózkodás.",
      ro: "Ulcinj este cel mai sudic oraș al Muntenegrului, cunoscut pentru plajele sale lungi de nisip și atmosfera orientală. Istoria orașului este diversă, variind de la pirați la triburile ilire, iar astăzi este una dintre cele mai importante destinații turistice ale țării, oferind o combinație unică de cultură și relaxare pe litoral.",
      en: "Ulcinj is the southernmost city in Montenegro, resting close to the Albanian border and distinctively known for its vibrant oriental atmosphere. Historically infamous as a formidable pirate stronghold on the Adriatic, the city now draws visitors with its exceptionally long sandy beaches and rich, multicultural heritage. The combination of an impressive cliffside Old Town and the stunning delta of the Bojana River makes Ulcinj a truly unique destination. History K7 - Mediterranean pirates and trade."
    },
    factsAdvanced: {
      de: ["Der 'Velika Plaža' (Große Strand) ist mit 13 Kilometern einer der längsten Sandstrände an der Adria.", "Ulcinj war im 16. und 17. Jahrhundert ein gefürchtetes Zentrum für Seeräuber.", "Die Stadt hat eine mehrheitlich albanischsprachige Bevölkerung.", "Der berühmte spanische Schriftsteller Miguel de Cervantes soll hier als Sklave gefangen gehalten worden sein.", "Die Salinen von Ulcinj sind ein wichtiges Brut- und Rastgebiet für Tausende von Zugvögeln, darunter Flamingos."],
      hu: ["Az Ulcinji Nagystrand (Velika Plaža) 13 kilométerével az Adria egyik leghosszabb homokos partja.", "A város egykor Észak-Afrika és Európa közötti rabszolgakereskedelem központja volt.", "A helyi legenda szerint Miguel de Cervantes is itt raboskodott, és Ulcinjról mintázta Dulcinea alakját.", "Az óváros masszív kőfalai több mint 2500 éves múltra tekintenek vissza."],
      ro: ["Marea plajă din Ulcinj (Velika Plaža) are o lungime de 13 km.", "Ulcinj este unul dintre cele mai vechi orașe de pe coasta Adriatică.", "În oraș se întrepătrund culturile islamică și ortodoxă.", "În oraș se află insula Ada (Ada Bojana).", "În secolul al XVII-lea, Ulcinj a fost un centru al piraților.", "Împrejurimile orașului sunt bogate în plantații de măslini."],
      en: ["The 'Velika Pla\u017ea' (Great Beach) is one of the longest sandy beaches on the Adriatic, stretching 13 kilometers.", "During the 16th and 17th centuries, the city was a widely feared pirate hub.", "Ulcinj features a uniquely diverse population with a majority of ethnic Albanians.", "Legend suggests the famous Spanish writer Miguel de Cervantes was held captive here.", "The nearby Ulcinj Salina is a crucial nesting habitat for thousands of flamingos and migratory birds."]
    }
  },
  {
    id: "me-014-ada-bojana",
    name: { de: "Ada Bojana", hu: "Ada Bojana", ro: "Ada Bojana", en: "Ada Bojana" },
    type: "island",
    coords: [19.3486, 41.8617],
    parent: "ME-014",
    description: {
      de: "Flussinsel am südlichen Ende Montenegros, beliebt bei Kitesurfern.",
      hu: "Folyami sziget Montenegró déli végén, a kiteszörfösök kedvence.",
      ro: "Insulă fluvială la capătul sudic al Muntenegrului, populară pentru kitesurfing.",
      en: "River island at the southern end of Montenegro, popular for kitesurfing."
    },
    facts: {
      de: ["Dreieckige Form.", "Berühmt für Fischrestaurants.", "FKK-Resort-Tradition.", "Grenze zu Albanien."],
      hu: ["Háromszög alakú.", "Híres haléttermeiről.", "Nudista üdülőhelyi hagyomány.", "Albánia határán fekszik."],
      ro: ["Formă triunghiulară.", "Faimoasă pentru restaurantele de pește.", "Tradiție de stațiune naturistă.", "Granița cu Albania."],
      en: ["Triangular shape.", "Famous for fish restaurants.", "Nudist resort tradition.", "Border with Albania."]
    },
    descriptionAdvanced: {
      de: "Ada Bojana ist eine einzigartige, dreieckige Flussinsel im Delta des Bojana-Flusses, ganz im Süden Montenegros an der albanischen Grenze. Mit ihren kilometerlangen, feinen Sandstränden, konstanten Winden und dem flachen Wasser ist die Insel das absolute Epizentrum für Kitesurfer an der Adria. Sie ist zudem berühmt für traditionelle Pfahlbauten am Flussufer, in denen exzellente Fischrestaurants untergebracht sind. Geographie K5 – Flussdeltas und Küsten.",
      hu: "Ada Bojana egy lenyűgöző, mesterségesen kialakult folyami sziget a Bojana-folyó és az Adriai-tenger találkozásánál, a montenegrói-albán határon. A sziget a 19. század közepén jött létre, miután egy elsüllyedt hajó roncsa körül felhalmozódott a folyami hordalék. Ma a terület laza hangulatú üdülőhely, különösen népszerű a sárkányszörfösök (kitesurf) és a nudisták körében. A folyóparton cölöpökre épült hagyományos fa éttermekben a legfrissebb tengeri halakat kínálják a látogatóknak. Földrajz K6 – hordalékszigetek és folyótorkolatok.",
      ro: "Ada Bojana este o insulă fluvială formată artificial în delta râului Bojana, la extremitatea sudică a Muntenegrului. Microclimatul special al insulei, plaja lungă cu nisip și condițiile meteorologice vântoase ideale pentru kitesurfing o fac unică în zonă.",
      en: "Ada Bojana is a remarkably unique, triangular river island created where the Bojana River flows directly into the Adriatic Sea. Surrounded by fresh river water on two sides and salty seawater on the third, the island features an exceptionally long, uninterrupted sandy beach. It is renowned for its laid-back, bohemian atmosphere, world-class kite surfing conditions, and excellent seafood restaurants built on traditional wooden stilts over the water. Geography K6 - River deltas and coastal islands."
    },
    factsAdvanced: {
      de: ["Die Insel entstand künstlich nach dem Untergang eines Schiffes im 19. Jahrhundert, das Sandablagerungen blockierte.", "Sie verfügt über einen 3 Kilometer langen Sandstrand zur Adria hin.", "Ein großer Teil der Insel ist ein bekanntes FKK-Resort.", "Die stetigen thermischen Winde machen es zu einem Kitesurf-Mekka.", "Die Bojana ist der einzige Fluss der Welt, der gelegentlich (bei Flut) rückwärts fließt."],
      hu: ["A sziget területe körülbelül 4,8 négyzetkilométer, és háromszög alakot formáz.", "A sziget mindkét oldalát a Bojana-folyó friss vize mossa, egyik oldalát pedig a sós tenger.", "Kiváló szélviszonyai miatt Ada Bojana Európa egyik legjobb kitesurf-paradicsoma.", "A sziget növényzete szubtrópusi jellegű, különleges madárfajoknak adva otthont."],
      ro: ["Insula are formă triunghiulară, fiind înconjurată de râul Bojana și Marea Adriatică.", "Ada Bojana este un loc preferat pentru pasionații de kitesurfing.", "Zona este faimoasă pentru restaurantele sale cu pește (cabane pescărești).", "Plaja cu nisip a insulei este renumită pentru nisipul său cu proprietăți curative.", "Albania este situată la granița insulei.", "Zona este cunoscută pentru mediul său natural intact."],
      en: ["The island was naturally formed around a sunken ship in the mid-19th century.", "It boasts nearly 3 kilometers of pristine, fine sandy beach facing the Adriatic.", "The area is globally recognized as one of Europe's premier kite surfing destinations.", "The island features a well-known, long-established naturist (nudist) resort.", "Traditional wooden fishing huts, known as 'sojenice', line the banks of the river."]
    }
  },
  // ME-015: Budva
  {
    id: "me-015-city",
    name: { de: "Budva", hu: "Budva", ro: "Budva", en: "Budva" },
    type: "city",
    coords: [18.8400, 42.2881],
    parent: "ME-015",
    description: {
      de: "Das touristische Zentrum Montenegros mit einer charmanten Altstadt.",
      hu: "Montenegró turisztikai központja hangulatos óvárossal.",
      ro: "Centrul turistic al Muntenegrului, cu un oraș vechi fermecător.",
      en: "The tourist center of Montenegro with a charming old town."
    },
    facts: {
      de: ["Berühmt für das Nachtleben.", "Besitzt eine Zitadelle.", "Wunderschöne Strände.", "Eine der ältesten Siedlungen."],
      hu: ["Éjszakai életéről híres.", "Citadellával rendelkezik.", "Gyönyörű strandok.", "Az egyik legősibb település."],
      ro: ["Faimos pentru viața de noapte.", "Deține o citadelă.", "Plaje superbe.", "Una dintre cele mai vechi așezări."],
      en: ["Famous for nightlife.", "Has a citadel.", "Beautiful beaches.", "One of the oldest settlements."]
    },
    descriptionAdvanced: {
      de: "Budva ist die touristische Hauptstadt Montenegros und berühmt für ihr pulsierendes Nachtleben, luxuriöse Yachthäfen und wunderschöne Sandstrände. Die von starken Mauern umgebene mittelalterliche Altstadt (Stari Grad) ragt auf einer kleinen Halbinsel ins Meer und zeugt von einer über 2500 Jahre alten Geschichte. Heute ist die 'Budva Riviera' das glamouröse Zentrum des montenegrinischen Sommertourismus. Geographie K5 – Küstentourismus.",
      hu: "Budva Montenegró turisztikai fővárosa, amely pezsgő éjszakai életéről, kiváló éttermeiről és gyönyörű, hosszú strandjairól híres. A város központjában egy félszigetre épült, fallal körülvett, ősi óváros (Stari Grad) található, amely az adriai építészet mesterműve. Bár a nyári hónapokban a város megtelik turistákkal és luxusjachtokkal, a szűk utcák és a citadella megőrizték évezredes, velencei hangulatukat. Budva a balkáni partszakasz, a 'Budvai Riviéra' központja és a montenegrói elit kedvelt nyaralóhelye. Földrajz K5 – tengerparti turizmus.",
      ro: "Budva este capitala turistică a Muntenegrului, situată pe coasta Mării Adriatice, fiind faimoasă pentru centrul său istoric pitoresc și viața de noapte activă. Împrejurimile orașului oferă peste 35 de plaje cu nisip și pietriș, iar orașul vechi, înconjurat de ziduri fortificate, reprezintă un exemplu excelent de arhitectură mediteraneană medievală, fiind una dintre cele mai populare destinații de vacanță din regiune.",
      en: "Budva is widely recognized as the tourism capital of Montenegro, famous for its energetic nightlife, luxurious yacht marinas, and beautiful sandy beaches. The walled medieval Old Town (Stari Grad) extends on a small peninsula into the sea, offering a stunning contrast to the modern, bustling developments surrounding it. With a documented history spanning over 2,500 years, the 'Budva Riviera' is now the glamorous epicenter of Montenegrin summer holidays. Geography K5 - Coastal tourism."
    },
    factsAdvanced: {
      de: ["Budva gilt als eine der ältesten kontinuierlich besiedelten Städte an der Adria.", "Die Altstadtmauern wurden im 15. Jahrhundert von den Venezianern errichtet.", "Die kleine Insel Sveti Nikola liegt direkt vor der Küste und wird oft als 'Hawaii' bezeichnet.", "Die Stadt verzeichnet in den Sommermonaten einen enormen Bevölkerungszuwachs durch Touristen.", "Das legendäre Sea Dance Festival findet alljährlich an den Stränden der Region statt."],
      hu: ["Budva az egyik legősibb település az Adriai-tenger partján, története 2500 évre nyúlik vissza.", "A város mellett 35 különböző homokos és kavicsos strand található.", "Nyáron itt rendezik meg az egyik legnagyobb szabadtéri zenei fesztivált, a Sea Dance Festivalt.", "A város partjaitól nem messze található Sveti Nikola lakatlan szigete, amelyet 'Hawaiként' emlegetnek."],
      ro: ["Orașul are o istorie de peste 2500 de ani.", "Centrul vechi al Budvei este situat pe o peninsulă.", "Orașul se mândrește cu un litoral de 17 kilometri.", "Citadela este cel mai înalt punct al orașului din interiorul zidurilor.", "Budva este centrul 'Rivierei Budva'.", "Aici se află populara plajă Mogren."],
      en: ["Budva is officially recognized as one of the oldest continuously inhabited settlements on the Adriatic.", "The impressive Old Town walls were primarily constructed by the Venetians in the 15th century.", "The nearby island of Sveti Nikola is frequently referred to locally as 'Hawaii'.", "The city experiences a massive population surge due to tourism during the summer months.", "It hosts the globally recognized Sea Dance Festival on its nearby expansive beaches."]
    }
  },
  {
    id: "me-015-sveti-stefan",
    name: { de: "Sveti Stefan", hu: "Sveti Stefan", ro: "Sveti Stefan", en: "Sveti Stefan" },
    type: "island",
    coords: [18.8911, 42.2558],
    parent: "ME-015",
    description: {
      de: "Eine kleine Insel und ein Luxusresort mit Gebäuden aus dem 15. Jahrhundert.",
      hu: "Kis sziget és luxusüdülőhely 15. századi épületekkel.",
      ro: "O mică insulă și o stațiune de lux cu clădiri din secolul al XV-lea.",
      en: "A small islet and luxury resort featuring 15th-century buildings."
    },
    facts: {
      de: ["Einst ein Fischerdorf.", "Durch Isthmus verbunden.", "Exklusivstes Ziel an der Adria.", "Beliebter Ort für Prominente."],
      hu: ["Egykor halászfalu volt.", "Földnyelv köti össze a parttal.", "Az Adria legexkluzívabb helye.", "Hírességek kedvelt pihenőhelye."],
      ro: ["Fost sat de pescari.", "Conectată prin istm.", "Cea mai exclusivistă destinație de la Adriatica.", "Loc preferat de celebrități."],
      en: ["Once a fishing village.", "Connected by an isthmus.", "Most exclusive destination on the Adriatic.", "Favorite spot for celebrities."]
    },
    descriptionAdvanced: {
      de: "Sveti Stefan ist eine winzige, befestigte Insel und das wohl exklusivste Luxusresort an der montenegrinischen Küste. Einst ein einfaches Fischerdorf aus dem 15. Jahrhundert, wurde die Insel mit ihren roten Ziegeldächern und engen Steingassen in den 1950er Jahren in ein weltberühmtes Hotel verwandelt. Sie ist durch einen schmalen Sandstreifen mit dem Festland verbunden und bietet ein Bild perfekter mediterraner Romantik. Wirtschaft K6 – Historischer Luxustourismus.",
      hu: "Sveti Stefan egy ikonikus, apró, megerősített sziget a Budvai Riviérán, amelyet egy keskeny homokos földszoros köt össze a szárazfölddel. Az egykor egyszerű halászfalu a 20. század közepén az ország legexkluzívabb luxusüdülőjévé változott. Vörös cseréptetős kőházai és macskaköves szűk utcácskái tökéletes harmóniát alkotnak az Adria mélykék vizével. A sziget mára egy zárt, prémium kategóriás luxushotel, de varázslatos látványa miatt Montenegró legtöbbet fotózott nevezetessége. Földrajz K6 – exkluzív turizmus és szigetek.",
      ro: "Sveti Stefan este o insulă mică și o stațiune de lux lângă Budva, care a servit inițial ca sat de pescari. Astăzi este unul dintre cele mai cunoscute simboluri ale coastei muntenegrene, impresionând vizitatorii prin clădirile sale din piatră din secolul al XV-lea și apa turcoaz care o înconjoară.",
      en: "Sveti Stefan is a tiny, fortified island village connected to the mainland by a narrow causeway, creating one of the most iconic images of the Adriatic coast. Originally a humble 15th-century fishing settlement, its stone houses with characteristic red roofs were brilliantly transformed into an exclusive luxury resort in the mid-20th century. Today, it remains an elite destination, surrounded by pristine pink-sand beaches and deep, crystal-clear waters. Geography K8 - Luxury tourism and coastal preservation."
    },
    factsAdvanced: {
      de: ["Die Insel war einst eine Festung, um sich vor osmanischen Piraten zu schützen.", "Berühmtheiten wie Marilyn Monroe, Sophia Loren und Sylvester Stallone waren hier zu Gast.", "Die Insel ist durch einen natürlichen Tombolo (Sandbank) mit dem Festland verbunden.", "Das Resort ist nur für Hotelgäste oder Restaurantbesucher zugänglich.", "Die Strände links und rechts der Sandbank bestehen aus markantem rötlichem Kies."],
      hu: ["A szigetet az 1400-as években építették ki menedékként az oszmán támadások ellen.", "A 60-as és 70-es években olyan sztárok nyaraltak itt, mint Sophia Loren és Marilyn Monroe.", "Az apró szigeten három ősi ortodox templom is található.", "A terület egy nemzetközi luxus-szállodalánc (Aman Resorts) kezelésében áll."],
      ro: ["Insula este conectată de uscat printr-o limbă de pământ îngustă.", "Clădirile au fost construite în secolul al XV-lea.", "Sveti Stefan a fost cândva un mic sat de pescari.", "În anii 1950 a fost transformată într-o stațiune de lux.", "Insula este unul dintre cele mai exclusiviste locuri de pe Adriatică.", "Este o destinație preferată de celebrități și șefi de stat."],
      en: ["The island was originally fortified in the 15th century to protect against pirate attacks.", "It was fully converted into an exclusive, high-end luxury hotel complex in the 1950s.", "The resort has historically hosted numerous global celebrities, royalty, and politicians.", "Access to the island itself is strictly restricted exclusively to paying hotel guests.", "The surrounding public beaches are renowned for their distinctive, pink-hued sand."]
    }
  },
  // ME-016: Tivat
  {
    id: "me-016-city",
    name: { de: "Tivat", hu: "Tivat", ro: "Tivat", en: "Tivat" },
    type: "city",
    coords: [18.6961, 42.4364],
    parent: "ME-016",
    description: {
      de: "Eine moderne Stadt in der Bucht von Kotor mit luxuriösem Flair.",
      hu: "Modern város a Kotori-öbölben luxus hangulattal.",
      ro: "Un oraș modern în Golful Kotor, cu o atmosferă de lux.",
      en: "A modern town in the Bay of Kotor with a luxury feel."
    },
    facts: {
      de: ["Heimat von Porto Montenegro.", "Hat einen internationalen Flughafen.", "Einst eine Marinewerft.", "Sehr sonnige Stadt."],
      hu: ["A Porto Montenegro otthona.", "Nemzetközi repülőtere van.", "Egykor tengerészeti udvar.", "Nagyon napos város."],
      ro: ["Găzduiește Porto Montenegro.", "Are un aeroport internațional.", "Fost șantier naval militar.", "Un oraș foarte însorit."],
      en: ["Home to Porto Montenegro.", "Has an international airport.", "Former naval shipyard.", "A very sunny town."]
    },
    descriptionAdvanced: {
      de: "Tivat ist die jüngste Stadt in der Bucht von Kotor und hat sich durch gezielte Investitionen zu einem elitären Reiseziel entwickelt. Anstelle einer alten, befestigten Altstadt bietet Tivat heute den weltbekannten, hochmodernen Yachthafen 'Porto Montenegro', der Superyachten aus aller Welt anzieht. Trotz des modernen Luxus bewahrt die Umgebung mit ihren ruhigen Parks und der Halbinsel Luštica eine entspannte, mediterrane Atmosphäre. Wirtschaft K6 – Luxustourismus und Yachthäfen.",
      hu: "Tivat a Kotori-öböl legfiatalabb és leggyorsabban fejlődő városa, amely a hagyományos halászfaluból elit turisztikai központtá nőtte ki magát. Míg a többi öböl menti város történelmi óvárosokkal büszkélkedhet, Tivat a modern luxusra és a világklasszis jachtkikötőre, a Porto Montenegróra építi arculatát. A város széles tengerparti sétányai, rendezett parkjai és napfényes kávézói elegáns mediterrán életérzést nyújtanak. A város melletti repülőtér fontos belépési pont a partvidékre érkező turisták számára. Földrajz K8 – modern turizmus és gazdaság.",
      ro: "Tivat este un oraș în dezvoltare dinamică din golful Kotor, care s-a transformat într-o stațiune de lux și un port pentru iahturi. Pe locul fostei baze navale se află acum Porto Montenegro, care reprezintă una dintre cele mai exclusiviste destinații turistice din regiune, contribuind semnificativ la dezvoltarea economică și turistică a zonei.",
      en: "Tivat is the youngest coastal town in the Bay of Kotor, having rapidly evolved from a traditional naval base into a premier elite travel destination. Unlike neighboring historic towns, Tivat is completely defined by its modern, world-class superyacht marina, Porto Montenegro, which attracts luxury vessels globally. Despite this high-end development, the surrounding areas retain a peaceful Mediterranean charm with beautifully landscaped parks and the quiet Lu\u0161tica peninsula. Geography K8 - Luxury tourism and economic transformation."
    },
    factsAdvanced: {
      de: ["In Tivat befindet sich einer von zwei internationalen Flughäfen Montenegros.", "Porto Montenegro wurde auf den Überresten eines ehemaligen jugoslawischen Marinestützpunkts erbaut.", "Das U-Boot-Museum 'Heroj' erlaubt Besuchern, ein echtes jugoslawisches Angriffs-U-Boot zu betreten.", "Der Stadtpark von Tivat ist ein weitläufiger botanischer Garten mit exotischen Pflanzen.", "Die nahegelegene Halbinsel Luštica ist berühmt für ihre unberührten Olivenhaine und kleinen Fischerdörfer."],
      hu: ["Itt található a Montenegró partvidékét kiszolgáló két nemzetközi repülőtér egyike.", "A városban egy különleges, 24 hektáros városi park található, tele ritka egzotikus fákkal.", "A Tivat melletti tengerészeti múzeumban egy eredeti jugoszláv támadó tengeralattjáró is megtekinthető.", "A város klímája az öböl legnaposabb és legkellemesebb mikroklímája."],
      ro: ["În Tivat se află unul dintre aeroporturile internaționale ale țării.", "Portul de iahturi Porto Montenegro este capabil să găzduiască super-iahturi.", "Orașul a funcționat ca arsenal naval în secolul al XIX-lea.", "În Tivat se află muzeul patrimoniului maritim, întins pe 24 de hectare.", "Clima orașului este una dintre cele mai blânde din golf.", "Împrejurimile se mândresc cu numeroase insulițe."],
      en: ["Tivat is home to one of Montenegro's two primary international airports.", "The modern city was largely developed around a former Yugoslav naval arsenal.", "The local city park is a vast botanical garden filled with exotic plant species.", "The nearby Lu\u0161tica Peninsula remains incredibly preserved, featuring ancient olive groves.", "Tivat enjoys a distinctly mild microclimate, making it the sunniest town in the bay."]
    }
  },
  {
    id: "me-016-porto-montenegro",
    name: { de: "Porto Montenegro", hu: "Porto Montenegro", ro: "Porto Montenegro", en: "Porto Montenegro" },
    type: "landmark",
    coords: [18.6917, 42.4333],
    parent: "ME-016",
    description: {
      de: "Ein luxuriöser Yachthafen und Resort von Weltklasse.",
      hu: "Világszínvonalú luxus jachtkikötő és üdülőhely.",
      ro: "O marină de lux și o stațiune de clasă mondială.",
      en: "A world-class luxury yacht marina and resort."
    },
    facts: {
      de: ["Exklusive Einkaufsmeile.", "Bietet Superyacht-Liegeplätze.", "Elegante Architektur.", "Ehemalige Militärbasis."],
      hu: ["Exkluzív bevásárlónegyed.", "Szuperjacht-kikötőhelyek.", "Elegáns építészet.", "Egykori katonai bázis."],
      ro: ["Zonă de cumpărături exclusivistă.", "Oferă locuri de acostare pentru super-iahturi.", "Arhitectură elegantă.", "Fostă bază militară."],
      en: ["Exclusive shopping mile.", "Offers superyacht berths.", "Elegant architecture.", "Former military base."]
    },
    descriptionAdvanced: {
      de: "Porto Montenegro in Tivat ist ein hochmoderner, luxuriöser Yachthafen, der gezielt für Superyachten konzipiert wurde. Was einst ein heruntergekommener Marinestützpunkt der jugoslawischen Flotte war, ist heute ein mondänes Dorf mit Designerboutiquen, Luxusapartments und eleganten Promenaden. Dieses Mega-Projekt hat die Bucht von Kotor zu einem Hotspot der internationalen High Society gemacht. Wirtschaft K6 – Yachthäfen und maritime Wirtschaft.",
      hu: "A Porto Montenegro egy ultramodern, prémium kategóriás szuperjacht-kikötő és luxus lakónegyed Tivat partján. A komplexum egy korábbi, elhagyatott jugoszláv haditengerészeti bázis és hajójavító üzem romjain épült fel. Ma a Földközi-tenger egyik legexkluzívabb tengerészeti központja, ahol a világ legnagyobb magánjachtjai horgonyoznak. Az elegáns butikokkal, luxusszállodákkal és pálmafás sétányokkal teli komplexum teljesen átformálta Montenegró turisztikai arculatát. Gazdaság K8 – luxusberuházások és tengerészet.",
      ro: "Porto Montenegro este o marină super-luxoasă situată în Golful Tivat, creată pentru a satisface nevoile celor mai mari iahturi din lume. Construit pe locul unei foste baze navale iugoslave, complexul a revitalizat întreaga regiune, oferind un paradis modern de shopping de lux, restaurante gourmet și rezidențe elegante. Arhitectura complexului combină elementele venețiene tradiționale cu standarde de lux contemporane, atrăgând elita internațională.",
      en: "Porto Montenegro in Tivat is an ultra-modern, world-class marina and luxury residential village specifically designed to accommodate the largest superyachts in the world. Built directly on the remnants of a historic naval shipyard, it represents a monumental foreign investment that completely redefined the region's tourism industry. The expansive complex features luxury boutiques, fine dining, and a dedicated maritime heritage museum, providing an unparalleled elite lifestyle experience. Geography K8 - Mega-marinas and elite infrastructure."
    },
    factsAdvanced: {
      de: ["Der Hafen kann Superyachten mit einer Länge von bis zu 250 Metern aufnehmen.", "Das Projekt wurde maßgeblich vom kanadischen Milliardär Peter Munk initiiert.", "Auf dem Gelände befindet sich ein spektakulärer Infinity-Pool (PMYC), der 64 Meter lang ist.", "Es gibt ein maritimes Museum, das die militärische Vergangenheit des Ortes ehrt.", "Porto Montenegro agiert oft als zollfreier Hafenhafen für Yachtbesitzer."],
      hu: ["A kikötő képes akár 250 méter hosszúságú, hatalmas szuperjachtok fogadására is.", "A projekt fő befektetője eredetileg Peter Munk kanadai üzletember volt.", "A területen található egy exkluzív yacht club látványos, 64 méter hosszú feszített víztükrű medencével.", "A fejlesztés Montenegró történetének egyik legnagyobb külföldi magántőke-beruházása volt."],
      ro: ["Marina oferă peste 450 de locuri de ancorare pentru iahturi de toate mărimile.", "Găzduiește cel mai mare club de piscină (Lido Mar) din regiune.", "Muzeul Patrimoniului Naval se află în incinta complexului.", "Complexul este adesea numit 'Monaco din Balcani'.", "Vilele luxoase și hotelurile de 5 stele completează atracțiile marinei."],
      en: ["The marina features over 450 berths, specifically designed for mega-yachts up to 250 meters.", "It was constructed on the exact site of the former 'Arsenal' naval base.", "The on-site Maritime Heritage Museum includes a fully restored Yugoslav attack submarine.", "The development represents one of the largest single foreign investments in Montenegrin history.", "The complex functions almost as an independent, self-sustaining luxury micro-city."]
    }
  },
  // ME-017: Mojkovac
  {
    id: "me-017-city",
    name: { de: "Mojkovac", hu: "Mojkovac", ro: "Mojkovac", en: "Mojkovac" },
    type: "city",
    coords: [19.5833, 42.9600],
    parent: "ME-017",
    description: {
      de: "Eine Stadt am Fluss Tara, bekannt für eine historische Schlacht.",
      hu: "Város a Tara folyó mentén, történelmi csatájáról nevezetes.",
      ro: "Un oraș pe râul Tara, cunoscut pentru o bătălie istorică.",
      en: "A town on the Tara River, famous for a historic battle."
    },
    facts: {
      de: ["Schauplatz der Schlacht von 1916.", "Liegt zwischen Tara und Lim.", "Bergbautradition.", "Tor zur Tara-Schlucht."],
      hu: ["Az 1916-os csata helyszíne.", "A Tara és Lim között fekszik.", "Bányászati hagyományok.", "Kapu a Tara-kanyonhoz."],
      ro: ["Locul bătăliei din 1916.", "Situat între râurile Tara și Lim.", "Tradiție minieră.", "Poarta spre Canionul Tara."],
      en: ["Site of the 1916 battle.", "Located between Tara and Lim.", "Mining tradition.", "Gateway to the Tara Canyon."]
    },
    descriptionAdvanced: {
      de: "Mojkovac liegt im Norden des Landes am Fluss Tara, eingebettet zwischen den imposanten Bergen Bjelasica und Sinjajevina. Die Stadt ist historisch bedeutend für ihre alte Silberprägung im Mittelalter und als Schauplatz einer der wichtigsten Schlachten Montenegros im Ersten Weltkrieg. Heute ist Mojkovac ein ruhiger Rückzugsort für Naturfreunde und der ideale Zugangspunkt zum Nationalpark Biogradska Gora. Geschichte K8 – Montenegros Rolle im Ersten Weltkrieg.",
      hu: "Mojkovac egy csendes, folyóparti település Észak-Montenegróban, amely a Tara-folyó jobb partján, két fenséges hegyvonulat – a Bjelasica és a Sinjajevina – között fekszik. A város gazdag történelmi múltra tekint vissza, a középkorban fontos bányászati központ és királyi pénzverde volt. Ma Mojkovac a téli és nyári ökoturizmus egyik feltörekvő bázisa, ahonnan a látogatók könnyen elérhetik az őserdőket és a sípályákat. A város környéke az első világháború során híres csaták színhelye volt. Történelem K6 – ipari és katonai történelem.",
      ro: "Mojkovac este un oraș încărcat de istorie, așezat în valea râului Tara și vegheat de munții Bjelasica și Sinjajevina. Așezarea este faimoasă pentru glorioasa Bătălie de la Mojkovac din Primul Război Mondial, unde armata muntenegreană a protejat retragerea trupelor aliate. În prezent, Mojkovac este o destinație tot mai populară pentru turismul activ, oferind acces rapid la râul Tara și la Parcul Național Biogradska Gora.",
      en: "Mojkovac is located in northern Montenegro, beautifully situated on the banks of the Tara River between the majestic Bjelasica and Sinjajevina mountain ranges. The town is historically famous for its medieval silver mines and a heroic, decisive battle fought during World War I. Today, it serves as a tranquil, emerging center for eco-tourism, providing direct access to the pristine Biogradska Gora National Park and various outdoor mountain adventures. History K7 - World War I mountain warfare."
    },
    factsAdvanced: {
      de: ["Der Name Mojkovac leitet sich vom altslawischen Begriff für 'meine Münze' ab, da hier im Mittelalter Silber geprägt wurde.", "Die Schlacht von Mojkovac im Jahr 1916 sicherte den Rückzug der serbischen Armee.", "Das Denkmal von Mojkovac erinnert an den heldenhaften Widerstand der montenegrinischen Armee.", "Die Stadt ist das Tor zu einem der letzten drei Urwälder Europas.", "Im Herbst findet hier das traditionelle Filmfestival der nördlichen Regionen statt."],
      hu: ["A város nevét a középkori szerb 'moj kovac' (saját pénzverőm) kifejezésből eredeztetik.", "1916-ban itt zajlott a híres mojkovaci csata, ahol a montenegróiak megállították az osztrák-magyar sereg előrenyomulását.", "A település határában található a híres Tara-kanyon kezdete.", "Az egykori ólombányászat miatt a folyópart jelentős ökológiai kármentesítésen esett át."],
      ro: ["Orașul se află la o altitudine de 850 de metri.", "Bătălia de la Mojkovac din 1916 a avut loc pe dealurile din jurul orașului.", "Monumentul comemorativ de la Mojkovac este una dintre principalele atracții.", "Este un punct de oprire frecvent pe ruta feroviară Belgrad-Bar.", "Tradiția exploatării argintului a marcat trecutul așezării."],
      en: ["The famous Battle of Mojkovac took place here on Orthodox Christmas in 1916.", "During the medieval period, the town was a highly significant center for silver mining.", "It provides immediate, direct access to the dense Biogradska Gora National Park.", "The Tara River running through the town is globally recognized for its exceptional purity.", "The local economy is heavily shifting from mining towards sustainable eco-tourism."]
    }
  },
  {
    id: "me-017-biogradska-gora",
    name: { de: "Biogradska Gora", hu: "Biogradska Gora", ro: "Biogradska Gora", en: "Biogradska Gora" },
    type: "forest",
    coords: [19.6000, 42.9000],
    parent: "ME-017",
    description: {
      de: "Einer der letzten Urwälder Europas im gleichnamigen Nationalpark.",
      hu: "Európa egyik utolsó őserdeje az azonos nevű nemzeti parkban.",
      ro: "Una dintre ultimele păduri virgine din Europa, în parcul național omonim.",
      en: "One of the last virgin forests in Europe, in the national park of the same name."
    },
    facts: {
      de: ["Sehr reiche Artenvielfalt.", "Wunderschöner Biograd-See.", "Über 500 Jahre alte Bäume.", "Einzigartiges Ökosystem."],
      hu: ["Nagyon gazdag fajszínvonal.", "Gyönyörű Biográdi-tó.", "Több mint 500 éves fák.", "Egyedülálló ökoszisztéma."],
      ro: ["Biodiversitate foarte bogată.", "Lacul Biograd este superb.", "Copaci de peste 500 de ani.", "Ecosistem unic."],
      en: ["Very rich biodiversity.", "Beautiful Biograd Lake.", "Trees over 500 years old.", "Unique ecosystem."]
    },
    descriptionAdvanced: {
      de: "Der Nationalpark Biogradska Gora beherbergt einen von nur noch drei verbliebenen echten Urwäldern in ganz Europa. Im Herzen dieses dichten, moosbedeckten Waldes ruht der smaragdgrüne Biograd-See, umgeben von Bäumen, die teilweise über ein halbes Jahrtausend alt sind. Dieses streng geschützte Reservat bietet eine seltene Gelegenheit, eine völlig unberührte, wilde Waldlandschaft zu erleben, in der die Natur sich selbst überlassen ist. Geographie K6 – Urwälder und Naturschutz.",
      hu: "A Biogradska Gora Nemzeti Park Montenegró egyik legértékesebb védett területe, amely Európa három utolsó őserdejének egyikét rejti magában. A park központjában a sűrű, érintetlen erdő fáival körülvett, smaragdzöld Biograd-tó (Biogradsko jezero) csillog. Ezen a területen a fák egy része több mint ötszáz éves és akár 60 méter magasra is megnő, míg a kidőlt rönköket a természet lassan lebontja. A terület szigorú védelme garantálja, hogy az erdő flórája és faunája zavartalanul fejlődjön. Földrajz K6 – európai őserdők és védelem.",
      ro: "Biogradska Gora este un parc național din nord-estul Muntenegrului, care conservă una dintre ultimele trei păduri virgine rămase în Europa. Centrul parcului este frumosul lac Biograd, înconjurat de păduri dese, care asigură frumusețea naturală nealterată a zonei.",
      en: "Biogradska Gora National Park is a breathtaking natural reserve and one of the very last remaining primeval rainforests in all of Europe. Centered around the stunning, emerald-green Lake Biograd, the park features incredibly ancient trees, some over 400 years old and towering up to 50 meters high. The remarkably pristine ecosystem supports a vast array of wildlife and offers visitors an unforgettable, profound immersion into untouched, ancient nature. Geography K6 - Primeval forests and conservation."
    },
    factsAdvanced: {
      de: ["Der Nationalpark wurde bereits 1878 von König Nikola zum Schutzgebiet erklärt.", "Einige der massiven Bäume im Wald sind über 500 Jahre alt und bis zu 60 Meter hoch.", "Der Park beheimatet 86 verschiedene Baumarten.", "Der Gletschersee liegt auf 1094 Metern über dem Meeresspiegel.", "Das Gebiet ist ein wichtiges Refugium für den europäischen Braunbären."],
      hu: ["A területet már 1878-ban védetté nyilvánította Nikola király ('Királyi Erdő' néven).", "A parkban 86 különböző őshonos fafaj és több mint 200 madárfaj él.", "A Biograd-tó 1094 méteres tengerszint feletti magasságban, glaciális medencében fekszik.", "Az erdő olyan sűrű, hogy egyes részein a napfény alig jut el a talajig."],
      ro: ["Parcul național a fost fondat în 1952.", "Suprafața teritoriului este de 54 km².", "În mijlocul parcului se află lacul Biograd.", "În pădurea virgină există arbori cu o vechime de peste 500 de ani.", "Parcul este bogat în faună sălbatică (urși, lupi, căprioare).", "Zona face parte din masivul muntos Bjelasica."],
      en: ["It is officially recognized as one of the last three large primeval forests in Europe.", "The park was first placed under strict environmental protection by King Nikola in 1878.", "Some individual trees within the forest are estimated to be over 400 years old.", "The central Biograd Lake is a glacial lake situated at 1,094 meters above sea level.", "The diverse park provides a critical, protected habitat for brown bears and wolves."]
    }
  },
  // ME-018: Cetinje
  {
    id: "me-018-city",
    name: { de: "Cetinje", hu: "Cetinje", ro: "Cetinje", en: "Cetinje" },
    type: "city",
    coords: [18.9144, 42.3931],
    parent: "ME-018",
    description: {
      de: "Die historische und kulturelle Hauptstadt Montenegros.",
      hu: "Montenegró történelmi és kulturális fővárosa.",
      ro: "Capitala istorică și culturală a Muntenegrului.",
      en: "The historic and cultural capital of Montenegro."
    },
    facts: {
      de: ["Sitz des Präsidenten.", "Reich an Museen.", "Gegründet im 15. Jahrhundert.", "Königliche Architektur."],
      hu: ["Az elnök székhelye.", "Múzeumokban gazdag.", "A 15. században alapították.", "Királyi építészet."],
      ro: ["Sediul președintelui.", "Bogat în muzee.", "Fondat în secolul al XV-lea.", "Arhitectură regală."],
      en: ["Seat of the President.", "Rich in museums.", "Founded in the 15th century.", "Royal architecture."]
    },
    descriptionAdvanced: {
      de: "Cetinje ist die historische alte Königsstadt Montenegros, die versteckt auf einem karstigen Hochplateau unterhalb des Berges Lovćen liegt. Sie fungierte jahrhundertelang als spirituelles und politisches Zentrum des Landes und rettete die Unabhängigkeit der Nation vor osmanischer Eroberung. Heute ist Cetinje eine faszinierende Museumsstadt, voller alter europäischer Botschaftsgebäude und königlicher Paläste aus dem 19. Jahrhundert. Geschichte K6 – Unabhängigkeit auf dem Balkan.",
      hu: "Cetinje Montenegró régi, történelmi és kulturális fővárosa, amely egy elszigetelt, karsztos fennsíkon fekszik a Lovćen-hegy lábánál. Ez a csendes városka évszázadokon keresztül az ország politikai és szellemi magja volt, ellenállva az oszmán birodalom hódítási kísérleteinek. A város ma egy élő szabadtéri múzeum, tele egykori királyi palotákkal, ősi kolostorokkal és a 19. századi Európa legfontosabb államainak régi nagykövetségi épületeivel. Cetinje megőrizte büszke, monarchikus hangulatát, a montenegrói nemzeti identitás szimbólumaként. Történelem K8 – európai monarchiák.",
      ro: "Cetinje este capitala istorică și culturală a Muntenegrului, situată pe un platou înconjurat de munți. Orașul și-a păstrat vechile reședințe regale, muzee și clădiri diplomatice, care astăzi constituie cele mai importante mărturii ale identității naționale muntenegrene, oferind o perspectivă asupra istoriei monarhice a țării din secolul al XIX-lea.",
      en: "Cetinje is the historic old royal capital of Montenegro, securely hidden on a high karst plateau directly beneath the imposing Mount Lov\u0107en. For centuries, it functioned as the spiritual and political fortress of the nation, successfully maintaining Montenegro's independence against constant Ottoman expansion. Today, the town is a captivating open-air museum, filled with 19th-century royal palaces, ancient monasteries, and historic European embassy buildings. History K8 - European monarchies and independence."
    },
    factsAdvanced: {
      de: ["Cetinje war bis zur Verlegung nach Podgorica im Jahr 1946 die Hauptstadt Montenegros.", "In der Stadt stehen noch immer die charmanten Gebäude der ehemaligen europäischen Botschaften.", "Die erste staatliche Druckerei des Balkans wurde hier im Jahr 1493 gegründet.", "Das prächtige Blaue Schloss beherbergt heute Ausstellungen des Nationalmuseums.", "Cetinje verzeichnet aufgrund seiner Lage extrem hohe jährliche Niederschlagsmengen."],
      hu: ["Cetinje 1946-ig volt Montenegró fővárosa, mielőtt a közigazgatás átköltözött Podgoricába.", "A város ma Montenegró hivatalos tiszteletbeli kulturális fővárosa.", "A helyi karsztos környezet miatt a város a Balkán egyik legcsapadékosabb területe.", "Több mint tíz nemzeti múzeum, köztük a Nemzeti Múzeum működik a város kis területén."],
      ro: ["Orașul a fost fondat în secolul al XV-lea.", "Cetinje a fost capitala Muntenegrului de la obținerea statalității până în 1918.", "Aici se află faimoasa Mănăstire Cetinje.", "În oraș funcționează peste 10 muzee naționale.", "Cetinje este situat la poalele muntelui Lovćen.", "Vechiile clădiri ale ambasadelor sunt astăzi instituții culturale."],
      en: ["Cetinje remained the official capital of Montenegro until it was moved to Podgorica in 1946.", "The town features numerous charming, preserved buildings that once housed European embassies.", "The first state-operated printing press in the Balkans was established here in 1493.", "The striking Blue Palace currently serves as an exhibition space for the National Museum.", "Due to its unique plateau location, the town records incredibly high annual rainfall."]
    }
  },
  {
    id: "me-018-lovcen",
    name: { de: "Nationalpark Lovćen", hu: "Lovćen Nemzeti Park", ro: "Parcul Național Lovćen", en: "Lovćen National Park" },
    type: "landmark",
    coords: [18.8333, 42.4000],
    parent: "ME-018",
    description: {
      de: "Ein heiliger Berg für Montenegriner mit Panoramablick.",
      hu: "A montenegróiak szent hegye panorámás kilátással.",
      ro: "Un munte sfânt pentru muntenegreni, cu vederi panoramice.",
      en: "A sacred mountain for Montenegrins with panoramic views."
    },
    facts: {
      de: ["Heimat des Njegoš-Mausoleums.", "Symbol der Freiheit.", "Reich an Heilpflanzen.", "Einzigartiges Klima."],
      hu: ["Itt található a Njegoš-mauzóleum.", "A szabadság szimbóluma.", "Gyógynövényekben gazdag.", "Egyedülálló klíma."],
      ro: ["Găzduiește Mausoleul lui Njegoš.", "Simbol al libertății.", "Bogat în plante medicinale.", "Climat unic."],
      en: ["Home to the Njegoš Mausoleum.", "Symbol of freedom.", "Rich in medicinal plants.", "Unique climate."]
    },
    descriptionAdvanced: {
      de: "Der Nationalpark Lovćen schützt das markante Lovćen-Massiv, das für die Montenegriner eine tiefe, fast mystische Bedeutung hat. Die raue Felslandschaft bietet aufgrund ihrer Nähe zur Küste einen atemberaubenden Kontrast und Panoramablicke auf die tief eingeschnittene Bucht von Kotor. Auf dem zweithöchsten Gipfel thront das Mausoleum des Nationalhelden Njegoš, was den Berg zum spirituellen Zentrum der Nation macht. Geographie K5 – Nationale Gebirgssymbole.",
      hu: "A Lovćen Nemzeti Park a Kotori-öböl fölé magasodó, monumentális Lovćen-hegyrendszert foglalja magában, amely a montenegrói nép szent hegyeként ismert. A zord karsztos csúcsokról lélegzetelállító kilátás nyílik mind az Adriai-tengerre, mind a szárazföld mély völgyeire. A hegyvidéken egyedülálló, tengeri és kontinentális klíma keveredik, ami különleges növény- és állatvilágot eredményez. A hegycsúcson álló Njegoš-mauzóleum miatt a terület a nemzeti zarándoklatok kiemelt célpontja. Földrajz K5 – nemzeti parkok és panorámák.",
      ro: "Lovćen este un munte și un parc național în apropierea Mării Adriatice, fiind un simbol al identității naționale muntenegrene. De pe vârfurile munților se deschide o vedere inegalabilă asupra golfului Kotor și a zonelor înconjurătoare, iar tot aici se află și mausoleul conducătorului Njegoš.",
      en: "Lov\u0107en National Park protects the dramatic, rocky mountain massif that rises steeply directly behind the coastal town of Kotor. The mountain holds immense cultural and historical significance for Montenegrins, often considered the literal and figurative heart of the nation's identity. Characterized by stark karst features and a unique climate where Mediterranean and alpine weather systems collide, it offers breathtaking, expansive vistas over the entire Adriatic coast. Geography K6 - Karst mountains and microclimates."
    },
    factsAdvanced: {
      de: ["Der höchste Gipfel des Massivs, der Štirovnik, ist 1749 Meter hoch.", "Die berühmte Serpentine von Kotor zum Lovćen-Pass hat 25 steile Haarnadelkurven.", "Aufgrund des Aufeinandertreffens von See- und Gebirgsklima herrscht hier eine reiche Flora.", "Es gibt 1158 registrierte Pflanzenarten im Nationalpark.", "Zahlreiche alte Steinwege (Karawanenrouten) durchziehen das Gebirge."],
      hu: ["A hegyvidék legmagasabb pontja, a Štirovnik-csúcs 1749 méter magas.", "A Kotortól a Lovćenbe vezető hegyi szerpentin 25 hajtűkanyarból áll.", "A park területén több mint 1300 regisztrált növényfaj él.", "A karsztos talajon hagyományos, kőből épült nyári pásztorszállások (katunok) találhatók."],
      ro: ["Lovćen este format din două vârfuri: Štirovnik și Jezerski Vrh.", "Suprafața parcului național este de 62 km².", "Pe teritoriu se găsesc peste 1100 de specii de plante.", "Pe muntele Lovćen se află mausoleul lui Njegoš.", "Amplasarea muntelui permite vizualizarea simultană a mării și a uscatului.", "În parc se află unul dintre cele mai frumoase drumuri panoramice din Muntenegru."],
      en: ["The highest peak within the national park is \u0160tirovnik, reaching 1,749 meters.", "The mountain forms a dramatic, steep backdrop to the entire Bay of Kotor.", "It features a highly specific microclimate due to the clash of sea and mountain air.", "The park is renowned for its traditional stone houses and historic agricultural terraces.", "The serpentine road leading up to the mountain features 25 incredibly steep hairpin turns."]
    }
  },
  // ME-019: Šavnik
  {
    id: "me-019-city",
    name: { de: "Šavnik", hu: "Šavnik", ro: "Šavnik", en: "Šavnik" },
    type: "city",
    coords: [19.0967, 42.9564],
    parent: "ME-019",
    description: {
      de: "Eine kleine Stadt am Zusammenfluss dreier Flüsse.",
      hu: "Kisváros három folyó összefolyásánál.",
      ro: "Un oraș mic la confluența a trei râuri.",
      en: "A small town at the confluence of three rivers."
    },
    facts: {
      de: ["Kleinste Gemeindehauptstadt.", "Liegt in einem tiefen Tal.", "Umgeben von Hochgebirge.", "Früher ein Handelsplatz."],
      hu: ["A legkisebb községközpont.", "Mély völgyben fekszik.", "Magas hegyek veszik körül.", "Korábban kereskedelmi hely."],
      ro: ["Cea mai mică reședință de comună.", "Situat într-o vale adâncă.", "Înconjurat de munți înalți.", "Fost loc de schimb comercial."],
      en: ["Smallest municipal center.", "Located in a deep valley.", "Surrounded by high mountains.", "Formerly a trading post."]
    },
    descriptionAdvanced: {
      de: "Šavnik ist die kleinste und eine der isoliertesten Gemeindehauptstädte Montenegros, verborgen in einem tiefen Flusstal im Norden. Die Siedlung zeichnet sich durch ihre unberührte Natur, reine Gebirgsflüsse und traditionelle Lebensweise aus. Sie ist berühmt für das spektakuläre Naturphänomen der Nevidio-Schlucht, einer der unzugänglichsten Canyons in ganz Europa, der erst in den 1960er Jahren vollständig durchquert wurde. Geographie K7 – Verborgene Schluchten.",
      hu: "Šavnik egy eldugott, kis lélekszámú település Észak-Montenegróban, amely mélyen a hegyek és kanyonok ölelésében fekszik, három hegyi folyó – a Bukovica, Bijela és a Šavnik – találkozásánál. Földrajzi elhelyezkedése miatt télen gyakran el van vágva a külvilágtól, nyáron azonban a természetbúvárok és kanyonozók csendes bázisa. A városka környezete érintetlen, vadregényes tájakat rejt, köztük mély szurdokokat és vízeséseket. Šavnik tökéletes hely azok számára, akik a tömegturizmustól távol szeretnék felfedezni a balkáni természet erejét. Földrajz K5 – kistelepülések a hegyvidéken.",
      ro: "Šavnik este cel mai mic și unul dintre cele mai pitorești centre municipale din Muntenegru, ascuns adânc la confluența râurilor Bukovica, Bijela și Šavnik. Așezarea are particularitatea că soarele răsare și apune de două ori în aceeași zi, fenomen datorat văii înguste și munților abrupți. Deși este izolat, Šavnik servește ca punct de plecare pentru expedițiile îndrăznețe către canionul Nevidio și peisajele dramatice ale regiunii.",
      en: "\u0160avnik is officially the smallest and one of the most geographically isolated municipal centers in Montenegro, located deep within a steep river canyon. This tiny settlement is completely surrounded by towering mountain peaks and is uniquely situated at the confluence of three distinct rivers. Its extreme isolation has preserved an authentic, traditional highland way of life, making it a fascinating stop for adventurous travelers exploring the rugged northern territories. Geography K5 - Isolated mountain settlements."
    },
    factsAdvanced: {
      de: ["Šavnik liegt am Zusammenfluss von drei eiskalten Gebirgsflüssen.", "Die Sonne geht im Winter in einigen Teilen des Tals aufgrund der steilen Berge kaum auf.", "Die Nevidio-Schlucht ('Die Ungesehene') ist nur wenige Meter breit und extrem tief.", "Die Region ist ein Zentrum für Canyoning und extreme Outdoor-Abenteuer.", "Die Stadt hat eine sehr geringe Bevölkerungsdichte, da viele Menschen in die Städte abgewandert sind."],
      hu: ["A város egy geológiai mélyedésben fekszik, így a téli napforduló idején a nap hetekig nem süt be a központba.", "Šavnik Montenegró egyik legkisebb önkormányzati központja.", "A település határában folyik a jéghideg Bukovica-folyó.", "A település az ország híres kanyonozó célpontjának, a Nevidio-szurdoknak a kapuja."],
      ro: ["Šavnik este sediul municipalității cu cea mai mică populație din țară.", "Soarele pare să răsară și să apună de două ori din cauza crestelor montane.", "Orașul este poarta de intrare către Canionul Nevidio.", "În timpul iernii, stratul gros de zăpadă izolează frecvent zona.", "Râurile din zonă sunt excelente pentru pescuit la muscă."],
      en: ["It is the least populated official municipality in the entire country.", "The town is uniquely located at the confluence of the Bukovica, Bijela, and \u0160avnik rivers.", "Due to the steep surrounding canyons, the town receives very limited direct sunlight in winter.", "The region is renowned for its pristine, untamed nature and challenging hiking routes.", "It serves as the primary starting point for exploring the infamous Nevidio Canyon."]
    }
  },
  {
    id: "me-019-nevidio",
    name: { de: "Nevidio-Schlucht", hu: "Nevidio-kanyon", ro: "Canionul Nevidio", en: "Nevidio Canyon" },
    type: "landmark",
    coords: [19.0667, 42.9833],
    parent: "ME-019",
    description: {
      de: "Die letzte entdeckte Schlucht in Europa, ein Abenteuerziel.",
      hu: "Európa utolsóként felfedezett kanyonja, kalandvágyók célpontja.",
      ro: "Ultimul canion descoperit în Europa, o destinație de aventură.",
      en: "The last discovered canyon in Europe, an adventure destination."
    },
    facts: {
      de: ["Name bedeutet 'Nicht gesehen'.", "Extrem schmal und tief.", "Nur mit Guide begehbar.", "Spektakuläre Wasserfälle."],
      hu: ["A neve azt jelenti: 'nem látott'.", "Rendkívül szűk és mély.", "Csak vezetővel látogatható.", "Látványos vízesések."],
      ro: ["Numele înseamnă „Nevăzutul”.", "Extrem de îngust și adânc.", "Accesibil doar cu ghid.", "Cascade spectaculoase."],
      en: ["Name means 'Unseen'.", "Extremely narrow and deep.", "Accessible only with a guide.", "Spectacular waterfalls."]
    },
    descriptionAdvanced: {
      de: "Die Nevidio-Schlucht ('Die Ungesehene') ist ein spektakuläres Naturphänomen und einer der faszinierendsten Canyons auf dem Balkan. Der Fluss Komarnica hat sich hier so tief in den Fels gefräst, dass die Schlucht an einigen Stellen nur wenige Meter breit ist und das Sonnenlicht den Grund nie erreicht. Die extreme Unzugänglichkeit macht die Schlucht zu einem erstklassigen Ziel für geführtes Canyoning. Geographie K7 – Verborgene Schluchten.",
      hu: "A Nevidio-szurdok (Kanyon Nevidio) Montenegró egyik legrejtettebb és legkésőbb felfedezett kanyonja, amelynek neve szó szerint azt jelenti: 'Ahol sosem süt a nap'. A Komarnica-folyó által évezredek alatt kivájt, rendkívül keskeny szurdokot csak 1965-ben sikerült először embernek bejárnia. A meredek, gyakran mindössze fél méter széles sziklafalak között jéghideg vízesések és mély medencék találhatók. Ez az ország első számú kanyonozó (canyoning) helyszíne, amely igazi adrenalinlöketet kínál a kalandvágyóknak. Földrajz K7 – extrém szurdokvölgyek.",
      ro: "Canionul Nevidio este o minune geologică spectaculoasă, faimoasă prin faptul că a fost ultimul canion explorat în Europa, abia în anul 1965. Numele său, care înseamnă \"Cel Nevăzut\", se potrivește perfect cu cheile extrem de înguste unde lumina soarelui abia reușește să pătrundă. Străbaterea canionului este o adevărată aventură plină de adrenalină, necesitând sărituri în cascade, înot prin ape înghețate și o pregătire adecvată, fiind accesibil doar vara.",
      en: "The Nevidio Canyon, which literally translates to 'The Unseen', is a spectacular, incredibly narrow gorge carved deeply by the Komarnica River. It was officially the last canyon in Europe to be fully explored and conquered, remaining entirely hidden from human eyes until 1965. Today, navigating its freezing waters, narrow rocky passages, and steep cascades is considered one of the most thrilling and extreme canyoning adventures available in the Balkans. Geography K7 - Extreme gorge formation."
    },
    factsAdvanced: {
      de: ["Die Schlucht wurde erst 1965 zum ersten Mal von Bergsteigern vollständig durchquert.", "An der engsten Stelle ist die Nevidio-Schlucht weniger als einen Meter breit.", "Die gesamte Länge des Canyons beträgt etwa 2 Kilometer.", "Das eisige Wasser des Flusses übersteigt selten die 7-Grad-Marke.", "Die Schlucht ist aufgrund gefährlicher Strömungen nur in den späten Sommermonaten passierbar."],
      hu: ["A kanyon mintegy 3 kilométer hosszú, de az átkelés rajta több órát is igénybe vehet.", "Vannak olyan szakaszai, ahol a sziklafalak annyira közel vannak, hogy a fény sosem éri el a vizet.", "Az átkelés csak profi túravezetőkkel és speciális neoprén felszereléssel lehetséges.", "A kanyon vize még a legforróbb nyári napokon is alig éri el a 7 Celsius-fokot."],
      ro: ["Canionul a fost cucerit pentru prima dată în luna august a anului 1965.", "Trecătoarea are o lățime de doar jumătate de metru în anumite secțiuni.", "Lungimea totală explorabilă a canionului este de aproximativ 2,7 kilometri.", "Călătoria prin canion necesită echipament de neopren datorită apei reci.", "Râul Komarnica este cel care a săpat acest canion adânc."],
      en: ["The canyon remained completely unexplored by humans until a team conquered it in 1965.", "The gorge spans approximately 2 kilometers in length but is incredibly narrow.", "In some specific sections, the canyon width is less than a single meter across.", "The water temperature within the gorge is notoriously freezing, even during high summer.", "Navigating the canyon requires specialized climbing equipment and professional guides."]
    }
  },
  // ME-020: Kolašin
  {
    id: "me-020-city",
    name: { de: "Kolašin", hu: "Kolašin", ro: "Kolašin", en: "Kolašin" },
    type: "city",
    coords: [19.5214, 42.8225],
    parent: "ME-020",
    description: {
      de: "Ein beliebtes Zentrum für Berg- und Wintersport im Norden.",
      hu: "Népszerű hegyi és téli sportközpont északon.",
      ro: "Un centru popular pentru sporturi montane și de iarnă din nord.",
      en: "A popular center for mountain and winter sports in the north."
    },
    facts: {
      de: ["Gegründet von Osmanen.", "Liegt am Fluss Tara.", "Zentrum für Skifahren.", "Luftkurort-Qualitäten."],
      hu: ["Oszmánok alapították.", "A Tara folyó partján fekszik.", "Síelési központ.", "Klimatikus gyógyhely."],
      ro: ["Fondat de otomani.", "Situat pe râul Tara.", "Centru pentru schi.", "Calități de stațiune climatică."],
      en: ["Founded by Ottomans.", "Located by the Tara River.", "Center for skiing.", "Climatic health resort qualities."]
    },
    descriptionAdvanced: {
      de: "Kolašin ist eine charmante Gebirgsstadt, umgeben von den bewaldeten Hängen des Bjelasica-Gebirges und durchschnitten vom kristallklaren Tara-Fluss. Ursprünglich als türkische Karawanenstation gegründet, ist die Stadt heute eines der populärsten Wintersportzentren und Sommer-Wandergebiete Montenegros. Das moderne Ski-Resort und die saubere Bergluft ziehen das ganze Jahr über Naturliebhaber an. Geographie K5 – Bergkurorte.",
      hu: "Kolašin egy hangulatos, kis hegyvidéki üdülőváros Közép-Montenegróban, amely a Tara-folyó partján fekszik, sűrű erdőkkel övezve. A város Montenegró legfontosabb hegyi központjainak egyike, amely mind télen, mind nyáron rengeteg látogatót vonz. Télen a Bjelasica-hegység közeli síközpontjai kínálnak kiváló sportolási lehetőségeket, míg nyáron a tiszta hegyi levegő és a környező nemzeti parkok csábítják a túrázókat. A település hagyományos építészete és gasztronómiája hiteles hegyi élményt biztosít. Földrajz K5 – hegyvidéki turisztikai központok.",
      ro: "Kolašin este o stațiune montană fermecătoare situată pe râul Tara, la poalele munților Bjelasica și Sinjajevina. Fondat de otomani în secolul al XVII-lea ca un avanpost militar, a evoluat într-una dintre destinațiile principale pentru schi din Muntenegru. Aerul proaspăt și centrul istoric pitoresc îi conferă un statut de stațiune balneară. Vara, Kolašin atrage pasionații de drumeții, fiind aproape de faimosul lac Biograd.",
      en: "Kola\u0161in is a highly charming and popular mountain town situated centrally in Montenegro, surrounded by the dense forests of the Bjelasica and Sinjajevina mountains. Historically a strategic defensive outpost, it has successfully transformed into a leading center for both winter sports and summer eco-tourism. The town's incredibly crisp mountain air, traditional wooden architecture, and close proximity to Biogradska Gora make it a perfect, tranquil alpine retreat. Geography K6 - Mountain tourism hubs."
    },
    factsAdvanced: {
      de: ["Kolašin liegt auf einer Höhe von 954 Metern über dem Meeresspiegel.", "Das Skigebiet 'Kolašin 1450/1600' ist das modernste Wintersportzentrum des Landes.", "Die Stadt wurde im 17. Jahrhundert von den Osmanen als militärischer Außenposten gegründet.", "Der nahegelegene Biogradska Gora-Nationalpark ist nur eine kurze Autofahrt entfernt.", "Die Region ist berühmt für 'Kačamak', ein traditionelles, nahrhaftes Bauerngericht aus Maismehl und Käse."],
      hu: ["Kolašin körülbelül 950 méteres tengerszint feletti magasságban helyezkedik el.", "A várost az oszmánok alapították a 17. században katonai őrhelyként.", "A város vasútállomása a Belgrád-Bar vonal egyik legmagasabban fekvő pontja.", "A helyi éttermek egyik leghíresebb fogása a füstölt hegyi sajt (Kolašinski lisnati sir)."],
      ro: ["Orașul se află la o altitudine de 954 metri.", "Stațiunea de schi Kolašin 1450 este cea mai modernă din Muntenegru.", "Zona este recunoscută oficial ca stațiune balneară aeriană.", "Spre deosebire de alte orașe montane, drumurile de acces sunt largi și sigure.", "Localnicii sunt cunoscuți pentru prepararea cașcavalului tradițional Lisnati."],
      en: ["The town was originally founded by the Ottoman Turks in the 17th century as a fortress.", "It is located at an altitude of 954 meters above sea level.", "The town is a major station on the impressive Belgrade-Bar railway line.", "Kola\u0161in operates as one of Montenegro's premier, rapidly expanding winter ski resorts.", "The local cuisine is famous for traditional highland dairy products like 'lisnati sir'."]
    }
  },
  {
    id: "me-020-bjelasica",
    name: { de: "Bjelasica", hu: "Bjelasica", ro: "Bjelasica", en: "Bjelasica" },
    type: "mountain",
    coords: [19.6667, 42.8667],
    parent: "ME-020",
    description: {
      de: "Ein sanfteres Gebirge, ideal zum Wandern und Skifahren.",
      hu: "Lankásabb hegyvidék, ideális túrázáshoz és síeléshez.",
      ro: "Un munte cu pante mai domoale, ideal pentru drumeții și schi.",
      en: "A gentler mountain range, ideal for hiking and skiing."
    },
    facts: {
      de: ["Vulkanischen Ursprungs.", "Reich an Seen und Wäldern.", "Sitz großer Skizentren.", "Leicht zugängliche Gipfel."],
      hu: ["Vulkanikus eredetű.", "Tavakban és erdőkben gazdag.", "Nagy síközpontok helyszíne.", "Könnyen elérhető csúcsok."],
      ro: ["De origine vulcanică.", "Bogat în lacuri și păduri.", "Găzduiește mari centre de schi.", "Vârfuri ușor accesibile."],
      en: ["Of volcanic origin.", "Rich in lakes and forests.", "Home to major ski centers.", "Easily accessible peaks."]
    },
    descriptionAdvanced: {
      de: "Das Bjelasica-Gebirge ist im Vergleich zu den schroffen Karstbergen Montenegros ein ungewöhnlich grünes, sanft geschwungenes Massiv. Aufgrund seines vulkanischen Ursprungs ist das Gebirge wasserreich und mit dichten Wäldern und weiten Graslandschaften bedeckt. Es ist ein erstklassiges Gebiet für ausgedehnte Wanderungen, Reitausflüge und im Winter für sanftes Skifahren, gesäumt von traditionellen hölzernen Hirtenhütten. Geographie K6 – Vulkanische Gebirgsmassive.",
      hu: "A Bjelasica Montenegró egyik legzöldebb és legkönnyebben járható hegysége, amely vulkanikus eredete miatt élesen elüt a környező karszthegységektől. A karsztos területekkel ellentétben a Bjelasica gazdag felszíni vízfolyásokban, dús fűvel borított legelőkben és lombhullató őserdőkben. Ez a páratlanul gazdag ökoszisztéma ad otthont a Biogradska Gora Nemzeti Park egy részének is. A hegység lankásabb hegyoldalai ideálisak a síelésre és a családi túrázásra egyaránt. Földrajz K6 – vulkanikus hegyvidékek.",
      ro: "Muntele Bjelasica este o destinație turistică montană care se distinge prin formațiunile sale vulcanice mai blânde și pajiștile întinse de smarald, contrastând cu versanții calcaroși ascuțiți din Durmitor. Acest munte verde este un paradis pentru iubitorii de drumeții, echitație și mountain bike în timpul verii. Iarna, pantele acoperite de zăpadă găzduiesc cele mai bune pârtii de schi din nordul Muntenegrului. Pădurile sale dese și lacurile alpine sunt o încântare pentru ochi.",
      en: "The Bjelasica Mountain range is distinct among Montenegrin mountains for its incredibly gentle, rolling green ridges and highly accessible terrain, in sharp contrast to the harsh karst peaks of the region. Composed primarily of volcanic rock, it holds water excellently, resulting in lush pastures, numerous streams, and several beautiful glacial lakes. This welcoming landscape makes it a perfect, safe destination for family hiking, mountain biking, and relaxed winter skiing. Geography K6 - Volcanic mountain terrain."
    },
    factsAdvanced: {
      de: ["Der höchste Gipfel, der Crna Glava, erreicht 2139 Meter.", "Anders als Karstgebirge behält Bjelasica das Wasser an der Oberfläche, wodurch viele Bäche entstehen.", "Das Gebirge ist die Heimat von sechs malerischen Bergseen.", "Die traditionellen Almhütten ('Katuns') werden noch heute in den Sommermonaten genutzt.", "Das Skigebiet Kolašin liegt an den Nordhängen der Bjelasica."],
      hu: ["A hegycsoport legmagasabb csúcsa, a Crna Glava 2139 méter magasra emelkedik.", "A vulkanikus kőzetalap miatt a hegységben számos forrás és hat tiszta vizű gleccsertó található.", "A Bjelasica az ország legmodernebb és legnagyobb síközpontjainak ad otthont (Kolašin 1450 és 1600).", "A hegység neve a montenegrói 'bijela' (fehér) szóból ered, utalva a hosszan megmaradó hótakaróra."],
      ro: ["Bjelasica este un munte de origine vulcanică, reținând astfel bine apa.", "Muntele are numeroase lacuri glaciare limpezi.", "Cel mai înalt vârf, Crna Glava, atinge 2139 metri.", "Parcul Național Biogradska Gora ocupă o parte semnificativă din masiv.", "Pantele sale domoale o fac una dintre cele mai sigure zone pentru drumeții."],
      en: ["Unlike most surrounding mountains, Bjelasica is primarily composed of volcanic rock, not limestone.", "The highest peak in the range is Crna Glava, which reaches exactly 2,139 meters.", "The mountain holds water well, supporting incredibly rich, dense green vegetation.", "It features several stunning glacial lakes, the most famous being Lake Pe\u0161i\u0107a.", "The gentle, rolling slopes make it ideal for extensive ski resort development."]
    }
  },
  // ME-021: Danilovgrad
  {
    id: "me-021-city",
    name: { de: "Danilovgrad", hu: "Danilovgrad", ro: "Danilovgrad", en: "Danilovgrad" },
    type: "city",
    coords: [19.1467, 42.5900],
    parent: "ME-021",
    description: {
      de: "Eine Stadt im Bjelopavlići-Tal, benannt nach Fürst Danilo.",
      hu: "Város a Bjelopavlići-völgyben, Danilo fejedelemről elnevezve.",
      ro: "Un oraș în valea Bjelopavlići, numit după prințul Danilo.",
      en: "A town in the Bjelopavlići valley, named after Prince Danilo."
    },
    facts: {
      de: ["Geplant als Landeshauptstadt.", "Bekannt für Steinmetzkunst.", "Liegt am Fluss Zeta.", "Zentrum der Landwirtschaft."],
      hu: ["Fővárosnak tervezték.", "Kőfaragó művészetéről híres.", "A Zeta folyó partján fekszik.", "Mezőgazdasági központ."],
      ro: ["Planificat a fi capitală.", "Cunoscut pentru arta pietrei.", "Situat pe râul Zeta.", "Centru agricol."],
      en: ["Planned to be the capital.", "Known for stonemasonry.", "Located on the Zeta River.", "Agricultural center."]
    },
    descriptionAdvanced: {
      de: "Danilovgrad liegt zentral im fruchtbaren Zeta-Tal und bildet das landwirtschaftliche Herzstück Montenegros. Die Stadt wurde im 19. Jahrhundert planmäßig als zukünftige Hauptstadt entworfen, übernahm diese Rolle jedoch nie. Heute besticht sie durch ihre ruhige Atmosphäre am Fluss Zeta, bedeutende orthodoxe Klöster in den umliegenden Felswänden und eine florierende Steinmetzindustrie, die Marmor in die ganze Welt exportiert. Geographie K6 – Fruchtbare Flussebenen.",
      hu: "Danilovgrad egy békés, lankás mezőgazdasági város a termékeny Zeta-völgy szívében, Podgorica és Nikšić között. A települést a 19. században alapította I. Miklós montenegrói király, azzal a szándékkal, hogy modern európai fővárost építsen belőle, ám ez a terv sosem valósult meg teljesen. A várost átszelő Zeta-folyó partján kiterjedt mezőgazdasági területek és szőlőültetvények találhatók. Danilovgrad ma a nyugalom szigete és fontos kulturális megálló az Ostrog-kolostorba tartó zarándokok számára. Földrajz K5 – folyóvölgyi agrárvidékek.",
      ro: "Danilovgrad este un oraș situat pe valea fertilă a râului Zeta, la jumătatea distanței dintre Podgorica și Nikšić. Gândit inițial pentru a fi capitala Muntenegrului în secolul al XIX-lea de către prințul Danilo, orașul a rămas un centru liniștit, recunoscut pentru agricultura sa bogată și măiestria în prelucrarea pietrei. Astăzi, oferă un mediu relaxant cu peisaje pitorești, având muntele Ostrog în apropiere, vizibil din depresiunea verde.",
      en: "Danilovgrad is strategically located in the fertile, sun-drenched center of the Zeta River valley, roughly halfway between the capital Podgorica and the industrial hub Nik\u0161i\u0107. Originally planned in the 19th century to be the new national capital, the town features wide, organized streets and a deeply relaxed, agricultural atmosphere. It is widely famous for its high-quality stone masonry and serves as the primary gateway to the highly revered Ostrog Monastery. Geography K5 - River valley agriculture."
    },
    factsAdvanced: {
      de: ["Die Stadt ist nach dem montenegrinischen Prinzen Danilo I. Petrović-Njegoš benannt.", "In der Nähe liegt das berühmte Felsenkloster Ostrog, das in eine vertikale Klippe gebaut wurde.", "Danilovgrad beherbergt die renommierte montenegrinische Kunst- und Steinmetzschule.", "Das Zeta-Tal ist für den Anbau von Feigen und Pfirsichen bekannt.", "Die nahegelegene Ždrebaonik-Kirche ist ein weiteres spirituelles Zentrum der orthodoxen Gemeinde."],
      hu: ["A várost 1869-ben alapították, és Danilo hercegről nevezték el.", "Danilovgrad környéke ad otthont Montenegró egyik legfontosabb kőfaragó iskolájának.", "A település a Zeta-folyó öntözésének köszönhetően az ország éléskamrája.", "A város közelében található Ždrebaonik kolostora fontos egyházi emlék."],
      ro: ["Orașul a fost fondat în 1869 de Regele Nikola I al Muntenegrului.", "Poartă numele prințului Danilo I.", "Danilovgrad este cunoscut pentru carierele sale de marmură și atelierele de piatră.", "În apropiere se află celebra Mănăstire Ostrog.", "Valea Bjelopavlići în care se află este una dintre cele mai fertile regiuni."],
      en: ["The town was officially founded in 1869 and named after Prince Danilo of Montenegro.", "It was originally, ambitiously planned to serve as the country's new capital city.", "The region is widely recognized across the Balkans for its exceptional stone masonry.", "It hosts Montenegro's primary national Police Academy.", "The fertile Zeta valley surrounding the town is highly productive for local agriculture."]
    }
  },
  {
    id: "me-021-ostrog",
    name: { de: "Kloster Ostrog", hu: "Ostrog kolostor", ro: "Mănăstirea Ostrog", en: "Ostrog Monastery" },
    type: "landmark",
    coords: [19.0300, 42.6750],
    parent: "ME-021",
    description: {
      de: "Das meistbesuchte orthodoxe Heiligtum auf dem Balkan.",
      hu: "A leglátogatottabb ortodox szenthely a Balkánon.",
      ro: "Cel mai vizitat sanctuar ortodox din Balcani.",
      en: "The most visited Orthodox sanctuary in the Balkans."
    },
    facts: {
      de: ["In den Fels gehauen.", "Vom Hl. Vasilije gegründet.", "Wunderbare Architektur.", "Pilgerort aller Religionen."],
      hu: ["Sziklába vájták.", "Szent Vaszilije alapította.", "Csodálatos építészet.", "Minden vallás zarándokhelye."],
      ro: ["Săpată în stâncă.", "Fondată de Sf. Vasilije.", "Arhitectură miraculoasă.", "Loc de pelerinaj universal."],
      en: ["Carved into the rock.", "Founded by St. Vasilije.", "Miraculous architecture.", "Pilgrimage site for all."]
    },
    descriptionAdvanced: {
      de: "Das Kloster Ostrog ist eine atemberaubende, strahlend weiße orthodoxe Pilgerstätte, die scheinbar der Schwerkraft trotzend direkt in eine vertikale Felswand hoch über dem Zeta-Tal gebaut wurde. Es wurde im 17. Jahrhundert von Sveti Vasilije (St. Basilius) gegründet, dessen Gebeine hier ruhen und dem Wunderheilungen zugeschrieben werden. Es ist der am meisten verehrte spirituelle Ort Montenegros und zieht Menschen aller Glaubensrichtungen an. Geschichte K6 – Pilgerstätten des Balkans.",
      hu: "Az Ostrog-kolostor a Balkán-félsziget egyik leglátogatottabb és legkülönlegesebb ortodox zarándokhelye, amely szinte beleolvad a függőleges sziklafalba. A 17. században alapított kolostort Szent Vaszilije hozta létre, akinek csodatévő ereklyéit a mai napig a sziklába vájt apró barlangtemplomban őrzik. A hófehér épület drámai kontrasztot alkot a sötét, meredek hegyoldallal, lenyűgöző kilátást nyújtva a Bjelopavlići-síkságra. A hely különlegessége, hogy nemcsak ortodoxok, hanem katolikusok és muszlimok is felkeresik gyógyulást remélve. Történelem K6 – szerb ortodoxia és csodák.",
      ro: "Mănăstirea Ostrog este unul dintre cele mai importante și vizitate locuri de pelerinaj ortodox din Balcani, fiind construită direct într-un perete de stâncă verticală. A fost fondată de Sfântul Vasile în secolul al XVII-lea și astăzi reprezintă un simbol al credinței vii și o minune arhitecturală în Muntenegru.",
      en: "The Ostrog Monastery is a breathtaking, brilliant white Orthodox pilgrimage site built seemingly defying all laws of gravity directly into a sheer vertical rock face high above the Zeta valley. Founded in the 17th century by Saint Basil, whose miracle-working relics are kept within, it is the most profoundly revered spiritual location in Montenegro. The site remarkably draws devoted pilgrims of all faiths, serving as a powerful symbol of unity and historical resilience. History K6 - Balkan pilgrimage sites."
    },
    factsAdvanced: {
      de: ["Das obere Kloster klebt in einer Höhle auf 900 Metern über dem Meeresspiegel.", "Es wurde 1665 vom Metropoliten Vasilije Jovanović gegründet.", "Trotz eines schweren Feuers im Jahr 1923 blieben die beiden kleinen Höhlenkirchen verschont.", "Viele Pilger steigen den steilen Weg zum Kloster barfuß hinauf.", "Die Reliquien des Heiligen Vasilije sind in der winzigen Präsentationskirche aufgebahrt."],
      hu: ["A kolostor felső része mintegy 900 méteres tengerszint feletti magasságban, egy sziklaüregben található.", "A szentélyt a 17. században alapította ostrogi Szent Vaszilije, hercegovinai metropolita.", "Sok hívő a hagyományt követve mezítláb teszi meg az alsó és felső kolostor közötti meredek utat.", "Az épületet egy 1923-as tűzvész majdnem elpusztította, de a barlangtemplomok sértetlenek maradtak."],
      ro: ["Mănăstirea este situată la 900 de metri deasupra văii râului Zeta.", "Clădirea a fost fondată în secolul al XVII-lea de Sfântul Vasile.", "Este o mănăstire ortodoxă sârbă.", "Mănăstirea este un loc de pelerinaj pentru credincioși de toate religiile.", "Construcția săpată în stâncă reprezintă o realizare inginerească unică.", "Moaștele Sfântului Vasile sunt păstrate în mănăstire."],
      en: ["The stunning upper monastery is carved into a cave at 900 meters above sea level.", "It was established in 1665 by the Metropolitan Bishop Vasilije Jovanovi\u0107.", "Despite a massive, destructive fire in 1923, the two small cave churches survived completely intact.", "Many devoted pilgrims choose to climb the steep path to the upper monastery entirely barefoot.", "The sacred relics of Saint Basil are carefully preserved in the tiny Presentation Church."]
    }
  }
];
