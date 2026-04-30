import json
import random

pois = []

def add_poi(poi_id, parent, lon, lat, name_de, name_hu, name_ro, name_en, desc_de, desc_hu, desc_ro, desc_en, f_de, f_hu, f_ro, f_en, p_type="historical"):
    pois.append({
        "id": f"{p_type}-{poi_id}-extra",
        "type": p_type,
        "parent": parent,
        "coords": [lon, lat],
        "name": {
            "de": name_de,
            "hu": name_hu,
            "ro": name_ro,
            "en": name_en
        },
        "description": {
            "de": desc_de,
            "hu": desc_hu,
            "ro": desc_ro,
            "en": desc_en
        },
        "facts": {
            "de": f_de,
            "hu": f_hu,
            "ro": f_ro,
            "en": f_en
        }
    })

# Vaduz (LI-010)
add_poi("vaduz-castle-view", "LI-010", 9.5255, 47.1396,
        "Schloss Vaduz (Aussichtspunkt)", "Vaduzi kastély (kilátópont)", "Castelul Vaduz (Punct de belvedere)", "Vaduz Castle (Viewpoint)",
        "Das Wahrzeichen von Liechtenstein und Sitz der Fürstenfamilie (nur von außen zu besichtigen).",
        "Liechtenstein jelképe és a hercegi család székhelye (csak kívülről tekinthető meg).",
        "Simbolul Liechtensteinului și reședința familiei princiare (poate fi văzut doar din exterior).",
        "The landmark of Liechtenstein and residence of the princely family (can only be viewed from the outside).",
        ["Sitz der Fürstenfamilie", "Wahrzeichen", "12. Jahrhundert"],
        ["Hercegi család székhelye", "Jelkép", "12. század"],
        ["Reședința familiei princiare", "Simbol", "Secolul 12"],
        ["Residence of the princely family", "Landmark", "12th century"])

add_poi("rotes-haus-vaduz", "LI-010", 9.5225, 47.1444,
        "Rotes Haus", "Vörös Ház", "Casa Roșie", "Red House",
        "Ein markantes historisches Gebäude in Vaduz mit einem alten Treppengiebel.",
        "Egy jellegzetes történelmi épület Vaduzban, régi lépcsős oromzattal.",
        "O clădire istorică impresionantă din Vaduz, cu un fronton în trepte.",
        "A striking historical building in Vaduz with an old stepped gable.",
        ["Treppengiebel", "Weinberg", "Mittelalterlich"],
        ["Lépcsős oromzat", "Szőlőhegy", "Középkori"],
        ["Fronton în trepte", "Podgorie", "Medieval"],
        ["Stepped gable", "Vineyard", "Medieval"])

add_poi("alte-rheinbrucke-vaduz", "LI-010", 9.5113, 47.1328,
        "Alte Rheinbrücke", "Régi Rajna-híd", "Vechiul Pod peste Rin", "Old Rhine Bridge",
        "Eine historische Holzbrücke über den Rhein, die Vaduz mit Sevelen (Schweiz) verbindet.",
        "Történelmi fahíd a Rajna felett, amely Vaduzt köti össze a svájci Sevelennel.",
        "Un pod istoric din lemn peste Rin, care leagă Vaduz de Sevelen (Elveția).",
        "A historic wooden bridge over the Rhine connecting Vaduz with Sevelen (Switzerland).",
        ["Holzbrücke", "Grenzbrücke", "Erbaut 1901"],
        ["Fahíd", "Határhíd", "Épült 1901-ben"],
        ["Pod de lemn", "Pod de graniță", "Construit în 1901"],
        ["Wooden bridge", "Border bridge", "Built in 1901"])

add_poi("rathaus-vaduz", "LI-010", 9.5218, 47.1402,
        "Rathaus Vaduz", "Vaduzi Városháza", "Primăria Vaduz", "Vaduz Town Hall",
        "Das Verwaltungsgebäude der Hauptstadt mit sehenswerten Fresken an der Fassade.",
        "A főváros közigazgatási épülete, melynek homlokzatán látványos freskók találhatók.",
        "Clădirea administrativă a capitalei, cu fresce remarcabile pe fațadă.",
        "The administrative building of the capital with notable frescoes on the facade.",
        ["Fresken", "Gemeindeverwaltung", "Zentrum"],
        ["Freskók", "Közigazgatás", "Központ"],
        ["Fresce", "Administrație", "Centru"],
        ["Frescoes", "Administration", "Center"])

add_poi("landesmuseum-liechtenstein", "LI-010", 9.5222, 47.1388,
        "Liechtensteinisches Landesmuseum", "Liechtensteini Nemzeti Múzeum", "Muzeul Național Liechtenstein", "Liechtenstein National Museum",
        "Ein Museum, das die Geschichte, Kultur und Naturgeschichte des Fürstentums präsentiert.",
        "A hercegség történelmét, kultúráját és természettörténetét bemutató múzeum.",
        "Un muzeu care prezintă istoria, cultura și istoria naturală a principatului.",
        "A museum presenting the history, culture, and natural history of the principality.",
        ["Geschichte", "Kultur", "Historisches Gebäude"],
        ["Történelem", "Kultúra", "Történelmi épület"],
        ["Istorie", "Cultură", "Clădire istorică"],
        ["History", "Culture", "Historical building"])

# Balzers (LI-004)
add_poi("gutenberg-castle", "LI-004", 9.4996, 47.0658,
        "Burg Gutenberg", "Gutenberg-vár", "Castelul Gutenberg", "Gutenberg Castle",
        "Eine intakte mittelalterliche Burg auf einem markanten Hügel im Süden des Landes.",
        "Egy épen maradt középkori vár egy feltűnő dombon az ország déli részén.",
        "Un castel medieval intact situat pe un deal proeminent în sudul țării.",
        "An intact medieval castle on a prominent hill in the south of the country.",
        ["Mittelalterlich", "Markanter Hügel", "Museum"],
        ["Középkori", "Jellegzetes domb", "Múzeum"],
        ["Medieval", "Deal proeminent", "Muzeu"],
        ["Medieval", "Prominent hill", "Museum"], p_type="castle")

add_poi("alter-pfarrhof-balzers", "LI-004", 9.5020, 47.0670,
        "Alter Pfarrhof", "Régi plébánia", "Vechea casă parohială", "Old Rectory",
        "Ein historisches Gebäude in Balzers, das heute als Kulturzentrum dient.",
        "Történelmi épület Balzersben, amely ma kulturális központként működik.",
        "O clădire istorică în Balzers, care servește astăzi drept centru cultural.",
        "A historical building in Balzers that now serves as a cultural center.",
        ["Kulturzentrum", "Historisch", "Balzers"],
        ["Kulturális központ", "Történelmi", "Balzers"],
        ["Centru cultural", "Istoric", "Balzers"],
        ["Cultural center", "Historical", "Balzers"])

add_poi("mariahilf-kapelle", "LI-004", 9.4980, 47.0640,
        "Mariahilf-Kapelle", "Mariahilf-kápolna", "Capela Mariahilf", "Mariahilf Chapel",
        "Eine kleine, aber bedeutende historische Kapelle in der Gemeinde Balzers.",
        "Egy kis, de jelentős történelmi kápolna Balzers községben.",
        "O capelă istorică mică, dar semnificativă, în comuna Balzers.",
        "A small but significant historical chapel in the municipality of Balzers.",
        ["Kapelle", "Wallfahrtsort", "19. Jahrhundert"],
        ["Kápolna", "Zarándokhely", "19. század"],
        ["Capelă", "Loc de pelerinaj", "Secolul 19"],
        ["Chapel", "Pilgrimage site", "19th century"], p_type="landmark")

