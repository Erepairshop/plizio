import type { POI } from "./poi";
export const bulgariaAllPoi: POI[] = [
  {
    id: "bg-country",
    type: "country",
    coords: [25.4858, 42.7339],
    name: {
      de: "Bulgarien",
      hu: "Bulgária",
      ro: "Bulgaria",
      en: "Bulgaria"
    },
    description: {
      de: "Bulgarien ist ein Land auf der Balkanhalbinsel, bekannt für seine vielfältige Landschaft, antike Geschichte und die wunderschöne Schwarzmeerküste.",
      hu: "Bulgária a Balkán-félszigeten fekvő ország, amely változatos tájairól, ősi történelméről és a gyönyörű fekete-tengeri partvidékéről ismert.",
      ro: "Bulgaria este o țară din Peninsula Balcanică, cunoscută pentru peisajele sale diverse, istoria antică și frumoasa coastă a Mării Negre.",
      en: "Bulgaria is a country on the Balkan Peninsula, known for its diverse landscapes, ancient history, and the beautiful Black Sea coast."
    },
    descriptionAdvanced: {
      de: "Bulgarien, am östlichen Rand der Balkanhalbinsel gelegen, ist ein Land von außergewöhnlicher geografischer und kultureller Vielfalt. Es grenzt im Norden an Rumänien, im Westen an Serbien und Nordmazedonien, im Süden an Griechenland und die Türkei und im Osten an das Schwarze Meer. Die Landschaft wird durch zwei große Gebirgsketten geprägt: das Balkangebirge (Stara Planina), das sich quer durch das Land zieht, und die Rhodopen im Süden, ergänzt durch die alpinen Massive von Rila und Pirin. Bulgarien ist eines der ältesten Länder Europas und bewahrt eine Geschichte, die von thrakischen, römischen, byzantinischen und osmanischen Einflüssen geprägt ist. Die Hauptstadt Sofia ist ein lebendiges Zentrum, in dem antike Ruinen neben moderner Architektur stehen. Die Schwarzmeerküste lockt mit goldenen Sandstränden und historischen Hafenstädten wie Warna und Burgas. Kulturell ist Bulgarien für seine einzigartige Folklore, die orthodoxen Klöster – allen voran das Rila-Kloster – und seine Rosenölproduktion weltberühmt. Das Land bietet ideale Bedingungen für Wandern, Skifahren und Strandurlaub. Mit einer reichen kulinarischen Tradition, die frisches Gemüse, Joghurt und exzellente Weine betont, ist Bulgarien ein Ziel für Entdecker und Genießer gleichermaßen. Die wirtschaftliche Entwicklung konzentriert sich auf Tourismus, Landwirtschaft und zunehmend auf den IT-Sektor. Bulgarien ist Mitglied der EU und der NATO und arbeitet stetig an seiner Modernisierung, während es seine tief verwurzelten Traditionen pflegt.",
      hu: "Bulgária a Balkán-félsziget keleti részén fekvő ország, amely rendkívüli földrajzi és kulturális sokszínűségéről ismert. Északon Romániával, nyugaton Szerbiával és Észak-Macedóniával, délen Görögországgal és Törökországgal, keleten pedig a Fekete-tengerrel határos. Tájait két nagy hegylánc határozza meg: az országon végighúzódó Balkán-hegység (Sztara Planina) és a déli Rodope-hegység, kiegészülve a Rila és a Pirin alpesi masszívumaival. Bulgária Európa egyik legrégebbi állama, történelmét trák, római, bizánci és oszmán hatások formálták. Fővárosa, Szófia, egy lüktető központ, ahol az ókori romok modern épületek mellett láthatók. A Fekete-tenger partvidéke aranyhomokos strandokkal és olyan történelmi kikötővárosokkal vonzza a látogatókat, mint Várna és Burgasz. Kulturális szempontból Bulgária világhírű egyedülálló folklórjáról, ortodox kolostorairól – mindenekelőtt a Rilai kolostorról – és rózsaolaj-termeléséről. Az ország ideális feltételeket kínál túrázáshoz, síeléshez és tengerparti nyaraláshoz egyaránt. Gazdag kulináris hagyományai, amelyek a friss zöldségekre, a joghurtra és a kiváló borokra épülnek, a felfedezők és az ínyencek kedvelt célpontjává teszik. A gazdasági fejlődés a turizmusra, a mezőgazdaságra és egyre inkább az informatikai szektorra összpontosul. Bulgária az Európai Unió és a NATO tagja, folyamatosan modernizálódik, miközben büszkén őrzi mélyen gyökerező hagyományait.",
      ro: "Bulgaria, situată la marginea estică a Peninsulei Balcanice, este o țară cu o diversitate geografică și culturală excepțională. Se învecinează la nord cu România, la vest cu Serbia și Macedonia de Nord, la sud cu Grecia și Turcia, iar la est cu Marea Neagră. Peisajul este dominat de două lanțuri muntoase majore: Munții Balcani (Stara Planina), care traversează țara, și Munții Rodopi în sud, completați de masivele alpine Rila și Pirin. Bulgaria este una dintre cele mai vechi țări din Europa, păstrând o istorie marcată de influențe trace, romane, bizantine și otomane. Capitala Sofia este un centru vibrant unde ruinele antice stau alături de arhitectura modernă. Coasta Mării Negre atrage vizitatori cu plaje de nisip auriu și orașe portuare istorice precum Varna și Burgas. Din punct de vedere cultural, Bulgaria este renumită în întreaga lume pentru folclorul său unic, mănăstirile ortodoxe – în special Mănăstirea Rila – și producția de ulei de trandafir. Țara oferă condiții ideale pentru drumeții, schi și vacanțe la malul mării. Cu o tradiție culinară bogată, care pune accent pe legume proaspete, iaurt și vinuri excelente, Bulgaria este o destinație atât pentru exploratori, cât și pentru gurmanzi. Dezvoltarea economică se concentrează pe turism, agricultură și, tot mai mult, pe sectorul IT. Bulgaria este membră a UE și NATO, lucrând constant la modernizarea sa, în timp ce își păstrează tradițiile adânc înrădăcinate.",
      en: "Bulgaria, situated on the eastern edge of the Balkan Peninsula, is a nation of extraordinary geographical and cultural diversity. It shares borders with Romania to the north, Serbia and North Macedonia to the west, Greece and Turkey to the south, and the Black Sea to the east. The landscape is defined by two major mountain ranges: the Balkan Mountains (Stara Planina), which stretch across the country, and the Rhodope Mountains in the south, complemented by the alpine massifs of Rila and Pirin. Bulgaria is one of the oldest countries in Europe, preserving a history shaped by Thracian, Roman, Byzantine, and Ottoman influences. The capital, Sofia, is a vibrant hub where ancient ruins stand alongside modern architecture. The Black Sea coastline attracts visitors with golden sandy beaches and historic port cities like Varna and Burgas. Culturally, Bulgaria is world-renowned for its unique folklore, Orthodox monasteries—most notably the Rila Monastery—and its rose oil production. The country offers ideal conditions for hiking, skiing, and seaside holidays alike. With a rich culinary tradition emphasizing fresh vegetables, yogurt, and excellent wines, Bulgaria is a destination for explorers and gourmets. Economic development focuses on tourism, agriculture, and increasingly the IT sector. Bulgaria is a member of the EU and NATO, steadily modernizing while cherishing its deep-rooted traditions."
    },
    facts: {
      de: ["Hauptstadt: Sofia", "Währung: Lew (BGN)", "Bevölkerung: ca. 6,4 Millionen", "Höchster Punkt: Musala (2925 m)", "UNESCO-Welterbestätten: 10", "Gründungsjahr: 681 n. Chr.", "Größter Fluss: Donau (Grenzfluss)", "Wichtigstes Exportgut: Rosenöl", "Amtssprache: Bulgarisch", "Zeitzone: EET (UTC+2)"],
      hu: ["Főváros: Szófia", "Pénznem: Bolgár leva (BGN)", "Népesség: kb. 6,4 millió", "Legmagasabb pont: Muszala (2925 m)", "UNESCO világörökségi helyszínek: 10", "Alapítás éve: i. sz. 681", "Legnagyobb folyó: Duna (határfolyó)", "Legfontosabb exportcikk: Rózsaolaj", "Hivatalos nyelv: Bolgár", "Időzóna: EET (UTC+2)"],
      ro: ["Capitala: Sofia", "Moneda: Leva bulgară (BGN)", "Populație: aprox. 6,4 milioane", "Cel mai înalt punct: Musala (2925 m)", "Situri UNESCO: 10", "Anul fondării: 681 d.Hr.", "Cel mai mare râu: Dunărea (frontieră)", "Principalul produs de export: Ulei de trandafir", "Limba oficială: Bulgară", "Fus orar: EET (UTC+2)"],
      en: ["Capital: Sofia", "Currency: Bulgarian Lev (BGN)", "Population: approx. 6.4 million", "Highest point: Musala (2,925 m)", "UNESCO World Heritage sites: 10", "Year of foundation: 681 AD", "Largest river: Danube (border river)", "Key export: Rose oil", "Official language: Bulgarian", "Time zone: EET (UTC+2)"]
    },
    image: "/images/visualLab/bulgaria/country.jpg"
  },
  {
    id: "bg-sofia",
    type: "city",
    parent: "bg-country",
    coords: [23.3219, 42.6977],
    name: {
      de: "Sofia",
      hu: "Szófia",
      ro: "Sofia",
      en: "Sofia"
    },
    description: {
      de: "Sofia ist die Hauptstadt Bulgariens und eine der ältesten Städte Europas, bekannt für ihre Alexander-Newski-Kathedrale und die Nähe zum Witoscha-Gebirge.",
      hu: "Szófia Bulgária fővárosa és Európa egyik legrégebbi városa, amely az Alekszander Nyevszkij-székesegyházról és a Vitosa-hegység közelségéről ismert.",
      ro: "Sofia este capitala Bulgariei și unul dintre cele mai vechi orașe din Europa, cunoscut pentru Catedrala Alexandru Nevski și proximitatea muntelui Vitosha.",
      en: "Sofia is the capital of Bulgaria and one of the oldest cities in Europe, known for its Alexander Nevsky Cathedral and proximity to Vitosha Mountain."
    },
    descriptionAdvanced: {
      de: "Sofia, die Hauptstadt Bulgariens, ist eine der ältesten Städte Europas und blickt auf eine über 7.000-jährige Geschichte zurück. Am Fuße des imposanten Witoscha-Gebirges gelegen, vereint die Stadt auf einzigartige Weise antike römische Ruinen, byzantinische Kirchen, osmanische Moscheen und monumentale Architektur aus der sozialistischen Čra mit modernem urbanem Flair. Das Wahrzeichen der Stadt ist die Alexander-Newski-Kathedrale, eine der größten orthodoxen Kirchen der Welt, deren goldene Kuppeln weithin sichtbar sind. In der Innenstadt, im sogenannten „Quadrat der religiösen Toleranz“, stehen eine orthodoxe Kirche, eine katholische Kathedrale, eine Moschee und eine Synagoge in unmittelbarer Nachbarschaft zueinander. Sofia ist nicht nur das politische und wirtschaftliche Zentrum des Landes, sondern auch ein bedeutender Kulturstandort mit zahlreichen Museen, Theatern und Galerien. Die Stadt ist bekannt für ihre zahlreichen Mineralquellen, die bereits von den Römern geschätzt wurden. Heute bietet Sofia eine hohe Lebensqualität mit weitläufigen Parks, einer lebendigen Gastronomieszene und einer wachsenden Start-up-Kultur. Für Naturliebhaber bietet das nahegelegene Witoscha-Gebirge ideale Möglichkeiten zum Wandern im Sommer und Skifahren im Winter. Sofia ist ein wichtiger Verkehrsknotenpunkt auf dem Balkan und ein Tor zu den Naturschönheiten und historischen Stätten Bulgariens. Die Stadt entwickelt sich stetig weiter und verbindet ihre reiche Vergangenheit mit einer dynamischen Zukunft.",
      hu: "Szófia, Bulgária fővárosa, Európa egyik legrégebbi városa, amely több mint 7000 éves múltra tekint vissza. Az impozáns Vitosa-hegység lábánál fekvő város egyedülálló módon ötvözi az ókori római romokat, a bizánci templomokat, az oszmán mecseteket és a szocialista korszak monumentális építészetét a modern városi hangulattal. A város jelképe az Alekszander Nyevszkij-székesegyház, a világ egyik legnagyobb ortodox temploma, amelynek arany kupolái messziről látszanak. A belvárosban, az úgynevezett „vallási tolerancia négyszögében” egy ortodox templom, egy katolikus székesegyház, egy mecset és egy zsinagóga áll egymás közvetlen szomszédságában. Szófia nemcsak az ország politikai és gazdasági központja, hanem jelentős kulturális helyszín is, számos múzeummal, színházzal és galériával. A város híres számos ásványvízforrásáról, amelyeket már a rómaiak is nagyra értékeltek. Ma Szófia magas életminőséget kínál tágas parkjaival, élénk gasztronómiai életével és növekvő start-up kultúrájával. A természetkedvelők számára a közeli Vitosa-hegység ideális lehetőségeket kínál nyáron túrázáshoz, télen pedig síeléshez. Szófia a Balkán fontos közlekedési csomópontja, és kapu Bulgária természeti szépségeihez és történelmi helyszíneihez. A város folyamatosan fejlődik, ötvözve gazdag múltját a dinamikus jövővel.",
      ro: "Sofia, capitala Bulgariei, este unul dintre cele mai vechi orașe din Europa, având o istorie de peste 7.000 de ani. Situat la poalele impunătorului munte Vitosha, orașul îmbină într-un mod unic ruinele romane antice, bisericile bizantine, moșcheile otomane și arhitectura monumentală din epoca socialistă cu un fler urban modern. Simbolul orașului este Catedrala Alexandru Nevski, una dintre cele mai mari biserici ortodoxe din lume, ale cărei cupole aurii sunt vizibile de la distanță. În centrul orașului, în așa-numitul „Pătrat al Toleranței Religioase”, o biserică ortodoxă, o catedrală catolică, o moșchee și o sinagogă stau în imediata vecinătate una de cealaltă. Sofia nu este doar centrul politic și economic al țării, ci și un important sit cultural, cu numeroase muzee, teatre și galerii. Orașul este cunoscut pentru numeroasele sale izvoare minerale, care erau deja apreciate de romani. Astăzi, Sofia oferă o calitate ridicată a vieții, cu parcuri vaste, o scenă gastronomică vibrantă și o cultură start-up în creștere. Pentru iubitorii de natură, muntele Vitosha din apropiere oferă oportunități ideale pentru drumeții vara și schi iarna. Sofia este un nod de transport important în Balcani și o poartă către frumusețile naturale și siturile istorice ale Bulgariei. Orașul evoluează constant, legând trecutul său bogat de un viitor dinamic.",
      en: "Sofia, the capital of Bulgaria, is one of the oldest cities in Europe, boasting a history of over 7,000 years. Nestled at the foot of the imposing Vitosha Mountain, the city uniquely blends ancient Roman ruins, Byzantine churches, Ottoman mosques, and monumental socialist-era architecture with a modern urban flair. The city's landmark is the Alexander Nevsky Cathedral, one of the largest Orthodox churches in the world, its golden domes visible from afar. In the city center, in the so-called \"Square of Religious Tolerance,\" an Orthodox church, a Catholic cathedral, a mosque, and a synagogue stand in immediate proximity to one another. Sofia is not only the political and economic center of the country but also a significant cultural hub with numerous museums, theaters, and galleries. The city is famous for its many mineral springs, which were already prized by the Romans. Today, Sofia offers a high quality of life with expansive parks, a vibrant culinary scene, and a growing start-up culture. For nature lovers, the nearby Vitosha Mountain provides ideal opportunities for hiking in summer and skiing in winter. Sofia is a major transport hub in the Balkans and a gateway to Bulgaria's natural beauties and historic sites. The city is constantly evolving, connecting its rich past with a dynamic future."
    },
    facts: {
      de: ["Gegründet: vor ca. 7000 Jahren", "Antiker Name: Serdica", "Höchster Berg: Witoscha (2290 m)", "Wahrzeichen: Alexander-Newski-Kathedrale", "Mineralquellen: über 30 im Stadtgebiet", "U-Bahn: Einziges Metrosystem Bulgariens", "Motto: 'Wächst, aber altert nicht'", "Höhe: 550 m über dem Meeresspiegel", "Kultur: Quadrat der religiösen Toleranz", "Wirtschaft: IT-Zentrum des Balkans"],
      hu: ["Alapítva: kb. 7000 éve", "Ókori név: Serdica", "Legmagasabb hegy: Vitosa (2290 m)", "Jelkép: Alekszander Nyevszkij-székesegyház", "Ásványvízforrások: több mint 30 a városban", "Metró: Bulgária egyetlen metróhálózata", "Mottó: 'Növekszik, de nem öregszik'", "Tengerszint feletti magasság: 550 m", "Kultúra: A vallási tolerancia négyszöge", "Gazdaság: A Balkán informatikai központja"],
      ro: ["Fondat: acum aprox. 7000 de ani", "Nume antic: Serdica", "Cel mai înalt munte: Vitosha (2290 m)", "Simbol: Catedrala Alexandru Nevski", "Izvoare minerale: peste 30 în oraș", "Metrou: Singurul sistem de metrou din Bulgaria", "Motto: 'Crește, dar nu îmbătrânește'", "Altitudine: 550 m deasupra mării", "Cultură: Pătratul Toleranței Religioase", "Economie: Centru IT al Balcanilor"],
      en: ["Founded: approx. 7,000 years ago", "Ancient name: Serdica", "Highest mountain: Vitosha (2,290 m)", "Landmark: Alexander Nevsky Cathedral", "Mineral springs: over 30 in the city area", "Metro: Bulgaria's only subway system", "Motto: 'Grows but does not age'", "Elevation: 550 m above sea level", "Culture: Square of Religious Tolerance", "Economy: IT hub of the Balkans"]
    },
    image: "/images/visualLab/bulgaria/sofia.jpg"
  },
  {
    id: "bg-plovdiv",
    type: "city",
    parent: "bg-country",
    coords: [24.7453, 42.1421],
    name: {
      de: "Plowdiw",
      hu: "Plovdiv",
      ro: "Plovdiv",
      en: "Plovdiv"
    },
    description: {
      de: "Plowdiw ist eine der ältesten Städte der Welt, bekannt für sein antikes römisches Theater und die charmante Altstadt auf sieben Hügeln.",
      hu: "Plovdiv a világ egyik legrégebbi városa, amely ókori római színházáról és a hét dombra épült bájos óvárosáról ismert.",
      ro: "Plovdiv este unul dintre cele mai vechi orașe din lume, cunoscut pentru teatrul său roman antic și fermecătorul oraș vechi de pe șapte coline.",
      en: "Plovdiv is one of the oldest cities in the world, known for its ancient Roman theater and the charming old town on seven hills."
    },
    descriptionAdvanced: {
      de: "Plowdiw, die zweitgrößte Stadt Bulgariens, gilt als eine der ältesten kontinuierlich bewohnten Städte der Welt und ist ein wahres Freilichtmuseum der Geschichte. Auf sieben Hügeln erbaut, spiegelt die Stadt über 6.000 Jahre Zivilisation wider, von thrakischen Festungen über römische Monumente bis hin zu prächtigen Häusern aus der Zeit der bulgarischen Wiedergeburt. Das Herzstück der Stadt ist das antike römische Theater, das im 2. Jahrhundert n. Chr. unter Kaiser Trajan erbaut wurde und heute noch für spektakuläre Aufführungen genutzt wird. Die Altstadt von Plowdiw besticht durch ihre kopfsteingepflasterten Gassen und die farbenfrohen, kunstvoll verzierten Kaufmannshäuser, die heute Museen und Galerien beherbergen. Im Kontrast dazu steht das Viertel Kapana, das „Falle“ genannt wird und sich zu einem dynamischen Zentrum für Kunst, Handwerk und Gastronomie entwickelt hat. Plowdiw war 2019 Kulturhauptstadt Europas und hat seither seine Position als kulturelles Herz Bulgariens gefestigt. Die Stadt bietet eine entspannte Atmosphäre, die durch die Fußgängerzonen, Parks und die Nähe zum Fluss Mariza unterstrichen wird. Besucher können hier die Schichten der Geschichte buchstäblich unter ihren Füßen spüren, während sie die moderne bulgarische Lebensart genießen. Plowdiw ist ein Muss für jeden Reisenden, der tief in die Seele des Balkans eintauchen möchte.",
      hu: "Plovdiv, Bulgária második legnagyobb városa, a világ egyik legrégebbi, folyamatosan lakott települése, a történelem valóságos szabadtéri múzeuma. A hét dombra épült város több mint 6000 év civilizációját tükrözi, a trák erődöktől és római műemlékektől kezdve a bolgár újjászületés korának pompás házaiig. A város ékköve az ókori római színház, amelyet az i. sz. 2. században, Traianus császár idején építettek, és ma is látványos előadások helyszíne. Plovdiv óvárosa macskaköves utcáival és színes, művészien díszített kereskedőházaival bűvöli el a látogatókat, amelyek ma múzeumoknak és galériáknak adnak otthont. Ezzel szemben áll a Kapana negyed, amelyet „Csapdának” hívnak, és amely a művészet, a kézművesség és a gasztronómia dinamikus központjává vált. Plovdiv 2019-ben Európa Kulturális Fővárosa volt, és azóta is megerősítette pozícióját Bulgária kulturális szíveként. A város nyugodt légkört kínál, amelyet a sétálóutcák, parkok és a Marica-folyó közelsége hangsúlyoz. A látogatók itt szó szerint a lábuk alatt érezhetik a történelem rétegeit, miközben élvezik a modern bolgár életstílust. Plovdiv kötelező célpont minden utazó számára, aki mélyen el akar merülni a Balkán lelkében.",
      ro: "Plovdiv, al doilea oraș ca mărime din Bulgaria, este considerat unul dintre cele mai vechi orașe locuite continuu din lume și este un adevărat muzeu în aer liber al istoriei. Construit pe șapte coline, orașul reflectă peste 6.000 de ani de civilizație, de la fortărețe trace și monumente romane până la case magnifice din perioada Renașterii bulgare. Piesa centrală a orașului este teatrul roman antic, construit în secolul al II-lea d.Hr. sub împăratul Traian, care este folosit și astăzi pentru spectacole spectaculoase. Orașul vechi din Plovdiv impresionează prin străzile sale pietruite și casele de negustori colorate și bogat decorate, care astăzi găzduiesc muzee și galerii. În contrast se află cartierul Kapana, numit „Capcana”, care s-a transformat într-un centru dinamic pentru artă, meșteșuguri și gastronomie. Plovdiv a fost Capitală Europeană a Culturii în 2019 și de atunci și-a consolidat poziția de inimă culturală a Bulgariei. Orașul oferă o atmosferă relaxată, subliniată de zonele pietonale, parcuri și proximitatea râului Maritsa. Vizitatorii pot simți straturile istoriei literalmente sub picioarele lor în timp ce se bucură de stilul de viață bulgar modern. Plovdiv este o vizită obligatorie pentru orice călător care dorește să pătrundă adânc în sufletul Balcanilor.",
      en: "Plovdiv, the second-largest city in Bulgaria, is considered one of the oldest continuously inhabited cities in the world and is a true open-air museum of history. Built on seven hills, the city reflects over 6,000 years of civilization, from Thracian fortresses and Roman monuments to magnificent houses from the Bulgarian National Revival period. The centerpiece of the city is the ancient Roman theater, built in the 2nd century AD under Emperor Trajan, which is still used for spectacular performances today. Plovdiv's Old Town charms visitors with its cobblestone streets and colorful, ornately decorated merchant houses, which now house museums and galleries. In contrast stands the Kapana district, called \"The Trap,\" which has evolved into a dynamic center for arts, crafts, and gastronomy. Plovdiv was the European Capital of Culture in 2019 and has since solidified its position as the cultural heart of Bulgaria. The city offers a relaxed atmosphere, highlighted by pedestrian zones, parks, and proximity to the Maritsa River. Visitors can literally feel the layers of history beneath their feet while enjoying the modern Bulgarian way of life. Plovdiv is a must-see for any traveler wishing to dive deep into the soul of the Balkans."
    },
    facts: {
      de: ["Alter: über 6000 Jahre", "Antiker Name: Philippopolis", "Kultur: Kulturhauptstadt Europas 2019", "Wahrzeichen: Römisches Theater", "Geografie: Stadt der sieben Hügel", "Viertel: Kapana (Kreativzentrum)", "Geschichte: Thrakische Ursprünge", "Lage: Am Fluss Mariza"],
      hu: ["Kor: több mint 6000 év", "Ókori név: Philippopolis", "Kultúra: Európa Kulturális Fővárosa 2019", "Jelkép: Római színház", "Földrajz: A hét domb városa", "Negyed: Kapana (kreatív központ)", "Történelem: Trák eredet", "Fekvés: A Marica-folyó partján"],
      ro: ["Vârstă: peste 6000 de ani", "Nume antic: Philippopolis", "Cultură: Capitală Europeană a Culturii 2019", "Simbol: Teatrul Roman", "Geografie: Orașul celor șapte coline", "Cartier: Kapana (centru creativ)", "Istorie: Origini trace", "Locație: Pe râul Maritsa"],
      en: ["Age: over 6,000 years", "Ancient name: Philippopolis", "Culture: European Capital of Culture 2019", "Landmark: Roman Theater", "Geography: City of the Seven Hills", "District: Kapana (creative hub)", "History: Thracian origins", "Location: On the Maritsa River"]
    },
    image: "/images/visualLab/bulgaria/plovdiv.jpg"
  },
  {
    id: "bg-varna",
    type: "city",
    parent: "bg-country",
    coords: [27.9147, 43.2141],
    name: {
      de: "Warna",
      hu: "Várna",
      ro: "Varna",
      en: "Varna"
    },
    description: {
      de: "Warna ist die 'Meereshauptstadt' Bulgariens, bekannt für ihre breiten Sandstrände, den weitläufigen Meeresgarten und den ältesten Goldschatz der Welt.",
      hu: "Várna Bulgária „tengeri fővárosa”, amely széles homokos strandjairól, kiterjedt Tengeri kertjéről és a világ legrégebbi aranykincséről ismert.",
      ro: "Varna este „capitala maritimă” a Bulgariei, cunoscută pentru plajele sale largi de nisip, Grădina Mării întinsă și cel mai vechi tezaur de aur din lume.",
      en: "Varna is the 'maritime capital' of Bulgaria, known for its wide sandy beaches, the extensive Sea Garden, and the world's oldest gold treasure."
    },
    descriptionAdvanced: {
      de: "Warna, oft als die „Meereshauptstadt“ Bulgariens bezeichnet, ist die größte Stadt an der bulgarischen Schwarzmeerküste und ein bedeutendes Zentrum für Tourismus, Wirtschaft und Kultur. Die Stadt blickt auf eine jahrtausendealte Geschichte zurück, die im Archäologischen Museum von Warna lebendig wird, wo der älteste Goldschatz der Welt (ca. 4.600 v. Chr.) ausgestellt ist. Warna verbindet den Charme eines historischen Seebades mit der Dynamik einer modernen Hafenstadt. Das Wahrzeichen der Stadt ist die Kathedrale Mariä Himmelfahrt mit ihren markanten kupfernen Kuppeln. Ein besonderes Highlight ist der Meeresgarten (Morska Gradina), einer der größten und schönsten Stadtparks Europas, der sich kilometerlang entlang der Küste erstreckt und zahlreiche Attraktionen wie das Aquarium, das Delfinarium und das Marinemuseum beherbergt. Die breiten Sandstrände und das lebendige Nachtleben ziehen im Sommer Besucher aus ganz Europa an. Warna ist zudem ein wichtiger Bildungsstandort mit mehreren Universitäten und ein bedeutender Knotenpunkt für den internationalen Schiffsverkehr. Die Stadt bietet eine perfekte Mischung aus kulturellen Entdeckungen, entspanntem Strandleben und urbanem Komfort. Ob man die antiken römischen Thermen erkundet oder in den zahlreichen Cafés am Hafen verweilt – Warna begeistert durch seine Vielseitigkeit und seine gastfreundliche Atmosphäre.",
      hu: "Várna, amelyet gyakran Bulgária „tengeri fővárosaként” emlegetnek, a bolgár Fekete-tenger partjának legnagyobb városa, valamint jelentős turisztikai, gazdasági és kulturális központ. A város több évezredes múltra tekint vissza, amely a Várnai Régészeti Múzeumban kel életre, ahol a világ legrégebbi aranykincse (i. e. 4600 körül) látható. Várna ötvözi a történelmi tengerparti üdülőhely báját a modern kikötőváros dinamizmusával. A város jelképe az Istenanya elszenderedése székesegyház, jellegzetes rézkupoláival. Különleges látnivaló a Tengeri kert (Morszka Gradina), Európa egyik legnagyobb és legszebb városi parkja, amely kilométereken át húzódik a part mentén, és számos látnivalónak ad otthont, mint például az akvárium, a delfinárium és a tengerészeti múzeum. A széles homokos strandok és az élénk éjszakai élet nyáron egész Európából vonzzák a látogatókat. Várna emellett fontos oktatási központ több egyetemmel, és a nemzetközi hajóforgalom jelentős csomópontja. A város a kulturális felfedezések, a pihentető tengerparti élet és a városi kényelem tökéletes keverékét kínálja. Akár az ókori római termákat fedezi fel az ember, akár a kikötő számos kávézójának egyikében időzik – Várna sokszínűségével és vendégszerető légkörével mindenkit lenyűgöz.",
      ro: "Varna, adesea numită „capitala maritimă” a Bulgariei, este cel mai mare oraș de pe coasta bulgară a Mării Negre și un centru major pentru turism, economie și cultură. Orașul are o istorie de milenii, care prinde viață în Muzeul Arheologic din Varna, unde este expus cel mai vechi tezaur de aur din lume (aprox. 4.600 î.Hr.). Varna combină farmecul unei stațiuni balneare istorice cu dinamismul unui oraș portuar modern. Simbolul orașului este Catedrala Adormirea Maicii Domnului, cu cupolele sale distinctive de cupru. Un punct culminant special este Grădina Mării (Morska Gradina), unul dintre cele mai mari și mai frumoase parcuri urbane din Europa, care se întinde pe kilometri de-a lungul coastei și găzduiește numeroase atracții, cum ar fi acvariul, delfinariul și muzeul marinei. Plajele largi de nisip și viața de noapte vibrantă atrag vizitatori din toată Europa în timpul verii. Varna este, de asemenea, un centru educațional important, cu mai multe universități, și un nod major pentru traficul maritim internațional. Orașul oferă un amestec perfect de descoperiri culturale, viață relaxată pe plajă și confort urban. Fie că explorați termele romane antice, fie că zăboviți în numeroasele cafenele din port – Varna impresionează prin versatilitatea sa și atmosfera sa primitoare.",
      en: "Varna, often referred to as the \"maritime capital\" of Bulgaria, is the largest city on the Bulgarian Black Sea coast and a major center for tourism, business, and culture. The city boasts a history spanning millennia, which comes alive in the Varna Archaeological Museum, home to the world's oldest gold treasure (approx. 4,600 BC). Varna combines the charm of a historic seaside resort with the dynamism of a modern port city. The city's landmark is the Dormition of the Mother of God Cathedral, with its distinctive copper domes. A special highlight is the Sea Garden (Morska Gradina), one of the largest and most beautiful urban parks in Europe, stretching for miles along the coast and housing numerous attractions such as the aquarium, the dolphinarium, and the naval museum. The wide sandy beaches and vibrant nightlife attract visitors from all over Europe in the summer. Varna is also an important educational hub with several universities and a major node for international shipping. The city offers a perfect blend of cultural discoveries, relaxed beach life, and urban comfort. Whether exploring the ancient Roman baths or lingering in the numerous cafes at the port—Varna delights with its versatility and welcoming atmosphere."
    },
    facts: {
      de: ["Status: Meereshauptstadt Bulgariens", "Geschichte: Čltester Goldschatz der Welt", "Wahrzeichen: Kathedrale Mariä Himmelfahrt", "Natur: Meeresgarten (Morska Gradina)", "Wirtschaft: Größter Hafen Bulgariens", "Kultur: Internationales Ballettfestival", "Archäologie: Römische Thermen", "Lage: Am Golf von Warna"],
      hu: ["Státusz: Bulgária tengeri fővárosa", "Történelem: A világ legrégebbi aranykincse", "Jelkép: Istenanya elszenderedése székesegyház", "Természet: Tengeri kert (Morszka Gradina)", "Gazdaság: Bulgária legnagyobb kikötője", "Kultúra: Nemzetközi Balettfesztivál", "Régészet: Római termák", "Fekvés: A Várnai-öböl partján"],
      ro: ["Statut: Capitala maritimă a Bulgariei", "Istorie: Cel mai vechi tezaur de aur din lume", "Simbol: Catedrala Adormirea Maicii Domnului", "Natură: Grădina Mării (Morska Gradina)", "Economie: Cel mai mare port din Bulgaria", "Cultură: Festivalul Internațional de Balet", "Arheologie: Termele Romane", "Locație: În Golful Varna"],
      en: ["Status: Maritime capital of Bulgaria", "History: World's oldest gold treasure", "Landmark: Dormition of the Mother of God Cathedral", "Nature: Sea Garden (Morska Gradina)", "Economy: Largest port in Bulgaria", "Culture: International Ballet Festival", "Archaeology: Roman Baths", "Location: On the Gulf of Varna"]
    },
    image: "/images/visualLab/bulgaria/varna.jpg"
  },
  {
    id: "bg-rila",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3400, 42.1333],
    name: {
      de: "Rila-Kloster",
      hu: "Rilai kolostor",
      ro: "Mănăstirea Rila",
      en: "Rila Monastery"
    },
    description: {
      de: "Das Rila-Kloster, offiziell das Kloster des Heiligen Iwan von Rila, ist das größte und bedeutendste orthodoxe Kloster Bulgariens und ein Symbol des nationalen Bewusstseins. Es liegt auf einer Höhe von 1.147 Metern im tiefen Tal des Rilska-Flusses im Rila-Gebirge, umgeben von dichten Wäldern und majestätischen Gipfeln. Gegründet wurde es im 10. Jahrhundert vom Einsiedler Iwan von Rila, der heute als Schutzpatron Bulgariens verehrt wird. Das Kloster war über Jahrhunderte hinweg ein Zentrum der bulgarischen Bildung und Kultur, besonders während der osmanischen Herrschaft, als es die nationale Identität bewahrte. Die heutige Architektur stammt größtenteils aus der Zeit der bulgarischen Wiedergeburt im 19. Jahrhundert. Besonders beeindruckend ist die Hauptkirche Mariä Himmelfahrt mit ihren prächtigen Fresken, die von den besten Meistern der Zeit geschaffen wurden, und der kunstvoll geschnitzten Ikonostase. Der Hreljo-Turm aus dem 14. Jahrhundert ist das älteste erhaltene Gebäude des Komplexes. Das Kloster beherbergt zudem ein bedeutendes Museum mit wertvollen Manuskripten, Ikonen und dem berühmten Raffail-Kreuz, einem Meisterwerk der Holzschnitzkunst. Seit 1983 gehört das Rila-Kloster zum UNESCO-Weltkulturerbe. Es ist nicht nur ein Ort tiefer Spiritualität und ein Ziel für Pilger, sondern auch eine der meistbesuchten Sehenswürdigkeiten Bulgariens, die Besucher durch ihre architektonische Schönheit und ihre friedvolle Atmosphäre in den Bann zieht.",
      hu: "A Rilai kolostor, hivatalos nevén Rilai Szent János-kolostor, Bulgária legnagyobb és legjelentősebb ortodox kolostora, a nemzeti öntudat jelképe. 1147 méteres magasságban fekszik a Rilszka-folyó mély völgyében, a Rila-hegységben, sűrű erdőkkel és fenséges csúcsokkal körülvéve. A 10. században alapította Rilai Szent János remete, akit ma Bulgária védőszentjeként tisztelnek. A kolostor évszázadokon át a bolgár oktatás és kultúra központja volt, különösen az oszmán uralom idején, amikor megőrizte a nemzeti identitást. A mai építészet nagy része a 19. századi bolgár újjászületés korából származik. Különösen lenyűgöző az Istenanya elszenderedése főtemplom pompás freskóival, amelyeket a kor legjobb mesterei készítettek, valamint művészien faragott ikonfala (ikonosztáz). A 14. századi Hreljo-torony a komplexum legrégebbi fennmaradt épülete. A kolostorban jelentős múzeum is működik, ahol értékes kéziratokat, ikonokat és a híres Raffail-keresztet, a fafaragás mesterművét őrzik. A Rilai kolostor 1983 óta az UNESCO Világörökség része. Nemcsak a mély spiritualitás helyszíne és zarándokhely, hanem Bulgária egyik leglátogatottabb látnivalója is, amely építészeti szépségével és békés légkörével minden látogatót lenyűgöz.",
      ro: "Mănăstirea Rila, oficial Mănăstirea Sfântul Ioan de Rila, este cea mai mare și mai importantă mănăstire ortodoxă din Bulgaria și un simbol al conștiinței naționale. Este situată la o altitudine de 1.147 de metri în valea adâncă a râului Rilska din Munții Rila, înconjurată de păduri dese și vârfuri maiestuoase. A fost fondată în secolul al X-lea de pustnicul Ioan de Rila, care este venerat astăzi ca sfânt patron al Bulgariei. Mănăstirea a fost timp de secole un centru al educației și culturii bulgare, în special în timpul stăpânirii otomane, când a păstrat identitatea națională. Arhitectura actuală datează în mare parte din perioada Renașterii bulgare din secolul al XIX-lea. Deosebit de impresionantă este biserica principală Adormirea Maicii Domnului, cu frescele sale magnifice create de cei mai buni maeștri ai vremii și iconostasul sculptat cu măiestrie. Turnul lui Hreljo, din secolul al XIV-lea, este cea mai veche clădire păstrată a complexului. Mănăstirea găzduiește, de asemenea, un muzeu important cu manuscrise valoroase, icoane și celebra Cruce a lui Raffail, o capodoperă a sculpturii în lemn. Din 1983, Mănăstirea Rila face parte din Patrimoniul Mondial UNESCO. Nu este doar un loc de spiritualitate profundă și o destinație pentru pelerini, ci și una dintre cele mai vizitate atracții din Bulgaria, care captivează vizitatorii prin frumusețea sa arhitecturală și atmosfera sa liniștită.",
      en: "The Rila Monastery, officially the Monastery of Saint Ivan of Rila, is the largest and most significant Orthodox monastery in Bulgaria and a symbol of national identity. It is situated at an elevation of 1,147 meters in the deep valley of the Rilska River in the Rila Mountains, surrounded by dense forests and majestic peaks. It was founded in the 10th century by the hermit Saint Ivan of Rila, who is revered today as the patron saint of Bulgaria. For centuries, the monastery was a center of Bulgarian education and culture, especially during the Ottoman rule, when it preserved the national identity. Most of the current architecture dates from the Bulgarian National Revival period in the 19th century. Particularly impressive is the main church, the Dormition of the Mother of God, with its magnificent frescoes created by the best masters of the time and its intricately carved iconostasis. The Hreljo Tower, dating from the 14th century, is the oldest surviving building in the complex. The monastery also houses a significant museum with valuable manuscripts, icons, and the famous Raffail's Cross, a masterpiece of woodcarving. Since 1983, the Rila Monastery has been a UNESCO World Heritage site. It is not only a place of deep spirituality and a destination for pilgrims but also one of Bulgaria's most visited landmarks, captivating visitors with its architectural beauty and peaceful atmosphere."
    },
    facts: {
      de: ["Status: UNESCO-Weltkulturerbe seit 1983", "Gründer: Hl. Iwan von Rila (10. Jh.)", "Höhe: 1147 m über dem Meeresspiegel", "Architektur: Bulgarische Wiedergeburt", "Highlight: Raffail-Kreuz (140 Miniszenen)", "Čltestes Gebäude: Hreljo-Turm (1335)", "Fresken: Über 1200 biblische Szenen", "Bedeutung: Geistiges Zentrum Bulgariens", "Lage: Rila-Nationalpark", "Besucher: Über 1 Million jährlich"],
      hu: ["Státusz: UNESCO Világörökség 1983 óta", "Alapító: Rilai Szent János (10. sz.)", "Magasság: 1147 m tengerszint felett", "Építészet: Bolgár újjászületés", "Látnivaló: Raffail-kereszt (140 miniatűr jelenet)", "Legrégebbi épület: Hreljo-torony (1335)", "Freskók: Több mint 1200 bibliai jelenet", "Jelentőség: Bulgária szellemi központja", "Fekvés: Rilai Nemzeti Park", "Látogatók: Évente több mint 1 millió"],
      ro: ["Statut: Patrimoniu Mondial UNESCO din 1983", "Fondator: Sf. Ioan de Rila (sec. X)", "Altitudine: 1147 m deasupra mării", "Arhitectură: Renașterea bulgară", "Atracție: Crucea lui Raffail (140 de mini-scene)", "Cea mai veche clădire: Turnul lui Hreljo (1335)", "Fresce: Peste 1200 de scene biblice", "Importanță: Centrul spiritual al Bulgariei", "Locație: Parcul Național Rila", "Vizitatori: Peste 1 milion anual"],
      en: ["Status: UNESCO World Heritage site since 1983", "Founder: St. Ivan of Rila (10th century)", "Elevation: 1,147 m above sea level", "Architecture: Bulgarian National Revival", "Highlight: Raffail's Cross (140 miniature scenes)", "Oldest building: Hreljo Tower (1335)", "Frescoes: Over 1,200 biblical scenes", "Significance: Spiritual center of Bulgaria", "Location: Rila National Park", "Visitors: Over 1 million annually"]
    },
    image: "/images/visualLab/bulgaria/rila.jpg"
  },
  {
    id: "bg-veliko-tarnovo",
    type: "city",
    parent: "bg-country",
    coords: [25.6172, 43.0757],
    name: {
      de: "Weliko Tarnowo",
      hu: "Veliko Tarnovo",
      ro: "Veliko Tărnovo",
      en: "Veliko Tarnovo"
    },
    description: {
      de: "Weliko Tarnowo, oft als die „Stadt der Zaren“ bezeichnet, ist eine der spektakulärsten Städte Bulgariens und war die Hauptstadt des Zweiten Bulgarischen Reiches. Die Stadt erstreckt sich über drei Hügel – Zarewez, Trapeziza und Sweta Gora – und wird vom gewundenen Fluss Jantra umflossen. Das unbestrittene Highlight ist die Festung Zarewez, eine monumentale Anlage mit dicken Mauern, Toren und der rekonstruierten Patriarchenkirche auf dem Gipfel, die nachts durch eine beeindruckende Licht- und Soundshow zum Leben erweckt wird. Die Altstadt von Weliko Tarnowo besticht durch ihre terrassenförmig an den steilen Hängen erbauten Häuser, die einen atemberaubenden Blick auf die Schlucht bieten. In der Samowodska Tscharschiya, der alten Handwerksstraße, können Besucher traditionelle bulgarische Handwerkskunst erleben und handgefertigte Souvenirs erwerben. Weliko Tarnowo ist nicht nur ein historisches Juwel, sondern auch eine lebendige Universitätsstadt mit einer dynamischen Atmosphäre. Die Stadt verbindet mittelalterliche Pracht mit kultureller Vielfalt und ist ein zentraler Ort für das bulgarische Nationalbewusstsein. Ein Spaziergang durch die engen Gassen führt vorbei an zahlreichen Kirchen, Museen und gemütlichen Restaurants, die lokale Spezialitäten anbieten. Weliko Tarnowo ist ein unverzichtbares Ziel für jeden, der die glorreiche Vergangenheit Bulgariens in einer einzigartigen natürlichen Kulisse erleben möchte.",
      hu: "Veliko Tarnovo, amelyet gyakran a „cárok városaként” emlegetnek, Bulgária egyik leglátványosabb városa, a Második Bolgár Birodalom egykori fővárosa. A város három dombra – Carevec, Trapezica és Szveta Gora – épült, amelyeket a kanyargós Jantra-folyó ölel körül. A legfőbb látnivaló a Carevec-erőd, egy monumentális építmény vastag falakkal, kapukkal és a dombtetőn álló, rekonstruált patriarchális székesegyházzal, amely éjszakánként lenyűgöző fény- és hangjáték helyszíne. Veliko Tarnovo óvárosa a meredek lejtőkre épült, teraszos házaival bűvöli el a látogatókat, ahonnan lélegzetelállító kilátás nyílik a szurdokra. A Szamovodszka Csarsija, a régi kézműves utca, a hagyományos bolgár kézművesség központja, ahol kézzel készült szuveníreket vásárolhatunk. Veliko Tarnovo nemcsak történelmi ékszerdoboz, hanem élénk egyetemi város is, dinamikus légkörrel. A város ötvözi a középkori pompát a kulturális sokszínűséggel, és a bolgár nemzeti öntudat központi helyszíne. A szűk utcákon tett séta során számos templom, múzeum és helyi specialitásokat kínáló étterem mellett haladhatunk el. Veliko Tarnovo kihagyhatatlan célpont mindazok számára, akik Bulgária dicső múltját egyedülálló természeti környezetben szeretnék átélni.",
      ro: "Veliko Târnovo, adesea numit „orașul țarilor”, este unul dintre cele mai spectaculoase orașe din Bulgaria și a fost capitala celui de-al Doilea Imperiu Bulgar. Orașul se întinde pe trei coline – Tsarevets, Trapezitsa și Sveta Gora – și este înconjurat de râul sinuos Yantra. Atracția incontestabilă este Cetatea Tsarevets, un complex monumental cu ziduri groase, porți și biserica patriarhală reconstruită pe vârf, care prinde viață noaptea printr-un spectacol impresionant de sunet și lumină. Orașul vechi din Veliko Târnovo impresionează prin casele sale construite în terase pe pantele abrupte, oferind o vedere uluitoare asupra defileului. În Samovodska Charshiya, vechea stradă a meșteșugarilor, vizitatorii pot experimenta măiestria tradițională bulgară și pot achiziționa suveniruri lucrate manual. Veliko Târnovo nu este doar o bijuterie istorică, ci și un oraș universitar vibrant, cu o atmosferă dinamică. Orașul îmbină splendoarea medievală cu diversitatea culturală și este un loc central pentru conștiința națională bulgară. O plimbare pe străzile înguste duce pe lângă numeroase biserici, muzee și restaurante primitoare care oferă specialități locale. Veliko Târnovo este o destinație indispensabilă pentru oricine dorește să experimenteze trecutul glorios al Bulgariei într-un cadru natural unic.",
      en: "Veliko Tarnovo, often referred to as the \"City of the Tsars,\" is one of Bulgaria's most spectacular cities and was the capital of the Second Bulgarian Empire. The city spans three hills—Tsarevets, Trapezitsa, and Sveta Gora—and is encircled by the winding Yantra River. The undisputed highlight is the Tsarevets Fortress, a monumental complex with thick walls, gates, and the reconstructed Patriarchal Cathedral at the summit, which comes to life at night through an impressive Sound and Light show. Veliko Tarnovo's Old Town charms visitors with its houses built in terraces on the steep slopes, offering breathtaking views of the gorge. In Samovodska Charshiya, the old crafts street, visitors can experience traditional Bulgarian craftsmanship and purchase handmade souvenirs. Veliko Tarnovo is not only a historical gem but also a vibrant university city with a dynamic atmosphere. The city blends medieval splendor with cultural diversity and is a central site for Bulgarian national identity. A walk through the narrow streets leads past numerous churches, museums, and cozy restaurants offering local specialties. Veliko Tarnovo is an essential destination for anyone wishing to experience Bulgaria's glorious past in a unique natural setting."
    },
    facts: {
      de: ["Status: Hauptstadt des Zweiten Bulgarischen Reiches", "Wahrzeichen: Festung Zarewez", "Geografie: Stadt auf drei Hügeln", "Fluss: Jantra-Schlucht", "Kultur: Licht- und Soundshow", "Handwerk: Samowodska Tscharschiya", "Geschichte: Zentrum der bulgarischen Befreiung", "Bildung: Eine der größten Universitäten Bulgariens"],
      hu: ["Státusz: A Második Bolgár Birodalom fővárosa", "Jelkép: Carevec-erőd", "Földrajz: Város három dombon", "Folyó: Jantra-szurdok", "Kultúra: Fény- és hangjáték", "Kézművesség: Szamovodszka Csarsija", "Történelem: A bolgár felszabadulás központja", "Oktatás: Bulgária egyik legnagyobb egyeteme"],
      ro: ["Statut: Capitala celui de-al Doilea Imperiu Bulgar", "Simbol: Cetatea Tsarevets", "Geografie: Oraș pe trei coline", "Râu: Defileul Yantra", "Cultură: Spectacol de sunet și lumină", "Meșteșuguri: Samovodska Charshiya", "Istorie: Centrul eliberării bulgare", "Educație: Una dintre cele mai mari universități din Bulgaria"],
      en: ["Status: Capital of the Second Bulgarian Empire", "Landmark: Tsarevets Fortress", "Geography: City on three hills", "River: Yantra Gorge", "Culture: Sound and Light show", "Crafts: Samovodska Charshiya", "History: Center of Bulgarian liberation", "Education: One of Bulgaria's largest universities"]
    },
    image: "/images/visualLab/bulgaria/veliko-tarnovo.jpg"
  },
  {
    id: "bg-bansko",
    type: "city",
    parent: "bg-country",
    coords: [23.4857, 41.8383],
    name: {
      de: "Bansko",
      hu: "Banszko",
      ro: "Bansko",
      en: "Bansko"
    },
    description: {
      de: "Bansko, am Fuße des Pirin-Gebirges gelegen, ist Bulgariens führendes Wintersportzentrum und ein charmantes Reiseziel das ganze Jahr über. Die Stadt verbindet eine historische Altstadt mit kopfsteingepflasterten Gassen und traditionellen Steinhäusern mit modernster Skiausrüstung und luxuriösen Hotels. Bansko ist bekannt für seine langen und gut präparierten Pisten, die sowohl Anfänger als auch Profis anziehen. Im Sommer dient die Stadt als idealer Ausgangspunkt für Wanderungen und Mountainbike-Touren im Nationalpark Pirin. Die lokale Gastronomie in den typischen „Mehanas“ bietet herzhafte bulgarische Spezialitäten in gemütlicher Atmosphäre. Bansko hat sich zudem zu einem beliebten Ort für digitale Nomaden entwickelt, was der Stadt ein internationales und dynamisches Flair verleiht. Die Mischung aus alpiner Natur, reicher Geschichte und moderner Infrastruktur macht Bansko zu einem der vielseitigsten Urlaubsziele auf dem Balkan.",
      hu: "Banszko, a Pirin-hegység lábánál fekvő város, Bulgária vezető téli sportközpontja és egész évben vonzó úti cél. A város ötvözi a történelmi óvárost macskaköves utcáival és hagyományos kőházaival a legmodernebb sífelszerelésekkel és luxusszállodákkal. Banszko híres hosszú és jól karbantartott pályáiról, amelyek kezdőket és profikat egyaránt vonzanak. Nyáron a város ideális kiindulópont a Pirin Nemzeti Parkban tett túrákhoz és hegyi kerékpáros túrákhoz. A tipikus „mehanákban” (vendéglőkben) a helyi gasztronómia kiadós bolgár specialitásokat kínál hangulatos környezetben. Banszko emellett a digitális nomádok kedvelt helyévé is vált, ami nemzetközi és dinamikus hangulatot kölcsönöz a városnak. Az alpesi természet, a gazdag történelem és a modern infrastruktúra keveréke Banszkót a Balkán egyik legsokoldalúbb üdülőhelyévé teszi.",
      ro: "Bansko, situat la poalele Munților Pirin, este cel mai important centru de sporturi de iarnă din Bulgaria și o destinație fermecătoare pe tot parcursul anului. Orașul îmbină un centru istoric cu străzi pietruite și case tradiționale din piatră cu echipamente de schi de ultimă generație și hoteluri de lux. Bansko este cunoscut pentru pârtiile sale lungi și bine întreținute, care atrag atât începători, cât și profesioniști. Vara, orașul servește ca punct de plecare ideal pentru drumeții și tururi cu bicicleta de munte în Parcul Național Pirin. Gastronomia locală din tipicele „mehana” oferă specialități bulgărești consistente într-o atmosferă primitoare. Bansko a devenit, de asemenea, un loc popular pentru nomazii digitali, ceea ce conferă orașului un fler internațional și dinamic. Amestecul de natură alpină, istorie bogată și infrastructură modernă face din Bansko una dintre cele mai versatile destinații de vacanță din Balcani.",
      en: "Bansko, nestled at the foot of the Pirin Mountains, is Bulgaria's leading winter sports center and a charming year-round destination. The town combines a historic old town with cobblestone streets and traditional stone houses with state-of-the-art skiing facilities and luxury hotels. Bansko is famous for its long and well-groomed slopes, attracting both beginners and professionals. In summer, the town serves as an ideal base for hiking and mountain biking tours in Pirin National Park. Local gastronomy in typical \"mehanas\" offers hearty Bulgarian specialties in a cozy atmosphere. Bansko has also become a popular hub for digital nomads, giving the town an international and dynamic flair. The blend of alpine nature, rich history, and modern infrastructure makes Bansko one of the most versatile holiday destinations in the Balkans."
    },
    facts: {
      de: ["Status: Bestes Skigebiet Bulgariens", "Lage: Am Fuße des Pirin-Gebirges", "Höhe: 925 m über dem Meeresspiegel", "Kultur: Jazz-Festival im August", "Gastronomie: Traditionelle Mehanas", "Tourismus: Zentrum für digitale Nomaden"],
      hu: ["Státusz: Bulgária legjobb síterepe", "Fekvés: A Pirin-hegység lábánál", "Magasság: 925 m tengerszint felett", "Kultúra: Jazzfesztivál augusztusban", "Gasztronómia: Hagyományos mehanák", "Turizmus: Digitális nomádok központja"],
      ro: ["Statut: Cea mai bună stațiune de schi din Bulgaria", "Locație: La poalele Munților Pirin", "Altitudine: 925 m deasupra mării", "Cultură: Festival de jazz în august", "Gastronomie: Mehana tradiționale", "Turism: Centru pentru nomazi digitali"],
      en: ["Status: Best ski resort in Bulgaria", "Location: At the foot of the Pirin Mountains", "Elevation: 925 m above sea level", "Culture: Jazz Festival in August", "Gastronomy: Traditional mehanas", "Tourism: Hub for digital nomads"]
    },
    image: "/images/visualLab/bulgaria/bansko.jpg"
  },
  {
    id: "bg-nessebar",
    type: "city",
    parent: "bg-country",
    coords: [27.7360, 42.6593],
    name: {
      de: "Nessebar",
      hu: "Neszebar",
      ro: "Nesebăr",
      en: "Nessebar"
    },
    description: {
      de: "Nessebar, oft als die „Perle des Schwarzen Meeres“ bezeichnet, ist eine der ältesten Städte Europas und ein faszinierendes Juwel an der bulgarischen Küste. Die Stadt liegt auf einer felsigen Halbinsel, die nur durch einen schmalen Damm mit dem Festland verbunden ist. Mit einer über 3.000-jährigen Geschichte, die von thrakischen, griechischen, römischen und byzantinischen Einflüssen geprägt ist, bietet Nessebar eine unvergleichliche Dichte an historischen Denkmälern. Besonders berühmt ist die Altstadt für ihre zahlreichen mittelalterlichen Kirchen, von denen viele gut erhaltene Fresken und kunstvolle Fassaden aus Keramik und Ziegeln besitzen. Die charakteristischen Holzhäuser aus der Zeit der bulgarischen Wiedergeburt verleihen den engen, kopfsteingepflasterten Gassen eine romantische Atmosphäre. Nessebar ist seit 1983 UNESCO-Weltkulturerbe und zieht Besucher durch seine Mischung aus archäologischer Bedeutung und maritimem Flair an. Neben den historischen Schätzen bietet die Umgebung von Nessebar moderne Ferienanlagen und wunderschöne Sandstrände, was die Stadt zu einem idealen Ziel für Kulturinteressierte und Badeurlauber macht. Ein Spaziergang entlang der alten Festungsmauern bei Sonnenuntergang bietet einen unvergesslichen Blick auf das Meer und die Küste. Nessebar ist ein lebendiges Denkmal, das die reiche Geschichte der Balkanregion auf engstem Raum vereint.",
      hu: "Neszebar, amelyet gyakran a „Fekete-tenger gyöngyszemeként” emlegetnek, Európa egyik legrégebbi városa és a bolgár tengerpart egyik leglenyűgözőbb ékköve. A város egy sziklás félszigeten fekszik, amelyet csak egy keskeny gát köt össze a szárazfölddel. Több mint 3000 éves múltjával, amelyet trák, görög, római és bizánci hatások formálták, Neszebar a történelmi emlékek páratlan sűrűségét kínálja. Az óváros különösen híres számos középkori templomáról, amelyek közül sok jó állapotban fennmaradt freskókkal, valamint kerámiából és téglából készült, művészi homlokzatokkal büszkélkedhet. A bolgár újjászületés korából származó jellegzetes faházak romantikus hangulatot kölcsönöznek a szűk, macskaköves utcáknak. Neszebar 1983 óta az UNESCO Világörökség része, és a régészeti jelentőség, valamint a tengerparti hangulat ötvözetével vonzza a látogatókat. A történelmi kincsek mellett Neszebar környéke modern üdülőhelyeket és gyönyörű homokos strandokat kínál, így a város ideális célpont a kultúra kedvelői és a strandolni vágyók számára egyaránt. Egy séta a régi várfalak mentén naplementekor felejthetetlen kilátást nyújt a tengerre és a partvidékre. Neszebar egy élő emlékmű, amely a Balkán-régió gazdag történelmét egyesíti egy apró területen.",
      ro: "Nesebăr, adesea numit „perla Mării Negre”, este unul dintre cele mai vechi orașe din Europa și o bijuterie fascinantă de pe coasta bulgară. Orașul este situat pe o peninsulă stâncoasă, legată de continent doar printr-un dig îngust. Cu o istorie de peste 3.000 de ani, marcată de influențe trace, grecești, romane și bizantine, Nesebăr oferă o densitate inegalabilă de monumente istorice. Orașul vechi este renumit în special pentru numeroasele sale biserici medievale, dintre care multe posedă fresce bine conservate și fațade artistice din ceramică și cărămidă. Casele caracteristice din lemn din perioada Renașterii bulgare conferă străzilor înguste și pietruite o atmosferă romantică. Nesebăr face parte din Patrimoniul Mondial UNESCO din 1983 și atrage vizitatorii prin amestecul său de importanță arheologică și fler maritim. Pe lângă comorile istorice, împrejurimile orașului Nesebăr oferă stațiuni moderne și plaje frumoase de nisip, ceea ce face din oraș o destinație ideală atât pentru cei interesați de cultură, cât și pentru turiștii care doresc relaxare la plajă. O plimbare de-a lungul vechilor ziduri ale cetății la apus oferă o vedere de neuitat asupra mării și a coastei. Nesebăr este un monument viu care reunește istoria bogată a regiunii balcanice într-un spațiu restrâns.",
      en: "Nessebar, often referred to as the \"Pearl of the Black Sea,\" is one of the oldest cities in Europe and a fascinating gem on the Bulgarian coast. The city is situated on a rocky peninsula connected to the mainland only by a narrow causeway. With a history spanning over 3,000 years, shaped by Thracian, Greek, Roman, and Byzantine influences, Nessebar offers an unparalleled density of historical monuments. The Old Town is particularly famous for its numerous medieval churches, many of which feature well-preserved frescoes and ornate ceramic and brick facades. The characteristic wooden houses from the Bulgarian National Revival period lend a romantic atmosphere to the narrow, cobblestone streets. Nessebar has been a UNESCO World Heritage site since 1983 and attracts visitors with its blend of archaeological significance and maritime flair. In addition to its historical treasures, the area surrounding Nessebar offers modern resorts and beautiful sandy beaches, making the city an ideal destination for both culture enthusiasts and beachgoers. A walk along the ancient fortress walls at sunset provides an unforgettable view of the sea and the coastline. Nessebar is a living monument that unites the rich history of the Balkan region within a compact space."
    },
    facts: {
      de: ["Status: UNESCO-Weltkulturerbe seit 1983", "Alter: über 3000 Jahre", "Geografie: Halbinselstadt", "Kirchen: Einst über 40 Gotteshäuser", "Architektur: Holzhäuser der Wiedergeburt", "Geschichte: Antikes Mesembria", "Wirtschaft: Tourismus und Fischerei", "Lage: Südliche Schwarzmeerküste"],
      hu: ["Státusz: UNESCO Világörökség 1983 óta", "Kor: több mint 3000 év", "Földrajz: Félszigetváros", "Templomok: Egykor több mint 40 templom", "Építészet: Újjászületés kori faházak", "Történelem: Az ókori Meszembria", "Gazdaság: Turizmus és halászat", "Fekvés: Déli Fekete-tenger partja"],
      ro: ["Statut: Patrimoniu Mondial UNESCO din 1983", "Vârstă: peste 3000 de ani", "Geografie: Oraș pe peninsulă", "Biserici: Odinioară peste 40 de lăcașuri", "Arhitectură: Case din lemn din perioada Renașterii", "Istorie: Vechiul Mesembria", "Economie: Turism și pescuit", "Locație: Coasta sudică a Mării Negre"],
      en: ["Status: UNESCO World Heritage site since 1983", "Age: over 3,000 years", "Geography: Peninsula town", "Churches: Once over 40 places of worship", "Architecture: Revival-period wooden houses", "History: Ancient Mesembria", "Economy: Tourism and fishing", "Location: Southern Black Sea coast"]
    },
    image: "/images/visualLab/bulgaria/nessebar.jpg"
  },
  {
    id: "bg-pirin",
    type: "landmark",
    parent: "bg-country",
    coords: [23.4000, 41.7500],
    name: {
      de: "Nationalpark Pirin",
      hu: "Pirin Nemzeti Park",
      ro: "Parcul Național Pirin",
      en: "Pirin National Park"
    },
    description: {
      de: "Der Nationalpark Pirin, im Südwesten Bulgariens gelegen, ist ein majestätisches Hochgebirgsreservat und gehört seit 1983 zum UNESCO-Weltnaturerbe. Der Park umfasst den größten Teil des Pirin-Gebirges, das für seine schroffen Granitgipfel, tiefen Täler und über 180 kristallklaren Gletscherseen bekannt ist. Der höchste Gipfel ist der Wichren (2.914 m), der dritthöchste Berg des Balkans, der Bergsteiger durch seine markante Kalksteinwand herausfordert. Die Landschaft des Parks ist von außergewöhnlicher biologischer Vielfalt geprägt; hier wachsen seltene Pflanzen wie das Edelweiß und die Baikuschew-Kiefer, die mit über 1.300 Jahren als einer der ältesten Bäume Bulgariens gilt. Der Park ist zudem ein Rückzugsort für Braunbären, Wölfe und Gämsen. Wanderer finden hier ein weitverzweigtes Netz an markierten Wegen, die zu spektakulären Aussichtspunkten und gemütlichen Berghütten führen. Im Winter verwandelt sich die Region um Bansko, das am Rande des Parks liegt, in eines der besten Skigebiete Osteuropas. Der Nationalpark Pirin ist nicht nur ein Paradies für Outdoor-Enthusiasten, sondern auch ein wichtiges Zentrum für den Naturschutz. Die alpine Flora und Fauna sowie die unberührte Wildnis machen den Park zu einem der wertvollsten Naturschätze Europas. Ein Besuch im Pirin-Gebirge bietet die Möglichkeit, die rohe Kraft und Schönheit der Natur in ihrer reinsten Form zu erleben, fernab von der Hektik des modernen Lebens.",
      hu: "A Pirin Nemzeti Park Bulgária délnyugati részén fekvő, fenséges magashegyi rezervátum, amely 1983 óta az UNESCO természeti világörökségének része. A park a Pirin-hegység nagy részét magában foglalja, amely meredek gránitcsúcsairól, mély völgyeiről és több mint 180 kristálytiszta gleccsertaváról híres. Legmagasabb csúcsa a Vihren (2914 m), a Balkán harmadik legmagasabb hegye, amely markáns mészkőfalaival komoly kihívást jelent a hegymászók számára. A park tájait rendkívüli biológiai sokszínűség jellemzi; olyan ritka növények élnek itt, mint a havasi gyopár és a Bajkusev-fenyő, amely több mint 1300 évével Bulgária egyik legöregebb fája. A park emellett barna medvék, farkasok és zergék menedékhelye is. A túrázók jelzett utak kiterjedt hálózatát találják itt, amelyek látványos kilátópontokhoz és hangulatos hegyi menedékházakhoz vezetnek. Télen a park szélén fekvő Banszko környéke Kelet-Európa egyik legjobb síterepévé válik. A Pirin Nemzeti Park nemcsak a szabadtéri sportok kedvelőinek paradicsoma, hanem a természetvédelem fontos központja is. Az alpesi flóra és fauna, valamint az érintetlen vadon Európa egyik legértékesebb természeti kincsévé teszi a parkot. A Pirin-hegységben tett látogatás lehetőséget nyújt arra, hogy az ember a természet nyers erejét és szépségét a legtisztább formájában tapasztalja meg, távol a modern élet zajától.",
      ro: "Parcul Național Pirin, situat în sud-vestul Bulgariei, este o rezervație montană maiestuoasă și face parte din Patrimoniul Mondial Natural UNESCO din 1983. Parcul cuprinde cea mai mare parte a Munților Pirin, cunoscuți pentru vârfurile lor de granit abrupte, văile adânci și peste 180 de lacuri glaciare cristaline. Cel mai înalt vârf este Vihren (2.914 m), al treilea munte ca înălțime din Balcani, care provoacă alpiniștii prin peretele său de calcar distinctiv. Peisajul parcului este marcat de o biodiversitate excepțională; aici cresc plante rare precum floarea-de-colț și pinul lui Baikushev, care, cu o vârstă de peste 1.300 de ani, este considerat unul dintre cei mai bătrâni copaci din Bulgaria. Parcul este, de asemenea, un refugiu pentru urșii bruni, lupi și capre negre. Drumeții găsesc aici o rețea vastă de trasee marcate care duc la puncte de belvedere spectaculoase și cabane montane primitoare. Iarna, regiunea din jurul orașului Bansko, situat la marginea parcului, se transformă într-una dintre cele mai bune zone de schi din Europa de Est. Parcul Național Pirin nu este doar un paradis pentru entuziaștii activităților în aer liber, ci și un centru important pentru conservarea naturii. Flora și fauna alpină, precum și sălbăticia neatinsă, fac din parc una dintre cele mai valoroase comori naturale ale Europei. O vizită în Munții Pirin oferă ocazia de a experimenta forța brută și frumusețea naturii în forma sa cea mai pură, departe de agitația vieții moderne.",
      en: "Pirin National Park, located in southwestern Bulgaria, is a majestic high-mountain reserve and has been a UNESCO World Natural Heritage site since 1983. The park encompasses the larger part of the Pirin Mountains, famous for their rugged granite peaks, deep valleys, and over 180 crystal-clear glacial lakes. The highest peak is Vihren (2,914 m), the third-highest mountain in the Balkans, which challenges climbers with its striking limestone wall. The park's landscape is characterized by exceptional biodiversity; rare plants such as edelweiss and the Baikushev pine, which at over 1,300 years old is one of Bulgaria's oldest trees, grow here. The park is also a sanctuary for brown bears, wolves, and chamois. Hikers will find an extensive network of marked trails leading to spectacular viewpoints and cozy mountain huts. In winter, the region around Bansko, situated on the edge of the park, transforms into one of the best ski resorts in Eastern Europe. Pirin National Park is not only a paradise for outdoor enthusiasts but also an important center for nature conservation. The alpine flora and fauna, as well as the untouched wilderness, make the park one of Europe's most valuable natural treasures. A visit to the Pirin Mountains offers the chance to experience the raw power and beauty of nature in its purest form, far from the hustle and bustle of modern life."
    },
    facts: {
      de: ["Status: UNESCO-Weltnaturerbe seit 1983", "Höchster Gipfel: Wichren (2914 m)", "Gletscherseen: Über 180 im Parkgebiet", "Flora: Über 1300 Pflanzenarten", "Čltester Baum: Baikuschew-Kiefer (1300+ Jahre)", "Fauna: Rückzugsort für Braunbären und Gämsen", "Geologie: Granit- und Kalksteinmassive", "Tourismus: Zentrum für Wandern und Skifahren", "Lage: Südwestbulgarien", "Schutz: Einer der ältesten Nationalparks Bulgariens"],
      hu: ["Státusz: UNESCO természeti világörökség 1983 óta", "Legmagasabb csúcs: Vihren (2914 m)", "Gleccsertavak: Több mint 180 a parkban", "Flóra: Több mint 1300 növényfaj", "Legöregebb fa: Bajkusev-fenyő (1300+ év)", "Fauna: Barna medvék és zergék menedéke", "Geológia: Gránit- és mészkőmasszívumok", "Turizmus: Túrázás és síelés központja", "Fekvés: Délnyugat-Bulgária", "Védelem: Bulgária egyik legrégebbi nemzeti parkja"],
      ro: ["Statut: Patrimoniu Mondial Natural UNESCO din 1983", "Cel mai înalt vârf: Vihren (2914 m)", "Lacuri glaciare: Peste 180 în parc", "Floră: Peste 1300 de specii de plante", "Cel mai bătrân copac: Pinul lui Baikushev (1300+ ani)", "Faună: Refugiu pentru urși bruni și capre negre", "Geologie: Masive de granit și calcar", "Turism: Centru pentru drumeții și schi", "Locație: Sud-vestul Bulgariei", "Protecție: Unul dintre cele mai vechi parcuri naționale"],
      en: ["Status: UNESCO World Natural Heritage site since 1983", "Highest peak: Vihren (2,914 m)", "Glacial lakes: Over 180 in the park area", "Flora: Over 1,300 plant species", "Oldest tree: Baikushev pine (1,300+ years)", "Fauna: Sanctuary for brown bears and chamois", "Geology: Granite and limestone massifs", "Tourism: Center for hiking and skiing", "Location: Southwestern Bulgaria", "Protection: One of Bulgaria's oldest national parks"]
    },
    image: "/images/visualLab/bulgaria/pirin.jpg"
  }
];

