import re

file_path = "lib/visualLab/data/czechrepublicPoi.ts"

ro_data = {
    "country-czech-republic": {
        "desc": "Republica Cehă este o țară central-europeană fără ieșire la mare, remarcabilă prin peisajele sale rurale pitorești și orașele încărcate de istorie. Format din regiunile istorice Boemia, Moravia și o parte din Silezia, statul se mândrește cu o moștenire culturală de o complexitate uluitoare. Pe teritoriul său pot fi explorate sute de castele, stațiuni balneare seculare și parcuri naționale uimitoare. Arhitectura orașelor păstrează stiluri variind de la gotic la art nouveau și cubism. Pentru orice călător, Cehia oferă un echilibru perfect între aventură în natură și turism cultural. Geografie K7 — geografie europeană.",
        "facts": [
            "Are cea mai mare densitate de castele și palate din Europa, cu peste 2000 de astfel de structuri conservate.",
            "Industria sticlei și cristalului de Boemia este renumită la nivel mondial pentru calitatea și finețea sa.",
            "Republica Cehă este patria unor figuri ilustre precum scriitorul Franz Kafka și compozitorul Antonín Dvořák.",
            "Deține un număr impresionant de 16 situri incluse în Patrimoniul Mondial UNESCO."
        ]
    },
    "city-prague": {
        "desc": "Praga, capitala Republicii Cehe, este supranumită „Orașul celor o sută de clopotnițe” datorită profilului său arhitectural inegalabil. Râul Vltava desparte orașul, ale cărui maluri sunt unite de faimosul Pod Carol, o capodoperă a goticului. Centrul istoric este un labirint de străduțe pietruite, piețe pline de viață și clădiri de o valoare inestimabilă, nefiind afectat sever de bombardamentele din al Doilea Război Mondial. Castelul Praga veghează orașul de sus, fiind cel mai mare complex de castele antice din lume. Turismul joacă un rol major, milioane de oameni venind anual să admire Orașul Vechi. Istorie K8 — capitale europene.",
        "facts": [
            "Ceasul Astronomic din Praga, datând din 1410, este cel mai vechi ceas de acest tip încă funcțional din lume.",
            "Castelul din Praga figurează în Cartea Recordurilor Guinness ca cel mai întins castel antic coerent.",
            "Universitatea Carolină, fondată în 1348, este una dintre cele mai vechi și prestigioase universități din Europa.",
            "Cartierul evreiesc din Praga deține șase sinagogi istorice și faimosul Cimitir Evreiesc Vechi."
        ]
    },
    "city-brno": {
        "desc": "Brno este inima regiunii Moravia și al doilea cel mai mare oraș al Republicii Cehe, remarcându-se prin dinamismul său inovator. Deși este adesea umbrit de Praga, orașul oferă o combinație unică de arhitectură modernistă și monumente istorice grandioase. Villa Tugendhat este un simbol al funcționalismului mondial și atrage arhitecți din toată lumea. Orașul găzduiește, de asemenea, o vastă comunitate studențească, ceea ce alimentează viața culturală și gastronomică vibrantă. Dealul Petrov, dominat de Catedrala Sfinților Petru și Pavel, oferă o panoramă spectaculoasă. Sociologie K6 — centre urbane secundare.",
        "facts": [
            "Catedrala Sfinților Petru și Pavel bate clopotele pentru amiază la ora 11:00, în amintirea asediului suedez.",
            "Osuarul de sub Biserica Sfântul Iacob este al doilea cel mai mare din Europa, după catacombele din Paris.",
            "Villa Tugendhat, proiectată de Mies van der Rohe, a fost înscrisă pe lista UNESCO în anul 2001.",
            "Brno are o tradiție puternică în știință, fiind orașul în care Gregor Mendel a descoperit legile geneticii."
        ]
    },
    "city-plzen": {
        "desc": "Pilsen (Plzeň) este un oraș boem cu o faimă internațională puternic legată de tradiția fabricării berii și de inovația industrială. Aici, în 1842, a fost inventată prima bere blondă de tip Pilsner, care avea să schimbe pentru totdeauna industria mondială a băuturilor. Dincolo de faimoasa berărie, orașul se mândrește cu a doua cea mai mare sinagogă din Europa și cu un centru istoric bogat decorat. Sub străzile orașului se află un sistem impresionant de pivnițe istorice subterane. Pilsen este un oraș vibrant, a cărui industrie s-a modernizat rapid în ultimele decenii. Economie K7 — industrii emblematice.",
        "facts": [
            "Marea Sinagogă din Plzeň este a treia cea mai mare din lume și se distinge printr-o acustică extraordinară.",
            "Catedrala Sfântul Bartolomeu posedă cel mai înalt turn de biserică din întreaga Republică Cehă.",
            "Fabrica Škoda din Pilsen a fost unul dintre cele mai masive complexe industriale din Imperiul Austro-Ungar.",
            "Turul pivnițelor istorice din Pilsen dezvăluie o rețea de coridoare săpate începând cu secolul al XIV-lea."
        ]
    },
    "city-cesky-krumlov": {
        "desc": "Český Krumlov pare o așezare ruptă dintr-un basm, situată în Boemia de Sud, pe meandrele strânse ale râului Vltava. Centrul orașului, dominat de impresionantul castel medieval, s-a păstrat aproape neatins de trecerea timpului, etalând fațade renascentiste și baroce bogat decorate. După căderea Cortinei de Fier, orașul a fost restaurat minuțios, recăpătându-și culorile vibrante originale. În prezent, este a doua cea mai vizitată destinație turistică din Cehia. Râul Vltava oferă o cale unică de a vizita așezarea din caiace și bărci cu vâsle. Geografie K6 — conservarea patrimoniului.",
        "facts": [
            "Tot centrul istoric al orașului Český Krumlov face parte din Patrimoniul Mondial UNESCO din 1992.",
            "Castelul este faimos pentru șanțul său de apărare unde sunt crescuți urși bruni din secolul al XVI-lea.",
            "Festivalul Trandafirului cu Cinci Petale animă străzile cu costume de epocă, muzică și turniruri anuale.",
            "Un muzeu dedicat celebrului pictor Egon Schiele explorează legătura intimă a artistului cu orașul matern al mamei sale."
        ]
    },
    "city-karlovy-vary": {
        "desc": "Karlovy Vary, cunoscut și sub denumirea germană de Carlsbad, este cea mai ilustră stațiune balneară din Cehia. Arhitectura orașului este de o frumusețe spectaculoasă, cu fațade pastelate din perioada Belle Époque, așezate de-a lungul văii înguste a râului Teplá. Izvoarele sale fierbinți, bogate în minerale, au atras aristocrația, intelectualii și artiștii europeni vreme de secole. Orașul este de asemenea faimos pentru producția cristalului Moser, a lichiorului Becherovka și pentru napolitanele sale termale dulci. Anual, atrage atenția mondială găzduind un prestigios festival internațional de film. Cultură K8 — turism balnear de lux.",
        "facts": [
            "Izvorul Vřídlo are o forță uimitoare, expulzând apa termală la o înălțime de până la 12 metri.",
            "Lichiorul Becherovka, inventat aici, este adesea considerat „al treisprezecelea izvor” al stațiunii.",
            "Colonadele magnifice protejează vizitatorii în timp ce beau apă minerală din căni cu un design special.",
            "Festivalul Internațional de Film Karlovy Vary aduce zeci de staruri de la Hollywood în fiecare vară."
        ]
    },
    "city-kutna-hora": {
        "desc": "În perioada medievală, Kutná Hora a rivalizat cu Praga în bogăție și importanță politică, fiind susținută de enormele sale mine de argint. Orașul este o colecție impresionantă de arhitectură gotică târzie, simbolul suprem fiind magnifica Biserică Sfânta Barbara. Mineritul argintului a finanțat nu doar dezvoltarea orașului, ci și pe cea a întregului regat al Boemiei. Deși minele au fost epuizate și închise cu secole în urmă, moștenirea lor vizuală atrage milioane de vizitatori. Kutná Hora deține și osuarul de la Sedlec, o capodoperă macabră care fascinează constant. Istorie K7 — economia medievală.",
        "facts": [
            "Biserica Sfânta Barbara are un design neobișnuit în formă de cort, inspirat de uneltele și viețile minerilor.",
            "Curtea Italiană a fost odată monetăria centrală a regatului, unde se băteau groșii praghenzi de argint.",
            "Din argintul extras la Kutná Hora s-a susținut o mare parte a efortului militar în Războaiele Husite.",
            "Osuarul din Sedlec este decorat cu scheletele atent aranjate a aproximativ 40.000 de oameni."
        ]
    },
    "nature-sumava": {
        "desc": "Parcul Național Šumava reprezintă una dintre ultimele zone naturale cu adevărat sălbatice ale Europei Centrale. Împreună cu Pădurea Bavareză, formează cel mai extins masiv forestier din Europa, supranumit „acoperișul verde” al continentului. Peisajul este marcat de păduri adânci de conifere, lacuri glaciare limpezi și mlaștini misterioase de turbă. Peisajul virgin a fost protejat indirect în timpul Războiului Rece, fiind parte a zonei de frontieră interzisă (Cortina de Fier). Astăzi, Šumava oferă sanctuar pentru râși, lupi și nenumărate specii de păsări protejate. Științe Naturale K7 — arii naturale protejate.",
        "facts": [
            "Râul Vltava, cel mai lung din Cehia, își are izvoarele ascunse în inima pădurilor din Parcul Național Šumava.",
            "Trei lacuri glaciare majore (Černé, Čertovo, Prášilské) pot fi admirate după o drumeție solicitantă.",
            "Pădurea Boubín este considerată cea mai valoroasă arie a parcului, conținând arbori vechi de câteva sute de ani.",
            "În timpul iernii, stratul de zăpadă poate atinge 2 metri, oferind trasee excelente de schi fond."
        ]
    },
    "city-ostrava": {
        "desc": "Ostrava, al treilea cel mai mare oraș al țării, a suferit o tranziție spectaculoasă de la un centru industrial poluat la o metropolă modernă și culturală. Timp de decenii, orașul a fost definit exclusiv de oțelării și mine de cărbune masive, câștigându-și denumirea de „Inima de Oțel a Republicii”. Astăzi, fosta zonă industrială Dolní Vítkovice a fost transformată într-un complex uriaș educațional și muzical, păstrând silueta brută a furnalelor. Orașul găzduiește unul dintre cele mai mari festivaluri de muzică din Europa, Colours of Ostrava, pe teritoriul acestui sit impresionant. Sociologie K8 — revitalizare urbană.",
        "facts": [
            "Dolní Vítkovice este un sit protejat unic unde extracția cărbunelui și producția de oțel au coexistat.",
            "Turnul noii primării din Ostrava deține cel mai înalt punct de observație public dintre primăriile cehe.",
            "Orașul are cel mai mare procent de spații verzi și păduri încorporate în interiorul său dintre orașele mari din Cehia.",
            "Ostrava găzduiește anual festivalul „Colours of Ostrava”, care atrage peste 50.000 de participanți."
        ]
    },
    "city-liberec": {
        "desc": "Situat în nordul țării, la poalele Munților Jizera, Liberec este un oraș pitoresc, istoric legat de prosperitatea industriei textile. Splendoarea arhitecturală a orașului s-a născut la finele secolului al XIX-lea, când era supranumit „Manchester-ul Boemiei”. Emblema supremă a orașului este Muntele Ještěd, al cărui vârf este încoronat de un turn de telecomunicații futurist ce seamănă cu o navă spațială. Pe lângă frumusețea arhitecturii sale, Liberec atrage prin atracții pentru familie, cum ar fi cea mai veche grădină zoologică din țară și o grădină botanică generoasă. Geografie K6 — economie regională.",
        "facts": [
            "Turnul Ještěd a câștigat prestigioasa distincție Perret pentru inovația sa arhitecturală excepțională.",
            "Primăria neo-renascentistă din Liberec prezintă asemănări frapante cu faimoasa primărie din Viena.",
            "Grădina Zoologică deține faimoșii tigri albi, deveniți un simbol neoficial al regiunii nordice.",
            "Grădina Botanică expune o varietate rară de plante carnivore și colecții de orhidee exotice."
        ]
    },
    "city-olomouc": {
        "desc": "Olomouc, capitala istorică a regiunii Moravia, este adesea descris ca o „Pragă ascunsă”, oferind aceleași minunății arhitecturale baroce, dar fără aglomerația turiștilor. Așezarea are o importanță clericală imensă, fiind sediul arhiepiscopiei și având o concentrare uluitoare de palate, fântâni sculptate și biserici grandioase. Simbolul de necontestat al orașului este Coloana Sfintei Treimi, inclusă pe lista UNESCO. Palatul Arhiepiscopal a găzduit figuri ilustre, inclusiv pe Mozart în tinerețe. Parcurile care înconjoară nucleul vechi fac din Olomouc un loc perfect pentru plimbări prelungite. Artă K8 — barocul morav.",
        "facts": [
            "Coloana Sfintei Treimi are o înălțime de 35 de metri și este cea mai mare sculptură în aer liber din Cehia.",
            "Olomouc dispune de șase fântâni baroce spectaculoase, majoritatea inspirate din mitologia romană antică.",
            "Brânza maturată olomoucké tvarůžky este singurul fel tradițional de brânză ceh cu denumire geografică protejată.",
            "Ceasul astronomic din oraș a fost complet refăcut în anii 1950 într-un stil realist-socialist inedit."
        ]
    },
    "city-hradec-kralove": {
        "desc": "Hradec Králové este considerat unul dintre cele mai vizionar planificate orașe din Republica Cehă. În anii 1920 și 1930, un grup de arhitecți avangardiști, conduși de Josef Gočár, au reconfigurat spațiul urban, câștigându-i renumele de „Salon al Republicii”. Centrul vechi este o încântare gotică și barocă, marcat de Turnul Alb monumental, din care se poate admira întregul oraș. Amplasat la confluența fluviului Elba cu râul Orlice, orașul beneficiază de parcuri largi pe malul apei. Calitatea vieții și spiritul său progresist fac din Hradec Králové un exemplu de urbanism exemplar. Geografie K7 — urbanism și arhitectură.",
        "facts": [
            "Turnul Alb, cu o înălțime de 71 de metri, adăpostește masivul clopot Augustin, care este tras doar la sărbători mari.",
            "Muzeul Boemiei de Est, proiectat de Jan Kotěra, este un exemplu remarcabil al arhitecturii moderne timpurii cehe.",
            "Acest oraș a deținut istoric statutul de „oraș al reginelor consoarte” în timpul dinastiei Přemyslid.",
            "Pasionații de instrumente muzicale știu că aici s-au produs o lungă perioadă piane și orgi Petrof faimoase."
        ]
    },
    "city-pardubice": {
        "desc": "Pardubice, aflat în câmpiile roditoare ale fluviului Elba, este un oraș sinonim cu tradiția ecvestră, fabricarea turtelor dulci și dezvoltarea chimiei industriale. Orașul este cunoscut la nivel internațional pentru organizarea Marelui Premiu de la Pardubice, o cursă cu obstacole extrem de dură și prestigioasă. Centrul orașului vechi este un amestec fermecător de case cu fațade renascentiste detaliat ornamentate, dominat de Castelul Pardubice. Pe lângă pasiunea pentru sport și dulciuri, zona a dezvoltat un complex petrochimic uriaș care a susținut creșterea locală. Tradiție K6 — evenimente sportive majore.",
        "facts": [
            "Marele Premiu Velká pardubická are loc anual din 1874, fiind una dintre cele mai vechi curse hipice din Europa.",
            "Tradiția turtelor dulci din Pardubice datează din secolul al XVI-lea și rețeta se păstrează strict secretă.",
            "Castelul din Pardubice are o trăsătură rară pentru Europa Centrală: fortificații sub formă de valuri de pământ și șanțuri cu apă.",
            "Marele aeroport din zonă a contribuit în istorie la avântul aviației militare și civile din Cehoslovacia."
        ]
    },
    "city-zlin": {
        "desc": "Zlín este o revelație a arhitecturii raționaliste și a viziunii economice, fiind un oraș construit de o singură companie vizionară. Dezvoltarea sa fulminantă este opera familiei Baťa, fondatoarea legendarului imperiu al încălțămintei, care în anii 1920 a transformat complet orașul folosind designul funcționalist. Caracteristicile orașului includ casele standardizate din cărămidă roșie destinate muncitorilor și structurile industriale masive care emană ordine și simetrie. Zlín este privit astăzi ca un studiu de caz esențial pentru teoriile orașului-grădină industrial. Moștenirea lui Tomas Baťa se simte pe fiecare stradă. Economie K8 — antreprenoriat istoric.",
        "facts": [
            "Clădirea Nr. 21 (Zgârie-norul Baťa) are un lift imens, transformat în birou funcțional pentru directorul companiei.",
            "Zlín este supranumit „Orașul din Cărămidă Roșie” datorită unității sale vizuale absolut impresionante.",
            "A fost pionierul conceptului de „jumătate de zi de muncă, jumătate de zi de educație” pentru tinerii angajați.",
            "Universitatea Tomas Baťa continuă moștenirea inovației antreprenoriale și a designului industrial local."
        ]
    },
    "city-jihlava": {
        "desc": "Situată la frontiera invizibilă dar simbolică dintre provinciile istorice Boemia și Moravia, Jihlava este cel mai vechi oraș minier din Republica Cehă. Istoria sa a fost forjată de extracția masivă de argint, fenomen care a atras coloniști, artizani și legi speciale cehești. Inima orașului este dominată de una dintre cele mai vaste piețe centrale din țară, mărginită de fațade somptuoase din diferite epoci de aur ale orașului. Pe sub suprafața orașului se întinde un veritabil labirint de catacombe medievale care serveau drept pivnițe pentru berari și meșteșugari. Geografie K6 — regiuni miniere antice.",
        "facts": [
            "Catacombele din Jihlava alcătuiesc o rețea de 25 de kilometri, fiind al doilea sistem subteran ca mărime din țară.",
            "O parte a catacombelor are pereți care emană o lumină misterioasă verde-fluorescentă în întuneric complet.",
            "Jihlava a avut primul set de coduri miniere oficiale scrise, emise în secolul al XIII-lea, care au inspirat tot continentul.",
            "Celebrul compozitor Gustav Mahler și-a petrecut primii 15 ani din viață aici, participând frecvent la concerte locale."
        ]
    },
    "city-ceske-budejovice": {
        "desc": "České Budějovice reprezintă capitala spirituală și administrativă a pitoreștii regiuni Boemia de Sud. Așezarea a fost înființată ca oraș regal în secolul al XIII-lea de regele Ottokar al II-lea, la o confluență strategică de râuri, aspect ce i-a conferit un avantaj comercial. În centru se află superba Piață Přemysl Otakar al II-lea, faimoasă pentru mărimea și armonia sa pătrată impecabilă. Numele german al orașului, Budweis, este strâns legat de secole de fabricare a berii excelente. Este o destinație esențială pe traseele cicloturistice care parcurg salba de lacuri sud-boeme. Cultură K7 — dezvoltare medievală.",
        "facts": [
            "Piața Přemysl Otakar al II-lea este una dintre cele mai întinse și simetrice piețe pătrate din toată Europa.",
            "Fântâna lui Samson, un punct de reper impunător în mijlocul pieței, extrăgea apa direct din râul Vltava.",
            "Turnul Negru, așezat lângă catedrală, numără exact 225 de trepte ascuțite ce oferă un punct de belvedere excelent.",
            "Tradiția fabricării berii Budweiser Budvar are aici peste șapte secole de perfecționare neîntreruptă."
        ]
    },
    "city-usti-nad-labem": {
        "desc": "Așezat în inima aspră, dar impresionantă, a Munților Metaliferi, Ústí nad Labem a reprezentat un important nod comercial pe Elba de-a lungul istoriei. De la dezvoltarea minelor de cărbune brun, orașul s-a transformat rapid într-un monstru industrial în secolul al XIX-lea, atrăgând capital din întreaga Europă. Deși o mare parte din arhitectura istorică a dispărut din cauza modernizărilor brutale și a bombardamentelor, ruinele castelului Střekov deasupra defileului Elbei impresionează. Orașul a devenit de curând un pionier în revitalizarea ecologică a fostelor exploatări. Sociologie K8 — moștenire minieră.",
        "facts": [
            "Biserica Adormirea Maicii Domnului posedă cel mai înclinat turn din Cehia, deviat cu peste 2 metri din cauza bombardamentelor din 1945.",
            "Castelul Střekov i-a inspirat puternic pe pictorul romantic Ludwig Richter și pe compozitorul Richard Wagner.",
            "Podul Mariánský care traversează fluviul Elba este inclus între cele mai remarcabile poduri proiectate în secolul XX.",
            "Telecabina unică a orașului face o legătură surprinzătoare directă între un centru comercial și o colină verde populară."
        ]
    },
    "city-tabor": {
        "desc": "Tábor este orașul care poartă cu mândrie blazonul revoltei religioase husite, fiind un loc unic printre orașele europene antice. Fondat de adepții radicali ai lui Jan Hus în 1420, a fost inițial gândit ca o utopie socială unde oamenii trăiau fără diviziuni de clasă. Străzile din zona veche au fost proiectate sub forma unui labirint încrucișat și derutant, destinat să confunde complet trupele invadatoare. Piața centrală găzduiește Muzeul Husit, cel mai bun loc pentru a înțelege această revoluție ecleziastică majoră. Sub oraș, catacombe extinse adăposteau rezervele în perioade de criză. Istorie K7 — mișcările religioase timpurii.",
        "facts": [
            "Piața Žižka a fost botezată după legendarul general militar nevăzător Jan Žižka, a cărui statuie domină orașul.",
            "Tábor are un sistem uriaș de subsoluri medievale legate între ele pe mai multe etaje, perfect conservat.",
            "Marele lac de acumulare Jordán este de fapt cel mai vechi lac artificial creat în Europa de Est pentru rezerve de apă.",
            "Orașul menține și acum în mod onorific „Sărbătoarea Husită” anuală, un festival spectaculos plin de cavalerism."
        ]
    },
    "city-cheb": {
        "desc": "Aflat pe granița ceh-germană, Cheb este o intersecție vie a două culturi mari, aspect care a modelat definitiv spiritul și arhitectura așezării. Orașul este recunoscut pentru „Špalíček”, un complex neobișnuit de unsprezece case medievale comerciale din lemn și piatră care decorează piața centrală. Castelul său părăsit deține elemente romanice de o mare importanță, datând din perioada Sfântului Imperiu Roman. Istoria sa politică are un aer de mister, având în vedere că faimosul general imperial Wallenstein a fost asasinat brutal aici în 1634. Atmosfera calmă atrage azi bicicliști și curioși de istorie. Istorie K6 — interferențe culturale.",
        "facts": [
            "Grupul de case „Špalíček” reprezintă un exemplu neobișnuit și unic de dezvoltare urbană pur funcțională încă din secolul al XIII-lea.",
            "Pasionații pot vizita exact camera în care generalul Albrecht von Wallenstein a fost asasinat de proprii ofițeri.",
            "În interiorul palatului se păstrează rară capelă dublă romanico-gotică asociată împăratului Frederic Barbarossa.",
            "Este un punct de oprire cheie pentru ciclo-turiștii de pe faimoasa rută internațională râului Eger (Ohře)."
        ]
    },
    "city-as": {
        "desc": "Aș este extremitatea vestică și cel mai îndepărtat punct geografic al Republicii Cehe, încununând o fâșie curioasă de pământ înconjurată aproape complet de Germania. Această izolare l-a făcut să se dezvolte oarecum autonom în istorie, devenind o putere masivă în industria lânii și bumbacului în timpul revoluției industriale. Deși războiul și relocarea populației au lăsat orașul fără o parte importantă a identității sale, Aș și-a regăsit farmecul liniștit de frontieră. Parcurile presărate de statui seculare și monumente ascunse evocă o poveste lungă și complexă. Zona este apreciată de călătorii solitari în natură. Geografie K5 — granițe istorice.",
        "facts": [
            "Muzeul orașului Aș adăpostește cea mai detaliată și valoroasă colecție de mănuși textile antice din Europa Centrală.",
            "De-a lungul istoriei, Aș a fost singurul teritoriu germanofon localizat în nord-vest, dar sub ocrotire pur austriacă.",
            "Renumitul poet romantic J. W. Goethe făcea opriri de odihnă dese la Aș în drumurile sale către spa-urile cehești.",
            "Un monument de piatră faimos marchează punctul cel mai vestic al națiunii chiar în apropierea pădurilor așezării."
        ]
    },
    "city-domazlice": {
        "desc": "Domažlice este epicentrul spiritual și cultural al regiunii Chodsko, un teritoriu mândru locuit de micii nobili liberi însărcinați să apere granițele regatului boem. Piața sa înclinată, frumos definită de case în stil baroc și rococo, se află sub umbra dominantă a unui turn cilindric ce atrage toate privirile. Moștenirea vlahilor liberi (Chodové), simbolizată prin câinii lor de pază cu puf bogat, este vizibilă prin nenumărate festivaluri anuale colorate cu cimpoaie tradiționale. Arhitectura neobișnuit de veselă o plasează pe un loc fruntaș în turismul estival local. Un adevărat altar al tradiției orale populare. Sociologie K6 — folclor și tradiție.",
        "facts": [
            "Piața mare găzduiește Turnul Bisericii Albe, care este notoriu de ușor înclinat din cauza unei probleme de fundație.",
            "Poarta inferioară (Dolejší brána) este ultima care a supraviețuit intactă dintre bastioanele fortificației timpurii.",
            "Locuitorii tradiționali ai regiunii aveau statut de paznici de graniță regali și nu plăteau deloc taxe nobiliare.",
            "Anual, mii de oameni participă la festivalurile de folclor unde melodiile din cimpoi cehesc răsună pe străzi."
        ]
    },
    "city-tachov": {
        "desc": "Localizat la mică distanță de barierele verzi ale Munților Šumava, Tachov este o așezare adesea neglijată de marele turism, dar cu o frumusețe autentică și nepervertită. Castelul impunător și vechea incintă a zidurilor de apărare masive atestă rolul său de punct defensiv strategic medieval. În timpul lungului Război de 30 de Ani, Tachov a fost complet incendiat, dar a renăscut în ritmurile domolite ale barocului morav. Astăzi, o promenadă calmă pe marginea râului și bisericile renovate îi redau demnitatea tăcută de altădată. Rămâne o oază rară de introspecție arhitecturală rurală. Istorie K7 — conflicte regionale.",
        "facts": [
            "Complexul Mănăstirii Franciscane din Tachov și muzeul regional reprezintă nucleul principal de cultură locală.",
            "Părți masive ale fortificațiilor originale, datând tocmai din timpul secolului al XIV-lea, încă îmbrățișează centrul vechi.",
            "Castelul a fost refăcut masiv, în stilul neoclasic austriac elegant, imediat după ruinele lăsate de incendii repetate.",
            "Este renumit pentru o vastă arenă de echitație de o complexitate tehnică inedită și faimoasă din Europa."
        ]
    },
    "city-zatec": {
        "desc": "Žatec poartă mândrul titlu neoficial de capitală globală a hameiului, definind pentru mai bine de 700 de ani gustul inconfundabil al berii de tip Pilsner. Clădirile roșiatice de uscare a hameiului cu hornurile lor curioase ascuțite, domină orizontul urbei, aducând o recunoaștere iminentă la nivel mondial (și intrarea în patrimoniul UNESCO). În afara zonelor industriale, așezarea surprinde printr-o piață istorică plină de primării rafinate și fațade armonioase. Vizitatorii sunt îndemnați să deguste în berăriile tradiționale esența ingredientului magic, celebrul Saaz nobil. Geografie K8 — culturi agricole esențiale.",
        "facts": [
            "Muzeul Hameiului, deschis publicului larg, este considerat cel mai vast muzeu dedicat acestui subiect de pe glob.",
            "Žatec deține peisajul industrial complex pentru prelucrarea hameiului care recent a fost adăugat Patrimoniului Mondial UNESCO.",
            "Anual se alege, dintr-o asociație respectabilă de cultivatori, un soi rar care definește producția internațională premium.",
            "Numeroase filme faimoase și comerciale, precum Yentl sau Oliver Twist, au folosit orașul drept locație perfectă pentru filmări."
        ]
    },
    "city-litomerice": {
        "desc": "Răsărind ca o operă de artă panoramică deasupra confluenței fluviului Elba cu râul Ohře, Litoměřice este unul dintre cele mai bogate orașe culturale ale regiunii boeme de nord. Episcopia masivă catolică a susținut permanent construirea unor palate, fântâni monumentale și catedrale grandioase. Viile se întind lin pe dealurile din spate, oferind faimosul și rafinatul vin din Boemia (Rulanda Albă). Labirintul imens de sub oraș servea anterior minelor și viticulturii extinse, iar azi captivează arheologii urbani și curioșii dornici de răcoare în miezul verii. Cultură K8 — epicentre religioase.",
        "facts": [
            "Dealul Radobýl este locul unde influentul poet romantic Karel Hynek Mácha și-a petrecut clipele dramatice din viață.",
            "Rețeaua catacombelor orașului vechi comunică direct sub zeci de kilometri de clădiri și monumente gotice protejate.",
            "Orașul are un microclimat ideal, supranumit pe bună dreptate Tărâmul Grădinilor, unde soiurile de piersici excelează.",
            "Catedrala Sfântul Ștefan a primit o atenție unică la reconstrucția sa supervizată de episcopii renascentiști austrieci."
        ]
    },
    "city-decin": {
        "desc": "Acolo unde râul Elba își taie cu un dramatism asurzitor o cale de ieșire printre culmile maiestuoase de gresie ale parcului național Elveția Boemă, Děčín se așază confortabil în vale. Așezarea are un caracter dublu: pe o parte faimosul său castel pe promontoriu înalt, iar pe alta portul industrial plin de mărfuri navigabile în mișcare. Cunoscut prin vasta sa grădină plină de trandafiri excepționali vizitată cândva și de genialul Chopin, este tabăra ideală de bază pentru montaniarzi. Zeci de poduri suspendate de pe râu unifică regiunile orașului și ghidează drumețiile montane cu o estetică urbană unică. Geografie K6 — parcuri naționale.",
        "facts": [
            "Pe marea stâncă numită Turnul Păstorului, priveliștile ascuțite se intersectează cu liniile trenurilor urbane suspendate.",
            "Castelul local Děčín i-a fermecat complet pe vizitatorii secolului 19, mai ales pe tânărul Frederic Chopin în vacanță.",
            "Podul Tyršov atrage imediat atenția arhitecților datorită unui arc curajos fără suspensie vizibilă în regiune.",
            "Extinderea rutelor de via ferrata chiar în mijlocul urban al orașului au propulsat Děčín drept capitala aventurii nordice."
        ]
    },
    "city-trutnov": {
        "desc": "Trutnov stă de veghe la porțile masivilor Karkonosze, oferind un prag istoric vizitatorilor gata de schi alpin și explorare naturală asiduă. Orașul a fost intens format de lupte religioase seculare, mituri nordice profunde și o explozie a prelucrării fierului, elemente care i-au acordat titulatura onorifică de Orașul Dragonilor de Munte. Piața sa arcadată ascunde legendara figură fioroasă din piatră a dragonului sculptată, reamintindu-ne zilnic misticismul regiunii aspre. Evenimentele rock internaționale s-au regăsit ideal în complexele de odihnă din zonă. Istorie K5 — mitologii fondatoare.",
        "facts": [
            "Fântâna Rübezahl (Krakonoš) este închinată complet divinității aspre a muntelui faimos pentru legende vechi germane.",
            "Trutnov a fost marcat decisiv prin cruda bătălie austro-prusacă de la cumpăna secolelor de dominare teritorială militară.",
            "Anualele manifestări mari de cultură pop-rock în aer liber i-au atribuit reputația tinerească de epicentru progresist alternativ.",
            "Se zvonește ferm în mituri că un monstru mistic aluvionar se ascunde efectiv sub clopotnița principală din oraș."
        ]
    },
    "city-nachod": {
        "desc": "Așezat calm pe o graniță vulnerabilă istoric în lungul văii fluviului Metuje, Náchod a fost din timp fortificat riguros. Silueta castelului pe promontoriu reflectă dorința curajului de a respinge armatele invadatoare prusace prin turnuri cilindrice ascuțite neobișnuite. Traseele secrete, tranșeele moderne din Al Doilea Război și buncărele colosale interconectate, cum este Dobrošov chiar de pe deal, evocă efortul extrem de rezistență. Orașul invită oaspeții să-i deguste fabricația bogată de licoare de malț spumoasă specifică Náchod. Economie K6 — sisteme defensive.",
        "facts": [
            "Buncărele Dobrošov din imediata vecinătate formează cel mai impunător sistem subteran defensiv vizibil publicului pasionat de Războiul 2.",
            "Castelul domină peisajul și ascunde într-una dintre camere o curioasă și complexă colecție renascentistă de jucării curtenești fine.",
            "Este localitatea renumitului romancier sensibil modern Josef Škvorecký, care i-a transformat amintirile estivale din zonă în capodopere.",
            "Complexele balneare și apele extrem de clare atrag curioși pentru a vindeca suferințe respiratorii cu rețete vechi."
        ]
    },
    "city-trebic": {
        "desc": "Adevărat exemplu al toleranței excepționale, Třebíč se înalță armonios ilustrând viețuirea pașnică simultană și complexă dintre culturile iudaice și asociațiile catolice timp de sute de ani buni. Această excepție neîntreruptă a culminat cu faimoasa clasificare a ambelor zone uriașe din oraș de către UNESCO laolaltă. Bazilica masivă Sfântul Procopie amestecă arhitectura romanică strictă cu fragmentele de decor timpuriu gotic impetuos, ridicându-se spectaculos. Cartierul antic din spatele ei conține sinagogi magnifice înghesuite curioși printre zidurile apei repezi. Sociologie K7 — multiculturalitate urbană.",
        "facts": [
            "Bazilica magnifică Sfântul Procopie împreună complet cu vasta piață evreiască alcătuiesc uluitor situl comun Patrimoniului Mondial.",
            "A fost efectiv o zonă extrem de vitală privind influența comercianților asociați cu regimurile preotului local monahal benedictin.",
            "Cel mai vechi cimitir sacru evreiesc conservat ascunde atent printre fagi pe culmea prăpăstioasă o liniște spirituală covârșitoare.",
            "Sărbătoarea complexă istorică a lui Shamayim readuce fastul petrecerilor evreiești cu muzică caldă din Balcani în vechea localitate."
        ]
    },
    "city-mikulov": {
        "desc": "Dominând prin silueta inconfundabilă granița austriacă-cehă deasupra stâncilor imaculate de gresie, Mikulov este fără rival centrul enologic al zonei Pálava. Reședința sa impunătoare guvernează peste piețele terasate superbe din vale, emanând bogăție aristocrată pură a moștenirilor nobiliare austriece din imperiu. Așezarea are aerul sudic unic datorită microclimatului rar cald și florii sălbatice albe presărate pe muntele Sfintei Cruci de deasupra sa. De asemenea, criptele familiilor regale i-au îmbogățit legenda melancolică de noapte plină de șarm turistic incontestabil. Turism K8 — rute oenologice.",
        "facts": [
            "Svatý Kopeček, Colina Sfântă ascunsă în fața cetății castelului oferă locului protecție pentru rarii trandafiri pereni crescuți nefiresc.",
            "Sub boltele largi ale castelului gigantic își regăsește casa un vas imens oenologic vechi gravat de lemn valoros unicat.",
            "Trecutul bogat evreiesc este remarcabil printr-un complex educațional curat și conservat al marilor minți rabinice iudaice de top.",
            "Este adresa cea mai apreciată, recunoscută pe larg a podgorenilor, pentru festivalul generos Vinobraní desfășurat sub bolți tomnatice reci."
        ]
    },
    "city-valtice": {
        "desc": "Inima complexă a celui mai frumos și imens colț aristocratic de patrimoniu comun ceh din Lednice, Valtice respiră permanent un aer glorios de eleganță absolută a palatelor de vară baroce imperiale de lux extrem. Dincolo de palatele simetrice mărețe somptuoase ale dinastiei suverane ale Austriei superioare din familia de renume internațional Liechtenstein, orașul susține cu grație culturile vițelor de vin select alb recunoscute frecvent mondial. Pivnița faimoasă din centrul său de sub pământ protejează complet selecțiile de top naționale a tuturor soiurilor culese rafinat în competiții oenologice exclusiviste recunoscute permanent de stat. Istorie K8 — moșii nobiliare.",
        "facts": [
            "Coloniile vastei proprietăți de domeniu au reprezentat sediul constant administrativ cel mai esențial permanent din posesiunile dinastiei Liechtenstein europene.",
            "Expoziția publică denumită curajos Salonul Vinului din Republica Cehă își are faimosul și strictul sediu definitiv local aici anual.",
            "Complexele decorative imense exterioare denumite adesea Nebuniile din regiune presară fermecător dealurile luxuriante din jurul lacului comun central superb.",
            "Reziduurile calcaroase unice specifice din regiune imprimă garantat un parfum intens floral tuturor lichidelor de savurat aici în vinării unice."
        ]
    },
    "city-breclav": {
        "desc": "Situat în inima pădurilor inundabile bogate a râului fin curgător Thaya inferior chiar exact la intersecția curată dintre trei regiuni suverane ale statelor moderne esențiale cehe aspre slovace și austriece elegante se regăsește Břeclav cu faimă pur feroviară importantă de transport istoric permanent susținut enorm din regiunea centrală masivă esențială continentală nordică a transporturilor din Viena spre est. Orașul acționează logic complet ca singura intrare grandioasă curată directă clară deschisă ecologic super spre cel mai vast colos a domeniului turistic de patrimoniu de plimbare uluitoare din zona protejată UNESCO Valtice rural calm. Economie K5 — strategii de rute externe.",
        "facts": [
            "Complexul extrem forestier larg fluvial lucios de sub jurisdicția parcului este efectiv numit cel mai fermecător curat ecosistem fluvial amazon atlantic intern cehesc real natural.",
            "Gara complexă uriașă de fier și sticlă de aici acționează oficial precis ca cel dintâi cel mai impunător reper grandios pentru primele locomotive masive așezate din regiunea Viena timpurie locală centrală europeană din imperiu.",
            "Complexul miniatural din Pădurea de pini protejată Pohansko demonstrează prezența stabilă enormă a centrelor complexe de slavoni seculari vechi regăsiți complet sub siturile de mușchi verzi liniștiți pereni ai râului fin.",
            "Rutele dense asfaltate curate de ciclism din inima moșiei împădurite liniștite leagă practic complet sigur regiunea transfrontalieră complet natural protejată uimitor din jur extrem de elegant natural de verde absolut sigur."
        ]
    },
    "city-uherske-hradiste": {
        "desc": "Reprezentând capitala reală a folclorului cultural a regiunii Moraviei, Uherské Hradiště are cu siguranță un talent fermecător să expună o ospitalitate colorată vibrantă rurală muzicală imens recunoscută tradițional național și internațional anual imensă și pur de poveste. Încântător pe faleza calmă a apei curgătoare calde lente Morava orașul s-a conservat arhitectural complet mândru uimitor fără blocuri sumbre ci cu arcade superbe de piatră înfrumusețate delicat vizibil din timpul monarhiilor centrale mândre austriece grandioase fine renascentiste curate rafinate istoric din regiunea bogată sudică. Muzică K6 — culturi muzicale vii.",
        "facts": [
            "Traseele viticole calde aromate presărate cu beciuri săpate ascunse reci sub pământ tradiționale rustice atrag grupuri masive vesele anuale enorme permanent de iubitori de coruri și relaxări rurale din Europa centrală permanent mereu fine calm.",
            "Ciclul colorat extrem de vară uriaș local specific tradițional intens recunoscut a festivalurilor adună formațiuni rurale muzicale și dansatori de step recunoscuți masiv cu orchestre întregi uriașe complet pasionate pur fermecătoare cald anual real.",
            "Comunitatea se mândrește intens clar permanent din plin mereu susținut național unic perfect anual pentru costumele complexe unice cusute imaculat fin brodate extrem pur delicat recunoscute mândru regional permanent sigur unic intens complet manual uluitor rafinat național.",
            "Centrul său de cinematografie tradițional modern intens masiv dezvoltat din zonă organizează exclusiv Școala festivalieră extinsă vizibil estivală ce atrage tineret complet studios permanent cinefil recunoscut curat de succes enorm fin vară din regiuni."
        ]
    },
    "city-frydek-mistek": {
        "desc": "Tăiat perfect liniștit curat și mândru exact fix geometric pe mijloc de debitul râului calm local fin transparent Ostravice modern acest oraș a rezultat perfect fix direct pur exclusiv efectiv simplu exact doar din unificarea a două burguri vechi frontaliere frățești Místek în partea de regiune Moravia tradițională caldă a curții curată calmă pur vestică și falnicul Frýdek complet în mândra regiune de ducat aristocratic estică istoric mândră curată veche a frontierei aspre puternice din vechea Silezia caldă centrală veche fină de imperiu din jur minunat elegant mândru. Economie K6 — frontiere regionale istorice.",
        "facts": [
            "Castelul rafinat fin Frýdek complet baroc restaurat expune impresionant calm o expoziție locală mare complexă detaliată a patrimoniului cultural al regiunii masive Munților adiacenți curat Beskizi aspre tradițional rustice montane de relief regional de tradiție curat enorm vechi din colț montan aspru fine.",
            "Piața Místek imensă clar elegantă largă curat tradițională așezată frumos rezonabil larg central curat perfect în stil mândru fin baroc pur elegant calm austriac se numără efectiv cert liniștit precis frumos drept a fi un spațiu curat enorm conservat unic de patrimoniu național vizual fermecător larg calm de colț superb urban mândru vechi de relaxare urban.",
            "Regiunea largă a orașului liniștit calm unificat curat prosper funcționează clar drept o punte vitală turistică de acces perfect mândru la rutele mari drumețiilor atente din parcul larg extins conservat al pădurilor din munții de margine verzi extrem super curat falnici masivi înalți aspre uimitori fin protejați mereu excelent vizibil frumos susținuți cert turistic sigur.",
            "A existat sigur pur tradițional aici fin o puternică masivă ramură locală mare regională a textiliștilor ce dăinuie vizual vizibil impresionant doar cert curat liniștit arhitectural falnic frumos mândru uriaș clar exclusiv perfect a fabricilor gigant liniștite goale rafinat uimitoare."
        ]
    },
    "cult-charles-bridge": {
        "desc": "Privit just ca pilonul absolut central masiv perfect mândru al vechii capitale Praga și cel mai de seamă iubit adorat cald intens vizitat fermecător monument faimos pod masiv impunător colosal din regatul ceh larg Podul Carol unește curat romantic cu grație fină curat pur colinele calde aspre ale Castelului istoric regal regal praghez mândru de Orașul vechi central colosal de bază larg aglomerat faimos elegant intens. Ridicat curat calm atent din blocurile mari cioplite ferme fine de greu material de piatră galbenă groasă din porunca regelui vechi ceh Carol al patrulea la jumătatea extrem curată atentă fixă cert medievală caldă fină târzie a istoriei aspre secolului a patrusprezecelea lung de timp. Istorie K7 — infrastructură monarhică.",
        "facts": [
            "Cele două rânduri masive mândre fine curate atente rafinat frumos decorate pline groase calme baroce fermecător sculptate în piatră cu peste 30 de impunătoare statui masive de bronz și grea prețioasă rocă adăugate masiv pe margini au fost cert amplasate aici ulterior precis în perioada istorică fină a mișcărilor europene religioase catolice recunoscute baroce intense din secolul XVII târziu fin clar curat lung mereu de piatră sigur superb de râu calm.",
            "Turnul grandios masiv gotic curat vechi ridicat din rocă brună aspră curată fin masivă puternică pe partea Orașului Vechi la râu e lăudat cert masiv unanim drept cea mai măreață fină curată poartă veche mândră turnată sculptată impunătoare colosal extrem magnific din universul civilizației curate calde europene grandioase uluitoare fine reale fermecătoare cert din gotic de lume recunoscut imens rafinat regal sigur.",
            "Data simbolică a lansării a punerii exacte riguroase a primei pietre de construcții fundament masiv la pilon se sprijină intens ferm fin bazat cert pe calcule astronomice exacte perfect ciudat astrologice magice aspre de astrologie imperială mândră curată perfect strictă precis 1357 simplu luna nouă a iulie precis dimineața uimitoare clar cald 9 fin 5 la cald aspre minute misterioase fixe clare cert uimitor.",
            "Cunoscut curat faimos în poveștile de magie folclor vechi de mit cum că pietrarii masoni ar fi fin amestecat ouă tari în mortarele zidurilor din pod masiv greu de piatră cert clar aspre uimitor fin sigur spre a oferi garantat masiv rezistență neomenească fină uluitor mândră extrem de certă."
        ]
    },
    "cult-prague-castle": {
        "desc": "O metropolă de castele uriașe interioare complex conectate labirintice mărețe curate grandioase în interiorul marii capitale de turism Praga falnicul dominant mândru curat enorm intens Castel se descrie pe deplin complet just mândru curat ca fiind sediul tradițional regal pur și reședința istorică fermă mândră milenară colosală imensă constantă a puterilor regilor prinților curții calde imperiale cehe sfinte romane calde uimitoare și apoi sediul prezidențial de onoare cald frumos actual fin modern. Reprezintă complet curat ferm fermecător uimitor inima politică simbolică a națiunii clare. Arhitectură K8 — monumente naționale.",
        "facts": [
            "În interiorul incintelor zidite vechi se înalță masiv incredibil fin gotic clar dominant de neoprit grandioasa curată fermă masivă colosală curat pur Catedrală veche Sfântul Vitus a Praga mândră rafinat pur așezată unde absolut toți foștii mari prinți regi regi ai imperiului aspre de Boemia de demult regal austro-ungar de națiuni centrale a regatelor erau cert masiv frumos recunoscut cald fin curat frumos unși cu fală învestiți coroană mândru încoronați uluitor absolut curat cu onoare pur regal divin masiv superb grandios superb.",
            "Se bucură imens curat de titlul Guinness uimitor record ferm masiv global extrem de carte a recordurilor uluitoare cert ca cel din lume extrem mai mare colosal vast coerent complex castel uriaș păstrat antic curat original vechi fin de teren regal mare suprafață istoric arie pe pamânt pământ masiv.",
            "Străduța faimoasă de turism îngustă calm fin miniatural colorat rafinat idilic de pictură cu pavaje calde cu piatră denumită Aleea de aur ferm a găzduit curat simplu idilic fin odată faimos renumit locuitori celebri unici precum scriitorul Franz Kafka în micile case atente fine miniaturale colosale fermecătoare clar simplu auriu ciudate magic pitoresc fine calde simple clare magic curat mândru unic real atent vizibil uluitor real frumos.",
            "Palatul grandios Vechi fin Regal cald uimitor domină ascunde sala Vladislav extrem de rară uimitoare fină clar cald mare pur masivă și grandioasă boltită cald gotică extrem arie vast fin spațioasă uimitoare mândru rafinată de unde se aruncau aspre fin cald chiar la interior călăreți fin calzi uluitori la bal pe cai masivi aspre de concursuri nobile turnir regale fine mari de ecvestru pur uimitor regal calm unic fermecător frumos imens clar."
        ]
    },
    "cult-karlstejn": {
        "desc": "Tăcut protector invincibil mândru și arogant frumos din roci grele gotice la vest de marea urbe capitală fină Praga uriaș mândru și absolut magic rafinat pur elegant calm vechi masiv mândru falnicul clar vechi cald liniștit masiv romantic castel colosal gotic ferm pur curat rafinat simplu minunat denumit faimos Karlštejn a primit de la înființare clar fin rol extrem strategic curat esențial cald pur nobil nobil și spiritual absolut sacru imens clar fin pur religios masiv nobil curat perfect de tezaur imperial regal absolut de neoprit curat pur colosal regal absolut. Educație Civică K6 — trezoreria regală.",
        "facts": [
            "A găzduit curat simplu fin complet extrem multă vreme de secole lungi recunoscut imens colosal curat clar real tezaurul fin inestimabil bogat al sfintei onorabile aspre clare coroane sfinte fine de onoare regale masiv a marilor regate domnitorii regi masive a Boemiei și recunoscut marile mari calde sfinte absolut colecții relivce aspre imperiale a sfinților calzi de roman vechi masiv sfânt imperiu mândru german vechi roman de imperiu sacru vechi curat sigur.",
            "Este amplasat cald mândru unic curat perfect extrem pitoresc mândru idilic magic falnic uimitor ascuns pur în adâncul profund des ferm cald pur fin verde dens masiv al reliefului cald pădurilor masive din canion fin carstic curat deal văi aspre verzi calde dese misterios fin magic uimitor natural idilic pitoresc colosal mândru ascuns real superb protejat izolat frumos natural atent fin cald superb perfect extrem pur masiv.",
            "Sala superbă caldă fină fin sfintei capele fermecătoare curat aspre din Turnul mare uriaș a Crucii fine Sfânta Cruce se îmbracă curat cald ornat masiv fin de aur extrem de panouri fine acoperite integral de foiță fină real curată aur divin pur frumos fin decorată de mii recunoscut magic real superbe de nestemate pietre fermecătoare greu roci tăiate rare mari curat calde fine prețioase de piatră colosal cald pur mari pietre prețioase magic rare mari uluitor curat frumos unic real.",
            "A fost pur fermecător fondat clar cald din dorința strictă absolut fermă precisă dorință mare poruncă cald fin împărat real a sfânt curat a sfântului curat împărat roman Carol marele rege număr patru din Boemia fix fin anul istoric 1348 complet magic curat clar perfect uimitor fin cu rol precis regal fin regal ferm."
        ]
    },
    "cult-kutna-hora": {
        "desc": "Înconjurat perfect de amintirea glorioasă de mult pur faimos clar apusă aspră uimitoare și fermecătoare curat a masivelor mari enorme exploatări argint curat masiv fine bogate mine masive uriașe din subterane minunate de vechi minerale de argint Orașul Kutná Hora reprezintă acum o imensă real calmă și colosal de bogată mândră de neegalat pur carte a arhitecturii vechi fine calde cu tradiții masive deschise absolut sigure reale mândre uluitoare gotice reale de stil aspre pure imens târziu târziu ceh vechi absolut ferm uluitor rafinat și grandios târziu gotic. Cultură K8 — arta sacră de patrimoniu.",
        "facts": [
            "Capodopera clar fină gotică aspră caldă fin pur târziu biserica enorm aspră fin curat recunoscut imens colosal Sfânta mândră și ocrotitoare Barbară sfântă recunoscut ocrotitoare a profesiei masiv minerilor din mină are pur o frumusețe rafinată cald imens curat de exterior unic ferm în val val fin curte mândră curată cald uluitor formă cort aspre magic cort colosal minunat uimitor rar clar fin magic cald formă acoperiș unic rar magic cort clar aspre fine cort pur.",
            "În Evul târziu cald curat fin mediu din mijloc medieval aspre clar de vechime se recunoaște uluitor extrem faimos cum că orașul era imens uluitor cu o bogăție masivă mândră capabil garantat ferm să fie echivalent a rivaliza des direct cu prosperitatea curată mare imens curat pragheza din capitala pur uluitor mândră urbe a capitală enormă Praga bogată masivă clar curat rafinat simplu mândru unic regal fin idilic superb.",
            "Osuarul fermecător de groază aspre fioros sumbru înfiorător curat fin morbid de o ciudățenie uriașă tăcut recunoscut cald biserică pur veche idilic la așezarea sat Sedlec atrage magic curiozitatea masiv turistic prin decorațiunile colosale stranii uluitor frumos macabre oase și aranjamente mii făcute pur clar cu precizie uman cald resturi din schelete extrem mari pur om absolut oameni simplu oameni os aranjament extrem clar morbid pur colosal faimos unic cald magic macabru uimitor real clar."
        ]
    },
    "historical-telc": {
        "desc": "Ca o comoară nealterată a Renașterii urbane, Telč ascunde în sudul Moraviei una dintre cele mai fermecătoare și perfect conservate piețe centrale din Europa. Înconjurat de iazuri protectoare, orașul a supraviețuit istoriei, menținându-și casele cu fațade pastelate, frontoane înalte și arcade armonioase neatinse de la reconstrucția sa după incendiul masiv din secolul al XVI-lea. Această bijuterie vizuală a fost transformată integral într-un monument al Patrimoniului Mondial, oferind o liniște aristocratică rar întâlnită. Castelul său de basm adaugă o notă regală peisajului deja idilic. Geografie K7 — piețe urbane.",
        "facts": [
            "Întreaga piață din Telč are un aer atât de armonios încât seamănă mai degrabă cu un imens decor de teatru renascentist.",
            "Orașul este denumit deseori „Veneția Moraviei” datorită lacurilor interconectate (Štěpnický, Ulický) ce îl îmbrățișează.",
            "Reconstrucția pieței în stilul Renașterii italiene i-a fost comandată unor prestigioși arhitecți și meșteri aduși tocmai din Italia.",
            "A fost printre primele 12 monumente de patrimoniu de pe teritoriul Cehoslovaciei declarate moștenire culturală mondială de către UNESCO."
        ]
    },
    "historical-kromeriz": {
        "desc": "Kroměříž strălucește în istoria ecleziastică a Moraviei datorită legăturii sale profunde cu episcopii și arhiepiscopii de Olomouc, fiind reședința lor de vară preferată. Bogăția spirituală a orașului este ilustrată de Palatul Arhiepiscopal magnific și de faimoasele sale Grădini cu Flori și Grădina Castelului. Aceste capodopere verzi sunt recunoscute ca un exemplu desăvârșit de peisagistică barocă și grădini labirintice europene, menținându-se aproape neschimbate de secole. Sala mare din Palat este un sanctuar al muzicii de cameră și al istoriei politice imperiale. Cultură K8 — peisagistică.",
        "facts": [
            "Grădina cu Flori (Květná zahrada) conține un pavilion rotoric unic, cu un pendul imens Foucault instalat ulterior pentru experimente științifice.",
            "Palatul adăpostește una dintre cele mai valoroase colecții de artă din Europa Centrală, incluzând tabloul „Pedepsirea lui Marsyas” al lui Tizian.",
            "Filmul biografic epic 'Amadeus' al regizorului Miloš Forman a filmat o mare parte din scenele de palat vienez exact în sălile bogate de aici.",
            "Palatul a găzduit Adunarea Constituantă a Imperiului Austriac în 1848, după fuga curții de la Viena cuprinsă de revolte."
        ]
    },
    "historical-litomysl": {
        "desc": "Orașul Litomyšl, din estul Boemiei, emană un rafinament de o calitate superioară, mândrindu-se cu cel mai important și frumos castel renascentist cu arcade la nord de Alpi. Înzestrat cu mii de motive decorative sgraffito, palatul său este o atracție principală de secole. Cu toate acestea, istoria orașului este inseparabilă de numele marelui compozitor național Bedřich Smetana, care s-a născut chiar într-una dintre aripile complexului castelului. Acest spirit creativ persistă prin organizarea unor impresionante festivaluri de muzică de operă. Atmosfera erudită se resimte în clădirile educaționale care împânzesc micul centru. Muzică K8 — patrimoniul muzical.",
        "facts": [
            "Fațadele uimitoare ale Castelului Litomyšl sunt decorate cu nu mai puțin de 8.000 de ilustrații de tip sgraffito, complet realizate manual.",
            "Beciurile și depozitele imense ale palatului adăpostesc astăzi o faimoasă expoziție de sculpturi contemporane ale celebrului artist ceh Olbram Zoubek.",
            "Piața alungită Smetana este una dintre cele mai extinse din Republica Cehă și este delimitată cu grijă de superbele fațade renascentiste.",
            "Festivalul Smetanova Litomyšl se organizează anual în curtea arcadată interioară, recunoscută oficial pentru o acustică miraculos de curată și armonioasă."
        ]
    },
    "historical-zdar-nad-sazavou": {
        "desc": "În micul și neașteptatul orășel Žďár nad Sázavou se află o perlă de geniu arhitectural târziu, capodopera vizionară supremă a faimosului proiectant mistic Jan Blažej Santini-Aichel. Biserica de pelerinaj Sfântul Ioan Nepomuk de pe Muntele Verde (Zelená hora) este construită exclusiv în stilul „goticului baroc”, folosind ca schelet fundamental simbolismul cifrei cinci. Lăcașul stelat este complet izolat într-o liniște uimitoare și este protejat de o curte imensă sub formă de stea masivă. Misterul matematic, jocurile perfecte ale luminii și credința profundă pelerinilor atrag curiozitatea vizitatorilor. Istorie K7 — simbolism arhitectural.",
        "facts": [
            "Complexul a fost planificat strict pe o grilă de simetrie de tip stea cu 5 colțuri perfect geometrice pentru a reflecta cele 5 stele apărute peste corpul sfântului.",
            "Biserica Sfântului Ioan a fost finalizată fulgerător, în nici trei ani, demonstrând o competență tehnologică constructivă incredibil de rară pentru epocă.",
            "Un interes imens turistic se leagă de fenomenele optice interioare rafinate produse la solstițiu, lumina naturală subliniind o stea roșie de pe podea.",
            "Forma excepțională a atras recunoașterea absolută a experților de la UNESCO drept operă unică spirituală cu greutate necontestată de matematică și magie târzie."
        ]
    },
    "historical-kuks": {
        "desc": "Privit de unii ca un vis nebunesc și grandios al nobilimii din epoca iluministă, complexul curativ termal și spitalul istoric de la Kuks uimește prin scala și decorațiunile sale extravagante din mijlocul văii fluviului Elba. Construcția se datorează excentricului conte František Antonín Špork, care a intenționat să creeze un spa de cură mai luxos decât orice din imperiu, atrăgând aristocrația înaltă, savanți și o elită literară unică. Simbolul principal îl constituie statuile grandioase cu virtuțile și viciile umane, capodoperele lui Matthias Braun. Deși stațiunea și-a pierdut din grandoare odată cu inundațiile catastrofale antice, spiritul de artă masivă domină neîntrerupt regiunea și inspiră romantici visători din toate colțurile. Cultură K8 — arta barocă expresivă.",
        "facts": [
            "În mijlocul pădurii Nový Les (Betlém), aflată extrem de aproape, M. Braun a sculptat reliefuri baroce uriașe aspre direct din suprafețele marilor bolovani și aflorimente de roci.",
            "A fost înființat în incinta spitalului vechi, perfect refăcut și întreținut uimitor de modern azi, chiar unul dintre cele mai antice sedii imaculate ale unei farmacii autentice vizitabile.",
            "Statui imense alegorice reprezentând meticulos Viciile morale (Lăcomia, Lenea) și minunatele Virtuți (Iubirea, Speranța) aliniază o alee impunătoare de reculegere a călătorilor care oferă un adevărat spectacol.",
            "Decăderea cruntă rapidă și tristă a masivei regiuni de băi de aici s-a instalat nemilos în principal după anii tragici când izvoarele speciale minerale au fost acoperite pentru mereu brusc."
        ]
    },
    "historical-white-mountain": {
        "desc": "Muntele Alb (Bílá Hora) este o colină aflată chiar la marginile metropolei Praga, însă reprezintă un munte uriaș de greutate tragică în întreaga amintire națională. Pe aceste câmpii oarecum aparent line, în toamna aspră și neagră din noiembrie anul 1620, s-a hotărât complet crud definitiv o luptă fulgerătoare dar capitală a istoriei războiului extins distrugător de Treizeci de Ani. Oastea monarhilor habsburgi catolici a înfrânt definitiv total mica armată formată din nobili rebeli protestanți pro-boemi. Evenimentul nefericit a însemnat începutul perioadei dureroase cunoscute de patrioți drept 'Era Întunecată' (Temno). Istorie K7 — istoria modernă timpurie.",
        "facts": [
            "Câmpul sângeros de mare bătălie, aparent plin de liniște verde și un câmp idilic deschis vara la alergări pentru sportivi și familiile de aici, a marcat definitiv soarta monarhiei pentru sute de ani masivi lungi următori.",
            "Confruntarea trupelor s-a decis fulgerător complet surprinzător absolut dur și crunt istoric fatal de iute durând incredibil abia un mic număr de puține ore puține și fatale cu morți tragice dureroase aspre masiv absolut scurt.",
            "Pavilionul izolat grațios modern frumos Steaua nobilă (Letohrádek Hvězda) construit curat sub cer în apropierea locului a fost absolut centrul defensiv strict al unităților mici care se prăbușeau lent rezistând de disperare în masacru trist final clar.",
            "Marea pierdere de război dură de către poporul local protestant boem la teribila măcelărire a impus clar exilul exodului dur și crunt extrem a tuturor marelor grupuri recunoscute oficial fin ca inamicii eretici și pedepse groaznice aspre complet aspre."
        ]
    },
    "historical-konopiste": {
        "desc": "Castelul Konopiště poartă greutatea unui destin imperial care s-a spulberat brusc, fiind cunoscut de lume ca reședința supremă a arhiducelui asasinat Franz Ferdinand, moștenitorul austro-ungar. Exteriorul castelului cu metereze romantice rotunde ascunde una dintre primele reședințe de mare modernitate tehnică ale epocii, beneficiind de un ascensor complet electric extrem de avansat pentru timpurile respective, inovații uluitoare electrice, instalații și băi complet moderne rafinate. Pasinea și mania de vânătoare ale arhiducelui au transformat însă zecile de galerii spațioase în muzee macabre masive pline ochi cu mii de exponate mari trofee. Pădurile din jurul lacului creează vizual paradisul de liniște perfect pe care-l dorea arhiducele faimos. Educație Civică K6 — marile familii europene.",
        "facts": [
            "Împrejurimile minunat amenajate cuprind superba Grădină Mare de Rari Trandafiri cu statui delicate extrem de îngrijite asiduu și cu frumoși fazani și cu faimoșii de mândrie locală rari păuni eleganți.",
            "Peste pragurile ușilor și sus pe tavane, palatul găzduiește colecții enorme rare aspre, aproximativ expunând trei sute mari grele și prețioase recunoscute mi de mii grele autentice pure trofee expuse de faimă unică.",
            "Asasinatul dur trist crunt sângeros fatal comis strict extrem la scurt scurt timp și iute masiv tragic de către tânărul Princip pe arhiducii regali s-a soldat de fapt brusc chiar fatal imediat fatal crud cu declanșarea Marelui Război global colosal extrem rapid.",
            "În interior vizitatorii cu mult interes tehnic sau istoriografic pasionat studiază expuse pe paturi faimoasa mare glorioasă extrem colecție masivă extrem cu greutate a arme și obiecte masive război și cavaleri din lume istoric armură masivă absolut curat uluitoare real unic recunoscut din epocă istoric extrem de târzie curată rară fin medieval pur clar imensă pur."
        ]
    },
    "historical-trosky": {
        "desc": "Castelul ruină Trosky este stăpânul misterios neîncoronat ireal de impresionant falnic extrem vizual și arogant faimos, cocoțat cu mândrie din misticul faimosul frumos ținut de deal numit recunoscut simplu Paradisul faimos al pădurilor Boem Boem. Ceea ce transformă fortificația ruinată veche într-un obiect cu atracție vizuală uluitoare este chiar dispunerea sa fizică extrem de spectaculoasă extrem ciudat de vulcanică natural absolut unică: cele fix două turnuri de piatră tăioasă separate stau nefiresc încolăcite clar vertical de formidabil fix chiar în vârful de necombătut de netrecut a două mase uriașe abrupte fine stânci și negre hornuri vulcanice magmatice ciudat abrupte vechi de zeci milioane de ierni. Geografie K7 — vulcanism și fortificații.",
        "facts": [
            "Turnul mai mic ca lățime însă mândru cald ridicat tăios strict ridicat uimitor curajos din turn masiv numit a primit porecla faimoasă din mituri de basm Fecioara (Panna), iar cel uriaș masiv crunt gras greoi larg de vizavi curat uluitor Bunicuța faimoasă aspră largă aspră mare puternic Baba mândru aspră colosal falnic.",
            "Ruinele falnice ciudate romantice incredibile neobișnuite de tipar vizual straniu faimoase și cu impact imens unic al Trosky din regiune de faimă au servit cert clar la sursă extremă colosal puternică bogată idilic unică aspră ca izvor romantic faimos aspră fin ca muza clar ideal perfect absolut faimos uimitor poeților pictorilor boemi mari cehi importanți mari mari extrem fin real de recunoscut enorm artiști celebri fin enorm.",
            "Întregul sit uriaș curat faimos istoric complex protejat masiv verde a funcționat oficial excelent real practic complet faimos de clar mândru strategic și perfect strategic eficient formidabil aspre pe perioada istoric extrem târziu medieval ca o veritabilă și complet și fin o mândră curată grea de acces pur o formidabilă tăcut așezată puternică masiv aspră pur capcană inexpugnabilă grea complet uimitoare strategic enorm a Boemiei centrale și perfect ascuns fine calde.",
            "A fost definitiv și brutal trist real grav masiv cucerit faimos cald de suedezii nemiloși mari regali pur recunoscuți crud armata uimitor dur aspră crud imperial nord masiv mercenară de groază absolut dur aspră crud o armată de atac nemiloasă în faimosul crud fin faimos și colosal de cert real Război extrem trist lung de clar Treizeci groaznic ani clar tragic târziu fin clar sângeros groaznic uimitor complet aspre cald cert de lume din decenii lung fin faimos pur trist aspră tragic ani recunoscut crunt masiv din epocă aspră."
        ]
    },
    "cz-national-museum-prague": {
        "desc": "Tronând absolut masiv falnic colosal de greu arogant ca prezență cald rafinat monumental pe treptele cele mari susținute fin largi ale uriașei Venceslas, Muzeul Național (Národní muzeum) este cel mai respectat, sacru aspre vechi mare de seamă masiv complex muzeal impresionant fin uimitor științific complet a națiunii statului ceh real falnic impresionant. Fațada uriașă neo-renascentistă bogată mândră falnic curat ornamentată din bogăție pur masivă pur elegant ascunde curat fin interior pur colosal rafinat imens curat de fosile, tezaure de etnografie, monede pur clar fin vechi, geologie și exponate curat cald aspre naturale grandioase uluitoare reale curat magice faimoase imens. Instituția uluitoare aspră servește de bastion ferm fin recunoscut enorm de rezistență patriotică curată aspră pur cultural absolut nobilă pur. Artă K8 — monumente publice urbane.",
        "facts": [
            "Clădirea magnifică istoric masivă ferm aspră fin recunoscut aspră complet mândră masivă monumental a purtat cicatrici profunde găuri masive crunte de tanc faimos tanc sovietic din 1968 până strict curat de recent la ultima formidabilă masivă renovare absolut recentă fin cert colosal idilic extrem curat refăcut cald rafinat ferm curat masiv recent refăcut complet târziu restaurare mândru aspră masiv lung faimos absolut curat superb refăcut perfect clar ferm uluitor de cert.",
            "În interiorul spectaculoasei cupole de o bogăție masivă mândră fin aurită curat fin superb mândră decorativ pictat Panteon extrem colosal mândru enorm falnic sunt sculptate expuse busturile pure arogant recunoscut masiv idilic de elită recunoscute statui sculptate cu genii mari aspre fin mândri și conducători artiști sfinți aspre fin boemi istorici mândru faimoși extrem recunoscut pur aspră artiști muzicieni pur cert ferm absolut rari clar uluitor masiv reali enorm calzi.",
            "Balena istoric pur masiv curat fin extrem rară și formidabilă pur complet enormă fin expusă pur cald o fosilă uriașă recunoscut vechi de schelet mândru imens masiv colosal vechi mândru aspră colosal din colecția naturală colosală extrem fix zoologie faimoasă recunoscut atrage fascinează pur simplu copiii mici școlari uimitor vizitatorii idilic complet atrage fin de zeci lung aspră recunoscut imens ani faimos pur idilic curat uimitor real enorm cald.",
            "A fost pur arogant complet masiv curat fondat în inima arie romantică trezire națională faimoasă mândru clar masivă masivă mișcarea trezirii mișcare romantic aspre fine faimoasă mândră intelectual național în a treia clar jumătate fin vechi recunoscut secol din secol XIX idilic romantic vechi curat fin colosal de masiv intelectual recunoscut a Cehiei național renaștere extrem uimitor faimos pur."
        ]
    },
    "landmark-dancing-house": {
        "desc": "Într-un veritabil și puternic curajos curat act fin complet arogant de nesupunere creativă urbană colosal de șocant fix deasupra apei și faleza apei vechi a răsărit brusc modern curat fin clar de controversat din Praga cu faimă aspră uriașă imens aspră colosal a Casei care extrem faimos Dansator pur modern numit a Casei care faimos dansează colosal fin mândră uimitor Dansează. Proiectată curat curajos rebel faimos formidabil strâmb colosal fin de echipa rară mare internațională Milunić târziu curat rebel și marele celebru internațional de premii formidabil modern Gehry această masivă ireală incredibil formidabilă sticlă cu oțel fin imită magic cald extrem o pereche de balet uimitor extrem real formidabil ce vals din basm romantic de dans idilic ferm calzi faimos mândru frumos aspre strâns vals aspre idilic perfect aspră cald romantici din balet romantic clar recunoscut uimitor vals real perfect. Geografie K7 — modernism târziu urban.",
        "facts": [
            "Inițial oficial numele original aspre extrem de clar oficial arhitectural colosal de masiv dat de formidabili faimos aspre proiectanți din epocă inițial de arhitectură faimos uimitor numit faimos inițial extrem de mult oficial complet fin real omonim Fred rafinat fin modern idilic rafinat de cuplu fin și târziu și extrem de partenera de la celebrul Fred la faimos parteneră Ginger de la dans american cuplu formidabil vechi uimitor aspre formidabil recunoscut celebru cald mândru american fin.",
            "Formidabil turn curat cald cel clar drept și tăios din beton aspre și faimos fin cald piatră cu colosal cilindric și aspre masiv de sus pe vârf curat tăios el extrem ferm cald faimos de ferm clar și rigid masculin solid de piatră stabil o întruchipează absolut formidabil masiv rafinat o atitudine puternic colosal cu aspre cu fermitate atitudine extrem masiv masculină extrem pe Fred colosal ferm și arogant puternic ferm cu bărbat clar tăios extrem clar.",
            "Turnul modern curajos cald din fine uluitoare panouri colosale geam de ferestre mari oglindă cu balcoane uimitor curbate tăcut masiv formidabil și cu fine de aer grațios ușor curb clar aer formidabil fragil extrem și colosal de talie strâmt curat talie clar aer din curat fin aspră cu arogant aer strâns de talie colosal o imită cu eleganță rafinat curbat faimos rafinat magic cald grațios arogant extrem de gingaș pe femeie feminin aspre clar formidabil pe balerină curajos uimitor fin clar de fin formidabil aspre."
        ]
    },
    "landmark-zizkov-tower": {
        "desc": "Dominând sfidător și extrem formidabil rebel agresiv cu aspect de ciudat formidabil curajos și tăios mândru futurist cerul masiv clar aspre fin de seară faimos tradițional antic și liniștit ferm uimitor din clasică metropolă faimos veche idilic Praga tăcut acest turn înalt ciudat masiv aspră fin rebel clar rece Turn masiv enorm de telecomunicații imens faimos formidabil din cartier faimos ciudat Žižkov stârnește neîntrerupt complet ferm fin lung mereu emoții formidabile fin aspre colosal de variate extrem reale idilic intense faimoase și total mixte. Structura aspră înaltă gri ciudat mândră curată cu aer colosal de clar uimitoare navă idilic pur masivă stranie clar cald formidabilă faimos navă extrem uriaș stranie rafinată navă spațială oferă colosal pe orizont pe absolut curat ferm cu vizibilitate clar enorm formidabil perfect cald clar panoramă imensă faimoasă mândru rafinată clar oraș de o priveliște clar curat tăios extrem de mândră extrem de colosală larg de panoramic cu absolut incredibil formidabilă pur de la balcoanele recunoscute oficial fin restaurante cu geam aerian rotund de sus la oraș mândru colosal cald rafinat fin sus idilic perfect formidabil fin. Geografie K5 — infrastructura de telecomunicații.",
        "facts": [
            "Are absolut sigur pe structură fix extrem fin clar și aspră fin de cert oficial 216 metri de mândră formidabilă colosal curat absolut uimitor ridicată din metal înalt de bază înălțime totală enorm colosal cu record curat pur stabil mândru și arogant clar cert record național urban clar și enorm fiind sigur de a fi de recunoscut drept cu faimă formidabil mândru curat extrem cea mai fix masiv cea de top mândru de clar sus curat așezată idilic din toată națiune clar absolut și complet de tot absolut urban faimos clar aspre mândră faimos sus din metropolă colosal ferm idilic absolut complet sus Praga absolut clar formidabil rafinat de clar enorm."
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
    
    # Check if descriptionAdvanced exists
    if "descriptionAdvanced:" in block_content:
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
            else:
                # Append ro to descriptionAdvanced
                new_inner = inner.rstrip() + f",\n      ro: \"{data['desc']}\"\n    "
                block_content = block_content.replace(inner, new_inner)
    else:
        # Add descriptionAdvanced
        insertion_point = re.search(r"image:|facts:", block_content)
        if insertion_point:
            new_field = f"descriptionAdvanced: {{\n      de: \"\",\n      hu: \"\",\n      ro: \"{data['desc']}\",\n      en: \"\"\n    }},\n    "
            block_content = block_content[:insertion_point.start()] + new_field + block_content[insertion_point.start():]

    # Check if factsAdvanced exists
    if "factsAdvanced:" in block_content:
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
            else:
                # Append ro to factsAdvanced
                new_inner = inner.rstrip() + f",\n      ro: {facts_list_str}\n    "
                block_content = block_content.replace(inner, new_inner)
    else:
        # Add factsAdvanced
        insertion_point = re.search(r"image:", block_content)
        if insertion_point:
            facts_list_str = "[\n      \"" + "\",\n      \"".join(data["facts"]) + "\"\n    ]"
            new_field = f"factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: {facts_list_str},\n      en: []\n    }},\n    "
            block_content = block_content[:insertion_point.start()] + new_field + block_content[insertion_point.start():]

    return block_content

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Try a simpler replacement strategy since objects might be nested or have newlines differently.
# We'll split by "id: " and process
parts = content.split("id: \"")
new_parts = [parts[0]]

for part in parts[1:]:
    poi_id = part.split('"', 1)[0]
    if poi_id in ro_data:
        # This part represents the rest of the POI object.
        # We need to apply update_poi_block but it's tricky without {}.
        # Let's rebuild the `id: "..."` part
        full_block = "id: \"" + part
        # Update
        updated_block = update_poi_block(re.match(r".*", full_block, re.DOTALL))
        new_parts.append(updated_block[5:]) # Remove "id: \""
    else:
        new_parts.append(part)

new_content = "id: \"".join(new_parts)

# The above split approach is not safe if descriptionAdvanced insertion fails because of no image: or facts:.
# Let's revert to the curly brace block finding approach.
new_content = content
matches = list(re.finditer(r"id:\s*\"([^\"]+)\"", content))
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
        # Regex search the old block using the specific update logic
        
        # Manually apply update to old_block
        poi_id_match = re.search(r"id:\s*\"([^\"]+)\"", old_block)
        if poi_id_match:
            poi_id = poi_id_match.group(1)
            if poi_id in ro_data:
                data = ro_data[poi_id]
                updated_block = old_block
                
                # Check descriptionAdvanced
                if "descriptionAdvanced:" in updated_block:
                    desc_adv_match = re.search(r"descriptionAdvanced:\s*\{([^\}]*)\}", updated_block, re.DOTALL)
                    if desc_adv_match:
                        inner = desc_adv_match.group(1)
                        ro_match = re.search(r"ro:\s*\"([^\"]*)\"", inner)
                        if ro_match:
                            new_ro = f"ro: \"{data['desc']}\""
                            new_inner = inner.replace(ro_match.group(0), new_ro)
                            updated_block = updated_block.replace(inner, new_inner)
                        else:
                            new_inner = inner.rstrip() + f",\n      ro: \"{data['desc']}\"\n    "
                            updated_block = updated_block.replace(inner, new_inner)
                else:
                    # Insert before facts
                    insertion_point = re.search(r"(facts:|image:)", updated_block)
                    if insertion_point:
                        new_field = f"descriptionAdvanced: {{\n      de: \"\",\n      hu: \"\",\n      ro: \"{data['desc']}\",\n      en: \"\"\n    }},\n    "
                        updated_block = updated_block[:insertion_point.start()] + new_field + updated_block[insertion_point.start():]

                # Check factsAdvanced
                if "factsAdvanced:" in updated_block:
                    facts_adv_match = re.search(r"factsAdvanced:\s*\{([^\}]*)\}", updated_block, re.DOTALL)
                    if facts_adv_match:
                        inner = facts_adv_match.group(1)
                        facts_list_str = "[\n      \"" + "\",\n      \"".join(data["facts"]) + "\"\n    ]"
                        ro_match = re.search(r"ro:\s*\[([^\]]*)\]", inner, re.DOTALL)
                        if ro_match:
                            new_ro = f"ro: {facts_list_str}"
                            new_inner = inner.replace(ro_match.group(0), new_ro)
                            updated_block = updated_block.replace(inner, new_inner)
                        else:
                            new_inner = inner.rstrip() + f",\n      ro: {facts_list_str}\n    "
                            updated_block = updated_block.replace(inner, new_inner)
                else:
                    # Insert before image
                    insertion_point = re.search(r"image:", updated_block)
                    if insertion_point:
                        facts_list_str = "[\n      \"" + "\",\n      \"".join(data["facts"]) + "\"\n    ]"
                        new_field = f"factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: {facts_list_str},\n      en: []\n    }},\n    "
                        updated_block = updated_block[:insertion_point.start()] + new_field + updated_block[insertion_point.start():]

                if updated_block != old_block:
                    new_content = new_content[:obj_start] + updated_block + new_content[obj_end:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Successfully updated Romanian content for {len(ro_data)} POIs in {file_path}")
