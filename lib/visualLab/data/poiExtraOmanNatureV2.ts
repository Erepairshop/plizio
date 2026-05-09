import type { POI } from "./poi";

export const poiExtraOmanNatureV2: POI[] = [
  {
    id: "oman-al-saleel-national-park-nature-v2",
    type: "national-park",
    parent: "OM-SJ",
    coords: [59.2069, 22.3781],
    name: { de: "Al Saleel Naturpark", hu: "Al Szalíl Nemzeti Park", ro: "Parcul Național Al Saleel", en: "Al Saleel National Park" },
    description: {
      de: "Dieser Naturpark schützt wertvolle Wälder mit Akazienbäumen und ist ein wichtiger Lebensraum für die arabische Gazelle in der Region Ash Sharqiyah.",
      hu: "Ez a nemzeti park értékes akáciaerdőket véd, és az arab gazella egyik legfontosabb élőhelye az As-Sarkijja régióban.",
      ro: "Acest parc național protejează păduri valoroase de salcâmi și este un habitat important pentru gazela arabă în regiunea Ash Sharqiyah.",
      en: "This nature park protects valuable acacia forests and is an important habitat for the Arabian gazelle in the Ash Sharqiyah region."
    },
    facts: {
      de: ["Wurde 1997 gegründet.", "Bedeckt eine Fläche von 220 Quadratkilometern.", "Beherbergt seltene Wildkatzen und Adler."],
      hu: ["1997-ben alapították.", "220 négyzetkilométeres területet fed le.", "Ritka vadmacskák és sasok otthona."],
      ro: ["A fost fondat în 1997.", "Acoperă o suprafață de 220 kilometri pătrați.", "Adăpostește pisici sălbatice și vulturi rare."],
      en: ["Established in 1997.", "Covers an area of 220 square kilometers.", "Home to rare wildcats and eagles."]
    }
  },
  {
    id: "oman-arabian-oryx-sanctuary-nature-v2",
    type: "national-park",
    parent: "OM-WU",
    coords: [57.2667, 19.9667],
    name: { de: "Naturschutzgebiet der Arabischen Oryx", hu: "Arab Oryx Természetvédelmi Terület", ro: "Rezervația de Oryx Arab", en: "Arabian Oryx Sanctuary" },
    description: {
      de: "Ein riesiges Schutzgebiet in der Wüste von Al Wusta, das gegründet wurde, um die seltene Arabische Oryxantilope vor dem Aussterben zu bewahren.",
      hu: "Hatalmas védett terület az Al Vuszta sivatagban, amelyet a ritka arab bejza kipusztulástól való megmentésére hoztak létre.",
      ro: "O vastă rezervație naturală în deșertul Al Wusta, creată pentru a salva de la dispariție rară antilopă oryx arabă.",
      en: "A vast protected area in the Al Wusta desert, established to save the rare Arabian oryx from extinction."
    },
    facts: {
      de: ["War Omans erstes UNESCO-Weltnaturerbe.", "Der Status wurde 2007 wegen Grenzveränderungen entzogen.", "Schützt auch seltene Wüstenfüchse."],
      hu: ["Omán első UNESCO természeti világöröksége volt.", "A státuszt 2007-ben visszavonták határmódosítások miatt.", "Ritka sivatagi rókákat is véd."],
      ro: ["A fost primul sit al patrimoniului natural UNESCO din Oman.", "Statutul a fost retras în 2007 din cauza modificărilor granițelor.", "Protejează și vulpi rare de deșert."],
      en: ["Was Oman's first UNESCO World Natural Heritage site.", "The status was withdrawn in 2007 due to boundary changes.", "Also protects rare desert foxes."]
    }
  },
  {
    id: "oman-qurum-natural-park-nature-v2",
    type: "national-park",
    parent: "OM-MA",
    coords: [58.4839, 23.6264],
    name: { de: "Qurum-Naturpark", hu: "Kurum Nemzeti Park", ro: "Parcul Natural Qurum", en: "Qurum Natural Park" },
    description: {
      de: "Die größte öffentliche Grünfläche in Maskat mit einem großen See, Mangrovenwäldern und Rosengärten, die eine Oase der Ruhe in der Stadt bietet.",
      hu: "Maszkat legnagyobb nyilvános zöldterülete, egy nagy tóval, mangroveerdőkkel és rózsakertekkel, amely a nyugalom szigete a városban.",
      ro: "Cel mai mare spațiu verde public din Muscat, cu un lac mare, păduri de mangrove și grădini de trandafiri, oferind o oază de liniște în oraș.",
      en: "The largest public green space in Muscat, featuring a large lake, mangrove forests, and rose gardens, providing an oasis of calm in the city."
    },
    facts: {
      de: ["1993 für die Öffentlichkeit zugänglich gemacht.", "Bietet Lebensraum für zahlreiche Zugvögel.", "Verfügt über künstliche Wasserfälle."],
      hu: ["1993-ban nyitották meg a nagyközönség előtt.", "Számos vándormadárnak ad otthont.", "Mesterséges vízesésekkel is rendelkezik."],
      ro: ["Deschis publicului în 1993.", "Oferă habitat pentru numeroase păsări migratoare.", "Dispune de cascade artificiale."],
      en: ["Opened to the public in 1993.", "Provides habitat for numerous migratory birds.", "Features artificial waterfalls."]
    }
  },
  {
    id: "oman-al-ansab-wetlands-nature-v2",
    type: "lake",
    parent: "OM-MA",
    coords: [58.3392, 23.5592],
    name: { de: "Al-Ansab-Feuchtgebiete", hu: "Al-Anszáb Vadvíz", ro: "Zonele Umede Al Ansab", en: "Al Ansab Wetlands" },
    description: {
      de: "Ein Netzwerk künstlich geschaffener Teiche und Schilflandschaften bei Maskat, das sich zu einem erstklassigen Vogelbeobachtungsgebiet entwickelt hat.",
      hu: "Mesterséges tavakból és nádasokból álló hálózat Maszkat közelében, amely elsőrangú madármegfigyelő területté fejlődött.",
      ro: "O rețea de iazuri create artificial și stufărișuri lângă Muscat, care a devenit o zonă de top pentru observarea păsărilor.",
      en: "A network of artificially created ponds and reedbeds near Muscat that has developed into a prime birdwatching area."
    },
    facts: {
      de: ["Über 300 verschiedene Vogelarten dokumentiert.", "Wurde aus aufbereitetem Abwasser geschaffen.", "Zieht regelmäßig Flamingos und Adler an."],
      hu: ["Több mint 300 különböző madárfajt dokumentáltak itt.", "Tisztított szennyvízből hozták létre.", "Rendszeresen vonzza a flamingókat és sasokat."],
      ro: ["Peste 300 de specii diferite de păsări documentate.", "A fost creat din ape uzate tratate.", "Atrage în mod regulat flamingo și vulturi."],
      en: ["Over 300 different bird species documented.", "Created from treated wastewater.", "Regularly attracts flamingos and eagles."]
    }
  },
  {
    id: "oman-ayn-sahalnoot-nature-v2",
    type: "lake",
    parent: "OM-ZU",
    coords: [54.1755, 17.1472],
    name: { de: "Ayn Sahalnoot", hu: "Ayn Szahalnut", ro: "Ayn Sahalnoot", en: "Ayn Sahalnoot" },
    description: {
      de: "Eine natürliche Süßwasserquelle in der Dhofar-Region, umgeben von dramatischen Kalksteinfelsen und üppiger Vegetation, besonders grün während des Khareef-Monsuns.",
      hu: "Természetes édesvizű forrás a Dhofar-régióban, drámai mészkősziklákkal és buja növényzettel övezve, amely különösen zöld a harif-monszun idején.",
      ro: "Un izvor natural de apă dulce în regiunea Dhofar, înconjurat de stânci dramatice de calcar și vegetație luxuriantă, deosebit de verde în timpul musonului Khareef.",
      en: "A natural freshwater spring in the Dhofar region, surrounded by dramatic limestone cliffs and lush vegetation, especially green during the Khareef monsoon."
    },
    facts: {
      de: ["Liegt etwa 15 Kilometer von Salala entfernt.", "Das Wasser ist ganzjährig überraschend kühl.", "Ein beliebter Picknickplatz für Einheimische."],
      hu: ["Körülbelül 15 kilométerre fekszik Szalálától.", "A víz egész évben meglepően hűvös.", "Népszerű piknikezőhely a helyiek körében."],
      ro: ["Situat la aproximativ 15 kilometri de Salalah.", "Apa este surprinzător de rece pe tot parcursul anului.", "Un loc popular de picnic pentru localnici."],
      en: ["Located about 15 kilometers from Salalah.", "The water is surprisingly cool year-round.", "A popular picnic spot for locals."]
    }
  },
  {
    id: "oman-ayn-razat-nature-v2",
    type: "lake",
    parent: "OM-ZU",
    coords: [54.2344, 17.1264],
    name: { de: "Ayn Razat", hu: "Ayn Razat", ro: "Ayn Razat", en: "Ayn Razat" },
    description: {
      de: "Die wichtigste Wasserquelle in der Gegend von Salala, die Höhlen, Teiche und ausgedehnte tropische Gärten speist.",
      hu: "Szalála környékének legfontosabb vízforrása, amely barlangokat, tavakat és kiterjedt trópusi kerteket táplál.",
      ro: "Cea mai importantă sursă de apă din zona Salalah, alimentând peșteri, iazuri și grădini tropicale extinse.",
      en: "The most important water source in the Salalah area, feeding caves, ponds, and extensive tropical gardens."
    },
    facts: {
      de: ["Das Wasser füllt ein altes Bewässerungssystem (Faladsch).", "Beherbergt farbenfrohe Seerosen.", "Die nahegelegenen Höhlen können besichtigt werden."],
      hu: ["A víz egy ősi öntözőrendszert (faladzs) tölt fel.", "Színes tündérrózsáknak ad otthont.", "A közeli barlangok látogathatók."],
      ro: ["Apa umple un sistem vechi de irigații (falaj).", "Găzduiește nuferi colorați.", "Peșterile din apropiere pot fi vizitate."],
      en: ["The water fills an ancient irrigation system (falaj).", "Home to colorful water lilies.", "The nearby caves can be visited."]
    }
  },
  {
    id: "oman-ayn-athum-nature-v2",
    type: "lake",
    parent: "OM-ZU",
    coords: [54.3644, 17.1147],
    name: { de: "Ayn Athum", hu: "Ayn Atum", ro: "Ayn Athum", en: "Ayn Athum" },
    description: {
      de: "Ein malerisches Gewässer, das durch einen hohen Wasserfall gespeist wird, der tief in den grünen Bergen von Dhofar versteckt liegt.",
      hu: "Festői víztömeg, amelyet egy magas vízesés táplál, mélyen a Dhofar zöldellő hegyeiben elrejtve.",
      ro: "Un corp pitoresc de apă alimentat de o cascadă înaltă, ascuns adânc în munții verzi din Dhofar.",
      en: "A picturesque body of water fed by a high waterfall, hidden deep in the green mountains of Dhofar."
    },
    facts: {
      de: ["Der Wasserfall ist nur während der Monsunzeit aktiv.", "Umgeben von dichten Feigenbäumen.", "Die Kalksteinfelsen sind mit Moos bedeckt."],
      hu: ["A vízesés csak a monszun idején aktív.", "Sűrű fügefák veszik körül.", "A mészkősziklákat moha borítja."],
      ro: ["Cascada este activă doar în timpul sezonului musonic.", "Înconjurată de smochini denși.", "Stâncile de calcar sunt acoperite cu mușchi."],
      en: ["The waterfall is only active during the monsoon season.", "Surrounded by dense fig trees.", "The limestone rocks are covered in moss."]
    }
  },
  {
    id: "oman-ayn-khor-nature-v2",
    type: "lake",
    parent: "OM-ZU",
    coords: [53.9497, 17.0603],
    name: { de: "Ayn Khor", hu: "Ayn Khor", ro: "Ayn Khor", en: "Ayn Khor" },
    description: {
      de: "Ein abgelegenes Naturbecken mit einem spektakulären Wasserfall in der Nähe von Salala, dessen Zugang eine kurze Offroad-Fahrt durch raues Gelände erfordert.",
      hu: "Félreeső természetes medence Szalála közelében, ahová egy látványos vízesés zúdul, és ahova rövid terepjárós utazás vezet.",
      ro: "O piscină naturală izolată cu o cascadă spectaculoasă lângă Salalah, al cărei acces necesită o scurtă călătorie off-road pe teren accidentat.",
      en: "A secluded natural pool with a spectacular waterfall near Salalah, accessed by a short off-road drive through rugged terrain."
    },
    facts: {
      de: ["Der Fall ergießt sich oft direkt aus einer Felswand.", "Nur saisonal mit Wasser gefüllt.", "Das Wasser im Pool ist kristallklar."],
      hu: ["A víz zuhataga gyakran közvetlenül a sziklafalból tör elő.", "Csak szezonálisan van benne víz.", "A medence vize kristálytiszta."],
      ro: ["Căderea de apă se revarsă adesea direct dintr-un perete de stâncă.", "Umplut cu apă doar sezonier.", "Apa din piscină este cristalină."],
      en: ["The cascade often pours directly from a rock face.", "Only filled with water seasonally.", "The water in the pool is crystal clear."]
    }
  },
  {
    id: "oman-khawr-ruri-nature-v2",
    type: "lake",
    parent: "OM-ZU",
    coords: [54.4339, 17.0378],
    name: { de: "Khor Rori Lagune", hu: "Khor Rori Lagúna", ro: "Laguna Khawr Ruri", en: "Khawr Ruri Lagoon" },
    description: {
      de: "Die größte Lagune in Dhofar, die Süßwasser mit dem Meer verbindet und als wichtiges Heiligtum für Zugvögel und Schildkröten fungiert.",
      hu: "Dhofar legnagyobb lagúnája, amely összeköti az édesvizet a tengerrel, és fontos menedékhely a vándormadarak és teknősök számára.",
      ro: "Cea mai mare lagună din Dhofar, conectând apa dulce la mare și acționând ca un sanctuar important pentru păsările migratoare și țestoase.",
      en: "The largest lagoon in Dhofar, connecting freshwater to the sea and acting as an important sanctuary for migratory birds and turtles."
    },
    facts: {
      de: ["Liegt in der Nähe der antiken Hafenstadt Sumhuram.", "Ein wichtiger Nistplatz für Flamingos.", "Durch Sandbänke oft vom Ozean getrennt."],
      hu: ["Az ókori Szumhuram kikötőváros közelében található.", "Fontos fészkelőhely a flamingók számára.", "A homokpadok gyakran elválasztják az óceántól."],
      ro: ["Situată lângă vechiul oraș portuar Sumhuram.", "Un loc important de cuibărit pentru flamingo.", "Adesea separată de ocean prin bancuri de nisip."],
      en: ["Located near the ancient port city of Sumhuram.", "An important nesting site for flamingos.", "Often separated from the ocean by sandbars."]
    }
  },
  {
    id: "oman-khawr-al-maghsail-nature-v2",
    type: "lake",
    parent: "OM-ZU",
    coords: [53.7847, 16.8906],
    name: { de: "Khor Al Mughsail", hu: "Khor Al-Mugszajl", ro: "Khawr Al Maghsail", en: "Khawr Al Maghsail" },
    description: {
      de: "Eine Brackwasserlagune an der Südküste, flankiert von Bergen und dem Meer, die für ihre dichten Schilfgürtel und artenreiche Vogelwelt bekannt ist.",
      hu: "Brakkvizes lagúna a déli parton, amelyet hegyek és a tenger szegélyeznek, ismert sűrű nádasairól és gazdag madárvilágáról.",
      ro: "O lagună cu apă salmastră pe coasta de sud, flancată de munți și mare, cunoscută pentru stufărișurile dense și diversitatea de păsări.",
      en: "A brackish lagoon on the southern coast, flanked by mountains and the sea, known for its dense reed beds and diverse birdlife."
    },
    facts: {
      de: ["Etwa 3 Quadratkilometer groß.", "Bietet Lebensraum für gefährdete Reiher.", "Das Wasser stammt aus unterirdischen Quellen."],
      hu: ["Körülbelül 3 négyzetkilométer kiterjedésű.", "Veszélyeztetett kócsagoknak nyújt élőhelyet.", "A víz föld alatti forrásokból származik."],
      ro: ["Are o suprafață de aproximativ 3 kilometri pătrați.", "Oferă habitat pentru stârci pe cale de dispariție.", "Apa provine din izvoare subterane."],
      en: ["About 3 square kilometers in size.", "Provides habitat for endangered herons.", "The water comes from underground springs."]
    }
  },
  {
    id: "oman-wadi-al-abiyad-nature-v2",
    type: "river",
    parent: "OM-BJ",
    coords: [57.6533, 23.4914],
    name: { de: "Wadi Al Abiyad", hu: "Vádi Al-Abijad", ro: "Wadi Al Abiyad", en: "Wadi Al Abiyad" },
    description: {
      de: "Ein breites Flusstal, dessen Name 'das weiße Wadi' bedeutet, benannt nach den weißen Kalksteinfelsen und den hellen Kiesbetten entlang des ganzjährigen Wasserlaufs.",
      hu: "Széles folyóvölgy, melynek neve 'fehér vádi', az állandó vízfolyás menti fehér mészkősziklákról és világos kavicságyakról kapta nevét.",
      ro: "O vale largă de râu al cărei nume înseamnă 'Wadi alb', numită după stâncile albe de calcar și albiile luminoase de pietriș de-a lungul cursului de apă permanent.",
      en: "A broad river valley whose name means 'the white wadi', named after the white limestone cliffs and bright gravel beds along the year-round watercourse."
    },
    facts: {
      de: ["Bekannt für kleine natürliche Schwimmbecken.", "Es gibt hier seltene Ophiolith-Felsformationen.", "Beliebt für abenteuerliches Dünen-Bashing in der Nähe."],
      hu: ["Ismert apró természetes úszómedencéiről.", "Ritka ofiolit sziklaképződmények is találhatók itt.", "Népszerű a közeli dűnéken való terepjárózás."],
      ro: ["Cunoscut pentru micile piscine naturale de înot.", "Aici se găsesc formațiuni stâncoase rare de ofiolit.", "Popular pentru condusul off-road aventuros pe dunele din apropiere."],
      en: ["Known for small natural swimming pools.", "Rare ophiolite rock formations are found here.", "Popular for adventurous dune bashing nearby."]
    }
  },
  {
    id: "oman-wadi-andam-nature-v2",
    type: "river",
    parent: "OM-SS",
    coords: [58.0772, 22.5800],
    name: { de: "Wadi Andam", hu: "Vádi Andam", ro: "Wadi Andam", en: "Wadi Andam" },
    description: {
      de: "Eines der längsten Wadis im Oman, das sich durch schroffe Landschaften schlängelt und kleine grüne Oasen mit Dattelpalmen bildet.",
      hu: "Omán egyik leghosszabb vádija, amely zord tájakon kanyarog, és datolyapálmás, apró zöld oázisokat hoz létre.",
      ro: "Unul dintre cele mai lungi wadi-uri din Oman, șerpuind prin peisaje accidentate și formând mici oaze verzi cu curmali.",
      en: "One of the longest wadis in Oman, winding through rugged landscapes and forming small green oases with date palms."
    },
    facts: {
      de: ["Das Wadi erstreckt sich über 100 Kilometer.", "Führt oft nach starkem Regen gefährliche Sturzfluten.", "Dient als natürlicher Korridor für Wildtiere."],
      hu: ["A vádi több mint 100 kilométer hosszan terül el.", "Heves esőzések után gyakran okoz villámárvizeket.", "Természetes folyosóként szolgál a vadon élő állatok számára."],
      ro: ["Wadi-ul se întinde pe mai mult de 100 de kilometri.", "Produce adesea viituri periculoase după ploi abundente.", "Servește drept coridor natural pentru fauna sălbatică."],
      en: ["The wadi extends for over 100 kilometers.", "Often produces dangerous flash floods after heavy rain.", "Serves as a natural corridor for wildlife."]
    }
  },
  {
    id: "oman-wadi-muaydin-nature-v2",
    type: "river",
    parent: "OM-DA",
    coords: [57.6719, 22.9558],
    name: { de: "Wadi Muaydin", hu: "Vádi Muajdin", ro: "Wadi Muaydin", en: "Wadi Muaydin" },
    description: {
      de: "Ein tief eingeschnittenes Flusstal, das als natürliches Tor zum Saiq-Plateau dient und ganzjährig Wasser führt.",
      hu: "Mélyen bevágott folyóvölgy, amely természetes kapuként szolgál a Szajq-fennsíkhoz, és egész évben vízzel teli.",
      ro: "O vale de râu adânc incizată, care servește ca o poartă naturală către Platoul Saiq și conține apă pe tot parcursul anului.",
      en: "A deeply incised river valley that serves as a natural gateway to the Saiq Plateau and carries water year-round."
    },
    facts: {
      de: ["Es speist das Faladsch-System der antiken Stadt Birkat al Mawz.", "Die Wände bestehen aus massiven Kalksteinschichten.", "Es gibt uralte Ruinen entlang seiner Ufer."],
      hu: ["Ez táplálja az ősi Birkat al Mawz város faladzs-rendszerét.", "A falak masszív mészkőrétegekből állnak.", "Partjai mentén ősi romok találhatók."],
      ro: ["Alimentează sistemul de falaj al orașului antic Birkat al Mawz.", "Pereții constau din straturi masive de calcar.", "Există ruine antice de-a lungul malurilor sale."],
      en: ["It feeds the falaj system of the ancient city of Birkat al Mawz.", "The walls consist of massive limestone layers.", "There are ancient ruins along its banks."]
    }
  },
  {
    id: "oman-jebel-harim-nature-v2",
    type: "mountain",
    parent: "OM-MU",
    coords: [56.2300, 25.9753],
    name: { de: "Dschebel Harim", hu: "Jebel Harim", ro: "Jebel Harim", en: "Jebel Harim" },
    description: {
      de: "Der 'Berg der Frauen' ist der höchste Gipfel der Musandam-Halbinsel und bietet spektakuläre Ausblicke auf zerklüftete Fjorde und den Persischen Golf.",
      hu: "A 'Nők hegye' a Muszandam-félsziget legmagasabb csúcsa, ahonnan látványos kilátás nyílik a csipkézett fjordokra és a Perzsa-öbölre.",
      ro: "Muntele Femeilor este cel mai înalt vârf al Peninsulei Musandam, oferind vederi spectaculoase asupra fiordurilor stâncoase și a Golfului Persic.",
      en: "The 'Mountain of Women' is the highest peak of the Musandam Peninsula, offering spectacular views of rugged fjords and the Persian Gulf."
    },
    facts: {
      de: ["Erreicht eine Höhe von 2.087 Metern.", "Seine Felsen sind reich an Meeresfossilien.", "Auf dem Gipfel befindet sich eine Radarstation."],
      hu: ["Magassága eléri a 2087 métert.", "Sziklái tengeri fosszíliákban gazdagok.", "A csúcson egy radarállomás található."],
      ro: ["Atinge o înălțime de 2.087 de metri.", "Rocile sale sunt bogate în fosile marine.", "O stație radar se află pe vârf."],
      en: ["Reaches an altitude of 2,087 meters.", "Its rocks are rich in marine fossils.", "A radar station is located on the summit."]
    }
  },
  {
    id: "oman-jebel-madar-nature-v2",
    type: "mountain",
    parent: "OM-SS",
    coords: [58.1219, 22.4286],
    name: { de: "Dschebel Madar", hu: "Jebel Madar", ro: "Jebel Madar", en: "Jebel Madar" },
    description: {
      de: "Ein markanter, isolierter Kalksteinberg in der Sharqiyah-Region, der sich majestätisch aus der umliegenden flachen Wüstenebene erhebt.",
      hu: "Jellegzetes, elszigetelt mészkőhegy a Sarkijja-régióban, amely fenségesen magasodik ki a környező sík sivatagi síkságból.",
      ro: "Un munte de calcar izolat, proeminent în regiunea Sharqiyah, care se ridică maiestuos din câmpia deșertică plană din jur.",
      en: "A prominent, isolated limestone mountain in the Sharqiyah region that rises majestically from the surrounding flat desert plain."
    },
    facts: {
      de: ["Erinnert geologisch an die Struktur eines Salzdoms.", "Seine Hänge weisen extrem gefaltete Gesteinsschichten auf.", "Wichtig für geologische Studien in Oman."],
      hu: ["Geológiailag egy sókupolára emlékeztet.", "Lejtőin rendkívül gyűrött kőzetrétegek találhatók.", "Fontos geológiai tanulmányok helyszíne Ománban."],
      ro: ["Din punct de vedere geologic amintește de o cupolă de sare.", "Pantele sale prezintă straturi de roci extrem de cutate.", "Important pentru studiile geologice din Oman."],
      en: ["Geologically resembles a salt dome.", "Its slopes feature extremely folded rock layers.", "Important for geological studies in Oman."]
    }
  },
  {
    id: "oman-wadi-ash-shuwaymiyyah-nature-v2",
    type: "river",
    parent: "OM-ZU",
    coords: [55.6669, 17.9250],
    name: { de: "Wadi Ash Shuwaymiyyah", hu: "Vádi As-Suvajmijja", ro: "Wadi Ash Shuwaymiyyah", en: "Wadi Ash Shuwaymiyyah" },
    description: {
      de: "Ein atemberaubendes Wüstenwadi, das tief in die Hochebene eingeschnitten ist und eine dramatische Landschaft aus weißen und roten Kalksteinklippen offenbart.",
      hu: "Lélegzetelállító sivatagi vádi, amely mélyen a fennsíkba vág, és fehér és vörös mészkősziklák drámai táját tárja fel.",
      ro: "Un wadi deșertic uluitor care taie adânc în platou, dezvăluind un peisaj dramatic cu stânci de calcar albe și roșii.",
      en: "A breathtaking desert wadi that cuts deep into the plateau, revealing a dramatic landscape of white and red limestone cliffs."
    },
    facts: {
      de: ["Liegt an der abgelegenen Ostküste Omans.", "Beherbergt hängende Gärten und kleine Wasserfälle.", "Eines der unberührtesten Täler des Landes."],
      hu: ["Omán elszigetelt keleti partvidékén fekszik.", "Függőkerteket és kis vízeséseket rejt.", "Az ország egyik legérintetlenebb völgye."],
      ro: ["Situat pe coasta de est izolată a Omanului.", "Adăpostește grădini suspendate și mici cascade.", "Una dintre cele mai imaculate văi din țară."],
      en: ["Located on Oman's remote east coast.", "Harbors hanging gardens and small waterfalls.", "One of the most pristine valleys in the country."]
    }
  },
  {
    id: "oman-wadi-al-fara-nature-v2",
    type: "river",
    parent: "OM-BJ",
    coords: [57.4525, 23.3644],
    name: { de: "Wadi Al Fara", hu: "Vádi Al-Fara", ro: "Wadi Al Fara", en: "Wadi Al Fara" },
    description: {
      de: "Ein malerisches Tal mit engen Felspassagen, das das Wasser aus dem Hadschar-Gebirge sammelt und fruchtbare Plantagen versorgt.",
      hu: "Festői völgy szűk sziklaszorosokkal, amely a Hadzsar-hegység vizét gyűjti össze, és termékeny ültetvényeket lát el vele.",
      ro: "O vale pitorească cu pasaje stâncoase înguste, care colectează apa din Munții Al Hajar și aprovizionează plantații fertile.",
      en: "A picturesque valley with narrow rock passages that collects water from the Al Hajar Mountains and supplies fertile plantations."
    },
    facts: {
      de: ["Berühmt für die Festung Rustaq an seinem Ufer.", "Das Wadi hat heilende Thermalquellen.", "Das Flusstal ist gesäumt von Palmenhainen."],
      hu: ["Híres a partján álló Ruszták-erődről.", "A vádiban gyógyító termálforrások találhatók.", "A folyóvölgyet pálmaligetek szegélyezik."],
      ro: ["Cunoscut pentru fortul Rustaq de pe malul său.", "Wadi-ul are izvoare termale vindecătoare.", "Valea râului este mărginită de plantații de palmieri."],
      en: ["Famous for the Rustaq Fort on its banks.", "The wadi features healing thermal springs.", "The river valley is lined with palm groves."]
    }
  },
  {
    id: "oman-jebel-as-sarat-nature-v2",
    type: "mountain",
    parent: "OM-DA",
    coords: [57.1722, 23.2383],
    name: { de: "Dschebel As-Sarat", hu: "Jebel Asz-Szarat", ro: "Jebel As-Sarat", en: "Jebel As-Sarat" },
    description: {
      de: "Ein mächtiger Gebirgsausläufer westlich des Dschebel Schams, der durch steile Klippen und tiefe Schluchten geprägt ist.",
      hu: "Hatalmas hegygerinc a Jebel Samsztól nyugatra, amelyet meredek sziklák és mély szurdokok jellemeznek.",
      ro: "Un pinten muntos masiv la vest de Jebel Shams, caracterizat de stânci abrupte și defileuri adânci.",
      en: "A massive mountain spur west of Jebel Shams, characterized by steep cliffs and deep gorges."
    },
    facts: {
      de: ["Beliebtes Terrain für anspruchsvolle Klettertouren.", "Beherbergt jahrhundertealte Wacholderbäume.", "Teil des omanischen Ophiolith-Komplexes."],
      hu: ["Népszerű terep a kihívást jelentő hegymászásokhoz.", "Többszáz éves borókafáknak ad otthont.", "Az ománi ofiolit komplexum része."],
      ro: ["Teren popular pentru alpiniști experimentați.", "Adăpostește ienuperi vechi de secole.", "Face parte din complexul de ofiolit din Oman."],
      en: ["Popular terrain for challenging climbing tours.", "Home to centuries-old juniper trees.", "Part of the Omani ophiolite complex."]
    }
  },
  {
    id: "oman-khawr-awqad-nature-v2",
    type: "lake",
    parent: "OM-ZU",
    coords: [54.0417, 16.9944],
    name: { de: "Khor Awqad", hu: "Khor Avkad", ro: "Khawr Awqad", en: "Khawr Awqad" },
    description: {
      de: "Ein Feuchtgebiet in der Nähe von Salala, das als natürliches Reservoir dient und für seinen dichten Bewuchs und die Vogelvielfalt bekannt ist.",
      hu: "Vadvízi terület Szalála közelében, amely természetes tározóként szolgál, és sűrű növényzetéről, valamint madárvilágáról ismert.",
      ro: "O zonă umedă lângă Salalah, care servește ca rezervor natural și este cunoscută pentru vegetația sa densă și varietatea de păsări.",
      en: "A wetland near Salalah that serves as a natural reservoir and is known for its dense vegetation and bird diversity."
    },
    facts: {
      de: ["Es trocknet in den heißen Sommermonaten oft teilweise aus.", "Eine der wichtigsten Stationen für durchziehende Pelikane.", "Staatlich anerkanntes Vogelschutzgebiet."],
      hu: ["A forró nyári hónapokban gyakran részben kiszárad.", "Az átvonuló pelikánok egyik legfontosabb állomása.", "Államilag elismert madárvédelmi terület."],
      ro: ["Adesea seacă parțial în lunile fierbinți de vară.", "Una dintre cele mai importante opriri pentru pelicanii migratori.", "Sanctuar de păsări recunoscut de stat."],
      en: ["It often partially dries up during the hot summer months.", "One of the most important stops for migrating pelicans.", "A state-recognized bird sanctuary."]
    }
  },
  {
    id: "oman-wadi-khabbab-nature-v2",
    type: "river",
    parent: "OM-MU",
    coords: [56.1669, 25.8672],
    name: { de: "Wadi Khabbab", hu: "Vádi Khabbab", ro: "Wadi Khabbab", en: "Wadi Khabbab" },
    description: {
      de: "Ein zerklüftetes Tal auf der Halbinsel Musandam, das sich durch karge, scharfe Felswände und saisonale Wasserbecken auszeichnet.",
      hu: "Csipkézett völgy a Muszandam-félszigeten, amelyet kopár, éles sziklafalak és szezonális vízmedencék jellemeznek.",
      ro: "O vale accidentată pe Peninsula Musandam, caracterizată de pereți stâncoși arizi și ascuțiți și piscine sezoniere de apă.",
      en: "A rugged valley on the Musandam Peninsula, characterized by barren, sharp rock faces and seasonal water pools."
    },
    facts: {
      de: ["Die Felsen haben eine rötlich-graue Färbung.", "Es bietet abgelegene Wanderrouten durch die Bergwelt.", "Traditionelle Steinhäuser säumen den Weg."],
      hu: ["A sziklák vöröses-szürke színezetűek.", "Félreeső túraútvonalakat kínál a hegyvidéken át.", "Hagyományos kőházak szegélyezik az utat."],
      ro: ["Rocile au o nuanță roșiatică-cenușie.", "Oferă trasee de drumeție izolate prin peisajul montan.", "Case tradiționale de piatră mărginesc poteca."],
      en: ["The rocks have a reddish-gray coloration.", "It offers secluded hiking routes through the mountainous landscape.", "Traditional stone houses line the path."]
    }
  }
];
