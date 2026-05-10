import type { POI } from "./poi";

export const poiExtraTaiwanLifeV2: POI[] = [
  {
    id: "taipei-zoo-life-v2",
    type: "kid-friendly",
    parent: "TW-TPE",
    coords: [121.5833, 24.9983],
    name: { de: "Zoologischer Garten Taipeh", hu: "Tajpeji Állatkert", ro: "Grădina Zoologică din Taipei", en: "Taipei Zoo" },
    description: { de: "Der größte Zoo in Asien, bekannt für seine Großen Pandas.", hu: "Ázsia egyik legnagyobb állatkertje, amely híres az óriáspandáiról.", ro: "Una dintre cele mai mari grădini zoologice din Asia, renumită pentru urșii panda uriași.", en: "One of the largest zoos in Asia, well-known for its giant pandas." },
    facts: {
      de: ["Gegründet im Jahr 1914.", "Beherbergt über 400 Tierarten."],
      hu: ["1914-ben alapították.", "Több mint 400 állatfajnak ad otthont."],
      ro: ["Fondată în anul 1914.", "Găzduiește peste 400 de specii de animale."],
      en: ["Founded in 1914.", "Home to over 400 animal species."]
    }
  },
  {
    id: "qingjing-farm-life-v2",
    type: "agriculture",
    parent: "TW-NAN",
    coords: [121.1561, 24.0583],
    name: { de: "Qingjing-Farm", hu: "Csingcsing Farm", ro: "Ferma Qingjing", en: "Qingjing Farm" },
    description: { de: "Eine malerische Farm in den Bergen, berühmt für ihre Schafherden und grünen Weiden.", hu: "Festői hegyi farm, amely híres birkanyájairól és zöldellő legelőiről.", ro: "O fermă montană pitorească, faimoasă pentru turmele de oi și pășunile verzi.", en: "A scenic mountain farm famous for its sheep herds and lush green pastures." },
    facts: {
      de: ["Liegt auf über 1.700 Metern Höhe.", "Wird oft als \"kleine Schweiz\" Taiwans bezeichnet."],
      hu: ["Több mint 1700 méteres magasságban fekszik.", "Gyakran Tajvan \"kis Svájcának\" is nevezik."],
      ro: ["Situată la o altitudine de peste 1.700 de metri.", "Adesea numită \"Mica Elveție\" a Taiwanului."],
      en: ["Located at an altitude of over 1,700 meters.", "Often referred to as the \"Little Switzerland\" of Taiwan."]
    }, image: "/poi-images/qingjing-farm-life-v2.webp"},
  {
    id: "guandu-nature-park-life-v2",
    type: "wildlife-area",
    parent: "TW-TPE",
    coords: [121.4705, 25.1186],
    name: { de: "Guandu-Naturpark", hu: "Kuantu Természetvédelmi Park", ro: "Parcul Natural Guandu", en: "Guandu Nature Park" },
    description: { de: "Ein wichtiges Feuchtgebiet in Taipeh, das als Rastplatz für viele Zugvögel dient.", hu: "Fontos vizes élőhely Tajpejben, amely számos költöző madár pihenőhelyéül szolgál.", ro: "O zonă umedă importantă din Taipei, care servește drept loc de odihnă pentru multe păsări migratoare.", en: "An important wetland in Taipei that serves as a resting place for many migratory birds." },
    facts: {
      de: ["Umfasst eine Fläche von 57 Hektar.", "Beliebter Ort zur Vogelbeobachtung im Herbst und Winter."],
      hu: ["Területe 57 hektár.", "Népszerű madármegfigyelő hely ősszel és télen."],
      ro: ["Se întinde pe o suprafață de 57 de hectare.", "Loc popular pentru observarea păsărilor toamna și iarna."],
      en: ["Covers an area of 57 hectares.", "Popular spot for bird watching in autumn and winter."]
    }, image: "/poi-images/guandu-nature-park-life-v2.webp"},
  {
    id: "flying-cow-ranch-life-v2",
    type: "agriculture",
    parent: "TW-MIA",
    coords: [120.7397, 24.4338],
    name: { de: "Flying-Cow-Ranch", hu: "Repülő Tehén Farm", ro: "Ferma Flying Cow", en: "Flying Cow Ranch" },
    description: { de: "Ein beliebter Freizeitbauernhof in Miaoli, der interaktive Erlebnisse mit Milchkühen und anderen Tieren bietet.", hu: "Népszerű szabadidős gazdaság Miaoliban, amely interaktív élményeket kínál tehenekkel és más állatokkal.", ro: "O fermă de agrement populară din Miaoli, care oferă experiențe interactive cu vaci de lapte și alte animale.", en: "A popular recreational farm in Miaoli offering interactive experiences with dairy cows and other animals." },
    facts: {
      de: ["Bietet Aktivitäten wie Kuhmelken an.", "Umfasst ausgedehnte Wiesen und Wälder."],
      hu: ["Olyan programokat kínál, mint a tehénfejés.", "Kiterjedt réteket és erdőket foglal magában."],
      ro: ["Oferă activități precum mulsul vacilor.", "Include pajiști și păduri întinse."],
      en: ["Offers activities such as cow milking.", "Features extensive meadows and forests."]
    }, image: "/poi-images/flying-cow-ranch-life-v2.webp"},
  {
    id: "xitou-nature-education-area-life-v2",
    type: "park",
    parent: "TW-NAN",
    coords: [120.7961, 23.6683],
    name: { de: "Xitou-Naturerholungsgebiet", hu: "Hszitou Természetoktatási Terület", ro: "Aria de Educație Naturală Xitou", en: "Xitou Nature Education Area" },
    description: { de: "Ein dichter Bambuswald und Forschungsgebiet, das eine kühle und ruhige Atmosphäre bietet.", hu: "Sűrű bambuszerdő és kutatóterület, amely hűvös és nyugodt légkört biztosít.", ro: "O pădure densă de bambus și o zonă de cercetare care oferă o atmosferă răcoroasă și liniștită.", en: "A dense bamboo forest and research area offering a cool and tranquil atmosphere." },
    facts: {
      de: ["Wird von der National Taiwan University verwaltet.", "Bekannt für den beeindruckenden Sky Walk in den Baumkronen."],
      hu: ["A Tajvani Nemzeti Egyetem kezeli.", "Híres a lenyűgöző lombkorona-sétányáról."],
      ro: ["Este administrată de Universitatea Națională din Taiwan.", "Renumită pentru pasarela spectaculoasă printre coroanele copacilor."],
      en: ["Managed by the National Taiwan University.", "Known for the impressive canopy sky walk."]
    }, image: "/poi-images/xitou-nature-education-area-life-v2.webp"},
  {
    id: "daan-forest-park-life-v2",
    type: "park",
    parent: "TW-TPE",
    coords: [121.5350, 25.0305],
    name: { de: "Daan-Waldpark", hu: "Taan Erdei Park", ro: "Parcul Forestier Daan", en: "Daan Forest Park" },
    description: { de: "Eine große grüne Oase im Herzen von Taipeh, die den Stadtbewohnern Erholung bietet.", hu: "Hatalmas zöld oázis Tajpej szívében, amely kikapcsolódást nyújt a városlakóknak.", ro: "O mare oază verde în inima orașului Taipei, oferind relaxare locuitorilor orașului.", en: "A large green oasis in the heart of Taipei providing recreation for city dwellers." },
    facts: {
      de: ["Eröffnet im Jahr 1994.", "Wird oft als die grüne Lunge von Taipeh bezeichnet."],
      hu: ["1994-ben nyitották meg.", "Gyakran Tajpej zöld tüdejének is nevezik."],
      ro: ["Deschis în anul 1994.", "Adesea numit plămânul verde al orașului Taipei."],
      en: ["Opened in 1994.", "Often referred to as the green lung of Taipei."]
    }, image: "/poi-images/daan-forest-park-life-v2.webp"},
  {
    id: "aogu-wetland-life-v2",
    type: "wildlife-area",
    parent: "TW-CYQ",
    coords: [120.1386, 23.5152],
    name: { de: "Aogu-Feuchtgebiet-Waldpark", hu: "Aoku Vizes Élőhely Erdei Park", ro: "Parcul Forestier și Zona Umedă Aogu", en: "Aogu Wetland Forest Park" },
    description: { de: "Ein renaturiertes Feuchtgebiet an der Küste, das eine große Vielfalt an Vögeln und maritimem Leben beherbergt.", hu: "Helyreállított partvidéki vizes élőhely, amely madarak és tengeri élőlények nagy változatosságának ad otthont.", ro: "O zonă umedă de coastă restaurată, care găzduiește o mare varietate de păsări și viață marină.", en: "A restored coastal wetland hosting a great variety of birds and marine life." },
    facts: {
      de: ["Ehemaliges Poldergebiet.", "Eines der größten Feuchtgebiete in Taiwan."],
      hu: ["Korábban polder terület volt.", "Tajvan egyik legnagyobb vizes élőhelye."],
      ro: ["Fostă zonă de polder.", "Una dintre cele mai mari zone umede din Taiwan."],
      en: ["Formerly a polder area.", "One of the largest wetlands in Taiwan."]
    }, image: "/poi-images/aogu-wetland-life-v2.webp"},
  {
    id: "fushoushan-farm-life-v2",
    type: "agriculture",
    parent: "TW-TXG",
    coords: [121.2450, 24.2405],
    name: { de: "Fushoushan-Farm", hu: "Fusousan Farm", ro: "Ferma Fushoushan", en: "Fushoushan Farm" },
    description: { de: "Eine hochgelegene Farm, die für ihre Obstplantagen, Teefelder und atemberaubenden Bergkulissen bekannt ist.", hu: "Magasan fekvő gazdaság, amely gyümölcsöseiről, teaföldjeiről és lélegzetelállító hegyi tájairól ismert.", ro: "O fermă la mare altitudine, cunoscută pentru livezile, câmpurile de ceai și peisajele montane uluitoare.", en: "A high-altitude farm known for its orchards, tea fields, and breathtaking mountain scenery." },
    facts: {
      de: ["Liegt zwischen 2.100 und 2.614 Metern über dem Meeresspiegel.", "Berühmt für Äpfel, Pfirsiche und Oolong-Tee."],
      hu: ["A tengerszint felett 2100 és 2614 méter között fekszik.", "Híres almáiról, őszibarackjairól és oolong teájáról."],
      ro: ["Situată între 2.100 și 2.614 metri deasupra nivelului mării.", "Renumită pentru mere, piersici și ceaiul Oolong."],
      en: ["Located between 2,100 and 2,614 meters above sea level.", "Famous for apples, peaches, and Oolong tea."]
    }, image: "/poi-images/fushoushan-farm-life-v2.webp"},
  {
    id: "wuling-farm-life-v2",
    type: "agriculture",
    parent: "TW-TXG",
    coords: [121.3116, 24.3647],
    name: { de: "Wuling-Farm", hu: "Vuling Farm", ro: "Ferma Wuling", en: "Wuling Farm" },
    description: { de: "Ein malerisches Tal, das das ganze Jahr über Blumenpracht bietet, besonders beliebt während der Kirschblütensaison.", hu: "Festői völgy, amely egész évben virágpompát kínál, különösen a cseresznyevirágzás idején népszerű.", ro: "O vale pitorească care oferă o abundență de flori tot timpul anului, deosebit de populară în sezonul înfloririi cireșilor.", en: "A scenic valley offering floral beauty year-round, especially popular during the cherry blossom season." },
    facts: {
      de: ["Einst gegründet, um Veteranen nach dem Krieg Landwirtschaft zu ermöglichen.", "Wichtiger Lebensraum für den endemischen Formosa-Lachs."],
      hu: ["Eredetileg azért alapították, hogy mezőgazdasági munkát biztosítsanak a veteránoknak.", "Az endemikus formosai lazac fontos élőhelye."],
      ro: ["Fondată inițial pentru a oferi activități agricole veteranilor.", "Habitat important pentru somonul endemic de Formosa."],
      en: ["Originally established to provide agriculture work for veterans.", "Important habitat for the endemic Formosan landlocked salmon."]
    }, image: "/poi-images/wuling-farm-life-v2.webp"},
  {
    id: "lihpao-land-life-v2",
    type: "kid-friendly",
    parent: "TW-TXG",
    coords: [120.6972, 24.3236],
    name: { de: "Lihpao-Land", hu: "Lihpao Land", ro: "Lihpao Land", en: "Lihpao Land" },
    description: { de: "Ein großer Vergnügungs- und Wasserpark, der Spaß und Attraktionen für die ganze Familie bietet.", hu: "Hatalmas vidámpark és aquapark, amely szórakozást és látványosságokat kínál az egész családnak.", ro: "Un mare parc de distracții și acvatic, care oferă atracții și distracție pentru întreaga familie.", en: "A large amusement and water park offering fun and attractions for the whole family." },
    facts: {
      de: ["Verfügt über die einzige Achterbahn Taiwans mit abgebrochener Strecke.", "Beinhaltet auch ein großes Einkaufszentrum und ein Riesenrad."],
      hu: ["Itt található Tajvan egyetlen megszakított pályás hullámvasútja.", "Egy nagy bevásárlóközpont és egy óriáskerék is a része."],
      ro: ["Are singurul roller coaster cu pistă întreruptă din Taiwan.", "Include, de asemenea, un mare centru comercial și o roată panoramică."],
      en: ["Features Taiwan's only tilt coaster.", "Also includes a large shopping mall and a Ferris wheel."]
    }, image: "/poi-images/lihpao-land-life-v2.webp"},
  {
    id: "farglory-ocean-park-life-v2",
    type: "kid-friendly",
    parent: "TW-HUA",
    coords: [121.6033, 23.9019],
    name: { de: "Farglory-Meerespark", hu: "Farglory Óceán Park", ro: "Parcul Oceanic Farglory", en: "Farglory Ocean Park" },
    description: { de: "Ein Themenpark direkt am Pazifik, der sich auf Meeresleben, Shows und Fahrgeschäfte konzentriert.", hu: "Közvetlenül a Csendes-óceán partján fekvő vidámpark, amely a tengeri élővilágra, műsorokra és vidámparki játékokra összpontosít.", ro: "Un parc tematic situat direct pe coasta Oceanului Pacific, axat pe viața marină, spectacole și atracții.", en: "A theme park right on the Pacific coast, focusing on marine life, shows, and amusement rides." },
    facts: {
      de: ["Taiwans erster Freizeitpark mit Meeres-Thematik.", "Bietet Shows mit Delfinen und Seelöwen an."],
      hu: ["Tajvan első tengeri tematikájú vidámparkja.", "Delfin- és oroszlánfóka-műsorokat kínál."],
      ro: ["Primul parc de distracții cu tematică marină din Taiwan.", "Oferă spectacole cu delfini și lei de mare."],
      en: ["Taiwan's first marine-themed amusement park.", "Offers shows featuring dolphins and sea lions."]
    }, image: "/poi-images/farglory-ocean-park-life-v2.webp"},
  {
    id: "leofoo-village-life-v2",
    type: "kid-friendly",
    parent: "TW-HSQ",
    coords: [121.1816, 24.8252],
    name: { de: "Leofoo-Village-Freizeitpark", hu: "Leofoo Village Vidámpark", ro: "Parcul Tematic Leofoo Village", en: "Leofoo Village Theme Park" },
    description: { de: "Ein großer Freizeitpark, der einen Safaripark mit zahlreichen aufregenden Fahrgeschäften kombiniert.", hu: "Hatalmas vidámpark, amely egy szafariparkot kombinál számos izgalmas játékkal.", ro: "Un mare parc de distracții care combină un parc safari cu numeroase atracții palpitante.", en: "A large theme park combining a safari park with numerous thrilling rides." },
    facts: {
      de: ["Der Park ist in vier verschiedene Themenbereiche unterteilt.", "Besitzt eine große freilaufende Tierpopulation."],
      hu: ["A park négy különböző tematikus területre oszlik.", "Nagy, szabadon kószáló állatpopulációval rendelkezik."],
      ro: ["Parcul este împărțit în patru zone tematice diferite.", "Deține o mare populație de animale lăsate în libertate."],
      en: ["The park is divided into four different themed areas.", "Features a large free-roaming animal population."]
    }, image: "/poi-images/leofoo-village-life-v2.webp"},
  {
    id: "chulu-ranch-life-v2",
    type: "agriculture",
    parent: "TW-TTT",
    coords: [121.0963, 22.8647],
    name: { de: "Chulu-Ranch", hu: "Csulu Farm", ro: "Ferma Chulu", en: "Chulu Ranch" },
    description: { de: "Eine weitläufige Molkereifarm in Taitung, berühmt für ihre frische Milch und grünen Hügel.", hu: "Kiterjedt tejgazdaság Taitungban, amely friss tejéről és zöldellő dombjairól híres.", ro: "O întinsă fermă de lactate din Taitung, renumită pentru laptele proaspăt și dealurile verzi.", en: "A sprawling dairy farm in Taitung, famous for its fresh milk and green hills." },
    facts: {
      de: ["Die größte Molkereifarm in Taiwan.", "Bietet Besuchern die Möglichkeit, mit Kühen und Pferden zu interagieren."],
      hu: ["A legnagyobb tejgazdaság Tajvanon.", "Lehetőséget kínál a látogatóknak, hogy tehenekkel és lovakkal interakcióba lépjenek."],
      ro: ["Cea mai mare fermă de lactate din Taiwan.", "Oferă vizitatorilor posibilitatea de a interacționa cu vaci și cai."],
      en: ["The largest dairy farm in Taiwan.", "Offers visitors the chance to interact with cows and horses."]
    }, image: "/poi-images/chulu-ranch-life-v2.webp"},
  {
    id: "ruisui-ranch-life-v2",
    type: "agriculture",
    parent: "TW-HUA",
    coords: [121.3438, 23.4730],
    name: { de: "Ruisui-Ranch", hu: "Zsujszuj Farm", ro: "Ferma Ruisui", en: "Ruisui Ranch" },
    description: { de: "Eine bekannte Farm im Hualien-Tal, beliebt für ihre frischen Milchprodukte und idyllische Landschaft.", hu: "Jól ismert farm a Hualien-völgyben, amely népszerű friss tejtermékeiről és idilli tájáról.", ro: "O fermă bine-cunoscută în Valea Hualien, populară pentru produsele lactate proaspete și peisajul idilic.", en: "A well-known farm in the Hualien Valley, popular for its fresh dairy products and idyllic scenery." },
    facts: {
      de: ["Berühmt für ihren Nougat aus frischer Kuhmilch.", "Ein beliebter Zwischenstopp für Reisende an der Ostküste."],
      hu: ["Híres a friss tehéntejből készült nugátjáról.", "Népszerű megálló a keleti partvidéken utazók számára."],
      ro: ["Renumită pentru nuga sa preparată din lapte proaspăt de vacă.", "O oprire populară pentru călătorii de pe coasta de est."],
      en: ["Famous for its nougat made from fresh cow's milk.", "A popular rest stop for travelers on the East Coast."]
    }, image: "/poi-images/ruisui-ranch-life-v2.webp"},
  {
    id: "sihcao-green-tunnel-life-v2",
    type: "wildlife-area",
    parent: "TW-TNN",
    coords: [120.1352, 23.0188],
    name: { de: "Grüner Tunnel von Sihcao", hu: "Szihcao Zöld Alagút", ro: "Tunelul Verde Sihcao", en: "Sihcao Green Tunnel" },
    description: { de: "Eine malerische Mangroven-Wasserstraße, auf der man Bootsfahrten durch ein dichtes grünes Blätterdach machen kann.", hu: "Festői mangrove-csatorna, ahol csónaktúrákat tehetünk egy sűrű zöld lombkorona alatt.", ro: "Un canal pitoresc de mangrove, unde se pot face plimbări cu barca sub un coronament verde dens.", en: "A picturesque mangrove waterway where visitors can take boat rides under a dense green canopy." },
    facts: {
      de: ["Wird oft als der \"Mini-Amazonas\" von Taiwan bezeichnet.", "Beherbergt viele Krabben und seltene Vogelarten."],
      hu: ["Gyakran Tajvan \"mini-Amazonasának\" is hívják.", "Számos rákfajnak és ritka madárnak ad otthont."],
      ro: ["Adesea numit \"mini-Amazonul\" Taiwanului.", "Găzduiește mulți crabi și specii rare de păsări."],
      en: ["Often referred to as the \"mini-Amazon\" of Taiwan.", "Home to many crabs and rare bird species."]
    }, image: "/poi-images/sihcao-green-tunnel-life-v2.webp"},
  {
    id: "shoushan-zoo-life-v2",
    type: "kid-friendly",
    parent: "TW-KHH",
    coords: [120.2741, 22.6391],
    name: { de: "Shoushan-Zoo", hu: "Sousan Állatkert", ro: "Grădina Zoologică Shoushan", en: "Shoushan Zoo" },
    description: { de: "Ein städtischer Zoo in Kaohsiung am Hang des Shoushan-Berges, der asiatische und afrikanische Tiere beherbergt.", hu: "Városi állatkert Kaohsziungban, a Sousan-hegy oldalában, amely ázsiai és afrikai állatokat mutat be.", ro: "O grădină zoologică urbană în Kaohsiung, pe versantul muntelui Shoushan, care găzduiește animale asiatice și africane.", en: "An urban zoo in Kaohsiung on the hillside of Mount Shoushan, featuring Asian and African animals." },
    facts: {
      de: ["Gegründet im Jahr 1978.", "Bekannt für die vielen wilden Makaken in der Umgebung."],
      hu: ["1978-ban alapították.", "Közismert a környéken élő számos vad makákóról."],
      ro: ["Fondată în anul 1978.", "Cunoscută pentru numeroșii macaci sălbatici din împrejurimi."],
      en: ["Founded in 1978.", "Well-known for the many wild macaques in the surrounding area."]
    }, image: "/poi-images/shoushan-zoo-life-v2.webp"},
  {
    id: "weiwuying-park-life-v2",
    type: "park",
    parent: "TW-KHH",
    coords: [120.3427, 22.6236],
    name: { de: "Weiwuying-Metropolpark", hu: "Vejvujing Fővárosi Park", ro: "Parcul Metropolitan Weiwuying", en: "Weiwuying Metropolitan Park" },
    description: { de: "Ein riesiger Park in Kaohsiung auf einem ehemaligen Militärgelände, ideal für Spaziergänge und Naturbeobachtungen.", hu: "Hatalmas park Kaohsziungban egy egykori katonai területen, amely ideális sétákhoz és természetmegfigyeléshez.", ro: "Un parc uriaș în Kaohsiung pe un fost teren militar, ideal pentru plimbări și observarea naturii.", en: "A massive park in Kaohsiung on a former military base, ideal for walks and nature observation." },
    facts: {
      de: ["Einer der größten Parks in Südtaiwan.", "Beinhaltet Feuchtgebiete und reichlich Grünflächen."],
      hu: ["Dél-Tajvan egyik legnagyobb parkja.", "Vizes élőhelyeket és bőséges zöldfelületeket foglal magában."],
      ro: ["Unul dintre cele mai mari parcuri din sudul Taiwanului.", "Include zone umede și spații verzi abundente."],
      en: ["One of the largest parks in southern Taiwan.", "Includes wetlands and abundant green spaces."]
    }, image: "/poi-images/weiwuying-park-life-v2.webp"},
  {
    id: "eda-theme-park-life-v2",
    type: "kid-friendly",
    parent: "TW-KHH",
    coords: [120.4108, 22.7302],
    name: { de: "E-DA-Themenpark", hu: "E-DA Vidámpark", ro: "Parcul Tematic E-DA", en: "E-DA Theme Park" },
    description: { de: "Ein griechisch inspirierter Freizeitpark in Kaohsiung mit zahlreichen Fahrgeschäften und Unterhaltungsmöglichkeiten.", hu: "Görög ihletésű vidámpark Kaohsziungban, számos játékkal és szórakozási lehetőséggel.", ro: "Un parc tematic de inspirație greacă în Kaohsiung, cu numeroase atracții și opțiuni de divertisment.", en: "A Greek-inspired theme park in Kaohsiung with numerous rides and entertainment options." },
    facts: {
      de: ["Der Park ist im Stil der Ägäis gestaltet.", "Bietet ein riesiges Riesenrad mit Blick auf die Stadt."],
      hu: ["A parkot az Égei-tenger stílusában alakították ki.", "Hatalmas óriáskerékkel rendelkezik, amely a városra néz."],
      ro: ["Parcul este proiectat în stilul Mării Egee.", "Oferă o roată panoramică uriașă cu vedere la oraș."],
      en: ["The park is designed in an Aegean Sea style.", "Features a giant Ferris wheel overlooking the city."]
    }, image: "/poi-images/eda-theme-park-life-v2.webp"},
  {
    id: "green-world-farm-life-v2",
    type: "wildlife-area",
    parent: "TW-HSQ",
    coords: [121.0669, 24.7005],
    name: { de: "Ökologische Farm Green World", hu: "Zöld Világ Ökológiai Farm", ro: "Ferma Ecologică Lumea Verde", en: "Green World Ecological Farm" },
    description: { de: "Ein interaktiver Naturpark, der Flora und Fauna aus aller Welt in sechs Themenbereichen präsentiert.", hu: "Interaktív természeti park, amely a világ minden tájáról származó növény- és állatvilágot mutat be hat tematikus részlegen.", ro: "Un parc natural interactiv care prezintă flora și fauna din întreaga lume în șase zone tematice.", en: "An interactive nature park presenting flora and fauna from around the world across six themed areas." },
    facts: {
      de: ["Umfasst eine Fläche von 70 Hektar.", "Besonders bekannt für sein Alpaka-Gehege."],
      hu: ["Területe 70 hektár.", "Különösen híres alpaka karámjáról."],
      ro: ["Se întinde pe o suprafață de 70 de hectare.", "Deosebit de cunoscut pentru țarcul său de alpaca."],
      en: ["Covers an area of 70 hectares.", "Especially well-known for its alpaca enclosure."]
    }, image: "/poi-images/green-world-farm-life-v2.webp"},
  {
    id: "taichung-metropolitan-park-life-v2",
    type: "park",
    parent: "TW-TXG",
    coords: [120.5975, 24.2188],
    name: { de: "Taichung-Metropolpark", hu: "Tajcsung Fővárosi Park", ro: "Parcul Metropolitan Taichung", en: "Taichung Metropolitan Park" },
    description: { de: "Ein großer Naturpark auf dem Dadu-Plateau, der eine weite Aussicht auf die Stadt und die Küste bietet.", hu: "Hatalmas természeti park a Tatu-fennsíkon, amely széles kilátást nyújt a városra és a partvidékre.", ro: "Un mare parc natural pe platoul Dadu, care oferă o vedere largă asupra orașului și a coastei.", en: "A large nature park on the Dadu Plateau offering expansive views of the city and the coastline." },
    facts: {
      de: ["Wurde im Jahr 2000 für die Öffentlichkeit zugänglich gemacht.", "Beliebt bei Drachenfliegern und Radfahrern."],
      hu: ["2000-ben nyitották meg a nagyközönség számára.", "Népszerű a sárkányeregetők és a kerékpárosok körében."],
      ro: ["A fost deschis publicului în anul 2000.", "Popular printre zburătorii de zmeie și bicicliști."],
      en: ["Opened to the public in 2000.", "Popular among kite flyers and cyclists."]
    }
  }
];
