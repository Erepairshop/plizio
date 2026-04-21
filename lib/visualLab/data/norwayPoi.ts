import type { POI } from "./poi";

export const norwayCountry: POI = {
  id: "norway",
  type: "country",
  parent: "EU",
  coords: [10.7522, 59.9139],
  name: { de: "Norwegen", hu: "Norvégia", ro: "Norvegia", en: "Norway" },
  description: {
    en: "Norway is a Scandinavian country encompassing mountains, glaciers, and deep coastal fjords. It is known for its stunning natural beauty, high quality of life, and rich maritime history. From the vibrant capital of Oslo to the remote Arctic regions, Norway offers a unique blend of modern urban living and untouched wilderness. The country is a leader in sustainability and is famous for its Viking heritage and the spectacular Northern Lights.",
    de: "Norwegen ist ein skandinavisches Land, das Berge, Gletscher und tiefe Küstenfjorde umfasst. Es ist bekannt für seine atemberaubende natürliche Schönheit, hohe Lebensqualität und reiche maritime Geschichte. Von der lebendigen Hauptstadt Oslo bis zu den abgelegenen arktischen Regionen bietet Norwegen eine einzigartige Mischung aus modernem Stadtleben und unberührter Wildnis. Das Land ist führend in Nachhaltigkeit und berühmt für sein Wikingererbe und die spektakulären Polarlichter.",
    hu: "Norvégia egy skandináv ország, amelyet hegyek, gleccserek és mély tengerparti fjordok jellemeznek. Lenyűgöző természeti szépségéről, magas életszínvonaláról és gazdag tengeri történelméről ismert. A vibráló fővárostól, Oslótól a távoli sarkvidéki régiókig Norvégia a modern városi élet és az érintetlen vadon egyedülálló keverékét kínálja. Az ország vezető szerepet tölt be a fenntarthatóság terén, és híres viking örökségéről, valamint a látványos északi fényről.",
    ro: "Norvegia este o țară scandinavă care cuprinde munți, ghețari și fjorduri de coastă adânci. Este cunoscută pentru frumusețea sa naturală uimitoare, calitatea ridicată a vieții și istoria maritimă bogată. De la capitala vibrantă Oslo până la regiunile arctice îndepărtate, Norvegia oferă un amestec unic de viață urbană modernă și sălbăticie neatinsă. Țara este un lider în sustenabilitate și este faimoasă pentru moștenirea sa vikingă și spectaculoasa Auroră Boreală."
  },
  facts: {
    en: [
      "Norway has the longest coastline in Europe, including its many fjords and islands.",
      "The Nobel Peace Prize is awarded annually in Oslo, while other Nobel prizes are awarded in Stockholm.",
      "Norway is one of the world's largest exporters of seafood, especially salmon.",
      "The country is a global leader in electric vehicle adoption.",
      "Norway's sovereign wealth fund is the largest of its kind in the world.",
      "The famous painting 'The Scream' was created by the Norwegian artist Edvard Munch."
    ],
    de: [
      "Norwegen hat die längste Küstenlinie Europas, einschließlich seiner vielen Fjorde und Inseln.",
      "Der Friedensnobelpreis wird jährlich in Oslo verliehen, während andere Nobelpreise in Stockholm vergeben werden.",
      "Norwegen ist einer der weltweit größten Exporteure von Meeresfrüchten, insbesondere Lachs.",
      "Das Land ist weltweit führend bei der Einführung von Elektrofahrzeugen.",
      "Norwegens Staatsfonds ist der größte seiner Art weltweit.",
      "Das berühmte Gemälde 'Der Schrei' wurde vom norwegischen Künstler Edvard Munch geschaffen."
    ],
    hu: [
      "Norvégiának van Európa leghosszabb partvonala, beleértve a számos fjordot és szigetet.",
      "A Nobel-békedíjat évente Oslóban adják át, míg a többi Nobel-díjat Stockholmban.",
      "Norvégia a világ egyik legnagyobb tengeri étel exportőre, különösen a lazac tekintetében.",
      "Az ország globális vezető az elektromos járművek elterjedésében.",
      "Norvégia állami vagyonalapja a legnagyobb a maga nemében a világon.",
      "A híres 'A sikoly' című festményt a norvég művész, Edvard Munch alkotta."
    ],
    ro: [
      "Norvegia are cea mai lungă linie de coastă din Europa, incluzând numeroasele sale fjorduri și insule.",
      "Premiul Nobel pentru Pace este acordat anual la Oslo, în timp ce celelalte premii Nobel sunt acordate la Stockholm.",
      "Norvegia este unul dintre cei mai mari exportatori de fructe de mare din lume, în special somon.",
      "Țara este un lider global în adoptarea vehiculelor electrice.",
      "Fondul suveran de investiții al Norvegiei este cel mai mare de acest gen din lume.",
      "Celebra pictură 'Țipătul' a fost creată de artistul norvegian Edvard Munch."
    ]
  },
  image: "/geo-images/norway/norway-main.webp",
};

export const norwayRegions: POI[] = [
  {
    id: "city-oslo",
    type: "city",
    parent: "norway",
    coords: [10.7522, 59.9139],
    name: { de: "Oslo", hu: "Oslo", ro: "Oslo", en: "Oslo" },
    description: {
      en: "Oslo, the capital of Norway, is a modern and green city situated at the head of the Oslofjord. It is known for its world-class museums, including the Viking Ship Museum and the Munch Museum. The city features impressive contemporary architecture, such as the Oslo Opera House, and is surrounded by forests and water, offering easy access to outdoor activities. Oslo is a hub for innovation, culture, and the arts.",
      de: "Oslo, die Hauptstadt Norwegens, ist eine moderne und grüne Stadt am Kopf des Oslofjords. Sie ist bekannt für ihre erstklassigen Museen, darunter das Wikingerschiffsmuseum und das Munch-Museum. Die Stadt besticht durch beeindruckende zeitgenössische Architektur wie das Opernhaus Oslo und ist von Wäldern und Wasser umgeben, was einen einfachen Zugang zu Outdoor-Aktivitäten bietet. Oslo ist ein Zentrum für Innovation, Kultur und Kunst.",
      hu: "Oslo, Norvégia fővárosa, egy modern és zöld város az Oslo-fjord végénél. Világszínvonalú múzeumairól ismert, köztük a Viking Hajómúzeumról és a Munch Múzeumról. A város lenyűgöző kortárs építészettel büszkélkedhet, mint például az Oslói Operaház, és erdőkkel, valamint vízzel van körülvéve, így könnyű hozzáférést biztosít a szabadtéri tevékenységekhez. Oslo az innováció, a kultúra és a művészetek központja.",
      ro: "Oslo, capitala Norvegiei, este un oraș modern și verde situat în capătul Oslofjordului. Este cunoscut pentru muzeele sale de talie mondială, inclusiv Muzeul Navelor Vikinge și Muzeul Munch. Orașul prezintă o arhitectură contemporană impresionantă, cum ar fi Opera din Oslo, și este înconjurat de păduri și apă, oferind acces ușor la activități în aer liber. Oslo este un centru pentru inovație, cultură și arte."
    },
    facts: {
      en: ["Oslo was founded around 1040 by King Harald Hardrada.","The city is one of the fastest-growing capitals in Europe.","Oslo is home to the Vigeland Park, the world's largest sculpture park made by a single artist.","The city was named the European Green Capital in 2019."],
      de: ["Oslo wurde um 1040 von König Harald Hardrada gegründet.","Die Stadt ist eine der am schnellsten wachsenden Hauptstädte Europas.","Oslo beherbergt den Vigeland-Park, den weltweit größten Skulpturenpark eines einzelnen Künstlers.","Die Stadt wurde 2019 zur Umwelthauptstadt Europas ernannt."],
      hu: ["Oslót 1040 körül alapította Harald Hardrada király.","A város Európa egyik leggyorsabban növekvő fővárosa.","Oslóban található a Vigeland park, a világ legnagyobb, egyetlen művész által készített szoborparkja.","A várost 2019-ben Európa Zöld Fővárosának választották."],
      ro: ["Oslo a fost fondat în jurul anului 1040 de regele Harald Hardrada.","Orașul este una dintre capitalele cu cea mai rapidă creștere din Europa.","Oslo găzduiește Parcul Vigeland, cel mai mare parc de sculpturi din lume realizat de un singur artist.","Orașul a fost numit Capitala Verde Europeană în 2019."]
    },
    image: "/geo-images/norway/oslo.webp",
  },
  {
    id: "city-bergen",
    type: "city",
    parent: "norway",
    coords: [5.3221, 60.3913],
    name: { de: "Bergen", hu: "Bergen", ro: "Bergen", en: "Bergen" },
    description: {
      en: "Bergen is Norway's second-largest city and the gateway to the fjords. Located on the west coast, it is famous for Bryggen, a series of colorful Hanseatic commercial buildings on the eastern side of the Vågen harbour, which is a UNESCO World Heritage site. Bergen is surrounded by seven mountains and is known for its vibrant cultural scene, historic charm, and frequent rainfall, which adds to its unique atmosphere.",
      de: "Bergen ist Norwegens zweitgrößte Stadt und das Tor zu den Fjorden. An der Westküste gelegen, ist sie berühmt für Bryggen, eine Reihe farbenfroher hanseatischer Handelsgebäude an der Ostseite des Hafens Vågen, die zum UNESCO-Weltkulturerbe gehört. Bergen ist von sieben Bergen umgeben und bekannt für seine lebendige Kulturszene, seinen historischen Charme und die häufigen Regenfälle, die zu seiner einzigartigen Atmosphäre beitragen.",
      hu: "Bergen Norvégia második legnagyobb városa és a fjordok kapuja. A nyugati parton fekszik, és híres a Bryggenről, a Vågen-öböl keleti oldalán található színes hanza kereskedelmi épületekről, amely az UNESCO Világörökség része. Bergent hét hegy veszi körül, és élénk kulturális életéről, történelmi bájáról és gyakori esőzéseiről ismert, ami hozzájárul egyedi hangulatához.",
      ro: "Bergen este al doilea oraș ca mărime din Norvegia și poarta de intrare către fjorduri. Situat pe coasta de vest, este faimos pentru Bryggen, o serie de clădiri comerciale hanseatice colorate pe partea de est a portului Vågen, care este un sit al Patrimoniului Mondial UNESCO. Bergen este înconjurat de șapte munți și este cunoscut pentru scena sa culturală vibrantă, farmecul istoric și ploile frecvente, care contribuie la atmosfera sa unică."
    },
    facts: {
      en: ["Bergen was the capital of Norway in the 13th century.","The city is a member of the UNESCO Creative Cities Network in the field of Gastronomy.","The Fløibanen funicular takes visitors to the top of Mount Fløyen for panoramic views.","Bergen is the birthplace of the famous composer Edvard Grieg."],
      de: ["Bergen war im 13. Jahrhundert die Hauptstadt Norwegens.","Die Stadt ist Mitglied des UNESCO Creative Cities Network im Bereich Gastronomie.","Die Fløibanen-Standseilbahn bringt Besucher auf den Gipfel des Berges Fløyen für einen Panoramablick.","Bergen ist der Geburtsort des berühmten Komponisten Edvard Grieg."],
      hu: ["Bergen a 13. században Norvégia fővárosa volt.","A város az UNESCO Kreatív Városok Hálózatának tagja a gasztronómia területén.","A Fløibanen sikló a Fløyen-hegy tetejére viszi a látogatókat a panorámás kilátásért.","Bergen a híres zeneszerző, Edvard Grieg szülőhelye."],
      ro: ["Bergen a fost capitala Norvegiei în secolul al XIII-lea.","Orașul este membru al Rețelei de Orașe Creative UNESCO în domeniul Gastronomiei.","Funicularul Fløibanen duce vizitatorii în vârful Muntelui Fløyen pentru vederi panoramice.","Bergen este locul de naștere al celebrului compozitor Edvard Grieg."]
    },
    image: "/geo-images/norway/bergen.webp",
  },
  {
    id: "city-trondheim",
    type: "city",
    parent: "norway",
    coords: [10.3951, 63.4305],
    name: { de: "Trondheim", hu: "Trondheim", ro: "Trondheim", en: "Trondheim" },
    description: {
      en: "Trondheim is a historic city in central Norway, known for its rich medieval heritage and vibrant student life. It is home to the Nidaros Cathedral, the northernmost medieval cathedral in the world and an important pilgrimage site. The city features charming wooden houses, a picturesque old bridge (Gamle Bybro), and is a major center for education and research, hosting the Norwegian University of Science and Technology (NTNU).",
      de: "Trondheim ist eine historische Stadt in Mittelnorwegen, bekannt für ihr reiches mittelalterliches Erbe und ihr lebendiges Studentenleben. Sie beherbergt den Nidarosdom, die nördlichste mittelalterliche Kathedrale der Welt und ein wichtiger Wallfahrtsort. Die Stadt besticht durch charmante Holzhäuser, eine malerische alte Brücke (Gamle Bybro) und ist ein bedeutendes Zentrum für Bildung und Forschung, in dem sich die Norwegische Universität für Wissenschaft und Technologie (NTNU) befindet.",
      hu: "Trondheim egy történelmi város Közép-Norvégiában, amely gazdag középkori örökségéről és élénk diákéletéről ismert. Itt található a Nidarosi székesegyház, a világ legészakibb középkori katedrálisa és fontos zarándokhely. A várost bájos faházak, egy festői régi híd (Gamle Bybro) jellemzi, és az oktatás és kutatás jelentős központja, itt található a Norvég Természettudományi és Technológiai Egyetem (NTNU).",
      ro: "Trondheim este un oraș istoric din centrul Norvegiei, cunoscut pentru bogata sa moștenire medievală și viața studențească vibrantă. Găzduiește Catedrala Nidaros, cea mai nordică catedrală medievală din lume și un important loc de pelerinaj. Orașul are case fermecătoare din lemn, un pod vechi pitoresc (Gamle Bybro) și este un centru major pentru educație și cercetare, găzduind Universitatea Norvegiană de Știință și Tehnologie (NTNU)."
    },
    facts: {
      en: ["Trondheim was founded in 997 by King Olav Tryggvason.","The city was the first capital of Norway.","Nidaros Cathedral is built over the burial site of Saint Olav.","Trondheim is known as the technology capital of Norway."],
      de: ["Trondheim wurde 997 von König Olav Tryggvason gegründet.","Die Stadt war die erste Hauptstadt Norwegens.","Der Nidarosdom wurde über der Grabstätte des Heiligen Olav errichtet.","Trondheim ist als Technologiehauptstadt Norwegens bekannt."],
      hu: ["Trondheimet 997-ben alapította Olav Tryggvason király.","A város Norvégia első fővárosa volt.","A Nidarosi székesegyház Szent Olaf sírhelye fölé épült.","Trondheim Norvégia technológiai fővárosaként ismert."],
      ro: ["Trondheim a fost fondat în 997 de regele Olav Tryggvason.","Orașul a fost prima capitală a Norvegiei.","Catedrala Nidaros este construită peste locul de înmormântare al Sfântului Olav.","Trondheim este cunoscut drept capitala tehnologică a Norvegiei."]
    },
    image: "/geo-images/norway/trondheim.webp",
  },
  {
    id: "city-stavanger",
    type: "city",
    parent: "norway",
    coords: [5.7331, 58.9690],
    name: { de: "Stavanger", hu: "Stavanger", ro: "Stavanger", en: "Stavanger" },
    description: {
      en: "Stavanger is a city on the southwestern coast of Norway, known as the country's oil capital. It features a charming old town (Gamle Stavanger) with well-preserved 18th-century white wooden houses. Stavanger is also the gateway to some of Norway's most iconic natural landmarks, including the Lysefjord and the famous Preikestolen (Pulpit Rock) cliff. The city has a vibrant cultural life and a strong culinary scene.",
      de: "Stavanger ist eine Stadt an der Südwestküste Norwegens, bekannt als die Ölhauptstadt des Landes. Sie verfügt über eine charmante Altstadt (Gamle Stavanger) mit gut erhaltenen weißen Holzhäusern aus dem 18. Jahrhundert. Stavanger ist auch das Tor zu einigen der bekanntesten Naturdenkmäler Norwegens, darunter der Lysefjord und der berühmte Felsen Preikestolen (Kanzel). Die Stadt hat ein lebendiges Kulturleben und eine starke kulinarische Szene.",
      hu: "Stavanger egy város Norvégia délnyugati partján, az ország olajfővárosaként ismert. Bájos óvárosa (Gamle Stavanger) jól megőrzött 18. századi fehér faházakkal rendelkezik. Stavanger egyben a kapu Norvégia néhány legikonikusabb természeti látnivalójához, köztük a Lysefjordhoz és a híres Preikestolen (Szószék-szikla) sziklához. A város élénk kulturális élettel és erős gasztronómiával büszkélkedhet.",
      ro: "Stavanger este un oraș de pe coasta de sud-vest a Norvegiei, cunoscut drept capitala petrolului a țării. Are un oraș vechi fermecător (Gamle Stavanger) cu case albe din lemn din secolul al XVIII-lea bine conservate. Stavanger este, de asemenea, poarta de intrare către unele dintre cele mai emblematice repere naturale ale Norvegiei, inclusiv Lysefjord și celebra stâncă Preikestolen (Amvonul). Orașul are o viață culturală vibrantă și o scenă culinară puternică."
    },
    facts: {
      en: ["Stavanger is the center of the Norwegian oil industry.","The Norwegian Petroleum Museum is located in the city's harbour.","Preikestolen is a massive cliff 604 meters above the Lysefjord.","The city was a European Capital of Culture in 2008."],
      de: ["Stavanger ist das Zentrum der norwegischen Ölindustrie.","Das Norwegische Erdölmuseum befindet sich im Hafen der Stadt.","Preikestolen ist eine gewaltige Klippe 604 Meter über dem Lysefjord.","Die Stadt war 2008 Kulturhauptstadt Europas."],
      hu: ["Stavanger a norvég olajipar központja.","A Norvég Olajmúzeum a város kikötőjében található.","A Preikestolen egy hatalmas szikla 604 méterrel a Lysefjord felett.","A város 2008-ban Európa Kulturális Fővárosa volt."],
      ro: ["Stavanger este centrul industriei petroliere norvegiene.","Muzeul Petrolului din Norvegia este situat în portul orașului.","Preikestolen este o stâncă masivă la 604 metri deasupra Lysefjordului.","Orașul a fost Capitală Europeană a Culturii în 2008."]
    },
    image: "/geo-images/norway/stavanger.webp",
  },
  {
    id: "reg-lapland-no",
    type: "region",
    parent: "norway",
    coords: [18.9553, 69.6492],
    name: { de: "Norwegisch-Lappland", hu: "Norvég Lappföld", ro: "Laponia Norvegiană", en: "Norwegian Lapland" },
    description: {
      en: "Norwegian Lapland, also known as Finnmark, is a vast and wild region in the far north of Norway. It is the land of the indigenous Sámi people and offers dramatic Arctic landscapes, from rugged coastlines to vast mountain plateaus. The region is famous for the Northern Lights in winter and the Midnight Sun in summer. Tromsø, the 'Paris of the North', is the largest city in the region and a major hub for Arctic exploration and culture.",
      de: "Norwegisch-Lappland, auch bekannt als Finnmark, ist eine weite und wilde Region im hohen Norden Norwegens. Es ist das Land des indigenen Volkes der Samen und bietet dramatische arktische Landschaften, von schroffen Küsten bis hin zu weiten Hochebenen. Die Region ist berühmt für die Polarlichter im Winter und die Mitternachtssonne im Sommer. Tromsø, das 'Paris des Nordens', ist die größte Stadt der Region und ein bedeutendes Zentrum für Arktisforschung und Kultur.",
      hu: "A norvég Lappföld, más néven Finnmark, egy hatalmas és vad régió Norvégia távoli északi részén. Ez az őshonos számi nép földje, amely drámai sarkvidéki tájakat kínál, a zord tengerpartoktól a hatalmas hegyi fennsíkokig. A régió híres a téli északi fényről és a nyári éjféli napról. Tromsø, az 'Észak Párizsa', a régió legnagyobb városa, az arktiszi kutatás és kultúra jelentős központja.",
      ro: "Laponia Norvegiană, cunoscută și sub numele de Finnmark, este o regiune vastă și sălbatică din nordul îndepărtat al Norvegiei. Este țara poporului indigen Sámi și oferă peisaje arctice dramatice, de la coaste accidentate la platouri montane vaste. Regiunea este faimoasă pentru Aurora Boreală iarna și Soarele de la Miezul Nopții vara. Tromsø, 'Parisul Nordului', este cel mai mare oraș din regiune și un centru major pentru explorarea și cultura arctică."
    },
    facts: {
      en: ["Tromsø is located 350 kilometers north of the Arctic Circle.","The North Cape (Nordkapp) is often considered the northernmost point of Europe.","The region is home to the Sámi Parliament of Norway in Karasjok.","Tromsø hosts the world's northernmost university and cathedral."],
      de: ["Tromsø liegt 350 Kilometer nördlich des Polarkreises.","Das Nordkap (Nordkapp) wird oft als der nördlichste Punkt Europas betrachtet.","In der Region befindet sich das Parlament der Samen von Norwegen in Karasjok.","Tromsø beherbergt die nördlichste Universität und Kathedrale der Welt."],
      hu: ["Tromsø 350 kilométerre északra fekszik az északi sarkkörtől.","Az Északi-fokot (Nordkapp) gyakran Európa legészakibb pontjának tekintik.","A régióban található a norvégiai számi parlament Karasjokban.","Tromsø-ban található a világ legészakibb egyeteme és katedrálisa."],
      ro: ["Tromsø este situat la 350 de kilometri nord de Cercul Polar.","Capul Nord (Nordkapp) este adesea considerat cel mai nordic punct al Europei.","Regiunea găzduiește Parlamentul Sámi din Norvegia în Karasjok.","Tromsø găzduiește cea mai nordică universitate și catedrală din lume."]
    },
    image: "/geo-images/norway/lapland-no.webp",
  }
];

