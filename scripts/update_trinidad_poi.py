
import json
import re

def get_trinidad_data():
    return [
        {
            "id": "tt-portofspain",
            "descriptionAdvanced": {
                "en": "Port of Spain, the bustling capital of Trinidad and Tobago, is a major financial hub in the Caribbean known for its vibrant street life and stunning colonial architecture. It serves as the epicenter of the world-famous Trinidad Carnival.",
                "de": "Port of Spain, die geschäftige Hauptstadt von Trinidad und Tobago, ist ein wichtiges Finanzzentrum in der Karibik, bekannt für sein pulsierendes Straßenleben und seine beeindruckende Kolonialarchitektur. Es ist das Epizentrum des weltberühmten Trinidad Carnival.",
                "hu": "Port of Spain, Trinidad és Tobago nyüzsgő fővárosa, a Karib-térség egyik jelentős pénzügyi központja, amely vibráló utcai életéről és lenyűgöző gyarmati építészetéről ismert. Ez a világhírű Trinidad-i karnevál epicentruma.",
                "ro": "Port of Spain, capitala plină de viață a Trinidad și Tobago, este un hub financiar major în Caraibe, cunoscut pentru viața stradală vibrantă și arhitectura colonială uimitoare. Servește ca epicentru al faimosului Carnaval din Trinidad."
            },
            "facts": {
                "en": ["Capital of Trinidad and Tobago", "Third largest municipality", "Center of political activity", "Famous for Carnival celebrations"],
                "de": ["Hauptstadt von Trinidad und Tobago", "Drittgrößte Gemeinde", "Zentrum der politischen Aktivität", "Berühmt für Karnevalsfeiern"],
                "hu": ["Trinidad és Tobago fővárosa", "Harmadik legnagyobb önkormányzat", "A politikai élet központja", "Híres a karneváli ünnepségekről"],
                "ro": ["Capitala Trinidad și Tobago", "A treia municipalitate ca mărime", "Centrul activității politice", "Faimos pentru sărbătorile de Carnaval"]
            },
            "factsAdvanced": {
                "en": ["Home to the Magnificent Seven", "Features Queen's Park Savannah", "Strategic port for regional trade", "Site of the historic Red House"],
                "de": ["Heimat der Magnificent Seven", "Mit der Queen's Park Savannah", "Strategischer Hafen für den regionalen Handel", "Standort des historischen Red House"],
                "hu": ["A 'Csodálatos Hét' (Magnificent Seven) otthona", "Itt található a Queen's Park Savannah", "Regionális kereskedelmi stratégiai kikötő", "A történelmi Vörös Ház (Red House) helyszíne"],
                "ro": ["Casa celor 'Șapte Magnifici'", "Are parcul Queen's Park Savannah", "Port strategic pentru comerțul regional", "Locul istoricei Red House"]
            },
            "historyYear": 1757,
            "area": 12
        },
        {
            "id": "tt-sanfernando",
            "descriptionAdvanced": {
                "en": "San Fernando is known as the industrial capital of Trinidad, situated in the heart of the country's oil and gas region. The city is built around the iconic San Fernando Hill, offering panoramic views of the Gulf of Paria.",
                "de": "San Fernando ist als Industriehauptstadt von Trinidad bekannt und liegt im Herzen der Öl- und Gasregion des Landes. Die Stadt ist um den ikonischen San Fernando Hill herum gebaut und bietet einen Panoramablick auf den Golf von Paria.",
                "hu": "San Fernando Trinidad ipari fővárosaként ismert, az ország olaj- és gázrégiójának szívében helyezkedik el. A város az ikonikus San Fernando-domb köré épült, amely panorámás kilátást nyújt a Paria-öbölre.",
                "ro": "San Fernando este cunoscut drept capitala industrială a Trinidadului, situat în inima regiunii de petrol și gaze a țării. Orașul este construit în jurul dealului iconic San Fernando, oferind vederi panoramice ale Golfului Paria."
            },
            "facts": {
                "en": ["Second largest city in Trinidad", "Known as the 'Industrial Capital'", "Located near oil refineries", "Overlooked by San Fernando Hill"],
                "de": ["Zweitgrößte Stadt in Trinidad", "Bekannt als 'Industriehauptstadt'", "In der Nähe von Ölraffinerien gelegen", "Vom San Fernando Hill überragt"],
                "hu": ["Trinidad második legnagyobb városa", "Az 'Ipari fővárosként' ismert", "Olajfinomítók közelében található", "A San Fernando-domb magasodik fölé"],
                "ro": ["Al doilea oraș ca mărime din Trinidad", "Cunoscut drept 'Capitala Industrială'", "Situat lângă rafinării de petrol", "Dominat de dealul San Fernando"]
            },
            "factsAdvanced": {
                "en": ["Elevated to city status in 1988", "Gateway to the southern oil belt", "Features the Harris Promenade", "Historic center for sugar trade"],
                "de": ["1988 zum Stadtstatus erhoben", "Tor zum südlichen Ölgürtel", "Mit der Harris Promenade", "Historisches Zentrum des Zuckerhandels"],
                "hu": ["1988-ban kapott városi rangot", "A déli olajöv kapuja", "Itt található a Harris sétány", "A cukorkereskedelem történelmi központja"],
                "ro": ["Ridicată la statutul de oraș în 1988", "Poarta către centura de petrol din sud", "Dispune de Promenada Harris", "Centru istoric pentru comerțul cu zahăr"]
            },
            "historyYear": 1784,
            "area": 18
        },
        {
            "id": "tt-arima",
            "descriptionAdvanced": {
                "en": "Arima is the largest borough in Trinidad and holds a special place in the nation's heart as a center for indigenous heritage and culture. It serves as a vital commercial gateway between the capital and the eastern regions of the island.",
                "de": "Arima ist der größte Bezirk in Trinidad und nimmt als Zentrum für indigenes Erbe und Kultur einen besonderen Platz im Herzen der Nation ein. Er dient als wichtiges Handelstor zwischen der Hauptstadt und den östlichen Regionen.",
                "hu": "Arima Trinidad legnagyobb kerülete, amely különleges helyet foglal el a nemzet szívében, mint az őslakos örökség és kultúra központja. Fontos kereskedelmi kapuként szolgál a főváros és a sziget keleti régiói között.",
                "ro": "Arima este cel mai mare burg din Trinidad și ocupă un loc special în inima națiunii ca centru al moștenirii și culturii indigene. Servește ca o poartă comercială vitală între capitală și regiunile estice."
            },
            "facts": {
                "en": ["Major borough in East Trinidad", "Center for indigenous heritage", "Important commercial gateway", "Host to the Santa Rosa Festival"],
                "de": ["Großer Bezirk in Ost-Trinidad", "Zentrum für indigenes Erbe", "Wichtiges Handelstor", "Gastgeber des Santa Rosa Festivals"],
                "hu": ["Jelentős kerület Kelet-Trinidadban", "Az őslakos örökség központja", "Fontos kereskedelmi kapu", "A Santa Rosa Fesztivál házigazdája"],
                "ro": ["Burg major în estul Trinidadului", "Centru pentru moștenirea indigenă", "Poartă comercială importantă", "Gazda Festivalului Santa Rosa"]
            },
            "factsAdvanced": {
                "en": ["Chartered as Royal Borough in 1888", "Home to the Carib Community", "Amerindian word for 'water'", "Stop for North Range access"],
                "de": ["1888 als Royal Borough staatlich anerkannt", "Heimat der Kariben-Gemeinschaft", "Amerindianisches Wort für 'Wasser'", "Halt für den Zugang zur Northern Range"],
                "hu": ["1888-ban kapott Királyi Kerület rangot", "A karib közösség otthona", "Amerikai indián szó, jelentése: 'víz'", "Megálló az Északi-hegység eléréséhez"],
                "ro": ["Constituit ca Burg Regal în 1888", "Casa comunității Carib", "Cuvânt amerindian pentru 'apă'", "Oprire pentru accesul în Northern Range"]
            },
            "historyYear": 1757
        },
        {
            "id": "tt-scarborough",
            "descriptionAdvanced": {
                "en": "Scarborough is the charming capital of Tobago, dominated by the well-preserved Fort King George overlooking the harbor. It is the primary administrative and commercial center for the smaller of the two twin islands.",
                "de": "Scarborough ist die charmante Hauptstadt von Tobago, die vom gut erhaltenen Fort King George mit Blick auf den Hafen beherrscht wird. Es ist das primäre Verwaltungs- und Handelszentrum der kleineren der beiden Inseln.",
                "hu": "Scarborough Tobago bájos fővárosa, amelyet a kikötőre néző, jól megőrzött King George-erőd ural. Ez a két ikersziget közül a kisebbik elsődleges közigazgatási és kereskedelmi központja.",
                "ro": "Scarborough este capitala fermecătoare a insulei Tobago, dominată de bine conservatul Fort King George care oferă vedere spre port. Este centrul administrativ și comercial primar pentru cea mai mică dintre cele două insule."
            },
            "facts": {
                "en": ["Capital city of Tobago", "Largest town on the island", "Dominated by Fort King George", "Main port for island ferries"],
                "de": ["Hauptstadt von Tobago", "Größte Stadt der Insel", "Beherrscht von Fort King George", "Haupthafen für Inselfähren"],
                "hu": ["Tobago fővárosa", "A sziget legnagyobb városa", "A King George-erőd uralja", "A szigeti kompok fő kikötője"],
                "ro": ["Capitala insulei Tobago", "Cel mai mare oraș de pe insulă", "Dominat de Fort King George", "Principalul port pentru feriboturi"]
            },
            "factsAdvanced": {
                "en": ["Replaced Georgetown in 1796", "Features a deep-water harbor", "Center for Tobago government", "Named after Scarborough, England"],
                "de": ["Ersetzte Georgetown im Jahr 1796", "Mit einem Tiefwasserhafen", "Zentrum der Regierung von Tobago", "Benannt nach Scarborough in England"],
                "hu": ["1796-ban váltotta fel Georgetownt", "Mélyvízi kikötővel rendelkezik", "Tobago kormányzati központja", "Az angliai Scarborough-ról nevezték el"],
                "ro": ["A înlocuit Georgetown în 1796", "Dispune de un port de adâncime", "Centrul guvernului din Tobago", "Numit după Scarborough din Anglia"]
            },
            "historyYear": 1654
        },
        {
            "id": "tt-chaguanas",
            "descriptionAdvanced": {
                "en": "Chaguanas is the largest and fastest-growing municipality in Trinidad, renowned for its bustling shopping districts and vibrant multicultural atmosphere. It is the commercial heart of central Trinidad and a key hub for the Indo-Trinidadian community.",
                "de": "Chaguanas ist die größte und am schnellsten wachsende Gemeinde in Trinidad, bekannt für ihre belebten Einkaufsviertel und ihre lebendige multikulturelle Atmosphäre. Es ist das Handelsherz von Zentral-Trinidad.",
                "hu": "Chaguanas Trinidad legnagyobb és leggyorsabban növekvő önkormányzata, amely nyüzsgő bevásárlónegyedeiről és vibráló, multikulturális légköréről híres. Ez Közép-Trinidad kereskedelmi szíve.",
                "ro": "Chaguanas este cea mai mare și cu cea mai rapidă creștere municipalitate din Trinidad, renumită pentru districtele comerciale pline de viață și atmosfera multiculturală vibrantă. Este inima comercială a Trinidadului central."
            },
            "facts": {
                "en": ["Largest municipality in Trinidad", "Fastest growing city", "Famous for busy markets", "Cultural hub of Central Trinidad"],
                "de": ["Größte Gemeinde in Trinidad", "Am schnellsten wachsende Stadt", "Berühmt für belebte Märkte", "Kulturzentrum von Zentral-Trinidad"],
                "hu": ["Trinidad legnagyobb önkormányzata", "A leggyorsabban növekvő város", "Híres forgalmas piacairól", "Közép-Trinidad kulturális központja"],
                "ro": ["Cea mai mare municipalitate din Trinidad", "Orașul cu cea mai rapidă creștere", "Faimos pentru piețele aglomerate", "Hub cultural al Trinidadului Central"]
            },
            "factsAdvanced": {
                "en": ["Named after indigenous tribe", "Center for Diwali Nagar", "Significant retail and finance hub", "Birthplace of V.S. Naipaul"],
                "de": ["Benannt nach einem indigenen Stamm", "Zentrum für Diwali Nagar", "Bedeutendes Einzelhandels- und Finanzzentrum", "Geburtsort von V.S. Naipaul"],
                "hu": ["Egy őslakos törzsről nevezték el", "A Diwali Nagar ünnepségek központja", "Jelentős kiskereskedelmi és pénzügyi központ", "V.S. Naipaul szülőhelye"],
                "ro": ["Numit după un trib indigen", "Centru pentru Diwali Nagar", "Hub semnificativ de retail și finanțe", "Locul de naștere al lui V.S. Naipaul"]
            },
            "historyYear": 1797
        },
        {
            "id": "tt-el-cerro",
            "descriptionAdvanced": {
                "en": "El Cerro del Aripo is the highest peak in Trinidad and Tobago, reaching an elevation of 940 meters within the lush Northern Range. The mountain is a sanctuary for rare wildlife and is often shrouded in misty cloud forests.",
                "de": "Der El Cerro del Aripo ist der höchste Gipfel in Trinidad und Tobago und erreicht eine Höhe von 940 Metern in der üppigen Northern Range. Der Berg ist ein Refugium für seltene Wildtiere und oft in Nebelwälder gehüllt.",
                "hu": "Az El Cerro del Aripo Trinidad és Tobago legmagasabb csúcsa, amely 940 méteres magasságot ér el a buja Északi-hegységben. A hegy ritka vadvilág menedékhelye, és gyakran ködös felhőerdők borítják.",
                "ro": "El Cerro del Aripo este cel mai înalt vârf din Trinidad și Tobago, atingând o altitudine de 940 de metri în luxuriantul Northern Range. Muntele este un sanctuar pentru fauna rară și este adesea învăluit în păduri de ceață."
            },
            "facts": {
                "en": ["Highest peak in the country", "940 meters above sea level", "Located in the Northern Range", "Shrouded in cloud forest"],
                "de": ["Höchster Gipfel des Landes", "940 Meter über dem Meeresspiegel", "In der Northern Range gelegen", "In Nebelwald gehüllt"],
                "hu": ["Az ország legmagasabb csúcsa", "940 méterrel a tengerszint felett", "Az Északi-hegységben található", "Felhőerdő borítja"],
                "ro": ["Cel mai înalt vârf din țară", "940 de metri deasupra nivelului mării", "Situat în Northern Range", "Învăluit în pădure de ceață"]
            },
            "factsAdvanced": {
                "en": ["Home to the golden tree frog", "Features unique endemic flora", "Challenging hiking destination", "Part of protected forest reserve"],
                "de": ["Heimat des Goldenen Laubfrosches", "Mit einzigartiger endemischer Flora", "Herausforderndes Wanderziel", "Teil eines geschützten Waldreservats"],
                "hu": ["Az arany levelibéka otthona", "Egyedülálló endemikus flóra jellemzi", "Kihívást jelentő túraútvonal", "Védett erdőrezervátum része"],
                "ro": ["Casa broaștei aurii de copac", "Prezintă floră endemică unică", "Destinație de drumeție provocatoare", "Parte a unei rezervații forestiere protejate"]
            },
            "elevation": 940
        },
        {
            "id": "tt-caroni-river",
            "descriptionAdvanced": {
                "en": "The Caroni River is the largest and most significant river in Trinidad, flowing 40 kilometers from the Northern Range to the Gulf of Paria. Its lower reaches form the spectacular Caroni Swamp, a vital wetland habitat.",
                "de": "Der Caroni River ist der größte und bedeutendste Fluss in Trinidad und fließt 40 Kilometer von der Northern Range zum Golf von Paria. Sein Unterlauf bildet den spektakulären Caroni Swamp.",
                "hu": "A Caroni-folyó Trinidad legnagyobb és legjelentősebb folyója, amely 40 kilométer hosszan folyik az Északi-hegységtől a Paria-öbölig. Alsó szakasza alkotja a látványos Caroni-mocsarat, amely létfontosságú vizes élőhely.",
                "ro": "Râul Caroni este cel mai mare și mai semnificativ râu din Trinidad, curgând 40 de kilometri de la Northern Range până la Golful Paria. Cursul său inferior formează spectaculoasa mlaștină Caroni."
            },
            "facts": {
                "en": ["Largest river in Trinidad", "40 kilometers in length", "Feeds the Caroni Swamp", "Flows to the Gulf of Paria"],
                "de": ["Größter Fluss in Trinidad", "40 Kilometer lang", "Speist den Caroni Swamp", "Fließt zum Golf von Paria"],
                "hu": ["Trinidad legnagyobb folyója", "40 kilométer hosszú", "A Caroni-mocsarat táplálja", "A Paria-öbölbe torkollik"],
                "ro": ["Cel mai mare râu din Trinidad", "40 de kilometri lungime", "Alimentează mlaștina Caroni", "Curge spre Golful Paria"]
            },
            "factsAdvanced": {
                "en": ["Drains the Caroni Plain", "Subject of irrigation projects", "Critical for flood management", "Supports freshwater fish"],
                "de": ["Entwässert die Caroni-Ebene", "Gegenstand von Bewässerungsprojekten", "Wichtig für das Hochwassermanagement", "Unterstützt Süßwasserfische"],
                "hu": ["Lecsapolja a Caroni-síkságot", "Öntözési projektek alanya", "Kritikus az árvízvédelem szempontjából", "Édesvízi halakat támogat"],
                "ro": ["Drenează Câmpia Caroni", "Subiectul unor proiecte de irigații", "Critic pentru managementul inundațiilor", "Susține peștii de apă dulce"]
            },
            "length": 40
        },
        {
            "id": "tt-el-tucuche",
            "descriptionAdvanced": {
                "en": "El Tucuche is the second-highest peak in Trinidad, known for its pristine elfin woodland and spectacular views. It is a sacred site for indigenous communities and a premier destination for adventurous hikers and birdwatchers.",
                "de": "Der El Tucuche ist der zweithöchste Gipfel in Trinidad, bekannt für seine unberührten Elfenwälder und spektakulären Aussichten. Er ist eine heilige Stätte für indigene Gemeinschaften.",
                "hu": "Az El Tucuche Trinidad második legmagasabb csúcsa, amely érintetlen törpeerdőiről és látványos kilátásáról ismert. Az őslakos közösségek szent helye, valamint a kalandvágyó túrázók és madármegfigyelők kedvelt úti célja.",
                "ro": "El Tucuche este al doilea vârf ca înălțime din Trinidad, cunoscut pentru pădurea sa de elfi virgină și vederile spectaculoase. Este un sit sacru pentru comunitățile indigene."
            },
            "facts": {
                "en": ["Second highest peak", "Located in the Northern Range", "Features rare elfin woodland", "Popular for mountain hiking"],
                "de": ["Zweithöchster Gipfel", "In der Northern Range gelegen", "Mit seltenem Elfenwald", "Beliebt zum Bergwandern"],
                "hu": ["Második legmagasabb csúcs", "Az Északi-hegységben található", "Ritka törpeerdő jellemzi", "Népszerű a hegyi túrázás körében"],
                "ro": ["Al doilea vârf ca înălțime", "Situat în Northern Range", "Prezintă pădure de elfi rară", "Popular pentru drumeții montane"]
            },
            "factsAdvanced": {
                "en": ["Home to endemic El Tucuche frog", "Views to the North Coast", "Rich in biodiversity", "Sacred to local Carib people"],
                "de": ["Heimat des endemischen El-Tucuche-Frosches", "Blick auf die Nordküste", "Reich an Biodiversität", "Heilig für das lokale Volk der Kariben"],
                "hu": ["Az endemikus El Tucuche béka otthona", "Kilátás az északi partra", "Biodiverzitásban gazdag", "Szent hely a helyi karib nép számára"],
                "ro": ["Casa broaștei endemice El Tucuche", "Vedere spre Coasta de Nord", "Bogat în biodiversitate", "Sacru pentru populația locală Carib"]
            },
            "elevation": 936
        },
        {
            "id": "tt-nariva-swamp",
            "descriptionAdvanced": {
                "en": "Nariva Swamp is the largest freshwater wetland in Trinidad and a designated RAMSAR site of international importance. It supports an incredible array of wildlife, including red-bellied macaws, howler monkeys, and West Indian manatees.",
                "de": "Nariva Swamp ist das größte Süßwasser-Feuchtgebiet in Trinidad und ein RAMSAR-Gebiet von internationaler Bedeutung. Er beherbergt eine unglaubliche Vielfalt an Wildtieren.",
                "hu": "A Nariva-mocsár Trinidad legnagyobb édesvízi vizes élőhelye, és nemzetközi jelentőségű RAMSAR-terület. Hihetetlen vadvilágot támogat, beleértve a vöröshasú ara papagájokat, bőgőmajmokat és nyugat-indiai manátuszokat.",
                "ro": "Mlaștina Nariva este cea mai mare zonă umedă de apă dulce din Trinidad și un sit RAMSAR desemnat de importanță internațională. Susține o gamă incredibilă de faună sălbatică."
            },
            "facts": {
                "en": ["Largest freshwater wetland", "RAMSAR site of importance", "Home to West Indian manatees", "Diverse tropical ecosystem"],
                "de": ["Größtes Süßwasser-Feuchtgebiet", "RAMSAR-Gebiet von Bedeutung", "Heimat der westindischen Seekühe", "Vielfältiges tropisches Ökosystem"],
                "hu": ["Legnagyobb édesvízi mocsárvidék", "Kiemelt RAMSAR-terület", "A nyugat-indiai manátuszok otthona", "Változatos trópusi ökoszisztéma"],
                "ro": ["Cea mai mare zonă umedă de apă dulce", "Situl RAMSAR de importanță", "Casa manatinilor din Indiile de Vest", "Ecosistem tropical divers"]
            },
            "factsAdvanced": {
                "en": ["Spans over 6,000 hectares", "Includes Bush Bush Sanctuary", "Vital for coastal protection", "Unique palm swamp forests"],
                "de": ["Umfasst über 6.000 Hektar", "Einschließlich Bush Bush Sanctuary", "Wichtig für den Küstenschutz", "Einzigartige Palmensumpfwälder"],
                "hu": ["Több mint 6000 hektáron terül el", "Magában foglalja a Bush Bush szentélyt", "Létfontosságú a partvédelem szempontjából", "Egyedülálló pálmamocsári erdők"],
                "ro": ["Se întinde pe peste 6.000 de hectare", "Include Sanctuarul Bush Bush", "Vital pentru protecția coastelor", "Păduri de mlaștină cu palmieri unice"]
            },
            "area": 60
        },
        {
            "id": "tt-little-tobago",
            "descriptionAdvanced": {
                "en": "Little Tobago, also known as Bird of Paradise Island, is a small, uninhabited island off the coast of Speyside. It is one of the Caribbean's most important bird sanctuaries, particularly famous for its spectacular seabird colonies.",
                "de": "Little Tobago, auch als Bird of Paradise Island bekannt, ist eine kleine, unbewohnte Insel vor der Küste von Speyside. Sie ist eines der wichtigsten Vogelschutzgebiete der Karibik.",
                "hu": "Little Tobago, más néven Paradicsommadár-sziget, egy kis, lakatlan sziget Speyside partjainál. A Karib-térség egyik legfontosabb madárvédelmi területe, különösen híres látványos tengeri madárkolóniáiról.",
                "ro": "Little Tobago, cunoscută și sub numele de Insula Pasărea Paradisului, este o insulă mică, nelocuită, în largul coastei Speyside. Este una dintre cele mai importante rezervații de păsări din Caraibe."
            },
            "facts": {
                "en": ["Important bird sanctuary", "Uninhabited offshore island", "Famous for seabird colonies", "Located near Speyside"],
                "de": ["Wichtiges Vogelschutzgebiet", "Unbewohnte Insel vor der Küste", "Berühmt für Seevogelkolonien", "In der Nähe von Speyside gelegen"],
                "hu": ["Fontos madárvédelmi terület", "Lakatlan sziget a part közelében", "Híres tengeri madárkolóniáiról", "Speyside közelében található"],
                "ro": ["Rezervație de păsări importantă", "Insulă nelocuită în larg", "Faimoasă pentru coloniile de păsări marine", "Situată lângă Speyside"]
            },
            "factsAdvanced": {
                "en": ["Former home of Birds of Paradise", "Significant nesting site", "Dry forest ecosystems", "Glass-bottom boat tours"],
                "de": ["Ehemalige Heimat der Paradiesvögel", "Bedeutender Nistplatz", "Trockenwald-Ökosysteme", "Glasbodenboot-Touren"],
                "hu": ["A paradicsommadarak egykori otthona", "Jelentős fészkelőhely", "Száraz erdei ökoszisztémák", "Üvegfenekű hajótúrák"],
                "ro": ["Fosta casă a Păsărilor Paradisului", "Loc de cuibărit semnificativ", "Ecosisteme de pădure uscată", "Tururi cu barca cu fund de sticlă"]
            },
            "area": 1
        },
        {
            "id": "tt-fort-king-george",
            "descriptionAdvanced": {
                "en": "Fort King George is the best-preserved colonial fort in Tobago, built by the British in the late 18th century to defend Scarborough. The site now houses a museum and offers some of the most beautiful views on the island.",
                "de": "Fort King George ist das am besten erhaltene Kolonialfort in Tobago, das im späten 18. Jahrhundert von den Briten zur Verteidigung von Scarborough erbaut wurde. Es beherbergt heute ein Museum.",
                "hu": "A King George-erőd Tobago legjobban megőrzött gyarmati erődítménye, amelyet a britek építettek a 18. század végén Scarborough védelmére. A helyszín ma múzeumnak ad otthont, és a sziget egyik legszebb kilátását kínálja.",
                "ro": "Fortul King George este cel mai bine conservat fort colonial din Tobago, construit de britanici la sfârșitul secolului al XVIII-lea pentru a apăra Scarborough. Situl găzduiește acum un muzeu."
            },
            "facts": {
                "en": ["Well-preserved British fort", "Built in the 1780s", "Houses the Tobago Museum", "Overlooks Scarborough harbor"],
                "de": ["Gut erhaltenes britisches Fort", "In den 1780ern erbaut", "Beherbergt das Tobago Museum", "Blickt auf den Hafen von Scarborough"],
                "hu": ["Jól megőrzött brit erőd", "Az 1780-as években épült", "A Tobago Múzeumnak ad otthont", "Kilátás a scarborough-i kikötőre"],
                "ro": ["Fort britanic bine conservat", "Construit în anii 1780", "Găzduiește Muzeul Tobago", "Vedere spre portul Scarborough"]
            },
            "factsAdvanced": {
                "en": ["Features original cannons", "Named after King George III", "Hands between British and French", "Stunning 360-degree views"],
                "de": ["Mit Original-Kanonen", "Benannt nach König Georg III.", "Wechselte zwischen Briten und Franzosen", "Atemberaubender 360-Grad-Blick"],
                "hu": ["Eredeti ágyúk találhatók itt", "III. György királyról nevezték el", "Gazdát cserélt a britek és franciák között", "Lenyűgöző 360 fokos kilátás"],
                "ro": ["Dispune de tunuri originale", "Numit după Regele George al III-lea", "Schimbat între britanici și francezi", "Vederi uimitoare la 360 de grade"]
            },
            "historyYear": 1781
        },
        {
            "id": "tt-lopinot",
            "descriptionAdvanced": {
                "en": "The Lopinot Historical Complex is a restored cocoa estate nestled in a picturesque valley, reflecting Trinidad's rich agricultural past. It is famously associated with the legend of the Compte de Lopinot and is a center for parang music.",
                "de": "Der Lopinot Historical Complex ist ein restauriertes Kakao-Anwesen in einem malerischen Tal, das die reiche landwirtschaftliche Vergangenheit von Trinidad widerspiegelt. Er ist bekannt für Parang-Musik.",
                "hu": "A Lopinot történelmi komplexum egy helyreállított kakaóültetvény egy festői völgyben, amely Trinidad gazdag mezőgazdasági múltját tükrözi. Híres Lopinot grófjának legendájáról és a parang zene központja.",
                "ro": "Complexul istoric Lopinot este o moșie de cacao restaurată, situată într-o vale pitorească, reflectând trecutul agricol bogat al Trinidadului. Este faimos asociat cu legenda Contelui de Lopinot."
            },
            "facts": {
                "en": ["Historic cocoa estate", "Located in Lopinot Valley", "Center for Parang music", "Named after Count Lopinot"],
                "de": ["Historisches Kakao-Anwesen", "Im Lopinot-Tal gelegen", "Zentrum für Parang-Musik", "Benannt nach Graf Lopinot"],
                "hu": ["Történelmi kakaóültetvény", "A Lopinot-völgyben található", "A Parang zene központja", "Lopinot grófjáról nevezték el"],
                "ro": ["Moșie istorică de cacao", "Situată în Valea Lopinot", "Centru pentru muzica Parang", "Numit după Contele Lopinot"]
            },
            "factsAdvanced": {
                "en": ["Established in early 1800s", "Features Count's house", "Known for ghostly legends", "Surrounded by cocoa trees"],
                "de": ["Anfang des 19. Jahrhunderts gegründet", "Mit dem Haus des Grafen", "Bekannt für Geisterlegenden", "Umgeben von Kakaobäumen"],
                "hu": ["Az 1800-as évek elején alapították", "Itt található a gróf háza", "Kísértetlegendáiról ismert", "Kakaófák veszik körül"],
                "ro": ["Înființat la începutul anilor 1800", "Dispune de casa Contelui", "Cunoscut pentru legende cu fantome", "Înconjurat de arbori de cacao"]
            },
            "historyYear": 1800
        },
        {
            "id": "tt-maracas",
            "descriptionAdvanced": {
                "en": "Maracas Bay is Trinidad's most popular beach, famous for its deep crescent shape and world-class surfing waves. It is equally renowned for its 'Bake and Shark' street food, a culinary staple for locals and tourists alike.",
                "de": "Maracas Bay ist Trinidads beliebtester Strand, berühmt für seine tiefe Halbmondform und erstklassige Surfmöglichkeiten. Ebenso bekannt ist er für sein 'Bake and Shark' Street Food.",
                "hu": "A Maracas-öböl Trinidad legnépszerűbb strandja, amely mély félhold alakjáról és világszínvonalú szörfözhető hullámairól híres. Ugyanennyire ismert a 'Bake and Shark' utcai ételéről, amely a helyiek és turisták alapvető fogása.",
                "ro": "Golful Maracas este cea mai populară plajă din Trinidad, celebră pentru forma sa de semilună adâncă și valurile de surf de talie mondială. Este la fel de renumit pentru mâncarea stradală 'Bake and Shark'."
            },
            "facts": {
                "en": ["Trinidad's most popular beach", "Famous for 'Bake and Shark'", "Deep crescent shape", "Scenic North Coast drive"],
                "de": ["Trinidads beliebtester Strand", "Berühmt für 'Bake and Shark'", "Tiefe Halbmondform", "Malerische Fahrt an der Nordküste"],
                "hu": ["Trinidad legnépszerűbb strandja", "Híres a 'Bake and Shark'-ról", "Mély félhold alakú", "Látványos északi parti út"],
                "ro": ["Cea mai populară plajă din Trinidad", "Faimos pentru 'Bake and Shark'", "Formă de semilună adâncă", "Traseu pitoresc pe Coasta de Nord"]
            },
            "factsAdvanced": {
                "en": ["Surrounded by lush mountains", "Popular for bodyboarding", "Features well-equipped facility", "Cultural icon of Trinidad"],
                "de": ["Umgeben von üppigen Bergen", "Beliebt zum Bodyboarden", "Mit gut ausgestatteter Einrichtung", "Kulturikone von Trinidad"],
                "hu": ["Buja hegyek veszik körül", "Népszerű a bodyboardozók körében", "Jól felszerelt létesítményekkel rendelkezik", "Trinidad kulturális ikonja"],
                "ro": ["Înconjurat de munți luxurianți", "Popular pentru bodyboarding", "Dispune de facilități bine echipate", "Pictogramă culturală a Trinidadului"]
            }
        },
        {
            "id": "tt-pitchlake",
            "descriptionAdvanced": {
                "en": "The Pitch Lake in La Brea is the world's largest natural deposit of asphalt, a geological wonder that continues to fascinate scientists. It covers about 40 hectares and is estimated to be over 75 meters deep at its center.",
                "de": "Der Pitch Lake in La Brea ist das weltweit größte natürliche Asphaltvorkommen, ein geologisches Wunder, das Wissenschaftler weiterhin fasziniert. Er umfasst etwa 40 Hektar.",
                "hu": "A La Breában található Szurok-tó (Pitch Lake) a világ legnagyobb természetes aszfaltlelőhelye, egy geológiai csoda, amely továbbra is lenyűgözi a tudósokat. Körülbelül 40 hektáron terül el.",
                "ro": "Lacul de Smoală (Pitch Lake) din La Brea este cel mai mare zăcământ natural de asfalt din lume, o minune geologică ce continuă să fascineze oamenii de știință. Acoperă aproximativ 40 de hectare."
            },
            "facts": {
                "en": ["Largest natural asphalt lake", "Located in La Brea", "Covers about 40 hectares", "Geologically unique feature"],
                "de": ["Größter natürlicher Asphaltsee", "In La Brea gelegen", "Umfasst etwa 40 Hektar", "Geologisch einzigartiges Merkmal"],
                "hu": ["A legnagyobb természetes aszfalttó", "La Breában található", "Körülbelül 40 hektáron terül el", "Geológiailag egyedülálló képződmény"],
                "ro": ["Cel mai mare lac natural de asfalt", "Situat în La Brea", "Acoperă aproximativ 40 de hectare", "Caracteristică geologică unică"]
            },
            "factsAdvanced": {
                "en": ["Discovered by Walter Raleigh", "Source for many world roads", "Self-replenishing surface", "Features 'healing' sulfur pools"],
                "de": ["Von Walter Raleigh entdeckt", "Quelle für viele Straßen weltweit", "Selbsterneuernde Oberfläche", "Mit 'heilenden' Schwefelbecken"],
                "hu": ["Walter Raleigh fedezte fel", "Számos világúthoz szolgált forrásul", "Önmegújuló felszín jellemzi", "’Gyógyhatású’ kénes medencékkel rendelkezik"],
                "ro": ["Descoperit de Walter Raleigh", "Sursă pentru multe drumuri din lume", "Suprafață care se auto-reînnoiește", "Dispune de bazine cu sulf 'vindecătoare'"]
            },
            "area": 0.4
        },
        {
            "id": "tt-caroni",
            "descriptionAdvanced": {
                "en": "The Caroni Bird Sanctuary is a vast mangrove wetland that serves as the primary nesting ground for the Scarlet Ibis, Trinidad's national bird. At sunset, visitors witness thousands of bright red birds returning to their roosts.",
                "de": "Das Caroni Bird Sanctuary ist ein ausgedehntes Mangroven-Feuchtgebiet, das als Hauptnistplatz für den Scharlachsichler, Trinidads Nationalvogel, dient.",
                "hu": "A Caroni Madárrezervátum egy hatalmas mangrove mocsár, amely a skarlát íbisz, Trinidad nemzeti madarának elsődleges fészkelőhelye. Naplementekor több ezer élénkvörös madár tér vissza pihenőhelyére.",
                "ro": "Sanctuarul de păsări Caroni este o zonă umedă vastă de mangrove care servește drept principalul loc de cuibărit pentru Ibisul Roșu, pasărea națională a Trinidadului."
            },
            "facts": {
                "en": ["Home to the Scarlet Ibis", "Vast mangrove ecosystem", "National bird sanctuary", "Stunning sunset boat tours"],
                "de": ["Heimat des Scharlachsichlers", "Großes Mangroven-Ökosystem", "Nationales Vogelschutzgebiet", "Atemberaubende Bootstouren zum Sonnenuntergang"],
                "hu": ["A skarlát íbisz otthona", "Hatalmas mangrove ökoszisztéma", "Nemzeti madárrezervátum", "Lenyűgöző naplementi hajótúrák"],
                "ro": ["Casa Ibisului Roșu", "Ecosistem vast de mangrove", "Sanctuar național de păsări", "Tururi uimitoare cu barca la apus"]
            },
            "factsAdvanced": {
                "en": ["Spans over 5,000 hectares", "Critical marine nursery", "Four species of mangroves", "RAMSAR site of importance"],
                "de": ["Umfasst über 5.000 Hektar", "Kritische Meereskinderstube", "Vier Arten von Mangroven", "RAMSAR-Gebiet von Bedeutung"],
                "hu": ["Több mint 5000 hektáron terül el", "Kritikus tengeri bölcsőde", "Négy mangrovefaj található itt", "Fontos RAMSAR-terület"],
                "ro": ["Se întinde pe peste 5.000 de hectare", "Pepiniere marine critice", "Patru specii de mangrove", "Situl RAMSAR de importanță"]
            },
            "area": 56
        },
        {
            "id": "tt-asawright",
            "descriptionAdvanced": {
                "en": "The Asa Wright Nature Centre is a world-renowned birdwatching destination located in a former cocoa and coffee plantation. It provides a rare opportunity to see exotic birds like toucans and hummingbirds at close range.",
                "de": "Das Asa Wright Nature Centre ist ein weltbekanntes Ziel für Vogelbeobachtungen, das sich auf einer ehemaligen Kakao- und Kaffeeplantage befindet. Es bietet seltene Einblicke in die exotische Vogelwelt.",
                "hu": "Az Asa Wright Természetvédelmi Központ egy világhírű madármegfigyelő helyszín, amely egy egykori kakaó- és kávéültetvényen található. Ritka lehetőséget kínál egzotikus madarak, például tukánok és kolibrik megfigyelésére.",
                "ro": "Centrul de Natură Asa Wright este o destinație de observare a păsărilor renumită în întreaga lume, situată pe o fostă plantație de cacao și cafea. Oferă o oportunitate rară de a vedea păsări exotice."
            },
            "facts": {
                "en": ["World-famous birding center", "Former coffee plantation", "Located in the Northern Range", "Home to the rare Oilbird"],
                "de": ["Weltberühmtes Vogelzentrum", "Ehemalige Kaffeeplantage", "In der Northern Range gelegen", "Heimat des seltenen Fettschwalms"],
                "hu": ["Világhírű madármegfigyelő központ", "Egykori kávéültetvény", "Az Északi-hegységben található", "A ritka zsírfecske otthona"],
                "ro": ["Centru de birdwatching faimos", "Fosta plantație de cafea", "Situat în Northern Range", "Casa rarei păsări de ulei (Oilbird)"]
            },
            "factsAdvanced": {
                "en": ["Established in 1967", "First nature center in Caribbean", "Biodiversity-rich valley", "Famous veranda bird viewing"],
                "de": ["Gegründet 1967", "Erstes Naturzentrum in der Karibik", "Artenreiches Tal", "Berühmte Veranda zur Vogelbeobachtung"],
                "hu": ["1967-ben alapították", "A Karib-térség első természetvédelmi központja", "Biodiverzitásban gazdag völgy", "Híres veranda a madarak megfigyeléséhez"],
                "ro": ["Înființat în 1967", "Primul centru de natură din Caraibe", "Vale bogată în biodiversitate", "Faimoasă verandă pentru observarea păsărilor"]
            },
            "historyYear": 1967
        },
        {
            "id": "tt-pigeonpoint",
            "descriptionAdvanced": {
                "en": "Pigeon Point is Tobago's premier beach, iconic for its white sands, turquoise waters, and the much-photographed thatched-roof jetty. It is part of a protected heritage park and offers excellent conditions for water sports.",
                "de": "Pigeon Point ist Tobagos erstklassiger Strand, ikonisch für seinen weißen Sand, sein türkisfarbenes Wasser und den strohgedeckten Steg. Er ist Teil eines geschützten Erbparks.",
                "hu": "Pigeon Point Tobago elsőszámú strandja, amely fehér homokjáról, türkizkék vizéről és a sokat fotózott nádtetős mólójáról ismert. Egy védett örökségvédelmi park része.",
                "ro": "Pigeon Point este plaja de top din Tobago, iconică pentru nisipurile sale albe, apele turcoaz și debarcaderul cu acoperiș de paie mult fotografiat. Face parte dintr-un parc de patrimoniu protejat."
            },
            "facts": {
                "en": ["Tobago's most iconic beach", "Famous thatched-roof jetty", "White sand and blue water", "Popular for kite surfing"],
                "de": ["Tobagos ikonischster Strand", "Berühmter strohgedeckter Steg", "Weißer Sand und blaues Wasser", "Beliebt zum Kitesurfen"],
                "hu": ["Tobago legikonikusabb strandja", "Híres nádtetős móló", "Fehér homok és kék víz", "Népszerű a kiteszörfösök körében"],
                "ro": ["Cea mai iconică plajă din Tobago", "Faimos debarcader cu acoperiș de paie", "Nisip alb și apă albastră", "Popular pentru kite surfing"]
            },
            "factsAdvanced": {
                "en": ["Part of Heritage Park", "Gateway to Buccoo Reef", "Calm, shallow waters", "Hosts annual Jazz Festival"],
                "de": ["Teil des Heritage Park", "Tor zum Buccoo Reef", "Ruhiges, flaches Wasser", "Gastgeber des jährlichen Jazz Festivals"],
                "hu": ["Az Örökségvédelmi Park része", "A Buccoo-korallzátony kapuja", "Nyugodt, sekély víz", "Az éves Jazz Fesztivál házigazdája"],
                "ro": ["Parte a Heritage Park", "Poarta către reciful Buccoo", "Ape calme și puțin adânce", "Găzduiește festivalul anual de Jazz"]
            }
        },
        {
            "id": "tt-fortgeorge",
            "descriptionAdvanced": {
                "en": "Fort George, perched high above Port of Spain, offers the most breathtaking panoramic views of the capital city and the Gulf of Paria. Built in 1804, it remains a tranquil spot where visitors explore old cannons.",
                "de": "Fort George thront hoch über Port of Spain und bietet einen atemberaubenden Panoramablick auf die Hauptstadt und den Golf von Paria. Es wurde 1804 erbaut.",
                "hu": "A Port of Spain felett magasan elhelyezkedő Fort George a leglélegzetelállítóbb panorámás kilátást nyújtja a fővárosra és a Paria-öbölre. 1804-ben épült, ma is nyugodt hely, ahol a látogatók régi ágyúkat fedezhetnek fel.",
                "ro": "Fort George, cocoțat deasupra Port of Spain, oferă cele mai uluitoare vederi panoramice ale capitalei și Golfului Paria. Construit în 1804, rămâne un loc liniștit."
            },
            "facts": {
                "en": ["Panoramic views of city", "Built in 1804", "Defensive hilltop location", "Features original cannons"],
                "de": ["Panoramablick auf die Stadt", "Erbaut im Jahr 1804", "Defensive Hügellage", "Mit Original-Kanonen"],
                "hu": ["Panorámás kilátás a városra", "1804-ben épült", "Védelmi célú dombtetői elhelyezkedés", "Eredeti ágyúkkal rendelkezik"],
                "ro": ["Vederi panoramice ale orașului", "Construit în 1804", "Locație defensivă pe deal", "Prezintă tunuri originale"]
            },
            "factsAdvanced": {
                "en": ["Never saw military action", "Used as a signal station", "Designed by Governor Picton", "Strategic lookout point"],
                "de": ["Sah nie militärische Action", "Wurde als Signalstation genutzt", "Entworfen von Gouverneur Picton", "Strategischer Aussichtspunkt"],
                "hu": ["Soha nem vívtak benne harcot", "Jelzőállomásként használták", "Picton kormányzó tervezte", "Stratégiai kilátópont"],
                "ro": ["Nu a văzut niciodată acțiune militară", "Folosit ca stație de semnalizare", "Proiectat de guvernatorul Picton", "Punct de observație strategic"]
            },
            "historyYear": 1804
        },
        {
            "id": "tt-savannah",
            "descriptionAdvanced": {
                "en": "Queen's Park Savannah is the largest open space in Port of Spain, serving as the city's lungs and its main recreational area. It is famously home to the 'Magnificent Seven' colonial mansions.",
                "de": "Die Queen's Park Savannah ist die größte Freifläche in Port of Spain und dient als Lunge der Stadt und Hauptreholungsgebiet. Sie beherbergt die Villen der 'Magnificent Seven'.",
                "hu": "A Queen's Park Savannah Port of Spain legnagyobb nyitott tere, amely a város 'tüdejeként' és fő rekreációs területeként szolgál. Itt találhatók a híres 'Csodálatos Hét' (Magnificent Seven) gyarmati kúriák.",
                "ro": "Queen's Park Savannah este cel mai mare spațiu deschis din Port of Spain, servind drept plămânii orașului și principala zonă recreativă. Găzduiește conacele 'Șapte Magnifici'."
            },
            "facts": {
                "en": ["Largest park in Port of Spain", "Center for Carnival activities", "Home to 'Magnificent Seven'", "Known as the city's lungs"],
                "de": ["Größter Park in Port of Spain", "Zentrum der Karnevalsaktivitäten", "Heimat der 'Magnificent Seven'", "Bekannt als Lunge der Stadt"],
                "hu": ["Port of Spain legnagyobb parkja", "Karneváli tevékenységek központja", "A 'Csodálatos Hét' otthona", "A város 'tüdejeként' ismerik"],
                "ro": ["Cel mai mare parc din Port of Spain", "Centrul activităților de Carnaval", "Casa celor 'Șapte Magnifici'", "Cunoscut drept plămânii orașului"]
            },
            "factsAdvanced": {
                "en": ["Former sugar plantation land", "2.2 miles in circumference", "Features a hollow tree 'Gollow'", "Largest roundabout in world"],
                "de": ["Ehemaliges Zuckerplantagenland", "2,2 Meilen Umfang", "Mit einem hohlen Baum namens 'Gollow'", "Größter Kreisverkehr der Welt"],
                "hu": ["Egykori cukornádültetvény", "2,2 mérföld a kerülete", "Itt található a 'Gollow' nevű odvas fa", "A világ legnagyobb körforgalma"],
                "ro": ["Fost teren de plantație de zahăr", "Circumferință de 2,2 mile", "Prezintă un copac scorburos 'Gollow'", "Cel mai mare sens giratoriu din lume"]
            },
            "area": 1.1
        },
        {
            "id": "tt-templeinsea",
            "descriptionAdvanced": {
                "en": "The Temple in the Sea at Waterloo is a poignant monument to faith and perseverance, built single-handedly by Siewdass Sadhu over 25 years. The Hindu temple is a symbol of peace and spiritual devotion.",
                "de": "Der Tempel im Meer in Waterloo ist ein Denkmal des Glaubens und der Ausdauer, das Siewdass Sadhu in 25 Jahren im Alleingang errichtet hat. Er ist ein Symbol des Friedens.",
                "hu": "A waterloo-i Templom a tengerben (Temple in the Sea) a hit és a kitartás megható emlékműve, amelyet Siewdass Sadhu egyedül épített 25 éven keresztül. A hindu templom a béke és a spirituális odaadás szimbóluma.",
                "ro": "Templul din Mare de la Waterloo este un monument emoționant al credinței și perseverenței, construit singur de Siewdass Sadhu timp de 25 de ani. Este un simbol al păcii."
            },
            "facts": {
                "en": ["Built by Siewdass Sadhu", "Located in the sea", "Symbol of religious devotion", "Reached by a stone causeway"],
                "de": ["Erbaut von Siewdass Sadhu", "Im Meer gelegen", "Symbol religiöser Hingabe", "Über einen Steindamm erreichbar"],
                "hu": ["Siewdass Sadhu építette", "A tengerben található", "A vallási odaadás szimbóluma", "Kőgáton keresztül közelíthető meg"],
                "ro": ["Construit de Siewdass Sadhu", "Situat în mare", "Simbol al devotamentului religios", "Accesibil printr-un dig de piatră"]
            },
            "factsAdvanced": {
                "en": ["Reconstructed in 1995", "Built after original destroyed", "Features Hindu shrines", "Beautiful sunset location"],
                "de": ["1995 rekonstruiert", "Erbaut nach Zerstörung des Originals", "Mit Hindu-Schreinen", "Schöner Ort für den Sonnenuntergang"],
                "hu": ["1995-ben építették újjá", "Az eredeti pusztulása után épült", "Hindu szentélyek találhatók benne", "Gyönyörű naplementi helyszín"],
                "ro": ["Reconstruit în 1995", "Construit după ce originalul a fost distrus", "Are sanctuare hinduse", "Locație frumoasă pentru apus"]
            },
            "historyYear": 1947
        },
        {
            "id": "tt-argyle",
            "descriptionAdvanced": {
                "en": "Argyle Waterfall is Tobago's highest and most famous waterfall, cascading down three tiers into a deep, cool swimming pool. It is surrounded by lush tropical rainforest near Roxborough.",
                "de": "Der Argyle-Wasserfall ist Tobagos höchster und berühmtester Wasserfall, der über drei Stufen in ein kühles Schwimmbecken stürzt. Er ist von tropischem Regenwald umgeben.",
                "hu": "Az Argyle-vízesés Tobago legmagasabb és leghíresebb vízesése, amely három szinten keresztül zúdul le egy mély, hűvös medencébe. Roxborough közelében, buja trópusi esőerdőben található.",
                "ro": "Cascada Argyle este cea mai înaltă și mai faimoasă cascadă din Tobago, coborând în trei trepte într-o piscină răcoroasă. Este înconjurată de pădure tropicală."
            },
            "facts": {
                "en": ["Tobago's highest waterfall", "Cascades over three tiers", "Near Roxborough village", "Natural swimming pools"],
                "de": ["Höchster Wasserfall in Tobago", "Stürzt über drei Stufen", "In der Nähe des Dorfes Roxborough", "Natürliche Schwimmbecken"],
                "hu": ["Tobago legmagasabb vízesése", "Három szinten zúdul le", "Roxborough falu közelében", "Természetes medencék"],
                "ro": ["Cea mai înaltă cascadă din Tobago", "Cade în trei trepte", "Lângă satul Roxborough", "Piscine naturale"]
            },
            "factsAdvanced": {
                "en": ["Total drop of 54 meters", "Guided rainforest tours", "Historic sugar mill ruins", "Biodiversity rich environment"],
                "de": ["Gesamthöhe von 54 Metern", "Geführte Regenwaldtouren", "Historische Ruinen einer Zuckermühle", "Artenreiche Umgebung"],
                "hu": ["Teljes esése 54 méter", "Vezetett esőerdei túrák", "Történelmi cukornádmalom romok", "Biodiverzitásban gazdag környezet"],
                "ro": ["Cădere totală de 54 de metri", "Tururi ghidate în pădurea tropicală", "Ruine istorice ale unei mori de zahăr", "Mediu bogat în biodiversitate"]
            },
            "elevation": 54
        },
        {
            "id": "tt-buccooreef",
            "descriptionAdvanced": {
                "en": "Buccoo Reef is one of the most famous marine parks in the Caribbean, protecting a vast area of colorful coral and tropical fish. It was famously praised by Jacques Cousteau for its beauty and accessibility.",
                "de": "Buccoo Reef ist einer der berühmtesten Meeresparks in der Karibik und schützt ein weites Gebiet mit farbenfrohen Korallen. Es wurde von Jacques Cousteau gelobt.",
                "hu": "A Buccoo-korallzátony a Karib-térség egyik leghíresebb tengeri parkja, amely a színes korallok és trópusi halak hatalmas területét védi. Jacques Cousteau híresen dicsérte szépségéért és megközelíthetőségéért.",
                "ro": "Reciful Buccoo este unul dintre cele mai faimoase parcuri marine din Caraibe, protejând o zonă vastă de corali colorați. A fost lăudat de Jacques Cousteau."
            },
            "facts": {
                "en": ["Famous marine park", "Praised by Jacques Cousteau", "Vibrant coral ecosystems", "Glass-bottom boat destination"],
                "de": ["Berühmter Meerespark", "Gelobt von Jacques Cousteau", "Lebendige Korallenökosysteme", "Ziel für Glasbodenboote"],
                "hu": ["Híres tengeri park", "Jacques Cousteau dicsérte", "Vibráló korall ökoszisztémák", "Üvegfenekű hajók úticélja"],
                "ro": ["Parc marin faimos", "Lăudat de Jacques Cousteau", "Ecosisteme de corali vibrante", "Destinație pentru barca cu fund de sticlă"]
            },
            "factsAdvanced": {
                "en": ["Designated marine park in 1973", "Protects five reef zones", "Adjacent to Nylon Pool", "Vital for island tourism"],
                "de": ["1973 zum Meerespark erklärt", "Schützt fünf Riffzonen", "Angrenzend an den Nylon Pool", "Wichtig für den Inseltourismus"],
                "hu": ["1973-ban nyilvánították tengeri parkká", "Öt különböző zátonyzónát véd", "A Nylon Pool szomszédságában", "Létfontosságú a sziget turizmusa számára"],
                "ro": ["Parc marin desemnat în 1973", "Protejează cinci zone de recif", "Adiacent piscinei Nylon", "Vital pentru turismul insulei"]
            },
            "historyYear": 1973
        },
        {
            "id": "tt-fort-bennett",
            "descriptionAdvanced": {
                "en": "Fort Bennett is a small but historic fortification in Tobago, built by the Dutch in the mid-17th century to protect Black Rock Bay. It offers a great vantage point for watching the sunset.",
                "de": "Fort Bennett ist eine kleine, aber historische Festung auf Tobago, die Mitte des 17. Jahrhunderts von den Niederländern erbaut wurde. Es ist ein toller Ort für Sonnenuntergänge.",
                "hu": "Fort Bennett egy kicsi, de történelmi jelentőségű erődítmény Tobagón, amelyet a hollandok építettek a 17. század közepén a Black Rock-öböl védelmére. Kiváló helyszín a naplemente megtekintéséhez.",
                "ro": "Fortul Bennett este o fortificație mică, dar istorică din Tobago, construită de olandezi în mijlocul secolului al XVII-lea. Oferă un punct de observație excelent pentru apus."
            },
            "facts": {
                "en": ["Small historic fort", "Overlooks Black Rock Bay", "Built by the Dutch", "Popular sunset viewing spot"],
                "de": ["Kleines historisches Fort", "Blickt auf die Black Rock Bay", "Erbaut von den Niederländern", "Beliebter Aussichtspunkt für Sonnenuntergänge"],
                "hu": ["Kicsi történelmi erőd", "Kilátás a Black Rock-öbölre", "A hollandok építették", "Népszerű naplementenéző hely"],
                "ro": ["Mic fort istoric", "Vedere spre Golful Black Rock", "Construit de olandezi", "Loc popular pentru vizionarea apusului"]
            },
            "factsAdvanced": {
                "en": ["Named after Lieutenant Bennett", "Features coastal gardens", "Strategically placed for defense", "Now a peaceful local park"],
                "de": ["Benannt nach Leutnant Bennett", "Mit Küstengärten", "Strategisch zur Verteidigung platziert", "Heute ein friedlicher lokaler Park"],
                "hu": ["Bennett hadnagyról nevezték el", "Parti kertek jellemzik", "Védelmi célból stratégiailag elhelyezve", "Ma békés helyi park"],
                "ro": ["Numit după locotenentul Bennett", "Are grădini de coastă", "Plasat strategic pentru apărare", "Acum un parc local liniștit"]
            },
            "historyYear": 1680
        },
        {
            "id": "tt-hanuman",
            "descriptionAdvanced": {
                "en": "The Hanuman Statue in Carapichaima is the tallest of its kind outside of India, standing at an impressive 85 feet. This majestic orange statue is a major pilgrimage site for Hindus.",
                "de": "Die Hanuman-Statue in Carapichaima ist die höchste ihrer Art außerhalb Indiens und beeindruckende 85 Fuß hoch. Sie ist ein wichtiger Wallfahrtsort.",
                "hu": "A Carapichaimában található Hanuman-szobor a legnagyobb a maga nemében Indián kívül, lenyűgöző, 85 láb magasságával. Ez a fenséges narancssárga szobor a hinduk jelentős zarándokhelye.",
                "ro": "Statuia lui Hanuman din Carapichaima este cea mai înaltă de acest fel din afara Indiei, având o înălțime impresionantă de 85 de picioare. Este un loc major de pelerinaj."
            },
            "facts": {
                "en": ["Tallest Hanuman outside India", "85 feet tall statue", "Located in Carapichaima", "Major Hindu pilgrimage site"],
                "de": ["Höchster Hanuman außerhalb Indiens", "85 Fuß hohe Statue", "In Carapichaima gelegen", "Bedeutender Hindu-Wallfahrtsort"],
                "hu": ["Legmagasabb Hanuman Indián kívül", "85 láb magas szobor", "Carapichaimában található", "Jelentős hindu zarándokhely"],
                "ro": ["Cel mai înalt Hanuman din afara Indiei", "Statuie de 85 de picioare înălțime", "Situat în Carapichaima", "Loc major de pelerinaj hindus"]
            },
            "factsAdvanced": {
                "en": ["Part of Dattatreya Yoga Centre", "Completed in 2003", "Built by artisans from India", "Intricately painted and detailed"],
                "de": ["Teil des Dattatreya Yoga Centre", "Im Jahr 2003 fertiggestellt", "Erbaut von Kunsthandwerkern aus Indien", "Aufwendig bemalt und detailliert"],
                "hu": ["A Dattatreya Jóga Központ része", "2003-ban készült el", "Indiából érkezett kézművesek építették", "Bonyolult festés és részletgazdag kidolgozás"],
                "ro": ["Parte a Centrului Yoga Dattatreya", "Finalizat în 2003", "Construit de artizani din India", "Pictat și detaliat cu meticulozitate"]
            },
            "historyYear": 2003
        },
        {
            "id": "tt-nylon-pool",
            "descriptionAdvanced": {
                "en": "Nylon Pool is a natural, shallow swimming area in the middle of the sea, located behind Buccoo Reef in Tobago. Legend has it that swimming in its crystal-clear waters can take ten years off your age.",
                "de": "Der Nylon Pool ist ein natürliches, flaches Schwimmbecken mitten im Meer hinter dem Buccoo Reef. Die Legende besagt, dass er verjüngt.",
                "hu": "A Nylon Pool egy természetes, sekély úszóhely a tenger közepén, a tobagói Buccoo-korallzátony mögött. A legenda szerint a kristálytiszta vízben való úszás tíz évet fiatalít.",
                "ro": "Piscina Nylon este o zonă naturală de înot cu apă mică în mijlocul mării, situată în spatele recifului Buccoo. Legenda spune că întinerește."
            },
            "facts": {
                "en": ["Natural shallow sea pool", "Waist-deep clear water", "Located near Buccoo Reef", "Legend of youth-giving water"],
                "de": ["Natürlicher flacher Meerespool", "Hüfttiefes klares Wasser", "In der Nähe des Buccoo Reef gelegen", "Legende vom verjüngenden Wasser"],
                "hu": ["Természetes sekély tengeri medence", "Derékig érő tiszta víz", "A Buccoo-korallzátony közelében található", "A fiatalságot adó víz legendája"],
                "ro": ["Piscină naturală de mică adâncime în mare", "Apă cristalină până la brâu", "Situată lângă reciful Buccoo", "Legenda apei care dă tinerețe"]
            },
            "factsAdvanced": {
                "en": ["Named by Princess Margaret", "Sandy bottom in open ocean", "Only accessible by boat", "Unique geological phenomenon"],
                "de": ["Benannt von Prinzessin Margaret", "Sandiger Boden im offenen Ozean", "Nur mit dem Boot erreichbar", "Einzigartiges geologisches Phänomen"],
                "hu": ["Margit hercegnő nevezte el", "Homokos aljzat a nyílt óceánon", "Csak hajóval közelíthető meg", "Egyedülálló geológiai jelenség"],
                "ro": ["Numită de Prințesa Margaret", "Fund nisipos în largul oceanului", "Accesibilă doar cu barca", "Fenomen geologic unic"]
            }
        },
        {
            "id": "tt-yerette",
            "descriptionAdvanced": {
                "en": "Yerette is a private hummingbird sanctuary in the lush Maracas Valley, home to 13 of the 18 species of hummingbirds found in Trinidad. It offers an intimate experience for nature lovers.",
                "de": "Yerette ist ein privates Kolibri-Schutzgebiet im üppigen Maracas-Tal, in dem 13 der 18 in Trinidad vorkommenden Kolibri-Arten beheimatet sind.",
                "hu": "Yerette egy privát kolibrimenhely a buja Maracas-völgyben, ahol a Trinidadon megtalálható 18 kolibrifaj közül 13 él. Bensőséges élményt nyújt a természetkedvelőknek.",
                "ro": "Yerette este un sanctuar privat pentru colibri în luxurianta Vale Maracas, casa a 13 din cele 18 specii de colibri găsite în Trinidad."
            },
            "facts": {
                "en": ["Hummingbird sanctuary", "Located in Maracas Valley", "Home to 13 bird species", "Private conservation area"],
                "de": ["Kolibri-Schutzgebiet", "Im Maracas-Tal gelegen", "Heimat von 13 Vogelarten", "Privates Naturschutzgebiet"],
                "hu": ["Kolibrimenhely", "A Maracas-völgyben található", "13 madárfaj otthona", "Privát természetvédelmi terület"],
                "ro": ["Sanctuar de colibri", "Situat în Valea Maracas", "Casa a 13 specii de păsări", "Zonă de conservare privată"]
            },
            "factsAdvanced": {
                "en": ["Named 'Yerette' (Amerindian)", "Established by Theo Ferguson", "World-class photography site", "Wildlife education focus"],
                "de": ["Benannt 'Yerette' (Amerindianisch)", "Gegründet von Theo Ferguson", "Weltklasse-Fotografiestandort", "Fokus auf Wildtierbildung"],
                "hu": ["'Yerette'-nek nevezték (amerikai indián név)", "Theo Ferguson alapította", "Világszínvonalú fotós helyszín", "A vadvilági oktatásra összpontosít"],
                "ro": ["Numit 'Yerette' (amerindian)", "Înființat de Theo Ferguson", "Site de fotografie de talie mondială", "Focus pe educația faunei sălbatice"]
            }
        },
        {
            "id": "tt-mount-st-benedict",
            "descriptionAdvanced": {
                "en": "Mount Saint Benedict Abbey, known as the 'Abbey in the Mount', is the oldest Benedictine monastery in the Caribbean. It is a place of peace, reflection, and famous for its locally made yogurt.",
                "de": "Die Mount Saint Benedict Abbey, bekannt als die 'Abtei im Berg', ist das älteste Benediktinerkloster in der Karibik. Sie ist berühmt für ihren Joghurt.",
                "hu": "A Mount Saint Benedict apátság, más néven az 'Apátság a hegyen', a Karib-térség legrégebbi bencés kolostora, az Északi-hegységben. A béke helye, és híres a helyben készült joghurtjáról.",
                "ro": "Abatia Mount Saint Benedict, cunoscută ca 'Abatia din Munte', este cea mai veche mănăstire benedictină din Caraibe. Este celebră pentru iaurtul său local."
            },
            "facts": {
                "en": ["Oldest Caribbean monastery", "Perched on Northern Range", "Founded in 1912", "Famous for abbey yogurt"],
                "de": ["Ältestes karibisches Kloster", "In der Northern Range gelegen", "Gegründet im Jahr 1912", "Berühmt für Abtei-Joghurt"],
                "hu": ["A legrégebbi karibi monostor", "Az Északi-hegységben található", "1912-ben alapították", "Híres az apátsági joghurtról"],
                "ro": ["Cea mai veche mănăstire din Caraibe", "Cocoțată în Northern Range", "Fondată în 1912", "Faimoasă pentru iaurtul mănăstiresc"]
            },
            "factsAdvanced": {
                "en": ["Benedictine religious order", "Overlooks the Caroni Plains", "Guest house for retreats", "Center for spiritual life"],
                "de": ["Benediktiner-Orden", "Blickt auf die Caroni Plains", "Gästehaus für Exerzitien", "Zentrum des spirituellen Lebens"],
                "hu": ["Bencés rendi monostor", "Kilátás a Caroni-síkságra", "Vendégház lelkigyakorlatokhoz", "A spirituális élet központja"],
                "ro": ["Ordin religios benedictin", "Vedere spre Câmpiile Caroni", "Casă de oaspeți pentru reculegere", "Centru pentru viața spirituală"]
            },
            "historyYear": 1912
        }
    ]

