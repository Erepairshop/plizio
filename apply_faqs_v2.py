
import re
import json

file_path = r'C:\Users\User\plizio-repo\lib\visualLab\data\francePoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

faqs = {
    "loire-chateaux": {
        "de": [
            {"q": "Welches ist das größte Schloss im Loiretal?", "a": "Das Schloss Chambord ist mit seinen 440 Zimmern das größte und eines der bekanntesten Schlösser der Region."},
            {"q": "Warum wird das Loiretal als 'Garten Frankreichs' bezeichnet?", "a": "Wegen der fruchtbaren Böden, der zahlreichen Obstgärten, Weinberge und natürlich der prächtigen Schlossgärten."},
            {"q": "Was ist das Besondere am Schloss Villandry?", "a": "Es ist weltberühmt für seine Renaissance-Gärten, insbesondere den kunstvoll angelegten Gemüsegarten."},
            {"q": "Welche architektonische Epoche prägt die meisten Loire-Schlösser?", "a": "Die meisten Schlösser stammen aus der Renaissance, als die französischen Könige ihre Residenzen von Paris ins Loiretal verlegten."},
            {"q": "Wie weit ist das Loiretal von Paris entfernt?", "a": "Die Region beginnt etwa 100 bis 150 Kilometer südlich von Paris und ist ideal für Tages- oder Wochenendausflüge."}
        ],
        "hu": [
            {"q": "Melyik a legnagyobb kastély a Loire-völgyben?", "a": "A Chambord-i kastély a maga 440 szobájával a régió legnagyobb és egyik legismertebb kastélya."},
            {"q": "Miért nevezik a Loire-völgyet 'Franciaország kertjének'?", "a": "A termékeny talaj, a számos gyümölcsös, szőlőültetvény és természetesen a pompás kastélykertek miatt."},
            {"q": "Mi a különleges a Villandry-kastélyban?", "a": "Világhírű reneszánsz kertjeiről, különösen a művészien kialakított konyhakertjéről ismert."},
            {"q": "Melyik építészeti korszak határozza meg leginkább a Loire-menti kastélyokat?", "a": "A legtöbb kastély a reneszánsz idejéből származik, amikor a francia királyok Párizsból a Loire-völgybe helyezték át székhelyüket."},
            {"q": "Milyen messze van a Loire-völgy Párizstól?", "a": "A régió körülbelül 100-150 kilométerre délre kezdődik Párizstól, így ideális egynapos vagy hétvégi kirándulásokhoz."}
        ],
        "ro": [
            {"q": "Care este cel mai mare castel din Valea Loarei?", "a": "Castelul Chambord, cu cele 440 de camere ale sale, este cel mai mare și unul dintre cele mai cunoscute castele din regiune."},
            {"q": "De ce este Valea Loarei numită „Grădina Franței”?", "a": "Datorită solurilor fertile, numeroaselor livezi, podgorii și, desigur, grădinilor magnifice ale castelelor."},
            {"q": "Ce este special la Castelul Villandry?", "a": "Este renumit la nivel mondial pentru grădinile sale renascentiste, în special pentru grădina de legume amenajată artistic."},
            {"q": "Ce epocă arhitecturală domină majoritatea castelelor de pe Loara?", "a": "Majoritatea castelelor datează din perioada Renașterii, când regii Franței și-au mutat reședințele de la Paris în Valea Loarei."},
            {"q": "Cât de departe este Valea Loarei de Paris?", "a": "Regiunea începe la aproximativ 100-150 de kilometri sud de Paris și este ideală pentru excursii de o zi sau de weekend."}
        ],
        "en": [
            {"q": "Which is the largest castle in the Loire Valley?", "a": "The Château de Chambord is the largest and one of the most famous castles in the region, featuring 440 rooms."},
            {"q": "Why is the Loire Valley called the 'Garden of France'?", "a": "Because of its fertile soil, numerous orchards, vineyards, and of course, the magnificent castle gardens."},
            {"q": "What is special about the Château de Villandry?", "a": "It is world-famous for its Renaissance gardens, particularly its elaborately designed decorative vegetable garden."},
            {"q": "Which architectural period defines most Loire castles?", "a": "Most of the castles date from the Renaissance, when the French kings moved their residences from Paris to the Loire Valley."},
            {"q": "How far is the Loire Valley from Paris?", "a": "The region begins about 100 to 150 kilometers south of Paris, making it ideal for day trips or weekend getaways."}
        ]
    },
    "cannes": {
        "de": [
            {"q": "Wann findet das Filmfestival von Cannes normalerweise statt?", "a": "Das Festival findet jedes Jahr im Mai statt und dauert etwa zwei Wochen."},
            {"q": "Was ist die 'Palme d'Or'?", "a": "Die Goldene Palme ist der Hauptpreis des Filmfestivals von Cannes und wird für den besten Film des Wettbewerbs verliehen."},
            {"q": "Kann man die Strände in Cannes besuchen?", "a": "Ja, es gibt sowohl exklusive Privatstrände der Hotels als auch öffentliche Abschnitte für jedermann."},
            {"q": "Was ist der 'Marché Forville'?", "a": "Ein berühmter überdachter Markt in Cannes, auf dem man frische lokale Produkte, Fisch und Blumen kaufen kann."},
            {"q": "Was sind die 'Îles de Lérins'?", "a": "Zwei kleine Inseln direkt vor der Küste von Cannes, die Ruhe und Natur abseits des Trubels bieten."}
        ],
        "hu": [
            {"q": "Mikor szokták megrendezni a Cannes-i Filmfesztivált?", "a": "A fesztivált minden év májusában rendezik meg, és körülbelül két hétig tart."},
            {"q": "Mi az a 'Palme d'Or'?", "a": "Az Arany Pálma a Cannes-i Filmfesztivál fődíja, amelyet a versenyprogram legjobb filmjének ítélnek oda."},
            {"q": "Látogathatók Cannes strandjai?", "a": "Igen, léteznek exkluzív szállodai magánstrandok és bárki számára nyitott nyilvános szakaszok is."},
            {"q": "Mi az a 'Marché Forville'?", "a": "Egy híres fedett piac Cannes-ban, ahol friss helyi termékeket, halat és virágot lehet vásárolni."},
            {"q": "Mik azok az 'Îles de Lérins' szigetek?", "a": "Két kis sziget közvetlenül Cannes partjainál, amelyek nyugalmat és természetet kínálnak a nyüzsgéstől távol."}
        ],
        "ro": [
            {"q": "Când are loc de obicei Festivalul de Film de la Cannes?", "a": "Festivalul are loc în fiecare an în luna mai și durează aproximativ două săptămâni."},
            {"q": "Ce este „Palme d'Or”?", "a": "Palmul de Aur este premiul principal al Festivalului de Film de la Cannes și este acordat celui mai bun film din competiție."},
            {"q": "Pot fi vizitate plajele din Cannes?", "a": "Da, există atât plaje private exclusive ale hotelurilor, cât și secțiuni publice pentru toată lumea."},
            {"q": "Ce este „Marché Forville”?", "a": "O piață acoperită celebră din Cannes, de unde se pot cumpăra produse locale proaspete, pește și flori."},
            {"q": "Ce sunt „Îles de Lérins”?", "a": "Două insule mici chiar în largul coastei orașului Cannes, care oferă liniște și natură departe de agitație."}
        ],
        "en": [
            {"q": "When does the Cannes Film Festival usually take place?", "a": "The festival is held every year in May and lasts for about two weeks."},
            {"q": "What is the 'Palme d'Or'?", "a": "The Palme d'Or (Golden Palm) is the highest prize awarded at the Cannes Film Festival for the best film in the competition."},
            {"q": "Can you visit the beaches in Cannes?", "a": "Yes, there are both exclusive private beaches belonging to hotels and public sections open to everyone."},
            {"q": "What is the 'Marché Forville'?", "a": "A famous covered market in Cannes where you can buy fresh local produce, fish, and flowers."},
            {"q": "What are the 'Îles de Lérins'?", "a": "Two small islands just off the coast of Cannes that offer peace and nature away from the hustle and bustle."}
        ]
    },
    "french-alps": {
        "de": [
            {"q": "Welches ist die bekannteste Stadt für Bergsport in den französischen Alpen?", "a": "Chamonix-Mont-Blanc gilt als das Welthauptquartier des Alpinismus und war Austragungsort der ersten Winterolympiade."},
            {"q": "Wie heißt der größte See in den französischen Alpen?", "a": "Der Lac du Bourget ist der größte natürliche See Frankreichs, während der Genfersee (Lac Léman) an die Region grenzt."},
            {"q": "Kann man in den französischen Alpen auch im Sommer Urlaub machen?", "a": "Absolut, die Region ist im Sommer ideal zum Wandern, Mountainbiken, Paragliding und für Wassersport an den Seen."},
            {"q": "Was ist das 'Vanoise'-Massiv?", "a": "Ein beeindruckendes Gebirgsmassiv und das Herzstück des ersten Nationalparks Frankreichs, bekannt für seine Steinböcke."},
            {"q": "Welche kulinarische Spezialität ist in der Alpenregion beliebt?", "a": "Gerichte mit geschmolzenem Käse wie Fondue Savoyarde, Raclette und Tartiflette sind sehr typisch."}
        ],
        "hu": [
            {"q": "Melyik a leghíresebb hegyi sportváros a francia Alpokban?", "a": "Chamonix-Mont-Blanc az alpinizmus világközpontjának számít, és itt rendezték az első téli olimpiát is."},
            {"q": "Hogy hívják a francia Alpok legnagyobb tavát?", "a": "A Lac du Bourget Franciaország legnagyobb természetes tava, míg a Genfi-tó (Lac Léman) a régióval határos."},
            {"q": "Lehet-nyáron is nyaralni a francia Alpokban?", "a": "Természetesen, a régió nyáron ideális túrázásra, hegyi kerékpározásra, siklóernyőzésre és vízi sportokra a tavakon."},
            {"q": "Mi az a 'Vanoise'-masszívum?", "a": "Egy lenyűgöző hegymasszívum és Franciaország első nemzeti parkjának szíve, amely kőszáli kecskéiről ismert."},
            {"q": "Milyen kulináris különlegesség népszerű az alpesi régióban?", "a": "Nagyon jellemzőek az olvasztott sajttal készült ételek, mint a Fondue Savoyarde, a Raclette és a Tartiflette."}
        ],
        "ro": [
            {"q": "Care este cel mai faimos oraș pentru sporturi montane din Alpii Francezi?", "a": "Chamonix-Mont-Blanc este considerat sediul mondial al alpinismului și a fost gazda primei Olimpiade de iarnă."},
            {"q": "Cum se numește cel mai mare lac din Alpii Francezi?", "a": "Lac du Bourget este cel mai mare lac natural din Franța, în timp ce lacul Geneva (Lac Léman) se învecinează cu regiunea."},
            {"q": "Se poate merge în vacanță în Alpii Francezi și vara?", "a": "Absolut, regiunea este ideală vara pentru drumeții, mountain biking, parapantă și sporturi nautice pe lacuri."},
            {"q": "Ce este masivul „Vanoise”?", "a": "Un masiv muntos impresionant și nucleul primului parc național din Franța, cunoscut pentru caprele sale negre."},
            {"q": "Ce specialitate culinară este populară în regiunea alpină?", "a": "Preparatele cu brânză topită, cum ar fi Fondue Savoyarde, Raclette și Tartiflette, sunt foarte tipice."}
        ],
        "en": [
            {"q": "Which is the most famous town for mountain sports in the French Alps?", "a": "Chamonix-Mont-Blanc is considered the world capital of mountaineering and was the host of the first Winter Olympics."},
            {"q": "What is the largest lake in the French Alps?", "a": "Lac du Bourget is the largest natural lake in France, while Lake Geneva (Lac Léman) borders the region."},
            {"q": "Can you also vacation in the French Alps during the summer?", "a": "Absolutely, the region is ideal in summer for hiking, mountain biking, paragliding, and water sports on the lakes."},
            {"q": "What is the 'Vanoise' massif?", "a": "An impressive mountain massif and the heart of France's first national park, famous for its Alpine ibex."},
            {"q": "Which culinary specialty is popular in the Alpine region?", "a": "Dishes featuring melted cheese, such as Fondue Savoyarde, Raclette, and Tartiflette, are very typical."}
        ]
    },
    "mont-blanc": {
        "de": [
            {"q": "Ist der Mont Blanc der höchste Berg Europas?", "a": "Er ist der höchste Berg der Alpen und Westeuropas; der Elbrus im Kaukasus ist jedoch höher, falls man diesen zu Europa zählt."},
            {"q": "Wie kann man den Mont Blanc ohne Klettern erleben?", "a": "Man kann die Seilbahn zur Aiguille du Midi (3.842 m) nehmen, die einen spektakulären Blick auf den Gipfel bietet."},
            {"q": "Gehört der Gipfel des Mont Blanc zu Frankreich oder Italien?", "a": "Dies ist seit langem umstritten, wird aber international meist als Grenze zwischen beiden Ländern angesehen, wobei der Hauptgipfel oft Frankreich zugerechnet wird."},
            {"q": "Was ist die 'Grotte de Glace'?", "a": "Eine künstlich in den Mer-de-Glace-Gletscher geschlagene Eisgrotte, die man von Chamonix aus besuchen kann."},
            {"q": "Wie gefährlich ist die Besteigung des Mont Blanc?", "a": "Aufgrund des unberechenbaren Wetters und der Steinschlaggefahr gilt er als anspruchsvoll und sollte nur mit Bergführer bestiegen werden."}
        ],
        "hu": [
            {"q": "A Mont Blanc Európa legmagasabb hegye?", "a": "Ez az Alpok és Nyugat-Európa legmagasabb hegye; azonban a Kaukázusban található Elbrusz magasabb, ha azt Európához soroljuk."},
            {"q": "Hogyan lehet megtapasztalni a Mont Blanc-t mászás nélkül?", "a": "Fel lehet menni az Aiguille du Midi felvonóval (3842 m), amely lenyűgöző kilátást nyújt a csúcsra."},
            {"q": "A Mont Blanc csúcsa Franciaországhoz vagy Olaszországhoz tartozik?", "a": "Ez régóta vita tárgya, de nemzetközileg általában a két ország közötti határként tekintik, a főcsúcsot gyakran Franciaországhoz sorolva."},
            {"q": "Mi az a 'Grotte de Glace'?", "a": "Egy mesterségesen a Mer de Glace gleccserbe vájt jégbarlang, amely Chamonix-ból látogatható."},
            {"q": "Mennyire veszélyes a Mont Blanc megmászása?", "a": "A kiszámíthatatlan időjárás és a kőomlásveszély miatt nehéznek számít, és csak hegyi vezetővel ajánlott a megmászása."}
        ],
        "ro": [
            {"q": "Este Mont Blanc cel mai înalt munte din Europa?", "a": "Este cel mai înalt munte din Alpi și din Europa de Vest; totuși, muntele Elbrus din Caucaz este mai înalt, dacă acesta este considerat parte din Europa."},
            {"q": "Cum se poate vedea Mont Blanc fără alpinism?", "a": "Se poate lua telecabina până la Aiguille du Midi (3.842 m), care oferă o priveliște spectaculoasă asupra vârfului."},
            {"q": "Vârful Mont Blanc aparține Franței sau Italiei?", "a": "Aceasta este o chestiune disputată de mult timp, dar la nivel internațional este considerat de obicei granița dintre cele două țări, vârful principal fiind adesea atribuit Franței."},
            {"q": "Ce este „Grotte de Glace”?", "a": "O grotă de gheață săpată artificial în ghețarul Mer de Glace, care poate fi vizitată pornind din Chamonix."},
            {"q": "Cât de periculoasă este escaladarea muntelui Mont Blanc?", "a": "Din cauza vremii imprevizibile și a riscului de căderi de pietre, este considerată o ascensiune dificilă și ar trebui făcută doar cu un ghid montan."}
        ],
        "en": [
            {"q": "Is Mont Blanc the highest mountain in Europe?", "a": "It is the highest mountain in the Alps and Western Europe; however, Mount Elbrus in the Caucasus is higher, if considered part of Europe."},
            {"q": "How can you experience Mont Blanc without climbing?", "a": "You can take the cable car to the Aiguille du Midi (3,842 m), which offers a spectacular view of the summit."},
            {"q": "Does the summit of Mont Blanc belong to France or Italy?", "a": "This has long been a matter of dispute, but internationally it is usually regarded as the border between the two countries, with the main summit often attributed to France."},
            {"q": "What is the 'Grotte de Glace'?", "a": "An ice cave man-made in the Mer de Glace glacier that can be visited from Chamonix."},
            {"q": "How dangerous is climbing Mont Blanc?", "a": "Due to unpredictable weather and the risk of rockfall, it is considered challenging and should only be attempted with a mountain guide."}
        ]
    },
    "normandy-dday": {
        "de": [
            {"q": "Welcher Strand war am D-Day am stärksten umkämpft?", "a": "Omaha Beach war der Sektor mit den schwersten Verlusten der alliierten Truppen."},
            {"q": "Was kann man heute an den Landungsstränden sehen?", "a": "Es gibt zahlreiche Museen, deutsche Bunkerruinen, Denkmäler und die bewegenden Soldatenfriedhöfe."},
            {"q": "Was ist das 'Musée du Débarquement' in Arromanches?", "a": "Ein Museum, das sich besonders auf den Bau und die Nutzung des künstlichen Hafens 'Mulberry' konzentriert."},
            {"q": "Was passierte an der 'Pointe du Hoc'?", "a": "US-Ranger erklommen die steilen Klippen, um eine strategisch wichtige deutsche Geschützbatterie auszuschalten."},
            {"q": "Wann finden Gedenkfeiern zum D-Day statt?", "a": "Jedes Jahr um den 6. Juni herum gibt es große internationale Gedenkzeremonien unter Teilnahme von Staatsgästen."}
        ],
        "hu": [
            {"q": "Melyik partnál folytak a leghevesebb harcok a D-napon?", "a": "Az Omaha-part volt az a szektor, ahol a szövetséges csapatok a legsúlyosabb veszteségeket szenvedtek el."},
            {"q": "Mit lehet ma látni a partraszállási strandoknál?", "a": "Számos múzeumot, német bunkerek maradványait, emlékműveket és megindító katonai temetőket."},
            {"q": "Mi az az Arromanches-i 'Musée du Débarquement'?", "a": "Egy múzeum, amely kifejezetten a 'Mulberry' mesterséges kikötő építésére és használatára összpontosít."},
            {"q": "Mi történt a 'Pointe du Hoc' foknál?", "a": "Amerikai rangerek mászták meg a meredek sziklákat, hogy kiiktassanak egy stratégiailag fontos német ágyúüteget."},
            {"q": "Mikor tartanak megemlékezéseket a D-napról?", "a": "Minden évben június 6-a körül nagyszabású nemzetközi megemlékezéseket tartanak állami vezetők részvételével."}
        ],
        "ro": [
            {"q": "Care plajă a fost cea mai disputată în Ziua Z?", "a": "Plaja Omaha a fost sectorul cu cele mai mari pierderi pentru trupele aliate."},
            {"q": "Ce se poate vedea astăzi pe plajele debarcării?", "a": "Există numeroase muzee, ruine de buncăre germane, monumente și cimitire militare emoționante."},
            {"q": "Ce este „Musée du Débarquement” din Arromanches?", "a": "Un muzeu care se concentrează în special pe construcția și utilizarea portului artificial „Mulberry”."},
            {"q": "Ce s-a întâmplat la „Pointe du Hoc”?", "a": "Rangerii americani au escaladat stâncile abrupte pentru a scoate din funcțiune o baterie de tunuri germană importantă strategic."},
            {"q": "Când au loc ceremoniile de comemorare a Zilei Z?", "a": "În fiecare an, în jurul datei de 6 iunie, au loc mari ceremonii internaționale de comemorare, cu participarea unor oaspeți de stat."}
        ],
        "en": [
            {"q": "Which beach saw the heaviest fighting on D-Day?", "a": "Omaha Beach was the sector where the Allied forces suffered the most casualties."},
            {"q": "What can you see today at the landing beaches?", "a": "There are numerous museums, German bunker ruins, monuments, and moving military cemeteries."},
            {"q": "What is the 'Musée du Débarquement' in Arromanches?", "a": "A museum that focuses especially on the construction and use of the 'Mulberry' artificial harbor."},
            {"q": "What happened at 'Pointe du Hoc'?", "a": "U.S. Rangers scaled the steep cliffs to neutralize a strategically important German gun battery."},
            {"q": "When do D-Day commemorations take place?", "a": "Every year around June 6th, major international commemoration ceremonies are held with the participation of heads of state."}
        ]
    },
    "eiffel-tower": {
        "de": [
            {"q": "Darf man auf den Eiffelturm steigen?", "a": "Ja, man kann die erste und zweite Etage entweder über Treppen oder mit dem Aufzug erreichen; die Spitze ist nur per Aufzug zugänglich."},
            {"q": "Wie oft funkelt der Eiffelturm nachts?", "a": "Er funkelt zu jeder vollen Stunde nach Einbruch der Dunkelheit für jeweils 5 Minuten."},
            {"q": "Gibt es Restaurants im Eiffelturm?", "a": "Ja, es gibt zwei Restaurants: das 'Madame Brasserie' auf der ersten Etage und das Sterne-Restaurant 'Le Jules Verne' auf der zweiten Etage."},
            {"q": "Woraus besteht der Eiffelturm?", "a": "Er besteht aus Schmiedeeisen, das durch über 2,5 Millionen Nieten zusammengehalten wird."},
            {"q": "Sollte man Tickets im Voraus buchen?", "a": "Es wird dringend empfohlen, Tickets online im Voraus zu kaufen, um lange Wartezeiten an den Kassen zu vermeiden."}
        ],
        "hu": [
            {"q": "Fel lehet menni az Eiffel-toronyba?", "a": "Igen, az első és második emelet elérhető lépcsőn vagy lifttel; a csúcsra viszont csak lift visz fel."},
            {"q": "Milyen gyakran csillog az Eiffel-torony éjszaka?", "a": "Sötétedés után minden egész órakor csillog 5 percen keresztül."},
            {"q": "Vannak éttermek az Eiffel-toronyban?", "a": "Igen, két étterem található benne: a 'Madame Brasserie' az első emeleten és a csillagos 'Le Jules Verne' a második emeleten."},
            {"q": "Miből készült az Eiffel-torony?", "a": "Kovácsoltvasból készült, amelyet több mint 2,5 millió szegecs tart össze."},
            {"q": "Érdemes előre jegyet foglalni?", "a": "Erősen ajánlott a jegyeket előre online megvásárolni, hogy elkerüljük a hosszú sorban állást a pénztáraknál."}
        ],
        "ro": [
            {"q": "Se poate urca în Turnul Eiffel?", "a": "Da, se poate ajunge la primul și al doilea etaj fie pe scări, fie cu liftul; vârful este accesibil doar cu liftul."},
            {"q": "Cât de des sclipeste Turnul Eiffel noaptea?", "a": "Sclipeste la fiecare oră fixă după lăsarea întunericului, timp de 5 minute."},
            {"q": "Există restaurante în Turnul Eiffel?", "a": "Da, există două restaurante: „Madame Brasserie” la primul etaj și restaurantul cu stele Michelin „Le Jules Verne” la al doilea etaj."},
            {"q": "Din ce este construit Turnul Eiffel?", "a": "Este construit din fier forjat, ținut laolaltă de peste 2,5 milioane de nituri."},
            {"q": "Ar trebui rezervate bilete în avans?", "a": "Se recomandă insistent achiziționarea biletelor online în avans pentru a evita cozile lungi la casele de bilete."}
        ],
        "en": [
            {"q": "Can you climb the Eiffel Tower?", "a": "Yes, the first and second floors can be reached either by stairs or elevator; the summit is accessible only by elevator."},
            {"q": "How often does the Eiffel Tower sparkle at night?", "a": "It sparkles for 5 minutes every hour on the hour after dark."},
            {"q": "Are there restaurants in the Eiffel Tower?", "a": "Yes, there are two restaurants: 'Madame Brasserie' on the first floor and the Michelin-starred 'Le Jules Verne' on the second floor."},
            {"q": "What is the Eiffel Tower made of?", "a": "It is made of puddled iron (wrought iron) held together by over 2.5 million rivets."},
            {"q": "Should I book tickets in advance?", "a": "It is highly recommended to buy tickets online in advance to avoid long waits at the ticket booths."}
        ]
    },
    "louvre": {
        "de": [
            {"q": "Wie lange sind die Wartezeiten am Louvre?", "a": "Die Wartezeiten können ohne Reservierung mehrere Stunden betragen; ein Zeitfenster-Ticket ist daher fast unerlässlich."},
            {"q": "Wo befindet sich die Mona Lisa?", "a": "Die Mona Lisa hängt im 'Salle des États' im Denon-Flügel des Museums."},
            {"q": "Gibt es andere Eingänge als die Glaspyramide?", "a": "Ja, es gibt auch Eingänge über das Einkaufszentrum 'Carrousel du Louvre' oder an der Porte des Lions."},
            {"q": "Darf man im Louvre fotografieren?", "a": "Das Fotografieren ohne Blitz ist für private Zwecke in den meisten Räumen der ständigen Sammlung erlaubt."},
            {"q": "Wie viele Kunstwerke sind insgesamt im Louvre?", "a": "Es werden etwa 35.000 Werke ausgestellt, aber die gesamte Sammlung umfasst fast 500.000 Objekte."}
        ],
        "hu": [
            {"q": "Milyen hosszú a várakozási idő a Louvre-nál?", "a": "Foglalás nélkül a várakozási idő több óra is lehet; ezért az időpontra szóló jegy szinte elengedhetetlen."},
            {"q": "Hol található a Mona Lisa?", "a": "A Mona Lisa a múzeum Denon-szárnyában, a 'Salle des États' teremben van kiállítva."},
            {"q": "Vannak más bejáratok is az üvegpiramison kívül?", "a": "Igen, be lehet jutni a 'Carrousel du Louvre' bevásárlóközponton keresztül vagy a Porte des Lions bejáratnál is."},
            {"q": "Szabad-e fotózni a Louvre-ban?", "a": "A legtöbb állandó kiállítóteremben engedélyezett a vaku nélküli fotózás privát célra."},
            {"q": "Összesen hány műtárgy van a Louvre-ban?", "a": "Körülbelül 35 000 művet állítanak ki, de a teljes gyűjtemény közel 500 000 tárgyat foglal magában."}
        ],
        "ro": [
            {"q": "Cât de lungi sunt timpii de așteptare la Luvru?", "a": "Timpii de așteptare pot fi de câteva ore fără rezervare; prin urmare, un bilet cu interval orar este aproape indispensabil."},
            {"q": "Unde se află Mona Lisa?", "a": "Mona Lisa este expusă în „Salle des États”, în aripa Denon a muzeului."},
            {"q": "Există și alte intrări în afară de piramida de sticlă?", "a": "Da, există intrări și prin centrul comercial „Carrousel du Louvre” sau prin Porte des Lions."},
            {"q": "Este permis fotografiatul în Luvru?", "a": "Fotografiatul fără bliț este permis în scopuri private în majoritatea sălilor din colecția permanentă."},
            {"q": "Câte opere de artă sunt în total la Luvru?", "a": "Sunt expuse aproximativ 35.000 de lucrări, dar întreaga colecție cuprinde aproape 500.000 de obiecte."}
        ],
        "en": [
            {"q": "How long are the wait times at the Louvre?", "a": "Wait times can be several hours without a reservation; therefore, a timed-entry ticket is almost essential."},
            {"q": "Where is the Mona Lisa located?", "a": "The Mona Lisa is displayed in the 'Salle des États' in the Denon wing of the museum."},
            {"q": "Are there other entrances besides the glass pyramid?", "a": "Yes, there are also entrances through the 'Carrousel du Louvre' shopping center or at the Porte des Lions."},
            {"q": "Is photography allowed in the Louvre?", "a": "Photography without flash for private use is allowed in most rooms of the permanent collection."},
            {"q": "How many artworks are in the Louvre in total?", "a": "About 35,000 works are on display, but the entire collection comprises nearly 500,000 objects."}
        ]
    },
    "notre-dame": {
        "de": [
            {"q": "Wann wird Notre-Dame nach dem Brand wiedereröffnet?", "a": "Die offizielle Wiedereröffnung für Gottesdienste und Besucher ist für Dezember 2024 geplant."},
            {"q": "Kann man die Türme besichtigen?", "a": "Vor dem Brand war dies möglich; ob und wann die Türme nach der Wiedereröffnung zugänglich sein werden, wird noch bekannt gegeben."},
            {"q": "Wie wurde der Wiederaufbau finanziert?", "a": "Durch eine beispiellose weltweite Spendenaktion, bei der über 800 Millionen Euro gesammelt wurden."},
            {"q": "Was ist der 'Parvis' von Notre-Dame?", "a": "Der große Vorplatz der Kathedrale, unter dem sich auch eine archäologische Krypta mit römischen Ruinen befindet."},
            {"q": "Sind die Rosettenfenster beim Brand zerstört worden?", "a": "Glücklicherweise blieben die drei großen mittelalterlichen Rosettenfenster weitgehend unversehrt."}
        ],
        "hu": [
            {"q": "Mikor nyitják meg újra a Notre-Dame-ot a tűzvész után?", "a": "A hivatalos újranyitást a hívők és a látogatók előtt 2024 decemberére tervezik."},
            {"q": "Látogathatók-e a tornyok?", "a": "A tűz előtt lehetséges volt; az újranyitás utáni látogathatóságról később adnak tájékoztatást."},
            {"q": "Hogyan finanszírozták az újjáépítést?", "a": "Egy példátlan világméretű adománygyűjtés révén, amelynek során több mint 800 millió euró gyűlt össze."},
            {"q": "Mi az a 'Parvis de Notre-Dame'?", "a": "A székesegyház előtti nagy tér, amely alatt egy régészeti kripta is található római kori romokkal."},
            {"q": "Elpusztultak a rózsaablakok a tűzben?", "a": "Szerencsére a három nagy középkori rózsaablak nagyrészt épségben maradt."}
        ],
        "ro": [
            {"q": "Când se va redeschide Notre-Dame după incendiu?", "a": "Redeschiderea oficială pentru slujbe și vizitatori este planificată pentru decembrie 2024."},
            {"q": "Se pot vizita turnurile?", "a": "Înainte de incendiu acest lucru era posibil; dacă și când turnurile vor fi accesibile după redeschidere urmează să fie anunțat."},
            {"q": "Cum a fost finanțată reconstrucția?", "a": "Printr-o campanie mondială de donații fără precedent, în cadrul căreia s-au strâns peste 800 de milioane de euro."},
            {"q": "Ce este „Parvis” de la Notre-Dame?", "a": "Marea piață din fața catedralei, sub care se află și o criptă arheologică cu ruine romane."},
            {"q": "Au fost distruse vitraliile rozetă în timpul incendiului?", "a": "Din fericire, cele trei mari rozete medievale au rămas în mare parte intacte."}
        ],
        "en": [
            {"q": "When will Notre-Dame reopen after the fire?", "a": "The official reopening for services and visitors is scheduled for December 2024."},
            {"q": "Can you visit the towers?", "a": "This was possible before the fire; whether and when the towers will be accessible after the reopening is yet to be announced."},
            {"q": "How was the reconstruction financed?", "a": "Through an unprecedented global fundraising campaign that collected over 800 million euros."},
            {"q": "What is the 'Parvis' of Notre-Dame?", "a": "The large plaza in front of the cathedral, which also houses an archaeological crypt with Roman ruins underneath."},
            {"q": "Were the rose windows destroyed in the fire?", "a": "Fortunately, the three major medieval rose windows remained largely intact."}
        ]
    },
    "chambord": {
        "de": [
            {"q": "Gibt es Möbel im Schloss Chambord?", "a": "Einige Räume sind originalgetreu möbliert, aber viele Teile des Schlosses wirken leer, da die Könige ihre Möbel oft mitbrachten und wieder mitnahmen."},
            {"q": "Wie kommt man von Paris nach Chambord?", "a": "Am besten mit dem Zug (TER) von Paris-Austerlitz nach Blois und dann mit einem Shuttlebus oder per Leihrad zum Schloss."},
            {"q": "Was kann man im Schlosspark machen?", "a": "Man kann Fahrräder oder Boote leihen, wandern oder Kutschfahrten durch den riesigen Waldpark unternehmen."},
            {"q": "Warum gibt es so viele Schornsteine auf dem Dach?", "a": "Sie waren Teil des prunkvollen Designs und sollten eine stilisierte Skyline einer Stadt auf dem Dach darstellen."},
            {"q": "Ist das Schloss für Kinder interessant?", "a": "Ja, es gibt oft spezielle Rätsel-Rundgänge für Kinder und die Architektur wirkt wie aus einem Märchen."}
        ],
        "hu": [
            {"q": "Vannak bútorok a Chambord-i kastélyban?", "a": "Néhány terem eredeti bútorokkal van berendezve, de a kastély sok része üresnek tűnik, mert a királyok gyakran hozták-vitték magukkal a bútoraikat."},
            {"q": "Hogyan lehet eljutni Párizsból Chambord-ba?", "a": "A legjobb vonattal (TER) a Paris-Austerlitz állomásról Blois-ba menni, onnan pedig transzferbusszal vagy bérelt kerékpárral a kastélyhoz."},
            {"q": "Mit lehet csinálni a kastélyparkban?", "a": "Lehet kerékpárt vagy csónakot bérelni, túrázni vagy lovaskocsikázni a hatalmas erdei parkban."},
            {"q": "Miért van olyan sok kémény a tetőn?", "a": "A pompás dizájn részei voltak, és egy város stilizált látképét hivatottak megjeleníteni a tetőn."},
            {"q": "Érdekes a kastély a gyerekek számára?", "a": "Igen, gyakran rendeznek speciális kincskereső játékokat gyerekeknek, és az építészet is mesebelinek hat."}
        ],
        "ro": [
            {"q": "Există mobilier în Castelul Chambord?", "a": "Unele camere sunt mobilate conform epocii, dar multe părți ale castelului par goale, deoarece regii își aduceau și își luau adesea mobilierul cu ei."},
            {"q": "Cum se ajunge de la Paris la Chambord?", "a": "Cel mai bine cu trenul (TER) de la gara Paris-Austerlitz la Blois și apoi cu un autobuz special sau cu bicicleta închiriată până la castel."},
            {"q": "Ce se poate face în parcul castelului?", "a": "Se pot închiria biciclete sau bărci, se pot face drumeții sau plimbări cu trăsura prin imensul parc forestier."},
            {"q": "De ce sunt atât de multe șeminee pe acoperiș?", "a": "Făceau parte din designul somptuos și trebuiau să reprezinte un orizont stilizat al unui oraș pe acoperiș."},
            {"q": "Este castelul interesant pentru copii?", "a": "Da, există adesea circuite speciale cu ghicitori pentru copii, iar arhitectura pare desprinsă din basme."}
        ],
        "en": [
            {"q": "Is there furniture in the Château de Chambord?", "a": "Some rooms are furnished with period pieces, but many parts of the castle appear empty as the kings often brought and took away their furniture with them."},
            {"q": "How do you get from Paris to Chambord?", "a": "The best way is by train (TER) from Paris-Austerlitz to Blois, followed by a shuttle bus or a rental bike to the castle."},
            {"q": "What can you do in the castle grounds?", "a": "You can rent bikes or boats, go hiking, or take a horse-drawn carriage ride through the massive forest park."},
            {"q": "Why are there so many chimneys on the roof?", "a": "They were part of the extravagant design and were intended to represent a stylized city skyline on the roof."},
            {"q": "Is the castle interesting for children?", "a": "Yes, there are often special puzzle tours for children, and the architecture itself feels like something out of a fairy tale."}
        ]
    },
    "calais": {
        "de": [
            {"q": "Wie funktioniert die Überfahrt nach England?", "a": "Man kann entweder die Autofähren (P&O, DFDS) nehmen oder den Eurotunnel-Zug (Le Shuttle) für Fahrzeuge."},
            {"q": "Was ist das Wahrzeichen von Calais?", "a": "Das prächtige Rathaus (Hôtel de Ville) mit seinem 75 Meter hohen Glockenturm, der zum UNESCO-Welterbe gehört."},
            {"q": "Gibt es ein Museum für die berühmte Spitze?", "a": "Ja, die 'Cité de la Dentelle et de la Mode' zeigt die Geschichte und Technik der Spitzenherstellung in Calais."},
            {"q": "Was ist der 'Dragon de Calais'?", "a": "Eine riesige mechanische Drachenskulptur, die an der Strandpromenade entlangläuft und Passagiere trägt."},
            {"q": "Kann man die weißen Klippen von England von Calais aus sehen?", "a": "Ja, bei klarem Wetter sind die Klippen von Dover über den Kanal hinweg gut sichtbar."}
        ],
        "hu": [
            {"q": "Hogyan működik az átkelés Angliába?", "a": "Igénybe vehetők az autókompok (P&O, DFDS) vagy a járművek számára fenntartott Eurotunnel vonat (Le Shuttle)."},
            {"q": "Mi Calais legismertebb jelképe?", "a": "A pompás városháza (Hôtel de Ville) a 75 méter magas harangtornyával, amely az UNESCO világörökség része."},
            {"q": "Van-e múzeuma a híres csipkének?", "a": "Igen, a 'Cité de la Dentelle et de la Mode' mutatja be a calais-i csipkekészítés történetét és technikáját."},
            {"q": "Mi az a 'Dragon de Calais'?", "a": "Egy hatalmas mechanikus sárkányszobor, amely a tengerparti sétányon közlekedik és utasokat szállít."},
            {"q": "Látni lehet Anglia fehér szikláit Calais-ból?", "a": "Igen, tiszta időben a doveri sziklák jól láthatók a csatorna túlpartján."}
        ],
        "ro": [
            {"q": "Cum se face traversarea spre Anglia?", "a": "Se pot lua fie feriboturile auto (P&O, DFDS), fie trenul prin Eurotunel (Le Shuttle) pentru vehicule."},
            {"q": "Care este simbolul orașului Calais?", "a": "Primăria magnifică (Hôtel de Ville) cu clopotnița sa de 75 de metri înălțime, care face parte din patrimoniul UNESCO."},
            {"q": "Există un muzeu pentru faimoasa dantelă?", "a": "Da, „Cité de la Dentelle et de la Mode” prezintă istoria și tehnica producției de dantelă din Calais."},
            {"q": "Ce este „Dragon de Calais”?", "a": "O sculptură mecanică uriașă în formă de dragon, care se deplasează pe faleză și transportă pasageri."},
            {"q": "Se pot vedea stâncile albe ale Angliei din Calais?", "a": "Da, pe vreme senină, stâncile din Dover sunt clar vizibile peste canal."}
        ],
        "en": [
            {"q": "How does the crossing to England work?", "a": "You can either take the car ferries (P&O, DFDS) or use the Eurotunnel train (Le Shuttle) for vehicles."},
            {"q": "What is the landmark of Calais?", "a": "The magnificent City Hall (Hôtel de Ville) with its 75-meter-high belfry, which is a UNESCO World Heritage site."},
            {"q": "Is there a museum for the famous lace?", "a": "Yes, the 'Cité de la Dentelle et de la Mode' showcases the history and technique of lace-making in Calais."},
            {"q": "What is the 'Dragon de Calais'?", "a": "A massive mechanical dragon sculpture that travels along the seafront and carries passengers."},
            {"q": "Can you see the White Cliffs of Dover from Calais?", "a": "Yes, on a clear day, the cliffs of Dover are clearly visible across the Channel."}
        ]
    },
    "reims": {
        "de": [
            {"q": "Kann man die Champagnerkeller in Reims besichtigen?", "a": "Ja, die meisten großen Häuser wie Taittinger, Pommery oder Veuve Clicquot bieten geführte Touren durch ihre historischen Kreidekeller an."},
            {"q": "Was ist das Besondere an der Fassade der Kathedrale?", "a": "Sie besitzt einen außergewöhnlichen Reichtum an Skulpturen, darunter der berühmte 'Lächelnde Engel' (Ange au Sourire)."},
            {"q": "Was ist der 'Palais du Tau'?", "a": "Der ehemalige erzbischöfliche Palast, in dem heute der Domschatz und Relikte der Krönungsfeierlichkeiten ausgestellt sind."},
            {"q": "Wie weit ist Reims von Paris entfernt?", "a": "Mit dem TGV erreicht man Reims von Paris aus in nur 45 Minuten, was es zu einem perfekten Tagesausflug macht."},
            {"q": "Wo wurde in Reims das Ende des Zweiten Weltkriegs unterzeichnet?", "a": "Die Kapitulation der Wehrmacht wurde im heutigen 'Musée de la Reddition' (Museum der Kapitulation) unterzeichnet."}
        ],
        "hu": [
            {"q": "Látogathatók-e a pezsgőpincék Reimsben?", "a": "Igen, a legtöbb nagy ház, mint a Taittinger, a Pommery vagy a Veuve Clicquot kínál vezetett túrákat történelmi krétapincéiben."},
            {"q": "Mi a különleges a katedrális homlokzatán?", "a": "Rendkívül gazdag szobordíszítéssel rendelkezik, köztük a híres 'Mosolygó angyallal' (Ange au Sourire)."},
            {"q": "Mi az a 'Palais du Tau'?", "a": "Az egykori érseki palota, ahol ma a székesegyház kincstára és a koronázási ünnepségek emlékei láthatók."},
            {"q": "Milyen messze van Reims Párizstól?", "a": "TGV-vel mindössze 45 perc alatt elérhető Reims Párizsból, így tökéletes egynapos kirándulási célpont."},
            {"q": "Hol írták alá Reimsben a második világháború végét?", "a": "A német haderő fegyverletételét a mai 'Musée de la Reddition' (A fegyverletétel múzeuma) épületében írták alá."}
        ],
        "ro": [
            {"q": "Se pot vizita pivnițele de șampanie din Reims?", "a": "Da, majoritatea caselor mari precum Taittinger, Pommery sau Veuve Clicquot oferă tururi ghidate prin pivnițele lor istorice de cretă."},
            {"q": "Ce este special la fațada catedralei?", "a": "Are o bogăție extraordinară de sculpturi, inclusiv celebrul „Înger zâmbitor” (Ange au Sourire)."},
            {"q": "Ce este „Palais du Tau”?", "a": "Fostul palat arhiepiscopal, care găzduiește astăzi tezaurul catedralei și relicve ale ceremoniilor de încoronare."},
            {"q": "Cât de departe este Reims de Paris?", "a": "Cu TGV-ul se ajunge de la Paris la Reims în doar 45 de minute, ceea ce îl face o excursie perfectă de o zi."},
            {"q": "Unde a fost semnat sfârșitul celui de-Al Doilea Război Mondial la Reims?", "a": "Capitularea armatei germane a fost semnată în actualul „Musée de la Reddition” (Muzeul Capitulării)."}
        ],
        "en": [
            {"q": "Can you visit the Champagne cellars in Reims?", "a": "Yes, most major houses like Taittinger, Pommery, and Veuve Clicquot offer guided tours through their historic chalk cellars (crayères)."},
            {"q": "What is unique about the cathedral's facade?", "a": "It features an extraordinary abundance of sculptures, including the famous 'Smiling Angel' (Ange au Sourire)."},
            {"q": "What is the 'Palais du Tau'?", "a": "The former archbishop's palace, which now houses the cathedral's treasury and artifacts from the coronation ceremonies."},
            {"q": "How far is Reims from Paris?", "a": "Reims is just a 45-minute TGV ride from Paris, making it a perfect day trip destination."},
            {"q": "Where in Reims was the end of World War II signed?", "a": "The unconditional surrender of the German forces was signed in what is now the 'Musée de la Reddition' (Museum of the Surrender)."}
        ]
    }
}

def add_faq_to_content(poi_id, faq_data, text):
    # Match the POI object by ID and find its facts block
    # We use a non-greedy match for the object content
    pattern = re.compile(r'(id:\s*"' + re.escape(poi_id) + r'".*?facts:\s*\{.*?\n\s*\})', re.DOTALL)
    
    def replacement(match):
        obj_text = match.group(1)
        if 'faq:' in obj_text:
            return obj_text
        
        faq_json = json.dumps(faq_data, ensure_ascii=False, indent=4)
        # Indent the FAQ block
        faq_lines = faq_json.split('\n')
        indented_faq = faq_lines[0] + '\n' + '\n'.join('    ' + line for line in faq_lines[1:])
        
        return obj_text + ',\n    faq: ' + indented_faq

    return pattern.sub(replacement, text)

new_content = content
for poi_id, faq_data in faqs.items():
    new_content = add_faq_to_content(poi_id, faq_data, new_content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
