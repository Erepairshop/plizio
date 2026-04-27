import os
import json

def get_cyprus_faqs():
    return {
        "country-cyprus": {
            "de": [
                {"q": "Wann ist die beste Reisezeit für Zypern?", "a": "Die Monate April bis Juni und September bis Oktober bieten angenehme Temperaturen für Besichtigungen. Der Sommer ist ideal für reinen Badeurlaub."},
                {"q": "Welche Währung wird auf Zypern verwendet?", "a": "In der Republik Zypern ist der Euro das offizielle Zahlungsmittel. Im Nordteil der Insel wird die Türkische Lira verwendet."},
                {"q": "Wie groß ist die Insel Zypern?", "a": "Zypern ist mit einer Fläche von etwa 9.251 Quadratkilometern die drittgrößte Insel im Mittelmeer. Sie liegt südlich der Türkei und westlich von Syrien."},
                {"q": "Wofür ist die zypriotische Küche bekannt?", "a": "Berühmt sind vor allem der Halloumi-Käse und die Meze, eine Zusammenstellung vieler kleiner Vorspeisen. Auch der süße Wein Commandaria hat eine lange Tradition."}
            ],
            "hu": [
                {"q": "Mikor a legérdemesebb Ciprusra utazni?", "a": "Az április-júniusi és a szeptember-októberi időszak a legalkalmasabb a városnézésre. A nyár a tengerparti pihenés fő szezonja."},
                {"q": "Mi a hivatalos fizetőeszköz Cipruson?", "a": "A Ciprusi Köztársaságban az euró a hivatalos pénznem. A sziget északi részén török lírát használnak."},
                {"q": "Mekkora Ciprus szigete?", "a": "Ciprus körülbelül 9251 négyzetkilométeres területével a Földközi-tenger harmadik legnagyobb szigete. Törökországtól délre, Szíriától nyugatra fekszik."},
                {"q": "Miről nevezetes a ciprusi konyha?", "a": "A legismertebb a halloumi sajt és a meze, amely sok apró fogásból álló ételválogatás. A Commandaria nevű édes bor szintén nagy múltra tekint vissza."}
            ],
            "ro": [
                {"q": "Când este cel mai bun moment pentru a vizita Ciprul?", "a": "Lunile aprilie-iunie și septembrie-octombrie oferă temperaturi plăcute pentru vizitarea obiectivelor turistice. Vara este ideală pentru plajă."},
                {"q": "Ce monedă se folosește în Cipru?", "a": "În Republica Cipru, moneda oficială este euro. În partea de nord a insulei se utilizează lira turcească."},
                {"q": "Cât de mare este insula Cipru?", "a": "Cipru este a treia insulă ca mărime din Marea Mediterană, cu o suprafață de aproximativ 9.251 km². Se află la sud de Turcia și la vest de Siria."},
                {"q": "Pentru ce este cunoscută bucătăria cipriotă?", "a": "Celebre sunt în special brânza Halloumi și meze, o selecție de numeroase aperitive mici. Vinul dulce Commandaria are, de asemenea, o tradiție îndelungată."}
            ],
            "en": [
                {"q": "When is the best time to visit Cyprus?", "a": "April to June and September to October offer pleasant temperatures for sightseeing. Summer is ideal for beach holidays."},
                {"q": "What currency is used in Cyprus?", "a": "In the Republic of Cyprus, the official currency is the Euro. The Turkish Lira is used in the northern part of the island."},
                {"q": "How large is the island of Cyprus?", "a": "Cyprus is the third largest island in the Mediterranean, with an area of about 9,251 square kilometers. It is located south of Turkey and west of Syria."},
                {"q": "What is Cypriot cuisine known for?", "a": "It is most famous for Halloumi cheese and meze, a selection of many small appetizers. The sweet wine Commandaria also has a long tradition."}
            ]
        },
        "cy-nicosia": {
            "de": [
                {"q": "Was ist das Besondere an Nikosia?", "a": "Nikosia ist die einzige geteilte Hauptstadt der Welt. Eine Pufferzone der UN trennt den griechisch-zypriotischen vom türkisch-zypriotischen Teil."},
                {"q": "Welche Sehenswürdigkeiten gibt es in der Altstadt?", "a": "Die venezianischen Mauern umschließen die sternförmige Altstadt. Besonders sehenswert sind das Befreiungsdenkmal und das Zypern-Museum."},
                {"q": "Kann man die Grenze in Nikosia überqueren?", "a": "Ja, es gibt Fußgängerübergänge, wie zum Beispiel in der Ledrastraße. Besucher können so beide Teile der Stadt erkunden."},
                {"q": "Was ist die Büyük Han?", "a": "Die Büyük Han ist eine ehemalige osmanische Karawanserei im Nordteil der Stadt. Sie gilt als eines der schönsten Gebäude der Insel und beherbergt heute Kunsthandwerksläden."}
            ],
            "hu": [
                {"q": "Mi teszi különlegessé Nicosiát?", "a": "Nicosia a világ egyetlen kettéosztott fővárosa. Egy ENSZ-pufferzóna választja el a görög ciprusi és a török ciprusi részt."},
                {"q": "Milyen látnivalók vannak az óvárosban?", "a": "A velencei falak veszik körül a csillag alakú óvárost. Különösen érdemes megnézni a Szabadság-emlékművet és a Ciprusi Múzeumot."},
                {"q": "Át lehet kelni a határon Nicosiában?", "a": "Igen, vannak gyalogos átkelőhelyek, például a Ledra utcában. A látogatók így a város mindkét részét felfedezhetik."},
                {"q": "Mi az a Büyük Han?", "a": "A Büyük Han egy egykori oszmán karavánszeráj a város északi részén. A sziget egyik legszebb épületének tartják, ma kézműves boltoknak ad otthont."}
            ],
            "ro": [
                {"q": "Ce face ca Nicosia să fie specială?", "a": "Nicosia este singura capitală divizată din lume. O zonă tampon a ONU separă partea cipriotă greacă de cea cipriotă turcă."},
                {"q": "Ce atracții se află în orașul vechi?", "a": "Zidurile venețiene înconjoară orașul vechi în formă de stea. Merită vizitate Monumentul Libertății și Muzeul Ciprului."},
                {"q": "Se poate trece frontiera în Nicosia?", "a": "Da, există puncte de trecere pietonale, cum ar fi cel de pe strada Ledra. Vizitatorii pot explora astfel ambele părți ale orașului."},
                {"q": "Ce este Büyük Han?", "a": "Büyük Han este un fost caravanserai otoman în partea de nord a orașului. Este considerată una dintre cele mai frumoase clădiri de pe insulă și găzduiește astăzi magazine de artizanat."}
            ],
            "en": [
                {"q": "What makes Nicosia unique?", "a": "Nicosia is the only divided capital city in the world. A UN buffer zone separates the Greek Cypriot part from the Turkish Cypriot part."},
                {"q": "What landmarks are there in the old town?", "a": "Venetian walls surround the star-shaped old town. The Liberty Monument and the Cyprus Museum are particularly worth seeing."},
                {"q": "Can you cross the border in Nicosia?", "a": "Yes, there are pedestrian crossings, such as the one on Ledra Street. Visitors can thus explore both parts of the city."},
                {"q": "What is the Büyük Han?", "a": "Büyük Han is a former Ottoman caravanserai in the northern part of the city. It is considered one of the island's most beautiful buildings and now houses craft shops."}
            ]
        },
        "cy-limassol": {
            "de": [
                {"q": "Wofür ist Limassol bekannt?", "a": "Limassol ist berühmt für seinen großen Hafen, die lebhafte Strandpromenade und das jährliche Weinfestival. Es ist das wirtschaftliche Zentrum der Insel."},
                {"q": "Welche historischen Stätten liegen in der Nähe?", "a": "Die antike Stadt Amathous und die Burg Kolossi befinden sich in unmittelbarer Nähe von Limassol."},
                {"q": "Was bietet die Marina von Limassol?", "a": "Die moderne Marina bietet luxuriöse Liegeplätze, Restaurants und exklusive Einkaufsmöglichkeiten direkt am Wasser."},
                {"q": "Gibt es Museen in Limassol?", "a": "Ja, in der Burg von Limassol ist das Mittelalterliche Museum von Zypern untergebracht. Dort soll Richard Löwenherz geheiratet haben."}
            ],
            "hu": [
                {"q": "Miről ismert Limassol?", "a": "Limassol híres nagy kikötőjéről, nyüzsgő tengerparti sétányáról és az évente megrendezett borfesztiválról. Ez a sziget gazdasági központja."},
                {"q": "Milyen történelmi helyszínek vannak a közelben?", "a": "Amathousz ókori városa és a Kolossi vár Limassol közvetlen közelében található."},
                {"q": "Mit kínál a Limassol Marina?", "a": "A modern jachtkikötő luxus kikötőhelyeket, éttermeket és exkluzív bevásárlási lehetőségeket kínál közvetlenül a vízparton."},
                {"q": "Vannak múzeumok Limassolban?", "a": "Igen, a limassoli várban található a Ciprusi Középkori Múzeum. A legenda szerint itt kötött házasságot Oroszlánszívű Richárd."}
            ],
            "ro": [
                {"q": "Pentru ce este cunoscut Limassol?", "a": "Limassol este faimos pentru portul său mare, faleza vibrantă și festivalul anual al vinului. Este centrul economic al insulei."},
                {"q": "Ce situri istorice sunt în apropiere?", "a": "Orașul antic Amathous și castelul Kolossi se află în imediata vecinătate a Limassolului."},
                {"q": "Ce oferă Marina din Limassol?", "a": "Marina modernă oferă dane de lux, restaurante și posibilități de cumpărături exclusive chiar pe malul apei."},
                {"q": "Există muzee în Limassol?", "a": "Da, în castelul din Limassol se află Muzeul Medieval al Ciprului. Se spune că acolo s-ar fi căsătorit Richard Inimă de Leu."}
            ],
            "en": [
                {"q": "What is Limassol known for?", "a": "Limassol is famous for its large port, vibrant seaside promenade, and the annual wine festival. It is the economic hub of the island."},
                {"q": "What historical sites are nearby?", "a": "The ancient city of Amathous and Kolossi Castle are located in close proximity to Limassol."},
                {"q": "What does the Limassol Marina offer?", "a": "The modern marina offers luxury berths, restaurants, and exclusive shopping opportunities right on the waterfront."},
                {"q": "Are there museums in Limassol?", "a": "Yes, Limassol Castle houses the Cyprus Medieval Museum. Legend has it that Richard the Lionheart was married there."}
            ]
        },
        "cy-larnaca": {
            "de": [
                {"q": "Was sind die Highlights von Larnaca?", "a": "Die palmengesäumte Finikoudes-Promenade und die Lazarus-Kirche sind die bekanntesten Wahrzeichen der Stadt."},
                {"q": "Wofür ist der Salzsee von Larnaca bekannt?", "a": "Im Winter ist der Salzsee ein wichtiger Rastplatz für Tausende von Flamingos. Am Ufer liegt die Hala Sultan Tekke Moschee."},
                {"q": "Kann man in Larnaca tauchen?", "a": "Ja, vor der Küste liegt das Wrack der Zenobia, das zu den weltweit besten Tauchplätzen gehört."},
                {"q": "Wie weit ist der Flughafen von der Stadt entfernt?", "a": "Der internationale Flughafen Larnaca liegt nur etwa 5 Kilometer südlich des Stadtzentrums."}
            ],
            "hu": [
                {"q": "Mik Lárnaka legfontosabb látnivalói?", "a": "A pálmákkal szegélyezett Finikoudes sétány és a Szent Lázár-templom a város legismertebb jelképei."},
                {"q": "Miről nevezetes a lárnakai Sós-tó?", "a": "Télen a Sós-tó flamingók ezreinek fontos pihenőhelye. Partján található a Hala Sultan Tekke mecset."},
                {"q": "Lehet-e búvárkodni Lárnakában?", "a": "Igen, a partok közelében fekszik a Zenobia roncsa, amely a világ legjobb merülőhelyei közé tartozik."},
                {"q": "Milyen messze van a repülőtér a várostól?", "a": "A lárnakai nemzetközi repülőtér mindössze körülbelül 5 kilométerre délre fekszik a városközponttól."}
            ],
            "ro": [
                {"q": "Care sunt principalele atracții din Larnaca?", "a": "Promenada Finikoudes, mărginită de palmieri, și biserica Sfântul Lazăr sunt cele mai cunoscute simboluri ale orașului."},
                {"q": "Pentru ce este cunoscut Lacul Sărat din Larnaca?", "a": "Iarna, lacul sărat este un loc important de odihnă pentru mii de flamingo. Pe malul său se află moscheea Hala Sultan Tekke."},
                {"q": "Se pot face scufundări în Larnaca?", "a": "Da, în largul coastei se află epava Zenobia, care este unul dintre cele mai bune locuri de scufundări din lume."},
                {"q": "Cât de departe este aeroportul de oraș?", "a": "Aeroportul Internațional Larnaca este situat la doar aproximativ 5 kilometri sud de centrul orașului."}
            ],
            "en": [
                {"q": "What are the highlights of Larnaca?", "a": "The palm-lined Finikoudes promenade and the Church of Saint Lazarus are the city's most famous landmarks."},
                {"q": "What is the Larnaca Salt Lake known for?", "a": "In winter, the salt lake is an important resting place for thousands of flamingos. The Hala Sultan Tekke mosque is located on its shore."},
                {"q": "Can you go diving in Larnaca?", "a": "Yes, off the coast lies the wreck of the Zenobia, which is ranked among the world's top diving sites."},
                {"q": "How far is the airport from the city?", "a": "Larnaca International Airport is located only about 5 kilometers south of the city center."}
            ]
        },
        "cy-paphos": {
            "de": [
                {"q": "Warum gehört Paphos zum UNESCO-Welterbe?", "a": "Die gesamte Stadt steht unter Schutz wegen ihrer außergewöhnlichen archäologischen Funde, wie den Mosaiken und den Königsgräbern."},
                {"q": "Was ist das bekannteste Mosaik in Paphos?", "a": "Die Mosaike im Haus des Dionysos gelten als einige der am besten erhaltenen und schönsten im gesamten Mittelmeerraum."},
                {"q": "Welche mythologische Bedeutung hat Paphos?", "a": "Paphos gilt als Geburtsort der Göttin Aphrodite, die der Legende nach bei Petra tou Romiou aus dem Meeresschaum stieg."},
                {"q": "Was kann man am Hafen von Paphos unternehmen?", "a": "Besucher können an der Hafenpromenade flanieren, die mittelalterliche Festung besichtigen oder Bootstouren starten."}
            ],
            "hu": [
                {"q": "Miért része Páfosz az UNESCO világörökségnek?", "a": "Az egész város védelem alatt áll rendkívüli régészeti leletei, például a mozaikok és a királysírok miatt."},
                {"q": "Melyik a legismertebb mozaik Páfoszban?", "a": "Dionüszosz házának mozaikjai az egész Földközi-tenger térségének legszebb és legjobb állapotban fennmaradt alkotásai közé tartoznak."},
                {"q": "Milyen mitológiai jelentősége van Páfosznak?", "a": "Páfosz Aphrodité istennő szülőhelyeként ismert, aki a legenda szerint Petra tou Romiounál emelkedett ki a tenger habjaiból."},
                {"q": "Mit lehet csinálni a páfoszi kikötőben?", "a": "A látogatók sétálhatnak a kikötői sétányon, megtekinthetik a középkori erődöt, vagy hajókirándulásra indulhatnak."}
            ],
            "ro": [
                {"q": "De ce face parte Paphos din patrimoniul mondial UNESCO?", "a": "Întregul oraș este protejat datorită descoperirilor sale arheologice excepționale, cum ar fi mozaicurile și mormintele regilor."},
                {"q": "Care este cel mai cunoscut mozaic din Paphos?", "a": "Mozaicurile din Casa lui Dionysos sunt considerate printre cele mai bine conservate și frumoase din întreaga regiune mediteraneană."},
                {"q": "Ce semnificație mitologică are Paphos?", "a": "Paphos este considerat locul de naștere al zeiței Afrodita, care conform legendei ar fi ieșit din spuma mării la Petra tou Romiou."},
                {"q": "Ce se poate face în portul din Paphos?", "a": "Vizitatorii se pot plimba pe faleză, pot vizita fortăreața medievală sau pot pleca în excursii cu barca."}
            ],
            "en": [
                {"q": "Why is Paphos a UNESCO World Heritage site?", "a": "The entire city is protected because of its exceptional archaeological finds, such as the mosaics and the Tombs of the Kings."},
                {"q": "What is the most famous mosaic in Paphos?", "a": "The mosaics in the House of Dionysos are considered some of the best-preserved and most beautiful in the entire Mediterranean."},
                {"q": "What mythological significance does Paphos have?", "a": "Paphos is considered the birthplace of the goddess Aphrodite, who according to legend rose from the sea foam at Petra tou Romiou."},
                {"q": "What can you do at Paphos harbor?", "a": "Visitors can stroll along the harbor promenade, visit the medieval fortress, or set off on boat tours."}
            ]
        },
        "cy-famagusta": {
            "de": [
                {"q": "Was ist die bekannteste Kirche in Famagusta?", "a": "Die Lala-Mustafa-Pascha-Moschee war ursprünglich die gotische St.-Nikolaus-Kathedrale und ähnelt der Kathedrale von Reims."},
                {"q": "Welche Befestigungsanlagen gibt es in Famagusta?", "a": "Die Stadt ist von gewaltigen venezianischen Mauern umgeben, die zu den am besten erhaltenen ihrer Art gehören."},
                {"q": "Was ist das Othello-Schloss?", "a": "Es ist eine Zitadelle an der Stadtmauer, in der William Shakespeare sein berühmtes Stück 'Othello' angesiedelt haben soll."},
                {"q": "Gibt es Strände in Famagusta?", "a": "Ja, die Region verfügt über feine Sandstrände, allerdings sind einige Bereiche nahe der Geisterstadt Varosha noch gesperrt."}
            ],
            "hu": [
                {"q": "Melyik a legismertebb templom Famagustában?", "a": "A Lala Musztafa pasa mecset eredetileg a gótikus Szent Miklós-székesegyház volt, és a reims-i katedrálisra emlékeztet."},
                {"q": "Milyen erődítmények találhatók Famagustában?", "a": "A várost hatalmas velencei falak veszik körül, amelyek a maguk nemében a legjobban megőrzöttek közé tartoznak."},
                {"q": "Mi az az Othello-vár?", "a": "Ez egy citadella a városfalnál, ahová William Shakespeare híres drámáját, az Othellót helyezte."},
                {"q": "Vannak-e strandok Famagustában?", "a": "Igen, a régió finom homokos strandokkal rendelkezik, bár a Varoszi szellemváros közeli részek még lezártak."}
            ],
            "ro": [
                {"q": "Care este cea mai cunoscută biserică din Famagusta?", "a": "Moscheea Lala Mustafa Pașa a fost inițial catedrala gotică Sfântul Nicolae și seamănă cu catedrala din Reims."},
                {"q": "Ce fortificații există în Famagusta?", "a": "Orașul este înconjurat de ziduri venețiene masive, care sunt printre cele mai bine conservate de acest tip."},
                {"q": "Ce este castelul Othello?", "a": "Este o citadelă la zidul orașului, unde se spune că William Shakespeare și-ar fi plasat faimoasa piesă 'Othello'."},
                {"q": "Există plaje în Famagusta?", "a": "Da, regiunea are plaje cu nisip fin, deși unele zone din apropierea orașului fantomă Varosha sunt încă închise."}
            ],
            "en": [
                {"q": "What is the most famous church in Famagusta?", "a": "The Lala Mustafa Pasha Mosque was originally the Gothic St. Nicholas Cathedral and resembles the Cathedral of Reims."},
                {"q": "What fortifications are there in Famagusta?", "a": "The city is surrounded by massive Venetian walls, which are among the best-preserved of their kind."},
                {"q": "What is Othello Castle?", "a": "It is a citadel on the city wall, where William Shakespeare is said to have set his famous play 'Othello'."},
                {"q": "Are there beaches in Famagusta?", "a": "Yes, the region features fine sandy beaches, although some areas near the ghost town of Varosha are still closed."}
            ]
        },
        "cy-kyrenia": {
            "de": [
                {"q": "Was macht den Hafen von Kyrenia so besonders?", "a": "Der Hafen gilt mit seiner hufeisenförmigen Form, den Fischerbooten und der angrenzenden Festung als einer der malerischsten im Mittelmeer."},
                {"q": "Was kann man in der Festung von Kyrenia sehen?", "a": "In der Festung befindet sich das Schiffswrack-Museum mit einem antiken Handelssegler aus dem 4. Jahrhundert v. Chr."},
                {"q": "Welche Ausflugsziele liegen im Gebirge über Kyrenia?", "a": "Die Burg St. Hilarion und die Abtei Bellapais bieten spektakuläre Ausblicke auf die Küste und das Meer."},
                {"q": "Kann man in der Nähe von Kyrenia baden?", "a": "Ja, es gibt mehrere Strände in der Umgebung, wie den Alagadi Turtle Beach, wo Meeresschildkröten ihre Eier ablegen."}
            ],
            "hu": [
                {"q": "Mitől olyan különleges Kerínia kikötője?", "a": "A kikötőt patkó alakja, a halászhajók és a szomszédos erőd miatt a Földközi-tenger egyik legfestőibb kikötőjének tartják."},
                {"q": "Mit lehet látni a keríniai erődben?", "a": "Az erődben található a Hajóroncs Múzeum, ahol egy Kr. e. 4. századból származó ókori kereskedőhajó látható."},
                {"q": "Milyen kirándulóhelyek vannak a Kerínia feletti hegységben?", "a": "Szent Hilarion vára és a Bellapais apátság látványos kilátást nyújt a partra és a tengerre."},
                {"q": "Lehet-e fürdeni Kerínia közelében?", "a": "Igen, a környéken több strand is található, például az Alagadi teknőspart, ahol tengeri teknősök rakják le tojásaikat."}
            ],
            "ro": [
                {"q": "Ce face portul Kyrenia atât de special?", "a": "Portul este considerat unul dintre cele mai pitorești din Mediterană, cu forma sa de potcoavă, barcă de pescuit și fortăreața adiacentă."},
                {"q": "Ce se poate vedea în fortăreața Kyrenia?", "a": "În fortăreață se află Muzeul Epavei, care expune o navă comercială antică din secolul al IV-lea î.Hr."},
                {"q": "Ce destinații de excursie sunt în munții de deasupra Kyreniei?", "a": "Castelul Sfântul Ilarion și abația Bellapais oferă vederi spectaculoase asupra coastei și a mării."},
                {"q": "Se poate înota în apropiere de Kyrenia?", "a": "Da, există mai multe plaje în zonă, cum ar fi Alagadi Turtle Beach, unde broaștele țestoase marine își depun ouăle."}
            ],
            "en": [
                {"q": "What makes Kyrenia harbor so special?", "a": "The harbor is considered one of the most picturesque in the Mediterranean with its horseshoe shape, fishing boats, and adjacent fortress."},
                {"q": "What can you see inside Kyrenia Castle?", "a": "The castle houses the Shipwreck Museum, which features an ancient merchant ship from the 4th century BC."},
                {"q": "What excursion sites are in the mountains above Kyrenia?", "a": "St. Hilarion Castle and Bellapais Abbey offer spectacular views of the coast and the sea."},
                {"q": "Can you go swimming near Kyrenia?", "a": "Yes, there are several beaches in the area, such as Alagadi Turtle Beach, where sea turtles lay their eggs."}
            ]
        },
        "cy-ayianapa": {
            "de": [
                {"q": "Ist Ayia Napa nur für Partys bekannt?", "a": "Nein, neben dem Nachtleben bietet Ayia Napa wunderschöne Sandstrände, ein mittelalterliches Kloster und den größten Themen-Wasserpark Europas."},
                {"q": "Welcher ist der berühmteste Strand in Ayia Napa?", "a": "Der Nissi Strand ist weltweit bekannt für seinen weißen Sand und das flache, kristallklare Wasser."},
                {"q": "Was kann man im Kloster von Ayia Napa sehen?", "a": "Das Kloster im Stadtzentrum ist eine friedliche Oase mit einem charmanten Innenhof und einer alten Kirche aus der venezianischen Zeit."},
                {"q": "Welche Natursehenswürdigkeit liegt in der Nähe?", "a": "Der Kap Greco Nationalpark mit seinen Meereshöhlen und Wanderwegen liegt nur eine kurze Autofahrt entfernt."}
            ],
            "hu": [
                {"q": "Ayia Napa csak a bulikról híres?", "a": "Nem, az éjszakai élet mellett Ayia Napa gyönyörű homokos strandokat, egy középkori kolostort és Európa legnagyobb tematikus víziparkját is kínálja."},
                {"q": "Melyik a leghíresebb strand Ayia Napában?", "a": "A Nissi Beach világszerte ismert fehér homokjáról és sekély, kristálytiszta vizéről."},
                {"q": "Mit lehet látni az Ayia Napa-i kolostorban?", "a": "A városközpontban található kolostor békés oázis, bájos belső udvarral és egy velencei korból származó régi templommal."},
                {"q": "Milyen természeti látnivaló van a közelben?", "a": "A Kap Greco Nemzeti Park tengeri barlangjaival és túraútvonalaival csak egy rövid autóútra fekszik."}
            ],
            "ro": [
                {"q": "Este Ayia Napa cunoscută doar pentru petreceri?", "a": "Nu, pe lângă viața de noapte, Ayia Napa oferă plaje superbe cu nisip, o mănăstire medievală și cel mai mare parc acvatic tematic din Europa."},
                {"q": "Care este cea mai faimoasă plajă din Ayia Napa?", "a": "Plaja Nissi este cunoscută în întreaga lume pentru nisipul său alb și apele sale puțin adânci și cristaline."},
                {"q": "Ce se poate vedea la mănăstirea din Ayia Napa?", "a": "Mănăstirea din centrul orașului este o oază de liniște, cu o curte interioară fermecătoare și o biserică veche din perioada venețiană."},
                {"q": "Ce atracție naturală se află în apropiere?", "a": "Parcul Național Capul Greco, cu peșterile sale marine și traseele de drumeție, se află la o scurtă distanță de mers cu mașina."}
            ],
            "en": [
                {"q": "Is Ayia Napa only known for its nightlife?", "a": "No, besides the nightlife, Ayia Napa offers beautiful sandy beaches, a medieval monastery, and the largest themed waterpark in Europe."},
                {"q": "What is the most famous beach in Ayia Napa?", "a": "Nissi Beach is world-famous for its white sand and shallow, crystal-clear water."},
                {"q": "What can you see at the Ayia Napa Monastery?", "a": "The monastery in the city center is a peaceful oasis with a charming courtyard and an old church from the Venetian period."},
                {"q": "What natural landmark is nearby?", "a": "Cape Greco National Park, with its sea caves and hiking trails, is just a short drive away."}
            ]
        },
        "cy-kourion": {
            "de": [
                {"q": "Was ist das Highlight von Kourion?", "a": "Das römische Theater ist das beeindruckendste Bauwerk. Es wurde restauriert und wird heute wieder für Freilichtaufführungen genutzt."},
                {"q": "Was kann man im Haus des Eustolios sehen?", "a": "Dieses ehemalige Privathaus aus dem 5. Jahrhundert beherbergt wunderschöne Mosaikböden und antike Badeanlagen."},
                {"q": "Wo liegt Kourion genau?", "a": "Die archäologische Stätte liegt auf einem steilen Hügel westlich von Limassol und bietet einen weiten Blick über das Meer."},
                {"q": "Gibt es in der Nähe von Kourion einen Strand?", "a": "Ja, direkt unterhalb der Ruinen liegt der Kourion Beach, der besonders bei Windsurfern beliebt ist."}
            ],
            "hu": [
                {"q": "Mi Kourion legfőbb látnivalója?", "a": "A római színház a leglenyűgözőbb építmény. Felújították, és ma ismét szabadtéri előadásokra használják."},
                {"q": "Mit lehet látni Eusztoliosz házában?", "a": "Ez az 5. századi egykori magánház gyönyörű mozaikpadlóknak és ókori fürdőberendezéseknek ad otthont."},
                {"q": "Hol fekszik pontosan Kourion?", "a": "A régészeti lelőhely egy meredek dombon található Limassoltól nyugatra, széles kilátást nyújtva a tengerre."},
                {"q": "Van-e strand Kourion közelében?", "a": "Igen, közvetlenül a romok alatt található a Kourion Beach, amely különösen a szörfösök körében népszerű."}
            ],
            "ro": [
                {"q": "Care este atracția principală din Kourion?", "a": "Teatrul roman este cea mai impresionantă structură. A fost restaurat și este folosit astăzi din nou pentru spectacole în aer liber."},
                {"q": "Ce se poate vedea în Casa lui Eustolios?", "a": "Această fostă casă privată din secolul al V-lea găzduiește pardoseli superbe cu mozaic și instalații de baie antice."},
                {"q": "Unde se află mai exact Kourion?", "a": "Situl arheologic este situat pe un deal abrupt la vest de Limassol, oferind o vedere panoramică asupra mării."},
                {"q": "Există o plajă în apropiere de Kourion?", "a": "Da, chiar sub ruine se află Plaja Kourion, care este deosebit de populară printre windsurferi."}
            ],
            "en": [
                {"q": "What is the highlight of Kourion?", "a": "The Roman theatre is the most impressive structure. It has been restored and is used today for open-air performances."},
                {"q": "What can you see at the House of Eustolios?", "a": "This former private house from the 5th century houses beautiful mosaic floors and ancient bathing facilities."},
                {"q": "Where exactly is Kourion located?", "a": "The archaeological site is situated on a steep hill west of Limassol, offering a wide view over the sea."},
                {"q": "Is there a beach near Kourion?", "a": "Yes, right below the ruins lies Kourion Beach, which is particularly popular with windsurfers."}
            ]
        },
        "cy-tombs-kings": {
            "de": [
                {"q": "Wurden in den Königsgräbern wirklich Könige bestattet?", "a": "Nein, trotz des Namens wurden hier keine Könige, sondern hochrangige Beamte und Adlige aus Paphos beigesetzt."},
                {"q": "Wie alt sind die Königsgräber?", "a": "Die Grabanlagen stammen aus der Zeit zwischen dem 4. Jahrhundert v. Chr. und dem 3. Jahrhundert n. Chr."},
                {"q": "Was ist das Besondere an der Architektur der Gräber?", "a": "Die Gräber sind in den massiven Fels gehauen und viele besitzen dorische Säulen und Atrien, die Wohnhäusern nachempfunden sind."},
                {"q": "Kann man die Gräber von innen besichtigen?", "a": "Ja, Besucher können in die unterirdischen Grabanlagen hinabsteigen und die Architektur aus nächster Nähe erkunden."}
            ],
            "hu": [
                {"q": "Valóban királyokat temettek el a Királysírokba?", "a": "Nem, a név ellenére nem királyokat, hanem páfoszi magas rangú tisztviselőket és nemeseket temettek ide."},
                {"q": "Milyen idősek a Királysírok?", "a": "A síregyüttes a Kr. e. 4. század és a Kr. u. 3. század közötti időszakból származik."},
                {"q": "Mi a különleges a sírok építészetében?", "a": "A sírokat a tömör sziklába vájták, és sokuk dór oszlopokkal és átriumokkal rendelkezik, a lakóházak mintájára."},
                {"q": "Meg lehet nézni a sírokat belülről is?", "a": "Igen, a látogatók lemehetnek a föld alatti síregyüttesekbe, és közelről felfedezhetik az építészetüket."}
            ],
            "ro": [
                {"q": "Au fost într-adevăr îngropați regi în Mormintele Regilor?", "a": "Nu, în ciuda numelui, aici nu au fost înmormântați regi, ci înalți funcționari și nobili din Paphos."},
                {"q": "Cât de vechi sunt Mormintele Regilor?", "a": "Complexele funerare datează din perioada cuprinsă între secolul al IV-lea î.Hr. și secolul al III-lea d.Hr."},
                {"q": "Ce este special la arhitectura mormintelor?", "a": "Mormintele sunt săpate în stâncă masivă și multe au coloane dorice și atrii, fiind modelate după casele de locuit."},
                {"q": "Se pot vizita mormintele în interior?", "a": "Da, vizitatorii pot coborî în complexele funerare subterane și pot explora arhitectura de aproape."}
            ],
            "en": [
                {"q": "Were kings actually buried in the Tombs of the Kings?", "a": "No, despite the name, no kings were buried here, but rather high-ranking officials and aristocrats from Paphos."},
                {"q": "How old are the Tombs of the Kings?", "a": "The tomb complexes date from between the 4th century BC and the 3rd century AD."},
                {"q": "What is unique about the architecture of the tombs?", "a": "The tombs are carved into the solid rock and many feature Doric columns and atria, modeled after residential houses."},
                {"q": "Can you visit the inside of the tombs?", "a": "Yes, visitors can descend into the underground tomb complexes and explore the architecture up close."}
            ]
        }
    }

