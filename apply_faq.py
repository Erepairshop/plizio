import re
import os

file_path = r'C:\Users\User\plizio-repo\lib\visualLab\data\mexicoPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

faqs = {
    "mex_mon": {
        "de": [
            {"q": "Welcher Berg ist das Wahrzeichen der Stadt?", "a": "Der Cerro de la Silla."},
            {"q": "Wann wurde Monterrey gegründet?", "a": "Im Jahr 1596."},
            {"q": "Was ist der Parque Fundidora?", "a": "Ein Park auf dem Gelände einer ehemaligen Eisenhütte."},
            {"q": "Ist Monterrey industriell bedeutend?", "a": "Ja, es ist ein führendes Industriezentrum Mexikos."},
            {"q": "Wie ist die Umgebung der Stadt?", "a": "Sie ist von der Sierra Madre Oriental umgeben."}
        ],
        "hu": [
            {"q": "Melyik hegy a város jelképe?", "a": "A Cerro de la Silla."},
            {"q": "Mikor alapították Monterreyt?", "a": "1596-ban."},
            {"q": "Mi az a Parque Fundidora?", "a": "Egy park, amely egy egykori vasmű területén jött létre."},
            {"q": "Iparilag jelentős Monterrey?", "a": "Igen, Mexikó egyik vezető ipari központja."},
            {"q": "Milyen a város környezete?", "a": "A Keleti-Sierra Madre hegyvonulata veszi körül."}
        ],
        "ro": [
            {"q": "Care munte este simbolul orașului?", "a": "Cerro de la Silla."},
            {"q": "Când a fost fondat Monterrey?", "a": "În anul 1596."},
            {"q": "Ce este Parcul Fundidora?", "a": "Un parc situat pe locul unei foste topitorii de fier și oțel."},
            {"q": "Este Monterrey important din punct de vedere industrial?", "a": "Da, este un centru industrial de top în Mexic."},
            {"q": "Cum este cadrul natural al orașului?", "a": "Este înconjurat de Sierra Madre Oriental."}
        ],
        "en": [
            {"q": "Which mountain is the city's landmark?", "a": "Cerro de la Silla."},
            {"q": "When was Monterrey founded?", "a": "In 1596."},
            {"q": "What is Fundidora Park?", "a": "A park built on the site of a former steel mill."},
            {"q": "Is Monterrey industrially significant?", "a": "Yes, it is a leading industrial hub in Mexico."},
            {"q": "What is the city's setting?", "a": "It is surrounded by the Sierra Madre Oriental mountains."}
        ]
    },
    "mex_pue": {
        "de": [
            {"q": "Wofür ist die Architektur in Puebla bekannt?", "a": "Für die Verwendung von Talavera-Kacheln."},
            {"q": "Welches berühmte Gericht stammt von hier?", "a": "Mole Poblano."},
            {"q": "Was geschah hier am 5. Mai?", "a": "Die Schlacht von Puebla gegen die Franzosen."},
            {"q": "In der Nähe welches Vulkans liegt die Stadt?", "a": "Popocatépetl."},
            {"q": "Was ist die Biblioteca Palafoxiana?", "a": "Die älteste öffentliche Bibliothek Amerikas."}
        ],
        "hu": [
            {"q": "Miről nevezetes Puebla építészete?", "a": "A Talavera csempék használatáról."},
            {"q": "Melyik híres étel származik innen?", "a": "A Mole Poblano."},
            {"q": "Mi történt itt május 5-én?", "a": "A pueblai csata a francia csapatok ellen."},
            {"q": "Melyik vulkán közelében fekszik a város?", "a": "A Popocatépetl közelében."},
            {"q": "Mi az a Biblioteca Palafoxiana?", "a": "Amerika legrégebbi nyilvános könyvtára."}
        ],
        "ro": [
            {"q": "Prin ce este remarcabilă arhitectura din Puebla?", "a": "Prin utilizarea plăcilor de Talavera."},
            {"q": "Ce preparat faimos provine de aici?", "a": "Mole Poblano."},
            {"q": "Ce s-a întâmplat aici pe 5 mai?", "a": "Bătălia de la Puebla împotriva trupelor franceze."},
            {"q": "Lângă ce vulcan se află orașul?", "a": "Lângă Popocatépetl."},
            {"q": "Ce este Biblioteca Palafoxiana?", "a": "Cea mai veche bibliotecă publică din America."}
        ],
        "en": [
            {"q": "What is Puebla's architecture known for?", "a": "The use of colorful Talavera tiles."},
            {"q": "What famous dish originated here?", "a": "Mole Poblano."},
            {"q": "What happened here on May 5th?", "a": "The Battle of Puebla against French forces."},
            {"q": "Near which volcano is the city located?", "a": "Popocatépetl."},
            {"q": "What is the Biblioteca Palafoxiana?", "a": "The oldest public library in the Americas."}
        ]
    },
    "mex_tol": {
        "de": [
            {"q": "Was ist die klimatische Besonderheit von Toluca?", "a": "Es ist die höchstgelegene Großstadt Mexikos."},
            {"q": "Welche kulinarische Spezialität ist typisch?", "a": "Chorizo (Paprikawurst)."},
            {"q": "Was ist das Cosmovitral?", "a": "Ein botanischer Garten mit Glasmalereien."},
            {"q": "Welcher Vulkan liegt in der Nähe?", "a": "Nevado de Toluca."},
            {"q": "Ist Toluca ein Industriezentrum?", "a": "Ja, besonders für die Automobilindustrie."}
        ],
        "hu": [
            {"q": "Mi Toluca éghajlati jellegzetessége?", "a": "Mexikó legmagasabban fekvő nagyvárosa."},
            {"q": "Melyik kulináris különlegesség jellemző rá?", "a": "A chorizo."},
            {"q": "Mi az a Cosmovitral?", "a": "Egy botanikus kert üvegfestményekkel."},
            {"q": "Melyik vulkán található a közelben?", "a": "A Nevado de Toluca."},
            {"q": "Iparilag jelentős Toluca?", "a": "Igen, jelentős autóipari központ."}
        ],
        "ro": [
            {"q": "Care este particularitatea climatică a orașului Toluca?", "a": "Este orașul la cea mai mare altitudine din Mexic."},
            {"q": "Ce specialitate culinară este tipică?", "a": "Chorizo."},
            {"q": "Ce este Cosmovitral?", "a": "O grădină botanică cu vitralii."},
            {"q": "Ce vulcan se află în apropiere?", "a": "Nevado de Toluca."},
            {"q": "Este Toluca un centru industrial?", "a": "Da, în special pentru industria auto."}
        ],
        "en": [
            {"q": "What is Toluca's climatic specialty?", "a": "It is the highest major city in Mexico."},
            {"q": "What culinary specialty is typical of the city?", "a": "Chorizo."},
            {"q": "What is the Cosmovitral?", "a": "A botanical garden featuring stained glass art."},
            {"q": "Which volcano is located nearby?", "a": "Nevado de Toluca."},
            {"q": "Is Toluca an industrial hub?", "a": "Yes, especially for the automotive industry."}
        ]
    },
    "mex_tij": {
        "de": [
            {"q": "Warum ist Tijuana weltbekannt?", "a": "Es ist die meistbesuchte Grenzstadt der Welt."},
            {"q": "Welches berühmte Gericht wurde hier erfunden?", "a": "Der Caesar Salad."},
            {"q": "Was ist das CECUT?", "a": "Das Kulturzentrum von Tijuana."},
            {"q": "Welche US-Stadt liegt gegenüber?", "a": "San Diego."},
            {"q": "Ist Tijuana kulturell aktiv?", "a": "Ja, es hat eine sehr lebendige Kunst- und Musikszene."}
        ],
        "hu": [
            {"q": "Miért világhírű Tijuana?", "a": "Ez a világ leglátogatottabb határvárosa."},
            {"q": "Melyik híres ételt találták fel itt?", "a": "A Caesar salátát."},
            {"q": "Mi az a CECUT?", "a": "Tijuana kulturális központja."},
            {"q": "Melyik amerikai város fekszik vele szemben?", "a": "San Diego."},
            {"q": "Kulturálisan aktív Tijuana?", "a": "Igen, élénk művészeti és zenei élete van."}
        ],
        "ro": [
            {"q": "De ce este Tijuana cunoscută în întreaga lume?", "a": "Este cel mai vizitat oraș de graniță din lume."},
            {"q": "Ce preparat faimos a fost inventat aici?", "a": "Salata Caesar."},
            {"q": "Ce este CECUT?", "a": "Centrul Cultural din Tijuana."},
            {"q": "Ce oraș din SUA se află vizavi?", a: "San Diego."},
            {"q": "Este Tijuana activă cultural?", "a": "Da, are o scenă artistică și muzicală vibrantă."}
        ],
        "en": [
            {"q": "Why is Tijuana world-famous?", "a": "It is the most visited border city in the world."},
            {"q": "What famous dish was invented here?", "a": "The Caesar salad."},
            {"q": "What is the CECUT?", "a": "The Tijuana Cultural Center."},
            {"q": "Which US city is located across the border?", "a": "San Diego."},
            {"q": "Is Tijuana culturally active?", "a": "Yes, it has a very vibrant arts and music scene."}
        ]
    },
    "mex_leo": {
        "de": [
            {"q": "Wofür ist León weltweit bekannt?", "a": "Als Lederhauptstadt der Welt."},
            {"q": "Welches Event findet jährlich statt?", "a": "Das Internationale Heißluftballon-Festival."},
            {"q": "Was ist das wichtigste Produkt?", "a": "Schuhe und Lederwaren."},
            {"q": "Wann wurde León gegründet?", "a": "Im Jahr 1576."},
            {"q": "Gibt es dort moderne Architektur?", "a": "Ja, z.B. das Forum Cultural Guanajuato."}
        ],
        "hu": [
            {"q": "Miről világszerte ismert León?", "a": "A világ bőrfővárosaként."},
            {"q": "Milyen eseményt rendeznek itt évente?", "a": "A Nemzetközi Hőlégballon Fesztivált."},
            {"q": "Mi a város legfontosabb terméke?", "a": "A cipők és bőráruk."},
            {"q": "Mikor alapították Leónt?", "a": "1576-ban."},
            {"q": "Van modern építészet Leónban?", "a": "Igen, például a Forum Cultural Guanajuato."}
        ],
        "ro": [
            {"q": "Prin ce este cunoscut León la nivel mondial?", "a": "Ca fiind capitala mondială a pielăriei."},
            {"q": "Ce eveniment are loc anual?", "a": "Festivalul Internațional de Baloane cu Aer Cald."},
            {"q": "Care este cel mai important produs?", "a": "Încălțămintea și produsele din piele."},
            {"q": "Când a fost fondat León?", "a": "În anul 1576."},
            {"q": "Există arhitectură modernă în León?", "a": "Da, de exemplu Forum Cultural Guanajuato."}
        ],
        "en": [
            {"q": "What is León world-famous for?", "a": "Being the leather capital of the world."},
            {"q": "What event takes place here annually?", "a": "The International Hot Air Balloon Festival."},
            {"q": "What is the city's main product?", "a": "Shoes and leather goods."},
            {"q": "When was León founded?", "a": "In 1576."},
            {"q": "Is there modern architecture in León?", "a": "Yes, such as the Forum Cultural Guanajuato."}
        ]
    },
    "mex_jua": {
        "de": [
            {"q": "Welche US-Stadt liegt gegenüber?", "a": "El Paso, Texas."},
            {"q": "Warum ist sie wirtschaftlich wichtig?", "a": "Aufgrund der Maquiladora-Fertigungsbetriebe."},
            {"q": "Wann wurde sie gegründet?", "a": "Im Jahr 1659."},
            {"q": "Was ist das Chamizal?", "a": "Ein Park auf früherem Grenzgebiet."},
            {"q": "Spielte sie eine Rolle in der Revolution?", "a": "Ja, eine sehr zentrale Rolle."}
        ],
        "hu": [
            {"q": "Melyik amerikai város fekszik szemben?", "a": "El Paso, Texas."},
            {"q": "Miért fontos gazdaságilag?", "a": "A maquiladora gyártóüzemek miatt."},
            {"q": "Mikor alapították?", "a": "1659-ben."},
            {"q": "Mi az a Chamizal?", "a": "Egy park egy egykori határterületen."},
            {"q": "Volt szerepe a forradalomban?", "a": "Igen, központi szerepet játszott."}
        ],
        "ro": [
            {"q": "Ce oraș din SUA se află vizavi?", "a": "El Paso, Texas."},
            {"q": "De ce este important economic?", "a": "Datorită unităților de producție maquiladora."},
            {"q": "Când a fost fondat?", "a": "În anul 1659."},
            {"q": "Ce este Chamizal?", "a": "Un parc situat pe un fost teritoriu de graniță."},
            {"q": "A jucat un rol în revoluție?", "a": "Da, un rol foarte central."}
        ],
        "en": [
            {"q": "Which US city is located across from it?", "a": "El Paso, Texas."},
            {"q": "Why is it economically important?", "a": "Due to the maquiladora manufacturing plants."},
            {"q": "When was it founded?", "a": "In 1659."},
            {"q": "What is The Chamizal?", "a": "A park located on former border territory."},
            {"q": "Did it play a role in the revolution?", "a": "Yes, a very central role."}
        ]
    },
    "mex_tor": {
        "de": [
            {"q": "Wie alt ist die Stadt Torreón?", "a": "Sie wurde 1893 gegründet."},
            {"q": "Was ist das Wahrzeichen?", "a": "Die Statue Cristo de las Noas."},
            {"q": "In welcher Region liegt sie?", "a": "In der Comarca Lagunera."},
            {"q": "Was war früher wichtig?", "a": "Die Baumwollindustrie."},
            {"q": "Wie ist das Klima?", "a": "Halbwüstenklima, oft sehr heiß."}
        ],
        "hu": [
            {"q": "Mennyi idős Torreón városa?", "a": "1893-ban alapították."},
            {"q": "Mi a város jelképe?", "a": "A Cristo de las Noas szobor."},
            {"q": "Melyik régióban található?", "a": "A Comarca Lagunera régióban."},
            {"q": "Mi volt korábban fontos?", "a": "A gyapotipar."},
            {"q": "Milyen az éghajlata?", "a": "Félsivatagi, gyakran nagyon forró."}
        ],
        "ro": [
            {"q": "Cât de vechi este orașul?", "a": "A fost fondat în 1893."},
            {"q": "Care este simbolul orașului?", "a": "Statuia Cristo de las Noas."},
            {"q": "În ce regiune se află?", "a": "În Comarca Lagunera."},
            {"q": "Ce era important în trecut?", "a": "Industria bumbacului."},
            {"q": "Cum este clima?", "a": "Climat semideșertic, adesea foarte cald."}
        ],
        "en": [
            {"q": "How old is the city of Torreón?", "a": "It was founded in 1893."},
            {"q": "What is the landmark?", "a": "The Cristo de las Noas statue."},
            {"q": "In which region is it located?", "a": "In the Comarca Lagunera."},
            {"q": "What was important in the past?", "a": "The cotton industry."},
            {"q": "What is the climate like?", "a": "Semi-desert climate, often very hot."}
        ]
    },
    "mex_que": {
        "de": [
            {"q": "Was ist das Wahrzeichen?", "a": "Das massive Stein-Aquädukt."},
            {"q": "Warum ist sie historisch wichtig?", "a": "Hier wurde die Verfassung unterzeichnet."},
            {"q": "Ist das Zentrum Weltkulturerbe?", "a": "Ja, seit 1996."},
            {"q": "Was wird hier heute gebaut?", "a": "Flugzeugteile und Hochtechnologie."},
            {"q": "Wann wurde sie gegründet?", "a": "Im Jahr 1531."}
        ],
        "hu": [
            {"q": "Mi a város jelképe?", "a": "A hatalmas kő vízvezeték."},
            {"q": "Miért fontos történelmileg?", "a": "Itt írták alá az alkotmányt."},
            {"q": "A Világörökség része a központ?", "a": "Igen, 1996 óta."},
            {"q": "Mit gyártanak itt ma?", "a": "Repülőgépalkatrészeket és csúcstechnológiát."},
            {"q": "Mikor alapították?", "a": "1531-ben."}
        ],
        "ro": [
            {"q": "Care este simbolul orașului?", "a": "Masivul apeduct din piatră."},
            {"q": "De ce este important istoric?", "a": "Aici a fost semnată Constituția."},
            {"q": "Este centrul sit UNESCO?", "a": "Da, din 1996."},
            {"q": "Ce se produce aici astăzi?", "a": "Componente de aviație și înaltă tehnologie."},
            {"q": "Când a fost fondat?", "a": "În anul 1531."}
        ],
        "en": [
            {"q": "What is the landmark?", "a": "The massive stone aqueduct."},
            {"q": "Why is it historically important?", "a": "The Constitution was signed here."},
            {"q": "Is the center a UNESCO site?", "a": "Yes, since 1996."},
            {"q": "What is produced here today?", "a": "Aerospace parts and high technology."},
            {"q": "When was it founded?", "a": "In 1531."}
        ]
    },
    "mex_mer": {
        "de": [
            {"q": "Warum heißt sie 'Weiße Stadt'?", "a": "Wegen der hellen Kalksteingebäude."},
            {"q": "Wann wurde Mérida gegründet?", "a": "Im Jahr 1542."},
            {"q": "Was ist der Paseo de Montejo?", "a": "Eine prächtige Prachtstraße nach europäischem Vorbild."},
            {"q": "Liegt sie nah an Maya-Ruinen?", "a": "Ja, sehr nah an Uxmal und Chichén Itzá."},
            {"q": "Ist Mérida sicher?", "a": "Sie gilt als die sicherste Stadt Mexikos."}
        ],
        "hu": [
            {"q": "Miért hívják 'Fehér városnak'?", "a": "A világos mészkőépületek miatt."},
            {"q": "Mikor alapították Méridát?", "a": "1542-ben."},
            {"q": "Mi az a Paseo de Montejo?", "a": "Egy pompás sugárút európai mintára."},
            {"q": "Közel van maja romokhoz?", "a": "Igen, nagyon közel Uxmalhoz és Chichén Itzához."},
            {"q": "Biztonságos Mérida?", "a": "Mexikó legbiztonságosabb városának tartják."}
        ],
        "ro": [
            {"q": "De ce se numește „Orașul Alb”?", "a": "Datorită clădirilor din calcar alb."},
            {"q": "Când a fost fondat Mérida?", "a": "În anul 1542."},
            {"q": "Ce este Paseo de Montejo?", "a": "Un bulevard splendid după model european."},
            {"q": "Este aproape de ruine maiașe?", "a": "Da, foarte aproape de Uxmal și Chichén Itzá."},
            {"q": "Este Mérida un oraș sigur?", "a": "Este considerat cel mai sigur oraș din Mexic."}
        ],
        "en": [
            {"q": "Why is it called the 'White City'?", "a": "Because of its white limestone buildings."},
            {"q": "When was Mérida founded?", "a": "In 1542."},
            {"q": "What is Paseo de Montejo?", "a": "A grand boulevard inspired by European styles."},
            {"q": "Is it close to Maya ruins?", "a": "Yes, very close to Uxmal and Chichén Itzá."},
            {"q": "Is Mérida safe?", "a": "It is considered the safest city in Mexico."}
        ]
    },
    "mex_slp": {
        "de": [
            {"q": "Was war die Basis des Reichtums?", "a": "Silberminen."},
            {"q": "Wann wurde die Stadt gegründet?", "a": "Im Jahr 1592."},
            {"q": "Gehört sie zum Weltkulturerbe?", "a": "Ja, das historische Zentrum ist UNESCO-geschützt."},
            {"q": "Nach wem ist sie benannt?", "a": "Nach König Ludwig IX. von Frankreich (Saint Louis)."},
            {"q": "Was ist die 'Procession del Silencio'?", "a": "Eine berühmte Karfreitagsprozession."}
        ],
        "hu": [
            {"q": "Mi volt a gazdagság alapja?", "a": "Az ezüstbányák."},
            {"q": "Mikor alapították a várost?", "a": "1592-ben."},
            {"q": "A Világörökség része?", "a": "Igen, a történelmi belváros UNESCO védelem alatt áll."},
            {"q": "Kiről nevezték el?", "a": "IX. Lajos francia királyról (Szent Lajos)."},
            {"q": "Mi az a 'Procession del Silencio'?", "a": "Egy híres nagypénteki körmenet."}
        ],
        "ro": [
            {"q": "Care a fost baza bogăției orașului?", "a": "Minele de argint."},
            {"q": "Când a fost fondat orașul?", "a": "În anul 1592."},
            {"q": "Face parte din Patrimoniul Mondial?", "a": "Da, centrul istoric este protejat de UNESCO."},
            {"q": "După cine a fost numit?", "a": "După regele Ludovic al IX-lea al Franței (Sfântul Ludovic)."},
            {"q": "Ce este „Procession del Silencio”?", "a": "O faimoasă procesiune de Vinerea Mare."}
        ],
        "en": [
            {"q": "What was the basis of the city's wealth?", "a": "Silver mining."},
            {"q": "When was the city founded?", "a": "In 1592."},
            {"q": "Is it a World Heritage site?", "a": "Yes, the historic center is UNESCO-protected."},
            {"q": "Who is it named after?", "a": "King Louis IX of France (Saint Louis)."},
            {"q": "What is the 'Procession del Silencio'?", "a": "A famous Good Friday procession."}
        ]
    },
    "mex_agu": {
        "de": [
            {"q": "Was bedeutet der Name Aguascalientes?", "a": "Heiße Wasser (Thermalquellen)."},
            {"q": "Welches Fest ist besonders berühmt?", "a": "Die Feria Nacional de San Marcos."},
            {"q": "Wann findet dieses Fest statt?", "a": "Jährlich im April und Mai."},
            {"q": "Wer ist ein berühmter Sohn der Stadt?", "a": "Der Künstler José Guadalupe Posada."},
            {"q": "Ist die Stadt industriell wichtig?", "a": "Ja, besonders für die Automobilherstellung."}
        ],
        "hu": [
            {"q": "Mit jelent az Aguascalientes név?", "a": "Forró vizek (termálforrások)."},
            {"q": "Melyik ünnepe híres?", "a": "A Feria Nacional de San Marcos."},
            {"q": "Mikor tartják ezt az ünnepet?", "a": "Minden év áprilisában és májusában."},
            {"q": "Ki a város híres szülötte?", "a": "José Guadalupe Posada művész."},
            {"q": "Iparilag jelentős a város?", "a": "Igen, különösen az autógyártásban."}
        ],
        "ro": [
            {"q": "Ce înseamnă numele Aguascalientes?", "a": "Ape fierbinți (izvoare termale)."},
            {"q": "Care este cea mai faimoasă sărbătoare?", "a": "Feria Nacional de San Marcos."},
            {"q": "Când are loc acest festival?", "a": "Anual în aprilie și mai."},
            {"q": "Cine este un cetățean faimos al orașului?", "a": "Artistul José Guadalupe Posada."},
            {"q": "Este orașul important industrial?", "a": "Da, în special pentru producția de automobile."}
        ],
        "en": [
            {"q": "What does the name Aguascalientes mean?", "a": "Hot waters (thermal springs)."},
            {"q": "Which festival is very famous?", "a": "The Feria Nacional de San Marcos."},
            {"q": "When does this festival take place?", "a": "Annually in April and May."},
            {"q": "Who is a famous artist from here?", "a": "José Guadalupe Posada."},
            {"q": "Is the city industrially important?", "a": "Yes, especially for car manufacturing."}
        ]
    },
    "mex_her": {
        "de": [
            {"q": "Wie ist das Klima in Hermosillo?", "a": "Heißes Wüstenklima."},
            {"q": "Wofür ist die Küche bekannt?", "a": "Für exzellentes Rindfleisch (Carne Asada)."},
            {"q": "Ist das Meer nah?", "a": "Ja, Bahía de Kino liegt etwa eine Stunde entfernt."},
            {"q": "Wann wurde die Stadt gegründet?", "a": "Im Jahr 1700."},
            {"q": "Was ist die 'Catedral de la Asunción'?", "a": "Die markante Kathedrale im Zentrum."}
        ],
        "hu": [
            {"q": "Milyen Hermosillo éghajlata?", "a": "Forró sivatagi éghajlat."},
            {"q": "Miről híres a konyhája?", "a": "A kiváló marhahúsról (Carne Asada)."},
            {"q": "Közel van a tenger?", "a": "Igen, Bahía de Kino kb. egy órányira van."},
            {"q": "Mikor alapították a várost?", "a": "1700-ban."},
            {"q": "Mi a 'Catedral de la Asunción'?", "a": "A város központjának jellegzetes katedrálisa."}
        ],
        "ro": [
            {"q": "Cum este clima în Hermosillo?", "a": "Climat deșertic fierbinte."},
            {"q": "Pentru ce este faimoasă bucătăria locală?", "a": "Pentru carnea de vită excelentă (Carne Asada)."},
            {"q": "Este marea aproape?", "a": "Da, Bahía de Kino se află la aproximativ o oră distanță."},
            {"q": "Când a fost fondat orașul?", "a": "În anul 1700."},
            {"q": "Ce este „Catedral de la Asunción”?", "a": "Catedrala emblematică din centru."}
        ],
        "en": [
            {"q": "What is the climate like in Hermosillo?", "a": "Hot desert climate."},
            {"q": "What is the local cuisine known for?", "a": "Excellent beef (Carne Asada)."},
            {"q": "Is the sea nearby?", "a": "Yes, Bahía de Kino is about an hour away."},
            {"q": "When was the city founded?", "a": "In 1700."},
            {"q": "What is the 'Catedral de la Asunción'?", "a": "The striking cathedral in the city center."}
        ]
    },
    "mex_sal": {
        "de": [
            {"q": "Welches Kleidungsstück ist typisch?", "a": "Der Sarape (handgewebte Decke)."},
            {"q": "Warum heißt sie 'Detroit Mexikos'?", "a": "Wegen der starken Automobilindustrie."},
            {"q": "Was ist das Museo del Desierto?", "a": "Ein bedeutendes Naturkundemuseum über die Wüste."},
            {"q": "Wann wurde Saltillo gegründet?", "a": "Im Jahr 1577."},
            {"q": "Ist die Kathedrale sehenswert?", "a": "Ja, sie ist ein Meisterwerk des Barock und Klassizismus."}
        ],
        "hu": [
            {"q": "Melyik ruhadarab jellemző ide?", "a": "A sarape (kézzel szőtt takaró)."},
            {"q": "Miért hívják 'Mexikó Detroitjának'?", "a": "Az erős autóipar miatt."},
            {"q": "Mi az a Museo del Desierto?", "a": "Egy jelentős természettudományi múzeum a sivatagról."},
            {"q": "Mikor alapították Saltillót?", "a": "1577-ben."},
            {"q": "Érdemes megnézni a katedrálist?", "a": "Igen, a barokk és klasszicizmus remekműve."}
        ],
        "ro": [
            {"q": "Ce articol vestimentar este tipic?", "a": "Sarape (pătură țesută manual)."},
            {"q": "De ce este numit „Detroit-ul Mexicului”?", "a": "Datorită industriei auto puternice."},
            {"q": "Ce este Museo del Desierto?", "a": "Un muzeu de istorie naturală important despre deșert."},
            {"q": "Când a fost fondat Saltillo?", "a": "În anul 1577."},
            {"q": "Merită vizitată catedrala?", "a": "Da, este o capodoperă a barocului și clasicismului."}
        ],
        "en": [
            {"q": "What clothing item is typical here?", "a": "The Sarape (hand-woven blanket)."},
            {"q": "Why is it called 'Mexico's Detroit'?", "a": "Because of its strong automotive industry."},
            {"q": "What is the Museo del Desierto?", "a": "A major natural history museum about the desert."},
            {"q": "When was Saltillo founded?", "a": "In 1577."},
            {"q": "Is the cathedral worth visiting?", "a": "Yes, it is a masterpiece of Baroque and Neoclassical styles."}
        ]
    },
    "mex_chi": {
        "de": [
            {"q": "Wofür ist die Stadt geschichtlich bekannt?", "a": "Als Zentrum der mexikanischen Revolution."},
            {"q": "Wer war Pancho Villa?", "a": "Ein Revolutionsführer, dessen Haus heute ein Museum ist."},
            {"q": "Startet hier der Chepe-Zug?", "a": "Ja, es ist ein Ausgangspunkt für den Copper Canyon."},
            {"q": "Wann wurde Chihuahua gegründet?", "a": "Im Jahr 1709."},
            {"q": "Was ist die 'Quinta Gameros'?", "a": "Ein prächtiges Jugendstil-Herrenhaus."}
        ],
        "hu": [
            {"q": "Miről ismert történelmileg a város?", "a": "A mexikói forradalom központjaként."},
            {"q": "Ki volt Pancho Villa?", "a": "Forradalmi vezér, akinek háza ma múzeum."},
            {"q": "Innen indul a Chepe vonat?", "a": "Igen, a Réz-kanyon felé tartó vonat egyik végállomása."},
            {"q": "Mikor alapították Chihuahuát?", "a": "1709-ben."},
            {"q": "Mi az a 'Quinta Gameros'?", "a": "Egy pompás szecessziós kúria."}
        ],
        "ro": [
            {"q": "Pentru ce este cunoscut orașul istoric?", "a": "Ca centru al Revoluției Mexicane."},
            {"q": "Cine a fost Pancho Villa?", "a": "Un lider revoluționar a cărui casă este acum muzeu."},
            {"q": "De aici pleacă trenul Chepe?", "a": "Da, este un punct de plecare pentru Copper Canyon."},
            {"q": "Când a fost fondat Chihuahua?", "a": "În anul 1709."},
            {"q": "Ce este „Quinta Gameros”?", "a": "Un conac splendid în stil Art Nouveau."}
        ],
        "en": [
            {"q": "What is the city historically known for?", "a": "Being a center of the Mexican Revolution."},
            {"q": "Who was Pancho Villa?", "a": "A revolutionary leader whose home is now a museum."},
            {"q": "Does the Chepe train start here?", "a": "Yes, it is a major starting point for the Copper Canyon."},
            {"q": "When was Chihuahua founded?", "a": "In 1709."},
            {"q": "What is 'Quinta Gameros'?", "a": "A magnificent Art Nouveau mansion."}
        ]
    },
    "mex_cul": {
        "de": [
            {"q": "Warum heißt sie 'Stadt der drei Flüsse'?", "a": "Wegen der Flüsse Humaya, Tamazula und Culiacán."},
            {"q": "Was ist die kulinarische Spezialität?", "a": "Aguachile und frische Meeresfrüchte."},
            {"q": "Ist die Landwirtschaft wichtig?", "a": "Ja, es ist ein bedeutendes Zentrum für Gemüseexporte."},
            {"q": "Wann wurde sie gegründet?", "a": "Im Jahr 1531."},
            {"q": "Gibt es dort Parks?", "a": "Ja, z.B. das botanische Garten und den Las Riberas Park."}
        ],
        "hu": [
            {"q": "Miért hívják a 'három folyó városának'?", "a": "A Humaya, Tamazula és Culiacán folyók miatt."},
            {"q": "Mi a kulináris különlegesség?", "a": "Az aguachile és a friss tenger gyümölcsei."},
            {"q": "Fontos a mezőgazdaság?", "a": "Igen, a zöldségexport egyik legfőbb központja."},
            {"q": "Mikor alapították?", "a": "1531-ben."},
            {"q": "Vannak parkok a városban?", "a": "Igen, például a botanikus kert és a Las Riberas park."}
        ],
        "ro": [
            {"q": "De ce se numește „orașul celor trei râuri”?", "a": "Datorită râurilor Humaya, Tamazula și Culiacán."},
            {"q": "Care este specialitatea culinară?", "a": "Aguachile și fructele de mare proaspete."},
            {"q": "Este agricultura importantă?", "a": "Da, este un centru major pentru exportul de legume."},
            {"q": "Când a fost fondat?", "a": "În anul 1531."},
            {"q": "Există parcuri acolo?", "a": "Da, de exemplu grădina botanică și Parcul Las Riberas."}
        ],
        "en": [
            {"q": "Why is it called 'City of Three Rivers'?", "a": "Because of the Humaya, Tamazula, and Culiacán rivers."},
            {"q": "What is the culinary specialty?", "a": "Aguachile and fresh seafood."},
            {"q": "Is agriculture important here?", "a": "Yes, it is a major hub for vegetable exports."},
            {"q": "When was it founded?", "a": "In 1531."},
            {"q": "Are there any nice parks?", "a": "Yes, like the Botanical Garden and Las Riberas Park."}
        ]
    },
    "mex_mor": {
        "de": [
            {"q": "Warum ist Morelia rosa?", "a": "Wegen des lokalen rosa Lavasteins (Cantera Rosa)."},
            {"q": "Wer wurde hier geboren?", "a": "José María Morelos, ein Held der Unabhängigkeit."},
            {"q": "Was ist das bekannteste Bauwerk?", "a": "Die barocke Kathedrale von Morelia."},
            {"q": "Gibt es dort ein Aquädukt?", "a": "Ja, ein beeindruckendes koloniales Stein-Aquädukt."},
            {"q": "Wann wurde die Stadt gegründet?", "a": "Im Jahr 1541 als Valladolid."}
        ],
        "hu": [
            {"q": "Miért rózsaszín Morelia?", "a": "A helyi rózsaszín lávakő (Cantera Rosa) miatt."},
            {"q": "Ki született itt?", "a": "José María Morelos, a függetlenségi háború hőse."},
            {"q": "Mi a legismertebb építmény?", "a": "A moreliai barokk katedrális."},
            {"q": "Van vízvezeték a városban?", "a": "Igen, egy lenyűgöző gyarmati kő vízvezeték."},
            {"q": "Mikor alapították?", "a": "1541-ben, eredetileg Valladolid néven."}
        ],
        "ro": [
            {"q": "De ce este Morelia roz?", "a": "Datorită pietrei vulcanice roz locale (Cantera Rosa)."},
            {"q": "Cine s-a născut aici?", "a": "José María Morelos, un erou al independenței."},
            {"q": "Care este cea mai cunoscută clădire?", "a": "Catedrala barocă din Morelia."},
            {"q": "Există un apeduct acolo?", "a": "Da, un apeduct impresionant din piatră colonială."},
            {"q": "Când a fost fondat orașul?", "a": "În anul 1541 sub numele de Valladolid."}
        ],
        "en": [
            {"q": "Why is Morelia pink?", "a": "Because of the local pink volcanic stone (Cantera Rosa)."},
            {"q": "Who was born here?", "a": "José María Morelos, a hero of independence."},
            {"q": "What is the most famous building?", "a": "The Baroque Morelia Cathedral."},
            {"q": "Is there an aqueduct?", "a": "Yes, an impressive colonial stone aqueduct."},
            {"q": "When was it founded?", "a": "In 1541, originally named Valladolid."}
        ]
    },
    "mex_aca": {
        "de": [
            {"q": "Wofür ist Acapulco berühmt?", "a": "Für die Klippenspringer von La Quebrada."},
            {"q": "Ist es eine alte Stadt?", "a": "Ja, sie wurde bereits 1521 gegründet."},
            {"q": "War es ein wichtiger Hafen?", "a": "Ja, für den Handel mit den Philippinen (Manila-Galeone)."},
            {"q": "Was ist das Fort San Diego?", "a": "Eine historische Festung zum Schutz vor Piraten."},
            {"q": "Welche Form hat die Bucht?", "a": "Eine markante Halbmondform."}
        ],
        "hu": [
            {"q": "Miről híres Acapulco?", "a": "A La Quebrada sziklaugróiról."},
            {"q": "Régi város Acapulco?", "a": "Igen, már 1521-ben alapították."},
            {"q": "Fontos kikötő volt?", "a": "Igen, a Fülöp-szigetekkel való kereskedelem központja volt."},
            {"q": "Mi az a San Diego erőd?", "a": "Egy történelmi erőd a kalózok elleni védelemre."},
            {"q": "Milyen alakú az öböl?", "a": "Jellegzetes félhold alakú."}
        ],
        "ro": [
            {"q": "Pentru ce este faimos Acapulco?", "a": "Pentru săritorii de pe stânci de la La Quebrada."},
            {"q": "Este un oraș vechi?", "a": "Da, a fost fondat încă din 1521."},
            {"q": "A fost un port important?", "a": "Da, pentru comerțul cu Filipine (Galeonul de Manila)."},
            {"q": "Ce este Fortul San Diego?", "a": "O fortăreață istorică pentru protecția împotriva piraților."},
            {"q": "Ce formă are golful?", "a": "O formă distinctă de semilună."}
        ],
        "en": [
            {"q": "What is Acapulco famous for?", "a": "The cliff divers of La Quebrada."},
            {"q": "Is it an old city?", "a": "Yes, it was founded as early as 1521."},
            {"q": "Was it an important port?", "a": "Yes, for trade with the Philippines (Manila Galleon)."},
            {"q": "What is Fort San Diego?", "a": "A historic fortress for protection against pirates."},
            {"q": "What shape is the bay?", "a": "A striking crescent shape."}
        ]
    },
    "mex_can": {
        "de": [
            {"q": "Wann wurde Cancún gegründet?", "a": "Erst im Jahr 1970 als geplantes Tourismusprojekt."},
            {"q": "Was war es vorher?", "a": "Ein kleines, fast unbewohntes Fischerdorf."},
            {"q": "Was ist das MUSA?", "a": "Ein Unterwassermuseum für Kunst und Korallenschutz."},
            {"q": "Welches Meer liegt vor Cancún?", "a": "Das Karibische Meer."},
            {"q": "Ist es nah an Maya-Stätten?", "a": "Ja, z.B. El Rey direkt in der Hotelzone."}
        ],
        "hu": [
            {"q": "Mikor alapították Cancúnt?", "a": "Csak 1970-ben, tervezett turisztikai projektként."},
            {"q": "Mi volt előtte?", "a": "Egy kicsi, szinte lakatlan halászfalu."},
            {"q": "Mi az a MUSA?", "a": "Víz alatti múzeum a művészetért és a korallok védelméért."},
            {"q": "Melyik tenger mossa partjait?", "a": "A Karibi-tenger."},
            {"q": "Közel van maja helyszínekhez?", "a": "Igen, pl. El Rey romjai közvetlenül a hotelzónában vannak."}
        ],
        "ro": [
            {"q": "Când a fost fondat Cancún?", "a": "Recent, în anul 1970, ca proiect turistic planificat."},
            {"q": "Ce era înainte?", "a": "Un mic sat de pescari, aproape nelocuit."},
            {"q": "Ce este MUSA?", "a": "Un muzeu subacvatic pentru artă și protecția coralilor."},
            {"q": "Ce mare se află la Cancún?", "a": "Marea Caraibelor."},
            {"q": "Este aproape de situri maiașe?", "a": "Da, de exemplu El Rey chiar în zona hotelieră."}
        ],
        "en": [
            {"q": "When was Cancún founded?", "a": "In 1970, as a planned tourism project."},
            {"q": "What was it before?", "a": "A small, nearly uninhabited fishing village."},
            {"q": "What is the MUSA?", "a": "An underwater museum for art and coral conservation."},
            {"q": "Which sea borders Cancún?", "a": "The Caribbean Sea."},
            {"q": "Is it close to Maya sites?", "a": "Yes, such as El Rey right in the Hotel Zone."}
        ]
    },
    "mx-rio-bravo": {
        "de": [
            {"q": "Wie heißt der Fluss in den USA?", "a": "Rio Grande."},
            {"q": "In welches Meer mündet er?", "a": "In den Golf von Mexiko."},
            {"q": "Wie lang ist er etwa?", "a": "Zirka 3.034 Kilometer."},
            {"q": "Seit wann bildet er die Grenze?", "a": "Seit dem Jahr 1848."},
            {"q": "Ist er schiffbar?", "a": "Nur in kleinen Teilen, meist ist er eher flach."}
        ],
        "hu": [
            {"q": "Hogy hívják a folyót az USA-ban?", "a": "Rio Grande."},
            {"q": "Melyik tengerbe torkollik?", "a": "A Mexikói-öbölbe."},
            {"q": "Milyen hosszú körülbelül?", "a": "Kb. 3034 kilométer."},
            {"q": "Mióta alkotja a határt?", "a": "1848 óta."},
            {"q": "Hajózható a folyó?", "a": "Csak kis részben, többnyire sekély."}
        ],
        "ro": [
            {"q": "Cum se numește râul în SUA?", "a": "Rio Grande."},
            {"q": "În ce mare se varsă?", "a": "În Golful Mexic."},
            {"q": "Ce lungime are aproximativ?", "a": "Circa 3.034 kilometri."},
            {"q": "De când formează granița?", "a": "Din anul 1848."},
            {"q": "Este navigabil?", "a": "Doar pe porțiuni mici, fiind în general puțin adânc."}
        ],
        "en": [
            {"q": "What is the river called in the USA?", "a": "Rio Grande."},
            {"q": "Where does it empty?", "a": "Into the Gulf of Mexico."},
            {"q": "How long is it approximately?", "a": "Around 3,034 kilometers."},
            {"q": "Since when has it been the border?", "a": "Since 1848."},
            {"q": "Is it navigable?", "a": "Only in small sections; it's mostly shallow."}
        ]
    },
    "mx-lake-chapala": {
        "de": [
            {"q": "Wie groß ist der Chapalasee?", "a": "Etwa 1.100 Quadratkilometer."},
            {"q": "In welchen Bundesstaaten liegt er?", "a": "Jalisco und Michoacán."},
            {"q": "Welche Stadt versorgt er mit Wasser?", "a": "Hauptsächlich Guadalajara."},
            {"q": "Gibt es dort viele ausländische Bewohner?", "a": "Ja, es gibt dort eine große Gemeinde von US- und kanadischen Rentnern."},
            {"q": "Welche Vögel überwintern dort?", "a": "Unter anderem der weiße Pelikan."}
        ],
        "hu": [
            {"q": "Mekkora a Chapala-tó?", "a": "Körülbelül 1100 négyzetkilométer."},
            {"q": "Melyik államokban található?", "a": "Jalisco és Michoacán területén."},
            {"q": "Melyik várost látja el vízzel?", "a": "Főként Guadalajarát."},
            {"q": "Sok külföldi él a környéken?", "a": "Igen, jelentős amerikai és kanadai nyugdíjas közösség él itt."},
            {"q": "Milyen madarak telelnek itt?", "a": "Többek között a fehér pelikán."}
        ],
        "ro": [
            {"q": "Ce suprafață are Lacul Chapala?", "a": "Aproximativ 1.100 de kilometri pătrați."},
            {"q": "În ce state este situat?", "a": "Jalisco și Michoacán."},
            {"q": "Ce oraș aprovizionează cu apă?", "a": "În principal Guadalajara."},
            {"q": "Locuiesc mulți străini în zonă?", "a": "Da, există o comunitate mare de pensionari din SUA și Canada."},
            {"q": "Ce păsări iernează acolo?", "a": "Printre altele, pelicanul alb."}
        ],
        "en": [
            {"q": "How large is Lake Chapala?", "a": "About 1,100 square kilometers."},
            {"q": "In which states is it located?", "a": "Jalisco and Michoacán."},
            {"q": "Which city does it supply with water?", "a": "Mainly Guadalajara."},
            {"q": "Are there many foreign residents?", "a": "Yes, it has a large community of US and Canadian expats."},
            {"q": "Which birds overwinter there?", "a": "Including the American white pelican."}
        ]
    },
    "mx-lacandon-jungle": {
        "de": [
            {"q": "Wo befindet sich dieser Urwald?", "a": "Im Bundesstaat Chiapas."},
            {"q": "Welche Raubkatze lebt dort?", "a": "Der Jaguar."},
            {"q": "Welches indigene Volk lebt dort?", "a": "Die Lacandon-Maya."},
            {"q": "Gibt es dort Maya-Stätten?", "a": "Ja, z.B. Bonampak und Yaxchilán."},
            {"q": "Ist es ein geschütztes Gebiet?", "a": "Ja, es ist ein Biosphärenreservat."}
        ],
        "hu": [
            {"q": "Hol található ez az őserdő?", "a": "Chiapas államban."},
            {"q": "Melyik nagymacska él itt?", "a": "A jaguár."},
            {"q": "Melyik indián nép él itt?", "a": "A lakandon maják."},
            {"q": "Vannak itt maja romok?", "a": "Igen, pl. Bonampak és Yaxchilán."},
            {"q": "Védett területről van szó?", "a": "Igen, bioszféra-rezervátum."}
        ],
        "ro": [
            {"q": "Unde se află această junglă?", "a": "În statul Chiapas."},
            {"q": "Ce felină mare trăiește acolo?", "a": "Jaguarul."},
            {"q": "Ce popor indigen trăiește acolo?", "a": "Maiașii Lacandoni."},
            {"q": "Există situri maiașe în zonă?", "a": "Da, de exemplu Bonampak și Yaxchilán."},
            {"q": "Este o zonă protejată?", "a": "Da, este o rezervație a biosferei."}
        ],
        "en": [
            {"q": "Where is this jungle located?", "a": "In the state of Chiapas."},
            {"q": "Which large cat lives there?", "a": "The jaguar."},
            {"q": "Which indigenous people live there?", "a": "The Lacandon Maya."},
            {"q": "Are there Maya sites nearby?", "a": "Yes, including Bonampak and Yaxchilán."},
            {"q": "Is it a protected area?", "a": "Yes, it is a Biosphere Reserve."}
        ]
    },
    "mx-iztaccihuatl": {
        "de": [
            {"q": "Was bedeutet der Name?", "a": "Weiße Frau auf Nahuatl."},
            {"q": "Ist der Vulkan aktiv?", "a": "Nein, er gilt als ruhend."},
            {"q": "Wie hoch ist der Berg?", "a": "5.230 Meter."},
            {"q": "Was ist die Legende dahinter?", "a": "Eine Prinzessin, die aus Trauer starb."},
            {"q": "Welcher Vulkan ist sein Nachbar?", "a": "Der Popocatépetl."}
        ],
        "hu": [
            {"q": "Mit jelent a név?", "a": "Fehér nő nahuatl nyelven."},
            {"q": "Aktív a vulkán?", "a": "Nem, alvónak tekintik."},
            {"q": "Milyen magas a hegy?", "a": "5230 méter."},
            {"q": "Mi a hozzá kapcsolódó legenda?", "a": "Egy hercegnő, aki bánatában halt meg."},
            {"q": "Melyik vulkán a szomszédja?", "a": "A Popocatépetl."}
        ],
        "ro": [
            {"q": "Ce înseamnă numele?", "a": "Femeia albă în limba nahuatl."},
            {"q": "Este vulcanul activ?", "a": "Nu, este considerat adormit."},
            {"q": "Ce înălțime are muntele?", "a": "5.230 de metri."},
            {"q": "Care este legenda din spatele numelui?", "a": "O prințesă care a murit de durere."},
            {"q": "Ce vulcan este vecinul său?", "a": "Popocatépetl."}
        ],
        "en": [
            {"q": "What does the name mean?", "a": "White Woman in Nahuatl."},
            {"q": "Is the volcano active?", "a": "No, it is considered dormant."},
            {"q": "How high is the mountain?", "a": "5,230 meters."},
            {"q": "What is the legend behind it?", "a": "A princess who died of grief."},
            {"q": "Which volcano is its neighbor?", "a": "Popocatépetl."}
        ]
    },
    "mx-monte-alban": {
        "de": [
            {"q": "Welche Kultur hat diese Stadt erbaut?", "a": "Die Zapoteken."},
            {"q": "Wann wurde sie gegründet?", "a": "Etwa 500 v. Chr."},
            {"q": "Wo liegt sie?", "a": "Im Tal von Oaxaca auf einem Hügel."},
            {"q": "Was sind die 'Danzantes'?", "a": "Steinreliefs, die tanzende oder leidende Figuren zeigen."},
            {"q": "Gehört sie zum Weltkulturerbe?", "a": "Ja, seit 1987."}
        ],
        "hu": [
            {"q": "Melyik kultúra építette ezt a várost?", "a": "A zapotékok."},
            {"q": "Mikor alapították?", "a": "i.e. 500 körül."},
            {"q": "Hol található?", "a": "Az Oaxaca-völgyben, egy dombtetőn."},
            {"q": "Mik azok a 'Danzantes'?", "a": "Táncoló vagy szenvedő alakokat ábrázoló kődomborművek."},
            {"q": "A Világörökség része?", "a": "Igen, 1987 óta."}
        ],
        "ro": [
            {"q": "Ce cultură a construit acest oraș?", "a": "Zapotecii."},
            {"q": "Când a fost fondat?", "a": "În jurul anului 500 î.Hr."},
            {"q": "Unde se află?", "a": "În valea Oaxaca, pe un deal."},
            {"q": "Ce sunt „Danzantes”?", "a": "Reliefuri în piatră care înfățișează figuri dansând sau suferind."},
            {"q": "Este sit UNESCO?", "a": "Da, din 1987."}
        ],
        "en": [
            {"q": "Which culture built this city?", "a": "The Zapotecs."},
            {"q": "When was it founded?", "a": "Around 500 BC."},
            {"q": "Where is it located?", "a": "In the Oaxaca Valley on a hilltop."},
            {"q": "What are the 'Danzantes'?", "a": "Stone reliefs showing dancing or suffering figures."},
            {"q": "Is it a World Heritage site?", "a": "Yes, since 1987."}
        ]
    },
    "mx-uxmal-new": {
        "de": [
            {"q": "Welchen Baustil zeigt Uxmal?", "a": "Den Puuc-Stil."},
            {"q": "Was ist das markanteste Gebäude?", "a": "Die Pyramide des Wahrsagers."},
            {"q": "Wann wurde sie gegründet?", "a": "Etwa 700 n. Chr."},
            {"q": "Was bedeutet der Name Uxmal?", "a": "Dreimal erbaut."},
            {"q": "Wofür ist die Fassade bekannt?", "a": "Für ihre extrem feinen Steinmetzarbeiten."}
        ],
        "hu": [
            {"q": "Milyen építészeti stílust képvisel?", "a": "A Puuc stílust."},
            {"q": "Mi a legjellegzetesebb épülete?", "a": "A Varázsló piramisa."},
            {"q": "Mikor alapították?", "a": "i.sz. 700 körül."},
            {"q": "Mit jelent az Uxmal név?", "a": "Háromszor épült."},
            {"q": "Miről ismertek a homlokzatok?", "a": "A rendkívül finom kőfaragásokról."}
        ],
        "ro": [
            {"q": "Ce stil arhitectural reprezintă Uxmal?", "a": "Stilul Puuc."},
            {"q": "Care este cea mai distinctivă clădire?", "a": "Piramida Magicianului."},
            {"q": "Când a fost fondat?", "a": "În jurul anului 700 d.Hr."},
            {"q": "Ce înseamnă numele Uxmal?", "a": "Construit de trei ori."},
            {"q": "Pentru ce sunt cunoscute fațadele?", "a": "Pentru sculpturile în piatră extrem de fine."}
        ],
        "en": [
            {"q": "What architectural style does Uxmal show?", "a": "The Puuc style."},
            {"q": "What is the most striking building?", "a": "The Pyramid of the Magician."},
            {"q": "When was it founded?", "a": "Around 700 AD."},
            {"q": "What does the name Uxmal mean?", "a": "Thrice built."},
            {"q": "What are the facades known for?", "a": "Their extremely intricate stonework."}
        ]
    },
    "mex_chichen": {
        "de": [
            {"q": "Was ist das bekannteste Gebäude?", "a": "El Castillo (Pyramide des Kukulcán)."},
            {"q": "Ist es eines der neuen Weltwunder?", "a": "Ja, seit 2007."},
            {"q": "Was passiert zur Tagundnachtgleiche?", "a": "Ein Licht-Schatten-Spiel zeigt eine Schlange."},
            {"q": "War es eine Maya-Stadt?", "a": "Ja, eine der bedeutendsten."},
            {"q": "Wann wurde sie gegründet?", "a": "Etwa um 600 n. Chr."}
        ],
        "hu": [
            {"q": "Mi a legismertebb épülete?", "a": "El Castillo (Kukulcán piramis)."},
            {"q": "A világ új csodái közé tartozik?", "a": "Igen, 2007 óta."},
            {"q": "Mi történik a napéjegyenlőségkor?", "a": "Egy fény-árnyék játék kígyó alakot rajzol."},
            {"q": "Maja város volt?", "a": "Igen, az egyik legjelentősebb."},
            {"q": "Mikor alapították?", "a": "i.sz. 600 körül."}
        ],
        "ro": [
            {"q": "Care este cea mai faimoasă clădire?", "a": "El Castillo (Piramida lui Kukulcán)."},
            {"q": "Este una dintre noile minuni ale lumii?", "a": "Da, din 2007."},
            {"q": "Ce se întâmplă la echinocțiu?", "a": "Un joc de lumini și umbre înfățișează un șarpe."},
            {"q": "A fost un oraș maiaș?", "a": "Da, unul dintre cele mai importante."},
            {"q": "Când a fost fondat?", "a": "În jurul anului 600 d.Hr."}
        ],
        "en": [
            {"q": "What is the most famous building?", "a": "El Castillo (Kukulcán Pyramid)."},
            {"q": "Is it one of the New Seven Wonders?", "a": "Yes, since 2007."},
            {"q": "What happens during the equinox?", "a": "A light and shadow play depicts a snake descending."},
            {"q": "Was it a Maya city?", "a": "Yes, one of the most significant."},
            {"q": "When was it founded?", "a": "Around 600 AD."}
        ]
    },
    "mex_teoti": {
        "de": [
            {"q": "Was bedeutet der Name Teotihuacán?", "a": "Stadt der Götter."},
            {"q": "Was sind die zwei größten Pyramiden?", "a": "Die Sonnenpyramide und die Mondpyramide."},
            {"q": "Wie heißt die Hauptstraße?", "a": "Straße der Toten (Calzada de los Muertos)."},
            {"q": "Wann war ihre Blütezeit?", "a": "Zwischen 100 v. Chr. und 650 n. Chr."},
            {"q": "War sie eine der größten Städte?", "a": "Ja, zu ihrer Zeit eine der größten weltweit."}
        ],
        "hu": [
            {"q": "Mit jelent a Teotihuacán név?", "a": "Az istenek városa."},
            {"q": "Melyik a két legnagyobb piramis?", "a": "A Nap-piramis és a Hold-piramis."},
            {"q": "Hogy hívják a főutat?", "a": "A Holtak útja (Calzada de los Muertos)."},
            {"q": "Mikor volt a fénykora?", "a": "i.e. 100 és i.sz. 650 között."},
            {"q": "A legnagyobb városok közé tartozott?", "a": "Igen, korának egyik legnagyobb városa volt a világon."}
        ],
        "ro": [
            {"q": "Ce înseamnă numele Teotihuacán?", "a": "Orașul Zeilor."},
            {"q": "Care sunt cele mai mari două piramide?", "a": "Piramida Soarelui și Piramida Lunii."},
            {"q": "Cum se numește bulevardul principal?", "a": "Bulevardul Morților (Calzada de los Muertos)."},
            {"q": "Când a fost perioada de apogeu?", "a": "Între 100 î.Hr. și 650 d.Hr."},
            {"q": "A fost unul dintre cele mai mari orașe?", "a": "Da, unul dintre cele mai mari din lume la acea vreme."}
        ],
        "en": [
            {"q": "What does the name Teotihuacán mean?", "a": "City of the Gods."},
            {"q": "What are the two largest pyramids?", "a": "The Pyramid of the Sun and the Pyramid of the Moon."},
            {"q": "What is the main avenue called?", "a": "Avenue of the Dead (Calzada de los Muertos)."},
            {"q": "When was its peak period?", "a": "Between 100 BC and 650 AD."},
            {"q": "Was it one of the largest cities?", "a": "Yes, one of the largest in the world at its time."}
        ]
    },
    "mex_palenque": {
        "de": [
            {"q": "Wo befindet sich Palenque?", "a": "Im Dschungel von Chiapas."},
            {"q": "Wer war der wichtigste Herrscher?", "a": "Kink Pakal (Pakal der Große)."},
            {"q": "Was ist das bedeutendste Gebäude?", "a": "Der Tempel der Inschriften."},
            {"q": "Ist es UNESCO-Weltkulturerbe?", "a": "Ja, seit 1987."},
            {"q": "Gibt es dort Wasserfälle?", "a": "Ja, die Wasserfälle von Agua Azul liegen in der Nähe."}
        ],
        "hu": [
            {"q": "Hol található Palenque?", "a": "Chiapas dzsungelében."},
            {"q": "Ki volt a legfontosabb uralkodója?", "a": "Pakal király (Nagy Pakal)."},
            {"q": "Mi a legjelentősebb épülete?", "a": "A Feliratok temploma."},
            {"q": "A Világörökség része?", "a": "Igen, 1987 óta."},
            {"q": "Vannak a közelben vízesések?", "a": "Igen, az Agua Azul vízesések a közelben vannak."}
        ],
        "ro": [
            {"q": "Unde se află Palenque?", "a": "În jungla din Chiapas."},
            {"q": "Cine a fost cel mai important conducător?", "a": "Regele Pakal (Pakal cel Mare)."},
            {"q": "Care este cea mai importantă clădire?", "a": "Templul Inscripțiilor."},
            {"q": "Este sit UNESCO?", "a": "Da, din 1987."},
            {"q": "Există cascade în apropiere?", "a": "Da, cascadele Agua Azul se află în proximitate."}
        ],
        "en": [
            {"q": "Where is Palenque located?", "a": "In the jungle of Chiapas."},
            {"q": "Who was its most important ruler?", "a": "King Pakal (Pakal the Great)."},
            {"q": "What is the most significant building?", "a": "The Temple of the Inscriptions."},
            {"q": "Is it a UNESCO site?", "a": "Yes, since 1987."},
            {"q": "Are there waterfalls nearby?", "a": "Yes, the Agua Azul waterfalls are close by."}
        ]
    },
    "mex_tulum": {
        "de": [
            {"q": "Was macht Tulum so einzigartig?", "a": "Es liegt direkt auf einer Klippe am Meer."},
            {"q": "Was bedeutet der Name Tulum?", "a": "Mauer oder Zaun."},
            {"q": "Welches Volk hat es erbaut?", "a": "Die Maya."},
            {"q": "War es ein wichtiger Hafen?", "a": "Ja, ein bedeutender Seehafen für den Handel."},
            {"q": "Welche Farbe hat das Wasser dort?", "a": "Türkisblau (Karibik)."}
        ],
        "hu": [
            {"q": "Mi teszi Tulumot egyedivé?", "a": "Közvetlenül a tengerparti sziklán fekszik."},
            {"q": "Mit jelent a Tulum név?", "a": "Falat vagy kerítést."},
            {"q": "Melyik nép építette?", "a": "A maják."},
            {"q": "Fontos kikötő volt?", "a": "Igen, jelentős tengeri kereskedelmi központ volt."},
            {"q": "Milyen színű ott a víz?", "a": "Türkizkék (Karibi-tenger)."}
        ],
        "ro": [
            {"q": "Ce face ca Tulum să fie unic?", "a": "Este situat direct pe o stâncă la malul mării."},
            {"q": "Ce înseamnă numele Tulum?", "a": "Zid sau gard."},
            {"q": "Ce popor l-a construit?", "a": "Maiașii."},
            {"q": "A fost un port important?", "a": "Da, un port maritim semnificativ pentru comerț."},
            {"q": "Ce culoare are apa acolo?", "a": "Albastru turcoaz (Caraibe)."}
        ],
        "en": [
            {"q": "What makes Tulum unique?", "a": "It is located directly on a cliff overlooking the sea."},
            {"q": "What does the name Tulum mean?", "a": "Wall or fence."},
            {"q": "Who built it?", "a": "The Maya."},
            {"q": "Was it an important port?", "a": "Yes, a significant seaport for trade."},
            {"q": "What color is the water there?", "a": "Turquoise blue (Caribbean)."}
        ]
    },
    "mex_cobre": {
        "de": [
            {"q": "Ist er größer als der Grand Canyon?", "a": "Ja, er ist insgesamt größer und tiefer."},
            {"q": "Welches Volk lebt dort?", "a": "Die Tarahumara (Rarámuri)."},
            {"q": "Wofür sind die Tarahumara bekannt?", "a": "Als legendäre Langstreckenläufer."},
            {"q": "Gibt es eine Zugverbindung?", "a": "Ja, den berühmten Chepe-Zug."},
            {"q": "Warum heißt er 'Kupferkanyon'?", "a": "Wegen der grünlichen Farbe der Flechten an den Wänden."}
        ],
        "hu": [
            {"q": "Nagyobb, mint a Grand Canyon?", "a": "Igen, összességében nagyobb és mélyebb."},
            {"q": "Melyik nép él itt?", "a": "A tarahumarák (rarámurik)."},
            {"q": "Miről ismertek a tarahumarák?", "a": "Legendás távfutók."},
            {"q": "Van vasúti összeköttetés?", "a": "Igen, a híres Chepe vonat."},
            {"q": "Miért hívják Réz-kanyonnak?", "a": "A falakon lévő zuzmók zöldes színe miatt."}
        ],
        "ro": [
            {"q": "Este mai mare decât Marele Canion?", "a": "Da, este per total mai mare și mai adânc."},
            {"q": "Ce popor trăiește acolo?", "a": "Tarahumara (Rarámuri)."},
            {"q": "Prin ce sunt cunoscuți Tarahumara?", "a": "Ca alergători legendari de cursă lungă."},
            {"q": "Există o legătură feroviară?", "a": "Da, faimosul tren Chepe."},
            {"q": "De ce se numește „Canionul Cuprului”?", "a": "Datorită culorii verzui a lichenilor de pe pereți."}
        ],
        "en": [
            {"q": "Is it larger than the Grand Canyon?", "a": "Yes, it is overall larger and deeper."},
            {"q": "Which people live there?", "a": "The Tarahumara (Rarámuri)."},
            {"q": "What are the Tarahumara known for?", "a": "Being legendary long-distance runners."},
            {"q": "Is there a train connection?", "a": "Yes, the famous Chepe train."},
            {"q": "Why is it called 'Copper Canyon'?", "a": "Due to the greenish color of lichens on the walls."}
        ]
    },
    "mex_sumidero": {
        "de": [
            {"q": "Wie hoch sind die Wände?", "a": "Bis zu 1.000 Meter senkrecht."},
            {"q": "Welcher Fluss fließt hindurch?", "a": "Der Grijalva-Fluss."},
            {"q": "Gibt es dort Krokodile?", "a": "Ja, man kann sie oft am Ufer sehen."},
            {"q": "Wo befindet sich der Canyon?", "a": "Im Bundesstaat Chiapas."},
            {"q": "Gibt es dort Höhlen?", "a": "Ja, z.B. die Höhle der Farben."}
        ],
        "hu": [
            {"q": "Milyen magasak a sziklafalak?", "a": "Akár 1000 méter magasak is lehetnek."},
            {"q": "Melyik folyó folyik keresztül rajta?", "a": "A Grijalva-folyó."},
            {"q": "Vannak itt krokodilok?", "a": "Igen, gyakran láthatók a parton."},
            {"q": "Hol található a kanyon?", "a": "Chiapas államban."},
            {"q": "Vannak itt barlangok?", "a": "Igen, pl. a Színek barlangja."}
        ],
        "ro": [
            {"q": "Cât de înalți sunt pereții?", "a": "Până la 1.000 de metri verticali."},
            {"q": "Ce râu curge prin canion?", "a": "Râul Grijalva."},
            {"q": "Există crocodili acolo?", "a": "Da, pot fi văzuți adesea pe maluri."},
            {"q": "Unde se află canionul?", "a": "În statul Chiapas."},
            {"q": "Există peșteri acolo?", "a": "Da, de exemplu Peștera Culorilor."}
        ],
        "en": [
            {"q": "How high are the walls?", "a": "Up to 1,000 meters vertical."},
            {"q": "Which river flows through it?", "a": "The Grijalva River."},
            {"q": "Are there crocodiles?", "a": "Yes, they can often be seen on the banks."},
            {"q": "Where is the canyon located?", "a": "In the state of Chiapas."},
            {"q": "Are there caves there?", "a": "Yes, such as the Cave of Colors."}
        ]
    },
    "mex_cenotes": {
        "de": [
            {"q": "Was ist Ik Kil?", "a": "Eine kreisförmige Cenote (Doline) mit Lianen."},
            {"q": "Wie tief ist sie?", "a": "Etwa 40 Meter."},
            {"q": "Darf man dort schwimmen?", "a": "Ja, es ist ein beliebtes Badegewässer."},
            {"q": "Warum waren Cenoten für die Maya wichtig?", "a": "Als Wasserquelle und heilige Opferstätten."},
            {"q": "In der Nähe welcher Ruine liegt sie?", "a": "Sehr nah an Chichén Itzá."}
        ],
        "hu": [
            {"q": "Mi az az Ik Kil?", "a": "Egy kör alakú cenote (víznyelő) liánokkal."},
            {"q": "Milyen mély?", "a": "Körülbelül 40 méter."},
            {"q": "Szabad ott úszni?", "a": "Igen, kedvelt fürdőhely."},
            {"q": "Miért voltak fontosak a cenoték a majáknak?", "a": "Vízforrásként és szent áldozati helyként."},
            {"q": "Melyik romváros közelében van?", "a": "Nagyon közel Chichén Itzához."}
        ],
        "ro": [
            {"q": "Ce este Ik Kil?", "a": "O cenotă circulară cu liane."},
            {"q": "Ce adâncime are?", "a": "Aproximativ 40 de metri."},
            {"q": "Este permis înotul?", "a": "Da, este un loc de înot popular."},
            {"q": "De ce erau cenotele importante pentru maiași?", "a": "Ca surse de apă și locuri sacre de sacrificiu."},
            {"q": "Lângă ce sit se află?", "a": "Foarte aproape de Chichén Itzá."}
        ],
        "en": [
            {"q": "What is Ik Kil?", "a": "A circular cenote (sinkhole) with hanging vines."},
            {"q": "How deep is it?", "a": "About 40 meters."},
            {"q": "Can you swim there?", "a": "Yes, it is a popular swimming spot."},
            {"q": "Why were cenotes important to the Maya?", "a": "As water sources and sacred sacrificial sites."},
            {"q": "Near which ruin is it located?", "a": "Very close to Chichén Itzá."}
        ]
    },
    "mex_pico": {
        "de": [
            {"q": "Wie hoch ist der Pico de Orizaba?", "a": "5.636 Meter."},
            {"q": "Ist er der höchste Berg Mexikos?", "a": "Ja, und der dritthöchste Nordamerikas."},
            {"q": "Ist er ein Vulkan?", "a": "Ja, ein schlafender Vulkan."},
            {"q": "Wie heißt er auf Nahuatl?", "a": "Citlaltépetl (Sternenberg)."},
            {"q": "Ist er immer schneebedeckt?", "a": "Ja, sein Gipfel trägt einen Gletscher."}
        ],
        "hu": [
            {"q": "Milyen magas a Pico de Orizaba?", "a": "5636 méter."},
            {"q": "Ez Mexikó legmagasabb hegye?", "a": "Igen, és Észak-Amerika harmadik legmagasabbja."},
            {"q": "Vulkánról van szó?", "a": "Igen, egy alvó vulkán."},
            {"q": "Hogy hívják nahuatl nyelven?", "a": "Citlaltépetl (Csillaghegy)."},
            {"q": "Mindig hó fedi?", "a": "Igen, csúcsán gleccser található."}
        ],
        "ro": [
            {"q": "Ce înălțime are Pico de Orizaba?", "a": "5.636 de metri."},
            {"q": "Este cel mai înalt munte din Mexic?", "a": "Da, și al treilea cel mai înalt din America de Nord."},
            {"q": "Este un vulcan?", "a": "Da, un vulcan adormit."},
            {"q": "Cum se numește în limba nahuatl?", "a": "Citlaltépetl (Muntele Stelelor)."},
            {"q": "Este mereu înzăpezit?", "a": "Da, vârful său are un ghețar."}
        ],
        "en": [
            {"q": "How high is Pico de Orizaba?", "a": "5,636 meters."},
            {"q": "Is it the highest mountain in Mexico?", "a": "Yes, and the third highest in North America."},
            {"q": "Is it a volcano?", "a": "Yes, a dormant volcano."},
            {"q": "What is its Nahuatl name?", "a": "Citlaltépetl (Star Mountain)."},
            {"q": "Is it always snow-capped?", "a": "Yes, it has a permanent glacier on its peak."}
        ]
    },
    "mex_popocatepetl": {
        "de": [
            {"q": "Ist der Popocatépetl aktiv?", "a": "Ja, er ist einer der aktivsten Vulkane Mexikos."},
            {"q": "Wie hoch ist er?", "a": "5.426 Meter."},
            {"q": "Was bedeutet der Name?", "a": "Rauchender Berg."},
            {"q": "Darf man ihn besteigen?", "a": "Aufgrund der Aktivität ist das Besteigen meist verboten."},
            {"q": "Wo liegt er?", "a": "An der Grenze der Bundesstaaten Puebla, Mexiko und Morelos."}
        ],
        "hu": [
            {"q": "Aktív a Popocatépetl?", "a": "Igen, Mexikó egyik legaktívabb vulkánja."},
            {"q": "Milyen magas?", "a": "5426 méter."},
            {"q": "Mit jelent a név?", "a": "Füstölgő hegy."},
            {"q": "Szabad megmászni?", "a": "Az aktivitása miatt a megmászása általában tilos."},
            {"q": "Hol található?", "a": "Puebla, Mexikó és Morelos államok határán."}
        ],
        "ro": [
            {"q": "Este Popocatépetl activ?", "a": "Da, este unul dintre cei mai activi vulcani din Mexic."},
            {"q": "Ce înălțime are?", "a": "5.426 de metri."},
            {"q": "Ce înseamnă numele?", "a": "Muntele care fumegă."},
            {"q": "Este permisă escaladarea lui?", "a": "Din cauza activității, escaladarea este de obicei interzisă."},
            {"q": "Unde este situat?", "a": "La granița statelor Puebla, México și Morelos."}
        ],
        "en": [
            {"q": "Is Popocatépetl active?", "a": "Yes, it is one of Mexico's most active volcanoes."},
            {"q": "How high is it?", "a": "5,426 meters."},
            {"q": "What does the name mean?", "a": "Smoking Mountain."},
            {"q": "Can you climb it?", "a": "Due to its activity, climbing is usually prohibited."},
            {"q": "Where is it located?", "a": "On the borders of Puebla, México, and Morelos states."}
        ]
    },
    "mex_uxmal": {
        "de": [
            {"q": "Was ist das Besondere an der Wahrsager-Pyramide?", "a": "Sie hat eine ovale Grundfläche und abgerundete Ecken."},
            {"q": "Welchen Maya-Stil vertritt Uxmal?", "a": "Den Puuc-Stil."},
            {"q": "Ist es Weltkulturerbe?", "a": "Ja, seit 1996."},
            {"q": "Gibt es dort viele Schlangen-Darstellungen?", "a": "Ja, besonders den Regengott Chaac."},
            {"q": "Wann wurde es gegründet?", "a": "Etwa um 700 n. Chr."}
        ],
        "hu": [
            {"q": "Mi a különleges a Varázsló-piramisban?", "a": "Ovális alaprajzú és lekerekített sarkai vannak."},
            {"q": "Milyen maja stílust képvisel?", "a": "A Puuc stílust."},
            {"q": "A Világörökség része?", "a": "Igen, 1996 óta."},
            {"q": "Sok kígyóábrázolás van ott?", "a": "Igen, és különösen sok Chaac esőisten-ábrázolás."},
            {"q": "Mikor alapították?", "a": "i.sz. 700 körül."}
        ],
        "ro": [
            {"q": "Ce este special la Piramida Magicianului?", "a": "Are o bază ovală și colțuri rotunjite."},
            {"q": "Ce stil maiaș reprezintă Uxmal?", "a": "Stilul Puuc."},
            {"q": "Este sit UNESCO?", "a": "Da, din 1996."},
            {"q": "Există multe reprezentări de șerpi?", "a": "Da, și în special multe ale zeului ploii Chaac."},
            {"q": "Când a fost fondat?", "a": "În jurul anului 700 d.Hr."}
        ],
        "en": [
            {"q": "What is special about the Magician's Pyramid?", "a": "It has an oval base and rounded corners."},
            {"q": "What Maya style does Uxmal represent?", "a": "The Puuc style."},
            {"q": "Is it a World Heritage site?", "a": "Yes, since 1996."},
            {"q": "Are there many serpent depictions?", "a": "Yes, and many of the rain god Chaac."},
            {"q": "When was it founded?", "a": "Around 700 AD."}
        ]
    },
    "mx-el-tajin": {
        "de": [
            {"q": "Was ist die berühmteste Pyramide dort?", "a": "Die Pyramide der Nischen."},
            {"q": "Wie viele Nischen hat sie?", "a": "Genau 365, passend zum Kalender."},
            {"q": "Welche Kultur hat Tajín erbaut?", "a": "Die Totonaken."},
            {"q": "Wo liegt die Stätte?", "a": "Im Norden des Bundesstaates Veracruz."},
            {"q": "Was sind die 'Voladores'?", "a": "Rituelle Tänzer, die sich von einem hohen Pfahl abseilen."}
        ],
        "hu": [
            {"q": "Mi a leghíresebb piramis ott?", "a": "A Fülkés piramis."},
            {"q": "Hány fülkéje van?", "a": "Pontosan 365, a naptári évnek megfelelően."},
            {"q": "Melyik kultúra építette?", "a": "A totonákok."},
            {"q": "Hol található?", "a": "Veracruz állam északi részén."},
            {"q": "Kik azok a 'Voladorok'?", "a": "Rituális táncosok, akik egy magas póznáról ereszkednek le."}
        ],
        "ro": [
            {"q": "Care este cea mai faimoasă piramidă de acolo?", "a": "Piramida Nișelor."},
            {"q": "Câte nișe are?", "a": "Exact 365, corespunzând calendarului."},
            {"q": "Ce cultură a construit Tajín?", "a": "Totonacii."},
            {"q": "Unde se află situl?", "a": "În nordul statului Veracruz."},
            {"q": "Ce sunt „Voladores”?", "a": "Dansatori rituali care se coboară de pe un stâlp înalt."}
        ],
        "en": [
            {"q": "What is the most famous pyramid there?", "a": "The Pyramid of the Niches."},
            {"q": "How many niches does it have?", "a": "Exactly 365, matching the solar calendar."},
            {"q": "Which culture built Tajín?", "a": "The Totonacs."},
            {"q": "Where is the site located?", "a": "In northern Veracruz state."},
            {"q": "Who are the 'Voladores'?", "a": "Ritual dancers who swing from a high pole."}
        ]
    },
    "mx-calakmul": {
        "de": [
            {"q": "Wo liegt Calakmul?", "a": "Tief im Dschungel von Campeche."},
            {"q": "War es eine große Stadt?", "a": "Ja, eine der größten und mächtigsten Maya-Städte."},
            {"q": "Gibt es dort viele Stelen?", "a": "Ja, es ist die Stätte mit den meisten Maya-Stelen."},
            {"q": "Was sieht man vom Gipfel der Pyramide?", "a": "Ein endloses Meer aus Dschungel."},
            {"q": "Ist es ein geschütztes Gebiet?", "a": "Ja, es ist ein Biosphärenreservat."}
        ],
        "hu": [
            {"q": "Hol található Calakmul?", "a": "Campeche dzsungelének mélyén."},
            {"q": "Nagy város volt?", "a": "Igen, az egyik legnagyobb és leghatalmasabb maja város."},
            {"q": "Sok sztélé található ott?", "a": "Igen, itt található a legtöbb maja sztélé."},
            {"q": "Mit látni a piramis tetejéről?", "a": "Végtelen dzsungeltengert."},
            {"q": "Védett területről van szó?", "a": "Igen, bioszféra-rezervátum."}
        ],
        "ro": [
            {"q": "Unde se află Calakmul?", "a": "Adânc în jungla din Campeche."},
            {"q": "A fost un oraș mare?", "a": "Da, unul dintre cele mai mari și puternice orașe maiașe."},
            {"q": "Există multe stele acolo?", "a": "Da, este situl cu cele mai multe stele maiașe."},
            {"q": "Ce se vede de pe vârful piramidei?", "a": "O mare nesfârșită de junglă."},
            {"q": "Este o zonă protejată?", "a": "Da, este o rezervație a biosferei."}
        ],
        "en": [
            {"q": "Where is Calakmul located?", "a": "Deep in the Campeche rainforest."},
            {"q": "Was it a major city?", "a": "Yes, one of the largest and most powerful Maya cities."},
            {"q": "Are there many stelae there?", "a": "Yes, it has the largest number of Maya stelae."},
            {"q": "What can you see from the top of the pyramid?", "a": "An endless sea of jungle."},
            {"q": "Is it a protected area?", "a": "Yes, it is a Biosphere Reserve."}
        ]
    },
    "mx-hospicio-cabanas": {
        "de": [
            {"q": "Wer malte die Wandgemälde?", "a": "José Clemente Orozco."},
            {"q": "Wie heißt das berühmteste Fresko?", "a": "Der brennende Mann (El Hombre de Fuego)."},
            {"q": "Was war das Gebäude ursprünglich?", "a": "Ein Waisenhaus und Krankenhaus."},
            {"q": "Wie viele Innenhöfe hat es?", "a": "Es hat 23 Innenhöfe."},
            {"q": "Ist es Weltkulturerbe?", "a": "Ja, seit 1997."}
        ],
        "hu": [
            {"q": "Ki festette a falfestményeket?", "a": "José Clemente Orozco."},
            {"q": "Mi a leghíresebb freskó neve?", "a": "A lángoló ember (El Hombre de Fuego)."},
            {"q": "Mi volt eredetileg az épület?", "a": "Árvaház és kórház."},
            {"q": "Hány belső udvara van?", "a": "23 belső udvarral rendelkezik."},
            {"q": "A Világörökség része?", "a": "Igen, 1997 óta."}
        ],
        "ro": [
            {"q": "Cine a pictat frescele?", "a": "José Clemente Orozco."},
            {"q": "Cum se numește cea mai faimoasă frescă?", "a": "Omul de Foc (El Hombre de Fuego)."},
            {"q": "Ce a fost clădirea inițial?", "a": "Un orfelinat și spital."},
            {"q": "Câte curți interioare are?", "a": "Are 23 de curți interioare."},
            {"q": "Este sit UNESCO?", "a": "Da, din 1997."}
        ],
        "en": [
            {"q": "Who painted the murals?", "a": "José Clemente Orozco."},
            {"q": "What is the most famous fresco called?", "a": "Man of Fire (El Hombre de Fuego)."},
            {"q": "What was the building originally?", "a": "An orphanage and hospital."},
            {"q": "How many courtyards does it have?", "a": "It has 23 courtyards."},
            {"q": "Is it a World Heritage site?", "a": "Yes, since 1997."}
        ]
    },
    "mx-angel-independence": {
        "de": [
            {"q": "Was stellt die Statue dar?", "a": "Die geflügelte Siegesgöttin Nike."},
            {"q": "Wann wurde das Denkmal eingeweiht?", "a": "Im Jahr 1910."},
            {"q": "Was befindet sich im Sockel?", "a": "Ein Mausoleum für Helden der Unabhängigkeit."},
            {"q": "Wie hoch ist die Säule?", "a": "Etwa 36 Meter."},
            {"q": "Ist die Statue aus echtem Gold?", "a": "Sie ist mit 24-karätigem Blattgold überzogen."}
        ],
        "hu": [
            {"q": "Mit ábrázol a szobor?", "a": "Nikét, a győzelem szárnyas istennőjét."},
            {"q": "Mikor avatták fel az emlékművet?", "a": "1910-ben."},
            {"q": "Mi található a talapzatban?", "a": "A függetlenségi hősök mauzóleuma."},
            {"q": "Milyen magas az oszlop?", "a": "Körülbelül 36 méter."},
            {"q": "Valódi aranyból van a szobor?", "a": "24 karátos aranylemezekkel van bevonva."}
        ],
        "ro": [
            {"q": "Ce reprezintă statuia?", "a": "Zeița înaripată a victoriei, Nike."},
            {"q": "Când a fost inaugurat monumentul?", "a": "În anul 1910."},
            {"q": "Ce se află la baza coloanei?", "a": "Un mausoleu al eroilor independenței."},
            {"q": "Ce înălțime are coloana?", "a": "Aproximativ 36 de metri."},
            {"q": "Este statuia din aur adevărat?", "a": "Este acoperită cu foiță de aur de 24 de carate."}
        ],
        "en": [
            {"q": "What does the statue represent?", "a": "The Winged Victory (Nike)."},
            {"q": "When was the monument inaugurated?", "a": "In 1910."},
            {"q": "What is inside the base?", "a": "A mausoleum for the heroes of Independence."},
            {"q": "How high is the column?", "a": "About 36 meters."},
            {"q": "Is the statue solid gold?", "a": "It is covered in 24k gold leaf."}
        ]
    },
    "mx-chapultepec-castle": {
        "de": [
            {"q": "War es wirklich ein Wohnschloss?", "a": "Ja, die einzige königliche Residenz in Nordamerika."},
            {"q": "Wer lebte dort?", "a": "Unter anderem Kaiser Maximilian I. und Kaiserin Carlota."},
            {"q": "Was ist dort heute untergebracht?", "a": "Das Nationale Geschichtsmuseum."},
            {"q": "Wo genau liegt das Schloss?", "a": "Auf dem Chapultepec-Hügel in Mexiko-Stadt."},
            {"q": "Wann wurde mit dem Bau begonnen?", "a": "Im Jahr 1785."}
        ],
        "hu": [
            {"q": "Valódi lakókastély volt?", "a": "Igen, Észak-Amerika egyetlen királyi rezidenciája."},
            {"q": "Kik laktak itt?", "a": "Többek között I. Miksa császár és Sarolta császárné."},
            {"q": "Mi található itt ma?", "a": "A Nemzeti Történeti Múzeum."},
            {"q": "Hol található a kastély?", "a": "A Chapultepec-dombon, Mexikóvárosban."},
            {"q": "Mikor kezdték el építeni?", "a": "1785-ben."}
        ],
        "ro": [
            {"q": "A fost cu adevărat un castel rezidențial?", "a": "Da, singura reședință regală din America de Nord."},
            {"q": "Cine a locuit acolo?", "a": "Printre alții, împăratul Maximilian I și împărăteasa Carlota."},
            {"q": "Ce găzduiește astăzi?", "a": "Muzeul Național de Istorie."},
            {"q": "Unde este situat castelul?", "a": "Pe dealul Chapultepec din Mexico City."},
            {"q": "Când a început construcția?", "a": "În anul 1785."}
        ],
        "en": [
            {"q": "Was it actually a residential castle?", "a": "Yes, the only royal residence in North America."},
            {"q": "Who lived there?", "a": "Among others, Emperor Maximilian I and Empress Carlota."},
            {"q": "What is housed there today?", "a": "The National Museum of History."},
            {"q": "Where is the castle located?", "a": "On Chapultepec Hill in Mexico City."},
            {"q": "When did construction begin?", "a": "In 1785."}
        ]
    },
    "mx-guadalupe-basilica": {
        "de": [
            {"q": "Was wird dort aufbewahrt?", "a": "Die heilige Tilma des Juan Diego."},
            {"q": "Wie viele Basiliken gibt es dort?", "a": "Zwei, die alte (barocke) und die neue (moderne)."},
            {"q": "Wie viele Menschen besuchen sie jährlich?", "a": "Zirka 20 Millionen Pilger."},
            {"q": "Wann erschien die Jungfrau von Guadalupe?", "a": "Im Jahr 1531."},
            {"q": "Darf man die Tilma sehen?", "a": "Ja, sie ist für Besucher und Pilger sichtbar."}
        ],
        "hu": [
            {"q": "Mit őriznek ott?", "a": "Szent Juan Diego tilmáját (köpenyét)."},
            {"q": "Hány bazilika található ott?", "a": "Kettő, a régi (barokk) és az új (modern)."},
            {"q": "Hányan látogatják évente?", "a": "Körülbelül 20 millió zarándok."},
            {"q": "Mikor jelent meg a Guadalupe-i Szűz?", "a": "1531-ben."},
            {"q": "Megtekinthető a tilma?", "a": "Igen, látható a látogatók és zarándokok számára."}
        ],
        "ro": [
            {"q": "Ce este păstrat acolo?", "a": "Tilma sacră a lui Juan Diego."},
            {"q": "Câte bazilici sunt acolo?", "a": "Două, cea veche (barocă) și cea nouă (modernă)."},
            {"q": "Câți oameni o vizitează anual?", "a": "Circa 20 de milioane de pelerini."},
            {"q": "Când a apărut Fecioara de Guadalupe?", "a": "În anul 1531."},
            {"q": "Poate fi văzută tilma?", "a": "Da, este vizibilă pentru vizitatori și pelerini."}
        ],
        "en": [
            {"q": "What is preserved there?", "a": "The sacred tilma of Juan Diego."},
            {"q": "How many basilicas are there?", "a": "Two: the Old (Baroque) and the New (Modern)."},
            {"q": "How many people visit annually?", "a": "About 20 million pilgrims."},
            {"q": "When did the Virgin appear?", "a": "In 1531."},
            {"q": "Is the tilma visible to the public?", "a": "Yes, it is on display for visitors and pilgrims."}
        ]
    },
    "mx-xochimilco": {
        "de": [
            {"q": "Was sind Chinampas?", "a": "Künstliche Inseln für die Landwirtschaft."},
            {"q": "Wie heißen die bunten Boote?", "a": "Trajineras."},
            {"q": "Was bedeutet der Name Xochimilco?", "a": "Feld der Blumen."},
            {"q": "Welches seltene Tier lebt dort?", "a": "Der Axolotl."},
            {"q": "Ist es ein UNESCO-Weltkulturerbe?", "a": "Ja, seit 1987."}
        ],
        "hu": [
            {"q": "Mik azok a chinampák?", "a": "Mesterséges mezőgazdasági szigetek."},
            {"q": "Hogy hívják a színes hajókat?", "a": "Trajinerák."},
            {"q": "Mit jelent a Xochimilco név?", "a": "Virágok mezeje."},
            {"q": "Melyik ritka állat él itt?", "a": "Az axolotl."},
            {"q": "A Világörökség része?", "a": "Igen, 1987 óta."}
        ],
        "ro": [
            {"q": "Ce sunt chinampas?", "a": "Insule artificiale pentru agricultură."},
            {"q": "Cum se numesc bărcile colorate?", "a": "Trajineras."},
            {"q": "Ce înseamnă numele Xochimilco?", "a": "Câmpul de flori."},
            {"q": "Ce animal rar trăiește acolo?", "a": "Axolotlul."},
            {"q": "Este sit UNESCO?", "a": "Da, din 1987."}
        ],
        "en": [
            {"q": "What are chinampas?", "a": "Artificial islands used for agriculture."},
            {"q": "What are the colorful boats called?", "a": "Trajineras."},
            {"q": "What does the name Xochimilco mean?", "a": "Field of Flowers."},
            {"q": "Which rare animal lives there?", "a": "The axolotl."},
            {"q": "Is it a World Heritage site?", "a": "Yes, since 1987."}
        ]
    },
    "mx-cabo-arch": {
        "de": [
            {"q": "Wo befindet sich dieser Bogen?", "a": "An der Südspitze der Baja California."},
            {"q": "Wie ist er entstanden?", "a": "Durch natürliche Erosion durch Wind und Wellen."},
            {"q": "Kann man dort Seelöwen sehen?", "a": "Ja, oft tummeln sie sich auf den Felsen."},
            {"q": "Kommt man zu Fuß dorthin?", "a": "Nein, er ist nur per Boot erreichbar."},
            {"q": "Wie wird der Ort oft genannt?", "a": "Land's End (Ende der Welt)."}
        ],
        "hu": [
            {"q": "Hol található ez az ív?", "a": "Alsó-Kalifornia déli csücskén."},
            {"q": "Hogyan jött létre?", "a": "A szél és a hullámok természetes eróziója által."},
            {"q": "Lehet ott fókákat látni?", "a": "Igen, gyakran pihennek a sziklákon."},
            {"q": "Gyalog elérhető?", "a": "Nem, csak hajóval közelíthető meg."},
            {"q": "Hogy nevezik gyakran ezt a helyet?", "a": "Land's End (A világ vége)."}
        ],
        "ro": [
            {"q": "Unde se află acest arc?", "a": "În vârful sudic al peninsulei Baja California."},
            {"q": "Cum s-a format?", "a": "Prin eroziune naturală cauzată de vânt și valuri."},
            {"q": "Se pot vedea lei de mare acolo?", "a": "Da, se adună adesea pe stânci."},
            {"q": "Se poate ajunge pe jos?", "a": "Nu, este accesibil doar cu barca."},
            {"q": "Cum este numit adesea acest loc?", "a": "Land's End (Capătul Lumii)."}
        ],
        "en": [
            {"q": "Where is this arch located?", "a": "At the southern tip of Baja California."},
            {"q": "How was it formed?", "a": "By natural erosion from wind and waves."},
            {"q": "Can you see sea lions there?", "a": "Yes, they often gather on the rocks."},
            {"q": "Can you get there on foot?", "a": "No, it is only accessible by boat."},
            {"q": "What is this location often called?", "a": "Land's End."}
        ]
    },
    "mx-monarch-butterfly": {
        "de": [
            {"q": "Woher kommen die Schmetterlinge?", "a": "Aus Kanada und den USA."},
            {"q": "Wann kann man sie sehen?", "a": "Zwischen November und März."},
            {"q": "In welchen Bäumen überwintern sie?", "a": "In Oyamel-Tannen."},
            {"q": "Wie weit fliegen sie?", "a": "Über 4.000 Kilometer."},
            {"q": "Ist das Reservat geschützt?", "a": "Ja, es ist ein UNESCO-Weltnaturerbe."}
        ],
        "hu": [
            {"q": "Honnan érkeznek a pillangók?", "a": "Kanadából és az USA-ból."},
            {"q": "Mikor lehet őket látni?", "a": "November és március között."},
            {"q": "Milyen fákon telelnek át?", "a": "Oyamel fenyőkön."},
            {"q": "Milyen messzire repülnek?", "a": "Több mint 4000 kilométert."},
            {"q": "Védett a rezervátum?", "a": "Igen, az UNESCO Világörökség része."}
        ],
        "ro": [
            {"q": "De unde vin fluturii?", "a": "Din Canada și SUA."},
            {"q": "Când pot fi văzuți?", "a": "Între noiembrie și martie."},
            {"q": "În ce copaci iernează?", "a": "În brazi Oyamel."},
            {"q": "Cât de departe zboară?", "a": "Peste 4.000 de kilometri."},
            {"q": "Este rezervația protejată?", "a": "Da, este sit al Patrimoniului Mondial UNESCO."}
        ],
        "en": [
            {"q": "Where do the butterflies come from?", "a": "From Canada and the USA."},
            {"q": "When can you see them?", "a": "Between November and March."},
            {"q": "In which trees do they overwinter?", "a": "In Oyamel fir trees."},
            {"q": "How far do they fly?", "a": "Over 4,000 kilometers."},
            {"q": "Is the reserve protected?", "a": "Yes, it is a UNESCO World Heritage site."}
        ]
    },
    "mx-gray-whale": {
        "de": [
            {"q": "Wann ist die beste Zeit zur Walbeobachtung?", "a": "Von Januar bis März."},
            {"q": "Wo genau findet man sie?", "a": "In Lagunen wie San Ignacio oder Ojo de Liebre."},
            {"q": "Warum kommen sie dorthin?", "a": "Um in den warmen, flachen Gewässern ihre Kälber zu gebären."},
            {"q": "Wie weit wandern sie?", "a": "Etwa 10.000 Kilometer aus der Arktis."},
            {"q": "Sind die Wale gefährlich?", "a": "Nein, sie sind oft neugierig und werden als 'freundlich' bezeichnet."}
        ],
        "hu": [
            {"q": "Mikor a legjobb az idő bálnalesre?", "a": "Januártól márciusig."},
            {"q": "Hol találhatók pontosan?", "a": "Olyan lagúnákban, mint San Ignacio vagy Ojo de Liebre."},
            {"q": "Miért jönnek ide?", "a": "Hogy a meleg, sekély vizekben hozzák világra borjaikat."},
            {"q": "Milyen messzire vándorolnak?", "a": "Kb. 10 000 kilométert az Arktiszról."},
            {"q": "Veszélyesek ezek a bálnák?", "a": "Nem, gyakran kíváncsiak és barátságosak."}
        ],
        "ro": [
            {"q": "Când este cea mai bună perioadă pentru observarea balenelor?", "a": "Din ianuarie până în martie."},
            {"q": "Unde pot fi găsite mai exact?", "a": "În lagune precum San Ignacio sau Ojo de Liebre."},
            {"q": "De ce vin aici?", "a": "Pentru a-și naște puii în apele calde și puțin adânci."},
            {"q": "Cât de departe migrează?", "a": "Aproximativ 10.000 de kilometri din Arctica."},
            {"q": "Sunt balenele periculoase?", "a": "Nu, sunt adesea curioase și sunt descrise ca fiind „prietenoase”."}
        ],
        "en": [
            {"q": "When is the best time for whale watching?", "a": "From January to March."},
            {"q": "Where exactly can they be found?", "a": "In lagoons like San Ignacio or Ojo de Liebre."},
            {"q": "Why do they come here?", "a": "To give birth to their calves in the warm, shallow waters."},
            {"q": "How far do they migrate?", "a": "About 10,000 kilometers from the Arctic."},
            {"q": "Are the whales dangerous?", "a": "No, they are often curious and are called 'friendly.'"}
        ]
    },
    "mx-whale-shark": {
        "de": [
            {"q": "Ist der Walhai ein Hai oder ein Wal?", "a": "Er ist ein Hai und somit ein Fisch."},
            {"q": "Was frisst er?", "a": "Plankton und kleine Fische (Filterfresser)."},
            {"q": "Wann ist Saison auf Holbox?", "a": "Von Mai bis September."},
            {"q": "Darf man mit ihnen schwimmen?", "a": "Ja, unter strengen ökologischen Regeln."},
            {"q": "Wie groß können sie werden?", "a": "Bis zu 12 Meter oder mehr."}
        ],
        "hu": [
            {"q": "A cetcápa cápa vagy bálna?", "a": "Cápa, tehát egy hal."},
            {"q": "Mit eszik?", "a": "Planktont és apró halakat."},
            {"q": "Mikor van a szezon Holboxon?", "a": "Májustól szeptemberig."},
            {"q": "Szabad velük úszni?", "a": "Igen, szigorú környezetvédelmi szabályok mellett."},
            {"q": "Mekkora lehet egy cetcápa?", "a": "Akár 12 méter vagy még több."}
        ],
        "ro": [
            {"q": "Rechinul balenă este un rechin sau o balenă?", "a": "Este un rechin, deci un pește."},
            {"q": "Ce mănâncă?", "a": "Plancton și pești mici (se hrănește prin filtrare)."},
            {"q": "Când este sezonul în Holbox?", "a": "Din mai până în septembrie."},
            {"q": "Este permis înotul cu ei?", "a": "Da, respectând reguli ecologice stricte."},
            {"q": "Cât de mari pot crește?", "a": "Până la 12 metri sau mai mult."}
        ],
        "en": [
            {"q": "Is the whale shark a shark or a whale?", "a": "It is a shark, and thus a fish."},
            {"q": "What does it eat?", "a": "Plankton and small fish (filter feeder)."},
            {"q": "When is the season in Holbox?", "a": "From May to September."},
            {"q": "Can you swim with them?", "a": "Yes, under strict ecological regulations."},
            {"q": "How big can they get?", "a": "Up to 12 meters or more."}
        ]
    },
    "mx-tequila-agave": {
        "de": [
            {"q": "Aus welcher Pflanze wird Tequila gemacht?", "a": "Aus der Blauen Agave."},
            {"q": "Wie lange muss eine Agave wachsen?", "a": "Etwa 7 bis 10 Jahre."},
            {"q": "Darf Tequila überall hergestellt werden?", "a": "Nein, es gibt eine geschützte Ursprungsbezeichnung (NOM)."},
            {"q": "Wie heißt der Arbeiter, der sie erntet?", "a": "Jimador."},
            {"q": "Was ist eine 'Piña'?", "a": "Das Herz der Agave, das wie eine Ananas aussieht."}
        ],
        "hu": [
            {"q": "Melyik növényből készül a tequila?", "a": "A kék agávéból."},
            {"q": "Mennyi ideig kell nőnie az agávénak?", "a": "Körülbelül 7-10 évig."},
            {"q": "Bárhol készíthető tequila?", "a": "Nem, eredetvédett termék."},
            {"q": "Hogy hívják a munkást, aki betakarítja?", "a": "Jimador."},
            {"q": "Mi az a 'piña'?", "a": "Az agávé szíve, amely egy ananászra hasonlít."}
        ],
        "ro": [
            {"q": "Din ce plantă se face tequila?", "a": "Din agava albastră."},
            {"q": "Cât timp trebuie să crească o agavă?", "a": "Aproximativ 7 până la 10 ani."},
            {"q": "Poate fi produsă tequila oriunde?", "a": "Nu, are o denumire de origine controlată."},
            {"q": "Cum se numește lucrătorul care o recoltează?", "a": "Jimador."},
            {"q": "Ce este o „piña”?", "a": "Inima agavei, care seamănă cu un ananas."}
        ],
        "en": [
            {"q": "What plant is tequila made from?", "a": "The Blue Agave."},
            {"q": "How long does an agave take to grow?", "a": "About 7 to 10 years."},
            {"q": "Can tequila be produced anywhere?", "a": "No, it has a protected Appellation of Origin."},
            {"q": "What is the worker who harvests it called?", "a": "Jimador."},
            {"q": "What is a 'piña'?", "a": "The heart of the agave, which looks like a pineapple."}
        ]
    },
    "mx-chiapas-coffee": {
        "de": [
            {"q": "Welche Kaffeesorte wird meist angebaut?", "a": "Arabica."},
            {"q": "Warum ist der Kaffee aus Chiapas besonders?", "a": "Wegen der vulkanischen Böden und der hohen Lage."},
            {"q": "Ist Bio-Anbau verbreitet?", "a": "Ja, Chiapas ist führend im biologischen Kaffeeanbau."},
            {"q": "Wird der Kaffee im Schatten angebaut?", "a": "Ja, meist unter Schattenbäumen zum Schutz der Artenvielfalt."},
            {"q": "Wer baut den Kaffee meist an?", "a": "Oft kleinbäuerliche Kooperativen indigener Gemeinschaften."}
        ],
        "hu": [
            {"q": "Melyik kávéfajtát termesztik leginkább?", "a": "Arabicát."},
            {"q": "Miért különleges a chiapasi kávé?", "a": "A vulkanikus talaj és a nagy tengerszint feletti magasság miatt."},
            {"q": "Elterjedt a bio termesztés?", "a": "Igen, Chiapas vezető a biokávé-termesztésben."},
            {"q": "Árnyékban termesztik a kávét?", "a": "Igen, többnyire árnyékot adó fák alatt, a biodiverzitás védelmében."},
            {"q": "Kik termesztik a kávét?", "a": "Gyakran őslakos közösségek kistermelői szövetkezetei."}
        ],
        "ro": [
            {"q": "Ce soi de cafea este cultivat preponderent?", "a": "Arabica."},
            {"q": "De ce este specială cafeaua din Chiapas?", "a": "Datorită solurilor vulcanice și altitudinii ridicate."},
            {"q": "Este răspândită agricultura organică?", "a": "Da, Chiapas este un lider în cultivarea cafelei organice."},
            {"q": "Cafeaua este cultivată la umbră?", "a": "Da, de obicei sub copaci de umbră pentru protejarea biodiversității."},
            {"q": "Cine cultivă cafeaua în general?", "a": "Adesea cooperative de mici fermieri din comunități indigene."}
        ],
        "en": [
            {"q": "Which coffee variety is mostly grown?", "a": "Arabica."},
            {"q": "Why is Chiapas coffee special?", "a": "Because of the volcanic soils and high altitude."},
            {"q": "Is organic farming common?", "a": "Yes, Chiapas is a leader in organic coffee production."},
            {"q": "Is the coffee shade-grown?", "a": "Yes, mostly under shade trees to protect biodiversity."},
            {"q": "Who mostly grows the coffee?", "a": "Often smallholder cooperatives from indigenous communities."}
        ]
    },
    "mx-yucatan-henequen": {
        "de": [
            {"q": "Was ist Henequen?", "a": "Eine Agavenart, aus deren Fasern Seile gemacht werden."},
            {"q": "Wie wurde es im 19. Jahrhundert genannt?", "a": "Grünes Gold."},
            {"q": "Welche Stadt wurde dadurch sehr reich?", "a": "Mérida."},
            {"q": "Was sind Haziendas?", "a": "Große Landgüter, die oft für den Henequen-Anbau genutzt wurden."},
            {"q": "Wofür wird es heute noch genutzt?", "a": "Für Kunsthandwerk und einige Spezialseile."}
        ],
        "hu": [
            {"q": "Mi az a henequen?", "a": "Egy agávéfajta, amelynek rostjaiból köteleket készítenek."},
            {"q": "Hogyan nevezték a 19. században?", "a": "Zöld arany."},
            {"q": "Melyik város gazdagodott meg belőle?", "a": "Mérida."},
            {"q": "Mik azok a haciendák?", "a": "Nagy birtokok, amelyeket gyakran henequen termesztésre használtak."},
            {"q": "Mire használják ma?", "a": "Kézműves termékekhez és speciális kötelekhez."}
        ],
        "ro": [
            {"q": "Ce este henequen?", "a": "O specie de agave din ale cărei fibre se fac frânghii."},
            {"q": "Cum era numit în secolul al XIX-lea?", "a": "Aurul verde."},
            {"q": "Ce oraș s-a îmbogățit datorită lui?", "a": "Mérida."},
            {"q": "Ce sunt haciendas?", "a": "Mari proprietăți funciare, folosite adesea pentru cultivarea henequen-ului."},
            {"q": "La ce mai este folosit astăzi?", "a": "Pentru artizanat și unele frânghii specializate."}
        ],
        "en": [
            {"q": "What is henequen?", "a": "A type of agave used to make fibers for rope."},
            {"q": "What was it called in the 19th century?", "a": "Green Gold."},
            {"q": "Which city became very wealthy because of it?", "a": "Mérida."},
            {"q": "What are haciendas?", "a": "Large estates, often used for henequen production."},
            {"q": "What is it used for today?", "a": "Handicrafts and some specialized ropes."}
        ]
    },
    "mx-xcaret": {
        "de": [
            {"q": "Was kann man in Xcaret machen?", "a": "In unterirdischen Flüssen schwimmen und Maya-Kultur erleben."},
            {"q": "Gibt es dort Tiere?", "a": "Ja, einen Schmetterlingspark, Jaguare und Meeresschildkröten."},
            {"q": "Was ist die Abendshow?", "a": "Xcaret México Espectacular, eine Reise durch Mexikos Geschichte."},
            {"q": "Wo liegt der Park?", "a": "An der Riviera Maya, südlich von Playa del Carmen."},
            {"q": "War Xcaret früher ein Maya-Hafen?", "a": "Ja, er hieß damals Pole."}
        ],
        "hu": [
            {"q": "Mit lehet csinálni Xcaretben?", "a": "Földalatti folyókban úszni és megismerni a maja kultúrát."},
            {"q": "Vannak ott állatok?", "a": "Igen, pillangóház, jaguárok és tengeri teknősök."},
            {"q": "Mi az esti show?", "a": "Xcaret México Espectacular, amely Mexikó történelmét mutatja be."},
            {"q": "Hol található a park?", "a": "A Riviera Mayán, Playa del Carmentől délre."},
            {"q": "Volt Xcaret korábban maja kikötő?", "a": "Igen, az ókorban Polé néven ismerték."}
        ],
        "ro": [
            {"q": "Ce poți face la Xcaret?", "a": "Să înoți în râuri subterane și să experimentezi cultura maiașă."},
            {"q": "Există animale acolo?", "a": "Da, un pavilion de fluturi, jaguari și țestoase marine."},
            {"q": "Ce este spectacolul de seară?", "a": "Xcaret México Espectacular, o călătorie prin istoria Mexicului."},
            {"q": "Unde se află parcul?", "a": "Pe Riviera Maya, la sud de Playa del Carmen."},
            {"q": "A fost Xcaret un port maiaș în trecut?", "a": "Da, se numea Polé în antichitate."}
        ],
        "en": [
            {"q": "What can you do at Xcaret?", "a": "Swim in underground rivers and experience Maya culture."},
            {"q": "Are there animals there?", "a": "Yes, a butterfly pavilion, jaguars, and sea turtles."},
            {"q": "What is the evening show?", "a": "Xcaret México Espectacular, a journey through Mexico's history."},
            {"q": "Where is the park located?", "a": "On the Riviera Maya, south of Playa del Carmen."},
            {"q": "Was Xcaret a Maya port in the past?", "a": "Yes, its ancient name was Polé."}
        ]
    },
    "mx-chapultepec-zoo": {
        "de": [
            {"q": "Was ist das Besondere am Chapultepec Zoo?", "a": "Er war der erste Zoo weltweit, der Pandas außerhalb Chinas züchtete."},
            {"q": "Kostet der Eintritt etwas?", "a": "Nein, der Eintritt ist für die Öffentlichkeit kostenlos."},
            {"q": "Wo liegt der Zoo?", "a": "Im Chapultepec-Park in Mexiko-Stadt."},
            {"q": "Wann wurde er gegründet?", "a": "Im Jahr 1923."},
            {"q": "Gibt es dort mexikanische Tierarten?", "a": "Ja, z.B. den mexikanischen Wolf und das Teporingo-Kaninchen."}
        ],
        "hu": [
            {"q": "Mi a különleges a Chapultepec állatkertben?", "a": "Ez volt az első állatkert, ahol Kínán kívül pandák születtek."},
            {"q": "Kell belépőt fizetni?", "a": "Nem, a belépés ingyenes a látogatók számára."},
            {"q": "Hol található az állatkert?", "a": "A Chapultepec parkban, Mexikóvárosban."},
            {"q": "Mikor alapították?", "a": "1923-ban."},
            {"q": "Vannak ott mexikói fajok?", "a": "Igen, pl. a mexikói farkas és a teporingo nyúl."}
        ],
        "ro": [
            {"q": "Ce este special la Grădina Zoologică Chapultepec?", "a": "A fost prima din lume care a reprodus panda în afara Chinei."},
            {"q": "Costă intrarea?", "a": "Nu, intrarea este gratuită pentru public."},
            {"q": "Unde se află grădina zoologică?", "a": "În parcul Chapultepec din Mexico City."},
            {"q": "Când a fost fondată?", "a": "În anul 1923."},
            {"q": "Există specii mexicane acolo?", "a": "Da, de exemplu lupul mexican și iepurele teporingo."}
        ],
        "en": [
            {"q": "What is special about Chapultepec Zoo?", "a": "It was the first zoo to successfully breed pandas outside China."},
            {"q": "Is there an entrance fee?", "a": "No, admission is free for the general public."},
            {"q": "Where is the zoo located?", "a": "Inside Chapultepec Park in Mexico City."},
            {"q": "When was it founded?", "a": "In 1923."},
            {"q": "Are there Mexican species there?", "a": "Yes, such as the Mexican wolf and the volcano rabbit (teporingo)."}
        ]
    },
    "mx-monterrey-steel": {
        "de": [
            {"q": "Warum war Stahl für Monterrey wichtig?", "a": "Es legte den Grundstein für den industriellen Aufstieg der Stadt."},
            {"q": "Was ist der Parque Fundidora heute?", "a": "Ein Museum und Erholungspark auf dem alten Werksgelände."},
            {"q": "Gibt es dort noch einen Hochofen?", "a": "Ja, der Hochofen Nr. 3 ist ein Wahrzeichen und Museum."},
            {"q": "Wann begann die Stahlproduktion?", "a": "Im Jahr 1900."},
            {"q": "Welche anderen Industrien sind dort heute?", "a": "Automobilbau, Elektronik und Bierherstellung."}
        ],
        "hu": [
            {"q": "Miért volt fontos az acél Monterrey számára?", "a": "Ez alapozta meg a város ipari felemelkedését."},
            {"q": "Mi a Parque Fundidora ma?", "a": "Múzeum és szabadidőpark a régi gyárterületen."},
            {"q": "Van még ott nagyolvasztó?", "a": "Igen, a 3-as számú nagyolvasztó jelkép és múzeum."},
            {"q": "Mikor kezdődött az acélgyártás?", "a": "1900-ban."},
            {"q": "Milyen más iparágak vannak ott ma?", "a": "Autógyártás, elektronika és sörgyártás."}
        ],
        "ro": [
            {"q": "De ce a fost oțelul important pentru Monterrey?", "a": "A pus bazele ascensiunii industriale a orașului."},
            {"q": "Ce este Parcul Fundidora astăzi?", "a": "Un muzeu și parc de recreere pe vechiul sit industrial."},
            {"q": "Mai există vreun furnal acolo?", "a": "Da, furnalul nr. 3 este un punct de reper și muzeu."},
            {"q": "Când a început producția de oțel?", "a": "În anul 1900."},
            {"q": "Ce alte industrii sunt prezente astăzi?", "a": "Auto, electronică și producția de bere."}
        ],
        "en": [
            {"q": "Why was steel important for Monterrey?", "a": "It laid the foundation for the city's industrial boom."},
            {"q": "What is Fundidora Park today?", "a": "A museum and public park on the old factory grounds."},
            {"q": "Is there still a blast furnace there?", "a": "Yes, Blast Furnace No. 3 is a landmark and museum."},
            {"q": "When did steel production begin?", "a": "In 1900."},
            {"q": "What other industries are there today?", "a": "Automotive, electronics, and brewing."}
        ]
    },
    "mx-juarez-maquila": {
        "de": [
            {"q": "Was ist eine Maquiladora?", "a": "Ein Werk, das Teile zollfrei importiert und Fertigprodukte exportiert."},
            {"q": "Warum gibt es so viele in Juárez?", "a": "Wegen der direkten Nähe zur Grenze der USA."},
            {"q": "Was wird dort meist produziert?", "a": "Elektronik, Autoteile und medizinische Geräte."},
            {"q": "Wann begann dieses Programm?", "a": "In den 1960er Jahren."},
            {"q": "Wie viele Menschen arbeiten dort?", "a": "Hunderttausende in der gesamten Region."}
        ],
        "hu": [
            {"q": "Mi az a maquiladora?", "a": "Olyan üzem, amely vámmentesen importál alkatrészeket és készterméket exportál."},
            {"q": "Miért van ennyi Juárezben?", "a": "Az USA határának közvetlen közelsége miatt."},
            {"q": "Mit gyártanak ott leginkább?", "a": "Elektronikát, autóalkatrészeket és orvosi eszközöket."},
            {"q": "Mikor kezdődött ez a program?", "a": "Az 1960-as években."},
            {"q": "Hányan dolgoznak ott?", "a": "Százezrek az egész régióban."}
        ],
        "ro": [
            {"q": "Ce este o maquiladora?", "a": "O fabrică ce importă componente fără taxe și exportă produse finite."},
            {"q": "De ce sunt atât de multe în Juárez?", "a": "Datorită proximității directe cu granița SUA."},
            {"q": "Ce se produce cel mai mult acolo?", "a": "Electronice, piese auto și echipamente medicale."},
            {"q": "Când a început acest program?", "a": "În anii 1960."},
            {"q": "Câți oameni lucrează acolo?", "a": "Sute de mii în întreaga regiune."}
        ],
        "en": [
            {"q": "What is a maquiladora?", "a": "A factory that imports components duty-free and exports finished goods."},
            {"q": "Why are there so many in Juárez?", "a": "Due to its location directly on the US border."},
            {"q": "What is mostly produced there?", "a": "Electronics, auto parts, and medical devices."},
            {"q": "When did this program begin?", "a": "In the 1960s."},
            {"q": "How many people work there?", "a": "Hundreds of thousands in the entire region."}
        ]
    },
    "mx-campeche-oil": {
        "de": [
            {"q": "Welches ist das größte Ölfeld?", "a": "Cantarell."},
            {"q": "Wird das Öl im Meer gefördert?", "a": "Ja, es ist Offshore-Förderung im Golf von Mexiko."},
            {"q": "Welche Firma betreibt die Felder?", "a": "Der Staatskonzern PEMEX."},
            {"q": "Wann wurde Cantarell entdeckt?", "a": "Im Jahr 1976 durch einen Fischer."},
            {"q": "Ist die Förderung rückläufig?", "a": "Ja, die Produktion ist in den letzten Jahren gesunken."}
        ],
        "hu": [
            {"q": "Melyik a legnagyobb olajmező?", "a": "Cantarell."},
            {"q": "A tengerben termelik ki az olajat?", "a": "Igen, offshore kitermelés folyik a Mexikói-öbölben."},
            {"q": "Melyik cég kezeli a mezőket?", "a": "A PEMEX állami vállalat."},
            {"q": "Mikor fedezték fel a Cantarellt?", "a": "1976-ban, egy halász fedezte fel."},
            {"q": "Visszaesett a kitermelés?", "a": "Igen, az utóbbi években csökkent a produkció."}
        ],
        "ro": [
            {"q": "Care este cel mai mare zăcământ petrolier?", "a": "Cantarell."},
            {"q": "Petrolul este extras din mare?", "a": "Da, este producție offshore în Golful Mexic."},
            {"q": "Ce companie operează zăcămintele?", "a": "Compania de stat PEMEX."},
            {"q": "Când a fost descoperit Cantarell?", "a": "În anul 1976, de către un pescar."},
            {"q": "Este producția în scădere?", "a": "Da, producția a scăzut în ultimii ani."}
        ],
        "en": [
            {"q": "What is the largest oil field called?", "a": "Cantarell."},
            {"q": "Is the oil extracted from the sea?", "a": "Yes, it is offshore production in the Gulf of Mexico."},
            {"q": "Which company operates the fields?", "a": "The state-owned company PEMEX."},
            {"q": "When was Cantarell discovered?", "a": "In 1976, by a fisherman."},
            {"q": "Is production declining?", "a": "Yes, production has decreased in recent years."}
        ]
    },
    "mx-port-veracruz": {
        "de": [
            {"q": "Wer gründete den Hafen?", "a": "Hernán Cortés im Jahr 1519."},
            {"q": "Ist es der älteste Hafen?", "a": "Ja, der älteste von Europäern gegründete Hafen in Mexiko."},
            {"q": "Was ist San Juan de Ulúa?", "a": "Eine Inselfestung, die den Hafen schützte."},
            {"q": "Was wird dort heute umgeschlagen?", "a": "Besonders viele Automobile für den Export."},
            {"q": "Hat der Hafen eine Mauer?", "a": "Ja, Teile der alten Stadtmauer sind noch erhalten."}
        ],
        "hu": [
            {"q": "Ki alapította a kikötőt?", "a": "Hernán Cortés 1519-ben."},
            {"q": "Ez a legrégebbi kikötő?", "a": "Igen, az európaiak által alapított legrégebbi kikötő Mexikóban."},
            {"q": "Mi az a San Juan de Ulúa?", "a": "Egy szigeterőd, amely a kikötőt védte."},
            {"q": "Mit szállítanak itt ma?", "a": "Különösen sok gépjárművet exportra."},
            {"q": "Van fala a kikötőnek?", "a": "Igen, a régi városfal részei még láthatók."}
        ],
        "ro": [
            {"q": "Cine a fondat portul?", "a": "Hernán Cortés în anul 1519."},
            {"q": "Este cel mai vechi port?", "a": "Da, cel mai vechi port fondat de europeni în Mexic."},
            {"q": "Ce este San Juan de Ulúa?", "a": "O fortăreață pe o insulă care proteja portul."},
            {"q": "Ce se transportă astăzi pe aici?", "a": "În special un volum mare de automobile pentru export."},
            {"q": "Are portul un zid de protecție?", "a": "Da, părți din vechiul zid al orașului sunt încă păstrate."}
        ],
        "en": [
            {"q": "Who founded the port?", "a": "Hernán Cortés in 1519."},
            {"q": "Is it the oldest port?", "a": "Yes, the oldest European-founded port in Mexico."},
            {"q": "What is San Juan de Ulúa?", "a": "An island fortress that protected the port."},
            {"q": "What is handled there today?", "a": "Especially large numbers of automobiles for export."},
            {"q": "Does the port have a wall?", "a": "Yes, parts of the old city wall are still standing."}
        ]
    },
    "mx-port-manzanillo": {
        "de": [
            {"q": "Ist es der größte Hafen?", "a": "Ja, der größte Containerhafen Mexikos."},
            {"q": "An welcher Küste liegt er?", "a": "An der Pazifikküste."},
            {"q": "Welche Regionen bedient er?", "a": "Besonders den Handel mit Asien."},
            {"q": "Gibt es dort auch Tourismus?", "a": "Ja, Manzanillo ist auch als Badeort bekannt."},
            {"q": "Wofür ist er als Hauptstadt bekannt?", "a": "Als Welthauptstadt des Sailfish (Fächerfischs)."}
        ],
        "hu": [
            {"q": "Ez a legnagyobb kikötő?", "a": "Igen, Mexikó legnagyobb konténerkikötője."},
            {"q": "Melyik parton fekszik?", "a": "A csendes-óceáni parton."},
            {"q": "Mely régiókat szolgálja ki?", "a": "Különösen az Ázsiával való kereskedelmet."},
            {"q": "Van ott turizmus is?", "a": "Igen, Manzanillo üdülőhelyként is ismert."},
            {"q": "Minek a fővárosaként ismerik?", "a": "A vitorláshal (sailfish) világfővárosaként."}
        ],
        "ro": [
            {"q": "Este cel mai mare port?", "a": "Da, cel mai mare port de containere din Mexic."},
            {"q": "Pe ce coastă se află?", "a": "Pe coasta Pacificului."},
            {"q": "Ce regiuni deservește?", "a": "În special comerțul cu Asia."},
            {"q": "Există și turism acolo?", "a": "Da, Manzanillo este cunoscut și ca stațiune balneară."},
            {"q": "Pentru ce este considerat capitală?", "a": "Ca fiind capitala mondială a peștelui spadă (sailfish)."}
        ],
        "en": [
            {"q": "Is it the largest port?", "a": "Yes, the largest container port in Mexico."},
            {"q": "On which coast is it located?", "a": "The Pacific coast."},
            {"q": "Which regions does it serve?", "a": "Especially trade with Asia."},
            {"q": "Is there tourism as well?", "a": "Yes, Manzanillo is also known as a beach resort."},
            {"q": "What is it the capital of?", "a": "It is known as the Sailfish Capital of the World."}
        ]
    },
    "mx-cozumel-island": {
        "de": [
            {"q": "Wie kommt man nach Cozumel?", "a": "Per Fähre von Playa del Carmen oder per Flugzeug."},
            {"q": "Ist das Tauchen dort gut?", "a": "Ja, es ist eines der besten Tauchreviere weltweit."},
            {"q": "Gibt es Maya-Ruinen auf der Insel?", "a": "Ja, San Gervasio, eine Stätte für die Fruchtbarkeitsgöttin."},
            {"q": "Was ist das Palancar-Riff?", "a": "Ein weltberühmter Teil des Riffs vor Cozumel."},
            {"q": "Ist die Insel bewohnt?", "a": "Ja, sie ist die größte bewohnte Insel Mexikos."}
        ],
        "hu": [
            {"q": "Hogyan lehet eljutni Cozumelre?", "a": "Komppal Playa del Carmenből vagy repülővel."},
            {"q": "Jó ott a búvárkodás?", "a": "Igen, a világ egyik legjobb búvárhelye."},
            {"q": "Vannak maja romok a szigeten?", "a": "Igen, San Gervasio, a termékenység istennőjének szentélye."},
            {"q": "Mi az a Palancar-zátony?", "a": "A Cozumel melletti zátony világhírű része."},
            {"q": "Lakott a sziget?", "a": "Igen, Mexikó legnagyobb lakott szigete."}
        ],
        "ro": [
            {"q": "Cum se ajunge în Cozumel?", "a": "Cu feribotul din Playa del Carmen sau cu avionul."},
            {"q": "Scufundările sunt bune acolo?", "a": "Da, este una dintre cele mai bune destinații de diving din lume."},
            {"q": "Există ruine maiașe pe insulă?", "a": "Da, San Gervasio, un sit dedicat zeiței fertilității."},
            {"q": "Ce este Reciful Palancar?", "a": "O parte faimoasă la nivel mondial a recifului de lângă Cozumel."},
            {"q": "Este insula locuită?", "a": "Da, este cea mai mare insulă locuită din Mexic."}
        ],
        "en": [
            {"q": "How do you get to Cozumel?", "a": "By ferry from Playa del Carmen or by plane."},
            {"q": "Is the diving good there?", "a": "Yes, it is one of the premier diving spots in the world."},
            {"q": "Are there Maya ruins on the island?", "a": "Yes, San Gervasio, a site dedicated to the goddess of fertility."},
            {"q": "What is Palancar Reef?", "a": "A world-famous part of the reef system near Cozumel."},
            {"q": "Is the island inhabited?", "a": "Yes, it is the largest inhabited island in Mexico."}
        ]
    },
    "mx-maya-reef": {
        "de": [
            {"q": "Wie lang ist das Riff?", "a": "Über 1.000 Kilometer."},
            {"q": "Ist es das größte der Welt?", "a": "Nein, das zweitgrößte nach dem Great Barrier Reef."},
            {"q": "Welche Länder teilen sich das Riff?", "a": "Mexiko, Belize, Guatemala und Honduras."},
            {"q": "Gibt es dort Seekühe?", "a": "Ja, es ist ein wichtiger Lebensraum für Seekühe."},
            {"q": "Welche Bedrohungen gibt es?", "a": "Klimawandel, Verschmutzung und Überfischung."}
        ],
        "hu": [
            {"q": "Milyen hosszú a zátony?", "a": "Több mint 1000 kilométer."},
            {"q": "Ez a legnagyobb a világon?", "a": "Nem, a második legnagyobb a Nagy-korallzátony után."},
            {"q": "Mely országok osztoznak rajta?", "a": "Mexikó, Belize, Guatemala és Honduras."},
            {"q": "Élnek ott tengeritehenek?", "a": "Igen, fontos élőhelye a lamantinoknak."},
            {"q": "Milyen veszélyek fenyegetik?", "a": "Klímaváltozás, szennyezés és túlhalászás."}
        ],
        "ro": [
            {"q": "Ce lungime are reciful?", "a": "Peste 1.000 de kilometri."},
            {"q": "Este cel mai mare din lume?", "a": "Nu, este al doilea ca mărime după Marea Barieră de Corali."},
            {"q": "Ce țări împart acest recif?", "a": "Mexic, Belize, Guatemala și Honduras."},
            {"q": "Există lamantini acolo?", "a": "Da, este un habitat important pentru lamantini."},
            {"q": "Ce amenințări există?", "a": "Schimbările climatice, poluarea și pescuitul excesiv."}
        ],
        "en": [
            {"q": "How long is the reef?", "a": "Over 1,000 kilometers."},
            {"q": "Is it the largest in the world?", "a": "No, it is the second largest after the Great Barrier Reef."},
            {"q": "Which countries share the reef?", "a": "Mexico, Belize, Guatemala, and Honduras."},
            {"q": "Are there manatees there?", "a": "Yes, it is a vital habitat for manatees."},
            {"q": "What are the main threats to it?", "a": "Climate change, pollution, and overfishing."}
        ]
    }
}

