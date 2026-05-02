import json

pois = [
    {
        "id": "br-rj-cristo-redentor-landmarks-v2",
        "parent": "BR-RJ",
        "coords": [-43.2105, -22.9519],
        "name_de": "Cristo Redentor", "name_hu": "A Megváltó Krisztus szobra", "name_ro": "Cristos Mântuitorul", "name_en": "Christ the Redeemer",
        "desc_de": "Die weltberühmte Art-déco-Statue von Jesus Christus auf dem Berg Corcovado, ein ikonisches Wahrzeichen von Rio de Janeiro.",
        "desc_hu": "Világhírű art deco stílusú Jézus-szobor a Corcovado-hegyen, Rio de Janeiro ikonikus jelképe.",
        "desc_ro": "Faimoasa statuie Art Deco a lui Isus Hristos de pe muntele Corcovado, un simbol emblematic al orașului Rio de Janeiro.",
        "desc_en": "The world-famous Art Deco statue of Jesus Christ on Mount Corcovado, an iconic symbol of Rio de Janeiro.",
        "facts_de": ["Sie ist 30 Meter hoch.", "Die Armspannweite beträgt 28 Meter.", "1931 fertiggestellt."],
        "facts_hu": ["A szobor 30 méter magas.", "Karjainak fesztávolsága 28 méter.", "1931-ben készült el."],
        "facts_ro": ["Statuia are 30 de metri înălțime.", "Anvergura brațelor este de 28 de metri.", "A fost finalizată în 1931."],
        "facts_en": ["The statue is 30 meters tall.", "Its arms stretch 28 meters wide.", "It was completed in 1931."]
    },
    {
        "id": "br-rj-maracana-landmarks-v2",
        "parent": "BR-RJ",
        "coords": [-43.2302, -22.9121],
        "name_de": "Maracanã-Stadion", "name_hu": "Maracanã Stadion", "name_ro": "Stadionul Maracanã", "name_en": "Maracanã Stadium",
        "desc_de": "Eines der berühmtesten und größten Fußballstadien der Welt, Schauplatz zahlreicher historischer Spiele.",
        "desc_hu": "A világ egyik leghíresebb és legnagyobb futballstadionja, számos történelmi mérkőzés helyszíne.",
        "desc_ro": "Unul dintre cele mai faimoase și mai mari stadioane de fotbal din lume, locul de desfășurare a numeroase meciuri istorice.",
        "desc_en": "One of the most famous and largest football stadiums in the world, the site of numerous historic matches.",
        "facts_de": ["Wurde für die WM 1950 erbaut.", "Bot einst Platz für knapp 200.000 Zuschauer.", "Wurde für Olympia 2016 modernisiert."],
        "facts_hu": ["Az 1950-es világbajnokságra épült.", "Egykor csaknem 200 ezer néző befogadására volt alkalmas.", "A 2016-os olimpiára modernizálták."],
        "facts_ro": ["A fost construit pentru Cupa Mondială din 1950.", "Găzduia odată aproape 200.000 de spectatori.", "A fost modernizat pentru Jocurile Olimpice din 2016."],
        "facts_en": ["Built for the 1950 World Cup.", "Once held nearly 200,000 spectators.", "Modernized for the 2016 Olympics."]
    },
    {
        "id": "br-df-catedral-brasilia-landmarks-v2",
        "parent": "BR-DF",
        "coords": [-47.8745, -15.7983],
        "name_de": "Kathedrale von Brasília", "name_hu": "Brazíliavárosi katedrális", "name_ro": "Catedrala din Brasília", "name_en": "Cathedral of Brasília",
        "desc_de": "Ein Meisterwerk der modernen Architektur von Oscar Niemeyer, bekannt für seine kronenartige Struktur.",
        "desc_hu": "Oscar Niemeyer modern építészeti remekműve, amely koronaszerű szerkezetéről ismert.",
        "desc_ro": "O capodoperă a arhitecturii moderne de Oscar Niemeyer, cunoscută pentru structura sa în formă de coroană.",
        "desc_en": "A masterpiece of modern architecture by Oscar Niemeyer, known for its crown-like structure.",
        "facts_de": ["Entworfen von Oscar Niemeyer.", "Besteht aus 16 Betonsäulen.", "Besitzt riesige Glasmalereien."],
        "facts_hu": ["Oscar Niemeyer tervezte.", "16 ívelt betonoszlopból áll.", "Hatalmas ólomüveg ablakai vannak."],
        "facts_ro": ["Proiectată de Oscar Niemeyer.", "Constă din 16 coloane de beton.", "Are vitralii uriașe."],
        "facts_en": ["Designed by Oscar Niemeyer.", "Consists of 16 concrete columns.", "Features massive stained glass windows."]
    },
    {
        "id": "br-df-palacio-planalto-landmarks-v2",
        "parent": "BR-DF",
        "coords": [-47.8600, -15.7997],
        "name_de": "Palácio do Planalto", "name_hu": "Palácio do Planalto", "name_ro": "Palatul Planalto", "name_en": "Palácio do Planalto",
        "desc_de": "Der offizielle Arbeitsplatz des Präsidenten von Brasilien, entworfen im modernistischen Stil.",
        "desc_hu": "Brazília elnökének hivatalos munkahelye, mely modernista stílusban épült.",
        "desc_ro": "Locul de muncă oficial al președintelui Braziliei, proiectat în stil modernist.",
        "desc_en": "The official workplace of the President of Brazil, designed in a modernist style.",
        "facts_de": ["1960 eingeweiht.", "Am Platz der Drei Gewalten gelegen.", "Entworfen von Oscar Niemeyer."],
        "facts_hu": ["1960-ban avatták fel.", "A Három Hatalom Terén található.", "Oscar Niemeyer tervezte."],
        "facts_ro": ["Inaugurat în 1960.", "Situat în Piața celor Trei Puteri.", "Proiectat de Oscar Niemeyer."],
        "facts_en": ["Inaugurated in 1960.", "Located in the Plaza of the Three Powers.", "Designed by Oscar Niemeyer."]
    },
    {
        "id": "br-df-congresso-nacional-landmarks-v2",
        "parent": "BR-DF",
        "coords": [-47.8641, -15.7992],
        "name_de": "Nationalkongress Brasiliens", "name_hu": "Brazil Nemzeti Kongresszus", "name_ro": "Congresul Național al Braziliei", "name_en": "National Congress of Brazil",
        "desc_de": "Das markante Gebäude der brasilianischen Legislative mit seinen zwei Kuppeln und Zwillingstürmen.",
        "desc_hu": "A brazil törvényhozás feltűnő épülete két kupolájával és ikertornyaival.",
        "desc_ro": "Clădirea impresionantă a puterii legislative braziliene, cu cele două cupole și turnurile sale gemene.",
        "desc_en": "The striking building of the Brazilian legislature, featuring its two domes and twin towers.",
        "facts_de": ["Beheimatet Senat und Abgeordnetenkammer.", "Die konvexe Kuppel gehört zur Abgeordnetenkammer.", "Die konkave Kuppel gehört zum Senat."],
        "facts_hu": ["A Szenátus és a Képviselőház otthona.", "A konvex kupola a Képviselőházé.", "A konkáv kupola a Szenátusé."],
        "facts_ro": ["Găzduiește Senatul și Camera Deputaților.", "Cupola convexă aparține Camerei Deputaților.", "Cupola concavă aparține Senatului."],
        "facts_en": ["Houses the Senate and Chamber of Deputies.", "The convex dome belongs to the Chamber.", "The concave dome belongs to the Senate."]
    },
    {
        "id": "br-sp-ponte-estaiada-landmarks-v2",
        "parent": "BR-SP",
        "coords": [-46.6980, -23.6144],
        "name_de": "Octávio-Frias-de-Oliveira-Brücke", "name_hu": "Octávio Frias de Oliveira híd", "name_ro": "Podul Octávio Frias de Oliveira", "name_en": "Octávio Frias de Oliveira Bridge",
        "desc_de": "Eine berühmte Schrägseilbrücke in São Paulo in Form eines X, ein modernes Symbol der Stadt.",
        "desc_hu": "São Paulo híres, X-alakú ferdekábeles hídja, a város modern szimbóluma.",
        "desc_ro": "Un celebru pod hobanat în formă de X din São Paulo, un simbol modern al orașului.",
        "desc_en": "A famous X-shaped cable-stayed bridge in São Paulo, a modern symbol of the city.",
        "facts_de": ["Eröffnet im Jahr 2008.", "Besitzt zwei gekreuzte Fahrbahnen.", "Ist 138 Meter hoch."],
        "facts_hu": ["2008-ban nyitották meg.", "Két keresztező útpályával rendelkezik.", "138 méter magas."],
        "facts_ro": ["Inaugurat în 2008.", "Are două benzi încrucișate.", "Are 138 de metri înălțime."],
        "facts_en": ["Opened in 2008.", "Features two crossed curved tracks.", "Stands 138 meters tall."]
    },
    {
        "id": "br-sp-masp-landmarks-v2",
        "parent": "BR-SP",
        "coords": [-46.6560, -23.5615],
        "name_de": "Kunstmuseum São Paulo (MASP)", "name_hu": "São Paulo-i Művészeti Múzeum", "name_ro": "Muzeul de Artă din São Paulo", "name_en": "São Paulo Museum of Art",
        "desc_de": "Ein bedeutendes Kunstmuseum in einem schwebend wirkenden brutalistischen Gebäude auf der Avenida Paulista.",
        "desc_hu": "Jelentős művészeti múzeum a Paulista sugárúton, amelynek brutalista épülete mintha lebegne.",
        "desc_ro": "Un important muzeu de artă găzduit într-o clădire brutalistă aparent suspendată de pe Avenida Paulista.",
        "desc_en": "A major art museum housed in a seemingly floating brutalist building on Paulista Avenue.",
        "facts_de": ["Entworfen von Lina Bo Bardi.", "Ruht auf vier roten Säulen.", "Besitzt die wichtigste Kunstsammlung Lateinamerikas."],
        "facts_hu": ["Lina Bo Bardi tervezte.", "Négy piros oszlopon nyugszik.", "Latin-Amerika legfontosabb művészeti gyűjteményével rendelkezik."],
        "facts_ro": ["Proiectat de Lina Bo Bardi.", "Se sprijină pe patru coloane roșii.", "Deține cea mai importantă colecție de artă din America Latină."],
        "facts_en": ["Designed by Lina Bo Bardi.", "Rests on four red pillars.", "Holds Latin America's most important art collection."]
    },
    {
        "id": "br-ba-elevador-lacerda-landmarks-v2",
        "parent": "BR-BA",
        "coords": [-38.5133, -12.9734],
        "name_de": "Elevador Lacerda", "name_hu": "Lacerda felvonó", "name_ro": "Ascensorul Lacerda", "name_en": "Lacerda Elevator",
        "desc_de": "Ein historischer öffentlicher Aufzug in Salvador, der die Oberstadt mit der Unterstadt verbindet.",
        "desc_hu": "Történelmi nyilvános lift Salvadorban, amely a felsővárost köti össze az alsóvárossal.",
        "desc_ro": "Un ascensor public istoric din Salvador care leagă Orașul de Sus cu Orașul de Jos.",
        "desc_en": "A historic public elevator in Salvador connecting the Upper City with the Lower City.",
        "facts_de": ["Eröffnet im Jahr 1873.", "Im Art-déco-Stil renoviert.", "Überwindet einen Höhenunterschied von 72 Metern."],
        "facts_hu": ["1873-ban nyitották meg.", "Art deco stílusban újították fel.", "72 méteres szintkülönbséget küzd le."],
        "facts_ro": ["Deschis în 1873.", "Renovat în stil Art Deco.", "Are o diferență de nivel de 72 de metri."],
        "facts_en": ["Opened in 1873.", "Renovated in an Art Deco style.", "Travels a height of 72 meters."]
    },
    {
        "id": "br-rs-catedral-pedra-landmarks-v2",
        "parent": "BR-RS",
        "coords": [-50.8144, -29.3622],
        "name_de": "Steinkathedrale von Canela", "name_hu": "Canelai Kőkatedrális", "name_ro": "Catedrala de Piatră din Canela", "name_en": "Cathedral of Stone in Canela",
        "desc_de": "Eine beeindruckende gotische Kirche in der Stadt Canela, berühmt für ihre Basaltfassade.",
        "desc_hu": "Lenyűgöző gótikus templom Canela városában, amely bazalt homlokzatáról híres.",
        "desc_ro": "O biserică gotică impresionantă din orașul Canela, faimoasă pentru fațada sa din bazalt.",
        "desc_en": "An impressive Gothic church in the town of Canela, famous for its basalt facade.",
        "facts_de": ["Erbaut im gotischen Stil.", "Der Turm ist 65 Meter hoch.", "Hat ein Glockenspiel mit 12 Bronzeglocken."],
        "facts_hu": ["Gótikus stílusban épült.", "A torony 65 méter magas.", "Harangjátéka 12 bronzharangból áll."],
        "facts_ro": ["Construită în stil gotic.", "Turnul are o înălțime de 65 de metri.", "Are un carillon cu 12 clopote de bronz."],
        "facts_en": ["Built in Gothic style.", "The tower is 65 meters high.", "Features a carillon with 12 bronze bells."]
    },
    {
        "id": "br-rj-museu-amanha-landmarks-v2",
        "parent": "BR-RJ",
        "coords": [-43.1813, -22.8943],
        "name_de": "Museum von Morgen", "name_hu": "A Holnap Múzeuma", "name_ro": "Muzeul Mâinelor", "name_en": "Museum of Tomorrow",
        "desc_de": "Ein futuristisches Wissenschaftsmuseum in Rio de Janeiro, das sich mit nachhaltigen Zukunftsfragen beschäftigt.",
        "desc_hu": "Futurisztikus tudományos múzeum Rio de Janeiróban, amely a fenntartható jövő kérdéseivel foglalkozik.",
        "desc_ro": "Un muzeu științific futurist în Rio de Janeiro, dedicat problemelor de viitor durabil.",
        "desc_en": "A futuristic science museum in Rio de Janeiro focusing on sustainable future questions.",
        "facts_de": ["Entworfen vom Architekten Santiago Calatrava.", "Sieht aus wie ein riesiges Skelett oder Raumschiff.", "Besitzt solarbetriebene, bewegliche Dachflügel."],
        "facts_hu": ["Santiago Calatrava építész tervezte.", "Úgy néz ki, mint egy hatalmas csontváz vagy űrhajó.", "Napenergiával működő, mozgatható tetőszárnyai vannak."],
        "facts_ro": ["Proiectat de arhitectul Santiago Calatrava.", "Arată ca un schelet uriaș sau o navă spațială.", "Are aripi pe acoperiș mobile alimentate cu energie solară."],
        "facts_en": ["Designed by architect Santiago Calatrava.", "Looks like a giant skeleton or spaceship.", "Features solar-powered, movable roof wings."]
    },
    {
        "id": "br-sp-santuario-aparecida-landmarks-v2",
        "parent": "BR-SP",
        "coords": [-45.2341, -22.8464],
        "name_de": "Nationalheiligtum Unserer Lieben Frau von Aparecida", "name_hu": "Aparecidai Miasszonyunk Nemzeti Szentélye", "name_ro": "Sanctuarul Național al Maicii Domnului din Aparecida", "name_en": "National Sanctuary of Our Lady of Aparecida",
        "desc_de": "Die zweitgrößte katholische Kirche der Welt und das wichtigste Pilgerziel in Brasilien.",
        "desc_hu": "A világ második legnagyobb katolikus temploma és a legfontosabb zarándokhely Brazíliában.",
        "desc_ro": "A doua cea mai mare biserică catolică din lume și cea mai importantă destinație de pelerinaj din Brazilia.",
        "desc_en": "The second-largest Catholic church in the world and the most important pilgrimage site in Brazil.",
        "facts_de": ["Fasst bis zu 45.000 Gläubige.", "Ein großer Turm ist über 100 Meter hoch.", "Im Jahr 1980 von Papst Johannes Paul II. geweiht."],
        "facts_hu": ["Akár 45 000 hívőt is képes befogadni.", "Egyik nagy tornya több mint 100 méter magas.", "1980-ban szentelte fel II. János Pál pápa."],
        "facts_ro": ["Poate găzdui până la 45.000 de credincioși.", "Un turn mare are peste 100 de metri înălțime.", "Sfințită în 1980 de Papa Ioan Paul al II-lea."],
        "facts_en": ["Holds up to 45,000 worshippers.", "A large tower is over 100 meters tall.", "Consecrated in 1980 by Pope John Paul II."]
    },
    {
        "id": "br-sc-ponte-hercilio-luz-landmarks-v2",
        "parent": "BR-SC",
        "coords": [-48.5658, -27.5935],
        "name_de": "Hercílio-Luz-Brücke", "name_hu": "Hercílio Luz híd", "name_ro": "Podul Hercílio Luz", "name_en": "Hercílio Luz Bridge",
        "desc_de": "Die älteste Hängebrücke Brasiliens, die die Insel Santa Catarina mit dem Festland verbindet.",
        "desc_hu": "Brazília legrégebbi függőhídja, amely Santa Catarina szigetét köti össze a szárazfölddel.",
        "desc_ro": "Cel mai vechi pod suspendat din Brazilia, conectând insula Santa Catarina de continent.",
        "desc_en": "The oldest suspension bridge in Brazil, connecting Santa Catarina Island to the mainland.",
        "facts_de": ["1926 fertiggestellt.", "Hat eine Länge von 821 Metern.", "Nach jahrzehntelanger Schließung 2019 wiedereröffnet."],
        "facts_hu": ["1926-ban épült.", "Hossza 821 méter.", "Évtizedes lezárás után 2019-ben nyitották meg újra."],
        "facts_ro": ["Finalizat în 1926.", "Are o lungime de 821 de metri.", "Redeschis în 2019 după decenii de închidere."],
        "facts_en": ["Completed in 1926.", "Has a length of 821 meters.", "Reopened in 2019 after decades of closure."]
    },
    {
        "id": "br-sp-edificio-copan-landmarks-v2",
        "parent": "BR-SP",
        "coords": [-46.6433, -23.5447],
        "name_de": "Edifício Copan", "name_hu": "Copan épület", "name_ro": "Clădirea Copan", "name_en": "Edifício Copan",
        "desc_de": "Ein geschwungenes, riesiges Wohnhaus im Zentrum von São Paulo, entworfen von Oscar Niemeyer.",
        "desc_hu": "Hatalmas, hullámzó vonalú lakóépület São Paulo központjában, Oscar Niemeyer alkotása.",
        "desc_ro": "O uriașă clădire rezidențială curbată din centrul orașului São Paulo, proiectată de Oscar Niemeyer.",
        "desc_en": "A massive sweeping residential building in downtown São Paulo, designed by Oscar Niemeyer.",
        "facts_de": ["Es hat über 1.100 Wohnungen.", "Gilt als das größte Wohngebäude in Brasilien.", "Es besitzt sogar eine eigene Postleitzahl."],
        "facts_hu": ["Több mint 1100 lakás található benne.", "Brazília legnagyobb lakóépületeként tartják számon.", "Saját irányítószámmal is rendelkezik."],
        "facts_ro": ["Are peste 1.100 de apartamente.", "Considerată cea mai mare clădire rezidențială din Brazilia.", "Are chiar propriul său cod poștal."],
        "facts_en": ["It has over 1,100 apartments.", "Considered the largest residential building in Brazil.", "It even has its own zip code."]
    },
    {
        "id": "br-df-palacio-alvorada-landmarks-v2",
        "parent": "BR-DF",
        "coords": [-47.8222, -15.7925],
        "name_de": "Palácio da Alvorada", "name_hu": "Alvorada Palota", "name_ro": "Palatul Alvorada", "name_en": "Palácio da Alvorada",
        "desc_de": "Die offizielle Residenz des brasilianischen Präsidenten, bekannt für ihre eleganten, weißen Säulen.",
        "desc_hu": "A brazil elnök hivatalos rezidenciája, amely elegáns fehér oszlopairól ismert.",
        "desc_ro": "Reședința oficială a președintelui brazilian, renumită pentru coloanele sale elegante de culoare albă.",
        "desc_en": "The official residence of the Brazilian President, known for its elegant white columns.",
        "facts_de": ["Das erste fertiggestellte Gebäude in Brasília.", "Der Name bedeutet „Palast der Morgenröte“.", "Entworfen von Oscar Niemeyer."],
        "facts_hu": ["Az elsőként elkészült épület Brazíliavárosban.", "A neve „Hajnalpalota”-t jelent.", "Oscar Niemeyer tervezte."],
        "facts_ro": ["Prima clădire finalizată din Brasília.", "Numele înseamnă „Palatul Zorilor”.", "Proiectat de Oscar Niemeyer."],
        "facts_en": ["The first completed building in Brasília.", "The name means 'Palace of Dawn'.", "Designed by Oscar Niemeyer."]
    },
    {
        "id": "br-sc-farol-santa-marta-landmarks-v2",
        "parent": "BR-SC",
        "coords": [-48.8131, -28.6014],
        "name_de": "Leuchtturm von Santa Marta", "name_hu": "Santa Marta világítótorony", "name_ro": "Farul din Santa Marta", "name_en": "Santa Marta Lighthouse",
        "desc_de": "Ein malerischer Leuchtturm in Laguna, einer der leistungsstärksten in ganz Südamerika.",
        "desc_hu": "Festői világítótorony Lagunában, amely az egyik legerősebb egész Dél-Amerikában.",
        "desc_ro": "Un far pitoresc din Laguna, unul dintre cele mai puternice din toată America de Sud.",
        "desc_en": "A picturesque lighthouse in Laguna, one of the most powerful in all of South America.",
        "facts_de": ["Erbaut im Jahr 1891.", "Ist 29 Meter hoch.", "Die Linsen wurden aus Frankreich importiert."],
        "facts_hu": ["1891-ben épült.", "29 méter magas.", "A lencséit Franciaországból hozták."],
        "facts_ro": ["Construit în 1891.", "Are 29 de metri înălțime.", "Lentilele au fost importate din Franța."],
        "facts_en": ["Built in 1891.", "Is 29 meters high.", "The lenses were imported from France."]
    },
    {
        "id": "br-sp-monumento-bandeiras-landmarks-v2",
        "parent": "BR-SP",
        "coords": [-46.6601, -23.5802],
        "name_de": "Monument der Bandeirantes", "name_hu": "A Bandeirantek emlékműve", "name_ro": "Monumentul Bandeirantes", "name_en": "Monument to the Bandeiras",
        "desc_de": "Eine riesige Granitskulptur im Ibirapuera-Park, die an die Expeditionen ins Innere Brasiliens erinnert.",
        "desc_hu": "Hatalmas gránitszobor az Ibirapuera parkban, amely a Brazília belsejébe indított expedícióknak állít emléket.",
        "desc_ro": "O uriașă sculptură de granit în Parcul Ibirapuera care comemorează expedițiile în interiorul Braziliei.",
        "desc_en": "A giant granite sculpture in Ibirapuera Park, commemorating the expeditions into the interior of Brazil.",
        "facts_de": ["Geschaffen vom Bildhauer Victor Brecheret.", "Besteht aus massiven Granitblöcken.", "Wiegt insgesamt etwa 50 Tonnen."],
        "facts_hu": ["Victor Brecheret szobrász alkotása.", "Hatalmas gránittömbökből áll.", "Összsúlya körülbelül 50 tonna."],
        "facts_ro": ["Creat de sculptorul Victor Brecheret.", "Se compune din blocuri masive de granit.", "Cântărește în total aproximativ 50 de tone."],
        "facts_en": ["Created by sculptor Victor Brecheret.", "Consists of massive granite blocks.", "Weighs a total of about 50 tons."]
    },
    {
        "id": "br-pr-estufa-curitiba-landmarks-v2",
        "parent": "BR-PR",
        "coords": [-49.2393, -25.4428],
        "name_de": "Gewächshaus des Botanischen Gartens", "name_hu": "Botanikus kert üvegháza", "name_ro": "Sera Grădinii Botanice din Curitiba", "name_en": "Greenhouse of the Botanical Garden",
        "desc_de": "Ein wunderschönes Gewächshaus im Art-nouveau-Stil, das zum architektonischen Symbol von Curitiba wurde.",
        "desc_hu": "Gyönyörű art nouveau stílusú üvegház, amely Curitiba építészeti szimbólumává vált.",
        "desc_ro": "O seră frumoasă în stil Art Nouveau care a devenit simbolul arhitectural al orașului Curitiba.",
        "desc_en": "A beautiful Art Nouveau-style greenhouse that became the architectural symbol of Curitiba.",
        "facts_de": ["Das Design wurde vom Londoner Crystal Palace inspiriert.", "1991 eröffnet.", "Beherbergt viele tropische Pflanzen."],
        "facts_hu": ["Kialakítását a londoni Kristálypalota ihlette.", "1991-ben nyitották meg.", "Számos trópusi növénynek ad otthont."],
        "facts_ro": ["Designul a fost inspirat de Palatul de Cristal din Londra.", "Deschis în 1991.", "Adăpostește multe plante tropicale."],
        "facts_en": ["The design was inspired by London's Crystal Palace.", "Opened in 1991.", "Houses many tropical plants."]
    },
    {
        "id": "br-sp-mercadao-landmarks-v2",
        "parent": "BR-SP",
        "coords": [-46.6291, -23.5422],
        "name_de": "Städtischer Markt von São Paulo", "name_hu": "São Paulo-i Városi Piac", "name_ro": "Piața Municipală din São Paulo", "name_en": "Municipal Market of São Paulo",
        "desc_de": "Ein berühmtes historisches Marktgebäude, bekannt für riesige Mortadella-Sandwiches und schöne Buntglasfenster.",
        "desc_hu": "Híres történelmi piacépület, amely hatalmas mortadellás szendvicseiről és gyönyörű ólomüveg ablakairól ismert.",
        "desc_ro": "O clădire de piață istorică faimoasă, cunoscută pentru sandvișurile uriașe cu mortadella și vitraliile frumoase.",
        "desc_en": "A famous historic market building known for giant mortadella sandwiches and beautiful stained glass windows.",
        "facts_de": ["Im Jahr 1933 eröffnet.", "Im Stil des Eklektizismus erbaut.", "Die Buntglasfenster stammen von Conrado Sorgenicht."],
        "facts_hu": ["1933-ban nyitották meg.", "Eklektikus stílusban épült.", "Az ólomüveg ablakok Conrado Sorgenicht munkái."],
        "facts_ro": ["Deschis în 1933.", "Construit în stil eclectic.", "Vitraliile au fost realizate de Conrado Sorgenicht."],
        "facts_en": ["Opened in 1933.", "Built in the eclectic style.", "The stained glass windows are by Conrado Sorgenicht."]
    },
    {
        "id": "br-sp-obelisco-ibirapuera-landmarks-v2",
        "parent": "BR-SP",
        "coords": [-46.6575, -23.5855],
        "name_de": "Obelisk von Ibirapuera", "name_hu": "Ibirapuera obeliszk", "name_ro": "Obeliscul din Ibirapuera", "name_en": "Obelisk of São Paulo",
        "desc_de": "Ein beeindruckendes Monument zur Erinnerung an die konstitutionelle Revolution von 1932 in São Paulo.",
        "desc_hu": "Látványos emlékmű, amely az 1932-es São Paulo-i alkotmányos forradalomnak állít emléket.",
        "desc_ro": "Un monument impresionant de comemorare a Revoluției Constituționale din 1932 din São Paulo.",
        "desc_en": "An impressive monument commemorating the 1932 Constitutionalist Revolution in São Paulo.",
        "facts_de": ["Mit 72 Metern das größte Denkmal der Stadt.", "Besteht aus reinem Travertin-Marmor.", "Dient auch als Mausoleum."],
        "facts_hu": ["72 méteres magasságával a város legnagyobb műemléke.", "Tiszta travertin márványból készült.", "Mauzóleumként is szolgál."],
        "facts_ro": ["Cu 72 de metri, este cel mai mare monument din oraș.", "Este alcătuit din marmură pură de travertin.", "Servește și ca mausoleu."],
        "facts_en": ["At 72 meters, it is the city's largest monument.", "Made of pure travertine marble.", "It also serves as a mausoleum."]
    },
    {
        "id": "br-rj-theatro-municipal-landmarks-v2",
        "parent": "BR-RJ",
        "coords": [-43.1764, -22.9088],
        "name_de": "Stadttheater von Rio de Janeiro", "name_hu": "Rio de Janeiro-i Városi Színház", "name_ro": "Teatrul Municipal din Rio de Janeiro", "name_en": "Municipal Theater of Rio de Janeiro",
        "desc_de": "Eines der schönsten Opernhäuser Brasiliens im eklektischen Stil nahe dem Zentrum von Rio.",
        "desc_hu": "Brazília egyik legszebb, eklektikus stílusú operaháza Rio központjának közelében.",
        "desc_ro": "Una dintre cele mai frumoase opere din Brazilia, în stil eclectic, situată în apropierea centrului orașului Rio.",
        "desc_en": "One of Brazil's most beautiful opera houses, built in an eclectic style near the center of Rio.",
        "facts_de": ["1909 eingeweiht.", "Architektonisch von der Pariser Opéra Garnier inspiriert.", "Fasst mehr als 2.200 Zuschauer."],
        "facts_hu": ["1909-ben avatták fel.", "Építészetileg a párizsi Opéra Garnier ihlette.", "Több mint 2200 néző befogadására alkalmas."],
        "facts_ro": ["Inaugurat în 1909.", "Din punct de vedere arhitectural, este inspirat de Opera Garnier din Paris.", "Găzduiește peste 2.200 de spectatori."],
        "facts_en": ["Inaugurated in 1909.", "Architecturally inspired by the Palais Garnier in Paris.", "Seats more than 2,200 spectators."]
    },
    {
        "id": "br-rj-arcos-lapa-landmarks-v2",
        "parent": "BR-RJ",
        "coords": [-43.1798, -22.9137],
        "name_de": "Aquädukt von Carioca (Arcos da Lapa)", "name_hu": "Carioca vízvezeték (Arcos da Lapa)", "name_ro": "Apeductul Carioca (Arcos da Lapa)", "name_en": "Carioca Aqueduct (Arcos da Lapa)",
        "desc_de": "Ein riesiges historisches Aquädukt im Kolonialstil, das heute als Straßenbahnbrücke im Viertel Lapa dient.",
        "desc_hu": "Hatalmas, gyarmati stílusú történelmi vízvezeték, amely ma villamoshídként szolgál a Lapa negyedben.",
        "desc_ro": "Un imens apeduct istoric în stil colonial care servește acum ca pod de tramvai în cartierul Lapa.",
        "desc_en": "A massive historic colonial-style aqueduct that now serves as a tramway bridge in the Lapa neighborhood.",
        "facts_de": ["Mitte des 18. Jahrhunderts erbaut.", "Besteht aus 42 massiven Bögen.", "Heute fährt die Straßenbahn von Santa Teresa darüber."],
        "facts_hu": ["A 18. század közepén épült.", "42 masszív ívből áll.", "Ma a Santa Teresa-i villamos jár rajta."],
        "facts_ro": ["Construit la mijlocul secolului al XVIII-lea.", "Se compune din 42 de arce masive.", "Astăzi tramvaiul Santa Teresa trece peste el."],
        "facts_en": ["Built in the mid-18th century.", "Consists of 42 massive arches.", "Today, the Santa Teresa tram runs across it."]
    },
    {
        "id": "br-mg-mineirao-landmarks-v2",
        "parent": "BR-MG",
        "coords": [-43.9714, -19.8656],
        "name_de": "Mineirão-Stadion", "name_hu": "Mineirão Stadion", "name_ro": "Stadionul Mineirão", "name_en": "Mineirão Stadium",
        "desc_de": "Das größte Fußballstadion im Bundesstaat Minas Gerais und einer der wichtigsten Sporttempel Brasiliens.",
        "desc_hu": "Minas Gerais állam legnagyobb labdarúgó-stadionja és Brazília egyik legfontosabb sportközpontja.",
        "desc_ro": "Cel mai mare stadion de fotbal din statul Minas Gerais și unul dintre cele mai importante temple sportive din Brazilia.",
        "desc_en": "The largest football stadium in the state of Minas Gerais and one of Brazil's most important sports temples.",
        "facts_de": ["Eröffnet 1965.", "Wurde für die WM 2014 komplett saniert.", "Hier fand das denkwürdige 7:1-Spiel zwischen Deutschland und Brasilien statt."],
        "facts_hu": ["1965-ben nyitották meg.", "A 2014-es világbajnokságra teljesen felújították.", "Itt zajlott a nevezetes 7-1-es német-brazil mérkőzés."],
        "facts_ro": ["Deschis în 1965.", "A fost complet renovat pentru Cupa Mondială din 2014.", "Aici a avut loc memorabilul meci 7-1 dintre Germania și Brazilia."],
        "facts_en": ["Opened in 1965.", "Completely renovated for the 2014 World Cup.", "Site of the memorable 7-1 match between Germany and Brazil."]
    },
    {
        "id": "br-df-torre-tv-landmarks-v2",
        "parent": "BR-DF",
        "coords": [-47.8931, -15.7906],
        "name_de": "Fernsehturm von Brasília", "name_hu": "Brazíliavárosi TV-torony", "name_ro": "Turnul de Televiziune din Brasília", "name_en": "Brasília TV Tower",
        "desc_de": "Ein markanter Sendeturm, der einen der besten Panoramablicke über die geometrisch geplante Hauptstadt bietet.",
        "desc_hu": "Karakteres adótorony, amely az egyik legjobb panorámát nyújtja a geometrikusan tervezett fővárosra.",
        "desc_ro": "Un turn de transmisie impresionant, care oferă una dintre cele mai bune vederi panoramice asupra capitalei planificate geometric.",
        "desc_en": "A striking broadcast tower offering one of the best panoramic views of the geometrically planned capital.",
        "facts_de": ["Ist 224 Meter hoch.", "Entworfen vom Stadtplaner Lúcio Costa.", "Besitzt eine Aussichtsplattform auf 75 Metern Höhe."],
        "facts_hu": ["224 méter magas.", "Lúcio Costa várostervező alkotta meg.", "A kilátóterasza 75 méteres magasságban van."],
        "facts_ro": ["Are o înălțime de 224 de metri.", "Proiectat de urbanistul Lúcio Costa.", "Are o platformă de observare la o înălțime de 75 de metri."],
        "facts_en": ["Stands 224 meters tall.", "Designed by urban planner Lúcio Costa.", "Has an observation deck at a height of 75 meters."]
    },
    {
        "id": "br-pb-farol-cabo-branco-landmarks-v2",
        "parent": "BR-PB",
        "coords": [-34.7958, -7.1481],
        "name_de": "Leuchtturm am Cabo Branco", "name_hu": "Cabo Branco világítótorony", "name_ro": "Farul de pe Cabo Branco", "name_en": "Cabo Branco Lighthouse",
        "desc_de": "Ein einzigartiger dreieckiger Leuchtturm, der den östlichsten Punkt des amerikanischen Festlandes markiert.",
        "desc_hu": "Egyedülálló háromszög alakú világítótorony, amely az amerikai kontinens szárazföldjének legkeletibb pontját jelöli.",
        "desc_ro": "Un far triunghiular unic care marchează cel mai estic punct al continentului american.",
        "desc_en": "A unique triangular lighthouse marking the easternmost point of the American mainland.",
        "facts_de": ["Eröffnet im Jahr 1972.", "Erinnert in seiner Form an eine Sisalpflanze.", "Steht auf einer steilen Klippe am Atlantik."],
        "facts_hu": ["1972-ben adták át.", "Formája egy szizálnövényre emlékeztet.", "Meredek sziklán áll az Atlanti-óceán partján."],
        "facts_ro": ["Deschis în 1972.", "Forma sa amintește de o plantă de sisal.", "Stă pe o stâncă abruptă lângă Oceanul Atlantic."],
        "facts_en": ["Opened in 1972.", "Its shape resembles a sisal plant.", "Stands on a steep cliff by the Atlantic Ocean."]
    },
    {
        "id": "br-df-santuario-dom-bosco-landmarks-v2",
        "parent": "BR-DF",
        "coords": [-47.8941, -15.8055],
        "name_de": "Heiligtum Dom Bosco", "name_hu": "Dom Bosco Szentély", "name_ro": "Sanctuarul Dom Bosco", "name_en": "Sanctuary of Dom Bosco",
        "desc_de": "Eine beeindruckende Kirche in Brasília, berühmt für ihre riesigen blauen Buntglasfenster, die eine mystische Atmosphäre schaffen.",
        "desc_hu": "Látványos templom Brazíliavárosban, amely hatalmas kék ólomüveg ablakairól és azok misztikus hangulatáról híres.",
        "desc_ro": "O biserică impresionantă din Brasília, renumită pentru ferestrele sale uriașe de vitralii albastre care creează o atmosferă mistică.",
        "desc_en": "An impressive church in Brasília, famous for its giant blue stained glass windows that create a mystical atmosphere.",
        "facts_de": ["Erbaut zu Ehren des Heiligen Johannes Bosco.", "Besteht aus 80 Betonsäulen.", "Der massive Kronleuchter enthält über 7.000 Stücke Muranoglas."],
        "facts_hu": ["Bosco Szent János tiszteletére épült.", "80 betonoszlopból áll.", "Hatalmas csillárja több mint 7000 muranói üvegdarabot tartalmaz."],
        "facts_ro": ["Construită în onoarea Sfântului Ioan Bosco.", "Se compune din 80 de coloane de beton.", "Candelabrul masiv conține peste 7.000 de piese din sticlă de Murano."],
        "facts_en": ["Built in honor of Saint John Bosco.", "Consists of 80 concrete columns.", "The massive chandelier contains over 7,000 pieces of Murano glass."]
    },
    {
        "id": "br-sp-estacao-luz-landmarks-v2",
        "parent": "BR-SP",
        "coords": [-46.6349, -23.5350],
        "name_de": "Bahnhof Luz", "name_hu": "Luz pályaudvar", "name_ro": "Gara Luz", "name_en": "Luz Station",
        "desc_de": "Ein prachtvoller historischer Bahnhof, der aus in Großbritannien vorgefertigten Teilen zusammengesetzt wurde.",
        "desc_hu": "Pompás történelmi pályaudvar, amelyet Nagy-Britanniában előre gyártott elemekből állítottak össze.",
        "desc_ro": "O gară istorică magnifică asamblată din piese prefabricate în Marea Britanie.",
        "desc_en": "A magnificent historic railway station assembled from prefabricated parts made in the UK.",
        "facts_de": ["1901 in São Paulo eingeweiht.", "Inspiriert vom viktorianischen Baustil.", "Beherbergt das Museum der portugiesischen Sprache."],
        "facts_hu": ["1901-ben adták át São Paulóban.", "A viktoriánus építészeti stílus ihlette.", "Itt található a Portugál Nyelv Múzeuma."],
        "facts_ro": ["Inaugurată în São Paulo în 1901.", "Inspirată de stilul arhitectural victorian.", "Găzduiește Muzeul Limbii Portugheze."],
        "facts_en": ["Inaugurated in São Paulo in 1901.", "Inspired by Victorian architectural styles.", "Houses the Museum of the Portuguese Language."]
    },
    {
        "id": "br-pr-opera-arame-landmarks-v2",
        "parent": "BR-PR",
        "coords": [-49.2778, -25.3824],
        "name_de": "Drahtoper", "name_hu": "Drót-opera", "name_ro": "Opera de Sârmă", "name_en": "Wire Opera House",
        "desc_de": "Ein einzigartiges Rundtheater aus Stahlrohren und Polycarbonat, erbaut inmitten eines ehemaligen Steinbruchs.",
        "desc_hu": "Egyedi körszínház, amely acélcsövekből és polikarbonátból épült egykori kőbánya területén.",
        "desc_ro": "Un teatru circular unic din tuburi de oțel și policarbonat, construit în mijlocul unei foste cariere de piatră.",
        "desc_en": "A unique circular theater made of steel tubes and polycarbonate, built in the middle of a former quarry.",
        "facts_de": ["Wurde in nur 75 Tagen erbaut.", "Im Jahr 1992 eröffnet.", "Ist über eine Stegbrücke über einen kleinen See erreichbar."],
        "facts_hu": ["Mindössze 75 nap alatt épült fel.", "1992-ben nyitották meg.", "Egy kis tó feletti hídon közelíthető meg."],
        "facts_ro": ["A fost construită în doar 75 de zile.", "Deschisă în 1992.", "Este accesibilă printr-o pasarelă peste un mic lac."],
        "facts_en": ["Was built in just 75 days.", "Opened in 1992.", "Accessed via a footbridge over a small lake."]
    },
    {
        "id": "br-rj-palacio-quitandinha-landmarks-v2",
        "parent": "BR-RJ",
        "coords": [-43.2081, -22.5278],
        "name_de": "Quitandinha-Palast", "name_hu": "Quitandinha Palota", "name_ro": "Palatul Quitandinha", "name_en": "Quitandinha Palace",
        "desc_de": "Ein riesiges ehemaliges Luxushotel und Casino im normannisch-französischen Stil in der Bergstadt Petrópolis.",
        "desc_hu": "Egykori hatalmas luxusszálloda és kaszinó normann-francia stílusban a hegyvidéki Petrópolis városában.",
        "desc_ro": "Un imens fost hotel de lux și cazinou în stil normand-francez din orașul montan Petrópolis.",
        "desc_en": "A huge former luxury hotel and casino built in a Norman-French style in the mountain city of Petrópolis.",
        "facts_de": ["1944 als größtes Hotel-Casino Südamerikas eröffnet.", "Das Casino wurde nur 2 Jahre nach Eröffnung illegal.", "Hat ein 10 Meter tiefes beheiztes Schwimmbad."],
        "facts_hu": ["1944-ben nyílt meg Dél-Amerika legnagyobb kaszinójaként.", "A kaszinó mindössze 2 év után illegális lett.", "Egy 10 méter mély fűtött úszómedencéje van."],
        "facts_ro": ["Deschis în 1944 ca cel mai mare cazinou hotelier din America de Sud.", "Cazinoul a devenit ilegal la doar 2 ani de la deschidere.", "Are o piscină încălzită adâncă de 10 metri."],
        "facts_en": ["Opened in 1944 as South America's largest hotel-casino.", "The casino became illegal just 2 years after opening.", "Has a 10-meter deep heated swimming pool."]
    },
    {
        "id": "br-ba-basilica-bonfim-landmarks-v2",
        "parent": "BR-BA",
        "coords": [-38.5080, -12.9238],
        "name_de": "Basilika von Senhor do Bonfim", "name_hu": "A Jóistent dicsőítő bazilika", "name_ro": "Bazilica Domnului Bonfim", "name_en": "Basilica of Nosso Senhor do Bonfim",
        "desc_de": "Die berühmteste katholische Kirche in Salvador da Bahia, bekannt für das Fest der rituellen Treppenwaschung.",
        "desc_hu": "Salvador da Bahia leghíresebb katolikus temploma, amely rituális lépcsőmosási ünnepéről ismert.",
        "desc_ro": "Cea mai faimoasă biserică catolică din Salvador da Bahia, cunoscută pentru sărbătoarea spălării rituale a scărilor.",
        "desc_en": "The most famous Catholic church in Salvador da Bahia, known for the festival of the ritual washing of the steps.",
        "facts_de": ["Im 18. Jahrhundert erbaut.", "Der Zaun ist mit tausenden bunten Wunschbändern geschmückt.", "Verbindet katholische und Candomblé-Traditionen."],
        "facts_hu": ["A 18. században épült.", "Kerítését több ezer színes kívánságszalag díszíti.", "Ötvözi a katolikus és a candomblé hagyományokat."],
        "facts_ro": ["Construită în secolul al XVIII-lea.", "Gardul este decorat cu mii de panglici colorate cu dorințe.", "Combină tradițiile catolice și Candomblé."],
        "facts_en": ["Built in the 18th century.", "The fence is adorned with thousands of colorful wish ribbons.", "Combines Catholic and Candomblé traditions."]
    },
    {
        "id": "br-sc-cristo-luz-landmarks-v2",
        "parent": "BR-SC",
        "coords": [-48.6433, -26.9858],
        "name_de": "Monument Cristo Luz", "name_hu": "Cristo Luz emlékmű", "name_ro": "Monumentul Cristo Luz", "name_en": "Cristo Luz Monument",
        "desc_de": "Eine beeindruckende Christusstatue in Balneário Camboriú, die nachts farbig leuchtet und einen Strahl auf die Stadt wirft.",
        "desc_hu": "Látványos Krisztus-szobor Balneário Camboriúban, amely éjszaka színesen világít, és fényt vet a városra.",
        "desc_ro": "O statuie impresionantă a lui Hristos din Balneário Camboriú, care luminează în culori noaptea și proiectează o rază asupra orașului.",
        "desc_en": "An impressive Christ statue in Balneário Camboriú that lights up in colors at night and casts a beam onto the city.",
        "facts_de": ["Im Jahr 1997 fertiggestellt.", "Die Statue ist 33 Meter hoch.", "Die Farben der Beleuchtung wechseln je nach Wochentag."],
        "facts_hu": ["1997-ben készült el.", "A szobor 33 méter magas.", "A kivilágítás színe a hét napjaitól függően változik."],
        "facts_ro": ["Finalizată în 1997.", "Statuia are 33 de metri înălțime.", "Culorile iluminării se schimbă în funcție de ziua săptămânii."],
        "facts_en": ["Completed in 1997.", "The statue is 33 meters high.", "The colors of the illumination change depending on the day of the week."]
    }
]