add_poi("st-nikolaus-balzers", "LI-004", 9.5015, 47.0665,
        "Kirche St. Nikolaus", "Szent Miklós templom", "Biserica Sf. Nicolae", "St. Nicholas Church",
        "Die Pfarrkirche von Balzers mit einer beeindruckenden Architektur.",
        "Balzers plébániatemploma, lenyűgöző építészettel.",
        "Biserica parohială din Balzers, cu o arhitectură impresionantă.",
        "The parish church of Balzers with impressive architecture.",
        ["Pfarrkirche", "Architektur", "Zentrum"],
        ["Plébániatemplom", "Építészet", "Központ"],
        ["Biserică parohială", "Arhitectură", "Centru"],
        ["Parish church", "Architecture", "Center"], p_type="landmark")

add_poi("festung-passmauer", "LI-004", 9.4950, 47.0580,
        "Festung Passmauer", "Passmauer-erődítmény", "Fortăreața Passmauer", "Passmauer Fortress",
        "Überreste alter Befestigungsanlagen, die einst zur Verteidigung des Tals dienten.",
        "Régi erődítmények maradványai, amelyek egykor a völgy védelmét szolgálták.",
        "Rămășițe ale vechilor fortificații care au servit odată la apărarea văii.",
        "Remains of old fortifications that once served to defend the valley.",
        ["Befestigung", "Ruinen", "Verteidigung"],
        ["Erődítmény", "Romok", "Védelem"],
        ["Fortificație", "Ruine", "Apărare"],
        ["Fortification", "Ruins", "Defense"])

# Triesen (LI-001)
add_poi("st-gallus-triesen", "LI-001", 9.5280, 47.1080,
        "Pfarrkirche St. Gallus", "Szent Gallus plébániatemplom", "Biserica parohială Sf. Gallus", "St. Gallus Parish Church",
        "Eine markante Kirche in Triesen mit reicher lokaler Geschichte.",
        "Egy jellegzetes templom Triesenben, gazdag helyi történelemmel.",
        "O biserică proeminentă din Triesen, cu o bogată istorie locală.",
        "A prominent church in Triesen with rich local history.",
        ["Kirche", "Historisch", "Triesen"],
        ["Templom", "Történelmi", "Triesen"],
        ["Biserică", "Istoric", "Triesen"],
        ["Church", "Historical", "Triesen"], p_type="landmark")

add_poi("marienkapelle-triesen", "LI-001", 9.5300, 47.1050,
        "Marienkapelle", "Mária-kápolna", "Capela Sf. Maria", "St. Mary's Chapel",
        "Eine historische Kapelle, die auf einem malerischen Hügel in Triesen liegt.",
        "Egy történelmi kápolna, amely egy festői dombon fekszik Triesenben.",
        "O capelă istorică situată pe un deal pitoresc din Triesen.",
        "A historical chapel located on a picturesque hill in Triesen.",
        ["Malerisch", "Hügel", "Wallfahrt"],
        ["Festői", "Domb", "Zarándoklat"],
        ["Pitoresc", "Deal", "Pelerinaj"],
        ["Picturesque", "Hill", "Pilgrimage"])

add_poi("kosthaus-triesen", "LI-001", 9.5250, 47.1100,
        "Kosthaus Triesen", "Trieseni étkezde", "Cantina Triesen", "Kosthaus Triesen",
        "Ein altes Gebäude, das früher als Gemeinschaftskantine für Arbeiter diente.",
        "Egy régi épület, amely korábban a munkások közösségi étkezdéjeként szolgált.",
        "O clădire veche care a servit anterior ca o cantină comunitară pentru muncitori.",
        "An old building that formerly served as a community canteen for workers.",
        ["Arbeitergeschichte", "Industriekultur", "Historisch"],
        ["Munkástörténelem", "Ipari kultúra", "Történelmi"],
        ["Istoria muncitorilor", "Cultură industrială", "Istoric"],
        ["Workers' history", "Industrial culture", "Historical"])

add_poi("gasometer-triesen", "LI-001", 9.5230, 47.1120,
        "Gasometer Triesen", "Trieseni gáztartály", "Gazometrul Triesen", "Triesen Gasometer",
        "Ein historischer Industriebau, der heute für kulturelle Veranstaltungen genutzt wird.",
        "Egy történelmi ipari épület, amelyet ma kulturális rendezvényekre használnak.",
        "O clădire industrială istorică folosită astăzi pentru evenimente culturale.",
        "A historical industrial building now used for cultural events.",
        ["Industriedenkmal", "Kultur", "Veranstaltungen"],
        ["Ipari műemlék", "Kultúra", "Rendezvények"],
        ["Monument industrial", "Cultură", "Evenimente"],
        ["Industrial monument", "Culture", "Events"])

add_poi("fabrik-spoerry", "LI-001", 9.5210, 47.1150,
        "Alte Fabrik Spoerry", "Régi Spoerry gyár", "Vechea fabrică Spoerry", "Old Spoerry Factory",
        "Ein wichtiges Zeugnis der industriellen Entwicklung Liechtensteins.",
        "Liechtenstein ipari fejlődésének fontos tanúja.",
        "O mărturie importantă a dezvoltării industriale a Liechtensteinului.",
        "An important witness to the industrial development of Liechtenstein.",
        ["Textilindustrie", "Architektur", "19. Jahrhundert"],
        ["Textilipar", "Építészet", "19. század"],
        ["Industria textilă", "Arhitectură", "Secolul 19"],
        ["Textile industry", "Architecture", "19th century"])

# Triesenberg (LI-003)
add_poi("walsermuseum", "LI-003", 9.5440, 47.1180,
        "Walsermuseum", "Walser Múzeum", "Muzeul Walser", "Walser Museum",
        "Ein Museum, das der Geschichte und Kultur der Walser-Einwanderer gewidmet ist.",
        "A Walser bevándorlók történelmének és kultúrájának szentelt múzeum.",
        "Un muzeu dedicat istoriei și culturii imigranților Walser.",
        "A museum dedicated to the history and culture of the Walser immigrants.",
        ["Walserkultur", "Ausstellung", "Triesenberg"],
        ["Walser kultúra", "Kiállítás", "Triesenberg"],
        ["Cultura Walser", "Expoziție", "Triesenberg"],
        ["Walser culture", "Exhibition", "Triesenberg"])

add_poi("st-josef-triesenberg", "LI-003", 9.5435, 47.1185,
        "Pfarrkirche St. Josef", "Szent József plébániatemplom", "Biserica parohială Sf. Iosif", "St. Joseph's Parish Church",
        "Die Zwiebelturmkirche ist ein markantes Wahrzeichen von Triesenberg.",
        "A hagymakupolás templom Triesenberg egyik meghatározó jelképe.",
        "Biserica cu turn în formă de ceapă este un simbol proeminent al Triesenbergului.",
        "The onion-domed church is a prominent landmark of Triesenberg.",
        ["Zwiebelturm", "Wahrzeichen", "Alpenpanorama"],
        ["Hagymakupola", "Jelkép", "Alpesi panoráma"],
        ["Turn de ceapă", "Simbol", "Panoramă alpină"],
        ["Onion dome", "Landmark", "Alpine panorama"], p_type="landmark")

add_poi("friedenskapelle-malbun", "LI-003", 9.6080, 47.1020,
        "Friedenskapelle Malbun", "Malbuni Béke-kápolna", "Capela Păcii din Malbun", "Malbun Peace Chapel",
        "Eine höchstgelegene Kapelle in den Alpen, ein Ort der Ruhe und Besinnung.",
        "Az Alpok egyik legmagasabban fekvő kápolnája, a nyugalom és elmélkedés helye.",
        "O capelă situată la mare altitudine în Alpi, un loc de liniște și reflecție.",
        "A highly situated chapel in the Alps, a place of peace and reflection.",
        ["Malbun", "Bergkapelle", "Höchste Lage"],
        ["Malbun", "Hegyi kápolna", "Legmagasabb fekvés"],
        ["Malbun", "Capelă montană", "Cea mai înaltă altitudine"],
        ["Malbun", "Mountain chapel", "Highest altitude"])

