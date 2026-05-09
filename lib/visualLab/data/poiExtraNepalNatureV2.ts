import type { POI } from "./poi";

export const poiExtraNepalNatureV2: POI[] = [
  {
    id: "mount-everest-nature-v2",
    type: "mountain",
    parent: "NP-P1",
    coords: [86.9250, 27.9881],
    name: { de: "Mount Everest", hu: "Csomolungma", ro: "Muntele Everest", en: "Mount Everest" },
    description: { de: "Der höchste Berg der Erde, der an der Grenze zwischen Nepal und Tibet liegt.", hu: "A Föld legmagasabb hegye, amely Nepál és Tibet határán található.", ro: "Cel mai înalt munte de pe Pământ, situat la granița dintre Nepal și Tibet.", en: "The highest mountain on Earth, located on the border between Nepal and Tibet." },
    facts: {
      de: ["Erreicht eine Höhe von 8.848 Metern.", "Erstbesteigung 1953 durch Hillary und Tenzing."],
      hu: ["Magassága eléri a 8848 métert.", "Elsőként 1953-ban mászta meg Hillary és Tenzing."],
      ro: ["Atinge o altitudine de 8.848 metri.", "Prima ascensiune în 1953 de către Hillary și Tenzing."],
      en: ["Reaches an elevation of 8,848 meters.", "First ascent in 1953 by Hillary and Tenzing."]
    }
  },
  {
    id: "sagarmatha-national-park-nature-v2",
    type: "national-park",
    parent: "NP-P1",
    coords: [86.7333, 27.9333],
    name: { de: "Sagarmatha-Nationalpark", hu: "Sagarmatha Nemzeti Park", ro: "Parcul Național Sagarmatha", en: "Sagarmatha National Park" },
    description: { de: "Ein Schutzgebiet im Himalaya, das vom Mount Everest dominiert wird und zum UNESCO-Welterbe gehört.", hu: "Himalájai természetvédelmi terület, amelyet a Mount Everest ural, és az UNESCO világörökség része.", ro: "O arie protejată din Himalaya, dominată de Muntele Everest și inclusă în Patrimoniul Mondial UNESCO.", en: "A protected area in the Himalayas dominated by Mount Everest and a UNESCO World Heritage site." },
    facts: {
      de: ["Gegründet im Jahr 1976.", "Beheimatet den seltenen Schneeleoparden."],
      hu: ["1976-ban alapították.", "A ritka hópárduc élőhelye."],
      ro: ["Înființat în anul 1976.", "Găzduiește leopardul de zăpadă rar."],
      en: ["Established in 1976.", "Home to the rare snow leopard."]
    }
  },
  {
    id: "chitwan-national-park-nature-v2",
    type: "national-park",
    parent: "NP-P3",
    coords: [84.3333, 27.5000],
    name: { de: "Chitwan-Nationalpark", hu: "Chitwan Nemzeti Park", ro: "Parcul Național Chitwan", en: "Chitwan National Park" },
    description: { de: "Der älteste Nationalpark Nepals, bekannt für seine Artenvielfalt und dichten Dschungel.", hu: "Nepál legrégebbi nemzeti parkja, amely biológiai sokféleségéről és sűrű dzsungeleiről ismert.", ro: "Cel mai vechi parc național din Nepal, cunoscut pentru biodiversitatea sa și junglele dense.", en: "The oldest national park in Nepal, known for its biodiversity and dense jungles." },
    facts: {
      de: ["Gegründet 1973.", "Berühmt für bengalische Tiger und Panzernashörner."],
      hu: ["1973-ban alapították.", "Híres a bengáli tigrisekről és az indiai orrszarvúkról."],
      ro: ["Înființat în 1973.", "Renumit pentru tigrii bengalezi și rinocerii indieni."],
      en: ["Established in 1973.", "Famous for Bengal tigers and Indian rhinoceroses."]
    }
  },
  {
    id: "bardiya-national-park-nature-v2",
    type: "national-park",
    parent: "NP-P5",
    coords: [81.3333, 28.3833],
    name: { de: "Bardiya-Nationalpark", hu: "Bardiya Nemzeti Park", ro: "Parcul Național Bardiya", en: "Bardiya National Park" },
    description: { de: "Das größte und am wenigsten berührte Schutzgebiet in der Terai-Region.", hu: "A Terai régió legnagyobb és legkevésbé érintett természetvédelmi területe.", ro: "Cea mai mare și cea mai puțin atinsă arie protejată din regiunea Terai.", en: "The largest and most undisturbed protected area in the Terai region." },
    facts: {
      de: ["Bedeckt eine Fläche von 968 Quadratkilometern.", "Ein wichtiger Lebensraum für wilde Elefanten."],
      hu: ["Területe 968 négyzetkilométer.", "Fontos élőhelye a vadon élő elefántoknak."],
      ro: ["Acoperă o suprafață de 968 kilometri pătrați.", "Un habitat important pentru elefanții sălbatici."],
      en: ["Covers an area of 968 square kilometers.", "An important habitat for wild elephants."]
    }
  },
  {
    id: "phewa-lake-nature-v2",
    type: "lake",
    parent: "NP-P4",
    coords: [83.9333, 28.2167],
    name: { de: "Phewa-See", hu: "Phewa-tó", ro: "Lacul Phewa", en: "Phewa Lake" },
    description: { de: "Ein malerischer Süßwassersee in Pokhara, der die Gipfel der Annapurna-Kette widerspiegelt.", hu: "Festői édesvizű tó Pokharában, amely tükrözi az Annapurna-hegység csúcsait.", ro: "Un lac pitoresc cu apă dulce în Pokhara, care reflectă vârfurile lanțului Annapurna.", en: "A picturesque freshwater lake in Pokhara that reflects the peaks of the Annapurna range." },
    facts: {
      de: ["Zweitgrößter See in Nepal.", "Der Tal Barahi Tempel liegt auf einer Insel im See."],
      hu: ["Nepál második legnagyobb tava.", "A Tal Barahi templom a tó egyik szigetén található."],
      ro: ["Al doilea lac ca mărime din Nepal.", "Templul Tal Barahi se află pe o insulă din lac."],
      en: ["Second largest lake in Nepal.", "The Tal Barahi Temple is located on an island in the lake."]
    }
  },
  {
    id: "rara-lake-nature-v2",
    type: "lake",
    parent: "NP-P6",
    coords: [82.0833, 29.5333],
    name: { de: "Rara-See", hu: "Rara-tó", ro: "Lacul Rara", en: "Rara Lake" },
    description: { de: "Der größte und tiefste Süßwassersee in den nepalesischen Bergen.", hu: "A legnagyobb és legmélyebb édesvizű tó a nepáli hegyekben.", ro: "Cel mai mare și cel mai adânc lac cu apă dulce din munții nepalezi.", en: "The largest and deepest freshwater lake in the Nepalese mountains." },
    facts: {
      de: ["Liegt auf einer Höhe von 2.990 Metern.", "Das Herzstück des Rara-Nationalparks."],
      hu: ["2990 méteres magasságban fekszik.", "A Rara Nemzeti Park központja."],
      ro: ["Situat la o altitudine de 2.990 de metri.", "Piesa centrală a Parcului Național Rara."],
      en: ["Located at an altitude of 2,990 meters.", "The centerpiece of Rara National Park."]
    }
  },
  {
    id: "tilicho-lake-nature-v2",
    type: "lake",
    parent: "NP-P4",
    coords: [83.8214, 28.6942],
    name: { de: "Tilicho-See", hu: "Tilicho-tó", ro: "Lacul Tilicho", en: "Tilicho Lake" },
    description: { de: "Einer der höchstgelegenen Seen der Welt im Annapurna-Massiv.", hu: "A világ egyik legmagasabban fekvő tava az Annapurna-masszívumban.", ro: "Unul dintre lacurile situate la cea mai mare altitudine din lume, în masivul Annapurna.", en: "One of the highest lakes in the world, located in the Annapurna massif." },
    facts: {
      de: ["Befindet sich auf fast 4.919 Metern über dem Meeresspiegel.", "Ein beliebtes Ziel für Wanderer auf dem Annapurna Circuit."],
      hu: ["Körülbelül 4919 méterrel a tengerszint felett található.", "Népszerű célpont az Annapurna Circuit túrázói számára."],
      ro: ["Situat la aproape 4.919 metri deasupra nivelului mării.", "O destinație populară pentru drumeții de pe Circuitul Annapurna."],
      en: ["Located at almost 4,919 meters above sea level.", "A popular destination for trekkers on the Annapurna Circuit."]
    }
  },
  {
    id: "gokyo-lakes-nature-v2",
    type: "lake",
    parent: "NP-P1",
    coords: [86.6967, 27.9533],
    name: { de: "Gokyo-Seen", hu: "Gokyo-tavak", ro: "Lacurile Gokyo", en: "Gokyo Lakes" },
    description: { de: "Ein System von oligotrophen Seen im Sagarmatha-Nationalpark auf einer Höhe von über 4.700 Metern.", hu: "Oligotróf tavak rendszere a Sagarmatha Nemzeti Parkban, több mint 4700 méteres magasságban.", ro: "Un sistem de lacuri oligotrofe în Parcul Național Sagarmatha, la o altitudine de peste 4.700 de metri.", en: "A system of oligotrophic lakes in Sagarmatha National Park at an altitude of over 4,700 meters." },
    facts: {
      de: ["Das höchste Süßwasserseensystem der Welt.", "Sie gelten sowohl für Hindus als auch für Buddhisten als heilig."],
      hu: ["A világ legmagasabban fekvő édesvizű tórendszere.", "Mind a hinduk, mind a buddhisták szentnek tartják."],
      ro: ["Cel mai înalt sistem de lacuri cu apă dulce din lume.", "Sunt considerate sacre atât de hinduși, cât și de budiști."],
      en: ["The world's highest freshwater lake system.", "They are considered sacred by both Hindus and Buddhists."]
    }
  },
  {
    id: "langtang-national-park-nature-v2",
    type: "national-park",
    parent: "NP-P3",
    coords: [85.5000, 28.2500],
    name: { de: "Langtang-Nationalpark", hu: "Langtang Nemzeti Park", ro: "Parcul Național Langtang", en: "Langtang National Park" },
    description: { de: "Der erste Himalaya-Nationalpark in Nepal, der für seine atemberaubenden Alpentäler bekannt ist.", hu: "Az első himalájai nemzeti park Nepálban, amely lélegzetelállító alpesi völgyeiről ismert.", ro: "Primul parc național himalayan din Nepal, cunoscut pentru văile sale alpine uluitoare.", en: "The first Himalayan national park in Nepal, known for its breathtaking alpine valleys." },
    facts: {
      de: ["Eingerichtet 1976 nördlich von Kathmandu.", "Heimat des roten Pandas und des Himalaya-Schwarzbären."],
      hu: ["1976-ban hozták létre Katmandutól északra.", "A vörös macskamedve és a himalájai feketemedve otthona."],
      ro: ["Înființat în 1976 la nord de Kathmandu.", "Adăpostește panda roșu și ursul negru himalayan."],
      en: ["Established in 1976 north of Kathmandu.", "Home to the red panda and Himalayan black bear."]
    }
  },
  {
    id: "annapurna-conservation-area-nature-v2",
    type: "national-park",
    parent: "NP-P4",
    coords: [83.9333, 28.7333],
    name: { de: "Annapurna-Schutzgebiet", hu: "Annapurna Természetvédelmi Terület", ro: "Aria de Conservare Annapurna", en: "Annapurna Conservation Area" },
    description: { de: "Das größte Naturschutzgebiet Nepals, das die gesamte Annapurna-Gebirgskette umfasst.", hu: "Nepál legnagyobb természetvédelmi területe, amely a teljes Annapurna-hegységet magában foglalja.", ro: "Cea mai mare arie de conservare din Nepal, cuprinzând întregul lanț muntos Annapurna.", en: "Nepal's largest protected area, encompassing the entire Annapurna mountain range." },
    facts: {
      de: ["Mit 7.629 Quadratkilometern die größte Schutzregion Nepals.", "Bietet einige der berühmtesten Trekkingrouten der Welt."],
      hu: ["7629 négyzetkilométeres területével Nepál legnagyobb védett régiója.", "A világ leghíresebb túraútvonalainak ad otthont."],
      ro: ["Cu 7.629 kilometri pătrați, este cea mai mare regiune protejată din Nepal.", "Oferă unele dintre cele mai faimoase trasee de drumeție din lume."],
      en: ["With 7,629 square kilometers, it is Nepal's largest protected region.", "Features some of the world's most famous trekking routes."]
    }
  },
  {
    id: "shey-phoksundo-national-park-nature-v2",
    type: "national-park",
    parent: "NP-P6",
    coords: [82.9000, 29.3500],
    name: { de: "Shey-Phoksundo-Nationalpark", hu: "Shey Phoksundo Nemzeti Park", ro: "Parcul Național Shey Phoksundo", en: "Shey Phoksundo National Park" },
    description: { de: "Ein transhimalayischer Nationalpark im Nordwesten Nepals mit spektakulären Berglandschaften.", hu: "Transzhimalájai nemzeti park Északnyugat-Nepálban, látványos hegyvidéki tájakkal.", ro: "Un parc național transhimalayan din nord-vestul Nepalului, cu peisaje montane spectaculoase.", en: "A trans-Himalayan national park in northwestern Nepal with spectacular mountain landscapes." },
    facts: {
      de: ["Beinhaltet den tiefblauen Phoksundo-See.", "Der einzige Nationalpark in der Region Dolpa."],
      hu: ["Itt található a mélykék Phoksundo-tó.", "Az egyetlen nemzeti park a Dolpa régióban."],
      ro: ["Include lacul albastru profund Phoksundo.", "Singurul parc național din regiunea Dolpa."],
      en: ["Contains the deep blue Phoksundo Lake.", "The only national park in the Dolpa region."]
    }
  },
  {
    id: "koshi-tappu-wildlife-reserve-nature-v2",
    type: "national-park",
    parent: "NP-P1",
    coords: [87.0000, 26.6500],
    name: { de: "Koshi-Tappu-Wildreservat", hu: "Koshi Tappu Vadvédelmi Terület", ro: "Rezervația de animale sălbatice Koshi Tappu", en: "Koshi Tappu Wildlife Reserve" },
    description: { de: "Ein wichtiges Feuchtgebiet am Sapta-Koshi-Fluss, bekannt für seine vielfältige Vogelwelt.", hu: "Fontos vizes élőhely a Sapta Koshi folyó mentén, amely változatos madárvilágáról ismert.", ro: "O zonă umedă importantă de-a lungul râului Sapta Koshi, cunoscută pentru diversitatea sa de păsări.", en: "An important wetland on the Sapta Koshi River, known for its diverse birdlife." },
    facts: {
      de: ["Ein wichtiges Ramsar-Gebiet seit 1987.", "Die letzte Zuflucht für wilde Wasserbüffel in Nepal."],
      hu: ["1987 óta fontos Ramsari terület.", "A vadon élő vízibivalyok utolsó menedéke Nepálban."],
      ro: ["O importantă zonă Ramsar din 1987.", "Ultimul refugiu pentru bivolii de apă sălbatici din Nepal."],
      en: ["An important Ramsar site since 1987.", "The last refuge for wild water buffaloes in Nepal."]
    }
  },
  {
    id: "karnali-river-nature-v2",
    type: "river",
    parent: "NP-P6",
    coords: [81.1667, 28.3333],
    name: { de: "Karnali", hu: "Karnali-folyó", ro: "Râul Karnali", en: "Karnali River" },
    description: { de: "Der längste Fluss Nepals, der in Tibet entspringt und nach Indien fließt.", hu: "Nepál leghosszabb folyója, amely Tibetben ered és Indiába áramlik.", ro: "Cel mai lung râu din Nepal, care izvorăște în Tibet și curge spre India.", en: "The longest river in Nepal, originating in Tibet and flowing into India." },
    facts: {
      de: ["Rund 507 Kilometer lang in Nepal.", "Beliebt für Wildwasser-Rafting-Expeditionen."],
      hu: ["Körülbelül 507 kilométer hosszú Nepálban.", "Népszerű a vadvízi evezős expedíciók körében."],
      ro: ["Are o lungime de aproximativ 507 kilometri în Nepal.", "Popular pentru expedițiile de rafting pe ape repezi."],
      en: ["About 507 kilometers long in Nepal.", "Popular for whitewater rafting expeditions."]
    }
  },
  {
    id: "kali-gandaki-river-nature-v2",
    type: "river",
    parent: "NP-P4",
    coords: [83.6000, 27.7500],
    name: { de: "Kali Gandaki", hu: "Kali Gandaki folyó", ro: "Râul Kali Gandaki", en: "Kali Gandaki River" },
    description: { de: "Ein mächtiger Himalaya-Fluss, der für die tiefste Schlucht der Welt bekannt ist.", hu: "Hatalmas himalájai folyó, amely a világ legmélyebb szurdokáról ismert.", ro: "Un râu himalayan puternic, cunoscut pentru cel mai adânc defileu din lume.", en: "A mighty Himalayan river known for carving the deepest gorge in the world." },
    facts: {
      de: ["Fließt zwischen dem Dhaulagiri und der Annapurna.", "Bekannt für schwarze Ammoniten-Fossilien namens Shaligram."],
      hu: ["A Dhaulagiri és az Annapurna között folyik.", "Ismert a Shaligram nevű fekete ammonitesz kövületekről."],
      ro: ["Curge între Dhaulagiri și Annapurna.", "Cunoscut pentru fosilele de amoniți negri numite Shaligram."],
      en: ["Flows between Dhaulagiri and Annapurna.", "Known for black ammonite fossils called Shaligram."]
    }
  },
  {
    id: "kanchenjunga-nature-v2",
    type: "mountain",
    parent: "NP-P1",
    coords: [88.1475, 27.7025],
    name: { de: "Kangchendzönga", hu: "Kancsendzönga", ro: "Kangchenjunga", en: "Kangchenjunga" },
    description: { de: "Der dritthöchste Berg der Welt, an der Grenze zwischen Nepal und dem indischen Bundesstaat Sikkim.", hu: "A világ harmadik legmagasabb hegye, Nepál és az indiai Szikkim állam határán.", ro: "Al treilea cel mai înalt munte din lume, la granița dintre Nepal și statul indian Sikkim.", en: "The third highest mountain in the world, on the border between Nepal and the Indian state of Sikkim." },
    facts: {
      de: ["Erreicht eine Höhe von 8.586 Metern.", "Der Name bedeutet 'Die fünf Schatzkammern des großen Schnees'."],
      hu: ["Magassága 8586 méter.", "A neve azt jelenti: 'A nagy hó öt kincsesháza'."],
      ro: ["Atinge o altitudine de 8.586 metri.", "Numele său înseamnă 'Cele cinci comori ale zăpezii mari'."],
      en: ["Reaches a height of 8,586 meters.", "The name means 'The Five Treasures of the High Snow'."]
    }
  },
  {
    id: "makalu-nature-v2",
    type: "mountain",
    parent: "NP-P1",
    coords: [87.0889, 27.8897],
    name: { de: "Makalu", hu: "Makalu", ro: "Makalu", en: "Makalu" },
    description: { de: "Der fünfthöchste Berg der Welt, ein markanter vierseitiger Pyramiden-Gipfel.", hu: "A világ ötödik legmagasabb hegye, jellegzetes négyoldalú piramis alakú csúccsal.", ro: "Al cincilea cel mai înalt munte din lume, un vârf piramidal distinct cu patru laturi.", en: "The fifth highest mountain in the world, a prominent four-sided pyramid peak." },
    facts: {
      de: ["Ist 8.485 Meter hoch.", "Liegt nur 19 Kilometer südöstlich des Mount Everest."],
      hu: ["8485 méter magas.", "Mindössze 19 kilométerre délkeletre fekszik a Mount Everesttől."],
      ro: ["Are o altitudine de 8.485 de metri.", "Situat la doar 19 kilometri sud-est de Muntele Everest."],
      en: ["Is 8,485 meters high.", "Located just 19 kilometers southeast of Mount Everest."]
    }
  },
  {
    id: "dhaulagiri-nature-v2",
    type: "mountain",
    parent: "NP-P4",
    coords: [83.4897, 28.6972],
    name: { de: "Dhaulagiri", hu: "Dhaulagiri", ro: "Dhaulagiri", en: "Dhaulagiri" },
    description: { de: "Ein riesiges Bergmassiv und der siebthöchste Berg der Erde.", hu: "Hatalmas hegymasszívum és a Föld hetedik legmagasabb hegye.", ro: "Un masiv muntos uriaș și al șaptelea cel mai înalt munte de pe Pământ.", en: "A massive mountain range and the seventh highest mountain on Earth." },
    facts: {
      de: ["Sein höchster Gipfel misst 8.167 Meter.", "Wurde 1960 zum ersten Mal bestiegen."],
      hu: ["Legmagasabb csúcsa 8167 méter.", "1960-ban mászták meg először."],
      ro: ["Cel mai înalt vârf al său măsoară 8.167 de metri.", "A fost escaladat pentru prima dată în 1960."],
      en: ["Its highest peak measures 8,167 meters.", "Was first climbed in 1960."]
    }
  },
  {
    id: "shivapuri-nagarjun-national-park-nature-v2",
    type: "national-park",
    parent: "NP-P3",
    coords: [85.3833, 27.8000],
    name: { de: "Shivapuri-Nagarjun-Nationalpark", hu: "Shivapuri Nagarjun Nemzeti Park", ro: "Parcul Național Shivapuri Nagarjun", en: "Shivapuri Nagarjun National Park" },
    description: { de: "Der am nächsten zur Hauptstadt Kathmandu gelegene Nationalpark mit dichten Wäldern.", hu: "A fővároshoz, Katmanduhoz legközelebb eső, sűrű erdőkkel borított nemzeti park.", ro: "Cel mai apropiat parc național de capitala Kathmandu, cu păduri dense.", en: "The closest national park to the capital Kathmandu, featuring dense forests." },
    facts: {
      de: ["Dient als wichtige Wasserquelle für Kathmandu.", "Ein beliebtes Ziel für Tageswanderungen."],
      hu: ["Fontos vízforrásként szolgál Katmandu számára.", "Népszerű célpont egynapos túrázásokhoz."],
      ro: ["Servește ca sursă importantă de apă pentru Kathmandu.", "O destinație populară pentru drumeții de o zi."],
      en: ["Serves as a major water source for Kathmandu.", "A popular destination for day hikes."]
    }
  },
  {
    id: "shuklaphanta-national-park-nature-v2",
    type: "national-park",
    parent: "NP-P7",
    coords: [80.1167, 28.8500],
    name: { de: "Shuklaphanta-Nationalpark", hu: "Shuklaphanta Nemzeti Park", ro: "Parcul Național Shuklaphanta", en: "Shuklaphanta National Park" },
    description: { de: "Ein Schutzgebiet im äußersten Südwesten Nepals mit ausgedehnten Graslandschaften.", hu: "Természetvédelmi terület Nepál legdélnyugatibb részén, kiterjedt füves pusztákkal.", ro: "O arie protejată în extremitatea de sud-vest a Nepalului, cu pajiști extinse.", en: "A protected area in the far southwest of Nepal with extensive grasslands." },
    facts: {
      de: ["Besitzt die größte Population von Barasingha-Hirschen in Nepal.", "Wurde 2017 zum Nationalpark aufgewertet."],
      hu: ["Itt él Nepál legnagyobb mocsári szarvas populációja.", "2017-ben kapott nemzeti parki státuszt."],
      ro: ["Are cea mai mare populație de cerbi de mlaștină din Nepal.", "A fost promovat la statutul de parc național în 2017."],
      en: ["Holds the largest population of swamp deer in Nepal.", "Was upgraded to national park status in 2017."]
    }
  },
  {
    id: "sun-kosi-river-nature-v2",
    type: "river",
    parent: "NP-P3",
    coords: [86.1000, 27.6000],
    name: { de: "Sunkoshi", hu: "Sun Kosi folyó", ro: "Râul Sun Kosi", en: "Sun Kosi River" },
    description: { de: "Ein bedeutender Fluss, der durch die Ausläufer des Himalaya fließt und für seine Stromschnellen bekannt ist.", hu: "Jelentős folyó, amely a Himalája lábánál folyik, és a zúgóiról híres.", ro: "Un râu important care curge prin poalele Munților Himalaya și este renumit pentru prăpăstiile sale.", en: "A major river flowing through the foothills of the Himalayas, known for its rapids." },
    facts: {
      de: ["Der Name bedeutet übersetzt 'Fluss aus Gold'.", "Einer der besten Flüsse für Wildwasser-Rafting weltweit."],
      hu: ["A neve azt jelenti: 'Arany folyó'.", "A világ egyik legjobb vadvízi evezős folyója."],
      ro: ["Numele său se traduce prin 'Râul de Aur'.", "Unul dintre cele mai bune râuri pentru rafting din lume."],
      en: ["The name translates to 'River of Gold'.", "One of the best rivers for whitewater rafting globally."]
    }
  }
];
