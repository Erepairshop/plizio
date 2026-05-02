import type { POI } from "./poi";

export const poiExtraNamibiaNatureV2: POI[] = [
  {
    id: "na-namib-desert-nature-v2",
    type: "sea",
    parent: "NA-ER",
    coords: [15.0, -24.5],
    name: { de: "Namibwüste", hu: "Namib-sivatag", ro: "Deșertul Namib", en: "Namib Desert" },
    description: { de: "Die älteste Wüste der Welt entlang der Küste.", hu: "A világ legrégebbi sivataga a tengerpart mentén.", ro: "Cel mai vechi deșert din lume de-a lungul coastei.", en: "The oldest desert in the world along the coast." },
    facts: {
      de: ["Älteste Wüste der Welt", "Erstreckt sich entlang der Atlantikküste", "Bekannt für riesige Sanddünen", "Gehört zum UNESCO-Welterbe"],
      hu: ["A világ legrégebbi sivataga", "Az Atlanti-óceán partja mentén húzódik", "Óriási homokdűnéiről híres", "Az UNESCO világörökség része"],
      ro: ["Cel mai vechi deșert din lume", "Se întinde de-a lungul coastei Atlanticului", "Cunoscut pentru dunele uriașe de nisip", "Face parte din patrimoniul mondial UNESCO"],
      en: ["Oldest desert in the world", "Stretches along the Atlantic coast", "Known for giant sand dunes", "Part of UNESCO World Heritage"]
    }
  },
  {
    id: "na-kalahari-desert-nature-v2",
    type: "sea",
    parent: "NA-OH",
    coords: [20.0, -23.0],
    name: { de: "Kalahari-Wüste", hu: "Kalahári-sivatag", ro: "Deșertul Kalahari", en: "Kalahari Desert" },
    description: { de: "Ein riesiges semi-arides Becken im Inneren Namibias.", hu: "Hatalmas félszáraz medence Namíbia belsejében.", ro: "Un bazin vast semiarid în interiorul Namibiei.", en: "A vast semi-arid basin in the interior of Namibia." },
    facts: {
      de: ["Bedeckt große Teile Namibias", "Semi-arides Becken", "Bekannt für seine rote Erde", "Heimat zahlreicher Tierarten"],
      hu: ["Namíbia nagy részét lefedi", "Félszáraz medence", "Vörös talajáról híres", "Számos állatfaj otthona"],
      ro: ["Acoperă mari părți din Namibia", "Bazin semiarid", "Cunoscut pentru solul său roșu", "Casa a numeroase specii de animale"],
      en: ["Covers large parts of Namibia", "Semi-arid basin", "Known for its red soil", "Home to numerous animal species"]
    }
  },
  {
    id: "na-etosha-pan-nature-v2",
    type: "lake",
    parent: "NA-OS",
    coords: [16.5, -18.8],
    name: { de: "Etosha-Pfanne", hu: "Etosha-medence", ro: "Depresiunea Etosha", en: "Etosha Pan" },
    description: { de: "Eine riesige Salzpfanne im Etosha-Nationalpark.", hu: "Hatalmas sómedence az Etosha Nemzeti Parkban.", ro: "O vastă depresiune salină în Parcul Național Etosha.", en: "A vast salt pan in Etosha National Park." },
    facts: {
      de: ["Riesige Salzpfanne", "Zentrum des Etosha-Nationalparks", "Sichtbar aus dem Weltraum", "Lebensraum für viele Tiere"],
      hu: ["Hatalmas sómedence", "Az Etosha Nemzeti Park központja", "Az űrből is látható", "Sok állat élőhelye"],
      ro: ["Depresiune salină vastă", "Centrul Parcului Național Etosha", "Vizibilă din spațiu", "Habitat pentru multe animale"],
      en: ["Vast salt pan", "Center of Etosha National Park", "Visible from space", "Habitat for many animals"]
    }
  },
  {
    id: "na-fish-river-canyon-nature-v2",
    type: "river",
    parent: "NA-KA",
    coords: [17.6, -27.6],
    name: { de: "Fish River Canyon", hu: "Fish River-kanyon", ro: "Canionul Fish River", en: "Fish River Canyon" },
    description: { de: "Einer der größten Canyons der Welt.", hu: "A világ egyik legnagyobb kanyonja.", ro: "Unul dintre cele mai mari canioane din lume.", en: "One of the largest canyons in the world." },
    facts: {
      de: ["Zweitgrößter Canyon der Welt", "Spektakuläre Felsformationen", "Wanderparadies", "Befindet sich im Süden Namibias"],
      hu: ["A világ második legnagyobb kanyonja", "Látványos sziklaformációk", "Túrázóparadicsom", "Namíbia déli részén található"],
      ro: ["Al doilea cel mai mare canion din lume", "Formațiuni stâncoase spectaculoase", "Paradis pentru drumeții", "Situat în sudul Namibiei"],
      en: ["Second largest canyon in the world", "Spectacular rock formations", "Hiking paradise", "Located in southern Namibia"]
    }
  },
  {
    id: "na-orange-river-nature-v2",
    type: "river",
    parent: "NA-KA",
    coords: [17.0, -28.5],
    name: { de: "Oranje-Fluss", hu: "Oranje folyó", ro: "Râul Oranje", en: "Orange River" },
    description: { de: "Der längste Fluss Südafrikas, der die Grenze bildet.", hu: "Dél-Afrika leghosszabb folyója, amely a határt alkotja.", ro: "Cel mai lung râu din Africa de Sud, care formează granița.", en: "The longest river in South Africa, forming the border." },
    facts: {
      de: ["Grenzfluss zu Südafrika", "Längster Fluss Südafrikas", "Wichtig für die Landwirtschaft", "Entspringt in den Drakensbergen"],
      hu: ["Határfolyó Dél-Afrikával", "Dél-Afrika leghosszabb folyója", "Fontos a mezőgazdaság számára", "A Drakensberg-hegységben ered"],
      ro: ["Râu de frontieră cu Africa de Sud", "Cel mai lung râu din Africa de Sud", "Important pentru agricultură", "Izvorăște din munții Drakensberg"],
      en: ["Border river with South Africa", "Longest river in South Africa", "Important for agriculture", "Originates in the Drakensberg mountains"]
    }
  },
  {
    id: "na-kunene-river-nature-v2",
    type: "river",
    parent: "NA-KU",
    coords: [12.5, -17.2],
    name: { de: "Kunene-Fluss", hu: "Kunene folyó", ro: "Râul Kunene", en: "Kunene River" },
    description: { de: "Ein bedeutender Fluss an der Grenze zu Angola.", hu: "Jelentős folyó az angolai határon.", ro: "Un râu semnificativ la granița cu Angola.", en: "A significant river on the border with Angola." },
    facts: {
      de: ["Grenzfluss zu Angola", "Speist die Epupa-Fälle", "Lebensader im Norden", "Biodiverses Flussökosystem"],
      hu: ["Határfolyó Angolával", "Az Epupa-vízesést táplálja", "Életér az északi részen", "Biodiverz folyami ökoszisztéma"],
      ro: ["Râu de frontieră cu Angola", "Alimentează cascadele Epupa", "Linia vieții în nord", "Ecosistem fluvial divers"],
      en: ["Border river with Angola", "Feeds the Epupa Falls", "Lifeline in the north", "Biodiverse river ecosystem"]
    }
  },
  {
    id: "na-epupa-falls-nature-v2",
    type: "river",
    parent: "NA-KU",
    coords: [13.2, -17.0],
    name: { de: "Epupa-Fälle", hu: "Epupa-vízesés", ro: "Cascadele Epupa", en: "Epupa Falls" },
    description: { de: "Spektakuläre Wasserfälle am Kunene-Fluss.", hu: "Látványos vízesések a Kunene folyón.", ro: "Cascade spectaculoase pe râul Kunene.", en: "Spectacular waterfalls on the Kunene River." },
    facts: {
      de: ["Wasserfälle am Kunene-Fluss", "Beliebtes Touristenziel", "Umgeben von Makalani-Palmen", "Naturschauspiel im Norden"],
      hu: ["Vízesések a Kunene folyón", "Népszerű turisztikai célpont", "Makalani-pálmákkal övezve", "Természeti csoda északon"],
      ro: ["Cascade pe râul Kunene", "Destinație turistică populară", "Înconjurate de palmieri Makalani", "Spectacol natural în nord"],
      en: ["Waterfalls on Kunene River", "Popular tourist destination", "Surrounded by Makalani palms", "Natural wonder in the north"]
    }
  },
  {
    id: "na-brandberg-mountain-nature-v2",
    type: "mountain",
    parent: "NA-ER",
    coords: [14.5, -21.1],
    name: { de: "Brandberg", hu: "Brandberg-hegy", ro: "Muntele Brandberg", en: "Brandberg Mountain" },
    description: { de: "Der höchste Berg Namibias.", hu: "Namíbia legmagasabb hegye.", ro: "Cel mai înalt munte din Namibia.", en: "The highest mountain in Namibia." },
    facts: {
      de: ["Höchster Berg Namibias", "Königstein ist der höchste Gipfel", "Berühmt für Felsmalereien", "Granitmassiv in der Wüste"],
      hu: ["Namíbia legmagasabb hegye", "A Königstein a legmagasabb csúcsa", "Sziklafestményeiről híres", "Gránitmasszívum a sivatagban"],
      ro: ["Cel mai înalt munte din Namibia", "Königstein este cel mai înalt vârf", "Faimos pentru picturi rupestre", "Masiv granitic în deșert"],
      en: ["Highest mountain in Namibia", "Königstein is the highest peak", "Famous for rock paintings", "Granite massif in the desert"]
    }
  },
  {
    id: "na-spitzkoppe-nature-v2",
    type: "mountain",
    parent: "NA-ER",
    coords: [15.1, -21.8],
    name: { de: "Spitzkoppe", hu: "Spitzkoppe", ro: "Spitzkoppe", en: "Spitzkoppe" },
    description: { de: "Eine markante Gruppe von Granitgipfeln.", hu: "Markáns gránitcsúcs-csoport.", ro: "Un grup distinctiv de vârfuri de granit.", en: "A striking group of granite peaks." },
    facts: {
      de: ["Bekannt als 'Matterhorn Namibias'", "Markante Granitfelsen", "Beliebt bei Kletterern", "Spektakuläre Felsformationen"],
      hu: ["'Namíbia Matterhornjaként' ismert", "Jellegzetes gránitsziklák", "Népszerű a hegymászók körében", "Látványos sziklaformációk"],
      ro: ["Cunoscut sub numele de 'Matterhorn al Namibiei'", "Stânci de granit distinctive", "Popular printre alpiniști", "Formațiuni stâncoase spectaculoase"],
      en: ["Known as 'Matterhorn of Namibia'", "Striking granite rocks", "Popular with climbers", "Spectacular rock formations"]
    }
  },
  {
    id: "na-waterberg-nature-v2",
    type: "mountain",
    parent: "NA-OT",
    coords: [17.2, -20.5],
    name: { de: "Waterberg", hu: "Waterberg-fennsík", ro: "Platoul Waterberg", en: "Waterberg Plateau" },
    description: { de: "Ein bedeutendes Plateau-Schutzgebiet.", hu: "Jelentős fennsík-természetvédelmi terület.", ro: "O importantă rezervație naturală pe platou.", en: "An important plateau nature reserve." },
    facts: {
      de: ["Sandsteinplateau", "Schutzgebiet für seltene Arten", "Grüne Oase", "Historischer Ort"],
      hu: ["Homokkő fennsík", "Ritka fajok menedéke", "Zöld oázis", "Történelmi helyszín"],
      ro: ["Platou de gresie", "Rezervație pentru specii rare", "Oază verde", "Loc istoric"],
      en: ["Sandstone plateau", "Reserve for rare species", "Green oasis", "Historic site"]
    }
  },
  {
    id: "na-skeletons-coast-nature-v2",
    type: "sea",
    parent: "NA-ER",
    coords: [13.5, -20.0],
    name: { de: "Skelettküste", hu: "Csontvázpart", ro: "Coasta Scheletelor", en: "Skeleton Coast" },
    description: { de: "Ein wilder Küstenabschnitt am Atlantik.", hu: "Vad partszakasz az Atlanti-óceán mentén.", ro: "O secțiune de coastă sălbatică la Atlantic.", en: "A wild coastal section on the Atlantic." },
    facts: {
      de: ["Bekannt für Schiffswracks", "Neblige Atlantikküste", "Einsame Wüstenlandschaft", "Namensgebend sind Walknochen"],
      hu: ["Hajóroncsairól híres", "Ködfoltos Atlanti-partvidék", "Magányos sivatagi táj", "Nevét a bálnacsontokról kapta"],
      ro: ["Cunoscută pentru epavele de nave", "Coasta cețoasă a Atlanticului", "Peisaj deșertic solitar", "Numele provine de la oasele de balenă"],
      en: ["Known for shipwrecks", "Foggy Atlantic coast", "Lonely desert landscape", "Named after whale bones"]
    }
  },
  {
    id: "na-cape-cross-nature-v2",
    type: "sea",
    parent: "NA-ER",
    coords: [14.4, -21.7],
    name: { de: "Cape Cross", hu: "Cape Cross", ro: "Cape Cross", en: "Cape Cross" },
    description: { de: "Ein bekanntes Robbenreservat.", hu: "Jelentős fókarezervátum.", ro: "O cunoscută rezervație de foci.", en: "A well-known seal reserve." },
    facts: {
      de: ["Größte Robbenkolonie Namibias", "Historischer Landeplatz", "Teil eines Schutzgebiets", "Sehenswerte Küste"],
      hu: ["Namíbia legnagyobb fókakolóniája", "Történelmi partraszállóhely", "Védett terület része", "Látványos partszakasz"],
      ro: ["Cea mai mare colonie de foci din Namibia", "Loc istoric de debarcare", "Parte a unei rezervații", "Coastă impresionantă"],
      en: ["Largest seal colony in Namibia", "Historic landing site", "Part of a protected area", "Impressive coast"]
    }
  },
  {
    id: "na-dunes-sossusvlei-nature-v2",
    type: "mountain",
    parent: "NA-ER",
    coords: [15.3, -24.7],
    name: { de: "Sossusvlei", hu: "Sossusvlei", ro: "Sossusvlei", en: "Sossusvlei" },
    description: { de: "Eine Salz- und Tonpfanne umgeben von hohen Dünen.", hu: "Sós-agyagos medence, magas dűnékkel körülvéve.", ro: "O depresiune de sare și argilă înconjurată de dune înalte.", en: "A salt and clay pan surrounded by high dunes." },
    facts: {
      de: ["Berühmte Sanddünen", "Fotografen-Hotspot", "Teil der Namibwüste", "Hohe rote Dünen"],
      hu: ["Híres homokdűnék", "Fotósok paradicsoma", "A Namib-sivatag része", "Magas vörös dűnék"],
      ro: ["Dune de nisip faimoase", "Hotspot pentru fotografi", "Parte a deșertului Namib", "Dune roșii înalte"],
      en: ["Famous sand dunes", "Photographers' hotspot", "Part of the Namib Desert", "High red dunes"]
    }
  },
  {
    id: "na-dead-vlei-nature-v2",
    type: "lake",
    parent: "NA-ER",
    coords: [15.3, -24.7],
    name: { de: "Deadvlei", hu: "Deadvlei", ro: "Deadvlei", en: "Deadvlei" },
    description: { de: "Eine weiße Pfanne mit abgestorbenen Kameldornbäumen.", hu: "Fehér medence elhalt teveakác fákkal.", ro: "O depresiune albă cu copaci morți de acacia.", en: "A white pan with dead camel thorn trees." },
    facts: {
      de: ["Bekannt für die toten Bäume", "Kontrastreiche Landschaft", "Weiße Salzpfanne", "Symbol der Wüste"],
      hu: ["Halott fáiról híres", "Kontrasztos táj", "Fehér sómedence", "A sivatag szimbóluma"],
      ro: ["Cunoscută pentru copacii morți", "Peisaj contrastant", "Depresiune salină albă", "Simbol al deșertului"],
      en: ["Known for dead trees", "Contrasting landscape", "White salt pan", "Symbol of the desert"]
    }
  },
  {
    id: "na-kuiseb-river-nature-v2",
    type: "river",
    parent: "NA-ER",
    coords: [15.0, -23.5],
    name: { de: "Kuiseb-Fluss", hu: "Kuiseb folyó", ro: "Râul Kuiseb", en: "Kuiseb River" },
    description: { de: "Ein saisonaler Fluss, der den Namib-Sand begrenzt.", hu: "Időszakos folyó, amely határolja a Namib-homokot.", ro: "Un râu sezonier care delimitează nisipurile din Namib.", en: "A seasonal river that delimits the Namib sands." },
    facts: {
      de: ["Trockenflussbett", "Begrenzt die Dünen", "Wichtiger Lebensraum", "Interessante Geologie"],
      hu: ["Száraz folyómeder", "Határolja a dűnéket", "Fontos élőhely", "Érdekes geológia"],
      ro: ["Albie de râu uscată", "Delimitează dunele", "Habitat important", "Geologie interesantă"],
      en: ["Dry riverbed", "Delimits the dunes", "Important habitat", "Interesting geology"]
    }
  },
  {
    id: "na-swakop-river-nature-v2",
    type: "river",
    parent: "NA-ER",
    coords: [14.6, -22.7],
    name: { de: "Swakop-Fluss", hu: "Swakop folyó", ro: "Râul Swakop", en: "Swakop River" },
    description: { de: "Ein bedeutender Wüstenfluss bei Swakopmund.", hu: "Jelentős sivatagi folyó Swakopmund közelében.", ro: "Un râu important de deșert lângă Swakopmund.", en: "A significant desert river near Swakopmund." },
    facts: {
      de: ["Wüstenfluss", "Endet am Atlantik", "Wichtige Wasserquelle", "Schluchtenlandschaften"],
      hu: ["Sivatagi folyó", "Az Atlanti-óceánnál ér véget", "Fontos vízforrás", "Kanyonos tájak"],
      ro: ["Râu de deșert", "Se varsă în Atlantic", "Sursă importantă de apă", "Peisaje cu canioane"],
      en: ["Desert river", "Ends at the Atlantic", "Important water source", "Canyon landscapes"]
    }
  },
  {
    id: "na-tsauchab-river-nature-v2",
    type: "river",
    parent: "NA-ER",
    coords: [15.5, -24.5],
    name: { de: "Tsauchab-Fluss", hu: "Tsauchab folyó", ro: "Râul Tsauchab", en: "Tsauchab River" },
    description: { de: "Ein saisonaler Fluss, der Sossusvlei speist.", hu: "Időszakos folyó, amely táplálja a Sossusvleit.", ro: "Un râu sezonier care alimentează Sossusvlei.", en: "A seasonal river that feeds Sossusvlei." },
    facts: {
      de: ["Speist die Salzpfanne", "Fließt durch die Wüste", "Trockenes Flussbett meistens", "Wichtige Wasserader"],
      hu: ["Táplálja a sómedencét", "Átfolyik a sivatagon", "Többnyire száraz folyómeder", "Fontos vízér"],
      ro: ["Alimentează depresiunea salină", "Curge prin deșert", "Albie de râu majoritatea timpului uscată", "Linie de apă importantă"],
      en: ["Feeds the salt pan", "Flows through the desert", "Mostly dry riverbed", "Important water vein"]
    }
  },
  {
    id: "na-hoarusib-river-nature-v2",
    type: "river",
    parent: "NA-KU",
    coords: [12.6, -18.6],
    name: { de: "Hoarusib-Fluss", hu: "Hoarusib folyó", ro: "Râul Hoarusib", en: "Hoarusib River" },
    description: { de: "Ein ephemerer Fluss im Kaokoveld.", hu: "Efemer folyó a Kaokoveld-ben.", ro: "Un râu efemer în Kaokoveld.", en: "An ephemeral river in the Kaokoveld." },
    facts: {
      de: ["Wüstenfluss", "Lebensraum der Wüstenelefanten", "Kaokoveld Region", "Trockenes Flussbett"],
      hu: ["Sivatagi folyó", "A sivatagi elefántok élőhelye", "Kaokoveld régió", "Száraz folyómeder"],
      ro: ["Râu de deșert", "Habitatul elefanților de deșert", "Regiunea Kaokoveld", "Albie de râu uscată"],
      en: ["Desert river", "Habitat of desert elephants", "Kaokoveld region", "Dry riverbed"]
    }
  },
  {
    id: "na-hoanib-river-nature-v2",
    type: "river",
    parent: "NA-KU",
    coords: [12.7, -19.1],
    name: { de: "Hoanib-Fluss", hu: "Hoanib folyó", ro: "Râul Hoanib", en: "Hoanib River" },
    description: { de: "Ein bekannter Wüstenfluss im Nordwesten.", hu: "Ismert sivatagi folyó északnyugaton.", ro: "Un râu de deșert bine cunoscut în nord-vest.", en: "A well-known desert river in the northwest." },
    facts: {
      de: ["Trockenflussbett", "Wildtierkorridor", "Wüstenelefanten", "Namib-Wüste"],
      hu: ["Száraz folyómeder", "Vadvédelmi folyosó", "Sivatagi elefántok", "Namib-sivatag"],
      ro: ["Albie de râu uscată", "Coridor pentru animale sălbatice", "Elefanți de deșert", "Deșertul Namib"],
      en: ["Dry riverbed", "Wildlife corridor", "Desert elephants", "Namib Desert"]
    }
  },
  {
    id: "na-ugab-river-nature-v2",
    type: "river",
    parent: "NA-ER",
    coords: [14.0, -21.0],
    name: { de: "Ugab-Fluss", hu: "Ugab folyó", ro: "Râul Ugab", en: "Ugab River" },
    description: { de: "Ein Fluss, der die Skelettküste begrenzt.", hu: "Folyó, amely határolja a Csontvázpartot.", ro: "Un râu care delimitează Coasta Scheletelor.", en: "A river that delimits the Skeleton Coast." },
    facts: {
      de: ["Wüstenfluss", "Lebensraum", "Grenze Skelettküste", "Landschaftsbildend"],
      hu: ["Sivatagi folyó", "Élőhely", "Határ a Csontvázpartnál", "Tájformáló"],
      ro: ["Râu de deșert", "Habitat", "Limita Coastei Scheletelor", "Modelator de peisaj"],
      en: ["Desert river", "Habitat", "Skeleton Coast boundary", "Landscape-forming"]
    }
  },
  {
    id: "na-fish-river-nature-v2",
    type: "river",
    parent: "NA-KA",
    coords: [17.5, -26.0],
    name: { de: "Fischfluss", hu: "Hal-folyó", ro: "Râul Fish", en: "Fish River" },
    description: { de: "Der längste namibische Fluss im Inland.", hu: "Namíbia leghosszabb belföldi folyója.", ro: "Cel mai lung râu interior din Namibia.", en: "The longest inland Namibian river." },
    facts: {
      de: ["Längster Binnenfluss", "Speist Hardap-Damm", "Spektakulärer Canyon", "Wüstenfluss"],
      hu: ["Leghosszabb belföldi folyó", "A Hardap-gátat táplálja", "Látványos kanyon", "Sivatagi folyó"],
      ro: ["Cel mai lung râu interior", "Alimentează barajul Hardap", "Canion spectaculos", "Râu de deșert"],
      en: ["Longest inland river", "Feeds Hardap Dam", "Spectacular canyon", "Desert river"]
    }
  },
  {
    id: "na-hardap-dam-nature-v2",
    type: "lake",
    parent: "NA-HA",
    coords: [17.8, -24.5],
    name: { de: "Hardap-Damm", hu: "Hardap-gát", ro: "Barajul Hardap", en: "Hardap Dam" },
    description: { de: "Der größte Stausee Namibias.", hu: "Namíbia legnagyobb víztározója.", ro: "Cel mai mare lac de acumulare din Namibia.", en: "The largest reservoir in Namibia." },
    facts: {
      de: ["Größter Stausee", "Wichtig für Bewässerung", "Freizeitgebiet", "Vogelparadies"],
      hu: ["Legnagyobb víztározó", "Fontos az öntözéshez", "Szabadidős terület", "Madárparadicsom"],
      ro: ["Cel mai mare lac de acumulare", "Important pentru irigații", "Zonă de agrement", "Paradis pentru păsări"],
      en: ["Largest reservoir", "Important for irrigation", "Recreation area", "Bird paradise"]
    }
  },
  {
    id: "na-otjikoto-lake-nature-v2",
    type: "lake",
    parent: "NA-OS",
    coords: [17.5, -19.2],
    name: { de: "Otjikoto-See", hu: "Otjikoto-tó", ro: "Lacul Otjikoto", en: "Otjikoto Lake" },
    description: { de: "Ein kleiner, tiefer Karstsee.", hu: "Egy kicsi, mély karszttó.", ro: "Un mic lac carstic, adânc.", en: "A small, deep karst lake." },
    facts: {
      de: ["Karstsee", "Historische Bedeutung", "Tiefes Wasser", "Besucherattraktion"],
      hu: ["Karszttó", "Történelmi jelentőség", "Mély víz", "Látogatói látványosság"],
      ro: ["Lac carstic", "Semnificație istorică", "Apă adâncă", "Atracție turistică"],
      en: ["Karst lake", "Historical importance", "Deep water", "Tourist attraction"]
    }
  },
  {
    id: "na-guinas-lake-nature-v2",
    type: "lake",
    parent: "NA-OS",
    coords: [17.3, -19.2],
    name: { de: "Guinas-See", hu: "Guinas-tó", ro: "Lacul Guinas", en: "Guinas Lake" },
    description: { de: "Ein weiterer bekannter Karstsee.", hu: "Egy másik ismert karszttó.", ro: "Un alt lac carstic cunoscut.", en: "Another well-known karst lake." },
    facts: {
      de: ["Karstsee", "Klares Wasser", "Sehr tief", "Naturschönheit"],
      hu: ["Karszttó", "Tiszta víz", "Nagyon mély", "Természeti szépség"],
      ro: ["Lac carstic", "Apă limpede", "Foarte adânc", "Frumusețe naturală"],
      en: ["Karst lake", "Clear water", "Very deep", "Natural beauty"]
    }
  },
  {
    id: "na-nylon-pool-nature-v2",
    type: "sea",
    parent: "NA-ER",
    coords: [14.0, -21.0],
    name: { de: "Nylon Pool (Namibia)", hu: "Nylon-medence", ro: "Piscina Nylon", en: "Nylon Pool" },
    description: { de: "Ein kristallklares, flaches Naturschwimmbecken.", hu: "Kristálytiszta, sekély természetes úszómedence.", ro: "O piscină naturală cristalină și puțin adâncă.", en: "A crystal-clear, shallow natural swimming pool." },
    facts: {
      de: ["Flaches Wasser", "Sehr klar", "Naturschönheit", "Entspannungsort"],
      hu: ["Sekély víz", "Nagyon tiszta", "Természeti szépség", "Relaxációs hely"],
      ro: ["Apă puțin adâncă", "Foarte clară", "Frumusețe naturală", "Loc de relaxare"],
      en: ["Shallow water", "Very clear", "Natural beauty", "Place for relaxation"]
    }
  },
  {
    id: "na-caprivi-floodplains-nature-v2",
    type: "river",
    parent: "NA-ZA",
    coords: [24.0, -17.5],
    name: { de: "Caprivi-Auen", hu: "Caprivi-ártér", ro: "Luncile inundabile Caprivi", en: "Caprivi Floodplains" },
    description: { de: "Überschwemmungsgebiete am Sambesi-Fluss.", hu: "Ártéri területek a Zambézi folyó mentén.", ro: "Zone inundabile de-a lungul râului Zambezi.", en: "Floodplains along the Zambezi River." },
    facts: {
      de: ["Überschwemmungsgebiet", "Sambesi-Nähe", "Biodiversität", "Feuchtgebiet"],
      hu: ["Ártéri terület", "Zambézi közelsége", "Biodiverzitás", "Vizes élőhely"],
      ro: ["Zonă inundabilă", "Apropierea de Zambezi", "Biodiversitate", "Zonă umedă"],
      en: ["Floodplain", "Zambezi proximity", "Biodiversity", "Wetland"]
    }
  },
  {
    id: "na-chobe-river-nature-v2",
    type: "river",
    parent: "NA-ZA",
    coords: [24.5, -17.8],
    name: { de: "Chobe-Fluss", hu: "Chobe folyó", ro: "Râul Chobe", en: "Chobe River" },
    description: { de: "Ein bedeutender Nebenfluss in der Caprivi-Region.", hu: "Jelentős mellékfolyó a Caprivi régióban.", ro: "Un afluent semnificativ în regiunea Caprivi.", en: "A significant tributary in the Caprivi region." },
    facts: {
      de: ["Reich an Wildtieren", "Grenznah", "Flussökosystem", "Schutzgebiet"],
      hu: ["Gazdag vadvilágban", "Határközeli", "Folyami ökoszisztéma", "Védett terület"],
      ro: ["Bogată în animale sălbatice", "Aproape de frontieră", "Ecosistem fluvial", "Zonă protejată"],
      en: ["Rich in wildlife", "Near border", "River ecosystem", "Protected area"]
    }
  },
  {
    id: "na-kwando-river-nature-v2",
    type: "river",
    parent: "NA-ZA",
    coords: [23.5, -18.0],
    name: { de: "Kwando-Fluss", hu: "Kwando folyó", ro: "Râul Kwando", en: "Kwando River" },
    description: { de: "Ein Flusslauf im Nordosten Namibias.", hu: "Folyófolyam Namíbia északkeleti részén.", ro: "Un curs de râu în nord-estul Namibiei.", en: "A river course in northeastern Namibia." },
    facts: {
      de: ["Flusslauf", "Caprivi-Region", "Wildtierreich", "Ökosystem"],
      hu: ["Folyófolyam", "Caprivi régió", "Vadvilágban gazdag", "Ökoszisztéma"],
      ro: ["Curs de râu", "Regiunea Caprivi", "Bogată în animale sălbatice", "Ecosistem"],
      en: ["River course", "Caprivi region", "Rich in wildlife", "Ecosystem"]
    }
  },
  {
    id: "na-zambezi-river-nature-v2",
    type: "river",
    parent: "NA-ZA",
    coords: [24.3, -17.7],
    name: { de: "Sambesi-Fluss", hu: "Zambézi folyó", ro: "Râul Zambezi", en: "Zambezi River" },
    description: { de: "Ein bedeutender afrikanischer Fluss.", hu: "Jelentős afrikai folyó.", ro: "Un râu african semnificativ.", en: "A significant African river." },
    facts: {
      de: ["Großer afrikanischer Fluss", "Caprivi-Grenze", "Biodivers", "Wichtig"],
      hu: ["Nagy afrikai folyó", "Caprivi-határ", "Biodiverz", "Fontos"],
      ro: ["Mare râu african", "Frontiera Caprivi", "Biodivers", "Important"],
      en: ["Major African river", "Caprivi border", "Biodiverse", "Important"]
    }
  },
  {
    id: "na-erongo-mountains-nature-v2",
    type: "mountain",
    parent: "NA-ER",
    coords: [15.5, -21.5],
    name: { de: "Erongo-Gebirge", hu: "Erongo-hegység", ro: "Munții Erongo", en: "Erongo Mountains" },
    description: { de: "Ein bergiges Gebiet mit vulkanischem Ursprung.", hu: "Hegyvidéki terület vulkanikus eredettel.", ro: "O zonă muntoasă de origine vulcanică.", en: "A mountainous area of volcanic origin." },
    facts: {
      de: ["Vulkanisches Gestein", "Wanderregion", "Natur pur", "Spektakuläre Aussichten"],
      hu: ["Vulkanikus kőzet", "Túrázó régió", "Tiszta természet", "Látványos kilátások"],
      ro: ["Rocă vulcanică", "Regiune de drumeție", "Natură pură", "Vederi spectaculoase"],
      en: ["Volcanic rock", "Hiking region", "Pure nature", "Spectacular views"]
    }
  }
];
