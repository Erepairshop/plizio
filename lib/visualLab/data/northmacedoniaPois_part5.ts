import type { POI } from "./poi";

export const mkPoisPart5: POI[] = [
  // MK-041: Sopište
  {
    id: "MK-041-govrlevo-neolithic",
    type: "historical",
    parent: "MK-041",
    coords: [21.3667, 41.9333],
    name: { de: "Neolithische Siedlung Govrlevo", hu: "Govrlevói újkőkori település", ro: "Așezarea neolitică Govrlevo", en: "Govrlevo Neolithic Settlement" },
    description: {
      de: "Eine archäologische Stätte, in der die berühmte 'Adam von Mazedonien'-Figur gefunden wurde.",
      hu: "Régészeti helyszín, ahol a híres 'Macedóniai Ádám' szobrot találták.",
      ro: "Un sit arheologic unde a fost găsită faimoasa figurină 'Adam din Macedonia'.",
      en: "An archaeological site where the famous 'Adam of Macedonia' figurine was found."
    },
    facts: {
      de: ["Enthält Artefakte aus dem 6. Jahrtausend v. Chr.", "Eine der wichtigsten neolithischen Stätten auf dem Balkan.", "Zeigt frühe Formen der Kunst und des Glaubens."],
      hu: ["I. e. 6. évezredből származó műtárgyakat tartalmaz.", "A Balkán egyik legfontosabb újkőkori lelőhelye.", "A művészet és a hit korai formáit mutatja be."],
      ro: ["Conține artefacte din mileniul al VI-lea î.Hr.", "Unul dintre cele mai importante situri neolitice din Balcani.", "Prezintă forme timpurii de artă și credință."],
      en: ["Contains artifacts from the 6th millennium BC.", "One of the most important Neolithic sites in the Balkans.", "Shows early forms of art and belief."]
    }
  },
  {
    id: "MK-041-st-panteleimon-monastery",
    type: "historical",
    parent: "MK-041",
    coords: [21.3853, 41.9772],
    name: { de: "Kloster Sveti Pantelejmon - Gorno Nerezi", hu: "Gorno Nerezi-i Szent Pantelejmon-kolostor", ro: "Mănăstirea Sf. Panteleimon - Gorno Nerezi", en: "Saint Panteleimon Monastery - Gorno Nerezi" },
    description: {
      de: "Ein byzantinisches Kloster aus dem 12. Jahrhundert, berühmt für seine revolutionären Fresken.",
      hu: "12. századi bizánci kolostor, amely forradalmi stílusú freskóiról ismert.",
      ro: "O mănăstire bizantină din secolul al XII-lea, celebră pentru frescele sale revoluționare.",
      en: "A 12th-century Byzantine monastery famous for its revolutionary frescoes."
    },
    facts: {
      de: ["Gegründet von Alexios Komnenos.", "Die Fresken zeigen frühen Realismus und Emotionen.", "Bietet einen herrlichen Blick auf Skopje."],
      hu: ["Alexiosz Komnénosz alapította.", "A freskók korai realizmust és érzelmeket mutatnak.", "Csodás kilátást nyújt Szkopjéra."],
      ro: ["Fondată de Alexie Comnenul.", "Frescele prezintă un realism și o emoție timpurie.", "Oferă o vedere superbă asupra orașului Skopje."],
      en: ["Founded by Alexios Komnenos.", "The frescoes display early realism and emotion.", "Offers a magnificent view of Skopje."]
    }
  },
  // MK-042: Karpoš
  {
    id: "MK-042-scupi-archaeological-site",
    type: "historical",
    parent: "MK-042",
    coords: [21.3933, 42.0167],
    name: { de: "Archäologische Stätte Scupi", hu: "Scupi régészeti lelőhely", ro: "Situl arheologic Scupi", en: "Scupi Archaeological Site" },
    description: {
      de: "Die Ruinen der antiken Stadt Scupi, die einst das Zentrum von Dardania war.",
      hu: "Az ókori Scupi városának romjai, amely egykor Dardania központja volt.",
      ro: "Ruinele orașului antic Scupi, care a fost odată centrul Dardaniei.",
      en: "The ruins of the ancient city of Scupi, once the center of Dardania."
    },
    facts: {
      de: ["War eine römische Kolonie.", "Wurde im 6. Jahrhundert durch ein Erdbeben zerstört.", "Beherbergt ein großes römisches Theater."],
      hu: ["Római kolónia volt.", "A 6. században egy földrengés pusztította el.", "Hatalmas római színháznak ad otthont."],
      ro: ["A fost o colonie romană.", "A fost distrus de un cutremur în secolul al VI-lea.", "Găzduiește un teatru roman de mari dimensiuni."],
      en: ["Was a Roman colony.", "Destroyed by an earthquake in the 6th century.", "Houses a large Roman theater."]
    }
  },
  {
    id: "MK-042-skopje-city-park",
    type: "nature",
    parent: "MK-042",
    coords: [21.4167, 42.0083],
    name: { de: "Stadtpark Skopje (Gradski Park)", hu: "Szkopjei városi park", ro: "Parcul orașului Skopje", en: "Skopje City Park" },
    description: {
      de: "Der größte und bedeutendste Park in Skopje, ein Ort für Freizeit und Kultur.",
      hu: "Szkopje legnagyobb és legjelentősebb parkja, a kikapcsolódás és a kultúra helyszíne.",
      ro: "Cel mai mare și mai important parc din Skopje, un loc pentru recreere și cultură.",
      en: "The largest and most significant park in Skopje, a place for recreation and culture."
    },
    facts: {
      de: ["Beherbergt den Zoo von Skopje.", "Ein beliebter Ort für Konzerte und Veranstaltungen.", "Liegt direkt am Ufer des Vardar."],
      hu: ["Itt található a Szkopjei Állatkert.", "Koncertek és rendezvények népszerű helyszíne.", "Közvetlenül a Vardar partján fekszik."],
      ro: ["Găzduiește Grădina Zoologică din Skopje.", "Un loc popular pentru concerte și evenimente.", "Situat direct pe malul râului Vardar."],
      en: ["Home to the Skopje Zoo.", "A popular spot for concerts and events.", "Located right on the banks of the Vardar river."]
    }
  },
  // MK-043: Šuto Orizari
  {
    id: "MK-043-roma-market",
    type: "landmark",
    parent: "MK-043",
    coords: [21.4333, 42.0333],
    name: { de: "Basar von Šuto Orizari", hu: "Suto Orizari-i bazár", ro: "Bazarul din Šuto Orizari", en: "Market of Šuto Orizari" },
    description: {
      de: "Ein lebhafter und bunter Markt in der weltweit einzigen Gemeinde mit einer Roma-Mehrheit.",
      hu: "Élénk és színes piac a világ egyetlen olyan községében, ahol a romák vannak többségben.",
      ro: "O piață vibrantă și colorată în singura municipalitate din lume cu majoritate romă.",
      en: "A vibrant and colorful market in the world's only municipality with a Roma majority."
    },
    facts: {
      de: ["Bekannt für günstige Waren und Textilien.", "Ein Zentrum der Roma-Kultur und des Alltagslebens.", "Zieht Besucher aus ganz Skopje an."],
      hu: ["Olcsó áruiról és textiltermékeiről ismert.", "A roma kultúra és a mindennapi élet központja.", "Egész Szkopjéból vonzza a látogatókat."],
      ro: ["Cunoscută pentru mărfuri ieftine și textile.", "Un centru al culturii rome și al vieții cotidiene.", "Atrage vizitatori din tot orașul Skopje."],
      en: ["Known for affordable goods and textiles.", "A center of Roma culture and daily life.", "Attracts visitors from all over Skopje."]
    }
  },
  {
    id: "MK-043-amdi-pasha-monument",
    type: "landmark",
    parent: "MK-043",
    coords: [21.4389, 42.0350],
    name: { de: "Amdi-Pascha-Denkmal", hu: "Amdi pasa emlékműve", ro: "Monumentul lui Amdi Pașa", en: "Amdi Pasha Monument" },
    description: {
      de: "Ein lokales Wahrzeichen zur Erinnerung an bedeutende Persönlichkeiten der Gemeinde.",
      hu: "Helyi nevezetesség, amely a község jelentős személyiségeire emlékeztet.",
      ro: "Un punct de reper local care comemorează personalități importante ale municipalității.",
      en: "A local landmark commemorating significant figures of the municipality."
    },
    facts: {
      de: ["Befindet sich im Zentrum von Šuto Orizari.", "Ein Symbol für die politische Identität der Region.", "Oft ein Treffpunkt für Anwohner."],
      hu: ["Suto Orizari központjában található.", "A régió politikai identitásának szimbóluma.", "Gyakran szolgál találkozóhelyként a lakók számára."],
      ro: ["Situat în centrul localității Šuto Orizari.", "Un simbol al identității politice a regiunii.", "Adesea un loc de întâlnire pentru localnici."],
      en: ["Located in the center of Šuto Orizari.", "A symbol of the region's political identity.", "Often a meeting point for residents."]
    }
  },
  // MK-044: Butel
  {
    id: "MK-044-butel-cemetery",
    type: "historical",
    parent: "MK-044",
    coords: [21.4500, 42.0333],
    name: { de: "Friedhof Butel", hu: "Buteli temető", ro: "Cimitirul Butel", en: "Butel Cemetery" },
    description: {
      de: "Der größte Friedhof in Skopje, Ruhestätte vieler bedeutender mazedonischer Persönlichkeiten.",
      hu: "Szkopje legnagyobb temetője, számos jelentős macedón személyiség nyughelye.",
      ro: "Cel mai mare cimitir din Skopje, locul de odihnă al multor personalități macedonene importante.",
      en: "The largest cemetery in Skopje, resting place of many prominent Macedonian figures."
    },
    facts: {
      de: ["Beherbergt ein Denkmal für die Opfer des Erdbebens von 1963.", "Enthält Abteilungen für verschiedene Konfessionen.", "Ein Ort der nationalen Erinnerung."],
      hu: ["Itt található az 1963-as földrengés áldozatainak emlékműve.", "Különböző felekezetek számára fenntartott részei vannak.", "A nemzeti emlékezet helyszíne."],
      ro: ["Găzduiește un monument dedicat victimelor cutremurului din 1963.", "Include secțiuni pentru diferite confesiuni.", "Un loc al memoriei naționale."],
      en: ["Houses a monument to the victims of the 1963 earthquake.", "Contains sections for different religious denominations.", "A site of national remembrance."]
    }
  },
  {
    id: "MK-044-aqueduct-skopje",
    type: "historical",
    parent: "MK-044",
    coords: [21.4167, 42.0228],
    name: { de: "Aquädukt von Skopje", hu: "Szkopjei akveduktus", ro: "Apeductul din Skopje", en: "Skopje Aqueduct" },
    description: {
      de: "Ein gut erhaltenes Stein-Aquädukt, dessen genauer Ursprung (römisch oder osmanisch) umstritten ist.",
      hu: "Jól megőrzött kőakveduktus, amelynek pontos eredete (római vagy oszmán) vitatott.",
      ro: "Un apeduct din piatră bine conservat, a cărui origine exactă (romană sau otomană) este disputată.",
      en: "A well-preserved stone aqueduct whose exact origin (Roman or Ottoman) is debated."
    },
    facts: {
      de: ["Besteht aus 55 Steinbögen.", "Wurde zur Wasserversorgung der Stadt genutzt.", "Eines der wenigen verbliebenen Aquädukte im Balkan."],
      hu: ["55 kőívből áll.", "A város vízellátására használták.", "A Balkán kevés fennmaradt akveduktusának egyike."],
      ro: ["Format din 55 de arcade de piatră.", "A fost folosit pentru alimentarea cu apă a orașului.", "Unul dintre puținele apeducte rămase în Balcani."],
      en: ["Consists of 55 stone arches.", "Used for the city's water supply.", "One of the few remaining aqueducts in the Balkans."]
    }
  },
  // MK-045: Čair
  {
    id: "MK-045-old-bazaar",
    type: "historical",
    parent: "MK-045",
    coords: [21.4367, 42.0008],
    name: { de: "Alter Basar (Stara Čaršija)", hu: "Régi bazár", ro: "Vechiul Bazar", en: "Old Bazaar" },
    description: {
      de: "Der historische Handelskern von Skopje, geprägt von osmanischer Architektur.",
      hu: "Szkopje történelmi kereskedelmi központja, az oszmán építészet jegyeivel.",
      ro: "Nucleul comercial istoric al orașului Skopje, dominat de arhitectura otomană.",
      en: "The historic commercial core of Skopje, characterized by Ottoman architecture."
    },
    facts: {
      de: ["Einer der größten und ältesten Basare auf dem Balkan.", "Beherbergt Moscheen, Karawansereien und Hamams.", "Ein Zentrum des Handwerks und der Tradition."],
      hu: ["A Balkán egyik legnagyobb és legrégebbi bazárja.", "Mecseteknek, karavánszerájoknak és fürdőknek ad otthont.", "A kézművesség és a hagyomány központja."],
      ro: ["Unul dintre cele mai mari și mai vechi bazaruri din Balcani.", "Găzduiește moschei, caravanseraiuri și hamamuri.", "Un centru al meșteșugurilor și al tradiției."],
      en: ["One of the largest and oldest bazaars in the Balkans.", "Home to mosques, caravanserais, and hammams.", "A center of craftsmanship and tradition."]
    }
  },
  {
    id: "MK-045-mustafa-pasha-mosque",
    type: "historical",
    parent: "MK-045",
    coords: [21.4358, 42.0019],
    name: { de: "Mustafa-Pascha-Moschee", hu: "Mustafa pasa mecsetje", ro: "Moscheea Mustafa Pașa", en: "Mustafa Pasha Mosque" },
    description: {
      de: "Eine der prächtigsten Moscheen aus der osmanischen Zeit in Skopje.",
      hu: "Az oszmán kor egyik legpompásabb mecsetje Szkopjéban.",
      ro: "Una dintre cele mai somptuoase moschei din perioada otomană din Skopje.",
      en: "One of the most magnificent mosques from the Ottoman period in Skopje."
    },
    facts: {
      de: ["Erbaut im späten 15. Jahrhundert.", "Besitzt eine imposante Kuppel und ein Minarett.", "Bietet einen Blick über den Alten Basar."],
      hu: ["A 15. század végén épült.", "Impozáns kupolával és minarettel rendelkezik.", "Kilátást nyújt a Régi bazárra."],
      ro: ["Construită la sfârșitul secolului al XV-lea.", "Are o cupolă și un minaret impunătoare.", "Oferă o vedere asupra Vechiului Bazar."],
      en: ["Built in the late 15th century.", "Features an imposing dome and minaret.", "Overlooks the Old Bazaar."]
    }
  },
  // MK-046: Centar
  {
    id: "MK-046-macedonia-square",
    type: "landmark",
    parent: "MK-046",
    coords: [21.4331, 41.9961],
    name: { de: "Mazedonien-Platz", hu: "Macedónia tér", ro: "Piața Macedonia", en: "Macedonia Square" },
    description: {
      de: "Der Hauptplatz von Skopje, dominiert von der monumentalen Statue 'Krieger auf dem Pferd'.",
      hu: "Szkopje főtere, amelyet a monumentális 'Harcos lovon' szobor ural.",
      ro: "Piața principală din Skopje, dominată de statuia monumentală 'Războinic pe cal'.",
      en: "The main square of Skopje, dominated by the monumental 'Warrior on a Horse' statue."
    },
    facts: {
      de: ["Größter Platz in Nordmazedonien.", "Zentrum des Projekts 'Skopje 2014'.", "Ort wichtiger nationaler Feierlichkeiten."],
      hu: ["Észak-Macedónia legnagyobb tere.", "A 'Szkopje 2014' projekt központja.", "Fontos nemzeti ünnepségek helyszíne."],
      ro: ["Cea mai mare piață din Macedonia de Nord.", "Centrul proiectului 'Skopje 2014'.", "Locul unor importante celebrări naționale."],
      en: ["The largest square in North Macedonia.", "Center of the 'Skopje 2014' project.", "Venue for major national celebrations."]
    }
  },
  {
    id: "MK-046-stone-bridge",
    type: "historical",
    parent: "MK-046",
    coords: [21.4331, 41.9969],
    name: { de: "Steinerne Brücke", hu: "Kőhíd", ro: "Podul de Piatră", en: "Stone Bridge" },
    description: {
      de: "Das Wahrzeichen von Skopje, das die neue Stadt mit dem Alten Basar verbindet.",
      hu: "Szkopje jelképe, amely összeköti az új várost a Régi bazárral.",
      ro: "Simbolul orașului Skopje, care leagă orașul nou de Vechiul Bazar.",
      en: "The landmark of Skopje, connecting the new city with the Old Bazaar."
    },
    facts: {
      de: ["Erbaut im 15. Jahrhundert auf römischen Fundamenten.", "Überstand das Erdbeben von 1963.", "Ein Symbol auf dem Wappen von Skopje."],
      hu: ["A 15. században épült római alapokra.", "Túlélte az 1963-as földrengést.", "Szkopje címerének egyik szimbóluma."],
      ro: ["Construit în secolul al XV-lea pe fundații romane.", "A supraviețuit cutremurului din 1963.", "Un simbol pe stema orașului Skopje."],
      en: ["Built in the 15th century on Roman foundations.", "Survived the 1963 earthquake.", "A symbol on the coat of arms of Skopje."]
    }
  },
  // MK-047: Zajas
  {
    id: "MK-047-mother-teresa-monument-zajas",
    type: "landmark",
    parent: "MK-047",
    coords: [20.9333, 41.6000],
    name: { de: "Mutter-Teresa-Denkmal - Zajas", hu: "Zajaszi Teréz anya emlékmű", ro: "Monumentul Maicii Tereza - Zajas", en: "Mother Teresa Monument - Zajas" },
    description: {
      de: "Ein Denkmal zu Ehren von Mutter Teresa in der Region Kicivo.",
      hu: "Teréz anya tiszteletére állított emlékmű Kičevo régiójában.",
      ro: "Un monument în onoarea Maicii Tereza în regiunea Kičevo.",
      en: "A monument in honor of Mother Teresa in the Kičevo region."
    },
    facts: {
      de: ["Roma und Albaner ehren hier ihr Erbe.", "Ein Ort des Gedenkens und des Friedens.", "Befindet sich in einem kleinen Park."],
      hu: ["A romák és albánok itt tisztelik örökségét.", "Az emlékezés és a béke helye.", "Egy kis parkban található."],
      ro: ["Romii și albanezii îi onorează aici moștenirea.", "Un loc de memorie și pace.", "Situat într-un mic parc."],
      en: ["Roma and Albanians honor her legacy here.", "A place of remembrance and peace.", "Located in a small park."]
    }
  },
  {
    id: "MK-047-zajas-mountain-trails",
    type: "nature",
    parent: "MK-047",
    coords: [20.9000, 41.6333],
    name: { de: "Bergpfade von Zajas", hu: "Zajaszi hegyi ösvények", ro: "Traseele montane din Zajas", en: "Zajas Mountain Trails" },
    description: {
      de: "Naturpfade, die durch die hügelige Landschaft von Zajas führen.",
      hu: "Zajasz dombos tájain átvezető természeti ösvények.",
      ro: "Cărări naturale care traversează peisajul colinar din Zajas.",
      en: "Nature trails passing through the hilly landscape of Zajas."
    },
    facts: {
      de: ["Bietet Einblicke in die lokale Flora.", "Beliebt bei lokalen Hirten und Wanderern.", "Ruhige Umgebung abseits der Hauptstraßen."],
      hu: ["Betekintést nyújt a helyi flórába.", "Népszerű a helyi pásztorok és túrázók körében.", "Csendes környezet a főutaktól távol."],
      ro: ["Oferă perspective asupra florei locale.", "Popular printre păstorii locali și drumeți.", "Mediu liniștit, departe de drumurile principale."],
      en: ["Provides insights into local flora.", "Popular among local shepherds and hikers.", "Quiet environment away from main roads."]
    }
  },
  // MK-048: Dolneni
  {
    id: "MK-048-monastery-zrze",
    type: "historical",
    parent: "MK-048",
    coords: [21.3417, 41.5208],
    name: { de: "Kloster Zrze", hu: "Zrzéi kolostor", ro: "Mănăstirea Zrze", en: "Zrze Monastery" },
    description: {
      de: "Ein Klosterkomplex auf einem Kalksteinfelsen mit Blick auf die Pelagonische Ebene.",
      hu: "Mészkősziklán fekvő kolostoregyüttes, kilátással a Pelagóniai-síkságra.",
      ro: "Un complex monastic situat pe o stâncă de calcar, cu vedere spre câmpia Pelagoniei.",
      en: "A monastery complex perched on a limestone rock overlooking the Pelagonian plain."
    },
    facts: {
      de: ["Bekannt für seine Höhlenkirchen.", "Ein bedeutendes spirituelles Zentrum.", "Besitzt eine lange Geschichte, die bis in die Antike zurückreicht."],
      hu: ["Barlangtemplomairól ismert.", "Jelentős szellemi központ.", "Hosszú, az antikorig visszanyúló történelemmel bír."],
      ro: ["Cunoscut pentru bisericile sale rupestre.", "Un centru spiritual important.", "Are o istorie lungă, care datează din antichitate."],
      en: ["Known for its cave churches.", "A significant spiritual center.", "Has a long history dating back to antiquity."]
    }
  },
  {
    id: "MK-048-marion-monument",
    type: "landmark",
    parent: "MK-048",
    coords: [21.4167, 41.4167],
    name: { de: "Dorf Dolneni", hu: "Dolneni falu", ro: "Satul Dolneni", en: "Dolneni Village" },
    description: {
      de: "Das Verwaltungszentrum der Gemeinde, bekannt für seine landwirtschaftliche Tradition.",
      hu: "A község közigazgatási központja, mezőgazdasági hagyományairól ismert.",
      ro: "Centrul administrativ al municipalității, cunoscut pentru tradiția sa agricolă.",
      en: "The administrative center of the municipality, known for its agricultural tradition."
    },
    facts: {
      de: ["Zentrum für Tabakanbau.", "Ort traditioneller Volksfeste.", "Liegt in der fruchtbaren Pelagonischen Ebene."],
      hu: ["A dohánytermesztés központja.", "Hagyományos népi fesztiválok helyszíne.", "A termékeny Pelagóniai-síkságon fekszik."],
      ro: ["Centru pentru cultivarea tutunului.", "Locul unor festivaluri folclorice tradiționale.", "Situat în câmpia fertilă a Pelagoniei."],
      en: ["Center for tobacco cultivation.", "Host of traditional folk festivals.", "Located in the fertile Pelagonian plain."]
    }
  },
  // MK-049: Krivogaštani
  {
    id: "MK-049-st-demetrius-church",
    type: "historical",
    parent: "MK-049",
    coords: [21.3333, 41.3333],
    name: { de: "Kirche des hl. Demetrius", hu: "Szent Demeter-templom", ro: "Biserica Sf. Dumitru", en: "Church of Saint Demetrius" },
    description: {
      de: "Eine bedeutende orthodoxe Kirche im Zentrum von Krivogaštani.",
      hu: "Jelentős ortodox templom Krivogasztani központjában.",
      ro: "O biserică ortodoxă importantă în centrul localității Krivogaštani.",
      en: "An important Orthodox church in the center of Krivogaštani."
    },
    facts: {
      de: ["Religiöser Mittelpunkt der Gemeinde.", "Bekannt für seine lokalen Heiligenfeste.", "Besitzt traditionelle kirchliche Kunst."],
      hu: ["A község vallási központja.", "Helyi szentek ünnepeiről ismert.", "Hagyományos egyházi művészettel rendelkezik."],
      ro: ["Centrul religios al municipalității.", "Cunoscută pentru sărbătorile sfinților locali.", "Deține artă bisericească tradițională."],
      en: ["Religious center of the municipality.", "Known for its local saint festivals.", "Features traditional church art."]
    }
  },
  {
    id: "MK-049-pelagonia-fields-krivogastani",
    type: "nature",
    parent: "MK-049",
    coords: [21.3500, 41.3500],
    name: { de: "Pelagonische Felder - Krivogaštani", hu: "Krivogasztani pelagóniai mezők", ro: "Câmpiile Pelagoniei - Krivogaštani", en: "Pelagonia Fields - Krivogaštani" },
    description: {
      de: "Ausgedehnte landwirtschaftliche Flächen, die das Landschaftsbild von Krivogaštani prägen.",
      hu: "Hatalmas mezőgazdasági területek, amelyek meghatározzák Krivogasztani tájképét.",
      ro: "Suprafețe agricole întinse care definesc peisajul din Krivogaštani.",
      en: "Extensive agricultural lands that characterize the landscape of Krivogaštani."
    },
    facts: {
      de: ["Bedeutendes Anbaugebiet für Paprika.", "Prägt die lokale Wirtschaft.", "Bietet weite Horizonte."],
      hu: ["Jelentős paprikatermesztő vidék.", "Meghatározza a helyi gazdaságot.", "Tágas távlatokat kínál."],
      ro: ["Zonă importantă de cultivare a ardeiului.", "Modelează economia locală.", "Oferă orizonturi largi."],
      en: ["Significant area for pepper cultivation.", "Shapes the local economy.", "Offers wide horizons."]
    }
  },
  // MK-050: Mogila
  {
    id: "MK-050-visoki-mogila",
    type: "historical",
    parent: "MK-050",
    coords: [21.3833, 41.1167],
    name: { de: "Grabhügel von Mogila (Visoki)", hu: "Mogilai sírhalmok (Viszoki)", ro: "Tumulii din Mogila (Visoki)", en: "Mogila Burial Mounds (Visoki)" },
    description: {
      de: "Archäologische Stätten mit antiken Grabhügeln (Tumuli) in der Region Mogila.",
      hu: "Régészeti helyszínek antik sírhalmokkal (tumuluszokkal) Mogila régiójában.",
      ro: "Situri arheologice cu tumuli antici în regiunea Mogila.",
      en: "Archaeological sites featuring ancient burial mounds (tumuli) in the Mogila region."
    },
    facts: {
      de: ["Gaben der Gemeinde ihren Namen (Mogila = Hügel).", "Stammen aus verschiedenen historischen Epochen.", "Wichtige Quelle für archäologische Funde."],
      hu: ["A község róluk kapta a nevét (Mogila = halom).", "Különböző történelmi korszakokból származnak.", "Fontos régészeti leletek forrásai."],
      ro: ["Au dat numele municipalității (Mogila = dâmb).", "Datează din diferite epoci istorice.", "Sursă importantă de descoperiri arheologice."],
      en: ["Gave the municipality its name (Mogila = mound).", "Date from various historical periods.", "Important source of archaeological finds."]
    }
  },
  {
    id: "MK-050-crna-reka-mogila",
    type: "river",
    parent: "MK-050",
    coords: [21.4333, 41.1333],
    name: { de: "Crna Reka bei Mogila", hu: "Crna-folyó Mogilánál", ro: "Râul Crna lângă Mogila", en: "Crna River near Mogila" },
    description: {
      de: "Der Fluss Crna Reka (Schwarzer Fluss) fließt durch die Gemeinde Mogila.",
      hu: "A Crna-folyó (Fekete-folyó) keresztülfolyik Mogila községen.",
      ro: "Râul Crna (Râul Negru) traversează municipalitatea Mogila.",
      en: "The Crna River (Black River) flows through the Mogila municipality."
    },
    facts: {
      de: ["Der längste rechte Nebenfluss des Vardar.", "Wichtig für das Ökosystem der Pelagonia.", "Ein Ort für lokales Angeln."],
      hu: ["A Vardar leghosszabb jobb oldali mellékfolyója.", "Fontos a Pelagónia ökoszisztémája számára.", "Helyi horgászhely."],
      ro: ["Cel mai lung afluent de dreapta al Vardarului.", "Important pentru ecosistemul Pelagoniei.", "Un loc pentru pescuitul local."],
      en: ["The longest right tributary of the Vardar.", "Crucial for the Pelagonia ecosystem.", "A spot for local fishing."]
    }
  }
];
