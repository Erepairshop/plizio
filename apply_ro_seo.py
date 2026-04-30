
import re
import os

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/belgiumPoi.ts"

ro_data = {
    "belgium": {
        "facts": [
            "Belgia deține recordul mondial pentru cea mai lungă perioadă fără un guvern ales în timpul unei crize politice.",
            "Primul ziar tipărit din lume a fost publicat la Anvers în anul 1605.",
            "Țara are cea mai mare densitate de castele pe kilometru pătrat din lume, cu peste 3000 de edificii.",
            "Belgia este locul de naștere al teoriei Big Bang, dezvoltată de preotul și fizicianul Georges Lemaître.",
            "Portul din Anvers este al doilea cel mai mare port maritim din Europa, după cel din Rotterdam."
        ]
    },
    "city-brussels": {
        "facts": [
            "În Grand Place, la fiecare doi ani, se instalează un imens covor de flori format din peste 500.000 de begonii.",
            "Bruxelles găzduiește peste 40.000 de diplomați internaționali și 3.000 de jurnaliști străini.",
            "Galeriile Regale Saint-Hubert, deschise în 1847, sunt printre cele mai vechi pasaje comerciale acoperite din Europa.",
            "Statuia Manneken Pis are peste 1.000 de costume diferite, păstrate în muzeul orașului.",
            "Bruxelles este considerat capitala stilului Art Nouveau, cu numeroase capodopere ale arhitectului Victor Horta."
        ]
    },
    "reg-flanders": {
        "facts": [
            "Câmpia Flandrei este unul dintre cele mai importante centre cicliste din lume, găzduind numeroase curse celebre.",
            "Anvers este centrul mondial al comerțului cu diamante, unde se negociază aproximativ 84% din diamantele brute.",
            "Porturile Zeebrugge și Anvers sunt porți vitale pentru transportul global de mărfuri.",
            "Flandra este renumită pentru pictura primitivilor flamanzi, inclusiv lucrările lui Jan van Eyck și Rubens.",
            "Pe coasta flamandă circulă cea mai lungă linie de tramvai din lume, Kusttram, având 67 de kilometri."
        ]
    },
    "reg-wallonia": {
        "facts": [
            "Valonia găzduiește unele dintre cele mai frumoase sate din lume, precum Crupet sau Mélin.",
            "Regiunea deține faimosul circuit Spa-Francorchamps, unul dintre cele mai îndrăgite locuri din Formula 1.",
            "Citadela din Namur este una dintre cele mai mari și mai bine conservate fortificații militare din Europa.",
            "Bucătăria valonă se bazează pe beri trapiste, care sunt produse și astăzi în abații după rețete străvechi.",
            "Ascensoarele hidraulice pentru ambarcațiuni de pe Canal du Centre sunt incluse în patrimoniul mondial UNESCO."
        ]
    },
    "nat-ardennes": {
        "desc": "Regiunea Ardeni, situată în sud-estul Belgiei, este celebră pentru pădurile sale vaste, dealurile ondulate și văile adânci săpate de râuri precum Meuse și Semois. Această zonă reprezintă plămânul verde al țării, oferind un peisaj spectaculos care se schimbă dramatic de la un anotimp la altul. Istoric, Ardenii au fost scena unor bătălii cruciale în timpul celui de-al Doilea Război Mondial, în special în timpul Ofensivei din Ardeni. Astăzi, regiunea este o destinație preferată pentru drumeții, ciclism și sporturi nautice, fiind totodată renumită pentru gastronomia sa robustă, bazată pe vânat și produse locale. Satele pitorești și abațiile vechi împrăștiate prin peisaj adaugă o notă de farmec istoric acestei regiuni naturale sălbatice.",
        "facts": [
            "Signal de Botrange, cel mai înalt punct din Belgia, se află în inima regiunii Ardeni.",
            "Văile adânci ale râurilor Meuse și Semois oferă peisaje spectaculoase cu stânci abrupte și castele medievale.",
            "Pădurile dense de stejar și brad adăpostesc o faună bogată, inclusiv cerbi și mistreți.",
            "Regiunea este faimoasă pentru produsele sale artizanale, cum ar fi șunca afumată de Ardeni.",
            "În timpul iernii, Ardenii sunt principala destinație pentru schi fond și alte sporturi de zăpadă în Belgia."
        ]
    },
    "city-ghent": {
        "desc": "Gent este un amestec fascinant de istorie medievală și spirit universitar vibrant, fiind unul dintre cele mai bine conservate orașe din Europa. Inima orașului este dominată de cele trei turnuri emblematice și de faleza Graslei, unde clădirile vechilor bresle se oglindesc în apele râului Leie. Gent a fost în Evul Mediu unul dintre cele mai bogate orașe de pe continent, bogăție reflectată în arhitectura sa grandioasă și în comorile artistice precum Altarul de la Gent. Orașul este astăzi un centru cultural activ, cu numeroase muzee, festivaluri de renume și o scenă gastronomică modernă. Atmosfera este relaxată, cu zone pietonale extinse și o viață de noapte animată de marea comunitate de studenți. Vizitarea castelului Gravensteen oferă o incursiune autentică în trecutul glorios și uneori întunecat al Flandrei.",
        "facts": [
            "Catedrala Sfântul Bavo din Gent găzduiește faimosul Altar de la Gent, capodopera lui Jan van Eyck.",
            "Castelul Gravensteen este singura cetate medievală cu șanț de apă din Flandra care a rămas aproape intactă.",
            "Gent are una dintre cele mai mari zone pietonale din Europa, făcând centrul orașului foarte primitor pentru turiști.",
            "În Evul Mediu, Gent a fost al doilea oraș ca mărime din Europa, după Paris, datorită comerțului cu lână.",
            "Cele trei turnuri celebre ale orașului aparțin Bisericii Sf. Nicolae, Clopotniței (Belfry) și Catedralei."
        ]
    },
    "city-liege": {
        "desc": "Liège, situat pe malurile râului Meuse, este inima industrială și culturală a Valoniei, fiind un oraș cu o personalitate puternică și o istorie bogată. Orașul este renumit pentru spiritul său primitor, atmosfera festivă și gastronomia specifică, celebrul vafă de Liège fiind un simbol recunoscut internațional. Centrul istoric adăpostește numeroase comori arhitecturale, de la biserici vechi la palate somptuoase care amintesc de perioada în care orașul era sediul unui principat-episcopat independent. O atracție deosebită este scara Montagne de Bueren, care oferă o panoramă spectaculoasă asupra orașului pentru cei care reușesc să îi urce cele 374 de trepte. Liège este, de asemenea, un hub de transport major, având o gară futuristă proiectată de Santiago Calatrava, care simbolizează modernizarea orașului. Vizitatorii pot explora piețele locale pline de viață, muzeele de artă și traseele de plimbare de-a lungul fluviului.",
        "facts": [
            "Scara Montagne de Bueren, cu cele 374 de trepte ale sale, este una dintre cele mai spectaculoase din lume.",
            "Gara Liège-Guillemins este o capodoperă futuristă din oțel și sticlă proiectată de arhitectul Santiago Calatrava.",
            "Orașul deține cel mai important port fluvial din Belgia, situat strategic pe râul Meuse.",
            "Liège a fost timp de secole sediul unui principat-episcopat independent în cadrul Sfântului Imperiu Roman.",
            "Vafa de Liège se distinge prin bucățelele de zahăr perlat care se caramelizează în timpul coacerii."
        ]
    },
    "city-leuven": {
        "desc": "Leuven este un centru universitar de prestigiu, unde tradiția academică de peste șase secole se împletește armonios cu o viață urbană dinamică. Orașul găzduiește cea mai veche universitate catolică din lume, ale cărei colegii și biblioteci istorice conferă străzilor o atmosferă intelectuală și rafinată. Primăria din Leuven este un giuvaier al arhitecturii gotice flamboaiante, fiind decorată cu sute de statui care povestesc istoria locală. Pe lângă faima academică, Leuven este cunoscut drept capitala berii din Belgia, fiind sediul celui mai mare producător de bere din lume. Piața Oude Markt este adesea numită cel mai lung bar din lume datorită densității incredibile de cafenele și terase. Groot Begijnhof, un sit UNESCO, oferă un refugiu de liniște cu străzile sale pavate și casele din cărămidă roșie, fiind și astăzi utilizat de comunitatea universitară.",
        "facts": [
            "Universitatea Catolică din Leuven, fondată în 1425, este una dintre cele mai vechi și prestigioase din Europa.",
            "Primăria din Leuven este o capodoperă a goticului târziu, având 236 de statui pe fațada sa exterioară.",
            "Piața Oude Markt este supranumită cel mai lung bar din lume datorită celor peste 40 de pub-uri concentrate aici.",
            "Leuven este locul de origine al berii Stella Artois, tradiția berii în oraș datând încă din anul 1366.",
            "Marele Beguinaj (Groot Begijnhof) servește astăzi ca reședință pentru studenții și profesorii universității."
        ]
    },
    "city-oostende": {
        "desc": "Ostende, supranumit Regina Stațiunilor Litorale, este cel mai important oraș de pe coasta belgiană, oferind o combinație unică de plaje întinse și istorie regală. Orașul a fost destinația de vară preferată a regilor Belgiei, lucru vizibil în arhitectura monumentală și în promenadele elegante de-a lungul mării. Pe lângă relaxarea pe plajă, vizitatorii pot explora portul activ, pot vizita nava-muzeu Mercator sau pot descoperi casa celebrului pictor James Ensor. Ostende are o atmosferă cosmopolită, cu numeroase restaurante de pește, un cazinou impunător și o viață culturală bogată pe tot parcursul anului. Digul lung este locul perfect pentru plimbări revigorante, oferind vederi spectaculoase asupra Mării Nordului. Orașul servește, de asemenea, ca un punct de legătură important pentru transportul maritim internațional.",
        "facts": [
            "Ostende a fost reședința de vară preferată a regelui Leopold al II-lea, care a construit aici numeroase monumente.",
            "Nava-muzeu Mercator, ancorată în port, a fost o navă de antrenament și explorare științifică foarte importantă.",
            "Orașul găzduiește casa memorială a pictorului James Ensor, un precursor important al suprarealismului.",
            "Portul Ostende este un nod esențial pentru feriboturile care fac legătura cu Regatul Unit.",
            "Promenada de pe digul orașului se întinde pe câțiva kilometri, fiind decorată cu sculpturi moderne."
        ]
    },
    "cult-manneken-pis": {
        "facts": [
            "Statuia actuală din bronz a fost realizată în 1619 de către sculptorul Jérôme Duquesnoy cel Bătrân.",
            "Garderoba statuii conține peste 1000 de costume diferite, de la Moș Crăciun la haine de cosmonaut.",
            "Manneken Pis are și o variantă feminină, Jeanneke Pis, și chiar un cățel numit Zinneke Pis.",
            "Statuia a fost furată de mai multe ori de-a lungul istoriei, piesa expusă astăzi fiind o copie din 1965.",
            "În zile de sărbătoare, statuia urinează uneori bere sau lapte, spre deliciul vizitatorilor."
        ]
    },
    "cult-bruges-belfry": {
        "facts": [
            "Construcția turnului a început în jurul anului 1240 și a fost refăcut de mai multe ori după incendii.",
            "Vizitatorii trebuie să urce 366 de trepte abrupte pentru a ajunge la nivelul de unde se vede panorama orașului.",
            "Carilonul turnului are 47 de clopote care cântăresc în total aproximativ 27 de tone.",
            "Turnul are o înălțime de 83 de metri și prezintă o înclinație de aproape un metru spre sud-est.",
            "Clopotnița a jucat un rol central în filmul cult 'In Bruges' (Sărbătoarea morții)."
        ]
    },
    "cult-waterloo": {
        "desc": "Colina Leului din Waterloo este un monument impunător ridicat pe locul unde a avut loc bătălia decisivă care a pus capăt epocii napoleoniene. Acest deal artificial, înalt de 40 de metri, oferă o perspectivă panoramică asupra întregului câmp de luptă unde forțele aliate l-au învins pe Napoleon în 1815. În vârful colinei tronează o statuie masivă de leu, turnată din fontă, care privește simbolic spre Franța. Vizitatorii pot urca cele peste 200 de trepte pentru a înțelege mai bine desfășurarea tactică a luptei care a schimbat cursul istoriei europene. La baza monumentului se află un centru de vizitare modern, cu expoziții interactive și o panoramă pictată imensă care recreează momentele critice ale bătăliei. Waterloo este astăzi un loc de pelerinaj pentru pasionații de istorie militară și un simbol al păcii durabile pe continent.",
        "facts": [
            "Pentru construcția dealului s-au folosit aproximativ 300.000 de metri cubi de pământ de pe câmpurile din jur.",
            "Statuia leului din vârf cântărește 28 de tone și are o lungime de 4,5 metri.",
            "Vizitatorii trebuie să urce 226 de trepte pentru a ajunge la platforma de observație de la 40 de metri înălțime.",
            "Monumentul a fost comandat de regele William I al Țărilor de Jos pentru a marca locul unde fiul său a fost rănit.",
            "Tabloul 'Panorama bătăliei', situat la baza dealului, a fost finalizat în 1912 și are o lungime de 110 metri."
        ]
    },
    "nat-hohes-venn": {
        "facts": [
            "Rezervația High Fens este cea mai veche și mai mare zonă protejată din Belgia, fondată în 1957.",
            "Microclimatul unic al zonei permite existența unor specii rare de plante carnivore și mușchi de turbă.",
            "Pasarelele de lemn (fagne) se întind pe zeci de kilometri pentru a permite traversarea mlaștinilor fără a le degrada.",
            "În timpul iernii, platoul este locul cu cea mai mare probabilitate de ninsoare din întreaga țară.",
            "Zona găzduiește o populație rară de cocoși de mesteacăn, simbolul parcului natural."
        ]
    },
    "nat-dinant-citadel": {
        "facts": [
            "Cea mai mare parte a fortificației vizibile astăzi a fost construită între 1818 și 1821, în perioada olandeză.",
            "Cele 408 trepte care duc la citadelă au fost săpate direct în stâncă în anul 1577.",
            "Cetatea se află la 100 de metri deasupra nivelului râului Meuse, oferind o vizibilitate strategică perfectă.",
            "În timpul bătăliei din 1914, citadela a fost scena unor lupte sângeroase între trupele franceze și germane.",
            "Unul dintre coridoarele cetății s-a înclinat la 45 de grade în urma unui bombardament, efect vizibil și astăzi."
        ]
    },
    "hist-gravensteen": {
        "facts": [
            "Castelul a fost construit în 1180 de contele Filip de Alsacia pe locul unei foste fortificații din lemn.",
            "Este singura cetate medievală din Flandra care și-a păstrat sistemul defensiv aproape complet intact.",
            "La sfârșitul secolului al XVIII-lea, castelul a funcționat ca fabrică de bumbac și a fost propus pentru demolare.",
            "Muzeul castelului deține una dintre cele mai rare colecții de instrumente de tortură medievale din lume.",
            "Curțile și interioarele Gravensteen au servit drept decor pentru numeroase producții cinematografice internaționale."
        ]
    },
    "hist-beersel-castle": {
        "facts": [
            "Castelul și-a căpătat forma actuală la începutul secolului al XIV-lea, fiind construit între 1300 și 1310.",
            "Beersel este unul dintre puținele castele medievale din Belgia construite aproape integral din cărămidă.",
            "Fortăreața are trei turnuri monumentale care serveau scopurilor defensive și de locuire.",
            "În anul 1489, castelul a fost asediat și capturat de trupele arhiducelui Maximilian de Austria.",
            "Sistemul de șanțuri cu apă este și astăzi complet funcțional, păstrând configurația medievală originală."
        ]
    },
    "hist-bouillon-castle": {
        "facts": [
            "Prima mențiune documentară a castelului datează din 1082, când a fost moștenit de Godfrey de Bouillon.",
            "Poziția strategică pe o creastă stâncoasă deasupra râului Semois l-a făcut aproape inexpugnabil timp de secole.",
            "În curtea interioară au loc spectacole regulate de șoimărit, prezentând vulturi, ulii și bufnițe.",
            "Sub fortăreață se află o cisternă imensă săpată în stâncă, care asigura apa în timpul asediilor lungi.",
            "Cel mai înalt punct al castelului este Turnul Austriei, care oferă o vedere panoramică de 360 de grade."
        ]
    },
    "hist-stoclet-palace": {
        "desc": "Palatul Stoclet din Bruxelles este o capodoperă a designului modern de la începutul secolului XX, fiind una dintre cele mai rafinate realizări ale Secesiunii vieneze. Construit între 1905 și 1911 pentru bancherul Adolphe Stoclet, palatul reprezintă conceptul de 'operă de artă totală', unde arhitectura, designul interior și grădinile formează un tot unitar perfect. Fațada placată cu marmură albă și turnul decorat cu sculpturi conferă clădirii o eleganță sobră și avangardistă pentru acea epocă. Interiorul găzduiește lucrări remarcabile, inclusiv faimosul mozaic realizat de Gustav Klimt în sala de mese. Deși rămâne o proprietate privată și nu este deschis publicului, Palatul Stoclet este inclus în patrimoniul mondial UNESCO pentru integritatea și calitatea sa artistică excepțională. Este un simbol al luxului intelectual și al inovației estetice care a marcat tranziția către modernism.",
        "facts": [
            "Palatul a fost proiectat de arhitectul Josef Hoffmann și decorat de artiștii de la Wiener Werkstätte.",
            "Sala de mese conține un mozaic spectaculos realizat de celebrul pictor Gustav Klimt.",
            "Fațada clădirii este realizată din plăci de marmură albă de Carrara bordate cu elemente de bronz.",
            "Este considerat una dintre cele mai bine conservate și complete lucrări ale mișcării Secession din lume.",
            "UNESCO l-a declarat monument protejat în 2009 pentru valoarea sa arhitecturală și artistică unică."
        ]
    },
    "hist-tyne-cot-cemetery": {
        "facts": [
            "În cimitirul Tyne Cot sunt înmormântați 11.961 de soldați, dintre care 8.373 nu au putut fi identificați.",
            "Pe zidurile Memorialului Tyne Cot sunt inscripționate numele a 34.927 de soldați fără morminte cunoscute.",
            "Numele cimitirului a fost dat de soldații britanici care vedeau bunkerele germane ca pe niște colibe din Tyne.",
            "Monumentul și cimitirul au fost proiectate de Sir Herbert Baker și inaugurate de Regele George al V-lea în 1922.",
            "În incinta cimitirului se află și astăzi trei bunkere germane originale, martori ai luptelor sângeroase."
        ]
    },
    "nat-signal-de-botrange": {
        "facts": [
            "Altitudinea exactă a Signal de Botrange este de 694 de metri, fiind punctul culminant al Belgiei.",
            "În 1923 a fost construită scara Baltia, care permite atingerea altitudinii simbolice de 700 de metri.",
            "Zona face parte din Parcul Natural High Fens-Eifel, care se întinde pe teritoriul a două țări.",
            "Aici funcționează una dintre cele mai importante stații meteorologice din Belgia încă din secolul al XIX-lea.",
            "Lângă Signal de Botrange se află Baraque Michel, un loc istoric de popas pentru călătorii prin mlaștină."
        ]
    },
    "nat-baraque-michel": {
        "facts": [
            "Baraque Michel este al treilea cel mai înalt punct din Belgia, având o altitudine de 674 de metri.",
            "Hanul a fost fondat în 1812, inițial pentru a oferi asistență celor rătăciți în mlaștinile periculoase.",
            "Clopotul capelei de lângă han era tras pe timp de ceață pentru a ghida călătorii spre siguranță.",
            "Zona din jurul Baraque Michel este una dintre cele mai pure turbării din rezervația High Fens.",
            "Istoric, acest punct a marcat frontiera între Regatul Prusiei și Regatul Țărilor de Jos."
        ]
    },
    "nat-lake-robertville": {
        "facts": [
            "Barajul care a creat lacul a fost construit între anii 1925 și 1928 pe cursul râului Warche.",
            "Barajul are o înălțime de 55 de metri și o lungime de 182 de metri, reținând 8 milioane metri cubi de apă.",
            "Apa lacului asigură alimentarea cu apă potabilă pentru orașul Malmedy și zonele învecinate.",
            "De pe malul lacului se poate vedea castelul Reinhardstein, cel mai înalt castel din Belgia.",
            "Traseul de drumeție din jurul lacului are o lungime de aproximativ 5 kilometri."
        ]
    },
    "nat-semois-river": {
        "facts": [
            "Râul Semois are o lungime totală de 210 kilometri, dintre care majoritatea se află pe teritoriul belgian.",
            "Valea râului a fost până la jumătatea secolului XX cea mai importantă zonă de producție de tutun din Belgia.",
            "Cea mai spectaculoasă buclă a râului se vede din satul Rochehaut, unde apa înconjoară complet un deal.",
            "Semois este unul dintre cele mai curate râuri din Ardeni, fiind casă pentru păstrăvi și vidre.",
            "Traseul de drumeție GR-16 care urmează cursul râului este considerat unul dintre cele mai frumoase din Europa."
        ]
    },
    "nat-lesse-river": {
        "facts": [
            "Râul Lesse are o lungime de aproximativ 89 de kilometri și se varsă în Meuse lângă orașul Dinant.",
            "Râul dispare sub pământ în sistemul de peșteri Han-sur-Lesse și reapare la suprafață după 24 de ore.",
            "Castelul Walzin se află pe o stâncă verticală de 50 de metri deasupra râului, fiind extrem de fotogenic.",
            "Coborârea cu caiacul pe Lesse între Houyet și Anseremme oferă 21 de kilometri de aventură prin natură.",
            "Valea râului face parte din Parcul Natural Furfooz, unde se află ruine romane și peșteri preistorice."
        ]
    },
    "nat-monsin-island": {
        "facts": [
            "Insula Monsin este situată la intersecția râului Meuse cu Canalul Albert, în nordul orașului Liège.",
            "Monumentul monumental dedicat regelui Albert I a fost inaugurat pe insulă în anul 1939.",
            "Sistemul de ecluze Monsin este crucial pentru reglarea nivelului apei pe Canalul Albert.",
            "Aici se află una dintre cele mai vechi și importante hidrocentrale fluviale din Belgia, încă funcțională.",
            "Teritoriul insulei este un nod logistic major, cu legături directe între transportul feroviar și cel naval."
        ]
    },
    "land-atomium": {
        "facts": [
            "Atomium a fost proiectat de inginerul André Waterkeyn pentru Expoziția Mondială din 1958 (Expo 58).",
            "Structura are o înălțime de 102 metri, iar sfelele au un diametru de 18 metri fiecare.",
            "Construcția este formată din nouă sfere, dintre care cinci sunt accesibile publicului larg.",
            "Tuburile care conectează sferele conțin scări rulante și lifturi, inclusiv cel mai rapid lift din Europa de atunci.",
            "Din sfera superioară se poate vedea până la Anvers prin ferestrele panoramice, în zilele senine."
        ]
    },
    "land-grand-place-brussels": {
        "facts": [
            "Clădirile din piață au fost reconstruite în timp record, doar câțiva ani, după bombardamentul francez din 1695.",
            "Turnul Primăriei, înalt de 96 de metri, a fost finalizat în 1449 și poartă în vârf statuia Sf. Mihail.",
            "Grand Place este inclusă pe lista patrimoniului mondial UNESCO din 1998 pentru unitatea sa arhitecturală.",
            "La fiecare doi ani în august se realizează un covor de flori de 75x24 metri din peste jumătate de milion de flori.",
            "Victor Hugo, celebrul scriitor francez, a numit Grand Place din Bruxelles cea mai frumoasă piață din lume."
        ]
    },
    "land-antwerp-central-station": {
        "facts": [
            "Gara a fost proiectată de arhitectul Louis Delacenserie și a fost dată în folosință în anul 1905.",
            "Hala monumentală din oțel și sticlă are o lungime de 185 de metri și o înălțime de 44 de metri.",
            "Stația a fost votată de mai multe reviste internaționale ca fiind una dintre cele mai frumoase trei gări din lume.",
            "În anii 2000 a avut loc o extindere majoră, vagoanele fiind acum dispuse pe patru niveluri diferite.",
            "Cupola holului principal se ridică la 75 de metri înălțime și conține peste 20 de tipuri de marmură."
        ]
    },
    "land-belfry-bruges": {
        "facts": [
            "Construcția turnului a început în secolul al XIII-lea și a fost simbolul puterii comerciale a orașului.",
            "Turnul găzduiește o cameră a tezaurului unde erau păstrate documentele importante și sigiliul orașului.",
            "Carilonul este acționat de un mecanism complex cu tambur rotativ care datează din secolul al XVIII-lea.",
            "Din vârful celor 366 de trepte se poate vedea în depărtare linia de coastă a Mării Nordului.",
            "Clopotul cel mare al turnului, numit Victory, cântărește aproximativ 6 tone."
        ]
    },
    "hist-waterloo-battlefield": {
        "facts": [
            "Bătălia de la Waterloo a pus capăt definitiv războaielor napoleoniene și domniei lui Napoleon.",
            "La luptă au participat aproximativ 200.000 de soldați, cu pierderi estimate la 50.000 de oameni.",
            "Ferma Hougoumont păstrează și astăzi urmele asediului și ale luptelor sângeroase de la zidurile sale.",
            "Ducele de Wellington și-a scris raportul victoriei în satul Waterloo, de unde provine și numele bătăliei.",
            "Pe câmpul de luptă se află numeroase monumente dedicate națiunilor care au participat la conflict."
        ]
    },
    "hist-fort-eben-emael": {
        "facts": [
            "La vremea sa, Eben-Emael era cea mai mare și mai puternică fortăreață din Europa, considerată inexpugnabilă.",
            "În 1940, parașutiștii germani au capturat fortul în doar câteva ore folosind planoare pentru aterizare.",
            "Sistemul de coridoare subterane are o lungime de peste 5 kilometri și putea adăposti 1200 de soldați.",
            "Astăzi fortul este muzeu, putând fi vizitate buncărele imense de artilerie și spațiile de locuit ale trupei."
        ]
    },
    "land-royal-greenhouses-laeken": {
        "facts": [
            "Serele au fost proiectate de Alphonse Balat pentru regele Leopold al II-lea în stilul Art Nouveau.",
            "Complexul este deschis publicului doar trei săptămâni pe an, în timpul înfloririi de primăvară.",
            "Colecția botanică include plante rare care datează încă de pe vremea regelui fondator.",
            "Cupolele și galeriile de sticlă acoperă o suprafață totală de peste un hectar în incinta domeniului regal."
        ]
    },
    "land-palace-justice-brussels": {
        "facts": [
            "La finalizarea sa în 1883, era cea mai mare clădire din lume, depășind bazilica Sfântul Petru din Roma.",
            "Pentru construcția sa au fost demolate 3000 de case, provocând o mare revoltă în rândul populației locale.",
            "Stilul clădirii este unul eclectic, îmbinând elemente asiriene, egiptene și greco-romane.",
            "Cupola se ridică la 104 metri înălțime și este un punct de reper vizibil din aproape orice punct al capitalei."
        ]
    },
    "land-mas-museum-antwerp": {
        "facts": [
            "Clădirea înaltă de 60 de metri este realizată din gresie roșie și sticlă ondulată în vechiul port al orașului.",
            "Fiecare etaj explorează o temă diferită, de la istoria orașului la comerțul mondial și gastronomie.",
            "Terasa de observație de pe acoperiș oferă o panoramă spectaculoasă și gratuită asupra portului.",
            "Fațada muzeului este decorată cu 3185 de mâini metalice, simbolul legendar al orașului Anvers."
        ]
    },
    "port-antwerp-bruges": {
        "facts": [
            "Acesta este al doilea cel mai mare port din Europa, jucând un rol cheie în lanțurile de aprovizionare globale.",
            "Suprafața portului depășește 120 de kilometri pătrați, fiind mai mare decât centrul multor metropole europene.",
            "Aici se află ecluza Kieldrecht, cea mai mare din lume, cu o lungime de 500 de metri.",
            "Portul este unul dintre cele mai importante centre ale industriei chimice din Europa."
        ]
    },
    "port-zeebrugge": {
        "facts": [
            "Zeebrugge este cel mai mare port din lume pentru tranzitul de autoturisme noi, cu milioane de vehicule anual.",
            "Este terminalul principal pentru importul de gaze naturale în Belgia și un port pescăresc de importanță majoră.",
            "Portul dispune de un dig de protecție lung de 12 kilometri care apără bazinele interioare de maree.",
            "Este un hub vital pentru traficul de feriboturi către Regatul Unit și peninsula Scandinavă."
        ]
    },
    "port-ghent": {
        "facts": [
            "Portul Ghent este conectat la Marea Nordului printr-un canal lung de 32 de kilometri care trece prin Terneuzen.",
            "Este cel mai important port industrial al Belgiei, găzduind mari oțelării și fabrici de automobile.",
            "Pe teritoriul portului se află unul dintre cele mai mari centre de producție de biocombustibili din Europa.",
            "Sistemul de ecluze permite accesul celor mai mari nave de transport oceanic direct în inima regiunii."
        ]
    },
    "port-liege": {
        "facts": [
            "Este al treilea cel mai mare port fluvial din Europa, situat strategic pe axa fluvială Rin-Main-Dunăre.",
            "Portul oferă o conexiune directă către Anvers prin Canalul Albert, facilitând exporturile industriale.",
            "Joacă un rol esențial în transportul de containere și în logistica produselor siderurgice grele.",
            "Teritoriul portului este împărțit în 32 de zone diferite de-a lungul cursului râului Meuse."
        ]
    },
    "agri-haspengouw-fruit-region": {
        "facts": [
            "Aceasta este una dintre cele mai mari zone pomicole din Europa, fiind patria merelor și a perelor belgiene.",
            "Primăvara, regiunea este acoperită de milioane de pomi înfloriți, atrăgând mii de turiști și cicliști.",
            "Zona este celebră și pentru castelele sale istorice ascunse printre dealurile pline de livezi.",
            "Producția locală de siropuri și sucuri de fructe are tradiții de sute de ani în această parte a Limburgului."
        ]
    },
    "ind-c-mine-genk": {
        "facts": [
            "Pe locul fostei mine de cărbune Winterslag funcționează astăzi un centru cultural și creativ modern.",
            "Vizitatorii pot coborî în subteran și pot urca în turnul de extracție înalt de 60 de metri.",
            "Complexul găzduiește o expoziție interactivă unică despre viața și munca grea a minerilor.",
            "Hala mașinilor este astăzi decorul pentru concerte, expoziții de artă și studiouri de design."
        ]
    },
    "land-brussels-town-hall": {
        "facts": [
            "Primăria este singura clădire medievală care a supraviețuit integral în Grand Place.",
            "În vârful turnului se află o statuie aurită de 5 metri a Sfântului Mihail, patronul orașului.",
            "Cele două aripi ale clădirii nu sunt simetrice, fiind construite în perioade diferite ale secolului XV.",
            "Sălile interioare sunt decorate cu tapiserii superbe și picturi istorice de o valoare inestimabilă."
        ]
    },
    "city-durbuy": {
        "facts": [
            "Durbuy este adesea promovat ca fiind cel mai mic oraș din lume, păstrând un farmec medieval intact.",
            "Localitatea este celebră pentru străzile sale pavate și casele construite din piatră de var specifică zonei.",
            "Găzduiește cel mai mare parc de grădini modelate (topiary) din Europa, cu peste 250 de figuri vegetale.",
            "Râul Ourthe, care trece prin oraș, este un loc foarte popular pentru caiac și pescuit sportiv."
        ]
    },
    "city-bouillon": {
        "facts": [
            "Orașul este situat într-o buclă spectaculoasă a râului Semois, în inima pădurilor din Ardeni.",
            "Principala atracție este fortăreața medievală imensă care a fost sediul lui Godfrey de Bouillon.",
            "Traseele de drumeție din jur duc la puncte de belvedere superbe, cum este 'Mormântul Uriașului'.",
            "În fiecare an are loc un festival medieval unde turnirurile de cavaleri animă străzile orașului."
        ]
    },
    "city-dinant": {
        "facts": [
            "Orașul este comprimat între râul Meuse și o stâncă verticală, oferind un aspect vizual dramatic.",
            "Dinant este locul de naștere al lui Adolphe Sax, inventatorul saxofonului, a cărui casă este acum muzeu.",
            "Podul principal este decorat cu numeroase saxofoane colorate, dedicate diferitelor țări ale lumii.",
            "Berea celebră Leffe își trage numele de la abația situată în apropierea orașului unde a fost creată."
        ]
    },
    "city-huy": {
        "facts": [
            "Orașul Huy este situat pe râul Meuse și este faimos pentru cele 'patru minuni', inclusiv vitraliul său rozetă.",
            "Citadela, care domină orașul de pe stâncă, a fost folosită ca închisoare militară în secolul al XIX-lea.",
            "Aici se află biserica colegială Notre-Dame, unul dintre cele mai importante monumente religioase din țară.",
            "Huy este renumit pentru prelucrarea cuprului, o tradiție meșteșugărească ce datează din Evul Mediu."
        ]
    },
    "city-rochefort": {
        "facts": [
            "Rochefort este faimos pentru berea sa trapistă produsă în incinta abației Saint-Remy.",
            "Sub oraș se află peștera Lorette, care are formațiuni calcaroase spectaculoase accesibile turiștilor.",
            "Ruinele castelului medieval de pe dealul de deasupra orașului depun mărturie despre trecutul nobiliar.",
            "În fiecare an are loc Festivalul Internațional al Râsului, unul dintre cele mai populare evenimente de umor."
        ]
    },
    "city-damme": {
        "facts": [
            "În Evul Mediu, Damme a fost avanportul orașului Bruges, devenind extrem de bogat din comerțul maritim.",
            "Astăzi, orașul este cunoscut ca un centru al cărților antice, având numeroase anticariate și evenimente literare.",
            "Un canal pitoresc mărginit de arbori seculari leagă Damme de Bruges, fiind ideal pentru plimbări cu barca.",
            "Primăria gotică și biserica Notre-Dame sunt mărturii ale epocii de aur a micii localități."
        ]
    },
    "city-aalst": {
        "facts": [
            "Aalst este faimos în special pentru carnavalul său de trei zile, inclus în patrimoniul imaterial UNESCO.",
            "Primăria și turnul clopotniță (belfry) sunt printre cele mai vechi de acest tip din regiunea Flandrei.",
            "Orașul este renumit pentru cultivarea hameiului și tradițiile vechi de fabricare a berii.",
            "Biserica Sfântul Martin găzduiește una dintre picturile celebre ale lui Peter Paul Rubens."
        ]
    },
    "city-oudenaarde": {
        "facts": [
            "Orașul a fost faimos în întreaga Europă pentru tapiseriile sale medievale de o calitate excepțională.",
            "Primăria din Oudenaarde este construită în stil gotic flamboaiant, fiind considerată una dintre cele mai frumoase.",
            "Oudenaarde este centrul turului ciclist al Flandrei, găzduind și muzeul dedicat acestei competiții.",
            "Lângă oraș a avut loc în 1708 faimoasa bătălie de la Oudenaarde în cadrul războiului de succesiune spaniol."
        ]
    },
    "city-roeselare": {
        "facts": [
            "Roeselare este inima industriei alimentare flamande, fiind sediul renumitei fabrici de bere Rodenbach.",
            "Aici se află KOERS, muzeul național al ciclismului, situat într-o veche stație de pompieri.",
            "Piața centrală și străzile comerciale sunt foarte populare atât pentru turiști cât și pentru localnici.",
            "Castelul Rumbeke din apropiere, situat în parcul Sterrebos, este un loc de relaxare foarte apreciat."
        ]
    },
    "city-turnhout": {
        "facts": [
            "Turnhout este centrul mondial al producției de cărți de joc, găzduind cea mai mare fabrică de acest profil.",
            "Muzeul Cărților de Joc din oraș prezintă istoria fascinantă și secretele fabricării acestora.",
            "Vechiul castel al ducilor de Brabant servește astăzi drept tribunal și spațiu cultural major.",
            "Begunajul din Turnhout face parte din patrimoniul mondial UNESCO și este extrem de bine conservat."
        ]
    },
    "city-hasselt": {
        "facts": [
            "Hasselt este 'orașul modei' din Belgia, celebru pentru magazinele sale elegante și muzeul modei.",
            "Găzduiește cea mai mare grădină japoneză din Europa, simbol al prieteniei cu orașul Itami din Japonia.",
            "Orașul este faimos pentru jenever, un gin tradițional belgian care are propriul său muzeu dedicat.",
            "Piața Grote Markt din Hasselt este mereu animată de numeroasele cafenele și terase primitoare."
        ]
    },
    "city-tongeren": {
        "facts": [
            "Tongeren este cel mai vechi oraș din Belgia, fiind fondat de romani sub numele de Atuatuca Tungrorum.",
            "Orașul este faimos pentru piața sa de antichități de duminică, cea mai mare de acest tip din Benelux.",
            "Muzeul Gallo-Roman din localitate prezintă istoria bogată a regiunii din preistorie până în epoca romană.",
            "Statuia lui Ambiorix din piața centrală comemorează rezistența triburilor locale împotriva lui Iulius Cezar."
        ]
    },
    "city-lier": {
        "facts": [
            "Lier este supranumit 'orașul fețelor vesele', fiind cunoscut pentru cetățenii săi primitori și atmosfera calmă.",
            "Turnul Zimmer deține un ceas astronomic complex care arată timpul dar și mișcările planetelor.",
            "Beguinajul din Lier este unul dintre cele mai frumoase și liniștite astfel de cartiere din întreaga Belgie.",
            "Plimbările pe râul Nete și prin parcul orașului sunt ideale pentru relaxare în mijlocul naturii."
        ]
    },
    "city-geel": {
        "facts": [
            "Geel este faimos în întreaga lume pentru modelul său unic de îngrijire a persoanelor cu afecțiuni psihice.",
            "Sfânta Dymphna este patroana orașului, în cinstea căreia a fost ridicată o biserică impunătoare.",
            "Centrul orașului oferă numeroase cafenele și parcuri plăcute pentru relaxarea vizitatorilor.",
            "Geel este un centru educațional și tehnologic important în partea de nord a provinciei Antwerpen."
        ]
    },
    "city-sint-truiden": {
        "facts": [
            "Orașul este inima pomiculturii belgiene, fiind înconjurat de milioane de pomi fructiferi.",
            "Turnul Primăriei face parte din patrimoniul UNESCO și are o arhitectură gotică impresionantă.",
            "Ruinele abației Sfântul Trudo și turnul său amintesc de trecutul religios important al orașului.",
            "Numeroase piste de biciclete trec prin livezile și pe lângă castelele din jurul localității."
        ]
    },
    "hist-tournai-cathedral": {
        "desc": "Catedrala Notre-Dame din Tournai este unul dintre cele mai impresionante monumente religioase din Europa, fiind inclusă în patrimoniul mondial UNESCO. Această structură masivă se distinge prin cele cinci turnuri clopotniță care domină orizontul orașului și prin amestecul armonios de stiluri arhitecturale. Naosul romanic, construit în secolul al XII-lea, contrastează cu corul gotic ridicat ulterior, reflectând evoluția artei sacre medievale. Interiorul găzduiește comori de neprețuit, inclusiv racle placate cu aur și picturi de mari maeștri. Catedrala a suferit lucrări majore de restaurare pentru a-și păstra integritatea structurală și splendoarea decorativă. Vizitarea acestui edificiu oferă o perspectivă profundă asupra puterii spirituale și artistice a regiunii în Evul Mediu.",
        "facts": [
            "Catedrala este renumită pentru cele cinci turnuri ale sale, o caracteristică unică în arhitectura medievală.",
            "Edificiul combină în mod excepțional naosul romanic cu un cor gotic mult mai înalt.",
            "A fost inclusă în lista patrimoniului mondial UNESCO în anul 2000 pentru valoarea sa universală.",
            "Tezaurul catedralei conține racla Sfântului Eleutherius, o capodoperă a orfevreriei medievale.",
            "Orașul Tournai, unde se află catedrala, este unul dintre cele mai vechi orașe din Belgia, cu rădăcini romane."
        ]
    },
    "hist-mons-belfry": {
        "desc": "Clopotnița (Belfry) din Mons este singura de acest tip din Belgia construită în stil baroc, fiind un simbol de mândrie pentru locuitorii orașului. Ridicată în secolul al XVII-lea pe cel mai înalt punct al dealului castelului, structura de 87 de metri oferă o vizibilitate excelentă asupra întregii regiuni. Turnul adăpostește un carilon cu 49 de clopote care punctează viața cotidiană a orașului cu melodiile sale. UNESCO a recunoscut valoarea sa istorică și arhitecturală, incluzând-o pe lista monumentelor protejate. Mons Belfry nu a servit doar ca ceas public, ci și ca turn de observație pentru incendii și apărare. Arhitectura sa elegantă, cu detalii din piatră și un acoperiș distinctiv, o face una dintre cele mai frumoase clopotnițe din Flandra și Valonia.",
        "facts": [
            "Este singura clopotniță barocă din Belgia, deosebindu-se de celelalte turnuri medievale din regiune.",
            "Turnul are o înălțime de 87 de metri și adăpostește un carilon format din 49 de clopote de bronz.",
            "Face parte dintr-un grup de clopotnițe din Belgia și Franța incluse în patrimoniul mondial UNESCO.",
            "Din vârful turnului se poate vedea până la minele de cărbune din regiunea Borinage.",
            "Construcția a fost finalizată în 1672 pe locul fostului castel al conților de Hainaut."
        ]
    },
    "hist-beguinage-lier": {
        "desc": "Begunajul (Beguinage) din Lier este un ansamblu istoric fascinant, oferind o fereastră spre modul de viață comunitar al femeilor religioase din secolele trecute. Această 'mică cetate în oraș' este formată din străzi înguste pavate, case din cărămidă roșie și o biserică centrală, toate fiind înconjurate de ziduri de apărare. Fondat în secolul al XIII-lea, begunajul păstrează o atmosferă de liniște deplină și pietate, fiind astăzi unul dintre cele mai bine conservate din Flandra. Fiecare casă poartă numele unui sfânt sau al unei scene biblice, iar porțile de intrare monumentale marcau granița între lumea seculară și cea spirituală. UNESCO a inclus begunajul din Lier pe lista patrimoniului mondial pentru valoarea sa socială și arhitecturală unică. Este un loc ideal pentru plimbări meditațive și pentru a înțelege istoria religioasă complexă a regiunii.",
        "facts": [
            "Begunajul din Lier datează din secolul al XIII-lea și cuprinde aproximativ 160 de case istorice.",
            "Este inclus în patrimoniul mondial UNESCO ca parte a grupului de begunaje flamande.",
            "Biserica Sfânta Margareta din centrul complexului este un exemplu superb de arhitectură religioasă locală.",
            "Numele caselor sunt adesea inscripționate pe fațade, făcând referire la sfinți sau virtuți creștine.",
            "Astăzi, casele sunt locuite de persoane private, păstrând însă caracterul istoric și liniștea zonei."
        ]
    },
    "hist-fort-breendonk": {
        "desc": "Fortul Breendonk este un memorial național și un martor sumbru al atrocităților comise în timpul ocupației naziste a Belgiei. Construit inițial ca parte a centurii defensive a orașului Anvers la începutul secolului XX, fortul a fost transformat de naziști într-un lagăr de tranzit și tortură. Astăzi, site-ul este păstrat aproape integral în starea sa originală, oferind vizitatorilor o experiență educativă profundă și emoționantă despre ororile războiului. Coridoarele reci de beton, celulele de detenție și locul de execuție păstrează vie memoria celor care au suferit și au murit aici. Muzeul integrat prezintă mărturii ale supraviețuitorilor, fotografii și documente care atestă rezistența și suferința poporului belgian. Breendonk servește ca un avertisment permanent împotriva totalitarismului și un loc de onoare pentru eroii rezistenței.",
        "facts": [
            "Fortul a fost construit între 1906 și 1913 pentru a face parte din apărarea orașului Anvers.",
            "În timpul celui de-al Doilea Război Mondial, a fost transformat în lagăr de concentrare SS.",
            "Breendonk este unul dintre cele mai bine conservate lagăre naziste din Europa de Vest.",
            "Peste 3.500 de persoane au fost deținute aici între 1940 și 1944, mulți fiind ulterior trimiși la Auschwitz.",
            "Site-ul este astăzi Memorial Național, dedicat memoriei victimelor și educației istorice."
        ]
    },
    "land-gravensteen-ghent": {
        "facts": [
            "Castelul a fost sediul conților de Flandra timp de secole, simbolizând puterea lor asupra orașului.",
            "Structura actuală a fost inspirată de fortărețele cruciaților pe care contele Filip de Alsacia le-a văzut în Orient.",
            "În interiorul castelului se află o colecție impresionantă de arme medievale și armuri cavalerești.",
            "Vederile de pe zidurile exterioare oferă o perspectivă unică asupra centrului istoric al orașului Gent.",
            "Castelul a fost complet restaurat la sfârșitul secolului XIX după ce fusese folosit ca spațiu industrial."
        ]
    },
    "land-basilica-halle": {
        "desc": "Bazilica Sfântul Martin din Halle este un important centru de pelerinaj și un monument remarcabil al arhitecturii gotice din Brabant. Cunoscută pentru statuia sa făcătoare de minuni a Fecioarei Negre, biserica atrage credincioși de secole, fiind un loc de profundă semnificație spirituală. Arhitectura exterioară este impunătoare, cu detalii sculptate fin și un turn robust care domină piața centrală. În interior, vizitatorii pot admira vitralii colorate, altare baroce și o colecție valoroasă de obiecte de cult din argint și aur. Bazilica a jucat un rol central în istoria orașului, oferind protecție și speranță locuitorilor în perioadele de conflict. Este, de asemenea, renumită pentru carilonul său, care umple aerul cu sunete melodioase în timpul sărbătorilor locale. Halle rămâne o destinație esențială pentru cei interesați de arta sacră și tradițiile religioase belgiene.",
        "facts": [
            "Bazilica găzduiește statuia Fecioarei Negre din Halle, care datează din secolul al XIII-lea.",
            "Este un exemplu clasic de gotic brabantin, construită în mare parte în secolul al XIV-lea.",
            "Legenda spune că ghiulelele de tun expuse în biserică au fost prinse de Fecioara Maria în timpul unui asediu.",
            "Tezaurul bazilicii conține daruri prețioase oferite de regi și nobili de-a lungul secolelor.",
            "Orașul Halle este un punct de oprire important pe drumul de pelerinaj către Santiago de Compostela."
        ]
    },
    "land-basilica-holy-blood-bruges": {
        "desc": "Bazilica Sfântului Sânge din Bruges este unul dintre cele mai sacre locuri din Belgia, adăpostind o relicvă despre care se spune că conține sângele lui Iisus Hristos. Situată în piața Burg, bazilica este formată din două capele suprapuse: una inferioară romanică, dedicată Sfântului Vasile, și una superioară gotică, unde este păstrată relicva. Atmosfera din interior este una de liniște și venerație, capela superioară fiind decorată cu picturi murale vibrante și vitralii spectaculoase. În fiecare an, de Ziua Înălțării, relicva este purtată prin oraș în cadrul Procesiunii Sfântului Sânge, un eveniment major inclus în patrimoniul UNESCO. Vizitatorii pot urca scara monumentală renascentistă pentru a ajunge în capela principală și pentru a vedea tabernacolul unde este expus flaconul sacru. Bazilica reprezintă un simbol al credinței profunde și al continuității istorice a orașului Bruges.",
        "facts": [
            "Bazilica este formată dintr-o capelă inferioară romanică și una superioară în stil gotic.",
            "Relicva Sfântului Sânge a fost adusă la Bruges după a doua cruciadă, în secolul al XII-lea.",
            "Procesiunea Sfântului Sânge, organizată anual, este protejată de UNESCO ca patrimoniu imaterial.",
            "Scara principală de acces este o capodoperă a stilului renascentist, adăugată în secolul al XVI-lea.",
            "În fiecare vineri, relicva este expusă publicului pentru venerare în capela superioară."
        ]
    },
    "hist-abbey-villers-la-ville": {
        "desc": "Abația Villers-la-Ville este una dintre cele mai spectaculoase ruine monastice din Europa, oferind o incursiune fascinantă în lumea ordinului cistercian. Fondată în secolul al XII-lea, abația a fost odată un centru de putere spirituală și economică, găzduind sute de călugări. Astăzi, zidurile sale înalte fără acoperiș, arcadele gotice și grădinile liniștite creează o atmosferă romantică și plină de melancolie. Vizitatorii pot explora rămășițele bisericii imense, ale refectoriului și ale dormitoarelor, înțelegând structura complexă a vieții monahale. Site-ul găzduiește acum evenimente culturale, concerte și spectacole de teatru în aer liber, care prind viață printre pietrele vechi. Abația este înconjurată de păduri și coline verzi, fiind o destinație populară pentru plimbări și fotografie. Este un monument al trecerii timpului și al măreției arhitecturale medievale din Valonia.",
        "facts": [
            "Abația a fost fondată în 1146 de un grup de călugări veniți de la Clairvaux, sub îndrumarea Sfântului Bernard.",
            "La apogeul său, în secolul al XIII-lea, abația controla peste 10.000 de hectare de pământ.",
            "Biserica abației este una dintre cele mai mari realizări ale stilului gotic cistercian din regiune.",
            "Complexul a fost abandonat și parțial distrus în timpul Revoluției Franceze în 1796.",
            "Grădina de plante medicinale a abației a fost reconstituită și prezintă sute de specii folosite în Evul Mediu."
        ]
    },
    "forest-hallerbos": {
        "desc": "Hallerbos, cunoscut și sub numele de Pădurea Albastră, este una dintre cele mai magice destinații naturale din Belgia, situată la sud de Bruxelles. În fiecare an, la sfârșitul lunii aprilie și începutul lunii mai, solul pădurii este acoperit de un covor dens de zambile sălbatice (bluebells), creând un spectacol vizual de un albastru-violet ireal. Acest fenomen natural atrage mii de vizitatori și fotografi din întreaga lume, dornici să surprindă atmosfera de basm printre trunchiurile înalte de fag. Pădurea oferă numeroase trasee de drumeție care sunt bine marcate pentru a proteja flora fragilă de sub copaci. Pe lângă spectacolul florilor, Hallerbos este un habitat important pentru căprioare, vulpi și numeroase specii de păsări. Este locul ideal pentru o evadare din agitația capitalei și pentru a experimenta liniștea naturii în cea mai pură formă a sa. Respectarea regulilor de vizitare este esențială pentru a păstra acest ecosistem unic pentru generațiile viitoare.",
        "facts": [
            "Fenomenul zambilelor sălbatice durează de obicei doar două săptămâni pe an, în funcție de vreme.",
            "Pădurea se întinde pe aproximativ 550 de hectare și este o rămășiță a vechii păduri carbonifere.",
            "Fagul este specia dominantă de copac, frunzișul său crud de primăvară completând perfect culoarea florilor.",
            "Există trasee speciale pentru bicicliști și călăreți, separate de potecile destinate pietonilor.",
            "Vizitatorilor le este strict interzis să părăsească potecile pentru a nu distruge bulbii florilor."
        ]
    },
    "forest-sonian-forest": {
        "desc": "Pădurea Sonian (Forêt de Soignes) este un imens plămân verde care mărginește partea de sud a orașului Bruxelles, oferind un spațiu vast pentru recreere și conservare. Această 'catedrală de fagi' este renumită pentru arborii săi seculari care se ridică drept spre cer, creând un peisaj forestier de o rară frumusețe și solemnitate. Pădurea este o rămășiță a vechiului codru care acoperea odinioară mari părți din vestul Europei și este inclusă în patrimoniul mondial UNESCO pentru pădurile sale de fagi primare. Numeroase trasee de drumeție, piste de biciclete și poteci ecvestre străbat zona, făcând-o locul preferat al locuitorilor capitalei pentru sport și relaxare. Biodiversitatea este remarcabilă, pădurea adăpostind specii variate de mamifere, păsări și ciuperci rare. În interiorul său se află și câteva iazuri pitorești și foste situri monastice care adaugă valoare istorică peisajului natural. Protejarea acestui ecosistem este vitală pentru calitatea aerului și echilibrul ecologic al regiunii bruxelleze.",
        "facts": [
            "Pădurea acoperă peste 4.400 de hectare, întinzându-se pe teritoriul tuturor celor trei regiuni ale Belgiei.",
            "Anumite porțiuni ale pădurii sunt incluse în patrimoniul mondial UNESCO ca păduri de fagi seculare.",
            "Peste 70% din arborii pădurii sunt fagi, mulți dintre aceștia având o vechime de peste 200 de ani.",
            "Pădurea a fost mult timp un teren de vânătoare exclusiv pentru ducii de Brabant și familia regală.",
            "Există mai multe centre de vizitare (portes d'accès) care oferă informații despre ecologia și traseele zonei."
        ]
    },
    "lake-lac-de-l-eau-d-heure": {
        "desc": "Lacurile de la Eau d'Heure formează cel mai mare complex acvatic din Belgia, fiind o destinație majoră pentru sporturi nautice și recreere în aer liber. Cele cinci lacuri artificiale, create prin construirea unor baraje impresionante, oferă peste 600 de hectare de luciu de apă și kilometri de țărmuri pitorești. Regiunea este un paradis pentru iubitorii de navigație, windsurfing, scufundări și înot, având facilități moderne și plaje amenajate. Pe lângă activitățile pe apă, vizitatorii se pot bucura de trasee de ciclism, parcuri de aventură și zone de picnic în pădurile din jur. Barajul de la Plate Taille este cel mai mare din țară și poate fi vizitat, oferind o perspectivă tehnică interesantă și vederi panoramice de la înălțime. Atmosfera este ideală pentru vacanțe în familie, zona având numeroase opțiuni de cazare, de la campinguri la sate de vacanță moderne. Eau d'Heure reprezintă un exemplu reușit de îmbinare a utilității hidroenergetice cu potențialul turistic natural.",
        "facts": [
            "Este cel mai mare domeniu nautic din Belgia, format din 5 lacuri și o suprafață totală de 1.800 de hectare.",
            "Barajul de la Plate Taille este singurul din Belgia care poate fi vizitat în interiorul structurii sale.",
            "Regiunea oferă peste 100 de kilometri de trasee de drumeție și ciclism în jurul malurilor.",
            "Turnul de observație de la baraj oferă o vedere panoramică asupra lacurilor de la o înălțime de 107 metri.",
            "Zona găzduiește Natura Parc, un parc de aventură renumit pentru tirolienele sale deasupra apei."
        ]
    },
    "river-leie": {
        "desc": "Râul Leie (sau Lys) este cunoscut drept 'Râul de Aur' al Flandrei, având o importanță istorică crucială pentru industria textilă a regiunii. Malurile sale sunt presărate cu orașe de artă precum Gent și Kortrijk, oferind peisaje fluviale care au inspirat generații de pictori impresioniști. În prezent, Leie este o cale navigabilă populară pentru croaziere de agrement și ambarcațiuni private, legând peisajele rurale idilice de centrele urbane vibrante. Porțiunea râului care traversează orașul Gent este deosebit de spectaculoasă, trecând pe lângă fațadele medievale de la Graslei și Korenlei. De-a lungul cursului său, vizitatorii pot găsi muzee de artă, grădini superbe și restaurante rafinate pe malul apei. Râul joacă, de asemenea, un rol important în ecosistemul local, oferind coridoare verzi pentru biodiversitate. Plimbările cu bicicleta de-a lungul canalelor și brațelor râului Leie sunt printre cele mai îndrăgite activități în Flandra.",
        "facts": [
            "Râul a fost supranumit 'Râul de Aur' deoarece apa sa era ideală pentru înmuierea inului, o materie primă de bază.",
            "Izvorăște din nordul Franței și se varsă în râul Schelde în centrul orașului Gent.",
            "Valea râului Leie a fost centrul Școlii de la Latem, o importantă mișcare artistică flamandă.",
            "Multe secțiuni ale râului au fost canalizate pentru a facilita transportul modern de mărfuri.",
            "În Gent, râul trece chiar pe sub Biserica Sfântului Mihail, creând un cadru urban unic."
        ]
    },
    "river-dyle": {
        "desc": "Râul Dyle (sau Dijle) este o apă curgătoare liniștită care traversează inima Brabantului și orașul universitar Leuven, modelând peisajul și istoria locală. În Leuven, râul se ramifică în mai multe brațe, trecând pe lângă parcuri, colegii universitare și vechiul Beguinaj, adăugând un farmec aparte orașului. Malurile râului au fost transformate în zone verzi de promenadă, unde studenții și turiștii se relaxează în mijlocul naturii. Dyle este, de asemenea, renumit pentru rezervațiile naturale situate de-a lungul cursului său, cum ar fi mlaștinile de la Mechelen, care adăpostesc numeroase specii de păsări. Deși nu este un râu mare, a jucat un rol strategic în apărarea orașelor și în dezvoltarea morilor de apă în perioada preindustrială. Astăzi, explorarea râului cu caiacul sau pe potecile de pe mal este o activitate recreativă populară. Dyle reprezintă o legătură vitală între zonele urbane dense și spațiile naturale protejate din centrul Belgiei.",
        "facts": [
            "Râul Dyle trece prin centrul orașului Leuven, unde brațele sale înconjoară Marele Beguinaj.",
            "Valea râului la sud de Leuven este o zonă naturală protejată, importantă pentru păsările migratoare.",
            "În orașul Mechelen, râul a fost parțial redeschis în centrul istoric pentru a îmbunătăți estetica urbană.",
            "Dyle are o lungime de aproximativ 86 de kilometri și se varsă în râul Rupel.",
            "Râul a fost martorul unor bătălii importante în timpul ambelor Războaie Mondiale."
        ]
    },
    "island-ile-d-yvoir": {
        "desc": "Île d'Yvoir este singura insulă din Belgia destinată exclusiv turismului și recreerii, fiind situată pitoresc pe râul Meuse, între Namur și Dinant. Accesibilă doar cu un mic feribot, insula oferă un refugiu de liniște și distracție, având facilități pentru înot, sporturi nautice și picnicuri în familie. Este un loc ideal pentru a petrece o zi de vară, având plaje amenajate, tobogane cu apă și zone de joacă pentru copii. Insula are o vegetație bogată și oferă vederi frumoase asupra stâncilor abrupte care mărginesc valea râului Meuse. Deși mică, Île d'Yvoir are o atmosferă de vacanță autentică, fiind o destinație foarte populară pentru localnici și turiștii care explorează regiunea Ardenilor. Vizitatorii pot închiria bărci cu vâsle sau pot savura o băutură la terasa de pe malul apei, bucurându-se de răcoarea râului. Este un exemplu unic de utilizare recreativă a unei insule fluviale în Belgia.",
        "facts": [
            "Este singura insulă din Belgia amenajată integral ca centru de recreere și divertisment.",
            "Accesul pe insulă se face exclusiv cu ajutorul unei ambarcațiuni care traversează râul Meuse.",
            "Insula dispune de o zonă specială de îmbăiere supravegheată în apele naturale ale râului.",
            "Locația este foarte populară pentru familiile cu copii datorită parcurilor de joacă și a terenurilor de sport.",
            "Se află la mică distanță de orașul Dinant și de faimoasele grădini de la Annevoie."
        ]
    },
    "agri-haspengouw-fruit-belt": {
        "desc": "Regiunea Haspengouw, situată în sudul provinciei Limburg, este centrul incontestabil al pomiculturii belgiene, fiind adesea comparată cu Provence pentru frumusețea sa rurală. Peisajul este definit de dealuri blânde acoperite de livezi nesfârșite de meri, peri și cireși, care oferă un spectacol vizual deosebit în timpul înfloririi de primăvară. Această zonă nu este doar o putere agricolă, ci și o destinație turistică majoră pentru cicliști și iubitorii de natură, având o rețea extinsă de piste bine întreținute. Orașe precum Sint-Truiden și Tongeren servesc drept baze excelente pentru explorarea regiunii, oferind și o bogată moștenire istorică și religioasă. Vizitatorii pot degusta produse locale direct de la ferme, inclusiv sucuri, siropuri și cidru artizanal. În timpul toamnei, perioada recoltatului aduce o atmosferă plină de viață și evenimente dedicate roadelor pământului. Haspengouw reprezintă îmbinarea perfectă între tradiția agricolă, peisaje naturale pitorești și ospitalitatea flamandă.",
        "facts": [
            "Haspengouw produce peste jumătate din cantitatea totală de fructe a Belgiei.",
            "Regiunea este celebră pentru bisericile sale mici și castelele medievale împrăștiate printre livezi.",
            "Pista de biciclete 'Cycling through the trees' din apropiere este o atracție renumită în regiune.",
            "Solul bogat în loess face ca această zonă să fie una dintre cele mai fertile din întreaga Europă de Nord.",
            "Multe ferme locale oferă tururi ghidate pentru a explica tehnicile moderne de cultivare a fructelor."
        ]
    },
    "agri-hageland-vineyards": {
        "desc": "Hageland, o regiune deluroasă situată în estul Brabantului Flamand, este inima renașterii viticulturii în Belgia, fiind renumită pentru vinurile sale cu denumire de origine protejată. Dealurile formate din gresie bogată în fier oferă condiții ideale pentru cultivarea viței-de-vie, în special pentru soiurile albe care produc vinuri proaspete și aromate. Traseele de drumeție și ciclism străbat podgoriile terasate, oferind panorame superbe asupra satelor pitorești și a văilor verzi. Pe lângă vin, Hageland este cunoscut pentru satele sale liniștite, vechile mori de vânt și livezile de pomi fructiferi care completează tabloul agricol. Orașul Aarschot și abația din Averbode sunt puncte de reper importante în zonă, adăugând o dimensiune culturală vizitei. Viticultorii locali sunt adesea deschiși pentru degustări, prezentând cu mândrie evoluția calitativă a vinului belgian în ultimele decenii. Hageland este o destinație autentică pentru cei care caută relaxare, gastronomie locală și peisaje rurale neatinse de turismul de masă.",
        "facts": [
            "Hageland a fost prima regiune din Belgia care a primit statutul oficial de denumire de origine pentru vin.",
            "Solul specific, numit piatră de fier (ijzerzandsteen), conferă vinurilor locale un caracter mineral unic.",
            "Regiunea găzduiește numeroase evenimente dedicate vinului, în special în perioada culesului din septembrie.",
            "Multe dintre podgorii sunt situate pe versanți sudici însoriți, protejați de vânturile reci din nord.",
            "Pe lângă vin, zona este cunoscută și pentru producția artizanală de brânzeturi și sucuri de fructe."
        ]
    },
    "agri-pajottenland-breweries": {
        "desc": "Pajottenland, situat la vest de Bruxelles, este regiunea unică în lume unde se produce berea Lambic, prin procesul de fermentație spontană. Acest peisaj deluros și fertil, adesea numit 'Toscania Flandrei', oferă condițiile naturale și microflora specifice necesare pentru crearea berilor Gueuze și Kriek. Micro-organismele sălbatice din aerul de pe valea râului Senne sunt capturate în timpul răcirii mustului de bere, rezultând băuturi cu un profil gustativ complex și acidulat. Vizitatorii pot parcurge rutele berii, vizitând berării istorice unde butoaiele de lemn sunt folosite pentru maturarea berii timp de mai mulți ani. Pe lângă berării, Pajottenland impresionează prin satele sale fermecătoare, fermele fortificate și castelele precum cel din Gaasbeek. Este o regiune unde timpul pare să curgă mai lent, păstrând tradiții meșteșugărești care nu s-au schimbat de secole. Pentru pasionații de gastronomie și cultură autentică, Pajottenland este o destinație esențială în Belgia.",
        "facts": [
            "Pajottenland este singura regiune din lume unde berea Lambic poate fi produsă prin fermentație spontană.",
            "Berea Kriek, o varietate de Lambic, este realizată prin adăugarea cireșelor întregi în procesul de maturare.",
            "Castelul Gaasbeek, situat în inima regiunii, găzduiește colecții de artă și grădini spectaculoase.",
            "Peisajul regiunii a servit ca inspirație pentru multe dintre picturile celebrului Pieter Bruegel cel Bătrân.",
            "Multe berării locale funcționează de peste un secol, folosind aceleași metode tradiționale de producție."
        ]
    },
    "kid-bobbejaanland": {
        "desc": "Bobbejaanland este unul dintre cele mai îndrăgite parcuri de distracții din Belgia, fiind fondat de celebrul cântăreț country Bobbejaan Schoepen în inima regiunii Kempen. Parcul este renumit pentru atmosfera sa prietenoasă și pentru marea varietate de atracții care se adresează tuturor categoriilor de vârstă, de la carusele pentru cei mici la roller coastere pline de adrenalină. Unul dintre punctele forte ale parcului este numărul mare de atracții acoperite, ceea ce îl face o destinație excelentă chiar și în zilele cu vreme incertă. Vizitatorii se pot bucura de roller coastere moderne precum Fury sau de experiențe virtuale imersive, dar și de spectacole live distractive. Parcul este situat într-o zonă verde și relaxantă, cu mult spațiu pentru odihnă între aventuri. Bobbejaanland a reușit să își păstreze un caracter unic, îmbinând inovația tehnologică a atracțiilor cu o moștenire culturală locală. Este destinația ideală pentru o zi plină de râsete și aventură în familie.",
        "facts": [
            "Parcul a fost deschis în 1961 de către Bobbejaan Schoepen, un artist belgian foarte popular.",
            "Roller coasterul 'Fury' permite pasagerilor să voteze direcția în care vor să parcurgă traseul.",
            "Bobbejaanland este cunoscut pentru numeroasele sale atracții de apă, ideale pentru zilele toride de vară.",
            "Parcul dispune de una dintre cele mai mari zone de distracții acoperite (indoor) din întreaga Europă.",
            "Este situat în Lichtaart, fiind foarte ușor accesibil din orașele Anvers și Hasselt."
        ]
    },
    "kid-walibi-belgium": {
        "desc": "Walibi Belgium este un parc de distracții legendar situat în Wavre, aproape de Bruxelles, fiind una dintre destinațiile preferate pentru familiile din întreaga țară. Parcul este faimos pentru roller coasterele sale spectaculoase, inclusiv iconicul Kondaa, care este cel mai înalt și cel mai rapid din Benelux. Walibi oferă o experiență completă, cu zone tematice variate, atracții acvatice palpitante și numeroase opțiuni de divertisment pentru copii mici. Adiacent parcului se află Aqualibi, un parc acvatic acoperit cu temperatură tropicală, tobogane spectaculoase și bazine cu valuri. Atmosfera din Walibi este vibrantă și plină de energie, fiind marcată de prezența simpaticului cangur care este mascota parcului. Indiferent dacă ești un căutător de adrenalină sau cauți distracție relaxată în familie, Walibi oferă ceva pentru fiecare. Modernizările recente au transformat parcul într-o destinație la standarde internaționale, cu decoruri imersive și tehnologie de ultimă oră.",
        "facts": [
            "Kondaa, inaugurat în 2021, deține mai multe recorduri de viteză și înălțime în regiunea Benelux.",
            "Parcul a fost fondat în 1975, numele 'Walibi' provenind de la primele litere ale localităților Wavre, Limal și Bierges.",
            "Aqualibi este situat chiar lângă parc și oferă o experiență acvatică tropicală pe tot parcursul anului.",
            "Zona 'Karma World' este inspirată de cultura indiană și oferă experiențe interactive unice.",
            "Walibi Belgium organizează unele dintre cele mai mari și mai înspăimântătoare evenimente de Halloween din țară."
        ]
    },
    "kid-pairi-daiza": {
        "desc": "Pairi Daiza nu este doar o grădină zoologică, ci un 'Grădină a Lumii' spectaculoasă, situată pe domeniul unei foste abații cisterciene în Valonia. Parcul este renumit pentru reconstrucția fidelă a diverselor habitate și culturi din întreaga lume, de la templele chinezești la satele africane și peisajele arctice. Pairi Daiza găzduiește o varietate incredibilă de animale, inclusiv faimoșii urși panda uriași, elefanți, gorile și tigri albi, toți trăind în decoruri de o frumusețe rară. Vizitatorii pot explora ruinele abației Cambron, se pot plimba prin grădini botanice premiate și pot admira arhitectura autentică adusă direct din țările de origine. Experiența este una imersivă, oferind și posibilitatea de a înnopta în interiorul parcului, cu vedere directă spre animale. Pairi Daiza a fost votat de mai multe ori ca fiind cel mai bun parc zoologic din Europa, datorită angajamentului său pentru conservare și bunăstarea animalelor. Este o destinație magică ce combină educația, natura și aventura într-un mod unic în lume.",
        "facts": [
            "Parcul se întinde pe 55 de hectare și găzduiește peste 7.000 de animale din toate colțurile lumii.",
            "Pairi Daiza este unul dintre puținele locuri din Europa unde pot fi văzuți urși panda uriași.",
            "Grădina Chineză din interiorul parcului este cea mai mare de acest tip din Europa, construită de meșteri chinezi.",
            "Parcul a fost amenajat pe locul vechii abații cisterciene Cambron, păstrând multe dintre ruinele istorice.",
            "A fost votată constant ca 'Cea mai bună grădină zoologică din Europa' de către entități de profil."
        ]
    },
    "kid-bellewaerde": {
        "desc": "Bellewaerde, situat lângă orașul istoric Ypres, este un parc unic care combină armonios grădina zoologică, parcul de distracții și natura luxuriantă. Vizitatorii pot experimenta emoția roller coasterelor și a atracțiilor acvatice, dar se pot bucura și de observarea animalelor exotice precum lei, tigri, girafe și lemuri. Parcul este renumit pentru peisajele sale verzi, cu numeroase flori și arbori bătrâni care oferă umbră și o atmosferă relaxantă. Bellewaerde oferă spectacole live impresionante și experiențe educaționale despre conservarea speciilor, fiind ideal pentru familiile cu copii de toate vârstele. Recent, parcul a inaugurat Bellewaerde Aquapark, un parc acvatic modern care completează oferta de distracție cu tobogane captivante și zone de relaxare. Locația sa în Flandra de Vest îl face ușor de vizitat în combinație cu siturile istorice din jurul orașului Ypres. Bellewaerde reușește să ofere o zi variată, unde aventura se întâlnește cu dragostea pentru animale și respectul pentru mediul înconjurător.",
        "facts": [
            "Bellewaerde este cel mai vechi parc de distracții funcțional din Belgia, fiind deschis în 1954.",
            "Parcul permite vizitatorilor să vadă animalele de foarte aproape, uneori chiar din trenulețe sau bărci.",
            "Roller coasterul 'Dawson Duel' este o atracție unică de tip sanie (alpine coaster) construită pe un deal artificial.",
            "Aquapark-ul adiacent este complet acoperit și menține o temperatură constantă de 34 de grade Celsius.",
            "Parcul este situat pe un vechi câmp de luptă din Primul Război Mondial, oferind o perspectivă istorică zonei."
        ]
    },
    "nat-meuse-river": {
        "desc": "Râul Meuse (sau Maas) este una dintre cele mai importante și pitorești căi navigabile din Europa, străbătând estul și sudul Belgiei într-un cadru natural spectaculos. Valea râului Meuse în Valonia este celebră pentru versanții săi abrupți de calcar, citadelele impunătoare care veghează de pe stânci și orașele istorice precum Namur, Dinant și Liège. Râul a fost timp de secole o axă comercială și strategică vitală, bogăția acumulată fiind vizibilă în castelele și abațiile superbe care îi mărginesc malurile. Astăzi, Meuse este o destinație majoră pentru turismul fluvial, oferind croaziere relaxante, trasee de caiac și poteci excelente pentru ciclism de-a lungul apei. Peisajul se schimbă de la văile sălbatice și împădurite de lângă granița cu Franța la zonele industriale dinamice de lângă Liège. Meuse nu este doar o resursă economică, ci și un simbol al identității valone, unind peisaje naturale de o frumusețe rară cu o istorie europeană densă.",
        "facts": [
            "Izvorăște din Franța, traversează Belgia și se varsă în Marea Nordului pe teritoriul Țărilor de Jos.",
            "Porțiunea dintre Namur și Dinant este considerată una dintre cele mai frumoase văi fluviale din Europa.",
            "Râul Meuse este navigabil pentru nave comerciale mari până în orașul Liège.",
            "Numeroase fortărețe, numite 'Citadelele de pe Meuse', au fost construite pentru a controla trecătorile râului.",
            "Valea râului găzduiește numeroase peșteri și formațiuni stâncoase apreciate de alpiniști."
        ]
    },
    "nat-ourthe": {
        "desc": "Valea Ourthe este una dintre cele mai sălbatice și fascinante regiuni din Ardenii belgieni, oferind peisaje de o frumusețe naturală brută. Râul Ourthe șerpuiește printre dealuri înalte și păduri dese, creând meandre spectaculoase și văi adânci care sunt ideale pentru activități în aer liber. Orașul Durbuy, supranumit cel mai mic oraș din lume, și localitatea La Roche-en-Ardenne sunt perlele acestei văi, atrăgând turiștii cu farmecul lor medieval. Regiunea este un paradis pentru iubitorii de caiac, drumeții și mountain biking, având trasee care oferă vederi panoramice uluitoare asupra cursului apei. Ourthe este cunoscut și pentru bogăția sa în pește, fiind o destinație preferată pentru pescuitul sportiv. Pe parcursul râului pot fi descoperite ruine de castele cocoțate pe stânci și sate de piatră care par încremenite în timp. Valea Ourthe reprezintă esența Ardenilor, combinând aventura, liniștea naturii și o istorie locală bogată.",
        "facts": [
            "Ourthe este cel mai lung râu care curge integral pe teritoriul regiunii Valonia.",
            "Meandrul de la La Roche-en-Ardenne, dominat de ruinele castelului feudal, este un simbol al regiunii.",
            "Râul este format prin confluența a două brațe: Ourthe Occidentală și Ourthe Orientală.",
            "Valea găzduiește numeroase peșteri naturale, cele mai faimoase fiind în zona Hotton.",
            "Regiunea este celebră pentru gastronomia sa bazată pe produse de râu și vânat."
        ]
    },
    "nat-semois-valley": {
        "desc": "Valea Semois oferă probabil cele mai fotogenice și autentice peisaje din întreaga Belgie, fiind situată în extremitatea sudică a Ardenilor. Râul Semois este renumit pentru buclele sale incredibil de strânse, care au săpat văi adânci în platoul ardenian, creând peninsule stâncoase și panorame spectaculoase precum 'Frahan' sau 'Mormântul Uriașului'. Această zonă a rămas foarte autentică, cu sate de piatră bine conservate unde tradiția cultivării tutunului este încă vizibilă prin vechile șoproane de uscare. Pădurile care mărginesc râul sunt vaste și oferă un sentiment de izolare și liniște, fiind traversate de unele dintre cele mai frumoase trasee de drumeție din țară. Orașul Bouillon, cu citadela sa legendară, este centrul istoric al văii, oferind o perspectivă asupra epocii cruciadelor. Valea Semois este destinația perfectă pentru cei care caută o comuniune profundă cu natura și vor să descopere o parte a Belgiei neschimbată de modernitate.",
        "facts": [
            "Valea Semois este inclusă în Parcul Național Semois, înființat pentru a proteja biodiversitatea unică.",
            "Traseul 'Echelles de Rochehaut' este una dintre cele mai aventuroase drumeții, implicând urcarea pe scări metalice.",
            "Râul Semois se varsă în Meuse pe teritoriul Franței, după ce străbate inima Ardenilor belgieni.",
            "Localitatea Chassepierre, situată în vale, găzduiește anual un faimos festival de teatru de stradă.",
            "Mormântul Uriașului (Tombeau du Géant) este considerat unul dintre cele mai frumoase peisaje naturale din Belgia."
        ]
    },
    "hist-ypres": {
        "desc": "Ypres (sau Ieper) este un oraș cu o semnificație istorică imensă, fiind unul dintre centrele luptelor sângeroase de pe frontul de vest în timpul Primului Război Mondial. Orașul a fost aproape complet distrus în timpul conflictului, dar a fost reconstruit cu o minuțiozitate incredibilă după planurile sale originale medievale. Inima orașului este dominată de imensa Hală a Pânzelor (Cloth Hall), care găzduiește acum celebrul muzeu 'In Flanders Fields'. Poarta Menin (Menin Gate) este un monument comemorativ emoționant, unde în fiecare seară la ora 20:00 se sună 'Last Post' în onoarea soldaților Commonwealth-ului care și-au pierdut viața. Ypres este astăzi un oraș al păcii și al memoriei, atrăgând vizitatori din întreaga lume care vor să onoreze trecutul. Împrejurimile orașului sunt presărate cu cimitire militare, monumente și bunkere care alcătuiesc peisajul 'Flanders Fields'. Pe lângă istoria sa militară, Ypres oferă o atmosferă flamandă plăcută, cu ciocolaterii rafinate și o piață centrală superbă.",
        "facts": [
            "Hala Pânzelor din Ypres a fost una dintre cele mai mari clădiri comerciale din Europa medievală.",
            "Ceremonia 'Last Post' de la Poarta Menin are loc neîntrerupt din 1928, cu excepția perioadei ocupației germane.",
            "Ypres este singurul loc din lume unde se organizează 'Kattenstoet' (Festivalul Pisicilor), o paradă unică la fiecare trei ani.",
            "Orașul a fost reconstruit folosind fonduri din despăgubirile de război, respectând arhitectura sa istorică.",
            "Numele orașului este legat de introducerea gazelor toxice pe câmpul de luptă, iperita fiind numită după el."
        ]
    },
    "hist-bastogne": {
        "desc": "Bastogne este un oraș-simbol al rezistenței și eroismului din timpul celui de-al Doilea Război Mondial, fiind punctul central al celebrei Bătălii de la Bulge. În iarna anului 1944, orașul a fost complet încercuit de trupele germane, dar divizia 101 aeropurtată americană a refuzat să se predea, răspunzând cu celebrul 'Nuts!' la cererea de capitulare. Memorialul Mardasson, situat la marginea orașului, onorează sacrificiul soldaților americani care au eliberat regiunea. Muzeul Bastogne War Rooms și centrul de interpretare oferă o perspectivă imersivă asupra condițiilor brutale de luptă din acea iarnă. Astăzi, Bastogne este un loc de pelerinaj pentru veterani și pasionații de istorie, dar și un punct de pornire excelent pentru a explora pădurile și satele pitorești din Ardeni. Atmosfera orașului este una de recunoștință și memorie vie, reflectată în monumentele și tancurile expuse în piețele publice. Bastogne rămâne un pilon al memoriei transatlantice și un exemplu de rezistență în fața opresiunii.",
        "facts": [
            "Memorialul Mardasson are forma unei stele cu cinci colțuri și conține numele tuturor statelor americane de atunci.",
            "Răspunsul generalului McAuliffe, 'Nuts!', a devenit una dintre cele mai faimoase replici din istoria militară.",
            "În pădurea Bois Jacques din apropiere se pot vedea și astăzi găurile de tragere (foxholes) folosite de soldați.",
            "Bastogne este, de asemenea, punctul de întoarcere al celebrei curse cicliste Liège-Bastogne-Liège.",
            "Piața centrală a orașului poartă numele generalului McAuliffe și găzduiește un tanc Sherman original."
        ]
    },
    "sight-galeries-stroom": {
        "desc": "Galeriile Regale Saint-Hubert din Bruxelles reprezintă unul dintre cele mai elegante și istorice pasaje comerciale din Europa, fiind un simbol al luxului și rafinamentului capitalei belgiene. Inaugurate în 1847, aceste galerii acoperite cu un acoperiș spectaculos din sticlă și fier au precedat alte pasaje celebre precum cele din Milano sau Sankt Petersburg. Complexul este împărțit în trei secțiuni: Galeria Regelui, Galeria Reginei și Galeria Prințului, fiecare adăpostind magazine de lux, ciocolaterii artizanale faimoase și buticuri de modă. Arhitectura neoclasică, cu coloane fine și detalii ornamentale, creează o atmosferă aristocratică ce transportă vizitatorii în secolul al XIX-lea. Pe lângă cumpărături, galeriile găzduiesc teatre, cinematografe și cafenele istorice unde scriitori celebri precum Victor Hugo obișnuiau să își petreacă timpul. Este locul ideal pentru o plimbare relaxată indiferent de vreme, oferind o experiență culturală și vizuală de neuitat în inima orașului, la doar câțiva pași de Grand Place.",
        "facts": [
            "Galeriile Regale Saint-Hubert au fost primele pasaje comerciale de mari dimensiuni construite în Europa.",
            "Arhitectul Jean-Pierre Cluysenaar a proiectat galeriile pentru a înlocui un cartier de străzi insalubre și înghesuite.",
            "Inaugurarea a fost făcută personal de regele Leopold I și de fiii săi în vara anului 1847.",
            "Aici s-a deschis prima ciocolaterie Neuhaus, locul unde a fost inventată pralinea în 1912.",
            "Galeriile sunt clasate ca monument istoric și sunt o destinație turistică de top în Bruxelles."
        ]
    },
    "sight-chocolate-museum-bruges": {
        "desc": "Choco-Story, Muzeul Ciocolatei din Bruges, oferă o incursiune delicioasă și educativă în istoria de peste 4.000 de ani a ciocolatei, de la originile sale mayașe până la rafinamentul belgian de astăzi. Muzeul este găzduit într-o clădire istorică fermecătoare și prezintă procesul complet de fabricare a ciocolatei, de la recoltarea boabelor de cacao la transformarea lor în praline fine. Vizitatorii pot vedea o colecție impresionantă de obiecte istorice legate de consumul de cacao, inclusiv cești antice și mașinării vechi. Unul dintre punctele culminante ale vizitei este demonstrația live făcută de un maestru ciocolatier, urmată, desigur, de o degustare de produse proaspete. Muzeul pune un accent deosebit pe rolul crucial pe care Belgia l-a jucat în dezvoltarea și popularizarea ciocolatei de înaltă calitate. Este o experiență interactivă potrivită pentru toate vârstele, celebrând una dintre cele mai faimoase și iubite exporturi culturale ale Belgiei. Choco-Story reușește să combine rigoarea istorică cu plăcerea senzorială într-un mod unic.",
        "facts": [
            "Muzeul este situat în 'Huis de Croon', o clădire care datează din secolul al XV-lea și a fost inițial o tavernă.",
            "Colecția muzeului cuprinde peste 1.000 de obiecte istorice legate de cacao și ciocolată.",
            "Vizitatorii pot învăța despre beneficiile ciocolatei pentru sănătate și despre diferitele varietăți de boabe de cacao.",
            "Choco-Story are filiale deschise de proprietarii săi belgieni în mai multe orașe din lume, inclusiv în Mexic.",
            "La finalul turului, fiecare vizitator are oportunitatea de a degusta ciocolată belgiană artizanală proaspăt preparată."
        ]
    },
    "city-antwerp": {
        "desc": "Anvers (Antwerpen) este al doilea oraș ca mărime din Belgia și unul dintre cele mai dinamice și fascinante centre urbane din Europa. Cunoscut drept capitala mondială a diamantelor și un hub major al modei internaționale, orașul îmbină armonios o istorie maritimă glorioasă cu un spirit creativ contemporan. Inima orașului este Grote Markt, cu primăria sa renascentistă și casele breslelor bogat ornamentate, în timp ce catedrala Notre-Dame adăpostește capodopere ale lui Peter Paul Rubens. Portul din Anvers este unul dintre cele mai mari din lume, alimentând prosperitatea orașului și conferindu-i un caracter cosmopolit. Vizitatorii pot explora cartierul modei, pot vizita casa memorială a lui Rubens sau pot admira gara centrală, considerată una dintre cele mai frumoase din lume. Anvers este, de asemenea, o destinație gastronomică de top, faimoasă pentru ciocolata sa, berea locală și restaurantele inovatoare. Atmosfera orașului este efervescentă, oferind o experiență urbană densă, unde arta, comerțul și cultura se întâlnesc la fiecare pas.",
        "facts": [
            "Anvers este centrul mondial al comerțului cu diamante, aproximativ 80% din diamantele brute trecând prin acest oraș.",
            "Gara Centrală din Anvers este supranumită 'Catedrala Feroviară' datorită arhitecturii sale monumentale.",
            "Orașul este locul de naștere și de creație al celebrului pictor baroc Peter Paul Rubens.",
            "Anvers găzduiește 'Antwerp Six', un grup de designeri care au revoluționat moda în anii 1980.",
            "ZOO Antwerpen, situată chiar lângă gară, este una dintre cele mai vechi și frumoase grădini zoologice din lume."
        ]
    }
}