add_poi("masescha-kapelle", "LI-003", 9.5520, 47.1250,
        "Kapelle St. Theodul (Masescha)", "Szent Theodul kápolna (Masescha)", "Capela Sf. Theodul (Masescha)", "St. Theodul Chapel (Masescha)",
        "Eine kleine, historische Walserkapelle mit fantastischem Blick über das Rheintal.",
        "Egy kis, történelmi Walser kápolna, fantasztikus kilátással a Rajna-völgyre.",
        "O mică capelă istorică Walser, cu o vedere fantastică asupra văii Rinului.",
        "A small, historical Walser chapel with a fantastic view over the Rhine valley.",
        ["Walserkapelle", "Aussichtpunkt", "Historisch"],
        ["Walser kápolna", "Kilátópont", "Történelmi"],
        ["Capelă Walser", "Punct de belvedere", "Istoric"],
        ["Walser chapel", "Viewpoint", "Historical"])

add_poi("altes-walserhaus", "LI-003", 9.5450, 47.1170,
        "Altes Walserhaus", "Régi Walser-ház", "Vechea casă Walser", "Old Walser House",
        "Ein erhaltenes, traditionelles Holzhaus der Walser, das tiefe Einblicke in frühere Lebensweisen bietet.",
        "Egy fennmaradt, hagyományos Walser faház, amely betekintést nyújt a korábbi életmódba.",
        "O casă de lemn tradițională Walser conservată, care oferă o perspectivă asupra modului de viață de odinioară.",
        "A preserved traditional wooden Walser house offering insights into past lifestyles.",
        ["Traditionell", "Holzbau", "Architektur"],
        ["Hagyományos", "Faépület", "Építészet"],
        ["Tradițional", "Clădire din lemn", "Arhitectură"],
        ["Traditional", "Wooden building", "Architecture"])

# Schaan (LI-002)
add_poi("roemisches-kastell-schaan", "LI-002", 9.4810, 47.1680,
        "Römisches Kastell", "Római erőd", "Castrul Roman", "Roman Fort",
        "Die Überreste eines römischen Kastells, das im 4. Jahrhundert n. Chr. erbaut wurde.",
        "Egy Kr.u. 4. században épült római erődítmény maradványai.",
        "Rămășițele unui castru roman construit în secolul al IV-lea d.Hr.",
        "The remains of a Roman fort built in the 4th century AD.",
        ["Römerzeit", "Archäologie", "Ruine"],
        ["Római kor", "Régészet", "Rom"],
        ["Epoca romană", "Arheologie", "Ruină"],
        ["Roman era", "Archaeology", "Ruin"])

add_poi("duxkapelle-schaan", "LI-002", 9.4950, 47.1700,
        "Duxkapelle", "Dux-kápolna", "Capela Dux", "Dux Chapel",
        "Auch bekannt als Kapelle Maria zum Trost, ein wichtiger Wallfahrtsort oberhalb von Schaan.",
        "A Vigasztaló Mária kápolnaként is ismert fontos zarándokhely Schaan felett.",
        "Cunoscută și sub numele de Capela Maria Mângâietoarea, un loc important de pelerinaj deasupra Schaanului.",
        "Also known as the Chapel of Mary the Consoler, an important pilgrimage site above Schaan.",
        ["Wallfahrtsort", "Waldrand", "Historisch"],
        ["Zarándokhely", "Erdőszél", "Történelmi"],
        ["Loc de pelerinaj", "Marginea pădurii", "Istoric"],
        ["Pilgrimage site", "Forest edge", "Historical"])

add_poi("rathaus-schaan", "LI-002", 9.4835, 47.1660,
        "Rathaus Schaan", "Schaani Városháza", "Primăria Schaan", "Schaan Town Hall",
        "Das moderne Rathaus von Schaan, das historische Verwaltungstraditionen mit moderner Architektur verbindet.",
        "Schaan modern városházája, amely ötvözi a történelmi közigazgatási hagyományokat a modern építészettel.",
        "Primăria modernă din Schaan, care îmbină tradițiile administrative istorice cu arhitectura modernă.",
        "The modern town hall of Schaan, combining historical administrative traditions with modern architecture.",
        ["Zentrum", "Verwaltung", "Architektur"],
        ["Központ", "Közigazgatás", "Építészet"],
        ["Centru", "Administrație", "Arhitectură"],
        ["Center", "Administration", "Architecture"])

add_poi("alte-kaplanei-schaan", "LI-002", 9.4820, 47.1670,
        "Alte Kaplanei", "Régi káplánság", "Vechea capelănie", "Old Chaplaincy",
        "Ein historisches Gebäude im Zentrum von Schaan, das heute vielfältig genutzt wird.",
        "Történelmi épület Schaan központjában, amelyet ma sokoldalúan hasznosítanak.",
        "O clădire istorică în centrul orașului Schaan, folosită astăzi în diverse scopuri.",
        "A historical building in the center of Schaan, now used for various purposes.",
        ["Historisches Gebäude", "Schaan Zentrum", "Erhaltung"],
        ["Történelmi épület", "Schaan központ", "Megőrzés"],
        ["Clădire istorică", "Centrul Schaan", "Conservare"],
        ["Historical building", "Schaan center", "Preservation"])

add_poi("theater-am-kirchplatz", "LI-002", 9.4840, 47.1655,
        "Theater am Kirchplatz (TaK)", "Templomtéri Színház (TaK)", "Teatrul din Piața Bisericii (TaK)", "Theater am Kirchplatz (TaK)",
        "Das wichtigste Theater Liechtensteins, ein Zentrum für darstellende Kunst und Kultur.",
        "Liechtenstein legfontosabb színháza, az előadóművészet és kultúra központja.",
        "Cel mai important teatru din Liechtenstein, un centru pentru artele spectacolului și cultură.",
        "Liechtenstein's most important theater, a center for performing arts and culture.",
        ["Kultur", "Theater", "Kunst"],
        ["Kultúra", "Színház", "Művészet"],
        ["Cultură", "Teatru", "Artă"],
        ["Culture", "Theater", "Art"], p_type="landmark")

# Planken (LI-005)
add_poi("st-josef-planken", "LI-005", 9.5445, 47.1860,
        "Kapelle St. Josef", "Szent József kápolna", "Capela Sf. Iosif", "St. Joseph's Chapel",
        "Eine malerische kleine Kapelle im Zentrum der kleinsten Gemeinde Liechtensteins.",
        "Egy festői kis kápolna Liechtenstein legkisebb községének központjában.",
        "O mică capelă pitorească în centrul celei mai mici comune din Liechtenstein.",
        "A picturesque small chapel in the center of Liechtenstein's smallest municipality.",
        ["Kleinste Gemeinde", "Kapelle", "Zentrum"],
        ["Legkisebb község", "Kápolna", "Központ"],
        ["Cea mai mică comună", "Capelă", "Centru"],
        ["Smallest municipality", "Chapel", "Center"])

add_poi("dreischwesternhaus", "LI-005", 9.5460, 47.1850,
        "Dreischwesternhaus", "Három Nővér-ház", "Casa Celor Trei Surori", "Three Sisters House",
        "Ein kulturhistorisch bedeutsames Gebäude in Planken mit Bezug zum Bergmassiv Drei Schwestern.",
        "Kultúrtörténetileg jelentős épület Plankenben, amely a Három Nővér hegytömbhöz kapcsolódik.",
        "O clădire semnificativă din punct de vedere cultural și istoric în Planken, legată de masivul Trei Surori.",
        "A culturally and historically significant building in Planken related to the Three Sisters massif.",
        ["Kulturhistorisch", "Planken", "Architektur"],
        ["Kultúrtörténeti", "Planken", "Építészet"],
        ["Istoric cultural", "Planken", "Arhitectură"],
        ["Cultural-historical", "Planken", "Architecture"])

