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
    type: "nature",
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
    type: "nature",
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
    type: "nature",
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
    type: "nature",
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
    type: "nature",
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
    id: "nat-lofoten",
    type: "nature",
    parent: "norway",
    coords: [13.5000, 68.2000],
    name: { de: "Lofoten-Inseln", hu: "Lofoten-szigetek", ro: "Insulele Lofoten", en: "Lofoten Islands" },
    description: {
      en: "The Lofoten Islands are a dramatic Arctic archipelago known for sharp peaks, white beaches, and fishing villages scattered along the coast.",
      de: "Die Lofoten-Inseln sind ein dramatischer arktischer Archipel, bekannt für schroffe Gipfel, weiße Strände und Fischerdörfer entlang der Küste.",
      hu: "A Lofoten-szigetek drámai sarkvidéki szigetcsoport, amely csipkés hegycsúcsairól, fehér strandjairól és part menti halászfalvairól híres.",
      ro: "Insulele Lofoten sunt un arhipelag arctic spectaculos, cunoscut pentru vârfuri ascuțite, plaje albe și sate de pescari de-a lungul coastei."
    },
    facts: {
      en: ["They lie above the Arctic Circle.", "The islands are famous for cod fishing.", "The Gulf Stream helps keep the climate relatively mild.", "They are a popular place to see the midnight sun and northern lights."],
      de: ["Sie liegen nördlich des Polarkreises.", "Die Inseln sind für den Kabeljaufang bekannt.", "Der Golfstrom sorgt für ein vergleichsweise mildes Klima.", "Sie sind ein beliebter Ort für Mitternachtssonne und Nordlichter."],
      hu: ["Az északi sarkkör fölött fekszenek.", "A szigetek híresek a tőkehalhalászatról.", "A Golf-áramlat viszonylag enyhe klímát biztosít.", "Népszerű hely az éjféli nap és az északi fény megfigyelésére."],
      ro: ["Se află deasupra Cercului Polar.", "Insulele sunt celebre pentru pescuitul de cod.", "Curentul Golfului menține climatul relativ blând.", "Sunt un loc popular pentru soarele de la miezul nopții și aurora boreală."]
    },
    image: "/geo-images/norway/lofoten.webp",
  },
  {
    id: "nat-north-cape",
    type: "nature",
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
  }
];

