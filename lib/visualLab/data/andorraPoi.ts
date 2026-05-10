// @ts-nocheck
import type { POI } from "./poi";
import { poiExtraAndorraCities } from "./poiExtraAndorraCities";
import { poiExtraAndorraOther } from "./poiExtraAndorraOther";

export const andorraCountry: POI = {
  id: "country-andorra",
  type: "country",
  parent: "europe",
  coords: [1.6016, 42.5462],
  name: { de: "Andorra", hu: "Andorra", ro: "Andorra", en: "Andorra" },
  description: {
    de: "Ein kleines Fürstentum in den Pyrenäen zwischen Frankreich und Spanien, bekannt für seine Skigebiete und Steuerparadies-Status.",
    hu: "Egy kis hercegség a Pireneusokban Franciaország és Spanyolország között, síparadicsomairól és adóparadicsom státuszáról ismert.",
    ro: "Un mic principat din Pirinei, situat între Franța și Spania, renumit pentru stațiunile sale de schi și statutul de paradis fiscal.",
    en: "A small principality in the Pyrenees between France and Spain, known for its ski resorts and tax-haven status."
  },
  facts: {
    de: [
      "Einziges Land der Welt mit Katalanisch als alleiniger Amtssprache.",
      "Es hat kein eigenes Militär.",
      "Die Lebenserwartung gehört zu den höchsten der Welt.",
      "Tourismus macht 80% des BIP aus.",
      "Die Hauptstadt Andorra la Vella ist die höchstgelegene Hauptstadt Europas."
    ],
    hu: [
      "A világ egyetlen országa, ahol a katalán az egyetlen hivatalos nyelv.",
      "Nincs saját hadserege.",
      "A várható élettartam a legmagasabbak között van a világon.",
      "A turizmus teszi ki a GDP 80%-át.",
      "A főváros, Andorra la Vella, Európa legmagasabban fekvő fővárosa."
    ],
    ro: [
      "Singura țară din lume cu catalana ca unică limbă oficială.",
      "Nu are armată proprie.",
      "Speranța de viață este printre cele mai ridicate din lume.",
      "Turismul reprezintă 80% din PIB.",
      "Capitala sa, Andorra la Vella, este cea mai înaltă capitală din Europa."
    ],
    en: [
      "The only country in the world with Catalan as its sole official language.",
      "It has no military of its own.",
      "Life expectancy is among the highest in the world.",
      "Tourism accounts for 80% of its GDP.",
      "Its capital, Andorra la Vella, is the highest capital city in Europe."
    ]
  },
  descriptionAdvanced: {
    de: "Das Fürstentum Andorra liegt hoch in den Pyrenäen und lockt mit erstklassigen Skigebieten wie Grandvalira und Vallnord sowie einer atemberaubenden Bergwelt. Neben dem Tourismus ist das Land für seinen Status als Steuerparadies und seine zahlreichen Einkaufsmöglichkeiten bekannt. Politisch ist es ein Co-Fürstentum, regiert vom Bischof von Urgell und dem französischen Staatspräsidenten.",
    hu: "Az Andorrai Hercegség magasan a Pireneusokban fekszik, kiváló síterepekkel (Grandvalira, Vallnord) és lélegzetelállító hegyvidékkel csábítja a látogatókat. A turizmus mellett az ország adóparadicsomi státuszáról és bevásárlási lehetőségeiről is ismert. Politikailag egy társhercegség, melynek államfői az urgelli püspök és a francia köztársasági elnök.",
    ro: "Principatul Andorra este situat la mare altitudine în Pirinei și atrage turiști prin stațiunile sale de schi de primă clasă, precum Grandvalira și Vallnord, și peisajul montan uluitor. Pe lângă turism, țara este cunoscută pentru statutul său de paradis fiscal și numeroasele opțiuni de cumpărături. Politic, este un coprincipat condus de Episcopul de Urgell și de Președintele Franței.",
    en: "The Principality of Andorra, a sovereign microstate nestled in the eastern Pyrenees, is a unique destination defined by its dramatic mountain landscapes and a distinct political structure. As a co-principality, its heads of state are the Bishop of Urgell in Spain and the President of France, a legacy of a medieval feudal agreement. This landlocked nation thrives on tourism, drawing millions of visitors to its renowned ski resorts, including Grandvalira and Pal-Arinsal. Beyond the slopes, its duty-free status has cultivated a vibrant retail sector, particularly in the capital, Andorra la Vella. Over 90% of the country is pristine wilderness, featuring glacial valleys, high peaks, and over 70 alpine lakes, making it a paradise for hikers and nature lovers. This unique blend of commerce and nature makes Andorra a fascinating study in mountain geography. Geography K8 - Microstates and their Economies."
  },
  factsAdvanced: {
    de: [
      "Höchstgelegener Staat Europas.",
      "Einzigartiges politisches System des Ko-Fürstentums.",
      "Mehr als 300 Sonnentage im Jahr.",
      "Nur 8% des Landes sind bebaut, der Rest ist Natur.",
      "Amtssprache ist Katalanisch."
    ],
    hu: [
      "Európa legmagasabban fekvő állama.",
      "Egyedülálló társhercegségi politikai rendszer.",
      "Több mint 300 napsütéses nap évente.",
      "Az ország csupán 8%-a beépített, a többi természetes terület.",
      "Hivatalos nyelve a katalán."
    ],
    ro: [
      "Este cel mai înalt stat din Europa.",
      "Un sistem politic unic co-principal.",
      "Peste 300 de zile însorite pe an.",
      "Doar 8% din țară este construită, restul este natural.",
      "Limba sa oficială este catalana."
    ],
    en: [
        "Andorra is the world's only co-principality.",
        "Its capital, Andorra la Vella, is the highest capital city in Europe at 1,023 meters.",
        "The country does not have its own airport or train station.",
        "It was neutral during both World War I and World War II.",
        "The official language is Catalan, though Spanish, French, and Portuguese are widely spoken.",
        "Over 90% of the country is undeveloped, consisting of mountains, forests, and lakes.",
        "The Madriu-Perafita-Claror Valley is a UNESCO World Heritage site, covering 9% of the country.",
        "Andorra has one of the highest life expectancies in the world."
    ]
  },
  image: "/geo-images/europe/andorra-countryside-view.webp",
  faq: [
    {
      q: {
        de: "Ist Andorra Mitglied der EU?",
        hu: "Andorra az EU tagja?",
        ro: "Este Andorra membră a UE?",
        en: "Is Andorra a member of the EU?"
      },
      a: {
        de: "Nein, Andorra ist kein Mitglied der Europäischen Union, verwendet aber den Euro als Währung.",
        hu: "Nem, Andorra nem tagja az Európai Uniónak, de az eurót használja fizetőeszközként.",
        ro: "Nu, Andorra nu este membră a Uniunii Europene, dar folosește euro ca monedă.",
        en: "No, Andorra is not a member of the European Union, but it uses the Euro as its currency."
      }
    },
    {
      q: {
        de: "Was ist die Hauptstadt von Andorra?",
        hu: "Mi Andorra fővárosa?",
        ro: "Care este capitala Andorrei?",
        en: "What is the capital of Andorra?"
      },
      a: {
        de: "Die Hauptstadt ist Andorra la Vella, die höchstgelegene Hauptstadt Europas.",
        hu: "A főváros Andorra la Vella, Európa legmagasabban fekvő fővárosa.",
        ro: "Capitala este Andorra la Vella, cea mai înaltă capitală din Europa.",
        en: "The capital is Andorra la Vella, which is the highest capital city in Europe."
      }
    }
  ]
};