add_poi("altes-schulhaus-planken", "LI-005", 9.5440, 47.1858,
        "Altes Schulhaus Planken", "Régi plankeni iskola", "Vechea școală din Planken", "Old Planken Schoolhouse",
        "Das historische Schulgebäude von Planken, das lange Zeit den Mittelpunkt der Dorfbildung bildete.",
        "Planken történelmi iskolaépülete, amely sokáig a falu oktatásának központja volt.",
        "Clădirea istorică a școlii din Planken, care a constituit mult timp centrul educației din sat.",
        "The historical school building of Planken, which for a long time formed the center of village education.",
        ["Bildungsgeschichte", "Dorfleben", "Historisch"],
        ["Oktatástörténet", "Falusi élet", "Történelmi"],
        ["Istoria educației", "Viața la țară", "Istoric"],
        ["Educational history", "Village life", "Historical"])

add_poi("hirtenhaus-planken", "LI-005", 9.5455, 47.1865,
        "Hirtenhaus", "Pásztorház", "Casa Păstorului", "Shepherd's House",
        "Ein altes traditionelles Haus, das an die bäuerliche Vergangenheit der Region erinnert.",
        "Egy régi hagyományos ház, amely a régió mezőgazdasági múltjára emlékeztet.",
        "O veche casă tradițională care amintește de trecutul agricol al regiunii.",
        "An old traditional house reminiscent of the region's agricultural past.",
        ["Bäuerliche Kultur", "Holzbau", "Tradition"],
        ["Paraszti kultúra", "Faépület", "Hagyomány"],
        ["Cultura țărănească", "Clădire din lemn", "Tradiție"],
        ["Peasant culture", "Wooden building", "Tradition"])

# Eschen (LI-006)
add_poi("heiligkreuz-kapelle-eschen", "LI-006", 9.5180, 47.2020,
        "Heiligkreuz-Kapelle", "Szent Kereszt-kápolna", "Capela Sfintei Cruci", "Holy Cross Chapel",
        "Auch bekannt als Rofenbergkapelle, eine markante historische Kapelle auf dem Rofenberg.",
        "Rofenberg kápolnaként is ismert, jellegzetes történelmi kápolna a Rofenbergen.",
        "Cunoscută și sub numele de Capela Rofenberg, o capelă istorică proeminentă pe Rofenberg.",
        "Also known as Rofenberg Chapel, a prominent historical chapel on the Rofenberg.",
        ["Rofenberg", "Wahrzeichen", "Aussicht"],
        ["Rofenberg", "Jelkép", "Kilátás"],
        ["Rofenberg", "Simbol", "Vedere"],
        ["Rofenberg", "Landmark", "View"])

add_poi("pfarrkirche-st-martin-eschen", "LI-006", 9.5210, 47.2115,
        "Pfarrkirche St. Martin", "Szent Márton plébániatemplom", "Biserica parohială Sf. Martin", "St. Martin's Parish Church",
        "Die Hauptkirche von Eschen mit einer langen Geschichte und beeindruckenden Architektur.",
        "Eschen főtemploma, hosszú történelemmel és lenyűgöző építészettel.",
        "Biserica principală din Eschen, cu o istorie lungă și o arhitectură impresionantă.",
        "The main church of Eschen with a long history and impressive architecture.",
        ["Hauptkirche", "Zentrum", "Architektur"],
        ["Főtemplom", "Központ", "Építészet"],
        ["Biserica principală", "Centru", "Arhitectură"],
        ["Main church", "Center", "Architecture"], p_type="landmark")

add_poi("muehle-eschen", "LI-006", 9.5240, 47.2100,
        "Alte Mühle Eschen", "Régi escheni malom", "Vechea moară din Eschen", "Old Eschen Mill",
        "Eine sorgfältig restaurierte historische Mühle, die an das alte Handwerk erinnert.",
        "Egy gondosan felújított történelmi malom, amely a régi mesterségekre emlékeztet.",
        "O moară istorică restaurată cu grijă, care amintește de meșteșugurile vechi.",
        "A carefully restored historical mill reminiscent of old crafts.",
        ["Restauriert", "Handwerk", "Wasserkraft"],
        ["Felújított", "Kézművesség", "Vízierő"],
        ["Restaurat", "Meșteșug", "Puterea apei"],
        ["Restored", "Craft", "Water power"])

add_poi("haus-gutenberg-eschen", "LI-006", 9.5200, 47.2120,
        "Altes Rathaus Eschen", "Régi Városháza Eschen", "Vechea Primărie Eschen", "Old Eschen Town Hall",
        "Das alte Verwaltungsgebäude von Eschen, ein Symbol lokaler Geschichte.",
        "Eschen régi közigazgatási épülete, a helyi történelem szimbóluma.",
        "Vechea clădire administrativă din Eschen, un simbol al istoriei locale.",
        "The old administrative building of Eschen, a symbol of local history.",
        ["Verwaltung", "Historisch", "Eschen"],
        ["Közigazgatás", "Történelmi", "Eschen"],
        ["Administrație", "Istoric", "Eschen"],
        ["Administration", "Historical", "Eschen"])

# Mauren (LI-007)
add_poi("st-peter-paul-mauren", "LI-007", 9.5440, 47.2180,
        "Pfarrkirche St. Peter und Paul", "Szent Péter és Pál plébániatemplom", "Biserica parohială Sf. Petru și Pavel", "St. Peter and Paul Parish Church",
        "Eine historisch bedeutsame Kirche in Mauren mit reichen Verzierungen.",
        "Egy történelmileg jelentős templom Maurenben, gazdag díszítésekkel.",
        "O biserică semnificativă din punct de vedere istoric în Mauren, cu decorațiuni bogate.",
        "A historically significant church in Mauren with rich decorations.",
        ["Kirchenbau", "Historisch", "Mauren"],
        ["Templomépület", "Történelmi", "Mauren"],
        ["Clădirea bisericii", "Istoric", "Mauren"],
        ["Church building", "Historical", "Mauren"], p_type="landmark")

add_poi("kulturhaus-roessle", "LI-007", 9.5430, 47.2175,
        "Kulturhaus Rössle", "Rössle Kultúrház", "Casa de Cultură Rössle", "Rössle Cultural Center",
        "Ein ehemaliges historisches Gasthaus, das heute als wichtiges Kulturzentrum dient.",
        "Egykori történelmi vendéglő, amely ma fontos kulturális központként működik.",
        "O fostă pensiune istorică care astăzi servește drept un important centru cultural.",
        "A former historical inn that today serves as an important cultural center.",
        ["Kulturzentrum", "Gasthaus", "Treffpunkt"],
        ["Kulturális központ", "Vendéglő", "Találkozóhely"],
        ["Centru cultural", "Pensiune", "Punct de întâlnire"],
        ["Cultural center", "Inn", "Meeting point"])

add_poi("theresienkirche-schaanwald", "LI-007", 9.5550, 47.2100,
        "Theresienkirche", "Teréz-templom", "Biserica Sf. Tereza", "St. Theresa's Church",
        "Eine kleine, elegante Kirche im Ortsteil Schaanwald, nahe der österreichischen Grenze.",
        "Egy kis, elegáns templom Schaanwald városrészben, az osztrák határ közelében.",
        "O biserică mică și elegantă în cartierul Schaanwald, aproape de granița cu Austria.",
        "A small, elegant church in the Schaanwald district, near the Austrian border.",
        ["Schaanwald", "Kirche", "Grenzregion"],
        ["Schaanwald", "Templom", "Határvidék"],
        ["Schaanwald", "Biserică", "Regiunea de graniță"],
        ["Schaanwald", "Church", "Border region"])

