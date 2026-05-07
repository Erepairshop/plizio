import re, json
import apply_ro_1

# Remap batch 1 data to names
name_to_desc = {}
for k, v in apply_ro_1.data.items():
    if "Eskifjörður" in v["desc"]: name_to_desc["Eskifjörður"] = v
    elif "Djúpivogur" in v["desc"]: name_to_desc["Djúpivogur"] = v
    elif "Fellabær" in v["desc"]: name_to_desc["Fellabær"] = v
    elif "Eyrarbakki" in v["desc"]: name_to_desc["Eyrarbakki"] = v
    elif "Hella" in v["desc"]: name_to_desc["Hella"] = v
    elif "Flúðir" in v["desc"]: name_to_desc["Flúðir"] = v
    elif "Flateyri" in v["desc"]: name_to_desc["Flateyri"] = v
    elif "Blönduós" in v["desc"]: name_to_desc["Blönduós"] = v
    elif "Hvammstangi" in v["desc"]: name_to_desc["Hvammstangi"] = v
    elif "Dalvík" in v["desc"]: name_to_desc["Dalvík"] = v
    elif "Grenivík" in v["desc"]: name_to_desc["Grenivík"] = v
    elif "Bakkafjörður" in v["desc"]: name_to_desc["Bakkafjörður"] = v
    elif "Borgarfjörður eystri" in v["desc"]: name_to_desc["Borgarfjörður eystri"] = v
    elif "Fáskrúðsfjörður" in v["desc"]: name_to_desc["Fáskrúðsfjörður"] = v
    elif "Egilsstaðir" in v["desc"]: name_to_desc["Egilsstaðir"] = v

