
import re
import json

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/denmarkPoi.ts"

# Original content from the first read_file (manually reconstructed from my memory of the output)
# Actually, I'll just read the current file and try to fix it, but it's risky.
# Better to use the fact that I have the POI IDs and the data.

# I will use a more robust way to parse the objects.
# I'll look for objects by ID and replace their descriptionAdvanced and factsAdvanced properly.

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Romanian content for POIs
poi_data = {
    "denmark": {
        "descriptionAdvanced": "Danemarca, oficial Regatul Danemarcei, este o țară fascinantă din nordul Europei, care, fiind cea mai sudică dintre țările scandinave, face legătura între Europa Centrală și Scandinavia. Țara este formată din Peninsula Iutlanda și un arhipelag de peste 400 de insule, dintre care Seeland și Funen sunt cele mai importante. Danemarca este renumită în întreaga lume pentru calitatea sa excepțional de ridicată a vieții, politicile sociale progresiste și designul său inovator, care îmbină funcționalitatea cu estetica. Fiind unul dintre cele mai vechi regate din lume, Danemarca are o istorie bogată, care se întinde de la vikingii neînfricați, prin puternicul imperiu danez, până la democrația modernă și iubitoare de pace de astăzi. Capitala Copenhaga este un model global de sustenabilitate și cultura bicicletei, marcată de canale pitorești, palate regale și o scenă gastronomică de primă clasă.",
        "factsAdvanced": [
            "Monarhia daneză este una dintre cele mai vechi din lume, având o linie regală care poate fi urmărită până la Gorm cel Bătrân în secolul al X-lea.",
            "Cu peste 7.300 de kilometri de coastă, niciun loc din Danemarca nu se află la mai mult de 52 de kilometri distanță de mare.",
            "Danemarca a fost un pionier global în politicile sociale, fiind prima țară din lume care a legalizat parteneriatele între persoane de același sex în 1989.",
            "Aproape 50% din energia electrică a țării este generată din surse eoliene și solare, reflectând un angajament profund față de sustenabilitate.",
            "Podul Øresund, care leagă Copenhaga de Malmö, este cel mai lung pod combinat rutier și feroviar din Europa, măsurând aproape 8 kilometri."
        ]
    },
    "city-copenhagen": {
        "descriptionAdvanced": "Copenhaga, capitala vibrantă a Danemarcei, este o combinație armonioasă de farmec istoric și inovație modernă de ultimă oră. Orașul este celebru pentru portul său pitoresc Nyhavn, cu case multicolore, și pentru emblematica statuie Mica Sirenă, care veghează malul apei. Fiind un lider global în sustenabilitate, Copenhaga impresionează prin infrastructura sa extinsă pentru biciclete și prin curățenia portului său, unde se poate înota în siguranță. Vizitatorii pot explora palate regale impunătoare, precum Amalienborg, și se pot bucura de atmosfera magică a Grădinilor Tivoli, unul dintre cele mai vechi parcuri de distracții din lume. Scena gastronomică este, de asemenea, remarcabilă, găzduind numeroase restaurante cu stele Michelin care definesc noua bucătărie nordică.",
        "factsAdvanced": [
            "Copenhaga este constant votată ca unul dintre cele mai fericite și mai locuibile orașe din lume datorită echilibrului dintre viața personală și cea profesională.",
            "Sistemul de metrou din Copenhaga funcționează complet automat, fără conductori, și este disponibil 24 de ore din 24.",
            "Strøget, aflată în centrul orașului, este una dintre cele mai lungi străzi comerciale pietonale din întreaga Europă.",
            "Peste 60% dintre locuitorii orașului folosesc bicicleta ca principal mijloc de transport zilnic către serviciu sau școală.",
            "Cartierul Freetown Christiania este o comunitate autonomă unică, cunoscută pentru stilul de viață alternativ și regulile sale sociale distincte."
        ]
    },
    "city-aarhus": {
        "descriptionAdvanced": "Aarhus este al doilea oraș ca mărime din Danemarca și un centru cultural dinamic situat pe coasta de est a peninsulei Iutlanda. Orașul îmbină cu succes rădăcinile sale vikinge cu o arhitectură contemporană îndrăzneață și o viață universitară plină de energie. Atracția principală este Muzeul de Artă ARoS, faimos pentru pasarela sa circulară în culorile curcubeului care oferă o panoramă spectaculoasă asupra orașului. Centrul istoric găzduiește 'Den Gamle By', un muzeu în aer liber care recreează atmosfera unui oraș danez din secolele trecute. Aarhus oferă, de asemenea, acces facil la păduri dese și plaje frumoase, fiind o destinație ideală pentru cei care caută atât cultură, cât și relaxare în natură.",
        "factsAdvanced": [
            "Aarhus a fost fondat ca o așezare vikingă în secolul al VIII-lea, fiind unul dintre cele mai vechi orașe din Scandinavia.",
            "Catedrala din Aarhus, dedicată Sfântului Clement, este cea mai înaltă și cea mai lungă biserică din întreaga Danemarcă.",
            "Orașul a deținut titlul de Capitală Europeană a Culturii în anul 2017, consolidându-și reputația de centru artistic major.",
            "Muzeul Moesgaard este renumit la nivel internațional pentru exponatele sale arheologice, inclusiv pentru faimosul Om de la Grauballe.",
            "Aarhus este cunoscut ca 'Orașul Zâmbetelor', o poreclă care reflectă atmosfera primitoare și prietenoasă a locuitorilor săi."
        ]
    },
    "city-odense": {
        "descriptionAdvanced": "Odense, situat pe insula Funen, este cunoscut în întreaga lume ca locul de naștere al legendarului scriitor de basme Hans Christian Andersen. Orașul respiră poveste prin fiecare colț, având numeroase muzee, statui și parcuri dedicate vieții și operei marelui autor. Pe lângă moștenirea sa literară, Odense este unul dintre cele mai vechi orașe daneze, oferind un centru istoric fermecător cu străzi pietruite și case tradiționale. În prezent, orașul s-a transformat într-un centru modern pentru tehnologie și robotică, reușind să păstreze totodată o atmosferă relaxată și primitoare. Grădina Zoologică din Odense și numeroasele festivaluri culturale adaugă un farmec aparte acestei destinații fascinante.",
        "factsAdvanced": [
            "Numele orașului Odense provine din vechea limbă nordică și înseamnă 'Sanctuarul lui Odin', zeul suprem în mitologia nordică.",
            "Odense găzduiește unul dintre cele mai importante centre de cercetare și producție în domeniul roboticii din Europa.",
            "Catedrala Sfântul Knut din oraș este un exemplu remarcabil de arhitectură gotică și adăpostește moaștele regelui danez canonizat.",
            "Orașul are o rețea de piste de biciclete extrem de dezvoltată, fiind considerat unul dintre cele mai sigure orașe pentru cicliști.",
            "Festivalul H.C. Andersen, desfășurat anual în luna august, transformă întregul oraș întrun cadru magic plin de spectacole și artă."
        ]
    },
    "reg-jutland": {
        "descriptionAdvanced": "Iutlanda este peninsula principală care formează partea continentală a Danemarcei, oferind o diversitate peisagistică uimitoare. Coasta de vest este marcată de plaje sălbatice, dune de nisip impunătoare și briza aspră a Mării Nordului, fiind un paradis pentru iubitorii de natură. În contrast, coasta de est este mai blândă, cu fiorduri liniștite, dealuri verzi și păduri dese care invită la explorare. Regiunea este bogată în istorie, adăpostind monumente vikinge de o valoare inestimabilă, cum ar fi Pietrele de la Jelling, parte a patrimoniului UNESCO. Iutlanda este, de asemenea, centrul agricol și industrial al țării, păstrând în același timp un puternic sentiment al tradiției și ospitalității locale.",
        "factsAdvanced": [
            "Iutlanda este singura parte a Danemarcei care este conectată direct de restul Europei continentale prin granița cu Germania.",
            "Regiunea găzduiește cel mai înalt punct natural al Danemarcei, dealul Møllehøj, deși are o altitudine de doar 170 de metri.",
            "În Iutlanda se află orașul Billund, locul unde a fost inventat celebrul joc LEGO și unde s-a deschis primul parc Legoland din lume.",
            "Pietrele de la Jelling, situate în centrul peninsulei, sunt adesea numite 'certificatul de naștere al Danemarcei' datorită inscripțiilor runice.",
            "Parcul Național Marea Wadden din sud-vestul Iutlandei este un ecosistem unic de maree protejat prin convenția UNESCO."
        ]
    },
    "reg-zealand": {
        "descriptionAdvanced": "Zeelanda este cea mai mare insulă a Danemarcei și inima sa politică, culturală și economică, găzduind capitala Copenhaga. Insula oferă un amestec fascinant de metropole vibrante, orașe istorice pitorești și peisaje naturale de o frumusețe rară. De la stâncile albe de cretă de la Møns Klint până la castelele regale impunătoare precum Frederiksborg, Zeelanda este o destinație plină de surprize. Istoria vikingă este puternic prezentă în orașul Roskilde, unde catedrala sa celebră și Muzeul Navelor Vikinge atrag mii de turiști. Conectată de Suedia prin impresionantul pod Øresund, insula reprezintă o poartă de acces vitală între Europa Centrală și restul Scandinaviei.",
        "factsAdvanced": [
            "Zeelanda este a 13-a cea mai mare insulă din Europa și cea mai populată insulă a Danemarcei, excluzând Groenlanda.",
            "Castelul Kronborg din Helsingør, situat pe vârful nordic al insulei, este locul unde Shakespeare a plasat acțiunea celebrei piese Hamlet.",
            "Catedrala din Roskilde, aflată pe această insulă, este locul tradițional de înmormântare pentru regii și reginele Danemarcei de peste 500 de ani.",
            "Zeelanda este separată de insula Funen prin strâmtoarea Marele Belt, care este traversată de unul dintre cele mai mari poduri suspendate din lume.",
            "Peisajul insulei a fost modelat de ghețari în timpul ultimei ere glaciare, rezultând în dealuri blânde și numeroase lacuri pitorești."
        ]
    },
    "city-aalborg": {
        "descriptionAdvanced": "Aalborg este un oraș portuar major situat în nordul Iutlandei, cunoscut pentru transformarea sa spectaculoasă dintr-un centru industrial într-un hub cultural modern. Situat pe malul Limfjord, orașul oferă o faleză revitalizată, unde arhitectura contemporană, cum ar fi Casa Muzicii, se întâlnește cu spații recreative vibrante. Centrul vechi păstrează farmecul istoric prin străduțe înguste și clădiri precum Castelul Aalborghus, oferind o atmosferă plină de viață. Aalborg este, de asemenea, renumit pentru viața sa de noapte animată, în special pe strada Jomfru Ane Gade, cea mai lungă stradă cu baruri din Danemarca. Cu o universitate de prestigiu și numeroase festivaluri, orașul emană o energie tânără și creativă care atrage vizitatori de toate vârstele.",
        "factsAdvanced": [
            "Carnavalul din Aalborg, desfășurat anual în luna mai, este cel mai mare eveniment de acest gen din Europa de Nord, atrăgând zeci de mii de participanți.",
            "Grădina Zoologică din Aalborg este una dintre cele mai vizitate atracții din Danemarca, fiind implicată activ în programe internaționale de conservare.",
            "Turnul Aalborg oferă o vedere panoramică de 360 de grade asupra orașului și a fiordului de la o înălțime de peste 100 de metri deasupra nivelului mării.",
            "Cimitirul viking de la Lindholm Høje, situat chiar lângă oraș, este unul dintre cele mai bine conservate situri funerare din Epoca Vikingă.",
            "Orașul este cunoscut pentru producția istorică de Akvavit, o băutură spirtoasă tradițională scandinavă cu aromă de chimen sau mărar."
        ]
    },
    "city-helsingor": {
        "descriptionAdvanced": "Helsingør este un oraș istoric strategic situat în cel mai îngust punct al strâmtorii Øresund, oferind o vedere spectaculoasă către coasta Suediei. Orașul este celebru în întreaga lume datorită Castelului Kronborg, sit UNESCO și locul unde William Shakespeare a plasat acțiunea tragediei Hamlet. Centrul orașului este un labirint de străzi medievale bine conservate, cu case colorate și magazine artizanale care amintesc de perioada sa de glorie comercială. Fiind o poartă de acces vitală către restul Scandinaviei, Helsingør combină moștenirea sa maritimă cu o ofertă culturală modernă, inclusiv Muzeul Maritim al Danemarcei. Atmosfera portuară, feriboturile care traversează constant strâmtoarea și evenimentele culturale fac din acest oraș o destinație fascinantă pentru orice călător.",
        "factsAdvanced": [
            "Timp de peste 400 de ani, Helsingør a colectat 'Taxele Strâmtorii' de la toate navele care intrau sau ieșeau din Marea Baltică.",
            "Muzeul Maritim al Danemarcei din Helsingør este construit într-un vechi doc uscat și a primit numeroase premii pentru arhitectura sa inovatoare.",
            "Strâmtoarea Øresund în acest punct are o lățime de doar 4 kilometri, făcând orașul suedez Helsingborg vizibil cu ochiul liber.",
            "În fiecare vară, în curtea Castelului Kronborg au loc spectacole cu piesa Hamlet, continuând tradiția începută în secolul al XIX-lea.",
            "Statuia 'Han', un corespondent masculin al Micuței Sirene, se află în portul Helsingør și este realizată din oțel inoxidabil șlefuit."
        ]
    },
    "city-roskilde": {
        "descriptionAdvanced": "Roskilde este unul dintre cele mai vechi și mai importante orașe istorice ale Danemarcei, fiind fosta capitală a țării și sediu al puterii regale. Orașul este dominat de Catedrala din Roskilde, o capodoperă a stilului gotic din cărămidă, unde sunt înmormântați majoritatea monarhilor danezi. Pe malul fiordului Roskilde se află Muzeul Navelor Vikinge, unde vizitatorii pot admira cinci nave originale recuperate din apele fiordului și reconstruite meticulos. Roskilde este, de asemenea, faimos la nivel global pentru festivalul său de muzică, unul dintre cele mai mari și mai vechi din Europa. Orașul oferă un amestec unic de solemnitate istorică, aventură maritimă și energie contemporană, fiind o oprire obligatorie pentru a înțelege spiritul danez.",
        "factsAdvanced": [
            "Catedrala din Roskilde a fost prima catedrală gotică construită din cărămidă în Europa de Nord, influențând arhitectura religioasă din regiune.",
            "Festivalul Roskilde este organizat în întregime de o fundație non-profit, iar toate încasările sunt donate în scopuri caritabile în fiecare an.",
            "Muzeul Navelor Vikinge găzduiește nave care au fost scufundate intenționat în secolul al XI-lea pentru a bloca o rută de invazie către oraș.",
            "Până în anul 1443, Roskilde a servit drept capitală a Danemarcei, înainte ca regele să decidă mutarea curții la Copenhaga.",
            "Orașul găzduiește și un parc tehnologic de prestigiu, fiind un centru important pentru cercetare și educație în regiunea Zeelanda."
        ]
    },
    "city-esbjerg": {
        "descriptionAdvanced": "Esbjerg este principalul oraș-port de pe coasta de vest a Danemarcei și un centru vital pentru industria energetică offshore din Marea Nordului. Deși este un oraș relativ tânăr, fondat în secolul al XIX-lea, Esbjerg a crescut rapid dintr-o așezare mică într-o metropolă modernă și activă. Emblema orașului este monumentul impunător 'Omul întâlnește Marea', format din patru statui albe uriașe care privesc spre orizontul marin. Vizitatorii pot explora Muzeul Maritim și de Pescuit pentru a înțelege legătura profundă a orașului cu oceanul și mediul înconjurător. De asemenea, Esbjerg servește drept poartă de acces către Parcul Național Marea Wadden și insula pitorească Fanø, oferind un echilibru perfect între industrie și frumusețe naturală.",
        "factsAdvanced": [
            "Esbjerg este cel mai tânăr oraș mare din Danemarca, fiind planificat și construit de stat începând cu anul 1868 ca port de export.",
            "Statuile monumentale 'Mennesket ved Havet' au o înălțime de 9 metri fiecare și au fost inaugurate în 1995 pentru a marca 100 de ani ai orașului.",
            "Portul Esbjerg este baza principală pentru instalarea și întreținerea turbinelor eoliene offshore în sectorul danez al Mării Nordului.",
            "Echipa locală de hochei pe gheață și cea de fotbal sunt printre cele mai iubite, sportul ocupând un loc central în cultura comunității.",
            "Orașul deține cea mai lungă stradă comercială din Danemarca de Vest, oferind o varietate mare de magazine și experiențe urbane."
        ]
    },
    "city-viborg": {
        "descriptionAdvanced": "Viborg, situat în inima Iutlandei, este unul dintre cele mai istorice orașe ale Danemarcei, având o importanță politică și religioasă majoră încă din perioada medievală. Orașul este renumit pentru catedrala sa impresionantă, ale cărei fresce realizate de Joakim Skovgaard sunt considerate printre cele mai frumoase din țară. Străzile sale vechi, pietruite, păstrează o atmosferă liniștită și nobilă, reflectând statutul său istoric de loc unde se adunau nobilii și judecătorii regatului. Înconjurat de lacuri sclipitoare și păduri dese, Viborg oferă numeroase trasee pentru plimbări și recreere în aer liber. Astăzi, orașul combină cu grație moștenirea sa bogată cu o viață urbană modernă și activă, fiind un punct central pentru administrație și educație în regiune.",
        "factsAdvanced": [
            "Viborg a fost locul de adunare al parlamentului regional (Landsting) și locul unde regii danezi erau aclamați în mod tradițional.",
            "Catedrala din Viborg este cea mai mare biserică construită din granit din lume, o dovadă a măiestriei constructorilor medievali.",
            "În secolul al XII-lea, Viborg a fost punctul de plecare pentru cruciadele daneze către țările baltice, fiind un centru religios strategic.",
            "Numele orașului provine de la cuvintele 'Wibi' (loc sfânt) și 'Berg' (deal), indicând rădăcinile sale sacre din perioada precreștină.",
            "Traseul Hærvejen, vechiul drum de pelerinaj și comerț care străbate Iutlanda de la nord la sud, trece direct prin centrul orașului Viborg."
        ]
    },
    "city-randers": {
        "descriptionAdvanced": "Randers este un oraș vibrant situat la gura de vărsare a râului Gudenå în fiordul Randers, fiind singurul oraș-port fluvial din Danemarca. Orașul este celebru pentru 'Randers Regnskov', o grădină botanică tropicală impresionantă adăpostită sub trei cupole gigantice, care recreează ecosisteme din America, Africa și Asia. Centrul istoric al orașului este plin de caracter, având case vechi din paiantă și străzi pietruite care găzduiesc magazine moderne și cafenele primitoare. Randers are o lungă tradiție în comerț și industrie, reflectată în arhitectura sa diversă și în zonele sale portuare active. Poziționarea sa strategică între Aarhus și Aalborg îl face un nod important de transport și o destinație atractivă pentru cei care vor să exploreze estul Iutlandei.",
        "factsAdvanced": [
            "Randers este cunoscut istoric pentru producția de mănuși de lux, 'Mănușile de Randers' fiind purtate chiar și de regina Danemarcei.",
            "Muzeul Memphis Mansion din Randers este o replică fidelă a casei lui Elvis Presley și găzduiește una dintre cele mai mari colecții dedicate artistului.",
            "În perioada medievală, Randers era o fortăreață importantă, fiind scena unor lupte decisive pentru independența Danemarcei.",
            "Râul Gudenå oferă posibilități excelente pentru caiac și pescuit, fiind o resursă naturală centrală pentru locuitorii orașului.",
            "Randers deține cel mai vechi teatru de provincie din Danemarca, având o scenă culturală activă care datează de la începutul secolului al XIX-lea."
        ]
    },
    "city-silkeborg": {
        "descriptionAdvanced": "Silkeborg este perla regiunii lacurilor din Danemarca, fiind situat într-un cadru natural de o frumusețe rară, înconjurat de păduri vaste și ape sclipitoare. Orașul s-a dezvoltat în jurul industriei hârtiei în secolul al XIX-lea, dar astăzi este cunoscut în principal ca o destinație de top pentru turismul activ în aer liber. Vizitatorii pot naviga pe râul Gudenå cu cel mai vechi vapor cu aburi funcțional din lume, Hjejlen, sau pot explora numeroasele trasee de drumeție și ciclism. Muzeul Silkeborg adăpostește Omul de la Tollund, un corp mumificat natural din Epoca Fierului, oferind o conexiune fascinantă cu trecutul îndepărtat. Atmosfera orașului este una relaxată și sănătoasă, punând accent pe echilibrul dintre viața urbană și comuniunea cu natura.",
        "factsAdvanced": [
            "Silkeborg găzduiește cel mai vechi vapor cu roți și aburi din lume care încă mai navighează, numit Hjejlen, inaugurat în 1861.",
            "Omul de la Tollund, expus la muzeul local, este atât de bine conservat încât trăsăturile feței și chiar conținutul stomacului pot fi încă studiate.",
            "Zona din jurul orașului este cunoscută sub numele de 'Elveția Daneză' datorită dealurilor neobișnuit de înalte pentru relieful plat al țării.",
            "Orașul este un centru național pentru sporturile de apă, găzduind frecvent campionate de caiac-canoe și evenimente de înot în ape deschise.",
            "În Silkeborg se află și Muzeul Jorn, dedicat celebrului artist dán Asger Jorn, unul dintre fondatorii mișcării artistice COBRA."
        ]
    },
    "city-hilleroed": {
        "descriptionAdvanced": "Hillerød este un oraș elegant situat în nordul insulei Zeelanda, faimos în întreaga lume pentru Castelul Frederiksborg, cea mai mare construcție renascentistă din Scandinavia. Castelul, amplasat spectaculos pe trei insule mici în mijlocul unui lac, găzduiește Muzeul Național de Istorie și este înconjurat de o grădină barocă magnifică. Centrul orașului Hillerød este primitor și liniștit, oferind străzi comerciale plăcute și numeroase zone verzi care invită la relaxare. Pe lângă atmosfera sa regală, orașul este un important nod feroviar și un centru administrativ pentru regiunea de nord. Proximitatea față de pădurile regale și lacurile sclipitoare face din Hillerød o destinație ideală pentru o excursie de o zi din Copenhaga, oferind o doză generoasă de istorie și natură.",
        "factsAdvanced": [
            "Castelul Frederiksborg a fost construit ca reședință regală pentru regele Christian IV și a servit drept loc de încoronare pentru mulți regi danezi.",
            "Grădina barocă a castelului este renumită pentru monograma regală tăiată în gard viu și pentru sistemul său complex de cascade și fântâni.",
            "Pădurea Gribskov, una dintre cele mai mari din Danemarca, se învecinează cu orașul și face parte din peisajul de vânătoare UNESCO.",
            "Hillerød găzduiește un muzeu unic al farmaciei, situat într-o clădire istorică, oferind o perspectivă rară asupra medicinei din secolele trecute.",
            "Orașul este conectat direct de Copenhaga prin trenul S-tog, fiind o destinație rezidențială foarte căutată datorită calității ridicate a vieții."
        ]
    },
    "city-kolding": {
        "descriptionAdvanced": "Kolding este un oraș istoric și modern situat în sud-estul Iutlandei, la capătul fiordului Kolding, având un rol strategic de secole între Danemarca și statele germane. Punctul de reper central este Koldinghus, ultimul castel regal din Iutlanda, care a fost transformat dintr-o ruină incendiată într-un muzeu de artă și istorie premiat pentru restaurarea sa inovatoare. Orașul este astăzi un centru vibrant de design și educație, găzduind Muzeul Trapholt, dedicat artei moderne și designului de mobilier danez. Kolding oferă un amestec plăcut de străzi pietonale comerciale, parcuri verzi și o zonă de faleză în plină dezvoltare. Atmosfera sa dinamică și locația centrală îl fac o bază excelentă pentru a explora atât sudul Iutlandei, cât și insula Funen din apropiere.",
        "factsAdvanced": [
            "Koldinghus a fost distrus de un incendiu devastator în 1808, cauzat de soldații spanioli care au făcut focul prea tare pentru a se încălzi.",
            "Muzeul Trapholt este singurul muzeu din Danemarca unde vizitatorii pot vedea o casă completă proiectată de celebrul arhitect Arne Jacobsen.",
            "Parcul Geografic din Kolding este o grădină botanică unică unde plantele sunt aranjate în funcție de originea lor geografică de pe glob.",
            "În secolul al XIX-lea, Kolding a fost un punct cheie de frontieră și a jucat un rol important în războaiele dintre Danemarca și Prusia.",
            "Orașul este cunoscut pentru 'Centrul de Design din Kolding', care promovează inovația și sustenabilitatea în industria daneză."
        ]
    },
    "city-frederikshavn": {
        "descriptionAdvanced": "Frederikshavn este un oraș portuar esențial situat în nordul Iutlandei, servind drept poartă maritimă principală către Suedia și Norvegia. Orașul are o atmosferă maritimă autentică, fiind puternic influențat de activitățile portuare, de pescuit și de bazele navale militare din zonă. Una dintre atracțiile sale cele mai neobișnuite este 'Plaja cu Palmieri', singura de acest fel din Danemarca, unde palmierii importați creează o ambianță tropicală pe timpul verii. Frederikshavn este, de asemenea, cunoscut pentru fortificația sa istorică, Turnul cu Pulbere (Krudttårnet), care amintește de trecutul său ca oraș de apărare strategică. Fiind un punct de plecare pentru numeroase feriboturi, orașul este plin de viață și oferă numeroase opțiuni de cumpărături, restaurante și activități culturale pentru călători.",
        "factsAdvanced": [
            "Numele orașului a fost schimbat în 1818 din Fladstrand în Frederikshavn, în onoarea regelui Frederik al VI-lea, când a primit statutul de oraș.",
            "Krudttårnet (Turnul cu Pulbere) a fost mutat în întregime cu 270 de metri în 1974 pentru a face loc expansiunii șantierului naval.",
            "Orașul găzduiește o bază navală importantă a Marinei Regale Daneze, fiind un punct strategic pentru securitatea în Marea Baltică și Marea Nordului.",
            "În fiecare an, Frederikshavn găzduiește festivalul 'Tordenskiold', care recreează bătălii istorice din secolul al XVIII-lea în port.",
            "De la Frederikshavn se poate ajunge rapid cu feribotul pe insula Læsø, celebră pentru producția tradițională de sare și casele cu acoperiș de alge."
        ]
    },
    "city-sonderborg": {
        "descriptionAdvanced": "Sønderborg este un oraș pitoresc situat la granița cu Germania, fiind împărțit între peninsula Iutlanda și insula Als de strâmtoarea sclipitoare Alssund. Orașul are o istorie zbuciumată și fascinantă, marcată de conflictele de graniță, elementul său central fiind Castelul Sønderborg care adăpostește un muzeu dedicat istoriei regiunii Schleswig. Faleza orașului este modernă și animată, fiind locul ideal pentru plimbări cu vedere la port și la podurile mobile care conectează orașul. În apropiere se află parcul istoric Dybbøl Banke, locul unei bătălii decisive din 1864, care este acum un simbol național al rezilienței daneze. Sønderborg este o destinație unde cultura daneză și cea germană se întâlnesc armonios, oferind peisaje marine superbe și o atmosferă europeană relaxată.",
        "factsAdvanced": [
            "Castelul Sønderborg a servit drept închisoare pentru regele Christian al II-lea timp de 17 ani după ce a fost detronat în secolul al XVI-lea.",
            "Universitatea Syddansk are un campus modern în Sønderborg, într-o clădire spectaculoasă numită Alsion, care găzduiește și o sală de concerte de clasă mondială.",
            "Orașul este un centru de excelență pentru tehnologii verzi și eficiență energetică, fiind sediul multor companii globale precum Danfoss.",
            "Podul regelui Christian al X-lea, care leagă cele două părți ale orașului, este un pod mobil impresionant care se deschide frecvent pentru nave.",
            "Sønderborg a deținut titlul de Capitală Culturală a Danemarcei în cadrul diverselor inițiative regionale, promovând arta și dialogul transfrontalier."
        ]
    },
    "city-holstebro": {
        "descriptionAdvanced": "Holstebro este un oraș din vestul Iutlandei recunoscut la nivel național ca un centru vibrant al artei și culturii, în ciuda dimensiunilor sale relativ reduse. Orașul este celebru pentru investițiile sale masive în arta publică, sculptura 'Femeia pe căruță' a lui Alberto Giacometti fiind cea mai valoroasă și discutată piesă din spațiul urban. Holstebro găzduiește renumitul teatru experimental Odin Teatret și numeroase alte instituții culturale care organizează festivaluri și spectacole pe tot parcursul anului. Râul Storå străbate orașul, oferind zone verzi pitorești pentru relaxare și activități recreative precum pescuitul sau plimbările cu barca. Cu străzi comerciale pietonale primitoare și o atmosferă comunitară puternică, Holstebro este destinația perfectă pentru cei care caută o experiență urbană daneză autentică și plină de creativitate.",
        "factsAdvanced": [
            "Sculptura lui Giacometti din centrul orașului a fost cumpărată în 1966 pentru o sumă mică, dar astăzi valorează zeci de milioane de euro.",
            "Holstebro a fost votat de mai multe ori ca 'Orașul anului pentru cumpărături' în Danemarca, datorită varietății și calității magazinelor sale.",
            "Baza militară Jydske Dragonregiment, situată în oraș, este unul dintre cele mai importante centre de instruire pentru tancuri din Danemarca.",
            "În fiecare seară, sculptura lui Giacometti este coborâtă într-un seif subteran special pentru a fi protejată împotriva vandalismului sau furtului.",
            "Orașul găzduiește 'Săptămâna Holstebro', un festival urban masiv cu muzică, artă și evenimente sportive care atrage mii de vizitatori."
        ]
    },
    "cult-legoland": {
        "descriptionAdvanced": "Legoland Billund este primul și cel mai faimos parc de distracții din rețeaua Legoland, deschis în 1968 chiar lângă locul unde a luat naștere celebrul brand de jucării. Parcul este un univers magic construit din peste 60 de milioane de piese LEGO, oferind atracții spectaculoase pentru copii și adulți deopotrivă. Inima parcului este Miniland, unde vizitatorii pot admira replici detaliate ale unor orașe și monumente celebre la scară mică. Pe lângă zonele tematice precum Regatul Cavalerilor sau Lumea Piraților, parcul oferă montagne-russe palpitante, cinematografe 4D și experiențe interactive de construcție. Legoland Billund nu este doar un parc de distracții, ci un omagiu adus creativității, imaginației și ingineriei daneze care a cucerit lumea întreagă.",
        "factsAdvanced": [
            "Parcul a fost inaugurat pe 7 iunie 1968 și a atras în primul său an peste 600.000 de vizitatori, depășind cu mult toate așteptările.",
            "Modelul Muntelui Rushmore din Miniland este construit din peste 1,5 milioane de piese LEGO și este una dintre cele mai fotografiate piese.",
            "Angajații parcului poartă adesea insigne speciale din LEGO și sunt încurajați să facă schimb de figurine cu micii vizitatori.",
            "Legoland Billund găzduiește cel mai mare model de navă spațială X-Wing din universul Star Wars, realizat integral din cărămizi LEGO.",
            "În interiorul parcului se află și un acvariu Atlantis de la Sea Life, unde creaturi marine reale înoată printre modele LEGO subacvatice."
        ]
    },
    "cult-tivoli": {
        "descriptionAdvanced": "Grădinile Tivoli, situate chiar în inima Copenhagăi, reprezintă un mix unic de parc de distracții, grădină botanică și centru cultural care încântă vizitatorii încă din 1843. Este al doilea cel mai vechi parc de distracții din lume și a servit drept sursă de inspirație pentru însuși Walt Disney atunci când a creat Disneyland. Atmosfera din Tivoli se schimbă spectaculos odată cu lăsarea serii, când mii de lampioane colorate creează un cadru de basm de-a lungul aleilor și lacului. Parcul oferă de la montagne-russe istorice din lemn până la atracții moderne pline de adrenalină, alături de restaurante de lux și scene pentru concerte în aer liber. Indiferent de sezon, fie că este vorba de faimoasele decorațiuni de Crăciun sau de florile de primăvară, Tivoli rămâne sufletul magic al capitalei daneze.",
        "factsAdvanced": [
            "Rutschebanen din Tivoli, construit în 1914, este unul dintre cele mai vechi montagne-russe din lemn din lume care încă funcționează cu un frânar la bord.",
            "Hans Christian Andersen a fost un vizitator frecvent al parcului și s-a inspirat din atmosfera sa orientală pentru a scrie basmul 'Privighetoarea'.",
            "Sala de concerte din Tivoli găzduiește anual numeroase spectacole de muzică clasică și balet, având o acustică de excepție.",
            "Garda de Onoare a Tivoli (Tivoli-Ggarden) este formată din tineri muzicieni care defilează în uniforme tradiționale inspirate de garda regală daneză.",
            "Parcul folosește energie electrică provenită exclusiv din surse eoliene, demonstrând angajamentul Danemarcei față de sustenabilitate."
        ]
    },
    "cult-nyhavn": {
        "descriptionAdvanced": "Nyhavn este, fără îndoială, cea mai iconică și fotografiată locație din Copenhaga, un canal istoric din secolul al XVII-lea mărginit de case de negustori viu colorate. Construit inițial ca port comercial pentru a lega orașul vechi de mare, Nyhavn a fost timp de secole un loc plin de marinari, berării și forfotă comercială. Astăzi, casele istorice au fost restaurate cu grijă și adăpostesc numeroase cafenele, baruri și restaurante unde localnicii și turiștii se bucură de 'hygge' la malul apei. Canalul este plin de nave istorice din lemn, oferind o fereastră spre trecutul maritim al orașului și un decor spectaculos pentru plimbările de seară. Nyhavn nu este doar un loc turistic, ci un simbol viu al spiritului cosmopolit și relaxat care definește capitala Danemarcei.",
        "factsAdvanced": [
            "Cea mai veche casă din Nyhavn este numărul 9, care datează din anul 1681 și și-a păstrat arhitectura originală până în prezent.",
            "Marele scriitor Hans Christian Andersen a locuit în trei case diferite din Nyhavn (numerele 18, 20 și 67) de-a lungul a peste 20 de ani.",
            "Canalul Nyhavn a fost săpat manual de prizonieri de război suedezi în timpul domniei regelui Christian al V-lea.",
            "Ancora memorială aflată la capătul canalului comemorează marinarii danezi care și-au pierdut viața în timpul celui de-al Doilea Război Mondial.",
            "Multe dintre casele colorate au fost construite special cu ferestre mari pentru a arăta bogăția și statutul social al negustorilor care le dețineau."
        ]
    },
    "cult-little-mermaid": {
        "descriptionAdvanced": "Statuia Micuța Sirenă este unul dintre cele mai faimoase simboluri ale Danemarcei și o atracție esențială pentru oricine vizitează Copenhaga. Situată pe o stâncă la marginea promenadei Langelinie, micuța sculptură din bronz este inspirată de personajul melancolic din basmul lui Hans Christian Andersen. Statuia a fost oferită orașului de către magnatul berii Carl Jacobsen în 1913, după ce acesta fusese impresionat de un spectacol de balet bazat pe povestea sirenei. Deși dimensiunea sa este surprinzător de mică, faima sa este colosală, devenind un simbol al dorului, al iubirii neîmplinite și al frumuseții fragile. Privind spre portul Copenhagăi, sirena pare să aștepte mereu ceva, captivând imaginația a milioane de vizitatori care vin să o fotografieze în fiecare an.",
        "factsAdvanced": [
            "Sculptorul Edvard Eriksen a folosit chipul balerinei Ellen Price pentru capul statuii și pe propria sa soție, Eline, ca model pentru corp.",
            "Statuia a fost victima vandalismului de mai multe ori de-a lungul istoriei, fiind decapitată de două ori și vopsită în diverse culori ca formă de protest.",
            "În anul 2010, statuia a părăsit Copenhaga pentru prima dată pentru a fi expusă în pavilionul Danemarcei la Expoziția Universală de la Shanghai.",
            "Există numeroase replici ale statuii în întreaga lume, inclusiv în California, Japonia și Spania, demonstrând impactul său cultural global.",
            "Micuța Sirenă are o înălțime de doar 1,25 metri și cântărește aproximativ 175 de kilograme, fiind mult mai mică decât se așteaptă majoritatea turiștilor."
        ]
    },
    "cult-kronborg": {
        "descriptionAdvanced": "Castelul Kronborg, situat strategic în Helsingør pe cel mai îngust punct al strâmtorii dintre Danemarca și Suedia, este una dintre cele mai importante fortărețe renascentiste din Europa. Construit inițial ca un punct de colectare a taxelor vamale pentru navele care intrau în Marea Baltică, castelul a devenit celebru la nivel mondial ca decor pentru piesa 'Hamlet' de William Shakespeare. Arhitectura sa impunătoare, cu turnuri înalte și bastioane masive, reflectă bogăția și puterea regilor danezi din secolele XVI și XVII. În interior, vizitatorii pot explora săli regale fastuoase, capele decorate și catacombele întunecate unde doarme legendarul erou Holger Danezul. Kronborg nu este doar un monument istoric, ci un loc încărcat de legende și atmosferă teatrală, fiind inclus în patrimoniul mondial UNESCO.",
        "factsAdvanced": [
            "Castelul a fost reconstruit de regele Christian al IV-lea după un incendiu devastator în 1629, care a distrus mare parte din interiorul original.",
            "Sala Mare a castelului (Sala Cavalerilor) era cea mai mare de acest gen din Europa de Nord la momentul finalizării sale.",
            "Legenda spune că Holger Danezul (Holger Danske) va prinde viață și va salva Danemarca atunci când țara se va afla în mare pericol.",
            "Taxele Strâmtorii colectate la Kronborg reprezentau la un moment dat până la două treimi din venitul total al statului danez.",
            "Castelul este înconjurat de un sistem complex de șanțuri cu apă și fortificații stelate, fiind aproape imposibil de cucerit în perioada sa de glorie."
        ]
    },
    "land-round-tower": {
        "descriptionAdvanced": "Turnul Rotund (Rundetårn) este un punct de reper inconfundabil al Copenhagăi, fiind cel mai vechi observator astronomic funcțional din Europa, construit în secolul al XVII-lea de regele Christian al IV-lea. Ceea ce face acest turn cu adevărat unic este rampa sa interioară spiralată, lată și pavată cu cărămidă, care înlocuiește treptele tradiționale pentru a permite accesul trăsurilor la vârf. De pe platforma superioară, vizitatorii sunt răsplătiți cu o panoramă spectaculoasă de 360 de grade asupra acoperișurilor roșii și turnurilor orașului vechi. Turnul face parte dintr-un complex ce includea inițial și o bibliotecă universitară și o biserică, fiind un monument dedicat științei și credinței. Astăzi, rămâne o atracție fascinantă, oferind o incursiune în istoria astronomiei și un unghi de vedere inedit asupra capitalei daneze.",
        "factsAdvanced": [
            "Rampa spiralată are o lungime de 209 metri și se rotește de șapte ori și jumătate în jurul nucleului gol al turnului.",
            "În anul 1716, țarul Petru cel Mare al Rusiei a urcat rampa turnului călare, urmat de soția sa, Ecaterina, într-o trăsură.",
            "În centrul turnului se află o nișă de sticlă unde vizitatorii pot sta la 25 de metri deasupra solului, privind direct în nucleul structurii.",
            "Biblioteca de la jumătatea turnului a găzduit cândva întreaga colecție de cărți a Universității din Copenhaga, unde a studiat și H.C. Andersen.",
            "Fiecare cărămidă folosită la construcția turnului a fost adusă din Țările de Jos, deoarece cărămizile locale nu erau considerate destul de rezistente."
        ]
    },
    "land-copenhagen-opera-house": {
        "descriptionAdvanced": "Opera din Copenhaga este una dintre cele mai moderne și spectaculoase săli de spectacole din lume, fiind un simbol al arhitecturii contemporane daneze. Situată pe insula Holmen, direct vizavi de palatul regal Amalienborg, clădirea impresionează prin acoperișul său plat monumental care se extinde mult peste faleză. Interiorul este la fel de fastuos, folosind materiale nobile precum marmura siciliană, foița de aur și lemnul de arțar pentru a asigura o acustică impecabilă. Opera a fost un cadou oferit statului danez de către fundația industriașului Mærsk Mc-Kinney Møller și a devenit imediat un punct de referință pe harta culturală a Europei. Pe lângă spectacolele de operă și balet de talie mondială, clădirea însăși este o piesă de artă ce reflectă ambiția și rafinamentul designului nordic actual.",
        "factsAdvanced": [
            "Clădirea a costat peste 500 de milioane de dolari, fiind una dintre cele mai scumpe opere construite vreodată în istorie.",
            "Tavanul sălii principale este placat cu foiță de aur de 24 de carate, acoperind o suprafață totală de aproximativ 105 metri pătrați.",
            "Opera dispune de șase scene principale și secundare care pot fi mutate și configurate pentru a permite producții extrem de complexe.",
            "Ferestrele fațadei oferă o vedere panoramică asupra portului și sunt realizate dintr-o sticlă specială, extrem de clară, produsă în Germania.",
            "Iluminatul exterior și cel din foier au fost proiectate de artistul Olafur Eliasson, creând un joc de lumini fascinant pe timpul nopții."
        ]
    },
    "land-louisiana-museum": {
        "descriptionAdvanced": "Muzeul de Artă Modernă Louisiana, situat la nord de Copenhaga pe coasta strâmtorii Øresund, este considerat unul dintre cele mai frumoase muzee din lume datorită interacțiunii sale perfecte cu natura. Clădirea muzeului este un exemplu magistral de arhitectură modernistă daneză, cu coridoare de sticlă care șerpuiesc prin parcuri și oferă vederi sclipitoare spre mare. Colecția permanentă include lucrări de importanță internațională semnate de artiști precum Picasso, Giacometti și Yayoi Kusama, alături de numeroase expoziții temporare provocatoare. Parcul de sculpturi ce înconjoară muzeul permite vizitatorilor să admire arta în aer liber, printre copaci seculari și pante înverzite care coboară spre plajă. Louisiana nu este doar o destinație culturală, ci o experiență senzorială completă care combină arta, arhitectura și peisajul marin într-un mod de neuitat.",
        "factsAdvanced": [
            "Numele muzeului nu provine de la statul american, ci de la cele trei soții ale primului proprietar al domeniului, toate numite Louise.",
            "Louisiana găzduiește una dintre cele mai mari colecții de sculpturi de Alberto Giacometti, expuse într-o sală specială cu vedere la un mic lac.",
            "Muzeul este deschis până târziu în timpul săptămânii, oferind o atmosferă magică atunci când sculpturile și parcul sunt luminate sub cerul înstelat.",
            "Instalația 'Gleaming Lights of the Souls' de Yayoi Kusama este una dintre cele mai populare atracții permanente, oferind o experiență infinită de oglinzi și lumini.",
            "Louisiana are propria editură și produce o revistă de artă renumită, precum și o platformă video cu interviuri cu artiști contemporani."
        ]
    },
    "land-aros-aarhus-art-museum": {
        "descriptionAdvanced": "Muzeul de Artă ARoS din Aarhus este unul dintre cele mai mari și mai vizitate muzee de artă din Europa de Nord, fiind un simbol al creativității orașului. Clădirea însăși este o capodoperă arhitecturală, dar elementul care l-a făcut celebru la nivel mondial este 'Your Rainbow Panorama' de Olafur Eliasson – o pasarelă circulară din sticlă colorată situată pe acoperiș. Mergând prin acest curcubeu suspendat, vizitatorii pot vedea întregul oraș Aarhus prin toate culorile spectrului, trăind o experiență vizuală unică. În interior, muzeul găzduiește colecții impresionante care se întind de la 'Epoca de Aur' a picturii daneze până la instalații contemporane monumentale, cum ar fi sculptura uriașă 'Boy' de Ron Mueck. ARoS reușește să transforme vizita la muzeu într-o aventură interactivă, provocând constant percepția și imaginația publicului.",
        "factsAdvanced": [
            "Sculptura 'Boy' are o înălțime de 4,5 metri și cântărește 500 de kilograme, fiind realizată cu un realism uimitor din fibră de sticlă și silicon.",
            "Conceptul arhitectural al muzeului este inspirat de 'Divina Comedie' a lui Dante, subsolul reprezentând infernul, iar curcubeul de pe acoperiș raiul.",
            "Pasarela curcubeu are un diametru de 52 de metri și este susținută de coloane de oțel ascunse ingenios în structura clădirii.",
            "ARoS dispune de un departament dedicat exclusiv artei digitale și instalațiilor imersive, numit 'The Nine Spaces', situat la nivelurile inferioare.",
            "Muzeul organizează frecvent 'ARoS After Dark', evenimente de seară unde arta este combinată cu muzica DJ-ilor și cocktailuri într-o atmosferă relaxată."
        ]
    },
    "land-blue-planet": {
        "descriptionAdvanced": "Planeta Albastră (Den Blå Planet) este cel mai mare și mai modern acvariu din Europa de Nord, situat spectaculos pe coasta Copenhagăi, aproape de aeroportul Kastrup. Arhitectura clădirii este inspirată de forma unui vârtej de apă, fiind acoperită cu panouri de aluminiu care reflectă cerul și marea, oferind un aspect futurist și organic. În interior, vizitatorii sunt purtați într-o călătorie fascinantă prin diverse ecosisteme acvatice, de la recifele de corali tropicale până la apele reci ale insulelor Feroe. Atracția principală este tunelul de sticlă prin care treci pe sub un imens bazin cu rechini și raze, oferind senzația imersivă de a fi sub ocean. Planeta Albastră pune un accent deosebit pe educație și conservare, fiind o destinație ideală pentru familii și pentru toți cei curioși să descopere minunile lumii subacvatice.",
        "factsAdvanced": [
            "Acvariul găzduiește peste 20.000 de animale din 450 de specii diferite, trăind în aproximativ 7 milioane de litri de apă.",
            "Forma de vârtej a clădirii este vizibilă clar din avioanele care decolează sau aterizează pe aeroportul Copenhaga din apropiere.",
            "Panourile de aluminiu care acoperă fațada sunt în număr de peste 33.000 și au fost montate individual pentru a crea curburile complexe.",
            "Bazinul Oceanului are o fereastră de sticlă imensă, groasă de 16 centimetri, care trebuie să reziste presiunii uriașe a apei.",
            "Planeta Albastră folosește un sistem sofisticat de filtrare a apei de mare direct din strâmtoarea Øresund pentru a reduce consumul de apă potabilă."
        ]
    },
    "land-lego-house": {
        "descriptionAdvanced": "LEGO House, cunoscută și sub numele de 'Casa Cărămizii', este o experiență interactivă unică situată în Billund, locul unde s-a născut celebrul brand LEGO. Clădirea, proiectată de celebrul arhitect Bjarke Ingels, arată ca o structură gigantică formată din 21 de blocuri LEGO suprapuse, având pe acoperiș terase de joacă colorate. În interior, vizitatorii pot explora diverse 'Zone de Experiență' colorate, fiecare axată pe o anumită latură a învățării prin joc: creativitate, logică, emoție și abilități sociale. Printre atracțiile monumentale se numără 'Arborele Creativității', una dintre cele mai mari structuri LEGO construite vreodată, și o galerie impresionantă cu modele realizate de fani. LEGO House este mai mult decât un muzeu; este un centru de inovație unde fanii de toate vârstele sunt invitați să construiască, să experimenteze și să își lase imaginația să zboare.",
        "factsAdvanced": [
            "Arborele Creativității din centrul clădirii are o înălțime de peste 15 metri și a fost construit din peste 6,3 milioane de piese LEGO standard.",
            "În subsolul LEGO House se află o colecție istorică ce prezintă aproape toate seturile LEGO produse vreodată, oferind o doză uriașă de nostalgie.",
            "Restaurantul din incintă, Mini Chef, folosește roboți pentru a servi mâncarea, iar clienții își 'comandă' meniul construind un mic model din cărămizi.",
            "Fiecare vizitator primește la final o combinație unică de șase cărămizi LEGO roșii și un card de plastic care arată una dintre cele 915 milioane de posibilități de asamblare.",
            "Pe acoperișul clădirii există o cărămidă LEGO gigantică denumită 'Keystone', care are dimensiunile exacte ale unei piese reale, dar la o scară mult mai mare."
        ]
    },
    "land-statens-museum-for-kunst": {
        "descriptionAdvanced": "Statens Museum for Kunst (SMK) este galeria națională a Danemarcei și cel mai mare muzeu de artă din țară, găzduind colecții impresionante care se întind pe parcursul a șapte secole. Situat într-un parc frumos din centrul Copenhagăi, muzeul combină o clădire istorică monumentală cu o extensie modernă din sticlă și oțel, legate printr-o pasarelă aeriană. Colecția cuprinde capodopere ale renașterii europene, arta 'Epocii de Aur' daneze și o secțiune vastă dedicată artei moderne și contemporane. Vizitatorii pot admira lucrări de Matisse, Picasso și Rembrandt, alături de piese fundamentale ale artiștilor danezi precum Hammershøi sau Eckersberg. Muzeul este un spațiu deschis și dinamic, oferind ateliere de creație, concerte și dezbateri, fiind inima culturală a națiunii unde trecutul și prezentul artei se întâlnesc într-un dialog continuu.",
        "factsAdvanced": [
            "Muzeul deține cea mai mare colecție de lucrări de Henri Matisse din afara Franței, datorită unor donații generoase făcute în secolul trecut.",
            "Piesele din colecția regală de artă, începută de regii danezi în secolul al XVI-lea, constituie nucleul patrimoniului acestui muzeu.",
            "SMK a digitalizat o mare parte din colecția sa, oferind acces gratuit online la imagini de înaltă rezoluție ale miilor de opere de artă.",
            "Grădina muzeului găzduiește sculpturi monumentale și este un loc preferat de localnici pentru picnicuri și relaxare în timpul verii.",
            "Clădirea veche și cea nou sunt separate de o 'Stradă a Sculpturilor' acoperită cu sticlă, care servește drept spațiu expozițional și de tranzit."
        ]
    },
    "land-viking-ship-museum": {
        "descriptionAdvanced": "Muzeul Navelor Vikinge din Roskilde oferă o incursiune fascinantă în lumea legendarilor navigatori nordici, fiind construit în jurul a cinci nave originale descoperite în fiordul din apropiere. Aceste nave, cunoscute sub numele de navele de la Skuldelev, au fost scufundate intenționat în secolul al XI-lea pentru a proteja orașul de atacurile maritime, fiind recuperate și restaurate cu o precizie uimitoare. Muzeul nu este doar un spațiu de expoziție, ci și un centru activ de arheologie experimentală, unde meșterii reconstruiesc nave vikinge folosind unelte și tehnici tradiționale. Vizitatorii pot observa procesul de construcție pe șantierul naval al muzeului și, în timpul verii, au ocazia de a naviga pe fiord în replici fidele ale acestor ambarcațiuni. Este locul unde istoria prinde viață, permițându-ne să înțelegem geniul ingineresc și curajul care le-au permis vikingilor să exploreze oceanele lumii.",
        "factsAdvanced": [
            "Cele cinci nave de la Skuldelev reprezintă tipuri diferite de ambarcațiuni, de la nave de război lungi până la nave comerciale masive.",
            "Cea mai lungă navă din muzeu, Skuldelev 2, a fost construită inițial în Dublin, demonstrând legăturile vaste ale imperiului viking.",
            "Muzeul a construit o replică exactă a navei Skuldelev 2, numită 'Sea Stallion from Glendalough', care a navigat cu succes din Danemarca până în Irlanda.",
            "Arhitectura clădirii care adăpostește navele originale este un exemplu remarcabil de brutalism danez, oferind o vedere panoramică asupra fiordului.",
            "În atelierele muzeului, vizitatorii pot învăța meșteșuguri vikinge vechi, cum ar fi forjarea fierului, împletirea frânghiilor sau sculptura în lemn."
        ]
    },
    "port-copenhagen": {
        "descriptionAdvanced": "Portul Copenhaga este poarta maritimă istorică a Danemarcei și unul dintre cele mai active și moderne noduri de transport din regiunea Mării Baltice. De-a lungul secolelor, portul a modelat dezvoltarea capitalei, transformându-se dintr-un avanpost comercial medieval într-un hub logistic și de croazieră de talie mondială. Astăzi, zonele portuare trec printr-o regenerare urbană spectaculoasă, vechile docuri fiind înlocuite de cartiere rezidențiale de lux, birouri inovatoare și spații culturale precum Opera sau Biblioteca Regală. Portul este renumit pentru curățenia apelor sale, fiind unul dintre puținele orașe mari din lume unde locuitorii pot înota direct în bazinele portuare special amenajate. Această simbioză între activitatea industrială, transportul de pasageri și calitatea vieții urbane face din portul Copenhaga un model de dezvoltare sustenabilă pentru orașele viitorului.",
        "factsAdvanced": [
            "Portul Copenhaga este administrat în comun cu portul suedez Malmö sub entitatea Copenhagen Malmö Port (CMP).",
            "În fiecare an, terminalele de croazieră din Copenhaga primesc sute de nave și aproape un milion de turiști din întreaga lume.",
            "Multe dintre insulele artificiale care formează portul au fost create folosind pământul excavat în timpul construcției rețelei de metrou a orașului.",
            "Autobuzele acvatice (havnebusserne) fac parte integrantă din sistemul de transport public, oferind o rută rapidă și pitorească de-a lungul apei.",
            "Portul include și zona fortificată Kastellet, una dintre cele mai bine conservate cetăți în formă de stea din Europa de Nord."
        ]
    },
    "port-aarhus": {
        "descriptionAdvanced": "Portul Aarhus este cel mai mare port de containere din Danemarca, jucând un rol crucial în economia națională ca hub principal pentru comerțul internațional. Situat strategic pe coasta de est a Iutlandei, portul gestionează peste jumătate din traficul de containere al țării, conectând Danemarca de restul lumii prin rute maritime majore. Pe lângă zonele industriale masive, portul Aarhus trece printr-o transformare urbană ambițioasă în zona Aarhus Ø, unde vechile docuri au devenit locul unora dintre cele mai îndrăznețe proiecte arhitecturale din Danemarca, precum clădirea 'Iceberg'. Această zonă modernă combină activitățile portuare tradiționale cu locuințe contemporane, restaurante și spații publice vibrante. Portul rămâne un motor de creștere pentru oraș, demonstrând cum industria maritimă poate coexista armonios cu o viață urbană modernă și dinamică.",
        "factsAdvanced": [
            "Portul Aarhus este unul dintre puținele din Danemarca ce poate primi cele mai mari nave de containere din lume (clasa Triple-E).",
            "Zona Aarhus Ø găzduiește 'Isbjerget' (Icebergul), o clădire rezidențială premiată internațional pentru designul său care imită blocurile de gheață plutitoare.",
            "Portul dispune de terminale specializate pentru petrol, cereale, cărbune și mărfuri rulate, fiind un centru logistic extrem de versatil.",
            "Aarhus este și o destinație importantă pentru navele de croazieră, terminalul fiind situat foarte aproape de centrul istoric al orașului.",
            "Planurile de expansiune ale portului prevăd crearea de noi suprafețe de teren prin dragarea fundului mării pentru a susține creșterea volumului de mărfuri."
        ]
    },
    "port-esbjerg": {
        "descriptionAdvanced": "Portul Esbjerg este nodul central al energiei offshore din Danemarca și unul dintre cele mai importante porturi din lume pentru industria eoliană marină. Fondat inițial în 1868 ca poartă de export agricol către Marea Britanie, portul s-a adaptat continuu, devenind baza principală pentru explorarea petrolului și gazelor, iar acum pentru tranziția către energia verde. Situat la marginea Mării Wadden, portul gestionează logistica complexă pentru instalarea parcurilor eoliene uriașe din Marea Nordului. Pe lângă componenta energetică, Esbjerg păstrează o activitate semnificativă în transportul de mărfuri rulate (Ro-Ro) și în sectorul pescuitului industrial. Este un loc unde scara activităților industriale este cu adevărat impresionantă, reflectând poziția de lider a Danemarcei în tehnologiile maritime și ecologice.",
        "factsAdvanced": [
            "Peste 80% din capacitatea eoliană offshore instalată în Europa a fost gestionată sau a tranzitat prin portul Esbjerg la un moment dat.",
            "Portul este un punct vital pentru transportul de vehicule și mărfuri grele către Marea Britanie și alte piețe din Europa de Nord.",
            "Terminalul de feribot din port asigură legătura constantă cu insula Fanø, o călătorie scurtă de doar 12 minute prin apele protejate ale Mării Wadden.",
            "Esbjerg a fost singurul port construit de statul danez de la zero, ca răspuns la pierderea portului Altona în războiul cu Prusia din 1864.",
            "Zona portuară găzduiește șantiere de reparații navale capabile să modernizeze platforme petroliere și nave de suport de mari dimensiuni."
        ]
    },
    "port-frederikshavn": {
        "descriptionAdvanced": "Portul Frederikshavn este un hub maritim strategic situat în vârful nordic al Danemarcei, fiind punctul principal de legătură prin feribot cu Suedia (Gothenburg) și Norvegia (Oslo). Portul are o istorie lungă ca bază navală și centru de pescuit, dar s-a transformat recent într-un port modern și versatil, axat pe servicii maritime și reciclarea navelor. Cu o poziție geografică privilegiată la intrarea în Marea Baltică, Frederikshavn oferă adăpost și servicii pentru mii de nave care tranzitează regiunea în fiecare an. Portul este inima economică a orașului, susținând șantiere navale de prestigiu și o industrie de logistică în continuă creștere. Atmosfera sa este una de activitate intensă, unde feriboturile uriașe, navele de transport și iahturile de agrement se întâlnesc într-un peisaj maritim tipic nordic.",
        "factsAdvanced": [
            "Portul Frederikshavn a finalizat recent o expansiune masivă, adăugând noi dane adânci și suprafețe mari pentru activități offshore și logistice.",
            "Este unul dintre puținele porturi din lume care găzduiește facilități specializate pentru dezmembrarea și reciclarea ecologică a platformelor marine și navelor mari.",
            "Feriboturile care pleacă de aici sunt printre cele mai mari din lume, transportând simultan mii de pasageri, mașini și camioane grele.",
            "Portul are o legătură feroviară directă cu rețeaua națională, permițând transferul rapid al mărfurilor de pe mare pe șine.",
            "Zona portuară include Turnul cu Pulbere (Krudttårnet), o relicvă a fortificațiilor care protejau portul în secolul al XVII-lea."
        ]
    },
    "ind-carlsberg-brewery": {
        "descriptionAdvanced": "Berea Carlsberg este probabil cel mai faimos produs de export al Danemarcei, iar vechea fabrică din districtul Valby din Copenhaga este un monument dedicat istoriei și inovației industriale. Fondată de J.C. Jacobsen în 1847, berăria nu a produs doar bere de calitate, ci a fost locul unde s-au făcut descoperiri științifice fundamentale, cum ar fi purificarea drojdiei de bere. Astăzi, cartierul Carlsberg trece printr-o transformare urbană majoră, vechile clădiri din cărămidă roșie cu porți impunătoare fiind integrate în noi spații rezidențiale, birouri și parcuri. Vizitatorii pot explora centrul de experiență 'Home of Carlsberg', care prezintă istoria familiei Jacobsen, procesul de fabricare a berii și o colecție impresionantă de sticle de bere din întreaga lume. Este un loc unde tradiția industrială se împletește cu designul modern, reflectând spiritul antreprenorial care a pus Danemarca pe harta mondială.",
        "factsAdvanced": [
            "Laboratorul Carlsberg, fondat în 1875, este locul unde s-a inventat scara pH-ului, utilizată astăzi în chimie și biologie la nivel mondial.",
            "Poarta Elefanților de la intrarea în vechea fabrică este o structură iconică susținută de patru elefanți sculptați în granit în mărime naturală.",
            "J.C. Jacobsen a fost un mare mecena al artelor, folosind profiturile berăriei pentru a finanța reconstrucția Castelului Frederiksborg și a altor monumente.",
            "Fundația Carlsberg deține și astăzi pachetul majoritar de acțiuni al companiei, direcționând profiturile către cercetare științifică și cultură.",
            "Berăria deține cea mai mare colecție de sticle de bere nedeschise din lume, numărând peste 22.000 de exemplare diferite."
        ]
    },
    "ind-lego-factory-billund": {
        "descriptionAdvanced": "Fabrica LEGO din Billund este inima producției mondiale a celei mai faimoase jucării din lume, fiind locul unde miliarde de cărămizi de plastic sunt turnate cu o precizie incredibilă în fiecare an. Deși accesul în interiorul facilităților de producție este extrem de limitat pentru public, zona industrială Billund reflectă succesul fenomenal al companiei fondate de Ole Kirk Christiansen. Procesul de fabricație este aproape în întregime automatizat, roboți sofisticați transportând cutiile pline cu piese prin depozite gigantice fără intervenție umană. Calitatea este atât de strict controlată încât doar câteva piese din fiecare milion sunt considerate defecte, asigurând compatibilitatea perfectă între seturile de azi și cele de acum 50 de ani. Fabrica reprezintă nu doar un centru de producție, ci un simbol al inovației, preciziei și culturii muncii care definește succesul global al Danemarcei.",
        "factsAdvanced": [
            "Matrițele folosite în fabrica LEGO sunt atât de precise încât eroarea acceptată este de maximum 0,002 milimetri.",
            "Numele LEGO provine din cuvintele daneze 'Leg Godt', care înseamnă 'joacă-te bine', un motto păstrat de peste 90 de ani.",
            "Fabrica din Billund dispune de o flotă de vehicule autonome care se deplasează singure prin depozite folosind senzori laser.",
            "Energia necesară producției este compensată prin investițiile masive ale grupului LEGO în parcuri eoliene offshore din Marea Nordului.",
            "În fiecare secundă, în fabricile LEGO din întreaga lume sunt produse aproximativ 1.300 de piese individuale."
        ]
    },
    "hist-jelling-monuments": {
        "descriptionAdvanced": "Monumentele de la Jelling sunt considerate 'certificatul de naștere al Danemarcei' și sunt printre cele mai importante situri istorice din Scandinavia, fiind protejate de UNESCO. Situl cuprinde două movile funerare uriașe, o biserică și două pietre runice celebre ridicate de regii vikingi Gorm cel Bătrân și Harald Bluetooth în secolul al X-lea. Inscripțiile de pe piatra cea mare a lui Harald marchează momentul trecerii danezilor la creștinism și unificarea regatului sub o singură coroană. Recent, au fost descoperite fundațiile unei palisade imense și a unor case lungi vikinge care înconjurau întregul complex, demonstrând scara monumentală a puterii regale de atunci. Vizitatorii pot explora centrul modern 'Kongernes Jelling', care folosește tehnologie interactivă pentru a aduce la viață epoca vikingă și povestea fascinantă a primilor regi danezi.",
        "factsAdvanced": [
            "Piatra mare de la Jelling conține cea mai veche reprezentare a lui Iisus Hristos descoperită până acum în Scandinavia.",
            "Regele Harald Bluetooth, care a ridicat monumentul, este cel de la care provine numele tehnologiei moderne Bluetooth, simbolizând conectivitatea.",
            "Movilele funerare au peste 8 metri înălțime și sunt construite din straturi succesive de gazon și pământ, fiind un efort logistic imens pentru acea vreme.",
            "Recent, s-a descoperit că întregul sit a fost proiectat cu o precizie geometrică uimitoare, formând un triunghi isoscel perfect între punctele cheie.",
            "Pietrele runice sunt acum protejate de vitrine speciale din sticlă cu climat controlat pentru a preveni erodarea lor de către ploi și îngheț."
        ]
    },
    "hist-roskilde-cathedral": {
        "descriptionAdvanced": "Catedrala din Roskilde este panteonul regal al Danemarcei și un exemplu remarcabil de arhitectură gotică timpurie realizată din cărămidă, fiind inclusă în patrimoniul mondial UNESCO. Construită în secolele XII și XIII, catedrala a fost prima de acest gen din Europa de Nord, servind drept model pentru numeroase alte clădiri religioase din regiunea Mării Baltice. Interiorul este vast și solemn, adăpostind mormintele a 40 de regi și regine daneze, fiecare capelă regală reflectând stilul arhitectural al epocii în care a fost construită. De la mormintele medievale simple până la monumentele baroce elaborate și mausoleele moderne, catedrala spune povestea monarhiei daneze pe parcursul a peste 800 de ani. Atmosfera sa încărcată de istorie, vitraliile colorate și orga monumentală fac din această catedrală inima spirituală și istorică a Danemarcei.",
        "factsAdvanced": [
            "Catedrala a fost prima clădire creștină majoră din Scandinavia construită integral din cărămidă, o tehnologie adusă de călugări din sudul Europei.",
            "Printre mormintele celebre se află cel al reginei Margareta I, care a unit Danemarca, Norvegia și Suedia sub Uniunea de la Kalmar.",
            "Ceasul astronomic din secolul al XV-lea aflat în interior are figurine mobile, inclusiv un Sfânt Gheorghe care ucide balaurul la fiecare oră fixă.",
            "De lul secolelor, catedrala a suferit numeroase extinderi, rezultând un amestec fascinant de stiluri, de la romanic la gotic, baroc și neoclasic.",
            "În fiecare an, catedrala găzduiește concerte de orgă de talie mondială, folosind instrumentul istoric construit inițial în secolul al XVI-lea."
        ]
    },
    "hist-frederiksborg-castle": {
        "descriptionAdvanced": "Castelul Frederiksborg din Hillerød este o capodoperă a Renașterii daneze, fiind adesea numit 'Versailles-ul Nordului' datorită fastului și grădinilor sale spectaculoase. Ridicat de regele Christian al IV-lea la începutul secolului al XVII-lea, castelul ocupă trei insule mici în mijlocul lacului Slotsø, oferind un peisaj de o frumusețe ireală. După un incendiu devastator în 1859, castelul a fost reconstruit și transformat în Muzeul Național de Istorie, adăpostind o colecție vastă de portrete, picturi istorice și mobilier de epocă. Capela castelului, care a supraviețuit incendiului, este o explozie de decorațiuni aurite și sculpturi în lemn, fiind locul unde regii absoluți ai Danemarcei au fost încoronați timp de secole. Vizitarea castelului și a grădinilor sale baroce este o incursiune fascinantă în istoria glorioasă și în estetica rafinată a regalității daneze.",
        "factsAdvanced": [
            "Muzeul Național de Istorie din incinta castelului a fost înființat la inițiativa lui J.C. Jacobsen, fondatorul berăriei Carlsberg.",
            "Orga Compenius din capela castelului datează din 1610 și este una dintre cele mai vechi și mai bine conservate orgi din lemn din lume.",
            "Sala Cavalerilor este decorată cu tapițerii uriașe care înfățișează victoriile regelui Christian al IV-lea și are un tavan sculptat extrem de detaliat.",
            "Grădina barocă a fost restaurată complet în 1996, respectând planurile originale din 1725, inclusiv cascadele de apă sclipitoare.",
            "Castelul a servit drept reședință pentru Ordinul Elefantului și Ordinul Dannebrog, cele mai înalte distincții onorifice ale Danemarcei."
        ]
    },
    "hist-koldinghus": {
        "descriptionAdvanced": "Koldinghus este ultima fortăreață regală din Iutlanda și un monument istoric de o importanță crucială, având o prezență impunătoare deasupra orașului Kolding. Fondat în secolul al XIII-lea pentru a păzi granița dintre regatul danez și ducatul Schleswig, castelul a fost martorul a numeroase evenimente istorice majore. În 1808, un incendiu masiv a distrus mare parte din structură, lăsându-l în ruină timp de decenii, până când o restaurare modernă genială a salvat monumentul. Arhitecții au ales să lase zidurile vechi vizibile, adăugând structuri moderne din lemn și oțel pentru a susține acoperișul, creând un contrast vizual spectaculos între vechi și nou. Astăzi, Koldinghus este un muzeu vibrant care găzduiește expoziții de argintărie fină, artă decorativă și istorie militară, fiind un simbol al capacității Danemarcei de a-și onora trecutul prin inovație.",
        "factsAdvanced": [
            "Restaurarea castelului Koldinghus a primit premiul Europa Nostra în 1993 pentru modul exemplar de conservare a patrimoniului.",
            "Turnul Uriaș (Kæmpetårnet) oferă cea mai bună vedere panoramică asupra fiordului Kolding și a întregii regiuni înconjurătoare.",
            "În timpul incendiului din 1808, localnicii au reușit să salveze doar câteva piese de mobilier, restul castelului arzând timp de trei zile.",
            "Castelul a servit ca sediu pentru trupele spaniole conduse de mareșalul Bernadotte, cel care ulterior a devenit rege al Suediei.",
            "Koldinghus adăpostește una dintre cele mai bogate colecții de bijuterii și obiecte din argint din Danemarca, prezentând evoluția designului local."
        ]
    },
    "hist-christiansfeld": {
        "descriptionAdvanced": "Christiansfeld este un oraș istoric unic în sudul Iutlandei, fiind considerat cel mai bun exemplu din Europa de așezare planificată de către Biserica Moravă. Fondat în 1773 la cererea regelui Christian al VII-lea, orașul impresionează prin armonia sa arhitecturală, cu străzi paralele și clădiri din cărămidă galbenă cu acoperișuri de țiglă roșie. Fiecare clădire a fost construită cu un scop precis pentru comunitatea religioasă, punând accent pe egalitate, disciplină și viață comunală. Christiansfeld a fost inclus în patrimoniul mondial UNESCO în 2015 datorită integrității sale excepționale și atmosferei sale de liniște atemporală. Vizitatorii pot simți spiritul locului în marea sală de adunări a comunității sau plimbându-se prin cimitirul 'Grădina Domnului', unde toate crucile sunt identice, reflectând credința în egalitatea tuturor oamenilor în fața divinității.",
        "factsAdvanced": [
            "Orașul este renumit pentru prăjiturile sale cu miere (honningkager), o rețetă tradițională păstrată de peste 200 de ani de brutarii locali.",
            "Biserica Moraviană din centrul orașului are una dintre cele mai mari săli de rugăciune din Danemarca fără coloane de susținere.",
            "Christiansfeld a fost primul oraș din Danemarca care a avut iluminat public stradal și trotuare moderne, mult înaintea capitalei.",
            "Cimitirul orașului, Gudsageren, este unic prin faptul că bărbații și femeile sunt înmormântați în secțiuni separate, orientați spre est.",
            "Toate clădirile originale din centrul orașului sunt și astăzi locuite sau utilizate, păstrând funcționalitatea așezării de acum două secole."
        ]
    },
    "hist-dybbol-banke": {
        "descriptionAdvanced": "Dybbøl Banke este cel mai important câmp de luptă din istoria modernă a Danemarcei, fiind locul unde în 1864 trupele daneze au suferit o înfrângere tragică în fața armatei prusace. Această bătălie a dus la pierderea a peste o treime din teritoriul țării și a marcat profund psihicul național, transformând Danemarca dintr-o putere regională într-un stat mic și neutru. Astăzi, situl este un parc istoric solemn unde vizitatorii pot explora sistemele de tranșee, bastioanele reconstruite și Monumentul Național Dybbøl. Centrul de istorie 'Dybbøl Banke' oferă o experiență imersivă, folosind relatări ale soldaților și demonstrații live pentru a explica contextul și consecințele dramatice ale conflictului. Moara de la Dybbøl, situată pe deal, a devenit un simbol național al rezilienței și al speranței, fiind reconstruită de mai multe ori după ce a fost distrusă în timpul luptelor.",
        "factsAdvanced": [
            "Bătălia de la Dybbøl a fost unul dintre primele conflicte europene unde s-a folosit artileria cu țevi ghintuite, provocând pierderi masive.",
            "În fiecare an, pe 18 aprilie, are loc o ceremonie de comemorare la care participă atât reprezentanți ai Danemarcei, cât și ai Germaniei.",
            "Moara de la Dybbøl este considerată cel mai important simbol național al sudului Iutlandei și al unității daneze.",
            "Săpăturile arheologice recente pe câmpul de luptă au scos la iveală mii de obiecte personale ale soldaților, de la nasturi la pipe și scrisori.",
            "Înfrângerea de la Dybbøl a generat mișcarea 'ce s-a pierdut în afară, trebuie câștigat înăuntru', ducând la dezvoltarea agriculturii și culturii interne."
        ]
    },
    "hist-trelleborg-viking-fortress": {
        "descriptionAdvanced": "Trelleborg este una dintre cele cinci fortărețe inelare vikinge descoperite în Danemarca, oferind o dovadă clară a puterii și organizării militare a regelui Harald Bluetooth. Situată în vestul insulei Zeelanda, fortăreața impresionează prin precizia sa geometrică uimitoare: un cerc perfect cu patru porți orientate exact spre punctele cardinale. Șanțurile de apărare masive și fundațiile caselor lungi din lemn reconstruite permit vizitatorilor să vizualizeze viața soldaților vikingi și a familiilor lor acum mai bine de o mie de ani. Situl include un muzeu cu descoperiri arheologice valoroase, de la arme la unelte de uz casnic, și un sat viking reconstituit unde au loc demonstrații de meșteșuguri în timpul verii. Trelleborg este un monument UNESCO esențial pentru înțelegerea modului în care regii vikingi au unificat Danemarca și au creat un stat centralizat puternic.",
        "factsAdvanced": [
            "Fortăreața a fost construită în jurul anului 980 d.Hr. și a fost utilizată doar pentru o perioadă scurtă, de aproximativ 10-15 ani.",
            "Cea mai veche și singura pavăză vikingă completă găsită în Danemarca a fost descoperită în șanțurile umede de la Trelleborg.",
            "Casele lungi din interiorul fortăreței aveau pereți curbați, semănând cu forma unei nave vikinge întoarse invers.",
            "Cercetările recente sugerează că fortăreața nu era doar militară, ci servea și ca centru administrativ și simbol al autorității regale.",
            "În fiecare an, în luna iulie, Trelleborg găzduiește unul dintre cele mai mari festivaluri vikinge din lume, cu sute de participanți în costume de epocă."
        ]
    },
    "hist-egeskov-castle": {
        "descriptionAdvanced": "Castelul Egeskov, situat în sudul insulei Funen, este considerat cel mai bine conservat castel renascentist cu șanț de apă din Europa, fiind o adevărată bijuterie arhitecturală. Construit în 1554 în mijlocul unui lac pe mii de piloni de stejar, castelul a fost conceput inițial ca o fortăreață defensivă într-o perioadă de neliniște civilă. Astăzi, Egeskov este faimos nu doar pentru arhitectura sa cu turnuri și creneluri, ci și pentru grădinile sale superbe, premiate la nivel internațional, care includ labirinturi de gard viu și parcuri de joacă. În interiorul domeniului, vizitatorii pot explora muzee fascinante de mașini de epocă, motociclete și jucării vechi, precum și spectaculoasa casă de păpuși 'Palatul Titaniei'. Egeskov este o destinație completă, unde istoria nobiliară, pasiunea pentru tehnică și frumusețea peisajului se îmbină pentru a crea o experiență memorabilă pentru toate generațiile.",
        "factsAdvanced": [
            "Legenda spune că pentru fundația castelului a fost nevoie de o întreagă pădure de stejar, de unde provine și numele 'Egeskov' (pădurea de stejar).",
            "În podul castelului se află o figurină de lemn numită 'Băiatul de lemn'; se spune că dacă este mutată din locul ei, castelul se va scufunda în lac în noaptea de Crăciun.",
            "Grădina de fucsii de la Egeskov este una dintre cele mai mari din Europa, adăpostind peste 800 de varietăți diferite ale acestei flori.",
            "Castelul este și astăzi locuit de familia nobiliară Ahlefeldt-Laurvig-Bille, dar mare parte din clădire și domeniu sunt deschise publicului.",
            "Labirintul de fagi de la Egeskov, proiectat de artistul Piet Hein, oferă o provocare distractivă vizitatorilor care încearcă să găsească centrul."
        ]
    },
    "nat-bornholm": {
        "descriptionAdvanced": "Bornholm, supranumită 'Insula Soarelui', este o destinație unică în Danemarca, situată în mijlocul Mării Baltice, mult mai aproape de Suedia și Polonia decât de restul țării. Insula se distinge prin geografia sa dramatică, fiind singurul loc din Danemarca unde granitul iese la suprafață, creând coaste stâncoase spectaculoase în nord și plaje cu cel mai fin nisip alb în sud. Bornholm este faimoasă pentru bisericile sale rotunde medievale albe, ruinele impunătoare ale cetății Hammershus și micile orașe portuare pitorești cu afumătorii tradiționale de pește. Atmosfera insulei este una de calm absolut, invitând la drumeții pe potecile de coastă, ciclism prin pădurile dese sau explorarea atelierelor artizanale de sticlărie și ceramică. Este un paradis gastronomic și natural care oferă o perspectivă diferită și fascinantă asupra spiritului nordic.",
        "factsAdvanced": [
            "Nisipul de pe plaja Dueodde din sudul insulei este atât de fin încât în trecut a fost folosit pentru clepsidre și pentru a usca cerneala pe documente.",
            "Hammershus, situată pe o stâncă înaltă, este cea mai mare ruină de fortăreață medievală din Europa de Nord.",
            "Insula are un microclimat special, fiind locul din Danemarca cu cele mai multe ore de soare pe an și unde pot crește smochini și duzi în aer liber.",
            "Afumătoriile de pește de pe Bornholm, recunoscute după coșurile lor albe mari, produc celebrul 'Soare peste Gudhjem', un preparat din hering afumat.",
            "Bornholm este primul loc din lume care a fost declarat 'Regiune Mondială a Meșteșugurilor' datorită calității excepționale a sticlei și ceramicii locale."
        ]
    },
    "nat-rabjerg-mile": {
        "descriptionAdvanced": "Råbjerg Mile este un fenomen natural spectaculos situat în nordul Iutlandei, fiind cea mai mare dună de nisip migratoare din Danemarca și una dintre cele mai mari din Europa. Această uriașă masă de nisip, care acoperă aproximativ un kilometru pătrat, se deplasează lent sub influența vânturilor puternice dinspre vest, parcurgând în medie 15 metri pe an spre nord-est. Peisajul este unul selenar și copleșitor, oferind senzația unui deșert autentic aflat la porțile Scandinaviei. De pe culmea dubei, vizitatorii pot admira o panoramă incredibilă care cuprinde atât Marea Nordului, cât și Marea Baltică în zilele senine. Protejată ca monument natural, Råbjerg Mile este o dovadă vie a forțelor naturii care modelează continuu coasta daneză, oferind o experiență de drumeție unică printre valurile de nisip fin.",
        "factsAdvanced": [
            "Duna conține aproximativ 3,5 milioane de metri cubi de nisip și atinge o înălțime de peste 40 de metri deasupra nivelului mării.",
            "În drumul său, duna înghite tot ce îi stă în cale, inclusiv vegetație și drumuri, lăsând în urmă un strat subțire și umed de nisip pe solul fostului teren.",
            "Se estimează că în aproximativ 100-200 de ani duna va ajunge la drumul principal care duce spre orașul Skagen și apoi se va vărsa în mare.",
            "Spre deosebire de alte dune din Danemarca, Råbjerg Mile nu a fost plantată cu vegetație, tocmai pentru a i se permite să migreze liber ca monument natural.",
            "Nisipul de aici este atât de pur și de fin încât a fost studiat pentru a înțelege procesele geologice de formare a dunelor pe alte planete."
        ]
    },
    "nat-skagen": {
        "descriptionAdvanced": "Skagen este punctul cel mai nordic al Danemarcei, un loc magic unde apele Mării Nordului (Skagerrak) se întâlnesc cu cele ale Mării Baltice (Kattegat) la faimosul banc de nisip Grenen. Orașul și împrejurimile sale sunt renumite pentru lumina lor specială, foarte strălucitoare, care a atras în secolul al XIX-lea o faimoasă colonie de artiști cunoscuți sub numele de 'Pictorii de la Skagen'. Peisajul este marcat de plaje nesfârșite, dune sălbatice și case galbene pitorești cu acoperișuri de țiglă roșie și margini albe. Vizitatorii pot experimenta forța naturii stând cu un picior în fiecare mare sau explorând biserica îngropată în nisip (Den Tilsandede Kirke), din care a mai rămas doar turnul. Skagen combină eleganța unei stațiuni istorice de lux cu asprimea și frumusețea pură a naturii nordice, fiind una dintre cele mai iubite destinații de vacanță din Danemarca.",
        "factsAdvanced": [
            "La Grenen, curentul este atât de puternic la locul de întâlnire al celor două mări încât înotul este strict interzis, deși vizitatorii pot intra cu picioarele în apă.",
            "Multe dintre picturile celebre realizate aici pot fi admirate la Muzeul Skagens, care păstrează atmosfera boemă a coloniei de artiști.",
            "Biserica Sfântul Laurențiu a fost abandonată în 1795 după ce nisipul adus de vânt a acoperit-o aproape complet, lăsând vizibil doar turnul alb.",
            "Skagen este unul dintre cele mai importante locuri din Europa pentru observarea păsărilor migratoare, în special a păsărilor de pradă, în timpul primăverii.",
            "Farul Gri (Det Grå Fyr) din Skagen este al doilea cel mai înalt far din Danemarca și oferă o vedere uluitoare asupra celor două mări."
        ]
    },
    "nat-mons-klint": {
        "descriptionAdvanced": "Møns Klint reprezintă una dintre cele mai dramatice și spectaculoase priveliști naturale din Danemarca, constând în stânci de cretă albă ca zăpada care se ridică vertical până la 128 de metri deasupra Mării Baltice sclipitoare. Situate pe insula Møn, aceste faleze impresionante au fost formate acum milioane de ani din rămășițele unor creaturi marine microscopice și au fost ridicate la suprafață de forța ghețarilor în timpul erei glaciare. Contrastul dintre albul orbitor al stâncilor, verdele crud al pădurii de fagi de pe culmi și turcoazul apei creează un peisaj aproape mediteranean în mijlocul nordului. Vizitatorii pot coborî sute de trepte până la plaja de dedesubt pentru a căuta fosile sau pot parcurge traseele de drumeție de-a lungul marginii prăpastiei pentru panorame de neuitat. Møns Klint este o rezervație a biosferei UNESCO și un loc de o frumusețe geologică și biologică excepțională.",
        "factsAdvanced": [
            "Pe plaja de la baza stâncilor pot fi găsite frecvent fosile de belemniți (degete de diavol) și arici de mare care au trăit acum 70 de milioane de ani.",
            "Pădurea Klinteskoven, care acoperă partea superioară a stâncilor, adăpostește peste 20 de specii de orhidee sălbatice rare, protejate prin lege.",
            "Møns Klint este locul preferat de cuibărit pentru șoimul călător, cea mai rapidă pasăre din lume, care poate fi observată plonjând spre mare.",
            "Geocenter Møns Klint este un muzeu interactiv săpat direct în faleză, care explică formarea geologică a Danemarcei prin tehnologii de ultimă oră.",
            "Din cauza eroziunii naturale cauzate de ploi și valuri, bucăți mari de cretă se prăbușesc ocazional în mare, schimbând continuu aspectul falezei."
        ]
    },
    "nat-wadden-sea": {
        "descriptionAdvanced": "Marea Wadden (Vadehavet) este un ecosistem unic de maree situat în sud-vestul Danemarcei, fiind parte a celui mai mare sistem de mlaștini și nisipuri de maree din lume, inclus în patrimoniul mondial UNESCO. Această zonă naturală fascinantă se schimbă radical de două ori pe zi, când fluxul și refluxul transformă peisajul din ape sclipitoare în câmpii întinse de mâl și nisip pline de viață. Marea Wadden este un popas vital pentru milioane de păsări migratoare care se hrănesc aici în călătoria lor între Africa și Siberia, oferind un spectacol ornitologic de neegalat. Vizitatorii pot participa la safari-uri pentru foci, pot merge pe jos pe fundul mării la reflux sau pot admira fenomenul 'Soarele Negru', când mii de grauri creează forme hipnotizante pe cerul amurgului. Este un loc al liniștii profunde și al orizonturilor nesfârșite, unde natura dictează ritmul vieții de zi cu zi.",
        "factsAdvanced": [
            "Refluxul expune fundul mării pe kilometri întregi, permițând vizitatorilor să meargă cu tractoare speciale sau pe jos până la insula Mandø.",
            "Marea Wadden găzduiește cea mai mare populație de foci din Danemarca, care pot fi văzute odihnindu-se pe bancurile de nisip la reflux.",
            "Fenomenul 'Sort Sol' (Soarele Negru) implică până la un milion de grauri care zboară în formațiuni strânse, blocând lumina soarelui înainte de apus.",
            "Nisipul și mâlul de aici sunt extrem de bogate în nutrienți, hrănind o cantitate imensă de scoici, melci și viermi care constituie baza ecosistemului.",
            "Parcul Național Marea Wadden este cel mai mare parc național din Danemarca, întinzându-se de la granița cu Germania până la orașul Esbjerg."
        ]
    },
    "nat-mollehøj": {
        "descriptionAdvanced": "Møllehøj este, oficial, cel mai înalt punct natural din Danemarca, deși cu o altitudine de doar 170,86 metri, poate părea mai degrabă un deal blând decât un munte în sensul tradițional. Situat în regiunea Ejer Bjerge din Iutlanda Centrală, acest loc oferă o perspectivă clară asupra reliefului danez dominat de morene glaciare și terenuri agricole fertile. Deși a fost mult timp în umbra dealului vecin Ejer Bavnehøj, măsurătorile moderne de precizie au confirmat statutul său de vârf al țării în anul 2005. Vizitatorii pot ajunge la vârf printr-o plimbare ușoară, fiind recompensați cu o vedere panoramică asupra peisajului rural danez, cu fermele sale ordonate și satele pitorești. Møllehøj este un loc simbolic care reflectă modestia și frumusețea liniștită a geografiei daneze, fiind o oprire obligatorie pentru cei care vor să spună că au cucerit 'vârful' Danemarcei.",
        "factsAdvanced": [
            "Diferența de înălțime dintre Møllehøj și fostul deținător al recordului, Ejer Bavnehøj, este de doar câțiva centimetri.",
            "Numele punctului provine de la o moară de vânt (mølle) care a stat pe acest deal din 1838 până în 1917, când a fost distrusă.",
            "Piatra de moară originală este încă păstrată la vârf ca un monument care marchează cel mai înalt punct natural al regatului.",
            "Zona Ejer Bjerge, unde se află Møllehøj, a fost formată de mișcările ghețarilor în timpul ultimei ere glaciare, acum aproximativ 15.000 de ani.",
            "De pe platforma de observație de la Ejer Bavnehøj, situată la doar 200 de metri distanță, se poate vedea până la podul peste Marele Belt în zilele senine."
        ]
    },
    "nat-himmelbjerget": {
        "descriptionAdvanced": "Himmelbjerget, care s-ar traduce prin 'Muntele Cerului', este unul dintre cele mai emblematice și iubite locuri de belvedere din Danemarca, ridicându-se la 147 de metri deasupra lacurilor din jurul orașului Silkeborg. Deși nu este cel mai înalt punct din țară, este cu siguranță cel mai spectaculos datorită pantei sale abrupte care coboară direct spre lacul Julsø, oferind senzația unei înălțimi mult mai mari. În vârful dealului se află un turn de cărămidă roșie înalt de 25 de metri, ridicat în secolul al XIX-lea în onoarea regelui Frederik al VII-lea și a constituției daneze. Locul are o importanță istorică majoră, fiind scena unor mari adunări populare care au pus bazele democrației daneze și ale mișcărilor naționale. Astăzi, Himmelbjerget este o destinație populară pentru familii, drumeți și turiști care sosesc cu vapoarele cu aburi pe lac, fiind un simbol al comuniunii dintre natură și libertatea civică.",
        "factsAdvanced": [
            "Până în anul 1847, Himmelbjerget a fost considerat în mod eronat cel mai înalt punct din Danemarca datorită vizibilității sale proeminente.",
            "Turnul de pe vârf a fost construit prin subscripție publică, demonstrând atașamentul profund al poporului danez față de acest loc.",
            "Vaporul istoric cu aburi 'Hjejlen' aduce regulat turiști de la Silkeborg la baza dealului Himmelbjerget încă din anul 1861.",
            "Există mai multe monumente pe deal dedicate unor personalități care au luptat pentru drepturile femeilor și pentru votul universal în Danemarca.",
            "Pădurile care înconjoară dealul fac parte dintr-una dintre cele mai mari zone forestiere neîntrerupte din țară, fiind pline de trasee de drumeție."
        ]
    },
    "nat-arreso": {
        "descriptionAdvanced": "Arresø este cel mai mare lac din Danemarca ca suprafață, situat în nordul insulei Zeelanda, oferind un peisaj de o liniște și o frumusețe aparte. Cu o suprafață de aproape 40 de kilometri pătrați, lacul a fost inițial un fiord conectat la mare, dar a fost separat de aceasta acum câteva mii de ani din cauza ridicării solului și a depunerilor de nisip. Astăzi, Arresø este un habitat vital pentru numeroase specii de păsări și o destinație preferată pentru observatorii de natură și pasionații de navigație cu ambarcațiuni mici. Malurile sale sunt punctate de stufărișuri întinse, păduri și locuri istorice, cum este castelul medieval de lângă orașul Frederiksværk. Lacul oferă un cadru ideal pentru plimbări lungi pe traseele marcate sau pentru a admira apusurile spectaculoase care se oglindesc în apele sale calme și vaste.",
        "factsAdvanced": [
            "Canalul care leagă Arresø de fiordul Roskilde a fost săpat manual de soldați și prizonieri în secolul al XVIII-lea pentru a controla inundațiile.",
            "Lacul este inclus în rețeaua Natura 2000, fiind un loc de cuibărit și popas extrem de important pentru vulturi și alte păsări de pradă rare.",
            "Adâncimea medie a lacului Arresø este surprinzător de mică, de numai 3 metri, deși este cel mai întins lac al țării.",
            "Dealul Maglehøj, situat în apropierea malului, oferă cea mai bună vedere panoramică asupra întregii suprafețe a lacului.",
            "Navigația pe lac este permisă doar cu ambarcațiuni ecologice sau cu vele, pentru a proteja ecosistemul fragil și liniștea păsărilor."
        ]
    },
    "nat-fureso": {
        "descriptionAdvanced": "Furesø este cel mai adânc lac din Danemarca și o destinație recreativă de top situată la doar câțiva kilometri de Copenhaga, în nordul insulei Zeelanda. Lacul este renumit pentru apele sale neobișnuit de limpezi și pentru malurile sale variate, care includ plaje cu nisip, zone împădurite și stânci abrupte. Este locul preferat al localnicilor pentru înot, navigație și canotaj în timpul verii, oferind mai multe zone special amenajate pentru baie, cum este faimosul Furesøbad. În jurul lacului se întinde un parc natural vast, cu trasee de drumeție și ciclism care șerpuiesc prin păduri seculare de fagi și oferă vederi sclipitoare spre apă. Furesø reprezintă o oază de natură pură aflată la marginea metropolei, fiind un exemplu perfect al modului în care danezii reușesc să integreze activitățile în aer liber în viața de zi cu zi.",
        "factsAdvanced": [
            "Furesø atinge o adâncime maximă de 37,7 metri, fiind format într-o groapă adâncă săpată de ghețari în timpul erei glaciare.",
            "Calitatea apei este atât de bună încât lacul găzduiește specii rare de pești și plante subacvatice care au dispărut din alte lacuri daneze.",
            "În timpul iernilor extrem de geroase, lacul îngheață complet, devenind un loc popular pentru patinaj și plimbări pe gheață.",
            "Vaporul cu pasageri 'Baadfarten' operează pe lac de peste 120 de ani, legând diversele localități de pe malurile sale printr-o rută pitorească.",
            "Zona lacului a fost o sursă de inspirație pentru mulți pictori dán din epoca romantică, care au capturat lumina sa unică în tablouri celebre."
        ]
    },
    "nat-gudenaen": {
        "descriptionAdvanced": "Gudenå este cel mai lung râu din Danemarca, șerpuind pe o distanță de aproximativ 160 de kilometri prin inima Iutlandei, de la izvoarele sale din Tinnet Krat până la vărsarea în fiordul Randers. Râul traversează regiunea lacurilor din centrul țării, formând un coridor natural spectaculos care leagă păduri, câmpii și orașe istorice precum Silkeborg și Randers. Gudenå este paradisul pasionaților de canoe și caiac, fiind cea mai populară rută de navigație recreativă din Danemarca, unde călătorii pot pluti zile întregi printre peisaje naturale virgine. De-a lungul malurilor sale se află numeroase locuri de campare, hanuri istorice și puncte de interes cultural, cum ar fi vechile poteci ale trăgătorilor de barje. Râul nu este doar o resursă naturală majoră, ci și un simbol al spiritului de aventură și al iubirii danezilor pentru viața în aer liber.",
        "factsAdvanced": [
            "Gudenå a fost timp de secole o arteră comercială vitală, mărfurile fiind transportate pe barje mari trase de cai sau oameni de-a lungul malurilor.",
            "Râul adăpostește o populație semnificativă de somoni și păstrăvi, fiind una dintre cele mai bune destinații de pescuit sportiv din Scandinavia.",
            "La izvoarele râului se află singura zonă din Danemarca unde două râuri majore (Gudenå și Skjern Å) izvorăsc la doar câteva sute de metri unul de celălalt.",
            "În secolul al XIX-lea, energia râului a fost folosită pentru a alimenta numeroase fabrici de hârtie și mori, punând bazele industrializării regiunii.",
            "Există o tradiție anuală numită 'Regata Gudenå', care este una dintre cele mai lungi și mai dificile competiții de maraton în canoe din lume."
        ]
    },
    "nat-skern-aa": {
        "descriptionAdvanced": "Skjern Å este râul cu cel mai mare debit din Danemarca și scena celui mai ambițios proiect de restaurare a naturii din Europa de Nord. În anii '60, râul a fost îndreptat artificial pentru a câștiga teren agricol, dar acest lucru a dus la un dezastru ecologic, astfel că la începutul anilor 2000 cursul său natural și meandrele au fost refăcute complet. Astăzi, valea râului Skjern Å este o zonă umedă imensă și sălbatică, un paradis pentru păsări, vidre și pentru celebrul somon de Skjern, care revine aici pentru a depune icre. Vizitatorii pot explora zona folosind podurile suspendate spectaculoase sau pot traversa râul cu mici bacuri acționate manual, trăind o experiență autentică în natură. Skjern Å este o dovadă vie a faptului că omul poate repara greșelile trecutului și poate reda naturii spațiul necesar pentru a înflori în toată splendoarea sa.",
        "factsAdvanced": [
            "Proiectul de renaturare a râului Skjern Å a costat peste 250 de milioane de coroane daneze și a implicat mutarea a milioane de metri cubi de pământ.",
            "Somonul de Skjern este o specie unică, genetic diferită de alți somoni, putând atinge dimensiuni impresionante de peste 20 de kilograme.",
            "Delta râului la vărsarea în fiordul Ringkøbing este un loc de popas crucial pentru mii de gâște sălbatice și alte păsări migratoare în timpul iernii.",
            "Două bacuri acționate prin tragerea unei frânghii permit turiștilor să traverseze râul gratuit, oferind o aventură inedită pentru copii și adulți.",
            "Turnurile de observație răspândite de-a lungul văii oferă puncte excelente de belvedere pentru a admira peisajul vast și variat al zonelor umede."
        ]
    },
    "nat-aero": {
        "descriptionAdvanced": "Ærø este una dintre cele mai pitorești și autentice insule din Danemarca, situată în arhipelagul de sud al insulei Funen, fiind adesea descrisă ca un muzeu în aer liber al vieții rurale daneze. Insula este celebră pentru orașul său principal, Ærøskøbing, cu străzi pietruite și case din secolul al XVIII-lea, care a primit numeroase premii pentru conservarea sa exemplară. Peisajul insulei este format din dealuri blânde, ferme tradiționale și o coastă variată, cu căsuțe de plajă colorate care au devenit simbolul relaxării la malul mării. Ærø a devenit un lider global în domeniul energiei regenerabile, producând mai multă energie verde decât consumă, datorită turbinelor eoliene și panourilor solare proprii. Vizitarea insulei Ærø este o călătorie înapoi în timp, într-un ritm lent și liniștit, unde ospitalitatea locală și frumusețea peisajului maritim creează o atmosferă de 'hygge' pur.",
        "factsAdvanced": [
            "Ærøskøbing este supranumit 'orașul basm' al Danemarcei datorită arhitecturii sale perfect conservate de peste 250 de ani.",
            "Insula găzduiește 'Ellen', unul dintre cele mai puternice feriboturi complet electrice din lume, care leagă insula de continent fără emisii.",
            "Ærø este o destinație internațională extrem de populară pentru nunți, peste 2.000 de cupluri din întreaga lume alegând să se căsătorească aici anual.",
            "Farul Skjoldnæs, situat în vârful nordic al insulei, este construit din granit și oferă o vedere spectaculoasă spre coasta Germaniei.",
            "Numele insulei se traduce literal prin 'Insula Arțarului', deși astăzi este mai degrabă cunoscută pentru livezile sale și agricultura ecologică."
        ]
    },
    "nat-gribskov": {
        "descriptionAdvanced": "Gribskov este una dintre cele mai mari și mai vechi păduri din Danemarca, situată în nordul insulei Zeelanda și făcând parte din situl UNESCO 'Peisajul de vânătoare par force'. Pădurea este un mozaic fascinant de fagi și stejari seculari, zone umede, lacuri ascunse și poieni deschise, oferind un habitat ideal pentru cerbi, vulturi și numeroase specii rare de plante. Timp de secole, Gribskov a fost terenul de vânătoare preferat al regilor danezi, amprenta acestora fiind vizibilă și astăzi în sistemul de drumuri rectilinii concepute pentru vânătoarea călare. Pentru locuitorii Copenhagăi, pădurea reprezintă refugiul perfect în natură, oferind sute de kilometri de trasee pentru drumeție, ciclism și călărie. Atmosfera din Gribskov este una de sălbăticie controlată, unde liniștea adâncă este întreruptă doar de sunetele pădurii, oferind o conexiune profundă cu mediul natural în orice sezon.",
        "factsAdvanced": [
            "Gribskov adăpostește una dintre cele mai mari populații libere de cerbi lopătari din Danemarca, care pot fi văzuți frecvent în zonele liniștite.",
            "Lacul Esrum, aflat la marginea pădurii, este al doilea cel mai mare lac din Danemarca și este renumit pentru puritatea apei sale.",
            "Pădurea conține numeroase monumente preistorice, inclusiv dolmene și tumuli care atestă prezența umană de peste 5.000 de ani.",
            "Sistemul de drumuri 'par force' a fost proiectat special pentru ca regele să poată urmări vânătoarea dintr-un punct central unde se intersectau toate căile.",
            "În Gribskov se află și 'Izvorul Sfintei Elena', un loc despre care legenda spune că are puteri vindecătoare, fiind un loc de pelerinaj în trecut."
        ]
    }
}