export const norwayNature: POI[] = [
  {
    id: "nat-fjords",
    type: "landmark",
    parent: "norway",
    coords: [7.0000, 62.0000],
    name: { de: "Norwegische Fjorde", hu: "Norvég fjordok", ro: "Fjordurile Norvegiene", en: "Norwegian Fjords" },
    description: {
      en: "The Norwegian fjords are world-famous for their breathtaking beauty, characterized by deep blue waters surrounded by steep, snow-capped mountains and cascading waterfalls. The Geirangerfjord and Nærøyfjord are UNESCO World Heritage sites and are considered among the most beautiful landscapes on Earth. These fjords were formed by glaciers during the last ice age and offer spectacular opportunities for cruising, hiking, and kayaking.",
      de: "Die norwegischen Fjorde sind weltberühmt für ihre atemberaubende Schönheit, geprägt von tiefblauem Wasser, umgeben von steilen, schneebedeckten Bergen und kaskadierenden Wasserfällen. Der Geirangerfjord und der Nærøyfjord gehören zum UNESCO-Weltnaturerbe und gelten als eine der schönsten Landschaften der Erde. Diese Fjorde wurden während der letzten Eiszeit von Gletschern geformt und bieten spektakuläre Möglichkeiten zum Kreuzfahren, Wandern und Kajakfahren.",
      hu: "A norvég fjordok világhírűek lélegzetelállító szépségükről, amelyet a meredek, hófödte hegyekkel és lezúduló vízesésekkel körülvett mélykék víz jellemez. A Geiranger-fjord és a Nærøy-fjord az UNESCO Világörökség részei, és a Föld legszebb tájai közé tartoznak. Ezeket a fjordokat gleccserek alakították ki az utolsó jégkorszakban, és látványos lehetőségeket kínálnak hajózásra, túrázásra és kajakozásra.",
      ro: "Fjordurile norvegiene sunt faimoase în întreaga lume pentru frumusețea lor uluitoare, caracterizată prin ape albastre adânci înconjurate de munți abrupți, acoperiți de zăpadă și cascade spectaculoase. Geirangerfjord și Nærøyfjord sunt situri ale Patrimoniului Mondial UNESCO și sunt considerate printre cele mai frumoase peisaje de pe Pământ. Aceste fjorduri au fost formate de ghețari în timpul ultimei ere glaciare și oferă oportunități spectaculoase pentru croaziere, drumeții și caiac."
    },
    facts: {
      en: ["The Sognefjord is the longest and deepest fjord in Norway.","Fjord is a Norwegian word that has become international.","Many fjords have small farms perched on steep mountain ledges.","The fjords are home to diverse marine life, including seals and porpoises."],
      de: ["Der Sognefjord ist der längste und tiefste Fjord Norwegens.","Fjord ist ein norwegisches Wort, das international bekannt geworden ist.","An vielen Fjorden gibt es kleine Bauernhöfe auf steilen Bergvorsprüngen.","Die Fjorde beherbergen eine vielfältige Meeresfauna, darunter Robben und Schweinswale."],
      hu: ["A Sogne-fjord Norvégia leghosszabb és legmélyebb fjordja.","A fjord egy norvég szó, amely nemzetközivé vált.","Sok fjord mentén kis gazdaságok bújnak meg a meredek hegyi párkányokon.","A fjordok változatos tengeri élővilágnak adnak otthont, beleértve a fókákat és a barna delfineket."],
      ro: ["Sognefjord este cel mai lung și mai adânc fjord din Norvegia.","Fjord este un cuvânt norvegian care a devenit internațional.","Multe fjorduri au ferme mici cocoțate pe margini abrupte de munte.","Fjordurile găzduiesc o viață marină diversă, inclusiv foci și marsuini."]
    },
    image: "/geo-images/norway/fjords.webp",
  },
  {
    id: "nat-lofoten",
    type: "landmark",
    parent: "norway",
    coords: [13.5000, 68.0000],
    name: { de: "Lofoten-Inseln", hu: "Lofoten-szigetek", ro: "Insulele Lofoten", en: "Lofoten Islands" },
    description: {
      en: "The Lofoten Islands are an archipelago in northern Norway, known for their dramatic scenery with jagged mountain peaks, sheltered bays, and untouched beaches. The islands are famous for their traditional fishing villages with red wooden cabins (rorbuer) and their long history of cod fishing. Lofoten offers incredible opportunities for outdoor activities such as hiking, surfing, and viewing the Northern Lights or the Midnight Sun.",
      de: "Die Lofoten-Inseln sind ein Archipel im Norden Norwegens, bekannt für ihre dramatische Landschaft mit zerklüfteten Berggipfeln, geschützten Buchten und unberührten Stränden. Die Inseln sind berühmt für ihre traditionellen Fischerdörfer mit roten Holzhütten (Rorbuer) und ihre lange Geschichte des Kabeljaufangs. Die Lofoten bieten unglaubliche Möglichkeiten für Outdoor-Aktivitäten wie Wandern, Surfen und die Beobachtung der Polarlichter oder der Mitternachtssonne.",
      hu: "A Lofoten-szigetek egy szigetcsoport Észak-Norvégiában, amely drámai tájairól, csipkés hegycsúcsairól, védett öbleiről és érintetlen strandjairól ismert. A szigetek híresek hagyományos halászfalvaikról, piros faházaikról (rorbuer) és a tőkehalhalászat hosszú múltjáról. Lofoten hihetetlen lehetőségeket kínál szabadtéri tevékenységekhez, mint például túrázás, szörfözés, valamint az északi fény vagy az éjféli nap megfigyelése.",
      ro: "Insulele Lofoten sunt un arhipelag din nordul Norvegiei, cunoscut pentru peisajele sale dramatice cu vârfuri muntoase zimțate, golfuri adăpostite și plaje virgine. Insulele sunt faimoase pentru satele lor tradiționale de pescari cu cabane roșii din lemn (rorbuer) și istoria lor lungă în pescuitul de cod. Lofoten oferă oportunități incredibile pentru activități în aer liber, cum ar fi drumeții, surfing și vizionarea Aurorei Boreale sau a Soarelui de la Miezul Nopții."
    },
    facts: {
      en: ["The Lofoten archipelago is located within the Arctic Circle.","The islands have a surprisingly mild climate due to the Gulf Stream.","Stockfish (dried cod) has been exported from Lofoten for over 1,000 years.","The Maelstrom, a powerful system of tidal eddies, is located near the islands."],
      de: ["Der Lofoten-Archipel liegt innerhalb des Polarkreises.","Die Inseln haben aufgrund des Golfstroms ein überraschend mildes Klima.","Stockfisch (getrockneter Kabeljau) wird seit über 1.000 Jahren von den Lofoten exportiert.","Der Mahlstrom, ein gewaltiges System von Gezeitenwirbeln, befindet sich in der Nähe der Inseln."],
      hu: ["A Lofoten-szigetcsoport az északi sarkkörön belül található.","A szigetek éghajlata a Golf-áramlatnak köszönhetően meglepően enyhe.","A szárított tőkehalat (stockfish) már több mint 1000 éve exportálják Lofotenről.","A Maelström, egy hatalmas árapály-örvény rendszer, a szigetek közelében található."],
      ro: ["Arhipelagul Lofoten este situat în interiorul Cercului Polar.","Insulele au un climat surprinzător de blând datorită Curentului Golfului.","Peștele uscat (cod uscat) este exportat din Lofoten de peste 1.000 de ani.","Maelstrom, un sistem puternic de vârtejuri de maree, este situat lângă insule."]
    },
    image: "/geo-images/norway/lofoten.webp",
  },
  {
    id: "nat-geirangerfjord",
    type: "landmark",
    parent: "norway",
    coords: [7.1050, 62.1047],
    name: { de: "Geirangerfjord", hu: "Geirangerfjord", ro: "Geirangerfjord", en: "Geirangerfjord" },
    description: {
      en: "Geirangerfjord is one of Norway's most iconic fjords and a UNESCO World Heritage site, famous for its steep cliffs and dramatic waterfalls.",
      de: "Der Geirangerfjord ist einer der bekanntesten Fjorde Norwegens und UNESCO-Welterbe, berühmt für steile Hänge und spektakuläre Wasserfälle.",
      hu: "A Geirangerfjord Norvégia egyik legikonikusabb fjordja és UNESCO Világörökség, meredek sziklafalaival és látványos vízeséseivel híres.",
      ro: "Geirangerfjord este unul dintre cele mai emblematice fjorduri ale Norvegiei și sit UNESCO, celebru pentru pereții abrupți și cascadele spectaculoase."
    },
    facts: {
      en: ["It is listed as a UNESCO World Heritage site.", "The Seven Sisters waterfall is one of its best-known sights.", "It is a major highlight of Norwegian fjord cruises.", "The fjord was carved by glaciers during the ice age."],
      de: ["Er ist als UNESCO-Welterbe eingetragen.", "Der Wasserfall Sieben Schwestern ist eine seiner bekanntesten Sehenswürdigkeiten.", "Er ist ein Höhepunkt vieler Fjordkreuzfahrten in Norwegen.", "Der Fjord wurde während der Eiszeit von Gletschern geformt.",],
      hu: ["UNESCO Világörökségi helyszín.", "A Hét nővér vízesés a legismertebb látványosságai közé tartozik.", "A norvég fjordhajózások egyik csúcspontja.", "A fjordot a jégkorszak gleccserei vájták ki."],
      ro: ["Este inclus în Patrimoniul Mondial UNESCO.", "Cascada Șapte Surori este una dintre cele mai cunoscute atracții.", "Este un punct de atracție major pe croazierele din fjordurile norvegiene.", "Fjordul a fost modelat de ghețari în era glaciară."]
    },
    image: "/geo-images/norway/geirangerfjord.webp",
  },
  {
    id: "nat-sognefjord",
    type: "landmark",
    parent: "norway",
    coords: [6.5000, 61.1000],
    name: { de: "Sognefjord", hu: "Sognefjord", ro: "Sognefjord", en: "Sognefjord" },
    description: {
      en: "Sognefjord is the longest fjord in Norway and one of the deepest in the world, stretching far inland through dramatic mountain scenery.",
      de: "Der Sognefjord ist der längste Fjord Norwegens und einer der tiefsten der Welt, der sich weit ins Landesinnere durch dramatische Berglandschaften zieht.",
      hu: "A Sognefjord Norvégia leghosszabb fjordja és a világ egyik legmélyebb fjordja, amely lenyűgöző hegyvidéki tájak között húzódik.",
      ro: "Sognefjord este cel mai lung fjord din Norvegia și unul dintre cele mai adânci din lume, întinzându-se adânc în interiorul țării printre peisaje montane dramatice."
    },
    facts: {
      en: ["It reaches deep into western Norway.", "Its total length is about 204 kilometers.", "It is a classic example of glacial landscape formation.", "Many small villages and farms line its shores."],
      de: ["Er reicht tief in Westnorwegen hinein.", "Seine Gesamtlänge beträgt etwa 204 Kilometer.", "Er ist ein klassisches Beispiel für eine von Gletschern geprägte Landschaft.", "Entlang seiner Ufer liegen viele kleine Dörfer und Höfe."],
      hu: ["Messze benyúlik Nyugat-Norvégiába.", "Teljes hossza körülbelül 204 kilométer.", "Klasszikus példája a gleccserek formálta tájnak.", "Partjain sok apró falu és gazdaság található."],
      ro: ["Se întinde adânc în vestul Norvegiei.", "Are o lungime totală de aproximativ 204 kilometri.", "Este un exemplu clasic de peisaj modelat de ghețari.", "Pe țărmurile sale se află multe sate și ferme mici."]
    },
    image: "/geo-images/norway/sognefjord.webp",
  },
  {
    id: "nat-preikestolen",
    type: "landmark",
    parent: "norway",
    coords: [6.1901, 58.9864],
    name: { de: "Preikestolen", hu: "Preikestolen", ro: "Preikestolen", en: "Preikestolen" },
    description: {
      en: "Preikestolen, also known as Pulpit Rock, is a famous cliff rising above the Lysefjord and one of Norway's most photographed natural landmarks.",
      de: "Der Preikestolen, auch Kanzelfelsen genannt, ist eine berühmte Klippe über dem Lysefjord und eines der meistfotografierten Naturwahrzeichen Norwegens.",
      hu: "A Preikestolen, más néven Szószék-szikla, a Lysefjord fölé magasodó híres szikla és Norvégia egyik legtöbbet fotózott természeti látványossága.",
      ro: "Preikestolen, cunoscut și ca Pulpit Rock, este o stâncă celebră care se ridică deasupra Lysefjordului și unul dintre cele mai fotografiate repere naturale ale Norvegiei."
    },
    facts: {
      en: ["It rises about 604 meters above the fjord.", "The viewpoint is reached by a popular hiking trail.", "It is near Stavanger in southwestern Norway.", "The cliff has a flat, square-shaped summit."],
      de: ["Er ragt etwa 604 Meter über den Fjord hinaus.", "Der Aussichtspunkt ist über einen beliebten Wanderweg erreichbar.", "Er liegt nahe Stavanger im Südwesten Norwegens.", "Die Klippe hat eine flache, fast quadratische Gipfelfläche."],
      hu: ["Körülbelül 604 méterrel emelkedik a fjord fölé.", "A kilátóhely egy népszerű túraútvonalon érhető el.", "Stavanger közelében, Norvégia délnyugati részén található.", "A szikla teteje lapos, majdnem négyzet alakú."],
      ro: ["Se ridică la aproximativ 604 metri deasupra fjordului.", "Punctul de belvedere se atinge pe un traseu popular de drumeție.", "Se află aproape de Stavanger, în sud-vestul Norvegiei.", "Vârful stâncii are o formă plată, aproape pătrată."]
    },
    image: "/geo-images/norway/preikestolen.webp",
  },
  {
    id: "nat-north-cape",
    type: "landmark",
    parent: "norway",
    coords: [25.7833, 71.1725],
    name: { de: "Nordkap", hu: "Nordkapp (Északi-fok)", ro: "Capul Nord", en: "North Cape" },
    description: {
      en: "North Cape is the famous northern landmark of mainland Europe, standing high above the Barents Sea and drawing visitors for its Arctic horizon.",
      de: "Das Nordkap ist das berühmte nördliche Wahrzeichen des europäischen Festlands, hoch über der Barentssee gelegen und wegen seines arktischen Horizonts beliebt.",
      hu: "A Nordkapp az európai szárazföld híres északi jelképe, amely magasan a Barents-tenger fölött áll és sarkvidéki látképével vonz.",
      ro: "Capul Nord este celebrul reper nordic al Europei continentale, aflat deasupra Mării Barents și apreciat pentru orizontul său arctic."
    },
    facts: {
      en: ["It is often called the northernmost point of Europe.", "The site is a major Arctic tourism destination.", "It sits on the island of Magerøya.", "The midnight sun can be seen here in summer."],
      de: ["Es wird oft als der nördlichste Punkt Europas bezeichnet.", "Der Ort ist ein wichtiges arktisches Reiseziel.", "Er liegt auf der Insel Magerøya.", "Im Sommer ist hier die Mitternachtssonne zu sehen."],
      hu: ["Gyakran Európa legészakibb pontjaként emlegetik.", "A helyszín fontos sarkvidéki turisztikai célpont.", "A Magerøya-szigeten található.", "Nyáron itt látható az éjféli nap."],
      ro: ["Este adesea numit cel mai nordic punct al Europei.", "Locul este o destinație turistică arctică importantă.", "Se află pe insula Magerøya.", "Vara poate fi observat soarele de la miezul nopții."]
    },
    image: "/geo-images/norway/north-cape.webp",
  },
  {
    id: "mountain-galdhopiggen",
    type: "mountain",
    parent: "norway",
    coords: [8.3120, 61.6360],
    name: { de: "Galdhøpiggen", hu: "Galdhøpiggen", ro: "Galdhøpiggen", en: "Galdhøpiggen" },
    description: {
      en: "Galdhøpiggen is the highest mountain in Norway and the entire Nordic region. It rises above Jotunheimen and offers classic alpine scenery with glaciers, ridges, and wide views. Hikers come here for a true Norwegian mountain experience and strong outdoor branding. It is one of the most powerful mountain keywords for Norway travel and nature searches.",
      de: "Der Galdhøpiggen ist der höchste Berg Norwegens und der gesamten nordischen Region. Er ragt über dem Jotunheimen-Gebirge auf und bietet klassische alpine Landschaften mit Gletschern, Graten und weiten Ausblicken. Wanderer kommen hierher für ein echtes norwegisches Bergerlebnis und ein starkes Outdoor-Profil. Er ist eines der stärksten Berg-Schlüsselwörter für Norwegenreisen und Natursuchen.",
      hu: "A Galdhøpiggen Norvégia és az egész északi térség legmagasabb hegye. A Jotunheimen fölé magasodik, és klasszikus alpesi tájat kínál gleccserekkel, gerincekkel és széles panorámával. A túrázók valódi norvég hegyi élményért és erős szabadtéri arculatért érkeznek ide. Az egyik legerősebb hegyi kulcsszó Norvégia-utazáshoz és természetes keresésekhez.",
      ro: "Galdhøpiggen este cel mai înalt munte din Norvegia și din întreaga regiune nordică. Se ridică deasupra masivului Jotunheimen și oferă peisaje alpine clasice cu ghețari, creste și panorame largi. Drumeții vin aici pentru o experiență montană norvegiană autentică și un branding outdoor puternic. Este unul dintre cele mai puternice cuvinte-cheie montane pentru călătoriile și căutările despre natură din Norvegia."
    },
    facts: {
      en: ["Highest peak in Norway and the Nordic region.", "Part of the Jotunheimen mountain area.", "Popular with hikers and mountaineers.", "Often combined with glacier scenery.", "A classic symbol of Norwegian mountains."],
      de: ["Höchster Gipfel Norwegens und der nordischen Region.", "Teil des Jotunheimen-Gebiets.", "Beliebt bei Wanderern und Bergsteigern.", "Oft mit Gletscherlandschaften verbunden.", "Ein klassisches Symbol der norwegischen Berge."],
      hu: ["Norvégia és a nordikus térség legmagasabb csúcsa.", "A Jotunheimen hegység része.", "Népszerű túrázók és hegymászók körében.", "Gyakran gleccseres tájjal együtt emlegetik.", "A norvég hegyek klasszikus jelképe."],
      ro: ["Cel mai înalt vârf din Norvegia și din regiunea nordică.", "Parte a zonei montane Jotunheimen.", "Popular printre drumeți și alpiniști.", "Adesea asociat cu peisaje glaciare.", "Un simbol clasic al munților norvegieni."]
    },
    image: "/geo-images/norway/galdhopiggen.webp",
  },
  {
    id: "mountain-glittertind",
    type: "mountain",
    parent: "norway",
    coords: [8.5650, 61.6720],
    name: { de: "Glittertind", hu: "Glittertind", ro: "Glittertind", en: "Glittertind" },
    description: {
      en: "Glittertind is one of Norway's best-known peaks and a dramatic neighbor to Galdhøpiggen in Jotunheimen. Its snowy summit and glacier-covered slopes make it a strong symbol of high mountain Norway. The mountain is popular with serious hikers and travelers seeking alpine scenery and big panorama views. Glittertind is a powerful SEO destination for mountain, glacier, and wilderness content.",
      de: "Der Glittertind ist einer der bekanntesten Berge Norwegens und ein dramatischer Nachbar des Galdhøpiggen in Jotunheimen. Sein schneebedeckter Gipfel und die gletscherbedeckten Hänge machen ihn zu einem starken Symbol für das Hochgebirgsnorwegen. Der Berg ist bei erfahrenen Wanderern und Reisenden beliebt, die alpine Landschaften und große Panoramablicke suchen. Glittertind ist ein starkes SEO-Ziel für Inhalte über Berge, Gletscher und Wildnis.",
      hu: "A Glittertind Norvégia egyik legismertebb csúcsa és a Galdhøpiggen látványos szomszédja Jotunheimenben. Havas csúcsa és gleccserekkel borított lejtői erős szimbólumai a magashegyi Norvégiának. A hegy népszerű a tapasztalt túrázók és az alpesi tájakat kereső utazók körében. A Glittertind erős SEO-célpont hegy, gleccser és vadon témákhoz.",
      ro: "Glittertind este unul dintre cele mai cunoscute vârfuri ale Norvegiei și un vecin dramatic al lui Galdhøpiggen în Jotunheimen. Vârful său înzăpezit și pantele acoperite de ghețar îl fac un simbol puternic al Norvegiei montane înalte. Muntele este popular printre drumeții experimentați și călătorii care caută peisaje alpine și panorame largi. Glittertind este o destinație SEO puternică pentru conținut despre munți, ghețari și sălbăticie."
    },
    facts: {
      en: ["One of the highest mountains in Norway.", "Known for its glacier and snowy summit.", "Located in the Jotunheimen area.", "Popular among experienced hikers.", "Often compared with Galdhøpiggen."],
      de: ["Einer der höchsten Berge Norwegens.", "Bekannt für Gletscher und schneebedeckten Gipfel.", "Im Jotunheimen-Gebiet gelegen.", "Beliebt bei erfahrenen Wanderern.", "Wird oft mit dem Galdhøpiggen verglichen."],
      hu: ["Norvégia egyik legmagasabb hegye.", "Gleccseréről és havas csúcsáról ismert.", "A Jotunheimen területén található.", "Népszerű a tapasztalt túrázók körében.", "Gyakran hasonlítják a Galdhøpiggenhez."],
      ro: ["Unul dintre cei mai înalți munți din Norvegia.", "Cunoscut pentru ghețarul și vârful său înzăpezit.", "Situat în zona Jotunheimen.", "Popular printre drumeții experimentați.", "Adesea comparat cu Galdhøpiggen."]
    },
    image: "/geo-images/norway/glittertind.webp",
  },
  {
    id: "lake-mjosa",
    type: "lake",
    parent: "norway",
    coords: [10.7670, 60.8000],
    name: { de: "Mjøsa", hu: "Mjøsa", ro: "Mjøsa", en: "Lake Mjøsa" },
    description: {
      en: "Lake Mjøsa is Norway's largest lake and a central freshwater landscape in eastern Norway. It links several historic towns and supports transport, recreation, and local food culture. The lake is especially important for boating, fishing, and scenic lakeside travel. Mjøsa is a strong keyword for Norwegian lakes, inland tourism, and relaxed nature trips.",
      de: "Der Mjøsa-See ist Norwegens größter See und eine zentrale Süßwasserlandschaft in Ostnorwegen. Er verbindet mehrere historische Städte und unterstützt Verkehr, Erholung und lokale Esskultur. Der See ist besonders wichtig für Bootfahren, Angeln und landschaftlich schöne Reisen am Ufer. Mjøsa ist ein starkes Schlüsselwort für norwegische Seen, Inlandstourismus und entspannte Naturreisen.",
      hu: "A Mjøsa Norvégia legnagyobb tava és Kelet-Norvégia központi édesvízi tája. Több történelmi várost köt össze, és fontos a közlekedés, a kikapcsolódás és a helyi élelmiszerkultúra szempontjából. A tó különösen fontos a csónakázás, a horgászat és a festői tóparti utazás miatt. A Mjøsa erős kulcsszó norvég tavakhoz, belföldi turizmushoz és nyugodt természetjáráshoz.",
      ro: "Lacul Mjøsa este cel mai mare lac din Norvegia și un peisaj de apă dulce central în estul țării. Leagă mai multe orașe istorice și susține transportul, recreerea și cultura alimentară locală. Lacul este deosebit de important pentru plimbări cu barca, pescuit și călătorii pitorești pe mal. Mjøsa este un cuvânt-cheie puternic pentru lacurile norvegiene, turismul interior și excursiile relaxate în natură."
    },
    facts: {
      en: ["The largest lake in Norway.", "Used for boating and fishing.", "Borders several important inland towns.", "A classic freshwater landscape of eastern Norway.", "Popular for scenic lakeside holidays."],
      de: ["Der größte See Norwegens.", "Wird für Bootfahren und Angeln genutzt.", "Grenzt an mehrere wichtige Binnenstädte.", "Klassische Süßwasserlandschaft Ostnorwegens.", "Beliebt für landschaftliche Urlaube am Seeufer."],
      hu: ["Norvégia legnagyobb tava.", "Csónakázásra és horgászatra is használják.", "Több fontos belföldi város partján fekszik.", "Kelet-Norvégia klasszikus édesvízi tája.", "Népszerű a festői tóparti nyaralásokhoz."],
      ro: ["Cel mai mare lac din Norvegia.", "Folosit pentru plimbări cu barca și pescuit.", "Mărginește mai multe orașe importante din interior.", "Un peisaj clasic de apă dulce din estul Norvegiei.", "Popular pentru vacanțe pitorești pe malul lacului."]
    },
    image: "/geo-images/norway/lake-mjosa.webp",
  },
  {
    id: "river-glomma",
    type: "river",
    parent: "norway",
    coords: [11.4000, 60.6500],
    name: { de: "Glomma", hu: "Glomma", ro: "Glomma", en: "Glomma River" },
    description: {
      en: "The Glomma is Norway's longest river and one of the most important waterways in the country. It flows through forests, farmland, and towns before reaching the Oslofjord region. The river has powered industry, transport, and local life for generations. Glomma is a strong SEO keyword for Norwegian rivers, inland travel, and regional geography.",
      de: "Die Glomma ist Norwegens längster Fluss und einer der wichtigsten Wasserwege des Landes. Sie fließt durch Wälder, Agrarland und Städte, bevor sie die Oslofjord-Region erreicht. Der Fluss hat Generationen lang Industrie, Verkehr und lokales Leben angetrieben. Glomma ist ein starkes SEO-Schlüsselwort für norwegische Flüsse, Binnenreisen und regionale Geografie.",
      hu: "A Glomma Norvégia leghosszabb folyója és az ország egyik legfontosabb vízi útja. Erdőkön, mezőgazdasági területeken és városokon keresztül folyik, mielőtt eléri az Oslofjord térségét. A folyó generációkon át hajtott ipart, közlekedést és helyi életet. A Glomma erős SEO-kulcsszó norvég folyókhoz, belföldi utazásokhoz és regionális földrajzhoz.",
      ro: "Glomma este cel mai lung râu din Norvegia și una dintre cele mai importante căi navigabile ale țării. Curge prin păduri, terenuri agricole și orașe înainte de a ajunge în regiunea Oslofjord. Râul a susținut industria, transportul și viața locală timp de generații. Glomma este un cuvânt-cheie SEO puternic pentru râurile norvegiene, călătoriile în interior și geografia regională."
    },
    facts: {
      en: ["Norway's longest river.", "Flows through eastern Norway.", "Important for hydropower and transport.", "Passes by forests and farmland.", "Ends near the Oslofjord region."],
      de: ["Längster Fluss Norwegens.", "Fließt durch Ostnorwegen.", "Wichtig für Wasserkraft und Verkehr.", "Verläuft durch Wälder und Agrarland.", "Mündet nahe der Oslofjord-Region."],
      hu: ["Norvégia leghosszabb folyója.", "Kelet-Norvégián folyik át.", "Fontos a vízenergiában és a közlekedésben.", "Erdők és mezőgazdasági területek mellett halad.", "Az Oslofjord térségéhez közel ér véget."],
      ro: ["Cel mai lung râu din Norvegia.", "Curge prin estul Norvegiei.", "Important pentru hidroenergie și transport.", "Trece pe lângă păduri și terenuri agricole.", "Se termină în apropierea regiunii Oslofjord."]
    },
    image: "/geo-images/norway/river-glomma.webp",
  },
  {
    id: "island-hinnoya",
    type: "island",
    parent: "norway",
    coords: [15.0000, 68.8000],
    name: { de: "Hinnøya", hu: "Hinnøya", ro: "Hinnøya", en: "Hinnøya" },
    description: {
      en: "Hinnøya is Norway's largest island outside the Svalbard area and a major northern landscape feature. It combines coastal settlements, mountains, and bridges in a very Norwegian way. The island is important for travel between Lofoten, Vesterålen, and the mainland. Hinnøya is a strong SEO keyword for islands, northern routes, and Arctic scenery.",
      de: "Hinnøya ist Norwegens größte Insel außerhalb des Svalbard-Gebiets und ein bedeutendes Landschaftselement im Norden. Sie verbindet auf typisch norwegische Weise Küstensiedlungen, Berge und Brücken. Die Insel ist wichtig für Reisen zwischen den Lofoten, Vesterålen und dem Festland. Hinnøya ist ein starkes SEO-Schlüsselwort für Inseln, Nordrouten und arktische Landschaften.",
      hu: "Hinnøya Norvégia legnagyobb szigete a Svalbard területén kívül, és fontos északi tájelem. Tipikusan norvég módon köti össze a tengerparti településeket, hegyeket és hidakat. A sziget fontos az utazásban a Lofoten, Vesterålen és a szárazföld között. Hinnøya erős SEO-kulcsszó szigetekhez, északi útvonalakhoz és arktiszi tájakhoz.",
      ro: "Hinnøya este cea mai mare insulă a Norvegiei în afara zonei Svalbard și un element major al peisajului nordic. Ea combină așezări de coastă, munți și poduri într-un mod foarte norvegian. Insula este importantă pentru călătoriile între Lofoten, Vesterålen și continent. Hinnøya este un cuvânt-cheie SEO puternic pentru insule, rute nordice și peisaje arctice."
    },
    facts: {
      en: ["Largest island in mainland Norway.", "Connected by bridges and ferry routes.", "Important in northern coastal travel.", "Includes both mountains and settlements.", "A major island geography keyword for Norway."],
      de: ["Größte Insel des norwegischen Festlands.", "Über Brücken und Fährverbindungen erreichbar.", "Wichtig für nordische Küstenreisen.", "Umfasst sowohl Berge als auch Siedlungen.", "Ein wichtiges Insel-Schlüsselwort für Norwegen."],
      hu: ["A szárazföldi Norvégia legnagyobb szigete.", "Hidakkal és kompútvonalakkal kapcsolódik.", "Fontos az északi part menti utazásban.", "Hegyeket és településeket is magában foglal.", "Kiemelt szigetföldrajzi kulcsszó Norvégiához."],
      ro: ["Cea mai mare insulă a Norvegiei continentale.", "Conectată prin poduri și rute de feribot.", "Importantă în călătoriile de coastă din nord.", "Include atât munți, cât și așezări.", "Un cuvânt-cheie major pentru geografia insulelor din Norvegia."]
    },
    image: "/geo-images/norway/hinnoya.webp",
  },
  {
    id: "island-senja",
    type: "island",
    parent: "norway",
    coords: [17.6000, 69.2000],
    name: { de: "Senja", hu: "Senja", ro: "Senja", en: "Senja" },
    description: {
      en: "Senja is often called a miniature version of Norway because it packs fjords, peaks, beaches, and fishing villages into one island. The scenery changes quickly, which makes it especially attractive for road trips and outdoor photography. It is one of the most talked-about Arctic islands in Norway travel content. Senja works very well for SEO around islands, viewpoints, and northern landscapes.",
      de: "Senja wird oft als Miniatur-Norwegen bezeichnet, weil es Fjorde, Gipfel, Strände und Fischerdörfer auf einer Insel vereint. Die Landschaft wechselt schnell, was sie besonders attraktiv für Roadtrips und Outdoor-Fotografie macht. Sie gehört zu den meistdiskutierten arktischen Inseln in norwegischen Reiseinhalten. Senja funktioniert sehr gut für SEO rund um Inseln, Aussichtspunkte und nördliche Landschaften.",
      hu: "Senját gyakran Norvégia kicsinyített másának nevezik, mert fjordokat, csúcsokat, strandokat és halászfalvakat sűrít egy szigetre. A táj gyorsan változik, ezért különösen vonzó road tripekhez és szabadtéri fotózáshoz. Norvégia egyik legtöbbet emlegetett arktiszi szigete az utazási tartalmakban. Senja nagyon jól működik szigetekhez, kilátópontokhoz és északi tájakhoz kapcsolódó SEO-ban.",
      ro: "Senja este adesea numită o versiune miniaturală a Norvegiei, deoarece reunește fjorduri, vârfuri, plaje și sate de pescari pe o singură insulă. Peisajul se schimbă rapid, ceea ce o face deosebit de atractivă pentru road trip-uri și fotografie în aer liber. Este una dintre cele mai discutate insule arctice în conținutul de călătorie despre Norvegia. Senja funcționează foarte bine pentru SEO despre insule, puncte de belvedere și peisaje nordice."
    },
    facts: {
      en: ["Often described as a miniature Norway.", "Famous for fjords, peaks, and beaches.", "Popular for scenic drives and hikes.", "A major Arctic island tourism destination.", "Strong visual keyword for Norway travel."],
      de: ["Oft als Miniatur-Norwegen beschrieben.", "Berühmt für Fjorde, Gipfel und Strände.", "Beliebt für Panoramastraßen und Wanderungen.", "Wichtiges arktisches Reiseziel auf einer Insel.", "Starkes visuelles Schlüsselwort für Norwegenreisen."],
      hu: ["Gyakran Norvégia miniatűr változatának nevezik.", "Fjordjairól, csúcsairól és strandjairól híres.", "Népszerű panorámautakhoz és túrákhoz.", "Fontos arktiszi szigeti turisztikai célpont.", "Erős vizuális kulcsszó Norvégia-utazáshoz."],
      ro: ["Adesea descrisă ca o Norvegie în miniatură.", "Celebră pentru fjorduri, vârfuri și plaje.", "Populară pentru drumuri panoramice și drumeții.", "O destinație majoră de turism pe insulă arctică.", "Cuvânt-cheie vizual puternic pentru călătoriile în Norvegia."]
    },
    image: "/geo-images/norway/senja.webp",
  },
  {
    id: "forest-nordmarka",
    type: "forest",
    parent: "norway",
    coords: [10.7390, 60.0500],
    name: { de: "Nordmarka", hu: "Nordmarka", ro: "Nordmarka", en: "Nordmarka" },
    description: {
      en: "Nordmarka is Oslo's great forest region and a defining outdoor space for the capital. It offers trails, lakes, skiing, and quiet woodland just a short distance from the city center. The area is beloved by residents for everyday recreation and weekend nature escapes. Nordmarka is a powerful SEO topic for forests, city nature, and year-round outdoor life in Norway.",
      de: "Nordmarka ist Oslos großes Waldgebiet und ein prägender Outdoor-Raum für die Hauptstadt. Es bietet Wege, Seen, Skifahren und ruhigen Wald nur eine kurze Strecke vom Stadtzentrum entfernt. Die Gegend ist bei den Einwohnern für die alltägliche Erholung und Wochenend-Ausflüge in die Natur beliebt. Nordmarka ist ein starkes SEO-Thema für Wälder, Stadtnatur und ganzjähriges Outdoor-Leben in Norwegen.",
      hu: "Nordmarka Oslo nagy erdőterülete és a főváros meghatározó szabadtéri tere. Túraútvonalakat, tavakat, síelést és csendes erdőt kínál a belvárostól csak rövid távolságra. A helyiek kedvelt területe a mindennapi kikapcsolódásnak és a hétvégi természetes meneküléseknek. Nordmarka erős SEO-téma erdők, városi természet és egész éves szabadtéri élet témában Norvégiában.",
      ro: "Nordmarka este marele areal forestier al Oslo-ului și un spațiu outdoor definitoriu pentru capitală. Oferă trasee, lacuri, schi și pădure liniștită la o distanță scurtă de centrul orașului. Zona este iubită de locuitori pentru recreere de zi cu zi și escapade în natură de weekend. Nordmarka este un subiect SEO puternic pentru păduri, natură urbană și viață în aer liber pe tot parcursul anului în Norvegia."
    },
    facts: {
      en: ["The main forest area around Oslo.", "Used heavily for hiking and skiing.", "Contains many lakes and trails.", "A daily recreation zone for residents.", "Classic example of urban-accessible nature."],
      de: ["Das wichtigste Waldgebiet rund um Oslo.", "Wird stark zum Wandern und Skifahren genutzt.", "Enthält viele Seen und Wege.", "Ein tägliches Erholungsgebiet für Einwohner.", "Klassisches Beispiel für stadtnah zugängliche Natur."],
      hu: ["Oslo fő erdőövezete.", "Erősen használják túrázásra és síelésre.", "Sok tavat és ösvényt tartalmaz.", "Mindennapi kikapcsolódási zóna a lakóknak.", "Klasszikus példa a városközeli természetre."],
      ro: ["Principala zonă forestieră din jurul Oslo-ului.", "Folosită intens pentru drumeții și schi.", "Conține multe lacuri și trasee.", "O zonă de recreere zilnică pentru locuitori.", "Exemplu clasic de natură accesibilă din oraș."]
    },
    image: "/geo-images/norway/nordmarka.webp",
  },
  {
    id: "forest-finnskogen",
    type: "forest",
    parent: "norway",
    coords: [12.7000, 60.9000],
    name: { de: "Finnskogen", hu: "Finnskogen", ro: "Finnskogen", en: "Finnskogen Forest" },
    description: {
      en: "Finnskogen is a long forest region on the Norwegian-Swedish border with a strong cultural and natural identity. It is known for deep woodland, wildlife, and the history of the Forest Finns who settled there. The area feels remote and peaceful, making it attractive for hiking, cabins, and slow travel. Finnskogen is an excellent SEO keyword for forests, border landscapes, and quiet nature in Norway.",
      de: "Finnskogen ist eine lange Waldregion an der norwegisch-schwedischen Grenze mit starker kultureller und natürlicher Identität. Sie ist bekannt für tiefe Wälder, Wildtiere und die Geschichte der Waldfinnen, die sich dort niederließen. Die Gegend wirkt abgelegen und friedlich und ist daher attraktiv für Wandern, Hütten und langsames Reisen. Finnskogen ist ein hervorragendes SEO-Schlüsselwort für Wälder, Grenzlandschaften und ruhige Natur in Norwegen.",
      hu: "Finnskogen egy hosszú erdős régió a norvég-svéd határ mentén, erős kulturális és természeti identitással. Mély erdőségeiről, vadvilágáról és a települő erdei finnekről szóló történelméről ismert. A terület távoli és békés hangulatú, ezért vonzó túrázáshoz, faházakhoz és lassú utazáshoz. Finnskogen kiváló SEO-kulcsszó erdőkhez, határvidéki tájakhoz és csendes norvég természethez.",
      ro: "Finnskogen este o regiune forestieră lungă de-a lungul graniței norvegiano-suedeze, cu o identitate culturală și naturală puternică. Este cunoscută pentru pădurile dese, fauna sălbatică și istoria finlandezilor de pădure care s-au stabilit aici. Zona are un aer îndepărtat și liniștit, fiind atractivă pentru drumeții, cabane și călătorii lente. Finnskogen este un cuvânt-cheie SEO excelent pentru păduri, peisaje de frontieră și natură liniștită în Norvegia."
    },
    facts: {
      en: ["Border forest region between Norway and Sweden.", "Known for the Forest Finn heritage.", "Rich in wildlife and remote nature.", "Popular for cabins and hiking.", "A strong keyword for quiet wilderness travel."],
      de: ["Grenzwaldregion zwischen Norwegen und Schweden.", "Bekannt für das Erbe der Waldfinnen.", "Reich an Wildtieren und abgelegener Natur.", "Beliebt für Hütten und Wandern.", "Ein starkes Schlüsselwort für ruhige Wildnisreisen."],
      hu: ["Norvégia és Svédország közti határerdő.", "Az erdei finn örökségről ismert.", "Gazdag vadvilágban és távoli természetben.", "Népszerű faházakhoz és túrázáshoz.", "Erős kulcsszó a csendes vadon utazásához."],
      ro: ["Regiune forestieră de graniță între Norvegia și Suedia.", "Cunoscută pentru moștenirea finlandezilor de pădure.", "Bogată în faună și natură izolată.", "Populară pentru cabane și drumeții.", "Un cuvânt-cheie puternic pentru călătorii liniștite în sălbăticie."]
    },
    image: "/geo-images/norway/finnskogen.webp",
  }
];

