import type { POI } from "./poi";

export const poiExtraSaudiarabiaNatureV2: POI[] = [
  {
    id: "jabal-sawda-nature-v2",
    type: "mountain",
    parent: "SA-14",
    coords: [42.3670, 18.2670],
    name: { de: "Dschabal Sauda", hu: "Dzsebel Szavda", ro: "Jabal Sawda", en: "Jabal Sawda" },
    description: { de: "Der höchste Berggipfel in Saudi-Arabien, bekannt für sein kühleres Klima und dichte Wacholderwälder.", hu: "Szaúd-Arábia legmagasabb hegycsúcsa, amely hűvösebb éghajlatáról és sűrű borókaerdeiről ismert.", ro: "Cel mai înalt vârf muntos din Arabia Saudită, cunoscut pentru climatul său mai răcoros și pădurile dese de ienupăr.", en: "The highest mountain peak in Saudi Arabia, known for its cooler climate and dense juniper forests." },
    facts: {
      de: ["Erreicht eine Höhe von rund 3.000 Metern.", "Beliebtes Ziel für Wanderer und Naturliebhaber."],
      hu: ["Magassága eléri a mintegy 3000 métert.", "Népszerű úti cél a túrázók és a természet szerelmesei körében."],
      ro: ["Atinge o altitudine de aproximativ 3.000 de metri.", "O destinație populară pentru drumeții și iubitorii de natură."],
      en: ["Reaches an elevation of around 3,000 meters.", "A popular destination for hikers and nature lovers."]
    }
  },
  {
    id: "asir-national-park-nature-v2",
    type: "national-park",
    parent: "SA-14",
    coords: [42.4938, 18.1764],
    name: { de: "Asir-Nationalpark", hu: "Aszír Nemzeti Park", ro: "Parcul Național Asir", en: "Asir National Park" },
    description: { de: "Der erste Nationalpark Saudi-Arabiens, der eine unberührte Berglandschaft und eine reiche Flora und Fauna schützt.", hu: "Szaúd-Arábia első nemzeti parkja, amely érintetlen hegyvidéki tájat, valamint gazdag növény- és állatvilágot véd.", ro: "Primul parc național din Arabia Saudită, care protejează un peisaj montan virgin și o floră și faună bogate.", en: "The first national park in Saudi Arabia, protecting a pristine mountainous landscape and rich flora and fauna." },
    facts: {
      de: ["Wurde 1981 gegründet.", "Beherbergt den gefährdeten Arabischen Leoparden."],
      hu: ["1981-ben alapították.", "A veszélyeztetett arab leopárd otthona."],
      ro: ["A fost înființat în 1981.", "Găzduiește leopardul arab, o specie pe cale de dispariție."],
      en: ["It was established in 1981.", "Home to the endangered Arabian leopard."]
    }
  },
  {
    id: "wadi-hanifa-nature-v2",
    type: "river",
    parent: "SA-01",
    coords: [46.7369, 24.5714],
    name: { de: "Wadi Hanifa", hu: "Vádi Hanifa", ro: "Wadi Hanifa", en: "Wadi Hanifa" },
    description: { de: "Ein historisches Flusstal, das sich durch Riad schlängelt und zu einem wichtigen ökologischen Erholungsgebiet ausgebaut wurde.", hu: "Rijádon kanyargó történelmi folyóvölgy, amelyet fontos ökológiai rekreációs területté alakítottak.", ro: "O vale istorică a unui râu care șerpuiește prin Riad și a fost transformată într-o importantă zonă de recreere ecologică.", en: "A historic river valley meandering through Riyadh that has been developed into a major ecological recreation area." },
    facts: {
      de: ["Erstreckt sich über eine Länge von 120 Kilometern.", "Dient der natürlichen Wasseraufbereitung der Hauptstadt."],
      hu: ["120 kilométer hosszan terül el.", "A főváros természetes víztisztítását szolgálja."],
      ro: ["Se întinde pe o lungime de 120 de kilometri.", "Servește la tratarea naturală a apei din capitală."],
      en: ["Stretches over a length of 120 kilometers.", "Serves as a natural water treatment system for the capital."]
    }
  },
  {
    id: "jabal-tuwaiq-nature-v2",
    type: "mountain",
    parent: "SA-01",
    coords: [46.1950, 24.5880],
    name: { de: "Dschabal Tuwaiq", hu: "Dzsebel Tuvajk", ro: "Jabal Tuwaiq", en: "Jabal Tuwaiq" },
    description: { de: "Ein markanter Kalksteinrücken, der sich wie ein gewaltiges Rückgrat durch die Region Nadschd zieht.", hu: "Egy feltűnő mészkőgerinc, amely hatalmas gerincként húzódik végig a Nadzsd régión.", ro: "O creastă de calcar proeminentă care străbate regiunea Najd ca o coloană vertebrală masivă.", en: "A striking limestone escarpment that cuts through the Najd region like a massive backbone." },
    facts: {
      de: ["Erstreckt sich über 800 Kilometer.", "Die steilen Klippen werden oft als 'Rand der Welt' bezeichnet."],
      hu: ["Több mint 800 kilométer hosszan húzódik.", "Meredek szikláit gyakran 'a világ peremének' nevezik."],
      ro: ["Se întinde pe o lungime de 800 de kilometri.", "Stâncile sale abrupte sunt adesea numite 'Marginea Lumii'."],
      en: ["Stretches for 800 kilometers.", "Its steep cliffs are often referred to as the 'Edge of the World'."]
    }
  },
  {
    id: "al-asfar-lake-nature-v2",
    type: "lake",
    parent: "SA-04",
    coords: [49.7180, 25.5180],
    name: { de: "Al-Asfar-See", hu: "Al-Aszfar-tó", ro: "Lacul Al-Asfar", en: "Al-Asfar Lake" },
    description: { de: "Ein ausgedehnter Feuchtgebietssee in der Oase Al-Ahsa, der Tausenden von Zugvögeln als Zufluchtsort dient.", hu: "Egy kiterjedt vizes élőhely az Al-Ahsza oázisban, amely vándormadarak ezreinek nyújt menedéket.", ro: "Un lac extins de zonă umedă din oaza Al-Ahsa, care servește drept refugiu pentru mii de păsări migratoare.", en: "An expansive wetland lake in the Al-Ahsa Oasis that serves as a sanctuary for thousands of migratory birds." },
    facts: {
      de: ["Ist ein von der UNESCO anerkanntes Welterbe.", "Umgeben von Sanddünen und üppiger Vegetation."],
      hu: ["Az UNESCO által elismert világörökségi helyszín.", "Homokdűnék és buja növényzet veszi körül."],
      ro: ["Este un sit recunoscut ca Patrimoniu Mondial UNESCO.", "Înconjurat de dune de nisip și vegetație luxuriantă."],
      en: ["It is a UNESCO-recognized World Heritage site.", "Surrounded by sand dunes and lush vegetation."]
    }
  },
  {
    id: "farasan-islands-nature-v2",
    type: "national-park",
    parent: "SA-09",
    coords: [41.9000, 16.6500],
    name: { de: "Farasan-Inseln Meeresschutzgebiet", hu: "Faraszán-szigetek Tengeri Rezervátum", ro: "Sanctuarul Marin al Insulelor Farasan", en: "Farasan Islands Marine Sanctuary" },
    description: { de: "Ein bedeutendes Meeresschutzgebiet im Roten Meer mit unberührten Korallenriffen und seltenen Tierarten.", hu: "Jelentős tengeri természetvédelmi terület a Vörös-tengerben, érintetlen korallzátonyokkal és ritka állatfajokkal.", ro: "O importantă rezervație marină din Marea Roșie, cu recife de corali virgine și specii rare de animale.", en: "A significant marine sanctuary in the Red Sea featuring pristine coral reefs and rare animal species." },
    facts: {
      de: ["Schützt die einheimische Dugong-Population.", "Ein wichtiges Brutgebiet für Meeresschildkröten."],
      hu: ["Védi a helyi dugongpopulációt.", "Fontos költőhely a tengeri teknősök számára."],
      ro: ["Protejează populația indigenă de dugongi.", "Un important loc de cuibărit pentru țestoasele marine."],
      en: ["Protects the native dugong population.", "An important nesting ground for sea turtles."]
    }
  },
  {
    id: "jabal-al-lawz-nature-v2",
    type: "mountain",
    parent: "SA-07",
    coords: [35.3130, 28.6536],
    name: { de: "Dschabal al-Lauz", hu: "Dzsebel al-Lauz", ro: "Jabal Al-Lawz", en: "Jabal Al-Lawz" },
    description: { de: "Der 'Mandelberg' im Nordwesten Saudi-Arabiens ist einer der wenigen Orte des Landes, an denen es im Winter schneit.", hu: "A Szaúd-Arábia északnyugati részén fekvő 'Mandula-hegy' az ország azon kevés helyeinek egyike, ahol télen havazik.", ro: "Muntele Migdalului din nord-vestul Arabiei Saudite este unul dintre puținele locuri din țară unde ninge iarna.", en: "The 'Almond Mountain' in northwestern Saudi Arabia is one of the few places in the country that experiences winter snowfall." },
    facts: {
      de: ["Erreicht eine Höhe von 2.580 Metern.", "Der Name stammt von den Mandelbäumen, die einst hier wuchsen."],
      hu: ["Magassága eléri a 2580 métert.", "Nevét az egykor itt nőtt mandulafákról kapta."],
      ro: ["Atinge o altitudine de 2.580 de metri.", "Numele provine de la migdalii care creșteau aici odată."],
      en: ["Reaches an elevation of 2,580 meters.", "The name comes from the almond trees that once grew here."]
    }
  },
  {
    id: "wadi-qanuna-nature-v2",
    type: "river",
    parent: "SA-02",
    coords: [41.2222, 19.3444],
    name: { de: "Wadi Qanuna", hu: "Vádi Kanuna", ro: "Wadi Qanuna", en: "Wadi Qanuna" },
    description: { de: "Eines der größten und schönsten Täler der Region, durch das fast das ganze Jahr über Wasser fließt.", hu: "A régió egyik legnagyobb és legszebb völgye, amelyen szinte egész évben víz folyik keresztül.", ro: "Una dintre cele mai mari și mai frumoase văi din regiune, prin care apa curge aproape tot anul.", en: "One of the largest and most beautiful valleys in the region, with water flowing through it almost all year round." },
    facts: {
      de: ["Die Länge des Flusstals beträgt über 100 Kilometer.", "Umgeben von Palmen und üppiger lokaler Vegetation."],
      hu: ["A folyóvölgy hossza több mint 100 kilométer.", "Pálmafák és buja helyi növényzet veszi körül."],
      ro: ["Lungimea văii râului depășește 100 de kilometri.", "Înconjurată de palmieri și vegetație locală luxuriantă."],
      en: ["The length of the river valley is over 100 kilometers.", "Surrounded by palm trees and lush local vegetation."]
    }
  },
  {
    id: "raghadan-forest-nature-v2",
    type: "forest",
    parent: "SA-11",
    coords: [41.4552, 20.0355],
    name: { de: "Raghadan-Wald", hu: "Ragadán-erdő", ro: "Pădurea Raghadan", en: "Raghadan Forest" },
    description: { de: "Ein dichter Waldpark in der Nähe von Al Baha, der für seine alten Bäume und atemberaubenden Ausblicke auf die Berge bekannt ist.", hu: "Sűrű erdőpark Al Baha közelében, amely ősi fáiról és a hegyekre nyíló lélegzetelállító kilátásáról ismert.", ro: "Un parc forestier dens lângă Al Baha, cunoscut pentru copacii săi bătrâni și priveliștile uimitoare asupra munților.", en: "A dense forest park near Al Baha, known for its ancient trees and breathtaking mountain views." },
    facts: {
      de: ["Berühmt für verspielte Paviane, die den Park bewohnen.", "Bietet Hängebrücken für Besucher."],
      hu: ["Híres a parkban élő játékos páviánokról.", "Függőhidakat kínál a látogatóknak."],
      ro: ["Faimos pentru babuinii jucăuși care locuiesc în parc.", "Oferă poduri suspendate pentru vizitatori."],
      en: ["Famous for the playful baboons that inhabit the park.", "Features suspension bridges for visitors."]
    }
  },
  {
    id: "al-kharrarah-nature-v2",
    type: "national-park",
    parent: "SA-01",
    coords: [46.1554, 24.3980],
    name: { de: "Al-Kharrarah-Nationalpark", hu: "Al-Harrára Nemzeti Park", ro: "Parcul Național Al Kharrarah", en: "Al Kharrarah National Park" },
    description: { de: "Ein faszinierender Nationalpark mit tiefroten Sanddünen, die nach Regenfällen einen temporären See bilden.", hu: "Lenyűgöző nemzeti park mélyvörös homokdűnékkel, amelyek esőzések után ideiglenes tavat hoznak létre.", ro: "Un parc național fascinant, cu dune de nisip roșu intens, care formează un lac temporar după ploi.", en: "A fascinating national park featuring deep red sand dunes that form a temporary lake after rainfall." },
    facts: {
      de: ["Der nach Regen entstehende See wird auch 'See des flüssigen Lichts' genannt.", "Liegt in der Nähe des Tuwaiq-Gebirges."],
      hu: ["Az eső után kialakuló tavat a 'Folyékony fény tavának' is nevezik.", "A Tuvajk-hegység közelében található."],
      ro: ["Lacul care se formează după ploaie este numit și 'Lacul Luminii Lichide'.", "Situat în apropierea Munților Tuwaiq."],
      en: ["The lake formed after rain is also called the 'Lake of Liquid Light'.", "Located near the Tuwaiq Mountains."]
    }
  },
  {
    id: "sharaan-nature-reserve-nature-v2",
    type: "national-park",
    parent: "SA-03",
    coords: [38.2500, 26.8500],
    name: { de: "Sharaan-Naturreservat", hu: "Sarán Természetvédelmi Terület", ro: "Rezervația Naturală Sharaan", en: "Sharaan Nature Reserve" },
    description: { de: "Ein geschütztes Gebiet in der Region Al Ula, das sich der Wiederherstellung der natürlichen Lebensräume und Tierarten der Wüste widmet.", hu: "Védett terület az Al Ula régióban, amely a sivatag természetes élőhelyeinek és állatfajainak helyreállítására összpontosít.", ro: "O zonă protejată în regiunea Al Ula dedicată restaurării habitatelor naturale și speciilor de animale din deșert.", en: "A protected area in the Al Ula region dedicated to restoring the natural desert habitats and wildlife species." },
    facts: {
      de: ["Soll ein sicherer Hafen für den Arabischen Leoparden werden.", "Besteht aus dramatischen Sandsteinformationen."],
      hu: ["A cél az, hogy biztonságos menedékké váljon az arab leopárd számára.", "Drámai homokkő formációkból áll."],
      ro: ["Se dorește a fi un refugiu sigur pentru leopardul arab.", "Este format din formațiuni dramatice de gresie."],
      en: ["Aims to become a safe haven for the Arabian leopard.", "Consists of dramatic sandstone rock formations."]
    }
  },
  {
    id: "thumamah-national-park-nature-v2",
    type: "national-park",
    parent: "SA-01",
    coords: [46.7330, 25.2133],
    name: { de: "Thumamah-Nationalpark", hu: "Tumáma Nemzeti Park", ro: "Parcul Național Thumamah", en: "Thumamah National Park" },
    description: { de: "Ein weitläufiger Wüstenpark nördlich von Riad, der für Offroad-Abenteuer und Wüstencamping beliebt ist.", hu: "Egy kiterjedt sivatagi park Rijádtól északra, amely népszerű a terepjárós kalandok és a sivatagi kempingezés szerelmesei körében.", ro: "Un vast parc deșertic la nord de Riad, popular pentru aventuri off-road și camping în deșert.", en: "An expansive desert park north of Riyadh, popular for off-road adventures and desert camping." },
    facts: {
      de: ["Umfasst zahlreiche Dünen, die für das Sandboarding ideal sind.", "Beherbergt traditionelle Beduinenzelte für Touristen."],
      hu: ["Számos dűnével rendelkezik, amelyek ideálisak a homokdeszkázáshoz.", "Hagyományos beduin sátrakat kínál a turistáknak."],
      ro: ["Include numeroase dune ideale pentru sandboarding.", "Găzduiește corturi tradiționale de beduini pentru turiști."],
      en: ["Includes numerous dunes ideal for sandboarding.", "Hosts traditional Bedouin tents for tourists."]
    }
  },
  {
    id: "jabal-daka-nature-v2",
    type: "mountain",
    parent: "SA-02",
    coords: [40.2483, 21.0505],
    name: { de: "Dschabal Daka", hu: "Dzsebel Daka", ro: "Jabal Daka", en: "Jabal Daka" },
    description: { de: "Der höchste Berg in der Region Ta'if, der für seine atemberaubenden Sonnenuntergänge und steilen Klippen bekannt ist.", hu: "A Taif régió legmagasabb hegye, amely lélegzetelállító naplementéiről és meredek szikláiról ismert.", ro: "Cel mai înalt munte din regiunea Ta'if, cunoscut pentru apusurile sale uluitoare și stâncile abrupte.", en: "The highest mountain in the Ta'if region, known for its breathtaking sunsets and steep cliffs." },
    facts: {
      de: ["Der Berg ist oft in dichten Nebel gehüllt.", "Ein beliebter Ort für Sternenbeobachtungen."],
      hu: ["A hegyet gyakran sűrű köd borítja.", "Népszerű helyszín a csillagvizsgálók számára."],
      ro: ["Muntele este adesea învăluit într-o ceață densă.", "Un loc popular pentru observarea stelelor."],
      en: ["The mountain is often shrouded in thick fog.", "A popular spot for stargazing."]
    }
  },
  {
    id: "wadi-namar-nature-v2",
    type: "river",
    parent: "SA-01",
    coords: [46.6669, 24.5800],
    name: { de: "Wadi Namar", hu: "Vádi Namar", ro: "Wadi Namar", en: "Wadi Namar" },
    description: { de: "Ein wunderschönes Tal mit einem künstlichen See und einem Wasserfall in Riad, das ein idealer Ort für Familienausflüge ist.", hu: "Egy gyönyörű völgy mesterséges tóval és vízeséssel Rijádban, amely ideális hely a családi kirándulásokhoz.", ro: "O vale frumoasă cu un lac artificial și o cascadă în Riad, care este un loc ideal pentru excursii în familie.", en: "A beautiful valley featuring an artificial lake and a waterfall in Riyadh, an ideal spot for family outings." },
    facts: {
      de: ["Der Seehafen verfügt über eine 2 Kilometer lange Promenade.", "Beliebter Picknickplatz für Einheimische."],
      hu: ["A tó partján egy 2 kilométer hosszú sétány található.", "Népszerű piknikezőhely a helyiek körében."],
      ro: ["Malul lacului are o promenadă lungă de 2 kilometri.", "Un loc de picnic popular pentru localnici."],
      en: ["The lakefront features a 2-kilometer-long promenade.", "A popular picnic spot for locals."]
    }
  },
  {
    id: "raydah-escarpment-reserve-nature-v2",
    type: "national-park",
    parent: "SA-14",
    coords: [42.4172, 18.2325],
    name: { de: "Raydah-Schutzgebiet", hu: "Rajda Természetvédelmi Terület", ro: "Rezervația Escarpamentului Raydah", en: "Raydah Escarpment Reserve" },
    description: { de: "Ein steil abfallendes Schutzgebiet in den Asir-Bergen, das dichte Wälder und seltene Vogelarten beherbergt.", hu: "Meredeken lejtő természetvédelmi terület az Aszír-hegységben, amely sűrű erdőknek és ritka madárfajoknak ad otthont.", ro: "O rezervație cu pante abrupte în Munții Asir, care găzduiește păduri dese și specii rare de păsări.", en: "A steeply sloping reserve in the Asir Mountains that is home to dense forests and rare bird species." },
    facts: {
      de: ["Eine der letzten verbliebenen Zufluchtsorte für den Asir-Elster.", "Charakterisiert durch tiefe Schluchten und hohe Klippen."],
      hu: ["Az aszíri szarka egyik utolsó megmaradt menedéke.", "Mély szurdokok és magas sziklák jellemzik."],
      ro: ["Unul dintre ultimele refugii rămase pentru coțofana de Asir.", "Caracterizat prin defileuri adânci și stânci înalte."],
      en: ["One of the last remaining refuges for the Asir magpie.", "Characterized by deep gorges and high cliffs."]
    }
  },
  {
    id: "jabal-shada-nature-v2",
    type: "mountain",
    parent: "SA-11",
    coords: [41.3150, 19.7891],
    name: { de: "Dschabal Shada", hu: "Dzsebel Sada", ro: "Jabal Shada", en: "Jabal Shada" },
    description: { de: "Ein Bergmassiv, das für seine ungewöhnlichen Felsformationen und alten Höhlenwohnungen berühmt ist.", hu: "Hegymasszívum, amely szokatlan sziklaalakzatairól és ősi barlanglakásairól híres.", ro: "Un masiv muntos renumit pentru formațiunile sale stâncoase neobișnuite și locuințele rupestre antice.", en: "A mountain massif famous for its unusual rock formations and ancient cave dwellings." },
    facts: {
      de: ["Die Höhlen wurden seit Jahrtausenden von Menschen bewohnt.", "Die Granitblöcke wurden durch Wind und Wetter geformt."],
      hu: ["A barlangokat évezredek óta lakták emberek.", "A gránittömböket a szél és az időjárás formálta."],
      ro: ["Peșterile au fost locuite de oameni de milenii.", "Blocurile de granit au fost sculptate de vânt și vreme."],
      en: ["The caves have been inhabited by humans for millennia.", "The granite boulders were sculpted by wind and weather."]
    }
  },
  {
    id: "uruq-bani-maarid-nature-v2",
    type: "national-park",
    parent: "SA-10",
    coords: [45.5000, 19.3333],
    name: { de: "Uruq Bani Ma'arid", hu: "Uruk Bani Maarid", ro: "Uruq Bani Ma'arid", en: "Uruq Bani Ma'arid" },
    description: { de: "Ein Naturschutzgebiet am westlichen Rand des Leeren Viertels (Rub al-Chali), in dem die Arabische Oryx erfolgreich ausgewildert wurde.", hu: "Természetvédelmi terület az Üres Negyed (Rub al-Háli) nyugati peremén, ahol sikeresen visszatelepítették az arab bejzát.", ro: "O rezervație naturală la marginea vestică a Pătrarului Gol (Rub' al Khali), unde orixul arab a fost reintrodus cu succes.", en: "A nature reserve on the western edge of the Empty Quarter (Rub' al Khali) where the Arabian oryx has been successfully reintroduced." },
    facts: {
      de: ["Ist ein von der UNESCO anerkanntes Weltnaturerbe.", "Die Landschaft besteht aus gewaltigen linearen Sanddünen."],
      hu: ["Az UNESCO által elismert természeti világörökség.", "A táj hatalmas, egyenes homokdűnékből áll."],
      ro: ["Este un sit al Patrimoniului Natural Mondial recunoscut de UNESCO.", "Peisajul este alcătuit din dune de nisip liniare masive."],
      en: ["It is a UNESCO-recognized World Natural Heritage site.", "The landscape consists of massive linear sand dunes."]
    }
  },
  {
    id: "king-salman-nature-v2",
    type: "national-park",
    parent: "SA-07",
    coords: [38.8351, 28.7712],
    name: { de: "König-Salman-Naturreservat", hu: "Szalmán Király Természetvédelmi Terület", ro: "Rezervația Naturală Regele Salman", en: "King Salman Nature Reserve" },
    description: { de: "Eines der größten Schutzgebiete im Nahen Osten, das die historische Landschaft und Artenvielfalt Nordarabiens bewahrt.", hu: "A Közel-Kelet egyik legnagyobb védett területe, amely Észak-Arábia történelmi tájait és biológiai sokféleségét őrzi.", ro: "Una dintre cele mai mari zone protejate din Orientul Mijlociu, conservând peisajul istoric și biodiversitatea Arabiei de Nord.", en: "One of the largest protected areas in the Middle East, preserving the historical landscape and biodiversity of Northern Arabia." },
    facts: {
      de: ["Umfasst eine Fläche, die größer ist als viele Länder.", "Schützt Tiere wie den Arabischen Wolf und Sandgazellen."],
      hu: ["Olyan területet foglal magába, amely nagyobb, mint sok ország.", "Olyan állatokat véd, mint az arab farkas és a homoki gazella."],
      ro: ["Acoperă o zonă mai mare decât multe țări.", "Protejează animale precum lupul arab și gazelele de nisip."],
      en: ["Covers an area larger than many countries.", "Protects animals such as the Arabian wolf and sand gazelles."]
    }
  },
  {
    id: "rawdat-khuraim-nature-v2",
    type: "forest",
    parent: "SA-01",
    coords: [47.2882, 25.3789],
    name: { de: "Rawdat Khuraim", hu: "Raudat Huraim", ro: "Rawdat Khuraim", en: "Rawdat Khuraim" },
    description: { de: "Eine grüne Oase und ein Waldgebiet inmitten der Wüste, oft als der 'Wald des Königs' bezeichnet.", hu: "Egy zöld oázis és erdőterület a sivatag közepén, amelyet gyakran 'a király erdejének' is neveznek.", ro: "O oază verde și o zonă împădurită în mijlocul deșertului, adesea numită 'Pădurea Regelui'.", en: "A green oasis and forested area in the middle of the desert, often referred to as the 'King's Forest'." },
    facts: {
      de: ["Im Frühling blüht die Region mit unzähligen Wildblumen.", "Ein beliebtes Rückzugsgebiet für die königliche Familie."],
      hu: ["Tavasszal a régió számtalan vadvirággal virágzik.", "A királyi család kedvelt elvonulási helye."],
      ro: ["Primăvara, regiunea înflorește cu nenumărate flori sălbatice.", "Un loc de refugiu popular pentru familia regală."],
      en: ["In spring, the region blooms with countless wildflowers.", "A popular retreat for the royal family."]
    }
  },
  {
    id: "jabal-qidr-nature-v2",
    type: "mountain",
    parent: "SA-03",
    coords: [39.9575, 25.7175],
    name: { de: "Dschabal Qidr", hu: "Dzsebel Kidr", ro: "Jabal Qidr", en: "Jabal Qidr" },
    description: { de: "Ein markanter Vulkankegel im vulkanischen Feld von Harrat Khaybar mit pechschwarzer Lava.", hu: "Egy feltűnő vulkáni kúp a Harrat Hajbar vulkáni mezőn, szurokfekete lávával.", ro: "Un con vulcanic proeminent în câmpul vulcanic Harrat Khaybar, cu lavă neagră ca smoala.", en: "A prominent volcanic cone in the Harrat Khaybar volcanic field, featuring pitch-black lava." },
    facts: {
      de: ["Gilt als einer der höchsten Vulkane in Saudi-Arabien.", "Die Landschaft gleicht eher einem fremden Planeten als einer Wüste."],
      hu: ["Szaúd-Arábia egyik legmagasabb vulkánjaként tartják számon.", "A táj inkább egy idegen bolygóra hasonlít, mint egy sivatagra."],
      ro: ["Este considerat unul dintre cei mai înalți vulcani din Arabia Saudită.", "Peisajul seamănă mai mult cu o planetă extraterestră decât cu un deșert."],
      en: ["Considered one of the highest volcanoes in Saudi Arabia.", "The landscape resembles an alien planet more than a desert."]
    }
  }
];
