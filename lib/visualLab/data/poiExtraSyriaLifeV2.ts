import type { POI } from "./poi";

export const poiExtraSyriaLifeV2: POI[] = [
  {
    id: "al-thawra-nature-reserve-life-v2",
    type: "wildlife-area",
    parent: "SY-RA",
    coords: [38.5, 35.85],
    name: { de: "Al-Thawra-Naturschutzgebiet", hu: "Al-Thawra Természetvédelmi Terület", ro: "Rezervația Naturală Al-Thawra", en: "Al-Thawra Nature Reserve" },
    description: { de: "Ein bedeutendes Schutzgebiet am Ufer des Assad-Sees, das zahlreiche Vogelarten und eine reiche Flora beheimatet.", hu: "Jelentős védett terület az Aszad-tó partján, amely számos madárfajnak és gazdag növényvilágnak ad otthont.", ro: "O arie protejată importantă pe malul Lacului Assad, care găzduiește numeroase specii de păsări și o floră bogată.", en: "An important protected area on the shores of Lake Assad, home to numerous bird species and rich flora." },
    facts: {
      de: ["Liegt am künstlichen Assad-See.", "Wichtiger Rastplatz für Zugvögel.", "Gegründet zum Schutz der lokalen Artenvielfalt.", "Bietet Lebensraum für Wölfe und Füchse."],
      hu: ["A mesterséges Aszad-tó partján fekszik.", "Fontos pihenőhely a vándormadarak számára.", "A helyi biológiai sokféleség védelmére hozták létre.", "Farkasok és rókák élőhelye."],
      ro: ["Situată pe malul lacului artificial Assad.", "Un loc important de odihnă pentru păsările migratoare.", "Înființată pentru a proteja biodiversitatea locală.", "Oferă habitat pentru lupi și vulpi."],
      en: ["Located on the shores of the artificial Lake Assad.", "An important resting place for migratory birds.", "Established to protect local biodiversity.", "Provides habitat for wolves and foxes."]
    }, image: "/poi-images/al-thawra-nature-reserve-life-v2.webp"},
  {
    id: "tishreen-park-life-v2",
    type: "park",
    parent: "SY-DI",
    coords: [36.275, 33.518],
    name: { de: "Tischrin-Park", hu: "Tishreen Park", ro: "Parcul Tishreen", en: "Tishreen Park" },
    description: { de: "Einer der größten öffentlichen Parks in Damaskus, der eine grüne Oase im Herzen der geschäftigen Hauptstadt bietet.", hu: "Damaszkusz egyik legnagyobb közparkja, amely zöld oázist kínál a nyüzsgő főváros szívében.", ro: "Unul dintre cele mai mari parcuri publice din Damasc, oferind o oază verde în inima capitalei aglomerate.", en: "One of the largest public parks in Damascus, providing a green oasis in the heart of the bustling capital." },
    facts: {
      de: ["Einer der weitläufigsten Parks in Damaskus.", "Beliebter Treffpunkt für Familien.", "Verfügt über weitläufige Rasenflächen und Spielplätze.", "Bietet im Sommer angenehmen Schatten."],
      hu: ["Damaszkusz egyik legkiterjedtebb parkja.", "Népszerű találkozóhely a családok számára.", "Hatalmas pázsitokkal és játszóterekkel rendelkezik.", "Nyáron kellemes árnyékot nyújt."],
      ro: ["Unul dintre cele mai extinse parcuri din Damasc.", "Un loc de întâlnire popular pentru familii.", "Dispune de peluze întinse și locuri de joacă.", "Oferă umbră plăcută în timpul verii."],
      en: ["One of the most extensive parks in Damascus.", "A popular meeting place for families.", "Features extensive lawns and playgrounds.", "Provides pleasant shade during the summer."]
    }, image: "/poi-images/tishreen-park-life-v2.webp"},
  {
    id: "al-shouh-and-al-arz-reserve-life-v2",
    type: "wildlife-area",
    parent: "SY-LA",
    coords: [36.1, 35.6],
    name: { de: "Schuh- und Arz-Naturschutzgebiet", hu: "Al-Shouh és Al-Arz Természetvédelmi Terület", ro: "Rezervația Al-Shouh și Al-Arz", en: "Al-Shouh and Al-Arz Nature Reserve" },
    description: { de: "Ein geschütztes Waldgebiet in den syrischen Küstengebirgen, das für seine alten Zedern- und Tannenbestände bekannt ist.", hu: "Védett erdőterület a szíriai partvidéki hegységben, amely ősi cédrus- és fenyőállományairól ismert.", ro: "O zonă forestieră protejată în Munții de Coastă sirieni, cunoscută pentru populațiile sale vechi de cedru și brad.", en: "A protected forest area in the Syrian Coastal Mountains, known for its ancient cedar and fir populations." },
    facts: {
      de: ["Beherbergt die bedrohte Kilikische Tanne.", "Schützt einige der letzten Zedernwälder Syriens.", "Wichtig für den Erhalt seltener Vogelarten.", "Beliebt für ökologische Forschung."],
      hu: ["A veszélyeztetett kilikiai jegenyefenyő otthona.", "Szíria utolsó cédruserdeinek egy részét védi.", "Fontos a ritka madárfajok megőrzése szempontjából.", "Népszerű ökológiai kutatások célpontja."],
      ro: ["Găzduiește bradul cilicic aflat pe cale de dispariție.", "Protejează unele dintre ultimele păduri de cedru din Siria.", "Importantă pentru conservarea speciilor rare de păsări.", "Populară pentru cercetarea ecologică."],
      en: ["Home to the endangered Cilician fir.", "Protects some of Syria's last cedar forests.", "Important for the conservation of rare bird species.", "Popular for ecological research."]
    }, image: "/poi-images/al-shouh-and-al-arz-reserve-life-v2.webp"},
  {
    id: "ghab-plain-life-v2",
    type: "agriculture",
    parent: "SY-HM",
    coords: [36.35, 35.6],
    name: { de: "Ghab-Ebene", hu: "Ghab-síkság", ro: "Câmpia Ghab", en: "Ghab Plain" },
    description: { de: "Eine sehr fruchtbare landwirtschaftliche Region, die durch die Trockenlegung von Sumpfgebieten am Orontes-Fluss entstand.", hu: "Nagyon termékeny mezőgazdasági régió, amely az Orontész folyó melletti mocsarak lecsapolásával jött létre.", ro: "O regiune agricolă foarte fertilă, creată prin drenarea mlaștinilor de-a lungul râului Orontes.", en: "A highly fertile agricultural region created by draining swamps along the Orontes River." },
    facts: {
      de: ["Früher ein ausgedehntes Sumpfgebiet.", "Wurde Mitte des 20. Jahrhunderts trockengelegt.", "Produziert Weizen, Baumwolle und Zuckerrüben.", "Ein wichtiges Zentrum der syrischen Landwirtschaft."],
      hu: ["Korábban egy kiterjedt mocsárvidék volt.", "A 20. század közepén csapolták le.", "Búzát, pamutot és cukorrépát termesztenek itt.", "A szíriai mezőgazdaság fontos központja."],
      ro: ["Anterior a fost o zonă mlăștinoasă extinsă.", "A fost drenată la mijlocul secolului al XX-lea.", "Produce grâu, bumbac și sfeclă de zahăr.", "Un centru important al agriculturii siriene."],
      en: ["Formerly an extensive swamp area.", "Was drained in the mid-20th century.", "Produces wheat, cotton, and sugar beets.", "An important center of Syrian agriculture."]
    }, image: "/poi-images/ghab-plain-life-v2.webp"},
  {
    id: "sabkhat-al-jabbul-life-v2",
    type: "wildlife-area",
    parent: "SY-HL",
    coords: [37.5, 35.75],
    name: { de: "Dschabbul-Salzsee", hu: "Jabbul-sóstó", ro: "Lacul Jabbul", en: "Sabkhat al-Jabbul" },
    description: { de: "Ein bedeutendes Feuchtgebiet und Salzsee südöstlich von Aleppo, das als wichtiges Überwinterungsgebiet für Flamingos dient.", hu: "Egy jelentős vizes élőhely és sóstó Aleppótól délkeletre, amely fontos telelőhely a flamingók számára.", ro: "O zonă umedă importantă și un lac sărat la sud-est de Alep, care servește drept zonă de iernare pentru flamingo.", en: "An important wetland and salt lake southeast of Aleppo, serving as a major wintering ground for flamingos." },
    facts: {
      de: ["Einer der größten natürlichen Salzseen Syriens.", "Beherbergt im Winter Tausende Rosaflamingos.", "Wichtiges Ramsar-Schutzgebiet.", "Die Salinen werden auch wirtschaftlich genutzt."],
      hu: ["Szíria egyik legnagyobb természetes sóstava.", "Télen több ezer rózsás flamingónak ad otthont.", "Jelentős Ramsari terület.", "A sólepárlókat gazdaságilag is hasznosítják."],
      ro: ["Unul dintre cele mai mari lacuri sărate naturale din Siria.", "Găzduiește mii de flamingo roz în timpul iernii.", "Zonă umedă de importanță internațională Ramsar.", "Bazinele de sare sunt, de asemenea, exploatate economic."],
      en: ["One of the largest natural salt lakes in Syria.", "Hosts thousands of greater flamingos in winter.", "An important Ramsar wetland site.", "The salt pans are also used economically."]
    }, image: "/poi-images/sabkhat-al-jabbul-life-v2.webp"},
  {
    id: "fronloq-forest-life-v2",
    type: "wildlife-area",
    parent: "SY-LA",
    coords: [36.05, 35.85],
    name: { de: "Fronloq-Wald", hu: "Fronloq-erdő", ro: "Pădurea Fronloq", en: "Fronloq Forest" },
    description: { de: "Ein malerisches Waldgebiet nahe der türkischen Grenze, dominiert von Eichen- und Kiefernbeständen.", hu: "Festői erdőterület a török határ közelében, ahol tölgy- és fenyőállományok dominálnak.", ro: "O zonă forestieră pitorească aproape de granița cu Turcia, dominată de populații de stejar și pin.", en: "A picturesque forest area near the Turkish border, dominated by oak and pine populations." },
    facts: {
      de: ["Bekannt für seine dichten Kiefernwälder.", "Bietet wichtige Rückzugsorte für wilde Tiere.", "Gefährdet durch Waldbrände im Sommer.", "Ein beliebtes Ziel für Naturbeobachter."],
      hu: ["Sűrű fenyőerdeiről ismert.", "Fontos menedékhely a vadon élő állatok számára.", "A nyári erdőtüzek veszélyeztetik.", "A természetmegfigyelők népszerű célpontja."],
      ro: ["Cunoscută pentru pădurile sale dense de pini.", "Oferă refugii importante pentru animalele sălbatice.", "Amenințată de incendiile forestiere în timpul verii.", "O destinație populară pentru observatorii naturii."],
      en: ["Known for its dense pine forests.", "Provides important refuges for wild animals.", "Threatened by summer forest fires.", "A popular destination for nature watchers."]
    }, image: "/poi-images/fronloq-forest-life-v2.webp"},
  {
    id: "aleppo-public-park-life-v2",
    type: "park",
    parent: "SY-HL",
    coords: [37.147, 36.211],
    name: { de: "Stadtpark von Aleppo", hu: "Aleppói Városliget", ro: "Parcul Public din Alep", en: "Aleppo Public Park" },
    description: { de: "Eine historische Grünanlage in Aleppo, die den Bewohnern einen ruhigen Ort zur Erholung vom städtischen Leben bietet.", hu: "Történelmi zöldterület Aleppóban, amely békés helyet kínál a lakosoknak a városi élettől való kikapcsolódásra.", ro: "Un spațiu verde istoric în Alep, care oferă locuitorilor un loc liniștit de relaxare departe de viața urbană.", en: "A historic green space in Aleppo that offers residents a peaceful place to relax from urban life." },
    facts: {
      de: ["Der größte öffentliche Park in Aleppo.", "Verfügt über prächtige Brunnenanlagen.", "Wurde im 20. Jahrhundert angelegt.", "Ein Ort für kulturelle Veranstaltungen im Freien."],
      hu: ["Aleppó legnagyobb közparkja.", "Pompás szökőkutakkal rendelkezik.", "A 20. században alakították ki.", "Szabadtéri kulturális rendezvények helyszíne."],
      ro: ["Cel mai mare parc public din Alep.", "Are fântâni arteziene magnifice.", "A fost amenajat în secolul al XX-lea.", "Un loc pentru evenimente culturale în aer liber."],
      en: ["The largest public park in Aleppo.", "Features magnificent fountains.", "Was established in the 20th century.", "A venue for outdoor cultural events."]
    }, image: "/poi-images/aleppo-public-park-life-v2.webp"},
  {
    id: "happy-land-park-life-v2",
    type: "kid-friendly",
    parent: "SY-RD",
    coords: [36.38, 33.45],
    name: { de: "Happy Land Vergnügungspark", hu: "Happy Land Vidámpark", ro: "Parcul de Distracții Happy Land", en: "Happy Land Amusement Park" },
    description: { de: "Ein beliebter Vergnügungspark in der Nähe von Damaskus, der Familien eine Vielzahl von Fahrgeschäften und Attraktionen bietet.", hu: "Népszerű vidámpark Damaszkusz közelében, amely a családoknak számos hullámvasutat és látványosságot kínál.", ro: "Un parc de distracții popular lângă Damasc, care oferă familiilor o varietate de atracții și carusele.", en: "A popular amusement park near Damascus that offers families a variety of rides and attractions." },
    facts: {
      de: ["Befindet sich an der Flughafenstraße von Damaskus.", "Bietet Achterbahnen und Riesenräder.", "Ein beliebtes Ausflugsziel an Wochenenden.", "Zieht Besucher aus dem ganzen Umland an."],
      hu: ["A damaszkuszi repülőtérhez vezető úton található.", "Hullámvasutak és óriáskerekek is vannak itt.", "Népszerű hétvégi kirándulóhely.", "A környék minden részéből vonzza a látogatókat."],
      ro: ["Situat pe drumul spre aeroportul din Damasc.", "Oferă montagne russe și roți panoramice.", "O destinație populară pentru ieșirile de weekend.", "Atrage vizitatori din întreaga regiune înconjurătoare."],
      en: ["Located on the Damascus airport road.", "Offers roller coasters and Ferris wheels.", "A popular weekend excursion destination.", "Attracts visitors from all over the surrounding region."]
    }, image: "/poi-images/happy-land-park-life-v2.webp"},
  {
    id: "al-jazira-cotton-fields-life-v2",
    type: "agriculture",
    parent: "SY-HA",
    coords: [40.75, 36.5],
    name: { de: "Baumwollfelder der Dschazira", hu: "Dzsazíra pamutmezők", ro: "Câmpurile de Bumbac Al-Jazira", en: "Al-Jazira Cotton Fields" },
    description: { de: "Die weitläufigen landwirtschaftlichen Flächen in Nordostsyrien, die traditionell das Herz der syrischen Baumwollproduktion bilden.", hu: "Kiterjedt mezőgazdasági területek Északkelet-Szíriában, amelyek hagyományosan a szíriai pamuttermelés szívét alkotják.", ro: "Zonele agricole extinse din nord-estul Siriei, care formează în mod tradițional inima producției de bumbac siriene.", en: "The extensive agricultural areas in northeastern Syria, which traditionally form the heart of Syrian cotton production." },
    facts: {
      de: ["Syrien war einst einer der Top-Baumwollexporteure.", "Die Dschazira-Region ist der Korn- und Baumwollspeicher des Landes.", "Bewässert durch Nebenflüsse des Euphrat.", "Wichtig für die lokale Textilindustrie."],
      hu: ["Szíria egykor az egyik vezető pamutexportőr volt.", "A Dzsazíra-régió az ország gabona- és pamutraktára.", "Az Eufrátesz mellékfolyói öntözik.", "Fontos a helyi textilipar számára."],
      ro: ["Siria a fost odată unul dintre principalii exportatori de bumbac.", "Regiunea Al-Jazira este grânarul și centrul bumbacului din țară.", "Irigată de afluenții fluviului Eufrat.", "Importantă pentru industria textilă locală."],
      en: ["Syria was once one of the top cotton exporters.", "The Al-Jazira region is the breadbasket and cotton center of the country.", "Irrigated by tributaries of the Euphrates.", "Important for the local textile industry."]
    }, image: "/poi-images/al-jazira-cotton-fields-life-v2.webp"},
  {
    id: "ghouta-oasis-life-v2",
    type: "agriculture",
    parent: "SY-RD",
    coords: [36.4, 33.5],
    name: { de: "Ghouta-Oase", hu: "Gúta-oázis", ro: "Oaza Ghouta", en: "Ghouta Oasis" },
    description: { de: "Ein historisch reiches Landwirtschaftsgebiet rund um Damaskus, das die Stadt seit Jahrtausenden mit Obst und Gemüse versorgt.", hu: "Történelmileg gazdag mezőgazdasági terület Damaszkusz körül, amely évezredek óta gyümölccsel és zöldséggel látja el a várost.", ro: "O zonă agricolă bogată istoric în jurul Damascului, care aprovizionează orașul cu fructe și legume de milenii.", en: "A historically rich agricultural area around Damascus that has supplied the city with fruit and vegetables for millennia." },
    facts: {
      de: ["Wird vom Fluss Barada bewässert.", "Berühmt für ihre Aprikosen- und Olivenbäume.", "Bildet einen grünen Gürtel um die Hauptstadt.", "Ein Symbol des landwirtschaftlichen Erbes Syriens."],
      hu: ["A Barada folyó öntözi.", "Híres a sárgabarack- és olajfáiról.", "Zöld övet alkot a főváros körül.", "A szíriai mezőgazdasági örökség szimbóluma."],
      ro: ["Este irigată de râul Barada.", "Renumită pentru caișii și măslinii săi.", "Formează o centură verde în jurul capitalei.", "Un simbol al patrimoniului agricol sirian."],
      en: ["Irrigated by the Barada River.", "Famous for its apricot and olive trees.", "Forms a green belt around the capital.", "A symbol of Syria's agricultural heritage."]
    }, image: "/poi-images/ghouta-oasis-life-v2.webp"},
  {
    id: "lattakia-citrus-orchards-life-v2",
    type: "agriculture",
    parent: "SY-LA",
    coords: [35.9, 35.5],
    name: { de: "Zitrusgärten von Latakia", hu: "Latakiai citrusligetek", ro: "Livezile de Citrice din Latakia", en: "Lattakia Citrus Orchards" },
    description: { de: "Die fruchtbaren Ebenen entlang der Mittelmeerküste sind für den Anbau von Orangen, Zitronen und Mandarinen bekannt.", hu: "A Földközi-tenger partvidéke mentén fekvő termékeny síkságok a narancs-, citrom- és mandarintermesztésről ismertek.", ro: "Câmpiile fertile de-a lungul coastei mediteraneene sunt cunoscute pentru cultivarea portocalelor, lămâilor și mandarinelor.", en: "The fertile plains along the Mediterranean coast are known for the cultivation of oranges, lemons, and mandarins." },
    facts: {
      de: ["Produzieren einen Großteil der syrischen Zitrusfrüchte.", "Profitieren vom milden mediterranen Klima.", "Ein wichtiger Wirtschaftsfaktor der Küstenregion.", "Die Erntezeit prägt das lokale Leben im Winter."],
      hu: ["A szíriai citrusfélék nagy részét itt termelik.", "A termelés az enyhe mediterrán klímából profitál.", "A partvidéki régió fontos gazdasági tényezője.", "A betakarítási időszak meghatározza a helyi életet télen."],
      ro: ["Produc o mare parte din citricele siriene.", "Beneficiază de clima mediteraneană blândă.", "Un factor economic important al regiunii de coastă.", "Sezonul de recoltare modelează viața locală iarna."],
      en: ["Produce a large part of Syrian citrus fruits.", "Benefit from the mild Mediterranean climate.", "An important economic factor of the coastal region.", "The harvest season shapes local life in winter."]
    }, image: "/poi-images/lattakia-citrus-orchards-life-v2.webp"},
  {
    id: "tartus-olive-groves-life-v2",
    type: "agriculture",
    parent: "SY-TA",
    coords: [36.0, 34.9],
    name: { de: "Olivenhaine von Tartus", hu: "Tartúszi olajfaligetek", ro: "Livezile de Măslini din Tartus", en: "Tartus Olive Groves" },
    description: { de: "Die Hügel und Ebenen im Gouvernement Tartus sind mit jahrhundertealten Olivenbäumen bedeckt, die hochwertiges Öl liefern.", hu: "A Tartúsz kormányzóság dombjait és síkságait évszázados olajfák borítják, amelyek kiváló minőségű olajat adnak.", ro: "Dealurile și câmpiile din guvernoratul Tartus sunt acoperite cu măslini vechi de secole, care oferă ulei de înaltă calitate.", en: "The hills and plains in the Tartus Governorate are covered with centuries-old olive trees that provide high-quality oil." },
    facts: {
      de: ["Syrien ist historisch einer der größten Olivenölproduzenten.", "Einige Bäume sind Hunderte von Jahren alt.", "Die Olivenernte ist ein wichtiges Gemeinschaftsereignis.", "Olivenöl ist zentral für die lokale Küche."],
      hu: ["Szíria történelmileg az egyik legnagyobb olívaolaj-termelő.", "Néhány fa több száz éves.", "Az olajbogyó-betakarítás fontos közösségi esemény.", "Az olívaolaj a helyi konyha központi eleme."],
      ro: ["Siria este istoric unul dintre cei mai mari producători de ulei de măsline.", "Unii copaci au sute de ani vechime.", "Recoltarea măslinelor este un eveniment comunitar important.", "Uleiul de măsline este central în bucătăria locală."],
      en: ["Syria is historically one of the largest olive oil producers.", "Some trees are hundreds of years old.", "The olive harvest is an important community event.", "Olive oil is central to the local cuisine."]
    }
  },
  {
    id: "al-adawi-zoo-life-v2",
    type: "kid-friendly",
    parent: "SY-DI",
    coords: [36.31, 33.53],
    name: { de: "Al-Adawi-Zoo", hu: "Al-Adawi Állatkert", ro: "Grădina Zoologică Al-Adawi", en: "Al-Adawi Zoo" },
    description: { de: "Ein städtischer Zoo in Damaskus, der ein beliebtes Ausflugsziel für Schulklassen und Familien mit Kindern ist.", hu: "Városi állatkert Damaszkuszban, amely az iskolai osztályok és a gyerekes családok népszerű kirándulóhelye.", ro: "O grădină zoologică urbană din Damasc, care este o destinație populară pentru ieșirile școlare și familiile cu copii.", en: "An urban zoo in Damascus that is a popular excursion destination for school classes and families with children." },
    facts: {
      de: ["Beherbergt einheimische und exotische Tiere.", "Bietet Bildungsangebote für Kinder.", "Verfügt über angelegte Gärten und Picknickplätze.", "Ein Ort zur Bewusstseinsbildung für den Tierschutz."],
      hu: ["Hazai és egzotikus állatoknak is otthont ad.", "Oktatási programokat kínál gyerekeknek.", "Parkosított kertekkel és piknikezőhelyekkel rendelkezik.", "Az állatvédelmi tudatosság növelésének helyszíne."],
      ro: ["Găzduiește animale native și exotice.", "Oferă programe educaționale pentru copii.", "Are grădini amenajate și zone de picnic.", "Un loc pentru creșterea gradului de conștientizare privind protecția animalelor."],
      en: ["Houses native and exotic animals.", "Offers educational programs for children.", "Features landscaped gardens and picnic areas.", "A place to raise awareness for animal protection."]
    }, image: "/poi-images/al-adawi-zoo-life-v2.webp"},
  {
    id: "abu-qubays-protected-area-life-v2",
    type: "wildlife-area",
    parent: "SY-HM",
    coords: [36.28, 35.24],
    name: { de: "Naturschutzgebiet Abu Qubais", hu: "Abu Qubais Védett Terület", ro: "Aria Protejată Abu Qubays", en: "Abu Qubays Protected Area" },
    description: { de: "Ein Bergreservat im Küstengebirge, das alte Wälder, Wasserfälle und eine reiche Artenvielfalt umfasst.", hu: "Hegyvidéki rezervátum a partvidéki hegységben, amely öreg erdőket, vízeséseket és gazdag biológiai sokféleséget foglal magában.", ro: "O rezervație montană în Munții de Coastă, care cuprinde păduri seculare, cascade și o biodiversitate bogată.", en: "A mountain reserve in the Coastal Mountains, encompassing old forests, waterfalls, and rich biodiversity." },
    facts: {
      de: ["Schützt dichte Eichen- und Kiefernwälder.", "Heimat von Wildschweinen und verschiedenen Greifvögeln.", "Zeichnet sich durch tiefe Täler aus.", "Ideal für Wandern und Naturerkundung."],
      hu: ["Sűrű tölgy- és fenyőerdőket véd.", "Vaddisznók és különféle ragadozó madarak otthona.", "Mély völgyek jellemzik.", "Ideális túrázásra és természetjárásra."],
      ro: ["Protejează păduri dense de stejar și pin.", "Cămin al porcilor mistreți și al diverselor păsări de pradă.", "Se caracterizează prin văi adânci.", "Ideală pentru drumeții și explorarea naturii."],
      en: ["Protects dense oak and pine forests.", "Home to wild boars and various birds of prey.", "Characterized by deep valleys.", "Ideal for hiking and nature exploration."]
    }, image: "/poi-images/abu-qubays-protected-area-life-v2.webp"},
  {
    id: "al-sabil-park-life-v2",
    type: "park",
    parent: "SY-HL",
    coords: [37.135, 36.215],
    name: { de: "Al-Sabil-Park", hu: "Al-Szabíl Park", ro: "Parcul Al-Sabil", en: "Al-Sabil Park" },
    description: { de: "Einer der ältesten und bekanntesten Parks in Aleppo, der für seine großen Wasserbecken und schattigen Alleen berühmt ist.", hu: "Aleppó egyik legrégebbi és legismertebb parkja, amely nagy medencéiről és árnyékos sétányairól híres.", ro: "Unul dintre cele mai vechi și cunoscute parcuri din Alep, faimos pentru bazinele sale mari de apă și aleile umbrite.", en: "One of the oldest and best-known parks in Aleppo, famous for its large water basins and shaded avenues." },
    facts: {
      de: ["Eröffnet in der Mitte des 20. Jahrhunderts.", "Benannt nach einem öffentlichen Brunnen (Sabil).", "Ein beliebter Ort für entspannte Spaziergänge.", "Verfügt über eine reiche botanische Vielfalt."],
      hu: ["A 20. század közepén nyitották meg.", "Egy nyilvános kútról (Sabil) nevezték el.", "Népszerű hely a pihentető sétákhoz.", "Gazdag botanikai sokféleséggel rendelkezik."],
      ro: ["Deschis la mijlocul secolului al XX-lea.", "Numit după o fântână publică (Sabil).", "Un loc popular pentru plimbări relaxante.", "Are o bogată diversitate botanică."],
      en: ["Opened in the mid-20th century.", "Named after a public fountain (Sabil).", "A popular place for relaxing walks.", "Features a rich botanical diversity."]
    }, image: "/poi-images/al-sabil-park-life-v2.webp"},
  {
    id: "al-rastan-farmlands-life-v2",
    type: "agriculture",
    parent: "SY-HI",
    coords: [36.73, 34.92],
    name: { de: "Ackerland von Rastan", hu: "Rasztáni termőföldek", ro: "Terenurile Agricole din Rastan", en: "Al-Rastan Farmlands" },
    description: { de: "Die landwirtschaftlichen Nutzflächen rund um den Rastan-Staudamm, die das Orontes-Tal zu einer produktiven Zone machen.", hu: "A Rasztáni-gát körüli mezőgazdasági területek, amelyek az Orontész-völgyet termékeny övezetté teszik.", ro: "Terenurile agricole din jurul barajului Rastan, care transformă valea Orontesului într-o zonă productivă.", en: "The agricultural land around the Al-Rastan Dam, making the Orontes valley a productive zone." },
    facts: {
      de: ["Bewässert durch das Wasser des Orontes.", "Produziert Weizen, Obst und Gemüse.", "Der Rastan-Staudamm sichert die Wasserversorgung.", "Stark von der lokalen Geographie geprägt."],
      hu: ["Az Orontész vizével öntözik.", "Búzát, gyümölcsöt és zöldséget termesztenek itt.", "A Rasztáni-gát biztosítja a vízellátást.", "A helyi földrajz erősen meghatározza."],
      ro: ["Irigată de apele râului Orontes.", "Produce grâu, fructe și legume.", "Barajul Rastan asigură aprovizionarea cu apă.", "Puternic influențată de geografia locală."],
      en: ["Irrigated by the waters of the Orontes.", "Produces wheat, fruit, and vegetables.", "The Al-Rastan Dam secures the water supply.", "Strongly influenced by the local geography."]
    }
  },
  {
    id: "jabal-al-nabi-matta-life-v2",
    type: "wildlife-area",
    parent: "SY-TA",
    coords: [36.19, 34.95],
    name: { de: "Dschebel Nabi Matta", hu: "Dzsebel Nabi Matta", ro: "Jabal al-Nabi Matta", en: "Jabal al-Nabi Matta" },
    description: { de: "Ein bewaldetes Berggebiet, das für seine natürliche Schönheit und als Lebensraum für zahlreiche Tier- und Pflanzenarten geschätzt wird.", hu: "Erdős hegyvidék, amelyet természeti szépségéért és számos állat- és növényfaj élőhelyeként értékelnek.", ro: "O zonă montană împădurită, apreciată pentru frumusețea sa naturală și ca habitat pentru numeroase specii de animale și plante.", en: "A forested mountainous area valued for its natural beauty and as a habitat for numerous animal and plant species." },
    facts: {
      de: ["Bietet spektakuläre Ausblicke auf die Küste.", "Wichtiger Standort für den Ökotourismus.", "Teil des syrischen Küstengebirges.", "Beherbergt seltene mediterrane Pflanzen."],
      hu: ["Látványos kilátást nyújt a partvidékre.", "Az ökoturizmus fontos helyszíne.", "A szíriai partvidéki hegység része.", "Ritka mediterrán növényeknek ad otthont."],
      ro: ["Oferă vederi spectaculoase spre coastă.", "O locație importantă pentru ecoturism.", "Parte a Munților de Coastă sirieni.", "Găzduiește plante mediteraneene rare."],
      en: ["Offers spectacular views of the coast.", "An important location for ecotourism.", "Part of the Syrian Coastal Mountains.", "Home to rare Mediterranean plants."]
    }, image: "/poi-images/jabal-al-nabi-matta-life-v2.webp"},
  {
    id: "al-jalaa-park-life-v2",
    type: "park",
    parent: "SY-DI",
    coords: [36.26, 33.5],
    name: { de: "Al-Dschalaa-Park", hu: "Al-Dzsalaa Park", ro: "Parcul Al-Jalaa", en: "Al-Jalaa Park" },
    description: { de: "Ein bekannter Sport- und Freizeitpark in Damaskus, der Einrichtungen für verschiedene Aktivitäten im Freien bietet.", hu: "Ismert sport- és szabadidőpark Damaszkuszban, amely különféle szabadtéri tevékenységekhez kínál létesítményeket.", ro: "Un cunoscut parc sportiv și de agrement din Damasc, care oferă facilități pentru diverse activități în aer liber.", en: "A well-known sports and leisure park in Damascus, providing facilities for various outdoor activities." },
    facts: {
      de: ["Verfügt über Tennisplätze und Schwimmbecken.", "Wird häufig für sportliche Wettkämpfe genutzt.", "Ein beliebter Treffpunkt für junge Leute.", "Kombiniert Grünflächen mit Sportanlagen."],
      hu: ["Teniszpályákkal és úszómedencékkel is rendelkezik.", "Gyakran használják sportversenyekre.", "A fiatalok népszerű találkozóhelye.", "Zöldterületeket kombinál sportlétesítményekkel."],
      ro: ["Dispune de terenuri de tenis și piscine.", "Adesea folosit pentru competiții sportive.", "Un punct de întâlnire popular pentru tineri.", "Combină spațiile verzi cu facilitățile sportive."],
      en: ["Features tennis courts and swimming pools.", "Often used for sports competitions.", "A popular meeting place for young people.", "Combines green spaces with sports facilities."]
    }, image: "/poi-images/al-jalaa-park-life-v2.webp"},
  {
    id: "hawran-wheat-fields-life-v2",
    type: "agriculture",
    parent: "SY-DR",
    coords: [36.1, 32.7],
    name: { de: "Weizenfelder von Hauran", hu: "Hauráni búzamezők", ro: "Câmpurile de Grâu din Hawran", en: "Hawran Wheat Fields" },
    description: { de: "Die fruchtbare Vulkanerde der Hauran-Ebene im Süden Syriens ist seit der Antike für ihren ertragreichen Weizenanbau bekannt.", hu: "Dél-Szíriában a Haurán-síkság termékeny vulkanikus talaja az ókor óta ismert a bőséges búzatermelésről.", ro: "Solul vulcanic fertil al Câmpiei Hawran din sudul Siriei a fost cunoscut încă din antichitate pentru cultivarea abundentă a grâului.", en: "The fertile volcanic soil of the Hawran plain in southern Syria has been known since antiquity for its abundant wheat cultivation." },
    facts: {
      de: ["War einst die Kornkammer des Römischen Reiches.", "Produziert einen hochgeschätzten Hartweizen.", "Der Anbau ist stark vom winterlichen Regen abhängig.", "Die Region ist vulkanischen Ursprungs."],
      hu: ["Egykor a Római Birodalom magtára volt.", "Nagyra értékelt durumbúzát termelnek itt.", "A termesztés nagymértékben függ a téli esőzésektől.", "A régió vulkanikus eredetű."],
      ro: ["A fost odată grânarul Imperiului Roman.", "Produce un grâu dur foarte apreciat.", "Cultivarea depinde puternic de ploile de iarnă.", "Regiunea este de origine vulcanică."],
      en: ["Was once the breadbasket of the Roman Empire.", "Produces a highly prized durum wheat.", "Cultivation heavily depends on winter rains.", "The region is of volcanic origin."]
    }, image: "/poi-images/hawran-wheat-fields-life-v2.webp"},
  {
    id: "al-riyadeh-park-life-v2",
    type: "park",
    parent: "SY-LA",
    coords: [35.78, 35.52],
    name: { de: "Al-Riyadeh-Park", hu: "Al-Riyadeh Park", ro: "Parcul Al-Riyadeh", en: "Al-Riyadeh Park" },
    description: { de: "Ein städtischer Park in der Küstenstadt Latakia, der Erholung und Freizeitaktivitäten in Meeresnähe bietet.", hu: "Városi park Latakia tengerparti városában, amely pihenési és szabadidős tevékenységeket kínál a tenger közelében.", ro: "Un parc urban în orașul de coastă Latakia, oferind recreere și activități de agrement în apropierea mării.", en: "An urban park in the coastal city of Latakia, offering recreation and leisure activities near the sea." },
    facts: {
      de: ["Befindet sich im Stadtzentrum von Latakia.", "Ein beliebter Ort für familiäre Zusammenkünfte.", "Bietet schattige Plätze unter Palmen.", "Stark in das städtische Leben integriert."],
      hu: ["Latakia városközpontjában található.", "Népszerű hely a családi összejövetelekhez.", "Árnyékos helyeket kínál a pálmafák alatt.", "Erősen beépült a városi életbe."],
      ro: ["Situat în centrul orașului Latakia.", "Un loc popular pentru adunările de familie.", "Oferă locuri umbrite sub palmieri.", "Puternic integrat în viața urbană."],
      en: ["Located in the city center of Latakia.", "A popular place for family gatherings.", "Offers shady spots under palm trees.", "Strongly integrated into urban life."]
    }
  }
];
