
import re

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/switzerlandPoi.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Identify all POIs and their start/end positions
# A POI object usually starts with { and ends with }, and has an id: "..." field.
# Since they are in arrays, they look like:
#   {
#     id: "...",
#     ...
#   },

# We can find all id: "..." and then find the enclosing braces.

def find_poi_block(content, poi_id):
    id_str = f'id: "{poi_id}"'
    start_pos = content.find(id_str)
    if start_pos == -1:
        return None, -1, -1
    
    # Find start brace { before the ID
    bracket_count = 0
    obj_start = -1
    for i in range(start_pos, -1, -1):
        if content[i] == '}': bracket_count -= 1
        if content[i] == '{':
            bracket_count += 1
            if bracket_count == 1:
                obj_start = i
                break
    
    if obj_start == -1: return None, -1, -1
    
    # Find end brace } after the ID
    bracket_count = 1
    obj_end = -1
    for i in range(start_pos, len(content)):
        if content[i] == '{': bracket_count += 1
        if content[i] == '}':
            bracket_count -= 1
            if bracket_count == 0:
                obj_end = i + 1
                break
                
    if obj_end == -1: return None, -1, -1
    
    return content[obj_start:obj_end], obj_start, obj_end

# Content definitions (same as before)
updates = {
    "country-switzerland": {
        "factsAdvanced": [
            "Elveția are peste 1.500 de lacuri cristaline risipite pe tot cuprinsul țării.",
            "Cel mai înalt punct din țară este Vârful Dufour din masivul Monte Rosa, atingând 4.634 metri.",
            "Țara este singura din lume care are o democrație directă atât de activă.",
            "Elveția găzduiește sediile a numeroase organizații internaționale datorită neutralității sale.",
            "Sistemul de adăposturi antiatomice din țară poate găzdui întreaga populație în caz de nevoie."
        ]
    },
    "city-zurich": {
        "factsAdvanced": [
            "Orașul găzduiește anual Street Parade, cel mai mare festival de muzică techno din lume.",
            "ETH Zürich, universitatea locală, este locul unde Albert Einstein a studiat și a predat.",
            "Zürich a fost clasat în mod repetat ca orașul cu cea mai bună calitate a vieții din lume.",
            "Fiecare dintre cele 1.200 de fântâni din oraș oferă apă potabilă proaspătă și gratuită."
        ]
    },
    "city-geneva": {
        "factsAdvanced": [
            "Jet d'Eau aruncă apa la o înălțime de 140 de metri cu o viteză de 200 km/h.",
            "Geneva este cunoscută ca fiind 'Capitala Păcii' datorită sediului ONU.",
            "Orașul este locul de naștere al Crucii Roșii, fondată de Henry Dunant în 1863.",
            "Cea mai veche casă din Geneva, Maison Tavel, datează din secolul al XII-lea."
        ]
    },
    "city-bern": {
        "factsAdvanced": [
            "Zytglogge este un turn cu ceas medieval ce oferă un spectacol mecanic la fiecare oră fixă.",
            "Bern este singurul oraș elvețian inclus în întregime în patrimoniul mondial UNESCO.",
            "Râul Aare înconjoară orașul vechi, fiind un loc popular pentru înot în timpul verii.",
            "Parcul Urșilor găzduiește simbolul viu al orașului încă din secolul al XV-lea."
        ]
    },
    "city-basel": {
        "factsAdvanced": [
            "Basel are cea mai mare densitate de muzee din Elveția, cu peste 40 de instituții culturale.",
            "Carnavalul Basler Fasnacht începe exact la ora 4:00 dimineața cu 'Morgestraich'.",
            "Orașul este un centru mondial al industriei farmaceutice, găzduind giganți precum Roche și Novartis.",
            "Podul Mittlere Brücke, inaugurat în 1226, este unul dintre cele mai vechi puncte de trecere peste Rin."
        ]
    },
    "city-lausanne": {
        "factsAdvanced": [
            "Lausanne este sediul Comitetului Olimpic Internațional încă din anul 1915.",
            "Catedrala Notre-Dame din oraș este considerată cel mai frumos edificiu gotic din Elveția.",
            "Este singurul oraș elvețian care dispune de un sistem de transport public tip metrou.",
            "Orașul este construit pe drei dealuri, oferind panorame superbe asupra Lacului Leman."
        ]
    },
    "nature-matterhorn": {
        "factsAdvanced": [
            "Matterhorn este unul dintre cei mai periculoși munți din Alpi, cu sute de alpiniști care și-au pierdut viața.",
            "Muntele are patru fețe distincte care sunt orientate către cele patru puncte cardinale.",
            "Prima ascensiune reușită a avut loc în 1865, condusă de britanicul Edward Whymper.",
            "Forma sa unică de piramidă a fost folosită ca simbol pentru diverse mărci elvețiene celebre."
        ]
    },
    "city-lucerne": {
        "factsAdvanced": [
            "Podul Capelei (Kapellbrücke) este cel mai vechi pod de lemn acoperit din Europa, datând din 1333.",
            "Monumentul Leului a fost descris de Mark Twain ca fiind 'cea mai tristă piatră din lume'.",
            "Lucerna este renumită pentru sistemul său complex de fortificații medievale, Museggmauer.",
            "Orașul servește drept nod principal pentru excursiile montane către Rigi și Pilatus."
        ]
    },
    "nature-jungfraujoch": {
        "factsAdvanced": [
            "Gara Jungfraujoch este situată la cea mai mare altitudine din Europa, 3.454 metri.",
            "Observatorul Sphinx oferă o vedere de 360 de grade asupra Alpilor elvețieni, francezi și germani.",
            "Palatul de Gheață este sculptat direct în ghețar și prezintă numeroase sculpturi artistice.",
            "Construcția liniei ferate prin munte a durat 16 ani și a fost finalizată în 1912."
        ]
    },
    "city-winterthur": {
        "factsAdvanced": [
            "Winterthur a fost un important centru industrial, cunoscut în trecut sub numele de 'orașul mașinilor'.",
            "Muzeul Technorama este unul dintre cele mai interactive și mari centre de știință din Europa.",
            "Colecția Oskar Reinhart 'Am Römerholz' găzduiește capodopere ale artei europene.",
            "Orașul are cea mai mare zonă pietonală continuă din întreaga Elveție."
        ]
    },
    "city-chur": {
        "factsAdvanced": [
            "Chur este cel mai vechi oraș din Elveția, având o istorie de așezări de peste 5.000 de ani.",
            "Orașul este punctul de plecare pentru faimoasele trenuri Bernina Express și Glacier Express.",
            "Catedrala Sfânta Maria are o vechime de peste 800 de ani și o arhitectură impresionantă.",
            "Brambrüesch este muntele local accesibil direct din centrul orașului printr-o telecabină."
        ]
    },
    "city-lugano": {
        "factsAdvanced": [
            "Lugano este al treilea cel mai mare centru financiar din Elveția, după Zürich și Geneva.",
            "Parcul Ciani este considerat unul dintre cele mai frumoase parcuri publice din țară.",
            "Lacul Lugano are o formă neregulată și este traversat de granița dintre Elveția și Italia.",
            "Muntele San Salvatore oferă o vedere panoramică spectaculoasă, asemănătoare cu cea din Rio de Janeiro."
        ]
    },
    "city-st-gallen": {
        "factsAdvanced": [
            "Biblioteca Abației conține peste 170.000 de volume, unele având o vechime de peste un mileniu.",
            "Orașul s-a dezvoltat în jurul chiliei călugărului irlandez Gallus, stabilit aici în 612.",
            "St. Gallen este renumit istoric pentru producția sa de textile și broderii de lux.",
            "Universitatea din St. Gallen este una dintre cele mai bune instituții de business din Europa."
        ]
    },
    "city-biel-bienne": {
        "factsAdvanced": [
            "Biel este centrul mondial al orologeriei, găzduind sediile mărcilor Rolex, Omega și Swatch.",
            "Este cel mai mare oraș din Elveția unde germana și franceza sunt vorbite oficial în mod egal.",
            "Centrul vechi din Biel a fost distins cu Premiul Wakker pentru conservarea patrimoniului.",
            "Orașul este situat la poalele Munților Jura, oferind numeroase trasee de drumeție."
        ]
    },
    "city-thun": {
        "factsAdvanced": [
            "Castelul Thun, construit în secolul al XII-lea, găzduiește astăzi un muzeu istoric valoros.",
            "Orașul este cunoscut pentru trotuarele sale etajate unice din centrul vechi.",
            "Lacul Thun oferă condiții excelente pentru navigare și sporturi acvatice în timpul verii.",
            "Thun este poarta de intrare în regiunea Berner Oberland, faimoasă pentru vârfurile alpine."
        ]
    },
    "city-schaffhausen": {
        "factsAdvanced": [
            "Cascada Rinului de lângă oraș este cea mai mare cascadă din Europa ca volum de apă.",
            "Fortăreața Munot a fost construită în secolul al XVI-lea pentru a proteja orașul.",
            "Schaffhausen este cunoscut pentru fațadele clădirilor decorate cu picturi murale superbe.",
            "Orașul are peste 170 de bovindouri, ferestre ieșite în afară, care împodobesc centrul vechi."
        ]
    },
    "city-fribourg": {
        "factsAdvanced": [
            "Fribourg are unul dintre cele mai bine conservate ansambluri medievale din întreaga Europă.",
            "Catedrala Sfântul Nicolae are vitralii Art Nouveau create de artistul polonez Józef Mehoffer.",
            "Orașul este situat pe un promontoriu stâncos, înconjurat de trei părți de râul Sarine.",
            "Funicularul din Fribourg funcționează folosind greutatea apelor reziduale ale orașului."
        ]
    },
    "city-sion": {
        "factsAdvanced": [
            "Sion este dominat de două dealuri pe care se află castelele Valère și Tourbillon.",
            "Biserica fortificată Valère adăpostește una dintre cele mai vechi orgi funcționale din lume.",
            "Regiunea Sion este una dintre cele mai importante zone viticole din Elveția.",
            "Sion este capitala cantonului Valais și beneficiază de un microclimat extrem de însorit."
        ]
    },
    "city-montreux": {
        "descriptionAdvanced": "Montreux este o destinație elegantă situată pe malul Lacului Leman, renumită pentru microclimatul său blând și vegetația mediteraneană neașteptată. Orașul a devenit un simbol al culturii și muzicii datorită prestigiosului Festival de Jazz care atrage artiști de talie mondială în fiecare an. Promenada înflorită, care se întinde pe câțiva kilometri de-a lungul lacului, oferă priveliști panoramice uluitoare asupra Alpilor francezi. Montreux a fost, de asemenea, un refugiu pentru personalități celebre precum Freddie Mercury, a cărui statuie domină astăzi piața centrală. Farmecul orașului este completat de arhitectura Belle Époque a hotelurilor de lux care amintesc de gloria turismului de la începutul secolului.",
        "factsAdvanced": [
            "Statuia lui Freddie Mercury comemorează legătura strânsă a artistului cu acest oraș.",
            "Festivalul de Jazz din Montreux, fondat în 1967, este al doilea cel mai mare din lume.",
            "Cazinoul din Montreux a inspirat celebra piesă 'Smoke on the Water' a trupei Deep Purple.",
            "Orașul beneficiază de o climă atât de blândă încât aici cresc palmieri și smochini."
        ]
    },
    "hist-castelgrande-bellinzona": {
        "descriptionAdvanced": "Castelgrande este cea mai impunătoare și mai veche dintre cele trei fortificații medievale care apără orașul Bellinzona, fiind inclusă în patrimoniul mondial UNESCO. Situată pe un pinten stâncos strategic, cetatea a controlat timp de secole rutele comerciale care legau nordul Europei de Peninsula Italică. Arhitectura sa actuală este rezultatul mai multor faze de construcție, oferind vizitatorilor o incursiune fascinantă în istoria militară a regiunii Ticino. Zidurile lungi și crenelate permit plimbări spectaculoase cu vedere spre valea râului Ticino și spre centrul istoric al orașului. În prezent, castelul găzduiește muzee și expoziții care detaliază evoluția sistemului defensiv de la Bellinzona.",
        "factsAdvanced": [
            "Castelgrande a fost înscris în lista UNESCO în anul 2000 pentru arhitectura sa militară excepțională.",
            "Cele două turnuri principale ale cetății sunt cunoscute sub numele de Turnul Alb și Turnul Negru.",
            "Săpăturile arheologice au scos la iveală dovezi de locuire a sitului încă din neolitic.",
            "Accesul la castel se poate face printr-un lift modern săpat direct în stânca muntelui."
        ]
    },
    "hist-montebello-castle": {
        "descriptionAdvanced": "Castelul Montebello, situat la o înălțime mai mare față de Castelgrande, oferă o perspectivă unică asupra sistemului defensiv din Bellinzona. Construit inițial în secolul al XIII-lea, castelul se remarcă prin aspectul său pitoresc, fiind înconjurat de ziduri groase și șanțuri de apărare adânci. Este considerat de mulți vizitatori ca fiind cel mai frumos dintre cele trei castele datorită designului său complex și a grădinilor interioare bine întreținute. În interiorul cetății se află un muzeu arheologic ce prezintă obiecte rare descoperite în regiune, oferind context istoric vieții medievale. Legătura sa prin ziduri cu orașul vechi subliniază importanța sa crucială în protejarea trecătorilor alpine.",
        "factsAdvanced": [
            "Numele castelului se traduce literal prin 'muntele frumos', reflectând poziția sa pitorească.",
            "Spre deosebire de alte fortificații, Montebello a fost construit în principal de familia Rusca.",
            "Interiorul castelului găzduiește Muzeul Civic, specializat în arheologie și istorie locală.",
            "Priveliștea de pe zidurile sale oferă cea mai bună panoramă asupra fortăreței vecine, Castelgrande."
        ]
    },
    "hist-sasso-corbaro": {
        "descriptionAdvanced": "Sasso Corbaro este cel mai înalt situat dintre cele trei castele din Bellinzona, oferind o priveliște panoramică inegalabilă asupra întregii regiuni. Construit într-un timp record de doar șase luni în anul 1479, castelul avea rolul de a închide ultima breșă în sistemul defensiv al văii. Arhitectura sa este mai compactă și mai austeră, reflectând funcția sa pur militară de post de observație strategic. Vizitatorii care urcă până aici sunt răsplătiți cu vederi care se întind până la Lacul Maggiore în zilele senine. Castelul servește astăzi ca spațiu pentru expoziții temporare, păstrând în același timp atmosfera solemnă a unei fortărețe de munte.",
        "factsAdvanced": [
            "Sasso Corbaro a fost construit pentru a preveni ocolirea fortificațiilor din vale de către inamici.",
            "Este singurul dintre cele trei castele care nu a fost conectat direct la zidurile orașului.",
            "În secolul al XIX-lea, castelul a fost abandonat și a suferit daune majore din cauza loviturilor de trăsnet.",
            "Terasa castelului găzduiește în prezent un restaurant renumit pentru bucătăria sa tradițională."
        ]
    },
    "hist-abbey-of-saint-gall": {
        "descriptionAdvanced": "Abația din St. Gallen reprezintă unul dintre cele mai strălucite exemple de arhitectură barocă din Europa, fiind înscrisă în patrimoniul mondial UNESCO. Centrul său spiritual și intelectual este faimoasa Bibliotecă a Abației, care păstrează o colecție inestimabilă de manuscrise medievale, unele datând din secolul al VIII-lea. Catedrala abației, cu turnurile sale gemene impunătoare, impresionează prin decorul interior exuberant și prin acustica sa remarcabilă. Întregul complex reflectă influența majoră pe care ordinul benedictin a avut-o asupra culturii și educației europene timp de peste un mileniu. Astăzi, Abația este un loc de pelerinaj cultural, atrăgând cercetători și turiști fascinați de istoria cunoașterii umane.",
        "factsAdvanced": [
            "Biblioteca Abației deține unul dintre cei mai vechi planuri arhitecturale pe pergament din lume.",
            "Interiorul bibliotecii este considerat cea mai frumoasă sală barocă neecleziastică din Elveția.",
            "Mănăstirea a fost timp de secole un centru de copiere a manuscriselor de o importanță crucială.",
            "Complexul actual a fost construit în mare parte în secolul al XVIII-lea, pe locul unei mănăstiri mai vechi."
        ]
    },
    "hist-morgarten-battlefield": {
        "descriptionAdvanced": "Câmpul de luptă de la Morgarten este un loc cu o încărcătură simbolică uriașă pentru identitatea națională elvețiană, marcând victoria răsunătoare a confederaților împotriva armatei habsburgice în 1315. Această bătălie a demonstrat forța unității țăranilor liberi din cantoanele fondatoare și a consolidat drumul către independența Elveției. Peisajul actual, situat pe malul pitoresc al lacului Ägeri, păstrează o atmosfera de liniște ce contrastează puternic cu evenimentele dramatice de acum șapte secole. Vizitatorii pot explora monumentele comemorative și centrul de informare care explică tacticile ingenioase folosite de confederați în terenul dificil de munte. Este un loc esențial pentru înțelegerea spiritului de rezistență și a originilor democratice ale poporului elvețian.",
        "factsAdvanced": [
            "Bătălia de la Morgarten este considerată prima victorie majoră a Confederației Elvețiene.",
            "În fiecare an, la 15 noiembrie, are loc o ceremonie de comemorare a bătăliei la fața locului.",
            "Legenda spune că elvețienii au folosit pietre și bușteni prăvăliți de pe munte pentru a surprinde inamicul.",
            "Monumentul de la Morgarten a fost inaugurat în 1908, fiind situat într-un punct panoramic superb."
        ]
    },
    "hist-sempach-battlefield": {
        "descriptionAdvanced": "Câmpul de luptă de la Sempach comemorează bătălia decisivă din 1386, un moment de cotitură care a asigurat supraviețuirea tinerei Confederații Elvețiene în fața expansiunii austriece. Locul este strâns legat de legenda lui Arnold von Winkelried, eroul care s-ar fi sacrificat pentru a crea o breșă în rândurile inamicului, devenind un simbol al devotamentului suprem. O capelă istorică, ridicată la scurt timp după bătălie, marchează locul unde s-au dat luptele cele mai crâncene și servește ca spațiu de reculegere. Peisajul agricol liniștit din jurul orașului Sempach invită astăzi la plimbări reflexive prin istorie, oferind panouri informative detaliate despre desfășurarea ostilităților. Victoria de aici a confirmat statutul confederaților ca forță militară redutabilă în inima Europei.",
        "factsAdvanced": [
            "Ducele Leopold al III-lea de Austria și-a pierdut viața în această bătălie istorică.",
            "Capela de la Sempach conține fresce vechi care ilustrează scene din timpul luptei.",
            "Sacrificiul lui Arnold von Winkelried este celebrat în numeroase cântece și scrieri patriotice.",
            "Comemorarea anuală a bătăliei de la Sempach este una dintre cele mai vechi tradiții de acest fel."
        ]
    },
    "hist-augusta-raurica": {
        "descriptionAdvanced": "Augusta Raurica este cea mai veche colonie romană cunoscută de pe râul Rin, oferind astăzi una dintre cele mai bine conservate experiențe arheologice din Elveția. Orașul antic, fondat în jurul anului 44 î.Hr., a fost un nod comercial și administrativ vibrant, cu teatre, foruri și vile impunătoare. Vizitatorii pot păși prin teatrul roman restaurat, care avea o capacitate impresionantă, și pot explora replici fidele ale locuințelor romane pentru a înțelege viața cotidiană din antichitate. Muzeul sitului adăpostește cea mai mare colecție de argintărie romană târzie din Europa, un tezaur descoperit întâmplător în anii '60. Este o destinație fascinantă pentru familii și pasionați de istorie, unde trecutul imperial prinde viață prin ateliere interactive.",
        "factsAdvanced": [
            "Teatrul roman din Augusta Raurica putea găzdui până la 10.000 de spectatori în perioada sa de glorie.",
            "Tezaurul de argint descoperit aici cântărește peste 58 de kilograme și include piese de o finețe rară.",
            "Situl găzduiește anual cel mai mare festival roman din Elveția, cu sute de participanți în costume de epocă.",
            "Arheologii au reconstituit o 'casă romană' complet mobilată pentru a exemplifica traiul de acum 2.000 de ani."
        ]
    },
    "hist-gruyeres-castle": {
        "descriptionAdvanced": "Castelul Gruyères, situat pe un deal impunător în inima cantonului Fribourg, este unul dintre cele mai vizitate și pitorești edificii istorice din Elveția. Cetatea medievală oferă o călătorie fascinantă prin opt secole de arhitectură, artă și cultură regională, fiind reședința oficială a conților de Gruyères. Interiorul castelului impresionează prin sălile decorate cu fresce spectaculoase, mobilier de epocă și ferestre care oferă panorame uluitoare asupra Alpilor Friburghezi. Grădinile în stil francez, amenajate la poalele zidurilor, adaugă o notă de eleganță clasică întregului ansamblu fortificat. Orașul medieval care înconjoară castelul completează atmosfera de poveste, fiind renumit în întreaga lume pentru brânza sa delicioasă.",
        "factsAdvanced": [
            "Castelul găzduiește o colecție ciudată și fascinantă de artă fantastică a artistului H.R. Giger.",
            "Legenda spune că numele regiunii provine de la 'gruyer' (cocor), pasărea care apare pe blazonul conților.",
            "In interiorul castelului se află 'Mâna Tăiată', o relicvă medievală misterioasă înconjurată de legende locale.",
            "Planul castelului urmează tiparul 'pătratului savoyard', o formă defensivă tipică pentru secolul al XIII-lea."
        ]
    },
    "mountain-eiger": {
        "descriptionAdvanced": "Eiger este un vârf legendar din Alpii Bernezi, celebru în întreaga lume pentru fața sa nordică verticală, considerată una dintre cele mai dificile provocări pentru alpiniști. Muntele domină peisajul deasupra localităților Grindelwald și Wengen, formând împreună cu vârfurile Mönch și Jungfrau un trio montan iconic. Istoria escaladărilor pe Eiger este marcată de triumfuri răsunătoare, dar și de tragedii care au contribuit la renumele său de 'Mordwand' (peretele morții). Pentru turiști, muntele oferă spectacolul naturii brute, fiind vizibil în toată splendoarea sa de pe numeroasele trasee de drumeție din regiune. Tunelul feroviar Jungfrau trece chiar prin inima muntelui, oferind opriri cu ferestre spre pereții abrupți de stâncă.",
        "factsAdvanced": [
            "Fața nordică a Eigerului are o înălțime de 1.800 de metri, fiind cea mai mare din Alpi.",
            "Prima ascensiune a muntelui a fost realizată în 1858 de către un irlandez și doi ghizi locali.",
            "Calea ferată Jungfrau are o stație în interiorul muntelui, numită chiar 'Eigerwand'.",
            "Traseul 'Eiger Trail' permite drumeților să meargă chiar la baza peretelui nordic fără echipament de alpinism."
        ]
    },
    "mountain-jungfrau": {
        "descriptionAdvanced": "Vârful Jungfrau, cu o altitudine de 4.158 metri, este nestemata Alpilor Bernezi și o destinație de vis pentru iubitorii de peisaje glaciare. Muntele este piesa centrală a regiunii Jungfrau-Aletsch, inclusă în patrimoniul mondial UNESCO pentru frumusețea sa naturală excepțională și cel mai mare ghețar din Europa. Numele său, care se traduce prin 'Fecioara', se datorează aspectului pur al zăpezii veșnice care acoperă vârful în cea mai mare parte a anului. Accesibilitatea sa unică, datorată liniei ferate ce ajunge aproape de vârf, a transformat muntele într-un simbol al turismului elvețian de înaltă clasă. Panorama de pe Jungfrau se întinde peste creste înzăpezite și văi adânci, oferind o perspectivă copleșitoare asupra forței naturii alpine.",
        "factsAdvanced": [
            "Jungfrau a fost cucerit pentru prima dată în 1811 de frații Meyer din Aarau.",
            "Muntele face parte din primul sit natural din Alpi inclus în patrimoniul UNESCO.",
            "Regiunea Jungfrau deține una dintre cele mai mari concentrații de vârfuri de peste 4.000 de metri.",
            "Linia ferată care deservește zona este considerată o minune a ingineriei mondiale de început de secol XX."
        ]
    },
    "mountain-titlis": {
        "descriptionAdvanced": "Titlis este cel mai înalt vârf accesibil din Elveția Centrală, oferind o experiență montană completă ce include ghețari, zăpadă eternă și atracții tehnice moderne. Muntele este renumit pentru 'Titlis Rotair', prima telecabină rotativă din lume, care oferă pasagerilor o vedere panoramică completă în timpul urcării spre vârf. Odată ajunși la peste 3.000 de metri, vizitatorii pot explora o grotă de gheață spectaculoasă sau pot păși pe cel mai înalt pod suspendat din Europa pentru o doză de adrenalină. Titlis este o destinație vibrantă în toate anotimpurile, fiind un paradis pentru schiori iarna și un loc răcoros de refugiu vara. Priveliștea de pe terasele panoramice cuprinde întregul lanț al Alpilor elvețieni, de la lacul Lucerna până la vârfurile înzăpezite din depărtare.",
        "factsAdvanced": [
            "Titlis Cliff Walk este situat la 3.041 metri altitudine și oferă o vedere amețitoare spre prăpastie.",
            "Grota de gheață de pe Titlis este iluminată artistic și se află la 20 de metri sub suprafața ghețarului.",
            "Telecabina Rotair face o rotație completă de 360 de grade în timpul călătoriei de 5 minute.",
            "Stațiunea Engelberg, situată la baza muntelui, este celebră pentru mănăstirea sa benedictină istorică."
        ]
    },
    "lake-lugano": {
        "descriptionAdvanced": "Lacul Lugano este o bijuterie de smarald situată la granița dintre Elveția și Italia, reflectând perfect farmecul mediteranean al regiunii Ticino. Malurile sale sunt punctate de sate pitorești cu case colorate, biserici vechi și grădini luxuriante unde palmierii cresc alături de brazi. Forma sa ramificată și neregulată oferă numeroase golfuri ascunse și promontorii care invită la explorare cu barca sau pe traseele de drumeție. Muntele San Giorgio, care străjuiește lacul, este un sit UNESCO celebru pentru fosilele marine marine unice descoperite aici. Atmosfera relaxată, clima blândă și gastronomia locală fac din Lacul Lugano o destinație de vacanță rafinată, preferată de cei care caută eleganța și liniștea peisajului subalpin.",
        "factsAdvanced": [
            "Aproximativ 37% din suprafața lacului se află pe teritoriul Italiei.",
            "Satul Morcote de pe malul lacului a fost votat de mai multe ori ca fiind cel mai frumos sat din Elveția.",
            "Lacul Lugano este unul dintre puținele locuri din Elveția unde se poate cultiva orez.",
            "Muzeul Vămilor din Gandria oferă o perspectivă interesantă asupra istoriei contrabandei din regiune."
        ]
    },
    "lake-constance": {
        "descriptionAdvanced": "Lacul Constance, cunoscut sub numele de Bodensee, este un imens corp de apă care unește Elveția, Germania și Austria, fiind al treilea cel mai mare lac din Europa Centrală. Partea elvețiană a lacului se remarcă prin orașe portuare elegante, livezi întinse și o infrastructură excelentă pentru ciclism și sporturi nautice. Regiunea din jurul lacului beneficiază de un climat temperat care favorizează viticultura și agricultura, oferind peisaje verzi și relaxante pe tot parcursul anului. Navigația pe Bodensee are o tradiție îndelungată, vasele de croazieră legând eficient malurile celor trei țări vecine. De la plajele naturale până la muzeele tehnice și castelele de pe mal, Lacul Constance oferă o diversitate culturală și naturală greu de egalat.",
        "factsAdvanced": [
            "Lacul Constance servește drept cel mai important rezervor de apă potabilă pentru sudul Germaniei.",
            "Traseul de biciclete din jurul lacului are o lungime totală de 273 de kilometri.",
            "Rinul intră în lac prin delta sa din Austria și iese la Stein am Rhein, în Elveția.",
            "Există un serviciu regulat de feribot care permite transportul mașinilor între orașele principale de pe mal."
        ]
    },
    "river-rhine": {
        "descriptionAdvanced": "Rinul este una dintre cele mai importante artere fluviale ale Europei, avându-și originile în inima Alpilor elvețieni, în cantonul Graubünden. Pe parcursul său prin Elveția, râul sculptează peisaje dramatice, precum 'Marele Canion al Elveției' (Ruinaulta), înainte de a se vărsa în Lacul Constance. Un punct culminant al călătoriei sale este Cascada Rinului de la Schaffhausen, unde forța apelor oferă un spectacol impresionant vizitatorilor. În orașul Basel, Rinul devine o cale navigabilă majoră, legând Elveția direct de porturile maritime ale lumii. Dincolo de importanța economică, Rinul este un element central al vieții sociale în orașele prin care trece, malurile sale fiind locuri preferate pentru relaxare, înot și evenimente culturale.",
        "factsAdvanced": [
            "Izvorul oficial al Rinului este considerat Lacul Toma, situat la 2.345 metri altitudine.",
            "Rinul formează granița naturală a Elveției cu Liechtenstein, Austria și Germania.",
            "În Basel, înotul în Rin este o tradiție locală populară, folosind saci impermeabili speciali numiți 'Wickelfisch'.",
            "Cascada Rinului are o lățime de 150 de metri și un volum mediu de 600 de metri cubi de apă pe secundă vara."
        ]
    },
    "forest-sihlwald": {
        "descriptionAdvanced": "Sihlwald este cel mai mare pădure sălbatică de foioase de pe Platoul Elvețian, fiind situat la doar câțiva kilometri de centrul vibrant al orașului Zürich. Acest teritoriu a fost declarat primul 'parc natural de experiență' din Elveția, fiind un model de conservare unde natura este lăsată să se dezvolte fără intervenție umană. Vizitatorii pot descoperi arbori seculari, trunchiuri de lemn mort care adăpostesc o biodiversitate uluitoare și poteci care te fac să uiți de apropierea metropolei. Pădurea servește ca un imens 'plămân verde' și este un loc preferat pentru drumeții, ciclism și educație ecologică pentru familii. Centrul de vizitatori oferă expoziții interactive despre ecosistemul forestier, încurajând o conexiune profundă cu mediul înconjurător.",
        "factsAdvanced": [
            "Pădurea Sihlwald a furnizat lemnul de foc pentru orașul Zürich timp de peste 1.000 de ani.",
            "Din anul 2000, nicio activitate forestieră nu a mai avut loc, lăsând pădurea să devină 'primordială'.",
            "Sihlwald găzduiește numeroase specii rare de ciuperci și insecte care depind de lemnul aflat în descompunere.",
            "Există un turn de observație din lemn care oferă o vedere panoramică deasupra coroanei arborilor."
        ]
    },
    "island-st-peters-island": {
        "descriptionAdvanced": "Insula Sfântul Petru, situată în idilicul lac Biel, este un loc de o frumusețe senină, renumit pentru legăturile sale istorice cu filosoful Jean-Jacques Rousseau. Deși tehnic este o peninsulă datorită scăderii nivelului apei, locația și-a păstrat atmosfera izolată și liniștită, fiind înconjurată de podgorii, stufărișuri și păduri de stejar. Fosta mănăstire de pe insulă a fost transformată într-un hotel elegant, oferind oaspeților o experiență unică de cazare într-un cadru istoric. Insula este un refugiu important pentru păsări și plante rare, fiind protejată prin lege ca monument natural de importanță națională. Accesul se face fie prin plimbări lungi pe istmul de pământ, fie cu vaporul, subliniind caracterul său de destinație pentru relaxare lentă.",
        "factsAdvanced": [
            "Jean-Jacques Rousseau a descris timpul petrecut aici ca fiind cel mai fericit din viața sa.",
            "Insula este complet interzisă traficului auto, fiind accesibilă doar pe jos sau cu bicicleta.",
            "Vinul produs din podgoriile insulei este foarte apreciat și se vinde în ediții limitate.",
            "Nivelul apei din lacul Biel a fost coborât artificial în secolul al XIX-lea, creând legătura terestră actuală."
        ]
    },
    "landmark-kunsthaus-zurich": {
        "descriptionAdvanced": "Kunsthaus Zürich este una dintre cele mai importante instituții de artă din Elveția și un reper major pe harta culturală a Europei. Muzeul adăpostește o colecție impresionantă ce acoperă perioade de la sfârșitul Evului Mediu până la arta contemporană, cu un accent deosebit pe modernismul elvețian. Recent extins cu un corp nou spectaculos proiectat de David Chipperfield, Kunsthaus a devenit cel mai mare muzeu de artă din țară. Vizitatorii pot admira lucrări fundamentale de Alberto Giacometti, precum și una dintre cele mai mari colecții de picturi de Edvard Munch din afara Norvegiei. Instituția nu este doar un depozit de artă, ci un spațiu viu care organizează expoziții temporare de talie mondială, dialogând constant cu tendințele artistice actuale.",
        "factsAdvanced": [
            "Extinderea recentă a muzeului a fost realizată cu un buget de aproximativ 206 milioane de franci elvețieni.",
            "Muzeul deține cea mai importantă colecție de lucrări ale sculptorului elvețian Alberto Giacometti.",
            "Poarta Infernului a lui Auguste Rodin, o sculptură monumentală din bronz, străjuiește intrarea în muzeu.",
            "Kunsthaus găzduiește, de asemenea, o bibliotecă de artă impresionantă, deschisă cercetătorilor și publicului."
        ]
    },
    "landmark-swiss-national-museum": {
        "descriptionAdvanced": "Muzeul Național Elvețian, găzduit într-o clădire care seamănă cu un castel de basm chiar în inima orașului Zürich, este gardianul memoriei colective a țării. Expozițiile sale oferă o panoramă detaliată a istoriei Elveției, de la originile preistorice până la complexitatea societății moderne. Arhitectura muzeului este ea însăși o lecție de istorie, îmbinând stilul istoricist de la sfârșitul secolului al XIX-lea cu o aripă nouă, minimalistă, inaugurată recent. Vizitatorii pot explora săli dedicate meșteșugurilor tradiționale, evoluției politice și modului de viață al elvețienilor de-a lungul secolelor. Este un loc ideal pentru a înțelege cum o țară atât de diversă lingvistic și cultural a reușit să creeze o identitate comună puternică.",
        "factsAdvanced": [
            "Clădirea originală a muzeului a fost construită între 1892 și 1898 de arhitectul Gustav Gull.",
            "Muzeul adăpostește peste 840.000 de obiecte, reprezentând cel mai bogat patrimoniu istoric al țării.",
            "Curtea interioară a muzeului găzduiește adesea festivaluri de lumină și evenimente culturale majore.",
            "Aripa nouă a muzeului este construită din beton, oferind un contrast vizual puternic cu piatra clădirii vechi."
        ]
    },
    "landmark-federal-palace": {
        "descriptionAdvanced": "Palatul Federal din Berna este inima democrației elvețiene și sediul Parlamentului și al Consiliului Federal. Finalizat în 1902, edificiul impresionează prin domul său înalt îmbrăcat în cupru și prin bogăția decorativă care simbolizează unitatea celor 26 de cantoane. Interiorul palatului este o capodoperă a simbolismului național, cu vitralii, picturi murale și sculpturi ce celebrează istoria și valorile elvețiene. Piața din fața palatului, Bundesplatz, este un loc de întâlnire popular, fiind renumită pentru jocurile de apă cu 26 de jeturi ce reprezintă cantoanele țării. Palatul nu este doar o instituție administrativă, ci un monument deschis publicului, reflectând transparența și accesibilitatea sistemului politic elvețian.",
        "factsAdvanced": [
            "Construcția palatului a implicat 38 de artiști elvețieni din toate regiunile lingvistice ale țării.",
            "Domul central al clădirii este decorat cu stemele celor 22 de cantoane care existau la momentul finalizării.",
            "Palatul Federal este iluminat spectaculos în fiecare seară, fiind un punct de atracție major în centrul Bernei.",
            "Vizitele ghidate în interior sunt gratuite, dar necesită rezervare prealabilă datorită popularității mari."
        ]
    },
    "landmark-olympic-museum": {
        "descriptionAdvanced": "Muzeul Olimpic din Lausanne este singura instituție din lume dedicată exclusiv istoriei și spiritului Jocurilor Olimpice, fiind situat într-un parc superb cu vedere la Lacul Leman. Expozițiile interactive poartă vizitatorii într-o călătorie de la originile antice ale competițiilor în Grecia până la marile spectacole sportive ale epocii moderne. Muzeul pune accent nu doar pe recorduri, ci și pe valorile de fair-play, perseverență și unitate mondială pe care le promovează mișcarea olimpică. Tehnologia de ultimă oră și ecranele panoramice fac ca marile momente ale sportului să pară mai vii ca niciodată. Parcul cu sculpturi ce înconjoară clădirea completează experiența, oferind un spațiu de relaxare unde sportul și arta se întâlnesc armonios.",
        "factsAdvanced": [
            "Muzeul a fost inaugurat în 1993 de către președintele de atunci al CIO, Juan Antonio Samaranch.",
            "Flacăra olimpică arde permanent pe o platformă situată în fața intrării principale.",
            "Colecția muzeului include peste 1.500 de obiecte, de la torțe istorice la echipamente de concurs.",
            "Muzeul găzduiește cel mai mare centru de informare despre Jocurile Olimpice din întreaga lume."
        ]
    },
    "landmark-rolex-learning-center": {
        "descriptionAdvanced": "Rolex Learning Center este o capodoperă a arhitecturii contemporane, servind drept bibliotecă și centru cultural pentru universitatea EPFL din Lausanne. Proiectat de studioul japonez SANAA, clădirea se remarcă prin formele sale ondulate și prin absența aproape totală a barierelor vizuale în interior. Podeaua și tavanul urmează o serie de curbe ce creează un peisaj interior de dealuri și văi, unde studenții pot învăța, lucra și interacționa în mod liber. Designul revoluționar a fost conceput pentru a încuraja interdisciplinaritatea și fluxul liber de idei între cercetători și public. Este considerat unul dintre cele mai inovatoare spații educaționale din lume, fiind un punct de referință pentru arhitectura secolului XXI.",
        "factsAdvanced": [
            "Clădirea nu are nicio treaptă la interior, accesul între niveluri făcându-se prin pante line.",
            "Acoperișul și podeaua au fost turnate din beton folosind tehnici de construcție extrem de complexe.",
            "Rolex Learning Center găzduiește o bibliotecă cu peste 500.000 de volume tipărite.",
            "Luminozitatea interiorului este asigurată de numeroase curți circulare vitrate ce străpung structura."
        ]
    },
    "landmark-fifa-museum": {
        "descriptionAdvanced": "Muzeul FIFA din Zürich este destinația supremă pentru fanii fotbalului, oferind o incursiune spectaculoasă în istoria celui mai popular sport de pe planetă. Pe trei etaje, muzeul explorează modul în care fotbalul a influențat culturile lumii, prezentând obiecte rare, echipamente istorice și trofee emblematice. Punctul culminant al vizitei este, fără îndoială, vitrina ce adăpostește originalul Trofeului Cupei Mondiale FIFA, un vis pentru orice pasionat de sport. Numeroasele stații interactive permit vizitatorilor să-și testeze propriile abilități fotbalistice sau să se pună în pielea unui arbitru ori comentator. Muzeul reușește să capteze emoția pură a jocului, celebrând totodată diversitatea și pasiunea fanilor din toate colțurile globului.",
        "factsAdvanced": [
            "Muzeul a fost deschis publicului în anul 2016, după o investiție masivă în renovarea clădirii.",
            "Peste 1.000 de obiecte de colecție sunt expuse, incluzând tricouri purtate de legende ale fotbalului.",
            "O zonă specială a muzeului este dedicată istoriei fotbalului feminin și evoluției acestuia.",
            "Zona 'Pinball' este un spațiu interactiv uriaș unde vizitatorii pot lovi mingea pentru a câștiga puncte."
        ]
    },
    "landmark-fondation-beyeler": {
        "descriptionAdvanced": "Fondation Beyeler, situată într-un parc idilic din Riehen, lângă Basel, este unul dintre cele mai frumoase și apreciate muzee de artă din lume. Clădirea proiectată de arhitectul Renzo Piano este un triumf al luminii naturale, integrându-se perfect în peisajul rural înconjurător. Muzeul adăpostește colecția privată a lui Hildy și Ernst Beyeler, cuprinzând capodopere ale modernismului clasic semnate de maeștri precum Picasso, Monet, Matisse și Bacon. Expozițiile temporare organizate aici sunt renumite pentru calitatea lor excepțională, atrăgând anual sute de mii de vizitatori internaționali. Atmosfera de calm și armonia dintre artă, arhitectură și natură fac din fiecare vizită la Fondation Beyeler o experiență spirituală profundă.",
        "factsAdvanced": [
            "Muzeul este cel mai vizitat muzeu de artă din Elveția, datorită prestigiului colecției sale.",
            "Renzo Piano a proiectat clădirea cu un tavan de sticlă ce poate regla cantitatea de lumină naturală.",
            "Ernst Beyeler a fost unul dintre fondatorii prestigiosului târg internațional Art Basel.",
            "Colecția permanentă include unele dintre cele mai importante picturi din seria 'Nuferilor' lui Claude Monet."
        ]
    },
    "landmark-cern-science-gateway": {
        "descriptionAdvanced": "CERN Science Gateway este cel mai nou și mai modern centru de vizitare al organizației CERN, oferind publicului larg acces la tainele fizicii particulelor. Arhitectura futuristă a clădirii, inspirată de formele acceleratorului de particule LHC, include două tuburi suspendate care par să plutească deasupra drumului principal. Centrul dispune de expoziții interactive fascinante, laboratoare de experimente pentru copii și un auditorium vast pentru prelegeri științifice. Scopul său este de a inspira viitoarele generații de cercetători și de a explica într-un mod accesibil cum sunt explorate originile universului. Este un spațiu al curiozității și al descoperirii, unde știința de frontieră devine o experiență tangibilă pentru vizitatori de toate vârstele.",
        "factsAdvanced": [
            "CERN Science Gateway a fost proiectat de celebrul arhitect italian Renzo Piano.",
            "Întreaga clădire este alimentată prin energie solară, având panouri instalate pe acoperiș.",
            "Vizitatorii pot vedea replici la scară reală ale detaliilor tehnice din acceleratorul de particule.",
            "Centrul este situat chiar la granița dintre Elveția și Franța, în apropiere de Geneva."
        ]
    },
    "port-basel": {
        "descriptionAdvanced": "Portul din Basel este inima logistică a Elveției, reprezentând singura poartă navigabilă a țării către mările și oceanele lumii prin intermediul râului Rin. Această infrastructură complexă permite transportul unor cantități imense de mărfuri, de la cereale și combustibili până la containere cu produse de înaltă tehnologie. Portul nu este doar un nod industrial, ci și un simbol al spiritului comercial deschis al orașului Basel, care a prosperat datorită legăturilor sale fluviale. Vizitatorii pot observa aici forfota vapoarelor de mare tonaj și a macaralelor gigantice care deservesc economia întregii țări. Muzeul situat în incinta portului oferă o perspectivă istorică asupra navigației pe Rin, explicând cum un oraș situat la sute de kilometri de mare a devenit un punct cheie în transportul maritim global.",
        "factsAdvanced": [
            "Aproximativ 10% din totalul importurilor elvețiene trec prin porturile de pe Rin din Basel.",
            "Portul Basel este punctul terminal pentru navigația pe Rin a vapoarelor comerciale mari.",
            "Există un monument numit 'Dreiländereck' care marchează locul unde se întâlnesc granițele Elveției, Germaniei și Franței.",
            "Navele pot pleca din Basel și pot ajunge la porturile din Rotterdam sau Anvers în câteva zile."
        ]
    },
    "port-birsfelden": {
        "descriptionAdvanced": "Portul Birsfelden, situat în imediata apropiere a orașului Basel, joacă un rol vital în aprovizionarea cu energie a Elveției, fiind specializat în descărcarea și stocarea produselor petroliere. Acest terminal modern este dotat cu rezervoare uriașe și facilități de transbordare directă către rețeaua feroviară și rutieră națională. Pe lângă combustibili, portul gestionează și volume semnificative de materiale de construcție și alte mărfuri de vrac, fiind un pilon esențial al infrastructurii de transport. Poziția sa strategică pe malul Rinului și eficiența operațiunilor fac din Birsfelden un nod logistic discret, dar indispensabil pentru stabilitatea economică a regiunii. Pentru un observator, portul oferă o imagine fascinantă a modului în care ingineria hidraulică și logistica se îmbină pentru a susține nevoile unei societăți moderne.",
        "factsAdvanced": [
            "Portul Birsfelden este principalul punct de intrare pentru produsele petroliere în Elveția.",
            "Terminalul dispune de legături feroviare proprii care permit distribuția rapidă a mărfurilor în toată țara.",
            "Ecluza de la Birsfelden este una dintre cele mai importante de pe cursul superior al Rinului.",
            "Zona portuară este înconjurată de spații verzi care servesc drept coridoare ecologice pentru flora locală."
        ]
    },
    "industry-swissmill-tower": {
        "descriptionAdvanced": "Turnul Swissmill din Zürich este cel mai înalt siloz de cereale din lume, fiind un reper industrial controversat dar fascinant al peisajului urban elvețian. Structura masivă din beton, ridicată pe malul râului Limmat, reprezintă un angajament pentru securitatea alimentară a țării, având capacitatea de a stoca zeci de mii de tone de grâu. Deși arhitectura sa brutalistă a stârnit numeroase dezbateri publice, turnul a devenit un simbol al funcționalității într-un oraș cunoscut mai degrabă pentru bănci și lux. Swissmill, compania care deține turnul, este cea mai mare moară din Elveția, procesând cereale pentru o mare parte din consumul național de făină. Turnul reamintește trecătorilor că producția alimentară este o parte integrantă și esențială a vieții urbane moderne.",
        "factsAdvanced": [
            "Turnul Swissmill are o înălțime de 118 metri și a fost finalizat în anul 2016.",
            "Silozul poate depozita până la 40.000 de tone de cereale, asigurând rezerve strategice.",
            "Moara produce peste 800 de tipuri diferite de făină și amestecuri pentru panificație.",
            "Este cea mai înaltă clădire industrială din orașul Zürich, dominând cartierul West."
        ]
    },
    "industry-novartis-campus": {
        "descriptionAdvanced": "Campusul Novartis din Basel este mult mai mult decât un sediu corporativ; este un oraș în miniatură dedicat cercetării științifice și inovării în medicină. Transformarea fostului sit industrial într-un campus ultra-modern a fost realizată cu ajutorul unor arhitecți de renume mondial, fiecare clădire fiind o operă de artă în sine. Conceptul din spatele campusului pune accent pe spațiile deschise și pe interacțiunea spontană între mii de cercetători, în ideea că cele mai mari descoperiri apar din colaborare. Campusul găzduiește, de asemenea, numeroase opere de artă contemporană și spații verzi relaxante, creând un mediu de lucru inspirațional. Recent, o parte a campusului a fost deschisă publicului, oferind vizitatorilor șansa de a vedea cum arată mediul de cercetare al viitorului.",
        "factsAdvanced": [
            "Peste 8.000 de angajați din peste 100 de țări lucrează zilnic pe acest campus vast.",
            "Clădirile de pe campus au fost proiectate de nume precum Frank Gehry, David Chipperfield și Herzog & de Meuron.",
            "Novartis Pavillon oferă o expoziție multimedia interactivă despre viitorul sănătății umane.",
            "Grădinile campusului sunt irigate folosind un sistem avansat de recuperare a apei de ploaie."
        ]
    },
    "agriculture-lavaux-vineyards": {
        "descriptionAdvanced": "Terasele viticole Lavaux, care se întind pe malul nordic al Lacului Geneva, reprezintă o peisaj cultural de o frumusețe rară, inclus în patrimoniul mondial UNESCO. Aceste terase spectaculoase au fost create în secolul al XI-lea de călugării benedictini, care au transformat pantele abrupte în terenuri agricole fertile. Regiunea beneficiază de 'cele trei sori': lumina directă a soarelui, reflexia acestuia în apele lacului și căldura stocată de zidurile de piatră în timpul zilei și eliberată noaptea. Vinurile produse aici, în special cele din soiul Chasselas, sunt apreciate pentru prospețimea și caracterul lor mineral unic. Plimbările prin podgoriile terasate oferă unele dintre cele mai frumoase panorame din Elveția, unde albastrul lacului se întâlnește cu verdele viței de vie și albul Alpilor.",
        "factsAdvanced": [
            "Lavaux este cea mai mare zonă viticolă continuă din Elveția, acoperind aproximativ 800 de hectare.",
            "UNESCO a recunoscut situl în 2007 pentru interacțiunea armonioasă de secole dintre om și natură.",
            "Trenulețul 'Lavaux Express' oferă turiștilor un mod relaxant de a explora podgoriile abrupte.",
            "Multe dintre pivnițele de vin din satele pitorești precum Epesses sunt deschise pentru degustări publice."
        ]
    },
    "agriculture-emmental-dairy": {
        "descriptionAdvanced": "Regiunea Emmental este inima tradițională a producției de brânză elvețiană, fiind faimoasă în întreaga lume pentru varietatea sa cu găuri mari și gust nucat. Peisajul idilic este format din dealuri verzi, păduri dese și ferme masive cu acoperișuri de șindrilă care par desprinse din ilustrațiile de epocă. Aici, procesul de fabricare a brânzei a rămas fidel tradiției, laptele proaspăt de la vacile care pasc liber fiind transformat în roți gigantice de brânză în mici lăptării locale. Vizitatorii pot asista la demonstrații de fabricare a brânzei în lăptăriile deschise publicului, unde se explică misterul formării celebrelor găuri. Emmentalul nu este doar despre mâncare, ci și despre un mod de viață rural autentic, unde respectul pentru natură și pentru meșteșug este transmis din generație în generație.",
        "factsAdvanced": [
            "O roată autentică de brânză Emmentaler poate cântări până la 120 de kilograme.",
            "Găurile din brânză sunt rezultatul gazelor eliberate de bacterii în timpul procesului de maturare.",
            "Pentru a produce o singură roată de brânză sunt necesari aproximativ 1.200 de litri de lapte proaspăt.",
            "Regiunea este cunoscută și pentru 'Jeremias Gotthelf', un scriitor celebru care a descris viața țăranilor din Emmental."
        ]
    },
    "cult-bern-altstadt": {
        "descriptionAdvanced": "Orașul vechi din Berna, inclus în patrimoniul mondial UNESCO, este unul dintre cele mai bine conservate centre medievale din Europa. Situat pe un promontoriu înconjurat de râul Aare, centrul istoric impresionează prin arhitectura sa unitară din gresie gri-verzuie și prin arcadele sale lungi de kilometri, care formează o zonă comercială unică în lume. Vizitatorii pot admira numeroasele fântâni din secolul al XVI-lea, fiecare având o statuie colorată ce reprezintă o figură istorică sau biblică. Zytglogge, turnul cu ceas astronomic, este punctul de atracție central, oferind un spectacol mecanic ce încântă publicul de peste 500 de ani. Atmosfera medievală autentică este completată de catedrala impozantă și de străzile pavate care păstrează farmecul unei epoci trecute.",
        "factsAdvanced": [
            "Berna a fost reconstruită în întregime din piatră după un incendiu devastator în anul 1405.",
            "Arcadele din Berna se întind pe o lungime de 6 kilometri, oferind protecție împotriva ploii cumpărătorilor.",
            "Albert Einstein a locuit într-un apartament din orașul vechi când a dezvoltat teoria relativității.",
            "Catedrala din Berna (Münster) are cel mai înalt turn de biserică din Elveția, măsurând 101 metri."
        ]
    },
    "cult-rhaetian-railway": {
        "descriptionAdvanced": "Calea ferată retică pe rutele Albula și Bernina este o capodoperă a ingineriei feroviare și un sit UNESCO care oferă una dintre cele mai spectaculoase călătorii cu trenul din lume. Linia traversează Alpii elvețieni prin peisaje de o frumusețe sălbatică, folosind viaducte amețitoare din piatră, tuneluri elicoidale și trecători la mare altitudine. Un punct culminant este Viaductul Landwasser, unde trenul pare să iasă direct dintr-un perete de stâncă pe un pod arcuit deasupra unei prăpăstii adânci. Această cale ferată nu este doar un mijloc de transport, ci un monument al tehnologiei de început de secol XX care a reușit să îmblânzească relieful montan dificil. Călătoria cu celebrul Bernina Express oferă pasagerilor ferestre panoramice uriașe pentru a admira ghețarii și lacurile alpine în toată splendoarea lor.",
        "factsAdvanced": [
            "Linia Bernina atinge o altitudine de 2.253 metri la Ospizio Bernina, fără a folosi cremalieră.",
            "Trenul traversează un număr impresionant de 196 de poduri și 55 de tuneluri pe traseul său principal.",
            "Viaductul circular de la Brusio permite trenului să câștige altitudine pe un spațiu foarte restrâns.",
            "Calea ferată retică a fost finalizată în 1904 și este operată exclusiv cu energie electrică regenerabilă."
        ]
    },
    "cult-chillon": {
        "descriptionAdvanced": "Castelul Chillon, situat pe o insulă stâncoasă pe malul Lacului Geneva, este cea mai vizitată clădire istorică din Elveția și un simbol al romantismului alpin. Această fortăreață medievală a servit timp de secole ca reședință pentru conții de Savoya și ca punct strategic de control al trecătorilor spre Italia. Castelul este compus dintr-un labirint de curți interioare, săli fastuoase și temnițe subterane sculptate direct în stâncă. Lord Byron a imortalizat castelul în poezia sa 'Prizonierul din Chillon', transformându-l într-o destinație legendară pentru călătorii secolului al XIX-lea. Astăzi, vizitatorii pot explora camerele ducale bine conservate, capela gotică și zidurile de apărare care oferă vederi superbe asupra lacului și a munților Jura.",
        "factsAdvanced": [
            "Peste 400.000 de turiști vizitează anual Castelul Chillon, fiind cel mai popular monument istoric al țării.",
            "Semnătura lui Lord Byron poate fi văzută și astăzi pe una dintre coloanele din temnița castelului.",
            "Numele 'Chillon' provine din limba celtică și înseamnă 'platformă stâncoasă'.",
            "Castelul a fost folosit ca închisoare de stat în timpul perioadei de dominație berneză în secolul al XVI-lea."
        ]
    },
    "cult-pilatus": {
        "descriptionAdvanced": "Muntele Pilatus, care străjuiește orașul Lucerna, este unul dintre cele mai legendare și vizitate vârfuri din Elveția Centrală. Muntele este înconjurat de mituri despre sârci și fantome, fiind considerat în Evul Mediu un loc interzis din cauza prezenței spiritului lui Ponțiu Pilat. Astăzi, este un paradis pentru turiști, oferind acces prin cea mai abruptă cale ferată cu roată dințată din lume, care urcă pante de necrezut. Odată ajunși pe vârf, vizitatorii sunt răsplătiți cu o panoramă de 360 de grade asupra a 73 de vârfuri alpine și a numeroaselor lacuri din regiune. Pilatus oferă activități pentru toate gusturile, de la drumeții montane și parcuri de aventură până la experiențe gastronomice la înălțime în hotelurile sale istorice.",
        "factsAdvanced": [
            "Calea ferată Pilatus are o înclinație maximă de 48%, fiind cea mai abruptă din întreaga lume.",
            "Muntele are mai multe vârfuri, cel mai înalt fiind Tomlishorn, cu o altitudine de 2.128 metri.",
            "Traseul 'Dragon Ride' este o telecabină modernă cu ferestre mari care simulează zborul unui dragon.",
            "Legenda spune că în peșterile de pe Pilatus locuiau în trecut dragoni cu puteri tămăduitoare."
        ]
    },
    "cult-cern": {
        "descriptionAdvanced": "CERN, situat la granița dintre Elveția și Franța, lângă Geneva, este cel mai mare laborator de fizică a particulelor din lume și un epicentru al cunoașterii umane. Aici, mii de oameni de știință din întreaga lume colaborează pentru a descifra secretele universului folosind instrumente gigantice precum Large Hadron Collider. Laboratorul a fost locul unde s-au făcut descoperiri epocale, inclusiv confirmarea existenței bosonului Higgs și inventarea World Wide Web-ului. Vizitatorii pot explora expoziții fascinante despre particulele elementare și pot vedea replici ale echipamentelor sofisticate folosite în experimente. CERN nu este doar o instituție de cercetare, ci un simbol al cooperării internaționale pașnice și al dorinței umane de a înțelege infinitul mic și infinitul mare.",
        "factsAdvanced": [
            "Acceleratorul LHC este situat într-un tunel circular cu o circumferință de 27 de kilometri la 100 de metri sub pământ.",
            "Primul server web din lume a fost o stație de lucru NeXT folosită de Tim Berners-Lee la CERN în 1990.",
            "Temperaturile din interiorul magnetilor LHC sunt mai scăzute decât cele din spațiul cosmic îndepărtat.",
            "CERN are propria sa forță de pompieri și un serviciu medical specializat pentru a asigura siguranța vastului complex."
        ]
    },
    "nat-lucerne": {
        "descriptionAdvanced": "Lacul celor Patru Cantoane, sau Lacul Lucerna, este probabil cel mai spectaculos și diversificat lac din Elveția, datorită formei sale complicate și a reliefului montan care îl înconjoară. Malurile sale sunt strâns legate de miturile fondatoare ale Elveției, inclusiv jurământul de pe Rütli și legenda lui Wilhelm Tell. Orașul Lucerna, cu podurile sale medievale, servește drept punct de plecare pentru croazierele cu vapoare cu aburi istorice care traversează apele cristaline. Peisajul se schimbă dramatic de la golfurile blânde din nord până la malurile abrupte ca de fjord din sud, sub vârful Bürgenstock. Lacul este un magnet pentru turiști, oferind numeroase oportunități de drumeție, sporturi nautice și panorame care au inspirat poeți și pictori de secole.",
        "factsAdvanced": [
            "Lacul are o formă atât de complexă încât are o lungime a țărmului de peste 140 de kilometri.",
            "Cinci vapoare cu aburi din era Belle Époque sunt încă în serviciu activ pe lac.",
            "Altitudinea lacului este de 434 metri, iar adâncimea maximă atinge 214 metri în bazinul Gersau.",
            "În fiecare an, mii de turiști urcă pe Rigi sau Pilatus pentru a admira lacul de la mare înălțime."
        ]
    },
    "nat-lauterbrunnen": {
        "descriptionAdvanced": "Valea Lauterbrunnen este adesea descrisă ca fiind una dintre cele mai frumoase văi glaciare din lume, caracterizată prin pereți de stâncă verticali și nu mai puțin de 72 de cascade spectaculoase. Cascada Staubbach, care cade liber de la aproape 300 de metri chiar lângă sat, oferă o imagine iconică ce a fascinat vizitatorii de generații. Valea servește ca poartă de acces către regiunile montane înalte din Jungfrau și este un punct de plecare pentru explorarea satelor de munte fără mașini, precum Wengen și Mürren. Sunetul constant al apei în cădere și verdele crud al pajiștilor alpine creează o atmosferă de o liniște aproape ireală. Indiferent de anotimp, Lauterbrunnen rămâne un exemplu perfect al măreției Alpilor, fiind o destinație obligatorie pentru orice iubitor de natură.",
        "factsAdvanced": [
            "Cascada Trümmelbach este singura cascadă glaciară din Europa situată în interiorul muntelui și accesibilă publicului.",
            "Valea a servit drept inspirație pentru locația Rivendell din celebra saga 'Stăpânul Inelelor' a lui Tolkien.",
            "Satul Lauterbrunnen este situat la baza unor pereți de stâncă ce ating înălțimi de peste 400 de metri.",
            "Iarna, valea se transformă într-un paradis pentru pasionații de sporturi de iarnă și cățărări pe gheață."
        ]
    },
    "nat-interlaken": {
        "descriptionAdvanced": "Interlaken este situat într-o poziție privilegiată pe o câmpie între lacurile Thun și Brienz, fiind considerat capitala aventurii și a turismului în regiunea Berner Oberland. Orașul este străjuit de celebrele vârfuri Eiger, Mönch și Jungfrau, oferind o bază ideală pentru explorarea munților înalți sau pentru relaxare pe malul lacurilor. Promenada principală, Höheweg, oferă vederi spectaculoase spre masivul Jungfrau și este locul unde numeroși turiști urmăresc aterizarea spectaculoasă a parapantiștilor. Interlaken a fost o destinație de vacanță de lux încă din secolul al XIX-lea, păstrând farmecul hotelurilor grandioase și al stilului de viață cosmopolit. Este un nod de transport crucial, de unde pornesc trenurile spre cele mai înalte stații feroviare din Europa, fiind inima turismului alpin elvețian.",
        "factsAdvanced": [
            "Numele 'Interlaken' provine din latină și înseamnă literal 'între lacuri'.",
            "Orașul este o destinație globală pentru sporturi extreme, inclusiv bungee jumping și canyoning.",
            "Harder Kulm, muntele local al orașului, oferă o platformă de observație cu vedere spre ambele lacuri.",
            "Cea mai veche clădire din oraș este fosta mănăstire augustiniană, ce datează din secolul al XII-lea."
        ]
    }
}