# The strategy:
# 1. Split the content into top-level exports and POI objects within arrays.
# 2. For each POI, reconstruct it from scratch if necessary or carefully update.
# Given the broken state, I'll try to find POIs in the BROKEN file and fix them.

# First, let's clean up the broken content by removing all descriptionAdvanced and factsAdvanced that I added, 
# and then add them back correctly.

# A more reliable way: find each POI starting with { id: "..." and ending with }
# and replace its descriptionAdvanced and factsAdvanced blocks.

def fix_poi(match):
    poi_text = match.group(0)
    
    # Extract ID
    id_match = re.search(r'id:\s*["\']([^"\']+)["\']', poi_text)
    if not id_match:
        return poi_text
    poi_id = id_match.group(1)
    
    if poi_id not in poi_data:
        return poi_text
    
    data = poi_data[poi_id]
    
    # 1. Remove all existing descriptionAdvanced and factsAdvanced (including broken ones)
    poi_text = re.sub(r',\s*descriptionAdvanced:\s*\{.*?\}(?=\s*[,}])', '', poi_text, flags=re.DOTALL)
    poi_text = re.sub(r',\s*factsAdvanced:\s*\{.*?\}(?=\s*[,}])', '', poi_text, flags=re.DOTALL)
    
    # 2. Re-insert them correctly before image or at the end
    ro_desc = data["descriptionAdvanced"]
    ro_facts = json.dumps(data["factsAdvanced"], ensure_ascii=False)
    
    new_blocks = f''',
  descriptionAdvanced: {{
    de: "",
    hu: "",
    ro: "{ro_desc}",
    en: ""
  }},
  factsAdvanced: {{
    de: [],
    hu: [],
    ro: {ro_facts},
    en: []
  }}'''

    if 'image:' in poi_text:
        poi_text = re.sub(r'(\s*)image:', fr'{new_blocks},\1image:', poi_text)
    else:
        # Insert before the last closing brace
        poi_text = re.sub(r'(\s*)\}\s*$', fr'{new_blocks}\1}}', poi_text)
    
    return poi_text

# To avoid matching nested braces incorrectly, we use a regex that matches until the next POI start or array end.
# But since POIs are separated by commas in arrays, we can use that.

# Clean up the syntax error I introduced in denmarkCountry description
content = content.replace('"en": "Denmark is a Scandinavian country known for its high quality of life, iconic design, and as the oldest kingdom in Europe."\n  ,', '"en": "Denmark is a Scandinavian country known for its high quality of life, iconic design, and as the oldest kingdom in Europe."\n  },')

# Now apply fix_poi to each POI block
# We match { id: ... } 
# This regex is a bit greedy but should work for this specific file structure.
poi_pattern = r'\{[^{]*?id:\s*["\'][^"\']+?["\'].*?\n\s*\}'
fixed_content = re.sub(poi_pattern, fix_poi, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(fixed_content)

print("Successfully fixed denmarkPoi.ts")
