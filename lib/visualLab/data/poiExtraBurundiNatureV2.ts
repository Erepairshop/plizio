import type { POI } from "./poi";

export const poiExtraBurundiNatureV2: POI[] = [
  {
    id: "tanganyika-lake-nature-v2",
    type: "lake",
    parent: "BI-RM",
    coords: [29.5, -3.5],
    name: {
      de: "Tanganjikasee",
      hu: "Tanganyika-tó",
      ro: "Lacul Tanganyika",
      en: "Lake Tanganyika"
    },
    description: {
      de: "Einer der tiefsten und ältesten Seen der Welt, der die westliche Grenze Burundis bildet.",
      hu: "A világ egyik legmélyebb és legősibb tava, amely Burundi nyugati határát alkotja.",
      ro: "Unul dintre cele mai adânci și mai vechi lacuri din lume, care formează granița de vest a Burundi.",
      en: "One of the deepest and oldest lakes in the world, forming Burundi's western border."
    },
    facts: {
      de: ["Zweitgrößter Süßwassersee.", "Heimat vieler endemischer Fische."],
      hu: ["A második legnagyobb édesvízű tó.", "Számos endemikus halfaj otthona."],
      ro: ["Al doilea ca mărime lac de apă dulce.", "Găzduiește mulți pești endemici."],
      en: ["Second largest freshwater lake.", "Home to many endemic fish species."]
    }
  },
  {
    id: "ruzizi-river-nature-v2",
    type: "river",
    parent: "BI-BM",
    coords: [29.23, -3.3],
    name: {
      de: "Ruzizi-Fluss",
      hu: "Ruzizi-folyó",
      ro: "Râul Ruzizi",
      en: "Ruzizi River"
    },
    description: {
      de: "Ein Fluss, der vom Kivusee zum Tanganjikasee fließt und als Grenze dient.",
      hu: "A Kivu-tóból a Tanganyika-tóba folyó folyó, amely határként is szolgál.",
      ro: "Un râu care curge de la Lacul Kivu la Lacul Tanganyika și servește drept graniță.",
      en: "A river flowing from Lake Kivu to Lake Tanganyika, serving as a border."
    },
    facts: {
      de: ["Berühmt für Flusspferde.", "Wichtige Energiequelle."],
      hu: ["Híres a vízilovairól.", "Fontos energiaforrás."],
      ro: ["Celebru pentru hipopotami.", "Sursă importantă de energie."],
      en: ["Famous for hippos.", "Important source of energy."]
    }
  },
  {
    id: "kibira-forest-nature-v2",
    type: "forest",
    parent: "BI-MU",
    coords: [29.5, -3.1],
    name: {
      de: "Kibira-Nationalpark",
      hu: "Kibira Nemzeti Park",
      ro: "Parcul Național Kibira",
      en: "Kibira National Park"
    },
    description: {
      de: "Ein riesiger Bergregenwald, der eine reiche Artenvielfalt beherbergt.",
      hu: "Hatalmas hegyi esőerdő, amely gazdag biológiai sokféleségnek ad otthont.",
      ro: "O pădure tropicală montană uriașă care adăpostește o biodiversitate bogată.",
      en: "A vast montane rainforest hosting a rich biodiversity."
    },
    facts: {
      de: ["Heimat von Schimpansen.", "Wichtiges Wassereinzugsgebiet."],
      hu: ["Csimpánzok otthona.", "Fontos vízgyűjtő terület."],
      ro: ["Casa cimpanzeilor.", "Zonă importantă de captare a apei."],
      en: ["Home to chimpanzees.", "Important water catchment area."]
    }
  },
  {
    id: "ruvubu-river-nature-v2",
    type: "river",
    parent: "BI-KR",
    coords: [30.3, -3.1],
    name: {
      de: "Ruvubu-Fluss",
      hu: "Ruvubu-folyó",
      ro: "Râul Ruvubu",
      en: "Ruvubu River"
    },
    description: {
      de: "Der längste Fluss Burundis, der durch den gleichnamigen Nationalpark fließt.",
      hu: "Burundi leghosszabb folyója, amely az azonos nevű nemzeti parkon folyik keresztül.",
      ro: "Cel mai lung râu din Burundi, care curge prin parcul național cu același nume.",
      en: "The longest river in Burundi, flowing through the national park of the same name."
    },
    facts: {
      de: ["Teil des Nil-Beckens.", "Reich an Krokodilen."],
      hu: ["A Nílus-medence része.", "Gazdag krokodilokban."],
      ro: ["Parte a bazinului Nilului.", "Bogat în crocodili."],
      en: ["Part of the Nile basin.", "Rich in crocodiles."]
    }
  },
  {
    id: "heha-mountain-nature-v2",
    type: "mountain",
    parent: "BI-BL",
    coords: [29.5, -3.6],
    name: {
      de: "Berg Heha",
      hu: "Heha-hegy",
      ro: "Muntele Heha",
      en: "Mount Heha"
    },
    description: {
      de: "Der höchste Gipfel Burundis, der spektakuläre Aussichten bietet.",
      hu: "Burundi legmagasabb csúcsa, amely látványos kilátást nyújt.",
      ro: "Cel mai înalt vârf din Burundi, oferind priveliști spectaculoase.",
      en: "The highest peak in Burundi, offering spectacular views."
    },
    facts: {
      de: ["2.684 Meter hoch.", "Teil des Nil-Kongo-Kamms."],
      hu: ["2684 méter magas.", "A Nílus-Kongó vízválasztó része."],
      ro: ["2.684 metri înălțime.", "Parte a crestei Nil-Congo."],
      en: ["2,684 meters high.", "Part of the Nile-Congo crest."]
    }
  },
  {
    id: "kagera-river-nature-v2",
    type: "river",
    parent: "BI-MU",
    coords: [30.5, -2.4],
    name: {
      de: "Kagera-Fluss",
      hu: "Kagera-folyó",
      ro: "Râul Kagera",
      en: "Kagera River"
    },
    description: {
      de: "Ein wichtiger Zufluss des Viktoriasees im Nordosten Burundis.",
      hu: "A Viktória-tó fontos mellékfolyója Burundi északkeleti részén.",
      ro: "Un afluent important al Lacului Victoria în nord-estul Burundi.",
      en: "An important tributary of Lake Victoria in northeastern Burundi."
    },
    facts: {
      de: ["Bildet die Grenze zu Ruanda.", "Fernste Nilquelle."],
      hu: ["Határt alkot Ruandával.", "A Nílus legtávolabbi forrása."],
      ro: ["Formează granița cu Rwanda.", "Cea mai îndepărtată sursă a Nilului."],
      en: ["Forms the border with Rwanda.", "Remotest source of the Nile."]
    }
  },
  {
    id: "cohoha-lake-nature-v2",
    type: "lake",
    parent: "BI-KI",
    coords: [30.1, -2.4],
    name: {
      de: "Cohohasee",
      hu: "Cohoha-tó",
      ro: "Lacul Cohoha",
      en: "Lake Cohoha"
    },
    description: {
      de: "Ein schöner See im Norden an der Grenze zwischen Burundi und Ruanda.",
      hu: "Gyönyörű tó északon, a Burundi és Ruanda közötti határon.",
      ro: "Un lac frumos în nord, la granița dintre Burundi și Rwanda.",
      en: "A beautiful lake in the north on the border between Burundi and Rwanda."
    },
    facts: {
      de: ["Wichtig für den Fischfang.", "Vogelbeobachtungsort."],
      hu: ["Fontos a halászat számára.", "Madármegfigyelő hely."],
      ro: ["Important pentru pescuit.", "Loc de observare a păsărilor."],
      en: ["Important for fishing.", "Bird watching spot."]
    }
  },
  {
    id: "rweru-lake-nature-v2",
    type: "lake",
    parent: "BI-KI",
    coords: [30.2, -2.4],
    name: {
      de: "Rwerusee",
      hu: "Rweru-tó",
      ro: "Lacul Rweru",
      en: "Lake Rweru"
    },
    description: {
      de: "Ein See im Norden Burundis, bekannt für seine Sumpflandschaften.",
      hu: "Tó Burundi északi részén, amely mocsaras tájairól ismert.",
      ro: "Un lac din nordul Burundi, cunoscut pentru peisajele sale mlaștinoase.",
      en: "A lake in northern Burundi, known for its marshy landscapes."
    },
    facts: {
      de: ["Südlichster Punkt des Nils.", "Reiche Avifauna."],
      hu: ["A Nílus legdélebbi pontja.", "Gazdag madárvilág."],
      ro: ["Cel mai sudic punct al Nilului.", "Avifaună bogată."],
      en: ["Southernmost point of the Nile.", "Rich avifauna."]
    }
  },
  {
    id: "karera-falls-nature-v2",
    type: "river",
    parent: "BI-RT",
    coords: [30.0, -3.8],
    name: {
      de: "Karera-Wasserfälle",
      hu: "Karera-vízesések",
      ro: "Cascadele Karera",
      en: "Karera Waterfalls"
    },
    description: {
      de: "Eine Serie von malerischen Wasserfällen inmitten üppiger Vegetation.",
      hu: "Gondosan elhelyezkedő festői vízesések sorozata buja növényzet közepette.",
      ro: "O serie de cascade pitorești în mijlocul vegetației luxuriante.",
      en: "A series of picturesque waterfalls amidst lush vegetation."
    },
    facts: {
      de: ["Besteht aus vier Fällen.", "Heiliger Ort für Einheimische."],
      hu: ["Négy vízesésből áll.", "Szent hely a helyiek számára."],
      ro: ["Constă din patru căderi.", "Loc sfânt pentru localnici."],
      en: ["Consists of four falls.", "Sacred site for locals."]
    }
  },
  {
    id: "nile-source-nature-v2",
    type: "river",
    parent: "BI-RT",
    coords: [29.8, -3.9],
    name: {
      de: "Quelle des Nils",
      hu: "A Nílus forrása",
      ro: "Izvorul Nilului",
      en: "Source of the Nile"
    },
    description: {
      de: "Der südlichste Punkt, der als Quelle des mächtigen Nil-Flusses gilt.",
      hu: "A hatalmas Nílus-folyó forrásának tartott legdélebbi pont.",
      ro: "Cel mai sudic punct considerat izvorul puternicului râu Nil.",
      en: "The southernmost point considered the source of the mighty Nile River."
    },
    facts: {
      de: ["In der Nähe von Rutana.", "Durch eine Pyramide markiert."],
      hu: ["Rutana közelében.", "Piramis jelöli."],
      ro: ["Lângă Rutana.", "Marcat de o piramidă."],
      en: ["Near Rutana.", "Marked by a pyramid."]
    }
  },
  {
    id: "vyanda-forest-nature-v2",
    type: "forest",
    parent: "BI-BR",
    coords: [29.6, -4.0],
    name: {
      de: "Vyanda-Waldreservat",
      hu: "Vyanda Erdőrezervátum",
      ro: "Rezervația Forestieră Vyanda",
      en: "Vyanda Forest Reserve"
    },
    description: {
      de: "Ein Reservat im Süden Burundis, das Schutz für Primaten bietet.",
      hu: "Erdőrezervátum Burundi déli részén, amely védelmet nyújt a főemlősöknek.",
      ro: "O rezervație din sudul Burundi care oferă protecție primatelor.",
      en: "A reserve in southern Burundi providing protection for primates."
    },
    facts: {
      de: ["Schimpansen-Population.", "Bergiges Gelände."],
      hu: ["Csimpánzpopuláció.", "Hegyes terep."],
      ro: ["Populație de cimpanzei.", "Teren muntos."],
      en: ["Chimpanzee population.", "Mountainous terrain."]
    }
  },
  {
    id: "bururi-forest-nature-v2",
    type: "forest",
    parent: "BI-BR",
    coords: [29.6, -3.9],
    name: {
      de: "Bururi-Waldreservat",
      hu: "Bururi Erdőrezervátum",
      ro: "Rezervația Forestieră Bururi",
      en: "Bururi Forest Reserve"
    },
    description: {
      de: "Ein wichtiges Waldgebiet in den südlichen Hochländern Burundis.",
      hu: "Fontos erdőterület Burundi déli felföldjein.",
      ro: "O zonă forestieră importantă în zonele înalte din sudul Burundi.",
      en: "An important forest area in the southern highlands of Burundi."
    },
    facts: {
      de: ["Viele seltene Vögel.", "Nebelwald-Ökosystem."],
      hu: ["Sok ritka madár.", "Köderdő ökoszisztéma."],
      ro: ["Multe păsări rare.", "Ecosistem de pădure de ceață."],
      en: ["Many rare birds.", "Cloud forest ecosystem."]
    }
  },
  {
    id: "kigwena-forest-nature-v2",
    type: "forest",
    parent: "BI-RM",
    coords: [29.5, -4.1],
    name: {
      de: "Kigwena-Waldreservat",
      hu: "Kigwena Erdőrezervátum",
      ro: "Rezervația Forestieră Kigwena",
      en: "Kigwena Forest Reserve"
    },
    description: {
      de: "Ein Küstenwald am Ufer des Tanganjikasees.",
      hu: "Parti erdő a Tanganyika-tó partján.",
      ro: "O pădure de coastă pe malul Lacului Tanganyika.",
      en: "A coastal forest on the shores of Lake Tanganyika."
    },
    facts: {
      de: ["Paviane und Affen.", "Dichter Tropenwald."],
      hu: ["Paviánok és majmok.", "Sűrű trópusi erdő."],
      ro: ["Babuini și maimuțe.", "Pădure tropicală deasă."],
      en: ["Baboons and monkeys.", "Dense tropical forest."]
    }
  },
  {
    id: "monge-forest-nature-v2",
    type: "forest",
    parent: "BI-BL",
    coords: [29.5, -3.4],
    name: {
      de: "Monge-Waldreservat",
      hu: "Monge Erdőrezervátum",
      ro: "Rezervația Forestieră Monge",
      en: "Monge Forest Reserve"
    },
    description: {
      de: "Ein geschütztes Waldgebiet in der Nähe der Hauptstadt Bujumbura.",
      hu: "Védett erdőterület Bujumbura főváros közelében.",
      ro: "O zonă forestieră protejată lângă capitala Bujumbura.",
      en: "A protected forest area near the capital Bujumbura."
    },
    facts: {
      de: ["Erholunggebiet.", "Reiche Flora."],
      hu: ["Rekreációs terület.", "Gazdag flóra."],
      ro: ["Zonă de recreere.", "Floră bogată."],
      en: ["Recreational area.", "Rich flora."]
    }
  },
  {
    id: "rwihinda-lake-nature-v2",
    type: "lake",
    parent: "BI-KI",
    coords: [30.0, -2.6],
    name: {
      de: "Rwihindasee",
      hu: "Rwihinda-tó",
      ro: "Lacul Rwihinda",
      en: "Lake Rwihinda"
    },
    description: {
      de: "Bekannt als 'Vogelsee', ist er ein Paradies für Zugvögel.",
      hu: "Madarak tavaként ismert, a vándormadarak paradicsoma.",
      ro: "Cunoscut sub numele de 'Lacul Păsărilor', este un paradis pentru păsările migratoare.",
      en: "Known as the 'Bird Lake', it is a paradise for migratory birds."
    },
    facts: {
      de: ["Schutzgebiet für Vögel.", "Schwimmende Inseln."],
      hu: ["Madárvédelmi terület.", "Úszó szigetek."],
      ro: ["Rezervație pentru păsări.", "Insule plutitoare."],
      en: ["Bird sanctuary.", "Floating islands."]
    }
  },
  {
    id: "malagarasi-river-nature-v2",
    type: "river",
    parent: "BI-RT",
    coords: [30.3, -4.0],
    name: {
      de: "Malagarasi-Fluss",
      hu: "Malagarasi-folyó",
      ro: "Râul Malagarasi",
      en: "Malagarasi River"
    },
    description: {
      de: "Ein großer Fluss im Osten, der in den Tanganjikasee mündet.",
      hu: "Nagy folyó keleten, amely a Tanganyika-tóba ömlik.",
      ro: "Un râu mare în est, care se varsă în Lacul Tanganyika.",
      en: "A large river in the east that flows into Lake Tanganyika."
    },
    facts: {
      de: ["Wichtiges Sumpfgebiet.", "Grenze zu Tansania."],
      hu: ["Fontos mocsárvidék.", "Határ Tanzániával."],
      ro: ["Zonă mlaștinoasă importantă.", "Granița cu Tanzania."],
      en: ["Important wetland.", "Border with Tanzania."]
    }
  },
  {
    id: "twinyoni-mountain-nature-v2",
    type: "mountain",
    parent: "BI-CI",
    coords: [29.3, -2.8],
    name: {
      de: "Berg Twinyoni",
      hu: "Twinyoni-hegy",
      ro: "Muntele Twinyoni",
      en: "Mount Twinyoni"
    },
    description: {
      de: "Ein markanter Berg im Nordwesten Burundis.",
      hu: "Jellegzetes hegy Burundi északnyugati részén.",
      ro: "Un munte proeminent în nord-vestul Burundi.",
      en: "A prominent mountain in northwestern Burundi."
    },
    facts: {
      de: ["Aussicht auf das Ruzizi-Tal.", "Wanderziel."],
      hu: ["Kilátás a Ruzizi-völgyre.", "Túracélpont."],
      ro: ["Vedere spre valea Ruzizi.", "Destinație de drumeție."],
      en: ["Views of the Ruzizi valley.", "Hiking destination."]
    }
  },
  {
    id: "mukike-mountain-nature-v2",
    type: "mountain",
    parent: "BI-BL",
    coords: [29.5, -3.55],
    name: {
      de: "Berg Mukike",
      hu: "Mukike-hegy",
      ro: "Muntele Mukike",
      en: "Mount Mukike"
    },
    description: {
      de: "Einer der hohen Gipfel des Nil-Kongo-Wasserscheide-Gebirges.",
      hu: "A Nílus-Kongó vízválasztó hegység egyik magas csúcsa.",
      ro: "Unul dintre vârfurile înalte ale munților cumpenei apelor Nil-Congo.",
      en: "One of the high peaks of the Nile-Congo watershed mountains."
    },
    facts: {
      de: ["Kühles Bergklima.", "Dichte Nebel."],
      hu: ["Hűvös hegyi éghajlat.", "Sűrű köd."],
      ro: ["Climat montan răcoros.", "Ceață densă."],
      en: ["Cool mountain climate.", "Dense mists."]
    }
  },
  {
    id: "manga-mountain-nature-v2",
    type: "mountain",
    parent: "BI-BL",
    coords: [29.55, -3.5],
    name: {
      de: "Berg Manga",
      hu: "Manga-hegy",
      ro: "Muntele Manga",
      en: "Mount Manga"
    },
    description: {
      de: "Ein heiliger Berg für die traditionelle burundische Kultur.",
      hu: "Szent hegy a hagyományos burundi kultúra számára.",
      ro: "Un munte sfânt pentru cultura tradițională burundeză.",
      en: "A sacred mountain for traditional Burundian culture."
    },
    facts: {
      de: ["Kulturelle Bedeutung.", "Panoramablick."],
      hu: ["Kulturális jelentőség.", "Panorámás kilátás."],
      ro: ["Semnificație culturală.", "Vedere panoramică."],
      en: ["Cultural significance.", "Panoramic view."]
    }
  },
  {
    id: "nile-congo-crest-nature-v2",
    type: "mountain",
    parent: "BI-KY",
    coords: [29.6, -3.2],
    name: {
      de: "Nil-Kongo-Kamm",
      hu: "Nílus-Kongó vízválasztó",
      ro: "Creasta Nil-Congo",
      en: "Nile-Congo Crest"
    },
    description: {
      de: "Eine Bergkette, die die Einzugsgebiete von Nil und Kongo trennt.",
      hu: "Hegylánc, amely elválasztja a Nílus és a Kongó vízgyűjtő területeit.",
      ro: "Un lanț muntos care separă bazinele Nilului și Congoului.",
      en: "A mountain range separating the drainage basins of the Nile and Congo."
    },
    facts: {
      de: ["Wichtige Klimascheide.", "Hohe Niederschläge."],
      hu: ["Fontos éghajlati választóvonal.", "Magas csapadék."],
      ro: ["Cumpănă climatică importantă.", "Precipitații mari."],
      en: ["Important climatic divide.", "High rainfall."]
    }
  },
  {
    id: "dogodogo-lake-nature-v2",
    type: "lake",
    parent: "BI-CI",
    coords: [29.2, -2.8],
    name: {
      de: "Dogodogosee",
      hu: "Dogodogo-tó",
      ro: "Lacul Dogodogo",
      en: "Lake Dogodogo"
    },
    description: {
      de: "Ein kleiner See in der Nähe der Ruzizi-Ebene im Nordwesten.",
      hu: "Kis tó a Ruzizi-síkság közelében, északnyugaton.",
      ro: "Un lac mic lângă câmpia Ruzizi din nord-vest.",
      en: "A small lake near the Ruzizi plain in the northwest."
    },
    facts: {
      de: ["Fischreiches Gewässer.", "Vogelhabitat."],
      hu: ["Halakban gazdag víz.", "Madár élőhely."],
      ro: ["Apă bogată în pește.", "Habitat pentru păsări."],
      en: ["Fish-rich water.", "Bird habitat."]
    }
  },
  {
    id: "gacamirindi-lake-nature-v2",
    type: "lake",
    parent: "BI-KI",
    coords: [30.1, -2.5],
    name: {
      de: "Gacamirindisee",
      hu: "Gacamirindi-tó",
      ro: "Lacul Gacamirindi",
      en: "Lake Gacamirindi"
    },
    description: {
      de: "Ein malerischer See in der nördlichen Region von Kirundo.",
      hu: "Festői tó Kirundo északi régiójában.",
      ro: "Un lac pitoresc în regiunea de nord Kirundo.",
      en: "A picturesque lake in the northern region of Kirundo."
    },
    facts: {
      de: ["Teil der nördlichen Seen.", "Ruhige Umgebung."],
      hu: ["Az északi tavak része.", "Csendes környezet."],
      ro: ["Parte a lacurilor de nord.", "Mediu liniștit."],
      en: ["Part of the northern lakes.", "Quiet environment."]
    }
  },
  {
    id: "kanzigiri-lake-nature-v2",
    type: "lake",
    parent: "BI-KI",
    coords: [30.2, -2.5],
    name: {
      de: "Kanzigirisee",
      hu: "Kanzigiri-tó",
      ro: "Lacul Kanzigiri",
      en: "Lake Kanzigiri"
    },
    description: {
      de: "Einer der vielen kleinen Seen im wasserreichen Norden Burundis.",
      hu: "A vízzel teli észak-burundi régió egyik kis tava.",
      ro: "Unul dintre numeroasele lacuri mici din nordul bogat în apă al Burundi.",
      en: "One of the many small lakes in the water-rich north of Burundi."
    },
    facts: {
      de: ["Biodiversitäts-Hotspot.", "Traditionelle Fischerei."],
      hu: ["Biodiverzitási hotspot.", "Hagyományos halászat."],
      ro: ["Hotspot de biodiversitate.", "Pescuit tradițional."],
      en: ["Biodiversity hotspot.", "Traditional fishing."]
    }
  },
  {
    id: "murungu-mountain-nature-v2",
    type: "mountain",
    parent: "BI-RT",
    coords: [30.2, -3.2],
    name: {
      de: "Berg Murungu",
      hu: "Murungu-hegy",
      ro: "Muntele Murungu",
      en: "Mount Murungu"
    },
    description: {
      de: "Ein bedeutender Berg in der östlichen Provinz Rutana.",
      hu: "Jelentős hegy Rutana keleti tartományában.",
      ro: "Un munte semnificativ în provincia de est Rutana.",
      en: "A significant mountain in the eastern province of Rutana."
    },
    facts: {
      de: ["Wanderwege.", "Heimat von Greifvögeln."],
      hu: ["Túraútvonalak.", "Ragadozó madarak otthona."],
      ro: ["Trasee de drumeție.", "Casa păsărilor de pradă."],
      en: ["Hiking trails.", "Home to birds of prey."]
    }
  },
  {
    id: "mpanda-river-nature-v2",
    type: "river",
    parent: "BI-BB",
    coords: [29.3, -3.2],
    name: {
      de: "Mpanda-Fluss",
      hu: "Mpanda-folyó",
      ro: "Râul Mpanda",
      en: "Mpanda River"
    },
    description: {
      de: "Ein Nebenfluss des Ruzizi, der fruchtbare Täler durchfließt.",
      hu: "A Ruzizi mellékfolyója, amely termékeny völgyeken folyik keresztül.",
      ro: "Un afluent al Ruzizi care curge prin văi fertile.",
      en: "A tributary of the Ruzizi, flowing through fertile valleys."
    },
    facts: {
      de: ["Wichtig für die Bewässerung.", "Lokale Fischgründe."],
      hu: ["Fontos az öntözéshez.", "Helyi halászterületek."],
      ro: ["Important pentru irigații.", "Locuri de pescuit locale."],
      en: ["Important for irrigation.", "Local fishing grounds."]
    }
  }
];
