import json

batch_data = {
  "lang": "ro",
  "country": "libya",
  "files": [
    "lib/visualLab/data/poiExtraLibyaCitiesV2.ts",
    "lib/visualLab/data/poiExtraLibyaEconomicV2.ts",
    "lib/visualLab/data/poiExtraLibyaHistoryV2.ts",
    "lib/visualLab/data/poiExtraLibyaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraLibyaLifeV2.ts",
    "lib/visualLab/data/poiExtraLibyaNatureV2.ts",
    "lib/visualLab/data/poiExtraLibyaReliefV2.ts"
  ],
  "items": [
    {
      "id": "hun-cities-v2",
      "descriptionAdvanced": "Hun este capitala administrativă a districtului Jufra din centrul Libiei, acționând ca un punct de legătură crucial între coasta de nord și vastul sud saharian. Orașul este recunoscut pentru palmierii săi și pentru oaza verde, care contrastează puternic cu ariditatea rocilor înconjurătoare. Găzduiește un festival anual al toamnei, care celebrează cultura locală a curmalelor și meșteșugurile tradiționale libiene, fiind astfel un nucleu esențial de conservare a tradițiilor din Jufra. Geografie K7 — regiuni de oază și festivaluri agricole.",
      "factsAdvanced": [
        "Centrul districtului Al Jufra din regiunea Fezzan.",
        "Găzduiește Festivalul Internațional de Toamnă Hun dedicat artei și curmalelor.",
        "Are o populație de peste 30.000 de locuitori.",
        "Așezat pe marginea nord-estică a Mării de Nisip Murzuq.",
        "Peisajul este dominat de platouri de calcar deșertic la nord și est.",
        "Este situat la circa 600 de kilometri sud de capitala Tripoli."
      ]
    },
    {
      "id": "waddan-cities-v2",
      "descriptionAdvanced": "Waddan este una dintre cele mai vechi oaze din Libia, localizată la nord-est de Hun, în depresiunea fertilă a regiunii Jufra. Istoria așezării este remarcabilă datorită vechii sale cetăți otomane și ruinelor care amintesc de zilele de glorie ale comerțului cu caravane. Spre deosebire de alte oaze, solul din Waddan permite și creșterea pomilor fructiferi, adăugând rodii și smochine alături de palmierii clasici. Istorie K7 — fortificații și rute ale oazelor.",
      "factsAdvanced": [
        "A fost un punct de intersecție vital pentru triburile nomade nordice și sudice.",
        "Orașul găzduiește ruinele vechiului ksar (fortăreață) Waddan.",
        "Climatul variază de la cald extrem vara la frig accentuat în serile de iarnă.",
        "Este înconjurat parțial de lanțul muntos al-Haruj.",
        "Culturile de rodii de aici sunt renumite pentru dulceața lor pe plan național.",
        "Waddan se bucură de cantități decente de apă subterană prin foraje."
      ]
    },
    {
      "id": "brak-cities-v2",
      "descriptionAdvanced": "Brak (Brak al-Shati) este o localitate strategică și pitorească așezată de-a lungul Wadi al-Shati, o impresionantă depresiune liniară naturală din sudul Libiei. Este renumită pentru Facultatea de Inginerie a Universității din Sabha și pentru că a fost un pol regional de modernizare și educație. Orașul susține comunități agricole vibrante, irigate intens grație rezervelor profunde de apă subterană din zonă. Geografie K8 — managementul apei și învățământul universitar.",
      "factsAdvanced": [
        "Wadi al-Shati, valea în care se află, se întinde pe sute de kilometri.",
        "Universitatea din Brak se concentrează pe tehnologia petrolieră și a apei.",
        "Zona are soluri feruginoase care îi conferă un aspect roșiatic caracteristic.",
        "Brak a servit ca bază militară esențială în istoria contemporană a sudului.",
        "Vegetația se limitează strict la valea protejată împotriva deșertificării de ecrane verzi.",
        "A fost un centru activ pentru triburile Megarha din sudul țării."
      ]
    },
    {
      "id": "al-qatrun-cities-v2",
      "descriptionAdvanced": "Al Qatrun se află în extremitatea sudică a Libiei, funcționând ca o ultimă frontieră majoră și o așezare de vamă înainte de granița nordică a Nigerului și a Ciadului. De sute de ani, acest mic oraș izolat a reprezentat salvarea pentru caravanele care călătoreau săptămâni întregi prin cel mai aprig deșert. Chiar și astăzi, locuitorii triburilor Tebu și Tubu mențin un comerț transfrontalier animat și rețele logistice pe care se bazează supraviețuirea în deșertul profund. Sociologie K8 — antropologia frontierelor și triburile Tubu.",
      "factsAdvanced": [
        "Este cea mai sudică așezare administrativă mare din districtul Murzuq.",
        "Majoritatea locuitorilor sunt membri ai grupurilor etnice afro-sahariene Tebu.",
        "Consulatul Nigerului a fost mult timp prezent aici datorită rutei comerciale.",
        "Se află la o distanță de aproape 1000 de kilometri sud de capitala Tripoli.",
        "Este punctul de start pentru expedițiile complexe în masivul Tibesti.",
        "Vegetația este extrem de săracă, bazându-se pe puțuri adânci pentru a supraviețui."
      ]
    },
    {
      "id": "zintan-cities-v2",
      "descriptionAdvanced": "Zintan este situat la mare altitudine, deasupra platourilor din lanțul muntos Nafusa, în nord-vestul țării. Ca unul dintre cele mai mari și influente centre ale arabilor nomazi din regiunea montană, Zintan se bucură de un statut aparte, cu o organizare militară și tribală foarte bine închegată. Arhitectura de piatră a localității sfidează condițiile climatice montane aspre. Agricultura se bazează preponderent pe plantațiile restrânse de măslini și creșterea turmelor de capre și oi pe platourile înalte. Geografie K7 — triburile nomade arabe și geografia platourilor.",
      "factsAdvanced": [
        "Este situat pe marginea estică ascuțită a Munților Nafusa.",
        "A fost cartierul general al revoluționarilor montani de vest în anul 2011.",
        "Dispune de un aeroport local critic pentru mișcarea trupelor și proviziilor.",
        "Numele orașului derivă probabil de la cuvântul berber pentru un tip de piatră freatică.",
        "Tradițiile de echitație și poezie beduină sunt extrem de populare în rândul tinerilor.",
        "Iernile pot aduce vânturi extrem de reci care coboară sub punctul de îngheț."
      ]
    },
    {
      "id": "mizda-cities-v2",
      "descriptionAdvanced": "Mizda a funcționat timp de generații drept poartă între câmpia roditoare Jefara și imensitatea aridă a deșertului Hamada al-Hamra spre sud. Așezarea are ruinele câtorva ghorfas (grânare fortificate) ridicate de vechii locuitori pentru a proteja proviziile esențiale împotriva triburilor jefuitoare. Economia prezentă se bazează pe pășunat și rolul orașului de punct de odihnă major pe Autostrada Fezzan, care coboară din munți spre inima uscată a Libiei. Geografie K7 — infrastructură rutieră și pășunat.",
      "factsAdvanced": [
        "Se află la circa 160 de kilometri sud de orașul Tripoli.",
        "Este capitala districtului omonim care cuprinde marea suprafață de deșert stâncos.",
        "Reprezintă limita nordică a vastului podiș calcaros Hamada al-Hamra.",
        "Dispune de stații majore de pompare a carburanților pentru traficul de mare distanță.",
        "Vechile case de noroi încă se profilează pe dealurile de la marginea oazei.",
        "Beduinii locali se ocupă tradițional de comerțul cu lână de capră și ovine."
      ]
    },
    {
      "id": "shahhat-cities-v2",
      "descriptionAdvanced": "Shahhat este orașul modern care s-a dezvoltat deasupra și în jurul uluitorului sit antic grecesc Cyrene, aflat în Munții Jebel Akhdar din estul Libiei. Peisajul său excepțional este dominat de păduri bogate, altitudini de peste 600 de metri și un climat aproape continental. Shahhat rămâne un magnet pentru studiul arhitecturii grecești antice din străinătate, ruinele templului lui Zeus și necropolele oferind vizitatorilor o călătorie incredibilă în istoria regiunii Cirenaica. Istorie K8 — coloniile grecești din nordul Africii.",
      "factsAdvanced": [
        "Orașul antic adiacent (Cyrene) a fost fondat de coloniști greci în anul 631 î.Hr.",
        "Shahhat este cunoscut pentru unul dintre cele mai bogate regimuri pluviometrice din Libia.",
        "Relieful carstic înconjurător este presărat cu numeroase peșteri naturale adânci.",
        "Izvorul sacru al lui Apollo a oferit apă potabilă continuu timp de peste 2600 de ani.",
        "Cyrenaica modernă, ca regiune istorică, își trage numele de la vechiul sit.",
        "Dispune de plantații mari de livezi de pomi fructiferi precum merele și cireșele."
      ]
    },
    {
      "id": "susa-cities-v2",
      "descriptionAdvanced": "Susa (vechiul Apollonia) este un port maritim pitoresc ascuns la poalele abrupte ale Munților Verzi. A funcționat ca portul principal al Cyrenei în antichitate și posedă un farmec inedit, combinând Marea Mediterană de un albastru strălucitor cu un teatru grecesc excepțional conservat care privește chiar spre mare. Azi, Susa este o atracție preferată de turiștii locali din estul țării, combinând vestigiile palatelor bizantine cu pensiunile de coastă. Geografie K7 — porturi antice și recreere mediteraneană.",
      "factsAdvanced": [
        "Așezarea modernă Susa este construită chiar pe fundațiile portului Apollonia.",
        "O mare parte din portul antic este acum scufundat în Marea Mediterană.",
        "Găzduiește un muzeu maritim care expune ancore și relicve greco-romane.",
        "Teatrul antic din Susa putea găzdui peste 1.000 de spectatori.",
        "Este unul dintre puținele orașe cu ieșire la mare ale districtului Al Jabal al Akhdar.",
        "Climatul său este foarte blând vara comparativ cu zonele deșertice din sud."
      ]
    },
    {
      "id": "jalu-cities-v2",
      "descriptionAdvanced": "Jalu este o așezare-oază proeminentă în estul Libiei, în regiunea deșertică adâncă a Bazinului Cyrenaica. A acționat ca un nod critic în Războiul din Deșert al secolului XX și continuă să fie un punct de sprijin vital pentru vastele companii petroliere care operează în estul țării. Populația sa vorbește un dialect amazigh diferit (Awjila-Jalu) și întreține cu mândrie tradițiile agrare legate de recoltarea celor mai rafinate curmale destinate exportului național. Geografie K8 — industria petrolieră și comunitățile oază.",
      "factsAdvanced": [
        "Apropierea de zăcămintele uriașe de petrol face ca Jalu să ofere suport logistic major.",
        "Dialectul său amazigh este considerat unul dintre cele mai periclitate din nordul Africii.",
        "În anul 1942 a avut loc faimoasa operațiune britanică Operation Agreement în zonă.",
        "Este poziționat la granița estică a nemilosului Mare Erg Calanshio.",
        "Sărbătoarea anuală a recoltei de curmale este vitală pentru economia familiilor locale.",
        "Casele mai vechi sunt construite compact pentru a evita furtunile aspre de nisip."
      ]
    },
    {
      "id": "awjila-cities-v2",
      "descriptionAdvanced": "Awjila se regăsește în inima deșertului din estul Libiei și este probabil cel mai faimos ca locul uneia dintre cele mai neobișnuite opere de arhitectură din țară: Marea Moschee din Awjila, datând din secolul al XI-lea. Ceea ce o face spectaculoasă sunt cele douăzeci de cupole conice din cărămidă din lut, menite să optimizeze circulația aerului rece. Localitatea conservă tradiții remarcabile de cultivare a pământului și un limbaj antic amazigh preislamic. Antropologie K8 — arhitectură religioasă adaptivă și etnografie sahariană.",
      "factsAdvanced": [
        "Moscheea Mare (Atiq) este considerată una dintre cele mai vechi moschei sahariene intacte.",
        "Cele 20 de cupole conice ale moscheii sunt o adaptare structurală la căldura sahariană extremă.",
        "A fost descrisă de istoricul grec Herodot încă din secolul al V-lea î.Hr.",
        "Awjila-Jalu este un dialect berber unic, numit uneori Aujila.",
        "Oaza a susținut tradițional trecerea caravanelor trans-sahariene spre Egipt și Sudan.",
        "Deține surse bogate de ape freatice pentru irigarea miilor de palmieri de curmale."
      ]
    },
    {
      "id": "zella-cities-v2",
      "descriptionAdvanced": "Zella ocupă o zonă izolată în marginea nord-estică a Mării de Nisip Idehan Murzuq. Oaza se sprijină pe surse subterane și s-a adaptat într-un mediu sever ca un punct de aprovizionare pentru zonele petroliere masive din bazinul Sirte. Având dimensiuni modeste, Zella oferă totuși un punct de interes geologic excepțional: prezența craterelor meteoritice și a terenurilor aride ciudate în apropiere, fiind ținta curiozității pentru expedițiile de cercetare geologică. Geografie K7 — explorare geologică și izolare deșertică.",
      "factsAdvanced": [
        "Oaza de la Zella este strâns legată de producția de petrol din regiunea Al Waha.",
        "Geologii au descoperit cratere vulcanice extinse la nord și est de această așezare.",
        "Populația este relativ restrânsă și depinde în mare parte de angajarea în companii energetice.",
        "În antichitate, a funcționat ca un nod secundar pentru traficul mic de fildeș și aur.",
        "Este renumită pentru apusurile sale spectaculoase reflectate pe dunele de nisip imense.",
        "Temperaturile estivale depășesc curent media regională de 40 de grade Celsius."
      ]
    },
    {
      "id": "sokna-cities-v2",
      "descriptionAdvanced": "Sokna (sau Sawknah) este a treia comunitate urbană din zona extinsă a oazelor Jufra, poziționată lângă Hun și Waddan. De secole, a servit ca bază logistică importantă pentru călătorii spre Fezzan, datorită bogăției sale surprinzătoare de apă de suprafață sub forma micilor lacuri sărate. Din punct de vedere lingvistic, aici s-a vorbit multă vreme o variantă estică a limbii amazigh, deși aceasta a dispărut aproape complet în secolul XX, fiind o poveste de interes pentru lingviști. Sociologie K7 — pierderea limbilor indigene și istoria oazelor.",
      "factsAdvanced": [
        "Face parte din trio-ul de așezări ale districtului Jufra (Hun, Waddan, Sokna).",
        "Limba Sawknah berberă a fost declarată dispărută de către experții lingviști la sfârșitul secolului 20.",
        "Sokna este parțial înconjurată de dealurile negricioase ale Jebel Soda.",
        "O zonă majoră de campare istorică pentru forțele otomane în drumul lor spre cucerirea regiunii Fezzan.",
        "Centrul orașului are porți tradiționale boltite de lut și străzi din palmier pietrificate.",
        "Este cunoscută pentru pepenii verzi de o dulceață remarcabilă produși în sezonul cald."
      ]
    },
    {
      "id": "tiji-cities-v2",
      "descriptionAdvanced": "Tiji este o așezare liniștită, ascunsă pe pantele nord-vestice ale munților Nafusa. Cunoscut mai ales localnicilor, orașul păstrează o cultură montană libiană specifică, ocupându-se cu păstoritul ovinelor, recoltarea livezilor vechi de măslini și meșteșugul tradițional al uleiului. Aerul său curat, izolarea pașnică și abundența siturilor neolitic-preistorice în peșterile din apropiere transformă Tiji într-un mic dar prețios tezaur de tradiție rurală montană neîntreruptă de urbanizarea coastelor. Geografie K7 — ecosisteme montane de frontieră și viață agrară.",
      "factsAdvanced": [
        "Se află la doar câteva zeci de kilometri est de granița administrativă cu Tunisia.",
        "Munții din apropiere găzduiesc rămășițe preistorice din perioada Capsiană (vânători-culegători).",
        "Tiji este parte integrantă a zonei triburilor berbere Nafusi de vest.",
        "Regiunea produce un ulei de măsline presat la rece foarte apreciat în Tripoli.",
        "Are ierni surprinzător de răcoroase din cauza expunerii de mare altitudine la curenții mediteraneeni nordici.",
        "A fost implicată strategic în luptele tribale din anii 1910 contra colonialiștilor."
      ]
    },
    {
      "id": "wazin-cities-v2",
      "descriptionAdvanced": "Wazin este, esențialmente, principalul punct de trecere a frontierei muntoase dintre vestul Libiei și sudul Tunisiei (Dehiba-Wazin). Orașul are o istorie zbuciumată datorită rolului său de poartă vitală de tranzit pentru refugiați și convoaie umanitare în timpul crizei libiene. Cadrul geografic muntos face ca orașul să aibă un profil sinuos și fortificat natural, sprijinindu-se mult pe facilitățile vamale și pe piețele libere la frontiera tunisiană pentru comerț zilnic transfrontalier. Geografie K8 — managementul frontierelor și rutele logistice umanitare.",
      "factsAdvanced": [
        "Punctul de trecere Wazin-Dehiba este al doilea cel mai important punct rutier către Tunisia.",
        "Orașul este sculptat în versanții occidentali expuși ai Munților Nafusa.",
        "A schimbat controlul de mai multe ori într-un mod dramatic în aprilie 2011.",
        "Dispune de surse limitate de apă subterană, fiind dependent de puțuri profunde forate recent.",
        "Curentul electric și comunicațiile de aici sunt deseori cuplate funcțional la rețeaua tunisiană sudică.",
        "Populația deține profunde legături de sânge cu comunitățile amazigh din zona Dehiba."
      ]
    },
    {
      "id": "al-abyar-cities-v2",
      "descriptionAdvanced": "Al Abyar, localizat la nord-est de Benghazi, este un oraș prosper așezat la baza vestică a lanțului Jebel Akhdar. Numele său înseamnă Fântânile în arabă, indicând importanța resurselor de apă dulce ce permit orașului să servească drept principală zonă agricolă, furnizând fructe, legume și produse lactate proaspete pentru marea metropolă din est. În anii recenți a cunoscut o creștere imobiliară intensă ca zonă suburbană aerisită a orașului Benghazi. Geografie K7 — suburbanizare și centura agricolă urbană.",
      "factsAdvanced": [
        "Se află la doar aproximativ 50 de kilometri est de Benghazi.",
        "Numele său, Al Abyar, se traduce literalmente prin Fântânile.",
        "Furnizează peste un sfert din necesarul de legume proaspete al regiunii urbane Cyrenaica de vest.",
        "Deține o importantă fabrică de materiale de construcții, valorificând piatra locală.",
        "A fost folosit ca tabără logistică principală de către trupele britanice în timpul campaniei din 1941.",
        "Oferă condiții climatice blânde care sprijină producția extensivă de citrice."
      ]
    },
    {
      "id": "suluq-cities-v2",
      "descriptionAdvanced": "Suluq deține o reputație reverențioasă în conștiința națională libiană. Situat pe câmpiile deschise la sud-est de Benghazi, acest oraș este cunoscut drept locația în care marele erou al rezistenței naționale libiene, Omar al-Mukhtar, a fost executat de ocupanții italieni în anul 1931. Orașul găzduiește astăzi monumente și muzee comemorative, fiind privit mai mult ca un altar spiritual național decât o simplă așezare agricolă. Din punct de vedere administrativ, servește comunitățile beduine din zonele estice. Istorie K8 — rezistența anticolonială și memorie națională.",
      "factsAdvanced": [
        "În Suluq se află un monument marcând locația exactă a execuției publice din septembrie 1931 a lui Omar al-Mukhtar.",
        "A servit ca lagăr masiv de concentrare în care au pierit mii de prizonieri beduini în anii 1930.",
        "Situat la o intersecție vitală între regiunea Jebel Akhdar și platourile estice sudice.",
        "Economia sa este puternic ancorată în piața săptămânală masivă de vite și cămile.",
        "A găzduit în mod repetat mari adunări ale liderilor de trib est-libieni.",
        "Peisajul său este dominat de pășuni de stepe ideale pentru turme."
      ]
    },
    {
      "id": "qaminis-cities-v2",
      "descriptionAdvanced": "Qaminis, un mic oraș de coastă sudic al districtului Benghazi, s-a bucurat istoric de o liniște rurală pe țărmul golfului, susținută prin pescuit la scară mică și agricultură cerealieră locală. Această zonă a golfului se distinge prin bancurile de nisip și prin zonele mlăștinoase adiacente care susțin ecosisteme de păsări de baltă și flamingo în timpul iernii. Proximitatea față de marea autostradă litorală îl menține conectat direct cu rețeaua de mărfuri din marile porturi estice. Geografie K7 — ecologie costieră de mică adâncime și rute rurale.",
      "factsAdvanced": [
        "Numele său istoric greco-roman a fost Chaminos.",
        "Este localizat exact pe linia litorală a Golfului Sidra la aproximativ 50 km sud de Benghazi.",
        "Laguna din apropiere, cunoscută ca Sebkhat Qaminis, atrage numeroase păsări migratoare europene iarna.",
        "Localitatea are mai multe mori vechi și un centru de prelucrare primară a cerealelor estice.",
        "Pescuitul este sezonier, axat pe capturile artizanale de sardine mediteraneene și sepie.",
        "Terenurile nisipoase favorizează și cultivarea roșiilor foarte dulci specifice zonei."
      ]
    },
    {
      "id": "tukrah-cities-v2",
      "descriptionAdvanced": "Tukrah, sau Taucheira în antichitate, este un așezământ cu un farmec istoric covârșitor, la doar câțiva metri de țărmul Mediteranei, la nord-est de Benghazi. Cândva un oraș fortificat masiv în cadrul coaliției grecești Cyrenaica Pentapolis, ruinele clădirilor sale grecești și ale impresionantei catedrale bizantine zac direct expuse brizei mării. În prezent, modernul Tukrah se intersectează pașnic cu ruinele din apropiere, funcționând ca o zonă de agrement locală pentru tineretul din regiune dornic să scape de căldură. Istorie K8 — Pentapolis-ul antic și turismul arheologic intern.",
      "factsAdvanced": [
        "Ruinele antice din Taucheira sunt vizibile printre structurile moderne de plajă.",
        "Zidurile fortificației masive antice au o grosime uimitoare de câțiva metri.",
        "Făcea parte din vestita grupare antică de cinci mari orașe estice (Pentapolis).",
        "Sub dominația bizantină, Tukrah a fost sediul puternic fortificat al comandamentului general Justinian.",
        "Orașul găzduiește situl faimoaselor necropole sculptate în pereții prăpastiei mării.",
        "Solul său mlăștinos susține unele dintre puținele ferme intensive de stuf din Libia."
      ]
    },
    {
      "id": "benina-cities-v2",
      "descriptionAdvanced": "Aeroportul și periferia care îl înconjoară, cunoscute sub numele de Benina, formează poarta aeriană internațională principală a orașului Benghazi și, implicit, a întregului est al țării. Orașul Benina, originat în mare măsură pentru a susține angajații aeroportuari și activitățile logistice conexe bazei aeriene, a suferit devastări majore în confruntările urbane din 2014. Astăzi este într-un proces laborios de reconstrucție și de modernizare accelerată a terminalului civil aerian, servind ca emblemă a revenirii comerciale din regiune. Geografie K7 — hub-uri aeriene și planificare urbană logistică.",
      "factsAdvanced": [
        "Este casa Aeroportului Internațional Benina (BEN), esențial din punct de vedere militar și civil.",
        "Câmpul petrolier din zonă, cunoscut sub același nume, prezintă structuri geologice unice la suprafață.",
        "Cartierul a suportat unele dintre cele mai lungi și sângeroase lupte din Bătălia pentru Benghazi.",
        "Situat pe prima treaptă a platoului Jebel Akhdar, deasupra nivelului orașului de coastă Benghazi.",
        "Proximitatea sa de marele baraj Wadi Qattara impune supraveghere inginerească strictă post-precipitații.",
        "Localnicii beneficiază de legături rutiere directe prin inelele autostrăzilor naționale estice."
      ]
    },
    {
      "id": "jardas-al-ahrar-cities-v2",
      "descriptionAdvanced": "Jardas al Ahrar, o așezare pitorească situată mai sus în Munții Jebel Akhdar de est, a primit numele de Al Ahrar (Cei Liberi) în semn de onoare pentru martirii libieni din lupta anticolonială. Climatul umed, favorabil dezvoltării stejarilor și plantelor parfumate precum cimbrișorul sălbatic, a permis comunităților să dezvolte o faimoasă industrie regională de produse naturale (miere, ierburi medicinale și lână). Geografie K8 — ecologia plantelor aromatice mediteraneene și economia tradițională.",
      "factsAdvanced": [
        "Satul a fost anterior cunoscut simplu sub numele de Jardas al Abid în perioada de ocupație.",
        "Situat la o elevație care favorizează prezența ceții dense pe timpul dimineților de iarnă.",
        "Regiunea produce anual unele dintre cele mai apreciate și scumpe varietăți de miere de cimbrișor de munte din țară.",
        "Zona sa împădurită densă conține rămășițe arheologice de mici sanctuare creștine primitive din primul mileniu.",
        "Din punct de vedere administrativ depinde de primăria din apropiatul Marj.",
        "Dispune de importante rezerve protejate de păduri naturale administrate local de triburi."
      ]
    },
    {
      "id": "masa-cities-v2",
      "descriptionAdvanced": "Masa este un mic oraș idilic aflat pe platourile superioare din Cyrenaica, recunoscut național pentru microclimatul său răcoros care susține o agricultură intensivă ce necesită apă considerabilă. Așezarea are o bogăție unică de plantații de măr și viță de vie de mare valoare comercială, ceea ce o face să se detașeze clar de orașele estice aride. Pentru cetățenii înstăriți din regiune, Masa s-a dezvoltat recent ca un refugiu rezidențial ideal pentru vacanțe de iarnă blânde și seri extrem de plăcute în sezonul torid de vară. Geografie K7 — agricultură fructiferă de altitudine nord-africană.",
      "factsAdvanced": [
        "Are unele dintre cele mai mari plantații intensive de mere din Libia.",
        "Ninsorile, deși efemere, pot coborî în acest sector în lunile ianuarie sau februarie, acoperind dealurile.",
        "Este interconectat rutier între marii poli urbani Al Bayda și Qubbah din Jebel Akhdar.",
        "Localitatea oferă panorame uimitoare pe deasupra pădurilor de ienupăr protejate.",
        "Multe ferme locale sunt vechi haciende coloniale italiene restructurate de beduini.",
        "Se organizează mici piețe rurale zilnice care comercializează struguri și prune exclusive."
      ]
    },
    {
      "id": "martuba-cities-v2",
      "descriptionAdvanced": "Martuba ocupă o importanță fundamentală în sistemul de drumuri spre frontiera egipteană și se află la sud de portul Derna. Localitatea a devenit foarte faimoasă în manualele de istorie datorită fostei sale baze aeriene, baza aeriană Martuba, vitală pentru escadrilele aliate (inclusiv forțe sud-africane și australiene) în ofensiva aeriană împotriva trupelor generalului Rommel. Cadrul său fizic este stâncos, având pământ de semideșert de tranzit care prefigurează seceta majoră de est. Istorie K8 — operațiuni aeriene din Al Doilea Război Mondial în Mediterana.",
      "factsAdvanced": [
        "A găzduit cel puțin cinci aerodromuri din pământ și pietriș operaționale simultan în timpul Războiului din Deșert.",
        "Terenul său calcaros plat o făcea excelentă pentru construirea rapidă de piste de decolare prefabricate.",
        "Acum se află la intersecția vitală spre drumul ocolitor al defileului Wadi Derna.",
        "Satul se ocupă principal cu creșterea extensivă a ovinelor și furnizarea de forță de muncă pentru porturile petroliere.",
        "Clădirile din sat păstrează pe alocuri fragmente metalice și tunuri abandonate din vechiul conflict.",
        "Este faimos local pentru un han tradițional ce hrănește transportatorii rutei trans-frontaliere către Egipt."
      ]
    },
    {
      "id": "umm-al-rizam-cities-v2",
      "descriptionAdvanced": "Umm al Rizam este situat strategic la răscrucea dintre podișurile superioare din Jebel Akhdar și zona costieră joasă a Golfului Bomba. Numele său este sinonim cu comerțul beduin estic tradițional. Ceea ce diferențiază această așezare de orașele vecine este faptul că susține un mare număr de mici fabrici de lactate beduine, asigurând o rețea de produse locale pentru regiunea Derna-Tobruk. De asemenea, așezarea marchează începutul regiunilor istorice unde triburile Obeidat au stăpânit timp de sute de ani. Sociologie K7 — păstoritul seminomad și rutele de transhumanță.",
      "factsAdvanced": [
        "Funcționează drept capitală de nivel mediu a regiunii administrative Golful Bomba.",
        "Regiunea din jurul orașului este recunoscută național pentru laptele bogat de oaie și capră și brânzeturile acide.",
        "A fost un sit principal de tabără pentru forțele armate germane din Afrika Korps.",
        "Un loc critic în geografia de apărare a orașului Derna spre frontul estic îndepărtat.",
        "Dealurile prezintă cratere naturale și peșteri folosite frecvent ca ascunzători pastorale împotriva furtunilor de nisip.",
        "O autostradă modernizată taie acum liniștea vechilor sate care compun Umm al Rizam."
      ]
    },
    {
      "id": "kambut-cities-v2",
      "descriptionAdvanced": "Kambut este o mică și robustă comunitate situată chiar pe autostrada principală deșertică ce pleacă din Tobruk spre est, îndreptându-se spre trecerea de frontieră cu Egiptul de la Musaid. Este puternic orientată spre logistica camioanelor, vama comercială neoficială și serviciile de sprijin destinate călătorilor care se angajează în parcursul lung prin deșertul stâncos. Din punct de vedere istoric, a fost stația cheie pe faimoasa linie de apărare din al Doilea Război Mondial spre zona de frontieră. Geografie K7 — dezvoltarea economică bazată pe rute logistice și transit frontlier.",
      "factsAdvanced": [
        "Localitatea era cunoscută istoric în jurnalele de front militare sub numele aerodromului Gambut.",
        "Găzduiește unități de odihnă vitale pentru șoferii ce traversează coasta marmarică aspră, vântoasă și izolată.",
        "Se află la doar câțiva kilometri de țărmul stâncos al Golfului Bardia, renumit pentru relieful abrupt.",
        "Este printre cele mai puțin ploioase așezări conectate de pe marea autostradă estică litorală, lipsind umiditatea Jebel-ului.",
        "Comunitatea posedă relicve de cazemate vechi pe marginea platourilor.",
        "Un centru minor pentru repararea pieselor auto uzate ale caravanelor masive de mărfuri din Egipt."
      ]
    },
    {
      "id": "jaghbub-cities-v2",
      "descriptionAdvanced": "Jaghbub este o oază fascinantă, profund legată de istorie și religie, ascunsă la capătul unei rute solitare ce coboară sub nivelul mării, la marginea depresiunii egiptene Qattara. Fondat special datorită izolării sale extreme, orașul a găzduit principala universitate teologică (zawiya) a frăției Sanussi în secolul al XIX-lea. Chiar și cu micșorarea oazei, rămâne un epicentru de venerație teologică pentru întreg ordinul Sanussi, vizitat de adepții care doresc să studieze vechile sale cripte și bibliotecile ascunse. Istorie K8 — mișcările sufiste și așezările sacre din deșert.",
      "factsAdvanced": [
        "Se află geografic la o altitudine de minus 10 metri sub nivelul Mării Mediteraneene, într-o depresiune.",
        "Oaza a fost stabilită oficial ca centru spiritual major Sanussi în jurul anului 1856.",
        "Este locul de naștere al legendarului monarh libian, Regele Idris I (născut 1889).",
        "Terenul înconjurător este presărat cu dune periculoase din Marele Erg de Nisip Calanshio și mine neexplodate.",
        "Moscheea principală adăpostește mormântul Marelui Lider Sanussi originar, Sayyid Muhammad bin Ali.",
        "Solul bogat în minerale al albiei depresiunii a asigurat creșterea intensă a soiurilor unice de struguri de deșert."
      ]
    }
  ]
}

with open('/mnt/c/Users/User/plizio-repo/seo_libya_ro_batch2.json', 'w', encoding='utf-8') as f:
    json.dump(batch_data, f, ensure_ascii=False, indent=2)