add_poi("altes-zollhaus-schaanwald", "LI-007", 9.5600, 47.2120,
        "Altes Zollhaus", "Régi Vámház", "Vechea Casă a Vămii", "Old Customs House",
        "Das historische Zollhaus in Schaanwald, ein Relikt aus Zeiten strikterer Grenzkontrollen.",
        "A történelmi vámház Schaanwaldban, a szigorúbb határellenőrzések idejének emléke.",
        "Casa istorică a vămii din Schaanwald, o relicvă a vremurilor cu controale stricte la graniță.",
        "The historic customs house in Schaanwald, a relic from times of stricter border controls.",
        ["Grenze", "Zoll", "Historisch"],
        ["Határ", "Vám", "Történelmi"],
        ["Graniță", "Vamă", "Istoric"],
        ["Border", "Customs", "Historical"])

# Gamprin (LI-011)
add_poi("pfarrkirche-maria-himmelfahrt-bendern", "LI-011", 9.5080, 47.2120,
        "Pfarrkirche Maria Himmelfahrt", "Mária Mennybevétele plébániatemplom", "Biserica parohială Adormirea Maicii Domnului", "Assumption of Mary Parish Church",
        "Eine Kirche auf dem Kirchhügel in Bendern mit immenser historischer Bedeutung für Liechtenstein.",
        "Egy templom a benderi templomdombon, amely hatalmas történelmi jelentőséggel bír Liechtenstein számára.",
        "O biserică pe dealul bisericii din Bendern cu o importanță istorică imensă pentru Liechtenstein.",
        "A church on the church hill in Bendern with immense historical importance for Liechtenstein.",
        ["Bendern", "Kirchhügel", "Historisch"],
        ["Bendern", "Templomdomb", "Történelmi"],
        ["Bendern", "Dealul bisericii", "Istoric"],
        ["Bendern", "Church hill", "Historical"], p_type="landmark")

add_poi("schwurplatz-bendern", "LI-011", 9.5075, 47.2125,
        "Schwurplatz Bendern", "Benderi eskühely", "Piața Jurământului Bendern", "Bendern Oath Square",
        "Der historische Ort, an dem 1699 die Untertanen dem Fürsten von Liechtenstein die Treue schworen.",
        "Az a történelmi hely, ahol 1699-ben az alattvalók hűséget esküdtek Liechtenstein hercegének.",
        "Locul istoric unde supușii au depus jurământul de credință prințului de Liechtenstein în 1699.",
        "The historic site where the subjects swore allegiance to the Prince of Liechtenstein in 1699.",
        ["1699", "Treueschwur", "Nationalgeschichte"],
        ["1699", "Hűségeskü", "Nemzeti történelem"],
        ["1699", "Jurământ de credință", "Istoria națională"],
        ["1699", "Oath of allegiance", "National history"])

add_poi("lourdesgrotte-bendern", "LI-011", 9.5090, 47.2115,
        "Lourdesgrotte", "Lourdes-i barlang", "Grota Lourdes", "Lourdes Grotto",
        "Eine religiöse Gedenkstätte in Bendern, die der Grotte von Lourdes nachempfunden ist.",
        "Egy vallási emlékhely Bendernben, amelyet a lourdes-i barlang mintájára hoztak létre.",
        "Un loc de pelerinaj religios în Bendern, modelat după grota de la Lourdes.",
        "A religious memorial in Bendern modeled after the grotto in Lourdes.",
        ["Gedenkstätte", "Religion", "Bendern"],
        ["Emlékhely", "Vallás", "Bendern"],
        ["Memorial", "Religie", "Bendern"],
        ["Memorial", "Religion", "Bendern"])

add_poi("altes-pfarrhaus-bendern", "LI-011", 9.5085, 47.2130,
        "Altes Pfarrhaus Bendern", "Régi benderi plébánia", "Vechea casă parohială din Bendern", "Old Bendern Rectory",
        "Ein traditionelles Gebäude nahe der Kirche, das eng mit der kirchlichen Geschichte verbunden ist.",
        "Egy hagyományos épület a templom közelében, amely szorosan kapcsolódik az egyháztörténethez.",
        "O clădire tradițională lângă biserică, strâns legată de istoria bisericească.",
        "A traditional building near the church, closely connected with ecclesiastical history.",
        ["Pfarrhaus", "Traditionell", "Kirchlich"],
        ["Plébánia", "Hagyományos", "Egyházi"],
        ["Casă parohială", "Tradițional", "Bisericesc"],
        ["Rectory", "Traditional", "Ecclesiastical"])

# Ruggell (LI-009)
add_poi("st-fridolin-ruggell", "LI-009", 9.5260, 47.2400,
        "Pfarrkirche St. Fridolin", "Szent Fridolin plébániatemplom", "Biserica parohială Sf. Fridolin", "St. Fridolin's Parish Church",
        "Eine moderne, aber historisch verwurzelte Kirche in der nördlichsten Gemeinde des Landes.",
        "Egy modern, de történelmi gyökerű templom az ország legészakibb községében.",
        "O biserică modernă, dar cu rădăcini istorice, în cea mai nordică comună a țării.",
        "A modern but historically rooted church in the northernmost municipality of the country.",
        ["Modern", "Pfarrkirche", "Nördlichste Gemeinde"],
        ["Modern", "Plébániatemplom", "Legészakibb község"],
        ["Modern", "Biserică parohială", "Cea mai nordică comună"],
        ["Modern", "Parish church", "Northernmost municipality"])

add_poi("kuefer-martis-huus", "LI-009", 9.5280, 47.2380,
        "Küefer-Martis-Huus", "Küefer-Martis-Huus", "Küefer-Martis-Huus", "Küefer-Martis-Huus",
        "Ein kulturhistorisches Museum in einem sorgfältig restaurierten traditionellen Bauernhaus.",
        "Egy kultúrtörténeti múzeum egy gondosan felújított hagyományos parasztházban.",
        "Un muzeu istoric cultural într-o casă țărănească tradițională restaurată cu grijă.",
        "A cultural-historical museum in a carefully restored traditional farmhouse.",
        ["Museum", "Bauernhaus", "Rhein-Ausstellung"],
        ["Múzeum", "Parasztház", "Rajna-kiállítás"],
        ["Muzeu", "Casă țărănească", "Expoziție despre Rin"],
        ["Museum", "Farmhouse", "Rhine exhibition"])

add_poi("altes-zollhaus-ruggell", "LI-009", 9.5310, 47.2440,
        "Altes Zollhaus Ruggell", "Régi ruggelli Vámház", "Vechea Casă a Vămii Ruggell", "Old Ruggell Customs House",
        "Ein historisches Gebäude an der Grenze zur Schweiz, das früher für Grenzkontrollen diente.",
        "Történelmi épület a svájci határon, amely korábban határellenőrzésre szolgált.",
        "O clădire istorică la granița cu Elveția, folosită anterior pentru controale la frontieră.",
        "A historical building on the border with Switzerland, formerly used for border controls.",
        ["Grenzgeschichte", "Zoll", "Schweizer Grenze"],
        ["Határtörténelem", "Vám", "Svájci határ"],
        ["Istoria graniței", "Vamă", "Granița elvețiană"],
        ["Border history", "Customs", "Swiss border"])

