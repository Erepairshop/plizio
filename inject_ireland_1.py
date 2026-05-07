import json
import re

pois = {
    "ireland": {
        "desc": "Irlanda este o națiune insulară situată în nord-vestul Europei, renumită pentru peisajele sale de un verde intens, castelele medievale și patrimoniul celtic bogat. De la coastele stâncoase uimitoare până la câmpiile liniștite, oferă un cadru natural deosebit. Cultura irlandeză este profund înrădăcinată în tradițiile muzicale, dansurile specifice și ospitalitatea legendară a localnicilor. Economia sa modernă se bazează pe tehnologie și inovație, menținând totodată o legătură strânsă cu agricultura și turismul.",
        "facts": ["Este cunoscută sub numele de Insula de Smarald.", "Sfântul Patrick este patronul spiritual al Irlandei.", "Are o lungă tradiție literară, cu patru laureați ai Premiului Nobel."]
    },
    "city-dublin": {
        "desc": "Dublin, capitala Irlandei, este un oraș plin de viață situat la gura râului Liffey. Este faimos pentru arhitectura sa georgiană elegantă, podurile pitorești și pub-urile istorice. Orașul găzduiește Trinity College, unde se află celebrul manuscris iluminat Cartea din Kells. Dublin este recunoscut ca un centru literar mondial, influențând scriitori de renume precum James Joyce și Oscar Wilde. Geografie K6 - Dezvoltare urbană și estuare.",
        "facts": ["A fost fondat inițial ca o așezare vikingă numită Dubh Linn.", "Parcul Phoenix din Dublin este unul dintre cele mai mari parcuri urbane din Europa.", "Podul Ha'penny este un simbol iconic al orașului."]
    },
    "city-cork": {
        "desc": "Cork, situat pe râul Lee în sudul Irlandei, este al doilea oraș ca mărime al țării și un port maritim vital. Orașul are o atmosferă vibrantă, susținută de universitățile sale și de o scenă culinară apreciată, al cărei nucleu este istorica piață English Market. De-a lungul istoriei, Cork a fost un punct central al comerțului cu unt și o locație strategică pentru navigația transatlantică. Locals îl numesc adesea cu mândrie adevărata capitală a Irlandei. Istorie K6 - Comerț și orașe portuare.",
        "facts": ["Portul Cork este al doilea cel mai mare port natural din lume.", "English Market funcționează neîntrerupt din 1788.", "Orașul a fost Capitală Europeană a Culturii în 2005."]
    },
    "city-galway": {
        "desc": "Galway, situat pe coasta de vest, este considerat inima culturală a Irlandei, remarcându-se prin festivalurile sale artistice și muzica tradițională. Străzile sale înguste, pietruite, sunt mărginite de magazine colorate și pub-uri unde se cântă live în fiecare seară. Orașul păstrează o puternică influență a limbii irlandeze și este poarta de acces către regiunea sălbatică Connemara. Atmosfera sa boemă atrage tineri și artiști din întreaga lume. Geografie K5 - Așezări de coastă și cultură.",
        "facts": ["Este adesea numit Orașul Triburilor, după cele 14 familii de comercianți fondatoare.", "Găzduiește anual un faimos festival internațional de stridii.", "Arcul Spaniol este un vestigiu important al zidurilor medievale ale orașului."]
    },
    "city-limerick": {
        "desc": "Limerick, aflat pe malurile râului Shannon, este un oraș cu o istorie fortificată marcată de conflicte medievale și asedii vikinge. Piesa centrală a arhitecturii sale este impunătorul Castel al Regelui Ioan, construit în secolul al XIII-lea. Orașul combină patrimoniul său istoric cu o dezvoltare modernă, evidențiată de galerii de artă și muzee restaurate. Este, de asemenea, renumit pentru pasiunea sa intensă pentru rugby, având stadionul Thomond Park ca simbol sportiv. Istorie K7 - Fortificații și apărare fluvială.",
        "facts": ["Tratatul de la Limerick a fost semnat aici în 1691.", "Orașul a fost desemnat primul Oraș Național al Culturii din Irlanda în 2014.", "Este cel mai mare oraș din regiunea istorică Munster."]
    },
    "ie-belfast": {
        "desc": "Belfast, capitala Irlandei de Nord, s-a transformat dintr-un puternic centru industrial într-un oraș modern și dinamic. Aici a fost construit celebrul vas RMS Titanic, a cărui istorie este acum imortalizată în impresionantul muzeu Titanic Belfast. Orașul este recunoscut pentru arhitectura sa victoriană, primăria grandioasă și faimoasele picturi murale care reflectă trecutul său politic complex. Astăzi, Belfast atrage turiști prin scena sa culturală emergentă și regenerarea urbană rapidă. Istorie K8 - Revoluția industrială și istoria modernă.",
        "facts": ["Șantierul naval Harland & Wolff era cândva cel mai mare din lume.", "Belfast a fost denumit Linenopolis datorită industriei sale de in din secolul al XIX-lea.", "Grădina Botanică din Belfast găzduiește o seră cu structură din fontă și sticlă curbată din 1840."]
    },
    "city-sligo": {
        "desc": "Sligo este un oraș pitoresc situat în nord-vestul Irlandei, înconjurat de munți impunători și lacuri cristaline. Este profund asociat cu poetul W.B. Yeats, care a găsit inspirație în frumusețea peisajelor locale, cum ar fi muntele Benbulben și lacul Lough Gill. Orașul are un bogat patrimoniu preistoric, cu cimitirul megalitic de la Carrowmore în apropiere. Astăzi, Sligo este un centru prosper pentru turism, muzică tradițională și surfing de-a lungul coastei atlantice. Geografie K7 - Relief și peisaje de inspirație literară.",
        "facts": ["Abația Sligo a fost fondată în anul 1252 și a supraviețuit mai multor incendii.", "Numele Sligo înseamnă loc abundent în scoici în limba irlandeză.", "Poetul William Butler Yeats este înmormântat în apropiere, la Drumcliff."]
    },
    "city-waterford": {
        "desc": "Waterford, cel mai vechi oraș din Irlanda, a fost fondat de vikingi în secolul al IX-lea, pe malurile râului Suir. Orașul păstrează dovezi clare ale trecutului său medieval prin Turnul Reginald și zona istorică cunoscută sub numele de Triunghiul Viking. La nivel global, Waterford este faimos pentru producția sa de cristal de lux, o tradiție meșteșugărească ce datează din 1783. Orașul combină istoria sa profundă cu un port aglomerat și festivaluri atractive de vară. Istorie K5 - Așezările vikinge și meșteșugurile antice.",
        "facts": ["Este recunoscut pe plan internațional pentru Waterford Crystal.", "Turnul Reginald este cea mai veche clădire civică din Irlanda.", "Blaa, o chiflă tradițională moale, este o specialitate culinară protejată din Waterford."]
    },
    "city-kilkenny": {
        "desc": "Kilkenny este un oraș medieval fascinant, denumit adesea Orașul de Marmură datorită pietrei negre de calcar folosite în construcția sa. Pe o colină, dominând orașul, se află maiestuosul Castel Kilkenny, construit de normanzi în secolul al XII-lea. Străzile sale înguste sunt pline de clădiri istorice, biserici vechi de secole și o catedrală impresionantă, St. Canice. Orașul găzduiește festivaluri de artă renumite și menține o tradiție îndelungată în fabricarea berii artizanale. Istorie K7 - castele medievale și arhitectură gotică.",
        "facts": ["A fost capitala Confederației Irlandeze în secolul al XVII-lea.", "Turnul rotund al Catedralei St. Canice oferă o vedere panoramică spectaculoasă asupra orașului.", "Kilkenny găzduiește unul dintre cele mai importante festivaluri de comedie din Irlanda."]
    },
    "city-athlone": {
        "desc": "Athlone este situat chiar în centrul geografic al Irlandei, pe malurile râului Shannon și la granița dintre regiunile Leinster și Connacht. Poziția sa strategică l-a transformat de-a lungul secolelor într-un punct vital de apărare și comerț, lucru demonstrat de Castelul Athlone din secolul al XIII-lea. Orașul este astăzi un centru important de navigație interioară și turism fluvial. În plus, găzduiește o universitate modernă și companii tehnologice, îmbinând istoria cu inovația. Geografie K6 - Căi navigabile și centre strategice.",
        "facts": ["Găzduiește Sean's Bar, recunoscut de Guinness World Records ca fiind cel mai vechi pub din Europa.", "Bătălia de la Athlone din 1691 a fost un eveniment decisiv în Războiul Williamit.", "Este un punct de plecare popular pentru croaziere pe lacul Lough Ree."]
    },
    "city-tralee": {
        "desc": "Tralee este orașul principal al comitatului Kerry, cunoscut la nivel internațional pentru găzduirea anuală a festivalului Rose of Tralee. Fondat în secolul al XIII-lea, orașul are o istorie zbuciumată, reflectată în ruinele abațiilor sale dominicane. Așezat la baza peninsulei Dingle, Tralee servește ca un punct excelent de plecare pentru explorarea peisajelor rurale din sud-vestul Irlandei. Muzeul Kerry, aflat aici, prezintă o dioramă interactivă a vieții medievale, atrăgând mii de vizitatori. Cultură K5 - Festivaluri tradiționale și patrimoniu.",
        "facts": ["Canalul Tralee, finalizat în 1846, lega orașul de portul din Golful Tralee.", "Teatrul Național de Folclor al Irlandei, Siamsa Tíre, se află în Tralee.", "Festivalul Rose of Tralee se desfășoară neîntrerupt din 1959."]
    },
    "city-dundalk": {
        "desc": "Dundalk, situat la jumătatea distanței dintre Dublin și Belfast, este centrul administrativ al comitatului Louth. Datorită locației sale, orașul a fost o fortăreață importantă la granița regiunii The Pale și este adânc legat de miturile eroului celtic Cú Chulainn. De-a lungul timpului, a fost un important centru al industriei de pantofi și tutun, transformându-se astăzi într-un pol tehnologic. Orașul este un centru vibrant cu o comunitate studențească mare, datorită Institutului de Tehnologie din Dundalk. Istorie K7 - Regiunea Pale și industria modernă.",
        "facts": ["Este locul de naștere al celebrei trupe de muzică The Corrs.", "În mitologia irlandeză, este teritoriul apărat de eroul legendar Cú Chulainn.", "Dundalk este unul dintre cele mai mari orașe din Irlanda ca populație."]
    },
    "city-ennis": {
        "desc": "Ennis este un oraș istoric și fermecător din comitatul Clare, caracterizat prin străduțele sale pietruite și clădirile din piatră. Orașul a crescut în jurul unei abații franciscane fondate în secolul al XIII-lea, ale cărei ruine impresionează și astăzi prin sculpturile lor detaliate. Ennis este recunoscut pe plan național drept un bastion al muzicii tradiționale irlandeze, atrăgând muzicieni și pasionați în fiecare săptămână. De asemenea, a fost desemnat de mai multe ori cel mai curat oraș din Irlanda. Cultură K6 - Muzică tradițională și arhitectură ecleziastică.",
        "facts": ["Abația Ennis a fost cândva un centru educațional major, cu peste 1000 de studenți.", "În centrul orașului se înalță un monument dedicat lui Daniel O'Connell, 'Eliberatorul'.", "Ennis a fost fondat pe o insulă de pe râul Fergus."]
    },
    "city-carlow": {
        "desc": "Carlow este o așezare istorică amplasată pe malul râului Barrow, cunoscută pentru terenurile sale agricole fertile. Orașul poartă amprenta cuceririi normande, fiind dominat de ruinele impunătoare ale Castelului Carlow, construit în secolul al XIII-lea pentru a proteja trecerea râului. O altă clădire emblematică este Catedrala gotică Adormirea Maicii Domnului, recunoscută pentru turnul său înalt. Carlow are, de asemenea, o moștenire legată de industria zahărului și o viață de noapte dinamică susținută de colegiile sale. Istorie K6 - Apărarea râurilor și arhitectura normandă.",
        "facts": ["Dolmenul Brownshill din apropiere are una dintre cele mai grele pietre de acoperiș din Europa, cântărind peste 100 de tone.", "Colegiul Carlow, fondat în 1782, este al doilea cel mai vechi colegiu de nivel universitar din Irlanda.", "Castelul Carlow a fost parțial distrus accidental în 1814 de un medic care a folosit explozibil pentru a-l reamenaja."]
    },
    "city-wexford": {
        "desc": "Wexford este un oraș istoric cu un patrimoniu maritim puternic, fondat de vikingi în apropierea estuarului râului Slaney. Străzile sale înguste și aliniamentul clădirilor reflectă originile sale scandinave și medievale. Orașul a jucat un rol central în Rebeliunea Irlandeză din 1798, un moment definitoriu pentru istoria modernă a țării. În zilele noastre, este faimos la nivel mondial pentru Festivalul de Operă de la Wexford, care atrage pasionați de muzică din întreaga lume. Istorie K8 - Rebeliuni istorice și cultură muzicală.",
        "facts": ["Numele orașului derivă din vechiul termen nordic Veisafjǫrðr, care înseamnă intrare mlăștinoasă.", "Opera House din Wexford este o capodoperă a arhitecturii moderne, deschisă în 2008.", "A fost primul oraș capturat de invadatorii normanzi în anul 1169."]
    },
    "city-navan": {
        "desc": "Navan, situat la confluența râurilor Boyne și Blackwater, este centrul administrativ al comitatului Meath. Orașul are rădăcini adânci în istoria medievală, fiind fondat ca o așezare fortificată de baronii normanzi în secolul al XII-lea. Datorită pământurilor sale bogate și poziției favorabile, a fost mult timp un centru de piață important pentru agricultură și comerț. Astăzi, Navan este un oraș în plină dezvoltare, servind drept centru rezidențial pentru navetiștii care lucrează în Dublin. Geografie K5 - Confluența râurilor și expansiunea urbană.",
        "facts": ["Cea mai mare mină de zinc și plumb din Europa se află în apropiere, la Tara Mines.", "Actorul Pierce Brosnan s-a născut și a crescut în Navan.", "Abația Athlumney, fondată în secolul al XV-lea, reprezintă un monument istoric remarcabil al orașului."]
    },
    "nat-cliffs-of-moher": {
        "desc": "Stâncile Moher sunt una dintre cele mai spectaculoase și emblematice atracții naturale ale Irlandei, oferind priveliști impresionante asupra Oceanului Atlantic. Ridicându-se la peste 200 de metri deasupra valurilor, aceste formațiuni stâncoase abrupte se întind pe o lungime de 8 kilometri de-a lungul coastei comitatului Clare. Ele servesc drept habitat vital pentru zeci de mii de păsări marine, inclusiv papagalii de mare (puffin). Peisajul accidentat și măreția oceanului au făcut din acest loc o destinație turistică de top și un decor preferat pentru filme. Geografie K7 - Eroziunea costieră și ecosisteme marine.",
        "facts": ["Punctul lor cel mai înalt se află la nord de Turnul O'Brien, la 214 metri.", "Numele stâncilor provine de la un vechi fort în ruină, numit Mothar.", "Stâncile apar în filme celebre precum Harry Potter și Prințul Semipur."]
    },
    "nat-giants-causeway": {
        "desc": "Giant's Causeway (Calea Uriașilor) este un sit natural uluitor din Irlanda de Nord, renumit pentru cele aproximativ 40.000 de coloane de bazalt perfect îmbinate. Formațiunile hexagonale au fost create de o erupție vulcanică antică acum mai bine de 50 de milioane de ani, când lava fierbinte s-a răcit brusc la contactul cu marea. Cu toate acestea, legendele locale susțin că structura a fost construită de uriașul Fionn mac Cumhaill pentru a traversa marea spre Scoția. Este singurul sit din Irlanda de Nord inclus în Patrimoniul Mondial UNESCO, atrăgând geologi și turiști deopotrivă. Științe K8 - Vulcanism și structuri de bazalt.",
        "facts": ["Majoritatea coloanelor sunt hexagonale, dar unele au patru, cinci sau chiar opt laturi.", "Situl adăpostește formațiuni cu denumiri populare, precum Orga Uriașului și Cizma Uriașului.", "A fost declarat sit al Patrimoniului Mondial UNESCO în 1986."]
    },
    "nat-ring-kerry": {
        "desc": "Ring of Kerry este un traseu pitoresc de 179 de kilometri care înconjoară Peninsula Iveragh din sud-vestul Irlandei. Traseul este faimos pentru peisajele sale dramatice, care includ plaje pustii, munți abrupți și sate pescărești colorate. Pe parcurs, călătorii pot admira Parcul Național Killarney, cascade impresionante și fortărețe străvechi din piatră. Peisajul virgin și relieful diversificat fac din acest inel una dintre cele mai populare rute de turism rutier și ciclist din întreaga Europă. Geografie K6 - Relief peninsular și turism.",
        "facts": ["Ruta completă urmează adesea un drum îngust, circulându-se de obicei în sens invers acelor de ceasornic.", "Punctul de belvedere Ladies View oferă o panoramă uluitoare a lacurilor din Killarney.", "Insulele Skellig, aflate în largul coastei, fac parte din panorama vizibilă de pe acest traseu."]
    },
    "nat-connemara": {
        "desc": "Connemara este o regiune sălbatică și izolată din vestul comitatului Galway, recunoscută pentru frumusețea sa melancolică și aspră. Peisajul este dominat de lanțul muntos Twelve Bens, de mlaștini vaste acoperite cu turbă și de zeci de lacuri sclipitoare. Connemara este, de asemenea, un bastion al limbii și culturii irlandeze (Gaeltacht), unde tradițiile străvechi sunt încă vii. Regiunea atrage pasionați de drumeții, poeți și pictori fascinați de schimbările bruște de lumină și de liniștea naturii. Geografie K7 - Mlaștini de turbă și conservarea culturii.",
        "facts": ["Este casa faimosului ponei de Connemara, o rasă locală robustă și blândă.", "Carierele locale extrag marmura verde de Connemara, faimoasă la nivel mondial.", "Abația Kylemore, o capodoperă arhitecturală, este situată la marginea unui lac din regiune."]
    },
    "nat-burren": {
        "desc": "Burren este un platou carstic unic situat în comitatul Clare, caracterizat prin suprafețe vaste de rocă de calcar brăzdate de fisuri adânci. Deși pare pustiu la prima vedere, acest mediu stâncos ascunde un ecosistem uimitor, unde floră arctică, alpină și mediteraneană crește simultan în crăpăturile stâncilor. Regiunea este presărată cu monumente arheologice preistorice, cum ar fi dolmenul Poulnabrone, care datează din perioada neolitică. Primăvara, Burren explodează într-o explozie de culori florale, atrăgând botaniști din întreaga lume. Biologie K8 - Ecosisteme carstice și floră extremă.",
        "facts": ["Numele său provine din cuvântul irlandez Boireann, care înseamnă un loc stâncos mare.", "Roca de calcar acționează ca un radiator gigant, absorbind căldura vara și eliberând-o iarna.", "Aici se găsesc zeci de specii de orhidee și plante rare care nu cresc în altă parte a Irlandei."]
    },
    "nat-carrauntoohil": {
        "desc": "Carrauntoohil este cel mai înalt munte din Irlanda, ridicându-se impresionant la 1.038 de metri în lanțul muntos MacGillycuddy's Reeks din comitatul Kerry. Relieful său accidentat a fost sculptat de ghețari în ultima eră glaciară, lăsând în urmă creste ascuțite, văi adânci și lacuri montane (corries). Traseele de escaladă, cum ar fi faimoasa Scara Diavolului, sunt abrupte și solicitante, necesitând echipament adecvat și experiență montană. De la crucea metalică de pe vârf, drumeții se pot bucura de panorame spectaculoase ale întregului sud-vest irlandez. Geografie K8 - Relief glaciar și alpinism.",
        "facts": ["Crucea de fier de pe vârf are 5 metri înălțime și a fost ridicată în 1976.", "Zona prezintă un climat imprevizibil, acoperindu-se adesea de nori groși în câteva minute.", "Muntele este format dintr-o rocă veche numită gresie roșie (Old Red Sandstone)."]
    },
    "nat-croagh-patrick": {
        "desc": "Croagh Patrick este un munte sfânt cu formă conică, situat în comitatul Mayo, care domină priveliștea asupra insulelor din golful Clew. Cu o înălțime de 764 de metri, este considerat cel mai important loc de pelerinaj din Irlanda. Conform tradiției creștine, Sfântul Patrick a postit pe acest vârf timp de 40 de zile în anul 441. În ultima duminică din iulie, cunoscută sub numele de Reek Sunday, zeci de mii de pelerini urcă pe munte, mulți dintre ei alegând să o facă desculți ca act de penitență. Religie și Istorie K6 - Pelerinaje și tradiții ascetice.",
        "facts": ["Muntele a fost un sit sacru și în perioada precreștină, fiind asociat cu sărbătoarea celtică Lughnasadh.", "La nivelul superior, drumeții trebuie să traverseze o pantă abruptă acoperită de grohotiș.", "O mică capelă modernă a fost construită pe vârful muntelui în anul 1905."]
    },
    "nat-lough-corrib": {
        "desc": "Lough Corrib este cel mai mare lac din Republica Irlanda și o bijuterie naturală a regiunii vestice. Întinzându-se pe o lungime de peste 40 de kilometri, lacul separă câmpiile verzi din est de peisajul muntos al regiunii Connemara. Este legat de Oceanul Atlantic prin râul Corrib, care traversează orașul Galway. Lacul este presărat cu numeroase insule împădurite și este faimos pe plan internațional printre pescari pentru păstrăvul brun și somonul abundent. Geografie K5 - Hidrografia lacustră și pescuitul.",
        "facts": ["Se spune adesea că lacul ar avea 365 de insule, câte una pentru fiecare zi a anului.", "Insula Inchagoill găzduiește ruine creștine timpurii, inclusiv o biserică din secolul al V-lea.", "Lacul a fost un important coridor de transport pentru vikingi și călugării medievali."]
    },
    "nat-lough-derg": {
        "desc": "Lough Derg este al doilea cel mai mare lac de pe cursul râului Shannon, constituind granița naturală dintre comitatele Clare, Tipperary și Galway. Cunoscut drept Lacul Plăcerilor, oferă oportunități excelente pentru navigație, navigație cu pânze și sporturi nautice, având porturi pitorești precum Killaloe și Portumna. Lacul are o importanță istorică profundă, adăpostind insula Inis Cealtra, un renumit sit monastic vechi. Vegetația densă de pe malurile sale oferă un refugiu excelent pentru lebede și rațe sălbatice. Geografie K6 - Lacuri navigabile și conservarea faunei.",
        "facts": ["Inis Cealtra a fost fondată în secolul al VI-lea de Sfântul Caimin și dispune de un turn rotund clasic.", "Este unul dintre cele mai adânci lacuri de pe cursul râului Shannon.", "Lacul a fost un important centru hidroenergetic înainte de construcția barajelor moderne."]
    },
    "nat-river-shannon": {
        "desc": "Râul Shannon este cea mai lungă și importantă arteră fluvială din Insulele Britanice, străbătând o distanță de 360 de kilometri. Izvorând din Munții Cuilcagh în nord, râul împarte practic Irlanda în regiunea de vest și regiunea de est și sud. Shannon-ul a facilitat transportul și comerțul încă din preistorie, fiind utilizat intens de călugări, vikingi și comercianți. Astăzi, sistemul său extins de lacuri și canale conectate îl face un paradis pentru vacanțele cu barca și turismul lent de-a lungul peisajelor rurale. Geografie K7 - Rețele fluviale și istoria transporturilor.",
        "facts": ["Numele râului provine de la Sionna, o zeiță din mitologia celtică.", "Râul se varsă în Oceanul Atlantic printr-un estuar masiv lung de 100 de kilometri.", "Hidrocentrala de la Ardnacrusha, inaugurată în anii 1920, a revoluționat furnizarea de energie electrică a Irlandei."]
    },
    "nat-river-boyne": {
        "desc": "Râul Boyne, curgând liniștit prin comitatul Meath, este considerat cel mai istoric și mitologic râu al Irlandei. Valea Boyne adăpostește monumente preistorice formidabile, cum ar fi siturile UNESCO de la Newgrange și Knowth, care preced piramidele din Egipt. Potrivit legendei, râul este locul în care eroul Fionn mac Cumhaill a prins Somonul Cunoașterii, dobândind toată înțelepciunea lumii. În 1690, malurile sale au fost scena faimoasei Bătălii de la Boyne, care a modelat destinul politic al Irlandei. Istorie K6 - Mitologie celtică și bătălii definitorii.",
        "facts": ["Râul are o lungime de aproximativ 112 kilometri, vărsându-se în Marea Irlandeză lângă Drogheda.", "Râul este renumit pentru pescuitul de somon sălbatic.", "De-a lungul Boyne-ului se pot observa ruinele impunătoare ale Castelului Trim."]
    },
    "nat-achill-island": {
        "desc": "Insula Achill, cea mai mare insulă din largul coastei Irlandei, este o bijuterie a sălbăticiei, conectată de continent printr-un pod. Insula impresionează prin stâncile sale maritime gigantice de la Croaghaun, printre cele mai înalte din Europa, și plajele nesfârșite de nisip bătute de vânt. Istoria sa dură este vizibilă în Satul Părăsit, o așezare abandonată în timpul Marii Foamete din secolul al XIX-lea. Peisajele sale neîmblânzite, dominându-le muntele Slievemore, atrag iubitorii de natură și i-au inspirat pe mulți artiști. Geografie K7 - Relieful insular și așezările abandonate.",
        "facts": ["Podul Michael Davitt leagă insula de peninsula Corraun.", "Scriitorul german Heinrich Böll a petrecut mult timp aici, descriind insula în Jurnalul său irlandez.", "Mlaștinile de turbă acoperă aproape 90% din suprafața insulei Achill."]
    },
    "nat-avondale-forest": {
        "desc": "Parcul Forestier Avondale, situat în comitatul Wicklow, este considerat locul de naștere al silviculturii irlandeze moderne. Cu o suprafață de peste 200 de hectare, pădurea a fost un poligon de testare în secolul al XX-lea pentru diverse specii de arbori exotici, cum ar fi eucaliptul și sequoia gigant. În inima sa se află Casa Avondale, locul de naștere al marelui lider politic irlandez Charles Stewart Parnell. Astăzi, noile pasarele suspendate printre coroanele copacilor și turnul panoramic de observare o fac o destinație naturală de clasă mondială. Biologie K6 - Silvicultură și introducerea speciilor exotice.",
        "facts": ["Traseul Beyond the Trees din parc este cea mai lungă pasarelă printre coroane din Irlanda.", "Prima pepinieră forestieră experimentală a fost înființată aici în 1904.", "Pădurea urmează cursul sinuos al râului Avonmore."]
    },
    "cult-blarney-castle": {
        "desc": "Castelul Blarney, o fortăreață medievală impunătoare situată lângă Cork, atrage sute de mii de vizitatori anual datorită celebrei Pietre Blarney. Legenda spune că oricine sărută această piatră, aplecându-se pe spate deasupra unui gol înalt, primește darul elocinței (darul vorbirii dulci). Construit în secolul al XV-lea de liderul clanului MacCarthy, castelul a supraviețuit multor asedii militare. Domeniul impresionant este înconjurat de grădini magnifice, inclusiv o faimoasă Grădină a Otrăvurilor, cu plante exotice mortale. Istorie K5 - Castele medievale și folclor.",
        "facts": ["Piatra Blarney se află încastrată chiar în marginea parapetului turnului central.", "Formațiunile stâncoase din Rock Close sunt asociate cu ritualuri antice druidice.", "Cuvântul blarney a fost introdus în limba engleză de regina Elisabeta I pentru a descrie vorbăria amăgitoare."]
    },
    "cult-trinity": {
        "desc": "Trinity College Dublin este cea mai veche și mai prestigioasă universitate din Irlanda, fondată în 1592 din ordinul reginei Elisabeta I. Situat chiar în inima orașului, campusul istoric este renumit pentru piețele sale pietruite și clădirile din piatră. Piesa centrală a universității este Vechea Bibliotecă, ce găzduiește Cartea din Kells, un manuscris evanghelic ilustrat vechi de 1.200 de ani. Printre absolvenții săi iluștri se numără scriitori precum Oscar Wilde, Samuel Beckett și Jonathan Swift. Istorie K8 - Educația clasică și manuscrisele medievale.",
        "facts": ["Camera Lungă a bibliotecii adăpostește 200.000 dintre cele mai vechi cărți ale universității.", "Universitatea a fost creată pe locul unei foste mănăstiri catolice augustiniene.", "Trinity College are dreptul legal de a primi o copie a oricărei cărți publicate în Marea Britanie și Irlanda."]
    },
    "cult-kilkenny": {
        "desc": "Castelul Kilkenny este un simbol grandios al puterii normande în Irlanda, ridicându-se strategic deasupra râului Nore. Timp de aproape 600 de ani, castelul a fost sediul puternicei familii Butler, suferind numeroase reconstrucții de la o fortăreață defensivă la o reședință victoriană fastuoasă. În 1967, castelul a fost vândut statului irlandez pentru suma simbolică de 50 de lire sterline și a fost restaurat minuțios. Galeria de picturi (Picture Gallery) și spațioasele grădini terasate reprezintă atracțiile de top ale acestui monument istoric remarcabil. Istorie K6 - Dinastiile nobiliare și arhitectura de apărare.",
        "facts": ["A fost inițial construit din lemn în 1195, fiind înlocuit curând cu un castel din piatră.", "Trei dintre cele patru turnuri originale ale structurii pătrate medievale încă supraviețuiesc.", "Grădinile castelului includ un rozariu elaborat în formă de cruce celtică."]
    },
    "hist-trim-castle": {
        "desc": "Castelul Trim este cel mai mare castel anglo-normand din Irlanda, dominând malurile râului Boyne prin zidurile sale masive de piatră. A fost construit în anii 1170 de către baronul Hugh de Lacy ca un simbol al autorității și un post avansat defensiv. Structura centrală, cunoscută sub numele de donjon, prezintă o formă unică de cruce cu douăzeci de laturi, concepută pentru o vizibilitate defensivă maximă. Ruinele sale de proporții epice au servit drept locație principală de filmare pentru celebrul film istoric Braveheart. Istorie K7 - Castele fortificate și invazia normandă.",
        "facts": ["Construcția inițială a durat aproape 30 de ani pentru a fi finalizată.", "Donjonul este înconjurat de un șanț cu apă, un zid imens de curte și porți fortificate.", "Castelul a găzduit temporar parlamentul irlandez în secolul al XV-lea."]
    },
    "hist-newgrange": {
        "desc": "Newgrange este o capodoperă a ingineriei preistorice, un mormânt de pasaj din Epoca Pietrei construit în urmă cu peste 5.200 de ani, fiind mai vechi decât piramidele și Stonehenge. Monumentul are forma unui tumul uriaș de pământ și piatră, cu fațada din cuarț alb sclipitor și pietre masive decorate cu motive în spirală. Este faimos la nivel mondial pentru alinierea sa astronomică: la răsăritul soarelui în timpul solstițiului de iarnă, o rază de lumină pătrunde printr-o mică fantă și iluminează dramatic camera mortuară interioară. Științe K8 - Arheoastronomie și megalitism.",
        "facts": ["Camera sa interioară are un acoperiș tip consolă (corbelled) care a rămas complet impermeabil milenii întregi.", "Pentru construcția sa s-au folosit peste 200.000 de tone de material.", "Este elementul central al complexului Brú na Bóinne, un sit al Patrimoniului Mondial UNESCO."]
    },
    "hist-kilmainham-gaol": {
        "desc": "Închisoarea Kilmainham Gaol din Dublin este un loc de pelerinaj național și un simbol solemn al luptei Irlandei pentru independență. Construită în 1796, aceasta a încarcerat mulți lideri rebeli de-a lungul a peste un secol de conflicte cu dominația britanică. Cel mai notabil eveniment a fost execuția liderilor Revoltei de Paști din 1916 în curtea sa de piatră, fapt care a schimbat definitiv cursul istoriei irlandeze. Astăzi, închisoarea este un muzeu impresionant care oferă o perspectivă sumbră, dar esențială, asupra vieții aspre din temnițele victoriene. Istorie K8 - Mișcări de independență și sistemul penal victorian.",
        "facts": ["Închisoarea a fost închisă oficial în 1924, la scurt timp după formarea Statului Liber Irlandez.", "Bărbați, femei și chiar copii mici erau închiși aici în timpul Marii Foamete.", "Aripa de Est victoriană este recunoscută pentru designul său spectaculos cu luminatoare din sticlă și scări metalice."]
    }
}

