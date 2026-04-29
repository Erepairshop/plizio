
import { POI } from "./poi";

export const poiExtraAndorraHistory: POI[] = [
  // Canillo Parish
  {
    id: "historical-esglesia-de-sant-miquel-de-prats-extra",
    type: "historical",
    parent: "AD-02",
    coords: [1.5975, 42.5714],
    name: {
      de: "Kirche Sant Miquel de Prats",
      hu: "Sant Miquel de Prats templom",
      ro: "Biserica Sant Miquel de Prats",
      en: "Church of Sant Miquel de Prats"
    },
    description: {
      de: "Eine romanische Kirche im Dorf Prats, bekannt für ihre einfache Architektur und historischen Wandmalereien.",
      hu: "Egy román stílusú templom Prats faluban, amely egyszerű építészetéről és történelmi falfestményeiről ismert.",
      ro: "O biserică romanică în satul Prats, remarcabilă pentru arhitectura sa simplă și picturile murale istorice.",
      en: "A Romanesque church located in the village of Prats, notable for its simple architecture and historic murals."
    },
    facts: {
      de: ["Erbaut im 12.-13. Jahrhundert.", "Enthält Reste romanischer Malereien.", "Teil des Kulturerbes von Andorra."],
      hu: ["A 12-13. században épült.", "Román stílusú festmények maradványait tartalmazza.", "Andorra kulturális örökségének része."],
      ro: ["Construită în secolele XII-XIII.", "Conține rămășițe de picturi romanice.", "Face parte din patrimoniul cultural al Andorrei."],
      en: ["Built during the 12th-13th centuries.", "Contains remnants of Romanesque paintings.", "Part of Andorra's cultural heritage."]
    },
    plizioChallenge: "Ha egy restaurátor 3 nap alatt tár fel 1 négyzetméter falfestményt, mennyi idő alatt tárna fel egy 5x3 méteres falfelületet?"
  },
  {
    id: "historical-creu-dels-set-bracos-extra",
    type: "landmark",
    parent: "AD-02",
    coords: [1.6333, 42.5786],
    name: {
      de: "Kreuz der Sieben Arme",
      hu: "A Hét Kar Keresztje",
      ro: "Crucea celor Șapte Brațe",
      en: "Cross of the Seven Arms"
    },
    description: {
      de: "Ein Steinkreuz aus dem 15. Jahrhundert in Canillo, das eine lokale Legende über sieben Brüder darstellt.",
      hu: "Egy 15. századi kőkereszt Canillóban, amely egy helyi legendát ábrázol hét testvérről.",
      ro: "O cruce de piatră din secolul al XV-lea în Canillo, care reprezintă o legendă locală despre șapte frați.",
      en: "A 15th-century stone cross in Canillo that represents a local legend about seven brothers."
    },
    facts: {
      de: ["Gotisches Steinkreuz.", "Jeder Arm symbolisiert einen der Brüder.", "Eine Kopie steht am ursprünglichen Ort."],
      hu: ["Gótikus kőkereszt.", "Minden kar egy-egy testvért szimbolizál.", "Egy másolat áll az eredeti helyén."],
      ro: ["Cruce gotică din piatră.", "Fiecare braț simbolizează unul dintre frați.", "O copie se află la locația originală."],
      en: ["Gothic stone cross.", "Each arm symbolizes one of the brothers.", "A replica stands in its original location."]
    },
    plizioChallenge: "Ha a kereszt eredetileg 7 karú volt, és egy kar letört, hány százaléka maradt meg az eredeti karoknak?"
  },
  {
    id: "historical-esglesia-de-sant-serni-de-canillo-extra",
    type: "historical",
    parent: "AD-02",
    coords: [1.5992, 42.5664],
    name: {
      de: "Kirche Sant Serni de Canillo",
      hu: "Sant Serni de Canillo templom",
      ro: "Biserica Sant Serni de Canillo",
      en: "Church of Sant Serni de Canillo"
    },
    description: {
      de: "Eine Barockkirche aus dem 18. Jahrhundert, die auf den Überresten einer älteren romanischen Struktur erbaut wurde. Ihr Glockenturm ist einer der höchsten in Andorra.",
      hu: "Egy 18. századi barokk templom, amely egy régebbi román kori építmény maradványaira épült. Harangtornya Andorra egyik legmagasabbja.",
      ro: "O biserică barocă din secolul al XVIII-lea, construită pe rămășițele unei structuri romanice mai vechi. Turnul său clopotniță este unul dintre cele mai înalte din Andorra.",
      en: "An 18th-century Baroque church built on the remains of an older Romanesque structure. Its bell tower is one of the tallest in Andorra."
    },
    facts: {
      de: ["Erbaut im 18. Jahrhundert.", "Hat den höchsten Glockenturm in Andorra.", "Besitzt ein barockes Altarbild."],
      hu: ["A 18. században épült.", "Andorra legmagasabb harangtornyával rendelkezik.", "Barokk oltárképe van."],
      ro: ["Construită în secolul al XVIII-lea.", "Are cel mai înalt turn clopotniță din Andorra.", "Deține un retablu baroc."],
      en: ["Built in the 18th century.", "Has the tallest bell tower in Andorra.", "Features a Baroque altarpiece."]
    },
    plizioChallenge: "Ha a harangtorony 33 méter magas, és egy űrhajó 3 m/s sebességgel emelkedik, mennyi idő alatt éri el a torony csúcsát?"
  },
  {
    id: "historical-moli-fariner-de-la-vall-d-incles-extra",
    type: "historical",
    parent: "AD-02",
    coords: [1.666, 42.593],
    name: {
      de: "Mehlmühle im Incles-Tal",
      hu: "Incles-völgyi lisztmalom",
      ro: "Moara de făină din Valea Incles",
      en: "Flour Mill of Incles Valley"
    },
    description: {
      de: "Eine restaurierte Wassermühle, die die traditionelle Getreidemahlerei in den Pyrenäen demonstriert.",
      hu: "Egy felújított vízimalom, amely a hagyományos gabonaőrlést mutatja be a Pireneusokban.",
      ro: "O moară de apă restaurată care demonstrează măcinarea tradițională a cerealelor în Pirinei.",
      en: "A restored watermill demonstrating the traditional process of grinding grain in the Pyrenees."
    },
    facts: {
      de: ["Zeigt traditionelle Mühlentechnik.", "Angetrieben durch den Incles-Fluss.", "Dient als kleines Museum."],
      hu: ["Hagyományos malomtechnikát mutat be.", "Az Incles folyó hajtja.", "Kis múzeumként szolgál."],
      ro: ["Prezintă tehnologia tradițională de măcinat.", "Acționată de râul Incles.", "Servește ca un mic muzeu."],
      en: ["Showcases traditional milling technology.", "Powered by the Incles River.", "Serves as a small museum."]
    },
    plizioChallenge: "Ha a malomkerék percenként 10-szer fordul körbe, hányat fordul egy óra alatt?"
  },
  {
    id: "historical-bordes-de-mereig-extra",
    type: "historical",
    parent: "AD-02",
    coords: [1.63, 42.56],
    name: {
      de: "Hütten von Mereig",
      hu: "Mereig pásztorkunyhói",
      ro: "Bordele din Mereig",
      en: "Bordes of Mereig"
    },
    description: {
      de: "Eine Ansammlung traditioneller Steinhütten (bordes) im Meritxell-Tal, die die historische Bedeutung der Viehzucht in dieser Region bezeugen.",
      hu: "Hagyományos kőkunyhók (bordes) csoportja a Meritxell-völgyben, amelyek a régió állattenyésztésének történelmi jelentőségét tanúsítják.",
      ro: "Un grup de borde tradiționale din piatră în Valea Meritxell, mărturie a importanței istorice a creșterii animalelor în această regiune.",
      en: "A collection of traditional stone huts (bordes) in the Meritxell Valley, testifying to the historical importance of livestock farming in this region."
    },
    facts: {
      de: ["Traditionelle ländliche Bauten.", "Im Meritxell-Tal gelegen.", "Zeugnis der pastoralen Vergangenheit."],
      hu: ["Hagyományos vidéki építmények.", "A Meritxell-völgyben található.", "A pásztorélet múltjának tanúja."],
      ro: ["Construcții rurale tradiționale.", "Situat în Valea Meritxell.", "Mărturie a trecutului pastoral."],
      en: ["Traditional rural constructions.", "Located in the Meritxell Valley.", "Testimony to the pastoral past."]
    },
    plizioChallenge: "Ha 5 kunyhó van, és mindegyik 10 juhot tudott befogadni, hány juhot tudtak összesen elszállásolni?"
  },
  // Encamp Parish
  {
    id: "historical-conjunt-historic-de-les-bons-extra",
    type: "historical",
    parent: "AD-03",
    coords: [1.5833, 42.535],
    name: {
      de: "Historischer Komplex von Les Bons",
      hu: "Les Bons történelmi komplexum",
      ro: "Complexul Istoric Les Bons",
      en: "Historical Complex of Les Bons"
    },
    description: {
      de: "Ein historisches Ensemble, das eine romanische Kirche (Sant Romà), einen Verteidigungsturm und ein altes Taubenhaus umfasst und einen Einblick in das mittelalterliche Leben in Andorra bietet.",
      hu: "Egy történelmi együttes, amely egy román stílusú templomot (Sant Romà), egy védelmi tornyot és egy régi galambdúcot foglal magában, bepillantást nyújtva Andorra középkori életébe.",
      ro: "Un ansamblu istoric care include o biserică romanică (Sant Romà), un turn de apărare și un vechi porumbar, oferind o privire asupra vieții medievale din Andorra.",
      en: "A historical ensemble that includes a Romanesque church (Sant Romà), a defense tower, and an old dovecote, offering a glimpse into medieval life in Andorra."
    },
    facts: {
      de: ["Stammt aus dem 12. Jahrhundert.", "Umfasst eine Kirche, einen Turm und ein Taubenhaus.", "Bietet Panoramablick."],
      hu: ["A 12. századból származik.", "Templomot, tornyot és galambdúcot foglal magában.", "Panorámás kilátást nyújt."],
      ro: ["Datează din secolul al XII-lea.", "Include o biserică, un turn și un porumbar.", "Oferă vederi panoramice."],
      en: ["Dates back to the 12th century.", "Includes a church, tower, and dovecote.", "Offers panoramic views."]
    },
    plizioChallenge: "Ha a védelmi torony 15 méter magas, és minden emelet 3 méter, hány emeletes a torony?"
  },
  {
    id: "historical-esglesia-de-santa-eulalia-d-encamp-extra",
    type: "historical",
    parent: "AD-03",
    coords: [1.582, 42.536],
    name: {
      de: "Kirche Santa Eulàlia d'Encamp",
      hu: "Santa Eulàlia d'Encamp templom",
      ro: "Biserica Santa Eulàlia d'Encamp",
      en: "Church of Santa Eulàlia d'Encamp"
    },
    description: {
      de: "Eine Kirche romanischen Ursprungs mit späteren Erweiterungen. Ihr romanischer Glockenturm, der vom Hauptschiff getrennt ist, ist einer der höchsten und schlanksten in Andorra.",
      hu: "Egy román kori eredetű templom későbbi bővítésekkel. A főhajótól elkülönülő román stílusú harangtornya Andorra egyik legmagasabb és legkarcsúbb tornya.",
      ro: "O biserică de origine romanică cu extinderi ulterioare. Turnul său clopotniță romanic, separat de naos, este unul dintre cele mai înalte și mai zvelte din Andorra.",
      en: "A church of Romanesque origin with later extensions. Its Romanesque bell tower, separate from the main nave, is one of the tallest and most slender in Andorra."
    },
    facts: {
      de: ["Romanischer Ursprung (11.-12. Jh.).", "23 Meter hoher Glockenturm.", "Getrennter Glockenturm ist einzigartig."],
      hu: ["Román kori eredetű (11-12. sz.).", "23 méter magas harangtorony.", "Különálló harangtornya egyedülálló."],
      ro: ["Origine romanică (secolele XI-XII).", "Turn clopotniță de 23 de metri înălțime.", "Turnul clopotniță separat este unic."],
      en: ["Romanesque origin (11th-12th c.).", "23-meter high bell tower.", "Separate bell tower is a unique feature."]
    },
    plizioChallenge: "Mekkora a torony magasságának és egy űrhajó 1 méteres magasságának aránya?"
  },
  {
    id: "historical-museu-de-l-art-sacre-extra",
    type: "historical",
    parent: "AD-03",
    coords: [1.5822, 42.5361],
    name: {
      de: "Museum für Sakrale Kunst",
      hu: "Szakrális Művészeti Múzeum",
      ro: "Muzeul de Artă Sacră",
      en: "Museum of Sacred Art"
    },
    description: {
      de: "Dieses Museum befindet sich neben der Kirche Santa Eulàlia und beherbergt eine Sammlung religiöser Kunst aus verschiedenen Kirchen in der Pfarrei Encamp.",
      hu: "A Santa Eulàlia templom mellett található múzeum az Encamp parókia különböző templomaiból származó vallási művészeti gyűjteménynek ad otthont.",
      ro: "Situat lângă Biserica Santa Eulàlia, acest muzeu găzduiește o colecție de artă religioasă din diverse biserici din parohia Encamp.",
      en: "Located next to the Church of Santa Eulàlia, this museum houses a collection of religious art from various churches in the Encamp parish."
    },
    facts: {
      de: ["Stellt liturgische Gegenstände aus.", "Zeigt Gold- und Silberschmiedearbeiten.", "Enthält romanische und barocke Stücke."],
      hu: ["Liturgikus tárgyakat állít ki.", "Ötvös- és ezüstműves munkákat mutat be.", "Román és barokk darabokat tartalmaz."],
      ro: ["Expune obiecte liturgice.", "Prezintă lucrări de orfevrărie și argintărie.", "Conține piese romanice și baroce."],
      en: ["Displays liturgical objects.", "Showcases gold and silversmith work.", "Contains Romanesque and Baroque pieces."]
    },
    plizioChallenge: "Ha a múzeumban 50 kiállítási tárgy van, és 20% arany, hány aranytárgy van?"
  },
  {
    id: "historical-radio-andorra-extra",
    type: "historical",
    parent: "AD-03",
    coords: [1.633, 42.541],
    name: {
      de: "Sender Radio Andorra",
      hu: "Radio Andorra adótorony",
      ro: "Emițătorul Radio Andorra",
      en: "Radio Andorra Transmitter"
    },
    description: {
      de: "Der historische Radiosender, der von 1939 bis 1981 sendete. Das Gebäude und die Antennen sind ein wichtiges Denkmal der Kommunikationsgeschichte des 20. Jahrhunderts in Europa.",
      hu: "A történelmi rádióadó, amely 1939 és 1981 között sugárzott. Az épület és az antennák a 20. századi európai kommunikációtörténet fontos emlékművei.",
      ro: "Stația de emisie radio istorică care a funcționat între 1939 și 1981. Clădirea și antenele sunt un monument important al istoriei comunicațiilor din secolul XX în Europa.",
      en: "The historic radio broadcasting station that operated from 1939 to 1981. The building and antennas are an important monument to 20th-century communication history in Europe."
    },
    facts: {
      de: ["Gegründet 1939.", "Wichtiger Sender während des 2. WK.", "Ein Symbol des Kalten Krieges."],
      hu: ["1939-ben alapították.", "Fontos adó volt a II. vh. alatt.", "A hidegháború szimbóluma."],
      ro: ["Fondat în 1939.", "Post important în timpul celui de-al Doilea Război Mondial.", "Un simbol al Războiului Rece."],
      en: ["Founded in 1939.", "Important broadcaster during WWII.", "A symbol of the Cold War."]
    },
    plizioChallenge: "Ha a rádió 1939-től 1981-ig működött, hány éven keresztül sugárzott?"
  },
  // Ordino Parish
  {
    id: "historical-casa-d-arenyplandolit-extra",
    type: "landmark",
    parent: "AD-05",
    coords: [1.5333, 42.5562],
    name: {
      de: "Haus Areny-Plandolit",
      hu: "Areny-Plandolit Ház",
      ro: "Casa d'Areny-Plandolit",
      en: "Areny-Plandolit House"
    },
    description: {
      de: "Ein Herrenhaus aus dem 17. Jahrhundert, das das Leben einer wohlhabenden andorranischen Familie vom 17. bis zum 20. Jahrhundert zeigt. Es ist eines der emblematischsten Museen in Andorra.",
      hu: "Egy 17. századi nemesi ház, amely egy gazdag andorrai család életét mutatja be a 17. és 20. század között. Andorra egyik legjellegzetesebb múzeuma.",
      ro: "O casă nobiliară din secolul al XVII-lea care prezintă viața unei familii andorrane înstărite din secolul al XVII-lea până în secolul al XX-lea. Este unul dintre cele mai emblematice muzee din Andorra.",
      en: "A 17th-century manor house showcasing the life of a wealthy Andorran family from the 17th to the 20th century. It is one of the most emblematic museums in Andorra."
    },
    facts: {
      de: ["Erbaut im Jahr 1633.", "Zeigt den Lebensstil einer einflussreichen Familie.", "Hat einen einzigartigen Garten."],
      hu: ["1633-ban épült.", "Egy befolyásos család életmódját mutatja be.", "Egyedülálló kertje van."],
      ro: ["Construită în 1633.", "Prezintă stilul de viață al unei familii influente.", "Are o grădină unică."],
      en: ["Built in 1633.", "Shows the lifestyle of an influential family.", "Has a unique garden."]
    },
    plizioChallenge: "Ha a házat 1633-ban építették, hány év telt el az építése és 2023 között?"
  },
  {
    id: "historical-esglesia-de-sant-corneli-i-sant-cebria-d-ordino-extra",
    type: "historical",
    parent: "AD-05",
    coords: [1.533, 42.556],
    name: {
      de: "Kirche Sant Corneli i Sant Cebrià",
      hu: "Sant Corneli i Sant Cebrià templom",
      ro: "Biserica Sant Corneli i Sant Cebrià",
      en: "Church of Sant Corneli i Sant Cebrià"
    },
    description: {
      de: "Eine mittelalterliche Kirche, die im 17. und 19. Jahrhundert stark umgebaut wurde. Sie beherbergt mehrere barocke Altarbilder und eine romanische Marienstatue aus dem 12. Jahrhundert.",
      hu: "Egy középkori templom, amelyet a 17. és 19. században jelentősen átépítettek. Több barokk oltárképet és egy 12. századi román stílusú Mária-szobrot őriz.",
      ro: "O biserică medievală, puternic modificată în secolele al XVII-lea și al XIX-lea. Găzduiește mai multe retabluri baroce și o statuie romanică a Fecioarei Maria din secolul al XII-lea.",
      en: "A medieval church, heavily modified in the 17th and 19th centuries. It houses several Baroque altarpieces and a 12th-century Romanesque statue of the Virgin Mary."
    },
    facts: {
      de: ["Mittelalterlicher Ursprung.", "Barocke Altarbilder.", "Besitzt eine romanische Schnitzerei der Jungfrau Maria."],
      hu: ["Középkori eredetű.", "Barokk oltárképek.", "Egy román stílusú Mária-faragványt őriz."],
      ro: ["Origine medievală.", "Retabluri baroce.", "Deține o sculptură romanică a Fecioarei Maria."],
      en: ["Medieval origins.", "Baroque altarpieces.", "Holds a Romanesque carving of the Virgin Mary."]
    },
    plizioChallenge: "Ha a Mária-szobor a 12. századból származik, hány évszázados volt 2000-ben?"
  },
  {
    id: "historical-mina-de-ferro-de-llorts-extra",
    type: "historical",
    parent: "AD-05",
    coords: [1.535, 42.599],
    name: {
      de: "Eisenmine von Llorts",
      hu: "Llortsi vasbánya",
      ro: "Mina de Fier din Llorts",
      en: "Llorts Iron Mine"
    },
    description: {
      de: "Ein Teil der 'Eisenroute' von Andorra. Besucher können einen Teil der Mine erkunden, um mehr über die Bedeutung des Eisenerzabbaus in der andorranischen Geschichte zu erfahren.",
      hu: "Andorra 'Vasútjának' része. A látogatók bejárhatják a bánya egy részét, hogy megismerjék a vasércbányászat jelentőségét Andorra történelmében.",
      ro: "Parte a 'Rutei Fierului' din Andorra. Vizitatorii pot explora o parte a minei pentru a învăța despre importanța exploatării minereului de fier în istoria Andorrei.",
      en: "Part of Andorra's 'Iron Route'. Visitors can explore a section of the mine to learn about the importance of iron mining in Andorran history."
    },
    facts: {
      de: ["Aktiv vom 17. bis 19. Jahrhundert.", "Wichtige Industrie für Andorra.", "Teil der Eisenroute."],
      hu: ["A 17-19. század között volt aktív.", "Fontos iparág volt Andorra számára.", "A Vasút része."],
      ro: ["Activă din secolul al XVII-lea până în al XIX-lea.", "Industrie importantă pentru Andorra.", "Parte a Rutei Fierului."],
      en: ["Active from the 17th to 19th centuries.", "Important industry for Andorra.", "Part of the Iron Route."]
    },
    plizioChallenge: "Ha egy bányász naponta 50 kg vasércet termelt ki, mennyit termelt ki egy 20 napos hónapban?"
  },
  {
    id: "historical-auditori-nacional-d-andorra-extra",
    type: "landmark",
    parent: "AD-05",
    coords: [1.532, 42.557],
    name: {
      de: "Nationales Auditorium von Andorra",
      hu: "Andorrai Nemzeti Auditórium",
      ro: "Auditoriul Național al Andorrei",
      en: "National Auditorium of Andorra"
    },
    description: {
      de: "Das wichtigste Konzerthaus Andorras in Ordino. Es befindet sich in einem historischen Gebäude, der Casa Gassia, und ist Schauplatz zahlreicher klassischer Musikfestivals.",
      hu: "Andorra legfontosabb koncertterme Ordinóban. Egy történelmi épületben, a Casa Gassiában található, és számos klasszikus zenei fesztiválnak ad otthont.",
      ro: "Principala sală de concerte din Andorra, situată în Ordino. Se află într-o clădire istorică, Casa Gassia, și găzduiește numeroase festivaluri de muzică clasică.",
      en: "The main concert hall in Andorra, located in Ordino. It is housed in a historic building, Casa Gassia, and is the venue for numerous classical music festivals."
    },
    facts: {
      de: ["Hauptkonzertsaal des Landes.", "In einem historischen Gebäude.", "Austragungsort des Narciso Yepes Festivals."],
      hu: ["Az ország fő koncertterme.", "Egy történelmi épületben található.", "A Narciso Yepes Fesztivál helyszíne."],
      ro: ["Principala sală de concerte a țării.", "Într-o clădire istorică.", "Gazdă a Festivalului Narciso Yepes."],
      en: ["The country's main concert hall.", "Housed in a historic building.", "Venue for the Narciso Yepes Festival."]
    },
    plizioChallenge: "Ha egy koncerten 300 ülőhely van, és a jegyek 85%-a kelt el, hány üres hely maradt?"
  },
  // La Massana Parish
  {
    id: "historical-pont-de-sant-antoni-de-la-grella-extra",
    type: "landmark",
    parent: "AD-04",
    coords: [1.5061, 42.5255],
    name: {
      de: "Brücke Sant Antoni de la Grella",
      hu: "Sant Antoni de la Grella híd",
      ro: "Podul Sant Antoni de la Grella",
      en: "Sant Antoni de la Grella Bridge"
    },
    description: {
      de: "Eine mittelalterliche Brücke mit einem einzigen großen Bogen, die einst ein wichtiger Zugangspunkt nach La Massana war.",
      hu: "Egy középkori híd egyetlen nagy ívvel, amely egykor fontos belépési pont volt La Massanába.",
      ro: "Un pod medieval cu un singur arc mare, care a fost odată un punct de acces crucial către La Massana.",
      en: "A medieval bridge with a single large arch that was once a crucial access point to La Massana."
    },
    facts: {
      de: ["Romanischen Ursprungs.", "Überquert den Fluss Valira del Nord.", "War Teil der alten königlichen Straße."],
      hu: ["Román kori eredetű.", "A Valira del Nord folyón ível át.", "A régi királyi út része volt."],
      ro: ["De origine romanică.", "Traversează râul Valira del Nord.", "Făcea parte din vechiul drum regal."],
      en: ["Of Romanesque origin.", "Crosses the Valira del Nord river.", "Was part of the old royal road."]
    },
    plizioChallenge: "Ha a híd 25 méter hosszú, és egy űrhajó 5 m/s sebességgel halad át felette, mennyi idő alatt teszi meg?"
  },
  {
    id: "historical-esglesia-de-sant-cristofol-d-anyos-extra",
    type: "historical",
    parent: "AD-04",
    coords: [1.5303, 42.5331],
    name: {
      de: "Kirche Sant Cristòfol d'Anyós",
      hu: "Sant Cristòfol d'Anyós templom",
      ro: "Biserica Sant Cristòfol d'Anyós",
      en: "Church of Sant Cristòfol d'Anyós"
    },
    description: {
      de: "Eine romanische Kirche aus dem 12. Jahrhundert auf einem Hügel mit Panoramablick. Sie ist bekannt für ihre Wandmalereien, die Szenen aus dem Jüngsten Gericht darstellen.",
      hu: "Egy 12. századi román stílusú templom egy dombon, panorámás kilátással. Híres falfestményeiről, amelyek az Utolsó Ítélet jeleneteit ábrázolják.",
      ro: "O biserică romanică din secolul al XII-lea, situată pe un deal cu vederi panoramice. Este renumită pentru picturile sale murale care înfățișează scene din Judecata de Apoi.",
      en: "A 12th-century Romanesque church located on a hill with panoramic views. It is famous for its murals depicting scenes from the Last Judgment."
    },
    facts: {
      de: ["Erbaut im 12. Jahrhundert.", "Romanische Wandmalereien.", "Strategische Aussichtslage."],
      hu: ["A 12. században épült.", "Román stílusú falfestmények.", "Stratégiai kilátópont."],
      ro: ["Construită în secolul al XII-lea.", "Picturi murale romanice.", "Locație strategică cu priveliște."],
      en: ["Built in the 12th century.", "Romanesque murals.", "Strategic viewpoint location."]
    },
    plizioChallenge: "Ha a templom 1300 méter magasan van, és te 1000 méteren kezdesz, hány méter szintkülönbséget kell megtenned?"
  },
  {
    id: "historical-museu-del-comic-extra",
    type: "landmark",
    parent: "AD-04",
    coords: [1.5152, 42.5463],
    name: {
      de: "Comic-Museum",
      hu: "Képregénymúzeum",
      ro: "Muzeul Benzilor Desenate",
      en: "Comic Museum"
    },
    description: {
      de: "Das in La Massana gelegene Museum ist der Welt der Comics gewidmet und zeigt wechselnde Ausstellungen von nationalen und internationalen Künstlern.",
      hu: "A La Massanában található múzeum a képregények világának szentelt, és nemzeti és nemzetközi művészek időszakos kiállításait mutatja be.",
      ro: "Situat în La Massana, acest muzeu este dedicat lumii benzilor desenate, prezentând expoziții temporare ale artiștilor naționali și internaționali.",
      en: "Located in La Massana, this museum is dedicated to the world of comics, featuring temporary exhibitions by national and international artists."
    },
    facts: {
      de: ["Einziges Comic-Museum in Andorra.", "Zeigt Originalzeichnungen.", "Veranstaltet häufig Workshops."],
      hu: ["Andorra egyetlen képregénymúzeuma.", "Eredeti rajzokat állít ki.", "Gyakran tart workshopokat."],
      ro: ["Singurul muzeu de benzi desenate din Andorra.", "Expune desene originale.", "Organizează frecvent ateliere."],
      en: ["Andorra's only comic museum.", "Displays original drawings.", "Hosts frequent workshops."]
    },
    plizioChallenge: "Ha egy kiállításon 120 képregényoldal látható, és minden oldal 4 képkockából áll, hány képkocka van összesen?"
  },
  {
    id: "historical-esglesia-de-sant-joan-de-sispony-extra",
    type: "historical",
    parent: "AD-04",
    coords: [1.503, 42.536],
    name: {
      de: "Kirche Sant Joan de Sispony",
      hu: "Sant Joan de Sispony templom",
      ro: "Biserica Sant Joan de Sispony",
      en: "Church of Sant Joan de Sispony"
    },
    description: {
      de: "Eine mittelalterliche Kirche, die im 17. Jahrhundert umgebaut wurde. Sie befindet sich im malerischen Dorf Sispony und bewahrt ein barockes Altarbild.",
      hu: "Egy középkori templom, amelyet a 17. században átépítettek. Sispony festői falujában található, és egy barokk oltárképet őriz.",
      ro: "O biserică medievală, modificată în secolul al XVII-lea. Este situată în satul pitoresc Sispony și păstrează un retablu baroc.",
      en: "A medieval church, modified in the 17th century. It is located in the picturesque village of Sispony and preserves a Baroque altarpiece."
    },
    facts: {
      de: ["Mittelalterlicher Ursprung.", "Im 17. Jahrhundert umgebaut.", "Barockes Altarbild im Inneren."],
      hu: ["Középkori eredetű.", "A 17. században átépítették.", "Belsejében barokk oltárkép található."],
      ro: ["Origine medievală.", "Modificată în secolul al XVII-lea.", "Retablu baroc în interior."],
      en: ["Medieval origin.", "Modified in the 17th century.", "Baroque altarpiece inside."]
    },
    plizioChallenge: "Ha a templomot 1680-ban építették át, hány év telt el azóta 2020-ig?"
  },
  // Andorra la Vella Parish
  {
    id: "historical-esglesia-de-sant-esteve-extra",
    type: "historical",
    parent: "AD-07",
    coords: [1.5211, 42.5075],
    name: {
      de: "Kirche Sant Esteve",
      hu: "Szent István templom",
      ro: "Biserica Sant Esteve",
      en: "Church of Saint Stephen"
    },
    description: {
      de: "Eine Kirche romanischen Ursprungs im Herzen von Andorra la Vella. Sie wurde im 20. Jahrhundert umfassend renoviert, bewahrt aber ihre ursprüngliche Apsis und Wandmalereien.",
      hu: "Egy román kori eredetű templom Andorra la Vella szívében. A 20. században alaposan felújították, de megőrizte eredeti apszisát és falfestményeit.",
      ro: "O biserică de origine romanică în inima Andorrei la Vella. A fost renovată extensiv în secolul al XX-lea, dar își păstrează absida și picturile murale originale.",
      en: "A church of Romanesque origin in the heart of Andorra la Vella. It was extensively renovated in the 20th century but retains its original apse and murals."
    },
    facts: {
      de: ["Romanischer Ursprung (12. Jh.).", "Lage im historischen Zentrum.", "Enthält romanische Malereien."],
      hu: ["Román kori eredetű (12. sz.).", "A történelmi központban található.", "Román kori festményeket tartalmaz."],
      ro: ["Origine romanică (secolul al XII-lea).", "Situată în centrul istoric.", "Conține picturi romanice."],
      en: ["Romanesque origin (12th c.).", "Located in the historic center.", "Contains Romanesque paintings."]
    },
    plizioChallenge: "Ha a templom eredetileg a 12. században épült és a 20. században újították fel, hány évszázad telt el a kettő között?"
  },
  {
    id: "historical-parlament-d-andorra-consell-general-extra",
    type: "landmark",
    parent: "AD-07",
    coords: [1.5208, 42.507],
    name: {
      de: "Parlament von Andorra (Consell General)",
      hu: "Andorrai Parlament (Consell General)",
      ro: "Parlamentul Andorrei (Consell General)",
      en: "Parliament of Andorra (Consell General)"
    },
    description: {
      de: "Das neue Parlamentsgebäude von Andorra, das sich neben der historischen Casa de la Vall befindet. Es ist der Sitz der Legislative des Fürstentums.",
      hu: "Andorra új parlamentjének épülete, amely a történelmi Casa de la Vall mellett található. Ez a hercegség törvényhozó testületének székhelye.",
      ro: "Noua clădire a parlamentului Andorrei, situată lângă istorica Casa de la Vall. Este sediul puterii legislative a principatului.",
      en: "The new parliament building of Andorra, located next to the historic Casa de la Vall. It is the seat of the principality's legislative branch."
    },
    facts: {
      de: ["Eingeweiht im Jahr 2011.", "Moderner Architekturstil.", "Sitz des andorranischen Parlaments."],
      hu: ["2011-ben avatták fel.", "Modern építészeti stílus.", "Az andorrai parlament székhelye."],
      ro: ["Inaugurat în 2011.", "Stil arhitectural modern.", "Sediul parlamentului andorran."],
      en: ["Inaugurated in 2011.", "Modern architectural style.", "Seat of the Andorran parliament."]
    },
    plizioChallenge: "Ha a parlamentben 28 képviselő van, és a népesség 77 000 fő, hány lakos jut egy képviselőre?"
  },
  {
    id: "historical-barri-antic-andorra-la-vella-extra",
    type: "historical",
    parent: "AD-07",
    coords: [1.5205, 42.5072],
    name: {
      de: "Altstadt von Andorra la Vella",
      hu: "Andorra la Vella óvárosa",
      ro: "Centrul Vechi din Andorra la Vella",
      en: "Old Town of Andorra la Vella"
    },
    description: {
      de: "Das historische Herz der Hauptstadt mit engen Kopfsteinpflasterstraßen, Steinhäusern und wichtigen Gebäuden wie der Casa de la Vall.",
      hu: "A főváros történelmi szíve szűk macskaköves utcákkal, kőházakkal és olyan fontos épületekkel, mint a Casa de la Vall.",
      ro: "Inima istorică a capitalei, cu străzi înguste pavate cu piatră, case de piatră și clădiri importante precum Casa de la Vall.",
      en: "The historic heart of the capital, featuring narrow cobblestone streets, stone houses, and important buildings like the Casa de la Vall."
    },
    facts: {
      de: ["Enge Kopfsteinpflasterstraßen.", "Traditionelle Steingebäude.", "Beherbergt die Casa de la Vall."],
      hu: ["Szűk macskaköves utcák.", "Hagyományos kőépületek.", "Itt található a Casa de la Vall."],
      ro: ["Străzi înguste pavate cu piatră.", "Clădiri tradiționale din piatră.", "Găzduiește Casa de la Vall."],
      en: ["Narrow cobblestone streets.", "Traditional stone buildings.", "Home to the Casa de la Vall."]
    },
    plizioChallenge: "Ha egy utca 2 méter széles, hány ilyen utca férne el egymás mellett egy 20 méter széles területen?"
  },
  {
    id: "historical-rec-del-sola-extra",
    type: "historical",
    parent: "AD-07",
    coords: [1.528, 42.51],
    name: {
      de: "Solà-Bewässerungskanal",
      hu: "Solà öntözőcsatorna",
      ro: "Canalul de irigații Solà",
      en: "Solà Irrigation Canal"
    },
    description: {
      de: "Ein historischer Bewässerungskanal, der heute ein beliebter Wanderweg oberhalb von Andorra la Vella ist und Einblicke in die traditionelle Wassernutzung sowie tolle Ausblicke bietet.",
      hu: "Egy történelmi öntözőcsatorna, amely ma népszerű sétaút Andorra la Vella felett, bepillantást nyújtva a hagyományos vízgazdálkodásba és nagyszerű kilátást kínálva.",
      ro: "Un canal de irigații istoric, acum o potecă populară deasupra Andorrei la Vella, oferind o perspectivă asupra gestionării tradiționale a apei și vederi minunate.",
      en: "A historic irrigation canal, now a popular walking path above Andorra la Vella, offering insights into traditional water management and great views."
    },
    facts: {
      de: ["Historischer Bewässerungsweg.", "Panoramaweg.", "Zeigt traditionelle Landwirtschaft."],
      hu: ["Történelmi öntözőútvonal.", "Panoráma sétaút.", "A hagyományos mezőgazdaságot mutatja be."],
      ro: ["Traseu istoric de irigații.", "Potecă panoramică.", "Prezintă agricultura tradițională."],
      en: ["Historic irrigation path.", "Panoramic walking trail.", "Shows traditional agriculture."]
    },
    plizioChallenge: "Ha a csatorna 2 km hosszú, és 30 perc alatt sétálod végig, mennyi az átlagsebességed km/h-ban?"
  },
  // Sant Julià de Lòria Parish
  {
    id: "historical-esglesia-de-sant-cerni-de-nagol-extra",
    type: "historical",
    parent: "AD-06",
    coords: [1.4939, 42.4789],
    name: {
      de: "Kirche Sant Cerni de Nagol",
      hu: "Sant Cerni de Nagol templom",
      ro: "Biserica Sant Cerni de Nagol",
      en: "Church of Sant Cerni de Nagol"
    },
    description: {
      de: "Eine romanische Kirche aus dem 11. Jahrhundert, die in einen Felsen gehauen ist. Sie ist bekannt für ihre geringe Größe und ihre gut erhaltenen romanischen Wandmalereien.",
      hu: "Egy 11. századi román stílusú templom, amelyet egy sziklába vájtak. Kis méretéről és jól megőrzött román kori falfestményeiről ismert.",
      ro: "O biserică romanică din secolul al XI-lea, sculptată într-o stâncă. Este cunoscută pentru dimensiunile sale reduse și pentru picturile murale romanice bine conservate.",
      en: "An 11th-century Romanesque church carved into a rock. It is known for its small size and its well-preserved Romanesque murals."
    },
    facts: {
      de: ["Erbaut im Jahr 1055.", "In Felsen gehauen.", "Romanische Wandmalereien."],
      hu: ["1055-ben épült.", "Sziklába vájták.", "Román kori falfestmények."],
      ro: ["Construită în 1055.", "Sculptată în stâncă.", "Picturi murale romanice."],
      en: ["Built in 1055.", "Carved into the rock.", "Romanesque murals."]
    },
    plizioChallenge: "Ha a templomot 1055-ben szentelték fel, hányadik évfordulóját ünnepelték 2005-ben?"
  },
  {
    id: "historical-santuari-de-canolic-extra",
    type: "historical",
    parent: "AD-06",
    coords: [1.48, 42.44],
    name: {
      de: "Heiligtum von Canòlic",
      hu: "Canòlici szentély",
      ro: "Sanctuarul din Canòlic",
      en: "Sanctuary of Canòlic"
    },
    description: {
      de: "Ein romanisches Heiligtum, das im 17. Jahrhundert umgebaut wurde. Es ist ein wichtiger Wallfahrtsort, an dem eine romanische Marienstatue aus dem 12. Jahrhundert aufbewahrt wird.",
      hu: "Egy román kori szentély, amelyet a 17. században átépítettek. Fontos zarándokhely, amely egy 12. századi román stílusú Mária-szobrot őriz.",
      ro: "Un sanctuar romanic, modificat în secolul al XVII-lea. Este un important loc de pelerinaj, care păstrează o statuie romanică a Fecioarei din secolul al XII-lea.",
      en: "A Romanesque sanctuary, modified in the 17th century. It is an important pilgrimage site, housing a 12th-century Romanesque statue of the Virgin."
    },
    facts: {
      de: ["Romanischer Ursprung (12. Jh.).", "Wichtiger Wallfahrtsort.", "Beherbergt eine verehrte Marienstatue."],
      hu: ["Román kori eredetű (12. sz.).", "Fontos zarándokhely.", "Egy tisztelt Mária-szobrot őriz."],
      ro: ["Origine romanică (secolul al XII-lea).", "Important loc de pelerinaj.", "Găzduiește o statuie venerată a Fecioarei."],
      en: ["Romanesque origin (12th c.).", "Important pilgrimage site.", "Houses a venerated statue of the Virgin."]
    },
    plizioChallenge: "Ha a zarándoklat május utolsó szombatján van, és május 1-je szerda, hanyadikára esik a zarándoklat?"
  },
  {
    id: "historical-pont-de-la-fontaneda-extra",
    type: "landmark",
    parent: "AD-06",
    coords: [1.479, 42.457],
    name: {
      de: "Brücke von Fontaneda",
      hu: "Fontanedai híd",
      ro: "Podul din Fontaneda",
      en: "Fontaneda Bridge"
    },
    description: {
      de: "Eine einfache, aber elegante mittelalterliche Brücke im Dorf Fontaneda, die den rustikalen Charme der alten andorranischen Architektur bewahrt.",
      hu: "Egy egyszerű, mégis elegáns középkori híd Fontaneda faluban, amely megőrzi a régi andorrai építészet rusztikus báját.",
      ro: "Un pod medieval simplu, dar elegant, în satul Fontaneda, care păstrează farmecul rustic al vechii arhitecturi andorrane.",
      en: "A simple yet elegant medieval bridge in the village of Fontaneda, preserving the rustic charm of old Andorran architecture."
    },
    facts: {
      de: ["Mittelalterliche Steinbrücke.", "Liegt im malerischen Dorf Fontaneda.", "Einfaches Bogendesign."],
      hu: ["Középkori kőhíd.", "A festői Fontaneda faluban található.", "Egyszerű íves kialakítás."],
      ro: ["Pod medieval de piatră.", "Situat în satul pitoresc Fontaneda.", "Design simplu în arc."],
      en: ["Medieval stone bridge.", "Located in the picturesque village of Fontaneda.", "Simple arch design."]
    },
    plizioChallenge: "Ha a híd 15 méter hosszú és 3 méter széles, mekkora a területe?"
  },
  {
    id: "historical-laurèdia-air-museum-extra",
    type: "historical",
    parent: "AD-06",
    coords: [1.491, 42.465],
    name: {
      de: "Luftfahrtmuseum Laurèdia",
      hu: "Laurèdia Repülési Múzeum",
      ro: "Muzeul Aerian Laurèdia",
      en: "Laurèdia Air Museum"
    },
    description: {
      de: "Ein Freilichtmuseum in Sant Julià de Lòria, das verschiedene historische Flugzeuge und Hubschrauber ausstellt.",
      hu: "Egy szabadtéri múzeum Sant Julià de Lòriában, amely különböző történelmi repülőgépeket és helikoptereket állít ki.",
      ro: "Un muzeu în aer liber în Sant Julià de Lòria, care expune diverse avioane și elicoptere istorice.",
      en: "An open-air museum in Sant Julià de Lòria that displays various historical aircraft and helicopters."
    },
    facts: {
      de: ["Freilichtmuseum.", "Ausstellung von Flugzeugen.", "Einzigartig in Andorra."],
      hu: ["Szabadtéri múzeum.", "Repülőgépek kiállítása.", "Egyedülálló Andorrában."],
      ro: ["Muzeu în aer liber.", "Expoziție de aeronave.", "Unic în Andorra."],
      en: ["Open-air museum.", "Exhibition of aircraft.", "Unique in Andorra."]
    },
    plizioChallenge: "Ha egy helikopter rotorja percenként 400-szor forog, hányszor forog egy másodperc alatt (kb.)?"
  },
  // Escaldes-Engordany Parish
  {
    id: "historical-pont-d-engordany-extra",
    type: "landmark",
    parent: "AD-08",
    coords: [1.541, 42.510],
    name: {
      de: "Brücke von Engordany",
      hu: "Engordany hídja",
      ro: "Podul din Engordany",
      en: "Engordany Bridge"
    },
    description: {
      de: "Eine mittelalterliche Brücke, die die alten Zentren von Escaldes und Engordany verbindet. Sie ist ein Symbol für die Vereinigung der beiden Städte.",
      hu: "Egy középkori híd, amely összeköti Escaldes és Engordany régi központjait. A két város egyesülésének szimbóluma.",
      ro: "Un pod medieval care leagă vechile centre Escaldes și Engordany. Este un simbol al unirii celor două orașe.",
      en: "A medieval bridge that connects the old centers of Escaldes and Engordany. It is a symbol of the union of the two towns."
    },
    facts: {
      de: ["Erbaut im Jahr 1785.", "Verbindet Escaldes und Engordany.", "Steinbrücke über den Fluss Valira d'Orient."],
      hu: ["1785-ben épült.", "Összeköti Escaldes-t és Engordany-t.", "Kőhíd a Valira d'Orient folyó felett."],
      ro: ["Construit în 1785.", "Leagă Escaldes și Engordany.", "Pod de piatră peste râul Valira d'Orient."],
      en: ["Built in 1785.", "Connects Escaldes and Engordany.", "Stone bridge over the Valira d'Orient river."]
    },
    plizioChallenge: "Ha a hidat 1785-ben építették, hány éves volt 2020-ban?"
  },
  {
    id: "historical-esglesia-de-sant-pere-martir-extra",
    type: "historical",
    parent: "AD-08",
    coords: [1.540, 42.509],
    name: {
      de: "Kirche Sant Pere Màrtir",
      hu: "Sant Pere Màrtir templom",
      ro: "Biserica Sant Pere Màrtir",
      en: "Church of Sant Pere Màrtir"
    },
    description: {
      de: "Eine Kirche, die 1956 erbaut wurde und neoromanische Elemente sowie Granit als Hauptbaumaterial verwendet. Sie ist bekannt für ihre Buntglasfenster.",
      hu: "Egy 1956-ban épült templom, amely neoromán elemeket és gránitot használ fő építőanyagként. Ólomüveg ablakairól ismert.",
      ro: "O biserică construită în 1956, care folosește elemente neo-romanice și granit ca principal material de construcție. Este cunoscută pentru vitraliile sale.",
      en: "A church built in 1956, using neo-Romanesque elements and granite as the main construction material. It is known for its stained glass windows."
    },
    facts: {
      de: ["Erbaut Mitte des 20. Jahrhunderts.", "Neoromanischer Stil.", "Buntglasfenster von Josep de Dalmases."],
      hu: ["A 20. század közepén épült.", "Neoromán stílusú.", "Josep de Dalmases ólomüveg ablakai."],
      ro: ["Construită la mijlocul secolului al XX-lea.", "Stil neo-romanic.", "Vitralii de Josep de Dalmases."],
      en: ["Built in the mid-20th century.", "Neo-Romanesque style.", "Stained glass windows by Josep de Dalmases."]
    },
    plizioChallenge: "Ha a templomnak 10 nagy ólomüveg ablaka van, és mindegyik 150 üvegdarabból áll, hány darab üveget használtak összesen?"
  },
  {
    id: "historical-ciac-centre-d-art-d-escaldes-engordany-extra",
    type: "landmark",
    parent: "AD-08",
    coords: [1.541, 42.509],
    name: {
      de: "CIAC - Kunstzentrum Escaldes-Engordany",
      hu: "CIAC - Escaldes-Engordany Művészeti Központ",
      ro: "CIAC - Centrul de Artă Escaldes-Engordany",
      en: "CIAC - Art Center of Escaldes-Engordany"
    },
    description: {
      de: "Ein Kulturzentrum in einem historischen Gebäude, das Ausstellungen zur lokalen Geschichte, Kunst und den Modellen romanischer Kirchen in Andorra beherbergt.",
      hu: "Egy kulturális központ egy történelmi épületben, amely a helyi történelemmel, művészettel és az andorrai román stílusú templomok makettjeivel kapcsolatos kiállításoknak ad otthont.",
      ro: "Un centru cultural într-o clădire istorică, care găzduiește expoziții despre istoria locală, artă și modele ale bisericilor romanice din Andorra.",
      en: "A cultural center in a historic building that hosts exhibitions on local history, art, and models of Andorra's Romanesque churches."
    },
    facts: {
      de: ["Befindet sich in einem alten Schulgebäude.", "Zeigt Modelle romanischer Kunst.", "Veranstaltet Wechselausstellungen."],
      hu: ["Egy régi iskolaépületben található.", "Román kori művészeti maketteket állít ki.", "Időszakos kiállításokat rendez."],
      ro: ["Situat într-o clădire veche a unei școli.", "Expune modele de artă romanică.", "Găzduiește expoziții temporare."],
      en: ["Located in an old school building.", "Displays models of Romanesque art.", "Hosts temporary exhibitions."]
    },
    plizioChallenge: "Ha egy kiállításon 20 templommakett látható, és mindegyik 1:50 méretarányú, egy 25 méter magas templom makettje milyen magas?"
  },
  {
    id: "historical-font-del-roc-del-metge-extra",
    type: "historical",
    parent: "AD-08",
    coords: [1.542, 42.511],
    name: {
      de: "Quelle Roc del Metge",
      hu: "Roc del Metge forrás",
      ro: "Izvorul Roc del Metge",
      en: "Roc del Metge Spring"
    },
    description: {
      de: "Eine der berühmten Thermalquellen von Escaldes-Engordany, deren Wasser mit 70°C austritt. Es ist die heißeste Thermalquelle in den Pyrenäen.",
      hu: "Escaldes-Engordany egyik híres termálforrása, melynek vize 70°C-on tör a felszínre. A Pireneusok legforróbb termálforrása.",
      ro: "Unul dintre faimoasele izvoare termale din Escaldes-Engordany, a cărui apă izvorăște la 70°C. Este cel mai fierbinte izvor termal din Pirinei.",
      en: "One of the famous hot springs of Escaldes-Engordany, with water emerging at 70°C. It is the hottest thermal spring in the Pyrenees."
    },
    facts: {
      de: ["70°C heißes Thermalwasser.", "Schwefelhaltiges Wasser.", "Historisch für die Wollwäsche genutzt."],
      hu: ["70°C-os termálvíz.", "Kénes víz.", "Történelmileg gyapjúmosásra használták."],
      ro: ["Apă termală la 70°C.", "Apă sulfuroasă.", "Folosit istoric pentru spălarea lânii."],
      en: ["70°C thermal water.", "Sulphurous water.", "Historically used for washing wool."]
    },
    plizioChallenge: "Ha a víz 70°C-os, és a levegő 15°C-os, mekkora a hőmérséklet-különbség?"
  },
  // More POIs to reach 50
  {
    id: "historical-esglesia-de-sant-roma-de-les-bons-extra",
    type: "historical",
    parent: "AD-03",
    coords: [1.5833, 42.535],
    name: {
      de: "Kirche Sant Romà de les Bons",
      hu: "Sant Romà de les Bons templom",
      ro: "Biserica Sant Romà de les Bons",
      en: "Church of Sant Romà de les Bons"
    },
    description: {
      de: "Eine romanische Kirche aus dem 12. Jahrhundert mit lombardischen Einflüssen und bemerkenswerten Wandmalereien, die heute im Nationalmuseum für Katalanische Kunst in Barcelona aufbewahrt werden.",
      hu: "Egy 12. századi, lombard hatásokat mutató román stílusú templom, melynek figyelemre méltó falfestményeit ma a barcelonai Katalán Nemzeti Művészeti Múzeumban őrzik.",
      ro: "O biserică romanică din secolul al XII-lea cu influențe lombarde și picturi murale remarcabile, păstrate acum la Muzeul Național de Artă al Cataloniei din Barcelona.",
      en: "A 12th-century Romanesque church with Lombard influences and notable murals, now preserved in the National Art Museum of Catalonia in Barcelona."
    },
    facts: {
      de: ["Erbaut im 12. Jahrhundert.", "Originalgemälde in Barcelona.", "Teil des Komplexes Les Bons."],
      hu: ["A 12. században épült.", "Eredeti festményei Barcelonában vannak.", "A Les Bons komplexum része."],
      ro: ["Construită în secolul al XII-lea.", "Picturile originale sunt la Barcelona.", "Parte a complexului Les Bons."],
      en: ["Built in the 12th century.", "Original paintings are in Barcelona.", "Part of the Les Bons complex."]
    },
    plizioChallenge: "Ha a falfestményeket 800 km-re szállították Barcelonába, és az út 10 órát tartott, mennyi volt az átlagsebesség?"
  },
  {
    id: "historical-torre-dels-moros-les-bons-extra",
    type: "historical",
    parent: "AD-03",
    coords: [1.5835, 42.5352],
    name: {
      de: "Maurenturm in Les Bons",
      hu: "Mór torony Les Bons-ban",
      ro: "Turnul Maurilor din Les Bons",
      en: "Moors' Tower in Les Bons"
    },
    description: {
      de: "Ein mittelalterlicher Wachturm, der Teil des historischen Komplexes von Les Bons ist und zur Überwachung des Tals diente.",
      hu: "Egy középkori őrtorony, amely a Les Bons-i történelmi komplexum részét képezi, és a völgy megfigyelésére szolgált.",
      ro: "Un turn de veghe medieval care face parte din complexul istoric Les Bons, folosit pentru a supraveghea valea.",
      en: "A medieval watchtower, part of the historical complex of Les Bons, used for surveillance of the valley."
    },
    facts: {
      de: ["Mittelalterlicher Verteidigungsturm.", "Strategische Position.", "Bietet tolle Aussichten."],
      hu: ["Középkori védelmi torony.", "Stratégiai pozíció.", "Nagyszerű kilátást nyújt."],
      ro: ["Turn de apărare medieval.", "Poziție strategică.", "Oferă priveliști minunate."],
      en: ["Medieval defense tower.", "Strategic position.", "Offers great views."]
    },
    plizioChallenge: "Ha a toronyból 15 km-re lehet ellátni, mekkora területet lehet belátni (körként számolva, A=πr²)? Adj meg egy becslést."
  },
  {
    id: "historical-esglesia-de-sant-vicenc-d-enclar-extra",
    type: "historical",
    parent: "AD-07",
    coords: [1.508, 42.498],
    name: {
      de: "Kirche Sant Vicenç d'Enclar",
      hu: "Sant Vicenç d'Enclar templom",
      ro: "Biserica Sant Vicenç d'Enclar",
      en: "Church of Sant Vicenç d'Enclar"
    },
    description: {
      de: "Die Überreste einer vorromanischen Kirche auf einem Hügel, Teil einer größeren mittelalterlichen Festungsanlage. Es ist eine der ältesten Kirchen in Andorra.",
      hu: "Egy dombon álló, preromán stílusú templom maradványai, egy nagyobb középkori erődítmény részeként. Andorra egyik legrégebbi temploma.",
      ro: "Rămășițele unei biserici pre-romanice pe un deal, parte a unei fortificații medievale mai mari. Este una dintre cele mai vechi biserici din Andorra.",
      en: "The remains of a pre-Romanesque church on a hill, part of a larger medieval fortification. It is one of the oldest churches in Andorra."
    },
    facts: {
      de: ["Erbaut um das 8.-9. Jahrhundert.", "Teil einer mittelalterlichen Burg.", "Wichtige archäologische Stätte."],
      hu: ["A 8-9. század körül épült.", "Egy középkori vár része.", "Fontos régészeti lelőhely."],
      ro: ["Construită în jurul secolelor VIII-IX.", "Parte a unui castel medieval.", "Sit arheologic important."],
      en: ["Built around the 8th-9th century.", "Part of a medieval castle.", "Important archaeological site."]
    },
    plizioChallenge: "Ha a templom a 9. században épült, hány évszázaddal korábban, mint a 12. századi Sant Joan de Caselles?"
  },
  {
    id: "landmark-pont-d-escaldes-extra",
    type: "landmark",
    parent: "AD-08",
    coords: [1.5383, 42.5088],
    name: {
      de: "Brücke von Escaldes",
      hu: "Escaldes híd",
      ro: "Podul din Escaldes",
      en: "Escaldes Bridge"
    },
    description: {
      de: "Eine historische Steinbrücke, die das Zentrum von Escaldes-Engordany überspannt und ein Zeugnis der traditionellen Ingenieurskunst der Region ist.",
      hu: "Egy történelmi kőhíd, amely Escaldes-Engordany központját íveli át, tanúbizonyságot téve a régió hagyományos mérnöki tudásáról.",
      ro: "Un pod istoric de piatră care traversează centrul Escaldes-Engordany, o mărturie a ingineriei tradiționale din regiune.",
      en: "A historic stone bridge spanning the center of Escaldes-Engordany, a testament to the region's traditional engineering."
    },
    facts: {
      de: ["Mittelalterlicher Steinbogen.", "Im Herzen der Stadt.", "Fotomotiv."],
      hu: ["Középkori kőív.", "A város szívében.", "Népszerű fotótéma."],
      ro: ["Arc medieval de piatră.", "În inima orașului.", "Loc popular pentru fotografii."],
      en: ["Medieval stone arch.", "In the heart of the city.", "Popular photo spot."]
    },
    plizioChallenge: "Ha a híd 20 méter hosszú, hány lépés egy átlagos embernek (0,75 m/lépés) átkelni rajta?"
  },
  {
    id: "historical-esglesia-de-sant-jaume-dels-cortals-extra",
    type: "historical",
    parent: "AD-03",
    coords: [1.6167, 42.5333],
    name: {
      de: "Kirche Sant Jaume dels Cortals",
      hu: "Sant Jaume dels Cortals templom",
      ro: "Biserica Sant Jaume dels Cortals",
      en: "Church of Sant Jaume dels Cortals"
    },
    description: {
      de: "Eine moderne Kirche in den Bergen von Encamp, bekannt für ihre Integration in die natürliche Landschaft und ihre innovative Architektur.",
      hu: "Egy modern templom Encamp hegyei között, amely a természeti tájba való beilleszkedéséről és innovatív építészetéről ismert.",
      ro: "O biserică modernă în munții din Encamp, cunoscută pentru integrarea sa în peisajul natural și arhitectura sa inovatoare.",
      en: "A modern church in the mountains of Encamp, known for its integration with the natural landscape and its innovative architecture."
    },
    facts: {
      de: ["Zeitgenössische religiöse Architektur.", "Erbaut im 20. Jahrhundert.", "Bietet spektakuläre Aussichten."],
      hu: ["Kortárs vallási építészet.", "A 20. században épült.", "Látványos kilátást nyújt."],
      ro: ["Arhitectură religioasă contemporană.", "Construită în secolul XX.", "Oferă vederi spectaculoase."],
      en: ["Contemporary religious architecture.", "Built in the 20th century.", "Offers spectacular views."]
    },
    plizioChallenge: "Ha a templom 1900 méter magasan van, mennyivel van magasabban, mint a 1023 méteren fekvő Andorra la Vella?"
  },
  {
    id: "historical-esglesia-de-sant-andreu-d-arinsal-extra",
    type: "historical",
    parent: "AD-04",
    coords: [1.483, 42.572],
    name: {
      de: "Kirche Sant Andreu d'Arinsal",
      hu: "Sant Andreu d'Arinsal templom",
      ro: "Biserica Sant Andreu d'Arinsal",
      en: "Church of Sant Andreu d'Arinsal"
    },
    description: {
      de: "Eine kleine romanische Kirche im Dorf Arinsal, die im 17. Jahrhundert umgebaut wurde. Sie ist dem Heiligen Andreas gewidmet und bewahrt ein barockes Altarbild.",
      hu: "Egy kis román stílusú templom Arinsal faluban, amelyet a 17. században átépítettek. Szent Andrásnak szentelték, és egy barokk oltárképet őriz.",
      ro: "O mică biserică romanică în satul Arinsal, modificată în secolul al XVII-lea. Este dedicată Sfântului Andrei și păstrează un retablu baroc.",
      en: "A small Romanesque church in the village of Arinsal, modified in the 17th century. It is dedicated to Saint Andrew and preserves a Baroque altarpiece."
    },
    facts: {
      de: ["Romanischer Ursprung.", "Barockes Altarbild aus dem 18. Jh.", "Im Dorf Arinsal gelegen."],
      hu: ["Román kori eredetű.", "18. századi barokk oltárkép.", "Arinsal faluban található."],
      ro: ["Origine romanică.", "Retablu baroc din secolul al XVIII-lea.", "Situată în satul Arinsal."],
      en: ["Romanesque origin.", "18th-century Baroque altarpiece.", "Located in the village of Arinsal."]
    },
    plizioChallenge: "Ha a barokk oltárképet 1720-ban készítették, hány évvel később, mint a templom 12. századi alapítását (kb. 1150)?"
  },
  {
    id: "historical-capella-de-sant-mateu-de-pui-d-olivesa-extra",
    type: "historical",
    parent: "AD-06",
    coords: [1.468, 42.455],
    name: {
      de: "Kapelle Sant Mateu de Pui d'Olivesa",
      hu: "Sant Mateu de Pui d'Olivesa kápolna",
      ro: "Capela Sant Mateu de Pui d'Olivesa",
      en: "Chapel of Sant Mateu de Pui d'Olivesa"
    },
    description: {
      de: "Eine kleine romanische Kapelle in Sant Julià de Lòria, die hoch über dem Tal thront und eine einfache, aber eindrucksvolle Architektur aufweist.",
      hu: "Egy kis román stílusú kápolna Sant Julià de Lòriában, magasan a völgy felett, egyszerű, de lenyűgöző építészettel.",
      ro: "O mică capelă romanică în Sant Julià de Lòria, așezată sus deasupra văii, cu o arhitectură simplă, dar impresionantă.",
      en: "A small Romanesque chapel in Sant Julià de Lòria, perched high above the valley, featuring simple yet evocative architecture."
    },
    facts: {
      de: ["Romanische Architektur.", "Panoramablick auf Sant Julià.", "Isolierte, friedliche Lage."],
      hu: ["Román kori építészet.", "Panorámás kilátás Sant Julià-ra.", "Elszigetelt, békés helyen."],
      ro: ["Arhitectură romanică.", "Vederi panoramice ale Sant Julià.", "Locație izolată și pașnică."],
      en: ["Romanesque architecture.", "Panoramic views of Sant Julià.", "Isolated, peaceful location."]
    },
    plizioChallenge: "Ha a kápolnához vezető út 3 km hosszú és 300 méter szintemelkedést tartalmaz, mekkora az átlagos emelkedés százalékban?"
  },
  {
    id: "historical-esglesia-de-sant-roma-d-aixirivall-extra",
    type: "historical",
    parent: "AD-06",
    coords: [1.512, 42.472],
    name: {
      de: "Kirche Sant Romà d'Aixirivall",
      hu: "Sant Romà d'Aixirivall templom",
      ro: "Biserica Sant Romà d'Aixirivall",
      en: "Church of Sant Romà d'Aixirivall"
    },
    description: {
      de: "Eine Kirche romanischen Ursprungs im Dorf Aixirivall, die im 17. Jahrhundert umgebaut wurde. Sie hat einen unverwechselbaren Glockengiebel.",
      hu: "Egy román kori eredetű templom Aixirivall faluban, amelyet a 17. században átépítettek. Jellegzetes harangfala van.",
      ro: "O biserică de origine romanică în satul Aixirivall, modificată în secolul al XVII-lea. Are un clopotniță-zid distinctivă.",
      en: "A church of Romanesque origin in the village of Aixirivall, modified in the 17th century. It has a distinctive bell-gable."
    },
    facts: {
      de: ["Romanischer Ursprung.", "Glockengiebel statt Turm.", "Im Dorf Aixirivall gelegen."],
      hu: ["Román kori eredetű.", "Torony helyett harangfal.", "Aixirivall faluban található."],
      ro: ["Origine romanică.", "Clopotniță-zid în loc de turn.", "Situată în satul Aixirivall."],
      en: ["Romanesque origin.", "Bell-gable instead of a tower.", "Located in the village of Aixirivall."]
    },
    plizioChallenge: "Ha a harangfalon 2 harang van, és az egyik 250 kg, a másik 150 kg, mennyi a két harang össztömege?"
  },
  {
    id: "historical-esglesia-de-sant-isidor-d-ancodina-extra",
    type: "historical",
    parent: "AD-05",
    coords: [1.543, 42.585],
    name: {
      de: "Kirche Sant Iscle i Santa Victòria",
      hu: "Sant Iscle i Santa Victòria templom",
      ro: "Biserica Sant Iscle i Santa Victòria",
      en: "Church of Sant Iscle and Santa Victòria"
    },
    description: {
      de: "Eine romanische Kirche im Dorf La Cortinada, die für ihre gut erhaltenen Wandmalereien aus dem 12. Jahrhundert und ein barockes Altarbild bekannt ist.",
      hu: "Egy román stílusú templom La Cortinada faluban, amely jól megőrzött 12. századi falfestményeiről és egy barokk oltárképéről ismert.",
      ro: "O biserică romanică în satul La Cortinada, cunoscută pentru picturile sale murale bine conservate din secolul al XII-lea și un retablu baroc.",
      en: "A Romanesque church in the village of La Cortinada, known for its well-preserved 12th-century murals and a Baroque altarpiece."
    },
    facts: {
      de: ["Romanische Wandmalereien (12. Jh.).", "Barockes Altarbild.", "Gitter aus Schmiedeeisen."],
      hu: ["12. századi román falfestmények.", "Barokk oltárkép.", "Kovácsoltvas rácsok."],
      ro: ["Picturi murale romanice (secolul al XII-lea).", "Retablu baroc.", "Grile din fier forjat."],
      en: ["12th-century Romanesque murals.", "Baroque altarpiece.", "Wrought iron grilles."]
    },
    plizioChallenge: "Ha a falfestményeket egy 5 fős csapat 2 év alatt restaurálta, hány emberévnyi munka volt?"
  },
  {
    id: "historical-cal-pal-centre-d-interpretacio-extra",
    type: "historical",
    parent: "AD-05",
    coords: [1.5432, 42.5851],
    name: {
      de: "Cal Pal Interpretationszentrum",
      hu: "Cal Pal Értelmező Központ",
      ro: "Centrul de Interpretare Cal Pal",
      en: "Cal Pal Interpretation Center"
    },
    description: {
      de: "Ein historisches Haus in La Cortinada, das in ein Interpretationszentrum umgewandelt wurde und das traditionelle Leben und die Architektur in den andorranischen Tälern zeigt.",
      hu: "Egy történelmi ház La Cortinadában, amelyet értelmező központtá alakítottak át, bemutatva a hagyományos életet és építészetet az andorrai völgyekben.",
      ro: "O casă istorică din La Cortinada, transformată într-un centru de interpretare, care prezintă viața și arhitectura tradițională din văile andorrane.",
      en: "A historic house in La Cortinada, converted into an interpretation center showcasing traditional life and architecture in the Andorran valleys."
    },
    facts: {
      de: ["Traditionelles andorranisches Haus.", "Fokus auf Ethnographie.", "In La Cortinada gelegen."],
      hu: ["Hagyományos andorrai ház.", "Néprajzi fókuszú.", "La Cortinadában található."],
      ro: ["Casă tradițională andorrană.", "Accent pe etnografie.", "Situată în La Cortinada."],
      en: ["Traditional Andorran house.", "Focus on ethnography.", "Located in La Cortinada."]
    },
    plizioChallenge: "Ha egy család 5 generáción át élt a házban, és egy generációt 25 évnek számolunk, hány évig lakták a házat?"
  },
  {
    id: "historical-mola-i-serradora-de-cal-pal-extra",
    type: "historical",
    parent: "AD-05",
    coords: [1.5435, 42.5855],
    name: {
      de: "Sägewerk und Mühle von Cal Pal",
      hu: "Cal Pal fűrész- és vízimalom",
      ro: "Gaterul și Moara de la Cal Pal",
      en: "Sawmill and Mill of Cal Pal"
    },
    description: {
      de: "Ein restauriertes wasserbetriebenes Sägewerk und eine Mühle neben dem Cal Pal Haus, die die industrielle Vergangenheit der Region veranschaulichen.",
      hu: "A Cal Pal ház melletti felújított, vízzel hajtott fűrész- és vízimalom, amely a régió ipari múltját szemlélteti.",
      ro: "Un gater și o moară acționate hidraulic, restaurate, lângă casa Cal Pal, care ilustrează trecutul industrial al regiunii.",
      en: "A restored water-powered sawmill and mill located next to the Cal Pal house, illustrating the industrial past of the region."
    },
    facts: {
      de: ["Wasserbetrieben.", "Zeigt Holz- und Getreideverarbeitung.", "Teil des Cal Pal Komplexes."],
      hu: ["Vízenergia hajtja.", "Fa- és gabonafeldolgozást mutat be.", "A Cal Pal komplexum része."],
      ro: ["Acționată hidraulic.", "Prezintă prelucrarea lemnului și a cerealelor.", "Parte a complexului Cal Pal."],
      en: ["Water-powered.", "Shows wood and grain processing.", "Part of the Cal Pal complex."]
    },
    plizioChallenge: "Ha a fűrész percenként 2 rönköt vág fel, mennyi idő alatt vág fel 50 rönköt?"
  },
  {
    id: "historical-pont-del-riu-dels-cortals-extra",
    type: "landmark",
    parent: "AD-03",
    coords: [1.602, 42.534],
    name: {
      de: "Brücke über den Cortals-Fluss",
      hu: "Cortals-folyó hídja",
      ro: "Podul peste râul Cortals",
      en: "Cortals River Bridge"
    },
    description: {
      de: "Eine traditionelle Steinbrücke in der Nähe von Encamp, die ein Beispiel für die ländliche Ingenieurskunst in den andorranischen Bergen ist.",
      hu: "Egy hagyományos kőhíd Encamp közelében, amely az andorrai hegyvidéki mérnöki munka példája.",
      ro: "Un pod tradițional de piatră lângă Encamp, un exemplu de inginerie rurală din munții andorrani.",
      en: "A traditional stone bridge near Encamp, an example of rural engineering in the Andorran mountains."
    },
    facts: {
      de: ["Ländliche Steinbrücke.", "Überquert einen Gebirgsfluss.", "Rustikaler Charme."],
      hu: ["Vidéki kőhíd.", "Egy hegyi folyón ível át.", "Rusztikus báj."],
      ro: ["Pod rural de piatră.", "Traversează un râu de munte.", "Farmec rustic."],
      en: ["Rural stone bridge.", "Crosses a mountain river.", "Rustic charm."]
    },
    plizioChallenge: "Ha a híd teherbírása 3 tonna, hány 60 kg-os ember mehet át rajta egyszerre?"
  },
  {
    id: "historical-bordes-de-l-armiana-extra",
    type: "historical",
    parent: "AD-02",
    coords: [1.615, 42.573],
    name: {
      de: "Hütten von L'Armiana",
      hu: "L'Armiana pásztorkunyhói",
      ro: "Bordele din L'Armiana",
      en: "Bordes of L'Armiana"
    },
    description: {
      de: "Eine Gruppe traditioneller Steinhütten (bordes) in Canillo, die früher von Hirten als saisonale Unterkunft genutzt wurden.",
      hu: "Hagyományos kőkunyhók (bordes) csoportja Canillóban, amelyeket régen pásztorok használtak szezonális szállásként.",
      ro: "Un grup de borde tradiționale din piatră în Canillo, folosite în trecut de păstori ca adăposturi sezoniere.",
      en: "A group of traditional stone huts (bordes) in Canillo, formerly used by shepherds as seasonal shelters."
    },
    facts: {
      de: ["Traditionelle Hirtenhütten.", "Beispiel für ländliche Architektur.", "Zeugnis der Transhumanz."],
      hu: ["Hagyományos pásztorkunyhók.", "A vidéki építészet példája.", "A transzhumálás tanúja."],
      ro: ["Adăposturi tradiționale de păstori.", "Exemplu de arhitectură rurală.", "Mărturie a transhumanței."],
      en: ["Traditional shepherd huts.", "Example of rural architecture.", "Testimony to transhumance."]
    },
    plizioChallenge: "Ha egy pásztor nyáron 90 napot töltött egy ilyen kunyhóban, ez az év hány százaléka (365 napos évvel számolva)?"
  },
  {
    id: "historical-esglesia-de-sant-marti-de-nagol-extra",
    type: "historical",
    parent: "AD-06",
    coords: [1.4939, 42.4789],
    name: {
      de: "Kirche Sant Martí de Nagol",
      hu: "Sant Martí de Nagol templom",
      ro: "Biserica Sant Martí de Nagol",
      en: "Church of Sant Martí de Nagol"
    },
    description: {
      de: "Eine kleine, einfache romanische Kirche, die in der Nähe der bekannteren Sant Cerni de Nagol liegt und einen weiteren Einblick in die frühe religiöse Architektur Andorras bietet.",
      hu: "Egy kicsi, egyszerű román stílusú templom a ismertebb Sant Cerni de Nagol közelében, amely további bepillantást nyújt Andorra korai vallási építészetébe.",
      ro: "O biserică romanică mică și simplă, situată lângă mai cunoscuta Sant Cerni de Nagol, oferind o altă perspectivă asupra arhitecturii religioase timpurii a Andorrei.",
      en: "A small, simple Romanesque church located near the more famous Sant Cerni de Nagol, offering another glimpse into Andorra's early religious architecture."
    },
    facts: {
      de: ["Einfache romanische Struktur.", "In der Nähe von Sant Cerni de Nagol.", "Felsige Umgebung."],
      hu: ["Egyszerű román stílusú építmény.", "A Sant Cerni de Nagol közelében.", "Sziklás környezetben."],
      ro: ["Structură romanică simplă.", "Aproape de Sant Cerni de Nagol.", "Mediu stâncos."],
      en: ["Simple Romanesque structure.", "Near Sant Cerni de Nagol.", "Rocky surroundings."]
    },
    plizioChallenge: "Ha két templom 200 méterre van egymástól, mennyi idő alatt sétálsz át egyikből a másikba 4 km/h sebességgel?"
  },
  {
    id: "historical-casa-comuna-d-ordino-extra",
    type: "landmark",
    parent: "AD-05",
    coords: [1.5335, 42.5565],
    name: {
      de: "Rathaus von Ordino",
      hu: "Ordino városháza",
      ro: "Primăria din Ordino",
      en: "Ordino Town Hall"
    },
    description: {
      de: "Das Rathaus von Ordino, ein traditionelles andorranisches Gebäude, das als Verwaltungszentrum für die Gemeinde dient und sich im Herzen des malerischen Dorfes befindet.",
      hu: "Ordino városháza, egy hagyományos andorrai épület, amely a község közigazgatási központjaként szolgál, a festői falu szívében.",
      ro: "Primăria din Ordino, o clădire tradițională andorrană care servește drept centru administrativ pentru parohie, situată în inima satului pitoresc.",
      en: "The town hall of Ordino, a traditional Andorran building that serves as the administrative center for the parish, located in the heart of the picturesque village."
    },
    facts: {
      de: ["Verwaltungszentrum von Ordino.", "Traditionelle Steinarchitektur.", "Im historischen Zentrum gelegen."],
      hu: ["Ordino közigazgatási központja.", "Hagyományos kőépítészet.", "A történelmi központban található."],
      ro: ["Centrul administrativ al Ordino.", "Arhitectură tradițională din piatră.", "Situată în centrul istoric."],
      en: ["Administrative center of Ordino.", "Traditional stone architecture.", "Located in the historic center."]
    },
    plizioChallenge: "Ha a városházán 15 ember dolgozik, és Ordino lakossága kb. 5000 fő, hány lakos jut egy hivatalnokra?"
  },
  {
    id: "historical-esglesia-de-sant-miquel-de-la-mosquera-extra",
    type: "historical",
    parent: "AD-03",
    coords: [1.57, 42.53],
    name: {
      de: "Kirche Sant Miquel de la Mosquera",
      hu: "Sant Miquel de la Mosquera templom",
      ro: "Biserica Sant Miquel de la Mosquera",
      en: "Church of Sant Miquel de la Mosquera"
    },
    description: {
      de: "Die Überreste einer kleinen romanischen Kirche in Encamp, deren Apsis erhalten ist und ein Zeugnis der ländlichen religiösen Bauten der Vergangenheit ist.",
      hu: "Egy kis román kori templom maradványai Encampban, melynek apszisa megmaradt, és a múlt vidéki vallási építményeinek tanúja.",
      ro: "Rămășițele unei mici biserici romanice în Encamp, a cărei absidă este conservată, fiind o mărturie a construcțiilor religioase rurale din trecut.",
      en: "The remains of a small Romanesque church in Encamp, with its apse preserved, acting as a testament to the rural religious constructions of the past."
    },
    facts: {
      de: ["Romanische Ruine.", "Erhaltene Apsis.", "Archäologische Stätte."],
      hu: ["Román kori rom.", "Megmaradt apszis.", "Régészeti lelőhely."],
      ro: ["Ruină romanică.", "Absidă conservată.", "Sit arheologic."],
      en: ["Romanesque ruin.", "Preserved apse.", "Archaeological site."]
    },
    plizioChallenge: "Ha a templom eredeti hossza 15 méter volt, és ma már csak a 3 méter hosszú apszis áll, az eredeti hossz hány százaléka maradt meg?"
  },
  {
    id: "historical-pont-de-sornas-extra",
    type: "landmark",
    parent: "AD-05",
    coords: [1.536, 42.573],
    name: {
      de: "Brücke von Sornàs",
      hu: "Sornàs hídja",
      ro: "Podul din Sornàs",
      en: "Sornàs Bridge"
    },
    description: {
      de: "Eine mittelalterliche Steinbrücke im Dorf Sornàs, die ein typisches Beispiel für die Infrastruktur ist, die die verschiedenen Gemeinden in den Tälern von Ordino verband.",
      hu: "Egy középkori kőhíd Sornàs faluban, amely tipikus példája az Ordino völgyeinek különböző közösségeit összekötő infrastruktúrának.",
      ro: "Un pod medieval de piatră în satul Sornàs, un exemplu tipic de infrastructură care lega diferitele comunități din văile Ordino.",
      en: "A medieval stone bridge in the village of Sornàs, a typical example of the infrastructure that connected the different communities in the Ordino valleys."
    },
    facts: {
      de: ["Mittelalterliche Brücke.", "Verbindet Teile des Dorfes Sornàs.", "Aus lokalem Stein gebaut."],
      hu: ["Középkori híd.", "Sornàs falu részeit köti össze.", "Helyi kőből épült."],
      ro: ["Pod medieval.", "Leagă părți ale satului Sornàs.", "Construit din piatră locală."],
      en: ["Medieval bridge.", "Connects parts of Sornàs village.", "Built with local stone."]
    },
    plizioChallenge: "Ha a híd 500 kg/m² teherbírású, és a felülete 20 m², mekkora az összteherbírása kilogrammban?"
  },
  {
    id: "historical-esglesia-de-sant-roc-de-sornas-extra",
    type: "historical",
    parent: "AD-05",
    coords: [1.5365, 42.5735],
    name: {
      de: "Kirche Sant Roc de Sornàs",
      hu: "Sant Roc de Sornàs templom",
      ro: "Biserica Sant Roc de Sornàs",
      en: "Church of Sant Roc de Sornàs"
    },
    description: {
      de: "Eine kleine Kirche aus dem 18. Jahrhundert im Dorf Sornàs, die dem Heiligen Rochus, dem Schutzpatron gegen die Pest, gewidmet ist.",
      hu: "Egy kis 18. századi templom Sornàs faluban, amelyet Szent Rókusnak, a pestis elleni védőszentnek szenteltek.",
      ro: "O mică biserică din secolul al XVIII-lea în satul Sornàs, dedicată Sfântului Roc, protectorul împotriva ciumei.",
      en: "A small 18th-century church in the village of Sornàs, dedicated to Saint Roch, the patron saint against plague."
    },
    facts: {
      de: ["Erbaut im 18. Jahrhundert.", "Dem Heiligen Rochus gewidmet.", "Einfache, ländliche Architektur."],
      hu: ["A 18. században épült.", "Szent Rókusnak szentelték.", "Egyszerű, vidéki építészet."],
      ro: ["Construită în secolul al XVIII-lea.", "Dedicată Sfântului Roc.", "Arhitectură simplă, rurală."],
      en: ["Built in the 18th century.", "Dedicated to Saint Roch.", "Simple, rural architecture."]
    },
    plizioChallenge: "Ha a pestisjárvány 1650-ben érte el a régiót, hány évvel később épült a templom (kb. 1730)?"
  },
  {
    id: "historical-esglesia-de-santa-barbara-d-ordino-extra",
    type: "historical",
    parent: "AD-05",
    coords: [1.5338, 42.5568],
    name: {
      de: "Kirche Santa Bàrbara d'Ordino",
      hu: "Santa Bàrbara d'Ordino templom",
      ro: "Biserica Santa Bàrbara d'Ordino",
      en: "Church of Santa Bàrbara d'Ordino"
    },
    description: {
      de: "Eine kleine Kapelle im Herzen von Ordino, die für ihre einfache Architektur und ihre Rolle im lokalen religiösen Leben bekannt ist.",
      hu: "Egy kis kápolna Ordino szívében, amely egyszerű építészetéről és a helyi vallási életben betöltött szerepéről ismert.",
      ro: "O mică capelă în inima localității Ordino, cunoscută pentru arhitectura sa simplă și rolul său în viața religioasă locală.",
      en: "A small chapel in the heart of Ordino, known for its simple architecture and its role in local religious life."
    },
    facts: {
      de: ["Kleine Kapelle.", "Im Zentrum von Ordino.", "Barocker Stil."],
      hu: ["Kis kápolna.", "Ordino központjában.", "Barokk stílusú."],
      ro: ["Capelă mică.", "În centrul localității Ordino.", "Stil baroc."],
      en: ["Small chapel.", "In the center of Ordino.", "Baroque style."]
    },
    plizioChallenge: "Ha a kápolna 50 fő befogadására képes, és mise alatt 35-en vannak, hány százalékos a telítettség?"
  },
  {
    id: "historical-casa-de-la-vall-extra",
    type: "historical",
    parent: "AD-07",
    coords: [1.52083, 42.50694],
    name: {
      de: "Casa de la Vall",
      hu: "Casa de la Vall (Völgyek Háza)",
      ro: "Casa de la Vall (Casa Văilor)",
      en: "Casa de la Vall (House of the Valleys)"
    },
    description: {
      de: "Der historische Sitz des andorranischen Parlaments (Consell General) von 1702 bis 2011. Das Gebäude aus dem 16. Jahrhundert ist ein Symbol der andorranischen Geschichte und Unabhängigkeit.",
      hu: "Az andorrai parlament (Consell General) történelmi székhelye 1702-től 2011-ig. A 16. századi épület Andorra történelmének és függetlenségének szimbóluma.",
      ro: "Sediul istoric al parlamentului andorran (Consell General) din 1702 până în 2011. Clădirea din secolul al XVI-lea este un simbol al istoriei și independenței Andorrei.",
      en: "The historic seat of the Andorran Parliament (Consell General) from 1702 to 2011. The 16th-century building is a symbol of Andorran history and independence."
    },
    facts: {
      de: ["Erbaut 1580.", "Ehemaliger Parlamentssitz.", "Besitzt historische Dokumente."],
      hu: ["1580-ban épült.", "Korábbi parlamenti székhely.", "Történelmi dokumentumokat őriz."],
      ro: ["Construită în 1580.", "Fostul sediu al parlamentului.", "Deține documente istorice."],
      en: ["Built in 1580.", "Former parliament seat.", "Holds historical documents."]
    },
    plizioChallenge: "Ha a parlament 1702-től 2011-ig ülésezett itt, hány évig használta az épületet?"
  },
  {
    id: "historical-santuari-de-meritxell-original-extra",
    type: "historical",
    parent: "AD-02",
    coords: [1.604, 42.555],
    name: {
      de: "Altes Heiligtum von Meritxell",
      hu: "Régi Meritxell-i szentély",
      ro: "Vechiul Sanctuar din Meritxell",
      en: "Old Sanctuary of Meritxell"
    },
    description: {
      de: "Die Überreste der ursprünglichen romanischen Kapelle, die 1972 bei einem Brand zerstört wurde. Neben dem modernen Heiligtum gelegen, dient es als Gedenkstätte.",
      hu: "Az eredeti román kori kápolna maradványai, amely 1972-ben egy tűzvészben megsemmisült. A modern szentély mellett található, emlékhelyként szolgál.",
      ro: "Rămășițele capelei romanice originale, distrusă într-un incendiu în 1972. Situată lângă sanctuarul modern, servește ca un loc memorial.",
      en: "The remains of the original Romanesque chapel, destroyed in a fire in 1972. Located next to the modern sanctuary, it serves as a memorial site."
    },
    facts: {
      de: ["Romanischer Ursprung.", "1972 durch Feuer zerstört.", "Heute eine Gedenkstätte."],
      hu: ["Román kori eredetű.", "1972-ben tűz pusztította el.", "Ma emlékhely."],
      ro: ["Origine romanică.", "Distrusă de un incendiu în 1972.", "Astăzi este un loc memorial."],
      en: ["Romanesque origin.", "Destroyed by fire in 1972.", "Now a memorial site."]
    },
    plizioChallenge: "Ha a tűz 1972-ben volt, hány év telt el azóta 2024-ig?"
  },
  {
    id: "historical-esglesia-de-sant-miquel-d-aixovall-extra",
    type: "historical",
    parent: "AD-06",
    coords: [1.498, 42.488],
    name: {
      de: "Kirche Sant Miquel d'Aixovall",
      hu: "Sant Miquel d'Aixovall templom",
      ro: "Biserica Sant Miquel d'Aixovall",
      en: "Church of Sant Miquel d'Aixovall"
    },
    description: {
      de: "Eine kleine Kirche in der Nähe von Sant Julià de Lòria, die ursprünglich romanisch war, aber im Laufe der Jahrhunderte stark verändert wurde.",
      hu: "Egy kis templom Sant Julià de Lòria közelében, amely eredetileg román stílusú volt, de az évszázadok során jelentősen átalakították.",
      ro: "O mică biserică lângă Sant Julià de Lòria, inițial romanică, dar puternic modificată de-a lungul secolelor.",
      en: "A small church near Sant Julià de Lòria, originally Romanesque but heavily modified over the centuries."
    },
    facts: {
      de: ["Einfache ländliche Kirche.", "Mehrfach umgebaut.", "In der Nähe von Aixovall."],
      hu: ["Egyszerű vidéki templom.", "Többször átépítették.", "Aixovall közelében."],
      ro: ["Biserică rurală simplă.", "Modificată de mai multe ori.", "Aproape de Aixovall."],
      en: ["Simple rural church.", "Modified several times.", "Near Aixovall."]
    },
    plizioChallenge: "Ha a templom 3 nagyobb átalakításon esett át, és az első 1500-ban, a második 1700-ban, a harmadik 1900-ban volt, hány év telt el az egyes átalakítások között?"
  },
  {
    id: "historical-pont-de-bixessarri-extra",
    type: "landmark",
    parent: "AD-06",
    coords: [1.48, 42.477],
    name: {
      de: "Brücke von Bixessarri",
      hu: "Bixessarri híd",
      ro: "Podul din Bixessarri",
      en: "Bixessarri Bridge"
    },
    description: {
      de: "Eine charmante Steinbrücke im malerischen Dorf Bixessarri, die den Fluss Os überspannt und zum idyllischen Charakter des Ortes beiträgt.",
      hu: "Egy bájos kőhíd a festői Bixessarri faluban, amely az Os folyón ível át és hozzájárul a hely idilli jellegéhez.",
      ro: "Un pod de piatră fermecător în satul pitoresc Bixessarri, care traversează râul Os și contribuie la caracterul idilic al locului.",
      en: "A charming stone bridge in the picturesque village of Bixessarri, spanning the Os River and adding to the idyllic character of the place."
    },
    facts: {
      de: ["Traditionelle Steinbogenbrücke.", "Im Dorf Bixessarri.", "Überquert den Fluss Os."],
      hu: ["Hagyományos kőívhíd.", "Bixessarri faluban.", "Az Os folyón ível át."],
      ro: ["Pod tradițional în arc de piatră.", "În satul Bixessarri.", "Traversează râul Os."],
      en: ["Traditional stone arch bridge.", "In the village of Bixessarri.", "Crosses the Os River."]
    },
    plizioChallenge: "Ha a folyó vízhozama 2 m³/s, mennyi víz folyik át a híd alatt egy perc alatt?"
  },
  {
    id: "historical-esglesia-de-sant-esteve-de-juberri-extra",
    type: "historical",
    parent: "AD-06",
    coords: [1.51, 42.45],
    name: {
      de: "Kirche Sant Esteve de Juberri",
      hu: "Sant Esteve de Juberri templom",
      ro: "Biserica Sant Esteve de Juberri",
      en: "Church of Sant Esteve de Juberri"
    },
    description: {
      de: "Eine kleine romanische Kirche, die in den Juberri-Gärten thront und einen außergewöhnlichen Blick auf das Tal von Sant Julià bietet.",
      hu: "Egy kis román stílusú templom a Juberri kertekben, amely kivételes kilátást nyújt a Sant Julià völgyére.",
      ro: "O mică biserică romanică, cocoțată în grădinile Juberri, oferind o priveliște excepțională asupra văii Sant Julià.",
      en: "A small Romanesque church perched within the Juberri Gardens, offering an exceptional view over the Sant Julià valley."
    },
    facts: {
      de: ["Romanischer Ursprung.", "In den Juberri-Gärten gelegen.", "Spektakuläre Aussicht."],
      hu: ["Román kori eredetű.", "A Juberri kertekben található.", "Látványos kilátás."],
      ro: ["Origine romanică.", "Situată în Grădinile Juberri.", "Priveliște spectaculoasă."],
      en: ["Romanesque origin.", "Located in the Juberri Gardens.", "Spectacular views."]
    },
    plizioChallenge: "Ha a kilátópontról 50 km-re lehet ellátni, és egy űrhajó 500 km/h sebességgel közeledik, mennyi idő múlva láthatnád meg?"
  },
  {
    id: "historical-esglesia-de-sant-serni-de-llorts-extra",
    type: "historical",
    parent: "AD-05",
    coords: [1.535, 42.599],
    name: {
      de: "Kirche Sant Serni de Llorts",
      hu: "Sant Serni de Llorts templom",
      ro: "Biserica Sant Serni de Llorts",
      en: "Church of Sant Serni de Llorts"
    },
    description: {
      de: "Eine kleine Kirche aus dem 17. Jahrhundert im Bergbaudorf Llorts. Sie ist ein einfaches, aber repräsentatives Beispiel für die ländliche Barockarchitektur Andorras.",
      hu: "Egy kis 17. századi templom a bányászfalu Llortsban. Egyszerű, de reprezentatív példája Andorra vidéki barokk építészetének.",
      ro: "O mică biserică din secolul al XVII-lea în satul minier Llorts. Este un exemplu simplu, dar reprezentativ al arhitecturii baroce rurale din Andorra.",
      en: "A small 17th-century church in the mining village of Llorts. It is a simple but representative example of Andorra's rural Baroque architecture."
    },
    facts: {
      de: ["Erbaut im 17. Jahrhundert.", "Ländlicher Barockstil.", "Im Dorf Llorts."],
      hu: ["A 17. században épült.", "Vidéki barokk stílus.", "Llorts faluban."],
      ro: ["Construită în secolul al XVII-lea.", "Stil baroc rural.", "În satul Llorts."],
      en: ["Built in the 17th century.", "Rural Baroque style.", "In the village of Llorts."]
    },
    plizioChallenge: "Ha a falu lakossága 150 fő volt a 17. században, és a templom 50 fő befogadására volt képes, a lakosság hány százaléka fért be egyszerre?"
  },
  {
    id: "historical-casa-rossell-d-ordino-extra",
    type: "historical",
    parent: "AD-05",
    coords: [1.533, 42.557],
    name: {
      de: "Casa Rossell d'Ordino",
      hu: "Casa Rossell d'Ordino",
      ro: "Casa Rossell din Ordino",
      en: "Casa Rossell of Ordino"
    },
    description: {
      de: "Ein weiteres wichtiges Herrenhaus in Ordino, das der einflussreichen Familie Rossell gehörte. Es spiegelt den Reichtum wider, der durch die Eisenindustrie generiert wurde.",
      hu: "Egy másik fontos nemesi ház Ordinóban, amely a befolyásos Rossell családé volt. Tükrözi a vasipar által termelt gazdagságot.",
      ro: "O altă casă nobiliară importantă din Ordino, aparținând influentei familii Rossell. Reflectă bogăția generată de industria fierului.",
      en: "Another important manor house in Ordino, belonging to the influential Rossell family. It reflects the wealth generated by the iron industry."
    },
    facts: {
      de: ["Herrenhaus aus dem 17. Jahrhundert.", "Gehörte der Familie Rossell.", "Verbunden mit der Eisenindustrie."],
      hu: ["17. századi nemesi ház.", "A Rossell családé volt.", "A vasiparhoz kötődik."],
      ro: ["Conac din secolul al XVII-lea.", "A aparținut familiei Rossell.", "Legată de industria fierului."],
      en: ["17th-century manor house.", "Belonged to the Rossell family.", "Linked to the iron industry."]
    },
    plizioChallenge: "Ha egy család vagyona 5000 arany volt, és 10%-át a ház építésére költötték, mennyibe került a ház?"
  },
  {
    id: "historical-pont-pla-extra",
    type: "landmark",
    parent: "AD-07",
    coords: [1.531, 42.515],
    name: {
      de: "Pont Pla Brücke",
      hu: "Pont Pla híd",
      ro: "Podul Pont Pla",
      en: "Pont Pla Bridge"
    },
    description: {
      de: "Eine mittelalterliche Brücke in der Nähe von Andorra la Vella mit einem einzigen Bogen, die ein wichtiges Zeugnis der alten Kommunikationswege des Fürstentums ist.",
      hu: "Egy középkori, egyíves híd Andorra la Vella közelében, amely a hercegség régi közlekedési útvonalainak fontos tanúja.",
      ro: "Un pod medieval cu un singur arc lângă Andorra la Vella, o mărturie importantă a vechilor căi de comunicație ale principatului.",
      en: "A medieval single-arch bridge near Andorra la Vella, an important testimony to the principality's old communication routes."
    },
    facts: {
      de: ["Romanischer Stil.", "Restauriert und gut erhalten.", "In der Nähe der Hauptstadt."],
      hu: ["Román stílusú.", "Felújított és jól megőrzött.", "A főváros közelében."],
      ro: ["Stil romanic.", "Restaurat și bine conservat.", "Aproape de capitală."],
      en: ["Romanesque style.", "Restored and well-preserved.", "Near the capital city."]
    },
    plizioChallenge: "Ha a híd ívének magassága 5 méter, és a szélessége 10 méter, mekkora a magasság/szélesség arány?"
  },
  {
    id: "historical-esglesia-de-sant-bartomeu-de-soldeu-extra",
    type: "historical",
    parent: "AD-02",
    coords: [1.666, 42.578],
    name: {
      de: "Kirche Sant Bartomeu de Soldeu",
      hu: "Sant Bartomeu de Soldeu templom",
      ro: "Biserica Sant Bartomeu de Soldeu",
      en: "Church of Sant Bartomeu de Soldeu"
    },
    description: {
      de: "Eine Kirche aus dem 17. oder 18. Jahrhundert im Dorf Soldeu, die sich durch ihre einfache, aber charmante Bergarchitektur auszeichnet.",
      hu: "Egy 17. vagy 18. századi templom Soldeu faluban, amelyet egyszerű, de bájos hegyi építészete jellemez.",
      ro: "O biserică din secolul al XVII-lea sau al XVIII-lea în satul Soldeu, remarcabilă prin arhitectura sa montană simplă, dar fermecătoare.",
      en: "A 17th or 18th-century church in the village of Soldeu, notable for its simple yet charming mountain architecture."
    },
    facts: {
      de: ["Barocke Bergarchitektur.", "Im Skigebiet von Soldeu.", "Einfacher Grundriss."],
      hu: ["Hegyvidéki barokk építészet.", "Soldeu síterepén.", "Egyszerű alaprajz."],
      ro: ["Arhitectură barocă montană.", "În stațiunea de schi Soldeu.", "Plan simplu."],
      en: ["Mountain Baroque architecture.", "In the ski village of Soldeu.", "Simple floor plan."]
    },
    plizioChallenge: "Ha a templom 1800 méter magasan van, és a hóhatár 1600 méteren, hány méterrel van a templom a hóhatár felett?"
  },
  {
    id: "historical-museu-etnografic-casa-cristo-extra",
    type: "historical",
    parent: "AD-03",
    coords: [1.581, 42.536],
    name: {
      de: "Ethnographisches Museum Casa Cristo",
      hu: "Casa Cristo Néprajzi Múzeum",
      ro: "Muzeul Etnografic Casa Cristo",
      en: "Casa Cristo Ethnographic Museum"
    },
    description: {
      de: "Ein bescheidenes Landhaus in Encamp, das als Museum erhalten wurde und das Leben einer Bauernfamilie in Andorra im 19. Jahrhundert darstellt.",
      hu: "Egy szerény parasztház Encampban, amelyet múzeumként őriztek meg, bemutatva egy parasztcsalád életét a 19. századi Andorrában.",
      ro: "O casă rurală modestă din Encamp, conservată ca muzeu, care descrie viața unei familii de țărani din Andorra secolului al XIX-lea.",
      en: "A humble rural house in Encamp, preserved as a museum, depicting the life of a peasant family in 19th-century Andorra."
    },
    facts: {
      de: ["Zeigt das Leben im 19. Jahrhundert.", "Authentische Möbel und Werkzeuge.", "Beispiel für ländliches Leben."],
      hu: ["A 19. századi életet mutatja be.", "Eredeti bútorok és szerszámok.", "A vidéki élet példája."],
      ro: ["Prezintă viața în secolul al XIX-lea.", "Mobilier și unelte autentice.", "Exemplu de viață rurală."],
      en: ["Shows life in the 19th century.", "Authentic furniture and tools.", "Example of rural life."]
    },
    plizioChallenge: "Ha egy család 6 tagú volt és napi 2 kg kenyeret ettek, hány kg kenyeret fogyasztottak egy 30 napos hónapban?"
  },
  {
    id: "historical-pont-de-la-plana-extra",
    type: "landmark",
    parent: "AD-03",
    coords: [1.59, 42.53],
    name: {
      de: "Brücke von La Plana",
      hu: "La Plana híd",
      ro: "Podul din La Plana",
      en: "La Plana Bridge"
    },
    description: {
      de: "Eine alte Steinbrücke in der Pfarrei Encamp, die ein Beispiel für die funktionale und dauerhafte Konstruktion der traditionellen Kommunikationswege darstellt.",
      hu: "Egy régi kőhíd Encamp parókiában, amely a hagyományos közlekedési útvonalak funkcionális és tartós építésének példája.",
      ro: "Un pod vechi de piatră în parohia Encamp, un exemplu de construcție funcțională și durabilă a vechilor căi de comunicație.",
      en: "An old stone bridge in the parish of Encamp, an example of the functional and durable construction of traditional communication routes."
    },
    facts: {
      de: ["Traditionelle Steinbrücke.", "Teil eines alten Weges.", "Ländliche Umgebung."],
      hu: ["Hagyományos kőhíd.", "Egy régi út része.", "Vidéki környezet."],
      ro: ["Pod tradițional de piatră.", "Parte a unui drum vechi.", "Cadru rural."],
      en: ["Traditional stone bridge.", "Part of an old path.", "Rural setting."]
    },
    plizioChallenge: "Ha a hidat 300 kőből építették, és egy kő átlagosan 20 kg, mekkora a felhasznált kövek össztömege?"
  },
  {
    id: "historical-bordes-d-envalira-conjunt-extra",
    type: "historical",
    parent: "AD-02",
    coords: [1.71, 42.55],
    name: {
      de: "Hütten von Bordes d'Envalira",
      hu: "Bordes d'Envalira pásztorkunyhói",
      ro: "Bordele din Bordes d'Envalira",
      en: "Bordes of Bordes d'Envalira"
    },
    description: {
      de: "Eine Gruppe von traditionellen 'bordes' oder Steinhütten in der Nähe des Envalira-Passes, die die historische Weidewirtschaft in den Hochlagen der Pyrenäen bezeugen.",
      hu: "Hagyományos „bordes” vagy kőkunyhók csoportja az Envalira-hágó közelében, amelyek a Pireneusok magashegyi legeltető állattenyésztésének történelmi tanúi.",
      ro: "Un grup de 'borde' tradiționale sau cabane de piatră lângă Pasul Envalira, mărturie a păstoritului istoric din zonele înalte ale Pirineilor.",
      en: "A group of traditional 'bordes' or stone huts near the Envalira Pass, testifying to the historical pastoral economy of the high Pyrenees."
    },
    facts: {
      de: ["Hochgebirgs-Hirtenhütten.", "Zeugen der Transhumanz.", "Robuste Steinarchitektur."],
      hu: ["Magashegyi pásztorkunyhók.", "A transzhumálás tanúi.", "Robusztus kőépítészet."],
      ro: ["Cabane pastorale de mare altitudine.", "Mărturii ale transhumanței.", "Arhitectură robustă din piatră."],
      en: ["High-altitude shepherd huts.", "Witnesses to transhumance.", "Robust stone architecture."]
    },
    plizioChallenge: "Ha egy 'borda' alapterülete 5x8 méter, mekkora az alapterülete négyzetméterben?"
  }
];
