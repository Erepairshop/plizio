
import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraHu3.ts'

updates = {
    "historical-visegradi-fellegvar-extra": {
        "description": "Citadela din Visegrád este una dintre cele mai spectaculoase și importante fortificații medievale din Ungaria, dominând de la înălțime Cotul Dunării. Construită în secolul al XIII-lea de regele Béla al IV-lea după invazia mongolă, cetatea a servit drept reședință regală și centru politic major timp de sute de ani. Aici au fost păstrate Bijuteriile Coroanei Ungare și tot aici a avut loc celebrul Congres al Regilor din 1335, care a pus bazele cooperării regionale actuale. Vizitatorii pot explora astăzi sălile reconstruite, capela cetății și o expoziție impresionantă de arme medievale și instrumente de vânătoare. Punctul culminant al vizitei este panorama uluitoare oferită de pe zidurile fortăreței asupra meandrelor Dunării, unde fluviul șerpuiește printre munții Pilis și Börzsöny. Atmosfera istorică este completată periodic de spectacole cu șoimi și turniruri cavalerești care readuc la viață epoca de glorie a regatului medieval maghiar.",
        "facts": [
            "Cetatea a fost ridicată între anii 1240 și 1250 pentru a proteja regiunea împotriva unor noi invazii.",
            "În anul 1335, regii Ungariei, Boemiei și Poloniei s-au întâlnit aici pentru a negocia rute comerciale strategice.",
            "Coroana Sfântă a Ungariei a fost păstrată în siguranță într-un seif secret din interiorul cetății timp de peste 200 de ani.",
            "Fortificația a rezistat mai multor asedii otomane în secolul al XVI-lea, fiind cucerită abia în anul 1544.",
            "După recucerire, cetatea a fost parțial dinamitată la ordinul Habsburgilor pentru a nu fi folosită de rebelii curuți.",
            "Săpăturile arheologice extinse din secolul XX au scos la lumină numeroase obiecte prețioase din epoca dinastiei de Anjou.",
            "Expoziția de figurine de ceară din incintă recreează atmosfera banchetului regal organizat în timpul întâlnirii istorice din 1335.",
            "Accesul la citadelă se poate face pe jos prin trasee montane pitorești sau cu mașina pe drumul panoramic „Panoráma út”."
        ]
    },
    "historical-godolloi-kastely-extra": {
        "description": "Palatul Regal din Gödöllő este cel mai mare castel baroc din Ungaria și un monument istoric de o eleganță excepțională. Construit în secolul al XVIII-lea de contele Antal Grassalkovich I, palatul a devenit ulterior reședința de vară preferată a împăratului Franz Joseph I și a soției sale, împărăteasa Elisabeta, cunoscută sub numele de Sisi. Regina Sisi iubea libertatea și liniștea rurală din Gödöllő, preferând acest loc atmosferei rigide de la curtea imperială din Viena. Interiorul restaurat cu grijă impresionează prin scările monumentale, apartamentele regale decorate cu mobilă de epocă și foaierele pline de lumină. Vizitatorii pot admira teatrul privat baroc, capela castelului și parcul vast amenajat în stil englezesc, care invită la plimbări relaxante. Astăzi, palatul funcționează ca un centru cultural activ, găzduind frecvent concerte de muzică clasică, festivaluri și expoziții tematice ce evocă epoca de aur a Monarhiei Austro-Ungare și personalitatea fascinantă a reginei.",
        "facts": [
            "Palatul Regal din Gödöllő este al doilea cel mai mare complex baroc din Europa, fiind depășit doar de Palatul Versailles.",
            "Regina Sisi a petrecut în total peste 2.000 de zile la acest castel, fiind locul unde se simțea cel mai bine.",
            "Teatrul de curte al palatului este cel mai vechi teatru baroc funcțional din Ungaria care păstrează mașinăria originală de schimbat decorul.",
            "În perioada comunistă, clădirea a fost grav neglijată, servind drept cămin de bătrâni și ulterior cazarmă pentru trupele sovietice.",
            "Renovările ample începute în anii 1990 au redat palatului strălucirea de altădată, transformându-l într-un muzeu de clasă mondială.",
            "Grădina castelului adăpostește un pavilion regal de palmieri și un manaj hipic unde se organizau spectacole de echitație.",
            "Muzeul castelului expune o colecție impresionantă de obiecte personale, scrisori și rochii care au aparținut împărătesei Elisabeta.",
            "Situat la doar 30 de kilometri de Budapesta, castelul este ușor accesibil pentru turiști folosind linia de tren suburban HÉV."
        ]
    },
    "animal-habitat-medveotthon-extra": {
        "description": "Sanctuarul de Urși de la Veresegyház este o instituție unică în Europa Centrală, dedicată protecției și salvării animalelor aflate în dificultate. Întinzându-se pe o suprafață de peste 5 hectare, parcul oferă un cămin sigur și adaptat nevoilor naturale pentru zeci de urși bruni și lupi care au fost salvați din condiții precare de trai sau din spectacole de circ. Mediul este conceput pentru a imita habitatul sălbatic, dispunând de lacuri artificiale pentru îmbăiere, peșteri săpate în pământ și zone vaste de joacă și explorare. Vizitatorii au oportunitatea rară de a observa aceste carnivore impunătoare de la o distanță sigură, învățând în același timp despre biologia și comportamentul lor complex. Un punct de atracție major, în special pentru copii, este posibilitatea de a hrăni urșii cu miere folosind linguri lungi de lemn furnizate de îngrijitori. Sanctuarul promovează respectul față de natură și educația ecologică, fiind o destinație ideală pentru o zi de relaxare în familie.",
        "facts": [
            "Sanctuarul a fost deschis în anul 1998 în colaborare cu organizația internațională World Animal Protection (WAP).",
            "Adăpostește permanent între 30 și 40 de urși bruni și mai multe haite de lupi care trăiesc în zone separate.",
            "Urșii consumă anual cantități uriașe de fructe, legume și, bineînțeles, mierea care este deliciul lor preferat.",
            "Complexul dispune de un centru veterinar modern și stații de carantină pentru animalele nou sosite din întreaga lume.",
            "Mulți dintre locuitorii sanctuarului au fost victime ale exploatării, dar aici reușesc să se socializeze și să ducă o viață demnă.",
            "Vizitatorii pot cumpăra miere de la poartă pentru a participa la hrănirea demonstrativă supravegheată a animalelor.",
            "Sanctuarul rămâne deschis pe tot parcursul anului, deoarece urșii de aici nu intră în hibernare completă datorită hranei constante.",
            "În incintă există și un turn de observație care oferă o perspectivă panoramică asupra întregului areal al rezervației."
        ]
    },
    "kid-landmark-szentendre-skanzen-extra": {
        "description": "Muzeul Satului din Szentendre (Skanzen) este cel mai mare muzeu în aer liber din Ungaria și o fereastră fascinantă către trecutul rural al țării. Situat într-un cadru natural pitoresc la poalele munților Pilis, muzeul reunește gospodării țărănești autentice, biserici, mori și ateliere meșteșugărești aduse din toate regiunile Ungariei. Complexul este organizat în „peisaje etnografice” care reflectă diversitatea arhitecturală și culturală a Bazinului Carpatic. Vizitatorii pot intra în casele mobilate original ale țăranilor sau nobililor de la țară, pot observa meșteșugari tradiționali la lucru sau pot participa la demonstrații de obiceiuri vechi. Un element deosebit de popular este trenulețul istoric al muzeului, care transportă vizitatorii prin arealul vast. Pentru copii, există numeroase stații interactive unde pot învăța să coacă pâine, să prelucreze lâna sau să modeleze lutul, transformând vizita într-o experiență educațională vie și captivantă.",
        "facts": [
            "Muzeul a fost fondat în 1967 și cuprinde astăzi peste 300 de clădiri istorice salvate din diverse sate maghiare.",
            "Trenul Skanzen este o cale ferată forestieră originală care a fost utilizată în trecut pentru transportul produselor agricole.",
            "Terenul este împărțit în zece regiuni distincte, oferind o imagine completă a vieții rurale din Câmpia Maghiară până în Transdanubia.",
            "În weekenduri sunt organizate frecvent festivaluri tematice dedicate sărbătorilor tradiționale, precum Paștele sau Sărbătoarea Recoltei.",
            "În incintă se află mori de apă și de vânt funcționale, care exemplifică ingeniozitatea tehnică a morarilor de odinioară.",
            "Muzeul deține o colecție impresionantă de peste 40.000 de obiecte de uz casnic și unelte tradiționale de valoare etnografică.",
            "Programele pedagogice dedicate școlilor sunt concepute pentru a face istoria tangibilă și ușor de înțeles pentru elevi.",
            "Skanzen-ul din Szentendre a primit numeroase premii internaționale, fiind considerat unul dintre cele mai bune muzee de profil din Europa."
        ]
    },
    "industry-mol-olajfinomito-extra": {
        "description": "Rafinăria MOL din Százhalombatta, cunoscută oficial sub numele de Rafinăria Dunăreană (Dunai Finomító), este inima industrială a sistemului energetic maghiar. Fiind cea mai mare rafinărie de petrol din țară, aceasta joacă un rol vital în asigurarea mobilității și securității energetice a Ungariei și a regiunilor învecinate. Complexul uriaș este situat strategic pe malul Dunării, la sud de Budapesta, și procesează anual milioane de tone de țiței pentru a produce carburanți, păcură și materii prime pentru industria chimică. Unitatea impresionează prin turnurile sale de distilare masive, rețeaua densă de conducte și zecile de rezervoare de stocare care domină peisajul local. De la punerea în funcțiune, rafinăria a fost modernizată constant pentru a respecta cele mai stricte standarde europene de mediu și pentru a crește eficiența energetică. Compania MOL investește masiv aici în tehnologii noi, inclusiv în producția de hidrogen verde, pregătind platforma pentru o economie cu emisii reduse de carbon.",
        "facts": [
            "Rafinăria a început operațiunile în anul 1965 și de atunci s-a extins continuu pentru a deveni un gigant regional.",
            "Cu o capacitate de procesare de aproximativ 8,1 milioane de tone de țiței pe an, este una dintre cele mai mari din Europa Centrală.",
            "Fabrica produce peste 50 de tipuri de produse derivate, de la kerosen pentru aviație până la bitum pentru infrastructura rutieră.",
            "O rețea de peste 1.200 de kilometri de conducte interne conectează diferitele unități de producție și depozitare de pe platformă.",
            "Unitatea dispune de un port industrial propriu la Dunăre și de o infrastructură feroviară extensivă pentru transportul produselor.",
            "Siguranța este o prioritate absolută, rafinăria având unul dintre cele mai bine dotate corpuri de pompieri privați din țară.",
            "Investiția actuală în unitatea de hidrogen verde din Százhalombatta este una dintre cele mai mari de acest tip din regiunea noastră.",
            "Platforma industrială este strâns legată de combinatul chimic de la Tiszaújváros, formând un lanț valoric petrochimic integrat."
        ]
    },
    "historical-csillagvar-balatonszentgyorgy-extra": {
        "description": "Cetatea Stea (Csillagvár) din Balatonszentgyörgy este o curiozitate arhitecturală unică situată în apropierea malului sud-vestic al Lacului Balaton. Clădirea cu un plan caracteristic în formă de stea a fost ridicată în secolul al XIX-lea de contele László Festetics, având inițial destinația de pavilion de vânătoare. Arhitectura neobișnuită, care amintește de o fortificație medievală cu bastioane, i-a adus rapid denumirea populară de „cetate”. În interiorul său se află astăzi un muzeu captivant care prezintă viața de zi cu zi la granița fortificată în timpul războaielor cu turcii, precum și o colecție rară de obiecte preistorice. Vizitatorii pot admira un panoptic cu figurine de ceară ce recreează scene istorice autentice și o expoziție valoroasă de arme vechi. Cetatea este înconjurată de un parc idilic ce include un mic loc de joacă și o zonă cu animale domestice, fiind o destinație ideală pentru familii. Csillagvár reușește să îmbine într-un mod șarmant istoria, designul inedit și activitățile de timp liber.",
        "facts": [
            "Cetatea Stea a fost construită într-un timp record de un singur an, între 1820 și 1821.",
            "Planul în formă de stea cu patru colțuri a fost ales special pentru a oferi clădirii un aspect impunător de fortăreață.",
            "Clădirea a servit drept bază pentru partidele de vânătoare ale familiei nobiliare Festetics în pădurile bogate din jur.",
            "În pivnița castelului poate fi vizitată o expoziție unică în lume care înfățișează cavaleri medievali și viața de garnizoană.",
            "Capela mică din interiorul cetății este dedicată Sfintei Maria și găzduiește uneori ceremonii de nuntă pitorești.",
            "Parcul dendrologic adăpostește specii de arbori rari și oferă numeroase zone umbrite pentru relaxare în timpul verii.",
            "Anual, pe domeniul cetății se organizează târguri de artizanat și jocuri medievale pentru divertismentul turiștilor.",
            "Obiectivul se află la doar câțiva kilometri de orașul Keszthely și de faimosul lac termal din Hévíz."
        ]
    },
    "historical-kaposvari-varoshaza-extra": {
        "description": "Primăria din Kaposvár este un monument arhitectural splendid al stilului neorenascentist maghiar și inima administrativă a orașului. Construită la sfârșitul secolului al XIX-lea în piața centrală Kossuth, clădirea reflectă prosperitatea economică și mândria civică a comunității din acea epocă. Fațada impunătoare este bogat decorată cu detalii sculpturale, statui și ornamente rafinate, in timp ce interiorul surprinde prin eleganța scării monumentale și a sălii de consiliu. Această sală festivă, decorată cu picturi murale valoroase și elemente din lemn sculptat, oferă un cadru solemn pentru recepții oficiale și evenimente culturale de prestigiu. Un element remarcabil este vitraliul colorat de pe casa scării, care înfățișează blazoanele orașului Kaposvár și ale județului Somogy. Primăria nu este doar un sediu administrativ, ci și un simbol al identității locale, fiind una dintre cele mai fotografiate clădiri din regiune, recunoscută și pentru jocul său de clopote zilnic.",
        "facts": [
            "Edificiul a fost ridicat între anii 1902 și 1904 după planurile arhitecților Ede Kopeczek și Gyula Kertész.",
            "Sala de recepție a primăriei este renumită pentru acustica sa deosebită, găzduind frecvent concerte de muzică clasică.",
            "Pe fațada exterioară se regăsesc statui alegorice care simbolizează Justiția și spiritul protector al orașului.",
            "Clădirea a supraviețuit celui de-al Doilea Război Mondial fără distrugeri majore, păstrându-și mare parte din decorul original.",
            "În anii 2000, fațada a beneficiat de o restaurare completă pentru a-i reda aspectul strălucitor de la inaugurare.",
            "Carillonul (jocul de clopote) al primăriei interpretează la fiecare oră fixă melodii celebre ale compozitorilor maghiari.",
            "La parter funcționează un punct de informare turistică unde vizitatorii pot afla detalii despre istoria și atracțiile orașului.",
            "Primăria face parte dintr-un ansamblu arhitectural protejat, situat în una dintre cele mai frumoase piețe centrale din vestul Ungariei."
        ]
    },
    "kid-landmark-katica-tanya-extra": {
        "description": "Ferma Gărgărița (Katica Tanya) din localitatea Patca este un centru de agrement premiat și unul dintre cele mai populare parcuri tematice pentru familii din sudul Ungariei. Aceasta oferă o combinație unică între viața tradițională la fermă și atracțiile moderne de divertisment, totul pe o suprafață impresionantă. Copiii au ocazia să hrănească animalele, să învețe cum se mulg vacile sau să încerce diverse meșteșuguri rurale uitate. În paralel, parcul dispune de facilități spectaculoase, precum tobogane gigantice, pereți de escaladă și unul dintre cele mai mari spații de joacă acoperite din țară. Un aspect fundamental al fermei este sustenabilitatea: întreaga locație funcționează aproape integral pe bază de energie regenerabilă, educând vizitatorii despre importanța protejării mediului. Katica Tanya este locul unde copiii pot fi activi întreaga zi, în timp ce părinții se bucură de atmosfera rurală liniștită, fiind destinația ideală pentru o experiență care îmbină distracția cu învățarea.",
        "facts": [
            "Ferma Gărgărița a primit de mai multe ori titlul de „Atracția Turistică a Anului” în Ungaria pentru calitatea serviciilor sale.",
            "Parcul deține cel mai mare sistem de tobogane acoperite din Europa Centrală, accesibil pe tot parcursul anului.",
            "Aproape 100% din necesarul de energie electrică al complexului este asigurat prin panouri fotovoltaice proprii.",
            "Există peste 50 de zone de activități diferite, variind de la parcuri acvatice până la demonstrații cu catapulte medievale.",
            "La fermă trăiesc numeroase rase de animale tradiționale maghiare, precum porcii Mangalița și oile Racka.",
            "Restaurantul propriu utilizează ingrediente proaspete produse local pentru a oferi vizitatorilor gustul autentic al regiunii Somogy.",
            "În „Sala Tradițiilor”, copiii pot învăța procesul tradițional de coacere a pâinii în cuptor pe lemne.",
            "Ferma rămâne deschisă în toate anotimpurile, adaptându-și programul cu activități specifice pentru Crăciun sau sărbătorile de toamnă."
        ]
    },
    "agriculture-balatoni-halaszat-extra": {
        "description": "Pescuitul la Balaton este o tradiție milenară care a definit stilul de viață și cultura comunităților din jurul celui mai mare lac din Europa Centrală. Încă din epoca romană, lacul a fost renumit pentru bogăția sa piscicolă, șalăul (süllő) fiind considerat pe drept cuvânt „regele Balatonului” datorită gustului său fin. Pescuitul tradițional se baza în trecut pe utilizarea unor bărci specifice cu fund plat și a plaselor împletite manual, tehnici transmise cu sfințenie din generație în generație. Astăzi, activitatea se concentrează pe gestionarea durabilă a resurselor acvatice pentru a menține echilibrul ecologic și pentru a asigura viitorul speciilor native. De-a lungul țărmurilor pot fi vizitate centre de pescuit și muzee locale care prezintă evoluția acestui meșteșug. Pescuitul sportiv a devenit de asemenea o componentă esențială a turismului regional, atrăgând anual mii de pasionați. Gastronomia locală este de neconceput fără preparatele din pește proaspăt, ciorba de pește de Balaton fiind o specialitate obligatorie pentru orice vizitator.",
        "facts": [
            "Șalăul este cel mai apreciat pește din lac, fiind exportat în trecut chiar și la curțile regale din Europa pentru calitatea sa.",
            "În trecut, pe Balaton se practica „pescuitul la gheață”, prin care plasele erau trase prin copăci săpate în suprafața înghețată a lacului.",
            "În apele Balatonului trăiesc peste 40 de specii de pești, inclusiv anghile, plătică și exemplare uriașe de crap.",
            "Compania „Balatoni Halgazdálkodási Zrt.” este entitatea responsabilă pentru popularea anuală a lacului și protejarea habitatelor.",
            "În orașul Keszthely se află Muzeul Balatonului, care găzduiește o secțiune extinsă dedicată istoriei și uneltelor de pescuit.",
            "Ambarcațiunile tradiționale ale pescarilor de pe lac erau construite fără chilă, permițând navigarea în zonele foarte puțin adânci de lângă mal.",
            "Anual se introduc sute de tone de puiet de pește pentru a compensa impactul pescuitului sportiv și a asigura regenerarea stocurilor.",
            "Festivalurile dedicate peștelui organizate în orașele din jurul lacului sunt evenimente culturale majore cu muzică, dans și degustări culinare."
        ]
    },
    "industry-kaposvari-cukorgyar-extra": {
        "description": "Fabrica de Zahăr din Kaposvár este în prezent singura unitate de procesare a sfeclei de zahăr care mai funcționează în Ungaria, reprezentând un pilon strategic al industriei alimentare naționale. Această fabrică cu o tradiție îndelungată procesează în fiecare an cantități uriașe de sfeclă de zahăr livrată de agricultorii din întreaga regiune a Transdanubiei de Sud. De la înființarea sa, unitatea a beneficiat de modernizări tehnologice constante pentru a rămâne competitivă și eficientă pe piața europeană. Un aspect remarcabil și inovator este rolul de pionierat al fabricii în domeniul sustenabilității: aici funcționează una dintre cele mai mari instalații de biogaz din Europa, care transformă reziduurile din producția de zahăr în energie regenerabilă. Această abordare permite fabricii să fie aproape complet autonomă din punct de vedere energetic. Unitatea nu doar asigură locuri de muncă pentru comunitatea locală, ci garantează și prezența zahărului autohton de calitate pe mesele consumatorilor maghiari.",
        "facts": [
            "Fabrica de zahăr din Kaposvár a fost înființată în anul 1894 și a reușit să supraviețuiască ambelor războaie mondiale.",
            "În timpul „campaniei de toamnă”, fabrica funcționează la foc continuu, procesând până la 7.000 de tone de sfeclă pe zi.",
            "Producția anuală a fabricii se ridică la aproximativ 100.000 de tone de zahăr cristal destinat consumului intern și industrial.",
            "Instalația integrată de biogaz acoperă peste 80% din necesarul de energie primară al procesului de producție de zahăr.",
            "Din resturile vegetale rezultate în urma extracției zahărului se produc peleți nutritivi utilizați ca furaje de înaltă calitate pentru animale.",
            "Compania investește continuu în sisteme digitale de monitorizare pentru a reduce consumul de apă și a minimiza impactul asupra mediului.",
            "Fabrica este unul dintre cei mai mari contribuabili la bugetul local al orașului Kaposvár și un susținător activ al sportului regional.",
            "În incinta fabricii se află un mic muzeu care documentează istoria îndelungată a producției de zahăr in Ungaria."
        ]
    },
    "historical-nyirbatori-templom-extra": {
        "description": "Biserica Reformată din Nyírbátor este una dintre cele mai valoroase și impunătoare capodopere ale stilului gotic târziu din nord-estul Ungariei. Construită la sfârșitul secolului al XV-lea la comanda influentei familii nobiliare Báthory, această biserică de tip hală impresionează prin dimensiunile sale monumentale și prin bolta sa în rețea realizată cu o măiestrie tehnică desăvârșită. Un element arhitectural distinctiv și celebru este turnul clopotniță din lemn situat în imediata apropiere, ridicat în secolul al XVII-lea, fiind considerat unul dintre cele mai înalte și vechi turnuri de acest tip din țară. Interiorul bisericii adăpostește sculpturi valoroase din perioada Renașterii și servește ca loc de veci pentru membri importanți ai dinastiei Báthory. Acustica spațiului vast este deosebită, făcând din acest lăcaș un loc preferat pentru concerte de muzică sacră. Ca simbol al Reformei maghiare, Nyírbátor atrage vizitatori dornici să descopere legătura profundă dintre istorie, credință și perfecțiunea arhitecturii medievale.",
        "facts": [
            "Biserica a fost ridicată între anii 1488 și 1511 la inițiativa lui István Báthory, voievodul Transilvaniei, după o victorie importantă.",
            "Bolta în rețea de pe plafon este considerată unul dintre cele mai frumoase exemple de sculptură în piatră din perioada goticului maghiar.",
            "Clopotnița din lemn are o înălțime de 30 de metri și a fost construită integral prin îmbinări de lemn, fără a utiliza cuie de fier.",
            "În interior se poate admira sarcofagul lui István Báthory realizat din marmură roșie de o mare finețe artistică.",
            "Lăcașul a fost inițial catolic, fiind transformat în biserică reformată în secolul al XVI-lea, în perioada răspândirii protestantismului.",
            "Ferestrele înalte păstrează fragmente originale de muluri gotice, care permit luminii să pătrundă spectaculos în nava principală.",
            "Familia Báthory a utilizat această biserică drept capelă de curte și panteon familial timp de mai multe generații.",
            "În perioada medievală, orașul Nyírbátor a reprezentat unul dintre cele mai importante centre religioase și politice ale regiunii Szabolcs."
        ]
    },
    "historical-mariapocs-kegytemplom-extra": {
        "description": "Biserica din Máriapócs este cel mai important loc de pelerinaj greco-catolic din Ungaria și un centru spiritual de importanță europeană. Localitatea a devenit celebră în întreaga lume în anul 1696, când icoana Sfintei Fecioare din mica biserică de lemn a început să verse lacrimi, eveniment documentat de autoritățile vremii. Astăzi, impunătoarea bazilică barocă adăpostește o copie a icoanei originale, despre care se spune că a plâns, de asemenea, de mai multe ori de-a lungul timpului. Anual, sute de mii de pelerini de diverse confesiuni sosesc aici pentru a se ruga și a căuta alinare sufletească sau vindecare. Iconostasul monumental și decorul baroc bogat al interiorului creează o atmosferă de profundă evlavie și liniște. Vizita Papei Ioan Paul al II-lea în anul 1991 a subliniat rolul de „punte” pe care Máriapócs îl joacă între tradițiile creștine de Răsărit și cele de Apus, fiind un simbol viu al credinței și al unității spirituale.",
        "facts": [
            "Primul miracol al lăcrimării icoanei a fost documentat oficial pe 4 noiembrie 1696 și a durat mai multe zile.",
            "Icoana originală a fost mutată la Viena din ordinul împăratului Leopold I și se află în prezent în Catedrala Sfântul Ștefan (Stephansdom).",
            "Actuala biserică de pelerinaj în stil baroc a fost construită în secolul al XVIII-lea pentru a găzdui numărul tot mai mare de credincioși.",
            "Localitatea Máriapócs a fost ridicată la rangul de „Basilica Minor” în anul 1948 de către Papa Pius al XII-lea.",
            "Iconostasul bisericii este o capodoperă a artei baroce maghiare, prezentând numeroase figuri de sfinți și scene biblice pictate.",
            "Sanctuarul este considerat lăcașul național de cult pentru comunitatea greco-catolică din Ungaria și regiunile limitrofe.",
            "Există o tradiție veche prin care mulți pelerini parcurg ultimii metri până la icoana făcătoare de minuni în genunchi, in semn de smerenie.",
            "În incinta bisericii sunt păstrate numeroase obiecte votive lăsate de pelerinii care susțin că au primit ajutor divin în acest loc."
        ]
    },
    "animal-habitat-nyiregyhazi-allatpark-extra": {
        "description": "Grădina Zoologică din Nyíregyháza, cunoscută și sub numele de Sóstó Zoo, este considerată una dintre cele mai spectaculoase și moderne grădini zoologice din Europa. Întinsă pe o suprafață de 30 de hectare într-o pădure de stejari, aceasta oferă animalelor habitate spațioase care imită cu fidelitate mediul lor natural. Atracția centrală a parcului este „Piramida Verde”, o clădire monumentală care adăpostește un oceanariu cu un tunel de sticlă sub acvatic și o casă a pădurii tropicale luxuriante. Vizitatorii pot călători virtual pe toate continentele, de la savana africană plină de girafe și lei, până la regiunile polare unde trăiesc urși polari. Grădina este renumită pentru succesul său in conservarea speciilor rare, precum tigrul alb sau dragonul de Komodo. Combinația dintre diversitatea faunei, cadrul botanic deosebit și programele educaționale interactive transformă vizita la Nyíregyháza într-o aventură de neuitat pentru toate vârstele.",
        "facts": [
            "Sóstó Zoo a fost votată de mai multe ori drept cea mai bună grădină zoologică din Europa în categoria sa de dimensiune.",
            "Găzduiește peste 5.000 de animale din aproximativ 500 de specii diferite provenind din toate colțurile lumii.",
            "Bazinul cu rechini din „Piramida Verde” are o capacitate de 500.000 de litri de apă și oferă o perspectivă unică asupra prădătorilor marini.",
            "Grădina Zoologică din Nyíregyháza a realizat în premieră europeană reproducerea în captivitate a unui elefant african.",
            "Parcul este organizat în zone geografice tematice, facilitând înțelegerea biodiversității globale de către vizitatori.",
            "În incinta grăinii funcționează un hotel tematic care permite turiștilor să experimenteze un safari pe durata mai multor zile.",
            "Instituția participă activ la peste 50 de programe internaționale de salvare și reintroducere a speciilor amenințate cu dispariția.",
            "Pădurea de stejari bătrâni oferă un microclimat plăcut și multă umbră chiar și în zilele caniculare de vară."
        ]
    },
    "industry-lego-nyiregyhaza-extra": {
        "description": "Fabrica LEGO din Nyíregyháza este una dintre cele mai moderne și importante unități de producție ale grupului LEGO la nivel mondial. Pe o suprafață vastă, aici se produc zilnic milioane de piese colorate și produse din gama DUPLO destinate piețelor internaționale. Fabrica reprezintă un model de eficiență industrială sustenabilă, utilizând tehnologii de automatizare de ultimă generație în toate etapele procesului, de la turnarea prin injecție până la ambalare și expediere. Locația include și un centru logistic gigantic, fiind unul dintre cele mai mari depozite complet automatizate din Ungaria. Compania este cel mai important angajator privat din regiunea Szabolcs, investind masiv în formarea profesională a echipei sale și in programe educaționale locale. Un accent deosebit este pus pe sustenabilitate, prin utilizarea energiei regenerabile și a sistemelor avansate de reciclare a plasticului, demonstrând că producția de masă poate fi prietenoasă cu mediul.",
        "facts": [
            "Fabrica a fost deschisă oficial în anul 2014 și a trecut prin mai multe etape succesive de extindere masivă.",
            "Anual, miliarde de elemente LEGO sunt produse aici cu o precizie geometrică de neegalat pentru a asigura compatibilitatea perfectă.",
            "Unitatea utilizează energie solară proprie și sisteme avansate de filtrare pentru a reduce consumul de resurse naturale.",
            "Nyíregyháza este locul unde sunt produse aproape toate piesele DUPLO vândute în întreaga lume pentru copiii mici.",
            "Depozitul cu rafturi înalte din centrul logistic este operat în totalitate de roboți pentru o eficiență maximă a distribuției.",
            "Standardele de calitate sunt atât de stricte încât marja de eroare acceptată pentru o piesă este de doar câțiva micrometri.",
            "Compania susține programele educaționale de tip STEM în școlile și universitățile locale pentru a încuraja inovația tehnică.",
            "Suprafața totală de producție depășește 160.000 de metri pătrați, fiind un oraș industrial în sine la marginea orașului."
        ]
    },
    "agriculture-szabolcsi-alma-extra": {
        "description": "Mărul din regiunea Szabolcs-Szatmár-Bereg este un produs renumit la nivel european, fiind declarat „Hungarikum” și reprezentând un standard al calității pomicole maghiare. Solurile fertile de loess și microclimatul specific din nord-estul Ungariei oferă condiții ideale pentru cultivarea pomilor fructiferi. Cel mai celebru soi este „Ionatan” de Szabolcs, care dezvoltă aici o aromă intensă și o culoare roșie vibrantă, fiind foarte căutat atât pe piața internă, cât și la export. Tradiția cultivării merilor are rădăcini adânci în regiune, fiind principala sursă de subzistență pentru mii de familii și mici producători. In livezile moderne se cultivă astăzi și numeroase soiuri noi, adaptate cerințelor pieței de consum proaspăt sau industriei sucurilor naturale. Perioada recoltei de toamnă este marcată de numeroase festivaluri locale, mărul de Szabolcs fiind nu doar un fruct sănătos, ci și un simbol al hărniciei și mândriei agricultorilor din această zonă.",
        "facts": [
            "Regiunea Szabolcs furnizează aproximativ două treimi din producția totală de mere a Ungariei în fiecare an.",
            "Cultivarea merilor la scară industrială a început în această zonă spre sfârșitul secolului al XIX-lea, înlocuind treptat alte culturi.",
            "Mărul Ionatan de Szabolcs este recunoscut pentru echilibrul perfect dintre zahăr și aciditate, fiind ideal pentru deserturi și consum direct.",
            "Fructele sunt depozitate in depozite frigorifice moderne cu atmosferă controlată pentru a fi livrate proaspete pe tot parcursul anului.",
            "Pe lângă mere, regiunea este celebră și pentru producția de prune și vișine de calitate superioară protejată.",
            "Multe plantații utilizează astăzi sisteme de irigare prin picurare controlate prin computer și plase de protecție împotriva grindinei.",
            "Mărul de Szabolcs beneficiază de o Denumire de Origine Protejată în Uniunea Europeană, garantând autenticitatea sa geografică.",
            "În fiecare an, la Nyíregyháza se organizează un mare festival al mărului pentru a celebra recolta și tradițiile pomicole locale."
        ]
    }
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

for poi_id, data in updates.items():
    # Find the POI block
    poi_pattern = rf'(id:\s*"{poi_id}",.*?\n\s+}},)'
    poi_match = re.search(poi_pattern, content, re.DOTALL)
    if not poi_match:
        continue
    
    poi_block = poi_match.group(1)
    
    # Update descriptionAdvanced
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{(.*?)\}', poi_block, re.DOTALL)
    if desc_adv_match:
        desc_inner = desc_adv_match.group(1)
        # Check if ro exists
        if 'ro:' in desc_inner:
            new_desc_inner = re.sub(r'ro:\s*".*?"', f'ro: "{data["description"]}"', desc_inner)
        else:
            # Insert ro before en: or at the end
            if 'en:' in desc_inner:
                new_desc_inner = desc_inner.replace('en:', f'ro: "{data["description"]}",\n      en:')
            else:
                # Add comma to last line if missing
                last_line = desc_inner.strip().split('\n')[-1]
                if last_line and not last_line.endswith(','):
                     new_desc_inner = desc_inner.rstrip() + ',\n      ro: "' + data["description"] + '"\n    '
                else:
                     new_desc_inner = desc_inner + '      ro: "' + data["description"] + '"\n    '
        
        poi_block = poi_block.replace(desc_inner, new_desc_inner)

    # Update factsAdvanced
    facts_adv_match = re.search(r'factsAdvanced:\s*\{(.*?)\}', poi_block, re.DOTALL)
    if facts_adv_match:
        facts_inner = facts_adv_match.group(1)
        
        new_facts_ro = 'ro: [\n'
        for f in data["facts"]:
            new_facts_ro += f'        "{f}",\n'
        new_facts_ro += '      ],'
        
        if 'ro:' in facts_inner:
            new_facts_inner = re.sub(r'ro:\s*\[.*?\]', new_facts_ro, facts_inner, flags=re.DOTALL)
        else:
            if 'en:' in facts_inner:
                new_facts_inner = facts_inner.replace('en:', f'{new_facts_ro}\n      en:')
            else:
                new_facts_inner = facts_inner + '      ' + new_facts_ro + '\n    '
        
        poi_block = poi_block.replace(facts_inner, new_facts_inner)

    content = content.replace(poi_match.group(1), poi_block)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