with open('lib/visualLab/data/irelandPoi.ts', 'r', encoding='utf-8') as f:
    content = f.read()

for poi_id, data in pois.items():
    # Find the POI block
    # Match from `id: "poi_id"` to the next `id:` or `];`
    pattern = r'(id\s*:\s*["\']' + re.escape(poi_id) + r'["\'][\s\S]*?)(?=\n\s*(?:["\']?)id\s*:|\Z|\n\s*\];)'
    match = re.search(pattern, content)
    if match:
        block = match.group(0)
        new_block = block
        
        # Inject descriptionAdvanced if not present
        if 'descriptionAdvanced' not in new_block:
            # find description
            desc_match = re.search(r'("?description"?\s*:\s*\{[\s\S]*?\})', new_block)
            if desc_match:
                ro_desc = json.dumps(data["desc"], ensure_ascii=False)
                replacement = desc_match.group(1) + f',\n    "descriptionAdvanced": {{\n      "ro": {ro_desc}\n    }}'
                new_block = new_block.replace(desc_match.group(1), replacement)
        else:
            # Inject ro if missing
            da_match = re.search(r'("?descriptionAdvanced"?\s*:\s*\{)([\s\S]*?)\}', new_block)
            if da_match and '"ro"' not in da_match.group(0):
                ro_desc = json.dumps(data["desc"], ensure_ascii=False)
                new_da = da_match.group(1) + da_match.group(2).rstrip() + f',\n      "ro": {ro_desc}\n    }}'
                new_block = new_block.replace(da_match.group(0), new_da)
                
        # Inject factsAdvanced if not present
        if 'factsAdvanced' not in new_block:
            # find facts
            facts_match = re.search(r'("?facts"?\s*:\s*\{[\s\S]*?\})', new_block)
            if facts_match:
                ro_facts = json.dumps(data["facts"], ensure_ascii=False)
                replacement = facts_match.group(1) + f',\n    "factsAdvanced": {{\n      "ro": {ro_facts}\n    }}'
                new_block = new_block.replace(facts_match.group(1), replacement)
        else:
            fa_match = re.search(r'("?factsAdvanced"?\s*:\s*\{)([\s\S]*?)\}', new_block)
            if fa_match and '"ro"' not in fa_match.group(0):
                ro_facts = json.dumps(data["facts"], ensure_ascii=False)
                new_fa = fa_match.group(1) + fa_match.group(2).rstrip() + f',\n      "ro": {ro_facts}\n    }}'
                new_block = new_block.replace(fa_match.group(0), new_fa)
                
        content = content.replace(block, new_block)

with open('lib/visualLab/data/irelandPoi.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Batch 1 applied successfully.")
