import json
import os

faqs = {
    "bosnia": {
        "de": [
            {"q": "Was ist die Hauptstadt von Bosnien und Herzegowina?", "a": "Sarajevo ist die Hauptstadt und größte Stadt des Landes."},
            {"q": "Welche Währung wird in Bosnien verwendet?", "a": "Die Währung ist die Konvertible Mark (BAM)."},
            {"q": "Wie viele Entitäten gibt es in Bosnien und Herzegowina?", "a": "Das Land besteht aus zwei Entitäten: der Föderation Bosnien und Herzegowina und der Republika Srpska."},
            {"q": "Welche Sprachen werden offiziell gesprochen?", "a": "Die Amtssprachen sind Bosnisch, Kroatisch und Serbisch."},
            {"q": "Ist Bosnien ein Mitglied der EU?", "a": "Bosnien und Herzegowina ist ein Beitrittskandidat für die Europäische Union."}
        ],
        "hu": [
            {"q": "Mi Bosznia-Hercegovina fővárosa?", "a": "Szarajevó az ország fővárosa és legnagyobb városa."},
            {"q": "Milyen pénznemet használnak Boszniában?", "a": "A hivatalos pénznem a konvertibilis márka (BAM)."},
            {"q": "Hány entitásból áll Bosznia-Hercegovina?", "a": "Az ország két entitásból áll: a Bosznia-hercegovinai Föderációból és a Szerb Köztársaságból."},
            {"q": "Melyek a hivatalos nyelvek?", "a": "A hivatalos nyelvek a bosnyák, a horvát és a szerb."},
            {"q": "Tagja-e Bosznia az EU-nak?", "a": "Bosznia-Hercegovina az Európai Unió tagjelölt országa."}
        ],
        "ro": [
            {"q": "Care este capitala Bosniei și Herțegovinei?", "a": "Sarajevo este capitala și cel mai mare oraș al țării."},
            {"q": "Ce monedă se folosește în Bosnia?", "a": "Moneda oficială este marca convertibilă (BAM)."},
            {"q": "Din câte entități este formată Bosnia și Herțegovina?", "a": "Țara este formată din două entități: Federația Bosniei și Herțegovinei și Republica Srpska."},
            {"q": "Ce limbi oficiale se vorbesc?", "a": "Limbile oficiale sunt bosniaca, croata și sârba."},
            {"q": "Este Bosnia membră a UE?", "a": "Bosnia și Herțegovina este o țară candidată la Uniunea Europeană."}
        ],
        "en": [
            {"q": "What is the capital of Bosnia and Herzegovina?", "a": "Sarajevo is the capital and largest city of the country."},
            {"q": "What currency is used in Bosnia?", "a": "The currency is the Convertible Mark (BAM)."},
            {"q": "How many entities are there in Bosnia and Herzegovina?", "a": "The country consists of two entities: the Federation of Bosnia and Herzegovina and the Republika Srpska."},
            {"q": "What languages are officially spoken?", "a": "The official languages are Bosnian, Croatian, and Serbian."},
            {"q": "Is Bosnia a member of the EU?", "a": "Bosnia and Herzegovina is a candidate country for the European Union."}
        ]
    },
    "ba-sarajevo": {
        "de": [
            {"q": "Wofür ist Sarajevo historisch bekannt?", "a": "Es ist bekannt als Ort des Attentats auf Erzherzog Franz Ferdinand, das den Ersten Weltkrieg auslöste."},
            {"q": "Wann fanden die Olympischen Winterspiele in Sarajevo statt?", "a": "Sarajevo war 1984 Gastgeber der Olympischen Winterspiele."},
            {"q": "Wie wird Sarajevo oft genannt?", "a": "Es wird oft als das 'Jerusalem Europas' bezeichnet, aufgrund seiner religiösen Vielfalt."},
            {"q": "Welcher Fluss fließt durch Sarajevo?", "a": "Der Fluss Miljacka fließt durch das Stadtzentrum."},
            {"q": "Was ist das historische Zentrum von Sarajevo?", "a": "Baščaršija ist der alte Basar und das historische Zentrum der Stadt."}
        ],
        "hu": [
            {"q": "Miről nevezetes Szarajevó történelmileg?", "a": "Itt történt a Ferenc Ferdinánd főherceg elleni merénylet, amely kirobbantotta az első világháborút."},
            {"q": "Mikor rendeztek téli olimpiát Szarajevóban?", "a": "Szarajevó 1984-ben adott otthont a téli olimpiai játékoknak."},
            {"q": "Hogyan nevezik gyakran Szarajevót?", "a": "Gyakran emlegetik 'Európa Jeruzsálemeként' a vallási sokszínűsége miatt."},
            {"q": "Melyik folyó folyik át Szarajevón?", "a": "A Miljacka folyó szeli át a városközpontot."},
            {"q": "Mi Szarajevó történelmi központja?", "a": "A Baščaršija a régi bazár és a város történelmi központja."}
        ],
        "ro": [
            {"q": "Pentru ce este faimos Sarajevo din punct de vedere istoric?", "a": "Este cunoscut ca locul atentatului asupra arhiducelui Franz Ferdinand, care a declanșat Primul Război Mondial."},
            {"q": "Când au avut loc Jocurile Olimpice de iarnă la Sarajevo?", "a": "Sarajevo a găzduit Jocurile Olimpice de iarnă în 1984."},
            {"q": "Cum este supranumit adesea orașul Sarajevo?", "a": "Este adesea numit 'Ierusalimul Europei' datorită diversității sale religioase."},
            {"q": "Ce râu curge prin Sarajevo?", "a": "Râul Miljacka traversează centrul orașului."},
            {"q": "Care este centrul istoric al orașului Sarajevo?", "a": "Baščaršija este vechiul bazar și centrul istoric al orașului."}
        ],
        "en": [
            {"q": "What is Sarajevo historically famous for?", "a": "It is known as the site of the assassination of Archduke Franz Ferdinand, which triggered World War I."},
            {"q": "When were the Winter Olympics held in Sarajevo?", "a": "Sarajevo hosted the Winter Olympic Games in 1984."},
            {"q": "What is Sarajevo often called?", "a": "It is often called the 'Jerusalem of Europe' due to its religious diversity."},
            {"q": "Which river flows through Sarajevo?", "a": "The Miljacka River flows through the city center."},
            {"q": "What is the historical center of Sarajevo?", "a": "Baščaršija is the old bazaar and the historical center of the city."}
        ]
    },
    "ba-banjaluka": {
        "de": [
            {"q": "Welche Rolle spielt Banja Luka in der Republika Srpska?", "a": "Es ist das administrative Zentrum und die de facto Hauptstadt der Republika Srpska."},
            {"q": "Welcher Fluss fließt durch Banja Luka?", "a": "Die Vrbas fließt durch die Stadt."},
            {"q": "Was ist eine berühmte Festung in Banja Luka?", "a": "Die Festung Kastel ist eines der ältesten Baudenkmäler der Stadt."},
            {"q": "Wofür ist Banja Luka bekannt?", "a": "Sie ist bekannt für ihre vielen Alleen, Parks und ihr reges Nachtleben."},
            {"q": "Welche Kathedrale ist ein Wahrzeichen der Stadt?", "a": "Die Christ-Erlöser-Kathedrale im Stadtzentrum."}
        ],
        "hu": [
            {"q": "Milyen szerepet tölt be Banja Luka a Szerb Köztársaságban?", "a": "Ez a Szerb Köztársaság adminisztratív központja és de facto fővárosa."},
            {"q": "Melyik folyó folyik át Banja Lukán?", "a": "Az Orbász (Vrbas) folyó szeli át a várost."},
            {"q": "Melyik a leghíresebb erőd Banja Lukában?", "a": "A Kastel erőd a város egyik legrégebbi műemléke."},
            {"q": "Miről ismert Banja Luka?", "a": "Számos fasoráról, parkjáról és pezsgő éjszakai életéről ismert."},
            {"q": "Melyik katedrális a város jelképe?", "a": "A városközpontban található Krisztus Megváltó székesegyház."}
        ],
        "ro": [
            {"q": "Ce rol are Banja Luka în Republika Srpska?", "a": "Este centrul administrativ și capitala de facto a Republika Srpska."},
            {"q": "Ce râu curge prin Banja Luka?", "a": "Râul Vrbas traversează orașul."},
            {"q": "Care este o fortăreață faimoasă din Banja Luka?", "a": "Fortăreața Kastel este unul dintre cele mai vechi monumente ale orașului."},
            {"q": "Pentru ce este cunoscut Banja Luka?", "a": "Este cunoscut pentru numeroasele sale bulevarde, parcuri și viața de noapte vibrantă."},
            {"q": "Care catedrală este un simbol al orașului?", "a": "Catedrala Hristos Mântuitorul din centrul orașului."}
        ],
        "en": [
            {"q": "What role does Banja Luka play in Republika Srpska?", "a": "It is the administrative center and de facto capital of Republika Srpska."},
            {"q": "Which river flows through Banja Luka?", "a": "The Vrbas River flows through the city."},
            {"q": "What is a famous fortress in Banja Luka?", "a": "Kastel Fortress is one of the city's oldest monuments."},
            {"q": "What is Banja Luka known for?", "a": "It is known for its many avenues, parks, and vibrant nightlife."},
            {"q": "Which cathedral is a landmark of the city?", "a": "The Christ the Saviour Cathedral in the city center."}
        ]
    },
    "ba-mostar": {
        "de": [
            {"q": "Was ist das bekannteste Wahrzeichen von Mostar?", "a": "Die Alte Brücke (Stari Most), die zum UNESCO-Weltkulturerbe gehört."},
            {"q": "Welcher Fluss teilt die Stadt Mostar?", "a": "Die Neretva fließt durch Mostar."},
            {"q": "Wann wurde die Alte Brücke ursprünglich erbaut?", "a": "Sie wurde im 16. Jahrhundert während der osmanischen Zeit erbaut."},
            {"q": "Was passierte mit der Alten Brücke im Jahr 1993?", "a": "Sie wurde während des Bosnienkrieges zerstört und später originalgetreu wieder aufgebaut."},
            {"q": "Welche sportliche Tradition ist mit der Brücke verbunden?", "a": "Das traditionelle Brückenspringen in die Neretva."}
        ],
        "hu": [
            {"q": "Mi Mostar legismertebb jelképe?", "a": "Az Öreg híd (Stari Most), amely az UNESCO világörökség része."},
            {"q": "Melyik folyó szeli át Mostart?", "a": "A Neretva folyó folyik keresztül a városon."},
            {"q": "Mikor épült eredetileg az Öreg híd?", "a": "A 16. században épült, az oszmán uralom idején."},
            {"q": "Mi történt az Öreg híddal 1993-ban?", "a": "A boszniai háború alatt elpusztult, de később hűen újjáépítették."},
            {"q": "Milyen sportolási hagyomány kötődik a hídhoz?", "a": "A hagyományos híd ugrás a Neretva folyóba."}
        ],
        "ro": [
            {"q": "Care este cel mai cunoscut simbol al Mostarului?", "a": "Podul Vechi (Stari Most), care face parte din patrimoniul mondial UNESCO."},
            {"q": "Ce râu traversează orașul Mostar?", "a": "Neretva curge prin Mostar."},
            {"q": "Când a fost construit inițial Podul Vechi?", "a": "A fost construit în secolul al XVI-lea, în perioada otomană."},
            {"q": "Ce s-a întâmplat cu Podul Vechi în 1993?", "a": "A fost distrus în timpul războiului din Bosnia și reconstruit ulterior identic."},
            {"q": "Ce tradiție sportivă este legată de pod?", "a": "Tradiția săriturilor de pe pod în râul Neretva."}
        ],
        "en": [
            {"q": "What is Mostar's most famous landmark?", "a": "The Old Bridge (Stari Most), which is a UNESCO World Heritage site."},
            {"q": "Which river divides the city of Mostar?", "a": "The Neretva River flows through Mostar."},
            {"q": "When was the Old Bridge originally built?", "a": "It was built in the 16th century during the Ottoman period."},
            {"q": "What happened to the Old Bridge in 1993?", "a": "It was destroyed during the Bosnian War and later faithfully reconstructed."},
            {"q": "What sporting tradition is associated with the bridge?", "a": "The traditional bridge diving into the Neretva River."}
        ]
    },
    "ba-tuzla": {
        "de": [
            {"q": "Wofür ist Tuzla bekannt?", "a": "Tuzla ist bekannt für seine Salzvorkommen und die künstlichen Salzseen im Stadtzentrum."},
            {"q": "Was sind die Pannonischen Seen?", "a": "Es sind künstliche Salzseen in Tuzla, die als Freizeit- und Kurort dienen."},
            {"q": "Welche industrielle Bedeutung hat Tuzla?", "a": "Tuzla ist ein wichtiges Zentrum der chemischen Industrie und Energiewirtschaft."},
            {"q": "Was bedeutet der Name 'Tuzla'?", "a": "Der Name leitet sich vom türkischen Wort 'tuz' für Salz ab."},
            {"q": "Gibt es in Tuzla eine Universität?", "a": "Ja, die Universität Tuzla ist eine bedeutende Bildungseinrichtung im Land."}
        ],
        "hu": [
            {"q": "Miről ismert Tuzla?", "a": "Tuzla a sókészleteiről és a városközpontban található mesterséges sóstavairól ismert."},
            {"q": "Mik azok a Pannóniai-tavak?", "a": "Mesterséges sóstavak Tuzlában, amelyek szabadidős és gyógyhelyként szolgálnak."},
            {"q": "Milyen ipari jelentősége van Tuzlának?", "a": "Tuzla a vegyipar és az energiaipar fontos központja."},
            {"q": "Mit jelent a 'Tuzla' név?", "a": "A név a török 'tuz' (só) szóból származik."},
            {"q": "Van-e egyetem Tuzlában?", "a": "Igen, a Tuzlai Egyetem az ország egyik jelentős oktatási intézménye."}
        ],
        "ro": [
            {"q": "Pentru ce este cunoscut Tuzla?", "a": "Tuzla este cunoscut pentru zăcămintele sale de sare și lacurile sărate artificiale din centrul orașului."},
            {"q": "Ce sunt lacurile pannonice?", "a": "Sunt lacuri sărate artificiale din Tuzla, care servesc ca loc de recreere și tratament."},
            {"q": "Ce importanță industrială are Tuzla?", "a": "Tuzla este un centru important al industriei chimice și al sectorului energetic."},
            {"q": "Ce înseamnă numele 'Tuzla'?", "a": "Numele provine din cuvântul turcesc 'tuz', care înseamnă sare."},
            {"q": "Există o universitate în Tuzla?", "a": "Da, Universitatea din Tuzla este o instituție de învățământ importantă din țară."}
        ],
        "en": [
            {"q": "What is Tuzla known for?", "a": "Tuzla is known for its salt deposits and the artificial salt lakes in the city center."},
            {"q": "What are the Pannonian Lakes?", "a": "They are artificial salt lakes in Tuzla that serve as a recreation and spa resort."},
            {"q": "What is the industrial importance of Tuzla?", "a": "Tuzla is an important center for the chemical industry and energy sector."},
            {"q": "What does the name 'Tuzla' mean?", "a": "The name is derived from the Turkish word 'tuz' for salt."},
            {"q": "Is there a university in Tuzla?", "a": "Yes, the University of Tuzla is a major educational institution in the country."}
        ]
    },
    "ba-zenica": {
        "de": [
            {"q": "Welche Industrie dominiert Zenica?", "a": "Zenica ist das Zentrum der bosnischen Stahlindustrie."},
            {"q": "An welchem Fluss liegt Zenica?", "a": "Zenica liegt am Fluss Bosna."},
            {"q": "Was ist ein bekanntes kulturelles Ereignis in Zenica?", "a": "Das Festival 'Zeničko proljeće' (Zenica-Frühling)."},
            {"q": "Welche Festung befindet sich in der Nähe von Zenica?", "a": "Die mittelalterliche Festung Vranduk liegt in der Nähe."},
            {"q": "Welches Stadion ist ein Wahrzeichen von Zenica?", "a": "Das Bilino Polje Stadion, in dem oft die Nationalmannschaft spielt."}
        ],
        "hu": [
            {"q": "Melyik iparág dominál Zenicában?", "a": "Zenica a bosnyák acélipar központja."},
            {"q": "Melyik folyó partján fekszik Zenica?", "a": "Zenica a Boszna folyó partján fekszik."},
            {"q": "Milyen ismert kulturális esemény van Zenicában?", "a": "A 'Zeničko proljeće' (Zenicai Tavasz) fesztivál."},
            {"q": "Melyik erőd található Zenica közelében?", "a": "A közelben található a középkori Vranduk vára."},
            {"q": "Melyik stadion Zenica jelképe?", "a": "A Bilino Polje stadion, ahol gyakran játszik a válogatott."}
        ],
        "ro": [
            {"q": "Ce industrie domină în Zenica?", "a": "Zenica este centrul industriei siderurgice din Bosnia."},
            {"q": "Pe ce râu este situat Zenica?", "a": "Zenica este situat pe râul Bosna."},
            {"q": "Care este un eveniment cultural cunoscut în Zenica?", "a": "Festivalul 'Zeničko proljeće' (Primăvara din Zenica)."},
            {"q": "Ce fortăreață se află în apropiere de Zenica?", "a": "Fortăreața medievală Vranduk se află în apropiere."},
            {"q": "Ce stadion este un simbol al orașului Zenica?", "a": "Stadionul Bilino Polje, unde joacă adesea echipa națională."}
        ],
        "en": [
            {"q": "What industry dominates Zenica?", "a": "Zenica is the center of the Bosnian steel industry."},
            {"q": "On which river is Zenica located?", "a": "Zenica is located on the Bosna River."},
            {"q": "What is a well-known cultural event in Zenica?", "a": "The 'Zeničko proljeće' (Zenica Spring) festival."},
            {"q": "Which fortress is located near Zenica?", "a": "The medieval Vranduk Fortress is located nearby."},
            {"q": "Which stadium is a landmark of Zenica?", "a": "The Bilino Polje Stadium, where the national team often plays."}
        ]
    },
    "ba-bihac": {
        "de": [
            {"q": "An welchem Fluss liegt Bihać?", "a": "Bihać liegt am wunderschönen Fluss Una."},
            {"q": "Wofür ist die Region um Bihać bekannt?", "a": "Sie ist bekannt für Naturtourismus, insbesondere Rafting auf der Una."},
            {"q": "Was ist die Kapitänsburg (Kapetanova kula)?", "a": "Ein historisches Bauwerk in Bihać, das heute ein Museum beherbergt."},
            {"q": "Welcher Nationalpark liegt in der Nähe von Bihać?", "a": "Der Nationalpark Una liegt ganz in der Nähe."},
            {"q": "Welche religiöse Stätte ist architektonisch interessant?", "a": "Die Fethija-Moschee, die ursprünglich eine gotische Kirche war."}
        ],
        "hu": [
            {"q": "Melyik folyó partján fekszik Bihać?", "a": "Bihać a gyönyörű Una folyó partján fekszik."},
            {"q": "Miről ismert Bihać környéke?", "a": "A természeti turizmusról, különösen az Una folyón való raftingról."},
            {"q": "Mi az a Kapitány-torony (Kapetanova kula)?", "a": "Egy történelmi épület Bihaćban, amely ma múzeumnak ad otthont."},
            {"q": "Melyik nemzeti park van Bihać közelében?", "a": "Az Una Nemzeti Park a közvetlen közelben található."},
            {"q": "Melyik vallási helyszín érdekes építészetileg?", "a": "A Fethija-mecset, amely eredetileg gótikus templom volt."}
        ],
        "ro": [
            {"q": "Pe ce râu se află Bihać?", "a": "Bihać este situat pe frumosul râu Una."},
            {"q": "Pentru ce este cunoscută regiunea din jurul Bihać?", "a": "Este cunoscută pentru turismul de natură, în special rafting pe râul Una."},
            {"q": "Ce este Turnul Căpitanului (Kapetanova kula)?", "a": "O clădire istorică din Bihać care găzduiește astăzi un muzeu."},
            {"q": "Ce parc național se află lângă Bihać?", "a": "Parcul Național Una este situat foarte aproape."},
            {"q": "Ce lăcaș de cult este interesant din punct de vedere arhitectural?", "a": "Moscheea Fethija, care a fost inițial o biserică gotică."}
        ],
        "en": [
            {"q": "On which river is Bihać located?", "a": "Bihać is located on the beautiful Una River."},
            {"q": "What is the region around Bihać known for?", "a": "It is known for nature tourism, especially rafting on the Una."},
            {"q": "What is the Captain's Tower (Kapetanova kula)?", "a": "A historical building in Bihać that now houses a museum."},
            {"q": "Which national park is near Bihać?", "a": "The Una National Park is located very close by."},
            {"q": "Which religious site is architecturally interesting?", "a": "The Fethija Mosque, which was originally a Gothic church."}
        ]
    },
    "ba-starimost": {
        "de": [
            {"q": "Wer baute die Stari Most ursprünglich?", "a": "Sie wurde 1566 vom osmanischen Architekten Mimar Hayruddin erbaut."},
            {"q": "Warum ist die Brücke so besonders?", "a": "Sie ist ein Meisterwerk der osmanischen Architektur und ein Symbol für die Verbindung der Kulturen."},
            {"q": "Wie hoch ist die Brücke?", "a": "Der Bogen ist an seinem höchsten Punkt etwa 24 Meter über dem Fluss."},
            {"q": "Was ist der Red Bull Cliff Diving Weltcup?", "a": "Ein internationaler Wettbewerb, der regelmäßig an der Stari Most stattfindet."},
            {"q": "Woraus wurde die Brücke gebaut?", "a": "Aus lokalem Tenelija-Stein."}
        ],
        "hu": [
            {"q": "Ki építette eredetileg a Stari Most-ot?", "a": "1566-ban építette Mimar Hajruddin oszmán építész."},
            {"q": "Miért olyan különleges a híd?", "a": "Az oszmán építészet remekműve és a kultúrák közötti kapcsolat szimbóluma."},
            {"q": "Milyen magas a híd?", "a": "Az ív legmagasabb pontja körülbelül 24 méterrel van a folyó felett."},
            {"q": "Mi az a Red Bull Cliff Diving Világkupa?", "a": "Egy nemzetközi verseny, amelyet rendszeresen megrendeznek a Stari Most-nál."},
            {"q": "Miből épült a híd?", "a": "Helyi Tenelija kőből."}
        ],
        "ro": [
            {"q": "Cine a construit inițial Stari Most?", "a": "A fost construit în 1566 de arhitectul otoman Mimar Hayruddin."},
            {"q": "De ce este podul atât de special?", "a": "Este o capodoperă a arhitecturii otomane și un simbol al conexiunii dintre culturi."},
            {"q": "Cât de înalt este podul?", "a": "Arcul se află la aproximativ 24 de metri deasupra râului în cel mai înalt punct."},
            {"q": "Ce este Cupa Mondială Red Bull Cliff Diving?", "a": "O competiție internațională care are loc regulat la Stari Most."},
            {"q": "Din ce a fost construit podul?", "a": "Din piatră locală Tenelija."}
        ],
        "en": [
            {"q": "Who originally built the Stari Most?", "a": "It was built in 1566 by the Ottoman architect Mimar Hayruddin."},
            {"q": "Why is the bridge so special?", "a": "It is a masterpiece of Ottoman architecture and a symbol of the connection between cultures."},
            {"q": "How high is the bridge?", "a": "The arch is about 24 meters above the river at its highest point."},
            {"q": "What is the Red Bull Cliff Diving World Series?", "a": "An international competition regularly held at the Stari Most."},
            {"q": "What was the bridge built from?", "a": "From local Tenelija stone."}
        ]
    },
    "ba-visegrad": {
        "de": [
            {"q": "Wie heißt die berühmte Brücke in Višegrad?", "a": "Die Mehmed-Paša-Sokolović-Brücke."},
            {"q": "Wer hat die Brücke entworfen?", "a": "Der berühmte osmanische Architekt Mimar Sinan."},
            {"q": "Welcher Roman machte die Brücke weltberühmt?", "a": "Der Roman 'Die Brücke über die Drina' von Literaturnobelpreisträger Ivo Andrić."},
            {"q": "Welcher Fluss fließt unter der Brücke?", "a": "Die Drina fließt durch Višegrad."},
            {"q": "Ist die Brücke Teil des UNESCO-Weltkulturerbes?", "a": "Ja, sie wurde 2007 in die Liste aufgenommen."}
        ],
        "hu": [
            {"q": "Hogy hívják Višegrad híres hídját?", "a": "Szokollu Mehmed pasa hídja."},
            {"q": "Ki tervezte a hidat?", "a": "A híres oszmán építész, Mimar Sinan."},
            {"q": "Melyik regény tette világhírűvé a hidat?", "a": "Ivo Andrić Nobel-díjas író 'Híd a Drinán' című regénye."},
            {"q": "Melyik folyó folyik a híd alatt?", "a": "A Drina folyó folyik keresztül Višegradon."},
            {"q": "A híd része az UNESCO világörökségnek?", "a": "Igen, 2007-ben került fel a listára."}
        ],
        "ro": [
            {"q": "Cum se numește faimosul pod din Višegrad?", "a": "Podul Mehmed Paša Sokolović."},
            {"q": "Cine a proiectat podul?", "a": "Faimosul arhitect otoman Mimar Sinan."},
            {"q": "Ce roman a făcut podul faimos în întreaga lume?", "a": "Romanul 'E un pod pe Drina' de laureatul premiului Nobel Ivo Andrić."},
            {"q": "Ce râu curge pe sub pod?", "a": "Râul Drina trece prin Višegrad."},
            {"q": "Face podul parte din patrimoniul mondial UNESCO?", "a": "Da, a fost inclus pe listă în 2007."}
        ],
        "en": [
            {"q": "What is the name of the famous bridge in Višegrad?", "a": "The Mehmed Paša Sokolović Bridge."},
            {"q": "Who designed the bridge?", "a": "The famous Ottoman architect Mimar Sinan."},
            {"q": "Which novel made the bridge world-famous?", "a": "The novel 'The Bridge on the Drina' by Nobel Prize winner Ivo Andrić."},
            {"q": "Which river flows under the bridge?", "a": "The Drina River flows through Višegrad."},
            {"q": "Is the bridge a UNESCO World Heritage site?", "a": "Yes, it was added to the list in 2007."}
        ]
    },
    "ba-jajce": {
        "de": [
            {"q": "Was ist das markanteste Merkmal von Jajce?", "a": "Der 22 Meter hohe Wasserfall im Stadtzentrum, wo die Pliva in die Vrbas mündet."},
            {"q": "Welche historische Bedeutung hat Jajce?", "a": "Es war die Hauptstadt des mittelalterlichen bosnischen Königreichs."},
            {"q": "Gibt es eine Festung in Jajce?", "a": "Ja, die Festung von Jajce thront über der Stadt."},
            {"q": "Was sind die Katakomben von Jajce?", "a": "Eine unterirdische Kirche und Gruft, die in den Fels gehauen wurde."},
            {"q": "Welches politische Ereignis fand 1943 in Jajce statt?", "a": "Die zweite Sitzung des AVNOJ, bei der das moderne Jugoslawien gegründet wurde."}
        ],
        "hu": [
            {"q": "Mi Jajca legfeltűnőbb jellemzője?", "a": "A 22 méter magas vízesés a városközpontban, ahol a Pliva az Orbászba (Vrbas) torkollik."},
            {"q": "Milyen történelmi jelentősége van Jajcának?", "a": "A középkori Bosnyák Királyság fővárosa volt."},
            {"q": "Van-erőd Jajcában?", "a": "Igen, Jajca vára a város fölé magasodik."},
            {"q": "Mik azok a jajcai katakombák?", "a": "Egy sziklába vájt földalatti templom és sírbolt."},
            {"q": "Milyen politikai esemény történt Jajcában 1943-ban?", "a": "Az AVNOJ második ülése, ahol megalapították a modern Jugoszláviát."}
        ],
        "ro": [
            {"q": "Care este cea mai distinctivă trăsătură a orașului Jajce?", "a": "Cascada de 22 de metri din centrul orașului, unde râul Pliva se varsă în Vrbas."},
            {"q": "Ce importanță istorică are Jajce?", "a": "A fost capitala regatului bosniac medieval."},
            {"q": "Există o fortăreață în Jajce?", "a": "Da, cetatea Jajce tronează deasupra orașului."},
            {"q": "Ce sunt catacombele din Jajce?", "a": "O biserică și o criptă subterană săpate în stâncă."},
            {"q": "Ce eveniment politic a avut loc la Jajce în 1943?", "a": "A doua sesiune a AVNOJ, unde a fost fondată Iugoslavia modernă."}
        ],
        "en": [
            {"q": "What is the most striking feature of Jajce?", "a": "The 22-meter high waterfall in the city center, where the Pliva meets the Vrbas river."},
            {"q": "What historical significance does Jajce have?", "a": "It was the capital of the medieval Bosnian Kingdom."},
            {"q": "Is there a fortress in Jajce?", "a": "Yes, the Jajce Fortress towers over the town."},
            {"q": "What are the catacombs of Jajce?", "a": "An underground church and crypt carved into the rock."},
            {"q": "What political event took place in Jajce in 1943?", "a": "The second session of AVNOJ, where modern Yugoslavia was founded."}
        ]
    }
}

# Next batch will be generated in the next turn
with open("faqs_batch1.json", "w", encoding="utf-8") as f:
    json.dump(faqs, f, ensure_ascii=False, indent=2)
