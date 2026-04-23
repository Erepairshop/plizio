import type { POI } from "./poi";

export const mkPoisPart8: POI[] = [
  // MK-071: Gradsko
  {
    id: "MK-071-stobi-gradsko",
    type: "historical",
    parent: "MK-071",
    coords: [21.9472, 41.5519],
    name: { de: "Stobi - Gradsko", hu: "Stobi - Gradsko", ro: "Stobi - Gradsko", en: "Stobi - Gradsko" },
    description: {
      de: "Obwohl Stobi auch unter Rosoman aufgeführt ist, ist es der geografische und historische Anker von Gradsko.",
      hu: "Noha Stobi Rosomannál is szerepel, Gradsko földrajzi és történelmi központja is.",
      ro: "Deși Stobi este listat și sub Rosoman, acesta este ancora geografică și istorică a orașului Gradsko.",
      en: "Although Stobi is also listed under Rosoman, it is the geographic and historical anchor of Gradsko."
    },
    facts: {
      de: ["Ein wichtiges Zentrum an der antiken Via Egnatia.", "Bekannt für sein Theater und seine Basiliken.", "Zieht Forscher aus der ganzen Welt an."],
      hu: ["Fontos központ az antik Via Egnatia mentén.", "Színházáról és bazilikáiról ismert.", "A világ minden tájáról vonzza a kutatókat."],
      ro: ["Un centru important pe antica Via Egnatia.", "Cunoscut pentru teatrul și bazilicile sale.", "Atrage cercetători din întreaga lume."],
      en: ["A major center on the ancient Via Egnatia.", "Famous for its theater and basilicas.", "Attracts researchers from around the world."]
    }
  },
  {
    id: "MK-071-vardar-gradsko",
    type: "river",
    parent: "MK-071",
    coords: [21.9500, 41.5833],
    name: { de: "Vardar bei Gradsko", hu: "Vardar Gradskónál", ro: "Vardar la Gradsko", en: "Vardar near Gradsko" },
    description: {
      de: "Der Fluss Vardar fließt durch die Gemeinde Gradsko und prägt das fruchtbare Tal.",
      hu: "A Vardar folyó keresztülfolyik Gradsko községen, meghatározva a termékeny völgyet.",
      ro: "Râul Vardar traversează municipalitatea Gradsko, modelând valea fertilă.",
      en: "The Vardar river flows through the Gradsko municipality, shaping the fertile valley."
    },
    facts: {
      de: ["Wichtig für den regionalen Weinbau.", "Ein Ort für ruhige Spaziergänge am Ufer.", "Bietet fruchtbare Böden für die Landwirtschaft."],
      hu: ["Fontos a regionális bortermelés számára.", "Csendes folyóparti séták helyszíne.", "Termékeny talajt biztosít a mezőgazdaságnak."],
      ro: ["Important pentru viticultura regională.", "Un loc pentru plimbări liniștite pe mal.", "Oferă soluri fertile pentru agricultură."],
      en: ["Crucial for regional viticulture.", "A place for quiet walks along the banks.", "Provides fertile soils for agriculture."]
    }
  },
  // MK-072: Kratovo
  {
    id: "MK-072-kratovo-bridges",
    type: "landmark",
    parent: "MK-072",
    coords: [22.1833, 42.0833],
    name: { de: "Die Brücken von Kratovo", hu: "Kratovo hídjai", ro: "Podurile din Kratovo", en: "Bridges of Kratovo" },
    description: {
      de: "Kratovo ist berühmt für seine mittelalterlichen Steinbrücken, die über den Fluss Tavacka führen.",
      hu: "Kratovo híres a középkori kőhídjairól, amelyek a Tavacka-folyón ívelnek át.",
      ro: "Kratovo este faimos pentru podurile sale medievale din piatră care traversează râul Tavacka.",
      en: "Kratovo is famous for its medieval stone bridges spanning the Tavacka river."
    },
    facts: {
      de: ["Es gibt mehrere gut erhaltene Brücken aus der osmanischen Zeit.", "Die 'Radin'-Brücke ist die bekannteste unter ihnen.", "Ein Symbol für die Ingenieurskunst der Vergangenheit."],
      hu: ["Számos jól megőrzött oszmán kori híd található itt.", "A 'Radin'-híd a legismertebb közülük.", "A múlt mérnöki tudományának jelképei."],
      ro: ["Există mai multe poduri bine conservate din perioada otomană.", "Podul 'Radin' este cel mai cunoscut dintre ele.", "Un simbol al ingineriei din trecut."],
      en: ["There are several well-preserved bridges from the Ottoman period.", "The 'Radin' bridge is the most famous among them.", "A symbol of past engineering skills."]
    }
  },
  {
    id: "MK-072-kratovo-towers",
    type: "historical",
    parent: "MK-072",
    coords: [22.1811, 42.0822],
    name: { de: "Die Türme von Kratovo", hu: "Kratovo tornyai", ro: "Turnurile din Kratovo", en: "Towers of Kratovo" },
    description: {
      de: "Mittelalterliche Wehrtürme, die einst zum Schutz der Bergbauaktivitäten in Kratovo dienten.",
      hu: "Középkori védőtornyok, amelyek egykor a kratovói bányászat védelmét szolgálták.",
      ro: "Turnuri de apărare medievale, care odinioară serveau la protejarea activităților miniere din Kratovo.",
      en: "Medieval defensive towers that once served to protect the mining activities in Kratovo."
    },
    facts: {
      de: ["Sechs von ehemals zwölf Türmen sind noch erhalten.", "Bekannt für ihre einzigartige Architektur.", "Dienten als Wohn- und Verteidigungsbauten."],
      hu: ["Az egykori tizenkét toronyból hat maradt fenn.", "Egyedülálló építészetükről ismertek.", "Lakó- és védelmi épületként szolgáltak."],
      ro: ["Șase din cele douăsprezece turnuri de altădată sunt încă păstrate.", "Cunoscute pentru arhitectura lor unică.", "Au servit drept locuințe și structuri de apărare."],
      en: ["Six of the former twelve towers are still preserved.", "Known for their unique architecture.", "Served as residential and defensive structures."]
    }
  },
  // MK-073: Ilinden
  {
    id: "MK-073-skopje-airport",
    type: "landmark",
    parent: "MK-073",
    coords: [21.6303, 41.9616],
    name: { de: "Internationaler Flughafen Skopje", hu: "Szkopjei nemzetközi repülőtér", ro: "Aeroportul Internațional Skopje", en: "Skopje International Airport" },
    description: {
      de: "Der wichtigste internationale Flughafen Nordmazedoniens, gelegen in der Gemeinde Ilinden.",
      hu: "Észak-Macedónia legfontosabb nemzetközi repülőtere, Ilinden községben található.",
      ro: "Cel mai important aeroport internațional din Macedonia de Nord, situat în municipalitatea Ilinden.",
      en: "The most important international airport of North Macedonia, located in the Ilinden municipality."
    },
    facts: {
      de: ["Hauptdrehkreuz für den Flugverkehr des Landes.", "Benannt nach dem Projekt 'Skopje 2014'.", "Bietet moderne Einrichtungen für Reisende."],
      hu: ["Az ország légiközlekedésének fő csomópontja.", "A 'Szkopje 2014' projekt keretében nevezték el.", "Modern létesítményeket kínál az utazóknak."],
      ro: ["Principalul nod pentru traficul aerian al țării.", "Numit în cadrul proiectului 'Skopje 2014'.", "Oferă facilități moderne pentru călători."],
      en: ["The main hub for air traffic in the country.", "Named as part of the 'Skopje 2014' project.", "Provides modern facilities for travelers."]
    }
  },
  {
    id: "MK-073-ilinden-monument",
    type: "historical",
    parent: "MK-073",
    coords: [21.6000, 41.9833],
    name: { de: "Denkmal von Ilinden", hu: "Ilinden-emlékmű", ro: "Monumentul Ilinden", en: "Ilinden Monument" },
    description: {
      de: "Ein Denkmal zur Ehrung der Kämpfer des Ilinden-Aufstands in der Gemeinde.",
      hu: "Emlékmű az Ilinden-felkelés harcosainak tiszteletére a községben.",
      ro: "Un monument în onoarea luptătorilor răscoalei de Ilinden din municipalitate.",
      en: "A monument honoring the fighters of the Ilinden Uprising in the municipality."
    },
    facts: {
      de: ["Ein Ort für lokale Gedenkfeiern.", "Symbolisiert den Kampf für Freiheit.", "Befindet sich im administrativen Zentrum."],
      hu: ["Helyi megemlékezések helyszíne.", "A szabadságharcot szimbolizálja.", "A közigazgatási központban található."],
      ro: ["Loc pentru ceremonii comemorative locale.", "Simbolizează lupta pentru libertate.", "Situat în centrul administrativ."],
      en: ["Site for local commemorative ceremonies.", "Symbolizes the struggle for freedom.", "Located in the administrative center."]
    }
  },
  // MK-074: Karbinci
  {
    id: "MK-074-bargala-archaeological-site",
    type: "historical",
    parent: "MK-074",
    coords: [22.2500, 41.8167],
    name: { de: "Bargala", hu: "Bargala", ro: "Bargala", en: "Bargala" },
    description: {
      de: "Eine spätantike Stadt und ein bedeutendes christliches Zentrum in der Nähe von Štip.",
      hu: "Késő antik város és jelentős keresztény központ Strumica közelében.",
      ro: "Un oraș din antichitatea târzie și un centru creștin important lângă Štip.",
      en: "A late antiquity city and a significant Christian center near Štip."
    },
    facts: {
      de: ["Besitzt gut erhaltene Basiliken.", "Wurde im 4. Jahrhundert n. Chr. gegründet.", "Bekannt für seine architektonischen Details."],
      hu: ["Jól megőrzött bazilikákkal rendelkezik.", "Az i. sz. 4. században alapították.", "Építészeti részleteiről ismert."],
      ro: ["Deține bazilici bine conservate.", "Fondat în secolul al IV-lea d.Hr.", "Cunoscut pentru detaliile sale arhitecturale."],
      en: ["Features well-preserved basilicas.", "Founded in the 4th century AD.", "Known for its architectural details."]
    }
  },
  {
    id: "MK-074-st-george-kozjak",
    type: "historical",
    parent: "MK-074",
    coords: [22.2550, 41.8111],
    name: { de: "Kirche des hl. Georg - Kozjak", hu: "Kozjaki Szent György-templom", ro: "Biserica Sf. Gheorghe - Kozjak", en: "Church of Saint George - Kozjak" },
    description: {
      de: "Eine der ältesten Kirchen in Nordmazedonien, gelegen in der Nähe der Stätte Bargala.",
      hu: "Észak-Macedónia egyik legrégebbi temploma, Bargala közelében.",
      ro: "Una dintre cele mai vechi biserici din Macedonia de Nord, situată lângă situl Bargala.",
      en: "One of the oldest churches in North Macedonia, located near the Bargala site."
    },
    facts: {
      de: ["Datiert aus dem 9. oder 10. Jahrhundert.", "Besitzt wertvolle mittelalterliche Fresken.", "Ein Denkmal von außergewöhnlicher Bedeutung."],
      hu: ["A 9. vagy 10. századból származik.", "Értékes középkori freskókat őriz.", "Kiemelkedő jelentőségű műemlék."],
      ro: ["Datează din secolul al IX-lea sau al X-lea.", "Deține fresce medievale valoroase.", "Un monument de o importanță excepțională."],
      en: ["Dates from the 9th or 10th century.", "Houses valuable medieval frescoes.", "A monument of exceptional significance."]
    }
  },
  // MK-075: Štip
  {
    id: "MK-075-isari-fortress",
    type: "historical",
    parent: "MK-075",
    coords: [22.1833, 41.7333],
    name: { de: "Isar-Festung", hu: "Iszar-erőd", ro: "Cetatea Isar", en: "Isar Fortress" },
    description: {
      de: "Die mittelalterliche Festung, die über der Stadt Štip thront.",
      hu: "Középkori erőd, amely Štip városa felett magasodik.",
      ro: "Cetatea medievală care domină orașul Štip.",
      en: "The medieval fortress overlooking the city of Štip."
    },
    facts: {
      de: ["Bietet einen herrlichen Blick auf den Fluss Bregalnica.", "Strategischer Punkt seit der Antike.", "Zentrum der historischen Entwicklung von Štip."],
      hu: ["Csodás kilátást nyújt a Bregalnica folyóra.", "Az ókor óta stratégiai pont.", "Štip történelmi fejlődésének központja."],
      ro: ["Oferă o vedere superbă asupra râului Bregalnica.", "Punct strategic încă din antichitate.", "Centrul dezvoltării istorice a orașului Štip."],
      en: ["Offers a splendid view of the Bregalnica river.", "Strategic point since antiquity.", "Center of Štip's historical development."]
    }
  },
  {
    id: "MK-075-st-nicholas-stip",
    type: "historical",
    parent: "MK-075",
    coords: [22.1917, 41.7417],
    name: { de: "Kirche des hl. Nikolaus - Štip", hu: "Štipi Szent Miklós-templom", ro: "Biserica Sf. Nicolae - Štip", en: "Church of Saint Nicholas - Štip" },
    description: {
      de: "Die Kathedrale von Štip, ein bedeutendes religiöses und kulturelles Denkmal.",
      hu: "Štip székesegyháza, jelentős vallási és kulturális műemlék.",
      ro: "Catedrala din Štip, un monument religios și cultural important.",
      en: "The cathedral of Štip, a significant religious and cultural monument."
    },
    facts: {
      de: ["Erbaut im 19. Jahrhundert.", "Beherbergt eine Galerie mit Ikonen.", "Sitz der Diözese Bregalnica."],
      hu: ["A 19. században épült.", "Ikonokból álló galériának ad otthont.", "A Bregalnicai egyházmegye székhelye."],
      ro: ["Construită în secolul al XIX-lea.", "Găzduiește o galerie de icoane.", "Sediul eparhiei Bregalnica."],
      en: ["Built in the 19th century.", "Houses a gallery of icons.", "Seat of the Bregalnica diocese."]
    }
  },
  // MK-076: Kočani
  {
    id: "MK-076-kocani-geothermal",
    type: "landmark",
    parent: "MK-076",
    coords: [22.4167, 41.9167],
    name: { de: "Geothermie von Kočani", hu: "Kocsanói geotermikus mezők", ro: "Geotermia din Kočani", en: "Kočani Geothermal Fields" },
    description: {
      de: "Die Region um Kočani ist bekannt für ihre natürlichen Thermalquellen.",
      hu: "Kocsani környéke a természetes termálforrásairól ismert.",
      ro: "Regiunea din jurul orașului Kočani este cunoscută pentru izvoarele sale termale naturale.",
      en: "The region around Kočani is known for its natural geothermal springs."
    },
    facts: {
      de: ["Das heiße Wasser wird zum Heizen von Gewächshäusern genutzt.", "Bietet Potenzial für den Kurtourismus.", "Einzigartige geologische Eigenschaft der Region."],
      hu: ["A meleg vizet üvegházak fűtésére használják.", "Lehetőséget nyújt a gyógyturizmus számára.", "A régió egyedülálló geológiai jellemzője."],
      ro: ["Apa fierbinte este folosită pentru încălzirea serelor.", "Oferă potențial pentru turismul balnear.", "Caracteristică geologică unică a regiunii."],
      en: ["The hot water is used for heating greenhouses.", "Provides potential for spa tourism.", "Unique geological feature of the region."]
    }
  },
  {
    id: "MK-076-medieval-towers-kocani",
    type: "historical",
    parent: "MK-076",
    coords: [22.4111, 41.9189],
    name: { de: "Mittelalterliche Türme von Kočani", hu: "Kocsanói középkori tornyok", ro: "Turnurile medievale din Kočani", en: "Medieval Towers of Kočani" },
    description: {
      de: "Zwei erhaltene Türme im Zentrum von Kočani aus der osmanischen Zeit.",
      hu: "Két fennmaradt torony Kocsani központjában az oszmán korból.",
      ro: "Două turnuri păstrate în centrul orașului Kočani, din perioada otomană.",
      en: "Two preserved towers in the center of Kočani dating from the Ottoman period."
    },
    facts: {
      de: ["Dienten dem Schutz und als Wohnsitz.", "Bekannt als der 'westliche' und 'östliche' Turm.", "Wichtige historische Denkmäler der Stadt."],
      hu: ["Védelmi és lakóhelyi célokat szolgáltak.", "Nyugati és keleti toronyként ismertek.", "A város fontos történelmi műemlékei."],
      ro: ["Au servit pentru protecție și ca reședință.", "Cunoscute sub numele de turnul 'estic' și cel 'vestic'.", "Importante monumente istorice ale orașului."],
      en: ["Served for protection and as residences.", "Known as the 'western' and 'eastern' towers.", "Important historical monuments of the city."]
    }
  },
  // MK-077: Zrnovci
  {
    id: "MK-077-plackovica-zrnovci",
    type: "mountain",
    parent: "MK-077",
    coords: [22.4500, 41.8000],
    name: { de: "Berg Plačkovica bei Zrnovci", hu: "Plackovica-hegy Zrnovcinál", ro: "Muntele Plačkovica lângă Zrnovci", en: "Plačkovica Mountain near Zrnovci" },
    description: {
      de: "Die Hänge des Plačkovica-Gebirges oberhalb der Gemeinde Zrnovci.",
      hu: "A Plackovica-hegység lejtői Zrnovci község felett.",
      ro: "Versanții munților Plačkovica deasupra municipalității Zrnovci.",
      en: "The slopes of the Plačkovica mountain above the Zrnovci municipality."
    },
    facts: {
      de: ["Bietet wunderschöne Wanderwege durch den Wald.", "Bekannt für seine reine Bergluft.", "Ideal für Naturbeobachtungen."],
      hu: ["Csodás túraútvonalakat kínál az erdőn át.", "Tiszta hegyi levegőjéről ismert.", "Ideális természetmegfigyelésre."],
      ro: ["Oferă trasee de drumeție frumoase prin pădure.", "Cunoscut pentru aerul montan curat.", "Ideal pentru observarea naturii."],
      en: ["Offers beautiful hiking trails through the forest.", "Known for its pure mountain air.", "Ideal for nature observation."]
    }
  },
  {
    id: "MK-077-zrnovska-river",
    type: "river",
    parent: "MK-077",
    coords: [22.4333, 41.8500],
    name: { de: "Fluss Zrnovska", hu: "Zrnovska-folyó", ro: "Râul Zrnovska", en: "Zrnovska River" },
    description: {
      de: "Ein klarer Gebirgsfluss, der durch das Zentrum von Zrnovci fließt.",
      hu: "Tiszta hegyi folyó, amely keresztülfolyik Zrnovci központján.",
      ro: "Un râu de munte limpede care traversează centrul localității Zrnovci.",
      en: "A clear mountain river flowing through the center of Zrnovci."
    },
    facts: {
      de: ["Bietet Erfrischung im Sommer.", "Wichtig für die lokale Wasserversorgung.", "Prägt die malerische Atmosphäre des Dorfes."],
      hu: ["Felfrissülést kínál a nyári melegben.", "Fontos a helyi vízellátás szempontjából.", "Meghatározza a falu festői hangulatát."],
      ro: ["Oferă răcoare în timpul verii.", "Important pentru alimentarea locală cu apă.", "Modelează atmosfera pitorească a satului."],
      en: ["Provides refreshment during summer.", "Crucial for the local water supply.", "Shapes the village's picturesque atmosphere."]
    }
  },
  // MK-078: Veles
  {
    id: "MK-078-veles-old-architecture",
    type: "landmark",
    parent: "MK-078",
    coords: [21.7772, 41.7153],
    name: { de: "Altstadt von Veles", hu: "Veles óvárosa", ro: "Orașul vechi Veles", en: "Veles Old Town" },
    description: {
      de: "Die historische Architektur von Veles, bekannt für ihre Häuser an den steilen Hängen des Vardar.",
      hu: "Veles történelmi építészete, a Vardar meredek partjaira épült házairól ismert.",
      ro: "Arhitectura istorică a orașului Veles, cunoscută pentru casele sale de pe versanții abrupți ai Vardarului.",
      en: "The historic architecture of Veles, known for its houses perched on the steep slopes of the Vardar."
    },
    facts: {
      de: ["Einzigartige Bauweise an den Klippen.", "Besitzt markante weiße Fassaden.", "Spiegelt die reiche Handelsgeschichte der Stadt wider."],
      hu: ["Egyedülálló építkezési mód a sziklákon.", "Jellegzetes fehér homlokzatokkal rendelkezik.", "Tükrözi a város gazdag kereskedelmi múltját."],
      ro: ["Stil constructiv unic pe stânci.", "Are fațade albe distinctive.", "Reflectă istoria comercială bogată a orașului."],
      en: ["Unique construction style on the cliffs.", "Features striking white facades.", "Reflects the city's rich trading history."]
    }
  },
  {
    id: "MK-078-st-pantaleon-veles",
    type: "historical",
    parent: "MK-078",
    coords: [21.7711, 41.7111],
    name: { de: "Kirche des hl. Pantaleon - Veles", hu: "Velesi Szent Pantaleon-templom", ro: "Biserica Sf. Pantelimon - Veles", en: "Church of Saint Pantaleon - Veles" },
    description: {
      de: "Die Hauptkirche von Veles, ein Meisterwerk der mazedonischen Renaissance-Architektur.",
      hu: "Veles főtemploma, a macedón reneszánsz építészet mesterműve.",
      ro: "Biserica principală din Veles, o capodoperă a arhitecturii renascentiste macedonene.",
      en: "The main church of Veles, a masterpiece of Macedonian Renaissance architecture."
    },
    facts: {
      de: ["Erbaut von Andrej Damjanov im 19. Jahrhundert.", "Besitzt eine außergewöhnliche Akustik.", "Ein bedeutendes kulturelles Denkmal."],
      hu: ["Andrej Damjanov építette a 19. században.", "Rendkívüli akusztikával rendelkezik.", "Jelentős kulturális műemlék."],
      ro: ["Construită de Andrei Damianov în secolul al XIX-lea.", "Are o acustică extraordinară.", "Un monument cultural important."],
      en: ["Built by Andrej Damjanov in the 19th century.", "Features extraordinary acoustics.", "A major cultural monument."]
    }
  },
  // MK-079: Demir Kapija
  {
    id: "MK-079-iron-gate-canyon",
    type: "nature",
    parent: "MK-079",
    coords: [22.2500, 41.4000],
    name: { de: "Eisernes Tor (Demir Kapija) Schlucht", hu: "Vaskapu-szurdok", ro: "Canionul Porțile de Fier (Demir Kapija)", en: "Iron Gate (Demir Kapija) Canyon" },
    description: {
      de: "Eine beeindruckende Schlucht des Vardar, die den Übergang zwischen zwei Regionen markiert.",
      hu: "Lenyűgöző Vardar-szurdok, amely átmenetet képez két régió között.",
      ro: "Un canion impresionant al Vardarului, care marchează trecerea între două regiuni.",
      en: "An impressive canyon of the Vardar river marking the transition between two regions."
    },
    facts: {
      de: ["Der Name bedeutet auf Türkisch 'Eisernes Tor'.", "Ein Paradies für Kletterer und Naturforscher.", "Beherbergt seltene Greifvogelarten."],
      hu: ["Neve törökül 'vaskaput' jelent.", "A sziklamászók és természetbúvárok paradicsoma.", "Ritka ragadozó madárfajoknak ad otthont."],
      ro: ["Numele înseamnă 'Poarta de Fier' în limba turcă.", "Un paradis pentru alpiniști și naturaliști.", "Găzduiește specii rare de păsări de pradă."],
      en: ["The name means 'Iron Gate' in Turkish.", "A paradise for rock climbers and naturalists.", "Home to rare species of birds of prey."]
    }
  },
  {
    id: "MK-079-demir-kapija-wine",
    type: "landmark",
    parent: "MK-079",
    coords: [22.2333, 41.4167],
    name: { de: "Weingut Popova Kula", hu: "Popova Kula borászat", ro: "Crama Popova Kula", en: "Popova Kula Winery" },
    description: {
      de: "Ein bekanntes Weingut in Demir Kapija, berühmt für die Wiederbelebung lokaler Rebsorten.",
      hu: "Ismert borászat Demir Kapijában, a helyi szőlőfajták újraélesztéséről híres.",
      ro: "O cramă renumită în Demir Kapija, celebră pentru revitalizarea soiurilor locale de struguri.",
      en: "A well-known winery in Demir Kapija, famous for reviving local grape varieties."
    },
    facts: {
      de: ["Spezialisiert auf die Sorte 'Stanushina'.", "Bietet Weintourismus und Unterkunft.", "Liegt in einer malerischen Weinregion."],
      hu: ["A 'Stanushina' fajtára specializálódott.", "Borturizmust és szállást kínál.", "Festői borvidéken található."],
      ro: ["Specializată în soiul 'Stanushina'.", "Oferă turism viticol și cazare.", "Situată într-o regiune viticolă pitorească."],
      en: ["Specializes in the 'Stanushina' variety.", "Offers wine tourism and accommodation.", "Located in a scenic wine-growing region."]
    }
  },
  // MK-080: Vinica
  {
    id: "MK-080-vinica-fortress",
    type: "historical",
    parent: "MK-080",
    coords: [22.5000, 41.8833],
    name: { de: "Festung von Vinica (Viničko Kale)", hu: "Vinicai erőd (Viničko Kale)", ro: "Cetatea din Vinica (Viničko Kale)", en: "Vinica Fortress (Viničko Kale)" },
    description: {
      de: "Eine archäologische Stätte auf einem Hügel über Vinica, bekannt für ihre Terrakotta-Ikonen.",
      hu: "Régészeti helyszín a Vinica feletti dombon, terrakotta ikonjairól ismert.",
      ro: "Un sit arheologic pe un deal deasupra orașului Vinica, renumit pentru icoanele sale de teracotă.",
      en: "An archaeological site on a hill overlooking Vinica, famous for its terracotta icons."
    },
    facts: {
      de: ["Fundort der weltweit einzigartigen frühchristlichen Terrakotta-Reliefs.", "Diente als Festung von der Antike bis zum Mittelalter.", "Bietet einen Blick auf das Kočani-Tal."],
      hu: ["Világszerte egyedülálló kora keresztény terrakotta domborművek lelőhelye.", "Az ókortól a középkorig erődként szolgált.", "Kilátást nyújt a Kocsanói-völgyre."],
      ro: ["Locul descoperirii unor reliefuri de teracotă paleocreștine unice în lume.", "A servit drept cetate din antichitate până în evul mediu.", "Oferă o vedere asupra văii Kočani."],
      en: ["Site of discovery for globally unique early Christian terracotta reliefs.", "Served as a fortress from antiquity through the Middle Ages.", "Overlooks the Kočani valley."]
    }
  },
  {
    id: "MK-080-vinica-museum",
    type: "landmark",
    parent: "MK-080",
    coords: [22.5083, 41.8833],
    name: { de: "Stadtmuseum Vinica", hu: "Vinicai Városi Múzeum", ro: "Muzeul orașului Vinica", en: "Vinica City Museum" },
    description: {
      de: "Ein Museum, das die wertvollen archäologischen Funde der Region ausstellt.",
      hu: "A régió értékes régészeti leleteit bemutató múzeum.",
      ro: "Un muzeu care expune valoroasele descoperiri arheologice din regiune.",
      en: "A museum displaying the valuable archaeological finds of the region."
    },
    facts: {
      de: ["Beherbergt die Originale der Terrakotta-Ikonen vom Kale.", "Dokumentiert die Geschichte von Vinica.", "Ein wichtiges kulturelles Zentrum im Osten."],
      hu: ["Itt őrzik az erődből származó eredeti terrakotta ikonokat.", "Dokumentálja Vinica történelmét.", "Fontos kulturális központ keleten."],
      ro: ["Adăpostește originalele icoanelor de teracotă de la cetate.", "Documentează istoria orașului Vinica.", "Un centru cultural important în est."],
      en: ["Houses the original terracotta icons from the Kale.", "Documents the history of Vinica.", "A key cultural center in the east."]
    }
  }
];
