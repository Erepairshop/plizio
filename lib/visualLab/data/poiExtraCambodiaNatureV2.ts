import type { POI } from "./poi";

export const poiExtraCambodiaNatureV2: POI[] = [
  {
    id: "tonle-sap-lake-nature-v2",
    type: "lake",
    parent: "KH-17",
    coords: [104.0500, 12.9667],
    name: { de: "Tonle-Sap-See", hu: "Tonlé Szap-tó", ro: "Lacul Tonle Sap", en: "Tonle Sap Lake" },
    description: {
      de: "Der größte Süßwassersee Südostasiens, dessen Wasserspiegel im Monsun drastisch ansteigt und eine einzigartige Biodiversität beheimatet.",
      hu: "Délkelet-Ázsia legnagyobb édesvizű tava, amelynek vízszintje a monszun idején drasztikusan megemelkedik, és egyedülálló biodiverzitásnak ad otthont.",
      ro: "Cel mai mare lac de apă dulce din Asia de Sud-Est, al cărui nivel crește drastic în timpul musonului și care adăpostește o biodiversitate unică.",
      en: "The largest freshwater lake in Southeast Asia, whose water level rises drastically during the monsoon, hosting unique biodiversity."
    },
    facts: {
      de: ["Teil des Mekong-Flusssystems.", "Schwimmende Dörfer prägen das Bild.", "Unesco-Biosphärenreservat seit 1997.", "Heimat für seltene Wasservögel."],
      hu: ["A Mekong vízrendszerének része.", "Úszó falvak jellemzik a tájat.", "1997 óta UNESCO bioszféra-rezervátum.", "Ritka vízimadarak otthona."],
      ro: ["Face parte din sistemul râului Mekong.", "Satele plutitoare domină peisajul.", "Rezervație a biosferei UNESCO din 1997.", "Adăpost pentru păsări de apă rare."],
      en: ["Part of the Mekong river system.", "Floating villages dominate the landscape.", "UNESCO biosphere reserve since 1997.", "Home to rare waterbirds."]
    }, image: "/poi-images/tonle-sap-lake-nature-v2.webp"},
  {
    id: "phnom-kulen-national-park-nature-v2",
    type: "national-park",
    parent: "KH-17",
    coords: [104.1000, 13.6000],
    name: { de: "Phnom Kulen Nationalpark", hu: "Phnom Kulen Nemzeti Park", ro: "Parcul Național Phnom Kulen", en: "Phnom Kulen National Park" },
    description: {
      de: "Der Phnom-Kulen-Nationalpark liegt auf einem heiligen Berg bei Siem Reap. Er verbindet Wald, Wasserfälle und frühe Khmer-Geschichte.",
      hu: "A Phnom Kulen Nemzeti Park szent hegyvidéke vízeséseiről és vallási helyszíneiről ismert. A terület fontos zarándokhely, és a khmer történelem korai emlékeihez kötődik.",
      ro: "Un parc național de pe muntele sacru Phnom Kulen, la nord de Siem Reap. Zona include cascade și situri vechi khmere, inclusiv Râul celor 1000 de lingamuri.",
      en: "Phnom Kulen National Park covers a sacred mountain range north of Siem Reap. It is known for waterfalls, forest, and early Khmer history."
    },
    facts: {
      de: ["Als heiliger Berg verehrt", "Quelle mehrerer Flüsse für Angkor", "Bekannt für Wasserfälle", "Mit der Gründung des Khmer-Reiches verbunden"],
      hu: ["Csúcsának magassága 487 méter", "A '1000 linga folyója' itt található", "Fontos zarándokhely", "Védett területként működik"],
      ro: ["Munte sacru pentru khmeri", "Aproape 487 m altitudine", "Include cascade cunoscute", "Legat de începuturile imperiului Khmer"],
      en: ["Located in Siem Reap Province.", "Home to the River of a Thousand Lingas.", "Known for the Phnom Kulen waterfalls.", "Linked to early Khmer kings."]
    }, image: "/poi-images/phnom-kulen-national-park-nature-v2.webp"},
  {
    id: "cardamom-mountains-nature-v2",
    type: "mountain",
    parent: "KH-09",
    coords: [103.3333, 12.0000],
    name: { de: "Kardamom-Gebirge", hu: "Kardamom-hegység", ro: "Munții Cardamom", en: "Cardamom Mountains" },
    description: {
      de: "Eine der letzten unberührten Dschungelregionen Südostasiens, die eine immense Vielfalt an gefährdeten Pflanzen und Tieren schützt.",
      hu: "Délkelet-Ázsia egyik utolsó érintetlen dzsungelvidéke, amely veszélyeztetett növények és állatok hatalmas változatosságát védi.",
      ro: "Una dintre ultimele regiuni de junglă neatinsă din Asia de Sud-Est, care protejează o imensă varietate de plante și animale pe cale de dispariție.",
      en: "One of the last untouched jungle regions in Southeast Asia, protecting an immense variety of endangered plants and animals."
    },
    facts: {
      de: ["Erstreckt sich bis nach Thailand.", "Heimat von Nebelpardern und Malaienbären.", "Sehr dünn besiedelte Region.", "Gilt als ökologischer Hotspot."],
      hu: ["Egészen Thaiföldig húzódik.", "Ködöspárducok és maláj medvék otthona.", "Nagyon gyéren lakott régió.", "Ökológiai hotspotnak számít."],
      ro: ["Se întinde până în Thailanda.", "Adăpostește leoparzi pătați și urși malaezi.", "Regiune foarte slab populată.", "Considerat un punct fierbinte ecologic."],
      en: ["Extends into Thailand.", "Home to clouded leopards and sun bears.", "Very sparsely populated region.", "Considered an ecological hotspot."]
    }, image: "/poi-images/cardamom-mountains-nature-v2.webp"},
  {
    id: "mekong-river-cambodia-nature-v2",
    type: "river",
    parent: "KH-10",
    coords: [106.0167, 12.4833],
    name: { de: "Mekong in Kambodscha", hu: "A Mekong folyó Kambodzsában", ro: "Râul Mekong în Cambodgia", en: "Mekong River in Cambodia" },
    description: {
      de: "Die Lebensader des Landes durchquert Kambodscha auf einer Länge von rund 500 Kilometern und bietet Lebensraum für die seltenen Irrawaddy-Delfine.",
      hu: "Az ország ütőere mintegy 500 kilométer hosszan szeli át Kambodzsát, és élőhelyet biztosít a ritka kúposfejű delfineknek.",
      ro: "Sângele vital al țării traversează Cambodgia pe o lungime de aproximativ 500 de kilometri și oferă un habitat pentru rarii delfini Irrawaddy.",
      en: "The lifeblood of the country traverses Cambodia for about 500 kilometers, providing a habitat for the rare Irrawaddy dolphins."
    },
    facts: {
      de: ["Fließt von Laos in Richtung Vietnam.", "Zentrale Quelle für Fischerei und Landwirtschaft.", "Verbindet sich mit dem Tonle Sap.", "Wichtigster Handelsweg seit Jahrhunderten."],
      hu: ["Laoszból folyik Vietnam felé.", "Központi forrás a halászat és mezőgazdaság számára.", "Összekapcsolódik a Tonlé Szap-tóval.", "Évszázadok óta a legfontosabb kereskedelmi útvonal."],
      ro: ["Curge din Laos spre Vietnam.", "Sursă centrală pentru pescuit și agricultură.", "Se conectează cu lacul Tonle Sap.", "Cea mai importantă rută comercială de secole."],
      en: ["Flows from Laos towards Vietnam.", "Central source for fishing and agriculture.", "Connects with the Tonle Sap lake.", "Most important trade route for centuries."]
    }, image: "/poi-images/mekong-river-cambodia-nature-v2.webp"},
  {
    id: "virachey-national-park-nature-v2",
    type: "national-park",
    parent: "KH-16",
    coords: [106.8833, 14.1667],
    name: { de: "Virachey Nationalpark", hu: "Virachey Nemzeti Park", ro: "Parcul Național Virachey", en: "Virachey National Park" },
    description: {
      de: "Ein tief im Dschungel gelegener Nationalpark im Nordosten Kambodschas, der für seine dichten Wälder und abgeschiedenen indigene Dörfer bekannt ist.",
      hu: "Egy dzsungel mélyén fekvő nemzeti park Kambodzsa északkeleti részén, amely sűrű erdeiről és elzárt őslakos falvairól ismert.",
      ro: "Un parc național situat adânc în junglă în nord-estul Cambodgiei, cunoscut pentru pădurile sale dese și satele indigene izolate.",
      en: "A national park located deep in the jungle in northeastern Cambodia, known for its dense forests and isolated indigenous villages."
    },
    facts: {
      de: ["Gegründet im Jahr 1993.", "Umfasst eine Fläche von 3.325 Quadratkilometern.", "Grenzt an Laos und Vietnam.", "Teil des ASEAN-Erbe-Park-Netzwerks."],
      hu: ["1993-ban alapították.", "Területe 3325 négyzetkilométer.", "Laosszal és Vietnámmal határos.", "Az ASEAN Örökség Park hálózat része."],
      ro: ["Fondat în anul 1993.", "Acoperă o suprafață de 3.325 kilometri pătrați.", "Se învecinează cu Laos și Vietnam.", "Face parte din rețeaua ASEAN Heritage Parks."],
      en: ["Founded in the year 1993.", "Covers an area of 3,325 square kilometers.", "Borders Laos and Vietnam.", "Part of the ASEAN Heritage Park network."]
    }, image: "/poi-images/virachey-national-park-nature-v2.webp"},
  {
    id: "ream-national-park-nature-v2",
    type: "national-park",
    parent: "KH-18",
    coords: [103.6500, 10.5167],
    name: { de: "Ream Nationalpark", hu: "Ream Nemzeti Park", ro: "Parcul Național Ream", en: "Ream National Park" },
    description: {
      de: "Ein malerischer Küstennationalpark, der Mangrovenwälder, Sandstrände, Korallenriffe und geschützte Meereslebensräume umfasst.",
      hu: "Festői partvidéki nemzeti park, amely mangroveerdőket, homokos strandokat, korallzátonyokat és védett tengeri élőhelyeket foglal magába.",
      ro: "Un parc național de coastă pitoresc care include păduri de mangrove, plaje cu nisip, recife de corali și habitate marine protejate.",
      en: "A picturesque coastal national park comprising mangrove forests, sandy beaches, coral reefs, and protected marine habitats."
    },
    facts: {
      de: ["Liegt in der Provinz Sihanoukville.", "Fläche von etwa 210 Quadratkilometern.", "Beheimatet Delfine und Schildkröten.", "Umfasst auch einige kleine Inseln."],
      hu: ["Sihanoukville tartományban található.", "Területe körülbelül 210 négyzetkilométer.", "Delfineknek és teknősöknek is otthont ad.", "Néhány kisebb szigetet is magába foglal."],
      ro: ["Situat în provincia Sihanoukville.", "Suprafață de aproximativ 210 kilometri pătrați.", "Adăpostește delfini și țestoase.", "Include și câteva insule mici."],
      en: ["Located in Sihanoukville province.", "Area of about 210 square kilometers.", "Home to dolphins and turtles.", "Also includes several small islands."]
    }, image: "/poi-images/ream-national-park-nature-v2.webp"},
  {
    id: "yeak-laom-lake-nature-v2",
    type: "lake",
    parent: "KH-16",
    coords: [107.0161, 13.7317],
    name: { de: "Yeak-Laom-See", hu: "Yeak Laom-tó", ro: "Lacul Yeak Laom", en: "Yeak Laom Lake" },
    description: {
      de: "Ein nahezu perfekt runder Kratersee vulkanischen Ursprungs, umgeben von dichtem Wald, der von den lokalen Tampuan-Stämmen als heilig verehrt wird.",
      hu: "Egy szinte tökéletesen kerek, vulkáni eredetű krátertó, amelyet sűrű erdő vesz körül, és a helyi tampuan törzsek szentként tisztelnek.",
      ro: "Un lac de crater aproape perfect rotund, de origine vulcanică, înconjurat de pădure deasă, considerat sacru de triburile locale Tampuan.",
      en: "An almost perfectly round crater lake of volcanic origin, surrounded by dense forest, revered as sacred by local Tampuan tribes."
    },
    facts: {
      de: ["Etwa 4.000 Jahre alt.", "Maximal 48 Meter tief.", "Durchmesser von fast 800 Metern.", "Das Wasser ist extrem klar und sauber."],
      hu: ["Körülbelül 4000 éves.", "Legnagyobb mélysége 48 méter.", "Átmérője majdnem 800 méter.", "Vize rendkívül tiszta és átlátszó."],
      ro: ["Aproximativ 4.000 de ani vechime.", "Adâncime maximă de 48 de metri.", "Diametru de aproape 800 de metri.", "Apa este extrem de clară și curată."],
      en: ["About 4,000 years old.", "Maximum depth of 48 meters.", "Diameter of almost 800 meters.", "The water is extremely clear and clean."]
    }, image: "/poi-images/yeak-laom-lake-nature-v2.webp"},
  {
    id: "kirirom-national-park-nature-v2",
    type: "national-park",
    parent: "KH-05",
    coords: [104.0500, 11.3167],
    name: { de: "Kirirom Nationalpark", hu: "Kirirom Nemzeti Park", ro: "Parcul Național Kirirom", en: "Kirirom National Park" },
    description: {
      de: "Der Kirirom-Nationalpark liegt auf einem kühlen Hochplateau im Süden Kambodschas. Kiefernwälder und Wasserläufe prägen das Gelände.",
      hu: "A Kirirom Nemzeti Park egy hűvösebb, magasabban fekvő terület, ahol fenyvesek és vízfolyások uralják a tájat. A kambodzsai alföldtől nagyon eltérő, nyugodtabb hegyvidéki környezetet mutat.",
      ro: "Un parc național de platou, cu climat mai răcoros decât în restul Cambodgiei. Este cunoscut pentru pădurile de pin și traseele liniștite.",
      en: "Kirirom National Park is a cool highland park in southwestern Cambodia. Pine forest, streams, and hiking trails make it different from the lowland plains."
    },
    facts: {
      de: ["Kambodschas erster Nationalpark", "Offiziell 1993 ausgewiesen", "Liegt in Kampong Speu und Koh Kong", "Rund 670 Meter über dem Meer"],
      hu: ["Kambodzsa első nemzeti parkja", "1993-ban jelölték ki", "Fenyőerdőiről ismert", "Kampong Speu térségében fekszik"],
      ro: ["Creat ca parc național în 1993", "În provincia Kampong Speu", "Cunoscut pentru păduri de pin", "Are relief de platou montan"],
      en: ["Located in Kampong Speu and Koh Kong.", "Known for pine forest.", "First national park in Cambodia.", "Sits on a high plateau."]
    }, image: "/poi-images/kirirom-national-park-nature-v2.webp"},
  {
    id: "kep-national-park-nature-v2",
    type: "national-park",
    parent: "KH-23",
    coords: [104.3000, 10.4833],
    name: { de: "Kep Nationalpark", hu: "Kep Nemzeti Park", ro: "Parcul Național Kep", en: "Kep National Park" },
    description: {
      de: "Ein bewaldeter Hügelpark direkt an der Küste, der fantastische Panoramablicke auf den Golf von Thailand und das benachbarte Vietnam bietet.",
      hu: "Közvetlenül a tengerparton fekvő erdős dombvidéki park, amely fantasztikus panorámát nyújt a Thai-öbölre és a szomszédos Vietnámra.",
      ro: "Un parc deluros împădurit chiar pe coastă, care oferă vederi panoramice fantastice asupra Golfului Thailandei și Vietnamului vecin.",
      en: "A forested hill park right on the coast offering fantastic panoramic views of the Gulf of Thailand and neighboring Vietnam."
    },
    facts: {
      de: ["8 Kilometer langer Rundwanderweg.", "Schützt tropische Feuchtwälder.", "Heimat von Makaken-Affen.", "Sehr beliebt bei Ökotouristen."],
      hu: ["8 kilométer hosszú túraútvonallal rendelkezik.", "Trópusi esőerdőket véd.", "Makákó majmok otthona.", "Nagyon népszerű az ökoturisták körében."],
      ro: ["Traseu de drumeție circular de 8 kilometri.", "Protejează pădurile tropicale umede.", "Adăpost pentru maimuțele macac.", "Foarte popular printre ecoturiști."],
      en: ["8-kilometer long circular hiking trail.", "Protects tropical wet forests.", "Home to macaque monkeys.", "Very popular with ecotourists."]
    }, image: "/poi-images/kep-national-park-nature-v2.webp"},
  {
    id: "bokor-national-park-nature-v2",
    type: "national-park",
    parent: "KH-07",
    coords: [104.0333, 10.6500],
    name: { de: "Bokor Nationalpark", hu: "Bokor Nemzeti Park", ro: "Parcul Național Bokor", en: "Bokor National Park" },
    description: {
      de: "Bekannt für sein kühles Hochlandklima, verlassene französische Kolonialgebäude und den schützenswerten Lebensraum asiatischer Elefanten.",
      hu: "Hűvös hegyvidéki klímájáról, elhagyatott francia gyarmati épületeiről és az ázsiai elefántok védett élőhelyéről ismert.",
      ro: "Cunoscut pentru clima sa răcoroasă din zonele înalte, clădirile coloniale franceze abandonate și habitatul protejat al elefanților asiatici.",
      en: "Known for its cool highland climate, abandoned French colonial buildings, and the protected habitat of Asian elephants."
    },
    facts: {
      de: ["Auch bekannt als Preah Monivong Nationalpark.", "Der höchste Punkt liegt auf 1.081 Metern.", "Beliebtes Rückzugsgebiet während der Kolonialzeit.", "Umfasst dichte immergrüne Wälder."],
      hu: ["Preah Monivong Nemzeti Parkként is ismert.", "Legmagasabb pontja 1081 méteren található.", "A gyarmati időszakban népszerű pihenőhely volt.", "Sűrű örökzöld erdőket foglal magába."],
      ro: ["Cunoscut și sub numele de Parcul Național Preah Monivong.", "Cel mai înalt punct este la 1.081 metri.", "Loc de refugiu popular în perioada colonială.", "Include păduri dense veșnic verzi."],
      en: ["Also known as Preah Monivong National Park.", "The highest point is at 1,081 meters.", "Popular retreat during the colonial era.", "Includes dense evergreen forests."]
    }, image: "/poi-images/bokor-national-park-nature-v2.webp"},
  {
    id: "phnom-aural-nature-v2",
    type: "mountain",
    parent: "KH-05",
    coords: [104.1667, 12.0333],
    name: { de: "Phnom Aural", hu: "Phnom Aural", ro: "Phnom Aural", en: "Phnom Aural" },
    description: {
      de: "Der höchste Berg Kambodschas erhebt sich majestätisch im östlichen Teil des Kardamom-Gebirges und ist von dichten Regenwäldern umgeben.",
      hu: "Kambodzsa legmagasabb hegye, amely fenségesen magasodik a Kardamom-hegység keleti részén, és sűrű esőerdők veszik körül.",
      ro: "Cel mai înalt munte din Cambodgia se înalță maiestuos în partea de est a Munților Cardamom și este înconjurat de păduri tropicale dense.",
      en: "The highest mountain in Cambodia rises majestically in the eastern part of the Cardamom Mountains and is surrounded by dense rainforests."
    },
    facts: {
      de: ["Erreicht eine Höhe von 1.813 Metern.", "Gehört zum Aural-Naturschutzgebiet.", "Ein anspruchsvolles Ziel für Bergsteiger.", "Lebensraum für stark bedrohte Vogelarten."],
      hu: ["Magassága eléri az 1813 métert.", "Az Aural Természetvédelmi Terület része.", "Kihívást jelentő célpont a hegymászók számára.", "Súlyosan veszélyeztetett madárfajok élőhelye."],
      ro: ["Atinge o înălțime de 1.813 metri.", "Face parte din Rezervația Naturală Aural.", "O destinație provocatoare pentru alpiniști.", "Habitat pentru specii de păsări pe cale de dispariție."],
      en: ["Reaches a height of 1,813 meters.", "Part of the Aural Wildlife Sanctuary.", "A challenging destination for mountaineers.", "Habitat for critically endangered bird species."]
    }, image: "/poi-images/phnom-aural-nature-v2.webp"},
  {
    id: "tonle-san-river-nature-v2",
    type: "river",
    parent: "KH-19",
    coords: [106.1833, 13.5667],
    name: { de: "Tonle San", hu: "Tonlé San folyó", ro: "Râul Tonle San", en: "Tonle San River" },
    description: {
      de: "Der Tonle-San-Fluss fließt durch Nordost-Kambodscha und ist ein wichtiger Nebenfluss des Mekong. Er prägt Fischfang und Wasserkraft in der Region.",
      hu: "A Tonlé San a Mekong egyik fontos mellékfolyója, amely Északkelet-Kambodzsa vízrendszerének meghatározó eleme. A környék halászatát és vízgazdálkodását is erősen befolyásolja.",
      ro: "Unul dintre cei mai importanți afluenți ai râului Mekong, care izvorăște în zonele înalte centrale din Vietnam și curge în nord-estul Cambodgiei.",
      en: "The Tonle San River flows through northeastern Cambodia and continues into Vietnam. It is one of the main tributaries in the Sesan river system."
    },
    facts: {
      de: ["Nebenfluss des Mekong", "Fließt auch durch Vietnam", "Teilweise Grenzfluss zu Vietnam", "Wichtig für Fischerei und Wasserkraft"],
      hu: ["A Mekong mellékfolyója", "Északkelet-Kambodzsán folyik át", "A Sesan néven is ismert", "Fontos szerepe van a halászatban"],
      ro: ["Se varsă în Mekong la Stung Treng.", "Lungime de peste 230 de kilometri.", "Esențial pentru pescuitul indigen.", "Face parte din rețeaua \"Trei Râuri\" (Sesan, Srepok, Sekong)."],
      en: ["Also called the Sesan River.", "Part of the Mekong basin.", "Crosses the Cambodia-Vietnam region.", "Important for fishing and hydropower."]
    }, image: "/poi-images/tonle-san-river-nature-v2.webp"},
  {
    id: "prey-lang-forest-nature-v2",
    type: "forest",
    parent: "KH-06",
    coords: [105.1000, 13.5000],
    name: { de: "Prey Lang Wald", hu: "Prey Lang erdő", ro: "Pădurea Prey Lang", en: "Prey Lang Forest" },
    description: {
      de: "Der Prey-Lang-Wald ist eines der größten zusammenhängenden Waldgebiete Kambodschas. Er liegt in mehreren Provinzen und ist für seine Artenvielfalt bekannt.",
      hu: "A Prey Lang erdő Kambodzsa egyik legnagyobb összefüggő síkvidéki erdősége. Az őslakos közösségek számára fontos terület, de az illegális fakitermelés miatt erős nyomás alatt áll.",
      ro: "Cea mai mare pădure de câmpie rămasă în Cambodgia, întinsă pe mai multe provincii. Comunitățile locale o apără de tăierile ilegale.",
      en: "Prey Lang Forest is one of Cambodia's largest remaining lowland forests. It is a major biodiversity area and an important homeland for local communities."
    },
    facts: {
      de: ["Name bedeutet auf Kuy: unser Wald", "Verbreitet über vier Provinzen", "Sehr artenreich", "Stark durch Abholzung bedroht"],
      hu: ["A nagy síkvidéki esőerdők közé tartozik", "Több tartományra kiterjed", "Őslakos közösségek védik", "Az illegális fakitermelés veszélyezteti"],
      ro: ["Se întinde pe patru provincii", "Pădure tropicală de câmpie", "Habitat pentru specii rare", "Amenințată de defrișări ilegale"],
      en: ["Spans several provinces.", "Known for dense lowland forest.", "Home to many endangered species.", "Threatened by illegal logging."]
    }, image: "/poi-images/prey-lang-forest-nature-v2.webp"},
  {
    id: "tonle-srepok-nature-v2",
    type: "river",
    parent: "KH-19",
    coords: [106.0167, 13.5500],
    name: { de: "Tonle Srepok", hu: "Tonlé Srepok", ro: "Râul Tonle Srepok", en: "Tonle Srepok" },
    description: {
      de: "Ein mächtiger Fluss, der durch die abgelegene Provinz Mondulkiri fließt und dramatische Wasserfälle sowie tiefe Schluchten bildet.",
      hu: "Hatalmas folyó, amely az elszigetelt Mondulkiri tartományon folyik keresztül, és drámai vízeséseket, valamint mély szurdokokat hoz létre.",
      ro: "Un râu puternic care curge prin provincia izolată Mondulkiri, formând cascade dramatice și chei adânci.",
      en: "A mighty river flowing through the remote Mondulkiri province, forming dramatic waterfalls and deep gorges."
    },
    facts: {
      de: ["Länge von etwa 400 Kilometern.", "Entspringt in Vietnam.", "Fließt durch das Lomphat-Naturschutzgebiet.", "Reich an seltenen großen Fischarten."],
      hu: ["Hossza körülbelül 400 kilométer.", "Vietnámban ered.", "A Lomphat Természetvédelmi Területen folyik keresztül.", "Ritka, nagy testű halfajokban gazdag."],
      ro: ["Lungime de aproximativ 400 de kilometri.", "Izvorăște în Vietnam.", "Curge prin Rezervația Naturală Lomphat.", "Bogat în specii rare de pești mari."],
      en: ["Length of about 400 kilometers.", "Originates in Vietnam.", "Flows through the Lomphat Wildlife Sanctuary.", "Rich in rare large fish species."]
    }, image: "/poi-images/tonle-srepok-nature-v2.webp"},
  {
    id: "keo-seima-wildlife-sanctuary-nature-v2",
    type: "forest",
    parent: "KH-11",
    coords: [106.8333, 12.1667],
    name: { de: "Keo-Seima-Schutzgebiet", hu: "Keo Seima Vadvédelmi Terület", ro: "Rezervația de animale sălbatice Keo Seima", en: "Keo Seima Wildlife Sanctuary" },
    description: {
      de: "Ein weitläufiges Schutzgebiet im Osten des Landes, das weltweit für seinen außergewöhnlich hohen Bestand an wilden asiatischen Elefanten und Primaten bekannt ist.",
      hu: "Kiterjedt védett terület az ország keleti részén, amely világszerte ismert a vadon élő ázsiai elefántok és főemlősök kivételesen magas állományáról.",
      ro: "O vastă rezervație naturală în estul țării, cunoscută la nivel mondial pentru populația sa excepțional de mare de elefanți asiatici și primate.",
      en: "An extensive sanctuary in the east of the country, known globally for its exceptionally high population of wild Asian elephants and primates."
    },
    facts: {
      de: ["Umfasst über 2.900 Quadratkilometer.", "Eine der höchsten Primatendichten der Welt.", "Heimat des gefährdeten Gelbwangen-Schopfgibbons.", "Wird durch internationale NGOs unterstützt."],
      hu: ["Több mint 2900 négyzetkilométer kiterjedésű.", "A főemlősök egyik legnagyobb sűrűsége itt található.", "A veszélyeztetett aranyarcú gibbon otthona.", "Nemzetközi civil szervezetek támogatják."],
      ro: ["Acoperă peste 2.900 de kilometri pătrați.", "Una dintre cele mai mari densități de primate din lume.", "Casa gibonului cu obraji galbeni, aflat pe cale de dispariție.", "Este sprijinită de ONG-uri internaționale."],
      en: ["Covers over 2,900 square kilometers.", "One of the highest primate densities in the world.", "Home to the endangered yellow-cheeked crested gibbon.", "Supported by international NGOs."]
    }, image: "/poi-images/keo-seima-wildlife-sanctuary-nature-v2.webp"},
  {
    id: "tatai-river-nature-v2",
    type: "river",
    parent: "KH-09",
    coords: [103.1167, 11.5500],
    name: { de: "Tatai-Fluss", hu: "Tatai folyó", ro: "Râul Tatai", en: "Tatai River" },
    description: {
      de: "Ein malerischer, ruhiger Fluss im Kardamom-Gebirge, der durch dichten Dschungel und Mangrovenwälder bis zum Golf von Thailand fließt.",
      hu: "Festői, csendes folyó a Kardamom-hegységben, amely sűrű dzsungelen és mangroveerdőkön keresztül folyik a Thai-öbölig.",
      ro: "Un râu pitoresc și liniștit în Munții Cardamom, care curge prin junglă densă și păduri de mangrove până în Golful Thailandei.",
      en: "A picturesque, tranquil river in the Cardamom Mountains, flowing through dense jungle and mangrove forests to the Gulf of Thailand."
    },
    facts: {
      de: ["Berühmt für die Tatai-Wasserfälle.", "Klares, oft smaragdgrünes Wasser.", "Beliebt für Kajakfahrten im Ökotourismus.", "Die Wasserfälle trocknen fast nie aus."],
      hu: ["Híres a Tatai-vízesésekről.", "Tiszta, gyakran smaragdzöld vize van.", "Népszerű a kajakos ökoturisták körében.", "A vízesések szinte soha nem száradnak ki."],
      ro: ["Renumit pentru Cascadele Tatai.", "Apă limpede, adesea de culoare verde smarald.", "Popular pentru caiac în ecoturism.", "Cascadele nu seacă aproape niciodată."],
      en: ["Famous for the Tatai Waterfalls.", "Clear, often emerald green water.", "Popular for kayaking in ecotourism.", "The waterfalls almost never dry up."]
    }, image: "/poi-images/tatai-river-nature-v2.webp"},
  {
    id: "phnom-samkos-nature-v2",
    type: "mountain",
    parent: "KH-15",
    coords: [103.0333, 12.1500],
    name: { de: "Phnom Samkos", hu: "Phnom Samkos", ro: "Phnom Samkos", en: "Phnom Samkos" },
    description: {
      de: "Der zweithöchste Berg des Landes liegt tief im westlichen Teil des Kardamom-Gebirges und bildet ein extrem wichtiges ökologisches Rückzugsgebiet.",
      hu: "Az ország második legmagasabb hegye a Kardamom-hegység nyugati részén fekszik, és rendkívül fontos ökológiai menedéket alkot.",
      ro: "Al doilea cel mai înalt munte din țară se află adânc în partea de vest a Munților Cardamom și formează un refugiu ecologic extrem de important.",
      en: "The second highest mountain in the country is located deep in the western part of the Cardamom Mountains, forming an extremely important ecological retreat."
    },
    facts: {
      de: ["Erreicht 1.717 Meter Höhe.", "Zentrum des Phnom-Samkos-Schutzgebiets.", "Entdeckt neue Amphibienarten regelmäßig.", "Sehr schwer zugänglich."],
      hu: ["Magassága eléri az 1717 métert.", "A Phnom Samkos Természetvédelmi Terület központja.", "Rendszeresen fedeznek fel itt új kétéltűfajokat.", "Nagyon nehezen megközelíthető."],
      ro: ["Atinge 1.717 metri înălțime.", "Centrul Rezervației Naturale Phnom Samkos.", "Aici se descoperă în mod regulat noi specii de amfibieni.", "Foarte greu accesibil."],
      en: ["Reaches 1,717 meters in height.", "Center of the Phnom Samkos Wildlife Sanctuary.", "New amphibian species are regularly discovered here.", "Very difficult to access."]
    }, image: "/poi-images/phnom-samkos-nature-v2.webp"},
  {
    id: "areng-valley-nature-v2",
    type: "river",
    parent: "KH-09",
    coords: [103.4500, 11.8500],
    name: { de: "Areng-Tal", hu: "Areng-völgy", ro: "Valea Areng", en: "Areng Valley" },
    description: {
      de: "Ein abgeschiedenes und naturbelassenes Flusstal im Herzen der Kardamom-Berge, das für seine kulturelle und biologische Einzigartigkeit gekämpft hat.",
      hu: "Félreeső és érintetlen folyóvölgy a Kardamom-hegység szívében, amely kulturális és biológiai egyedülállóságáért küzdött.",
      ro: "O vale a unui râu retrasă și naturală în inima Munților Cardamom, care a luptat pentru unicitatea sa culturală și biologică.",
      en: "A remote and natural river valley in the heart of the Cardamom Mountains that has fought for its cultural and biological uniqueness."
    },
    facts: {
      de: ["Heimat der indigenen Chong-Menschen.", "Einer der letzten Zufluchtsorte für Siamkrokodile.", "War von einem umstrittenen Staudammprojekt bedroht.", "Stark auf gemeindebasierten Ökotourismus fokussiert."],
      hu: ["A bennszülött chong nép otthona.", "A sziámi krokodilok egyik utolsó menedéke.", "Egy vitatott gátépítési projekt fenyegette.", "Erősen a közösségi alapú ökoturizmusra épít."],
      ro: ["Casa poporului indigen Chong.", "Unul dintre ultimele refugii pentru crocodilii siamezi.", "A fost amenințată de un controversat proiect de baraj.", "Puternic axată pe ecoturismul comunitar."],
      en: ["Home to the indigenous Chong people.", "One of the last refuges for Siamese crocodiles.", "Was threatened by a controversial dam project.", "Strongly focused on community-based ecotourism."]
    }, image: "/poi-images/areng-valley-nature-v2.webp"},
  {
    id: "lumphat-wildlife-sanctuary-nature-v2",
    type: "forest",
    parent: "KH-16",
    coords: [106.6667, 13.3333],
    name: { de: "Lumphat-Schutzgebiet", hu: "Lumphat Vadvédelmi Terület", ro: "Rezervația de animale sălbatice Lumphat", en: "Lumphat Wildlife Sanctuary" },
    description: {
      de: "Eine ausgedehnte Landschaft aus offenen Trockenwäldern und Feuchtgebieten, die einen idealen Lebensraum für große asiatische Säugetiere und Wasservögel bietet.",
      hu: "Nyitott száraz erdőkből és vizes élőhelyekből álló kiterjedt táj, amely ideális élőhelyet biztosít a nagy testű ázsiai emlősök és vízimadarak számára.",
      ro: "Un peisaj întins format din păduri uscate deschise și zone umede, care oferă un habitat ideal pentru marile mamifere asiatice și păsările de apă.",
      en: "An extensive landscape of open dry forests and wetlands providing an ideal habitat for large Asian mammals and waterbirds."
    },
    facts: {
      de: ["Gegründet im Jahr 1993.", "Größe von etwa 2.225 Quadratkilometern.", "Bekannt für Wildrinder wie den Banteng.", "Starker Rückgang des Lebensraums durch Plantagen."],
      hu: ["1993-ban alapították.", "Területe körülbelül 2225 négyzetkilométer.", "Vadtulkokról, mint például a banteng, híres.", "Az ültetvények miatt az élőhely jelentősen csökkent."],
      ro: ["Fondat în 1993.", "Suprafață de aproximativ 2.225 kilometri pătrați.", "Cunoscut pentru bovinele sălbatice precum bantengul.", "Declin puternic al habitatului din cauza plantațiilor."],
      en: ["Founded in 1993.", "Size of about 2,225 square kilometers.", "Known for wild cattle such as the banteng.", "Strong decline in habitat due to plantations."]
    }, image: "/poi-images/lumphat-wildlife-sanctuary-nature-v2.webp"},
  {
    id: "central-cardamom-forest-nature-v2",
    type: "forest",
    parent: "KH-09",
    coords: [103.5833, 12.1167],
    name: { de: "Zentrales Kardamom-Schutzgebiet", hu: "Középső-Kardamom Természetvédelmi Terület", ro: "Zona protejată Cardamomul Central", en: "Central Cardamom Protected Forest" },
    description: {
      de: "Ein gigantischer Waldkorridor, der verschiedene Naturschutzgebiete verbindet und eine der wichtigsten Kohlenstoffsenken sowie Wildtierpassagen Südostasiens darstellt.",
      hu: "Gigantikus erdőfolyosó, amely különböző természetvédelmi területeket köt össze, és Délkelet-Ázsia egyik legfontosabb szénelnyelője és vadállat-átjárója.",
      ro: "Un coridor forestier gigantic care leagă diverse rezervații naturale și reprezintă una dintre cele mai importante zone de stocare a carbonului și pasaje pentru fauna sălbatică din Asia de Sud-Est.",
      en: "A gigantic forest corridor connecting various nature reserves, representing one of the most important carbon sinks and wildlife passages in Southeast Asia."
    },
    facts: {
      de: ["Erstreckt sich über 4.000 Quadratkilometer.", "Verbindet Phnom Samkos und Phnom Aural.", "Eines der intaktesten Ökosysteme Asiens.", "Heimat von Elefanten, Bären und Krokodilen."],
      hu: ["Több mint 4000 négyzetkilométerre terjed ki.", "Összeköti a Phnom Samkost és a Phnom Auralt.", "Ázsia egyik leginkább érintetlen ökoszisztémája.", "Elefántok, medvék és krokodilok otthona."],
      ro: ["Se întinde pe peste 4.000 de kilometri pătrați.", "Conectează Phnom Samkos și Phnom Aural.", "Unul dintre cele mai intacte ecosisteme din Asia.", "Casa elefanților, urșilor și crocodililor."],
      en: ["Covers over 4,000 square kilometers.", "Connects Phnom Samkos and Phnom Aural.", "One of the most intact ecosystems in Asia.", "Home to elephants, bears, and crocodiles."]
    }
  }
];