export const andorraCities: POI[] = [
  {
    id: "city-andorra-la-vella",
    type: "city",
    parent: "country-andorra",
    coords: [1.5218, 42.5063],
    name: { de: "Andorra la Vella", hu: "Andorra la Vella", ro: "Andorra la Vella", en: "Andorra la Vella" },
    description: {
      de: "Die Hauptstadt und größte Stadt Andorras, bekannt für ihre Einkaufsmöglichkeiten und das historische Viertel Barri Antic.",
      hu: "Andorra fővárosa és legnagyobb városa, bevásárlási lehetőségeiről és a Barri Antic történelmi negyedről ismert.",
      ro: "Capitala și cel mai mare oraș din Andorra, cunoscut pentru cumpărături și cartierul istoric Barri Antic.",
      en: "The capital and largest city of Andorra, known for its shopping and the historic Barri Antic quarter."
    },
    facts: {
      de: [
        "Höchstgelegene Hauptstadt Europas (1.023 m).",
        "Das Parlament, Casa de la Vall, stammt aus dem 16. Jahrhundert.",
        "Wichtiger Handelsplatz für Duty-Free-Waren.",
        "Der Fluss Valira fließt durch die Stadt.",
        "Jährliches Jazzfestival im Juli."
      ],
      hu: [
        "Európa legmagasabban fekvő fővárosa (1023 m).",
        "A parlament, a Casa de la Vall, a 16. századból származik.",
        "Fontos kereskedelmi központ a vámmentes termékek számára.",
        "A Valira folyó folyik keresztül a városon.",
        "Évente megrendezett jazzfesztivál júliusban."
      ],
      ro: [
        "Cea mai înaltă capitală din Europa (1.023 m).",
        "Parlamentul, Casa de la Vall, datează din secolul al XVI-lea.",
        "Centru comercial important pentru produse duty-free.",
        "Râul Valira traversează orașul.",
        "Festival anual de jazz în iulie."
      ],
      en: [
        "Highest capital city in Europe (1,023 m).",
        "The parliament, Casa de la Vall, dates back to the 16th century.",
        "Major commercial hub for duty-free goods.",
        "The Valira river runs through the city.",
        "Hosts an annual jazz festival in July."
      ]
    },
    descriptionAdvanced: {
      de: "Andorra la Vella ist das pulsierende Herz des Fürstentums. Eingebettet in ein enges Tal, verbindet die Stadt moderne Einkaufsstraßen wie die Avinguda Meritxell mit dem historischen Charme des Barri Antic, wo sich die Casa de la Vall, der alte Parlamentssitz, befindet. Die Stadt ist nicht nur ein politisches und wirtschaftliches Zentrum, sondern auch ein kultureller Hotspot mit zahlreichen Festivals und Veranstaltungen das ganze Jahr über.",
      hu: "Andorra la Vella a hercegség lüktető szíve. Egy szűk völgyben fekszik, a város ötvözi a modern bevásárlóutcákat, mint az Avinguda Meritxell, a Barri Antic történelmi negyedének varázsával, ahol a Casa de la Vall, a régi parlament székhelye található. A város nemcsak politikai és gazdasági központ, hanem kulturális gócpont is, számos fesztivállal és eseménnyel egész évben.",
      ro: "Andorra la Vella este inima vibrantă a principatului. Amplasat într-o vale îngustă, orașul combină străzile comerciale moderne, precum Avinguda Meritxell, cu farmecul istoric al cartierului Barri Antic, unde se află Casa de la Vall, vechiul sediu al parlamentului. Orașul nu este doar un centru politic și economic, ci și un punct fierbinte cultural, cu numeroase festivaluri și evenimente pe tot parcursul anului.",
      en: "Andorra la Vella, the highest capital in Europe, rests in a deep valley at the confluence of two mountain rivers. This bustling city is the nation's commercial and political nucleus. Its main artery, Avinguda Meritxell, is a shopper's paradise, lined with duty-free stores offering everything from luxury goods to electronics. A short walk away lies the Barri Antic, the charming old town, where cobbled streets lead to the Casa de la Vall, the historic seat of the Andorran parliament since the 16th century. The city's skyline is a mix of modern commercial buildings and traditional stone houses, all framed by the dramatic peaks of the Pyrenees. For relaxation, the nearby Caldea spa complex offers a futuristic thermal water experience. Social Studies K7 - European Capitals."
    },
    factsAdvanced: {
      de: [
        "Gegründet im frühen 9. Jahrhundert.",
        "Der Name bedeutet wörtlich 'Andorra die Stadt'.",
        "Bevölkerung von etwa 23.000 Einwohnern.",
        "Die Kirche Sant Esteve aus dem 11. Jahrhundert ist ein Wahrzeichen.",
        "Das Caldea Spa, eines der größten Thermalbäder Europas, befindet sich in der Nähe."
      ],
      hu: [
        "A 9. század elején alapították.",
        "A neve szó szerint 'Andorra a város'-t jelenti.",
        "Lakossága körülbelül 23 000 fő.",
        "A 11. századi Sant Esteve templom a város egyik jelképe.",
        "A Caldea Spa, Európa egyik legnagyobb termálfürdője, a közelben található."
      ],
      ro: [
        "Fondat la începutul secolului al IX-lea.",
        "Numele înseamnă literalmente 'Andorra orașul'.",
        "Populație de aproximativ 23.000 de locuitori.",
        "Biserica Sant Esteve din secolul al XI-lea este un punct de reper.",
        "Centrul spa Caldea, unul dintre cele mai mari din Europa, se află în apropiere."
      ],
      en: [
        "The city's elevation is 1,023 meters (3,356 feet) above sea level.",
        "Andorra la Vella was founded in the early 9th century.",
        "The name literally translates to 'Andorra the Town'.",
        "It hosts the 'Festival International de Jazz d'Escaldes-Engordany' annually.",
        "The 11th-century Church of Sant Esteve features an original Romanesque apse.",
        "The Margineda Bridge, a Romanesque bridge from the 12th-13th century, is nearby.",
        "The city's total area is just 12 square kilometers.",
        "It is the main venue for the country's celebrations of the Andorran National Day."
      ]
    },
    image: "/geo-images/europe/andorra-la-vella-city-view.webp"
  },
  {
    id: "city-escaldes-engordany",
    type: "city",
    parent: "country-andorra",
    coords: [1.5401, 42.5093],
    name: { de: "Escaldes-Engordany", hu: "Escaldes-Engordany", ro: "Escaldes-Engordany", en: "Escaldes-Engordany" },
    description: {
      de: "Bekannt für seine Thermalquellen und das beeindruckende Caldea-Thermalbad.",
      hu: "Termálforrásairól és a lenyűgöző Caldea termálfürdőről ismert.",
      ro: "Cunoscut pentru izvoarele sale termale și impresionantul centru spa Caldea.",
      en: "Known for its hot springs and the impressive Caldea thermal spa."
    },
    facts: {
      de: ["Heimat des Caldea-Thermalbads.", "Der Name 'Escaldes' bedeutet 'heiße Wasser'.", "Das Tal des Madriu-Perafita-Claror (UNESCO-Weltkulturerbe) beginnt hier.", "Zahlreiche romanische Brücken.", "Wichtiges Zentrum für Wellness-Tourismus."],
      hu: ["A Caldea termálfürdő otthona.", "Az 'Escaldes' név 'forró vizeket' jelent.", "Itt kezdődik a Madriu-Perafita-Claror-völgy (UNESCO Világörökség).", "Számos román kori híd.", "A wellness-turizmus fontos központja."],
      ro: ["Găzduiește centrul spa Caldea.", "Numele 'Escaldes' înseamnă 'ape fierbinți'.", "Valea Madriu-Perafita-Claror (patrimoniu mondial UNESCO) începe aici.", "Numeroase poduri romanice.", "Centru important pentru turismul de wellness."],
      en: ["Home to the Caldea thermal spa.", "The name 'Escaldes' means 'hot waters'.", "The Madriu-Perafita-Claror Valley (UNESCO World Heritage site) begins here.", "Numerous Romanesque bridges.", "Important center for wellness tourism."]
    },
    descriptionAdvanced: {
      de: "Escaldes-Engordany ist die zweitgrößte Stadt Andorras und bildet mit der Hauptstadt eine städtische Einheit. Der Name leitet sich von den zahlreichen heißen, schwefelhaltigen Quellen ab, die seit der Römerzeit genutzt werden. Das moderne Wahrzeichen der Stadt ist das Caldea Spa, dessen gläserne Pyramide die Skyline dominiert. Neben dem Wellness-Angebot ist die Stadt auch für das Parfummuseum und das Zentrum für Kunst von Escaldes-Engordany (CAEE) bekannt.",
      hu: "Escaldes-Engordany Andorra második legnagyobb városa, és a fővárossal egy városi egységet alkot. A neve a számos forró, kénes forrásból származik, amelyeket már a római idők óta használnak. A város modern jelképe a Caldea Spa, amelynek üvegpiramisa uralja a látképet. A wellness-kínálat mellett a város a Parfüm Múzeumról és az Escaldes-Engordany Művészeti Központról (CAEE) is ismert.",
      ro: "Escaldes-Engordany este al doilea cel mai mare oraș din Andorra și formează o unitate urbană cu capitala. Numele său provine de la numeroasele izvoare fierbinți, sulfuroase, utilizate încă din perioada romană. Emblema modernă a orașului este centrul spa Caldea, a cărui piramidă de sticlă domină orizontul. Pe lângă ofertele de wellness, orașul este cunoscut și pentru Muzeul Parfumului și Centrul de Artă din Escaldes-Engordany (CAEE).",
      en: "Forming an urban conurbation with the capital, Escaldes-Engordany is a parish defined by its relationship with water. Its name is a direct reference to the numerous hot, sulfur-rich thermal springs found here, which have been exploited since Roman times. This natural resource is spectacularly showcased at the Caldea-Inúu complex, Europe's largest mountain spa, whose futuristic glass tower is an unmissable landmark. Beyond wellness, the parish is a gateway to the Madriu-Perafita-Claror Valley, a UNESCO World Heritage site that represents 9% of Andorra's territory and offers a glimpse into a preserved cultural landscape of high pastures and glacial valleys. The parish also has a rich artistic side, with the Escaldes-Engordany Art Centre (CAEE) hosting significant exhibitions. Science K5 - States of Water."
    },
    factsAdvanced: {
      de: ["Die Gemeinde wurde 1978 gegründet und ist damit die jüngste in Andorra.", "Das Wasser von Caldea sprudelt mit 70°C aus der Erde.", "Das Madriu-Tal bedeckt 9% der Landesfläche.", "Das jährliche 'Niu d'Art' Festival fördert lokale Künstler.", "Die historische Textilindustrie nutzte die heißen Quellen."],
      hu: ["A községet 1978-ban alapították, ezzel a legfiatalabb Andorrában.", "A Caldea vize 70°C-on tör a felszínre.", "A Madriu-völgy az ország területének 9%-át teszi ki.", "Az éves 'Niu d'Art' fesztivál a helyi művészeket támogatja.", "A történelmi textilipar a forró forrásokat használta."],
      ro: ["Parohia a fost fondată în 1978, fiind cea mai tânără din Andorra.", "Apa de la Caldea izvorăște la 70°C.", "Valea Madriu acoperă 9% din suprafața țării.", "Festivalul anual 'Niu d'Art' promovează artiștii locali.", "Industria textilă istorică folosea izvoarele termale."],
      en: [
          "Escaldes-Engordany became Andorra's seventh parish on June 14, 1978.",
          "The thermal water emerges from the ground at a temperature of 70°C (158°F).",
          "The parish is the entry point to the UNESCO-listed Madriu-Perafita-Claror Valley.",
          "It is home to a Perfume Museum, exploring the history of fragrances.",
          "The Romanesque bridge of els Escalls is a notable historical monument.",
          "The name 'Engordany' is documented as being older than 'Escaldes'.",
          "Its 'Festa Major' is celebrated around July 25th.",
          "The historic Hotel Valira features murals by the Catalan artist Antoni Clavé."
      ]
    },
    image: "/geo-images/europe/escaldes-engordany-caldea-spa.webp"
  },
  {
    id: "city-encamp",
    type: "city",
    parent: "country-andorra",
    coords: [1.5833, 42.5362],
    name: { de: "Encamp", hu: "Encamp", ro: "Encamp", en: "Encamp" },
    description: {
      de: "Ein Tor zum Skigebiet Grandvalira, verbunden durch die lange Funicamp-Gondelbahn.",
      hu: "A Grandvalira síterep kapuja, amelyet a hosszú Funicamp gondola köt össze.",
      ro: "O poartă de acces către zona de schi Grandvalira, conectată prin lunga telegondolă Funicamp.",
      en: "A gateway to the Grandvalira ski area, connected by the long Funicamp gondola."
    },
    facts: {
      de: ["Die Funicamp-Gondel ist eine der längsten in Europa (6 km).", "Nationales Automobilmuseum.", "Romanische Kirche Sant Romà de les Bons.", "Ausgangspunkt für Wanderungen im Cortals-Tal.", "Grenzt an Frankreich."],
      hu: ["A Funicamp gondola az egyik leghosszabb Európában (6 km).", "Nemzeti Autómúzeum.", "Sant Romà de les Bons román kori templom.", "Kiindulópont a Cortals-völgyi túrákhoz.", "Franciaországgal határos."],
      ro: ["Telegondola Funicamp este una dintre cele mai lungi din Europa (6 km).", "Muzeul Național al Automobilului.", "Biserica romanică Sant Romà de les Bons.", "Punct de plecare pentru drumeții în Valea Cortals.", "Se învecinează cu Franța."],
      en: ["The Funicamp gondola is one of the longest in Europe (6 km).", "National Automobile Museum.", "Romanesque church of Sant Romà de les Bons.", "Starting point for hikes in the Cortals Valley.", "Borders with France."]
    },
    descriptionAdvanced: {
      de: "Encamp liegt im Herzen von Andorra und ist eine strategisch wichtige Stadt, die das Zentrum des Landes mit den östlichen Skigebieten verbindet. Die Hauptattraktion ist die Funicamp, eine 6 Kilometer lange Gondelbahn, die Besucher in nur 15 Minuten ins Herz von Grandvalira, dem größten Skigebiet der Pyrenäen, bringt. Neben dem Wintersport beherbergt Encamp auch das Nationale Automobilmuseum, das eine beeindruckende Sammlung von Oldtimern zeigt. Das historische Ensemble von Les Bons ist ein weiteres Highlight.",
      hu: "Encamp Andorra szívében fekszik, és stratégiailag fontos város, amely összeköti az ország központját a keleti síterepekkel. Fő vonzereje a Funicamp, egy 6 kilométer hosszú gondola, amely mindössze 15 perc alatt a Pireneusok legnagyobb síterepének, Grandvalirának a szívébe repíti a látogatókat. A téli sportok mellett Encamp ad otthont a Nemzeti Autómúzeumnak is, amely lenyűgöző veteránautó-gyűjteményt mutat be. A Les Bons történelmi együttese egy másik fénypont.",
      ro: "Encamp este situat în inima Andorrei și este un oraș strategic care leagă centrul țării de zonele de schi din est. Atractia principală este Funicamp, o telegondolă lungă de 6 kilometri care transportă vizitatorii în inima Grandvalira, cea mai mare zonă de schi din Pirinei, în doar 15 minute. Pe lângă sporturile de iarnă, Encamp găzduiește și Muzeul Național al Automobilului, care prezintă o colecție impresionantă de mașini de epocă. Ansamblul istoric din Les Bons este un alt punct de atracție.",
      en: "Encamp serves as a vital link in Andorra, centrally positioned at an altitude of 1,250 meters. Its most defining feature is the Funicamp, a remarkable 6-kilometer-long cable car that lifts skiers and sightseers up to the Grandvalira ski area in just 15 minutes, offering stunning aerial views along the way. This makes the town a primary gateway to the largest ski domain in the Pyrenees. But Encamp is more than just a ski town; it is also home to the National Automobile Museum, which houses a fascinating collection of over 80 vehicles, from steam-powered machines to classic cars of the 1950s. The historical complex of Les Bons, with its Romanesque church and watchtower, provides a window into the area's medieval past. The town effectively blends modern infrastructure with deep-rooted history. Technology K9 - Lift and Cable Car Systems."
    },
    factsAdvanced: {
      de: ["Das Wasserkraftwerk am Engolasters-See versorgt das Land mit Strom.", "Der Ort hat eine lange Tradition in der Eisenverarbeitung.", "Der 'Camí de l'Óssa' ist ein beliebter Wanderweg.", "Jährliches Dorffest ('Festa Major') im August.", "Die Bevölkerung hat sich in den letzten 30 Jahren verdreifacht."],
      hu: ["Az Engolasters-tónál lévő vízerőmű látja el az országot árammal.", "A helységnek hosszú hagyománya van a vasfeldolgozásban.", "A 'Camí de l'Óssa' egy népszerű túraútvonal.", "Éves falunap ('Festa Major') augusztusban.", "A lakosság az elmúlt 30 évben megháromszorozódott."],
      ro: ["Hidrocentrala de la Lacul Engolasters alimentează țara cu energie electrică.", "Localitatea are o lungă tradiție în prelucrarea fierului.", "\\\"Camí de l'Óssa\\\" este un traseu popular de drumeții.", "Festivalul anual al satului ('Festa Major') în august.", "Populația s-a triplat în ultimii 30 de ani."],
      en: [
        "The Funicamp cable car spans 6 kilometers, one of the longest in Europe.",
        "Encamp is home to the National Automobile Museum of Andorra.",
        "The historic village of Les Bons, with its 12th-century church, is part of the parish.",
        "The parish of Encamp borders France to the east.",
        "The Engolasters lake and its hydroelectric power station are key local landmarks.",
        "The 'Camí de l'Óssa' hiking trail offers scenic views of the valley.",
        "Encamp has a significant history of iron ore extraction and forgery.",
        "The town's 'Festa Major' is celebrated around August 15th."
      ]
    },
    image: "/geo-images/europe/encamp-funicamp-gondola.webp"
  },
  {
    id: "city-la-massana",
    type: "city",
    parent: "country-andorra",
    coords: [1.4131, 42.5755],
    name: { de: "La Massana", hu: "La Massana", ro: "La Massana", en: "La Massana" },
    description: {
      de: "Bekannt für den direkten Zugang zum Skigebiet Pal-Arinsal und den höchsten Berg Andorras, den Coma Pedrosa.",
      hu: "A Pal-Arinsal síterephez való közvetlen hozzáféréséről és Andorra legmagasabb hegyéről, a Coma Pedrosáról ismert.",
      ro: "Cunoscut pentru accesul direct la zona de schi Pal-Arinsal și cel mai înalt munte din Andorra, Coma Pedrosa.",
      en: "Known for direct access to the Pal-Arinsal ski area and Andorra's highest mountain, Coma Pedrosa."
    },
    facts: {
      de: ["Standort der Gondelbahn zum Skigebiet Pal-Arinsal.", "Der Coma Pedrosa (2.942 m) befindet sich in dieser Gemeinde.", "Zentrum für Mountainbiking im Sommer.", "Die romanische Kirche Sant Cristòfol d'Anyós bietet eine tolle Aussicht.", "Verfügt über viele Wanderwege im Naturpark Coma Pedrosa."],
      hu: ["A Pal-Arinsal síterepre vezető gondola helyszíne.", "A Coma Pedrosa (2942 m) ebben a községben található.", "Nyáron a hegyikerékpározás központja.", "A román kori Sant Cristòfol d'Anyós templom nagyszerű kilátást nyújt.", "Számos túraútvonallal rendelkezik a Coma Pedrosa Natúrparkban."],
      ro: ["Locația telegondolei către zona de schi Pal-Arinsal.", "Coma Pedrosa (2.942 m) se află în această parohie.", "Centru pentru ciclism montan în timpul verii.", "Biserica romanică Sant Cristòfol d'Anyós oferă vederi minunate.", "Dispune de multe trasee de drumeții în Parcul Natural Coma Pedrosa."],
      en: ["Location of the gondola to the Pal-Arinsal ski area.", "Coma Pedrosa (2,942 m) is located in this parish.", "Hub for mountain biking in the summer.", "The Romanesque church of Sant Cristòfol d'Anyós offers great views.", "Features many hiking trails in the Coma Pedrosa Nature Park."]
    },
    descriptionAdvanced: {
      de: "La Massana liegt im westlichen Teil von Andorra und ist ein Paradies für Outdoor-Enthusiasten. Im Winter bietet die Gondelbahn direkten Zugang zu den Pisten von Pal-Arinsal. Im Sommer verwandelt sich das Gebiet in einen der besten Bike-Parks Europas. Die Gemeinde ist auch das Tor zum Coma Pedrosa, dem höchsten Gipfel Andorras, dessen Besteigung eine beliebte Herausforderung für Wanderer ist. Die Farga Rossell, ein Eisenverarbeitungsmuseum, gibt Einblicke in die industrielle Vergangenheit der Region.",
      hu: "La Massana Andorra nyugati részén fekszik, és a szabadtéri sportok szerelmeseinek paradicsoma. Télen a gondola közvetlen hozzáférést biztosít a Pal-Arinsal pályáihoz. Nyáron a terület Európa egyik legjobb kerékpárparkjává alakul. A község egyben a kapu a Coma Pedrosához, Andorra legmagasabb csúcsához, amelynek megmászása népszerű kihívás a túrázók számára. A Farga Rossell, egy vasfeldolgozó múzeum, bepillantást enged a régió ipari múltjába.",
      ro: "La Massana este situată în partea de vest a Andorrei și este un paradis pentru pasionații de activități în aer liber. În timpul iernii, telegondola oferă acces direct la pârtiile din Pal-Arinsal. Vara, zona se transformă într-unul dintre cele mai bune parcuri de biciclete din Europa. Parohia este, de asemenea, poarta de acces către Coma Pedrosa, cel mai înalt vârf din Andorra, a cărui ascensiune este o provocare populară pentru drumeți. Farga Rossell, un muzeu al prelucrării fierului, oferă o perspectivă asupra trecutului industrial al regiunii.",
      en: "La Massana parish is an adventure playground in Andorra's western valleys, best known for being the home of Coma Pedrosa, the country's highest peak at 2,942 meters. The main town, also called La Massana, is connected by a fast gondola to the Pal-Arinsal ski resort, which in summer transforms into the Vallnord Bike Park, a world-class destination for downhill mountain biking. The parish is a hub for year-round mountain sports. For a touch of history, the Farga Rossell Interpretation Centre provides a fascinating look at Andorra's pre-industrial iron-making heritage. The parish is also dotted with charming villages like Sispony and Anyós, each with its own Romanesque church and traditional stone houses, offering a quieter counterpoint to the town's dynamic energy. PE K10 - Mountain Sports and Recreation."
    },
    factsAdvanced: {
      de: ["Der Name stammt vom lateinischen 'mattianam', was 'Apfel' bedeutet.", "Die Gemeinde hat sieben Dörfer.", "Der Mountainbike-Weltcup findet hier regelmäßig statt.", "Die Kirche Sant Martí de la Cortinada beherbergt romanische Wandmalereien.", "Der 'Camí Ral' ist ein historischer Weg, der die Dörfer verbindet."],
      hu: ["A neve a latin 'mattianam' szóból származik, ami 'almát' jelent.", "A községnek hét faluja van.", "A hegyikerékpár-világkupát rendszeresen itt rendezik.", "A Sant Martí de la Cortinada templom román kori falfestményeket őriz.", "A 'Camí Ral' egy történelmi út, amely összeköti a falvakat."],
      ro: ["Numele provine din latinescul 'mattianam', care înseamnă 'măr'.", "Parohia are șapte sate.", "Cupa Mondială de Mountain Bike are loc aici în mod regulat.", "Biserica Sant Martí de la Cortinada adăpostește picturi murale romanice.", "\\\"Camí Ral\\\" este o potecă istorică ce leagă satele."],
      en: [
          "The parish is home to Coma Pedrosa, Andorra's tallest mountain (2,942 m).",
          "La Massana's gondola links the town center directly to the Pal ski sector.",
          "It hosts rounds of the UCI Mountain Bike World Cup in its Vallnord Bike Park.",
          "The name 'La Massana' is derived from the Latin 'mattianam' for apple, referencing old orchards.",
          "The Farga Rossell was one of the last active iron forges in Andorra, closing in 1876.",
          "The parish comprises 7 villages: La Massana, Anyós, Arinsal, Erts, Pal, Sispony, and L'Aldosa.",
          "The Comic Museum, located in La Massana, is a unique cultural attraction.",
          "Two protected natural parks are within the parish: Coma Pedrosa Valleys and Sorteny Valley."
      ]
    },
    image: "/geo-images/europe/la-massana-mountain-view.webp"
  },
  {
    id: "city-ordino",
    type: "city",
    parent: "country-andorra",
    coords: [1.5332, 42.5562],
    name: { de: "Ordino", hu: "Ordino", ro: "Ordino", en: "Ordino" },
    description: {
      de: "Ein malerisches Dorf, das für seine gut erhaltene Architektur und als kulturelles Zentrum bekannt ist.",
      hu: "Festői falu, amely jól megőrzött építészetéről és kulturális központként ismert.",
      ro: "Un sat pitoresc cunoscut pentru arhitectura sa bine conservată și ca centru cultural.",
      en: "A picturesque village known for its well-preserved architecture and as a cultural hub."
    },
    facts: {
      de: ["Austragungsort des Ordino-Arcalís Skigebiets, bekannt für Freeriding.", "Das Auditorio Nacional de Andorra befindet sich hier.", "Das Postmuseum und das Miniaturmuseum sind Attraktionen.", "Das Casa d'Areny-Plandolit Museum zeigt das Leben einer andorranischen Adelsfamilie.", "Die Eisenroute ('Ruta del Ferro') beginnt in Ordino."],
      hu: ["Az Ordino-Arcalís síterep helyszíne, amely a freeride-ról ismert.", "Itt található az Andorrai Nemzeti Auditórium.", "A Postamúzeum és a Miniatűr Múzeum látnivalók.", "A Casa d'Areny-Plandolit Múzeum egy andorrai nemesi család életét mutatja be.", "A Vasútvonal ('Ruta del Ferro') Ordinóból indul."],
      ro: ["Găzduiește zona de schi Ordino-Arcalís, renumită pentru freeride.", "Auditoriul Național al Andorrei se află aici.", "Muzeul Poștal și Muzeul Miniaturilor sunt atracții.", "Muzeul Casa d'Areny-Plandolit prezintă viața unei familii nobile andorrane.", "Traseul Fierului ('Ruta del Ferro') începe în Ordino."],
      en: ["Home to the Ordino-Arcalís ski area, known for freeriding.", "The National Auditorium of Andorra is located here.", "The Postal Museum and the Miniature Museum are attractions.", "The Casa d'Areny-Plandolit Museum shows the life of an Andorran noble family.", "The Iron Route ('Ruta del Ferro') starts in Ordino."]
    },
    descriptionAdvanced: {
      de: "Ordino gilt als das kulturelle Herz Andorras. Das Dorf hat seinen traditionellen Charme mit Steinhäusern und Schieferdächern bewahrt. Es ist die Heimat mehrerer wichtiger Museen, darunter das Casa d'Areny-Plandolit, das einen Einblick in das Leben einer wohlhabenden andorranischen Familie aus dem 19. Jahrhundert gibt. Die umliegende Landschaft ist geprägt von den Gipfeln des Sorteny-Naturparks und dem Skigebiet Ordino-Arcalís, das für seinen hervorragenden Pulverschnee bekannt ist und oft Etappen der Tour de France beherbergt.",
      hu: "Ordinót Andorra kulturális szívének tartják. A falu megőrizte hagyományos varázsát kőházaival és pala-tetőivel. Számos fontos múzeumnak ad otthont, köztük a Casa d'Areny-Plandolitnak, amely bepillantást enged egy 19. századi jómódú andorrai család életébe. A környező tájat a Sorteny Natúrpark csúcsai és az Ordino-Arcalís síterep jellemzi, amely kiváló porhaváról ismert, és gyakran ad otthont a Tour de France szakaszainak.",
      ro: "Ordino este considerat inima culturală a Andorrei. Satul și-a păstrat farmecul tradițional, cu case de piatră și acoperișuri de ardezie. Găzduiește mai multe muzee importante, inclusiv Casa d'Areny-Plandolit, care oferă o perspectivă asupra vieții unei familii andorrane înstărite din secolul al XIX-lea. Peisajul înconjurător este marcat de vârfurile Parcului Natural Sorteny și de zona de schi Ordino-Arcalís, renumită pentru zăpada sa pulverulentă excelentă și care găzduiește adesea etape ale Turului Franței.",
      en: "Designated a UNESCO Biosphere Reserve, the parish of Ordino is a treasure of cultural heritage and natural beauty. The main village of Ordino, with its perfectly preserved stone houses and slate roofs, is arguably the most picturesque in Andorra. It serves as the nation's cultural capital, housing the National Auditorium and several key museums. The Casa d'Areny-Plandolit Museum reveals the history of a prominent Andorran family, while the Postal Museum traces the country's unique philatelic history. The parish is also the starting point for the 'Ruta del Ferro' or Iron Route, which explores the region's metallurgical past. High above the village, the Ordino-Arcalís ski area is famed for its off-piste terrain and reliable snow conditions, frequently featuring as a dramatic mountain stage in the Tour de France. History K7 - Industrial Heritage."
    },
    factsAdvanced: {
      de: ["Von der UNESCO als Biosphärenreservat anerkannt.", "Die Kirche Sant Martí de la Cortinada hat wertvolle romanische Fresken.", "Der Name 'Ordino' leitet sich vom lateinischen 'hordeum' (Gerste) ab.", "Jedes Jahr findet hier ein klassisches Musikfestival statt.", "Der Botanische Garten von Sorteny beherbergt über 700 Pflanzenarten."],
      hu: ["Az UNESCO bioszféra-rezervátumként ismeri el.", "A Sant Martí de la Cortinada templom értékes román kori freskókkal rendelkezik.", "Az 'Ordino' név a latin 'hordeum' (árpa) szóból származik.", "Minden évben klasszikus zenei fesztivált rendeznek itt.", "A Sorteny Botanikus Kert több mint 700 növényfajnak ad otthont."],
      ro: ["Recunoscut de UNESCO ca rezervație a biosferei.", "Biserica Sant Martí de la Cortinada are fresce romanice valoroase.", "Numele 'Ordino' provine din latinescul 'hordeum' (orz).", "Un festival de muzică clasică are loc aici în fiecare an.", "Grădina Botanică Sorteny găzduiește peste 700 de specii de plante."],
      en: [
        "The entire parish of Ordino was declared a UNESCO Biosphere Reserve in 2020.",
        "The Ordino-Arcalís ski area is famous for its freeride (off-piste) skiing.",
        "It is home to the 17th-century Casa d'Areny-Plandolit, a museum of Andorran life.",
        "The 'Ruta del Ferro' (Iron Route) is a cultural itinerary that starts in Ordino.",
        "The name 'Ordino' is thought to derive from Latin 'hordeum', meaning barley.",
        "The Sorteny Valley Nature Park within the parish has over 700 species of flowers.",
        "The National Auditorium of Andorra is located in the village of Ordino.",
        "Stages of the Tour de France and Vuelta a España have often finished at Arcalís."
      ]
    },
    image: "/geo-images/europe/ordino-village-summer.webp"
  },
  {
    id: "city-canillo",
    type: "city",
    parent: "country-andorra",
    coords: [1.5997, 42.5667],
    name: { de: "Canillo", hu: "Canillo", ro: "Canillo", en: "Canillo" },
    description: {
      de: "Eine Gemeinde, die für das Heiligtum von Meritxell, der Schutzpatronin Andorras, und das Skigebiet Grandvalira bekannt ist.",
      hu: "Egy község, amely Meritxell szentélyéről, Andorra védőszentjéről és a Grandvalira síterepről ismert.",
      ro: "O parohie cunoscută pentru Sanctuarul din Meritxell, sfânta patronoare a Andorrei, și zona de schi Grandvalira.",
      en: "A parish known for the Sanctuary of Meritxell, the patron saint of Andorra, and the Grandvalira ski area."
    },
    facts: {
      de: ["Das Heiligtum von Meritxell ist ein wichtiges Pilgerziel.", "Der Palau de Gel (Eispalast) bietet Eislaufen und Karting auf Eis.", "Die Kirche Sant Joan de Caselles ist ein Juwel der romanischen Architektur.", "Teil des größten Skigebiets der Pyrenäen, Grandvalira.", "Der tibetische Pont-Hängebrücke ist eine neue Attraktion."],
      hu: ["A Meritxell szentély fontos zarándokhely.", "A Palau de Gel (Jégpalota) korcsolyázást és jégkartingot kínál.", "A Sant Joan de Caselles templom a román kori építészet ékköve.", "A Pireneusok legnagyobb síterepének, a Grandvalirának a része.", "A tibeti Pont függőhíd új látványosság."],
      ro: ["Sanctuarul din Meritxell este o destinație importantă de pelerinaj.", "Palau de Gel (Palatul de Gheață) oferă patinaj și karting pe gheață.", "Biserica Sant Joan de Caselles este o bijuterie a arhitecturii romanice.", "Parte a celei mai mari zone de schi din Pirinei, Grandvalira.", "Podul suspendat tibetan Pont este o nouă atracție."],
      en: ["The Sanctuary of Meritxell is an important pilgrimage site.", "The Palau de Gel (Ice Palace) offers ice skating and ice karting.", "The church of Sant Joan de Caselles is a jewel of Romanesque architecture.", "Part of the largest ski area in the Pyrenees, Grandvalira.", "The Tibetan Pont suspension bridge is a new attraction."]
    },
    descriptionAdvanced: {
      de: "Canillo ist die größte Gemeinde Andorras und ein Zentrum des Glaubens und des Wintersports. Es beherbergt das moderne Heiligtum von Meritxell, das nach einem Brand in den 1970er Jahren wieder aufgebaut wurde und der Schutzpatronin des Landes gewidmet ist. Die Gemeinde bietet auch Zugang zu den Sektoren Canillo und Soldeu-El Tarter von Grandvalira. Eine der neuesten und spektakulärsten Attraktionen ist der Roc del Quer, eine Aussichtsplattform mit Glasboden, die einen atemberaubenden Blick auf das Tal bietet.",
      hu: "Canillo Andorra legnagyobb községe, a vallás és a téli sportok központja. Itt található a modern Meritxell szentély, amelyet az 1970-es években történt tűzvész után építettek újjá, és az ország védőszentjének szenteltek. A község hozzáférést biztosít a Grandvalira Canillo és Soldeu-El Tarter szektoraihoz is. Az egyik legújabb és leglátványosabb látnivaló a Roc del Quer, egy üvegfenekű kilátóterasz, amely lélegzetelállító kilátást nyújt a völgyre.",
      ro: "Canillo este cea mai mare parohie din Andorra și un centru al credinței și sporturilor de iarnă. Găzduiește sanctuarul modern din Meritxell, reconstruit după un incendiu în anii 1970 și dedicat sfintei patroane a țării. Parohia oferă, de asemenea, acces la sectoarele Canillo și Soldeu-El Tarter din Grandvalira. Una dintre cele mai noi și mai spectaculoase atracții este Roc del Quer, o platformă de observare cu podea de sticlă care oferă vederi uluitoare ale văii.",
      en: "As the largest parish in Andorra, Canillo covers a vast, high-altitude territory that is both a spiritual center and a winter sports hub. It is home to the Sanctuary of Meritxell, a modern basilica dedicated to the patron saint of Andorra, making it the country's most important pilgrimage site. For adrenaline seekers, the parish offers access to the extensive Grandvalira ski area, including the family-friendly Soldeu and El Tarter sectors. A must-visit attraction is the Roc del Quer viewpoint, a skywalk that juts out from the mountainside, offering heart-stopping views from its glass-floored section. Another architectural gem is the 12th-century church of Sant Joan de Caselles, a perfect example of Andorran Romanesque style. In summer, the region becomes a paradise for hikers and climbers, with numerous trails and 'via ferrata' routes. Art History K6 - Romanesque Architecture."
    },
    factsAdvanced: {
      de: ["Höchste Gemeinde in Andorra.", "Der Name hat einen vorrömischen, wahrscheinlich iberisch-baskischen Ursprung.", "Das Motorradmuseum ist eine weitere Attraktion.", "Die 'Via Ferrata' Klettersteige sind sehr beliebt.", "Die Kirche hat einen einzigartigen Stuck-Altaraufsatz aus dem 16. Jahrhundert."],
      hu: ["Andorra legmagasabb községe.", "A névnek preromán, valószínűleg ibériai-baszk eredete van.", "A Motorkerékpár Múzeum egy másik látnivaló.", "A 'Via Ferrata' vasalt utak nagyon népszerűek.", "A templomnak egyedülálló, 16. századi stukkó oltárképe van."],
      ro: ["Cea mai înaltă parohie din Andorra.", "Numele are o origine pre-romană, probabil ibero-bască.", "Muzeul Motocicletelor este o altă atracție.", "Traseele de 'Via Ferrata' sunt foarte populare.", "Biserica are un altar unic din stuc din secolul al XVI-lea."],
      en: [
        "Canillo is the largest parish by area in Andorra, covering 121 square kilometers.",
        "It houses the Sanctuary of Meritxell, the spiritual center of Andorra.",
        "The Roc del Quer viewpoint features a 20-meter walkway suspended over the valley.",
        "The Palau de Gel (Ice Palace) in Canillo offers activities like ice skating and karting on ice.",
        "The church of Sant Joan de Caselles is a prime example of Andorran Romanesque art.",
        "The parish includes the major ski sectors of Soldeu and El Tarter, part of Grandvalira.",
        "The Tibetan Bridge of Canillo, one of the longest in the world, is a recent addition.",
        "The parish's 'Festa Major' is celebrated around the third weekend of July."
      ]
    },
    image: "/geo-images/europe/canillo-roc-del-quer-viewpoint.webp"
  },
  {
    id: "city-sant-julia",
    type: "city",
    parent: "country-andorra",
    coords: [1.4913, 42.4637],
    name: { de: "Sant Julià de Lòria", hu: "Sant Julià de Lòria", ro: "Sant Julià de Lòria", en: "Sant Julià de Lòria" },
    description: {
      de: "Die südlichste Gemeinde, bekannt für ihre milderen Temperaturen und den Abenteuerpark Naturlandia.",
      hu: "A legdélibb község, enyhébb hőmérsékletéről és a Naturlandia kalandparkról ismert.",
      ro: "Cea mai sudică parohie, cunoscută pentru temperaturile sale mai blânde și parcul de aventuri Naturlandia.",
      en: "The southernmost parish, known for its milder temperatures and the Naturlandia adventure park."
    },
    facts: {
      de: ["Standort von Naturlandia und seinem Tobotronc, der längsten Natur-Rodelbahn der Welt.", "Die Universität von Andorra befindet sich hier.", "Grenzt an Spanien.", "Wichtiges Zentrum für den Tabakanbau in der Vergangenheit.", "Die Kirche Sant Serni de Nagol ist ein romanisches Juwel."],
      hu: ["A Naturlandia és a Tobotronc, a világ leghosszabb természetes szánkópályájának helyszíne.", "Itt található az Andorrai Egyetem.", "Spanyolországgal határos.", "A dohánytermesztés fontos központja volt a múltban.", "A Sant Serni de Nagol templom egy román kori ékkő."],
      ro: ["Locația Naturlandia și a Tobotronc, cel mai lung tobogan natural din lume.", "Universitatea din Andorra se află aici.", "Se învecinează cu Spania.", "Un centru important pentru cultivarea tutunului în trecut.", "Biserica Sant Serni de Nagol este o bijuterie romanică."],
      en: ["Location of Naturlandia and its Tobotronc, the world's longest nature toboggan.", "The University of Andorra is located here.", "Borders with Spain.", "Important center for tobacco cultivation in the past.", "The church of Sant Serni de Nagol is a Romanesque gem."]
    },
    descriptionAdvanced: {
      de: "Sant Julià de Lòria ist die erste Stadt, die man bei der Einreise aus Spanien erreicht. Sie liegt auf einer Höhe von 908 Metern und hat das mildeste Klima in Andorra. Die Hauptattraktion ist Naturlandia, ein Öko-Abenteuerpark, der Aktivitäten für die ganze Familie bietet, darunter der berühmte Tobotronc. Die Stadt hat auch ein reiches kulturelles Erbe, wie das Tabakmuseum, das an die Bedeutung dieser Industrie für das Land erinnert, und mehrere romanische Kirchen.",
      hu: "Sant Julià de Lòria az első város, amelyet Spanyolországból belépve elérünk. 908 méteres magasságban fekszik, és Andorra legenyhébb éghajlatával rendelkezik. Fő vonzereje a Naturlandia, egy öko-kalandpark, amely az egész család számára kínál programokat, köztük a híres Tobotroncot. A város gazdag kulturális örökséggel is rendelkezik, mint például a Dohánymúzeum, amely emlékeztet ennek az iparágnak az ország számára való fontosságára, és számos román kori templom.",
      ro: "Sant Julià de Lòria este primul oraș pe care îl întâlnești la intrarea din Spania. Este situat la o altitudine de 908 metri și are cel mai blând climat din Andorra. Atractia principală este Naturlandia, un parc de eco-aventură care oferă activități pentru întreaga familie, inclusiv faimosul Tobotronc. Orașul are, de asemenea, o bogată moștenire culturală, cum ar fi Muzeul Tutunului, care amintește de importanța acestei industrii pentru țară, și mai multe biserici romanice.",
      en: "As the southernmost parish, Sant Julià de Lòria is the main gateway into Andorra from Spain. It sits at the lowest altitude in the country, around 908 meters, giving it a milder climate than the other parishes. This area was historically the center of Andorra's tobacco industry, a past that is now elegantly preserved in the Tobacco Museum. Today, the parish is synonymous with adventure and family fun, thanks to Naturlandia. This sprawling eco-park is home to native Pyrenean animals and offers a wide range of activities, its most famous being the Tobotronc, one of the world's longest alpine coasters at 5.3 kilometers. The parish also holds cultural gems like the Romanesque church of Sant Serni de Nagol and the unique Juberri Contemporary Gardens, blending art with nature. Economics K9 - From Agriculture to Tourism."
    },
    factsAdvanced: {
      de: ["Der Name 'Lòria' leitet sich vom lateinischen 'laurea' (Lorbeer) ab.", "Die Universität von Andorra wurde 1997 gegründet.", "Der Tobotronc ist 5,3 km lang.", "Der Juberri Contemporary Garden ist ein einzigartiger Skulpturengarten.", "Die Pfarrkirche ist dem Heiligen Julian von Antinoe geweiht."],
      hu: ["A 'Lòria' név a latin 'laurea' (babér) szóból származik.", "Az Andorrai Egyetemet 1997-ben alapították.", "A Tobotronc 5,3 km hosszú.", "A Juberri Kortárs Kert egy egyedülálló szoborkert.", "A plébániatemplomot Antinoéi Szent Juliánnak szentelték."],
      ro: ["Numele 'Lòria' provine din latinescul 'laurea' (laur).", "Universitatea din Andorra a fost fondată în 1997.", "Tobotronc are o lungime de 5,3 km.", "Grădina Contemporană Juberri este o grădină de sculpturi unică.", "Biserica parohială este dedicată Sfântului Iulian din Antinoe."],
      en: [
        "It is the lowest-lying parish in Andorra, with an average altitude of 908 meters.",
        "Naturlandia's Tobotronc is one of the world's longest alpine coasters, at 5.3 km.",
        "The parish is home to the University of Andorra, founded in 1997.",
        "Historically, it was the main tobacco-producing region in the country.",
        "The Tobacco Museum is housed in the historic former Reig factory.",
        "The Romanesque church of Sant Cerni de Nagol dates back to the 11th century.",
        "The parish shares a border with Catalonia, Spain.",
        "The 'Festa Major' of Sant Julià is celebrated at the end of July."
      ]
    },
    image: "/geo-images/europe/sant-julia-de-loria-naturlandia.webp"
  }
];