def update_poi_block(match):
    block_content = match.group(0)
    poi_id_match = re.search(r"id:\s*\"([^\"]+)\"", block_content)
    if not poi_id_match:
        return block_content
    
    poi_id = poi_id_match.group(1)
    if poi_id not in ro_data:
        return block_content

    data = ro_data[poi_id]
    
    # Update descriptionAdvanced
    if "desc" in data:
        desc_adv_match = re.search(r"descriptionAdvanced:\s*\{([^\}]*)\}", block_content, re.DOTALL)
        if desc_adv_match:
            inner = desc_adv_match.group(1)
            # Check if ro is empty or missing
            ro_match = re.search(r"ro:\s*\"([^\"]*)\"", inner)
            if not ro_match or ro_match.group(1) == "":
                new_ro = f"ro: \"{data['desc']}\""
                if ro_match:
                    new_inner = inner.replace(ro_match.group(0), new_ro)
                else:
                    # Append ro field
                    # Try to find a good place, e.g. after en: "..."
                    en_match = re.search(r"en:\s*\"[^\"]*\"", inner)
                    if en_match:
                        new_inner = inner.replace(en_match.group(0), en_match.group(0) + f",\n      {new_ro}")
                    else:
                        new_inner = inner + f",\n      {new_ro}"
                block_content = block_content.replace(inner, new_inner)
        else:
            # descriptionAdvanced is missing, add it before facts or factsAdvanced or image
            insertion_point = re.search(r"(facts:|factsAdvanced:|image:)", block_content)
            if insertion_point:
                new_field = f"descriptionAdvanced: {{\n      de: \"\",\n      hu: \"\",\n      ro: \"{data['desc']}\",\n      en: \"\"\n    }},\n    "
                block_content = block_content[:insertion_point.start()] + new_field + block_content[insertion_point.start():]

    # Update factsAdvanced
    if "facts" in data:
        facts_adv_match = re.search(r"factsAdvanced:\s*\{([^\}]*)\}", block_content, re.DOTALL)
        facts_list_str = "[\n        \"" + "\",\n        \"".join(data["facts"]) + "\"\n      ]"
        if facts_adv_match:
            inner = facts_adv_match.group(1)
            ro_match = re.search(r"ro:\s*\[([^\]]*)\]", inner, re.DOTALL)
            if not ro_match or ro_match.group(1).strip() in ["", "[]"]:
                new_ro = f"ro: {facts_list_str}"
                if ro_match:
                    new_inner = inner.replace(ro_match.group(0), new_ro)
                else:
                    en_match = re.search(r"en:\s*\[[^\]]*\]", inner, re.DOTALL)
                    if en_match:
                        new_inner = inner.replace(en_match.group(0), en_match.group(0) + f",\n      {new_ro}")
                    else:
                        new_inner = inner + f",\n      {new_ro}"
                block_content = block_content.replace(inner, new_inner)
        else:
            # factsAdvanced missing, add it before image
            insertion_point = re.search(r"image:", block_content)
            if insertion_point:
                new_field = f"factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: {facts_list_str},\n      en: []\n    }},\n    "
                block_content = block_content[:insertion_point.start()] + new_field + block_content[insertion_point.start():]

    return block_content

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern for POI objects
# This is tricky, but POIs usually start with { and have id: "..."
# We will use a regex to find blocks between { and } that contain id: "..."
# Given the structure, we can try to match from { to }, but handle nesting.
# A simpler way: split by },{ and process each part.

# Let's use a more robust approach: find all id: "..." and then extract the block.
matches = list(re.finditer(r"id:\s*\"([^\"]+)\"", content))
new_content = content

# Process in reverse to maintain indices
for match in reversed(matches):
    start_pos = match.start()
    # Find start of object
    obj_start = content.rfind("{", 0, start_pos)
    # Find end of object - this is the hard part. 
    # We will look for the closing } that matches the opening { at obj_start.
    depth = 0
    obj_end = -1
    for i in range(obj_start, len(content)):
        if content[i] == "{":
            depth += 1
        elif content[i] == "}":
            depth -= 1
            if depth == 0:
                obj_end = i + 1
                break
    
    if obj_end != -1:
        old_block = content[obj_start:obj_end]
        new_block = update_poi_block(re.search(r"\{.*\}", old_block, re.DOTALL))
        if new_block != old_block:
             new_content = new_content[:obj_start] + new_block + new_content[obj_end:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Successfully updated Belgian POIs with Romanian SEO content.")
