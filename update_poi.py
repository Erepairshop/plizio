
import re

file_path = 'lib/visualLab/data/poiExtraCostaricaCitiesV2.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

updates = {
    'tejar-de-el-guarco-cities-v2': {
        'descriptionAdvanced.ro': 'Tejar este capitala dinamică a cantonului El Guarco din provincia Cartago. Orașul este situat strategic la intrarea de vest a orașului Cartago și s-a dezvoltat într-un centru important pentru industrie și comerț. În același timp, regiunea rămâne profund înrădăcinată în agricultură, în special în cultivarea legumelor care aprovizionează Valea Centrală. Tejar este cunoscut pentru infrastructura sa modernă, care a atras numeroase companii și fabrici. Vizitatorii găsesc aici un oraș în plină ascensiune, care își păstrează totuși nucleul tradițional. Proximitatea față de capitala provinciei și legătura bună cu autostrada Panamericană fac din Tejar o locație atractivă pentru activități economice și locuințe moderne.',
        'factsAdvanced.ro': [
            "Situat la o altitudine de 1.350 de metri deasupra nivelului mării.",
            "Este capitala cantonului El Guarco, fondat în anul 1939.",
            "Găzduiește mai multe parcuri industriale majore din regiune.",
            "Temperatura medie este de aproximativ 19 grade Celsius, fiind mai răcoroasă.",
            "Se află direct pe traseul autostrăzii Panamericane (Interamericana Sur)."
        ]
    },
    'san-pablo-de-heredia-cities-v2': {
        'descriptionAdvanced.ro': 'San Pablo de Heredia este un oraș fermecător care găsește un echilibru perfect între moștenirea istorică și dezvoltarea modernă. Fiind capitala cantonului cu același nume, San Pablo se caracterizează prin cartierele sale rezidențiale bine întreținute și atmosfera sa liniștită. O trăsătură specială a orașului este biserica sa impresionantă în stil colonial, care domină piața centrală. În ultimele decenii, San Pablo s-a transformat dintr-o zonă agricolă într-un loc de locuit popular pentru clasa de mijloc, fără a-și pierde identitatea. Orașul este cunoscut pentru siguranța sa, parcurile verzi și instituțiile de învățământ excelente. San Pablo oferă o calitate ridicată a vieții în inima provinciei Heredia.',
        'factsAdvanced.ro': [
            "Cantonul San Pablo a fost fondat oficial în anul 1961.",
            "Se află la o altitudine de 1.200 de metri deasupra nivelului mării.",
            "Suprafața cantonului este de numai aproximativ 7,5 kilometri pătrați.",
            "Clima este blândă, cu o temperatură medie de 21 de grade Celsius.",
            "În trecut, localitatea era cunoscută sub numele de „Pueblo Nuevo”."
        ]
    },
    'calle-blancos-de-goicoechea-cities-v2': {
        'descriptionAdvanced.ro': 'Calle Blancos este un district industrial și comercial important situat la nord de San José, jucând un rol cheie în economia regiunii capitalei. Orașul găzduiește numeroase fabrici, centre logistice și sedii ale unor companii naționale și internaționale. Calle Blancos este cunoscut în special pentru rafinăria națională de petrol RECOPE și pentru sediile unor importante posturi de televiziune. În ciuda accentului industrial, există zone rezidențiale stabilite care beneficiază de conexiuni excelente la rețeaua de transport. Calle Blancos este un loc al muncii și al progresului, unde mii de oameni își desfășoară activitatea zilnică. Modernizarea constantă a infrastructurii face din această regiune un motor economic indispensabil în Valea Centrală.',
        'factsAdvanced.ro': [
            "Se află la o altitudine de aproximativ 1.180 de metri deasupra nivelului mării.",
            "Găzduiește sediul principal al Asigurărilor Sociale din Costa Rica (CCSS).",
            "Este cea mai importantă zonă industrială din nordul zonei metropolitane San José.",
            "Are o conexiune directă cu drumul de centură al capitalei (Circunvalación).",
            "Temperatura medie anuală în această zonă este de 22 de grade Celsius."
        ]
    },
    'canas-de-guanacaste-cities-v2': {
        'descriptionAdvanced.ro': 'Cañas este un oraș scăldat de soare situat în inima provinciei Guanacaste, pe marginea aglomeratei autostrăzi Panamericane. Regiunea este cunoscută pentru câmpiile sale vaste, ideale pentru creșterea vitelor și cultivarea orezului. Clima caldă și uscată modelează stilul de viață al locuitorilor și face din Cañas un loc de popas important pentru călătorii care merg spre plajele Pacificului. În împrejurimile orașului se află proiecte energetice semnificative, în special parcuri eoliene și centrale geotermale, care furnizează energie curată pentru Costa Rica. În plus, orașul este o poartă de acces către Parcul Național Palo Verde, un paradis pentru observatorii de păsări. Cañas îmbină cultura tradițională a sabaneros cu tehnologia energetică modernă și agricultura.',
        'factsAdvanced.ro': [
            "Situat la o altitudine de numai 84 de metri deasupra nivelului mării.",
            "Temperatura medie este de aproximativ 28 de grade Celsius pe tot parcursul anului.",
            "Numele orașului provine de la trestiile (cañas) care cresc pe malurile râurilor.",
            "Este nodul principal pentru sistemele de irigații din regiunea Guanacaste.",
            "Parcul eolian Tilarán din apropiere este unul dintre cele mai mari din regiune."
        ]
    },
    'guapiles-de-pococi-cities-v2': {
        'descriptionAdvanced.ro': 'Guápiles este poarta de acces vibrantă către regiunea Caraibilor din Costa Rica și cel mai important centru comercial al cantonului Pococí. Situat în câmpiile fertile, orașul este înconjurat de plantații nesfârșite de banane și ananas, care constituie coloana vertebrală economică a regiunii. Guápiles servește ca o bază strategică pentru călătorii care doresc să viziteze Parcul Național Tortuguero. Climatul este tropical umed, ceea ce favoriază o vegetație luxuriantă de un verde intens. Orașul oferă o infrastructură modernă cu numeroase magazine, bănci și hoteluri. Guápiles este un loc al contrastelor, unde munca grea pe plantații se întâlnește cu o dezvoltare urbană dinamică.',
        'factsAdvanced.ro': [
            "Se află la o altitudine de 260 de metri deasupra nivelului mării.",
            "Este capitala cantonului Pococí, al doilea cel mai populat din provincia Limón.",
            "Clima este marcată de precipitații ridicate, de până la 4.000 mm pe an.",
            "Distanța până la capitala San José este de aproximativ 60 de kilometri.",
            "Găzduiește mai multe spitale regionale și instituții de învățământ importante."
        ]
    },
    'siquirres-de-limon-cities-v2': {
        'descriptionAdvanced.ro': 'Siquirres este un oraș aglomerat din provincia Limón, care servește drept nod central pentru transportul feroviar și rutier între zonele înalte și coastă. Istoria orașului este strâns legată de construcția căii ferate către Atlantic și de ascensiunea industriei bananelor. Astăzi, Siquirres este un amestec de culturi, unde influențele afro-caraibiene se întâlnesc cu tradițiile indigene și spaniole. Împrejurimile sunt caracterizate de râuri puternice, precum Pacuare, care oferă condiții de talie mondială pentru rafting. Natura tropicală luxuriantă și importanța sa ca centru logistic fac din Siquirres un loc dinamic. Aici puteți experimenta atmosfera autentică a Caraibilor din Costa Rica, cu bucuria sa de viață și vigoarea economică.',
        'factsAdvanced.ro': [
            "Numele Siquirres provine dintr-o limbă indigenă și înseamnă „Râul Roșu”.",
            "Este un nod feroviar istoric crucial pentru exportul de banane.",
            "Populația cantonului Siquirres este de peste 60.000 de locuitori.",
            "Temperatura medie este de aproximativ 26 de grade Celsius, specific tropicală.",
            "Râul Pacuare se află la doar câțiva kilometri de centrul orașului."
        ]
    },
    'san-diego-de-la-union-cities-v2': {
        'descriptionAdvanced.ro': 'San Diego este un district prosper din cantonul La Unión, situat la marginea de est a zonei metropolitane San José. Orașul s-a transformat în ultimii ani într-una dintre zonele rezidențiale cu cea mai rapidă creștere, oferind o combinație ideală între climatul montan mai răcoros și proximitatea față de capitală. San Diego găzduiește numeroase complexe rezidențiale moderne și cartiere exclusiviste, fiind deosebit de popular printre familii. Infrastructura este excelentă, cu acces rapid la centre comerciale mari și școli de renume. În ciuda modernizării, la periferie se mai găsesc resturi ale fostelor plantații de cafea care au conferit zonei caracterul său original. San Diego reprezintă stilul de viață modern și sofisticat din Valea Centrală de est.',
        'factsAdvanced.ro': [
            "Se află la o altitudine de aproximativ 1.270 de metri deasupra nivelului mării.",
            "Districtul San Diego se întinde pe o suprafață de circa 8,8 kilometri pătrați.",
            "Se învecinează direct cu provincia San José, în districtul Curridabat.",
            "Clima este temperată, cu temperaturi variind între 17 și 25 de grade Celsius.",
            "Este o locație importantă pentru noile dezvoltări comerciale de-a lungul autostrăzii Florencio del Castillo."
        ]
    },
    'esparza-de-puntarenas-cities-v2': {
        'descriptionAdvanced.ro': 'Esparza este unul dintre cele mai vechi și mai încărcate de istorie orașe din Costa Rica, situat în provincia Puntarenas. Fondat în perioada colonială timpurie, orașul păstrează o parte din moștenirea sa istorică sub forma arhitecturii coloniale și a unei biserici străvechi. Astăzi, Esparza servește drept centru de servicii important pentru zonele agricole înconjurătoare și ca loc de popas pentru călătorii în drum spre Pacific. Atmosfera este liniștită și tradițională, marcată de un parc central spațios care constituie centrul vieții sociale. Orașul este situat într-o zonă de tranziție între nordul uscat și sudul mai umed al coastei Pacificului. Esparza oferă o perspectivă fascinantă asupra trecutului colonial al țării și a vieții relaxate din provinciile de coastă.',
        'factsAdvanced.ro': [
            "Fondat în anul 1574 de către cuceritorul spaniol Diego de Artieda Chirino.",
            "Este al doilea cel mai vechi oraș din Costa Rica, după Cartago.",
            "Temperatura medie este de aproximativ 27 de grade Celsius.",
            "Nod de transport important la intersecția Rutelor 1 (Panamericana) și 27.",
            "Cunoscut pentru producția de carne de vită de înaltă calitate și cereale."
        ]
    },
    'nicoya-de-guanacaste-cities-v2': {
        'descriptionAdvanced.ro': 'Nicoya este sufletul cultural al provinciei Guanacaste și unul dintre cele mai importante orașe coloniale din Costa Rica. Este situat în inima Peninsulei Nicoya, una dintre puținele „Zone Albastre” din lume, unde oamenii ating vârste neobișnuit de înaintate. Orașul găzduiește una dintre cele mai vechi biserici din țară, Parohia San Blas, un simbol al moștenirii spaniole. Nicoya se mândrește cu folclorul său, muzica tradițională și bucătăria sa unică bazată pe porumb. Fiind centrul administrativ al peninsulei, orașul îmbină importanța istorică cu funcțiile moderne. Vizitatorii pot descoperi aici tradițiile sabaneros (văcarilor) și o ospitalitate transmisă din generație în generație.',
        'factsAdvanced.ro': [
            "Biserica San Blas a fost construită inițial în anul 1644.",
            "Nicoya face parte din cele 5 Zone Albastre oficiale de pe glob.",
            "Se află la o altitudine de 123 de metri deasupra nivelului mării.",
            "Centru principal pentru sărbătorirea anexării districtului Nicoya la Costa Rica (25 iulie).",
            "Unul dintre cele mai vechi locuri locuite din țară, cu rădăcini precolumbiene."
        ]
    },
    'santa-cruz-de-guanacaste-cities-v2': {
        'descriptionAdvanced.ro': 'Santa Cruz este numit cu mândrie „Orașul Folclorului” din Costa Rica și este un centru vibrant pentru muzică, dans și tradiție în provincia Guanacaste. Orașul este faimos la nivel mondial pentru festivalurile sale tradiționale, în special pentru rodeouri și paradele colorate care celebrează cultura sabaneros. Santa Cruz este situat în inima unei câmpii fertile și servește ca un nod comercial important pentru călătorii care merg spre plajele faimoase ale Coastei de Aur. Locuitorii din Santa Cruz sunt cunoscuți pentru bucuria lor de viață și dragostea pentru instrumentele tradiționale, cum ar fi marimba. Orașul oferă o atmosferă autentică, unde identitatea provinciei Guanacaste se simte la fiecare colț.',
        'factsAdvanced.ro': [
            "Declarat oficial „Ciudad Folclórica de Costa Rica”.",
            "Găzduiește anual, în luna ianuarie, marile festivaluri „Fiestas Típicas Nacionales”.",
            "Centru important pentru fabricarea ceramicii în localitatea Guaitil din apropiere.",
            "Temperatura medie anuală este de aproximativ 29 de grade Celsius.",
            "Timpul de condus până la plajele Tamarindo și Flamingo este de circa 45 de minute."
        ]
    },
    'naranjo-de-alajuela-cities-v2': {
        'descriptionAdvanced.ro': 'Naranjo, cuibărit în dealurile blânde din Valea Centrală de vest, este un paradis pentru iubitorii de cafea și admiratorii naturii. Orașul este celebru pentru producția unora dintre cele mai bune boabe de cafea din țară, care prosperă pe solurile vulcanice fertile din zonă. Un punct de atracție arhitectural este bazilica magnifică din centrul orașului, care impresionează prin sculpturile sale în lemn și picturile artistice. Naranjo oferă o atmosferă relaxată și servește drept poartă de acces către regiunile muntoase din Zarcero. Climatul blând și vegetația luxuriantă fac din regiune un loc atractiv pentru locuit și vizitat. Aici puteți experimenta cultura tradițională a cafelei din Costa Rica în forma sa cea mai autentică.',
        'factsAdvanced.ro': [
            "Se află la o altitudine de 1.031 de metri deasupra nivelului mării.",
            "Bazilica Nuestra Señora de las Piedades este un monument național.",
            "Produce cafea de specialitate premiată pentru piața mondială.",
            "Clima este temperată, cu temperaturi între 18 și 26 de grade Celsius.",
            "Populația cantonului Naranjo este de peste 45.000 de locuitori."
        ]
    },
    'san-ramon-de-alajuela-cities-v2': {
        'descriptionAdvanced.ro': 'San Ramón este numit cu respect „Orașul Poeților și al Președinților”, fiind locul de naștere al numeroși gânditori și politicieni importanți din Costa Rica. Această profunzime culturală se reflectă în peisajul urban, care este marcat de un parc central generos și de o biserică proeminentă. San Ramón este un centru regional important, având propria filială a Universității din Costa Rica, ceea ce îi conferă un aer academic. Împrejurimile sunt cunoscute pentru pădurile de nori și plantațiile de cafea, care invită la explorare. Locuitorii își prețuiesc tradițiile, lucru vizibil în numeroasele festivaluri și piețe locale. San Ramón îmbină educația, istoria și natura întrun mod care captează perfect spiritul țării.',
        'factsAdvanced.ro': [
            "Locul de naștere a trei foști președinți ai Costa Ricăi.",
            "Situat la o altitudine de 1.057 de metri în Cordillera Central.",
            "Găzduiește un muzeu regional important dedicat istoriei orașului.",
            "Temperatura medie este de o valoare plăcută de 21 de grade Celsius.",
            "Piața săptămânală locală (Feria) este considerată una dintre cele mai bune din regiune."
        ]
    },
    'la-garita-de-alajuela-cities-v2': {
        'descriptionAdvanced.ro': 'La Garita de Alajuela este cunoscută pentru unul dintre cele mai bune climate din lume, ceea ce transformă regiunea într-un paradis pentru pepiniere și iubitorii de natură. De-a lungul drumurilor se găsesc nenumărate pepiniere care oferă o varietate enormă de plante și flori tropicale. O vizită obligatorie pentru turiști este „Zoo Ave”, un centru de salvare a animalelor sălbatice dedicat reabilitării și conservării faunei din Costa Rica. La Garita este o destinație populară de weekend pentru localnici, care vin să se bucure de bucătăria tradițională în numeroasele restaurante tipice. Atmosfera relaxată, vremea însorită și flora luxuriantă fac din acest loc o oază verde la marginea zonei metropolitane.',
        'factsAdvanced.ro': [
            "A fost premiat de National Geographic pentru climatul său ideal.",
            "Se află la o altitudine cuprinsă între aproximativ 600 și 800 de metri.",
            "Găzduiește sediul Zoo Ave (Rescate Wildlife Centre) pe o suprafață de peste 14 hectare.",
            "Este cea mai importantă locație pentru producția de plante ornamentale din țară.",
            "Temperatura medie este constantă la aproximativ 24 de grade Celsius."
        ]
    },
    'san-antonio-de-alajuela-cities-v2': {
        'descriptionAdvanced.ro': 'San Antonio de Alajuela este un district dinamic și dens populat, care formează o punte strategică între orașul Alajuela și zonele industriale ale regiunii metropolitane. Proximitatea față de Aeroportul Internațional Juan Santamaría a făcut din regiune o locație preferată pentru companii de logistică și hoteluri. În același timp, San Antonio oferă cartiere rezidențiale stabilite, unde pulsează viața tradițională din Costa Rica. Peisajul urban este marcat de un amestec de infrastructură modernă și piețe locale. Locuitorii beneficiază de conexiuni excelente către capitalele de provincie San José și Heredia. San Antonio este un loc al mișcării și al creșterii, reflectând ritmul economic al Costa Ricăi moderne.',
        'factsAdvanced.ro': [
            "Se află la o altitudine de aproximativ 900 de metri deasupra nivelului mării.",
            "Districtul San Antonio se întinde pe o suprafață de circa 8,8 kilometri pătrați.",
            "Găzduiește numeroase zone de comerț liber (Zonas Francas).",
            "Clima este caldă, cu temperaturi variind între 20 și 30 de grade Celsius.",
            "Cel mai important sector economic este reprezentat de industrie și servicii."
        ]
    },
    'zarcero-de-alajuela-cities-v2': {
        'descriptionAdvanced.ro': 'Zarcero este un oraș montan pitoresc din provincia Alajuela, faimos în special pentru grădina sa topiară neobișnuită din centrul orașului. În fața impunătoarei biserici San Rafael, artistul Evangelista Blanco a transformat chiparoșii în figuri fantastice, arcade și animale, făcând din acest loc un motiv fotografic unic în lume. Zarcero este situat la altitudini răcoroase în Cordillera Central și este cunoscut pentru produsele sale lactate de primă clasă, în special pentru brânza locală și smântâna. Climatul aici este adesea cețos și răcoros, oferind o schimbare binevenită față de căldura din câmpii. Orașul emană o liniște și o curățenie care îi încântă imediat pe vizitatori.',
        'factsAdvanced.ro': [
            "Se află la o altitudine de .1.736 de metri deasupra nivelului mării.",
            "Grădina topiară a fost începută și modelată încă din anii 1960.",
            "Temperatura medie este de aproximativ 16 grade Celsius, fiind destul de scăzută.",
            "Renumit pentru „Natilla” (smântână) și lichiorul de piersici de casă.",
            "Biserica San Rafael posedă picturi pe tavan impresionante."
        ]
    },
    'pital-de-san-carlos-cities-v2': {
        'descriptionAdvanced.ro': 'Pital este un district agricol important din cantonul San Carlos, situat în vastele câmpii nordice ale Costa Ricăi. Regiunea este unul dintre cei mai importanți producători de ananas pentru piața mondială, lucru care marchează peisajul prin plantații uriașe. Pital servește ca un centru vital pentru comunitățile rurale din nord, oferind infrastructura necesară pentru comerț și educație. Climatul este tropical, cald și umed, ideal pentru cultivarea fructelor exotice și creșterea vitelor. În ciuda dominanței industriei agricole, Pital păstrează o comunitate locală puternică și își celebrează tradițiile cu entuziasm. Pentru călători, orașul oferă o perspectivă autentică asupra forței productive a agriculturii costaricanice.',
        'factsAdvanced.ro': [
            "Situat la o altitudine de 150 de metri deasupra nivelului mării.",
            "Districtul Pital are o suprafață de aproximativ 380 de kilometri pătrați.",
            "Locație cheie pentru companiile multinaționale de export de fructe.",
            "Cantitatea anuală de precipitații este de aproximativ 3.000 de milimetri.",
            "Deține un aerodrom regional pentru zboruri agricole și avioane mici."
        ]
    },
    'aguas-zarcas-de-san-carlos-cities-v2': {
        'descriptionAdvanced.ro': 'Aguas Zarcas, al cărui nume înseamnă „ape albastre deschise”, este un oraș înfloritor din cantonul San Carlos, cunoscut pentru izvoarele sale termale naturale. Situată la poalele lanțului vulcanic, regiunea beneficiază de activitate geotermală care alimentează izvoare termale relaxante. Orașul este un centru important pentru turism și agricultură, fiind înconjurat de păduri tropicale luxuriante și terenuri agricole fertile. Aguas Zarcas oferă un amestec de aventură și relaxare, cu acces la cascade și trasee de drumeție. Importanța economică a orașului a crescut constant în ultimii ani, reflectându-se într-o infrastructură modernă și o viață comercială activă.',
        'factsAdvanced.ro': [
            "Se află la o altitudine de 500 de metri deasupra nivelului mării.",
            "Districtul Aguas Zarcas se întinde pe o suprafață de circa 160 de kilometri pătrați.",
            "Cunoscut pentru calitatea ridicată a apei sale de izvor.",
            "Este cea mai importantă locație pentru produse lactate din regiunea de nord.",
            "Distanța până la capitala provinciei, Quesada, este de aproximativ 15 kilometri."
        ]
    },
    'florencia-de-san-carlos-cities-v2': {
        'descriptionAdvanced.ro': 'Florencia este un district important din cantonul San Carlos, situat strategic la intersecția unor rute majore către nord și vest. Orașul servește ca o zonă rezidențială semnificativă pentru persoanele care lucrează în orașul Quesada din apropiere, dar își păstrează caracterul agricol distinct. Înconjurat de pășuni verzi și plantații, Florencia este un centru pentru creșterea vitelor și cultivarea alimentelor de bază. În ultimii ani, regiunea a câștigat importanță datorită îmbunătățirii conexiunilor rutiere. Atmosfera este liniștită și tradițională, marcată de ferme agricole și o comunitate strâns unită. Florencia oferă legătura perfectă între liniștea rurală și accesul la serviciile urbane din San Carlos.',
        'factsAdvanced.ro': [
            "Se află la o altitudine de 225 de metri deasupra nivelului mării.",
            "Districtul Florencia are o suprafață de aproximativ 190 de kilometri pătrați.",
            "Nod important pentru transportul produselor agricole.",
            "Găzduiește mai multe unități de procesare agro-industrială.",
            "Distanța până la Vulcanul Arenal (La Fortuna) este de aproximativ 35 de kilometri."
        ]
    },
    'palmares-de-alajuela-cities-v2': {
        'descriptionAdvanced.ro': 'Palmares, numit adesea „Orașul Prietenilor”, este cuibărit în Valea Centrală de vest a Costa Ricăi, la o altitudine de aproximativ 1.000 de metri. Orașul este faimos în întreaga lume pentru „Fiestas de Palmares”, cel mai mare festival popular din țară, care atrage zeci de mii de vizitatori în fiecare ianuarie. În afara perioadei de festival, Palmares impresionează prin curățenia sa excepțională și prin parcul central premiat. Economia locală este puternic influențată de cultivarea cafelei și procesarea tutunului, ceea ce conferă regiunii un caracter prosper și bine întreținut. Vizitatorii apreciază ospitalitatea autentică costaricană și cadrul pitoresc al dealurilor verzi din jur. Biserica neogotică din centrul orașului este un punct de atracție arhitectural.',
        'factsAdvanced.ro': [
            "Festivalul anual „Fiestas de Palmares” durează 2 săptămâni și are peste 100.000 de vizitatori.",
            "Palmares a fost premiat de mai multe ori ca fiind cel mai curat oraș din Costa Rica.",
            "Regiunea produce anual aproximativ 45.000 de saci de cafea de munte de înaltă calitate.",
            "Biserica „Iglesia de las Mercedes” este construită din piatră și cărămidă în stil neogotic.",
            "Parcul central are o suprafață de aproximativ 5.000 de metri pătrați."
        ]
    },
    'atenas-de-alajuela-cities-v2': {
        'descriptionAdvanced.ro': 'Atenas se bucură de reputația de a avea unul dintre cele mai bune climate din lume, o distincție care a fost evidențiată la un moment dat chiar de National Geographic. Orașul este situat strategic între valea centrală aglomerată și plajele însorite ale coastei Pacificului. Această locație ideală și temperaturile blânde, de 24 de grade în medie, fac din Atenas un loc de locuit preferat pentru expatriați și pensionari din întreaga lume. Centrul fermecător al orașului este marcat de o biserică impunătoare și de un parc plin de viață, unde puteți experimenta direct sentimentul autentic de „Pura Vida”. Înconjurat de plantații de cafea și păduri luxuriante, Atenas oferă numeroate oportunități pentru observarea naturii, în special pentru iubitorii de păsări.',
        'factsAdvanced.ro': [
            "Temperatura medie în Atenas variază foarte puțin pe parcursul anului, între 23 și 26 de grade Celsius.",
            "Orașul este cunoscut pentru „Puente de Piedra”, un pod natural de piatră peste râul Porrosatí.",
            "Piața locală a fermierilor (Feria) are loc în fiecare vineri și oferă produse de la peste 50 de ferme locale.",
            "Regiunea este faimoasă pentru producția de „Toronja Rellena”, un desert din grepfrut umplut cu lapte condensat caramelizat.",
            "Se află la o altitudine de 698 de metri deasupra nivelului mării."
        ]
    }
}

for poi_id, data in updates.items():
    # Update descriptionAdvanced.ro
    pattern_desc = r"(id:\s*'" + poi_id + r"'.*?descriptionAdvanced:\s*\{.*?ro:\s*\")([^\"]*)(?=\")"
    replacement_desc = r"\g<1>" + data['descriptionAdvanced.ro'].replace('\\', '\\\\').replace('"', '\\"')
    content = re.sub(pattern_desc, replacement_desc, content, flags=re.DOTALL)
    
    # Update factsAdvanced.ro
    facts_str = ',\n        '.join(['"' + f + '"' for f in data['factsAdvanced.ro']])
    pattern_facts = r"(id:\s*'" + poi_id + r"'.*?factsAdvanced:\s*\{.*?ro:\s*\[)([^\]]*)(?=\])"
    replacement_facts = r"\g<1>\n        " + facts_str + r"\n      "
    content = re.sub(pattern_facts, replacement_facts, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Update complete.")