export const andorraLandmarks: POI[] = [
  {
    id: "landmark-casa-de-la-vall",
    type: "historical",
    parent: "city-andorra-la-vella",
    coords: [1.5209, 42.5069],
    name: { de: "Casa de la Vall", hu: "Casa de la Vall", ro: "Casa de la Vall", en: "Casa de la Vall" },
    description: {
      de: "Das ehemalige Parlamentsgebäude Andorras, ein historisches Haus aus dem 16. Jahrhundert in Andorra la Vella.",
      hu: "Andorra egykori parlamentjének épülete, egy 16. századi történelmi ház Andorra la Vellában.",
      ro: "Fosta clădire a parlamentului din Andorra, o casă istorică din secolul al XVI-lea în Andorra la Vella.",
      en: "The former parliament building of Andorra, a historic 16th-century house in Andorra la Vella."
    },
    descriptionAdvanced: {
      en: "Casa de la Vall, meaning 'House of the Valley', is one of Andorra's most emblematic buildings. Originally a 16th-century manor house, it was purchased in 1702 to serve as the headquarters of the Consell de la Terra (General Council), Andorra's parliament. Its robust stone walls and defensive tower reflect the turbulent times in which it was built. Inside, visitors can explore the main chamber where the council met, a historical kitchen, and the old courtroom. A standout feature is the Cabinet of the Seven Keys, a chest that held the country's most important documents and could only be opened when representatives from all seven parishes were present with their keys. Though the parliament moved to a new building in 2011, Casa de la Vall remains a powerful symbol of Andorra's unique history and democratic tradition.",
      de: "Die Casa de la Vall, 'Haus des Tals', ist eines der symbolträchtigsten Gebäude Andorras. Ursprünglich ein Herrenhaus aus dem 16. Jahrhundert, wurde es 1702 erworben, um als Sitz des Consell de la Terra (Generalrat), des andorranischen Parlaments, zu dienen. Seine robusten Steinmauern und der Wehrturm spiegeln die unruhigen Zeiten wider, in denen es erbaut wurde. Im Inneren können Besucher den Hauptsaal, in dem der Rat tagte, eine historische Küche und den alten Gerichtssaal erkunden. Ein besonderes Merkmal ist der Schrank der sieben Schlüssel, eine Truhe, in der die wichtigsten Dokumente des Landes aufbewahrt wurden und die nur geöffnet werden konnte, wenn Vertreter aller sieben Pfarreien mit ihren Schlüsseln anwesend waren. Obwohl das Parlament 2011 in ein neues Gebäude umzog, bleibt die Casa de la Vall ein starkes Symbol für Andorras einzigartige Geschichte und demokratische Tradition.",
      hu: "A Casa de la Vall, vagyis 'A Völgy Háza', Andorra egyik legemblematikusabb épülete. Eredetileg egy 16. századi nemesi kúria volt, amelyet 1702-ben vásároltak meg, hogy az andorrai parlament, a Consell de la Terra (Általános Tanács) székhelyéül szolgáljon. Masszív kőfalai és védelmi tornya az építésének viharos időszakát tükrözik. Belül a látogatók felfedezhetik a főtermet, ahol a tanács ülésezett, egy történelmi konyhát és a régi bírósági termet. Kiemelkedő eleme a Hét Kulcs Szekrénye, egy láda, amely az ország legfontosabb dokumentumait őrizte, és csak akkor lehetett kinyitni, ha mind a hét község képviselője jelen volt a saját kulcsával. Bár a parlament 2011-ben új épületbe költözött, a Casa de la Vall továbbra is Andorra egyedülálló történelmének és demokratikus hagyományainak erőteljes szimbóluma.",
      ro: "Casa de la Vall, însemnând 'Casa Văii', este una dintre cele mai emblematice clădiri din Andorra. Inițial o casă seniorială din secolul al XVI-lea, a fost achiziționată în 1702 pentru a servi drept sediu al Consell de la Terra (Consiliul General), parlamentul Andorrei. Zidurile sale robuste de piatră și turnul de apărare reflectă vremurile tulburi în care a fost construită. În interior, vizitatorii pot explora camera principală unde se întrunea consiliul, o bucătărie istorică și vechea sală de judecată. O caracteristică remarcabilă este Dulapul cu Șapte Chei, o ladă care păstra cele mai importante documente ale țării și care putea fi deschisă doar atunci când reprezentanții din toate cele șapte parohii erau prezenți cu cheile lor. Deși parlamentul s-a mutat într-o clădire nouă în 2011, Casa de la Vall rămâne un simbol puternic al istoriei unice și tradiției democratice a Andorrei."
    },
    factsAdvanced: {
      de: ["Erbaut 1580 als Herrenhaus für die Familie Busquets.", "Diente von 1702 bis 2011 als Sitz des Generalrats.", "Beherbergt einen historischen Gerichtssaal und eine Küche.", "Die 'Armari de les set claus' (Schrank der sieben Schlüssel) bewahrte wichtige Dokumente auf.", "Führungen bieten Einblicke in die andorranische Geschichte."],
      hu: ["1580-ban épült a Busquets család kúriájaként.", "1702-től 2011-ig a Nagytanács székhelye volt.", "Történelmi tárgyalótermet és konyhát is magában foglal.", "Az 'Armari de les set claus' (A hét kulcs szekrénye) fontos dokumentumokat őrzött.", "A vezetett túrák bepillantást engednek az andorrai történelembe."],
      ro: ["Construită în 1580 ca o casă nobiliară pentru familia Busquets.", "A servit ca sediu al Consiliului General din 1702 până în 2011.", "Găzduiește o sală de judecată istorică și o bucătărie.", "\\\"Armari de les set claus\\\" (Dulapul celor șapte chei) păstra documente importante.", "Tururile ghidate oferă o perspectivă asupra istoriei andorrane."],
      en: ["Built in 1580 as a manor for the Busquets family.", "Served as the seat of the General Council from 1702 to 2011.", "Houses a historical courtroom and kitchen.", "The 'Armari de les set claus' (Cabinet of the Seven Keys) stored important documents.", "Guided tours offer insights into Andorran history."]
    }
   
  },
  {
    id: "landmark-sant-joan-caselles",
    type: "historical",
    parent: "city-canillo",
    coords: [1.609, 42.571],
    name: { de: "Sant Joan de Caselles", hu: "Sant Joan de Caselles", ro: "Sant Joan de Caselles", en: "Sant Joan de Caselles" },
    description: {
      de: "Eine der besterhaltenen romanischen Kirchen in Andorra mit einem beeindruckenden Glockenturm und Fresken.",
      hu: "Andorra egyik legjobb állapotban megőrzött román kori temploma, lenyűgöző harangtoronnyal és freskókkal.",
      ro: "Una dintre cele mai bine conservate biserici romanice din Andorra, cu un clopotniță impresionantă și fresce.",
      en: "One of the best-preserved Romanesque churches in Andorra, with an impressive bell tower and frescoes."
    },
    descriptionAdvanced: {
      en: "The Church of Sant Joan de Caselles is a quintessential example of Andorran Romanesque architecture. Located just outside the town of Canillo, this 11th-12th century church is distinguished by its tall, multi-story Lombard-style bell tower. The building features a rectangular nave and a semi-circular apse. Inside, it preserves a magnificent 16th-century altarpiece depicting scenes from the life of Saint John the Evangelist, considered one of the finest in the Pyrenees. It also contains remnants of 12th-century Romanesque frescoes, including a stucco Majesty of Christ surrounded by apostles. The church's simple yet elegant design and its remarkable state of preservation make it a key monument for understanding the artistic and religious heritage of medieval Andorra.",
      de: "Die Kirche Sant Joan de Caselles ist ein Paradebeispiel für die andorranische romanische Architektur. Diese Kirche aus dem 11. bis 12. Jahrhundert liegt etwas außerhalb der Stadt Canillo und zeichnet sich durch ihren hohen, mehrstöckigen Glockenturm im lombardischen Stil aus. Das Gebäude verfügt über ein rechteckiges Kirchenschiff und eine halbrunde Apsis. Im Inneren bewahrt sie ein prächtiges Altarbild aus dem 16. Jahrhundert, das Szenen aus dem Leben des Heiligen Johannes des Evangelisten darstellt und als eines der schönsten in den Pyrenäen gilt. Sie enthält auch Überreste von romanischen Fresken aus dem 12. Jahrhundert, darunter eine Stuck-Majestät Christi, umgeben von Aposteln. Das schlichte, aber elegante Design der Kirche und ihr bemerkenswerter Erhaltungszustand machen sie zu einem Schlüsseldenkmal für das Verständnis des künstlerischen und religiösen Erbes des mittelalterlichen Andorra.",
      hu: "A Sant Joan de Caselles-templom az andorrai román stílusú építészet jellegzetes példája. Ez a 11-12. századi templom Canillo városán kívül található, és magas, többszintes, lombard stílusú harangtornyáról nevezetes. Az épület téglalap alakú hajóval és félköríves apszissal rendelkezik. Belsejében egy csodálatos, 16. századi oltárkép található, amely Szent János evangélista életének jeleneteit ábrázolja, és a Pireneusok egyik legszebbjeként tartják számon. Emellett 12. századi román stílusú freskók maradványait is tartalmazza, köztük egy stukkó Krisztus-ábrázolást apostolokkal körülvéve. A templom egyszerű, mégis elegáns kialakítása és figyelemre méltóan jó állapota kulcsfontosságú műemlékké teszi a középkori Andorra művészeti és vallási örökségének megértéséhez.",
      ro: "Biserica Sant Joan de Caselles este un exemplu chintesențial al arhitecturii romanice andorrane. Situată chiar în afara orașului Canillo, această biserică din secolele XI-XII se distinge prin turnul său clopotniță înalt, cu mai multe etaje, în stil lombard. Clădirea are o navă dreptunghiulară și o absidă semicirculară. În interior, păstrează un magnific altar din secolul al XVI-lea, care înfățișează scene din viața Sfântului Ioan Evanghelistul, considerat unul dintre cele mai frumoase din Pirinei. De asemenea, conține rămășițe de fresce romanice din secolul al XII-lea, inclusiv o Majestate a lui Hristos din stuc, înconjurată de apostoli. Designul simplu, dar elegant, al bisericii și starea sa remarcabilă de conservare o fac un monument cheie pentru înțelegerea patrimoniului artistic și religios al Andorrei medievale."
    },
    factsAdvanced: {
      de: ["Erbaut im 11.-12. Jahrhundert.", "Der Glockenturm hat drei Stockwerke mit Zwillingsfenstern.", "Beherbergt ein gotisches Retabel aus dem 16. Jahrhundert.", "Die ursprünglichen romanischen Fresken sind teilweise erhalten.", "Ein Portikus wurde später im 16. oder 17. Jahrhundert hinzugefügt."],
      hu: ["A 11-12. században épült.", "A harangtorony háromszintes, ikerablakokkal.", "Egy 16. századi gótikus oltárképet őriz.", "Az eredeti román kori freskók részben megmaradtak.", "A 16. vagy 17. században egy előcsarnokot építettek hozzá."],
      ro: ["Construită în secolele XI-XII.", "Clopotnița are trei etaje cu ferestre geminate.", "Găzduiește un retablu gotic din secolul al XVI-lea.", "Frescele romanice originale sunt parțial conservate.", "Un pridvor a fost adăugat ulterior, în secolul al XVI-lea sau al XVII-lea."],
      en: ["Built in the 11th-12th centuries.", "The bell tower has three floors with twin windows.", "Houses a 16th-century Gothic altarpiece.", "The original Romanesque frescoes are partially preserved.", "A portico was added later in the 16th or 17th century."]
    }, image: "/poi-images/landmark-sant-joan-caselles.webp"},
  {
    id: "landmark-santa-coloma",
    type: "historical",
    parent: "city-andorra-la-vella",
    coords: [1.511, 42.497],
    name: { de: "Santa Coloma Kirche", hu: "Santa Coloma-templom", ro: "Biserica Santa Coloma", en: "Santa Coloma Church" },
    description: {
      de: "Eine der ältesten Kirchen in Andorra, bekannt für ihren einzigartigen, runden lombardischen Glockenturm.",
      hu: "Andorra egyik legrégebbi temploma, egyedülálló, kerek lombard harangtornyáról ismert.",
      ro: "Una dintre cele mai vechi biserici din Andorra, cunoscută pentru clopotnița sa lombardă circulară, unică.",
      en: "One of the oldest churches in Andorra, known for its unique circular Lombard bell tower."
    },
    descriptionAdvanced: {
      en: "The church of Santa Coloma d'Andorra is one of the oldest and most singular religious buildings in the principality. Its nave is pre-Romanesque, dating back to the 8th or 9th century, but its most striking feature is the four-story circular Lombard bell tower, which was added in the 12th century and is a rare sight in the Pyrenees. The church was once famous for its magnificent Romanesque frescoes, which were sold and removed in the 1930s. After a long journey through private collections and museums, a significant part of these paintings was recovered by the Andorran government and is now displayed in a dedicated museum space next to the church, allowing visitors to appreciate them in their original context through video mapping technology.",
      de: "Die Kirche Santa Coloma d'Andorra ist eines der ältesten und einzigartigsten religiösen Gebäude im Fürstentum. Ihr Kirchenschiff ist vorromanisch und stammt aus dem 8. oder 9. Jahrhundert, aber ihr auffälligstes Merkmal ist der vierstöckige runde lombardische Glockenturm, der im 12. Jahrhundert hinzugefügt wurde und in den Pyrenäen eine Seltenheit ist. Die Kirche war einst berühmt für ihre prächtigen romanischen Fresken, die in den 1930er Jahren verkauft und entfernt wurden. Nach einer langen Reise durch private Sammlungen und Museen wurde ein bedeutender Teil dieser Gemälde von der andorranischen Regierung zurückgewonnen und wird nun in einem speziellen Museumsraum neben der Kirche ausgestellt, sodass Besucher sie in ihrem ursprünglichen Kontext durch Videomapping-Technologie bewundern können.",
      hu: "A Santa Coloma d'Andorra-templom a hercegség egyik legrégebbi és legegyedibb vallási épülete. Hajója preromán stílusú, a 8. vagy 9. századból származik, de legszembetűnőbb jellegzetessége a négyemeletes, kerek, lombard harangtorony, amelyet a 12. században adtak hozzá, és ritkaságszámba megy a Pireneusokban. A templom egykor híres volt csodálatos román stílusú freskóiról, amelyeket az 1930-as években eladtak és eltávolítottak. Hosszú utazás után, magángyűjteményeken és múzeumokon keresztül, a festmények jelentős részét visszaszerezte az andorrai kormány, és ma a templom melletti külön múzeumi térben állítják ki őket, lehetővé téve a látogatók számára, hogy videovetítési technológia segítségével eredeti kontextusukban csodálhassák meg őket.",
      ro: "Biserica Santa Coloma d'Andorra este una dintre cele mai vechi și mai singulare clădiri religioase din principat. Nava sa este pre-romanică, datând din secolul al VIII-lea sau al IX-lea, dar cea mai izbitoare caracteristică a sa este turnul clopotniță circular lombard cu patru etaje, care a fost adăugat în secolul al XII-lea și este o priveliște rară în Pirinei. Biserica a fost odată renumită pentru magnificele sale fresce romanice, care au fost vândute și îndepărtate în anii 1930. După o lungă călătorie prin colecții private și muzee, o parte semnificativă a acestor picturi a fost recuperată de guvernul andorran și este acum expusă într-un spațiu muzeal dedicat, lângă biserică, permițând vizitatorilor să le aprecieze în contextul lor original prin tehnologia de video mapping."
    },
    factsAdvanced: {
      de: ["Vorrömischer Ursprung, im 8. oder 9. Jahrhundert erbaut.", "Der runde Glockenturm aus dem 12. Jahrhundert ist in den Pyrenäen einzigartig.", "Die ursprünglichen romanischen Wandmalereien wurden 1930 entfernt und 2017 zurückgebracht.", "Beherbergt eine barocke Marienstatue aus dem 12. Jahrhundert.", "Das Kirchenschiff hat einen rechteckigen Grundriss."],
      hu: ["Előromán kori eredetű, a 8. vagy 9. században épült.", "A 12. századi kerek harangtorony egyedülálló a Pireneusokban.", "Az eredeti román kori falfestményeket 1930-ban eltávolították és 2017-ben hozták vissza.", "Egy 12. századi barokk Mária-szobrot őriz.", "A templomhajó téglalap alaprajzú."],
      ro: ["Origine pre-romanică, construită în secolul al VIII-lea sau al IX-lea.", "Clopotnița circulară din secolul al XII-lea este unică în Pirinei.", "Picturile murale romanice originale au fost îndepărtate în 1930 și returnate în 2017.", "Găzduiește o statuie barocă a Fecioarei din secolul al XII-lea.", "Nava bisericii are un plan rectangular."],
      en: ["Pre-Romanesque origin, built in the 8th or 9th century.", "The 12th-century circular bell tower is unique in the Pyrenees.", "Original Romanesque murals were removed in 1930 and returned in 2017.", "Houses a 12th-century Baroque statue of the Virgin Mary.", "The nave of the church has a rectangular floor plan."]
    }, image: "/poi-images/landmark-santa-coloma.webp"},
  {
    id: "landmark-meritxell",
    type: "historical",
    parent: "city-canillo",
    coords: [1.587, 42.555],
    name: { de: "Heiligtum von Meritxell", hu: "Meritxell-szentély", ro: "Sanctuarul din Meritxell", en: "Sanctuary of Meritxell" },
    description: {
      de: "Das wichtigste religiöse Zentrum Andorras, das der Schutzpatronin des Landes, Unserer Lieben Frau von Meritxell, gewidmet ist.",
      hu: "Andorra legfontosabb vallási központja, az ország védőszentjének, a Meritxelli Miasszonyunknak szentelve.",
      ro: "Cel mai important centru religios din Andorra, dedicat sfintei patroane a țării, Maica Domnului din Meritxell.",
      en: "The most important religious center in Andorra, dedicated to the country's patron saint, Our Lady of Meritxell."
    },
    descriptionAdvanced: {
      en: "The Sanctuary of Meritxell is the spiritual heart of Andorra. The original Romanesque chapel, which housed a revered 12th-century statue of the Virgin Mary, was tragically destroyed by fire in 1972. In its place, the renowned Spanish architect Ricardo Bofill designed a modern, eclectic sanctuary that was inaugurated in 1976. The new complex is a fusion of different styles, with arches, towers, and the use of black and white materials to represent the Pyrenean landscape of rock and snow. It contains a replica of the Romanesque statue that was lost in the fire. The sanctuary is part of the 'Marian Route', connecting several important shrines in Spain and France, and it was granted the title of Minor Basilica by Pope Francis in 2014.",
      de: "Das Heiligtum von Meritxell ist das spirituelle Herz Andorras. Die ursprüngliche romanische Kapelle, die eine verehrte Statue der Jungfrau Maria aus dem 12. Jahrhundert beherbergte, wurde 1972 bei einem Brand tragischerweise zerstört. An ihrer Stelle entwarf der renommierte spanische Architekt Ricardo Bofill ein modernes, eklektisches Heiligtum, das 1976 eingeweiht wurde. Der neue Komplex ist eine Verschmelzung verschiedener Stile mit Bögen, Türmen und der Verwendung von schwarzen und weißen Materialien, um die pyrenäische Landschaft aus Fels und Schnee darzustellen. Er enthält eine Nachbildung der romanischen Statue, die im Feuer verloren ging. Das Heiligtum ist Teil der 'Marienroute', die mehrere wichtige Schreine in Spanien und Frankreich verbindet, und wurde 2014 von Papst Franziskus zur Basilica minor ernannt.",
      hu: "A Meritxell-szentély Andorra spirituális szíve. Az eredeti román stílusú kápolna, amely egy tiszteletre méltó 12. századi Szűz Mária-szobornak adott otthont, 1972-ben egy tűzvészben tragikusan megsemmisült. Helyére a neves spanyol építész, Ricardo Bofill tervezett egy modern, eklektikus szentélyt, amelyet 1976-ban avattak fel. Az új komplexum különböző stílusok fúziója, ívekkel, tornyokkal, valamint a pireneusi szikla- és hótájat szimbolizáló fekete-fehér anyagok felhasználásával. Tartalmazza a tűzben elveszett román stílusú szobor másolatát. A szentély a 'Mária-út' része, amely több fontos spanyolországi és franciaországi szentélyt köt össze, és 2014-ben Ferenc pápa kisbazilika rangra emelte.",
      ro: "Sanctuarul din Meritxell este inima spirituală a Andorrei. Capela romanică originală, care adăpostea o statuie venerată a Fecioarei Maria din secolul al XII-lea, a fost distrusă tragic într-un incendiu în 1972. În locul său, renumitul arhitect spaniol Ricardo Bofill a proiectat un sanctuar modern, eclectic, inaugurat în 1976. Noul complex este o fuziune de stiluri diferite, cu arcade, turnuri și utilizarea materialelor alb-negru pentru a reprezenta peisajul pirinean de stâncă și zăpadă. Conține o replică a statuii romanice pierdute în incendiu. Sanctuarul face parte din 'Ruta Mariană', care leagă mai multe sanctuare importante din Spania și Franța, și i s-a acordat titlul de Bazilică Minoră de către Papa Francisc în 2014."
    },
    factsAdvanced: {
      de: ["Das ursprüngliche Heiligtum brannte 1972 nieder.", "Das neue Gebäude wurde vom Architekten Ricardo Bofill entworfen.", "Es ist Teil der 'Marianen-Route', die Schreine in Spanien und Frankreich verbindet.", "2014 von Papst Franziskus zur Basilica minor erhoben.", "Der Nationalfeiertag Andorras, der 8. September, ist das Fest Unserer Lieben Frau von Meritxell."],
      hu: ["Az eredeti szentély 1972-ben leégett.", "Az új épületet Ricardo Bofill építész tervezte.", "A 'Mária-út' része, amely spanyolországi és franciaországi szentélyeket köt össze.", "2014-ben Ferenc pápa kisbazilika rangra emelte.", "Andorra nemzeti ünnepe, szeptember 8., a Meritxelli Miasszonyunk ünnepe."],
      ro: ["Sanctuarul original a ars în 1972.", "Noua clădire a fost proiectată de arhitectul Ricardo Bofill.", "Face parte din 'Ruta Mariană', care leagă sanctuare din Spania și Franța.", "Declarată Basilica minor de către Papa Francisc în 2014.", "Ziua națională a Andorrei, 8 septembrie, este sărbătoarea Maicii Domnului din Meritxell."],
      en: ["The original sanctuary burned down in 1972.", "The new building was designed by architect Ricardo Bofill.", "It is part of the 'Marian Route', connecting shrines in Spain and France.", "Declared a Minor Basilica by Pope Francis in 2014.", "Andorra's national day, September 8, is the feast of Our Lady of Meritxell."]
    }, image: "/poi-images/landmark-meritxell.webp"}
];

