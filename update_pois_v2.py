import re
import json

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/hungaryPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

data_to_add = {
    "HU": {
        "factsAdvanced.hu": ["Magyarország több mint 1300 termálforrással rendelkezik, ami Európában egyedülálló sűrűséget jelent.", "A Balaton 592 négyzetkilométeres felszínével Közép-Európa legnagyobb édesvízi tava.", "Az országban 10 nemzeti park található, melyek közül a Hortobágy az UNESCO Világörökség része.", "A magyar konyha alapköve, a fűszerpaprika termesztése különösen a déli régiókban, Szeged és Kalocsa környékén jelentős."]
    },
    "budapest": {
        "factsAdvanced.hu": ["Budapest a világ egyetlen fővárosa, amely területén több mint 100 termálforrás és 12 gyógyfürdő található.", "Az M1-es metróvonal a kontinens első elektromos földalatti vasútja volt, 1896-ban adták át.", "A város alatt húzódó barlangrendszer hossza meghaladja a 120 kilométert.", "A magyar Országház a világ harmadik legnagyobb parlamenti épülete, építéséhez 40 kg aranyat használtak fel."]
    },
    "baranya": {
        "factsAdvanced.hu": ["Pécs, a vármegye székhelye 2010-ben Európa Kulturális Fővárosa címet viselte.", "Itt található a Villányi borvidék, amely az ország legdélibb bortermelő területe, híres tüzes vörösborairól.", "Harkány gyógyvize a világon egyedülálló módon gáz alakban is tartalmaz kénvegyületeket.", "A mohácsi busójárás az UNESCO szellemi kulturális örökségének elismert része."]
    },
    "bacs-kiskun": {
        "factsAdvanced.hu": ["Bács-Kiskun Magyarország legnagyobb területű vármegyéje, az ország területének tizedét adja.", "Kecskemét városa világhírű a barackpálinkájáról, amely szigorúan csak helyi gyümölcsből készülhet.", "A Kiskunsági Nemzeti Park szikes tavai és homokbuckái különleges élőhelyet biztosítanak a madárvilágnak.", "A vármegye déli részén található Baja, a halászlé és a vízi sportok egyik fontos központja."]
    },
    "bekes": {
        "factsAdvanced.hu": ["Békés vármegye az ország legfontosabb gabonatermelő vidéke, gyakran nevezik az ország éléstárának.", "Gyula vára az egyetlen épen maradt gótikus téglaerődítmény a teljes Közép-Európa területén.", "A csabai kolbász világszerte ismert hungarikum, melynek receptje generációk óta változatlan.", "Szarvason található a történelmi Magyarország földrajzi középpontja, melyet emlékmű jelöl."]
    },
    "borsod-abauj-zemplen": {
        "factsAdvanced.hu": ["A Tokaji borvidék a világ első zárt borvidéke, 2002 óta az UNESCO Világörökség része.", "A miskolctapolcai Barlangfürdő Európában egyedülálló, természetes barlangrendszerben kialakított fürdőhely.", "Az Aggteleki-karszt barlangrendszere több mint 700 barlangot foglal magában a határon átnyúlva.", "Lillafüreden található az ország legmagasabb, 20 méter magasból lezúduló vízesése."]
    },
    "csongrad-csanad": {
        "factsAdvanced.hu": ["Szeged a napsütéses órák magas száma miatt kapta a 'napfény városa' elnevezést.", "A szegedi fűszerpaprika és a Pick szalámi az ország legismertebb exportcikkei közé tartozik.", "Ópusztaszeren látható a monumentális Feszty-körkép, amely a magyarok honfoglalását ábrázolja.", "Makó városa a vöröshagymája mellett a Makovecz Imre által tervezett Hagymatikum fürdőről is híres."]
    },
    "fejer": {
        "factsAdvanced.hu": ["Székesfehérvár a középkorban 37 magyar király koronázási és 15 uralkodó temetkezési helye volt.", "A Velencei-tó Európa egyik legmelegebb édesvízi tava, nyáron vize a 26-28 fokot is elérheti.", "A Bory-vár egyedülálló betonépítmény, melyet egyetlen művész épített 40 éven keresztül felesége iránti szerelméből.", "Mór városa a híres móri ezerjó fehérbor és a helyi borkultúra fellegvára."]
    },
    "gyor-moson-sopron": {
        "factsAdvanced.hu": ["A Pannonhalmi Főapátság az ország egyik legfontosabb szellemi központja és UNESCO Világörökség.", "Sopron a 'leghűségesebb város', mivel az 1921-es népszavazáson a Magyarországhoz tartozás mellett döntött.", "A Fertő-tó Közép-Európa harmadik legnagyobb tava és Európa legnyugatibb sztyeppei tava.", "Győr az Audi gyár révén a világ egyik legjelentősebb motorgyártó központjává vált."]
    },
    "hajdu-bihar": {
        "factsAdvanced.hu": ["A Hortobágyi Nemzeti Park Európa legnagyobb összefüggő füves pusztája.", "Hajdúszoboszló büszkélkedhet Európa legnagyobb fürdőkomplexumával, több mint 30 medencével.", "Debrecen a reformáció idején kapta a 'kálvinista Róma' nevet, vallási jelentősége miatt.", "A Hortobágyon található Kilenclyukú híd az ország leghosszabb kőből készült közúti hídja."]
    },
    "heves": {
        "factsAdvanced.hu": ["A Mátrában található Kékes-tető 1014 méterével Magyarország legmagasabb pontja.", "Eger vára a török elleni 1552-es hősies védekezés jelképe a magyar történelemben.", "Az Egri Bikavér az ország egyik legismertebb és legkeresettebb vörösbora világszerte.", "Egerszalókon egyedülálló, természetes sódomb alakult ki a feltörő gyógyvíz ásványi anyagaiból."]
    },
    "jasz-nagykun-szolnok": {
        "factsAdvanced.hu": ["A vármegye nevét az ide települt jász és kun népcsoportokról kapta, akik saját kiváltságokkal rendelkeztek.", "A Tisza-tó az ország legnagyobb mesterséges tava, amely mára egyedülálló ökoturisztikai paradicsommá vált.", "Szolnok városa ad otthont a RepTárnak, amely Európa egyik legmodernebb repüléstörténeti múzeuma.", "A jászberényi múzeumban őrzik a híres Lehel-kürtöt, amely a magyar történelem egyik fontos ereklyéje."]
    },
    "komarom-esztergom": {
        "factsAdvanced.hu": ["Esztergom volt Magyarország első fővárosa és a magyar katolikus egyház székhelye.", "Az Esztergomi Bazilika az ország legnagyobb temploma, kupolájának magassága 71,5 méter.", "A komáromi erődrendszer a Monarchia egyik legnagyobb és legfontosabb katonai létesítménye volt.", "Tatabányán található a Turul-emlékmű, amely Európa legnagyobb madárszobra 15 méteres szárnyfesztávolságával."]
    },
    "nograd": {
        "factsAdvanced.hu": ["Hollókő volt az első falu a világon, amely felkerült az UNESCO Világörökségi listájára.", "Nógrád vármegyét gyakran nevezik a 'várak földjének' a területén található számos középkori erőd miatt.", "Ipolytarnócon látható a 'világörökség kapuja', ahol millió éves ősleleteket fedeztek fel.", "A Salgó vára egy 625 méter magas bazaltkúpon áll, ahonnan tiszta időben a Tátra csúcsai is látszanak."]
    },
    "pest": {
        "factsAdvanced.hu": ["Pest vármegye az ország legnépesebb vármegyéje, amely Budapestet mint gyűrű öleli körül.", "Gödöllőn található Magyarország legnagyobb barokk kastélya, amely Sisi királyné kedvelt tartózkodási helye volt.", "Visegrád a 14. században a magyar királyok székhelye volt, ma a V4 országok együttműködésének névadója.", "Szentendre festői kisvárosa a művészek és a turisták egyik legkedveltebb célpontja a Dunakanyarban."]
    },
    "somogy": {
        "factsAdvanced.hu": ["Somogy vármegye rendelkezik a Balaton déli partjának leghosszabb, közel 70 kilométeres szakaszával.", "A Zselici Csillagoségbolt-park Európa egyik legkevesebb fényszennyezéssel érintett területe.", "Siófok a Balaton 'fővárosa', amely nyaranta az ország egyik legélénkebb turisztikai központjává válik.", "Kaposvár 2004-ben nyerte el a 'Virágos Városok és Falvak Európai Versenyének' aranyérmét."]
    },
    "szabolcs-szatmar-bereg": {
        "factsAdvanced.hu": ["Ez az egyetlen vármegye az országban, amely három országgal – Szlovákiával, Ukrajnával és Romániával – is határos.", "A Nyíregyházi Állatparkot többször is Európa legjobb állatkertjének választották a saját kategóriájában.", "Máriapócs az ország egyik leglátogatottabb zarándokhelye a könnyező Szűzanya-ikon miatt.", "A Felső-Tisza vidéke híres a középkori templomairól, melyek festett kazettás mennyezeteikkel egyedülállóak."]
    },
    "tolna": {
        "factsAdvanced.hu": ["Szekszárd a legkisebb vármegyeszékhely Magyarországon, mégis világhírű borvidék központja.", "A Gemenci-erdő Európa legnagyobb összefüggő ártéri erdeje, ahol híres gímszarvas-állomány él.", "Pakson található az ország egyetlen atomerőműve, amely a hazai áramtermelés jelentős részét adja.", "A vármegye déli részén élő dunai svábok gazdag néprajzi hagyományokkal és tájházakkal rendelkeznek."]
    },
    "vas": {
        "factsAdvanced.hu": ["Szombathely az ország legrégebbi városa, melyet a rómaiak alapítottak i.sz. 43-ban Savaria néven.", "Kőszeg az egyetlen város az országban, ahol minden nap 11 órakor is szólnak a harangok a török feletti győzelem emlékére.", "Ják falujában található az ország egyik legszebb román kori temploma, a híres jáki apátság.", "Bükfürdő és Sárvár gyógyvizei nemzetközi szinten is elismert gyógyhatással bírnak."]
    },
    "veszprem": {
        "factsAdvanced.hu": ["Veszprém a 'királynék városa', mivel a püspöke rendelkezett a mindenkori magyar királyné megkoronázásának jogával.", "Tihanyban, a bencés apátság altemplomában található I. András király sírja, az egyetlen épen maradt királysír.", "Badacsony a Balaton ikonikus tanúhegye, melynek vulkanikus talaján terem a híres szürkebarát bor.", "Veszprém és a Bakony-Balaton régió 2023-ban Európa Kulturális Fővárosa volt."]
    },
    "zala": {
        "factsAdvanced.hu": ["Hévízen található a világ legnagyobb biológiailag aktív, természetes tőzegmedrű gyógytava.", "Keszthelyen áll a Festetics-kastély, amely az ország egyik legnagyobb és legszebb barokk palotája.", "A Kis-Balaton egyedülálló vizes élőhely, amely a madárvilág védelme érdekében fokozottan védett terület.", "Zala vármegye az ország egyik legerdősebb és legváltozatosabb domborzatú vidéke."]
    },
    "budapest-city": {
        "descriptionAdvanced.hu": "Budapest, Magyarország lüktető fővárosa, a Duna két partján elterülő lenyűgöző metropolisz, amelyet gyakran a 'Kelet Párizsaként' is emlegetnek. A város 1873-ban született meg Buda, Pest és Óbuda egyesítésével, és azóta Közép-Európa egyik legfontosabb kulturális és gazdasági központjává vált. A pesti oldalon az Országház monumentális épülete és az Andrássy út elegáns palotái dominálnak, míg a budai oldalon a Várnegyed középkori utcái és a Gellért-hegy kínál panorámás kilátást. Budapest világszerte híres termálfürdőiről, mint a Széchenyi vagy a Gellért, amelyek évezredes fürdőkultúrát őriznek. A város éjszakai élete, a különleges romkocsmák és a színvonalas gasztronómia minden látogató számára felejthetetlen élményt nyújt.",
        "factsAdvanced.hu": ["Budapest alatt található a világ legnagyobb termálvizes barlangrendszere, amely több mint 120 kilométer hosszú.", "A magyar főváros rendelkezik a legtöbb gyógyfürdővel a világ nagyvárosai között.", "A Dohány utcai zsinagóga a legnagyobb zsidó templom Európában és a második legnagyobb a világon.", "Az M1-es földalatti vasút a kontinens első elektromos hajtású metrója volt."]
    },
    "budai-var": {
        "factsAdvanced.hu": ["A Budai Vár alatt egy bonyolult, több kilométer hosszú barlang- és pincerendszer húzódik, amely óvóhelyként is szolgált.", "A Mátyás-templom tornya 78 méter magas, és a magyar gótikus építészet egyik legszebb példája.", "A Halászbástya hét tornya a hét honfoglaló magyar vezér előtt tiszteleg, akik 896-ban telepedtek le.", "A budavári Sikló 1870-ben indult, ezzel a világ második ilyen típusú közlekedési eszköze lett."]
    },
    "orszaghaz": {
        "factsAdvanced.hu": ["Az Országház belső díszítéséhez felhasznált 40 kilogramm arany ma több milliárd forintot érne.", "Az épületben összesen 691 helyiség található, a folyosók hossza pedig meghaladja a 20 kilométert.", "A központi kupola magassága 96 méter, ami a honfoglalás évére, 896-ra utal.", "A Parlament hűtését eredetileg két hatalmas jégverem és a Duna vize biztosította az udvaron keresztül."]
    },
    "hosok-tere": {
        "factsAdvanced.hu": ["A Millenniumi emlékmű központi oszlopán Gábriel arkangyal látható, kezében a kettős kereszttel és a Szent Koronával.", "Az oszlop talpazatánál álló hét lovas szobor a hét honfoglaló magyar vezért ábrázolja.", "A téren található Hősök emlékkövét évente több állami ünnepség keretében is megkoszorúzzák.", "A tér alatt található a kisföldalatti (M1) egyik megállója, Budapest egyik legszebb történelmi állomása."]
    },
    "dunapart": {
        "factsAdvanced.hu": ["A Duna-parti látkép 1987 óta az UNESCO Világörökség része, mint az egyik legszebb folyóparti panoráma.", "A 'Cipők a Duna-parton' emlékmű 60 pár vasból készült cipővel állít emléket a holokauszt áldozatainak.", "A pesti rakparton haladó 2-es villamos vonalát a National Geographic a világ egyik legszebb villamosvonalának választotta.", "A Duna budapesti szakaszán több mint tíz híd köti össze a város két oldalát."]
    },
    "margitsziget": {
        "factsAdvanced.hu": ["A sziget ivóvizét és a tavak vízellátását egy 1867-ben fúrt artézi kút biztosítja.", "A margitszigeti Víztorony az ország legrégebbi és legmagasabb ilyen jellegű műemléke.", "A szigeten található domonkos rendi kolostor romjai között élt Szent Margit királylány a 13. században.", "A zenélő szökőkút minden órában más-más dallamra táncoltatja meg a vízsugarakat."]
    },
    "varosliget": {
        "factsAdvanced.hu": ["A Városliget a világ egyik legelső nyilvános népkertje, amelyet már a 19. század elején megnyitottak.", "A Vajdahunyad vára az 1896-os ünnepségekre épült, hogy bemutassa a magyar építészet különböző stílusait.", "A Széchenyi fürdő Európa legnagyobb gyógyfürdő-komplexuma, vize 1246 méter mélyről tör fel.", "A Liget Budapest projekt keretében épült Magyar Zene Háza számos nemzetközi építészeti díjat nyert."]
    },
    "andrassy-ut": {
        "factsAdvanced.hu": ["Az Andrássy út alatt futó kisföldalatti Európa második legrégebbi metróvonala London után.", "Az utat szegélyező platánfákat a 19. század végén ültették, hogy árnyékot adjanak a sétálóknak.", "A Magyar Állami Operaház akusztikája a világ legjobbjai közé tartozik, vetekszik a milánói Scalával.", "Az út legvégén található villanegyedben számos nagykövetség és diplomáciai testület székel."]
    },
    "nyugati-palyaudvar": {
        "factsAdvanced.hu": ["A Nyugati pályaudvar vasszerkezetét a párizsi Eiffel-torony tervezőjének cége készítette.", "Az állomás helyén nyitották meg 1846-ban az ország első vasútvonalát Pest és Vác között.", "A pályaudvar Királyi váróterme ma is őrzi Ferenc József és Sisi királyné számára kialakított pompát.", "Az itt található McDonald's éttermet rendszeresen a világ legszebb gyorséttermének választják meg."]
    },
    "lanchid": {
        "factsAdvanced.hu": ["A Lánchíd volt az első állandó híd, amely összekötötte Budát és Pestet a folyó felett.", "A híd építését gróf Széchenyi István kezdeményezte, aki soha nem tudott átkelni a kész hídon.", "A pilléreket díszítő oroszlánoknak valójában van nyelvük, csak lentről nézve nem látszanak.", "A második világháborúban felrobbantott hidat pontosan 100 évvel az eredeti átadása után nyitották meg újra."]
    },
    "pecs": {
        "factsAdvanced.hu": ["Pécs ókeresztény sírkamrái a 4. századból származnak, és egyedülálló bepillantást engednek a római korba.", "A pécsi Székesegyház négy monumentális tornya a város látképének meghatározó eleme.", "A Zsolnay Kulturális Negyedben látható a híres Gyugyi-gyűjtemény, amely több mint 600 kerámiát tartalmaz.", "A város mediterrán éghajlata kedvez a mandulafáknak, melyek virágzása minden évben várva várt esemény."]
    },
    "siklos": {
        "descriptionAdvanced.hu": "Siklós a Villányi-hegység déli lábánál fekvő történelmi város, amely leginkább épen maradt középkori váráról híres. A vár évszázadokon át a térség védelmi és hatalmi központja volt, falai között ma is érezhető a történelem szele. A látogatók bebarangolhatják a várudvart, megtekinthetik a gótikus várkápolnát és a kiállításokat, amelyek a nemesi családok életét mutatják be. Siklós nemcsak történelmi emlékekben gazdag, hanem kiváló bortermelő vidék is, ahol a testes vörösborok szerelmesei találnak kedvükre valót. A város közeli gyógyfürdője, Harkány pedig a testi-lelki felfrissüléshez nyújt ideális helyszínt. A környék lankás dombjai és a mediterrán hangulat felejthetetlen élményt ígérnek minden kirándulónak.",
        "factsAdvanced.hu": ["A siklósi vár az ország azon kevés erődítménye közé tartozik, amely soha nem dőlt romba az ostromok során.", "A várkápolna gótikus stílusa és freskói az ország legértékesebb műemlékei közé tartoznak.", "Siklós közelében található a híres Villányi borvidék, amely a minőségi vörösborok hazája.", "A városban látható Malkocs bég dzsámija, amely a török hódoltság egyik legszebb fennmaradt emléke."]
    },
    "mohacs": {
        "descriptionAdvanced.hu": "Mohács a Duna partján fekvő történelmi város, amelynek neve örökre összefonódott az 1526-os sorsfordító mohácsi csatával. A város emlékezete mélyen őrzi a múlt eseményeit, amit a Nemzeti Emlékhely lenyűgöző sírkertje és szobrai is hirdetnek. Mohács azonban nemcsak a történelmi gyász, hanem a vidámság városa is: itt rendezik meg minden évben a busójárást, Magyarország leghíresebb téltemető népszokását. A maszkos alakok, a kolompolás és a máglyagyújtás rituáléja az UNESCO szellemi világörökség részét képezi. A Duna-parti sétány, a hangulatos utcák és a helyi gasztronómia különleges hangulatot árasztanak. A város fontos kikötőhely és kulturális csomópont, ahol a népi hagyományok és a modern városi élet harmonikusan élnek egymás mellett.",
        "factsAdvanced.hu": ["A mohácsi busójárás minden évben a farsangi időszak végén, több tízezer látogató előtt zajlik.", "A Mohácsi Nemzeti Emlékhelyen több mint 1500 katona nyugszik tömegsírokban az 1526-os csata emlékére.", "A városban található a Szent Miklós vízi- és taposómalom, amely az ország egyetlen ilyen jellegű ipari műemléke.", "Mohács a Duna egyik legfontosabb határkikötője Magyarország déli részén."]
    },
    "villany": {
        "descriptionAdvanced.hu": "Villány Magyarország legdélebbi és egyik legnépszerűbb borvidékének központja, amelyet gyakran a 'vörösborok városa' néven emlegetnek. A település híres pincesora a magyar borkultúra egyik ikonikus helyszíne, ahol a látogatók közvetlenül a termelőktől kóstolhatják meg a díjnyertes cabernet-ket és kékfrankosokat. A vidék mediterrán jellegű éghajlata and a különleges talajadottságok lehetővé teszik a testes, mélyvörös borok készítését, amelyek nemzetközi hírnevet hoztak a régiónak. Villányban a borászat nemcsak munka, hanem életforma, amit a számos borfesztivál és a vendégszerető borpincék is bizonyítanak. A környéken sétálva lenyűgöző szőlőültetvények és festői panoráma tárul a látogatók elé. A gasztronómia itt elválaszthatatlan a bortól, a helyi éttermek pedig kiválóan párosítják a hagyományos ételeket a vidék legjobb nedűivel.",
        "factsAdvanced.hu": ["A Villányi borvidék volt az első az országban, amely bevezette a szigorú eredetvédelmi rendszert.", "A villányi pincesor 20 dupla pincéből áll, amelyek műemléki védelem alatt állnak.", "A vidék leghíresebb szőlőfajtája a villányi franc, amely mára a régió védjegyévé vált.", "Villányban minden évben megrendezik a Vörösbor Fesztivált, amely az ország egyik legnagyobb ilyen jellegű rendezvénye."]
    },
    "kecskemet": {
        "factsAdvanced.hu": ["Kecskemét főtere az ország egyik legszebb építészeti együttese, ahol több vallás temploma is egymás mellett áll.", "A kecskeméti barackpálinka az első magyar termékek között kapott nemzetközi eredetvédettséget.", "A városban található a Cifra Palota, amely a magyar szecesszió egyik legkülönlegesebb, díszes kerámiákkal borított épülete.", "A Kodály Intézet a világhírű zenepedagógiai módszer, a Kodály-módszer nemzetközi képzési központja."]
    },
    "kalocsa": {
        "descriptionAdvanced.hu": "Kalocsa az ország egyik legősibb városa, amely az államalapítás óta érseki székhelyként fontos vallási és kulturális szerepet tölt be. A város neve világszerte összefonódott a hungarikumnak számító kalocsai fűszerpaprikával és a színpompás kalocsai hímzéssel. A látogatókat az érseki palota lenyűgöző barokk épülete és a fenséges székesegyház fogadja, melyek a város szellemi nagyságát hirdetik. A Paprika Múzeum bemutatja az 'aranyat érő' növény termesztésének és feldolgozásának titkait. Kalocsa hagyományőrző népművészete, a pingálás és a népviselet ma is élő hagyomány a környéken. A Duna közelsége és a gazdag történelmi múlt egyedülálló atmoszférát teremt, ahol a vallási méltóság és a népi kultúra találkozik. A város különleges gasztronómiai élményeket is kínál, melyek középpontjában természetesen a helyi paprika áll.",
        "factsAdvanced.hu": ["Kalocsa az ország egyik legfontosabb paprikatermesztő központja, itt található a világ első Paprika Múzeuma.", "A kalocsai hímzés eredetileg csak fehér volt, a ma ismert színes motívumok csak a 20. században alakultak ki.", "Az Érseki Könyvtár több mint 150 000 kötetet őriz, köztük felbecsülhetetlen értékű kódexeket és ősnyomtatványokat.", "A városban rendezik meg évente a Paprikafesztivált, ahol a helyi ételek és a népművészet kerülnek a középpontba."]
    },
    "kiskunmajsa": {
        "descriptionAdvanced.hu": "Kiskunmajsa a Duna-Tisza közén fekvő barátságos alföldi kisváros, amely legfőképpen a kiváló minőségű gyógyvízéről ismert. A Jonathermál Gyógy- és Élményfürdő az év minden szakában várja a pihenni és gyógyulni vágyókat tágas medencéivel és családias hangulatával. A város történelme során a kunok és a jászok szállásterülete volt, aminek emlékét a helyi múzeumok és hagyományok ma is hűen őrzik. A település környéke a Kiskunsági Nemzeti Park része, így a természetjárók számára is tartogat felfedeznivalókat a homokbuckák és a ritka élővilág révén. Kiskunmajsa híres a vendégszeretetéről és a hagyományos alföldi konyhájáról, ahol a pusztai ízek dominálnak. A város csendes nyugalma és a tiszta levegő tökéletes helyszínt biztosít a kikapcsolódáshoz a rohanó hétköznapok után.",
        "factsAdvanced.hu": ["Kiskunmajsa gyógyvize 72 fokos hőmérsékleten tör fel a mélyből, és kiválóan alkalmas mozgásszervi panaszok kezelésére.", "A városban található az 1956-os forradalom emlékére létrehozott múzeum, amely az ország egyik legfontosabb vidéki gyűjteménye.", "A település környéki pusztákon még ma is láthatók az egykori tanyasi életforma megmaradt épületei.", "Kiskunmajsa híres a nyári fesztiváljairól, ahol a környék legjobb népzenészei és táncosai lépnek fel."]
    },
    "bekescsaba": {
        "factsAdvanced.hu": ["Békéscsaba a magyarországi szlovák kisebbség legfontosabb kulturális központja, ahol ma is ápolják az ősi nyelvet és szokásokat.", "A Csabai Kolbászfesztivál az ország egyik legnagyobb gasztronómiai rendezvénye, ahol több száz csapat gyúrja a híres kolbászt.", "A város evangélikus nagytemploma Közép-Európa egyik legnagyobb ilyen felekezetű temploma.", "Munkácsy Mihály, a világhírű festőművész itt töltötte inaséveit, a városban található múzeum pedig a legtöbb képét őrzi a világon."]
    },
    "gyula": {
        "descriptionAdvanced.hu": "Gyula az ország délkeleti részén fekvő patinás fürdőváros, amely a történelmi emlékek és a modern wellness tökéletes kombinációját kínálja. A város legismertebb jelképe a gyulai vár, amely Közép-Európa egyetlen épen maradt gótikus téglaerődítménye, és falai között interaktív múzeum várja a látogatókat. A vár tövében található a Várfürdő, amely az egykori Almásy-kastély természetvédelmi területté nyilvánított parkjában kapott helyet, páratlan környezetet biztosítva a gyógyuláshoz. A felújított Almásy-kastély látogatóközpontja bepillantást enged a nemesi élet és a cselédség mindennapjaiba. Gyula virágos parkjai, a Körösök közelsége és a hangulatos sétálóutcák romantikus atmoszférát teremtenek. A város gasztronómiája is kiemelkedő, a gyulai kolbász és a Százéves Cukrászda süteményei messze földön híresek.",
        "factsAdvanced.hu": ["A gyulai vár ostroma 1566-ban 63 napig tartott, ami a leghosszabb várvédelem volt a magyar történelemben.", "A gyulai Várfürdő vize 2005 méter mélyről tör fel, és kiválóan alkalmas reumatikus panaszok enyhítésére.", "A Százéves Cukrászda valójában már több mint 180 éves, és az ország második legrégebbi cukrászdája.", "A gyulai kolbász az egyik legkorábbi magyar termék, amely elnyerte a nemzetközi hírnevet és védjegyet."]
    }
}

