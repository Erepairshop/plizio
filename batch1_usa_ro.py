import json
import os

batch1 = {
  "lang": "ro",
  "country": "usa",
  "files": [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaLifeV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
  ],
  "items": [
    {
      "id": "trenton-cities-v2",
      "descriptionAdvanced": "Trenton este capitala statului New Jersey, situată strategic pe malurile râului Delaware. Orașul are o importanță istorică monumentală, fiind locul Bătăliei de la Trenton din 26 decembrie 1776, după celebra traversare a râului de către trupele lui George Washington. În secolul al XIX-lea, a devenit un gigant industrial în producția de oțel, ceramică și cabluri, vizibil prin sloganul său emblematic din 1911, „Trenton face, lumea ia” (Trenton Makes, The World Takes), afișat pe podul Lower Free. Astăzi, economia sa este dominată de sectorul guvernamental și serviciile administrative de stat, alături de instituții culturale precum Muzeul de Stat. Istorie K8 — Revoluția Americană și industrializarea.",
      "factsAdvanced": [
        "Bătălia de la Trenton a avut loc în decembrie 1776.",
        "A devenit oficial capitala statului New Jersey în 1790.",
        "Podul 'Trenton Makes' a fost inaugurat și etichetat în 1911.",
        "Populația orașului se situează în jurul a 90.000 de locuitori.",
        "Cablurile de oțel John A. Roebling produse aici au fost folosite la Podul Brooklyn.",
        "Orașul este situat pe falia de toamnă a râului Delaware."
      ]
    },
    {
      "id": "helena-cities-v2",
      "descriptionAdvanced": "Helena, capitala statului Montana, a fost fondată în 1864 ca o tabără de mineri în timpul febrei aurului, purtând inițial numele de „Last Chance Gulch” (Râpa Ultimei Șanse). Situată în regiunea Munților Stâncoși, așezarea s-a îmbogățit rapid, generând zeci de milionari până la sfârșitul secolului al XIX-lea, o moștenire vizibilă în arhitectura victoriană elegantă a conacelor locale. Astăzi, Helena servește drept centru administrativ și politic esențial pentru statul Montana, menținând în același timp un aer pitoresc datorită apropierii de Pădurea Națională Helena. Clădirea Capitoliului din Montana, finalizată în 1902, se remarcă prin domul său impresionant din cupru. Geografie K7 — așezări montane.",
      "factsAdvanced": [
        "Fondată în 1864 în urma descoperirii aurului la Last Chance Gulch.",
        "A devenit capitala teritoriului Montana în anul 1875.",
        "Clădirea Capitoliului a fost finalizată și deschisă în 1902.",
        "Situată la o altitudine de aproximativ 1.181 de metri.",
        "La sfârșitul secolului 19, avea cei mai mulți milionari pe cap de locuitor din SUA.",
        "Populația actuală este de aproximativ 33.000 de locuitori."
      ]
    },
    {
      "id": "bismarck-cities-v2",
      "descriptionAdvanced": "Bismarck este capitala statului North Dakota și se mândrește cu o așezare impresionantă pe malul estic al fluviului Missouri. A fost fondată în 1872 de calea ferată Northern Pacific Railway și a fost numită strategic în 1873 după cancelarul german Otto von Bismarck, într-o încercare de a atrage investiții și imigranți din Germania. Astăzi, Bismarck este un hub economic vital pentru câmpiile nordice, dominat de industria sănătății, agricultura extinsă și, mai recent, de exploatarea resurselor energetice din formațiunea Bakken. Clădirea Capitoliului său, construită în 1934, este un zgârie-nori în stil Art Deco de 21 de etaje, fiind cel mai înalt edificiu din stat. Geografie K8 — regiunile Marii Câmpii.",
      "factsAdvanced": [
        "Fondată în 1872 sub numele inițial de Edwinton.",
        "A fost redenumită după Otto von Bismarck în anul 1873.",
        "Clădirea Capitoliului are 21 de etaje și a fost terminată în 1934.",
        "Fluviul Missouri oferă resurse hidrologice și rute de transport.",
        "A devenit capitala statului la admiterea sa în Uniune, în 1889.",
        "Populația depășește în mod constant 73.000 de rezidenți."
      ]
    },
    {
      "id": "pierre-cities-v2",
      "descriptionAdvanced": "Pierre este capitala statului South Dakota, fiind a doua cea mai mică capitală de stat din Statele Unite, după Montpelier, în funcție de populație. Așezată pe fluviul Missouri, aproape de centrul geografic al statului, Pierre a fost fondată în 1880 și a devenit o intersecție esențială pentru comerț, datorită trecerii râului și a căilor ferate. Rolul său primar astăzi este administrația publică, având o economie profund susținută de guvernul de stat și de sectorul agricol din jur. Apropierea de barajul Oahe, finalizat în 1962, a creat Lacul Oahe, care asigură un potențial major pentru turism și pescuit recreativ. Geografie K7 — fluvii și centre administrative.",
      "factsAdvanced": [
        "Fondată în 1880 ca punct de trecere feroviar pe fluviul Missouri.",
        "A doua cea mai mică capitală de stat, cu aproximativ 14.000 de locuitori.",
        "Barajul Oahe, aflat la nord de oraș, a fost finalizat în 1962.",
        "Capitoliul statului South Dakota a fost construit între 1905 și 1910.",
        "Este una dintre puținele capitale de stat fără acces direct la rețeaua de autostrăzi interstatale.",
        "Numele orașului este pronunțat local ca „peer”."
      ]
    },
    {
      "id": "springfield-il-cities-v2",
      "descriptionAdvanced": "Springfield este capitala statului Illinois și este inseparabil legată de viața și cariera lui Abraham Lincoln, cel de-al 16-lea președinte american. Lincoln a locuit și a practicat avocatura aici din 1837 până când s-a mutat la Casa Albă în 1861. Așezarea a devenit oficial capitala statului în 1839, în mare parte datorită eforturilor lui Lincoln în legislatura statului. Pe lângă imensa sa importanță istorică și turistică axată pe locurile memoriei lui Lincoln (inclusiv mormântul său), economia se bazează puternic pe asistență medicală, medicină și guvernarea de stat. Peisajul urban se remarcă prin clădirea masivă a Capitoliului, cu un dom ce depășește în înălțime chiar și pe cel din Washington D.C. Istorie K8 — Războiul Civil American.",
      "factsAdvanced": [
        "A devenit oficial capitala statului Illinois în anul 1839.",
        "Abraham Lincoln a trăit în oraș între anii 1837 și 1861.",
        "Domul actualului Capitoliu atinge o înălțime impresionantă de 110 metri.",
        "Populația orașului Springfield se menține în jurul a 114.000 de persoane.",
        "Muzeul și Biblioteca Prezidențială Abraham Lincoln au fost deschise în 2005.",
        "Mormântul lui Lincoln atrage sute de mii de vizitatori anual."
      ]
    },
    {
      "id": "jefferson-city-cities-v2",
      "descriptionAdvanced": "Jefferson City este capitala statului Missouri, desemnată în mod special în 1821 pentru această funcție datorită poziției sale centrale de-a lungul fluviului Missouri. Numit în onoarea celui de-al treilea președinte al SUA, Thomas Jefferson, orașul a crescut în jurul funcțiilor guvernamentale. Clădirea masivă a Capitoliului său din piatră de calcar domină o stâncă cu vedere spre fluviu și a fost completată în 1917, remarcându-se prin muralele interioare realizate de Thomas Hart Benton. Spre deosebire de St. Louis sau Kansas City, Jefferson City a păstrat un caracter administrativ și comercial mai liniștit. Industria principală rămâne guvernarea statală, completată de educație prin Universitatea Lincoln, una dintre instituțiile istorice de culoare. Geografie K7 — așezări fluviale.",
      "factsAdvanced": [
        "Desemnată drept locație pentru capitala statului în anul 1821.",
        "Universitatea Lincoln a fost înființată în 1866 de către veteranii afro-americani ai Războiului Civil.",
        "Actualul Capitoliu al statului a fost construit între 1913 și 1917.",
        "Populația totală a orașului este de aproximativ 43.000 de locuitori.",
        "Așezarea este situată pe o faleză calcaroasă ce mărginește fluviul Missouri.",
        "Este traversat de autostrada US Route 54, un coridor rutier major."
      ]
    },
    {
      "id": "frankfort-cities-v2",
      "descriptionAdvanced": "Frankfort este pitoreasca capitală a statului Kentucky, amplasată de-a lungul curbelor dramatice ale râului Kentucky. A fost selectată ca și capitală în 1792, în parte datorită eforturilor logistice oferite de localnici și locației sigure. Spre deosebire de alte capitale metropolitane, Frankfort se mândrește cu o atmosferă de oraș mic și o economie ancorată ferm în operațiunile guvernamentale de stat și distilarea bourbonului. O atracție majoră este Buffalo Trace Distillery, una dintre cele mai vechi distilerii aflate în continuă funcționare din Statele Unite. Clădirea Capitoliului din 1910 este renumită pentru arhitectura sa Beaux-Arts și pentru ceasul floral uimitor aflat pe terenul său. Geografie K7 — regiunea sudică a SUA.",
      "factsAdvanced": [
        "Alesă drept capitala statului Kentucky la admiterea acestuia în 1792.",
        "Râul Kentucky împarte orașul în mai multe districte istorice.",
        "Buffalo Trace Distillery funcționează fără întrerupere de la sfârșitul secolului 18.",
        "Populația orașului depășește 28.000 de persoane.",
        "Actualul Capitoliu a fost terminat în 1910 cu costuri de peste 1 milion de dolari.",
        "Mormântul pionierului Daniel Boone se află în cimitirul orașului."
      ]
    },
    {
      "id": "lansing-cities-v2",
      "descriptionAdvanced": "Lansing este capitala statului Michigan și servește drept un centru vital pentru administrație, educație și industria auto de zeci de ani. Desemnat capitală în 1847, mutarea a fost făcută parțial pentru a proteja sediul guvernului de invaziile britanice de pe lacurile mari. Orașul a devenit renumit mondial după ce Ransom E. Olds a înființat aici Olds Motor Vehicle Company în 1897, declanșând producția faimoaselor automobile Oldsmobile, parte a gigantului General Motors. În prezent, Lansing are un peisaj economic diversificat, găzduind guvernul statului și sprijinindu-se pe influența considerabilă a Universității de Stat din Michigan (situată în apropiere, în East Lansing). Istorie K8 — industria auto americană.",
      "factsAdvanced": [
        "A devenit capitala statului Michigan în 1847, înlocuind orașul Detroit.",
        "Compania Olds Motor Vehicle a fost fondată aici în 1897.",
        "Universitatea de Stat din Michigan (MSU) a fost fondată în 1855, în estul orașului.",
        "Clădirea Capitoliului, dedicată în 1879, a fost prima cu un dom din fontă în SUA.",
        "Populația orașului Lansing este în mod curent de aproximativ 112.000 locuitori.",
        "Râurile Grand și Red Cedar converg chiar în inima orașului."
      ]
    },
    {
      "id": "madison-wi-cities-v2",
      "descriptionAdvanced": "Madison este capitala statului Wisconsin și se află pe un istm îngust situat între lacurile Mendota și Monona. Fondat în 1836, orașul a fost ales drept capitală teritorială înainte de a fi măcar construit, datorită locației sale pitorești și eforturilor judecătorului James Duane Doty. Madison se remarcă prin prezența puternică a Universității Wisconsin-Madison, care influențează profund demografia, cultura și inovația tehnologică a zonei. Cunoscut pentru activismul său politic istoric și politicile de mediu, orașul a generat o economie bazată masiv pe educație, biotehnologie, sănătate și guvernare statală. Clădirea Capitoliului său dispune de un dom spectaculos de granit alb. Geografie K7 — așezări urbane și inovație.",
      "factsAdvanced": [
        "Ales drept capitală teritorială a Wisconsin-ului în anul 1836.",
        "Situat pe un istm îngust între lacurile glaciare Mendota și Monona.",
        "Universitatea Wisconsin-Madison a fost fondată în anul 1848.",
        "Domul Capitoliului are o înălțime de 86 de metri și a fost terminat în 1917.",
        "Populația orașului a depășit constant cifra de 269.000 de rezidenți.",
        "Compania de biotehnologie Promega are un campus major în această metropolă."
      ]
    },
    {
      "id": "tallahassee-cities-v2",
      "descriptionAdvanced": "Tallahassee este capitala statului Florida, situată în regiunea nordică deluroasă cunoscută sub numele de Florida Panhandle. Spre deosebire de centrele turistice costiere masive, orașul a fost selectat ca și capitală în 1824 pentru că se afla la jumătatea distanței dintre Pensacola și St. Augustine, cele mai mari așezări de la acea vreme. Astăzi, este un centru universitar de prestigiu, fiind sediul Universității de Stat din Florida (FSU) și al Universității Agricole și Mecanice din Florida (FAMU). Economia se sprijină solid pe administrația publică de stat, educația superioară, cercetarea în domeniul materialelor de înaltă tehnologie (prin MagLab) și serviciile juridice. Clima sa oferă și schimbări sezoniere reale. Geografie K7 — regiuni sudice.",
      "factsAdvanced": [
        "Aleasă drept capitala statului Florida în anul 1824.",
        "Universitatea de Stat din Florida (FSU) a fost înființată în 1851.",
        "Găzduiește Laboratorul Național pentru Câmpuri Magnetice Puternice (MagLab).",
        "Populația atinge pragul de aproximativ 200.000 de cetățeni.",
        "Capitoliul actual al statului a fost finalizat în anul 1977.",
        "Topografia locului include dealuri împădurite, distincte de restul peninsulei floridiene."
      ]
    },
    {
      "id": "charleston-wv-cities-v2",
      "descriptionAdvanced": "Charleston este capitala și cel mai mare oraș din West Virginia, cu o locație pitorească la confluența râurilor Elk și Kanawha. Istoria sa industrială a fost impulsionată profund în secolul al XIX-lea și începutul secolului XX de extracția resurselor naturale masive, inclusiv sare, cărbune și gaze naturale, ceea ce a dus la o creștere economică explozivă în industria chimică din valea Kanawha. Astăzi, pe măsură ce industria grea a declinat, economia orașului a pivotat către sănătate, comerț cu amănuntul și guvernare administrativă. Capitoliul cu faimosul său dom auriu de 89 de metri domină linia orizontului și este o emblemă arhitecturală a renașterii clasice din stat. Geografie K7 — Munții Apalași.",
      "factsAdvanced": [
        "A devenit capitală definitivă a statului West Virginia în anul 1885.",
        "Clădirea Capitoliului a fost finalizată în 1932 cu un design impunător.",
        "Domul Capitoliului este poleit cu aur real de 23 de carate.",
        "Populația orașului se situează în jurul a 47.000 de rezidenți.",
        "Râul Kanawha este navigabil, susținând transportul de mărfuri.",
        "A fost un centru istoric vital pentru extracția de sare și industria chimică."
      ]
    },
    {
      "id": "salem-or-cities-v2",
      "descriptionAdvanced": "Salem este capitala statului Oregon, situată în mijlocul Văii Willamette, una dintre cele mai roditoare regiuni agricole din Statele Unite. Fondată în anii 1840 de misionarii metodiști de pe Coasta de Est, așezarea a devenit oficial capitala teritoriului în 1851, datorită poziției sale centrale pentru fermierii timpurii. Economia modernă a orașului Salem depinde puternic de administrația de stat ca cel mai mare angajator, fiind de asemenea un procesator agricol uriaș, prelucrând culturi locale precum nuci, vișine și viță de vie. În centrul orașului tronează impresionantul Capitoliu al statului Oregon din marmură albă, care se distinge prin statuia aurită „Oregon Pioneer” montată deasupra sa. Geografie K8 — regiunile agricole din vest.",
      "factsAdvanced": [
        "A fost fondată de coloniști și misionari în anul 1840.",
        "Desemnată oficial drept capitală teritorială în 1851.",
        "Statuia aurită 'Oregon Pioneer' a fost plasată pe Capitoliu în 1938.",
        "Valea Willamette generează miliarde de dolari prin producția agricolă anuală.",
        "Populația orașului este de aproximativ 177.000 de locuitori.",
        "Orașul este străbătut de Autostrada Interstate 5, conectând vestul statului."
      ]
    },
    {
      "id": "olympia-cities-v2",
      "descriptionAdvanced": "Olympia, capitala statului Washington, este așezată idilic la capătul sudic al Puget Sound. Așezarea a fost fondată la mijlocul secolului al XIX-lea, servind drept port și punct de plecare pentru industria lemnului și pentru feriboturi, datorită accesului excelent la apă. Când Teritoriul Washington a fost format în 1853, Olympia a fost aleasă drept capitală. Guvernarea publică și serviciile administrative de stat rămân principalii piloni economici. De asemenea, orașul și-a cultivat o reputație ca centru al artei, al sustenabilității de mediu și al spiritului independent, evidențiată de arhitectura ecologică și instituțiile de învățământ, cum ar fi Evergreen State College. Geografie K7 — așezările de coastă.",
      "factsAdvanced": [
        "A devenit capitala teritorială în anul 1853.",
        "Situată la capătul sudic al bazinului Puget Sound.",
        "Actualul sediu al legislativului de stat a fost construit între 1922 și 1928.",
        "Evergreen State College a fost înființat în anul 1967.",
        "Populația se apropie în medie de cifra de 56.000 de locuitori.",
        "Portul Olympia a fost esențial istoric pentru comerțul regional cu lemn."
      ]
    },
    {
      "id": "carson-city-cities-v2",
      "descriptionAdvanced": "Carson City servește ca și capitală a statului Nevada, situată în mod distinct într-o vale aridă de la poalele Munților Sierra Nevada. Denumit după exploratorul și omul de frontieră american Kit Carson, orașul a cunoscut inițial un boom colosal la sfârșitul anilor 1850 odată cu descoperirea uriașelor zăcăminte de argint la Comstock Lode. Sediul fostei monedării din Carson City este o mărturie a acestui trecut legat de mineritul metalelor prețioase. Astăzi, fiind una dintre cele mai mici capitale de stat din țară ca populație, orașul își susține economia prin operațiunile guvernului statal și prin turism, susținut masiv de apropierea sa incredibilă de Lacul Tahoe. Geografie K7 — regiunile aride și mineritul.",
      "factsAdvanced": [
        "Fondată în 1858, luând numele faimosului explorator Kit Carson.",
        "Orașul a fost un nod crucial în timpul boom-ului de argint de la Comstock Lode.",
        "Monedăria Carson City a funcționat oficial între 1870 și 1893.",
        "Capitoliul de stat din Nevada a fost completat în 1871.",
        "Populația stabilă a orașului este de aproximativ 58.000 de persoane.",
        "Așezarea este situată la o altitudine impresionantă de 1.463 metri."
      ]
    },
    {
      "id": "lincoln-ne-cities-v2",
      "descriptionAdvanced": "Lincoln este capitala statului Nebraska, redenumită din „Lancaster” după asasinarea președintelui Abraham Lincoln în 1865, într-un moment în care sudul statului a câștigat lupta politică pentru plasarea capitalei. Orașul s-a transformat dintr-un avanpost de prerie într-un centru guvernamental modern și dinamic. Cel mai mare angajator și o forță majoră a economiei și culturii locale este Universitatea din Nebraska, ale cărei meciuri de fotbal american transformă orașul într-un spectacol sâmbăta. Clădirea Capitoliului statului este o capodoperă arhitecturală unică de tip zgârie-nori în stil Art Deco, acoperită cu un dom de mozaic auriu și o figură reprezentând un semănător, simbolizând rădăcinile agrare ale statului. Geografie K8 — regiunile Marii Câmpii.",
      "factsAdvanced": [
        "Alesă drept capitală a statului în anul 1867, redenumindu-se Lincoln.",
        "Universitatea din Nebraska a fost fondată aici în 1869.",
        "Turnul Capitoliului are o înălțime de aproximativ 122 de metri.",
        "Populația este de aproape 292.000 de rezidenți, a doua ca mărime din stat.",
        "Capitoliul actual, terminat în 1932, a fost al treilea construit pe acest loc.",
        "Economia orașului include tehnologia serviciilor financiare și asigurările."
      ]
    },
    {
      "id": "port-of-new-york-and-new-jersey-economic-v2",
      "descriptionAdvanced": "Portul New York și New Jersey reprezintă unul dintre cele mai aglomerate și critice complexe portuare ale lumii, formând inima logisticii din Estul Americii de Nord. Cu o rețea uriașă de docuri, terminale de containere, căi ferate de marfă și spații de depozitare, acesta manipulează volume incredibile de produse chimice, automobile, utilaje și bunuri de consum. De la darea în folosință a Canalului Erie în secolul 19, acest port a transformat New York-ul în cel mai important punct de import-export din Statele Unite. Autoritatea Portuară gestionează eficient tranzitul zilnic ce hrănește un lanț de aprovizionare ce ajunge la peste zeci de milioane de consumatori locali și regionali. Geografie K8 — transporturi și infrastructură portuară.",
      "factsAdvanced": [
        "Autoritatea Portuară a fost înființată în mod oficial în anul 1921.",
        "Gestionează cel mai mare volum de bunuri pe coasta de est a SUA.",
        "Manipulează anual un volum de peste 7 milioane de containere TEU.",
        "Găzduiește rețele masive feroviare directe spre Midwest-ul american.",
        "Terminalele sale sunt distribuite pe ambele maluri ale râului Hudson.",
        "Canalul Navigabil a fost aprofundat recent la 15 metri pentru mega-nave."
      ]
    },
    {
      "id": "port-of-savannah-economic-v2",
      "descriptionAdvanced": "Portul Savannah, operat de Georgia Ports Authority, a crescut meteoric pentru a deveni cel mai aglomerat terminal pentru containere individuale din Statele Unite ale Americii. Localizat de-a lungul râului Savannah, facilitățile sale vaste, inclusiv imensul Garden City Terminal, permit procesarea extraordinar de rapidă a navelor comerciale venite din Asia prin Canalul Panama lărgit. Poziționarea sa strategică și legăturile feroviare excepționale către sud-estul Statelor Unite atrag companii de top de logistică și comerț cu amănuntul. Portul este un motor esențial de creștere economică regională, asigurând mii de locuri de muncă și miliarde de dolari în venituri economice. Geografie K7 — comerțul global.",
      "factsAdvanced": [
        "Garden City Terminal este cel mai mare terminal unic de containere din America de Nord.",
        "Portul a depășit procesarea a 5 milioane de unități TEU anual.",
        "Este conectat direct prin două companii feroviare de clasă 1: CSX și Norfolk Southern.",
        "Proiectul de adâncire a râului Savannah (SHEP) s-a finalizat recent.",
        "Generază un impact economic estimat la zeci de miliarde de dolari pentru statul Georgia.",
        "Se află la aproximativ 29 de kilometri de la intrarea din Oceanul Atlantic."
      ]
    },
    {
      "id": "detroit-automotive-industry-economic-v2",
      "descriptionAdvanced": "Detroit a fost, pentru cea mai mare parte a secolului XX, centrul necontestat al producției auto mondiale, câștigându-și supranumele legendar de „Motor City”. Datorită antreprenorilor vizionari precum Henry Ford și implementării de către acesta a liniei de asamblare moderne în 1913, producția de masă a automobilelor a explodat, alimentând revoluția clasei de mijloc americane. Deși orașul a înfruntat un declin masiv din cauza dezindustrializării și a competiției globale în ultimele decenii, moștenirea sa domină. Gigănții 'Big Three' (Ford, General Motors și Chrysler) mențin aici o prezență semnificativă, cu accent actual pe inovația în domeniul vehiculelor electrice și autonome. Istorie K8 — industrializare și producție.",
      "factsAdvanced": [
        "Henry Ford a introdus linia de asamblare modernă în fabrica Highland Park în 1913.",
        "General Motors are sediul central global la Renaissance Center din Detroit.",
        "Populația orașului a depășit 1,8 milioane în anul 1950 la apogeul industrial.",
        "Compania Chrysler (acum Stellantis) menține numeroase instalații de inginerie în regiune.",
        "Industria auto a fost factorul central în Atracția Marii Migrații afro-americane.",
        "Noile miliarde de dolari sunt investite local în tranziția către mașini electrice."
      ]
    },
    {
      "id": "silicon-valley-tech-economic-v2",
      "descriptionAdvanced": "Silicon Valley, amplasată în sudul Golfului San Francisco, reprezintă ecosistemul absolut al inovației tehnologice și al industriei de capital de risc la nivel global. Denumirea sa derivă de la primele dezvoltări în producția masivă de cipuri de siliciu din anii 1970. Impulsionată din punct de vedere academic de Universitatea Stanford și financiar de investitori, zona a văzut crearea unora dintre cele mai revoluționare corporații, precum Apple, Google, Meta și Intel. Astăzi, Silicon Valley nu mai dezvoltă doar hardware, ci domină suita globală de inteligență artificială, rețele sociale și soluții de cloud computing, transformând fundamental modul în care umanitatea trăiește și comunică. Geografie K8 — centre tehnologice.",
      "factsAdvanced": [
        "Termenul 'Silicon Valley' a fost popularizat oficial în presa de specialitate în 1971.",
        "Universitatea Stanford a funcționat ca o fundație esențială pentru cercetarea locală.",
        "Corporația Apple a luat naștere într-un garaj din Cupertino în 1976.",
        "Regiunea a înregistrat zeci de mii de patente tehnologice decenii la rând.",
        "Mii de companii tip start-up sunt finanțate aici anual prin capital de risc.",
        "Costul extrem al vieții din zonă reflectă bogăția concentrată de inovație."
      ]
    },
    {
      "id": "texan-energy-industry-economic-v2",
      "descriptionAdvanced": "Industria energetică texană reprezintă forța motrice dominantă a producției de energie americană de mai bine de un secol, debutând la nivel monumental odată cu erupția legendarului puț petrolier Spindletop în 1901. Acest stat domină peisajul național prin zăcămintele imense din Bazinul Permian, transformând orașe precum Houston și Midland în capitale economice gigantice ale extracției, rafinării și exporturilor de țiței. Complexul masiv de rafinării situate de-a lungul Coastei Golfului Mexic asigură nu doar producția de benzină, ci și uriașa industrie petrochimică. Astăzi, Texasul produce volume colosale de energie, devenind un pol strategic esențial pentru stabilitatea globală. Geografie K8 — resurse naturale.",
      "factsAdvanced": [
        "Momentul Spindletop din 1901 a semnalat începutul erei moderne a petrolului.",
        "Texas este incontestabil cel mai mare stat producător de țiței și gaze din SUA.",
        "Bazinul Permian deține miliarde de barili de rezerve de petrol extractibil.",
        "Capacitatea de rafinare a statului Texas reprezintă aproape o treime din totalul țării.",
        "Portul Houston a devenit principalul exportator național de produse petrochimice.",
        "Infrastructura de conducte a statului se întinde pe sute de mii de kilometri."
      ]
    },
    {
      "id": "wall-street-financial-industry-economic-v2",
      "descriptionAdvanced": "Wall Street din districtul financiar al orașului New York este simbolul suprem al piețelor financiare, al capitalului de investiții și al sectorului bancar global. Centrat în jurul istoricelor New York Stock Exchange (NYSE) și Nasdaq, această stradă din Lower Manhattan procesează volume incomprehensibile de tranzacții valutare, acțiuni corporative și instrumente de credit. Instituțiile masive cu sediul aici ghidează politicile de investiții globale și direcționează capitalul în întreaga lume. Odată cu evoluția rapidă a comerțului algoritmic modern, o mare parte a volumului de muncă a devenit electronic, însă reputația sa monumentală de ancoră a puterii financiare occidentale rămâne absolut neschimbată. Geografie K8 — globalizare financiară.",
      "factsAdvanced": [
        "New York Stock Exchange (NYSE) a fost fondată în urma acordului Buttonwood din 1792.",
        "NYSE este în prezent cea mai mare bursă de valori din lume după capitalizarea de piață.",
        "Denumirea 'Wall Street' provine de la un zid de apărare din perioada olandeză din 1653.",
        "Banca Rezervei Federale din New York găzduiește cel mai mare depozit de aur din lume.",
        "Industria financiară este cel mai valoros pilon economic al orașului New York.",
        "Aici își au sediile unele dintre cele mai influente bănci de investiții la nivel mondial."
      ]
    },
    {
      "id": "napa-valley-wine-industry-economic-v2",
      "descriptionAdvanced": "Napa Valley, aflată la nord de Golful San Francisco în California, este fără îndoială una dintre cele mai exclusiviste și cunoscute regiuni viticole din lumea întreagă. Climatul său mediteranean de excepție și diversitatea solului vulcanic creează condiții agricole perfecte, în special pentru cultivarea viței de vie din soiul Cabernet Sauvignon. Industria a dobândit faimă globală în urma „Degustării de la Paris” din 1976, când vinurile locale au învins faimoasele etichete franceze în testele oarbe de evaluare a calității. Acum, industria vitivinicolă a transformat Napa într-un magnet masiv pentru agroturismul de lux, integrând gastronomie fină, crame rafinate și stațiuni spectaculoase. Geografie K7 — agricultură specializată.",
      "factsAdvanced": [
        "În 1976, vinurile californiene au obținut faima globală la Judecata de la Paris.",
        "Regiunea este renumită mai ales pentru plantațiile excepționale de Cabernet Sauvignon.",
        "Industria deține mai mult de 400 de crame fizice licențiate funcționale.",
        "Valea generează un impact economic uriaș, estimat la zeci de miliarde de dolari.",
        "A fost desemnată oficial ca Zonă Viticolă Americană (AVA) în anul 1981.",
        "Aproape 5 milioane de turiști o vizitează anual pentru a experimenta agroturismul local."
      ]
    },
    {
      "id": "hollywood-entertainment-industry-economic-v2",
      "descriptionAdvanced": "Hollywood a dominat de un secol peisajul media și de divertisment ca centrul absolut al industriei cinematografice globale. Locația din sudul Californiei a atras inițial primii realizatori de filme la începutul anilor 1910, grație zilelor extrem de însorite și vremii previzibile perfecte pentru turnări pe platouri deschise. Giganții producției (cum ar fi Paramount, Warner Bros., Universal) și-au stabilit cartierele generale aici, creând un conglomerat imens de studiouri, actori și creatori de efecte speciale. În timp, această industrie a devenit un motor exportator de miliarde de dolari pentru Statele Unite, modelând în mod profund idealurile culturale la nivel internațional și consolidând imaginea „visului american”. Istorie K8 — dezvoltarea mass-media.",
      "factsAdvanced": [
        "Primul studio de film major a fost înființat oficial în Hollywood în anul 1911.",
        "Cele mai mari cinci studiouri, numite 'The Big Five', au dominat Epoca de Aur a cinematografiei.",
        "Faimosul semn Hollywood a fost inițial ridicat în 1923 pentru o reclamă imobiliară.",
        "Exportul de producții americane generează constant venituri de zeci de miliarde de dolari.",
        "Premiile Oscar, decernate anual aici din 1929, sunt vârful excelenței în industrie.",
        "Acest sector sprijină direct sute de mii de locuri de muncă în statul California."
      ]
    },
    {
      "id": "chicago-logistics-industry-economic-v2",
      "descriptionAdvanced": "Poziția strategică a orașului Chicago l-a determinat să devină nucleul de fier al rețelei logistice și feroviare a Americii de Nord. Faptul că leagă zona bazinului Marilor Lacuri de fluviul Mississippi l-a transformat istoric în cel mai aglomerat nod comercial. Liniile a șase rețele feroviare majore de Clasă 1 se intersectează masiv în regiunea sa metropolitană, coordonând transferul a milioane de tone de mărfuri ce variază de la produsele agricole și chimice până la bunurile de consum final. Complexul logistic include, de asemenea, Aeroportul Internațional O'Hare, unul dintre cele mai încărcate porturi aeriene de transport marfă la nivel global, facilitând viteza operațiunilor comerciale moderne. Geografie K8 — logistică.",
      "factsAdvanced": [
        "Este cel mai important nod național de intersecție feroviară pentru transportul de marfă.",
        "Șase dintre cele șapte companii feroviare de Clasă 1 converg masiv în zona Chicago.",
        "Aproximativ 25% din toate trenurile de marfă din țară trec pe teritoriul său.",
        "Aeroportul O'Hare gestionează anual peste 2 milioane de tone de mărfuri.",
        "Canalul Sanitar Chicago a conectat istoric marile rute de apă americane.",
        "Industria rețelelor de depozitare absoarbe o uriașă forță de muncă metropolitană."
      ]
    },
    {
      "id": "pittsburgh-steel-industry-economic-v2",
      "descriptionAdvanced": "Pittsburgh, așezat la confluența a trei râuri navigabile, a constituit centrul epic al producției masive de oțel din Statele Unite, deținând porecla „Orașul de Oțel”. Pe parcursul secolului al XIX-lea și în primele decenii ale secolului XX, industria a explodat datorită apropierii de minele bogate de cărbune și minereu de fier, impulsionată de magnați uriași precum Andrew Carnegie. Sute de fabrici produceau milioanele de tone de oțel necesare pentru a ridica zgârie-norii New York-ului, a construi poduri mari și mașinile Detroit-ului. Astăzi, deși fabricile mari s-au diminuat, moștenirea industrială a lăsat loc unui pol modern ce a tranzitat economia către robotică avansată, medicină și cercetare universitară de nivel mondial. Istorie K8 — industrializarea.",
      "factsAdvanced": [
        "Mogulul Andrew Carnegie a inaugurat prima sa mare fabrică de oțel Edgar Thomson în 1875.",
        "La apogeu, orașul a generat peste o treime din întreaga producție de oțel a SUA.",
        "Crearea corporației gigantice U.S. Steel a avut loc printr-o masivă consolidare în 1901.",
        "Vastele râuri Allegheny și Monongahela facilitau logistica barjelor cu cărbune.",
        "Orașul numără 446 de poduri, majoritatea confecționate din materialele produse pe plan local.",
        "Astăzi, zona concentrează investiții economice imense în universități de nivel tehnologic."
      ]
    }
  ]
}

with open('/mnt/c/Users/User/plizio_orch/seo_outputs/seo_usa_ro_batch1.json', 'w', encoding='utf-8') as f:
    json.dump(batch1, f, ensure_ascii=False, indent=2)

print("Batch 1 JSON written.")
