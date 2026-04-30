import type { POI } from "./poi";

export const poiExtraFranceCities: POI[] = [
  // All batches combined - Final
  {
    id: "city-grenoble-extra",
    type: "city",
    parent: "FR-ARA",
    coords: [5.7245, 45.1885],
    name: { de: "Grenoble", hu: "Grenoble", ro: "Grenoble", en: "Grenoble" },
    description: {
      de: "Grenoble, bekannt als die 'Hauptstadt der Alpen', ist ein bedeutendes europäisches Zentrum für Wissenschaft und Technologie, umgeben von Bergen.",
      hu: "Grenoble, az 'Alpok fővárosa', a tudomány és technológia fontos európai központja, hegyekkel körülvéve.",
      ro: "Grenoble, cunoscut ca 'Capitala Alpilor', este un centru european major pentru știință și tehnologie, înconjurat de munți.",
      en: "Grenoble, known as the 'Capital of the Alps,' is a major European center for science and technology, surrounded by mountains."
    },
    facts: {
      de: ["Gastgeber der Olympischen Winterspiele 1968.", "Zentrum für Nuklearforschung.", "Seilbahn zur Bastille Festung."],
      hu: ["Az 1968-as téli olimpia házigazdája.", "Atomkutatási központ.", "Felvonó a Bastille erődhöz."],
      ro: ["Gazda Jocurilor Olimpice de iarnă din 1968.", "Centru de cercetare nucleară.", "Telecabină către Fortăreața Bastilia."],
      en: ["Host of the 1968 Winter Olympics.", "Center for nuclear research.", "Cable car to the Bastille fortress."]
    },
    descriptionAdvanced: {
      de: "Grenoble, im Herzen der französischen Alpen, ist nicht nur für seine atemberaubende Bergkulisse bekannt, sondern auch als eines der führenden Forschungs- und Innovationszentren Europas. Die Stadt beherbergt das European Synchrotron Radiation Facility (ESRF) und das Institut Laue-Langevin, was sie zu einem Magneten für Wissenschaftler aus aller Welt macht. Neben der Hochtechnologie pflegt Grenoble ein reiches kulturelles Erbe. Das Musée de Grenoble bietet eine beeindruckende Sammlung von Kunstwerken, die von der Antike bis zur Gegenwart reicht. Die historische Altstadt mit ihren engen Gassen und dem Place Grenette lädt zum Verweilen ein und verbindet alpinen Charme mit städtischem Flair.",
      hu: "",
      ro: "Grenoble, situat în inima Alpilor francezi, este o metropolă vibrantă unde inovația tehnologică se întâlnește cu un bogat patrimoniu cultural. Orașul este un centru de excelență în cercetare, găzduind facilități de renume mondial precum European Synchrotron Radiation Facility (ESRF). Pe lângă reputația sa științifică, Grenoble încântă vizitatorii cu centrul său istoric plin de farmec, cu străzi înguste și piețe animate precum Place Grenette. Musée de Grenoble deține o colecție impresionantă de artă, de la antichitate la modernism. Ascensiunea cu telecabina 'Les Bulles' către fortăreața Bastille oferă panorame spectaculoase asupra orașului și a masivelor muntoase înconjurătoare, creând o experiență de neuitat.",
      en: "Nestled at the foot of the French Alps, Grenoble is a dynamic city where breathtaking natural landscapes meet cutting-edge innovation. A world-renowned hub for science and technology, it hosts leading research facilities like the European Synchrotron Radiation Facility (ESRF). Beyond its academic and scientific prowess, the city offers a rich tapestry of cultural experiences. Visitors can explore the historic Old Town's charming streets, admire masterpieces at the Musée de Grenoble, or take the iconic 'Les Bulles' cable car up to the Bastille fortress for unparalleled panoramic views of the city and surrounding peaks. This unique blend of outdoor adventure, intellectual vibrancy, and historical depth makes Grenoble a truly captivating destination."
    },
    factsAdvanced: {
      de: [
        "Heimat von Stendhal, einem der bedeutendsten französischen Schriftsteller des 19. Jahrhunderts.",
        "Die Universität Grenoble Alpes ist eine der größten und renommiertesten in Frankreich.",
        "Die Bastille, eine alte Festung, überblickt die Stadt und ist mit einer städtischen Seilbahn, 'Les Bulles', erreichbar.",
        "Grenoble war eine der ersten Städte in Frankreich, die autofreie Zonen einführte.",
        "Die Region ist ein bedeutender Produzent von Walnüssen (Noix de Grenoble), die eine geschützte Ursprungsbezeichnung (AOC) haben.",
        "Die Stadt liegt am Zusammenfluss der Flüsse Isère und Drac.",
        "Das ESRF ist das weltweit intensivste Synchrotron-Lichtquelle."
      ],
      hu: [],
      ro: [
        "Orașul natal al lui Stendhal, unul dintre cei mai importanți scriitori francezi ai secolului al XIX-lea.",
        "Universitatea Grenoble Alpes este una dintre cele mai mari și mai prestigioase din Franța, cu peste 50.000 de studenți.",
        "Bastilia, o veche fortăreață, este accesibilă cu telecabina urbană 'Les Bulles', un simbol al orașului.",
        "Grenoble a fost unul dintre primele orașe din Franța care a introdus zone pietonale extinse în centrul orașului.",
        "Regiunea este un producător major de nuci (Noix de Grenoble), care beneficiază de o Denumire de Origine Controlată (AOC).",
        "Orașul este situat la confluența râurilor Isère și Drac.",
        "ESRF este cea mai intensă sursă de lumină sincrotron din lume, atrăgând mii de cercetători anual."
      ],
      en: [
        "The city is the birthplace of the famed 19th-century novelist Stendhal, author of 'The Red and the Black'.",
        "With over 50,000 students, the Université Grenoble Alpes is one of France's largest and most influential universities.",
        "Grenoble was one of the first cities in France to introduce extensive pedestrian-only zones in its city center.",
        "The region is renowned for its 'Noix de Grenoble' (walnuts), which have been protected by an Appellation d'Origine Contrôlée (AOC) since 1938.",
        "The city is situated at the confluence of two major rivers, the Isère and the Drac.",
        "The European Synchrotron Radiation Facility (ESRF) in Grenoble is the world's most intense synchrotron light source, attracting thousands of scientists annually.",
        "The iconic 'Les Bulles' (The Bubbles) cable car, connecting the city to the Bastille fortress, was one of the world's first urban cable cars.",
        "Grenoble was distinguished as the European Green Capital in 2022 for its commitment to sustainability."
      ]
    }
  },

  {
    id: "industry-airbus-toulouse-extra",
    type: "industry",
    parent: "FR-OCC",
    coords: [1.3636, 43.6291],
    name: { de: "Airbus-Werk Toulouse", hu: "Airbus gyár, Toulouse", ro: "Fabrica Airbus Toulouse", en: "Airbus Factory Toulouse" },
    description: {
      de: "Die Endmontagelinie von Airbus in Toulouse ist eine der größten Industrieanlagen Europas und der Geburtsort vieler Passagierflugzeuge, einschließlich des A380.",
      hu: "Az Airbus toulouse-i végszerelő sora Európa egyik legnagyobb ipari létesítménye, számos utasszállító repülőgép, köztük az A380 szülőhelye.",
      ro: "Linia de asamblare finală Airbus din Toulouse este una dintre cele mai mari facilități industriale din Europa și locul de naștere al multor avioane de pasageri, inclusiv A380.",
      en: "The Airbus final assembly line in Toulouse is one of the largest industrial facilities in Europe and the birthplace of many passenger aircraft, including the A380."
    },
    facts: {
      de: ["Hauptsitz von Airbus.", "Produktion des A320, A330, A350.", "Besuchertouren 'Let's visit Airbus' verfügbar."],
      hu: ["Az Airbus főhadiszállása.", "A320, A330, A350 gyártása.", "Látogatói túrák 'Let's visit Airbus' néven."],
      ro: ["Sediul central al Airbus.", "Producția de A320, A330, A350.", "Tururi pentru vizitatori 'Let's visit Airbus' disponibile."],
      en: ["Headquarters of Airbus.", "Production of A320, A330, A350.", "Visitor tours 'Let's visit Airbus' available."]
    },
    descriptionAdvanced: {
      de: "Toulouse, oft als 'Ville Rose' (die rosa Stadt) wegen seiner charakteristischen Terrakotta-Ziegel bezeichnet, ist das Herz der europäischen Luft- und Raumfahrtindustrie. Die Airbus-Standorte rund um den Flughafen Toulouse-Blagnac sind monumental. Die Jean-Luc Lagardère-Anlage, in der der Airbus A380 montiert wurde, ist eine der größten Hallen der Welt. Besucher können bei den 'Aeroscopia'-Touren die Montagelinien besichtigen und die Geschichte der Luftfahrt hautnah erleben. Neben Airbus ist Toulouse auch Sitz des französischen Raumfahrtzentrums CNES und vieler Zulieferer, was die Stadt zu einem globalen Kompetenzzentrum für Luft- und Raumfahrttechnologie macht. Dieses industrielle Erbe prägt die Identität der Stadt und zieht Ingenieure und Forscher aus der ganzen Welt an.",
      hu: "",
      ro: "Toulouse, cunoscut ca 'Orașul Roz' datorită cărămizilor sale de teracotă, este inima industriei aerospațiale europene. Siturile Airbus de lângă aeroportul Toulouse-Blagnac sunt monumentale, în special uzina Jean-Luc Lagardère unde a fost asamblat A380, una dintre cele mai mari hale din lume. Vizitatorii pot explora istoria aviației prin tururile 'Aeroscopia', care oferă acces la liniile de asamblare. Orașul nu este doar sediul Airbus, ci și al centrului spațial francez CNES și al multor furnizori, consolidându-și statutul de centru global de competență în tehnologia aerospațială și atrăgând ingineri și cercetători din întreaga lume.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Aeroscopia-Museum in Blagnac beherbergt legendäre Flugzeuge wie die Concorde und den Super Guppy.",
        "Die Endmontagelinie für den A350 XWB gilt als eine der modernsten und umweltfreundlichsten der Welt.",
        "Toulouse ist auch die Heimat von ATR, dem weltweit führenden Hersteller von Regionalflugzeugen.",
        "Die 'Cité de l'espace' ist ein Themenpark, der dem Weltraum und der Raumfahrt gewidmet ist.",
        "Mehr als 80.000 Menschen in der Region Toulouse arbeiten in der Luft- und Raumfahrtindustrie.",
        "Die Ausbildung von Piloten und Ingenieuren spielt eine große Rolle, mit Institutionen wie der ENAC.",
        "Vor Airbus war Toulouse ein Zentrum für Hersteller wie Sud Aviation, die die Caravelle produzierten."
      ],
      hu: [],
      ro: [
        "Muzeul Aeroscopia din Blagnac expune avioane legendare precum Concorde și Super Guppy.",
        "Linia de asamblare finală pentru A350 XWB este considerată una dintre cele mai moderne și ecologice din lume.",
        "Toulouse este, de asemenea, sediul ATR, liderul mondial în producția de aeronave regionale.",
        "'Cité de l'espace' este un parc tematic dedicat spațiului cosmic și explorării spațiale.",
        "Peste 80.000 de persoane din regiunea Toulouse lucrează în industria aerospațială.",
        "Instituții precum ENAC (Școala Națională de Aviație Civilă) joacă un rol crucial în formarea piloților și inginerilor.",
        "Înainte de Airbus, Toulouse a fost un centru pentru producători precum Sud Aviation, care a produs aeronava Caravelle."
      ],
      en: []
    }
  },
  {
    id: "port-le-havre-extra",
    type: "port",
    parent: "FR-NOR",
    coords: [0.1025, 49.4944],
    name: { de: "Hafen von Le Havre", hu: "Le Havre kikötője", ro: "Portul Le Havre", en: "Port of Le Havre" },
    description: {
      de: "Der Hafen von Le Havre ist der zweitgrößte Hafen Frankreichs und ein wichtiges Tor für den internationalen Handel, insbesondere für Container und Ölprodukte.",
      hu: "Le Havre kikötője Franciaország második legnagyobb kikötője, a nemzetközi kereskedelem fontos kapuja, különösen a konténerek és olajtermékek számára.",
      ro: "Portul Le Havre este al doilea cel mai mare port din Franța și o poartă majoră pentru comerțul internațional, în special pentru containere și produse petroliere.",
      en: "The Port of Le Havre is the second largest port in France and a major gateway for international trade, especially for containers and oil products."
    },
    facts: {
      de: ["Größter Containerhafen Frankreichs.", "Wichtig für den Handel mit Nordamerika.", "UNESCO-Weltkulturerbe für seine Nachkriegsarchitektur."],
      hu: ["Franciaország legnagyobb konténerkikötője.", "Fontos az észak-amerikai kereskedelemben.", "A háború utáni építészete miatt UNESCO világörökség."],
      ro: ["Cel mai mare port de containere din Franța.", "Important pentru comerțul cu America de Nord.", "Patrimoniu Mondial UNESCO pentru arhitectura sa postbelică."],
      en: ["France's largest container port.", "Important for trade with North America.", "UNESCO World Heritage site for its post-war architecture."]
    },
    descriptionAdvanced: {
      de: "Der Hafen von Le Havre, an der Mündung der Seine in den Ärmelkanal gelegen, ist ein strategischer Knotenpunkt des europäischen Handels. Er ist der größte französische Hafen für den Außenhandel und den Containerverkehr und wickelt jährlich Millionen von Tonnen Fracht ab. Der Komplex 'Port 2000' ermöglicht es den größten Containerschiffen der Welt, rund um die Uhr anzulegen. Neben Containern ist Le Havre ein wichtiger Importhafen für Rohöl, das die Raffinerien im Seine-Tal versorgt. Die Stadt selbst, die im Zweiten Weltkrieg stark zerstört wurde, ist ein bemerkenswertes Beispiel für die Nachkriegsarchitektur unter der Leitung von Auguste Perret. Dieses einzigartige Stadtbild wurde 2005 von der UNESCO zum Weltkulturerbe erklärt.",
      hu: "",
      ro: "Situat la gura de vărsare a Senei în Canalul Mânecii, portul Le Havre este un nod strategic pentru comerțul european. Este cel mai mare port francez pentru comerț exterior și trafic de containere, gestionând milioane de tone de marfă anual. Complexul 'Port 2000' permite celor mai mari nave de containere din lume să acosteze non-stop. Pe lângă containere, Le Havre este un port crucial pentru importul de țiței care alimentează rafinăriile din valea Senei. Orașul însuși, reconstruit după război sub îndrumarea lui Auguste Perret, este un exemplu remarcabil de arhitectură modernă, centrul său fiind inclus în patrimoniul UNESCO în 2005.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Hafen erstreckt sich über eine Fläche von rund 10.000 Hektar.",
        "Le Havre ist ein wichtiger Anlaufhafen für Kreuzfahrtschiffe, die Paris besuchen.",
        "Der Leuchtturm von La Hève markiert die Einfahrt in den Hafen.",
        "Die Pont de Normandie, eine der längsten Schrägseilbrücken der Welt, liegt in der Nähe.",
        "Der Hafen ist direkt mit dem Binnenwasserstraßennetz verbunden, was den Weitertransport nach Paris ermöglicht.",
        "Le Havre war der Ausgangspunkt für viele transatlantische Passagierschiffe im 20. Jahrhundert.",
        "Die Stadt beherbergt das Musée d'art moderne André Malraux (MuMa) mit einer bedeutenden Sammlung impressionistischer Werke."
      ],
      hu: [],
      ro: [
        "Portul se întinde pe o suprafață de aproximativ 10.000 de hectare.",
        "Le Havre este un port de escală important pentru navele de croazieră care oferă excursii la Paris.",
        "Farul de la La Hève semnalează intrarea în port.",
        "Podul Normandiei, unul dintre cele mai lungi poduri suspendate prin cabluri din lume, se află în apropiere.",
        "Portul este direct conectat la rețeaua de căi navigabile interioare, permițând transportul fluvial spre Paris.",
        "Muzeul de Artă Modernă André Malraux (MuMa) deține o colecție impresionantă de artă impresionistă.",
        "Centrul orașului, reconstruit de Auguste Perret, a fost inclus pe lista Patrimoniului Mondial UNESCO în 2005."
      ],
      en: []
    }
  },
  {
    id: "agriculture-bordeaux-vineyards-extra",
    type: "agriculture",
    parent: "FR-NAQ",
    coords: [-0.5792, 44.8378],
    name: { de: "Weinberge von Bordeaux", hu: "Bordeaux-i borvidék", ro: "Viile din Bordeaux", en: "Bordeaux Vineyards" },
    description: {
      de: "Die Weinregion Bordeaux ist weltberühmt für ihre Weine. Tausende von Châteaux produzieren einige der prestigeträchtigsten Weine der Welt.",
      hu: "A Bordeaux-i borvidék világhírű borairól. Több ezer kastély (château) termeli a világ legnevesebb borait.",
      ro: "Regiunea viticolă Bordeaux este renumită în întreaga lume pentru vinurile sale. Mii de castele (châteaux) produc unele dintre cele mai prestigioase vinuri din lume.",
      en: "The Bordeaux wine region is world-famous for its wines. Thousands of châteaux produce some of the most prestigious wines in the world."
    },
    facts: {
      de: ["Über 110.000 Hektar Weinberge.", "Hauptrebsorten: Merlot, Cabernet Sauvignon.", "Die Cité du Vin ist ein Museum, das dem Wein gewidmet ist."],
      hu: ["Több mint 110 000 hektár szőlőültetvény.", "Fő szőlőfajták: Merlot, Cabernet Sauvignon.", "A Cité du Vin egy bormúzeum."],
      ro: ["Peste 110.000 de hectare de vii.", "Soiuri principale: Merlot, Cabernet Sauvignon.", "Cité du Vin este un muzeu dedicat vinului."],
      en: ["Over 110,000 hectares of vineyards.", "Main grape varieties: Merlot, Cabernet Sauvignon.", "The Cité du Vin is a museum dedicated to wine."]
    },
    descriptionAdvanced: {
      de: "Das Weinbaugebiet Bordeaux ist wohl das berühmteste der Welt und ein Synonym für Qualität und Prestige. Es unterteilt sich in mehrere Unterregionen, darunter das Médoc, bekannt für seine Cabernet-Sauvignon-dominierten Weine, und Saint-Émilion sowie Pomerol, wo Merlot die Hauptrolle spielt. Die Klassifizierung von 1855 für die Weine des Médoc ist bis heute ein Maßstab für Exzellenz. Die Region profitiert von einem gemäßigten Meeresklima und vielfältigen Böden aus Kies, Sand und Lehm, die den Weinen ihre Komplexität verleihen. Die Weinstraßen führen durch malerische Landschaften, vorbei an Tausenden von Weingütern, den sogenannten 'Châteaux', von bescheidenen Familienbetrieben bis hin zu weltberühmten Namen. Die Cité du Vin in Bordeaux ist eine moderne Hommage an die globale Weinkultur.",
      hu: "",
      ro: "Regiunea viticolă Bordeaux este probabil cea mai faimoasă din lume, un etalon al calității. Este împărțită în sub-regiuni distincte, precum Médoc, renumită pentru vinurile pe bază de Cabernet Sauvignon, și Saint-Émilion sau Pomerol, unde domină soiul Merlot. Clasificarea vinurilor din Médoc din 1855 rămâne un standard de excelență. Clima oceanică temperată și diversitatea solurilor – de la pietriș la argilă – conferă vinurilor complexitatea lor unică. Drumurile vinului șerpuiesc printre peisaje pitorești, trecând pe lângă mii de domenii viticole, numite 'châteaux'. La Bordeaux, Cité du Vin este un tribut modern adus culturii vinului la nivel global, oferind o experiență interactivă fascinantă.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Region produziert jährlich etwa 700 Millionen Flaschen Wein.",
        "Die Weinbaugeschichte in Bordeaux reicht bis in die Römerzeit zurück.",
        "Das 'Terroir'-Konzept, die einzigartige Kombination aus Boden, Klima und Topographie, ist hier von zentraler Bedeutung.",
        "Neben Rotweinen produziert Bordeaux auch exzellente trockene Weißweine (in Graves) und Süßweine (in Sauternes).",
        "Der Place de la Bourse in Bordeaux mit seinem 'Miroir d'eau' ist ein beeindruckendes Beispiel für die Architektur des 18. Jahrhunderts.",
        "Die Appellation Saint-Émilion ist aufgrund ihrer historischen Weinlandschaft UNESCO-Weltkulturerbe.",
        "Die 'En-Primeur'-Verkostungen im Frühjahr ermöglichen es Händlern, den Wein schon vor der Abfüllung zu kaufen."
      ],
      hu: [],
      ro: [
        "Regiunea produce anual aproximativ 700 de milioane de sticle de vin.",
        "Istoria viticulturii în Bordeaux datează încă din perioada romană.",
        "Pe lângă vinuri roșii, Bordeaux produce vinuri albe seci excepționale (în Graves) și vinuri dulci (în Sauternes).",
        "Place de la Bourse din Bordeaux, cu faimoasa 'oglindă de apă', este un exemplu splendid de arhitectură din secolul al XVIII-lea.",
        "Jurisdicția Saint-Émilion este inclusă în Patrimoniul Mondial UNESCO pentru peisajul său viticol istoric.",
        "Degustările 'En Primeur' permit cumpărarea vinului înainte de a fi îmbuteliat.",
        "Conceptul de 'terroir', combinația unică de sol, climă și topografie, este fundamental aici."
      ],
      en: []
    }
  },

  {
    id: "landmark-viaduc-de-millau-extra",
    type: "landmark",
    parent: "FR-OCC",
    coords: [3.0766, 44.0772],
    name: { de: "Viadukt von Millau", hu: "Millau-i völgyhíd", ro: "Viaductul Millau", en: "Millau Viaduct" },
    description: {
      de: "Das Viadukt von Millau ist die höchste Schrägseilbrücke der Welt und ein Meisterwerk der Ingenieurskunst, entworfen von Norman Foster und Michel Virlogeux.",
      hu: "A Millau-i völgyhíd a világ legmagasabb ferdekábeles hídja, a mérnöki tudomány mesterműve, melyet Norman Foster és Michel Virlogeux tervezett.",
      ro: "Viaductul Millau este cel mai înalt pod hobanat din lume și o capodoperă a ingineriei, proiectată de Norman Foster și Michel Virlogeux.",
      en: "The Millau Viaduct is the tallest cable-stayed bridge in the world and a masterpiece of engineering, designed by Norman Foster and Michel Virlogeux."
    },
    descriptionAdvanced: {
      de: "Das Viadukt von Millau, Teil der Autobahn A75, ist eine technische und ästhetische Meisterleistung. Mit einer Höhe von 343 Metern an der Spitze eines seiner Pylone ist es die höchste Brücke der Welt. Die von dem britischen Architekten Norman Foster und dem französischen Brückeningenieur Michel Virlogeux entworfene Brücke scheint leicht über dem Tal des Tarn zu schweben. Ihre sieben schlanken Pylone und die harfenartige Anordnung der Schrägseile verleihen ihr eine filigrane Eleganz. Die Brücke wurde in nur drei Jahren gebaut und löste das Problem der massiven Staus, die sich in den Sommermonaten durch die Stadt Millau schlängelten. Sie ist nicht nur eine wichtige Verkehrsachse, sondern auch eine Touristenattraktion, die für ihre harmonische Integration in die Landschaft bewundert wird.",
      hu: "",
      ro: "Viaductul Millau, parte a autostrăzii A75, este o realizare tehnică și estetică. Cu o înălțime de 343 de metri la vârful unuia dintre piloni, este cel mai înalt pod din lume. Proiectat de arhitectul britanic Norman Foster și inginerul francez Michel Virlogeux, podul pare să plutească deasupra văii râului Tarn. Cei șapte piloni subțiri și aranjamentul cablurilor îi conferă o eleganță filigranată. Construit în doar trei ani, a rezolvat problema ambuteiajelor masive din Millau. Acum, nu este doar o arteră de trafic vitală, ci și o atracție turistică majoră, admirată pentru integrarea sa armonioasă în peisaj.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Brücke ist 2.460 Meter lang.",
        "Für den Bau wurden spezielle, selbstkletternde Schalungen verwendet.",
        "Die Fahrbahn wurde mithilfe von GPS-gesteuerten hydraulischen Systemen über die Pylone geschoben.",
        "Die Brücke ist so konzipiert, dass sie extremen Windgeschwindigkeiten und Temperaturschwankungen standhält.",
        "Die Baukosten beliefen sich auf rund 400 Millionen Euro.",
        "Sie hält den Weltrekord für die höchste Fahrbahn einer Straßenbrücke in Europa (270 Meter).",
        "Ein spezieller Aussichtspunkt und ein Besucherzentrum informieren über die Konstruktion."
      ],
      hu: [],
      ro: [
        "Podul are o lungime de 2.460 de metri.",
        "La construcția sa s-au folosit cofraje speciale, autoportante.",
        "Tablierul podului a fost lansat peste piloni folosind sisteme hidraulice ghidate prin GPS.",
        "Podul este proiectat să reziste la vânturi extreme și variații mari de temperatură.",
        "Costul construcției a fost de aproximativ 400 de milioane de euro.",
        "Deține recordul pentru cel mai înalt carosabil de pod rutier din Europa, la 270 de metri.",
        "Un punct de belvedere special și un centru pentru vizitatori oferă informații detaliate despre construcție."
      ],
      en: []
    }
  },


  {
    id: "kid-landmark-parc-asterix-extra",
    type: "kid-landmark",
    parent: "FR-HDF",
    coords: [2.5723, 49.1342],
    name: { de: "Parc Astérix", hu: "Parc Astérix", ro: "Parc Astérix", en: "Parc Astérix" },
    description: {
      de: "Der Parc Astérix ist ein Themenpark, der auf der berühmten Comic-Serie von Goscinny und Uderzo basiert. Er bietet eine Mischung aus Achterbahnen und thematischen Welten.",
      hu: "A Parc Astérix egy vidámpark, amely Goscinny és Uderzo híres képregénysorozatán alapul. Hullámvasutak és tematikus világok keverékét kínálja.",
      ro: "Parc Astérix este un parc tematic bazat pe faimoasa serie de benzi desenate de Goscinny și Uderzo. Oferă un amestec de montañe ruse și lumi tematice.",
      en: "Parc Astérix is a theme park based on the famous comic book series by Goscinny and Uderzo. It offers a mix of roller coasters and themed worlds."
    },
    descriptionAdvanced: {
      de: "Der Parc Astérix, nördlich von Paris gelegen, ist bekannt für seinen gallischen Humor und seine beeindruckenden Achterbahnen. Der Park ist detailreich thematisiert und erweckt die Welt von Asterix, Obelix und ihren Freunden zum Leben. Er ist in verschiedene Zonen unterteilt, darunter das Gallische Dorf, das Römische Reich, das antike Griechenland und Ägypten. Der Park ist besonders für seine Thrill-Rides bekannt, wie 'Toutatis', eine der schnellsten und höchsten Achterbahnen Frankreichs, und 'OzIris', ein Inverted Coaster. Neben den Achterbahnen gibt es zahlreiche Wasserattraktionen und familienfreundliche Fahrgeschäfte. Tägliche Shows mit Stunts und Charakteren aus den Comics, wie eine römische Legionärspatrouille, tragen zur immersiven Atmosphäre bei. Der Park bietet eine einzigartige, humorvolle Alternative zu anderen großen europäischen Themenparks.",
      hu: "",
      ro: "Situat la nord de Paris, Parc Astérix este renumit pentru umorul său galic și montagne-russe-urile impresionante. Parcul aduce la viață lumea lui Asterix și Obelix, fiind împărțit în zone tematice detaliate precum Satul Galic, Imperiul Roman, Grecia antică și Egipt. Este celebru pentru atracțiile sale extreme, cum ar fi 'Toutatis', unul dintre cele mai rapide roller coastere din Franța, și 'OzIris', un inverted coaster. Pe lângă acestea, parcul oferă numeroase atracții acvatice și plimbări pentru întreaga familie. Spectacolele zilnice cu cascadorii și personaje din benzile desenate completează atmosfera imersivă, oferind o alternativă unică și plină de umor la alte parcuri tematice europene.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Park wurde 1989 eröffnet.",
        "Er beherbergt die größte Holzachterbahn Europas, 'Tonnerre 2 Zeus'.",
        "Die Delfin- und Seelöwenshow im 'Théâtre de Poséidon' ist eine der Hauptattraktionen.",
        "Der Park hat drei eigene Hotels, die im Stil der Comicwelt gestaltet sind.",
        "Die Wasserbahn 'Le Grand Splatch' ist eine der längsten ihrer Art.",
        "Während der Halloween-Saison verwandelt sich der Park unter dem Motto 'Peur sur le Parc' (Angst über dem Park).",
        "Im Gegensatz zu vielen Parks liegt ein starker Fokus auf Shows und Straßentheater."
      ],
      hu: [],
      ro: [
        "Parcul a fost inaugurat în 1989.",
        "Găzduiește cel mai mare montagne russe din lemn din Europa, 'Tonnerre 2 Zeus'.",
        "Spectacolul cu delfini și lei de mare de la 'Théâtre de Poséidon' este o atracție principală.",
        "Parcul are trei hoteluri proprii, tematizate în stilul benzilor desenate.",
        "Atracția acvatică 'Le Grand Splatch' este una dintre cele mai lungi de acest fel.",
        "În timpul sezonului de Halloween, parcul se transformă sub tema 'Peur sur le Parc' (Frică în parc).",
        "Parcul pune un accent deosebit pe spectacole și teatru stradal, pe lângă atracțiile clasice."
      ],
      en: []
    }
  },

  {
    id: "mountain-aiguille-du-midi-extra",
    type: "mountain",
    parent: "FR-ARA",
    coords: [6.8871, 45.8795],
    name: { de: "Aiguille du Midi", hu: "Aiguille du Midi", ro: "Aiguille du Midi", en: "Aiguille du Midi" },
    description: {
      de: "Die Aiguille du Midi ist ein 3.842 m hoher Berg im Mont-Blanc-Massiv. Eine Seilbahn führt zum Gipfel und bietet einen spektakulären Blick auf die Alpen.",
      hu: "Az Aiguille du Midi egy 3842 méter magas hegy a Mont Blanc-masszívumban. Egy felvonó visz fel a csúcsra, ahonnan lenyűgöző kilátás nyílik az Alpokra.",
      ro: "Aiguille du Midi este un munte de 3.842 m în masivul Mont Blanc. O telecabină duce spre vârf, oferind o priveliște spectaculoasă asupra Alpilor.",
      en: "The Aiguille du Midi is a 3,842m mountain in the Mont Blanc massif. A cable car leads to the summit, offering a spectacular view of the Alps."
    },
    descriptionAdvanced: {
      de: "Die Aiguille du Midi, was 'Mittagsnadel' bedeutet, ist einer der spektakulärsten Aussichtspunkte in den Alpen. Die Seilbahn, die von Chamonix aus startet, überwindet in zwei Sektionen einen Höhenunterschied von über 2.800 Metern. Von den Gipfelterrasse aus bietet sich ein unvergleichliches 360-Grad-Panorama auf die französischen, schweizerischen und italienischen Alpen, mit dem Mont Blanc direkt gegenüber. Die Attraktion 'Step into the Void' (Le Pas dans le Vide) ist ein Glaskäfig mit Glasboden, der über einen 1.000 Meter tiefen Abgrund ragt. Im Sommer ist die Aiguille du Midi der Ausgangspunkt für die Panoramaseilbahn 'Vallée Blanche', die über die Gletscher bis nach Pointe Helbronner in Italien führt. Für Bergsteiger ist es der Startpunkt für viele berühmte Hochtouren.",
      hu: "",
      ro: "Aiguille du Midi, 'Acul de la Amiază', este unul dintre cele mai spectaculoase puncte de belvedere din Alpi. Telecabina din Chamonix urcă peste 2.800 de metri în două etape. De pe terasele de pe vârf, se deschide o panoramă de 360 de grade asupra Alpilor francezi, elvețieni și italieni, cu Mont Blanc vizavi. Atracția 'Pas în gol' (Le Pas dans le Vide) este o cușcă de sticlă suspendată deasupra unui abis de 1.000 de metri. Vara, este punctul de plecare pentru telecabina panoramică 'Vallée Blanche' spre Italia și pentru numeroase trasee de alpinism renumite.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Seilbahn wurde 1955 eröffnet und hielt 20 Jahre lang den Rekord als höchste Seilbahn der Welt.",
        "Der Name 'Midi' kommt daher, dass die Sonne zur Mittagszeit direkt über dem Gipfel steht, wenn man von Chamonix aus blickt.",
        "Auf dem Gipfel befindet sich ein Museum über die Geschichte des Alpinismus.",
        "Die Luft auf dieser Höhe enthält nur etwa 60% des Sauerstoffs im Vergleich zum Meeresspiegel.",
        "Ein in den Fels gehauener Aufzug verbindet die Ankunftsstation mit der höchsten Terrasse.",
        "Die Aiguille du Midi ist der Ausgangspunkt für die berühmte 20 km lange Skiroute Vallée Blanche.",
        "Der Bau der Seilbahn war eine technische Meisterleistung, die vier Jahre dauerte."
      ],
      hu: [],
      ro: [
        "Telecabina, inaugurată în 1955, deține recordul pentru cea mai rapidă ascensiune verticală din lume.",
        "Numele 'Midi' provine de la faptul că soarele se află direct deasupra vârfului la prânz, văzut din Chamonix.",
        "Aerul la această altitudine conține doar aproximativ 60% din oxigenul de la nivelul mării.",
        "Un lift săpat în stâncă leagă stația de sosire de terasa superioară la 3.842 m.",
        "Aiguille du Midi este punctul de plecare pentru faimosul traseu de schi off-piste Vallée Blanche, lung de 20 km.",
        "Construcția telecabinei a durat patru ani și a fost o provocare tehnică majoră.",
        "Vara, telecabina 'Panoramic Mont-Blanc' leagă Aiguille du Midi de Pointe Helbronner (Italia)."
      ],
      en: []
    }
  },





  {
    id: "lake-lake-geneva-extra",
    type: "lake",
    parent: "FR-ARA",
    coords: [6.4, 46.4],
    name: { de: "Genfersee", hu: "Genfi-tó", ro: "Lacul Geneva", en: "Lake Geneva" },
    description: {
      de: "Der Genfersee, an der Grenze zwischen Frankreich und der Schweiz gelegen, ist einer der größten Seen Westeuropas. Er ist bekannt für seine eleganten Städte und die Alpenkulisse.",
      hu: "A Genfi-tó, amely Franciaország és Svájc határán fekszik, Nyugat-Európa egyik legnagyobb tava. Elegáns városairól és alpesi hátteréről ismert.",
      ro: "Lacul Geneva, situat la granița dintre Franța și Elveția, este unul dintre cele mai mari lacuri din Europa de Vest. Este cunoscut pentru orașele sale elegante și peisajul alpin.",
      en: "Lake Geneva, located on the border between France and Switzerland, is one of the largest lakes in Western Europe. It is known for its elegant towns and Alpine backdrop."
    },
    descriptionAdvanced: {
      de: "Der Genfersee, von den Franzosen Lac Léman genannt, ist ein riesiger, sichelförmiger See, der sich Frankreich und die Schweiz teilen. Er wird von der Rhône durchflossen und ist von den Alpen im Süden und dem Jura-Gebirge im Norden umgeben. Das französische Ufer ist bekannt für seine charmanten Kurorte wie Évian-les-Bains, berühmt für sein Mineralwasser, und Thonon-les-Bains. Das mittelalterliche Dorf Yvoire ist ein weiteres Juwel am Ufer. Der See bietet ein mildes, fast mediterranes Mikroklima, das den Weinbau am Ufer ermöglicht (z. B. in Lavaux auf der Schweizer Seite, UNESCO-Weltkulturerbe). Die Schifffahrt mit historischen Raddampfern ist eine beliebte Art, den See zu erkunden und die Aussicht auf die Alpen und die eleganten Villen am Ufer zu genießen.",
      hu: "",
      ro: "Lacul Geneva, cunoscut de francezi ca Lac Léman, este un lac imens, în formă de semilună, împărțit între Franța și Elveția. Străbătut de râul Ron, este înconjurat de Alpi la sud și de Munții Jura la nord. Malul francez este renumit pentru stațiunile balneare cochete precum Évian-les-Bains, faimoasă pentru apa sa minerală, și Thonon-les-Bains. Satul medieval Yvoire este o altă bijuterie. Lacul are o microclimă blândă, aproape mediteraneană, favorabilă viticulturii. Croazierele cu vapoare cu aburi istorice sunt o modalitate populară de a explora lacul, admirând Alpii și vilele elegante de pe mal.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der See hat eine Fläche von 580 km², wovon etwa 40% zu Frankreich gehören.",
        "Er ist der größte See in den Alpen und der größte See Westeuropas.",
        "Die tiefste Stelle des Sees misst 310 Meter.",
        "Das Schloss Chillon auf der Schweizer Seite ist eine der meistbesuchten historischen Stätten der Schweiz.",
        "Der Jet d'Eau in Genf ist eine riesige Wasserfontäne und ein Wahrzeichen des Sees.",
        "Der See ist ein wichtiges Trinkwasserreservoir für die umliegenden Regionen.",
        "Zahlreiche Regatten und Wassersportveranstaltungen finden auf dem See statt, darunter die Bol d'Or."
      ],
      hu: [],
      ro: [
        "Lacul are o suprafață de 580 km², din care aproximativ 40% aparțin Franței.",
        "Este cel mai mare lac din Alpi și cel mai mare lac din Europa de Vest.",
        "Cel mai adânc punct al lacului măsoară 310 metri.",
        "Castelul Chillon de pe malul elvețian este unul dintre cele mai vizitate situri istorice din Elveția.",
        "Jet d'Eau din Geneva este o fântână arteziană imensă și un simbol al lacului.",
        "Lacul este un rezervor important de apă potabilă pentru regiunile înconjurătoare.",
        "Numeroase regate și evenimente nautice au loc pe lac, inclusiv celebra Bol d'Or."
      ],
      en: []
    }
  },
  {
    id: "forest-fontainebleau-forest-extra",
    type: "forest",
    parent: "FR-IDF",
    coords: [2.699, 48.404],
    name: { de: "Wald von Fontainebleau", hu: "Fontainebleau-i erdő", ro: "Pădurea Fontainebleau", en: "Fontainebleau Forest" },
    description: {
      de: "Der Wald von Fontainebleau ist ein riesiges Waldgebiet südlich von Paris, das für seine Felsformationen, die zum Bouldern genutzt werden, und seine reiche Geschichte berühmt ist.",
      hu: "A Fontainebleau-i erdő egy hatalmas erdőterület Párizstól délre, híres a sziklaformációiról, amelyeket boulderezésre használnak, valamint gazdag történelméről.",
      ro: "Pădurea Fontainebleau este o pădure vastă la sud de Paris, renumită pentru formațiunile sale stâncoase folosite pentru bouldering și pentru istoria sa bogată.",
      en: "The Forest of Fontainebleau is a vast forest south of Paris, famous for its rock formations used for bouldering and its rich history."
    },
    descriptionAdvanced: {
      de: "Der Wald von Fontainebleau, nur eine Stunde von Paris entfernt, ist eine einzigartige Naturlandschaft. Er ist weltberühmt für seine Sandstein-Felsblöcke, die ihn zu einem der wichtigsten und historischsten Bouldergebiete der Welt machen. Kletterer aus aller Welt kommen hierher, um die unzähligen 'Parcours' zu bewältigen. Aber der Wald ist mehr als nur ein Kletterparadies. Er erstreckt sich über 25.000 Hektar und bietet ein vielfältiges Mosaik aus Eichen- und Kiefernwäldern, Sandheiden und Felsplateaus. Im 19. Jahrhundert zog der Wald Künstler der Schule von Barbizon an, Pioniere der Freilichtmalerei. Das prächtige Schloss Fontainebleau, das über Jahrhunderte als Residenz für französische Monarchen diente, liegt im Herzen des Waldes und bildet mit ihm eine untrennbare historische Einheit.",
      hu: "",
      ro: "Pădurea Fontainebleau, la doar o oră de Paris, este un peisaj natural unic. Este renumită la nivel mondial pentru blocurile sale de gresie, care o fac una dintre cele mai importante zone de bouldering din lume. Cățărători din întreaga lume vin aici pentru a parcurge nenumăratele trasee. Dar pădurea este mai mult decât un paradis al cățărătorilor. Se întinde pe 25.000 de hectare, oferind un mozaic de păduri de stejar și pin, lande de nisip și platouri stâncoase. În secolul al XIX-lea, a atras artiștii Școlii de la Barbizon, pionieri ai picturii în aer liber. Castelul Fontainebleau, reședință a monarhilor francezi, se află în inima pădurii, formând o unitate istorică.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Wald hat über 1.600 Kilometer markierte Wanderwege.",
        "Er wurde 1861 als eines der ersten Naturschutzgebiete der Welt unter Schutz gestellt.",
        "Die Felsformationen sind das Ergebnis von 30 Millionen Jahre alter Erosion von Sandablagerungen.",
        "Die 'École de Barbizon' (Schule von Barbizon) war wegweisend für den Impressionismus.",
        "Das Schloss Fontainebleau ist mit über 1.500 Zimmern eines der größten Schlösser Frankreichs.",
        "Der Wald war über Jahrhunderte ein königliches Jagdrevier.",
        "Einige Eichen im Wald sind über 500 Jahre alt."
      ],
      hu: [],
      ro: [
        "Pădurea are peste 1.600 de kilometri de poteci marcate pentru drumeții.",
        "A fost desemnată una dintre primele rezervații naturale din lume în 1861.",
        "Formațiunile stâncoase sunt rezultatul erodării unor depozite de nisip vechi de 30 de milioane de ani.",
        "Școala de la Barbizon a fost un precursor al impresionismului.",
        "Castelul Fontainebleau, cu peste 1.500 de camere, este unul dintre cele mai mari din Franța.",
        "Pădurea a fost timp de secole un domeniu de vânătoare regal.",
        "Unii stejari din pădure au peste 500 de ani."
      ],
      en: []
    }
  },
  {
    id: "agriculture-champagne-region-extra",
    type: "agriculture",
    parent: "FR-GES",
    coords: [4.3333, 49.1667],
    name: { de: "Champagne-Region", hu: "Champagne borvidék", ro: "Regiunea Champagne", en: "Champagne Region" },
    description: {
      de: "Die Champagne ist die einzige Region der Welt, in der echter Champagner hergestellt werden darf. Die Weinberge, Häuser und Keller sind UNESCO-Weltkulturerbe.",
      hu: "Champagne az egyetlen régió a világon, ahol valódi pezsgőt lehet készíteni. A szőlőültetvények, a házak és a pincék az UNESCO Világörökség részét képezik.",
      ro: "Champagne este singura regiune din lume unde se poate produce șampanie autentică. Viile, casele și pivnițele sunt situri ale Patrimoniului Mondial UNESCO.",
      en: "Champagne is the only region in the world where true champagne can be produced. Its vineyards, houses, and cellars are a UNESCO World Heritage site."
    },
    descriptionAdvanced: {
      de: "Die Champagne, eine historische Provinz im Nordosten Frankreichs, ist untrennbar mit dem berühmtesten Schaumwein der Welt verbunden. Nur Wein, der aus Trauben dieser gesetzlich festgelegten Appellation stammt und nach der 'méthode traditionnelle' (Flaschengärung) hergestellt wird, darf sich Champagner nennen. Die einzigartigen Kreideböden (craie) der Region speichern Wasser und Wärme und verleihen den Trauben (hauptsächlich Pinot Noir, Meunier und Chardonnay) ihre besondere Finesse. Die Städte Reims und Épernay sind die Zentren der Champagnerproduktion. Unter Épernays 'Avenue de Champagne' erstrecken sich über 100 Kilometer Keller, in denen Millionen von Flaschen reifen. In Reims wurden die französischen Könige gekrönt, und die Kathedrale von Reims ist ein Meisterwerk der Hochgotik. 2015 wurden die Hänge, Häuser und Keller der Champagne zum UNESCO-Weltkulturerbe erklärt.",
      hu: "",
      ro: "Champagne, o provincie istorică din nord-estul Franței, este legată de cel mai faimos vin spumant din lume. Doar vinul din această regiune delimitată, produs prin 'méthode traditionnelle', poate fi numit șampanie. Solurile unice de cretă (craie) rețin apa și căldura, conferind strugurilor (Pinot Noir, Meunier, Chardonnay) finețea lor specială. Reims și Épernay sunt centrele producției. Sub 'Avenue de Champagne' din Épernay se întind peste 100 km de pivnițe unde se maturează milioane de sticle. La Reims, unde erau încoronați regii Franței, catedrala este o capodoperă gotică. În 2015, viile, casele și pivnițele din Champagne au fost incluse în Patrimoniul Mondial UNESCO.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Region hat etwa 34.000 Hektar Weinberge.",
        "Der Druck in einer Champagnerflasche beträgt etwa 6 bar, das Dreifache eines Autoreifens.",
        "Dom Pérignon, ein Mönch aus dem 17. Jahrhundert, trug maßgeblich zur Entwicklung der Champagnerherstellung bei.",
        "Die 'Crayères' sind alte Kreidegruben, die heute als ideale Reifekeller dienen.",
        "Es gibt etwa 300 Champagnerhäuser und über 15.000 Winzer.",
        "Die Kathedrale von Reims war der Krönungsort für fast alle französischen Könige.",
        "Während des Ersten Weltkriegs verlief die Frontlinie durch die Champagne, und viele Keller dienten als Schutzräume."
      ],
      hu: [],
      ro: [
        "Regiunea are aproximativ 34.000 de hectare de vii.",
        "Presiunea într-o sticlă de șampanie este de aproximativ 6 bari, triplu față de o anvelopă auto.",
        "Dom Pérignon, un călugăr din secolul al XVII-lea, a contribuit semnificativ la dezvoltarea metodei de producție.",
        "'Crayères' sunt vechi cariere de cretă, acum folosite ca pivnițe ideale pentru maturare.",
        "Există aproximativ 300 de case de șampanie și peste 15.000 de viticultori.",
        "Catedrala din Reims a fost locul de încoronare pentru aproape toți regii Franței.",
        "În Primul Război Mondial, linia frontului trecea prin Champagne, iar pivnițele au servit ca adăposturi."
      ],
      en: []
    }
  },

  {
    id: "castle-chateau-haut-koenigsbourg-extra",
    type: "castle",
    parent: "FR-GES",
    coords: [7.344, 48.249],
    name: { de: "Hohkönigsburg", hu: "Haut-Koenigsbourg kastély", ro: "Castelul Haut-Koenigsbourg", en: "Château du Haut-Koenigsbourg" },
    description: {
      de: "Die Hohkönigsburg im Elsass ist eine restaurierte Bergfestung aus dem 12. Jahrhundert, die einen atemberaubenden Blick über die Rheinebene bietet.",
      hu: "A Haut-Koenigsbourg kastély Elzászban egy 12. századi, helyreállított hegyi erőd, ahonnan lenyűgöző kilátás nyílik a Rajna-völgyre.",
      ro: "Castelul Haut-Koenigsbourg din Alsacia este o fortăreață montană restaurată din secolul al XII-lea, oferind o priveliște uluitoare asupra câmpiei Rinului.",
      en: "The Château du Haut-Koenigsbourg in Alsace is a restored 12th-century mountain fortress offering a breathtaking view over the Rhine plain."
    },
    descriptionAdvanced: {
      de: "Die Hohkönigsburg thront majestätisch auf einem 757 Meter hohen Felsvorsprung in den Vogesen und überblickt die elsässische Weinstraße und die Rheinebene. Die ursprüngliche Burg aus dem 12. Jahrhundert wurde im Dreißigjährigen Krieg zerstört und blieb jahrhundertelang eine Ruine. Anfang des 20. Jahrhunderts, als das Elsass zum Deutschen Reich gehörte, ließ Kaiser Wilhelm II. die Burg vollständig restaurieren. Der Architekt Bodo Ebhardt rekonstruierte sie nach dem Vorbild einer idealisierten mittelalterlichen Ritterburg. Das Ergebnis ist eine beeindruckende Festung mit Zugbrücken, einem massiven Bergfried, Waffenkammern und herrschaftlichen Wohnräumen, die einen lebendigen Eindruck vom Leben auf einer Burg im 15. Jahrhundert vermitteln. Sie ist heute ein Symbol der regionalen Geschichte und eine der populärsten Touristenattraktionen Frankreichs.",
      hu: "",
      ro: "Castelul Haut-Koenigsbourg domină maiestuos de pe o stâncă de 757 de metri în Munții Vosgi, supraveghind Drumul Vinului din Alsacia și Câmpia Rinului. Construit în secolul al XII-lea, a fost distrus în Războiul de 30 de Ani. La începutul secolului XX, Kaiserul Wilhelm al II-lea a ordonat restaurarea sa completă, recreând o fortăreață medievală idealizată. Rezultatul este o cetate impresionantă, cu poduri mobile, un donjon masiv și camere somptuoase, oferind o imagine vie a vieții de castel din secolul al XV-lea. Astăzi, este un simbol al istoriei regionale și una dintre cele mai populare atracții turistice din Franța.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Restaurierung dauerte von 1900 bis 1908.",
        "Bei klarem Wetter kann man von der Burg aus die Alpen sehen.",
        "Die Burg wurde so restauriert, wie sie im 15. Jahrhundert ausgesehen haben könnte.",
        "Sie diente als Kulisse für mehrere Filme, darunter Jean Renoirs 'Die große Illusion'.",
        "Die Burg verfügt über einen mittelalterlichen Garten.",
        "Der Name 'Koenigsbourg' bedeutet 'Königsburg'.",
        "Die Wasserversorgung wurde durch eine große Zisterne im Burghof sichergestellt."
      ],
      hu: [],
      ro: [
        "Restaurarea castelului a durat între 1900 și 1908.",
        "În zilele senine, de pe castel se pot vedea Alpii.",
        "Restaurarea reflectă aspectul pe care l-ar fi putut avea castelul în secolul al XV-lea.",
        "A servit drept decor pentru mai multe filme, inclusiv 'La Grande Illusion' de Jean Renoir.",
        "Castelul are o grădină medievală recreată.",
        "Numele 'Koenigsbourg' înseamnă 'castelul regelui'.",
        "Alimentarea cu apă era asigurată de o cisternă mare situată în curtea interioară."
      ],
      en: []
    }
  },
  {
    id: "city-clermont-ferrand-extra",
    type: "city",
    parent: "FR-ARA",
    coords: [3.0870, 45.7772],
    name: { de: "Clermont-Ferrand", hu: "Clermont-Ferrand", ro: "Clermont-Ferrand", en: "Clermont-Ferrand" },
    description: {
      de: "Clermont-Ferrand liegt im Zentralmassiv und ist berühmt für seine Kette von Vulkanen, die Chaîne des Puys, und als Heimat des Reifenherstellers Michelin.",
      hu: "Clermont-Ferrand a Francia-középhegységben fekszik, híres a Chaîne des Puys nevű vulkáni láncáról és a Michelin gumiabroncsgyártó otthonaként.",
      ro: "Clermont-Ferrand se află în Masivul Central și este renumit pentru lanțul său de vulcani, Chaîne des Puys, și ca sediu al producătorului de anvelope Michelin.",
      en: "Clermont-Ferrand is located in the Massif Central and is famous for its chain of volcanoes, the Chaîne des Puys, and as the home of the Michelin tire company."
    },
    descriptionAdvanced: {
      de: "Clermont-Ferrand ist eine einzigartige Stadt, die auf vulkanischem Boden gebaut wurde. Sie ist umgeben von der Chaîne des Puys, einer Kette von rund 80 schlafenden Vulkanen, die seit 2018 zum UNESCO-Weltnaturerbe gehört. Dieses vulkanische Erbe ist überall in der Stadt sichtbar, insbesondere an der gotischen Kathedrale Notre-Dame-de-l'Assomption, die vollständig aus dunklem Volvic-Lavastein erbaut ist. Die Stadt ist auch die Wiege und der weltweite Hauptsitz des Reifenherstellers Michelin. Das Museum 'L'Aventure Michelin' zeichnet die Geschichte des Unternehmens und seines berühmten Maskottchens, des Michelin-Männchens 'Bibendum', nach. Das historische Zentrum von Montferrand, das im Mittelalter eine rivalisierende Stadt war, ist gut erhalten und bietet einen reizvollen Kontrast zum belebteren Clermont.",
      hu: "",
      ro: "Clermont-Ferrand este un oraș unic, construit pe teren vulcanic și înconjurat de Chaîne des Puys, un lanț de 80 de vulcani stinși, sit al Patrimoniului Mondial UNESCO. Această moștenire vulcanică este vizibilă peste tot, în special la catedrala gotică Notre-Dame-de-l'Assomption, construită integral din piatră de lavă Volvic. Orașul este, de asemenea, leagănul și sediul mondial al producătorului de anvelope Michelin. Muzeul 'L'Aventure Michelin' prezintă istoria companiei și a celebrului său personaj, Bibendum. Centrul istoric din Montferrand, un oraș rival în Evul Mediu, oferă un contrast fermecător cu agitația din Clermont.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Stadt entstand aus der Vereinigung der rivalisierenden Städte Clermont und Montferrand im 17. Jahrhundert.",
        "Der Place de Jaude ist der zentrale Platz der Stadt mit einer Statue von Vercingetorix.",
        "Der Puy de Dôme, der höchste Vulkan der Kette, ist ein beliebtes Ausflugsziel.",
        "Clermont-Ferrand ist Gastgeber eines der weltweit wichtigsten Kurzfilmfestivals.",
        "Der Mathematiker und Philosoph Blaise Pascal wurde in Clermont geboren.",
        "Die Basilika Notre-Dame-du-Port ist ein Meisterwerk der romanischen Kunst und UNESCO-Weltkulturerbe.",
        "Die Stadt ist ein wichtiges Zentrum für Rugby in Frankreich; der Verein ASM Clermont Auvergne ist sehr erfolgreich."
      ],
      hu: [],
      ro: [
        "Orașul s-a format prin unirea orașelor rivale Clermont și Montferrand în secolul al XVII-lea.",
        "Place de Jaude este piața centrală a orașului, cu o statuie a lui Vercingetorix.",
        "Puy de Dôme, cel mai înalt vulcan din lanț, este o destinație populară pentru excursii.",
        "Clermont-Ferrand găzduiește unul dintre cele mai importante festivaluri de scurtmetraj din lume.",
        "Matematicianul și filosoful Blaise Pascal s-a născut la Clermont.",
        "Bazilica Notre-Dame-du-Port este o capodoperă a artei romanice, inclusă în patrimoniul UNESCO.",
        "Orașul este un centru important pentru rugby în Franța, cu echipa de succes ASM Clermont Auvergne."
      ],
      en: []
    }
  },
  {
    id: "kid-landmark-futuroscope-extra",
    type: "kid-landmark",
    parent: "FR-NAQ",
    coords: [0.3636, 46.6631],
    name: { de: "Futuroscope", hu: "Futuroscope", ro: "Futuroscope", en: "Futuroscope" },
    description: {
      de: "Futuroscope ist ein einzigartiger Themenpark, der sich auf Multimedia, Kino und futuristische Technologien konzentriert. Seine Pavillons haben auffällige, moderne Architekturen.",
      hu: "A Futuroscope egy egyedülálló vidámpark, amely a multimédiára, a moira és a futurisztikus technológiákra összpontosít. Pavilonjai feltűnő, modern építészeti stílusúak.",
      ro: "Futuroscope este un parc tematic unic axat pe multimedia, cinema și tehnologii futuriste. Pavilioanele sale au o arhitectură modernă și izbitoare.",
      en: "Futuroscope is a unique theme park focusing on multimedia, cinema, and futuristic technologies. Its pavilions have striking, modern architectures."
    },
    descriptionAdvanced: {
      de: "Futuroscope, in der Nähe von Poitiers gelegen, ist ein Themenpark, der sich von allen anderen unterscheidet. Statt traditioneller Achterbahnen konzentriert er sich auf immersive Erlebnisse durch audiovisuelle Technologien. Die Attraktionen basieren auf 3D- und 4D-Kino, riesigen Leinwänden, Robotik und interaktiven Shows. Jeder Pavillon hat eine einzigartige, futuristische Architektur, die oft auf Kristallen, Kugeln oder Würfeln basiert. Zu den Highlights gehören Attraktionen wie 'Der außergewöhnliche Flug', bei dem die Besucher mit den Füßen in der Luft über die fünf Kontinente schweben, oder 'Chasseurs de Tornades', das als beste Attraktion der Welt ausgezeichnet wurde. Der Park verbindet Unterhaltung mit Bildung und bietet Einblicke in die Welt von morgen, von der Raumfahrt bis zur Robotik. Die Abendshow, die auf einem See stattfindet, ist ein spektakulärer Abschluss des Tages mit Wasser, Licht und Pyrotechnik.",
      hu: "",
      ro: "Futuroscope, lângă Poitiers, este un parc tematic diferit de oricare altul. În loc de montagne-russe tradiționale, se concentrează pe experiențe imersive prin tehnologii audiovizuale: cinematografe 3D și 4D, ecrane gigantice și spectacole interactive. Fiecare pavilion are o arhitectură unică, futuristă. Printre atracțiile de top se numără 'Zborul Extraordinar', unde vizitatorii plutesc deasupra continentelor, și 'Vânătorii de Tornade', premiată ca cea mai bună atracție din lume. Parcul combină divertismentul cu educația, oferind perspective asupra viitorului, de la călătorii spațiale la robotică. Spectacolul de seară pe lac încheie ziua într-un mod spectaculos.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Park wurde auf Initiative des Generalrats des Départements Vienne gegründet.",
        "Das 'Kinémax' ist ein Pavillon in Form eines riesigen Kristalls mit einer 600 m² großen Leinwand.",
        "Die Attraktion 'Arthur, l'Aventure 4D' wurde von Luc Besson kreiert.",
        "Das 'Aerobar' ermöglicht es den Gästen, einen Drink in 35 Metern Höhe zu genießen.",
        "Futuroscope ist der zweitgrößte Freizeitpark Frankreichs nach Besucherzahlen.",
        "Der Park wird ständig erneuert, wobei jedes Jahr neue Attraktionen hinzukommen.",
        "Er ist Teil eines größeren Technologieparks, der Unternehmen und Forschungseinrichtungen beherbergt."
      ],
      hu: [],
      ro: [
        "Parcul a fost fondat la inițiativa Consiliului General al departamentului Vienne.",
        "'Kinémax' este un pavilion în formă de cristal gigant cu un ecran de 600 m².",
        "Atracția 'Arthur, l'Aventure 4D' a fost creată de regizorul Luc Besson.",
        "'Aerobar' permite oaspeților să savureze o băutură la 35 de metri înălțime.",
        "Futuroscope este al doilea cel mai mare parc de distracții din Franța după numărul de vizitatori.",
        "Parcul este reînnoit constant, adăugând noi atracții în fiecare an.",
        "Face parte dintr-un parc tehnologic mai mare, care găzduiește companii și institute de cercetare."
      ],
      en: []
    }
  },

  {
    id: "animal-habitat-zoo-de-beauval-extra",
    type: "animal-habitat",
    parent: "FR-CVL",
    coords: [1.3533, 47.2464],
    name: { de: "ZooParc de Beauval", hu: "Beauval Állatkert", ro: "Grădina Zoologică Beauval", en: "ZooParc de Beauval" },
    description: {
      de: "Der ZooParc de Beauval zählt zu den besten Zoos der Welt und beherbergt eine außergewöhnliche Vielfalt an Tieren, darunter Riesenpandas.",
      hu: "A ZooParc de Beauval a világ legjobb állatkertjei közé tartozik, és rendkívüli állatfaj-sokféleségnek ad otthont, beleértve az óriáspandákat is.",
      ro: "ZooParc de Beauval este considerată una dintre cele mai bune grădini zoologice din lume, găzduind o varietate excepțională de animale, inclusiv panda uriași.",
      en: "ZooParc de Beauval is ranked among the best zoos in the world, housing an exceptional variety of animals, including giant pandas."
    },
    descriptionAdvanced: {
      de: "Der ZooParc de Beauval, im Herzen des Loire-Tals gelegen, ist mehr als nur ein Zoo; er ist ein führendes Zentrum für den Artenschutz. Er begann als kleiner Vogelpark und hat sich zu einem der angesehensten Zoos der Welt entwickelt. Sein größter Erfolg ist die Haltung und Zucht von Riesenpandas, die als Leihgabe aus China hier leben. Die Geburt von Panda-Zwillingen im Jahr 2021 war ein europaweites Ereignis. Der Zoo ist in große, thematische Zonen unterteilt, wie die afrikanische Savanne, ein riesiges Äquatorial-Dom und eine Seilbahn, die 'Le Nuage de Beauval', die einen Überblick über den Park bietet. Beauval ist stark in über 50 Erhaltungsprogrammen weltweit involviert und investiert einen erheblichen Teil seiner Einnahmen in den Schutz bedrohter Arten in ihrem natürlichen Lebensraum.",
      hu: "",
      ro: "ZooParc de Beauval, în inima Văii Loarei, este mai mult decât o grădină zoologică; este un centru de top pentru conservarea speciilor. A început ca un mic parc de păsări și a devenit unul dintre cele mai respectate zoo-uri din lume. Cel mai mare succes al său este găzduirea și reproducerea urșilor panda gigant, împrumutați din China; nașterea gemenilor panda în 2021 a fost un eveniment european. Parcul este împărțit în zone tematice, precum savana africană, și are un dom ecuatorial imens. Telecabina 'Le Nuage de Beauval' oferă vederi panoramice. Beauval este implicat în peste 50 de programe de conservare la nivel mondial.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Beauval beherbergt rund 800 verschiedene Tierarten.",
        "Der Äquatorial-Dom ist ein 1 Hektar großes Gewächshaus, das Tiere aus Äquatorialafrika, Asien und Südamerika beherbergt.",
        "Der Zoo wurde 1980 von Françoise Delord gegründet.",
        "Beauval war der erste Zoo in Frankreich, dem die Zucht von weißen Tigern und Nashörnern gelang.",
        "Es gibt tägliche Shows, darunter eine beeindruckende Greifvogelschau und eine Seelöwenshow.",
        "Der Zoo betreibt eine eigene Tierklinik, die zu den modernsten in Europa zählt.",
        "Manatis, Koalas und Okapis sind nur einige der seltenen Tiere, die in Beauval zu sehen sind."
      ],
      hu: [],
      ro: [
        "Beauval găzduiește aproximativ 800 de specii diferite de animale.",
        "Domul Ecuatorial este o seră de 1 hectar care adăpostește animale din Africa, Asia și America de Sud.",
        "Grădina zoologică a fost fondată în 1980 de Françoise Delord.",
        "Beauval a fost primul zoo din Franța care a reușit să reproducă tigri albi și rinoceri albi.",
        "Există spectacole zilnice, inclusiv o prezentare impresionantă cu păsări de pradă și un spectacol cu lei de mare.",
        "Grădina zoologică are propria clinică veterinară, una dintre cele mai moderne din Europa.",
        "Lamantini, koala și okapi sunt doar câteva dintre animalele rare ce pot fi văzute la Beauval."
      ],
      en: []
    }
  },
  {
    id: "industry-aero-valley-bordeaux-extra",
    type: "industry",
    parent: "FR-NAQ",
    coords: [-0.7153, 44.8398],
    name: { de: "Aerospace Valley Bordeaux", hu: "Aerospace Valley Bordeaux", ro: "Aerospace Valley Bordeaux", en: "Aerospace Valley Bordeaux" },
    description: {
      de: "Bordeaux ist ein wichtiges Zentrum der französischen Luft- und Raumfahrtindustrie mit Unternehmen wie Dassault Aviation, ArianeGroup und Thales.",
      hu: "Bordeaux a francia repülőgép- és űripar fontos központja, ahol olyan vállalatok működnek, mint a Dassault Aviation, az ArianeGroup és a Thales.",
      ro: "Bordeaux este un centru major pentru industria aerospațială franceză, cu companii precum Dassault Aviation, ArianeGroup și Thales.",
      en: "Bordeaux is a major hub for the French aerospace industry, with companies like Dassault Aviation, ArianeGroup, and Thales."
    },
    descriptionAdvanced: {
      de: "Während Toulouse oft als das Zentrum der zivilen Luftfahrt gilt, ist Bordeaux eine Hochburg für militärische Luftfahrt, Geschäftsjets und Raumfahrt. Die Region ist Teil des 'Aerospace Valley', eines der weltweit führenden Cluster für Luft- und Raumfahrt. In Mérignac bei Bordeaux befindet sich die Endmontagelinie für die Falcon-Geschäftsjets von Dassault Aviation. ArianeGroup entwickelt und produziert hier die Trägerraketen der Ariane-Familie sowie strategische Raketen für die französische Abschreckungstruppe. Thales ist ebenfalls ein wichtiger Akteur mit Expertise in Cockpit-Systemen, Radar- und Drohnentechnologie. Dieser Sektor ist ein entscheidender Motor für die regionale Wirtschaft, der Tausende von hochqualifizierten Arbeitsplätzen schafft und ein umfangreiches Netzwerk von Zulieferern und Forschungseinrichtungen unterstützt.",
      hu: "",
      ro: "În timp ce Toulouse este centrul aviației civile, Bordeaux este un bastion al aviației militare, al avioanelor de afaceri și al industriei spațiale. Regiunea face parte din 'Aerospace Valley', un cluster de top la nivel mondial. La Mérignac, lângă Bordeaux, se află linia finală de asamblare pentru avioanele de afaceri Falcon de la Dassault Aviation. ArianeGroup dezvoltă și produce aici rachetele purtătoare Ariane și rachete strategice. Thales este, de asemenea, un jucător cheie, cu expertiză în sisteme de cockpit, radare și drone. Acest sector este un motor vital pentru economia regională, creând mii de locuri de muncă înalt calificate.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Jeder zweite ausgelieferte Geschäftsjet weltweit hat Avionik von Thales aus Bordeaux an Bord.",
        "Das 'Laser Mégajoule' in der Nähe von Bordeaux ist eine der leistungsstärksten Lasereinrichtungen der Welt und dient der Forschung für die Kernfusion.",
        "Der Flughafen Bordeaux-Mérignac ist ein wichtiger Standort für die Flugzeugwartung.",
        "Die Region ist führend in der Entwicklung von Verbundwerkstoffen für die Luftfahrt.",
        "Spezialisierte Ausbildungsgänge an der Universität Bordeaux und an Ingenieurschulen versorgen die Industrie mit Nachwuchskräften.",
        "Die Drohnenindustrie ist ein wachsender Sektor in der Region.",
        "Das 'Bordeaux Technowest' fördert Start-ups in den Bereichen Luft- und Raumfahrt sowie Drohnentechnologie."
      ],
      hu: [],
      ro: [
        "Unul din două avioane de afaceri livrate la nivel mondial are la bord avionică de la Thales din Bordeaux.",
        "'Laser Mégajoule', lângă Bordeaux, este una dintre cele mai puternice instalații laser din lume, folosită în cercetarea fuziunii nucleare.",
        "Aeroportul Bordeaux-Mérignac este un centru important pentru întreținerea aeronavelor.",
        "Regiunea este lider în dezvoltarea materialelor compozite pentru aviație.",
        "Programe de formare specializate la universități și școli de inginerie susțin industria locală.",
        "Industria dronelor este un sector în creștere rapidă în regiune.",
        "'Bordeaux Technowest' sprijină startup-urile din domeniul aerospațial și al dronelor."
      ],
      en: []
    }
  },
  {
    id: "river-loire-extra",
    type: "river",
    parent: "FR-CVL",
    coords: [-0.173, 47.28],
    name: { de: "Loire", hu: "Loire", ro: "Loara", en: "Loire River" },
    description: {
      de: "Die Loire ist der längste Fluss Frankreichs. Ihr Tal, das Loiretal, ist bekannt als der 'Garten Frankreichs' und berühmt für seine vielen Schlösser.",
      hu: "A Loire Franciaország leghosszabb folyója. Völgye, a Loire-völgy, 'Franciaország kertjeként' ismert és számos kastélyáról híres.",
      ro: "Loara este cel mai lung râu din Franța. Valea sa, Valea Loarei, este cunoscută ca 'Grădina Franței' și renumită pentru numeroasele sale castele.",
      en: "The Loire is the longest river in France. Its valley, the Loire Valley, is known as the 'Garden of France' and is famous for its many châteaux."
    },
    descriptionAdvanced: {
      de: "Die Loire, oft als der letzte wilde Fluss Europas bezeichnet, entspringt im Zentralmassiv und fließt über 1.000 Kilometer bis zum Atlantik. Ihr zentraler Abschnitt, das Loiretal, ist eine Kulturlandschaft von außergewöhnlicher Schönheit, die 2000 zum UNESCO-Weltkulturerbe erklärt wurde. Hier reihen sich weltberühmte Schlösser wie Chambord, Chenonceau und Villandry aneinander, die von der reichen Geschichte der französischen Könige und des Adels zeugen. Die Region ist auch als 'Garten Frankreichs' bekannt, berühmt für ihren Obst- und Gemüseanbau sowie ihre vielfältigen Weine (Sancerre, Vouvray, Chinon). Der Fluss selbst ist ein wichtiges Ökosystem mit Sandbänken und Inseln, das vielen Vogelarten als Lebensraum dient. Der Radweg 'Loire à Vélo' folgt dem Fluss über 900 Kilometer und ist einer der beliebtesten Radfernwege Frankreichs.",
      hu: "",
      ro: "Loara, adesea numit ultimul râu sălbatic din Europa, izvorăște din Masivul Central și curge peste 1.000 km până la Atlantic. Secțiunea sa centrală, Valea Loarei, este un peisaj cultural de o frumusețe excepțională, inclus în patrimoniul UNESCO în 2000. Aici se înșiră castele faimoase precum Chambord, Chenonceau și Villandry, martori ai istoriei regilor Franței. Regiunea, cunoscută ca 'Grădina Franței', este renumită pentru livezile, legumele și vinurile sale diverse (Sancerre, Vouvray, Chinon). Râul însuși este un ecosistem vital. Pista de biciclete 'Loire à Vélo' urmărește cursul râului pe 900 km, fiind una dintre cele mai populare din Franța.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Loire ist der letzte große Fluss in Europa, der nicht kanalisiert oder stark reguliert ist.",
        "Der Wasserstand des Flusses kann stark schwanken, mit dramatischen Niedrigwasserständen im Sommer und Hochwassern im Frühjahr.",
        "Traditionelle Flachbodenboote, 'toues' genannt, werden immer noch für touristische Fahrten genutzt.",
        "Die Gärten von Schloss Villandry sind ein herausragendes Beispiel für die Gartenkunst der Renaissance.",
        "Die Stadt Nantes, nahe der Mündung, war einst der größte Hafen Frankreichs.",
        "Jeanne d'Arc hatte einen ihrer größten Siege in Orléans an der Loire.",
        "Der Fluss durchquert eine Vielzahl von Landschaften, von vulkanischen Schluchten bis zu weiten Ebenen."
      ],
      hu: [],
      ro: [
        "Loara este ultimul mare fluviu din Europa care nu este canalizat sau puternic regularizat.",
        "Nivelul apei poate fluctua drastic, cu ape scăzute vara și inundații primăvara.",
        "Bărcile tradiționale cu fund plat, numite 'toues', sunt încă folosite pentru plimbări turistice.",
        "Grădinile Castelului Villandry sunt un exemplu remarcabil de artă a grădinăritului renascentist.",
        "Orașul Nantes, aproape de vărsare, a fost odată cel mai mare port din Franța.",
        "Ioana d'Arc a obținut una dintre cele mai mari victorii la Orléans, pe Loara.",
        "Râul traversează o varietate de peisaje, de la defileuri vulcanice la câmpii largi."
      ],
      en: []
    }
  },
  {
    id: "city-rennes-extra",
    type: "city",
    parent: "FR-BRE",
    coords: [-1.6778, 48.1173],
    name: { de: "Rennes", hu: "Rennes", ro: "Rennes", en: "Rennes" },
    description: {
      de: "Rennes ist die Hauptstadt der Bretagne, bekannt für ihre mittelalterlichen Fachwerkhäuser und die lebhafte Studentenpopulation.",
      hu: "Rennes Bretagne fővárosa, középkori, фахверк házairól és élénk egyetemista népességéről ismert.",
      ro: "Rennes este capitala Bretaniei, cunoscută pentru casele sale medievale cu grinzi de lemn și pentru populația sa vibrantă de studenți.",
      en: "Rennes is the capital of Brittany, known for its medieval half-timbered houses and vibrant student population."
    },
    descriptionAdvanced: {
      de: "Rennes, die dynamische Hauptstadt der Bretagne, verbindet ein reiches historisches Erbe mit einer pulsierenden modernen Kultur. Das mittelalterliche Zentrum hat nach einem großen Brand im Jahr 1720 seine farbenfrohen Fachwerkhäuser behalten, während andere Teile der Stadt im klassischen Stil wiederaufgebaut wurden. Das Parlament der Bretagne, das den Brand überstand, ist ein Juwel der französischen Barockarchitektur. Mit über 60.000 Studenten ist Rennes eine der lebendigsten Universitätsstädte Frankreichs, was sich in einer blühenden Musik- und Kunstszene widerspiegelt. Der Marché des Lices am Samstagmorgen ist einer der größten Märkte Frankreichs und ein Schaufenster für bretonische Produkte. Rennes ist auch ein wichtiges Zentrum für digitale Innovation und Forschung, was ihr den Spitznamen 'das französische Silicon Valley' eingebracht hat.",
      hu: "",
      ro: "Rennes, capitala dinamică a Bretaniei, îmbină o bogată moștenire istorică cu o cultură modernă vibrantă. Centrul medieval și-a păstrat casele colorate cu grinzi de lemn după un incendiu în 1720, în timp ce alte zone au fost reconstruite în stil clasic. Parlamentul Bretaniei, o bijuterie barocă, a supraviețuit incendiului. Cu peste 60.000 de studenți, Rennes este un oraș universitar plin de viață, cu o scenă muzicală și artistică înfloritoare. Marché des Lices, piața de sâmbătă, este una dintre cele mai mari din Franța. Rennes este, de asemenea, un centru important pentru inovație digitală, fiind supranumit 'Silicon Valley-ul francez'.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Thabor-Park gilt als einer der schönsten öffentlichen Gärten Frankreichs.",
        "Die 'Portes Mordelaises' waren einst der Haupteingang zur befestigten Stadt.",
        "Das Festival 'Les Trans Musicales' im Dezember ist ein wichtiges Schaufenster für neue Musiktalente.",
        "Rennes hat eine der modernsten und effizientesten U-Bahn-Systeme (VAL) in Frankreich.",
        "Die bretonische Kultur wird durch Feste (Fest-Noz) und zweisprachige Beschilderung lebendig gehalten.",
        "Das Musée des Beaux-Arts beherbergt eine vielfältige Sammlung von der Antike bis zur Gegenwart.",
        "Die Stadt liegt am Zusammenfluss der Flüsse Ille und Vilaine."
      ],
      hu: [],
      ro: [
        "Parcul Thabor este considerat una dintre cele mai frumoase grădini publice din Franța.",
        "'Porțile Mordelaises' erau odinioară intrarea principală în orașul fortificat.",
        "Festivalul 'Les Trans Musicales' din decembrie este o rampă de lansare importantă pentru noi talente muzicale.",
        "Rennes are unul dintre cele mai moderne și eficiente sisteme de metrou automat (VAL) din Franța.",
        "Cultura bretonă este menținută vie prin festivaluri (Fest-Noz) și indicatoare bilingve.",
        "Muzeul de Arte Frumoase găzduiește o colecție diversă, de la antichitate la prezent.",
        "Orașul se află la confluența râurilor Ille și Vilaine."
      ],
      en: []
    }
  },

  {
    id: "sea-etretat-cliffs-extra",
    type: "sea",
    parent: "FR-NOR",
    coords: [0.2074, 49.7078],
    name: { de: "Klippen von Étretat", hu: "Étretat-i sziklák", ro: "Stâncile din Étretat", en: "Cliffs of Étretat" },
    description: {
      de: "Die Kreidefelsen von Étretat sind berühmt für ihre natürlichen Bögen, insbesondere die Porte d'Aval und die Aiguille (Nadel).",
      hu: "Az Étretat-i krétasziklák híresek természetes boltíveikről, különösen a Porte d'Aval-ról és az Aiguille-ról (Tű).",
      ro: "Stâncile de cretă din Étretat sunt renumite pentru arcadele lor naturale, în special Porte d'Aval și Aiguille (Acul).",
      en: "The chalk cliffs of Étretat are famous for their natural arches, especially the Porte d'Aval and the Aiguille (Needle)."
    },
    descriptionAdvanced: {
      de: "Die Alabasterküste der Normandie erreicht bei Étretat ihren dramatischsten Höhepunkt. Die weißen Kreidefelsen wurden vom Meer zu spektakulären Formationen geformt. Am bekanntesten ist die Porte d'Aval, ein natürlicher Bogen, der an einen Elefanten erinnert, der seinen Rüssel ins Wasser taucht. Daneben ragt die 'Aiguille' (Nadel), eine 70 Meter hohe Felsspitze, aus dem Meer. Auf der anderen Seite des Kieselstrandes befindet sich die Porte d'Amont. Diese atemberaubende Landschaft zog im 19. Jahrhundert zahlreiche Künstler an, insbesondere die Impressionisten wie Claude Monet und Gustave Courbet, die die Felsen in unzähligen Gemälden bei unterschiedlichen Lichtverhältnissen festhielt. Auch Schriftsteller wie Guy de Maupassant und Maurice Leblanc, der Schöpfer des Meisterdiebs Arsène Lupin, ließen sich von der mystischen Atmosphäre inspirieren.",
      hu: "",
      ro: "Coasta de Alabastru a Normandiei atinge apogeul său dramatic la Étretat. Stâncile albe de cretă au fost modelate de mare în formațiuni spectaculoase. Cea mai cunoscută este Porte d'Aval, un arc natural care seamănă cu un elefant care își scufundă trompa în apă. Lângă ea se înalță 'Aiguille' (Acul), o stâncă de 70 de metri. De cealaltă parte a plajei cu pietriș se află Porte d'Amont. Acest peisaj a atras numeroși artiști în secolul al XIX-lea, în special pe impresioniști precum Claude Monet, care au imortalizat stâncile în nenumărate picturi. Scriitori ca Guy de Maupassant și Maurice Leblanc s-au lăsat inspirați de atmosfera mistică.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Manneporte, ein noch größerer Bogen westlich der Porte d'Aval, ist vom Strand aus nicht sichtbar.",
        "Die Kapelle Notre-Dame de la Garde thront auf der Klippe d'Amont.",
        "Die 'Gärten von Étretat' auf der Klippe d'Amont sind eine Mischung aus Landschaftskunst und Skulpturenpark.",
        "Maurice Leblanc ließ seinen Helden Arsène Lupin in dem Roman 'Die hohle Nadel' einen geheimen Schatz in der Aiguille verstecken.",
        "Die Klippen sind Teil des Natura-2000-Netzwerks zum Schutz der europäischen Fauna und Flora.",
        "Bei Ebbe kann man durch die Porte d'Aval zu einem anderen Strand laufen.",
        "Die Klippen bestehen aus Kreide mit Schichten aus dunklem Feuerstein."
      ],
      hu: [],
      ro: [
        "Manneporte, un arc și mai mare, nu este vizibil de pe plajă.",
        "Capela Notre-Dame de la Garde veghează de pe stânca d'Amont.",
        "'Grădinile din Étretat' de pe stânca d'Amont combină arta peisagistică cu sculptura.",
        "În romanul 'Acul scobit', Maurice Leblanc plasează comoara lui Arsène Lupin în interiorul Aiguille.",
        "Stâncile fac parte din rețeaua Natura 2000 pentru protecția faunei și florei europene.",
        "La reflux, se poate merge pe jos prin Porte d'Aval către o altă plajă.",
        "Stâncile sunt formate din cretă cu straturi de silex întunecat."
      ],
      en: []
    }
  },
  {
    id: "industry-perfume-grasse-extra",
    type: "industry",
    parent: "FR-PAC",
    coords: [6.9231, 43.6583],
    name: { de: "Parfümindustrie in Grasse", hu: "Grasse-i parfümipar", ro: "Industria parfumurilor din Grasse", en: "Grasse Perfume Industry" },
    description: {
      de: "Grasse gilt als die Welthauptstadt des Parfüms. Seit Jahrhunderten werden hier Duftstoffe aus den umliegenden Blumenfeldern gewonnen.",
      hu: "Grasse-t a parfüm világfővárosának tartják. Évszázadok óta nyernek ki itt illatanyagokat a környező virágmezőkről.",
      ro: "Grasse este considerată capitala mondială a parfumurilor. De secole, aici se extrag esențe din câmpurile de flori din jur.",
      en: "Grasse is considered the world's capital of perfume. For centuries, fragrances have been extracted here from the surrounding flower fields."
    },
    descriptionAdvanced: {
      de: "Grasse, in den Hügeln über der Côte d'Azur gelegen, hat sich seit dem 16. Jahrhundert von einer Gerberstadt zur unbestrittenen Welthauptstadt des Parfüms entwickelt. Ursprünglich wurden Parfums verwendet, um den Geruch von gegerbtem Leder zu überdecken. Das milde Mikroklima der Region ist ideal für den Anbau von Duftpflanzen wie Mairose, Jasmin, Tuberose und Lavendel. Die 'Nasen' von Grasse, die hochtalentierten Parfümeure, sind Meister darin, komplexe Düfte zu kreieren. Viele der berühmtesten Parfums der Welt haben ihren Ursprung in Grasse. Historische Parfümerien wie Fragonard, Molinard und Galimard bieten Führungen an, bei denen Besucher die traditionellen Herstellungsmethoden wie die Enfleurage kennenlernen und sogar ihren eigenen Duft kreieren können. Das Know-how im Zusammenhang mit Parfüm in Grasse wurde 2018 in die Liste des immateriellen Kulturerbes der UNESCO aufgenommen.",
      hu: "",
      ro: "Grasse, situat pe dealurile de deasupra Coastei de Azur, a evoluat din secolul al XVI-lea dintr-un oraș de tăbăcari în capitala mondială a parfumurilor. Inițial, parfumurile erau folosite pentru a masca mirosul pielii tăbăcite. Microclimatul blând al regiunii este ideal pentru cultivarea florilor precum trandafirul de mai, iasomia și tuberoza. 'Nasurile' din Grasse, parfumierii talentați, sunt maeștri în crearea de arome complexe. Multe parfumuri celebre își au originea aici. Parfumeriile istorice precum Fragonard, Molinard și Galimard oferă tururi unde vizitatorii pot învăța despre metodele tradiționale. Know-how-ul legat de parfum din Grasse a fost inclus în patrimoniul cultural imaterial UNESCO în 2018.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Für die Herstellung von einem Liter Jasmin-Absolue wird etwa eine Tonne Blüten benötigt.",
        "Das Internationale Parfümmuseum (MIP) zeichnet die 3000-jährige Geschichte des Parfüms nach.",
        "Chanel No. 5 wurde 1921 mit Jasmin aus Grasse kreiert.",
        "Die Handlung des Romans 'Das Parfum' von Patrick Süskind spielt größtenteils in Grasse.",
        "Die Jasmin- und Rosen-Ernte findet in den frühen Morgenstunden statt, wenn der Duft am intensivsten ist.",
        "Die Stadt feiert jedes Jahr im August ein Jasmin-Festival (Fête du Jasmin).",
        "Viele der großen Modehäuser besitzen ihre eigenen exklusiven Blumenfelder in der Region Grasse."
      ],
      hu: [],
      ro: [
        "Este nevoie de aproximativ o tonă de flori pentru a produce un litru de absolut de iasomie.",
        "Muzeul Internațional al Parfumurilor (MIP) prezintă istoria de 3000 de ani a parfumului.",
        "Chanel No. 5 a fost creat în 1921 cu iasomie din Grasse.",
        "Acțiunea romanului 'Parfumul' de Patrick Süskind are loc în mare parte în Grasse.",
        "Recoltarea iasomiei și a trandafirilor se face dimineața devreme, când parfumul este cel mai intens.",
        "Orașul sărbătorește un Festival al Iasomiei (Fête du Jasmin) în fiecare an, în august.",
        "Multe case de modă mari dețin propriile câmpuri de flori exclusive în regiunea Grasse."
      ],
      en: []
    }
  },


  {
    id: "historical-lascaux-iv-extra",
    type: "historical",
    parent: "FR-NAQ",
    coords: [1.178, 45.05],
    name: { de: "Lascaux IV", hu: "Lascaux IV", ro: "Lascaux IV", en: "Lascaux IV" },
    description: {
      de: "Lascaux IV ist eine vollständige Nachbildung der berühmten prähistorischen Höhle von Lascaux, die für ihre außergewöhnlichen paläolithischen Malereien bekannt ist.",
      hu: "A Lascaux IV a híres Lascaux-i barlang teljes másolata, amely a rendkívüli paleolitikus festményeiről ismert.",
      ro: "Lascaux IV este o replică completă a faimoasei peșteri preistorice Lascaux, cunoscută pentru picturile sale paleolitice excepționale.",
      en: "Lascaux IV is a complete replica of the famous prehistoric Lascaux cave, known for its exceptional Paleolithic paintings."
    },
    descriptionAdvanced: {
      de: "Die Entdeckung der Höhle von Lascaux im Jahr 1940 enthüllte eine der beeindruckendsten Kunstgalerien der prähistorischen Menschheit. Um die fragilen, etwa 17.000 Jahre alten Malereien vor dem durch Besucher verursachten Verfall zu schützen, wurde die Originalhöhle 1963 für die Öffentlichkeit geschlossen. Lascaux IV, eröffnet 2016, ist die bisher umfassendste und genaueste Nachbildung. In einem halb unterirdischen Gebäude wurde die gesamte Höhle mit modernster 3D-Laser-Scanning- und Gusstechnik nachgebildet. Besucher erleben eine Atmosphäre, die der Originalhöhle sehr nahe kommt, mit der gleichen Temperatur, Feuchtigkeit und Dunkelheit. Die Nachbildung umfasst den berühmten 'Saal der Stiere' und die 'axiale Galerie'. Die Tour wird durch interaktive Ausstellungen ergänzt, die die Kunst, die Techniken und die damalige Umwelt der Cro-Magnon-Menschen erklären.",
      hu: "",
      ro: "Descoperirea peșterii Lascaux în 1940 a dezvăluit una dintre cele mai impresionante galerii de artă preistorică. Pentru a proteja picturile fragile, vechi de 17.000 de ani, peștera originală a fost închisă publicului în 1963. Lascaux IV, deschisă în 2016, este cea mai completă și exactă replică. Într-o clădire semi-subterană, întreaga peșteră a fost recreată folosind tehnologie modernă de scanare 3D. Vizitatorii experimentează o atmosferă apropiată de cea originală, cu aceeași temperatură, umiditate și întuneric. Replica include faimoasa 'Sală a Taurilor'. Turul este completat de expoziții interactive care explică arta și mediul oamenilor de Cro-Magnon.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Originalhöhle wurde zufällig von vier Teenagern entdeckt.",
        "Die Malereien stellen hauptsächlich große Tiere wie Auerochsen, Pferde und Hirsche dar.",
        "Es gibt nur eine einzige Darstellung eines Menschen in der gesamten Höhle.",
        "Die verwendeten Farben wurden aus Mineralpigmenten wie Ocker und Manganoxid hergestellt.",
        "Vor Lascaux IV gab es bereits Lascaux II (eine Teilreplik) und Lascaux III (eine Wanderausstellung).",
        "Die Höhle wurde aufgrund ihrer Bedeutung als 'Sixtinische Kapelle der Vorgeschichte' bezeichnet.",
        "Lascaux IV befindet sich am Fuße des Hügels, in dem die Originalhöhle liegt."
      ],
      hu: [],
      ro: [
        "Peștera originală a fost descoperită accidental de patru adolescenți în 1940.",
        "Picturile reprezintă în principal animale mari precum aurohi, cai și cerbi.",
        "Există o singură reprezentare a unei figuri umane în întreaga peșteră.",
        "Vopselele folosite au fost realizate din pigmenți minerali precum ocru și oxid de mangan.",
        "Înainte de Lascaux IV, au existat Lascaux II (o replică parțială) și Lascaux III (o expoziție itinerantă).",
        "Peștera a fost supranumită 'Capela Sixtină a preistoriei' datorită importanței sale.",
        "Lascaux IV este situată la poalele dealului unde se află peștera originală."
      ],
      en: []
    }
  },
  {
    id: "kid-landmark-puy-du-fou-extra",
    type: "kid-landmark",
    parent: "FR-PDL",
    coords: [-0.9306, 46.8931],
    name: { de: "Puy du Fou", hu: "Puy du Fou", ro: "Puy du Fou", en: "Puy du Fou" },
    description: {
      de: "Puy du Fou ist ein historischer Themenpark, der für seine spektakulären Shows bekannt ist, die verschiedene Epochen der französischen Geschichte nachstellen.",
      hu: "A Puy du Fou egy történelmi vidámpark, amely a francia történelem különböző korszakait felelevenítő látványos előadásairól ismert.",
      ro: "Puy du Fou este un parc tematic istoric renumit pentru spectacolele sale grandioase care reconstituie diferite perioade din istoria Franței.",
      en: "Puy du Fou is a historical theme park renowned for its spectacular shows that reenact different periods of French history."
    },
    descriptionAdvanced: {
      de: "Puy du Fou in der Vendée ist ein einzigartiges Konzept in der Welt der Freizeitparks. Es gibt keine Fahrgeschäfte, sondern der Park konzentriert sich ausschließlich auf grandiose, immersive Shows, die die Geschichte zum Leben erwecken. Jede Show ist eine epische Produktion mit Hunderten von Schauspielern, Dutzenden von Pferden, aufwendigen Kostümen und spektakulären Spezialeffekten. Die Themen reichen von römischen Wagenrennen im 'Stadium Gallo-Romain' über Wikingerangriffe bis hin zu mittelalterlichen Ritterturnieren. Zwischen den Shows können die Besucher durch originalgetreu nachgebaute historische Dörfer schlendern. Der Höhepunkt ist die 'Cinéscénie', eine riesige Nachtshow auf einer 23 Hektar großen Bühne mit über 2.500 Freiwilligen, die die Geschichte der Vendée erzählt. Puy du Fou wurde mehrfach als 'Bester Park der Welt' ausgezeichnet.",
      hu: "",
      ro: "Puy du Fou din Vendée este un concept unic în lumea parcurilor de distracții. Nu are atracții mecanice, ci se concentrează exclusiv pe spectacole grandioase care aduc istoria la viață. Fiecare spectacol este o producție epică cu sute de actori, zeci de cai și efecte speciale spectaculoase, acoperind teme de la curse de care romane la atacuri vikinge. Între spectacole, vizitatorii pot explora sate istorice reconstruite. Punctul culminant este 'Cinéscénie', un spectacol de noapte gigantic pe o scenă de 23 de hectare cu peste 2.500 de voluntari. Puy du Fou a fost premiat de mai multe ori 'Cel mai bun parc din lume'.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Park wurde 1978 von Philippe de Villiers gegründet.",
        "Die 'Cinéscénie' zieht jedes Jahr fast 400.000 Zuschauer an.",
        "Der Park hat eine eigene Falknerei mit über 200 Greifvögeln für die Show 'Le Bal des Oiseaux Fantômes'.",
        "Puy du Fou hat auch Ableger in Spanien und plant weitere internationale Expansionen.",
        "Die Show 'Le Dernier Panache' findet in einem Theater statt, das sich um 360 Grad dreht.",
        "Alle Schauspieler und Techniker werden in der parkeigenen 'Puy du Fou Académie' ausgebildet.",
        "Der Park legt großen Wert auf historische Genauigkeit in seinen Darstellungen."
      ],
      hu: [],
      ro: [
        "Parcul a fost fondat în 1978 de Philippe de Villiers.",
        "'Cinéscénie' atrage anual aproape 400.000 de spectatori.",
        "Parcul are propria sa șoimărie cu peste 200 de păsări de pradă pentru spectacolul 'Balul Păsărilor Fantomă'.",
        "Puy du Fou are filiale în Spania și plănuiește extinderea internațională.",
        "Spectacolul 'Le Dernier Panache' are loc într-un teatru care se rotește la 360 de grade.",
        "Toți actorii și tehnicienii sunt formați la 'Puy du Fou Académie', academia proprie a parcului.",
        "Parcul pune mare accent pe acuratețea istorică în reprezentările sale."
      ],
      en: []
    }
  },


];
