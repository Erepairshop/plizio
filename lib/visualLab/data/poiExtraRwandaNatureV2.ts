import type { POI } from "./poi";

export const poiExtraRwandaNatureV2: POI[] = [
  {
    id: "lake-kivu-nature-v2",
    type: "lake",
    parent: "RW-01",
    coords: [29.25, -2.00],
    name: { de: "Kiwusee", hu: "Kivu-tó", ro: "Lacul Kivu", en: "Lake Kivu" },
    description: { de: "Einer der großen afrikanischen Seen an der Grenze zwischen Ruanda und der Demokratischen Republik Kongo.", hu: "Az egyik nagy afrikai tó Ruanda és a Kongói Demokratikus Köztársaság határán.", ro: "Unul dintre marile lacuri africane de la granița dintre Rwanda și Republica Democratică Congo.", en: "One of the great African lakes on the border between Rwanda and the Democratic Republic of the Congo." },
    facts: {
      de: ["Tiefer See mit Methangas-Reserven.", "Wichtige Lebensgrundlage für die Region."],
      hu: ["Mély tó metángáz-tartalékokkal.", "Fontos megélhetési forrás a régió számára."],
      ro: ["Lac adânc cu rezerve de gaz metan.", "Sursă importantă de subzistență pentru regiune."],
      en: ["Deep lake with methane gas reserves.", "Important source of livelihood for the region."]
    }
  },
  {
    id: "nyungwe-forest-nature-v2",
    type: "forest",
    parent: "RW-05",
    coords: [29.25, -2.48],
    name: { de: "Nyungwe-Wald", hu: "Nyungwe-erdő", ro: "Pădurea Nyungwe", en: "Nyungwe Forest" },
    description: { de: "Eines der ältesten Regenwaldgebiete Afrikas, bekannt für seine Artenvielfalt und Schimpansen.", hu: "Afrika egyik legrégebbi esőerdője, amely biológiai sokféleségéről és csimpánzairól híres.", ro: "Una dintre cele mai vechi zone de pădure tropicală din Africa, cunoscută pentru biodiversitatea și cimpanzeii săi.", en: "One of Africa's oldest rainforest areas, known for its biodiversity and chimpanzees." },
    facts: {
      de: ["Heimat von Schimpansen.", "Großes zusammenhängendes Waldgebiet."],
      hu: ["Csimpánzok otthona.", "Nagy, összefüggő erdőterület."],
      ro: ["Casă pentru cimpanzei.", "Zonă forestieră mare și continuă."],
      en: ["Home to chimpanzees.", "Large, continuous forest area."]
    }
  },
  {
    id: "mount-karisimbi-nature-v2",
    type: "mountain",
    parent: "RW-01",
    coords: [29.45, -1.50],
    name: { de: "Karisimbi-Vulkan", hu: "Karisimbi-vulkán", ro: "Vulcanul Karisimbi", en: "Mount Karisimbi" },
    description: { de: "Der höchste Punkt Ruandas, ein inaktiver Vulkan in den Virunga-Bergen.", hu: "Ruanda legmagasabb pontja, egy inaktív vulkán a Virunga-hegységben.", ro: "Cel mai înalt punct din Rwanda, un vulcan inactiv în Munții Virunga.", en: "The highest point in Rwanda, an inactive volcano in the Virunga Mountains." },
    facts: {
      de: ["4507 Meter über dem Meeresspiegel.", "Teil des Virunga-Nationalparks."],
      hu: ["4507 méter tengerszint feletti magasság.", "A Virunga Nemzeti Park része."],
      ro: ["4507 metri deasupra nivelului mării.", "Parte a Parcului Național Virunga."],
      en: ["4507 meters above sea level.", "Part of the Virunga National Park."]
    }
  },
  {
    id: "akagera-river-nature-v2",
    type: "river",
    parent: "RW-03",
    coords: [30.50, -2.13],
    name: { de: "Akagera-Fluss", hu: "Akagera-folyó", ro: "Râul Akagera", en: "Akagera River" },
    description: { de: "Ein bedeutender Nebenfluss des Nils, der durch den Akagera-Nationalpark fließt.", hu: "A Nílus jelentős mellékfolyója, amely az Akagera Nemzeti Parkon keresztül folyik.", ro: "Un afluent important al Nilului care curge prin Parcul Național Akagera.", en: "A significant tributary of the Nile that flows through the Akagera National Park." },
    facts: {
      de: ["Fließt durch Feuchtgebiete.", "Wichtige Wasserquelle."],
      hu: ["Vizes területeken folyik át.", "Fontos vízforrás."],
      ro: ["Curge prin zone umede.", "Sursă importantă de apă."],
      en: ["Flows through wetlands.", "Important source of water."]
    }
  },
  {
    id: "lake-burera-nature-v2",
    type: "lake",
    parent: "RW-01",
    coords: [29.75, -1.41],
    name: { de: "Burera-See", hu: "Burera-tó", ro: "Lacul Burera", en: "Lake Burera" },
    description: { de: "Ein malerischer See in der Nähe der Virunga-Vulkane.", hu: "Festői tó a Virunga-vulkánok közelében.", ro: "Un lac pitoresc în apropierea vulcanilor Virunga.", en: "A picturesque lake near the Virunga volcanoes." },
    facts: {
      de: ["Umgeben von vulkanischen Hügeln.", "Tiefer Kratersee."],
      hu: ["Vulkáni dombok veszik körül.", "Mély krátertó."],
      ro: ["Înconjurat de dealuri vulcanice.", "Lac crater adânc."],
      en: ["Surrounded by volcanic hills.", "Deep crater lake."]
    }
  },
  {
    id: "lake-ruhondo-nature-v2",
    type: "lake",
    parent: "RW-01",
    coords: [29.75, -1.48],
    name: { de: "Ruhondo-See", hu: "Ruhondo-tó", ro: "Lacul Ruhondo", en: "Lake Ruhondo" },
    description: { de: "Zwillingssee des Burera-Sees, bekannt für seine ruhige Natur.", hu: "A Burera-tó ikertava, híres nyugodt természetéről.", ro: "Lacul geamăn al lacului Burera, cunoscut pentru natura sa liniștită.", en: "Twin lake to Lake Burera, known for its peaceful nature." },
    facts: {
      de: ["Beliebt für Vogelbeobachtungen.", "Sehr klare Gewässer."],
      hu: ["Népszerű madármegfigyelő hely.", "Nagyon tiszta vizek."],
      ro: ["Popular pentru observarea păsărilor.", "Ape foarte clare."],
      en: ["Popular for bird watching.", "Very clear waters."]
    }
  },
  {
    id: "mount-bisoke-nature-v2",
    type: "mountain",
    parent: "RW-01",
    coords: [29.48, -1.46],
    name: { de: "Bisoke-Vulkan", hu: "Bisoke-vulkán", ro: "Vulcanul Bisoke", en: "Mount Bisoke" },
    description: { de: "Ein aktiver Vulkan in der Nähe der Grenze, bekannt für seinen Kratersee.", hu: "Aktív vulkán a határ közelében, amely krátertaváról ismert.", ro: "Un vulcan activ în apropierea graniței, cunoscut pentru lacul său din crater.", en: "An active volcano near the border, known for its crater lake." },
    facts: {
      de: ["Hat einen schönen Kratersee auf dem Gipfel.", "Dichte Vegetation."],
      hu: ["Gyönyörű krátertó van a csúcsán.", "Sűrű növényzet."],
      ro: ["Are un lac crater frumos pe vârf.", "Vegetație densă."],
      en: ["Has a beautiful crater lake on the summit.", "Dense vegetation."]
    }
  },
  {
    id: "mount-muhabura-nature-v2",
    type: "mountain",
    parent: "RW-01",
    coords: [29.68, -1.38],
    name: { de: "Muhabura-Vulkan", hu: "Muhabura-vulkán", ro: "Vulcanul Muhabura", en: "Mount Muhabura" },
    description: { de: "Ein erloschener Vulkan in den Virunga-Bergen, auch 'Der Wegweiser' genannt.", hu: "Kialudt vulkán a Virunga-hegységben, amelyet 'Az útmutató'-nak is neveznek.", ro: "Un vulcan stins în Munții Virunga, numit și 'Indicatorul'.", en: "An extinct volcano in the Virunga Mountains, also called 'The Guide'." },
    facts: {
      de: ["Markantes Wahrzeichen der Region.", "Steiler Aufstieg."],
      hu: ["A régió jellegzetes mérföldköve.", "Meredek emelkedő."],
      ro: ["Un punct de reper distinctiv al regiunii.", "Ascensiune abruptă."],
      en: ["Distinctive landmark of the region.", "Steep climb."]
    }
  },
  {
    id: "mount-gahinga-nature-v2",
    type: "mountain",
    parent: "RW-01",
    coords: [29.65, -1.39],
    name: { de: "Gahinga-Vulkan", hu: "Gahinga-vulkán", ro: "Vulcanul Gahinga", en: "Mount Gahinga" },
    description: { de: "Ein kleinerer Vulkan in der Virunga-Kette, bekannt für seine Moorlandschaften.", hu: "Kisebb vulkán a Virunga-láncban, amely lápvidékeiről ismert.", ro: "Un vulcan mai mic din lanțul Virunga, cunoscut pentru peisajele sale de mlaștină.", en: "A smaller volcano in the Virunga chain, known for its moorland landscapes." },
    facts: {
      de: ["Beheimatet seltene Pflanzen.", "Sanftere Hänge."],
      hu: ["Ritka növények otthona.", "Szelídebb lejtők."],
      ro: ["Casă pentru plante rare.", "Pante mai line."],
      en: ["Home to rare plants.", "Gentler slopes."]
    }
  },
  {
    id: "mount-sabyinyo-nature-v2",
    type: "mountain",
    parent: "RW-01",
    coords: [29.58, -1.41],
    name: { de: "Sabyinyo-Vulkan", hu: "Sabyinyo-vulkán", ro: "Vulcanul Sabyinyo", en: "Mount Sabyinyo" },
    description: { de: "Ein alter, zerklüfteter Vulkan, dessen Name 'Zähne des alten Mannes' bedeutet.", hu: "Régi, tagolt vulkán, amelynek neve 'Az öregember fogai'-t jelent.", ro: "Un vulcan vechi și zimțat, al cărui nume înseamnă 'Dinții bătrânului'.", en: "An old, rugged volcano whose name means 'Old man's teeth'." },
    facts: {
      de: ["Dreiländereck (Ruanda, Uganda, DR Kongo).", "Sehr steil."],
      hu: ["Hármashatár (Ruanda, Uganda, Kongói DK).", "Nagyon meredek."],
      ro: ["Punct triplu de frontieră (Rwanda, Uganda, RD Congo).", "Foarte abrupt."],
      en: ["Tri-border point (Rwanda, Uganda, DR Congo).", "Very steep."]
    }
  },
  {
    id: "akagera-national-park-nature-v2",
    type: "forest",
    parent: "RW-03",
    coords: [30.70, -1.90],
    name: { de: "Akagera-Park", hu: "Akagera Nemzeti Park", ro: "Parcul Național Akagera", en: "Akagera National Park" },
    description: { de: "Ein Schutzgebiet, das Savannen, Wälder und Feuchtgebiete vereint.", hu: "Védett terület, amely egyesíti a szavannákat, erdőket és vizes élőhelyeket.", ro: "O arie protejată care combină savanele, pădurile și zonele umede.", en: "A protected area that combines savannas, forests, and wetlands." },
    facts: {
      de: ["Reiche Wildtierpopulation.", "Vielfältiges Ökosystem."],
      hu: ["Gazdag vadvilág.", "Változatos ökoszisztéma."],
      ro: ["Populație bogată de animale sălbatice.", "Ecosistem diversificat."],
      en: ["Rich wildlife population.", "Diverse ecosystem."]
    }
  },
  {
    id: "gishwati-mukura-nature-v2",
    type: "forest",
    parent: "RW-01",
    coords: [29.35, -1.82],
    name: { de: "Gishwati-Mukura-Wald", hu: "Gishwati-Mukura-erdő", ro: "Pădurea Gishwati-Mukura", en: "Gishwati-Mukura Forest" },
    description: { de: "Ein wiederaufgeforstetes Gebiet, das als Biosphärenreservat anerkannt ist.", hu: "Újraerdősített terület, amelyet bioszféra-rezervátumként ismertek el.", ro: "O zonă reîmpădurită, recunoscută ca rezervație a biosferei.", en: "A reforested area recognized as a biosphere reserve." },
    facts: {
      de: ["Schutz für endemische Arten.", "Erfolgreiches Wiederaufforstungsprojekt."],
      hu: ["Védelem az endemikus fajok számára.", "Sikeres újraerdősítési projekt."],
      ro: ["Protecție pentru speciile endemice.", "Proiect de reîmpădurire de succes."],
      en: ["Protection for endemic species.", "Successful reforestation project."]
    }
  },
  {
    id: "rweru-lake-nature-v2",
    type: "lake",
    parent: "RW-03",
    coords: [30.28, -2.33],
    name: { de: "Rweru-See", hu: "Rweru-tó", ro: "Lacul Rweru", en: "Lake Rweru" },
    description: { de: "Ein See im Südosten Ruandas, wichtig für die lokale Fischerei.", hu: "Tó Ruanda délkeleti részén, fontos a helyi halászat számára.", ro: "Un lac în sud-estul Rwandei, important pentru pescuitul local.", en: "A lake in southeastern Rwanda, important for local fishing." },
    facts: {
      de: ["Liegt an der Grenze zu Burundi.", "Wichtige Nahrungsquelle."],
      hu: ["Burundi határán fekszik.", "Fontos táplálékforrás."],
      ro: ["Situat la granița cu Burundi.", "Sursă importantă de hrană."],
      en: ["Located on the border with Burundi.", "Important source of food."]
    }
  },
  {
    id: "cyamudongo-forest-nature-v2",
    type: "forest",
    parent: "RW-05",
    coords: [29.00, -2.53],
    name: { de: "Cyamudongo-Wald", hu: "Cyamudongo-erdő", ro: "Pădurea Cyamudongo", en: "Cyamudongo Forest" },
    description: { de: "Ein isoliertes Waldfragment, Teil des größeren Nyungwe-Ökosystems.", hu: "Elszigetelt erdőfolt, a nagyobb Nyungwe-ökoszisztéma része.", ro: "Un fragment de pădure izolat, parte a ecosistemului mai larg Nyungwe.", en: "An isolated forest fragment, part of the larger Nyungwe ecosystem." },
    facts: {
      de: ["Wichtig für Schimpansenpopulationen.", "Einzigartige Flora."],
      hu: ["Fontos a csimpánzpopulációk számára.", "Egyedülálló flóra."],
      ro: ["Important pentru populațiile de cimpanzei.", "Floră unică."],
      en: ["Important for chimpanzee populations.", "Unique flora."]
    }
  },
  {
    id: "mukura-forest-nature-v2",
    type: "forest",
    parent: "RW-01",
    coords: [29.53, -1.72],
    name: { de: "Mukura-Wald", hu: "Mukura-erdő", ro: "Pădurea Mukura", en: "Mukura Forest" },
    description: { de: "Ein Bergwaldgebiet, bekannt für seine hohe Biodiversität.", hu: "Hegyi erdőterület, amely magas biológiai sokféleségéről ismert.", ro: "O zonă de pădure montană, cunoscută pentru biodiversitatea sa ridicată.", en: "A mountain forest area, known for its high biodiversity." },
    facts: {
      de: ["Beheimatet viele seltene Vögel.", "Hochgelegenes Ökosystem."],
      hu: ["Sok ritka madár otthona.", "Magasan fekvő ökoszisztéma."],
      ro: ["Casă pentru multe păsări rare.", "Ecosistem de altitudine."],
      en: ["Home to many rare birds.", "High-altitude ecosystem."]
    }
  },
  {
    id: "nyabarongo-river-nature-v2",
    type: "river",
    parent: "RW-04",
    coords: [29.98, -2.25],
    name: { de: "Nyabarongo-Fluss", hu: "Nyabarongo-folyó", ro: "Râul Nyabarongo", en: "Nyabarongo River" },
    description: { de: "Der längste Fluss in Ruanda, ein Hauptzufluss des Akagera.", hu: "Ruanda leghosszabb folyója, az Akagera fő mellékfolyója.", ro: "Cel mai lung râu din Rwanda, un afluent principal al Akagerei.", en: "The longest river in Rwanda, a main tributary of the Akagera." },
    facts: {
      de: ["Entwässert den Großteil Ruandas.", "Wichtige Verkehrsader für das Land."],
      hu: ["Ruanda nagy részét lecsapolja.", "Fontos közlekedési útvonal az ország számára."],
      ro: ["Drenează cea mai mare parte a Rwandei.", "Importantă arteră de transport pentru țară."],
      en: ["Drains the majority of Rwanda.", "Important transport route for the country."]
    }
  },
  {
    id: "lake-ihema-nature-v2",
    type: "lake",
    parent: "RW-03",
    coords: [30.73, -1.91],
    name: { de: "Ihema-See", hu: "Ihema-tó", ro: "Lacul Ihema", en: "Lake Ihema" },
    description: { de: "Der größte See im Akagera-Nationalpark, bekannt für seine reiche Tierwelt.", hu: "Az Akagera Nemzeti Park legnagyobb tava, gazdag vadvilágáról ismert.", ro: "Cel mai mare lac din Parcul Național Akagera, cunoscut pentru fauna sa bogată.", en: "The largest lake in Akagera National Park, known for its rich wildlife." },
    facts: {
      de: ["Beheimatet Flusspferde und Krokodile.", "Wichtiger Lebensraum."],
      hu: ["Vízilovak és krokodilok otthona.", "Fontos élőhely."],
      ro: ["Casă pentru hipopotami și crocodili.", "Habitat important."],
      en: ["Home to hippos and crocodiles.", "Important habitat."]
    }
  },
  {
    id: "mukungwa-river-nature-v2",
    type: "river",
    parent: "RW-01",
    coords: [29.65, -1.55],
    name: { de: "Mukungwa-Fluss", hu: "Mukungwa-folyó", ro: "Râul Mukungwa", en: "Mukungwa River" },
    description: { de: "Ein wichtiger Fluss, der aus den Burera- und Ruhondo-Seen entspringt.", hu: "Fontos folyó, amely a Burera- és Ruhondo-tavakból ered.", ro: "Un râu important care izvorăște din lacurile Burera și Ruhondo.", en: "An important river that originates from Lake Burera and Lake Ruhondo." },
    facts: {
      de: ["Dient der Stromerzeugung.", "Klares Gebirgswasser."],
      hu: ["Áramtermelésre használják.", "Tiszta hegyi víz."],
      ro: ["Folosit pentru generarea de energie.", "Apă de munte clară."],
      en: ["Used for power generation.", "Clear mountain water."]
    }
  },
  {
    id: "rurubu-river-nature-v2",
    type: "river",
    parent: "RW-03",
    coords: [30.35, -2.45],
    name: { de: "Rurubu-Fluss", hu: "Rurubu-folyó", ro: "Râul Rurubu", en: "Rurubu River" },
    description: { de: "Ein bedeutender Fluss, der durch den Südosten Ruandas fließt.", hu: "Jelentős folyó, amely Ruanda délkeleti részén folyik át.", ro: "Un râu semnificativ care curge prin sud-estul Rwandei.", en: "A significant river that flows through southeastern Rwanda." },
    facts: {
      de: ["Fließt in Richtung Burundi.", "Reiches Flussökosystem."],
      hu: ["Burundi felé folyik.", "Gazdag folyóökoszisztéma."],
      ro: ["Curge spre Burundi.", "Ecosistem fluvial bogat."],
      en: ["Flows towards Burundi.", "Rich river ecosystem."]
    }
  },
  {
    id: "lake-mugesera-nature-v2",
    type: "lake",
    parent: "RW-04",
    coords: [30.25, -2.25],
    name: { de: "Mugesera-See", hu: "Mugesera-tó", ro: "Lacul Mugesera", en: "Lake Mugesera" },
    description: { de: "Ein flacher See im Südosten, bekannt für seine Feuchtgebiete.", hu: "Sekély tó a délkeleti részen, amely vizes élőhelyeiről ismert.", ro: "Un lac puțin adânc în sud-est, cunoscut pentru zonele sale umede.", en: "A shallow lake in the southeast, known for its wetlands." },
    facts: {
      de: ["Vogelbeobachtungsgebiet.", "Wichtige Brutstätte."],
      hu: ["Madármegfigyelő terület.", "Fontos költőhely."],
      ro: ["Zonă de observare a păsărilor.", "Loc de cuibărit important."],
      en: ["Bird watching area.", "Important breeding ground."]
    }
  },
  {
    id: "lake-cyohoha-nature-v2",
    type: "lake",
    parent: "RW-04",
    coords: [30.15, -2.33],
    name: { de: "Cyohoha-See", hu: "Cyohoha-tó", ro: "Lacul Cyohoha", en: "Lake Cyohoha" },
    description: { de: "Ein See an der Grenze zu Burundi, umgeben von Sumpflandschaften.", hu: "Tó Burundi határán, mocsaras tájak veszik körül.", ro: "Un lac la granița cu Burundi, înconjurat de peisaje mlăștinoase.", en: "A lake on the border with Burundi, surrounded by swamp landscapes." },
    facts: {
      de: ["Naturschutzgebiet.", "Reiche Flora."],
      hu: ["Természetvédelmi terület.", "Gazdag flóra."],
      ro: ["Arie protejată.", "Floră bogată."],
      en: ["Nature reserve.", "Rich flora."]
    }
  },
  {
    id: "mount-kalisimbi-summit-nature-v2",
    type: "mountain",
    parent: "RW-01",
    coords: [29.45, -1.50],
    name: { de: "Kalisimbi-Gipfel", hu: "Kalisimbi-csúcs", ro: "Vârful Kalisimbi", en: "Kalisimbi Summit" },
    description: { de: "Der höchste Bereich des Karisimbi-Vulkans, oft nebelverhangen.", hu: "A Karisimbi-vulkán legmagasabb része, gyakran ködös.", ro: "Cea mai înaltă zonă a vulcanului Karisimbi, adesea acoperită de ceață.", en: "The highest area of Mount Karisimbi, often shrouded in mist." },
    facts: {
      de: ["Oft kühle Temperaturen.", "Einzigartige Hochgebirgsvegetation."],
      hu: ["Gyakran hűvös hőmérséklet.", "Egyedülálló magashegyi növényzet."],
      ro: ["Temperaturi adesea scăzute.", "Vegetație montană unică."],
      en: ["Often cool temperatures.", "Unique high-mountain vegetation."]
    }
  },
  {
    id: "lake-kivu-north-nature-v2",
    type: "lake",
    parent: "RW-01",
    coords: [29.28, -1.75],
    name: { de: "Nord-Kivusee", hu: "Északi-Kivu-tó", ro: "Lacul Kivu de Nord", en: "North Lake Kivu" },
    description: { de: "Der nördliche Teil des Kivu-Sees, nahe der Vulkane.", hu: "A Kivu-tó északi része, a vulkánok közelében.", ro: "Partea de nord a lacului Kivu, în apropierea vulcanilor.", en: "The northern part of Lake Kivu, near the volcanoes." },
    facts: {
      de: ["Vulkanische Umgebung.", "Sehr tiefe Gewässer."],
      hu: ["Vulkáni környezet.", "Nagyon mély vizek."],
      ro: ["Ambient vulcanic.", "Ape foarte adânci."],
      en: ["Volcanic environment.", "Very deep waters."]
    }
  },
  {
    id: "akagera-wetlands-nature-v2",
    type: "lake",
    parent: "RW-03",
    coords: [30.65, -2.00],
    name: { de: "Akagera-Feuchtgebiete", hu: "Akagera-vizes élőhelyek", ro: "Zonele umede Akagera", en: "Akagera Wetlands" },
    description: { de: "Ein umfangreiches Sumpf- und Feuchtgebiet entlang des Flusses Akagera.", hu: "Kiterjedt mocsaras és vizes élőhely az Akagera-folyó mentén.", ro: "O zonă extinsă de mlaștină și zone umede de-a lungul râului Akagera.", en: "An extensive swamp and wetland area along the Akagera River." },
    facts: {
      de: ["Wichtig für den Vogelschutz.", "Lebensraum für seltene Amphibien."],
      hu: ["Fontos a madárvédelem számára.", "Ritka kétéltűek élőhelye."],
      ro: ["Important pentru protecția păsărilor.", "Habitat pentru amfibieni rari."],
      en: ["Important for bird protection.", "Habitat for rare amphibians."]
    }
  },
  {
    id: "mount-hiyaga-nature-v2",
    type: "mountain",
    parent: "RW-01",
    coords: [29.80, -1.65],
    name: { de: "Hiyaga-Berg", hu: "Hiyaga-hegy", ro: "Muntele Hiyaga", en: "Mount Hiyaga" },
    description: { de: "Ein markanter Berg in der nördlichen Provinz Ruandas.", hu: "Jellegzetes hegy Ruanda északi tartományában.", ro: "Un munte distinctiv în provincia de nord a Rwandei.", en: "A distinctive mountain in the northern province of Rwanda." },
    facts: {
      de: ["Aussichtspunkt.", "Vulkanisches Gestein."],
      hu: ["Kilátópont.", "Vulkáni kőzet."],
      ro: ["Punct de belvedere.", "Rocă vulcanică."],
      en: ["Viewing point.", "Volcanic rock."]
    }
  },
  {
    id: "lake-kivu-shores-nature-v2",
    type: "lake",
    parent: "RW-01",
    coords: [29.23, -2.25],
    name: { de: "Kivusee-Küste", hu: "Kivu-tó partvidéke", ro: "Țărmurile lacului Kivu", en: "Lake Kivu Shores" },
    description: { de: "Die abwechslungsreiche Uferlinie des Kivu-Sees.", hu: "A Kivu-tó változatos partvonala.", ro: "Linia țărmului variată a lacului Kivu.", en: "The varied shoreline of Lake Kivu." },
    facts: {
      de: ["Sandige Buchten.", "Umgeben von Kaffeeplantagen."],
      hu: ["Homokos öblök.", "Kávéültetvények veszik körül."],
      ro: ["Golfuri nisipoase.", "Înconjurat de plantații de cafea."],
      en: ["Sandy bays.", "Surrounded by coffee plantations."]
    }
  },
  {
    id: "bugarama-hot-springs-nature-v2",
    type: "river",
    parent: "RW-05",
    coords: [29.02, -2.65],
    name: { de: "Bugarama-Heiße-Quellen", hu: "Bugarama hévízforrások", ro: "Izvoarele termale Bugarama", en: "Bugarama Hot Springs" },
    description: { de: "Natürliche heiße Quellen in der südwestlichen Region Ruandas.", hu: "Természetes hévízforrások Ruanda délnyugati részén.", ro: "Izvoare termale naturale în regiunea de sud-vest a Rwandei.", en: "Natural hot springs in the southwestern region of Rwanda." },
    facts: {
      de: ["Geothermische Aktivität.", "Beliebt für Wellness."],
      hu: ["Geotermikus tevékenység.", "Népszerű wellness célpont."],
      ro: ["Activitate geotermală.", "Popular pentru wellness."],
      en: ["Geothermal activity.", "Popular for wellness."]
    }
  },
  {
    id: "kigali-hills-nature-v2",
    type: "mountain",
    parent: "RW-04",
    coords: [30.06, -1.95],
    name: { de: "Kigali-Hügel", hu: "Kigali-dombok", ro: "Dealurile Kigali", en: "Kigali Hills" },
    description: { de: "Die sanften Hügelketten, auf denen die Hauptstadt Kigali liegt.", hu: "Szelíd dombságok, amelyeken Kigali fővárosa fekszik.", ro: "Lanțurile de dealuri line pe care se află capitala Kigali.", en: "The gentle hill chains upon which the capital, Kigali, lies." },
    facts: {
      de: ["Grüne Landschaften.", "Bieten Panoramablicke."],
      hu: ["Zöld tájak.", "Panorámás kilátást nyújtanak."],
      ro: ["Peisaje verzi.", "Oferă vederi panoramice."],
      en: ["Green landscapes.", "Offer panoramic views."]
    }
  },
  {
    id: "akanyaru-river-nature-v2",
    type: "river",
    parent: "RW-04",
    coords: [30.00, -2.41],
    name: { de: "Akanyaru-Fluss", hu: "Akanyaru-folyó", ro: "Râul Akanyaru", en: "Akanyaru River" },
    description: { de: "Ein Grenzfluss zwischen Ruanda und Burundi, Teil eines großen Feuchtgebiets.", hu: "Határfolyó Ruanda és Burundi között, egy nagy vizes élőhely része.", ro: "Un râu de graniță între Rwanda și Burundi, parte a unei mari zone umede.", en: "A border river between Rwanda and Burundi, part of a large wetland." },
    facts: {
      de: ["Sumpfgebiete am Ufer.", "Wichtige Lebensraum-Verbindung."],
      hu: ["Mocsaras területek a parton.", "Fontos élőhely-összeköttetés."],
      ro: ["Zone mlăștinoase pe mal.", "Conexiune importantă a habitatelor."],
      en: ["Swamp areas on the bank.", "Important habitat connection."]
    }
  },
  {
    id: "karongi-shores-nature-v2",
    type: "lake",
    parent: "RW-01",
    coords: [29.33, -2.05],
    name: { de: "Karongi-Küste", hu: "Karongi partvidéke", ro: "Țărmurile Karongi", en: "Karongi Shores" },
    description: { de: "Ein besonders schöner Küstenabschnitt am Kivu-See.", hu: "Különösen szép partvidék a Kivu-tónál.", ro: "O secțiune de coastă deosebit de frumoasă a lacului Kivu.", en: "A particularly beautiful section of the coast on Lake Kivu." },
    facts: {
      de: ["Blick auf kleine Inseln.", "Ruhiges Wasser."],
      hu: ["Kilátás kis szigetekre.", "Nyugodt víz."],
      ro: ["Vedere spre insule mici.", "Apă calmă."],
      en: ["View of small islands.", "Calm water."]
      }
  }
];