export const bulgariaCities: POI[] = [
  {
    id: "city-sofia",
    type: "city",
    parent: "bg-country",
    coords: [23.3219, 42.6977],
    name: {
      de: "Sofia",
      hu: "Szófia",
      ro: "Sofia",
      en: "Sofia"
    },
    description: {
      de: "Bulgariens Hauptstadt mit der Alexander-Newski-Kathedrale und dem Witoscha-Gebirge.",
      hu: "Bulgária fővárosa, az Alekszander Nyevszki-székesegyházzal és a Vitosa-heggyel.",
      ro: "Capitala Bulgariei, cu Catedrala Alexandr Nevski și muntele Vitosha.",
      en: "Bulgaria's capital, home to Alexander Nevsky Cathedral and Vitosha Mountain."
    },
    facts: {
      de: ["Hauptstadt Bulgariens", "Alexander-Newski-Kathedrale", "Am Fuß des Witoscha-Gebirges"],
      hu: ["Bulgária fővárosa", "Alekszander Nyevszki-székesegyház", "A Vitosa-hegység lábánál"],
      ro: ["Capitala Bulgariei", "Catedrala Alexandr Nevski", "La poalele muntelui Vitosha"],
      en: ["Capital of Bulgaria", "Alexander Nevsky Cathedral", "At the foot of Vitosha Mountain"]
    },
    image: "/geo-images/bulgaria/city-sofia.webp"
  },
  {
    id: "city-plovdiv",
    type: "city",
    parent: "bg-country",
    coords: [24.7453, 42.1354],
    name: {
      de: "Plowdiw",
      hu: "Plovdiv",
      ro: "Plovdiv",
      en: "Plovdiv"
    },
    description: {
      de: "Eine der ältesten dauerhaft bewohnten Städte Europas mit römischem Altstadtkern und UNESCO-Erbe.",
      hu: "Európa egyik legrégebben folyamatosan lakott városa, római óvárossal és UNESCO-örökséggel.",
      ro: "Unul dintre cele mai vechi orașe locuite continuu din Europa, cu centru vechi roman și patrimoniu UNESCO.",
      en: "One of Europe's oldest continuously inhabited cities, with a Roman old town and UNESCO heritage."
    },
    facts: {
      de: ["Sehr alte Siedlungsgeschichte", "Römisches Theater", "UNESCO-naher Altstadtkern"],
      hu: ["Nagyon régi településtörténet", "Római színház", "UNESCO-közeli óváros"],
      ro: ["Istorie de așezare foarte veche", "Teatru roman", "Centru vechi cu statut UNESCO"],
      en: ["Very old settlement history", "Roman theater", "UNESCO-listed old town area"]
    },
    image: "/geo-images/bulgaria/city-plovdiv.webp"
  },
  {
    id: "city-varna",
    type: "city",
    parent: "bg-country",
    coords: [27.9147, 43.2141],
    name: {
      de: "Warna",
      hu: "Várna",
      ro: "Varna",
      en: "Varna"
    },
    description: {
      de: "Schwarzmeer-Resort mit wichtigen Museen und maritimem Stadtcharakter.",
      hu: "Fekete-tengeri üdülőhely fontos múzeumokkal és tengerparti hangulattal.",
      ro: "Stațiune la Marea Neagră, cu muzee importante și caracter maritim.",
      en: "A Black Sea resort city with important museums and a strong maritime character."
    },
    facts: {
      de: ["Schwarzmeerküste", "Archäologisches Museum", "Sommer- und Badeziel"],
      hu: ["Fekete-tengeri part", "Régészeti Múzeum", "Nyári üdülőváros"],
      ro: ["Litoralul Mării Negre", "Muzeul Arheologic", "Destinație de vară și plajă"],
      en: ["Black Sea coast", "Archaeological Museum", "Summer resort destination"]
    },
    image: "/geo-images/bulgaria/city-varna.webp"
  },
  {
    id: "city-burgas",
    type: "city",
    parent: "bg-country",
    coords: [27.4626, 42.5048],
    name: {
      de: "Burgas",
      hu: "Burgasz",
      ro: "Burgas",
      en: "Burgas"
    },
    description: {
      de: "Burgas ist die viertgrößte Stadt Bulgariens und das wirtschaftliche sowie kulturelle Zentrum der südlichen Schwarzmeerküste. Die Stadt ist bekannt für ihren bedeutenden Seehafen, die Ölraffinerie und ihre Rolle als wichtiger Verkehrsknotenpunkt. Ein besonderes Highlight von Burgas ist der Meeresgarten, ein weitläufiger Park, der sich entlang der Küste erstreckt und mit seinen gepflegten Alleen, Skulpturen und dem Blick auf das Meer zum Verweilen einlädt. Burgas ist zudem von drei Seen umgeben – dem Atanasowo-See, dem Burgas-See und dem Mandra-See –, die wichtige Naturschutzgebiete und Rückzugsorte für zahlreiche Vogelarten sind. Die Stadt bietet eine lebendige Fußgängerzone mit zahlreichen Geschäften, Cafés und Restaurants, die frischen Fisch und lokale Spezialitäten servieren. Kulturell ist Burgas durch verschiedene Festivals geprägt, darunter das berühmte Sandskulpturen-Festival. Die Nähe zu beliebten Ferienorten wie Sosopol und Nessebar macht Burgas zu einem idealen Ausgangspunkt für Erkundungen in der Region. Die Stadt verbindet industriellen Fortschritt mit einer entspannten maritimen Atmosphäre und bietet Besuchern eine hohe Lebensqualität und vielfältige Freizeitmöglichkeiten.",
      hu: "Burgasz Bulgária negyedik legnagyobb városa, a déli Fekete-tenger partvidékének gazdasági és kulturális központja. A város jelentős tengeri kikötőjéről, olajfinomítójáról és fontos közlekedési csomópontként betöltött szerepéről ismert. Burgasz egyik legfőbb látnivalója a Tengeri kert, egy kiterjedt park, amely a part mentén húzódik, gondozott sétányaival, szobraival és a tengerre nyíló kilátással hívogatja a látogatókat. Burgaszt három tó veszi körül – az Atanaszovo-tó, a Burgaszi-tó és a Mandra-tó –, amelyek fontos természetvédelmi területek és számos madárfaj menedékhelyei. A város élénk sétálóutcával rendelkezik, ahol számos üzlet, kávézó és friss halat, valamint helyi specialitásokat kínáló étterem található. Kulturális szempontból Burgaszt különféle fesztiválok jellemzik, köztük a híres homokszobor-fesztivál. A népszerű üdülőhelyek, mint Szozopol és Neszebar közelsége Burgaszt ideális kiindulóponttá teszi a régió felfedezéséhez. A város ötvözi az ipari fejlődést a nyugodt tengerparti légkörrel, magas életminőséget és változatos szabadidős lehetőségeket kínálva a látogatóknak.",
      ro: "Burgas este al patrulea oraș ca mărime din Bulgaria și centrul economic și cultural al coastei de sud a Mării Negre. Orașul este cunoscut pentru portul său maritim important, rafinăria de petrol și rolul său de nod de transport major. Un punct culminant special al orașului Burgas este Grădina Mării, un parc vast care se întinde de-a lungul coastei și invită la relaxare cu aleile sale bine întreținute, sculpturile și vederea la mare. Burgas este, de asemenea, înconjurat de trei lacuri – Lacul Atanasovsko, Lacul Burgas și Lacul Mandra – care sunt rezervații naturale importante și refugii pentru numeroase specii de păsări. Orașul oferă o zonă pietonală vibrantă, cu numeroase magazine, cafenele și restaurante care servesc pește proaspăt și specialități locale. Din punct de vedere cultural, Burgas este marcat de diverse festivaluri, inclusiv celebrul festival de sculpturi în nisip. Proximitatea față de stațiuni populare precum Sozopol și Nesebăr face din Burgas un punct de plecare ideal pentru explorări în regiune. Orașul îmbină progresul industrial cu o atmosferă maritimă relaxată, oferind vizitatorilor o calitate ridicată a vieții și posibilități diverse de petrecere a timpului liber.",
      en: "Burgas is the fourth-largest city in Bulgaria and the economic and cultural center of the southern Black Sea coast. The city is known for its significant seaport, oil refinery, and role as a major transport hub. A special highlight of Burgas is the Sea Garden, an expansive park stretching along the coast, inviting visitors to linger with its well-kept avenues, sculptures, and sea views. Burgas is also surrounded by three lakes—Lake Atanasovsko, Lake Burgas, and Lake Mandra—which are important nature reserves and sanctuaries for numerous bird species. The city offers a vibrant pedestrian zone with many shops, cafes, and restaurants serving fresh fish and local specialties. Culturally, Burgas is characterized by various festivals, including the famous Sand Sculpture Festival. Its proximity to popular resorts like Sozopol and Nessebar makes Burgas an ideal starting point for exploring the region. The city combines industrial progress with a relaxed maritime atmosphere, offering visitors a high quality of life and diverse leisure opportunities."
    },
    facts: {
      de: ["Status: Wirtschaftszentrum Südbulgariens", "Lage: Am Golf von Burgas", "Natur: Umgeben von drei Seen", "Wahrzeichen: Meeresgarten (Morska Gradina)", "Wirtschaft: Größte Ölraffinerie des Balkans", "Kultur: Sandskulpturen-Festival", "Verkehr: Internationaler Flughafen Burgas", "Geschichte: Antike Siedlung Pyrgos"],
      hu: ["Státusz: Dél-Bulgária gazdasági központja", "Fekvés: A Burgaszi-öböl partján", "Természet: Három tó veszi körül", "Jelkép: Tengeri kert (Morszka Gradina)", "Gazdaság: A Balkán legnagyobb olajfinomítója", "Kultúra: Homokszobor-fesztivál", "Közlekedés: Burgaszi nemzetközi repülőtér", "Történelem: Az ókori Pürgosz település"],
      ro: ["Statut: Centrul economic al Bulgariei de Sud", "Locație: În Golful Burgas", "Natură: Înconjurat de trei lacuri", "Simbol: Grădina Mării (Morska Gradina)", "Economie: Cea mai mare rafinărie din Balcani", "Cultură: Festivalul de sculpturi în nisip", "Transport: Aeroportul Internațional Burgas", "Istorie: Vechea așezare Pyrgos"],
      en: ["Status: Economic center of Southern Bulgaria", "Location: On the Gulf of Burgas", "Nature: Surrounded by three lakes", "Landmark: Sea Garden (Morska Gradina)", "Economy: Largest oil refinery in the Balkans", "Culture: Sand Sculpture Festival", "Transport: Burgas International Airport", "History: Ancient settlement of Pyrgos"]
    },
    image: "/geo-images/bulgaria/city-burgas.webp"
  },
  {
    id: "city-veliko-tarnovo",
    type: "city",
    parent: "bg-country",
    coords: [25.6172, 43.0757],
    name: {
      de: "Weliko Tarnowo",
      hu: "Veliko Tarnovo",
      ro: "Veliko Târnovo",
      en: "Veliko Tarnovo"
    },
    description: {
      de: "Mittelalterliche Hauptstadt mit der Festung Tsarevets über dem Jantra-Tal.",
      hu: "Középkori főváros, a Carevec erőddel a Jantra-völgy fölött.",
      ro: "Capitală medievală, cu fortăreața Țareveț deasupra văii Yantra.",
      en: "A medieval capital with Tsarevets Fortress above the Yantra valley."
    },
    facts: {
      de: ["Historische Zarenstadt", "Tsarevets-Festung", "Malerische Hügelstadt"],
      hu: ["Történelmi cárváros", "Carevec erőd", "Festői hegyoldali város"],
      ro: ["Oraș istoric al țarilor", "Cetatea Țareveț", "Oraș pitoresc pe dealuri"],
      en: ["Historic city of the tsars", "Tsarevets Fortress", "Scenic hill city"]
    },
    image: "/geo-images/bulgaria/city-veliko-tarnovo.webp"
  },
  {
    id: "city-vidin",
    type: "city",
    parent: "bg-country",
    coords: [22.8828, 43.9930],
    name: {
      de: "Vidin",
      hu: "Vidin",
      ro: "Vidin",
      en: "Vidin"
    },
    description: {
      de: "Vidin, am Ufer der Donau im Nordwesten Bulgariens gelegen, ist eine Stadt mit einer reichen mittelalterlichen Geschichte und einer strategischen Bedeutung als Grenzstadt. Das unbestrittene Wahrzeichen ist die Festung Baba Vida, die einzige vollständig erhaltene mittelalterliche Burg des Landes, die majestätisch über dem Fluss thront. Vidin verbindet seinen historischen Charme mit einer entspannten Atmosphäre an der Uferpromenade, die zu Spaziergängen mit Blick auf Rumänien einlädt. Die Stadt beherbergt zudem bedeutende religiöse Bauwerke wie die Kathedrale des Heiligen Demetrius und die Synagoge von Vidin, die derzeit restauriert wird. Als Tor zum Nordwesten bietet Vidin Einblicke in eine Region, die durch ihre kulturelle Vielfalt und ihre Lage an der Donau geprägt ist. Die Stadt ist ein wichtiger Halt für Flusskreuzfahrten und ein Ort, an dem Geschichte und Moderne aufeinandertreffen.",
      hu: "Vidin Bulgária északnyugati részén, a Duna partján fekvő város, amely gazdag középkori múlttal és határvárosi stratégiai jelentőséggel bír. Legfőbb látnivalója a Baba Vida erőd, az ország egyetlen teljesen épen maradt középkori vára, amely fenségesen magasodik a folyó fölé. Vidin ötvözi történelmi báját a Duna-parti sétány nyugodt légkörével, ahonnan kilátás nyílik Romániára. A város jelentős vallási épületeknek is otthont ad, mint például a Szent Demeter-székesegyház és a vidini zsinagóga, amely jelenleg felújítás alatt áll. Északnyugat kapujaként Vidin betekintést nyújt egy olyan régióba, amelyet a kulturális sokszínűség és a dunai elhelyezkedés határoz meg. A város a folyami hajóutak fontos állomása, ahol a történelem és a jelen találkozik.",
      ro: "Vidin, situat pe malul Dunării în nord-vestul Bulgariei, este un oraș cu o istorie medievală bogată și o importanță strategică ca oraș de frontieră. Simbolul incontestabil este Cetatea Baba Vida, singura castel medieval complet conservat din țară, care domină maiestuos fluviul. Vidin combină farmecul său istoric cu o atmosferă relaxată pe faleza Dunării, care invită la plimbări cu vedere spre România. Orașul găzduiește, de asemenea, edificii religioase importante, cum ar fi Catedrala Sfântul Dumitru și Sinagoga din Vidin, aflată în prezent în restaurare. Ca poartă către nord-vest, Vidin oferă perspective asupra unei regiuni marcate de diversitate culturală și de poziția sa pe Dunăre. Orașul este o oprire importantă pentru croazierele fluviale și un loc unde istoria se întâlnește cu modernitatea.",
      en: "Vidin, located on the banks of the Danube in northwestern Bulgaria, is a city with a rich medieval history and strategic importance as a border town. The undisputed landmark is the Baba Vida Fortress, the only entirely preserved medieval castle in the country, majestically overlooking the river. Vidin combines its historical charm with a relaxed atmosphere on the Danube waterfront, inviting strolls with views of Romania. The city also houses significant religious buildings, such as the Cathedral of Saint Demetrius and the Vidin Synagogue, which is currently under restoration. As a gateway to the northwest, Vidin offers insights into a region shaped by cultural diversity and its location on the Danube. The city is an important stop for river cruises and a place where history and modernity meet."
    },
    facts: {
      de: ["Wahrzeichen: Festung Baba Vida", "Lage: Am Ufer der Donau", "Geschichte: Antikes Bononia", "Religion: Kathedrale St. Demetrius", "Verkehr: Donaubrücke 2 nach Rumänien", "Kultur: Historische Synagoge"],
      hu: ["Jelkép: Baba Vida erőd", "Fekvés: A Duna partján", "Történelem: Az ókori Bononia", "Vallás: Szent Demeter-székesegyház", "Közlekedés: Duna-híd 2 Románia felé", "Kultúra: Történelmi zsinagóga"],
      ro: ["Simbol: Cetatea Baba Vida", "Locație: Pe malul Dunării", "Istorie: Vechiul Bononia", "Religie: Catedrala Sf. Dumitru", "Transport: Podul Dunărea 2 spre România", "Cultură: Sinagoga istorică"],
      en: ["Landmark: Baba Vida Fortress", "Location: On the banks of the Danube", "History: Ancient Bononia", "Religion: St. Demetrius Cathedral", "Transport: Danube Bridge 2 to Romania", "Culture: Historic Synagogue"]
    },
    image: "/geo-images/bulgaria/city-vidin.webp"
  },
  {
    id: "city-vratsa",
    type: "city",
    parent: "bg-country",
    coords: [23.5588, 43.2105],
    name: {
      de: "Vratsa",
      hu: "Vraca",
      ro: "Vratsa",
      en: "Vratsa"
    },
    description: {
      de: "Vraca, am Fuße des Balkangebirges gelegen, ist ein Paradies für Naturliebhaber und Abenteurer. Die Stadt ist bekannt für ihre dramatische Lage unter den steilen Felswänden des Vratsata-Passes, der als einer der höchsten vertikalen Felsen auf dem Balkan gilt. Vraca dient als idealer Ausgangspunkt für Wanderungen, Klettern und Höhlenforschung im Naturpark Vrachanski Balkan. Ein besonderes Highlight ist die Ledenika-Höhle, eine der meistbesuchten Höhlen Bulgariens, die für ihre beeindruckenden Tropfsteinformationen bekannt ist. Die Stadt selbst bietet ein ruhiges Ambiente mit einem historischen Museum, das wertvolle thrakische Schätze beherbergt. Vraca verbindet alpine Naturerlebnisse mit regionaler Geschichte und ist ein Muss für Reisende, die die wilde Schönheit Nordwestbulgariens entdecken möchten.",
      hu: "Vraca a Balkán-hegység lábánál fekvő város, a természetkedvelők és kalandvágyók paradicsoma. A város drámai fekvéséről ismert a Vracata-szurdok meredek sziklafalai alatt, amely a Balkán egyik legmagasabb függőleges sziklájának számít. Vraca ideális kiindulópont túrázáshoz, sziklamászáshoz és barlangászathoz a Vracsanszki Balkán Natúrparkban. Különleges látnivaló a Ledenika-barlang, Bulgária egyik leglátogatottabb barlangja, amely lenyűgöző cseppkőképződményeiről híres. Maga a város nyugodt légkört kínál történelmi múzeumával, amely értékes trák kincseket őriz. Vraca ötvözi az alpesi természet élményét a regionális történelemmel, és kötelező célpont azoknak, akik Északnyugat-Bulgária vad szépségét szeretnék felfedezni.",
      ro: "Vratsa, situat la poalele Munților Balcani, este un paradis pentru iubitorii de natură și aventurieri. Orașul este cunoscut pentru locația sa dramatică sub pereții de stâncă abrupți ai pasului Vratsata, considerat unul dintre cele mai înalte stânci verticale din Balcani. Vratsa servește ca punct de plecare ideal pentru drumeții, alpinism și speologie în Parcul Natural Vrachanski Balkan. Un punct culminant special este Peștera Ledenika, una dintre cele mai vizitate peșteri din Bulgaria, cunoscută pentru formațiunile sale impresionante de stalactite și stalagmite. Orașul în sine oferă o ambianță liniștită, cu un muzeu istoric care găzduiește comori trace valoroase. Vratsa îmbină experiențele naturale alpine cu istoria regională și este o vizită obligatorie pentru călătorii care doresc să descopere frumusețea sălbatică a Bulgariei de nord-vest.",
      en: "Vratsa, nestled at the foot of the Balkan Mountains, is a paradise for nature lovers and adventurers. The city is famous for its dramatic setting beneath the steep cliffs of the Vratsata Pass, considered one of the highest vertical rocks in the Balkans. Vratsa serves as an ideal base for hiking, climbing, and caving in the Vrachanski Balkan Nature Park. A special highlight is the Ledenika Cave, one of Bulgaria's most visited caves, known for its impressive limestone formations. The city itself offers a quiet ambiance with a historical museum housing valuable Thracian treasures. Vratsa combines alpine nature experiences with regional history and is a must-see for travelers wishing to discover the wild beauty of northwestern Bulgaria."
    },
    facts: {
      de: ["Lage: Am Fuß des Balkangebirges", "Natur: Vratsata-Schlucht", "Highlight: Ledenika-Höhle", "Sport: Zentrum für Klettern und Wandern", "Geschichte: Thrakischer Goldschatz von Rogozen", "Park: Naturpark Vrachanski Balkan"],
      hu: ["Fekvés: A Balkán-hegység lábánál", "Természet: Vraca-szurdok", "Látnivaló: Ledenika-barlang", "Sport: Sziklamászó és túraközpont", "Történelem: Rogozini trák aranykincs", "Park: Vracsanszki Balkán Natúrpark"],
      ro: ["Locație: La poalele Munților Balcani", "Natură: Defileul Vratsata", "Atracție: Peștera Ledenika", "Sport: Centru pentru alpinism și drumeții", "Istorie: Tezaurul tracic de la Rogozen", "Parc: Parcul Natural Vrachanski Balkan"],
      en: ["Location: At the foot of the Balkan Mountains", "Nature: Vratsata Gorge", "Highlight: Ledenika Cave", "Sport: Center for climbing and hiking", "History: Rogozen Thracian gold treasure", "Park: Vrachanski Balkan Nature Park"]
    },
    image: "/geo-images/bulgaria/city-vratsa.webp"
  },
  {
    id: "city-shumen",
    type: "city",
    parent: "bg-country",
    coords: [26.9294, 43.2706],
    name: {
      de: "Schumen",
      hu: "Sumen",
      ro: "Shumen",
      en: "Shumen"
    },
    description: {
      de: "Schumen, im Nordosten Bulgariens gelegen, ist eine Stadt mit einer tiefen historischen Bedeutung und einem starken kulturellen Erbe. Die Stadt ist bekannt für das monumentale Denkmal „Gründer des bulgarischen Staates“, das hoch über der Stadt auf dem Schumen-Plateau thront und weithin sichtbar ist. In unmittelbarer Nähe befinden sich die Ruinen der Festung Schumen sowie die erste und zweite Hauptstadt des Ersten Bulgarischen Reiches, Pliska und Preslaw. Ein weiteres bedeutendes Wahrzeichen ist der Madara-Reiter, ein UNESCO-Weltkulturerbe, das nur wenige Kilometer entfernt in die Felsen gehauen wurde. Schumen bietet zudem eine charmante Innenstadt mit Parks, Museen und der Tombul-Moschee, der größten Moschee Bulgariens. Die Stadt verbindet die glorreiche Vergangenheit des frühen bulgarischen Staates mit einem modernen regionalen Zentrum und ist ein wichtiger Ort für Geschichtsinteressierte und Kulturliebhaber.",
      hu: "Sumen Bulgária északkeleti részén fekvő város, amely mély történelmi jelentőséggel és erős kulturális örökséggel bír. A város a „Bolgár Állam Alapítói” monumentális emlékműről ismert, amely magasan a város felett, a Sumen-fennsíkon magasodik, és messziről is jól látható. A közvetlen közelben találhatók a sumeni erőd romjai, valamint az Első Bolgár Birodalom első és második fővárosa, Pliszka és Preszlav. Egy másik jelentós látnivaló a Madarai lovas, az UNESCO Világörökség része, amelyet a közeli sziklákba faragtak. Sumen emellett hangulatos belvárost kínál parkokkal, múzeumokkal és a Tombul-mecsettel, amely Bulgária legnagyobb mecsetje. A város ötvözi a korai bolgár állam dicső múltját a modern regionális központtal, és fontos helyszín a történelem és a kultúra kedvelői számára.",
      ro: "Shumen, situat în nord-estul Bulgariei, este un oraș cu o semnificație istorică profundă și o moștenire culturală puternică. Orașul este cunoscut pentru monumentul monumental „Fondatorii Statului Bulgar”, care domină orașul de pe platoul Shumen și este vizibil de la mare distanță. În imediata apropiere se află ruinele cetății Shumen, precum și prima și a doua capitală a Primului Imperiu Bulgar, Pliska și Preslav. Un alt reper important este Călărețul de la Madara, un sit al Patrimoniului Mondial UNESCO, sculptat în stâncă la doar câțiva kilometri distanță. Shumen oferă, de asemenea, un centru fermecător cu parcuri, muzee și Moscheea Tombul, cea mai mare moșchee din Bulgaria. Orașul îmbină trecutul glorios al statului bulgar timpuriu cu un centru regional modern și este un loc important pentru pasionații de istorie și iubitorii de cultură.",
      en: "Shumen, located in northeastern Bulgaria, is a city with deep historical significance and a strong cultural heritage. The city is famous for the monumental \"Founders of the Bulgarian State\" memorial, which towers over the city on the Shumen Plateau and is visible from afar. In the immediate vicinity are the ruins of the Shumen Fortress, as well as the first and second capitals of the First Bulgarian Empire, Pliska and Preslav. Another significant landmark is the Madara Rider, a UNESCO World Heritage site carved into the rocks just a few kilometers away. Shumen also offers a charming city center with parks, museums, and the Tombul Mosque, the largest mosque in Bulgaria. The city combines the glorious past of the early Bulgarian state with a modern regional center and is an important site for history buffs and culture lovers."
    },
    facts: {
      de: ["Wahrzeichen: Denkmal 'Gründer des bulgarischen Staates'", "Geschichte: Nähe zu Pliska und Preslaw", "UNESCO: Madara-Reiter in der Region", "Religion: Tombul-Moschee (größte des Landes)", "Natur: Schumen-Plateau", "Archäologie: Festung Schumen"],
      hu: ["Jelkép: 'A bolgár állam alapítói' emlékmű", "Történelem: Pliszka és Preszlav közelsége", "UNESCO: Madarai lovas a térségben", "Vallás: Tombul-mecset (az ország legnagyobbja)", "Természet: Sumen-fennsík", "Régészet: Sumeni erőd"],
      ro: ["Simbol: Monumentul 'Fondatorii Statului Bulgar'", "Istorie: Proximitatea față de Pliska și Preslav", "UNESCO: Călărețul de la Madara în regiune", "Religie: Moscheea Tombul (cea mai mare din țară)", "Natură: Platoul Shumen", "Arheologie: Cetatea Shumen"],
      en: ["Landmark: 'Founders of the Bulgarian State' monument", "History: Proximity to Pliska and Preslav", "UNESCO: Madara Rider in the region", "Religion: Tombul Mosque (largest in the country)", "Nature: Shumen Plateau", "Archaeology: Shumen Fortress"]
    },
    image: "/geo-images/bulgaria/city-shumen.webp"
  },
  {
    id: "city-dobrich",
    type: "city",
    parent: "bg-country",
    coords: [27.8300, 43.5667],
    name: {
      de: "Dobritsch",
      hu: "Dobrics",
      ro: "Dobrich",
      en: "Dobrich"
    },
    description: {
      de: "Dobritsch, im Herzen der Dobrudscha im Nordosten Bulgariens gelegen, ist ein bedeutendes landwirtschaftliches Zentrum und bekannt als die „Kornkammer Bulgariens“. Die Stadt ist geprägt von weiten Ebenen und einer starken Agrartradition, die sich in der lokalen Wirtschaft und Kultur widerspiegelt. Ein besonderes Highlight ist das Ethnografische Museum „Alter Dobritsch“, ein Freilichtkomplex, der das traditionelle Handwerk und die Architektur der Region im 19. und frühen 20. Jahrhundert lebendig hält. Dobritsch bietet zudem weitläufige Parks wie den Stadtpark „Heiliger Georg“, der zu den ältesten und größten des Landes gehört. Die Stadt dient als wichtiger Logistikknotenpunkt und ist ein idealer Ausgangspunkt für Reisen zur nahegelegenen Schwarzmeerküste. Dobritsch verbindet ländliche Ruhe mit urbaner Funktionalität und bietet Besuchern einen authentischen Einblick in das Leben in der bulgarischen Tiefebene.",
      hu: "Dobrics Bulgária északkeleti részén, a Dobrudzsa szívében fekvő város, jelentős mezőgazdasági központ, amelyet „Bulgária magtáraként” is emlegetnek. A várost tágas síkságok és erős agrárhagyományok jellemzik, ami a helyi gazdaságban és kultúrában is tükröződik. Különleges látnivaló a „Régi Dobrics” néprajzi múzeum, egy szabadtéri komplexum, amely a régió 19. és kora 20. századi hagyományos kézművességét és építészetét mutatja be. Dobrics emellett hatalmas parkokkal büszkélkedhet, mint például a Szent György városi park, amely az ország egyik legrégebbi és legnagyobb parkja. A város fontos logisztikai csomópont, és ideális kiindulópont a közeli Fekete-tenger partjára irányuló utazásokhoz. Dobrics ötvözi a vidéki nyugalmat a városi funkcionalitással, hiteles betekintést nyújtva a bolgár alföldi életbe.",
      ro: "Dobrich, situat în inima Dobrogei în nord-estul Bulgariei, este un centru agricol important și cunoscut sub numele de „grânarul Bulgariei”. Orașul este caracterizat de câmpii întinse și o tradiție agricolă puternică, care se reflectă în economia și cultura locală. Un punct culminant special este Muzeul Etnografic „Vechiul Dobrich”, un complex în aer liber care păstrează vii meșteșugurile tradiționale și arhitectura regiunii din secolul al XIX-lea și începutul secolului al XX-lea. Dobrich oferă, de asemenea, parcuri vaste, cum ar fi Parcul Orașului „Sfântul Gheorghe”, care este unul dintre cele mai vechi și mai mari din țară. Orașul servește ca un nod logistic important și este un punct de plecare ideal pentru călătorii către coasta Mării Negre din apropiere. Dobrich îmbină liniștea rurală cu funcționalitatea urbană și oferă vizitatorilor o perspectivă autentică asupra vieții din câmpia bulgară.",
      en: "Dobrich, located in the heart of Dobrudzha in northeastern Bulgaria, is a significant agricultural center known as the \"Granary of Bulgaria.\" The city is characterized by vast plains and a strong agricultural tradition reflected in the local economy and culture. A special highlight is the \"Old Dobrich\" Ethnographic Museum, an open-air complex that keeps alive the traditional crafts and architecture of the region from the 19th and early 20th centuries. Dobrich also offers expansive parks, such as the St. George City Park, which is one of the oldest and largest in the country. The city serves as an important logistics hub and is an ideal starting point for trips to the nearby Black Sea coast. Dobrich combines rural tranquility with urban functionality, offering visitors an authentic insight into life in the Bulgarian lowlands."
    },
    facts: {
      de: ["Status: Zentrum der Dobrudscha", "Wirtschaft: Kornkammer Bulgariens", "Kultur: Ethnografischer Komplex 'Alter Dobritsch'", "Natur: Stadtpark 'Heiliger Georg'", "Geschichte: Antike Siedlung an Handelswegen", "Lage: Nordostbulgarien"],
      hu: ["Státusz: Dobrudzsa központja", "Gazdaság: Bulgária magtára", "Kultúra: 'Régi Dobrics' néprajzi komplexum", "Természet: Szent György városi park", "Történelem: Ókori település kereskedelmi utak mentén", "Fekvés: Északkelet-Bulgária"],
      ro: ["Statut: Centrul Dobrogei", "Economie: Grânarul Bulgariei", "Cultură: Complexul etnografic 'Vechiul Dobrich'", "Natură: Parcul orașului 'Sfântul Gheorghe'", "Istorie: Așezare antică pe rute comerciale", "Locație: Nord-estul Bulgariei"],
      en: ["Status: Center of Dobrudzha", "Economy: Granary of Bulgaria", "Culture: 'Old Dobrich' Ethnographic Complex", "Nature: St. George City Park", "History: Ancient settlement on trade routes", "Location: Northeastern Bulgaria"]
    },
    image: "/geo-images/bulgaria/city-dobrich.webp"
  },
  {
    id: "city-sliven",
    type: "city",
    parent: "bg-country",
    coords: [26.3333, 42.6817],
    name: {
      de: "Sliwen",
      hu: "Szliven",
      ro: "Sliven",
      en: "Sliven"
    },
    description: {
      de: "Sliwen, am Fuße der markanten „Blauen Felsen“ im Südosten Bulgariens gelegen, ist eine Stadt mit einer starken industriellen Tradition und einer heldenhaften Geschichte. Bekannt als die „Stadt der hundert Wojwoden“, war Sliwen ein Zentrum des bulgarischen Widerstands gegen die osmanische Herrschaft. Die Stadt ist zudem die Wiege der bulgarischen Industrie, da hier 1834 die erste Textilfabrik des Balkans gegründet wurde. Ein besonderes Highlight ist der Naturpark „Sinite Kamani“ (Blaue Felsen), der Sliwen mit seinen bizarren Felsformationen und dichten Wäldern überragt und ein beliebtes Ziel für Wanderer und Kletterer ist. Sliwen bietet eine Mischung aus historischem Erbe, kulturellen Museen und einer beeindruckenden Naturkulisse. Die Stadt ist ein wichtiger regionaler Knotenpunkt und ein Ort, der stolz auf seine Kämpfertradition und seinen Pioniergeist zurückblickt.",
      hu: "Szliven a jellegzetes „Kék-sziklák” lábánál fekvő város Bulgária délkeleti részén, erős ipari hagyományokkal és hősies múlttal. A „száz vajda városaként” ismert Szliven az oszmán uralom elleni bolgár ellenállás egyik központja volt. A város emellett a bolgár ipar bölcsője is, mivel 1834-ben itt alapították a Balkán első textilgyárát. Különleges látnivaló a „Szinite Kamani” (Kék-sziklák) Natúrpark, amely bizarr sziklaalakzataival és sűrű erdőivel magasodik a város fölé, és a túrázók, valamint a sziklamászók kedvelt célpontja. Szliven a történelmi örökség, a kulturális múzeumok és a lenyűgöző természeti háttér keverékét kínálja. A város fontos regionális csomópont, amely büszkén tekint vissza harcos hagyományaira és úttörő szellemére.",
      ro: "Sliven, situat la poalele distinctivelor „Stânci Albastre” în sud-estul Bulgariei, este un oraș cu o puternică tradiție industrială și o istorie eroică. Cunoscut sub numele de „orașul celor o sută de voievozi”, Sliven a fost un centru al rezistenței bulgare împotriva stăpânirii otomane. Orașul este, de asemenea, leagănul industriei bulgare, aici fiind fondată în 1834 prima fabrică de textile din Balcani. Un punct culminant special este Parcul Natural „Sinite Kamani” (Stâncile Albastre), care domină Sliven cu formațiunile sale stâncoase bizare și pădurile dese, fiind o destinație populară pentru drumeți și alpiniști. Sliven oferă un amestec de moștenire istorică, muzee culturale și un cadru natural impresionant. Orașul este un nod regional important și un loc care privește cu mândrie spre tradiția sa de luptători și spiritul său de pionierat.",
      en: "Sliven, located at the foot of the striking \"Blue Rocks\" in southeastern Bulgaria, is a city with a strong industrial tradition and a heroic history. Known as the \"City of the Hundred Voivodes,\" Sliven was a center of Bulgarian resistance against Ottoman rule. The city is also the cradle of Bulgarian industry, as the first textile factory in the Balkans was founded here in 1834. A special highlight is the \"Sinite Kamani\" (Blue Rocks) Nature Park, which towers over Sliven with its bizarre rock formations and dense forests, making it a popular destination for hikers and climbers. Sliven offers a blend of historical heritage, cultural museums, and an impressive natural backdrop. The city is an important regional hub and a place that looks back with pride on its fighter tradition and pioneering spirit."
    },
    facts: {
      de: ["Status: Stadt der hundert Wojwoden", "Industrie: Wiege der bulgarischen Textilindustrie", "Natur: Naturpark 'Sinite Kamani' (Blaue Felsen)", "Geschichte: Zentrum des Widerstands", "Kultur: Haus-Museum von Hadzhi Dimitar", "Lage: Südostbulgarien"],
      hu: ["Státusz: A száz vajda városa", "Ipar: A bolgár textilipar bölcsője", "Természet: 'Szinite Kamani' (Kék-sziklák) Natúrpark", "Történelem: Az ellenállás központja", "Kultúra: Hadzsi Dimitar emlékház", "Fekvés: Délkelet-Bulgária"],
      ro: ["Statut: Orașul celor o sută de voievozi", "Industrie: Leagănul industriei textile bulgare", "Natură: Parcul Natural 'Sinite Kamani' (Stâncile Albastre)", "Istorie: Centru al rezistenței", "Cultură: Casa-muzeu Hadzhi Dimitar", "Locație: Sud-estul Bulgariei"],
      en: ["Status: City of the Hundred Voivodes", "Industry: Cradle of Bulgarian textile industry", "Nature: 'Sinite Kamani' (Blue Rocks) Nature Park", "History: Center of resistance", "Culture: Hadzhi Dimitar House-Museum", "Location: Southeastern Bulgaria"]
    },
    image: "/geo-images/bulgaria/city-sliven.webp"
  },
  {
    id: "city-stara-zagora",
    type: "city",
    parent: "bg-country",
    coords: [25.6257, 42.4258],
    name: {
      de: "Stara Sagora",
      hu: "Sztara Zagora",
      ro: "Stara Zagora",
      en: "Stara Zagora"
    },
    description: {
      de: "Stara Sagora, im Herzen Thrakiens gelegen, ist eine der modernsten und am besten geplanten Städte Bulgariens, bekannt für ihre breiten, geraden Boulevards und ihre grünen Parks. Die Stadt blickt auf eine über 8.000-jährige Geschichte zurück, die im Regionalen Historischen Museum und in den Ruinen des antiken Forums von Augusta Traiana eindrucksvoll dokumentiert wird. Stara Sagora ist ein bedeutendes kulturelles Zentrum mit einer renommierten Oper und zahlreichen Museen. Ein besonderes Highlight ist das Museum der Neolithischen Wohnstätten, das die am besten erhaltenen prähistorischen Häuser Europas beherbergt. Die Stadt verbindet ihre antike Vergangenheit mit einer dynamischen Gegenwart und ist ein wichtiger Wirtschaftsstandort in Zentralbulgarien. Stara Sagora bietet Besuchern eine hohe Lebensqualität, eine reiche Kulturszene und eine einladende Atmosphäre.",
      hu: "Sztara Zagora Trákia szívében fekvő város, Bulgária egyik legmodernebb és legjobban tervezett települése, amely széles, egyenes sugárútjairól és zöld parkjairól ismert. A város több mint 8000 éves múltra tekint vissza, amelyet a Regionális Történeti Múzeum és az ókori Augusta Traiana fórumának romjai mutatnak be. Sztara Zagora jelentős kulturális központ neves operaházzal és számos múzeummal. Különleges látnivaló az Újkőkori Lakóhelyek Múzeuma, amely Európa legjobb állapotban fennmaradt őskori házait őrzi. A város ötvözi az ókori múltat a dinamikus jelennel, és Közép-Bulgária fontos gazdasági központja. Sztara Zagora magas életminőséget, gazdag kulturális életet és vendégszerető légkört kínál a látogatóknak.",
      ro: "Stara Zagora, situat în inima Traciei, este unul dintre cele mai moderne și mai bine planificate orașe din Bulgaria, cunoscut pentru bulevardele sale largi și drepte și parcurile sale verzi. Orașul are o istorie de peste 8.000 de ani, documentată impresionant în Muzeul Regional de Istorie și în ruinele forumului antic Augusta Traiana. Stara Zagora este un centru cultural important, cu o operă renumită și numeroase muzee. Un punct culminant special este Muzeul Locuințelor Neolitice, care găzduiește cele mai bine conservate case preistorice din Europa. Orașul îmbină trecutul său antic cu un prezent dinamic și este un centru economic important în Bulgaria centrală. Stara Zagora oferă vizitatorilor o calitate ridicată a vieții, o scenă culturală bogată și o atmosferă primitoare.",
      en: "Stara Zagora, located in the heart of Thrace, is one of Bulgaria's most modern and well-planned cities, known for its wide, straight boulevards and green parks. The city boasts a history of over 8,000 years, impressively documented in the Regional Historical Museum and the ruins of the ancient forum of Augusta Traiana. Stara Zagora is a significant cultural center with a renowned opera house and numerous museums. A special highlight is the Museum of Neolithic Dwellings, which houses the best-preserved prehistoric houses in Europe. The city combines its ancient past with a dynamic present and is an important economic hub in central Bulgaria. Stara Zagora offers visitors a high quality of life, a rich cultural scene, and a welcoming atmosphere."
    },
    facts: {
      de: ["Status: Stadt der Linden", "Geschichte: Antike Augusta Traiana", "Kultur: Renommierte Staatsoper", "Highlight: Neolithische Wohnstätten", "Geografie: Zentrum Thrakiens", "Wirtschaft: Wichtiger Industriestandort"],
      hu: ["Státusz: A hársfák városa", "Történelem: Az ókori Augusta Traiana", "Kultúra: Neves Állami Operaház", "Látnivaló: Újkőkori lakóhelyek", "Földrajz: Trákia központja", "Gazdaság: Fontos ipari központ"],
      ro: ["Statut: Orașul teilor", "Istorie: Vechea Augusta Traiana", "Cultură: Operă de Stat renumită", "Atracție: Locuințele neolitice", "Geografie: Centrul Traciei", "Economie: Centru industrial important"],
      en: ["Status: City of Linden Trees", "History: Ancient Augusta Traiana", "Culture: Renowned State Opera", "Highlight: Neolithic Dwellings", "Geography: Center of Thrace", "Economy: Important industrial hub"]
    },
    image: "/geo-images/bulgaria/city-stara-zagora.webp"
  },
  {
    id: "city-blagoevgrad",
    type: "city",
    parent: "bg-country",
    coords: [23.0920, 42.0209],
    name: {
      de: "Blagoewgrad",
      hu: "Blagoevgrad",
      ro: "Blagoevgrad",
      en: "Blagoevgrad"
    },
    description: {
      de: "Blagoewgrad, im Südwesten Bulgariens im Tal des Flusses Struma gelegen, ist eine lebendige Universitätsstadt und ein bedeutendes kulturelles Zentrum der region. Die Stadt beherbergt zwei große Universitäten, darunter die American University in Bulgaria, was ihr ein junges und internationales Flair verleiht. Ein besonderes Highlight ist das historische Viertel „Varosha“ mit seinen gut erhaltenen Häusern aus der Zeit der bulgarischen Wiedergeburt und der Kirche Mariä Himmelfahrt. Blagoewgrad dient als idealer Ausgangspunkt für Ausflüge in das nahegelegene Rila-Gebirge und zum berühmten Rila-Kloster. Die Stadt bietet zudem zahlreiche Parks, Cafés und eine dynamische Kulturszene. Blagoewgrad verbindet historische Tradition mit moderner Bildung und ist ein wichtiger Knotenpunkt auf dem Weg nach Griechenland.",
      hu: "Blagoevgrad Bulgária délnyugati részén, a Sztruma-folyó völgyében fekvő város, élénk egyetemi központ és a régió jelentős kulturális helyszíne. A város két nagy egyetemnek ad otthont, köztük a bulgáriai Amerikai Egyetemnek, ami fiatalos és nemzetközi hangulatot kölcsönöz neki. Különleges látnivaló a „Varosa” történelmi negyed, jól megőrzött újjászületés kori házaival és az Istenanya elszenderedése templommal. Blagoevgrad ideális kiindulópont a közeli Rila-hegységbe és a híres Rilai kolostorhoz tett kirándulásokhoz. A város emellett számos parkot, kávézót és dinamikus kulturális életet kínál. Blagoevgrad ötvözi a történelmi hagyományokat a modern oktatással, és fontos csomópont a Görögország felé vezető úton.",
      ro: "Blagoevgrad, situat în sud-vestul Bulgariei, în valea râului Struma, este un oraș universitar vibrant și un centru cultural important al regiunii. Orașul găzduiește două universități mari, inclusiv Universitatea Americană din Bulgaria, ceea ce îi conferă un fler tânăr și internațional. Un punct culminant special este cartierul istoric „Varosha”, cu casele de bine conservate din perioada Renașterii bulgare și Biserica Adormirea Maicii Domnului. Blagoevgrad servește ca punct de plecare ideal pentru excursii în Munții Rila din apropiere și la celebra Mănăstire Rila. Orașul oferă, de asemenea, numeroase parcuri, cafenele și o scenă culturală dinamică. Blagoevgrad îmbină tradiția istorică cu educația modernă și este un nod important pe drumul către Grecia.",
      en: "Blagoevgrad, located in southwestern Bulgaria in the Struma River valley, is a vibrant university city and a significant cultural center of the region. The city is home to two major universities, including the American University in Bulgaria, giving it a youthful and international flair. A special highlight is the \"Varosha\" historic district, with its well-preserved houses from the Bulgarian National Revival period and the Church of the Dormition of the Mother of God. Blagoevgrad serves as an ideal starting point for excursions to the nearby Rila Mountains and the famous Rila Monastery. The city also offers numerous parks, cafes, and a dynamic cultural scene. Blagoevgrad combines historical tradition with modern education and is an important hub on the way to Greece."
    },
    facts: {
      de: ["Status: Universitätsstadt des Südwestens", "Bildung: Sitz der American University in Bulgaria", "Kultur: Historisches Viertel 'Varosha'", "Lage: Im Tal der Struma", "Natur: Tor zum Rila-Gebirge", "Wirtschaft: Regionales Handelszentrum"],
      hu: ["Státusz: A délnyugat egyetemi városa", "Oktatás: A bulgáriai Amerikai Egyetem székhelye", "Kultúra: 'Varosa' történelmi negyed", "Fekvés: A Sztruma völgyében", "Természet: Kapu a Rila-hegységhez", "Gazdaság: Regionális kereskedelmi központ"],
      ro: ["Statut: Oraș universitar al sud-vestului", "Educație: Sediul Universității Americane din Bulgaria", "Cultură: Cartierul istoric 'Varosha'", "Locație: În valea râului Struma", "Natură: Poartă către Munții Rila", "Economie: Centru comercial regional"],
      en: ["Status: University city of the southwest", "Education: Home to the American University in Bulgaria", "Culture: 'Varosha' historic district", "Location: In the Struma River valley", "Nature: Gateway to the Rila Mountains", "Economy: Regional trade center"]
    },
    image: "/geo-images/bulgaria/city-blagoevgrad.webp"
  },
  {
    id: "city-haskovo",
    type: "city",
    parent: "bg-country",
    coords: [25.5560, 41.9341],
    name: {
      de: "Haskowo",
      hu: "Haskovo",
      ro: "Haskovo",
      en: "Haskovo"
    },
    description: {
      de: "Haskowo, im Südosten Bulgariens gelegen, ist eine Stadt mit einer langen Geschichte und einer strategischen Lage nahe der Grenzen zur Türkei und zu Griechenland. Die Stadt ist weltweit bekannt für das monumentale Denkmal der Heiligen Jungfrau Maria, das als die höchste Statue der Muttergottes mit dem Jesuskind im Guinness-Buch der Rekorde steht. Haskowo bietet eine charmante Innenstadt mit renovierten Plätzen, Brunnen und Parks. In der Umgebung befinden sich bedeutende archäologische Stätten wie das thrakische Grabmal von Aleksandrowo. Die Stadt ist ein wichtiges Zentrum für Handel und Landwirtschaft und verbindet traditionelle bulgarische Gastfreundschaft mit einer modernen regionalen Entwicklung.",
      hu: "Haszkovo Bulgária délkeleti részén fekvő város, hosszú múltra tekint vissza, és stratégiai elhelyezkedéssel bír a török és a görög határ közelében. A város világszerte ismert a Szűz Mária monumentális emlékművéről, amely a Guinness Rekordok Könyvében a világ legmagasabb Szűz Mária-szobraként szerepel. Haszkovo hangulatos belvárost kínál felújított terekkel, szökőkutakkal és parkokkal. A környéken jelentős régészeti lelőhelyek találhatók, mint például az alekszandrovói trák sírkamra. A város a kereskedelem és a mezőgazdaság fontos központja, amely ötvözi a hagyományos bolgár vendégszeretetet a modern regionális fejlődéssel.",
      ro: "Haskovo, situat în sud-estul Bulgariei, este un oraș cu o istorie lungă și o locație strategică aproape de granițele cu Turcia și Grecia. Orașul este cunoscut în întreaga lume pentru monumentul monumental al Sfintei Fecioare Maria, care figurează în Cartea Recordurilor Guinness ca fiind cea mai înaltă statuie a Maicii Domnului cu Pruncul. Haskovo oferă un centru fermecător cu piețe renovate, fântâni și parcuri. În împrejurimi se află situri arheologice importante, cum ar fi mormântul tracic de la Alexandrovo. Orașul este un centru important pentru comerț și agricultură și îmbină ospitalitatea tradițională bulgară cu o dezvoltare regională modernă.",
      en: "Haskovo, located in southeastern Bulgaria, is a city with a long history and a strategic location near the borders with Turkey and Greece. The city is world-famous for the monumental Monument of the Holy Virgin Mary, which stands in the Guinness World Records as the tallest statue of the Mother of God with the Infant Jesus. Haskovo offers a charming city center with renovated squares, fountains, and parks. In the vicinity are significant archaeological sites, such as the Thracian Tomb of Alexandrovo. The city is an important center for trade and agriculture, combining traditional Bulgarian hospitality with modern regional development."
    },
    facts: {
      de: ["Wahrzeichen: Mariendenkmal (Guinness-Rekord)", "Lage: Nahe der türkischen Grenze", "Geschichte: Thrakisches Grabmal von Aleksandrowo", "Kultur: Glockenturm neben dem Mariendenkmal", "Wirtschaft: Zentrum für Handel und Textilien", "Natur: Park 'Kenana'"],
      hu: ["Jelkép: Mária-emlékmű (Guinness-rekord)", "Fekvés: A török határ közelében", "Történelem: Alekszandrovói trák sír", "Kultúra: Harangtorony a Mária-szobor mellett", "Gazdaság: Kereskedelmi és textilipari központ", "Természet: 'Kenana' park"],
      ro: ["Simbol: Monumentul Fecioarei Maria (Record Guinness)", "Locație: Aproape de granița cu Turcia", "Istorie: Mormântul tracic de la Alexandrovo", "Cultură: Turnul cu clopot de lângă monument", "Economie: Centru pentru comerț și textile", "Natură: Parcul 'Kenana'"],
      en: ["Landmark: Virgin Mary Monument (Guinness Record)", "Location: Near the Turkish border", "History: Thracian Tomb of Alexandrovo", "Culture: Bell tower next to the monument", "Economy: Center for trade and textiles", "Nature: 'Kenana' Park"]
    },
    image: "/geo-images/bulgaria/city-haskovo.webp"
  },
  {
    id: "city-pazardzhik",
    type: "city",
    parent: "bg-country",
    coords: [24.3336, 42.1928],
    name: {
      de: "Pasardschik",
      hu: "Pazardzsik",
      ro: "Pazardzhik",
      en: "Pazardzhik"
    },
    description: {
      de: "Pasardschik, in der fruchtbaren oberthrakischen Tiefebene am Ufer der Mariza gelegen, ist eine Stadt mit einer reichen Handels- und Handwerkstradition. Die Stadt ist bekannt für ihre weitläufigen Parks, darunter der Park „Insel der Freiheit“, der sich auf einer Insel im Fluss Mariza befindet und zahlreiche Skulpturen und Freizeitmöglichkeiten bietet. Ein bedeutendes Wahrzeichen ist die Kirche der Heiligen Jungfrau Maria, die für ihre beeindruckende Ikonostase aus geschnitztem Holz berühmt ist. Pasardschik dient als wichtiger regionaler Knotenpunkt zwischen Sofia und Plowdiw und ist ein Zentrum für Landwirtschaft und Leichtindustrie. Die Stadt verbindet eine ruhige Atmosphäre mit kulturellen Schätzen und ist ein idealer Ausgangspunkt für Ausflüge in die nahegelegenen Rhodopen.",
      hu: "Pazardzsik a termékeny Felső-trák síkságon, a Marica-folyó partján fekvő város, gazdag kereskedelmi és kézműves hagyományokkal. A város tágas parkjairól ismert, köztük a „Szabadság-sziget” parkról, amely a Marica-folyó egyik szigetén található, és számos szobrot, valamint szabadidős lehetőséget kínál. Jelentős látnivaló a Szűz Mária-templom, amely lenyűgöző, faragott fából készült ikonfaláról (ikonosztáz) híres. Pazardzsik fontos regionális csomópont Szófia és Plovdiv között, a mezőgazdaság és a könnyűipar központja. A város ötvözi a nyugodt légkört a kulturális kincsekkel, és ideális kiindulópont a közeli Rodope-hegységbe tett kirándulásokhoz.",
      ro: "Pazardzhik, situat în fertila Câmpie a Traciei Superioare, pe malul râului Maritsa, este un oraș cu o bogată tradiție comercială și meșteșugărească. Orașul este cunoscut pentru parcurile sale vaste, inclusiv parcul „Insula Libertății”, situat pe o insulă în râul Maritsa, care oferă numeroase sculpturi și facilități de recreere. Un reper important este Biserica Sfintei Fecioare Maria, renumită pentru iconostasul său impresionant din lemn sculptat. Pazardzhik servește ca un nod regional important între Sofia și Plovdiv și este un centru pentru agricultură și industria ușoară. Orașul îmbină o atmosferă liniștită cu comori culturale și este un punct de plecare ideal pentru excursii în Munții Rodopi din apropiere.",
      en: "Pazardzhik, located in the fertile Upper Thracian Plain on the banks of the Maritsa River, is a city with a rich trade and craft tradition. The city is known for its expansive parks, including the \"Island of Freedom\" park, situated on an island in the Maritsa River, offering numerous sculptures and leisure facilities. A significant landmark is the Church of the Holy Virgin Mary, famous for its impressive carved wood iconostasis. Pazardzhik serves as an important regional hub between Sofia and Plovdiv and is a center for agriculture and light industry. The city combines a quiet atmosphere with cultural treasures and is an ideal starting point for excursions to the nearby Rhodope Mountains."
    },
    facts: {
      de: ["Lage: In der oberthrakischen Tiefebene", "Natur: Park 'Insel der Freiheit' an der Mariza", "Kultur: Kirche der Hl. Jungfrau Maria", "Geschichte: Gegründet als Handelszentrum", "Wirtschaft: Zentrum für Landwirtschaft", "Verkehr: Wichtiger Knotenpunkt Sofia-Plowdiw"],
      hu: ["Fekvés: A Felső-trák síkságon", "Természet: 'Szabadság-sziget' park a Maricán", "Kultúra: Szűz Mária-templom", "Történelem: Kereskedelmi központként alapítva", "Gazdaság: Mezőgazdasági központ", "Közlekedés: Fontos csomópont Szófia és Plovdiv között"],
      ro: ["Locație: În Câmpia Traciei Superioare", "Natură: Parcul 'Insula Libertății' pe Maritsa", "Cultură: Biserica Sf. Fecioare Maria", "Istorie: Fondat ca centru comercial", "Economie: Centru agricol", "Transport: Nod important Sofia-Plovdiv"],
      en: ["Location: In the Upper Thracian Plain", "Nature: 'Island of Freedom' park on the Maritsa", "Culture: Church of the Holy Virgin Mary", "History: Founded as a trade center", "Economy: Agricultural center", "Transport: Important hub between Sofia and Plovdiv"]
    },
    image: "/geo-images/bulgaria/city-pazardzhik.webp"
  },
  {
    id: "city-pernik",
    type: "city",
    parent: "bg-country",
    coords: [23.0200, 42.6050],
    name: {
      de: "Pernik",
      hu: "Pernik",
      ro: "Pernik",
      en: "Pernik"
    },
    description: {
      de: "Pernik, westlich von Sofia gelegen, ist eine Stadt mit einer starken industriellen Identität und einer tief verwurzelten Bergbautradition. Bekannt als das „Schwarze Gold Bulgariens“, war Pernik über Jahrzehnte das Zentrum der Kohleförderung und Schwerindustrie des Landes. Ein besonderes Highlight ist das Bergbaumuseum, das einzige seiner Art auf dem Balkan, das sich in einem authentischen unterirdischen Stollen befindet. Pernik ist zudem weltberühmt für das internationale Festival der Maskenspiele „Surva“, das zum UNESCO-Immateriellen Kulturerbe gehört und jedes Jahr Tausende von Besuchern anzieht. Die Stadt bietet eine Mischung aus industriellem Erbe, kulturellen Traditionen und der Nähe zur Natur des Witoscha-Gebirges. Pernik verbindet seine harte Arbeitsvergangenheit mit einem lebendigen Brauchtum und ist ein faszinierendes Ziel für Entdecker abseits der ausgetretenen Pfade.",
      hu: "Pernik Szófiától nyugatra fekvő város, erős ipari identitással és mélyen gyökerező bányászati hagyományokkal. „Bulgária fekete aranyaként” ismert Pernik évtizedeken át az ország szénbányászatának és nehéziparának központja volt. Különleges látnivaló a Bányászati Múzeum, amely az egyetlen ilyen jellegű intézmény a Balkánon, és egy eredeti földalatti tárnában található. Pernik emellett világhírű a „Szurva” nemzetközi maszkos fesztiválról, amely az UNESCO szellemi kulturális örökségének része, és minden évben látogatók ezreit vonzza. A város ötvözi az ipari örökséget, a kulturális hagyományokat és a Vitosa-hegység közelségét. Pernik a kemény munka múltját kapcsolja össze az élő népszokásokkal, izgalmas úti célt kínálva a felfedezőknek.",
      ro: "Pernik, situat la vest de Sofia, este un oraș cu o puternică identitate industrială și o tradiție minieră adânc înrădăcinată. Cunoscut sub numele de „aurul negru al Bulgariei”, Pernik a fost timp de decenii centrul extracției de cărbune și al industriei grele a țării. Un punct culminant special este Muzeul Mineritului, singurul de acest gen din Balcani, situat într-o galerie subterană autentică. Pernik este, de asemenea, faimos în întreaga lume pentru festivalul internațional al jocurilor cu măști „Surva”, care face parte din Patrimoniul Cultural Imaterial UNESCO și atrage mii de vizitatori în fiecare an. Orașul oferă un amestec de moștenire industrială, tradiții culturale și proximitatea față de natura muntelui Vitosha. Pernik îmbină trecutul său de muncă grea cu un folclor vibrant și este o destinație fascinantă pentru exploratori.",
      en: "Pernik, located west of Sofia, is a city with a strong industrial identity and deep-rooted mining traditions. Known as the \"Black Gold of Bulgaria,\" Pernik was for decades the center of the country's coal mining and heavy industry. A special highlight is the Mining Museum, the only one of its kind in the Balkans, located in an authentic underground gallery. Pernik is also world-famous for the \"Surva\" International Festival of Masquerade Games, which is part of the UNESCO Intangible Cultural Heritage and attracts thousands of visitors every year. The city offers a blend of industrial heritage, cultural traditions, and proximity to the nature of the Vitosha Mountain. Pernik combines its hard-working past with vibrant folklore, making it a fascinating destination for explorers off the beaten path."
    },
    facts: {
      de: ["Status: Zentrum des bulgarischen Bergbaus", "Kultur: UNESCO-Festival 'Surva'", "Highlight: Unterirdisches Bergbaumuseum", "Lage: Westlich von Sofia", "Geschichte: Antike Festung Krakra", "Wirtschaft: Schwerindustrie und Energie"],
      hu: ["Státusz: A bolgár bányászat központja", "Kultúra: UNESCO 'Szurva' fesztivál", "Látnivaló: Földalatti Bányászati Múzeum", "Fekvés: Szófiától nyugatra", "Történelem: Krakra ókori erődje", "Gazdaság: Nehézipar és energia"],
      ro: ["Statut: Centrul mineritului bulgar", "Cultură: Festivalul UNESCO 'Surva'", "Atracție: Muzeul Mineritului în subteran", "Locație: La vest de Sofia", "Istorie: Vechea cetate Krakra", "Economie: Industrie grea și energie"],
      en: ["Status: Center of Bulgarian mining", "Culture: UNESCO 'Surva' Festival", "Highlight: Underground Mining Museum", "Location: West of Sofia", "History: Ancient Krakra Fortress", "Economy: Heavy industry and energy"]
    },
    image: "/geo-images/bulgaria/city-pernik.webp"
  }
];