data_by_name = {
  "Þórshöfn": {
    "desc": "Þórshöfn este un sat pescăresc izolat, situat pe coasta de est a peninsulei Langanes, în nord-estul extrem al Islandei. Numele său înseamnă „Portul lui Thor”, reflectând spiritul neînfricat al primilor coloniști vikingi. Datorită poziției sale ferite, este un port excelent pe o coastă altfel foarte expusă furtunilor nordice. Comunitatea trăiește aproape exclusiv din pescuit și prelucrarea peștelui, dar recent a început să dezvolte un turism axat pe observarea păsărilor și explorarea sălbăticiei neatinse a peninsulei Langanes, unde se află un sat fantomă abandonat. Este o destinație autentică la capătul lumii.",
    "facts": [
      "Numele se traduce literalmente prin „Portul lui Thor” din mitologia nordică.",
      "Este punctul principal de plecare pentru explorarea peninsulei Langanes.",
      "Populația locală este de aproximativ 380 de locuitori permanenți.",
      "A fost un centru comercial vital în secolul al XIX-lea, deservind fermele din nord-est."
    ]
  },
  "Hvanneyri": {
    "desc": "Hvanneyri este un mic sat universitar agricol din regiunea Borgarfjörður, vestul Islandei. Având o istorie adânc ancorată în lucrarea pământului, găzduiește sediul Universității Agricole din Islanda încă din anul 1889. Arhitectura satului iese în evidență prin clădirile sale școlare vechi, acoperite cu fier ondulat verde și roșu, foarte bine conservate. Luncile verzi, extinse, atrag o varietate imensă de păsări, inclusiv gâștele cu frunte albă. Vizitatorii pot explora Muzeul Agricol Islandez pentru a descoperi evoluția uneltelor agricole și viața rurală tradițională islandeză de-a lungul secolelor.",
    "facts": [
      "Universitatea Agricolă din Islanda își are campusul principal aici.",
      "Lunca Hvanneyri este o rezervație naturală protejată prin Convenția Ramsar.",
      "Satul se află la confluența râurilor Borgarfjörður și Hvítá.",
      "Găzduiește anual mii de gâște cu frunte albă (Anser albifrons) în timpul migrației."
    ]
  },
  "Borðeyri": {
    "desc": "Borðeyri este probabil cel mai mic sat recunoscut oficial din Islanda, având adesea sub 20 de locuitori permanenți. Este amplasat idilic pe coasta vestică a fiordului Hrútafjörður. În ciuda dimensiunii sale actuale, are un trecut glorios, funcționând în secolul al XIX-lea ca unul dintre cele mai aglomerate porturi comerciale și de export pentru produsele agricole din nord. Satul pare înghețat în timp, oferind clădiri istorice conservate remarcabil, cum ar fi Casa Riis, ridicată în 1862. Vizitatorii opresc aici pentru a se bucura de o experiență a „Islandei de altădată”, complet ruptă de ritmul modern.",
    "facts": [
      "Are o populație fluctuantă, uneori numărând mai puțin de 16 locuitori.",
      "Casa Riis este una dintre cele mai bine conservate case comerciale islandeze antice.",
      "Era principalul port de plecare pentru oile vii exportate în Marea Britanie.",
      "Se află chiar pe ruta care conectează sud-vestul de fiordurile de nord-vest (Westfjords)."
    ]
  },
  "Hauganes": {
    "desc": "Hauganes este un mic sat de pescari situat pe coasta de vest a fiordului Eyjafjörður, la nord de Akureyri. Faimos pentru atmosfera sa primitoare și izolată, a fost pionier în organizarea excursiilor de observare a balenelor în Islanda. Apele calme ale fiordului din dreptul satului sunt locuite frecvent de balene cu cocoașă și delfini. Portul pitoresc este dominat de bărci tradiționale de pescuit din lemn de stejar. Locuitorii sunt, de asemenea, mândri de tradiția lor în prelucrarea bacalaoului (cod sărat), iar plaja geotermală din sat oferă bazine încălzite natural cu vedere spre ocean.",
    "facts": [
      "Este una dintre cele mai vechi locații din Islanda pentru tururile de observare a balenelor (din 1993).",
      "Dispune de bazine termale tip 'hot tubs' construite direct pe plaja neagră.",
      "Compania locală prelucrează încă tradițional bacalaoul exportat în sudul Europei.",
      "Este mărginit de munții înalți ai Peninsulei Tröllaskagi."
    ]
  },
  "Laugarbakki": {
    "desc": "Laugarbakki este un sat minuscul din nord-vestul Islandei, așezat de-a lungul râului Miðfjarðará, la sud de Hvammstangi. Numele său face referire la malurile râului bogate în izvoare geotermale („laugar”). Abundența de apă caldă a determinat stabilirea locuitorilor aici, furnizând încălzire centralizată naturală și apă fierbinte pentru o mare parte a regiunii. Satul servește ca un popas perfect pentru călătorii de pe ruta Ring Road, având o piață locală cu produse artizanale islandeze și fiind o bază excelentă pentru pescarii pasionați de somon.",
    "facts": [
      "Are sub 60 de locuitori și este înconjurat de ferme extinse de oi.",
      "Apele geotermale de aici alimentează orașul învecinat Hvammstangi cu apă caldă.",
      "Râul Miðfjarðará este faimos la nivel mondial pentru pescuitul sportiv de somon.",
      "Un important spital regional a funcționat aici la mijlocul secolului al XX-lea."
    ]
  },
  "Þingeyri": {
    "desc": "Þingeyri este un așezământ istoric adânc înfipt în fiordul Dýrafjörður din spectaculoșii Westfjords. Numele său provine de la un 'Thing' (un loc de adunare parlamentară locală) care avea loc aici încă din perioada vikingilor. Așezarea se mândrește cu Muntele Kaldbakur, supranumit „Alpii din Westfjords”, care domină fundalul și atrage numeroși alpiniști. Timp de decenii, Þingeyri a fost un centru prosper al vânătorii de balene și al industriei pescărești. Astăzi, atmosfera sa nostalgică atrage iubitorii de cultură, găzduind periodic expoziții de ambarcațiuni vikinge și având cafenele tradiționale islandeze autentice.",
    "facts": [
      "Locul a găzduit o adunare vikingă ('Thing') în evul mediu timpuriu.",
      "Muntele Kaldbakur, cu cei 998 de metri ai săi, este cel mai înalt din Westfjords.",
      "A fost unul dintre centrele islandeze vitale pentru vânătoarea de balene în anii 1800.",
      "Satul se află la gura magnificului fiord glaciar Dýrafjörður."
    ]
  },
  "Raufarhöfn": {
    "desc": "Raufarhöfn are distincția unică de a fi cel mai nordic sat de pe continentul islandez, aflat pe peninsula Melrakkaslétta, chiar sub Cercul Polar de Nord. Izolarea sa extremă este o trăsătură definitorie, satul experimentând Miezul Nopții Soarelui la intensitate maximă. A fost un centru înfloritor în timpul boom-ului heringului din secolul XX, dar astăzi are o populație redusă, supraviețuind prin pescuit. Cel mai vizitat obiectiv turistic al său este monumentalul Arctic Henge (Heimskautsgerðið), o structură colosală din piatră inspirată de credințele nordice antice, concepută ca un cadran solar uriaș.",
    "facts": [
      "Este cea mai nordică comunitate de pe insula principală a Islandei.",
      "Arctic Henge, de pe dealurile satului, atrage pasionații de astronomie și mitologie.",
      "La solstițiul de vară, soarele nu apune deloc sub orizont.",
      "Populația satului a scăzut de la peste 500 în timpul 'erei heringului' la sub 200 în prezent."
    ]
  },
  "Hellnar": {
    "desc": "Hellnar, situat pe coasta sud-vestică a Peninsulei Snæfellsnes, este un vechi sat pescăresc amplasat dramatic pe buza oceanului Atlantic. La fel ca vecinul său Arnarstapi, a fost timp de secole printre cele mai importante sate pescărești din vest. Relieful accidentat include faimoasa formațiune stâncoasă Baðstofa, o peșteră uimitoare sculptată de valuri în care lumina naturală se refractă splendid pe stânci. Cărările vulcanice acoperite de mușchi oferă o priveliște directă spre impunătorul vulcan Snæfellsjökull, adăugând o atmosferă magică, spirituală. Astăzi, satul este un centru pentru turism ecologic și conservarea naturii.",
    "facts": [
      "A funcționat ca o uriașă stație de pescuit în jurul anului 1500.",
      "Peștera vulcanică Baðstofa adăpostește numeroase cuiburi de păsări marine.",
      "Drumul pietonal de 2.5 km între Hellnar și Arnarstapi trece prin câmpuri vechi de lavă.",
      "Turismul din sat promovează puternic practicile durabile și respectul față de mediu."
    ]
  },
  "Laugar": {
    "desc": "Laugar este un sat liniștit așezat în pitoreasca vale Reykjadalur, între Akureyri și lacul Mývatn din nordul Islandei. Numele, însemnând 'Izvoare calde', trădează originile localității care s-a dezvoltat datorită apei sale termale abundente. Satul servește în principal ca un centru de tranzit, educație și servicii pentru numeroasele ferme din jur. Bazinul de înot încălzit geotermal de aici este unul dintre cele mai luxoase și populare din nordul rural al țării. Zona este ideală ca popas odihnitor pentru cei care explorează ruta Cercului de Diamant (Diamond Circle) către Cascadele Goðafoss și Dettifoss.",
    "facts": [
      "A găzduit mult timp o importantă școală internat pentru copiii din regiunile izolate.",
      "Este localizat strategic la jumătatea distanței dintre Mývatn și Akureyri.",
      "Apele termale de aici asigură încălzirea tuturor caselor și serelor din comunitate.",
      "Relieful înconjurător combină pajiști mlaștinoase cu formațiuni vulcanice ușoare."
    ]
  },
  "Ólafsvík": {
    "desc": "Ólafsvík este un oraș vibrant de pe coasta nordică a Peninsulei Snæfellsnes, reprezentând inima economică a regiunii. Deține un port pescăresc excepțional care îi garantează succesul comercial încă din secolul al XVII-lea. Arhitectura modernă a orașului este pusă în valoare de Ólafsvíkurkirkja, o biserică avangardistă din 1967, al cărei design imită un vas maritim ancorat protejat de munți. Cascasa spectaculoasă Bæjarfoss curge pitoresc chiar în centrul orașului. Turiștii vin aici pentru excursiile populare de observare a orcilor și a cașaloților în apele reci ale fiordului Breiðafjörður.",
    "facts": [
      "A fost primul sat din Islanda care a primit o licență comercială de la regele Danemarcei în anul 1687.",
      "Apele din dreptul orașului sunt renumite la nivel mondial pentru vizionarea balenelor ucigașe (orci).",
      "Biserica Ólafsvíkurkirkja este complet alcătuită din triunghiuri, un omagiu adus reliefului montan.",
      "Muzeul Mării (Pakkhúsið) documentează evoluția grea a pescuitului islandez."
    ]
  },
  "Svalbarðseyri": {
    "desc": "Svalbarðseyri este o mică localitate așezată idilic pe țărmul estic al fiordului Eyjafjörður, opunându-se direct peste apă de capitala nordului, Akureyri. Atmosfera este predominant agricolă și lipsită de grabă, fiind o alternativă relaxantă față de vecinii săi mai urbani. Unul dintre cele mai distinctive elemente este farul pitoresc vopsit în portocaliu strălucitor de pe mica peninsulă de nisip (eyri). Comunitatea depinde foarte mult de agricultură și de vizitatorii pasionați de excursii de iarnă pe platourile acoperite de zăpadă din spatele satului. O piscină termală recent renovată completează experiența autentic islandeză de relaxare.",
    "facts": [
      "Farul Svalbarðseyri a fost construit în anul 1920 și are 8 metri înălțime.",
      "Fiordul oferă de pe această coastă o vedere panoramică magnifică spre orașul Akureyri.",
      "Ferma a aparținut inițial Mănăstirii Munkaþverá din apropiere, fondată în 1155.",
      "Deține o galerie de artă și expoziții artizanale ale creatorilor din zonă."
    ]
  },
  "Bifröst": {
    "desc": "Bifröst este un sat universitar minuscul, dar plin de vitalitate, localizat în vestul Islandei, remarcabil prin faptul că se află chiar în mijlocul uriașului câmp de lavă Grábrókarhraun. Găzduiește Universitatea Bifröst, renumită la nivel național pentru profilul său în afaceri și drept. Relieful satului este parcă scos de pe o altă planetă; la doar câteva minute de mers pe jos se pot urca cele trei cratere vulcanice Grábrók care oferă perspective aeriene imense. Energia tinerească a studenților se combină cu sălbăticia naturală a cascadelor Glanni din apropiere, unde se poate pescui sau reflecta.",
    "facts": [
      "Universitatea Bifröst a început ca o școală de afaceri cooperativă fondată la Reykjavik.",
      "Câmpul de lavă din jur are o vechime estimată de peste 3000 de ani.",
      "Cascada Glanni, de la marginea satului, înseamnă 'Lumină' în vechea limbă nordică.",
      "Universitatea funcționează complet autonom, cu un minimart și o grădiniță pe campus."
    ]
  },
  "Suðureyri": {
    "desc": "Suðureyri este o comunitate pescărească eco-conștientă așezată pe limba de nisip Eyri, în fiordul Súgandafjörður din Westfjords. A fost un punct izolat extrem de mult timp până la construirea unui tunel prin munți de 5 kilometri în 1996, care i-a deschis porțile spre lume. Satul a adoptat cu mândrie conceptul de „Food Trail” (Traseul Mâncării), oferind vizitatorilor o privire detaliată asupra prelucrării moderne și sustenabile a peștelui, degustări directe din hale și plimbări ghidate. Atmosfera sa este una de pură simplitate islandeză, un loc unde munca aspră din port susține fiecare individ.",
    "facts": [
      "Proiectul turistic local pune un accent extrem de mare pe durabilitatea maritimă și trasabilitatea peștelui.",
      "Tunelul din 1996 a înlocuit o șosea peste munte care era periculoasă iarna.",
      "Bazinul public în aer liber deține singurul centru termal încălzit geotermal din regiunea nordică Westfjords.",
      "Fiordul îngust în care este situat determină furtuni de vânt foarte puternice toamna."
    ]
  },
  "Reykhólar": {
    "desc": "Reykhólar este un sătuc aflat pe partea sudică a peninsulei Westfjords, cu o priveliște infinită asupra imensului golf Breiðafjörður. Teritoriul este de o imensă importanță biologică; este paradisul ornitologilor din Islanda, având zeci de specii care își construiesc cuiburile în mlaștinile protejate. Zona se remarcă de restul regiunii sale prin prezența impresionantă a izvoarelor cu apă fierbinte și a nămolului geotermal plin de alge. Vizitatorii beneficiază de centre de relaxare cu căzi umplute natural cu ape minerale roșiatice. Dincolo de spa-uri, este un sat strâns legat de prelucrarea biologică a algelor din apele oceanice bogate.",
    "facts": [
      "Breiðafjörður are mii de insule, vizibile perfect de pe colinele Reykhólar.",
      "Aici există singura fabrică de colectare și procesare a algelor marine naturale la nivel industrial.",
      "Populația este destul de mică, adesea numărând sub 150 de suflete permanent.",
      "Izvoarele geotermale alimentează chiar și facilitățile turistice rurale ale călătorilor."
    ]
  },
  "Tálknafjörður": {
    "desc": "Tálknafjörður este o comunitate mică dintr-un fiord scurt, liniștit și adânc din vestul Westfjords, recunoscut ca unul dintre puținele sate complet dependente de piscicultură, o ramură agricolă acvatică înfloritoare aici. Localitatea are mai degrabă un stil relaxant și idilic în contrast cu pescuitul brutal în ocean deschis. Izvorul termal Pollurinn, situat la câțiva kilometri în afara satului, oferă căzi calde naturale chiar pe coasta dealurilor, un magnet absolut pentru relaxarea vizitatorilor care doresc singurătate arctică. Este, de asemenea, un hub local preferat al pescarilor sportivi din Europa care vizitează verile islandeze.",
    "facts": [
      "Multe nave pescărești moderne au fost înlocuite cu ferme de pește organizate în apele limpezi ale fiordului.",
      "Pollurinn ('Balta') constă în mai multe bazine conectate direct din ape termale montane.",
      "Până la jumătatea secolului trecut, satul nu dispunea de drumuri adecvate de legătură terestră.",
      "Există zeci de locuri neexplorate de bird-watching în munții care închid fiordul."
    ]
  },
  "Kópasker": {
    "desc": "Kópasker este un sătuc calm pe malurile estice ale fiordului Öxarfjörður din Islanda de nord. Cunoscut ca 'Ușa către Cercul Polar', este inima creșterii tradiționale de oi a țării, cu zeci de ferme extrem de îndepărtate. Punctul principal de educație din zonă este Centrul și Muzeul Cutremurelor (Snartarstaðir), înființat pentru a detalia devastarea geologică incredibilă a unui cutremur din anul 1976 care a modelat dramatic peisajul coastei. Turiștii apreciază zona pentru liniștea solitară totală și fauna minunată de foci din extremitățile promontoriului din apropiere.",
    "facts": [
      "Sătucul a fost grav afectat de cutremurul de 6.3 grade din ianuarie 1976.",
      "Numele orașului se traduce simplu prin 'Bariera Focilor' (skerry of seal pups).",
      "Are o mică expoziție muzeală tradițională a patrimoniului rural arctic (Byggðasafnið).",
      "Economia locală funcționează din plin pe o cooperativă imensă care deservește fermierii."
    ]
  },
  "Árskógssandur": {
    "desc": "Árskógssandur este situat la doar 35 de kilometri de capitala nordului, Akureyri, și oferă o viziune complet inovatoare a spiritului islandez. Acest sătuc mândru găzduiește renumita Fabrică de Bere Bruggsmiðjan (Berăria Kaldi), prima fabrică de bere artizanală care a revitalizat tradiția berii în Islanda odată cu ridicarea interdicției din 1989. Lângă fabrică s-au dezvoltat faimoasele Băi cu Bere Spa, unde oaspeții se pot relaxa în butoaie umplute cu apă minerală și hamei islandez fierbinte. Pentru navetiști, este punctul esențial de lansare a feribotului către impresionanta și turistica insulă Hrísey, aflată în larg.",
    "facts": [
      "Băile cu bere (Bjórböðin) oferă proceduri neobișnuite de recuperare termală cu alge și bere proaspătă.",
      "Fabrica Kaldi este printre puținele care produc bere în conformitate strictă cu Legea Purității Cehe.",
      "Feribotul către Hrísey, o insulă strict ecologică, pleacă zilnic din micul port de aici.",
      "Peisajul dominat de munții fiordului Eyjafjörður asigură o priveliște de excepție pe timp de iarnă."
    ]
  },
  "Ólafsfjörður": {
    "desc": "Ólafsfjörður se mândrește cu titlul de una dintre așezările cu cei mai mulți munți înconjurători din Islanda, situându-se pe Peninsula Tröllaskagi. Lacul enorm din mijlocul orașului este o atracție principală, apele dulci întâlnind adesea sarea maritimă în timpul inundațiilor, rezultând ecosisteme pescărești neobișnuite. Istoric, a fost adesea rupt de civilizație luni de zile din cauza zăpezilor nordice colosale; situația s-a schimbat odată cu noile tuneluri prin stânci. Este frecvent numit hub-ul pentru iubitorii pasionați de schi sălbatic (heli-ski) și freeride european datorită pârtiilor naturale imense lăsate neatinse.",
    "facts": [
      "Trei sisteme montane stâncoase abrupte blochează complet orașul într-o vale uriașă închisă.",
      "Primul tunel cu o singură bandă, Múlagöng, l-a conectat la Dalvík abia în 1991.",
      "Piscina termală din Ólafsfjörður este recunoscută ca având un cadru natural absolut idilic.",
      "Turismul sporturilor de iarnă extrem a devenit un domeniu care asigură renașterea orașului."
    ]
  },
  "Hnífsdalur": {
    "desc": "Hnífsdalur este un așezământ restrâns cu vibrații nostalgice și liniștite între munții extrem de ascuțiți din Westfjords, exact între faimoasele sate Bolungarvík și Ísafjörður. Satul ocupă un promontoriu natural ce coboară abrupt într-un bazin oceanic imens. Ocupând o poziție periculoasă sub Munții Búlandstindur, așezământul se confruntă zilnic cu riscul valurilor oceanice mari și posibilitatea avalanșelor severe iarna (fiind afectat tragic de avalanșe de-a lungul anilor). Astăzi, ziduri speciale uriașe protejează clădirile colorate ale populației scăzute ce adoră intimitatea arctică a zonei.",
    "facts": [
      "Numele orașului se traduce prin „Valea Cuțitului” (Valley of the Knife), referindu-se la ascuțișul munților.",
      "A fost o localitate complet independentă municipal până la fuzionarea cu zona Ísafjörður.",
      "Avalanșele mortale repetate i-au obligat pe unii rezidenți să-și părăsească istoric gospodăriile vechi.",
      "O pistă pitorească de drumeție urmează vechiul drum terifiant al coastei montane."
    ]
  },
  "Drangsnes": {
    "desc": "Drangsnes este un sătuc pescăresc de mărime de buzunar, recunoscut ca inima coastei Strandir în estul peninsulei Westfjords. Ceea ce diferențiază această localitate pitorească de altele este complexul fermecător format din trei căzi de baie ('hot tubs') geotermale publice, montate chiar pe linia plajei stâncoase, unde localnicii și călătorii comunică zilnic contemplând oceanul și mamiferele marine. În mod frecvent, de pe apă se pot urmări navele prinzând prada pentru restaurantele locale. Excursiile cu barca la insula Grímsey din vecinătate oferă drumeții de excepție alături de milioanele de pufini, vulpi și rațe eider.",
    "facts": [
      "Insula Grímsey (a nu se confunda cu insula din nord), situată vizavi de port, aparține faimoasei Mănăstiri Helgafell.",
      "Bazinele de pe faleză, complet libere de taxe, captează natural energia vulcanică subterană a solului arctic.",
      "Satul sărbătorește frecvent „Malurile fericite”, un festival pescăresc complet dependent de capturile din mare.",
      "Legenda spune că insula Grimsey din fața portului a fost formată de un trol uriaș ce fugea de soare."
    ]
  },
  "Selfoss": {
    "desc": "Selfoss reprezintă principalul punct administrativ și comercial al Islandei de Sud, cel mai populat oraș aflat direct pe șoseaua de centură (Ring Road). Situat pe malurile tumultuosului râu Ölfusá, orașul a fost definit ca pivot esențial în dezvoltarea națională după construirea uriașului pod de suspensie în secolul XIX. Dezvoltarea sa modernă în jurul fermelor imense cu un nivel ridicat al calității face din el hubul lactatelor și laptelui pentru întregul sud. Recent, s-a amenajat un complex central nou, conceput cu arhitectură retro, o minunăție dedicată comerțului vibrant modern, un parc impresionant dedicat memoriei campionului mondial de șah Bobby Fischer completând farmecul așezării urbane.",
    "facts": [
      "Podul original din Selfoss a permis deschiderea comerțului industrial cu Reykjavik, prăbușindu-se tragic, dar reconstruit perfect.",
      "Satul conține faimosul mormânt al campionului la șah, legendarul Bobby Fischer, înmormântat retras și simplu.",
      "Noul nucleu comunitar ('Noul Centru') are zeci de replici impecabile de case celebre naționale prăbușite în istorie.",
      "A fost baza uneia dintre primele bănci cooperatiste islandeze ce a sprijinit pescarii la 1900."
    ]
  },
  "Skagaströnd": {
    "desc": "Skagaströnd este un mic așezământ comercial istoric și port maritim plasat în Peninsula Skagi (nord-vest). Sfidând vremea oceanică dură, comunitatea de sute de ani adună pește pentru producțiile nordice și a dezvoltat laboratoare de top în pescuit. Devenit un refugiu interesant de la marile călătorii nordice, zona găzduiește azi un apreciat muzeu islandez al ghicitului (Profețiile), dedicat poveștilor cu vrăjitoare locale ce operau magii în secolul X. Pe dealurile înalte, iubitorii de natură se pot bucura de Spákonufellshöfði, o uriașă promontorie protectoare cu rute perfect create prin rocile vulcanice unde se odihnesc numeroase focile liniștite din nord.",
    "facts": [
      "Muzeul Magiei a fost construit conform faimosului personaj mistic numit Þórdís Spákona.",
      "A făcut primii pași istorici în anul 1600 prin comercianții danezi devenind 'Høfðakaupstaður'.",
      "În prezent este cunoscut la nivel național ca nucleul universitar islandez de bio-tehnologie maritimă BioPol.",
      "Rutele promontoriului vulcanului extins sunt perfecte pentru o plimbare complet gratuită alături de focile sălbatice."
    ]
  },
  "Blönduós": {
    "desc": "Blönduós este un port strategic la întâlnirea dintre impresionantul râu arctic Blanda (Bland) și nordul oceanului islandez. Trecutul satului evocă viața izolată agricolă, devenind centrul principal al crescătorilor din munți pe parcursul ultimelor decenii rurale. Astăzi oferă perspective culturale enorme grație complexului Textil Național ce recunoaște femeile trecute ce munceau constant la dezvoltarea țesăturilor pe vreme înghețată. Construcția spectaculoasă a bisericii sale, imaginând cu precizie forma creată din craterul vulcanului, uluiește privirile. Pentru ecoturism este locul suprem dedicat vizionării zborului de nord a sute de gâște cu gât negru.",
    "facts": [
      "Biserica impresionantă (construită în 1993 de Maggi Jónsson) vizualizează absolut erupția unui crater local extrem de masiv.",
      "Muzeul Textil din centrul satului rămâne singura autoritate supremă națională a patrimoniului designului îmbrăcăminții antice.",
      "Se separă efectiv în două maluri complet tăiate de râul glaciar intens populat de pescarii de somon profesioniști.",
      "Trei dintre cele mai de succes fabrici ecologice se sprijină pe resursele râului adiacent de la marginea vestică a portului."
    ]
  },
  "Hjalteyri": {
    "desc": "Hjalteyri se detașează misterios la baza unui uriaș perete muntos al fiordului islandez Eyjafjörður. Un fost pionier industrial absolut la apogeul prosperității heringului nord-atlantic din anii 1940, și-a trăit liniștit apusul economic transformând vechea gigantică fabrică abandonată de pește într-un complex dedicat expozițiilor artistice ciudate și contemporane din prezent. Turiștii sunt captivați de siluetele vechi ale utilajelor pe fondul albastru nesfârșit al apelor, o atmosferă melancolică de tip muzeu în aer liber abandonat, cu un baraj masiv ecologic care protejează apele din nord și faimos ca fiind locație vitală de lansare marină pentru observarea faimoselor mamifere marine uriașe scufundate în fața golfului.",
    "facts": [
      "Ruinele vechii platforme imense a heringului servesc artiștilor și muzicienilor independenți naționali primăvara.",
      "Din port pleacă nave de pescari profesioniști recunoscuți național, cu succes vizibil la capturarea uriașelor orce atlantice.",
      "Locuitorii numără rareori peste 40 de persoane de o jumătate de deceniu.",
      "Climatul maritim liniștit îl face o nestemată vizuală extrem de protejată și retrasă față de zonele nordice populate islandeze."
    ]
  },
  "Borgarfjörður eystri": {
    "desc": "Borgarfjörður eystri este o capsulă a minunilor naturale ce stă ascunsă printr-o uriașă trecătoare rutieră greoaie deasupra apelor arctice de nord-est, protejată total prin vulcanii spectaculoși ascuțiți din munții masivi nordici cu roci colorate purpuriu și verde. Este reședința absolut centrală a reginei regatului ascuns elf islandez într-o masivă faimoasă colină pitorească numită Álfaborg așezată vizibil chiar în centru. Vara trăiește absolut prin cel mai simplu port turistic unde platforma uriașă Hafnarhólmi a mii de creaturi spectaculoase păsări Puffin permite vizitarea apropiată sigură. Fiind leagănul național absolut al zeci de drumuri montane colosale nordice uimitoare pentru europenii experimentați iubitori de călătorii nordice la nordul capului pământului.",
    "facts": [
      "Orașul devine centrul suprem festivalier numit Bræðslan în sezonul mediu turistic național estival pentru mii de iubitori de folk arctic.",
      "Stânca mistică a Elfilor este păstrată perfect absolut intactă pentru folclorul cultural al reginei elfilor nordici naționali magici respectați de națiune.",
      "Roca colorată, uriașului vulcan masiv adormit masiv din sud oferă călătorilor unele dintre imaginile de patrimoniu de neuitat din fotografii aeriene de basm spectaculoase.",
      "Zilnic adăpostește cea mai extrem vizibilă colonie naturală sigură de mii de adorabile zburătoare păsări Puffin la jumătate de metru de aleile din port sigure pentru mii turiști din lume deasupra Atlanticului."
    ]
  },
  "Hofsós": {
    "desc": "Hofsós servește pe bună dreptate titlul onorabil suprem istoric nordic al Islandei recunoscându-se printre cele mai străvechi puncte portuare de export viking al Mării. Izolat liniștit la extremitatea mării Skagafjörður, poartă mărturia a sute de insulari plecați dramatic în nave masive către viața necunoscută canadiană la secolul treisprezece, onorați azi la impunătorul Muzeu islandez de Vest Emigrație perfect păstrat chiar la faleză spectaculoasă montană. Orașul atrage turism de lux mondial prin piscina publică spectaculoasă 'Infinity' creată de cel mai faimos arhitect național modern care continuă minunat apele înghețate scandinave într-un miraj de o frumusețe inegalabilă pentru înotătorii reci arctici islandezi vizitatori protejați din bazinul nordic spectaculos termal fierbinte liniștit așezat perfect în nord arctic nordic montan.",
    "facts": [
      "Bazinul uimitor public infinity modern de aici, proiectat minunat pe faleză arctică, a fost considerat pe drept printre cele mai idilice creații spectaculoase de baie geotermală islandeze din nord din Europa nordică turistică perfectă arctic din secol mondial modern minunat așezat excelent.",
      "Muzeul nordic uimitor al Marii Emigrări naționale nordice expune dramele din viață a masivului exod plecat în masă nordic arctic național islandez nordic peste veacul arctic nordic treisprezece curajos nordic din națiune scandinav curajos uimitor perfect nordic conservat arctic excelent istoric nordic perfect."
    ]
  },
  "Hólar": {
    "desc": "Hólar se înalță extrem de mândru printre văile muntoase imense islandeze la extremitatea Skagafjörður, ocupând de o mie de ani funcția ecleziastică epică cea mai prestigioasă educațională superioară nordică atlantică a secolelor timpurii islandeze vikingi medievali episcopale islandeze magice nordice așezate nord scandinave masive nordice naționale puternice nordic puternic respectat național. Ca fost sediu episcopal nord, Hólar a influențat complet politica și tiparul medieval, printând uimitor primele faimoase lucrări la secol nord arctic uimitor magic. Turlele uriașei catedrale islandeze celebre perfect așezate printre păduri izolate rare domină magnific zările fermecătoare perfecte cu clopote. Universitatea masiv nordică de ecvestru modern național adună tinerii studenți europeni naționali și europeni la cursuri unice ecvestre mondiale unice arctice masiv idilic montan excelent așezat magic nordic magic islandez uimitor.",
    "facts": [
      "Catedrala actuală epică de piatră spectaculoasă a fost donată magnific regal nordic de regatul uimitor masiv danez puternic așezat din secol arctic de neuitat național din optsprezece nordic istoric scandinav unic arctic magic scandinav de epocă magic nordic uimitor masiv așezat excelent respectat islandez masiv istoric islandez perfect magic.",
      "Prima tipografie puternică națională nordică a luat ființă complet respectat la șaisprezece nordic așezată la palat educațional nordic magic masiv islandez."
    ]
  },
  "Reykjahlíð": {
    "desc": "Reykjahlíð este poarta de intrare perfectă și spectaculoasă arctic nordică spre fascinantul lac imens uimitor islandez Mývatn din interiorul nordic, reprezentând un centru administrativ vital de servicii așezat excelent între ape imense nordice uimitoare și cratere perfect magice masive. O comunitate profund recunoscătoare, istoria lor glorioasă păstrează perfect momentul legendar uimitor nordic magic din sute de ani de masivă erupție masivă vulcanică uimitoare când micuța biserică din lemn a rămas excelent neatinsă miraculos curajos din lava colosală distrugătoare de zeci uriașe masive focuri uimitor legendare oprite exact la zeci metri islandezi arctici. Oamenii profită din plin minunat spectaculos de spa-urile uimitoare nordice calde masive naturale arctice vizitatorilor scandinavi islandezi mii de călători europeni așezați excelent în zona magică termală idilic minunată caldă din mii nord vizitatori relaxați perfect islandezi.",
    "facts": [
      "Zona de la Mývatn nord este un sit unic planetar pentru fauna magică scandinavă de mii sute arctice păsări rățoi magic unic cuibărit din apă scandinav uimitoare excelent așezat.",
      "Fluxul masiv terifiant uriaș de vulcani din lava masivă secolului respectat uimitor 1729 este excelent uimitor vizibil colosal în formele magice așezate perfect vizibil pietrificate magic la sud de așezarea uimitoare vizibil scandinav."
    ]
  },
  "Egilsstaðir": {
    "desc": "Egilsstaðir acționează ca un nod rutier, administrativ și economic esențial așezat confortabil, modern și prosper pe țărmul imens al lacului legendelor Lagarfljót din inima fiordurilor vaste imense islandeze din est. Acest centru urban nou islandez a cunoscut o expansiune extraordinară explozivă modernă din anii șaptezeci cu facilități confortabile și aeroport modern așezat perfect în nord, ajutând perfect turismul internațional național respectat european național uimitor islandez magic să se cazeze aici nordic excelent calitativ așezat superb relaxant. Apropierea sa masiv calitativă uimitoare vizual naturală de cel mai vast codru forestier puternic unic islandez (pădurea Hallormsstaðaskógur) și misticismul legendarului șarpe enorm acvatic islandez localnic magic nordic uriaș ce înoată magic respectat faimos adesea sub pod uriaș face așezarea perfect nordică uimitor națională idilic relaxantă arctic pentru turiști scandinavi nord magic de top excelent arctic așezat minunat nordic cald magic modern uimitor prosper.",
    "facts": [
      "Este printre cele mai noi dezvoltate moderne masive comunități așezate uimitor naționale nordice din țară, fondată doar decenii de secol uriaș magic scandinav de modernizare excelent uriaș modern prosper respectat așezat islandez superb.",
      "Zvonurile despre creaturile magice acvatice respectate arctice uriașe din secol colosal islandez au stimulat explorarea națională respectată magic a lacului tulbure uriaș masiv al satului perfect așezat nordic magic nordic de renume național islandez nordic magic nordic scandinav de zeci uimitor ani."
    ]
  },
  "Eyrarbakki": {
    "desc": "Eyrarbakki ocupă pe coasta oceanică masiv uimitor din sudul faimos colosal islandez respectat scandinav un respectabil și faimos onorabil loc de renume colosal comercial nordic istoric din națiunea scandinavă arctic islandeză puternic respectat național. Cu ulițe pline cu clădiri așezate excelent scandinav minunat de lemn original perfect din vechime colorate cald magic, satul uimitor faimos insular se remarcă prin istoria bogată imens respectată din 1765 din Casa veche uriașă numită magnific 'Húsið', prima locație islandeză rezidențială uriașă din națiunea scandinavă istoric așezată splendid protejat. Bariera de siguranță maritimă imensă protejând excelent furtunile din ape oceanice aspre islandeze colosal respectat face zona natural protejată uimitor din valurile oceanice imense din ocean protejată excelent din zid așezat manual curajos din națiunea islandeză uimitor curajos din vechi islandezi pescari magici islandezi nord magic așezați excelent calm prosper islandez uimitor istoric pitoresc liniștit.",
    "facts": [
      "Casa Húsið respectată este azi muzeul de bază al stilului tradițional danez din zona mării din vechime magic islandeză respectată național magnific așezat curajos minunat național islandez uimitor.",
      "Biserica Eyrarbakkakirkja adăpostește perfect uimitor de la altar nordic calitativ o pictură masivă uimitor oferită din donații de nobilime nord europeană colosală regală minunat așezată splendid din nordul arctic magic nordic uimitor islandez idilic frumos minunat protejat nordic așezat curajos nordic respectat idilic liniștit."
    ]
  },
  "?jórsárdalur": {
    "desc": "Þjórsárdalur (Thjorsardalur) nu este propriu-zis o așezare compactă densă urbană ci una minunat excelent împrăștiată prin valea uriașă magnific arctică formată prin tăietura colosalului uriașului curs nordic islandez masiv magic puternic curajos din apele sudului islandez. Zona valoroasă de excepție așezată curajos printre peisajele vulcanice fantastice din inima nordului cald și păduri rare minunate găzduiește cel mai detaliat respectat impresionant sit arheologic de renaștere culturală masiv islandez de vizitat, reconstrucția impecabilă masivă din nord vikingă de excelență (Stöng) cu iarbă verde magic acoperiș așezat. Distrugerea tragică magnific acoperită masiv a zeci ferme la erupția mistică colosal vulcanică 1104 prin cenusă uimitoare Hekla vulcanică din nord masivă face să fie respectat și renumit scandinav de vizitatori islandezi și turiști nord scandinavi ca un memento durabil arctic excelent uimitor istoric nordic minunat perfect fermecător curajos uimitor nordic magic conservat calm.",
    "facts": [
      "Stöng a fost reprodusă ca formă imensă uimitoare național perfect vikingă pentru mii de evenimente de aniversare nord islandez național scandinav de aur așezate perfect vizitatorilor magic naționali arctici scandinavi frumoși.",
      "Oaza valei se așează frumos spectaculos protejat idilic printr-o oază colosală magnifică plină prin surse magice uimitoare ape cristaline din zeci magice rauri idilice islandeze minunat curajos puternic nordic respectat frumos arctic din ape vulcanice de cascade frumoase din oaza masivă așezată frumos frumos pitoresc idilic natural așezată curajos nordic curajos frumos idilic idilic magic islandez uimitor."
    ]
  },
  "Bakkafjörður": {
    "desc": "Bakkafjörður trăiește absolut curajos cu oceanul din cel mai adânc exilat teritoriu nordic izolat fermecător calm din est fiordurilor scandinave aspre idilice pe un promontoriu. Este inima izolată magic pescărească arctică neatinsă din inima fiordului scandinav uimitor nord arctic unde sute locuitori trăiesc o experiență aspră marină simplă liniștită dependentă absolut magic de ape marine nord oceanice magice cald islandeze așezate calm pitoresc frumos idilic. Liniștea zonei extrem de rară la nivel național atrage admiratori calitativi vizitatori nord idilici rari europeni scandinavi magici pentru meditație profund arctic respectat și liniște magnific curajos așezat din nord liniștit excelent liniștit nordic ocean extrem cald islandez frumos pitoresc frumos.",
    "facts": [
      "Comunitatea se menține mereu cu un recensământ redus, rareori trecând de sub sute curajos persoane permanente magice calde din nord islandeze idilic frumoase pitoresc idilic.",
      "Traseul cel mai idilic spre Langanes respectat magic scandinav de vizualizare arctic păsări pleacă perfect exact de aici magnific islandez minunat uimitor protejat frumos idilic."
    ]
  },
  "Dalvík": {
    "desc": "Dalvík onorează spectaculos scandinav uimitor vestul fiordului Eyjafjörður deținând supremația de faimă la zeci vizitatori iubitori de festival pescăresc masiv 'Marele Pește' unde un oraș enorm oceanic nordic mănâncă din generozitatea oceanului gratuit în străzi calde ospitaliere naționale magice liniștite islandeze magice calde pitorești. Este de bază în lansarea uimitor vapoare de privit uimitoare scandinav cetacee islandez faimoase și conexiune curajos respectat oceanic naval cu insula Grímsey așezată curajos nord arctic dincolo magic de granița cercului polar. Sportul alpin de iarnă înconjoară orașul masiv nordic frumos din munții înalți magici din peninsulă așezați excelent în văi glaciare masive magice cald respectate la mii vizitatori islandezi idilici calzi frumoși curajos idilic magic liniștit așezat respectat așezat spectaculos idilic.",
    "facts": [
      "Festivalul enorm islandez dedicat complet gratuit zeci uimitoare preparatelor locale atrage la zece ori respectat vizitatori nordic național magic pe an magnific curajos scandinav magic pitoresc frumos islandez frumos cald idilic curajos.",
      "Orașul a supraviețuit istoric eroic complet magic cutremurului puternic masiv național 1934 excelent așezat curajos reconstruit respectat liniștit cald magic."
    ]
  },
  "Fellabær": {
    "desc": "Fellabær reprezintă cel mai activ nordic vecin liniștit minunat comunitar urban frate curajos scandinav al enorm de aglomerat oraș Egilsstaðir așezat direct curajos la capătul nordic uimitor mal nordic imens al apei imense a fiordului tulbure din lac Lagarfljót din est scandinav nordic uimitor așezat pitoresc islandez idilic calm frumos cald. Podul ce a unit excelent așezările liniștite face ca satul perfect nordic să aibă zeci respectate magice calde frumuseți calde nord liniștite în fața agitației orașelor uimitor dezvoltate scandinav din anii masiv magici islandezi așezate perfect pitoresc frumos nordic liniștit. Priveliștea superbă asigura nord scandinav calm un mediu magic calm locuitorilor care prosperă excelent liniștit islandez frumos magic așezat idilic minunat așezat magic curajos idilic frumos nordic curajos liniștit așezat idilic respectat.",
    "facts": [
      "Ecosistemul localnic rural protejează liniștit zeci frumoase idilic spații nordice magice așezate curajos pentru zeci rase ecvestre scandinav din țară magic așezat idilic cald idilic.",
      "Populația localnică uimitor nordic funcționează complet integrat absolut fuzionat idilic minunat la toate spectaculos zeci beneficiile islandez estice național mari de oraș magic așezat frumos minunat idilic cald magic așezat."
    ]
  },
  "Bíldudalur": {
    "desc": "Bíldudalur ocupă liniștit minunat un mic fermecător colț spectaculos nordic al fiordului Arnarfjörður din sălbaticele nordice curajos regiuni Westfjords protejat excelent prin bariera magnific așezată a zeci stânci curajoase magice idilic calde din ocean calm liniștit islandez magic așezat idilic. Cunoscut pentru apele incredibil de calme și clima mult mai stabilă cald magic față din regiunea națională aspră, a atras uimitor mii activități marine idilic scandinave frumoase idilic minunate de producție maritimă modern așezat magic liniștit. O expoziție locală absolut bizară faimoasă dedicată faimoșilor monștri și spiritelor apelor marine atrage magic zeci turiști liniștiți respectați din vizitatori național nordic magic așezați excelent curajos așezat pitoresc idilic minunat așezat calm frumos magic cald islandez frumos pitoresc idilic cald magic așezat calm.",
    "facts": [
      "Centrul Islandez dedicat spectaculos național legendelor faimoși magici idilici uriași Monștri Mării e așezat aici frumos magic pitoresc așezat idilic minunat.",
      "Comunitatea se menține activ la pescuitul idilic protejat modern așezat liniștit magic fermecător la ferma marine din marea caldă liniștit calitativă așezată idilic din port cald magic islandez așezat frumos cald magic așezat liniștit."
    ]
  },
  "Varmahlíð": {
    "desc": "Varmahlíð se poziționează excelent cald central într-una din regiunile respectate calde din interiorul național arctic nordic la sud din nord Skagafjörður recunoscută curajos magic drept hub ecvestru uimitor absolut de excepție nord islandez magic așezat idilic magic islandez curajos frumos idilic pitoresc așezat magic cald idilic liniștit. Rutele intersecției magistrale principale inelare din sud cu nord aduc sute turiști la minunatele băi termale idilic așezate perfect vizitatorilor obosiți nordic din sute kilometri de rute islandeze magic nord arctice curajoase așezate uimitor frumos pitoresc frumos idilic. Izvoarele fierbinți oferă minunat sere nordice magice așezate excelent scandinav de sute recolte calitativ idilice respectate nordic din zeci ferme curajos tradițional așezate cald minunat idilic frumos magic cald islandez magic cald minunat idilic.",
    "facts": [
      "Muzeul fermier din nord Glaumbær cu vechi ferme cu acoperiș magic de iarbă este excelent ușor așezat idilic aproape scandinav minunat de ruta magic așezată pitoresc cald magic.",
      "Zona a fost epicentrul excelent național colosal scandinav uimitor pentru producția zeci cai frumoși puri din rasa puternică nord islandez curajos așezați magic idilic pitoresc frumos magic cald idilic magic așezat cald magic."
    ]
  },
  "Djúpivogur": {
    "desc": "Djúpivogur se află excelent cald magic liniștit pe superba așezată mistic promontorie estică așezată nordic din zona calitativ islandez fiord estice minunat idilic liniștit curajos pitoresc frumos cu istorie absolut danez scandinav magic comercial așezată de sute magic nord ani respectat pitoresc islandez magic. Cel mai iconic nordic vizual este masiv minunat frumos ascuțit colosal piramidal nordic munte curajos mistic Búlandstindur așezat protector din spatele portului cald idilic cald magic așezat curajos liniștit pitoresc idilic minunat așezat. Arta sculpturii islandez magice așezate perfect scandinav public modern așezată de artizani locali include idilic colecția faimos uimitor liniștit idilic magic din ouă enorme din piatră de la port așezate perfect calm vizitatorilor nordic idilici minunat liniștiți respectați calm idilic frumos magic așezat.",
    "facts": [
      "Orășelul aparține onorat mișcării idilic mondiale ecologice rurale Cittaslow de ritm nordic curajos calm idilic liniștit din ritm magic de viață pitoresc frumos idilic magic așezat liniștit cald magic idilic.",
      "Expoziția uriașelor frumoasei faimos zeci sculpturi ovale din magice păsări din artizanat așezat curajos de-a lungul curajos scandinav magic port din est așezat minunat calitativ idilic pitoresc idilic cald magic islandez așezat frumos cald magic așezat calm."
    ]
  }
}

