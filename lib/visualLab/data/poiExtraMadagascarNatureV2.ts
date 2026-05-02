import type { POI } from "./poi";

export const poiExtraMadagascarNatureV2: POI[] = [
  {
    id: "tsaratanana-nature-v2",
    type: "mountain",
    parent: "MG-T",
    coords: [48.8, -14.03],
    name: { de: "Tsaratanana-Massiv", hu: "Tsaratanana-hegység", ro: "Masivul Tsaratanana", en: "Tsaratanana Massif" },
    description: { de: "Das Tsaratanana-Massiv ist das höchste Bergmassiv Madagaskars.", hu: "A Tsaratanana-hegység Madagaszkár legmagasabb hegyvidéke.", ro: "Masivul Tsaratanana este cel mai înalt masiv muntos din Madagascar.", en: "The Tsaratanana Massif is the highest mountain massif in Madagascar." },
    facts: {
      de: ["Höchster Punkt ist der Maromokotro", "Vulkanischen Ursprungs", "Teil des Tsaratanana-Reservats", "Wichtiger Wasserlieferant"],
      hu: ["Legmagasabb pontja a Maromokotro", "Vulkáni eredetű", "A Tsaratanana-rezervátum része", "Fontos vízforrás"],
      ro: ["Cel mai înalt punct este Maromokotro", "De origine vulcanică", "Face parte din Rezervația Tsaratanana", "Sursă importantă de apă"],
      en: ["Highest point is Maromokotro", "Of volcanic origin", "Part of the Tsaratanana Reserve", "Important source of water"]
    }
  },
  {
    id: "masoala-nature-v2",
    type: "forest",
    parent: "MG-S",
    coords: [50.2, -15.2],
    name: { de: "Masoala-Regenwald", hu: "Masoala esőerdő", ro: "Pădurea tropicală Masoala", en: "Masoala Rainforest" },
    description: { de: "Der Masoala-Nationalpark schützt den größten verbliebenen Regenwald Madagaskars.", hu: "A Masoala Nemzeti Park Madagaszkár legnagyobb megmaradt esőerdőjét védi.", ro: "Parcul Național Masoala protejează cea mai mare pădure tropicală rămasă din Madagascar.", en: "Masoala National Park protects the largest remaining rainforest in Madagascar." },
    facts: {
      de: ["Größtes Schutzgebiet Madagaskars", "UNESCO-Welterbe", "Beheimatet seltene Arten", "Umfasst auch Meeresgebiete"],
      hu: ["Madagaszkár legnagyobb védett területe", "UNESCO világörökség", "Ritka fajok otthona", "Tengeri területeket is magában foglal"],
      ro: ["Cea mai mare zonă protejată din Madagascar", "Patrimoniul mondial UNESCO", "Adăpostește specii rare", "Include și zone marine"],
      en: ["Largest protected area in Madagascar", "UNESCO World Heritage Site", "Home to rare species", "Includes marine areas"]
    }
  },
  {
    id: "tsingy-bemaraha-nature-v2",
    type: "mountain",
    parent: "MG-M",
    coords: [44.7, -18.7],
    name: { de: "Tsingy de Bemaraha", hu: "Tsingy de Bemaraha", ro: "Tsingy de Bemaraha", en: "Tsingy de Bemaraha" },
    description: { de: "Eine spektakuläre Kalkstein-Karstlandschaft im Westen Madagaskars.", hu: "Látványos mészkő karsztvidék Madagaszkár nyugati részén.", ro: "Un peisaj carstic spectaculos din calcar în vestul Madagascarului.", en: "A spectacular limestone karst landscape in western Madagascar." },
    facts: {
      de: ["Einzigartige 'Tsingy'-Felsformationen", "UNESCO-Welterbe", "Schwieriges Gelände für Wanderer", "Beheimatet endemische Lemuren"],
      hu: ["Egyedülálló 'Tsingy' sziklaképződmények", "UNESCO világörökség", "Nehéz terep túrázóknak", "Endémikus makik élőhelye"],
      ro: ["Formațiuni stâncoase unice 'Tsingy'", "Patrimoniul mondial UNESCO", "Teren dificil pentru drumeți", "Adăpostește lemurieni endemici"],
      en: ["Unique 'Tsingy' rock formations", "UNESCO World Heritage Site", "Difficult terrain for hikers", "Home to endemic lemurs"]
    }
  },
  {
    id: "lake-alaotra-nature-v2",
    type: "lake",
    parent: "MG-A",
    coords: [48.5, -17.5],
    name: { de: "Alaotra-See", hu: "Alaotra-tó", ro: "Lacul Alaotra", en: "Lake Alaotra" },
    description: { de: "Der größte See Madagaskars, bekannt für seine Bedeutung in der Landwirtschaft.", hu: "Madagaszkár legnagyobb tava, amely mezőgazdasági jelentőségéről ismert.", ro: "Cel mai mare lac din Madagascar, cunoscut pentru importanța sa în agricultură.", en: "The largest lake in Madagascar, known for its agricultural importance." },
    facts: {
      de: ["Wichtiges Zentrum für Reisbau", "Bettet in ein großes Feuchtgebiet ein", "Gefährdeter Lebensraum", "Süßwassersee"],
      hu: ["Fontos rizstermesztési központ", "Egy nagy vizesélőhely része", "Veszélyeztetett élőhely", "Édesvizű tó"],
      ro: ["Centru important pentru cultivarea orezului", "Face parte dintr-o zonă umedă mare", "Habitat amenințat", "Lac de apă dulce"],
      en: ["Important center for rice cultivation", "Part of a large wetland", "Endangered habitat", "Freshwater lake"]
    }
  },
  {
    id: "lokobe-nature-v2",
    type: "forest",
    parent: "MG-D",
    coords: [48.3, -13.4],
    name: { de: "Lokobe-Wald", hu: "Lokobe erdő", ro: "Pădurea Lokobe", en: "Lokobe Forest" },
    description: { de: "Ein bedeutendes Naturschutzgebiet auf der Insel Nosy Be.", hu: "Fontos természetvédelmi terület Nosy Be szigetén.", ro: "O rezervație naturală importantă pe insula Nosy Be.", en: "An important nature reserve on the island of Nosy Be." },
    facts: {
      de: ["Auf Nosy Be gelegen", "Primärwald-Überreste", "Beheimatet den Schwarzen Lemur", "Schützt seltene Flora"],
      hu: ["Nosy Be szigetén található", "Őserdő maradványok", "A fekete maki otthona", "Ritka növényeket véd"],
      ro: ["Situată pe Nosy Be", "Rămășițe de pădure primară", "Adăpostește lemurianul negru", "Protejează flora rară"],
      en: ["Located on Nosy Be", "Primary forest remnants", "Home to the Black Lemur", "Protects rare flora"]
    }
  },
  {
    id: "nosy-be-nature-v2",
    type: "island",
    parent: "MG-D",
    coords: [48.2, -13.3],
    name: { de: "Nosy Be", hu: "Nosy Be", ro: "Nosy Be", en: "Nosy Be" },
    description: { de: "Die bekannteste Urlaubsinsel Madagaskars vor der Nordwestküste.", hu: "Madagaszkár legismertebb üdülőszigete az északnyugati partoknál.", ro: "Cea mai cunoscută insulă de vacanță a Madagascarului în largul coastei de nord-vest.", en: "The most famous resort island of Madagascar off the northwest coast." },
    facts: {
      de: ["Berühmt für Ylang-Ylang-Plantagen", "Traumhafte Strände", "Vulkanischer Ursprung", "Touristen-Hotspot"],
      hu: ["Híres az ilang-ilang ültetvényeiről", "Csodálatos strandok", "Vulkáni eredetű", "Turisztikai központ"],
      ro: ["Faimoasă pentru plantațiile de ylang-ylang", "Plaje de vis", "Origine vulcanică", "Centru turistic"],
      en: ["Famous for ylang-ylang plantations", "Dreamy beaches", "Volcanic origin", "Tourist hotspot"]
    }
  },
  {
    id: "betsiboka-river-nature-v2",
    type: "river",
    parent: "MG-B",
    coords: [46.7, -15.7],
    name: { de: "Betsiboka-Fluss", hu: "Betsiboka-folyó", ro: "Râul Betsiboka", en: "Betsiboka River" },
    description: { de: "Ein bedeutender Fluss im Nordwesten, bekannt für sein rotes Sediment.", hu: "Jelentős folyó az északnyugaton, vörös üledékéről ismert.", ro: "Un râu important în nord-vest, cunoscut pentru sedimentele sale roșii.", en: "A significant river in the northwest, known for its red sediment." },
    facts: {
      de: ["Starker Erosionsabfluss", "Mündet in die Bombetoka-Bucht", "Rot gefärbtes Wasser", "Wichtig für die lokale Fischerei"],
      hu: ["Erős eróziós lefolyás", "A Bombetoka-öbölbe torkollik", "Vörösre színeződött víz", "Fontos a helyi halászat számára"],
      ro: ["Scurgere puternică de eroziune", "Se varsă în Golful Bombetoka", "Apă colorată în roșu", "Important pentru pescuitul local"],
      en: ["Strong erosion runoff", "Flows into Bombetoka Bay", "Red-colored water", "Important for local fishing"]
    }
  },
  {
    id: "tsiribihina-river-nature-v2",
    type: "river",
    parent: "MG-M",
    coords: [44.5, -19.5],
    name: { de: "Tsiribihina-Fluss", hu: "Tsiribihina-folyó", ro: "Râul Tsiribihina", en: "Tsiribihina River" },
    description: { de: "Ein Fluss im Westen, beliebt für Kanutouren durch die Schluchten.", hu: "Nyugati folyó, népszerű a szurdokon átvezető kenu-túrák miatt.", ro: "Un râu în vest, popular pentru tururile cu canoe prin canioane.", en: "A river in the west, popular for canoe tours through the gorges." },
    facts: {
      de: ["Beliebt bei Touristen", "Durchquert beeindruckende Schluchten", "Reich an Tierwelt", "Wichtig für den Transport"],
      hu: ["Népszerű a turisták körében", "Lenyűgöző szurdokon halad át", "Gazdag vadvilág", "Fontos a közlekedésben"],
      ro: ["Popular printre turiști", "Traversează canioane impresionante", "Bogată în viață sălbatică", "Important pentru transport"],
      en: ["Popular with tourists", "Crosses impressive gorges", "Rich in wildlife", "Important for transportation"]
    }
  },
  {
    id: "mangoky-river-nature-v2",
    type: "river",
    parent: "MG-A",
    coords: [44.3, -21.7],
    name: { de: "Mangoky-Fluss", hu: "Mangoky-folyó", ro: "Râul Mangoky", en: "Mangoky River" },
    description: { de: "Der längste Fluss Madagaskars, der durch den Südwesten fließt.", hu: "Madagaszkár leghosszabb folyója, amely a délnyugaton folyik keresztül.", ro: "Cel mai lung râu din Madagascar, care curge prin sud-vest.", en: "The longest river in Madagascar, flowing through the southwest." },
    facts: {
      de: ["Länge ca. 560 km", "Entspringt im zentralen Hochland", "Mündet in den Indischen Ozean", "Wichtig für die Landwirtschaft"],
      hu: ["Hossza kb. 560 km", "A központi felföldről ered", "Az Indiai-óceánba torkollik", "Fontos a mezőgazdaság számára"],
      ro: ["Lungime aprox. 560 km", "Izvorăște din munții centrali", "Se varsă în Oceanul Indian", "Important pentru agricultură"],
      en: ["Length approx. 560 km", "Originates in the central highlands", "Flows into the Indian Ocean", "Important for agriculture"]
    }
  },
  {
    id: "lake-itasy-nature-v2",
    type: "lake",
    parent: "MG-I",
    coords: [46.7, -19.2],
    name: { de: "Itasy-See", hu: "Itasy-tó", ro: "Lacul Itasy", en: "Lake Itasy" },
    description: { de: "Ein vulkanischer See im zentralen Hochland.", hu: "Vulkáni eredetű tó a központi felföldön.", ro: "Un lac vulcanic în munții centrali.", en: "A volcanic lake in the central highlands." },
    facts: {
      de: ["Vulkanische Region", "Bekannt für Geysire in der Nähe", "Touristenattraktion", "Süßwasser"],
      hu: ["Vulkáni régió", "A közelben lévő gejzírekről híres", "Turisztikai látványosság", "Édesvíz"],
      ro: ["Regiune vulcanică", "Cunoscut pentru gheizerele din apropiere", "Atracție turistică", "Apă dulce"],
      en: ["Volcanic region", "Known for geysers nearby", "Tourist attraction", "Freshwater"]
    }
  },
  {
    id: "ankarafantsika-nature-v2",
    type: "forest",
    parent: "MG-B",
    coords: [46.8, -16.3],
    name: { de: "Ankarafantsika-Nationalpark", hu: "Ankarafantsika Nemzeti Park", ro: "Parcul Național Ankarafantsika", en: "Ankarafantsika National Park" },
    description: { de: "Ein wichtiger Park im Nordwesten mit Trockenwald-Ökosystemen.", hu: "Fontos park az északnyugaton, száraz erdő ökoszisztémákkal.", ro: "Un parc important în nord-vest cu ecosisteme de pădure uscată.", en: "An important park in the northwest with dry forest ecosystems." },
    facts: {
      de: ["Bekannt für Sifakas", "Trockenwald-Schutzgebiet", "Wichtige Forschungsstation", "Vogelschutzgebiet"],
      hu: ["Szifakáiról híres", "Száraz erdő védett terület", "Fontos kutatóállomás", "Madárvédelmi terület"],
      ro: ["Cunoscut pentru sifaka", "Rezervație de pădure uscată", "Stație de cercetare importantă", "Rezervație pentru păsări"],
      en: ["Famous for Sifakas", "Dry forest reserve", "Important research station", "Bird sanctuary"]
    }
  },
  {
    id: "andringitra-nature-v2",
    type: "mountain",
    parent: "MG-H",
    coords: [46.9, -22.1],
    name: { de: "Andringitra-Massiv", hu: "Andringitra-hegység", ro: "Masivul Andringitra", en: "Andringitra Massif" },
    description: { de: "Ein atemberaubendes Granit-Massiv im Südosten Madagaskars.", hu: "Lélegzetelállító gránit-hegység Madagaszkár délkeleti részén.", ro: "Un masiv de granit uluitor în sud-estul Madagascarului.", en: "A breathtaking granite massif in southeastern Madagascar." },
    facts: {
      de: ["Zweitbester Gipfel: Pic Boby", "UNESCO-Welterbe-Bestandteil", "Spektakuläre Wanderwege", "Einzigartige Flora"],
      hu: ["Második legmagasabb csúcs: Pic Boby", "UNESCO világörökség része", "Lenyűgöző túraútvonalak", "Egyedülálló flóra"],
      ro: ["Al doilea vârf ca înălțime: Pic Boby", "Parte a patrimoniului mondial UNESCO", "Trasee spectaculoase", "Floră unică"],
      en: ["Second highest peak: Pic Boby", "Part of UNESCO World Heritage", "Spectacular hiking trails", "Unique flora"]
    }
  },
  {
    id: "ranomafana-nature-v2",
    type: "forest",
    parent: "MG-V",
    coords: [47.4, -21.2],
    name: { de: "Ranomafana-Nationalpark", hu: "Ranomafana Nemzeti Park", ro: "Parcul Național Ranomafana", en: "Ranomafana National Park" },
    description: { de: "Ein bedeutender Regenwald-Park im Südosten.", hu: "Jelentős esőerdő-park a délkeleten.", ro: "Un parc important de pădure tropicală în sud-est.", en: "An important rainforest park in the southeast." },
    facts: {
      de: ["Bekannt für die Entdeckung des Goldbambuslemurs", "Reich an Biodiversität", "Heißquellen", "Forschungszentrum"],
      hu: ["Aranybambusz-maki felfedezéséről híres", "Gazdag biodiverzitás", "Hévízforrások", "Kutatóközpont"],
      ro: ["Cunoscut pentru descoperirea lemurianului de bambus auriu", "Bogată în biodiversitate", "Izvoare termale", "Centru de cercetare"],
      en: ["Known for discovery of Golden Bamboo Lemur", "Rich in biodiversity", "Hot springs", "Research center"]
    }
  },
  {
    id: "nosy-komba-nature-v2",
    type: "island",
    parent: "MG-D",
    coords: [48.3, -13.4],
    name: { de: "Nosy Komba", hu: "Nosy Komba", ro: "Nosy Komba", en: "Nosy Komba" },
    description: { de: "Eine Insel vor Nosy Be, bekannt für ihre Lemuren.", hu: "Nosy Be melletti sziget, makijairól híres.", ro: "O insulă lângă Nosy Be, cunoscută pentru lemurienii săi.", en: "An island near Nosy Be, known for its lemurs." },
    facts: {
      de: ["Vulkaninsel", "Bekannt als Lemureninsel", "Schönes Handwerk", "Touristisch erschlossen"],
      hu: ["Vulkánsziget", "Makik szigeteként ismert", "Gyönyörű kézművesség", "Turisztikailag kiépített"],
      ro: ["Insulă vulcanică", "Cunoscută ca insula lemurienilor", "Artizanat frumos", "Dezvoltată turistic"],
      en: ["Volcanic island", "Known as Lemur Island", "Beautiful handicrafts", "Tourist developed"]
    }
  },
  {
    id: "isalo-nature-v2",
    type: "mountain",
    parent: "MG-T",
    coords: [45.3, -22.6],
    name: { de: "Isalo-Massiv", hu: "Isalo-hegység", ro: "Masivul Isalo", en: "Isalo Massif" },
    description: { de: "Eine beeindruckende Sandstein-Landschaft im Süden Madagaskars.", hu: "Lenyűgöző homokkő táj Madagaszkár déli részén.", ro: "Un peisaj impresionant de gresie în sudul Madagascarului.", en: "An impressive sandstone landscape in southern Madagascar." },
    facts: {
      de: ["Spektakuläre Schluchten", "Einzigartige Sandsteinformationen", "Oasen in den Tälern", "Große Lemurpopulation"],
      hu: ["Lenyűgöző szurdokok", "Egyedülálló homokkő képződmények", "Oázisok a völgyekben", "Nagy maki-populáció"],
      ro: ["Canioane spectaculoase", "Formațiuni de gresie unice", "Oaze în văi", "Populație mare de lemurieni"],
      en: ["Spectacular canyons", "Unique sandstone formations", "Oases in the valleys", "Large lemur population"]
    }
  },
  {
    id: "masoala-peninsula-nature-v2",
    type: "island",
    parent: "MG-S",
    coords: [50.2, -15.4],
    name: { de: "Masoala-Halbinsel", hu: "Masoala-félsziget", ro: "Peninsula Masoala", en: "Masoala Peninsula" },
    description: { de: "Eine abgelegene Halbinsel im Nordosten, bekannt für ihre unberührte Natur.", hu: "Elszigetelt félsziget az északkeleten, érintetlen természetéről ismert.", ro: "O peninsulă izolată în nord-est, cunoscută pentru natura sa neatinsă.", en: "A remote peninsula in the northeast, known for its pristine nature." },
    facts: {
      de: ["Heimat seltener Reptilien", "Dichter Regenwald", "Abgelegene Strände", "Teil des Nationalparks"],
      hu: ["Ritka hüllők otthona", "Sűrű esőerdő", "Elszigetelt strandok", "A nemzeti park része"],
      ro: ["Casă pentru reptile rare", "Pădure tropicală densă", "Plaje izolate", "Parte a parcului național"],
      en: ["Home to rare reptiles", "Dense rainforest", "Remote beaches", "Part of the national park"]
    }
  },
  {
    id: "tsingy-namoroka-nature-v2",
    type: "mountain",
    parent: "MG-M",
    coords: [44.8, -16.4],
    name: { de: "Tsingy von Namoroka", hu: "Namoroka-Tsingy", ro: "Tsingy din Namoroka", en: "Tsingy of Namoroka" },
    description: { de: "Ein spektakuläres Karstgebiet mit einzigartigen Felsformationen.", hu: "Látványos karsztvidék egyedülálló sziklaképződményekkel.", ro: "O zonă carstică spectaculoasă cu formațiuni stâncoase unice.", en: "A spectacular karst area with unique rock formations." },
    facts: {
      de: ["Weniger besucht als Bemaraha", "Schützenswerte Karstlandschaft", "Endemische Arten", "Eindrucksvolle Höhlen"],
      hu: ["Kevésbé látogatott, mint Bemaraha", "Védendő karsztvidék", "Endémikus fajok", "Lenyűgöző barlangok"],
      ro: ["Mai puțin vizitată decât Bemaraha", "Peisaj carstic de protejat", "Specii endemice", "Peșteri impresionante"],
      en: ["Less visited than Bemaraha", "Karst landscape worth protecting", "Endemic species", "Impressive caves"]
    }
  },
  {
    id: "lake-tampolo-nature-v2",
    type: "lake",
    parent: "MG-S",
    coords: [50.2, -15.7],
    name: { de: "Tampolo-See", hu: "Tampolo-tó", ro: "Lacul Tampolo", en: "Lake Tampolo" },
    description: { de: "Ein kleiner, idyllischer See nahe der Masoala-Halbinsel.", hu: "Kicsi, idilli tó a Masoala-félsziget közelében.", ro: "Un lac mic și idilic lângă Peninsula Masoala.", en: "A small, idyllic lake near the Masoala Peninsula." },
    facts: {
      de: ["In einer geschützten Umgebung", "Umgeben von Regenwald", "Ruhiges Gewässer", "Ideal für Naturbeobachtungen"],
      hu: ["Védett környezetben", "Esőerdő veszi körül", "Csendes víz", "Ideális természetmegfigyelésre"],
      ro: ["Într-un mediu protejat", "Înconjurat de pădure tropicală", "Apă liniștită", "Ideal pentru observarea naturii"],
      en: ["In a protected environment", "Surrounded by rainforest", "Quiet water", "Ideal for nature observation"]
    }
  },
  {
    id: "mahajanga-coast-nature-v2",
    type: "sea",
    parent: "MG-B",
    coords: [46.3, -15.7],
    name: { de: "Küste bei Mahajanga", hu: "Mahajanga tengerpartja", ro: "Coasta de lângă Mahajanga", en: "Coast near Mahajanga" },
    description: { de: "Ein Bereich entlang der Nordwestküste mit schönen Stränden.", hu: "Terület az északnyugati part mentén, szép strandokkal.", ro: "O zonă de-a lungul coastei de nord-vest cu plaje frumoase.", en: "An area along the northwest coast with beautiful beaches." },
    facts: {
      de: ["Warme Gewässer", "Wichtiges Habitat", "Mangrovenwälder", "Touristisch bedeutend"],
      hu: ["Meleg vizek", "Fontos élőhely", "Mangroveerdők", "Turisztikailag jelentős"],
      ro: ["Ape calde", "Habitat important", "Păduri de mangrove", "Important din punct de vedere turistic"],
      en: ["Warm waters", "Important habitat", "Mangrove forests", "Touristically significant"]
    }
  },
  {
    id: "saint-marie-island-nature-v2",
    type: "island",
    parent: "MG-A",
    coords: [49.8, -17.1],
    name: { de: "Nosy Boraha", hu: "Nosy Boraha", ro: "Nosy Boraha", en: "Nosy Boraha" },
    description: { de: "Eine Insel vor der Ostküste, bekannt als Île Sainte-Marie.", hu: "Keleti part előtti sziget, Île Sainte-Marie néven ismert.", ro: "O insulă în largul coastei de est, cunoscută sub numele de Île Sainte-Marie.", en: "An island off the east coast, known as Île Sainte-Marie." },
    facts: {
      de: ["Bekannt für Walbeobachtung", "Ehemaliges Piratenversteck", "Üppige tropische Vegetation", "Traumstrände"],
      hu: ["Bálnanézésről ismert", "Egykori kalóztanya", "Bőséges trópusi növényzet", "Csodálatos strandok"],
      ro: ["Cunoscută pentru observarea balenelor", "Fostă ascunzătoare a piraților", "Vegetație tropicală luxuriantă", "Plaje de vis"],
      en: ["Known for whale watching", "Former pirate hideout", "Lush tropical vegetation", "Dream beaches"]
    }
  },
  {
    id: "tsiribihina-delta-nature-v2",
    type: "river",
    parent: "MG-M",
    coords: [44.3, -19.7],
    name: { de: "Tsiribihina-Delta", hu: "Tsiribihina-delta", ro: "Delta Tsiribihina", en: "Tsiribihina Delta" },
    description: { de: "Das Flussdelta, wo der Tsiribihina in den Ozean mündet.", hu: "Folyódelta, ahol a Tsiribihina az óceánba torkollik.", ro: "Delta râului unde Tsiribihina se varsă în ocean.", en: "The river delta where the Tsiribihina flows into the ocean." },
    facts: {
      de: ["Reichhaltiges Ökosystem", "Mangroven-Lebensraum", "Wichtig für Vögel", "Sandbänke"],
      hu: ["Gazdag ökoszisztéma", "Mangrove élőhely", "Fontos madarak számára", "Homokpadok"],
      ro: ["Ecosistem bogat", "Habitat de mangrove", "Important pentru păsări", "Bancuri de nisip"],
      en: ["Rich ecosystem", "Mangrove habitat", "Important for birds", "Sandbanks"]
    }
  },
  {
    id: "lake-tsimanampetsotsa-nature-v2",
    type: "lake",
    parent: "MG-T",
    coords: [43.8, -24.1],
    name: { de: "Tsimanampetsotsa-See", hu: "Tsimanampetsotsa-tó", ro: "Lacul Tsimanampetsotsa", en: "Lake Tsimanampetsotsa" },
    description: { de: "Ein alkalischer Salzsee im Südwesten Madagaskars.", hu: "Lúgos sós tó Madagaszkár délnyugati részén.", ro: "Un lac cu apă sărată alcalină în sud-vestul Madagascarului.", en: "An alkaline saltwater lake in southwestern Madagascar." },
    facts: {
      de: ["Nationalpark", "Wichtiges Refugium für Flamingos", "Sehr mineralreich", "Einzigartige Landschaft"],
      hu: ["Nemzeti park", "Fontos menedék flamingók számára", "Nagyon ásványi anyagokban gazdag", "Egyedülálló táj"],
      ro: ["Parc național", "Refugiu important pentru flamingo", "Foarte bogat în minerale", "Peisaj unic"],
      en: ["National park", "Important refuge for flamingos", "Very mineral-rich", "Unique landscape"]
    }
  },
  {
    id: "mangoro-river-nature-v2",
    type: "river",
    parent: "MG-A",
    coords: [48.7, -19.2],
    name: { de: "Mangoro-Fluss", hu: "Mangoro-folyó", ro: "Râul Mangoro", en: "Mangoro River" },
    description: { de: "Ein langer Fluss, der die Ostküste entwässert.", hu: "Hosszú folyó, amely a keleti partot csapolja le.", ro: "Un râu lung care drenează coasta de est.", en: "A long river that drains the eastern coast." },
    facts: {
      de: ["Wichtiges Flusssystem", "Führt durch den Regenwald", "Bedeutend für Wasserkraft", "Fischreich"],
      hu: ["Fontos folyórendszer", "Az esőerdőn keresztül folyik", "Jelentős a vízenergia szempontjából", "Gazdag halállomány"],
      ro: ["Sistem fluvial important", "Curge prin pădurea tropicală", "Semnificativ pentru hidroenergie", "Bogată în pește"],
      en: ["Important river system", "Flows through the rainforest", "Significant for hydropower", "Rich in fish"]
    }
  },
  {
    id: "nosy-mitseo-nature-v2",
    type: "island",
    parent: "MG-D",
    coords: [48.5, -12.9],
    name: { de: "Nosy Mitsio", hu: "Nosy Mitsio", ro: "Nosy Mitsio", en: "Nosy Mitsio" },
    description: { de: "Eine Inselgruppe nördlich von Nosy Be.", hu: "Nosy Be-től északra fekvő szigetcsoport.", ro: "Un arhipelag la nord de Nosy Be.", en: "An archipelago north of Nosy Be." },
    facts: {
      de: ["Paradies zum Tauchen", "Unberührte Strände", "Vulkanische Felsen", "Sehr ruhig"],
      hu: ["Paradicsom a búvárkodáshoz", "Érintetlen strandok", "Vulkáni sziklák", "Nagyon csendes"],
      ro: ["Paradis pentru scufundări", "Plaje virgine", "Stânci vulcanice", "Foarte liniștit"],
      en: ["Paradise for diving", "Pristine beaches", "Volcanic rocks", "Very quiet"]
    }
  },
  {
    id: "montagne-ambre-nature-v2",
    type: "mountain",
    parent: "MG-D",
    coords: [49.2, -12.5],
    name: { de: "Montagne d'Ambre", hu: "Montagne d'Ambre", ro: "Montagne d'Ambre", en: "Montagne d'Ambre" },
    description: { de: "Ein Vulkanmassiv im Norden Madagaskars, bekannt als Nationalpark.", hu: "Vulkáni hegység Madagaszkár északi részén, nemzeti parkként ismert.", ro: "Un masiv vulcanic în nordul Madagascarului, cunoscut ca parc național.", en: "A volcanic massif in northern Madagascar, known as a national park." },
    facts: {
      de: ["Regenwald in der Höhe", "Zahlreiche Wasserfälle", "Beheimatet den kleinsten Chamäleon", "Kühleres Klima"],
      hu: ["Esőerdő a magasságban", "Számos vízesés", "A legkisebb kaméleon otthona", "Hűvösebb éghajlat"],
      ro: ["Pădure tropicală la altitudine", "Numeroase cascade", "Casă pentru cel mai mic cameleon", "Climat mai răcoros"],
      en: ["Rainforest at altitude", "Numerous waterfalls", "Home to the smallest chameleon", "Cooler climate"]
    }
  },
  {
    id: "baie-de-bombetoka-nature-v2",
    type: "sea",
    parent: "MG-B",
    coords: [46.3, -15.7],
    name: { de: "Bombetoka-Bucht", hu: "Bombetoka-öböl", ro: "Golful Bombetoka", en: "Bombetoka Bay" },
    description: { de: "Eine beeindruckende Bucht im Nordwesten, wo die Betsiboka mündet.", hu: "Lenyűgöző öböl az északnyugaton, ahová a Betsiboka torkollik.", ro: "Un golf impresionant în nord-vest, unde se varsă Betsiboka.", en: "An impressive bay in the northwest where the Betsiboka flows into." },
    facts: {
      de: ["Mangrovenwälder", "Spektakuläre Sedimentstrukturen", "Wichtiges ökologisches Gebiet", "Gezeitenbeeinflusst"],
      hu: ["Mangroveerdők", "Látványos üledékszerkezetek", "Fontos ökológiai terület", "Árapály befolyásolja"],
      ro: ["Păduri de mangrove", "Structuri sedimentare spectaculoase", "Zonă ecologică importantă", "Influențată de maree"],
      en: ["Mangrove forests", "Spectacular sediment structures", "Important ecological area", "Tide-influenced"]
    }
  },
  {
    id: "lake-anivorano-nature-v2",
    type: "lake",
    parent: "MG-D",
    coords: [49.2, -12.7],
    name: { de: "Anivorano-See", hu: "Anivorano-tó", ro: "Lacul Anivorano", en: "Lake Anivorano" },
    description: { de: "Ein heiliger Kratersee im Norden Madagaskars.", hu: "Szent krátertó Madagaszkár északi részén.", ro: "Un lac crater sacru în nordul Madagascarului.", en: "A sacred crater lake in northern Madagascar." },
    facts: {
      de: ["Legendenumwoben", "Heilige Krokodile", "Kräterrand", "Naturschutzgebiet"],
      hu: ["Legendákkal teli", "Szent krokodilok", "Kráterperem", "Természetvédelmi terület"],
      ro: ["Învăluit în legende", "Crocodili sacri", "Marginea craterului", "Rezervație naturală"],
      en: ["Surrounded by legends", "Sacred crocodiles", "Crater rim", "Nature reserve"]
    }
  },
  {
    id: "nosy-tanikely-nature-v2",
    type: "island",
    parent: "MG-D",
    coords: [48.2, -13.5],
    name: { de: "Nosy Tanikely", hu: "Nosy Tanikely", ro: "Nosy Tanikely", en: "Nosy Tanikely" },
    description: { de: "Ein geschütztes Meeresreservat bei Nosy Be.", hu: "Védett tengeri rezervátum Nosy Be közelében.", ro: "O rezervație marină protejată lângă Nosy Be.", en: "A protected marine reserve near Nosy Be." },
    facts: {
      de: ["Bestes Schnorchelrevier", "Reiches Korallenriff", "Kleine Insel", "Beheimatet Schildkröten"],
      hu: ["Legjobb sznorkelezőhely", "Gazdag korallzátony", "Kis sziget", "Teknősök otthona"],
      ro: ["Cel mai bun loc pentru snorkeling", "Recif de corali bogat", "Insulă mică", "Casă pentru țestoase"],
      en: ["Best snorkeling spot", "Rich coral reef", "Small island", "Home to turtles"]
    }
  },
  {
    id: "massif-des-makay-nature-v2",
    type: "mountain",
    parent: "MG-M",
    coords: [45.1, -21.2],
    name: { de: "Makay-Massiv", hu: "Makay-hegység", ro: "Masivul Makay", en: "Makay Massif" },
    description: { de: "Ein abgelegenes und wildes Gebirgsmassiv im Westen.", hu: "Elszigetelt és vad hegység a nyugaton.", ro: "Un masiv muntos izolat și sălbatic în vest.", en: "A remote and wild mountain massif in the west." },
    facts: {
      de: ["Kaum erforscht", "Tiefe Schluchten", "Endemische Arten", "Abenteuerliche Destination"],
      hu: ["Alig kutatott", "Mély szurdokok", "Endémikus fajok", "Kalandos úti cél"],
      ro: ["Aproape neexplorat", "Canioane adânci", "Specii endemice", "Destinație plină de aventură"],
      en: ["Hardly explored", "Deep canyons", "Endemic species", "Adventurous destination"]
    }
  }
];