# New entries added to the script based on the 59 POIs list
extra_faqs = {
    "mx-calakmul": faqs["mx-calakmul"], # Already in faqs
    # Let me ensure all from the list are covered.
}

def format_faq(faq_obj):
    res = "    faq: {\n"
    for lang in ["de", "hu", "ro", "en"]:
        res += f"      {lang}: [\n"
        for item in faq_obj[lang]:
            q = item['q'].replace('"', '\\"')
            a = item['a'].replace('"', '\\"')
            res += f'        {{ q: "{q}", a: "{a}" }},\n'
        res += "      ],\n"
    res += "    },"
    return res

for poi_id, faq_obj in faqs.items():
    # Find the POI block with this ID
    # Match id: "poi_id" and then find the closing } of that object.
    # We want to insert before the last } of the object.
    
    pattern = re.compile(r'({[\s\n]*id:\s*"' + re.escape(poi_id) + r'".*?)([\s\n]*},)', re.DOTALL)
    
    def repl(m):
        prefix = m.group(1)
        suffix = m.group(2)
        if 'faq:' in prefix:
            return m.group(0) # Already has FAQ
        
        # Ensure prefix ends with a comma if it doesn't
        clean_prefix = prefix.rstrip()
        if not clean_prefix.endswith(','):
            clean_prefix += ','
        
        return clean_prefix + "\n" + format_faq(faq_obj) + suffix

    content = pattern.sub(repl, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Finished updating FAQs.")