def update_poi_file(file_path, expanded_data):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    expanded_map = {item['id']: item for item in expanded_data}

    def find_matching_brace(text, start_index):
        count = 0
        for i in range(start_index, len(text)):
            if text[i] == '{':
                count += 1
            elif text[i] == '}':
                count -= 1
                if count == 0:
                    return i
        return -1

    new_content = content
    matches = list(re.finditer(r'id:\s*"(tt-[^"]+)"', content))
    matches.reverse()
    
    for match in matches:
        poi_id = match.group(1)
        if poi_id in expanded_map:
            start_pos = content.rfind('{', 0, match.start())
            if start_pos == -1: continue
            end_pos = find_matching_brace(content, start_pos)
            if end_pos == -1: continue
            
            obj_content = content[start_pos:end_pos+1]
            extra = expanded_map[poi_id]
            new_fields = []
            new_fields.append(f"descriptionAdvanced: {json.dumps(extra['descriptionAdvanced'], ensure_ascii=False)}")
            new_fields.append(f"facts: {json.dumps(extra['facts'], ensure_ascii=False)}")
            new_fields.append(f"factsAdvanced: {json.dumps(extra['factsAdvanced'], ensure_ascii=False)}")
            for field in ['elevation', 'length', 'area', 'historyYear', 'historyPeriod']:
                if field in extra:
                    new_fields.append(f"{field}: {json.dumps(extra[field], ensure_ascii=False)}")
            
            new_obj_content = obj_content[:-1].strip()
            if new_obj_content.endswith(','):
                new_obj_content = new_obj_content[:-1].strip()
            new_obj_content += ", " + ", ".join(new_fields) + " }"
            
            new_content = new_content[:start_pos] + new_obj_content + new_content[end_pos+1:]
            
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    update_poi_file('lib/visualLab/data/trinidadPoi.ts', get_trinidad_data())