export const norwayCities: POI[] = [
  {
    id: "city-tromso",
    type: "city",
    parent: "norway",
    coords: [18.9553, 69.6492],
    name: { de: "Tromsø", hu: "Tromsø", ro: "Tromsø", en: "Tromsø" },
    description: {
      en: "Tromsø is the Arctic city of northern Norway, known for the northern lights, polar research, and life above the Arctic Circle.",
      de: "Tromsø ist die arktische Stadt Nordnorwegens, bekannt für Nordlichter, Polarforschung und das Leben nördlich des Polarkreises.",
      hu: "Tromsø Észak-Norvégia sarkvidéki városa, amely az északi fényről, a poláris kutatásról és az északi sarkkörön túli életről ismert.",
      ro: "Tromsø este orașul arctic din nordul Norvegiei, cunoscut pentru aurora boreală, cercetarea polară și viața deasupra Cercului Polar."
    },
    facts: {
      en: ["It is a major Arctic research hub.", "The city is famous for northern lights tourism.", "It lies far above the Arctic Circle.", "It is one of the best-known cities in northern Norway."],
      de: ["Es ist ein wichtiges Zentrum der Arktisforschung.", "Die Stadt ist berühmt für Nordlichttourismus.", "Sie liegt weit nördlich des Polarkreises.", "Sie gehört zu den bekanntesten Städten Nordnorwegens."],
      hu: ["Fontos sarkvidéki kutatási központ.", "A város híres az északi fény turizmusáról.", "Messze az északi sarkkör fölött fekszik.", "Észak-Norvégia egyik legismertebb városa."],
      ro: ["Este un important centru de cercetare arctică.", "Orașul este celebru pentru turismul dedicat aurorei boreale.", "Se află mult deasupra Cercului Polar.", "Este unul dintre cele mai cunoscute orașe din nordul Norvegiei."]
    },
    image: "/geo-images/norway/tromso.webp",
  }
  ,
  {
    id: "city-alesund",
    type: "city",
    parent: "norway",
    coords: [6.1549, 62.4722],
    name: { de: "Ålesund", hu: "Ålesund", ro: "Ålesund", en: "Ålesund" },
    description: {
      en: "Ålesund is a coastal city famous for its Art Nouveau architecture and its position on a string of islands. The town was rebuilt after the great fire of 1904, which gave it a distinctive and elegant urban style. It is a popular base for fjord trips, coastal cruises, and photography along the Sunnmøre coast. Ålesund combines maritime history, scenic harbor views, and strong tourism appeal.",
      de: "Ålesund ist eine Küstenstadt, die für ihre Jugendstilarchitektur und ihre Lage auf einer Inselkette bekannt ist. Die Stadt wurde nach dem großen Brand von 1904 neu aufgebaut, wodurch ihr ein unverwechselbarer und eleganter Stadtstil verliehen wurde. Sie ist ein beliebter Ausgangspunkt für Fjordtouren, Küstenkreuzfahrten und Fotografien an der Sunnmøre-Küste. Ålesund verbindet maritime Geschichte, schöne Hafenblicke und starke touristische Anziehungskraft.",
      hu: "Ålesund egy tengerparti város, amelyet a szecessziós építészetéről és a szigetek láncán elfoglalt helyéről ismernek. A települést az 1904-es nagy tűzvész után újjáépítették, ezért kapták a mai elegáns, egységes városképet. Népszerű kiindulópont fjordtúrákhoz, parti hajózásokhoz és a Sunnmøre-part fotózásához. Ålesund a tengeri történelmet, a látványos kikötői panorámát és az erős turisztikai vonzerőt egyesíti.",
      ro: "Ålesund este un oraș de coastă faimos pentru arhitectura sa Art Nouveau și pentru așezarea pe un șir de insule. Orașul a fost reconstruit după marele incendiu din 1904, iar acest lucru i-a dat un stil urban elegant și foarte distinctiv. Este o bază populară pentru excursii în fjorduri, croaziere de coastă și fotografie pe litoralul Sunnmøre. Ålesund combină istoria maritimă, priveliștile spectaculoase ale portului și un puternic atractiv turistic."
    },
    facts: {
      en: ["Built in a distinctive Art Nouveau style after the 1904 fire.", "Sits on several islands linked by bridges and tunnels.", "A key gateway to the Sunnmøre Alps and nearby fjords.", "Known for panoramic views from Aksla viewpoint.", "One of Norway's best-known coastal photo destinations."],
      de: ["Im charakteristischen Jugendstil nach dem Brand von 1904 aufgebaut.", "Liegt auf mehreren Inseln, die durch Brücken und Tunnel verbunden sind.", "Wichtiges Tor zu den Sunnmøre-Alpen und nahe gelegenen Fjorden.", "Bekannt für den Panoramablick vom Aussichtspunkt Aksla.", "Eines der bekanntesten Küsten-Fotomotive Norwegens."],
      hu: ["Az 1904-es tűzvész után jellegzetes szecessziós stílusban épült újjá.", "Több szigeten fekszik, amelyeket hidak és alagutak kötnek össze.", "Fontos kapu a Sunnmøre-Alpok és a közeli fjordok felé.", "Híres az Aksla kilátópont panorámájáról.", "Norvégia egyik legismertebb tengerparti fotóhelye."],
      ro: ["A fost reconstruit în stil Art Nouveau distinctiv după incendiul din 1904.", "Este așezat pe mai multe insule legate prin poduri și tuneluri.", "Este o poartă importantă către Alpii Sunnmøre și fjordurile din apropiere.", "Este cunoscut pentru panorama de la punctul de belvedere Aksla.", "Una dintre cele mai cunoscute destinații de fotografie de coastă din Norvegia."]
    },
    image: "/geo-images/norway/alesund.webp",
  },
  {
    id: "city-bodo",
    type: "city",
    parent: "norway",
    coords: [14.4050, 67.2804],
    name: { de: "Bodø", hu: "Bodø", ro: "Bodø", en: "Bodø" },
    description: {
      en: "Bodø is a northern coastal city and an important hub for Arctic travel and maritime transport. It sits close to the Saltstraumen maelstrom, one of the world's strongest tidal currents. The city is a gateway to the Lofoten area and a strong base for outdoor tourism, aviation, and modern services. Bodø blends dramatic northern light, sea views, and a growing urban life above the Arctic Circle.",
      de: "Bodø ist eine nördliche Küstenstadt und ein wichtiges Zentrum für Arktisreisen und Seeverkehr. Sie liegt in der Nähe des Saltstraumen, einer der stärksten Gezeitenströmungen der Welt. Die Stadt ist ein Tor zu den Lofoten und ein starker Standort für Outdoor-Tourismus, Luftfahrt und moderne Dienstleistungen. Bodø verbindet dramatisches Nordlicht, Meerblick und ein wachsendes Stadtleben nördlich des Polarkreises.",
      hu: "Bodø egy északi tengerparti város, amely fontos csomópont az arktiszi utazás és a tengeri közlekedés számára. Közelében található a Saltstraumen, a világ egyik legerősebb árapályáramlása. A város kapu a Lofoten térsége felé, és erős bázis a szabadtéri turizmus, a repülés és a modern szolgáltatások számára. Bodø a sarkkör feletti élettel, tengeri panorámával és látványos északi fényekkel vonz.",
      ro: "Bodø este un oraș de coastă din nord și un nod important pentru călătoriile arctice și transportul maritim. Se află aproape de Saltstraumen, una dintre cele mai puternice curenți de maree din lume. Orașul este o poartă către zona Lofoten și o bază puternică pentru turismul în aer liber, aviație și servicii moderne. Bodø combină lumina nordică spectaculoasă, priveliștile către mare și viața urbană în creștere deasupra Cercului Polar."
    },
    facts: {
      en: ["Located just north of the Arctic Circle.", "A major transport gateway to northern Norway.", "Known for the nearby Saltstraumen tidal current.", "Serves as a base for Lofoten and coastal adventures.", "The city has a strong aviation and military presence."],
      de: ["Liegt knapp nördlich des Polarkreises.", "Ein wichtiges Verkehrsportal zu Nordnorwegen.", "Bekannt für die nahe Saltstraumen-Gezeitenströmung.", "Dient als Ausgangspunkt für Lofoten- und Küstenabenteuer.", "Die Stadt hat eine starke Luftfahrt- und Militärpräsenz."],
      hu: ["Közvetlenül az északi sarkkör felett fekszik.", "Fontos közlekedési kapu Észak-Norvégiába.", "A közeli Saltstraumen árapályáramlásról ismert.", "Kiindulópont a Lofoten és a part menti kalandok felé.", "Erős repülési és katonai jelenléttel rendelkezik."],
      ro: ["Se află chiar la nord de Cercul Polar.", "Este o poartă importantă de transport către nordul Norvegiei.", "Este cunoscut pentru curentul de maree Saltstraumen din apropiere.", "Servește ca bază pentru Lofoten și aventurile de coastă.", "Orașul are o prezență puternică în aviație și armată."]
    },
    image: "/geo-images/norway/bodo.webp",
  },
  {
    id: "city-kristiansand",
    type: "city",
    parent: "norway",
    coords: [7.9956, 58.1467],
    name: { de: "Kristiansand", hu: "Kristiansand", ro: "Kristiansand", en: "Kristiansand" },
    description: {
      en: "Kristiansand is the main city of southern Norway and a popular summer destination on the Skagerrak coast. It is known for its beach parks, harbor atmosphere, and family-friendly attractions. The city has a lively cultural calendar and is an important ferry connection point to Denmark. Kristiansand combines seaside leisure, urban shopping, and easy access to the southern archipelago.",
      de: "Kristiansand ist die wichtigste Stadt Südnorwegens und ein beliebtes Sommerziel an der Skagerrak-Küste. Sie ist bekannt für ihre Strandparks, die Hafenatmosphäre und familienfreundliche Attraktionen. Die Stadt hat einen lebendigen Kulturkalender und ist ein wichtiger Fährknotenpunkt nach Dänemark. Kristiansand verbindet Küstenfreizeit, städtisches Einkaufen und einfachen Zugang zum südlichen Archipel.",
      hu: "Kristiansand Dél-Norvégia fő városa és népszerű nyári úti cél a Skagerrak partján. Strandparkjairól, kikötői hangulatáról és családbarát látnivalóiról ismert. A város élénk kulturális programokat kínál, és fontos kompkapcsolatot biztosít Dániába. Kristiansand a tengerparti pihenést, a városi vásárlást és a déli szigetcsoport könnyű elérését ötvözi.",
      ro: "Kristiansand este cel mai important oraș din sudul Norvegiei și o destinație populară de vară pe coasta Skagerrak. Este cunoscut pentru parcurile de plajă, atmosfera de port și atracțiile prietenoase cu familia. Orașul are un calendar cultural viu și este un punct major de legătură cu feribotul către Danemarca. Kristiansand combină relaxarea la mare, cumpărăturile urbane și accesul ușor la arhipelagul sudic."
    },
    facts: {
      en: ["A major summer city on Norway's south coast.", "Important ferry link between Norway and Denmark.", "Known for the popular city beach and harbor life.", "Close to the southern island landscape.", "Hosts the annual Q42 and Palmesus event scenes."],
      de: ["Eine wichtige Sommerstadt an Norwegens Südküste.", "Wichtige Fährverbindung zwischen Norwegen und Dänemark.", "Bekannt für den beliebten Stadtstrand und das Hafengefühl.", "Nahe der südlichen Inselwelt gelegen.", "Ort für jährliche Event- und Festivalformate."],
      hu: ["Norvégia déli partjának egyik fontos nyári városa.", "Fontos kompösszeköttetés Norvégia és Dánia között.", "A népszerű városi strandról és a kikötői életről ismert.", "Közel fekszik a déli szigetvilághoz.", "Évente rendezvény- és fesztiválközpontként is működik."],
      ro: ["Un important oraș de vară pe coasta sudică a Norvegiei.", "Legătură majoră de feribot între Norvegia și Danemarca.", "Cunoscut pentru plaja urbană populară și viața portuară.", "Aproape de peisajul insular sudic.", "Găzduiește scene anuale de evenimente și festivaluri."]
    },
    image: "/geo-images/norway/kristiansand.webp",
  },
  {
    id: "city-fredrikstad",
    type: "city",
    parent: "norway",
    coords: [10.9298, 59.2181],
    name: { de: "Fredrikstad", hu: "Fredrikstad", ro: "Fredrikstad", en: "Fredrikstad" },
    description: {
      en: "Fredrikstad is one of Norway's best-preserved fortified cities and a lively city on the Glomma river estuary. Its old town is famous for star-shaped walls, cobblestone streets, and a deep historical atmosphere. The modern parts of the city add shopping, culture, and a busy riverfront to the mix. Fredrikstad is a strong SEO city for Norwegian history, architecture, and coastal urban life.",
      de: "Fredrikstad ist eine der am besten erhaltenen Festungsstädte Norwegens und eine lebendige Stadt an der Mündung der Glomma. Die Altstadt ist berühmt für sternförmige Wälle, Kopfsteinpflaster und eine tiefe historische Atmosphäre. Die modernen Stadtteile ergänzen das Angebot mit Einkaufen, Kultur und einer belebten Uferzone. Fredrikstad ist eine starke SEO-Stadt für norwegische Geschichte, Architektur und städtisches Leben an der Küste.",
      hu: "Fredrikstad Norvégia egyik legjobban megőrzött erődvárosa és élénk település a Glomma torkolatánál. Óvárosa csillag alakú falairól, macskaköves utcáiról és mély történelmi hangulatáról híres. Az újabb városrészek vásárlási, kulturális és forgalmas folyóparti élményt adnak hozzá. Fredrikstad erős SEO-helyszín a norvég történelemhez, építészethez és tengerparti városi élethez.",
      ro: "Fredrikstad este unul dintre cele mai bine păstrate orașe fortificate din Norvegia și un oraș animat la gura de vărsare a râului Glomma. Orașul vechi este faimos pentru zidurile în formă de stea, străzile pavate cu piatră cubică și atmosfera sa istorică profundă. Zonele moderne adaugă cumpărături, cultură și o faleză aglomerată de-a lungul râului. Fredrikstad este un oraș SEO puternic pentru istoria, arhitectura și viața urbană de coastă a Norvegiei."
    },
    facts: {
      en: ["The Old Town is among Scandinavia's best-preserved fortified centers.", "Located where the Glomma meets the Oslofjord region.", "Founded by King Frederick II in 1567.", "Features a free ferry linking both sides of the river.", "Popular for riverside walks and summer events."],
      de: ["Die Altstadt gehört zu den am besten erhaltenen Festungszentren Skandinaviens.", "Liegt dort, wo die Glomma die Oslofjord-Region erreicht.", "1567 von König Friedrich II. gegründet.", "Eine kostenlose Fähre verbindet beide Ufer des Flusses.", "Beliebt für Spaziergänge am Fluss und Sommerveranstaltungen."],
      hu: ["Óvárosa Skandinávia egyik legjobban megőrzött erődített központja.", "A Glomma és az Oslofjord-régió találkozásánál fekszik.", "1567-ben II. Frigyes király alapította.", "Ingyenes komp köti össze a folyó két partját.", "Népszerű a folyóparti séták és a nyári események miatt."],
      ro: ["Orașul vechi este unul dintre cele mai bine păstrate centre fortificate din Scandinavia.", "Se află acolo unde Glomma ajunge în regiunea Oslofjord.", "A fost fondat în 1567 de regele Frederic al II-lea.", "Un feribot gratuit leagă cele două maluri ale râului.", "Popular pentru plimbări pe malul râului și evenimentele de vară."]
    },
    image: "/geo-images/norway/fredrikstad.webp",
  },
  {
    id: "city-drammen",
    type: "city",
    parent: "norway",
    coords: [10.2045, 59.7439],
    name: { de: "Drammen", hu: "Drammen", ro: "Drammen", en: "Drammen" },
    description: {
      en: "Drammen is a river city west of Oslo that has reinvented itself through waterfront renewal and modern urban planning. It is known for the Drammen River, the iconic spiral bridge, and a strong regional service economy. The city offers shopping, culture, and easy access to the hills and forests around the valley. Drammen is a practical and attractive base for travelers exploring eastern Norway.",
      de: "Drammen ist eine Flussstadt westlich von Oslo, die sich durch Ufererneuerung und moderne Stadtplanung neu erfunden hat. Sie ist bekannt für die Drammen-Region, die ikonische Spiralbrücke und eine starke regionale Dienstleistungswirtschaft. Die Stadt bietet Einkaufen, Kultur und einen einfachen Zugang zu den Hügeln und Wäldern des Tals. Drammen ist ein praktischer und attraktiver Ausgangspunkt für Reisende in Ostnorwegen.",
      hu: "Drammen egy Oslo nyugati oldalán fekvő folyóparti város, amely vízparti megújulással és modern várostervezéssel alakította át magát. A Drammen-folyóról, az ikonikus spirálhídról és az erős regionális szolgáltatási gazdaságról ismert. Vásárlást, kultúrát és könnyű hozzáférést kínál a völgy dombjaihoz és erdeihez. Drammen praktikus és vonzó bázis Norvégia keleti részének felfedezéséhez.",
      ro: "Drammen este un oraș de râu la vest de Oslo, care s-a reinventat prin reamenajarea falezei și planificare urbană modernă. Este cunoscut pentru râul Drammen, podul spirală iconic și o economie regională puternică de servicii. Orașul oferă cumpărături, cultură și acces ușor la dealurile și pădurile din vale. Drammen este o bază practică și atractivă pentru călătorii care explorează estul Norvegiei."
    },
    facts: {
      en: ["Built around the lower Drammen River valley.", "The Spiralen road and tunnel are local icons.", "Known for a major riverfront renewal project.", "Close to forested hills and ski areas.", "A strong regional center for commerce and services."],
      de: ["Entstand rund um das untere Tal der Drammen.", "Die Straße und der Tunnel Spiralen sind lokale Wahrzeichen.", "Bekannt für ein großes Ufererneuerungsprojekt.", "Nahe an bewaldeten Hügeln und Skigebieten.", "Ein starkes regionales Zentrum für Handel und Dienstleistungen."],
      hu: ["A Drammen alsó völgyterületére épült.", "A Spiralen út és alagút helyi ikon.", "Nagy folyóparti megújítási projektjéről ismert.", "Közel van az erdős dombokhoz és síterületekhez.", "Erős regionális kereskedelmi és szolgáltatási központ."],
      ro: ["S-a dezvoltat în jurul văii inferioare a râului Drammen.", "Drumul și tunelul Spiralen sunt repere locale.", "Cunoscut pentru un amplu proiect de reînnoire a falezei.", "Aproape de dealuri împădurite și zone de schi.", "Un centru regional puternic pentru comerț și servicii."]
    },
    image: "/geo-images/norway/drammen.webp",
  },
  {
    id: "city-sandnes",
    type: "city",
    parent: "norway",
    coords: [5.7280, 58.8539],
    name: { de: "Sandnes", hu: "Sandnes", ro: "Sandnes", en: "Sandnes" },
    description: {
      en: "Sandnes is a fast-growing city south of Stavanger and a key residential and commercial center in Rogaland. It is known for outdoor access, cycling routes, and easy connections to the fjords and the North Sea coast. The city has a modern urban feel while still keeping a close link to local industry and family life. Sandnes is a smart keyword for searches about Stavanger suburbs and western Norway travel.",
      de: "Sandnes ist eine schnell wachsende Stadt südlich von Stavanger und ein wichtiges Wohn- und Handelszentrum in Rogaland. Sie ist bekannt für den Zugang zur Natur, Radwege und gute Verbindungen zu den Fjorden und zur Nordseeküste. Die Stadt hat ein modernes Stadtgefühl und bewahrt dennoch eine enge Verbindung zu lokaler Industrie und Familienleben. Sandnes ist ein starker Suchbegriff für Stavanger-Vororte und Reisen in Westnorwegen.",
      hu: "Sandnes egy gyorsan növekvő város Stavanger déli oldalán, Rogaland fontos lakó- és kereskedelmi központja. A szabadtéri elérhetőségeiről, kerékpárútjairól és a fjordokhoz, valamint az Északi-tenger partjához vezető könnyű kapcsolatairól ismert. A város modern városi hangulatot ad, miközben szorosan kötődik a helyi iparhoz és a családi élethez. Sandnes erős kulcsszó Stavanger elővárosaihoz és a nyugat-norvégiai utazásokhoz.",
      ro: "Sandnes este un oraș aflat în creștere rapidă la sud de Stavanger și un centru rezidențial și comercial important în Rogaland. Este cunoscut pentru accesul ușor la natură, traseele de ciclism și legăturile rapide către fjorduri și coasta Mării Nordului. Orașul are un aer urban modern, păstrând în același timp o legătură strânsă cu industria locală și viața de familie. Sandnes este un cuvânt-cheie util pentru căutări despre suburbiile Stavanger și călătoriile în vestul Norvegiei."
    },
    facts: {
      en: ["Part of the Stavanger metropolitan area.", "Known for cycling-friendly routes and family housing.", "Close to fjords, beaches, and the North Sea coast.", "A growing center for retail and services.", "Strongly linked to the regional labor market."],
      de: ["Teil des Großraums Stavanger.", "Bekannt für fahrradfreundliche Wege und Familienwohnen.", "Nahe an Fjorden, Stränden und der Nordseeküste.", "Ein wachsendes Zentrum für Handel und Dienstleistungen.", "Stark mit dem regionalen Arbeitsmarkt verbunden."],
      hu: ["A Stavanger környéki nagyvárosi térség része.", "Kerékpárosbarát útvonalairól és családi lakónegyedeiről ismert.", "Közel van fjordokhoz, strandokhoz és az Északi-tenger partjához.", "Növekvő kiskereskedelmi és szolgáltatási központ.", "Erősen kapcsolódik a regionális munkaerőpiacra."],
      ro: ["Face parte din zona metropolitană Stavanger.", "Cunoscut pentru trasee prietenoase cu bicicliștii și locuințe de familie.", "Aproape de fjorduri, plaje și coasta Mării Nordului.", "Un centru în creștere pentru retail și servicii.", "Puternic legat de piața regională a muncii."]
    },
    image: "/geo-images/norway/sandnes.webp",
  },
  {
    id: "city-tonsberg",
    type: "city",
    parent: "norway",
    coords: [10.4070, 59.2675],
    name: { de: "Tønsberg", hu: "Tønsberg", ro: "Tønsberg", en: "Tønsberg" },
    description: {
      en: "Tønsberg is one of Norway's oldest cities and a major summer destination on the Oslofjord. The city mixes Viking history, marina life, and modern waterfront development. Visitors come for the harbor promenade, historic sites, and easy access to the coastal islands of Vestfold. Tønsberg is a compact city with a strong historical brand and broad tourism appeal.",
      de: "Tønsberg ist eine der ältesten Städte Norwegens und ein wichtiges Sommerziel am Oslofjord. Die Stadt verbindet Wikingergeschichte, Yachthafenleben und moderne Uferentwicklung. Besucher kommen wegen der Hafenpromenade, historischer Orte und des leichten Zugangs zu den Küsteninseln von Vestfold. Tønsberg ist eine kompakte Stadt mit starkem historischem Profil und breiter touristischer Anziehungskraft.",
      hu: "Tønsberg Norvégia egyik legrégebbi városa és fontos nyári úti cél az Oslofjord partján. A város a viking történelmet, a kikötői életet és a modern vízparti fejlesztéseket ötvözi. A látogatók a kikötői sétányért, a történelmi helyszínekért és a Vestfold part menti szigeteihez való könnyű hozzáférésért érkeznek. Tønsberg kompakt város, erős történelmi márkával és széles turisztikai vonzerővel.",
      ro: "Tønsberg este unul dintre cele mai vechi orașe ale Norvegiei și o destinație majoră de vară pe Oslofjord. Orașul combină istoria vikingă, viața de port de agrement și dezvoltarea modernă a falezei. Vizitatorii vin pentru promenada portului, siturile istorice și accesul ușor la insulele de coastă din Vestfold. Tønsberg este un oraș compact, cu un brand istoric puternic și un atractiv turistic larg."
    },
    facts: {
      en: ["Often described as Norway's oldest city.", "Strongly connected to Viking Age history.", "A popular harbor and summer town on the fjord.", "Home to the historic Slottsfjellet area.", "Well known for sailing and coastal tourism."],
      de: ["Oft als Norwegens älteste Stadt beschrieben.", "Stark mit der Wikingerzeit verbunden.", "Beliebte Hafen- und Sommerstadt am Fjord.", "Heimat des historischen Gebiets Slottsfjellet.", "Bekannt für Segeln und Küstentourismus."],
      hu: ["Gyakran Norvégia legrégebbi városaként írják le.", "Erősen kötődik a viking kor történelméhez.", "Népszerű kikötőváros és nyári üdülőhely a fjordnál.", "A történelmi Slottsfjellet terület otthona.", "Ismert a vitorlázásról és a part menti turizmusról."],
      ro: ["Adesea descris drept cel mai vechi oraș din Norvegia.", "Puternic legat de istoria epocii vikinge.", "Oraș portuar și de vară popular pe fjord.", "Găzduiește zona istorică Slottsfjellet.", "Cunoscut pentru navigație și turismul de coastă."]
    },
    image: "/geo-images/norway/tonsberg.webp",
  },
  {
    id: "city-lillehammer",
    type: "city",
    parent: "norway",
    coords: [10.4662, 61.1153],
    name: { de: "Lillehammer", hu: "Lillehammer", ro: "Lillehammer", en: "Lillehammer" },
    description: {
      en: "Lillehammer is a famous inland city in eastern Norway, known for winter sports and the 1994 Olympic legacy. It sits by Lake Mjøsa and serves as a gateway to valleys, ski areas, and family tourism. The town combines small-city charm with museums, cultural events, and strong outdoor branding. Lillehammer remains one of Norway's best-known destinations for snow, history, and active holidays.",
      de: "Lillehammer ist eine berühmte Stadt im Binnenland Ostnorwegens, bekannt für Wintersport und das olympische Erbe von 1994. Sie liegt am Mjøsa-See und dient als Tor zu Tälern, Skigebieten und Familientourismus. Die Stadt verbindet Kleinstadtcharme mit Museen, Kulturveranstaltungen und einem starken Outdoor-Profil. Lillehammer bleibt eines der bekanntesten Ziele Norwegens für Schnee, Geschichte und Aktivurlaub.",
      hu: "Lillehammer egy híres belső-norvégiai város, amely a téli sportokról és az 1994-es olimpiai örökségről ismert. A Mjøsa-tó mellett fekszik, és kaput nyit a völgyekhez, síterületekhez és családi turizmushoz. A város kisvárosi bájt ötvöz múzeumokkal, kulturális eseményekkel és erős szabadtéri arculattal. Lillehammer továbbra is Norvégia egyik legismertebb célpontja hóhoz, történelemhez és aktív pihenéshez.",
      ro: "Lillehammer este un oraș interior celebru din estul Norvegiei, cunoscut pentru sporturile de iarnă și moștenirea olimpică din 1994. Se află lângă lacul Mjøsa și servește ca poartă către văi, pârtii de schi și turismul pentru familii. Orașul combină farmecul unui oraș mic cu muzee, evenimente culturale și un branding puternic pentru activități în aer liber. Lillehammer rămâne una dintre cele mai cunoscute destinații ale Norvegiei pentru zăpadă, istorie și vacanțe active."
    },
    facts: {
      en: ["Hosted the 1994 Winter Olympics.", "Known for strong winter sports traditions.", "Sits near the southern end of Lake Mjøsa.", "Popular for family-friendly outdoor activities.", "Home to the Maihaugen open-air museum."],
      de: ["Veranstaltete die Olympischen Winterspiele 1994.", "Bekannt für starke Wintersporttraditionen.", "Liegt nahe dem Südufer des Mjøsa-Sees.", "Beliebt für familienfreundliche Outdoor-Aktivitäten.", "Heimat des Freilichtmuseums Maihaugen."],
      hu: ["Az 1994-es téli olimpiának adott otthont.", "Erős téli sporthagyományairól ismert.", "A Mjøsa-tó déli végének közelében fekszik.", "Népszerű családbarát szabadtéri programok miatt.", "A Maihaugen szabadtéri múzeum otthona."],
      ro: ["A găzduit Jocurile Olimpice de Iarnă din 1994.", "Cunoscut pentru tradițiile puternice în sporturile de iarnă.", "Se află aproape de capătul sudic al lacului Mjøsa.", "Popular pentru activități în aer liber pentru familii.", "Găzduiește muzeul în aer liber Maihaugen."]
    },
    image: "/geo-images/norway/lillehammer.webp",
  },
  {
    id: "city-narvik",
    type: "city",
    parent: "norway",
    coords: [17.4272, 68.4385],
    name: { de: "Narvik", hu: "Narvik", ro: "Narvik", en: "Narvik" },
    description: {
      en: "Narvik is a northern port city shaped by iron ore exports, steep mountains, and dramatic Arctic weather. It is famous for its deep-water harbor and its role in World War II history. The city is also a base for skiing, rail travel, and mountain scenery in northern Norway. Narvik offers a strong mix of industry, history, and expedition-style tourism.",
      de: "Narvik ist eine nördliche Hafenstadt, die vom Eisenerzexport, steilen Bergen und dramatischem arktischem Wetter geprägt ist. Sie ist berühmt für ihren Tiefwasserhafen und ihre Rolle in der Geschichte des Zweiten Weltkriegs. Die Stadt ist auch ein Ausgangspunkt für Skifahren, Bahnreisen und Berglandschaften in Nordnorwegen. Narvik bietet eine starke Mischung aus Industrie, Geschichte und Expeditions-Tourismus.",
      hu: "Narvik egy északi kikötőváros, amelyet a vasérc-export, a meredek hegyek és a drámai sarkvidéki időjárás formált. Mélyvizű kikötőjéről és a második világháború történetében betöltött szerepéről ismert. A város síeléshez, vasúti utazáshoz és az észak-norvég hegyvidékhez is kiindulópont. Narvik az ipar, a történelem és az expedíciós turizmus erős keverékét kínálja.",
      ro: "Narvik este un oraș-port din nord, modelat de exportul de minereu de fier, munți abrupți și vreme arctică dramatică. Este celebru pentru portul său de apă adâncă și pentru rolul din istoria celui de-al Doilea Război Mondial. Orașul este și o bază pentru schi, călătorii feroviare și peisaje montane din nordul Norvegiei. Narvik oferă un amestec puternic de industrie, istorie și turism de tip expediție."
    },
    facts: {
      en: ["Historically tied to iron ore shipping.", "One of northern Norway's key port cities.", "Important in the WWII Narvik campaign.", "Close to ski terrain and steep mountains.", "A major stop on the Ofoten railway route."],
      de: ["Historisch eng mit dem Eisenerzversand verbunden.", "Eine der wichtigsten Hafenstädte Nordnorwegens.", "Wichtig in der Narvik-Kampagne des Zweiten Weltkriegs.", "Nahe an Skigelände und steilen Bergen.", "Wichtiger Halt an der Ofoten-Bahnstrecke."],
      hu: ["Történelmileg szorosan kötődik a vasérc-szállításhoz.", "Észak-Norvégia egyik kulcsfontosságú kikötővárosa.", "Fontos szerepe volt a narviki csatákban a második világháborúban.", "Közel van a síterületekhez és a meredek hegyekhez.", "Az Ofotbanen vasút egyik fontos állomása."],
      ro: ["Legat istoric de exportul de minereu de fier.", "Unul dintre orașele-port cheie din nordul Norvegiei.", "Important în campania de la Narvik din Al Doilea Război Mondial.", "Aproape de terenuri de schi și munți abrupți.", "O oprire majoră pe ruta feroviară Ofoten."]
    },
    image: "/geo-images/norway/narvik.webp",
  },
  {
    id: "city-alta",
    type: "city",
    parent: "norway",
    coords: [23.2717, 69.9683],
    name: { de: "Alta", hu: "Alta", ro: "Alta", en: "Alta" },
    description: {
      en: "Alta is a major town in Finnmark and one of the best-known gateways to the far north of Norway. It is famous for its Arctic setting, Sámi connections, and the prehistoric rock carvings found in the area. The town is a practical base for northern lights travel, river fishing, and long Arctic road trips. Alta combines modern services with a strong sense of northern identity and outdoor life.",
      de: "Alta ist eine wichtige Stadt in Finnmark und eines der bekanntesten Tore zum hohen Norden Norwegens. Sie ist berühmt für ihre arktische Lage, ihre Samenverbindungen und die prähistorischen Felsritzungen in der Umgebung. Die Stadt ist ein praktischer Ausgangspunkt für Nordlichttouren, Flussangeln und lange arktische Roadtrips. Alta verbindet moderne Dienstleistungen mit einem starken Gefühl für nordische Identität und Outdoor-Leben.",
      hu: "Alta Finnmark egyik fontos városa és Norvégia távoli északi részének egyik legismertebb kapuja. Sarkvidéki fekvéséről, számi kapcsolatairól és a környéken található őskori sziklarajzokról híres. A város praktikus bázis az északi fény utazásokhoz, a folyami horgászathoz és a hosszú arktiszi autós túrákhoz. Alta a modern szolgáltatásokat erős északi identitással és szabadtéri élettel ötvözi.",
      ro: "Alta este un oraș important din Finnmark și una dintre cele mai cunoscute porți către nordul îndepărtat al Norvegiei. Este faimos pentru așezarea sa arctică, legăturile cu populația sami și petroglifele preistorice din zonă. Orașul este o bază practică pentru călătorii după aurora boreală, pescuit pe râu și excursii lungi pe șoselele arctice. Alta combină serviciile moderne cu un puternic sentiment de identitate nordică și viață în aer liber."
    },
    facts: {
      en: ["A major center in Finnmark.", "Known for the Alta rock carvings.", "Popular starting point for northern lights trips.", "Strong ties to Sámi culture and Arctic life.", "Important for river fishing and outdoor access."],
      de: ["Ein wichtiges Zentrum in Finnmark.", "Bekannt für die Felsritzungen von Alta.", "Beliebter Startpunkt für Nordlichttouren.", "Starke Verbindungen zur samischen Kultur und zum arktischen Leben.", "Wichtig für Flussangeln und Outdoor-Zugang."],
      hu: ["Finnmark egyik fontos központja.", "Az altai sziklarajzokról ismert.", "Népszerű kiindulópont az északi fény túrákhoz.", "Erős számi kulturális és sarkvidéki kapcsolatokkal rendelkezik.", "Fontos a folyami horgászat és a szabadtéri elérés szempontjából."],
      ro: ["Un centru important în Finnmark.", "Cunoscut pentru petroglifele de la Alta.", "Punct popular de plecare pentru tururile aurorii boreale.", "Legături puternice cu cultura sami și viața arctică.", "Important pentru pescuitul pe râu și accesul la natură."]
    },
    image: "/geo-images/norway/alta.webp",
  }
];

