import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraElsalvadorCitiesV2.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

updates = {
    "soyapango-cities-v2": {
        "desc": "Soyapango este unul dintre cele mai dinamice și dens populate centre urbane din zona metropolitană a capitalei San Salvador. Orașul funcționează ca un motor industrial vital al țării, găzduind numeroase fabrici și complexe comerciale de mari dimensiuni, precum faimosul Plaza Mundo. Deși se confruntă cu provocări urbanistice semnificative, Soyapango rămâne un nod economic crucial și un punct de referință pentru comerțul regional. Atmosfera sa vibrantă reflectă ritmul rapid al vieții moderne din El Salvador, fiind locul unde mii de navetiști își desfășoară activitatea zilnică.",
        "facts": [
            "Este recunoscut ca fiind inima industrială a statului El Salvador datorită numeroaselor fabrici prezente.",
            "Găzduiește centrul comercial Plaza Mundo, unul dintre cele mai mari și moderne din întreaga regiune.",
            "Orașul are una dintre cele mai ridicate densități ale populației din America Centrală.",
            "Joacă un rol strategic esențial în logistica și distribuția bunurilor de consum în zona metropolitană."
        ]
    },
    "mejicanos-cities-v2": {
        "desc": "Situat la nord de capitală, Mejicanos este un oraș cu o identitate culturală puternică și tradiții adânc înrădăcinate. Este faimos în întreaga țară pentru preparatul tradițional Yuca con Chicharrón, căruia îi este dedicat un festival anual de amploare. Peisajul urban este definit de piețe locale animate și o atmosferă efervescentă care oferă o privire autentică asupra vieții cotidiene salvadoriene. Deși este o zonă dens populată, spiritul comunitar și moștenirea gastronomică îi conferă un farmec aparte în inima locuitorilor.",
        "facts": [
            "Orașul este considerat capitala gastronomică a preparatului tradițional Yuca con Chicharrón.",
            "În fiecare lună august, localitatea găzduiește popularul Festival al Yucăi, atrăgând numeroși vizitatori.",
            "Numele orașului provine de la aliații mexicani care s-au stabilit în această zonă în timpul cuceririi spaniole.",
            "Găzduiește mai multe biserici și clădiri istorice care reflectă evoluția urbană de-a lungul secolelor."
        ]
    },
    "apopa-cities-v2": {
        "desc": "Apopa servește drept un nod de transport strategic pentru călătorii și fluxurile de mărfuri din nordul statului El Salvador. În ultimele decenii, orașul a cunoscut o creștere exponențială, transformându-se dintr-o comunitate rurală într-un centru urban major. Situat în valea Apopa, orașul oferă vederi impresionante spre munții învecinați și este o locație importantă pentru noile proiecte rezidențiale. Rolul său economic este fundamental, fiind punctul de tranzit principal către frontiera de nord a țării.",
        "facts": [
            "Numele Apopa provine din limba nahuatl și se traduce prin locul cețurilor.",
            "Este un punct de oprire esențial pe autostrada Troncal del Norte, care leagă capitala de Honduras.",
            "În regiune au fost descoperite situri arheologice importante ce datează din perioada precolumbiană.",
            "Orașul este unul dintre cele mai rapide centre urbane în dezvoltare din zona metropolitană."
        ]
    },
    "delgado-cities-v2": {
        "desc": "Ciudad Delgado este un oraș relativ tânăr, format în anul 1935 prin fuziunea a trei localități istorice: San Sebastián, Aculhuaca și Paleca. Numele său îl onorează pe José Matías Delgado, unul dintre părinții fondatori ai independenței salvadoriene și erou național. Orașul prezintă un amestec interesant de zone rezidențiale și ateliere meșteșugărești care susțin economia locală prin tradiții vechi. Datorită poziției sale strategice, acesta facilitează conexiunea rutieră vitală între capitală și regiunile de nord și est ale țării.",
        "facts": [
            "Orașul a fost numit în onoarea preotului José Matías Delgado, lider al mișcării de independență.",
            "S-a format prin unirea administrativă a municipalităților Aculhuaca, Paleca și San Sebastián.",
            "Este un centru important pentru micile industrii meșteșugărești și comerțul local de proximitate.",
            "Localitatea joacă un rol cheie în tranzitul rutier către departamentele din nordul țării."
        ]
    },
    "ilopango-city-cities-v2": {
        "desc": "Orașul Ilopango este legat inseparabil de lacul omonim, format în urma unei catastrofe vulcanice preistorice de proporții gigantice. Localitatea este un pilon industrial major al țării, găzduind zona liberă San Bartolo, care oferă mii de locuri de muncă. Pe lângă importanța sa industrială, Ilopango are o semnificație militară deosebită, aici aflându-se aeroportul care a servit mult timp ca principal poartă aeriană internațională. Proximitatea lacului oferă oportunități deosebite pentru turism, pescuit artizanal și sporturi nautice într-un cadru natural spectaculos.",
        "facts": [
            "Găzduiește zona liberă San Bartolo, prima de acest tip înființată în El Salvador.",
            "Aeroportul Ilopango este sediul principal al Forțelor Aeriene Salvadoriene și servește aviația civilă.",
            "Lacul Ilopango, situat lângă oraș, este cel mai mare lac natural din țară și ocupă o calderă vulcanică.",
            "Orașul este un centru logistic esențial pentru transportul de mărfuri în regiunea centrală."
        ]
    },
    "san-marcos-city-cities-v2": {
        "desc": "San Marcos este situat la sud de capitală, într-o zonă deluroasă ce marchează tranziția către peisajul pitoresc din Planes de Renderos. Orașul a devenit în ultimii ani o zonă rezidențială preferată de mulți cetățeni care lucrează în centrul orașului San Salvador. Clima sa plăcută, favorizată de altitudinea mai ridicată, și accesibilitatea excelentă fac din San Marcos un loc atractiv pentru trai și comerț. De-a lungul străzii principale, numeroase magazine și ateliere creează o atmosferă urbană vibrantă și plină de energie.",
        "facts": [
            "Orașul beneficiază de un microclimat mai răcoros decât capitala datorită poziției sale geografice înalte.",
            "Oferă puncte de belvedere spectaculoase asupra văii San Salvador și a vulcanilor din jur.",
            "Este o zonă comercială importantă, cunoscută pentru varietatea magazinelor de proximitate.",
            "Găzduiește campusuri universitare și instituții de învățământ superior de prestigiu."
        ]
    },
    "ahuachapan-cities-v2": {
        "desc": "Ahuachapán este un oraș plin de istorie și farmec, situat în extremitatea vestică a statului El Salvador. Este renumit la nivel mondial pentru centrala sa geotermală, care utilizează căldura pământului pentru a genera o parte semnificativă din energia electrică a țării. Centrul istoric păstrează clădiri coloniale superbe, cum ar fi biserica La Concordia, și un parc central primitor ce amintește de vremurile trecute. În fiecare septembrie, orașul este cuprins de magie în timpul Nopții Felinarelor, un eveniment cultural de o frumusețe rară.",
        "facts": [
            "Centrala geotermală de aici a fost una dintre primele de acest fel construite în America Latină.",
            "Orașul găzduiește anual festivalul Noche de los Farolitos pe data de 7 septembrie.",
            "Este renumit pentru izvoarele termale și fumarolele spectaculoase cunoscute sub numele de Ausoles.",
            "Regiunea este unul dintre principalii producători de cafea de înaltă calitate din țară."
        ]
    },
    "sonsonate-cities-v2": {
        "desc": "Sonsonate, cândva un centru prosper al cultivării cacauei în perioada colonială, rămâne unul dintre cele mai importante noduri comerciale din vestul țării. Orașul este celebru pentru tradițiile sale religioase profunde, în special pentru procesiunile magnifice din Săptămâna Mare, care atrag mii de pelerini. Situat într-o câmpie fertilă la poalele vulcanului Izalco, Sonsonate este un punct vital pentru transportul produselor agricole către portul Acajutla. Numele său, care înseamnă patru sute de ape, reflectă abundența resurselor hidrografice care au susținut dezvoltarea regiunii de-a lungul secolelor.",
        "facts": [
            "Numele orașului provine din limba indigenă și se traduce prin locul celor patru sute de ape.",
            "Este centrul celor mai importante festivități religioase de Paște din întreaga Americă Centrală.",
            "A fost istoric un punct terminus pentru una dintre primele linii de cale ferată din El Salvador.",
            "Regiunea este un producător major de trestie de zahăr și produse lactate tradiționale."
        ]
    },
    "zacatecoluca-cities-v2": {
        "desc": "Zacatecoluca este situat pitoresc la poalele impunătorului vulcan San Vicente și servește drept centru cultural și administrativ al departamentului La Paz. Orașul se mândrește cu faptul că este locul de naștere al preotului José Simeón Cañas, cunoscut drept eliberatorul sclavilor în America Centrală. Centrul istoric emană un aer colonial relaxat, cu străzi care invită la explorare și monumente care omagiază trecutul glorios. Economia locală este susținută de producția agricolă bogată a câmpiilor de coastă, transformând orașul într-un centru de schimb vital.",
        "facts": [
            "Este locul de naștere al eroului național José Simeón Cañas, luptător pentru drepturile omului.",
            "Catedrala din localitate este una dintre cele mai impunătoare structuri religioase din regiune.",
            "Orașul este situat strategic la baza sudică a vulcanului San Vicente, numit și Chichontepec.",
            "Reprezintă un centru major de colectare și distribuție pentru cerealele și fructele tropicale din zonă."
        ]
    },
    "chalatenango-cities-v2": {
        "desc": "Chalatenango reprezintă inima nordului muntos al statului El Salvador, oferind o atmosferă complet diferită de regiunile de coastă. Orașul, numit adesea cu afecțiune Chalate, este cunoscut pentru clima sa plăcută și răcoroasă, precum și pentru ospitalitatea deosebită a locuitorilor săi. Fiind centrul agricol al regiunii, aici se adună fermierii din munții învecinați pentru a-și vinde produsele proaspete, de la cafea la fructe de munte. Peisajele din jur sunt dominate de pini și stejari, oferind un refugiu natural spectaculos pentru iubitorii de drumeții.",
        "facts": [
            "Este capitala celui mai mare departament ca suprafață din El Salvador.",
            "Orașul este faimos pentru produsele sale artizanale din lemn și broderiile tradiționale.",
            "Regiunea a jucat un rol central în evenimentele istorice majore ale țării din secolul XX.",
            "În apropiere se află lacul Cerrón Grande, o resursă vitală pentru pescuit și energie hidroelectrică."
        ]
    },
    "usulutan-cities-v2": {
        "desc": "Usulután este cel mai important oraș din estul țării și motorul economic al uneia dintre cele mai fertile regiuni agricole din El Salvador. Situat într-o câmpie vastă între coasta Pacificului și lanțul muntos, orașul este un punct major de tranzit pentru produsele precum trestia de zahăr și cerealele. Proximitatea Golfului Jiquilisco îi conferă o importanță strategică pentru conservarea naturii și ecoturism. Istoria sa este legată de epoca de aur a bumbacului, care a adus o mare prosperitate și dezvoltare urbană acestui centru vibrant.",
        "facts": [
            "Numele Usulután provine din limba nahuatl și înseamnă locul oceloților.",
            "În trecut, a fost considerat capitala bumbacului din America Centrală datorită producției masive.",
            "Orașul este poarta principală de acces către rezervația biosferei din Golful Jiquilisco.",
            "Găzduiește unul dintre cele mai importante centre medicale și educaționale din estul țării."
        ]
    },
    "cojutepeque-cities-v2": {
        "desc": "Cojutepeque este renumit în întreaga țară pentru specialitățile sale culinare, în special pentru delicioșii cârnați chorizo care pot fi găsiți la fiecare colț de stradă. Orașul este situat spectaculos pe pantele dealului Cerro de las Pavas, un loc sacru care adăpostește o statuie a Fecioarei și reprezintă un punct important de pelerinaj. De la înălțimea sa, vizitatorii pot admira vederi uluitoare asupra interiorului țării și până la lacul Ilopango. Adesea numit orașul cețurilor, Cojutepeque oferă o atmosferă mistică atunci când norii coboară peste străzile sale istorice.",
        "facts": [
            "Este recunoscut la nivel național pentru producția artizanală de chorizo și longaniza.",
            "Dealul Cerro de las Pavas este un sit religios major, vizitat de mii de pelerini în decembrie.",
            "Orașul a servit de mai multe ori ca capitală provizorie a statului El Salvador în perioade de criză.",
            "Poziția sa pe autostrada Panamericană îl face un nod comercial vital între capitală și est."
        ]
    },
    "la-union-cities-v2": {
        "desc": "La Unión este poarta de ieșire a statului El Salvador către Golful Fonseca și un punct strategic esențial pentru comerțul maritim cu Honduras și Nicaragua. Orașul găzduiește portul modern Cutuco, un simbol al progresului economic pentru regiunea de est a țării. Briza sărată a mării și vederea asupra insulelor vulcanice din golf conferă localității o atmosferă maritimă unică și plină de viață. Vizitatorii se pot bucura de excursii cu barca spre insule idilice precum Meanguera, unde natura neatinsă și plajele liniștite oferă o experiență de neuitat.",
        "facts": [
            "Portul La Unión este unul dintre cele mai adânci și moderne din întreaga regiune a Americii Centrale.",
            "Orașul marchează punctul terminus oficial al autostrăzii Panamericane pe teritoriul salvadorian.",
            "Este un centru major pentru industria pescuitului și prelucrarea produselor marine.",
            "Din port pornesc ambarcațiuni către insulele pitorești din Golful Fonseca, cum ar fi Conchagüita."
        ]
    },
    "sensuntepeque-cities-v2": {
        "desc": "Sensuntepeque, situat în zonele înalte și accidentate din Cabañas, este un oraș cu o puternică tradiție agricolă și o scenă meșteșugărească vibrantă. Este cunoscut la nivel național pentru lucrările sale superbe din lut și ceramică, care înfățișează adesea scene detaliate din viața rurală. Orașul se află într-o vale înconjurată de nenumărate dealuri verzi, ceea ce îi conferă un caracter pitoresc și liniștit. În perioada colonială, a fost un centru minier important, unde se extrăgeau aur și argint, bogăție care a lăsat urme în arhitectura locală.",
        "facts": [
            "Numele său înseamnă patru sute de dealuri, reflectând topografia unică a regiunii înconjurătoare.",
            "Orașul este centrul producției de ceramică artizanală în departamentul Cabañas.",
            "A fost istoric un centru minier de unde se extrăgeau metale prețioase precum aurul și argintul.",
            "Este faimos pentru festivalurile tradiționale ce includ dansuri cu măști și muzică locală."
        ]
    },
    "san-vicente-cities-v2": {
        "desc": "San Vicente este un oraș de o mare importanță istorică și un simbol al rezilienței în fața provocărilor naturale. Situat la umbra impunătorului vulcan Chichontepec, acesta adăpostește comori arhitecturale precum frumoasa biserică albă El Pilar, considerată un exemplu remarcabil de baroc colonial. Orașul servește drept nod comercial central pentru plantațiile de trestie de zahăr și culturile de cereale din împrejurimi. Turnul cu ceas emblematic din parcul central a supraviețuit cutremurelor majore, devenind o mândrie a localnicilor și un simbol al statorniciei lor.",
        "facts": [
            "Biserica El Pilar este o capodoperă a arhitecturii baroce coloniale din secolul al XVIII-lea.",
            "Orașul a fost capitala statului El Salvador în două ocazii diferite de-a lungul istoriei.",
            "Turnul cu ceas din centrul orașului este un punct de reper iconic construit în anii 1930.",
            "Regiunea este celebră pentru dulciurile tradiționale și produsele de panificație artizanale."
        ]
    },
    "gotera-cities-v2": {
        "desc": "San Francisco Gotera este capitala mândră a departamentului Morazán, o regiune marcată profund de istoria sa recentă. Orașul servește drept poartă de acces către munții din nord și este un loc unde tradițiile rurale se împletesc cu comerțul modern. Ca centru administrativ, Gotera joacă un rol decisiv în dezvoltarea nord-estului țării și este punctul de plecare pentru vizitatorii Muzeului Revoluției din Perquín. Numele său provine din limba indigenă lenca și evocă trecutul ancestral al acestor pământuri pline de legende.",
        "facts": [
            "Numele Gotera înseamnă râul șerpilor în limba indigenă lenca.",
            "Este principalul centru administrativ și comercial al departamentului Morazán.",
            "Orașul a avut o importanță strategică majoră în timpul conflictului civil din anii '80.",
            "Găzduiește cele mai mari târguri de animale și expoziții agricole din regiunea de est."
        ]
    },
    "colon-city-cities-v2": {
        "desc": "Colón este un oraș cu o creștere rapidă, transformându-se dintr-o zonă agricolă într-o suburbie industrială și rezidențială importantă la vest de capitală. Situat strategic pe autostrada principală către vest, acesta găzduiește mari proiecte rezidențiale noi, precum Lourdes, care atrag mii de familii. Orașul îmbină dezvoltarea economică dinamică cu zone rurale care rămân vitale pentru cultivarea cerealelor și fructelor. Numeroase zone libere și centre logistice sunt stabilite aici, consolidând rolul orașului ca motor economic regional între Santa Tecla și Santa Ana.",
        "facts": [
            "Zona Lourdes din cadrul municipalității Colón este una dintre ariile urbane cu cea mai rapidă expansiune.",
            "Găzduiește numeroase zone libere și parcuri logistice de importanță națională.",
            "Este situat strategic pe ruta principală ce leagă San Salvador de orașul Santa Ana.",
            "Reprezintă un punct de legătură crucial între zonele industriale din vest și piața capitalei."
        ]
    },
    "acajutla-cities-v2": {
        "desc": "Acajutla reprezintă inima comerțului exterior salvadorian, fiind cel mai modern și activ port maritim al țării. Încă din perioada colonială, această locație a avut o importanță strategică crucială pentru exportul de produse precum cafeaua și zahărul. Peisajul orașului este dominat de infrastructura portuară masivă, de rafinăria de petrol și de o comunitate vibrantă de muncitori și pescari. Dincolo de aspectul industrial, Acajutla este o destinație populară pentru gastronomia marină, restaurantele de pe coastă oferind preparate proaspete și delicioase în sunetul valurilor Pacificului.",
        "facts": [
            "Prin portul Acajutla trece peste 90% din volumul total de mărfuri maritime ale țării.",
            "Aici a avut loc în 1524 o bătălie istorică între Pedro de Alvarado și războinicii indigeni Pipil.",
            "Orașul găzduiește singura rafinărie de petrol activă din El Salvador.",
            "Este faimos pentru varietatea și prospețimea fructelor de mare servite în restaurantele locale."
        ]
    },
    "iztapán-cities-v2": {
        "desc": "San Sebastián Salitrillo este un oraș fermecător din vestul țării, apreciat pentru tradiția sa agricolă și atmosfera sa liniștită. Situat strategic pe drumul către Guatemala, orașul servește ca o piață locală importantă pentru cereale și cafea de înaltă calitate. În ciuda dezvoltării recente, localitatea și-a păstrat caracterul autentic, vizibil în arhitectura tradițională și în piața centrală primitoare. În ultimii ani, a devenit o opțiune rezidențială populară pentru cei care lucrează în orașul învecinat Santa Ana, oferind un echilibru perfect între mediul rural și cel urban.",
        "facts": [
            "Orașul este situat într-una dintre cele mai bune regiuni producătoare de cafea din El Salvador.",
            "În fiecare an, în luna ianuarie, se sărbătoresc festivitățile în onoarea Sfântului Sebastian.",
            "Beneficiază de o poziție geografică favorabilă, fiind situat pe ruta comercială către Guatemala.",
            "A cunoscut o dezvoltare rezidențială semnificativă datorită proximității față de Santa Ana."
        ]
    },
    "chalchuapa-cities-v2": {
        "desc": "Chalchuapa este o adevărată bijuterie arheologică și una dintre cele mai vechi așezări locuite continuu din întreaga Americă. Aici se află impresionantele ruine mayașe de la Tazumal și Casa Blanca, martori ai unei istorii de mii de ani. Orașul nu este însă doar un muzeu în aer liber, ci o comunitate vibrantă unde istoria și prezentul coexistă într-un mod fascinant. Centrul colonial și gastronomia tradițională, cum ar fi faimoasele produse de patiserie semitas, atrag numeroși vizitatori dornici să descopere rădăcinile profunde ale culturii salvadoriene.",
        "facts": [
            "Adăpostește situl arheologic Tazumal, care conține cea mai mare piramidă precolumbiană din țară.",
            "Este una dintre puținele localități din lume locuite neîntrerupt de peste 3000 de ani.",
            "A fost istoric un centru major de prelucrare și comerț cu obsidian în perioada prehispanică.",
            "Biserica Santiago Apóstol din centru este un monument colonial de o valoare arhitecturală deosebită."
        ]
    },
    "quezaltepeque-city-cities-v2": {
        "desc": "Quezaltepeque este situat strategic la poalele vulcanului San Salvador și reprezintă un centru agricol și industrial vital. Orașul este renumit pentru solurile sale fertile, îmbogățite de cenușa vulcanică, care oferă condiții excelente pentru creșterea animalelor și cultivarea cerealelor. Proximitatea față de capitală și dezvoltarea industrială susținută fac din Quezaltepeque unul dintre cele mai dinamice orașe din departamentul La Libertad. Numele său provine din limba nahuatl și face referire la pasărea quetzal, amintind de bogăția naturală de odinioară a acestei regiuni spectaculoase.",
        "facts": [
            "Numele orașului se traduce prin dealul păsării quetzal în limba nahuatl.",
            "Localitatea găzduiește importante fabrici de textile și întreprinderi agroindustriale.",
            "Este renumit pentru calitatea produselor lactate și a septelului crescut în regiune.",
            "Se află în imediata apropiere a formațiunilor de lavă ale vulcanului San Salvador."
        ]
    },
    "antiguo-cuscatlan-cities-v2": {
        "desc": "Antiguo Cuscatlán este considerat unul dintre cele mai moderne și prospere orașe din El Salvador, fiind situat la marginea capitalei. Este un centru important pentru organizațiile internaționale, ambasade și zone rezidențiale exclusiviste. Orașul adăpostește cele mai mari centre comerciale din țară, universități de prestigiu și complexe de birouri de ultimă generație, fiind un motor esențial pentru economie și educație. Istoric, acest loc a fost capitala străveche a regatului Cuscatlán al indienilor Pipil, păstrând o moștenire culturală prețioasă sub fațada sa modernă.",
        "facts": [
            "A fost capitala istorică a senioriei precolumbiene Cuscatlán înainte de sosirea spaniolilor.",
            "Găzduiește parcul Plan de la Laguna, o grădină botanică situată într-un crater vulcanic stins.",
            "Este sediul celor mai mari centre comerciale din țară, inclusiv Multiplaza și La Gran Vía.",
            "Orașul are unul dintre cele mai ridicate standarde de viață și indici de dezvoltare umană din țară."
        ]
    },
    "armenien-city-cities-v2": {
        "desc": "Armenia este un oraș bogat în tradiții, situat în vestul statului El Salvador, marcat puternic de cultura cultivării cafelei. Situat într-un peisaj deluros pitoresc, orașul servește ca centru comercial pentru fermele și plantațiile din împrejurimi. Arhitectura colonială din centrul orașului și atmosfera relaxată reflectă farmecul rural autentic, în timp ce localitatea rămâne un nod important pentru transportul regional. Legendele locale și ospitalitatea locuitorilor fac din Armenia o oprire interesantă pentru cei care explorează drumul către coasta Pacificului.",
        "facts": [
            "Localitatea este renumită pentru producția de cafea de înaltă calitate destinată exportului.",
            "În centrul orașului se pot admira clădiri cu arhitectură colonială bine conservată.",
            "Este un punct de tranzit important între regiunea muntoasă din vest și zonele de coastă.",
            "Sărbătorile patronale sunt cunoscute pentru paradele pline de culoare și evenimentele culturale."
        ]
    },
    "san-martin-cities-v2": {
        "desc": "San Martín este un oraș dinamic situat la est de capitală, renumit la nivel național pentru producția sa excelentă de mobilă. De-a lungul drumului principal, se găsesc numeroase ateliere și magazine unde se vând piese de mobilier din lemn lucrate manual, de o calitate excepțională. În ultimele decenii, orașul s-a transformat dintr-o comunitate agricolă într-un centru comercial vibrant și o zonă rezidențială esențială pentru zona metropolitană. Poziția sa strategică pe autostrada Panamericană îl face un punct de oprire obligatoriu pentru cei care călătoresc spre estul țării.",
        "facts": [
            "Este considerat centrul principal de fabricare a mobilei artizanale din lemn în El Salvador.",
            "Situat strategic pe autostrada Panamericană, facilitează comerțul cu regiunile estice.",
            "Orașul a cunoscut o creștere demografică rapidă, devenind un pol urban major la est de capitală.",
            "Festivalul local din noiembrie este celebru pentru expozițiile sale de artizanat și paradele festive."
        ]
    },
    "izalko-city-cities-v2": {
        "desc": "Izalco este un loc cu o semnificație culturală și istorică imensă, definit de moștenirea sa indigenă și de proximitatea vulcanului maiestuos cu același nume. Orașul a fost istoric centrul poporului Pipil și păstrează până astăzi numeroase tradiții și obiceiuri ancestrale. O particularitate unică o reprezintă cele două biserici coloniale, care simbolizau în trecut două comunități separate: cea indigenă și cea spaniolă. Izalco a fost marcat profund de evenimentele istorice ale secolului XX, rămânând un simbol al rezistenței și al identității culturale salvadoriene sub privirea „Farului Pacificului”.",
        "facts": [
            "Numele orașului înseamnă locul nisipurilor de obsidian în limba indigenă.",
            "Păstrează structura unică cu două biserici coloniale în același centru urban.",
            "Este un centru major al tradițiilor Cofradías, frății religioase care păstrează rituri antice.",
            "Vulcanul Izalco din apropiere a fost numit Farul Pacificului datorită erupțiilor sale vizibile de pe mare."
        ]
    },
    "la-paz-center-cities-v2": {
        "desc": "El Rosario este un oraș agricol liniștit și fertil din departamentul La Paz, situat în câmpiile de coastă ale statului El Salvador. Localitatea beneficiază de soluri bogate, unde se cultivă intensiv cereale, fructe tropicale și trestie de zahăr pentru consumul intern și export. Atmosfera rurală pașnică și apropierea de zonele de mangrove de pe coastă fac din El Rosario un model de viață autentică în regiunea litorală. Orașul este recunoscut și pentru micile industrii locale care procesează resursele naturale din zonă, păstrând un echilibru între dezvoltare și tradiție.",
        "facts": [
            "Este un centru agricol vital situat în inima zonei de producție a trestiei de zahăr din La Paz.",
            "Orașul beneficiază de proximitatea rezervațiilor naturale de mangrove de pe coasta Pacificului.",
            "Este cunoscut pentru producția locală de sare marină și fructe tropicale proaspete.",
            "Comunitatea păstrează tradiții populare vii, celebrate cu entuziasm în timpul festivalurilor locale."
        ]
    },
    "jiquilisco-cities-v2": {
        "desc": "Jiquilisco este poarta de intrare către una dintre cele mai prețioase comori naturale ale statului El Salvador: Golful Jiquilisco. Orașul în sine este un centru comercial agitat în departamentul Usulután, marcat de proximitatea mării și de câmpia de coastă fertilă. Pentru iubitorii de natură și cercetători, Jiquilisco este punctul de plecare pentru explorarea vastelor păduri de mangrove și a rezervației biosferei UNESCO. Această zonă este un habitat critic pentru speciile de broaște țestoase marine aflate în pericol, fiind totodată un pilon al economiei bazate pe pescuit și acvacultură.",
        "facts": [
            "Rezervația din Golful Jiquilisco este cel mai mare ecosistem de mangrove din El Salvador.",
            "Este un sit Ramsar de importanță internațională pentru protecția zonelor umede și a păsărilor.",
            "Regiunea este centrul național al producției de creveți în ferme specializate de acvacultură.",
            "Reprezintă unul dintre puținele locuri din lume unde cuibărește țestoasa Eretmochelys imbricata."
        ]
    },
    "berlin-sv-cities-v2": {
        "desc": "Berlín este un oraș montan fascinant situat în inima lanțului muntos Sierra Tecapa-Chinameca, remarcabil prin atmosfera sa europeană și clima răcoroasă. Fondat de imigranți germani la sfârșitul secolului al XIX-lea, orașul are un farmec aparte și o arhitectură ce reflectă originile sale diverse. Astăzi, Berlín este cunoscut în special pentru cafeaua sa de înaltă altitudine și pentru activitatea geotermală intensă din zonă. Localitatea servește ca punct de plecare popular pentru excursii către Laguna de Alegría, fiind un refugiu preferat pentru cei care caută aer curat și liniște în munți.",
        "facts": [
            "Orașul a fost numit în onoarea capitalei Germaniei de către fondatorii săi europeni.",
            "Găzduiește una dintre cele mai importante și moderne centrale geotermale din America Centrală.",
            "Este renumit pentru microclimatul său răcoros, fiind o destinație turistică montană populară.",
            "Regiunea produce unele dintre cele mai apreciate soiuri de cafea de specialitate din estul țării."
        ]
    }
}

for poi_id, data in updates.items():
    # Pattern to find the POI block by ID
    poi_pattern = r'(id:\s*"' + poi_id + r'".*?descriptionAdvanced:\s*\{.*?ro:\s*""(.*?)\},.*?factsAdvanced:\s*\{.*?ro:\s*\[\](.*?)\})'
    
    # We need to be careful with the replacement. 
    # Let's try to match the whole block for each POI to be safe.
    
    # Specifically for descriptionAdvanced.ro and factsAdvanced.ro
    desc_pattern = r'(id:\s*"' + poi_id + r'".*?descriptionAdvanced:\s*\{[^}]*?ro:\s*)""'
    content = re.sub(desc_pattern, r'\1"' + data["desc"] + r'"', content, flags=re.DOTALL)
    
    facts_list_str = "[\n        " + ",\n        ".join(['"' + f + '"' for f in data["facts"]]) + "\n      ]"
    facts_pattern = r'(id:\s*"' + poi_id + r'".*?factsAdvanced:\s*\{[^}]*?ro:\s*)\[\]'
    content = re.sub(facts_pattern, r'\1' + facts_list_str, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