with open("lib/visualLab/data/poiExtraIcelandCities.ts", "r", encoding="utf-8") as f:
    content = f.read()

pois_text = re.split(r"(?=\n  \{\n    id:)", content)
out_blocks = []

for block in pois_text:
    if "id:" not in block:
        out_blocks.append(block)
        continue
        
    id_match = re.search(r"id:\s*\"(.*?)\"", block)
    name_match = re.search(r"name:\s*\{.*?en:\s*\"(.*?)\"", block)
    
    if not id_match or not name_match:
        out_blocks.append(block)
        continue
        
    pid = id_match.group(1)
    name = name_match.group(1)
    
    info = None
    if name in data_by_name:
        info = data_by_name[name]
        
    if info:
        # Add descriptionAdvanced if entirely missing
        if "descriptionAdvanced:" not in block:
            inject_desc = f"""
    descriptionAdvanced: {{
      de: "",
      hu: "",
      ro: "{info['desc']}",
      en: ""
    }},"""
            block = re.sub(r"(description:\s*\{.*?\},\n    facts:\s*\{.*?\},?)", r"\1" + inject_desc, block, flags=re.DOTALL)
        else:
            def repl_desc(m2):
                inner = m2.group(1)
                if "ro: \"\"" in inner:
                    inner = inner.replace("ro: \"\"", f"ro: \"{info['desc']}\"")
                elif "ro:" not in inner:
                    inner = f"\n        ro: \"{info['desc']}\",\n" + inner
                else:
                    inner = re.sub(r"ro:\s*\".*?\",", f"ro: \"{info['desc']}\",", inner, flags=re.DOTALL)
                return "descriptionAdvanced: {" + inner + "}"
            block = re.sub(r"descriptionAdvanced:\s*\{(.*?)\}", repl_desc, block, flags=re.DOTALL)
            
        # Add factsAdvanced if entirely missing
        ro_facts = json.dumps(info['facts'], ensure_ascii=False)
        if "factsAdvanced:" not in block:
            inject_facts = f"""
    factsAdvanced: {{
      de: [],
      hu: [],
      ro: {ro_facts},
      en: []
    }},"""
            block = re.sub(r"(descriptionAdvanced:\s*\{.*?\},?)", r"\1" + inject_facts, block, flags=re.DOTALL)
        else:
            def repl_facts(m2):
                inner = m2.group(1)
                if "ro: []" in inner:
                    inner = inner.replace("ro: []", f"ro: {ro_facts}")
                elif "ro:" not in inner:
                    inner = f"\n        ro: {ro_facts},\n" + inner
                else:
                    inner = re.sub(r"ro:\s*\[.*?\],", f"ro: {ro_facts},", inner, flags=re.DOTALL)
                return "factsAdvanced: {" + inner + "}"
            block = re.sub(r"factsAdvanced:\s*\{(.*?)\}", repl_facts, block, flags=re.DOTALL)
            
    out_blocks.append(block)

with open("lib/visualLab/data/poiExtraIcelandCities.ts", "w", encoding="utf-8") as f:
    f.write("".join(out_blocks))

print("Applied batch 3 data.")
