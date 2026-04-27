
import type { POI } from "./poi";

export const poiExtraAustriaHistorical: POI[] = [
  {
    id: "historical-schallaburg-extra",
    type: "historical",
    parent: "AT-3",
    coords: [15.3586, 48.2231],
    name: { de: "Schallaburg", hu: "Schallaburg", ro: "Castelul Schallaburg", en: "Schallaburg Castle" },
    description: {
      de: "Ein Renaissanceschloss in Niederösterreich, bekannt für seine jährlich wechselnden, hochkarätigen internationalen Ausstellungen.",
      hu: "Reneszonánsz kastély Alsó-Ausztriában, amely évente változó, magas színvonalú nemzetközi kiállításairól ismert.",
      ro: "Un castel renascentist în Austria Inferioară, renumit pentru expozițiile sale internaționale anuale de înaltă calitate.",
      en: "A Renaissance castle in Lower Austria, known for its annual, high-quality international exhibitions."
    },
    facts: {
      de: ["Eines der schönsten Renaissanceschlösser nördlich der Alpen.", "Der Arkadenhof ist mit über 1.600 Terrakotten verziert.", "Die Ausstellungen ziehen jährlich Tausende von Besuchern an."],
      hu: ["Az Alpoktól északra található egyik legszebb reneszánsz kastély.", "Az árkádos udvart több mint 1600 terrakotta díszíti.", "A kiállítások évente több ezer látogatót vonzanak."],
      ro: ["Unul dintre cele mai frumoase castele renascentiste la nord de Alpi.", "Curtea cu arcade este decorată cu peste 1.600 de teracote.", "Expozițiile atrag mii de vizitatori anual."],
      en: ["One of the most beautiful Renaissance castles north of the Alps.", "The arcaded courtyard is decorated with over 1,600 terracottas.", "The exhibitions attract thousands of visitors annually."]
    }
  },
  {
    id: "landmark-basilika-mariazell-extra",
    type: "landmark",
    parent: "AT-6",
    coords: [15.3175, 47.7725],
    name: { de: "Basilika Mariazell", hu: "Mariazelli bazilika", ro: "Bazilica din Mariazell", en: "Mariazell Basilica" },
    description: {
      de: "Der wichtigste Wallfahrtsort Österreichs und ein spirituelles Zentrum für Katholiken aus ganz Mitteleuropa.",
      hu: "Ausztria legfontosabb zarándokhelye és a közép-európai katolikusok spirituális központja.",
      ro: "Cel mai important loc de pelerinaj din Austria și un centru spiritual pentru catolicii din întreaga Europă Centrală.",
      en: "The most important pilgrimage site in Austria and a spiritual center for Catholics from all over Central Europe."
    },
    facts: {
      de: ["Beherbergt die 'Magna Mater Austriae', ein hölzernes Gnadenbild der Jungfrau Maria.", "Die Schatzkammern zeigen Votivgaben aus Jahrhunderten.", "Barocke und gotische Architekturelemente vereinen sich."],
      hu: ["Itt található a 'Magna Mater Austriae', Szűz Mária fából készült kegyképe.", "A kincstárak évszázadok fogadalmi ajándékait mutatják be.", "A barokk és gótikus építészeti elemek ötvöződnek."],
      ro: ["Găzduiește 'Magna Mater Austriae', o imagine miraculoasă din lemn a Fecioarei Maria.", "Tezaurele expun ofrande votive de-a lungul secolelor.", "Combină elemente arhitecturale baroce și gotice."],
      en: ["Houses the 'Magna Mater Austriae', a wooden miraculous image of the Virgin Mary.", "The treasuries display votive offerings from centuries.", "Combines Baroque and Gothic architectural elements."]
    }
  },
  {
    id: "castle-riegersburg-extra",
    type: "castle",
    parent: "AT-6",
    coords: [15.935, 46.986],
    name: { de: "Riegersburg", hu: "Riegersburg", ro: "Cetatea Riegersburg", en: "Riegersburg Castle" },
    description: {
      de: "Eine mächtige Festung auf einem Vulkankegel in der Steiermark, die angeblich nie erobert wurde.",
      hu: "Hatalmas erőd egy vulkáni kúpon Stájerországban, amelyet állítólag soha nem hódítottak meg.",
      ro: "O fortăreață puternică pe un con vulcanic în Stiria, despre care se spune că nu a fost niciodată cucerită.",
      en: "A mighty fortress on a volcanic cone in Styria, which was supposedly never conquered."
    },
    facts: {
      de: ["Beherbergt ein Hexenmuseum, das an die dunkle Vergangenheit der Region erinnert.", "Der Aufstieg kann zu Fuß oder mit einem Schrägaufzug erfolgen.", "Bietet eine spektakuläre Greifvogelschau."],
      hu: ["Boszorkánymúzeumnak ad otthont, amely a régió sötét múltjára emlékeztet.", "A feljutás gyalog vagy ferde felvonóval lehetséges.", "Látványos ragadozómadár-bemutatót kínál."],
      ro: ["Găzduiește un muzeu al vrăjitoarelor, care amintește de trecutul întunecat al regiunii.", "Urcarea se poate face pe jos sau cu un lift înclinat.", "Oferă un spectacol spectaculos cu păsări de pradă."],
      en: ["Houses a witch museum, reminiscent of the region's dark past.", "The ascent can be done on foot or with an inclined lift.", "Offers a spectacular bird of prey show."]
    }
  },
  {
    id: "monastery-stift-admont-extra",
    type: "monastery",
    parent: "AT-6",
    coords: [14.458, 47.575],
    name: { de: "Stift Admont", hu: "Admonti apátság", ro: "Abația Admont", en: "Admont Abbey" },
    description: {
      de: "Ein Benediktinerkloster in der Steiermark, berühmt für die größte Klosterbibliothek der Welt.",
      hu: "Bencés kolostor Stájerországban, a világ legnagyobb kolostori könyvtáráról híres.",
      ro: "O mănăstire benedictină în Stiria, renumită pentru cea mai mare bibliotecă mănăstirească din lume.",
      en: "A Benedictine monastery in Styria, famous for the largest monastery library in the world."
    },
    facts: {
      de: ["Die Bibliothek ist ein Meisterwerk des Spätbarocks.", "Beherbergt auch ein Museum für zeitgenössische Kunst.", "Gelegen im Nationalpark Gesäuse."],
      hu: ["A könyvtár a késő barokk mesterműve.", "Kortárs művészeti múzeumnak is otthont ad.", "A Gesäuse Nemzeti Parkban található."],
      ro: ["Biblioteca este o capodoperă a barocului târziu.", "Găzduiește, de asemenea, un muzeu de artă contemporană.", "Situată în Parcul Național Gesäuse."],
      en: ["The library is a masterpiece of the late Baroque.", "Also houses a museum of contemporary art.", "Located in the Gesäuse National Park."]
    }
  },
  {
    id: "historical-carnuntum-extra",
    type: "historical",
    parent: "AT-3",
    coords: [16.86, 48.11],
    name: { de: "Archäologischer Park Carnuntum", hu: "Carnuntum Régészeti Park", ro: "Parcul Arheologic Carnuntum", en: "Carnuntum Archaeological Park" },
    description: {
      de: "Eine rekonstruierte römische Stadt, die das zivile und militärische Leben an der pannonischen Grenze im 4. Jahrhundert n. Chr. zeigt.",
      hu: "Rekonstruált római város, amely a pannóniai határ menti polgári és katonai életet mutatja be a 4. században.",
      ro: "Un oraș roman reconstruit care prezintă viața civilă și militară de la granița panonică în secolul al IV-lea d.Hr.",
      en: "A reconstructed Roman city showcasing civilian and military life on the Pannonian frontier in the 4th century AD."
    },
    facts: {
      de: ["War die Hauptstadt der römischen Provinz Pannonia Superior.", "Weltweit einzigartige Rekonstruktion eines römischen Stadtviertels.", "Das Amphitheater bot Platz für 13.000 Zuschauer."],
      hu: ["Pannonia Superior római provincia fővárosa volt.", "Egy római városnegyed világszerte egyedülálló rekonstrukciója.", "Az amfiteátrum 13 000 nézőt tudott befogadni."],
      ro: ["A fost capitala provinciei romane Pannonia Superior.", "Reconstrucție unică la nivel mondial a unui cartier roman.", "Amfiteatrul avea o capacitate de 13.000 de spectatori."],
      en: ["Was the capital of the Roman province of Pannonia Superior.", "World-unique reconstruction of a Roman city quarter.", "The amphitheater had a capacity of 13,000 spectators."]
    }
  },
  {
    id: "castle-forchtenstein-extra",
    type: "castle",
    parent: "AT-1",
    coords: [16.34, 47.71],
    name: { de: "Burg Forchtenstein", hu: "Fraknó vára", ro: "Cetatea Forchtenstein", en: "Forchtenstein Castle" },
    description: {
      de: "Eine mächtige Festung im Burgenland, die als Schatzkammer der Fürsten Esterházy diente.",
      hu: "Hatalmas erőd Burgenlandban, amely az Esterházy hercegek kincstáraként szolgált.",
      ro: "O fortăreață puternică în Burgenland, care a servit drept tezaur al prinților Esterházy.",
      en: "A mighty fortress in Burgenland that served as the treasury of the Esterházy princes."
    },
    facts: {
      de: ["Beherbergt eine der größten privaten Waffensammlungen Europas.", "Der 'Brunnenschacht' ist 142 Meter tief.", "Wurde nie von Feinden eingenommen."],
      hu: ["Európa egyik legnagyobb magán-fegyvergyűjteményének ad otthont.", "A kút 142 méter mély.", "Soha nem vették be ellenségei."],
      ro: ["Găzduiește una dintre cele mai mari colecții private de arme din Europa.", "Puțul are o adâncime de 142 de metri.", "Nu a fost niciodată cucerită de dușmani."],
      en: ["Houses one of the largest private weapon collections in Europe.", "The well shaft is 142 meters deep.", "Was never taken by enemies."]
    }
  },
  {
    id: "monastery-stift-göttweig-extra",
    type: "monastery",
    parent: "AT-3",
    coords: [15.61, 48.36],
    name: { de: "Stift Göttweig", hu: "Göttweigi apátság", ro: "Abația Göttweig", en: "Göttweig Abbey" },
    description: {
      de: "Ein Benediktinerkloster hoch über der Donau, oft als das 'Österreichische Montecassino' bezeichnet.",
      hu: "Bencés apátság magasan a Duna felett, gyakran 'osztrák Montecassino'-nak nevezik.",
      ro: "O mănăstire benedictină situată deasupra Dunării, adesea denumită 'Montecassino-ul Austriei'.",
      en: "A Benedictine monastery high above the Danube, often referred to as the 'Austrian Montecassino'."
    },
    facts: {
      de: ["Teil des UNESCO-Welterbes Wachau.", "Die Kaiserstiege mit dem berühmten Deckenfresko von Paul Troger.", "Hervorragender Weinanbau seit dem Mittelalter."],
      hu: ["A Wachau UNESCO világörökség része.", "A császári lépcsőház Paul Troger híres mennyezetfreskójával.", "Kiváló bortermelés a középkor óta."],
      ro: ["Parte a Patrimoniului Mondial UNESCO Wachau.", "Scara Imperială cu celebra frescă pe tavan de Paul Troger.", "Viticultură excelentă încă din Evul Mediu."],
      en: ["Part of the Wachau UNESCO World Heritage Site.", "The Imperial Staircase with the famous ceiling fresco by Paul Troger.", "Excellent viticulture since the Middle Ages."]
    }
  },
  {
    id: "landmark-schloss-hellbrunn-extra",
    type: "landmark",
    parent: "AT-5",
    coords: [13.06, 47.76],
    name: { de: "Schloss Hellbrunn", hu: "Hellbrunni kastély", ro: "Palatul Hellbrunn", en: "Hellbrunn Palace" },
    description: {
      de: "Ein Lustschloss bei Salzburg, berühmt für seine einzigartigen Wasserspiele, die seit 400 Jahren fast unverändert sind.",
      hu: "Gyönyörű kastély Salzburg mellett, híres egyedi vízi játékairól, amelyek 400 éve szinte változatlanok.",
      ro: "Un palat de plăcere lângă Salzburg, renumit pentru jocurile sale de apă unice, care au rămas aproape neschimbate timp de 400 de ani.",
      en: "A pleasure palace near Salzburg, famous for its unique water features, which have remained almost unchanged for 400 years."
    },
    facts: {
      de: ["Erbaut von Fürsterzbischof Markus Sittikus.", "Die Wasserspiele verbergen überraschende Spritzbrunnen.", "Der Park beherbergt auch den Salzburger Zoo."],
      hu: ["Markus Sittikus hercegérsek építtette.", "A vízi játékok meglepő szökőkutakat rejtenek.", "A parkban található a Salzburgi Állatkert is."],
      ro: ["Construit de principele-arhiepiscop Markus Sittikus.", "Jocurile de apă ascund fântâni cu jeturi surpriză.", "Parcul găzduiește și Grădina Zoologică din Salzburg."],
      en: ["Built by Prince-Archbishop Markus Sittikus.", "The water features hide surprising trick fountains.", "The park also houses the Salzburg Zoo."]
    }
  },
  {
    id: "castle-schloss-artstetten-extra",
    type: "castle",
    parent: "AT-3",
    coords: [15.20, 48.23],
    name: { de: "Schloss Artstetten", hu: "Artstetteni kastély", ro: "Castelul Artstetten", en: "Artstetten Castle" },
    description: {
      de: "Die letzte Ruhestätte von Thronfolger Franz Ferdinand und seiner Frau Sophie, deren Ermordung den Ersten Weltkrieg auslöste.",
      hu: "Ferenc Ferdinánd trónörökös és felesége, Zsófia utolsó nyughelye, akiknek meggyilkolása kirobbantotta az első világháborút.",
      ro: "Locul de odihnă final al arhiducelui Franz Ferdinand și al soției sale Sophie, a căror asasinare a declanșat Primul Război Mondial.",
      en: "The final resting place of Archduke Franz Ferdinand and his wife Sophie, whose assassination triggered World War I."
    },
    facts: {
      de: ["Das Schloss beherbergt ein Museum über das Leben des Thronfolgers.", "Es ist immer noch im Besitz der Familie Hohenberg.", "Jährliche Gedenkfeiern finden hier statt."],
      hu: ["A kastélyban a trónörökös életét bemutató múzeum található.", "Még mindig a Hohenberg család tulajdonában van.", "Évente megemlékezéseket tartanak itt."],
      ro: ["Castelul găzduiește un muzeu despre viața arhiducelui.", "Este încă în proprietatea familiei Hohenberg.", "Aici au loc comemorări anuale."],
      en: ["The castle houses a museum about the life of the heir to the throne.", "It is still owned by the Hohenberg family.", "Annual commemorative ceremonies are held here."]
    }
  },
  {
    id: "historical-keltendorf-schwarzenbach-extra",
    type: "historical",
    parent: "AT-3",
    coords: [16.36, 47.63],
    name: { de: "Keltendorf Schwarzenbach", hu: "Schwarzenbachi kelta falu", ro: "Satul celtic Schwarzenbach", en: "Celtic Village Schwarzenbach" },
    description: {
      de: "Ein Freilichtmuseum, das eine keltische Siedlung aus der Eisenzeit rekonstruiert und das Leben der Kelten veranschaulicht.",
      hu: "Szabadtéri múzeum, amely egy vaskori kelta települést rekonstruál és bemutatja a kelták életét.",
      ro: "Un muzeu în aer liber care reconstruiește o așezare celtică din epoca fierului și ilustrează viața celților.",
      en: "An open-air museum that reconstructs a Celtic settlement from the Iron Age and illustrates the life of the Celts."
    },
    facts: {
      de: ["Basiert auf archäologischen Ausgrabungen vor Ort.", "Zeigt rekonstruierte Wohnhäuser, Werkstätten und Befestigungsanlagen.", "Regelmäßige Veranstaltungen und Workshops zum Thema Kelten."],
      hu: ["Helyszíni régészeti ásatásokon alapul.", "Rekonstruált lakóházakat, műhelyeket és erődítményeket mutat be.", "Rendszeres kelta témájú rendezvények és workshopok."],
      ro: ["Bazat pe săpături arheologice locale.", "Prezintă case de locuit, ateliere și fortificații reconstruite.", "Evenimente și ateliere periodice pe tema celților."],
      en: ["Based on local archaeological excavations.", "Shows reconstructed residential buildings, workshops and fortifications.", "Regular events and workshops on the Celtic theme."]
    }
  },
  {
    id: "castle-burg-kreuzenstein-extra",
    type: "castle",
    parent: "AT-3",
    coords: [16.31, 48.37],
    name: { de: "Burg Kreuzenstein", hu: "Kreuzenstein vára", ro: "Castelul Kreuzenstein", en: "Kreuzenstein Castle" },
    description: {
      de: "Eine im 19. Jahrhundert wiederaufgebaute mittelalterliche Burg, die aus originalen mittelalterlichen Bauteilen aus ganz Europa zusammengesetzt wurde.",
      hu: "A 19. században újjáépített középkori vár, amelyet Európa-szerte gyűjtött eredeti középkori építőelemekből állítottak össze.",
      ro: "Un castel medieval reconstruit în secolul al XIX-lea, asamblat din componente structurale medievale originale din întreaga Europă.",
      en: "A medieval castle rebuilt in the 19th century, assembled from original medieval structural components from all over Europe."
    },
    facts: {
      de: ["Diente als Kulisse für zahlreiche Filme, darunter 'Der Name der Rose' (Teile).", "Beeindruckende Sammlung von Rüstungen und Waffen.", "Besitzt eine voll funktionsfähige Burgküche."],
      hu: ["Számos film forgatási helyszínéül szolgált, köztük 'A rózsa neve' (részben).", "Lenyűgöző páncél- és fegyvergyűjtemény.", "Teljesen működőképes várkonyhával rendelkezik."],
      ro: ["A servit drept decor pentru numeroase filme, inclusiv 'Numele Trandafirului' (părți).", "Colecție impresionantă de armuri și arme.", "Are o bucătărie de castel complet funcțională."],
      en: ["Served as a backdrop for numerous films, including 'The Name of the Rose' (parts).", "Impressive collection of armor and weapons.", "Has a fully functional castle kitchen."]
    }
  },
  {
    id: "monastery-stift-zwettl-extra",
    type: "monastery",
    parent: "AT-3",
    coords: [15.20, 48.61],
    name: { de: "Stift Zwettl", hu: "Zwettli apátság", ro: "Abația Zwettl", en: "Zwettl Abbey" },
    description: {
      de: "Ein Zisterzienserkloster im Waldviertel, eines der ältesten und besterhaltenen seiner Art weltweit.",
      hu: "Ciszterci kolostor a Waldviertelben, a világ egyik legrégebbi és legjobb állapotban fennmaradt ilyen jellegű épülete.",
      ro: "O mănăstire cisterciană în Waldviertel, una dintre cele mai vechi și mai bine conservate de acest fel din lume.",
      en: "A Cistercian monastery in the Waldviertel, one of the oldest and best-preserved of its kind in the world."
    },
    facts: {
      de: ["Gegründet im Jahr 1138 von Hadmar I. von Kuenring.", "Romanischer Kreuzgang und gotisches Brunnenhaus sind Highlights.", "Berühmt für seine Terrassengärten und Fischzucht."],
      hu: ["1138-ban alapította I. Hadmar von Kuenring.", "A román stílusú kerengő és a gótikus kútház kiemelkedő részei.", "Híres teraszos kertjeiről és halgazdaságáról."],
      ro: ["Fondată în 1138 de Hadmar I de Kuenring.", "Clotirul romanic și casa fântânii gotice sunt puncte de atracție.", "Renumită pentru grădinile sale terasate și piscicultură."],
      en: ["Founded in 1138 by Hadmar I of Kuenring.", "The Romanesque cloister and Gothic fountain house are highlights.", "Famous for its terraced gardens and fish farming."]
    }
  }
];
