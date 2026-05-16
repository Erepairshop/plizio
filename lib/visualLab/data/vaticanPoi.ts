// @ts-nocheck
import type { POI } from "./poi";
export const vaticanCountry: POI = {
  id: "country-vatican",
  type: "country",
  parent: "europe",
  coords: [12.4534, 41.9029],
  name: {
    de: "Vatikanstadt",
    hu: "Vatikán",
    ro: "Vatican",
    en: "Vatican City"
  },
  description: {
    de: "Der Vatikan ist der kleinste Staat der Welt, ein Stadtstaat im Herzen von Rom und das spirituelle Zentrum der römisch-katholischen Kirche.",
    hu: "A Vatikán a világ legkisebb állama, egy Róma szívében fekvő városállam, a római katolikus egyház spirituális központja.",
    ro: "Vaticanul este cel mai mic stat din lume, un oraș-stat în inima Romei și centrul spiritual al Bisericii Romano-Catolice.",
    en: "The Vatican is the smallest state in the world, a city-state in the heart of Rome and the spiritual center of the Roman Catholic Church."
  },
  facts: {
    de: [
      "Der kleinste Staat der Welt (0,44 km²).",
      "Sitz des Papstes, des Oberhauptes der katholischen Kirche.",
      "Vollständig von der italienischen Hauptstadt Rom umschlossen.",
      "Amtssprache ist Latein (für offizielle Dokumente) und Italienisch.",
      "Besitzt eine eigene Post, Armee (Schweizergarde) und Währung (Euro).",
      "Das gesamte Staatsgebiet ist UNESCO-Weltkulturerbe.",
      "Hat keine Steuern und lebt von Spenden und Souvenirverkäufen.",
      "Die Vatikanischen Museen gehören zu den bedeutendsten Kunstsammlungen weltweit.",
      "Der Petersdom ist eine der größten Kirchen der Welt.",
      "Die Schweizergarde schützt den Papst seit 1506."
    ],
    hu: [
      "A világ legkisebb független állama (0,44 km²).",
      "A pápa, a katolikus egyház fejének székhelye.",
      "Teljesen körbeöleli Róma, az olasz főváros.",
      "Hivatalos nyelve a latin (dokumentumokban) és az olasz.",
      "Saját postája, hadserege (Svájci Gárda) és pénzneme (euró) van.",
      "Egész területe az UNESCO Világörökség része.",
      "Nincsenek adók, az állam adományokból és ajándéktárgyakból tartja fenn magát.",
      "A Vatikáni Múzeumok a világ legjelentősebb művészeti gyűjteményei közé tartoznak.",
      "A Szent Péter-bazilika a világ egyik legnagyobb temploma.",
      "A Svájci Gárda 1506 óta védi a pápát."
    ],
    ro: [
      "Cel mai mic stat independent din lume (0,44 km²).",
      "Sediul Papei, capul Bisericii Catolice.",
      "Complet înconjurat de capitala Italiei, Roma.",
      "Limba oficială este latina (pentru documente) și italiana.",
      "Are propria poștă, armată (Garda Elvețiană) și monedă (euro).",
      "Întregul teritoriu este inclus în Patrimoniul Mondial UNESCO.",
      "Nu există taxe, statul se întreține din donații și vânzări de suveniruri.",
      "Muzeele Vaticane sunt printre cele mai importante colecții de artă din lume.",
      "Bazilica Sfântul Petru este una dintre cele mai mari biserici din lume.",
      "Garda Elvețiană îl protejează pe Papă din 1506."
    ],
    en: [
      "The smallest independent state in the world (0.44 km²).",
      "Seat of the Pope, the head of the Catholic Church.",
      "Completely surrounded by the Italian capital Rome.",
      "Official languages are Latin (for documents) and Italian.",
      "Has its own post office, army (Swiss Guard) and currency (Euro).",
      "The entire territory is a UNESCO World Heritage site.",
      "Has no taxes, the state supports itself through donations and souvenir sales.",
      "The Vatican Museums are among the most important art collections in the world.",
      "St. Peter's Basilica is one of the largest churches in the world.",
      "The Swiss Guard has protected the Pope since 1506."
    ]
  },
  image: "/geo-images/vatican/country-vatican.webp"
};

