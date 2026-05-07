import re, json

data = {
  "city-eskifjordur-extra": {
    "desc": "Eskifjörður este un oraș pescăresc pitoresc situat în inima fiordurilor de est ale Islandei. Încă din secolul al XVIII-lea, a fost un centru important pentru pescuit și comerțul maritim. Astăzi, orașul își păstrează farmecul istoric prin casele sale tradiționale din lemn, vopsite în culori vii. Vizitatorii pot explora Muzeul Maritim al Estului Islandei, care detaliază viața aspră a pescarilor din trecut. Înconjurat de munți impunători, orașul este, de asemenea, un punct de plecare excelent pentru drumeții montane și explorarea naturii sălbatice din regiune.",
    "facts": [
      "A fost un post comercial oficial începând cu anul 1786.",
      "Găzduiește Muzeul Maritim al Estului Islandei, amplasat într-o veche clădire comercială din 1816.",
      "Muntele Hólmatindur domină peisajul orașului cu o înălțime de 985 metri.",
      "Populația sa numără aproximativ 1.000 de locuitori."
    ]
  },
  "city-djupivogur-extra": {
    "desc": "Djúpivogur este un sat fermecător de pe coasta de est a Islandei, cu o istorie comercială care datează din 1589. Situat pe o peninsulă mică, oferă vederi spectaculoase asupra oceanului și a insulei Papey. Orașul este dominat de muntele Búlandstindur, o formațiune piramidală de 1.069 de metri, despre care se crede că posedă energie mistică. Djúpivogur este un refugiu pentru iubitorii de natură, în special pentru observatorii de păsări, datorită zonelor umede din apropiere. Comunitatea se mândrește cu stilul său de viață relaxat, fiind prima municipalitate din Islanda care s-a alăturat mișcării internaționale Cittaslow.",
    "facts": [
      "Face parte din mișcarea Cittaslow, promovând un ritm de viață liniștit.",
      "Muntele Búlandstindur este o atracție principală, vizibilă din tot satul.",
      "Instalația de artă 'Ouăle din Golful Veseliei' include 34 de ouă de granit supradimensionate.",
      "Cea mai veche clădire, Langabúð, a fost construită în 1790."
    ]
  },
  "city-fellabaer-extra": {
    "desc": "Fellabær este o comunitate aflată chiar vizavi de Egilsstaðir, conectată de acesta printr-un pod peste râul glaciar Lagarfljót. Deși mai mic și mai rezidențial, împărtășește infrastructura și serviciile cu vecinul său mai mare. Poziția sa oferă acces rapid la atracțiile din estul Islandei, inclusiv la cea mai mare pădure din țară, Hallormsstaðaskógur. Râul Lagarfljót este renumit în folclorul local ca fiind casa legendarului monstru acvatic Lagarfljótsormur. Zona din jur este perfectă pentru plimbări liniștite și explorarea vieții rurale islandeze contemporane.",
    "facts": [
      "Este separat de Egilsstaðir de cursul râului Lagarfljót.",
      "Legenda spune că un monstru similar cu cel din Loch Ness trăiește în râul adiacent.",
      "Este un punct de tranzit important pentru călătoriile spre est și zonele muntoase.",
      "Majoritatea locuitorilor fac naveta zilnic peste pod."
    ]
  },
  "city-eyrarbakki-extra": {
    "desc": "Eyrarbakki a fost cândva cel mai important port și centru comercial de pe coasta de sud a Islandei. Astăzi, satul liniștit a conservat cu grijă multe dintre clădirile sale din lemn din secolul al XIX-lea, oferind o perspectivă rară asupra arhitecturii istorice. Biserica satului, construită în 1890, este un exemplu clasic al stilului local. Zidul de piatră lung care protejează satul de valurile aspre ale Atlanticului a fost construit după inundații devastatoare. Plajele cu nisip negru și zonele umede atrag numeroase specii de păsări migratoare pe parcursul anului.",
    "facts": [
      "Húsið ('Casa'), construită în 1765, este una dintre cele mai vechi clădiri din Islanda.",
      "A fost principalul port al coastei sudice până în secolul XX.",
      "Zidul de coastă a fost înălțat pentru a proteja satul de forța Atlanticului.",
      "Rezervația de păsări Flói din apropiere este un paradis pentru ornitologi."
    ]
  },
  "city-hella-extra": {
    "desc": "Hella este un orășel situat de-a lungul râului Ytri-Rangá, fondat la mijlocul secolului XX ca un hub pentru comunitățile agricole locale. Este o bază excelentă pentru explorarea atracțiilor din sud, inclusiv a faimosului vulcan Hekla și a rezervației naturale Landmannalaugar. Numele său provine de la peșterile antice sculptate în gresie de-a lungul malurilor râului, despre care se crede că au fost locuite de călugării irlandezi înainte de stabilirea vikingilor. Râul Ytri-Rangá este renumit la nivel mondial printre pasionații de pescuit la somon. Pășunile din jurul localității găzduiesc numeroase ferme care cresc cai islandezi de rasă.",
    "facts": [
      "Este unul dintre cele mai bune locuri din Islanda pentru pescuitul de somon.",
      "Găzduiește peșteri istorice realizate manual, cu o origine dezbătută.",
      "Vulcanul Hekla, unul dintre cei mai activi din țară, domină orizontul.",
      "Orășelul a fost înființat oficial abia în anul 1927."
    ]
  },
  "city-fludir-extra": {
    "desc": "Flúðir este un sat înfloritor situat într-o regiune bogată în energie geotermală din sudul Islandei. Datorită resurselor naturale de apă caldă, localitatea a devenit cel mai mare producător de ciuperci și legume din țară, folosind sere luminate pe tot parcursul anului. Secret Lagoon (Laguna Secretă), una dintre cele mai vechi piscine naturale din Islanda, este atracția sa principală. Peisajul înconjurător este presărat cu mici gheizere și izvoare termale fumegânde, creând o atmosferă mistică. Este, de asemenea, un loc preferat de turiști pentru observarea aurorei boreale, datorită poluării luminoase reduse.",
    "facts": [
      "Laguna Secretă (Gamla Laugin) din Flúðir a fost construită în 1891.",
      "Aici se produc anual tone de legume și ciuperci în sere încălzite geotermal.",
      "Satul are un mic gheizer activ numit Litli Geysir.",
      "Este o zonă rurală foarte populară pentru cabanele de vacanță islandeze."
    ]
  },
  "city-heimaey-extra": {
    "desc": "Heimaey, cea mai mare și singura insulă locuită din arhipelagul Vestmannaeyjar, este o minune geologică uimitoare. Insula a intrat în atenția lumii în 1973, când vulcanul Eldfell a erupt neașteptat, acoperind parțial orașul cu lavă și cenușă, ceea ce i-a adus supranumele de 'Pompeii Nordului'. Astăzi, vizitatorii pot explora Muzeul Eldheimar, care prezintă clădiri excavate din sub lavă. Stâncile abrupte ale insulei adăpostesc în timpul verii una dintre cele mai mari colonii de pufini din lume. În ciuda istoriei sale vulcanice violente, comunitatea a reconstruit cu succes orașul, transformându-l într-o destinație unică.",
    "facts": [
      "Erupția vulcanului Eldfell din 1973 a durat aproximativ cinci luni.",
      "Este casa a milioane de pufini pe parcursul lunilor de vară.",
      "Aproximativ 400 de clădiri au fost distruse în timpul erupției din anii '70.",
      "Este singura insulă cu o populație permanentă din Insulele Westman."
    ]
  },
  "city-grindavik-extra": {
    "desc": "Grindavík este un oraș pescăresc istoric, așezat pe un câmp de lavă vechi de mii de ani de pe peninsula Reykjanes. Economia sa a fost întotdeauna ancorată în mare, dispunând de unul dintre cele mai active porturi din țară. În apropiere se află faimoasa Lagună Albastră, un spa geotermal situat pe un teren cu forme vulcanice spectaculoase. Recent, zona a atras atenția geologilor din cauza erupțiilor vulcanice din apropiere de muntele Fagradalsfjall. De asemenea, orașul găzduiește Muzeul Peștelui Sărat, dedicat industriei vitale care a susținut Islanda timp de secole.",
    "facts": [
      "Laguna Albastră, aflată la doar 5 km distanță, este principala atracție turistică.",
      "A fost grav afectat de cutremure și activitate vulcanică începând cu sfârșitul anului 2023.",
      "Muzeul Peștelui Sărat explică istoria exportului islandez de cod.",
      "Populația orașului era în mod tradițional puternic implicată în navigație."
    ]
  },
  "city-gardur-extra": {
    "desc": "Garður, cunoscut oficial ca Suðurnesjabær alături de Sandgerði, se află pe vârful extrem al peninsulei Reykjanes. Este faimos pentru cele două faruri pitorești care supraveghează coasta accidentată. Farul mai vechi, construit în 1897, a ghidat nenumărate nave de pescuit în siguranță spre port. Această zonă de coastă este excepțională pentru observarea păsărilor marine și, ocazional, a balenelor sau delfinilor de pe țărm. Garður are o puternică tradiție muzicală și găzduiește frecvent concerte în clădirile sale istorice comunitare.",
    "facts": [
      "Are două faruri istorice, construite în 1897 și respectiv în 1944.",
      "Apele din apropiere sunt unele dintre cele mai bogate zone de pescuit din sud-vest.",
      "Numele Garður înseamnă 'Zid' sau 'Grădină', referindu-se la un zid vechi despărțitor.",
      "Este o locație excelentă pentru observarea Aurorei Boreale datorită orizontului deschis."
    ]
  },
  "city-hafnarfjordur-extra": {
    "desc": "Hafnarfjörður, al treilea cel mai populat oraș din Islanda, este adesea denumit 'Orașul Elfilor'. Situat chiar la sud de capitală, a fost construit direct peste un câmp de lavă neregulat unde locuitorii cred că se ascund 'oamenii ascunși' (huldufólk). Istoric, a fost un important centru comercial hanseatic și mai târziu englez. Orașul combină atmosfera urbană modernă cu un șarm folcloric neobișnuit, găzduind anual un Festival Viking care atrage entuziaști din întreaga Europă. Portul său natural excelent rămâne inima bătătoare a comunității.",
    "facts": [
      "Tururile elfilor sunt o activitate foarte populară, explorând pietrele vulcanice unde ar trăi creaturile.",
      "Festivalul Viking are loc în fiecare vară, cu reconstituiri de bătălii.",
      "Orașul este parțial construit pe câmpul de lavă Búrfellshraun, vechi de 7.000 de ani.",
      "Este sediul principal al industriei islandeze de prelucrare a aluminiului."
    ]
  },
  "city-gardabaer-extra": {
    "desc": "Garðabær este o municipalitate rezidențială aflată în Regiunea Capitalei, recunoscută pentru calitatea ridicată a vieții și zonele verzi vaste. Istoria sa datează din secolul al IX-lea, zona fiind descrisă ca o fermă în 'Cartea Colonizării' islandeză. Orașul pune un accent deosebit pe conservarea naturii și a istoriei locale, având rezervații naturale precum Álftanes și peninsula Gálgahraun. Tot aici se află și reședința oficială a președintelui Islandei, Bessastaðir. Arhitectura modernă a cartierelor contrastează perfect cu peisajele vulcanice înconjurătoare.",
    "facts": [
      "Reședința prezidențială, Bessastaðir, se află pe teritoriul municipalității.",
      "Singurul magazin IKEA din Islanda este situat în Garðabær.",
      "Are numeroase trasee naturale care traversează câmpurile de lavă locale.",
      "Muzeul de Design și Artă Aplicată (Hönnunarsafn) este o instituție culturală importantă aici."
    ]
  },
  "city-akranes-extra": {
    "desc": "Akranes, o așezare situată pe o peninsulă de pe coasta de vest, are o bogată istorie pescărească inițiată de coloniștii celți în secolul al IX-lea. Deși multă vreme izolată de capitală, construirea tunelului Hvalfjörður a transformat orașul într-o comunitate accesibilă și în plină dezvoltare. Muntele Akrafjall veghează deasupra peisajului și este un traseu preferat de drumeție. Orașul este celebru pentru cele două faruri ale sale, deschise publicului, și pentru plaja Langisandur, una dintre puținele plaje de nisip din Islanda unde localnicii practică înotul în apele reci ale mării. Akranes se mândrește, de asemenea, cu o comunitate pasionată de fotbal.",
    "facts": [
      "Plaja Langisandur a fost distinsă cu prestigiosul steag albastru pentru curățenie.",
      "Tunelul Hvalfjörður a scurtat distanța spre Reykjavík cu aproximativ 45 km.",
      "A fost colonizat inițial de frați de origine irlandeză în anul 880.",
      "Clubul de fotbal din Akranes, ÍA, este unul dintre cele mai de succes din țară."
    ]
  },
  "city-borgarnes-extra": {
    "desc": "Borgarnes servește ca principal centru comercial și de tranzit pentru regiunea de vest a Islandei. Așezat pitoresc pe o peninsulă în fiordul Borgarfjörður, are o semnificație uriașă în cultura islandeză, fiind scena multor evenimente din celebra Saga a lui Egill. Centrul de Colonizare de aici oferă expoziții imersive despre primii oameni sosiți pe insulă și despre viața poetului și războinicului viking Egill Skallagrímsson. Orașul este conectat de restul țării prin al doilea cel mai lung pod din Islanda. Datorită împrejurimilor sale cu munți și izvoare termale, este o bază perfectă de explorare.",
    "facts": [
      "Centrul de Colonizare este esențial pentru a înțelege originile națiunii islandeze.",
      "Podul Borgarfjörður, lung de peste 500 de metri, conectează orașul de ruta principală (Ring Road).",
      "În zonă pot fi găsite situri arheologice asociate cu Egil's Saga.",
      "Borgarnes nu a crescut dintr-un sat de pescari, cum este obișnuit în Islanda, ci din activități comerciale și servicii."
    ]
  },
  "city-grundarfjordur-extra": {
    "desc": "Grundarfjörður este un sat pescăresc de pe peninsula Snæfellsnes, devenit celebru la nivel mondial datorită muntelui iconic Kirkjufell care tronează pe malul golfului. Cu forma sa distinctivă de 'vârf de săgeată', Kirkjufell a devenit o emblemă a Islandei și un loc de pelerinaj pentru fotografi și fanii serialului 'Game of Thrones'. Satul însuși are o istorie comercială puternică, primind dreptul de oraș comercial din partea regelui Danemarcei în secolul al XVIII-lea. Comunitatea mică este implicată activ în turism și ecologie, oferind excursii de observare a balenelor orca în lunile de iarnă. Atmosfera pașnică de aici oferă un contrast superb cu munții și cascadele din jur.",
    "facts": [
      "Muntele Kirkjufell este adesea numit cel mai fotografiat munte din Islanda.",
      "Serialul 'Game of Thrones' a folosit Kirkjufell drept decor pentru 'Muntele în formă de vârf de săgeată'.",
      "Este unul dintre puținele locuri din care orcile (balenele ucigașe) pot fi văzute constant iarna.",
      "Comerțul în acest sat a fost monopolizat de negustorii francezi până la sfârșitul anilor 1700."
    ]
  },
  "city-budardalur-extra": {
    "desc": "Búðardalur este un mic sat rural aflat în valea Dalasýsla, o regiune cu puternice legături istorice încă de la colonizarea Islandei. Așezarea a crescut lent în jurul industriei lăptoarelor, având și astăzi un rol esențial în producția de brânzeturi la nivel național, inclusiv renumitul skyr și camembert islandez. Este locul unde Erik cel Roșu a locuit, iar fiul său, Leif Erikson, care a descoperit America de Nord, a crescut în apropiere. Astăzi, vizitatorii pot explora replica casei lui Erik cel Roșu la muzeul Eiríksstaðir. Este un punct nodal pentru explorarea regiunilor de coastă mai puțin circulate din vest.",
    "facts": [
      "Eiríksstaðir, fosta casă a lui Erik cel Roșu, este acum un muzeu viu în apropiere de sat.",
      "Satul este inima producției de brânzeturi și produse lactate tradiționale islandeze.",
      "Leif Erikson, exploratorul viking, s-a născut la o fermă din vecinătatea Búðardalur.",
      "Satul se află la capătul fiordului Hvammsfjörður, fiind o comunitate predominant agricolă."
    ]
  },
  "city-bolungarvik-extra": {
    "desc": "Bolungarvík, cel mai nordic sat din regiunea Westfjords, este ancorat profund în tradițiile maritime. Ocupând un mic golf înconjurat de munți extrem de abrupți, a fost un avanpost de pescuit esențial de sute de ani. La Muzeul Maritim Ósvör, aflat într-un golfuleț alăturat, vizitatorii pot explora cabane tradiționale din piatră cu acoperiș de iarbă și pot vedea cum se desfășura pescuitul folosind bărci vechi din lemn cu vâsle. Satul a fost extrem de izolat până la construirea unui tunel modern, oferind protecție împotriva avalanșelor. Astăzi, peisajele sale nealterate atrag turiștii pasionați de drumeții și observarea păsărilor.",
    "facts": [
      "Muzeul Ósvör reproduce perfect condițiile de pescuit din secolul al XIX-lea.",
      "Tunelul Bolungarvíkurgöng a fost deschis în 2010 pentru a ocoli traseul periculos de pe coastă.",
      "Muntele Bolafjall, accesibil vara, oferă vederi panoramice către Groenlanda în zilele senine.",
      "Este menționat în Sagas ca fiind un loc de debarcare pentru primii coloniști."
    ]
  },
  "city-flateyri-extra": {
    "desc": "Flateyri este un mic sat pescăresc așezat grațios pe o limbă de nisip în fiordul Önundarfjörður din Westfjords. Ca multe așezări din regiune, istoria sa a fost definită de valurile mării și de munții abrupți care îl înconjoară. În 1995, satul a fost lovit de o avalanșă devastatoare; ca răspuns, a fost construit un baraj uriaș în formă de „V” pentru a devia viitoarele căderi de zăpadă, devenind și o platformă excelentă de observație. Localitatea păstrează și azi spiritul islandez autentic, găzduind cea mai veche librărie din țară, transformată parțial într-un muzeu. Golful calm face din sat un centru popular pentru caiac și pescuit sportiv.",
    "facts": [
      "Librăria satului funcționează fără întrerupere din 1914.",
      "Barajul de protecție împotriva avalanșelor domină vizual dealul din spatele așezării.",
      "A fost un port major de vânătoare de balene în secolul al XIX-lea.",
      "Astăzi, turismul cultural și sporturile nautice aduc noi vizitatori."
    ]
  },
  "city-blonduos-extra": {
    "desc": "Blönduós este cel mai mare oraș de pe coasta golfului Húnaflói din nordul Islandei. Este tăiat în două de râul glaciar Blanda, renumit pentru apele sale excelente de pescuit la somon, care se varsă direct în Oceanul Arctic. Orașul are un ritm liniștit, servind drept poartă de acces către regiunile rurale și muntoase din nord. O structură iconică a localității este Biserica Blönduóskirkja, a cărei arhitectură curbată este inspirată din craterele vulcanice locale. Muzeul Textilului din Islanda, situat aici, onorează lunga tradiție națională a meșteșugului din lână.",
    "facts": [
      "Găzduiește Muzeul Islandez al Textilului (Heimilisiðnaðarsafnið).",
      "Biserica locală deține o arhitectură izbitoare, concepută de dr. Maggi Jónsson.",
      "Râul Blanda este unul dintre cele mai lungi râuri glaciare din Islanda.",
      "Este un centru vital pentru industria agricolă și creșterea ovinelor din nord."
    ]
  },
  "city-hvammstangi-extra": {
    "desc": "Hvammstangi, situat pe peninsula Vatnsnes în nord-vestul Islandei, este recunoscut ca „capitala focilor” a țării. Orașul se bazează pe pescuit, dar a dezvoltat o industrie turistică ecologică puternică în jurul coloniilor mari de foci care se odihnesc pe coastele din apropiere. Centrul Islandez al Focilor de aici oferă informații valoroase despre viața marină și importanța sa ecologică. În plus față de turismul dedicat naturii, regiunea înconjurătoare oferă priveliști frumoase și găzduiește formațiunea stâncoasă bizară Hvítserkur, care seamănă cu un balaur bând apă.",
    "facts": [
      "Centrul Focilor organizează cercetări și ajută turiștii să respecte habitatul animalelor.",
      "Hvítserkur, o formațiune bazaltică de 15 metri, este situat pe peninsula din apropiere.",
      "A primit drepturi comerciale oficiale în anul 1846.",
      "Este recunoscut pentru fabricarea tradițională a îmbrăcămintei din lână."
    ]
  },
  "city-dalvik-extra": {
    "desc": "Dalvík este o comunitate pitorească situată pe coasta de vest a fiordului Eyjafjörður, cel mai lung fiord din nordul Islandei. Portul este inima așezării, susținând flote de pescuit și un număr tot mai mare de ambarcațiuni destinate observării balenelor, domeniu în care Dalvík a dobândit o recunoaștere remarcabilă. Orașul este renumit pe plan național pentru „Ziua Marelui Pește” (Fiskidagurinn mikli), un festival anual unde se oferă preparate din pește gratuit mii de vizitatori. Regiunea muntoasă din jur, cunoscută sub numele de Peninsula Tröllaskagi, este de asemenea un paradis pentru schiul backcountry de nivel mondial și pentru drumeții montane.",
    "facts": [
      "Festivalul Fiskidagurinn mikli din august atrage până la 30.000 de vizitatori anual.",
      "Trei dintre schiorii care au reprezentat Islanda la Jocurile Olimpice provin din acest oraș.",
      "Un cutremur major cu magnitudinea de 6,1 a devastat satul în 1934.",
      "Observarea balenelor are o rată de succes extrem de ridicată în apele fiordului din apropiere."
    ]
  },
  "city-grenivik-extra": {
    "desc": "Grenivík este un sat mic, amplasat la poalele spectaculosului munte Kaldbakur, de-a lungul coastei estice a fiordului Eyjafjörður din nordul Islandei. Drumul spre Grenivík este un capăt de linie (fundătură), ceea ce îi conferă satului o atmosferă de sanctuar neatins, ferit de rutele turistice principale. Zona este faimoasă printre pasionații de activități în aer liber: de la drumeții solicitante până în vârful Kaldbakur (care are peste 1.100 de metri) până la plimbări cu snowmobilul pe timp de iarnă. Moștenirea sa provine din vechile tradiții pescărești, menținute în viață de muzeul local și comunitatea strâns unită.",
    "facts": [
      "Muntele Kaldbakur (1173 m) oferă rute populare de trekking cu vederi spre Cercul Polar de Nord.",
      "Este unul dintre puținele sate islandeze în care drumul asfaltat se termină brusc.",
      "Muzeul Grýtubakki prezintă istoricul așezărilor izolate din fiord.",
      "În timpul iernii, se organizează tururi cu ratracul pe ghețarii din împrejurimi."
    ]
  },
  "city-fellabaer-is-001-extra": {
    "desc": "Fellabær, situată în inima estului Islandei, funcționează ca un nucleu rezidențial vital pe malul estic al lacului Lagarfljót. Datorită proximității sale cu orașul mai mare Egilsstaðir, comunitatea se bucură de liniște, fără a sacrifica facilitățile. Priveliștea apusurilor de soare reflectate în apa tulbure a lacului, unde legenda spune că trăiește viermele uriaș Lagarfljótsormur, este captivantă. Dealurile din spatele localității oferă numeroase trasee accesibile care devin covoare de afine și mure arctice în timpul toamnei.",
    "facts": [
      "Podul de peste Lagarfljót are aproape 300 de metri, fiind esențial pentru transport.",
      "Localitatea a crescut exponențial odată cu dezvoltarea infrastructurii din anii 1970.",
      "Fermele adiacente oferă experiențe agroturistice și echitație islandeză.",
      "Face parte din municipalitatea extinsă Múlaþing."
    ]
  },
  "city-hallormsstadur-extra": {
    "desc": "Hallormsstaður este mai degrabă o destinație rurală idilică decât un oraș tradițional, amplasată în marginea celei mai mari păduri naționale din Islanda, Hallormsstaðaskógur. Într-o țară în mare parte lipsită de copaci, această oază verde de-a lungul malurilor lacului Lagarfljót este excepțională. Satul și ferma silvică de aici au fost esențiale pentru eforturile Islandei de a reîmpăduri zone extinse începând din 1905. Cu numeroase trasee umbrite, locuri de campare pitorești și floră diversă, este o destinație îndrăgită de familiile islandeze în vacanțele de vară.",
    "facts": [
      "Pădurea acoperă 740 de hectare și include peste 80 de specii diferite de copaci.",
      "Primul experiment de plantare a arborilor a început aici la începutul secolului XX.",
      "Fiecare vară găzduiește 'Ziua Pădurii', un festival comunitar al naturii.",
      "Multe dintre casele de lemn se integrează perfect în peisajul rar din Islanda."
    ]
  },
  "city-breiddalsvik-extra": {
    "desc": "Breiðdalsvík este un mic sat de coastă așezat grațios în fața unei plaje extinse cu nisip negru vulcanic din estul Islandei. Așezarea are un șarm liniștit, așezată la gura unei văi largi mărginite de munți înalți și abrupți. Deși numără sub 150 de locuitori, servește drept punct perfect pentru cei care explorează fiordurile de est. Vizitatorii pot admira geologia fascinantă, zona fiind formată în jurul rămășițelor unui vulcan antic stins. Activitățile populare includ observarea păsărilor, plimbările lungi pe plaja de nisip și pescuitul în râurile din vale.",
    "facts": [
      "Plaja cu nisip negru de aici este una dintre cele mai întinse din estul Islandei.",
      "Satul are o fabrică de bere artizanală apreciată, numită Beljandi.",
      "Munții din jur conțin zăcăminte valoroase de zeoliți și cuarț.",
      "Stația originală a telegrafului găzduiește un muzeu cu expoziții despre geologia zonei."
    ]
  },
  "city-borgarfjordur-eystri-extra": {
    "desc": "Borgarfjörður Eystri este considerat unul dintre cele mai izolate și frumoase sate din Islanda, accesibil printr-o trecătoare montană dramatică în nord-est. Cu o populație de sub 100 de persoane, satul se animă spectaculos în timpul verii, când insulița stâncoasă Hafnarhólmi de lângă port devine o creșă pentru aproximativ 10.000 de perechi de pufini, oferind unele dintre cele mai accesibile vizionări ale acestor păsări din lume. Zona este faimoasă și în mitologia locală: stânca Álfaborg din interiorul satului este reședința presupusă a reginei elfilor din Islanda. Munții de riolit și tuf vulcanic colorat sunt o mecca pentru drumeții.",
    "facts": [
      "Hafnarhólmi este probabil cel mai sigur și apropiat loc pentru fotografiatul pufinilor.",
      "Stânca Álfaborg este protejată cultural datorită credințelor în 'oamenii ascunși' (huldufólk).",
      "Munții Dyrfjöll oferă unele dintre cele mai frumoase rute de drumeție montană din țară.",
      "Aici se organizează festivalul anual de muzică indy, Bræðslan, într-o veche fabrică de pește."
    ]
  },
  "city-bakkafjordur-extra": {
    "desc": "Bakkafjörður este un sat pescăresc izolat pe coasta de nord-est a Islandei, la marginea Peninsulei Langanes. Într-o zonă unde elementele naturii domină absolut viața de zi cu zi, comunitatea mică a rămas loială meseriilor tradiționale, în special pescuitului cu bărci mici. Portul, unul dintre puținele locuri de adăpostire sigure de pe această coastă, este protejat de o faleză vulcanică pitorească. Nu departe se află promontoriul Skoruvíkurbjarg, o platformă esențială pentru observarea păsărilor arctice, în special a coloniei uriașe de gâște de mare (gannet). Este locul perfect pentru călătorii care caută solitudine totală.",
    "facts": [
      "Satul are doar în jur de 60 de locuitori permanenți.",
      "Economia locală depinde aproape exclusiv de pescuitul la scară mică și prelucrarea peștelui.",
      "Atracția principală din apropiere este platforma de observare a păsărilor de la Langanes.",
      "O școală locală și magazinul general reprezintă inima socială a micii comunități."
    ]
  },
  "city-brautarholt-extra": {
    "desc": "Brautarholt, situat pe peninsula Skeiðin în sudul Islandei, a fost inițial un centru ecvestru și agricol, crescând ulterior ca un popas pentru călători. Așezarea oferă un cadru complet dominat de câmpiile verzi, fiind mărginită de cel mai lung curs de apă din Islanda, râul Þjórsá. Locuitorii sunt adânc înrădăcinați în tradițiile ecvestre, mulți dintre ei fiind crescători experți ai cailor islandezi. Poziția sa geografică liniștită oferă un contrast reconfortant față de rutele aglomerate ale Cercului de Aur, făcându-l o oază de relaxare rurală și autentică.",
    "facts": [
      "Este un hub național pentru antrenamentul și creșterea calului islandez.",
      "Se află la intersecția unor zone agricole intens cultivate.",
      "Numele se traduce prin 'Calea de-a lungul pădurii'.",
      "În apropiere există numeroase situri arheologice din perioada vikingă."
    ]
  },
  "city-hafnir-extra": {
    "desc": "Hafnir este una dintre cele mai vechi așezări pescărești din Peninsula Reykjanes, având o poveste ancorată în adâncurile oceanului și în corăbiile eșuate de-a lungul istoriei. Deși populația sa a scăzut de-a lungul anilor, semnificația sa a renăscut datorită descoperirilor arheologice recente, inclusiv fundațiile unei case vikinge construite anterior anului oficial de colonizare, 874 d.Hr. Biserica de piatră neagră de aici, construită în 1881, adaugă o aură gotică peisajului stâncos bătut de vânt. Locul este ideal pentru a reflecta asupra vieții aspre pe care primii islandezi au dus-o la marginea oceanului.",
    "facts": [
      "Un sit arheologic recent sugerează că zona a fost locuită înainte de colonizarea oficială (anul 874).",
      "Ancora navei americane Jamestown, eșuată aici în 1881, este expusă ca monument.",
      "În 1995, Hafnir s-a unit cu Keflavík și Njarðvík pentru a forma o singură municipalitate.",
      "Biserica Kirkuvogskirkja este renumită pentru construcția sa robustă din lemn."
    ]
  },
  "city-hellissandur-extra": {
    "desc": "Hellissandur a fost cândva un post pescăresc înfloritor în extremitatea vestică a peninsulei Snæfellsnes, recunoscut pentru îndrăzneala marinarilor săi în secolele trecute. Astăzi, atrage atenția ca o destinație culturală colorată, locuitorii transformând vechi depozite și clădiri în opere de artă stradală uimitoare, fiind recunoscut uneori drept 'capitala artei stradale' din regiune. De asemenea, orașul găzduiește Muzeul Maritim Sjómannagarðurinn, care conservă una dintre cele mai vechi bărci cu vâsle din Islanda. Cu vulcanul Snæfellsjökull vizibil în depărtare, peisajul oferă un amestec interesant între creativitatea umană și natura spectaculoasă.",
    "facts": [
      "A fost unul dintre cele mai importante și vechi sate de pescuit din Islanda în urmă cu 400 de ani.",
      "Muzeul Mării (Sjómannagarðurinn) prezintă barca 'Bliki', construită în 1826.",
      "Orașul este plin de artă stradală vibrantă finanțată de comunitate.",
      "Antena radio Gufuskálar, aflată în apropiere, este cea mai înaltă structură din Europa de Vest (412m)."
    ]
  }
}

