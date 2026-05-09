import type { POI } from "./poi";

export const poiExtraTogoLifeV2: POI[] = [
  {
    id: "sarakawa-wildtierreservat-life-v2",
    type: "animal-habitat",
    parent: "TG-K",
    coords: [1.1, 9.6],
    name: {
      de: "Sarakawa Wildtierreservat",
      hu: "Sarakawa vadaspark",
      ro: "Rezervația de animale Sarakawa",
      en: "Sarakawa Wildlife Reserve"
    },
    description: {
      de: "Dieses Reservat beherbergt eine Vielzahl von Wildtieren wie Zebras, Antilopen und Büffel in einer geschützten Savannenlandschaft.",
      hu: "Ez a rezervátum számos vadon élő állatnak, például zebráknak, antilopoknak és bivalyoknak ad otthont egy védett szavannai tájon.",
      ro: "Această rezervație găzduiește o varietate de animale sălbatice, cum ar mi zebrele, antilopele și bivolii, într-un peisaj de savană protejat.",
      en: "This reserve is home to a variety of wildlife such as zebras, antelopes, and buffaloes in a protected savanna landscape."
    },
    facts: {
      de: ["Beheimatet Zebras und Antilopen", "Beliebtes Ziel für Safaris"],
      hu: ["Zebráknak és antilopoknak ad otthont", "Népszerű szafari helyszín"],
      ro: ["Găzduiește zebre și antilope", "Destinație populară pentru safari"],
      en: ["Home to zebras and antelopes", "Popular destination for safaris"]
    }
  },
  {
    id: "kpalime-kaffeeplantagen-life-v2",
    type: "agriculture",
    parent: "TG-P",
    coords: [0.6, 6.9],
    name: {
      de: "Kaffeeplantagen von Kpalimé",
      hu: "Kpalimé kávéültetvényei",
      ro: "Plantațiile de cafea din Kpalimé",
      en: "Kpalimé Coffee Plantations"
    },
    description: {
      de: "Die Region um Kpalimé ist bekannt für ihren fruchtbaren Boden, auf dem hochwertiger Kaffee und Kakao unter dem Blätterdach hoher Bäume gedeihen.",
      hu: "Kpalimé környéke termékeny talajáról ismert, ahol kiváló minőségű kávé és kakaó terem a magas fák lombkoronája alatt.",
      ro: "Regiunea din jurul Kpalimé este cunoscută pentru solul său fertil, unde cafeaua și cacao de înaltă calitate prosperă sub coronamentul arborilor înalți.",
      en: "The region around Kpalimé is known for its fertile soil, where high-quality coffee and cocoa thrive under the canopy of tall trees."
    },
    facts: {
      de: ["Wichtiges Kaffeeanbaugebiet", "Traditionelle Erntemethoden"],
      hu: ["Fontos kávétermesztő vidék", "Hagyományos betakarítási módszerek"],
      ro: ["Zonă importantă de cultivare a cafelei", "Metode tradiționale de recoltare"],
      en: ["Important coffee-growing area", "Traditional harvesting methods"]
    }
  },
  {
    id: "centrale-reisfelder-life-v2",
    type: "agriculture",
    parent: "TG-C",
    coords: [1.1, 8.9],
    name: {
      de: "Reisfelder der Centrale-Region",
      hu: "A Középső régió rizsföldjei",
      ro: "Câmpurile de orez din regiunea Centrală",
      en: "Central Region Rice Fields"
    },
    description: {
      de: "In den feuchten Ebenen der Centrale-Region erstrecken sich weite Reisfelder, die eine lebenswichtige Grundlage für die Ernährung der Bevölkerung bilden.",
      hu: "A Középső régió nedves síkságain széles rizsföldek húzódnak, amelyek létfontosságú alapját képezik a lakosság élelmezésének.",
      ro: "În câmpiile umede ale regiunii Centrale se întind câmpuri vaste de orez, care constituie o bază vitală pentru nutriția populației.",
      en: "In the moist plains of the Central region, vast rice fields stretch out, forming a vital basis for the population's nutrition."
    },
    facts: {
      de: ["Zentrum des Reisanbaus", "Nutzung von Bewässerungssystemen"],
      hu: ["A rizstermesztés központja", "Öntözőrendszerek használata"],
      ro: ["Centrul cultivării orezului", "Utilizarea sistemelor de irigații"],
      en: ["Center of rice cultivation", "Use of irrigation systems"]
    }
  },
  {
    id: "bassar-yam-felder-life-v2",
    type: "agriculture",
    parent: "TG-K",
    coords: [0.7, 9.2],
    name: {
      de: "Bassar Yam-Felder",
      hu: "Bassar jamgyökér-földjei",
      ro: "Câmpurile de igname din Bassar",
      en: "Bassar Yam Fields"
    },
    description: {
      de: "Bassar ist berühmt für den Anbau von Yamswurzeln, die in der lokalen Küche und bei traditionellen Festen eine zentrale Rolle spielen.",
      hu: "Bassar híres a jamgyökér termesztéséről, amely központi szerepet játszik a helyi konyhában és a hagyományos ünnepeken.",
      ro: "Bassar este renumit pentru cultivarea ignamelor, care joacă un rol central în bucătăria locală și în festivalurile tradiționale.",
      en: "Bassar is famous for the cultivation of yams, which play a central role in local cuisine and traditional festivals."
    },
    facts: {
      de: ["Bedeutendes Grundnahrungsmittel", "Jährliches Yam-Festival"],
      hu: ["Fontos alapélelmiszer", "Évenkénti Jam-fesztivál"],
      ro: ["Aliment de bază important", "Festival anual al ignamei"],
      en: ["Important staple food", "Annual Yam Festival"]
    }
  },
  {
    id: "tsevie-maniokfelder-life-v2",
    type: "agriculture",
    parent: "TG-M",
    coords: [1.2, 6.4],
    name: {
      de: "Maniokfelder von Tsévié",
      hu: "Tsévié maniókaföldjei",
      ro: "Câmpurile de manioc din Tsévié",
      en: "Tsévié Cassava Fields"
    },
    description: {
      de: "Rund um Tsévié prägen ausgedehnte Maniokfelder das Landschaftsbild, wobei die Wurzeln oft direkt vor Ort zu Gari verarbeitet werden.",
      hu: "Tsévié környékén kiterjedt maniókaföldek határozzák meg a tájat, a gyökereket gyakran közvetlenül a helyszínen gari-vá dolgozzák fel.",
      ro: "În jurul orașului Tsévié, câmpuri extinse de manioc definesc peisajul, rădăcinile fiind adesea procesate direct la fața locului în gari.",
      en: "Around Tsévié, extensive cassava fields characterize the landscape, with the roots often processed directly on-site into gari."
    },
    facts: {
      de: ["Zentrum der Gari-Produktion", "Widerstandsfähige Nutzpflanze"],
      hu: ["A gari-termelés központja", "Ellenálló haszonnövény"],
      ro: ["Centrul producției de gari", "Plantă de cultură rezistentă"],
      en: ["Center of gari production", "Resilient crop"]
    }
  },
  {
    id: "atakpame-baumwollfelder-life-v2",
    type: "agriculture",
    parent: "TG-P",
    coords: [1.1, 7.5],
    name: {
      de: "Baumwollfelder von Atakpamé",
      hu: "Atakpamé pamutmezői",
      ro: "Câmpurile de bumbac din Atakpamé",
      en: "Atakpamé Cotton Fields"
    },
    description: {
      de: "Die sonnigen Ebenen bei Atakpamé sind ideal für den Baumwollanbau, der ein wichtiger Exportzweig der togoischen Landwirtschaft ist.",
      hu: "Az Atakpamé melletti napos síkságok ideálisak a pamuttermeléshez, amely a togói mezőgazdaság fontos exportága.",
      ro: "Câmpiile însorite de lângă Atakpamé sunt ideale pentru cultivarea bumbacului, care este o ramură importantă de export a agriculturii togoleze.",
      en: "The sunny plains near Atakpamé are ideal for cotton cultivation, which is an important export branch of Togolese agriculture."
    },
    facts: {
      de: ["Wichtiges Exportgut", "Handgepflückte Qualität"],
      hu: ["Fontos exportcikk", "Kézzel szedett minőség"],
      ro: ["Produs important de export", "Calitate culeasă manual"],
      en: ["Important export commodity", "Hand-picked quality"]
    }
  },
  {
    id: "be-heiliger-wald-life-v2",
    type: "animal-habitat",
    parent: "TG-M",
    coords: [1.2, 6.1],
    name: {
      de: "Heiliger Wald von Bé",
      hu: "Bé szent erdő",
      ro: "Pădurea sacră din Bé",
      en: "Sacred Forest of Bé"
    },
    description: {
      de: "Mitten in der Hauptstadt Lomé gelegen, ist dieser heilige Wald ein Rückzugsort für kleine Säugetiere, Vögel und seltene Pflanzenarten.",
      hu: "A főváros, Lomé közepén található szent erdő kisemlősök, madarak és ritka növényfajok menedékhelye.",
      ro: "Situată în mijlocul capitalei Lomé, această pădure sacră este un refugiu pentru mamifere mici, păsări și specii de plante rare.",
      en: "Located in the middle of the capital Lomé, this sacred forest is a retreat for small mammals, birds, and rare plant species."
    },
    facts: {
      de: ["Religiöse Bedeutung", "Urbaner Biodiversitäts-Hotspot"],
      hu: ["Vallási jelentőség", "Városi biodiverzitási hotspot"],
      ro: ["Semnificație religioasă", "Hotspot de biodiversitate urbană"],
      en: ["Religious significance", "Urban biodiversity hotspot"]
    }
  },
  {
    id: "kouffo-wildtierreservat-life-v2",
    type: "animal-habitat",
    parent: "TG-M",
    coords: [1.6, 6.8],
    name: {
      de: "Kouffo-Wildtierreservat",
      hu: "Kouffo vadrezervátum",
      ro: "Rezervația de animale Kouffo",
      en: "Kouffo Wildlife Reserve"
    },
    description: {
      de: "Dieses Schutzgebiet am Mono-Fluss bietet Lebensraum für verschiedene Primatenarten und eine reiche Vogelwelt in den Uferwäldern.",
      hu: "Ez a Mono-folyó menti védett terület különböző főemlősfajoknak és gazdag madárvilágnak ad otthont a parti erdőkben.",
      ro: "Această arie protejată de pe râul Mono oferă habitat pentru diverse specii de primate și o lume bogată a păsărilor în pădurile riverane.",
      en: "This protected area on the Mono River provides habitat for various primate species and a rich birdlife in the riparian forests."
    },
    facts: {
      de: ["Schutz von Primaten", "Reich an Wasservögeln"],
      hu: ["Főemlősök védelme", "Gazdag vízimadarakban"],
      ro: ["Protecția primatelor", "Bogat în păsări de apă"],
      en: ["Protection of primates", "Rich in waterbirds"]
    }
  },
  {
    id: "galangashie-fauna-reservat-life-v2",
    type: "animal-habitat",
    parent: "TG-S",
    coords: [0.5, 10.4],
    name: {
      de: "Galangashie-Fauna-Reservat",
      hu: "Galangashie vadrezervátum",
      ro: "Rezervația de faună Galangashie",
      en: "Galangashie Fauna Reserve"
    },
    description: {
      de: "Im trockenen Norden gelegen, ist dieses Reservat ein wichtiger Zufluchtsort für Gazellen und verschiedene Nagetierarten der Savanne.",
      hu: "A száraz északon található rezervátum fontos menedékhelye a gazelláknak és a szavanna különböző rágcsálófajainak.",
      ro: "Situată în nordul arid, această rezervație este un refugiu important pentru gazele și diverse specii de rozătoare din savană.",
      en: "Located in the dry north, this reserve is an important sanctuary for gazelles and various rodent species of the savanna."
    },
    facts: {
      de: ["Schutz von Savannentieren", "Trockenes Ökosystem"],
      hu: ["Szavannai állatok védelme", "Száraz ökoszisztéma"],
      ro: ["Protecția animalelor de savană", "Ecosistem arid"],
      en: ["Protection of savanna animals", "Dry ecosystem"]
    }
  },
  {
    id: "lome-vergnuegungspark-life-v2",
    type: "kid-landmark",
    parent: "TG-M",
    coords: [1.2, 6.1],
    name: {
      de: "Lomé Freizeitpark",
      hu: "Lomé vidámpark",
      ro: "Parcul de distracții Lomé",
      en: "Lomé Amusement Park"
    },
    description: {
      de: "Ein beliebter Ort für Familien in der Hauptstadt, der verschiedene Fahrgeschäfte und Spielplätze für Kinder aller Altersgruppen bietet.",
      hu: "A főváros családjai körében népszerű hely, amely különböző játékokat és játszótereket kínál minden korosztályú gyermek számára.",
      ro: "Un loc popular pentru familiile din capitală, oferind diverse atracții și locuri de joacă pentru copii de toate vârstele.",
      en: "A popular spot for families in the capital, offering various rides and playgrounds for children of all ages."
    },
    facts: {
      de: ["Familienfreundlich", "Moderne Spielgeräte"],
      hu: ["Családbarát", "Modern játékok"],
      ro: ["Prietenos cu familiile", "Echipamente de joacă moderne"],
      en: ["Family-friendly", "Modern play equipment"]
    }
  },
  {
    id: "agbodrafo-schildkroetenzentrum-life-v2",
    type: "animal-habitat",
    parent: "TG-M",
    coords: [1.4, 6.2],
    name: {
      de: "Schildkrötenschutzzentrum Agbodrafo",
      hu: "Agbodrafo teknősvédelmi központ",
      ro: "Centrul de protecție a țestoaselor Agbodrafo",
      en: "Agbodrafo Turtle Conservation Center"
    },
    description: {
      de: "An den Stränden von Agbodrafo werden Meeresschildkröten geschützt, die hierher kommen, um ihre Eier im warmen Sand abzulegen.",
      hu: "Agbodrafo strandjain tengeri teknősöket védenek, amelyek azért jönnek ide, hogy tojásaikat a meleg homokba rakják.",
      ro: "Pe plajele din Agbodrafo sunt protejate țestoasele marine care vin aici să își depună ouăle în nisipul cald.",
      en: "On the beaches of Agbodrafo, sea turtles are protected as they come here to lay their eggs in the warm sand."
    },
    facts: {
      de: ["Schutz bedrohter Arten", "Saisonale Eiablage"],
      hu: ["Veszélyeztetett fajok védelme", "Szezonális tojásrakás"],
      ro: ["Protecția speciilor amenințate", "Depunere sezonieră a ouălor"],
      en: ["Protection of endangered species", "Seasonal egg-laying"]
    }
  },
  {
    id: "mandouri-wildtierkorridor-life-v2",
    type: "animal-habitat",
    parent: "TG-S",
    coords: [0.8, 10.8],
    name: {
      de: "Mandouri Wildtierkorridor",
      hu: "Mandouri vadvilági folyosó",
      ro: "Coridorul de animale sălbatice Mandouri",
      en: "Mandouri Wildlife Corridor"
    },
    description: {
      de: "Dieser Korridor ermöglicht es Tieren wie Elefanten, zwischen den Schutzgebieten in Togo, Benin und Burkina Faso zu wandern.",
      hu: "Ez a folyosó lehetővé teszi az állatok, például az elefántok számára a vándorlást Togo, Benin és Burkina Faso védett területei között.",
      ro: "Acest coridor permite animalelor precum elefanții să migreze între ariile protejate din Togo, Benin și Burkina Faso.",
      en: "This corridor allows animals such as elephants to migrate between protected areas in Togo, Benin, and Burkina Faso."
    },
    facts: {
      de: ["Wichtiger Wanderweg", "Grenzüberschreitender Schutz"],
      hu: ["Fontos vándorlási útvonal", "Határokon átnyúló védelem"],
      ro: ["Rută importantă de migrație", "Protecție transfrontalieră"],
      en: ["Important migration route", "Transboundary protection"]
    }
  },
  {
    id: "plateaux-kakao-gaerten-life-v2",
    type: "agriculture",
    parent: "TG-P",
    coords: [0.8, 7.2],
    name: {
      de: "Kakaogärten der Plateaux-Region",
      hu: "A Plateaux régió kakaóskertjei",
      ro: "Grădinile de cacao din regiunea Plateaux",
      en: "Plateaux Region Cocoa Gardens"
    },
    description: {
      de: "Unter dem schattigen Blätterdach des Plateaus wachsen Kakaobäume, deren Bohnen zu den besten des Landes zählen und weltweit exportiert werden.",
      hu: "A fennsík árnyas lombkoronája alatt kakaófák nőnek, amelyek babjai az ország legjobbjai közé tartoznak, és világszerte exportálják őket.",
      ro: "Sub coronamentul umbros al platoului cresc arbori de cacao, ale căror boabe sunt printre cele mai bune din țară și sunt exportate în întreaga lume.",
      en: "Under the shady canopy of the plateau, cocoa trees grow, whose beans are among the best in the country and are exported worldwide."
    },
    facts: {
      de: ["Hervorragende Qualität", "Ökologischer Anbau"],
      hu: ["Kiváló minőség", "Ökológiai termesztés"],
      ro: ["Calitate excelentă", "Cultivare ecologică"],
      en: ["Excellent quality", "Ecological cultivation"]
    }
  },
  {
    id: "savanes-viehweiden-life-v2",
    type: "agriculture",
    parent: "TG-S",
    coords: [0.2, 10.5],
    name: {
      de: "Viehweiden der Savanes-Region",
      hu: "A Savanes régió legelői",
      ro: "Pășunile de animale din regiunea Savanes",
      en: "Savanes Region Cattle Pastures"
    },
    description: {
      de: "Die weiten Graslandschaften im Norden Togos bieten ideale Bedingungen für die Rinderzucht, die die Haupteinnahmequelle vieler Familien ist.",
      hu: "Togo északi részének tágas füves területei ideális feltételeket biztosítanak a szarvasmarha-tenyésztéshez, amely sok család fő bevételi forrása.",
      ro: "Pășunile vaste din nordul Togolei oferă condiții ideale pentru creșterea vitelor, care este principala sursă de venit pentru multe familii.",
      en: "The vast grasslands in northern Togo provide ideal conditions for cattle ranching, which is the main source of income for many families."
    },
    facts: {
      de: ["Traditionelle Viehzucht", "Wichtiger Fleischlieferant"],
      hu: ["Hagyományos állattenyésztés", "Fontos húsbeszállító"],
      ro: ["Creșterea tradițională a vitelor", "Furnizor important de carne"],
      en: ["Traditional cattle herding", "Important meat supplier"]
    }
  },
  {
    id: "lome-amitie-park-life-v2",
    type: "kid-landmark",
    parent: "TG-M",
    coords: [1.2, 6.1],
    name: {
      de: "Freundschaftspark Lomé",
      hu: "Barátság park Lomé",
      ro: "Parcul Prieteniei Lomé",
      en: "Friendship Park Lomé"
    },
    description: {
      de: "Eine grüne Oase im Herzen der Stadt, die mit gepflegten Wegen und schattigen Plätzen zum Spielen und Entspannen einlädt.",
      hu: "Zöld oázis a város szívében, amely gondozott ösvényeivel és árnyas helyeivel játékra és kikapcsolódásra hívogat.",
      ro: "O oază de verdeață în inima orașului, care invită la joacă și relaxare cu aleile sale îngrijite și locurile umbrite.",
      en: "A green oasis in the heart of the city, inviting play and relaxation with its well-maintained paths and shaded areas."
    },
    facts: {
      de: ["Grüne Lunge der Stadt", "Sicherer Spielraum"],
      hu: ["A város zöld tüdeje", "Biztonságos játszótér"],
      ro: ["Plămânul verde al orașului", "Spațiu de joacă sigur"],
      en: ["Green lung of the city", "Safe play area"]
    }
  },
  {
    id: "mono-nilpferd-pool-life-v2",
    type: "animal-habitat",
    parent: "TG-M",
    coords: [1.5, 6.7],
    name: {
      de: "Nilpferd-Pool am Mono-Fluss",
      hu: "Víziló-medence a Mono-folyón",
      ro: "Piscina hipopotamilor de pe râul Mono",
      en: "Mono River Hippo Pool"
    },
    description: {
      de: "An bestimmten Stellen des Mono-Flusses lassen sich Gruppen von Nilpferden beobachten, die den Tag im kühlen Wasser verbringen.",
      hu: "A Mono-folyó bizonyos pontjain vízilócsoportok figyelhetők meg, amint a napot a hűvös vízben töltik.",
      ro: "În anumite puncte ale râului Mono pot fi observate grupuri de hipopotami petrecându-și ziua în apa răcoroasă.",
      en: "At certain points along the Mono River, groups of hippos can be observed spending the day in the cool water."
    },
    facts: {
      de: ["Beobachtung von Wildtieren", "Schutz des Flussökosystems"],
      hu: ["Vadvilág megfigyelése", "A folyó ökoszisztémájának védelme"],
      ro: ["Observarea animalelor sălbatice", "Protecția ecosistemului râului"],
      en: ["Wildlife spotting", "River ecosystem protection"]
    }
  },
  {
    id: "oti-elefantenreservat-life-v2",
    type: "animal-habitat",
    parent: "TG-S",
    coords: [0.4, 10.3],
    name: {
      de: "Oti-Elefantenreservat",
      hu: "Oti elefántrezervátum",
      ro: "Rezervația de elefanți Oti",
      en: "Oti Elephant Reserve"
    },
    description: {
      de: "Dieses Reservat im Norden Togos ist einer der letzten Orte im Land, an dem man freilebende Elefantenherden in ihrer natürlichen Umgebung sehen kann.",
      hu: "Ez az észak-togói rezervátum az egyik utolsó hely az országban, ahol szabadon élő elefántcsordákat láthatunk természetes környezetükben.",
      ro: "Această rezervație din nordul Togolei este unul dintre ultimele locuri din țară unde pot fi văzute turme de elefanți liberi în mediul lor natural.",
      en: "This reserve in northern Togo is one of the last places in the country where you can see free-roaming elephant herds in their natural environment."
    },
    facts: {
      de: ["Größte Landsäugetiere", "Bedeutendes Schutzprojekt"],
      hu: ["Legnagyobb szárazföldi emlősök", "Fontos természetvédelmi projekt"],
      ro: ["Cele mai mari mamifere terestre", "Proiect important de conservare"],
      en: ["Largest land mammals", "Significant conservation project"]
    }
  },
  {
    id: "kande-hirsefelder-life-v2",
    type: "agriculture",
    parent: "TG-K",
    coords: [1.0, 9.9],
    name: {
      de: "Hirsefelder von Kandé",
      hu: "Kandé kölesmezői",
      ro: "Câmpurile de mei din Kandé",
      en: "Kandé Millet Fields"
    },
    description: {
      de: "Hirse ist das wichtigste Getreide im Norden Togos und wird auf den weiten Feldern rund um Kandé für den täglichen Bedarf angebaut.",
      hu: "A köles Észak-Togo legfontosabb gabonája, amelyet Kandé környéki tágas földeken termesztenek a napi szükségletek kielégítésére.",
      ro: "Meiul este cea mai importantă cereală din nordul Togolei și este cultivat pe câmpurile vaste din jurul orașului Kandé pentru nevoile zilnice.",
      en: "Millet is the most important grain in northern Togo and is grown on the vast fields around Kandé for daily needs."
    },
    facts: {
      de: ["Grundnahrungsmittel des Nordens", "Anpassung an Trockenheit"],
      hu: ["Az északi rész alapélelmiszere", "Alkalmazkodás a szárazsághoz"],
      ro: ["Aliment de bază al nordului", "Adaptare la secetă"],
      en: ["Staple food of the North", "Adaptation to drought"]
    }
  },
  {
    id: "aneho-lagunen-bootstour-life-v2",
    type: "kid-landmark",
    parent: "TG-M",
    coords: [1.6, 6.2],
    name: {
      de: "Aného Lagunen-Bootstour",
      hu: "Aného lagúna hajótúra",
      ro: "Tur cu barca pe laguna Aného",
      en: "Aného Lagoon Boat Trip"
    },
    description: {
      de: "Eine sanfte Bootsfahrt auf der Lagune von Aného bietet Kindern die Möglichkeit, Mangroven und bunte Vögel aus nächster Nähe zu entdecken.",
      hu: "Egy gyengéd hajókázás az Aného-lagúnán lehetőséget nyújt a gyerekeknek a mangroveerdők és a színes madarak közeli felfedezésére.",
      ro: "O plimbare linistită cu barca pe laguna Aného oferă copiilor ocazia de a descoperi mangrovele și păsările colorate de aproape.",
      en: "A gentle boat trip on the Aného lagoon offers children the chance to discover mangroves and colorful birds up close."
    },
    facts: {
      de: ["Naturerlebnis für Kinder", "Einblick in das Fischerleben"],
      hu: ["Természeti élmény gyerekeknek", "Betekintés a halászéletbe"],
      ro: ["Experiență în natură pentru copii", "Incursiune în viața pescarilor"],
      en: ["Nature experience for kids", "Insight into fishing life"]
    }
  },
  {
    id: "missahoe-schmetterlingspfad-life-v2",
    type: "animal-habitat",
    parent: "TG-P",
    coords: [0.5, 6.9],
    name: {
      de: "Missahoé Schmetterlingspfad",
      hu: "Missahoé pillangó-ösvény",
      ro: "Traseul fluturilor din Missahoé",
      en: "Missahoé Butterfly Trail"
    },
    description: {
      de: "Dieser Pfad im dichten Wald von Missahoé ist berühmt für seine unglaubliche Vielfalt an bunten Schmetterlingen, die hier ideale Bedingungen finden.",
      hu: "Ez a Missahoé sűrű erdőjében található ösvény a színes pillangók hihetetlen változatosságáról híres, amelyek itt ideális feltételeket találnak.",
      ro: "Acest traseu din pădurea deasă din Missahoé este renumit pentru diversitatea incredibilă de fluturi colorați care găsesc aici condiții ideale.",
      en: "This trail in the dense forest of Missahoé is famous for its incredible variety of colorful butterflies that find ideal conditions here."
    },
    facts: {
      de: ["Riesige Artenvielfalt", "Geführte Naturwanderungen"],
      hu: ["Hatalmas fajgazdagság", "Vezetett természetjáró túrák"],
      ro: ["Diversitate uriașă de specii", "Drumeții ghidate în natură"],
      en: ["Huge species diversity", "Guided nature hikes"]
    }
  }
];
