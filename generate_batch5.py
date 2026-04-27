import json

faqs = {
    "ba-busko": {
        "de": [
            {"q": "Was ist der Buško-See?", "a": "Einer der größten künstlichen Seen in Europa."},
            {"q": "Wofür wird das Wasser des Buško-Sees genutzt?", "a": "Hauptsächlich zur Stromerzeugung durch das Wasserkraftwerk Orlovac."},
            {"q": "An welcher Grenze liegt der See?", "a": "An der Grenze zwischen Bosnien und Herzegowina und Kroatien."},
            {"q": "Welche Freizeitaktivitäten sind am Buško-See beliebt?", "a": "Schwimmen, Angeln und Segeln sind bei Besuchern sehr beliebt."},
            {"q": "Welche Fischarten kann man im See finden?", "a": "Unter anderem Karpfen, Forellen und den einheimischen Strigl-Fisch."},
        ],
        "hu": [
            {"q": "Mi az a Buško-tó?", "a": "Európa egyik legnagyobb mesterséges tava."},
            {"q": "Mire használják a Buško-tó vizét?", "a": "Elsősorban villamosenergia-termelésre az Orlovac vízerőművön keresztül."},
            {"q": "Melyik határ mentén fekszik a tó?", "a": "Bosznia-Hercegovina és Horvátország határán."},
            {"q": "Milyen szabadidős tevékenységek népszerűek a Buško-tónál?", "a": "Az úszás, a horgászat és a vitorlázás nagyon kedvelt a látogatók körében."},
            {"q": "Milyen halfajok találhatók a tóban?", "a": "Többek között ponty, pisztráng és az őshonos 'drulja' hal."},
        ],
        "ro": [
            {"q": "Ce este lacul Buško?", "a": "Unul dintre cele mai mari lacuri artificiale din Europa."},
            {"q": "Pentru ce este folosită apa lacului Buško?", "a": "În principal pentru producerea de energie electrică prin hidrocentrala Orlovac."},
            {"q": "La ce graniță se află lacul?", "a": "La granița dintre Bosnia și Herțegovina și Croația."},
            {"q": "Ce activități de recreere sunt populare la lacul Buško?", "a": "Înotul, pescuitul și navigația sunt foarte apreciate de vizitatori."},
            {"q": "Ce specii de pești pot fi găsite în lac?", "a": "Printre altele, crap, păstrăv și peștele autohton 'drulja'."},
        ],
        "en": [
            {"q": "What is Buško Lake?", "a": "One of the largest artificial lakes in Europe."},
            {"q": "What is the water of Buško Lake used for?", "a": "Mainly for electricity generation through the Orlovac hydroelectric power plant."},
            {"q": "On which border is the lake located?", "a": "On the border between Bosnia and Herzegovina and Croatia."},
            {"q": "What recreational activities are popular at Buško Lake?", "a": "Swimming, fishing, and sailing are very popular with visitors."},
            {"q": "What fish species can be found in the lake?", "a": "Among others, carp, trout, and the indigenous 'drulja' fish."},
        ]
    },
    "ba-andricgrad": {
        "de": [
            {"q": "Was ist Andrićgrad?", "a": "Ein kulturelles Zentrum und ein Stadtprojekt, das dem Literaturnobelpreisträger Ivo Andrić gewidmet ist."},
            {"q": "Wer ist der Initiator von Andrićgrad?", "a": "Der berühmte Regisseur Emir Kusturica."},
            {"q": "In welcher Stadt liegt Andrićgrad?", "a": "In Višegrad, in der Nähe der berühmten Drina-Brücke."},
            {"q": "Welche Architekturstile sind in Andrićgrad vertreten?", "a": "Es ist eine Mischung aus verschiedenen Epochen: Mittelalter, osmanische Zeit und Klassizismus."},
            {"q": "Was kann man in Andrićgrad besuchen?", "a": "Ein Kino, ein Theater, Institute, Kirchen und verschiedene Restaurants."},
        ],
        "hu": [
            {"q": "Mi az az Andrićgrad?", "a": "Egy kulturális központ és városépítészeti projekt, amelyet Ivo Andrić Nobel-díjas írónak szenteltek."},
            {"q": "Ki az Andrićgrad kezdeményezője?", "a": "A híres rendező, Emir Kusturica."},
            {"q": "Melyik városban található Andrićgrad?", "a": "Višegradban, a híres Drina-híd közelében."},
            {"q": "Milyen építészeti stílusok képviseltetik magukat Andrićgradban?", "a": "Különböző korszakok keveréke: a középkor, az oszmán kor és a klasszicizmus stílusjegyei is megtalálhatók."},
            {"q": "Mit lehet meglátogatni Andrićgradban?", "a": "Mozit, színházat, kutatóintézeteket, templomokat és különféle éttermeket."},
        ],
        "ro": [
            {"q": "Ce este Andrićgrad?", "a": "Un centru cultural și un proiect urbanistic dedicat laureatului premiului Nobel pentru literatură, Ivo Andrić."},
            {"q": "Cine este inițiatorul proiectului Andrićgrad?", "a": "Faimosul regizor Emir Kusturica."},
            {"q": "În ce oraș se află Andrićgrad?", "a": "În Višegrad, lângă faimosul pod de pe Drina."},
            {"q": "Ce stiluri arhitecturale sunt reprezentate în Andrićgrad?", "a": "Este un amestec de diferite epoci: medievală, otomană și neoclasică."},
            {"q": "Ce se poate vizita în Andrićgrad?", "a": "Un cinematograf, un teatru, institute, biserici și diverse restaurante."},
        ],
        "en": [
            {"q": "What is Andrićgrad?", "a": "A cultural center and a town project dedicated to Nobel Prize winner Ivo Andrić."},
            {"q": "Who is the initiator of Andrićgrad?", "a": "The famous director Emir Kusturica."},
            {"q": "In which city is Andrićgrad located?", "a": "In Višegrad, near the famous bridge on the Drina."},
            {"q": "What architectural styles are represented in Andrićgrad?", "a": "It is a mixture of different periods: medieval, Ottoman, and Neoclassical."},
            {"q": "What can you visit in Andrićgrad?", "a": "A cinema, a theater, institutes, churches, and various restaurants."},
        ]
    },
    "ba-orlovaca": {
        "de": [
            {"q": "Was ist die Orlovača-Höhle?", "a": "Eine der größten und schönsten Schauhöhlen in Bosnien und Herzegowina."},
            {"q": "Wo befindet sich die Höhle genau?", "a": "In der Nähe von Pale, etwa 15 km von Sarajevo entfernt."},
            {"q": "Was kann man im Inneren der Höhle sehen?", "a": "Prächtige Stalaktiten, Stalagmiten und seltene Höhlenbären-Fossilien."},
            {"q": "Wie lang ist das für Besucher zugängliche Wegenetz?", "a": "Etwa 560 Meter der Höhle sind für Touristen erschlossen."},
            {"q": "Welche Temperatur herrscht in der Höhle?", "a": "Es herrscht eine konstante Temperatur von etwa 8,5 Grad Celsius."},
        ],
        "hu": [
            {"q": "Mi az az Orlovača-barlang?", "a": "Bosznia-Hercegovina egyik legnagyobb és legszebb látogatható barlangja."},
            {"q": "Hol található pontosan a barlang?", "a": "Pale közelében, körülbelül 15 km-re Szarajevótól."},
            {"q": "Mit láthatunk a barlang belsejében?", "a": "Pompás sztalaktitokat, sztalagmitokat és ritka barlangi medve fosszíliákat."},
            {"q": "Milyen hosszú a látogatók számára megnyitott szakasz?", "a": "Körülbelül 560 méternyi útvonalat építettek ki a turisták számára."},
            {"q": "Milyen a hőmérséklet a barlangban?", "a": "A barlangban állandó, körülbelül 8,5 Celsius-fokos hőmérséklet van."},
        ],
        "ro": [
            {"q": "Ce este peștera Orlovača?", "a": "Una dintre cele mai mari și mai frumoase peșteri amenajate din Bosnia și Herțegovina."},
            {"q": "Unde se află exact peștera?", "a": "Lângă Pale, la aproximativ 15 km de Sarajevo."},
            {"q": "Ce se poate vedea în interiorul peșterii?", "a": "Stalactite și stalagmite magnifice, precum și fosile rare de urși de peșteră."},
            {"q": "Cât de lung este traseul accesibil vizitatorilor?", "a": "Aproximativ 560 de metri din peșteră sunt amenajați pentru turiști."},
            {"q": "Ce temperatură este în peșteră?", "a": "Există o temperatură constantă de aproximativ 8,5 grade Celsius."},
        ],
        "en": [
            {"q": "What is the Orlovača Cave?", "a": "One of the largest and most beautiful show caves in Bosnia and Herzegovina."},
            {"q": "Where is the cave located exactly?", "a": "Near Pale, about 15 km from Sarajevo."},
            {"q": "What can you see inside the cave?", "a": "Magnificent stalactites, stalagmites, and rare cave bear fossils."},
            {"q": "How long is the path accessible to visitors?", "a": "About 560 meters of the cave are developed for tourists."},
            {"q": "What is the temperature inside the cave?", "a": "There is a constant temperature of about 8.5 degrees Celsius."},
        ]
    },
    "ba-gorazde": {
        "de": [
            {"q": "An welchem Fluss liegt Goražde?", "a": "Goražde liegt am Ufer der oberen Drina."},
            {"q": "Wofür ist Goražde historisch bekannt?", "a": "Für seinen heroischen Widerstand und als einzige unbesetzte Enklave an der Drina während des Bosnienkrieges."},
            {"q": "Was ist die wirtschaftliche Bedeutung von Goražde heute?", "a": "Es ist ein wichtiges industrielles Zentrum im Osten Bosniens."},
            {"q": "Gibt es bedeutende religiöse Stätten in der Stadt?", "a": "Die Kayseri-Moschee ist ein modernes Wahrzeichen der Stadt."},
            {"q": "Welches kulturelle Ereignis findet jährlich in Goražde statt?", "a": "Das internationale 'Festival der Freundschaft'."},
        ],
        "hu": [
            {"q": "Melyik folyó partján fekszik Goražde?", "a": "Goražde a felső Drina partján fekszik."},
            {"q": "Miről nevezetes Goražde történelmileg?", "a": "Hősies ellenállásáról, és arról, hogy a boszniai háború alatt ez volt az egyetlen el nem foglalt enklávé a Drina mentén."},
            {"q": "Mi Goražde gazdasági jelentősége ma?", "a": "Kelet-Bosznia egyik fontos ipari központja."},
            {"q": "Vannak-e jelentős vallási helyszínek a városban?", "a": "A Kayseri-mecset a város egyik modern jelképe."},
            {"q": "Milyen kulturális eseményt rendeznek évente Goraždéban?", "a": "A nemzetközi 'Barátság Fesztivált'."},
        ],
        "ro": [
            {"q": "Pe ce râu se află orașul Goražde?", "a": "Goražde este situat pe malurile Drinei superioare."},
            {"q": "Pentru ce este cunoscut Goražde din punct de vedere istoric?", "a": "Pentru rezistența sa eroică și pentru faptul că a fost singura enclavă neocupată de pe Drina în timpul războiului din Bosnia."},
            {"q": "Care este importanța economică a orașului Goražde astăzi?", "a": "Este un centru industrial important în estul Bosniei."},
            {"q": "Există lăcașuri de cult importante în oraș?", "a": "Moscheea Kayseri este un simbol modern al orașului."},
            {"q": "Ce eveniment cultural are loc anual în Goražde?", "a": "Festivalul internațional al prieteniei."},
        ],
        "en": [
            {"q": "On which river is Goražde located?", "a": "Goražde is located on the banks of the upper Drina."},
            {"q": "What is Goražde historically known for?", "a": "For its heroic resistance and for being the only unoccupied enclave on the Drina during the Bosnian War."},
            {"q": "What is the economic importance of Goražde today?", "a": "It is an important industrial center in eastern Bosnia."},
            {"q": "Are there significant religious sites in the city?", "a": "The Kayseri Mosque is a modern landmark of the city."},
            {"q": "What cultural event takes place annually in Goražde?", "a": "The international 'Friendship Festival'."},
        ]
    },
    "ba-gorazde-bridge": {
        "de": [
            {"q": "Warum ist die Brücke in Goražde so bekannt?", "a": "Sie ist ein Wahrzeichen der Stadt und verbindet die beiden Ufer der Drina."},
            {"q": "Was ist die 'Brücke unter der Brücke'?", "a": "Eine provisorische Holzbrücke, die während der Belagerung unter der Hauptbrücke gebaut wurde, um Schutz vor Scharfschützen zu bieten."},
            {"q": "Wie viele Hauptbrücken gibt es in Goražde?", "a": "Es gibt drei Hauptbrücken, die das Stadtzentrum verbinden."},
            {"q": "Welche Bedeutung hat die Brücke für die Bewohner?", "a": "Sie ist ein Symbol für das Überleben und die Verbundenheit der Stadt."},
            {"q": "Kann man von der Brücke aus die Drina sehen?", "a": "Ja, sie bietet einen wunderschönen Blick auf den smaragdgrünen Fluss."},
        ],
        "hu": [
            {"q": "Miért olyan ismert a goraždei híd?", "a": "A város jelképe, amely összeköti a Drina két partját."},
            {"q": "Mi az a 'híd a híd alatt'?", "a": "Egy ideiglenes fahíd, amelyet az ostrom alatt építettek a főhíd alá, hogy védelmet nyújtson a mesterlövészek ellen."},
            {"q": "Hány fő híd van Goraždéban?", "a": "Három fő híd köti össze a városközpontot."},
            {"q": "Milyen jelentőséggel bír a híd a lakosok számára?", "a": "A túlélés és a város egységének szimbóluma."},
            {"q": "Látni-e a Drinát a hídról?", "a": "Igen, gyönyörű kilátás nyílik onnan a smaragdzöld folyóra."},
        ],
        "ro": [
            {"q": "De ce este atât de cunoscut podul din Goražde?", "a": "Este un simbol al orașului și leagă cele două maluri ale Drinei."},
            {"q": "Ce este 'podul de sub pod'?", "a": "Un pod provizoriu din lemn, construit sub podul principal în timpul asediului, pentru a oferi protecție împotriva lunetiștilor."},
            {"q": "Câte poduri principale există în Goražde?", "a": "Există trei poduri principale care leagă centrul orașului."},
            {"q": "Ce semnificație are podul pentru locuitori?", "a": "Este un simbol al supraviețuirii și al unității orașului."},
            {"q": "Se poate vedea râul Drina de pe pod?", "a": "Da, oferă o priveliște minunată asupra râului de culoarea smaraldului."},
        ],
        "en": [
            {"q": "Why is the bridge in Goražde so famous?", "a": "It is a landmark of the city and connects the two banks of the Drina."},
            {"q": "What is the 'bridge under the bridge'?", "a": "A makeshift wooden bridge built under the main bridge during the siege to provide protection from snipers."},
            {"q": "How many main bridges are there in Goražde?", "a": "There are three main bridges connecting the city center."},
            {"q": "What is the significance of the bridge for the residents?", "a": "It is a symbol of survival and the city's connectedness."},
            {"q": "Can you see the Drina from the bridge?", "a": "Yes, it offers a beautiful view of the emerald-green river."},
        ]
    }
}

with open("faqs_batch5.json", "w", encoding="utf-8") as f:
    json.dump(faqs, f, ensure_ascii=False, indent=2)
