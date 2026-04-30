
import re
import os

file_path = 'lib/visualLab/data/italyPoi.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

seo_data = {
    "colosseum": {
        "descriptionAdvanced": "Colosseumul din Roma, cunoscut în antichitate sub numele de Amfiteatrul Flavian, este cel mai mare amfiteatru construit vreodată și simbolul suprem al ingineriei și grandorii romane. Inaugurat în anul 80 d.Hr., acesta a fost scena unor spectacole sângeroase, de la lupte de gladiatori la vânătoare de animale sălbatice și chiar bătălii navale simulate. Structura sa eliptică masivă, construită din travertin și beton, putea găzdui peste 50.000 de spectatori, organizați riguros pe niveluri sociale. Sub podeaua arenei se întindea hipogeul, un sistem complex de tuneluri și lifturi mecanice folosite pentru a introduce elemente surpriză în timpul jocurilor. De-a lungul secolelor, monumentul a supraviețuit cutremurelor și a servit drept carieră de piatră, rămânând totuși o mărturie impunătoare a puterii imperiale. Astăzi, Colosseumul este una dintre cele mai vizitate atracții din lume și un sit UNESCO care continuă să fascineze prin istoria sa brutală dar fascinantă. Istorie K5 – Viața socială și divertismentul în Roma Antică.",
        "factsAdvanced": [
            "Construcția a durat doar 8 ani, fiind începută de Vespasian și finalizată de Titus.",
            "Fațada exterioară are o înălțime de 48 de metri, echivalentul unei clădiri cu 12 etaje.",
            "Peste 100.000 de metri cubi de travertin au fost folosiți pentru zidurile exterioare.",
            "Sistemul de 80 de arcade numerotate permitea evacuarea mulțimii în doar câteva minute.",
            "În zilele toride, un acoperiș retractabil din pânză numit velarium oferea umbră spectatorilor.",
            "Colosseumul a fost utilizat pentru spectacole timp de peste 400 de ani.",
            "Imaginea Colosseumului este reprezentată pe moneda italiană de 5 cenți euro.",
            "În 2007, a fost ales drept una dintre cele Șapte Noi Minuni ale Lumii."
        ]
    },
    "pisa-tower": {
        "descriptionAdvanced": "Turnul înclinat din Pisa este probabil cel mai faimos eșec arhitectural transformat într-un succes turistic mondial. Această clopotniță a Catedralei din Pisa a început să se încline încă de la începutul construcției sale în secolul al XII-lea, din cauza solului moale format din nisip și argilă. În ciuda înclinației sale alarmante, turnul a rămas în picioare datorită echilibrului fragil al greutății sale și a eforturilor moderne de stabilizare. Arhitectura sa elegantă, cu etaje decorate cu arcade și coloane din marmură albă, este un exemplu strălucit al stilului romanic pisan. Turnul nu este doar o curiozitate vizuală, ci și un loc de importanță științifică, fiind locul unde se spune că Galileo Galilei a efectuat experimente despre căderea corpurilor. Vizitarea turnului oferă o experiență unică de a urca cele aproape 300 de trepte înclinate, culminând cu o vedere panoramică asupra Pieței Miracolelor. Este un simbol al perseverenței umane și al geniului tehnic care a reușit să salveze un monument aflat pe marginea colapsului. Fizică K7 – Gravitația, centrul de masă și echilibrul structurilor.",
        "factsAdvanced": [
            "Construcția turnului a fost realizată în trei etape pe parcursul a aproape 200 de ani.",
            "Înclinația maximă a fost de 5,5 grade, fiind redusă la aproximativ 4 grade după restaurare.",
            "Turnul are o greutate totală estimată la peste 14.500 de tone.",
            "Există opt niveluri, inclusiv camera clopotelor situată în vârf.",
            "Fiecare dintre cele șapte clopote acordate corespunde unei note din scara muzicală.",
            "Turnul a fost închis publicului timp de 11 ani (1990-2001) pentru lucrări de siguranță.",
            "Eforturile de stabilizare au inclus extragerea de pământ de sub latura de nord.",
            "În interior există 296 de trepte care duc la camera clopotelor."
        ]
    },
    "pompeii": {
        "descriptionAdvanced": "Pompeji este cea mai faimoasă capsulă a timpului din istorie, oferind o fereastră inegalabilă către viața cotidiană a Imperiului Roman din secolul I d.Hr. Orașul a fost îngropat sub un strat gros de cenușă și piatră ponce în urma erupției catastrofale a vulcanului Vezuviu din anul 79 d.Hr. Această tragedie a conservat aproape perfect clădirile, frescele, mozaicurile și chiar graffiti-urile de pe pereți, permițând arheologilor să reconstruiască în detaliu structura socială și economică a orașului. Plimbarea pe străzile sale pavate, printre taverne, băi publice și vile luxoase, oferă senzația de a fi pășit înapoi în timp. Unul dintre cele mai mișcătoare aspecte ale vizitei sunt mulajele de ghips ale victimelor, surprinse în ultimele lor momente de suferință. Pompeji nu este doar un sit arheologic, ci un monument sacru dedicat fragilității umane în fața forțelor naturii. Inclus în Patrimoniul UNESCO, situl continuă să dezvăluie noi secrete prin excavările constante. Istorie K5 – Orașele antice și catastrofele naturale.",
        "factsAdvanced": [
            "Orașul a rămas ascuns sub cenușă timp de peste 1.500 de ani până la redescoperirea sa.",
            "Pompeji avea un amfiteatru care putea găzdui 20.000 de spectatori, unul dintre cele mai vechi.",
            "Peste 11.000 de inscripții și graffiti-uri au fost găsite pe pereții clădirilor.",
            "Vila Misterelor conține unele dintre cele mai frumoase și bine conservate fresce antice.",
            "Locuitorii nu știau că Vezuviul este un vulcan, considerându-l doar un munte înalt.",
            "Sistemul de alimentare cu apă includea fântâni publice și țevi de plumb pentru vile.",
            "Situl arheologic se întinde pe o suprafață de peste 60 de hectare.",
            "Erupția a durat aproximativ 24 de ore, alternând ploi de cenușă cu fluxuri piroclastice."
        ]
    },
    "etna": {
        "descriptionAdvanced": "Muntele Etna, situat în estul Siciliei, este cel mai înalt vulcan activ din Europa și unul dintre cei mai studiați giganți geologici de pe planetă. Activitatea sa continuă, caracterizată prin erupții frecvente de lavă și cenușă, a creat un peisaj lunar fascinant care contrastează puternic cu vegetația luxuriantă de la baza sa. Solul vulcanic extrem de bogat susține o agricultură unică, fiind renumit pentru podgoriile care produc vinuri de clasă mondială și pentru livezile de fistic. Etna este o destinație de aventură pe tot parcursul anului, oferind trasee de drumeții prin peșteri de lavă vara și pârtii de schi cu vedere la mare iarna. Vulcanul joacă un rol central în mitologia antică, fiind considerat forja zeului Vulcan sau locul unde a fost închis gigantul Typhon. Recunoscut de UNESCO ca laborator natural de importanță mondială, Etna rămâne un simbol al forțelor creatoare și distructive ale pământului, definind identitatea și spiritul sicilian. Geografie K8 – Vulcanismul și impactul său asupra mediului.",
        "factsAdvanced": [
            "Altitudinea sa depășește 3.300 de metri, dar se schimbă constant după fiecare erupție.",
            "Vulcanul are patru cratere principale în vârf și sute de cratere laterale.",
            "Etna produce una dintre cele mai fertile cenuși din lume, ideală pentru agricultură.",
            "Cea mai lungă erupție documentată a durat 10 ani, între 1614 și 1624.",
            "Calea ferată Circumetnea înconjoară baza vulcanului pe o distanță de 110 km.",
            "Etna a fost inclus în Patrimoniul Mondial UNESCO în anul 2013.",
            "Vulcanul emite aproape constant vapori de apă și gaze vulcanice.",
            "Valle del Bove este o depresiune uriașă creată de prăbușirea unei părți a vulcanului în antichitate."
        ]
    },
    "vatican": {
        "descriptionAdvanced": "Cetatea Vaticanului, o enclavă situată în inima Romei, este cel mai mic stat independent din lume și centrul spiritual al Bisericii Romano-Catolice. Pe o suprafață de doar 44 de hectare, Vaticanul concentrează o bogăție artistică și culturală copleșitoare, fiind locul unde se află Bazilica Sfântul Petru și Muzeele Vaticane. Bazilica, cu cupola sa impunătoare proiectată de Michelangelo, este cea mai mare biserică creștină din lume, adăpostind numeroase capodopere precum sculptura Pietà. Muzeele Vaticane găzduiesc colecții vaste de artă strânse de papi de-a lungul secolelor, culminând cu Capela Sixtină, faimoasă pentru frescele lui Michelangelo de pe tavan și peretele altarului. Vaticanul este un stat suveran cu propria administrație, postă și gardă de onoare – Garda Elvețiană. Deși mic ca dimensiuni, influența sa globală este imensă, fiind o destinație de pelerinaj și cultură de referință pentru întreaga umanitate. Istorie K8 – Relația dintre religie, stat și artă în Europa.",
        "factsAdvanced": [
            "Vaticanul este singura țară din lume aflată în întregime sub protecția UNESCO.",
            "Garda Elvețiană, care îl protejează pe Papă, a fost fondată în anul 1506.",
            "Vaticanul are propria sa cale ferată, cea mai scurtă din lume (cca. 300 m).",
            "Limba oficială a statului pentru documentele juridice este latina.",
            "Capela Sixtină găzduiește conclavul, procesul secret de alegere a unui nou Papă.",
            "Economia statului se bazează în principal pe vânzarea de timbre și suveniruri.",
            "Grădinile Vaticane ocupă mai mult de jumătate din suprafața micului stat.",
            "Arhiva Apostolică a Vaticanului conține documente istorice ce se întind pe 1.200 de ani."
        ]
    },
    "it-pompei-full": {
        "descriptionAdvanced": "Situl arheologic Pompeji reprezintă cea mai completă imagine a unei metropole romane prospere, oferind detalii fascinante despre urbanismul antic. Spre deosebire de alte situri ruinate, Pompeji păstrează structura intactă a cartierelor, de la zonele comerciale zgomotoase la zonele rezidențiale exclusiviste. Forumul a fost inima vieții politice și religioase, în timp ce Termele Stabiane arată importanța igienei și relaxării în cultura romană. Vizitatorii pot explora brutării cu cuptoare de piatră, „thermopolia” (echivalentul fast-food-ului de azi) și ateliere de prelucrare a lânii. Casele celebre, precum Casa Faunului sau Casa Vetti, impresionează prin mozaicurile complexe și grădinile interioare frumos decorate. Situl nu încetează să uimească cercetătorii, erupția vulcanului Vezuviu reușind să oprească timpul în loc și să transforme un moment de teroare într-o arhivă inestimabilă a civilizației umane. Este un loc de o valoare educativă imensă, fiind esențial pentru studiul istoriei și arheologiei clasice. Istorie K6 – Structura socială și economică a orașelor romane.",
        "factsAdvanced": [
            "Pompeji a fost fondat inițial de către osci în secolul al VI-lea î.Hr.",
            "În momentul erupției, orașul avea o populație estimată între 11.000 și 20.000 de locuitori.",
            "Sistemul de canalizare al orașului era incredibil de avansat pentru acea epocă.",
            "Multe dintre frescele pompeiene utilizează un roșu caracteristic, numit „Roșu de Pompeji”.",
            "Excavațiile moderne folosesc tehnologii laser pentru a scana structurile neexplorate.",
            "Orașul era un centru important pentru producția de 'garum', un sos de pește faimos în antichitate.",
            "Bulevardele principale aveau trotuare ridicate și pietre de trecere pentru a evita noroiul.",
            "Amfiteatrul din Pompeji este cel mai vechi amfiteatru roman construit din piatră."
        ]
    },
    "it-herculaneum": {
        "descriptionAdvanced": "Herculaneum (Ercolano) este „perla ascunsă” a arheologiei campaniene, oferind o perspectivă mai intimă și mai luxoasă asupra vieții romane decât vecina sa mai mare, Pompeji. În timp ce Pompeji a fost acoperit de cenușă, Herculaneum a fost îngropat de un flux piroclastic de noroi fierbinte, care s-a solidificat într-o rocă dură. Acest fenomen a permis conservarea extraordinară a materialelor organice, cum ar fi lemnul carbonizat al mobilei, grinzile acoperișurilor și chiar pergamentele din Papyrus. Orașul era o destinație de vacanță preferată de aristocrația romană, fapt vizibil în arhitectura rafinată a vilelor cu vedere la mare și în calitatea superioară a decorațiunilor. Descoperirea a peste 300 de schelete în magaziile de bărci de pe vechiul țărm a oferit detalii cutremurătoare despre modul în care locuitorii au încercat să fugă din calea dezastrului. Vizitarea Herculaneumului este o experiență emoționantă, fiind unul dintre puținele locuri unde poți vedea etaje superioare ale caselor romane încă intacte. Istorie K5 – Arheologia și conservarea materialelor organice.",
        "factsAdvanced": [
            "Herculaneum a fost lovit de un flux piroclastic mult mai fierbinte decât Pompeji (aprox. 500°C).",
            "Vila Papirusurilor adăpostește singura bibliotecă intactă din antichitate.",
            "Orașul modern Ercolano este construit direct deasupra unei mari părți a sitului antic.",
            "În Herculaneum s-au păstrat rafturi de lemn și paturi carbonizate în interiorul caselor.",
            "Orașul era mult mai mic și mai bogat decât Pompeji, având doar circa 4.000 de locuitori.",
            "Situl a fost descoperit accidental în 1709 în timpul săpării unei fântâni.",
            "Băile centrale din Herculaneum sunt printre cele mai bine conservate băi romane din lume.",
            "Multe morminte de aici imită perfect arhitectura caselor etrusce din lemn și argilă."
        ]
    },
    "it-ostia-antica": {
        "descriptionAdvanced": "Ostia Antica, portul legendar al Romei, reprezintă cel mai bun exemplu de oraș comercial și industrial din lumea romană, fiind inima logistică ce hrănea capitala imperiului. Situat la gura de vărsare a Tibrului, acest oraș cosmopolit era locul unde navele încărcate cu cereale din Egipt și mărfuri exotice din întregul bazin mediteranean își descărcau prețioasele încărcături. Spre deosebire de Pompeji, Ostia oferă o imagine mai realistă a vieții clasei muncitoare și a comercianților, cu blocurile sale mari de locuințe numite 'insulae'. Forumul corporațiilor, cu mozaicurile sale ce descriu diversele bresle comerciale, este o mărturie unică a economiei globalizate din antichitate. Declinul orașului a început odată cu căderea imperiului și retragerea liniei țărmului, ducând la abandonarea sa și la conservarea sub straturi de nisip. O vizită aici permite înțelegerea complexității administrative și inginerești care a susținut funcționarea unei metropole precum Roma timp de secole. Istorie K6 – Comerțul, economia și logistica în Imperiul Roman.",
        "factsAdvanced": [
            "Ostia a fost, conform legendei, prima colonie oficială fondată de Roma în secolul al VII-lea î.Hr.",
            "Situl adăpostește cea mai veche sinagogă cunoscută din Europa.",
            "Teatrul din Ostia, construit de Agrippa, este încă folosit pentru spectacole în prezent.",
            "Termopoliumul din Ostia este un exemplu perfect de „restaurant” antic cu tejghea de marmură.",
            "Orașul a fost abandonat din cauza eliszaposodării (colmatării) portului și a malariei.",
            "Astăzi, situl se află la aproximativ 3 kilometri distanță de mare din cauza sedimentelor.",
            "Piața Corporațiilor conține peste 60 de birouri ale asociațiilor de comercianți și armatori.",
            "În Ostia trăiau oameni din toate colțurile imperiului, fiind un adevărat centru multietnic."
        ]
    },
    "it-siena": {
        "descriptionAdvanced": "Siena este chintesența orașului medieval italian, renumită pentru arhitectura sa de cărămidă roșie și pentru rivalitatea istorică cu Florența. Inima orașului este Piazza del Campo, o piață unică în formă de evantai, considerată una dintre cele mai frumoase din lume, unde are loc celebrul Palio – o cursă de cai plină de pasiune ce datează din secolul al XIII-lea. Domul din Siena, o capodoperă a goticului italian, impresionează prin fațada sa elaborată și prin pavimentul de marmură gravată, o lucrare artistică de o complexitate rară. Orașul este împărțit în „contrade” (cartiere istorice), fiecare cu propriul simbol, steag și identitate culturală puternică. Siena a fost un centru financiar și artistic major în Evul Mediu, fiind locul de naștere al școlii sieneze de pictură, care a influențat cursul artei europene. Atmosfera sa conservată intact oferă senzația unei călătorii autentice în timp, unde tradițiile medievale sunt încă parte integrantă din viața de zi cu zi a locuitorilor. Istorie K6 – Orașul-stat medieval și tradițiile comunitare.",
        "factsAdvanced": [
            "Piazza del Campo este situată la punctul de întâlnire al celor trei coline pe care este construit orașul.",
            "Universitatea din Siena, fondată în 1240, este una dintre cele mai vechi universități din Italia.",
            "Cursa de cai Palio se desfășoară de două ori pe an, pe 2 iulie și 16 august.",
            "Turnul Torre del Mangia are o înălțime de 88 de metri și oferă o vedere spectaculoasă.",
            "Siena a fost unul dintre cele mai importante centre bancare din Europa în secolul al XIII-lea.",
            "Bucătăria sieneză este faimoasă pentru Panforte, un desert dens cu fructe și nuci.",
            "Centrul istoric al orașului a fost inclus în Patrimoniul Mondial UNESCO în 1995.",
            "Legenda spune că Siena a fost fondată de Senius, fiul lui Remus (fratele lui Romulus)."
        ]
    },
    "it-san-gimignano": {
        "descriptionAdvanced": "San Gimignano, supranumit „Manhattanul medieval”, este faimos în întreaga lume pentru profilul său inconfundabil dominat de 14 turnuri medievale din piatră. În perioada de maximă prosperitate, familiile bogate ale orașului s-au întrecut în a construi cele mai înalte turnuri ca simbol al puterii și prestigiului lor, numărul acestora ajungând la 72 în secolul al XIV-lea. Situat strategic pe Via Francigena, principala rută de pelerinaj către Roma, orașul a prosperat din comerțul cu șofran și vin. Piazza della Cisterna, cu pavajul său caracteristic și fântâna antică, este unul dintre cele mai fotografiate locuri din Toscana. Deși ciuma neagră din 1348 a dus la declinul economic al orașului, acest fapt a contribuit paradoxal la conservarea sa arhitecturală aproape perfectă, oferind vizitatorilor de astăzi o imagine fidelă a unei cetăți medievale fortificate. San Gimignano este renumit și pentru vinul său alb Vernaccia, primul vin italian care a primit statutul DOCG. Istorie K6 – Castelele și orașele fortificate ale Toscanei.",
        "factsAdvanced": [
            "Cel mai înalt turn rămas, Torre Grossa, are o înălțime de 54 de metri.",
            "Situl a fost inclus în Patrimoniul Mondial UNESCO în anul 1990.",
            "În Evul Mediu, San Gimignano era un centru major de producție a șofranului de înaltă calitate.",
            "Zidurile de apărare ale orașului datează din secolul al XIII-lea și sunt aproape intacte.",
            "Catedrala (Collegiata) adăpostește fresce spectaculoase ce descriu scene biblice.",
            "Vernaccia di San Gimignano este menționat de Dante Alighieri în Divina Comedie.",
            "Orașul a fost un punct de oprire vital pentru pelerinii care călătoreau pe Via Francigena.",
            "Diferența de înălțime a turnurilor era reglementată prin legi stricte pentru a nu depăși palatul primăriei."
        ]
    },
    "it-assisi": {
        "descriptionAdvanced": "Assisi, situat pe pantele Muntelui Subasio din Umbria, este un oraș de o spiritualitate și frumusețe aparte, fiind locul de naștere al Sfântului Francisc, patronul Italiei. Orașul este dominat de Basilica Sfântul Francisc, o capodoperă a arhitecturii religioase care adăpostește frescele revoluționare ale lui Giotto, considerate punctul de plecare al picturii moderne occidentale. Structura sa verticală, compusă din două biserici suprapuse și o criptă, este un simbol al simplității și misticismului franciscan. Plimbarea prin Assisi, cu străzile sale înguste din piatră roz și casele medievale pline de flori, emană o pace profundă. Deasupra orașului tronează Rocca Maggiore, o fortăreață impunătoare care oferea protecție împotriva atacurilor inamice. Assisi nu este doar o destinație de pelerinaj mondial, ci și un simbol al dialogului interreligios și al respectului pentru natură, fiind recunoscut de UNESCO drept un peisaj cultural de o valoare excepțională. Istorie K7 – Sfântul Francisc și transformarea spirituală a Europei medievale.",
        "factsAdvanced": [
            "Basilica Sfântul Francisc a fost construită imediat după canonizarea sfântului în 1228.",
            "Piatra roz folosită pentru construcția orașului provine din carierele Muntelui Subasio.",
            "Frescele lui Giotto descriu viața Sfântului Francisc în 28 de scene emblematice.",
            "Situl UNESCO include orașul Assisi și principalele monumente franciscane din apropiere.",
            "Templul Minervei din Assisi este o structură romană transformată în biserică creștină.",
            "Orașul găzduiește anual mii de pelerini din întreaga lume, în special de sărbătoarea sfântului.",
            "Basilica a suferit daune grave în cutremurul din 1997, fiind restaurată spectaculos.",
            "Assisi este considerat „capitala păcii” și locul de desfășurare a întâlnirilor interreligioase mondiale."
        ]
    },
    "it-montecassino": {
        "descriptionAdvanced": "Abația Montecassino, situată pe vârful unui munte ce domină orașul Cassino, este una dintre cele mai renumite mănăstiri din lume și leagănul ordinului benedictin. Fondată de Sfântul Benedict în anul 529, abația a fost timp de secole un centru de cultură, lumină și conservare a manuscriselor antice, salvând mari părți din moștenirea literară a antichității prin munca asiduă a călugărilor copisti. Istoria sa este marcată de distrugeri repetate și reconstrucții miraculoase, cea mai tragică fiind bombardamentul aliat din 1944, în timpul celui de-al Doilea Război Mondial, care a redus-o la ruine. Refăcută fidel după război sub deviza „Unde era, așa cum era”, Montecassino rămâne un simbol al rezilienței spiritului uman și al speranței. Interiorul său baroc sclipitor și mormântul Sfântului Benedict reprezintă un punct de pelerinaj fundamental. Vizitarea abației oferă nu doar o experiență spirituală, ci și o panoramă strategică asupra văii Liri, explicând importanța sa militară de-a lungul secolelor. Istorie K8 – Rolul mănăstirilor în conservarea culturii europene.",
        "factsAdvanced": [
            "Regula Sfântului Benedict ('Ora et Labora') a fost scrisă aici în secolul al VI-lea.",
            "Mănăstirea a fost distrusă de patru ori în istorie: de lombarzi, sarazini, cutremur și bombe.",
            "Abația găzduiește o bibliotecă tezaur cu peste 40.000 de manuscrise și cărți rare.",
            "Mormântul Sfântului Benedict și al Sfintei Scolastica a rămas intact sub dărâmăturile din 1944.",
            "Bătălia de la Monte Cassino a fost una dintre cele mai lungi și sângeroase din frontul italian.",
            "Reconstrucția totală de după 1945 a fost finanțată în mare parte de statul italian.",
            "Abația are statutul de abație teritorială, neaparținând niciunei dieceze locale.",
            "Marele bronz al porților mănăstirii datează din secolul al XI-lea și a fost turnat la Constantinopol."
        ]
    },
    "it-orvieto": {
        "descriptionAdvanced": "Orvieto este un oraș spectaculos situat pe vârful unei stânci vulcanice de tuf, dominând peisajul văii Tibrului din Umbria. Bijuteria sa incontestabilă este Domul din Orvieto, o capodoperă a goticului italian renumită pentru fațada sa decorată cu mozaicuri sclipitoare și basoreliefuri detaliate. Interiorul catedralei adăpostește Capela San Brizio, cu frescele vizionare ale lui Luca Signorelli, care l-au influențat pe Michelangelo în pictarea Capelei Sixtine. Sub nivelul orașului se întinde „Orvieto Underground”, un labirint de peste 1.200 de peșteri, tuneluri și puțuri săpate în tuf de-a lungul a 2.500 de ani, de la etrusci până în prezent. Un alt punct de atracție major este Puțul Sfântului Patriciu (Pozzo di San Patrizio), o realizare inginerească ingenioasă a secolului al XVI-lea, cu o scară dublă elicoidală ce permitea accesul separat pentru coborâre și urcare. Orvieto este un amestec perfect de misticism etrusc, splendoare medievală și eleganță renascentistă. Istorie K6 – Ingineria și arhitectura pe rocă vulcanică.",
        "factsAdvanced": [
            "Domul a fost construit pentru a comemora Miracolul de la Bolsena din 1263.",
            "Puțul Sfântului Patriciu are o adâncime de 53 de metri și 248 de trepte.",
            "Stânca de tuf pe care se află orașul este o platformă naturală de apărare.",
            "Orvieto a fost una dintre reședințele preferate ale papilor în perioadele de conflict la Roma.",
            "Vinul Orvieto Classico este unul dintre cele mai faimoase vinuri albe din Italia centrală.",
            "Sistemul subteran a fost folosit istoric pentru depozitare, cariere și adăposturi antiatomice.",
            "Basoreliefurile de pe fațada Domului sunt considerate printre cele mai bune sculpturi gotice.",
            "Orașul a fost un centru etrusc major numit Velzna, unul dintre ultimele cucerite de romani."
        ]
    },
    "it-matera-sassi": {
        "descriptionAdvanced": "Matera, cunoscută sub numele de „Orașul de Piatră”, este unul dintre cele mai vechi locuri locuite continuu din lume, fiind celebră pentru districtele sale Sassi. Aceste locuințe rupestre spectaculoase, săpate direct în roca de calcar a canionului Gravina, reprezintă o mărturie unică a adaptării umane la un mediu arid. De la a fi considerată „rușinea Italiei” în anii 1950 din cauza condițiilor precare de trai, Matera a cunoscut o renaștere extraordinară, fiind astăzi sit UNESCO și fostă Capitală Europeană a Culturii. Sassi cuprind un labirint de străzi pe acoperișuri, biserici rupestre decorate cu fresce bizantine și sisteme ingenioase de colectare a apei. Atmosfera sa arhaică și biblică a servit drept decor pentru numeroase filme celebre, precum „Patimile lui Hristos”. Matera este un loc unde istoria se simte prin toți porii pietrei, oferind o lecție profundă despre reziliență și regenerare urbană. Geografie K7 – Formele de relief carstice și așezările umane rupestre.",
        "factsAdvanced": [
            "Sassi di Matera au fost incluse în Patrimoniul Mondial UNESCO în anul 1993.",
            "Unele peșteri din zonă au fost locuite încă din epoca paleolitică.",
            "În 1952, peste 15.000 de locuitori au fost evacuați forțat din peșteri spre cartiere moderne.",
            "Orașul adăpostește peste 150 de biserici rupestre (chiese rupestri).",
            "Sistemul de colectare a apei, 'Palombaro Lungo', este o cisternă uriașă numită 'Catedrala Apei'.",
            "Matera a fost Capitală Europeană a Culturii în anul 2019.",
            "Multe dintre casele de astăzi sunt transformate în hoteluri de lux și restaurante deosebite.",
            "Peisajul orașului Matera seamănă izbitor cu cel al Ierusalimului antic."
        ]
    },
    "it-pietraperla": {
        "descriptionAdvanced": "Pietrapertosa și Castelmezzano sunt două sate gemene spectaculoase situate în inima Dolomiților Lucani din regiunea Basilicata, fiind considerate printre cele mai frumoase burguri din Italia. Pietrapertosa, situat la cea mai mare altitudine din regiune (1.088 m), este construit direct în stâncile uriașe de gresie, casele sale părând să facă parte din munte. Castelul Sarazin, cocoțat pe cel mai înalt vârf, oferă o vedere uluitoare asupra crestelor zimțate care amintesc de faimoșii Dolomiți din nord. Cele două sate sunt legate prin „Zborul Îngerului” (Volo dell'Angelo), o tiroliană spectaculoasă care permite vizitatorilor să „zboare” la înălțimi amețitoare între vârfurile munților. Această zonă păstrează tradiții arhaice și un stil de viață liniștit, fiind o destinație ideală pentru cei care caută peisaje dramatice și autenticitate departe de marile trasee turistice. Armonia dintre arhitectura din piatră și formele bizare ale reliefului creează un tablou vizual de neuitat. Geografie K7 – Satele de munte și turismul sustenabil.",
        "factsAdvanced": [
            "Pietrapertosa este situat la o altitudine de 1.088 de metri deasupra nivelului mării.",
            "Munții se numesc Dolomiții Lucani datorită formelor lor ascuțite ce seamănă cu munții din Alpi.",
            "Tiroliana 'Zborul Îngerului' atinge viteze de până la 120 km/h la o înălțime de 400 metri.",
            "Cartierul Arabat din Pietrapertosa păstrează amprenta dominanței sarazine din secolul al IX-lea.",
            "Formațiunile stâncoase au nume imaginative precum 'Vulturul' sau 'Gura Leului'.",
            "Traseul 'Șapte Pași' leagă cele două sate printr-o potecă spectaculoasă de drumeție.",
            "Satele fac parte din asociația 'I Borghi più belli d'Italia'.",
            "Castelmezzano este celebru pentru modul în care luminile sale de noapte creează imaginea unei iesle vii."
        ]
    }
}