for poi_id, data in updates.items():
    poi_block, obj_start, obj_end = find_poi_block(content, poi_id)
    if not poi_block: continue
    
    new_poi_block = poi_block
    
    # Update descriptionAdvanced.ro
    if "descriptionAdvanced" in data:
        # Check if descriptionAdvanced exists
        if "descriptionAdvanced:" in new_poi_block:
            desc_adv_match = re.search(r'descriptionAdvanced:\s*\{([^}]*)\}', new_poi_block, re.DOTALL)
            if desc_adv_match:
                inner = desc_adv_match.group(1)
                if re.search(r'ro:\s*""', inner):
                    new_inner = re.sub(r'ro:\s*""', f'ro: "{data["descriptionAdvanced"]}"', inner)
                    new_poi_block = new_poi_block.replace(inner, new_inner)
        else:
            # Add before facts: or image:
            insertion = f'\n    descriptionAdvanced: {{\n      de: "",\n      hu: "",\n      ro: "{data["descriptionAdvanced"]}",\n      en: ""\n    }},'
            if "    facts:" in new_poi_block:
                new_poi_block = new_poi_block.replace("    facts:", insertion + "\n    facts:")
            elif "    image:" in new_poi_block:
                new_poi_block = new_poi_block.replace("    image:", insertion + "\n    image:")

    # Update factsAdvanced.ro
    if "factsAdvanced" in data:
        facts_list = '[\n        "' + '",\n        "'.join(data["factsAdvanced"]) + '"\n      ]'
        if "factsAdvanced:" in new_poi_block:
            facts_adv_match = re.search(r'factsAdvanced:\s*\{([^}]*)\}', new_poi_block, re.DOTALL)
            if facts_adv_match:
                inner = facts_adv_match.group(1)
                if re.search(r'ro:\s*\[\s*\]', inner):
                    new_inner = re.sub(r'ro:\s*\[\s*\]', f'ro: {facts_list}', inner)
                    new_poi_block = new_poi_block.replace(inner, new_inner)
        else:
            # Add before image:
            insertion = f'\n    factsAdvanced: {{\n      de: [],\n      hu: [],\n      ro: {facts_list},\n      en: []\n    }},'
            if "    image:" in new_poi_block:
                new_poi_block = new_poi_block.replace("    image:", insertion + "\n    image:")

    content = content[:obj_start] + new_poi_block + content[obj_end:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Updated {len(updates)} POIs")
