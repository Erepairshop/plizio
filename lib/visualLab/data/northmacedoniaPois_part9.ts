import type { POI } from "./poi";

export const mkPoisPart9: POI[] = [
  // MK-081: Bosilovo
  {
    id: "MK-081-monowheel-wetland",
    type: "nature",
    parent: "MK-081",
    coords: [22.7167, 41.4500],
    name: { de: "Monospitovo-Sumpf", hu: "Monoszpitovói-mocsár", ro: "Mlaștina Monospitovo", en: "Monospitovo Wetland" },
    description: {
      de: "Eines der letzten Sumpfgebiete in Nordmazedonien mit einer reichen Artenvielfalt.",
      hu: "Észak-Macedónia egyik utolsó mocsárvidéke, gazdag élővilággal.",
      ro: "Una dintre ultimele zone mlăștinoase din Macedonia de Nord, cu o biodiversitate bogată.",
      en: "One of the last remaining wetlands in North Macedonia, featuring rich biodiversity."
    },
    facts: {
      de: ["Heimat vieler endemischer Pflanzenarten.", "Ein Paradies für Ornithologen.", "Wichtig für das ökologische Gleichgewicht der Strumica-Region."],
      hu: ["Számos endemikus növényfaj otthona.", "Az ornitológusok paradicsoma.", "Fontos a Sztrumica-régió ökológiai egyensúlya szempontjából."],
      ro: ["Patria multor specii de plante endemice.", "Un paradis pentru ornitologi.", "Important pentru echilibrul ecologic al regiunii Strumica."],
      en: ["Home to many endemic plant species.", "A paradise for ornithologists.", "Crucial for the ecological balance of the Strumica region."]
    }
  },
  {
    id: "MK-081-st-elijah-bosilovo",
    type: "historical",
    parent: "MK-081",
    coords: [22.7333, 41.4333],
    name: { de: "Kirche des hl. Elias - Bosilovo", hu: "Bosilovói Szent Illés-templom", ro: "Biserica Sf. Ilie - Bosilovo", en: "Church of Saint Elijah - Bosilovo" },
    description: {
      de: "Die zentrale orthodoxe Kirche in Bosilovo.",
      hu: "Bosilovo központi ortodox temploma.",
      ro: "Biserica ortodoxă centrală din Bosilovo.",
      en: "The central Orthodox church in Bosilovo."
    },
    facts: {
      de: ["Religiöses Zentrum der Gemeinde.", "Bekannt für seine lokalen Feste.", "Besitzt traditionelle Ikonen."],
      hu: ["A község vallási központja.", "Helyi ünnepeiről ismert.", "Hagyományos ikonokkal rendelkezik."],
      ro: ["Centrul religios al municipalității.", "Cunoscută pentru sărbătorile locale.", "Deține icoane tradiționale."],
      en: ["Religious center of the municipality.", "Known for its local festivals.", "Features traditional icons."]
    }
  },
  // MK-082: Radoviš
  {
    id: "MK-082-holy-trinity-church",
    type: "historical",
    parent: "MK-082",
    coords: [22.5222, 41.6364],
    name: { de: "Kirche der Heiligen Dreifaltigkeit", hu: "Szentháromság-templom", ro: "Biserica Sfânta Treime", en: "Holy Trinity Church" },
    description: {
      de: "Eine moderne und prächtige orthodoxe Kirche in Radoviš, bekannt für ihre reiche Dekoration.",
      hu: "Modern és pompás ortodox templom Radovisban, gazdag díszítéséről ismert.",
      ro: "O biserică ortodoxă modernă și somptuoasă în Radoviš, cunoscută pentru decorațiunile sale bogate.",
      en: "A modern and magnificent Orthodox church in Radoviš, known for its rich decoration."
    },
    facts: {
      de: ["Erbaut im frühen 21. Jahrhundert.", "Eine der schönsten neuen Kirchen im Balkan.", "Im Inneren mit viel Gold und Marmor geschmückt."],
      hu: ["A 21. század elején épült.", "A Balkán egyik legszebb új temploma.", "Belsejét arany és márvány díszíti bőséggel."],
      ro: ["Construită la începutul secolului al XXI-lea.", "Una dintre cele mai frumoase biserici noi din Balcani.", "Interiorul este decorat cu mult aur și marmură."],
      en: ["Built in the early 21st century.", "One of the most beautiful new churches in the Balkans.", "Adorned with plenty of gold and marble inside."]
    }
  },
  {
    id: "MK-082-konce-monastery",
    type: "historical",
    parent: "MK-082",
    coords: [22.3833, 41.5000],
    name: { de: "Kloster Konče", hu: "Končéi kolostor", ro: "Mănăstirea Konče", en: "Konče Monastery" },
    description: {
      de: "Ein mittelalterliches Kloster im Dorf Konče, gewidmet dem hl. Stephan.",
      hu: "Középkori kolostor Konče faluban, Szent Istvánnak szentelve.",
      ro: "O mănăstire medievală în satul Konče, dedicată Sfântului Ștefan.",
      en: "A medieval monastery in the village of Konče, dedicated to Saint Stephen."
    },
    facts: {
      de: ["Gegründet im 14. Jahrhundert.", "Besitzt wertvolle Fresken aus der Entstehungszeit.", "Ein bedeutendes kulturelles Denkmal der Region."],
      hu: ["A 14. században alapították.", "Értékes, az alapítás korából származó freskókkal rendelkezik.", "A régió jelentős kulturális műemléke."],
      ro: ["Fondată în secolul al XIV-lea.", "Deține fresce valoroase din perioada fondării.", "Un monument cultural important al regiunii."],
      en: ["Founded in the 14th century.", "Features valuable frescoes from the time of its creation.", "A significant cultural monument of the region."]
    }
  },
  // MK-083: Vasilevo
  {
    id: "MK-083-vasilevo-fields",
    type: "nature",
    parent: "MK-083",
    coords: [22.6333, 41.4833],
    name: { de: "Felder von Vasilevo", hu: "Vasilevói mezők", ro: "Câmpiile din Vasilevo", en: "Vasilevo Fields" },
    description: {
      de: "Fruchtbare Böden im Strumica-Tal, die die Landwirtschaft der Gemeinde prägen.",
      hu: "Termékeny földek a Sztrumica-völgyben, amelyek meghatározzák a község mezőgazdaságát.",
      ro: "Terenuri fertile în valea Strumica, care modelează agricultura municipalității.",
      en: "Fertile soils in the Strumica valley that characterize the municipality's agriculture."
    },
    facts: {
      de: ["Bekannt für die Produktion von Frühgemüse.", "Wichtig für die regionale Wirtschaft.", "Prägt das grüne Landschaftsbild."],
      hu: ["A korai zöldségfélék termesztéséről ismert.", "Fontos a regionális gazdaság számára.", "Meghatározza a zöld tájképet."],
      ro: ["Cunoscute pentru producția de legume timpurii.", "Importante pentru economia regională.", "Modelează peisajul verde."],
      en: ["Known for the production of early vegetables.", "Significant for the regional economy.", "Shapes the green landscape."]
    }
  },
  {
    id: "MK-083-st-mother-of-god-vasilevo",
    type: "historical",
    parent: "MK-083",
    coords: [22.6500, 41.4750],
    name: { de: "Kirche der hl. Gottesmutter - Vasilevo", hu: "Vasilevói Szent Szűzanya-templom", ro: "Biserica Sf. Născătoare de Dumnezeu - Vasilevo", en: "Church of the Holy Mother of God - Vasilevo" },
    description: {
      de: "Eine bedeutende orthodoxe Kirche im Verwaltungszentrum der Gemeinde.",
      hu: "Jelentős ortodox templom a község közigazgatási központjában.",
      ro: "O biserică ortodoxă importantă în centrul administrativ al municipalității.",
      en: "An important Orthodox church in the administrative center of the municipality."
    },
    facts: {
      de: ["Ein Ort für religiöse Versammlungen.", "Besitzt eine ansprechende Architektur.", "Zentrum der lokalen Kirchengemeinde."],
      hu: ["Vallási gyülekezetek helyszíne.", "Vonzó építészettel rendelkezik.", "A helyi egyházközség központja."],
      ro: ["Un loc pentru adunări religioase.", "Are o arhitectură atractivă.", "Centrul parohiei locale."],
      en: ["A site for religious gatherings.", "Features appealing architecture.", "Center of the local parish."]
    }
  },
  // MK-084: Konče
  {
    id: "MK-084-mantovo-lake",
    type: "lake",
    parent: "MK-084",
    coords: [22.3167, 41.5667],
    name: { de: "Mantovo-See", hu: "Mantovói-tó", ro: "Lacul Mantovo", en: "Mantovo Lake" },
    description: {
      de: "Ein künstlicher See im Lakavica-Tal, beliebt für seine Ruhe und Natur.",
      hu: "Mesterséges tó a Lakavica-völgyben, nyugalmáról és természetéről ismert.",
      ro: "Un lac artificial în valea Lakavica, popular pentru liniștea și natura sa.",
      en: "An artificial lake in the Lakavica valley, popular for its tranquility and nature."
    },
    facts: {
      de: ["Bietet hervorragende Bedingungen zum Angeln und Campen.", "Umgeben von interessanten Felsformationen.", "Ein versteckter Ort für die Erholung."],
      hu: ["Kiváló feltételeket kínál horgászathoz és kempingezéshez.", "Érdekes sziklaképződmények veszik körül.", "Rejtett hely a kikapcsolódásra."],
      ro: ["Oferă condiții excelente pentru pescuit și camping.", "Înconjurat de formațiuni stâncoase interesante.", "Un loc ascuns pentru recreere."],
      en: ["Offers excellent conditions for fishing and camping.", "Surrounded by interesting rock formations.", "A hidden gem for relaxation."]
    }
  },
  {
    id: "MK-084-st-stephen-church-konce",
    type: "historical",
    parent: "MK-084",
    coords: [22.3850, 41.4986],
    name: { de: "Kirche des hl. Stephan - Konče", hu: "Končéi Szent István-templom", ro: "Biserica Sf. Ștefan - Konče", en: "Church of Saint Stephen - Konče" },
    description: {
      de: "Die Hauptkirche des Klosters Konče, ein Denkmal der byzantinischen Kunst.",
      hu: "A končéi kolostor főtemploma, a bizánci művészet emléke.",
      ro: "Biserica principală a mănăstirii Konče, un monument al artei bizantine.",
      en: "The main church of the Konče monastery, a monument of Byzantine art."
    },
    facts: {
      de: ["Bewahrt originale mittelalterliche Fresken.", "Besitzt eine charakteristische Kreuzkuppelstruktur.", "Ein Ort von großer historischer Bedeutung."],
      hu: ["Eredeti középkori freskókat őriz.", "Jellegzetes keresztkupolás szerkezettel rendelkezik.", "Nagy történelmi jelentőségű hely."],
      ro: ["Păstrează fresce medievale originale.", "Are o structură caracteristică cu cupolă în cruce.", "Un loc de o mare importanță istorică."],
      en: ["Preserves original medieval frescoes.", "Features a characteristic cross-in-square structure.", "A site of great historical importance."]
    }
  }
];