export const andorraNature: POI[] = [
  {
    id: "nature-coma-pedrosa",
    type: "mountain",
    parent: "city-la-massana",
    coords: [1.463, 42.59],
    name: { de: "Coma Pedrosa", hu: "Coma Pedrosa", ro: "Coma Pedrosa", en: "Coma Pedrosa" },
    description: {
      de: "Der höchste Berg Andorras mit einer Höhe von 2.942 Metern, gelegen im Nordwesten des Landes.",
      hu: "Andorra legmagasabb hegye, 2942 méter magas, az ország északnyugati részén található.",
      ro: "Cel mai înalt munte din Andorra, cu o altitudine de 2.942 de metri, situat în nord-vestul țării.",
      en: "The highest mountain in Andorra, with an elevation of 2,942 meters, located in the northwest of the country."
    },
    descriptionAdvanced: {
      en: "Coma Pedrosa stands as the highest point in Andorra, reaching an impressive 2,942 meters (9,652 ft). Located in the parish of La Massana, its peak is a popular but challenging objective for hikers. The ascent typically starts from the village of Arinsal and winds through the Coma Pedrosa Valleys Natural Park, a protected area of high ecological value. The trail passes by glacial lakes, such as the Estanys de Baiau, and offers a chance to see Pyrenean wildlife. From the summit, on a clear day, one is rewarded with a spectacular 360-degree panorama that encompasses much of Andorra and extends into the neighboring Pyrenean peaks of France and Spain. A mountain hut, Refugi del Coma Pedrosa, provides shelter and lodging for mountaineers.",
      de: "Der Coma Pedrosa ist der höchste Punkt Andorras und erreicht eine beeindruckende Höhe von 2.942 Metern (9.652 ft). Er liegt in der Gemeinde La Massana und sein Gipfel ist ein beliebtes, aber anspruchsvolles Ziel für Wanderer. Der Aufstieg beginnt normalerweise im Dorf Arinsal und führt durch den Naturpark Coma Pedrosa-Täler, ein Schutzgebiet von hohem ökologischem Wert. Der Weg führt an Gletscherseen wie den Estanys de Baiau vorbei und bietet die Möglichkeit, die Tierwelt der Pyrenäen zu beobachten. Vom Gipfel aus wird man an einem klaren Tag mit einem spektakulären 360-Grad-Panorama belohnt, das einen Großteil von Andorra umfasst und sich bis zu den benachbarten Pyrenäengipfeln in Frankreich und Spanien erstreckt. Eine Berghütte, das Refugi del Coma Pedrosa, bietet Bergsteigern Schutz und Unterkunft.",
      hu: "A Coma Pedrosa Andorra legmagasabb pontja, lenyűgöző, 2942 méteres (9652 láb) magasságot ér el. La Massana községben található, csúcsa népszerű, de kihívást jelentő cél a túrázók számára. A mászás általában Arinsal faluból indul, és a Coma Pedrosa Völgyek Natúrparkon keresztül kanyarog, amely egy magas ökológiai értékű védett terület. Az ösvény gleccsertavak, például az Estanys de Baiau mellett halad el, és lehetőséget nyújt a pireneusi vadvilág megtekintésére. A csúcsról tiszta napon látványos, 360 fokos panoráma tárul elénk, amely magában foglalja Andorra nagy részét, és kiterjed a szomszédos francia és spanyol pireneusi csúcsokra is. Egy hegyi kunyhó, a Refugi del Coma Pedrosa, menedéket és szállást biztosít a hegymászóknak.",
      ro: "Coma Pedrosa este cel mai înalt punct din Andorra, atingând o înălțime impresionantă de 2.942 de metri (9.652 ft). Situat în parohia La Massana, vârful său este un obiectiv popular, dar provocator pentru drumeți. Ascensiunea începe de obicei din satul Arinsal și șerpuiește prin Parcul Natural Văile Coma Pedrosa, o arie protejată de mare valoare ecologică. Traseul trece pe lângă lacuri glaciare, cum ar fi Estanys de Baiau, și oferă șansa de a vedea fauna sălbatică pireneană. De pe vârf, într-o zi senină, ești recompensat cu o panoramă spectaculoasă de 360 de grade, care cuprinde o mare parte din Andorra și se extinde până la vârfurile pirinene învecinate din Franța și Spania. O cabană montană, Refugi del Coma Pedrosa, oferă adăpost și cazare alpiniștilor."
    },
    factsAdvanced: {
      de: ["Der Aufstieg dauert etwa 4-5 Stunden.", "Teil des Naturparks Coma Pedrosa-Täler.", "Auf dem Gipfel befindet sich eine kleine Schutzhütte.", "Der Name bedeutet 'steiniges Tal'.", "Bietet Panoramablick auf die Pyrenäen."],
      hu: ["A csúcs megmászása körülbelül 4-5 órát vesz igénybe.", "A Coma Pedrosa-völgyek Natúrpark része.", "A csúcson egy kis menedékház található.", "A név jelentése 'köves völgy'.", "Panorámás kilátást nyújt a Pireneusokra."],
      ro: ["Ascensiunea durează aproximativ 4-5 ore.", "Parte a Parcului Natural Văile Coma Pedrosa.", "Pe vârf se află un mic refugiu.", "Numele înseamnă 'vale pietroasă'.", "Oferă vederi panoramice ale Pirineilor."],
      en: ["The ascent takes approximately 4-5 hours.", "Part of the Coma Pedrosa Valleys Natural Park.", "A small refuge hut is located near the summit.", "The name means 'stony valley'.", "Offers panoramic views across the Pyrenees."]
    }
  },
  {
    id: "nature-tristaina",
    type: "lake",
    parent: "city-ordino",
    coords: [1.49, 42.639],
    name: { de: "Tristaina-Seen", hu: "Tristaina-tavak", ro: "Lacurile Tristaina", en: "Tristaina Lakes" },
    description: {
      de: "Eine Gruppe von drei malerischen Gletscherseen in der Gemeinde Ordino, umgeben von hohen Gipfeln.",
      hu: "Három festői gleccsertóból álló csoport Ordino községben, magas csúcsokkal körülvéve.",
      ro: "Un grup de trei lacuri glaciare pitorești în parohia Ordino, înconjurate de vârfuri înalte.",
      en: "A group of three picturesque glacial lakes in the parish of Ordino, surrounded by high peaks."
    },
    descriptionAdvanced: {
      en: "The Tristaina Lakes (Estanys de Tristaina) are a set of three high-mountain glacial lakes located at the heart of a stunning natural cirque in the parish of Ordino. Accessible via a relatively easy hike from the top of the Ordino-Arcalís ski resort, they are among the most visited natural attractions in Andorra. The three lakes are the Estany Primer (First Lake), Estany del Mig (Middle Lake), and the largest, Estany de Més Amunt (Furthest Lake). The surrounding peaks, including the Pic de Tristaina, create a spectacular amphitheater of rock and scree. In 2021, a solar viewpoint monument, the 'Mirador Solar de Tristaina', was installed on a nearby peak, offering both a unique sundial function and breathtaking views of the lakes and mountains.",
      de: "Die Tristaina-Seen (Estanys de Tristaina) sind eine Gruppe von drei Hochgebirgs-Gletscherseen im Herzen eines atemberaubenden natürlichen Kars in der Gemeinde Ordino. Sie sind über eine relativ einfache Wanderung von der Spitze des Skigebiets Ordino-Arcalís aus erreichbar und gehören zu den meistbesuchten Naturattraktionen in Andorra. Die drei Seen sind der Estany Primer (Erster See), der Estany del Mig (Mittlerer See) und der größte, der Estany de Més Amunt (Oberster See). Die umliegenden Gipfel, einschließlich des Pic de Tristaina, bilden ein spektakuläres Amphitheater aus Fels und Geröll. Im Jahr 2021 wurde auf einem nahegelegenen Gipfel ein Sonnenuhr-Aussichtspunkt, der 'Mirador Solar de Tristaina', installiert, der sowohl eine einzigartige Sonnenuhrfunktion als auch atemberaubende Ausblicke auf die Seen und Berge bietet.",
      hu: "A Tristaina-tavak (Estanys de Tristaina) egy három magashegyi gleccsertóból álló csoport, amely Ordino községben, egy lenyűgöző természeti cirkuszvölgy szívében található. Az Ordino-Arcalís síterep tetejéről egy viszonylag könnyű túrával elérhetőek, és Andorra leglátogatottabb természeti látnivalói közé tartoznak. A három tó az Estany Primer (Első-tó), az Estany del Mig (Középső-tó) és a legnagyobb, az Estany de Més Amunt (Felső-tó). A környező csúcsok, köztük a Pic de Tristaina, egy látványos szikla- és törmelékamfiteátrumot hoznak létre. 2021-ben egy közeli csúcson egy napóra-kilátó emlékművet, a 'Mirador Solar de Tristaina'-t telepítettek, amely egyedi napóra funkciót és lélegzetelállító kilátást kínál a tavakra és a hegyekre.",
      ro: "Lacurile Tristaina (Estanys de Tristaina) sunt un set de trei lacuri glaciare de mare altitudine, situate în inima unui circ natural uimitor din parohia Ordino. Accesibile printr-o drumeție relativ ușoară de la vârful stațiunii de schi Ordino-Arcalís, acestea se numără printre cele mai vizitate atracții naturale din Andorra. Cele trei lacuri sunt Estany Primer (Primul Lac), Estany del Mig (Lacul de Mijloc) și cel mai mare, Estany de Més Amunt (Lacul Cel Mai de Sus). Vârfurile înconjurătoare, inclusiv Pic de Tristaina, creează un amfiteatru spectaculos de stâncă și grohotiș. În 2021, un monument punct de belvedere solar, 'Mirador Solar de Tristaina', a fost instalat pe un vârf din apropiere, oferind atât o funcție unică de cadran solar, cât și vederi uluitoare ale lacurilor și munților."
    },
    factsAdvanced: {
      de: ["Liegen auf einer Höhe zwischen 2.250 und 2.330 Metern.", "Der größte See, Estany de Més Amunt, ist 12 Hektar groß.", "Der Weg zu den Seen ist Teil der 'Ruta del Ferro'.", "Die Seen sind im Winter zugefroren und schneebedeckt.", "Ein neuer 'Solar-Aussichtspunkt' wurde 2021 eröffnet."],
      hu: ["2250 és 2330 méter közötti magasságban fekszenek.", "A legnagyobb tó, az Estany de Més Amunt, 12 hektáros.", "A tavakhoz vezető út a 'Ruta del Ferro' része.", "A tavak télen befagynak és hó borítja őket.", "2021-ben új 'Napkémlelő' kilátót nyitottak."],
      ro: ["Situate la o altitudine între 2.250 și 2.330 de metri.", "Cel mai mare lac, Estany de Més Amunt, are 12 hectare.", "Traseul către lacuri face parte din 'Ruta del Ferro'.", "Lacurile sunt înghețate și acoperite de zăpadă iarna.", "Un nou 'punct de belvedere solar' a fost deschis în 2021."],
      en: ["Located at an altitude between 2,250 and 2,330 meters.", "The largest lake, Estany de Més Amunt, covers 12 hectares.", "The trail to the lakes is part of the 'Iron Route'.", "The lakes are frozen and snow-covered in winter.", "A new 'Solar Viewpoint' was opened in 2021."]
    }, image: "/poi-images/nature-tristaina.webp"},
  {
    id: "nature-madriu",
    type: "region",
    parent: "city-escaldes-engordany",
    coords: [1.603, 42.492],
    name: { de: "Madriu-Perafita-Claror-Tal", hu: "Madriu-Perafita-Claror-völgy", ro: "Valea Madriu-Perafita-Claror", en: "Madriu-Perafita-Claror Valley" },
    description: {
      de: "Ein Gletschertal und UNESCO-Weltkulturerbe, das 9% der Fläche Andorras ausmacht und für seine unberührte Natur bekannt ist.",
      hu: "Egy gleccservölgy és UNESCO Világörökségi helyszín, amely Andorra területének 9%-át teszi ki, és érintetlen természetéről ismert.",
      ro: "O vale glaciară și sit al Patrimoniului Mondial UNESCO, care acoperă 9% din teritoriul Andorrei și este cunoscută pentru natura sa neatinsă.",
      en: "A glacial valley and UNESCO World Heritage site, covering 9% of Andorra's territory, known for its pristine nature."
    },
    descriptionAdvanced: {
      en: "The Madriu-Perafita-Claror Valley is a vast glacial valley that offers a remarkable window into Andorra's past. Covering over 4,000 hectares, it was designated a UNESCO World Heritage cultural landscape because it preserves an ancient communal land-management system that has existed for over 700 years. The valley is a roadless wilderness, accessible only by hiking trails, which has helped to maintain its pristine character. It contains a wealth of high-pasture meadows, dramatic glacial cirques, and steep, wooded valleys. Dotted throughout are 'bordes' (traditional stone huts), terraced fields, and evidence of iron smelting, all testifying to a sustainable way of life in harmony with the high mountains. It's a living museum, demonstrating the long-term relationship between humans and the Pyrenean environment.",
      de: "Das Madriu-Perafita-Claror-Tal ist ein riesiges Gletschertal, das einen bemerkenswerten Einblick in die Vergangenheit Andorras bietet. Es erstreckt sich über 4.000 Hektar und wurde zum UNESCO-Weltkulturerbe erklärt, da es ein altes kommunales Landverwaltungssystem bewahrt, das seit über 700 Jahren besteht. Das Tal ist eine straßenlose Wildnis, die nur über Wanderwege erreichbar ist, was dazu beigetragen hat, seinen unberührten Charakter zu bewahren. Es enthält eine Fülle von Hochweiden, dramatischen Gletscherkaren und steilen, bewaldeten Tälern. Überall verstreut finden sich 'Bordes' (traditionelle Steinhütten), terrassierte Felder und Zeugnisse der Eisenverhüttung, die alle von einer nachhaltigen Lebensweise im Einklang mit den hohen Bergen zeugen. Es ist ein lebendiges Museum, das die langfristige Beziehung zwischen Mensch und Pyrenäenumwelt demonstriert.",
      hu: "A Madriu-Perafita-Claror-völgy egy hatalmas gleccsertáj, amely figyelemre méltó betekintést nyújt Andorra múltjába. Több mint 4000 hektáron terül el, és az UNESCO a világörökség részévé nyilvánította kultúrtáj kategóriában, mivel egy ősi, több mint 700 éve létező közösségi földkezelési rendszert őriz. A völgy egy úttalan vadon, amely csak túraútvonalakon közelíthető meg, ami segített megőrizni érintetlen jellegét. Gazdag magashegyi legelőkben, drámai gleccserkatlanokban és meredek, erdős völgyekben. Mindenütt 'bordes'-ek (hagyományos kőkunyhók), teraszos földek és vasolvasztásra utaló bizonyítékok találhatók, amelyek mind a magas hegyekkel összhangban lévő fenntartható életmódról tanúskodnak. Ez egy élő múzeum, amely bemutatja az ember és a pireneusi környezet hosszú távú kapcsolatát.",
      ro: "Valea Madriu-Perafita-Claror este o vale glaciară vastă care oferă o fereastră remarcabilă către trecutul Andorrei. Acoperind peste 4.000 de hectare, a fost desemnată peisaj cultural al Patrimoniului Mondial UNESCO, deoarece păstrează un sistem antic de gestionare comunală a terenurilor, care a existat de peste 700 de ani. Valea este o sălbăticie fără drumuri, accesibilă doar pe poteci de drumeție, ceea ce a ajutat la menținerea caracterului său virgin. Conține o multitudine de pajiști de mare altitudine, circuri glaciare dramatice și văi abrupte, împădurite. Presărate peste tot sunt 'bordes' (colibe tradiționale din piatră), câmpuri terasate și dovezi ale topirii fierului, toate acestea mărturisind un mod de viață durabil, în armonie cu munții înalți. Este un muzeu viu, care demonstrează relația pe termen lung dintre oameni și mediul pirinean."
    },
    factsAdvanced: {
      de: ["2004 zum UNESCO-Weltkulturerbe in der Kategorie 'Kulturlandschaft' ernannt.", "Das Tal hat keine Straßen und ist nur zu Fuß erreichbar.", "Beherbergt seltene Tierarten wie den Auerhahn und den Bartgeier.", "Zeugnisse traditioneller Landnutzung wie Terrassenfelder und Hirtenhütten.", "Das Tal ist ein Mikrokosmos, der zeigt, wie die Menschen die Pyrenäen über Jahrtausende bewirtschaftet haben."],
      hu: ["2004-ben nyilvánították az UNESCO Világörökség részévé a 'kultúrtáj' kategóriában.", "A völgyben nincsenek utak, csak gyalogosan közelíthető meg.", "Olyan ritka állatfajoknak ad otthont, mint a siketfajd és a szakállas saskeselyű.", "A hagyományos földhasználat tanúi, mint a teraszos földek és pásztorkunyhók.", "A völgy egy mikrokozmosz, amely bemutatja, hogyan gazdálkodtak az emberek a Pireneusokban évezredekig."],
      ro: ["Declarată sit al Patrimoniului Mondial UNESCO în 2004 la categoria 'peisaj cultural'.", "Valea nu are drumuri și este accesibilă doar pe jos.", "Găzduiește specii rare de animale, cum ar fi cocoșul de munte și vulturul bărbos.", "Mărturii ale utilizării tradiționale a terenurilor, cum ar fi terasele agricole și colibele de păstori.", "Valea este un microcosmos care arată cum oamenii au gestionat Pirineii de-a lungul mileniilor."],
      en: ["Declared a UNESCO World Heritage site in 2004 in the 'cultural landscape' category.", "The valley has no roads and is only accessible on foot.", "Home to rare animal species like the capercaillie and the bearded vulture.", "Evidence of traditional land use such as terraced fields and shepherd's huts.", "The valley is a microcosm showing how people have managed the Pyrenees over millennia."]
    }, image: "/poi-images/nature-madriu.webp"},
  {
    id: "nature-grandvalira",
    type: "landmark",
    parent: "city-encamp",
    coords: [1.66, 42.55],
    name: { de: "Grandvalira", hu: "Grandvalira", ro: "Grandvalira", en: "Grandvalira" },
    description: {
      de: "Das größte Skigebiet in den Pyrenäen und eines der größten in Europa, das mehrere andorranische Sektoren miteinander verbindet.",
      hu: "A Pireneusok legnagyobb és Európa egyik legnagyobb síterepe, amely több andorrai szektort köt össze.",
      ro: "Cea mai mare zonă de schi din Pirinei și una dintre cele mai mari din Europa, care leagă mai multe sectoare andorrane.",
      en: "The largest ski resort in the Pyrenees and one of the largest in Europe, linking several Andorran sectors."
    },
    descriptionAdvanced: {
      en: "Grandvalira is the largest ski and snowboard destination in the Pyrenees, a vast winter sports paradise created by the union of several of Andorra's ski resorts. It boasts over 210 kilometers of linked pistes, served by a modern and efficient lift system. The resort spans across a large portion of eastern Andorra, from Pas de la Casa on the French border to Encamp. Its sheer size allows it to offer an incredible variety of terrain for all ability levels, from gentle beginner slopes to challenging off-piste freeride zones. Beyond skiing, Grandvalira offers a wide range of activities, including dog sledding, snowshoeing, and zip-lining, as well as a vibrant après-ski scene in its numerous mountain restaurants and bars.",
      de: "Grandvalira ist das größte Ski- und Snowboardziel in den Pyrenäen, ein riesiges Wintersportparadies, das durch den Zusammenschluss mehrerer andorranischer Skigebiete entstanden ist. Es verfügt über 210 Kilometer verbundene Pisten, die von einem modernen und effizienten Liftsystem bedient werden. Das Resort erstreckt sich über einen großen Teil des östlichen Andorra, von Pas de la Casa an der französischen Grenze bis nach Encamp. Seine schiere Größe ermöglicht es, eine unglaubliche Vielfalt an Gelände für alle Könnerstufen anzubieten, von sanften Anfängerpisten bis hin zu anspruchsvollen Off-Piste-Freeride-Zonen. Neben dem Skifahren bietet Grandvalira eine breite Palette von Aktivitäten, darunter Hundeschlittenfahrten, Schneeschuhwandern und Seilrutschen, sowie eine lebhafte Après-Ski-Szene in seinen zahlreichen Bergrestaurants und Bars.",
      hu: "A Grandvalira a Pireneusok legnagyobb sí- és snowboard-célpontja, egy hatalmas téli sportparadicsom, amely több andorrai síterep egyesüléséből jött létre. Több mint 210 kilométernyi összekapcsolt pályával büszkélkedhet, amelyet egy modern és hatékony felvonórendszer szolgál ki. A síterep Kelet-Andorra nagy részén terül el, Pas de la Casa-tól a francia határon egészen Encampig. Puszta mérete lehetővé teszi, hogy hihetetlenül változatos terepet kínáljon minden tudásszint számára, a szelíd kezdő lejtőktől a kihívást jelentő pályán kívüli freeride zónákig. A síelésen túl a Grandvalira tevékenységek széles skáláját kínálja, beleértve a kutyaszánozást, a hótalpazást és a zipline-ozást, valamint élénk après-ski színteret a számos hegyi étteremben és bárban.",
      ro: "Grandvalira este cea mai mare destinație de schi și snowboard din Pirinei, un vast paradis al sporturilor de iarnă creat prin unirea mai multor stațiuni de schi din Andorra. Se mândrește cu peste 210 de kilometri de pârtii interconectate, deservite de un sistem de transport pe cablu modern și eficient. Stațiunea se întinde pe o mare parte din estul Andorrei, de la Pas de la Casa, la granița cu Franța, până la Encamp. Dimensiunea sa impresionantă îi permite să ofere o varietate incredibilă de terenuri pentru toate nivelurile de abilitate, de la pârtii ușoare pentru începători la zone provocatoare de freeride în afara pârtiilor. Pe lângă schi, Grandvalira oferă o gamă largă de activități, inclusiv plimbări cu sania trasă de câini, drumeții cu rachete de zăpadă și tiroliană, precum și o scenă vibrantă de après-ski în numeroasele sale restaurante și baruri montane."
    },
    factsAdvanced: {
      de: ["Bietet über 210 Pistenkilometer.", "Verbindet die Sektoren Pas de la Casa, Grau Roig, Soldeu, El Tarter, Canillo und Encamp.", "Austragungsort von Weltcup-Skirennen.", "Verfügt über drei Snowparks und eine Boardercross-Strecke.", "Der höchste Punkt des Skigebiets liegt auf 2.640 Metern."],
      hu: ["Több mint 210 kilométernyi sípályát kínál.", "Összeköti Pas de la Casa, Grau Roig, Soldeu, El Tarter, Canillo és Encamp szektorait.", "Világkupa síversenyek helyszíne.", "Három snowparkkal és egy boardercross pályával rendelkezik.", "A síterep legmagasabb pontja 2640 méteren van."],
      ro: ["Oferă peste 210 de kilometri de pârtii.", "Conectează sectoarele Pas de la Casa, Grau Roig, Soldeu, El Tarter, Canillo și Encamp.", "Găzduiește curse de Cupă Mondială la schi.", "Dispune de trei parcuri de zăpadă și o pistă de boardercross.", "Cel mai înalt punct al zonei de schi este la 2.640 de metri."],
      en: ["Offers over 210 kilometers of ski slopes.", "Connects the sectors of Pas de la Casa, Grau Roig, Soldeu, El Tarter, Canillo, and Encamp.", "Host to World Cup ski racing events.", "Features three snowparks and a boardercross track.", "The highest point of the ski area is at 2,640 meters."]
    }, image: "/poi-images/nature-grandvalira.webp"},
  {
    id: "nature-roc-del-quer",
    type: "landmark",
    parent: "city-canillo",
    coords: [1.608, 42.56],
    name: { de: "Aussichtspunkt Roc del Quer", hu: "Roc del Quer kilátó", ro: "Punctul de belvedere Roc del Quer", en: "Roc del Quer Viewpoint" },
    description: {
      de: "Eine spektakuläre Aussichtsplattform in Canillo mit einem Glasboden, der über dem Tal schwebt.",
      hu: "Látványos kilátóterasz Canillóban, üvegpadlóval, amely a völgy felett lebeg.",
      ro: "O platformă de observare spectaculoasă în Canillo, cu o podea de sticlă care plutește deasupra văii.",
      en: "A spectacular viewing platform in Canillo with a glass floor that hovers over the valley."
    },
    descriptionAdvanced: {
      en: "The Roc del Quer Viewpoint is a breathtaking structure that offers one of the most stunning panoramic views in Andorra. Located on the Coll d'Ordino road high above the valley of Canillo, the platform extends 20 meters out from the mountainside. Twelve meters of this walkway are suspended in mid-air, featuring a glass-floored section at the end that provides a thrilling, vertiginous view of the valley floor hundreds of meters below. At the tip of the platform sits a sculpture by the artist Miguel Ángel Latorre, 'The Ponderer', depicting a figure sitting calmly on a beam, seemingly contemplating the immense landscape. The viewpoint is easily accessible and provides an unforgettable perspective on the Pyrenean scenery.",
      de: "Der Aussichtspunkt Roc del Quer ist eine atemberaubende Konstruktion, die einen der schönsten Panoramablicke in Andorra bietet. Die Plattform befindet sich an der Straße zum Coll d'Ordino hoch über dem Tal von Canillo und ragt 20 Meter aus dem Berghang heraus. Zwölf Meter dieses Stegs sind in der Luft aufgehängt und verfügen am Ende über einen Glasboden, der einen aufregenden, schwindelerregenden Blick auf den Talboden Hunderte von Metern tiefer bietet. An der Spitze der Plattform sitzt eine Skulptur des Künstlers Miguel Ángel Latorre, 'Der Grübler', die eine Figur darstellt, die ruhig auf einem Balken sitzt und scheinbar die immense Landschaft betrachtet. Der Aussichtspunkt ist leicht zugänglich und bietet eine unvergessliche Perspektive auf die Pyrenäenlandschaft.",
      hu: "A Roc del Quer kilátó egy lélegzetelállító építmény, amely Andorra egyik leglenyűgözőbb panorámáját kínálja. A platform a Coll d'Ordino úton, magasan Canillo völgye felett található, és 20 méterre nyúlik ki a hegyoldalból. Ennek a sétánynak tizenkét métere a levegőben lóg, a végén egy üvegpadlós szakasszal, amely izgalmas, szédítő kilátást nyújt a több száz méterrel lejjebb fekvő völgyfenékre. A platform csúcsán Miguel Ángel Latorre művész szobra, 'A Gondolkodó' ül, amely egy gerendán nyugodtan ülő alakot ábrázol, aki látszólag a hatalmas tájat szemléli. A kilátó könnyen megközelíthető, és felejthetetlen perspektívát nyújt a pireneusi tájra.",
      ro: "Punctul de belvedere Roc del Quer este o structură uluitoare care oferă una dintre cele mai impresionante vederi panoramice din Andorra. Situată pe drumul Coll d'Ordino, deasupra văii Canillo, platforma se extinde la 20 de metri de pe versantul muntelui. Doisprezece metri din această pasarelă sunt suspendați în aer, având la capăt o secțiune cu podea de sticlă care oferă o priveliște palpitantă, vertiginoasă, a fundului văii, la sute de metri mai jos. În vârful platformei se află o sculptură a artistului Miguel Ángel Latorre, 'Gânditorul', care înfățișează o figură așezată calm pe o grindă, parcă contemplând peisajul imens. Punctul de belvedere este ușor accesibil și oferă o perspectivă de neuitat asupra peisajului pirenean."
    },
    factsAdvanced: {
      de: ["Eröffnet im Jahr 2016.", "Die Plattform ragt 20 Meter aus der Felswand heraus.", "Ein Teil des Bodens ist aus Glas gefertigt.", "Auf der Spitze sitzt die Skulptur 'Der Denker' von Miguel Ángel Latorre.", "Bietet 180-Grad-Blick auf das Canillo-Tal."],
      hu: ["2016-ban nyitották meg.", "A platform 20 méterre nyúlik ki a sziklafalból.", "A padló egy része üvegből készült.", "A csúcsán Miguel Ángel Latorre 'A Gondolkodó' című szobra ül.", "180 fokos kilátást nyújt a Canillo-völgyre."],
      ro: ["Inaugurat în 2016.", "Platforma se extinde la 20 de metri de pe versantul muntelui.", "O parte din podea este din sticlă.", "În vârf se află sculptura 'Gânditorul' de Miguel Ángel Latorre.", "Oferă vederi de 180 de grade ale văii Canillo."],
      en: ["Opened in 2016.", "The platform extends 20 meters out from the mountainside.", "Part of the floor is made of glass.", "Features the sculpture 'The Ponderer' by Miguel Ángel Latorre at its tip.", "Offers 180-degree views of the Canillo valley."]
    }, image: "/poi-images/nature-roc-del-quer.webp"}
];

