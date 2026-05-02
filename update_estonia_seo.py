
import re
import json

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/estoniaPoi.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

data = {
    "ee-tallinn": {
        "factsAdvanced": [
            "Az óvárost körülvevő eredeti városfal hossza megközelíti a 2 kilométert.",
            "Tallinn 2011-ben Európa Kulturális Fővárosa volt.",
            "A regisztrált lakosok számára 2013 óta ingyenes a tömegközlekedés.",
            "A Szent Olaf-templom a 16. században valószínűleg a világ legmagasabb épülete volt.",
            "A 314 méter magas Tallinni tévétorony Észtország legmagasabb építménye."
        ]
    },
    "ee-tartu": {
        "descriptionAdvanced": "Tartu, Észtország második legnagyobb városa, az ország szellemi és kulturális szívének számít. A várost az 1632-ben alapított tekintélyes Tartui Egyetem uralja, amely fiatalos és intellektuális légkört áraszt a történelmi falak között. Az Emajõgi folyó komótosan szeli át a központot, festői partjaival és hídjaival különleges bájt kölcsönözve a településnek. A Városháza tér a klasszicista építészetével és a híres „Csókolózó diákok” szökőkútjával a közösségi élet központja. A Toomemägi dombon álló gótikus katedrális romjai és a régi csillagvizsgáló az ország tudományos múltjába engednek betekintést. Tartu 2024-ben Európa Kulturális Fővárosaként bizonyítja, hogy a művészet és a tudomány dinamikus találkozóhelye.",
        "factsAdvanced": [
            "A Tartui Egyetem Észak-Európa egyik legrégebbi felsőoktatási intézménye.",
            "A várost gyakran emlegetik a „jó gondolatok városaként”.",
            "A Tartui ferde ház dőlésszöge nagyobb, mint a pisai ferde toronyé.",
            "It található az AHHAA Tudományos Központ, a Baltikum legnagyobb ilyen intézménye.",
            "Az Észt Nemzeti Múzeum lenyűgöző modern épülete a város szélén kapott helyet."
        ]
    },
    "ee-parnu": {
        "descriptionAdvanced": "Pärnu, amelyet szeretettel Észtország „nyári fővárosának” is neveznek, az ország első számú tengerparti üdülőhelye. A Riga-öböl partján fekvő város hosszú, fehér homokos strandjaival és sekély, gyorsan felmelegedő vizével vonzza a pihenni vágyókat. A város fürdőkultúrája a 19. századig nyúlik vissza, amit az elegáns faluillák és a történelmi iszapfürdő épülete is hűen tükröz. A fákkal szegélyezett Rüütli utca a belváros szíve, ahol hangulatos kávézók és üzletek várják a látogatókat. A parkokkal és szökőkutakkal díszített tengerparti sétány tökéletes helyszín az esti korzózáshoz. Pärnu a fesztiválok és koncertek városa is, ahol a nyári hónapokban pezseg az élet.",
        "factsAdvanced": [
            "Az első iszapfürdő 1838-ban nyitotta meg kapuit a városban.",
            "Pärnu strandja rendszeresen elnyeri a kiváló vízminőséget jelző Kék Zászló minősítést.",
            "A középkorban a város a Hanza-szövetség fontos tagja volt.",
            "A Szent Erzsébet-templom az egyik legszebb barokk stílusú egyházi épület az országban.",
            "A Pärnu-folyó torkolata kedvelt helyszín a horgászok és a vízi sportok kedvelői számára."
        ]
    },
    "ee-saaremaa": {
        "descriptionAdvanced": "Saaremaa, Észtország legnagyobb szigete, a mitikus szépség és az egyedülálló hagyományok földje a Balti-tengeren. A sziget híres érintetlen természetéről, szélmalmairól és gazdag történelmi örökségéről, amely minden lépésnél visszaköszön. Egyik legkülönlegesebb látnivalója a Kaali-meteoritkráter, amely évezredekkel ezelőtt keletkezett és ma is lenyűgöző a látogatókat. A sziget központja, Kuressaare, büszkélkedhet a Baltikum egyik legjobb állapotban fennmaradt középkori püspöki várával. A tengerpartot meredek sziklafalak, mint a Panga-fok, és borókás mezők teszik változatossá. Saaremaa sajátos kultúrája, helyi sörfőzdéi és vendégszeretete felejthetetlen élményt nyújtanak az utazóknak.",
        "factsAdvanced": [
            "Saaremaa neve észtül szó szerint „szigetországot” jelent.",
            "Ez a Balti-tenger negyedik legnagyobb szigete.",
            "A Kaali-kráter Európa legnagyobb, könnyen hozzáférhető meteoritbecsapódási helyszíne.",
            "Itt a legmagasabb az egy főre jutó wellness-központok száma Észtországban.",
            "Az Angla szélmalmok a sziget ikonikus jelképei és a népi építészet remekei."
        ]
    },
    "ee-lahemaa": {
        "descriptionAdvanced": "Az 1971-ben alapított Lahemaa Nemzeti Park Észtország legrégebbi és legnagyobb védett területe, ahol az érintetlen természet és a gazdag kulturális örökség különleges egyveleget alkot. Nevének jelentése „az öblök földje”, ami találóan leírja a tagolt tengerpartot homokos strandjaival és hangulatos halászfalvaival. A park belsejében hatalmas erdők terülnek el, amelyek jávorszarvasoknak, medvéknek és hiúzoknak adnak otthont. Különleges élményt nyújtanak a mocsári tanösvények, mint például a Viru-mocsár, ahol fapallókon járva élvezhetjük a természet csendjét. A területen található történelmi uradalmak, mint Palmse vagy Sagadi, a balti német nemesség egykori pompáját idézik fel. Lahemaa a túrázók és a természetfotósok paradicsoma, ahol minden évszak tartogat valamilyen csodát.",
        "factsAdvanced": [
            "Lahemaa volt az első nemzeti park, amelyet a Szovjetunió területén létrehoztak.",
            "A park négy nagy félszigetet és számos festői öblöt foglal magában.",
            "Käsmu, a „kapitányok faluja” őrzi a térség gazdag tengerészeti múltját.",
            "A park területén több mint 700 növényfaj és számos ritka állatfaj él.",
            "A jégkorszakból visszamaradt hatalmas vándorkövek tarkítják a tájat."
        ]
    },
    "ee-narva": {
        "descriptionAdvanced": "Narva, Észtország harmadik legnagyobb városa, hatalmas történelmi és stratégiai jelentőséggel bír az orosz határon. Közvetlenül a Narva-folyó partján fekszik, szemben az oroszországi Ivangorod erődjével, egyedülálló „ikervár” panorámát alkotva. A városkép meghatározó eleme a monumentális Hermann-vár, amely évszázadokon át a nyugati és keleti kultúra találkozási pontja és védvonal volt. Narva az Európai Unió legoroszabb városa, ami különleges kulturális és nyelvi arculatot kölcsönöz a településnek. Bár a második világháborúban súlyos pusztítást szenvedett, olyan ipartörténeti emlékeket őriz, mint a Kreenholm-manufaktúra, amely egykor Európa legnagyobb textilgyára volt. A folyóparti sétány és a történelmi emlékhelyek izgalmas betekintést nyújtanak a Baltikum összetett múltjába.",
        "factsAdvanced": [
            "A lakosság több mint 95%-a orosz anyanyelvű.",
            "A Hermann-vár és az ivangorodi erőd csupán egy kőhajításnyira van egymástól.",
            "A Kreenholm-manufaktúra a 19. században nagyobb volt, mint a legtöbb angol textilgyár.",
            "Narva volt a helyszíne az 1700-as nagy északi háború egyik döntő csatájának.",
            "A város modern könyvtára és egyetemi kollégiuma a kortárs észt építészet remekei."
        ]
    },
    "ee-haapsalu": {
        "descriptionAdvanced": "Haapsalu, amelyet gyakran az „Észak Velencéjeként” emlegetnek, egy bájos és romantikus fürdőváros Észtország nyugati partján. A 19. században vált híressé gyógyhatású iszapjáról, amely az orosz nemességet és magát a cári családot is ide vonzotta. A város építészeti örökségét elegáns faluillák és a fa szerkezetű tengerparti sétány határozzák meg, ahol Csajkovszkij is szívesen pihent. A település szíve a középkori püspöki vár, melynek katedrálisában a legenda szerint augusztusi teliholdkor megjelenik a „Fehér Hölgy”. A különleges, csipkeszerű haapsalui sálak készítése ma is élő népművészeti hagyomány a városban. Haapsalu nyugodt légköre és kulturális fesztiváljai tökéletes kikapcsolódást nyújtanak a nosztalgiára vágyóknak.",
        "factsAdvanced": [
            "A haapsalui vasútállomás rendelkezik Európa egyik leghosszabb fedett peronjával (216 méter).",
            "A „Fehér Hölgy” legendája Észtország legismertebb szellemtörténete.",
            "Pjotr Iljics Csajkovszkij zeneszerző emlékét egy különleges emléktábla és pad őrzi a sétányon.",
            "A város a haapsalui sálról, egy rendkívül finom kötött csipkéről világszerte ismert.",
            "A Haapsalu-öböl sekély vize nyáron az egyik leggyorsabban felmelegedő strand az országban."
        ]
    },
    "city-tapa": {
        "descriptionAdvanced": "Tapa városa Észak-Észtország egyik legfontosabb stratégiai vasúti csomópontja, melynek fejlődése szorosan összefüggött a 19. századi sínhálózat kiépítésével. A település központi elhelyezkedése miatt kulcsfontosságú összeköttetést biztosít Tallinn, Tartu és Narva irányába. A vasúti múlt mellett Tapa ma az észt fegyveres erők és a NATO egyik jelentős támaszpontjának ad otthont, ami sajátos arculatot kölcsönöz a városnak. A kisvárosi hangulat és a katonai jelenlét érdekes keveréke jellemzi az utcákat. Az utazók számára Tapa ideális kiindulópont a közeli Lahemaa Nemzeti Park vagy a történelmi Rakvere felfedezéséhez.",
        "factsAdvanced": [
            "A város nevét először 1482-ben említették írásos dokumentumok.",
            "A település városi rangot 1926-ban kapott, a vasútvonal megnyitása után.",
            "Tapa az észt védelmi erők 1. gyalogos dandárjának bázisa.",
            "A városban évente megrendezik a Kolbászfesztivált, amely helyi hagyománnyá vált.",
            "A vasútállomás épülete fontos építészeti emlék a 19. század végéről."
        ]
    },
    "city-viljandi": {
        "descriptionAdvanced": "Viljandi, Dél-Észtország kulturális szíve, leginkább az évente megrendezett népzenei fesztiváljáról ismert, amely a világ minden tájáról vonzza a művészeket. A város festői helyen, egy tó felett terül el, látképét pedig a hatalmas középkori lovagrendi vár romjai uralják. A hangulatos óváros macskaköves utcái és a régi faházak időtlen, békés hangulatot árasztanak. A zene mellett a város a hagyományos kézművesség és az alternatív művészetek központja is, számos galériával és műhellyel. A Viljandi-tó partja nyáron népszerű strandolóhely, míg a várpark függőhídja a város egyik legfotózottabb pontja.",
        "factsAdvanced": [
            "A viljandi várromok a 13. századból származnak, és egykor a Livóniai Rend egyik legerősebb erődítménye volt.",
            "A Viljandi Népzenei Fesztivál Európa egyik legnagyobb ilyen jellegű rendezvénye.",
            "Itt található a Tartui Egyetem Viljandi Kulturális Akadémiája.",
            "A város jelképe a várpark felett átívelő, 50 méter hosszú függőhíd.",
            "Viljandi a „naiv művészet” észtországi központja, melyet a Kondas Központ mutat be."
        ]
    },
    "city-paide": {
        "descriptionAdvanced": "Paide Észtország földrajzi szívében fekszik, és Järva megye közigazgatási központjaként fontos szerepet tölt be a régió életében. A várost a csendes, nyugodt légkör és a központi Vallimägi-domb jellemzi, ahol a 13. századi lovagrendi vár romjai és a jellegzetes mészkőtorony áll. Központi elhelyezkedése miatt Paide kiváló bázis a környező vidéki tájak és történelmi udvarházak felfedezéséhez. Minden nyáron itt rendezik meg a Véleményfesztivált (Arvamusfestival), amely az ország legfontosabb közéleti és társadalmi fórumává alakítja a várost. A település neve az észt mészkő szóból ered, ami utal a környék gazdag kőbányáira is.",
        "factsAdvanced": [
            "Paide neve az észt „paas” (mészkő) szóból származik.",
            "A várat a Livóniai Rend építette 1265-ben stratégiai védelmi pontként.",
            "Paide egyike annak a négy észt városnak, amely hivatalosan is viselheti a „királyi város” címet.",
            "A Vallitorn toronyban ma interaktív időutazás és kiállítás várja a látogatókat.",
            "A város főterén egy szobor jelöli Észtország szárazföldi középpontját."
        ]
    },
    "city-voru": {
        "descriptionAdvanced": "Võru, az azonos nevű megye központja, a dombos Délkelet-Észtország egyik legbarátságosabb városa, amely a Tamula-tó partján fekszik. A település szorosan kötődik az egyedülálló võro kultúrához és nyelvjáráshoz, amelyet a helyiek büszkén ápolnak. Võru kapuként szolgál a Haanja-dombsághoz, ahol a Baltikum legmagasabb pontja, a Suur Munamägi is található. A tóparti sétány és a parkok ideális helyszínt nyújtanak a pihenéshez és a természet közelségének élvezetéhez. A város autentikus hangulata és a UNESCO által is elismert füstös szauna hagyományok igazi észt élményt kínálnak a látogatóknak.",
        "factsAdvanced": [
            "Võrut 1784-ben alapították II. Katalin orosz cárnő parancsára.",
            "Itt található a Fr. R. Kreutzwald Emlékmúzeum, amely az észt nemzeti eposz írójának állít emléket.",
            "A Tamula-tó felett átívelő függőhíd a város egyik legnépszerűbb sétálóhelye.",
            "A régió füstös szaunázási kultúrája a UNESCO szellemi világörökségének része.",
            "Évente nemzetközi folklórfesztivált rendeznek a városban, bemutatva a helyi táncokat és zenét."
        ]
    },
    "city-rapla": {
        "descriptionAdvanced": "Rapla Nyugat-Közép-Észtország fontos közigazgatási és kereskedelmi csomópontja, amely Tallinn és Pärnu között helyezkedik el. A várost nyugodt, vidéki hangulat jellemzi, ahol a szovjet éra építészete és a modern funkcionális épületek keverednek. Egyik legfontosabb nevezetessége a különleges, kéttornyú templom, amely ritkaságnak számít az észt vidéki települések körében. Rapla környéke gazdag erdőkben és mocsarakban, így a természetjárók számára is vonzó célpont. Bár nem tartozik a legnépszerűbb turistacélpontok közé, a város hiteles betekintést nyújtanak az észt vidéki élet mindennapjaiba.",
        "factsAdvanced": [
            "A raplai Mária Magdolna-templom Észtország egyetlen kéttornyú vidéki temploma.",
            "A Vigala-folyó szeli át a várost, kellemes zöldfelületeket biztosítva a partján.",
            "Rapla híres erős kosárlabda-hagyományairól és sikeres helyi csapatáról.",
            "Évente megrendezik a Rapla Egyházzenei Fesztivált, amely neves művészeket vonz.",
            "A közeli Mukri-mocsár az egyik legősibb és legszebb mocsárvidék a régióban."
        ]
    },
    "city-kuressaare": {
        "descriptionAdvanced": "Kuressaare, Saaremaa szigetének fővárosa, Észtország egyik legpatinásabb fürdővárosa, amely híres középkori püspöki váráról és gyógyfürdőiről. A város a történelmi bájt modern wellness-szolgáltatásokkal ötvözi, így a nyári hónapokban pezsgő turisztikai központtá válik. Az óváros kompakt és barátságos, tele hangulatos kávézókkal, galériákkal és jellegzetes mészkőből épült házakkal. A püspöki várpark és a mellette fekvő tengerparti strand ideális helyszín a kikapcsolódásra. Kuressaare kapuként szolgál a sziget különleges természeti kincseihez és szélmalmaihoz, miközben maga is őrzi a balti-tengeri szigetek egyedi hangulatát.",
        "factsAdvanced": [
            "A Kuressaare-vár a Baltikum egyik legjobban megőrzött középkori erődítménye.",
            "A város 1840 óta hivatalosan elismert fürdőhely, híres a gyógyhatású iszapjáról.",
            "Itt rendezik meg évente a Saaremaa Operanapokat a vár udvarán.",
            "A Szent Lőrinc-templom a város központjának meghatározó klasszicista épülete.",
            "Kuressaare volt az első észt város, amely megkapta az „Egészséges Város” címet."
        ]
    },
    "city-kardla": {
        "descriptionAdvanced": "Kärdla Hiiumaa szigetének egyetlen városa és az ország legkisebb megyeszékhelye, amely zöldellő kertjeiről és nyugodt légköréről ismert. A várost eredetileg svéd telepesek lakták, majd a 19. században egy textilgyár köré épült fel, ami meghatározta mai arculatát. Kis kikötője, hagyományos faházai és a tenger közelsége miatt a látogatók számára a béke szigete. Kärdla ideális kiindulópont Hiiumaa érintetlen partvidékének, történelmi világítótornyainak és mocsári ösvényeinek felfedezéséhez. A város egyik különlegessége a főtéren található artézi kút, amely évtizedek óta friss vízzel látja el a helyieket és az utazókat.",
        "factsAdvanced": [
            "Kärdla egy 455 millió évvel ezelőtti meteoritbecsapódás által létrehozott kráter szélén fekszik.",
            "A várost gyakran „kertvárosnak” is nevezik a rengeteg zöldfelület és virág miatt.",
            "A Kärdlai-kikötő a vitorlázók és a kis hajók kedvelt kikötőhelye a Balti-tengeren.",
            "A Hiiumaa Múzeum (Pikk Maja) a sziget gazdag tengerészeti és ipari múltját mutatja be.",
            "Itt található Észtország egyik leghangulatosabb repülőtere, közvetlen járattal Tallinnba."
        ]
    },
    "city-johvi": {
        "descriptionAdvanced": "Jõhvi Ida-Viru megye közigazgatási és kulturális szíve, amely Északkelet-Észtország fontos közlekedési csomópontjaként szolgál. A város az ipari örökség és a modern kulturális törekvések metszéspontjában fekszik, amit a színvonalas hangversenyterme és színháza is jól mutat. Stratégiai helyzete Tallinn és az orosz határ között a kereskedelem és az üzleti élet központjává tette. Bár a környéket az olajpala-bányászat határozza meg, Jõhvi belvárosa folyamatosan fejlődik és modernizálódik. A város kiváló bázis a régió természeti látnivalóinak, például az ontikai mészkőpart felfedezéséhez.",
        "factsAdvanced": [
            "Jõhvi központi koncertterme az egyik legmodernebb kulturális intézmény az országban.",
            "A Szent Mihály-templom a város legrégebbi és legfontosabb történelmi épülete.",
            "A város közelében található az Ontika-sziklafal, amely a balti klint legmagasabb pontja.",
            "Jõhvit először 1241-ben említették a Dán Földkönyvben.",
            "A település híres a minden nyáron megrendezett Jõhvi Balettfesztiválról."
        ]
    },
    "city-polva": {
        "descriptionAdvanced": "Põlva, az azonos nevű megye központja, a festői Délkelet-Észtország egyik legbájosabb települése, amely dombok és tavak ölelésében fekszik. A város híres a természetközeli életmódjáról és a gazdag népzenei hagyományairól, amit az évente megrendezett szájharmonika-fesztivál is hűen tükröz. A település központjában található Põlva-tó és a környékbeli fenyőerdők számos kikapcsolódási lehetőséget kínálnak a túrázóknak és a kerékpárosoknak. A közeli Intsikurmu-erdőben rendezett fesztiválok és koncertek különleges hangulatot árasztanak a természet lágy ölén. Põlva ideális helyszín azoknak, akik szeretnék felfedezni a Setomaa régió egyedülálló kultúráját és a dél-észt táj békéjét.",
        "factsAdvanced": [
            "A várost átszelő Ora-folyó a mesterségesen kialakított Põlva-tóba torkollik.",
            "A põlvai Mária-templom a régió egyik legrégebbi és legszebb szakrális építménye.",
            "Itt rendezik meg Észtország egyetlen rendszeres nemzetközi szájharmonika-fesztiválját.",
            "Az Intsikurmu szabadtéri színpad az észt dalfesztivál-hagyományok egyik fontos helyszíne.",
            "A város közelében található a Taevaskoja homokkőfal, az ország egyik legszebb természeti látnivalója."
        ]
    },
    "city-valga": {
        "descriptionAdvanced": "Valga Észtország déli határán fekszik, és a lettországi Valkával együtt egy egyedülálló, határokon átívelő ikervárost alkot. A település történelmét és mindennapjait meghatározza ez a különleges földrajzi helyzet, ahol a két ország kultúrája és nyelve összefonódik. Valga fontos vasúti és közlekedési csomópont, amely évszázadok óta összeköti Rigát és Tallinnt. A város építészete a 19. századi vasúti fellendülés nyomait őrzi, de modern terek és közös észt-lett projektek is jellemzik. A Pedeli-folyó partján kialakított pihenőövezet mindkét város lakói számára kedvelt találkozóhely, jelképezve a határok nélküli együttműködést.",
        "factsAdvanced": [
            "Valga és Valka mottója: „Egy város, két ország”, ami a határok nélküli átjárhatóságra utal.",
            "A város vasútállomása monumentális épület, amely a 20. század eleji közlekedési fontosságot jelzi.",
            "A Valga Hadtörténeti Múzeum Észtország egyik legátfogóbb katonai kiállításának ad otthont.",
            "A Szent János-templom különleges, ovális alaprajzú épülete a város egyik fő látnivalója.",
            "Évente közös észt-lett ikerváros-fesztivált és vásárokat rendeznek a településen."
        ]
    },
    "cult-tallinn-oldtown": {
        "descriptionAdvanced": "Tallinn óvárosa, amely az UNESCO Világörökség része, Európa egyik legjobb állapotban fennmaradt középkori városa, ahol a történelem minden utcakövön visszaköszön. A macskaköves utcák labirintusa, a gótikus templomtornyok és a kereskedők egykori lakóházai egy varázslatos időutazásra hívják a látogatókat. Az egészet egy szinte sértetlen, 13. századi városfal veszi körül, amely egykor a Hanza-szövetség gazdagságát és hatalmát védte. Az óváros két részre oszlik: az alsóvárosra, a kereskedők egykori központjára, és a Toompea-dombra, ahol a nemesség és a hatalom székhelye volt. Ma az óváros Tallinn lüktető szíve, tele hangulatos kávézókkal, kézműves műhelyekkel és titkos belső udvarokkal.",
        "factsAdvanced": [
            "1997 óta az UNESCO Világörökség része.",
            "A városfal eredeti hossza 4 km volt, amelyből máig 2 km és 26 torony maradt fenn.",
            "A Városháza tér (Raekoja plats) már a 11. század óta a város társadalmi központja.",
            "Itt található a Raeapteek, Európa egyik legrégebbi, ma is működő gyógyszertára.",
            "Az óváros építészete a gótika, a reneszánsz és a barokk stílusok lenyűgöző keveréke."
        ]
    },
    "cult-tartu-university": {
        "descriptionAdvanced": "Az 1632-ben alapított Tartui Egyetem Észtország legrégebbi és legtekintélyesebb felsőoktatási intézménye, az ország szellemi életének bölcsője. Az egyetem főépülete a klasszicista építészet mesterműve, amelynek monumentális oszlopcsarnoka Tartu egyik legfontosabb jelképe. Az intézmény nemcsak az oktatás központja, hanem a kutatás és innováció motorja is a Baltikumban, vonzva a hallgatókat a világ minden tájáról. Története során olyan neves tudósok tanítottak és kutattak itt, akik meghatározták az európai tudomány fejlődését. Az egyetem könyvtára és múzeumai felbecsülhetetlen értékű történelmi kincseket és kéziratokat őriznek. A város és az egyetem élete elválaszthatatlanul összefonódik, fiatalos és vibráló energiával töltve meg az ősi falakat.",
        "factsAdvanced": [
            "Az egyetemet II. Gusztáv Adolf svéd király alapította.",
            "Észak-Európa egyik legrégebbi és legfontosabb egyeteme.",
            "A főépületet Johann Wilhelm Krause építész tervezte a 19. század elején.",
            "Az egyetemi könyvtár Észtország legnagyobb és legrégibb tudományos gyűjteménye.",
            "Az egyetemhez tartozó botanikus kert a legrégebbi a balti államokban (1803)."
        ]
    },
    "cult-kadriorg": {
        "descriptionAdvanced": "A Kadriorg-palota a barokk építészet lenyűgöző remekműve Tallinnban, melyet Nagy Péter orosz cár építtetett felesége, I. Katalin tiszteletére 1718-ban. Az olasz Nicola Michetti által tervezett palota és a hozzá tartozó park a cári pompa egyik legszebb példája Észak-Európában. A palota neve észtül „Katalin-völgyet” jelent, és eredetileg nyári rezidenciaként szolgált az uralkodói család számára. Ma az épület a Kadriorg Művészeti Múzeumnak ad otthont, ahol a 16-20. század közötti európai és orosz mesterműveket csodálhatják meg a látogatók. A gondosan gondozott francia kert szökőkútjaival és virágágyásaival Tallinn egyik legkedveltebb pihenőhelye. A palota környéke a diplomáciai negyed része, ahol az elnöki rezidencia is található.",
        "factsAdvanced": [
            "A palota bálterme a barokk belsőépítészet egyik legszebb példája a Baltikumban.",
            "A kertben található Hattyú-tó és a japánkert a látogatók kedvenc fotóhelyszíne.",
            "A palota építésénél több száz külföldi és helyi kézműves dolgozott.",
            "Ma itt található az ország legjelentősebb külföldi képzőművészeti gyűjteménye.",
            "A park területén kapott helyet a modern KUMU Művészeti Múzeum is."
        ]
    },
    "cult-haapsalu": {
        "descriptionAdvanced": "A Haapsalu püspöki vár a bájos tengerparti üdülőváros történelmi szíve és legfontosabb látnivalója. Ez a 13. században épült monumentális erődítmény évszázadokon át az Ösel-Wiek püspökség székhelye volt. A vár monumentális kőfalai, a gótikus székesegyház és a kolostorépület ma is tiszteletet parancsoló látványt nyújtanak. A vár leginkább a „Fehér Hölgy” legendájáról híres, aki a legenda szerint minden augusztusi teliholdkor megjelenik a templom ablakában. A várudvar ma koncerteknek, lovagi tornáknak és középkori fesztiváloknak ad otthont, életre keltve a múltat. A látogatók felkapaszkodhatnak az őrtoronyba, ahonnan pazar kilátás nyílik a városra és a tengerre.",
        "factsAdvanced": [
            "A vártemplom a Baltikum legnagyobb egyhajós gótikus temploma.",
            "A várfalak vastagsága helyenként eléri a 3 métert.",
            "A „Fehér Hölgy” napok a város legfontosabb kulturális eseménye minden nyáron.",
            "A vár területén múzeum mutatja be a középkori fegyvereket és az egyházi életet.",
            "Az őrtoronyban működik a város harangjátéka, amely óránként szólal meg."
        ]
    },
    "cult-tartu-observatory": {
        "descriptionAdvanced": "A Tartui Régi Csillagvizsgáló világrangú tudományos emlékmű, és a UNESCO Világörökség részét képező Struve-geodéziai ív egyik kulcsfontosságú állomása. A 19. század elején a Toomemägi-dombon alapított intézet gyorsan a csillagászat egyik vezető központjává vált Európában. Friedrich Georg Wilhelm von Struve vezetése alatt itt végeztek először sikeres méréseket a csillagok parallaxisának meghatározására. A klasszicista épület egykor a világ legfejlettebb távcsöveit, köztük a híres Fraunhofer-refraktort rejtette. Ma az obszervatórium múzeumként működik, bemutatva a csillagászat és a geodézia történetét, valamint Tartu hozzájárulását a világképünk alakulásához. A csillagvizsgáló nemcsak tudományos helyszín, hanem a technikai innováció szimbóluma is Észtországban.",
        "factsAdvanced": [
            "A csillagvizsgáló a UNESCO Struve-geodéziai ív egyik fontos mérőpontja.",
            "1824-ben itt helyezték üzembe a világ akkori legnagyobb és legpontosabb lencsés távcsövét.",
            "Struve itt mérte meg a Vega csillag távolságát az elsők között a világon.",
            "Az épület kupolája 360 fokban körbeforgatható a megfigyelésekhez.",
            "Ma interaktív kiállítások mutatják be az űrrakétákat és a távcsövek működését."
        ]
    },
    "cult-alexander-nevsky": {
        "descriptionAdvanced": "A Tallinni Toompea-domb tetején trónoló Alekszandr Nyevszkij-székesegyház a város legpompásabb és legnagyobb ortodox temploma. Az 1900 körül épült katedrális az Orosz Birodalom hatalmát szimbolizálta Észtországban a 19. század végén. Jellegzetes hagymakupolái, gazdag mozaikdíszítése és monumentális megjelenése miatt Tallinn egyik leglátványosabb jelképe. Az épület orosz neobizánci stílusban készült, belső tere pedig tele van aranyozott ikonokkal és vallási műalkotásokkal. Bár építésekor sok észt számára a ruszifikáció nemkívánatos jelképe volt, ma már fontos építészeti emlék és aktív hitéleti központ. A templom harangjátéka különösen híres, Tallinn legnagyobb harangja is itt található.",
        "factsAdvanced": [
            "A katedrális tizenegy harangja közül a legnagyobb 15 tonnát nyom.",
            "Nevét Alekszandr Nyevszkij orosz nemzeti hősről és szentről kapta.",
            "A templomot szinte teljes egészében mozaikok és ikonok díszítik belülről.",
            "Az 1920-as években az észt kormány mérlegelte a lebontását, de végül megmaradt.",
            "Ez a Tallinni Észt Ortodox Egyház (Moszkvai Patriarchátus) főtemploma."
        ]
    },
    "cult-kihnu": {
        "descriptionAdvanced": "Kihnu szigete egy egyedülálló matriarchális közösség a Balti-tengeren, amely a UNESCO szellemi világörökségének része. A szigeten a nők a hagyományok, az énekek, a táncok és a kézművesség elsődleges őrzői, miközben a férfiak gyakran hónapokig távol vannak a tengeren. A lakók ma is büszkén viselik színes, kézzel szőtt népviseletüket, különösen a jellegzetes csíkos szoknyát, a „kört”-öt. Kihnu életmódja a természettel való szoros összhangon és az ősi szokások megőrzésén alapul. A látogatók számára a sziget egy élő múzeum, ahol az idő mintha megállt volna, és a közösség ereje mindenhol érezhető. A szigeten a motorkerékpár az elsődleges közlekedési eszköz, ami még egyedibbé teszi a hangulatot.",
        "factsAdvanced": [
            "Kihnu kulturális tere 2003-ban került fel a UNESCO listájára.",
            "A nők szoknyájának színe és mintája jelzi viselőjük családi állapotát és korát.",
            "A szigeten szinte mindenki oldalkocsis motorkerékpárral közlekedik.",
            "A helyi nyelvjárás olyannyira eltér az irodalmi észttől, hogy külön nyelvnek is tekinthető.",
            "A kihnu-i tengeri fesztivál a sziget legfontosabb éves eseménye, amely bemutatja a helyi gasztronómiát."
        ]
    },
    "cult-parnu-beach": {
        "descriptionAdvanced": "A Pärnu strand Észtország nyári fővárosának lüktető szíve és legfőbb vonzereje. Finom, fehér homokjával és a sekély, gyorsan felmelegedő vizével a családok és a napozni vágyók igazi paradicsoma. A modern tengerparti sétányt szökőkutak, parkok és hangulatos teraszos kávézók szegélyezik, melyek tökéletes helyszínt nyújtanak a pihenéshez. A strand nemcsak az úszásról és napozásról szól; nyaranta számos esemény, strandröplabda-torna és zenei fesztivál tölti meg energiával a partot. A környék elegáns fürdőépületei és wellness-szállodái a város gazdag gyógyfürdő-hagyományait idézik. Esténként a sétány a korzózók és a naplementében gyönyörködők kedvelt találkozóhelyévé válik.",
        "factsAdvanced": [
            "A Pärnu strand homokja híresen finom és tiszta, rendszeresen kap Kék Zászló minősítést.",
            "A vízmélység olyan sekély, hogy több tíz métert kell besétálni az úszáshoz.",
            "A strand sétánya a 2000-es években kapta meg mai, modern és díjnyertes arculatát.",
            "Pärnu strandján található Észtország egyik legnagyobb és legmodernebb játszótere.",
            "A szörfözők és kitesurfosok körében is népszerű hely az állandó kedvező széljárás miatt."
        ]
    },
    "hist-toompea-castle": {
        "descriptionAdvanced": "A Toompea-vár, amely Tallinn mészkődombján magasodik, Észtország hatalmi központjának ősi és töretlen jelképe. A mai épületegyüttes a Riigikogu-nak, az észt parlamentnek ad otthont egy különleges rózsaszín barokk palotában, melyet a 18. században emeltek. Ez a modern kormányzati funkció szervesen illeszkedik a középkori erődítmény fennmaradt részeihez, köztük a 45 méter magas Hosszú Hermann-toronyhoz. A vár több mint 800 éves története során dán, lovagrendi, svéd és orosz uralkodók székhelye volt, és mindegyikük otthagyta építészeti nyomát. A Toompea nemcsak politikai központ, hanem a nemzeti függetlenség és ellenállás szimbolikus helyszíne is. A vár udvara és a környező kilátók Tallinn leglátogatottabb turisztikai pontjai közé tartoznak.",
        "factsAdvanced": [
            "A vár bástyáján mindennap felvonják az észt nemzeti lobogót napkeltekor.",
            "A parlamenti ülésterem az egyetlen expresszionista stílusú parlamenti épület a világon.",
            "A monda szerint a Toompea-dombot Linda emelte férje, a hős Kalev sírja fölé.",
            "A vár északi faláról nyílik az egyik legszebb kilátás Tallinn óvárosára.",
            "A rózsaszín homlokzatot II. Katalin orosz cárnő idején alakították ki."
        ]
    },
    "hist-tallinn-city-wall": {
        "descriptionAdvanced": "Tallinn városfala Európa egyik leglátványosabb és legépebben maradt középkori védelmi rendszere, amely meghatározza az óváros arculatát. Az építkezés a 13. században kezdődött, és több mint 300 éven át tartott a falak folyamatos bővítése és megerősítése. Ma közel két kilométernyi falszakasz és 26 védőtorony áll még, hűen tükrözve az egykori Hanza-város, Reval gazdagságát és erejét. A látogatók egyes szakaszokon fel is sétálhatnak a gyilokjárókra, és felfedezhetik az olyan híres tornyokat, mint a Kiek in de Kök vagy a Kövér Margaréta. A vörös tetős tornyok és a szürke mészkőfalak látványa Tallinn UNESCO világörökségi helyszínének elengedhetetlen része. A falak nemcsak védelmi célokat szolgáltak, hanem a város büszkeségét is hirdették a külvilág felé.",
        "factsAdvanced": [
            "A falak vastagsága néhol eléri a 3 métert, magasságuk pedig a 15 métert.",
            "A Kiek in de Kök torony neve alnémetül azt jelenti: „nézz be a konyhába”.",
            "A Viru-kapu két ikertornya az óváros egyik legikonikusabb bejárata és fotótémája.",
            "A Kövér Margaréta-torony ma az Észt Tengerészeti Múzeumnak ad otthont.",
            "A bástyák alatti titkos alagutak ma is látogathatók a történelemkedvelők számára."
        ]
    },
    "hist-kuressaare-castle": {
        "descriptionAdvanced": "A Kuressaare-vár, más néven püspöki vár, a Baltikum egyik legimpozánsabb és legjobb állapotban megőrzött középkori erődítménye. A 14. század végén épült gótikus vár kastélyszerű, zárt formájával és monumentális egyszerűségével tűnik ki. Az erődöt széles vizesárok veszi körül, ami még hangsúlyosabbá teszi védelmi jellegét és festői megjelenését. Évszázadokon át az Ösel-Wiek püspökök rezidenciájaként szolgált, ma pedig a Saaremaa Múzeumnak ad otthont, bemutatva a sziget gazdag történelmét és természetvilágát. A látogatók bejárhatják a hatalmas lovagtermeket, a püspöki lakosztályokat és a védőtornyokat, ahonnan remek kilátás nyílik a tengerre. A várudvar gyakran ad otthont operafesztiváloknak és középkori bemutatóknak.",
        "factsAdvanced": [
            "Ez az egyetlen középkori vár a Baltikumban, amely jelentősebb átépítés nélkül maradt fenn.",
            "A vár belső udvarán minden nyáron megrendezik a Saaremaa Operanapokat.",
            "A monda szerint az egyik pincében egy befalazott lovag csontvázát találták meg.",
            "A vár körüli hatalmas bástyákat és sáncokat a 17. században a svédek építették.",
            "A múzeumban Észtország egyik leggazdagabb kitömött állatgyűjteménye látható."
        ]
    },
    "hist-narva-hermann-castle": {
        "descriptionAdvanced": "A narvai Hermann-vár egy monumentális kőerőd, amely Észtország összetett történelmének és keleti védőbástyájának hatalmas szimbóluma. Közvetlenül szembenéz az oroszországi Ivangorod erődjével a Narva-folyó túloldalán, olyan egyedülálló építészeti párbeszédet alkotva, amely sehol máshol nem található Európában. Ezt a stratégiai pontot már a 13. században megerősítették a dánok, majd később a Livóniai Rend bővítette tovább. A vár legmeghatározóbb eleme az 51 méter magas Hosszú Hermann-torony, amely uralja a határ menti tájat. Bár a második világháborúban súlyosan megsérült, a várat gondosan helyreállították, és ma a Narva Múzeumnak ad otthont, amely megeleveníti a határváros nyolc évszázados múltját. Az északi udvarban nyaranta kézművesek mutatják be a régi mesterségeket a látogatóknak.",
        "factsAdvanced": [
            "A vár 51 méter magas tornyából belátni az oroszországi Ivangorod belső udvarába is.",
            "Itt vívták 1700-ban a narvai csatát, ahol a svédek legyőzték az orosz seregeket.",
            "A vár északi udvara (Põhjaõu) egy 17. századi városnegyed hangulatát idézi.",
            "A Narva-folyó menti sétányról nyílik a legjobb kilátás az „ikervár” együttesre.",
            "A múzeumban interaktív módon ismerhetjük meg a régió hadi és kereskedelmi múltját."
        ]
    },
    "hist-rakvere-castle": {
        "descriptionAdvanced": "A Rakvere-vár egyedülálló módon repíti vissza a látogatókat a 16. század izgalmas világába interaktív és élményszerű programjaival. A város feletti dombon magasodó Livóniai Lovagrend egykori erődjének romjai ma minden, csak nem unalmasak. A vár középkori kalandparkként működik, ahol a történelem valóban életre kel: a látogatók páncélt ölthetnek, íjászkodhatnak, vagy próbára tehetik bátorságukat a kínzókamrában és az alkimista laborban. Korhű ruhába öltözött animátorok és kézművesek népesítik be az udvart, bemutatva a régi mesterségeket és mesélve a múlt legendáit. Ideális célpont családoknak, akik nemcsak nézni, hanem átélni is szeretnék a középkori élet mindennapjait. A vár tövében álló monumentális őstulokszobor, a Tarvas, pedig a város modern jelképe.",
        "factsAdvanced": [
            "A vár lábánál található Tarvas-szobor a Baltikum legnagyobb bronzszobra.",
            "A látogatók saját maguk önthetnek érmét vagy készíthetnek puskaport a laborban.",
            "A várban működik egy autentikus középkori kocsma, ahol régi receptek alapján főznek.",
            "A kínzókamra és a „pokol” kiállítás a vár legborzongatóbb, de legnépszerűbb része.",
            "A várudvaron rendszeresen rendeznek lovagi tornákat és ágyútűz-bemutatókat."
        ]
    },
    "hist-padise-abbey": {
        "descriptionAdvanced": "A Padise kolostor a ciszterci szerzetesek által a 14. században alapított lenyűgöző gótikus romegyüttes, amely Észtország egyik leghangulatosabb történelmi helyszíne. Az épület egyszerre szolgált vallási központként és erődítményként, fontos szerepet játszva a régió védelmében és hitéletében. A háborúk és pusztítások után megmaradt falak ma is hűen tükrözik a középkori kolostori építészet puritán monumentalitását. A látogatók bejárhatják a templomhajót, felkapaszkodhatnak a toronyba, és felfedezhetik a titokzatos pincéket és belső udvarokat. A kolostor romjai között járva szinte érezni a régi szerzetesi élet csendjét és nyugalmát. Padise környéke a slow travel kedvelőinek paradicsoma, ahol a történelem és a természet békésen fonódik össze.",
        "factsAdvanced": [
            "A kolostor építése több mint 200 éven át tartott a középkor folyamán.",
            "Ez volt az északi régió egyetlen megerősített ciszterci kolostora.",
            "A romok akusztikája kiváló, ezért nyaranta népszerű koncerthelyszín.",
            "A közeli Padise-kastélyt később a kolostorból származó kövekből építették fel.",
            "A felújított látogatóközpontban modern kiállítás mutatja be a szerzetesek mindennapjait."
        ]
    },
    "hist-koluvere-castle": {
        "descriptionAdvanced": "A Koluvere-vár, más néven Lohde vára, egy idilli környezetben, egy mesterséges szigeten fekvő középkori püspöki erődítmény Nyugat-Észtországban. A 13. századból származó épület tanúja volt számos véres konfliktusnak, és az évszázadok során többször gazdát cserélt a püspökök és a német-balti nemesi családok között. A vár híres romantikus és egyben tragikus legendájáról, amely Augusta orosz hercegnőről szól, akit II. Katalin cárnő száműzött ide. A festői tornyok, a massvív kőfalak és a vizesárok különleges atmoszférát kölcsönöznek a helyszínnek. Ma a vár elegáns szállodaként és rendezvényközpontként működik, megőrizve történelmi karakterét. A környékbeli park és a Liivi-folyó látványa felejthetetlen élményt nyújt a látogatóknak.",
        "factsAdvanced": [
            "A vár egykor az Ösel-Wiek püspökség egyik legfontosabb uradalma volt.",
            "A legenda szerint Augusta hercegnő szelleme mindmáig kísért a várfalak között.",
            "A 17. században a várat barokk stílusú nemesi rezidenciává alakították át.",
            "A vár körül elterülő parkban számos ritka fafajta található.",
            "Az épületegyüttes ma az egyik legexkluzívabb esküvői helyszín az országban."
        ]
    },
    "hist-sinimaed-battlefield": {
        "descriptionAdvanced": "A Sinimäed-dombok (Kék-hegyek) a második világháború keleti frontjának egyik legvéresebb hadszínterét rejtik Észtország keleti részén. 1944-ben itt zajlott a Tannenberg-vonalért folytatott küzdelem, ahol a német seregek – köztük észt önkéntesek – próbálták megállítani a Vörös Hadsereg előretörését. A terület ma fontos emlékhely, ahol emlékművek és egy hadtörténeti múzeum idézi fel a tragikus eseményeket. A táj ma is őrzi a háború nyomait: a lövészárkok és bombatölcsérek maradványai a természetben is láthatók. Ez egy méltóságteljes és csendes hely, amely elmélkedésre hív Észtország 20. századi összetett és fájdalmas történelméről. A dombokról nyíló kilátás ma már békés, de a múlt emlékezete örökké a részévé vált.",
        "factsAdvanced": [
            "A sinimäedi csata volt az egyik legnagyobb emberáldozatot követelő ütközet észt földön.",
            "A dombvidék három fő gerincből áll: Tornimägi, Põrguaugumägi és Pargimägi.",
            "A helyi múzeum egy régi uradalmi magtár épületében kapott helyet.",
            "Minden évben veteránok és hozzátartozók gyűlnek össze itt a megemlékezésre.",
            "A dombok stratégiai fontosságát már az északi háború idején is felismerték."
        ]
    },
    "land-kumu-art-museum": {
        "descriptionAdvanced": "A tallinni Kadriorg park szélén található Kumu Művészeti Múzeum Észtország legjelentősebb művészeti intézménye és a Baltikum egyik legnagyobb kiállítóhelye. A finn Pekka Vapaavuori által tervezett modern, mészkőbe és üvegbe álmodott épület önmagában is építészeti remekmű. A Kumu egyszerre tölti be a nemzeti galéria szerepét, bemutatva az észt művészetet a 18. századtól kezdve, és szolgál kortárs művészeti központként nemzetközi tárlatokkal. A múzeum célja, hogy párbeszédet teremtsen a múlt és a jelen, valamint a helyi és a globális kultúra között. Az állandó kiállítások mellett audiovizuális termek, könyvtár és oktatási központ is várja az érdeklődőket. 2008-ban a Kumu elnyerte az Év Európai Múzeuma díjat, ami nemzetközi rangját is megerősült.",
        "factsAdvanced": [
            "A múzeum neve az észt „Kunstimuuseum” (Művészeti Múzeum) szó rövidítése.",
            "Az épület egy korábbi mészkőbánya területén, a sziklába süllyesztve épült fel.",
            "Több mint 20 000 négyzetméteren kínál művészeti élményeket a látogatóknak.",
            "A belső udvar nyaranta koncerteknek és szabadtéri mozielőadásoknak ad otthont.",
            "A Kumu az észt „szocialista realizmus” és az emigráns művészet legfontosabb gyűjtőhelye."
        ]
    },
    "land-estonian-national-museum": {
        "descriptionAdvanced": "A Tartuban található Észt Nemzeti Múzeum (ERM) az ország legmodernebb és legfontosabb kulturális intézménye, amely az észt identitás és hétköznapi élet történetét mutatja be. A 2016-ban megnyitott monumentális épület egy korábbi szovjet katonai repülőtér kifutópályájának folytatásaként épült, szimbolizálva a felemelkedést és a jövőbe vetett hitet. Interaktív kiállításai révén a látogatók 11 000 év történetét ismerhetik meg a jégkorszaktól a digitális korszakig. A múzeum kiemelt figyelmet fordít a finnugor népek rokonságára és kulturális örökségére is. Ez nem csupán egy múzeum, hanem egy közösségi tér is, ahol étterem, konferenciatermek és könyvtár is található. Az épület hossza és futurisztikus megjelenése miatt Tartu egyik legfontosabb kortárs jelképévé vált.",
        "factsAdvanced": [
            "Az épület hossza 356 méter, és részben a régi repülőtéri aszfaltra épült.",
            "A „Találkozások” című állandó kiállítás az észt nép mindennapjait mutatja be korszakokon át.",
            "Itt látható az ország legnagyobb észt népviseleti gyűjteménye.",
            "A múzeum épületét egy párizsi építészcsoport (DGT Architects) tervezte.",
            "A „Finnugor visszhangok” kiállítás a rokon népek különleges világába kalauzol."
        ]
    },
    "land-seaplane-harbour": {
        "descriptionAdvanced": "A tallinni Vízirepülőgép-kikötő (Lennusadam) az Észt Tengerészeti Múzeum egyik legizgalmasabb egysége, amely egyedülálló történelmi hangárokban kapott helyet. Ezek a betonhéj-szerkezetű épületek 1916-ban épültek, és a maguk idejében technikai csodának számítottak. A múzeum lenyűgöző és interaktív módon mutatja be a tengerészet, a haditechnika és a repülés történetét. Legfőbb látványossága az 1930-as évekből származó Lembit tengeralattjáró, amelynek belsejébe a látogatók is bemászhatnak. A kiállítás részét képezik jégtörő hajók, ágyúk, repülőgépek és számos szimulátor is. A kikötőben horgonyzó Suur Tõll jégtörő pedig a világ egyik legnagyobb épségben maradt gőzüzemű hajója. Családok és technika-rajongók számára felejthetetlen élményt nyújt ez a modern és látványos tárlat.",
        "factsAdvanced": [
            "A hangárok voltak a világ első ilyen méretű vasbeton héjszerkezetei.",
            "A Lembit tengeralattjáró Nagy-Britanniában készült, és az észt flotta büszkesége volt.",
            "A múzeum 2012-es megnyitása óta számos nemzetközi turisztikai és design díjat nyert.",
            "A látogatók repülőgép-szimulátorokban próbálhatják ki tudásukat Tallinn felett.",
            "A gyűjteményben egy 16. századi hajóroncs is látható, melyet a közeli vizekben találtak."
        ]
    },
    "land-tallinn-tv-tower": {
        "descriptionAdvanced": "A 314 méter magas Tallinni tévétorony Észtország legmagasabb építménye és a főváros egyik legmeghatározóbb tájékozódási pontja. Az 1980-as moszkvai olimpia vitorlásversenyeire épült, de 1991-ben az észt függetlenség védelmének szimbolikus helyszínévé vált. A 170 méter magasan található kilátóteraszról lélegzetelállító panoráma nyílik Tallinnra, a Finn-öbölre, és tiszta időben akár a finn partokig is el lehet látni. A torony nemcsak kilátóhely, hanem modern interaktív múzeum is, ahol a látogatók megismerhetik az észt sikereket és technológiai újdonságokat. A bátrabbak kipróbálhatják az „Edge Walk” nevű sétát a torony külső peremén, biztosítókötéllel. A torony étterme kiváló gasztronómiai élményt kínál a felhők felett.",
        "factsAdvanced": [
            "A torony kilátója 170 méteres magasságban található, ahol üvegpadlós részek is vannak.",
            "1991 augusztusában észt önkéntesek itt állták útját a szovjet tankoknak a függetlenségért.",
            "A toronyban található interaktív képernyők az ország legjelentősebb vívmányait mutatják be.",
            "A Tallinni tévétorony a Nagy Tornyok Világszövetségének (WFGT) büszke tagja.",
            "A torony tövében minden évben bázisugró fesztivált rendeznek a legmerészebbeknek."
        ]
    },
    "land-kadriorg-art-museum": {
        "descriptionAdvanced": "A Kadriorg Művészeti Múzeum az egyetlen olyan múzeum Észtországban, amely kifejezetten a régi európai és orosz művészetnek szenteli gyűjteményét. A múzeum otthona a pompás barokk Kadriorg-palota, melynek díszes belső terei és mitológiai mennyezetfreskói tökéletes keretet adnak a kiállított tárgyaknak. Az állandó tárlat 16-20. századi festményeket, szobrokat és iparművészeti remekműveket tartalmaz neves holland, német és orosz mesterektől. A látogatás során nemcsak a művészetben gyönyörködhetünk, hanem bepillantást nyerhetünk a cári idők fényűző életmódjába is. A palotát övező park és a gondosan ápolt francia kertek még felejthetetlenebbé teszik az élményt. A múzeum rendszeresen ad otthont komolyzenei koncerteknek és diplomáciai eseményeknek is, megőrizve az épület eredeti méltóságát.",
        "factsAdvanced": [
            "A palota főtermének mennyezeti festménye Diana és Actaeon mitológiai történetét ábrázolja.",
            "A gyűjtemény részét képezi Jacob Jordaens és Ilya Repin több jelentős alkotása.",
            "Az épületet az 1930-as években az észt államfő rezidenciájaként is használták.",
            "A múzeum építészetileg a dán királyi kastélyok stílusát ötvözi az orosz barokkal.",
            "A palota melletti President's Garden nyaranta nyitva áll a nagyközönség előtt is."
        ]
    },
    "land-st-olafs-church": {
        "descriptionAdvanced": "A Szent Olaf-templom Tallinn óvárosának egyik legmeghatározóbb szakrális építménye, melynek kecses tornya már messziről jelzi a város fekvését. A 12. században alapított templom a nevét II. Olaf norvég királyról kapta, és évszázadokon át a skandináv kereskedők legfontosabb központja volt Tallinnban. A 16. században a templom tornya 159 méter magas volt, amivel akkoriban valószínűleg a világ legmagasabb épületének számított. A torony fontos tájékozódási pontként szolgált a tengeren érkező hajóknak, de magassága miatt többször is villámcsapás áldozatává vált és leégett. A templom gótikus belső tere lenyűgöző magasságával és egyszerűségével hűen tükrözi a középkor szellemét. Ma a torony kilátója nyaranta látogatható, ahonnan az óváros egyik legszebb, madártávlati panorámája tárul elénk.",
        "factsAdvanced": [
            "A templom tornya jelenleg 124 méter magas, miután többször újjáépítették.",
            "A monda szerint a templom építője, Olaf, a torony keresztjének felhelyezésekor lezuhant és szörnyethalt.",
            "A szovjet időkben a KGB megfigyelőpontként és rádiójel-zavaró állomásként használta a tornyot.",
            "A templomhoz tartozó Mária-kápolna boltozata az észt gótika egyik legszebb példája.",
            "A toronyba vezető szűk csigalépcsőn 232 fokot kell megmászni a kilátóig."
        ]
    },
    "land-tartu-town-hall": {
        "descriptionAdvanced": "A tartui városháza a város főterének, a Raekoja plats-nak legfontosabb építészeti dísze és az önkormányzat székhelye. A jelenlegi épület, amely már a harmadik ezen a helyen, 1789-ben készült el, ötvözve a barokk és a korai klasszicizmus elegáns stílusjegyeit. A rózsaszín homlokzatú épület tornyában egy 34 harangból álló carillon működik, amely naponta többször is észt dallamokkal örvendezteti meg a járókelőket. A városháza előtti téren található a „Csókolózó diákok” szökőkútja, amely Tartu, mint diákváros egyik legkedveltebb jelképe. A tér és a városháza környéke a város társadalmi életének epicentruma, ahol nyaranta teraszos kávézók, télen pedig korcsolyapálya várja a látogatókat. Az épület pincéjében turisztikai információs központ is működik, segítve az utazókat a város felfedezésében.",
        "factsAdvanced": [
            "A városháza carillonja naponta kétszer, 9:00-kor és 21:00-kor játszik különleges dallamokat.",
            "Az épületet a német Johann Heinrich Bartholomäus Walter tervezte az 1775-ös nagy tűzvész után.",
            "A városháza ülésterme ma is az önkormányzati munka helyszíne.",
            "A homlokzaton található óra több mint kétszáz éve mutatja pontosan az időt a helyieknek.",
            "A Városháza tér észt neve „Raekoja plats”, amely már a középkorban is piactér volt."
        ]
    },
    "land-open-air-museum": {
        "descriptionAdvanced": "Az Észt Szabadtéri Múzeum (Eesti Vabaõhumuuseum) egy varázslatos időutazást kínál az észt vidéki élet múltjába egy hatalmas erdős területen, közvetlenül a tengerparton. A 72 hektáros parkban több mint 80 eredeti épületet láthatunk, melyeket az ország különböző tájegységeiről szállítottak ide, hogy megőrizzék az utókornak. A látogatók bejárhatják a nádtetős parasztházakat, a régi iskolát, a szélmalmokat, sőt egy fatemplomot és egy korabeli fogadót is felfedezhetnek. A múzeum munkatársai korhű ruhákban mutatják be a hagyományos mesterségeket és a gazdálkodás mindennapjait. Különösen népszerűek a népszokásokhoz kötődő rendezvények, mint a Szent Iván-éji ünnepség vagy a téri vásárok. Ez a helyszín tökéletes kikapcsolódást nyújt családoknak, ahol a természet és a történelem békés harmóniában találkozik.",
        "factsAdvanced": [
            "A múzeumot 1957-ben alapították a Tallinn szélén fekvő Rocca al Mare negyedben.",
            "A területen található Kolu fogadóban ma is megkóstolhatjuk a hagyományos észt ételeket.",
            "A sutlepai fatemplom az egyik legrégebbi ilyen típusú építmény az országban.",
            "A múzeum négy fő néprajzi régióra (Észak, Dél, Nyugat és a Szigetek) bontva mutatja be az épületeket.",
            "Nyaranta lovas kocsival, télen pedig szánnal is bejárható a hatalmas parkerdő."
        ]
    },
    "nat-saaremaa": {
        "descriptionAdvanced": "Saaremaa, Észtország legnagyobb szigete, az érintetlen természet, a nyugalom és az ősi balti hagyományok különleges világa. A szigetet fenyőerdők, borókás mezők és mészkősziklák teszik változatossá, ahol a tenger közelsége mindenhol érezhető. Egyik legfontosabb természeti látnivalója a Panga-fok, ahol a meredek sziklafalakról pazar kilátás nyílik a Balti-tengerre. A sziget gazdag növényvilággal büszkélkedhet, több mint 35 orchideafaj őshonos itt, ami a természetjárók számára igazi kincs. Saaremaa partvonalán számos eldugott homokos strandot és védett öblöt találunk, melyek a csendes pihenés zálogai. A sziget ökológiai tisztasága és a fenntartható életmód iránti elkötelezettsége miatt a UNESCO Bioszféra-rezervátum része.",
        "factsAdvanced": [
            "Ez a Balti-tenger negyedik legnagyobb szigete, területe közel 2700 négyzetkilométer.",
            "A Panga-fok legmagasabb pontja 21 méterrel magasodik a tenger fölé.",
            "A sziget nyugati részén fekvő Vilsandi Nemzeti Park Észtország legrégebbi védett területe.",
            "Saaremaa híres a sötét rozskenyeréről és az erős, házi készítésű söréről.",
            "A szigeten több mint 2000 madárfaj és számos ritka fókaféle figyelhető meg."
        ]
    },
    "nat-hiiumaa": {
        "descriptionAdvanced": "Hiiumaa, Észtország második legnagyobb szigete, a béke és a vadvilág érintetlen paradicsoma, amely távol esik a tömegturizmustól. A sziget területének több mint 60%-át sűrű erdők borítják, ami különlegesen tiszta levegőt és gazdag élővilágot biztosít. Legismertebb jelképe a Kõpu világítótorony, amely 1531 óta mutatja az utat a tengerészeknek, és a világ egyik legrégebbi működő világítótornya. Hiiumaa partjai rendkívül változatosak: homokos dűnék, kavicsos öblök és sziklás földnyelvek váltják egymást. A sziget lakói híresek sajátos humorukról és vendégszeretetükről, ami még barátságosabbá teszi a látogatást. Ez a helyszín tökéletes választás a túrázók, a kerékpárosok és a csillagászati megfigyelések kedvelői számára, köszönhetően a minimális fényszennyezésnek.",
        "factsAdvanced": [
            "A Kõpu világítótorony a Baltikum legmagasabb pontján, a Tornimägi-dombon áll.",
            "Hiiumaa egy 455 millió évvel ezelőtti meteoritbecsapódás helyszínén alakult ki.",
            "A szigeten található Ristimägi (Keresztek dombja) egy különleges történelmi emlékhely.",
            "Hiiumaa-t télen gyakran Európa leghosszabb jégútja köti össze a szárazfölddel.",
            "A Tahkuna-félsziget fehér homokos strandjai az ország legszebbjei közé tartoznak."
        ]
    },
    "nat-soomaa": {
        "descriptionAdvanced": "A Soomaa Nemzeti Park, melynek neve találóan „mocsárvidéket” jelent, Észtország egyik legvadabb és legkülönlegesebb természeti területe. A park leghíresebb jelensége az úgynevezett „ötödik évszak”, a tavaszi árvíz idején bekövetkező hatalmas vízszintemelkedés, amikor az erdőket és utakat csak kenuval lehet járni. A terület hatalmas tőzegmohalápokból, ártéri erdőkből és kanyargós folyókból áll, melyek gazdag élővilágnak adnak otthont. A látogatók fapallókon kialakított tanösvényeken járhatják be a mocsarakat, biztonságos közelségből figyelve meg a ritka növényeket és állatokat. Soomaa a hódok és az európai vidrák egyik legfontosabb menedékhelye az országban. A terület a UNESCO világörökségi várományos listáján is szerepel egyedülálló ökológiai értékei miatt.",
        "factsAdvanced": [
            "Az „ötödik évszak” során a vízszint akár 5 méterrel is megemelkedhet a normál álláshoz képest.",
            "A parkban még ma is készítenek hagyományos egy fatörzsből vájt kenukat (haabjas).",
            "A Riisa tanösvény babakocsival és kerekesszékkel is bejárható, bemutatva a lápok világát.",
            "Soomaa fontos fészkelőhelye az olyan ritka madaraknak, mint a szirti sas vagy a fekete gólya.",
            "Télen a befagyott mocsarakon speciális mocsárjáró talpakkal (lápicipővel) lehet túrázni."
        ]
    },
    "nat-peipus": {
        "descriptionAdvanced": "A Peipus-tó Észtország és Oroszország határán fekszik, és 3555 négyzetkilométeres területével Európa ötödik legnagyobb tava. Az észt partvidék híres a „staroverek” (óhitűek) falvairól, akik évszázadok óta őrzik különleges vallási hagyományaikat és életmódjukat. A régió mezőgazdaságáról is ismert, különösen a Peipus menti édes hagyma és az uborka termesztése zajlik itt nagyüzemben. A tópart mentén kilométereken át húzódó homokos strandok, mint például a kauksi-i part, nyaranta népszerű üdülőhelyek. A tó gazdag halállománya, különösen a süllő és a törpemuréna miatt a horgászok paradicsoma minden évszakban. Történelmileg is jelentős helyszín, hiszen 1242-ben itt zajlott a híres „Jégcsata” a német lovagok és az orosz seregek között.",
        "factsAdvanced": [
            "A tó észt partján húzódó „Hagyma útja” egy népszerű turisztikai és gasztronómiai útvonal.",
            "A tó átlagos mélysége mindössze 7-8 méter, így vize nyáron gyorsan felmelegszik.",
            "Télen a jég vastagsága elérheti a fél métert is, ilyenkor terepjárókkal is közlekednek rajta.",
            "A kauksi-i strand dűnéi „énekelnek”, ha a szél megfelelő irányból fújja a homokot.",
            "A tó három részből áll: a Nagy-Peipus, a Pszkovi-tó és az azokat összekötő Lämmi-tó."
        ]
    },
    "nat-emajogi": {
        "descriptionAdvanced": "Az Emajõgi, melynek jelentése észtül „Anya-folyó”, az ország egyik legfontosabb és egyetlen teljesen hajózható folyója. A folyó Észtország két legnagyobb tavát, a Võrtsjärvet és a Peipust köti össze, keresztülfolyva a szellemi központon, Tartun. Az Emajõgi évszázadok óta meghatározó szerepet játszik a kereskedelemben és a közlekedésben, mára pedig a szabadidő és a vízi turizmus kedvelt helyszíne. Partjait festői ártéri rétek és mocsaras területek szegélyezik, melyek gazdag madárvilágnak és ritka növényeknek adnak otthont. Tartuban a folyóparti sétányok, teraszok és hajókikötők a városi élet szerves részét képezik. A folyó lassú folyása és békés hangulata miatt ideális helyszín kenu- és csónaktúrákhoz.",
        "factsAdvanced": [
            "A folyó teljes hossza pontosan 100 kilométer a két tó között.",
            "Tartuban minden évben megrendezik az Emajõgi folyó fesztivált hajós felvonulással.",
            "A folyó deltája a Peipus-tónál védett természetvédelmi terület.",
            "A középkorban a Hanza-hajók is ezen a folyón szállították az árut az orosz piacok felé.",
            "Itt közlekedik a „Jõmmu”, egy autentikus, fából készült középkori áruszállító bárka másolata."
        ]
    },
    "nat-vilsandi": {
        "descriptionAdvanced": "A Parcul Național Vilsandi, situat pe coasta de vest a insulei Saaremaa, este cea mai veche arie protejată din statele baltice. Acesta cuprinde insula Vilsandi și aproximativ 150 de insulițe stâncoase, fiind un paradis pentru observatorii de păsări és un sanctuar pentru foci. Parcul este renumit pentru coloniile sale de păsări de mare, în special eiderul comun, és pentru flora sa bogată, inclusiv numeroase specii de orhidee. Peisajul marin, cu insulele sale mici és apele limpezi, oferă oportunități excelente pentru plimbări cu barca és explorare. Este un loc de o frumusețe naturală excepțională és de o importanță ecologică majoră.",
        "factsAdvanced": [
            "Apály idején a bátor látogatók gyalog, a tengeren gázolva is átmehetnek Saaremaáról Vilsandira.",
            "Ez volt az Orosz Birodalom első tengeri madárvédelmi területe.",
            "A park területén több mint 30 különféle orchideafaj virágzik a nyári hónapokban.",
            "A Vilsandi-szigeten található észt mérőállomás méri az ország legtisztább levegőjét.",
            "A szigeten mindössze egy maroknyi állandó lakos él, megőrizve a hely háborítatlanságát."
        ]
    }
}