export const norwayCulture: POI[] = [
  {
    id: "cult-vigeland",
    type: "landmark",
    parent: "norway",
    coords: [10.7048, 59.9270],
    name: { de: "Vigeland-Park", hu: "Vigeland park", ro: "Parcul Vigeland", en: "Vigeland Park" },
    description: {
      en: "Vigeland Park is Oslo's iconic sculpture park, filled with works by Gustav Vigeland and a major symbol of Norwegian public art.",
      de: "Der Vigeland-Park ist Oslos ikonischer Skulpturenpark mit Werken von Gustav Vigeland und ein wichtiges Symbol norwegischer öffentlicher Kunst.",
      hu: "A Vigeland park Oslo ikonikus szoborparkja, Gustav Vigeland műveivel és a norvég köztéri művészet fontos jelképeként.",
      ro: "Parcul Vigeland este parcul de sculpturi emblematic al Oslo-ului, plin de lucrări de Gustav Vigeland și un simbol major al artei publice norvegiene."
    },
    facts: {
      en: ["It contains more than 200 sculptures.", "All works were created by a single artist, Gustav Vigeland.", "It is one of Oslo's most visited attractions.", "The park is part of Frogner Park."],
      de: ["Er enthält mehr als 200 Skulpturen.", "Alle Werke stammen von Gustav Vigeland.", "Er gehört zu den meistbesuchten Sehenswürdigkeiten Oslos.", "Der Park ist Teil des Frognerparks."],
      hu: ["Több mint 200 szobrot tartalmaz.", "Az összes mű Gustav Vigeland alkotása.", "Oslo egyik leglátogatottabb attrakciója.", "A park a Frogner park része."],
      ro: ["Conține peste 200 de sculpturi.", "Toate lucrările au fost create de un singur artist, Gustav Vigeland.", "Este una dintre cele mai vizitate atracții din Oslo.", "Parcul face parte din Frogner Park."]
    },
    image: "/geo-images/norway/vigeland.webp",
  },
  {
    id: "cult-bryggen",
    type: "historical",
    parent: "norway",
    coords: [5.3230, 60.3976],
    name: { de: "Bryggen Bergen", hu: "Bryggen Bergen", ro: "Bryggen Bergen", en: "Bryggen Bergen" },
    description: {
      en: "Bryggen is the old Hanseatic wharf in Bergen, famous for its wooden row of colorful historic buildings.",
      de: "Bryggen ist die alte hanseatische Uferfront in Bergen, berühmt für ihre hölzerne Reihe farbenfroher historischer Gebäude.",
      hu: "Bryggen Bergen régi hanza rakpartja, amely színes, történelmi faépületeiről híres.",
      ro: "Bryggen este vechiul chei hanseatic din Bergen, celebru pentru șirul său de clădiri istorice colorate din lemn."
    },
    facts: {
      en: ["It is a UNESCO World Heritage site.", "It reflects Bergen's Hanseatic trading past.", "The wooden buildings have been carefully preserved.", "It is one of the city's most recognizable views."],
      de: ["Es ist UNESCO-Welterbe.", "Es spiegelt Bergens hansische Handelsvergangenheit wider.", "Die Holzbauten sind sorgfältig erhalten worden.", "Es gehört zu den bekanntesten Ansichten der Stadt."],
      hu: ["UNESCO Világörökség.", "Bergen hanza kereskedelmi múltját idézi.", "A faépületeket gondosan megőrizték.", "A város egyik legjellegzetesebb látképe."],
      ro: ["Este sit UNESCO.", "Reflectă trecutul comercial hanseatic al orașului Bergen.", "Clădirile din lemn au fost conservate cu grijă.", "Este una dintre cele mai recognoscibile imagini ale orașului."]
    },
    image: "/geo-images/norway/bryggen.webp",
  },
  {
    id: "cult-nidarosdom",
    type: "historical",
    parent: "norway",
    coords: [10.3975, 63.4269],
    name: { de: "Nidarosdom", hu: "Nidarosdom", ro: "Catedrala Nidaros", en: "Nidaros Cathedral" },
    description: {
      en: "Nidaros Cathedral in Trondheim is Norway's most important medieval church and a major pilgrimage destination.",
      de: "Der Nidarosdom in Trondheim ist Norwegens wichtigste mittelalterliche Kirche und ein bedeutendes Pilgerziel.",
      hu: "A trondheimi Nidarosdom Norvégia legfontosabb középkori temploma és jelentős zarándokhelye.",
      ro: "Catedrala Nidaros din Trondheim este cea mai importantă biserică medievală din Norvegia și o destinație majoră de pelerinaj."
    },
    facts: {
      en: ["It is built over the burial place of Saint Olav.", "It is considered the largest medieval cathedral in Scandinavia.", "Coronations of Norwegian monarchs once took place here.", "It is a key symbol of Trondheim."],
      de: ["Sie wurde über der Grabstätte des Heiligen Olav errichtet.", "Sie gilt als größte mittelalterliche Kathedrale Skandinaviens.", "Hier fanden einst die Krönungen norwegischer Monarchen statt.", "Sie ist ein wichtiges Symbol Trondheims."],
      hu: ["Szent Olaf sírhelye fölé épült.", "Skandinávia legnagyobb középkori katedrálisa.", "Itt tartották egykor a norvég uralkodók koronázásait.", "Trondheim egyik legfontosabb jelképe."],
      ro: ["A fost construită peste locul de înmormântare al Sfântului Olav.", "Este considerată cea mai mare catedrală medievală din Scandinavia.", "Aici aveau loc odinioară încoronările monarhilor norvegieni.", "Este un simbol important al orașului Trondheim."]
    },
    image: "/geo-images/norway/nidarosdom.webp",
  },
  {
    id: "cult-oslo-opera",
    type: "landmark",
    parent: "norway",
    coords: [10.7527, 59.9075],
    name: { de: "Opernhaus Oslo", hu: "Oslo Operaház", ro: "Opera din Oslo", en: "Oslo Opera House" },
    description: {
      en: "The Oslo Opera House is a modern waterfront landmark whose sloping roof invites visitors to walk up to the top.",
      de: "Das Opernhaus Oslo ist ein modernes Wahrzeichen am Wasser, dessen geneigtes Dach Besucher bis ganz nach oben einlädt.",
      hu: "Az Oslo Operaház modern vízparti látványosság, amelynek lejtős tetejére a látogatók fel is sétálhatnak.",
      ro: "Opera din Oslo este un reper modern de pe malul apei, iar acoperișul său înclinat invită vizitatorii să urce până sus."
    },
    facts: {
      en: ["It opened in 2008.", "Visitors can walk on the roof.", "It is designed to resemble a glacier rising from the water.", "It is one of Oslo's best-known modern buildings."],
      de: ["Es wurde 2008 eröffnet.", "Besucher können auf das Dach hinaufgehen.", "Sein Design erinnert an einen aus dem Wasser aufragenden Gletscher.", "Es ist eines der bekanntesten modernen Gebäude Oslos."],
      hu: ["2008-ban nyílt meg.", "A látogatók felmehetnek a tetőre.", "Dizájnja egy vízből kiemelkedő gleccserre emlékeztet.", "Oslo egyik legismertebb modern épülete."],
      ro: ["A fost deschisă în 2008.", "Vizitatorii pot urca pe acoperiș.", "Designul amintește de un ghețar care se ridică din apă.", "Este una dintre cele mai cunoscute clădiri moderne din Oslo."]
    },
    image: "/geo-images/norway/oslo-opera.webp",
  },
  {
    id: "cult-roros",
    type: "historical",
    parent: "norway",
    coords: [11.3848, 62.5748],
    name: { de: "Røros Bergstadt", hu: "Røros bányaváros", ro: "Orașul minier Røros", en: "Røros Mining Town" },
    description: {
      en: "Røros is a preserved mining town in central Norway, known for its wooden houses and historic copper-mining heritage.",
      de: "Røros ist eine erhaltene Bergbaustadt in Zentralnorwegen, bekannt für ihre Holzhäuser und das historische Kupferbergbau-Erbe.",
      hu: "Røros egy megőrzött bányaváros Közép-Norvégiában, híres faházairól és a történelmi rézbányászati örökségéről.",
      ro: "Røros este un oraș minier conservat în centrul Norvegiei, cunoscut pentru casele sale din lemn și moștenirea istorică a mineritului de cupru."
    },
    facts: {
      en: ["It is a UNESCO World Heritage site.", "Copper mining shaped the town for centuries.", "Many original wooden houses remain intact.", "It is known for its cold climate and winter charm."],
      de: ["Es ist UNESCO-Welterbe.", "Der Kupferbergbau prägte die Stadt über Jahrhunderte.", "Viele originale Holzhäuser sind erhalten.", "Es ist für sein kaltes Klima und seinen Wintercharme bekannt."],
      hu: ["UNESCO Világörökség.", "A rézbányászat évszázadokon át meghatározta a várost.", "Sok eredeti faház épen megmaradt.", "Hideg éghajlatáról és téli hangulatáról ismert."],
      ro: ["Este sit UNESCO.", "Mineritul de cupru a modelat orașul timp de secole.", "Multe case originale din lemn s-au păstrat intacte.", "Este cunoscut pentru clima rece și farmecul iernii."]
    },
    image: "/geo-images/norway/roros.webp",
  },
  {
    id: "hist-akershus-fortress",
    type: "historical",
    parent: "norway",
    coords: [10.7389, 59.9076],
    name: { de: "Akershus-Festung", hu: "Akershus-erőd", ro: "Fortăreața Akershus", en: "Akershus Fortress" },
    description: {
      en: "Akershus Fortress is Oslo's medieval stronghold and one of Norway's most important historical sites. It guarded the harbor and Oslofjord entrance for centuries. Later it served as a royal residence, prison, and military base. Today it is a key place for history walks, ceremonies, and city views.",
      de: "Die Akershus-Festung ist Oslos mittelalterliche Festung und eine der wichtigsten historischen Stätten Norwegens. Sie bewachte über Jahrhunderte den Hafen und den Eingang zum Oslofjord. Später diente sie als königliche Residenz, Gefängnis und Militärbasis. Heute ist sie ein wichtiger Ort für historische Spaziergänge, Zeremonien und Stadtblicke.",
      hu: "Az Akershus-erőd Oslo középkori erődítménye és Norvégia egyik legfontosabb történelmi helyszíne. Évszázadokon át őrizte a kikötőt és az Oslofjord bejáratát. Később királyi rezidenciaként, börtönként és katonai bázisként is szolgált. Ma történelmi séták, ceremóniák és városi panorámák népszerű helyszíne.",
      ro: "Fortăreața Akershus este bastionul medieval al Oslo-ului și unul dintre cele mai importante situri istorice din Norvegia. A apărat timp de secole portul și intrarea în Oslofjord. Mai târziu a servit ca reședință regală, închisoare și bază militară. Astăzi este un loc major pentru plimbări istorice, ceremonii și priveliști asupra orașului."
    },
    facts: {
      en: ["Built in the late 13th century.", "Overlooks Oslo harbor and the fjord entrance.", "Used as a royal residence and military fortress.", "Contains museums and ceremonial halls.", "One of Oslo's most visited heritage sites."],
      de: ["Im späten 13. Jahrhundert erbaut.", "Überblickt den Hafen von Oslo und die Fjordeinfahrt.", "Diente als königliche Residenz und Militärfestung.", "Enthält Museen und Zeremonienräume.", "Einer der meistbesuchten historischen Orte Oslos."],
      hu: ["A 13. század végén épült.", "Az Osloi kikötőre és a fjord bejáratára néz.", "Királyi rezidenciaként és katonai erődítményként is szolgált.", "Múzeumokat és ceremoniális termeket is tartalmaz.", "Oslo egyik leglátogatottabb örökségi helyszíne."],
      ro: ["A fost construită la sfârșitul secolului al XIII-lea.", "Domină portul Oslo și intrarea în fjord.", "A servit ca reședință regală și fortăreață militară.", "Include muzee și săli ceremoniale.", "Unul dintre cele mai vizitate situri de patrimoniu din Oslo."]
    },
    image: "/geo-images/norway/akershus-fortress.webp",
  },
  {
    id: "hist-bergenhus-fortress",
    type: "historical",
    parent: "norway",
    coords: [5.3203, 60.3990],
    name: { de: "Bergenhus-Festung", hu: "Bergenhus-erőd", ro: "Fortăreața Bergenhus", en: "Bergenhus Fortress" },
    description: {
      en: "Bergenhus Fortress is one of the oldest and best-known fortifications in Norway. It stands at the mouth of Bergen harbor and includes historic structures like Håkon's Hall and the Rosenkrantz Tower. The site reflects Bergen's medieval power and its role as a major coastal city. It remains a strong symbol of royal and military history in western Norway.",
      de: "Die Bergenhus-Festung ist eine der ältesten und bekanntesten Befestigungen Norwegens. Sie steht an der Mündung des Hafens von Bergen und umfasst historische Bauwerke wie die Håkonshalle und den Rosenkrantz-Turm. Der Ort spiegelt Bergens mittelalterliche Macht und seine Rolle als bedeutende Küstenstadt wider. Er bleibt ein starkes Symbol für die königliche und militärische Geschichte Westnorwegens.",
      hu: "A Bergenhus-erőd Norvégia egyik legrégebbi és legismertebb erődítménye. Bergen kikötőjének torkolatánál áll, és olyan történelmi építményeket foglal magában, mint a Håkon-terem és a Rosenkrantz-torony. A helyszín Bergen középkori erejét és fontos tengerparti városi szerepét tükrözi. Ma is erős jelképe Nyugat-Norvégia királyi és katonai történelmének.",
      ro: "Fortăreața Bergenhus este una dintre cele mai vechi și mai cunoscute fortificații din Norvegia. Se află la gura portului Bergen și include structuri istorice precum Sala lui Håkon și Turnul Rosenkrantz. Situl reflectă puterea medievală a orașului Bergen și rolul său de oraș major de coastă. Rămâne un simbol puternic al istoriei regale și militare din vestul Norvegiei."
    },
    facts: {
      en: ["Among Norway's oldest surviving fortifications.", "Includes Håkon's Hall and Rosenkrantz Tower.", "Guarded Bergen's harbor in medieval times.", "Important for royal and Hanseatic history.", "A landmark at the entrance to Bergen port."],
      de: ["Eine der ältesten erhaltenen Festungen Norwegens.", "Umfasst die Håkonshalle und den Rosenkrantz-Turm.", "Schützte im Mittelalter den Hafen von Bergen.", "Wichtig für königliche und hansische Geschichte.", "Ein Wahrzeichen am Eingang zum Hafen von Bergen."],
      hu: ["Norvégia egyik legrégebbi fennmaradt erődítménye.", "A Håkon-termet és a Rosenkrantz-tornyot is magában foglalja.", "A középkorban Bergen kikötőjét védte.", "Fontos a királyi és hanza történelem szempontjából.", "Jellegzetes pont Bergen kikötőjének bejáratánál."],
      ro: ["Printre cele mai vechi fortificații păstrate din Norvegia.", "Include Sala lui Håkon și Turnul Rosenkrantz.", "A apărat portul Bergenului în evul mediu.", "Important pentru istoria regală și hanseatică.", "Un reper la intrarea în portul Bergen."]
    },
    image: "/geo-images/norway/bergenhus-fortress.webp",
  },
  {
    id: "hist-gamlebyen-fredrikstad",
    type: "historical",
    parent: "norway",
    coords: [10.9473, 59.2054],
    name: { de: "Altstadt Fredrikstad", hu: "Fredrikstad óvárosa", ro: "Orașul vechi Fredrikstad", en: "Fredrikstad Old Town" },
    description: {
      en: "Fredrikstad Old Town is one of the best-preserved fortified towns in Northern Europe. Its star-shaped walls, canals, and cobblestone streets create a powerful historical atmosphere. The district grew around the river crossing and later became a showcase for urban heritage and small shops. It is a must-see for visitors interested in Norwegian military history and charming old streets.",
      de: "Die Altstadt Fredrikstad ist eine der am besten erhaltenen Festungsstädte Nordeuropas. Ihre sternförmigen Wälle, Kanäle und Kopfsteinpflasterstraßen schaffen eine eindrucksvolle historische Atmosphäre. Das Viertel wuchs an der Flussquerung und wurde später zu einem Schaufenster für städtisches Erbe und kleine Läden. Es ist ein Muss für Besucher, die sich für norwegische Militärgeschichte und schöne Altstadtgassen interessieren.",
      hu: "Fredrikstad óvárosa Észak-Európa egyik legjobban megőrzött erődvárosa. Csillag alakú falai, csatornái és macskaköves utcái erős történelmi hangulatot teremtenek. A negyed a folyóátkelő körül nőtt fel, majd városi örökségi és kisboltos központtá vált. Kihagyhatatlan azoknak, akiket érdekel a norvég katonai történelem és a bájos óváros.",
      ro: "Orașul vechi Fredrikstad este unul dintre cele mai bine păstrate orașe fortificate din Europa de Nord. Zidurile în formă de stea, canalele și străzile pavate creează o atmosferă istorică puternică. Cartierul s-a dezvoltat în jurul traversării râului și a devenit ulterior o vitrină a patrimoniului urban și a magazinelor mici. Este o oprire obligatorie pentru cei interesați de istoria militară norvegiană și de străzile vechi fermecătoare."
    },
    facts: {
      en: ["Founded as a fortified town in the 16th century.", "Known for star-shaped defensive walls.", "Among the best-preserved old towns in Scandinavia.", "Popular for cafés, galleries, and events.", "Linked to the Glomma river crossing."],
      de: ["Im 16. Jahrhundert als Festungsstadt gegründet.", "Bekannt für sternförmige Verteidigungsmauern.", "Eine der am besten erhaltenen Altstädte Skandinaviens.", "Beliebt für Cafés, Galerien und Veranstaltungen.", "Mit der Flussquerung der Glomma verbunden."],
      hu: ["A 16. században alapították erődvárosként.", "Csillag alakú védőfalaikról ismert.", "Skandinávia egyik legjobban megőrzött óvárosa.", "Kávézók, galériák és rendezvények népszerű helyszíne.", "A Glomma folyó átkelőhelyéhez kapcsolódik."],
      ro: ["Fondat în secolul al XVI-lea ca oraș fortificat.", "Cunoscut pentru zidurile defensive în formă de stea.", "Unul dintre cele mai bine păstrate orașe vechi din Scandinavia.", "Popular pentru cafenele, galerii și evenimente.", "Legat de traversarea râului Glomma."]
    },
    image: "/geo-images/norway/gamlebyen-fredrikstad.webp",
  },
  {
    id: "hist-stiklestad-battlefield",
    type: "historical",
    parent: "norway",
    coords: [11.4310, 63.5262],
    name: { de: "Schlachtfeld Stiklestad", hu: "Stiklestad csatamező", ro: "Câmpul de luptă Stiklestad", en: "Stiklestad Battlefield" },
    description: {
      en: "Stiklestad Battlefield is one of the most symbolic historical places in Norway. It is associated with the battle of 1030, where King Olaf Haraldsson fell and later became Saint Olav. The site is now a center for memory, heritage events, and historical storytelling. It attracts visitors who want to understand the roots of Norwegian statehood and Christianization.",
      de: "Das Schlachtfeld Stiklestad ist einer der symbolträchtigsten historischen Orte Norwegens. Es ist mit der Schlacht von 1030 verbunden, in der König Olaf Haraldsson fiel und später zum Heiligen Olav wurde. Der Ort ist heute ein Zentrum für Erinnerung, Geschichtsveranstaltungen und historische Erzählungen. Er zieht Besucher an, die die Wurzeln der norwegischen Staatlichkeit und Christianisierung verstehen wollen.",
      hu: "A Stiklestad csatamező Norvégia egyik legszimbolikusabb történelmi helyszíne. Az 1030-as csatához kapcsolódik, amelyben Haraldsson Olaf király elesett, majd később Szent Olává vált. A helyszín ma az emlékezet, a történelmi rendezvények és az elbeszélő történelem egyik fontos központja. Azokat vonzza, akik Norvégia államalapításának és keresztényítésének gyökereit szeretnék megérteni.",
      ro: "Câmpul de luptă Stiklestad este unul dintre cele mai simbolice locuri istorice din Norvegia. Este asociat cu bătălia din 1030, în care regele Olaf Haraldsson a căzut și a devenit ulterior Sfântul Olav. Situl este astăzi un centru major pentru comemorare, evenimente de patrimoniu și povești istorice. Atrage vizitatori care vor să înțeleagă originile statalității norvegiene și ale creștinării."
    },
    facts: {
      en: ["Site of the famous 1030 battle.", "Linked to Saint Olav, Norway's patron saint.", "Important for the country's Christian history.", "Hosts heritage events and stage productions.", "A key name in Norwegian national memory."],
      de: ["Ort der berühmten Schlacht von 1030.", "Mit dem Heiligen Olav, dem Schutzpatron Norwegens, verbunden.", "Wichtig für die christliche Geschichte des Landes.", "Veranstaltet Geschichts- und Bühnenaufführungen.", "Ein zentraler Name im norwegischen Nationalgedächtnis."],
      hu: ["Az 1030-as híres csata helyszíne.", "Szent Olafhoz, Norvégia védőszentjéhez kötődik.", "Fontos az ország keresztény történelme szempontjából.", "Örökségi események és színházi előadások helyszíne.", "Kiemelt név a norvég nemzeti emlékezetben."],
      ro: ["Locul celebrei bătălii din 1030.", "Legat de Sfântul Olav, patronul Norvegiei.", "Important pentru istoria creștină a țării.", "Găzduiește evenimente de patrimoniu și spectacole scenice.", "Un nume-cheie în memoria națională norvegiană."]
    },
    image: "/geo-images/norway/stiklestad-battlefield.webp",
  },
  {
    id: "hist-urnes-stave-church",
    type: "historical",
    parent: "norway",
    coords: [6.8450, 61.2965],
    name: { de: "Stabkirche Urnes", hu: "Urnesi fatemplom", ro: "Biserica de lemn Urnes", en: "Urnes Stave Church" },
    description: {
      en: "Urnes Stave Church is the oldest stave church in Norway and a UNESCO World Heritage treasure. It stands above the Lustrafjord and combines Viking-age carving traditions with Christian church design. The church is famous for its richly decorated portal and exceptional wooden craftsmanship. It is one of the clearest examples of how medieval Norway blended old symbols with new faith.",
      de: "Die Stabkirche Urnes ist die älteste Stabkirche Norwegens und ein UNESCO-Welterbe von besonderem Rang. Sie steht oberhalb des Lustrafjords und verbindet wikingerzeitliche Schnitztraditionen mit christlicher Kirchenarchitektur. Berühmt ist die Kirche für ihr reich verziertes Portal und ihre außergewöhnliche Holzbearbeitung. Sie ist eines der deutlichsten Beispiele dafür, wie das mittelalterliche Norwegen alte Symbole mit dem neuen Glauben verband.",
      hu: "Az Urnesi fatemplom Norvégia legrégebbi fatemploma és UNESCO-világörökségi kincs. A Lustrafjord fölött áll, és a viking kori faragási hagyományokat keresztény templomformával ötvözi. A templom gazdagon díszített kapujáról és kivételes faipari mesterségéről híres. Az egyik legtisztább példája annak, hogyan kapcsolta össze a középkori Norvégia a régi jelképeket az új hittel.",
      ro: "Biserica de lemn Urnes este cea mai veche biserică stave din Norvegia și o comoară UNESCO. Se află deasupra Lustrafjordului și combină tradițiile vikinge de sculptură cu designul unei biserici creștine. Este faimoasă pentru portalul bogat decorat și pentru măiestria excepțională în lemn. Este unul dintre cele mai clare exemple ale modului în care Norvegia medievală a unit simbolurile vechi cu noua credință."
    },
    facts: {
      en: ["The oldest surviving stave church in Norway.", "Listed as a UNESCO World Heritage site.", "Located above the Lustrafjord.", "Famous for its carved portal.", "Shows the blend of Viking and Christian motifs."],
      de: ["Die älteste erhaltene Stabkirche Norwegens.", "Als UNESCO-Welterbe eingetragen.", "Liegt oberhalb des Lustrafjords.", "Berühmt für ihr geschnitztes Portal.", "Zeigt die Verbindung von Wikinger- und christlichen Motiven."],
      hu: ["Norvégia legrégebbi fennmaradt fatemploma.", "UNESCO-világörökségi helyszín.", "A Lustrafjord fölött található.", "Faragott kapujáról híres.", "A viking és keresztény motívumok keverékét mutatja."],
      ro: ["Cea mai veche biserică stave păstrată din Norvegia.", "Inclusă în Patrimoniul Mondial UNESCO.", "Situată deasupra Lustrafjordului.", "Celebră pentru portalul sculptat.", "Arată îmbinarea motivelor vikinge cu cele creștine."]
    },
    image: "/geo-images/norway/urnes-stave-church.webp",
  },
  {
    id: "hist-hakons-hall",
    type: "historical",
    parent: "norway",
    coords: [5.3170, 60.3985],
    name: { de: "Håkonshalle", hu: "Håkon-terem", ro: "Sala lui Håkon", en: "Håkon's Hall" },
    description: {
      en: "Håkon's Hall is a grand medieval stone hall in Bergen and a rare survivor from Norway's royal past. It was built in the 13th century for banquets, ceremonies, and political power. The hall stands within the Bergenhus Fortress area and connects visitors directly to the city's royal and maritime history. It remains one of the most important historical interiors in western Norway.",
      de: "Die Håkonshalle ist eine große mittelalterliche Steinhalle in Bergen und ein seltener Überrest aus Norwegens königlicher Vergangenheit. Sie wurde im 13. Jahrhundert für Bankette, Zeremonien und politische Macht errichtet. Die Halle liegt im Bereich der Bergenhus-Festung und verbindet Besucher direkt mit der königlichen und maritimen Geschichte der Stadt. Sie bleibt eines der wichtigsten historischen Innenräume Westnorwegens.",
      hu: "A Håkon-terem Bergen nagy középkori kőcsarnoka és Norvégia királyi múltjának ritka fennmaradt emléke. A 13. században épült lakomák, ceremóniák és politikai hatalom számára. A terem a Bergenhus-erőd területén áll, és közvetlenül kapcsolja össze a látogatókat a város királyi és tengeri történelmével. Nyugat-Norvégia egyik legfontosabb történelmi belső tere.",
      ro: "Sala lui Håkon este o mare sală medievală din piatră în Bergen și o supraviețuitoare rară a trecutului regal al Norvegiei. A fost construită în secolul al XIII-lea pentru banchete, ceremonii și putere politică. Sala se află în zona Fortăreței Bergenhus și leagă vizitatorii direct de istoria regală și maritimă a orașului. Rămâne unul dintre cele mai importante interioare istorice din vestul Norvegiei."
    },
    facts: {
      en: ["Built in the 13th century.", "Part of the Bergenhus Fortress complex.", "Used for royal banquets and ceremonies.", "One of Bergen's key medieval buildings.", "A major symbol of royal Bergen."],
      de: ["Im 13. Jahrhundert erbaut.", "Teil des Bergenhus-Festungskomplexes.", "Diente königlichen Banketten und Zeremonien.", "Eines der wichtigsten mittelalterlichen Gebäude Bergens.", "Ein wichtiges Symbol des königlichen Bergen."],
      hu: ["A 13. században épült.", "A Bergenhus-erőd együttesének része.", "Királyi bankettek és ceremóniák helyszíne volt.", "Bergen egyik kulcsfontosságú középkori épülete.", "A királyi Bergen fontos jelképe."],
      ro: ["Construită în secolul al XIII-lea.", "Face parte din complexul Fortăreței Bergenhus.", "Folosită pentru banchete și ceremonii regale.", "Una dintre clădirile medievale-cheie ale Bergenului.", "Un simbol major al Bergenului regal."]
    },
    image: "/geo-images/norway/hakons-hall.webp",
  },
  {
    id: "hist-kongsberg-silver-mines",
    type: "historical",
    parent: "norway",
    coords: [9.6580, 59.6720],
    name: { de: "Silberminen Kongsberg", hu: "Kongsbergi ezüstbányák", ro: "Minele de argint Kongsberg", en: "Kongsberg Silver Mines" },
    description: {
      en: "The Kongsberg Silver Mines tell the story of Norway's industrial and royal mining past. For centuries, silver extraction shaped the town, its economy, and its population. The mining landscape now serves as a historic attraction with tours and preserved structures. It is a strong example of how mineral wealth influenced Norwegian settlement and state development.",
      de: "Die Silberminen von Kongsberg erzählen die Geschichte von Norwegens industrieller und königlicher Bergbauvergangenheit. Über Jahrhunderte prägte der Silberabbau die Stadt, ihre Wirtschaft und ihre Bevölkerung. Die Bergbaulandschaft dient heute als historische Attraktion mit Führungen und erhaltenen Bauwerken. Sie ist ein starkes Beispiel dafür, wie Bodenschätze die norwegische Besiedlung und Staatsentwicklung beeinflussten.",
      hu: "A Kongsbergi ezüstbányák Norvégia ipari és királyi bányászati múltját mesélik el. Évszázadokon át az ezüstkitermelés határozta meg a várost, a gazdaságot és a népességet. A bányavidék ma történelmi látványosságként működik túrákkal és megőrzött építményekkel. Erős példája annak, hogyan formálták az ásványkincsek a norvég településhálózatot és államfejlődést.",
      ro: "Minele de argint Kongsberg spun povestea trecutului industrial și regal al Norvegiei. Timp de secole, extracția argintului a modelat orașul, economia și populația sa. Peisajul minier servește astăzi ca atracție istorică, cu tururi și structuri păstrate. Este un exemplu puternic al modului în care bogăția minerală a influențat așezarea și dezvoltarea statului norvegian."
    },
    facts: {
      en: ["Silver mining began in the 17th century.", "Kongsberg was a major royal mining town.", "Historic mine tunnels are still part of the site.", "The area is now visited through guided tours.", "A key industrial heritage destination in Norway."],
      de: ["Der Silberbergbau begann im 17. Jahrhundert.", "Kongsberg war eine bedeutende königliche Bergbaustadt.", "Historische Stollen sind noch Teil des Areals.", "Das Gelände wird heute per Führung besucht.", "Ein wichtiges Industrierbe-Ziel in Norwegen."],
      hu: ["Az ezüstbányászat a 17. században kezdődött.", "Kongsberg fontos királyi bányaváros volt.", "A történelmi tárnák ma is a helyszín részei.", "A területet ma vezetett túrákon lehet bejárni.", "Norvégia egyik fontos ipari örökségi célpontja."],
      ro: ["Mineritul de argint a început în secolul al XVII-lea.", "Kongsberg a fost un important oraș minier regal.", "Galerii miniere istorice fac încă parte din sit.", "Zona este vizitată astăzi prin tururi ghidate.", "O destinație importantă de patrimoniu industrial în Norvegia."]
    },
    image: "/geo-images/norway/kongsberg-silver-mines.webp",
  },
  {
    id: "hist-vardohus-fortress",
    type: "historical",
    parent: "norway",
    coords: [31.1050, 70.3700],
    name: { de: "Vardøhus-Festung", hu: "Vardøhus-erőd", ro: "Fortăreața Vardøhus", en: "Vardøhus Fortress" },
    description: {
      en: "Vardøhus Fortress sits in the far north and is often described as Norway's northernmost fortress. The site has guarded the Barents Sea coast for centuries and reflects the strategic importance of the Arctic frontier. Its history includes military defense, Arctic administration, and dramatic northern weather. It is a striking historical stop for travelers heading toward the edge of Europe.",
      de: "Die Vardøhus-Festung liegt im hohen Norden und wird oft als Norwegens nördlichste Festung beschrieben. Der Ort bewacht seit Jahrhunderten die Küste der Barentssee und spiegelt die strategische Bedeutung der arktischen Grenze wider. Seine Geschichte umfasst militärische Verteidigung, arktische Verwaltung und dramatisches Nordwetter. Sie ist ein eindrucksvoller historischer Halt für Reisende am Rand Europas.",
      hu: "A Vardøhus-erőd a távoli északon áll, és gyakran Norvégia legészakibb erődjének nevezik. A helyszín évszázadok óta őrzi a Barents-tenger partját, és az arktiszi határ stratégiai jelentőségét tükrözi. Története katonai védelemről, sarkvidéki közigazgatásról és drámai északi időjárásról szól. Látványos történelmi megálló az Európa peremére tartó utazóknak.",
      ro: "Fortăreața Vardøhus se află în nordul îndepărtat și este adesea descrisă drept cea mai nordică fortăreață a Norvegiei. Situl a apărat țărmul Mării Barents timp de secole și reflectă importanța strategică a frontierei arctice. Istoria sa include apărare militară, administrație arctică și vreme nordică dramatică. Este o oprire istorică impresionantă pentru călătorii care merg spre marginea Europei."
    },
    facts: {
      en: ["Often called Norway's northernmost fortress.", "Controls a historic Arctic coastal position.", "Has been rebuilt and strengthened over time.", "Linked to military and administrative history.", "A landmark near the Barents Sea."],
      de: ["Oft als Norwegens nördlichste Festung bezeichnet.", "Kontrolliert eine historische arktische Küstenlage.", "Wurde im Lauf der Zeit mehrfach wiederaufgebaut und verstärkt.", "Mit militärischer und administrativer Geschichte verbunden.", "Ein Wahrzeichen nahe der Barentssee."],
      hu: ["Gyakran Norvégia legészakibb erődjének nevezik.", "Történelmi sarkvidéki parti helyzetet őriz.", "Az idők során többször újjáépítették és megerősítették.", "Katonai és közigazgatási történelemhez kötődik.", "Jellegzetes pont a Barents-tenger közelében."],
      ro: ["Adesea numită cea mai nordică fortăreață a Norvegiei.", "Controlează o poziție istorică de coastă arctică.", "A fost reconstruită și întărită de-a lungul timpului.", "Legată de istoria militară și administrativă.", "Un reper lângă Marea Barents."]
    },
    image: "/geo-images/norway/vardohus-fortress.webp",
  },
  {
    id: "landmark-oslo-city-hall",
    type: "landmark",
    parent: "norway",
    coords: [10.7339, 59.9135],
    name: { de: "Rathaus Oslo", hu: "Oslo városháza", ro: "Primăria Oslo", en: "Oslo City Hall" },
    description: {
      en: "Oslo City Hall is one of the capital's most recognizable buildings and a major landmark on the waterfront. It is known for its brick towers, huge interior murals, and the Nobel Peace Prize ceremony. The building combines civic power with public art and a strong modernist identity. For visitors, it is both a photo spot and a key place in Norway's public life.",
      de: "Das Rathaus Oslo ist eines der bekanntesten Gebäude der Hauptstadt und ein bedeutendes Wahrzeichen am Wasser. Es ist für seine Backsteintürme, großen Innenfresken und die Friedensnobelpreis-Zeremonie bekannt. Das Gebäude verbindet kommunale Macht mit öffentlicher Kunst und einer starken modernistischen Identität. Für Besucher ist es sowohl ein Fotomotiv als auch ein wichtiger Ort des norwegischen öffentlichen Lebens.",
      hu: "Az Osloi városháza a főváros egyik legismertebb épülete és fontos vízparti jelkép. Téglatornyairól, hatalmas belső falfestményeiről és a Nobel-békedíj átadásáról ismert. Az épület a közhatalmat, a közművészetet és az erős modernista arculatot egyesíti. A látogatóknak egyszerre fotópont és a norvég közélet kulcsterülete.",
      ro: "Primăria Oslo este una dintre cele mai recunoscute clădiri ale capitalei și un reper major pe faleză. Este cunoscută pentru turnurile sale din cărămidă, picturile murale interioare imense și ceremonia Premiului Nobel pentru Pace. Clădirea combină puterea civică cu arta publică și o identitate modernistă puternică. Pentru vizitatori, este atât un loc de fotografiat, cât și un punct-cheie în viața publică a Norvegiei."
    },
    facts: {
      en: ["The Nobel Peace Prize ceremony is held here.", "Completed in the 1950s.", "Famous for its large interior murals.", "Located by the Oslo waterfront.", "A key symbol of the capital's civic identity."],
      de: ["Hier findet die Friedensnobelpreis-Zeremonie statt.", "In den 1950er-Jahren fertiggestellt.", "Berühmt für große Wandgemälde im Inneren.", "Am Wasserfront von Oslo gelegen.", "Ein wichtiges Symbol der bürgerlichen Identität der Hauptstadt."],
      hu: ["Itt tartják a Nobel-békedíj átadását.", "Az 1950-es években készült el.", "Hatalmas belső falfestményeiről híres.", "Az Osloi vízparton áll.", "A főváros polgári identitásának fontos jelképe."],
      ro: ["Aici are loc ceremonia Premiului Nobel pentru Pace.", "A fost finalizată în anii 1950.", "Celebră pentru picturile murale interioare mari.", "Situată pe malul apei în Oslo.", "Un simbol-cheie al identității civice a capitalei."]
    },
    image: "/geo-images/norway/oslo-city-hall.webp",
  },
  {
    id: "landmark-royal-palace-oslo",
    type: "landmark",
    parent: "norway",
    coords: [10.7276, 59.9170],
    name: { de: "Königspalast Oslo", hu: "Oslo királyi palota", ro: "Palatul Regal Oslo", en: "Royal Palace Oslo" },
    description: {
      en: "The Royal Palace is the official residence of the Norwegian monarch and a central landmark in Oslo. It stands at the end of Karl Johans gate and is surrounded by a large public park. The palace is strongly linked to ceremonies, state visits, and national symbolism. It is a must-see for anyone exploring the political heart of Norway's capital.",
      de: "Der Königspalast ist die offizielle Residenz des norwegischen Monarchen und ein zentrales Wahrzeichen Oslos. Er steht am Ende der Karl Johans gate und ist von einem großen öffentlichen Park umgeben. Der Palast ist eng mit Zeremonien, Staatsbesuchen und nationaler Symbolik verbunden. Er ist ein Muss für alle, die das politische Herz der norwegischen Hauptstadt erkunden.",
      hu: "A királyi palota a norvég uralkodó hivatalos rezidenciája és Oslo központi jelképépülete. A Karl Johans gate végén áll, és nagy közpark veszi körül. A palota szorosan kapcsolódik ceremóniákhoz, állami látogatásokhoz és nemzeti szimbolikához. Kihagyhatatlan azok számára, akik Norvégia fővárosának politikai központját fedezik fel.",
      ro: "Palatul Regal este reședința oficială a monarhului norvegian și un reper central în Oslo. Se află la capătul bulevardului Karl Johans gate și este înconjurat de un mare parc public. Palatul este strâns legat de ceremonii, vizite de stat și simbolism național. Este o oprire obligatorie pentru oricine explorează inima politică a capitalei Norvegiei."
    },
    facts: {
      en: ["Official residence of Norway's monarch.", "Located at the top of Karl Johans gate.", "Surrounded by Palace Park.", "Open to visitors in the summer season.", "Important for national ceremonies and protocol."],
      de: ["Offizielle Residenz des norwegischen Monarchen.", "Am Ende der Karl Johans gate gelegen.", "Vom Schlosspark umgeben.", "Im Sommer für Besucher geöffnet.", "Wichtig für nationale Zeremonien und Protokoll."],
      hu: ["Norvégia uralkodójának hivatalos rezidenciája.", "A Karl Johans gate felső végén áll.", "A Palotapark veszi körül.", "Nyáron látogatható.", "Fontos nemzeti ceremóniák és protokoll szempontjából."],
      ro: ["Reședința oficială a monarhului Norvegiei.", "Situat la capătul bulevardului Karl Johans gate.", "Înconjurat de Parcul Palatului.", "Deschis vizitatorilor în sezonul de vară.", "Important pentru ceremonii naționale și protocol."]
    },
    image: "/geo-images/norway/royal-palace-oslo.webp",
  },
  {
    id: "landmark-munch-museum",
    type: "landmark",
    parent: "norway",
    coords: [10.7579, 59.9075],
    name: { de: "MUNCH-Museum", hu: "MUNCH Múzeum", ro: "Muzeul MUNCH", en: "MUNCH Museum" },
    description: {
      en: "The MUNCH Museum is Oslo's flagship art museum and a major attraction for modern culture travelers. It houses the world's most important collection of works by Edvard Munch, including versions of The Scream. The building itself is a striking modern landmark in the Bjørvika waterfront district. It gives Oslo strong visibility in global art, design, and museum tourism.",
      de: "Das MUNCH-Museum ist Oslos bedeutendstes Kunstmuseum und eine wichtige Attraktion für Reisende mit Interesse an moderner Kultur. Es beherbergt die weltweit wichtigste Sammlung von Werken Edvard Munchs, einschließlich Versionen des Schreis. Das Gebäude selbst ist ein markantes modernes Wahrzeichen im Bjørvika-Wasserfrontviertel. Es verleiht Oslo starke Sichtbarkeit im weltweiten Kunst-, Design- und Museumstourismus.",
      hu: "A MUNCH Múzeum Oslo zászlóshajó művészeti múzeuma és a modern kultúra utazóinak fontos célpontja. A világ legjelentősebb Edvard Munch-gyűjteményét őrzi, köztük A sikoly változatait. Maga az épület is feltűnő modern jelkép a Bjørvika vízparti negyedben. Oslo számára erős nemzetközi láthatóságot ad a művészet, design és múzeumi turizmus terén.",
      ro: "Muzeul MUNCH este muzeul de artă emblematic al Oslo-ului și o atracție majoră pentru călătorii interesați de cultura modernă. Adăpostește cea mai importantă colecție din lume de lucrări ale lui Edvard Munch, inclusiv versiuni ale tabloului Țipătul. Clădirea în sine este un reper modern impresionant în cartierul de pe faleză Bjørvika. Oferă Oslo-ului vizibilitate puternică în turismul global de artă, design și muzee."
    },
    facts: {
      en: ["Dedicated to Edvard Munch's legacy.", "Located in the Bjørvika waterfront area.", "Includes major versions of The Scream.", "One of Norway's leading art destinations.", "A key new landmark for modern Oslo."],
      de: ["Edvard Munchs Vermächtnis gewidmet.", "Im Wasserfrontviertel Bjørvika gelegen.", "Enthält wichtige Versionen des Schreis.", "Eines der führenden Kunstziele Norwegens.", "Ein wichtiges neues Wahrzeichen des modernen Oslo."],
      hu: ["Edvard Munch örökségének szentelve.", "A Bjørvika vízparti területen található.", "A Sikoly fontos változatait is bemutatja.", "Norvégia egyik vezető művészeti célpontja.", "A modern Oslo fontos új jelképe."],
      ro: ["Dedicat moștenirii lui Edvard Munch.", "Situat în zona de faleză Bjørvika.", "Include versiuni importante ale tabloului Țipătul.", "Una dintre principalele destinații de artă din Norvegia.", "Un nou reper cheie pentru Oslo-ul modern."]
    },
    image: "/geo-images/norway/munch-museum.webp",
  },
  {
    id: "landmark-holmenkollen-ski-jump",
    type: "landmark",
    parent: "norway",
    coords: [10.6658, 59.9629],
    name: { de: "Holmenkollen-Schanze", hu: "Holmenkollen síugrósánc", ro: "Trambulina Holmenkollen", en: "Holmenkollen Ski Jump" },
    description: {
      en: "Holmenkollen Ski Jump is one of Norway's most famous sports landmarks and a signature view over Oslo. It has hosted major ski events for generations and remains central to winter sports culture. The hilltop location also includes a ski museum and panoramic views of the city and fjord. Holmenkollen is both a sporting icon and a tourist draw above the capital.",
      de: "Die Holmenkollen-Schanze ist eines der berühmtesten Sportwahrzeichen Norwegens und ein markanter Blick über Oslo. Sie ist seit Generationen Schauplatz großer Skiveranstaltungen und bleibt zentral für die Wintersportkultur. Die Lage auf dem Hügel umfasst auch ein Skimuseum und Panoramablicke auf die Stadt und den Fjord. Holmenkollen ist sowohl ein Sport- als auch ein Touristenmagnet oberhalb der Hauptstadt.",
      hu: "A Holmenkollen síugrósánc Norvégia egyik leghíresebb sportjelképe és meghatározó kilátópont Oslo fölött. Generációk óta nagy síesemények helyszíne, és ma is a téli sportkultúra központja. A dombtetőn símúzeum és panoráma is található a városra és a fjordra. Holmenkollen egyszerre sportikon és turisztikai vonzerő a főváros felett.",
      ro: "Trambulina Holmenkollen este unul dintre cele mai faimoase repere sportive ale Norvegiei și oferă o priveliște emblematică asupra Oslo-ului. A găzduit evenimente importante de schi de generații și rămâne centrală pentru cultura sporturilor de iarnă. Locația de pe deal include și un muzeu al schiului și panorame asupra orașului și fjordului. Holmenkollen este atât o icoană sportivă, cât și un punct de atracție turistică deasupra capitalei."
    },
    facts: {
      en: ["A classic site for ski jumping in Norway.", "Includes the Holmenkollen Ski Museum.", "Provides panoramic views over Oslo.", "Central to Nordic skiing history.", "Frequently used for world-class competitions."],
      de: ["Ein klassischer Ort des Skispringens in Norwegen.", "Enthält das Holmenkollen-Skimuseum.", "Bietet Panoramablicke über Oslo.", "Zentral für die Geschichte des nordischen Skisports.", "Wird häufig für Wettbewerbe auf Weltklasseniveau genutzt."],
      hu: ["A síugrás klasszikus norvégiai helyszíne.", "Tartalmazza a Holmenkollen Símúzeumot.", "Panorámát nyújt Oslo fölött.", "Központi helyszín az északi síelés történetében.", "Gyakran rendeznek itt világszínvonalú versenyeket."],
      ro: ["Un sit clasic pentru sărituri cu schiurile în Norvegia.", "Include Muzeul de Schi Holmenkollen.", "Oferă vederi panoramice asupra Oslo-ului.", "Central în istoria schiului nordic.", "Folosit frecvent pentru competiții de nivel mondial."]
    },
    image: "/geo-images/norway/holmenkollen-ski-jump.webp",
  },
  {
    id: "landmark-fram-museum",
    type: "landmark",
    parent: "norway",
    coords: [10.6813, 59.9089],
    name: { de: "Fram-Museum", hu: "Fram Múzeum", ro: "Muzeul Fram", en: "Fram Museum" },
    description: {
      en: "The Fram Museum on Bygdøy tells the story of Norwegian polar exploration through the original ship Fram. Visitors can walk around the vessel and learn about the expeditions of Fridtjof Nansen, Otto Sverdrup, and Roald Amundsen. The museum is one of Oslo's strongest links to Arctic and Antarctic history. It is a highly searchable stop for anyone interested in exploration, polar travel, and national adventure stories.",
      de: "Das Fram-Museum auf Bygdøy erzählt die Geschichte norwegischer Polarforschung anhand des Originals Schiff Fram. Besucher können das Schiff besichtigen und mehr über die Expeditionen von Fridtjof Nansen, Otto Sverdrup und Roald Amundsen erfahren. Das Museum ist eine der stärksten Verbindungen Oslos zur Arktis- und Antarktisgeschichte. Es ist ein stark gesuchter Ort für alle, die sich für Entdeckungen, Polarreisen und nationale Abenteuer interessieren.",
      hu: "A Bygdøy-félszigeten álló Fram Múzeum a norvég sarkkutatás történetét meséli el az eredeti Fram hajón keresztül. A látogatók körbejárhatják a hajót, és megismerhetik Fridtjof Nansen, Otto Sverdrup és Roald Amundsen expedícióit. A múzeum Oslo egyik legerősebb kapcsolata az arktiszi és antarktiszi történelemmel. Erős keresési célpont mindazoknak, akiket az expedíciók, a poláris utazás és a nemzeti kalandtörténetek érdekelnek.",
      ro: "Muzeul Fram din Bygdøy spune povestea explorării polare norvegiene prin nava originală Fram. Vizitatorii pot merge în jurul vasului și pot afla despre expedițiile lui Fridtjof Nansen, Otto Sverdrup și Roald Amundsen. Muzeul este una dintre cele mai puternice legături ale Oslo-ului cu istoria Arcticii și Antarcticii. Este o oprire foarte căutată pentru cei interesați de explorare, călătorii polare și povești naționale de aventură."
    },
    facts: {
      en: ["Centered on the original polar ship Fram.", "Tells the story of Norwegian Arctic expeditions.", "Associated with Nansen and Amundsen.", "Located on the Bygdøy museum peninsula.", "Popular among history and science tourists."],
      de: ["Im Mittelpunkt steht das originale Polarschiff Fram.", "Erzählt die Geschichte norwegischer Arktisexpeditionen.", "Mit Nansen und Amundsen verbunden.", "Auf der Museumsinsel Bygdøy gelegen.", "Beliebt bei Geschichts- und Wissenschaftstouristen."],
      hu: ["Az eredeti Fram polárhajó köré épül.", "A norvég arktiszi expedíciók történetét meséli el.", "Nansenhez és Amundsenhez kötődik.", "A Bygdøy múzeumfélszigeten található.", "Népszerű a történelem- és tudományturisták körében."],
      ro: ["Concentrat pe nava polară originală Fram.", "Spune povestea expedițiilor arctice norvegiene.", "Asociat cu Nansen și Amundsen.", "Situat pe peninsula muzeelor Bygdøy.", "Popular printre turiștii interesați de istorie și știință."]
    },
    image: "/geo-images/norway/fram-museum.webp",
  },
  {
    id: "landmark-nationaltheatret",
    type: "landmark",
    parent: "norway",
    coords: [10.7349, 59.9150],
    name: { de: "Nationaltheater Oslo", hu: "Nemzeti Színház Oslo", ro: "Teatrul Național Oslo", en: "Nationaltheatret" },
    description: {
      en: "Nationaltheatret is one of Norway's most important theatre landmarks and a cultural anchor in central Oslo. The building is closely tied to Norwegian drama, language, and literary identity. Its location near the royal avenue makes it a prominent part of the capital's historic city center. For culture searches, it is a classic Oslo landmark with strong national meaning.",
      de: "Das Nationaltheater ist eines der wichtigsten Theaterwahrzeichen Norwegens und ein kultureller Anker im Zentrum Oslos. Das Gebäude ist eng mit dem norwegischen Drama, der Sprache und der literarischen Identität verbunden. Seine Lage nahe der Königsstraße macht es zu einem markanten Teil des historischen Stadtzentrums. Für Kultursuchen ist es ein klassisches Osloer Wahrzeichen mit starker nationaler Bedeutung.",
      hu: "A Nationaltheatret Norvégia egyik legfontosabb színházi jelképe és Oslo központi kulturális támasza. Az épület szorosan kötődik a norvég drámához, nyelvhez és irodalmi identitáshoz. A királyi sugárút közelében fekvő helyzete miatt a történelmi belváros kiemelkedő része. Kulturális keresésekben klasszikus osloi jelkép, erős nemzeti jelentéssel.",
      ro: "Nationaltheatret este unul dintre cele mai importante repere teatrale ale Norvegiei și un pilon cultural în centrul Oslo-ului. Clădirea este strâns legată de drama norvegiană, limbă și identitatea literară. Locația sa aproape de bulevardul regal o face o parte proeminentă a centrului istoric al capitalei. Pentru căutările culturale, este un reper clasic al Oslo-ului cu o semnificație națională puternică."
    },
    facts: {
      en: ["A major stage for Norwegian drama.", "Located in central Oslo near the main avenue.", "Strongly linked to literary heritage.", "One of the capital's classic cultural institutions.", "Popular stop in downtown city tours."],
      de: ["Eine wichtige Bühne für norwegisches Drama.", "Im Zentrum Oslos nahe der Hauptavenue gelegen.", "Stark mit dem literarischen Erbe verbunden.", "Eine der klassischen Kultureinrichtungen der Hauptstadt.", "Beliebter Halt bei Stadttouren durch die Innenstadt."],
      hu: ["A norvég dráma fontos színpada.", "Oslo központjában, a fő sugárút közelében található.", "Erősen kötődik az irodalmi örökséghez.", "A főváros egyik klasszikus kulturális intézménye.", "Népszerű megálló a belvárosi városnézéseken."],
      ro: ["O scenă majoră pentru drama norvegiană.", "Situat în centrul Oslo-ului, aproape de bulevardul principal.", "Puternic legat de moștenirea literară.", "Una dintre instituțiile culturale clasice ale capitalei.", "O oprire populară în tururile din centrul orașului."]
    },
    image: "/geo-images/norway/nationaltheatret.webp",
  },
  {
    id: "landmark-arctic-cathedral",
    type: "landmark",
    parent: "norway",
    coords: [18.9570, 69.6489],
    name: { de: "Arktische Kathedrale", hu: "Északi-sarki katedrális", ro: "Catedrala Arctică", en: "Arctic Cathedral" },
    description: {
      en: "The Arctic Cathedral is Tromsø's most iconic building and one of the most photographed landmarks in northern Norway. Its sharp triangular design and white surfaces echo snow, ice, and the Arctic landscape. The church is famous for concerts, midnight sun atmospheres, and its strong visual presence across the fjord. It is a perfect landmark for searches about Tromsø, architecture, and Arctic travel.",
      de: "Die Arktische Kathedrale ist das ikonischste Gebäude Tromsøs und eines der meistfotografierten Wahrzeichen Nordnorwegens. Ihr scharfes dreieckiges Design und die weißen Flächen erinnern an Schnee, Eis und die arktische Landschaft. Die Kirche ist berühmt für Konzerte, Mitternachtssonnen-Atmosphäre und ihre starke visuelle Präsenz über dem Fjord. Sie ist ein perfektes Wahrzeichen für Suchen nach Tromsø, Architektur und Arktisreisen.",
      hu: "Az Északi-sarki katedrális Tromsø legikonikusabb épülete és Észak-Norvégia egyik legtöbbet fotózott jelképhelye. Éles, háromszög alakú formája és fehér felülete a havat, jeget és az arktiszi tájat idézi. A templom híres koncertekről, éjféli nap hangulatról és erős vizuális jelenlétéről a fjord fölött. Tökéletes kulcsszó Tromsø, építészet és sarkvidéki utazás témákhoz.",
      ro: "Catedrala Arctică este cea mai iconică clădire din Tromsø și unul dintre cele mai fotografiate repere din nordul Norvegiei. Designul său triunghiular ascuțit și suprafețele albe evocă zăpada, gheața și peisajul arctic. Biserica este celebră pentru concerte, atmosfera nopții de vară și prezența ei vizuală puternică deasupra fjordului. Este un reper perfect pentru căutări despre Tromsø, arhitectură și călătorii arctice."
    },
    facts: {
      en: ["A symbol of Tromsø's skyline.", "Known for its striking triangular shape.", "Hosts popular midnight sun concerts.", "Opened in the 1960s.", "A major northern Norway photo icon."],
      de: ["Ein Symbol der Skyline von Tromsø.", "Bekannt für seine markante Dreiecksform.", "Veranstaltet beliebte Mitternachtssonnen-Konzerte.", "In den 1960er-Jahren eröffnet.", "Ein wichtiges Fotowahrzeichen Nordnorwegens."],
      hu: ["Tromsø látképének egyik jelképe.", "Látványos háromszög alakjáról ismert.", "Népszerű éjféli nap koncertjeinek helyszíne.", "Az 1960-as években nyílt meg.", "Észak-Norvégia egyik fontos fotóikonja."],
      ro: ["Un simbol al orizontului din Tromsø.", "Cunoscută pentru forma sa triunghiulară spectaculoasă.", "Găzduiește concerte populare sub soarele de la miezul nopții.", "Deschisă în anii 1960.", "O icoană foto majoră din nordul Norvegiei."]
    },
    image: "/geo-images/norway/arctic-cathedral.webp",
  },
  {
    id: "landmark-astrup-fearnley-museum",
    type: "landmark",
    parent: "norway",
    coords: [10.7209, 59.9076],
    name: { de: "Astrup Fearnley Museum", hu: "Astrup Fearnley Múzeum", ro: "Muzeul Astrup Fearnley", en: "Astrup Fearnley Museum" },
    description: {
      en: "The Astrup Fearnley Museum is a contemporary art landmark on Oslo's Tjuvholmen waterfront. Its architecture and setting make it one of the capital's most visible modern museum addresses. The collection focuses on contemporary and international art with a strong Oslo profile. It is a useful landmark for searches combining art, architecture, and the urban waterfront.",
      de: "Das Astrup Fearnley Museum ist ein Wahrzeichen der zeitgenössischen Kunst am Tjuvholmen-Wasserfront in Oslo. Architektur und Lage machen es zu einer der sichtbarsten modernen Museumsadressen der Hauptstadt. Die Sammlung konzentriert sich auf zeitgenössische und internationale Kunst mit starkem Oslo-Bezug. Es ist ein nützliches Wahrzeichen für Suchen, die Kunst, Architektur und die urbane Uferzone verbinden.",
      hu: "Az Astrup Fearnley Múzeum kortárs művészeti jelkép a Tjuvholmen vízpartján, Oslóban. Az építészet és az elhelyezkedés a főváros egyik leglátványosabb modern múzeumi címévé teszi. A gyűjtemény kortárs és nemzetközi művészetre összpontosít, erős osloi profillal. Hasznos kulcsszó a művészetet, építészetet és városi vízpartot összekapcsoló keresésekhez.",
      ro: "Muzeul Astrup Fearnley este un reper al artei contemporane pe faleza Tjuvholmen din Oslo. Arhitectura și amplasarea îl fac una dintre cele mai vizibile adrese muzeale moderne ale capitalei. Colecția se concentrează pe artă contemporană și internațională, cu un profil puternic al Oslo-ului. Este un reper util pentru căutări care combină arta, arhitectura și faleza urbană."
    },
    facts: {
      en: ["A major contemporary art museum in Oslo.", "Located on the Tjuvholmen waterfront.", "Designed as a modern architectural statement.", "Focuses on international contemporary art.", "Close to the harbor and city promenade."],
      de: ["Ein wichtiges Museum für zeitgenössische Kunst in Oslo.", "Am Wasserfrontviertel Tjuvholmen gelegen.", "Als modernes architektonisches Statement entworfen.", "Konzentriert sich auf internationale zeitgenössische Kunst.", "Nahe am Hafen und an der Uferpromenade."],
      hu: ["Oslo egyik fontos kortárs művészeti múzeuma.", "A Tjuvholmen vízparton található.", "Modern építészeti állításként tervezték.", "Nemzetközi kortárs művészetre fókuszál.", "Közel van a kikötőhöz és a sétányhoz."],
      ro: ["Un muzeu major de artă contemporană în Oslo.", "Situat pe faleza Tjuvholmen.", "Proiectat ca o declarație arhitecturală modernă.", "Se concentrează pe arta contemporană internațională.", "Aproape de port și de promenada orașului."]
    },
    image: "/geo-images/norway/astrup-fearnley-museum.webp",
  },
  {
    id: "port-oslo",
    type: "port",
    parent: "norway",
    coords: [10.7397, 59.9058],
    name: { de: "Hafen Oslo", hu: "Oslo kikötő", ro: "Portul Oslo", en: "Port of Oslo" },
    description: {
      en: "The Port of Oslo is the capital's maritime gateway and an important hub for cargo, ferries, and cruises. It supports the city's logistics, seafood trade, and waterfront development. The harbor area is closely tied to Oslo's renewal as a modern and walkable capital. It is a key point for anyone writing about Norwegian shipping and urban port life.",
      de: "Der Hafen Oslo ist das maritime Tor der Hauptstadt und ein wichtiger Knotenpunkt für Fracht, Fähren und Kreuzfahrten. Er unterstützt die Logistik der Stadt, den Fischhandel und die Uferentwicklung. Das Hafengebiet ist eng mit Oslos Erneuerung als moderne und fußgängerfreundliche Hauptstadt verbunden. Es ist ein wichtiger Punkt für alle, die über norwegische Schifffahrt und städtisches Hafenleben schreiben.",
      hu: "Az Oslo kikötő a főváros tengeri kapuja és fontos csomópont az áruszállítás, kompok és körutazások számára. Támogatja a város logisztikáját, a tengeri élelmiszer-kereskedelmet és a vízparti fejlesztéseket. A kikötői terület szorosan kapcsolódik Oslo modern, gyalogosan bejárható fővárossá válásához. Kulcspont mindazoknak, akik a norvég hajózásról és a városi kikötőéletről írnak.",
      ro: "Portul Oslo este poarta maritimă a capitalei și un nod important pentru marfă, feriboturi și croaziere. Susține logistica orașului, comerțul cu fructe de mare și dezvoltarea falezei. Zona portuară este strâns legată de transformarea Oslo-ului într-o capitală modernă și ușor de parcurs pe jos. Este un punct-cheie pentru oricine scrie despre navigația norvegiană și viața portuară urbană."
    },
    facts: {
      en: ["Important for cargo and passenger traffic.", "Connects Oslo to fjord-based maritime routes.", "A focus area for waterfront urban renewal.", "Supports cruise and ferry operations.", "Central to the capital's shipping economy."],
      de: ["Wichtig für Fracht- und Passagierverkehr.", "Verbindet Oslo mit maritimen Routen im Fjord.", "Ein Schwerpunkt der Ufererneuerung.", "Unterstützt Kreuzfahrt- und Fährbetrieb.", "Zentral für die Schifffahrtswirtschaft der Hauptstadt."],
      hu: ["Fontos az áruszállítás és az utasforgalom számára.", "Összeköti Oslót a fjordon alapuló tengeri útvonalakkal.", "A vízparti városmegújítás egyik központi területe.", "Kiemelt a cruise- és kompforgalomban.", "A főváros hajózási gazdaságának kulcsa."],
      ro: ["Important pentru transportul de marfă și pasageri.", "Leagă Oslo de rutele maritime din fiord.", "O zonă centrală pentru reînnoirea urbană a falezei.", "Susține operațiunile de croazieră și feribot.", "Central pentru economia maritimă a capitalei."]
    },
    image: "/geo-images/norway/port-of-oslo.webp",
  },
  {
    id: "port-bergen",
    type: "port",
    parent: "norway",
    coords: [5.2770, 60.3940],
    name: { de: "Hafen Bergen", hu: "Bergen kikötő", ro: "Portul Bergen", en: "Port of Bergen" },
    description: {
      en: "The Port of Bergen is one of Norway's most important west coast ports and a major hub for cruise traffic. It sits near Bryggen and connects the city to coastal shipping routes, ferries, and regional trade. Bergen's maritime identity is inseparable from its harbor, which still drives tourism and logistics. The port is a strong SEO topic for Norway cruises, west coast shipping, and harbor city travel.",
      de: "Der Hafen Bergen ist einer der wichtigsten Westküstenhäfen Norwegens und ein bedeutender Knotenpunkt für den Kreuzfahrtverkehr. Er liegt nahe Bryggen und verbindet die Stadt mit Küstenschifffahrtsrouten, Fähren und regionalem Handel. Bergens maritime Identität ist untrennbar mit seinem Hafen verbunden, der weiterhin Tourismus und Logistik antreibt. Der Hafen ist ein starkes SEO-Thema für Norwegen-Kreuzfahrten, Schifffahrt an der Westküste und Reisen in Hafenstädte.",
      hu: "A Bergen kikötő Norvégia egyik legfontosabb nyugati parti kikötője és a cruise-forgalom egyik fő csomópontja. Bryggen közelében fekszik, és összeköti a várost a parti hajózási útvonalakkal, komphálózatokkal és regionális kereskedelemmel. Bergen tengeri identitása elválaszthatatlan a kikötőtől, amely ma is a turizmust és a logisztikát hajtja. A kikötő erős SEO-téma a norvég körutazásokhoz, a nyugati parti hajózáshoz és a kikötővárosi utazásokhoz.",
      ro: "Portul Bergen este unul dintre cele mai importante porturi de pe coasta de vest a Norvegiei și un nod major pentru traficul de croazieră. Se află aproape de Bryggen și leagă orașul de rutele de transport de coastă, feriboturi și comerț regional. Identitatea maritimă a Bergenului este inseparabilă de portul său, care continuă să susțină turismul și logistica. Portul este un subiect SEO puternic pentru croazierele în Norvegia, transportul pe coasta de vest și călătoriile în orașe-port."
    },
    facts: {
      en: ["One of Norway's busiest cruise ports.", "Linked closely to coastal shipping routes.", "Supports Bergen's tourism economy.", "Located near the historic Bryggen area.", "A key node on the west coast maritime network."],
      de: ["Einer der verkehrsreichsten Kreuzfahrthäfen Norwegens.", "Eng mit den Küstenschifffahrtsrouten verbunden.", "Unterstützt Bergens Tourismuswirtschaft.", "Nahe dem historischen Bryggen-Gebiet gelegen.", "Ein wichtiger Knoten im maritimen Netz der Westküste."],
      hu: ["Norvégia egyik legforgalmasabb cruise-kikötője.", "Szorosan kapcsolódik a parti hajózási útvonalakhoz.", "Támogatja Bergen turisztikai gazdaságát.", "A történelmi Bryggen közelében található.", "Kulcscsomópont a nyugati parti tengeri hálózatban."],
      ro: ["Unul dintre cele mai aglomerate porturi de croazieră din Norvegia.", "Legat strâns de rutele de transport de coastă.", "Susține economia turistică a Bergenului.", "Situat aproape de zona istorică Bryggen.", "Un nod-cheie în rețeaua maritimă de pe coasta de vest."]
    },
    image: "/geo-images/norway/port-of-bergen.webp",
  },
  {
    id: "industry-heroya-industrial-park",
    type: "industry",
    parent: "norway",
    coords: [9.5930, 59.1170],
    name: { de: "Industriepark Herøya", hu: "Herøya ipari park", ro: "Parcul industrial Herøya", en: "Herøya Industrial Park" },
    description: {
      en: "Herøya Industrial Park is one of Norway's best-known heavy industry areas and a major production site in Telemark. It is linked to chemicals, materials, and process industry, and it has shaped the local economy for decades. The site reflects the industrial side of Norway that is often less visible than fjords and mountains. For business and geography searches, it is a key example of Norwegian industrial capacity.",
      de: "Der Industriepark Herøya ist eines der bekanntesten Schwerindustriegebiete Norwegens und ein wichtiger Produktionsstandort in Telemark. Er ist mit Chemie, Werkstoffen und Prozessindustrie verbunden und prägt seit Jahrzehnten die lokale Wirtschaft. Der Ort zeigt die industrielle Seite Norwegens, die oft weniger sichtbar ist als Fjorde und Berge. Für Wirtschafts- und Geographiesuchen ist er ein zentrales Beispiel norwegischer Industriekapazität.",
      hu: "A Herøya ipari park Norvégia egyik legismertebb nehézipari területe és Telemark fontos termelési helyszíne. Vegyiparhoz, anyaggyártáshoz és folyamatiparhoz kapcsolódik, és évtizedek óta formálja a helyi gazdaságot. A helyszín Norvégia ipari arcát mutatja meg, amely gyakran kevésbé látható, mint a fjordok és a hegyek. Üzleti és földrajzi keresésekhez a norvég ipari kapacitás kulcspéldája.",
      ro: "Parcul industrial Herøya este una dintre cele mai cunoscute zone de industrie grea din Norvegia și un important sit de producție din Telemark. Este legat de industria chimică, materiale și procese industriale și a modelat economia locală de zeci de ani. Situl arată fața industrială a Norvegiei, adesea mai puțin vizibilă decât fjordurile și munții. Pentru căutări de afaceri și geografie, este un exemplu-cheie al capacității industriale norvegiene."
    },
    facts: {
      en: ["A major heavy industry area in Telemark.", "Linked to chemicals and process industry.", "Important for local jobs and exports.", "Shows Norway's industrial geography.", "One of the country's key production hubs."],
      de: ["Ein wichtiges Schwerindustriegebiet in Telemark.", "Mit Chemie- und Prozessindustrie verbunden.", "Wichtig für Arbeitsplätze und Exporte.", "Zeigt Norwegens industrielle Geografie.", "Einer der wichtigsten Produktionsknoten des Landes."],
      hu: ["Telemark egyik fontos nehézipari területe.", "A vegyiparhoz és a folyamatiparhoz kapcsolódik.", "Fontos a helyi munkahelyek és export számára.", "Norvégia ipari földrajzát mutatja meg.", "Az ország egyik kulcsfontosságú termelési csomópontja."],
      ro: ["O zonă importantă de industrie grea în Telemark.", "Legată de industria chimică și de procese.", "Importantă pentru locuri de muncă și exporturi.", "Arată geografia industrială a Norvegiei.", "Unul dintre nodurile-cheie de producție ale țării."]
    },
    image: "/geo-images/norway/heroya-industrial-park.webp",
  },
  {
    id: "industry-mongstad-refinery",
    type: "industry",
    parent: "norway",
    coords: [5.0190, 60.8015],
    name: { de: "Raffinerie Mongstad", hu: "Mongstad finomító", ro: "Rafinăria Mongstad", en: "Mongstad Refinery" },
    description: {
      en: "Mongstad Refinery is Norway's best-known oil refining site and a major part of the country's energy industry. It plays a central role in processing petroleum and supporting export-oriented infrastructure. The facility is one of the clearest examples of how oil and industry shaped modern Norway. It is an important keyword for searches about Norwegian energy, refinery production, and western coast industry.",
      de: "Die Raffinerie Mongstad ist Norwegens bekannteste Erdölraffinerie und ein wichtiger Teil der Energieindustrie des Landes. Sie spielt eine zentrale Rolle bei der Verarbeitung von Erdöl und der Unterstützung exportorientierter Infrastruktur. Die Anlage ist eines der deutlichsten Beispiele dafür, wie Öl und Industrie das moderne Norwegen geprägt haben. Sie ist ein wichtiges Schlüsselwort für Suchen zu norwegischer Energie, Raffinerieproduktion und Industrie an der Westküste.",
      hu: "A Mongstad finomító Norvégia legismertebb olajfinomító telephelye és az ország energiaiparának fontos része. Központi szerepe van a kőolaj feldolgozásában és az exportorientált infrastruktúra támogatásában. A létesítmény az egyik legjobb példa arra, hogyan formálta az olaj és az ipar a modern Norvégiát. Fontos kulcsszó a norvég energia, a finomítói termelés és a nyugati parti ipar témáiban.",
      ro: "Rafinăria Mongstad este cel mai cunoscut sit de rafinare a petrolului din Norvegia și o parte importantă a industriei energetice a țării. Are un rol central în procesarea petrolului și în susținerea infrastructurii orientate spre export. Instalația este unul dintre cele mai clare exemple ale modului în care petrolul și industria au modelat Norvegia modernă. Este un cuvânt-cheie important pentru căutări despre energia norvegiană, producția de rafinare și industria de pe coasta de vest."
    },
    facts: {
      en: ["Norway's best-known oil refining location.", "Important for energy processing and export chains.", "A major industrial site on the west coast.", "Reflects the country's petroleum economy.", "Closely associated with modern Norwegian industry."],
      de: ["Norwegens bekanntester Standort für Erdölraffination.", "Wichtig für Energieverarbeitung und Exportketten.", "Ein großer Industriestandort an der Westküste.", "Spiegelt die Erdölwirtschaft des Landes wider.", "Eng mit der modernen norwegischen Industrie verbunden."],
      hu: ["Norvégia legismertebb olajfinomító helyszíne.", "Fontos az energiafeldolgozás és exportláncok szempontjából.", "A nyugati part egyik nagy ipari telephelye.", "Az ország kőolajgazdaságát tükrözi.", "Szorosan kapcsolódik a modern norvég iparhoz."],
      ro: ["Cel mai cunoscut loc de rafinare a petrolului din Norvegia.", "Important pentru procesarea energiei și lanțurile de export.", "Un sit industrial major pe coasta de vest.", "Reflectă economia petrolieră a țării.", "Strâns asociat cu industria norvegiană modernă."]
    },
    image: "/geo-images/norway/mongstad-refinery.webp",
  },
  {
    id: "agriculture-jaeren-belt",
    type: "agriculture",
    parent: "norway",
    coords: [5.6500, 58.7000],
    name: { de: "Jæren-Agrarlandschaft", hu: "Jæren mezőgazdasági öv", ro: "Zona agricolă Jæren", en: "Jæren Agriculture Belt" },
    description: {
      en: "Jæren is one of Norway's most important agricultural regions and a wide fertile landscape south of Stavanger. Its flat fields, dairy farms, and open coast make it stand out from the country's mountain-heavy image. The region is central to food production, farming culture, and rural settlement in western Norway. Jæren is a strong SEO topic for Norwegian agriculture, landscape, and regional food stories.",
      de: "Jæren ist eine der wichtigsten Agrarregionen Norwegens und eine weite, fruchtbare Landschaft südlich von Stavanger. Seine flachen Felder, Milchhöfe und die offene Küste heben es vom bergreichen Bild des Landes ab. Die Region ist zentral für Lebensmittelproduktion, Landwirtschaftskultur und ländliche Besiedlung in Westnorwegen. Jæren ist ein starkes SEO-Thema für norwegische Landwirtschaft, Landschaft und regionale Lebensmittelgeschichten.",
      hu: "Jæren Norvégia egyik legfontosabb mezőgazdasági térsége és egy széles, termékeny táj Stavanger déli részén. Síksága, tejgazdaságai és nyitott tengerpartja különlegessé teszik a hegyekkel teli ország képében. A régió központi szerepet játszik az élelmiszertermelésben, a mezőgazdasági kultúrában és a nyugat-norvég vidéki településszerkezetben. Erős SEO-téma a norvég mezőgazdaság, táj és regionális élelmiszer-történetek számára.",
      ro: "Jæren este una dintre cele mai importante regiuni agricole ale Norvegiei și un peisaj fertil întins la sud de Stavanger. Câmpurile sale plate, fermele de lactate și coasta deschisă îl fac să iasă în evidență față de imaginea montană a țării. Regiunea este centrală pentru producția alimentară, cultura agricolă și așezările rurale din vestul Norvegiei. Jæren este un subiect SEO puternic pentru agricultura norvegiană, peisaj și povești despre alimente regionale."
    },
    facts: {
      en: ["One of Norway's richest farming areas.", "Known for dairy, grains, and open fields.", "Located south of Stavanger in Rogaland.", "Famous for its low, flat coastal landscape.", "Important to western Norway's food production."],
      de: ["Eine der ertragreichsten Agrarregionen Norwegens.", "Bekannt für Milchprodukte, Getreide und offene Felder.", "Südlich von Stavanger in Rogaland gelegen.", "Berühmt für seine niedrige, flache Küstenlandschaft.", "Wichtig für die Lebensmittelproduktion Westnorwegens."],
      hu: ["Norvégia egyik leggazdagabb mezőgazdasági területe.", "Tejtermelésről, gabonáról és nyílt mezőkről ismert.", "Stavanger déli részén, Rogalandban található.", "Alacsony, sík tengerparti tájáról híres.", "Fontos Nyugat-Norvégia élelmiszertermelésében."],
      ro: ["Una dintre cele mai bogate zone agricole ale Norvegiei.", "Cunoscută pentru lactate, cereale și câmpuri deschise.", "Situată la sud de Stavanger, în Rogaland.", "Celebră pentru peisajul său de coastă jos și plat.", "Importantă pentru producția alimentară din vestul Norvegiei."]
    },
    image: "/geo-images/norway/jaeren-agriculture-belt.webp",
  },
  {
    id: "agriculture-hardanger-orchards",
    type: "agriculture",
    parent: "norway",
    coords: [6.5000, 60.3000],
    name: { de: "Hardanger-Obstgärten", hu: "Hardanger gyümölcsösök", ro: "Livezile Hardanger", en: "Hardanger Fruit Orchards" },
    description: {
      en: "The Hardanger orchards are a famous fruit-growing landscape along the Hardangerfjord. Apples, cherries, and pears have turned the region into one of Norway's most recognizable agricultural brands. The blossom season attracts visitors, while cider and local food strengthen its reputation. Hardanger combines farming, fjord scenery, and food tourism in a uniquely Norwegian way.",
      de: "Die Hardanger-Obstgärten sind eine berühmte Obstbaulandschaft entlang des Hardangerfjords. Äpfel, Kirschen und Birnen haben die Region zu einer der bekanntesten Agrarmarken Norwegens gemacht. Die Blütezeit zieht Besucher an, während Cider und regionale Lebensmittel den Ruf weiter stärken. Hardanger verbindet Landwirtschaft, Fjordlandschaft und Kulinariktourismus auf einzigartige norwegische Weise.",
      hu: "A hardangeri gyümölcsösök híres gyümölcstermesztő tájat alkotnak a Hardangerfjord mentén. Az alma, a cseresznye és a körte Norvégia egyik legismertebb mezőgazdasági márkájává tették a térséget. A virágzás idején sok látogatót vonz, míg az almabor és a helyi ételek tovább erősítik a hírnevét. Hardanger a mezőgazdaságot, a fjordvidéki tájat és az élelmiszer-turizmust egyedi norvég módon ötvözi.",
      ro: "Livezile Hardanger sunt un peisaj celebru de cultivare a fructelor de-a lungul Hardangerfjordului. Merele, cireșele și perele au transformat regiunea într-unul dintre cele mai recunoscute branduri agricole ale Norvegiei. Sezonul înfloririi atrage vizitatori, iar cidrul și gastronomia locală îi consolidează reputația. Hardanger combină agricultura, peisajul de fjord și turismul culinar într-un mod unic norvegian."
    },
    facts: {
      en: ["Famous for apples, cherries, and pears.", "A major fruit region along the Hardangerfjord.", "Blossom season is a tourist highlight.", "Important for cider production and local food.", "One of Norway's strongest agricultural brands."],
      de: ["Berühmt für Äpfel, Kirschen und Birnen.", "Eine wichtige Obstregion am Hardangerfjord.", "Die Blütezeit ist ein touristischer Höhepunkt.", "Wichtig für Cider-Produktion und regionale Küche.", "Eine der stärksten Agrarmarken Norwegens."],
      hu: ["Az almáról, cseresznyéről és körtéről híres.", "A Hardangerfjord menti fontos gyümölcstermő vidék.", "A virágzás ideje turisztikai csúcspont.", "Fontos az almabor és a helyi ételek számára.", "Norvégia egyik legerősebb mezőgazdasági márkája."],
      ro: ["Celebră pentru mere, cireșe și pere.", "O regiune majoră de fructe de-a lungul Hardangerfjordului.", "Sezonul înfloririi este un punct de atracție turistică.", "Importantă pentru producția de cidru și mâncarea locală.", "Unul dintre cele mai puternice branduri agricole din Norvegia."]
    },
    image: "/geo-images/norway/hardanger-fruit-orchards.webp",
  }
];

export const norwayAllPoi: POI[] = [norwayCountry, ...norwayRegions, ...norwayCities, ...norwayCulture, ...norwayNature];