add_poi("st-anna-kapelle-ruggell", "LI-009", 9.5350, 47.2360,
        "Kapelle St. Anna", "Szent Anna kápolna", "Capela Sf. Ana", "St. Anne's Chapel",
        "Eine kleine Feldkapelle in Ruggell, die als Ort der Stille und des Gebets dient.",
        "Egy kis mezei kápolna Ruggellben, amely a csend és az imádság helyeként szolgál.",
        "O mică capelă de câmp în Ruggell, care servește ca un loc de liniște și rugăciune.",
        "A small field chapel in Ruggell serving as a place of silence and prayer.",
        ["Feldkapelle", "Stille", "Historisch"],
        ["Mezei kápolna", "Csend", "Történelmi"],
        ["Capelă de câmp", "Liniște", "Istoric"],
        ["Field chapel", "Silence", "Historical"])

# Schellenberg (LI-008)
# Note: Obere Burg and Untere Burg are already in base, I will skip them and add others.
add_poi("biedermannhaus", "LI-008", 9.5465, 47.2325,
        "Biedermannhaus", "Biedermann-ház", "Casa Biedermann", "Biedermann House",
        "Eines der ältesten erhaltenen Holzhäuser in Liechtenstein, erbaut im Jahr 1518.",
        "Liechtenstein egyik legrégebbi fennmaradt faháza, amely 1518-ban épült.",
        "Una dintre cele mai vechi case din lemn conservate din Liechtenstein, construită în 1518.",
        "One of the oldest surviving wooden houses in Liechtenstein, built in 1518.",
        ["Erbaut 1518", "Holzhaus", "Museum"],
        ["Épült 1518-ban", "Faház", "Múzeum"],
        ["Construit în 1518", "Casă de lemn", "Muzeu"],
        ["Built in 1518", "Wooden house", "Museum"])

add_poi("unbeflecktes-herz-mariae-schellenberg", "LI-008", 9.5480, 47.2310,
        "Pfarrkirche Unbeflecktes Herz Mariä", "Szeplőtelen Szív Mária plébániatemplom", "Biserica parohială Inima Imaculată a Mariei", "Immaculate Heart of Mary Parish Church",
        "Eine Kirche mit einer markanten Architektur, die über dem Dorf Schellenberg thront.",
        "Különleges építészetű templom, amely Schellenberg falu felett magasodik.",
        "O biserică cu o arhitectură remarcabilă care se înalță deasupra satului Schellenberg.",
        "A church with striking architecture towering over the village of Schellenberg.",
        ["Markant", "Pfarrkirche", "Dorfmitte"],
        ["Jellegzetes", "Plébániatemplom", "Falu közepe"],
        ["Remarcabil", "Biserică parohială", "Centrul satului"],
        ["Striking", "Parish church", "Village center"], p_type="landmark")

add_poi("schwesternhaus-schellenberg", "LI-008", 9.5475, 47.2315,
        "Schwesternhaus", "Nővérek háza", "Casa Surorilor", "Sisters' House",
        "Das Klostergebäude der Schwestern vom Kostbaren Blut, ein spirituelles Zentrum der Region.",
        "A Drágavér Nővérek kolostorépülete, a régió szellemi központja.",
        "Clădirea mănăstirii Surorilor Prețiosului Sânge, un centru spiritual al regiunii.",
        "The monastery building of the Sisters of the Precious Blood, a spiritual center of the region.",
        ["Kloster", "Spiritualität", "Historisch"],
        ["Kolostor", "Spiritualitás", "Történelmi"],
        ["Mănăstire", "Spiritualitate", "Istoric"],
        ["Monastery", "Spirituality", "Historical"], p_type="monastery")

add_poi("denkmal-russenflucht", "LI-008", 9.5520, 47.2350,
        "Russen-Denkmal", "Orosz emlékmű", "Monumentul Rus", "Russian Monument",
        "Ein Denkmal, das an die Zuflucht der Ersten Russischen Nationalarmee im Jahr 1945 erinnert.",
        "Emlékmű, amely az Első Orosz Nemzeti Hadsereg 1945-ös menedékkeresésére emlékeztet.",
        "Un monument care comemorează refugiul Primei Armate Naționale Ruse în 1945.",
        "A monument commemorating the refuge of the First Russian National Army in 1945.",
        ["1945", "Asyl", "Zweiter Weltkrieg"],
        ["1945", "Menedékjog", "Második világháború"],
        ["1945", "Azil", "Al Doilea Război Mondial"],
        ["1945", "Asylum", "World War II"])

# Additional random ones across municipalities to reach 50
# Vaduz (more)
add_poi("schweizer-zollhaus-vaduz", "LI-010", 9.5100, 47.1330,
        "Ehemaliges Schweizer Zollhaus", "Egykori svájci vámház", "Fosta Vamă Elvețiană", "Former Swiss Customs House",
        "Ein Gebäude an der Rheinbrücke, das früher die Grenzkontrolle zwischen Liechtenstein und der Schweiz beherbergte.",
        "Egy épület a Rajna-hídnál, amely korábban a Liechtenstein és Svájc közötti határellenőrzésnek adott otthont.",
        "O clădire la podul peste Rin care adăpostea anterior controlul de frontieră între Liechtenstein și Elveția.",
        "A building at the Rhine bridge that formerly housed the border control between Liechtenstein and Switzerland.",
        ["Zoll", "Grenze", "Vaduz"],
        ["Vám", "Határ", "Vaduz"],
        ["Vamă", "Graniță", "Vaduz"],
        ["Customs", "Border", "Vaduz"])

add_poi("schlossle-vaduz", "LI-010", 9.5215, 47.1420,
        "Schlössle Vaduz", "Vaduzi Schlössle", "Schlössle Vaduz", "Schlössle Vaduz",
        "Ein bemerkenswertes historisches Anwesen im Zentrum der Hauptstadt, umgeben von alten Mauern.",
        "Figyelemre méltó történelmi birtok a főváros központjában, régi falakkal körülvéve.",
        "O proprietate istorică remarcabilă în centrul capitalei, înconjurată de ziduri vechi.",
        "A remarkable historical estate in the center of the capital, surrounded by old walls.",
        ["Anwesen", "Historisch", "Zentrum"],
        ["Birtok", "Történelmi", "Központ"],
        ["Proprietate", "Istoric", "Centru"],
        ["Estate", "Historical", "Center"])

# Balzers
add_poi("alter-friedhof-balzers", "LI-004", 9.5010, 47.0660,
        "Alter Friedhof", "Régi temető", "Vechiul Cimitir", "Old Cemetery",
        "Ein historischer Friedhof in Balzers mit alten und kunstvoll gestalteten Grabsteinen.",
        "Egy történelmi temető Balzersben régi és művészien kialakított sírkövekkel.",
        "Un cimitir istoric în Balzers, cu pietre funerare vechi și ornamentate.",
        "A historical cemetery in Balzers with old and ornately designed gravestones.",
        ["Grabsteine", "Geschichte", "Gedenken"],
        ["Sírkövek", "Történelem", "Emlékezés"],
        ["Pietre funerare", "Istorie", "Comemorare"],
        ["Gravestones", "History", "Remembrance"])

# Triesen
add_poi("altes-schulhaus-triesen", "LI-001", 9.5290, 47.1070,
        "Altes Schulhaus Triesen", "Régi trieseni iskola", "Vechea școală din Triesen", "Old Triesen Schoolhouse",
        "Ein ehrwürdiges Gebäude, das lange Zeit der Bildung der Dorfjugend diente.",
        "Egy tiszteletreméltó épület, amely sokáig a falusi fiatalság oktatását szolgálta.",
        "O clădire venerabilă care a servit mult timp pentru educarea tineretului din sat.",
        "A venerable building that long served the education of the village youth.",
        ["Bildung", "Dorfgeschichte", "Triesen"],
        ["Oktatás", "Falutörténet", "Triesen"],
        ["Educație", "Istoria satului", "Triesen"],
        ["Education", "Village history", "Triesen"])

