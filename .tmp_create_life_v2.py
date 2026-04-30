import json

pois = [
    {
        "id": "parque-explora-life-v2",
        "type": "kid-landmark",
        "parent": "CO-ANT",
        "coords": [-75.5658, 6.2704],
        "name": {
            "de": "Parque Explora",
            "hu": "Parque Explora",
            "ro": "Parque Explora",
            "en": "Parque Explora"
        },
        "description": {
            "de": "Ein interaktives Wissenschaftsmuseum in Medellín mit einem großen Aquarium und einem Vivarium.",
            "hu": "Interaktív tudományos múzeum Medellínben, hatalmas akváriummal és terráriummal.",
            "ro": "Un muzeu interactiv de știință în Medellín, cu un acvariu imens și un vivariu.",
            "en": "An interactive science museum in Medellín featuring a large aquarium and a vivarium."
        },
        "facts": {
            "de": ["Eröffnet 2008.", "Besitzt das größte Süßwasseraquarium Südamerikas."],
            "hu": ["2008-ban nyílt meg.", "Dél-Amerika legnagyobb édesvízi akváriumával rendelkezik."],
            "ro": ["Deschis în 2008.", "Găzduiește cel mai mare acvariu de apă dulce din America de Sud."],
            "en": ["Opened in 2008.", "Features South America's largest freshwater aquarium."]
        }
    },
    {
        "id": "parque-del-cafe-life-v2",
        "type": "kid-landmark",
        "parent": "CO-QUI",
        "coords": [-75.7720, 4.5401],
        "name": {
            "de": "Parque del Café",
            "hu": "Parque del Café",
            "ro": "Parque del Café",
            "en": "Parque del Café"
        },
        "description": {
            "de": "Ein Freizeitpark in Quindío, der der kolumbianischen Kaffeekultur gewidmet ist.",
            "hu": "Quindío régió vidámparkja, amelyet a kolumbiai kávékultúrának szenteltek.",
            "ro": "Un parc de distracții în Quindío, dedicat culturii columbiene a cafelei.",
            "en": "A theme park in Quindío dedicated to Colombian coffee culture."
        },
        "facts": {
            "de": ["Mit Achterbahnen und Kaffee-Shows.", "Wurde 1995 gegründet."],
            "hu": ["Hullámvasutak és kávé-show-k várják a látogatókat.", "1995-ben alapították."],
            "ro": ["Are montagne ruse și spectacole despre cafea.", "A fost fondat în 1995."],
            "en": ["Features roller coasters and coffee shows.", "It was founded in 1995."]
        }
    },
    {
        "id": "hacienda-napoles-life-v2",
        "type": "kid-landmark",
        "parent": "CO-ANT",
        "coords": [-74.7228, 5.9231],
        "name": {
            "de": "Hacienda Nápoles",
            "hu": "Hacienda Nápoles",
            "ro": "Hacienda Nápoles",
            "en": "Hacienda Nápoles"
        },
        "description": {
            "de": "Ein großer Themenpark und Zoo, der auf dem ehemaligen Anwesen von Pablo Escobar errichtet wurde.",
            "hu": "Hatalmas élménypark és állatkert, amely Pablo Escobar egykori birtokán épült.",
            "ro": "Un mare parc tematic și grădină zoologică construit pe fosta proprietate a lui Pablo Escobar.",
            "en": "A large theme park and zoo built on the former estate of Pablo Escobar."
        },
        "facts": {
            "de": ["Bekannt für seine wilden Flusspferde.", "Liegt in der Region Antioquia."],
            "hu": ["A szabadon kószáló vízilovairól ismert.", "Antioquia régióban található."],
            "ro": ["Cunoscut pentru hipopotamii săi sălbatici.", "Este situat în regiunea Antioquia."],
            "en": ["Known for its wild hippopotamus population.", "Located in the Antioquia region."]
        }
    },
    {
        "id": "parque-jaime-duque-life-v2",
        "type": "kid-landmark",
        "parent": "CO-CUN",
        "coords": [-73.9678, 4.9458],
        "name": {
            "de": "Parque Jaime Duque",
            "hu": "Parque Jaime Duque",
            "ro": "Parque Jaime Duque",
            "en": "Parque Jaime Duque"
        },
        "description": {
            "de": "Ein Familien-Freizeitpark in der Nähe von Bogotá mit Nachbildungen von Weltwundern und einem Zoo.",
            "hu": "Családi vidámpark Bogotá közelében, a világcsodák másolataival és állatkerttel.",
            "ro": "Un parc de distracții pentru familii lângă Bogotá, cu replici ale minunilor lumii și o grădină zoologică.",
            "en": "A family theme park near Bogotá featuring replicas of world wonders and a zoo."
        },
        "facts": {
            "de": ["Beinhaltet eine Nachbildung des Taj Mahal.", "Wurde 1983 eröffnet."],
            "hu": ["Tartalmazza a Tádzs Mahal másolatát.", "1983-ban nyitotta meg kapuit."],
            "ro": ["Include o replică a Taj Mahal-ului.", "A fost deschis în 1983."],
            "en": ["Includes a replica of the Taj Mahal.", "It opened its doors in 1983."]
        }
    },
    {
        "id": "maloka-museo-interactivo-life-v2",
        "type": "kid-landmark",
        "parent": "CO-DC",
        "coords": [-74.1084, 4.6558],
        "name": {
            "de": "Maloka Museo Interactivo",
            "hu": "Maloka Interaktív Múzeum",
            "ro": "Muzeul Interactiv Maloka",
            "en": "Maloka Interactive Museum"
        },
        "description": {
            "de": "Ein interaktives Wissenschafts- und Technikzentrum in Bogotá für Kinder und Jugendliche.",
            "hu": "Interaktív tudományos és technológiai központ Bogotában gyermekek és fiatalok számára.",
            "ro": "Un centru interactiv de știință și tehnologie din Bogotá pentru copii și tineri.",
            "en": "An interactive science and technology center in Bogotá for children and youth."
        },
        "facts": {
            "de": ["Hat eine ikonische Kuppel für 3D-Filme.", "Fördert Wissenschaft und Technologie."],
            "hu": ["Ikonikus kupolájában 3D filmeket vetítenek.", "A tudományt és a technológiát népszerűsíti."],
            "ro": ["Are o cupolă iconică pentru filme 3D.", "Promovează știința și tehnologia."],
            "en": ["Features an iconic dome for 3D films.", "Promotes science and technology education."]
        }
    },
    {
        "id": "salitre-magico-life-v2",
        "type": "kid-landmark",
        "parent": "CO-DC",
        "coords": [-74.0886, 4.6713],
        "name": {
            "de": "Salitre Mágico",
            "hu": "Salitre Mágico",
            "ro": "Salitre Mágico",
            "en": "Salitre Mágico"
        },
        "description": {
            "de": "Einer der wichtigsten Vergnügungsparks in Bogotá mit zahlreichen Achterbahnen und Fahrgeschäften.",
            "hu": "Bogotá egyik legfontosabb vidámparkja, számos hullámvasúttal és attrakcióval.",
            "ro": "Unul dintre cele mai importante parcuri de distracții din Bogotá, cu numeroase atracții.",
            "en": "One of the most important amusement parks in Bogotá with numerous roller coasters and rides."
        },
        "facts": {
            "de": ["Bietet Unterhaltung für alle Altersgruppen.", "Liegt zentral in der Hauptstadt."],
            "hu": ["Minden korosztály számára kínál szórakozást.", "Központilag helyezkedik el a fővárosban."],
            "ro": ["Oferă divertisment pentru toate vârstele.", "Este situat central în capitală."],
            "en": ["Offers entertainment for all ages.", "Centrally located in the capital."]
        }
    },
    {
        "id": "mundo-aventura-life-v2",
        "type": "kid-landmark",
        "parent": "CO-DC",
        "coords": [-74.1378, 4.6225],
        "name": {
            "de": "Mundo Aventura",
            "hu": "Mundo Aventura",
            "ro": "Mundo Aventura",
            "en": "Mundo Aventura"
        },
        "description": {
            "de": "Ein großer Freizeitpark in Bogotá, der Familien und Kindern eine Vielzahl von Attraktionen bietet.",
            "hu": "Nagy vidámpark Bogotában, amely számos attrakciót kínál a családok és gyerekek számára.",
            "ro": "Un mare parc de distracții în Bogotá, care oferă o varietate de atracții pentru familii și copii.",
            "en": "A large amusement park in Bogotá that offers a variety of attractions for families and children."
        },
        "facts": {
            "de": ["Einer der meistbesuchten Parks des Landes.", "Verfügt über extreme Achterbahnen."],
            "hu": ["Az ország egyik leglátogatottabb parkja.", "Extrém hullámvasutakkal rendelkezik."],
            "ro": ["Unul dintre cele mai vizitate parcuri din țară.", "Dispune de montagne ruse extreme."],
            "en": ["One of the most visited parks in the country.", "Features extreme roller coasters."]
        }
    },
    {
        "id": "piscilago-life-v2",
        "type": "kid-landmark",
        "parent": "CO-CUN",
        "coords": [-74.6508, 4.2257],
        "name": {
            "de": "Piscilago",
            "hu": "Piscilago",
            "ro": "Piscilago",
            "en": "Piscilago"
        },
        "description": {
            "de": "Ein riesiger Wasser- und Freizeitpark mit einem integrierten Zoo in der Region Cundinamarca.",
            "hu": "Hatalmas vízi- és vidámpark integrált állatkerttel Cundinamarca régióban.",
            "ro": "Un uriaș parc acvatic și de distracții cu o grădină zoologică integrată în regiunea Cundinamarca.",
            "en": "A massive water and amusement park with an integrated zoo in the Cundinamarca region."
        },
        "facts": {
            "de": ["Gehört zu den meistbesuchten Wasserparks Südamerikas.", "Beherbergt viele einheimische Tierarten."],
            "hu": ["Dél-Amerika leglátogatottabb víziparkjai közé tartozik.", "Számos őshonos állatfajnak ad otthont."],
            "ro": ["Este printre cele mai vizitate parcuri acvatice din America de Sud.", "Găzduiește multe specii de animale native."],
            "en": ["Ranks among the most visited water parks in South America.", "Houses many native animal species."]
        }
    },
    {
        "id": "parque-panaca-life-v2",
        "type": "kid-landmark",
        "parent": "CO-QUI",
        "coords": [-75.8239, 4.6133],
        "name": {
            "de": "Parque Panaca",
            "hu": "Parque Panaca",
            "ro": "Parque Panaca",
            "en": "Parque Panaca"
        },
        "description": {
            "de": "Der erste landwirtschaftliche Themenpark der Welt, in dem Besucher mit Nutztieren interagieren können.",
            "hu": "A világ első mezőgazdasági tematikus parkja, ahol a látogatók haszonállatokkal találkozhatnak.",
            "ro": "Primul parc tematic agricol din lume, unde vizitatorii pot interacționa cu animalele de fermă.",
            "en": "The world's first agricultural theme park where visitors can interact with farm animals."
        },
        "facts": {
            "de": ["Fördert das Verständnis für die Landwirtschaft.", "Bietet spektakuläre Tiershows."],
            "hu": ["A mezőgazdaság megértését segíti elő.", "Látványos állatbemutatókat kínál."],
            "ro": ["Promovează înțelegerea agriculturii.", "Oferă spectacole spectaculoase cu animale."],
            "en": ["Promotes understanding of agriculture.", "Offers spectacular animal shows."]
        }
    },
    {
        "id": "bioparque-ukumari-life-v2",
        "type": "animal-habitat",
        "parent": "CO-RIS",
        "coords": [-75.8309, 4.8021],
        "name": {
            "de": "Bioparque Ukumarí",
            "hu": "Ukumarí Biopark",
            "ro": "Bioparcul Ukumarí",
            "en": "Ukumarí Biopark"
        },
        "description": {
            "de": "Ein moderner Tierpark in Pereira, der sich der Erhaltung und Rettung von Wildtieren widmet.",
            "hu": "Modern állatkert Pereirában, amely a vadon élő állatok védelmének és megmentésének szenteli magát.",
            "ro": "Un parc de animale modern în Pereira dedicat conservării și salvării faunei sălbatice.",
            "en": "A modern animal park in Pereira dedicated to the conservation and rescue of wildlife."
        },
        "facts": {
            "de": ["Einer der größten Bioparks Lateinamerikas.", "Die Tiere leben in nachgebildeten natürlichen Lebensräumen."],
            "hu": ["Latin-Amerika egyik legnagyobb bioparkja.", "Az állatok a természetes élőhelyüket utánzó környezetben élnek."],
            "ro": ["Unul dintre cele mai mari bioparcuri din America Latină.", "Animalele trăiesc în habitate naturale recreate."],
            "en": ["One of the largest bioparks in Latin America.", "Animals live in recreated natural habitats."]
        }
    },
    {
        "id": "zoologico-de-cali-life-v2",
        "type": "animal-habitat",
        "parent": "CO-VAC",
        "coords": [-76.5567, 3.4478],
        "name": {
            "de": "Zoológico de Cali",
            "hu": "Cali Állatkert",
            "ro": "Grădina Zoologică din Cali",
            "en": "Cali Zoo"
        },
        "description": {
            "de": "Ein renommierter Zoo in Cali, der für seine Erhaltungs- und Forschungsprogramme bekannt ist.",
            "hu": "Híres állatkert Caliban, amely védelmi és kutatási programjairól ismert.",
            "ro": "O grădină zoologică renumită din Cali, cunoscută pentru programele sale de conservare și cercetare.",
            "en": "A renowned zoo in Cali known for its conservation and research programs."
        },
        "facts": {
            "de": ["Beherbergt über 2500 Tiere.", "Liegt am landschaftlich schönen Ufer des Cali-Flusses."],
            "hu": ["Több mint 2500 állatnak ad otthont.", "A Cali-folyó festői partján fekszik."],
            "ro": ["Găzduiește peste 2500 de animale.", "Este situat pe malurile pitorești ale râului Cali."],
            "en": ["Houses over 2,500 animals.", "Located on the scenic banks of the Cali River."]
        }
    },
    {
        "id": "aviario-nacional-colombia-life-v2",
        "type": "animal-habitat",
        "parent": "CO-BOL",
        "coords": [-75.5947, 10.2195],
        "name": {
            "de": "Aviario Nacional de Colombia",
            "hu": "Kolumbiai Nemzeti Madárpark",
            "ro": "Aviariul Național din Columbia",
            "en": "National Aviary of Colombia"
        },
        "description": {
            "de": "Ein großes Vogelschutzgebiet nahe Cartagena, das die reiche kolumbianische Vogelvielfalt präsentiert.",
            "hu": "Hatalmas madárvédelmi terület Cartagena közelében, amely bemutatja Kolumbia gazdag madárvilágát.",
            "ro": "Un mare sanctuar de păsări lângă Cartagena, care prezintă bogata diversitate aviară a Columbiei.",
            "en": "A large bird sanctuary near Cartagena that showcases Colombia's rich avian diversity."
        },
        "facts": {
            "de": ["Eines der größten Vogelhäuser Amerikas.", "Besitzt drei verschiedene Ökosystemzonen."],
            "hu": ["Amerika egyik legnagyobb madárháza.", "Három különböző ökoszisztéma zónával rendelkezik."],
            "ro": ["Una dintre cele mai mari voliere din America.", "Are trei zone de ecosistem diferite."],
            "en": ["One of the largest aviaries in the Americas.", "Features three different ecosystem zones."]
        }
    },
    {
        "id": "acuario-del-rodadero-life-v2",
        "type": "animal-habitat",
        "parent": "CO-MAG",
        "coords": [-74.2285, 11.2173],
        "name": {
            "de": "Acuario del Rodadero",
            "hu": "Rodadero Akvárium",
            "ro": "Acvariul din Rodadero",
            "en": "Rodadero Aquarium"
        },
        "description": {
            "de": "Ein Meeresaquarium in Santa Marta, das sich auf die lokale karibische Meeresfauna konzentriert.",
            "hu": "Tengeri akvárium Santa Martában, amely a helyi karibi tengeri élővilágra összpontosít.",
            "ro": "Un acvariu marin în Santa Marta care se concentrează pe fauna marină locală din Caraibe.",
            "en": "A marine aquarium in Santa Marta focusing on local Caribbean marine wildlife."
        },
        "facts": {
            "de": ["Nur per Boot von Santa Marta aus erreichbar.", "Bietet Delfin- und Haifütterungen."],
            "hu": ["Csak hajóval közelíthető meg Santa Martából.", "Delfin- és cápaetetéseket is kínál."],
            "ro": ["Accesibil doar cu barca din Santa Marta.", "Oferă hrăniri pentru delfini și rechini."],
            "en": ["Accessible only by boat from Santa Marta.", "Offers dolphin and shark feeding shows."]
        }
    },
    {
        "id": "oceanario-islas-del-rosario-life-v2",
        "type": "animal-habitat",
        "parent": "CO-BOL",
        "coords": [-75.7599, 10.1804],
        "name": {
            "de": "Oceanario Islas del Rosario",
            "hu": "Rosario-szigetek Oceanárium",
            "ro": "Oceanariul Insulelor Rosario",
            "en": "Rosario Islands Oceanarium"
        },
        "description": {
            "de": "Ein Aquarium auf einer Insel im Rosario-Archipel, das dem Schutz des marinen Ökosystems dient.",
            "hu": "Akvárium a Rosario-szigetcsoport egyik szigetén, amely a tengeri ökoszisztéma védelmét szolgálja.",
            "ro": "Un acvariu pe o insulă din Arhipelagul Rosario dedicat protejării ecosistemului marin.",
            "en": "An aquarium on an island in the Rosario Archipelago dedicated to protecting the marine ecosystem."
        },
        "facts": {
            "de": ["Liegt mitten in einem geschützten Korallenriff.", "Besucher können Meeresschildkröten aus nächster Nähe sehen."],
            "hu": ["Védett korallzátony közepén fekszik.", "A látogatók testközelből figyelhetik meg a tengeri teknősöket."],
            "ro": ["Situat în mijlocul unui recif de corali protejat.", "Vizitatorii pot vedea broaște țestoase de mare de aproape."],
            "en": ["Located in the middle of a protected coral reef.", "Visitors can see sea turtles up close."]
        }
    },
    {
        "id": "santuario-los-flamencos-life-v2",
        "type": "animal-habitat",
        "parent": "CO-LAG",
        "coords": [-73.1163, 11.4172],
        "name": {
            "de": "Santuario Los Flamencos",
            "hu": "Los Flamencos Menedék",
            "ro": "Sanctuarul Los Flamencos",
            "en": "Los Flamencos Sanctuary"
        },
        "description": {
            "de": "Ein Naturschutzgebiet in La Guajira, das als wichtiger Lebensraum für große Populationen rosafarbener Flamingos dient.",
            "hu": "Természetvédelmi terület La Guajira-ban, amely a rózsaszín flamingók nagy populációjának fontos élőhelye.",
            "ro": "O rezervație naturală în La Guajira, un habitat important pentru populațiile mari de flamingo roz.",
            "en": "A nature reserve in La Guajira that serves as an important habitat for large populations of pink flamingos."
        },
        "facts": {
            "de": ["Die Flamingos ernähren sich von Salinenkrebsen.", "Eine essenzielle Station für viele Zugvögel."],
            "hu": ["A flamingók sóférgekkel táplálkoznak.", "Létfontosságú állomás számos vándormadár számára."],
            "ro": ["Flamingii se hrănesc cu creveți de saramură.", "O stație esențială pentru multe păsări migratoare."],
            "en": ["The flamingos feed on brine shrimp.", "An essential stopover for many migratory birds."]
        }
    },
    {
        "id": "bioparque-los-ocarros-life-v2",
        "type": "animal-habitat",
        "parent": "CO-MET",
        "coords": [-73.5937, 4.1802],
        "name": {
            "de": "Bioparque Los Ocarros",
            "hu": "Los Ocarros Biopark",
            "ro": "Bioparcul Los Ocarros",
            "en": "Los Ocarros Biopark"
        },
        "description": {
            "de": "Ein Tierpark in Villavicencio, der ausschließlich der Flora und Fauna der kolumbianischen Orinoco-Region gewidmet ist.",
            "hu": "Állatkert Villavicencióban, amelyet kizárólag a kolumbiai Orinoco régió növény- és állatvilágának szenteltek.",
            "ro": "Un parc de animale în Villavicencio dedicat exclusiv florei și faunei regiunii Orinoco din Columbia.",
            "en": "An animal park in Villavicencio dedicated exclusively to the flora and fauna of the Colombian Orinoco region."
        },
        "facts": {
            "de": ["Benannt nach dem Riesengürteltier (Ocarro).", "Zeigt Kaimane, Anakondas und seltene Jaguare."],
            "hu": ["Az óriás tatu (Ocarro) után kapta a nevét.", "Kajmánokat, anakondákat és ritka jaguárokat mutat be."],
            "ro": ["Numit după tatuul uriaș (Ocarro).", "Prezintă caimani, anaconde și jaguari rari."],
            "en": ["Named after the giant armadillo (Ocarro).", "Features caimans, anacondas, and rare jaguars."]
        }
    },
    {
        "id": "zoologico-de-barranquilla-life-v2",
        "type": "animal-habitat",
        "parent": "CO-ATL",
        "coords": [-74.8052, 11.0064],
        "name": {
            "de": "Zoológico de Barranquilla",
            "hu": "Barranquilla Állatkert",
            "ro": "Grădina Zoologică din Barranquilla",
            "en": "Barranquilla Zoo"
        },
        "description": {
            "de": "Ein historischer Zoo an der Karibikküste Kolumbiens, der sich auf den Erhalt bedrohter Arten konzentriert.",
            "hu": "Történelmi állatkert Kolumbia karibi partvidékén, amely a veszélyeztetett fajok megőrzésére összpontosít.",
            "ro": "O grădină zoologică istorică pe coasta Caraibelor din Columbia, axată pe conservarea speciilor pe cale de dispariție.",
            "en": "A historic zoo on the Caribbean coast of Colombia, focused on the conservation of endangered species."
        },
        "facts": {
            "de": ["Beherbergt den afrikanischen Elefanten und den Manati.", "Wurde bereits in den 1950er Jahren gegründet."],
            "hu": ["Afrikai elefántnak és manátinak is otthont ad.", "Már az 1950-es években megalapították."],
            "ro": ["Găzduiește elefantul african și lamantinul.", "A fost fondată încă din anii 1950."],
            "en": ["Houses the African elephant and the manatee.", "It was founded back in the 1950s."]
        }
    },
    {
        "id": "otun-quimbaya-life-v2",
        "type": "animal-habitat",
        "parent": "CO-RIS",
        "coords": [-75.5804, 4.7291],
        "name": {
            "de": "Otún Quimbaya",
            "hu": "Otún Quimbaya",
            "ro": "Otún Quimbaya",
            "en": "Otún Quimbaya"
        },
        "description": {
            "de": "Ein Schutzgebiet in der Kaffeeachse, das als Lebensraum für Brüllaffen und viele endemische Vögel dient.",
            "hu": "Védett terület a Kávétengelyen, amely bőgőmajmok és számos őshonos madár élőhelye.",
            "ro": "O zonă protejată în Axa Cafelei, care servește drept habitat pentru maimuțele urlătoare și multe păsări endemice.",
            "en": "A protected area in the Coffee Axis that serves as a habitat for howler monkeys and many endemic birds."
        },
        "facts": {
            "de": ["Besonders berühmt für Vogelbeobachtungen.", "Schützt die empfindlichen Nebelwälder der Anden."],
            "hu": ["Különösen híres a madármegfigyelésről.", "Védi az Andok érzékeny köderdeit."],
            "ro": ["Deosebit de renumit pentru observarea păsărilor.", "Protejează pădurile de nori fragile din Anzi."],
            "en": ["Particularly famous for bird watching.", "Protects the fragile cloud forests of the Andes."]
        }
    },
    {
        "id": "cueva-de-los-guacharos-life-v2",
        "type": "animal-habitat",
        "parent": "CO-HUI",
        "coords": [-76.1044, 1.6212],
        "name": {
            "de": "Cueva de los Guácharos",
            "hu": "Cueva de los Guácharos",
            "ro": "Cueva de los Guácharos",
            "en": "Cueva de los Guácharos"
        },
        "description": {
            "de": "Der älteste Nationalpark Kolumbiens, bekannt für die Fettschwalme (Guácharos), die in den tiefen Höhlen leben.",
            "hu": "Kolumbia legrégebbi nemzeti parkja, amely a mély barlangokban élő zsírfecskékről (Guácharos) ismert.",
            "ro": "Cel mai vechi parc național din Columbia, cunoscut pentru păsările guácharo care trăiesc în peșterile adânci.",
            "en": "Colombia's oldest national park, known for the oilbirds (Guácharos) that live in the deep caves."
        },
        "facts": {
            "de": ["1960 als erster Nationalpark gegründet.", "Schützt das wichtige Quellgebiet des Río Suaza."],
            "hu": ["1960-ban alapították az első nemzeti parkként.", "Védi a Río Suaza fontos forrásvidékét."],
            "ro": ["Fondat în 1960 ca primul parc național.", "Protejează importanta zonă de izvor a râului Suaza."],
            "en": ["Founded in 1960 as the first national park.", "Protects the important headwaters of the Suaza River."]
        }
    },
    {
        "id": "pnn-amacayacu-life-v2",
        "type": "animal-habitat",
        "parent": "CO-AMA",
        "coords": [-70.2647, -3.7547],
        "name": {
            "de": "PNN Amacayacu",
            "hu": "Amacayacu Nemzeti Park",
            "ro": "PN Amacayacu",
            "en": "Amacayacu National Park"
        },
        "description": {
            "de": "Ein riesiges Schutzgebiet im Amazonasgebiet, Heimat von rosa Flussdelfinen und unzähligen Primatenarten.",
            "hu": "Hatalmas védett terület az Amazonas-medencében, rózsaszín folyami delfinek és számtalan főemlős otthona.",
            "ro": "O uriașă zonă protejată din bazinul Amazonului, casa delfinilor de râu roz și a nenumărate specii de primate.",
            "en": "A vast protected area in the Amazon basin, home to pink river dolphins and countless primate species."
        },
        "facts": {
            "de": ["Umfasst extrem dichten tropischen Regenwald.", "Über 400 Vogelarten wurden hier bereits registriert."],
            "hu": ["Rendkívül sűrű trópusi esőerdőt foglal magában.", "Több mint 400 madárfajt regisztráltak már itt."],
            "ro": ["Cuprinde o pădure tropicală extrem de densă.", "Peste 400 de specii de păsări au fost înregistrate aici."],
            "en": ["Encompasses extremely dense tropical rainforest.", "Over 400 bird species have been recorded here."]
        }
    },
    {
        "id": "pnn-utria-life-v2",
        "type": "animal-habitat",
        "parent": "CO-CHO",
        "coords": [-77.3486, 6.0357],
        "name": {
            "de": "PNN Utría",
            "hu": "Utría Nemzeti Park",
            "ro": "PN Utría",
            "en": "Utría National Park"
        },
        "description": {
            "de": "Ein Nationalpark an der unberührten Pazifikküste, der als wichtige Kinderstube für ziehende Buckelwale dient.",
            "hu": "Nemzeti park az érintetlen csendes-óceáni partvidéken, amely a vonuló hosszúszárnyú bálnák fontos szaporodóhelye.",
            "ro": "Un parc național pe coasta neatinsă a Pacificului, care servește ca o importantă creșă pentru balenele cu cocoașă migratoare.",
            "en": "A national park on the pristine Pacific coast that serves as an important nursery for migrating humpback whales."
        },
        "facts": {
            "de": ["Buckelwale gebären hier jedes Jahr ihre Kälber.", "Die Landschaft besteht aus Mangroven, Regenwald und Meer."],
            "hu": ["A hosszúszárnyú bálnák minden évben itt hozzák világra kicsinyeiket.", "A táj mangroveerdőkből, esőerdőkből és a tengerből áll."],
            "ro": ["Balenele cu cocoașă își nasc puii aici în fiecare an.", "Peisajul constă din mangrove, păduri tropicale și mare."],
            "en": ["Humpback whales give birth to their calves here every year.", "The landscape consists of mangroves, rainforest, and sea."]
        }
    },
    {
        "id": "pnn-chingaza-life-v2",
        "type": "animal-habitat",
        "parent": "CO-CUN",
        "coords": [-73.7196, 4.5828],
        "name": {
            "de": "PNN Chingaza",
            "hu": "Chingaza Nemzeti Park",
            "ro": "PN Chingaza",
            "en": "Chingaza National Park"
        },
        "description": {
            "de": "Ein hochgelegener Páramo-Nationalpark, der den gefährdeten Brillenbären und Andenkondoren lebenswichtigen Schutz bietet.",
            "hu": "Magasan fekvő Páramo nemzeti park, amely létfontosságú védelmet nyújt a veszélyeztetett pápaszemes medvének és az andoki kondornak.",
            "ro": "Un parc național Páramo la mare altitudine, care oferă o protecție vitală ursului cu ochelari și condorului andin pe cale de dispariție.",
            "en": "A high-altitude Páramo national park that provides vital protection for endangered spectacled bears and Andean condors."
        },
        "facts": {
            "de": ["Versorgt die Hauptstadt Bogotá mit Trinkwasser.", "Heimat seltener Andenflora wie der charakteristischen Espeletia."],
            "hu": ["A fővárost, Bogotát látja el ivóvízzel.", "Ritka andoki növényvilágnak ad otthont, mint például a jellegzetes Espeletia."],
            "ro": ["Furnizează apă potabilă capitalei Bogotá.", "Găzduiește floră andină rară, cum ar fi caracteristica Espeletia."],
            "en": ["Supplies the capital city of Bogotá with drinking water.", "Home to rare Andean flora such as the characteristic Espeletia."]
        }
    },
    {
        "id": "zoologico-santacruz-life-v2",
        "type": "animal-habitat",
        "parent": "CO-CUN",
        "coords": [-74.3005, 4.5367],
        "name": {
            "de": "Zoológico Santacruz",
            "hu": "Santacruz Állatkert",
            "ro": "Grădina Zoologică Santacruz",
            "en": "Santacruz Zoo"
        },
        "description": {
            "de": "Ein Zoo in Cundinamarca, der durch die liebevolle Rettung von Tieren aus dem illegalen Handel entstanden ist.",
            "hu": "Cundinamarca állatkertje, amely az illegális kereskedelemből kimentett állatok megmentésére jött létre.",
            "ro": "O grădină zoologică din Cundinamarca, creată prin salvarea cu dragoste a animalelor din comerțul ilegal.",
            "en": "A zoo in Cundinamarca created through the loving rescue of animals from the illegal trade."
        },
        "facts": {
            "de": ["Starker Fokus auf Umweltbildung.", "Bietet spezielle Nacht-Touren für neugierige Besucher an."],
            "hu": ["Erős hangsúlyt fektet a környezeti nevelésre.", "Különleges éjszakai túrákat kínál a kíváncsi látogatóknak."],
            "ro": ["Concentrare puternică pe educația de mediu.", "Oferă tururi speciale de noapte pentru vizitatorii curioși."],
            "en": ["Strong focus on environmental education.", "Offers special night tours for curious visitors."]
        }
    },
    {
        "id": "kolumbianische-kaffeeachse-life-v2",
        "type": "agriculture",
        "parent": "CO-QUI",
        "coords": [-75.6811, 4.5339],
        "name": {
            "de": "Kolumbianische Kaffeeachse",
            "hu": "Kolumbiai Kávétengely",
            "ro": "Axa Cafelei din Columbia",
            "en": "Colombian Coffee Axis"
        },
        "description": {
            "de": "Die weltberühmte Kulturlandschaft, in der Kolumbiens Premium-Kaffee auf traditionelle Weise angebaut wird.",
            "hu": "A világhírű kultúrtáj, ahol Kolumbia prémium kávéját hagyományos módon termesztik.",
            "ro": "Peisajul cultural de renume mondial unde cafeaua premium columbiană este cultivată în mod tradițional.",
            "en": "The world-famous cultural landscape where Colombia's premium coffee is grown traditionally."
        },
        "facts": {
            "de": ["Gehört offiziell zum UNESCO-Weltkulturerbe.", "Produziert einige der besten Kaffees der ganzen Welt."],
            "hu": ["Hivatalosan is az UNESCO Világörökség része.", "A világ legjobb kávéi közül többet is itt állítanak elő."],
            "ro": ["Face oficial parte din Patrimoniul Mondial UNESCO.", "Produce unele dintre cele mai bune cafele din lume."],
            "en": ["Officially part of the UNESCO World Heritage.", "Produces some of the best coffees in the entire world."]
        }
    },
    {
        "id": "finca-recuca-life-v2",
        "type": "agriculture",
        "parent": "CO-QUI",
        "coords": [-75.6983, 4.4984],
        "name": {
            "de": "Finca Recuca",
            "hu": "Finca Recuca",
            "ro": "Finca Recuca",
            "en": "Finca Recuca"
        },
        "description": {
            "de": "Eine interaktive Kaffeefarm im Quindío, die Besuchern den gesamten Prozess des Kaffeeanbaus lebhaft zeigt.",
            "hu": "Interaktív kávéfarm Quindíóban, amely élénken bemutatja a látogatóknak a kávétermesztés teljes folyamatát.",
            "ro": "O fermă de cafea interactivă din Quindío care arată vizitatorilor întregul proces de cultivare a cafelei în mod viu.",
            "en": "An interactive coffee farm in Quindío that vividly shows visitors the entire process of coffee cultivation."
        },
        "facts": {
            "de": ["Der Name steht für Recorrido de la Cultura Cafetera.", "Besucher können bei der Ernte in traditioneller Kleidung helfen."],
            "hu": ["A neve a Recorrido de la Cultura Cafetera rövidítése.", "A látogatók hagyományos ruhában segíthetnek a szüretelésben."],
            "ro": ["Numele vine de la Recorrido de la Cultura Cafetera.", "Vizitatorii pot ajuta la recoltare în haine tradiționale."],
            "en": ["The name stands for Recorrido de la Cultura Cafetera.", "Visitors can help with the harvest in traditional clothing."]
        }
    },
    {
        "id": "finca-el-ocaso-life-v2",
        "type": "agriculture",
        "parent": "CO-QUI",
        "coords": [-75.5855, 4.6191],
        "name": {
            "de": "Finca El Ocaso",
            "hu": "Finca El Ocaso",
            "ro": "Finca El Ocaso",
            "en": "Finca El Ocaso"
        },
        "description": {
            "de": "Eine traditionelle Kaffeefarm in Salento, die nachhaltigen Anbau und sehr authentische Touren anbietet.",
            "hu": "Hagyományos kávéfarm Salentóban, amely fenntartható gazdálkodást és nagyon autentikus túrákat kínál.",
            "ro": "O fermă tradițională de cafea din Salento, care oferă agricultură durabilă și tururi foarte autentice.",
            "en": "A traditional coffee farm in Salento that offers sustainable agriculture and very authentic tours."
        },
        "facts": {
            "de": ["Bietet professionelle Kaffeeverkostungen an.", "Liegt in der wunderschönen Berglandschaft der Anden."],
            "hu": ["Professzionális kávékóstolókat kínál.", "Az Andok gyönyörű hegyvidéki táján fekszik."],
            "ro": ["Oferă degustări profesionale de cafea.", "Situată în frumosul peisaj montan din Anzi."],
            "en": ["Offers professional coffee tastings.", "Located in the beautiful mountainous landscape of the Andes."]
        }
    },
    {
        "id": "uraba-bananenplantagen-life-v2",
        "type": "agriculture",
        "parent": "CO-ANT",
        "coords": [-76.6268, 7.8837],
        "name": {
            "de": "Urabá-Bananenplantagen",
            "hu": "Urabá Banánültetvények",
            "ro": "Plantațiile de Banane Urabá",
            "en": "Urabá Banana Plantations"
        },
        "description": {
            "de": "Die Region Urabá in Antioquia ist das bedeutendste Zentrum des kolumbianischen Bananenanbaus und -exports.",
            "hu": "Az antioquiai Urabá régió a kolumbiai banántermesztés és -export legjelentősebb központja.",
            "ro": "Regiunea Urabá din Antioquia este cel mai important centru de cultivare și export al bananelor din Columbia.",
            "en": "The Urabá region in Antioquia is the most important center of Colombian banana cultivation and export."
        },
        "facts": {
            "de": ["Kolumbien ist einer der größten Bananenexporteure weltweit.", "Die Region liefert frische Bananen in die ganze Welt."],
            "hu": ["Kolumbia a világ egyik legnagyobb banánexportőre.", "A régió friss banánt szállít a világ minden tájára."],
            "ro": ["Columbia este unul dintre cei mai mari exportatori de banane la nivel mondial.", "Regiunea furnizează banane proaspete în întreaga lume."],
            "en": ["Colombia is one of the largest banana exporters globally.", "The region supplies fresh bananas all over the world."]
        }
    },
    {
        "id": "hacienda-venecia-life-v2",
        "type": "agriculture",
        "parent": "CO-CAL",
        "coords": [-75.5457, 5.0392],
        "name": {
            "de": "Hacienda Venecia",
            "hu": "Hacienda Venecia",
            "ro": "Hacienda Venecia",
            "en": "Hacienda Venecia"
        },
        "description": {
            "de": "Eine funktionierende Kaffeefarm in Manizales, die tiefe Einblicke in die Produktion und Röstung gibt.",
            "hu": "Működő kávéfarm Manizalesben, amely mély bepillantást enged a kávétermelésbe és -pörkölésbe.",
            "ro": "O fermă de cafea funcțională din Manizales care oferă o perspectivă profundă asupra producției și prăjirii.",
            "en": "A working coffee farm in Manizales that offers deep insights into production and roasting."
        },
        "facts": {
            "de": ["Bietet charmante Übernachtungen für Kaffeeliebhaber.", "Besitzt eine fast 100 Jahre alte historische Hauptvilla."],
            "hu": ["Bájos szálláslehetőséget kínál a kávé szerelmeseinek.", "Egy majdnem 100 éves történelmi fővillával rendelkezik."],
            "ro": ["Oferă cazare fermecătoare iubitorilor de cafea.", "Are o vilă principală istorică de aproape 100 de ani."],
            "en": ["Offers charming accommodations for coffee lovers.", "Features a nearly 100-year-old historic main villa."]
        }
    },
    {
        "id": "jardin-botanico-quindio-life-v2",
        "type": "animal-habitat",
        "parent": "CO-QUI",
        "coords": [-75.6421, 4.5126],
        "name": {
            "de": "Jardín Botánico del Quindío",
            "hu": "Quindío Botanikus Kert",
            "ro": "Grădina Botanică din Quindío",
            "en": "Quindío Botanical Garden"
        },
        "description": {
            "de": "Ein dichter botanischer Garten mit einem riesigen Schmetterlingshaus, das hunderte einheimische Arten beherbergt.",
            "hu": "Sűrű botanikus kert hatalmas lepkeházzal, amely több száz őshonos fajnak ad otthont.",
            "ro": "O grădină botanică densă, cu o uriașă casă a fluturilor, care adăpostește sute de specii native.",
            "en": "A dense botanical garden featuring a giant butterfly house that is home to hundreds of native species."
        },
        "facts": {
            "de": ["Das gigantische Mariposario hat die Form eines Schmetterlings.", "Zeigt eine der größten Sammlungen von Andenfarnen."],
            "hu": ["A gigantikus Mariposario pillangó alakú.", "Az andoki páfrányok egyik legnagyobb gyűjteményét mutatja be."],
            "ro": ["Uriașul Mariposario are forma unui fluture.", "Prezintă una dintre cele mai mari colecții de ferigi andine."],
            "en": ["The giant Mariposario is shaped like a butterfly.", "Features one of the largest collections of Andean ferns."]
        }
    },
    {
        "id": "zuckerrohrplantagen-cauca-life-v2",
        "type": "agriculture",
        "parent": "CO-VAC",
        "coords": [-76.3036, 3.5394],
        "name": {
            "de": "Valle del Cauca-Zuckerrohrplantagen",
            "hu": "Valle del Cauca Cukornádültetvények",
            "ro": "Plantațiile de trestie de zahăr din Valle del Cauca",
            "en": "Valle del Cauca Sugarcane Plantations"
        },
        "description": {
            "de": "Das fruchtbare Cauca-Tal ist die wichtigste landwirtschaftliche Region Kolumbiens für den großflächigen Anbau von Zuckerrohr.",
            "hu": "A termékeny Cauca-völgy Kolumbia legfontosabb mezőgazdasági régiója a nagyszabású cukornádtermesztésben.",
            "ro": "Fertila Valea Cauca este cea mai importantă regiune agricolă a Columbiei pentru cultivarea la scară largă a trestiei de zahăr.",
            "en": "The fertile Cauca Valley is Colombia's most important agricultural region for the large-scale cultivation of sugarcane."
        },
        "facts": {
            "de": ["Produziert fast den gesamten Zucker Kolumbiens.", "Dank des Klimas läuft die Ernte das ganze Jahr über ununterbrochen."],
            "hu": ["Kolumbia cukortermelésének szinte egészét adja.", "Az éghajlatnak köszönhetően a betakarítás egész évben megszakítás nélkül folyik."],
            "ro": ["Produce aproape tot zahărul din Columbia.", "Datorită climei, recolta continuă fără întrerupere pe tot parcursul anului."],
            "en": ["Produces nearly all of Colombia's sugar.", "Thanks to the climate, harvesting continues uninterrupted year-round."]
        }
    }
]

