import json
import os

batch2 = {
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
      "id": "georgia-aerospace-industry-economic-v2",
      "descriptionAdvanced": "Sectorul aerospațial din Georgia a devenit în ultimele decenii un pivot masiv al inovației tehnologice din sud-estul Statelor Unite. Cu un sediu istoric puternic ancorat în prezența gigantului Lockheed Martin în Marietta, unde s-au construit aeronave militare legendare precum C-130 Hercules și F-22 Raptor, industria a evoluat spectaculos. Astăzi, exporturile aerospațiale constituie cel mai mare segment de export al statului Georgia, evaluat la miliarde de dolari. Cu zeci de mii de angajați înalt calificați și programe academice de elită furnizate de Institutul de Tehnologie din Georgia (Georgia Tech), regiunea susține un ecosistem perfect de inginerie, aviație comercială și componente militare de ultimă generație. Geografie K8 — inovație și manufactură avansată.",
      "factsAdvanced": [
        "Facilitatea Lockheed Martin din Marietta produce aeronave de transport militar din anii 1950.",
        "Industria aerospațială este exportul numărul unu al statului Georgia în termeni financiari.",
        "Aeronava invizibilă F-22 Raptor a fost parțial asamblată în acest stat.",
        "Georgia Tech asigură forța de muncă esențială prin cel mai mare program de inginerie aerospațială.",
        "Peste 500 de companii aerospațiale activează direct pe teritoriul statului.",
        "Sectorul aduce statului Georgia venituri de peste 9 miliarde de dolari anual."
      ]
    },
    {
      "id": "north-carolina-biotech-industry-economic-v2",
      "descriptionAdvanced": "Research Triangle Park (RTP) din Carolina de Nord reprezintă cel mai mare parc dedicat cercetării biotehnologice și științelor vieții din Statele Unite ale Americii. Formând un triunghi geografic între Universitatea Duke, Universitatea de Stat din Carolina de Nord și Universitatea din Carolina de Nord din Chapel Hill, parcul a fost inaugurat în 1959 pentru a transforma economia statului dintr-una agrară și textilă într-o economie bazată pe cunoaștere. Astăzi, RTP adăpostește sediile uriașe ale celor mai mari companii globale farmaceutice și de cercetare agricolă. Acesta sprijină mii de oameni de știință în dezvoltarea de noi medicamente, terapii genetice și inovații agrotehnice care revoluționează medicina modernă. Geografie K8 — economia cunoașterii.",
      "factsAdvanced": [
        "Research Triangle Park a fost fondat oficial în anul 1959.",
        "Se întinde pe o suprafață masivă de peste 2.800 de hectare de teren dedicat cercetării.",
        "Aici își desfășoară activitatea zilnică peste 55.000 de profesioniști și cercetători.",
        "Găzduiește operațiuni pentru giganți precum GlaxoSmithKline și Bayer.",
        "A facilitat dezvoltarea a numeroase tratamente oncologice și terapii inovatoare.",
        "A contribuit decisiv la tranziția economică post-industrială a Carolinei de Nord."
      ]
    },
    {
      "id": "port-of-baltimore-economic-v2",
      "descriptionAdvanced": "Portul Baltimore, situat strategic în adâncul estuarului Chesapeake Bay, se află mai aproape de marile piețe industriale din Midwest-ul american decât oricare alt port maritim major de pe Coasta de Est. Această apropiere critică l-a transformat în poarta principală de intrare din Statele Unite pentru importul masiv de automobile noi tip roll-on/roll-off (RoRo) și echipamente agricole grele. De-a lungul istoriei, a servit și ca pilon pentru industria siderurgică locală, ajutând la construirea infrastructurii americane. După extinderea infrastructurii sale și capabilitatea de a găzdui nave cargo masive de tip Neo-Panamax, portul continuă să genereze miliarde de dolari anual și să susțină economia statului Maryland. Geografie K7 — rute comerciale maritime.",
      "factsAdvanced": [
        "Este portul numărul unu din SUA pentru importul și exportul de automobile noi.",
        "Locația sa interioară îl face cel mai apropiat port din Est față de piețele din Midwest.",
        "Terminalul Dundalk este unul dintre cele mai avansate facilități pentru mărfuri grele.",
        "Portul manipulează anual peste 10 milioane de tone de mărfuri de uz general.",
        "A fost unul dintre primele porturi americane capabile să primească nave Neo-Panamax.",
        "Susține direct și indirect peste 15.000 de locuri de muncă în Maryland."
      ]
    },
    {
      "id": "port-of-houston-deepwater-economic-v2",
      "descriptionAdvanced": "Portul Houston este o realizare uluitoare a ingineriei umane și centrul absolut al industriei petrochimice a Americii de Nord. Inaugurat în 1914, după dragarea extinsă a Canalului Navigabil Houston (Houston Ship Channel), acesta conectează orașul cu Golful Mexic pe o distanță de 80 de kilometri. De-a lungul canalului său monumental se află cel mai vast și complex lanț de rafinării de petrol și uzine chimice de pe glob. Astăzi, Portul Houston este lider național în ceea ce privește tonajul de marfă pe apă de import și export și un pilon vital al securității energetice globale, procesând neîncetat țiței, mase plastice, gaze naturale lichefiate și produse manufacturate. Geografie K8 — resurse energetice și comerț global.",
      "factsAdvanced": [
        "Canalul Navigabil Houston a fost deschis oficial navigației de mare adâncime în 1914.",
        "Este portul american cu cel mai mare volum de export de produse petroliere și petrochimice.",
        "Complexul său industrial de rafinare este cel mai mare din întreaga emisferă vestică.",
        "Canalul are o lungime remarcabilă de aproximativ 80 de kilometri până la Golf.",
        "Gestionează constant peste 280 de milioane de tone de mărfuri anual.",
        "Zeci de mii de nave, șlepuri și tancuri petroliere tranzitează zona în fiecare an."
      ]
    },
    {
      "id": "texas-wind-energy-economic-v2",
      "descriptionAdvanced": "Peisajul energetic al statului Texas a suferit o transformare uluitoare în secolul 21, trecând dincolo de petrol pentru a deveni gigantul incontestabil al Statelor Unite în generarea de energie eoliană. Vânturile puternice și constante care străbat câmpiile deschise ale Panhandle-ului texan și ale regiunilor vestice au permis construirea unor parcuri eoliene de dimensiuni monumentale, cum ar fi Parcul Eolian Roscoe. Susținută de inițiativa statală de extindere a rețelelor de transport al energiei, cunoscută sub numele de CREZ, capacitatea de producție a Texasului o depășește adesea pe cea a multor națiuni suverane. Astăzi, turbinele masive generează o cantitate uriașă de electricitate curată, acoperind în momente de vârf o cotă majoră din consumul statului. Geografie K7 — energii regenerabile.",
      "factsAdvanced": [
        "Texas generează mai multă energie eoliană decât oricare alt stat din SUA.",
        "Parcul Eolian Roscoe a fost la un moment dat cea mai mare fermă eoliană terestră din lume.",
        "Capacitatea totală instalată a eolienelor depășește constant cifra de 30.000 Megawați.",
        "În zilele de iarnă sau primăvară, vântul poate asigura peste 50% din energia rețelei texane.",
        "Zona Panhandle din nord și vestul Texasului sunt locațiile cu cele mai intense curenți.",
        "Statul a investit miliarde în liniile de transmisie CREZ pentru a transporta energia."
      ]
    },
    {
      "id": "boston-biotech-economic-v2",
      "descriptionAdvanced": "Zona metropolitană Greater Boston, cu centrul epic în Kendall Square din Cambridge, reprezintă cel mai dens și productiv cluster de biotehnologie și științe ale vieții de pe planetă. Această concentrare unică este alimentată de apropierea strânsă a unor universități de vârf mondial precum MIT și Harvard, împreună cu spitale de cercetare de o excelență absolută, cum ar fi Massachusetts General Hospital. Companii farmaceutice colosale și mii de start-up-uri agresive lucrează aici la dezvoltarea unor vaccinuri revoluționare (inclusiv cele bazate pe tehnologia m-ARN, esențiale în combaterea pandemiei), medicamente personalizate și tehnici avansate de editare genetică. Impactul său economic local este imens, atrăgând cel mai mare volum de investiții de capital de risc pe cap de locuitor în sănătate. Geografie K8 — tehnologia medicală.",
      "factsAdvanced": [
        "Kendall Square este adesea denumit 'cea mai inovatoare milă pătrată de pe pământ'.",
        "Compania Moderna, pionieră în tehnologia vaccinurilor m-ARN, are sediul în Cambridge.",
        "Institutul Tehnologic din Massachusetts (MIT) furnizează constant cercetători și invenții.",
        "Regiunea primește anual miliarde de dolari în finanțări din partea National Institutes of Health (NIH).",
        "Aici activează cel mai mare număr de cercetători în genetică și biomedicină din SUA.",
        "Massachusetts găzduiește sediile a peste 1.000 de organizații bio-farmaceutice."
      ]
    },
    {
      "id": "port-of-anchorage-economic-v2",
      "descriptionAdvanced": "Portul Alaska din Anchorage reprezintă linia vitală absolută de supraviețuire pentru imensul și izolatarul stat Alaska. Deschis operațiunilor comerciale în anul 1961, portul își desfășoară activitatea pe tot parcursul anului într-unul dintre cele mai aspre și neiertătoare medii marine, fiind imun la înghețul complet al apelor de coastă. Acesta gestionează importul a aproximativ 90% din bunurile de larg consum, materialele de construcție și carburanții destinați locuitorilor statului, precum și echipamentele vitale pentru uriașa industrie petrolieră de pe versantul nordic (North Slope). Mai mult, servește ca platformă critică de sprijin logistic pentru multiple baze militare americane, asigurând forța de apărare strategică din regiunea arctică. Geografie K7 — infrastructuri esențiale și medii extreme.",
      "factsAdvanced": [
        "A început operațiunile maritime masive în anul 1961.",
        "Manevrează o estimare de 90% din toate mărfurile esențiale importate în Alaska.",
        "A rezistat devastatorului cutremur din Vinerea Mare din 1964 fără daune terminale.",
        "Este un port deschis navigației pe tot parcursul anului, indiferent de condițiile iernii.",
        "Aprovizionează facilitățile militare uriașe din regiune, precum Baza Comună Elmendorf-Richardson.",
        "Include terminale specializate pentru importul rafinat de combustibil de aviație."
      ]
    },
    {
      "id": "las-vegas-tourism-industry-economic-v2",
      "descriptionAdvanced": "Las Vegas, ivit dintr-un deșert arid în deșertul Mojave, este capitala absolută a divertismentului, jocurilor de noroc și ospitalității la nivel mondial. Ridicarea legalizării jocurilor de noroc în Nevada în 1931 a deschis calea spre crearea faimoasei artere Las Vegas Strip, dominată astăzi de mega-stațiuni, cazinouri uriașe cu tematici incredibile și replici la scară largă ale monumentelor globale. Industria turismului de aici susține direct sute de mii de locuri de muncă și generează anual zeci de miliarde de dolari. Las Vegas nu se limitează doar la cazinouri, ci s-a transformat în principala destinație americană pentru spectacole live de anvergură colosală, gastronomie de lux condusă de chefi celebri și uriașe convenții internaționale corporative. Geografie K8 — economii bazate pe turism.",
      "factsAdvanced": [
        "Jocurile de noroc au fost legalizate în statul Nevada în anul 1931.",
        "The Las Vegas Strip are o lungime aproximativă de 6,8 kilometri.",
        "Orașul găzduiește anual aproximativ 40 de milioane de vizitatori internaționali și naționali.",
        "Multe dintre cele mai mari 20 de hoteluri din lume după numărul de camere se află aici.",
        "Industria convențiilor atrage peste 6 milioane de delegați la expoziții majore.",
        "Aeroportul Internațional Harry Reid este un factor critic de conectivitate globală pentru turism."
      ]
    },
    {
      "id": "port-of-new-orleans-economic-v2",
      "descriptionAdvanced": "Portul New Orleans ocupă o poziție geografică unică la gura monumentalului sistem fluvial Mississippi, acționând ca punctul terminus de export pentru bogățiile interioare ale Statelor Unite. Istoria sa a fost fundamentată pe exportul masiv de bumbac, zahăr și cherestea, devenind astăzi liderul incontestabil în procesarea și expedierea cerealelor agricole (cum ar fi soia și porumbul) produse de fermierii din Midwest. Rețeaua sa imensă de barje și silozuri conectează inima agricolă a țării cu piețele alimentare mondiale din Asia și Europa. De asemenea, portul este un hub uriaș pentru importul materiilor prime chimice și pentru vasele de croazieră care străbat Marea Caraibelor, stimulând semnificativ economia statului Louisiana. Geografie K7 — transport maritim și fluvial.",
      "factsAdvanced": [
        "Conectează inima agricolă a Statelor Unite prin peste 23.000 de kilometri de căi navigabile.",
        "Exportă un volum enorm, mai mult de 60% din recolta națională de cereale.",
        "A fost afectat sever, dar reconstruit, după devastarea produsă de Uraganul Katrina în 2005.",
        "Râul Mississippi se varsă în Golful Mexic, la sud de facilitățile portuare.",
        "Reprezintă unul dintre cele mai importante puncte de plecare pentru navele de croazieră din sud.",
        "Importă mari cantități de oțel, cauciuc și boabe de cafea pentru consumul național."
      ]
    },
    {
      "id": "seattle-aerospace-industry-economic-v2",
      "descriptionAdvanced": "Regiunea metropolitană Seattle din statul Washington a definit zborul comercial modern prin prezența istorică gigantică a corporației Boeing. Fondată în 1916 de pionierul aviației William Boeing, compania a transformat zona Puget Sound într-o uriașă forjă industrială. Aici au fost proiectate și asamblate aeronave revoluționare care au schimbat lumea, precum legendarul B-17 în timpul Războiului, urmat de revoluționarele avioane de pasageri 707, 737, modelul colosal 747 Jumbo Jet și modernul 787 Dreamliner. Deși producția a fost extinsă și în alte regiuni ulterior, fabricile masive din Everett și Renton continuă să asambleze avioane inovatoare, menținând Seattle ca epicentrul global de necontestat al ingineriei aerospațiale civile. Istorie K8 — inovația în transport.",
      "factsAdvanced": [
        "Compania Boeing a fost înființată în Seattle, Washington, în anul 1916.",
        "Fabrica Boeing din Everett este considerată cea mai mare clădire din lume ca volum.",
        "Modelul 747 'Jumbo Jet' a fost proiectat, testat și construit inițial în această regiune.",
        "A asigurat un val enorm de muncitori în timpul celui de-al Doilea Război Mondial.",
        "Muzeul Zborului (Museum of Flight) păstrează moștenirea uriașă a aviației locale.",
        "Industria reunește zeci de mii de ingineri aero-spațiali și specialiști în zonă."
      ]
    },
    {
      "id": "austin-tech-cluster-economic-v2",
      "descriptionAdvanced": "Austin, capitala statului Texas, a suferit o metamorfoză economică fulminantă, evoluând dincolo de rolul său administrativ și muzical pentru a deveni 'Silicon Hills', un hub tehnologic global gigant. Această creștere a fost inițial stimulată de înființarea companiei Dell în anii 1980 și susținută puternic de fondul imens de talente furnizat de Universitatea Texas din Austin. Mai recent, zona a atras sedii majore și uriașe unități de producție ale companiilor precum Tesla, Apple, Google și Oracle, alături de sute de companii de software, semiconductori și securitate cibernetică. Combinația dintre lipsa impozitului pe venit la nivel de stat și atmosfera culturală vibrantă a atras zeci de mii de tineri profesioniști, transformând orașul într-un magnet economic inovator. Geografie K8 — noi centre tehnologice.",
      "factsAdvanced": [
        "Este adesea supranumit 'Silicon Hills' datorită creșterii sale masive în tehnologie.",
        "Compania de computere Dell a fost fondată aici de Michael Dell în anul 1984.",
        "Tesla a finalizat recent construcția gigafabricii sale masive Giga Texas în anul 2022.",
        "Universitatea Texas din Austin produce mii de ingineri calificați anual.",
        "Zeci de firme uriașe din California s-au relocat aici din cauza taxelor reduse.",
        "Regiunea este, de asemenea, un imens centru pentru dezvoltarea jocurilor video."
      ]
    },
    {
      "id": "mesa-verde-national-park-history-v2",
      "descriptionAdvanced": "Parcul Național Mesa Verde, situat în partea de sud-vest a statului Colorado, conservă unele dintre cele mai spectaculoase și mai bine păstrate ruine ale culturii Ancestral Pueblo (cunoscută anterior drept Anasazi) de pe continentul nord-american. Locuită cu mii de ani în urmă, această populație a construit locuințe remarcabile în alcovurile și stâncile abrupte ale canioanelor adânci în perioada cuprinsă între anii 1190 și 1260 d.Hr. Cea mai faimoasă structură așezată, Cliff Palace, deține peste 150 de încăperi și kivas subterane. În ciuda unei organizări agricole complexe, cu sisteme de irigații, populația a părăsit misterios zona la sfârșitul secolului 13, probabil din cauza unor perioade masive de secetă prelungită și a schimbărilor de mediu. Istorie K7 — popoarele indigene precolumbiene.",
      "factsAdvanced": [
        "Structurile din stâncă au fost edificate în principal între anii 1190 și 1260 d.Hr.",
        "Așezarea principală, Cliff Palace, dispune de 150 de camere și 23 de kivas.",
        "Triburile Pueblo au părăsit zona într-un mod misterios în jurul anului 1300 d.Hr.",
        "Locul a fost desemnat Parc Național în 1906, la inițiativa președintelui Theodore Roosevelt.",
        "Mesa Verde este listat ca un impresionant loc al Patrimoniului Mondial UNESCO din 1978.",
        "Zona parcului acoperă o imensă rețea de platouri și canioane abrupte de gresie."
      ]
    },
    {
      "id": "cahokia-mounds-history-v2",
      "descriptionAdvanced": "Situl Istoric de Stat Cahokia Mounds din sudul statului Illinois este inima celei mai mari civilizații precolumbiene la nord de Mexic. La apogeul său, între anii 1050 și 1200 d.Hr., această uimitoare așezare a culturii mississippiene a găzduit probabil până la 20.000 de locuitori, o populație mai mare decât cea a Londrei din aceeași perioadă. Centrul spiritual și politic al metropolei este Monks Mound, o gigantică piramidă de pământ terasată care atinge o înălțime de 30 de metri, fiind cea mai colosală structură de pământ preistorică din Americi. Societatea din Cahokia era remarcabil de complexă, integrând vaste rețele comerciale de-a lungul râurilor centrale și practicând o agricultură sofisticată a porumbului, înainte de a intra într-un declin abrupt. Istorie K8 — societățile indigene din America de Nord.",
      "factsAdvanced": [
        "Metropola Cahokia a atins apogeul său uluitor între anii 1050 și 1200 d.Hr.",
        "Monks Mound se înalță la aproximativ 30 de metri, acoperind o bază de 5 hectare.",
        "Peste 120 de movile masive de pământ au fost edificate inițial în zonă.",
        "Populația sa maximă a fost estimată între 10.000 și 20.000 de indivizi.",
        "Civilizația de aici se baza profund pe cultura pe scară largă a porumbului.",
        "Woodhenge, un calendar solar format din posturi mari de cedru, a fost descoperit aici."
      ]
    },
    {
      "id": "jamestown-settlement-history-v2",
      "descriptionAdvanced": "Fondată în 1607 pe o insulă mlaștinoasă de pe râul James din Virginia, Jamestown a devenit prima așezare permanentă de succes a coloniștilor englezi în America de Nord. Sponsorizată de compania financiară Virginia Company of London, expediția timpurie a fost condusă de căpitanul John Smith și a avut de înfruntat provocări teribile: foame extremă, boli mortale și conflicte violente cu triburile locale aparținând puternicei Confederații Powhatan. În iarna anului 1609, cunoscută sub numele de „Vremea Foamei”, colonia a fost la un pas de extincție totală. Salvarea ei a venit prin sosirea neașteptată a noilor provizii și a succesului agricol ulterior al cultivării tutunului profitabil dezvoltat de John Rolfe. Această așezare a semănat semințele expansiunii coloniale britanice masive. Istorie K8 — primele colonii englezești.",
      "factsAdvanced": [
        "S-a fondat oficial ca și colonie engleză permanentă în anul 1607.",
        "Timpul cumplit dintre 1609 și 1610 a fost numit 'Vremea Foamei' (The Starving Time).",
        "John Rolfe a salvat viitorul coloniei cultivând tutun pentru export în 1612.",
        "Primii sclavi africani documentați au fost debarcați în această colonie în 1619.",
        "Coloniștii aveau de a face constant cu uriașa Confederație indigenă Powhatan.",
        "Pocahontas, fiica liderului suprem Powhatan, s-a căsătorit cu Rolfe, cimentând o scurtă pace."
      ]
    },
    {
      "id": "plymouth-rock-history-v2",
      "descriptionAdvanced": "Conform imensei tradiții americane, Plymouth Rock marchează locul precis unde pelerinii protestanți separatiști, ajunși la bordul faimoasei nave Mayflower, au debarcat în decembrie 1620 pentru a înființa Colonia Plymouth în actualul Massachusetts. Deși piatra în sine este o bucată modestă de granit și nu a fost recunoscută ca sit oficial al debarcării decât o sută de ani mai târziu, ea s-a transformat în simbolul absolut al credinței religioase libere, al curajului extrem și al pionieratului fondator american. Pelerinii au semnat înainte de debarcare Acordul Mayflower (Mayflower Compact), primul document guvernamental masiv care stabilea o administrare bazată pe consimțământul comunității în Lumea Nouă. Supraviețuirea coloniștilor în primul iernat brutal s-a datorat sprijinului salvator acordat de poporul indigen Wampanoag. Istorie K8 — Pelerinii și libertatea religioasă.",
      "factsAdvanced": [
        "Nava istorică Mayflower a sosit în largul portului în decembrie 1620.",
        "Mayflower Compact a fost semnat de toți pasagerii de sex masculin pentru a stabili legi.",
        "Mai mult de jumătate dintre cei 102 coloniști originari au murit în prima iarnă cumplită.",
        "Pelerinii au fondat o tradiție uriașă celebrând recolta, devenită Ziua Recunoștinței în 1621.",
        "Tribul indigen Wampanoag, condus de Massasoit, a oferit ajutor critic, învățându-i să cultive.",
        "Piatra în sine a fost despicată și mutată de mai multe ori de-a lungul secolelor."
      ]
    },
    {
      "id": "colonial-williamsburg-history-v2",
      "descriptionAdvanced": "Williamsburg a fost centrul cultural, politic și educațional absolut al masivei și influentei Colonii a Virginiei între 1699 și 1780, anul în care capitala a fost mutată mai în siguranță spre Richmond în timpul Războiului Revoluționar. Aici, pe străzile pavate din fața clădirii elegante a Capitoliului și a Tavernei Raleigh, figuri colosale fondatoare precum George Washington, Thomas Jefferson și Patrick Henry s-au format politic și au dezbătut pasional despre libertate, democrație și rezistența la controlul coroanei britanice. Astăzi, sub numele de Colonial Williamsburg, este cel mai mare muzeu viu în aer liber al țării. Zeci de clădiri masive au fost meticulos restaurate sau reconstruite grație fondurilor oferite de John D. Rockefeller Jr., oferind vizitatorilor o fereastră exactă spre viața din secolul al XVIII-lea. Istorie K8 — viața colonială.",
      "factsAdvanced": [
        "A devenit capitala oficială a prestigioasei colonii a Virginiei în 1699.",
        "Colegiul William & Mary a fost înființat în oraș în 1693, fiind al doilea cel mai vechi.",
        "Declarația istorică pentru drepturi a Virginiei a fost elaborată aici în 1776.",
        "Miliardarul John D. Rockefeller Jr. a finanțat masiv restaurarea sa începută în 1926.",
        "Orașul recondiționat conține peste 80 de structuri și fundații coloniale originale.",
        "Locul reconstituie zilnic meserii uriașe preindustriale (fierari, tipografi, dulgheri)."
      ]
    },
    {
      "id": "valley-forge-history-v2",
      "descriptionAdvanced": "Valley Forge, situată în Pennsylvania, a fost locația taberei uriașe de iarnă pentru Armata Continentală americană condusă de George Washington, din decembrie 1777 până în iunie 1778. Perioada a devenit legendară nu din cauza unei lupte eroice armate, ci prin dovada imensă de suferință și forță umană. Peste două mii de soldați au murit din pricina bolilor devastatoare, cum ar fi tifosul și dizenteria, a frigului paralizant și a malnutriției severe. Cu toate acestea, în acest loc sumbru, armata neexperimentată a fost transformată iremediabil. Datorită antrenamentului riguros și tacticilor impuse de ofițerul prusac Friedrich von Steuben, soldații au părăsit tabăra la venirea verii ca o forță militară disciplinată, profesionalizată și capabilă să înfrunte măreața armată britanică. Istorie K8 — Războiul de Independență American.",
      "factsAdvanced": [
        "Trupele s-au adăpostit în tabăra izolată din decembrie 1777 până în iunie 1778.",
        "Se estimează că aproximativ 2.000 de bărbați au pierit din cauza bolilor și foamei crunte.",
        "Baronul von Steuben a redactat un manual masiv de foraj militar în această iarnă.",
        "Generalul George Washington a menținut un moral fragil în ciuda resurselor extrem de puține.",
        "A marcat momentul nașterii oficiale a Armatei Continentale ca o forță coezivă unită.",
        "Astăzi este un vast parc istoric național presărat cu reconstrucții de cabane de bușteni."
      ]
    },
    {
      "id": "yorktown-battlefield-history-v2",
      "descriptionAdvanced": "Bătălia masivă de la Yorktown, desfășurată în toamna anului 1781 în Virginia, a reprezentat lovitura decisivă finală din cadrul Războiului Revoluționar American. Sub comanda inteligentă a generalului George Washington și susținut masiv pe mare și uscat de forțele aliate franceze ale Contelui de Rochambeau, armata franco-americană a încercuit și a forțat prin asediu capitularea armatei britanice. Blocada navală franceză crucială a amiralului de Grasse a tăiat absolut orice speranță de retragere pentru generalul englez Charles Cornwallis. Capitularul englez la Yorktown a pus efectiv capăt luptelor militare extinse, ducând în cele din urmă la incredibila recunoaștere globală a independenței americane prin semnarea Tratatul de la Paris în 1783. Istorie K8 — victoria revoluției.",
      "factsAdvanced": [
        "Asediul gigantic de la Yorktown a durat din 28 septembrie până la 19 octombrie 1781.",
        "Generalul englez Lordul Cornwallis s-a predat oficial împreună cu 8.000 de militari britanici.",
        "Marea flotă franceză a asigurat controlul marin strategic absolut în bătălia de pe mare.",
        "Tratatul de la Paris, semnat oficial în 1783, a decurs direct ca o urmare a acestei victorii.",
        "Forțele aliate aveau un avantaj masiv numeric pe uscat împotriva forțelor blocate.",
        "Se consideră conflictul terestru suprem care a născut independența totală a Statelor Unite."
      ]
    },
    {
      "id": "monticello-history-v2",
      "descriptionAdvanced": "Monticello este magnifica proprietate de pe o plantație de elită din Virginia, care a funcționat drept casă și operă centrală de arhitectură pentru Thomas Jefferson, al treilea președinte al Statelor Unite și principalul autor al Declarației de Independență. Proiectată masiv chiar de Jefferson într-un rafinat stil neoclasic de inspirație palladiană, reședința domină o creastă și demonstrează o ingeniozitate colosală, prin paturi care economisesc spațiu și mecanisme complexe cu ceas. Cu toate acestea, frumusețea idilică a moșiei stă într-un paradox șocant față de credințele autorului: de-a lungul vieții sale, pe plantația imensă de 5.000 de acri, Jefferson a menținut în sclavie și muncă forțată peste 600 de bărbați, femei și copii afro-americani. Moșia este astăzi o atracție esențială care predă ambele perspective istorice. Istorie K8 — părinții fondatori și paradoxul sclaviei.",
      "factsAdvanced": [
        "Construcția clădirii spectaculoase a început în 1768 sub conducerea directă a lui Jefferson.",
        "Monticello înseamnă literalmente „munte mic” în vechiul dialect italian.",
        "Jefferson a moștenit mii de acri de pământ și peste 150 de sclavi prin căsătorie.",
        "Proprietatea include imense grădini botanice unde Jefferson testa noi recolte de plante.",
        "Locul a fost declarat un impunător sit al Patrimoniului Mondial UNESCO în 1987.",
        "Sub pământ au fost excavate spații uriașe pentru bucătării și facilitățile de lucru ale sclavilor."
      ]
    },
    {
      "id": "fort-mchenry-history-v2",
      "descriptionAdvanced": "Fort McHenry este fortăreața masivă cu o arhitectură stelară în formă de pentagon situată la intrarea în portul Baltimore. Renumele său internațional a survenit în urma atacului feroce din Războiul din 1812. În timpul noptii dramatice din 13 spre 14 septembrie 1814, flota uriașă britanică a lansat un bombardament maritim susținut, trăgând mii de obuze și rachete asupra fortului. Cu toate acestea, fortificațiile americane au rezistat brav asaltului. Când soarele a răsărit, steagul uriaș cu cincisprezece stele și cincisprezece dungi zbura intact deasupra structurii, semnalând eșecul britanicilor. Această priveliște uimitoare l-a inspirat masiv pe Francis Scott Key să compună poezia emoționantă „The Star-Spangled Banner”, care, pe muzica unei balade existente, avea să devină grandiosul imn național al Americii. Istorie K8 — Războiul din 1812.",
      "factsAdvanced": [
        "Bombardamentul masiv de la Baltimore a avut loc între 13 și 14 septembrie 1814.",
        "Fortăreața în formă de stea a fost terminată în 1803 pentru apărarea orașului.",
        "Steagul uimitor, cusut de Mary Pickersgill, măsura peste 9 pe 12 metri dimensiune.",
        "Francis Scott Key a observat atacul violent dintr-o ambarcațiune pe estuarul Chesapeake.",
        "'The Star-Spangled Banner' a fost adoptat oficial ca imn național abia în anul 1931.",
        "Astăzi funcționează ca Monument Național și Altar Istoric (singurul de acest fel din SUA)."
      ]
    },
    {
      "id": "pearl-harbor-history-v2",
      "descriptionAdvanced": "Atacul catastrofal, surpriză lansat asupra bazei masive navale Pearl Harbor de pe insula Oahu, Hawaii, în data de 7 decembrie 1941, a rămas o cicatrice adâncă în istoria mondială. Desfășurată în primele ore ale dimineții de forțele aeriene teribile ale Marinei Imperiale Japoneze, lovitura a avariat sau a distrus complet zeci de nave colosale de luptă americane și a omorât peste 2.400 de militari și civili într-o scurtă perioadă de timp. Cuirasatul USS Arizona, lovit fatal de o bombă explozivă în depozitul de muniție, s-a scufundat ducând peste 1.100 de suflete pe fundul apei. Președintele Roosevelt a numit-o oficial „o zi care va trăi în infamie”, declanșând imediat intrarea cu forță totală a Statelor Unite în extrem de sângerosul Al Doilea Război Mondial. Monumentul memorial ridicat deasupra USS Arizona onorează și amintește jertfa lor uriașă. Istorie K8 — Al Doilea Război Mondial.",
      "factsAdvanced": [
        "Atacul violent surpriză a avut loc exact în dimineața zilei de 7 decembrie 1941.",
        "Peste 2.403 de cadre militare și cetățeni civili americani și-au pierdut viața subit.",
        "Nava imensă de luptă USS Arizona s-a scufundat catastrofal cu 1.177 de marinari.",
        "Președintele Roosevelt a declarat război Japoniei a doua zi, forțând intrarea în WW2.",
        "Complexul portuar Pearl Harbor reprezintă principalul centru militar aeronaval din Pacific.",
        "O scurgere continuă de ulei, numită masiv 'lacrimile negre', se ridică din epavă și astăzi."
      ]
    },
    {
      "id": "little-bighorn-battlefield-history-v2",
      "descriptionAdvanced": "Bătălia sângeroasă de la Little Bighorn, desfășurată în valea colinară din sud-estul statului Montana la 25-26 iunie 1876, a fost cel mai cunoscut angajament militar din Războaiele Indiene. Trupele Regimentului 7 Cavalerie din armata americană, aflate sub comanda aroganților general George Armstrong Custer, au suferit o înfrângere militară uluitoare și completă în fața războinicilor curajoși aparținând triburilor aliate Lakota Sioux, Northern Cheyenne și Arapaho, conduși strident de figuri masive precum Sitting Bull și Crazy Horse. O imensă coaliție de triburi, enervată de invaziile de aur de pe teritoriul lor sacru, l-a învins cu desăvârșire pe Custer, el și o mare parte din unitățile sale fiind anihilați total. Momentul, deși o victorie indigenă colosală, a adus în cele din urmă intensificarea forțelor federale și suprimarea vieții indiene de pe câmpii. Istorie K8 — Războaiele Indiene și expansiunea vestică.",
      "factsAdvanced": [
        "Confruntarea teribilă a avut loc în regiunea Montana pe 25 și 26 iunie 1876.",
        "Cunoscută masiv ca 'Ultima Luptă a lui Custer' (Custer’s Last Stand).",
        "Războinicii amerindieni erau conduși spiritual și tactic de marii lideri Sitting Bull și Crazy Horse.",
        "Corpul condus de Custer de peste 260 de militari a fost omorât absolut integral.",
        "Triburile Lakota și Cheyenne apărau teritoriul imens împotriva intruziunilor aurului.",
        "Câmpul militar actual este presărat cu markere de marmură în locul fiecărui deces istoric."
      ]
    },
    {
      "id": "fort-sumter-history-v2",
      "descriptionAdvanced": "Fort Sumter este insula fortificată și masivă situată în mijlocul portului Charleston din Carolina de Sud, locul care a aprins cel mai devastator conflict intern al națiunii. La 12 aprilie 1861, forțele aliate confederate rebele au deschis focul intens de artilerie asupra garnizoanei Uniunii blocate în interiorul zidurilor masive ale fortului, după o blocadă tensionată privind secesiunea sudului și controlul armelor federale. După un bombardament uriaș neîntrerupt de 34 de ore, garnizoana mică nordistă condusă de maiorul Robert Anderson a predat fortul. Acele lovituri tunătoare inițiale au forțat acțiunea militară a Președintelui Lincoln de a înrola imediat voluntari, declanșând efectiv marele Război Civil American, ce avea să lase peste 600.000 de victime. Istorie K8 — declanșarea Războiului Civil.",
      "factsAdvanced": [
        "Atacul confederat brutal de la Fort Sumter a început precis pe 12 aprilie 1861.",
        "Fortul insular formidabil se află situat chiar la intrarea în portul orașului Charleston.",
        "Bombardamentul uimitor de intens a durat aproximativ 34 de ore continuu.",
        "Maiorul Robert Anderson din armata de nord a evacuat în final poziția cu trupele sale.",
        "Deși bombardamentul a fost masiv, nimeni nu a murit direct în luptele de asediu.",
        "Marcarea acestei agresiuni a inițiat formal cel mai uriaș război al Americii."
      ]
    },
    {
      "id": "appomattox-court-house-history-v2",
      "descriptionAdvanced": "Așezarea minusculă din Virginia, Appomattox Court House, poartă faima colosală a locului unde a apus Războiul Civil American. În data de 9 aprilie 1865, în sufrageria modestă a casei aparținând civilului Wilmer McLean, generalul armatei rebele confederate, Robert E. Lee, obosit de luptă și încercuit, s-a predat oficial în mod formal forțelor nordiste ale Uniunii comandate tactic de generalul Ulysses S. Grant. În ciuda ostilității uriașe din anii trecuți, condițiile de pace și predare propuse de Grant au fost remarcabil de umane și respectuoase; soldații inamici aveau libertatea de a reveni acasă dacă promiteau abandonul armelor, iar ofițerii lor își puteau păstra caii și pistoalele de la brâu, ajutând astfel imens la vindecarea națiunii fracturate și evitând transformarea conflictului într-un război de gherilă sângeros. Istorie K8 — încheierea Războiului Civil.",
      "factsAdvanced": [
        "Marea predare de forțe militare a avut loc în dimineața de 9 aprilie 1865.",
        "A luat sfârșit simbolic cel mai ucigător conflict, Războiul Civil American.",
        "Întâlnirea istorică a avut loc exact în interiorul casei de cărămidă a lui Wilmer McLean.",
        "Grant a permis în mod uimitor generalului Lee să-și mențină ofițerii înarmați la predare.",
        "Armata masivă a Virginiei de Nord era practic blocată și privată total de hrană.",
        "Documentul final de pace a marcat începutul reconstrucției națiunii dezbinate."
      ]
    },
    {
      "id": "antietam-battlefield-history-v2",
      "descriptionAdvanced": "Sângeroasa confruntare din apropierea micului râu Antietam Creek din Maryland, desfășurată sub un tir catastrofal la 17 septembrie 1862, rămâne cea mai teribilă și plină de pierderi o singură zi militară de pe tot parcursul istoriei umane a Statelor Unite. Forțele Uniunii nordiste uriașe ale generalului George B. McClellan au înfruntat prima invazie masivă spre nord încercată cu disperare de invincibilul general confederat Robert E. Lee. Timp de ore întregi, lupte sălbatice au transformat câmpuri imense de porumb și un drumeag rural scufundat (Bloody Lane) într-un măcel uriaș. Deși confruntarea masivă s-a încheiat tactic într-o egalitate sângeroasă terifiantă, stoparea invaziei spre inima nordului i-a conferit președintelui Abraham Lincoln imensa pârghie politică necesară pentru a emite faimoasa Proclamație de Emancipare, dând războiului și valențe colosale împotriva sclaviei. Istorie K8 — bătăliile definitorii.",
      "factsAdvanced": [
        "Bătălia brutală pe câmp a durat exact o zi, la data de 17 septembrie 1862.",
        "Se estimează uluitor la aproximativ 23.000 de soldați nordici și sudiști uciși sau răniți.",
        "Zona drumului rural denumită ulterior 'Bloody Lane' a văzut grămezi uriașe de cadavre.",
        "Măcelul s-a încheiat fără o avansare majoră, forțându-l pe Lee să se întoarcă masiv în sud.",
        "Victoria strategică nordistă a evitat recunoașterea sudului de către națiunile europene.",
        "Președintele Lincoln a utilizat momentul masiv ca imbold pentru Proclamația de Emancipare."
      ]
    }
  ]
}

with open('/mnt/c/Users/User/plizio_orch/seo_outputs/seo_usa_ro_batch2.json', 'w', encoding='utf-8') as f:
    json.dump(batch2, f, ensure_ascii=False, indent=2)

print("Batch 2 JSON written.")
