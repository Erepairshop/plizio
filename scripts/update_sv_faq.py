import re
import os

def add_faq(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    faqs = {
        "sv-sansalvador": {
            "de": [
                {"q": "Wann wurde San Salvador gegründet?", "a": "Im Jahr 1525."},
                {"q": "Was ist der Spitzname des Tals, in dem die Stadt liegt?", "a": "Tal der Hängematten."},
                {"q": "Welcher Vulkan liegt in der Nähe?", "a": "Der Vulkan San Salvador."},
                {"q": "Was ist die Metropolitan-Kathedrale?", "a": "Das wichtigste religiöse Gebäude und Ruhestätte von Oscar Romero."}
            ],
            "hu": [
                {"q": "Mikor alapították San Salvadort?", "a": "1525-ben."},
                {"q": "Mi a beceneve a völgynek, ahol a város fekszik?", "a": "Függőágyak völgye."},
                {"q": "Melyik vulkán van a közelben?", "a": "A San Salvador-vulkán."},
                {"q": "Mi a Metropolitan székesegyház?", "a": "Az ország legfontosabb vallási épülete és Oscar Romero nyughelye."}
            ],
            "ro": [
                {"q": "Când a fost fondat San Salvador?", "a": "În anul 1525."},
                {"q": "Care este porecla văii în care se află orașul?", "a": "Valea Hamacelor."},
                {"q": "Ce vulcan se află în apropiere?", "a": "Vulcanul San Salvador."},
                {"q": "Ce este Catedrala Metropolitană?", "a": "Cea mai importantă clădire religioasă și locul de odihnă al lui Oscar Romero."}
            ],
            "en": [
                {"q": "When was San Salvador founded?", "a": "In 1525."},
                {"q": "What is the nickname of the valley where it's located?", "a": "Valley of the Hammocks."},
                {"q": "Which volcano is nearby?", "a": "San Salvador Volcano."},
                {"q": "What is the Metropolitan Cathedral?", "a": "The primary religious building and resting place of Oscar Romero."}
            ]
        },
        "sv-santaana": {
            "de": [
                {"q": "Wofür ist Santa Ana bekannt?", "a": "Für ihre neugotische Kathedrale und die Kaffeeindustrie."},
                {"q": "Wie wird die Stadt historisch genannt?", "a": "Hősies Stadt."},
                {"q": "Welche Sehenswürdigkeit spiegelt den Kaffeeboom wider?", "a": "Das Nationaltheater."},
                {"q": "Wo liegt die Stadt?", "a": "Im Westen El Salvadors."}
            ],
            "hu": [
                {"q": "Miről ismert Santa Ana?", "a": "Neogótikus székesegyházáról és a kávéiparáról."},
                {"q": "Hogy hívták a várost történelmileg?", "a": "Hősies Város."},
                {"q": "Melyik látnivaló tükrözi a kávékonjunktúrát?", "a": "A Nemzeti Színház."},
                {"q": "Hol fekszik a város?", "a": "El Salvador nyugati részén."}
            ],
            "ro": [
                {"q": "Pentru ce este cunoscut Santa Ana?", "a": "Pentru catedrala sa neogotică și industria cafelei."},
                {"q": "Cum a fost numit orașul istoric?", "a": "Orașul Eroic."},
                {"q": "Ce obiectiv reflectă boom-ul cafelei?", "a": "Teatrul Național."},
                {"q": "Unde se află orașul?", "a": "În vestul El Salvador."}
            ],
            "en": [
                {"q": "What is Santa Ana famous for?", "a": "Its neo-Gothic cathedral and the coffee industry."},
                {"q": "What was the city's historical nickname?", "a": "Heroic City."},
                {"q": "Which landmark reflects the coffee boom?", "a": "The National Theater."},
                {"q": "Where is the city located?", "a": "In western El Salvador."}
            ]
        },
        "sv-sanmiguel": {
            "de": [
                {"q": "Wann findet der berühmte Karneval statt?", "a": "Jedes Jahr im November."},
                {"q": "Welcher Vulkan dominiert die Landschaft?", "a": "Der Chaparrastique-Vulkan."},
                {"q": "Was ist das wirtschaftliche Zentrum des Ostens?", "a": "San Miguel."},
                {"q": "Wie ist das Klima dort?", "a": "Es ist bekannt für seine extreme Hitze."}
            ],
            "hu": [
                {"q": "Mikor tartják a híres karnevált?", "a": "Minden év novemberében."},
                {"q": "Melyik vulkán uralja a tájat?", "a": "A Chaparrastique-vulkán."},
                {"q": "Mi kelet El Salvador gazdasági központja?", "a": "San Miguel."},
                {"q": "Milyen ott az éghajlat?", "a": "Híres a szélsőséges hőségéről."}
            ],
            "ro": [
                {"q": "Când are loc celebrul carnaval?", "a": "În fiecare an în noiembrie."},
                {"q": "Ce vulcan domină peisajul?", "a": "Vulcanul Chaparrastique."},
                {"q": "Care este centrul economic al estului?", "a": "San Miguel."},
                {"q": "Cum este clima acolo?", "a": "Este cunoscut pentru căldura sa extremă."}
            ],
            "en": [
                {"q": "When does the famous carnival take place?", "a": "Every November."},
                {"q": "Which volcano dominates the landscape?", "a": "Chaparrastique Volcano."},
                {"q": "What is the economic center of the east?", "a": "San Miguel."},
                {"q": "What is the climate like there?", "a": "It is known for its extreme heat."}
            ]
        },
        "sv-santatecla": {
            "de": [
                {"q": "Wie hieß Santa Tecla früher?", "a": "Nueva San Salvador."},
                {"q": "Was ist Paseo El Carmen?", "a": "Eine lebhafte Zone mit Restaurants und kulturellem Ambiente."},
                {"q": "Warum wurde die Stadt gegründet?", "a": "Als temporäre Hauptstadt nach einem Erdbeben in San Salvador."},
                {"q": "Was befindet sich im Palacio de la Cultura?", "a": "Ein wichtiges kulturelles Zentrum."}
            ],
            "hu": [
                {"q": "Hogy hívták korábban Santa Teclát?", "a": "Nueva San Salvador."},
                {"q": "Mi a Paseo El Carmen?", "a": "Egy nyüzsgő negyed éttermekkel és kulturális élettel."},
                {"q": "Miért alapították a várost?", "a": "Ideiglenes fővárosként egy földrengés után."},
                {"q": "Mi található a Palacio de la Cultura-ban?", "a": "Egy fontos kulturális központ."}
            ],
            "ro": [
                {"q": "Cum se numea Santa Tecla înainte?", "a": "Nueva San Salvador."},
                {"q": "Ce este Paseo El Carmen?", "a": "O zonă animată cu restaurante și ambianță culturală."},
                {"q": "De ce a fost fondat orașul?", "a": "Ca capitală temporară după un cutremur în San Salvador."},
                {"q": "Ce se află în Palacio de la Cultura?", "a": "Un important centru cultural."}
            ],
            "en": [
                {"q": "What was Santa Tecla's former name?", "a": "Nueva San Salvador."},
                {"q": "What is Paseo El Carmen?", "a": "A lively district with restaurants and a cultural vibe."},
                {"q": "Why was the city founded?", "a": "As a temporary capital after an earthquake in San Salvador."},
                {"q": "What is housed in the Palacio de la Cultura?", "a": "An important cultural center."}
            ]
        },
        "sv-lalibertad": {
            "de": [
                {"q": "Was ist die Hauptattraktion von La Libertad?", "a": "Der Fischmarkt auf dem Pier und das Surfen."},
                {"q": "Wie heißt der berühmte Surfspot?", "a": "Punta Roca."},
                {"q": "Wie weit ist es von San Salvador entfernt?", "a": "Etwa 30 Minuten."},
                {"q": "Was ist Surf City?", "a": "Eine nationale Tourismusinitiative, die hier beginnt."}
            ],
            "hu": [
                {"q": "Mi La Libertad fő vonzereje?", "a": "A mólón található halpiac és a szörfözés."},
                {"q": "Hogy hívják a híres szörfhelyet?", "a": "Punta Roca."},
                {"q": "Milyen messze van San Salvadortól?", "a": "Körülbelül 30 percre."},
                {"q": "Mi az a Surf City?", "a": "Egy nemzeti turisztikai kezdeményezés, amely itt kezdődik."}
            ],
            "ro": [
                {"q": "Care este atracția principală din La Libertad?", "a": "Piața de pește de pe dig și surful."},
                {"q": "Cum se numește celebrul loc de surf?", "a": "Punta Roca."},
                {"q": "Cât de departe este de San Salvador?", "a": "Aproximativ 30 de minute."},
                {"q": "Ce este Surf City?", "a": "O inițiativă turistică națională care începe aici."}
            ],
            "en": [
                {"q": "What is the main attraction in La Libertad?", "a": "The fish market on the pier and surfing."},
                {"q": "What is the name of the famous surf spot?", "a": "Punta Roca."},
                {"q": "How far is it from San Salvador?", "a": "About 30 minutes away."},
                {"q": "What is Surf City?", "a": "A national tourism initiative that starts here."}
            ]
        },
        "sv-pital": {
            "de": [
                {"q": "Was ist der höchste Punkt El Salvadors?", "a": "Cerro El Pital mit 2.730 Metern."},
                {"q": "Wo liegt der Berg?", "a": "An der Grenze zu Honduras."},
                {"q": "Kann es dort frieren?", "a": "Ja, es ist einer der kältesten Orte des Landes."},
                {"q": "Welche Vögel kann man dort sehen?", "a": "Den prächtigen Quetzal."}
            ],
            "hu": [
                {"q": "Mi El Salvador legmagasabb pontja?", "a": "A Cerro El Pital, 2730 méterrel."},
                {"q": "Hol található a hegy?", "a": "A hondurasi határon."},
                {"q": "Lehet ott fagypont alatti a hőmérséklet?", "a": "Igen, ez az ország egyik leghűvösebb pontja."},
                {"q": "Milyen madarat lehet ott látni?", "a": "A pompás kvézált."}
            ],
            "ro": [
                {"q": "Care este cel mai înalt punct din El Salvador?", "a": "Cerro El Pital, cu 2.730 de metri."},
                {"q": "Unde se află muntele?", "a": "La granița cu Honduras."},
                {"q": "Poate fi îngheț acolo?", "a": "Da, este unul dintre cele mai reci locuri din țară."},
                {"q": "Ce păsări pot fi văzute acolo?", "a": "Pasărea Quetzal."}
            ],
            "en": [
                {"q": "What is the highest point in El Salvador?", "a": "Cerro El Pital at 2,730 meters."},
                {"q": "Where is the mountain located?", "a": "On the border with Honduras."},
                {"q": "Can it freeze there?", "a": "Yes, it is one of the coldest places in the country."},
                {"q": "Which birds can be spotted there?", "a": "The Resplendent Quetzal."}
            ]
        },
        "sv-rio-lempa": {
            "de": [
                {"q": "Wie lang ist der Río Lempa?", "a": "Etwa 422 Kilometer."},
                {"q": "Durch welche Länder fließt er?", "a": "Guatemala, Honduras und El Salvador."},
                {"q": "Warum ist er wichtig für die Energie?", "a": "Er versorgt mehrere Wasserkraftwerke."},
                {"q": "Wo mündet er?", "a": "In den Pazifischen Ozean."}
            ],
            "hu": [
                {"q": "Milyen hosszú a Lempa-folyó?", "a": "Körülbelül 422 kilométer."},
                {"q": "Mely országokon folyik keresztül?", "a": "Guatemala, Honduras és El Salvador."},
                {"q": "Miért fontos az energiatermelésben?", "a": "Több vízerőművet lát el vízzel."},
                {"q": "Hova torkollik?", "a": "A Csendes-óceánba."}
            ],
            "ro": [
                {"q": "Cât de lung este Râul Lempa?", "a": "Aproximativ 422 de kilometri."},
                {"q": "Prin ce țări trece?", "a": "Guatemala, Honduras și El Salvador."},
                {"q": "De ce este important pentru energie?", "a": "Alimentează mai multe hidrocentrale."},
                {"q": "Unde se varsă?", "a": "În Oceanul Pacific."}
            ],
            "en": [
                {"q": "How long is the Lempa River?", "a": "Approx. 422 kilometers."},
                {"q": "Which countries does it flow through?", "a": "Guatemala, Honduras, and El Salvador."},
                {"q": "Why is it important for energy?", "a": "It powers several hydroelectric dams."},
                {"q": "Where does it discharge?", "a": "Into the Pacific Ocean."}
            ]
        },
        "sv-ilopango": {
            "de": [
                {"q": "Was ist der Lago de Ilopango?", "a": "Der größte natürliche See El Salvadors."},
                {"q": "Wie ist er entstanden?", "a": "Durch eine gewaltige Vulkaneruption im 5. Jahrhundert."},
                {"q": "Welche Aktivitäten sind dort beliebt?", "a": "Segeln, Tauchen und Fischen."},
                {"q": "Wie tief ist der See?", "a": "In einigen Bereichen über 230 Meter."}
            ],
            "hu": [
                {"q": "Mi az az Ilopango-tó?", "a": "El Salvador legnagyobb természetes tava."},
                {"q": "Hogyan keletkezett?", "a": "Egy hatalmas, 5. századi vulkánkitörés során."},
                {"q": "Milyen tevékenységek népszerűek ott?", "a": "Vitorlázás, búvárkodás és horgászat."},
                {"q": "Milyen mély a tó?", "a": "Néhány helyen több mint 230 méter."}
            ],
            "ro": [
                {"q": "Ce este Lacul Ilopango?", "a": "Cel mai mare lac natural din El Salvador."},
                {"q": "Cum s-a format?", "a": "Printr-o erupție vulcanică masivă în secolul al V-lea."},
                {"q": "Ce activități sunt populare acolo?", "a": "Navigație, scufundări și pescuit."},
                {"q": "Cât de adânc este lacul?", "a": "Peste 230 de metri în unele zone."}
            ],
            "en": [
                {"q": "What is Lake Ilopango?", "a": "The largest natural lake in El Salvador."},
                {"q": "How was it formed?", "a": "By a massive volcanic eruption in the 5th century."},
                {"q": "What activities are popular there?", "a": "Sailing, diving, and fishing."},
                {"q": "How deep is the lake?", "a": "Over 230 meters in some areas."}
            ]
        },
        "sv-montecristo": {
            "de": [
                {"q": "Was ist das Trifinio?", "a": "Das Dreiländereck von El Salvador, Guatemala und Honduras."},
                {"q": "Welche Art von Wald findet man dort?", "a": "Einen Nebelwald."},
                {"q": "Welches Tier ist das Symbol des Parks?", "a": "Der Quetzal-Vogel."},
                {"q": "Wie hoch werden die Farne dort?", "a": "Bis zu 4 Meter."}
            ],
            "hu": [
                {"q": "Mi az a Trifinio?", "a": "El Salvador, Guatemala és Honduras hármas határa."},
                {"q": "Milyen erdő található ott?", "a": "Felhőerdő (köderdő)."},
                {"q": "Melyik állat a park jelképe?", "a": "A kvézál madár."},
                {"q": "Milyen magasra nőnek ott a páfrányok?", "a": "Akár 4 méteresre is."}
            ],
            "ro": [
                {"q": "Ce este Trifinio?", "a": "Punctul de frontieră triplu dintre El Salvador, Guatemala și Honduras."},
                {"q": "Ce tip de pădure se găsește acolo?", "a": "O pădure de ceață."},
                {"q": "Ce animal este simbolul parcului?", "a": "Pasărea Quetzal."},
                {"q": "Cât de înalte devin ferigile acolo?", "a": "Până la 4 metri."}
            ],
            "en": [
                {"q": "What is 'El Trifinio'?", "a": "The tri-point where El Salvador, Guatemala, and Honduras meet."},
                {"q": "What kind of forest is found there?", "a": "A cloud forest."},
                {"q": "Which animal is a symbol of the park?", "a": "The Resplendent Quetzal."},
                {"q": "How tall do the ferns grow there?", "a": "Up to 4 meters."}
            ]
        },
        "sv-san-andres": {
            "de": [
                {"q": "Wann war die Blütezeit von San Andrés?", "a": "Zwischen 600 und 900 n. Chr."},
                {"q": "Aus welchem Material wurden die Pyramiden gebaut?", "a": "Aus Lehmziegeln (Adobe)."},
                {"q": "Für welche Produktion war die Stätte bekannt?", "a": "Indigo-Produktion."},
                {"q": "Wodurch wurde ein Teil der Stätte begraben?", "a": "Durch einen Vulkanausbruch im Jahr 1658."}
            ],
            "hu": [
                {"q": "Mikor volt San Andrés fénykora?", "a": "I.sz. 600 és 900 között."},
                {"q": "Milyen anyagból épültek a piramisok?", "a": "Vályogtéglából (adobe)."},
                {"q": "Miről volt híres a település?", "a": "Indigótermelésről."},
                {"q": "Mi temette be a helyszín egy részét?", "a": "Egy 1658-as vulkánkitörés."}
            ],
            "ro": [
                {"q": "Când a fost perioada de glorie a San Andrés?", "a": "Între 600 și 900 d.Hr."},
                {"q": "Din ce material au fost construite piramidele?", "a": "Din cărămidă de chirpici (adobe)."},
                {"q": "Pentru ce producție era cunoscut situl?", "a": "Producția de indigo."},
                {"q": "Ce a îngropat o parte a sitului?", "a": "O erupție vulcanică în 1658."}
            ],
            "en": [
                {"q": "When was the peak period of San Andres?", "a": "Between 600 and 900 AD."},
                {"q": "What material was used to build the pyramids?", "a": "Adobe blocks."},
                {"q": "What was the site known for producing?", "a": "Indigo dye."},
                {"q": "What buried part of the site in 1658?", "a": "A volcanic eruption."}
            ]
        },
        "sv-cihuatan": {
            "de": [
                {"q": "Was bedeutet der Name Cihuatán?", "a": "Ort der Frau."},
                {"q": "Wieviele Ballspielplätze gibt es dort?", "a": "Zwei große Ballspielplätze."},
                {"q": "Wie wurde die Stadt zerstört?", "a": "Wahrscheinlich durch einen gewaltigen Brand."},
                {"q": "Wem ist die Hauptpyramide gewidmet?", "a": "Dem Gott Tlaloc."}
            ],
            "hu": [
                {"q": "Mit jelent a Cihuatán név?", "a": "Az asszony helye."},
                {"q": "Hány labdajáték-pálya található ott?", "a": "Két nagy pálya."},
                {"q": "Hogyan pusztult el a város?", "a": "Valószínűleg egy hatalmas tűzvészben."},
                {"q": "Kinek szentelték a főpiramist?", "a": "Tlaloc istennek."}
            ],
            "ro": [
                {"q": "Ce înseamnă numele Cihuatán?", "a": "Locul femeii."},
                {"q": "Câte terenuri de joc cu mingea sunt acolo?", "a": "Două terenuri mari."},
                {"q": "Cum a fost distrus orașul?", "a": "Probabil printr-un incendiu masiv."},
                {"q": "Cui îi este dedicată piramida principală?", "a": "Zeului Tlaloc."}
            ],
            "en": [
                {"q": "What does the name Cihuatan mean?", "a": "Place of the Woman."},
                {"q": "How many ball courts are there?", "a": "Two large ritual ball courts."},
                {"q": "How was the city likely destroyed?", "a": "By a massive fire."},
                {"q": "To whom is the main temple dedicated?", "a": "The god Tlaloc."}
            ]
        },
        "sv-casa-blanca": {
            "de": [
                {"q": "Wo liegt Casa Blanca?", "a": "In Chalchuapa."},
                {"q": "Was kann man in der Werkstatt lernen?", "a": "Traditionelle Indigo-Färbetechnik."},
                {"q": "Wie viele Pyramidenstümpfe gibt es?", "a": "Sechs Stück."},
                {"q": "Wie alt sind die Siedlungsspuren?", "a": "Sie reichen bis 500 v. Chr. zurück."}
            ],
            "hu": [
                {"q": "Hol található Casa Blanca?", "a": "Chalchuapában."},
                {"q": "Mit lehet tanulni a műhelyben?", "a": "Hagyományos indigófestési technikát."},
                {"q": "Hány piramisalap található ott?", "a": "Hat darab."},
                {"q": "Milyen régiek a településnyomok?", "a": "I.e. 500-ig nyúlnak vissza."}
            ],
            "ro": [
                {"q": "Unde se află Casa Blanca?", "a": "În Chalchuapa."},
                {"q": "Ce se poate învăța în atelier?", "a": "Tehnica tradițională de vopsire cu indigo."},
                {"q": "Câte baze de piramidă există?", "a": "Șase."},
                {"q": "Cât de vechi sunt urmele de așezare?", "a": "Datează din 500 î.Hr."}
            ],
            "en": [
                {"q": "Where is Casa Blanca located?", "a": "In Chalchuapa."},
                {"q": "What can you learn at the workshop?", "a": "Traditional indigo dyeing techniques."},
                {"q": "How many pyramid mounds are there?", "a": "Six mounds."},
                {"q": "How far back does the settlement date?", "a": "To 500 BC."}
            ]
        },
        "sv-joyadeceren": {
            "de": [
                {"q": "Warum wird Joya de Cerén das 'Pompeji Amerikas' genannt?", "a": "Weil es durch Vulkanasche perfekt konserviert wurde."},
                {"q": "Wann wurde das Dorf begraben?", "a": "Um 600 n. Chr."},
                {"q": "Wurden dort Skelette gefunden?", "a": "Nein, die Bewohner konnten rechtzeitig fliehen."},
                {"q": "Was ist das Besondere an dieser Stätte?", "a": "Es zeigt den Alltag einfacher Maya-Bauern."}
            ],
            "hu": [
                {"q": "Miért hívják Joya de Cerént az 'amerikai Pompejinek'?", "a": "Mert a vulkáni hamu tökéletesen konzerválta."},
                {"q": "Mikor temette be a falut a hamu?", "a": "I.sz. 600 körül."},
                {"q": "Találtak ott csontvázakat?", "a": "Nem, a lakóknak sikerült időben elmenekülniük."},
                {"q": "Mi a különleges ebben a helyszínben?", "a": "Az egyszerű maja földművesek mindennapjait mutatja be."}
            ],
            "ro": [
                {"q": "De ce este Joya de Cerén numit „Pompeii al Americii”?", "a": "Pentru că a fost conservat perfect de cenușa vulcanică."},
                {"q": "Când a fost îngropat satul?", "a": "În jurul anului 600 d.Hr."},
                {"q": "S-au găsit schelete acolo?", "a": "Nu, locuitorii au reușit să fugă la timp."},
                {"q": "Ce este special la acest sit?", "a": "Prezintă viața de zi cu zi a fermierilor mayași simpli."}
            ],
            "en": [
                {"q": "Why is Joya de Ceren called the 'Pompeii of the Americas'?", "a": "Because it was perfectly preserved by volcanic ash."},
                {"q": "When was the village buried?", "a": "Around 600 AD."},
                {"q": "Were human remains found there?", "a": "No, the residents managed to escape in time."},
                {"q": "What makes this site unique?", "a": "It shows the daily life of ordinary Maya farmers."}
            ]
        },
        "sv-tazumal": {
            "de": [
                {"q": "Was bedeutet Tazumal?", "a": "Ort der verbrannten Opfer."},
                {"q": "Wo befindet sich Tazumal?", "a": "In Chalchuapa."},
                {"q": "Was ist die Hauptattraktion?", "a": "Die größte Pyramide El Salvadors."},
                {"q": "Wann war die Blütezeit?", "a": "Zwischen 100 und 1200 n. Chr."}
            ],
            "hu": [
                {"q": "Mit jelent a Tazumal név?", "a": "Ahol az áldozatokat elégetik."},
                {"q": "Hol található Tazumal?", "a": "Chalchuapában."},
                {"q": "Mi a fő látnivaló?", "a": "El Salvador legnagyobb piramisa."},
                {"q": "Mikor volt a virágkora?", "a": "I.sz. 100 és 1200 között."}
            ],
            "ro": [
                {"q": "Ce înseamnă Tazumal?", "a": "Locul unde se ard victimele."},
                {"q": "Unde se află Tazumal?", "a": "În Chalchuapa."},
                {"q": "Care este atracția principală?", "a": "Cea mai mare piramidă din El Salvador."},
                {"q": "Când a fost perioada de glorie?", "a": "Între 100 și 1200 d.Hr."}
            ],
            "en": [
                {"q": "What does Tazumal mean?", "a": "The place where victims are burned."},
                {"q": "Where is Tazumal located?", "a": "In Chalchuapa."},
                {"q": "What is the main attraction?", "a": "The tallest pyramid in El Salvador."},
                {"q": "When did it flourish?", "a": "Between 100 and 1200 AD."}
            ]
        },
        "sv-coatepeque": {
            "de": [
                {"q": "Was für eine Art See ist der Coatepeque?", "a": "Ein vulkanischer Kratersee."},
                {"q": "Warum ändert er manchmal seine Farbe?", "a": "Aufgrund von Algenphänomenen färbt er sich türkise."},
                {"q": "Welche Insel liegt im See?", "a": "Die Insel Teopán."},
                {"q": "Wofür wird der See genutzt?", "a": "Wassersport, Tauchen und Tourismus."}
            ],
            "hu": [
                {"q": "Milyen típusú tó a Coatepeque?", "a": "Vulkáni krátertó."},
                {"q": "Miért változtatja meg néha a színét?", "a": "Algásodás miatt türkizkékké válik."},
                {"q": "Melyik sziget található a tóban?", "a": "Teopán-sziget."},
                {"q": "Mire használják a tavat?", "a": "Vízisportokra, búvárkodásra és turizmusra."}
            ],
            "ro": [
                {"q": "Ce fel de lac este Coatepeque?", "a": "Un lac de crater vulcanic."},
                {"q": "De ce își schimbă uneori culoarea?", "a": "Din cauza algelor, devine turcoaz."},
                {"q": "Ce insulă se află în lac?", "a": "Insula Teopán."},
                {"q": "Pentru ce este folosit lacul?", "a": "Sporturi nautice, scufundări și turism."}
            ],
            "en": [
                {"q": "What kind of lake is Coatepeque?", "a": "A volcanic crater lake."},
                {"q": "Why does it sometimes change color?", "a": "Due to algae blooms, it turns turquoise."},
                {"q": "Which island is in the lake?", "a": "Isla Teopán."},
                {"q": "What is the lake used for?", "a": "Water sports, diving, and tourism."}
            ]
        },
        "sv-santaanavolcano": {
            "de": [
                {"q": "Wie hoch ist der Vulkan Santa Ana?", "a": "2.381 Meter."},
                {"q": "Was findet man in seinem Krater?", "a": "Einen türkisfarbenen Schwefelsee."},
                {"q": "Wie wird der Vulkan noch genannt?", "a": "Ilamatepec."},
                {"q": "Wann war der letzte Ausbruch?", "a": "Im Jahr 2005."}
            ],
            "hu": [
                {"q": "Milyen magas a Santa Ana-vulkán?", "a": "2381 méter."},
                {"q": "Mit találunk a kráterében?", "a": "Egy türkizkék kénes tavat."},
                {"q": "Hogy hívják még a vulkánt?", "a": "Ilamatepec."},
                {"q": "Mikor volt az utolsó kitörés?", "a": "2005-ben."}
            ],
            "ro": [
                {"q": "Cât de înalt este vulcanul Santa Ana?", "a": "2.381 metri."},
                {"q": "Ce se găsește în craterul său?", "a": "Un lac sulfuros turcoaz."},
                {"q": "Cum mai este numit vulcanul?", "a": "Ilamatepec."},
                {"q": "Când a fost ultima erupție?", "a": "În anul 2005."}
            ],
            "en": [
                {"q": "How high is Santa Ana Volcano?", "a": "2,381 meters."},
                {"q": "What can be found in its crater?", "a": "A turquoise sulfuric lake."},
                {"q": "What is the volcano's other name?", "a": "Ilamatepec."},
                {"q": "When was the last eruption?", "a": "In 2005."}
            ]
        },
        "sv-izalco": {
            "de": [
                {"q": "Warum hieß der Izalco 'Leuchtturm des Pazifiks'?", "a": "Weil sein Leuchten früher weit auf dem Meer sichtbar war."},
                {"q": "Wann entstand der Vulkan?", "a": "Im Jahr 1770."},
                {"q": "Wie ist seine Form?", "a": "Ein fast perfekter, symmetrischer Kegel."},
                {"q": "Wann war der letzte Ausbruch?", "a": "Im Jahr 1966."}
            ],
            "hu": [
                {"q": "Miért hívták az Izalcót a 'Csendes-óceán világítótornyának'?", "a": "Mert fénye régen messzire ellátszott a tengeren."},
                {"q": "Mikor keletkezett a vulkán?", "a": "1770-ben."},
                {"q": "Milyen az alakja?", "a": "Szinte tökéletes, szimmetrikus kúp."},
                {"q": "Mikor volt az utolsó kitörés?", "a": "1966-ban."}
            ],
            "ro": [
                {"q": "De ce a fost Izalco numit „Farul Pacificului”?", "a": "Pentru că strălucirea sa era vizibilă de departe de pe mare."},
                {"q": "Când s-a format vulcanul?", "a": "În anul 1770."},
                {"q": "Cum este forma sa?", "a": "Un con aproape perfect și simetric."},
                {"q": "Când a fost ultima erupție?", "a": "În anul 1966."}
            ],
            "en": [
                {"q": "Why was Izalco called the 'Lighthouse of the Pacific'?", "a": "Because its glow was visible far out at sea."},
                {"q": "When was the volcano born?", "a": "In 1770."},
                {"q": "What is its shape like?", "a": "A nearly perfect, symmetrical cone."},
                {"q": "When was its last eruption?", "a": "In 1966."}
            ]
        },
        "sv-boqueron": {
            "de": [
                {"q": "Was bedeutet El Boquerón?", "a": "Der große Mund."},
                {"q": "Was ist der Boqueroncito?", "a": "Ein kleiner Vulkan-Kegel am Boden des Hauptkraters."},
                {"q": "Wie breit ist der Krater?", "a": "Etwa 1,5 Kilometer."},
                {"q": "Wo liegt der Park?", "a": "Direkt über der Hauptstadt San Salvador."}
            ],
            "hu": [
                {"q": "Mit jelent az El Boquerón név?", "a": "A nagy száj."},
                {"q": "Mi az a Boqueroncito?", "a": "Egy kis vulkáni kúp a fő kráter alján."},
                {"q": "Milyen széles a kráter?", "a": "Körülbelül 1,5 kilométer."},
                {"q": "Hol található a park?", "a": "Közvetlenül a főváros, San Salvador felett."}
            ],
            "ro": [
                {"q": "Ce înseamnă El Boquerón?", "a": "Gura mare."},
                {"q": "Ce este Boqueroncito?", "a": "Un mic con vulcanic la baza craterului principal."},
                {"q": "Cât de lat este craterul?", "a": "Aproximativ 1,5 kilometri."},
                {"q": "Unde se află parcul?", "a": "Chiar deasupra capitalei San Salvador."}
            ],
            "en": [
                {"q": "What does 'El Boqueron' mean?", "a": "The Big Mouth."},
                {"q": "What is 'Boqueroncito'?", "a": "A miniature volcanic cone at the bottom of the main crater."},
                {"q": "How wide is the crater?", "a": "About 1.5 kilometers."},
                {"q": "Where is the park located?", "a": "Directly above the capital city, San Salvador."}
            ]
        },
        "sv-rutaflores": {
            "de": [
                {"q": "Welche Dörfer verbindet die Ruta de las Flores?", "a": "Juayúa, Ataco, Apaneca und andere."},
                {"q": "Wofür ist die Route bekannt?", "a": "Für Wandgemälde, kühles Klima und Kaffee."},
                {"q": "Wann blühen dort die meisten Blumen?", "a": "Zwischen November und Februar."},
                {"q": "Was findet jedes Wochenende in Juayúa statt?", "a": "Ein Gastronomisches Festival."}
            ],
            "hu": [
                {"q": "Mely falvakat köti össze a Virágok útja?", "a": "Juayúát, Atacót, Apanecát és másokat."},
                {"q": "Miről ismert az útvonal?", "a": "Falfestményeiről, hűvös klímájáról és kávéjáról."},
                {"q": "Mikor nyílik ott a legtöbb virág?", "a": "November és február között."},
                {"q": "Mi történik minden hétvégén Juayúában?", "a": "Gasztronómiai fesztivál."}
            ],
            "ro": [
                {"q": "Ce sate leagă Ruta de las Flores?", "a": "Juayúa, Ataco, Apaneca și altele."},
                {"q": "Pentru ce este cunoscut traseul?", "a": "Pentru picturi murale, climă răcoroasă și cafea."},
                {"q": "Când înfloresc cele mai multe flori acolo?", "a": "Între noiembrie și februarie."},
                {"q": "Ce are loc în fiecare weekend în Juayúa?", "a": "Un festival gastronomic."}
            ],
            "en": [
                {"q": "Which villages does the Ruta de las Flores connect?", "a": "Juayua, Ataco, Apaneca, and others."},
                {"q": "What is the route famous for?", "a": "Murals, cool climate, and coffee."},
                {"q": "When do most flowers bloom there?", "a": "Between November and February."},
                {"q": "What happens every weekend in Juayua?", "a": "A Food Festival."}
            ]
        },
        "sv-eltunco": {
            "de": [
                {"q": "Woher kommt der Name El Tunco?", "a": "Von einem Felsen, der wie ein Schwein (Tunco) aussieht."},
                {"q": "Was ist charakteristisch für den strand?", "a": "Schwarzer Vulkansand."},
                {"q": "Wofür ist der Ort weltbekannt?", "a": "Für erstklassiges Surfen."},
                {"q": "Wie ist die Atmosphäre dort?", "a": "Lebhaft, mit vielen Bars und Surfern."}
            ],
            "hu": [
                {"q": "Honnan ered az El Tunco név?", "a": "Egy szikláról, amely egy disznóra (Tunco) hasonlít."},
                {"q": "Mi jellemző a strandra?", "a": "Fekete vulkáni homok."},
                {"q": "Miről világhírű a hely?", "a": "Kiváló szörfözési lehetőségeiről."},
                {"q": "Milyen ott a hangulat?", "a": "Élénk, sok bárral és szörfössel."}
            ],
            "ro": [
                {"q": "De unde provine numele El Tunco?", "a": "De la o stâncă ce seamănă cu un porc (Tunco)."},
                {"q": "Ce este caracteristic plajei?", "a": "Nisipul vulcanic negru."},
                {"q": "Pentru ce este faimos locul?", "a": "Pentru surf de clasă mondială."},
                {"q": "Cum este atmosfera acolo?", "a": "Animată, cu multe baruri și surferi."}
            ],
            "en": [
                {"q": "Where does the name El Tunco come from?", "a": "From a rock formation shaped like a pig (Tunco)."},
                {"q": "What is a key feature of the beach?", "a": "Black volcanic sand."},
                {"q": "What is the village world-famous for?", "a": "World-class surfing."},
                {"q": "What is the vibe like there?", "a": "Vibrant, with many bars and surfers."}
            ]
        },
        "sv-cathedral": {
            "de": [
                {"q": "Wer ist in der Kathedrale begraben?", "a": "Der heilige Oscar Romero."},
                {"q": "Wann wurde das heutige Gebäude geweiht?", "a": "Im Jahr 1999."},
                {"q": "Wo befindet sich die Kathedrale?", "a": "Am Plaza Barrios im Zentrum von San Salvador."},
                {"q": "Welcher Künstler gestaltete früher die Fassade?", "a": "Fernando Llort."}
            ],
            "hu": [
                {"q": "Ki van eltemetve a székesegyházban?", "a": "Szent Oscar Romero."},
                {"q": "Mikor szentelték fel a mai épületet?", "a": "1999-ben."},
                {"q": "Hol található a székesegyház?", "a": "A Plaza Barrios téren, San Salvador központjában."},
                {"q": "Melyik művész díszítette korábban a homlokzatot?", "a": "Fernando Llort."}
            ],
            "ro": [
                {"q": "Cine este înmormântat în catedrală?", "a": "Sfântul Oscar Romero."},
                {"q": "Când a fost sfințită clădirea actuală?", "a": "În anul 1999."},
                {"q": "Unde se află catedrala?", "a": "În Plaza Barrios din centrul orașului San Salvador."},
                {"q": "Ce artist a decorat anterior fațada?", "a": "Fernando Llort."}
            ],
            "en": [
                {"q": "Who is buried in the cathedral?", "a": "Saint Oscar Romero."},
                {"q": "When was the current building consecrated?", "a": "In 1999."},
                {"q": "Where is the cathedral located?", "a": "At Plaza Barrios in central San Salvador."},
                {"q": "Which artist formerly decorated the facade?", "a": "Fernando Llort."}
            ]
        },
        "sv-divinosalvador": {
            "de": [
                {"q": "Was stellt das Monument dar?", "a": "Jesus Christus auf einer Weltkugel."},
                {"q": "Wann wurde es errichtet?", "a": "Im Jahr 1942."},
                {"q": "Auf welchem Platz steht es?", "a": "Plaza El Salvador del Mundo."},
                {"q": "Was passierte 1986 mit dem Monument?", "a": "Es wurde bei einem Erdbeben beschädigt und danach restauriert."}
            ],
            "hu": [
                {"q": "Mit ábrázol az emlékmű?", "a": "Jézus Krisztust egy földgömb tetején."},
                {"q": "Mikor emelték?", "a": "1942-ben."},
                {"q": "Melyik téren áll?", "a": "Plaza El Salvador del Mundo."},
                {"q": "Mi történt az emlékművel 1986-ban?", "a": "Megsérült egy földrengésben, majd restaurálták."}
            ],
            "ro": [
                {"q": "Ce reprezintă monumentul?", "a": "Pe Isus Hristos stând pe un glob pământesc."},
                {"q": "Când a fost ridicat?", "a": "În anul 1942."},
                {"q": "În ce piață se află?", "a": "Plaza El Salvador del Mundo."},
                {"q": "Ce s-a întâmplat cu monumentul în 1986?", "a": "A fost avariat de un cutremur și ulterior restaurat."}
            ],
            "en": [
                {"q": "What does the monument depict?", "a": "Jesus Christ standing on top of a globe."},
                {"q": "When was it erected?", "a": "In 1942."},
                {"q": "In which plaza is it located?", "a": "Plaza El Salvador del Mundo."},
                {"q": "What happened to the monument in 1986?", "a": "It was damaged during an earthquake and then restored."}
            ]
        },
        "sv-puerta-diablo": {
            "de": [
                {"q": "Woraus besteht die Puerta del Diablo?", "a": "Aus zwei riesigen, gespaltenen Felsblöcken."},
                {"q": "Woher hat der Ort seinen Namen?", "a": "Aus einer dunklen lokalen Legende."},
                {"q": "Was kann man von dort aus sehen?", "a": "Die Hauptstadt, den Ilopango-See und den Pazifik."},
                {"q": "Für welchen Sport ist der Ort beliebt?", "a": "Klettern und Abseilen."}
            ],
            "hu": [
                {"q": "Miből áll az Ördög Kapuja?", "a": "Két hatalmas, kettéhasadt sziklatömbből."},
                {"q": "Honnan kapta a hely a nevét?", "a": "Egy sötét helyi legendából."},
                {"q": "Mit lehet onnan látni?", "a": "A fővárost, az Ilopango-tavat és a Csendes-óceánt."},
                {"q": "Melyik sportág népszerű itt?", "a": "Sziklamászás és kötélen ereszkedés."}
            ],
            "ro": [
                {"q": "Din ce este formată Puerta del Diablo?", "a": "Din două blocuri de stâncă uriașe, despicate."},
                {"q": "De unde provine numele locului?", "a": "Dintr-o legendă locală întunecată."},
                {"q": "Ce se poate vedea de acolo?", "a": "Capitala, lacul Ilopango și Pacificul."},
                {"q": "Pentru ce sport este popular locul?", "a": "Alpinism și rapel."}
            ],
            "en": [
                {"q": "What is the Devil's Door composed of?", "a": "Two massive split rock boulders."},
                {"q": "Where does the place get its name?", "a": "From a dark local legend."},
                {"q": "What can you see from there?", "a": "The capital, Lake Ilopango, and the Pacific Ocean."},
                {"q": "For what sport is the location popular?", "a": "Rock climbing and rappelling."}
            ]
        },
        "sv-cathedral-santa-ana": {
            "de": [
                {"q": "In welchem Stil ist die Kathedrale von Santa Ana gebaut?", "a": "Neugotischer Stil."},
                {"q": "Wie lange dauerte der Bau?", "a": "Von 1906 bis 1959."},
                {"q": "Wieviele Heiligenstatuen zieren die Fassade?", "a": "28 Statuen."},
                {"q": "Wem ist der Altar gewidmet?", "a": "Der Heiligen Anna, der Schutzpatronin der Stadt."}
            ],
            "hu": [
                {"q": "Milyen stílusban épült a Santa Ana-i székesegyház?", "a": "Neogótikus stílusban."},
                {"q": "Meddig tartott az építése?", "a": "1906-tól 1959-ig."},
                {"q": "Hány szent szobra díszíti a homlokzatot?", "a": "28 szobor."},
                {"q": "Kinek van szentelve az oltár?", "a": "Szent Annának, a város védőszentjének."}
            ],
            "ro": [
                {"q": "În ce stil este construită catedrala din Santa Ana?", "a": "Stil neogotic."},
                {"q": "Cât a durat construcția?", "a": "Din 1906 până în 1959."},
                {"q": "Câte statui de sfinți decorează fațada?", "a": "28 de statui."},
                {"q": "Cui îi este dedicat altarul?", "a": "Sfintei Ana, patroana orașului."}
            ],
            "en": [
                {"q": "In what style is the Santa Ana Cathedral built?", "a": "Neo-Gothic style."},
                {"q": "How long did the construction take?", "a": "From 1906 to 1959."},
                {"q": "How many statues of saints decorate the facade?", "a": "28 statues."},
                {"q": "To whom is the altar dedicated?", "a": "Saint Anne, the city's patron saint."}
            ]
        },
        "sv-cerron-grande": {
            "de": [
                {"q": "Was ist der Cerrón Grande?", "a": "Der größte Stausee El Salvadors."},
                {"q": "Wie wird er noch genannt?", "a": "Lago Suchitlán."},
                {"q": "Welche Stadt liegt an seinem Ufer?", "a": "Suchitoto."},
                {"q": "Wofür ist er ökologisch wichtig?", "a": "Als Habitat für Zugvögel."}
            ],
            "hu": [
                {"q": "Mi az a Cerrón Grande?", "a": "El Salvador legnagyobb víztározója."},
                {"q": "Hogy hívják még?", "a": "Suchitlán-tó."},
                {"q": "Melyik város fekszik a partján?", "a": "Suchitoto."},
                {"q": "Miért fontos ökológiailag?", "a": "Vándormadarak élőhelyeként."}
            ],
            "ro": [
                {"q": "Ce este Cerrón Grande?", "a": "Cel mai mare lac de acumulare din El Salvador."},
                {"q": "Cum mai este numit?", "a": "Lacul Suchitlán."},
                {"q": "Ce oraș se află pe malul său?", "a": "Suchitoto."},
                {"q": "De ce este important ecologic?", "a": "Ca habitat pentru păsările migratoare."}
            ],
            "en": [
                {"q": "What is the Cerron Grande?", "a": "The largest reservoir in El Salvador."},
                {"q": "What is its other name?", "a": "Lake Suchitlan."},
                {"q": "Which town is located on its banks?", "a": "Suchitoto."},
                {"q": "Why is it ecologically significant?", "a": "As a habitat for migratory birds."}
            ]
        },
        "sv-imposible": {
            "de": [
                {"q": "Warum heißt der Park 'El Imposible'?", "a": "Wegen einer früher extrem gefährlichen Schlucht für Kaffeetransporte."},
                {"q": "Was zeichnet die Landschaft aus?", "a": "Sehr steiles, bergiges Gelände und dichter Regenwald."},
                {"q": "Welche Raubtiere leben dort?", "a": "Pumas und Ozelots."},
                {"q": "Wieviele Schmetterlingsarten gibt es dort?", "a": "Über 500 Arten."}
            ],
            "hu": [
                {"q": "Miért hívják a parkot 'El Imposible'-nak?", "a": "Egy korábban a kávészállítmányok számára rendkívül veszélyes szurdok miatt."},
                {"q": "Mi jellemzi a tájat?", "a": "Nagyon meredek, hegyvidéki terep és sűrű esőerdő."},
                {"q": "Milyen ragadozók élnek ott?", "a": "Pumák és ocelotok."},
                {"q": "Hány pillangófaj található ott?", "a": "Több mint 500 faj."}
            ],
            "ro": [
                {"q": "De ce se numește parcul „El Imposible”?", "a": "Din cauza unui defileu care era extrem de periculos pentru transportul cafelei."},
                {"q": "Ce caracterizează peisajul?", "a": "Teren foarte abrupt și muntos, cu pădure tropicală densă."},
                {"q": "Ce prădători trăiesc acolo?", "a": "Pume și oceloți."},
                {"q": "Câte specii de fluturi sunt acolo?", "a": "Peste 500 de specii."}
            ],
            "en": [
                {"q": "Why is the park called 'El Imposible'?", "a": "Due to a gorge that was once extremely dangerous for coffee transport."},
                {"q": "What characterizes the landscape?", "a": "Extremely steep, rugged terrain and dense rainforest."},
                {"q": "Which predators live there?", "a": "Pumas and ocelots."},
                {"q": "How many butterfly species are found there?", "a": "Over 500 species."}
            ]
        },
        "sv-los-cobanos": {
            "de": [
                {"q": "Wofür ist Los Cóbanos bekannt?", "a": "Für seine Korallenriffe im Pazifik."},
                {"q": "Was kann man dort beobachten?", "a": "Buckelwale (zwischen November und März)."},
                {"q": "Welche Farbe hat der Sand?", "a": "Goldfarben."},
                {"q": "Gibt es dort Schiffswracks?", "a": "Ja, zwei historische Wracks aus dem 19. Jahrhundert."}
            ],
            "hu": [
                {"q": "Miről ismert Los Cóbanos?", "a": "A csendes-óceáni korallzátonyairól."},
                {"q": "Mit lehet ott megfigyelni?", "a": "Hosszúszárnyú bálnákat (november és március között)."},
                {"q": "Milyen színű ott a homok?", "a": "Aranyszínű."},
                {"q": "Vannak ott hajóroncsok?", "a": "Igen, két 19. századi történelmi roncs."}
            ],
            "ro": [
                {"q": "Pentru ce este cunoscut Los Cóbanos?", "a": "Pentru recifele sale de corali din Pacific."},
                {"q": "Ce se poate observa acolo?", "a": "Balene cu cocoașă (între noiembrie și martie)."},
                {"q": "Ce culoare are nisipul?", "a": "Auriu."},
                {"q": "Există epave acolo?", "a": "Da, două epave istorice din secolul al XIX-lea."}
            ],
            "en": [
                {"q": "What is Los Cobanos known for?", "a": "Its coral reefs in the Pacific."},
                {"q": "What can you observe there?", "a": "Humpback whales (between November and March)."},
                {"q": "What color is the sand?", "a": "Golden-colored."},
                {"q": "Are there any shipwrecks?", "a": "Yes, two historic 19th-century wrecks."}
            ]
        }
    }

    def format_faq(faq_data):
        res = "faq: {\n"
        for lang in ["de", "hu", "ro", "en"]:
            res += f"      {lang}: [\n"
            for item in faq_data[lang]:
                q = item['q'].replace('"', '\\"')
                a = item['a'].replace('"', '\\"')
                res += f'        {{ q: "{q}", a: "{a}" }},\n'
            res = res.rstrip(',\n') + "\n      ],\n"
        res = res.rstrip(',\n') + "\n    }"
        return res

    for poi_id, faq_data in faqs.items():
        pattern = rf'id: "{poi_id}"(.*?)\n  }}'
        def replacement(match):
            inner_content = match.group(1)
            if 'faq:' in inner_content:
                return match.group(0) # Don't overwrite
            # Insert before the last closing brace of the POI object
            return f'id: "{poi_id}"{inner_content},\n    {format_faq(faq_data)}\n  }}'
        
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    add_faq('lib/visualLab/data/elsalvadorPoi.ts')
