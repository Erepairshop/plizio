import type { POI } from "./poi";

export const poiExtraYemenNatureV2: POI[] = [
  {
    id: "jabal-an-nabi-shuayb-nature-v2",
    type: "mountain",
    parent: "YE-SN",
    coords: [43.9833, 15.2667],
    name: { de: "Jabal an Nabi Shu'ayb", hu: "Nabi Suajb-hegy", ro: "Muntele Jabal an Nabi Shu'ayb", en: "Jabal an Nabi Shu'ayb" },
    description: {
      de: "Der Jabal an Nabi Shu'ayb ist mit 3.666 Metern der höchste Berg des Jemen und der gesamten Arabischen Halbinsel. Er bietet einen atemberaubenden Blick über die zerklüftete Landschaft in der Region Sanaa.",
      hu: "A 3666 méter magas Nabi Suajb-hegy Jemen és az egész Arab-félsziget legmagasabb pontja. Szanaa régiójában található, és lenyűgöző kilátást nyújt a környező zord hegyvidékre.",
      ro: "Cu o altitudine de 3.666 de metri, Jabal an Nabi Shu'ayb este cel mai înalt munte din Yemen și din întreaga Peninsulă Arabică. Oferă priveliști spectaculoase asupra peisajului accidentat din regiunea Sana'a.",
      en: "At 3,666 meters, Jabal an Nabi Shu'ayb is the highest mountain in Yemen and the entire Arabian Peninsula. Located in the Sanaa region, it offers stunning views of the rugged mountainous landscape."
    },
    facts: {
      de: ["Höchster Gipfel der Arabischen Halbinsel.", "Auf dem Gipfel fällt gelegentlich Schnee.", "Benannt nach dem Propheten Shu'ayb.", "Liegt westlich der Hauptstadt Sanaa."],
      hu: ["Az Arab-félsziget legmagasabb csúcsa.", "A csúcson időnként hó is hullik.", "A hegyet Suajb prófétáról nevezték el.", "A fővárostól, Szanaától nyugatra fekszik."],
      ro: ["Cel mai înalt vârf din Peninsula Arabică.", "Uneori ninge pe culmea muntelui.", "Numit după profetul Shu'ayb.", "Situat la vest de capitala Sana'a."],
      en: ["Highest peak of the Arabian Peninsula.", "Snow occasionally falls on the summit.", "Named after the prophet Shu'ayb.", "Located west of the capital, Sanaa."]
    }, image: "/poi-images/jabal-an-nabi-shuayb-nature-v2.webp"},
  {
    id: "wadi-dawan-nature-v2",
    type: "river",
    parent: "YE-HD",
    coords: [48.3333, 15.2500],
    name: { de: "Wadi Dawan", hu: "Vadi Dawan", ro: "Wadi Dawan", en: "Wadi Dawan" },
    description: {
      de: "Das Wadi Dawan ist ein gewaltiges Talsystem im Hadramaut, das durch seine dramatischen Klippen und oasenartigen Palmenhaine besticht. Durch den Talgrund fließt saisonal ein Fluss, der die jahrhundertealten Siedlungen mit Wasser versorgt.",
      hu: "A Vadi Dawan egy hatalmas völgyrendszer a Hadramaut régióban, amelyet drámai sziklafalak és pálmaligetek ékesítenek. A völgy alján időszakos folyó húzódik, amely évszázados településeket lát el vízzel.",
      ro: "Wadi Dawan este un sistem masiv de văi în Hadhramaut, renumit pentru stâncile sale dramatice și oazele cu palmieri. Un râu sezonier curge la baza văii, susținând așezările vechi de secole cu apă vitală.",
      en: "Wadi Dawan is a massive valley system in Hadhramaut, striking for its dramatic cliffs and oasis-like palm groves. A seasonal river flows through the valley floor, providing vital water to centuries-old settlements."
    },
    facts: {
      de: ["Berühmt für seinen hochwertigen Honig.", "Verfügt über antike Lehmziegeldörfer.", "Umgeben von steilen Canyonwänden.", "Liegt im Osten des Jemen."],
      hu: ["Kiváló minőségű mézéről híres.", "Ősi vályogtéglás falvakkal büszkélkedhet.", "Meredek kanyonfalak veszik körül.", "Jemen keleti részén található."],
      ro: ["Faimos pentru mierea sa de înaltă calitate.", "Prezintă sate antice din cărămidă de lut.", "Înconjurat de pereți abrupți de canion.", "Situat în estul Yemenului."],
      en: ["Famous for its high-quality honey.", "Features ancient mud-brick villages.", "Surrounded by steep canyon walls.", "Located in eastern Yemen."]
    }, image: "/poi-images/wadi-dawan-nature-v2.webp"},
  {
    id: "wadi-hadhramaut-nature-v2",
    type: "river",
    parent: "YE-HD",
    coords: [49.5000, 16.0000],
    name: { de: "Wadi Hadramaut", hu: "Vadi Hadramaut", ro: "Wadi Hadhramaut", en: "Wadi Hadhramaut" },
    description: {
      de: "Das Wadi Hadramaut ist das größte und wichtigste Talsystem der Arabischen Halbinsel. Der gleichnamige saisonale Fluss zieht sich durch eine karge Wüstenlandschaft und schafft eine grüne Lebensader voller fruchtbarer Oasen.",
      hu: "A Vadi Hadramaut az Arab-félsziget legnagyobb és legfontosabb völgyrendszere. Az azonos nevű időszakos folyó egy kopár sivatagi tájon vág keresztül, termékeny oázisok zöld sávját teremtve.",
      ro: "Wadi Hadhramaut este cel mai mare și cel mai important sistem de văi din Peninsula Arabică. Râul sezonier cu același nume traversează un peisaj deșertic arid, creând o linie verde plină de oaze fertile.",
      en: "Wadi Hadhramaut is the largest and most important valley system in the Arabian Peninsula. The seasonal river of the same name cuts through an arid desert landscape, creating a green lifeline full of fertile oases."
    },
    facts: {
      de: ["Das größte Wadi-System der Arabischen Halbinsel.", "Enthält riesige Grundwasserreserven.", "Ermöglicht intensive Landwirtschaft in der Wüste.", "Historisches Zentrum des Weihrauchhandels."],
      hu: ["Az Arab-félsziget legnagyobb vádi rendszere.", "Hatalmas talajvízkészletekkel rendelkezik.", "Intenzív mezőgazdaságot tesz lehetővé a sivatagban.", "A tömjénkereskedelem történelmi központja volt."],
      ro: ["Cel mai mare sistem wadi din Peninsula Arabică.", "Conține rezerve masive de ape subterane.", "Sprijină o agricultură extensivă în deșert.", "Centru istoric al comerțului cu tămâie."],
      en: ["The largest wadi system in the Arabian Peninsula.", "Contains massive groundwater reserves.", "Supports extensive agriculture in the desert.", "Historic center of the frankincense trade."]
    }, image: "/poi-images/wadi-hadhramaut-nature-v2.webp"},
  {
    id: "haraz-mountains-nature-v2",
    type: "mountain",
    parent: "YE-SN",
    coords: [43.7000, 15.0833],
    name: { de: "Haraz-Gebirge", hu: "Haraz-hegység", ro: "Munții Haraz", en: "Haraz Mountains" },
    description: {
      de: "Das Haraz-Gebirge zeichnet sich durch seine steilen, spektakulär terrassierten Hänge und tiefen Schluchten aus. Diese Gebirgslandschaft ist berühmt für ihren Kaffeeanbau und die hoch gelegenen, festungsartigen Dörfer, die förmlich an den Klippen kleben.",
      hu: "A Haraz-hegység meredek, teraszos lejtőiről és mély szurdokairól ismert. Ez a hegyvidéki táj híres a kávétermesztésről és a szinte a sziklákra tapadó, magasan fekvő erődített falvakról.",
      ro: "Munții Haraz sunt cunoscuți pentru pantele lor abrupte, frumos terasate și cheile adânci. Acest peisaj montan este faimos pentru cultivarea cafelei și pentru satele sale fortificate construite la mare altitudine.",
      en: "The Haraz Mountains are distinguished by their steep, spectacularly terraced slopes and deep gorges. This mountainous landscape is famous for coffee cultivation and high-altitude, fortress-like villages clinging to the cliffs."
    },
    facts: {
      de: ["Wichtiges Zentrum für die jemenitische Kaffeeproduktion.", "Verfügt über jahrhundertealte landwirtschaftliche Terrassen.", "Die höchsten Gipfel übersteigen 2.900 Meter.", "Dörfer wurden oft als Festungen gebaut."],
      hu: ["A jemeni kávétermesztés fontos központja.", "Évszázados mezőgazdasági teraszokkal rendelkezik.", "A legmagasabb csúcsok meghaladják a 2900 métert.", "A falvakat gyakran erődítményként építették."],
      ro: ["Centru important pentru producția de cafea din Yemen.", "Prezintă terase agricole vechi de secole.", "Cele mai înalte vârfuri depășesc 2.900 de metri.", "Satele au fost adesea construite ca fortărețe."],
      en: ["Important center for Yemeni coffee production.", "Features centuries-old agricultural terraces.", "The highest peaks exceed 2,900 meters.", "Villages were often built as fortresses."]
    }, image: "/poi-images/haraz-mountains-nature-v2.webp"},
  {
    id: "jabal-sabir-nature-v2",
    type: "mountain",
    parent: "YE-TA",
    coords: [44.0200, 13.5167],
    name: { de: "Jabal Sabir", hu: "Szabir-hegy", ro: "Muntele Jabal Sabir", en: "Jabal Sabir" },
    description: {
      de: "Der majestätische Jabal Sabir überragt die Stadt Taiz und erreicht eine Höhe von über 3.000 Metern. Die fruchtbaren Hänge des Berges sind mit unzähligen Quellen durchzogen und bieten ideale Bedingungen für den Anbau von Qat und Gemüse.",
      hu: "A fenséges Szabir-hegy Taiz városa fölé magasodik, és több mint 3000 méteres magasságot ér el. A hegy termékeny lejtőit számtalan forrás szövi át, ideális feltételeket teremtve a kat és a zöldségek termesztéséhez.",
      ro: "Majestuosul munte Jabal Sabir domină orașul Taiz, atingând o altitudine de peste 3.000 de metri. Pantele sale fertile sunt străbătute de numeroase izvoare, oferind condiții ideale pentru agricultură.",
      en: "The majestic Jabal Sabir towers over the city of Taiz, reaching an altitude of over 3,000 meters. The mountain's fertile slopes are laced with numerous springs, providing ideal conditions for agriculture."
    },
    facts: {
      de: ["Bietet eine malerische Aussicht auf die Stadt Taiz.", "Bekannt für seine vielen natürlichen Wasserquellen.", "Erreicht eine Höhe von rund 3.070 Metern.", "Wichtig für die Landwirtschaft der Region."],
      hu: ["Festői kilátást nyújt Taiz városára.", "Sok természetes vízforrásáról ismert.", "Magassága eléri a mintegy 3070 métert.", "Fontos szerepet játszik a régió mezőgazdaságában."],
      ro: ["Oferă o vedere panoramică asupra orașului Taiz.", "Cunoscut pentru numeroasele sale izvoare naturale.", "Atinge o înălțime de aproximativ 3.070 de metri.", "Vital pentru agricultura din regiune."],
      en: ["Overlooks the city of Taiz.", "Known for its many natural springs.", "Reaches an altitude of around 3,070 meters.", "Vital for the agriculture of the region."]
    }, image: "/poi-images/jabal-sabir-nature-v2.webp"},
  {
    id: "bura-protected-area-nature-v2",
    type: "national-park",
    parent: "YE-HU",
    coords: [43.4333, 14.9333],
    name: { de: "Naturschutzgebiet Bura", hu: "Bura Természetvédelmi Terület", ro: "Rezervația Naturală Bura", en: "Bura Protected Area" },
    description: {
      de: "Das Naturschutzgebiet Bura liegt an den Hängen des Jabal Bura und beherbergt eines der letzten erhaltenen Waldgebiete der Arabischen Halbinsel. Diese üppige, subtropische Oase ist ein Rückzugsort für seltene Vogelarten und Mantelpaviane.",
      hu: "A Bura Természetvédelmi Terület a Bura-hegy lejtőin található, és az Arab-félsziget egyik utolsó megmaradt erdőségét őrzi. Ez a buja, szubtrópusi oázis ritka madárfajok és galléros páviánok menedéke.",
      ro: "Rezervația Naturală Bura se întinde pe pantele Muntelui Bura și protejează una dintre ultimele zone forestiere de pe Peninsula Arabică. Această oază luxuriantă adăpostește specii rare de păsări și babuini Hamadryas.",
      en: "The Bura Protected Area spans the slopes of Jabal Bura and contains one of the last remaining forest tracts in the Arabian Peninsula. This lush, subtropical oasis is a haven for rare birds and Hamadryas baboons."
    },
    facts: {
      de: ["Als UNESCO-Biosphärenreservat registriert.", "Bietet reiche subtropische Vegetation.", "Heimat des Mantelpavians.", "Einer der letzten Urwälder des Jemen."],
      hu: ["UNESCO bioszféra-rezervátumként van nyilvántartva.", "Gazdag szubtrópusi növényzettel rendelkezik.", "A galléros pávián természetes élőhelye.", "Jemen egyik utolsó őserdeje."],
      ro: ["Înregistrată ca rezervație a biosferei UNESCO.", "Oferă o vegetație subtropicală bogată.", "Casa babuinului Hamadryas.", "Una dintre ultimele păduri virgine din Yemen."],
      en: ["Registered as a UNESCO Biosphere Reserve.", "Contains rich subtropical vegetation.", "Home to the Hamadryas baboon.", "One of the last primeval forests in Yemen."]
    }
  },
  {
    id: "detwah-lagoon-nature-v2",
    type: "lake",
    parent: "YE-SU",
    coords: [53.5000, 12.6833],
    name: { de: "Detwah-Lagune", hu: "Detwah-lagúna", ro: "Laguna Detwah", en: "Detwah Lagoon" },
    description: {
      de: "Die Detwah-Lagune auf der Insel Sokotra ist ein atemberaubendes Naturwunder mit blendend weißen Sandbänken und türkisfarbenem Wasser. Diese unberührte Meeresbucht ist ein wichtiges Ökosystem für zahlreiche Meeresbewohner und Rochen.",
      hu: "A Szokotra szigetén található Detwah-lagúna egy lenyűgöző természeti csoda, vakítóan fehér homokpadokkal és türkizkék vízzel. Ez az érintetlen tengeri öböl fontos ökoszisztéma számos tengeri élőlény és rája számára.",
      ro: "Laguna Detwah de pe insula Socotra este o minune naturală uluitoare, cu bancuri de nisip alb orbitor și ape turcoaz. Acest golf neatins este un ecosistem vital pentru viața marină, inclusiv pentru pisici de mare.",
      en: "Detwah Lagoon on Socotra Island is a breathtaking natural wonder with blindingly white sandbanks and turquoise waters. This pristine marine bay is an important ecosystem for marine life, including stingrays."
    },
    facts: {
      de: ["An der Nordwestküste von Sokotra gelegen.", "Ein ausgewiesenes Ramsar-Schutzgebiet.", "Berühmt für seinen weißen Sand und die Rochen.", "Bietet außergewöhnliche Artenvielfalt."],
      hu: ["Szokotra északnyugati partján fekszik.", "Kijelölt Ramsari vadvédelmi terület.", "Fehér homokjáról és a rájákról híres.", "Kivételes tengeri biológiai sokféleséget kínál."],
      ro: ["Situat pe coasta de nord-vest a insulei Socotra.", "O zonă protejată prin convenția Ramsar.", "Faimoasă pentru nisipul alb și pisicile de mare.", "Oferă o biodiversitate marină excepțională."],
      en: ["Located on the northwestern coast of Socotra.", "A designated Ramsar wetland site.", "Famous for its white sand and stingrays.", "Offers exceptional marine biodiversity."]
    }, image: "/poi-images/detwah-lagoon-nature-v2.webp"},
  {
    id: "hajhir-mountains-nature-v2",
    type: "mountain",
    parent: "YE-SU",
    coords: [54.0000, 12.5667],
    name: { de: "Hajhir-Gebirge", hu: "Hadzshir-hegység", ro: "Munții Hajhir", en: "Hajhir Mountains" },
    description: {
      de: "Das raue Hajhir-Gebirge bildet das granitene Rückgrat der Insel Sokotra. Die zerklüfteten Gipfel ragen steil aus dem Inselinneren auf und fangen genügend Feuchtigkeit ein, um endemische Pflanzenarten wie den Drachenblutbaum zu ernähren.",
      hu: "A zord Hadzshir-hegység alkotja Szokotra szigetének gránit gerincét. A csipkézett csúcsok meredeken emelkednek ki a sziget belsejéből, és elegendő nedvességet kötnek meg az endemikus növények, például a sárkányvérfa táplálásához.",
      ro: "Munții accidentați Hajhir formează coloana vertebrală de granit a insulei Socotra. Vârfurile ascuțite se ridică abrupt și captează suficientă umiditate pentru a susține plante endemice, precum arborele sângele dragonului.",
      en: "The rugged Hajhir Mountains form the granite backbone of Socotra Island. The jagged peaks rise steeply from the interior, capturing enough moisture to sustain endemic flora like the dragon's blood tree."
    },
    facts: {
      de: ["Der höchste Gipfel ist Mashanig mit über 1.500 Metern.", "Besteht hauptsächlich aus altem Granitgestein.", "Häufig von dichtem Nebel und Wolken umhüllt.", "Schafft ein einzigartiges Mikroklima auf der Insel."],
      hu: ["Legmagasabb csúcsa a Mashanig, több mint 1500 méterrel.", "Főként ősi gránitkőzetből áll.", "Gyakran sűrű köd és felhők borítják.", "Egyedülálló mikroklímát hoz létre a szigeten."],
      ro: ["Cel mai înalt vârf este Mashanig, la peste 1.500 de metri.", "Compus în principal din rocă de granit antică.", "Frecvent învăluit de ceață densă și nori.", "Creează un microclimat unic pe insulă."],
      en: ["The highest peak is Mashanig at over 1,500 meters.", "Composed mainly of ancient granite rock.", "Frequently shrouded in dense mist and clouds.", "Creates a unique microclimate on the island."]
    }, image: "/poi-images/hajhir-mountains-nature-v2.webp"},
  {
    id: "wadi-dirhur-nature-v2",
    type: "river",
    parent: "YE-SU",
    coords: [53.9833, 12.4833],
    name: { de: "Wadi Dirhur", hu: "Vadi Dirhur", ro: "Wadi Dirhur", en: "Wadi Dirhur" },
    description: {
      de: "Das Wadi Dirhur auf Sokotra ist eine dramatische, steile Kalksteinschucht. Am Grund der Schlucht schlängelt sich ein Süßwasserbach, der kleine Wasserbecken bildet, die von seltenen Wüstenrosen und Flaschenbäumen umgeben sind.",
      hu: "A szokotrai Vadi Dirhur egy drámai, meredek mészkőszurdok. A szurdok mélyén édesvizű patak kanyarog, apró medencéket hozva létre, amelyeket ritka sivatagi rózsák és palackfák vesznek körül.",
      ro: "Wadi Dirhur din Socotra este un canion de calcar spectaculos și abrupt. Un pârâu cu apă dulce curge pe fundul defileului, formând mici piscine naturale înconjurate de trandafiri ai deșertului și arbori sticlă.",
      en: "Wadi Dirhur on Socotra is a dramatic, steep-sided limestone canyon. A freshwater stream winds along the canyon floor, creating small pools surrounded by rare desert roses and bottle trees."
    },
    facts: {
      de: ["Fällt tief in das Kalksteinplateau von Sokotra ab.", "Verfügt über tiefe, kühle Süßwasserbecken.", "Flankiert von einzigartiger endemischer Flora.", "Ein Paradies für Naturliebhaber und Wanderer."],
      hu: ["Mélyen belevág a szokotrai mészkőfennsíkba.", "Mély és hűs édesvízi medencékkel rendelkezik.", "Egyedülálló endemikus növényvilág szegélyezi.", "A természetkedvelők és túrázók paradicsoma."],
      ro: ["Coboară adânc în platoul de calcar din Socotra.", "Prezintă piscine adânci și reci cu apă dulce.", "Flancat de o floră endemică unică.", "Un paradis pentru iubitorii de natură și drumeții."],
      en: ["Plunges deep into the limestone plateau of Socotra.", "Features deep, cool freshwater pools.", "Flanked by unique endemic flora.", "A paradise for nature lovers and hikers."]
    }, image: "/poi-images/wadi-dirhur-nature-v2.webp"},
  {
    id: "homhil-protected-area-nature-v2",
    type: "national-park",
    parent: "YE-SU",
    coords: [54.3000, 12.5667],
    name: { de: "Naturschutzgebiet Homhil", hu: "Homhil Természetvédelmi Terület", ro: "Rezervația Naturală Homhil", en: "Homhil Protected Area" },
    description: {
      de: "Das Homhil-Plateau auf Sokotra ist ein atemberaubendes Naturschutzgebiet, das für seine hohe Dichte an Weihrauch- und Drachenblutbäumen bekannt ist. Ein natürlicher Infinity-Pool bietet Ausblicke auf das glitzernde Arabische Meer.",
      hu: "A szokotrai Homhil-fennsík lenyűgöző természetvédelmi terület, amely tömjénfák és sárkányvérfák sűrű állományáról ismert. A területen található egy természetes végtelenített medence, kilátással az Arab-tengerre.",
      ro: "Platoul Homhil din Socotra este o rezervație naturală uimitoare, cunoscută pentru densitatea mare de arbori de tămâie și sângele dragonului. O piscină naturală de tip infinit oferă vederi spre Marea Arabiei.",
      en: "The Homhil Plateau on Socotra is a stunning protected area known for its high density of frankincense and dragon's blood trees. A natural infinity pool at the edge offers views down to the Arabian Sea."
    },
    facts: {
      de: ["Reich an duftenden Weihrauchbäumen.", "Beherbergt ein berühmtes natürliches Felsenbecken.", "Bietet einen Panoramablick auf die Küstenebene.", "Ein Hotspot der Biodiversität auf Sokotra."],
      hu: ["Illatos tömjénfákban gazdag terület.", "Egy híres természetes sziklamedencének ad otthont.", "Panorámás kilátást nyújt a tengerparti síkságra.", "A biodiverzitás egyik forrópontja Szokotrán."],
      ro: ["Zonă bogată în arbori parfumați de tămâie.", "Găzduiește o faimoasă piscină naturală în stâncă.", "Oferă vederi panoramice asupra câmpiei de coastă.", "Un punct fierbinte al biodiversității pe insula Socotra."],
      en: ["Rich in fragrant frankincense trees.", "Contains a famous natural rock pool.", "Offers panoramic views of the coastal plain.", "A biodiversity hotspot on Socotra island."]
    }, image: "/poi-images/homhil-protected-area-nature-v2.webp"},
  {
    id: "hawf-protected-area-nature-v2",
    type: "national-park",
    parent: "YE-MR",
    coords: [53.0333, 16.6333],
    name: { de: "Naturschutzgebiet Hawf", hu: "Hawf Természetvédelmi Terület", ro: "Rezervația Naturală Hawf", en: "Hawf Protected Area" },
    description: {
      de: "Das Naturschutzgebiet Hawf in der Mahra-Region gleicht in den Monsunmonaten einem grünen Paradies. Die feuchten Küstenberge verwandeln sich in einen üppigen Dschungel, der Leoparden, Wölfen und einer reichen Vogelwelt Lebensraum bietet.",
      hu: "A Mahra régióban fekvő Hawf Természetvédelmi Terület a monszun hónapokban zöldellő paradicsomhoz hasonlít. A párás tengerparti hegyek buja dzsungellé változnak, amely leopárdok, farkasok és gazdag madárvilág otthona.",
      ro: "Rezervația Naturală Hawf din regiunea Al Mahrah devine un paradis verde în timpul sezonului musonic. Munții de coastă umezi se transformă într-o junglă luxuriantă, care adăpostește leoparzi, lupi și diverse păsări.",
      en: "The Hawf Protected Area in the Al Mahrah region resembles a green paradise during the monsoon months. The humid coastal mountains transform into a lush jungle providing habitat for leopards, wolves, and diverse birdlife."
    },
    facts: {
      de: ["Liegt an der Grenze zum Oman.", "Stark beeinflusst durch den herbstlichen Monsun (Khareef).", "Der größte zusammenhängende Wald im Ostjemen.", "Schutzgebiet für den bedrohten Arabischen Leoparden."],
      hu: ["Közvetlenül az ománi határ mellett fekszik.", "Az őszi monszun (Khareef) nagymértékben befolyásolja.", "Kelet-Jemen legnagyobb egybefüggő erdősége.", "Védett terület a veszélyeztetett arab leopárd számára."],
      ro: ["Situată în apropierea graniței cu Oman.", "Puternic influențată de musonul de toamnă (Khareef).", "Cea mai mare pădure contiguă din estul Yemenului.", "Zonă de conservare pentru leopardul arab pe cale de dispariție."],
      en: ["Located near the border with Oman.", "Strongly influenced by the autumn monsoon (Khareef).", "The largest contiguous forest in eastern Yemen.", "Conservation area for the endangered Arabian leopard."]
    }
  },
  {
    id: "sharma-protected-area-nature-v2",
    type: "national-park",
    parent: "YE-HD",
    coords: [50.0167, 14.8167],
    name: { de: "Naturschutzgebiet Sharma", hu: "Sharma Természetvédelmi Terület", ro: "Rezervația Naturală Sharma", en: "Sharma Protected Area" },
    description: {
      de: "Das Küstenschutzgebiet Sharma im Hadramaut ist einer der wichtigsten Nistplätze für grüne Meeresschildkröten auf der Arabischen Halbinsel. Die unberührten Strände und Riffe sind von entscheidender Bedeutung für den marinen Artenschutz.",
      hu: "A Hadramaut régióban található Sharma partvidéki természetvédelmi terület a zöld tengeri teknősök egyik legfontosabb fészkelőhelye az Arab-félszigeten. Az érintetlen strandok és zátonyok elengedhetetlenek a tengeri élővilág védelméhez.",
      ro: "Rezervația de coastă Sharma din Hadhramaut este unul dintre cele mai importante locuri de cuibărit pentru țestoasele verzi din Peninsula Arabică. Plajele și recifele imaculate sunt vitale pentru conservarea marină.",
      en: "The Sharma coastal protected area in Hadhramaut is one of the most important nesting sites for green sea turtles on the Arabian Peninsula. Its pristine beaches and reefs are vital for marine conservation."
    },
    facts: {
      de: ["Bedeutender Nistplatz für grüne Meeresschildkröten.", "Verfügt über unberührte, farbenfrohe Korallenriffe.", "Als UNESCO-Weltnaturerbe nominiert.", "Schützt wichtige marine Ökosysteme des Golfs von Aden."],
      hu: ["A zöld tengeri teknősök jelentős fészkelőhelye.", "Érintetlen, színes korallzátonyokkal rendelkezik.", "Az UNESCO világörökségi listájára jelölték.", "Védi az Ádeni-öböl fontos tengeri ökoszisztémáit."],
      ro: ["Un loc crucial de cuibărit pentru țestoasele verzi.", "Prezintă recife de corali imaculate și colorate.", "Nominalizat ca sit al Patrimoniului Mondial UNESCO.", "Protejează ecosisteme marine importante din Golful Aden."],
      en: ["Crucial nesting site for green sea turtles.", "Features pristine and colorful coral reefs.", "Nominated as a UNESCO World Heritage site.", "Protects important marine ecosystems in the Gulf of Aden."]
    }
  },
  {
    id: "wadi-bana-nature-v2",
    type: "river",
    parent: "YE-AB",
    coords: [45.3667, 13.0667],
    name: { de: "Wadi Bana", hu: "Vadi Bana", ro: "Wadi Bana", en: "Wadi Bana" },
    description: {
      de: "Das Wadi Bana ist ein bedeutendes Flusstal, das sich durch die südlichen Provinzen Ibb und Abyan zieht. Das ganzjährig fließende Wasser speist fruchtbare Ebenen und macht es zu einer der wichtigsten landwirtschaftlichen Zonen des Landes.",
      hu: "A Vadi Bana egy jelentős folyóvölgy, amely a déli Ibb és Abjan tartományokon halad keresztül. Egész évben folyó vize termékeny síkságokat táplál, így az ország egyik legfontosabb mezőgazdasági övezete.",
      ro: "Wadi Bana este o vale fluvială importantă care străbate provinciile sudice Ibb și Abyan. Apa curgătoare pe tot parcursul anului irigă câmpiile fertile, transformând zona într-o regiune agricolă esențială.",
      en: "Wadi Bana is a major river valley winding through the southern provinces of Ibb and Abyan. Its year-round flowing water feeds fertile plains, making it one of the country's most important agricultural zones."
    },
    facts: {
      de: ["Eines der großen Wadis mit ganzjährigem Wasserfluss.", "Mündet im Süden in den Golf von Aden.", "Ist lebenswichtig für die regionale Landwirtschaft.", "Von dichten Palmenhainen und Feldern umgeben."],
      hu: ["Egyike a kevés egész évben vizet szállító vádinak.", "Délen az Ádeni-öbölbe torkollik.", "Létfontosságú a helyi mezőgazdaság számára.", "Sűrű pálmaligetek és szántóföldek övezik."],
      ro: ["Unul dintre marile wadi-uri cu flux peren de apă.", "Se varsă în Golful Aden din sud.", "Este vital pentru agricultura regională.", "Înconjurat de plantații dense de palmieri și câmpuri."],
      en: ["One of the major wadis with perennial water flow.", "Empties into the Gulf of Aden in the south.", "Is vital for regional agriculture.", "Surrounded by dense palm groves and fields."]
    }, image: "/poi-images/wadi-bana-nature-v2.webp"},
  {
    id: "jabal-sumarah-nature-v2",
    type: "mountain",
    parent: "YE-IB",
    coords: [44.1833, 14.1500],
    name: { de: "Jabal Sumarah", hu: "Szumarah-hegy", ro: "Muntele Jabal Sumarah", en: "Jabal Sumarah" },
    description: {
      de: "Der Gebirgspass des Jabal Sumarah im Gouvernement Ibb schlängelt sich durch einige der grünsten und dramatischsten Landschaften des Jemen. Der Berg fängt Monsunregen ein und ist von dichten, terrassierten Feldern bedeckt.",
      hu: "Az Ibb kormányzóságban található Szumarah-hegy hágója Jemen legzöldebb és legdrámaibb tájain kanyarog keresztül. A hegy felfogja a monszunesőket, és sűrűn beépített teraszos mezők borítják.",
      ro: "Pasul montan Jabal Sumarah din guvernoratul Ibb se șerpuiește prin unele dintre cele mai verzi și mai spectaculoase peisaje din Yemen. Muntele captează ploile musonice și este acoperit de terase agricole.",
      en: "The mountain pass of Jabal Sumarah in the Ibb Governorate winds through some of Yemen's greenest and most dramatic landscapes. The mountain captures monsoon rains and is covered in dense, terraced fields."
    },
    facts: {
      de: ["Liegt in der außergewöhnlich grünen Ibb-Region.", "Erreicht eine Höhe von über 2.900 Metern.", "Bietet spektakuläre kurvenreiche Bergstraßen.", "Bekannt für dichten Nebel und intensive Landwirtschaft."],
      hu: ["A kivételesen zöld Ibb régióban található.", "Magassága meghaladja a 2900 métert.", "Látványos, kanyargós hegyi utakkal rendelkezik.", "Híres a sűrű ködről és az intenzív földművelésről."],
      ro: ["Situat în regiunea excepțional de verde Ibb.", "Atinge o altitudine de peste 2.900 de metri.", "Oferă drumuri montane spectaculoase și șerpuite.", "Cunoscut pentru ceața densă și agricultura intensă."],
      en: ["Located in the exceptionally green Ibb region.", "Reaches an elevation over 2,900 meters.", "Offers spectacular winding mountain roads.", "Known for dense fog and intensive agriculture."]
    }, image: "/poi-images/jabal-sumarah-nature-v2.webp"},
  {
    id: "wadi-zabid-nature-v2",
    type: "river",
    parent: "YE-HU",
    coords: [43.3333, 14.2000],
    name: { de: "Wadi Zabid", hu: "Vadi Zabid", ro: "Wadi Zabid", en: "Wadi Zabid" },
    description: {
      de: "Das Wadi Zabid fließt von den westlichen Bergen herab in die Tihama-Küstenebene. Der Fluss brachte seit Jahrtausenden den fruchtbaren Schlick, auf dem alte Zivilisationen und die historische Stadt Zabid gediehen.",
      hu: "A Vadi Zabid a nyugati hegyekből folyik le a Tihama part menti síkságra. A folyó évezredeken át szállította azt a termékeny iszapot, amelyen ősi civilizációk és Zabid történelmi városa virágzott.",
      ro: "Wadi Zabid curge din munții vestici spre câmpia de coastă Tihama. Timp de milenii, râul a adus mâlul fertil pe care au înflorit civilizațiile antice și orașul istoric Zabid.",
      en: "Wadi Zabid flows from the western mountains down into the Tihama coastal plain. For millennia, the river has brought the fertile silt upon which ancient civilizations and the historic city of Zabid flourished."
    },
    facts: {
      de: ["Verbindet das westliche Hochland mit dem Roten Meer.", "Verfügt über ein uraltes indigenes Bewässerungssystem.", "Historisch wichtig für den Ackerbau in der Tihama.", "Unterstützte das Wachstum der antiken Stadt Zabid."],
      hu: ["Összeköti a nyugati felvidéket a Vörös-tengerrel.", "Ősi őslakos öntözőrendszerrel büszkélkedhet.", "Történelmileg fontos a Tihama mezőgazdasága számára.", "Támogatta az ősi Zabid városának növekedését."],
      ro: ["Conectează regiunile înalte vestice cu Marea Roșie.", "Dispune de un sistem antic indigen de irigații.", "Istoric vital pentru agricultura din câmpia Tihama.", "A sprijinit dezvoltarea orașului antic Zabid."],
      en: ["Connects the western highlands to the Red Sea.", "Features an ancient indigenous irrigation system.", "Historically vital for agriculture in the Tihama plain.", "Supported the growth of the ancient city of Zabid."]
    }, image: "/poi-images/wadi-zabid-nature-v2.webp"},
  {
    id: "wadi-surdud-nature-v2",
    type: "river",
    parent: "YE-MW",
    coords: [43.4167, 15.2333],
    name: { de: "Wadi Surdud", hu: "Vadi Szurdud", ro: "Wadi Surdud", en: "Wadi Surdud" },
    description: {
      de: "Das Wadi Surdud schneidet sich tief in das jemenitische Hochland ein und bildet ein grünes Tal, in dem Mangos und Bananen wachsen. Ein ständiger Wasserfluss macht die Schlucht zu einer lebenswichtigen Oase im rauen Gebirge.",
      hu: "A Vadi Szurdud mélyen bevágódik a jemeni felvidékbe, zöld völgyet alkotva, ahol mangó és banán terem. Az állandó vízáramlás létfontosságú oázissá teszi a szurdokot a zord hegyvidéken.",
      ro: "Wadi Surdud taie adânc în zonele înalte yemenite, formând o vale verde unde cresc arbori de mango și bananieri. Fluxul constant de apă transformă defileul într-o oază vitală în munții accidentați.",
      en: "Wadi Surdud cuts deep into the Yemeni highlands, forming a green valley where mangos and bananas grow. A permanent flow of water makes the gorge a vital oasis in the rugged mountains."
    },
    facts: {
      de: ["Liegt in den Bergen nordwestlich von Sanaa.", "Berühmt für den Anbau von tropischen Früchten.", "Wird durch einen dauerhaften Gebirgsbach gespeist.", "Bietet spektakuläre landschaftliche Kontraste."],
      hu: ["Szanaától északnyugatra, a hegyekben található.", "Trópusi gyümölcsök termesztéséről híres.", "Egy állandó hegyi patak táplálja.", "Látványos táji kontrasztokat kínál."],
      ro: ["Situat în munții din nord-vestul orașului Sana'a.", "Renumit pentru cultivarea fructelor tropicale.", "Susținut de un pârâu montan permanent.", "Oferă contraste peisagistice spectaculoase."],
      en: ["Located in the mountains northwest of Sanaa.", "Famous for the cultivation of tropical fruits.", "Supported by a permanent mountain stream.", "Offers spectacular scenic contrasts."]
    }, image: "/poi-images/wadi-surdud-nature-v2.webp"},
  {
    id: "wadi-tuban-nature-v2",
    type: "river",
    parent: "YE-LA",
    coords: [44.8333, 13.0333],
    name: { de: "Wadi Tuban", hu: "Vadi Tuban", ro: "Wadi Tuban", en: "Wadi Tuban" },
    description: {
      de: "Das Wadi Tuban ist ein bedeutendes Flusssystem, das seinen Ursprung im Hochland hat und in das Arabische Meer mündet. Die regelmäßigen Fluten des Wadis versorgen das Lahej-Delta mit Wasser und fruchtbaren Sedimenten.",
      hu: "A Vadi Tuban egy jelentős folyórendszer, amely a felvidékről ered és az Arab-tengerbe torkollik. A vádi rendszeres áradásai vízzel és termékeny üledékkel látják el a Lahej-deltát.",
      ro: "Wadi Tuban este un sistem fluvial major care izvorăște din zonele înalte și se varsă în Marea Arabiei. Inundațiile regulate ale râului furnizează apă și sedimente fertile pentru delta Lahej.",
      en: "Wadi Tuban is a major river system originating in the highlands and flowing into the Arabian Sea. The wadi's regular floods provide the Lahej Delta with essential water and fertile sediments."
    },
    facts: {
      de: ["Wichtige Wasserquelle für das Gouvernement Lahij.", "Mündet im Süden in den Golf von Aden.", "Anfällig für gefährliche saisonale Sturzfluten.", "Schafft ein fruchtbares Delta-Ökosystem."],
      hu: ["Fontos vízforrás a Lahij kormányzóság számára.", "Délen az Ádeni-öbölbe ömlik.", "Hajlamos a veszélyes, évszakos hirtelen áradásokra.", "Termékeny delta-ökoszisztémát hoz létre."],
      ro: ["Sursă importantă de apă pentru guvernoratul Lahij.", "Se varsă în Golful Aden la sud.", "Predispus la inundații sezoniere periculoase.", "Creează un ecosistem fertil de deltă."],
      en: ["Important water source for the Lahij Governorate.", "Empties into the Gulf of Aden in the south.", "Prone to dangerous seasonal flash floods.", "Creates a fertile delta ecosystem."]
    }, image: "/poi-images/wadi-tuban-nature-v2.webp"},
  {
    id: "wadi-siham-nature-v2",
    type: "river",
    parent: "YE-HU",
    coords: [43.1500, 14.7333],
    name: { de: "Wadi Siham", hu: "Vadi Sziham", ro: "Wadi Siham", en: "Wadi Siham" },
    description: {
      de: "Das Wadi Siham transportiert Wasser aus den zerklüfteten westlichen Gebirgen in die Tihama-Ebene. Das Flusstal ist gesäumt von Akazien und traditionellen Gehöften und spielt eine zentrale Rolle in der regionalen Landwirtschaft.",
      hu: "A Vadi Sziham a zord nyugati hegyekből szállítja a vizet a Tihama-síkságra. A folyóvölgyet akáciák és hagyományos tanyák szegélyezik, és központi szerepet játszik a regionális mezőgazdaságban.",
      ro: "Wadi Siham transportă apă din munții vestici stâncoși către câmpia Tihama. Valea râului este flancată de salcâmi și ferme tradiționale, având un rol central în agricultura regională.",
      en: "Wadi Siham transports water from the rugged western mountains to the Tihama plain. The river valley is lined with acacias and traditional farmsteads, playing a central role in regional agriculture."
    },
    facts: {
      de: ["Eines der großen Wadis, die nach Westen fließen.", "Verfügt über traditionelle kleine Bewässerungsdämme.", "Unterstützt großflächige landwirtschaftliche Produktion.", "Bildet eine grüne Lebensader in der Küstenebene."],
      hu: ["Az egyik legfontosabb nyugatra folyó vádi.", "Hagyományos kis öntözőgátakkal rendelkezik.", "Támogatja a nagyszabású mezőgazdasági termelést.", "Zöld ütőeret alkot a part menti síkságon."],
      ro: ["Unul dintre principalele wadi-uri care curg spre vest.", "Prezintă baraje tradiționale de irigații la scară mică.", "Sprijină producția agricolă pe scară largă.", "Formează un curs de viață verde în câmpia de coastă."],
      en: ["One of the major wadis draining westward.", "Features traditional small-scale irrigation dams.", "Supports large-scale agricultural crop production.", "Forms a green lifeline in the coastal plain."]
    }, image: "/poi-images/wadi-siham-nature-v2.webp"},
  {
    id: "jabal-yafaa-nature-v2",
    type: "mountain",
    parent: "YE-LA",
    coords: [45.1500, 13.8000],
    name: { de: "Jabal Yafaa", hu: "Jafaa-hegy", ro: "Muntele Jabal Yafa'a", en: "Jabal Yafa'a" },
    description: {
      de: "Die massive Gebirgsregion Jabal Yafaa im Süden des Jemen ist für ihre einzigartige, mehrstöckige Steinarchitektur und ihre Unzugänglichkeit berüchtigt. Die rauen Hänge dieses Bergmassivs waren lange Zeit ein isoliertes Stammesgebiet.",
      hu: "A dél-jemeni hatalmas Jafaa-hegység egyedi, többszintes kőépítészetéről és megközelíthetetlenségéről hírhedt. Ennek a hegytömbnek a zord lejtői sokáig elszigetelt törzsi területként működtek.",
      ro: "Regiunea montană masivă Jabal Yafa'a din sudul Yemenului este celebră pentru arhitectura sa unică din piatră pe mai multe niveluri. Pantele aspre ale acestui masiv au fost mult timp un teritoriu tribal izolat.",
      en: "The massive Jabal Yafa'a mountain region in southern Yemen is renowned for its unique, multi-story stone architecture and its inaccessibility. The rugged slopes of this massif were long an isolated tribal territory."
    },
    facts: {
      de: ["Bekannt für die markanten, hohen Steinhäuser.", "Historisch eine unabhängige Stammeshochburg.", "Die Höhenlagen überschreiten 2.000 Meter.", "Das Gebiet ist von tiefen Tälern durchzogen."],
      hu: ["Jellegzetes, magas kőházairól ismert.", "Történelmileg független törzsi fellegvár volt.", "A tengerszint feletti magassága meghaladja a 2000 métert.", "A területet mély völgyek szelik át."],
      ro: ["Renumit pentru casele sale distinctive din piatră.", "Istoric, o fortăreață tribală independentă.", "Altitudinile depășesc 2.000 de metri.", "Regiunea este străbătută de văi adânci."],
      en: ["Known for distinct towering stone houses.", "Historically an independent tribal stronghold.", "Altitudes exceed 2,000 meters in the region.", "The area is crisscrossed by deep valleys."]
    }, image: "/poi-images/jabal-yafaa-nature-v2.webp"},
  {
    id: "fermhin-forest-nature-v2",
    type: "forest",
    parent: "YE-SU",
    coords: [53.9667, 12.4833],
    name: { de: "Fermhin-Wald", hu: "Fermhin-erdő", ro: "Pădurea Fermhin", en: "Fermhin Forest" },
    description: {
      de: "Der Fermhin-Wald auf dem Diksam-Plateau von Sokotra beherbergt die weltweit größte Konzentration an Drachenblutbäumen. Dieser uralte, beinahe außerirdisch wirkende Wald ist ein fragiles Ökosystem von unschätzbarem wissenschaftlichen Wert.",
      hu: "A Szokotra Diksam-fennsíkján található Fermhin-erdő ad otthont a világ legnagyobb sárkányvérfa-koncentrációjának. Ez az ősi, szinte földönkívülinek tűnő erdő egy felbecsülhetetlen tudományos értékű, törékeny ökoszisztéma.",
      ro: "Pădurea Fermhin de pe platoul Diksam din Socotra găzduiește cea mai mare concentrație de arbori sângele dragonului din lume. Această pădure antică, aproape extraterestră, este un ecosistem fragil de o valoare științifică inestimabilă.",
      en: "The Fermhin Forest on Socotra's Diksam Plateau hosts the world's largest concentration of dragon's blood trees. This ancient, almost alien-looking forest is a fragile ecosystem of inestimable scientific value."
    },
    facts: {
      de: ["Heimat von Tausenden endemischen Drachenblutbäumen.", "Liegt auf dem zentralen Kalksteinplateau von Sokotra.", "Ernsthaft bedroht durch Klimawandel und Stürme.", "Erzeugt eine magische, schirmartige Baumkrone."],
      hu: ["Több ezer endemikus sárkányvérfának ad otthont.", "Szokotra központi mészkőfennsíkján fekszik.", "A klímaváltozás és a viharok súlyosan fenyegetik.", "Varázslatos, esernyőszerű lombkoronát hoz létre."],
      ro: ["Găzduiește mii de arbori sângele dragonului endemici.", "Situată pe platoul central de calcar din Socotra.", "Amenințată grav de schimbările climatice și furtuni.", "Creează un coronament magic, sub formă de umbrelă."],
      en: ["Home to thousands of endemic dragon's blood trees.", "Located on the central limestone plateau of Socotra.", "Seriously threatened by climate change and storms.", "Creates a magical, umbrella-like forest canopy."]
    }
  }
];
