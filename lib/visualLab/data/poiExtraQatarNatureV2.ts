import type { POI } from "./poi";

export const poiExtraQatarNatureV2: POI[] = [
  {
    id: "qa-al-thakhira-mangroves-nature-v2",
    type: "forest",
    parent: "QA-KH",
    coords: [51.5475, 25.7266],
    name: { de: "Al-Thakhira Mangrovenwald", hu: "Al Thakira Mangroveerdő", ro: "Pădurea de mangrove Al Thakira", en: "Al Thakira Mangroves" },
    description: { de: "Ein üppiger Mangrovenwald an der Nordostküste Katars, der mit seinen verzweigten Wasserwegen einen starken Kontrast zur umliegenden Wüste bildet.", hu: "Egy buja mangroveerdő Katar északkeleti partján, amely elágazó vízi útjaival éles kontrasztot alkot a környező sivataggal.", ro: "O pădure luxuriantă de mangrove pe coasta de nord-est a Qatarului, care contrastează puternic cu deșertul înconjurător prin căile sale navigabile ramificate.", en: "A lush mangrove forest on Qatar's northeast coast, contrasting sharply with the surrounding desert through its branching waterways." },
    facts: {
      de: ["Wichtiges Nistgebiet für Reiher", "Beliebt für Kajaktouren", "Stark gezeitenabhängig", "Schützt die Küste vor Erosion"],
      hu: ["Fontos fészkelőhely gémek számára", "Népszerű kajaktúrák helyszíne", "Erősen árapályfüggő", "Védi a partot az eróziótól"],
      ro: ["Zonă importantă de cuibărit pentru stârci", "Populară pentru tururi cu caiacul", "Puternic dependentă de maree", "Protejează coasta de eroziune"],
      en: ["Important nesting area for herons", "Popular for kayak tours", "Highly dependent on tides", "Protects the coast from erosion"]
    }, image: "/poi-images/qa-al-thakhira-mangroves-nature-v2.webp"},
  {
    id: "qa-khor-al-adaid-nature-v2",
    type: "lake",
    parent: "QA-WA",
    coords: [51.4116, 24.6291],
    name: { de: "Khor Al Adaid", hu: "Khor Al Adaid Beltenger", ro: "Marea Interioară Khor Al Adaid", en: "Khor Al Adaid Inland Sea" },
    description: { de: "Eines der wenigen Gebiete auf der Welt, in denen das Meer tief in das Herz der Wüste eindringt und eine beeindruckende Binnenlagune bildet.", hu: "A világ azon kevés területeinek egyike, ahol a tenger mélyen behatol a sivatag szívébe, lenyűgöző belső lagúnát alkotva.", ro: "Unul dintre puținele locuri din lume unde marea pătrunde adânc în inima deșertului, formând o lagună interioară impresionantă.", en: "One of the few places in the world where the sea intrudes deep into the heart of the desert, forming an impressive inland lagoon." },
    facts: {
      de: ["UNESCO-anerkanntes Naturreservat", "Heimat seltener Schildkröten", "Wechselt seine Farbe im Laufe des Tages", "Nur mit Geländewagen erreichbar"],
      hu: ["UNESCO által elismert természetvédelmi terület", "Ritka teknősök otthona", "A nap folyamán változtatja a színét", "Csak terepjáróval megközelíthető"],
      ro: ["Rezervație naturală recunoscută de UNESCO", "Casa unor broaște țestoase rare", "Își schimbă culoarea pe parcursul zilei", "Accesibilă doar cu vehicule de teren"],
      en: ["UNESCO-recognized nature reserve", "Home to rare turtles", "Changes color throughout the day", "Accessible only by off-road vehicles"]
    }, image: "/poi-images/qa-khor-al-adaid-nature-v2.webp"},
  {
    id: "qa-al-reem-biosphere-nature-v2",
    type: "national-park",
    parent: "QA-SH",
    coords: [50.9333, 25.4667],
    name: { de: "Al-Reem-Biosphärenreservat", hu: "Al Reem Bioszféra Rezervátum", ro: "Rezervația Biosferei Al Reem", en: "Al Reem Biosphere Reserve" },
    description: { de: "Dieses weitläufige Reservat im Nordwesten Katars schützt die einzigartige Flora und Fauna der Halbwüste und beherbergt bedeutende Bestände an Wildtieren.", hu: "Ez a hatalmas rezervátum Katar északnyugati részén védi a félsivatag egyedülálló növény- és állatvilágát, és jelentős vadon élő állományoknak ad otthont.", ro: "Această rezervație vastă din nord-vestul Qatarului protejează flora și fauna unică a semideșertului și găzduiește populații importante de animale sălbatice.", en: "This expansive reserve in northwestern Qatar protects the unique flora and fauna of the semi-desert and is home to significant wildlife populations." },
    facts: {
      de: ["Heimat der arabischen Oryxantilope", "Umspannt fast 10 Prozent der Landesfläche", "Von der UNESCO als Biosphärenreservat anerkannt", "Beherbergt auch Gazellen und Strauße"],
      hu: ["Az arab bejza otthona", "Az ország területének majdnem 10 százalékát lefedi", "Az UNESCO bioszféra-rezervátumként ismeri el", "Gazelláknak és struccoknak is otthont ad"],
      ro: ["Casa orixului arab", "Acoperă aproape 10% din suprafața țării", "Recunoscută de UNESCO ca rezervație a biosferei", "Găzduiește și gazele și struți"],
      en: ["Home to the Arabian oryx", "Covers nearly 10 percent of the country's landmass", "Recognized as a UNESCO Biosphere Reserve", "Also houses gazelles and ostriches"]
    }, image: "/poi-images/qa-al-reem-biosphere-nature-v2.webp"},
  {
    id: "qa-singing-sand-dunes-nature-v2",
    type: "mountain",
    parent: "QA-WA",
    coords: [51.3411, 25.0489],
    name: { de: "Singende Dünen von Mesaieed", hu: "Mesaieed Éneklő Dűnéi", ro: "Dunele Cântătoare din Mesaieed", en: "Singing Sand Dunes of Mesaieed" },
    description: { de: "Eine Gruppe halbmondförmiger Sanddünen, die bei bestimmten Windverhältnissen oder beim Hinunterrutschen tiefe, brummende Geräusche erzeugen.", hu: "Félhold alakú homokdűnék csoportja, amelyek bizonyos szélviszonyok mellett vagy csúszáskor mély, zümmögő hangokat bocsátanak ki.", ro: "Un grup de dune de nisip în formă de semilună, care produc sunete joase, ca un zumzet, în anumite condiții de vânt sau la alunecarea pe ele.", en: "A group of crescent-shaped sand dunes that produce deep, humming sounds under certain wind conditions or when sliding down them." },
    facts: {
      de: ["Entstehen durch Reibung der Sandkörner", "Besonders bei trockenem Wetter hörbar", "Beliebt bei Sandboardern", "Erreichen Höhen von bis zu 40 Metern"],
      hu: ["A homokszemek súrlódása hozza létre", "Különösen száraz időben hallható", "Népszerű a sandboardozók körében", "Akár 40 méteres magasságot is elérhetnek"],
      ro: ["Generate de frecarea boabelor de nisip", "Audibile în special pe vreme uscată", "Populare printre practicanții de sandboarding", "Ating înălțimi de până la 40 de metri"],
      en: ["Created by the friction of sand grains", "Especially audible in dry weather", "Popular among sandboarders", "Reach heights of up to 40 meters"]
    }, image: "/poi-images/qa-singing-sand-dunes-nature-v2.webp"},
  {
    id: "qa-ras-abrouq-formations-nature-v2",
    type: "mountain",
    parent: "QA-SH",
    coords: [50.8413, 25.5902],
    name: { de: "Ras-Abrouq-Felsformationen", hu: "Ras Abrouq Sziklaképződmények", ro: "Formațiunile stâncoase Ras Abrouq", en: "Ras Abrouq Rock Formations" },
    description: { de: "Eine surreale Landschaft aus Kalksteinsäulen und pilzförmigen Felsen, die über Jahrtausende vom Wind in der Zekreet-Halbinsel geformt wurden.", hu: "Szürreális táj mészkőoszlopokkal és gomba alakú sziklákkal, amelyeket a szél évezredek alatt formált a Zekreet-félszigeten.", ro: "Un peisaj suprarealist de stâlpi de calcar și roci în formă de ciupercă, sculptate de vânt de-a lungul mileniilor în peninsula Zekreet.", en: "A surreal landscape of limestone pillars and mushroom-shaped rocks sculpted by the wind over millennia in the Zekreet peninsula." },
    facts: {
      de: ["Beliebter Ort für spektakuläre Sonnenuntergänge", "Bietet unberührte Sandstrände", "Häufig als Filmkulisse genutzt", "Beheimatet wilde Strauße"],
      hu: ["Népszerű hely a látványos naplementékhez", "Érintetlen homokos strandokat kínál", "Gyakran használják forgatási helyszínként", "Vadon élő struccoknak ad otthont"],
      ro: ["Loc popular pentru apusuri de soare spectaculoase", "Oferă plaje de nisip imaculate", "Adesea folosit ca platou de filmare", "Găzduiește struți sălbatici"],
      en: ["Popular spot for spectacular sunsets", "Features pristine sandy beaches", "Frequently used as a film set", "Home to wild ostriches"]
    }, image: "/poi-images/qa-ras-abrouq-formations-nature-v2.webp"},
  {
    id: "qa-alkaraana-lagoons-nature-v2",
    type: "lake",
    parent: "QA-RA",
    coords: [51.1897, 25.0423],
    name: { de: "Al-Karaana-Lagunen", hu: "Al Karaana Lagúnák", ro: "Lagunele Al Karaana", en: "Al Karaana Lagoons" },
    description: { de: "Ein erfolgreich renaturiertes Feuchtgebiet, das sich von einem ehemaligen Abwasserbecken in ein blühendes Refugium für Zugvögel und einheimische Wildtiere verwandelt hat.", hu: "Egy sikeresen rehabilitált vizenyős terület, amely egykori szennyvíztározóból a vonuló madarak és az őshonos vadon élő állatok virágzó menedékévé változott.", ro: "O zonă umedă reabilitată cu succes, care s-a transformat dintr-un fost bazin de ape uzate într-un refugiu înfloritor pentru păsările migratoare și animalele sălbatice indigene.", en: "A successfully rehabilitated wetland that has transformed from a former wastewater basin into a thriving sanctuary for migratory birds and native wildlife." },
    facts: {
      de: ["Zieht Fischadler und seltene Entenarten an", "Verfügt über drei große künstliche Seen", "Wichtiges Projekt für die Umweltkatars", "Beherbergt nun Fische und Reptilien"],
      hu: ["Halászsasokat és ritka réceféléket vonz", "Három nagy mesterséges tóval rendelkezik", "Katar fontos környezetvédelmi projektje", "Ma már halaknak és hüllőknek ad otthont"],
      ro: ["Atrage vulturi pescari și specii rare de rațe", "Dispune de trei lacuri artificiale mari", "Proiect important de mediu pentru Qatar", "Găzduiește acum pești și reptile"],
      en: ["Attracts ospreys and rare duck species", "Features three large artificial lakes", "Important environmental project for Qatar", "Now accommodates fish and reptiles"]
    }, image: "/poi-images/qa-alkaraana-lagoons-nature-v2.webp"},
  {
    id: "qa-umm-tais-national-park-nature-v2",
    type: "national-park",
    parent: "QA-MS",
    coords: [51.2986, 26.1158],
    name: { de: "Umm-Tais-Nationalpark", hu: "Umm Tais Nemzeti Park", ro: "Parcul Național Umm Tais", en: "Umm Tais National Park" },
    description: { de: "Ein unberührtes Inselreservat an der Nordspitze Katars, bestehend aus Sandstränden, Mangroven und flachen Gewässern, die als Nistplätze für Schildkröten dienen.", hu: "Érintetlen szigeti rezervátum Katar északi csücskén, amely homokos strandokból, mangrovefákból és sekély vizekből áll, amelyek teknősök fészkelőhelyéül szolgálnak.", ro: "O rezervație insulară neatinsă la extremitatea nordică a Qatarului, formată din plaje de nisip, mangrove și ape puțin adânci, care servesc drept locuri de cuibărit pentru țestoase.", en: "An untouched island reserve at the northern tip of Qatar, consisting of sandy beaches, mangroves, and shallow waters that serve as nesting grounds for turtles." },
    facts: {
      de: ["Wichtiges Schutzgebiet für Karettschildkröten", "Verfügt über eine reiche Vogelwelt", "Streng geschützt vor Bebauung", "Beinhaltet seltene Salzwiesen"],
      hu: ["Fontos védett terület a cserepesteknősök számára", "Gazdag madárvilággal rendelkezik", "Szigorúan védett a beépítés ellen", "Ritka sós mocsarakat foglal magában"],
      ro: ["Zonă protejată importantă pentru țestoasele hawksbill", "Are o avifaună bogată", "Strict protejat împotriva dezvoltării", "Include mlaștini sărate rare"],
      en: ["Important protected area for hawksbill turtles", "Features a rich birdlife", "Strictly protected from development", "Includes rare salt marshes"]
    }, image: "/poi-images/qa-umm-tais-national-park-nature-v2.webp"},
  {
    id: "qa-dhal-al-misfir-nature-v2",
    type: "mountain",
    parent: "QA-RA",
    coords: [51.0569, 25.1764],
    name: { de: "Dhal-Al-Misfir-Höhle", hu: "Dhal Al Misfir Barlang", ro: "Peștera Dhal Al Misfir", en: "Dhal Al Misfir Cave" },
    description: { de: "Eine 40 Meter tiefe natürliche Senkgrube aus Gips, die ein phosphoreszierendes Leuchten abgibt und zu den bemerkenswertesten geologischen Wundern Katars zählt.", hu: "Egy 40 méter mély természetes gipsznyelő, amely foszforeszkáló fényt bocsát ki, és Katar legfigyelemreméltóbb geológiai csodái közé tartozik.", ro: "O dolină naturală de ghips, adâncă de 40 de metri, care emite o strălucire fosforescentă și este una dintre cele mai remarcabile minuni geologice din Qatar.", en: "A 40-meter-deep natural gypsum sinkhole that emits a phosphorescent glow and ranks among Qatar's most remarkable geological wonders." },
    facts: {
      de: ["Das Alter wird auf hunderttausende Jahre geschätzt", "Das Gestein erzeugt mondähnliche Glitzerreflexe", "Beliebt bei abenteuerlustigen Entdeckern", "Herrscht ein kühleres Mikroklima im Inneren"],
      hu: ["Korát százezer évekre becsülik", "A kőzet holdszerű, csillogó tükröződéseket hoz létre", "Népszerű a kalandvágyó felfedezők körében", "Hűvösebb mikroklíma uralkodik a belsejében"],
      ro: ["Vârsta sa este estimată la sute de mii de ani", "Roca produce reflexii strălucitoare asemănătoare lunii", "Populară printre exploratorii aventuroși", "În interior predomină un microclimat mai răcoros"],
      en: ["Its age is estimated at hundreds of thousands of years", "The rock produces moon-like glittering reflections", "Popular among adventurous explorers", "A cooler microclimate prevails inside"]
    }, image: "/poi-images/qa-dhal-al-misfir-nature-v2.webp"},
  {
    id: "qa-wadi-hubara-nature-v2",
    type: "river",
    parent: "QA-MS",
    coords: [51.2155, 25.8643],
    name: { de: "Wadi Hubara", hu: "Wadi Hubara Folyómeder", ro: "Albia Wadi Hubara", en: "Wadi Hubara" },
    description: { de: "Ein ausgetrocknetes Flussbett, das sich nach den seltenen Regenfällen im Winter in eine blühende Oase verwandelt und Wüstentiere anzieht.", hu: "Egy kiszáradt folyómeder, amely a ritka téli esőzések után virágzó oázissá változik, és vonzza a sivatagi állatokat.", ro: "O albie uscată a unui râu care, după ploile rare de iarnă, se transformă într-o oază înfloritoare și atrage animalele deșertului.", en: "A dried-up riverbed that transforms into a blooming oasis after the rare winter rains, attracting desert wildlife." },
    facts: {
      de: ["Benannt nach der Kragentrappe (Hubara)", "Zeigt eine bemerkenswerte Wüstenflora", "Sammelt kurzfristig Regenwasser", "Wichtig für das lokale Ökosystem"],
      hu: ["A galléros túzokról (Hubara) kapta a nevét", "Figyelemreméltó sivatagi flórát mutat", "Rövid ideig összegyűjti az esővizet", "Fontos a helyi ökoszisztéma számára"],
      ro: ["Numită după dropia gulerată (Hubara)", "Prezintă o floră deșertică remarcabilă", "Colectează apa de ploaie pentru o perioadă scurtă", "Importantă pentru ecosistemul local"],
      en: ["Named after the houbara bustard", "Displays remarkable desert flora", "Collects rainwater for short periods", "Important for the local ecosystem"]
    }, image: "/poi-images/qa-wadi-hubara-nature-v2.webp"},
  {
    id: "qa-wadi-al-banat-nature-v2",
    type: "river",
    parent: "QA-DA",
    coords: [51.4682, 25.3524],
    name: { de: "Wadi Al Banat", hu: "Wadi Al Banat Völgy", ro: "Valea Wadi Al Banat", en: "Wadi Al Banat" },
    description: { de: "Ein historisches Flusstal nahe Doha, das heute durch seine sanften Geländestrukturen auffällt und ein beliebtes Ziel für naturnahe Spaziergänge in Stadtnähe ist.", hu: "Dohához közeli történelmi folyóvölgy, amely ma lágy terepformáival tűnik ki, és a városközeli, természetközeli séták kedvelt célpontja.", ro: "O vale istorică a unui râu de lângă Doha, care se remarcă astăzi prin structurile sale blânde de teren și este o destinație populară pentru plimbări în natură aproape de oraș.", en: "A historic river valley near Doha, noted today for its gentle terrain structures and serving as a popular destination for nature walks close to the city." },
    facts: {
      de: ["Bedeutet übersetzt Tal der Mädchen", "Bietet Schutzräume für Wüstenfüchse", "Ein bedeutendes geologisches Merkmal", "Wird für Picknicks geschätzt"],
      hu: ["Lefordítva a Lányok Völgyét jelenti", "Menedéket nyújt a sivatagi rókáknak", "Jelentős geológiai képződmény", "Piknikezésre is kedvelt hely"],
      ro: ["Tradus înseamnă Valea Fetelor", "Oferă adăpost pentru vulpile de deșert", "O caracteristică geologică semnificativă", "Apreciată pentru picnicuri"],
      en: ["Translates to Valley of the Girls", "Provides shelter for desert foxes", "A significant geological feature", "Appreciated for picnics"]
    }, image: "/poi-images/qa-wadi-al-banat-nature-v2.webp"},
  {
    id: "qa-al-safliya-island-nature-v2",
    type: "national-park",
    parent: "QA-DA",
    coords: [51.5819, 25.3347],
    name: { de: "Al-Safliya-Insel-Naturreservat", hu: "Al Safliya Szigeti Természetvédelmi Terület", ro: "Rezervația Naturală a Insulei Al Safliya", en: "Al Safliya Island Nature Reserve" },
    description: { de: "Eine schmale, unbewohnte Sandinsel vor der Küste von Doha, die als wichtiges Rastgebiet für Zugvögel und als geschützter maritimer Lebensraum dient.", hu: "Egy keskeny, lakatlan homokos sziget Doha partjainál, amely a vonuló madarak fontos pihenőhelyeként és védett tengeri élőhelyként szolgál.", ro: "O insulă îngustă și nelocuită de nisip în largul coastei Doha, care servește ca o zonă importantă de odihnă pentru păsările migratoare și ca habitat marin protejat.", en: "A narrow, uninhabited sandy island off the coast of Doha, serving as an important resting area for migratory birds and a protected maritime habitat." },
    facts: {
      de: ["Hat keine künstlichen Strukturen", "Bietet tolle Blicke auf die Skyline Dohas", "Heimat zahlreicher Kormorane", "Beliebt für umweltfreundliche Bootstouren"],
      hu: ["Nincsenek mesterséges építményei", "Nagyszerű kilátást nyújt Doha sziluettjére", "Számos kárókatona otthona", "Környezetbarát hajótúrák kedvelt célpontja"],
      ro: ["Nu are structuri artificiale", "Oferă vederi minunate asupra orizontului din Doha", "Casa a numeroși cormorani", "Populară pentru excursii ecologice cu barca"],
      en: ["Has no artificial structures", "Offers great views of the Doha skyline", "Home to numerous cormorants", "Popular for eco-friendly boat tours"]
    }, image: "/poi-images/qa-al-safliya-island-nature-v2.webp"},
  {
    id: "qa-al-aliya-island-nature-v2",
    type: "national-park",
    parent: "QA-DA",
    coords: [51.5975, 25.3952],
    name: { de: "Al-Aliya-Insel-Reservat", hu: "Al Aliya Szigeti Rezervátum", ro: "Rezervația Insulei Al Aliya", en: "Al Aliya Island Reserve" },
    description: { de: "Ein weiteres maritimes Schutzgebiet nahe Doha, das wegen seiner reichen Unterwasserwelt und Korallenbänken besonders für den marinen Artenschutz von Bedeutung ist.", hu: "Egy másik tengeri védett terület Doha közelében, amely gazdag víz alatti világa és korallzátonyai miatt különösen fontos a tengeri fajok védelme szempontjából.", ro: "O altă rezervație marină lângă Doha, care este deosebit de importantă pentru conservarea speciilor marine datorită bogatei sale vieți subacvatice și a recifelor de corali.", en: "Another maritime protected area near Doha, particularly important for marine species conservation due to its rich underwater world and coral reefs." },
    facts: {
      de: ["Wichtiger Laichplatz für Fische", "Wird von der Umweltbehörde überwacht", "Teil des nationalen Meeresschutzes", "Zugang ist streng reglementiert"],
      hu: ["Fontos halívóhely", "A környezetvédelmi hatóság felügyeli", "A nemzeti tengeri védelem része", "A belépés szigorúan szabályozott"],
      ro: ["Zonă importantă de depunere a icrelor pentru pești", "Monitorizată de autoritatea de mediu", "Face parte din protecția maritimă națională", "Accesul este strict reglementat"],
      en: ["Important spawning ground for fish", "Monitored by the environmental authority", "Part of the national marine conservation", "Access is strictly regulated"]
    }, image: "/poi-images/qa-al-aliya-island-nature-v2.webp"},
  {
    id: "qa-jebel-fuwairit-nature-v2",
    type: "mountain",
    parent: "QA-MS",
    coords: [51.3664, 26.0275],
    name: { de: "Jebel Fuwairit", hu: "Jebel Fuwairit Hegy", ro: "Muntele Jebel Fuwairit", en: "Jebel Fuwairit" },
    description: { de: "Eine markante felsige Erhebung an der Nordküste Katars, deren zerklüftete Klippen direkt ins azurblaue Wasser abfallen und seltene Fossilien bergen.", hu: "Katar északi partjának egy jellegzetes sziklás magaslata, amelynek csipkézett sziklái közvetlenül azúrkék vízbe nyúlnak, és ritka fosszíliákat rejtenek.", ro: "O elevație stâncoasă proeminentă pe coasta de nord a Qatarului, ale cărei stânci zimțate coboară direct în apa azurie și adăpostesc fosile rare.", en: "A prominent rocky elevation on Qatar's north coast, whose jagged cliffs drop directly into azure waters and harbor rare fossils." },
    facts: {
      de: ["Die Klippen bieten Schatten für Meeresvögel", "Besteht überwiegend aus Kalkstein", "Einzigartige geologische Verwerfungen", "Bei Kletterern und Fotografen beliebt"],
      hu: ["A sziklák árnyékot nyújtanak a tengeri madaraknak", "Főleg mészkőből áll", "Egyedülálló geológiai törésvonalak", "A hegymászók és fotósok kedvelt helye"],
      ro: ["Stâncile oferă umbră păsărilor marine", "Constă în principal din calcar", "Falii geologice unice", "Popular printre alpiniști și fotografi"],
      en: ["The cliffs provide shade for seabirds", "Consists predominantly of limestone", "Unique geological fault lines", "Popular among climbers and photographers"]
    }, image: "/poi-images/qa-jebel-fuwairit-nature-v2.webp"},
  {
    id: "qa-halul-reef-nature-v2",
    type: "national-park",
    parent: "QA-DA",
    coords: [52.4167, 25.6667],
    name: { de: "Halul-Riff", hu: "Halul Zátony", ro: "Reciful Halul", en: "Halul Reef" },
    description: { de: "Ein beeindruckendes Korallenriff-Ökosystem rund um die abgelegene Insel Halul, das als Zufluchtsort für eine enorme Vielfalt an Meereslebewesen dient.", hu: "Egy lenyűgöző korallzátony-ökoszisztéma a távoli Halul sziget körül, amely a tengeri élőlények hatalmas változatosságának menedékeként szolgál.", ro: "Un ecosistem impresionant de recif de corali în jurul insulei îndepărtate Halul, care servește drept sanctuar pentru o varietate enormă de viață marină.", en: "An impressive coral reef ecosystem surrounding the remote Halul Island, serving as a sanctuary for an enormous variety of marine life." },
    facts: {
      de: ["Bekannt für bunte Weichkorallen", "Regelmäßige Sichtung von Walhaien", "Klares Wasser mit hoher Sichtweite", "Lebensraum für Zackenbarsche"],
      hu: ["Színes lágykoralljairól ismert", "Rendszeresen látni cetcápákat", "Tiszta víz nagy látótávolsággal", "A fűrészesfogú sügérek élőhelye"],
      ro: ["Cunoscut pentru coralii moi colorați", "Observări regulate ale rechinilor-balenă", "Apă limpede cu vizibilitate mare", "Habitat pentru bibani de mare"],
      en: ["Known for colorful soft corals", "Regular sightings of whale sharks", "Clear water with high visibility", "Habitat for groupers"]
    }, image: "/poi-images/qa-halul-reef-nature-v2.webp"},
  {
    id: "qa-irkaya-bird-sanctuary-nature-v2",
    type: "national-park",
    parent: "QA-RA",
    coords: [51.1042, 25.1098],
    name: { de: "Irkaya-Vogelschutzgebiet", hu: "Irkaya Madárvédelmi Terület", ro: "Sanctuarul de Păsări Irkaya", en: "Irkaya Bird Sanctuary" },
    description: { de: "Ein bedeutendes landwirtschaftliches Gebiet im Inneren Katars, das durch seine kreisrunden Bewässerungsfelder zu einem wichtigen Zwischenstopp für unzählige Zugvögel wurde.", hu: "Katar belsejében található jelentős mezőgazdasági terület, amely körkörös öntözött mezőinek köszönhetően számtalan vonuló madár fontos tranzitállomásává vált.", ro: "O zonă agricolă importantă din interiorul Qatarului, care a devenit o oprire esențială pentru nenumărate păsări migratoare datorită câmpurilor sale irigate circulare.", en: "A significant agricultural area in the interior of Qatar that, due to its circular irrigated fields, has become an important stopover for countless migratory birds." },
    facts: {
      de: ["Über 200 Vogelarten wurden registriert", "Zieht Falken und Adler an", "Kreisrunde grüne Felder in der Wüste", "Paradies für Vogelbeobachter"],
      hu: ["Több mint 200 madárfajt regisztráltak", "Sólymokat és sasokat vonz", "Körkörös zöld mezők a sivatagban", "Madármegfigyelők paradicsoma"],
      ro: ["Au fost înregistrate peste 200 de specii de păsări", "Atrage șoimi și vulturi", "Câmpuri verzi circulare în deșert", "Paradis pentru observatorii de păsări"],
      en: ["Over 200 bird species have been recorded", "Attracts falcons and eagles", "Circular green fields in the desert", "Paradise for birdwatchers"]
    }, image: "/poi-images/qa-irkaya-bird-sanctuary-nature-v2.webp"},
  {
    id: "qa-abu-galawa-sinkhole-nature-v2",
    type: "lake",
    parent: "QA-MS",
    coords: [51.1345, 25.9234],
    name: { de: "Abu-Galawa-Senke", hu: "Abu Galawa Víznyelő", ro: "Dolina Abu Galawa", en: "Abu Galawa Sinkhole" },
    description: { de: "Eine tiefe geologische Verwerfung, die nach starken Regenfällen Wasser ansammelt und ein temporäres Feuchtgebiet für Wüstenflora und -fauna bildet.", hu: "Egy mély geológiai törés, amely heves esőzések után összegyűjti a vizet, és átmeneti vizes élőhelyet alkot a sivatagi növény- és állatvilág számára.", ro: "O falie geologică adâncă care colectează apă după ploi abundente și formează o zonă umedă temporară pentru flora și fauna deșertului.", en: "A deep geological fault that collects water after heavy rains, forming a temporary wetland for desert flora and fauna." },
    facts: {
      de: ["Bietet Lebensraum für Wüstenkröten", "Geheimtipp unter Naturliebhabern", "Beherbergt seltene Wüstenblumen", "Nur saisonal mit Wasser gefüllt"],
      hu: ["Élőhelyet biztosít sivatagi varangyoknak", "Titkos tipp a természetkedvelők körében", "Ritka sivatagi virágoknak ad otthont", "Csak szezonálisan telik meg vízzel"],
      ro: ["Oferă habitat pentru broaștele deșertului", "Un pont secret printre iubitorii de natură", "Găzduiește flori rare de deșert", "Umplută cu apă doar sezonier"],
      en: ["Provides habitat for desert toads", "An insider tip among nature lovers", "Hosts rare desert flowers", "Filled with water only seasonally"]
    }, image: "/poi-images/qa-abu-galawa-sinkhole-nature-v2.webp"},
  {
    id: "qa-al-wabra-preservation-nature-v2",
    type: "national-park",
    parent: "QA-SH",
    coords: [51.1963, 25.3218],
    name: { de: "Al-Wabra-Tierschutzgebiet", hu: "Al Wabra Állatvédelmi Terület", ro: "Rezervația de Animale Al Wabra", en: "Al Wabra Wildlife Preservation" },
    description: { de: "Ein international anerkanntes Zentrum zur Erhaltung bedrohter Tierarten, das sich dem Zuchtprogramm seltener exotischer und einheimischer Tiere verschrieben hat.", hu: "Veszélyeztetett állatfajok megőrzésére szolgáló, nemzetközileg elismert központ, amely ritka egzotikus és őshonos állatok tenyésztési programjának szenteli magát.", ro: "Un centru recunoscut internațional pentru conservarea speciilor pe cale de dispariție, dedicat programului de reproducere a animalelor exotice și indigene rare.", en: "An internationally recognized center for the conservation of endangered species, dedicated to the breeding program of rare exotic and native animals." },
    facts: {
      de: ["Erfolgreiche Zucht des Spix-Aras", "Private Initiative mit globaler Bedeutung", "Strikte veterinärmedizinische Standards", "Rettet Spezies vor dem Aussterben"],
      hu: ["A Spix-ara sikeres tenyésztése", "Globális jelentőségű magánkezdeményezés", "Szigorú állatorvosi szabványok", "Fajokat ment meg a kihalástól"],
      ro: ["Creșterea cu succes a papagalului Spix", "Inițiativă privată cu importanță globală", "Standarde veterinare stricte", "Salvează speciile de la dispariție"],
      en: ["Successful breeding of the Spix's macaw", "Private initiative with global importance", "Strict veterinary standards", "Saves species from extinction"]
    }, image: "/poi-images/qa-al-wabra-preservation-nature-v2.webp"},
  {
    id: "qa-wadi-al-askar-nature-v2",
    type: "river",
    parent: "QA-RA",
    coords: [51.0256, 25.3891],
    name: { de: "Wadi Al Askar", hu: "Wadi Al Askar", ro: "Wadi Al Askar", en: "Wadi Al Askar" },
    description: { de: "Ein weites, naturbelassenes Trockental im Herzen Katars, geprägt von steinigen Flussbetten und widerstandsfähigen Akazienbäumen.", hu: "Egy széles, természetes szárazvölgy Katar szívében, amelyet köves folyómedrek és ellenálló akácfák jellemeznek.", ro: "O vale uscată, largă și naturală în inima Qatarului, caracterizată prin albii pietroase și salcâmi rezistenți.", en: "A wide, natural dry valley in the heart of Qatar, characterized by stony riverbeds and resilient acacia trees." },
    facts: {
      de: ["Wichtige historische Karawanenroute", "Sammelt Grundwasser nach Regenschauern", "Heimat von Wüstenhasen und Eidechsen", "Ruhiger Ort fernab der Zivilisation"],
      hu: ["Fontos történelmi karavánút", "Esőzések után talajvizet gyűjt", "Sivatagi nyulak és gyíkok otthona", "Csendes hely, távol a civilizációtól"],
      ro: ["Rută istorică importantă a caravanelor", "Colectează ape subterane după ploi", "Casa iepurilor de deșert și a șopârlelor", "Loc liniștit departe de civilizație"],
      en: ["Important historical caravan route", "Collects groundwater after rain showers", "Home to desert hares and lizards", "Quiet place far from civilization"]
    }, image: "/poi-images/qa-wadi-al-askar-nature-v2.webp"},
  {
    id: "qa-qatof-forest-nature-v2",
    type: "forest",
    parent: "QA-DA",
    coords: [51.5234, 25.4056],
    name: { de: "Qatof-Waldprojekt", hu: "Qatof Erdőprojekt", ro: "Proiectul Forestier Qatof", en: "Qatof Forest Project" },
    description: { de: "Ein innovatives Aufforstungsprojekt zur Bekämpfung der Wüstenbildung, das künstlich bewässerte Wälder aus dürreresistenten Baumarten in Katar etabliert.", hu: "Egy innovatív erdősítési projekt az elsivatagosodás leküzdésére, amely szárazságtűrő fafajokból álló, mesterségesen öntözött erdőket hoz létre Katarban.", ro: "Un proiect inovator de împădurire pentru combaterea deșertificării, care stabilește păduri irigate artificial din specii de copaci rezistente la secetă în Qatar.", en: "An innovative afforestation project to combat desertification, establishing artificially irrigated forests of drought-resistant tree species in Qatar." },
    facts: {
      de: ["Nutzt recyceltes Wasser zur Bewässerung", "Senkt die lokale Umgebungstemperatur", "Dient der nachhaltigen Entwicklung", "Fördert die Rückkehr von Insektenarten"],
      hu: ["Újrahasznosított vizet használ öntözésre", "Csökkenti a helyi környezeti hőmérsékletet", "A fenntartható fejlődést szolgálja", "Elősegíti a rovarfajok visszatérését"],
      ro: ["Folosește apă reciclată pentru irigare", "Scade temperatura mediului local", "Servește dezvoltării durabile", "Promovează întoarcerea speciilor de insecte"],
      en: ["Uses recycled water for irrigation", "Lowers the local ambient temperature", "Serves sustainable development", "Promotes the return of insect species"]
    }, image: "/poi-images/qa-qatof-forest-nature-v2.webp"},
  {
    id: "qa-abu-nakhla-lake-nature-v2",
    type: "lake",
    parent: "QA-RA",
    coords: [51.4192, 25.1387],
    name: { de: "Abu-Nakhla-See", hu: "Abu Nakhla Tó", ro: "Lacul Abu Nakhla", en: "Abu Nakhla Lake" },
    description: { de: "Ein weiteres wichtiges künstliches Feuchtgebietssytem nahe Doha, das durch aufbereitetes Wasser gespeist wird und zu einem überraschend artenreichen Lebensraum erblüht ist.", hu: "Egy újabb fontos mesterséges vizenyős terület Doha közelében, amelyet tisztított víz táplál, és meglepően fajgazdag élőhellyé virágzott.", ro: "Un alt sistem important de zone umede artificiale lângă Doha, alimentat cu apă tratată și care a înflorit într-un habitat surprinzător de bogat în specii.", en: "Another important artificial wetland system near Doha, fed by treated water and having bloomed into a surprisingly species-rich habitat." },
    facts: {
      de: ["Mehr als 130 Vogelarten gesichtet", "Trägt zur Biodiversität Katars bei", "Verhindert das Ausbreiten der Wüste", "Bietet einen Zufluchtsort in der Trockenzeit"],
      hu: ["Több mint 130 madárfajt figyeltek meg", "Hozzájárul Katar biológiai sokféleségéhez", "Megakadályozza a sivatag terjedését", "Menedéket nyújt a száraz évszakban"],
      ro: ["Peste 130 de specii de păsări au fost observate", "Contribuie la biodiversitatea din Qatar", "Previne răspândirea deșertului", "Oferă un refugiu în sezonul uscat"],
      en: ["More than 130 bird species sighted", "Contributes to Qatar's biodiversity", "Prevents the spread of the desert", "Provides a sanctuary in the dry season"]
    }
  }
];