# Fix nat-vilsandi description - I accidentally used Romanian in the variable assignment above
data["nat-vilsandi"]["descriptionAdvanced"] = "A Vilsandi Nemzeti Park Észtország és egyben a balti államok legrégebbi természetvédelmi területe, melyet eredetileg madárrezervátumként alapítottak 1910-ben. A Saaremaa nyugati partján fekvő park magában foglalja Vilsandi szigetét és mintegy 150 kisebb szigetét és zátonyát. A terület a madármegfigyelők igazi paradicsoma, hiszen több mint 240 madárfaj fordul meg itt, köztük a ritka pehelyréce jelentős állománya. A park nemcsak a madarakról, hanem a fókákról is híres; itt található az ország egyik legnagyobb szürkefóka-kolóniája. A tiszta tengervíz, a mészkősziklák és a különleges orchideafajok a természetbarátok számára felejthetetlen látványt nyújtanak. Vilsandi világítótornya, mely 1809-ben épült, a sziget egyik legfontosabb jelképe és tájékozódási pontja."

def update_poi(match):
    poi_block = match.group(0)
    poi_id_match = re.search(r'id:\s*"([^"]+)"', poi_block)
    if not poi_id_match:
        return poi_block
    
    poi_id = poi_id_match.group(1)
    if poi_id not in data:
        return poi_block
    
    updates = data[poi_id]
    
    # Update descriptionAdvanced.hu
    if "descriptionAdvanced" in updates:
        desc_pattern = r'(descriptionAdvanced:\s*\{[^}]*hu:\s*")([^"]*)(")'
        def desc_repl(m):
            if not m.group(2).strip():
                return f'{m.group(1)}{updates["descriptionAdvanced"]}{m.group(3)}'
            return m.group(0)
        poi_block = re.sub(desc_pattern, desc_repl, poi_block)

    # Update factsAdvanced.hu
    if "factsAdvanced" in updates:
        facts_pattern = r'(factsAdvanced:\s*\{[^}]*hu:\s*\[)([^\]]*)(\])'
        def facts_repl(m):
            if not m.group(2).strip():
                formatted_facts = ",\n        ".join([f'"{f}"' for f in updates["factsAdvanced"]])
                return f'{m.group(1)}\n        {formatted_facts}\n      {m.group(3)}'
            return m.group(0)
        poi_block = re.sub(facts_pattern, facts_repl, poi_block, flags=re.DOTALL)
        
    return poi_block

# Match each POI object
poi_pattern = r'\{[^{]*?id:\s*"[^"]+?".*?\n  \}'
new_content = re.sub(poi_pattern, update_poi, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Updated POIs: {len(data)}")