export const norwayCities: POI[] = [
  {
    id: "city-oslo",
    type: "city",
    parent: "norway",
    coords: [10.7522, 59.9139],
    name: { de: "Oslo", hu: "Oslo", ro: "Oslo", en: "Oslo" },
    description: {
      en: "Oslo is Norway's capital, known for the Oslo Opera House, museum islands, and a strong connection to the surrounding fjord and forests.",
      de: "Oslo ist die Hauptstadt Norwegens und bekannt für das Opernhaus, die Museumsinseln und die enge Verbindung zu Fjord und Wäldern.",
      hu: "Oslo Norvégia fővárosa, amely az Operaházról, a múzeumszigetekről és a fjordhoz, valamint az erdőkhöz fűződő szoros kapcsolatáról ismert.",
      ro: "Oslo este capitala Norvegiei, cunoscută pentru Opera, insulele muzeelor și legătura puternică cu fjordul și pădurile din jur."
    },
    facts: {
      en: ["It is Norway's political and cultural capital.", "The city is famous for the Oslo Opera House.", "Vigeland Park is one of its best-known attractions.", "Oslo sits at the head of the Oslofjord."],
      de: ["Es ist Norwegens politische und kulturelle Hauptstadt.", "Die Stadt ist berühmt für das Opernhaus Oslo.", "Der Vigeland-Park gehört zu den bekanntesten Attraktionen.", "Oslo liegt am Ende des Oslofjords."],
      hu: ["Norvégia politikai és kulturális fővárosa.", "A város híres az Oslo Operaházról.", "A Vigeland park az egyik legismertebb látványossága.", "Oslo az Oslofjord végén fekszik."],
      ro: ["Este capitala politică și culturală a Norvegiei.", "Orașul este celebru pentru Opera din Oslo.", "Parcul Vigeland este una dintre cele mai cunoscute atracții.", "Oslo se află la capătul Oslofjordului."]
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
      en: "Bergen is Norway's western gateway to the fjords, famous for its colorful harbor quarter Bryggen and its rainy coastal atmosphere.",
      de: "Bergen ist Norwegens westliches Tor zu den Fjorden und berühmt für das farbenfrohe Hafenviertel Bryggen und sein regnerisches Küstenklima.",
      hu: "Bergen Norvégia nyugati kapuja a fjordok felé, híres a színes Bryggen kikötőnegyedről és az esős tengerparti hangulatáról.",
      ro: "Bergen este poarta vestică a Norvegiei către fjorduri, celebră pentru cartierul portuar colorat Bryggen și atmosfera sa ploioasă de coastă."
    },
    facts: {
      en: ["Bryggen is a UNESCO World Heritage site.", "The city is surrounded by seven mountains.", "It is one of Norway's rainiest cities.", "Bergen has a strong Hanseatic trading history."],
      de: ["Bryggen ist UNESCO-Welterbe.", "Die Stadt ist von sieben Bergen umgeben.", "Sie gehört zu den regenreichsten Städten Norwegens.", "Bergen hat eine starke hanseatische Handelstradition."],
      hu: ["Bryggen UNESCO Világörökség.", "A várost hét hegy veszi körül.", "Norvégia egyik legesősebb városa.", "Erős hanza kereskedelmi múltja van."],
      ro: ["Bryggen este sit UNESCO.", "Orașul este înconjurat de șapte munți.", "Este unul dintre cele mai ploioase orașe din Norvegia.", "Are o puternică istorie comercială hanseatică."]
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
      en: "Trondheim is a historic university city known for Nidaros Cathedral, medieval heritage, and a lively student atmosphere.",
      de: "Trondheim ist eine historische Universitätsstadt, bekannt für den Nidarosdom, ihr mittelalterliches Erbe und eine lebendige Studentenatmosphäre.",
      hu: "Trondheim történelmi egyetemváros, amely a Nidarosdómról, középkori örökségéről és élénk diákéletéről ismert.",
      ro: "Trondheim este un oraș universitar istoric, cunoscut pentru Catedrala Nidaros, moștenirea medievală și atmosfera studențească vibrantă."
    },
    facts: {
      en: ["It was Norway's first capital.", "Nidaros Cathedral is its most important landmark.", "The city is a center for technology and research.", "It has deep medieval roots."],
      de: ["Es war Norwegens erste Hauptstadt.", "Der Nidarosdom ist das wichtigste Wahrzeichen.", "Die Stadt ist ein Zentrum für Technologie und Forschung.", "Sie hat tiefe mittelalterliche Wurzeln."],
      hu: ["Norvégia első fővárosa volt.", "A Nidarosdóm a legfontosabb jelképe.", "A város a technológia és kutatás központja.", "Mély középkori gyökerekkel rendelkezik."],
      ro: ["A fost prima capitală a Norvegiei.", "Catedrala Nidaros este cel mai important reper al orașului.", "Orașul este un centru pentru tehnologie și cercetare.", "Are rădăcini medievale adânci."]
    },
    image: "/geo-images/norway/trondheim.webp",
  },
  {
    id: "city-stavanger",
    type: "city",
    parent: "norway",
    coords: [5.7331, 58.9700],
    name: { de: "Stavanger", hu: "Stavanger", ro: "Stavanger", en: "Stavanger" },
    description: {
      en: "Stavanger is Norway's oil city and a coastal base for exploring the Lysefjord and nearby Preikestolen.",
      de: "Stavanger ist Norwegens Ölstadt und ein Küstenstützpunkt für Ausflüge zum Lysefjord und zum nahe gelegenen Preikestolen.",
      hu: "Stavanger Norvégia olajvárosa, valamint part menti kiindulópont a Lysefjord és a közeli Preikestolen felfedezéséhez.",
      ro: "Stavanger este orașul petrolului din Norvegia și o bază de coastă pentru explorarea Lysefjordului și a apropiatului Preikestolen."
    },
    facts: {
      en: ["It is closely linked to the petroleum industry.", "The old town is known for white wooden houses.", "Preikestolen is within easy reach from the city.", "It has a lively food and culture scene."],
      de: ["Es ist eng mit der Erdölindustrie verbunden.", "Die Altstadt ist für weiße Holzhäuser bekannt.", "Preikestolen ist von der Stadt aus gut erreichbar.", "Es hat eine lebendige Essens- und Kulturszene."],
      hu: ["Szorosan kötődik a kőolajiparhoz.", "Az óváros fehér faházairól ismert.", "A Preikestolen könnyen elérhető a városból.", "Élénk gasztronómiai és kulturális élete van."],
      ro: ["Este strâns legat de industria petrolieră.", "Orașul vechi este cunoscut pentru casele albe din lemn.", "Preikestolen este ușor accesibil din oraș.", "Are o scenă culinară și culturală activă."]
    },
    image: "/geo-images/norway/stavanger.webp",
  },
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
  }
];

export const norwayAllPoi: POI[] = [norwayCountry, ...norwayRegions, ...norwayCities, ...norwayCulture, ...norwayNature];