# Triesenberg
add_poi("gnal-kapelle", "LI-003", 9.5390, 47.1130,
        "Kapelle Gnal", "Gnal-kápolna", "Capela Gnal", "Gnal Chapel",
        "Eine malerische Kapelle in der Berglandschaft oberhalb von Triesenberg.",
        "Festői kápolna a hegyvidéki tájban Triesenberg felett.",
        "O capelă pitorească în peisajul montan deasupra Triesenbergului.",
        "A picturesque chapel in the mountain landscape above Triesenberg.",
        ["Berglandschaft", "Kapelle", "Triesenberg"],
        ["Hegyvidéki táj", "Kápolna", "Triesenberg"],
        ["Peisaj montan", "Capelă", "Triesenberg"],
        ["Mountain landscape", "Chapel", "Triesenberg"])

# Schaan
add_poi("alte-schmiede-schaan", "LI-002", 9.4850, 47.1640,
        "Alte Schmiede", "Régi kovácsműhely", "Vechea Fierărie", "Old Smithy",
        "Ein Relikt aus der Handwerkszeit Schaans, das die Bedeutung des Schmiedehandwerks zeigt.",
        "Schaan kézműves korszakának emléke, amely a kovácsmesterség jelentőségét mutatja.",
        "O relicvă din perioada meșteșugărească a Schaanului, care arată importanța fierăriei.",
        "A relic from Schaan's handicraft era showing the importance of the blacksmith trade.",
        ["Handwerk", "Schmiede", "Historisch"],
        ["Kézművesség", "Kovácsműhely", "Történelmi"],
        ["Meșteșug", "Fierărie", "Istoric"],
        ["Craft", "Smithy", "Historical"])

# Eschen
add_poi("sankt-kaiser-karl-kapelle", "LI-006", 9.5250, 47.2130,
        "Kaiser-Karl-Kapelle", "Károly császár kápolna", "Capela Împăratului Carol", "Emperor Charles Chapel",
        "Eine kleine Kapelle, die dem letzten österreichischen Kaiser Karl I. gewidmet ist.",
        "Egy kis kápolna, amelyet az utolsó osztrák császárnak, I. Károlynak szenteltek.",
        "O mică capelă dedicată ultimului împărat austriac Carol I.",
        "A small chapel dedicated to the last Austrian Emperor Charles I.",
        ["Habsburg", "Kapelle", "Historisch"],
        ["Habsburg", "Kápolna", "Történelmi"],
        ["Habsburg", "Capelă", "Istoric"],
        ["Habsburg", "Chapel", "Historical"])

# Mauren
add_poi("alte-sennerei-mauren", "LI-007", 9.5420, 47.2190,
        "Alte Sennerei", "Régi sajtüzem", "Vechea Lăptărie", "Old Dairy",
        "Das Gebäude der ehemaligen Käserei, ein Zeugnis der ländlichen Milchwirtschaft.",
        "Az egykori sajtüzem épülete, a vidéki tejgazdaság emléke.",
        "Clădirea fostei brânzării, o mărturie a industriei lăptăriei rurale.",
        "The building of the former cheese dairy, a testimony to rural dairy farming.",
        ["Landwirtschaft", "Käseproduktion", "Historisch"],
        ["Mezőgazdaság", "Sajttermelés", "Történelmi"],
        ["Agricultură", "Producția de brânză", "Istoric"],
        ["Agriculture", "Cheese production", "Historical"])

# Gamprin
add_poi("altes-schulhaus-bendern", "LI-011", 9.5095, 47.2110,
        "Altes Schulhaus Bendern", "Régi benderi iskola", "Vechea școală din Bendern", "Old Bendern Schoolhouse",
        "Das historische Schulgebäude am Fuße des Kirchhügels in Bendern.",
        "A történelmi iskolaépület a benderi templomdomb lábánál.",
        "Clădirea istorică a școlii la poalele dealului bisericii din Bendern.",
        "The historical school building at the foot of the church hill in Bendern.",
        ["Bildung", "Kirchhügel", "Historisch"],
        ["Oktatás", "Templomdomb", "Történelmi"],
        ["Educație", "Dealul bisericii", "Istoric"],
        ["Education", "Church hill", "Historical"])

# Ruggell
add_poi("landweibels-huus", "LI-009", 9.5290, 47.2390,
        "Landweibels-Huus", "Landweibels-ház", "Casa Landweibel", "Landweibel House",
        "Ein historisches Gebäude in Ruggell, das früher als Amtsstube des Landweibels diente.",
        "Egy történelmi épület Ruggellben, amely korábban a hivatalszolga irodájaként szolgált.",
        "O clădire istorică în Ruggell, folosită anterior ca birou al funcționarului local.",
        "A historical building in Ruggell formerly used as the office of the local official.",
        ["Verwaltung", "Dorfgeschichte", "Historisch"],
        ["Közigazgatás", "Falutörténet", "Történelmi"],
        ["Administrație", "Istoria satului", "Istoric"],
        ["Administration", "Village history", "Historical"])

# 40 POIs so far. Need 10 more.
# Vaduz
add_poi("engel-gasthaus-vaduz", "LI-010", 9.5220, 47.1410,
        "Gasthof Engel", "Engel Vendéglő", "Hanul Engel", "Engel Inn",
        "Eines der ältesten Gasthäuser in Vaduz mit einer langen Tradition der Gastfreundschaft.",
        "Vaduz egyik legrégebbi vendéglője, hosszú vendéglátó hagyománnyal.",
        "Unul dintre cele mai vechi hanuri din Vaduz, cu o lungă tradiție de ospitalitate.",
        "One of the oldest inns in Vaduz with a long tradition of hospitality.",
        ["Gastronomie", "Tradition", "Zentrum"],
        ["Gasztronómia", "Hagyomány", "Központ"],
        ["Gastronomie", "Tradiție", "Centru"],
        ["Gastronomy", "Tradition", "Center"])

# Balzers
add_poi("alte-muehle-balzers", "LI-004", 9.5030, 47.0650,
        "Alte Mühle Balzers", "Régi balzersi malom", "Vechea moară din Balzers", "Old Balzers Mill",
        "Eine alte Wassermühle am Rande von Balzers, die an die vorindustrielle Zeit erinnert.",
        "Egy régi vízimalom Balzers szélén, amely az iparosodás előtti időkre emlékeztet.",
        "O veche moară de apă la marginea orașului Balzers, amintind de vremurile preindustriale.",
        "An old water mill on the edge of Balzers reminding of pre-industrial times.",
        ["Wassermühle", "Handwerk", "Balzers"],
        ["Vízimalom", "Kézművesség", "Balzers"],
        ["Moară de apă", "Meșteșug", "Balzers"],
        ["Water mill", "Craft", "Balzers"])

# Triesen
add_poi("weberei-triesen", "LI-001", 9.5220, 47.1140,
        "Alte Weberei", "Régi Szövöde", "Vechea Țesătorie", "Old Weaving Mill",
        "Ein Relikt der einst blühenden Textilindustrie in Triesen, heute teilweise anders genutzt.",
        "Az egykor virágzó trieseni textilipar emléke, ma részben más célokra hasznosítják.",
        "O relicvă a industriei textile odinioară înfloritoare din Triesen, astăzi folosită parțial în alte scopuri.",
        "A relic of the once flourishing textile industry in Triesen, today partly used for other purposes.",
        ["Textilindustrie", "Fabrik", "Historisch"],
        ["Textilipar", "Gyár", "Történelmi"],
        ["Industria textilă", "Fabrică", "Istoric"],
        ["Textile industry", "Factory", "Historical"])

