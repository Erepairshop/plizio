import type { POI } from "./poi";

export const poiExtraFranceCities: POI[] = [
  // All batches combined - Final
  {
    id: "city-grenoble-extra",
    type: "city",
    parent: "FR-ARA",
    coords: [5.7245, 45.1885],
    name: { de: "Grenoble", hu: "Grenoble", ro: "Grenoble", en: "Grenoble" },
    description: {
      de: "Grenoble, bekannt als die 'Hauptstadt der Alpen', ist ein bedeutendes europäisches Zentrum für Wissenschaft und Technologie, umgeben von Bergen.",
      hu: "Grenoble, az 'Alpok fővárosa', a tudomány és technológia fontos európai központja, hegyekkel körülvéve.",
      ro: "Grenoble, cunoscut ca 'Capitala Alpilor', este un centru european major pentru știință și tehnologie, înconjurat de munți.",
      en: "Grenoble, known as the 'Capital of the Alps,' is a major European center for science and technology, surrounded by mountains."
    },
    facts: {
      de: ["Gastgeber der Olympischen Winterspiele 1968.", "Zentrum für Nuklearforschung.", "Seilbahn zur Bastille Festung."],
      hu: ["Az 1968-as téli olimpia házigazdája.", "Atomkutatási központ.", "Felvonó a Bastille erődhöz."],
      ro: ["Gazda Jocurilor Olimpice de iarnă din 1968.", "Centru de cercetare nucleară.", "Telecabină către Fortăreața Bastilia."],
      en: ["Host of the 1968 Winter Olympics.", "Center for nuclear research.", "Cable car to the Bastille fortress."]
    }
  },
  {
    id: "city-strasbourg-extra",
    type: "city",
    parent: "FR-GES",
    coords: [7.7521, 48.5734],
    name: { de: "Straßburg", hu: "Strasbourg", ro: "Strasbourg", en: "Strasbourg" },
    description: {
      de: "Straßburg ist der offizielle Sitz des Europäischen Parlaments und ein Symbol der deutsch-französischen Aussöhnung. Die Altstadt Grande Île ist UNESCO-Weltkulturerbe.",
      hu: "Strasbourg az Európai Parlament hivatalos székhelye és a francia-német megbékélés szimbóluma. A Grande Île történelmi központja az UNESCO Világörökség része.",
      ro: "Strasbourg este sediul oficial al Parlamentului European și un simbol al reconcilierii franco-germane. Centrul său istoric, Grande Île, este un sit al Patrimoniului Mondial UNESCO.",
      en: "Strasbourg is the official seat of the European Parliament and a symbol of Franco-German reconciliation. Its historic center, the Grande Île, is a UNESCO World Heritage site."
    },
    facts: {
      de: ["Sitz des Europäischen Parlaments.", "Historisches Viertel 'Petite France'.", "Berühmter Weihnachtsmarkt."],
      hu: ["Az Európai Parlament székhelye.", "A 'Petite France' történelmi negyed.", "Híres karácsonyi vásár."],
      ro: ["Sediul Parlamentului European.", "Cartierul istoric 'Petite France'.", "Târg de Crăciun renumit."],
      en: ["Seat of the European Parliament.", "Historic 'Petite France' quarter.", "Famous Christmas market."]
    }
  },
  {
    id: "industry-airbus-toulouse-extra",
    type: "industry",
    parent: "FR-OCC",
    coords: [1.3636, 43.6291],
    name: { de: "Airbus-Werk Toulouse", hu: "Airbus gyár, Toulouse", ro: "Fabrica Airbus Toulouse", en: "Airbus Factory Toulouse" },
    description: {
      de: "Die Endmontagelinie von Airbus in Toulouse ist eine der größten Industrieanlagen Europas und der Geburtsort vieler Passagierflugzeuge, einschließlich des A380.",
      hu: "Az Airbus toulouse-i végszerelő sora Európa egyik legnagyobb ipari létesítménye, számos utasszállító repülőgép, köztük az A380 szülőhelye.",
      ro: "Linia de asamblare finală Airbus din Toulouse este una dintre cele mai mari facilități industriale din Europa și locul de naștere al multor avioane de pasageri, inclusiv A380.",
      en: "The Airbus final assembly line in Toulouse is one of the largest industrial facilities in Europe and the birthplace of many passenger aircraft, including the A380."
    },
    facts: {
      de: ["Hauptsitz von Airbus.", "Produktion des A320, A330, A350.", "Besuchertouren 'Let's visit Airbus' verfügbar."],
      hu: ["Az Airbus főhadiszállása.", "A320, A330, A350 gyártása.", "Látogatói túrák 'Let's visit Airbus' néven."],
      ro: ["Sediul central al Airbus.", "Producția de A320, A330, A350.", "Tururi pentru vizitatori 'Let's visit Airbus' disponibile."],
      en: ["Headquarters of Airbus.", "Production of A320, A330, A350.", "Visitor tours 'Let's visit Airbus' available."]
    }
  },
  {
    id: "port-le-havre-extra",
    type: "port",
    parent: "FR-NOR",
    coords: [0.1025, 49.4944],
    name: { de: "Hafen von Le Havre", hu: "Le Havre kikötője", ro: "Portul Le Havre", en: "Port of Le Havre" },
    description: {
      de: "Der Hafen von Le Havre ist der zweitgrößte Hafen Frankreichs und ein wichtiges Tor für den internationalen Handel, insbesondere für Container und Ölprodukte.",
      hu: "Le Havre kikötője Franciaország második legnagyobb kikötője, a nemzetközi kereskedelem fontos kapuja, különösen a konténerek és olajtermékek számára.",
      ro: "Portul Le Havre este al doilea cel mai mare port din Franța și o poartă majoră pentru comerțul internațional, în special pentru containere și produse petroliere.",
      en: "The Port of Le Havre is the second largest port in France and a major gateway for international trade, especially for containers and oil products."
    },
    facts: {
      de: ["Größter Containerhafen Frankreichs.", "Wichtig für den Handel mit Nordamerika.", "UNESCO-Weltkulturerbe für seine Nachkriegsarchitektur."],
      hu: ["Franciaország legnagyobb konténerkikötője.", "Fontos az észak-amerikai kereskedelemben.", "A háború utáni építészete miatt UNESCO világörökség."],
      ro: ["Cel mai mare port de containere din Franța.", "Important pentru comerțul cu America de Nord.", "Patrimoniu Mondial UNESCO pentru arhitectura sa postbelică."],
      en: ["France's largest container port.", "Important for trade with North America.", "UNESCO World Heritage site for its post-war architecture."]
    }
  },
  {
    id: "agriculture-bordeaux-vineyards-extra",
    type: "agriculture",
    parent: "FR-NAQ",
    coords: [-0.5792, 44.8378],
    name: { de: "Weinberge von Bordeaux", hu: "Bordeaux-i borvidék", ro: "Viile din Bordeaux", en: "Bordeaux Vineyards" },
    description: {
      de: "Die Weinregion Bordeaux ist weltberühmt für ihre Weine. Tausende von Châteaux produzieren einige der prestigeträchtigsten Weine der Welt.",
      hu: "A Bordeaux-i borvidék világhírű borairól. Több ezer kastély (château) termeli a világ legnevesebb borait.",
      ro: "Regiunea viticolă Bordeaux este renumită în întreaga lume pentru vinurile sale. Mii de castele (châteaux) produc unele dintre cele mai prestigioase vinuri din lume.",
      en: "The Bordeaux wine region is world-famous for its wines. Thousands of châteaux produce some of the most prestigious wines in the world."
    },
    facts: {
      de: ["Über 110.000 Hektar Weinberge.", "Hauptrebsorten: Merlot, Cabernet Sauvignon.", "Die Cité du Vin ist ein Museum, das dem Wein gewidmet ist."],
      hu: ["Több mint 110 000 hektár szőlőültetvény.", "Fő szőlőfajták: Merlot, Cabernet Sauvignon.", "A Cité du Vin egy bormúzeum."],
      ro: ["Peste 110.000 de hectare de vii.", "Soiuri principale: Merlot, Cabernet Sauvignon.", "Cité du Vin este un muzeu dedicat vinului."],
      en: ["Over 110,000 hectares of vineyards.", "Main grape varieties: Merlot, Cabernet Sauvignon.", "The Cité du Vin is a museum dedicated to wine."]
    }
  },
  {
    id: "historical-arena-of-nimes-extra",
    type: "historical",
    parent: "FR-OCC",
    coords: [4.3599, 43.8344],
    name: { de: "Arena von Nîmes", hu: "Nîmes-i Aréna", ro: "Arena din Nîmes", en: "Arena of Nîmes" },
    description: {
      de: "Die Arena von Nîmes ist eines der am besten erhaltenen römischen Amphitheater der Welt. Sie wurde um 70 n. Chr. erbaut und wird heute für Konzerte und Veranstaltungen genutzt.",
      hu: "A Nîmes-i Aréna a világ egyik legjobb állapotban fennmaradt római amfiteátruma. Kb. i.sz. 70-ben épült, ma koncerteknek és rendezvényeknek ad otthont.",
      ro: "Arena din Nîmes este unul dintre cele mai bine conservate amfiteatre romane din lume. Construită în jurul anului 70 d.Hr., astăzi este folosită pentru concerte și evenimente.",
      en: "The Arena of Nîmes is one of the best-preserved Roman amphitheaters in the world. Built around 70 AD, it is now used for concerts and events."
    },
    facts: {
      de: ["Inspiriert vom Kolosseum in Rom.", "Platz für bis zu 24.000 Zuschauer.", "Teil des römischen Erbes von Nîmes."],
      hu: ["A római Colosseum ihlette.", "Akár 24 000 néző befogadására is alkalmas.", "Nîmes római kori örökségének része."],
      ro: ["Inspirat de Colosseumul din Roma.", "Capacitate de până la 24.000 de spectatori.", "Parte a moștenirii romane a orașului Nîmes."],
      en: ["Inspired by the Colosseum in Rome.", "Capacity for up to 24,000 spectators.", "Part of the Roman heritage of Nîmes."]
    }
  },
  {
    id: "landmark-viaduc-de-millau-extra",
    type: "landmark",
    parent: "FR-OCC",
    coords: [3.0766, 44.0772],
    name: { de: "Viadukt von Millau", hu: "Millau-i völgyhíd", ro: "Viaductul Millau", en: "Millau Viaduct" },
    description: {
      de: "Das Viadukt von Millau ist die höchste Schrägseilbrücke der Welt und ein Meisterwerk der Ingenieurskunst, entworfen von Norman Foster und Michel Virlogeux.",
      hu: "A Millau-i völgyhíd a világ legmagasabb ferdekábeles hídja, a mérnöki tudomány mesterműve, melyet Norman Foster és Michel Virlogeux tervezett.",
      ro: "Viaductul Millau este cel mai înalt pod hobanat din lume și o capodoperă a ingineriei, proiectată de Norman Foster și Michel Virlogeux.",
      en: "The Millau Viaduct is the tallest cable-stayed bridge in the world and a masterpiece of engineering, designed by Norman Foster and Michel Virlogeux."
    },
    facts: {
      de: ["Höher als der Eiffelturm.", "Eröffnet im Jahr 2004.", "Überspannt das Tal des Flusses Tarn."],
      hu: ["Magasabb, mint az Eiffel-torony.", "2004-ben nyílt meg.", "A Tarn folyó völgyét hidalja át."],
      ro: ["Mai înalt decât Turnul Eiffel.", "Inaugurat în 2004.", "Traversează valea râului Tarn."],
      en: ["Taller than the Eiffel Tower.", "Opened in 2004.", "Spans the valley of the river Tarn."]
    }
  },
  {
    id: "nature-gorges-du-verdon-extra",
    type: "river",
    parent: "FR-PAC",
    coords: [6.368, 43.749],
    name: { de: "Verdonschlucht", hu: "Verdon-szurdok", ro: "Cheile Verdonului", en: "Verdon Gorge" },
    description: {
      de: "Die Verdonschlucht ist einer der tiefsten und schönsten Canyons Europas. Der türkisfarbene Fluss Verdon hat sich hier tief in die Kalksteinfelsen gegraben.",
      hu: "A Verdon-szurdok Európa egyik legmélyebb és legszebb kanyonja. A türkizkék Verdon folyó mélyen bevágta magát a mészkősziklákba.",
      ro: "Cheile Verdonului sunt unul dintre cele mai adânci și mai frumoase canioane din Europa. Râul Verdon, de culoare turcoaz, a săpat adânc în stâncile de calcar.",
      en: "The Verdon Gorge is one of the deepest and most beautiful canyons in Europe. The turquoise Verdon River has carved deep into the limestone cliffs."
    },
    facts: {
      de: ["Bis zu 700 Meter tief.", "Beliebt für Kajakfahren, Wandern und Klettern.", "Teil des Regionalen Naturparks Verdon."],
      hu: ["Akár 700 méter mély.", "Népszerű kajakozásra, túrázásra és sziklamászásra.", "A Verdon Regionális Natúrpark része."],
      ro: ["Adâncime de până la 700 de metri.", "Popular pentru caiac, drumeții și alpinism.", "Parte a Parcului Natural Regional Verdon."],
      en: ["Up to 700 meters deep.", "Popular for kayaking, hiking, and climbing.", "Part of the Verdon Regional Natural Park."]
    }
  },
  {
    id: "castle-chateau-de-chambord-extra",
    type: "castle",
    parent: "FR-CVL",
    coords: [1.5173, 47.6162],
    name: { de: "Schloss Chambord", hu: "Chambord-i kastély", ro: "Castelul Chambord", en: "Château de Chambord" },
    description: {
      de: "Schloss Chambord ist das größte Schloss der Loire und ein Meisterwerk der französischen Renaissance-Architektur, das möglicherweise von Leonardo da Vinci beeinflusst wurde.",
      hu: "A Chambord-i kastély a Loire-völgy legnagyobb kastélya, a francia reneszánsz építészet mesterműve, melyet valószínűleg Leonardo da Vinci is befolyásolt.",
      ro: "Castelul Chambord este cel mai mare castel de pe Valea Loarei și o capodoperă a arhitecturii renascentiste franceze, posibil influențată de Leonardo da Vinci.",
      en: "Château de Chambord is the largest château in the Loire Valley and a masterpiece of French Renaissance architecture, possibly influenced by Leonardo da Vinci."
    },
    facts: {
      de: ["Gebaut als Jagdschloss für König Franz I.", "Berühmte doppelläufige Wendeltreppe.", "Umg eben von einem riesigen Waldgebiet."],
      hu: ["I. Ferenc király vadászkastélyának épült.", "Híres kettős csigalépcső.", "Hatalmas erdőterület veszi körül."],
      ro: ["Construit ca reședință de vânătoare pentru regele Francisc I.", "Scară dublă elicoidală faimoasă.", "Înconjurat de o pădure vastă."],
      en: ["Built as a hunting lodge for King Francis I.", "Famous double-helix staircase.", "Surrounded by a vast forest estate."]
    }
  },
  {
    id: "kid-landmark-parc-asterix-extra",
    type: "kid-landmark",
    parent: "FR-HDF",
    coords: [2.5723, 49.1342],
    name: { de: "Parc Astérix", hu: "Parc Astérix", ro: "Parc Astérix", en: "Parc Astérix" },
    description: {
      de: "Der Parc Astérix ist ein Themenpark, der auf der berühmten Comic-Serie von Goscinny und Uderzo basiert. Er bietet eine Mischung aus Achterbahnen und thematischen Welten.",
      hu: "A Parc Astérix egy vidámpark, amely Goscinny és Uderzo híres képregénysorozatán alapul. Hullámvasutak és tematikus világok keverékét kínálja.",
      ro: "Parc Astérix este un parc tematic bazat pe faimoasa serie de benzi desenate de Goscinny și Uderzo. Oferă un amestec de montañe ruse și lumi tematice.",
      en: "Parc Astérix is a theme park based on the famous comic book series by Goscinny and Uderzo. It offers a mix of roller coasters and themed worlds."
    },
    facts: {
      de: ["Themenwelten: Gallien, Römisches Reich, Griechenland.", "Über 40 Attraktionen und Shows.", "Berühmt für seine großen Achterbahnen wie 'OzIris'."],
      hu: ["Tematikus világok: Gallia, Római Birodalom, Görögország.", "Több mint 40 attrakció és show.", "Híres a nagy hullámvasútjairól, mint az 'OzIris'."],
      ro: ["Lumi tematice: Galia, Imperiul Roman, Grecia.", "Peste 40 de atracții și spectacole.", "Faimos pentru montagne rusele mari precum 'OzIris'."],
      en: ["Themed worlds: Gaul, Roman Empire, Greece.", "Over 40 attractions and shows.", "Famous for its big roller coasters like 'OzIris'."]
    }
  },
  {
    id: "city-rouen-extra",
    type: "city",
    parent: "FR-NOR",
    coords: [1.0993, 49.4432],
    name: { de: "Rouen", hu: "Rouen", ro: "Rouen", en: "Rouen" },
    description: {
      de: "Rouen ist die historische Hauptstadt der Normandie, bekannt für ihre beeindruckende Kathedrale, die von Claude Monet gemalt wurde, und als der Ort, an dem Jeanne d'Arc verbrannt wurde.",
      hu: "Rouen Normandia történelmi fővárosa, híres lenyűgöző katedrálisáról, melyet Claude Monet is megfestett, és arról a helyről, ahol Jeanne d'Arc-ot megégették.",
      ro: "Rouen este capitala istorică a Normandiei, cunoscută pentru catedrala sa impresionantă pictată de Claude Monet și ca locul unde a fost arsă pe rug Ioana d'Arc.",
      en: "Rouen is the historic capital of Normandy, known for its impressive cathedral painted by Claude Monet and as the place where Joan of Arc was burned at the stake."
    },
    facts: {
      de: ["Kathedrale Notre-Dame de Rouen.", "Gros-Horloge, eine astronomische Uhr aus dem 14. Jahrhundert.", "Jeanne d'Arc wurde 1431 hier hingerichtet."],
      hu: ["Notre-Dame de Rouen katedrális.", "Gros-Horloge, egy 14. századi csillagászati óra.", "Jeanne d'Arc-ot 1431-ben itt végezték ki."],
      ro: ["Catedrala Notre-Dame de Rouen.", "Gros-Horloge, un ceas astronomic din secolul al XIV-lea.", "Ioana d'Arc a fost executată aici în 1431."],
      en: ["Notre-Dame de Rouen Cathedral.", "Gros-Horloge, a 14th-century astronomical clock.", "Joan of Arc was executed here in 1431."]
    }
  },
  {
    id: "mountain-aiguille-du-midi-extra",
    type: "mountain",
    parent: "FR-ARA",
    coords: [6.8871, 45.8795],
    name: { de: "Aiguille du Midi", hu: "Aiguille du Midi", ro: "Aiguille du Midi", en: "Aiguille du Midi" },
    description: {
      de: "Die Aiguille du Midi ist ein 3.842 m hoher Berg im Mont-Blanc-Massiv. Eine Seilbahn führt zum Gipfel und bietet einen spektakulären Blick auf die Alpen.",
      hu: "Az Aiguille du Midi egy 3842 méter magas hegy a Mont Blanc-masszívumban. Egy felvonó visz fel a csúcsra, ahonnan lenyűgöző kilátás nyílik az Alpokra.",
      ro: "Aiguille du Midi este un munte de 3.842 m în masivul Mont Blanc. O telecabină duce spre vârf, oferind o priveliște spectaculoasă asupra Alpilor.",
      en: "The Aiguille du Midi is a 3,842m mountain in the Mont Blanc massif. A cable car leads to the summit, offering a spectacular view of the Alps."
    },
    facts: {
      de: ["Höchste Seilbahn Europas.", "Panoramablick auf den Mont Blanc.", "Attraktion 'Step into the Void', ein Glaskasten über dem Abgrund."],
      hu: ["Európa legmagasabb felvonója.", "Panorámás kilátás a Mont Blanc-ra.", "'Lépj a semmibe' attrakció, egy üvegdoboz a szakadék felett."],
      ro: ["Cea mai înaltă telecabină din Europa.", "Vedere panoramică a Mont Blancului.", "Atracția 'Pas în gol', o cutie de sticlă deasupra abisului."],
      en: ["Highest cable car in Europe.", "Panoramic view of Mont Blanc.", "'Step into the Void' attraction, a glass box over the precipice."]
    }
  },
  {
    id: "city-montpellier-extra",
    type: "city",
    parent: "FR-OCC",
    coords: [3.8767, 43.6108],
    name: { de: "Montpellier", hu: "Montpellier", ro: "Montpellier", en: "Montpellier" },
    description: {
      de: "Montpellier ist eine dynamische Stadt im Süden Frankreichs, bekannt für ihre mittelalterlichen Gassen, ihre Universität und den sonnigen Place de la Comédie.",
      hu: "Montpellier egy dinamikus város Dél-Franciaországban, ismert középkori utcáiról, egyeteméről és a napsütötte Place de la Comédie-ról.",
      ro: "Montpellier este un oraș dinamic din sudul Franței, cunoscut pentru străzile sale medievale, universitatea sa și însorita Place de la Comédie.",
      en: "Montpellier is a dynamic city in the south of France, known for its medieval streets, its university, and the sunny Place de la Comédie."
    },
    facts: {
      de: ["Eine der am schnellsten wachsenden Städte Frankreichs.", "Medizinische Fakultät, eine der ältesten der Welt.", "Nähe zu den Mittelmeerstränden."],
      hu: ["Franciaország egyik leggyorsabban növekvő városa.", "Orvosi kar, a világ egyik legrégebbije.", "Közel a Földközi-tengeri strandokhoz."],
      ro: ["Unul dintre orașele cu cea mai rapidă creștere din Franța.", "Facultate de medicină, una dintre cele mai vechi din lume.", "Apropierea de plajele mediteraneene."],
      en: ["One of the fastest-growing cities in France.", "Faculty of Medicine, one of the oldest in the world.", "Proximity to the Mediterranean beaches."]
    }
  },
  {
    id: "animal-habitat-camargue-extra",
    type: "animal-habitat",
    parent: "FR-PAC",
    coords: [4.4286, 43.5539],
    name: { de: "Camargue", hu: "Camargue", ro: "Camargue", en: "Camargue" },
    description: {
      de: "Die Camargue ist ein riesiges Feuchtgebiet im Rhone-Delta, bekannt für ihre weißen Pferde, schwarzen Stiere und rosa Flamingos.",
      hu: "A Camargue egy hatalmas vizes élőhely a Rhône-deltában, híres fehér lovairól, fekete bikáiról és rózsaszín flamingóiról.",
      ro: "Camargue este o zonă umedă vastă în delta Ronului, cunoscută pentru caii săi albi, taurii negri și flamingo roz.",
      en: "The Camargue is a vast wetland in the Rhône delta, famous for its white horses, black bulls, and pink flamingos."
    },
    facts: {
      de: ["Wichtiger Ort für die Vogelbeobachtung.", "Einzigartige Landschaft aus Salzwiesen und Lagunen.", "Reisanbau ist ein wichtiger Wirtschaftszweig."],
      hu: ["Fontos madármegfigyelő hely.", "Egyedülálló táj, sóstavakkal és lagúnákkal.", "A rizstermesztés fontos gazdasági ágazat."],
      ro: ["Loc important pentru observarea păsărilor.", "Peisaj unic de mlaștini sărate și lagune.", "Cultivarea orezului este o industrie importantă."],
      en: ["Important place for bird watching.", "Unique landscape of salt marshes and lagoons.", "Rice cultivation is an important industry."]
    }
  },
  {
    id: "landmark-pont-du-gard-extra",
    type: "landmark",
    parent: "FR-OCC",
    coords: [4.6492, 43.9475],
    name: { de: "Pont du Gard", hu: "Pont du Gard", ro: "Pont du Gard", en: "Pont du Gard" },
    description: {
      de: "Der Pont du Gard ist ein antikes römisches Aquädukt, das den Fluss Gardon überquert. Er ist ein Zeugnis der römischen Ingenieurskunst und UNESCO-Weltkulturerbe.",
      hu: "A Pont du Gard egy ókori római vízvezeték, amely a Gardon folyót keresztezi. A római mérnöki tudás tanúbizonysága és az UNESCO Világörökség része.",
      ro: "Pont du Gard este un apeduct roman antic care traversează râul Gardon. Este o mărturie a ingineriei romane și un sit al Patrimoniului Mondial UNESCO.",
      en: "The Pont du Gard is an ancient Roman aqueduct that crosses the Gardon River. It is a testament to Roman engineering and a UNESCO World Heritage site."
    },
    facts: {
      de: ["Teil eines 50 km langen Aquädukts.", "Erbaut im 1. Jahrhundert n. Chr.", "Höchstes römisches Aquädukt."],
      hu: ["Egy 50 km hosszú vízvezeték része volt.", "Az 1. században épült.", "A legmagasabb római vízvezeték."],
      ro: ["Parte a unui apeduct de 50 km.", "Construit în secolul I d.Hr.", "Cel mai înalt apeduct roman."],
      en: ["Part of a 50 km long aqueduct.", "Built in the 1st century AD.", "Highest Roman aqueduct."]
    }
  },
  {
    id: "historical-carnac-stones-extra",
    type: "historical",
    parent: "FR-BRE",
    coords: [-3.0583, 47.5847],
    name: { de: "Steinreihen von Carnac", hu: "Carnaci kősorok", ro: "Aliniamentele de la Carnac", en: "Carnac Stones" },
    description: {
      de: "Die Steinreihen von Carnac in der Bretagne sind die größte Ansammlung megalithischer Steine der Welt, deren Zweck bis heute ein Rätsel ist.",
      hu: "A bretagne-i Carnaci kősorok a világ legnagyobb megalitikus kőegyüttese, melynek célja máig rejtély.",
      ro: "Aliniamentele de la Carnac din Bretania reprezintă cea mai mare colecție de pietre megalitice din lume, al căror scop rămâne un mister.",
      en: "The Carnac stones in Brittany are the largest collection of megalithic stones in the world, whose purpose remains a mystery to this day."
    },
    facts: {
      de: ["Über 3.000 prähistorische Menhire.", "Stammen aus der Jungsteinzeit (ca. 4500-2000 v. Chr.).", "Drei Hauptgruppen von Steinreihen: Le Ménec, Kermario, Kerlescan."],
      hu: ["Több mint 3000 őskori menhir.", "Az újkőkorszakból származnak (kb. i.e. 4500-2000).", "Három fő kősorcsoport: Le Ménec, Kermario, Kerlescan."],
      ro: ["Peste 3.000 de menhire preistorice.", "Datează din perioada neolitică (cca. 4500-2000 î.Hr.).", "Trei grupuri principale de aliniamente: Le Ménec, Kermario, Kerlescan."],
      en: ["Over 3,000 prehistoric menhirs.", "Dating from the Neolithic period (c. 4500-2000 BC).", "Three main groups of alignments: Le Ménec, Kermario, Kerlescan."]
    }
  },
  {
    id: "city-avignon-extra",
    type: "city",
    parent: "FR-PAC",
    coords: [4.8056, 43.9493],
    name: { de: "Avignon", hu: "Avignon", ro: "Avignon", en: "Avignon" },
    description: {
      de: "Avignon ist berühmt für den Papstpalast, in dem die Päpste im 14. Jahrhundert residierten. Die Brücke von Avignon, Pont Saint-Bénézet, ist ebenfalls weltberühmt.",
      hu: "Avignon a Pápai palotáról híres, ahol a 14. században a pápák székeltek. Az avignoni híd, a Pont Saint-Bénézet, szintén világhírű.",
      ro: "Avignon este renumit pentru Palatul Papilor, unde au locuit papii în secolul al XIV-lea. Podul din Avignon, Pont Saint-Bénézet, este de asemenea faimos în întreaga lume.",
      en: "Avignon is famous for the Palais des Papes (Palace of the Popes), where the Popes resided in the 14th century. The Pont d'Avignon (Pont Saint-Bénézet) is also world-famous."
    },
    facts: {
      de: ["Historisches Zentrum ist UNESCO-Weltkulturerbe.", "Jährliches Theaterfestival im Juli.", "Berühmtes Lied 'Sur le Pont d'Avignon'."],
      hu: ["Történelmi központja az UNESCO Világörökség része.", "Évenkénti színházi fesztivál júliusban.", "Híres dal: 'Sur le Pont d'Avignon'."],
      ro: ["Centrul istoric este un sit al Patrimoniului Mondial UNESCO.", "Festival anual de teatru în iulie.", "Cântecul faimos 'Sur le Pont d'Avignon'."],
      en: ["Historic center is a UNESCO World Heritage site.", "Annual theatre festival in July.", "Famous song 'Sur le Pont d'Avignon'."]
    }
  },
  {
    id: "lake-lake-geneva-extra",
    type: "lake",
    parent: "FR-ARA",
    coords: [6.4, 46.4],
    name: { de: "Genfersee", hu: "Genfi-tó", ro: "Lacul Geneva", en: "Lake Geneva" },
    description: {
      de: "Der Genfersee, an der Grenze zwischen Frankreich und der Schweiz gelegen, ist einer der größten Seen Westeuropas. Er ist bekannt für seine eleganten Städte und die Alpenkulisse.",
      hu: "A Genfi-tó, amely Franciaország és Svájc határán fekszik, Nyugat-Európa egyik legnagyobb tava. Elegáns városairól és alpesi hátteréről ismert.",
      ro: "Lacul Geneva, situat la granița dintre Franța și Elveția, este unul dintre cele mai mari lacuri din Europa de Vest. Este cunoscut pentru orașele sale elegante și peisajul alpin.",
      en: "Lake Geneva, located on the border between France and Switzerland, is one of the largest lakes in Western Europe. It is known for its elegant towns and Alpine backdrop."
    },
    facts: {
      de: ["Größter Alpensee.", "Französische Seite auch 'Lac Léman' genannt.", "Städte wie Évian-les-Bains am Ufer."],
      hu: ["A legnagyobb alpesi tó.", "Francia oldalon 'Lac Léman'-nak is nevezik.", "Olyan városok a partján, mint Évian-les-Bains."],
      ro: ["Cel mai mare lac alpin.", "Partea franceză numită și 'Lac Léman'.", "Orașe precum Évian-les-Bains pe malurile sale."],
      en: ["Largest Alpine lake.", "French side also called 'Lac Léman'.", "Towns like Évian-les-Bains on its shores."]
    }
  },
  {
    id: "forest-fontainebleau-forest-extra",
    type: "forest",
    parent: "FR-IDF",
    coords: [2.699, 48.404],
    name: { de: "Wald von Fontainebleau", hu: "Fontainebleau-i erdő", ro: "Pădurea Fontainebleau", en: "Fontainebleau Forest" },
    description: {
      de: "Der Wald von Fontainebleau ist ein riesiges Waldgebiet südlich von Paris, das für seine Felsformationen, die zum Bouldern genutzt werden, und seine reiche Geschichte berühmt ist.",
      hu: "A Fontainebleau-i erdő egy hatalmas erdőterület Párizstól délre, híres a sziklaformációiról, amelyeket boulderezésre használnak, valamint gazdag történelméről.",
      ro: "Pădurea Fontainebleau este o pădure vastă la sud de Paris, renumită pentru formațiunile sale stâncoase folosite pentru bouldering și pentru istoria sa bogată.",
      en: "The Forest of Fontainebleau is a vast forest south of Paris, famous for its rock formations used for bouldering and its rich history."
    },
    facts: {
      de: ["Eines der größten Waldgebiete Frankreichs.", "Beliebtes Ziel für Boulderer und Wanderer.", "Inspirationsquelle für viele Künstler des 19. Jahrhunderts."],
      hu: ["Franciaország egyik legnagyobb erdőterülete.", "Népszerű célpont a boulder-mászók és túrázók számára.", "Sok 19. századi művész ihletforrása volt."],
      ro: ["Una dintre cele mai mari păduri din Franța.", "Destinație populară pentru bouldering și drumeții.", "Sursă de inspirație pentru mulți artiști din secolul al XIX-lea."],
      en: ["One of the largest forests in France.", "Popular destination for boulderers and hikers.", "Source of inspiration for many 19th-century artists."]
    }
  },
  {
    id: "agriculture-champagne-region-extra",
    type: "agriculture",
    parent: "FR-GES",
    coords: [4.3333, 49.1667],
    name: { de: "Champagne-Region", hu: "Champagne borvidék", ro: "Regiunea Champagne", en: "Champagne Region" },
    description: {
      de: "Die Champagne ist die einzige Region der Welt, in der echter Champagner hergestellt werden darf. Die Weinberge, Häuser und Keller sind UNESCO-Weltkulturerbe.",
      hu: "Champagne az egyetlen régió a világon, ahol valódi pezsgőt lehet készíteni. A szőlőültetvények, a házak és a pincék az UNESCO Világörökség részét képezik.",
      ro: "Champagne este singura regiune din lume unde se poate produce șampanie autentică. Viile, casele și pivnițele sunt situri ale Patrimoniului Mondial UNESCO.",
      en: "Champagne is the only region in the world where true champagne can be produced. Its vineyards, houses, and cellars are a UNESCO World Heritage site."
    },
    facts: {
      de: ["Hauptstädte: Reims und Épernay.", "Herstellung nach der 'méthode champenoise'.", "Kreideböden sind entscheidend für den Geschmack."],
      hu: ["Fő városai: Reims és Épernay.", "A 'méthode champenoise' eljárással készül.", "A krétás talaj döntő a pezsgő íze szempontjából."],
      ro: ["Orașe principale: Reims și Épernay.", "Producție conform 'méthode champenoise'.", "Solurile de cretă sunt cruciale pentru aromă."],
      en: ["Main cities: Reims and Épernay.", "Production according to the 'méthode champenoise'.", "Chalk soils are crucial for the flavor."]
    }
  },
  {
    id: "city-dijon-extra",
    type: "city",
    parent: "FR-BFC",
    coords: [5.0415, 47.3220],
    name: { de: "Dijon", hu: "Dijon", ro: "Dijon", en: "Dijon" },
    description: {
      de: "Dijon, die Hauptstadt von Burgund, ist berühmt für ihren Senf, den Kir-Cocktail und ihre reiche Geschichte als Sitz der Herzöge von Burgund.",
      hu: "Dijon, Burgundia fővárosa, híres a mustárjáról, a Kir koktélról és gazdag történelméről, mint a burgundi hercegek székhelye.",
      ro: "Dijon, capitala Burgundiei, este renumit pentru muștarul său, cocktailul Kir și istoria sa bogată ca sediu al ducilor de Burgundia.",
      en: "Dijon, the capital of Burgundy, is famous for its mustard, the Kir cocktail, and its rich history as the seat of the Dukes of Burgundy."
    },
    facts: {
      de: ["Historisches Zentrum ist UNESCO-Weltkulturerbe.", "Palast der Herzöge von Burgund.", "Internationale Gastronomiemesse jeden Herbst."],
      hu: ["Történelmi központja az UNESCO Világörökség része.", "A burgundi hercegek palotája.", "Minden ősszel nemzetközi gasztronómiai vásár."],
      ro: ["Centrul istoric este un sit al Patrimoniului Mondial UNESCO.", "Palatul Ducilor de Burgundia.", "Târg internațional de gastronomie în fiecare toamnă."],
      en: ["Historic center is a UNESCO World Heritage site.", "Palace of the Dukes of Burgundy.", "International gastronomy fair every autumn."]
    }
  },
  {
    id: "castle-chateau-haut-koenigsbourg-extra",
    type: "castle",
    parent: "FR-GES",
    coords: [7.344, 48.249],
    name: { de: "Hohkönigsburg", hu: "Haut-Koenigsbourg kastély", ro: "Castelul Haut-Koenigsbourg", en: "Château du Haut-Koenigsbourg" },
    description: {
      de: "Die Hohkönigsburg im Elsass ist eine restaurierte Bergfestung aus dem 12. Jahrhundert, die einen atemberaubenden Blick über die Rheinebene bietet.",
      hu: "A Haut-Koenigsbourg kastély Elzászban egy 12. századi, helyreállított hegyi erőd, ahonnan lenyűgöző kilátás nyílik a Rajna-völgyre.",
      ro: "Castelul Haut-Koenigsbourg din Alsacia este o fortăreață montană restaurată din secolul al XII-lea, oferind o priveliște uluitoare asupra câmpiei Rinului.",
      en: "The Château du Haut-Koenigsbourg in Alsace is a restored 12th-century mountain fortress offering a breathtaking view over the Rhine plain."
    },
    facts: {
      de: ["Im frühen 20. Jahrhundert von Kaiser Wilhelm II. restauriert.", "Strategische Lage auf einem Felsvorsprung.", "Eine der meistbesuchten Burgen Frankreichs."],
      hu: ["II. Vilmos császár restauráltatta a 20. század elején.", "Stratégiai elhelyezkedés egy sziklakiszögellésen.", "Franciaország egyik leglátogatottabb vára."],
      ro: ["Restaurat la începutul secolului al XX-lea de către împăratul Wilhelm al II-lea.", "Poziție strategică pe un promontoriu stâncos.", "Unul dintre cele mai vizitate castele din Franța."],
      en: ["Restored in the early 20th century by Emperor Wilhelm II.", "Strategic location on a rocky spur.", "One of the most visited castles in France."]
    }
  },
  {
    id: "city-clermont-ferrand-extra",
    type: "city",
    parent: "FR-ARA",
    coords: [3.0870, 45.7772],
    name: { de: "Clermont-Ferrand", hu: "Clermont-Ferrand", ro: "Clermont-Ferrand", en: "Clermont-Ferrand" },
    description: {
      de: "Clermont-Ferrand liegt im Zentralmassiv und ist berühmt für seine Kette von Vulkanen, die Chaîne des Puys, und als Heimat des Reifenherstellers Michelin.",
      hu: "Clermont-Ferrand a Francia-középhegységben fekszik, híres a Chaîne des Puys nevű vulkáni láncáról és a Michelin gumiabroncsgyártó otthonaként.",
      ro: "Clermont-Ferrand se află în Masivul Central și este renumit pentru lanțul său de vulcani, Chaîne des Puys, și ca sediu al producătorului de anvelope Michelin.",
      en: "Clermont-Ferrand is located in the Massif Central and is famous for its chain of volcanoes, the Chaîne des Puys, and as the home of the Michelin tire company."
    },
    facts: {
      de: ["Umgeben von 80 erloschenen Vulkanen.", "Hauptsitz von Michelin.", "Kathedrale aus schwarzem Lavastein."],
      hu: ["80 kialudt vulkán veszi körül.", "A Michelin főhadiszállása.", "Fekete lávakőből épült katedrális."],
      ro: ["Înconjurat de 80 de vulcani stinși.", "Sediul central al Michelin.", "Catedrală construită din piatră de lavă neagră."],
      en: ["Surrounded by 80 dormant volcanoes.", "Headquarters of Michelin.", "Cathedral made of black lava stone."]
    }
  },
  {
    id: "kid-landmark-futuroscope-extra",
    type: "kid-landmark",
    parent: "FR-NAQ",
    coords: [0.3636, 46.6631],
    name: { de: "Futuroscope", hu: "Futuroscope", ro: "Futuroscope", en: "Futuroscope" },
    description: {
      de: "Futuroscope ist ein einzigartiger Themenpark, der sich auf Multimedia, Kino und futuristische Technologien konzentriert. Seine Pavillons haben auffällige, moderne Architekturen.",
      hu: "A Futuroscope egy egyedülálló vidámpark, amely a multimédiára, a moira és a futurisztikus technológiákra összpontosít. Pavilonjai feltűnő, modern építészeti stílusúak.",
      ro: "Futuroscope este un parc tematic unic axat pe multimedia, cinema și tehnologii futuriste. Pavilioanele sale au o arhitectură modernă și izbitoare.",
      en: "Futuroscope is a unique theme park focusing on multimedia, cinema, and futuristic technologies. Its pavilions have striking, modern architectures."
    },
    facts: {
      de: ["Fokus auf audiovisuelle Erlebnisse.", "Mischung aus 3D-, 4D-Kinos und interaktiven Attraktionen.", "Eröffnet im Jahr 1987."],
      hu: ["Fókuszban az audiovizuális élmények.", "3D, 4D mozik és interaktív attrakciók keveréke.", "1987-ben nyílt meg."],
      ro: ["Accent pe experiențe audiovizuiale.", "Amestec de cinematografe 3D, 4D și atracții interactive.", "Inaugurat în 1987."],
      en: ["Focus on audiovisual experiences.", "Mix of 3D, 4D cinemas, and interactive attractions.", "Opened in 1987."]
    }
  },
  {
    id: "historical-omaha-beach-extra",
    type: "historical",
    parent: "FR-NOR",
    coords: [-0.8803, 49.3711],
    name: { de: "Omaha Beach", hu: "Omaha part", ro: "Plaja Omaha", en: "Omaha Beach" },
    description: {
      de: "Omaha Beach war einer der fünf Landungsabschnitte der Alliierten in der Normandie am D-Day, dem 6. Juni 1944. Es war der Ort der intensivsten Kämpfe.",
      hu: "Az Omaha part egyike volt az öt szövetséges partraszállási zónának Normandiában a D-napon, 1944. június 6-án. Itt zajlottak a leghevesebb harcok.",
      ro: "Plaja Omaha a fost una dintre cele cinci sectoare de debarcare ale Aliaților în Normandia în Ziua Z, 6 iunie 1944. A fost locul celor mai intense lupte.",
      en: "Omaha Beach was one of the five Allied landing sectors in Normandy on D-Day, June 6, 1944. It was the site of the most intense fighting."
    },
    facts: {
      de: ["Codename für einen der Hauptlandungsstrände.", "Amerikanischer Soldatenfriedhof in der Nähe.", "Schauplatz schwerer US-Verluste."],
      hu: ["Az egyik fő partraszállási strand kódneve.", "Amerikai katonai temető a közelben.", "Súlyos amerikai veszteségek helyszíne."],
      ro: ["Nume de cod pentru una dintre principalele plaje de debarcare.", "Cimitirul soldaților americani în apropiere.", "Locul unor grele pierderi americane."],
      en: ["Codename for one of the main landing beaches.", "American military cemetery nearby.", "Site of heavy US casualties."]
    }
  },
  {
    id: "animal-habitat-zoo-de-beauval-extra",
    type: "animal-habitat",
    parent: "FR-CVL",
    coords: [1.3533, 47.2464],
    name: { de: "ZooParc de Beauval", hu: "Beauval Állatkert", ro: "Grădina Zoologică Beauval", en: "ZooParc de Beauval" },
    description: {
      de: "Der ZooParc de Beauval zählt zu den besten Zoos der Welt und beherbergt eine außergewöhnliche Vielfalt an Tieren, darunter Riesenpandas.",
      hu: "A ZooParc de Beauval a világ legjobb állatkertjei közé tartozik, és rendkívüli állatfaj-sokféleségnek ad otthont, beleértve az óriáspandákat is.",
      ro: "ZooParc de Beauval este considerată una dintre cele mai bune grădini zoologice din lume, găzduind o varietate excepțională de animale, inclusiv panda uriași.",
      en: "ZooParc de Beauval is ranked among the best zoos in the world, housing an exceptional variety of animals, including giant pandas."
    },
    facts: {
      de: ["Einzige Heimat von Riesenpandas in Frankreich.", "Mehr als 10.000 Tiere.", "Stark in den Bereichen Artenschutz und Forschung engagiert."],
      hu: ["Franciaország egyetlen óriáspanda-otthona.", "Több mint 10 000 állat.", "Erősen elkötelezett a fajvédelem és a kutatás mellett."],
      ro: ["Singurul loc din Franța care găzduiește panda uriași.", "Peste 10.000 de animale.", "Implicat activ în conservarea speciilor și cercetare."],
      en: ["Only home to giant pandas in France.", "More than 10,000 animals.", "Heavily involved in species conservation and research."]
    }
  },
  {
    id: "industry-aero-valley-bordeaux-extra",
    type: "industry",
    parent: "FR-NAQ",
    coords: [-0.7153, 44.8398],
    name: { de: "Aerospace Valley Bordeaux", hu: "Aerospace Valley Bordeaux", ro: "Aerospace Valley Bordeaux", en: "Aerospace Valley Bordeaux" },
    description: {
      de: "Bordeaux ist ein wichtiges Zentrum der französischen Luft- und Raumfahrtindustrie mit Unternehmen wie Dassault Aviation, ArianeGroup und Thales.",
      hu: "Bordeaux a francia repülőgép- és űripar fontos központja, ahol olyan vállalatok működnek, mint a Dassault Aviation, az ArianeGroup és a Thales.",
      ro: "Bordeaux este un centru major pentru industria aerospațială franceză, cu companii precum Dassault Aviation, ArianeGroup și Thales.",
      en: "Bordeaux is a major hub for the French aerospace industry, with companies like Dassault Aviation, ArianeGroup, and Thales."
    },
    facts: {
      de: ["Montage der Falcon-Privatjets.", "Entwicklung und Bau der Ariane-Raketen.", "Wichtiger Standort für militärische und zivile Luftfahrt."],
      hu: ["A Falcon magánrepülőgépek összeszerelése.", "Az Ariane rakéták fejlesztése és építése.", "A katonai és polgári repülés fontos helyszíne."],
      ro: ["Asamblarea avioanelor private Falcon.", "Dezvoltarea și construcția rachetelor Ariane.", "Locație importantă pentru aviația militară și civilă."],
      en: ["Assembly of Falcon private jets.", "Development and construction of Ariane rockets.", "Important site for military and civil aviation."]
    }
  },
  {
    id: "river-loire-extra",
    type: "river",
    parent: "FR-CVL",
    coords: [-0.173, 47.28],
    name: { de: "Loire", hu: "Loire", ro: "Loara", en: "Loire River" },
    description: {
      de: "Die Loire ist der längste Fluss Frankreichs. Ihr Tal, das Loiretal, ist bekannt als der 'Garten Frankreichs' und berühmt für seine vielen Schlösser.",
      hu: "A Loire Franciaország leghosszabb folyója. Völgye, a Loire-völgy, 'Franciaország kertjeként' ismert és számos kastélyáról híres.",
      ro: "Loara este cel mai lung râu din Franța. Valea sa, Valea Loarei, este cunoscută ca 'Grădina Franței' și renumită pentru numeroasele sale castele.",
      en: "The Loire is the longest river in France. Its valley, the Loire Valley, is known as the 'Garden of France' and is famous for its many châteaux."
    },
    facts: {
      de: ["Länge von über 1.000 Kilometern.", "Das Loiretal ist UNESCO-Weltkulturerbe.", "Wichtige Städte am Ufer sind Orléans, Tours und Nantes."],
      hu: ["Több mint 1000 kilométer hosszú.", "A Loire-völgy az UNESCO Világörökség része.", "Fontos városok a partján: Orléans, Tours és Nantes."],
      ro: ["Lungime de peste 1.000 de kilometri.", "Valea Loarei este un sit al Patrimoniului Mondial UNESCO.", "Orașe importante pe malurile sale sunt Orléans, Tours și Nantes."],
      en: ["Length of over 1,000 kilometers.", "The Loire Valley is a UNESCO World Heritage site.", "Important cities on its banks include Orléans, Tours, and Nantes."]
    }
  },
  {
    id: "city-rennes-extra",
    type: "city",
    parent: "FR-BRE",
    coords: [-1.6778, 48.1173],
    name: { de: "Rennes", hu: "Rennes", ro: "Rennes", en: "Rennes" },
    description: {
      de: "Rennes ist die Hauptstadt der Bretagne, bekannt für ihre mittelalterlichen Fachwerkhäuser und die lebhafte Studentenpopulation.",
      hu: "Rennes Bretagne fővárosa, középkori, фахверк házairól és élénk egyetemista népességéről ismert.",
      ro: "Rennes este capitala Bretaniei, cunoscută pentru casele sale medievale cu grinzi de lemn și pentru populația sa vibrantă de studenți.",
      en: "Rennes is the capital of Brittany, known for its medieval half-timbered houses and vibrant student population."
    },
    facts: {
      de: ["Parlament der Bretagne ist ein wichtiges Wahrzeichen.", "Zwei Universitäten und zahlreiche Hochschulen.", "Großer Markt am Samstagmorgen, 'Marché des Lices'."],
      hu: ["Bretagne parlamentje fontos nevezetesség.", "Két egyetem és számos főiskola.", "Nagy piac szombat reggel, a 'Marché des Lices'."],
      ro: ["Parlamentul Bretaniei este un reper important.", "Două universități și numeroase colegii.", "Piață mare sâmbătă dimineața, 'Marché des Lices'."],
      en: ["Parliament of Brittany is a major landmark.", "Two universities and numerous colleges.", "Large market on Saturday morning, 'Marché des Lices'."]
    }
  },
  {
    id: "castle-chateau-de-chenonceau-extra",
    type: "castle",
    parent: "FR-CVL",
    coords: [1.0665, 47.3249],
    name: { de: "Schloss Chenonceau", hu: "Chenonceau-i kastély", ro: "Castelul Chenonceau", en: "Château de Chenonceau" },
    description: {
      de: "Das Schloss Chenonceau, auch bekannt als das 'Damenschloss', ist berühmt für seine elegante Bogenbrücke über den Fluss Cher.",
      hu: "A Chenonceau-i kastély, más néven a 'Hölgyek kastélya', híres a Cher folyó felett átívelő elegáns hídjáról.",
      ro: "Castelul Chenonceau, cunoscut și sub numele de 'Castelul Doamnelor', este renumit pentru podul său elegant cu arcade peste râul Cher.",
      en: "Château de Chenonceau, also known as the 'Ladies' Château', is famous for its elegant arched bridge spanning the River Cher."
    },
    facts: {
      de: ["Von Frauen wie Diane de Poitiers und Katharina von Medici geprägt.", "Wunderschöne Gärten.", "Zweithäufigst besuchtes Schloss Frankreichs nach Versailles."],
      hu: ["Olyan nők alakították, mint Diane de Poitiers és Medici Katalin.", "Gyönyörű kertek.", "Franciaország második leglátogatottabb kastélya Versailles után."],
      ro: ["Modelat de femei precum Diane de Poitiers și Caterina de' Medici.", "Grădini frumoase.", "Al doilea cel mai vizitat castel din Franța, după Versailles."],
      en: ["Shaped by women like Diane de Poitiers and Catherine de' Medici.", "Beautiful gardens.", "Second most visited château in France after Versailles."]
    }
  },
  {
    id: "sea-etretat-cliffs-extra",
    type: "sea",
    parent: "FR-NOR",
    coords: [0.2074, 49.7078],
    name: { de: "Klippen von Étretat", hu: "Étretat-i sziklák", ro: "Stâncile din Étretat", en: "Cliffs of Étretat" },
    description: {
      de: "Die Kreidefelsen von Étretat sind berühmt für ihre natürlichen Bögen, insbesondere die Porte d'Aval und die Aiguille (Nadel).",
      hu: "Az Étretat-i krétasziklák híresek természetes boltíveikről, különösen a Porte d'Aval-ról és az Aiguille-ról (Tű).",
      ro: "Stâncile de cretă din Étretat sunt renumite pentru arcadele lor naturale, în special Porte d'Aval și Aiguille (Acul).",
      en: "The chalk cliffs of Étretat are famous for their natural arches, especially the Porte d'Aval and the Aiguille (Needle)."
    },
    facts: {
      de: ["Inspiration für Künstler wie Claude Monet.", "Drei Hauptbögen: Porte d'Aval, Porte d'Amont, Manneporte.", "Wanderwege auf den Klippen bieten tolle Aussichten."],
      hu: ["Ihletforrás volt olyan művészeknek, mint Claude Monet.", "Három fő boltív: Porte d'Aval, Porte d'Amont, Manneporte.", "A sziklákon futó túraútvonalakról nagyszerű a kilátás."],
      ro: ["Sursă de inspirație pentru artiști precum Claude Monet.", "Trei arcade principale: Porte d'Aval, Porte d'Amont, Manneporte.", "Traseele de drumeție de pe stânci oferă priveliști superbe."],
      en: ["Inspiration for artists like Claude Monet.", "Three main arches: Porte d'Aval, Porte d'Amont, Manneporte.", "Hiking trails on the cliffs offer great views."]
    }
  },
  {
    id: "industry-perfume-grasse-extra",
    type: "industry",
    parent: "FR-PAC",
    coords: [6.9231, 43.6583],
    name: { de: "Parfümindustrie in Grasse", hu: "Grasse-i parfümipar", ro: "Industria parfumurilor din Grasse", en: "Grasse Perfume Industry" },
    description: {
      de: "Grasse gilt als die Welthauptstadt des Parfüms. Seit Jahrhunderten werden hier Duftstoffe aus den umliegenden Blumenfeldern gewonnen.",
      hu: "Grasse-t a parfüm világfővárosának tartják. Évszázadok óta nyernek ki itt illatanyagokat a környező virágmezőkről.",
      ro: "Grasse este considerată capitala mondială a parfumurilor. De secole, aici se extrag esențe din câmpurile de flori din jur.",
      en: "Grasse is considered the world's capital of perfume. For centuries, fragrances have been extracted here from the surrounding flower fields."
    },
    facts: {
      de: ["Heimat berühmter Parfümerien wie Fragonard.", "Internationales Parfümmuseum.", "Anbau von Jasmin, Rose und Tuberose."],
      hu: ["Olyan híres parfümházak otthona, mint a Fragonard.", "Nemzetközi Parfümmúzeum.", "Jázmin-, rózsa- és tubarózsatermesztés."],
      ro: ["Găzduiește parfumerii celebre precum Fragonard.", "Muzeul Internațional al Parfumurilor.", "Cultivarea iasomiei, trandafirilor și tuberozelor."],
      en: ["Home to famous perfumeries like Fragonard.", "International Perfume Museum.", "Cultivation of jasmine, rose, and tuberose."]
    }
  },
  {
    id: "mountain-pyrenees-np-extra",
    type: "mountain",
    parent: "FR-OCC",
    coords: [-0.0833, 42.8333],
    name: { de: "Nationalpark Pyrenäen", hu: "Pireneusok Nemzeti Park", ro: "Parcul Național Pirinei", en: "Pyrenees National Park" },
    description: {
      de: "Der Nationalpark Pyrenäen erstreckt sich entlang der Grenze zu Spanien und bietet spektakuläre Berglandschaften, Seen und Wasserfälle.",
      hu: "A Pireneusok Nemzeti Park a spanyol határ mentén húzódik, és látványos hegyi tájakat, tavakat és vízeséseket kínál.",
      ro: "Parcul Național Pirinei se întinde de-a lungul graniței cu Spania și oferă peisaje montane spectaculoase, lacuri și cascade.",
      en: "The Pyrenees National Park stretches along the border with Spain, offering spectacular mountain landscapes, lakes, and waterfalls."
    },
    facts: {
      de: ["Heimat des Cirque de Gavarnie, einem riesigen Felskessel.", "Reiche Tierwelt mit Gämsen und Bartgeiern.", "Über 350 km markierte Wanderwege."],
      hu: ["A Cirque de Gavarnie, egy hatalmas sziklakatlan otthona.", "Gazdag állatvilág zergékkel és szakállas saskeselyűkkel.", "Több mint 350 km jelzett túraútvonal."],
      ro: ["Găzduiește Cirque de Gavarnie, un circ glaciar uriaș.", "Faună bogată, inclusiv capre negre și zăgani.", "Peste 350 km de trasee de drumeție marcate."],
      en: ["Home to the Cirque de Gavarnie, a huge glacial cirque.", "Rich wildlife including chamois and bearded vultures.", "Over 350 km of marked hiking trails."]
    }
  },
  {
    id: "city-aix-en-provence-extra",
    type: "city",
    parent: "FR-PAC",
    coords: [5.4474, 43.5297],
    name: { de: "Aix-en-Provence", hu: "Aix-en-Provence", ro: "Aix-en-Provence", en: "Aix-en-Provence" },
    description: {
      de: "Aix-en-Provence ist eine elegante Stadt, die für ihre von Platanen gesäumte Allee Cours Mirabeau, ihre Brunnen und als Geburtsort des Malers Paul Cézanne bekannt ist.",
      hu: "Aix-en-Provence egy elegáns város, amely a platánfákkal szegélyezett Cours Mirabeau sétányáról, szökőkútjairól és a festő, Paul Cézanne szülőhelyeként ismert.",
      ro: "Aix-en-Provence este un oraș elegant, cunoscut pentru bulevardul său mărginit de platani, Cours Mirabeau, fântânile sale și ca loc de naștere al pictorului Paul Cézanne.",
      en: "Aix-en-Provence is an elegant city known for its plane tree-lined boulevard, Cours Mirabeau, its fountains, and as the birthplace of the painter Paul Cézanne."
    },
    facts: {
      de: ["'Stadt der tausend Brunnen' genannt.", "Atelier von Paul Cézanne kann besichtigt werden.", "Lebendige Kulturszene mit vielen Festivals."],
      hu: ["Az 'ezer szökőkút városának' is nevezik.", "Paul Cézanne műterme látogatható.", "Élénk kulturális élet, számos fesztivállal."],
      ro: ["Numit 'Orașul celor o mie de fântâni'.", "Atelierul lui Paul Cézanne poate fi vizitat.", "Scenă culturală vibrantă cu multe festivaluri."],
      en: ["Called the 'City of a Thousand Fountains'.", "Paul Cézanne's studio can be visited.", "Vibrant cultural scene with many festivals."]
    }
  },
  {
    id: "historical-lascaux-iv-extra",
    type: "historical",
    parent: "FR-NAQ",
    coords: [1.178, 45.05],
    name: { de: "Lascaux IV", hu: "Lascaux IV", ro: "Lascaux IV", en: "Lascaux IV" },
    description: {
      de: "Lascaux IV ist eine vollständige Nachbildung der berühmten prähistorischen Höhle von Lascaux, die für ihre außergewöhnlichen paläolithischen Malereien bekannt ist.",
      hu: "A Lascaux IV a híres Lascaux-i barlang teljes másolata, amely a rendkívüli paleolitikus festményeiről ismert.",
      ro: "Lascaux IV este o replică completă a faimoasei peșteri preistorice Lascaux, cunoscută pentru picturile sale paleolitice excepționale.",
      en: "Lascaux IV is a complete replica of the famous prehistoric Lascaux cave, known for its exceptional Paleolithic paintings."
    },
    facts: {
      de: ["Originalhöhle wurde zum Schutz geschlossen.", "Über 600 Wandmalereien.", "Die Malereien sind etwa 17.000 Jahre alt."],
      hu: ["Az eredeti barlangot a védelem érdekében lezárták.", "Több mint 600 falfestmény.", "A festmények körülbelül 17 000 évesek."],
      ro: ["Peștera originală a fost închisă pentru conservare.", "Peste 600 de picturi parietale.", "Picturile au o vechime de aproximativ 17.000 de ani."],
      en: ["Original cave was closed for conservation.", "Over 600 parietal paintings.", "The paintings are approximately 17,000 years old."]
    }
  },
  {
    id: "kid-landmark-puy-du-fou-extra",
    type: "kid-landmark",
    parent: "FR-PDL",
    coords: [-0.9306, 46.8931],
    name: { de: "Puy du Fou", hu: "Puy du Fou", ro: "Puy du Fou", en: "Puy du Fou" },
    description: {
      de: "Puy du Fou ist ein historischer Themenpark, der für seine spektakulären Shows bekannt ist, die verschiedene Epochen der französischen Geschichte nachstellen.",
      hu: "A Puy du Fou egy történelmi vidámpark, amely a francia történelem különböző korszakait felelevenítő látványos előadásairól ismert.",
      ro: "Puy du Fou este un parc tematic istoric renumit pentru spectacolele sale grandioase care reconstituie diferite perioade din istoria Franței.",
      en: "Puy du Fou is a historical theme park renowned for its spectacular shows that reenact different periods of French history."
    },
    facts: {
      de: ["Keine Fahrgeschäfte, nur Shows und historische Dörfer.", "Mehrfach als 'Bester Park der Welt' ausgezeichnet.", "Berühmte Nachtshow 'Cinéscénie'."],
      hu: ["Nincsenek hullámvasutak, csak előadások és történelmi falvak.", "Többször is elnyerte a 'Világ legjobb parkja' díjat.", "Híres éjszakai show-ja a 'Cinéscénie'."],
      ro: ["Fără atracții mecanice, doar spectacole și sate istorice.", "Premiat de mai multe ori ca 'Cel mai bun parc din lume'.", "Celebrul spectacol de noapte 'Cinéscénie'."],
      en: ["No rides, only shows and historical villages.", "Awarded 'Best Park in the World' multiple times.", "Famous night show 'Cinéscénie'."]
    }
  },
  {
    id: "agriculture-provence-lavender-extra",
    type: "agriculture",
    parent: "FR-PAC",
    coords: [5.923, 43.933],
    name: { de: "Lavendelfelder der Provence", hu: "Provence-i levendulamezők", ro: "Câmpurile de lavandă din Provence", en: "Lavender Fields of Provence" },
    description: {
      de: "Die Lavendelfelder der Provence bieten im Sommer einen atemberaubenden Anblick und Duft. Das Plateau de Valensole ist einer der berühmtesten Orte dafür.",
      hu: "A provence-i levendulamezők nyáron lélegzetelállító látványt és illatot nyújtanak. A Valensole-fennsík az egyik leghíresebb helyszín.",
      ro: "Câmpurile de lavandă din Provence oferă o priveliște și un parfum uimitoare în timpul verii. Platoul Valensole este unul dintre cele mai faimoase locuri.",
      en: "The lavender fields of Provence offer a breathtaking sight and scent in the summer. The Valensole Plateau is one of the most famous spots."
    },
    facts: {
      de: ["Blütezeit ist von Juni bis August.", "Wird für ätherische Öle, Seifen und Parfüm verwendet.", "Die Lavendelrouten führen durch die schönsten Landschaften."],
      hu: ["A virágzás júniustól augusztusig tart.", "Illóolajokhoz, szappanokhoz és parfümökhöz használják.", "A levendula-utak a legszebb tájakon vezetnek keresztül."],
      ro: ["Perioada de înflorire este din iunie până în august.", "Folosită pentru uleiuri esențiale, săpunuri și parfumuri.", "Rutele lavandei te poartă prin cele mai frumoase peisaje."],
      en: ["Flowering season is from June to August.", "Used for essential oils, soaps, and perfume.", "The lavender routes guide you through the most beautiful landscapes."]
    }
  },
  {
    id: "lake-annecy-extra",
    type: "lake",
    parent: "FR-ARA",
    coords: [6.15, 45.85],
    name: { de: "See von Annecy", hu: "Annecy-tó", ro: "Lacul Annecy", en: "Lake Annecy" },
    description: {
      de: "Der See von Annecy gilt als einer der saubersten Seen Europas. Umgeben von Bergen bietet er eine idyllische Kulisse für Wassersport und Erholung.",
      hu: "Az Annecy-tavat Európa egyik legtisztább tavának tartják. Hegyekkel körülvéve idilli környezetet biztosít a vízi sportokhoz és a pihenéshez.",
      ro: "Lacul Annecy este considerat unul dintre cele mai curate lacuri din Europa. Înconjurat de munți, oferă un cadru idilic pentru sporturi nautice și recreere.",
      en: "Lake Annecy is considered one of the cleanest lakes in Europe. Surrounded by mountains, it offers an idyllic setting for water sports and recreation."
    },
    facts: {
      de: ["Gespeist von Gebirgsquellen.", "Beliebt zum Schwimmen, Segeln und Radfahren um den See.", "Das Palais de l'Isle in Annecy ist ein berühmtes Fotomotiv."],
      hu: ["Hegyi források táplálják.", "Népszerű úszásra, vitorlázásra és a tó körüli kerékpározásra.", "Az Annecy-ban található Palais de l'Isle híres fotótéma."],
      ro: ["Alimentat de izvoare montane.", "Popular pentru înot, navigație și ciclism în jurul lacului.", "Palais de l'Isle din Annecy este un subiect fotografic faimos."],
      en: ["Fed by mountain springs.", "Popular for swimming, sailing, and cycling around the lake.", "The Palais de l'Isle in Annecy is a famous photo motif."]
    }
  }
];