export const andorraRegions: POI[] = [
  {
    id: "AD-07",
    type: "region",
    parent: "country-andorra",
    coords: [1.5218, 42.5063],
    name: { de: "Andorra la Vella (Gemeinde)", hu: "Andorra la Vella (község)", ro: "Andorra la Vella (parohie)", en: "Andorra la Vella (Parish)" },
    description: {
      de: "Die zentrale und bevölkerungsreichste Gemeinde, die die Hauptstadt beherbergt.",
      hu: "A központi és legnépesebb község, amely a fővárosnak ad otthont.",
      ro: "Parohia centrală și cea mai populată, care găzduiește capitala.",
      en: "The central and most populous parish, home to the capital city."
    },
    descriptionAdvanced: {
      en: "Andorra la Vella is the smallest but most populous parish in the principality. It serves as the nation's capital and its primary commercial hub. The parish is defined by the Valira river valley, where the city of Andorra la Vella and the historic village of Santa Coloma are located. It's the nerve center of the country, hosting the main government buildings, including the modern parliament building and the historic Casa de la Vall. The parish's main thoroughfare, Avinguda Meritxell, is a bustling street lined with duty-free shops, restaurants, and hotels, attracting visitors from all over Europe. Despite its urban character, the parish is surrounded by steep mountains, offering quick access to hiking trails and nature.",
      de: "Andorra la Vella ist die kleinste, aber bevölkerungsreichste Gemeinde des Fürstentums. Sie dient als Hauptstadt der Nation und als ihr wichtigstes Handelszentrum. Die Gemeinde wird durch das Tal des Flusses Valira definiert, in dem sich die Stadt Andorra la Vella und das historische Dorf Santa Coloma befinden. Sie ist das Nervenzentrum des Landes und beherbergt die wichtigsten Regierungsgebäude, darunter das moderne Parlamentsgebäude und die historische Casa de la Vall. Die Hauptverkehrsader der Gemeinde, die Avinguda Meritxell, ist eine belebte Straße mit zollfreien Geschäften, Restaurants und Hotels, die Besucher aus ganz Europa anzieht. Trotz ihres städtischen Charakters ist die Gemeinde von steilen Bergen umgeben, die einen schnellen Zugang zu Wanderwegen und Natur bieten.",
      hu: "Andorra la Vella a hercegség legkisebb, de legnépesebb községe. Ez a nemzet fővárosa és elsődleges kereskedelmi központja. A községet a Valira folyó völgye határozza meg, ahol Andorra la Vella városa és a történelmi Santa Coloma falu található. Az ország idegközpontja, ahol a fő kormányzati épületek találhatók, beleértve a modern parlament épületét és a történelmi Casa de la Vall-t. A község főútja, az Avinguda Meritxell, egy nyüzsgő utca, amelyet vámmentes üzletek, éttermek és szállodák szegélyeznek, és Európa minden tájáról vonzza a látogatókat. Városi jellege ellenére a községet meredek hegyek veszik körül, amelyek gyors hozzáférést biztosítanak a túraútvonalakhoz és a természethez.",
      ro: "Andorra la Vella este cea mai mică, dar cea mai populată parohie din principat. Servește drept capitală a națiunii și principalul său centru comercial. Parohia este definită de valea râului Valira, unde se află orașul Andorra la Vella și satul istoric Santa Coloma. Este centrul nervos al țării, găzduind principalele clădiri guvernamentale, inclusiv clădirea modernă a parlamentului și istorica Casa de la Vall. Arterială principală a parohiei, Avinguda Meritxell, este o stradă aglomerată, plină de magazine duty-free, restaurante și hoteluri, atrăgând vizitatori din toată Europa. În ciuda caracterului său urban, parohia este înconjurată de munți abrupți, oferind acces rapid la trasee de drumeții și la natură."
    },
    factsAdvanced: {
      de: ["Umfasst die Hauptstadt Andorra la Vella und das Dorf Santa Coloma.", "Das politische und wirtschaftliche Zentrum des Landes.", "Sitz der Regierung, des Parlaments und der Justiz.", "Wichtigster Einkaufsbezirk des Landes.", "Bevölkerungsdichte von über 1.800 Einwohnern/km²."],
      hu: ["Magában foglalja Andorra la Vella fővárost és Santa Coloma falut.", "Az ország politikai és gazdasági központja.", "A kormány, a parlament és az igazságszolgáltatás székhelye.", "Az ország legfontosabb bevásárlónegyede.", "Népsűrűsége meghaladja az 1800 fő/km²-t."],
      ro: ["Include capitala Andorra la Vella și satul Santa Coloma.", "Centrul politic și economic al țării.", "Sediul guvernului, parlamentului și justiției.", "Principalul district comercial al țării.", "Densitatea populației de peste 1.800 de locuitori/km²."],
      en: ["Includes the capital city, Andorra la Vella, and the village of Santa Coloma.", "The political and economic heart of the country.", "Seat of the government, parliament, and judiciary.", "The country's main shopping district.", "Population density of over 1,800 inhabitants/km²."]
    }
  },
  {
    id: "AD-08",
    type: "region",
    parent: "country-andorra",
    coords: [1.5401, 42.5093],
    name: { de: "Escaldes-Engordany (Gemeinde)", hu: "Escaldes-Engordany (község)", ro: "Escaldes-Engordany (parohie)", en: "Escaldes-Engordany (Parish)" },
    description: {
      de: "Die jüngste Gemeinde Andorras, die für ihre Thermalquellen und das Caldea-Spa bekannt ist.",
      hu: "Andorra legfiatalabb községe, termálforrásairól és a Caldea fürdőről ismert.",
      ro: "Cea mai nouă parohie din Andorra, renumită pentru izvoarele sale termale și centrul spa Caldea.",
      en: "Andorra's newest parish, famous for its thermal waters and the Caldea spa."
    },
    descriptionAdvanced: {
      en: "Established in 1978 after separating from Andorra la Vella, Escaldes-Engordany is the second most populated parish. Its identity is forged by water—both the hot thermal springs that gave it its name and the glacial waters of the Madriu-Perafita-Claror Valley, a UNESCO World Heritage Site that covers a large part of the parish's territory. The parish is a major tourist destination, anchored by the iconic Caldea-Inúu thermal spa complex. It seamlessly blends with the capital to form the country's main urban and commercial area, yet it also serves as a gateway to one of the most pristine and protected natural landscapes in the Pyrenees.",
      de: "Gegründet 1978 nach der Trennung von Andorra la Vella, ist Escaldes-Engordany die am zweitdichtesten besiedelte Gemeinde. Ihre Identität ist durch Wasser geprägt – sowohl durch die heißen Thermalquellen, die ihr den Namen gaben, als auch durch die Gletschergewässer des Madriu-Perafita-Claror-Tals, einem UNESCO-Weltkulturerbe, das einen großen Teil des Gemeindegebiets bedeckt. Die Gemeinde ist ein wichtiges Touristenziel, verankert durch den ikonischen Thermalbadkomplex Caldea-Inúu. Sie fügt sich nahtlos in die Hauptstadt ein und bildet das wichtigste städtische und kommerzielle Gebiet des Landes, dient aber auch als Tor zu einer der unberührtesten und geschütztesten Naturlandschaften der Pyrenäen.",
      hu: "Az 1978-ban Andorra la Vellától elszakadva létrejött Escaldes-Engordany a második legnépesebb község. Identitását a víz alakítja – mind a forró termálforrások, amelyek a nevét adták, mind a Madriu-Perafita-Claror-völgy gleccservizei, amely egy UNESCO Világörökségi helyszín, és a község területének nagy részét lefedi. A község jelentős turisztikai célpont, amelyet az ikonikus Caldea-Inúu termálfürdő-komplexum horgonyoz le. Zökkenőmentesen olvad össze a fővárossal, alkotva az ország fő városi és kereskedelmi területét, ugyanakkor kapuként is szolgál a Pireneusok egyik legérintetlenebb és legvédettebb természeti tájához.",
      ro: "Înființată în 1978 după separarea de Andorra la Vella, Escaldes-Engordany este a doua cea mai populată parohie. Identitatea sa este formată de apă – atât izvoarele termale fierbinți care i-au dat numele, cât și apele glaciare ale Văii Madriu-Perafita-Claror, un sit al Patrimoniului Mondial UNESCO care acoperă o mare parte a teritoriului parohiei. Parohia este o destinație turistică majoră, ancorată de iconicul complex balnear Caldea-Inúu. Se îmbină perfect cu capitala pentru a forma principala zonă urbană și comercială a țării, dar servește și ca o poartă de acces către unul dintre cele mai curate și protejate peisaje naturale din Pirinei."
    },
    factsAdvanced: {
      de: ["Gegründet am 14. Juni 1978.", "Der Name 'Engordany' ist älter als 'Escaldes'.", "Beherbergt das Museum für Parfümerie.", "Das Festival der Farben findet hier im Sommer statt.", "Das Wasser der Thermalquellen ist reich an Schwefel und Mineralien."],
      hu: ["1978. június 14-én alapították.", "Az 'Engordany' név régebbi, mint az 'Escaldes'.", "Itt található a Parfüm Múzeum.", "A Színek Fesztiválját nyáron itt rendezik meg.", "A termálvizek kénben és ásványi anyagokban gazdagok."],
      ro: ["Fondată la 14 iunie 1978.", "Numele 'Engordany' este mai vechi decât 'Escaldes'.", "Găzduiește Muzeul Parfumului.", "Festivalul Culorilor are loc aici în timpul verii.", "Apa izvoarelor termale este bogată în sulf și minerale."],
      en: ["Founded on June 14, 1978.", "The name 'Engordany' is older than 'Escaldes'.", "Home to the Perfume Museum.", "The Festival of Colours takes place here in summer.", "The water from its thermal springs is rich in sulfur and minerals."]
    }
  },
  {
    id: "AD-02",
    type: "region",
    parent: "country-andorra",
    coords: [1.5997, 42.5667],
    name: { de: "Canillo (Gemeinde)", hu: "Canillo (község)", ro: "Canillo (parohie)", en: "Canillo (Parish)" },
    description: {
      de: "Die größte Gemeinde Andorras, die das religiöse Zentrum von Meritxell und einen Teil von Grandvalira umfasst.",
      hu: "Andorra legnagyobb községe, amely magában foglalja Meritxell vallási központját és Grandvalira egy részét.",
      ro: "Cea mai mare parohie din Andorra, care include centrul religios Meritxell și o parte din Grandvalira.",
      en: "The largest parish in Andorra, encompassing the religious center of Meritxell and part of Grandvalira."
    },
    descriptionAdvanced: {
      en: "Canillo is the largest parish by area and is considered the 'roof' of Andorra due to its high average altitude. It's a parish of contrasts, balancing its role as the spiritual heart of the nation with its status as a world-class winter sports destination. The Sanctuary of Our Lady of Meritxell, the country's patron saint, is the most important religious site in Andorra. At the same time, the parish encompasses the lively ski resorts of Soldeu and El Tarter, which are integral parts of the Grandvalira ski area. Canillo's landscape is dotted with traditional villages like Prats and Meritxell, and features stunning natural and man-made attractions, from the Romanesque church of Sant Joan de Caselles to the modern Roc del Quer viewpoint.",
      de: "Canillo ist die flächenmäßig größte Gemeinde und gilt aufgrund ihrer hohen durchschnittlichen Höhenlage als das \\\"Dach\\\" Andorras. Es ist eine Gemeinde der Kontraste, die ihre Rolle als spirituelles Herz der Nation mit ihrem Status als Weltklasse-Wintersportziel in Einklang bringt. Das Heiligtum Unserer Lieben Frau von Meritxell, der Schutzpatronin des Landes, ist die wichtigste religiöse Stätte in Andorra. Gleichzeitig umfasst die Gemeinde die lebhaften Skigebiete Soldeu und El Tarter, die integrale Bestandteile des Skigebiets Grandvalira sind. Die Landschaft von Canillo ist mit traditionellen Dörfern wie Prats und Meritxell übersät und bietet atemberaubende natürliche und von Menschen geschaffene Attraktionen, von der romanischen Kirche Sant Joan de Caselles bis zum modernen Aussichtspunkt Roc del Quer.",
      hu: "Canillo területileg a legnagyobb község, és magas átlagos tengerszint feletti magassága miatt Andorra \\\"tetejének\\\" számít. Az ellentétek községe, amely egyensúlyt teremt a nemzet spirituális szívének szerepe és a világszínvonalú téli sportcélpont státusza között. Az ország védőszentjének, a Meritxelli Miasszonyunknak a szentélye Andorra legfontosabb vallási helyszíne. Ugyanakkor a község magában foglalja a nyüzsgő Soldeu és El Tarter síterepeket, amelyek a Grandvalira síterület szerves részei. Canillo táját hagyományos falvak, mint Prats és Meritxell tarkítják, és lenyűgöző természeti és ember alkotta látnivalókat kínál, a román stílusú Sant Joan de Caselles-templomtól a modern Roc del Quer kilátóig.",
      ro: "Canillo este cea mai mare parohie ca suprafață și este considerată \\\"acoperișul\\\" Andorrei datorită altitudinii sale medii ridicate. Este o parohie a contrastelor, echilibrând rolul său de inimă spirituală a națiunii cu statutul său de destinație de sporturi de iarnă de talie mondială. Sanctuarul Maicii Domnului din Meritxell, sfânta ocrotitoare a țării, este cel mai important sit religios din Andorra. În același timp, parohia cuprinde stațiunile de schi pline de viață Soldeu și El Tarter, care sunt părți integrante ale zonei de schi Grandvalira. Peisajul din Canillo este presărat cu sate tradiționale precum Prats și Meritxell și prezintă atracții naturale și create de om uimitoare, de la biserica romanică Sant Joan de Caselles la modernul punct de belvedere Roc del Quer."
    },
    factsAdvanced: {
      de: ["Hat eine Fläche von 121 km², die größte in Andorra.", "Religiöses Zentrum des Landes aufgrund des Heiligtums von Meritxell.", "Beherbergt die Skisektoren Soldeu und El Tarter.", "Der Roc del Quer ist eine wichtige Touristenattraktion.", "Traditionell eine landwirtschaftlich geprägte Gemeinde."],
      hu: ["Területe 121 km², a legnagyobb Andorrában.", "Az ország vallási központja a Meritxell szentély miatt.", "Itt található a Soldeu és El Tarter síterep.", "A Roc del Quer fontos turisztikai látványosság.", "Hagyományosan mezőgazdasági jellegű község."],
      ro: ["Are o suprafață de 121 km², cea mai mare din Andorra.", "Centrul religios al țării datorită Sanctuarului din Meritxell.", "Găzduiește sectoarele de schi Soldeu și El Tarter.", "Roc del Quer este o atracție turistică majoră.", "Tradițional o parohie agricolă."],
      en: ["Has an area of 121 km², the largest in Andorra.", "The country's religious center due to the Sanctuary of Meritxell.", "Home to the Soldeu and El Tarter ski sectors.", "The Roc del Quer viewpoint is a major tourist attraction.", "Traditionally an agricultural parish."]
    }
  }
];

export const andorraAllPoi: POI[] = [
  andorraCountry,
  ...andorraCities,
  ...andorraLandmarks,
  ...andorraNature,
  ...andorraRegions,
  ...poiExtraAndorraCities,
  ...poiExtraAndorraOther
];
