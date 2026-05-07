import re

file_path = "lib/visualLab/data/poiExtraCzechRepublicCities.ts"

ro_data = {
    "city-most-extra": {
        "desc": "Orașul Most, situat în regiunea minieră a Boemiei de Nord, este un exemplu remarcabil de reziliență și inginerie urbană. Peisajul său a fost definit de exploatarea masivă a cărbunelui brun, care a dus la o transformare radicală a zonei în secolul al XX-lea. Din necesitatea de a extinde carierele, vechiul centru a fost demolat, iar un oraș nou a fost construit în apropiere. Totuși, autoritățile au reușit să salveze Biserica Adormirea Maicii Domnului, un miracol tehnologic apreciat la nivel global. Astăzi, vechile exploatări au fost inundate pentru a forma zone de agrement spectaculoase. Geografie K7 — turism industrial.",
        "facts": [
            "Biserica gotică a fost mutată pe șine pe o distanță de 841 de metri în anul 1975.",
            "Lacul Most a fost format prin inundarea controlată a fostei cariere de suprafață.",
            "Castelul Hněvín a fost reconstruit în secolul al XIX-lea și este un simbol al orașului.",
            "În zonă există un celebru autodrom, atrăgând pasionați de motorsport din toată Europa."
        ]
    },
    "city-opava-extra": {
        "desc": "Opava este una dintre perlele istorice ale Sileziei Cehe, servind în trecut drept capitală a acestei regiuni. Orașul impresionează prin piețele sale elegante, bulevardele ample și clădirile somptuoase din secolele trecute. O influență culturală profundă poate fi simțită datorită apropierii de granița cu Polonia și a schimbului constant de idei din Europa Centrală. Pasionații de artă și istorie pot explora vechile muzee, bisericile monumentale și galeriile care spun povestea nobilimii sileziene. În prezent, este și un centru educațional important, plin de tineret și energie. Istorie K8 — moștenire regională.",
        "facts": [
            "Muzeul Silezian din Opava, fondat în 1814, este cel mai vechi muzeu de pe teritoriul Republicii Cehe.",
            "În 1820, aici a avut loc celebrul Congres de la Troppau, care a reunit marii monarhi europeni.",
            "Biserica Adormirea Maicii Domnului este un exemplu magnific al stilului gotic din cărămidă.",
            "Dezvoltarea industriei textile în secolul al XIX-lea a adus o perioadă de prosperitate fără precedent orașului."
        ]
    },
    "city-karvina-extra": {
        "desc": "Karviná se distinge ca un important pol al industriei miniere din zona Moravia-Silezia, dar ascunde și o moștenire aristocratică surprinzătoare. Orașul a cunoscut o expansiune rapidă datorită descoperirii rezervelor de huilă, atrăgând o forță de muncă diversă din întreaga monarhie austro-ungară. În contrast cu zonele industriale, centrul vechi din jurul castelului Fryštát oferă o oază de eleganță clasică. În plus, Karviná este o destinație balneară recunoscută, grație apelor sale bogate în iod și brom. Parcurile extinse, modernizate în ultimii ani, contribuie la o calitate a vieții ridicată. Științe Naturale K6 — ecosisteme urbane.",
        "facts": [
            "Castelul Fryštát a aparținut familiei nobiliare Larisch-Mönnich și este o capodoperă a stilului Empire.",
            "Stațiunea balneară Darkov din oraș este faimoasă pentru tratamentele bolilor aparatului locomotor.",
            "Biserica Înălțării Sfintei Cruci impresionează printr-un tablou atribuit unor maeștri renascentiști flamanzi.",
            "Karviná are o populație cu o puternică minoritate poloneză, reflectată în dialectul local și în tradiții."
        ]
    },
    "city-teplice-extra": {
        "desc": "Cunoscută în secolul al XIX-lea ca „Micul Paris”, Teplice este una dintre cele mai vechi stațiuni balneare din Europa Centrală. Arhitectura orașului este puternic influențată de eleganța clasică, cu parcuri spațioase, fântâni arteziene și pavilioane unde marii monarhi obișnuiau să se relaxeze. Apele termale din zonă erau cunoscute încă din antichitate, iar de-a lungul timpului au atras personalități precum Beethoven sau Goethe. Orașul a suferit modificări după război, însă centrul istoric își păstrează neștirbit farmecul romantic. Teplice rămâne o poartă de acces către Munții Metaliferi. Geografie K7 — turism balnear.",
        "facts": [
            "Izvoarele vindecătoare din Teplice au fost descoperite conform legendei în anul 762 de către ciobani.",
            "În 1812, Goethe și Beethoven s-au întâlnit aici pentru prima și singura dată, moment istoric remarcabil.",
            "Grădina Botanică din Teplice găzduiește plante exotice și o expoziție impresionantă de orhidee.",
            "Observatorul astronomic de pe dealul Písečný oferă turiștilor șansa de a studia cerul nopții."
        ]
    },
    "city-chomutov-extra": {
        "desc": "Chomutov reprezintă o îmbinare interesantă între istoria medievală a Cavalerilor Teutoni și moștenirea epocii industriale din nord-vestul Boemiei. Centrul orașului este organizat în jurul unei piețe mărginite de arcade fermecătoare, dominată de turnuri și biserici impunătoare. În a doua jumătate a secolului XX, extracția de cărbune a lăsat o amprentă puternică asupra împrejurimilor. Astăzi, Chomutov a parcurs un lung proces de ecologizare, transformând zonele miniere în arii de recreere și parcuri naturale. Lacul Kamencové este doar una dintre minunile naturale ale orașului. Istorie K7 — transformări economice.",
        "facts": [
            "Lacul Kamencové (Lacul de alaun) din Chomutov este singurul lac de acest tip rămas în lume.",
            "Zoopark Chomutov este cel mai mare parc zoologic din Republica Cehă ca suprafață.",
            "Biserica Sfânta Ecaterina este unul dintre cele mai valoroase monumente gotice timpurii din regiune.",
            "Orașul a fost un important centru al mineritului și al siderurgiei pe durata întregului secol XX."
        ]
    },
    "city-prerov-extra": {
        "desc": "Așezat pe râul Bečva, Přerov este un oraș cu o bogată rezonanță istorică și o poziție strategică de invidiat în câmpia roditoare Haná. Trecutul orașului este intrinsec legat de figura marelui pedagog Jan Amos Comenius, care a studiat și predat aici în secolul al XVII-lea. Descoperirile arheologice din zona Předmostí demonstrează că aici au existat așezări importante încă din era paleolitică a vânătorilor de mamuți. În epoca modernă, Přerov a devenit un nod feroviar esențial și un centru industrial în plină expansiune. Promenada de pe malul râului și centrul vechi cu străduțe întortocheate oferă o atmosferă liniștitoare. Istorie K8 — umanism european.",
        "facts": [
            "Situl arheologic de la Předmostí este faimos la nivel mondial pentru vestigiile vânătorilor de mamuți.",
            "Castelul din Přerov găzduiește Muzeul Comenius, dedicat vieții și operei celebrului educator ceh.",
            "Orașul găzduiește anual Festivalul Internațional de Jazz Přerov, un eveniment cu tradiție îndelungată.",
            "Rezervația ornitologică de pe lacurile din apropiere atrage pasionații de natură și biodiversitate."
        ]
    },
    "city-prostejov-extra": {
        "desc": "Prostějov este adesea denumit „Manchesterul Moraviei”, amintind de epoca de aur în care industria sa textilă domina piețele europene. Arhitectura orașului reflectă prosperitatea din preajma anului 1900, cu clădiri rafinate în stil Art Nouveau și fațade frumos decorate. Printre cele mai notabile realizări arhitecturale se numără Casa Națională, o bijuterie a designului ceh de la începutul secolului XX. Orașul este de asemenea un focar sportiv, având tradiții remarcabile în tenis și volei. Centrul istoric este compact, atrăgând turiști prin cafenelele cochete și bisericile pline de liniște. Geografie K6 — dezvoltare urbană.",
        "facts": [
            "Edmund Husserl, faimosul filosof și fondator al fenomenologiei, s-a născut la Prostějov în anul 1859.",
            "Casa Națională (Národní dům) a fost proiectată de arhitectul vizionar Jan Kotěra în stil Secession.",
            "Tradiția modei s-a menținut prin mărci renumite de confecții care și-au avut originile aici.",
            "Biserica Înălțării Sfintei Cruci găzduiește fresce de o valoare inestimabilă, vechi de secole."
        ]
    },
    "city-jablonec-nad-nisou-extra": {
        "desc": "Situat într-o vale spectaculoasă la poalele Munților Jizera, Jablonec nad Nisou este sinonim pe plan global cu arta fabricării sticlei și a bijuteriilor (bijuteria). De la sfârșitul secolului al XIX-lea, artizanii locali au început să exporte faimoasele mărgele și ornamente din sticlă în întreaga lume, aducând o prosperitate vizibilă prin arhitectura grandioasă a orașului. Astăzi, străzile sunt un veritabil muzeu în aer liber al stilului Art Nouveau și Funcționalist. Pentru iubitorii de natură, barajul pitoresc Mšeno oferă spații ideale pentru relaxare, înot și sporturi de iarnă în apropiere. Economie K8 — meșteșuguri și comerț.",
        "facts": [
            "Muzeul Sticlei și Bijuteriilor expune colecții vaste de nasturi, mărgele și monede istorice din sticlă.",
            "Barajul Mšeno, situat aproape în centrul orașului, a fost construit la începutul secolului XX.",
            "Noua Primărie este o clădire funcționalistă masivă, ridicată în anii 1930, dominând peisajul urban.",
            "Multe buticuri locale încă păstrează tehnicile manuale vechi de suflare și prelucrare a sticlei."
        ]
    },
    "city-mlada-boleslav-extra": {
        "desc": "Mladá Boleslav este inima pulsândă a industriei auto din Republica Cehă, fiind sediul istoric și actual al faimoasei mărci Škoda. Orașul nu este însă doar un uriaș complex industrial, ci are o poveste bogată, datând din secolul al X-lea, când a fost fondat ca o cetate princiară. Centrul vechi este încoronat de un castel impunător, cu străduțe istorice care coboară spre râul Jizera. Datorită industriei auto, nivelul de trai este printre cele mai ridicate din regiune, iar investițiile în spații verzi și infrastructură sunt constante. Expozițiile auto locale sunt adevărate călătorii în timp. Tehnologie K7 — istoria automobilului.",
        "facts": [
            "Muzeul Škoda expune prototipuri, mașini de epocă și motociclete care ilustrează peste 120 de ani de design.",
            "Castelul din Mladá Boleslav, originar din Evul Mediu, adăpostește în prezent Muzeul Regional.",
            "Palatul Templ a fost un important loc de întâlnire pentru Frăția Boemă în secolul al XVI-lea.",
            "Producția auto a început aici în anul 1905 sub numele Laurin & Klement, fiind ulterior preluată de Škoda."
        ]
    },
    "city-havirov-extra": {
        "desc": "Havířov poartă mândria de a fi cel mai tânăr oraș din Republica Cehă, fiind fondat în 1955 ca soluție la nevoia de locuințe pentru minerii din regiunea Ostrava-Karviná. Orașul este o vitrină vie a arhitecturii realismului socialist (cunoscut sub acronimul SORELA), cu bulevarde largi, simetrice și fațade monumentale decorate cu basoreliefuri proletare. Datorită planificării urbane stricte, este și unul dintre cele mai înverzite orașe industriale, bucurându-se de parcuri largi și o dezvoltare urbană liniștită. Chiar dacă mineritul și-a pierdut din importanță, comunitatea s-a adaptat rapid la noi realități economice. Sociologie K6 — urbanism modern.",
        "facts": [
            "Havířov este singurul oraș din Cehia care a fost înființat exclusiv prin decret guvernamental după război.",
            "O mare parte din centrul orașului este protejată drept arie de patrimoniu a arhitecturii SORELA.",
            "Parcul Forestier Stromovka este locul preferat al localnicilor pentru sport, relaxare și festivaluri.",
            "Numele orașului, „Havířov”, a fost ales printr-un concurs public și se traduce literar prin „Orașul minerilor”."
        ]
    },
    "city-kladno-extra": {
        "desc": "Considerat odată „inima neagră” a Boemiei datorită furnalelor sale uriașe și a minelor de huilă, Kladno are astăzi o cu totul altă înfățișare. Orașul și-a reconvertit zonele industriale masive, punând accent pe servicii, inovație și un ecosistem urban modern. Aflat în imediata vecinătate a capitalei Praga, Kladno oferă o alternativă rezidențială liniștită, plină de spații verzi și de tradiții sportive. Este renumit la nivel național pentru pasiunea debordantă pentru hochei pe gheață, o moștenire a generațiilor de muncitori care au creat cluburi legendare. Castelele din satele învecinate amintesc că zona a fost cândva un teren de vânătoare nobil. Geografie K7 — reconversie industrială.",
        "facts": [
            "Legendara echipă de hochei din Kladno l-a propulsat pe faimosul Jaromír Jágr pe plan internațional.",
            "Castelul din Kladno găzduiește grădini superbe în care a trăit un timp familia regală benedictină.",
            "Turnurile fostei oțelării Vojtěch, conservate cu grijă, sunt mărturii ale epocii industriale grele.",
            "Kladno a fost un centru important al mișcărilor sindicale și muncitorești în timpul monarhiei austriece."
        ]
    },
    "city-havlickuv-brod-extra": {
        "desc": "Havlíčkův Brod este un punct de referință important pe traseul râului Sázava, remarcându-se prin pitorescul său și rolul istoric ca piață de comerț. Inițial, orașul s-a numit Německý Brod, dar a fost redenumit în onoarea poetului și patriotului rebel Karel Havlíček Borovský, o figură proeminentă a Renașterii Naționale Cehe. Piețele centrale sunt înconjurate de case vechi cu portaluri elegante, care au supraviețuit asediilor și războaielor de-a lungul veacurilor. De la literatură la prelucrarea sticlei și a cartofilor pentru renumitele preparate din regiunea Vysočina, orașul este o esență a spiritului morav. Literatura K8 — renașterea națională.",
        "facts": [
            "În Casa Štáfl, turiștii pot descoperi una dintre cele mai vechi prese de tipar păstrate în Republica Cehă.",
            "Karel Havlíček Borovský, simbol al libertății de exprimare, este comemorat printr-un mare monument în piață.",
            "Biserica Adormirii Maicii Domnului posedă un turn masiv care oferea protecție locuitorilor în Evul Mediu.",
            "Râul Sázava care străbate orașul este deosebit de popular printre pasionații de rafting și canoe."
        ]
    },
    "city-pisek-extra": {
        "desc": "Așezat pe malurile aurifere ale râului Otava, Písek este un oraș sud-boem de un șarm inconfundabil, cu străzi medievale și povești de epocă. Râul a fost sursa bogăției timpurii a zonei, datorită nisipului din care se extrăgea aur, de unde derivă și numele orașului (Písek înseamnă nisip). Inima așezării este marcată de un pod de piatră impunător, decorat cu statui baroce, care rivalizează în frumusețe și vechime cu Podul Carol din Praga. Atmosfera liniștită este susținută de colegii și școli prestigioase, orașul fiind recunoscut ca o veche vatră academică. Malurile râului Otava oferă azi promenade idilice pentru bicicliști și pietoni. Geografie K6 — resurse hidrologice.",
        "facts": [
            "Podul de Piatră din Písek a fost construit în secolul al XIII-lea, fiind cel mai vechi pod păstrat în Cehia.",
            "Orașul a fost primul din Boemia care a beneficiat de iluminat public electric, datorită inventatorului Křižík.",
            "Castelul din Písek găzduiește astăzi Muzeul Prácheň, renumit pentru colecțiile de istorie locală și aurărit.",
            "Aici s-au înființat unele dintre cele mai importante asociații forestiere și agricole din Europa Centrală."
        ]
    },
    "city-kolin-extra": {
        "desc": "Pe malurile largi ale fluviului Elba, orașul Kolín se ridică maiestuos, purtând amprenta secolelor în care a fost un centru regal comercial. Silueta sa este inconfundabilă datorită catedralei gotice falnice, proiectată parțial de genialul arhitect Peter Parler. Orașul combină un nucleu evreiesc foarte bine conservat, mărturie a unei comunități odinioară prospere, cu piețe patriciene decorate în nuanțe pastelate. O scurtă vizită oferă un peisaj industrial amestecat cu monumente medievale, căci Kolín este și un important centru pentru industria auto și chimică. Promenada Elbei este perfectă pentru a admira navele fluviale trecând liniștit. Istorie K7 — comerțul pe fluvii.",
        "facts": [
            "Biserica Sfântul Bartolomeu, prin corul său gotic înalt, este una dintre cele mai importante creații de acest fel.",
            "Cartierul evreiesc din Kolín deține o sinagogă valoroasă din secolul al XVII-lea și un cimitir vechi vast.",
            "Orașul este renumit în întreaga lume ca fiind leagănul muzicii tradiționale cehe de fanfară, stilul Kmoch.",
            "În 1757 a avut loc aici Bătălia de la Kolín, un eveniment esențial din Războiul de Șapte Ani."
        ]
    },
    "city-sumperk-extra": {
        "desc": "Știut sub numele de „Poarta Munților Jeseníky”, Šumperk este o așezare cu o istorie fascinantă și o arhitectură influențată de mica nobilime textilă. În secolul al XIX-lea, datorită bogăției generate de prelucrarea inului și a mătăsii, orașul și-a câștigat apelativul de „Mica Vienă”. Dincolo de clădirile elegante, istoria locală are și o pagină întunecată: faimoasele procese ale vrăjitoarelor din secolul al XVII-lea, evenimente care și-au pus amprenta profund asupra folclorului. Vizitatorii folosesc astăzi orașul drept tabără de bază pentru a explora vârfurile spectaculoase din regiune. Geografie K6 — regiuni montane.",
        "facts": [
            "Vila Geschner din centrul orașului adăpostește Expoziția Proceselor Vrăjitoarelor, documentând tragicele evenimente.",
            "Primăria orașului Šumperk, de la ferestrele căreia se pot admira munții, este o superbă clădire renascentistă.",
            "Orașul a devenit extrem de prosper datorită familiilor de industriași din Austria, care i-au definit aspectul.",
            "Mănăstirea Dominicană de aici reprezintă unul dintre cele mai importante așezăminte spirituale din zonă."
        ]
    },
    "city-vsetin-extra": {
        "desc": "Ascuns între dealurile împădurite ale Beskizilor și cele ale Hostýnului, Vsetín este centrul cultural și inima neoficială a Valahiei Morave. Este locul ideal pentru a descoperi folclorul autentic, cu dansuri energice, porturi populare viu colorate și arhitectură vernaculară din lemn. Deși pe parcursul secolului XX s-a industrializat, fiind un focar al producției de componente electrice, orașul și-a păstrat sufletul tradițional intact. Dealurile înconjurătoare oferă peisaje mirifice și zeci de kilometri de trasee pentru ciclism și schi fond, făcând din Vsetín un rai pentru iubitorii de natură. Sociologie K5 — tradiții populare.",
        "facts": [
            "Castelul renascentist situat pe un deal mic din Vsetín găzduiește un muzeu dedicat culturii vlahe.",
            "Râul Bečva împarte orașul în două, oferind promenade frumoase și parcuri verzi pe malurile sale.",
            "Din Vsetín pornesc numeroase trasee tematice spre satele izolate cu case de lemn specifice Munților Beskizi.",
            "Festivalurile folclorice anuale adună ansambluri muzicale care păstrează vii ritmurile străvechi."
        ]
    },
    "castle-cesky-krumlov-extra": {
        "desc": "Dominând orizontul orașului cu același nume, Castelul Český Krumlov este o minune a Renașterii și Barocului, reflectând opulența foștilor săi stăpâni, în special din familiile Rosenberg și Schwarzenberg. Este un labirint fascinant de curți interioare interconectate, grădini vaste și structuri fortificate cocoțate pe o stâncă abruptă deasupra râului Vltava. Bogăția decorațiunilor interioare, a tapiseriilor și a operelor de artă demonstrează importanța strategică și culturală a domeniului de-a lungul secolelor. Turiștii sunt hipnotizați de panorama excepțională asupra acoperișurilor de țiglă din orașul vechi. Istorie K8 — castele regale.",
        "facts": [
            "Complexul castelului cuprinde peste 40 de palate și clădiri, fiind unul dintre cele mai mari din Europa Centrală.",
            "Teatrul Baroc din interiorul castelului păstrează scenografia și mașinăriile originale de acum peste 250 de ani.",
            "Pasionații de artă pot admira Sala Măștilor (Maškarní sál), complet acoperită cu fresce iluzioniste spectaculoase.",
            "O veche tradiție locală, încă menținută, este creșterea urșilor bruni în șanțul castelului."
        ]
    },
    "castle-hluboka-extra": {
        "desc": "Inspirat direct de romantismul arhitecturii englezești, Castelul Hluboká este adesea descris ca o „bucată din Windsor în inima Boemiei de Sud”. Transformarea sa la mijlocul secolului al XIX-lea, dintr-o fortăreață medievală într-o reședință palatină grandioasă, s-a făcut la inițiativa familiei Schwarzenberg. Fațadele imaculate, turnulețele dantelate și interioarele decorate cu un fast incredibil creează o atmosferă de basm. Spațiile interioare prezintă lambriuri din lemn prețios, colecții armuri rare și o bibliotecă uluitoare. Grădinile englezești perfect îngrijite din jurul castelului invită la plimbări prelungite. Artă K7 — arhitectura neogotică.",
        "facts": [
            "Renovarea castelului a urmat stilul romantic neogotic (Tudor) și a durat aproape o jumătate de secol.",
            "Domeniul castelului include o seră uriașă cu plante exotice și o vastă galerie de artă sud-boemă.",
            "Camerele de reprezentare sunt faimoase pentru detaliile sculpturilor în lemn, executate de maeștri artizani cehi.",
            "Castelul este una dintre cele mai căutate locații din Cehia pentru nunți de lux și filmări cinematografice."
        ]
    },
    "historical-terezin-extra": {
        "desc": "Terezín este un monument viu al istoriei, combinând măreția arhitecturii militare a secolului al XVIII-lea cu memoria dureroasă a Holocaustului. Inițial construită ca o fortăreață stelară impunătoare din ordinul împăratului Iosif al II-lea, așezarea a fost transformată de naziști într-un ghetou și un lagăr de tranzit. Muzeul Ghetoului și Mica Fortăreață documentează cu rigoare experiențele zguduitoare ale mii de oameni, punând în lumină spiritul de rezistență culturală neînfrânt al prizonierilor, care au continuat să creeze artă și muzică. Terezín este un simbol al memoriei europene colective, chemând la reflecție profundă. Educație Civică K8 — drepturile omului.",
        "facts": [
            "Zidurile masive de cărămidă ale fortăreței au fost concepute pentru a opri înaintarea trupelor prusace.",
            "Peste 15.000 de copii au fost închiși aici, lăsând în urmă o impresionantă și sfâșietoare colecție de desene.",
            "Lagărul a fost vizitat de Crucea Roșie în 1944, fiind orchestrată o falsă „normalitate” de către regimul nazist.",
            "În pofida suferinței, în interiorul ghetoului au fost compuse și interpretate zeci de opere muzicale și teatrale."
        ]
    },
    "castle-lednice-extra": {
        "desc": "Ca o bijuterie absolută a Peisajului Cultural Lednice-Valtice, Castelul Lednice impresionează prin grandoarea sa aristocratică și rafinamentul stilistic. Funcționând ca reședință de vară pentru puternica dinastie Liechtenstein, clădirea a fost modelată într-un stil neogotic romantic, care captivează privirea. Interiorul său este la fel de impresionant, cu scări spectaculoase sculptate într-o singură bucată de lemn și tavan casetat meticulos decorat. Însă splendoarea continuă la exterior, unde domeniul se deschide într-un parc imens plin de lacuri, iazuri și structuri fanteziste. Această operă de artă totală este o destinație esențială pe harta turismului european. Geografie K7 — peisaje antropice.",
        "facts": [
            "Sera castelului, construită din sticlă și fier forjat în 1845, adăpostește vegetație tropicală rară.",
            "Minaretul din parc, cu o înălțime de 60 de metri, este cea mai înaltă structură de acest tip în afara lumii islamice.",
            "Parcul de aici face parte din cel mai mare peisaj compus artificial din lume, înregistrat la UNESCO.",
            "În interiorul palatului pot fi admirate picturi baroce, porțelanuri asiatice și mobilier renascentist."
        ]
    },
    "monastery-vyssibrod-extra": {
        "desc": "Mănăstirea Vyšší Brod este inima spirituală a Boemiei de Sud, ascunsă într-o vale spectaculoasă la baza Munților Šumava. Fondată de abații cistercieni, arhitectura complexului este un elogiu adus stilului gotic și tăcerii monahale. Pe lângă biserica impunătoare cu voltele ei zvelte, biblioteca mănăstirii este o capodoperă a designului rococo, adăpostind manuscrise de o valoare excepțională. Viața contemplativă este încă o prezență constantă, călugării ocupându-se de viticultură și silvicultură. Atracția spirituală și frumusețea peisajului din jur oferă fiecărui vizitator o experiență cathartică. Istorie K8 — instituții medievale.",
        "facts": [
            "Mănăstirea păstrează faimoasa Cruce a lui Záviš, o relicvă de o frumusețe aurită inestimabilă.",
            "Colecția bibliotecii rococo a mănăstirii găzduiește peste 70.000 de volume, inclusiv incunabule valoroase.",
            "Complexul include și Muzeul Poștal, o expoziție inedită care atrage curioși din toată lumea.",
            "A fost înființată în anul 1259 de către familia Vítkovci, strămoșii marilor domnitori Rosenberg."
        ]
    },
    "castle-konopiste-extra": {
        "desc": "Castelul Konopiště a fost martorul unor decizii și secrete care au marcat finalul unei întregi epoci imperiale. Ca reședință preferată a Arhiducelui Franz Ferdinand, moștenitorul tronului habsburgic, clădirea a fost dotată cu tehnologie de vârf pentru acel timp, inclusiv lifturi, electricitate și sisteme inovatoare de încălzire. Camerele sale somptuoase ascund o colecție fenomenală de trofee de vânătoare și arme antice, reflectând pasiunea arhiducelui. Grădina de trandafiri și păunul care patrulează prin șanțurile cetății adaugă un strat de romantism unui loc marcat profund de istorie. Aici s-au dus negocieri politice cruciale înaintea Primului Război Mondial. Istorie K8 — declinul imperiilor.",
        "facts": [
            "Franz Ferdinand a modernizat complet castelul, instalând primul ascensor electric din regiunea Boemiei.",
            "Coridoarele castelului adăpostesc mii de trofee de vânătoare adunate de arhiduce din călătoriile sale mondiale.",
            "Armurăria de la Konopiště, denumită Armeria d'Este, este una dintre cele mai vaste colecții private de arme vechi din Europa.",
            "O uriașă grădină de trandafiri (Rozárium) a fost creată pe terenul castelului cu specii rare aduse din toată lumea."
        ]
    },
    "castle-pernstejn-extra": {
        "desc": "O capodoperă a ingineriei medievale defensive, Castelul Pernštejn pare desprins din filele celor mai frumoase povești gotice. Construcția sa uluitoare, amplasată pe o stâncă stâncoasă din regiunea Moravia, i-a oferit reputația de a fi inexpugnabil; de altfel, nu a fost niciodată cucerit prin forță. Cu o arhitectură complexă, cu balcoane din lemn, metereze proeminente și ziduri de o grosime uimitoare, castelul arată practic neschimbat de cinci secole. Interiorul său este un labirint de încăperi întunecate și săli armate, fiecare plină de legende și povești cu fantome locale. Reprezintă esența fortificațiilor epocii cavalerilor. Artă K7 — arhitectura gotică.",
        "facts": [
            "Castelul aparținea familiei nobiliare Pernštejn, recunoscută după blazonul cu un cap de zimbru cu un inel în nas.",
            "Aspectul exterior al cetății, cu marmură albă și ferestre elegante, i-a atras numele de „Castelul de Marmură”.",
            "Datorită stării sale perfecte de conservare, a fost decorul a nenumărate filme istorice și basme cinematografice.",
            "Turnul principal a fost proiectat cu un sistem de scări ascunse, conceput special pentru apărătorii cetății."
        ]
    },
    "castle-bouzov-extra": {
        "desc": "Silueta romantică a Castelului Bouzov domină peisajul împădurit din Moravia, atrăgând anual mii de turiști și echipe de filmare. Aspectul său actual de basm, cu acoperișuri conice roșii, poduri mobile și turnuri înalte de observație, se datorează restaurării masive de la cumpăna secolelor XIX și XX. Proiectat pentru Ordinul Cavalerilor Teutoni, castelul respectă cu strictețe elementele autentice ale unei fortărețe medievale germane. Interioarele abundă în scări de stejar fin sculptate, tavane pictate bogat și săli de consiliu ce inspiră respect și autoritate. Pentru familiile cu copii, o vizită aici este o adevărată călătorie în timp. Geografie K6 — patrimoniu arhitectural.",
        "facts": [
            "Restaurarea spectaculoasă a castelului a fost finanțată exclusiv din trezoreria Marelui Maestru al Ordinului Teutonic.",
            "Podul său mobil, complet funcțional și astăzi, este demonstrat publicului cu ocazia unor sărbători speciale.",
            "Castelul Bouzov a apărut într-o multitudine de filme europene, devenind simbolul vizual al cetăților fantastice.",
            "Sălile de judecată interioare dispun de sisteme acustice speciale și jilțuri masive din perioada gotică târzie."
        ]
    },
    "castle-krivoklat-extra": {
        "desc": "În inima unora dintre cele mai dense și sălbatice păduri ale Cehiei se află Castelul Křivoklát, un loc de refugiu și vânătoare pentru monarhii din dinastia Přemyslid. Aspectul său monumental este subliniat de zidurile de piatră cenușie, capela regală magnifică și impresionanta Sală Regală gotică. Pe lângă rolul său de palat de relaxare, Křivoklát a servit de-a lungul istoriei ca una dintre cele mai temute închisori de stat din Boemia. Colecția sa imensă de cărți și manuscrise atrage savanți, în timp ce peisajele idilice oferă vizitatorilor o liniște desăvârșită. O plimbare pe meterezele castelului relevă o panoramă uimitoare asupra văii adânci. Istorie K7 — dinastiile medievale.",
        "facts": [
            "Biblioteca de la Křivoklát conține o colecție remarcabilă de peste 52.000 de tratate rare, vechi de secole.",
            "Capela regală impresionează printr-un altar sculptat din lemn, care este o capodoperă a artei gotice târzii.",
            "Împăratul Carol al IV-lea și-a petrecut o parte din copilăria sa aici, castelul fiindu-i foarte drag.",
            "Sălile de tortură și celulele din temniță sunt expuse publicului pentru a ilustra duritatea sistemului penal medieval."
        ]
    },
    "monastery-kladruby-extra": {
        "desc": "Mănăstirea Kladruby se află într-o clasă proprie în materie de arhitectură, reprezentând apogeul genialității lui Jan Blažej Santini-Aichel. Biserica mănăstirii este o explozie vizuală a curentului numit „gotic baroc”, un stil care combină verticalitatea divină a goticului cu liniile fluide și ornamentale ale barocului. Fostul complex benedictin impresionează nu doar prin dimensiunea domului său extraordinar, ci și prin coridoarele inundate de o lumină divină, atent calculată de arhitect. Mănăstirea a fost de multe ori în centrul unor dispute politice medievale aspre, ceea ce i-a conferit o istorie tumultoasă. Astăzi, frumusețea ei stranie atrage iubitorii de artă sacră. Artă K8 — curente arhitecturale inovatoare.",
        "facts": [
            "Stilul „gotic baroc” este un fenomen arhitectural specific ținuturilor boeme, rar întâlnit în restul Europei.",
            "Coroana de stele aurite deasupra altarului central este una dintre semnăturile definitorii ale lui Santini-Aichel.",
            "Mănăstirea a fost închisă prin reformele drastice ale împăratului Iosif al II-lea în anul 1785.",
            "Acustica bisericii este considerată a fi perfectă, motiv pentru care găzduiește anual festivaluri de muzică clasică."
        ]
    },
    "castle-zvikov-extra": {
        "desc": "Îmbrățișat de un peisaj acvatic de poveste la joncțiunea râurilor Vltava și Otava, Castelul Zvíkov veghează regiunea cu un aer misterios. Datorită impetuozității și frumuseții sale, a fost supranumit mult timp „Regele castelelor din Boemia”. Turnul său primitiv (Hlízová věž), construit din blocuri de piatră vulcanică, este un exemplu rar de arhitectură pur defensivă timpurie. Odinioară centrul puterii premsylizilor, astăzi castelul este o atracție esențială pentru cei care navighează pe lacul de acumulare Orlík. Zidurile ruinelor se ridică impresionant deasupra apei, creând un cadru de neuitat pentru apusuri spectaculoase. Geografie K6 — baraje și văi fluviale.",
        "facts": [
            "Zvíkov a adăpostit pentru un timp în siguranță bijuteriile coroanei regale cehe în timpul unor conflicte militare majore.",
            "Frescele delicate păstrate în capela castelului se numără printre cele mai prețioase arte medievale din sudul țării.",
            "Nivelul apei a crescut masiv odată cu construirea barajului modern, oferind castelului o nouă faleză pitorească.",
            "În jurul turnului Hlízová există legende despre o energie misterioasă și creaturi mitologice cehe."
        ]
    },
    "castle-orlik-extra": {
        "desc": "Așezat precumpănitor pe ceea ce părea a fi un cuib stâncos inaccesibil, Castelul Orlík era odinioară o fortăreață înaltă, suspendată deasupra râului. Odată cu construirea giganticului baraj Orlík, nivelul apelor s-a ridicat spectaculos, transformând castelul într-o reședință palatină care pare că plutește pe suprafața lacului. Proprietate a prestigioasei familii Schwarzenberg, interioarele abundă în saloane tapisate, trofee de vânătoare și relicve militare ce atestă implicarea nobilimii în bătăliile europene majore. Parcul vast, presărat cu arbori exotici și poteci ascunse, îi oferă un fundal natural idilic. Astăzi este un loc ideal pentru croaziere și visare. Istorie K7 — transformări ale peisajului.",
        "facts": [
            "Înainte de anii 1960, castelul Orlík se afla pe o stâncă abruptă, la o distanță de 60 de metri deasupra albiei râului.",
            "Impresionanta Sală a Armelor (Zbrojnice) deține colecții de pistoale și puști rare datând din timpul Războaielor Napoleoniene.",
            "Un complex sistem de alei romantice din parc duce către mormântul ascuns al dinastiei Schwarzenberg.",
            "A apărut ca decor pentru diverse emisiuni TV și reportaje istorice, datorită peisajului său schimbat dramatic."
        ]
    },
    "landmark-slavonice-underground-extra": {
        "desc": "Sub fațadele renascentiste spectaculoase ale orașului Slavonice se ascunde un secret medieval captivant: un vast sistem de catacombe subterane. Construite inițial ca mijloc ingenios de drenare a solului umed din pivnițe, aceste coridoare au dobândit rapid și un rol defensiv pentru cetățenii din vechime. Săpate manual în roca dură cu secole în urmă, tunelurile extrem de înguste testează astăzi curajul și agilitatea vizitatorilor. Unele secțiuni ale acestui labirint întunecat și umed sunt scufundate în apă sau necesită deplasarea în genunchi. Aventurierii descoperă aici o altă față a geniului ingineresc al Evului Mediu. Geologie K6 — structuri subterane.",
        "facts": [
            "Sistemul de catacombe subterane are o lungime totală documentată de mai mulți kilometri sub centrul orașului.",
            "Coridoarele sunt incredibil de înguste, unele pasaje măsurând mai puțin de un metru în înălțime și lățime.",
            "Tunelurile erau un refugiu de încredere în timpul jafurilor mercenarilor suedezi și a trupelor suedeze în Războiul de 30 de Ani.",
            "Pentru explorarea labirintului se folosesc cizme de cauciuc și haine impermeabile oferite de ghizii locali."
        ]
    },
    "industry-skoda-auto-mlada-boleslav-extra": {
        "desc": "Uzina principală Škoda Auto din Mladá Boleslav este inima industrială a Cehiei, ilustrând povestea unui brand auto de un succes fulminant. Aceasta s-a transformat dintr-un mic atelier de reparat biciclete, fondat de pasionații Laurin și Klement, într-unul dintre cei mai importanți producători de vehicule din cadrul unui mare grup european. Complexul imens include centre de cercetare de înaltă tehnologie, linii de asamblare robotizate și sedii corporative moderne. Muzeul Škoda, situat în apropiere, oferă o fereastră către inovațiile care au definit mobilitatea în secolul trecut. Tururile uzinei prezintă cu o precizie uimitoare baletul roboților industriali. Tehnologie K8 — producție automatizată.",
        "facts": [
            "Procesul de asamblare al vehiculelor pe liniile moderne din Mladá Boleslav implică peste 2.000 de roboți avansați.",
            "Istoria mărcii a început în 1895 sub deviza patriotardă „Slavia” fabricând biciclete robuste pentru locuitorii imperiului.",
            "Vizitatorii pot viziona în direct procesul de ștanțare și turnare a metalului, extrem de strict controlat.",
            "Orașul și fabrica sunt atât de interconectate încât susțin dezvoltarea majorității instituțiilor din zonă."
        ]
    },
    "industry-budweiser-budvar-brewery-extra": {
        "desc": "Fabrica de bere Budweiser Budvar reprezintă un pilon al tradiției brasseriilor europene, păstrând rețete de fermentație nealterate și folosind exclusiv ingrediente locale de top. Apa extrasă din puțuri arteziene adânci de 300 de metri și hameiul de înaltă calitate de la Žatec sunt secretele faimosului lor lager. Berea maturată în beciurile răcoroase are un gust apreciat de cunoscătorii din peste 70 de țări. Fabrica însăși este un obiectiv de pelegrinaj, cu rezervoare imense de cupru și linii de îmbuteliere fascinante vizitabile. De asemenea, brandul are un statut unic în lume, protejându-și marca în cadrul unei renumite dispute comerciale internaționale. Economie K8 — industria alimentară.",
        "facts": [
            "Berea Budvar este maturată la rece timp de 90 de zile, o durată considerabil mai mare decât la majoritatea berilor comerciale.",
            "Compania a rămas până astăzi în proprietatea exclusivă a statului ceh, fiind o întreprindere strategică.",
            "Disputa de marcă dintre Budweiser Budvar și un gigant american este una dintre cele mai longevive din dreptul internațional.",
            "Hameiul folosit provine din conurile prețioase de Saaz (Žatec), cunoscute ca „aurul verde” al Boemiei."
        ]
    },
    "industry-moser-glassworks-extra": {
        "desc": "Fabrica de sticlă Moser din Karlovy Vary este recunoscută pe plan internațional ca fiind „Sticla Regilor”, o denumire binemeritată datorită creațiilor sale de lux. Măiestria suflătorilor de sticlă cehi atinge aici perfecțiunea absolută; produsele Moser nu conțin deloc plumb, bazându-se pe rețete speciale de prelucrare care adaugă o duritate și o claritate inegalabilă cristalului. Meșterii lucrează direct în fața cuptoarelor incandescente, transformând masa fierbinte în pahare delicate și gravuri fine care împodobesc mesele diplomaților și regilor lumii. Expoziția muzeală a fabricii expune capodoperele istorice ce dovedesc evoluția designului ceh. Artă K7 — meșteșuguri fine.",
        "facts": [
            "Datorită formulei sale ecologice, sticla Moser se gravează foarte greu, necesitând o îndemânare extraordinară.",
            "Un pahar faimos produs de Moser se poate îndoi incredibil de mult la presiune fără să se spargă.",
            "Seturile de pahare Moser sunt frecvent oferite ca daruri diplomatice oficiale de către statul ceh.",
            "Compania, fondată de Ludwig Moser, a fost singurul furnizor de sticlărie fină al curții imperiale de la Viena."
        ]
    },
    "agriculture-znojmo-wine-region-extra": {
        "desc": "Regiunea viticolă Znojmo combină perfect atmosfera romantică a unui oraș istoric cu peisajele însorite, favorabile viței-de-vie. Solul divers și microclimatul special de aici oferă un terroir perfect pentru cultivarea de soiuri de struguri care excelează printr-o aromă fină și o aciditate răcoritoare. Labirintul de pivnițe din orașul vechi, împreună cu nenumăratele cărări printre rândurile de viță, atrag enoturismul de calitate. Turiștii explorează satele înconjurătoare cu bicicleta, oprindu-se la mici producători independenți care oferă o ospitalitate caldă moravă. Festivalurile recoltei toamna aduc o efervescență inedită acestei regiuni pașnice. Geografie K7 — regiuni agricole.",
        "facts": [
            "Znojmo este celebră pentru cultivarea strugurilor Veltliner Verde și Sauvignon Blanc, producând vinuri recunoscute la nivel mondial.",
            "În timpul faimosului festival al vinului, un alai istoric uriaș trece prin oraș, onorând figuri regale medievale.",
            "Traseele marcate de ciclism vinicol sunt perfecte pentru a conecta podgoriile istorice Šobes și satele din jur.",
            "Orașul ascunde sub pământ unul dintre cele mai complexe sisteme de crame din regiunea Moravia."
        ]
    },
    "agriculture-mikulov-wine-region-extra": {
        "desc": "Îmbrățișată de rocile albe ale rezervației Pálava, regiunea viticolă Mikulov se laudă cu unele dintre cele mai pitorești peisaje din Republica Cehă. Condițiile geologice unice, bazate pe calcar fosil, aduc o notă minerală remarcabilă și distinctivă vinurilor produse aici, recunoscute frecvent în competițiile europene. Orașul Mikulov, dominat de castelul său colosal și de rutele spirituale, funcționează ca inima culturală a podgoriilor. Cultivatorii combină tehnicile avansate de fermentație cu secole de expertiză moștenită. Dealurile Pálava oferă drumeții de unde panorama viilor se contopește cu apusul, creând amintiri de neuitat. Sociologie K6 — comunități rurale.",
        "facts": [
            "Regiunea este faimoasă pentru Rieslingul de tip Welsch (Ryzlink vlašský), favorizat puternic de solurile calcaroase.",
            "Butoiul uriaș de vin, vechi de secole, găzduit în subsolul castelului Mikulov, are o capacitate de peste 100.000 de litri.",
            "Drumul Vinului din zona Mikulov face parte dintr-o rețea transfrontalieră europeană de cicloturism foarte populară.",
            "Colinele calcaroase Pálava protejează viile de curenții reci, asigurând un climat favorabil unic."
        ]
    },
    "industry-semtex-factory-explosia-extra": {
        "desc": "Fabrica Explosia a.s. din orașul Pardubice este unul dintre cele mai importante complexe din industria chimică a țării, cu o istorie presărată cu inovații secrete. De la înființarea sa la începutul secolului XX, acest vast complex a dezvoltat compuși și tehnologii chimice avansate, însă celebritatea sa internațională este legată de o singură invenție: explozibilul plastic Semtex. Având un impact uriaș la nivel ingineresc, militar și civil, această descoperire a schimbat tehnologia demolărilor. Astăzi, compania menține standarde riguroase de siguranță, fiind esențială pentru industriile extracției și apărării europene. Istorie K8 — inovații tehnologice controversate.",
        "facts": [
            "Numele faimosului explozibil provine din alăturarea primelor litere ale suburbiei Semtín și de la cuvântul 'Explosia'.",
            "Spre deosebire de alte materiale clasice de demolare, Semtex are o plasticitate excelentă chiar și la temperaturi scăzute.",
            "Astăzi, fabricarea acestor compuși este strict marcată chimic, pentru a putea fi identificată de autoritățile internaționale.",
            "Zona industrială din Semtín a generat de asemenea importante inovații în domeniul coloranților și produselor farmaceutice."
        ]
    },
    "port-usti-nad-labem-port-extra": {
        "desc": "Portul Ústí nad Labem este cel mai important ganglion de navigație fluvială din nordul Boemiei, facilitând schimbul vital de mărfuri prin cursul navigabil al râului Elba (Labe) direct către Hamburg. Cu facilități mari de stocare, macarale masive și cheiuri lungi, portul prezintă o panoramă impresionantă a industriei moderne funcționale. Aici, oțelul, cărbunele și grânele sunt transferate cu precizie din vagoanele trenurilor pe ambarcațiuni de mare capacitate. Chiar dacă industria grea și-a modificat conturul ecologic în ultimele decenii, portul rămâne crucial pentru exporturile cehe. Priveliștea sa oferă o senzație de conexiune constantă cu rutele mărilor deschise. Economie K7 — transporturi și infrastructură.",
        "facts": [
            "Porțiunea navigabilă de la Ústí nad Labem permite ambarcațiunilor fluviale de peste o sută de metri lungime să acosteze.",
            "În sezonul de vară, pe lângă cargouri, portul a început să deservească un număr tot mai mare de ambarcațiuni turistice.",
            "Dezvoltarea portului a susținut direct creșterea regiunii industriale în secolul XIX, alături de rețelele de căi ferate.",
            "Datorită adâncimii speciale din această zonă, portul rămâne deschis navigației pe o mare parte a anului."
        ]
    },
    "industry-trinecke-zelezarny-extra": {
        "desc": "Imensul complex industrial al Oțelăriilor Třinec reprezintă mândria și motorul economic al extremității estice din Cehia. Cu silueta sa impunătoare formată din furnale, conducte încrucișate și nori de abur, fabrica este inima orașului de mai bine de o sută cincizeci de ani. Třinecké železárny se mândrește cu producerea de oțel de înaltă calitate, recunoscut global, specializându-se în prelucrarea firelor subțiri și a sinelor lungi de cale ferată. În ciuda aspectului său aspru, oțelăria a investit masiv în tehnologii de epurare a aerului și procese ecologice. Localnicii trăiesc o adevărată simbioză cu această uriașă mașinărie de foc. Științe Naturale K8 — industrii extractive și poluare.",
        "facts": [
            "Sina de cale ferată fabricată în cuptoarele din Třinec este considerată una dintre cele mai durabile din Europa.",
            "Compania este finanțatorul principal al echipei locale de hochei HC Oceláři Třinec, o forță în liga cehă.",
            "Aproximativ o treime din totalul oțelului produs în prezent pe teritoriul Republicii Cehe provine de aici.",
            "Recent, fabrica a instalat sisteme gigantice de filtrare pentru a reduce dramatic particulele de praf și poluarea aerului."
        ]
    },
    "kid-landmark-techmania-science-center-extra": {
        "desc": "Găzduit sub grinzile de oțel restaurate ale unor foste hale de fabricație Škoda din Plzeň, Techmania Science Center transformă știința într-o joacă captivantă. Aici, fizica, astronomia și matematica nu sunt abstracte, ci pot fi atinse, manipulate și testate cu propriile mâini prin sute de instalații și exponate interactive. Punctul de atracție suprem este planetariul 3D, care poartă spectatorii în călătorii intergalactice cu o tehnologie de proiecție uluitoare. Pe lângă misterele cosmosului, copiii pot explora cum funcționează presiunea hidraulică, undele sonore și magnetismul. Este un loc care aprinde curiozitatea și pasiunea pentru inginerie la orice vârstă. Științe Naturale K6 — fizică interactivă.",
        "facts": [
            "Planetariul 3D din Techmania este echipat cu un proiector care afișează cerul instelat cu un realism uluitor.",
            "Una dintre expozițiile principale explică într-un mod prietenos istoria și funcționarea tehnologiilor create de uzina Škoda.",
            "Copiii pot ridica greutăți surprinzătoare folosind doar forța pârghiilor mecanice bine poziționate.",
            "Clădirile în care se află muzeul sunt ele însele monumente industriale cehe conservate cu măiestrie."
        ]
    },
    "animal-habitat-zoo-liberec-extra": {
        "desc": "Fondată cu peste un secol în urmă, Grădina Zoologică din Liberec are onoarea de a fi cea mai veche instituție de acest fel din Cehia. Amplasată printre dealurile blânde și pârâurile locale, zoo-ul se remarcă prin colecția sa excepțională și devotamentul pentru conservarea speciilor rare. De la prada din junglă până la păsările de pradă exotice, adăposturile sunt proiectate pentru a imita cu atenție ecosistemele naturale. Vizitatorii au privilegiul de a observa faimoșii tigri albi, o mutație genetică rară care atrage sute de mii de curioși anual. Instituția s-a impus și prin cercetările sale științifice și eforturile de reintroducere a speciilor în sălbăticie. Biologie K6 — conservarea biodiversității.",
        "facts": [
            "Tigrii albi de aici sunt de fapt tigri bengalezi afectați de leucism, nu albinoși așa cum se crede frecvent.",
            "Zoo Liberec este implicată activ în numeroase programe internaționale de salvare a păsărilor de pradă asiatice.",
            "Elefanții asiatici au un padoc exterior extins și un bazin dedicat unde adoră să se scalde vara.",
            "Instituția sprijină eforturile de educație de mediu, implicând școlile din toată regiunea Boemiei de Nord."
        ]
    },
    "kid-landmark-aquapalace-praha-extra": {
        "desc": "Aquapalace Praga este un complex uriaș de divertisment acvatic, un veritabil paradis tropical situat la marginea capitalei cehe. Divizat în zone tematice impresionante, de la o epavă a piraților la râuri sălbatice care pompează adrenalină, parcul oferă distracție nesfârșită pentru cei dornici de senzații tari. În contrast, pentru iubitorii de liniște, există un univers termal sofisticat, cu saune romane, băi finlandeze și zone cu valuri blânde. Plantele exotice și designul acvariilor crează o senzație de destinație exotică îndepărtată chiar în mijlocul Europei Centrale. Copiii și adulții găsesc o varietate de facilități perfecte pentru evadarea de weekend. Geografie K5 — recreere și turism.",
        "facts": [
            "Este considerat cel mai extins și complex parc acvatic de divertisment din întreaga Europă Centrală.",
            "Atracția 'Spacebowl' este un tobogan gigantic cu formă de pâlnie, extrem de iubit de tinerii vizitatori.",
            "Zona saunelor conține peste 14 facilități diferite de termoterapie, inclusiv ceremonii speciale ale aburilor.",
            "Aquapalace dispune de o secțiune unde poți experimenta înotul cu curenți puternici în aer liber pe timp de iarnă."
        ]
    },
    "animal-habitat-zoo-dvur-kralove-extra": {
        "desc": "Aducând savana africană în inima Boemiei, Zoo Dvůr Králové oferă cea mai autentică experiență de safari din regiune. Această instituție a fost un pionier la nivel mondial în protejarea faunei, grație expedițiilor africane organizate la mijlocul secolului trecut. Vizitatorii se pot plimba cu vehicule de safari pe câmpii întinse unde turmele de zebre, girafe și antilope pasc nestingherite, fără bariere vizuale, simulând perfect libertatea sălbăticiei. Cunoscută în întreaga lume pentru programele sale dedicate rinocerilor, grădina este o forță esențială în prevenirea dispariției absolute a speciilor periclitate. Educația privind pericolele braconajului este o prioritate aici. Biologie K7 — ecosisteme africane.",
        "facts": [
            "Zoo Dvůr Králové este renumit mondial pentru programul său disperat de salvare a rinocerului alb nordic.",
            "Aici trăiește unul dintre cele mai mari și mai de succes grupuri de girafe din parcurile europene.",
            "Noaptea, vizitatorii au posibilitatea unică de a participa la safari-uri ghidate pentru a observa felinele active.",
            "Multe dintre animalele eliberate pe câmpiile africane în programele de re-sălbăticire au fost născute aici."
        ]
    },
    "nature-bohemian-paradise-extra": {
        "desc": "Paradisul Boem este un tărâm de basm autentic, presărat cu labirinturi de stânci înalte, păduri dese de pin și castele romantice ivite pe culmi. Această arie protejată excelează prin formațiunile sale geologice spectaculoase din gresie, modelate delicat de vânt și apă de-a lungul a milioane de ani. Drumețiile printre turnurile de piatră dezvăluie canioane răcoroase și puncte de belvedere cu nume evocatoare. Bijuteria regiunii este faimosul castel Trosky, ale cărui turnuri asimetrice au devenit simbolul neoficial al întregului peisaj. Îndrăgostit de pictori, poeți și exploratori, acest loc a fost prima zonă naturală protejată oficială din Republica Cehă. Geografie K6 — eroziunea eoliană.",
        "facts": [
            "Paradisul Boem a fost recunoscut drept geopark mondial sub patronajul direct al UNESCO.",
            "Valea Prachov are coridoare atât de înguste încât turiștii trebuie să se strecoare lateral prin formațiunile de piatră.",
            "Regiunea este renumită pentru pietrele sale semiprețioase, în special agate și granate de un roșu intens.",
            "Formația vulcanică a castelului Trosky provine din două hornuri vulcanice separate, pe care s-au zidit turnurile."
        ]
    },
    "mountain-krkonose-giant-mountains-extra": {
        "desc": "Munții Karkonosze (Krkonoše) alcătuiesc coroana falnică a reliefului ceh, dominând nordul țării prin crestele lor vântoase și pășunile alpine pitorești. Cunoscute din vechime ca sălașul spiritului legendar al muntelui, Krakonoš, aceste culmi separă natural Cehia de Polonia. Deși altitudinea lor maximă atinge sub 1700 de metri, condițiile meteorologice aspre simulează climatul din nordul îndepărtat al Europei, găzduind specii de plante deosebit de rare. Vârfurile găzduiesc o activitate turistică asiduă, fiind un rai pentru schiori iarna și pentru drumeți energici vara. Mlaștinile de mare altitudine din parcul național creează imagini de un magnetism special. Geografie K8 — ecosisteme alpine.",
        "facts": [
            "Vârful Sněžka, la 1603 metri altitudine, adăpostește o stație meteo cu o arhitectură futuristă remarcabilă.",
            "Muntele se bucură de prezența unor ecosisteme boreale de tundră, o raritate absolută la această latitudine europeană.",
            "Râul Elba își are izvorul ascuns într-o mlaștină înaltă din regiunea Karkonosze, sub o cupolă de protecție.",
            "Traseul Prieteniei Ceho-Poloneze parcurge creasta pe graniță, oferind drumeților panorame pe ambele versanți."
        ]
    },
    "lake-lipno-dam-extra": {
        "desc": "Adesea alintat „Marea Cehă”, Barajul Lipno este cea mai mare întindere de apă dulce din Republica Cehă, un lac de acumulare înconjurat de pădurile virgine ale Munților Šumava. În timpul sezonului cald, suprafața lacului se umple de veliere, caiace și familii care se bucură de plajele bine amenajate. Adevăratul farmec este vizibil iarna, când temperaturile scăzute transformă o parte din lac în cel mai lung patinoar natural amenajat din lume. Infrastructura locală s-a dezvoltat masiv, adăugând atracții moderne, precum pârtii de schi impecabile și rute suspendate în arbori. Armonia dintre facilitățile de top și peisajul curat îi fascinează pe toți. Geografie K5 — baraje și recreere.",
        "facts": [
            "Pista naturală de patinaj de pe lacul Lipno poate depăși uneori uimitoarea lungime de 10 kilometri.",
            "Poteca prin Vârfurile Copacilor din zonă (Stezka korunami stromů) se termină cu un tobogan imens în spirală.",
            "Hidrocentrala Lipno este ascunsă profund într-o peșteră artificială excavată sub stânca solidă a barajului.",
            "Zona este intens dezvoltată ecologic, oferind o rețea imensă de piste de biciclete pe malul lacului."
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
    
    # Update descriptionAdvanced ro value
    desc_adv_match = re.search(r"descriptionAdvanced:\s*\{([^\}]*)\}", block_content, re.DOTALL)
    if desc_adv_match:
        inner = desc_adv_match.group(1)
        # Search for ro: "..." or ro: ""
        ro_match = re.search(r"ro:\s*\"([^\"]*)\"", inner)
        if ro_match:
            new_ro = f"ro: \"{data['desc']}\""
            new_inner = inner.replace(ro_match.group(0), new_ro)
            block_content = block_content.replace(inner, new_inner)

    # Update factsAdvanced ro value
    facts_adv_match = re.search(r"factsAdvanced:\s*\{([^\}]*)\}", block_content, re.DOTALL)
    if facts_adv_match:
        inner = facts_adv_match.group(1)
        facts_list_str = "[\n      \"" + "\",\n      \"".join(data["facts"]) + "\"\n    ]"
        ro_match = re.search(r"ro:\s*\[([^\]]*)\]", inner, re.DOTALL)
        if ro_match:
            new_ro = f"ro: {facts_list_str}"
            new_inner = inner.replace(ro_match.group(0), new_ro)
            block_content = block_content.replace(inner, new_inner)

    return block_content

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

matches = list(re.finditer(r"id:\s*\"([^\"]+)\"", content))
new_content = content

for match in reversed(matches):
    start_pos = match.start()
    obj_start = content.rfind("{", 0, start_pos)
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

print(f"Successfully updated Romanian content for {len(ro_data)} POIs in {file_path}")
