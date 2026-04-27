import re
import os

file_path = "lib/visualLab/data/icelandPoi.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Dictionary of FAQs for Iceland POIs
# Each entry: id -> {en: [], de: [], hu: [], ro: []}
faq_data = {
    "country-iceland": {
        "en": [
            {"q": "When did Iceland become independent?", "a": "Iceland became a fully independent republic on June 17, 1944."},
            {"q": "What is the population of Iceland?", "a": "As of 2023, the population is approximately 375,000 people."},
            {"q": "What is the official currency?", "a": "The official currency is the Icelandic Króna (ISK)."},
            {"q": "What is the main religion?", "a": "The majority of the population belongs to the Evangelical Lutheran Church of Iceland."}
        ],
        "de": [
            {"q": "Wann wurde Island unabhängig?", "a": "Island wurde am 17. Juni 1944 eine völlig unabhängige Republik."},
            {"q": "Wie hoch ist die Einwohnerzahl von Island?", "a": "Seit 2023 beträgt die Einwohnerzahl etwa 375.000 Menschen."},
            {"q": "Was ist die offizielle Währung?", "a": "Die offizielle Währung ist die Isländische Krone (ISK)."},
            {"q": "Was ist die Hauptreligion?", "a": "Die Mehrheit der Bevölkerung gehört der Evangelisch-Lutherischen Kirche von Island an."}
        ],
        "hu": [
            {"q": "Mikor vált Izland függetlenné?", "a": "Izland 1944. június 17-én vált teljesen független köztársasággá."},
            {"q": "Mennyi Izland lakossága?", "a": "2023-as adatok szerint a lakosság körülbelül 375 000 fő."},
            {"q": "Mi a hivatalos pénznem?", "a": "A hivatalos pénznem az izlandi korona (ISK)."},
            {"q": "Mi Izland fő vallása?", "a": "A lakosság többsége az Izlandi Evangélikus-Lutheránus Egyházhoz tartozik."}
        ],
        "ro": [
            {"q": "Când a devenit Islanda independentă?", "a": "Islanda a devenit o republică complet independentă la 17 iunie 1944."},
            {"q": "Care este populația Islandei?", "a": "Începând cu 2023, populația este de aproximativ 375.000 de persoane."},
            {"q": "Care este moneda oficială?", "a": "Moneda oficială este coroana islandeză (ISK)."},
            {"q": "Care este religia principală?", "a": "Majoritatea populației aparține Bisericii Evanghelice Luterane din Islanda."}
        ]
    },
    "IS-001": {
        "en": [
            {"q": "What is the largest town in Austurland?", "a": "Egilsstaðir is the largest town and main service hub for the East Fjords."},
            {"q": "Is there a forest in this region?", "a": "Yes, Hallormsstaðaskógur, Iceland's largest national forest, is located here."},
            {"q": "What wildlife is unique to East Iceland?", "a": "It is the only region in Iceland where wild reindeer can be found."},
            {"q": "How many fjords are in the East?", "a": "There are approximately 18 fjords stretching from Borgarfjörður Eystri to Álftafjörður."}
        ],
        "de": [
            {"q": "Was ist die größte Stadt in Austurland?", "a": "Egilsstaðir ist die größte Stadt und das wichtigste Dienstleistungszentrum für die Ostfjorde."},
            {"q": "Gibt es in dieser Region einen Wald?", "a": "Ja, Hallormsstaðaskógur, Islands größter Nationalwald, befindet sich hier."},
            {"q": "Welche Tierwelt ist einzigartig in Ostisland?", "a": "Es ist die einzige Region in Island, in der wilde Rentiere vorkommen."},
            {"q": "Wie viele Fjorde gibt es im Osten?", "a": "Es gibt etwa 18 Fjorde, die sich von Borgarfjörður Eystri bis Álftafjörður erstrecken."}
        ],
        "hu": [
            {"q": "Mi Austurland legnagyobb városa?", "a": "Egilsstaðir a legnagyobb város és a Keleti-fjordok fő szolgáltató központja."},
            {"q": "Van erdő ebben a régióban?", "a": "Igen, itt található a Hallormsstaðaskógur, Izland legnagyobb nemzeti erdője."},
            {"q": "Milyen egyedi állatvilága van Kelet-Izlandnak?", "a": "Ez az egyetlen régió Izlandon, ahol vadon élő rénszarvasok találhatók."},
            {"q": "Hány fjord található keleten?", "a": "Körülbelül 18 fjord húzódik Borgarfjörður Eystritől Álftafjörðurig."}
        ],
        "ro": [
            {"q": "Care este cel mai mare oraș din Austurland?", "a": "Egilsstaðir este cel mai mare oraș și principalul centru de servicii pentru fiordurile de est."},
            {"q": "Există o pădure în această regiune?", "a": "Da, Hallormsstaðaskógur, cea mai mare pădure națională din Islanda, se află aici."},
            {"q": "Ce faună sălbatică este unică în estul Islandei?", "a": "Este singura regiune din Islanda unde pot fi găsiți reni sălbatici."},
            {"q": "Câte fiorduri sunt în est?", "a": "Există aproximativ 18 fiorduri care se întind de la Borgarfjörður Eystri până la Álftafjörður."}
        ]
    },
    "IS-002": {
        "en": [
            {"q": "Which major waterfalls are in South Iceland?", "a": "The region features famous waterfalls like Skógafoss and Seljalandsfoss."},
            {"q": "Are there active volcanoes in the south?", "a": "Yes, famous volcanoes such as Hekla and Katla are located in this region."},
            {"q": "What is the main industry in South Iceland?", "a": "Agriculture is prominent, particularly dairy farming and greenhouse cultivation."},
            {"q": "Can you see the Northern Lights here?", "a": "Yes, South Iceland is a popular area for aurora viewing due to low light pollution."}
        ],
        "de": [
            {"q": "Welche großen Wasserfälle gibt es in Südisland?", "a": "In der Region befinden sich berühmte Wasserfälle wie Skógafoss und Seljalandsfoss."},
            {"q": "Gibt es aktive Vulkane im Süden?", "a": "Ja, berühmte Vulkane wie Hekla und Katla befinden sich in dieser Region."},
            {"q": "Was ist der wichtigste Wirtschaftszweig in Südisland?", "a": "Die Landwirtschaft ist bedeutend, insbesondere die Milchwirtschaft und der Gewächshausanbau."},
            {"q": "Kann man hier Polarlichter sehen?", "a": "Ja, Südisland ist aufgrund der geringen Lichtverschmutzung ein beliebtes Gebiet für Polarlichtbeobachtungen."}
        ],
        "hu": [
            {"q": "Melyek a fő vízesések Dél-Izlandon?", "a": "A régióban olyan híres vízesések találhatók, mint a Skógafoss és a Seljalandsfoss."},
            {"q": "Vannak aktív vulkánok délen?", "a": "Igen, olyan híres vulkánok találhatók itt, mint a Hekla és a Katla."},
            {"q": "Mi Dél-Izland fő iparága?", "a": "A mezőgazdaság meghatározó, különösen a tejtermelés és az üvegházi termesztés."},
            {"q": "Látható itt az északi fény?", "a": "Igen, Dél-Izland népszerű terület az aurora megfigyelésére az alacsony fényszennyezés miatt."}
        ],
        "ro": [
            {"q": "Ce cascade majoare sunt în Islanda de Sud?", "a": "Regiunea include cascade faimoase precum Skógafoss și Seljalandsfoss."},
            {"q": "Există vulcani activi în sud?", "a": "Da, vulcani celebri precum Hekla și Katla sunt situați în această regiune."},
            {"q": "Care este principala industrie din Islanda de Sud?", "a": "Agricultura este proeminentă, în special producția de lactate și cultivarea în sere."},
            {"q": "Se pot vedea Aurorele Boreale aici?", "a": "Da, Islanda de Sud este o zonă populară pentru vizionarea aurorelor datorită poluării luminoase scăzute."}
        ]
    },
    "IS-003": {
        "en": [
            {"q": "Where is the Blue Lagoon located?", "a": "The Blue Lagoon is situated on the Reykjanes Peninsula in the Suðurnes region."},
            {"q": "Is Suðurnes a volcanic area?", "a": "Yes, the region is highly volcanic and contains several geothermal power plants."},
            {"q": "What is the main gateway to Iceland?", "a": "Keflavík International Airport, located in Suðurnes, is the country's primary gateway."},
            {"q": "Are there many lighthouses in the region?", "a": "Yes, Suðurnes has several iconic lighthouses, such as Reykjanesviti."}
        ],
        "de": [
            {"q": "Wo befindet sich die Blaue Lagune?", "a": "Die Blaue Lagune liegt auf der Halbinsel Reykjanes in der Region Suðurnes."},
            {"q": "Ist Suðurnes ein vulkanisches Gebiet?", "a": "Ja, die Region ist stark vulkanisch geprägt und beherbergt mehrere Geothermalkraftwerke."},
            {"q": "Was ist das Haupttor nach Island?", "a": "Der internationale Flughafen Keflavík in Suðurnes ist das wichtigste Tor des Landes."},
            {"q": "Gibt es in der Region viele Leuchttürme?", "a": "Ja, Suðurnes hat mehrere ikonische Leuchttürme, wie zum Beispiel Reykjanesviti."}
        ],
        "hu": [
            {"q": "Hol található a Kék Lagúna?", "a": "A Kék Lagúna a Reykjanes-félszigeten, Suðurnes régióban található."},
            {"q": "Suðurnes vulkáni terület?", "a": "Igen, a régió erősen vulkanikus, és több geotermikus erőműnek ad otthont."},
            {"q": "Mi Izland fő kapuja?", "a": "A Suðurnesben található Keflavík nemzetközi repülőtér az ország elsődleges kapuja."},
            {"q": "Sok világítótorony van a régióban?", "a": "Igen, Suðurnes több ikonikus világítótoronnyal rendelkezik, mint például a Reykjanesviti."}
        ],
        "ro": [
            {"q": "Unde se află Laguna Albastră?", "a": "Laguna Albastră este situată în Peninsula Reykjanes, în regiunea Suðurnes."},
            {"q": "Este Suðurnes o zonă vulcanică?", "a": "Da, regiunea este foarte vulcanică și conține mai multe centrale geotermale."},
            {"q": "Care este principala poartă de intrare în Islanda?", "a": "Aeroportul Internațional Keflavík, situat în Suðurnes, este principala poartă de intrare a țării."},
            {"q": "Există multe faruri în regiune?", "a": "Da, Suðurnes are mai multe faruri emblematice, cum ar fi Reykjanesviti."}
        ]
    },
    "IS-004": {
        "en": [
            {"q": "What is the population of the Reykjavík region?", "a": "Approximately 135,000 people live in the city of Reykjavík itself."},
            {"q": "Is Reykjavík a green city?", "a": "Yes, it is one of the world's cleanest and greenest cities, powered by renewable energy."},
            {"q": "Who was the first settler of Reykjavík?", "a": "Ingólfur Arnarson is traditionally considered the first permanent settler in 874 AD."},
            {"q": "What is the city's tallest building?", "a": "Hallgrímskirkja church is one of the tallest and most recognizable structures."}
        ],
        "de": [
            {"q": "Wie hoch ist die Einwohnerzahl der Region Reykjavík?", "a": "Etwa 135.000 Menschen leben in der Stadt Reykjavík selbst."},
            {"q": "Ist Reykjavík eine grüne Stadt?", "a": "Ja, sie ist eine der saubersten und grünsten Städte der Welt, die mit erneuerbarer Energie betrieben wird."},
            {"q": "Wer war der erste Siedler von Reykjavík?", "a": "Ingólfur Arnarson gilt traditionell als der erste dauerhafte Siedler im Jahr 874 n. Chr."},
            {"q": "Was ist das höchste Gebäude der Stadt?", "a": "Die Hallgrímskirkja-Kirche ist eines der höchsten und am leichtesten erkennbaren Bauwerke."}
        ],
        "hu": [
            {"q": "Mennyi Reykjavík régió lakossága?", "a": "Körülbelül 135 000 ember él magában Reykjavík városában."},
            {"q": "Reykjavík zöld város?", "a": "Igen, a világ egyik legtisztább és legzöldebb városa, amelyet megújuló energia táplál."},
            {"q": "Ki volt Reykjavík első telepese?", "a": "Hagyományosan Ingólfur Arnarsont tekintik az első állandó telepesnek i.sz. 874-ben."},
            {"q": "Mi a város legmagasabb épülete?", "a": "A Hallgrímskirkja templom az egyik legmagasabb és legfelismerhetőbb építmény."}
        ],
        "ro": [
            {"q": "Care este populația regiunii Reykjavík?", "a": "Aproximativ 135.000 de oameni trăiesc în orașul Reykjavík propriu-zis."},
            {"q": "Este Reykjavík un oraș verde?", "a": "Da, este unul dintre cele mai curate și verzi orașe din lume, alimentat cu energie regenerabilă."},
            {"q": "Cine a fost primul colonist din Reykjavík?", "a": "Ingólfur Arnarson este considerat tradițional primul colonist permanent în anul 874 d.Hr."},
            {"q": "Care este cea mai înaltă clădire a orașului?", "a": "Biserica Hallgrímskirkja este una dintre cele mai înalte și mai recognoscibile structuri."}
        ]
    },
    "IS-005": {
        "en": [
            {"q": "What municipalities are in Höfuðborgarsvæði?", "a": "It includes Reykjavík, Kópavogur, Hafnarfjörður, Garðabær, Mosfellsbær, and Seltjarnarnes."},
            {"q": "What percentage of Icelanders live here?", "a": "Over 60% of the total population of Iceland lives in the capital area."},
            {"q": "Is there a major university in this area?", "a": "Yes, the University of Iceland and Reykjavík University are located here."},
            {"q": "What is the climate like in the capital area?", "a": "It has a subpolar oceanic climate, with cool summers and relatively mild winters."}
        ],
        "de": [
            {"q": "Welche Gemeinden gehören zu Höfuðborgarsvæði?", "a": "Es umfasst Reykjavík, Kópavogur, Hafnarfjörður, Garðabær, Mosfellsbær und Seltjarnarnes."},
            {"q": "Wie viel Prozent der Isländer leben hier?", "a": "Über 60 % der Gesamtbevölkerung Islands leben im Hauptstadtgebiet."},
            {"q": "Gibt es in diesem Gebiet eine große Universität?", "a": "Ja, die Universität von Island und die Universität Reykjavík befinden sich hier."},
            {"q": "Wie ist das Klima im Hauptstadtgebiet?", "a": "Es herrscht ein subpolares Seeklima mit kühlen Sommern und relativ milden Wintern."}
        ],
        "hu": [
            {"q": "Mely települések tartoznak a Höfuðborgarsvæðihez?", "a": "Ide tartozik Reykjavík, Kópavogur, Hafnarfjörður, Garðabær, Mosfellsbær és Seltjarnarnes."},
            {"q": "Az izlandiak hány százaléka él itt?", "a": "Izland teljes lakosságának több mint 60%-a él a fővárosi területen."},
            {"q": "Van nagyobb egyetem ezen a területen?", "a": "Igen, az Izlandi Egyetem és a Reykjavíki Egyetem is itt található."},
            {"q": "Milyen az éghajlat a fővárosi területen?", "a": "Szubpoláris óceáni éghajlata van, hűvös nyarakkal és viszonylag enyhe telekkel."}
        ],
        "ro": [
            {"q": "Ce municipalități sunt în Höfuðborgarsvæði?", "a": "Include Reykjavík, Kópavogur, Hafnarfjörður, Garðabær, Mosfellsbær și Seltjarnarnes."},
            {"q": "Ce procent de islandezi trăiesc aici?", "a": "Peste 60% din populația totală a Islandei trăiește în zona capitalei."},
            {"q": "Există o universitate majoră în această zonă?", "a": "Da, Universitatea Islandei și Universitatea din Reykjavík sunt situate aici."},
            {"q": "Cum este clima în zona capitalei?", "a": "Are un climat oceanic subpolar, cu veri răcoroase și ierni relativ blânde."}
        ]
    },
    "IS-006": {
        "en": [
            {"q": "What is Snæfellsnes often called?", "a": "It is often called 'Iceland in Miniature' because of its diverse landscapes."},
            {"q": "Are there many historic sites in West Iceland?", "a": "Yes, it is the setting for many Icelandic Sagas, such as the Laxdæla Saga."},
            {"q": "What is the tallest mountain in West Iceland?", "a": "Snæfellsjökull is the most famous peak, standing at 1,446 meters."},
            {"q": "Are there waterfalls in this region?", "a": "Yes, Hraunfossar and Barnafoss are unique waterfalls flowing out of a lava field."}
        ],
        "de": [
            {"q": "Wie wird Snæfellsnes oft genannt?", "a": "Wegen seiner vielfältigen Landschaften wird es oft als 'Island im Miniaturformat' bezeichnet."},
            {"q": "Gibt es in Westisland viele historische Stätten?", "a": "Ja, es ist der Schauplatz vieler Isländersagas, wie zum Beispiel der Laxdæla-Saga."},
            {"q": "Was ist der höchste Berg in Westisland?", "a": "Der Snæfellsjökull ist mit 1.446 Metern der bekannteste Gipfel."},
            {"q": "Gibt es Wasserfälle in dieser Region?", "a": "Ja, Hraunfossar und Barnafoss sind einzigartige Wasserfälle, die aus einem Lavafeld fließen."}
        ],
        "hu": [
            {"q": "Hogyan nevezik gyakran Snæfellsnest?", "a": "Változatos tájai miatt gyakran hívják 'Miniatűr Izlandnak'."},
            {"q": "Sok történelmi helyszín van Nyugat-Izlandon?", "a": "Igen, számos izlandi szaga helyszíne, mint például a Laxdæla-szaga."},
            {"q": "Mi Nyugat-Izland legmagasabb hegye?", "a": "A Snæfellsjökull a leghíresebb csúcs, 1446 méter magas."},
            {"q": "Vannak vízesések ebben a régióban?", "a": "Igen, a Hraunfossar és a Barnafoss egyedi vízesések, amelyek egy lávamezőből törnek elő."}
        ],
        "ro": [
            {"q": "Cum este numită adesea Peninsula Snæfellsnes?", "a": "Este adesea numită „Islanda în miniatură” datorită peisajelor sale diverse."},
            {"q": "Există multe situri istorice în Islanda de Vest?", "a": "Da, este cadrul multor saga islandeze, cum ar fi Saga Laxdæla."},
            {"q": "Care este cel mai înalt munte din Islanda de Vest?", "a": "Snæfellsjökull este cel mai faimos vârf, având 1.446 de metri."},
            {"q": "Există cascade în această regiune?", "a": "Da, Hraunfossar și Barnafoss sunt cascade unice care curg dintr-un câmp de lavă."}
        ]
    },
    "IS-007": {
        "en": [
            {"q": "What is the most famous bird cliff in the Westfjords?", "a": "Látrabjarg is the most famous bird cliff, home to millions of puffins."},
            {"q": "Are there many fjords in this region?", "a": "Yes, the region consists of dozens of narrow fjords surrounded by high flat-topped mountains."},
            {"q": "What is the largest waterfall in the Westfjords?", "a": "Dynjandi is the largest and most spectacular waterfall in the region."},
            {"q": "Is the region accessible year-round?", "a": "Some areas are difficult to access in winter due to heavy snow and closed mountain passes."}
        ],
        "de": [
            {"q": "Welches ist der berühmteste Vogelfelsen in den Westfjorden?", "a": "Látrabjarg ist der bekannteste Vogelfelsen, auf dem Millionen von Papageitauchern leben."},
            {"q": "Gibt es in dieser Region viele Fjorde?", "a": "Ja, die Region besteht aus Dutzenden von schmalen Fjorden, die von hohen, flachen Bergen umgeben sind."},
            {"q": "Was ist der größte Wasserfall in den Westfjorden?", "a": "Dynjandi ist der größte und spektakulärste Wasserfall in der Region."},
            {"q": "Ist die Region das ganze Jahr über erreichbar?", "a": "Einige Gebiete sind im Winter aufgrund von starkem Schneefall und gesperrten Bergpässen schwer erreichbar."}
        ],
        "hu": [
            {"q": "Melyik a leghíresebb madárszikla a Nyugati-fjordokban?", "a": "Látrabjarg a leghíresebb madárszikla, lundák millióinak otthona."},
            {"q": "Sok fjord van ebben a régióban?", "a": "Igen, a régió tucatnyi keskeny fjordból áll, amelyeket magas, lapos tetejű hegyek vesznek körül."},
            {"q": "Mi a Nyugati-fjordok legnagyobb vízesése?", "a": "A Dynjandi a régió legnagyobb és leglátványosabb vízesése."},
            {"q": "A régió egész évben megközelíthető?", "a": "Egyes területek télen nehezen megközelíthetők a nagy hó és a lezárt hegyi hágók miatt."}
        ],
        "ro": [
            {"q": "Care este cea mai faimoasă stâncă de păsări din Westfjords?", "a": "Látrabjarg este cea mai faimoasă stâncă de păsări, găzduind milioane de pufini."},
            {"q": "Sunt multe fiorduri în această regiune?", "a": "Da, regiunea constă în zeci de fiorduri înguste înconjurate de munți înalți cu vârf plat."},
            {"q": "Care este cea mai mare cascadă din Westfjords?", "a": "Dynjandi este cea mai mare și spectaculoasă cascadă din regiune."},
            {"q": "Este regiunea accesibilă tot anul?", "a": "Unele zone sunt greu accesibile iarna din cauza zăpezii abundente și a trecătorilor montane închise."}
        ]
    },
    "IS-008": {
        "en": [
            {"q": "What is Northwest Iceland famous for?", "a": "The region is famous for its Icelandic horse breeding and historical sites."},
            {"q": "Which island is popular for birdwatching here?", "a": "Drangey island is a well-known spot for birdwatching and hiking."},
            {"q": "Are there turf houses in the region?", "a": "Yes, Glaumbær is a famous museum featuring well-preserved turf houses."},
            {"q": "What is the largest town in the Northwest?", "a": "Sauðárkrókur is the largest town and a center for trade and services."}
        ],
        "de": [
            {"q": "Wofür ist der Nordwesten Islands bekannt?", "a": "Die Region ist berühmt für ihre Islandpferdezucht und historischen Stätten."},
            {"q": "Welche Insel ist hier beliebt für Vogelbeobachtungen?", "a": "Die Insel Drangey ist ein bekannter Ort für Vogelbeobachtungen und Wanderungen."},
            {"q": "Gibt es in der Region Torfhäuser?", "a": "Ja, Glaumbær ist ein berühmtes Museum mit gut erhaltenen Torfhäusern."},
            {"q": "Was ist die größte Stadt im Nordwesten?", "a": "Sauðárkrókur ist die größte Stadt und ein Zentrum für Handel und Dienstleistungen."}
        ],
        "hu": [
            {"q": "Miről híres Izland északnyugati része?", "a": "A régió híres az izlandi lótenyésztéséről és történelmi helyszíneiről."},
            {"q": "Melyik sziget népszerű itt madármegfigyelésre?", "a": "Drangey szigete jól ismert hely a madármegfigyeléshez és túrázáshoz."},
            {"q": "Vannak tőzegmohás házak a régióban?", "a": "Igen, Glaumbær egy híres múzeum, ahol jól megőrzött tőzegmohás házak láthatók."},
            {"q": "Mi az északnyugati rész legnagyobb városa?", "a": "Sauðárkrókur a legnagyobb város, valamint a kereskedelem és szolgáltatások központja."}
        ],
        "ro": [
            {"q": "Pentru ce este faimoasă Islanda de Nord-Vest?", "a": "Regiunea este faimoasă pentru creșterea cailor islandezi și siturile istorice."},
            {"q": "Ce insulă este populară pentru observarea păsărilor aici?", "a": "Insula Drangey este un loc bine-cunoscut pentru observarea păsărilor și drumeții."},
            {"q": "Există case de turbă în regiune?", "a": "Da, Glaumbær este un muzeu faimos care prezintă case de turbă bine conservate."},
            {"q": "Care este cel mai mare oraș din Nord-Vest?", "a": "Sauðárkrókur este cel mai mare oraș și un centru pentru comerț și servicii."}
        ]
    },
    "IS-009": {
        "en": [
            {"q": "What is the main town of Northeast Iceland?", "a": "Akureyri is the principal town and a cultural hub for the north."},
            {"q": "Are there many volcanoes around Lake Mývatn?", "a": "Yes, the area is one of the most active volcanic zones in Iceland."},
            {"q": "What is the Diamond Circle?", "a": "A tourist route in the north including Goðafoss, Mývatn, Dettifoss, and Ásbyrgi."},
            {"q": "Can you go whale watching in this region?", "a": "Yes, Húsavík is considered the whale watching capital of Iceland."}
        ],
        "de": [
            {"q": "Was ist der Hauptort von Nordostisland?", "a": "Akureyri ist der Hauptort und ein kulturelles Zentrum für den Norden."},
            {"q": "Gibt es viele Vulkane rund um den Mývatn-See?", "a": "Ja, das Gebiet ist eine der aktivsten Vulkanzonen Islands."},
            {"q": "Was ist der Diamond Circle?", "a": "Eine Touristenroute im Norden, die Goðafoss, Mývatn, Dettifoss und Ásbyrgi umfasst."},
            {"q": "Kann man in dieser Region Wale beobachten?", "a": "Ja, Húsavík gilt als die Hauptstadt der Walbeobachtung in Island."}
        ],
        "hu": [
            {"q": "Mi Északkelet-Izland fő városa?", "a": "Akureyri a legfontosabb város és az északi rész kulturális központja."},
            {"q": "Sok vulkán van a Mývatn-tó környékén?", "a": "Igen, a terület Izland egyik legaktívabb vulkáni övezete."},
            {"q": "Mi az a Gyémánt körút (Diamond Circle)?", "a": "Egy északi turistaútvonal, amely érinti Goðafoss-t, Mývatn-t, Dettifoss-t és Ásbyrgi-t."},
            {"q": "Lehet bálnákat nézni ebben a régióban?", "a": "Igen, Húsavíkot tekintik Izland bálnaleső fővárosának."}
        ],
        "ro": [
            {"q": "Care este principalul oraș din Islanda de Nord-Est?", "a": "Akureyri este principalul oraș și un hub cultural pentru nord."},
            {"q": "Sunt mulți vulcani în jurul lacului Mývatn?", "a": "Da, zona este una dintre cele mai active zone vulcanice din Islanda."},
            {"q": "Ce este Cercul de Diamant?", "a": "O rută turistică în nord care include Goðafoss, Mývatn, Dettifoss și Ásbyrgi."},
            {"q": "Se pot observa balene în această regiune?", "a": "Da, Húsavík este considerat capitala observării balenelor din Islanda."}
        ]
    },
    "city-reykjavik": {
        "en": [
            {"q": "What is the tallest church in Reykjavík?", "a": "Hallgrímskirkja is the tallest church and a major landmark of the city."},
            {"q": "Are there thermal pools in Reykjavík?", "a": "Yes, there are many public geothermal swimming pools, like Laugardalslaug."},
            {"q": "What is the Harpa center?", "a": "Harpa is a world-class concert hall and conference center by the harbor."},
            {"q": "Can you see whales from Reykjavík?", "a": "Yes, whale watching tours depart regularly from the Old Harbor."}
        ],
        "de": [
            {"q": "Welches ist die höchste Kirche in Reykjavík?", "a": "Die Hallgrímskirkja ist die höchste Kirche und ein wichtiges Wahrzeichen der Stadt."},
            {"q": "Gibt es in Reykjavík Thermalbäder?", "a": "Ja, es gibt viele öffentliche Geothermalbäder, wie zum Beispiel Laugardalslaug."},
            {"q": "Was ist das Harpa-Zentrum?", "a": "Harpa ist ein Weltklasse-Konzerthaus und Konferenzzentrum am Hafen."},
            {"q": "Kann man von Reykjavík aus Wale sehen?", "a": "Ja, Walbeobachtungstouren starten regelmäßig vom Alten Hafen."}
        ],
        "hu": [
            {"q": "Melyik Reykjavík legmagasabb temploma?", "a": "A Hallgrímskirkja a legmagasabb templom és a város egyik fő jelképe."},
            {"q": "Vannak termálvizes medencék Reykjavíkban?", "a": "Igen, sok nyilvános geotermikus úszómedence van, például a Laugardalslaug."},
            {"q": "Mi a Harpa központ?", "a": "A Harpa egy világszínvonalú koncertterem és konferenciaközpont a kikötőben."},
            {"q": "Láthatók bálnák Reykjavíkból?", "a": "Igen, a régi kikötőből rendszeresen indulnak bálnaleső túrák."}
        ],
        "ro": [
            {"q": "Care este cea mai înaltă biserică din Reykjavík?", "a": "Hallgrímskirkja este cea mai înaltă biserică și un reper major al orașului."},
            {"q": "Există piscine termale în Reykjavík?", "a": "Da, există multe piscine publice geotermale, cum ar fi Laugardalslaug."},
            {"q": "Ce este centrul Harpa?", "a": "Harpa este o sală de concerte și un centru de conferințe de clasă mondială lângă port."},
            {"q": "Se pot vedea balene din Reykjavík?", "a": "Da, tururile de observare a balenelor pleacă regulat din Portul Vechi."}
        ]
    },
    "city-akureyri": {
        "en": [
            {"q": "Is Akureyri a university town?", "a": "Yes, the University of Akureyri is a major educational institution in the north."},
            {"q": "What is the town's most famous church?", "a": "Akureyrarkirkja, designed by the same architect as Hallgrímskirkja, is very iconic."},
            {"q": "Are there ski resorts near Akureyri?", "a": "Yes, Hlíðarfjall is one of the most popular ski areas in Iceland."},
            {"q": "What is the climate like in Akureyri?", "a": "It has relatively warm summers and is sheltered from strong winds by the surrounding mountains."}
        ],
        "de": [
            {"q": "Ist Akureyri eine Universitätsstadt?", "a": "Ja, die Universität Akureyri ist eine wichtige Bildungseinrichtung im Norden."},
            {"q": "Welches ist die berühmteste Kirche der Stadt?", "a": "Die Akureyrarkirkja, entworfen vom selben Architekten wie die Hallgrímskirkja, ist sehr ikonisch."},
            {"q": "Gibt es Skigebiete in der Nähe von Akureyri?", "a": "Ja, Hlíðarfjall ist eines der beliebtesten Skigebiete in Island."},
            {"q": "Wie ist das Klima in Akureyri?", "a": "Es hat relativ warme Sommer und ist durch die umliegenden Berge vor starken Winden geschützt."}
        ],
        "hu": [
            {"q": "Akureyri egyetemi város?", "a": "Igen, az Akureyri Egyetem fontos oktatási intézmény északon."},
            {"q": "Melyik a város leghíresebb temploma?", "a": "Az Akureyrarkirkja, amelyet ugyanaz az építész tervezett, mint a Hallgrímskirkját, ikonikus látvány."},
            {"q": "Vannak síterepek Akureyri közelében?", "a": "Igen, a Hlíðarfjall Izland egyik legnépszerűbb síterülete."},
            {"q": "Milyen Akureyri éghajlata?", "a": "Viszonylag meleg nyarai vannak, és a környező hegyek védik az erős széltől."}
        ],
        "ro": [
            {"q": "Este Akureyri un oraș universitar?", "a": "Da, Universitatea din Akureyri este o instituție de învățământ majoră în nord."},
            {"q": "Care este cea mai faimoasă biserică din oraș?", "a": "Akureyrarkirkja, proiectată de același arhitect ca și Hallgrímskirkja, este emblematică."},
            {"q": "Există stațiuni de schi lângă Akureyri?", "a": "Da, Hlíðarfjall este una dintre cele mai populare zone de schi din Islanda."},
            {"q": "Cum este clima în Akureyri?", "a": "Are veri relativ calde și este ferit de vânturi puternice de munții înconjurători."}
        ]
    },
    "city-keflavik": {
        "en": [
            {"q": "What is the main role of Keflavík today?", "a": "It is the primary hub for international air travel to and from Iceland."},
            {"q": "Is there a museum of music in Keflavík?", "a": "Yes, the Icelandic Museum of Rock 'n' Roll is located in the town."},
            {"q": "What is Giantess in the Cave?", "a": "A popular attraction featuring a large troll woman figure in a cave by the harbor."},
            {"q": "How far is Keflavík from Reykjavík?", "a": "It is about 45 kilometers southwest of the capital."}
        ],
        "de": [
            {"q": "Was ist die Hauptaufgabe von Keflavík heute?", "a": "Es ist das wichtigste Drehkreuz für den internationalen Flugverkehr von und nach Island."},
            {"q": "Gibt es ein Musikmuseum in Keflavík?", "a": "Ja, das Isländische Museum für Rock 'n' Roll befindet sich in der Stadt."},
            {"q": "Was ist die Riesin in der Höhle?", "a": "Eine beliebte Attraktion mit einer großen Trollfrau-Figur in einer Höhle am Hafen."},
            {"q": "Wie weit ist Keflavík von Reykjavík entfernt?", "a": "Es liegt etwa 45 Kilometer südwestlich der Hauptstadt."}
        ],
        "hu": [
            {"q": "Mi Keflavík fő szerepe ma?", "a": "Az Izlandra irányuló és onnan induló nemzetközi légi közlekedés elsődleges csomópontja."},
            {"q": "Van zenei múzeum Keflavíkban?", "a": "Igen, az Izlandi Rock 'n' Roll Múzeum a városban található."},
            {"q": "Ki az Óriásasszony a barlangban?", "a": "Népszerű látványosság, amely egy nagy troll asszony figuráját mutatja be a kikötő melletti barlangban."},
            {"q": "Milyen messze van Keflavík Reykjavíktól?", "a": "Körülbelül 45 kilométerre délnyugatra fekszik a fővárostól."}
        ],
        "ro": [
            {"q": "Care este rolul principal al orașului Keflavík astăzi?", "a": "Este hub-ul principal pentru călătoriile aeriene internaționale către și dinspre Islanda."},
            {"q": "Există un muzeu al muzicii în Keflavík?", "a": "Da, Muzeul Rock 'n' Roll-ului Islandez se află în oraș."},
            {"q": "Ce este Uriașa din Peșteră?", "a": "O atracție populară care prezintă o figură mare de femeie trol într-o peșteră de lângă port."},
            {"q": "Cât de departe este Keflavík de Reykjavík?", "a": "Se află la aproximativ 45 de kilometri sud-vest de capitală."}
        ]
    },
    "city-isafjordur": {
        "en": [
            {"q": "How do you get to Ísafjörður?", "a": "You can reach it by car, though the drive involves long fjords and tunnels, or by domestic flight."},
            {"q": "What is the town's oldest building?", "a": "Turnhúsið, built in 1781, is one of the oldest buildings and houses a maritime museum."},
            {"q": "Is Ísafjörður a good base for hiking?", "a": "Yes, it is the gateway to the Hornstrandir Nature Reserve, a remote hiking paradise."},
            {"q": "Does the town have a university?", "a": "Yes, it is home to the University Centre of the Westfjords."}
        ],
        "de": [
            {"q": "Wie kommt man nach Ísafjörður?", "a": "Man kann es mit dem Auto erreichen, wobei die Fahrt durch lange Fjorde und Tunnel führt, oder mit einem Inlandsflug."},
            {"q": "Welches ist das älteste Gebäude der Stadt?", "a": "Turnhúsið, erbaut 1781, ist eines der ältesten Gebäude und beherbergt ein Seefahrtsmuseum."},
            {"q": "Ist Ísafjörður ein guter Ausgangspunkt zum Wandern?", "a": "Ja, es ist das Tor zum Naturschutzgebiet Hornstrandir, einem abgelegenen Wanderparadies."},
            {"q": "Hat die Stadt eine Universität?", "a": "Ja, hier befindet sich das Universitätszentrum der Westfjorde."}
        ],
        "hu": [
            {"q": "Hogyan lehet eljutni Ísafjörðurbe?", "a": "Autóval (hosszú fjordokon és alagutakon keresztül) vagy belföldi repülőjárattal érhető el."},
            {"q": "Mi a város legrégebbi épülete?", "a": "Az 1781-ben épült Turnhúsið az egyik legrégebbi épület, ma tengerészeti múzeumnak ad otthont."},
            {"q": "Ísafjörður jó bázis a túrázáshoz?", "a": "Igen, ez a Hornstrandir Természetvédelmi Terület kapuja, amely egy távoli túraparadicsom."},
            {"q": "Van a városnak egyeteme?", "a": "Igen, itt található a Nyugati-fjordok Egyetemi Központja."}
        ],
        "ro": [
            {"q": "Cum se ajunge la Ísafjörður?", "a": "Puteți ajunge cu mașina, deși drumul implică fiorduri lungi și tuneluri, sau cu un zbor intern."},
            {"q": "Care este cea mai veche clădire din oraș?", "a": "Turnhúsið, construită în 1781, este una dintre cele mai vechi clădiri și găzduiește un muzeu maritim."},
            {"q": "Este Ísafjörður o bază bună pentru drumeții?", "a": "Da, este poarta de intrare în Rezervația Naturală Hornstrandir, un paradis izolat pentru drumeții."},
            {"q": "Orașul are o universitate?", "a": "Da, găzduiește Centrul Universitar din Westfjords."}
        ]
    },
    "city-selfoss": {
        "en": [
            {"q": "Is Selfoss a coastal town?", "a": "No, it is located inland on the banks of the Ölfusá River."},
            {"q": "What is the Bobby Fischer Center?", "a": "A museum dedicated to the chess grandmaster Bobby Fischer, who lived and is buried nearby."},
            {"q": "What is the town's main event?", "a": "The 'Summer in Selfoss' festival is a large family-friendly community event held in August."},
            {"q": "Is it a good place to stay while exploring the Golden Circle?", "a": "Yes, its central location in the south makes it an excellent base for sightseeing."}
        ],
        "de": [
            {"q": "Ist Selfoss eine Küstenstadt?", "a": "Nein, es liegt im Landesinneren am Ufer des Flusses Ölfusá."},
            {"q": "Was ist das Bobby Fischer Center?", "a": "Ein Museum, das dem Schachgroßmeister Bobby Fischer gewidmet ist, der in der Nähe lebte und begraben liegt."},
            {"q": "Was ist die wichtigste Veranstaltung der Stadt?", "a": "Das Festival 'Sommer in Selfoss' ist eine große familienfreundliche Gemeinschaftsveranstaltung, die im August stattfindet."},
            {"q": "Ist es ein guter Ort zum Übernachten, während man den Golden Circle erkundet?", "a": "Ja, seine zentrale Lage im Süden macht es zu einem hervorragenden Ausgangspunkt für Besichtigungen."}
        ],
        "hu": [
            {"q": "Selfoss tengerparti város?", "a": "Nem, a szárazföld belsejében, az Ölfusá-folyó partján fekszik."},
            {"q": "Mi az a Bobby Fischer Központ?", "a": "Egy múzeum, amelyet Bobby Fischer sakknagymesternek szenteltek, aki a közelben élt és nyugszik."},
            {"q": "Mi a város fő eseménye?", "a": "A 'Nyár Selfossban' fesztivál egy nagy, családbarát közösségi esemény augusztusban."},
            {"q": "Jó hely a szálláshoz az Arany körút felfedezése közben?", "a": "Igen, központi elhelyezkedése délen kiváló bázist jelent a városnézéshez."}
        ],
        "ro": [
            {"q": "Este Selfoss un oraș de coastă?", "a": "Nu, este situat în interior, pe malul râului Ölfusá."},
            {"q": "Ce este Centrul Bobby Fischer?", "a": "Un muzeu dedicat marelui maestru de șah Bobby Fischer, care a trăit și este înmormântat în apropiere."},
            {"q": "Care este principalul eveniment al orașului?", "a": "Festivalul „Vara în Selfoss” este un mare eveniment comunitar pentru familii, organizat în august."},
            {"q": "Este un loc bun de cazare în timpul explorării Cercului de Aur?", "a": "Da, locația sa centrală în sud îl face o bază excelentă pentru vizitarea obiectivelor turistice."}
        ]
    },
    "city-seydisfjordur": {
        "en": [
            {"q": "Why is the church in Seyðisfjörður famous?", "a": "The blue-colored church is famous for the rainbow-painted pathway leading up to it."},
            {"q": "Is there a ferry connection to Europe?", "a": "Yes, the Smyril Line ferry connects Seyðisfjörður with Denmark and the Faroe Islands."},
            {"q": "What kind of arts are prominent in the town?", "a": "The town has a vibrant scene for visual arts, music, and an annual arts festival (LungA)."},
            {"q": "Are there hiking trails nearby?", "a": "Yes, there are many trails leading to waterfalls and through the surrounding mountains."}
        ],
        "de": [
            {"q": "Warum ist die Kirche in Seyðisfjörður berühmt?", "a": "Die blaue Kirche ist berühmt für den in Regenbogenfarben bemalten Weg, der zu ihr führt."},
            {"q": "Gibt es eine Fährverbindung nach Europa?", "a": "Ja, die Fähre der Smyril Line verbindet Seyðisfjörður mit Dänemark und den Färöer-Inselern."},
            {"q": "Welche Kunstrichtungen sind in der Stadt vertreten?", "a": "Die Stadt hat eine lebendige Szene für bildende Kunst, Musik und ein jährliches Kunstfestival (LungA)."},
            {"q": "Gibt es Wanderwege in der Nähe?", "a": "Ja, es gibt viele Wege, die zu Wasserfällen und durch die umliegenden Berge führen."}
        ],
        "hu": [
            {"q": "Miért híres Seyðisfjörður temploma?", "a": "A kék színű templom a hozzá vezető szivárványos útról vált híressé."},
            {"q": "Van kompösszeköttetés Európával?", "a": "Igen, a Smyril Line kompjárata összeköti Seyðisfjörðurt Dániával és a Feröer-szigetekkel."},
            {"q": "Milyen művészeti ágak jellemzőek a városra?", "a": "A város élénk vizuális művészeti és zenei élettel, valamint egy éves művészeti fesztivállal (LungA) rendelkezik."},
            {"q": "Vannak túraútvonalak a közelben?", "a": "Igen, számos útvonal vezet vízesésekhez és a környező hegyekbe."}
        ],
        "ro": [
            {"q": "De ce este faimoasă biserica din Seyðisfjörður?", "a": "Biserica albastră este faimoasă pentru aleea vopsită în culorile curcubeului care duce spre ea."},
            {"q": "Există o conexiune cu feribotul către Europa?", "a": "Da, feribotul Smyril Line leagă Seyðisfjörður de Danemarca și Insulele Feroe."},
            {"q": "Ce fel de arte sunt proeminente în oraș?", "a": "Orașul are o scenă vibrantă pentru arte vizuale, muzică și un festival anual de arte (LungA)."},
            {"q": "Există trasee de drumeție în apropiere?", "a": "Da, există multe trasee care duc la cascade și prin munții înconjurători."}
        ]
    },
    "nature-thingvellir": {
        "en": [
            {"q": "Can you dive at Þingvellir?", "a": "Yes, the Silfra fissure is a world-famous site for diving and snorkeling between tectonic plates."},
            {"q": "What is the historical significance of Þingvellir?", "a": "It is the site where the Althingi, Iceland's parliament, was founded in 930 AD."},
            {"q": "Is the park a UNESCO site?", "a": "Yes, it was designated a UNESCO World Heritage site in 2004."},
            {"q": "Is there a waterfall in the park?", "a": "Yes, Öxarárfoss is a beautiful waterfall located within the Almannagjá fissure."}
        ],
        "de": [
            {"q": "Kann man in Þingvellir tauchen?", "a": "Ja, die Silfra-Spalte ist ein weltberühmter Ort zum Tauchen und Schnorcheln zwischen den tektonischen Platten."},
            {"q": "Was ist die historische Bedeutung von Þingvellir?", "a": "Es ist der Ort, an dem 930 n. Chr. das Althingi, das isländische Parlament, gegründet wurde."},
            {"q": "Gehört der Park zum UNESCO-Welterbe?", "a": "Ja, er wurde 2004 zum UNESCO-Weltkulturerbe erklärt."},
            {"q": "Gibt es im Park einen Wasserfall?", "a": "Ja, Öxarárfoss ist ein wunderschöner Wasserfall in der Almannagjá-Spalte."}
        ],
        "hu": [
            {"q": "Lehet búvárkodni Þingvellirben?", "a": "Igen, a Silfra-hasadék világhírű hely a tektonikus lemezek közötti búvárkodásra és sznorkelezésre."},
            {"q": "Mi Þingvellir történelmi jelentősége?", "a": "Ez az a hely, ahol i.sz. 930-ban megalapították az Althingit, Izland parlamentjét."},
            {"q": "A park UNESCO világörökségi helyszín?", "a": "Igen, 2004-ben nyilvánították az UNESCO Világörökség részévé."},
            {"q": "Van vízesés a parkban?", "a": "Igen, az Öxarárfoss egy gyönyörű vízesés az Almannagjá-hasadékban."}
        ],
        "ro": [
            {"q": "Se poate face scufundări la Þingvellir?", "a": "Da, fisura Silfra este un sit faimos la nivel mondial pentru scufundări și snorkeling între plăcile tectonice."},
            {"q": "Care este semnificația istorică a Þingvellir?", "a": "Este locul unde a fost fondat Althingi, parlamentul Islandei, în anul 930 d.Hr."},
            {"q": "Este parcul un sit UNESCO?", "a": "Da, a fost desemnat sit al Patrimoniului Mondial UNESCO în 2004."},
            {"q": "Există o cascadă în parc?", "a": "Da, Öxarárfoss este o cascadă frumoasă situată în fisura Almannagjá."}
        ]
    },
    "nature-gullfoss": {
        "en": [
            {"q": "Why is it called 'Golden Falls'?", "a": "The name refers to the golden hue sometimes seen in the spray and the sunlight on the water."},
            {"q": "How high is Gullfoss?", "a": "The waterfall has a total height of 32 meters, falling in two stages."},
            {"q": "Who saved Gullfoss from industrialization?", "a": "Sigríður Tómasdóttir is celebrated for her efforts to protect the waterfall from being dammed."},
            {"q": "Can you visit Gullfoss in winter?", "a": "Yes, the waterfall is spectacular in winter when partially frozen, and accessible via the Golden Circle."}
        ],
        "de": [
            {"q": "Warum heißt er 'Goldener Wasserfall'?", "a": "Der Name bezieht sich auf den goldenen Schimmer, der manchmal im Sprühnebel und im Sonnenlicht auf dem Wasser zu sehen ist."},
            {"q": "Wie hoch ist der Gullfoss?", "a": "Der Wasserfall hat eine Gesamthöhe von 32 Metern und stürzt in zwei Stufen ab."},
            {"q": "Wer hat den Gullfoss vor der Industrialisierung gerettet?", "a": "Sigríður Tómasdóttir wird für ihre Bemühungen gefeiert, den Wasserfall vor dem Bau eines Damms zu bewahren."},
            {"q": "Kann man den Gullfoss im Winter besuchen?", "a": "Ja, der Wasserfall ist im Winter spektakulär, wenn er teilweise gefroren ist, und über den Golden Circle erreichbar."}
        ],
        "hu": [
            {"q": "Miért hívják 'Arany-vízesésnek'?", "a": "A név az aranysárga árnyalatra utal, amely olykor látható a vízpermetben és a vízen megcsillanó napfényben."},
            {"q": "Milyen magas a Gullfoss?", "a": "A vízesés teljes magassága 32 méter, két lépcsőben zúdul le."},
            {"q": "Ki mentette meg a Gullfoss-t az iparosítástól?", "a": "Sigríður Tómasdóttir-t tisztelik azért, mert megvédte a vízesést a gátépítéstől."},
            {"q": "Látogatható a Gullfoss télen?", "a": "Igen, a vízesés télen is látványos, amikor részben befagy, és az Arany körúton keresztül megközelíthető."}
        ],
        "ro": [
            {"q": "De ce se numește „Cascada de Aur”?", "a": "Numele se referă la nuanța aurie care se vede uneori în amurg și în lumina soarelui pe apă."},
            {"q": "Cât de înaltă este Gullfoss?", "a": "Cascada are o înălțime totală de 32 de metri, căzând în două trepte."},
            {"q": "Cine a salvat Gullfoss de industrializare?", "a": "Sigríður Tómasdóttir este celebrată pentru eforturile sale de a proteja cascada de construirea unui baraj."},
            {"q": "Se poate vizita Gullfoss iarna?", "a": "Da, cascada este spectaculoasă iarna când este parțial înghețată și este accesibilă prin Cercul de Aur."}
        ]
    },
    "nature-geysir": {
        "en": [
            {"q": "Is the Great Geysir still active?", "a": "It is mostly dormant now but can be triggered by seismic activity."},
            {"q": "Which geyser is the most active now?", "a": "Strokkur is the most active, erupting regularly every few minutes."},
            {"q": "How high does Strokkur erupt?", "a": "Strokkur typically reaches heights of 15 to 20 meters, sometimes up to 40 meters."},
            {"q": "Is it safe to get close to the hot springs?", "a": "Visitors must stay behind ropes as the water is near boiling point and can cause severe burns."}
        ],
        "de": [
            {"q": "Ist der Große Geysir noch aktiv?", "a": "Er ruht meistens, kann aber durch seismische Aktivitäten ausgelöst werden."},
            {"q": "Welcher Geysir ist derzeit am aktivsten?", "a": "Strokkur ist der aktivste und bricht regelmäßig alle paar Minuten aus."},
            {"q": "Wie hoch bricht der Strokkur aus?", "a": "Der Strokkur erreicht normalerweise Höhen von 15 bis 20 Metern, manchmal bis zu 40 Metern."},
            {"q": "Ist es sicher, in die Nähe der heißen Quellen zu gehen?", "a": "Besucher müssen hinter den Seilen bleiben, da das Wasser kurz vor dem Siedepunkt steht und schwere Verbrennungen verursachen kann."}
        ],
        "hu": [
            {"q": "Aktív még a Nagy Gejzír?", "a": "Legtöbbször szunnyad, de szeizmikus tevékenység aktiválhatja."},
            {"q": "Melyik gejzír a legaktívabb most?", "a": "A Strokkur a legaktívabb, néhány percenként rendszeresen kitör."},
            {"q": "Milyen magasra tör ki a Strokkur?", "a": "A Strokkur általában 15-20 méteres magasságot ér el, olykor akár 40 métert is."},
            {"q": "Biztonságos a hőforrások közelébe menni?", "a": "A látogatóknak a kötelek mögött kell maradniuk, mert a víz forráspont közeli, és súlyos égési sérüléseket okozhat."}
        ],
        "ro": [
            {"q": "Mai este activ Marele Geysir?", "a": "Este în mare parte latent acum, dar poate fi declanșat de activitatea seismică."},
            {"q": "Care gheizer este cel mai activ acum?", "a": "Strokkur este cel mai activ, erupând regulat la fiecare câteva minute."},
            {"q": "Cât de sus erupe Strokkur?", "a": "Strokkur atinge de obicei înălțimi de 15 până la 20 de metri, uneori până la 40 de metri."},
            {"q": "Este sigur să te apropii de izvoarele termale?", "a": "Vizitatorii trebuie să stea în spatele frânghiilor, deoarece apa este aproape de punctul de fierbere și poate provoca arsuri grave."}
        ]
    },
    "nature-vatnajokull": {
        "en": [
            {"q": "How thick is the ice on Vatnajökull?", "a": "The average thickness of the ice cap is about 400 meters, with a maximum of about 950 meters."},
            {"q": "Are there ice caves you can visit?", "a": "Yes, many stunning blue ice caves form in the glacier's outlets during winter."},
            {"q": "What is the highest peak in Iceland?", "a": "Hvannadalshnúkur, located on the southern edge of Vatnajökull, is the highest peak at 2,110 meters."},
            {"q": "Is the glacier receding?", "a": "Like most glaciers in Iceland, Vatnajökull is currently receding due to climate change."}
        ],
        "de": [
            {"q": "Wie dick ist das Eis auf dem Vatnajökull?", "a": "Die durchschnittliche Dicke der Eiskappe beträgt etwa 400 Meter, mit einem Maximum von etwa 950 Metern."},
            {"q": "Gibt es Eishöhlen, die man besuchen kann?", "a": "Ja, im Winter bilden sich in den Ausläufern des Gletschers viele beeindruckende blaue Eishöhlen."},
            {"q": "Welches ist der höchste Gipfel Islands?", "a": "Der Hvannadalshnúkur am südrand des Vatnajökull ist mit 2.110 Metern der höchste Gipfel."},
            {"q": "Zieht sich der Gletscher zurück?", "a": "Wie die meisten Gletscher in Island zieht sich auch der Vatnajökull aufgrund des Klimawandels derzeit zurück."}
        ],
        "hu": [
            {"q": "Milyen vastag a jég a Vatnajökullon?", "a": "A jégtakaró átlagos vastagsága körülbelül 400 méter, a maximum pedig körülbelül 950 méter."},
            {"q": "Vannak látogatható jégbarlangok?", "a": "Igen, télen számos lenyűgöző kék jégbarlang alakul ki a gleccser nyúlványaiban."},
            {"q": "Melyik Izland legmagasabb csúcsa?", "a": "A Hvannadalshnúkur, amely a Vatnajökull déli szélén található, a legmagasabb csúcs 2110 méterrel."},
            {"q": "Visszahúzódik a gleccser?", "a": "Mint a legtöbb izlandi gleccser, a Vatnajökull is visszahúzódik jelenleg az éghajlatváltozás miatt."}
        ],
        "ro": [
            {"q": "Cât de gros este gheața pe Vatnajökull?", "a": "Grosimea medie a calotei glaciare este de aproximativ 400 de metri, cu un maxim de aproximativ 950 de metri."},
            {"q": "Există peșteri de gheață care pot fi vizitate?", "a": "Da, multe peșteri de gheață albastră uimitoare se formează în limbile ghețarului în timpul iernii."},
            {"q": "Care este cel mai înalt vârf din Islanda?", "a": "Hvannadalshnúkur, situat la marginea de sud a Vatnajökull, este cel mai înalt vârf, la 2.110 metri."},
            {"q": "Se retrage ghețarul?", "a": "Ca majoritatea ghețarilor din Islanda, Vatnajökull se retrage în prezent din cauza schimbărilor climatice."}
        ]
    },
    "nature-jokulsarlon": {
        "en": [
            {"q": "Are there boat tours on the lagoon?", "a": "Yes, amphibian and zodiac boat tours allow visitors to get closer to the icebergs."},
            {"q": "What animals can you see at Jökulsárlón?", "a": "Seals are commonly seen swimming in the lagoon or resting on the ice."},
            {"q": "Why is the water salty?", "a": "The lagoon is connected to the ocean, so it is a mix of freshwater and seawater."},
            {"q": "How old is the ice in the lagoon?", "a": "The icebergs are made of ice that is often over 1,000 years old."}
        ],
        "de": [
            {"q": "Gibt es Bootstouren auf der Lagune?", "a": "Ja, Touren mit Amphibienfahrzeugen und Zodiac-Booten ermöglichen es Besuchern, den Eisbergen näher zu kommen."},
            {"q": "Welche Tiere kann man am Jökulsárlón sehen?", "a": "Man sieht oft Robben, die in der Lagune schwimmen oder auf dem Eis ruhen."},
            {"q": "Warum ist das Wasser salzig?", "a": "Die Lagune ist mit dem Ozean verbunden, daher ist das Wasser eine Mischung aus Süß- und Meerwasser."},
            {"q": "Wie alt ist das Eis in der Lagune?", "a": "Die Eisberge bestehen aus Eis, das oft über 1.000 Jahre alt ist."}
        ],
        "hu": [
            {"q": "Vannak hajótúrák a lagúnán?", "a": "Igen, kétéltű és gumicsónakos túrák teszik lehetővé a jéghegyek megközelítését."},
            {"q": "Milyen állatokat lehet látni Jökulsárlónnál?", "a": "Fókák gyakran láthatók a lagúnában úszva vagy a jégen pihenve."},
            {"q": "Miért sós a víz?", "a": "A lagúna összeköttetésben áll az óceánnal, így édesvíz és tengervíz keveréke."},
            {"q": "Milyen idős a jég a lagúnában?", "a": "A jéghegyek gyakran több mint 1000 éves jégből állnak."}
        ],
        "ro": [
            {"q": "Există tururi cu barca pe lagună?", "a": "Da, tururile cu bărci amfibii și zodiac permit vizitatorilor să se apropie de iceberguri."},
            {"q": "Ce animale pot fi văzute la Jökulsárlón?", "a": "Focile sunt văzute frecvent înotând în lagună sau odihnindu-se pe gheață."},
            {"q": "De ce este apa sărată?", "a": "Laguna este conectată la ocean, deci este un amestec de apă dulce și apă de mare."},
            {"q": "Cât de veche este gheața din lagună?", "a": "Icebergurile sunt făcute din gheață care are adesea peste 1.000 de ani vechime."}
        ]
    },
    "nature-skogafoss": {
        "en": [
            {"q": "Can you hike above the waterfall?", "a": "Yes, a staircase leads to a viewing platform at the top, marking the start of the Fimmvörðuháls trail."},
            {"q": "Was Skógafoss used as a filming location?", "a": "Yes, it appeared in movies like 'Thor: The Dark World' and 'The Secret Life of Walter Mitty'."},
            {"q": "Is the ground around the waterfall flat?", "a": "Yes, the ground is quite flat, allowing visitors to walk right up to the base of the falls."},
            {"q": "Are there facilities at Skógafoss?", "a": "There is a large parking area, a campground, and a restaurant nearby."}
        ],
        "de": [
            {"q": "Kann man oberhalb des Wasserfalls wandern?", "a": "Ja, eine Treppe führt zu einer Aussichtsplattform oben, die den Beginn des Fimmvörðuháls-Weges markiert."},
            {"q": "Wurde der Skógafoss als Drehort genutzt?", "a": "Ja, er tauchte in Filmen wie 'Thor: The Dark World' und 'Das erstaunliche Leben des Walter Mitty' auf."},
            {"q": "Ist der Boden um den Wasserfall flach?", "a": "Ja, der Boden ist ziemlich flach, sodass Besucher direkt bis zum Fuß der Fälle laufen können."},
            {"q": "Gibt es Einrichtungen am Skógafoss?", "a": "Es gibt einen großen Parkplatz, einen Campingplatz und ein Restaurant in der Nähe."}
        ],
        "hu": [
            {"q": "Lehet túrázni a vízesés felett?", "a": "Igen, egy lépcső vezet fel a felső kilátóhoz, amely a Fimmvörðuháls túraútvonal kezdőpontja."},
            {"q": "Használták a Skógafoss-t forgatási helyszínként?", "a": "Igen, szerepelt olyan filmekben, mint a 'Thor: Sötét világ' és a 'Walter Mitty titkos élete'."},
            {"q": "Lapos a talaj a vízesés körül?", "a": "Igen, a talaj elég lapos, így a látogatók közvetlenül a vízesés lábához sétálhatnak."},
            {"q": "Vannak létesítmények a Skógafoss-nál?", "a": "Van egy nagy parkoló, kemping és étterem a közelben."}
        ],
        "ro": [
            {"q": "Se poate face drumeție deasupra cascadei?", "a": "Da, o scară duce la o platformă de observare în vârf, marcând începutul traseului Fimmvörðuháls."},
            {"q": "A fost Skógafoss folosit ca locație de filmare?", "a": "Da, a apărut în filme precum „Thor: Întunericul” și „Viața secretă a lui Walter Mitty”."},
            {"q": "Este terenul din jurul cascadei plat?", "a": "Da, terenul este destul de plat, permițând vizitatorilor să meargă până la baza cascadei."},
            {"q": "Există facilități la Skógafoss?", "a": "Există o parcare mare, un camping și un restaurant în apropiere."}
        ]
    },
    "nature-seljalandsfoss": {
        "en": [
            {"q": "Do I need waterproof gear to walk behind the falls?", "a": "Yes, the mist is heavy, and you will likely get wet without a rain jacket."},
            {"q": "Is the path behind the waterfall open in winter?", "a": "It is often closed in winter due to ice buildup and falling icicles, which makes it dangerous."},
            {"q": "Is the waterfall illuminated at night?", "a": "Yes, floodlights illuminate the waterfall after dark, making it visible from the Ring Road."},
            {"q": "What is the source of Seljalandsfoss?", "a": "The water originates from the volcanic glacier Eyjafjallajökull."}
        ],
        "de": [
            {"q": "Brauche ich wasserfeste Kleidung, um hinter die Fälle zu gehen?", "a": "Ja, der Sprühnebel ist stark, und ohne Regenjacke wird man wahrscheinlich nass."},
            {"q": "Ist der Pfad hinter dem Wasserfall im Winter geöffnet?", "a": "Er ist im Winter oft wegen Eisbildung und herabfallenden Eiszapfen geschlossen, da dies gefährlich ist."},
            {"q": "Wird der Wasserfall nachts beleuchtet?", "a": "Ja, Flutlichter beleuchten den Wasserfall nach Einbruch der Dunkelheit, sodass er von der Ringstraße aus sichtbar ist."},
            {"q": "Was ist die Quelle des Seljalandsfoss?", "a": "Das Wasser stammt vom Vulkangletscher Eyjafjallajökull."}
        ],
        "hu": [
            {"q": "Szükségem van vízhatlan ruházatra a vízesés mögötti sétához?", "a": "Igen, a vízpermet sűrű, és esőkabát nélkül valószínűleg vizes leszel."},
            {"q": "Télen is nyitva van az út a vízesés mögött?", "a": "Télen gyakran lezárják a jégképződés és a lehulló jégcsapok miatt, ami veszélyessé teszi."},
            {"q": "Megvilágítják a vízesést éjszaka?", "a": "Igen, sötétedés után fényszórók világítják meg a vízesést, így látható a gyűrűs útról."},
            {"q": "Mi a Seljalandsfoss forrása?", "a": "A víz az Eyjafjallajökull vulkáni gleccseréből származik."}
        ],
        "ro": [
            {"q": "Am nevoie de echipament impermeabil pentru a merge în spatele cascadei?", "a": "Da, vaporii de apă sunt densi și probabil vă veți uda fără o jachetă de ploaie."},
            {"q": "Este deschisă poteca din spatele cascadei iarna?", "a": "Este adesea închisă iarna din cauza acumulării de gheață și a țurțurilor care cad, ceea ce o face periculoasă."},
            {"q": "Este cascada iluminată noaptea?", "a": "Da, proiectoarele luminează cascada după lăsarea întunericului, făcând-o vizibilă de pe drumul principal."},
            {"q": "Care este sursa Seljalandsfoss?", "a": "Apa provine din ghețarul vulcanic Eyjafjallajökull."}
        ]
    },
    "nature-reynisdrangar": {
        "en": [
            {"q": "What is the legend behind Reynisdrangar?", "a": "Legend says the stacks were trolls trying to pull a ship to shore that turned to stone at sunrise."},
            {"q": "Is it safe to swim at Reynisfjara?", "a": "No, swimming is strictly forbidden due to extremely strong currents and dangerous waves."},
            {"q": "Where are the basalt columns located?", "a": "The columns, known as Gardar, are located right on the beach against the Reynisfjall mountain."},
            {"q": "What kind of rock are the sea stacks made of?", "a": "They are composed of basalt, a common volcanic rock in Iceland."}
        ],
        "de": [
            {"q": "Was ist die Legende hinter Reynisdrangar?", "a": "Die Legende besagt, dass die Felsnadeln Trolle waren, die versuchten, ein Schiff an Land zu ziehen und bei Sonnenaufgang zu Stein erstarrten."},
            {"q": "Ist es sicher, in Reynisfjara zu schwimmen?", "a": "Nein, Schwimmen ist aufgrund extrem starker Strömungen und gefährlicher Wellen streng verboten."},
            {"q": "Wo befinden sich die Basaltsäulen?", "a": "Die Säulen, bekannt als Gardar, befinden sich direkt am Strand am Fuße des Berges Reynisfjall."},
            {"q": "Aus welcher Gesteinsart bestehen die Felsnadeln im Meer?", "a": "Sie bestehen aus Basalt, einem in Island verbreiteten Vulkangestein."}
        ],
        "hu": [
            {"q": "Mi a Reynisdrangar legendája?", "a": "A legenda szerint a sziklák trollok voltak, akik egy hajót próbáltak a partra húzni, de napfelkeltekor kővé váltak."},
            {"q": "Biztonságos az úszás Reynisfjaránál?", "a": "Nem, az úszás szigorúan tilos a rendkívül erős áramlatok és a veszélyes hullámok miatt."},
            {"q": "Hol találhatók a bazaltoszlopok?", "a": "A Gardar néven ismert oszlopok közvetlenül a tengerparton, a Reynisfjall-hegy lábánál találhatók."},
            {"q": "Milyen kőzetből állnak a tengeri sziklák?", "a": "Bazaltból állnak, amely Izlandon gyakori vulkáni kőzet."}
        ],
        "ro": [
            {"q": "Care este legenda din spatele Reynisdrangar?", "a": "Legenda spune că formațiunile au fost troli care încercau să tragă o navă la țărm și s-au transformat în piatră la răsărit."},
            {"q": "Este sigur să înoți la Reynisfjara?", "a": "Nu, înotul este strict interzis din cauza curenților extrem de puternici și a valurilor periculoase."},
            {"q": "Unde se află coloanele de bazalt?", "a": "Coloanele, cunoscute sub numele de Gardar, sunt situate chiar pe plajă, lângă muntele Reynisfjall."},
            {"q": "Din ce fel de rocă sunt făcute stâncile din mare?", "a": "Sunt compuse din bazalt, o rocă vulcanică comună în Islanda."}
        ]
    },
    "nature-landmannalaugar": {
        "en": [
            {"q": "When is Landmannalaugar accessible?", "a": "It is typically accessible only from mid-June to mid-September via F-roads."},
            {"q": "What creates the colorful mountains?", "a": "The colors come from rhyolite, a type of volcanic rock that contains various minerals."},
            {"q": "Can you bathe in the hot springs there?", "a": "Yes, there is a natural hot river near the campsite where visitors can bathe for free."},
            {"q": "Do I need a 4x4 vehicle to get there?", "a": "Yes, a 4x4 vehicle is required as the route involves unpaved roads and river crossings."}
        ],
        "de": [
            {"q": "Wann ist Landmannalaugar erreichbar?", "a": "Es ist normalerweise nur von Mitte Juni bis Mitte September über F-Straßen erreichbar."},
            {"q": "Wodurch entstehen die bunten Berge?", "a": "Die Farben stammen von Rhyolith, einer Art Vulkangestein, das verschiedene Mineralien enthält."},
            {"q": "Kann man dort in den heißen Quellen baden?", "a": "Ja, in der Nähe des Campingplatzes gibt es einen natürlichen heißen Fluss, in dem Besucher kostenlos baden können."},
            {"q": "Brauche ich ein 4x4-Fahrzeug, um dorthin zu gelangen?", "a": "Ja, ein 4x4-Fahrzeug ist erforderlich, da die Route über unbefestigte Straßen und Flussüberquerungen führt."}
        ],
        "hu": [
            {"q": "Mikor látogatható Landmannalaugar?", "a": "Általában csak június közepétől szeptember közepéig érhető el az úgynevezett F-utakon keresztül."},
            {"q": "Mitől olyan színesek a hegyek?", "a": "A színek a riolitból származnak, ami egy különféle ásványokat tartalmazó vulkáni kőzet."},
            {"q": "Lehet fürödni az ottani hőforrásokban?", "a": "Igen, a kemping közelében van egy természetes meleg vizű folyó, ahol a látogatók ingyen fürödhetnek."},
            {"q": "Szükségem van 4x4-es járműre a kijutáshoz?", "a": "Igen, 4x4-es jármű kötelező, mivel az útvonal kövezetlen utakat és folyón való átkelést is tartalmaz."}
        ],
        "ro": [
            {"q": "Când este accesibil Landmannalaugar?", "a": "De obicei este accesibil doar de la mijlocul lunii iunie până la mijlocul lunii septembrie prin drumuri de tip F."},
            {"q": "Ce creează munții colorați?", "a": "Culorile provin de la riolit, un tip de rocă vulcanică ce conține diverse minerale."},
            {"q": "Se poate face baie în izvoarele termale de acolo?", "a": "Da, există un râu termal natural lângă camping unde vizitatorii pot face baie gratuit."},
            {"q": "Am nevoie de un vehicul 4x4 pentru a ajunge acolo?", "a": "Da, un vehicul 4x4 este necesar deoarece traseul implică drumuri neasfaltate și traversări de râuri."}
        ]
    },
    "nature-dettifoss": {
        "en": [
            {"q": "Which side is better to view Dettifoss?", "a": "The east side (road 864) offers a full view, while the west side (road 862) is more accessible and has better facilities."},
            {"q": "What is the volume of water flowing?", "a": "In summer, the average discharge is about 200 to 500 cubic meters per second."},
            {"q": "Is Dettifoss in a National Park?", "a": "Yes, it is part of the Vatnajökull National Park in North Iceland."},
            {"q": "How wide is the waterfall?", "a": "Dettifoss is 100 meters wide and has a drop of 44 meters."}
        ],
        "de": [
            {"q": "Von welcher Seite aus hat man den besten Blick auf den Dettifoss?", "a": "Die Ostseite (Straße 864) bietet eine vollständige Ansicht, während die Westseite (Straße 862) besser erreichbar ist und bessere Einrichtungen bietet."},
            {"q": "Wie groß ist die abfließende Wassermenge?", "a": "Im Sommer beträgt die durchschnittliche Abflussmenge etwa 200 bis 500 Kubikmeter pro Sekunde."},
            {"q": "Liegt der Dettifoss in einem Nationalpark?", "a": "Ja, er ist Teil des Vatnajökull-Nationalparks in Nordisland."},
            {"q": "Wie breit ist der Wasserfall?", "a": "Der Dettifoss ist 100 Meter breit und hat eine Fallhöhe von 44 Metern."}
        ],
        "hu": [
            {"q": "Melyik oldalról érdemesebb megnézni a Dettifosst?", "a": "A keleti oldal (864-es út) teljes rálátást biztosít, míg a nyugati oldal (862-es út) könnyebben megközelíthető és jobb infrastruktúrával bír."},
            {"q": "Mekkora a lezúduló víz mennyisége?", "a": "Nyáron az átlagos vízhozam körülbelül 200-500 köbméter másodpercenként."},
            {"q": "A Dettifoss nemzeti parkban található?", "a": "Igen, az észak-izlandi Vatnajökull Nemzeti Park része."},
            {"q": "Milyen széles a vízesés?", "a": "A Dettifoss 100 méter széles és 44 méter magasról zúdul le."}
        ],
        "ro": [
            {"q": "Care parte este mai bună pentru a vedea Dettifoss?", "a": "Partea de est (drumul 864) oferă o vedere completă, în timp ce partea de vest (drumul 862) este mai accesibilă și are facilități mai bune."},
            {"q": "Care este volumul de apă care curge?", "a": "Vara, debitul mediu este de aproximativ 200 până la 500 de metri cubi pe secundă."},
            {"q": "Este Dettifoss într-un parc național?", "a": "Da, face parte din Parcul Național Vatnajökull din nordul Islandei."},
            {"q": "Cât de lată este cascada?", "a": "Dettifoss are 100 de metri lățime și o cădere de 44 de metri."}
        ]
    },
    "nature-myvatn": {
        "en": [
            {"q": "What are pseudocraters?", "a": "They look like real craters but were formed by steam explosions when lava flowed over wet ground."},
            {"q": "Can you bathe in Mývatn?", "a": "The Mývatn Nature Baths offer a similar experience to the Blue Lagoon in a more quiet setting."},
            {"q": "Is the area good for birdwatching?", "a": "Yes, it is one of the world's best places for watching various species of ducks."},
            {"q": "What is Dimmuborgir?", "a": "A large area of unusually shaped lava formations, often called the 'Dark Castles'."}
        ],
        "de": [
            {"q": "Was sind Pseudokrater?", "a": "Sie sehen aus wie echte Krater, entstanden aber durch Dampfexplosionen, als Lava über nassen Boden floss."},
            {"q": "Kann man im Mývatn baden?", "a": "Die Mývatn Nature Baths bieten ein ähnliches Erlebnis wie die Blaue Lagune in einer ruhigeren Umgebung."},
            {"q": "Ist das Gebiet gut für Vogelbeobachtungen?", "a": "Ja, es ist einer der weltweit besten Orte zur Beobachtung verschiedener Entenarten."},
            {"q": "Was ist Dimmuborgir?", "a": "Ein großes Gebiet mit ungewöhnlich geformten Lavaformationen, oft als 'Dunkle Burgen' bezeichnet."}
        ],
        "hu": [
            {"q": "Mik azok a pszeudokráterek?", "a": "Úgy néznek ki, mint a valódi kráterek, de gőzrobbanások hozták létre őket, amikor a láva nedves talajon folyt keresztül."},
            {"q": "Lehet fürödni a Mývatnnál?", "a": "A Mývatn Természetes Fürdő a Kék Lagúnához hasonló élményt nyújt, nyugodtabb környezetben."},
            {"q": "Jó ez a terület madármegfigyelésre?", "a": "Igen, a világ egyik legjobb helye különféle kacsafajok megfigyelésére."},
            {"q": "Mi az a Dimmuborgir?", "a": "Szokatlan formájú lávaalakzatok kiterjedt területe, amelyet gyakran 'Sötét Kastélyoknak' neveznek."}
        ],
        "ro": [
            {"q": "Ce sunt pseudocraterele?", "a": "Arată ca niște cratere reale, dar s-au format prin explozii de abur când lava a curs peste teren umed."},
            {"q": "Se poate face baie la Mývatn?", "a": "Băile Naturale Mývatn oferă o experiență similară cu Laguna Albastră într-un cadru mai liniștit."},
            {"q": "Este zona bună pentru observarea păsărilor?", "a": "Da, este unul dintre cele mai bune locuri din lume pentru observarea diverselor specii de rațe."},
            {"q": "Ce este Dimmuborgir?", "a": "O zonă mare de formațiuni de lavă cu forme neobișnuite, numită adesea „Castelele Întunecate”."}
        ]
    },
    "nature-snaefellsjokull": {
        "en": [
            {"q": "How high is the glacier?", "a": "The glacier-capped volcano reaches an elevation of 1,446 meters."},
            {"q": "Is the volcano still active?", "a": "It is considered active, though the last eruption occurred about 1,800 years ago."},
            {"q": "Can you climb to the summit?", "a": "Yes, guided glacier hiking tours are available for those wishing to reach the peak."},
            {"q": "Is it a National Park?", "a": "Yes, it is the centerpiece of the Snæfellsjökull National Park, established in 2001."}
        ],
        "de": [
            {"q": "Wie hoch ist der Gletscher?", "a": "Der mit einem Gletscher bedeckte Vulkan erreicht eine Höhe von 1.446 Metern."},
            {"q": "Ist der Vulkan noch aktiv?", "a": "Er gilt als aktiv, obwohl der letzte Ausbruch vor etwa 1.800 Jahren stattfand."},
            {"q": "Kann man zum Gipfel aufsteigen?", "a": "Ja, für diejenigen, die den Gipfel erreichen möchten, werden geführte Gletscherwanderungen angeboten."},
            {"q": "Handelt es sich um einen Nationalpark?", "a": "Ja, er ist das Herzstück des 2001 gegründeten Snæfellsjökull-Nationalparks."}
        ],
        "hu": [
            {"q": "Milyen magas a gleccser?", "a": "A gleccserrel fedett vulkán 1446 méteres magasságot ér el."},
            {"q": "Aktív még a vulkán?", "a": "Aktívnak tekintik, bár az utolsó kitörése körülbelül 1800 évvel ezelőtt történt."},
            {"q": "Fel lehet jutni a csúcsra?", "a": "Igen, vezetett gleccsertúrák indulnak azoknak, akik el szeretnék érni a csúcsot."},
            {"q": "Ez egy nemzeti park?", "a": "Igen, ez a 2001-ben alapított Snæfellsjökull Nemzeti Park központi eleme."}
        ],
        "ro": [
            {"q": "Cât de înalt este ghețarul?", "a": "Vulcanul acoperit de ghețar atinge o altitudine de 1.446 de metri."},
            {"q": "Mai este activ vulcanul?", "a": "Este considerat activ, deși ultima erupție a avut loc acum aproximativ 1.800 de ani."},
            {"q": "Se poate urca pe vârf?", "a": "Da, sunt disponibile tururi ghidate de drumeție pe ghețar pentru cei care doresc să ajungă pe vârf."},
            {"q": "Este un parc național?", "a": "Da, este piesa centrală a Parcului Național Snæfellsjökull, înființat în 2001."}
        ]
    },
    "nature-kirkjufell": {
        "en": [
            {"q": "Why is it called 'Church Mountain'?", "a": "The name comes from its symmetrical shape, which resembles a church steeple or hat."},
            {"q": "Where is Kirkjufell located?", "a": "It is located on the north coast of the Snæfellsnes Peninsula near Grundarfjörður."},
            {"q": "Is there a waterfall nearby?", "a": "Yes, Kirkjufellsfoss is a small but picturesque waterfall often photographed with the mountain."},
            {"q": "Can you hike to the top of Kirkjufell?", "a": "Hiking is possible but very steep and dangerous, recommended only for experienced hikers with a guide."}
        ],
        "de": [
            {"q": "Warum heißt er 'Kirchberg'?", "a": "Der Name stammt von seiner symmetrischen Form, die an einen Kirchturm oder einen Hut erinnert."},
            {"q": "Wo befindet sich der Kirkjufell?", "a": "Er liegt an der Nordküste der Halbinsel Snæfellsnes in der Nähe von Grundarfjörður."},
            {"q": "Gibt es einen Wasserfall in der Nähe?", "a": "Ja, der Kirkjufellsfoss ist ein kleiner, aber malerischer Wasserfall, der oft zusammen mit dem Berg fotografiert wird."},
            {"q": "Kann man auf den Gipfel des Kirkjufell wandern?", "a": "Wandern ist möglich, aber sehr steil und gefährlich; es wird nur erfahrenen Wanderern mit einem Führer empfohlen."}
        ],
        "hu": [
            {"q": "Miért hívják 'Templom-hegynek'?", "a": "A név a szimmetrikus formájából ered, amely egy templomtoronyra vagy kalapra emlékeztet."},
            {"q": "Hol található a Kirkjufell?", "a": "A Snæfellsnes-félsziget északi partján, Grundarfjörður közelében található."},
            {"q": "Van vízesés a közelben?", "a": "Igen, a Kirkjufellsfoss egy kicsi, de festői vízesés, amelyet gyakran a heggyel együtt fotóznak."},
            {"q": "Fel lehet túrázni a Kirkjufell tetejére?", "a": "A túrázás lehetséges, de nagyon meredek és veszélyes, csak tapasztalt túrázóknak ajánlott vezetővel."}
        ],
        "ro": [
            {"q": "De ce se numește „Muntele Bisericii”?", "a": "Numele provine de la forma sa simetrică, ce seamănă cu turla unei biserici sau cu o pălărie."},
            {"q": "Unde se află Kirkjufell?", "a": "Este situat pe coasta de nord a peninsulei Snæfellsnes, lângă Grundarfjörður."},
            {"q": "Există o cascadă în apropiere?", "a": "Da, Kirkjufellsfoss este o cascadă mică, dar pitorească, fotografiată adesea împreună cu muntele."},
            {"q": "Se poate urca până în vârful Kirkjufell?", "a": "Drumeția este posibilă, dar foarte abruptă și periculoasă, fiind recomandată doar drumeților experimentați cu ghid."}
        ]
    },
    "nature-godafoss": {
        "en": [
            {"q": "What happened at Goðafoss in 1000 AD?", "a": "Lawspeaker Þorgeir Ljósvetningagoði threw his pagan idols into the falls, symbolizing the adoption of Christianity."},
            {"q": "How wide is Goðafoss?", "a": "The waterfall is about 30 meters wide."},
            {"q": "Is the waterfall easy to access?", "a": "Yes, it is located right next to the Ring Road between Akureyri and Lake Mývatn."},
            {"q": "Is it part of a river?", "a": "Yes, it is part of the Skjálfandafljót river, one of the major glacial rivers in Iceland."}
        ],
        "de": [
            {"q": "Was geschah am Goðafoss im Jahr 1000 n. Chr.?", "a": "Der Gesetzessprecher Þorgeir Ljósvetningagoði warf seine heidnischen Götterstatuen in den Wasserfall, was die Annahme des Christentums symbolisierte."},
            {"q": "Wie breit ist der Goðafoss?", "a": "Der Wasserfall ist etwa 30 Meter breit."},
            {"q": "Ist der Wasserfall leicht zugänglich?", "a": "Ja, er liegt direkt an der Ringstraße zwischen Akureyri und dem Mývatn-See."},
            {"q": "Gehört er zu einem Fluss?", "a": "Ja, er ist Teil des Flusses Skjálfandafljót, einem der großen Gletscherflüsse Islands."}
        ],
        "hu": [
            {"q": "Mi történt a Goðafoss-nál i.sz. 1000-ben?", "a": "Þorgeir Ljósvetningagoði törvénymondó a vízesésbe dobta pogány bálványait, jelképezve a kereszténység felvételét."},
            {"q": "Milyen széles a Goðafoss?", "a": "A vízesés körülbelül 30 méter széles."},
            {"q": "Könnyen megközelíthető a vízesés?", "a": "Igen, közvetlenül a gyűrűs út mellett található Akureyri és a Mývatn-tó között."},
            {"q": "Egy folyó része?", "a": "Igen, a Skjálfandafljót folyó része, amely Izland egyik jelentős gleccserfolyója."}
        ],
        "ro": [
            {"q": "Ce s-a întâmplat la Goðafoss în anul 1000 d.Hr.?", "a": "Legiuitorul Þorgeir Ljósvetningagoði și-a aruncat idolii păgâni în cascadă, simbolizând adoptarea creștinismului."},
            {"q": "Cât de lată este Goðafoss?", "a": "Cascada are o lățime de aproximativ 30 de metri."},
            {"q": "Este cascada ușor de accesat?", "a": "Da, este situată chiar lângă drumul principal, între Akureyri și lacul Mývatn."},
            {"q": "Face parte dintr-un râu?", "a": "Da, face parte din râul Skjálfandafljót, unul dintre râurile glaciare majore din Islanda."}
        ]
    },
    "nature-askja": {
        "en": [
            {"q": "What is the best way to visit Askja?", "a": "It is best visited with a guided tour in a 4x4 vehicle due to the difficult highland terrain."},
            {"q": "How deep is the lake in Askja?", "a": "Öskjuvatn is about 220 meters deep, making it one of Iceland's deepest lakes."},
            {"q": "Is the Víti crater warm?", "a": "Yes, the geothermal water in the Víti crater is usually between 20-30°C."},
            {"q": "When did Askja last erupt?", "a": "The last major eruption was in 1961."}
        ],
        "de": [
            {"q": "Wie besucht man die Askja am besten?", "a": "Wegen des schwierigen Hochlandgeländes besucht man sie am besten im Rahmen einer geführten Tour in einem 4x4-Fahrzeug."},
            {"q": "Wie tief ist der See in der Askja?", "a": "Der Öskjuvatn ist etwa 220 Meter tief und damit einer der tiefsten Seen Islands."},
            {"q": "Ist das Wasser im Víti-Krater warm?", "a": "Ja, das geothermale Wasser im Víti-Krater ist normalerweise zwischen 20 und 30 °C warm."},
            {"q": "Wann ist die Askja zuletzt ausgebrochen?", "a": "Der letzte große Ausbruch war im Jahr 1961."}
        ],
        "hu": [
            {"q": "Mi a legjobb módja Askja meglátogatásának?", "a": "A nehéz felföldi terep miatt leginkább vezetett túrával, 4x4-es járművel érdemes felkeresni."},
            {"q": "Milyen mély az Askja tava?", "a": "Az Öskjuvatn körülbelül 220 méter mély, ezzel Izland egyik legmélyebb tava."},
            {"q": "Meleg a Víti-kráter vize?", "a": "Igen, a Víti-kráter geotermikus vize általában 20-30°C közötti."},
            {"q": "Mikor tört ki utoljára az Askja?", "a": "Az utolsó jelentős kitörése 1961-ben volt."}
        ],
        "ro": [
            {"q": "Care este cel mai bun mod de a vizita Askja?", "a": "Cel mai bine este vizitată printr-un tur ghidat cu un vehicul 4x4, din cauza terenului dificil din zonele muntoase."},
            {"q": "Cât de adânc este lacul din Askja?", "a": "Öskjuvatn are o adâncime de aproximativ 220 de metri, fiind unul dintre cele mai adânci lacuri din Islanda."},
            {"q": "Este caldă apa din craterul Víti?", "a": "Da, apa geotermală din craterul Víti are de obicei între 20 și 30°C."},
            {"q": "Când a erupt ultima dată Askja?", "a": "Ultima erupție majoră a avut loc în 1961."}
        ]
    },
    "nature-husavik": {
        "en": [
            {"q": "What can you see in the Whale Museum?", "a": "The museum features full-size whale skeletons and informative exhibits about marine life."},
            {"q": "What is GeoSea?", "a": "GeoSea is a geothermal sea bath offering panoramic views of Skjálfandi Bay."},
            {"q": "Is the town associated with Eurovision?", "a": "Yes, Húsavík became famous worldwide as the setting for the 'Eurovision Song Contest: The Story of Fire Saga' movie."},
            {"q": "Are there puffins near Húsavík?", "a": "Yes, many whale watching tours also visit 'Puffin Island' (Lundey) during the nesting season."}
        ],
        "de": [
            {"q": "Was kann man im Walmuseum sehen?", "a": "Das Museum zeigt Walskelette in Originalgröße und informative Ausstellungen über das Leben im Meer."},
            {"q": "Was ist GeoSea?", "a": "GeoSea ist ein geothermales Meeresbad mit Panoramablick auf die Bucht von Skjálfandi."},
            {"q": "Wird die Stadt mit dem Eurovision Song Contest in Verbindung gebracht?", "a": "Ja, Húsavík wurde weltweit als Schauplatz für den Film 'Eurovision Song Contest: The Story of Fire Saga' bekannt."},
            {"q": "Gibt es Papageitaucher in der Nähe von Húsavík?", "a": "Ja, viele Walbeobachtungstouren besuchen während der Nistsaison auch die 'Papageitaucherinsel' (Lundey)."}
        ],
        "hu": [
            {"q": "Mit lehet látni a Bálnamúzeumban?", "a": "A múzeumban életnagyságú bálnacsontvázak és a tengeri életről szóló tájékoztató kiállítások találhatók."},
            {"q": "Mi az a GeoSea?", "a": "A GeoSea egy geotermikus tengeri fürdő, amely panorámás kilátást nyújt a Skjálfandi-öbölre."},
            {"q": "Kapcsolódik a város az Eurovízióhoz?", "a": "Igen, Húsavík világszerte híressé vált az 'Eurovíziós Dalfesztivál: A Fire Saga története' című film helyszíneként."},
            {"q": "Vannak lundák Húsavík közelében?", "a": "Igen, sok bálnaleső túra érinti a 'Lunda-szigetet' (Lundey) is a fészkelési időszakban."}
        ],
        "ro": [
            {"q": "Ce se poate vedea în Muzeul Balenelor?", "a": "Muzeul prezintă schelete de balenă în mărime naturală și expoziții informative despre viața marină."},
            {"q": "Ce este GeoSea?", "a": "GeoSea este o baie termală cu apă de mare care oferă vederi panoramice asupra golfului Skjálfandi."},
            {"q": "Este orașul asociat cu Eurovision?", "a": "Da, Húsavík a devenit faimos în întreaga lume ca decor pentru filmul „Eurovision Song Contest: Povestea trupei Fire Saga”."},
            {"q": "Există pufini lângă Húsavík?", "a": "Da, multe tururi de observare a balenelor vizitează și „Insula Pufinilor” (Lundey) în timpul sezonului de cuibărit."}
        ]
    },
    "nature-dyrholaey": {
        "en": [
            {"q": "Can you visit the lighthouse on Dyrhólaey?", "a": "Yes, there is a picturesque lighthouse on the upper part of the promontory."},
            {"q": "Is the area protected?", "a": "Yes, it has been a nature reserve since 1978 to protect the local birdlife."},
            {"q": "What does Dyrhólaey look like from the sea?", "a": "From the sea, the arch is large enough for ships (and even small planes) to pass through."},
            {"q": "Can you walk on the beach below?", "a": "Yes, you can access the black sand beach at Reynisfjara nearby, but be careful of the tides."}
        ],
        "de": [
            {"q": "Kann man den Leuchtturm auf Dyrhólaey besuchen?", "a": "Ja, auf dem oberen Teil der Landzunge befindet sich ein malerischer Leuchtturm."},
            {"q": "Steht das Gebiet unter Naturschutz?", "a": "Ja, es ist seit 1978 ein Naturschutzgebiet, um die lokale Vogelwelt zu schützen."},
            {"q": "Wie sieht Dyrhólaey vom Meer aus gesehen aus?", "a": "Vom Meer aus ist der Bogen groß genug, dass Schiffe (und sogar kleine Flugzeuge) hindurchfahren können."},
            {"q": "Kann man am Strand darunter spazieren gehen?", "a": "Ja, man kann den schwarzen Sandstrand im nahe gelegenen Reynisfjara besuchen, sollte aber auf die Gezeiten achten."}
        ],
        "hu": [
            {"q": "Meglátogatható a dyrhólaey-i világítótorony?", "a": "Igen, a félsziget felső részén egy festői világítótorony található."},
            {"q": "Védett ez a terület?", "a": "Igen, 1978 óta természetvédelmi terület a helyi madárvilág védelme érdekében."},
            {"q": "Hogy néz ki Dyrhólaey a tenger felől?", "a": "A tenger felől nézve az ív elég nagy ahhoz, hogy hajók (vagy akár kisrepülők) is áthaladjanak rajta."},
            {"q": "Lehet sétálni az alatta lévő tengerparton?", "a": "Igen, a közeli Reynisfjara fekete homokos partja elérhető, de ügyelni kell az árapályra."}
        ],
        "ro": [
            {"q": "Se poate vizita farul de pe Dyrhólaey?", "a": "Da, există un far pitoresc pe partea superioară a promontoriului."},
            {"q": "Este zona protejată?", "a": "Da, este o rezervație naturală din 1978 pentru a proteja păsările locale."},
            {"q": "Cum arată Dyrhólaey de pe mare?", "a": "De pe mare, arcada este suficient de mare pentru ca navele (și chiar avioanele mici) să treacă prin ea."},
            {"q": "Se poate merge pe plaja de dedesubt?", "a": "Da, puteți accesa plaja cu nisip negru de la Reynisfjara din apropiere, dar aveți grijă la maree."}
        ]
    },
    "nature-hverir": {
        "en": [
            {"q": "Is the steam from the fumaroles safe?", "a": "The steam is mostly water vapor but contains sulfur gases; it is safe in open air but has a strong smell."},
            {"q": "Why is the ground so colorful?", "a": "The colors are caused by various mineral deposits like sulfur (yellow), gypsum (white), and clay (grey)."},
            {"q": "Can you walk anywhere in the area?", "a": "No, visitors must stay on the marked paths to avoid falling into hidden boiling mud or thin crust."},
            {"q": "Are there any plants in Hverir?", "a": "There is virtually no vegetation due to high soil acidity and temperature."}
        ],
        "de": [
            {"q": "Ist der Dampf aus den Fumarolen sicher?", "a": "Der Dampf besteht hauptsächlich aus Wasserdampf, enthält aber Schwefelgase; er ist an der frischen Luft sicher, riecht aber stark."},
            {"q": "Warum ist der Boden so bunt?", "a": "Die Farben werden durch verschiedene Mineralablagerungen wie Schwefel (gelb), Gips (weiß) und Ton (grau) verursacht."},
            {"q": "Kann man überall in dem Gebiet spazieren gehen?", "a": "Nein, Besucher müssen auf den markierten Wegen bleiben, um nicht in verborgenen kochenden Schlamm oder dünne Krusten zu treten."},
            {"q": "Gibt es in Hverir Pflanzen?", "a": "Wegen des hohen Säuregehalts des Bodens und der Temperaturen gibt es dort so gut wie keine Vegetation."}
        ],
        "hu": [
            {"q": "Biztonságos a fumarolák gőze?", "a": "A gőz főleg vízpára, de kénes gázokat is tartalmaz; szabad levegőn biztonságos, de erős szaga van."},
            {"q": "Miért olyan színes a talaj?", "a": "A színeket különféle ásványi lerakódások okozzák, mint a kén (sárga), gipsz (fehér) és agyag (szürke)."},
            {"q": "Bárhol lehet sétálni a területen?", "a": "Nem, a látogatóknak a kijelölt ösvényeken kell maradniuk, hogy elkerüljék a rejtett forró iszapot vagy a vékony kéreget."},
            {"q": "Vannak növények Hverirben?", "a": "A talaj magas savassága és hőmérséklete miatt gyakorlatilag nincs növényzet."},
        ],
        "ro": [
            {"q": "Este sigur aburul de la fumarole?", "a": "Aburul este în mare parte vapori de apă, dar conține gaze cu sulf; este sigur în aer liber, dar are un miros puternic."},
            {"q": "De ce este solul atât de colorat?", "a": "Culorile sunt cauzate de diverse depozite minerale, cum ar fi sulful (galben), gipsul (alb) și argila (gri)."},
            {"q": "Se poate merge oriunde în zonă?", "a": "Nu, vizitatorii trebuie să rămână pe potecile marcate pentru a evita căderea în noroiul fierbinte ascuns sau prin crusta subțire."},
            {"q": "Există plante în Hverir?", "a": "Practic nu există vegetație din cauza acidității ridicate a solului și a temperaturii."}
        ]
    },
    "nature-latrabjarg": {
        "en": [
            {"q": "What is the best time to see puffins at Látrabjarg?", "a": "Puffins are usually present from mid-May to mid-August."},
            {"q": "Is the cliff dangerous?", "a": "Yes, the edges can be unstable and the wind very strong; it is advised to lie on your stomach to look over the edge."},
            {"q": "How long is the hiking trail?", "a": "There is a path along the cliff edge that stretches for several kilometers with amazing views."},
            {"q": "Was there a famous rescue here?", "a": "In 1947, local farmers performed a heroic rescue of the crew of a wrecked British trawler below the cliffs."}
        ],
        "de": [
            {"q": "Wann ist die beste Zeit, um am Látrabjarg Papageitaucher zu sehen?", "a": "Papageitaucher sind normalerweise von Mitte Mai bis Mitte August anzutreffen."},
            {"q": "Ist die Klippe gefährlich?", "a": "Ja, die Kanten können instabil und der Wind sehr stark sein; es wird empfohlen, sich auf den Bauch zu legen, um über den Rand zu schauen."},
            {"q": "Wie lang ist der Wanderweg?", "a": "Es gibt einen Pfad entlang der Klippenkante, der sich über mehrere Kilometer erstreckt und fantastische Ausblicke bietet."},
            {"q": "Gab es hier eine berühmte Rettungsaktion?", "a": "Im Jahr 1947 führten einheimische Bauern eine heldenhafte Rettung der Besatzung eines unterhalb der Klippen verunglückten britischen Trawlers durch."}
        ],
        "hu": [
            {"q": "Mikor a legjobb lundákat nézni Látrabjargnál?", "a": "A lundák általában május közepétől augusztus közepéig vannak jelen."},
            {"q": "Veszélyes a sziklafal?", "a": "Igen, a szélek instabilak lehetnek és a szél nagyon erős; javasolt hason fekve kinézni a peremről."},
            {"q": "Milyen hosszú a túraútvonal?", "a": "A szikla peremén több kilométer hosszan fut egy ösvény, csodálatos kilátással."},
            {"q": "Volt itt valamilyen híres mentőakció?", "a": "1947-ben a helyi gazdák hősi mentést hajtottak végre egy brit vonóhálós hajó legénységén, amely a sziklák alatt szenvedett hajótörést."}
        ],
        "ro": [
            {"q": "Care este cel mai bun moment pentru a vedea pufini la Látrabjarg?", "a": "Pufinii sunt de obicei prezenți de la mijlocul lunii mai până la mijlocul lunii august."},
            {"q": "Este faleza periculoasă?", "a": "Da, marginile pot fi instabile și vântul foarte puternic; este recomandat să stați pe burtă pentru a privi peste margine."},
            {"q": "Cât de lung este traseul de drumeție?", "a": "Există o potecă de-a lungul marginii falezei care se întinde pe câțiva kilometri, cu priveliști uimitoare."},
            {"q": "A existat o salvare faimoasă aici?", "a": "În 1947, fermierii locali au efectuat o salvare eroică a echipajului unui trauler britanic naufragiat sub stânci."}
        ]
    },
    "nature-fjaðrárgljúfur": {
        "en": [
            {"q": "Is the canyon always open?", "a": "It is sometimes closed to visitors during the spring thaw to protect the fragile vegetation."},
            {"q": "How was the canyon formed?", "a": "It was carved by a glacial river over the course of about 2 million years."},
            {"q": "Are there walking paths at the canyon?", "a": "Yes, there is a well-maintained path along the top of the canyon with several observation platforms."},
            {"q": "Can you walk inside the canyon?", "a": "It is possible to walk at the base of the canyon, though it involves wading through the river in some spots."}
        ],
        "de": [
            {"q": "Ist der Canyon immer geöffnet?", "a": "Während der Schneeschmelze im Frühjahr ist er manchmal für Besucher gesperrt, um die empfindliche Vegetation zu schützen."},
            {"q": "Wie ist der Canyon entstanden?", "a": "Er wurde im Laufe von etwa 2 Millionen Jahren von einem Gletscherfluss ausgegraben."},
            {"q": "Gibt es am Canyon Wanderwege?", "a": "Ja, es gibt einen gut ausgebauten Pfad entlang der Oberseite des Canyons mit mehreren Aussichtsplattformen."},
            {"q": "Kann man im Inneren des Canyons spazieren gehen?", "a": "Es ist möglich, am Fuß des Canyons zu wandern, wobei man an einigen Stellen durch den Fluss waten muss."}
        ],
        "hu": [
            {"q": "A szurdok mindig nyitva van?", "a": "A tavaszi olvadás idején olykor lezárják a látogatók előtt a sérülékeny növényzet védelme érdekében."},
            {"q": "Hogyan alakult ki a szurdok?", "a": "Egy gleccserfolyó vájta ki körülbelül 2 millió év alatt."},
            {"q": "Vannak sétautak a szurdoknál?", "a": "Igen, a szurdok tetején jól karbantartott ösvény fut több kilátóterasszal."},
            {"q": "Lehet sétálni a szurdok belsejében?", "a": "Lehetséges a szurdok alján sétálni, bár ez néhol a folyón való átgázolást igényli."}
        ],
        "ro": [
            {"q": "Canionul este mereu deschis?", "a": "Este uneori închis vizitatorilor în timpul dezghețului de primăvară pentru a proteja vegetația fragilă."},
            {"q": "Cum s-a format canionul?", "a": "A fost săpat de un râu glaciar pe parcursul a aproximativ 2 milioane de ani."},
            {"q": "Există poteci de mers la canion?", "a": "Da, există o potecă bine întreținută de-a lungul vârfului canionului, cu mai multe platforme de observare."},
            {"q": "Se poate merge în interiorul canionului?", "a": "Este posibil să mergi la baza canionului, deși implică trecerea prin râu în unele locuri."}
        ]
    },
    "nature-viti": {
        "en": [
            {"q": "Is the water in Víti drinkable?", "a": "No, the water contains minerals and sulfur, making it unsuitable for drinking."},
            {"q": "What is the color of the water?", "a": "The water has a distinct opaque, milky-blue color."},
            {"q": "Is it difficult to get down to the water?", "a": "The path down the crater wall can be very slippery and steep, especially after rain."},
            {"q": "Is there another Víti in Iceland?", "a": "Yes, there is another well-known Víti crater in the Krafla volcanic area near Mývatn."}
        ],
        "de": [
            {"q": "Ist das Wasser im Víti trinkbar?", "a": "Nein, das Wasser enthält Mineralien und Schwefel und ist daher nicht zum Trinken geeignet."},
            {"q": "Welche Farbe hat das Wasser?", "a": "Das Wasser hat eine charakteristische undurchsichtige, milchig-blaue Farbe."},
            {"q": "Ist es schwierig, zum Wasser hinunterzukommen?", "a": "Der Pfad an der Kraterwand hinunter kann sehr rutschig und steil sein, besonders nach Regen."},
            {"q": "Gibt es ein weiteres Víti in Island?", "a": "Ja, es gibt einen weiteren bekannten Víti-Krater im Vulkangebiet Krafla in der Nähe von Mývatn."}
        ],
        "hu": [
            {"q": "Iható a Víti vize?", "a": "Nem, a víz ásványi anyagokat és ként tartalmaz, így ivásra nem alkalmas."},
            {"q": "Milyen színű a víz?", "a": "A víz jellegzetes átlátszatlan, tejszerű kék színű."},
            {"q": "Nehéz lejutni a vízhez?", "a": "A kráter falán levezető út nagyon csúszós és meredek lehet, különösen eső után."},
            {"q": "Van másik Víti Izlandon?", "a": "Igen, a Mývatn közeli Krafla vulkáni területen is található egy jól ismert Víti-kráter."}
        ],
        "ro": [
            {"q": "Este apa din Víti potabilă?", "a": "Nu, apa conține minerale și sulf, ceea ce o face improprie pentru băut."},
            {"q": "Care este culoarea apei?", "a": "Apa are o culoare distinctă, opacă, albastru-lăptos."},
            {"q": "Este dificil să cobori la apă?", "a": "Poteca de pe peretele craterului poate fi foarte alunecoasă și abruptă, mai ales după ploaie."},
            {"q": "Mai există un alt Víti în Islanda?", "a": "Da, mai există un crater Víti bine-cunoscut în zona vulcanică Krafla, lângă Mývatn."}
        ]
    },
    "nature-hvitserkur": {
        "en": [
            {"q": "What kind of birds nest on the rock?", "a": "Fulmars, gulls, and cormorants are commonly seen nesting on the rock's ledges."},
            {"q": "Is Hvítserkur visible at high tide?", "a": "Yes, it stands in the sea, but at low tide you can walk right out to it across the sand."},
            {"q": "Is the rock fragile?", "a": "The rock was being eroded by the sea, so the base was reinforced with concrete several decades ago."},
            {"q": "Where did the name come from?", "a": "The name means 'white shirt', referring to the white color from bird droppings covering the rock."}
        ],
        "de": [
            {"q": "Welche Vogelarten nisten auf dem Felsen?", "a": "Eissturmvögel, Möwen und Kormorane sind häufig auf den Felsvorsprüngen zu sehen."},
            {"q": "Ist der Hvítserkur bei Flut sichtbar?", "a": "Ja, er steht im Meer, aber bei Ebbe kann man über den Sand direkt zu ihm hinauslaufen."},
            {"q": "Ist der Felsen zerbrechlich?", "a": "Der Felsen wurde vom Meer erodiert, daher wurde das Fundament vor einigen Jahrzehnten mit Beton verstärkt."},
            {"q": "Woher stammt der Name?", "a": "Der Name bedeutet 'weißes Hemd' und bezieht sich auf die weiße Farbe des Vogelkots, der den Felsen bedeckt."}
        ],
        "hu": [
            {"q": "Milyen madarak fészkelnek a sziklán?", "a": "Viharmadarak, sirályok és kárókatonák gyakran láthatók a sziklapárkányokon."},
            {"q": "Látható a Hvítserkur dagálykor?", "a": "Igen, a tengerben áll, de apálykor a homokon keresztül közvetlenül oda lehet sétálni hozzá."},
            {"q": "Törékeny a szikla?", "a": "A sziklát erodálta a tenger, ezért az alapját néhány évtizeddel ezelőtt betonnal erősítették meg."},
            {"q": "Honnan ered a név?", "a": "A név 'fehér inget' jelent, ami a sziklát borító madárürülék fehér színére utal."}
        ],
        "ro": [
            {"q": "Ce fel de păsări cuibăresc pe stâncă?", "a": "Fulmarii, pescărușii și cormoranii sunt văzuți frecvent cuibărind pe marginile stâncii."},
            {"q": "Este Hvítserkur vizibil la flux?", "a": "Da, stă în mare, dar la reflux poți merge direct până la el pe nisip."},
            {"q": "Este stânca fragilă?", "a": "Stânca era erodată de mare, așa că baza a fost întărită cu beton acum câteva decenii."},
            {"q": "De unde vine numele?", "a": "Numele înseamnă „cămașă albă”, referindu-se la culoarea albă de la excrementele păsărilor care acoperă stânca."}
        ]
    },
    "nature-perlan": {
        "en": [
            {"q": "Is there a real ice cave in Perlan?", "a": "Yes, it houses the world's first indoor ice cave, made from 350 tons of snow and ice."},
            {"q": "Can you dine at Perlan?", "a": "Yes, there is a revolving restaurant under the glass dome providing 360-degree views."},
            {"q": "How many water tanks are there?", "a": "The building is built on top of six massive hot water tanks."},
            {"q": "Is the observation deck free?", "a": "No, there is an admission fee to access the 360-degree observation deck."}
        ],
        "de": [
            {"q": "Gibt es im Perlan eine echte Eishöhle?", "a": "Ja, es beherbergt die weltweit erste Indoor-Eishöhle, die aus 350 Tonnen Schnee und Eis besteht."},
            {"q": "Kann man im Perlan essen?", "a": "Ja, unter der Glaskuppel befindet sich ein Drehrestaurant, das einen 360-Grad-Blick bietet."},
            {"q": "Wie viele Wassertanks gibt es?", "a": "Das Gebäude wurde auf sechs riesigen Warmwasserspeichern errichtet."},
            {"q": "Ist die Aussichtsplattform kostenlos?", "a": "Nein, für den Zugang zur 360-Grad-Aussichtsplattform wird eine Eintrittsgebühr erhoben."}
        ],
        "hu": [
            {"q": "Van valódi jégbarlang a Perlanban?", "a": "Igen, itt található a világ első beltéri jégbarlangja, amely 350 tonna hóból és jégből készült."},
            {"q": "Lehet étkezni a Perlanban?", "a": "Igen, az üvegkupola alatt egy forgó étterem található, amely 360 fokos kilátást biztosít."},
            {"q": "Hány víztartály van ott?", "a": "Az épület hat hatalmas melegvíz-tartály tetejére épült."},
            {"q": "Ingyenes a kilátóterasz?", "a": "Nem, a 360 fokos kilátóteraszra belépődíjat kell fizetni."}
        ],
        "ro": [
            {"q": "Există o peșteră de gheață reală în Perlan?", "a": "Da, găzduiește prima peșteră de gheață interioară din lume, realizată din 350 de tone de zăpadă și gheață."},
            {"q": "Se poate lua masa la Perlan?", "a": "Da, există un restaurant rotativ sub cupola de sticlă care oferă vederi de 360 de grade."},
            {"q": "Câte rezervoare de apă sunt?", "a": "Clădirea este construită deasupra a șase rezervoare masive de apă caldă."},
            {"q": "Este platforma de observare gratuită?", "a": "Nu, există o taxă de intrare pentru a accesa platforma de observare la 360 de grade."}
        ]
    },
    "hist-althingi": {
        "en": [
            {"q": "Who attended the Althingi?", "a": "It was attended by powerful chieftains (goðar) and free men from all over Iceland."},
            {"q": "How long did the sessions last?", "a": "The assembly usually lasted for two weeks each summer in June."},
            {"q": "What was the role of the Lawspeaker?", "a": "The Lawspeaker had to memorize and recite one-third of the laws each year to the assembly."},
            {"q": "When did the parliament move to Reykjavík?", "a": "The modern Althingi was re-established in Reykjavík in 1845."}
        ],
        "de": [
            {"q": "Wer nahm am Althingi teil?", "a": "Es wurde von mächtigen Häuptlingen (goðar) und freien Männern aus ganz Island besucht."},
            {"q": "Wie lange dauerten die Sitzungen?", "a": "Die Versammlung dauerte in der Regel zwei Wochen in jedem Juni."},
            {"q": "Welche Rolle hatte der Gesetzessprecher?", "a": "Der Gesetzessprecher musste jedes Jahr ein Drittel der Gesetze auswendig lernen und vor der Versammlung vortragen."},
            {"q": "Wann zog das Parlament nach Reykjavík um?", "a": "Das moderne Althingi wurde 1845 in Reykjavík wiederbegründet."}
        ],
        "hu": [
            {"q": "Kik vettek részt az Althingin?", "a": "Hatalmas főnökök (goðar) és szabad emberek vettek részt rajta Izland egész területéről."},
            {"q": "Milyen hosszúak voltak az ülések?", "a": "A gyűlés általában két hétig tartott minden nyáron, júniusban."},
            {"q": "Mi volt a törvénymondó szerepe?", "a": "A törvénymondónak minden évben a törvények egyharmadát fejből kellett elszavalnia a gyűlés előtt."},
            {"q": "Mikor költözött a parlament Reykjavíkba?", "a": "A modern Althingit 1845-ben állították fel újra Reykjavíkban."}
        ],
        "ro": [
            {"q": "Cine participa la Althingi?", "a": "Participau căpetenii puternice (goðar) și bărbați liberi din toată Islanda."},
            {"q": "Cât timp durau sesiunile?", "a": "Adunarea dura de obicei două săptămâni în fiecare vară, în luna iunie."},
            {"q": "Care era rolul Legiuitorului?", "a": "Legiuitorul trebuia să memoreze și să recite o treime din legi în fiecare an în fața adunării."},
            {"q": "Când s-a mutat parlamentul la Reykjavík?", "a": "Modernul Althingi a fost reînființat la Reykjavík în 1845."}
        ]
    },
    "hist-skalholt": {
        "en": [
            {"q": "How many bishops served at Skálholt?", "a": "Skálholt served as a bishopric for over 700 years, with 31 Catholic and 13 Protestant bishops."},
            {"q": "Was there a cathedral here in medieval times?", "a": "Yes, several large wooden cathedrals were built here, one of which was once the largest in the Nordic countries."},
            {"q": "What is the Skálholt Map?", "a": "A famous 16th-century map that shows the North Atlantic and parts of North America (Vinland)."},
            {"q": "Is the current church historic?", "a": "The current Skálholt Cathedral was completed in 1963 and is known for its modern stained glass."}
        ],
        "de": [
            {"q": "Wie viele Bischöfe dienten in Skálholt?", "a": "Skálholt diente über 700 Jahre lang als Bistum, mit 31 katholischen und 13 protestantischen Bischöfen."},
            {"q": "Gab es hier im Mittelalter eine Kathedrale?", "a": "Ja, hier wurden mehrere große Holzkirchen gebaut, von denen eine einst die größte in den nordischen Ländern war."},
            {"q": "Was ist die Skálholt-Karte?", "a": "Eine berühmte Karte aus dem 16. Jahrhundert, die den Nordatlantik und Teile Nordamerikas (Vinland) zeigt."},
            {"q": "Ist die heutige Kirche historisch?", "a": "Die heutige Kathedrale von Skálholt wurde 1963 fertiggestellt und ist für ihre modernen Glasmalereien bekannt."}
        ],
        "hu": [
            {"q": "Hány püspök szolgált Skálholtban?", "a": "Skálholt több mint 700 évig volt püspöki székhely, 31 katolikus és 13 protestáns püspökkel."},
            {"q": "Állt itt katedrális a középkorban?", "a": "Igen, több nagy fatemplom is épült itt, melyek egyike egykor a legnagyobb volt az északi országokban."},
            {"q": "Mi az a Skálholt-térkép?", "a": "Egy híres 16. századi térkép, amely az Észak-Atlanti-óceánt és Észak-Amerika részeit (Vinland) ábrázolja."},
            {"q": "Történelmi a jelenlegi templom?", "a": "A jelenlegi skálholti katedrális 1963-ban készült el, és modern ólvegablakairól ismert."}
        ],
        "ro": [
            {"q": "Câți episcopi au slujit la Skálholt?", "a": "Skálholt a servit ca episcopie timp de peste 700 de ani, cu 31 de episcopi catolici și 13 protestanți."},
            {"q": "A existat o catedrală aici în epoca medie?", "a": "Da, aici au fost construite mai multe catedrale mari din lemn, una dintre ele fiind cândva cea mai mare din țările nordice."},
            {"q": "Ce este Harta Skálholt?", "a": "O hartă faimoasă din secolul al XVI-lea care arată Atlanticul de Nord și părți din America de Nord (Vinland)."},
            {"q": "Este biserica actuală istorică?", "a": "Catedrala actuală din Skálholt a fost finalizată în 1963 și este cunoscută pentru vitraliile sale moderne."}
        ]
    },
    "hist-hofsstadir": {
        "en": [
            {"q": "When was the Hofstaðir longhouse built?", "a": "It dates back to the Viking Age, around the 10th century."},
            {"q": "How big was the longhouse?", "a": "It was about 38 meters long, making it one of the largest in Iceland."},
            {"q": "Were there religious activities at the site?", "a": "Evidence suggests it was a high-status farmstead where ritual feasting likely took place."},
            {"q": "Is the site open to the public?", "a": "Yes, it is an open archaeological site with informative signage for visitors."}
        ],
        "de": [
            {"q": "Wann wurde das Langhaus von Hofstaðir gebaut?", "a": "Es stammt aus der Wikingerzeit, etwa aus dem 10. Jahrhundert."},
            {"q": "Wie groß war das Langhaus?", "a": "Es war etwa 38 Meter lang und damit eines der größten in Island."},
            {"q": "Gab es religiöse Aktivitäten an diesem Ort?", "a": "Es gibt Hinweise darauf, dass es sich um einen hochrangigen Bauernhof handelte, auf dem wahrscheinlich rituelle Feste stattfanden."},
            {"q": "Ist die Stätte für die Öffentlichkeit zugänglich?", "a": "Ja, es ist eine offene archäologische Stätte mit Informationstafeln für Besucher."}
        ],
        "hu": [
            {"q": "Mikor épült a hofstaðiri hosszúház?", "a": "A viking korból származik, körülbelül a 10. századból."},
            {"q": "Milyen nagy volt a hosszúház?", "a": "Körülbelül 38 méter hosszú volt, ami az egyik legnagyobbá tette Izlandon."},
            {"q": "Voltak vallási tevékenységek a helyszínen?", "a": "A bizonyítékok szerint ez egy magas rangú gazdaság volt, ahol valószínűleg rituális lakomákat tartottak."},
            {"q": "Látogatható a helyszín?", "a": "Igen, ez egy nyitott régészeti lelőhely tájékoztató táblákkal a látogatók számára."}
        ],
        "ro": [
            {"q": "Când a fost construită casa lungă de la Hofstaðir?", "a": "Datează din Epoca Vikingă, în jurul secolului al X-lea."},
            {"q": "Cât de mare era casa lungă?", "a": "Avea aproximativ 38 de metri lungime, fiind una dintre cele mai mari din Islanda."},
            {"q": "Au existat activități religioase la sit?", "a": "Dovezile sugerează că a fost o fermă de rang înalt unde probabil aveau loc ospețe ritualice."},
            {"q": "Este situl deschis publicului?", "a": "Da, este un sit arheologic deschis cu panouri informative pentru vizitatori."}
        ]
    },
    "hist-glaumbaer": {
        "en": [
            {"q": "What are turf houses made of?", "a": "They are built with thick walls of cut turf (sod) and stones for insulation against the cold."},
            {"q": "How long was the farm inhabited?", "a": "The farm at Glaumbær was inhabited until 1947, when it was turned into a museum."},
            {"q": "Is the farmhouse one large room?", "a": "No, it consists of several interconnected smaller buildings and rooms for different purposes."},
            {"q": "Are there other buildings at the site?", "a": "Yes, there are also two 19th-century timber houses and a church nearby."}
        ],
        "de": [
            {"q": "Woraus bestehen Torfhäuser?", "a": "Sie sind mit dicken Wänden aus gestochenem Torf und Steinen gebaut, um gegen die Kälte zu isolieren."},
            {"q": "Wie lange war der Hof bewohnt?", "a": "Der Hof in Glaumbær war bis 1947 bewohnt, als er in ein Museum umgewandelt wurde."},
            {"q": "Besteht das Bauernhaus aus einem einzigen großen Raum?", "a": "Nein, es besteht aus mehreren miteinander verbundenen kleineren Gebäuden und Räumen für verschiedene Zwecke."},
            {"q": "Gibt es weitere Gebäude an dem Ort?", "a": "Ja, in der Nähe befinden sich auch zwei Holzhäuser aus dem 19. Jahrhundert und eine Kirche."}
        ],
        "hu": [
            {"q": "Miből készülnek a tőzegmohás házak?", "a": "Vastag tőzegtégla falakból és kövekből épülnek a hideg elleni szigetelés érdekében."},
            {"q": "Meddig volt lakott a gazdaság?", "a": "A glaumbæri gazdaságot 1947-ig lakták, ekkor alakították múzeummá."},
            {"q": "A parasztház egyetlen nagy helyiségből áll?", "a": "Nem, több összekapcsolt kisebb épületből és különféle célú helyiségből áll."},
            {"q": "Vannak más épületek is a helyszínen?", "a": "Igen, két 19. századi faház és egy templom is található a közelben."}
        ],
        "ro": [
            {"q": "Din ce sunt făcute casele de turbă?", "a": "Sunt construite cu pereți groși din turbă tăiată și pietre pentru izolare împotriva frigului."},
            {"q": "Cât timp a fost locuită ferma?", "a": "Ferma de la Glaumbær a fost locuită până în 1947, când a fost transformată în muzeu."},
            {"q": "Este casa fermei o singură cameră mare?", "a": "Nu, constă în mai multe clădiri mici și camere interconectate pentru scopuri diferite."},
            {"q": "Există și alte clădiri în sit?", "a": "Da, există și două case din lemn din secolul al XIX-lea și o biserică în apropiere."}
        ]
    },
    "hist-videy": {
        "en": [
            {"q": "How do you get to Viðey?", "a": "The island is accessible by a short ferry ride from Reykjavík's Old Harbor or Skarfabakki pier."},
            {"q": "Who designed Viðeyjarstofa?", "a": "It was designed by the Danish royal architect Nicolai Eigtved and built in 1755."},
            {"q": "What is the Imagine Peace Tower?", "a": "A memorial to John Lennon from Yoko Ono, which beams a strong light into the sky on specific dates."},
            {"q": "Can you rent bikes on the island?", "a": "Yes, bike rentals are available during the summer months to explore the island's trails."}
        ],
        "de": [
            {"q": "Wie kommt man nach Viðey?", "a": "Die Insel ist mit einer kurzen Fährfahrt vom Alten Hafen in Reykjavík oder vom Skarfabakki-Pier aus erreichbar."},
            {"q": "Wer hat Viðeyjarstofa entworfen?", "a": "Es wurde vom dänischen Hofarchitekten Nicolai Eigtved entworfen und 1755 erbaut."},
            {"q": "Was ist der Imagine Peace Tower?", "a": "Ein Denkmal für John Lennon von Yoko Ono, das an bestimmten Tagen ein starkes Licht in den Himmel strahlt."},
            {"q": "Kann man auf der Insel Fahrräder mieten?", "a": "Ja, in den Sommermonaten gibt es einen Fahrradverleih, um die Wege der Insel zu erkunden."}
        ],
        "hu": [
            {"q": "Hogyan lehet eljutni Viðey-re?", "a": "A sziget rövid kompjárattal érhető el Reykjavík régi kikötőjéből vagy a Skarfabakki mólótól."},
            {"q": "Ki tervezte a Viðeyjarstofa-t?", "a": "Nicolai Eigtved dán királyi építész tervezte, és 1755-ben épült."},
            {"q": "Mi az az Imagine Peace Tower?", "a": "Yoko Ono emlékműve John Lennonnak, amely meghatározott időpontokban erős fényt bocsát az ég felé."},
            {"q": "Lehet kerékpárt bérelni a szigeten?", "a": "Igen, a nyári hónapokban kerékpárbérlésre is van lehetőség a sziget ösvényeinek felfedezéséhez."}
        ],
        "ro": [
            {"q": "Cum se ajunge la Viðey?", "a": "Insula este accesibilă printr-o scurtă plimbare cu feribotul din Portul Vechi al Reykjavíkului sau de la debarcaderul Skarfabakki."},
            {"q": "Cine a proiectat Viðeyjarstofa?", "a": "A fost proiectată de arhitectul regal danez Nicolai Eigtved și construită în 1755."},
            {"q": "Ce este Turnul Imagine Peace?", "a": "Un memorial pentru John Lennon de la Yoko Ono, care proiectează o lumină puternică spre cer în date specifice."},
            {"q": "Se pot închiria biciclete pe insulă?", "a": "Da, închirierile de biciclete sunt disponibile în lunile de vară pentru a explora traseele insulei."}
        ]
    },
    "cult-hallgrimskirkja": {
        "en": [
            {"q": "How long did it take to build the church?", "a": "Construction began in 1945 and was completed in 1986, taking 41 years."},
            {"q": "Is there an organ in the church?", "a": "Yes, it houses a massive pipe organ with 5,275 pipes, standing 15 meters tall."},
            {"q": "Can you go to the top of the tower?", "a": "Yes, there is an elevator that takes visitors to the observation deck for city views."},
            {"q": "Who is the statue in front of the church?", "a": "The statue depicts Leif Erikson, the Norse explorer who is said to have reached North America."}
        ],
        "de": [
            {"q": "Wie lange hat der Bau der Kirche gedauert?", "a": "Der Bau begann 1945 und wurde 1986 abgeschlossen, dauerte also 41 Jahre."},
            {"q": "Gibt es eine Orgel in der Kirche?", "a": "Ja, sie beherbergt eine riesige Pfeifenorgel mit 5.275 Pfeifen und einer Höhe von 15 Metern."},
            {"q": "Kann man auf die Turmspitze steigen?", "a": "Ja, es gibt einen Aufzug, der Besucher zur Aussichtsplattform bringt, von der man die Stadt überblicken kann."},
            {"q": "Wer ist die Statue vor der Kirche?", "a": "Die Statue zeigt Leif Erikson, den nordischen Entdecker, von dem man sagt, dass er Nordamerika erreicht hat."}
        ],
        "hu": [
            {"q": "Meddig tartott a templom felépítése?", "a": "Az építkezés 1945-ben kezdődött és 1986-ban fejeződött be, tehát 41 évig tartott."},
            {"q": "Van orgona a templomban?", "a": "Igen, egy hatalmas, 5275 sípos orgonának ad otthont, amely 15 méter magas."},
            {"q": "Fel lehet menni a torony tetejére?", "a": "Igen, lift viszi fel a látogatókat a kilátóba, ahonnan remek rálátás nyílik a városra."},
            {"q": "Ki látható a templom előtti szobron?", "a": "A szobor Leif Erikson-t, a skandináv felfedezőt ábrázolja, aki állítólag elérte Észak-Amerikát."}
        ],
        "ro": [
            {"q": "Cât a durat construcția bisericii?", "a": "Construcția a început în 1945 și a fost finalizată în 1986, durând 41 de ani."},
            {"q": "Există o orgă în biserică?", "a": "Da, găzduiește o orgă masivă cu 5.275 de tuburi, având o înălțime de 15 metri."},
            {"q": "Se poate urca în vârful turnului?", "a": "Da, există un lift care duce vizitatorii la platforma de observare pentru priveliști asupra orașului."},
            {"q": "Cine este în statuia din fața bisericii?", "a": "Statuia îl înfățișează pe Leif Erikson, exploratorul nordic despre care se spune că a ajuns în America de Nord."}
        ]
    },
    "cult-harpa": {
        "en": [
            {"q": "What is the meaning of the name 'Harpa'?", "a": "Harpa is an Old Icelandic name for a month in the spring and also means 'harp'."},
            {"q": "Is Harpa award-winning?", "a": "Yes, it won the Mies van der Rohe Award for contemporary architecture in 2013."},
            {"q": "Are there restaurants inside Harpa?", "a": "Yes, there are several cafes and a high-end restaurant with harbor views."},
            {"q": "Does the facade change colors?", "a": "Yes, the LED lights in the glass facade can be programmed to display various colors and patterns."}
        ],
        "de": [
            {"q": "Was bedeutet der Name 'Harpa'?", "a": "Harpa ist ein altisländischer Name für einen Frühlingsmonat und bedeutet auch 'Harfe'."},
            {"q": "Wurde Harpa ausgezeichnet?", "a": "Ja, sie gewann 2013 den Mies-van-der-Rohe-Preis für zeitgenössische Architektur."},
            {"q": "Gibt es Restaurants im Harpa?", "a": "Ja, es gibt mehrere Cafés und ein gehobenes Restaurant mit Blick auf den Hafen."},
            {"q": "Wechselt die Fassade ihre Farbe?", "a": "Ja, die LED-Leuchten in der Glasfassade können so programmiert werden, dass sie verschiedene Farben und Muster anzeigen."}
        ],
        "hu": [
            {"q": "Mit jelent a 'Harpa' név?", "a": "A Harpa egy régi izlandi név egy tavaszi hónapra, és 'hárfát' is jelent."},
            {"q": "Kapott a Harpa építészeti díjat?", "a": "Igen, 2013-ban elnyerte a Mies van der Rohe-díjat a kortárs építészetért."},
            {"q": "Vannak éttermek a Harpán belül?", "a": "Igen, több kávézó és egy nívós étterem is található benne, kilátással a kikötőre."},
            {"q": "Változtatja a színét a homlokzat?", "a": "Igen, az üveghomlokzat LED-lámpái programozhatók különféle színek és minták megjelenítésére."}
        ],
        "ro": [
            {"q": "Ce înseamnă numele „Harpa”?", "a": "Harpa este un nume vechi islandez pentru o lună de primăvară și înseamnă, de asemenea, „harpă”."},
            {"q": "Este Harpa premiată?", "a": "Da, a câștigat Premiul Mies van der Rohe pentru arhitectură contemporană în 2013."},
            {"q": "Există restaurante în interiorul Harpa?", "a": "Da, există mai multe cafenele și un restaurant de lux cu vedere la port."},
            {"q": "Își schimbă fațada culorile?", "a": "Da, luminile LED din fațada de sticlă pot fi programate pentru a afișa diverse culori și modele."}
        ]
    },
    "cult-blue-lagoon": {
        "en": [
            {"q": "What is the temperature of the water?", "a": "The water temperature is consistently between 37 and 40°C (98-104°F)."},
            {"q": "Is the silica mud beneficial for the skin?", "a": "Yes, it is known for helping with various skin conditions and deep cleansing."},
            {"q": "How often is the water renewed?", "a": "The water in the lagoon is completely renewed every 48 hours."},
            {"q": "Do I need to book in advance?", "a": "Yes, pre-booking is required as the lagoon is very popular and has limited capacity."}
        ],
        "de": [
            {"q": "Wie hoch ist die Wassertemperatur?", "a": "Die Wassertemperatur liegt konstant zwischen 37 und 40 °C."},
            {"q": "Ist der Kieselerde-Schlamm gut für die Haut?", "a": "Ja, er ist dafür bekannt, bei verschiedenen Hautproblemen zu helfen und die Haut tiefenwirksam zu reinigen."},
            {"q": "Wie oft wird das Wasser erneuert?", "a": "Das Wasser in der Lagune wird alle 48 Stunden vollständig erneuert."},
            {"q": "Muss ich im Voraus buchen?", "a": "Ja, eine Vorabbuchung ist erforderlich, da die Lagune sehr beliebt ist und nur begrenzte Kapazitäten hat."}
        ],
        "hu": [
            {"q": "Milyen a víz hőmérséklete?", "a": "A víz hőmérséklete folyamatosan 37 és 40°C között van."},
            {"q": "Jót tesz a bőrnek a kova-iszap?", "a": "Igen, ismert arról, hogy segít különféle bőrbetegségeken és mélytisztító hatású."},
            {"q": "Milyen gyakran cserélődik a víz?", "a": "A lagúna vize 48 óránként teljesen kicserélődik."},
            {"q": "Kell előre foglalni?", "a": "Igen, előzetes foglalás szükséges, mivel a lagúna nagyon népszerű és korlátozott a befogadóképessége."}
        ],
        "ro": [
            {"q": "Care este temperatura apei?", "a": "Temperatura apei este constant între 37 și 40°C."},
            {"q": "Este nămolul cu siliciu benefic pentru piele?", "a": "Da, este cunoscut pentru ajutorul acordat în diverse afecțiuni ale pielii și pentru curățarea profundă."},
            {"q": "Cât de des se reînnoiește apa?", "a": "Apa din lagună se reînnoiește complet la fiecare 48 de ore."},
            {"q": "Trebuie să fac rezervare în avans?", "a": "Da, rezervarea prealabilă este necesară, deoarece laguna este foarte populară și are capacitate limitată."}
        ]
    }
}

# Function to format the FAQ dictionary as a TS string
def format_faq(poi_id):
    if poi_id not in faq_data:
        return ""
    data = faq_data[poi_id]
    
    lines = ["    faq: {"]
    for lang in ["de", "hu", "ro", "en"]:
        lines.append(f"      {lang}: [")
        for item in data[lang]:
            q = item['q'].replace("'", "\\'")
            a = item['a'].replace("'", "\\'")
            lines.append(f"        {{ q: '{q}', a: '{a}' }},")
        lines.append("      ],")
    lines.append("    },")
    return "\n".join(lines)

# Regex to find POI objects and insert faq before image
# Pattern looks for an id, then everything until image:
pattern = re.compile(r'(id:\s*"(.*?)",.*?)(image:)', re.DOTALL)

def replacement_func(match):
    full_before = match.group(1)
    poi_id = match.group(2)
    image_part = match.group(3)
    
    faq_str = format_faq(poi_id)
    if faq_str:
        return f"{full_before}{faq_str}\n  {image_part}"
    else:
        return match.group(0)

new_content = pattern.sub(replacement_func, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated icelandPoi.ts with FAQ data.")