out = 'import type { POI } from "./poi";\n\nexport const poiExtraColombiaLifeV2: POI[] = [\n'

for i, p in enumerate(pois):
    out += '  {\n'
    out += f'    id: "{p["id"]}",\n'
    out += f'    type: "{p["type"]}",\n'
    out += f'    parent: "{p["parent"]}",\n'
    out += f'    coords: [{p["coords"][0]}, {p["coords"][1]}],\n'
    
    # name
    out += '    name: {\n'
    out += f'      de: {json.dumps(p["name"]["de"], ensure_ascii=False)},\n'
    out += f'      hu: {json.dumps(p["name"]["hu"], ensure_ascii=False)},\n'
    out += f'      ro: {json.dumps(p["name"]["ro"], ensure_ascii=False)},\n'
    out += f'      en: {json.dumps(p["name"]["en"], ensure_ascii=False)}\n'
    out += '    },\n'
    
    # description
    out += '    description: {\n'
    out += f'      de: {json.dumps(p["description"]["de"], ensure_ascii=False)},\n'
    out += f'      hu: {json.dumps(p["description"]["hu"], ensure_ascii=False)},\n'
    out += f'      ro: {json.dumps(p["description"]["ro"], ensure_ascii=False)},\n'
    out += f'      en: {json.dumps(p["description"]["en"], ensure_ascii=False)}\n'
    out += '    },\n'
    
    # facts
    out += '    facts: {\n'
    out += f'      de: [{json.dumps(p["facts"]["de"][0], ensure_ascii=False)}, {json.dumps(p["facts"]["de"][1], ensure_ascii=False)}],\n'
    out += f'      hu: [{json.dumps(p["facts"]["hu"][0], ensure_ascii=False)}, {json.dumps(p["facts"]["hu"][1], ensure_ascii=False)}],\n'
    out += f'      ro: [{json.dumps(p["facts"]["ro"][0], ensure_ascii=False)}, {json.dumps(p["facts"]["ro"][1], ensure_ascii=False)}],\n'
    out += f'      en: [{json.dumps(p["facts"]["en"][0], ensure_ascii=False)}, {json.dumps(p["facts"]["en"][1], ensure_ascii=False)}]\n'
    out += '    }\n'
    
    if i == len(pois) - 1:
        out += '  }\n'
    else:
        out += '  },\n'

out += '];\n'

with open('lib/visualLab/data/poiExtraColombiaLifeV2.ts', 'w', encoding='utf-8') as f:
    f.write(out)

print("Created 30 POIs.")
