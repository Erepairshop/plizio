import type { POI } from "./poi";

export const poiExtraIsraelLandmarksV2: POI[] = [
  {
    id: "dome-of-the-rock-landmarks-v2",
    type: "icon",
    parent: "IL-JM",
    coords: [35.2358, 31.7780],
    name: { de: "Felsendom", hu: "Szikladóm", ro: "Domul Stâncii", en: "Dome of the Rock" },
    description: {
      de: "Der Felsendom in Jerusalem ist eines der ältesten islamischen Bauwerke der Welt und dominiert mit seiner goldenen Kuppel die Skyline der Altstadt.",
      hu: "A jeruzsálemi Szikladóm a világ egyik legrégebbi iszlám építménye, amelynek aranykupolája uralja az óváros látképét.",
      ro: "Domul Stâncii din Ierusalim este una dintre cele mai vechi structuri islamice din lume, dominând orizontul orașului vechi cu cupola sa aurie.",
      en: "The Dome of the Rock in Jerusalem is one of the oldest Islamic structures in the world, dominating the Old City's skyline with its golden dome."
    },
    facts: {
      de: ["Im 7. Jahrhundert erbaut", "Goldene Kuppel", "Befindet sich auf dem Tempelberg", "Heilige Stätte des Islam"],
      hu: ["A 7. században épült", "Aranykupola", "A Templom-hegyen található", "Iszlám szent hely"],
      ro: ["Construit în secolul al VII-lea", "Cupolă de aur", "Situat pe Muntele Templului", "Loc sfânt islamic"],
      en: ["Built in the 7th century", "Golden dome", "Located on the Temple Mount", "Islamic holy site"]
    }, image: "/poi-images/dome-of-the-rock-landmarks-v2.webp"},
  {
    id: "bahai-gardens-haifa-landmarks-v2",
    type: "tourist-attraction",
    parent: "IL-HA",
    coords: [34.9870, 32.8139],
    name: { de: "Baha'i-Gärten in Haifa", hu: "Bahá'í kertek", ro: "Grădinile Bahá'í", en: "Bahá'í Terraces" },
    description: {
      de: "Die terrassenförmig angelegten Baha'i-Gärten am Hang des Karmelgebirges in Haifa gehören zu den schönsten Gärten der Welt und sind ein wichtiges Pilgerziel.",
      hu: "A haifai Kármel-hegy oldalában kialakított teraszos Bahá'í kertek a világ legszebb kertjei közé tartoznak, és fontos zarándokhelyek.",
      ro: "Grădinile Bahá'í terasate de pe panta Muntelui Carmel din Haifa sunt printre cele mai frumoase grădini din lume și o destinație importantă de pelerinaj.",
      en: "The terraced Bahá'í Gardens on the slopes of Mount Carmel in Haifa are among the most beautiful gardens in the world and an important pilgrimage destination."
    },
    facts: {
      de: ["Umfasst 19 Terrassen", "UNESCO-Weltkulturerbe", "Schrein des Báb", "Blick auf das Mittelmeer"],
      hu: ["19 teraszt foglal magába", "UNESCO Világörökség része", "Báb szentélye", "Kilátás a Földközi-tengerre"],
      ro: ["Cuprinde 19 terase", "Patrimoniul mondial UNESCO", "Altarul lui Báb", "Vedere la Marea Mediterană"],
      en: ["Includes 19 terraces", "UNESCO World Heritage Site", "Shrine of the Báb", "Overlooks the Mediterranean Sea"]
    }, image: "/poi-images/bahai-gardens-haifa-landmarks-v2.webp"},
  {
    id: "jaffa-gate-landmarks-v2",
    type: "landmark",
    parent: "IL-JM",
    coords: [35.2276, 31.7766],
    name: { de: "Jaffa-Tor", hu: "Jaffa-kapu", ro: "Poarta Jaffa", en: "Jaffa Gate" },
    description: {
      de: "Das Jaffa-Tor ist eines der Haupttore zur Altstadt von Jerusalem und ein wichtiger historischer Durchgang, der den westlichen Teil der Stadt mit der Altstadt verbindet.",
      hu: "A Jaffa-kapu a jeruzsálemi óváros egyik fő kapuja és fontos történelmi átjáró, amely a város nyugati részét köti össze az óvárossal.",
      ro: "Poarta Jaffa este una dintre porțile principale către Orașul Vechi din Ierusalim și un important pasaj istoric care leagă partea de vest a orașului de Orașul Vechi.",
      en: "Jaffa Gate is one of the main gates to the Old City of Jerusalem and an important historical passageway connecting the western part of the city to the Old City."
    },
    facts: {
      de: ["Im 16. Jahrhundert erbaut", "Suleiman der Prächtige", "Blick auf den Davidszitadelle", "Wichtiger Eingang zur Altstadt"],
      hu: ["A 16. században épült", "Nagy Szulejmán építtette", "A Dávid-toronyra néz", "Az óváros fontos bejárata"],
      ro: ["Construită în secolul al XVI-lea", "Suleiman Magnificul", "Vedere spre Turnul lui David", "Intrare importantă în Orașul Vechi"],
      en: ["Built in the 16th century", "Suleiman the Magnificent", "Overlooks the Tower of David", "Important entrance to the Old City"]
    }, image: "/poi-images/jaffa-gate-landmarks-v2.webp"},
  {
    id: "mount-of-olives-landmarks-v2",
    type: "landmark",
    parent: "IL-JM",
    coords: [35.2445, 31.7781],
    name: { de: "Ölberg", hu: "Olajfák hegye", ro: "Muntele Măslinilor", en: "Mount of Olives" },
    description: {
      de: "Der Ölberg erhebt sich östlich der Altstadt von Jerusalem und bietet nicht nur einen atemberaubenden Blick, sondern hat auch große religiöse Bedeutung für Judentum, Christentum und Islam.",
      hu: "A jeruzsálemi óvárostól keletre magasodó Olajfák hegye nemcsak lélegzetelállító kilátást nyújt, hanem hatalmas vallási jelentőséggel is bír a judaizmus, a kereszténység és az iszlám számára.",
      ro: "Muntele Măslinilor se ridică la est de Orașul Vechi din Ierusalim și oferă nu doar o priveliște uluitoare, ci are și o mare semnificație religioasă pentru iudaism, creștinism și islam.",
      en: "The Mount of Olives rises east of the Old City of Jerusalem and offers not only a breathtaking view but also holds great religious significance for Judaism, Christianity, and Islam."
    },
    facts: {
      de: ["Historischer jüdischer Friedhof", "Panoramablick auf Jerusalem", "Ort der Himmelfahrt Jesu", "Zahlreiche Kirchen"],
      hu: ["Történelmi zsidó temető", "Panorámakilátás Jeruzsálemre", "Jézus mennybemenetelének helye", "Számos templom"],
      ro: ["Cimitir evreiesc istoric", "Vedere panoramică asupra Ierusalimului", "Locul Înălțării lui Iisus", "Numeroase biserici"],
      en: ["Historic Jewish cemetery", "Panoramic view of Jerusalem", "Site of Jesus' Ascension", "Numerous churches"]
    }, image: "/poi-images/mount-of-olives-landmarks-v2.webp"},
  {
    id: "basilica-of-annunciation-landmarks-v2",
    type: "icon",
    parent: "IL-Z",
    coords: [35.2974, 32.7020],
    name: { de: "Verkündigungsbasilika", hu: "Angyali üdvözlet bazilika", ro: "Bazilica Bunei Vestiri", en: "Basilica of the Annunciation" },
    description: {
      de: "Die Verkündigungsbasilika in Nazareth steht an der Stelle, wo der Überlieferung nach der Erzengel Gabriel Maria die Geburt Jesu ankündigte.",
      hu: "A názáreti Angyali üdvözlet bazilika azon a helyen áll, ahol a hagyomány szerint Gábriel arkangyal hírül adta Máriának Jézus születését.",
      ro: "Bazilica Bunei Vestiri din Nazaret se află pe locul unde tradiția spune că Arhanghelul Gabriel i-a vestit Mariei nașterea lui Iisus.",
      en: "The Basilica of the Annunciation in Nazareth stands over the site where Catholic tradition holds that the Angel Gabriel announced the birth of Jesus to Mary."
    },
    facts: {
      de: ["1969 geweiht", "Größte christliche Kirche im Nahen Osten", "Zwei Ebenen", "Marienmosaike aus aller Welt"],
      hu: ["1969-ben szentelték fel", "A Közel-Kelet legnagyobb keresztény temploma", "Kétszintes épület", "Mária-mozaikok a világ minden tájáról"],
      ro: ["Sfințită în 1969", "Cea mai mare biserică creștină din Orientul Mijlociu", "Două niveluri", "Mozaicuri cu Fecioara Maria din toată lumea"],
      en: ["Consecrated in 1969", "Largest Christian church in the Middle East", "Two levels", "Marian mosaics from around the world"]
    }, image: "/poi-images/basilica-of-annunciation-landmarks-v2.webp"},
  {
    id: "al-aqsa-mosque-landmarks-v2",
    type: "landmark",
    parent: "IL-JM",
    coords: [35.2354, 31.7761],
    name: { de: "Al-Aqsa-Moschee", hu: "Al-Aksza-mecset", ro: "Moscheea Al-Aqsa", en: "Al-Aqsa Mosque" },
    description: {
      de: "Die Al-Aqsa-Moschee auf dem Tempelberg in Jerusalem ist die drittheiligste Stätte des Islam und ein architektonisches Meisterwerk mit einer reichen Geschichte.",
      hu: "A jeruzsálemi Templom-hegyen található Al-Aksza-mecset az iszlám harmadik legszentebb helye és gazdag történelemmel rendelkező építészeti remekmű.",
      ro: "Moscheea Al-Aqsa de pe Muntele Templului din Ierusalim este al treilea cel mai sfânt loc al islamului și o capodoperă arhitecturală cu o istorie bogată.",
      en: "The Al-Aqsa Mosque on the Temple Mount in Jerusalem is the third holiest site in Islam and an architectural masterpiece with a rich history."
    },
    facts: {
      de: ["Drittheiligste Stätte des Islam", "Silberne Kuppel", "Platz für 5.000 Gläubige", "Ursprünglich im 8. Jahrhundert erbaut"],
      hu: ["Az iszlám harmadik legszentebb helye", "Ezüstkupola", "5000 hívő befogadására alkalmas", "Eredetileg a 8. században épült"],
      ro: ["Al treilea cel mai sfânt loc al islamului", "Cupolă argintie", "Capacitate pentru 5.000 de credincioși", "Construită inițial în secolul al VIII-lea"],
      en: ["Third holiest site in Islam", "Silver dome", "Accommodates 5,000 worshippers", "Originally built in the 8th century"]
    }, image: "/poi-images/al-aqsa-mosque-landmarks-v2.webp"},
  {
    id: "yad-vashem-landmarks-v2",
    type: "monument",
    parent: "IL-JM",
    coords: [35.1747, 31.7742],
    name: { de: "Yad Vashem", hu: "Jad Vasem", ro: "Yad Vashem", en: "Yad Vashem" },
    description: {
      de: "Yad Vashem in Jerusalem ist die bedeutendste Gedenkstätte der Welt für die Opfer des Holocaust und ein wichtiges Zentrum für Forschung und Bildung.",
      hu: "A jeruzsálemi Jad Vasem a világ legjelentősebb holokauszt-emlékközpontja, amely a kutatás és az oktatás fontos helyszíne is egyben.",
      ro: "Yad Vashem din Ierusalim este cel mai important memorial al Holocaustului din lume și un centru important pentru cercetare și educație.",
      en: "Yad Vashem in Jerusalem is the world's most significant memorial to the victims of the Holocaust and an important center for research and education."
    },
    facts: {
      de: ["1953 gegründet", "Architektur von Moshe Safdie", "Halle der Namen", "Allee der Gerechten unter den Völkern"],
      hu: ["1953-ban alapították", "Moshe Safdie tervezte", "A Nevek Csarnoka", "A Világ Igazainak fasora"],
      ro: ["Fondat în 1953", "Arhitectură de Moshe Safdie", "Sala Numelor", "Aleea celor Drepți între Popoare"],
      en: ["Established in 1953", "Architecture by Moshe Safdie", "Hall of Names", "Avenue of the Righteous Among the Nations"]
    }, image: "/poi-images/yad-vashem-landmarks-v2.webp"},
  {
    id: "israel-museum-landmarks-v2",
    type: "tourist-attraction",
    parent: "IL-JM",
    coords: [35.2036, 31.7733],
    name: { de: "Israel-Museum", hu: "Izrael Múzeum", ro: "Muzeul Israel", en: "Israel Museum" },
    description: {
      de: "Das Israel-Museum ist das größte Kulturinstitut in Israel und beherbergt eine außergewöhnlich reiche Sammlung von Kunst und archäologischen Funden, darunter die Schriftrollen vom Toten Meer.",
      hu: "Az Izrael Múzeum az ország legnagyobb kulturális intézménye, amely kivételesen gazdag művészeti és régészeti gyűjteménynek ad otthont, beleértve a holt-tengeri tekercseket is.",
      ro: "Muzeul Israel este cea mai mare instituție culturală din Israel și găzduiește o colecție extraordinar de bogată de artă și descoperiri arheologice, inclusiv Manuscrisele de la Marea Moartă.",
      en: "The Israel Museum is the largest cultural institution in Israel, housing an exceptionally rich collection of art and archaeological artifacts, including the Dead Sea Scrolls."
    },
    facts: {
      de: ["1965 gegründet", "Schrein des Buches", "Modell des antiken Jerusalem", "Kunstgarten von Isamu Noguchi"],
      hu: ["1965-ben alapították", "A Könyv Szentélye", "Az ókori Jeruzsálem makettje", "Isamu Noguchi művészeti kertje"],
      ro: ["Fondat în 1965", "Sanctuarul Cărții", "Model al Ierusalimului antic", "Grădina de artă a lui Isamu Noguchi"],
      en: ["Founded in 1965", "Shrine of the Book", "Model of ancient Jerusalem", "Art garden by Isamu Noguchi"]
    }, image: "/poi-images/israel-museum-landmarks-v2.webp"},
  {
    id: "timna-park-landmarks-v2",
    type: "tourist-attraction",
    parent: "IL-D",
    coords: [34.9897, 29.7850],
    name: { de: "Timna-Park", hu: "Timna Park", ro: "Parcul Timna", en: "Timna Park" },
    description: {
      de: "Der Timna-Park in der Wüste Arava beeindruckt mit spektakulären Felsformationen und den Überresten der ältesten bekannten Kupferminen der Welt.",
      hu: "Az Arava-sivatagban található Timna Park látványos sziklaformációkkal és a világ legrégebbi ismert rézbányáinak maradványaival nyűgözi le a látogatókat.",
      ro: "Parcul Timna din deșertul Arava impresionează cu formațiuni stâncoase spectaculoase și cu rămășițele celor mai vechi mine de cupru cunoscute din lume.",
      en: "Timna Park in the Arava Desert impresses visitors with spectacular rock formations and the remains of the world's oldest known copper mines."
    },
    facts: {
      de: ["Säulen des Salomo", "Antiker Kupferbergbau", "Pilzfelsen", "Bunte Sandsteine"],
      hu: ["Salamon oszlopai", "Ókori rézbányászat", "Gomba szikla", "Színes homokkő"],
      ro: ["Stâlpii lui Solomon", "Minerit antic de cupru", "Stânca ciupercă", "Gresie colorată"],
      en: ["Solomon's Pillars", "Ancient copper mining", "Mushroom Rock", "Colorful sandstone"]
    }, image: "/poi-images/timna-park-landmarks-v2.webp"},
  {
    id: "underwater-observatory-eilat-landmarks-v2",
    type: "tourist-attraction",
    parent: "IL-D",
    coords: [34.9174, 29.5042],
    name: { de: "Unterwasser-Observatorium", hu: "Víz alatti obszervatórium", ro: "Observatorul Subacvatic", en: "Underwater Observatory" },
    description: {
      de: "Das Unterwasser-Observatorium in Eilat bietet Besuchern die einmalige Gelegenheit, das farbenfrohe Leben der Korallenriffe im Roten Meer zu beobachten, ohne nass zu werden.",
      hu: "Az eilati Víz alatti obszervatórium egyedülálló lehetőséget kínál a látogatóknak, hogy anélkül figyeljék meg a Vörös-tenger korallzátonyainak színes élővilágát, hogy vizesek lennének.",
      ro: "Observatorul Subacvatic din Eilat oferă vizitatorilor o oportunitate unică de a observa viața colorată a recifelor de corali din Marea Roșie fără a se uda.",
      en: "The Underwater Observatory in Eilat offers visitors the unique opportunity to observe the colorful life of the coral reefs in the Red Sea without getting wet."
    },
    facts: {
      de: ["Beobachtungsturm unter dem Meeresspiegel", "Hai-Becken", "Schildkröteninsel", "Blick auf vier Länder"],
      hu: ["Tengerszint alatti megfigyelőtorony", "Cápa-medence", "Teknős-sziget", "Kilátás négy országra"],
      ro: ["Turn de observație sub nivelul mării", "Bazin cu rechini", "Insula țestoaselor", "Vedere către patru țări"],
      en: ["Observation tower below sea level", "Shark pool", "Turtle Island", "View of four countries"]
    }, image: "/poi-images/underwater-observatory-eilat-landmarks-v2.webp"},
  {
    id: "mount-zion-landmarks-v2",
    type: "landmark",
    parent: "IL-JM",
    coords: [35.2289, 31.7712],
    name: { de: "Berg Zion", hu: "Sion-hegy", ro: "Muntele Sion", en: "Mount Zion" },
    description: {
      de: "Der Berg Zion liegt direkt außerhalb der Stadtmauern von Jerusalem und ist ein geschichtsträchtiger Ort, der eng mit König David und dem letzten Abendmahl Jesu verbunden ist.",
      hu: "A közvetlenül Jeruzsálem városfalain kívül található Sion-hegy egy történelmi jelentőségű hely, amely szorosan kötődik Dávid királyhoz és Jézus utolsó vacsorájához.",
      ro: "Muntele Sion este situat chiar în afara zidurilor orașului Ierusalim și este un loc plin de istorie, strâns legat de Regele David și de Cina cea de Taină a lui Iisus.",
      en: "Mount Zion is located just outside the city walls of Jerusalem and is a historic site closely associated with King David and the Last Supper of Jesus."
    },
    facts: {
      de: ["Grab Davids", "Abendmahlssaal", "Dormitio-Abtei", "Südlich des Jaffa-Tors"],
      hu: ["Dávid sírja", "Az utolsó vacsora terme", "Elszenderülés apátság", "A Jaffa-kaputól délre található"],
      ro: ["Mormântul lui David", "Sala Cinei cea de Taină", "Abația Dormition", "La sud de Poarta Jaffa"],
      en: ["Tomb of David", "Room of the Last Supper", "Dormition Abbey", "South of Jaffa Gate"]
    }, image: "/poi-images/mount-zion-landmarks-v2.webp"},
  {
    id: "mahane-yehuda-market-landmarks-v2",
    type: "tourist-attraction",
    parent: "IL-JM",
    coords: [35.2120, 31.7850],
    name: { de: "Machane-Yehuda-Markt", hu: "Mahane Jehuda piac", ro: "Piața Mahane Yehuda", en: "Mahane Yehuda Market" },
    description: {
      de: "Der Machane-Yehuda-Markt ist der pulsierende und größte Markt von Jerusalem, bekannt für seine frischen Lebensmittel, Gewürze und das lebhafte Treiben in den Abendstunden.",
      hu: "A Mahane Jehuda Jeruzsálem legnagyobb és legpezsgőbb piaca, amely friss élelmiszereiről, fűszereiről és az esti órákban jellemző nyüzsgő életéről ismert.",
      ro: "Piața Mahane Yehuda este cea mai mare și mai vibrantă piață din Ierusalim, cunoscută pentru alimentele proaspete, condimente și atmosfera plină de viață în timpul serii.",
      en: "The Mahane Yehuda Market is the largest and most vibrant market in Jerusalem, known for its fresh food, spices, and bustling atmosphere in the evening hours."
    },
    facts: {
      de: ["Der Shuk genannt", "Über 250 Stände", "Street-Art auf Rollos", "Verwandelt sich abends in eine Ausgehmeile"],
      hu: ["Súknak is nevezik", "Több mint 250 stand", "Street art a redőnyökön", "Estére szórakozónegyeddé alakul"],
      ro: ["Cunoscută sub numele de Shuk", "Peste 250 de tarabe", "Artă stradală pe obloane", "Se transformă seara într-o zonă de ieșire"],
      en: ["Known as the Shuk", "Over 250 stalls", "Street art on shutters", "Transforms into a nightlife hub at night"]
    }, image: "/poi-images/mahane-yehuda-market-landmarks-v2.webp"},
  {
    id: "white-city-tel-aviv-landmarks-v2",
    type: "icon",
    parent: "IL-TA",
    coords: [34.7735, 32.0784],
    name: { de: "Weiße Stadt", hu: "Fehér Város", ro: "Orașul Alb", en: "White City" },
    description: {
      de: "Die Weiße Stadt von Tel Aviv beherbergt die weltweit größte Ansammlung von Gebäuden im Bauhaus-Stil und spiegelt die moderne Architektur des frühen 20. Jahrhunderts wider.",
      hu: "A tel-avivi Fehér Város ad otthont a világ legnagyobb Bauhaus-stílusú épületgyűjteményének, amely a 20. század eleji modern építészetet tükrözi.",
      ro: "Orașul Alb din Tel Aviv găzduiește cea mai mare colecție de clădiri în stil Bauhaus din lume, reflectând arhitectura modernă de la începutul secolului XX.",
      en: "The White City of Tel Aviv houses the world's largest collection of Bauhaus-style buildings, reflecting the modern architecture of the early 20th century."
    },
    facts: {
      de: ["Über 4.000 Bauhaus-Gebäude", "UNESCO-Weltkulturerbe", "Errichtet von europäischen Einwanderern", "Klare Linien und Flachdächer"],
      hu: ["Több mint 4000 Bauhaus-épület", "UNESCO Világörökség", "Európai bevándorlók építették", "Tiszta vonalak és lapostetők"],
      ro: ["Peste 4.000 de clădiri Bauhaus", "Patrimoniul mondial UNESCO", "Construit de imigranți europeni", "Linii curate și acoperișuri plate"],
      en: ["Over 4,000 Bauhaus buildings", "UNESCO World Heritage Site", "Built by European immigrants", "Clean lines and flat roofs"]
    }, image: "/poi-images/white-city-tel-aviv-landmarks-v2.webp"},
  {
    id: "mount-of-beatitudes-landmarks-v2",
    type: "landmark",
    parent: "IL-Z",
    coords: [35.5469, 32.8805],
    name: { de: "Berg der Seligpreisungen", hu: "Nyolc boldogság hegye", ro: "Muntele Fericirilor", en: "Mount of Beatitudes" },
    description: {
      de: "Der Berg der Seligpreisungen am Nordufer des Sees Genezareth ist der traditionelle Ort, an dem Jesus seine berühmte Bergpredigt gehalten haben soll.",
      hu: "A Galileai-tenger északi partján fekvő Nyolc boldogság hegye az a hagyományos helyszín, ahol Jézus elmondta híres hegyi beszédét.",
      ro: "Muntele Fericirilor de pe malul nordic al Mării Galileii este locul tradițional unde se crede că Iisus a ținut faimoasa Predică de pe Munte.",
      en: "The Mount of Beatitudes on the northern shore of the Sea of Galilee is the traditional site where Jesus is believed to have delivered his famous Sermon on the Mount."
    },
    facts: {
      de: ["Kirche im byzantinischen Stil", "Achteckige Form", "Blick auf den See Genezareth", "Friedliche Gärten"],
      hu: ["Bizánci stílusú templom", "Nyolcszögletű alaprajz", "Kilátás a Galileai-tengerre", "Békés kertek"],
      ro: ["Biserică în stil bizantin", "Formă octogonală", "Vedere la Marea Galileii", "Grădini pașnice"],
      en: ["Byzantine-style church", "Octagonal shape", "View of the Sea of Galilee", "Peaceful gardens"]
    }, image: "/poi-images/mount-of-beatitudes-landmarks-v2.webp"},
  {
    id: "yardenit-baptismal-site-landmarks-v2",
    type: "tourist-attraction",
    parent: "IL-Z",
    coords: [35.5714, 32.7107],
    name: { de: "Yardenit-Taufstelle", hu: "Yardenit keresztelőhely", ro: "Situl de Botez Yardenit", en: "Yardenit Baptismal Site" },
    description: {
      de: "Yardenit ist eine beliebte Taufstelle am Jordanfluss, die jedes Jahr unzählige christliche Pilger anzieht, die sich in den heiligen Gewässern taufen lassen möchten.",
      hu: "A Yardenit egy népszerű keresztelőhely a Jordán folyón, amely minden évben számtalan keresztény zarándokot vonz, akik meg akarnak keresztelkedni a szent vizekben.",
      ro: "Yardenit este un loc de botez popular pe râul Iordan, atrăgând în fiecare an nenumărați pelerini creștini care doresc să fie botezați în apele sfinte.",
      en: "Yardenit is a popular baptismal site on the Jordan River, attracting countless Christian pilgrims each year who wish to be baptized in the holy waters."
    },
    facts: {
      de: ["Am Ausfluss des Sees Genezareth", "Verwaltet vom Kibbuz Kinneret", "Jährlich über halbe Million Besucher", "Schriftwände in vielen Sprachen"],
      hu: ["A Galileai-tenger kifolyásánál fekszik", "A Kinneret kibuc üzemelteti", "Évente több mint félmillió látogató", "Szentírásfalak sok nyelven"],
      ro: ["La ieșirea din Marea Galileii", "Administrat de Kibbutzul Kinneret", "Peste jumătate de milion de vizitatori anual", "Ziduri cu scripturi în multe limbi"],
      en: ["At the outflow of the Sea of Galilee", "Managed by Kibbutz Kinneret", "Over half a million visitors annually", "Scripture walls in many languages"]
    }, image: "/poi-images/yardenit-baptismal-site-landmarks-v2.webp"},
  {
    id: "makhtesh-ramon-landmarks-v2",
    type: "landmark",
    parent: "IL-D",
    coords: [34.8690, 30.5960],
    name: { de: "Ramon-Krater", hu: "Ramon-kráter", ro: "Craterul Ramon", en: "Makhtesh Ramon" },
    description: {
      de: "Der Ramon-Krater in der Negev-Wüste ist der größte Erosionskrater der Welt und besticht durch seine dramatischen Klippen und farbenprächtigen Gesteinsformationen.",
      hu: "A Negev-sivatagban található Ramon-kráter a világ legnagyobb eróziós krátere, amely drámai szikláival és színpompás geológiai formációival hívja fel magára a figyelmet.",
      ro: "Craterul Ramon din deșertul Negev este cel mai mare crater de eroziune din lume și fascinează prin stâncile sale dramatice și formațiunile geologice colorate.",
      en: "Makhtesh Ramon in the Negev Desert is the largest erosion crater in the world, captivating visitors with its dramatic cliffs and colorful geological formations."
    },
    facts: {
      de: ["Größter Erosionskrater der Welt", "40 km lang", "Formte sich über Millionen von Jahren", "Steinböcke sind hier heimisch"],
      hu: ["A világ legnagyobb eróziós krátere", "40 km hosszú", "Több millió év alatt alakult ki", "Kőszáli kecskék otthona"],
      ro: ["Cel mai mare crater de eroziune din lume", "Lungime de 40 km", "Format pe parcursul a milioane de ani", "Casă pentru ibexul nubian"],
      en: ["Largest erosion crater in the world", "40 km long", "Formed over millions of years", "Home to Nubian ibex"]
    }, image: "/poi-images/makhtesh-ramon-landmarks-v2.webp"},
  {
    id: "mount-tabor-landmarks-v2",
    type: "landmark",
    parent: "IL-Z",
    coords: [35.3897, 32.6865],
    name: { de: "Berg Tabor", hu: "Tábor-hegy", ro: "Muntele Tabor", en: "Mount Tabor" },
    description: {
      de: "Der markante Berg Tabor erhebt sich isoliert aus der Jesreelebene und gilt in der christlichen Tradition als Ort der Verklärung Christi.",
      hu: "A Jezréel-völgyből elszigetelten kiemelkedő, jellegzetes Tábor-hegy a keresztény hagyomány szerint Krisztus színeváltozásának helyszíne.",
      ro: "Muntele Tabor, cu forma sa distinctivă, se ridică izolat din Valea Izreel și este considerat în tradiția creștină drept locul Schimbării la Față a lui Hristos.",
      en: "The distinctive Mount Tabor rises isolated from the Jezreel Valley and is considered in Christian tradition to be the site of the Transfiguration of Christ."
    },
    facts: {
      de: ["588 Meter hoch", "Verklärungsbasilika auf dem Gipfel", "Wichtiger Ort im Alten Testament", "Panoramablick auf Galiläa"],
      hu: ["588 méter magas", "A Színeváltozás bazilikája a csúcson", "Fontos ószövetségi helyszín", "Panorámakilátás Galileára"],
      ro: ["588 metri înălțime", "Bazilica Schimbării la Față în vârf", "Loc important în Vechiul Testament", "Vedere panoramică asupra Galileii"],
      en: ["588 meters high", "Church of the Transfiguration at the summit", "Important site in the Old Testament", "Panoramic view of Galilee"]
    }, image: "/poi-images/mount-tabor-landmarks-v2.webp"},
  {
    id: "beit-guvrin-caves-landmarks-v2",
    type: "tourist-attraction",
    parent: "IL-M",
    coords: [34.8966, 31.6046],
    name: { de: "Höhlen von Bet Guvrin", hu: "Bét Guvrin barlangjai", ro: "Peșterile Beit Guvrin", en: "Beit Guvrin Caves" },
    description: {
      de: "Der Nationalpark Bet Guvrin ist berühmt für seine unzähligen künstlichen Höhlen, die im Laufe der Jahrhunderte als Steinbrüche, Zisternen und Verstecke genutzt wurden.",
      hu: "A Bét Guvrin Nemzeti Park számtalan mesterséges barlangjáról híres, amelyeket az évszázadok során kőbányaként, ciszternaként és búvóhelyként használtak.",
      ro: "Parcul Național Beit Guvrin este renumit pentru nenumăratele sale peșteri artificiale, care au fost folosite de-a lungul secolelor ca cariere, cisterne și ascunzători.",
      en: "Beit Guvrin National Park is famous for its countless man-made caves, which were used over the centuries as quarries, cisterns, and hideouts."
    },
    facts: {
      de: ["Glockenhöhlen", "Columbarien zur Taubenzucht", "UNESCO-Weltkulturerbe", "Archäologische Ausgrabungen"],
      hu: ["Harangbarlangok", "Kolumbáriumok galambtenyésztéshez", "UNESCO Világörökség része", "Régészeti feltárások"],
      ro: ["Peșteri în formă de clopot", "Columbare pentru creșterea porumbeilor", "Patrimoniul mondial UNESCO", "Săpături arheologice"],
      en: ["Bell caves", "Columbaria for raising doves", "UNESCO World Heritage Site", "Archaeological excavations"]
    }, image: "/poi-images/beit-guvrin-caves-landmarks-v2.webp"},
  {
    id: "gethsemane-landmarks-v2",
    type: "landmark",
    parent: "IL-JM",
    coords: [35.2396, 31.7794],
    name: { de: "Gethsemani", hu: "Gecsemáné-kert", ro: "Ghetsimani", en: "Gethsemane" },
    description: {
      de: "Der Garten Gethsemani am Fuße des Ölbergs in Jerusalem ist ein Ort tiefer christlicher Bedeutung, an dem Jesus in der Nacht vor seiner Kreuzigung gebetet haben soll.",
      hu: "A jeruzsálemi Olajfák hegyének lábánál fekvő Gecsemáné-kert mély keresztény jelentőségű hely, ahol Jézus imádkozott a keresztre feszítése előtti éjszakán.",
      ro: "Grădina Ghetsimani de la poalele Muntelui Măslinilor din Ierusalim este un loc de profundă semnificație creștină, unde Iisus s-ar fi rugat în noaptea dinaintea răstignirii sale.",
      en: "The Garden of Gethsemane at the foot of the Mount of Olives in Jerusalem is a site of deep Christian significance where Jesus is said to have prayed the night before his crucifixion."
    },
    facts: {
      de: ["Kirche der Nationen", "Uralte Olivenbäume", "Ort der Verhaftung Jesu", "Bedeutender Pilgerort"],
      hu: ["A Nemzetek temploma", "Ősi olajfák", "Jézus letartóztatásának helyszíne", "Jelentős zarándokhely"],
      ro: ["Biserica Tuturor Națiunilor", "Măslini străvechi", "Locul arestării lui Iisus", "Loc de pelerinaj important"],
      en: ["Church of All Nations", "Ancient olive trees", "Site of Jesus' arrest", "Important pilgrimage site"]
    }, image: "/poi-images/gethsemane-landmarks-v2.webp"},
  {
    id: "azrieli-center-landmarks-v2",
    type: "landmark",
    parent: "IL-TA",
    coords: [34.7915, 32.0743],
    name: { de: "Azrieli Center", hu: "Azrieli Központ", ro: "Centrul Azrieli", en: "Azrieli Center" },
    description: {
      de: "Das Azrieli Center in Tel Aviv ist ein markanter Komplex aus drei Wolkenkratzern mit unterschiedlichen geometrischen Formen, der das moderne Geschäftsviertel der Stadt dominiert.",
      hu: "A tel-avivi Azrieli Központ egy három különböző geometriai formájú felhőkarcolóból álló feltűnő komplexum, amely uralja a város modern üzleti negyedét.",
      ro: "Centrul Azrieli din Tel Aviv este un complex impresionant format din trei zgârie-nori cu forme geometrice diferite, care domină cartierul modern de afaceri al orașului.",
      en: "The Azrieli Center in Tel Aviv is a striking complex of three skyscrapers with different geometric shapes that dominates the city's modern business district."
    },
    facts: {
      de: ["Kreis-, Dreieck- und Quadratturm", "Großes Einkaufszentrum", "Aussichtsplattform", "Ein Wahrzeichen der Moderne"],
      hu: ["Kör, háromszög és négyzet alakú torony", "Nagy bevásárlóközpont", "Kilátóterasz", "A modernitás egyik szimbóluma"],
      ro: ["Turn circular, triunghiular și pătrat", "Centru comercial mare", "Punte de observație", "Un simbol al modernității"],
      en: ["Circular, triangular, and square tower", "Large shopping mall", "Observation deck", "A symbol of modernity"]
    }
  }
];