for poi_id, data in seo_data.items():
    pattern = r'\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?factsAdvanced:\s*\{([\s\S]*?)\}\s*\}'
    match = re.search(pattern, content)
    if match:
        poi_block = match.group(0)
        desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([\s\S]*?)\}', poi_block)
        if desc_adv_match:
            old_desc_inner = desc_adv_match.group(1)
            if 'ro: ""' in old_desc_inner:
                new_desc_inner = old_desc_inner.replace('ro: ""', f'ro: "{data["descriptionAdvanced"]}"')
            else:
                new_desc_inner = old_desc_inner
            new_poi_block = poi_block.replace(old_desc_inner, new_desc_inner)
        else:
            new_poi_block = poi_block

        facts_adv_match = re.search(r'factsAdvanced:\s*\{([\s\S]*?)\}', new_poi_block)
        if facts_adv_match:
            old_facts_inner = facts_adv_match.group(1)
            new_facts_ro = "[\n        " + ",\n        ".join([f'"{f}"' for f in data["factsAdvanced"]]) + "\n      ]"
            if 'ro: []' in old_facts_inner:
                new_facts_inner = old_facts_inner.replace('ro: []', f'ro: {new_facts_ro}')
            else:
                new_facts_inner = old_facts_inner
            new_poi_block = new_poi_block.replace(old_facts_inner, new_facts_inner)
        content = content.replace(poi_block, new_poi_block)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("italyPoi.ts Batch 2 applied.")