# Split by POI objects
# A better way to split is to find each { id: "..." block
# We can use a regex to find the start of each object
# The POIs are in arrays, so they are like \n  {\n    id: "...",

def process_file():
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.strip() == '{' and i + 1 < len(lines) and 'id:' in lines[i+1]:
            # Found a POI object start
            obj_lines = [line]
            i += 1
            brace_count = 1
            while i < len(lines) and brace_count > 0:
                obj_line = lines[i]
                brace_count += obj_line.count('{')
                brace_count -= obj_line.count('}')
                obj_lines.append(obj_line)
                i += 1
            
            obj_str = "".join(obj_lines)
            poi_id_match = re.search(r'id:\s*"(.*?)"', obj_str)
            if poi_id_match:
                poi_id = poi_id_match.group(1)
                if poi_id in data_to_add:
                    obj_str = update_poi_object(obj_str, poi_id)
            
            new_lines.append(obj_str)
            continue
        else:
            new_lines.append(line)
            i += 1
            
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write("".join(new_lines))

def update_poi_object(obj_str, poi_id):
    updates = data_to_add[poi_id]
    
    # Update factsAdvanced
    if "factsAdvanced.hu" in updates:
        facts_hu = updates["factsAdvanced.hu"]
        facts_hu_json = json.dumps(facts_hu, ensure_ascii=False)
        if "factsAdvanced:" in obj_str:
            # Replace empty hu: []
            # We need to be careful to only replace within factsAdvanced
            fa_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', obj_str, re.DOTALL)
            if fa_match:
                fa_content = fa_match.group(1)
                if re.search(r'"hu":\s*\[\s*\]', fa_content):
                    new_fa_content = re.sub(r'("hu":\s*)\[\s*\]', r'\1' + facts_hu_json, fa_content)
                    obj_str = obj_str.replace(fa_content, new_fa_content)
        else:
            # Add factsAdvanced
            new_field = f'    factsAdvanced: {{\n      "de": [],\n      "hu": {facts_hu_json},\n      "ro": [],\n      "en": []\n    }},\n'
            # Insert before description:
            if "description:" in obj_str:
                obj_str = obj_str.replace("description:", new_field + "    description:", 1)
            else:
                # Insert after name:
                name_match = re.search(r'name:.*?\n', obj_str)
                if name_match:
                    obj_str = obj_str.replace(name_match.group(0), name_match.group(0) + new_field, 1)

    # Update descriptionAdvanced
    if "descriptionAdvanced.hu" in updates:
        desc_hu = updates["descriptionAdvanced.hu"]
        if "descriptionAdvanced:" in obj_str:
            da_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', obj_str, re.DOTALL)
            if da_match:
                da_content = da_match.group(1)
                # Check if hu is empty
                hu_match = re.search(r'"hu":\s*""', da_content)
                if hu_match:
                    new_da_content = re.sub(r'("hu":\s*)""', r'\1' + json.dumps(desc_hu, ensure_ascii=False), da_content)
                    obj_str = obj_str.replace(da_content, new_da_content)
        else:
            # Add descriptionAdvanced
            new_field = f'    descriptionAdvanced: {{\n      "de": "",\n      "hu": {json.dumps(desc_hu, ensure_ascii=False)},\n      "ro": "",\n      "en": ""\n    }},\n'
            # Insert before facts:
            if "facts:" in obj_str:
                obj_str = obj_str.replace("facts:", new_field + "    facts:", 1)
            else:
                # Insert before the last }
                obj_str = obj_str.strip()
                if obj_str.endswith('},'):
                    obj_str = obj_str[:-2].rstrip() + ",\n" + new_field + "  },"
                elif obj_str.endswith('}'):
                    obj_str = obj_str[:-1].rstrip() + ",\n" + new_field + "  }"

    return obj_str

process_file()
print("Update v2 complete.")
