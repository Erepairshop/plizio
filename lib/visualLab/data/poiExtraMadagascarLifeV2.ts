import type { POI } from "./poi";

export const poiExtraMadagascarLifeV2: POI[] = [
  {
    id: "andasibe-mantadia-life-v2",
    type: "animal-habitat",
    parent: "MG-A",
    coords: [48.418, -18.933],
    name: { de: "Andasibe-Mantadia Nationalpark", hu: "Andasibe-Mantadia Nemzeti Park", ro: "Parcul Național Andasibe-Mantadia", en: "Andasibe-Mantadia National Park" },
    description: { de: "Lebensraum für Indri-Lemuren und viele endemische Arten.", hu: "Élőhely az indri makiknak és számos endemikus fajnak.", ro: "Habitat pentru lemurienii Indri și multe specii endemice.", en: "Habitat for Indri lemurs and many endemic species." },
    facts: {
      de: ["Berühmt für den Indri", "Regenwaldgebiet", "Hohe Biodiversität", "NAtschatten-Lemuren beobachtbar"],
      hu: ["Híres az indriről", "Esőerdő terület", "Magas biodiverzitás", "Éjszakai makik megfigyelhetők"],
      ro: ["Faimos pentru Indri", "Zonă de pădure tropicală", "Biodiversitate ridicată", "Lemurieni nocturni observabili"],
      en: ["Famous for the Indri", "Rainforest area", "High biodiversity", "Nocturnal lemurs observable"]
    }
  },
  {
    id: "berenty-reservat-life-v2",
    type: "animal-habitat",
    parent: "MG-T",
    coords: [45.867, -25.017],
    name: { de: "Berenty-Reservat", hu: "Berenty Rezervátum", ro: "Rezervația Berenty", en: "Berenty Reserve" },
    description: { de: "Ein privates Reservat, das für seine Ringelschwanz-Lemuren bekannt ist.", hu: "Egy magánrezervátum, amely a gyűrűsfarkú makikról híres.", ro: "O rezervație privată cunoscută pentru lemurienii cu coadă inelată.", en: "A private reserve known for its ring-tailed lemurs." },
    facts: {
      de: ["Ringelschwanz-Lemuren", "Dornenwald-Ökosystem", "Privates Schutzgebiet", "Forschungsschwerpunkt"],
      hu: ["Gyűrűsfarkú makik", "Tüskés erdő ökoszisztéma", "Magán természetvédelmi terület", "Kutatási központ"],
      ro: ["Lemurieni cu coadă inelată", "Ecosistem de pădure spinoasă", "Arie protejată privată", "Centru de cercetare"],
      en: ["Ring-tailed lemurs", "Spiny forest ecosystem", "Private protected area", "Research center"]
    }
  },
  {
    id: "kirindy-wald-life-v2",
    type: "animal-habitat",
    parent: "MG-M",
    coords: [44.667, -20.083],
    name: { de: "Kirindy-Wald", hu: "Kirindy-erdő", ro: "Pădurea Kirindy", en: "Kirindy Forest" },
    description: { de: "Ein Trockenwald, in dem der Fossa-Raubtier vorkommt.", hu: "Egy száraz erdő, ahol a fossa ragadozó előfordul.", ro: "O pădure uscată unde trăiește prădătorul Fossa.", en: "A dry forest where the Fossa predator is found." },
    facts: {
      de: ["Heimat des Fossa", "Trockenwald", "Nacht-Lemuren", "Baobab-Bäume in der Nähe"],
      hu: ["A fossa otthona", "Száraz erdő", "Éjszakai makik", "Baobabfák a közelben"],
      ro: ["Casa Fossa", "Pădure uscată", "Lemurieni nocturni", "Baobabi în apropiere"],
      en: ["Home of the Fossa", "Dry forest", "Nocturnal lemurs", "Baobab trees nearby"]
    }
  },
  {
    id: "tsingy-bemaraha-park-life-v2",
    type: "animal-habitat",
    parent: "MG-M",
    coords: [44.75, -18.7],
    name: { de: "Tsingy von Bemaraha Park", hu: "Bemaraha Nemzeti Park", ro: "Parcul Național Bemaraha", en: "Bemaraha National Park" },
    description: { de: "Einzigartige Karstformationen und Lebensraum für seltene Lemuren.", hu: "Egyedülálló karsztképződmények és élőhely ritka makiknak.", ro: "Formațiuni carstice unice și habitat pentru lemurieni rari.", en: "Unique karst formations and habitat for rare lemurs." },
    facts: {
      de: ["UNESCO-Welterbe", "Karstfelsen", "Seltene Lemurenarten", "Schwieriges Terrain"],
      hu: ["UNESCO Világörökség", "Karsztos sziklák", "Ritka makifajok", "Nehéz terep"],
      ro: ["Patrimoniu UNESCO", "Stânci carstice", "Specii rare de lemurieni", "Teren dificil"],
      en: ["UNESCO World Heritage", "Karst rocks", "Rare lemur species", "Difficult terrain"]
    }
  },
  {
    id: "sahambavy-tee-plantage-life-v2",
    type: "agriculture",
    parent: "MG-F",
    coords: [47.45, -21.41],
    name: { de: "Sahambavy Teeplantage", hu: "Sahambavy teaültetvény", ro: "Plantația de ceai Sahambavy", en: "Sahambavy Tea Plantation" },
    description: { de: "Madagaskars größte Teeplantage in einer schönen Hügellandschaft.", hu: "Madagaszkár legnagyobb teaültetvénye egy szép dombos tájon.", ro: "Cea mai mare plantație de ceai din Madagascar într-un peisaj deluros frumos.", en: "Madagascar's largest tea plantation in a beautiful hilly landscape." },
    facts: {
      de: ["Größte Teeplantage", "Qualitätstee", "Hügelige Region", "Lokale Beschäftigung"],
      hu: ["Legnagyobb teaültetvény", "Minőségi tea", "Dombos vidék", "Helyi munkahelyek"],
      ro: ["Cea mai mare plantație de ceai", "Ceai de calitate", "Regiune deluroasă", "Locuri de muncă locale"],
      en: ["Largest tea plantation", "Quality tea", "Hilly region", "Local employment"]
    }
  },
  {
    id: "antsirabe-kinderpark-life-v2",
    type: "kid-landmark",
    parent: "MG-V",
    coords: [47.03, -19.86],
    name: { de: "Antsirabe Kinderpark", hu: "Antsirabe gyermekpark", ro: "Parcul pentru copii Antsirabe", en: "Antsirabe Children's Park" },
    description: { de: "Ein beliebter Ort für Familien in der Stadt Antsirabe.", hu: "Népszerű hely családoknak Antsirabe városában.", ro: "Un loc popular pentru familii în orașul Antsirabe.", en: "A popular place for families in the city of Antsirabe." },
    facts: {
      de: ["Familienfreundlich", "Spielplätze", "Grünfläche", "Zentral gelegen"],
      hu: ["Családbarát", "Játszóterek", "Zöldövezet", "Központi fekvés"],
      ro: ["Prietenos cu familiile", "Locuri de joacă", "Spațiu verde", "Amplasare centrală"],
      en: ["Family friendly", "Playgrounds", "Green space", "Centrally located"]
    }
  },
  {
    id: "andasibe-orchid-park-life-v2",
    type: "kid-landmark",
    parent: "MG-A",
    coords: [48.42, -18.94],
    name: { de: "Andasibe Orchideenpark", hu: "Andasibe orchideapark", ro: "Parcul de orhidee Andasibe", en: "Andasibe Orchid Park" },
    description: { de: "Ein kleiner Park voller exotischer Orchideen, ideal für Kinder.", hu: "Kicsi park tele egzotikus orchideákkal, ideális gyerekeknek.", ro: "Un parc mic plin de orhidee exotice, ideal pentru copii.", en: "A small park full of exotic orchids, ideal for kids." },
    facts: {
      de: ["Exotische Flora", "Einfache Wege", "Lehrreich für Kinder", "Schön angelegt"],
      hu: ["Egzotikus növényvilág", "Könnyű ösvények", "Tanulságos gyerekeknek", "Szépen kialakított"],
      ro: ["Floră exotică", "Poteci ușoare", "Educativ pentru copii", "Frumos amenajat"],
      en: ["Exotic flora", "Easy paths", "Educational for kids", "Beautifully laid out"]
    }
  },
  {
    id: "vakona-lemuren-insel-life-v2",
    type: "animal-habitat",
    parent: "MG-A",
    coords: [48.43, -18.92],
    name: { de: "Vakona Lemureninsel", hu: "Vakona maki-sziget", ro: "Insula Lemurienilor Vakona", en: "Vakona Lemur Island" },
    description: { de: "Eine Insel, wo Lemuren frei herumlaufen und man sie hautnah erleben kann.", hu: "Sziget, ahol a makik szabadon szaladgálnak és közelről megismerhetők.", ro: "O insulă unde lemurienii aleargă liberi și pot fi experimentați de aproape.", en: "An island where lemurs run free and can be experienced up close." },
    facts: {
      de: ["Direkter Lemurenkontakt", "Sehr beliebt bei Kindern", "Sicherer Bereich", "Einfacher Zugang"],
      hu: ["Közvetlen maki-kapcsolat", "Nagyon népszerű gyerekeknél", "Biztonságos terület", "Könnyű megközelíthetőség"],
      ro: ["Contact direct cu lemurienii", "Foarte popular la copii", "Zonă sigură", "Acces ușor"],
      en: ["Direct lemur contact", "Very popular with kids", "Safe area", "Easy access"]
    }
  },
  {
    id: "ampefy-geyser-park-life-v2",
    type: "kid-landmark",
    parent: "MG-V",
    coords: [46.7, -19.1],
    name: { de: "Ampefy Geysir-Park", hu: "Ampefy gejzírpark", ro: "Parcul de gheizere Ampefy", en: "Ampefy Geyser Park" },
    description: { de: "Interessante natürliche Geysire, die Kinder faszinieren.", hu: "Érdekes természetes gejzírek, amelyek lenyűgözik a gyerekeket.", ro: "Gheizere naturale interesante care fascinează copiii.", en: "Interesting natural geysers that fascinate children." },
    facts: {
      de: ["Naturphänomen", "Leicht zugänglich", "Spannend für Kinder", "Einzigartig in Madagaskar"],
      hu: ["Természeti jelenség", "Könnyen elérhető", "Izgalmas gyerekeknek", "Egyedülálló Madagaszkáron"],
      ro: ["Fenomen natural", "Ușor accesibil", "Captivant pentru copii", "Unic în Madagascar"],
      en: ["Natural phenomenon", "Easily accessible", "Exciting for kids", "Unique in Madagascar"]
    }
  },
  {
    id: "tamatave-stadtpark-life-v2",
    type: "kid-landmark",
    parent: "MG-A",
    coords: [49.4, -18.15],
    name: { de: "Tamatave Stadtpark", hu: "Tamatave városi park", ro: "Parcul orașului Tamatave", en: "Tamatave City Park" },
    description: { de: "Ein grüner Rückzugsort in der Hafenstadt Tamatave.", hu: "Zöld menedék Tamatave kikötővárosban.", ro: "O retragere verde în orașul port Tamatave.", en: "A green retreat in the port city of Tamatave." },
    facts: {
      de: ["Große Parkfläche", "Schattenreiche Bäume", "Perfekt für Picknicks", "Stadtzentrum"],
      hu: ["Nagy parkterület", "Árnyékos fák", "Tökéletes piknikezéshez", "Városközpont"],
      ro: ["Suprafață mare de parc", "Copaci cu umbră", "Perfect pentru picnicuri", "Centru oraș"],
      en: ["Large park area", "Shady trees", "Perfect for picnics", "City center"]
    }
  },
  {
    id: "maroantsetra-vanille-farm-life-v2",
    type: "agriculture",
    parent: "MG-A",
    coords: [49.73, -15.43],
    name: { de: "Maroantsetra Vanillefarm", hu: "Maroantsetra vaníliagazdaság", ro: "Ferma de vanilie Maroantsetra", en: "Maroantsetra Vanilla Farm" },
    description: { de: "Besuch einer echten Vanillefarm, um mehr über die Würze zu erfahren.", hu: "Egy igazi vaníliagazdaság látogatása, hogy többet megtudj a fűszerről.", ro: "Vizitarea unei ferme adevărate de vanilie pentru a afla mai multe despre condiment.", en: "Visit to a real vanilla farm to learn more about the spice." },
    facts: {
      de: ["Vanilleanbau", "Lerne die Ernte kennen", "Duftende Umgebung", "Lehrreich für Familien"],
      hu: ["Vaníliatermesztés", "Ismerd meg a betakarítást", "Illatos környezet", "Tanulságos családoknak"],
      ro: ["Cultivarea vaniliei", "Învață despre recoltare", "Mediu parfumat", "Educativ pentru familii"],
      en: ["Vanilla cultivation", "Learn about the harvest", "Fragrant environment", "Educational for families"]
    }
  },
  {
    id: "nosy-be-korallenriff-life-v2",
    type: "animal-habitat",
    parent: "MG-D",
    coords: [48.25, -13.3],
    name: { de: "Nosy Be Korallenriff", hu: "Nosy Be korallzátony", ro: "Reciful de corali Nosy Be", en: "Nosy Be Coral Reef" },
    description: { de: "Ein Paradies für Unterwasserbeobachtungen von Fischen und Schildkröten.", hu: "Paradicsom a halak és teknősök víz alatti megfigyelésére.", ro: "Un paradis pentru observarea subacvatică a peștilor și țestoaselor.", en: "A paradise for underwater observation of fish and turtles." },
    facts: {
      de: ["Schnorcheln möglich", "Bunte Korallen", "Tropische Fische", "Meeresschildkröten"],
      hu: ["Snorkelezés lehetséges", "Színes korallok", "Trópusi halak", "Tengeri teknősök"],
      ro: ["Snorkeling posibil", "Corali colorați", "Pești tropicali", "Țestoase marine"],
      en: ["Snorkeling possible", "Colorful corals", "Tropical fish", "Sea turtles"]
    }
  },
  {
    id: "ranomafana-zoo-bereich-life-v2",
    type: "animal-habitat",
    parent: "MG-F",
    coords: [47.45, -21.25],
    name: { de: "Ranomafana Zoo-Bereich", hu: "Ranomafana állatkerti terület", ro: "Zona zoologică Ranomafana", en: "Ranomafana Zoo Area" },
    description: { de: "Ein geschützter Bereich zur Beobachtung der lokalen Fauna.", hu: "Védett terület a helyi fauna megfigyelésére.", ro: "O zonă protejată pentru observarea faunei locale.", en: "A protected area for observing local fauna." },
    facts: {
      de: ["Lokale Fauna", "Gut für Fotos", "Natur pur", "Lehrreich"],
      hu: ["Helyi fauna", "Jó fotózáshoz", "Tiszta természet", "Tanulságos"],
      ro: ["Fauna locală", "Bun pentru fotografii", "Natură pură", "Educativ"],
      en: ["Local fauna", "Good for photos", "Pure nature", "Educational"]
    }
  },
  {
    id: "lakato-lemuren-schutz-life-v2",
    type: "animal-habitat",
    parent: "MG-A",
    coords: [48.3, -18.9],
    name: { de: "Lakato Lemurenschutz", hu: "Lakato maki-védelem", ro: "Protecția lemurienilor Lakato", en: "Lakato Lemur Conservation" },
    description: { de: "Ein engagiertes Projekt zum Schutz und zur Beobachtung der Lemuren.", hu: "Elkötelezett projekt a makik védelmére és megfigyelésére.", ro: "Un proiect dedicat pentru protejarea și observarea lemurienilor.", en: "A dedicated project for protecting and observing lemurs." },
    facts: {
      de: ["Artenschutz", "Naturbeobachtung", "Einsatz für Lemuren", "Familiengerecht"],
      hu: ["Fajvédelem", "Természetmegfigyelés", "Elkötelezettség a makikért", "Családbarát"],
      ro: ["Conservarea speciilor", "Observarea naturii", "Dedicație pentru lemurieni", "Prietenos cu familia"],
      en: ["Species conservation", "Nature observation", "Dedication to lemurs", "Family friendly"]
    }
  },
  {
    id: "antsirabe-reis-felder-life-v2",
    type: "agriculture",
    parent: "MG-V",
    coords: [47.05, -19.9],
    name: { de: "Antsirabe Reisfelder", hu: "Antsirabe rizsföldek", ro: "Orezăriile Antsirabe", en: "Antsirabe Rice Fields" },
    description: { de: "Beeindruckende terrassierte Reisfelder in der Hochebene.", hu: "Lenyűgöző teraszos rizsföldek a fennsíkon.", ro: "Orezării terasate impresionante pe platou.", en: "Impressive terraced rice fields in the highlands." },
    facts: {
      de: ["Landwirtschaftliche Technik", "Grüne Terrassen", "Traditionell", "Fotogen"],
      hu: ["Mezőgazdasági technika", "Zöld teraszok", "Hagyományos", "Fotogén"],
      ro: ["Tehnică agricolă", "Terase verzi", "Tradițional", "Fotogenic"],
      en: ["Agricultural technique", "Green terraces", "Traditional", "Photogenic"]
    }
  },
  {
    id: "nosy-tanikely-marine-life-v2",
    type: "animal-habitat",
    parent: "MG-D",
    coords: [48.24, -13.48],
    name: { de: "Nosy Tanikely Meeresschutzgebiet", hu: "Nosy Tanikely tengeri rezervátum", ro: "Rezervația marină Nosy Tanikely", en: "Nosy Tanikely Marine Reserve" },
    description: { de: "Hervorragendes Gebiet zum Schnorcheln mit reicher Unterwasserwelt.", hu: "Kiváló terület snorkelezéshez gazdag víz alatti világgal.", ro: "Zonă excelentă pentru snorkeling cu o viață subacvatică bogată.", en: "Excellent area for snorkeling with a rich underwater world." },
    facts: {
      de: ["Sehr klares Wasser", "Reiche Unterwasserfauna", "Geschützt", "Beliebt für Ausflüge"],
      hu: ["Nagyon tiszta víz", "Gazdag víz alatti fauna", "Védett", "Népszerű kirándulásokhoz"],
      ro: ["Apă foarte clară", "Faună subacvatică bogată", "Protejat", "Popular pentru excursii"],
      en: ["Very clear water", "Rich underwater fauna", "Protected", "Popular for trips"]
    }
  },
  {
    id: "toliara-botanischer-garten-life-v2",
    type: "kid-landmark",
    parent: "MG-T",
    coords: [43.66, -23.35],
    name: { de: "Toliara Botanischer Garten", hu: "Toliara botanikus kert", ro: "Grădina Botanică Toliara", en: "Toliara Botanical Garden" },
    description: { de: "Ein kleiner Garten mit endemischen Pflanzen Madagaskars.", hu: "Kis kert Madagaszkár endemikus növényeivel.", ro: "O grădină mică cu plante endemice din Madagascar.", en: "A small garden with endemic plants of Madagascar." },
    facts: {
      de: ["Endemische Arten", "Bildungsort", "Ruhig", "Schön gepflegt"],
      hu: ["Endemikus fajok", "Oktatóhely", "Nyugodt", "Szépen karbantartott"],
      ro: ["Specii endemice", "Loc educațional", "Liniștit", "Frumos întreținut"],
      en: ["Endemic species", "Educational place", "Quiet", "Beautifully maintained"]
    }
  },
  {
    id: "manakara-kanal-life-v2",
    type: "kid-landmark",
    parent: "MG-F",
    coords: [48.0, -22.14],
    name: { de: "Manakara Kanal", hu: "Manakara csatorna", ro: "Canalul Manakara", en: "Manakara Canal" },
    description: { de: "Eine entspannte Bootsfahrt auf dem Kanal, ideal für Kinder.", hu: "Pihentető csónakázás a csatornán, ideális gyerekeknek.", ro: "O plimbare relaxantă cu barca pe canal, ideală pentru copii.", en: "A relaxing boat trip on the canal, ideal for kids." },
    facts: {
      de: ["Bootsausflug", "Naturerlebnis", "Sehr entspannend", "Familienaktivität"],
      hu: ["Csónakázás", "Természetélmény", "Nagyon pihentető", "Családi tevékenység"],
      ro: ["Excursie cu barca", "Experiență în natură", "Foarte relaxant", "Activitate de familie"],
      en: ["Boat trip", "Nature experience", "Very relaxing", "Family activity"]
    }
  },
  {
    id: "mahajanga-strand-life-v2",
    type: "kid-landmark",
    parent: "MG-M",
    coords: [46.3, -15.7],
    name: { de: "Mahajanga Strand", hu: "Mahajanga tengerpart", ro: "Plaja Mahajanga", en: "Mahajanga Beach" },
    description: { de: "Ein familienfreundlicher Strand in Mahajanga.", hu: "Családbarát strand Mahajangában.", ro: "O plajă prietenoasă cu familiile în Mahajanga.", en: "A family-friendly beach in Mahajanga." },
    facts: {
      de: ["Sandstrand", "Sicheres Baden", "Nah am Stadtzentrum", "Beliebter Treffpunkt"],
      hu: ["Homokos part", "Biztonságos fürdőzés", "Közel a központhoz", "Népszerű találkozóhely"],
      ro: ["Plajă cu nisip", "Înot sigur", "Aproape de centru", "Loc de întâlnire popular"],
      en: ["Sandy beach", "Safe swimming", "Close to center", "Popular meeting spot"]
    }
  },
  {
    id: "andohahela-nationalpark-life-v2",
    type: "animal-habitat",
    parent: "MG-T",
    coords: [46.7, -24.8],
    name: { de: "Andohahela Nationalpark", hu: "Andohahela Nemzeti Park", ro: "Parcul Național Andohahela", en: "Andohahela National Park" },
    description: { de: "Ein Übergangsgebiet mit verschiedenen Lebensräumen und vielen Lemuren.", hu: "Átmeneti terület különböző élőhelyekkel és sok makival.", ro: "O zonă de tranziție cu habitate diferite și mulți lemurieni.", en: "A transition area with various habitats and many lemurs." },
    facts: {
      de: ["Verschiedene Ökosysteme", "Lemurenvielfalt", "Naturbeobachtung", "UNESCO Welterbe"],
      hu: ["Különböző ökoszisztémák", "Makivariáció", "Természetmegfigyelés", "UNESCO Világörökség"],
      ro: ["Diferite ecosisteme", "Diversitate de lemurieni", "Observarea naturii", "Patrimoniu UNESCO"],
      en: ["Various ecosystems", "Lemur diversity", "Nature observation", "UNESCO World Heritage"]
    }
  },
  {
    id: "tsingy-namoroka-park-life-v2",
    type: "animal-habitat",
    parent: "MG-M",
    coords: [44.8, -16.4],
    name: { de: "Tsingy von Namoroka Park", hu: "Namoroka-Tsingy Park", ro: "Parcul Tsingy din Namoroka", en: "Tsingy of Namoroka Park" },
    description: { de: "Ein weniger bekannter Park mit spektakulären Felsformationen und Tieren.", hu: "Kevésbé ismert park látványos sziklaképződményekkel és állatokkal.", ro: "Un parc mai puțin cunoscut cu formațiuni stâncoase spectaculoase și animale.", en: "A less known park with spectacular rock formations and animals." },
    facts: {
      de: ["Felsformationen", "Unberührte Natur", "Lemuren", "Abseits der Pfade"],
      hu: ["Sziklaképződmények", "Érintetlen természet", "Makik", "Járatlan utakon"],
      ro: ["Formațiuni stâncoase", "Natură nealterată", "Lemurieni", "În afara cărărilor"],
      en: ["Rock formations", "Untouched nature", "Lemurs", "Off the beaten path"]
    }
  },
  {
    id: "fianarantsoa-weingut-life-v2",
    type: "agriculture",
    parent: "MG-F",
    coords: [47.1, -21.4],
    name: { de: "Fianarantsoa Weingut", hu: "Fianarantsoa borászat", ro: "Crama Fianarantsoa", en: "Fianarantsoa Winery" },
    description: { de: "Eine Region in Madagaskar, die für ihren Weinanbau bekannt ist.", hu: "Madagaszkár egy bortermeléséről ismert régiója.", ro: "O regiune din Madagascar cunoscută pentru cultivarea vinului.", en: "A region in Madagascar known for its wine cultivation." },
    facts: {
      de: ["Weinbau", "Hügelige Landschaft", "Kulturell interessant", "Lokale Produkte"],
      hu: ["Szőlőtermesztés", "Dombos táj", "Kulturálisan érdekes", "Helyi termékek"],
      ro: ["Cultivarea vinului", "Peisaj deluros", "Interesant cultural", "Produse locale"],
      en: ["Wine cultivation", "Hilly landscape", "Culturally interesting", "Local products"]
    }
  },
  {
    id: "nosy-komba-lemuren-life-v2",
    type: "animal-habitat",
    parent: "MG-D",
    coords: [48.35, -13.4],
    name: { de: "Nosy Komba Lemurenhalbinsel", hu: "Nosy Komba maki-félsziget", ro: "Peninsula Lemurienilor Nosy Komba", en: "Nosy Komba Lemur Peninsula" },
    description: { de: "Berühmt für die vielen freundlichen Lemuren auf der Insel.", hu: "Híres a szigeten lévő sok barátságos makiról.", ro: "Faimos pentru mulți lemurieni prietenoși de pe insulă.", en: "Famous for the many friendly lemurs on the island." },
    facts: {
      de: ["Freilebende Lemuren", "Beliebt bei Touristen", "Insel-Atmosphäre", "Einfach erreichbar"],
      hu: ["Szabadon élő makik", "Népszerű turisták körében", "Sziget-hangulat", "Könnyen elérhető"],
      ro: ["Lemurieni liberi", "Popular la turiști", "Atmosferă de insulă", "Ușor accesibil"],
      en: ["Free-living lemurs", "Popular with tourists", "Island atmosphere", "Easily accessible"]
    }
  },
  {
    id: "zombitse-vohibasia-park-life-v2",
    type: "animal-habitat",
    parent: "MG-T",
    coords: [44.7, -22.8],
    name: { de: "Zombitse-Vohibasia Nationalpark", hu: "Zombitse-Vohibasia Nemzeti Park", ro: "Parcul Național Zombitse-Vohibasia", en: "Zombitse-Vohibasia National Park" },
    description: { de: "Ein Schutzgebiet, das Trockenwald und Feuchtgebiete vereint.", hu: "Védett terület, amely egyesíti a száraz erdőt és a vizes élőhelyeket.", ro: "O arie protejată care combină pădurea uscată și zonele umede.", en: "A protected area that combines dry forest and wetlands." },
    facts: {
      de: ["Einzigartige Lemuren", "Seltene Vögel", "Vielfältige Biome", "Natur pur"],
      hu: ["Egyedülálló makik", "Ritka madarak", "Változatos biomok", "Tiszta természet"],
      ro: ["Lemurieni unici", "Păsări rare", "Biomi diverși", "Natură pură"],
      en: ["Unique lemurs", "Rare birds", "Diverse biomes", "Pure nature"]
    }
  },
  {
    id: "antsirabe-thermalbad-life-v2",
    type: "kid-landmark",
    parent: "MG-V",
    coords: [47.04, -19.87],
    name: { de: "Antsirabe Thermalbad", hu: "Antsirabe termálfürdő", ro: "Băile Termale Antsirabe", en: "Antsirabe Thermal Baths" },
    description: { de: "Natürliche Thermalquellen, die für Familien entspannend sind.", hu: "Természetes termálforrások, amelyek pihentetőek családok számára.", ro: "Izvoare termale naturale care sunt relaxante pentru familii.", en: "Natural thermal springs that are relaxing for families." },
    facts: {
      de: ["Heilwasser", "Entspannung", "Familienfreundlich", "In der Stadt"],
      hu: ["Gyógyvíz", "Pihenés", "Családbarát", "A városban"],
      ro: ["Apă terapeutică", "Relaxare", "Prietenos cu familia", "În oraș"],
      en: ["Healing water", "Relaxation", "Family friendly", "In the city"]
    }
  },
  {
    id: "ankarafantsika-vogelbeobachtung-life-v2",
    type: "animal-habitat",
    parent: "MG-M",
    coords: [46.8, -16.3],
    name: { de: "Ankarafantsika Vogelbeobachtung", hu: "Ankarafantsika madármegfigyelés", ro: "Observarea păsărilor Ankarafantsika", en: "Ankarafantsika Bird Watching" },
    description: { de: "Hervorragender Ort zur Beobachtung endemischer Vogelarten.", hu: "Kiváló hely endemikus madárfajok megfigyelésére.", ro: "Loc excelent pentru observarea speciilor de păsări endemice.", en: "Excellent place for observing endemic bird species." },
    facts: {
      de: ["Vogelvielfalt", "Lehrreich", "Naturbeobachtung", "Schön gelegen"],
      hu: ["Madárvilág", "Tanulságos", "Természetmegfigyelés", "Szép fekvés"],
      ro: ["Diversitate de păsări", "Educativ", "Observarea naturii", "Frumos amplasat"],
      en: ["Bird diversity", "Educational", "Nature observation", "Beautifully located"]
    }
  },
  {
    id: "nosy-mitsio-tauchen-life-v2",
    type: "animal-habitat",
    parent: "MG-D",
    coords: [48.6, -12.9],
    name: { de: "Nosy Mitsio Tauchen", hu: "Nosy Mitsio búvárkodás", ro: "Scufundări Nosy Mitsio", en: "Nosy Mitsio Diving" },
    description: { de: "Spektakuläre Unterwasserwelt für erfahrene Taucher und Schnorchler.", hu: "Látványos víz alatti világ tapasztalt búvároknak és snorkeleseknek.", ro: "Lume subacvatică spectaculoasă pentru scafandri experimentați și snorkeleri.", en: "Spectacular underwater world for experienced divers and snorkelers." },
    facts: {
      de: ["Große Artenvielfalt", "Korallen", "Klares Wasser", "Abenteuer"],
      hu: ["Nagy fajgazdagság", "Korallok", "Tiszta víz", "Kaland"],
      ro: ["Biodiversitate mare", "Corali", "Apă clară", "Aventură"],
      en: ["Great biodiversity", "Corals", "Clear water", "Adventure"]
    }
  },
  {
    id: "tampolo-naturreservat-life-v2",
    type: "animal-habitat",
    parent: "MG-A",
    coords: [49.4, -17.3],
    name: { de: "Tampolo Naturreservat", hu: "Tampolo természetvédelmi terület", ro: "Rezervația naturală Tampolo", en: "Tampolo Nature Reserve" },
    description: { de: "Ein schönes Reservat mit dichter Vegetation und vielen Lemuren.", hu: "Szép rezervátum sűrű növényzettel és sok makival.", ro: "O rezervație frumoasă cu vegetație densă și mulți lemurieni.", en: "A beautiful reserve with dense vegetation and many lemurs." },
    facts: {
      de: ["Dichter Wald", "Lemuren", "Wanderungen", "Natur pur"],
      hu: ["Sűrű erdő", "Makik", "Túrák", "Tiszta természet"],
      ro: ["Pădure densă", "Lemurieni", "Drumeții", "Natură pură"],
      en: ["Dense forest", "Lemurs", "Hikes", "Pure nature"]
    }
  },
  {
    id: "amphibien-wald-ranomafana-life-v2",
    type: "animal-habitat",
    parent: "MG-F",
    coords: [47.46, -21.26],
    name: { de: "Amphibien-Wald Ranomafana", hu: "Ranomafana kétéltű-erdő", ro: "Pădurea amfibienilor Ranomafana", en: "Ranomafana Amphibian Forest" },
    description: { de: "Ein einzigartiger Lebensraum für viele Froscharten.", hu: "Egyedülálló élőhely sok békafajnak.", ro: "Un habitat unic pentru multe specii de broaște.", en: "A unique habitat for many frog species." },
    facts: {
      de: ["Froschvielfalt", "Seltene Arten", "Naturbeobachtung", "Lehrreich"],
      hu: ["Békafaj-gazdagság", "Ritka fajok", "Természetmegfigyelés", "Tanulságos"],
      ro: ["Diversitate de broaște", "Specii rare", "Observarea naturii", "Educativ"],
      en: ["Frog diversity", "Rare species", "Nature observation", "Educational"]
    }
  },
  {
    id: "mahajanga-zoo-life-v2",
    type: "kid-landmark",
    parent: "MG-M",
    coords: [46.31, -15.71],
    name: { de: "Mahajanga Zoo", hu: "Mahajanga állatkert", ro: "Grădina Zoologică Mahajanga", en: "Mahajanga Zoo" },
    description: { de: "Ein kleiner Zoo, der die Tiere Madagaskars für Kinder erlebbar macht.", hu: "Kis állatkert, amely a gyerekek számára megismerhetővé teszi Madagaszkár állatait.", ro: "O mică grădină zoologică care face animalele din Madagascar accesibile copiilor.", en: "A small zoo that makes Madagascar's animals accessible to kids." },
    facts: {
      de: ["Heimische Tiere", "Bildung", "Familienfreundlich", "Klein"],
      hu: ["Hazai állatok", "Oktatás", "Családbarát", "Kicsi"],
      ro: ["Animale locale", "Educație", "Prietenos cu familia", "Mic"],
      en: ["Native animals", "Education", "Family friendly", "Small"]
    }
  }
];
