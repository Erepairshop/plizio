
import re

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/belarusPoi.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define the Romanian content (same as before)
ro_content = {
    "city-minsk": {
        "desc": "Minsk, capitala Belarusului, este un oraș cu o istorie de peste 950 de ani, fiind aproape complet reconstruit după distrugerile masive din Al Doilea Război Mondial. Arhitectura orașului este dominată de stilul imperial stalinist, vizibil în special de-a lungul Bulevardului Independenței, care se întinde pe 15 kilometri. Orașul este străbătut de râul Svisloci și este cunoscut pentru numeroasele sale spații verzi și parcuri întinse, precum Parcul Gorki. Minsk servește ca principal centru politic, economic și cultural al țării, găzduind instituții importante precum Opera și Baletul Național. Identitatea sa modernă îmbină moștenirea sovietică monumentală cu dinamismul unei metropole europene contemporane.",
        "facts": [
            "Bulevardul Independenței este unul dintre cele mai lungi ansambluri arhitecturale staliniste din lume, având 15 km.",
            "Orașul a primit titlul de „Oraș Erou” în 1974 pentru rezistența sa curajoasă în timpul ocupanților naziști.",
            "Găzduiește Grădina Botanică Centrală, una dintre cele mai mari din Europa ca suprafață și diversitate.",
            "Biblioteca Națională a Belarusului, situată aici, are o formă unică de rombicuboctaedru și este un simbol al orașului."
        ]
    },
    "city-gomel": {
        "desc": "Gomel este al doilea oraș ca mărime din Belarus, situat în sud-estul țării, pe malurile pitorești ale râului Sozh. Orașul este renumit pentru ansamblul său arhitectural neoclasic, având ca piesă centrală magnificul Palat Rumyantsev-Paskevich. Istoria orașului datează din secolul al XII-lea, evoluând de-a lungul timpului întrun important nod industrial și educativ. Parcul din jurul palatului este considerat unul dintre cele mai frumoase parcuri peisagistice din Europa de Est, oferind vederi panoramice asupra râului. Deși a suferit distrugeri în timpul războiului, Gomel și-a păstrat farmecul istoric prin străzi largi și clădiri din secolul al XIX-lea. Astăzi, este un centru cultural vibrant, gazdă a numeroase festivaluri internaționale de artă.",
        "facts": [
            "Prima mențiune documentară a orașului Gomel datează din anul 1142.",
            "Ansamblul palatului și parcului Rumyantsev-Paskevich este principala atracție turistică a orașului.",
            "Gomel este un nod feroviar strategic care leagă Europa de Est de regiunea baltică.",
            "Orașul găzduiește anual festivalul internațional de artă coregrafică „Slagărul de Aur”."
        ]
    },
    "city-mogilev": {
        "desc": "Mogilev se întinde pitoresc pe malurile râului Nipru, în partea de est a Belarusului. Orașul are o istorie zbuciumată, fiind la un moment dat luat în considerare pentru a deveni noua capitală a țării. Centrul istoric impresionează prin Primăria magnific reconstruită, care servește ca simbol al autoguvernării orașului. Pe străzile înguste ale orașului vechi se găsesc numeroase edificii religioase, cum ar fi Catedrala Sfântul Stanislav, decorată cu fresce valoroase. Astăzi, Mogilev este un centru economic major, având o bază industrială solidă și tradiții culturale vii. Orașul reușește să îmbine armonios moștenirea istorică cu dezvoltarea urbană modernă.",
        "facts": [
            "În timpul Primului Război Mondial, Mogilev a fost sediul cartierului general al țarului rus Nicolae al II-lea.",
            "Primăria orașului a fost reconstruită fidel planurilor originale în anul 2008, după ce fusese distrusă anterior.",
            "Orașul este renumit pentru festivalul internațional de teatru „M.art.kontakt”, organizat anual.",
            "Piața Stelelor din centrul orașului onorează personalitățile marcante ale istoriei locale prin plăci de bronz."
        ]
    },
    "city-vitebsk": {
        "desc": "Vitebsk, situat în nord-estul Belarusului la confluența râurilor Dvina și Vitba, este considerat capitala culturală a țării. Orașul a devenit faimos în întreaga lume ca fiind locul de naștere al pictorului Marc Chagall, a cărui moștenire este prezentă la tot pasul. Orașul vechi, cu bisericile sale reconstruite și primăria impunătoare, oferă o imagine autentică a arhitecturii din nordul Belarusului. Anual, festivalul internațional de artă „Bazarul Slav” atrage mii de vizitatori și artiști din toate colțurile lumii. Vitebsk a fost, de asemenea, un centru important al mișcării de avangardă artistică de la începutul secolului al XX-lea. Atmosfera sa boemă și peisajele deluroase îi conferă un farmec aparte, adesea comparat cu cel al orașului Praga.",
        "facts": [
            "Kazimir Malevici a fondat aici celebra școală de artă UNOVIS, care a pus bazele suprematismului.",
            "Ceasul de pe turnul Primăriei din Vitebsk funcționează aproape neschimbat încă din secolul al XVIII-lea.",
            "Marc Chagall a imortalizat silueta orașului său natal în numeroase picturi celebre la nivel mondial.",
            "Festivalul „Bazarul Slav” din Vitebsk este unul dintre cele mai mari evenimente culturale din Europa de Est."
        ]
    },
    "city-grodno": {
        "desc": "Grodno, situat aproape de granița cu Polonia și Lituania, este unul dintre puținele orașe din Belarus care și-au păstrat structura istorică intactă. Orașul a fost pe vremuri reședința marilor duci lituanieni și a regilor polonezi, fapt reflectat în palatele și castelele sale magnifice. Centrul vechi este caracterizat de mănăstiri baroce, Catedrala Sfântul Francisc Xaveriu și străzi fermecătoare pavate cu piatră cubică. Grodno este considerat unul dintre cele mai verzi orașe ale țării, fiind situat idilic pe malurile râului Neman. Diversitatea culturală rezultată din proximitatea granițelor îi conferă orașului un aer european distinctiv. Este un loc unde istoria se simte vie la fiecare colț de stradă, de la bisericile medievale la teatrele moderne.",
        "facts": [
            "Grodno găzduiește atât Castelul Vechi din secolul al XIV-lea, cât și Castelul Nou din secolul al XVIII-lea.",
            "Biserica Kalozha din secolul al XII-lea este una dintre cele mai vechi structuri supraviețuitoare din Belarus.",
            "În secolul al XVIII-lea, orașul a fost un centru al Iluminismului și a găzduit una dintre primele farmacii din Europa de Est.",
            "Festivalul Internațional al Culturilor Naționale are loc aici la fiecare doi ani, celebrând diversitatea etnică."
        ]
    },
    "city-brest": {
        "desc": "Brest, situat chiar la granița cu Polonia pe malul râului Bug, servește drept o poartă importantă a Belarusului către Occident. Orașul este cunoscut la nivel mondial în special pentru Cetatea Brest, un simbol monumental al rezistenței eroice din timpul celui de-al Doilea Război Mondial. Dincolo de locurile memoriale, Brest oferă o zonă pietonală modernă, strada Sovetskaia, unde felinarele cu gaz sunt aprinse manual în fiecare seară. Orașul are o istorie evreiască bogată și a fost cândva un punct vital pentru comerțul dintre est și vest. Astăzi, Brest îmbină importanța sa istorică cu o dezvoltare urbană dinamică și un trafic de frontieră intens. Proximitatea parcului național Belovezhskaya Pushcha adaugă o dimensiune ecologică atractivității sale.",
        "facts": [
            "Uniunea de la Brest a fost semnată aici în 1596, punând bazele Bisericii Greco-Catolice Ucrainene.",
            "Gara Centrală din Brest a fost construită în secolul al XIX-lea ca una dintre cele mai luxoase din Imperiul Rus.",
            "În fiecare seară, un felinarist în uniformă istorică aprinde manual lămpile de pe strada Sovetskaia.",
            "Orașul se află la doar câțiva kilometri de Parcul Național Belovezhskaya Pushcha, sit UNESCO."
        ]
    },
    "landmark-mir-castle": {
        "desc": "Castelul Mir este un exemplu remarcabil al arhitecturii de fortificație europene, fiind inclus în Patrimoniul Mondial UNESCO. Construcția a început în secolul al XVI-lea în stil gotic polonez și a fost extinsă ulterior cu elemente renascentiste și baroce. Cele cinci turnuri distinctive și zidurile masive din cărămidă roșie și calcar alb îi conferă castelului un aspect inconfundabil. Construit inițial de familia Ilinici, castelul a intrat mai târziu în posesia puternicei familii Radziwill, care l-a transformat într-o reședință nobiliară fastuoasă. Astăzi, castelul găzduiește un muzeu bogat și este una dintre cele mai vizitate destinații turistice din Belarus. Grădinile sale frumoase și lacul adiacent completează atmosfera istorică a locului.",
        "facts": [
            "Castelul a supraviețuit numeroaselor asedii, inclusiv celor din timpul războaielor napoleoniene din 1812.",
            "Există legende despre tuneluri secrete care ar lega Castelul Mir de Castelul Nesvizh, aflat la 30 km distanță.",
            "Capela familiei Svyatopolk-Mirsky de lângă castel impresionează prin decorul său elaborat cu mozaicuri.",
            "Castelul Mir a servit drept locație pentru filmarea a numeroase producții cinematografice istorice."
        ]
    },
    "landmark-nesvizh-castle": {
        "desc": "Castelul Nesvizh a fost timp de secole reședința principală a familiei Radziwill, una dintre cele mai influente dinastii nobiliare din Europa de Est. Ansamblul este considerat cel mai frumos complex de palate din Belarus și este înscris pe lista Patrimoniului Mondial UNESCO. Arhitectura sa îmbină influențe ale Renașterii, barocului și rococoului, fiind înconjurat de un sistem vast de parcuri și iazuri. Interiorul este deosebit de impresionant, cu săli decorate fastuos, tapiserii valoroase și o bibliotecă extinsă. Biserica Corpus Christi din apropiere servește ca necropolă pentru familia Radziwill și este prima biserică barocă din regiune. Complexul reprezintă un punct de referință pentru cultura și istoria Marelui Ducat al Lituaniei.",
        "facts": [
            "Familia Radziwill deținea în Nesvizh una dintre cele mai mari colecții private de artă și arhive din regiune.",
            "Castelul a fost inițial o fortăreață cu bastioane puternice, vizibile și astăzi prin șanțurile adânci cu apă.",
            "Legenda spune că spiritul „Doamnei Negre”, Barbara Radziwill, bântuie și acum coridoarele castelului.",
            "Parcul castelului include diverse secțiuni tematice, precum grădini în stil englezesc și japonez."
        ]
    },
    "landmark-brest-fortress": {
        "desc": "Cetatea Brest este unul dintre cele mai importante situri memoriale din Europa de Est, amintind de primele zile ale invaziei germane în Uniunea Sovietică din iunie 1941. Complexul monumental include sculpturi gigantice din beton, precum monumentul „Curaj”, și obeliscul distinctiv în formă de baionetă. Cetatea a fost construită inițial în secolul al XIX-lea pe locul vechiului oraș Brest, care a fost mutat complet pentru a face loc fortificațiilor. Ruinele Palatului Alb și ale cematelor de apărare depun mărturie și astăzi despre luptele crâncene ce au avut loc aici. Pentru rezistența sa extraordinară, cetatea a primit titlul onorific de „Cetate Erou”. Este un loc de pelerinaj și memorie care atrage anual milioane de vizitatori.",
        "facts": [
            "Apărătorii cetății au rezistat în vara anului 1941 mult mai mult decât prevăzuse planificarea militară germană.",
            "Poarta principală de intrare în cetate are forma unei stele uriașe tăiate direct în blocul de beton.",
            "În incinta cetății se află Biserica Sfântul Nicolae, care a supraviețuit războiului în ciuda daunelor grave.",
            "În fiecare an, pe 22 iunie, are loc o ceremonie solemnă de comemorare a începerii războiului."
        ]
    },
    "nature-belovezhskaya-pushcha": {
        "desc": "Parcul Național Belovezhskaya Pushcha reprezintă una dintre ultimele și cele mai mari părți rămase din pădurea virgină imensă care acoperea cândva întreaga Câmpie Europeană. Teritoriul se întinde de-a lungul graniței dintre Belarus și Polonia și este protejat ca sit al Patrimoniului Mondial UNESCO. Aici se găsesc stejari seculari, unii având o vechime de peste 600 de ani, și o biodiversitate impresionantă. Simbolul parcului este bizonul european (zimbru), care poate fi admirat aici în mediul său natural. Pe lângă natura neatinsă, parcul găzduiește și reședința oficială din Belarus a lui Moș Ger (Ded Moroz). Este o destinație esențială pentru ecoturism și conservarea speciilor rare.",
        "facts": [
            "În Belovezhskaya Pushcha a fost semnat în 1991 acordul care a pecetluit sfârșitul Uniunii Sovietice.",
            "Unii arbori din parc au o circumferință a trunchiului de peste doi metri, fiind monumentenaturale veritabile.",
            "Parcul este casa a peste 900 de specii de plante și a sutelor de specii de vertebrate.",
            "Este cea mai veche rezervație naturală din Europa, statutul său de protecție datând din secolul al XIV-lea."
        ]
    },
    "nature-braslav-lakes": {
        "desc": "Parcul Național Lacurile Braslav, situat în nordul Belarusului, este un peisaj glaciar unic, adesea supranumit „Perla Belarusului”. Zona cuprinde peste 30 de lacuri interconectate, separate de dealuri blânde și păduri dese de conifere și foioase. Regiunea este un paradis pentru iubitorii de natură, pescari și turiștii care caută liniște și aer curat. Cel mai mare lac, Snudy, impresionează prin numeroasele sale insule și apa sa extrem de limpede. Orașul istoric Braslav este așezat pitoresc pe o peninsulă între lacuri, oferind vederi spectaculoase asupra întregii regiuni. Parcul protejează habitate critice pentru multe specii de păsări rare și oferă facilități excelente pentru turismul ecologic.",
        "facts": [
            "Lacurile s-au format acum aproximativ 18.000 de ani în urma retragerii masivilor ghețari scandinavi.",
            "Muntele Mayak este considerat unul dintre cele mai bune puncte de observație din țară asupra zonei lacustre.",
            "În parcul național cuibăresc specii rare de păsări, cum ar fi lebăda mută și vulturul pescar.",
            "Multe lacuri sunt legate prin canale înguste, fiind ideale pentru excursii de mai multe zile cu caiacul."
        ]
    },
    "nature-lake-narach": {
        "desc": "Lacul Naroci este cel mai mare lac din Belarus și formează inima unui parc național de importanță majoră. Apa sa este renumită pentru puritatea excepțională și malurile pitorești cu plaje nisipoase și păduri de pini. Regiunea din jurul lacului are o lungă tradiție ca zonă de tratament și recreere, găzduind numeroase sanatorii și hoteluri de wellness. În timpul Primului Război Mondial, lacul a fost scena unor lupte crâncene, evenimente comemorate astăzi prin diverse monumente în zonă. Astăzi, lacul este o destinație populară, în special vara, pentru navigație, înot și relaxare. Peisajul său liniștit și biodiversitatea bogată îl fac un loc preferat pentru vacanțele în natură.",
        "facts": [
            "Lacul Naroci are o suprafață de aproximativ 80 de kilometri pătrați și o adâncime maximă de 25 de metri.",
            "Apa lacului este atât de transparentă încât fundul poate fi văzut uneori până la o adâncime de zece metri.",
            "În apropiere se află satul Nanasy, un centru etnografic ce prezintă viața rurală tradițională belarusă.",
            "Lacul este un habitat important pentru anghila europeană, specie foarte apreciată în gastronomia locală."
        ]
    },
    "city-bobruisk": {
        "desc": "Bobruisk, situat pe malul râului Berezina, este unul dintre cele mai vechi orașe industriale din Belarus, având un caracter unic. Orașul este cunoscut în principal pentru cetatea sa monumentală din secolul al XIX-lea, considerată o capodoperă a arhitecturii militare. Din punct de vedere istoric, Bobruisk a fost un centru major al vieții evreiești, fapt care a influențat profund arhitectura și cultura locală. În centrul orașului se găsesc numeroase clădiri caracteristice din cărămidă roșie și monumente care atestă trecutul său bogat. Un simbol amuzant al orașului este monumentul castorului, animalul care a dat numele localității. Astăzi, orașul este un amestec interesant de istorie militară și industrie modernă.",
        "facts": [
            "Cetatea Bobruisk a rezistat unui asediu de patru luni al trupelor lui Napoleon în anul 1812.",
            "În prima jumătate a secolului al XIX-lea, orașul era considerat unul dintre cele mai bine fortificate locuri din Europa.",
            "Bobruisk este menționat în celebrul roman „Vițelul de aur” de Ilf și Petrov ca fiind un oraș foarte cultivat.",
            "Statuia castorului din centru este un talisman local: se spune că atingerea lanțului ceasului său aduce prosperitate."
        ]
    },
    "city-baranovichi": {
        "desc": "Baranovichi este un oraș relativ tânăr din vestul Belarusului, a cărui ascensiune este strâns legată de dezvoltarea rețelei feroviare în secolul al XIX-lea. Ca nod feroviar strategic, orașul s-a transformat rapid dintr-o mică așezare într-un centru industrial semnificativ. În timpul Primului Război Mondial, Baranovichi a fost scena unor lupte intense și a servit temporar drept sediu al cartierului general rus. Astăzi, orașul este un centru vibrant ce îmbină arhitectura industrială istorică cu zone rezidențiale moderne. Un punct de atracție special pentru pasionații de tehnologie este Muzeul Căilor Ferate, care deține o colecție impresionantă de locomotive istorice. Orașul servește de asemenea ca un important centru educațional regional.",
        "facts": [
            "În Baranovichi s-au intersectat pentru prima dată liniile ferate importante Moscova-Varșovia și Vilnius-Rovno.",
            "Muzeul feroviar din oraș este primul de acest gen din Belarus și expune peste 40 de exponate istorice.",
            "În timpul Primului Război Mondial, la Baranovichi a fost înființată prima stație radio a armatei ruse.",
            "Catedrala ortodoxă din oraș este faimoasă pentru mozaicurile sale spectaculoase provenite de la Catedrala Alexander Nevsky din Varșovia."
        ]
    },
    "city-borisov": {
        "desc": "Borisov este situat la nord-est de Minsk, pe malul râului Berezina, și este legat indisolubil de istoria războaielor napoleoniene. În anul 1812, în apropierea orașului a avut loc celebra bătălie de la Berezina, unde retragerea lui Napoleon din Rusia s-a transformat într-un dezastru. Astăzi, Borisov este un oraș industrial modern, dominat de industria constructoare de mașini și de cea alimentară. Pasionații de fotbal cunosc orașul datorită clubului BATE Borisov, care evoluează regulat în competițiile internaționale europene. În ciuda profilului industrial, împrejurimile orașului oferă spații naturale atractive în luncile râului Berezina, ideale pentru recreere și pescuit. Arhitectura orașului include și monumente religioase valoroase, precum Catedrala Învierii.",
        "facts": [
            "Resturile podurilor pe care a fugit Napoleon in 1812 sunt încă studiate arheologic în satul Studianka de lângă Borisov.",
            "Stadionul „Borisov-Arena” este o construcție modernă premiată, a cărei formă amintește de o structură celulară organică.",
            "Orașul a fost fondat încă din anul 1102 de către prințul Boris Vseslavich de Polotsk.",
            "Catedrala Învierii din Borisov a fost construită în stil pseudo-rus din cărămidă roșie la sfârșitul secolului al XIX-lea."
        ]
    },
    "city-pinsk": {
        "desc": "Pinsk este considerat capitala neoficială a regiunii Polesie din sudul Belarusului, fascinând prin farmecul său istoric și locația unică. Orașul este situat la confluența râurilor Pina și Pripyat și posedă unul dintre cele mai bine conservate centre vechi din țară. Bisericile baroce magnifice, cum ar fi Colegiul Iezuit și Mănăstirea Franciscană, stau mărturie pentru importanța sa trecută ca centru religios și cultural. Faleza râului invită la plimbări lungi și oferă vederi panoramice asupra peisajelor vaste de mlaștină și apă care înconjoară orașul. Pinsk are rădăcini adânci în istoria evreiască, fiind locul de origine al multor învățați și personalități marcante. Atmosfera sa liniștită și patrimoniul arhitectural bogat îl fac o destinație turistică deosebită.",
        "facts": [
            "Pinsk este adesea numit „Veneția Belarusului” datorită numeroaselor căi navigabile și canale care îl înconjoară.",
            "Colegiul Iezuit din Pinsk a fost în secolul al XVII-lea una dintre cele mai importante instituții de învățământ din Europa de Est.",
            "Chaim Weizmann, primul președinte al statului Israel, a urmat cursurile gimnaziului din Pinsk.",
            "Orașul este renumit pentru navigația tradițională pe râu, care era principala legătură în regiunea Polesie."
        ]
    },
    "city-orsha": {
        "desc": "Orsha este situat în estul Belarusului, pe cursul superior al râului Nipru, fiind un nod de transport vital între axele nord-sud și est-vest. Orașul are o istorie de aproape o mie de ani și, datorită locației sale strategice, a fost adesea scena unor bătălii istorice importante. Imaginea sa arhitecturală este marcată de mănăstiri și biserici vechi, printre care se numără Mănăstirea Kutein, renumită odinioară pentru arta tipografică. Astăzi, Orsha este un centru major al industriei textile, specializat în prelucrarea inului, o plantă cu o lungă tradiție în Belarus. Orașul reușește să își păstreze identitatea istorică de centru comercial, în timp ce se dezvoltă ca un punct industrial modern.",
        "facts": [
            "În anul 1514 a avut loc aici Bătălia de la Orsha, un eveniment major în istoria militară a Europei de Est.",
            "Mănăstirea Kutein a găzduit în secolul al XVII-lea una dintre cele mai mari tipografii din Marele Ducat al Lituaniei.",
            "Celebrul psiholog Lev Vîgotski s-a născut la Orsha, teoriile sale fiind predate și astăzi în întreaga lume.",
            "Orașul este cunoscut la nivel național pentru combinatul său de in, ale cărui produse sunt exportate în numeroase țări."
        ]
    },
    "landmark-polotsk-cathedral": {
        "desc": "Catedrala Sfânta Sofia din Polotsk este unul dintre cele mai vechi și mai semnificative edificii religioase din Belarus. Construită inițial în secolul al XI-lea pe modelul catedralelor Sofia din Kiev și Constantinopol, ela simboliza puterea Principatului de Polotsk. După o distrugere severă în secolul al XVIII-lea, catedrala a fost reconstruită în stilul baroc de Vilnius, păstrând totodată fragmente din zidurile și fundațiile originale. Astăzi, clădirea servește ca muzeu de istorie a arhitecturii și ca sală de concerte, fiind celebră pentru acustica sa excepțională și concertele de orgă. Situată pe o colină deasupra râului Dvina, catedrala are o prezență maiestuoasă care domină peisajul orașului Polotsk.",
        "facts": [
            "În fundațiile catedralei pot fi văzute și astăzi porțiuni din zidăria originală datând din secolul al XI-lea.",
            "Aceasta a fost prima clădire din piatră ridicată pe teritoriul actual al Republicii Belarus.",
            "În fiecare an, catedrala găzduiește un festival internațional de muzică de orgă.",
            "Orașul Polotsk este considerat centrul geografic al Europei, fapt marcat printr-un monument local."
        ]
    },
    "landmark-khatyn-memorial": {
        "desc": "Memorialul Khatyn este un monument profund emoționant dedicat destinului tragic al populației belaruse în timpul ocupației germane din Al Doilea Război Mondial. A fost ridicat pe locul satului Khatyn, care a fost distrus complet împreună cu toți locuitorii săi în martie 1943. Arhitectura complexului este simbolică și minimalistă: clopote așezate pe stâlpi de beton bat la fiecare 30 de secunde pe locurile unde se aflau odinioară casele. „Cimitirul satelor” din cadrul memorialului amintește de sute de alte localități care au suferit aceeași soartă tragică. Khatyn nu este un loc de celebrare, ci un avertisment dureros despre ororile războiului și un simbol al suferinței naționale belaruse.",
        "facts": [
            "Numele Khatyn este adesea confundat cu masacrul de la Katyn, deși istoric sunt două evenimente diferite.",
            "Singura sculptură mare din complex îl înfățișează pe Iosif Kaminski, unicul supraviețuitor al masacrului, ținânduși fiul mort.",
            "Flacăra eternă arde în fața a trei mesteacăni, un al patrulea loc rămânând gol pentru a simboliza că fiecare al patrulea belarus a murit în război.",
            "Memorialul a fost deschis în 1969 și este considerat un exemplu magistral de cultură a memoriei."
        ]
    },
    "landmark-stalin-line": {
        "desc": "Linia Stalin este un vast muzeu în aer liber dedicat tehnicii militare și fortificațiilor, situat la aproximativ 30 de kilometri nord-vest de Minsk. Complexul se bazează pe liniile defensive istorice construite în anii 1930 pentru a proteja granița vestică a Uniunii Sovietice. Vizitatorii pot explora aici buncăre (DOT-uri) restaurate fidel, tranșee și obstacole antitanc. De asemenea, muzeul găzduiește o colecție impresionantă de tancuri, avioane și piese de artilerie din diverse epoci. Regulat, aici sunt organizate reconstituiri istorice spectaculoase ale bătăliilor din Al Doilea Război Mondial, atrăgând numeroși pasionați de istorie militară și familii.",
        "facts": [
            "Multe buncăre de beton sunt proiectate astfel încât să reziste chiar și loviturilor directe de artilerie grea.",
            "Muzeul oferă vizitatorilor posibilitatea rară de a merge cu tancuri istorice pe un traseu special amenajat.",
            "Linia Stalin se întindea inițial pe 1.200 de kilometri, de la Marea Baltică până la Marea Neagră.",
            "În colecție se află faimosul tanc T-34, considerat unul dintre cele mai bune tancuri ale celui de-al Doilea Război Mondial."
        ]
    },
    "landmark-national-library": {
        "desc": "Biblioteca Națională a Belarusului din Minsk este un reper arhitectural modern și un simbol al progresului tehnologic al țării. Clădirea, deschisă în 2006, are forma unui rombicuboctaedru și este complet placată cu sticlă. Cu o înălțime de 73 de metri și 23 de etaje, aceasta oferă spațiu pentru peste 10 milioane de unități media. Un aspect spectaculos este iluminarea nocturnă, întreaga fațadă funcționând ca un ecran LED gigant care afișează modele și culori schimbătoare. În interior se află săli de lectură ultramoderne, un muzeu al cărții rare și o platformă de observație care oferă o panoramă superbă asupra întregului oraș.",
        "facts": [
            "Forma geometrică a bibliotecii simbolizează un diamant șlefuit, reprezentând valoarea cunoașterii umane.",
            "Întreaga clădire își poate schimba culoarea și aspectul exterior în câteva secunde datorită sistemului LED inteligent.",
            "Un sistem de transport automatizat livrează cărțile comandate direct în sălile de lectură în containere speciale.",
            "Biblioteca deține una dintre cele mai importante colecții de tipărituri ale umanistului belarus Francysk Skaryna."
        ]
    },
    "nature-pripyatsky-np": {
        "desc": "Parcul Național Pripyatsky, situat în sudul Belarusului, cuprinde unul dintre cele mai fascinante peisaje de mlaștină și râu din Europa, supranumit „Amazonul belarus”. Zona este dominată de luncile vaste ale râului Pripyat, care sunt inundate periodic pe suprafețe mari, creând un ecosistem unic și dinamic. Pădurile dense de stejari seculari, zonele umede și nenumăratele brațe secundare ale râului oferă refugiu unor specii de animale extrem de rare. Parcul este un adevărat paradis pentru ornitologi, aflându-se pe principala rută de migrație a multor păsări de apă. În satele din jur s-a păstrat cultura tradițională a regiunii Polesie, strâns legată de viața pe apă și de resursele pădurii.",
        "facts": [
            "Parcul Național găzduiește unele dintre cele mai mari zone de mlaștină neîntrerupte de pe continentul european.",
            "În timpul inundațiilor de primăvară, lățimea râului Pripyat poate ajunge în unele locuri până la 30 de kilometri.",
            "În parc trăiesc peste 250 de specii de păsări, inclusiv acvila țipătoare mică și barza neagră.",
            "Localitatea Lyaskovichi servește drept centru administrativ și găzduiește un muzeu modern al naturii."
        ]
    },
    "city-mazyr": {
        "desc": "Mazyr este situat în sudul Belarusului și se distinge prin topografia sa deluroasă, oferind un contrast puternic față de regiunile predominant plane ale țării. Orașul se întinde pitoresc pe înălțimile de pe malul drept al râului Pripyat, oferind numeroase puncte de belvedere spectaculoase. De importanță istorică majoră este Dealul Castelului, unde a fost reconstruită o fortăreață medievală din lemn, oferind o perspectivă asupra istoriei defensive a regiunii. Deși Mazyr este astăzi un centru vital al industriei petrochimice, orașul și-a păstrat mult din farmecul său natural și istoric. „Râpile din Mazyr” din apropiere sunt un monument al naturii protejat, ideale pentru drumeții în peisaje neobișnuite pentru Belarus.",
        "facts": [
            "Datorită dealurilor abrupte, Mazyr deține unul dintre puținele centre de schi din țară cu zăpadă artificială.",
            "Orașul găzduiește una dintre cele mai mari rafinării de petrol din Europa de Est, alimentată prin conducta Druzhba.",
            "Mazyr a fost istoric un centru religios important, găzduind numeroase mănăstiri ale diferitelor ordine călugărești.",
            "Tramvaiul din Mazyr trece prin zone împădurite pitorești, legând centrul orașului de zonele industriale periferice."
        ]
    },
    "city-salihorsk": {
        "desc": "Salihorsk este unul dintre cele mai tinere orașe din Belarus, fiind fondat în anii 1950 ca urmare a descoperirii unor zăcăminte imense de sare de potasiu. Orașul a fost proiectat ca o așezare modernă planificată pentru mineri și familiile lor, caracterizându-se prin bulevarde largi și numeroase spații verzi. Coloana vertebrală economică a orașului este compania Belaruskali, unul dintre cei mai mari producători mondiali de îngrășăminte cu potasiu. O particularitate unică a orașului este utilizarea galeriilor de sare epuizate în scopuri medicale, în special pentru tratarea afecțiunilor respiratorii într-o clinică subterană specială. În ciuda originilor sale industriale, Salihorsk oferă oportunități atractive de petrecere a timpului liber pe malul lacului de acumulare adiacent.",
        "facts": [
            "În Salihorsk se află singura clinică de speleoterapie din regiune, situată la o adâncime de 420 de metri într-o mină de sare.",
            "Haldele de steril ale minelor de potasiu înconjoară orașul, creând un peisaj montan artificial numit „Terricoanele din Salihorsk”.",
            "Salihorsk are unul dintre cele mai ridicate venituri pe cap de locuitor din țară datorită industriei miniere profitabile.",
            "Rezervorul de apă Salihorsk este o locație populară pentru navigație cu pânze și pescuit sportiv."
        ]
    },
    "city-lida": {
        "desc": "Lida, situat în vestul Belarusului, este un oraș încărcat de istorie, al cărui simbol principal este castelul medieval masiv din secolul al XIV-lea. Fortăreața a fost ridicată de Marele Duce lituanian Gediminas ca parte a unei linii defensive împotriva Cavalerilor Teutoni și este astăzi un centru pentru festivaluri istorice. Pe lângă trecutul său militar, Lida este renumit la nivel național pentru tradiția sa în fabricarea berii, berea produsă aici fiind considerată una dintre cele mai bune din țară. Orașul îmbină armonios moștenirea sa medievală cu o dezvoltare industrială modernă diversificată. În centrul orașului se pot vizita și edifice religioase interesante, precum Biserica Sfântul Iosif, construită în stil baroc.",
        "facts": [
            "Castelul Lida are o formă aproape pătrată și a fost construit strategic pe o insulă artificială între două râuri.",
            "Compania „Lidskoe Pivo” produce bere încă din 1876, fiind una dintre cele mai vechi fabrici de bere active din țară.",
            "Lida este un centru major pentru producția de mașini agricole, în special pentru faimoasele combine de recoltat „Lida”.",
            "În fiecare an, festivalul „Lidbeer” are loc lângă castel, celebrând muzica și arta locală a fabricării berii."
        ]
    },
    "nature-berezinsky-reserve": {
        "desc": "Rezervația Biosferei Berezinsky este o zonă naturală unică situată în nordul Belarusului, făcând parte din rețeaua UNESCO încă din 1979. Aceasta cuprinde un mozaic vast de păduri virgine, mlaștini întinse și numeroase lacuri și râuri neatinse de activitatea umană. Rezervația este singurul loc din Europa unde pot fi găsite simultan toate cele „Cinci Mari” specii ale faunei europene: zimbrul, ursul, lupul, râsul și elanul. O caracteristică specială este Canalul Berezina, un sistem istoric de căi navigabile din secolul al XVIII-lea care oferă peisajului un caracter romantic. Rezervația este destinată în principal cercetării științifice și protecției biodiversității, oferind totodată oportunități limitate pentru ecoturism responsabil.",
        "facts": [
            "Peste 60% din toate tipurile de comunități de mlaștină europene sunt reprezentate în Rezervația Berezinsky.",
            "Rezervația găzduiește una dintre cele mai mari populații de urs brun din întreaga țară.",
            "Vizitatorii pot învăța despre flora și fauna locală la Muzeul Naturii din localitatea Domazheritsy.",
            "O potecă educațională specială traversează zonele de mlaștină, oferind perspective asupra acestui ecosistem fragil."
        ]
    },
    "landmark-kalozha-church": {
        "desc": "Biserica Kalozha din Grodno, cunoscută oficial sub numele de Biserica Sfinții Boris și Gleb, este o bijuterie arhitecturală unică și una dintre cele mai vechi structuri din Belarus. Ridicată în secolul al XII-lea pe malul înalt al râului Neman, ea reprezintă școala specifică de arhitectură din Grodno. Caracteristica sa cea mai distinctivă este zidăria exterioară decorată cu pietre colorate șlefuite și plăci ceramice în formă de cruce, oferindu-i un aspect inconfundabil. În secolul al XIX-lea, o parte a bisericii s-a prăbușit în râu din cauza unei alunecări de teren, fiind ulterior înlocuită cu un perete de lemn. Biserica rămâne un lăcaș de cult activ și este un candidat important pentru includerea în Patrimoniul Mondial UNESCO.",
        "facts": [
            "În pereții bisericii sunt încastrate vase de ceramică (rezonatori) care asigură o acustică excepțională în interior.",
            "Inserțiile de piatră colorată de pe fațadă și-au păstrat strălucirea timp de secole, în ciuda intemperiilor.",
            "Biserica este singurul monument supraviețuitor al tradiției romano-bizantine din vestul Belarusului.",
            "În interior se păstrează fragmente de fresce medievale care oferă indicii despre pictura sacră timpurie din regiune."
        ]
    },
    "city-molodechno": {
        "desc": "Molodechno, situat la nord-vest de Minsk, este un centru cultural și industrial semnificativ al Belarusului. În ultimele decenii, orașul s-a transformat într-un pol important pentru industria electronică și cea alimentară, menținând totodată o viață artistică efervescentă. Este faimos pentru numeroasele sale teatre, școli de muzică și pentru găzduirea regulată a festivalurilor naționale de artă și poezie. Arhitectura orașului reflectă în mare parte perioada de reconstrucție de după război, dar include și elemente moderne, cum este zona pietonală largă și bine amenajată. Împrejurimile orașului Molodechno sunt caracterizate de peisaje deluroase și împădurite, făcând din acesta o destinație atractivă pentru locuit și excursii de weekend.",
        "facts": [
            "Molodechno este cunoscut ca locul de desfășurare al Festivalului Național al Cântecului și Poeziei Belarusă.",
            "Orașul a fost istoric un punct de sprijin important pe linia de cale ferată ce leagă Vilnius de Minsk.",
            "Teatrul Regional de Dramă din Molodechno are o reputație excelentă la nivel național pentru producțiile sale inovatoare.",
            "În apropierea orașului se găsesc vestigiile castelului Lebedevo, care atestă importanța medievală a zonei."
        ]
    },
    "nature-augustow-canal": {
        "desc": "Canalul Augustów este o capodoperă a ingineriei din secolul al XIX-lea, care face legătura între bazinele hidrografice ale râurilor Vistula și Neman. Secțiunea belarusă a canalului a fost restaurată cu grijă și servește astăzi ca un centru major pentru turismul nautic și recreerea în aer liber. Ansamblul include numeroase ecluze istorice și poduri mobile care sunt operate manual chiar și în prezent. Canalul șerpuiește prin zone împădurite pitorești și peisaje naturale virgine, fiind o locație ideală pentru excursii cu caiacul și trasee de ciclism. Ca proiect transfrontalier între Polonia și Belarus, canalul simbolizează legăturile istorice și măiestria inginerească comună a celor două națiuni vecine.",
        "facts": [
            "La finalizarea sa în 1839, Canalul Augustów era una dintre cele mai moderne căi navigabile din Europa.",
            "Ecluza „Nemnovo” este cea mai mare de pe întregul canal, având trei camere pentru a depăși diferența de nivel.",
            "Din 2004, există o zonă fără vize pentru turiști de-a lungul canalului, facilitând vizitele internaționale.",
            "De-a lungul cursului său pot fi văzute și astăzi borne de frontieră istorice din perioada Imperiului Rus."
        ]
    },
    "landmark-trinity-suburb": {
        "desc": "Suburbia Troițkoe (Trinity Suburb) este cel mai pitoresc și mai fermecător cartier istoric din Minsk, situat direct pe malul râului Svisloci. Deși a fost reconstruit substanțial în anii 1980, cartierul păstrează o atmosferă autentică a vechiului oraș prin străzile sale pavate și casele colorate în stilul secolului al XIX-lea. Aici vizitatorii pot găsi numeroase muzee mici, anticariate, cafenele primitoare și galerii de artă. Cartierul este un loc de întâlnire preferat pentru artiști și turiști, oferind un contrast puternic cu arhitectura sovietică monumentală din jur. Chiar vizavi se află „Insula Lacrimilor”, un monument dedicat soldaților belaruși căzuți în războiul din Afganistan. Este unul dintre cele mai fotografiate și mai iubite locuri din capitală.",
        "facts": [
            "Cartierul a fost inițial locul unde s-au stabilit primele așezări ale orașului Minsk în perioada medievală.",
            "În Trinity Suburb s-a născut celebrul poet belarus Maxim Bahdanovich, figura sa fiind omagiată local.",
            "Reconstrucția s-a bazat pe planuri istorice riguroase pentru a reda imaginea orașului de dinaintea distrugerii din 1944.",
            "Noaptea, cartierul este iluminat festiv, creând un peisaj de basm reflectat în apele râului Svisloci."
        ]
    },
    "BY-001-gomel-palace": {
        "desc": "Palatul Rumyantsev-Paskevich din Gomel reprezintă unul dintre cele mai importante monumente ale clasicismului din Europa de Est. Construcția a început la sfârșitul secolului al XVIII-lea și a servit drept reședință pentru oameni de stat și comandanți militari ruși de rang înalt. Palatul se remarcă prin proporțiile sale armonioase, porticul masiv cu coloane și decorul interior fastuos, care astăzi găzduiește colecțiile unui muzeu de artă și istorie. Ansamblul este înconjurat de un parc peisagistic spectaculos, unul dintre cele mai vechi din Belarus, situat pe malul înalt al râului Sozh. Complexul constituie inima culturală a orașului Gomel și este un simbol al eleganței aristocratice din perioada imperială.",
        "facts": [
            "Muzeul palatului expune colecții valoroase de pictură europeană, porțelan fin și mobilier de epocă.",
            "Turnul palatului oferă o vedere panoramică spectaculoasă asupra râului Sozh și a întregului oraș.",
            "Capela și cripta familiei Paskevich, aflată în parc, este o structură arhitecturală deosebită în stil pseudo-rus.",
            "În timpul iernii, parcul palatului devine un decor de basm, fiind decorat cu mii de lumini artistice."
        ]
    },
    "BY-001-mozyr-castle": {
        "desc": "Castelul din Mazyr este o reconstrucție impresionantă a unei fortărețe medievale din lemn, așezată pe istoricul Deal al Castelului deasupra râului Pripyat. Complexul oferă o imagine sugestivă a arhitecturii defensive din perioada Marelui Ducat al Lituaniei. Vizitatorii pot explora turnurile de lemn, pasarelele de apărare și clădirile administrative care găzduiesc acum expoziții despre meșteșugurile medievale și viața cotidiană a garnizoanei. Poziția sa strategică pe colină a permis odinioară controlul asupra rutei comerciale vitale de pe râul Pripyat. Astăzi, castelul este o din destinație turistică de top și servește ca fundal pentru festivaluri de reconstituire istorică și târguri de artizanat local.",
        "facts": [
            "Reconstrucția se bazează pe cercetări arheologice și descrieri istorice ale castelului original din secolul al XV-lea.",
            "De pe Dealul Castelului se deschide cea mai frumoasă panoramă asupra luncii râului Pripyat, „Amazonul belarus”.",
            "În interiorul complexului se află o mică capelă din lemn dedicată Sfintei Barbara, ocrotitoarea minerilor.",
            "Castelul găzduiește anual festivalul „Comoara Polesiei”, care celebrează tradițiile populare din sudul țării."
        ]
    },
    "BY-002-brest-fortress": {
        "desc": "Cetatea Brest, un simbol incontestabil al rezistenței și sacrificiului, este una dintre cele mai vizitate atracții turistice din Belarus. Construită în secolul al XIX-lea, fortăreața a devenit locul unei apărări eroice în iunie 1941, când garnizoana sa a înfruntat forțele germane superioare. Ansamblul memorial actual îmbină armonios ruinele structurilor originale cu sculpturi gigantice în stilul realismului socialist. Figura centrală, „Curaj”, înfățișează capul masiv al unui soldat sculptat într-un bloc imens de piatră, simbolizând dârzenia apărătorilor. Atmosfera sobră, completată de sunetul metronomului și muzica solemnă, creează un spațiu de profund respect și reculegere pentru evenimentele tragice ale războiului.",
        "facts": [
            "Fortăreața este situată pe patru insule create natural de brațele râurilor Bug și Mukhavets.",
            "În cemattele cetății se mai pot citi și astăzi mesajele de adio zgâriate pe ziduri de soldații asediați în 1941.",
            "Obeliscul „Baioneta” are o înălțime de peste 100 de metri și este vizibil din aproape orice punct al orașului.",
            "Muzeul Apărării din cadrul complexului prezintă mii de exponate, inclusiv obiecte personale ale soldaților și familiilor lor."
        ]
    },
    "BY-002-kamenets-tower": {
        "desc": "Turnul din Kameneț, adesea numit în mod eronat „Turnul Alb”, este singurul exemplu supraviețuitor de donjon medieval din Belarus. Această structură impunătoare din cărămidă a fost ridicată în secolul al XIII-lea din ordinul prințului Vladimir Vasilkovich pentru a proteja regiunea de atacatorii externi. Cu zidurile sale extrem de groase și poziția strategică pe o colină, turnul a rămas un bastion inexpugnabil timp de secole. Arhitectura sa este sobră și funcțională, prezentând elemente timpurii de stil gotic în arcele ferestrelor. Astăzi, turnul găzduiește un muzeu dedicat istoriei fortificațiilor regionale și oferă o platformă de observație cu o vedere panoramică spre marginea parcului național Belovezhskaya Pushcha.",
        "facts": [
            "Turnul are o înălțime de 30 de metri, iar zidurile sale la bază au o grosime impresionantă de 2,5 metri.",
            "În ciuda numeroaselor războaie, turnul nu a fost niciodată distrus în cei peste 700 de ani de existență.",
            "Denumirea de „Turnul Alb” provine probabil dintr-o eroare istorică, deoarece turnul nu a fost niciodată văruit în alb.",
            "Interiorul păstrează structurile originale din grinzi de lemn și mecanisme ingenioase de apărare medievală."
        ]
    },
    "BY-003-polotsk-cathedral": {
        "desc": "Catedrala Sfânta Sofia din Polotsk este un simbol al spiritualității și al rădăcinilor istorice ale Belarusului, fiind considerată leagănul creștinismului în această regiune. Edificiul actual, ridicat pe fundațiile unei biserici din secolul al XI-lea, reflectă schimbările politice și religioase de-a lungul secolelor, de la influența ortodoxă timpurie la cea catolică. Deși structura originală era bizantină, reconstrucția sa în stil baroc de Vilnius din secolul al XVIII-lea i-a oferit eleganța vizibilă astăzi. Poziția sa pe fortificațiile de deasupra râului Dvina o face un punct de reper maiestuos și un simbol al continuității istorice. Ca centru cultural major, catedrala găzduiește expoziții de artă sacră și evenimente muzicale de înaltă ținută, menținând vie istoria Polotskului.",
        "facts": [
            "În catedrală se află o copie a „Crucii Sfintei Eufrosina”, o relicvă națională de o valoare inestimabilă.",
            "Criptele subterane ale catedralei pot fi vizitate, oferind acces la vestigii arheologice din perioada fondării orașului.",
            "Orga catedralei a fost construită special de meșteri cehi și are peste 3.000 de tuburi, fiind celebră pentru sunetul său.",
            "Polotsk a fost primul centru de educație și tipărire a cărților din întregul areal al Rusiei Kievene."
        ]
    },
    "BY-003-braslav-lakes": {
        "desc": "Zona Lacurilor Braslav, situată în extremitatea nordică a Belarusului, oferă unul dintre cele mai pitorești peisaje din întreaga Europă de Est. Format în urma ultimei ere glaciare, acest teritoriu este un mozaic complex de sute de lacuri, insule verzi și lanțuri deluroase domoale. Parcul Național protejează acest mediu natural fragil, oferind în același timp un spațiu ideal pentru turismul de relaxare, departe de agitația marilor orașe. Apele cristaline ale lacurilor sunt ideale pentru înot, scufundări și pescuit sportiv, regiunea fiind celebră pentru calitatea mediului său. Flora și fauna sunt extrem de diverse, găzduind specii care au dispărut din alte părți ale continentului. Regiunea este renumită și pentru fermele de agroturism, care oferă o incursiune în viața rurală tradițională.",
        "facts": [
            "Lacul Drivyaty este al treilea ca mărime din țară și constituie centrul activităților turistice din zonă.",
            "Pe unele insule se pot găsi ruinele unor vechi mănăstiri și locuințe ale pustnicilor din secolele trecute.",
            "Regiunea Braslav este certificată ca fiind una dintre cele mai curate zone din punct de vedere ecologic din Europa.",
            "În fiecare vară, pe malul lacului are loc festivalul „Viva Braslav”, cel mai mare eveniment de muzică și sport din regiune."
        ]
    },
    "BY-004-mir-castle": {
        "desc": "Castelul Mir este mult mai mult decât o simplă fortificație; este o mărturie de piatră a epocii strălucitoare a Marelui Ducat al Lituaniei. Arhitectura sa distinctivă, cu ziduri alb-roșii și turnuri bogat decorate, îl face unul dintre cele mai iconice și fotografiate locuri din Belarus. De-a lungul secolelor, a servit drept reședință nobiliară, punct defensiv și chiar închisoare, înainte de a fi restaurat cu minuțiozitate în secolul al XXI-lea. Interiorul impresionează prin sălile reconstruite fidel, care reflectă bogăția și rafinamentul foștilor proprietari, familia Radziwill. Lacul adiacent și parcul în stil englezesc oferă un cadru relaxant pentru plimbări într-o ambianță încărcată de istorie și legende.",
        "facts": [
            "Castelul a fost proiectat pentru a fi o fortăreață militară capabilă să reziste artileriei, dar și un palat de protocol luxos.",
            "În pivnițele castelului existau depozite imense de provizii care puteau susține garnizoana în timpul unor asedii de lungă durată.",
            "Tavanul „Sălii Portretelor” este o reconstrucție artistică a unui tavan casetat aurit din perioada Renașterii.",
            "Castelul Mir a fost inclus în lista Patrimoniului Mondial UNESCO în anul 2000 pentru valoarea sa arhitecturală universală."
        ]
    },
    "BY-004-lida-castle": {
        "desc": "Castelul din Lida a fost construit în secolul al XIV-lea ca o barieră defensivă majoră împotriva incursiunilor Cavalerilor Teutoni. Comandat de Marele Duce Gediminas, edificiul se caracterizează prin zidurile sale masive de apărare și locația strategică la confluența a două cursuri de apă. De-a lungul secolelor, castelul a fost scena a numeroase conflicte între lituanieni, polonezi și ruși, fiind un punct cheie al controlului regional. După o perioadă de declin, fortăreața a fost complet restaurată și servește astăzi ca un muzeu viu al istoriei medievale. Expozițiile de arme și armuri, împreună cu turnirurile de cavaleri organizate regulat, recreează atmosfera fascinantă a evului mediu pentru vizitatorii contemporani.",
        "facts": [
            "Zidurile castelului au o grosime de până la doi metri în anumite secțiuni și depășesc înălțimea de 12 metri.",
            "În interiorul zidurilor exista inițial o mică așezare care cuprindea o biserică și clădiri de locuit pentru personalul militar.",
            "Castelul Lida făcea parte dintr-un lanț defensiv care mai includea cetățile de la Krevo și Medininkai.",
            "Vizitatorii pot participa activ la jocuri medievale și ateliere de meșteșuguri organizate frecvent în curtea castelului."
        ]
    },
    "BY-005-mogilev-town-hall": {
        "desc": "Primăria din Mogilev este simbolul mândru al orașului și o dovadă a lungii sale tradiții de autoguvernare sub dreptul de Magdeburg. Clădirea originală din secolul al XVII-lea a fost grav avariată în timpul celui de-al Doilea Război Mondial și ulterior demolată, fiind reconstruită fidel pe locul său istoric în anul 2008. Turnul său elegant, dotat cu o platformă de observație, domină piața centrală și oferă o panoramă superbă asupra râului Nipru. Astăzi, primăria găzduiește Muzeul de Istorie a orașului Mogilev, care documentează evoluția regiunii din timpurile vechi până în prezent. De asemenea, edificiul este folosit pentru primiri oficiale și ceremonii solemne, fiind inima administrativă și culturală a localității.",
        "facts": [
            "Ceasul din turnul primăriei are un mecanism unic care afișează, pe lângă oră, și date astronomice complexe.",
            "În fiecare zi, la amiază, un trompetist mecanic numit „Magistr” cântă o fanfară de pe balconul turnului.",
            "În interior poate fi văzută o copie a privilegiului acordat orașului Mogilev de către regele polonez în 1577.",
            "Clădirea este considerată una dintre cele mai reușite reconstrucții de arhitectură istorică realizate recent în Belarus."
        ]
    },
    "BY-005-bobruisk-fortress": {
        "desc": "Cetatea Bobruisk a fost la începutul secolului al XIX-lea una dintre cele mai moderne și mai puternice fortificații ale Imperiului Rus. A fost construită strategic pe malul râului Berezina pentru a asigura rutele de acces vestice către inima țării. O trăsătură remarcabilă a cetății a fost capacitatea sa de a funcționa autonom pentru perioade lungi, fapt demonstrat în 1812 în timpul campaniei lui Napoleon, când a rezistat cu succes. Astăzi, porțiuni vaste din clădirile masive de cărămidă roșie, tunelurile subterane și bastioanele sunt conservate și pot fi explorate de vizitatori. Deși multe structuri sunt acum dezafectate, dimensiunea colosală a complexului continuă să impresioneze prin rigoarea și forța arhitecturii militare imperiale.",
        "facts": [
            "În secolul al XIX-lea, în interiorul cetății Bobruisk au avut loc întâlniri secrete ale conspiratorilor decabriști.",
            "Teritoriul cetății este atât de vast încât găzduiește în prezent un stadion modern de fotbal și un palat al sporturilor pe gheață.",
            "Cărămizile roșii folosite la construcție au fost produse în fabrici locale înființate special pentru acest proiect masiv.",
            "De-a lungul istoriei sale, cetatea a servit și ca închisoare de maximă siguranță pentru deținuții politici importanți."
        ]
    },
    "BY-006-nesvizh-castle": {
        "desc": "Castelul Nesvizh, fosta reședință a puternicei dinastii Radziwill, este considerat cel mai strălucit exemplu de fuziune între cultura nobiliară și tradiția arhitecturală europeană în Belarus. Ansamblul vast, care s-a dezvoltat de-a lungul secolelor, îmbină armonios stiluri diferite, de la Renaștere la baroc, fiind integrat într-un sistem ingenios de canale și parcuri. Fiecare cameră și fiecare sală de bal spune povești despre putere, bogăție imensă și patronaj cultural la cel mai înalt nivel. Sala Aurie și Sala Tronului sunt deosebit de spectaculoase prin decorul lor bogat în stucaturi și picturi. Ca sit al Patrimoniului Mondial UNESCO, castelul este astăzi un muzeu esențial care păstrează moștenirea culturală a întregii regiuni.",
        "facts": [
            "Arhiva familiei Radziwill din Nesvizh a fost cândva cea mai importantă arhivă privată din întreaga Europă de Est.",
            "Castelul poseda propriul teatru privat, unde în secolul al XVIII-lea se puneau în scenă opere de talie europeană.",
            "Puterea familiei Radziwill era atât de mare încât membrii săi erau supranumiți „regii neîncoronați ai Belarusului”.",
            "Complexul include și primul teatru iezuit din regiune, subliniind rolul de centru educațional pe care l-a avut Nesvizh."
        ]
    },
    "BY-006-khatyn-memorial": {
        "desc": "Memorialul Khatyn este un loc al reculegerii și al memoriei profunde, dedicat milioanelor de victime ale celui de-al Doilea Război Mondial. Ridicat pe locul unde, la 22 martie 1943, satul Khatyn a fost șters de pe fața pământului de către unitățile SS, acest monument impresionează prin tăcerea sa simbolică. Planurile caselor arse sunt marcate prin praguri joase de beton, făcând vizibil golul lăsat în urmă de distrugere. În centrul complexului se află „Cimitirul Satelor”, un loc simbolic pentru 186 de localități belaruse care au fost distruse împreună cu locuitorii lor și nu au mai fost reconstruite niciodată. Memorialul servește ca un avertisment etern împotriva barbariei și un simbol al rezistenței spiritului uman în fața tragediei.",
        "facts": [
            "Clopotele de la Khatyn bat la unison într-un ritm ce amintește de bătăile inimii victimelor masacrului.",
            "Memorialul a fost proiectat pentru a se integra armonios în peisajul deluros și împădurit din jurul său.",
            "Pe „Zidul Memoriei” sunt trecute numele a peste 260 de lagăre de concentrare și locuri de exterminare din Belarus.",
            "În fiecare an, la aniversarea tragediei, au loc ceremonii de stat la care participă mii de oameni pentru a aduce omagii."
        ]
    },
    "BY-007-national-library": {
        "desc": "Biblioteca Națională a Belarusului este mult mai mult decât un simplu depozit de cărți; este un centru multifuncțional pentru informație, cultura și diplomație internațională. Clădirea futuristă din nordul orașului Minsk atrage toate privirile prin arhitectura sa geometrică rară și fațada de sticlă impunătoare. În interior, biblioteca oferă o infrastructură tehnologică de ultimă oră pentru cercetare, inclusiv arhive digitale masive și baze de date internaționale. Pe lângă sălile de lectură, găzduiește galerii de artă contemporană și spații pentru summit-uri diplomatice la nivel înalt. Platforma de observație de pe acoperiș a devenit una dintre cele mai populare atracții turistice din capitală, oferind o vedere panoramică asupra metropolei în expansiune.",
        "facts": [
            "Structura bibliotecii este proiectată să reziste la variații extreme de temperatură și la vânturi foarte puternice.",
            "În „Muzeul Cărții” din interior sunt expuse ediții originale rare care datează din secolul al XVI-lea.",
            "Biblioteca funcționează ca nod central de coordonare pentru întregul sistem de biblioteci publice din Belarus.",
            "Clădirea este adesea poreclită „Al treilea ochi” al orașului Minsk datorită prezenței sale dominante la orizont."
        ]
    },
    "BY-007-victory-square": {
        "desc": "Piața Victoriei din Minsk este unul dintre cele mai solemne și mai importante locuri din capitala belarusă. În centrul pieței se înalță un obelisc de 38 de metri, ridicat pentru a comemora victoria în Marele Război pentru Apărarea Patriei. Piața este o parte esențială a ansamblului stalinist de pe Bulevardul Independenței, impresionând prin simetria sa riguroasă și arhitectura monumentală a clădirilor din jur. La baza obeliscului arde Flacăra Eternă, păzită permanent de o gardă de onoare. Sub piață se află o sală memorială circulară, unde sunt inscripționate numele eroilor care au căzut pentru eliberarea Belarusului. Este locul principal de desfășurare pentru paradele naționale și ceremoniile oficiale de stat.",
        "facts": [
            "Obeliscul este realizat din granit gri și este încoronat în vârf cu replică a „Ordinului Victoriei” sovietic.",
            "Sub piață există un pasaj pietonal spectaculos care duce spre „Sala Memoriei”, luminată solemn din interior.",
            "Flacăra Eternă din Piața Victoriei a fost aprinsă în anul 1961 și arde neîncetat de atunci.",
            "Clădirile care înconjoară piața au fost proiectate special pentru a amplifica efectul monumental al monumentului central."
        ]
    }
}