out = 'import type { POI } from "./poi";\n\nexport const poiExtraBrazilLandmarksV2: POI[] = [\n'

for i, p in enumerate(pois):
    out += '  {\n'
    out += f'    id: "{p["id"]}",\n'
    out += f'    type: "landmark",\n'
    out += f'    parent: "{p["parent"]}",\n'
    out += f'    coords: [{p["coords"][0]}, {p["coords"][1]}],\n'
    
    out += '    name: {\n'
    out += f'      de: {json.dumps(p["name_de"])},\n'
    out += f'      hu: {json.dumps(p["name_hu"])},\n'
    out += f'      ro: {json.dumps(p["name_ro"])},\n'
    out += f'      en: {json.dumps(p["name_en"])}\n'
    out += '    },\n'
    
    out += '    description: {\n'
    out += f'      de: {json.dumps(p["desc_de"])},\n'
    out += f'      hu: {json.dumps(p["desc_hu"])},\n'
    out += f'      ro: {json.dumps(p["desc_ro"])},\n'
    out += f'      en: {json.dumps(p["desc_en"])}\n'
    out += '    },\n'
    
    out += '    facts: {\n'
    out += f'      de: {json.dumps(p["facts_de"])},\n'
    out += f'      hu: {json.dumps(p["facts_hu"])},\n'
    out += f'      ro: {json.dumps(p["facts_ro"])},\n'
    out += f'      en: {json.dumps(p["facts_en"])}\n'
    out += '    }\n'
    
    out += '  }'
    if i < len(pois) - 1:
        out += ','
    out += '\n'

out += '];\n'

with open('lib/visualLab/data/poiExtraBrazilLandmarksV2.ts', 'w', encoding='utf-8') as f:
    f.write(out)

