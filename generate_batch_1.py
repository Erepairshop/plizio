import json
data = {
  "lang": "ro",
  "country": "guatemala",
  "files": [
    "lib/visualLab/data/poiExtraGuatemalaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaLifeV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaNatureV2.ts",
    "lib/visualLab/data/poiExtraGuatemalaReliefV2.ts"
  ],
  "items": [
    {
      "id": "gt-mixco-cities-v2",
      "descriptionAdvanced": "Situat în departamentul Guatemala, Mixco a devenit a doua cea mai populată municipalitate din țară. Orașul este recunoscut pentru fabricarea tradițională de ciocolată și pentru situl arheologic mayaș Kaminaljuyú de la marginea sa. Mixco a servit mult timp ca un nod comercial esențial între capitală și regiunile vestice. Geografie K7 — dezvoltarea urbană și geografia populației.",
      "factsAdvanced": ["Fondat oficial în 1526.", "Populația depășește 463.000 de locuitori.", "Situat la o altitudine de aproximativ 1.493 metri.", "Cunoscut ca 'capitala ciocolatei' din Guatemala.", "Sărbătoarea patronală a Fecioarei de Morenos are loc în ianuarie.", "Situl arheologic Kaminaljuyú este parțial în zona sa metropolitană."]
    },
    {
      "id": "gt-puerto-barrios-cities-v2",
      "descriptionAdvanced": "Amplasat pe coasta Mării Caraibelor, Puerto Barrios este un port esențial situat în Golful Amatique. Înființat în anii 1880 pentru a susține exportul de banane de către United Fruit Company, orașul rămâne un centru vital pentru comerțul maritim al națiunii. Arhitectura sa reflectă influența caselor din lemn în stil caribian. Economie K8 — rute comerciale maritime și exporturi globale.",
      "factsAdvanced": ["Fondat în 1895 de președintele Justo Rufino Barrios.", "Port principal pentru exporturile din estul Guatemalei.", "Orașul a fost puternic avariat de un cutremur în 1976.", "Situat la coordonate de 15.72° latitudine nordică.", "Populația depășește 100.000 de locuitori.", "Găzduiește un amestec de culturi, inclusiv Garifuna și Maya Q'eqchi'."]
    },
    {
      "id": "gt-huehuetenango-cities-v2",
      "descriptionAdvanced": "Așezat la baza Munților Cuchumatanes, Huehuetenango este una dintre cele mai înalte și mai vechi așezări coloniale din nord-vestul Guatemalei. Orașul este un nod comercial important pentru producătorii de cafea și comunitățile mayașe din regiune. Ruinele Zaculeu, fosta capitală a regatului Mam, se află la doar câțiva kilometri de centrul orașului. Istorie K6 — civilizațiile mayașe și perioada colonială.",
      "factsAdvanced": ["Zaculeu a fost cucerit de spanioli în 1525.", "Altitudinea medie a orașului este de 1.901 metri.", "Centru major de producție pentru cafea de înaltă calitate.", "Biserica Imaculata Concepție datează din secolul al XIX-lea.", "Departamentul are peste 20 de limbi mayașe distincte.", "Cunoscut pentru complexitatea țesăturilor textile locale."]
    },
    {
      "id": "gt-santa-cruz-del-quiche-cities-v2",
      "descriptionAdvanced": "Santa Cruz del Quiché este un oraș înrădăcinat adânc în istoria antică, servind drept capitală a departamentului Quiché. În apropiere se află K'umarkaaj (sau Utatlán), vechea capitală a puternicului regat Maya K'iche', distrusă de conchistadorul Pedro de Alvarado în 1524. Astăzi, piețele orașului sunt centre vibrante ale culturii și comerțului indigen. Istorie K7 — căderea imperiilor și rezistența culturală.",
      "factsAdvanced": ["Fondat de spanioli în jurul anului 1539.", "Situl Utatlán (K'umarkaaj) este la doar 3 km vest.", "Altitudinea orașului ajunge la 2.021 metri deasupra nivelului mării.", "Locul de baștină al faimosului manuscris Popol Vuh.", "Religia locală combină adesea catolicismul cu ritualuri mayașe tradiționale.", "Populația este majoritar de etnie K'iche'."]
    },
    {
      "id": "gt-chimaltenango-cities-v2",
      "descriptionAdvanced": "Situat pe o câmpie fertilă în apropierea lanțului vulcanic, Chimaltenango este renumit pentru agricultura sa bogată și piețele aglomerate. Istoric, a fost planificat de cuceritorii spanioli datorită climei sale favorabile, dar construcția a fost amânată după mutarea capitalei. Orașul este adesea considerat o poartă de acces majoră către zonele muntoase occidentale. Geografie K6 — topografia agricolă și economia locală.",
      "factsAdvanced": ["Fondat de Pedro de Portocarrero în 1526.", "Faimos pentru fântâna colonială situată pe linia continentală de separație a apelor.", "Altitudinea de 1.800 de metri asigură un climat temperat.", "Exportator major de fructe, legume și textile tradiționale.", "Cutremurul devastator din 1976 a afectat grav structurile orașului.", "Orașul găzduiește o importantă biserică colonială."]
    },
    {
      "id": "gt-mazatenango-cities-v2",
      "descriptionAdvanced": "Cunoscut ca centrul agricol de pe coasta pacifică, Mazatenango joacă un rol esențial în producția de trestie de zahăr, cauciuc și cacao. Clima caldă și umedă a regiunii l-a transformat într-un motor economic al sud-vestului Guatemalei. Carnavalul anual al orașului, desfășurat înainte de Miercurea Cenușii, este una dintre cele mai mari și mai vibrante sărbători din țară. Economie K7 — agricultura tropicală și festinurile culturale.",
      "factsAdvanced": ["Carnavalul din Mazatenango se desfășoară neîntrerupt de peste un secol.", "Orașul se află la o altitudine relativ joasă de 374 metri.", "Centru feroviar istoric la începutul secolului al XX-lea.", "Producția de zahăr contribuie masiv la exporturile naționale.", "Situat de-a lungul rutei CA-2 care leagă Mexicul de El Salvador.", "A găzduit un important centru ceremonial mayaș pre-hispanic."]
    },
    {
      "id": "gt-retalhuleu-cities-v2",
      "descriptionAdvanced": "Supranumit „Capitala Lumii” de către localnici, Retalhuleu este un nod vibrant pentru turism și agricultură în sudul Guatemalei. Orașul s-a transformat rapid datorită parcurilor de distracții majore din apropiere, precum Xetulul și Xocomil, care atrag vizitatori internaționali. Regiunea combină farmecul piețelor tradiționale cu o infrastructură modernă, susținută de plantații vaste de palmier de ulei și arbori de cauciuc. Economie K6 — tranziția de la agricultură la turism.",
      "factsAdvanced": ["Fondat oficial în jurul anului 1549.", "Cunoscut pentru centrul său istoric cu palmieri uriași în plaza centrală.", "Găzduiește parcul tematic Xetulul, inaugurat în 2002.", "Temperaturile medii anuale sunt în jur de 28°C.", "Biserica San Antonio de Padua datează din perioada colonială târzie.", "Are un aeroport care conectează sudul țării cu capitala."]
    },
    {
      "id": "gt-jalapa-cities-v2",
      "descriptionAdvanced": "Ascuns în văile muntoase din estul Guatemalei, Jalapa este renumit pentru brânzeturile și produsele lactate de excepție. Așezarea are un climat răcoros și este flancată de vulcanul Jumay și munții Alcoba. Zona este locuită tradițional de poporul indigen Xinca, a cărui moștenire este parțial păstrată în tradițiile agrare și meșteșugurile locale. Geografie K7 — agricultura de munte și ecologia indigenă.",
      "factsAdvanced": ["Orașul este situat la o altitudine de 1.362 de metri.", "Vulcanul Jumay din apropiere are o altitudine de 2.176 metri.", "Jalapa a fost recunoscut oficial ca departament în 1873.", "Cunoscut ca 'La Morena Climatológica de Oriente' datorită climei sale.", "Producția de brânză este pilonul economiei locale.", "Festivalul Fecioarei Maria se sărbătorește în decembrie."]
    },
    {
      "id": "gt-chiquimula-cities-v2",
      "descriptionAdvanced": "Cunoscut drept „Perla Orientului”, Chiquimula este un nod comercial fierbinte și uscat situat în sud-estul Guatemalei, aproape de granița cu Honduras. Orașul joacă un rol central în comerțul regional cu vite și produse agricole din zona aridă. Basílica din apropiatul Esquipulas face din această regiune o zonă de tranzit crucială pentru milioane de pelerini. Geografie K6 — coridoarele comerciale și climatul arid.",
      "factsAdvanced": ["Orașul a fost fondat original de spanioli în 1524.", "Este recunoscut ca o regiune cu populație majoritar Ladino.", "Biserica veche a fost distrusă de un cutremur în 1765.", "Temperaturile estivale pot depăși 38 de grade Celsius.", "Este un centru educațional important în estul Guatemalei.", "Producția de fasole și porumb domină peisajul agricol."]
    },
    {
      "id": "gt-salamá-cities-v2",
      "descriptionAdvanced": "Salamá, capitala liniștită a departamentului Baja Verapaz, este înconjurată de munți luxurianți care creează o micro-climă unică în regiune. Orașul are un puternic trecut colonial, dominat de vechea biserică dominicană care găzduiește altare aurite impresionante. Zona înconjurătoare este renumită pentru sanctuarele de orhidee și habitatul protejat al păsării naționale Quetzal. Biologie K8 — protejarea habitatelor și păsărilor tropicale.",
      "factsAdvanced": ["Atestat oficial ca oraș în perioada colonială timpurie, în 1562.", "Biserica San Mateo adăpostește unele dintre cele mai mari altare baroce din America Centrală.", "Situat la o altitudine de 940 de metri deasupra mării.", "În apropiere se află faimosul Biotop del Quetzal.", "Clima favorizează cultivarea trestiei de zahăr și a citricelor.", "Podul colonial de peste râul Salamá este un reper istoric major."]
    },
    {
      "id": "gt-zacapa-cities-v2",
      "descriptionAdvanced": "Situat în inima unei regiuni aride, Zacapa este renumit pe plan internațional pentru producția sa distinsă de rom și tutun. Clima fierbinte și uscată a Văii Motagua favorizează cultivarea pepenilor galbeni, exportați la nivel global. Istoric, orașul a fost o stație crucială a rețelei feroviare care lega capitala de coasta Atlanticului. Economie K7 — agricultura de irigații și industria băuturilor.",
      "factsAdvanced": ["Ron Zacapa Centenario, creat aici în 1976, este recunoscut la nivel mondial.", "Orașul găzduiește Muzeul Căilor Ferate de Est.", "Valea Motagua din apropiere adăpostește specii unice de cactuși.", "Temperaturile pot ajunge frecvent la 40 de grade Celsius.", "Este unul dintre centrele majore de export pentru pepenii galbeni.", "A fost afectat sever de un cutremur masiv în 1976."]
    },
    {
      "id": "gt-jutiapa-cities-v2",
      "descriptionAdvanced": "Jutiapa este adesea numit 'Orașul Soarelui' datorită climatului său torid și peisajului agricol extins. Este o zonă cu o influență indigenă Xinca istorică, deși astăzi cultura predominantă este cea Ladino-Agro. Economia sa se bazează puternic pe creșterea vitelor, comerțul cu cai și producția de lactate, fiind un furnizor cheie de carne pentru piețele din Guatemala și El Salvador. Geografie K6 — zootehnia și economia de frontieră.",
      "factsAdvanced": ["Orașul a fost recunoscut oficial la 8 mai 1852.", "Sărbătoarea Sfântului Cristofor este celebrată anual în iulie.", "Este situat la doar 30 de kilometri de granița cu El Salvador.", "Cunoscut pentru vulcanii din apropiere, precum Suchitán și Ixtepeque.", "Industria meșteșugărească locală produce șei din piele de înaltă calitate.", "Vulcanul Ixtepeque este o sursă rară de rocă vulcanică de obsidian."]
    },
    {
      "id": "gt-santa-lucia-cotzumalguapa-cities-v2",
      "descriptionAdvanced": "Dezvoltat într-o regiune esențială a culturii mayașe Cotzumalhuapa, acest oraș abundă în câmpuri de trestie de zahăr și ferme de cafea antice. Rămășițele arheologice colosale cu capete sculptate sunt împrăștiate printre plantațiile moderne de zahăr. Astăzi, Santa Lucía este forța motrice a industriei agro-industriale din Guatemala, producând cantități enorme de etanol și zahăr rafinat. Istorie K8 — arheologia pre-hispanică și impactul agro-industriei.",
      "factsAdvanced": ["Situl arheologic Bilbao din apropiere datează din anii 400 î.Hr.", "Cunoscută drept capitala trestiei de zahăr a Guatemalei.", "Sculpturile locale unice sunt cunoscute sub numele de 'Cultura Cotzumalhuapa'.", "Găzduiește Muzeul Culturii Cotzumalguapa la ferma El Baúl.", "Orașul susține generarea masivă de biomasă pentru energie electrică.", "Fundația sa spaniolă datează din jurul anului 1570."]
    },
    {
      "id": "gt-puerto-san-jose-cities-v2",
      "descriptionAdvanced": "Puerto San José a fost mult timp portul pacific principal al Guatemalei, facilitând comerțul masiv înainte de construirea modernului Puerto Quetzal. Astăzi, deși traficul comercial major s-a mutat, orașul prosperă ca destinație turistică locală pentru pescuitul sportiv de mare adâncime, în special pentru peștele-velă. Plajele sale cu nisip vulcanic negru atrag mii de vizitatori guatemalezi în timpul sărbătorilor pascale. Economie K7 — evoluția portuară și pescuitul sportiv.",
      "factsAdvanced": ["A fost înființat oficial ca port în 1853.", "Aeroportul din oraș servește drept bază de rezervă pentru zboruri internaționale.", "Plajele locale sunt cunoscute pentru nisipul vulcanic bogat în fier.", "Găzduiește anual turnee internaționale de pescuit de billfish.", "A fost conectat la prima cale ferată funcțională din țară în 1884.", "Canalul Chiquimulilla se intersectează cu orașul, sprijinind mangrovele locale."]
    },
    {
      "id": "gt-flores-cities-v2",
      "descriptionAdvanced": "Flores este un oraș insular remarcabil, situat în mod pașnic pe apele Lacului Petén Itzá. Istoric, a fost cunoscut sub numele de Nojpetén, capitala regatului Itza, și ultimul bastion mayaș care a căzut în mâinile spaniolilor abia în 1697. Astăzi, străzile sale coloniale pitorești servesc ca poartă turistică primară pentru vizitatorii faimoaselor ruine din Parcul Național Tikal. Istorie K8 — ultimele rezistențe indigene și turismul arheologic.",
      "factsAdvanced": ["Orașul insular a fost cucerit oficial de spanioli pe 13 martie 1697.", "Podul care conectează insula de continent a fost finalizat în anii 1970.", "Este conectat la orașele gemene Santa Elena și San Benito.", "Flores poartă numele vice-șefului de stat Cirilo Flores.", "Multe clădiri au acoperișuri distincte roșii vizibile din aer.", "Nivelul apei lacului Petén Itzá fluctuează ciclic de-a lungul deceniilor."]
    },
    {
      "id": "gt-totonicapan-cities-v2",
      "descriptionAdvanced": "Amplasat la înălțimi mari în lanțul vulcanic vestic, Totonicapán este renumit pentru spiritul său comunitar puternic și pentru liderii indigeni K'iche'. Orașul a fost epicentrul rebeliunii indigene din 1820 conduse de Atanasio Tzul împotriva taxelor coloniale. Economia sa artizanală prosperă prin producția de ceramică rafinată și textile elaborate vopsite manual care aprovizionează alte piețe regionale. Istorie K8 — rebeliunile coloniale și antreprenoriatul indigen.",
      "factsAdvanced": ["Revolta lui Atanasio Tzul din 1820 a eliminat scurt timp dominația spaniolă aici.", "Altitudinea de 2.495 metri îl face unul dintre cele mai reci orașe mari.", "Pădurile comunale de pin sunt strict protejate de liderii locali mayași.", "Este un producător major de războaie de țesut tradiționale.", "Sărbătoarea Sfântului Mihail Arhanghelul are loc în septembrie.", "Orașul menține un sistem de guvernare mayașă indigenă numit 'Alcaldía Indígena'."]
    },
    {
      "id": "gt-coatepeque-cities-v2",
      "descriptionAdvanced": "Situat în zona de sud-vest, în apropierea graniței cu Mexicul, Coatepeque este un centru agricol și comercial extrem de activ. Supranumit „Orașul Gardeniilor”, joacă un rol pivotal în exportul de cafea cultivată pe dealurile munților din apropiere și distribuția bunurilor de consum. Așezarea a crescut exponențial în secolul al XX-lea odată cu dezvoltarea fermelor masive cunoscute sub numele de fincas. Economie K7 — economia de frontieră și piețele agricole.",
      "factsAdvanced": ["Coatepeque a fost recunoscut oficial ca oraș în 1951.", "În limba nahuatl, numele înseamnă 'Dealul Șarpelui'.", "Este cel mai mare și mai populat oraș din departamentul Quetzaltenango.", "Clima sa este tropicală, cu precipitații intense între mai și octombrie.", "Orașul găzduiește o expoziție extinsă de comerț estival cunoscută sub numele de 'Feria de Verano'.", "Biserica Santiago Apóstol domină orizontul centrului orașului."]
    },
    {
      "id": "gt-san-pedro-carcha-cities-v2",
      "descriptionAdvanced": "Situat în regiunea mlăștinoasă Alta Verapaz, San Pedro Carchá este un centru agricol masiv și cel mai populat oraș din nordul Guatemalei. Cunoscut pentru producția abundentă de cardamom, regiunea asigură Guatemalei poziția de exportator mondial de top pentru acest condiment prețios. Orașul este populat majoritar de mayași Q'eqchi' și este străbătut de impresionantul râu Cahabón. Economie K8 — condimentele globale și hidrologia regională.",
      "factsAdvanced": ["Carchá a fost recunoscut oficial ca municipalitate în 1882.", "Râul Cahabón din apropiere este faimos pentru sporturile de rafting extrem.", "Este cel mai mare producător de cardamom din întreaga națiune.", "Are o piață masivă subterană, una dintre puținele de acest fel din America Centrală.", "Peste 90% din populație vorbește limba Q'eqchi'.", "Clima regiunii este definită de precipitații constante și ceață de munte."]
    },
    {
      "id": "gt-san-marcos-cities-v2",
      "descriptionAdvanced": "Așezat în platourile vestice înalte, San Marcos este unul dintre cele mai înalte centre departamentale, supus adesea la temperaturi apropiate de zero grade noaptea. De-a lungul istoriei, a avut o rivalitate intensă cu orașul geamăn vecin, San Pedro Sacatepéquez, cu care este practic conectat astăzi. Vulcanul impunător Tajumulco, cel mai înalt vârf din America Centrală, domină orizontul orașului. Geografie K7 — vulcanologia Americii Centrale și așezările montane înalte.",
      "factsAdvanced": ["Orașul se află la o altitudine formidabilă de 2.398 de metri.", "Cutremurul din San Marcos din 2012 a cauzat distrugeri masive în zona centrală.", "Găzduiește Palatul Maya, o capodoperă arhitecturală unică din 1942.", "Este adesea afectat de înghețuri nocturne în timpul lunilor decembrie și ianuarie.", "Sărbătoarea Sfântului Marcu Evanghelistul are loc pe 25 aprilie.", "Orașul este o zonă primară de cultivare a cartofilor și a ovinelor."]
    },
    {
      "id": "gt-barberena-cities-v2",
      "descriptionAdvanced": "Cunoscut istoric sub numele de 'Pinares', Barberena este un motor agricol pe drumul principal către El Salvador. Este recunoscut pe scară largă pentru cultivarea cafelei și abundența pinilor tropicali din zonă. Poziția sa geografică l-a transformat într-un centru cheie de distribuție pentru bunurile care tranzitează granița, stimulând piețe mari în aer liber. Economie K6 — tranzitul mărfurilor și pădurile de conifere tropicale.",
      "factsAdvanced": ["Orașul a fost redenumit Barberena în onoarea doctorului Mariano Barberena în 1879.", "Pădurile locale sunt protejate activ împotriva tăierilor ilegale.", "Sărbătorește o paradă anuală de cai, considerată printre cele mai bune din țară.", "Situat la o altitudine de 1.140 de metri.", "Cafeaua cultivată aici se bucură de soluri vulcanice fertile aduse de vulcanul Tecuamburro.", "Laguna El Pino este o destinație populară din apropiere pentru canotaj."]
    },
    {
      "id": "gt-jacaltenango-cities-v2",
      "descriptionAdvanced": "Aflat pe marginea prăpastiei care domină regiunea Huista din Munții Cuchumatanes, Jacaltenango este o așezare adânc izolată și bogată cultural. Este reședința principală a grupului indigen Jakaltek-Maya, cunoscut și sub numele de Popti'. Accesul istoric dificil a păstrat aici tradiții străvechi, ritualuri unice privind protecția curselor de apă și un calendar mayaș sacru încă utilizat local. Sociologie K7 — izolarea montană și conservarea lingvistică mayașă.",
      "factsAdvanced": ["Cunoscut istoric ca Xajla', care înseamnă 'Locul Marilor Căderi de Apă'.", "Limba indigenă Popti' este recunoscută oficial și protejată legal.", "Altitudinea este de aproximativ 1.436 metri, suspendată deasupra râului Azul.", "Este originar din zona unde se produc tradiționalele palării de frunze de palmier.", "Spitalul local Maryknoll a fost fondat în anii 1960 pentru a sprijini satele izolate.", "Fiesta purificării de Candelaria este sărbătorită cu măști vibrante în februarie."]
    },
    {
      "id": "gt-momostenango-cities-v2",
      "descriptionAdvanced": "Acest orășel muntos, al cărui nume înseamnă 'Orașul Altarelor', este considerat unul dintre cele mai importante centre spirituale din Guatemala. Ghizii spirituali mayași, sau Daykeepers, vin de departe pentru a efectua ritualuri complexe la zecile de altare prehispanice împrăștiate pe dealurile din jur. Dincolo de misterul său antic, orașul susține o industrie uriașă de fabricare a păturilor de lână autentice. Istorie K8 — șamanismul mayaș contemporan și industria textilă de munte.",
      "factsAdvanced": ["Păturile sale din lână vopsită natural (ponchos) sunt exportate masiv.", "Ritualul Wajxaqib' B'atz', sărbătoarea de 260 de zile a calendarului Cholq'ij, este strict respectat.", "A fost reședința scriitorului indigen faimos Humberto Ak'abal.", "Eroziunea uluitoare a creat o formațiune geologică unică numită 'Los Riscos'.", "Biserica colonială a suferit numeroase reconstrucții din cauza cutremurelor.", "A fost centrul unor scurte bătălii pe timpul Războiului Civil din Guatemala."]
    },
    {
      "id": "gt-solola-cities-v2",
      "descriptionAdvanced": "Cocoțat spectaculos la 600 de metri deasupra apelor strălucitoare ale Lacului Atitlán, Sololá servește drept centru guvernamental și comercial al regiunii. Spre deosebire de așezările din vale, bărbații de aici își poartă încă mândri îmbrăcămintea tradițională (traje) compusă din jachete de lână brodată și pantaloni scurți dungați. Piața orașului din zilele de marți și vineri este una dintre cele mai nealterate de influența turistică din țară. Geografie K6 — culturile de pe malul lacurilor tectonice.",
      "factsAdvanced": ["Orașul a fost fondat oficial de forțele spaniole în 1547.", "Are o dublă municipalitate: o primărie indigenă mayașă și una oficială de stat.", "Situat la o altitudine amețitoare de 2.114 de metri.", "Clădirea istorică cu ceas turn din piața principală datează din 1916.", "Numele orașului derivă din cuvântul mayaș Tz’olojyá, însemnând 'apa socului'.", "Conferințele guvernamentale regionale pentru triburile Kaqchikel și Tz'utujil au loc aici."]
    },
    {
      "id": "gt-panajachel-cities-v2",
      "descriptionAdvanced": "Situat pe malul nordic al maiestuosului Lac Atitlán, Panajachel a evoluat dintr-un sat mayaș într-o metropolă turistică vibrantă. În anii 1960 a atras mii de artiști și vizitatori internaționali, câștigându-și porecla 'Gringotenango'. Astăzi, orașul servește drept nod principal de transport cu ambarcațiuni către satele îndepărtate de pe marginea lacului vulcanic, menținând în același timp comerțul plin de culoare cu textile pe faimoasa sa stradă Santander. Economie K7 — turismul boem și transportul lacustru.",
      "factsAdvanced": ["Populația orașului a fost fondată original de supraviețuitorii prehispanici Kaqchikel.", "Vulcanii San Pedro, Tolimán și Atitlán sunt vizibili direct de pe debarcaderul orașului.", "Orașul a fost o scenă masivă a bătăliei spaniole în anul 1524.", "Strada Santander este una dintre cele mai aglomerate artere comerciale pentru vizitatori din Guatemala.", "Altitudinea de la nivelul lacului este constant de aproximativ 1.562 metri.", "Biserica Sfântul Francisc din Assisi conține fațade din secolul al XVI-lea."]
    },
    {
      "id": "gt-chichicastenango-cities-v2",
      "descriptionAdvanced": "Chichicastenango este celebru la nivel mondial pentru piața sa spectaculoasă, care transformă străzile într-o explozie de culori în fiecare joi și duminică. Amplasat în munții Quiché, orașul reprezintă o fuziune profundă între credințele mayașe K'iche' și catolicismul spaniol. Pe treptele bisericii Santo Tomás de 400 de ani, șamanii locali aprind în mod constant tămâie copal pentru strămoși, creând o imagine vizuală de neuitat. Sociologie K8 — sincretismul religios și rutele comerciale indigene.",
      "factsAdvanced": ["Manuscrisul sfânt Popol Vuh a fost descoperit aici în secret în 1702.", "Piața atrage regulat vizitatori și comercianți din toată zona centrală.", "Biserica Santo Tomás a fost construită în 1540 peste un templu mayaș ruinat.", "Primarul indigen participă la consiliul civic în paralel cu statul.", "Frățiile locale (Cofradías) păzesc statui antice ale sfinților îmbrăcați în haine tradiționale.", "Cimitirul orașului, cu mormintele sale vopsite vibrant, se află pe un deal pitoresc."]
    }
  ]
}

with open('/mnt/c/Users/User/plizio_orch/seo_outputs/seo_guatemala_ro_batch1.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

