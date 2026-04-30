import type { POI } from "./poi";

export const poiExtraVenezuelaLifeV2: POI[] = [
  {
    id: "mochima-national-park-life-v2",
    type: "animal-habitat",
    parent: "VE-R",
    coords: [-64.3333, 10.3500],
    name: { de: "Mochima-Nationalpark", hu: "Mochima Nemzeti Park", ro: "Parcul Național Mochima", en: "Mochima National Park" },
    description: {
      de: "Dieser Meeresnationalpark schützt eine reiche Unterwasserwelt und bietet Delfinen einen sicheren Lebensraum.",
      hu: "Ez a tengeri nemzeti park gazdag víz alatti élővilágot véd, és biztonságos élőhelyet kínál a delfineknek.",
      ro: "Acest parc național marin protejează o viață subacvatică bogată și oferă un habitat sigur pentru delfini.",
      en: "This marine national park protects a rich underwater world and provides a safe habitat for dolphins."
    },
    facts: {
      de: ["Gegründet 1973.", "Beliebt für Delfinbeobachtungen.", "Umfasst zahlreiche kleine Inseln."],
      hu: ["1973-ban alapították.", "Népszerű a delfinlesők körében.", "Számos apró szigetet foglal magába."],
      ro: ["Înființat în 1973.", "Popular pentru observarea delfinilor.", "Include numeroase insule mici."],
      en: ["Established in 1973.", "Popular for dolphin watching.", "Includes numerous small islands."]
    }
  },
  {
    id: "los-llanos-life-v2",
    type: "animal-habitat",
    parent: "VE-C",
    coords: [-68.0000, 7.5000],
    name: { de: "Los Llanos", hu: "Los Llanos", ro: "Los Llanos", en: "Los Llanos" },
    description: {
      de: "Die weiten Savannen von Los Llanos sind eines der besten Gebiete Südamerikas zur Tierbeobachtung, voller Wasserschweine und Anakondas.",
      hu: "A Los Llanos tágas szavannái Dél-Amerika egyik legjobb vadvilág-megfigyelő területei, tele vízidisznókkal és anakondákkal.",
      ro: "Vastele savane din Los Llanos reprezintă una dintre cele mai bune zone din America de Sud pentru observarea faunei, plină de capibara și anaconda.",
      en: "The vast savannas of Los Llanos are one of South America's best areas for wildlife viewing, full of capybaras and anacondas."
    },
    facts: {
      de: ["Heimat von Wasserschweinen (Capybaras).", "Große Anakonda-Population.", "Geprägt von Regen- und Trockenzeit."],
      hu: ["A vízidisznók (kapibarák) hazája.", "Nagy anakondapopuláció.", "Esős és száraz évszakok jellemzik."],
      ro: ["Căminul capibarelor.", "Populație mare de anaconda.", "Caracterizat de sezoane ploioase și secetoase."],
      en: ["Home to capybaras.", "Large anaconda population.", "Characterized by wet and dry seasons."]
    }
  },
  {
    id: "hato-el-frio-life-v2",
    type: "animal-habitat",
    parent: "VE-C",
    coords: [-68.8950, 7.8100],
    name: { de: "Hato El Frío", hu: "Hato El Frío", ro: "Hato El Frío", en: "Hato El Frío" },
    description: {
      de: "Ein berühmtes privates Naturschutzgebiet und eine arbeitende Farm, die sich der Rettung gefährdeter Tierarten in den Llanos verschrieben hat.",
      hu: "Egy híres magán természetvédelmi terület és működő farm, amely a Llanos veszélyeztetett fajainak megmentésén fáradozik.",
      ro: "O faimoasă rezervație naturală privată și o fermă funcțională, dedicată salvării speciilor pe cale de dispariție din Llanos.",
      en: "A famous private nature reserve and working farm dedicated to saving endangered species in the Llanos."
    },
    facts: {
      de: ["Schützt den Orinoko-Krokodil.", "Liegt im Bundesstaat Apure.", "Verbindet Viehzucht und Naturschutz."],
      hu: ["Védi az orinocói krokodilt.", "Apure államban található.", "Ötvözi az állattenyésztést és a természetvédelmet."],
      ro: ["Protejează crocodilul de Orinoco.", "Situat în statul Apure.", "Combină creșterea vitelor și conservarea naturii."],
      en: ["Protects the Orinoco crocodile.", "Located in Apure state.", "Combines cattle ranching and conservation."]
    }
  },
  {
    id: "guacharo-cave-life-v2",
    type: "animal-habitat",
    parent: "VE-N",
    coords: [-63.5539, 10.1706],
    name: { de: "Guácharo-Höhle", hu: "Guácharo-barlang", ro: "Peștera Guácharo", en: "Guácharo Cave" },
    description: {
      de: "Diese riesige Karsthöhle beherbergt eine massive Kolonie nachtaktiver Fettschwalme (Guácharos), die durch Echolokation navigieren.",
      hu: "Ez a hatalmas karsztbarlang egy óriási éjszakai zsírmadár-kolóniának (Guácharo) ad otthont, amelyek echolokációval tájékozódnak.",
      ro: "Această peșteră carstică uriașă găzduiește o colonie masivă de păsări nocturne (Guácharo) care navighează prin ecolocație.",
      en: "This huge karst cave houses a massive colony of nocturnal oilbirds (Guácharos) that navigate by echolocation."
    },
    facts: {
      de: ["Entdeckt von Alexander von Humboldt.", "Über 10 km lang.", "Die Vögel ernähren sich von Früchten."],
      hu: ["Alexander von Humboldt fedezte fel.", "Több mint 10 km hosszú.", "A madarak gyümölcsökkel táplálkoznak."],
      ro: ["Descoperită de Alexander von Humboldt.", "Are o lungime de peste 10 km.", "Păsările se hrănesc cu fructe."],
      en: ["Discovered by Alexander von Humboldt.", "Over 10 km long.", "The birds feed on fruits."]
    }
  },
  {
    id: "parque-del-este-life-v2",
    type: "kid-landmark",
    parent: "VE-M",
    coords: [-66.8378, 10.4936],
    name: { de: "Parque del Este", hu: "Parque del Este", ro: "Parque del Este", en: "Parque del Este" },
    description: {
      de: "Eine riesige grüne Oase mitten in Caracas, die bei Familien für Picknicks, Spielplätze und das Planetarium beliebt ist.",
      hu: "Egy hatalmas zöld oázis Caracas szívében, amely népszerű a családok körében a piknikek, játszóterek és a planetárium miatt.",
      ro: "O oază verde uriașă în mijlocul orașului Caracas, populară printre familii pentru picnicuri, locuri de joacă și planetariu.",
      en: "A huge green oasis in the middle of Caracas, popular with families for picnics, playgrounds, and the planetarium."
    },
    facts: {
      de: ["Entworfen von Roberto Burle Marx.", "Eröffnet im Jahr 1961.", "Beinhaltet einen kleinen Zoo und Seen."],
      hu: ["Roberto Burle Marx tervezte.", "1961-ben nyitották meg.", "Kis állatkertet és tavakat is tartalmaz."],
      ro: ["Proiectat de Roberto Burle Marx.", "Deschis în 1961.", "Include o mică grădină zoologică și lacuri."],
      en: ["Designed by Roberto Burle Marx.", "Opened in 1961.", "Includes a small zoo and lakes."]
    }
  },
  {
    id: "zoo-caricuao-life-v2",
    type: "animal-habitat",
    parent: "VE-A",
    coords: [-66.9744, 10.4286],
    name: { de: "Zoo Caricuao", hu: "Caricuao Állatkert", ro: "Grădina Zoologică Caricuao", en: "Caricuao Zoo" },
    description: {
      de: "Der größte zoologische Garten in Caracas ist bekannt für frei umherlaufende Pfauen und Affen, die den Park bewohnen.",
      hu: "Caracas legnagyobb állatkertje arról híres, hogy pávák és majmok szabadon kószálnak a park területén.",
      ro: "Cea mai mare grădină zoologică din Caracas este renumită pentru păunii și maimuțele care se plimbă libere prin parc.",
      en: "The largest zoological garden in Caracas is known for peacocks and monkeys roaming freely throughout the park."
    },
    facts: {
      de: ["Größter Zoo der Hauptstadt.", "Fokus auf südamerikanische Fauna.", "Große Flächen ohne Zäune."],
      hu: ["A főváros legnagyobb állatkertje.", "Dél-amerikai faunára fókuszál.", "Nagy, kerítés nélküli területek."],
      ro: ["Cea mai mare grădină zoologică din capitală.", "Se concentrează pe fauna sud-americană.", "Zone extinse fără garduri."],
      en: ["Largest zoo in the capital.", "Focuses on South American fauna.", "Large areas without fences."]
    }
  },
  {
    id: "morrocoy-national-park-life-v2",
    type: "animal-habitat",
    parent: "VE-I",
    coords: [-68.2500, 10.8500],
    name: { de: "Morrocoy-Nationalpark", hu: "Morrocoy Nemzeti Park", ro: "Parcul Național Morrocoy", en: "Morrocoy National Park" },
    description: {
      de: "Ein Schutzgebiet an der Küste mit intakten Mangrovenwäldern, in dem unzählige Flamingos und Meeresschildkröten leben.",
      hu: "Egy part menti védett terület érintetlen mangroveerdőkkel, ahol számtalan flamingó és tengeri teknős él.",
      ro: "O zonă de coastă protejată cu păduri de mangrove intacte, unde trăiesc nenumărați flamingo și broaște țestoase marine.",
      en: "A coastal protected area with intact mangrove forests, home to countless flamingos and sea turtles."
    },
    facts: {
      de: ["Besteht aus Korallenriffen und Mangroven.", "Wichtiger Nistplatz für Vögel.", "Liegt im Bundesstaat Falcón."],
      hu: ["Korallzátonyokból és mangrovékból áll.", "Fontos madárfészkelő hely.", "Falcón államban található."],
      ro: ["Este alcătuit din recife de corali și mangrove.", "Loc important de cuibărit pentru păsări.", "Situat în statul Falcón."],
      en: ["Consists of coral reefs and mangroves.", "Important nesting site for birds.", "Located in Falcón state."]
    }
  },
  {
    id: "medanos-de-coro-life-v2",
    type: "kid-landmark",
    parent: "VE-I",
    coords: [-69.6667, 11.4500],
    name: { de: "Médanos de Coro", hu: "Médanos de Coro", ro: "Médanos de Coro", en: "Médanos de Coro" },
    description: {
      de: "Eine faszinierende Wüstenlandschaft mit riesigen Sanddünen, auf denen Kinder gerne klettern und herunterrutschen.",
      hu: "Egy lenyűgöző sivatagi táj hatalmas homokdűnékkel, ahol a gyerekek imádnak mászni és csúszkálni.",
      ro: "Un peisaj deșertic fascinant, cu dune de nisip uriașe, pe care copiilor le place să se cațere și să alunece.",
      en: "A fascinating desert landscape with massive sand dunes where children love to climb and slide down."
    },
    facts: {
      de: ["Die Dünen wandern durch den Wind.", "Einziger Wüsten-Nationalpark Venezuelas.", "Dünen können 40 Meter hoch werden."],
      hu: ["A dűnék a szél hatására vándorolnak.", "Venezuela egyetlen sivatagi nemzeti parkja.", "A dűnék 40 méter magasak is lehetnek."],
      ro: ["Dunele se mișcă din cauza vântului.", "Singurul parc național deșertic din Venezuela.", "Dunele pot atinge 40 de metri înălțime."],
      en: ["The dunes shift with the wind.", "Venezuela's only desert national park.", "Dunes can reach 40 meters high."]
    }
  },
  {
    id: "los-chorros-park-life-v2",
    type: "kid-landmark",
    parent: "VE-M",
    coords: [-66.8200, 10.5000],
    name: { de: "Los Chorros Park", hu: "Los Chorros Park", ro: "Parcul Los Chorros", en: "Los Chorros Park" },
    description: {
      de: "Ein wunderschöner Erholungspark am Fuße des El Ávila, der Familien mit seinen natürlichen Wasserfällen und schattigen Pfaden anzieht.",
      hu: "Egy gyönyörű rekreációs park az El Ávila lábánál, amely természetes vízeséseivel és árnyékos ösvényeivel vonzza a családokat.",
      ro: "Un frumos parc de recreere la poalele muntelui El Ávila, care atrage familiile cu cascadele sale naturale și cărările umbrite.",
      en: "A beautiful recreation park at the foot of El Ávila, attracting families with its natural waterfalls and shaded paths."
    },
    facts: {
      de: ["Verfügt über natürliche Badestellen.", "Reich an tropischer Vegetation.", "Perfekt für einen Familienausflug."],
      hu: ["Természetes fürdőhelyekkel rendelkezik.", "Trópusi növényzetben gazdag.", "Tökéletes egy családi kiránduláshoz."],
      ro: ["Are locuri naturale de scăldat.", "Bogat în vegetație tropicală.", "Perfect pentru o ieșire în familie."],
      en: ["Features natural swimming spots.", "Rich in tropical vegetation.", "Perfect for a family outing."]
    }
  },
  {
    id: "hacienda-santa-teresa-life-v2",
    type: "agriculture",
    parent: "VE-D",
    coords: [-67.3197, 10.2447],
    name: { de: "Hacienda Santa Teresa", hu: "Hacienda Santa Teresa", ro: "Hacienda Santa Teresa", en: "Hacienda Santa Teresa" },
    description: {
      de: "Eine historische Plantage, die seit über 200 Jahren für den Anbau von Zuckerrohr und die Herstellung von Rum bekannt ist.",
      hu: "Történelmi ültetvény, amely több mint 200 éve ismert cukornádtermesztéséről és rumkészítéséről.",
      ro: "O plantație istorică, cunoscută de peste 200 de ani pentru cultivarea trestiei de zahăr și producția de rom.",
      en: "A historic plantation known for over 200 years for cultivating sugar cane and producing rum."
    },
    facts: {
      de: ["Gegründet im Jahr 1796.", "Bietet geführte Touren durch die Felder.", "Spielt Rugby zur sozialen Förderung."],
      hu: ["1796-ban alapították.", "Vezetett túrákat kínál a földeken.", "Rögbit játszanak a társadalmi felzárkóztatásért."],
      ro: ["Înființată în 1796.", "Oferă tururi ghidate pe câmpuri.", "Se joacă rugby pentru promovarea socială."],
      en: ["Founded in 1796.", "Offers guided tours through the fields.", "Plays rugby for social promotion."]
    }
  },
  {
    id: "chuao-cacao-life-v2",
    type: "agriculture",
    parent: "VE-D",
    coords: [-67.5333, 10.5333],
    name: { de: "Chuao Kakao-Plantage", hu: "Chuao Kakaóültetvény", ro: "Plantația de Cacao Chuao", en: "Chuao Cacao Plantation" },
    description: {
      de: "Ein abgelegenes Küstendorf, dessen Plantagen weltweit dafür berühmt sind, einige der hochwertigsten Kakaobohnen der Welt zu produzieren.",
      hu: "Egy elszigetelt tengerparti falu, amelynek ültetvényei világszerte híresek a legmagasabb minőségű kakaóbab termesztéséről.",
      ro: "Un sat de coastă izolat ale cărui plantații sunt renumite la nivel mondial pentru producția unora dintre cele mai bune boabe de cacao.",
      en: "An isolated coastal village whose plantations are famous worldwide for producing some of the highest quality cacao beans."
    },
    facts: {
      de: ["Kakao wächst hier seit über 400 Jahren.", "Nur per Boot erreichbar.", "Bohnen trocknen auf dem Kirchplatz."],
      hu: ["Több mint 400 éve termesztenek itt kakaót.", "Csak hajóval közelíthető meg.", "A babokat a templom téren szárítják."],
      ro: ["Aici se cultivă cacao de peste 400 de ani.", "Accesibil doar cu barca.", "Boabele se usucă în piața bisericii."],
      en: ["Cacao has grown here for over 400 years.", "Accessible only by boat.", "Beans dry on the church plaza."]
    }
  },
  {
    id: "aquarium-valencia-life-v2",
    type: "kid-landmark",
    parent: "VE-G",
    coords: [-68.0167, 10.1833],
    name: { de: "Aquarium Valencia", hu: "Valencia Akvárium", ro: "Acvariul din Valencia", en: "Valencia Aquarium" },
    description: {
      de: "Eines der größten Aquarien in Lateinamerika, das eine faszinierende Vielfalt an Fischen aus dem Amazonasgebiet und Orinoco zeigt.",
      hu: "Latin-Amerika egyik legnagyobb akváriuma, amely lenyűgöző változatosságban mutatja be az Amazonas és az Orinoco medencéjének halait.",
      ro: "Unul dintre cele mai mari acvarii din America Latină, care prezintă o varietate fascinantă de pești din bazinele Amazonului și Orinoco.",
      en: "One of the largest aquariums in Latin America, showcasing a fascinating variety of fish from the Amazon and Orinoco basins."
    },
    facts: {
      de: ["Konzentriert sich auf Süßwasserfische.", "Beliebtes Ausflugsziel für Schulkinder.", "Zeigt auch venezolanische Schlangen."],
      hu: ["Édesvízi halakra koncentrál.", "Népszerű kirándulóhely iskolásoknak.", "Venezuelai kígyókat is bemutat."],
      ro: ["Se concentrează pe peștii de apă dulce.", "Destinație populară pentru școlari.", "Prezintă și șerpi venezueleni."],
      en: ["Focuses on freshwater fish.", "Popular destination for school children.", "Also displays Venezuelan snakes."]
    }
  },
  {
    id: "los-aleros-life-v2",
    type: "kid-landmark",
    parent: "VE-L",
    coords: [-71.0500, 8.6833],
    name: { de: "Los Aleros Themenpark", hu: "Los Aleros Élménypark", ro: "Parcul Tematic Los Aleros", en: "Los Aleros Theme Park" },
    description: {
      de: "Ein nostalgischer Vergnügungspark in den Anden, der ein traditionelles venezolanisches Dorf aus den 1930er Jahren zum Leben erweckt.",
      hu: "Egy nosztalgikus vidámpark az Andokban, amely életre kelt egy hagyományos 1930-as évekbeli venezuelai falut.",
      ro: "Un parc de distracții nostalgic din Anzi, care aduce la viață un sat tradițional venezuelean din anii 1930.",
      en: "A nostalgic amusement park in the Andes that brings to life a traditional Venezuelan village from the 1930s."
    },
    facts: {
      de: ["Gegründet im Jahr 1984.", "Mitarbeiter tragen historische Kleidung.", "Bietet traditionelle Handwerkskunst."],
      hu: ["1984-ben alapították.", "A dolgozók korhű ruhákat viselnek.", "Hagyományos kézművességet mutat be."],
      ro: ["Înființat în 1984.", "Angajații poartă haine de epocă.", "Prezintă meșteșuguri tradiționale."],
      en: ["Founded in 1984.", "Employees wear historical clothing.", "Features traditional crafts."]
    }
  },
  {
    id: "venezuela-de-antier-life-v2",
    type: "kid-landmark",
    parent: "VE-L",
    coords: [-71.2167, 8.5833],
    name: { de: "La Venezuela de Antier", hu: "La Venezuela de Antier", ro: "La Venezuela de Antier", en: "La Venezuela de Antier" },
    description: {
      de: "Dieser einzigartige Themenpark in Mérida lässt Kinder und Erwachsene die verschiedenen kulturellen und geografischen Regionen Venezuelas erleben.",
      hu: "Ez a Mérida városában található egyedülálló élménypark lehetővé teszi, hogy gyerekek és felnőttek megismerjék Venezuela kulturális és földrajzi régióit.",
      ro: "Acest parc tematic unic din Mérida permite copiilor și adulților să experimenteze diferitele regiuni culturale și geografice ale Venezuelei.",
      en: "This unique theme park in Mérida lets children and adults experience the different cultural and geographical regions of Venezuela."
    },
    facts: {
      de: ["Präsentiert Architektur verschiedener Bundesstaaten.", "Viele interaktive Vorführungen.", "Bietet regionale kulinarische Spezialitäten."],
      hu: ["Bemutatja a különböző államok építészetét.", "Számos interaktív bemutató.", "Regionális kulináris specialitásokat kínál."],
      ro: ["Prezintă arhitectura diferitelor state.", "Multe spectacole interactive.", "Oferă specialități culinare regionale."],
      en: ["Presents architecture of different states.", "Many interactive shows.", "Offers regional culinary specialties."]
    }
  },
  {
    id: "zoo-bararida-life-v2",
    type: "animal-habitat",
    parent: "VE-K",
    coords: [-69.3167, 10.0833],
    name: { de: "Zoo Bararida", hu: "Bararida Állatkert", ro: "Grădina Zoologică Bararida", en: "Bararida Zoo" },
    description: {
      de: "Ein weitläufiger botanischer und zoologischer Park in Barquisimeto, der sich dem Erhalt bedrohter Arten der Region widmet.",
      hu: "Egy kiterjedt botanikus- és állatkert Barquisimeto városában, amely a régió veszélyeztetett fajainak megőrzésével foglalkozik.",
      ro: "Un parc botanic și zoologic extins în Barquisimeto, dedicat conservării speciilor pe cale de dispariție din regiune.",
      en: "An expansive botanical and zoological park in Barquisimeto dedicated to conserving endangered species of the region."
    },
    facts: {
      de: ["Schützt den Brillenbären.", "Verfügt über ein künstliches Lagunensystem.", "Gegründet im Jahr 1967."],
      hu: ["Védi a pápaszemes medvét.", "Mesterséges lagúnarendszerrel rendelkezik.", "1967-ben alapították."],
      ro: ["Protejează ursul cu ochelari.", "Dispune de un sistem artificial de lagune.", "Înființată în 1967."],
      en: ["Protects the spectacled bear.", "Features an artificial lagoon system.", "Founded in 1967."]
    }
  },
  {
    id: "hato-pinero-life-v2",
    type: "animal-habitat",
    parent: "VE-H",
    coords: [-68.0500, 8.9167],
    name: { de: "Hato Piñero", hu: "Hato Piñero", ro: "Hato Piñero", en: "Hato Piñero" },
    description: {
      de: "Eine riesige Rinderfarm, auf der die Jagd streng verboten ist, was sie zu einem Zufluchtsort für Jaguare, Pumas und unzählige Vogelarten macht.",
      hu: "Egy hatalmas szarvasmarha-farm, ahol a vadászat szigorúan tilos, így a jaguárok, pumák és számtalan madárfaj menedékhelyévé vált.",
      ro: "O fermă uriașă de vite unde vânătoarea este strict interzisă, făcând-o un refugiu pentru jaguari, pume și nenumărate specii de păsări.",
      en: "A huge cattle ranch where hunting is strictly prohibited, making it a sanctuary for jaguars, pumas, and countless bird species."
    },
    facts: {
      de: ["Vorbildliches Ökotourismus-Projekt.", "Lebensraum für Jaguare.", "Umfasst riesige Feuchtgebiete."],
      hu: ["Példaértékű ökoturizmus-projekt.", "A jaguárok élőhelye.", "Hatalmas vizes élőhelyeket foglal magába."],
      ro: ["Proiect exemplar de ecoturism.", "Habitat pentru jaguari.", "Include zone umede vaste."],
      en: ["Exemplary ecotourism project.", "Habitat for jaguars.", "Includes vast wetlands."]
    }
  },
  {
    id: "guatopo-national-park-life-v2",
    type: "animal-habitat",
    parent: "VE-M",
    coords: [-66.4167, 10.0833],
    name: { de: "Guatopo-Nationalpark", hu: "Guatopo Nemzeti Park", ro: "Parcul Național Guatopo", en: "Guatopo National Park" },
    description: {
      de: "Ein dichter tropischer Regenwald nahe Caracas, der für seinen Reichtum an Schmetterlingen, Brüllaffen und Wasserfällen bekannt ist.",
      hu: "Sűrű trópusi esőerdő Caracas közelében, amely gazdag pillangó-, bőgőmajom- és vízesésállományáról ismert.",
      ro: "O pădure tropicală densă lângă Caracas, cunoscută pentru bogăția sa de fluturi, maimuțe urlătoare și cascade.",
      en: "A dense tropical rainforest near Caracas, known for its abundance of butterflies, howler monkeys, and waterfalls."
    },
    facts: {
      de: ["Wichtiges Wassereinzugsgebiet.", "Sehr hohe Biodiversität.", "Beliebt für Vogelbeobachtungen."],
      hu: ["Fontos vízgyűjtő terület.", "Nagyon magas biológiai sokféleség.", "Népszerű madármegfigyelő hely."],
      ro: ["Bazin hidrografic important.", "Biodiversitate foarte mare.", "Popular pentru observarea păsărilor."],
      en: ["Important watershed.", "Very high biodiversity.", "Popular for bird watching."]
    }
  },
  {
    id: "san-esteban-national-park-life-v2",
    type: "animal-habitat",
    parent: "VE-G",
    coords: [-68.0000, 10.3500],
    name: { de: "San Esteban Nationalpark", hu: "San Esteban Nemzeti Park", ro: "Parcul Național San Esteban", en: "San Esteban National Park" },
    description: {
      de: "Dieser Park erstreckt sich vom Meer bis in die Berge und schützt empfindliche Korallenriffe und dichte Nebelwälder gleichermaßen.",
      hu: "Ez a park a tengertől a hegyekig húzódik, védve mind az érzékeny korallzátonyokat, mind a sűrű köderdőket.",
      ro: "Acest parc se întinde de la mare până la munți și protejează deopotrivă recifele de corali sensibile și pădurile de ceață dense.",
      en: "This park stretches from the sea to the mountains, protecting delicate coral reefs and dense cloud forests alike."
    },
    facts: {
      de: ["Schützt bedrohte Meeresschildkröten.", "Verbindet Küste und Gebirge.", "Liegt im Bundesstaat Carabobo."],
      hu: ["Védi a veszélyeztetett tengeri teknősöket.", "Összeköti a tengerpartot és a hegyeket.", "Carabobo államban található."],
      ro: ["Protejează broaștele țestoase marine amenințate.", "Leagă coasta de munți.", "Situat în statul Carabobo."],
      en: ["Protects threatened sea turtles.", "Connects coast and mountains.", "Located in Carabobo state."]
    }
  },
  {
    id: "orinoco-delta-life-v2",
    type: "animal-habitat",
    parent: "VE-Y",
    coords: [-61.0000, 9.0000],
    name: { de: "Orinoco-Delta", hu: "Orinoco-delta", ro: "Delta Orinoco", en: "Orinoco Delta" },
    description: {
      de: "Ein gigantisches Labyrinth aus Flüssen und Mangroven, wo rosafarbene Flussdelfine und bunte Tukane in einer fast unberührten Wildnis leben.",
      hu: "Folyók és mangrovék gigantikus labirintusa, ahol rózsaszín folyami delfinek és színes tukánok élnek egy szinte érintetlen vadonban.",
      ro: "Un labirint gigantic de râuri și mangrove, unde delfinii de râu roz și tucanii colorați trăiesc într-o sălbăticie aproape neatinsă.",
      en: "A gigantic labyrinth of rivers and mangroves where pink river dolphins and colorful toucans live in an almost untouched wilderness."
    },
    facts: {
      de: ["Heimat der Warao-Indianer.", "Eines der größten Deltas der Welt.", "Reich an Flussdelfinen."],
      hu: ["A warao indiánok hazája.", "A világ egyik legnagyobb deltája.", "Folyami delfinekben gazdag."],
      ro: ["Căminul indienilor Warao.", "Una dintre cele mai mari delte din lume.", "Bogat în delfini de râu."],
      en: ["Home to the Warao Indians.", "One of the largest deltas in the world.", "Rich in river dolphins."]
    }
  },
  {
    id: "merida-coffee-fincas-life-v2",
    type: "agriculture",
    parent: "VE-L",
    coords: [-71.5000, 8.4000],
    name: { de: "Mérida Kaffee-Fincas", hu: "Mérida Kávéültetvények", ro: "Plantațiile de Cafea Mérida", en: "Mérida Coffee Fincas" },
    description: {
      de: "In den fruchtbaren Andentälern rund um Mérida wächst erstklassiger Hochlandkaffee, der von lokalen Bauernfamilien von Hand geerntet wird.",
      hu: "A Mérida körüli termékeny andoki völgyekben első osztályú hegyvidéki kávé terem, amelyet a helyi gazdacsaládok kézzel szüretelnek.",
      ro: "Cafea de înaltă calitate crește în văile fertile ale Anzilor din jurul orașului Mérida, fiind recoltată manual de familiile de fermieri locali.",
      en: "Premium highland coffee grows in the fertile Andean valleys around Mérida, harvested by hand by local farming families."
    },
    facts: {
      de: ["Schattenkaffee unter großen Bäumen.", "Anbau auf über 1500 Metern Höhe.", "Prägt die lokale Wirtschaft stark."],
      hu: ["Árnyékkávé nagy fák alatt.", "Több mint 1500 méteres tengerszint feletti magasságban termesztik.", "Erősen meghatározza a helyi gazdaságot."],
      ro: ["Cafea cultivată la umbra copacilor mari.", "Cultivată la peste 1500 de metri altitudine.", "Modelează puternic economia locală."],
      en: ["Shade-grown coffee under large trees.", "Grown at over 1500 meters altitude.", "Strongly shapes the local economy."]
    }
  },
  {
    id: "dunas-amusement-park-life-v2",
    type: "kid-landmark",
    parent: "VE-G",
    coords: [-68.0200, 10.2200],
    name: { de: "Dunas Vergnügungspark", hu: "Dunas Vidámpark", ro: "Parcul de Distracții Dunas", en: "Dunas Amusement Park" },
    description: {
      de: "Ein bunter Wasser- und Freizeitpark in Valencia, der mit seinen Rutschen, Pools und Achterbahnen eine beliebte Flucht vor der Hitze bietet.",
      hu: "Színes vízi- és vidámpark Valencia városában, amely csúszdáival, medencéivel és hullámvasútjaival népszerű menedéket nyújt a hőség elől.",
      ro: "Un parc de distracții și acvatic colorat în Valencia, care, cu toboganele, piscinele și montagnes russes-urile sale, oferă o evadare populară din calea căldurii.",
      en: "A colorful water and amusement park in Valencia that offers a popular escape from the heat with its slides, pools, and roller coasters."
    },
    facts: {
      de: ["Kombiniert Wasser- und Trockenattraktionen.", "Sehr beliebt bei Familien.", "Befindet sich in der Stadt Valencia."],
      hu: ["Vízi és szárazföldi attrakciókat kombinál.", "Nagyon népszerű a családok körében.", "Valencia városában található."],
      ro: ["Combină atracțiile acvatice cu cele uscate.", "Foarte popular printre familii.", "Situat în orașul Valencia."],
      en: ["Combines water and dry attractions.", "Very popular with families.", "Located in the city of Valencia."]
    }
  },
  {
    id: "diverland-margarita-life-v2",
    type: "kid-landmark",
    parent: "VE-O",
    coords: [-63.8167, 10.9833],
    name: { de: "Diverland Margarita", hu: "Diverland Margarita", ro: "Diverland Margarita", en: "Diverland Margarita" },
    description: {
      de: "Der größte Freizeitpark auf der Isla Margarita begeistert Kinder mit seinem riesigen Riesenrad, von dem aus man das Karibische Meer überblickt.",
      hu: "A Margarita-sziget legnagyobb vidámparkja hatalmas óriáskerekével nyűgözi le a gyerekeket, ahonnan kilátás nyílik a Karib-tengerre.",
      ro: "Cel mai mare parc de distracții de pe Insula Margarita încântă copiii cu roata sa uriașă, de unde se poate admira Marea Caraibilor.",
      en: "The largest amusement park on Margarita Island thrills children with its giant Ferris wheel overlooking the Caribbean Sea."
    },
    facts: {
      de: ["Eines der höchsten Riesenräder Südamerikas.", "Beliebtes Abendziel für Familien.", "Verfügt über Achterbahnen und Karussells."],
      hu: ["Dél-Amerika egyik legmagasabb óriáskereke.", "Népszerű esti célpont a családok számára.", "Hullámvasútokkal és körhintákkal rendelkezik."],
      ro: ["Una dintre cele mai înalte roți panoramice din America de Sud.", "Destinație de seară populară pentru familii.", "Are montagnes russes și caruseluri."],
      en: ["One of South America's tallest Ferris wheels.", "Popular evening destination for families.", "Features roller coasters and carousels."]
    }
  },
  {
    id: "cuare-wildlife-refuge-life-v2",
    type: "animal-habitat",
    parent: "VE-I",
    coords: [-68.3000, 10.9167],
    name: { de: "Cuare Wildtierreservat", hu: "Cuare Vadvédelmi Terület", ro: "Rezervația Faunei Cuare", en: "Cuare Wildlife Refuge" },
    description: {
      de: "Dieses ruhige Feuchtgebiet ist ein Paradies für Vogelliebhaber, da sich hier Tausende scharlachrote Ibisse und Flamingos zum Fressen versammeln.",
      hu: "Ez a csendes vizes élőhely a madárbarátok paradicsoma, mivel itt skarlát íbiszek és flamingók ezrei gyűlnek össze táplálkozni.",
      ro: "Această zonă umedă liniștită este un paradis pentru iubitorii de păsări, deoarece mii de ibiși stacojii și flamingo se adună aici pentru a se hrăni.",
      en: "This quiet wetland is a paradise for bird lovers, as thousands of scarlet ibises and flamingos gather here to feed."
    },
    facts: {
      de: ["Beherbergt über 300 Vogelarten.", "International wichtiges RAMSAR-Feuchtgebiet.", "Oft mit kleinen Booten erkundet."],
      hu: ["Több mint 300 madárfajnak ad otthont.", "Nemzetközileg jelentős RAMSAR vizes élőhely.", "Gyakran kis csónakokkal fedezik fel."],
      ro: ["Găzduiește peste 300 de specii de păsări.", "Zonă umedă RAMSAR de importanță internațională.", "Adesea explorată cu bărci mici."],
      en: ["Houses over 300 bird species.", "Internationally important RAMSAR wetland.", "Often explored by small boats."]
    }
  },
  {
    id: "zoo-chorros-de-milla-life-v2",
    type: "animal-habitat",
    parent: "VE-L",
    coords: [-71.1333, 8.6167],
    name: { de: "Zoo Chorros de Milla", hu: "Chorros de Milla Állatkert", ro: "Grădina Zoologică Chorros de Milla", en: "Chorros de Milla Zoo" },
    description: {
      de: "Ein malerischer kleiner Zoo in Mérida, der an einem Flussufer liegt und durch den natürlichen Bergwald eine kühle, neblige Atmosphäre bietet.",
      hu: "Mérida egy festői kis állatkertje, amely egy folyóparton fekszik, és a természetes hegyi erdőnek köszönhetően hűvös, ködös atmoszférát kínál.",
      ro: "O mică grădină zoologică pitorească din Mérida, situată pe malul unui râu, oferind o atmosferă răcoroasă și cețoasă datorită pădurii de munte naturale.",
      en: "A picturesque little zoo in Mérida, situated on a riverbank, offering a cool, misty atmosphere due to the natural mountain forest."
    },
    facts: {
      de: ["Gegründet im Jahr 1953.", "Schwerpunkt auf andinen Tierarten.", "Ein Wasserfall stürzt durch den Park."],
      hu: ["1953-ban alapították.", "Fókuszban az andoki állatfajok.", "Egy vízesés zuhog át a parkon."],
      ro: ["Înființată în 1953.", "Se concentrează pe speciile de animale andine.", "O cascadă curge prin parc."],
      en: ["Founded in 1953.", "Focus on Andean animal species.", "A waterfall flows through the park."]
    }
  },
  {
    id: "waterland-mundo-marino-life-v2",
    type: "kid-landmark",
    parent: "VE-O",
    coords: [-63.8167, 10.9800],
    name: { de: "Waterland Mundo Marino", hu: "Waterland Mundo Marino", ro: "Waterland Mundo Marino", en: "Waterland Mundo Marino" },
    description: {
      de: "Ein Meerestierpark auf Margarita, in dem Kinder viel über den Schutz von Meeressäugern lernen und Delfine aus der Nähe betrachten können.",
      hu: "Tengeri állatpark Margaritán, ahol a gyerekek sokat tanulhatnak a tengeri emlősök védelméről, és közelről láthatják a delfineket.",
      ro: "Un parc de animale marine pe Margarita, unde copiii pot învăța multe despre conservarea mamiferelor marine și pot vedea delfini de aproape.",
      en: "A marine animal park on Margarita where children can learn a lot about the conservation of marine mammals and see dolphins up close."
    },
    facts: {
      de: ["Befindet sich neben Diverland.", "Sensibilisiert für den Meeresschutz.", "Sehr beliebt bei Schulklassen."],
      hu: ["A Diverland mellett található.", "A tengeri védelemre hívja fel a figyelmet.", "Nagyon népszerű az iskolai osztályok körében."],
      ro: ["Situat lângă Diverland.", "Crește gradul de conștientizare privind conservarea marină.", "Foarte popular printre clasele școlare."],
      en: ["Located next to Diverland.", "Raises awareness for marine conservation.", "Very popular with school classes."]
    }
  },
  {
    id: "hacienda-la-victoria-life-v2",
    type: "agriculture",
    parent: "VE-L",
    coords: [-71.6000, 8.3500],
    name: { de: "Hacienda La Victoria", hu: "Hacienda La Victoria", ro: "Hacienda La Victoria", en: "Hacienda La Victoria" },
    description: {
      de: "Eine wunderbar restaurierte Hacienda, die heute ein Kaffeemuseum beherbergt und den traditionellen landwirtschaftlichen Anbau der Anden zeigt.",
      hu: "Gyönyörűen felújított hacienda, amely ma kávémúzeumnak ad otthont, és bemutatja a hagyományos andoki mezőgazdasági termelést.",
      ro: "O hacienda frumos restaurată, care găzduiește astăzi un muzeu al cafelei și prezintă cultivarea agricolă tradițională andină.",
      en: "A beautifully restored hacienda that today houses a coffee museum and demonstrates traditional Andean agricultural cultivation."
    },
    facts: {
      de: ["Erklärt den Kaffeeprozess vom Samen zur Tasse.", "Befindet sich nahe der Stadt Santa Cruz de Mora.", "Ein nationales historisches Denkmal."],
      hu: ["Elmagyarázza a kávékészítés folyamatát a magtól a csészéig.", "Santa Cruz de Mora városa közelében található.", "Nemzeti történelmi műemlék."],
      ro: ["Explică procesul cafelei de la sămânță la ceașcă.", "Situat lângă orașul Santa Cruz de Mora.", "Un monument istoric național."],
      en: ["Explains the coffee process from seed to cup.", "Located near the town of Santa Cruz de Mora.", "A national historical monument."]
    }
  },
  {
    id: "el-avila-cable-car-life-v2",
    type: "kid-landmark",
    parent: "VE-A",
    coords: [-66.8833, 10.5167],
    name: { de: "El Ávila Seilbahn", hu: "El Ávila Felvonó", ro: "Telecabina El Ávila", en: "El Ávila Cable Car" },
    description: {
      de: "Eine aufregende Fahrt mit der Seilbahn auf den Berg Ávila, die für Kinder ein großes Abenteuer und den besten Blick auf Caracas bietet.",
      hu: "Izgalmas felvonóút az Ávila-hegyre, amely nagy kaland a gyerekek számára, és a legjobb kilátást nyújtja Caracasra.",
      ro: "O plimbare captivantă cu telecabina pe Muntele Ávila, care oferă o mare aventură pentru copii și cea mai bună vedere asupra orașului Caracas.",
      en: "A thrilling cable car ride up Mount Ávila, offering a great adventure for kids and the best view of Caracas."
    },
    facts: {
      de: ["Führt auf den Pico El Ávila.", "Oben gibt es Erdbeeren mit Sahne.", "Erbaut in den 1950er Jahren."],
      hu: ["A Pico El Ávila csúcsra vezet.", "A tetőn tejszínes epret árulnak.", "Az 1950-es években épült."],
      ro: ["Duce pe Pico El Ávila.", "În vârf se servesc căpșuni cu frișcă.", "Construită în anii 1950."],
      en: ["Leads to Pico El Ávila.", "Strawberries with cream are sold at the top.", "Built in the 1950s."]
    }
  },
  {
    id: "condor-sanctuary-life-v2",
    type: "animal-habitat",
    parent: "VE-L",
    coords: [-70.8167, 8.8000],
    name: { de: "Kondor-Schutzstation", hu: "Kondorkeselyű Menhely", ro: "Sanctuarul Condorilor", en: "Condor Sanctuary" },
    description: {
      de: "Eine Zucht- und Schutzstation im kühlen Anden-Páramo, die versucht, den majestätischen und gefährdeten Andenkondor wieder anzusiedeln.",
      hu: "Tenyésztő- és védőállomás a hűvös andoki páramóban, amely a fenséges és veszélyeztetett andoki kondorkeselyű visszatelepítésén fáradozik.",
      ro: "Un centru de reproducere și conservare în paramo-ul andin răcoros, care încearcă să reintroducă maiestuosul și amenințatul condor andin.",
      en: "A breeding and conservation sanctuary in the cool Andean páramo attempting to reintroduce the majestic and endangered Andean condor."
    },
    facts: {
      de: ["Das Zuchtprogramm rettet den Andenkondor.", "Liegt in den sehr hohen Bergen bei Mérida.", "Der Kondor hat die größte Flügelspannweite."],
      hu: ["A tenyészprogram megmenti az andoki kondort.", "A magas hegyekben található Mérida közelében.", "A kondornak van a legnagyobb szárnyfesztávolsága."],
      ro: ["Programul de reproducere salvează condorul andin.", "Situat în munții foarte înalți de lângă Mérida.", "Condorul are cea mai mare anvergură a aripilor."],
      en: ["The breeding program saves the Andean condor.", "Located in the very high mountains near Mérida.", "The condor has the largest wingspan."]
    }
  },
  {
    id: "exotic-flora-park-life-v2",
    type: "kid-landmark",
    parent: "VE-U",
    coords: [-68.7500, 10.3333],
    name: { de: "Park der Exotischen Flora", hu: "Egzotikus Flóra Park", ro: "Parcul Florei Exotice", en: "Park of the Exotic Flora" },
    description: {
      de: "Ein riesiger botanischer Garten im Bundesstaat Yaracuy, in dem Familien durch eine atemberaubende Vielfalt tropischer Pflanzen spazieren können.",
      hu: "Hatalmas botanikus kert Yaracuy államban, ahol a családok a trópusi növények lélegzetelállító sokfélesége között sétálhatnak.",
      ro: "O grădină botanică uriașă în statul Yaracuy, unde familiile se pot plimba printre o varietate uluitoare de plante tropicale.",
      en: "A huge botanical garden in Yaracuy state where families can walk through a breathtaking variety of tropical plants."
    },
    facts: {
      de: ["Beherbergt Tausende Orchideenarten.", "Gehört zu den größten Tropengärten der Welt.", "Besitzt wunderschön angelegte Teiche."],
      hu: ["Több ezer orchideafajnak ad otthont.", "A világ egyik legnagyobb trópusi kertje.", "Gyönyörűen kialakított tavakkal rendelkezik."],
      ro: ["Găzduiește mii de specii de orhidee.", "Una dintre cele mai mari grădini tropicale din lume.", "Are iazuri frumos amenajate."],
      en: ["Houses thousands of orchid species.", "One of the world's largest tropical gardens.", "Features beautifully landscaped ponds."]
    }
  },
  {
    id: "cueva-del-indio-life-v2",
    type: "kid-landmark",
    parent: "VE-M",
    coords: [-66.8167, 10.4333],
    name: { de: "Cueva del Indio", hu: "Cueva del Indio", ro: "Cueva del Indio", en: "Cueva del Indio" },
    description: {
      de: "Ein städtischer Park in Caracas mit kleinen Kalksteinhöhlen und Kletterwänden, der ein beliebtes Abenteuerziel für die Stadtkinder ist.",
      hu: "Városi park Caracasban kis mészkőbarlangokkal és mászófalakkal, amely népszerű kalandcélpont a városi gyerekek számára.",
      ro: "Un parc urban în Caracas cu mici peșteri de calcar și pereți de escaladă, o destinație de aventură populară pentru copiii din oraș.",
      en: "An urban park in Caracas with small limestone caves and climbing walls, a popular adventure destination for city children."
    },
    facts: {
      de: ["Bekannt für natürliche Kletterfelsen.", "Die Höhlen können gefahrlos erkundet werden.", "Kleine Papageien leben in den Bäumen."],
      hu: ["Természetes mászószikláiról ismert.", "A barlangok biztonságosan felfedezhetők.", "Kis papagájok élnek a fákon."],
      ro: ["Cunoscut pentru stâncile naturale de escaladă.", "Peșterile pot fi explorate în siguranță.", "Papagali mici trăiesc în copaci."],
      en: ["Known for natural climbing rocks.", "The caves can be safely explored.", "Small parrots live in the trees."]
    }
  }
];
