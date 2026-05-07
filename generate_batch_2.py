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
      "id": "gt-san-pedro-la-laguna-cities-v2",
      "descriptionAdvanced": "San Pedro La Laguna este un sat mayaș Tz'utujil situat la baza vulcanului San Pedro, pe malul sud-vestic al lacului Atitlán. Renumit printre tinerii călători internaționali pentru atmosfera sa relaxată, orașul a evoluat într-un amestec de școli de limba spaniolă, cafenele de pe malul lacului și tradiții indigene intacte. Deși turismul este baza economiei sale moderne, culturile de cafea organică care împânzesc versanții vulcanului rămân vitale pentru comunitatea locală. Geografie K7 — vulcanismul și economia cafetierei.",
      "factsAdvanced": ["Fondat teoretic de spanioli în jurul anului 1541.", "Vulcanul San Pedro din apropiere atinge 3.020 metri altitudine.", "Populația sa vorbește în mare parte limba indigenă Tz'utujil.", "A fost unul dintre primele sate de la lac care a interzis plasticul de unică folosință.", "Este o destinație globală majoră pentru studenții la spaniolă de imersiune.", "Biserica sa principală albă oferă vederi ample asupra apei de la o altitudine ridicată."]
    },
    {
      "id": "gt-cuilapa-cities-v2",
      "descriptionAdvanced": "Situat în inima Americii Centrale, Cuilapa se află cu mândrie exact în centrul geografic al continentului american, o distincție marcată de un monument central. Acționează ca o legătură comercială majoră pe autostrada Pan-Americană și este capitala departamentului Santa Rosa. Datorită faliilor sale geologice active, orașul a fost reconstruit de mai multe ori, menținând totodată o industrie puternică a trestiei de zahăr și a orezului. Geografie K6 — centre continentale și falii seismice.",
      "factsAdvanced": ["Considerat 'Centrul Americilor' prin măsurători geografice istorice.", "A fost grav avariat de un roi de cutremure în 1913.", "Situat la o altitudine de 893 de metri, ideală pentru climă temperată.", "Exportator primar de cafea de calitate și ananas din regiune.", "Cunoscut pentru complexul de poduri Los Esclavos construite peste râul cu același nume.", "Biserica Parohială din Cuilapa a fost reconstruită în stil modern după seisme."]
    },
    {
      "id": "gt-san-cristobal-verapaz-cities-v2",
      "descriptionAdvanced": "Imersat în peisajul noros al Alta Verapaz, San Cristóbal Verapaz este renumit ca leagănul cultural al etniei Poqomchi'. Orașul este poziționat strategic pe malurile Lagunei Chichoj, un corp de apă care susține nu doar ecologia locală, ci și numeroase legende mayașe vechi. Orașul este, de asemenea, un centru crucial pentru producția uneia dintre cele mai fine tipuri de cafea Cobán, precum și un important producător de încălțăminte și artizanat din piele. Istorie K8 — tradițiile orale mayașe și dezvoltarea meșteșugurilor.",
      "factsAdvanced": ["Fondat oficial de preoții dominicani în 1565.", "Laguna Chichoj s-a format parțial datorită alunecărilor masive de teren antice.", "Peste 80% din populație aparține etniei mayașe Poqomchi'.", "Fabrica sa istorică de încălțăminte Cobán funcționează de la mijlocul secolului XX.", "Biserica barocă San Cristóbal este o relicvă a epocii coloniale târzii.", "Altitudinea de 1.393 de metri permite o abundență de păduri de pini umede."]
    },
    {
      "id": "gt-esquipulas-cities-v2",
      "descriptionAdvanced": "Esquipulas este capitala spirituală incontestabilă a Americii Centrale, atrasă milioane de pelerini anual pentru a venera statuia sculptată a Hristosului Negru în Bazilica sa uriașă. Dincolo de importanța sa religioasă imensă, Esquipulas a fost scena acordurilor istorice de pace din America Centrală în 1986. Orașul joacă un rol important în regiunea muntoasă estică prin producția sa agricolă de fasole neagră și cafea. Istorie K7 — pelerinaje religioase și tratatele de pace contemporane.",
      "factsAdvanced": ["Bazilica din Esquipulas a fost sfințită în anul 1759.", "Statuia Hristosului Negru a fost sculptată de Quirio Cataño în 1594.", "Acordurile de Pace Esquipulas I au pus bazele rezolvării războaielor civile regionale.", "Orașul atrage peste patru milioane de vizitatori religioși în fiecare an.", "Sanctuarul a fost vizitat de Papa Ioan Paul al II-lea în 1996.", "Găzduiește cea mai mare piață artizanală de lumânări și tămâie din regiune."]
    },
    {
      "id": "gt-san-benito-cities-v2",
      "descriptionAdvanced": "San Benito acționează ca motorul industrial și logistic al insulei sale surori mult mai celebre, Flores. Fiind cel mai populat dintre 'orașele gemene' din Petén, controlează aprovizionarea majorității expedițiilor arheologice din jungla nordică. Dezvoltarea sa rapidă din secolul al XX-lea se datorează în principal migrației muncitorilor din cauciuc și chicle care au fost atrași de oportunitățile economice din zona extinsă a junglei Maya. Economie K6 — expansiunea urbană în regiunile forestiere.",
      "factsAdvanced": ["Oficializat ca așezare separată în 1799.", "Este centrul comercial care susține zona metropolitană Santa Elena/Flores.", "Piața sa acoperită este cea mai mare din întregul departament Petén.", "Majoritatea populației are origini mixte din alte părți ale Guatemalei.", "Terenurile au fost parțial transformate din tabere istorice de tăietori de lemne (chicleros).", "Se bucură de un climat de junglă de joasă altitudine pe tot parcursul anului."]
    },
    {
      "id": "gt-santo-tomas-de-castilla-cities-v2",
      "descriptionAdvanced": "Santo Tomás de Castilla este principalul port maritim modern de pe coasta atlantică a Guatemalei. Inițial colonizat temporar de fermieri belgieni în secolul al XIX-lea, astăzi a depășit Puerto Barrios din vecinătate în capacitatea de manipulare a mărfurilor și gestionarea navelor de croazieră. Portul său în ape adânci face posibil exportul masiv al producției agroindustriale a națiunii către piețele internaționale. Economie K8 — rute comerciale atlantice și infrastructură maritimă.",
      "factsAdvanced": ["Compania de Colonizare Belgiană a încercat o așezare aici în 1843.", "Construit oficial ca port modern complet funcțional abia în 1976.", "Gestionează aproximativ 60% din comerțul de import-export al Guatemalei pe mare.", "Baza navală activă a forțelor militare guatemaleze.", "Terminalele de croazieră găzduiesc mii de turiști atrași de situl mayaș Quiriguá.", "Clima caldă și foarte umedă adăpostește ecosisteme tropicale bogate."]
    },
    {
      "id": "gt-la-gomera-cities-v2",
      "descriptionAdvanced": "Aflat în câmpiile fierbinți ale departamentului Escuintla, La Gomera este un bastion al culturilor intensive de export ale Guatemalei, cum ar fi trestia de zahăr și bananele. Orașul este tăiat de o rețea de canale vitale pentru sistemele uriașe de irigații care mențin terenurile roditoare pe timpul verii. Istoric, a prosperat datorită conectivității sale la inima rețelei feroviare care traversa câmpia pacifică în secolul al XX-lea. Economie K7 — plantații comerciale majore și rețele de irigații.",
      "factsAdvanced": ["Are o populație masiv implicată în munca sezonieră (zafra).", "Numele provine din limba spaniolă, legat inițial de insula canară La Gomera.", "Altitudinea sa medie este de doar 34 de metri.", "Plantațiile de aici furnizează zahăr rafinat pentru export la nivel global.", "Canalele sale se varsă indirect în mlaștinile Pacificului.", "A crescut dintr-un sat agricol într-un mare producător în decurs de 50 de ani."]
    },
    {
      "id": "gt-patzun-cities-v2",
      "descriptionAdvanced": "Patzún, așezat ferm în munții central-vestici, este o comunitate esențială pentru păstrarea obiceiurilor grupului indigen Kaqchikel. Sărbătoarea sa anuală de Corpus Christi devine faimoasă pentru crearea de alfombras, sau covoare ornamentale elaborate, făcute din rumeguș și flori. Populația se bazează pe cultivarea legumelor la altitudine înaltă, multe dintre acestea ajungând direct în piețele din Statele Unite și Europa. Sociologie K6 — meșteșugurile efemere și antreprenoriatul agricol indigen.",
      "factsAdvanced": ["Numele Patzún se traduce prin 'Zona plantelor de floarea-soarelui'.", "Situat la o altitudine considerabilă de 2.213 metri.", "Tradiția 'Alfombras' din iunie acoperă zeci de străzi din centrul orașului.", "Orașul găzduiește unul dintre cele mai vechi așezăminte franciscane din Guatemala.", "Biserica principală datează din anul 1540 și păstrează artefacte din argint masiv.", "Peste 90% dintre locuitori se identifică cu descendența Kaqchikel-Maya."]
    },
    {
      "id": "gt-nahuala-cities-v2",
      "descriptionAdvanced": "Izolat în munții prăpăstioși din regiunea Sololá, Nahualá este renumit ca unul dintre cele mai tradiționale sate mayașe K'iche' rămase în țară. Liderii comunitari au respins mult timp influențele exterioare, refuzând istoric chiar și vânzarea de alcool pe teritoriul lor pentru a-și păstra coeziunea. Bărbații de aici sunt faimoși pentru costumele lor tradiționale brodate puternic, cunoscute pentru motivele specifice de lilieci și vulturi, care domină estetica locală. Istorie K8 — autonomia indigenă și simbolismul textil.",
      "factsAdvanced": ["Bărbații poartă un șorț unic numit 'rodillera' deasupra pantalonilor.", "Altitudinea de 2.467 de metri determină nopți extrem de reci.", "Comunitatea menține cu fermitate o economie agricolă de subzistență.", "Nahualá înseamnă 'Apa spiritului' sau 'locul șamanului'.", "Comunitatea are o lungă dispută teritorială cu vecinii din Santa Catarina Ixtahuacan.", "Piețele locale vând mobilier fin din lemn masiv prelucrat manual."]
    },
    {
      "id": "gt-joyabaj-cities-v2",
      "descriptionAdvanced": "Înconjurat de văile adânci ale departamentului Quiché, Joyabaj poartă cicatricile istoriei sale marcate de conflicte și catastrofe naturale, mai ales devastatorul cutremur din 1976 care i-a nivelat clădirile coloniale. În ciuda acestor provocări, rămâne un important centru comercial și spiritual, faimos pentru dansul ceremonial 'Palo Volador', unde bărbații se balansează din vârful unui stâlp uriaș suspendat prin frânghii, celebrând ritmuri străvechi mayașe de invocare a ploii. Istorie K7 — reziliența comunității și dansurile aeriene prehispanice.",
      "factsAdvanced": ["Atestat oficial ca oraș colonial în 1549.", "Cutremurul din 1976 a distrus peste 90% din centrul orașului vechi.", "Este locul faimosului 'El Baile del Palo Volador' din fiecare august.", "Numele său mayaș 'Xoyabaj' înseamnă 'Locul pietrelor'.", "Economia sa prosperă parțial prin remitențele masive de la muncitorii din străinătate.", "Piața de duminică este una dintre cele mai zgomotoase și vibrante din regiune."]
    },
    {
      "id": "gt-poptun-cities-v2",
      "descriptionAdvanced": "Situat în regiunea de savană a Petén, Poptún este înconjurat de uitături neobișnuite de pini tropicali, care diferă major de jungla cu frunze late din restul departamentului. Orașul a devenit de mult o destinație esențială de tranzit de-a lungul autostrăzii către nord și un punct de pornire pentru explorările ecoturistice către grotele Naj Tunich. De asemenea, a găzduit istoricul centru ecologic Finca Ixobel, fondat în anii 1970. Biologie K6 — biomul pinului tropical și turismul durabil.",
      "factsAdvanced": ["Poptún a fost înființat oficial abia în toamna anului 1966.", "Regiunea este dominată de Pinus caribaea, un pin rar din America Centrală.", "Găzduiește baza militară de antrenament Kaibil Balam pentru forțele speciale guatemaleze.", "Situat la o altitudine plată de 510 metri.", "Precipitațiile medii anuale ajung la o cantitate uluitoare de 1.700 mm.", "Peșterile Naj Tunich conțin hieroglife mayașe rare în cărbune negru."]
    },
    {
      "id": "gt-asuncion-mita-cities-v2",
      "descriptionAdvanced": "Poziționat aproape de granița fierbinte cu El Salvador, Asunción Mita a fost o stație crucială de odihnă din epoca colonială pentru poștașii regali și călătorii pe drumul spre sud. În prezent, depinde de agricultura irigată susținută de sistemele de lacuri din jur, în special Lacul Güija. Recent, a devenit centrul unor lungi controverse miniere din cauza proiectelor majore de extracție a aurului propuse la marginea așezării. Economie K8 — impactul extracției miniere și tranzitul transfrontalier.",
      "factsAdvanced": ["Fondat inițial ca oraș-stație spaniol înainte de anii 1600.", "Numele provine parțial din nahua, tradus ca 'Locul Oaselor'.", "Orașul este situat aproape de un important lac vulcanic de apă dulce, Güija.", "Se bazează puternic pe creșterea extinsă a bovinelor.", "Temperaturile pot depăși lejer 36°C în sezonul cald.", "Găzduiește anual o cursă de cai care atrage participanți internaționali."]
    },
    {
      "id": "gt-gualan-cities-v2",
      "descriptionAdvanced": "Așezat pe malurile largi ale râului Motagua, Gualán a fost considerat un port fluvial vital înainte ca căile ferate și autostrăzile moderne să domine națiunea. În secolele XVIII și XIX, bărcile transportau cafeaua și îndigoul din centrul Guatemalei către Marea Caraibelor prin porturile sale. Astăzi, orașul prosperă din agricultura câmpiilor inudabile din jur și se distinge printr-un ritm de viață tipic climei sufocante a văii râului. Geografie K7 — navigația pe râuri și transformarea logisticii.",
      "factsAdvanced": ["Orașul era cunoscut istoric ca un 'port uscat' pe ruta spre Caraibe.", "Temperatura ridicată susține producția excelentă de pepene roșu.", "Altitudinea de 130 de metri îl face una dintre cele mai calde așezări urbane.", "Calea ferată a ajuns în oraș în jurul anului 1897, diminuând transportul pe râu.", "Biserica principală adăpostește o orgă veche importată din Europa în secolul XIX.", "Găzduiește ruine mai mici pre-hispanice ascunse de-a lungul albiei râului."]
    },
    {
      "id": "gt-la-democracia-cities-v2",
      "descriptionAdvanced": "În piețele largi și verzi din La Democracia sunt expuse unele dintre cele mai stranii relicve arheologice ale continentului: capetele gigantice de piatră ale culturii Monte Alto, adesea poreclite 'Olmeci cu fețe de bebeluși'. Acest oraș cu climă caldă a devenit centrul acestei culturi misterioase de pe coasta pacifică, care datează din perioada pre-clasică mijlocie. Departe de turismul său arheologic, economia modernă prosperă exclusiv prin exploatarea masivă a trestiei de zahăr de către ferme comerciale mari. Istorie K6 — misterele culturii pre-clasice și arta monolitică.",
      "factsAdvanced": ["Capetele gigantice au fost mutate din plantațiile de zahăr în piața centrală în anii '60.", "Sculpturile sunt faimoase pentru trăsăturile rotunjite și corpurile magnetice, atrase polar.", "A fost redenumit La Democracia din satul său original 'Don García' în 1903.", "Găzduiește Museo Regional de Arqueología de la Democracia.", "Așezat pe câmpiile fierbinți la altitudinea de doar 165 metri.", "Cultura Monte Alto prezentată aici precede parțial dezvoltarea mayașă clasică."]
    },
    {
      "id": "gt-colomba-cities-v2",
      "descriptionAdvanced": "Colomba se află pitoresc printre plantațiile de cafea luxoase ('fincas') din cureaua pacifică a Guatemalei. Cunoscută sub numele oficial complet de Colomba Costa Cuca, zona a fost dezmembrată la sfârșitul secolului al XIX-lea, când dictaturile liberale au cedat terenuri bogate antreprenorilor privați pentru a stimula agricultura națională. Clima sa unică cu precipitații ample favorizează o cafea excepțională care se regăsește pe mesele din toată lumea occidentală. Economie K7 — reforma funciară liberală și economia cafelei.",
      "factsAdvanced": ["Așezarea a primit statutul de municipalitate în anul 1882.", "Numele este probabil derivat de la specia locală de porumbei 'Palomas'.", "Este flancat de vulcanii masivi Chicabal și Santa María.", "Cafeaua cultivată aici crește în solul umbros al copacilor inalti cu lemn de esență tare.", "Găzduiește mai multe comunități de lucrători sezonieri pentru recoltarea cafelei.", "Ploaia abundentă (peste 3000 mm/an) hrănește solurile fertile."]
    },
    {
      "id": "gt-san-andres-itzel-cities-v2",
      "descriptionAdvanced": "Situat pe versantul opus al lacului vulcanic din regiunea Petén față de orașul insular Flores, San Andrés este un centru crucial pentru protejarea junglei Maya Biosphere. Acest oraș liniștit a fost inima industriei extractoare de chicle (pentru guma de mestecat) în prima jumătate a secolului al XX-lea, înainte ca cauciucul sintetic să preia controlul. Astăzi, localnicii participă la recoltarea durabilă a florilor de xate și a nucilor de ramón, exportate ca frunziș în America de Nord. Biologie K8 — resursele forestiere non-lemnoase și biologia de conservare.",
      "factsAdvanced": ["Fondat la mijlocul anilor 1800, deși exploratorii au fost acolo cu mult înainte.", "O mare parte din suprafața sa se află în interiorul Parcului Național Laguna del Tigre.", "Este reședința școlii eco-culturale comunitare faimoase, Eco-Escuela.", "Este un bastion al culturii Q'eqchi' Maya care migrează din sud.", "Extracția tradițională de chicle a dominat cândva exporturile locale timp de 50 de ani.", "Vederile sale de apus peste lacul Petén Itzá sunt printre cele mai celebre."]
    },
    {
      "id": "gt-morales-cities-v2",
      "descriptionAdvanced": "Morales a prosperat strategic la umbra gigantului pod de autostradă Rio Dulce, care conectează inima Guatemalei cu departamentul Petén și cu marea de nord. Dezvoltarea modernă a orașului este legată intim de producția de banane a companiei Del Monte (fosta United Fruit Company), care menține câmpuri interminabile în zonă. Orașul este plin de agitația continuă a camioanelor de transport, făcându-l o ancoră logistică de prim rang pentru estul țării. Economie K7 — infrastructura de poduri și multinaționalele agricole.",
      "factsAdvanced": ["A devenit o municipalitate recunoscută oficial pe 24 iunie 1920.", "Trecerea sa rutieră a făcut ca feriboturile istorice peste Rio Dulce să devină învechite.", "A fost centrul unor tensiuni și lovituri sindicale faimoase ale lucrătorilor la banane.", "Situl antic mayaș de la Quiriguá se află la doar câțiva kilometri distanță.", "Zona este dominată de căldura umedă tipică Caraibelor.", "Numele provine de la familia Morales care a donat pământul pentru cale ferată."]
    },
    {
      "id": "gt-siquinala-cities-v2",
      "descriptionAdvanced": "Ascuns printre întinderile masive ale plantațiilor de sud, Siquinalá este un epicentru al producției imense de trestie de zahăr care pulsează prin venele economiei din Escuintla. Fumul care se ridică ocazional din câmpurile de zahăr arse pentru recoltă definește adesea orizontul sezonier al orașului. În ultimii ani, regiunea s-a diversificat, devenind parte a centurii naționale de generare a energiei bazate pe biocombustibil obținut din deșeurile de trestie. Geografie K8 — managementul culturilor de masă și biocombustibilii.",
      "factsAdvanced": ["Zahărul a depășit treptat istoricele plantații de citrice din jurul orașului.", "Orașul a fost oficial format prin decret guvernamental în secolul XIX.", "Se bazează substanțial pe centralele de co-generare a energiei electrice din bagas.", "Clima sa sufocantă atinge constant 35°C în mijlocul primăverii.", "Frecvent traversat de faimoasa rută CA-2 a comerțului internațional.", "Odinioară zonă de tranziție pentru pășunatul bovinelor, acum monocultură."]
    },
    {
      "id": "gt-sayaxche-cities-v2",
      "descriptionAdvanced": "Sayaxché servește drept punct de îmbarcare crucial pe marginile râului impunător La Pasión, permițând accesul adânc în siturile clasice mayașe greu accesibile, precum Ceibal, Dos Pilas și Aguateca. A fost mult timp un punct de control izolat al frontierei unde tăietorii de lemne coborau trunchiuri de mahon pe râu. Recent, pădurile masive din jur au suferit o tranziție rapidă, devenind epicentrul plantațiilor majore de palmier african pentru ulei de export, ridicând provocări ecologice puternice. Geografie K7 — râurile de navigație și controversa uleiului de palmier.",
      "factsAdvanced": ["Fondat strategic pe ambele maluri ale râului La Pasión în anul 1880.", "Feribotul masiv pe cablu era singura modalitate de traversare rutieră zeci de ani.", "Este înconjurat de peste 10 ruine mayașe majore de-a lungul rețelei de apă.", "Exploatarea uleiului de palmier acoperă mii de hectare din teritoriul său.", "Limba Q'eqchi' domină demografia locală după migrațiile masive recente.", "Pădurile rămase susțin maimuțele urlătoare și o diversitate aviară enormă."]
    },
    {
      "id": "gt-patulul-cities-v2",
      "descriptionAdvanced": "Patulul a fost de secole un centru agricol bogat, datorită ploilor dese atrase de flancul sudic al lanțului vulcanic care coboară dinspre vulcanul Atitlán. În vremurile pre-coloniale, regiunea a cultivat intensiv boabe de cacao care erau valoroase ca monedă în comerțul mayaș. Astăzi, vechiul patrimoniu de ciocolată se împletește cu creșterea bovinelor și cultivarea arborilor de cauciuc și trestiei, orașul funcționând ca o trambulină comercială rurală activă. Economie K6 — istoria culturilor de numerar pre-hispanice și plantațiile mixte.",
      "factsAdvanced": ["Biserica din oraș deține clopote datând din anul 1749.", "Cuvântul mayaș 'Patz'o'r' se traduce vag ca 'pământ abundent'.", "Climatul tinde să fie tropical, susținând abundența fructelor neobișnuite locale.", "Regiunea este considerată locul de naștere al faimoasei cafele varietatea pacamara.", "A fost unul dintre centrele timpurii pentru testele de cauciuc din anii 1950.", "Fosta cale ferată a națiunii a facilitat creșterea masivă a orașului în 1910."]
    },
    {
      "id": "gt-san-andres-xecul-cities-v2",
      "descriptionAdvanced": "San Andrés Xecul este faimos mondial pentru fațada excentrică a bisericii sale coloniale galben-muștar, decorată intens cu figuri vibrante, struguri de porumb, animale angelice și motive precolumbiene. Această lucrare uimitoare atestă sincretismul religios neobosit al poporului mayaș din această regiune montană rece, îmbinând credința K'iche' cu icoanele catolice. Bărbații lucrează din greu pământul cultivând grâu pe versanții ascuțiți, în timp ce femeile mențin o moștenire robustă a vopsirii hainelor tradiționale multicolore. Istorie K8 — sincretismul arhitectural și iconografia colonială-mayașă.",
      "factsAdvanced": ["Fațada bisericii prezintă zeci de figuri sculptate vopsite strălucitor manual.", "Un mic sanctuar pentru zeitatea indigenă Maximón este, de asemenea, întreținut de localnici.", "Așezat pe o pantă a munților la o altitudine rigidă de peste 2.400 de metri.", "Crucile mayașe din oraș îmbină fuzionarea celor patru puncte cardinale.", "Numele provine din cuvântul K'iche' 'Xecul', însemnând 'sub pătura munților'.", "Femeile spală frecvent țesăturile vopsite în râul înghețat din afara satului."]
    },
    {
      "id": "gt-el-estor-cities-v2",
      "descriptionAdvanced": "Situat pe apele vaste și placide ale Lacului Izabal, El Estor a fost un port interior izolat înainte de construirea drumurilor. Numele său provine curios dintr-o interpretare greșită a limbii engleze „The Store”, reflectând un post comercial al companiei din secolul al XIX-lea. Astăzi, orașul susține cea mai mare controversă a națiunii privind exploatarea masivă a nichelului la mina Fenix, atrăgând tensiuni puternice între grupurile indigene de pescari Q'eqchi' și interesele globale de metale. Economie K8 — mineritul de metale grele, conflictul de interese ecologice.",
      "factsAdvanced": ["A fost o parte vitală a rutei de transport britanice în anii 1880.", "Mina Fenix este una dintre cele mai masive rezerve de laterită de nichel din lume.", "Baza navală protejează ieșirea apelor Lacului Izabal către mare.", "Păsări unice se află în sanctuarul mlaștinilor din Parcul Bocas de Polochic.", "Peste 90% din orașul rural este locuit de descendenți Maya Q'eqchi'.", "Economia tradițională bazată pe pescuit suferă presiuni din expansiunea industrială."]
    },
    {
      "id": "gt-tiquisate-cities-v2",
      "descriptionAdvanced": "Tiquisate, scufundat în umiditatea coastei pacifice din Escuintla, a fost creat istoric ca centrul sudic al puterii pentru legendara și controversata United Fruit Company. Cartierele orașului încă reflectă segregarea arhitecturală originală, cu case imense de lemn în stil american proiectate pentru managerii corporației. Astăzi, deși influența UFCO a dispărut demult de acolo, economia este dominată încă de exporturile gigantice de banane și de morile de zahăr în extindere rapidă. Istorie K7 — ascensiunea și declinul companiilor de fructe americane.",
      "factsAdvanced": ["A devenit municipiu recunoscut pe data de 5 martie 1947.", "A găzduit una dintre primele baze de tractoare gigantice introduse în Guatemala.", "Cutremurul puternic din 1976 a deteriorat parțial vechile structuri de lemn corporative.", "Clima susține constant 32 de grade Celsius și precipitații majore în iunie.", "Un sit al unor tulburări sindicale semnificative între anii 1940 și 1950.", "Numele derivă din influența Nahuatl din vremea aztecilor migratori."]
    },
    {
      "id": "gt-san-cristobal-totonicapan-cities-v2",
      "descriptionAdvanced": "San Cristóbal Totonicapán este o mică metropolă plină de viață în platourile centrale, flancată de râul Samalá. Este adesea ocolit de turismul masiv, deși posedă una dintre cele mai vaste biserici catolice din America Centrală de la mijlocul secolului al XVII-lea. Orașul este recunoscut istoric pentru moștenirea sa formidabilă în artizanatul pantofilor, producția de textile, mătase, și a țesăturilor pe care alte comunități le folosesc pentru creațiile de costume mayașe, fiind nod esențial al industriei domestice indigene. Economie K6 — producția manufacturieră a textilelor indigene.",
      "factsAdvanced": ["Biserica masivă din piatră conține o orgă mecanică neprețuită din argint.", "Comunitatea menține cu fermitate justiția autonomă K'iche'.", "Situat la marginea unui spectaculos drum șerpuit prin defileul vulcanului Santa Maria.", "Râul Samalá conduce o centrală hidroelectrică și o mică cascadă la ieșirea din oraș.", "În perioada colonială târzie a dominat fabricarea uniformelor militare regionale.", "Situat la 2.333 de metri, este printre cele mai reci bastioane comerciale montane."]
    },
    {
      "id": "gt-zapotitlan-cities-v2",
      "descriptionAdvanced": "Amplasat într-o vale caldă cu vegetație abundentă la poalele sudice ale lanțului vulcanic guatemalez, Zapotitlán oferă recolte vibrante și diverse. Pe lângă culturile bogate de macadamia și pomi fructiferi mari, localitatea își obține mândria din abundența antică a arborelui sapote din care provine numele său aztec, „Locul Pomilor Sapote”. Așezarea a fost cândva scena intenselor campanii militare pe drumul de cucerire spaniol condus de Pedro de Alvarado în anii 1520. Istorie K7 — etimologia precolumbiană și cultivarea pomilor fructiferi tropicali.",
      "factsAdvanced": ["Fondat peste o așezare Tzutujil care a rezistat campaniei lui Pedro de Alvarado.", "Trece prin regiunea cunoscută și sub numele de San Francisco Zapotitlán.", "Numele indigen original K'iche' era Xetulul.", "Temperaturile sunt umede și calde, menținând vegetația verde în mod perpetuu.", "Solul extrem de vulcanic este ideal pentru arborii care susțin roade bogate.", "Faimos pentru fabricarea dulciurilor tradiționale din fructe native conservate."]
    }
  ]
}

with open('/mnt/c/Users/User/plizio_orch/seo_outputs/seo_guatemala_ro_batch2.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