# Triesenberg
add_poi("steg-kapelle", "LI-003", 9.5760, 47.1140,
        "Kapelle Steg", "Steg-kápolna", "Capela Steg", "Steg Chapel",
        "Eine kleine Kapelle im Bergdorf Steg, oft von Wanderern besucht.",
        "Egy kis kápolna Steg hegyi faluban, amelyet gyakran látogatnak a túrázók.",
        "O mică capelă în satul de munte Steg, vizitată des de drumeți.",
        "A small chapel in the mountain village of Steg, often visited by hikers.",
        ["Bergdorf", "Wandern", "Kapelle"],
        ["Hegyi falu", "Túrázás", "Kápolna"],
        ["Sat de munte", "Drumeție", "Capelă"],
        ["Mountain village", "Hiking", "Chapel"])

# Schaan
add_poi("lindaplatz-schaan", "LI-002", 9.4845, 47.1665,
        "Lindaplatz", "Lindaplatz", "Piața Linda", "Linda Square",
        "Ein historischer und kultureller Versammlungsplatz im Zentrum von Schaan.",
        "Történelmi és kulturális gyülekezőhely Schaan központjában.",
        "Un loc de adunare istoric și cultural în centrul orașului Schaan.",
        "A historical and cultural gathering place in the center of Schaan.",
        ["Versammlungsort", "Zentrum", "Kultur"],
        ["Gyülekezőhely", "Központ", "Kultúra"],
        ["Loc de adunare", "Centru", "Cultură"],
        ["Gathering place", "Center", "Culture"])

# Eschen
add_poi("postamt-eschen", "LI-006", 9.5225, 47.2120,
        "Altes Postamt", "Régi Postahivatal", "Vechiul Oficiu Poștal", "Old Post Office",
        "Das ehemalige Postgebäude, das lange Zeit der Knotenpunkt der Kommunikation im Dorf war.",
        "Az egykori postaépület, amely sokáig a falu kommunikációs központja volt.",
        "Fosta clădire a poștei, care a fost mult timp nodul de comunicare din sat.",
        "The former post office building, which was the communication hub of the village for a long time.",
        ["Kommunikation", "Dorfzentrum", "Historisch"],
        ["Kommunikáció", "Faluközpont", "Történelmi"],
        ["Comunicare", "Centrul satului", "Istoric"],
        ["Communication", "Village center", "Historical"])

# Mauren
add_poi("postmeisterhaus-mauren", "LI-007", 9.5450, 47.2170,
        "Postmeisterhaus", "Postamester-ház", "Casa Dirigintelui Poștei", "Postmaster's House",
        "Ein historisches Wohnhaus, das einst dem lokalen Postmeister gehörte.",
        "Történelmi lakóház, amely egykor a helyi postamester tulajdonában volt.",
        "O casă de locuit istorică care a aparținut odinioară dirigintelui poștal local.",
        "A historical residential house that once belonged to the local postmaster.",
        ["Wohnhaus", "Postgeschichte", "Historisch"],
        ["Lakóház", "Postatörténet", "Történelmi"],
        ["Casă de locuit", "Istoria poștei", "Istoric"],
        ["Residential house", "Postal history", "Historical"])

# Gamprin
add_poi("statthof-bendern", "LI-011", 9.5060, 47.2110,
        "Statthof Bendern", "Benderi Statthof", "Statthof Bendern", "Bendern Statthof",
        "Ein alter Gutshof, der eng mit der landwirtschaftlichen Geschichte von Bendern verbunden ist.",
        "Egy régi udvarház, amely szorosan kapcsolódik Bendern mezőgazdasági történelméhez.",
        "O veche moșie strâns legată de istoria agricolă a satului Bendern.",
        "An old manor closely connected with the agricultural history of Bendern.",
        ["Gutshof", "Landwirtschaft", "Historisch"],
        ["Udvarház", "Mezőgazdaság", "Történelmi"],
        ["Moșie", "Agricultură", "Istoric"],
        ["Manor", "Agriculture", "Historical"])

# Ruggell
add_poi("alte-rheinbrucke-ruggell", "LI-009", 9.5330, 47.2450,
        "Holzbrücke Ruggell-Sennwald", "Ruggell-Sennwald fahíd", "Podul de lemn Ruggell-Sennwald", "Ruggell-Sennwald Wooden Bridge",
        "Eine gedeckte Holzbrücke, die Ruggell mit der Schweizer Gemeinde Sennwald verbindet.",
        "Fedett fahíd, amely Ruggellt a svájci Sennwald községgel köti össze.",
        "Un pod de lemn acoperit care leagă Ruggell de comuna elvețiană Sennwald.",
        "A covered wooden bridge connecting Ruggell with the Swiss municipality of Sennwald.",
        ["Holzbrücke", "Grenzübergang", "Rhein"],
        ["Fahíd", "Határátkelő", "Rajna"],
        ["Pod de lemn", "Punct de trecere", "Rin"],
        ["Wooden bridge", "Border crossing", "Rhine"])

# Schellenberg
add_poi("alte-sennerei-schellenberg", "LI-008", 9.5490, 47.2320,
        "Alte Sennerei Schellenberg", "Régi schellenbergi sajtüzem", "Vechea lăptărie din Schellenberg", "Old Schellenberg Dairy",
        "Das Gebäude der alten Dorfsennerei, das heute historische Einblicke bietet.",
        "A régi falusi sajtüzem épülete, amely ma történelmi betekintést nyújt.",
        "Clădirea vechii lăptării din sat, care oferă astăzi perspective istorice.",
        "The building of the old village dairy, offering historical insights today.",
        ["Käseherstellung", "Dorfleben", "Historisch"],
        ["Sajtkészítés", "Falusi élet", "Történelmi"],
        ["Producția de brânză", "Viața la țară", "Istoric"],
        ["Cheese making", "Village life", "Historical"])

with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraLiechtensteinHistory.ts', 'w', encoding='utf-8') as f:
    f.write('import { POI } from "./poi";\n\n')
    f.write('export const poiExtraLiechtensteinHistory: POI[] = [\n')
    
    for i, poi in enumerate(pois):
        # Escape quotes in strings
        for lang in ['de', 'hu', 'ro', 'en']:
            poi['name'][lang] = poi['name'][lang].replace('"', '\\"').replace("'", "\\'")
            poi['description'][lang] = poi['description'][lang].replace('"', '\\"').replace("'", "\\'")
            poi['facts'][lang] = [fact.replace('"', '\\"').replace("'", "\\'") for fact in poi['facts'][lang]]
        
        f.write('  {\n')
        f.write(f'    id: "{poi["id"]}",\n')
        f.write(f'    type: "{poi["type"]}",\n')
        f.write(f'    parent: "{poi["parent"]}",\n')
        f.write(f'    coords: [{poi["coords"][0]}, {poi["coords"][1]}],\n')
        
        # Name
        f.write('    name: { ')
        f.write(f'de: "{poi["name"]["de"]}", hu: "{poi["name"]["hu"]}", ro: "{poi["name"]["ro"]}", en: "{poi["name"]["en"]}"')
        f.write(' },\n')
        
        # Description
        f.write('    description: { ')
        f.write(f'de: "{poi["description"]["de"]}", hu: "{poi["description"]["hu"]}", ro: "{poi["description"]["ro"]}", en: "{poi["description"]["en"]}"')
        f.write(' },\n')
        
        # Facts
        f.write('    facts: {\n')
        for lang in ['de', 'hu', 'ro', 'en']:
            facts_str = ', '.join([f'"{fact}"' for fact in poi["facts"][lang]])
            f.write(f'      {lang}: [{facts_str}]{"," if lang != "en" else ""}\n')
        f.write('    }\n')
        
        if i < len(pois) - 1:
            f.write('  },\n')
        else:
            f.write('  }\n')
            
    f.write('];\n')

print(f"Generated {len(pois)} POIs.")
