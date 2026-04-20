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
  }
];

export const norwayAllPoi: POI[] = [norwayCountry, ...norwayRegions, ...norwayNature];