export const bulgariaCulture: POI[] = [
  {
    id: "cult-rila-monastery",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3405, 42.1333],
    name: {
      de: "Rila-Kloster",
      hu: "Rilai kolostor",
      ro: "Mănăstirea Rila",
      en: "Rila Monastery"
    },
    description: {
      de: "UNESCO-geschütztes bulgarisch-orthodoxes Kloster aus dem 10. Jahrhundert.",
      hu: "UNESCO-védett bolgár ortodox kolostor a 10. századból.",
      ro: "Mănăstire ortodoxă bulgară din secolul al X-lea, inclusă în UNESCO.",
      en: "A UNESCO-protected Bulgarian Orthodox monastery from the 10th century."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Gegründet im 10. Jahrhundert", "Wichtiges orthodoxes Zentrum"],
      hu: ["UNESCO világörökség", "A 10. században alapították", "Fontos ortodox központ"],
      ro: ["Patrimoniu mondial UNESCO", "Fondată în secolul al X-lea", "Centru ortodox important"],
      en: ["UNESCO World Heritage site", "Founded in the 10th century", "Important Orthodox center"]
    },
    image: "/geo-images/bulgaria/cult-rila-monastery.webp"
  },
  {
    id: "cult-boyana",
    type: "landmark",
    parent: "bg-country",
    coords: [23.265, 42.6435],
    name: {
      de: "Boyana-Kirche",
      hu: "Boyana templom",
      ro: "Biserica Boyana",
      en: "Boyana Church"
    },
    description: {
      de: "Die Kirche von Bojana, am Rande von Sofia am Fuße des Witoscha-Gebirges gelegen, ist ein mittelalterliches bulgarisch-orthodoxes Gotteshaus und gehört seit 1979 zum UNESCO-Weltkulturerbe. Die Kirche ist weltberühmt für ihre außergewöhnlich gut erhaltenen Fresken aus dem Jahr 1259, die als eines der bedeutendsten Beispiele mittelalterlicher osteuropäischer Kunst gelten. Die Wandmalereien zeichnen sich durch einen für die damalige Zeit ungewöhnlichen Realismus und eine tiefe psychologische Darstellung der Figuren aus, was sie zu Vorläufern der Renaissance macht. Besonders beeindruckend sind die Porträts der Stifter, Sebastokrator Kalojan und seiner Frau Desislawa, sowie des bulgarischen Zaren Konstantin Tich und der Zarin Irina. Die Kirche von Bojana ist ein Ort von unschätzbarem kulturellem Wert und ein Muss für jeden Besucher Sofias, der sich für Kunstgeschichte und Spiritualität interessiert.",
      hu: "A Bojana-templom Szófia szélén, a Vitosa-hegység lábánál található középkori bolgár ortodox templom, amely 1979 óta az UNESCO Világörökség része. A templom világhírű az 1259-ből származó, rendkívül jó állapotban fennmaradt freskóiról, amelyek a középkori kelet-európai művészet egyik legjelentősebb példájának számítanak. A falfestményeket a korukhoz képest szokatlan realizmus és az alakok mély pszichológiai ábrázolása jellemzi, ami a reneszánsz előfutárává teszi őket. Különösen lenyűgözőek az adományozók, Kalojan szebasztokrátor és felesége, Desziszlava, valamint Konsztantin Tih bolgár cár és Irina cárné portréi. A Bojana-templom felbecsülhetetlen kulturális értékkel bír, és kötelező látnivaló minden Szófiába látogató számára, akit érdekel a művészettörténet és a spiritualitás.",
      ro: "Biserica Boiana, situată la marginea Sofiei, la poalele muntelui Vitosha, este un lăcaș de cult ortodox bulgar medieval și face parte din Patrimoniul Mondial UNESCO din 1979. Biserica este faimoasă în întreaga lume pentru frescele sale excepțional de bine conservate din anul 1259, considerate unul dintre cele mai importante exemple de artă medievală est-europeană. Picturile murale se caracterizează printr-un realism neobișnuit pentru acea perioadă și o reprezentare psihologică profundă a figurilor, ceea ce le face precursoare ale Renașterii. Deosebit de impresionante sunt portretele ctitorilor, sebastocratorul Kaloyan și soția sa Desislava, precum și ale țarului bulgar Constantin Tih și ale țarinei Irina. Biserica Boiana este un loc de o valoare culturală inestimabilă și o vizită obligatorie pentru orice vizitator al Sofiei interesat de istoria artei și spiritualitate.",
      en: "The Boyana Church, located on the outskirts of Sofia at the foot of Vitosha Mountain, is a medieval Bulgarian Orthodox church and has been a UNESCO World Heritage site since 1979. The church is world-famous for its exceptionally well-preserved frescoes dating from 1259, considered one of the most significant examples of medieval Eastern European art. The murals are characterized by a realism unusual for the period and a deep psychological portrayal of the figures, making them precursors to the Renaissance. Particularly impressive are the portraits of the donors, Sebastocrator Kaloyan and his wife Desislava, as well as the Bulgarian Tsar Constantine Tikh and Tsaritsa Irina. The Boyana Church is a site of inestimable cultural value and a must-see for any visitor to Sofia interested in art history and spirituality."
    },
    facts: {
      de: ["Status: UNESCO-Weltkulturerbe seit 1979", "Alter: Fresken von 1259", "Bedeutung: Vorläufer der Renaissance-Kunst", "Lage: Am Fuße des Witoscha-Gebirges", "Highlight: Porträts von Kalojan und Desislawa", "Architektur: Drei Bauphasen (11., 13. und 19. Jh.)"],
      hu: ["Státusz: UNESCO Világörökség 1979 óta", "Kor: 1259-es freskók", "Jelentőség: A reneszánsz művészet előfutára", "Fekvés: A Vitosa-hegység lábánál", "Látnivaló: Kalojan és Desziszlava portréi", "Építészet: Három építési szakasz (11., 13. és 19. sz.)"],
      ro: ["Statut: Patrimoniu Mondial UNESCO din 1979", "Vârstă: Fresce din 1259", "Importanță: Precursor al artei Renașterii", "Locație: La poalele muntelui Vitosha", "Atracție: Portretele lui Kaloyan și Desislava", "Arhitectură: Trei faze de construcție (sec. XI, XIII și XIX)"],
      en: ["Status: UNESCO World Heritage site since 1979", "Age: Frescoes from 1259", "Significance: Precursor to Renaissance art", "Location: At the foot of Vitosha Mountain", "Highlight: Portraits of Kaloyan and Desislava", "Architecture: Three construction phases (11th, 13th, and 19th centuries)"]
    },
    image: "/geo-images/bulgaria/cult-boyana.webp"
  },
  {
    id: "cult-nessebar",
    type: "landmark",
    parent: "bg-country",
    coords: [27.7269, 42.6587],
    name: {
      de: "Alt-Nessebar",
      hu: "Neszebár óváros",
      ro: "Orașul vechi Nessebar",
      en: "Old Nessebar"
    },
    description: {
      de: "UNESCO-Halbinsel mit über 3000 Jahren Geschichte an der Schwarzmeerküste.",
      hu: "UNESCO-félsziget több mint 3000 év történelmével a Fekete-tenger partján.",
      ro: "Peninsulă UNESCO cu peste 3000 de ani de istorie, pe litoralul Mării Negre.",
      en: "A UNESCO peninsula with over 3,000 years of history on the Black Sea coast."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Antike und byzantinische Schichten", "Beliebtes Küstenziel"],
      hu: ["UNESCO világörökség", "Ókori és bizánci rétegek", "Népszerű tengerparti célpont"],
      ro: ["Patrimoniu mondial UNESCO", "Straturi antice și bizantine", "Destinație de coastă populară"],
      en: ["UNESCO World Heritage site", "Ancient and Byzantine layers", "Popular coastal destination"]
    },
    image: "/geo-images/bulgaria/cult-nessebar.webp"
  },
  {
    id: "cult-kazanlak",
    type: "landmark",
    parent: "bg-country",
    coords: [25.3942, 42.6175],
    name: {
      de: "Thrakische Grabkammer von Kazanlak",
      hu: "Kazanlaki trák sír",
      ro: "Mormântul tracic de la Kazanlak",
      en: "Kazanlak Thracian Tomb"
    },
    description: {
      de: "Das thrakische Grabmal von Kasanlak, im Herzen des Rosentals gelegen, ist ein Meisterwerk der antiken Kunst und gehört seit 1979 zum UNESCO-Weltkulturerbe. Das Grabmal stammt aus dem späten 4. Jahrhundert v. Chr. und ist berühmt für seine außergewöhnlich gut erhaltenen Fresken in der Grabkammer und im Korridor. Die Wandmalereien zeigen Szenen eines rituellen Totenmahls, thrakische Krieger und Pferderennen, die einen faszinierenden Einblick in die Kultur und den Glauben der Thraker bieten. Besonders beeindruckend ist die Darstellung des thrakischen Herrschers und seiner Frau, die sich an den Händen halten. Das Grabmal von Kasanlak ist das bedeutendste Denkmal der thrakischen Kultur in Bulgarien und ein Muss für jeden Geschichtsinteressierten.",
      hu: "A kazanlaki trák sírkamra a Rózsák völgyének szívében található, az ókori művészet remekműve, amely 1979 óta az UNESCO Világörökség része. A sírkamra a Krisztus előtti 4. század végéről származik, és világhírű a sírkamrában és a folyosón található, rendkívül jó állapotban fennmaradt freskóiról. A falfestmények rituális halotti tort, trák harcosokat és lóversenyeket ábrázolnak, amelyek lenyűgöző betekintést nyújtanak a trákok kultúrájába és hiedelemvilágába. Különösen megható a trák uralkodó és felesége ábrázolása, amint egymás kezét fogják. A kazanlaki sírkamra a trák kultúra legjelentősebb emléke Bulgáriában, és kötelező látnivaló a történelem iránt érdeklődők számára.",
      ro: "Mormântul tracic de la Kazanlak, situat în inima Văii Trandafirilor, este o capodoperă a artei antice și face parte din Patrimoniul Mondial UNESCO din 1979. Mormântul datează de la sfârșitul secolului al IV-lea î.Hr. și este faimos pentru frescele sale excepțional de bine conservate din camera funerară și coridor. Picturile murale înfățișează scene ale unui ospăț funerar ritual, războinici traci și curse de cai, oferind o perspectivă fascinantă asupra culturii și credințelor tracilor. Deosebit de impresionantă este reprezentarea conducătorului trac și a soției sale, ținându-se de mână. Mormântul de la Kazanlak este cel mai important monument al culturii trace din Bulgaria și o vizită obligatorie pentru orice pasionat de istorie.",
      en: "The Thracian Tomb of Kazanlak, located in the heart of the Rose Valley, is a masterpiece of ancient art and has been a UNESCO World Heritage site since 1979. The tomb dates from the late 4th century BCE and is famous for its exceptionally well-preserved frescoes in the burial chamber and corridor. The murals depict scenes of a ritual funeral feast, Thracian warriors, and horse races, providing a fascinating insight into Thracian culture and beliefs. Particularly impressive is the depiction of the Thracian ruler and his wife holding hands. The Kazanlak Tomb is the most significant monument of Thracian culture in Bulgaria and a must-see for anyone interested in history."
    },
    facts: {
      de: ["Status: UNESCO-Weltkulturerbe seit 1979", "Alter: Spätes 4. Jh. v. Chr.", "Bedeutung: Meisterwerk thrakischer Kunst", "Lage: Im Rosental bei Kasanlak", "Highlight: Fresken des Totenmahls", "Kultur: Einblick in thrakische Rituale"],
      hu: ["Státusz: UNESCO Világörökség 1979 óta", "Kor: Kr. e. 4. század vége", "Jelentőség: A trák művészet remekműve", "Fekvés: A Rózsák völgyében, Kazanlaknál", "Látnivaló: Halotti tor freskói", "Kultúra: Betekintés a trák rituálékba"],
      ro: ["Statut: Patrimoniu Mondial UNESCO din 1979", "Vârstă: Sfârșitul sec. IV î.Hr.", "Importanță: Capodoperă a artei trace", "Locație: În Valea Trandafirilor, lângă Kazanlak", "Atracție: Frescele ospățului funerar", "Cultură: Perspectivă asupra ritualurilor trace"],
      en: ["Status: UNESCO World Heritage site since 1979", "Age: Late 4th century BCE", "Significance: Masterpiece of Thracian art", "Location: In the Rose Valley near Kazanlak", "Highlight: Frescoes of the funeral feast", "Culture: Insight into Thracian rituals"]
    },
    image: "/geo-images/bulgaria/cult-kazanlak.webp"
  },
  {
    id: "cult-madara",
    type: "landmark",
    parent: "bg-country",
    coords: [27.1177, 43.2856],
    name: {
      de: "Madarareiter",
      hu: "Madarai lovas",
      ro: "Călărețul de la Madara",
      en: "Madara Rider"
    },
    description: {
      de: "UNESCO-Felsrelief aus dem 8. Jahrhundert, ein Symbol des frühen bulgarischen Staates.",
      hu: "UNESCO-szikladombormű a 8. századból, a korai bolgár állam jelképe.",
      ro: "Basorelief UNESCO din secolul al VIII-lea, simbol al primului stat bulgar.",
      en: "A UNESCO rock relief from the 8th century and a symbol of the early Bulgarian state."
    },
    facts: {
      de: ["UNESCO-Welterbe", "8. Jahrhundert", "Frühes bulgarisches Symbol"],
      hu: ["UNESCO világörökség", "8. század", "Korai bolgár jelkép"],
      ro: ["Patrimoniu UNESCO", "Secolul al VIII-lea", "Simbol bulgar timpuriu"],
      en: ["UNESCO World Heritage site", "8th century", "Early Bulgarian symbol"]
    },
    image: "/geo-images/bulgaria/cult-madara.webp"
  },
  {
    id: "hist-belogradchik-fortress",
    type: "historical",
    parent: "bg-country",
    coords: [22.6848, 43.6257],
    name: {
      de: "Belogradtschik-Festung",
      hu: "Belogradcsik erőd",
      ro: "Cetatea Belogradchik",
      en: "Belogradchik Fortress"
    },
    description: {
      de: "Eine der spektakulärsten Festungen Bulgariens, direkt zwischen roten Felsformationen gebaut. Die Anlage ist ein Top-Name für historische Reisen im Nordwesten. Romanische, osmanische und bulgarische Schichten prägen den Ort. Für SEO rund um Festungen in Bulgarien ist Belogradchik extrem stark.",
      hu: "Bulgária egyik leglátványosabb erődje, közvetlenül vörös sziklaképződmények közé építve. Az északnyugat-bolgár történelmi utak egyik csúcspontja. A helyen római, oszmán és bolgár rétegek találkoznak. A bolgár várak SEO-jában Belogradcsik kiemelkedő.",
      ro: "Una dintre cele mai spectaculoase cetăți ale Bulgariei, construită chiar printre stâncile roșii. Este un nume de top pentru turismul istoric din nord-vest. Straturi romane, otomane și bulgare definesc locul. Pentru SEO despre fortărețele Bulgariei, Belogradchik este foarte puternic.",
      en: "One of Bulgaria's most spectacular fortresses, built amid red rock formations. It is a top name for historic travel in the northwest. Roman, Ottoman, and Bulgarian layers define the site. For fortress-focused Bulgaria SEO, Belogradchik is extremely strong."
    },
    facts: {
      de: ["Rote Felsen", "Nordwestbulgarien", "Festung auf Höhenzug", "Militärgeschichte", "Fotomagnet"],
      hu: ["Vörös sziklák", "Északnyugat-Bulgária", "Magashegyi erőd", "Katonai történelem", "Fotóhelyszín"],
      ro: ["Stânci roșii", "Nord-vestul Bulgariei", "Cetate pe relief înalt", "Istorie militară", "Loc fotogenic"],
      en: ["Red rocks", "Northwestern Bulgaria", "Hilltop fortress", "Military history", "Photogenic landmark"]
    },
    image: "/geo-images/bulgaria/hist-belogradchik-fortress.webp"
  },
  {
    id: "hist-tsarevets-fortress",
    type: "historical",
    parent: "bg-country",
    coords: [25.6170, 43.0862],
    name: {
      de: "Zarewez-Festung",
      hu: "Carevec erőd",
      ro: "Cetatea Țareveț",
      en: "Tsarevets Fortress"
    },
    description: {
      de: "Mittelalterliche Zarenfestung über Weliko Tarnowo mit starker Silhouette. Sie war das politische Herz des Zweiten Bulgarischen Reiches. Besucher kommen wegen Mauern, Türmen und Panoramablicken. Als historische Ikone ist Tsarevets ein Schlüsselbegriff für Bulgarien.",
      hu: "Középkori cári erőd Veliko Tarnovo felett, erős panorámával. A második Bolgár Birodalom politikai központja volt. A látogatók falak, tornyok és kilátás miatt érkeznek. Tsarevec Bulgária egyik fő történelmi kulcsszava.",
      ro: "Cetate medievală a țarilor deasupra orașului Veliko Târnovo, cu o siluetă puternică. A fost inima politică a celui de-al Doilea Țarat Bulgar. Vizitatorii vin pentru ziduri, turnuri și panorame. Ca simbol istoric, Tsarevets este esențial pentru Bulgaria.",
      en: "A medieval tsar fortress above Veliko Tarnovo with a powerful skyline. It was the political heart of the Second Bulgarian Empire. Visitors come for the walls, towers, and panoramic views. As a historic icon, Tsarevets is a key Bulgaria search term."
    },
    facts: {
      de: ["Weliko Tarnowo", "Zarenzeit", "Hügelburg", "Panoramablick", "Nationales Symbol"],
      hu: ["Veliko Tarnovo", "Cári korszak", "Hegyi vár", "Panoráma", "Nemzeti jelkép"],
      ro: ["Veliko Târnovo", "Epoca Țarilor", "Cetate pe colină", "Panoramă", "Simbol național"],
      en: ["Veliko Tarnovo", "Tsar era", "Hill fortress", "Panoramic views", "National symbol"]
    },
    image: "/geo-images/bulgaria/hist-tsarevets-fortress.webp"
  },
  {
    id: "hist-perperikon",
    type: "historical",
    parent: "bg-country",
    coords: [25.6465, 41.6760],
    name: {
      de: "Perperikon",
      hu: "Perperikon",
      ro: "Perperikon",
      en: "Perperikon"
    },
    description: {
      de: "Großer thrakischer Felskomplex in den Ost-Rhodopen mit Heiligtum und Siedlungsspuren. Perperikon zählt zu den meistgesuchten archäologischen Orten Bulgariens. Die Lage über der Landschaft macht den Besuch besonders eindrucksvoll. Für Geschichte, Archäologie und Südbulgarien ist Perperikon ein Top-Begriff.",
      hu: "Nagy trák sziklakomplexum a Keleti-Rodopokban, szentéllyel és településnyomokkal. Perperikon Bulgária egyik legkeresettebb régészeti helyszíne. A táj fölé emelkedő fekvés különösen látványossá teszi. Történelemhez, régészethez és Dél-Bulgáriához Perperikon erős SEO-célpont.",
      ro: "Complex tracic mare în Munții Rodopi de Est, cu sanctuar și urme de așezare. Perperikon este unul dintre cele mai căutate situri arheologice din Bulgaria. Poziția deasupra peisajului îl face memorabil. Pentru istorie, arheologie și sudul Bulgariei, Perperikon este un termen SEO foarte bun.",
      en: "A major Thracian rock complex in the Eastern Rhodopes with sanctuary and settlement traces. Perperikon is one of Bulgaria's most searched archaeological sites. Its elevated setting above the landscape makes it especially impressive. For history, archaeology, and southern Bulgaria, Perperikon is a strong SEO term."
    },
    facts: {
      de: ["Thrakische Stätte", "Ost-Rhodopen", "Archäologie", "Heiligtum", "Felskomplex"],
      hu: ["Trák helyszín", "Keleti-Rodopok", "Régészet", "Szentély", "Sziklakomplexum"],
      ro: ["Sit tracic", "Rodopii de Est", "Arheologie", "Sanctuar", "Complex stâncos"],
      en: ["Thracian site", "Eastern Rhodopes", "Archaeology", "Sanctuary", "Rock complex"]
    },
    image: "/geo-images/bulgaria/hist-perperikon.webp"
  },
  {
    id: "hist-baba-vida",
    type: "historical",
    parent: "bg-country",
    coords: [22.8890, 43.9950],
    name: {
      de: "Baba Vida",
      hu: "Baba Vida",
      ro: "Baba Vida",
      en: "Baba Vida Fortress"
    },
    description: {
      de: "Die bekannteste Festung von Vidin und die am besten erhaltene mittelalterliche Burg Bulgariens. Baba Vida steht direkt am Donauufer und prägt die Stadtansicht. Der Ort verbindet Grenzgeschichte, Verteidigung und Flusshandel. Für Burgenseiten und Donau-Routen ist Baba Vida ein starkes SEO-Ziel.",
      hu: "Vidin legismertebb erődje és Bulgária egyik legjobb állapotban fennmaradt középkori vára. Baba Vida közvetlenül a Duna partján áll, és meghatározza a város látképét. A hely határtörténelmet, védelmet és folyami kereskedelmet egyesít. A váras tartalmakhoz és a Duna-útvonalakhoz Baba Vida erős SEO-célpont.",
      ro: "Cea mai cunoscută fortăreață din Vidin și una dintre cele mai bine păstrate cetăți medievale ale Bulgariei. Baba Vida stă chiar pe malul Dunării și definește profilul orașului. Locul combină istoria de frontieră, apărarea și comerțul fluvial. Pentru paginile despre castele și traseele dunărene, Baba Vida este foarte puternic.",
      en: "Vidin's best-known fortress and one of Bulgaria's best-preserved medieval castles. Baba Vida stands right on the Danube and shapes the city skyline. It combines border history, defense, and river trade. For castle pages and Danube routes, Baba Vida is a strong SEO target."
    },
    facts: {
      de: ["Donauufer", "Vidin", "Mittelalterliche Burg", "Grenzgeschichte", "Stadtikon"],
      hu: ["Duna-part", "Vidin", "Középkori vár", "Határtörténelem", "Városi jelkép"],
      ro: ["Malul Dunării", "Vidin", "Cetate medievală", "Istorie de frontieră", "Simbol urban"],
      en: ["Danube bank", "Vidin", "Medieval castle", "Border history", "City icon"]
    },
    image: "/geo-images/bulgaria/hist-baba-vida.webp"
  },
  {
    id: "hist-cherven-fortress",
    type: "historical",
    parent: "bg-country",
    coords: [25.9700, 43.6340],
    name: {
      de: "Festung Tscherwen",
      hu: "Cserven erőd",
      ro: "Cetatea Cerven",
      en: "Cherven Fortress"
    },
    description: {
      de: "Mittelalterliche Festung in Nordbulgarien mit Blick auf die Felsen über dem Fluss Tscherni Lom. Cherven gehört zu den wichtigsten historischen Ausflügen in der Region Russe. Die Ruinen zeigen die Verteidigungsstruktur des späten Mittelalters. Für Burgentourismus in Bulgarien ist Cherven ein klarer Suchtreffer.",
      hu: "Középkori erőd Észak-Bulgáriában, kilátással a Cserni Lom folyó fölötti sziklákra. Cserven az egyik legfontosabb történelmi kirándulóhely Rusze térségében. A romok a késő középkori védelmi rendszert mutatják be. A bolgár várturizmusban Cserven erős kulcsszó.",
      ro: "Cetate medievală din nordul Bulgariei, cu vedere asupra stâncilor deasupra râului Cherni Lom. Cerven este una dintre cele mai importante excursii istorice din zona Ruse. Ruinele arată structura defensivă a Evului Mediu târziu. Pentru turismul de cetăți în Bulgaria, Cerven este o căutare clară.",
      en: "A medieval fortress in northern Bulgaria overlooking the cliffs above the Cherni Lom River. Cherven is one of the most important historic excursions in the Ruse region. The ruins show the defensive structure of the late Middle Ages. For fortress tourism in Bulgaria, Cherven is a clear search term."
    },
    facts: {
      de: ["Nordbulgarien", "Russe-Region", "Mittelalterliche Ruine", "Flussschlucht", "Burgentourismus"],
      hu: ["Észak-Bulgária", "Rusze régió", "Középkori rom", "Folyószurdok", "Várturizmus"],
      ro: ["Nordul Bulgariei", "Zona Ruse", "Ruine medievale", "Defileu fluvial", "Turism de cetăți"],
      en: ["Northern Bulgaria", "Ruse region", "Medieval ruin", "River gorge", "Fortress tourism"]
    },
    image: "/geo-images/bulgaria/hist-cherven-fortress.webp"
  },
  {
    id: "hist-shipka-battlefield",
    type: "historical",
    parent: "bg-country",
    coords: [25.4000, 42.7510],
    name: {
      de: "Schipka-Pass",
      hu: "Shipka-hágó",
      ro: "Pasul Șipka",
      en: "Shipka Pass Battlefield"
    },
    description: {
      de: "Geschichtsträchtiger Gebirgspass, eng verbunden mit den Kämpfen um die bulgarische Befreiung. Der Ort wird oft mit Denkmälern, Schlachtfeld und Nationalgedenken gesucht. Die Lage im Balkangebirge macht die Erzählung besonders stark. Für historisches Bulgarien-SEO ist Shipka unverzichtbar.",
      hu: "Történelmi hegyi hágó, amely szorosan kapcsolódik a bolgár felszabadító harcokhoz. A helyet gyakran emlékművekkel, csatamezővel és nemzeti megemlékezéssel keresik. A Balkán-hegységi fekvés erősíti a történetet. A történelmi Bulgária SEO-ban Shipka kihagyhatatlan.",
      ro: "Pas montan încărcat de istorie, legat strâns de luptele pentru eliberarea Bulgariei. Locul este căutat pentru monumente, câmp de luptă și memorie națională. Poziția din Munții Balcani face povestea și mai puternică. Pentru SEO despre Bulgaria istorică, Shipka este esențial.",
      en: "A historic mountain pass closely tied to Bulgaria's liberation battles. The site is often searched for monuments, battlefield history, and national memory. Its Balkan Mountain setting makes the story especially powerful. For historic Bulgaria SEO, Shipka is essential."
    },
    facts: {
      de: ["Freiheitskampf", "Balkangebirge", "Nationalgedenken", "Schlachtfeld", "Monumente"],
      hu: ["Felszabadítás", "Balkán-hegység", "Nemzeti emlékezet", "Csatamező", "Emlékművek"],
      ro: ["Lupta de eliberare", "Munții Balcani", "Memorie națională", "Câmp de luptă", "Monumente"],
      en: ["Liberation struggle", "Balkan Mountains", "National memory", "Battlefield", "Monuments"]
    },
    image: "/geo-images/bulgaria/hist-shipka-battlefield.webp"
  },
  {
    id: "hist-nesebar-old-town",
    type: "historical",
    parent: "bg-country",
    coords: [27.7360, 42.6591],
    name: {
      de: "Alt-Nesebar",
      hu: "Ó-Neszebar",
      ro: "Orașul vechi Nessebar",
      en: "Nessebar Old Town"
    },
    description: {
      de: "Historische Halbinselstadt am Schwarzen Meer mit Kirchen, Gassen und antiker Atmosphäre. Nessebar ist eines der stärksten UNESCO-Nahziele an der bulgarischen Küste. Die Altstadt verbindet griechische, byzantinische und bulgarische Spuren. Für Meer, Geschichte und Bulgarien-Reisen ist Nessebar ein Premium-Keyword.",
      hu: "Történelmi félszigetváros a Fekete-tenger partján, templomokkal, sikátorokkal és ókori hangulattal. Neszebar Bulgária egyik legerősebb UNESCO-közeli tengerparti célpontja. Az óváros görög, bizánci és bolgár nyomokat egyesít. Tenger, történelem és bolgár utazás témában Neszebar prémium kulcsszó.",
      ro: "Oraș istoric pe o peninsulă de la Marea Neagră, cu biserici, străduțe și atmosferă antică. Nessebar este una dintre cele mai puternice destinații de coastă apropiate de UNESCO. Orașul vechi combină urme grecești, bizantine și bulgare. Pentru mare, istorie și turism în Bulgaria, Nessebar este un cuvânt cheie premium.",
      en: "A historic peninsula town on the Black Sea with churches, lanes, and an ancient atmosphere. Nessebar is one of Bulgaria's strongest UNESCO-adjacent coastal destinations. The old town blends Greek, Byzantine, and Bulgarian traces. For sea, history, and Bulgaria travel, Nessebar is a premium keyword."
    },
    facts: {
      de: ["Schwarzes Meer", "Halbinselstadt", "UNESCO-Nähe", "Altstadtkirchen", "Küstenhistorie"],
      hu: ["Fekete-tenger", "Félszigetváros", "UNESCO-közelség", "Óvárosi templomok", "Tengerparti történelem"],
      ro: ["Marea Neagră", "Oraș pe peninsulă", "Aproape de UNESCO", "Biserici vechi", "Istorie de coastă"],
      en: ["Black Sea", "Peninsula town", "Near UNESCO", "Old churches", "Coastal history"]
    },
    image: "/geo-images/bulgaria/hist-nesebar-old-town.webp"
  },
  {
    id: "hist-hisarya-fortress",
    type: "historical",
    parent: "bg-country",
    coords: [24.7088, 42.5038],
    name: {
      de: "Hisarja-Ruinen",
      hu: "Hisarja erődromjai",
      ro: "Cetatea Hisarya",
      en: "Hisarya Fortress"
    },
    description: {
      de: "Römische und spätrömische Festungsmauern im Kurort Hisarja. Der Ort ist bekannt für Heilquellen, Archäologie und gut erhaltene Stadtmauern. Die Anlage zeigt, wie stark die Region schon in der Antike befestigt war. Für Geschichte und Wellness-Tourismus in Bulgarien ist Hisarja sehr relevant.",
      hu: "Római és késő római erődfalak a hiszaryai fürdővárosban. A hely gyógyforrásairól, régészetéről és jól megmaradt városfalairól ismert. A komplexum megmutatja, mennyire erősen erődített volt a térség az ókorban. Történelemhez és wellness-turizmushoz Hisarya nagyon releváns.",
      ro: "Ziduri fortificate romane și târzii-romane în stațiunea Hisarya. Locul este cunoscut pentru izvoare, arheologie și zidurile sale bine păstrate. Ansamblul arată cât de bine era fortificată zona încă din Antichitate. Pentru istorie și turism balnear în Bulgaria, Hisarya este foarte relevantă.",
      en: "Roman and late Roman fortress walls in the spa town of Hisarya. The site is known for its springs, archaeology, and well-preserved walls. The complex shows how strongly fortified the area was in antiquity. For history and spa tourism in Bulgaria, Hisarya is highly relevant."
    },
    facts: {
      de: ["Römische Mauern", "Kurort Hisarja", "Heilquellen", "Antike Verteidigung", "Archäologie"],
      hu: ["Római falak", "Hiszarya fürdőváros", "Gyógyforrások", "Ókori védelem", "Régészet"],
      ro: ["Ziduri romane", "Stațiunea Hisarya", "Izvoare termale", "Apărare antică", "Arheologie"],
      en: ["Roman walls", "Hisarya spa town", "Thermal springs", "Ancient defense", "Archaeology"]
    },
    image: "/geo-images/bulgaria/hist-hisarya-fortress.webp"
  },
  {
    id: "land-alexander-nevsky-cathedral",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3325, 42.6951],
    name: {
      de: "Alexander-Newski-Kathedrale",
      hu: "Alekszandr Nyevszkij-székesegyház",
      ro: "Catedrala Alexandr Nevski",
      en: "Alexander Nevsky Cathedral"
    },
    description: {
      de: "Das berühmteste Bauwerk Sofias mit goldenen Kuppeln und monumentaler Präsenz. Die Kathedrale ist ein zentrales Wahrzeichen für Bulgarien-Reisen und Stadtmarketing. Besucher suchen sie wegen Architektur, Orthodoxie und Fotomotiven. Als ikonisches Landmark ist sie ein SEO-Anker für Sofia.",
      hu: "Szófia leghíresebb épülete arany kupolákkal és monumentális megjelenéssel. A székesegyház központi jelkép a bolgár utazási és városmarketing tartalmakban. Az emberek építészete, ortodox jellege és fotózási értéke miatt keresik. Ikonikus landmarkként erős SEO-horgony Szófiához.",
      ro: "Cea mai celebră clădire a Sofiei, cu cupole aurii și prezență monumentală. Catedrala este un reper central pentru turismul și brandingul Bulgariei. Vizitatorii o caută pentru arhitectură, ortodoxie și fotografii. Ca landmark iconic, este un ancoraj SEO pentru Sofia.",
      en: "Sofia's most famous building, with golden domes and a monumental presence. The cathedral is a central symbol for Bulgaria travel and city branding. Visitors search for it for architecture, Orthodoxy, and photography. As an iconic landmark, it is a strong SEO anchor for Sofia."
    },
    facts: {
      de: ["Sofia", "Goldene Kuppeln", "Orthodoxes Wahrzeichen", "Fotomotiv", "Stadtikon"],
      hu: ["Szófia", "Arany kupolák", "Ortodox jelkép", "Fotótéma", "Városi ikon"],
      ro: ["Sofia", "Cupole aurii", "Simbol ortodox", "Loc foto", "Icon urban"],
      en: ["Sofia", "Golden domes", "Orthodox symbol", "Photo spot", "City icon"]
    },
    image: "/geo-images/bulgaria/land-alexander-nevsky-cathedral.webp"
  },
  {
    id: "land-national-palace-culture",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3206, 42.6809],
    name: {
      de: "Nationaler Kulturpalast",
      hu: "Nemzeti Kultúrpalota",
      ro: "Palatul Național al Culturii",
      en: "National Palace of Culture"
    },
    description: {
      de: "Sofias großer Veranstaltungs- und Kongresskomplex mit moderner sozialistischer Architektur. Der Kulturpalast ist ein sehr bekannter Treffpunkt für Events, Messen und Konzerte. Seine Lage im Zentrum macht ihn für Stadtbesuche und Google-Suchen gleichermaßen stark. Als Landmark ist er ein wichtiges Symbol des modernen Sofia.",
      hu: "Szófia nagy rendezvény- és kongresszusi komplexuma modern szocialista építészettel. A Kultúrpalota jól ismert találkozóhely rendezvényekhez, vásárokhoz és koncertekhez. Központi fekvése miatt városlátogatáshoz és keresésekhez is erős. Landmarkként a modern Szófia egyik fontos szimbóluma.",
      ro: "Marele complex de evenimente și congrese al Sofiei, cu arhitectură socialistă modernă. Palatul Culturii este un punct de întâlnire cunoscut pentru evenimente, târguri și concerte. Poziția centrală îl face puternic pentru vizite urbane și căutări online. Ca landmark, este un simbol important al Sofiei moderne.",
      en: "Sofia's major events and congress complex with modern socialist architecture. The palace is a well-known meeting point for events, fairs, and concerts. Its central location makes it strong for city visits and online searches. As a landmark, it is an important symbol of modern Sofia."
    },
    facts: {
      de: ["Sofia-Zentrum", "Kongresshalle", "Konzerte", "Moderne Architektur", "Event-Ort"],
      hu: ["Szófia központja", "Kongresszusi csarnok", "Koncertek", "Modern építészet", "Rendezvényhelyszín"],
      ro: ["Centrul Sofiei", "Săli de congrese", "Concerte", "Arhitectură modernă", "Loc de evenimente"],
      en: ["Central Sofia", "Congress hall", "Concerts", "Modern architecture", "Event venue"]
    },
    image: "/geo-images/bulgaria/land-national-palace-culture.webp"
  },
  {
    id: "land-ivan-vazov-theatre",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3240, 42.6938],
    name: {
      de: "Nationaltheater Iwan Wasow",
      hu: "Ivan Vazov Nemzeti Színház",
      ro: "Teatrul Național Ivan Vazov",
      en: "Ivan Vazov National Theatre"
    },
    description: {
      de: "Das klassische Theatergebäude im Herzen Sofias ist eines der elegantesten Wahrzeichen der Stadt. Es steht für Literatur, Bühne und städtische Kultur. Besucher kommen wegen der neoklassischen Fassade und der zentralen Lage. Für Kultur- und Stadt-SEO ist das Theater ein starker Name.",
      hu: "Szófia szívének klasszikus színházépülete, a város egyik legelegánsabb jelképe. Az irodalmat, a színpadot és a városi kultúrát képviseli. A neoklasszikus homlokzat és a központi fekvés miatt sokan keresik. Kultúra- és városi SEO-ban erős név.",
      ro: "Clădirea clasică a teatrului din inima Sofiei este unul dintre cele mai elegante repere ale orașului. Ea simbolizează literatura, scena și cultura urbană. Vizitatorii vin pentru fațada neoclasică și poziția centrală. Pentru SEO cultural și urban, teatrul este un nume puternic.",
      en: "The classic theatre building in the heart of Sofia is one of the city's most elegant landmarks. It stands for literature, the stage, and urban culture. Visitors come for the neoclassical facade and central location. For culture and city SEO, the theatre is a strong name."
    },
    facts: {
      de: ["Sofia", "Neoklassik", "Literatur- und Theaterort", "Zentrale Lage", "Kulturelles Symbol"],
      hu: ["Szófia", "Neoklasszicizmus", "Irodalmi és színházi hely", "Központi fekvés", "Kulturális szimbólum"],
      ro: ["Sofia", "Neoclasic", "Loc de teatru și literatură", "Poziție centrală", "Simbol cultural"],
      en: ["Sofia", "Neoclassical", "Theatre and literature site", "Central location", "Cultural symbol"]
    },
    image: "/geo-images/bulgaria/land-ivan-vazov-theatre.webp"
  },
  {
    id: "land-central-mineral-baths",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3235, 42.6972],
    name: {
      de: "Zentralbäder Sofia",
      hu: "Szófia központi fürdői",
      ro: "Băile Minerale Centrale",
      en: "Central Mineral Baths"
    },
    description: {
      de: "Das alte Badehaus Sofias verbindet Jugendstilfassade mit Thermaltradition. Heute ist es ein ikonischer Bau für Stadtgeschichte, Mineralwasser und Architektur. Es liegt zentral und passt stark zu Bulgarien-Themen rund um Wellness und Kultur. Als Landmark hat es hohe Wiedererkennbarkeit.",
      hu: "Szófia régi fürdőháza a szecessziós homlokzatot a termálhagyománnyal köti össze. Ma a várostörténet, a termálvíz és az építészet ikonikus épülete. Központi helyen áll, és jól kapcsolódik a wellness- és kultúratémákhoz. Landmarkként magas az ismertsége.",
      ro: "Vechea clădire a băilor din Sofia combină fațada Art Nouveau cu tradiția termală. Astăzi este o clădire iconică pentru istoria orașului, apa minerală și arhitectură. Este amplasată central și se potrivește bine temelor de wellness și cultură. Ca landmark, are o recunoaștere foarte mare.",
      en: "Sofia's old bathhouse combines an Art Nouveau facade with thermal tradition. Today it is an iconic building for city history, mineral water, and architecture. Its central position fits well with wellness and culture themes. As a landmark, it has high recognition."
    },
    facts: {
      de: ["Jugendstil", "Mineralwasser", "Sofia-Zentrum", "Historisches Badehaus", "Architekturikone"],
      hu: ["Szecesszió", "Termálvíz", "Szófia központja", "Történelmi fürdő", "Építészeti ikon"],
      ro: ["Art Nouveau", "Apă minerală", "Centrul Sofiei", "Baie istorică", "Icoană arhitecturală"],
      en: ["Art Nouveau", "Mineral water", "Central Sofia", "Historic bathhouse", "Architecture icon"]
    },
    image: "/geo-images/bulgaria/land-central-mineral-baths.webp"
  },
  {
    id: "land-ancient-theatre-plovdiv",
    type: "landmark",
    parent: "bg-country",
    coords: [24.7465, 42.1461],
    name: {
      de: "Antikes Theater Plowdiw",
      hu: "Plovdivi ókori színház",
      ro: "Teatrul Antic din Plovdiv",
      en: "Ancient Theatre of Plovdiv"
    },
    description: {
      de: "Das römische Theater von Plowdiw ist eines der markantesten Bauwerke im ganzen Land. Es wird bis heute für Aufführungen genutzt und zieht viele Besucher an. Die Lage in der Altstadt macht es ideal für Kultur-, Stadt- und SEO-Inhalte. Es ist ein Premium-Landmark für Bulgarien-Reisen.",
      hu: "A plovdivi római színház az ország egyik legmarkánsabb építménye. Ma is előadások helyszíne, és sok látogatót vonz. Az óvárosi fekvés tökéletes kulturális, városi és SEO tartalmakhoz. Bulgária utazási oldalain prémium landmark.",
      ro: "Teatrul roman din Plovdiv este una dintre cele mai emblematice construcții din țară. Este folosit și astăzi pentru spectacole și atrage mulți vizitatori. Poziția sa în orașul vechi îl face ideal pentru conținut cultural, urban și SEO. Este un landmark premium pentru turismul în Bulgaria.",
      en: "Plovdiv's Roman theatre is one of the country's most distinctive structures. It is still used for performances and attracts many visitors. Its old-town setting makes it ideal for culture, city, and SEO content. It is a premium landmark for Bulgaria travel."
    },
    facts: {
      de: ["Römisches Theater", "Plowdiw", "Altstadt", "Aufführungen", "Antike Architektur"],
      hu: ["Római színház", "Plovdiv", "Óváros", "Előadások", "Ókori építészet"],
      ro: ["Teatru roman", "Plovdiv", "Oraș vechi", "Spectacole", "Arhitectură antică"],
      en: ["Roman theatre", "Plovdiv", "Old town", "Performances", "Ancient architecture"]
    },
    image: "/geo-images/bulgaria/land-ancient-theatre-plovdiv.webp"
  },
  {
    id: "land-varna-archaeological-museum",
    type: "landmark",
    parent: "bg-country",
    coords: [27.9140, 43.2134],
    name: {
      de: "Archäologisches Museum Warna",
      hu: "Várnai Régészeti Múzeum",
      ro: "Muzeul Arheologic Varna",
      en: "Varna Archaeological Museum"
    },
    description: {
      de: "Eines der bedeutendsten Museen Bulgariens mit starkem Fokus auf Antike und Goldschatz. Das Museum ist ein Muss für Varna, Geschichte und Schwarzmeerküste. Die berühmten Funde machen es international sichtbar. Als Landmark stärkt es das kulturelle Profil der Hafenstadt.",
      hu: "Bulgária egyik legfontosabb múzeuma, erős ókori és aranykincs-fókusszal. A múzeum kötelező célpont Várnában, történelemhez és Fekete-tengerhez. A híres leletek nemzetközileg is ismertté teszik. Landmarkként erősíti a kikötőváros kulturális arculatát.",
      ro: "Unul dintre cele mai importante muzee din Bulgaria, cu accent puternic pe Antichitate și tezaurul de aur. Muzeul este o vizită obligatorie pentru Varna, istorie și litoralul Mării Negre. Descoperirile celebre îi dau vizibilitate internațională. Ca landmark, întărește profilul cultural al orașului-port.",
      en: "One of Bulgaria's most important museums, with a strong focus on antiquity and gold treasures. The museum is a must for Varna, history, and the Black Sea coast. Its famous finds give it international visibility. As a landmark, it strengthens the port city's cultural profile."
    },
    facts: {
      de: ["Varna", "Antike Funde", "Goldschatz", "Schwarzmeerküste", "Top-Museum"],
      hu: ["Várna", "Ókori leletek", "Aranykincs", "Fekete-tenger partja", "Topmúzeum"],
      ro: ["Varna", "Descoperiri antice", "Tezaur de aur", "Litoralul Mării Negre", "Muzeu major"],
      en: ["Varna", "Ancient finds", "Gold treasure", "Black Sea coast", "Top museum"]
    },
    image: "/geo-images/bulgaria/land-varna-archaeological-museum.webp"
  },
  {
    id: "land-national-history-museum",
    type: "landmark",
    parent: "bg-country",
    coords: [23.2750, 42.6450],
    name: {
      de: "Nationalhistorisches Museum",
      hu: "Nemzeti Történeti Múzeum",
      ro: "Muzeul Național de Istorie",
      en: "National History Museum"
    },
    description: {
      de: "Bulgariens größtes Geschichtsmuseum mit Sammlungen von der Antike bis zur Neuzeit. Das Museum ist ein zentraler Ort für Geschichte, Staatlichkeit und kulturelles Gedächtnis. Es liegt im Südwesten Sofias und passt gut zu Bildungsreisen. Als Landmark ist es ein starker Museumsbegriff für Bulgarien.",
      hu: "Bulgária legnagyobb történeti múzeuma, az ókortól a modern korig gyűjteményekkel. A múzeum a történelem, az államiság és a kulturális emlékezet központi helye. Szófia délnyugati részén található, így jól illik az oktatási utazásokhoz. Landmarkként erős múzeumi kulcsszó Bulgáriában.",
      ro: "Cel mai mare muzeu de istorie din Bulgaria, cu colecții din Antichitate până în epoca modernă. Muzeul este un loc central pentru istorie, statalitate și memorie culturală. Se află în sud-vestul Sofiei și se potrivește bine tururilor educative. Ca landmark, este un termen muzeal puternic pentru Bulgaria.",
      en: "Bulgaria's largest history museum, with collections from antiquity to the modern era. The museum is a central place for history, statehood, and cultural memory. It sits in southwest Sofia and fits educational travel well. As a landmark, it is a strong museum term for Bulgaria."
    },
    facts: {
      de: ["Größtes Geschichtsmuseum", "Sofia", "Antike bis Moderne", "Bildungsreisen", "Kulturerbe"],
      hu: ["Legnagyobb történeti múzeum", "Szófia", "Ókortól modern korig", "Oktatási utazás", "Kulturális emlékezet"],
      ro: ["Cel mai mare muzeu istoric", "Sofia", "Antichitate până azi", "Turism educativ", "Memorie culturală"],
      en: ["Largest history museum", "Sofia", "Antiquity to modern era", "Educational travel", "Cultural memory"]
    },
    image: "/geo-images/bulgaria/land-national-history-museum.webp"
  },
  {
    id: "land-saint-george-rotunda",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3220, 42.7000],
    name: {
      de: "St.-Georgs-Rotunde",
      hu: "Szent György rotunda",
      ro: "Rotunda Sfântul Gheorghe",
      en: "Saint George Rotunda"
    },
    description: {
      de: "Die älteste erhaltene Bauform in Sofia und ein sehr starker urbaner Anker. Die Rotunde steht für spätantike und frühchristliche Geschichte im Stadtzentrum. Sie ist klein, aber bedeutend für Architektur, Religion und Stadtentwicklung. Als Landmark ergänzt sie jede Sofia-Seite perfekt.",
      hu: "Szófia legrégebbi fennmaradt építészeti emléke és nagyon erős városi jelkép. A rotunda a késő antik és kora keresztény történelem emléke a belvárosban. Kicsi, de fontos építészeti, vallási és városfejlődési szempontból. Landmarkként tökéletesen kiegészíti a Szófiáról szóló oldalt.",
      ro: "Cea mai veche formă de clădire păstrată în Sofia și un reper urban foarte puternic. Rotunda reprezintă istoria târzie antică și creștină timpurie din centrul orașului. Este mică, dar importantă pentru arhitectură, religie și dezvoltarea urbană. Ca landmark, completează perfect orice pagină despre Sofia.",
      en: "The oldest preserved building form in Sofia and a very strong urban anchor. The rotunda represents late antique and early Christian history in the city center. It is small but important for architecture, religion, and urban development. As a landmark, it fits any Sofia page perfectly."
    },
    facts: {
      de: ["Čltestes Sofia-Bauwerk", "Spätantike", "Frühchristlich", "Innenstadt", "Architekturdenkmal"],
      hu: ["Szófia legrégebbi épülete", "Késő antik kor", "Kora keresztény", "Belváros", "Építészeti emlék"],
      ro: ["Cea mai veche clădire din Sofia", "Antichitate târzie", "Creștinism timpuriu", "Centru oraș", "Monument arhitectural"],
      en: ["Oldest Sofia building", "Late antiquity", "Early Christian", "City center", "Architectural monument"]
    },
    image: "/geo-images/bulgaria/land-saint-george-rotunda.webp"
  },
  {
    id: "port-varna",
    type: "port",
    parent: "bg-country",
    coords: [27.9098, 43.2160],
    name: {
      de: "Hafen Warna",
      hu: "Várna kikötője",
      ro: "Portul Varna",
      en: "Port of Varna"
    },
    description: {
      de: "Der wichtigste Seehafen an der bulgarischen Schwarzmeerküste und ein zentrales Logistikdreieck. Der Hafen verbindet Containerverkehr, Handel und maritime Wirtschaft. Für Reise- und Wirtschaftscontent ist Varna ein starkes Küsten-Keyword. Die Lage macht ihn für Black-Sea-SEO sehr wertvoll.",
      hu: "Bulgária legfontosabb tengeri kikötője a Fekete-tenger partján és kulcsfontosságú logisztikai csomópont. A kikötő összeköti a konténerforgalmat, a kereskedelmet és a tengeri gazdaságot. Utazási és gazdasági tartalmakban Várna erős parti kulcsszó. Fekete-tengeri SEO-ban különösen értékes.",
      ro: "Cel mai important port maritim de pe litoralul bulgar al Mării Negre și un nod logistic central. Portul leagă traficul de containere, comerțul și economia maritimă. Pentru conținut de călătorie și business, Varna este un cuvânt cheie costier puternic. Poziția sa îl face foarte valoros pentru SEO de litoral.",
      en: "The most important seaport on Bulgaria's Black Sea coast and a major logistics hub. The port connects container traffic, trade, and maritime business. For travel and business content, Varna is a strong coastal keyword. Its location makes it highly valuable for Black Sea SEO."
    },
    facts: {
      de: ["Schwarzmeerhafen", "Containerverkehr", "Logistikzentrum", "Varna", "Maritime Wirtschaft"],
      hu: ["Fekete-tengeri kikötő", "Konténerforgalom", "Logisztikai központ", "Várna", "Tengeri gazdaság"],
      ro: ["Port la Marea Neagră", "Trafic de containere", "Centru logistic", "Varna", "Economie maritimă"],
      en: ["Black Sea port", "Container traffic", "Logistics hub", "Varna", "Maritime business"]
    },
    image: "/geo-images/bulgaria/port-varna.webp"
  },
  {
    id: "port-burgas",
    type: "port",
    parent: "bg-country",
    coords: [27.4805, 42.5054],
    name: {
      de: "Hafen Burgas",
      hu: "Burgasz kikötője",
      ro: "Portul Burgas",
      en: "Port of Burgas"
    },
    description: {
      de: "Der größte Hafen im Süden der bulgarischen Schwarzmeerküste mit starkem Industrie- und Energiesektor. Burgas ist ein wichtiger Knoten für Öl, Fracht und maritime Dienstleistungen. Der Hafen prägt Stadtentwicklung und Arbeitsmarkt. Für Bulgarien-SEO rund um Logistik und Küste ist er unverzichtbar.",
      hu: "A bolgár Fekete-tenger déli részének legnagyobb kikötője, erős ipari és energetikai szereppel. Burgasz fontos csomópont az olaj, az áruszállítás és a tengeri szolgáltatások számára. A kikötő a városfejlődést és a munkaerőpiacot is meghatározza. Logisztikai és parti SEO-ban kihagyhatatlan.",
      ro: "Cel mai mare port din sudul litoralului bulgar al Mării Negre, cu rol puternic industrial și energetic. Burgas este un nod important pentru petrol, mărfuri și servicii maritime. Portul influențează dezvoltarea orașului și piața muncii. Pentru SEO despre logistică și coastă în Bulgaria, este esențial.",
      en: "The largest port in the south of Bulgaria's Black Sea coast, with a strong industrial and energy role. Burgas is an important node for oil, freight, and maritime services. The port shapes city development and the local job market. For Bulgaria SEO about logistics and coast, it is essential."
    },
    facts: {
      de: ["Südküste", "Öl und Fracht", "Industriesektor", "Burgas", "Schwarzmeerlogistik"],
      hu: ["Déli part", "Olaj és áru", "Ipari szektor", "Burgasz", "Fekete-tengeri logisztika"],
      ro: ["Coasta sudică", "Petrol și mărfuri", "Sector industrial", "Burgas", "Logistică la Marea Neagră"],
      en: ["Southern coast", "Oil and freight", "Industrial sector", "Burgas", "Black Sea logistics"]
    },
    image: "/geo-images/bulgaria/port-burgas.webp"
  },
  {
    id: "industry-maritsa-east-complex",
    type: "industry",
    parent: "bg-country",
    coords: [25.9000, 42.3000],
    name: {
      de: "Mariza-Ost-Komplex",
      hu: "Marica keleti komplexum",
      ro: "Complexul Maritsa East",
      en: "Maritsa East Complex"
    },
    description: {
      de: "Bulgariens größter Energie- und Bergbaukomplex mit Kohleförderung und Kraftwerksfunktion. Der Standort spielt eine zentrale Rolle für Stromversorgung und Industriegeschichte. Er ist ein Schlüsselbegriff für Wirtschafts- und Energiestrategie in Bulgarien. SEO rund um Energie und Schwerindustrie profitiert stark von diesem Namen.",
      hu: "Bulgária legnagyobb energiatermelő és bányászati komplexuma, szénkitermeléssel és erőművi funkcióval. A helyszín központi szerepet játszik az áramellátásban és az ipartörténetben. Kulcsszó az energiagazdaság és a nehézipar témájában. SEO-ban erősen teljesít az ipari tartalmaknál.",
      ro: "Cel mai mare complex energetic și minier din Bulgaria, cu extracție de cărbune și funcții de centrală. Locul joacă un rol central în alimentarea cu energie și istoria industrială. Este un termen cheie pentru strategia energetică și economică a Bulgariei. SEO-ul pentru energie și industrie grea beneficiază clar de acest nume.",
      en: "Bulgaria's largest energy and mining complex, with coal extraction and power-generation functions. The site plays a central role in electricity supply and industrial history. It is a key term for Bulgaria's energy and economic strategy. SEO about energy and heavy industry benefits strongly from this name."
    },
    facts: {
      de: ["Energiekomplex", "Braunkohle", "Stromversorgung", "Industriezone", "Südostbulgarien"],
      hu: ["Energetikai komplexum", "Barnaszén", "Villamosenergia-ellátás", "Ipari zóna", "Délkelet-Bulgária"],
      ro: ["Complex energetic", "Lignit", "Aprovizionare cu energie", "Zonă industrială", "Sud-estul Bulgariei"],
      en: ["Energy complex", "Lignite coal", "Power supply", "Industrial zone", "Southeastern Bulgaria"]
    },
    image: "/geo-images/bulgaria/industry-maritsa-east-complex.webp"
  },
  {
    id: "industry-kozloduy-npp",
    type: "industry",
    parent: "bg-country",
    coords: [23.7330, 43.7810],
    name: {
      de: "Kozloduj-Kernkraftwerk",
      hu: "Kozloduj atomerőmű",
      ro: "Centrala Nucleară Kozlodui",
      en: "Kozloduy Nuclear Power Plant"
    },
    description: {
      de: "Bulgarien wichtigstes Kernkraftwerk an der Donau und ein zentraler Punkt der Energieversorgung. Der Standort ist stark mit Stromproduktion, Technik und Sicherheitsmanagement verbunden. Für Industrie- und Energiesuchen in Bulgarien ist Kozloduj extrem relevant. Die Donau-Lage verstärkt den geografischen Wiedererkennungswert.",
      hu: "Bulgária legfontosabb atomerőműve a Duna partján és az energiaellátás központi eleme. A helyszín erősen kapcsolódik az áramtermeléshez, a technológiához és a biztonsági menedzsmenthez. Ipari és energetikai keresésekben Kozloduj rendkívül releváns. A dunai elhelyezkedés a földrajzi felismerhetőséget is növeli.",
      ro: "Cea mai importantă centrală nucleară a Bulgariei, situată pe Dunăre, și un element central al sistemului energetic. Locul este puternic asociat cu producția de energie, tehnologia și managementul securității. Pentru căutările despre industrie și energie în Bulgaria, Kozloduy este foarte relevant. Poziția pe Dunăre îi crește recunoașterea geografică.",
      en: "Bulgaria's most important nuclear power plant, located on the Danube and central to the energy system. The site is strongly associated with electricity generation, technology, and safety management. For industry and energy searches in Bulgaria, Kozloduy is highly relevant. Its Danube location boosts geographic recognition."
    },
    facts: {
      de: ["Donau", "Kernenergie", "Stromproduktion", "Technologie", "Energieversorgung"],
      hu: ["Duna", "Nukleáris energia", "Villamosenergia-termelés", "Technológia", "Energiaellátás"],
      ro: ["Dunăre", "Energie nucleară", "Producție de electricitate", "Tehnologie", "Sistem energetic"],
      en: ["Danube", "Nuclear power", "Electricity generation", "Technology", "Energy supply"]
    },
    image: "/geo-images/bulgaria/industry-kozloduy-npp.webp"
  },
  {
    id: "agriculture-rose-valley-kazanlak",
    type: "agriculture",
    parent: "bg-country",
    coords: [25.3980, 42.6200],
    name: {
      de: "Rosen Tal bei Kasanlak",
      hu: "Rózsák völgye Kazanlaknál",
      ro: "Valea Trandafirilor din Kazanlak",
      en: "Rose Valley of Kazanlak"
    },
    description: {
      de: "Das berühmteste Rosenanbaugebiet Bulgariens und die Heimat des Rosenöls. Die Region steht für landwirtschaftliche Tradition, frühe Ernte und starkes Exportprofil. Besucher suchen hier Felder, Feste und Destillerien. Für Agrar-, Duft- und Bulgarien-SEO ist das Rose Valley ein Top-Begriff.",
      hu: "Bulgária leghíresebb rózsatermesztő vidéke és a rózsaolaj otthona. A térség a mezőgazdasági hagyományról, a korai betakarításról és az exportprofilról ismert. A látogatók a mezők, fesztiválok és lepárlók miatt keresik. Agrár-, illat- és bolgár SEO-ban a Rózsa-völgy toplista.",
      ro: "Cea mai cunoscută zonă de cultivare a trandafirilor din Bulgaria și casa uleiului de trandafir. Regiunea înseamnă tradiție agricolă, recoltare timpurie și profil puternic de export. Vizitatorii caută câmpurile, festivalurile și distileriile. Pentru SEO despre agricultură, parfum și Bulgaria, Valea Trandafirilor este de top.",
      en: "Bulgaria's most famous rose-growing region and the home of rose oil. The area stands for agricultural tradition, early harvest, and a strong export profile. Visitors search for the fields, festivals, and distilleries. For agriculture, fragrance, and Bulgaria SEO, the Rose Valley is a top term."
    },
    facts: {
      de: ["Rosenöl", "Kazanlak", "Agrartradition", "Exportprodukt", "Rosenfest"],
      hu: ["Rózsaolaj", "Kazanlak", "Agrárhagyomány", "Exporttermék", "Rózsafesztivál"],
      ro: ["Ulei de trandafir", "Kazanlak", "Tradiție agricolă", "Produs de export", "Festivalul trandafirilor"],
      en: ["Rose oil", "Kazanlak", "Agricultural tradition", "Export product", "Rose festival"]
    },
    image: "/geo-images/bulgaria/agriculture-rose-valley-kazanlak.webp"
  },
  {
    id: "agriculture-melnik-vineyards",
    type: "agriculture",
    parent: "bg-country",
    coords: [23.4000, 41.5250],
    name: {
      de: "Weinberge von Melnik",
      hu: "Melnik szőlőhegyei",
      ro: "Vieiile din Melnik",
      en: "Melnik Vineyards"
    },
    description: {
      de: "Kleine, aber sehr bekannte Weinregion im Südwesten Bulgariens mit starkem Terroir-Charakter. Melnik ist ein Schlüsselname für bulgarischen Wein, Landwirtschaft und Genussreisen. Die Hügel und Weingüter sorgen für hohe Sichtbarkeit in Reise- und Lifestyle-Suchen. Für Agrar-SEO und Weintourismus ist Melnik sehr wertvoll.",
      hu: "Kicsi, de nagyon ismert borvidék Bulgária délnyugati részén, erős terroir-jelleggel. Melnik kulcsszó a bolgár bor, a mezőgazdaság és a gasztronómiai utazások terén. A dombok és pincészetek magas láthatóságot adnak az utazási és életmód-keresésekben. Agrár-SEO-hoz és borturizmushoz Melnik különösen értékes.",
      ro: "Regiune viticolă mică, dar foarte cunoscută din sud-vestul Bulgariei, cu caracter puternic de terroir. Melnik este un nume-cheie pentru vinul bulgăresc, agricultură și turismul gastronomic. Dealurile și cramele îi oferă vizibilitate mare în căutările de travel și lifestyle. Pentru SEO agricol și turism viticol, Melnik este foarte valoros.",
      en: "A small but very famous wine region in southwestern Bulgaria with a strong terroir character. Melnik is a key name for Bulgarian wine, agriculture, and food travel. The hills and wineries give it high visibility in travel and lifestyle searches. For agriculture SEO and wine tourism, Melnik is highly valuable."
    },
    facts: {
      de: ["Weinregion", "Melnik", "Terroir", "Winzerkultur", "Südwestbulgarien"],
      hu: ["Borvidék", "Melnik", "Terroir", "Pincészetek", "Délnyugat-Bulgária"],
      ro: ["Regiune viticolă", "Melnik", "Terroir", "Crame", "Sud-vestul Bulgariei"],
      en: ["Wine region", "Melnik", "Terroir", "Wineries", "Southwestern Bulgaria"]
    },
    image: "/geo-images/bulgaria/agriculture-melnik-vineyards.webp"
  }
];

