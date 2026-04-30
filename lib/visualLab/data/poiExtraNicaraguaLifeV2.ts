import type { POI } from "./poi";

export const poiExtraNicaraguaLifeV2: POI[] = [
  {
    id: "refugio-vida-silvestre-chacocente-life-v2",
    type: "animal-habitat",
    parent: "NI-CA",
    coords: [-86.15, 11.56],
    name: { de: "Wildreservat Chacocente", hu: "Chacocente Vadvédelmi Terület", ro: "Refugiul de faună sălbatică Chacocente", en: "Chacocente Wildlife Refuge" },
    description: { de: "Einer der wichtigsten Nistplätze für Meeresschildkröten an der Pazifikküste.", hu: "A tengeri teknősök egyik legfontosabb fészkelőhelye a Csendes-óceán partján.", ro: "Unul dintre cele mai importante locuri de cuibărit pentru țestoasele marine de pe coasta Pacificului.", en: "One of the most important nesting sites for sea turtles on the Pacific coast." },
    facts: {
      de: ["Bekannt für die 'Arribada' der Schildkröten", "Schützt Trockenwald und Küstenfauna", "Beherbergt Affen und Vögel", "Saisonale Besuche empfohlen"],
      hu: ["Híres a teknősök 'arribada'-járól", "Védi a száraz erdőt és a parti élővilágot", "Majmoknak és madaraknak ad otthont", "Szezonális látogatás ajánlott"],
      ro: ["Renumit pentru 'arribada' țestoaselor", "Protejează pădurea uscată și fauna de coastă", "Găzduiește maimuțe și păsări", "Vizite sezoniere recomandate"],
      en: ["Known for the turtle 'arribada'", "Protects dry forest and coastal fauna", "Home to monkeys and birds", "Seasonal visits recommended"]
    }
  },
  {
    id: "finca-las-nubes-managua-life-v2",
    type: "kid-landmark",
    parent: "NI-MA",
    coords: [-86.28, 12.05],
    name: { de: "Finca Las Nubes", hu: "Las Nubes Farm", ro: "Ferma Las Nubes", en: "Las Nubes Farm" },
    description: { de: "Ein Agrotourismus-Bauernhof in der Nähe von Managua mit Blick auf die Stadt.", hu: "Agroturisztikai farm Managua közelében, kilátással a városra.", ro: "O fermă agroturistică lângă Managua cu vedere la oraș.", en: "An agro-tourism farm near Managua with a view of the city." },
    facts: {
      de: ["Bietet Reitmöglichkeiten", "Restaurant mit lokalen Speisen", "Spielplatz für Kinder", "Kühleres Klima als in der Stadt"],
      hu: ["Lovaglási lehetőséget kínál", "Étterem helyi ételekkel", "Játszótér gyerekeknek", "Hűvösebb éghajlat, mint a városban"],
      ro: ["Oferă echitație", "Restaurant cu mâncare locală", "Loc de joacă pentru copii", "Climat mai răcoros decât în oraș"],
      en: ["Offers horseback riding", "Restaurant with local food", "Playground for children", "Cooler climate than the city"]
    }
  },
  {
    id: "selva-negra-matagalpa-life-v2",
    type: "agriculture",
    parent: "NI-MT",
    coords: [-85.91, 12.99],
    name: { de: "Selva Negra", hu: "Selva Negra", ro: "Selva Negra", en: "Selva Negra" },
    description: { de: "Eine nachhaltige Kaffeefarm und ein Öko-Lodge in den Bergen von Matagalpa.", hu: "Fenntartható kávéfarm és öko-szállás Matagalpa hegyeiben.", ro: "O fermă de cafea durabilă și un eco-lodge în munții din Matagalpa.", en: "A sustainable coffee farm and eco-lodge in the mountains of Matagalpa." },
    facts: {
      de: ["Organischer Kaffeeanbau", "Käseherstellung", "Wanderwege durch den Nebelwald", "Vielfältige Vogelwelt"],
      hu: ["Organikus kávétermesztés", "Sajtgyártás", "Túraútvonalak a köderdőn keresztül", "Változatos madárvilág"],
      ro: ["Cultivarea cafelei organice", "Producția de brânză", "Trasee de drumeție prin pădurea de ceață", "Faună aviară diversă"],
      en: ["Organic coffee cultivation", "Cheese making", "Hiking trails through the cloud forest", "Diverse birdlife"]
    }
  },
  {
    id: "reserva-natural-miraflor-life-v2",
    type: "agriculture",
    parent: "NI-ES",
    coords: [-86.3, 13.25],
    name: { de: "Naturreservat Miraflor", hu: "Miraflor Természetvédelmi Terület", ro: "Rezervația Naturală Miraflor", en: "Miraflor Nature Reserve" },
    description: { de: "Ein von Gemeinden verwaltetes Reservat, das Landwirtschaft und Naturschutz verbindet.", hu: "Közösségek által kezelt rezervátum, amely ötvözi a mezőgazdaságot és a természetvédelmet.", ro: "O rezervație administrată de comunitate care combină agricultura și conservarea.", en: "A community-managed reserve that combines agriculture and conservation." },
    facts: {
      de: ["Nachhaltiger Kaffeeanbau", "Orchideen-Vielfalt", "Unterkunft bei Gastfamilien", "Drei verschiedene Ökosysteme"],
      hu: ["Fenntartható kávétermesztés", "Orchideafélék sokfélesége", "Szállás vendéglátó családoknál", "Három különböző ökoszisztéma"],
      ro: ["Cultivarea durabilă a cafelei", "Diversitate de orhidee", "Cazare în familii gazdă", "Trei ecosisteme diferite"],
      en: ["Sustainable coffee cultivation", "Orchid diversity", "Homestay accommodation", "Three different ecosystems"]
    }
  },
  {
    id: "finca-magdalena-ometepe-life-v2",
    type: "agriculture",
    parent: "NI-RI",
    coords: [-85.51, 11.45],
    name: { de: "Finca Magdalena", hu: "Finca Magdalena", ro: "Finca Magdalena", en: "Finca Magdalena" },
    description: { de: "Eine gemeinschaftliche Kaffeefarm am Fuße des Vulkans Maderas.", hu: "Közösségi kávéfarm a Maderas vulkán lábánál.", ro: "O fermă de cafea comunitară la poalele vulcanului Maderas.", en: "A community-run coffee farm at the base of the Maderas volcano." },
    facts: {
      de: ["Anbau von Bio-Kaffee", "Nahegelegene Petroglyphen", "Ausgangspunkt für Wanderungen zum Vulkan", "Einfache Unterkünfte verfügbar"],
      hu: ["Bio kávé termesztése", "Közeli sziklarajzok", "Kiindulópont a vulkánhoz vezető túrákhoz", "Egyszerű szálláslehetőségek"],
      ro: ["Cultivarea cafelei organice", "Petroglife în apropiere", "Punct de plecare pentru drumeții pe vulcan", "Cazare simplă disponibilă"],
      en: ["Organic coffee cultivation", "Nearby petroglyphs", "Starting point for volcano hikes", "Basic lodging available"]
    }
  },
  {
    id: "parque-nacional-volcan-masaya-zoo-life-v2",
    type: "animal-habitat",
    parent: "NI-MS",
    coords: [-86.15, 11.99],
    name: { de: "Nationaler Zoologischer Garten", hu: "Nemzeti Állatkert", ro: "Grădina Zoologică Națională", en: "National Zoological Garden" },
    description: { de: "Nicaraguas Nationalzoo, der sich auf die Rettung und Erhaltung der heimischen Tierwelt konzentriert.", hu: "Nicaragua nemzeti állatkertje, amely a helyi vadvilág mentésére és megőrzésére összpontosít.", ro: "Grădina zoologică națională a Nicaraguei, axată pe salvarea și conservarea faunei native.", en: "Nicaragua's national zoo, focused on the rescue and conservation of native wildlife." },
    facts: {
      de: ["Befindet sich auf dem Weg zum Vulkan Masaya", "Beherbergt über 400 Tiere", "Rettungs- und Rehabilitationszentrum", "Bildungsprogramme für Kinder"],
      hu: ["A Masaya vulkán felé vezető úton található", "Több mint 400 állatnak ad otthont", "Mentő- és rehabilitációs központ", "Oktatási programok gyerekeknek"],
      ro: ["Situată pe drumul spre vulcanul Masaya", "Găzduiește peste 400 de animale", "Centru de salvare și reabilitare", "Programe educaționale pentru copii"],
      en: ["Located on the road to Masaya Volcano", "Home to over 400 animals", "Rescue and rehabilitation center", "Educational programs for children"]
    }
  },
  {
    id: "mariposario-charco-verde-ometepe-life-v2",
    type: "animal-habitat",
    parent: "NI-RI",
    coords: [-85.64, 11.5],
    name: { de: "Schmetterlingsgarten Charco Verde", hu: "Charco Verde Pillangóház", ro: "Grădina de fluturi Charco Verde", en: "Charco Verde Butterfly Garden" },
    description: { de: "Ein Schmetterlingshaus in der mystischen Lagune Charco Verde auf Ometepe.", hu: "Pillangóház a misztikus Charco Verde lagúnában, Ometepe szigetén.", ro: "O grădină de fluturi în laguna mistică Charco Verde de pe Ometepe.", en: "A butterfly sanctuary within the mystical Charco Verde lagoon on Ometepe." },
    facts: {
      de: ["Hunderte von bunten Schmetterlingen", "Teil eines ökologischen Reservats", "Legende vom Chico Largo", "Lehrreich für Kinder"],
      hu: ["Több száz színes pillangó", "Egy ökológiai rezervátum része", "Chico Largo legendája", "Tanulságos a gyerekek számára"],
      ro: ["Sute de fluturi colorați", "Parte a unei rezervații ecologice", "Legenda lui Chico Largo", "Educativ pentru copii"],
      en: ["Hundreds of colorful butterflies", "Part of an ecological reserve", "Legend of Chico Largo", "Educational for children"]
    }
  },
  {
    id: "heriberto-sanchez-amusement-park-life-v2",
    type: "kid-landmark",
    parent: "NI-MS",
    coords: [-86.08, 11.97],
    name: { de: "Vergnügungspark Heriberto Sánchez", hu: "Heriberto Sánchez Vidámpark", ro: "Parcul de distracții Heriberto Sánchez", en: "Heriberto Sánchez Amusement Park" },
    description: { de: "Ein kleiner Vergnügungspark in Masaya, beliebt bei einheimischen Familien.", hu: "Kis vidámpark Masayában, népszerű a helyi családok körében.", ro: "Un mic parc de distracții în Masaya, popular printre familiile locale.", en: "A small amusement park in Masaya, popular with local families." },
    facts: {
      de: ["Einfache Fahrgeschäfte", "Ort für lokale Feste", "Familienfreundliche Atmosphäre", "Zentral gelegen"],
      hu: ["Egyszerű játékok", "Helyi ünnepségek helyszíne", "Családbarát légkör", "Központi elhelyezkedés"],
      ro: ["Carusele simple", "Loc pentru festivaluri locale", "Atmosferă prietenoasă cu familia", "Situat central"],
      en: ["Simple rides", "Venue for local festivals", "Family-friendly atmosphere", "Centrally located"]
    }
  },
  {
    id: "puerto-salvador-allende-playground-life-v2",
    type: "kid-landmark",
    parent: "NI-MA",
    coords: [-86.27, 12.16],
    name: { de: "Spielplatz am Puerto Salvador Allende", hu: "Puerto Salvador Allende játszótér", ro: "Loc de joacă la Puerto Salvador Allende", en: "Puerto Salvador Allende Playground" },
    description: { de: "Moderne Spielplätze und Wasserparks am Ufer des Managuasees.", hu: "Modern játszóterek és vízi parkok a Managua-tó partján.", ro: "Locuri de joacă moderne și parcuri acvatice pe malul lacului Managua.", en: "Modern playgrounds and water parks on the shore of Lake Managua." },
    facts: {
      de: ["Teil eines großen Freizeitkomplexes", "Wasserspiele und Rutschen", "Restaurants und Kioske in der Nähe", "Sicherer Bereich für Kinder"],
      hu: ["Egy nagy szabadidő-komplexum része", "Vízi játékok és csúszdák", "Éttermek és kioszkok a közelben", "Biztonságos terület gyerekeknek"],
      ro: ["Parte a unui mare complex de agrement", "Jocuri de apă și tobogane", "Restaurante și chioșcuri în apropiere", "Zonă sigură pentru copii"],
      en: ["Part of a large recreational complex", "Water games and slides", "Nearby restaurants and kiosks", "Safe area for children"]
    }
  },
  {
    id: "parque-luis-alfonso-velasquez-flores-life-v2",
    type: "kid-landmark",
    parent: "NI-MA",
    coords: [-86.27, 12.15],
    name: { de: "Park Luis Alfonso Velásquez Flores", hu: "Luis Alfonso Velásquez Flores Park", ro: "Parcul Luis Alfonso Velásquez Flores", en: "Luis Alfonso Velásquez Flores Park" },
    description: { de: "Ein großer, moderner Park in Managua mit vielen Attraktionen für Kinder.", hu: "Nagy, modern park Managuában, sok látnivalóval a gyerekek számára.", ro: "Un parc mare și modern în Managua, cu multe atracții pentru copii.", en: "A large, modern park in Managua with many attractions for children." },
    facts: {
      de: ["Basketball- und Fußballplätze", "Spielplätze und Springbrunnen", "Künstlicher See zum Bootfahren", "Benannt nach einem Kindermärtyrer"],
      hu: ["Kosárlabda- és focipályák", "Játszóterek és szökőkutak", "Mesterséges tó csónakázáshoz", "Egy gyermekmártírról nevezték el"],
      ro: ["Terenuri de baschet și fotbal", "Locuri de joacă și fântâni arteziene", "Lac artificial pentru plimbări cu barca", "Numit după un copil martir"],
      en: ["Basketball and soccer courts", "Playgrounds and fountains", "Artificial lake for boating", "Named after a child martyr"]
    }
  },
  {
    id: "finca-esperanza-verde-life-v2",
    type: "agriculture",
    parent: "NI-MT",
    coords: [-85.9, 13.05],
    name: { de: "Finca Esperanza Verde", hu: "Finca Esperanza Verde", ro: "Finca Esperanza Verde", en: "Finca Esperanza Verde" },
    description: { de: "Ein Öko-Lodge und eine Kaffeefarm, die sich dem Naturschutz und der Gemeinschaft widmet.", hu: "Öko-szállás és kávéfarm, amely a természetvédelemnek és a közösségnek szenteli magát.", ro: "Un eco-lodge și o fermă de cafea dedicate conservării și comunității.", en: "An eco-lodge and coffee farm dedicated to conservation and community." },
    facts: {
      de: ["Anbau von Schattenkaffee", "Vogelbeobachtungstouren", "Wanderwege zu Wasserfällen", "Unterstützt lokale Schulen"],
      hu: ["Árnyékkávé termesztése", "Madármegfigyelő túrák", "Túraútvonalak vízesésekhez", "Helyi iskolákat támogat"],
      ro: ["Cultivarea cafelei la umbră", "Tururi de observare a păsărilor", "Trasee de drumeție la cascade", "Sprijină școlile locale"],
      en: ["Shade-grown coffee cultivation", "Bird watching tours", "Hiking trails to waterfalls", "Supports local schools"]
    }
  },
  {
    id: "los-guatuzos-wildlife-refuge-life-v2",
    type: "animal-habitat",
    parent: "NI-SJ",
    coords: [-85.05, 11.2],
    name: { de: "Wildreservat Los Guatuzos", hu: "Los Guatuzos Vadvédelmi Terület", ro: "Refugiul de faună sălbatică Los Guatuzos", en: "Los Guatuzos Wildlife Refuge" },
    description: { de: "Ein Feuchtgebiet von internationaler Bedeutung (Ramsar) an der Grenze zu Costa Rica.", hu: "Nemzetközi jelentőségű (Ramsari) vizes élőhely a Costa Rica-i határon.", ro: "O zonă umedă de importanță internațională (Ramsar) la granița cu Costa Rica.", en: "A wetland of international importance (Ramsar) on the border with Costa Rica." },
    facts: {
      de: ["Heimat von Kaimanen und Jaguaren", "Extrem hohe Vogelvielfalt", "Bootstouren auf den Flüssen", "Wissenschaftliche Forschungsstation"],
      hu: ["Kajmánok és jaguárok otthona", "Rendkívül nagy madárfaj-sokféleség", "Csónaktúrák a folyókon", "Tudományos kutatóállomás"],
      ro: ["Habitat pentru caimani și jaguari", "Diversitate aviară extrem de ridicată", "Tururi cu barca pe râuri", "Stație de cercetare științifică"],
      en: ["Home to caimans and jaguars", "Extremely high bird diversity", "Boat tours on the rivers", "Scientific research station"]
    }
  },
  {
    id: "domitila-private-wildlife-reserve-life-v2",
    type: "animal-habitat",
    parent: "NI-GR",
    coords: [-86.05, 11.8],
    name: { de: "Privates Wildreservat Domitila", hu: "Domitila Magán Vadvédelmi Terület", ro: "Rezervația privată de faună sălbatică Domitila", en: "Domitila Private Wildlife Reserve" },
    description: { de: "Ein privates Reservat, das sich dem Schutz des tropischen Trockenwaldes widmet.", hu: "Magánrezervátum, amely a trópusi száraz erdők védelmére összpontosít.", ro: "O rezervație privată dedicată protejării pădurii tropicale uscate.", en: "A private reserve dedicated to protecting the tropical dry forest." },
    facts: {
      de: ["Schutz des Trockenwaldes", "Nachtwanderungen zur Tierbeobachtung", "Beherbergt Brüllaffen", "Ökotourismus-Projekt"],
      hu: ["A száraz erdő védelme", "Éjszakai túrák állatmegfigyelés céljából", "Bőgőmajmoknak ad otthont", "Ökoturisztikai projekt"],
      ro: ["Protejarea pădurii uscate", "Drumeții nocturne pentru observarea faunei", "Găzduiește maimuțe urlătoare", "Proiect de ecoturism"],
      en: ["Dry forest conservation", "Night walks for wildlife viewing", "Home to howler monkeys", "Ecotourism project"]
    }
  },
  {
    id: "finca-el-chile-coffee-farm-life-v2",
    type: "agriculture",
    parent: "NI-MT",
    coords: [-85.8, 12.85],
    name: { de: "Kaffeefarm El Chile", hu: "El Chile Kávéfarm", ro: "Ferma de cafea El Chile", en: "El Chile Coffee Farm" },
    description: { de: "Eine ländliche Gemeinde in der Nähe von Matagalpa, die für ihre Webtraditionen und ihren Kaffee bekannt ist.", hu: "Vidéki közösség Matagalpa közelében, amely szövési hagyományairól és kávéjáról ismert.", ro: "O comunitate rurală lângă Matagalpa, cunoscută pentru tradițiile sale de țesut și cafea.", en: "A rural community near Matagalpa known for its weaving traditions and coffee." },
    facts: {
      de: ["Traditionelle Weberei auf dem Rückenriemenwebstuhl", "Kaffeeanbau in der Gemeinde", "Kultureller Austausch mit Touristen", "Ländliches Erlebnis"],
      hu: ["Hagyományos szövés hátpántos szövőszéken", "Kávétermesztés a közösségben", "Kulturális csere a turistákkal", "Vidéki élmény"],
      ro: ["Țesut tradițional la războiul de țesut cu curea", "Cultivarea cafelei în comunitate", "Schimb cultural cu turiștii", "Experiență rurală"],
      en: ["Traditional backstrap loom weaving", "Community coffee cultivation", "Cultural exchange with tourists", "Rural experience"]
    }
  },
  {
    id: "hacienda-merida-ometepe-life-v2",
    type: "kid-landmark",
    parent: "NI-RI",
    coords: [-85.5, 11.4],
    name: { de: "Hacienda Mérida", hu: "Hacienda Mérida", ro: "Hacienda Mérida", en: "Hacienda Mérida" },
    description: { de: "Ein Gästehaus am Ufer des Nicaraguasees auf Ometepe mit Kajakverleih.", hu: "Vendégház a Nicaragua-tó partján Ometepén, kajakkölcsönzési lehetőséggel.", ro: "O pensiune pe malul lacului Nicaragua pe Ometepe, cu închiriere de caiace.", en: "A guesthouse on the shores of Lake Nicaragua on Ometepe with kayak rentals." },
    facts: {
      de: ["Kajakfahren zum Río Istián", "Affenbeobachtung", "Entspannte Atmosphäre am See", "Blick auf den Vulkan Maderas"],
      hu: ["Kajakozás az Istián-folyóhoz", "Majommegfigyelés", "Nyugodt tóparti légkör", "Kilátás a Maderas vulkánra"],
      ro: ["Caiac-canoe pe râul Istián", "Observarea maimuțelor", "Atmosferă relaxată pe malul lacului", "Vedere spre vulcanul Maderas"],
      en: ["Kayaking to the Istián River", "Monkey watching", "Relaxed lakeside atmosphere", "Views of Maderas Volcano"]
    }
  },
  {
    id: "parque-saurio-nindiri-life-v2",
    type: "kid-landmark",
    parent: "NI-MS",
    coords: [-86.13, 11.96],
    name: { de: "Dinosaurierpark Nindirí", hu: "Nindirí Dinoszaurusz Park", ro: "Parcul cu dinozauri Nindirí", en: "Nindirí Dinosaur Park" },
    description: { de: "Ein Themenpark mit lebensgroßen Dinosaurierfiguren in Nindirí.", hu: "Életnagyságú dinoszauruszfigurákkal rendelkező témapark Nindiríben.", ro: "Un parc tematic cu figurine de dinozauri în mărime naturală în Nindirí.", en: "A theme park with life-size dinosaur figures in Nindirí." },
    facts: {
      de: ["Beliebt bei Kindern und Familien", "Lehrtafeln über Dinosaurier", "Fotomöglichkeiten", "Leicht erreichbar von Masaya"],
      hu: ["Népszerű a gyerekek és családok körében", "Ismeretterjesztő táblák a dinoszauruszokról", "Fotózási lehetőségek", "Könnyen megközelíthető Masayából"],
      ro: ["Popular printre copii și familii", "Panouri educative despre dinozauri", "Oportunități foto", "Ușor accesibil din Masaya"],
      en: ["Popular with children and families", "Educational panels about dinosaurs", "Photo opportunities", "Easily accessible from Masaya"]
    }
  },
  {
    id: "el-ojo-de-agua-ometepe-life-v2",
    type: "kid-landmark",
    parent: "NI-RI",
    coords: [-85.59, 11.52],
    name: { de: "Ojo de Agua", hu: "Ojo de Agua", ro: "Ojo de Agua", en: "Ojo de Agua" },
    description: { de: "Zwei natürliche Schwimmbecken mit kristallklarem Wasser vulkanischen Ursprungs.", hu: "Két természetes úszómedence kristálytiszta, vulkáni eredetű vízzel.", ro: "Două piscine naturale cu apă cristalină de origine vulcanică.", en: "Two natural swimming pools with crystal-clear water of volcanic origin." },
    facts: {
      de: ["Erfrischendes, kühles Wasser", "Umgeben von tropischer Vegetation", "Restaurant und Bar vor Ort", "Beliebter Ort zum Entspannen"],
      hu: ["Frissítő, hűvös víz", "Trópusi növényzet veszi körül", "Helyi étterem és bár", "Népszerű pihenőhely"],
      ro: ["Apă răcoritoare și rece", "Înconjurat de vegetație tropicală", "Restaurant și bar la fața locului", "Loc popular pentru relaxare"],
      en: ["Refreshing cool water", "Surrounded by tropical vegetation", "On-site restaurant and bar", "Popular place to relax"]
    }
  },
  {
    id: "reserva-silvestre-privada-el-tesoro-life-v2",
    type: "animal-habitat",
    parent: "NI-SJ",
    coords: [-84.5, 11.1],
    name: { de: "Privates Wildreservat El Tesoro", hu: "El Tesoro Magán Vadvédelmi Terület", ro: "Rezervația privată de faună sălbatică El Tesoro", en: "El Tesoro Private Wildlife Reserve" },
    description: { de: "Ein privates Reservat am Río San Juan, das sich auf den Schutz von Papageien konzentriert.", hu: "Magánrezervátum a San Juan-folyónál, amely a papagájok védelmére összpontosít.", ro: "O rezervație privată pe râul San Juan, axată pe protecția papagalilor.", en: "A private reserve on the San Juan River focusing on parrot conservation." },
    facts: {
      de: ["Schutz des Großen Soldatenaras", "Vogelbeobachtungstouren", "Wichtiger Teil des biologischen Korridors", "Nachhaltiger Tourismus"],
      hu: ["A nagy katonaara védelme", "Madármegfigyelő túrák", "A biológiai folyosó fontos része", "Fenntartható turizmus"],
      ro: ["Protecția papagalului verde mare", "Tururi de observare a păsărilor", "Parte importantă a coridorului biologic", "Turism durabil"],
      en: ["Conservation of the Great Green Macaw", "Bird watching tours", "Important part of the biological corridor", "Sustainable tourism"]
    }
  },
  {
    id: "finca-el-paraiso-boaco-life-v2",
    type: "agriculture",
    parent: "NI-BO",
    coords: [-85.6, 12.4],
    name: { de: "Finca El Paraíso", hu: "El Paraíso Farm", ro: "Ferma El Paraíso", en: "El Paraíso Farm" },
    description: { de: "Eine Viehzuchtfarm in Boaco, die Einblicke in die Käseherstellung bietet.", hu: "Állattenyésztő farm Boacóban, amely betekintést nyújt a sajtgyártásba.", ro: "O fermă de creștere a vitelor în Boaco, care oferă o perspectivă asupra producției de brânză.", en: "A cattle ranch in Boaco that offers insights into cheese production." },
    facts: {
      de: ["Traditionelle Käseherstellung", "Ländliches Leben in Nicaragua", "Viehzucht", "Agrotourismus-Erlebnis"],
      hu: ["Hagyományos sajtgyártás", "Nicaraguai vidéki élet", "Állattenyésztés", "Agroturisztikai élmény"],
      ro: ["Producția tradițională de brânză", "Viața rurală din Nicaragua", "Creșterea vitelor", "Experiență agroturistică"],
      en: ["Traditional cheese making", "Nicaraguan rural life", "Cattle ranching", "Agro-tourism experience"]
    }
  },
  {
    id: "centro-turistico-xiloa-life-v2",
    type: "kid-landmark",
    parent: "NI-MA",
    coords: [-86.32, 12.21],
    name: { de: "Touristenzentrum Xiloá", hu: "Xiloá Turisztikai Központ", ro: "Centrul Turistic Xiloá", en: "Xiloá Tourist Center" },
    description: { de: "Ein beliebter Badeort an der Laguna de Xiloá, einer vulkanischen Kraterlagune.", hu: "Népszerű fürdőhely a Xiloá-lagúnánál, egy vulkáni krátertónál.", ro: "O stațiune balneară populară pe Laguna de Xiloá, o lagună vulcanică de crater.", en: "A popular swimming spot at Laguna de Xiloá, a volcanic crater lagoon." },
    facts: {
      de: ["Klares, tiefes Wasser", "Naherholungsgebiet für Managua", "Restaurants und Picknickplätze", "Ideal zum Schwimmen und Tauchen"],
      hu: ["Tiszta, mély víz", "Managua üdülőövezete", "Éttermek és piknikezőhelyek", "Ideális úszáshoz és búvárkodáshoz"],
      ro: ["Apă limpede și adâncă", "Zonă de agrement pentru Managua", "Restaurante și zone de picnic", "Ideal pentru înot și scufundări"],
      en: ["Clear, deep water", "Recreational area for Managua", "Restaurants and picnic areas", "Ideal for swimming and diving"]
    }
  },
  {
    id: "parque-acuatico-salvador-allende-life-v2",
    type: "kid-landmark",
    parent: "NI-MA",
    coords: [-86.27, 12.165],
    name: { de: "Wasserpark Salvador Allende", hu: "Salvador Allende Vízipark", ro: "Parcul acvatic Salvador Allende", en: "Salvador Allende Water Park" },
    description: { de: "Ein moderner Wasserpark für Kinder am Malecon de Managua.", hu: "Modern vízipark gyerekeknek a managuai Maleconon.", ro: "Un parc acvatic modern pentru copii pe Malecon din Managua.", en: "A modern water park for children on the Malecón de Managua." },
    facts: {
      de: ["Mehrere Pools und Wasserrutschen", "Sicher und überwacht", "Teil des Puerto Salvador Allende", "Ideal für einen Familienausflug"],
      hu: ["Több medence és vízicsúszda", "Biztonságos és felügyelt", "A Puerto Salvador Allende része", "Ideális családi kiránduláshoz"],
      ro: ["Mai multe piscine și tobogane de apă", "Sigur și supravegheat", "Parte a Puerto Salvador Allende", "Ideal pentru o excursie în familie"],
      en: ["Multiple pools and water slides", "Safe and supervised", "Part of Puerto Salvador Allende", "Ideal for a family outing"]
    }
  },
  {
    id: "finca-san-juan-de-la-isla-ometepe-life-v2",
    type: "agriculture",
    parent: "NI-RI",
    coords: [-85.6, 11.5],
    name: { de: "Finca San Juan de la Isla", hu: "Finca San Juan de la Isla", ro: "Finca San Juan de la Isla", en: "Finca San Juan de la Isla" },
    description: { de: "Eine Hacienda auf Ometepe, die Landwirtschaft mit Tourismus verbindet.", hu: "Hacienda Ometepén, amely ötvözi a mezőgazdaságot a turizmussal.", ro: "O hacienda pe Ometepe care combină agricultura cu turismul.", en: "A hacienda on Ometepe that combines agriculture with tourism." },
    facts: {
      de: ["Anbau von Kochbananen und anderen Früchten", "Pferde und Vieh", "Unterkunft in Strandnähe", "Kajak- und Fahrradverleih"],
      hu: ["Főzőbanán és más gyümölcsök termesztése", "Lovak és szarvasmarhák", "Szállás a strand közelében", "Kajak- és kerékpárkölcsönzés"],
      ro: ["Cultivarea bananelor de gătit și a altor fructe", "Cai și vite", "Cazare lângă plajă", "Închiriere de caiace și biciclete"],
      en: ["Cultivation of plantains and other fruits", "Horses and cattle", "Lodging near the beach", "Kayak and bike rentals"]
    }
  },
  {
    id: "reserva-natural-volcan-cosiguina-fauna-life-v2",
    type: "animal-habitat",
    parent: "NI-CH",
    coords: [-87.58, 12.98],
    name: { de: "Fauna des Cosigüina-Vulkans", hu: "A Cosigüina-vulkán élővilága", ro: "Fauna vulcanului Cosigüina", en: "Cosigüina Volcano Fauna" },
    description: { de: "Das Naturreservat um den Vulkan ist ein wichtiger Lebensraum für Brüllaffen und Vögel.", hu: "A vulkán körüli természetvédelmi terület fontos élőhely a bőgőmajmok és a madarak számára.", ro: "Rezervația naturală din jurul vulcanului este un habitat important pentru maimuțele urlătoare și păsări.", en: "The nature reserve around the volcano is an important habitat for howler monkeys and birds." },
    facts: {
      de: ["Trockenwald-Ökosystem", "Gute Chancen zur Affenbeobachtung", "Zugvögel am Kratersee", "Wanderwege durch das Reservat"],
      hu: ["Száraz erdő ökoszisztéma", "Jó esély majmok megfigyelésére", "Vándormadarak a krátertónál", "Túraútvonalak a rezervátumon keresztül"],
      ro: ["Ecosistem de pădure uscată", "Șanse bune de a observa maimuțe", "Păsări migratoare la lacul craterului", "Trasee de drumeție prin rezervație"],
      en: ["Dry forest ecosystem", "Good chances of seeing monkeys", "Migratory birds at the crater lake", "Hiking trails through the reserve"]
    }
  },
  {
    id: "tortugas-marinas-isla-juan-venado-life-v2",
    type: "animal-habitat",
    parent: "NI-LE",
    coords: [-87.05, 12.3],
    name: { de: "Meeresschildkröten der Insel Juan Venado", hu: "Juan Venado-sziget tengeri teknősei", ro: "Țestoasele marine de pe insula Juan Venado", en: "Sea Turtles of Juan Venado Island" },
    description: { de: "Das Naturreservat der Insel Juan Venado ist ein wichtiger Nistplatz für Meeresschildkröten.", hu: "A Juan Venado-sziget természetvédelmi területe fontos fészkelőhely a tengeri teknősök számára.", ro: "Rezervația naturală a insulei Juan Venado este un important loc de cuibărit pentru țestoasele marine.", en: "The Juan Venado Island Nature Reserve is an important nesting site for sea turtles." },
    facts: {
      de: ["Nistplatz für Oliv-Bastardschildkröten", "Nächtliche Touren zur Beobachtung", "Mangroven-Ökosystem", "Schutz durch lokale Gemeinschaften"],
      hu: ["Fészkelőhely az olívzöld fattyúteknősök számára", "Éjszakai megfigyelő túrák", "Mangrove ökoszisztéma", "Helyi közösségek általi védelem"],
      ro: ["Loc de cuibărit pentru țestoasele Olive Ridley", "Tururi nocturne de observare", "Ecosistem de mangrove", "Protecție de către comunitățile locale"],
      en: ["Nesting site for Olive Ridley turtles", "Night tours for observation", "Mangrove ecosystem", "Protected by local communities"]
    }
  },
  {
    id: "parque-central-de-granada-kids-life-v2",
    type: "kid-landmark",
    parent: "NI-GR",
    coords: [-85.95, 11.93],
    name: { de: "Zentralpark von Granada für Kinder", hu: "Granadai központi park gyerekeknek", ro: "Parcul Central din Granada pentru copii", en: "Granada Central Park for Kids" },
    description: { de: "Der lebhafte Zentralpark ist ein Treffpunkt für Familien mit Eisdielen und Kutschfahrten.", hu: "A nyüzsgő központi park a családok találkozóhelye, fagyizókkal és lovaskocsikázással.", ro: "Parcul central plin de viață este un loc de întâlnire pentru familii, cu magazine de înghețată și plimbări cu trăsura.", en: "The lively central park is a meeting point for families with ice cream parlors and carriage rides." },
    facts: {
      de: ["Pferdekutschenfahrten", "Verkauf von 'Vigorón'", "Taubenfüttern", "Zentrum des sozialen Lebens"],
      hu: ["Lovaskocsikázás", "'Vigorón' árusítása", "Galambetetés", "A társadalmi élet központja"],
      ro: ["Plimbări cu trăsura trasă de cai", "Vânzarea de 'vigorón'", "Hrănirea porumbeilor", "Centrul vieții sociale"],
      en: ["Horse-drawn carriage rides", "Sale of 'vigorón'", "Pigeon feeding", "Center of social life"]
    }
  },
  {
    id: "finca-el-platanal-cacao-life-v2",
    type: "agriculture",
    parent: "NI-MT",
    coords: [-85.45, 12.9],
    name: { de: "Kakaofarm El Platanal", hu: "El Platanal Kakaófarm", ro: "Ferma de cacao El Platanal", en: "El Platanal Cacao Farm" },
    description: { de: "Eine Farm, die sich auf den Anbau von hochwertigem Kakao spezialisiert hat und Touren anbietet.", hu: "Magas minőségű kakaó termesztésére szakosodott farm, amely túrákat is kínál.", ro: "O fermă specializată în cultivarea de cacao de înaltă calitate, care oferă tururi.", en: "A farm specializing in the cultivation of high-quality cacao, offering tours." },
    facts: {
      de: ["Vom Anbau bis zur Schokolade", "Lernen über den Kakao-Prozess", "Verkostungen", "Unterstützt nachhaltige Landwirtschaft"],
      hu: ["A termesztéstől a csokoládéig", "A kakaófeldolgozás megismerése", "Kóstolók", "Támogatja a fenntartható mezőgazdaságot"],
      ro: ["De la cultivare la ciocolată", "Învățarea procesului de cacao", "Degustări", "Sprijină agricultura durabilă"],
      en: ["From bean to bar", "Learn about the cacao process", "Tastings", "Supports sustainable agriculture"]
    }
  },
  {
    id: "hertylandia-amusement-park-life-v2",
    type: "kid-landmark",
    parent: "NI-CA",
    coords: [-86.2, 11.88],
    name: { de: "Hertylandia Vergnügungspark", hu: "Hertylandia Vidámpark", ro: "Parcul de distracții Hertylandia", en: "Hertylandia Amusement Park" },
    description: { de: "Ein beliebter Wasser- und Vergnügungspark in der Nähe von Diriamba.", hu: "Népszerű vízi- és vidámpark Diriamba közelében.", ro: "Un parc acvatic și de distracții popular lângă Diriamba.", en: "A popular water and amusement park located near Diriamba." },
    facts: {
      de: ["Wasserrutschen und Pools", "Fahrgeschäfte für alle Altersgruppen", "Großer Picknickbereich", "Wochenendausflugsziel"],
      hu: ["Vízicsúszdák és medencék", "Játékok minden korosztálynak", "Nagy piknikezőhely", "Hétvégi kirándulóhely"],
      ro: ["Tobogane de apă și piscine", "Carusele pentru toate vârstele", "Zonă mare de picnic", "Destinație de weekend"],
      en: ["Water slides and pools", "Rides for all ages", "Large picnic area", "Weekend destination"]
    }
  },
  {
    id: "el-chocoyero-el-brujo-reserve-life-v2",
    type: "animal-habitat",
    parent: "NI-MA",
    coords: [-86.3, 11.95],
    name: { de: "Reservat El Chocoyero - El Brujo", hu: "El Chocoyero - El Brujo Rezervátum", ro: "Rezervația El Chocoyero - El Brujo", en: "El Chocoyero - El Brujo Reserve" },
    description: { de: "Ein Naturreservat, das für seine Tausenden von Chocoyo-Papageien berühmt ist.", hu: "Természetvédelmi terület, amely több ezer chocoyo papagájáról híres.", ro: "O rezervație naturală renumită pentru miile sale de papagali chocoyo.", en: "A nature reserve famous for its thousands of chocoyo parakeets." },
    facts: {
      de: ["Papageien nisten in den Wasserfallklippen", "Täglicher Aus- und Einflug der Papageien", "Wanderwege und Wasserfälle", "Leicht von Managua aus zu erreichen"],
      hu: ["A papagájok a vízesés szikláiba fészkelnek", "A papagájok napi ki- és berepülése", "Túraútvonalak és vízesések", "Könnyen megközelíthető Managuából"],
      ro: ["Papagalii cuibăresc în stâncile cascadei", "Zborul zilnic al papagalilor", "Trasee de drumeție și cascade", "Ușor de accesat din Managua"],
      en: ["Parakeets nest in the waterfall cliffs", "Daily exodus and return of the parakeets", "Hiking trails and waterfalls", "Easy to reach from Managua"]
    }
  },
  {
    id: "aventura-las-nubes-zipline-life-v2",
    type: "kid-landmark",
    parent: "NI-MA",
    coords: [-86.29, 12.06],
    name: { de: "Aventura Las Nubes Zipline", hu: "Aventura Las Nubes Zipline", ro: "Aventura Las Nubes Zipline", en: "Aventura Las Nubes Zipline" },
    description: { de: "Eine Zipline-Anlage in den Hügeln südlich von Managua.", hu: "Drótkötélpálya a Managuától délre fekvő dombokon.", ro: "O instalație de tiroliană în dealurile la sud de Managua.", en: "A zipline facility in the hills south of Managua." },
    facts: {
      de: ["Zipline-Strecken durch die Baumwipfel", "Panoramablick auf die Umgebung", "Sicherheitsausrüstung wird gestellt", "Abenteuer für die ganze Familie"],
      hu: ["Drótkötélpályák a fák lombkoronáján keresztül", "Panorámás kilátás a környékre", "Biztonsági felszerelést biztosítanak", "Kaland az egész családnak"],
      ro: ["Trasee de tiroliană printre coroanele copacilor", "Vederi panoramice ale zonei înconjurătoare", "Echipament de siguranță asigurat", "Aventură pentru întreaga familie"],
      en: ["Zipline courses through the treetops", "Panoramic views of the surroundings", "Safety equipment provided", "Adventure for the whole family"]
    }
  },
  {
    id: "finca-ecologica-la-bomba-coffee-life-v2",
    type: "agriculture",
    parent: "NI-CA",
    coords: [-86.22, 11.9],
    name: { de: "Ökofarm La Bomba", hu: "La Bomba Ökofarm", ro: "Ferma ecologică La Bomba", en: "La Bomba Ecological Farm" },
    description: { de: "Eine Kaffeefarm in der Region Carazo, die agrotouristische Aktivitäten anbietet.", hu: "Kávéfarm Carazo régióban, amely agroturisztikai tevékenységeket kínál.", ro: "O fermă de cafea în regiunea Carazo care oferă activități agroturistice.", en: "A coffee farm in the Carazo region offering agro-tourism activities." },
    facts: {
      de: ["Kaffee-Touren", "Lernen über nachhaltigen Anbau", "Verkostung von frischem Kaffee", "Ländliche Umgebung"],
      hu: ["Kávétúrák", "Tanulás a fenntartható termesztésről", "Friss kávé kóstolása", "Vidéki környezet"],
      ro: ["Tururi de cafea", "Învățarea despre cultivarea durabilă", "Degustarea de cafea proaspătă", "Mediu rural"],
      en: ["Coffee tours", "Learning about sustainable cultivation", "Tasting fresh coffee", "Rural setting"]
    }
  }
];
