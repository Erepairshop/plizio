import json

faqs = {
    "ba-travnik": {
        "de": [
            {"q": "Welche historische Bedeutung hat Travnik?", "a": "Es war die Hauptstadt der osmanischen Wesire in Bosnien für über 150 Jahre."},
            {"q": "Welche Festung kann man in Travnik besuchen?", "a": "Die mittelalterliche Festung von Travnik, eine der besterhaltenen im Land."},
            {"q": "Was ist 'Plava Voda'?", "a": "Ein berühmter Quellort in Travnik, bekannt für sein kristallklares blaues Wasser."},
            {"q": "Welcher Literaturnobelpreisträger wurde in Travnik geboren?", "a": "Ivo Andrić, der Autor von 'Die Brücke über die Drina'."},
            {"q": "Für welche Spezialität ist Travnik bekannt?", "a": "Für den Travnik-Käse (Vlašić-Käse), ein bekannter Schafskäse."}
        ],
        "hu": [
            {"q": "Milyen történelmi jelentősége van Travniknak?", "a": "Több mint 150 évig az oszmán vezírek székhelye volt Boszniában."},
            {"q": "Melyik erőd látogatható Travnikban?", "a": "A középkori Travnik vára, amely az ország egyik legjobb állapotban fennmaradt erődje."},
            {"q": "Mi az a 'Plava Voda'?", "a": "Egy híres forrásvidék Travnikban, amely kristálytiszta kék vizéről ismert."},
            {"q": "Melyik Nobel-díjas író született Travnikban?", "a": "Ivo Andrić, a 'Híd a Drinán' szerzője."},
            {"q": "Milyen gasztronómiai különlegességéről ismert Travnik?", "a": "A travniki sajtról (Vlašić-sajt), amely egy híres juhsajt."}
        ],
        "ro": [
            {"q": "Ce importanță istorică are Travnik?", "a": "A fost capitala vizirilor otomani în Bosnia timp de peste 150 de ani."},
            {"q": "Ce fortăreață poate fi vizitată în Travnik?", "a": "Cetatea medievală Travnik, una dintre cele mai bine conservate din țară."},
            {"q": "Ce este 'Plava Voda'?", "a": "Un loc faimos cu izvoare în Travnik, cunoscut pentru apa sa albastră cristalină."},
            {"q": "Ce laureat al premiului Nobel s-a născut la Travnik?", "a": "Ivo Andrić, autorul romanului 'E un pod pe Drina'."},
            {"q": "Pentru ce specialitate culinară este cunoscut Travnik?", "a": "Pentru brânza de Travnik (brânza Vlašić), o brânză de oaie renumită."}
        ],
        "en": [
            {"q": "What historical significance does Travnik have?", "a": "It was the capital of the Ottoman viziers in Bosnia for over 150 years."},
            {"q": "Which fortress can be visited in Travnik?", "a": "The medieval Travnik Fortress, one of the best-preserved in the country."},
            {"q": "What is 'Plava Voda'?", "a": "A famous spring site in Travnik, known for its crystal-clear blue water."},
            {"q": "Which Nobel Prize winner was born in Travnik?", "a": "Ivo Andrić, the author of 'The Bridge on the Drina'."},
            {"q": "What specialty is Travnik known for?", "a": "For Travnik cheese (Vlašić cheese), a famous sheep's milk cheese."}
        ]
    },
    "ba-bascarsija": {
        "de": [
            {"q": "Was ist die Baščaršija?", "a": "Der alte Basar und das historische und kulturelle Zentrum von Sarajevo."},
            {"q": "In welchem Jahrhundert wurde die Baščaršija gegründet?", "a": "Sie wurde im 15. Jahrhundert gegründet."},
            {"q": "Was ist der Sebilj?", "a": "Ein hölzerner Brunnen im pseudo-osmanischen Stil auf dem Hauptplatz der Baščaršija."},
            {"q": "Welche religiösen Gebäude findet man hier?", "a": "Die Gazi-Husrev-Beg-Moschee, die Alte Orthodoxe Kirche und die Herz-Jesu-Kathedrale liegen in der Nähe."},
            {"q": "Was kann man auf der Baščaršija kaufen?", "a": "Traditionelles Handwerk, Kupferwaren, Teppiche und lokale Spezialitäten wie Ćevapi."}
        ],
        "hu": [
            {"q": "Mi az a Baščaršija?", "a": "Szarajevó régi bazárja, valamint történelmi és kulturális központja."},
            {"q": "Melyik században alapították a Baščaršiját?", "a": "A 15. században alapították."},
            {"q": "Mi az a Sebilj?", "a": "Egy fából készült, pszeudo-oszmán stílusú kút a Baščaršija főterén."},
            {"q": "Milyen vallási épületek találhatók itt?", "a": "A közelben található a Gazi Huszrev bég mecset, a Régi Ortodox templom és a Jézus Szíve székesegyház."},
            {"q": "Mit lehet vásárolni a Baščaršiján?", "a": "Hagyományos kézműves termékeket, rézedényeket, szőnyegeket és helyi ételeket, például ćevapit."}
        ],
        "ro": [
            {"q": "Ce este Baščaršija?", "a": "Vechiul bazar și centrul istoric și cultural al orașului Sarajevo."},
            {"q": "În ce secol a fost fondat Baščaršija?", "a": "A fost fondat în secolul al XV-lea."},
            {"q": "Ce este Sebilj?", "a": "O fântână din lemn în stil pseudo-otoman aflată în piața centrală din Baščaršija."},
            {"q": "Ce clădiri religioase se găsesc aici?", "a": "Moscheea Gazi Husrev-beg, Vechea Biserică Ortodoxă și Catedrala Inima lui Isus sunt situate în apropiere."},
            {"q": "Ce se poate cumpăra în Baščaršija?", "a": "Produse de artizanat tradițional, obiecte din cupru, covoare și specialități locale precum mici (ćevapi)."}
        ],
        "en": [
            {"q": "What is Baščaršija?", "a": "The old bazaar and the historical and cultural center of Sarajevo."},
            {"q": "In which century was Baščaršija founded?", "a": "It was founded in the 15th century."},
            {"q": "What is the Sebilj?", "a": "A wooden fountain in pseudo-Ottoman style on the main square of Baščaršija."},
            {"q": "What religious buildings can be found here?", "a": "The Gazi Husrev-beg Mosque, the Old Orthodox Church, and the Sacred Heart Cathedral are nearby."},
            {"q": "What can you buy at Baščaršija?", "a": "Traditional crafts, copperware, carpets, and local specialties like ćevapi."}
        ]
    },
    "ba-srebrenik": {
        "de": [
            {"q": "Warum ist die Festung Srebrenik so bedeutend?", "a": "Es ist eine der am besten erhaltenen mittelalterlichen Festungen in Bosnien."},
            {"q": "Wann wurde die Festung erstmals erwähnt?", "a": "Sie wurde erstmals im Jahr 1333 urkundlich erwähnt."},
            {"q": "Welcher bosnische Herrscher ist mit Srebrenik verbunden?", "a": "Ban Stjepan II. Kotromanić unterzeichnete hier einen wichtigen Vertrag mit Dubrovnik."},
            {"q": "Auf welcher Art von Gelände wurde die Festung erbaut?", "a": "Auf einem steilen Felsen, was sie fast uneinnehmbar machte."},
            {"q": "Wie erreicht man den Eingang der Festung?", "a": "Über eine moderne Brücke, die eine tiefe Schlucht überquert."}
        ],
        "hu": [
            {"q": "Miért olyan jelentős Srebrenik vára?", "a": "Ez Bosznia egyik legjobb állapotban fennmaradt középkori erődje."},
            {"q": "Mikor említették először az erődöt?", "a": "Először 1333-ban említik írásos emlékek."},
            {"q": "Melyik bosnyák uralkodó kötődik Srebrenikhez?", "a": "II. Kotromanić István bán itt írt alá egy fontos szerződést Dubrovnikkal."},
            {"q": "Milyen terepre épült az erőd?", "a": "Egy meredek sziklára, ami szinte bevehetetlenné tette."},
            {"q": "Hogyan lehet bejutni a várba?", "a": "Egy modern hídon keresztül, amely egy mély szakadék felett ível át."}
        ],
        "ro": [
            {"q": "De ce este atât de importantă cetatea Srebrenik?", "a": "Este una dintre cele mai bine conservate cetăți medievale din Bosnia."},
            {"q": "Când a fost menționată prima dată cetatea?", "a": "A fost menționată documentar pentru prima dată în anul 1333."},
            {"q": "Ce conducător bosniac este legat de Srebrenik?", "a": "Banul Stjepan al II-lea Kotromanić a semnat aici un tratat important cu Dubrovnik."},
            {"q": "Pe ce fel de teren a fost construită cetatea?", "a": "Pe o stâncă abruptă, ceea ce o făcea aproape de necucerit."},
            {"q": "Cum se ajunge la intrarea în cetate?", "a": "Printr-un pod modern care traversează o prăpastie adâncă."}
        ],
        "en": [
            {"q": "Why is Srebrenik Fortress so significant?", "a": "It is one of the best-preserved medieval fortresses in Bosnia."},
            {"q": "When was the fortress first mentioned?", "a": "It was first mentioned in a document in 1333."},
            {"q": "Which Bosnian ruler is connected to Srebrenik?", "a": "Ban Stjepan II Kotromanić signed an important treaty with Dubrovnik here."},
            {"q": "On what kind of terrain was the fortress built?", "a": "On a steep rock, making it almost impregnable."},
            {"q": "How do you reach the entrance of the fortress?", "a": "Via a modern bridge that crosses a deep ravine."}
        ]
    },
    "ba-blagaj": {
        "de": [
            {"q": "Was ist die Tekija in Blagaj?", "a": "Ein historisches Derwisch-Kloster aus dem 16. Jahrhundert."},
            {"q": "Wo befindet sich die Tekija genau?", "a": "Direkt neben der Quelle des Flusses Buna, unter einer hohen Felswand."},
            {"q": "Wie groß ist die Quelle der Buna?", "a": "Es ist eine der stärksten Karstquellen in Europa."},
            {"q": "In welchem Baustil wurde das Kloster errichtet?", "a": "In einer Kombination aus osmanischer Architektur und mediterranem Einfluss."},
            {"q": "Kann man das Kloster besichtigen?", "a": "Ja, es ist für Besucher geöffnet und ein beliebtes Touristenziel."}
        ],
        "hu": [
            {"q": "Mi az a Blagaj Tekija?", "a": "Egy 16. századi történelmi dervis kolostor."},
            {"q": "Hol található pontosan a Tekija?", "a": "Közvetlenül a Buna folyó forrása mellett, egy magas sziklafal tövében."},
            {"q": "Mekkora a Buna forrása?", "a": "Európa egyik legerősebb karsztforrása."},
            {"q": "Milyen stílusban épült a kolostor?", "a": "Az oszmán építészet és a mediterrán hatások kombinációjában."},
            {"q": "Látogatható-e a kolostor?", "a": "Igen, nyitva áll a látogatók előtt, és népszerű turisztikai célpont."}
        ],
        "ro": [
            {"q": "Ce este Tekija din Blagaj?", "a": "O mănăstire istorică de derviși din secolul al XVI-lea."},
            {"q": "Unde se află exact mănăstirea Tekija?", "a": "Chiar lângă izvorul râului Buna, sub un perete stâncos înalt."},
            {"q": "Cât de mare este izvorul râului Buna?", "a": "Este unul dintre cele mai puternice izvoare carstice din Europa."},
            {"q": "În ce stil arhitectural a fost construită mănăstirea?", "a": "Într-o combinație de arhitectură otomană și influențe mediteraneene."},
            {"q": "Poate fi vizitată mănăstirea?", "a": "Da, este deschisă vizitatorilor și este o destinație turistică populară."}
        ],
        "en": [
            {"q": "What is the Tekija in Blagaj?", "a": "A historical Dervish monastery from the 16th century."},
            {"q": "Where is the Tekija located exactly?", "a": "Right next to the source of the Buna river, under a high cliff."},
            {"q": "How powerful is the Buna source?", "a": "It is one of the strongest karst springs in Europe."},
            {"q": "In what style was the monastery built?", "a": "In a combination of Ottoman architecture and Mediterranean influence."},
            {"q": "Can you visit the monastery?", "a": "Yes, it is open to visitors and a popular tourist destination."}
        ]
    },
    "ba-pocitelj": {
        "de": [
            {"q": "Was ist das Besondere an Počitelj?", "a": "Es ist ein historisches, befestigtes Dorf, das als Freilichtmuseum gilt."},
            {"q": "Aus welcher Zeit stammen die meisten Gebäude in Počitelj?", "a": "Überwiegend aus der osmanischen Zeit (16. bis 18. Jahrhundert)."},
            {"q": "Was ist das markanteste Bauwerk in Počitelj?", "a": "Die Šišman-Ibrahim-Pascha-Moschee und der Uhrturm (Sahat-kula)."},
            {"q": "An welchem Fluss liegt das Dorf?", "a": "Es liegt am Ufer der Neretva."},
            {"q": "Ist Počitelj ein UNESCO-Weltkulturerbe?", "a": "Es steht auf der vorläufigen Liste der UNESCO."}
        ],
        "hu": [
            {"q": "Mi a különleges Počiteljben?", "a": "Ez egy történelmi erődített falu, amely szabadtéri múzeumnak számít."},
            {"q": "Melyik korból származik Počitelj legtöbb épülete?", "a": "Főként az oszmán korból (16–18. század)."},
            {"q": "Mi Počitelj legjelentősebb építménye?", "a": "A Šišman Ibrahim-pasa mecset és az óratorony (Sahat-kula)."},
            {"q": "Melyik folyó partján fekszik a falu?", "a": "A Neretva partján fekszik."},
            {"q": "Počitelj az UNESCO világörökség része?", "a": "Szerepel az UNESCO javaslati listáján."}
        ],
        "ro": [
            {"q": "Ce este special la Počitelj?", "a": "Este un sat istoric fortificat, considerat un muzeu în aer liber."},
            {"q": "Din ce perioadă datează majoritatea clădirilor din Počitelj?", "a": "În principal din perioada otomană (secolele XVI-XVIII)."},
            {"q": "Care este cea mai proeminentă clădire din Počitelj?", "a": "Moscheea Šišman Ibrahim-Paša și turnul cu ceas (Sahat-kula)."},
            {"q": "Pe ce râu este situat satul?", "a": "Este situat pe malul râului Neretva."},
            {"q": "Este Počitelj în patrimoniul mondial UNESCO?", "a": "Se află pe lista tentativă a UNESCO."}
        ],
        "en": [
            {"q": "What is special about Počitelj?", "a": "It is a historic fortified village considered an open-air museum."},
            {"q": "From what period do most buildings in Počitelj date?", "a": "Mainly from the Ottoman period (16th to 18th centuries)."},
            {"q": "What is the most prominent building in Počitelj?", "a": "The Šišman Ibrahim Pasha Mosque and the clock tower (Sahat-kula)."},
            {"q": "On which river is the village located?", "a": "It is located on the banks of the Neretva."},
            {"q": "Is Počitelj a UNESCO World Heritage site?", "a": "It is on the UNESCO tentative list."}
        ]
    },
    "ba-kravica": {
        "de": [
            {"q": "Wie hoch sind die Kravica-Wasserfälle?", "a": "Sie sind etwa 25 Meter hoch."},
            {"q": "Welcher Fluss bildet diese Wasserfälle?", "a": "Der Fluss Trebižat."},
            {"q": "Kann man in der Nähe der Wasserfälle schwimmen?", "a": "Ja, das Schwimmen ist im See unter den Wasserfällen erlaubt und sehr beliebt."},
            {"q": "Wann ist die beste Zeit für einen Besuch?", "a": "Im Frühling, wenn der Wasserstand am höchsten ist, oder im Sommer zum Baden."},
            {"q": "Gibt es dort gastronomische Einrichtungen?", "a": "Ja, es gibt kleine Cafés und Restaurants direkt am Wasserfall."}
        ],
        "hu": [
            {"q": "Milyen magasak a Kravica-vízesések?", "a": "Körülbelül 25 méter magasak."},
            {"q": "Melyik folyó hozza létre ezeket a vízeséseket?", "a": "A Trebižat folyó."},
            {"q": "Szabad-e úszni a vízesések közelében?", "a": "Igen, a vízesések alatti tóban megengedett és nagyon népszerű az úszás."},
            {"q": "Mikor a legjobb ellátogatni ide?", "a": "Tavasszal, amikor a legmagasabb a vízállás, vagy nyáron a fürdőzés miatt."},
            {"q": "Vannak ott vendéglátóhelyek?", "a": "Igen, közvetlenül a vízesésnél találhatók kis kávézók és éttermek."}
        ],
        "ro": [
            {"q": "Cât de înalte sunt cascadele Kravica?", "a": "Au o înălțime de aproximativ 25 de metri."},
            {"q": "Ce râu formează aceste cascade?", "a": "Râul Trebižat."},
            {"q": "Se poate înota în apropierea cascadelor?", "a": "Da, înotul în lacul de sub cascade este permis și foarte popular."},
            {"q": "Când este cel mai bun moment pentru o vizită?", "a": "Primăvara, când nivelul apei este cel mai ridicat, sau vara pentru scăldat."},
            {"q": "Există facilități gastronomice acolo?", "a": "Da, există cafenele și restaurante mici chiar lângă cascadă."}
        ],
        "en": [
            {"q": "How high are the Kravica waterfalls?", "a": "They are about 25 meters high."},
            {"q": "Which river forms these waterfalls?", "a": "The Trebižat River."},
            {"q": "Can you swim near the waterfalls?", "a": "Yes, swimming in the lake below the waterfalls is allowed and very popular."},
            {"q": "When is the best time to visit?", "a": "In spring when the water level is highest, or in summer for swimming."},
            {"q": "Are there any dining facilities there?", "a": "Yes, there are small cafes and restaurants right by the waterfall."}
        ]
    },
    "ba-una": {
        "de": [
            {"q": "Wofür ist der Nationalpark Una bekannt?", "a": "Für seine unberührte Natur, kristallklares Wasser und spektakuläre Wasserfälle."},
            {"q": "Welches ist der berühmteste Wasserfall im Nationalpark?", "a": "Der Štrbački buk ist der höchste und bekannteste Wasserfall."},
            {"q": "Welche Aktivitäten werden im Park angeboten?", "a": "Rafting, Angeln, Wandern und Radfahren."},
            {"q": "Gibt es kulturelle Sehenswürdigkeiten im Park?", "a": "Ja, zum Beispiel die alte Festung Ostrovica und Klöster wie Rmanj."},
            {"q": "Wo liegt der Nationalpark Una?", "a": "Im Nordwesten Bosniens, an der Grenze zu Kroatien."}
        ],
        "hu": [
            {"q": "Miről ismert az Una Nemzeti Park?", "a": "Érintetlen természetéről, kristálytiszta vizéről és látványos vízeséseiről."},
            {"q": "Melyik a leghíresebb vízesés a nemzeti parkban?", "a": "A Štrbački buk a legmagasabb és legismertebb vízesés."},
            {"q": "Milyen tevékenységeket kínálnak a parkban?", "a": "Raftingot, horgászatot, túrázást és kerékpározást."},
            {"q": "Vannak-e kulturális látnivalók a parkban?", "a": "Igen, például Ostrovica ókori vára és olyan kolostorok, mint Rmanj."},
            {"q": "Hol található az Una Nemzeti Park?", "a": "Bosznia északnyugati részén, a horvát határ mentén."}
        ],
        "ro": [
            {"q": "Pentru ce este cunoscut Parcul Național Una?", "a": "Pentru natura sa virgină, apa cristalină și cascadele spectaculoase."},
            {"q": "Care este cea mai faimoasă cascadă din parcul național?", "a": "Štrbački buk este cea mai înaltă și cunoscută cascadă."},
            {"q": "Ce activități sunt oferite în parc?", "a": "Rafting, pescuit, drumeții și ciclism."},
            {"q": "Există obiective culturale în parc?", "a": "Da, de exemplu vechea cetate Ostrovica și mănăstiri precum Rmanj."},
            {"q": "Unde se află Parcul Național Una?", "a": "În nord-vestul Bosniei, la granița cu Croația."}
        ],
        "en": [
            {"q": "What is the Una National Park known for?", "a": "For its untouched nature, crystal-clear water, and spectacular waterfalls."},
            {"q": "Which is the most famous waterfall in the national park?", "a": "Štrbački buk is the highest and most famous waterfall."},
            {"q": "What activities are offered in the park?", "a": "Rafting, fishing, hiking, and cycling."},
            {"q": "Are there cultural sights in the park?", "a": "Yes, for example, the ancient fortress Ostrovica and monasteries like Rmanj."},
            {"q": "Where is the Una National Park located?", "a": "In northwestern Bosnia, on the border with Croatia."}
        ]
    },
    "ba-sutjeska": {
        "de": [
            {"q": "Welche Bedeutung hat der Nationalpark Sutjeska?", "a": "Es ist der älteste Nationalpark in Bosnien und Herzegowina."},
            {"q": "Was ist Perućica?", "a": "Einer der letzten Urwälder Europas, der sich im Nationalpark befindet."},
            {"q": "Welcher ist der höchste Berg des Landes?", "a": "Der Maglić (2386 m), der Teil des Sutjeska-Nationalparks ist."},
            {"q": "Wofür ist das Tal von Tjentište bekannt?", "a": "Für das monumentale Denkmal zur Erinnerung an die Schlacht an der Sutjeska im Zweiten Weltkrieg."},
            {"q": "Gibt es Seen im Park?", "a": "Ja, es gibt mehrere Gletscherseen, die 'Bergaugen' (Gorske oči) genannt werden."}
        ],
        "hu": [
            {"q": "Milyen jelentősége van a Sutjeska Nemzeti Parknak?", "a": "Ez Bosznia-Hercegovina legrégebbi nemzeti parkja."},
            {"q": "Mi az a Perućica?", "a": "Európa egyik utolsó őserdője, amely a nemzeti parkban található."},
            {"q": "Melyik az ország legmagasabb hegye?", "a": "A Maglić (2386 m), amely a Sutjeska Nemzeti Park része."},
            {"q": "Miről ismert Tjentište völgye?", "a": "A második világháborús Sutjeska-i csata emlékére állított monumentális emlékműről."},
            {"q": "Vannak-e tavak a parkban?", "a": "Igen, több gleccsertó is található itt, amelyeket 'hegyi szemeknek' (Gorske oči) neveznek."}
        ],
        "ro": [
            {"q": "Ce importanță are Parcul Național Sutjeska?", "a": "Este cel mai vechi parc național din Bosnia și Herțegovina."},
            {"q": "Ce este Perućica?", "a": "Una dintre ultimele păduri virgine din Europa, situată în parcul național."},
            {"q": "Care este cel mai înalt munte din țară?", "a": "Maglić (2386 m), care face parte din Parcul Național Sutjeska."},
            {"q": "Pentru ce este cunoscută valea Tjentište?", "a": "Pentru monumentul grandios care comemorează Bătălia de la Sutjeska din cel de-al Doilea Război Mondial."},
            {"q": "Există lacuri în parc?", "a": "Da, există mai multe lacuri glaciare numite 'ochi de munte' (Gorske oči)."}
        ],
        "en": [
            {"q": "What is the significance of the Sutjeska National Park?", "a": "It is the oldest national park in Bosnia and Herzegovina."},
            {"q": "What is Perućica?", "a": "One of the last primeval forests in Europe, located within the national park."},
            {"q": "Which is the highest mountain in the country?", "a": "Maglić (2386 m), which is part of the Sutjeska National Park."},
            {"q": "What is the Tjentište valley known for?", "a": "For the monumental memorial commemorating the Battle of the Sutjeska in World War II."},
            {"q": "Are there lakes in the park?", "a": "Yes, there are several glacial lakes called 'mountain eyes' (Gorske oči)."}
        ]
    },
    "ba-pliva": {
        "de": [
            {"q": "Wo liegen die Pliva-Seen?", "a": "In der Nähe der Stadt Jajce."},
            {"q": "Wofür sind die Pliva-Seen besonders bekannt?", "a": "Für die kleinen hölzernen Wassermühlen (Mlinčići), die zwischen den Seen stehen."},
            {"q": "Welche Aktivitäten kann man an den Seen unternehmen?", "a": "Angeln, Bootfahren, Kajakfahren und Wandern."},
            {"q": "Wie viele Seen gibt es?", "a": "Es gibt den Großen und den Kleinen Pliva-See."},
            {"q": "Was ist das Besondere an der Wasserqualität?", "a": "Das Wasser ist sehr sauber und reich an Fischen."}
        ],
        "hu": [
            {"q": "Hol találhatók a Pliva-tavak?", "a": "Jajca városa közelében."},
            {"q": "Miről különösen ismertek a Pliva-tavak?", "a": "A tavak között álló apró fa vízimalmokról (Mlinčići)."},
            {"q": "Milyen tevékenységeket lehet végezni a tavaknál?", "a": "Horgászatot, csónakázást, kajakozást és túrázást."},
            {"q": "Hány tó van?", "a": "Két tó: a Nagy- és a Kis-Pliva-tó."},
            {"q": "Mi a különleges a vízminőségben?", "a": "A víz nagyon tiszta és halakban gazdag."}
        ],
        "ro": [
            {"q": "Unde se află lacurile Pliva?", "a": "În apropierea orașului Jajce."},
            {"q": "Pentru ce sunt cunoscute în mod special lacurile Pliva?", "a": "Pentru micile mori de apă din lemn (Mlinčići) situate între lacuri."},
            {"q": "Ce activități pot fi desfășurate la lacuri?", "a": "Pescuit, plimbări cu barca, caiac și drumeții."},
            {"q": "Câte lacuri sunt?", "a": "Există Lacul Pliva Mare și Lacul Pliva Mic."},
            {"q": "Ce este special la calitatea apei?", "a": "Apa este foarte curată și bogată în pește."}
        ],
        "en": [
            {"q": "Where are the Pliva Lakes located?", "a": "Near the town of Jajce."},
            {"q": "What are the Pliva Lakes especially famous for?", "a": "For the small wooden watermills (Mlinčići) situated between the lakes."},
            {"q": "What activities can you do at the lakes?", "a": "Fishing, boating, kayaking, and hiking."},
            {"q": "How many lakes are there?", "a": "There are the Great and Small Pliva Lakes."},
            {"q": "What is special about the water quality?", "a": "The water is very clean and rich in fish."}
        ]
    },
    "ba-jahorina": {
        "de": [
            {"q": "Wofür ist die Jahorina bekannt?", "a": "Als eines der besten Skigebiete Bosniens und ehemaliger Austragungsort der Olympischen Winterspiele 1984."},
            {"q": "Wie hoch ist der höchste Gipfel der Jahorina?", "a": "Der Gipfel Ogorjelica liegt auf 1916 m."},
            {"q": "Welche olympischen Wettbewerbe fanden hier statt?", "a": "Die alpinen Skiwettbewerbe der Frauen."},
            {"q": "Wie weit ist die Jahorina von Sarajevo entfernt?", "a": "Sie liegt etwa 30 km südöstlich von Sarajevo."},
            {"q": "Was kann man im Sommer auf der Jahorina machen?", "a": "Wandern, Mountainbiken und die frische Bergluft genießen."}
        ],
        "hu": [
            {"q": "Miről ismert a Jahorina?", "a": "Bosznia egyik legjobb síközpontjaként és az 1984-es téli olimpia egykori helyszíneként."},
            {"q": "Milyen magas a Jahorina legmagasabb csúcsa?", "a": "Az Ogorjelica-csúcs 1916 méteren található."},
            {"q": "Milyen olimpiai versenyszámokat rendeztek itt?", "a": "A női alpesi síversenyeket."},
            {"q": "Milyen messze van a Jahorina Szarajevótól?", "a": "Körülbelül 30 km-re délkeletre fekszik Szarajevótól."},
            {"q": "Mit lehet csinálni nyáron a Jahorinán?", "a": "Túrázni, hegyi kerékpározni és élvezni a friss hegyi levegőt."}
        ],
        "ro": [
            {"q": "Pentru ce este cunoscut muntele Jahorina?", "a": "Ca una dintre cele mai bune stațiuni de schi din Bosnia și fostă gazdă a Jocurilor Olimpice de iarnă din 1984."},
            {"q": "Cât de înalt este cel mai înalt vârf de pe Jahorina?", "a": "Vârful Ogorjelica se află la 1916 m."},
            {"q": "Ce competiții olimpice au avut loc aici?", "a": "Competițiile de schi alpin pentru femei."},
            {"q": "La ce distanță se află Jahorina de Sarajevo?", "a": "Se află la aproximativ 30 km sud-est de Sarajevo."},
            {"q": "Ce se poate face vara pe Jahorina?", "a": "Drumeții, ciclism montan și relaxare în aerul curat de munte."}
        ],
        "en": [
            {"q": "What is Jahorina known for?", "a": "As one of Bosnia's best ski resorts and a former venue for the 1984 Winter Olympics."},
            {"q": "How high is the highest peak of Jahorina?", "a": "The Ogorjelica peak is at 1916 m."},
            {"q": "Which Olympic competitions took place here?", "a": "The women's alpine skiing competitions."},
            {"q": "How far is Jahorina from Sarajevo?", "a": "It is located about 30 km southeast of Sarajevo."},
            {"q": "What can you do on Jahorina in the summer?", "a": "Hiking, mountain biking, and enjoying the fresh mountain air."}
        ]
    }
}

with open("faqs_batch2.json", "w", encoding="utf-8") as f:
    json.dump(faqs, f, ensure_ascii=False, indent=2)