for poi_id, data in ro_content.items():
    start_pos = content.find(f'id: "{poi_id}"')
    if start_pos == -1:
        # Try without quotes for ID just in case (though they are quoted in the file)
        start_pos = content.find(f'id: {poi_id}')
        if start_pos == -1:
            print(f"ID {poi_id} not found")
            continue
    
    end_pos = content.find('id:', start_pos + 1)
    if end_pos == -1:
        end_pos = len(content)
    
    poi_block = content[start_pos:end_pos]
    
    new_poi_block = poi_block
    
    # Handle descriptionAdvanced
    da_start = poi_block.find("descriptionAdvanced:")
    if da_start != -1:
        # Find the end of this object (the closing brace that matches the opening one)
        da_content_start = da_start + len("descriptionAdvanced:")
        brace_count = 0
        da_end = -1
        for i in range(da_content_start, len(poi_block)):
            if poi_block[i] == '{':
                brace_count += 1
            elif poi_block[i] == '}':
                brace_count -= 1
                if brace_count == 0:
                    da_end = i
                    break
        
        if da_end != -1:
            da_block = poi_block[da_start:da_end+1]
            # Match ro field with empty string
            ro_match = re.search(r'("?ro"??:\s*")(")', da_block)
            if ro_match and ro_match.group(2) == '"':
                # Double check it's actually empty
                inner_quote_start = ro_match.start(2)
                if da_block[inner_quote_start:inner_quote_start+1] == '"':
                    # It's either "" or something else. If it's "", then index match.start(2) and start(2)-1 are quotes.
                    # Wait, if da_block[ro_match.start(2)] is the closing quote of an empty string, then ro_match.start(2) == ro_match.end(1).
                    if ro_match.start(2) == ro_match.end(1):
                        new_da_block = da_block[:ro_match.end(1)] + data["desc"] + da_block[ro_match.start(2):]
                        new_poi_block = new_poi_block.replace(da_block, new_da_block)

    # Handle factsAdvanced
    fa_start = new_poi_block.find("factsAdvanced:")
    if fa_start != -1:
        # Find closing brace for factsAdvanced
        fa_content_start = fa_start + len("factsAdvanced:")
        brace_count = 0
        fa_end = -1
        for i in range(fa_content_start, len(new_poi_block)):
            if new_poi_block[i] == '{':
                brace_count += 1
            elif new_poi_block[i] == '}':
                brace_count -= 1
                if brace_count == 0:
                    fa_end = i
                    break
        
        if fa_end != -1:
            fa_block = new_poi_block[fa_start:fa_end+1]
            # Match ro field with empty array
            ro_match = re.search(r'("?ro"??:\s*\[\s*)(\]\s*)', fa_block, re.DOTALL)
            if ro_match:
                facts_str = ',\n            '.join([f'"{f}"' for f in data["facts"]])
                facts_formatted = f'\n            {facts_str}\n        '
                new_fa_block = fa_block[:ro_match.start(2)] + facts_formatted + fa_block[ro_match.end(2)-1:]
                new_poi_block = new_poi_block.replace(fa_block, new_fa_block)

    content = content[:start_pos] + new_poi_block + content[end_pos:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Update complete.")