export const bulgariaNature: POI[] = [
  {
    id: "nat-pirin",
    type: "landmark",
    parent: "bg-country",
    coords: [23.43, 41.73],
    name: {
      de: "Pirin-Nationalpark",
      hu: "Pirin Nemzeti Park",
      ro: "Parcul Național Pirin",
      en: "Pirin National Park"
    },
    description: {
      de: "UNESCO-geschützter Gebirgspark mit Gletscherseen im Pirin-Gebirge.",
      hu: "UNESCO-védett hegyi park gleccsertavakkal a Pirin-hegységben.",
      ro: "Parc montan protejat UNESCO, cu lacuri glaciare în Munții Pirin.",
      en: "A UNESCO-protected mountain park with glacial lakes in the Pirin range."
    },
    facts: {
      de: ["UNESCO-Naturerbe", "Gletscherseen", "Alpine Landschaft"],
      hu: ["UNESCO természeti világörökség", "Gleccsertavak", "Alpesi táj"],
      ro: ["Patrimoniu natural UNESCO", "Lacuri glaciare", "Peisaj alpin"],
      en: ["UNESCO natural heritage", "Glacial lakes", "Alpine landscape"]
    },
    image: "/geo-images/bulgaria/nat-pirin.webp"
  },
  {
    id: "nat-rila",
    type: "landmark",
    parent: "bg-country",
    coords: [23.55, 42.19],
    name: {
      de: "Rila-Nationalpark",
      hu: "Rilai Nemzeti Park",
      ro: "Parcul Național Rila",
      en: "Rila National Park"
    },
    description: {
      de: "Bulgariens größter Nationalpark mit dem Musala, dem höchsten Berg des Landes.",
      hu: "Bulgária legnagyobb nemzeti parkja, benne a Muszala csúccsal, az ország legmagasabb hegyével.",
      ro: "Cel mai mare parc național din Bulgaria, cu Musala, cel mai înalt vârf al țării.",
      en: "Bulgaria's largest national park, home to Musala, the country's highest peak."
    },
    facts: {
      de: ["Größter Nationalpark Bulgariens", "Musala 2925 m", "Hochgebirgsnatur"],
      hu: ["Bulgária legnagyobb nemzeti parkja", "Muszala 2925 m", "Magashegyi természet"],
      ro: ["Cel mai mare parc național din Bulgaria", "Musala 2925 m", "Natură de mare altitudine"],
      en: ["Largest national park in Bulgaria", "Musala 2925 m", "High-mountain nature"]
    },
    image: "/geo-images/bulgaria/nat-rila.webp"
  },
  {
    id: "nat-vitosha",
    type: "landmark",
    parent: "bg-country",
    coords: [23.28, 42.56],
    name: {
      de: "Witoscha",
      hu: "Vitosa",
      ro: "Vitoșa",
      en: "Vitosha"
    },
    description: {
      de: "Hausberg von Sofia mit Skigebieten und den Boyana-Wasserfällen.",
      hu: "Szófia hegyvidéke, sípályákkal és a Boyana-vízeséssel.",
      ro: "Muntele Sofiei, cu pârtii de schi și cascadele Boyana.",
      en: "Sofia's mountain with ski slopes and Boyana Waterfall."
    },
    facts: {
      de: ["Sofias Hausberg", "Ski- und Wandergebiet", "Boyana-Wasserfall"],
      hu: ["Szófia házi hegye", "Sí- és túraterület", "Boyana-vízesés"],
      ro: ["Muntele Sofiei", "Zonă de schi și drumeții", "Cascada Boyana"],
      en: ["Sofia's mountain", "Skiing and hiking area", "Boyana Waterfall"]
    },
    image: "/geo-images/bulgaria/nat-vitosha.webp"
  },
  {
    id: "nat-seven-rila",
    type: "landmark",
    parent: "bg-country",
    coords: [23.3205, 42.2333],
    name: {
      de: "Sieben Rila-Seen",
      hu: "Hét Rilai-tó",
      ro: "Șapte lacuri din Rila",
      en: "Seven Rila Lakes"
    },
    description: {
      de: "Sieben Gletscherseen im Rila-Gebirge, eines der bekanntesten Naturziele Bulgariens.",
      hu: "Hét gleccsertó a Rilai-hegységben, Bulgária egyik legismertebb természeti látványossága.",
      ro: "Șapte lacuri glaciare în Munții Rila, una dintre cele mai cunoscute atracții naturale din Bulgaria.",
      en: "Seven glacial lakes in the Rila Mountains, one of Bulgaria's best-known natural attractions."
    },
    facts: {
      de: ["7 Gletscherseen", "Beliebtes Wanderziel", "Rila-Gebirge"],
      hu: ["7 gleccsertó", "Népszerű túracélpont", "Rilai-hegység"],
      ro: ["7 lacuri glaciare", "Destinație populară de drumeții", "Munții Rila"],
      en: ["7 glacial lakes", "Popular hiking destination", "Rila Mountains"]
    },
    image: "/geo-images/bulgaria/nat-seven-rila.webp"
  },
  {
    id: "nat-bansko",
    type: "landmark",
    parent: "bg-country",
    coords: [23.487, 41.8389],
    name: {
      de: "Bansko",
      hu: "Banszko síparadicsom",
      ro: "Stațiunea de schi Bansko",
      en: "Bansko Ski Resort"
    },
    description: {
      de: "Großer Skiort am Fuße des Pirin mit langen Pisten und Wintersporttourismus.",
      hu: "Nagy síközpont a Pirin lábánál, hosszú pályákkal és téli turizmussal.",
      ro: "Stațiune mare de schi la poalele munților Pirin, cu pârtii lungi și turism de iarnă.",
      en: "A major ski resort at the foot of the Pirin with long slopes and winter tourism."
    },
    facts: {
      de: ["Beliebtes Skizentrum", "Pirin-Tor", "Starker Wintertourismus"],
      hu: ["Népszerű síközpont", "A Pirin kapuja", "Erős téli turizmus"],
      ro: ["Centru de schi popular", "Poarta către Pirin", "Turism de iarnă puternic"],
      en: ["Popular ski center", "Gateway to Pirin", "Strong winter tourism"]
    },
    image: "/geo-images/bulgaria/nat-bansko.webp"
  },
  {
    id: "nat-musala",
    type: "mountain",
    parent: "bg-country",
    coords: [23.5856, 42.1798],
    name: {
      de: "Musala",
      hu: "Muszala",
      ro: "Musala",
      en: "Musala"
    },
    description: {
      de: "Der höchste Berg Bulgariens und ein zentrales Ziel für alpine Reisen. Musala liegt im Rila-Gebirge und dominiert jede Höhen-SEO rund um Bulgarien. Die Route ist bekannt für klare Bergluft, Seen und Panoramen. Als Berg-Ikone ist Musala ein Muss für Naturcontent.",
      hu: "Bulgária legmagasabb hegycsúcsa és az alpesi utazások központi célpontja. A Muszala a Rilai-hegységben áll, és minden magashegyi SEO-t ural Bulgáriában. Az útvonal tiszta hegyi levegőről, tavakról és panorámákról ismert. Hegyikonként Muszala kötelező természetes tartalom.",
      ro: "Cel mai înalt vârf al Bulgariei și o țintă centrală pentru turismul alpin. Musala se află în Munții Rila și domină orice SEO despre altitudine în Bulgaria. Traseul este cunoscut pentru aer curat, lacuri și panorame. Ca simbol montan, Musala este esențial pentru conținutul de natură.",
      en: "The highest peak in Bulgaria and a central target for alpine travel. Musala sits in the Rila Mountains and dominates high-altitude Bulgaria SEO. The route is known for clean mountain air, lakes, and panoramas. As a mountain icon, Musala is essential for nature content."
    },
    facts: {
      de: ["Höchster Berg Bulgariens", "Rila-Gebirge", "Alpine Route", "Panoramen", "Wandern"],
      hu: ["Bulgária legmagasabb csúcsa", "Rilai-hegység", "Alpesi útvonal", "Panoráma", "Túrázás"],
      ro: ["Cel mai înalt vârf", "Munții Rila", "Traseu alpin", "Panorame", "Drumeții"],
      en: ["Highest peak", "Rila Mountains", "Alpine route", "Panoramas", "Hiking"]
    },
    image: "/geo-images/bulgaria/nat-musala.webp"
  },
  {
    id: "nat-vihren",
    type: "mountain",
    parent: "bg-country",
    coords: [23.3965, 41.7695],
    name: {
      de: "Vihren",
      hu: "Vihren",
      ro: "Vihren",
      en: "Vihren"
    },
    description: {
      de: "Der bekannteste Gipfel des Pirin und ein starkes Ziel für Bergsteiger und Wanderer. Vihren steht für schroffe Kalksteinlandschaft und alpine Touren. Der Berg ist ein Kernbegriff für Naturreisen in Südwestbulgarien. Für Berg-SEO in Bulgarien ist Vihren besonders stark.",
      hu: "A Pirin legismertebb csúcsa és erős célpont hegymászóknak és túrázóknak. Vihren a meredek mészkővidéket és az alpesi túrákat jelenti. A hegy kulcsszó a délnyugat-bolgár természetjárásban. A bolgár hegyi SEO-ban Vihren kiemelkedő.",
      ro: "Cel mai cunoscut vârf din Pirin și o țintă importantă pentru alpiniști și drumeți. Vihren înseamnă relief calcaros abrupt și trasee alpine. Muntele este un termen cheie pentru turismul de natură din sud-vestul Bulgariei. Pentru SEO montan în Bulgaria, Vihren este foarte puternic.",
      en: "The best-known peak of Pirin and a major target for climbers and hikers. Vihren stands for rugged limestone terrain and alpine routes. The mountain is a core term for nature travel in southwestern Bulgaria. For mountain SEO in Bulgaria, Vihren is especially strong."
    },
    facts: {
      de: ["Pirin", "Kalkstein", "Bergsteigen", "Alpine Route", "Südwestbulgarien"],
      hu: ["Pirin", "Mészkő", "Hegymászás", "Alpesi út", "Délnyugat-Bulgária"],
      ro: ["Pirin", "Calcar", "Alpinism", "Traseu alpin", "Sud-vestul Bulgariei"],
      en: ["Pirin", "Limestone", "Climbing", "Alpine route", "Southwestern Bulgaria"]
    },
    image: "/geo-images/bulgaria/nat-vihren.webp"
  },
  {
    id: "nat-botev-peak",
    type: "mountain",
    parent: "bg-country",
    coords: [24.9140, 42.7030],
    name: {
      de: "Botev-Gipfel",
      hu: "Botev-csúcs",
      ro: "Vârful Botev",
      en: "Botev Peak"
    },
    description: {
      de: "Der höchste Gipfel des Balkangebirges und ein markantes Naturziel im Zentrum Bulgariens. Botev Peak ist eng mit Wandern, Hochgebirge und Panoramablicken verbunden. Die Lage im Nationalpark macht ihn für Naturreisen wichtig. Für Bergtourismus in Bulgarien ist Botev ein starkes Keyword.",
      hu: "A Balkán-hegység legmagasabb csúcsa és markáns természeti célpont Közép-Bulgáriában. A Botev-csúcs szorosan kapcsolódik a túrázáshoz, a magashegyi élményekhez és a panorámákhoz. A nemzeti parkbeli fekvése fontos természetes úti céllá teszi. A bolgár hegyi turizmusban Botev erős kulcsszó.",
      ro: "Cel mai înalt vârf din Munții Balcani și o destinație naturală importantă în centrul Bulgariei. Botev este strâns legat de drumeții, experiențe de mare altitudine și panorame. Poziția în parc național îl face important pentru turismul de natură. Pentru turism montan în Bulgaria, Botev este un cuvânt cheie puternic.",
      en: "The highest peak of the Balkan Mountains and a major natural destination in central Bulgaria. Botev Peak is closely tied to hiking, high-mountain experiences, and panoramic views. Its national-park setting makes it important for nature travel. For mountain tourism in Bulgaria, Botev is a strong keyword."
    },
    facts: {
      de: ["Balkangebirge", "Höchster Gipfel", "Wandern", "Panorama", "Nationalpark"],
      hu: ["Balkán-hegység", "Legmagasabb csúcs", "Túrázás", "Panoráma", "Nemzeti park"],
      ro: ["Munții Balcani", "Cel mai înalt vârf", "Drumeții", "Panoramă", "Parc național"],
      en: ["Balkan Mountains", "Highest peak", "Hiking", "Panorama", "National park"]
    },
    image: "/geo-images/bulgaria/nat-botev-peak.webp"
  },
  {
    id: "nat-rhodopes",
    type: "mountain",
    parent: "bg-country",
    coords: [24.6000, 41.8000],
    name: {
      de: "Rhodopen",
      hu: "Rodope-hegység",
      ro: "Munții Rodopi",
      en: "Rhodopes"
    },
    description: {
      de: "Das große südliche Bergland Bulgariens mit weichen Linien, Wäldern und Dorfkultur. Die Rhodopen sind stark mit Natur, Folklore und Langstreckenreisen verbunden. Viele Besucher suchen hier Aussichtspunkte, Schluchten und traditionelle Ortschaften. Für Bulgarien-NaturSEO ist der Name sehr breit einsetzbar.",
      hu: "Bulgária nagy déli hegyvidéke, lágy vonalakkal, erdőkkel és falusi kultúrával. A Rodope-hegység erősen kapcsolódik a természethez, a folklórhoz és a hosszabb utazásokhoz. Sok látogató kilátópontokat, szurdokokat és hagyományos falvakat keres itt. A bolgár természet SEO-ban nagyon széles körben használható.",
      ro: "Marea zonă montană din sudul Bulgariei, cu linii domoale, păduri și cultură rurală. Rodopii sunt strâns legați de natură, folclor și călătorii mai lungi. Mulți vizitatori caută puncte de belvedere, defileuri și sate tradiționale. Pentru SEO despre natura Bulgariei, numele este foarte versatil.",
      en: "The large southern mountain region of Bulgaria, with soft contours, forests, and village culture. The Rhodopes are closely tied to nature, folklore, and longer road trips. Many visitors search for viewpoints, gorges, and traditional settlements here. For Bulgaria nature SEO, the name is broadly useful."
    },
    facts: {
      de: ["Südbulgarien", "Wälder", "Folklore", "Dörfer", "Schluchten"],
      hu: ["Dél-Bulgária", "Erdők", "Folklór", "Falvak", "Szurdokok"],
      ro: ["Sudul Bulgariei", "Păduri", "Folclor", "Sate", "Defilee"],
      en: ["Southern Bulgaria", "Forests", "Folklore", "Villages", "Gorges"]
    },
    image: "/geo-images/bulgaria/nat-rhodopes.webp"
  },
  {
    id: "nat-srebarna-lake",
    type: "lake",
    parent: "bg-country",
    coords: [27.0330, 44.1055],
    name: {
      de: "Sreburna-See",
      hu: "Srebarna-tó",
      ro: "Lacul Srebarna",
      en: "Srebarna Lake"
    },
    description: {
      de: "Ein bedeutender Süßwassersee im Nordosten Bulgariens mit internationalem Schutzstatus. Sreburna ist bekannt für Vogelbeobachtung, Feuchtgebiete und ruhige Natur. Der See passt perfekt zu Öko- und Naturtourismus in Bulgarien. Als Seeziel ist er stark für nachhaltige Reise-SEO.",
      hu: "Fontos édesvízi tó Bulgária északkeleti részén, nemzetközi védelem alatt. Srebarna a madármegfigyelésről, a vizes élőhelyekről és a csendes természetről ismert. A tó tökéletes az öko- és természetjáró turizmushoz Bulgáriában. Tóként erős a fenntartható utazási SEO-ban.",
      ro: "Un lac important de apă dulce în nord-estul Bulgariei, cu statut internațional de protecție. Srebarna este cunoscut pentru birdwatching, zone umede și natură liniștită. Lacul se potrivește perfect turismului ecologic și de natură din Bulgaria. Ca destinație lacustră, este puternic pentru SEO sustenabil.",
      en: "An important freshwater lake in northeastern Bulgaria with international protection status. Srebarna is known for birdwatching, wetlands, and quiet nature. The lake fits perfectly into eco and nature tourism in Bulgaria. As a lake destination, it is strong for sustainable travel SEO."
    },
    facts: {
      de: ["Nordostbulgarien", "Vogelbeobachtung", "Feuchtgebiete", "Schutzstatus", "Ökotourismus"],
      hu: ["Északkelet-Bulgária", "Madármegfigyelés", "Vizes élőhely", "Védelem", "Ökoturizmus"],
      ro: ["Nord-estul Bulgariei", "Birdwatching", "Zone umede", "Statut protejat", "Ecoturism"],
      en: ["Northeastern Bulgaria", "Birdwatching", "Wetlands", "Protected status", "Ecotourism"]
    },
    image: "/geo-images/bulgaria/nat-srebarna-lake.webp"
  },
  {
    id: "nat-atanasovsko-lake",
    type: "lake",
    parent: "bg-country",
    coords: [27.4800, 42.5400],
    name: {
      de: "Atanasowo-See",
      hu: "Atanaszovo-tó",
      ro: "Lacul Atanasovsko",
      en: "Atanasovsko Lake"
    },
    description: {
      de: "Ein salziger Küstensee nördlich von Burgas mit Salzbecken und Vogelreichtum. Atanasovo ist für Naturfotografie, Biodiversität und Küstenökologie bekannt. Die Lage nahe der Stadt macht den See leicht erreichbar. Für Black-Sea-Nature-SEO ist er besonders wertvoll.",
      hu: "Sós parti tó Burgasz északi részén, sólepárlókkal és gazdag madárvilággal. Atanaszovo a természetfotózásról, a biodiverzitásról és a parti ökológiáról ismert. A városhoz közeli fekvés könnyen elérhetővé teszi. Fekete-tengeri természet SEO-ban különösen értékes.",
      ro: "Un lac sărat de coastă la nord de Burgas, cu bazine de sare și bogăție avifaunistică. Atanasovsko este cunoscut pentru fotografie de natură, biodiversitate și ecologie litorală. Poziția aproape de oraș îl face ușor accesibil. Pentru SEO de natură la Marea Neagră, este foarte valoros.",
      en: "A saline coastal lake north of Burgas with salt pans and rich birdlife. Atanasovsko is known for nature photography, biodiversity, and coastal ecology. Its near-city location makes it easy to access. For Black Sea nature SEO, it is especially valuable."
    },
    facts: {
      de: ["Burgas-Nähe", "Salzsee", "Vogelwelt", "Küstenökologie", "Fotografie"],
      hu: ["Burgasz közelében", "Sós tó", "Madárvilág", "Parti ökológia", "Fotózás"],
      ro: ["Aproape de Burgas", "Lac sărat", "Păsări", "Ecologie litorală", "Fotografie"],
      en: ["Near Burgas", "Salt lake", "Birdlife", "Coastal ecology", "Photography"]
    },
    image: "/geo-images/bulgaria/nat-atanasovsko-lake.webp"
  },
  {
    id: "nat-iskar-river",
    type: "river",
    parent: "bg-country",
    coords: [23.3920, 42.9500],
    name: {
      de: "Iskar",
      hu: "Iszkar folyó",
      ro: "Râul Iskar",
      en: "Iskar River"
    },
    description: {
      de: "Der längste Fluss, der vollständig durch Bulgarien fließt, und ein wichtiger Naturkorridor. Iskar ist mit Schluchten, Stauseen und Talräumen verbunden. Er prägt Städte, Dörfer und Verkehrsachsen im Westen und Zentrum des Landes. Für Fluss-SEO in Bulgarien ist Iskar sehr stark.",
      hu: "A leghosszabb, teljes egészében Bulgárián átfolyó folyó és fontos természeti folyosó. Az Iszkar szurdokokkal, tározókkal és völgytérségekkel kapcsolódik össze. Meghatározza Nyugat- és Közép-Bulgária városait, falvait és közlekedési tengelyeit. A bolgár folyó SEO-ban nagyon erős.",
      ro: "Cel mai lung râu care curge integral prin Bulgaria și un important coridor natural. Iskarul este legat de defilee, lacuri de acumulare și văi. Influențează orașele, satele și axele de transport din vestul și centrul țării. Pentru SEO despre râurile Bulgariei, Iskar este foarte puternic.",
      en: "The longest river flowing entirely through Bulgaria and an important natural corridor. Iskar is linked to gorges, reservoirs, and valley landscapes. It shapes cities, villages, and transport routes in the west and center of the country. For Bulgaria river SEO, Iskar is very strong."
    },
    facts: {
      de: ["Längster Binnenfluss", "Täler", "Stauseen", "Westbulgarien", "Naturkorridor"],
      hu: ["Leghosszabb belső folyó", "Völgyek", "Tározók", "Nyugat-Bulgária", "Természeti folyosó"],
      ro: ["Cel mai lung râu intern", "Văi", "Lacuri de acumulare", "Vestul Bulgariei", "Coridor natural"],
      en: ["Longest inland river", "Valleys", "Reservoirs", "Western Bulgaria", "Natural corridor"]
    },
    image: "/geo-images/bulgaria/nat-iskar-river.webp"
  },
  {
    id: "nat-st-anastasia-island",
    type: "island",
    parent: "bg-country",
    coords: [27.9620, 42.4540],
    name: {
      de: "Sankt-Anastasia-Insel",
      hu: "Szent Anasztázia-sziget",
      ro: "Insula Sfânta Anastasia",
      en: "St. Anastasia Island"
    },
    description: {
      de: "Die bekannteste bulgarische Insel im Schwarzen Meer und ein beliebtes Ausflugsziel vor Burgas. Die Insel verbindet Klostergeschichte, Küstenlandschaft und Bootstourismus. Besucher kommen für Ruhe, Meerblick und eine besondere Atmosphäre. Als Insel-Keyword ist sie sehr attraktiv für Bulgarien-Reisen.",
      hu: "Bulgária legismertebb fekete-tengeri szigete és kedvelt kirándulóhely Burgasz előtt. A sziget a kolostortörténetet, a parti tájat és a hajós turizmust köti össze. A látogatók a nyugalom, a tengerkép és a különleges hangulat miatt jönnek. Sziget kulcsszóként nagyon vonzó a bolgár utazásokban.",
      ro: "Cea mai cunoscută insulă bulgară din Marea Neagră și o destinație populară de excursie lângă Burgas. Insula combină istoria monahală, peisajul litoral și turismul cu barca. Vizitatorii vin pentru liniște, vedere la mare și o atmosferă aparte. Ca termen SEO pentru insule, este foarte atractivă.",
      en: "The best-known Bulgarian island in the Black Sea and a popular excursion spot near Burgas. The island combines monastery history, coastal scenery, and boat tourism. Visitors come for calm, sea views, and a unique atmosphere. As an island keyword, it is very attractive for Bulgaria travel."
    },
    facts: {
      de: ["Schwarzes Meer", "Burgas", "Bootsausflug", "Klostergeschichte", "Inselziel"],
      hu: ["Fekete-tenger", "Burgasz", "Hajós kirándulás", "Kolostortörténet", "Szigetcélpont"],
      ro: ["Marea Neagră", "Burgas", "Excursie cu barca", "Istorie monahală", "Destinație insulară"],
      en: ["Black Sea", "Burgas", "Boat trip", "Monastery history", "Island destination"]
    },
    image: "/geo-images/bulgaria/nat-st-anastasia-island.webp"
  }
];

bulgariaAllPoi.push(...bulgariaCities, ...bulgariaCulture, ...bulgariaNature);