export const vaticanPois: POI[] = [
  {
    id: "landmark-vatican-museums",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.4533, 41.9064],
    name: {
      de: "Vatikanische Museen",
      hu: "Vatikáni Múzeumok",
      ro: "Muzeele Vaticane",
      en: "Vatican Museums"
    },
    description: {
      de: "Eines der größten und bedeutendsten Kunstmuseen der Welt mit unschätzbaren Schätzen.",
      hu: "A világ egyik legnagyobb és legjelentősebb művészeti múzeuma felbecsülhetetlen kincsekkel.",
      ro: "Unul dintre cele mai mari și mai importante muzee de artă din lume, cu comori neprețuite.",
      en: "One of the largest and most significant art museums in the world with priceless treasures."
    }, image: "/poi-images/landmark-vatican-museums.webp",
    descriptionAdvanced: {
      de: "Die Vatikanischen Museen beherbergen eine der bedeutendsten Kunstsammlungen der Welt innerhalb der Vatikanstadt. Sie wurden im frühen 16. Jahrhundert von Papst Julius II. begründet und erstrecken sich über zahlreiche Paläste und Galerien. Die Sammlung umfasst antike Skulpturen, Renaissance-Malerei und ägyptische Artefakte. Der Rundgang durch die Museen führt Besucher schließlich in die berühmte Sixtinische Kapelle.",
      hu: "A Vatikáni Múzeumok a világ egyik legjelentősebb művészeti gyűjteményének adnak otthont a Vatikánvároson belül. A 16. század elején alapította II. Gyula pápa, és számos palotán, valamint galérián keresztül húzódik. A gyűjtemény antik szobrokat, reneszánsz festményeket és egyiptomi műtárgyakat tartalmaz. A múzeumi tárlatvezetés végül a híres Sixtus-kápolnába vezeti a látogatókat.",
      ro: "Muzeele Vaticane adăpostesc una dintre cele mai importante colecții de artă din lume, situată în incinta statului Vatican. Fondate în secolul al XVI-lea de Papa Iuliu al II-lea, acestea se întind pe numeroase palate și galerii. Colecția cuprinde sculpturi antice, picturi renascentiste și artefacte egiptene. Traseul prin muzee îi conduce în cele din urmă pe vizitatori în celebra Capelă Sixtină.",
      en: "The Vatican Museums house one of the world's most significant art collections within Vatican City. Founded in the early 16th century by Pope Julius II, they span numerous palaces and galleries. The collection includes ancient sculptures, Renaissance paintings, and Egyptian artifacts. The tour through the museums eventually leads visitors into the famous Sistine Chapel.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1506", "Über 7 Millionen Besucher jährlich", "Länge des Rundgangs beträgt ca. 7 km", "54 Galerien insgesamt", "Beherbergt die Laokoon-Gruppe", "Besitz von ca. 70.000 Kunstwerken"],
      hu: ["1506-ban alapították", "Évi több mint 7 millió látogató", "A látogatói útvonal hossza kb. 7 km", "Összesen 54 galéria", "Itt található a Laokoón-csoport", "Kb. 70 000 műalkotás tulajdonosa"],
      ro: ["Fondate în anul 1506", "Peste 7 milioane de vizitatori anual", "Lungimea traseului este de aproximativ 7 km", "54 de galerii în total", "Găzduiește grupul statuar Laocoon", "Deține aproximativ 70.000 de opere de artă"],
      en: ["Founded in 1506", "Over 7 million visitors annually", "Tour length is approximately 7 km", "54 galleries in total", "Houses the Laocoön group", "Owns approximately 70,000 artworks"],
    },
  },
  {
    id: "landmark-sistine-chapel",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.4545, 41.903],
    name: {
      de: "Sixtinische Kapelle",
      hu: "Sixtus-kápolna",
      ro: "Capela Sixtină",
      en: "Sistine Chapel"
    },
    description: {
      de: "Berühmt für Michelangelos Deckenfresken und das Jüngste Gericht.",
      hu: "Michelangelo mennyezetfreskóiról és az Utolsó ítélet című festményéről híres.",
      ro: "Faimoasă pentru frescele de pe tavan ale lui Michelangelo și Judecata de Apoi.",
      en: "Famous for Michelangelo's ceiling frescoes and the Last Judgment."
    }, image: "/poi-images/landmark-sistine-chapel.webp",
    descriptionAdvanced: {
      de: "Die Sixtinische Kapelle ist Teil der Vatikanischen Museen und weltweit bekannt für ihre prächtigen Deckenfresken von Michelangelo. Sie dient als Ort des Konklaves, in dem die Kardinäle den neuen Papst wählen. Die zwischen 1508 und 1512 entstandene Decke zeigt Szenen aus der Genesis, darunter die Erschaffung Adams. An der Altarwand befindet sich das monumentale Fresko „Das Jüngste Gericht“.",
      hu: "A Sixtus-kápolna a Vatikáni Múzeumok része, és Michelangelo pompás mennyezetfreskóiról világszerte ismert. Ez a konklávé helyszíne, ahol a bíborosok megválasztják az új pápát. Az 1508 és 1512 között készült mennyezet a Genezis jeleneteit ábrázolja, köztük Ádám teremtését. Az oltárfalon található a monumentális „Utolsó ítélet” freskó.",
      ro: "Capela Sixtină face parte din Muzeele Vaticane și este celebră în întreaga lume pentru frescele magnifice de pe plafon, realizate de Michelangelo. Servește drept locul conclavului, unde cardinalii aleg noul Papă. Plafonul, pictat între 1508 și 1512, prezintă scene din Geneză, inclusiv Crearea lui Adam. Pe peretele altarului se află monumentala frescă „Judecata de Apoi”.",
      en: "The Sistine Chapel is part of the Vatican Museums and is world-famous for its magnificent ceiling frescoes by Michelangelo. It serves as the site of the conclave, where cardinals elect the new Pope. The ceiling, painted between 1508 and 1512, depicts scenes from Genesis, including the Creation of Adam. On the altar wall is the monumental fresco 'The Last Judgment'.",
    },
    factsAdvanced: {
      de: ["Erbaut unter Papst Sixtus IV. (1473-1481)", "Deckengemälde von Michelangelo (1508-1512)", "Wandfresko 'Das Jüngste Gericht' (1536-1541)", "Maße entsprechen dem Salomonischen Tempel", "Ort der Papstwahl (Konklave)", "Wandfresken von Botticelli und Perugino"],
      hu: ["IV. Szixtusz pápa alatt épült (1473-1481)", "Michelangelo mennyezetfreskói (1508-1512)", "Az Utolsó ítélet freskó (1536-1541)", "Méretei Salamon templomáéval egyeznek", "A pápaválasztás (konklávé) helyszíne", "Botticelli és Perugino oldalfreskói"],
      ro: ["Construită sub Papa Sixtus al IV-lea (1473-1481)", "Picturi pe plafon de Michelangelo (1508-1512)", "Fresca 'Judecata de Apoi' (1536-1541)", "Dimensiunile corespund Templului lui Solomon", "Locul de alegere a Papei (conclav)", "Fresce murale de Botticelli și Perugino"],
      en: ["Built under Pope Sixtus IV (1473-1481)", "Ceiling paintings by Michelangelo (1508-1512)", "Last Judgment fresco (1536-1541)", "Dimensions match the Temple of Solomon", "Site of the papal election (conclave)", "Wall frescoes by Botticelli and Perugino"],
    },
  },
  {
    id: "landmark-vatican-gardens",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.449, 41.903],
    name: {
      de: "Vatikanische Gärten",
      hu: "Vatikáni kertek",
      ro: "Grădinile Vaticane",
      en: "Vatican Gardens"
    },
    description: {
      de: "Eine ausgedehnte Parkanlage, die mehr als die Hälfte des Staatsgebietes einnimmt.",
      hu: "Hatalmas parkrendszer, amely az állam területének több mint felét elfoglalja.",
      ro: "Un vast complex de parcuri care ocupă mai mult de jumătate din teritoriul statului.",
      en: "An extensive park system that occupies more than half of the state's territory."
    }, image: "/poi-images/landmark-vatican-gardens.webp",
    descriptionAdvanced: {
      de: "Die Vatikanischen Gärten erstrecken sich über 23 Hektar und nehmen damit mehr als die Hälfte des Staatsgebiets ein. Papst Nikolaus III. ließ das Gelände 1277 als päpstliche Residenz befestigen und legte die ersten Gärten an. Die Anlage umfasst verschiedene Gartenstile vom Mittelalter bis zum Barock. Zahlreiche Brunnen, Grotten und Denkmäler sind in die Parklandschaft integriert.",
      hu: "A Vatikáni Kertek több mint 23 hektáron terülnek el, elfoglalva a városállam területének több mint felét. III. Miklós pápa 1277-ben alapította meg a kertet, amikor a pápai rezidenciát ide helyezte át. A parkban középkori, reneszánsz és barokk stílusú kertrészletek váltják egymást. Számos szökőkút, barlang és történelmi emlékmű díszíti a gondosan ápolt területet.",
      ro: "Grădinile Vaticanului ocupă aproximativ 23 de hectare, reprezentând mai mult de jumătate din suprafața totală a statului. Papa Nicolae al III-lea a stabilit prima grădină aici în anul 1277, după mutarea rezidenței pápale. Peisajul cuprinde stiluri variate, de la cel medieval la cel renascentist și baroc. Teritoriul include numeroase fântâni, grote și monumente istorice protejate.",
      en: "The Vatican Gardens cover approximately 23 hectares, occupying more than half of the city-state's total territory. Pope Nicholas III established the first gardens here in 1277 when he moved the papal residence to the Vatican. The area features various landscaping styles, including medieval, Renaissance, and Baroque elements. Numerous fountains, grottoes, and monuments are distributed throughout the park.",
    },
    factsAdvanced: {
      de: ["Gründung der Gärten im Jahr 1277", "Gesamtfläche von ca. 23 Hektar", "Beinhaltet Teilstücke der Leoninischen Mauer", "Mehr als 100 verschiedene Brunnenanlagen", "Höchster Punkt liegt auf 60 Metern", "Nur im Rahmen geführter Touren zugänglich"],
      hu: ["Az alapítás éve 1277 volt", "A teljes terület kb. 23 hektár", "A Leonin falak maradványait is tartalmazza", "Több mint 100 szökőkút található benne", "A legmagasabb pontja 60 méter", "Csak vezetett túrák keretében látogatható"],
      ro: ["Grădinile au fost fondate în 1277", "Suprafața totală este de cca 23 hectare", "Include secțiuni din Zidul Leonin", "Peste 100 de fântâni sunt active", "Punctul maxim este la 60 de metri", "Accesul se face doar prin tururi ghidate"],
      en: ["Established in the year 1277", "Total area of approx 23 hectares", "Contains sections of the Leonine Wall", "Home to more than 100 fountains", "Highest point is 60 meters above sea level", "Accessible only via guided tours"],
    },
  },
  {
    id: "landmark-apostolic-palace",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.455, 41.904],
    name: {
      de: "Apostolischer Palast",
      hu: "Apostoli Palota",
      ro: "Palatul Apostolic",
      en: "Apostolic Palace"
    },
    description: {
      de: "Die offizielle Residenz des Papstes im Vatikan.",
      hu: "A pápa hivatalos rezidenciája a Vatikánban.",
      ro: "Reședința oficială a Papei în Vatican.",
      en: "The official residence of the Pope in the Vatican."
    }, image: "/poi-images/landmark-apostolic-palace.webp",
    descriptionAdvanced: {
      de: "Der Apostolische Palast dient als offizielle Residenz des Papstes im Vatikanstaat. Er umfasst einen Gebäudekomplex von etwa 162.000 Quadratmetern mit über 1.000 Räumen. Neben den päpstlichen Appartements beherbergt er die Vatikanischen Museen und die Sixtinische Kapelle. Die heutige Struktur geht maßgeblich auf Bauphasen zwischen dem 15. und 17. Jahrhundert zurück.",
      hu: "Az Apostoli Palota a pápa hivatalos rezidenciája a Vatikánvárosban. A komplexum körülbelül 162 000 négyzetméteren terül el, és több mint 1000 szobát tartalmaz. A pápai lakosztályok mellett itt találhatók a Vatikáni Múzeumok és a Sixtus-kápolna is. A jelenlegi épületegyüttes nagy része a 15. és 17. század közötti időszakban épült.",
      ro: "Palatul Apostolic este reședința oficială a Papei în Cetatea Vaticanului. Complexul acoperă aproximativ 162.000 de metri pătrați și cuprinde peste 1.000 de camere. Pe lângă apartamentele papale, acesta găzduiește Muzeele Vaticane și Capela Sixtină. Structura actuală provine în mare parte din fazele de construcție dintre secolele XV și XVII.",
      en: "The Apostolic Palace serves as the official residence of the Pope in Vatican City. The complex covers approximately 162,000 square meters and contains over 1,000 rooms. In addition to the papal apartments, it houses the Vatican Museums and the Sistine Chapel. Most of the current structure dates back to construction phases between the 15th and 17th centuries.",
    },
    factsAdvanced: {
      de: ["Über 1.000 Zimmer im gesamten Komplex", "Gesamtfläche von ca. 162.000 m²", "Sitz der Vatikanischen Apostolischen Bibliothek", "Beinhaltet die berühmte Sixtinische Kapelle", "Bauzeit erstreckte sich über mehrere Jahrhunderte", "Residenz seit der Rückkehr aus Avignon 1377"],
      hu: ["Több mint 1000 szoba található benne", "Összterülete kb. 162 000 négyzetméter", "A Vatikáni Apostoli Könyvtár székhelye", "Magában foglalja a Sixtus-kápolnát", "Építése több évszázadon át tartott", "A pápa 1377 óta lakik itt hivatalosan"],
      ro: ["Peste 1.000 de camere în complex", "Suprafață totală de cca 162.000 mp", "Găzduiește Biblioteca Apostolică Vaticană", "Include celebra Capelă Sixtină", "Construcția a durat mai multe secole", "Reședință oficială din anul 1377"],
      en: ["Contains more than 1,000 rooms", "Total area of approx 162,000 m²", "Home to the Vatican Apostolic Library", "Includes the famous Sistine Chapel", "Built over several centuries", "Official residence since 1377"],
    },
  },
  {
    id: "landmark-swiss-guard-barracks",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.457, 41.905],
    name: {
      de: "Kaserne der Schweizergarde",
      hu: "Svájci Gárda laktanyája",
      ro: "Cazarma Gărzii Elvețiene",
      en: "Swiss Guard Barracks"
    },
    description: {
      de: "Der Ort, an dem die kleinste Armee der Welt stationiert ist.",
      hu: "A hely, ahol a világ legkisebb hadserege állomásozik.",
      ro: "Locul unde este staționată cea mai mică armată din lume.",
      en: "The place where the smallest army in the world is stationed."
    },
    descriptionAdvanced: {
      de: "Die Kasernen der Schweizergarde befinden sich im östlichen Teil des Vatikans nahe der Porta Sant'Anna. Sie dienen als Unterkunft für die kleinste Armee der Welt, die seit 1506 für den Schutz des Papstes verantwortlich ist. Der Komplex umfasst Schlafsäle, Verwaltungsräume und eine eigene Kantine für die Gardisten. Regelmäßige Modernisierungen passen die historischen Mauern an heutige Sicherheitsstandards an.",
      hu: "A Svájci Gárda laktanyája a Vatikán keleti részén, a Porta Sant'Anna közelében található. Ez a szálláshelye a világ legkisebb hadseregének, amely 1506 óta felel a pápa biztonságáért. A komplexum hálótermeket, irodákat és saját menzát foglal magában a gárdisták számára. A történelmi falakat rendszeresen korszerűsítik a mai biztonsági igényeknek megfelelően.",
      ro: "Cazarma Gărzii Elvețiene este situată în partea de est a Vaticanului, lângă Porta Sant'Anna. Aceasta servește drept locuință pentru cea mai mică armată din lume, responsabilă de siguranța Papei din 1506. Complexul include dormitoare, birouri administrative și o cantină proprie pentru gardiști. Modernizări periodice adaptează zidurile istorice la standardele de securitate actuale.",
      en: "The Swiss Guard Barracks are located in the eastern part of the Vatican near Porta Sant'Anna. They serve as the living quarters for the world's smallest army, responsible for the Pope's safety since 1506. The complex includes dormitories, administrative offices, and a private canteen for the guards. Regular modernizations adapt the historical buildings to contemporary security standards.",
    },
    factsAdvanced: {
      de: ["Sitz der Schweizergarde seit 1506", "Besteht aus drei Hauptgebäuden", "Beinhaltet eine eigene Waffenkammer", "Nahe dem Zugangstor Porta Sant'Anna", "Umbauprojekt für neue Kasernen ab 2026", "Beherbergt ca. 135 Gardisten"],
      hu: ["A Svájci Gárda székhelye 1506 óta", "Három fő épületből áll a komplexum", "Saját fegyvertárral rendelkezik", "A Porta Sant'Anna kapu mellett található", "2026-ban kezdődik az új laktanya építése", "Kb. 135 gárdista szálláshelye"],
      ro: ["Sediul Gărzii Elvețiene din 1506", "Compusă din trei clădiri principale", "Include o armurărie proprie", "Situată lângă poarta Porta Sant'Anna", "Proiect de reconstrucție din 2026", "Găzduiește aproximativ 135 de gardiști"],
      en: ["Home of the Swiss Guard since 1506", "Consists of three main buildings", "Includes a private armory", "Located near the Porta Sant'Anna gate", "Reconstruction project starting in 2026", "Houses approximately 135 guards"],
    },
    image: "/poi-images/landmark-swiss-guard-barracks.webp",
  },
  {
    id: "landmark-vatican-library",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.454, 41.905],
    name: {
      de: "Vatikanische Bibliothek",
      hu: "Vatikáni Könyvtár",
      ro: "Biblioteca Vaticană",
      en: "Vatican Library"
    },
    description: {
      de: "Eine der ältesten Bibliotheken der Welt mit extrem wertvollen Manuskripten.",
      hu: "A világ egyik legrégebbi könyvtára rendkívül értékes kéziratokkal.",
      ro: "Una dintre cele mai vechi biblioteci din lume, cu manuscrise extrem de valoroase.",
      en: "One of the oldest libraries in the world with extremely valuable manuscripts."
    }, image: "/poi-images/landmark-vatican-library.webp",
    descriptionAdvanced: {
      de: "Die Vatikanische Apostolische Bibliothek wurde 1475 von Papst Sixtus IV. formell gegründet und gilt als eine der wertvollsten Sammlungen weltweit. Sie beherbergt über 1,1 Millionen gedruckte Bücher sowie 75.000 historische Manuskripte. Die Bestände umfassen antike Kodizes, Inkunabeln und bedeutende Briefwechsel der Weltgeschichte. Der Lesesaal und die Magazine sind für die wissenschaftliche Forschung nach strengen Kriterien zugänglich.",
      hu: "A Vatikáni Apostoli Könyvtárat IV. Szixtusz pápa alapította hivatalosan 1475-ben, és a világ egyik legértékesebb gyűjteménye. Több mint 1,1 millió nyomtatott könyvet és 75 000 történelmi kéziratot őriznek itt. Az állomány antik kódexeket, ősnyomtatványokat és fontos történelmi levelezéseket tartalmaz. Az olvasóterem és a raktárak szigorú feltételek mellett kutathatók.",
      ro: "Biblioteca Apostolică Vaticană a fost fondată oficial în 1475 de Papa Sixtus al IV-lea, fiind una dintre cele mai valoroase din lume. Aceasta adăpostește peste 1,1 milioane de cărți tipărite și 75.000 de manuscrise istorice. Colecțiile includ codice antice, incunabule și corespondențe istorice majore. Accesul în sălile de lectură este permis cercetătorilor conform unor criterii stricte.",
      en: "The Vatican Apostolic Library was formally established in 1475 by Pope Sixtus IV and is one of the world's most valuable collections. It houses over 1.1 million printed books and 75,000 historical manuscripts. The holdings include ancient codices, incunabula, and significant historical correspondence. The reading rooms and archives are accessible for scholarly research under strict regulations.",
    },
    factsAdvanced: {
      de: ["Offizielle Gründung am 15. Juni 1475", "Über 1,1 Millionen gedruckte Werke", "75.000 historische Manuskripte im Archiv", "Besitzt den Codex Vaticanus (4. Jh.)", "Über 8.500 Inkunabeln in der Sammlung", "Länge der Regale beträgt ca. 85 km"],
      hu: ["Hivatalos alapítás: 1475. június 15.", "Több mint 1,1 millió nyomtatott mű", "75 000 történelmi kézirat az archívumban", "Itt őrzik a Codex Vaticanust (4. sz.)", "Több mint 8500 ősnyomtatvány található", "A polcok hossza összesen kb. 85 km"],
      ro: ["Fondată oficial la 15 iunie 1475", "Peste 1,1 milioane de opere tipărite", "75.000 de manuscrise în arhivă", "Deține Codex Vaticanus din secolul IV", "Peste 8.500 de incunabule în colecție", "Lungimea rafturilor este de cca 85 km"],
      en: ["Founded officially on June 15, 1475", "Over 1.1 million printed works", "75,000 historical manuscripts in archives", "Holds the Codex Vaticanus (4th century)", "More than 8,500 incunabula in collection", "Total shelf length is approx 85 km"],
    },
  },
  {
    id: "landmark-vatican-grottoes",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.4539, 41.9022],
    name: {
      de: "Vatikanische Grotten",
      hu: "Vatikáni barlangok",
      ro: "Grotele Vaticane",
      en: "Vatican Grottoes"
    },
    description: {
      de: "Unterirdische Grabanlagen unter dem Petersdom mit Papstgräbern.",
      hu: "Föld alatti sírrendszer a Szent Péter-bazilika alatt pápai sírokkal.",
      ro: "Ansamblu subteran de morminte sub Bazilica Sfântul Petru cu morminte papale.",
      en: "Underground tomb complexes under St. Peter's Basilica with papal tombs."
    }, image: "/poi-images/landmark-vatican-grottoes.webp",
    descriptionAdvanced: {
      de: "Die Vatikanischen Grotten sind ein Kryptasystem unterhalb des Mittelschiffs der Peterskirche. Sie beherbergen die Grabstätten von über 90 Päpsten sowie bedeutenden Monarchen wie Kaiser Otto II. Die heutige Ebene entstand durch den Bau der neuen Basilika im 16. Jahrhundert auf dem Niveau der konstantinischen Vorgängerkirche. Neben Gräbern enthalten die Grotten zahlreiche Kapellen und Kunstwerke aus verschiedenen Epochen.",
      hu: "A Vatikáni Grották a Szent Péter-bazilika főhajója alatt elhelyezkedő kriptarendszer. Több mint 90 pápa nyughelye található itt, valamint olyan uralkodóké is, mint II. Ottó császár. A mai szint a 16. században jött létre, amikor az új bazilikát a konstantini templom szintje felett felépítették. A sírok mellett számos kápolna és különböző korokból származó műalkotás látható itt.",
      ro: "Grotele Vaticane reprezintă un sistem de cripte situat sub nava principală a Bazilicii Sfântul Petru. Acestea adăpostesc mormintele a peste 90 de papi și ale unor monarhi importanți, precum împăratul Otto al II-lea. Nivelul actual a fost creat în secolul al XVI-lea, deasupra vechii bazilici constantiniene. Pe lângă morminte, grotele includ numeroase capele și opere de artă.",
      en: "The Vatican Grottoes are a system of crypts located beneath the main nave of St. Peter's Basilica. They house the tombs of more than 90 popes as well as significant monarchs like Emperor Otto II. The current level was created in the 16th century during the construction of the new basilica above the old Constantinian structure. Besides tombs, the grottoes contain numerous chapels and artworks.",
    },
    factsAdvanced: {
      de: ["Über 90 Päpste sind hier bestattet", "Liegen 3 Meter unter dem Kirchenboden", "Enthalten das Grab von Kaiser Otto II.", "Umfassen die Grabkapelle von Petrus", "Überreste der alten Basilika sichtbar", "Eingang beim Andreaspfeiler im Dom"],
      hu: ["Több mint 90 pápa nyughelye", "3 méterrel a templom padlója alatt van", "Itt található II. Ottó császár sírja", "Szent Péter sírja felett helyezkedik el", "A régi bazilika maradványai is láthatók", "Bejárata az András-pillérnél található"],
      ro: ["Peste 90 de papi sunt înmormântați aici", "Situate la 3 metri sub podeaua bazilicii", "Conține mormântul împăratului Otto II", "Include capela funerară a Sfântului Petru", "Resturi ale vechii bazilici sunt vizibile", "Intrarea este lângă pilonul Sf. Andrei"],
      en: ["Resting place of over 90 popes", "Located 3 meters below the basilica floor", "Contains the tomb of Emperor Otto II", "Positioned above the tomb of St. Peter", "Remnants of the old basilica are visible", "Entrance is located at the St. Andrew pier"],
    },
  },
  {
    id: "landmark-pope-paul-vi-audience-hall",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.453, 41.901],
    name: {
      de: "Audienzhalle Papst Paul VI.",
      hu: "VI. Pál pápa auditóriuma",
      ro: "Aula Papa Paul al VI-lea",
      en: "Pope Paul VI Audience Hall"
    },
    description: {
      de: "Ein modernes Gebäude für päpstliche Generalaudienzen.",
      hu: "Modern épület a pápai általános kihallgatások számára.",
      ro: "O clădire modernă pentru audiențele papale generale.",
      en: "A modern building for papal general audiences."
    }, image: "/poi-images/landmark-pope-paul-vi-audience-hall.webp",
    descriptionAdvanced: {
      de: "Die Audienzhalle Papst Paul VI. wurde von dem Architekten Pier Luigi Nervi entworfen und 1971 fertiggestellt. Das Gebäude zeichnet sich durch eine markante Stahlbetonkonstruktion aus, die eine säulenfreie Sicht auf die Bühne ermöglicht. Sie bietet Platz für bis zu 6.300 Personen und wird für Generalaudienzen sowie Konzerte genutzt. Besonders bekannt ist die Monumentalskulptur 'La Resurrezione' hinter dem päpstlichen Thron.",
      hu: "A VI. Pál pápa audienciatermet Pier Luigi Nervi építész tervezte, és 1971-ben fejezték be. Az épület különlegessége a vasbeton szerkezet, amely oszlopok nélkül biztosít rálátást a színpadra. Akár 6300 ember befogadására is alkalmas, általános audienciák és koncertek helyszíne. A pápa trónja mögött látható hatalmas 'Feltámadás' szobor az épület legismertebb dísze.",
      ro: "Aula Paul al VI-lea a fost proiectată de arhitectul Pier Luigi Nervi și finalizată în 1971. Clădirea se remarcă prin structura de beton armat care oferă o vizibilitate fără coloane spre scenă. Capacitatea este de până la 6.300 de persoane, fiind folosită pentru audiențe generale și concerte. În spatele tronului papal se află sculptura monumentală 'La Resurrezione'.",
      en: "The Pope Paul VI Audience Hall was designed by architect Pier Luigi Nervi and completed in 1971. The building is characterized by its reinforced concrete structure, providing a column-free view of the stage. It can accommodate up to 6,300 people and is used for general audiences and concerts. The monumental sculpture 'La Resurrezione' behind the papal throne is a key feature.",
    },
    factsAdvanced: {
      de: ["Eröffnung im Jahr 1971", "Sitzplatzkapazität für 6.300 Personen", "Entwurf von Pier Luigi Nervi", "2.400 Solarzellen auf dem Dach", "Skulptur 'La Resurrezione' ist 20m breit", "Wird im Winter für Audienzen genutzt"],
      hu: ["Az átadás éve 1971 volt", "Befogadóképessége 6300 fő", "Pier Luigi Nervi tervezte az épületet", "2400 napelem található a tetőn", "A Feltámadás szobor 20 méter széles", "Télen itt tartják az audienciákat"],
      ro: ["Inaugurată în anul 1971", "Capacitate de 6.300 de locuri", "Proiectată de Pier Luigi Nervi", "2.400 de panouri solare pe acoperiș", "Sculptura 'La Resurrezione' are 20m lățime", "Folosită iarna pentru audiențe"],
      en: ["Opened in the year 1971", "Seating capacity for 6,300 people", "Designed by Pier Luigi Nervi", "2,400 solar panels on the roof", "Resurrection sculpture is 20m wide", "Used for audiences during winter months"],
    },
  },
  {
    id: "landmark-vatican-post-office",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.457, 41.903],
    name: {
      de: "Vatikanische Post",
      hu: "Vatikáni posta",
      ro: "Poșta Vaticană",
      en: "Vatican Post Office"
    },
    description: {
      de: "Der Postdienst des Vatikans, bekannt für seine eigenen Briefmarken.",
      hu: "A Vatikán postai szolgáltatása, mely saját bélyegeiről ismert.",
      ro: "Serviciul poștal al Vaticanului, cunoscut pentru propriile sale timbre.",
      en: "The postal service of the Vatican, known for its own stamps."
    }, image: "/poi-images/landmark-vatican-post-office.webp",
    descriptionAdvanced: {
      de: "Die Post des Staates der Vatikanstadt (Poste Vaticane) wurde kurz nach den Lateranverträgen 1929 gegründet. Sie gilt als eine der effizientesten Postverwaltungen der Welt und gibt eigene Briefmarken heraus, die bei Sammlern begehrt sind. Es gibt mehrere Schalterstellen, unter anderem am Petersplatz und in den Vatikanischen Museen. Jährlich werden ca. 2,5 Millionen Briefe und Postkarten über das vatikanische Netz versendet.",
      hu: "A Vatikánvárosi Állami Postát (Poste Vaticane) az 1929-es lateráni egyezmény után alapították. A világ egyik leghatékonyabb postai szolgálatának tartják, saját bélyegeket bocsát ki, amelyek a gyűjtők körében igen népszerűek. Több kirendeltsége van, többek között a Szent Péter téren és a Vatikáni Múzeumokban. Évente kb. 2,5 millió levelet és képeslapot továbbítanak a hálózatukon keresztül.",
      ro: "Serviciul poștal al Statului Cetății Vaticanului (Poste Vaticane) a fost fondat în 1929, după Tratatul de la Lateran. Este considerat unul dintre cele mai eficiente din lume și emite mărci poștale proprii, căutate de colecționari. Există mai multe ghișee, inclusiv în Piața Sfântul Petru și în Muzeele Vaticane. Anual sunt procesate aproximativ 2,5 milioane de scrisori și cărți poștale.",
      en: "The Vatican City State Post (Poste Vaticane) was established in 1929 following the Lateran Treaty. It is considered one of the most efficient postal services in the world and issues its own stamps, which are highly prized by collectors. There are several post offices, including locations at St. Peter's Square and the Vatican Museums. Approximately 2.5 million items are mailed annually.",
    },
    factsAdvanced: {
      de: ["Gründung am 11. Februar 1929", "Eigene Briefmarken seit dem 1. August 1929", "Verarbeitet 2,5 Mio. Briefe jährlich", "Mitglied des Weltpostvereins seit 1929", "Gelbe Briefkästen als Erkennungsmerkmal", "Drei feste Poststellen im Vatikan"],
      hu: ["Alapítva: 1929. február 11.", "Saját bélyegek 1929. augusztus 1. óta", "Évi 2,5 millió levelet dolgoznak fel", "1929 óta az Egyetemes Postaegyesület tagja", "Sárga postaládák a jellegzetességei", "Három fix postahivatal van a Vatikánban"],
      ro: ["Fondată la 11 februarie 1929", "Timbre proprii din 1 august 1929", "Procesează 2,5 milioane de scrisori anual", "Membru UPU din anul 1929", "Cutii poștale galbene distinctive", "Trei oficii poștale fixe în Vatican"],
      en: ["Founded on February 11, 1929", "Own stamps since August 1, 1929", "Processes 2.5 million letters per year", "Member of Universal Postal Union since 1929", "Distinctive yellow mailboxes", "Three permanent post offices in Vatican"],
    },
  },
  {
    id: "landmark-vatican-pharmacy",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.456, 41.906],
    name: {
      de: "Vatikanische Apotheke",
      hu: "Vatikáni patika",
      ro: "Farmacia Vaticană",
      en: "Vatican Pharmacy"
    },
    description: {
      de: "Die meistbesuchte Apotheke der Welt.",
      hu: "A világ leglátogatottabb gyógyszertára.",
      ro: "Cea mai vizitată farmacie din lume.",
      en: "The most visited pharmacy in the world."
    },
    descriptionAdvanced: {
      de: "Die Vatikanische Apotheke wurde 1874 von Eusebio Ludvig Fronmen gegründet und ist die einzige Apotheke im Vatikanstaat. Sie gilt als die meistbesuchte Apotheke der Welt mit täglich rund 2.000 Kunden. Da sie nicht an italienische Steuern gebunden ist, bietet sie oft Medikamente an, die in Italien schwer erhältlich oder teurer sind. Der Zugang ist für Personen mit entsprechendem Rezept über ein spezielles Tor möglich.",
      hu: "A Vatikáni Patikát 1874-ben alapította Eusebio Ludvig Fronmen, és ez az egyetlen gyógyszertár a Vatikánban. A világ legforgalmasabb patikájának tartják, naponta mintegy 2000 vásárlót szolgálnak ki. Mivel nem kötődik az olasz adórendszerhez, gyakran kínál olyan gyógyszereket, amelyek Olaszországban nehezen elérhetők vagy drágábbak. A bejutás recept birtokában egy külön kapun keresztül lehetséges.",
      ro: "Farmacia Vaticană a fost fondată în 1874 de Eusebio Ludvig Fronmen și este singura din statul Vatican. Este considerată cea mai frecventată farmacie din lume, cu aproximativ 2.000 de clienți zilnic. Neasimilată sistemului fiscal italian, oferă medicamente care sunt greu de găsit sau mai scumpe în Italia. Accesul este permis persoanelor cu rețetă printr-o poartă specială.",
      en: "The Vatican Pharmacy was founded in 1874 by Eusebio Ludvig Fronmen and is the only pharmacy in Vatican City. It is considered the busiest pharmacy in the world, serving around 2,000 customers daily. Because it is not subject to Italian taxes, it often stocks medications that are difficult to find or more expensive in Italy. Access is granted to those with a valid prescription via a special gate.",
    },
    factsAdvanced: {
      de: ["Gründung im Jahr 1874", "Täglich etwa 2.000 Kunden", "Einzige Apotheke im Staat", "Wird von den Barmherzigen Brüdern geleitet", "Bestand von ca. 42.000 Produkten", "Fläche von etwa 500 Quadratmetern"],
      hu: ["Az alapítás éve 1874 volt", "Naponta kb. 2000 vásárlót fogad", "Az állam egyetlen gyógyszertára", "Az Irgalmasrendi testvérek vezetik", "Kb. 42 000 termék érhető el", "Területe nagyjából 500 négyzetméter"],
      ro: ["Fondată în anul 1874", "Aproximativ 2.000 de clienți zilnic", "Singura farmacie din stat", "Administrată de Ordinul Sf. Ioan al lui Dumnezeu", "Stoc de cca 42.000 de produse", "Suprafață de aproximativ 500 mp"],
      en: ["Founded in the year 1874", "Serves approx 2,000 customers daily", "The only pharmacy in the state", "Run by the Brothers of Charity", "Inventory of approx 42,000 products", "Total floor area of about 500 m²"],
    },
    image: "/poi-images/landmark-vatican-pharmacy.webp",
  },
  {
    id: "landmark-st-martha-house",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.451, 41.901],
    name: {
      de: "Gästehaus Santa Marta",
      hu: "Szent Márta-ház",
      ro: "Casa Sfânta Marta",
      en: "Saint Martha's House"
    },
    description: {
      de: "Die derzeitige Residenz von Papst Franziskus.",
      hu: "Ferenc pápa jelenlegi rezidenciája.",
      ro: "Reședința actuală a Papei Francisc.",
      en: "The current residence of Pope Francis."
    }, image: "/poi-images/landmark-st-martha-house.webp",
    descriptionAdvanced: {
      de: "Das Haus Sankt Martha (Domus Sanctae Marthae) wurde 1996 unter Papst Johannes Paul II. als Gästehaus für Kleriker fertiggestellt. Es dient während eines Konklaves als Unterkunft für die wahlberechtigten Kardinäle. Seit 2013 ist es zudem der ständige Wohnsitz von Papst Franziskus, der sich gegen die Nutzung der offiziellen päpstlichen Appartements entschied. Das Gebäude verfügt über 106 Suiten und 22 Einzelzimmer.",
      hu: "A Szent Márta-ház (Domus Sanctae Marthae) 1996-ban készült el II. János Pál pápa idején mint klerikusok vendégháza. Konklávék idején ez a választójoggal rendelkező bíborosok szálláshelye. 2013 óta Ferenc pápa állandó lakhelye is, aki úgy döntött, hogy nem használja a hivatalos pápai lakosztályokat. Az épületben 106 lakosztály és 22 egyágyas szoba található.",
      ro: "Casa Sfânta Marta (Domus Sanctae Marthae) a fost finalizată în 1996, sub Papa Ioan Paul al II-lea, ca o casă de oaspeți pentru clerici. În timpul conclavelor, servește drept cazare pentru cardinalii electori. Din 2013, este și reședința permanentă a Papei Francisc, care a ales să nu locuiască în apartamentele papale oficiale. Clădirea dispune de 106 apartamente și 22 de camere individuale.",
      en: "Saint Martha's House (Domus Sanctae Marthae) was completed in 1996 under Pope John Paul II as a guest house for clergy. During conclaves, it serves as the residence for the cardinal electors. Since 2013, it has also been the permanent residence of Pope Francis, who chose it over the official papal apartments. The building contains 106 suites and 22 single rooms.",
    },
    factsAdvanced: {
      de: ["Fertigstellung im Jahr 1996", "Beinhaltet 106 Suiten", "Wohnsitz von Papst Franziskus seit 2013", "Dient als Unterkunft während Konklaven", "Fünf Stockwerke hoch", "Verfügt über eine eigene Kapelle"],
      hu: ["Az átadás éve 1996 volt", "106 lakosztály található benne", "Ferenc pápa lakhelye 2013 óta", "A konklávék idején itt laknak a bíborosok", "Az épület öt emelet magas", "Saját kápolnával rendelkezik"],
      ro: ["Finalizată în anul 1996", "Cuprinde 106 apartamente", "Reședința Papei Francisc din 2013", "Locul de cazare în timpul conclavelor", "Are o înălțime de cinci etaje", "Dispune de o capelă proprie"],
      en: ["Completed in the year 1996", "Contains 106 suites", "Residence of Pope Francis since 2013", "Housing for cardinals during conclaves", "Building is five stories high", "Features a private chapel"],
    },
  },
  {
    id: "landmark-vatican-bank",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.455, 41.905],
    name: {
      de: "Vatikanbank (IOR)",
      hu: "Vatikáni Bank (IOR)",
      ro: "Banca Vaticanului (IOR)",
      en: "Vatican Bank (IOR)"
    },
    description: {
      de: "Das Institut für die religiösen Werke.",
      hu: "A Vallási Művek Intézete.",
      ro: "Institutul pentru Lucrări Religioase.",
      en: "The Institute for the Works of Religion."
    }, image: "/poi-images/landmark-vatican-bank.webp",
    descriptionAdvanced: {
      de: "Das Institut für die religiösen Werke (Istituto per le Opere di Religione, IOR), bekannt als Vatikanbank, wurde 1942 gegründet. Es hat seinen Sitz im mittelalterlichen Wehrturm Niccolò V. innerhalb der Vatikanmauern. Die Bank verwaltet Vermögenswerte für religiöse Orden, vatikanische Institutionen und Mitarbeiter. Sie unterliegt strengen Transparenzregeln und wird von internationalen Finanzaufsichtsbehörden geprüft.",
      hu: "A Vallási Művek Intézete (Istituto per le Opere di Religione, IOR), közismert nevén a Vatikáni Bank, 1942-ben alakult. Székhelye a Vatikán falain belüli középkori V. Miklós-toronyban található. A bank vallási rendek, vatikáni intézmények és alkalmazottak vagyonát kezeli. Szigorú átláthatósági szabályok vonatkoznak rá, és nemzetközi pénzügyi felügyeleti szervek ellenőrzik.",
      ro: "Institutul pentru Opere de Religie (Istituto per le Opere di Religie, IOR), cunoscut ca Banca Vaticanului, a fost fondat în 1942. Sediul se află în turnul medieval Niccolò al V-lea, în interiorul zidurilor Vaticanului. Banca administrează active pentru ordine religioase, instituții vaticane și angajați. Este supusă unor reguli stricte de transparență și auditată de autorități financiare internaționale.",
      en: "The Institute for the Works of Religion (Istituto per le Opere di Religione, IOR), commonly known as the Vatican Bank, was established in 1942. It is headquartered in the medieval Niccolò V tower within the Vatican walls. The bank manages assets for religious orders, Vatican institutions, and employees. It operates under strict transparency rules and is monitored by international financial authorities.",
    },
    factsAdvanced: {
      de: ["Gegründet am 27. Juni 1942", "Sitz im Turm Niccolò V.", "Verwaltet ca. 5 Mrd. Euro an Vermögen", "Hat etwa 15.000 Kunden weltweit", "Wird von einer Kardinalskommission überwacht", "Einziger Standort im Vatikanstaat"],
      hu: ["Alapítva: 1942. június 27.", "Székhelye az V. Miklós-toronyban van", "Kb. 5 milliárd euró vagyont kezel", "Világszerte mintegy 15 000 ügyfele van", "Bíborosi bizottság felügyeli a működését", "Egyetlen bankfiókja van a Vatikánban"],
      ro: ["Fondată la 27 iunie 1942", "Sediul în turnul Niccolò V", "Administrează cca 5 miliarde euro", "Are aproximativ 15.000 de clienți", "Supravegheată de o comisie de cardinali", "Singurul punct de lucru este în Vatican"],
      en: ["Founded on June 27, 1942", "Located in the Niccolò V tower", "Manages approx 5 billion Euro in assets", "Serves about 15,000 customers", "Overseen by a Commission of Cardinals", "Only location is within Vatican City"],
    },
  },
  {
    id: "landmark-governors-palace",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.451, 41.904],
    name: {
      de: "Palast des Governatorats",
      hu: "Kormányzósági palota",
      ro: "Palatul Guvernoratului",
      en: "Governor's Palace"
    },
    description: {
      de: "Der Sitz der Regierung der Vatikanstadt.",
      hu: "A Vatikánváros kormányának székhelye.",
      ro: "Sediul guvernului Vaticanului.",
      en: "The seat of the government of Vatican City."
    }, image: "/poi-images/landmark-governors-palace.webp",
    descriptionAdvanced: {
      de: "Der Regierungspalast (Palazzo del Governatorato) ist das Verwaltungszentrum des Vatikanstaates und liegt hinter dem Petersdom. Das Gebäude wurde zwischen 1927 und 1931 im eklektischen Stil errichtet. Hier haben die Kommission für den Staat der Vatikanstadt und das Governatorat ihren Sitz. Vor dem Gebäude befindet sich ein kunstvoll angelegter Garten mit dem Wappen des amtierenden Papstes aus Blumen.",
      hu: "A Kormányzói Palota (Palazzo del Governatorato) a Vatikánvárosi Állam adminisztratív központja, a Szent Péter-bazilika mögött található. Az épület 1927 és 1931 között épült eklektikus stílusban. Itt székel a Vatikánvárosi Állam Bizottsága és a Kormányzóság. Az épület előtt egy művészien kialakított kert látható, ahol virágokból rakják ki az aktuális pápa címerét.",
      ro: "Palatul Guvernoratului (Palazzo del Governatorato) este centrul administrativ al statului Vatican, situat în spatele Bazilicii Sfântul Petru. Clădirea a fost construită între 1927 și 1931 în stil eclectic. Aici își au sediul Comisia pentru Statul Cetății Vaticanului și Guvernoratul. În fața clădirii se află o grădină unde stema papei în funcție este realizată din flori.",
      en: "The Governor's Palace (Palazzo del Governatorato) is the administrative center of Vatican City State, located behind St. Peter's Basilica. The building was constructed between 1927 and 1931 in an eclectic style. It houses the Commission for Vatican City State and the Governorate. In front of the building, a landscaped garden features the coat of arms of the reigning pope made of flowers.",
    },
    factsAdvanced: {
      de: ["Bauzeit von 1927 bis 1931", "Sitz der vatikanischen Regierung", "Architekt war Giuseppe Momo", "Liegt in den Vatikanischen Gärten", "Enthält die Post- und Telegrafendienste", "Beherbergt das vatikanische Münzamt"],
      hu: ["Építése 1927-től 1931-ig tartott", "A vatikáni kormány székhelye", "Giuseppe Momo volt az építésze", "A Vatikáni Kertek területén fekszik", "Itt működnek a posta- és távírószolgálatok", "A vatikáni pénzverde is itt található"],
      ro: ["Construit între 1927 și 1931", "Sediul guvernului vatican", "Arhitect a fost Giuseppe Momo", "Situat în incinta Grădinilor Vaticane", "Găzduiește serviciile poștale și telegrafice", "Include monetăria statului Vatican"],
      en: ["Built between 1927 and 1931", "Seat of the Vatican government", "Designed by architect Giuseppe Momo", "Located within the Vatican Gardens", "Houses postal and telegraph services", "Home to the Vatican mint"],
    },
  },
  {
    id: "landmark-vatican-observatory",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.448, 41.905],
    name: {
      de: "Vatikanische Sternwarte",
      hu: "Vatikáni Csillagvizsgáló",
      ro: "Observatorul Vaticanului",
      en: "Vatican Observatory"
    },
    description: {
      de: "Eines der ältesten astronomischen Forschungsinstitute der Welt.",
      hu: "A világ egyik legrégebbi csillagászati kutatóintézete.",
      ro: "Unul dintre cele mai vechi institute de cercetare astronomică din lume.",
      en: "One of the oldest astronomical research institutes in the world."
    }, image: "/poi-images/landmark-vatican-observatory.webp",
    descriptionAdvanced: {
      de: "Die Vatikanische Sternwarte (Specola Vaticana) zählt zu den ältesten astronomischen Forschungseinrichtungen der Welt. Ihre Ursprünge liegen im 16. Jahrhundert bei der Gregorianischen Kalenderreform von 1582. Heute befindet sich der Hauptsitz in Castel Gandolfo, während ein modernes Teleskop in Arizona (USA) betrieben wird. Die Einrichtung wird von Jesuiten geleitet und widmet sich der wissenschaftlichen Untersuchung des Universums.",
      hu: "A Vatikáni Csillagvizsgáló (Specola Vaticana) a világ egyik legrégebbi csillagászati kutatóintézete. Eredete a 16. századra, az 1582-es Gergely-naptár reformjához nyúlik vissza. Ma a főhadiszállása Castel Gandolfóban található, míg egy modern távcsövet Arizonában (USA) üzemeltetnek. Az intézményt jezsuiták vezetik, és az univerzum tudományos kutatásának szentelik.",
      ro: "Observatorul Vatican (Specola Vaticana) este una dintre cele mai vechi instituții de cercetare astronomică din lume. Originile sale datează din secolul al XVI-lea, legate de reforma calendarului gregorian din 1582. Astăzi, sediul principal este la Castel Gandolfo, operând și un telescop modern în Arizona, SUA. Instituția este condusă de iezuiți și se dedică studiului științific al universului.",
      en: "The Vatican Observatory (Specola Vaticana) is one of the oldest astronomical research institutions in the world. Its origins date back to the 16th century and the Gregorian calendar reform of 1582. Today, its headquarters are in Castel Gandolfo, while a modern telescope is operated in Arizona, USA. The institution is run by Jesuits and is dedicated to the scientific study of the universe.",
    },
    factsAdvanced: {
      de: ["Gegründet im Jahr 1582", "Hauptsitz seit 1935 in Castel Gandolfo", "Betreibt das VATT-Teleskop in Arizona", "Wird seit 1891 von Jesuiten geleitet", "Beteiligt an der Erstellung der Carte du Ciel", "Besitzt eine Sammlung von über 1.000 Meteoriten"],
      hu: ["Az alapítás éve 1582 volt", "1935 óta Castel Gandolfo a székhelye", "Üzemelteti a VATT-távcsövet Arizonában", "1891 óta jezsuiták irányítják", "Részt vett a Carte du Ciel projektben", "Több mint 1000 meteoritból álló gyűjteménye van"],
      ro: ["Fondat în anul 1582", "Sediul la Castel Gandolfo din 1935", "Operează telescopul VATT în Arizona", "Condus de iezuiți din anul 1891", "A participat la proiectul Carte du Ciel", "Deține o colecție de peste 1.000 de meteoriți"],
      en: ["Established in the year 1582", "Headquarters in Castel Gandolfo since 1935", "Operates VATT telescope in Arizona", "Directed by Jesuits since 1891", "Participated in the Carte du Ciel project", "Owns a collection of over 1,000 meteorites"],
    },
  },
  {
    id: "landmark-belvedere-courtyard",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.454, 41.906],
    name: {
      de: "Belvedere-Hof",
      hu: "Belvedere-udvar",
      ro: "Curtea Belvedere",
      en: "Belvedere Courtyard"
    },
    description: {
      de: "Ein architektonisch bedeutender Innenhof im Vatikan.",
      hu: "Építészetileg jelentős belső udvar a Vatikánban.",
      ro: "O curte interioară arhitecturală importantă din Vatican.",
      en: "An architecturally significant courtyard in the Vatican."
    }, image: "/poi-images/landmark-belvedere-courtyard.webp",
    descriptionAdvanced: {
      de: "Der Belvedere-Hof (Cortile del Belvedere) wurde von Donato Bramante ab 1506 im Auftrag von Papst Julius II. entworfen. Er verbindet den Apostolischen Palast mit der Villa Belvedere über eine terrassierte Struktur. Ursprünglich war die Anlage für Feste und Turniere konzipiert, wurde aber im 16. Jahrhundert durch Querflügel geteilt. Heute beherbergt der Bereich wesentliche Teile der Vatikanischen Museen.",
      hu: "A Belvedere-udvart (Cortile del Belvedere) Donato Bramante tervezte 1506-tól II. Gyula pápa megbízásából. Az udvar az Apostoli Palotát köti össze a Belvedere-villával egy teraszos szerkezet segítségével. Eredetileg ünnepségek és tornák helyszínének szánták, de a 16. században keresztszárnyakkal megosztották. Ma a terület a Vatikáni Múzeumok jelentős részének ad otthont.",
      ro: "Curtea Belvedere (Cortile del Belvedere) a fost proiectată de Donato Bramante începând cu 1506, la cererea Papei Iulius al II-lea. Aceasta conectează Palatul Apostolic de Vila Belvedere printr-o structură terasată. Inițial concepută pentru serbări și turniruri, curtea a fost divizată în secolul al XVI-lea prin aripi transversale. Astăzi găzduiește părți importante din Muzeele Vaticane.",
      en: "The Belvedere Courtyard (Cortile del Belvedere) was designed by Donato Bramante starting in 1506 for Pope Julius II. It connects the Apostolic Palace with the Villa Belvedere via a terraced structure. Originally intended for festivals and tournaments, the courtyard was divided in the 16th century by transverse wings. Today, the area houses significant parts of the Vatican Museums.",
    },
    factsAdvanced: {
      de: ["Baubeginn im Jahr 1506", "Entworfen von Donato Bramante", "Länge von ursprünglich ca. 300 Metern", "Verbindet Palast und Belvedere-Villa", "Durch die Bibliothek von Sixtus V. geteilt", "Enthält die berühmte Bramante-Treppe"],
      hu: ["Az építkezés 1506-ban kezdődött", "Donato Bramante volt a tervezője", "Eredeti hossza kb. 300 méter volt", "A palotát és a Belvedere-villát köti össze", "V. Szixtusz könyvtára osztja ketté", "Itt található a híres Bramante-lépcső"],
      ro: ["Construcția a început în 1506", "Proiectată de Donato Bramante", "Lungime inițială de cca 300 metri", "Leagă palatul de Vila Belvedere", "Divizată de biblioteca lui Sixtus V", "Include celebra scară a lui Bramante"],
      en: ["Construction started in 1506", "Designed by Donato Bramante", "Original length of approx 300 meters", "Links the palace with Villa Belvedere", "Divided by the library of Sixtus V", "Features the famous Bramante Staircase"],
    },
  },
  {
    id: "landmark-casina-pio-iv",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.449, 41.905],
    name: {
      de: "Casina Pio IV",
      hu: "Casina Pio IV",
      ro: "Casina Pio IV",
      en: "Casina Pio IV"
    },
    description: {
      de: "Sitz der Päpstlichen Akademie der Wissenschaften.",
      hu: "A Pápai Tudományos Akadémia székhelye.",
      ro: "Sediul Academiei Pontificale de Științe.",
      en: "The seat of the Pontifical Academy of Sciences."
    }, image: "/poi-images/landmark-casina-pio-iv.webp",
    descriptionAdvanced: {
      de: "Die Casina Pio IV, auch Villa Pia genannt, ist ein Meisterwerk der Spätrenaissance in den Vatikanischen Gärten. Sie wurde 1561 von Pirro Ligorio für Papst Pius IV. fertiggestellt. Das Bauwerk dient heute als Sitz der Päpstlichen Akademie der Wissenschaften und der Sozialwissenschaften. Die Fassade ist reich mit Stuckarbeiten, Statuen und Mosaiken verziert, die mythologische und christliche Themen vereinen.",
      hu: "A Casina Pio IV, más néven Villa Pia, a késő reneszánsz mesterműve a Vatikáni Kertekben. 1561-ben fejezte be Pirro Ligorio IV. Pius pápa számára. Az épület ma a Pápai Tudományos Akadémia és a Társadalomtudományi Akadémia székhelye. A homlokzatot gazdagon díszítik stukkók, szobrok és mozaikok, amelyek mitológiai és keresztény témákat ötvöznek.",
      ro: "Casina Pio al IV-lea, cunoscută și sub numele de Vila Pia, este o capodoperă a Renașterii târzie din Grădinile Vaticane. A fost finalizată în 1561 de Pirro Ligorio pentru Papa Pius al IV-lea. Clădirea servește astăzi drept sediu al Academiei Pontificale de Științe. Fațada este bogat decorată cu stucaturi, statui și mozaicuri care îmbină teme mitologice și creștine.",
      en: "The Casina Pio IV, also known as Villa Pia, is a masterpiece of the Late Renaissance located in the Vatican Gardens. It was completed in 1561 by Pirro Ligorio for Pope Pius IV. The building now serves as the headquarters for the Pontifical Academy of Sciences and Social Sciences. The facade is richly decorated with stuccos, statues, and mosaics blending mythological and Christian themes.",
    },
    factsAdvanced: {
      de: ["Fertigstellung im Jahr 1561", "Architekt war Pirro Ligorio", "Sitz der Päpstlichen Akademie der Wissenschaften", "Besteht aus zwei Hauptpavillons", "Reiche Dekoration mit antiken Motiven", "Liegt im Herzen der Vatikanischen Gärten"],
      hu: ["Az átadás éve 1561 volt", "Pirro Ligorio volt az építésze", "A Pápai Tudományos Akadémia székhelye", "Két fő pavilonból áll az épület", "Gazdag antik motívumokkal díszített", "A Vatikáni Kertek szívében található"],
      ro: ["Finalizată în anul 1561", "Arhitect a fost Pirro Ligorio", "Sediul Academiei Pontificale de Științe", "Compusă din două pavilioane principale", "Decorațiuni bogate cu motive antice", "Situată în inima Grădinilor Vaticane"],
      en: ["Completed in the year 1561", "Designed by architect Pirro Ligorio", "Seat of the Pontifical Academy of Sciences", "Consists of two main pavilions", "Richly decorated with antique motifs", "Located in the heart of the Vatican Gardens"],
    },
  },
  {
    id: "landmark-pigna-courtyard",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.454, 41.907],
    name: {
      de: "Pinienhof",
      hu: "Toboz-udvar",
      ro: "Curtea Pigna",
      en: "Pigna Courtyard"
    },
    description: {
      de: "Bekannt für die riesige bronzene Pinienzapfen-Skulptur.",
      hu: "Hatalmas bronz fenyőtoboz-szobráról ismert.",
      ro: "Cunoscut pentru imensa sculptură din bronz a unui con de pin.",
      en: "Known for the huge bronze pine cone sculpture."
    }, image: "/poi-images/landmark-pigna-courtyard.webp",
    descriptionAdvanced: {
      de: "Der Pinienhof (Cortile della Pigna) ist ein großer offener Bereich der Vatikanischen Museen, der nach einer antiken Bronzepinie benannt ist. Die 4 Meter hohe Pigna stammt vermutlich aus dem 1. oder 2. Jahrhundert und stand ursprünglich nahe dem Pantheon. Der Hof wird im Norden durch die Nische von Pirro Ligorio abgeschlossen. In der Mitte steht die moderne Skulptur 'Sfera con sfera' von Arnaldo Pomodoro.",
      hu: "A Fenyőtoboz-udvar (Cortile della Pigna) a Vatikáni Múzeumok egyik nagy nyitott területe, amely nevét egy antik bronz fenyőtobozról kapta. A 4 méter magas Pigna valószínűleg az 1. vagy 2. századból származik, és eredetileg a Pantheon közelében állt. Az udvar északi végét Pirro Ligorio fülkéje zárja le. Középen Arnaldo Pomodoro modern 'Sfera con sfera' szobra látható.",
      ro: "Curtea Conului de Pin (Cortile della Pigna) este o zonă deschisă a Muzeelor Vaticane, numită după un con de pin antic din bronz. Conul de pin, înalt de 4 metri, datează probabil din secolul I sau II și s-a aflat inițial lângă Pantheon. Curtea este închisă la nord de nișa lui Pirro Ligorio. În centru se află sculptura modernă 'Sfera con sfera' de Arnaldo Pomodoro.",
      en: "The Pinecone Courtyard (Cortile della Pigna) is a large open space in the Vatican Museums, named after an ancient bronze pinecone. The 4-meter-high Pigna likely dates from the 1st or 2nd century and was originally located near the Pantheon. The courtyard is bounded on the north by Pirro Ligorio's niche. In the center stands the modern sculpture 'Sfera con sfera' by Arnaldo Pomodoro.",
    },
    factsAdvanced: {
      de: ["Bronzepinie ist 4 Meter hoch", "Pigna stammt aus dem 1. oder 2. Jh. n. Chr.", "Teil des ursprünglichen Belvedere-Hofes", "Skulptur 'Sfera con sfera' seit 1990", "Nische wurde 1562-1565 erbaut", "Flankiert von zwei antiken Bronzepfauen"],
      hu: ["A bronz fenyőtoboz 4 méter magas", "A Pigna az 1. vagy 2. századból való", "Az eredeti Belvedere-udvar része", "A 'Sfera con sfera' szobor 1990 óta látható", "A fülke 1562 és 1565 között épült", "Két antik bronzpáva szobra szegélyezi"],
      ro: ["Conul de pin din bronz are 4 metri", "Datat în secolul I sau II d.Hr.", "Parte a curții originale Belvedere", "Sculptura 'Sfera con sfera' din 1990", "Nișa a fost construită în 1562-1565", "Flancat de doi păuni antici din bronz"],
      en: ["Bronze pinecone is 4 meters high", "Pinecone dates from 1st or 2nd century AD", "Part of the original Belvedere courtyard", "Sphere Within Sphere sculpture since 1990", "Large niche built between 1562-1565", "Flanked by two ancient bronze peacocks"],
    },
  },
  {
    id: "landmark-vatican-heliport",
    type: "landmark",
    parent: "country-vatican",
    coords: [12.446, 41.902],
    name: {
      de: "Vatikanischer Heliport",
      hu: "Vatikáni helikopter-leszálló",
      ro: "Heliportul Vaticanului",
      en: "Vatican Heliport"
    },
    description: {
      de: "Der Hubschrauberlandeplatz des Papstes im westlichsten Teil des Vatikans.",
      hu: "A pápa helikopter-leszállóhelye a Vatikán legnyugatibb részén.",
      ro: "Heliportul Papei în partea cea mai vestică a Vaticanului.",
      en: "The Pope's heliport in the westernmost part of the Vatican."
    }, image: "/poi-images/landmark-vatican-heliport.webp",
    descriptionAdvanced: {
      de: "Der Vatikanische Hubschrauberlandeplatz befindet sich im westlichsten Teil der Vatikanstadt, nahe dem Johannesturm. Er wurde 1976 unter Papst Paul VI. errichtet, um die Mobilität des Pontifex zu erhöhen. Die Anlage dient vor allem dem Transport des Papstes zu seiner Sommerresidenz Castel Gandolfo sowie für Staatsbesuche ausländischer Oberhäupter. Der Heliport ist von den Vatikanischen Gärten umgeben und unterliegt strengen Sicherheitskontrollen.",
      hu: "A Vatikáni helikopter-leszállóhely a Vatikánváros legnyugatibb sarkában, a Szent János-torony mellett található. 1976-ban hozták létre VI. Pál pápa kezdeményezésére a pápai utazások megkönnyítése érdekében. Elsősorban a pápa Castel Gandolfo-i nyári rezidenciájára való eljutását és a külföldi államfők fogadását szolgálja. A létesítményt a vatikáni kertek veszik körül, és közvetlen összeköttetést biztosít a pápai állam központjával.",
      ro: "Heliportul Vaticanului este situat în colțul vestic al Cetății Vaticanului, lângă Turnul Sfântului Ioan. A fost construit în 1976, sub pontificatul Papei Paul al VI-lea, pentru a facilita deplasările papale. Instalația este utilizată în principal pentru transportul Papei la reședința de vară de la Castel Gandolfo și pentru vizitele oficiale ale șefilor de stat. Heliportul este înconjurat de Grădinile Vaticanului și este administrat de Corpul Gendarmeriei Statului Cetății Vaticanului.",
      en: "The Vatican City Heliport is located in the westernmost corner of Vatican City, adjacent to the Tower of St. John. It was established in 1976 under Pope Paul VI to enhance the mobility of the Pontiff. The facility is primarily used for the Pope's transfers to the summer residence at Castel Gandolfo and for visiting heads of state. Surrounded by the Vatican Gardens, the heliport is a key logistical node within the sovereign state's territory.",
    },
    factsAdvanced: {
      de: ["Der Heliport wurde am 20. Mai 1976 offiziell eingeweiht.", "Er hat eine rechteckige Asphaltfläche von etwa 25 mal 15 Metern.", "Die Anlage liegt in einer Höhe von etwa 75 Metern über dem Meeresspiegel.", "Auf dem Boden befindet sich das Wappen des Papstes Paul VI.", "Der Flugplatz wird von der Aeronautica Militare Italiana unterstützt.", "Er befindet sich in unmittelbarer Nähe zum Bastione San Giovanni."],
      hu: ["A helikopter-leszállóhelyet 1976. május 20-án avatták fel.", "Az aszfaltozott leszállóhely mérete körülbelül 25-ször 15 méter.", "A terület tengerszint feletti magassága nagyjából 75 méter.", "A leszállópálya közepén VI. Pál pápa címere látható.", "A légiforgalmi irányítást az olasz légierővel együttműködve végzik.", "A létesítmény a Vatikán délnyugati bástyái közelében fekszik."],
      ro: ["Heliportul a fost inaugurat oficial pe data de 20 mai 1976.", "Pista de aterizare are dimensiuni de aproximativ 25 pe 15 metri.", "Este situat la o altitudine de circa 75 de metri deasupra mării.", "Pe suprafața heliportului este pictată stema Papei Paul al VI-lea.", "Zborurile sunt coordonate în colaborare cu forțele aeriene italiene.", "Se află în imediata vecinătate a Turnului Sfântului Ioan din grădini."],
      en: ["The heliport was officially inaugurated on May 20, 1976.", "It features a landing pad measuring roughly 25 by 15 meters.", "The facility is situated at an elevation of about 75 meters.", "The coat of arms of Pope Paul VI is displayed on the landing surface.", "Air traffic services are coordinated with the Italian Air Force.", "It is located near the medieval Leonine Wall and St. John's Tower."],
    },
  },
  {
    id: "VA-001",
    type: "region",
    parent: "country-vatican",
    coords: [12.4534, 41.9029],
    name: {
      de: "Vatikan",
      hu: "Vatikán",
      ro: "Vatican",
      en: "Vatican"
    },
    description: {
      de: "Der historische Kern und das gesamte Gebiet des Staates Vatikanstadt.",
      hu: "Vatikánváros történelmi magja és az állam teljes területe.",
      ro: "Nucleul istoric și întregul teritoriu al statului Cetatea Vaticanului.",
      en: "The historical core and entire territory of the Vatican City State."
    },
    facts: {
      de: [
        "Umfasst den gesamten souveränen Staat Vatikanstadt.",
        "Das kleinste Land der Welt nach Fläche und Bevölkerung.",
        "Enthält den Petersdom, die Vatikanischen Gärten und Museen.",
        "Wurde 1929 durch die Lateranverträge unabhängig.",
        "Ganzes Gebiet ist als UNESCO-Weltkulturerbe gelistet."
      ],
      hu: [
        "Magában foglalja a teljes szuverén Vatikán Államot.",
        "Terület és népesség alapján a világ legkisebb országa.",
        "Itt található a Szent Péter-bazilika, a Vatikáni kertek és múzeumok.",
        "1929-ben lett független a lateráni egyezmény révén.",
        "Teljes területe az UNESCO Világörökség része."
      ],
      ro: [
        "Cuprinde întregul stat suveran Cetatea Vaticanului.",
        "Cea mai mică țară din lume după suprafață și populație.",
        "Conține Bazilica Sfântul Petru, Grădinile Vaticane și Muzeele.",
        "A devenit independent în 1929 prin Tratatele de la Lateran.",
        "Întregul teritoriu este inclus în Patrimoniul Mondial UNESCO."
      ],
      en: [
        "Includes the entire sovereign Vatican City State.",
        "The smallest country in the world by area and population.",
        "Contains St. Peter's Basilica, the Vatican Gardens and Museums.",
        "Became independent in 1929 through the Lateran Treaties.",
        "The entire territory is listed as a UNESCO World Heritage site."
      ]
    }, image: "/poi-images/VA-001.webp"},
  {
    id: "VA-001-teutonic-cemetery",
    type: "landmark",
    parent: "VA-001",
    coords: [12.4542, 41.9015],
    name: {
      de: "Teutonischer Friedhof",
      hu: "Teuton temető",
      ro: "Cimitirul Teuton",
      en: "Teutonic Cemetery"
    },
    description: {
      de: "Der deutsche Friedhof im Schatten des Petersdoms.",
      hu: "Német temető a Szent Péter-bazilika árnyékában.",
      ro: "Cimitirul german din umbra Bazilicii Sfântul Petru.",
      en: "The German cemetery in the shadow of St. Peter's Basilica."
    },
    facts: {
      de: [
        "Ältester deutscher Friedhof in Rom.",
        "Liegt rechtlich auf italienischem Boden, ist aber exterritoriales Gebiet des Vatikans.",
        "Ursprünglich für Pilger aus dem Heiligen Römischen Reich gegründet.",
        "Wird von der Erzbruderschaft zur Schmerzhaften Muttergottes verwaltet.",
        "Beherbergt das Campo Santo Teutonico Kolleg."
      ],
      hu: [
        "A legrégebbi német temető Rómában.",
        "Jogilag olasz területen fekszik, de a Vatikán exterritoriális része.",
        "Eredetileg a Német-római Birodalom zarándokai számára alapították.",
        "A Fájdalmas Szűzanya Testvérisége kezeli.",
        "Itt található a Campo Santo Teutonico kollégium is."
      ],
      ro: [
        "Cel mai vechi cimitir german din Roma.",
        "Din punct de vedere juridic se află pe pământ italian, dar este teritoriu extrateritorial al Vaticanului.",
        "Fondat inițial pentru pelerinii din Sfântul Imperiu Roman.",
        "Administrat de Arhiconfraternitatea Maicii Domnului a Îndureratei.",
        "Găzduiește colegiul Campo Santo Teutonico."
      ],
      en: [
        "The oldest German cemetery in Rome.",
        "Legally on Italian soil but is extraterritorial territory of the Vatican.",
        "Originally founded for pilgrims from the Holy Roman Empire.",
        "Managed by the Archconfraternity of the Sorrowful Mother of God.",
        "Houses the Campo Santo Teutonico college."
      ]
    }, image: "/poi-images/VA-001-teutonic-cemetery.webp",
    descriptionAdvanced: {
      de: "Der Campo Santo Teutonico ist der Friedhof der Deutschen und der Flamen in Rom und liegt unmittelbar neben dem Petersdom. Er befindet sich auf geschichtsträchtigem Boden, auf dem einst der Zirkus von Nero stand. Das Areal gehört rechtlich nicht zum Staatsgebiet der Vatikanstadt, genießt jedoch exterritorialen Status. Seit dem 8. Jahrhundert dient der Ort als Begräbnisstätte für Personen deutscher oder flämischer Herkunft, die in Rom verstorben sind.",
      hu: "A Campo Santo dei Teutonici e dei Fiamminghi a németek és flamandok temetője Rómában, közvetlenül a Szent Péter-bazilika szomszédságában. A terület történelmileg Nero cirkuszának helyén fekszik, ahol számos keresztény mártírhalált halt. Jogi értelemben nem része a Vatikán állam területének, de területenkívüli státuszt élvez. A 8. század óta szolgál végső nyughelyül a Rómában elhunyt német és flamand származású hívek számára.",
      ro: "Cimitirul Teuton este locul de veșnică odihnă al germanilor și flamanzilor din Roma, fiind situat lângă Bazilica Sfântul Petru. Terenul se află pe locul fostului Circ al lui Nero, unde tradiția spune că au fost martirizați primii creștini. Deși se află în interiorul zidurilor vaticane, are un statut extrateritorial aparținând Sfântului Scaun. Din secolul al VIII-lea, cimitirul servește comunității catolice de limbă germană stabilită în Orașul Etern.",
      en: "The Teutonic Cemetery is the historic burial ground for Germans and Flemish residents in Rome, located adjacent to St. Peter's Basilica. It occupies part of the site where Nero's Circus once stood, a location linked to early Christian martyrdoms. Although situated within the Vatican walls, the cemetery holds extraterritorial status as property of the Holy See. Since the 8th century, it has served as a final resting place for people of Germanic and Flemish origin.",
    },
    factsAdvanced: {
      de: ["Karl der Große soll das Grundstück im Jahr 799 geschenkt haben.", "Seit 1454 wird der Friedhof von einer Erzbruderschaft verwaltet.", "Die zugehörige Kirche Santa Maria della Pietà stammt aus dem 15. Jahrhundert.", "Der Friedhof ist nur über einen bewachten Zugang im Vatikan erreichbar.", "Es ist der einzige Friedhof innerhalb der Mauern der Vatikanstadt.", "Viele deutsche Prälaten und Künstler sind hier seit Jahrhunderten bestattet."],
      hu: ["A hagyomány szerint Nagy Károly adományozta a földet 799-ben.", "A temetőt 1454 óta egy vallási testvérület felügyeli és gondozza.", "A mellette álló Santa Maria della Pietà templom a 15. századból való.", "Csak a Vatikánon belüli őrzött bejáraton keresztül látogatható.", "Ez az egyetlen temető, amely a vatikáni falakon belül helyezkedik el.", "Számos német bíboros és tudós nyugszik itt a középkor óta."],
      ro: ["Tradiția afirmă că terenul a fost dăruit de Carol cel Mare în anul 799.", "Din anul 1454, cimitirul este administrat de o arhibraslă religioasă.", "Biserica Santa Maria della Pietà din incintă datează din secolul XV.", "Accesul este permis prin poarta situată în stânga colonadelor lui Bernini.", "Este singurul cimitir funcțional aflat în interiorul zidurilor Vaticanului.", "Aici sunt înmormântați clerici și personalități germane din diverse epoci."],
      en: ["Tradition states that Charlemagne granted the land in the year 799.", "The Archconfraternity of Our Lady has managed the site since 1454.", "The Church of Santa Maria della Pietà on-site was built in the 15th century.", "It is the only cemetery located within the Leonine walls of the Vatican.", "Access is granted through a checkpoint near the Teutonic College.", "The site contains burials of German prelates and researchers since the Middle Ages."],
    },
  },
  {
    id: "VA-001-leonine-wall",
    type: "historical",
    parent: "VA-001",
    coords: [12.4480, 41.9030],
    name: {
      de: "Leoninische Mauer",
      hu: "Leó-fal",
      ro: "Zidul Leonin",
      en: "Leonine Wall"
    },
    description: {
      de: "Die mittelalterliche Befestigung, die den Vatikanhügel umschließt.",
      hu: "A Vatikán-dombot körülvevő középkori erődítmény.",
      ro: "Fortificația medievală care înconjoară dealul Vaticanului.",
      en: "The medieval fortification surrounding the Vatican Hill."
    },
    facts: {
      de: [
        "Erbaut von Papst Leo IV. im 9. Jahrhundert nach dem Überfall der Sarazenen.",
        "Bildete ursprünglich den Schutz für die 'Leoninische Stadt'.",
        "Die Mauern sind heute Teil der vatikanischen Befestigungsanlagen.",
        "Der Passetto di Borgo verbindet den Vatikan über die Mauer mit der Engelsburg.",
        "Umfasst markante Türme wie den Torre di San Giovanni."
      ],
      hu: [
        "IV. Leó pápa építtette a 9. században a szaracén támadások után.",
        "Eredetileg a 'Leó-város' védelmét szolgálta.",
        "A falak ma a vatikáni erődrendszer részét képezik.",
        "A Passetto di Borgo a falon keresztül köti össze a Vatikánt az Angyalvárral.",
        "Magában foglal olyan jellegzetes tornyokat, mint a Torre di San Giovanni."
      ],
      ro: [
        "Construit de Papa Leon al IV-lea în secolul al IX-lea după raidul sarazinilor.",
        "A format inițial protecția pentru 'Orașul Leonin'.",
        "Zidurile fac parte astăzi din fortificațiile Vaticanului.",
        "Passetto di Borgo leagă Vaticanul de Castel Sant'Angelo prin zid.",
        "Include turnuri proeminente, cum ar fi Torre di San Giovanni."
      ],
      en: [
        "Built by Pope Leo IV in the 9th century after the Saracen raid.",
        "Originally formed the protection for the 'Leonine City'.",
        "The walls are now part of the Vatican fortifications.",
        "The Passetto di Borgo connects the Vatican with Castel Sant'Angelo via the wall.",
        "Includes prominent towers such as the Torre di San Giovanni."
      ]
    },
    descriptionAdvanced: {
      de: "Die Leoninische Mauer ist eine mittelalterliche Befestigungsanlage, die den Vatikanhügel umschließt. Sie wurde zwischen 848 und 852 unter Papst Leo IV. errichtet, um den Petersdom vor Überfällen sarazenischer Piraten zu schützen. Diese Mauern markieren die historische Ausdehnung der sogenannten Leoninischen Stadt (Civitas Leonina). Heute sind bedeutende Teile der Mauer in die modernen vatikanischen Befestigungen und den Passetto di Borgo integriert.",
      hu: "A Leoninus-fal egy középkori erődítmény, amely a Vatikán-dombot veszi körül. IV. Leó pápa építtette 848 és 852 között, hogy megvédje a Szent Péter-bazilikát a szaracén kalózok támadásaitól. Ezek a falak jelölték ki az úgynevezett Leoninus-város (Civitas Leonina) határait a középkorban. Napjainkban a fal jelentős részei még láthatóak, beleértve a bazilikát az Angyalvárral összekötő Passetto di Borgo folyosót.",
      ro: "Zidul Leonin este o structură defensivă medievală care înconjoară dealul Vaticanului. A fost construit între anii 848 și 852 din ordinul Papei Leon al IV-lea pentru a proteja Bazilica Sfântul Petru de raidurile sarazinilor. Zidurile defineau limitele istorice ale Orașului Leonin (Civitas Leonina), un cartier distinct de restul Romei la acea vreme. Fragmente importante se păstrează și astăzi, făcând parte din sistemul de fortificații al Vaticanului.",
      en: "The Leonine Wall is a medieval fortification that encloses the Vatican Hill and its monuments. It was commissioned by Pope Leo IV between 848 and 852 to protect St. Peter's Basilica from Saracen raids following the sack of 846. These walls defined the boundaries of the historic Leonine City (Civitas Leonina) for several centuries. Significant portions of the original structure remain integrated into the Vatican's current defensive layout and the Passetto di Borgo.",
    },
    factsAdvanced: {
      de: ["Die Mauer wurde als Reaktion auf die Plünderung Roms im Jahr 846 gebaut.", "Sie erstreckte sich ursprünglich über eine Länge von etwa drei Kilometern.", "Der Bau wurde durch eine Sondersteuer in ganz Italien finanziert.", "Die Anlage verfügte ursprünglich über 44 Türme zur Verteidigung.", "Papst Leo IV. weihte die Mauern am 27. Juni 852 feierlich ein.", "Der Passetto di Borgo ist ein auf der Mauer errichteter Fluchtweg."],
      hu: ["A fal építését a Róma elleni 846-os szaracén támadás váltotta ki.", "Az erődítmény eredetileg körülbelül három kilométer hosszú volt.", "Az építkezést egész Itáliára kiterjedő különadóból finanszírozták.", "A falrendszer eredetileg 44 védőtoronnyal és három kapuval rendelkezett.", "IV. Leó pápa 852. június 27-én szentelte fel az elkészült falakat.", "A Passetto di Borgo egy titkos folyosó, amely a fal tetején fut végig."],
      ro: ["Zidul a fost ridicat ca răspuns la jefuirea Romei de către sarazini în 846.", "Lungimea inițială a fortificației era de aproximativ trei kilometri.", "Construcția a fost finanțată printr-o taxă specială colectată în Italia.", "Sistemul defensiv includea inițial 44 de turnuri de observație.", "Papa Leon al IV-lea a sfințit zidurile finalizate la 27 iunie 852.", "Pasajul Passetto di Borgo leagă Palatul Apostolic de Castelul Sant'Angelo."],
      en: ["Construction began after the Saracen raid on Old St. Peter's in 846.", "The original wall extended for a distance of about three kilometers.", "The project was funded by a special tax levied across the Italian peninsula.", "The wall originally featured 44 defensive towers and three main gates.", "Pope Leo IV solemnly blessed the completed walls on June 27, 852.", "The Passetto di Borgo corridor was later built atop a section of the wall."],
    },
    image: "/poi-images/VA-001-leonine-wall.webp",
  }
];

export const vaticanAll: POI[] = [
  vaticanCountry,
  ...vaticanPois
];