def update_file(file_path, faqs):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Simple parser to find POI objects and insert faq field
    # We look for id: "..." and then find the end of that object
    
    updated_content = content
    
    # Sort IDs by length descending to avoid partial matches
    sorted_ids = sorted(faqs.keys(), key=len, reverse=True)
    
    for poi_id in sorted_ids:
        search_str = f'id: "{poi_id}"'
        start_idx = updated_content.find(search_str)
        if start_idx == -1:
            continue
            
        # Find the closing brace of this object
        # This is a bit tricky with nested objects, but POIs usually don't have deep nesting except for fields we know
        
        # Look for the next 'image:' or the end of the object '}'
        # POIs are usually separated by }, { or they are at the end of the file
        
        # Let's find the closing brace that matches the opening brace of this object
        obj_start = updated_content.rfind('{', 0, start_idx)
        
        # Find the end of the object. We assume objects are not deeply nested.
        # Most POIs end with } followed by , or ;
        
        # Search for where to insert. Rules: before image: or before closing }
        
        insert_pos = -1
        
        # Check if 'image:' exists in this object
        next_obj_start = updated_content.find('{', start_idx)
        if next_obj_start == -1:
            next_obj_start = len(updated_content)
            
        image_idx = updated_content.find('image:', start_idx, next_obj_start)
        
        if image_idx != -1:
            insert_pos = updated_content.rfind('\n', start_idx, image_idx) + 1
        else:
            # Insert at the end of the object
            insert_pos = updated_content.find('}', start_idx)
            insert_pos = updated_content.rfind('\n', start_idx, insert_pos) + 1

        if f'faq: ' in updated_content[start_idx:next_obj_start]:
            continue # Already has FAQ

        faq_data = faqs[poi_id]
        
        # Format FAQ string
        faq_str = "    faq: {\n"
        for lang in ["de", "hu", "ro", "en"]:
            faq_str += f"      {lang}: [\n"
            for qa in faq_data[lang]:
                q = qa['q'].replace('"', '\\"')
                a = qa['a'].replace('"', '\\"')
                faq_str += f'        {{ q: "{q}", a: "{a}" }},\n'
            faq_str += "      ],\n"
        faq_str += "    },\n"
        
        updated_content = updated_content[:insert_pos] + faq_str + updated_content[insert_pos:]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)

# Process Cyprus
cy_faqs = get_cyprus_faqs()
# Add more POIs for Cyprus to the script
# (I will add them in chunks to keep the script manageable)

# Actually I'll just write the whole script with ALL POIs for Cyprus now.
# Wait, I have 40 POIs. I'll do them in this script.
