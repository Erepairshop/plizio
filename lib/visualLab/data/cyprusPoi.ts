// @ts-nocheck
import type { POI } from "./poi";
import { cyprusOtherPoi } from "./poiExtraCyprusOther";

export const cyprusCountry: POI = {
  id: "country-cyprus",
  type: "country",
  parent: "europe",
  coords: [33.4299, 35.1264],
  name: {
    de: "Zypern",
    hu: "Ciprus",
    ro: "Cipru",
    en: "Cyprus"
  },
  description: {
    de: "Zypern ist eine sonnenverwöhnte Insel im östlichen Mittelmeer, bekannt für ihre reiche Geschichte, antike Ruinen und traumhafte Strände.",
    hu: "Ciprus egy napsütötte sziget a Földközi-tenger keleti részén, amely gazdag történelméről, ókori romjairól és gyönyörű strandjairól ismert.",
    ro: "Cipru este o insulă însorită din estul Mării Mediterane, cunoscută pentru istoria sa bogată, ruinele antice și plajele de vis.",
    en: "Cyprus is a sun-drenched island in the eastern Mediterranean, known for its rich history, ancient ruins, and stunning beaches."
  },
  descriptionAdvanced: {
    de: "Zypern ist die drittgrößte Insel im Mittelmeer und liegt an der Kreuzung dreier Kontinente. Sie blickt auf eine über 10.000-jährige Geschichte zurück.",
    hu: "Ciprus a Földközi-tenger harmadik legnagyobb szigete, három kontinens kereszteződésében. Több mint 10 000 éves múlttal rendelkezik.",
    ro: "Cipru este a treia insulă ca mărime din Marea Mediterană, situată la intersecția a trei continente. Are o istorie de peste 10.000 de ani.",
    en: "Cyprus is the third largest island in the Mediterranean, located at the crossroads of three continents. It boasts over 10,000 years of history."
  },
  facts: {
    de: ["Zypern ist als die Insel der Aphrodite bekannt."],
    hu: ["Ciprust Aphrodité szigeteként is ismerik."],
    ro: ["Cipru este cunoscută ca insula Afroditei."],
    en: ["Cyprus is known as the island of Aphrodite."]
  },
  factsAdvanced: {
    de: [
        "Zypern ist seit 2004 Mitglied der Europäischen Union.",
        "Die Insel ist seit 1974 de facto geteilt in die Republik Zypern im Süden und die Türkische Republik Nordzypern.",
        "Der Halloumi-Käse ist ein berühmtes zypriotisches Exportgut.",
        "Auf Zypern herrscht Linksverkehr, ein Überbleibsel der britischen Kolonialzeit.",
        "Die ältesten bekannten menschlichen Überreste auf Zypern sind etwa 10.500 Jahre alt.",
        "Das Mufflon, ein Wildschaf, ist das größte Säugetier der Insel und ein nationales Symbol."
    ],
    hu: [],
    ro: [
        "Cipru este membru al Uniunii Europene din 2004.",
        "Insula este împărțită de facto din 1974 în Republica Cipru în sud și autoproclamata Republică Turcă a Ciprului de Nord.",
        "Brânza Halloumi este un celebru produs de export cipriot.",
        "În Cipru se conduce pe partea stângă, o moștenire a perioadei coloniale britanice.",
        "Cele mai vechi rămășițe umane cunoscute în Cipru au o vechime de aproximativ 10.500 de ani.",
        "Muflonul, o oaie sălbatică, este cel mai mare mamifer de pe insulă și un simbol național."
    ],
    en: []
  }, image: "/poi-images/country-cyprus.webp"};

export const cyprusRegions: POI[] = [
  {
    id: "cy-nicosia",
    type: "city",
    parent: "CY-003",
    coords: [33.3666, 35.1666],
    name: { de: "Nikosia", hu: "Nicosia", ro: "Nicosia", en: "Nicosia" },
    description: {
      de: "Die Hauptstadt von Zypern, bekannt für ihre geteilte Altstadt und venezianischen Mauern.",
      hu: "Ciprus fővárosa, mely kettéosztott óvárosáról és velencei falairól ismert.",
      ro: "Capitala Ciprului, cunoscută pentru orașul său vechi divizat și zidurile venețiene.",
      en: "The capital of Cyprus, known for its divided old town and Venetian walls."
    },
    descriptionAdvanced: {
      de: "Nikosia, lokal als Lefkosia bekannt, ist die letzte geteilte Hauptstadt der Welt. Die 'Grüne Linie', eine Pufferzone der Vereinten Nationen, trennt den südlichen, griechisch-zyprischen Teil vom nördlichen, türkisch-zyprischen Teil. Diese Teilung ist ein direktes Ergebnis der türkischen Invasion von 1974. Besucher können die Grenze an mehreren Übergängen, wie der Ledra-Straße, überqueren und so die unterschiedlichen Kulturen, Küchen und Atmosphären beider Seiten erleben. Die Altstadt ist von massiven venezianischen Mauern aus dem 16. Jahrhundert umgeben, die ursprünglich zum Schutz vor den Osmanen errichtet wurden und heute eine sternförmige Festung bilden, die das historische Herz der Stadt umschließt.",
      hu: "",
      ro: "Nicosia, cunoscută local ca Lefkosia, este ultima capitală divizată din lume. 'Linia Verde', o zonă tampon a Națiunilor Unite, separă partea sudică, cipriotă greacă, de cea nordică, cipriotă turcă. Această diviziune este un rezultat direct al invaziei turcești din 1974. Vizitatorii pot traversa granița la mai multe puncte de trecere, cum ar fi strada Ledra, experimentând astfel culturile, bucătăriile și atmosferele diferite ale ambelor părți. Orașul vechi este înconjurat de ziduri venețiene masive din secolul al XVI-lea, construite inițial pentru a proteja împotriva otomanilor și care astăzi formează o fortăreață în formă de stea ce înconjoară inima istorică a orașului.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Nikosia ist seit über 1000 Jahren ununterbrochen die Hauptstadt Zyperns.",
        "Der Name 'Nikosia' erschien nach der Ankunft der Lusignans im 12. Jahrhundert.",
        "Die venezianischen Mauern haben elf herzförmige Bastionen, von denen fünf im Süden und fünf im Norden liegen, eine ist geteilt.",
        "Das Zypern-Museum in Nikosia beherbergt die umfangreichste Sammlung von Altertümern der Insel.",
        "Die Stadt war einst das Zentrum des mittelalterlichen Königreichs Zypern.",
        "Der verlassene internationale Flughafen von Nikosia liegt in der Pufferzone der Vereinten Nationen.",
        "Die Ledra-Straße war bis zu ihrer Wiedereröffnung im Jahr 2008 jahrzehntelang komplett versiegelt."
      ],
      hu: [],
      ro: [
        "Nicosia este capitala neîntreruptă a Ciprului de peste 1000 de ani.",
        "Numele 'Nicosia' a apărut după sosirea Lusignanilor în secolul al XII-lea.",
        "Zidurile venețiene au unsprezece bastioane în formă de inimă: cinci în sud, cinci în nord și unul este divizat.",
        "Muzeul Ciprului din Nicosia găzduiește cea mai vastă colecție de antichități de pe insulă.",
        "Orașul a fost odată centrul Regatului medieval al Ciprului.",
        "Aeroportul Internațional Nicosia, acum abandonat, se află în zona tampon a ONU.",
        "Strada Ledra a fost complet sigilată timp de decenii până la redeschiderea sa în 2008."
      ],
      en: []
    }
  },
  {
    id: "cy-limassol",
    type: "city",
    parent: "CY-004",
    coords: [33.0443, 34.6750],
    name: { de: "Limassol", hu: "Limassol", ro: "Limassol", en: "Limassol" },
    description: {
      de: "Zweitgrößte Stadt Zyperns und ein bedeutendes Handels- und Tourismuszentrum.",
      hu: "Ciprus második legnagyobb városa, jelentős kereskedelmi és turisztikai központ.",
      ro: "Al doilea oraș ca mărime din Cipru și un important centru comercial și turistic.",
      en: "The second largest city in Cyprus and a major commercial and tourist hub."
    },
    descriptionAdvanced: {
      de: "Limassol, oder Lemesos, ist das dynamische Zentrum der zypriotischen Weinindustrie und Gastgeber des jährlichen Weinfestivals. Die Stadt erstreckt sich entlang der Südküste und hat sich zu einem bedeutenden internationalen Geschäftszentrum und dem größten Transithafen der Insel entwickelt. Die mittelalterliche Burg von Limassol, in der Richard Löwenherz vermutlich Berengaria von Navarra heiratete, beherbergt heute ein Museum. Die moderne Marina von Limassol, die 2014 eröffnet wurde, hat die Küstenlinie der Stadt verändert und bietet Liegeplätze für Superyachten sowie eine Reihe von exklusiven Restaurants und Geschäften.",
      hu: "",
      ro: "Limassol, sau Lemesos, este centrul dinamic al industriei vinicole cipriote și gazda festivalului anual al vinului. Orașul se întinde de-a lungul coastei de sud și a devenit un important centru de afaceri internațional și cel mai mare port de tranzit de pe insulă. Castelul medieval din Limassol, unde se presupune că Richard Inimă de Leu s-a căsătorit cu Berengaria de Navara, găzduiește astăzi un muzeu. Portul modern din Limassol, deschis în 2014, a transformat linia de coastă a orașului, oferind dane pentru super-iahturi, precum și o serie de restaurante și magazine exclusive.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Geschichte Limassols reicht bis mindestens 2000 v. Chr. zurück.",
        "Richard Löwenherz landete 1191 in Limassol und eroberte die Stadt.",
        "Die Stadt ist bekannt für ihre ausgelassenen Karnevalsfeiern, die seit über einem Jahrhundert stattfinden.",
        "Commandaria, einer der ältesten benannten Weine der Welt, stammt aus der Region um Limassol.",
        "Die beiden größten Weingüter Zyperns, KEO und ETKO, haben ihren Sitz in Limassol.",
        "Der Hafen von Limassol ist einer der verkehrsreichsten Häfen im Mittelmeerraum für den Transithandel.",
        "Die antike Stadt Amathus, eines der wichtigsten Königreiche Zyperns, liegt östlich von Limassol.",
        "Das nahegelegene Kourion war eine bedeutende antike Stadt mit einem prächtigen griechisch-römischen Theater."
      ],
      hu: [],
      ro: [
        "Istoria Limassolului datează de cel puțin 2000 de ani î.Hr.",
        "Richard Inimă de Leu a debarcat în Limassol în 1191 și a cucerit orașul.",
        "Orașul este renumit pentru carnavalurile sale exuberante, care au loc de peste un secol.",
        "Commandaria, unul dintre cele mai vechi vinuri cu denumire din lume, provine din regiunea Limassol.",
        "Cele mai mari două companii vinicole din Cipru, KEO și ETKO, au sediul în Limassol.",
        "Portul Limassol este unul dintre cele mai aglomerate porturi din Mediterana pentru comerțul de tranzit.",
        "Orașul antic Amathus, unul dintre cele mai importante regate din Cipru, este situat la est de Limassol."
      ],
      en: []
    }, image: "/poi-images/cy-limassol.webp"},
  {
    id: "cy-larnaca",
    type: "city",
    parent: "CY-001",
    coords: [33.6333, 34.9000],
    name: { de: "Larnaca", hu: "Lárnaka", ro: "Larnaca", en: "Larnaca" },
    description: {
      de: "Küstenstadt mit einer palmengesäumten Promenade und dem internationalen Flughafen.",
      hu: "Tengerparti város pálmafás sétánnyal és a nemzetközi repülőtérrel.",
      ro: "Oraș de coastă cu o promenadă mărginită de palmieri și aeroportul internațional.",
      en: "A coastal city with a palm-lined promenade and the international airport."
    },
    descriptionAdvanced: {
      de: "Larnaca ist auf den Überresten des antiken Stadtkönigreichs Kition erbaut, dem Geburtsort des stoischen Philosophen Zenon. Eine Hauptattraktion ist die Kirche des Heiligen Lazarus, die über dem angeblichen Grab des von Christus auferweckten Lazarus errichtet wurde. Der nahegelegene Salzsee von Larnaca ist ein wichtiges Feuchtgebiet, das in den Wintermonaten Tausenden von Flamingos als Heimat dient. Am Ufer des Sees befindet sich die Hala Sultan Tekke, eine der heiligsten Stätten des Islam. Der internationale Flughafen von Larnaca ist der wichtigste Einreisepunkt für die meisten Besucher Zyperns.",
      hu: "",
      ro: "Larnaca este construită pe ruinele anticului regat-oraș Kition, locul de naștere al filosofului stoic Zenon. O atracție principală este Biserica Sfântul Lazăr, construită deasupra presupusului mormânt al lui Lazăr, cel înviat de Hristos. Lacul sărat din apropiere este o zonă umedă importantă, care servește drept casă pentru mii de flamingo în lunile de iarnă. Pe malul lacului se află Hala Sultan Tekke, unul dintre cele mai sfinte locuri ale Islamului. Aeroportul Internațional din Larnaca este principalul punct de intrare pentru majoritatea vizitatorilor din Cipru.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Kition, das antike Larnaca, wurde im 13. Jahrhundert v. Chr. von mykenischen Griechen gegründet.",
        "Der Philosoph Zenon, Gründer der stoischen Schule in Athen, wurde um 334 v. Chr. in Kition geboren.",
        "Die byzantinische Lazarus-Kirche wurde im 9. Jahrhundert von Kaiser Leo VI. erbaut.",
        "Das Wrack der MS Zenobia, das 1980 sank, ist einer der Top-Tauchplätze der Welt und liegt vor der Küste Larnacas.",
        "Die Hala Sultan Tekke ist die Grabstätte von Umm Haram, der Amme des Propheten Mohammed.",
        "Die Finikoudes-Promenade ist nach den kleinen Palmen benannt, die dort 1922 gepflanzt wurden.",
        "Der Kamares-Aquädukt aus dem 18. Jahrhundert versorgte die Stadt bis in die 1930er Jahre mit Wasser."
      ],
      hu: [],
      ro: [
        "Kition, anticul Larnaca, a fost fondat de grecii micenieni în secolul al XIII-lea î.Hr.",
        "Filosoful Zenon, fondatorul școlii stoice din Atena, s-a născut în Kition în jurul anului 334 î.Hr.",
        "Biserica bizantină Sfântul Lazăr a fost construită în secolul al IX-lea de împăratul Leon al VI-lea.",
        "Epava navei MS Zenobia, scufundată în 1980, este unul dintre cele mai bune locuri de scufundări din lume și se află în largul coastei Larnaca.",
        "Hala Sultan Tekke este locul de înmormântare al lui Umm Haram, doica profetului Mahomed.",
        "Promenada Finikoudes este numită după palmierii mici plantați acolo în 1922.",
        "Apeductul Kamares, din secolul al XVIII-lea, a alimentat orașul cu apă până în anii 1930."
      ],
      en: []
    }, image: "/poi-images/cy-larnaca.webp"},
  {
    id: "cy-paphos",
    type: "city",
    parent: "CY-005",
    coords: [32.4245, 34.7768],
    name: { de: "Paphos", hu: "Páfosz", ro: "Paphos", en: "Paphos" },
    description: {
      de: "Berühmt für seine antiken Ruinen und als mythischer Geburtsort der Aphrodite.",
      hu: "Híres ókori romjairól és mint Aphrodité mitikus szülőhelye.",
      ro: "Faimos pentru ruinele sale antice și ca locul mitic de naștere al Afroditei.",
      en: "Famous for its ancient ruins and as the mythical birthplace of Aphrodite."
    },
    descriptionAdvanced: {
      de: "Paphos, die Kulturhauptstadt Europas 2017, ist eine Stadt, die reich an antiker Geschichte und Mythologie ist. Die gesamte Stadt steht unter dem Schutz des UNESCO-Weltkulturerbes. Der Archäologische Park von Kato Paphos beherbergt beeindruckende römische Villen mit außergewöhnlich gut erhaltenen Mosaikböden, die Szenen aus der griechischen Mythologie darstellen. In der Nähe befindet sich Petra tou Romiou, der legendäre Geburtsort der Aphrodite, der Göttin der Liebe und Schönheit. Die Königsgräber, eine große Nekropole aus dem 4. Jahrhundert v. Chr., sind beeindruckende, in den Fels gehauene Gräber, die hohen Beamten und nicht Königen gehörten.",
      hu: "",
      ro: "Paphos, Capitală Europeană a Culturii în 2017, este un oraș bogat în istorie antică și mitologie. Întregul oraș este protejat ca sit al Patrimoniului Mondial UNESCO. Parcul Arheologic Kato Paphos găzduiește vile romane impresionante, cu podele de mozaic excepțional de bine conservate, care înfățișează scene din mitologia greacă. În apropiere se află Petra tou Romiou, locul legendar de naștere al Afroditei, zeița iubirii și frumuseții. Mormintele Regilor, o necropolă mare din secolul al IV-lea î.Hr., sunt morminte impresionante săpate în stâncă, care aparțineau unor înalți oficiali, nu regilor.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Paphos war in der hellenistischen und römischen Zeit die Hauptstadt Zyperns.",
        "Die Mosaike im Haus des Dionysos umfassen eine Fläche von über 556 Quadratmetern.",
        "Die Königsgräber wurden bis ins 3. Jahrhundert n. Chr. genutzt.",
        "Der Apostel Paulus besuchte Paphos im 1. Jahrhundert n. Chr. und bekehrte den römischen Prokonsul zum Christentum.",
        "Das Odeon von Paphos, ein kleines römisches Amphitheater, wird heute noch für Aufführungen genutzt.",
        "Die byzantinische Burg Saranta Kolones wurde im 7. Jahrhundert erbaut und durch ein Erdbeben 1222 zerstört.",
        "Die Akamas-Halbinsel, ein unberührtes Naturschutzgebiet, liegt nordwestlich von Paphos."
      ],
      hu: [],
      ro: [
        "Paphos a fost capitala Ciprului în perioadele elenistică și romană.",
        "Mozaicurile din Casa lui Dionis acoperă o suprafață de peste 556 de metri pătrați.",
        "Mormintele Regilor au fost folosite până în secolul al III-lea d.Hr.",
        "Apostolul Pavel a vizitat Paphos în secolul I d.Hr. și l-a convertit la creștinism pe proconsulul roman.",
        "Odeonul din Paphos, un mic amfiteatru roman, este încă folosit pentru spectacole.",
        "Castelul bizantin Saranta Kolones, construit în secolul al VII-lea, a fost distrus de un cutremur în 1222.",
        "Peninsula Akamas, o rezervație naturală virgină, se află la nord-vest de Paphos."
      ],
      en: []
    }, image: "/poi-images/cy-paphos.webp"},
  {
    id: "cy-famagusta",
    type: "city",
    parent: "CY-002",
    coords: [33.9422, 35.1250],
    name: { de: "Famagusta", hu: "Famagusta", ro: "Famagusta", en: "Famagusta" },
    description: {
      de: "Historische Hafenstadt an der Ostküste mit beeindruckenden mittelalterlichen Ruinen.",
      hu: "Történelmi kikötőváros a keleti parton, lenyűgöző középkori romokkal.",
      ro: "Oraș-port istoric pe coasta de est, cu ruine medievale impresionante.",
      en: "A historical port city on the east coast with impressive medieval ruins."
    },
    descriptionAdvanced: {
      de: "Famagusta, an der Ostküste gelegen, war einst eine der reichsten Städte der Welt und ein wichtiger Handelsposten zwischen Ost und West. Ihre Glanzzeit erlebte sie unter der Herrschaft der Lusignans im Mittelalter. Die von massiven venezianischen Mauern umgebene Altstadt ist ein Labyrinth aus historischen Gebäuden, darunter die Lala-Mustafa-Pascha-Moschee, die ursprünglich als Kathedrale des Heiligen Nikolaus erbaut wurde und als Meisterwerk der gotischen Architektur gilt. Ein tragischer Teil der modernen Geschichte ist Varosha, ein ehemals blühender Touristenbezirk, der seit der türkischen Invasion 1974 eine Geisterstadt ist und erst seit kurzem teilweise wieder zugänglich gemacht wird.",
      hu: "",
      ro: "Famagusta, situată pe coasta de est, a fost odată unul dintre cele mai bogate orașe din lume și un important post comercial între Est și Vest. Perioada sa de glorie a fost sub dominația Lusignanilor în Evul Mediu. Orașul vechi, înconjurat de ziduri venețiene masive, este un labirint de clădiri istorice, inclusiv Moscheea Lala Mustafa Pașa, construită inițial ca Catedrala Sfântul Nicolae și considerată o capodoperă a arhitecturii gotice. O parte tragică a istoriei moderne este Varosha, un fost cartier turistic înfloritor, care este un oraș-fantomă din 1974, de la invazia turcă, și care abia recent a fost parțial redeschis.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Mauern von Famagusta sind etwa 3 Kilometer lang und bis zu 15 Meter hoch.",
        "Die St.-Nikolaus-Kathedrale wurde im 14. Jahrhundert erbaut und ähnelte der Kathedrale von Reims in Frankreich.",
        "Shakespeares Tragödie 'Othello' soll von der venezianischen Festung in Famagusta inspiriert worden sein.",
        "Vor 1974 war Varosha ein Top-Touristenziel, das von Berühmtheiten wie Elizabeth Taylor und Brigitte Bardot besucht wurde.",
        "Die antike Stadt Salamis, eine der wichtigsten archäologischen Stätten Zyperns, liegt nördlich von Famagusta.",
        "Die Stadt wurde während der osmanischen Belagerung 1570-1571 schwer beschädigt.",
        "Famagusta besitzt den tiefsten Hafen Zyperns."
      ],
      hu: [],
      ro: [
        "Zidurile Famagustei au aproximativ 3 kilometri lungime și până la 15 metri înălțime.",
        "Catedrala Sfântul Nicolae a fost construită în secolul al XIV-lea și semăna cu Catedrala din Reims, Franța.",
        "Se spune că tragedia 'Othello' a lui Shakespeare a fost inspirată de cetatea venețiană din Famagusta.",
        "Înainte de 1974, Varosha era o destinație turistică de top, vizitată de celebrități precum Elizabeth Taylor și Brigitte Bardot.",
        "Orașul antic Salamis, unul dintre cele mai importante situri arheologice din Cipru, se află la nord de Famagusta.",
        "Orașul a fost grav avariat în timpul asediului otoman din 1570-1571.",
        "Famagusta are cel mai adânc port din Cipru."
      ],
      en: []
    }, image: "/poi-images/cy-famagusta.webp"},
  {
    id: "cy-kyrenia",
    type: "city",
    parent: "country-cyprus",
    coords: [33.3167, 35.3333],
    name: { de: "Kyrenia", hu: "Kerínia", ro: "Kyrenia", en: "Kyrenia" },
    description: {
      de: "Malerische Stadt an der Nordküste mit einem hufeisenförmigen Hafen und einer Festung.",
      hu: "Festői város az északi parton, patkó alakú kikötővel és várral.",
      ro: "Oraș pitoresc pe coasta de nord, cu un port în formă de potcoavă și o fortăreață.",
      en: "A picturesque city on the north coast with a horseshoe-shaped harbor and a castle."
    },
    descriptionAdvanced: {
      de: "Kyrenia, oder Girne auf Türkisch, ist berühmt für seinen historischen Hafen und die angrenzende Festung. Der Hafen, mit seiner charmanten, von alten Lagerhäusern gesäumten Uferpromenade, die heute Cafés und Restaurants beherbergen, gilt als einer der schönsten im Mittelmeer. Die massive Festung von Kyrenia am östlichen Ende des Hafens umschließt eine byzantinische Kapelle aus dem 12. Jahrhundert und das Schiffswrack-Museum. Dieses Museum zeigt die Überreste eines griechischen Handelsschiffes aus dem 4. Jahrhundert v. Chr., eines der ältesten geborgenen Schiffswracks der Welt, das samt seiner Ladung von Amphoren und Mühlsteinen ausgestellt ist.",
      hu: "",
      ro: "Kyrenia, sau Girne în turcă, este renumită pentru portul său istoric și fortăreața adiacentă. Portul, cu promenada sa fermecătoare mărginită de vechi depozite transformate acum în cafenele și restaurante, este considerat unul dintre cele mai frumoase din Mediterana. Fortăreața masivă a Kyreniei, la capătul estic al portului, înconjoară o capelă bizantină din secolul al XII-lea și Muzeul Epavei. Acest muzeu expune rămășițele unei nave comerciale grecești din secolul al IV-lea î.Hr., una dintre cele mai vechi epave recuperate din lume, expusă împreună cu încărcătura sa de amfore și pietre de moară.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Ursprünge Kyrenias gehen auf achäische Siedler nach dem Trojanischen Krieg zurück.",
        "Die Festung von Kyrenia wurde ursprünglich von den Römern erbaut, aber von den Byzantinern und Lusignans erheblich erweitert.",
        "Das Schiffswrack im Museum sank um 300 v. Chr. und wurde 1965 von einem Taucher entdeckt.",
        "Die nahe gelegene Abtei Bellapais, eine beeindruckende gotische Ruine, bietet einen spektakulären Blick auf die Küste.",
        "Die Burg St. Hilarion, die sich im Kyrenia-Gebirge erhebt, soll die Vorlage für das Schloss in Disneys 'Schneewittchen' gewesen sein.",
        "Kyrenia ist ein wichtiges kulturelles und wirtschaftliches Zentrum in Nordzypern.",
        "Die Stadt war während der venezianischen Herrschaft ein wichtiger Militärhafen."
      ],
      hu: [],
      ro: [
        "Originile Kyreniei datează de la coloniștii ahei de după Războiul Troian.",
        "Fortăreața Kyrenia a fost construită inițial de romani, dar extinsă semnificativ de bizantini și Lusignani.",
        "Epava din muzeu s-a scufundat în jurul anului 300 î.Hr. și a fost descoperită de un scafandru în 1965.",
        "Abația Bellapais din apropiere, o ruină gotică impresionantă, oferă vederi spectaculoase ale coastei.",
        "Se spune că Castelul Sf. Hilarion, din Munții Kyrenia, a fost sursa de inspirație pentru castelul din 'Albă ca Zăpada' de la Disney.",
        "Kyrenia este un important centru cultural și economic în Ciprul de Nord.",
        "Orașul a fost un important port militar în timpul dominației venețiene."
      ],
      en: []
    }, image: "/poi-images/cy-kyrenia.webp"},
  {
    id: "cy-ayianapa",
    type: "city",
    parent: "CY-002",
    coords: [34.0000, 34.9833],
    name: { de: "Ayia Napa", hu: "Ayia Napa", ro: "Ayia Napa", en: "Ayia Napa" },
    description: {
      de: "Bekannt für seine Sandstrände, das mittelalterliche Kloster und ein lebhaftes Nachtleben.",
      hu: "Homokos tengerpartjairól, középkori kolostoráról és pezsgő éjszakai életéről ismert.",
      ro: "Cunoscută pentru plajele sale de nisip, mănăstirea medievală și viața de noapte vibrantă.",
      en: "Known for its sandy beaches, medieval monastery, and vibrant nightlife."
    },
    descriptionAdvanced: {
      de: "Ayia Napa, einst ein ruhiges Fischerdorf, hat sich in den letzten Jahrzehnten zu einem der beliebtesten Ferienorte Europas entwickelt, der vor allem für sein pulsierendes Nachtleben und seine wunderschönen Strände bekannt ist. Der berühmteste Strand ist Nissi Beach mit seinem feinen weißen Sand und dem vorgelagerten Inselchen. Im Herzen der Stadt steht das mittelalterliche Kloster von Ayia Napa, das um 1500 erbaut wurde und eine ruhige Oase inmitten des Trubels darstellt. Der Name 'Ayia Napa' bedeutet 'Heiliger Wald' und bezieht sich auf eine Ikone der Jungfrau Maria, die einst in einer Höhle in dem dichten Wald gefunden wurde, der das Gebiet bedeckte.",
      hu: "",
      ro: "Ayia Napa, odată un liniștit sat pescăresc, a devenit în ultimele decenii una dintre cele mai populare stațiuni din Europa, renumită în special pentru viața de noapte vibrantă și plajele sale superbe. Cea mai faimoasă plajă este Nissi Beach, cu nisipul său fin și alb și insulița sa. În inima orașului se află mănăstirea medievală Ayia Napa, construită în jurul anului 1500, o oază de liniște în mijlocul agitației. Numele 'Ayia Napa' înseamnă 'Pădurea Sfântă' și se referă la o icoană a Fecioarei Maria găsită odată într-o peșteră din pădurea deasă care acoperea zona.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Kloster wurde in der venezianischen Zeit um eine Höhle herum erbaut.",
        "Bis in die 1970er Jahre war Ayia Napa kaum mehr als ein kleines Dorf.",
        "Der Skulpturenpark von Ayia Napa zeigt Werke von Künstlern aus aller Welt.",
        "Kap Greco, ein nahegelegener Nationalpark, ist berühmt für seine Meereshöhlen und atemberaubenden Sonnenuntergänge.",
        "Der Strand Makronissos besteht aus drei kleinen Buchten mit feinem Sand.",
        "Das Thalassa-Meeresmuseum widmet sich der maritimen Geschichte Zyperns.",
        "Ayia Napa ist besonders bei Clubgängern aus ganz Europa beliebt."
      ],
      hu: [],
      ro: [
        "Mănăstirea a fost construită în perioada venețiană în jurul unei peșteri.",
        "Până în anii 1970, Ayia Napa era doar un mic sat.",
        "Parcul de Sculpturi din Ayia Napa expune lucrări ale artiștilor din întreaga lume.",
        "Capul Greco, un parc național din apropiere, este faimos pentru peșterile sale marine și apusurile uimitoare.",
        "Plaja Makronissos este formată din trei golfuri mici cu nisip fin.",
        "Muzeul Mării Thalassa este dedicat istoriei maritime a Ciprului.",
        "Ayia Napa este deosebit de populară printre amatorii de cluburi din toată Europa."
      ],
      en: []
    }, image: "/poi-images/cy-ayianapa.webp"},
  {
    id: "cy-kourion",
    type: "historical",
    parent: "CY-004",
    coords: [32.8872, 34.6653],
    name: { de: "Kourion", hu: "Kourion", ro: "Kourion", en: "Kourion" },
    description: {
      de: "Eine der beeindruckendsten archäologischen Stätten Zyperns mit einem römischen Theater.",
      hu: "Ciprus egyik leglenyűgözőbb régészeti lelőhelye római kori színházzal.",
      ro: "Unul dintre cele mai impresionante situri arheologice din Cipru, cu un teatru roman.",
      en: "One of the most impressive archaeological sites in Cyprus, featuring a Roman theatre."
    },
    descriptionAdvanced: {
      de: "Die antike Stadt Kourion war eines der wichtigsten Stadtkönigreiche Zyperns und thront spektakulär auf einer Klippe mit Blick auf das Mittelmeer. Die archäologische Stätte ist besonders berühmt für ihr prächtiges griechisch-römisches Theater, das im 2. Jahrhundert v. Chr. erbaut und später von den Römern erweitert wurde. Es wird heute noch für musikalische und theatralische Darbietungen genutzt und bietet Platz für etwa 3.500 Zuschauer. Weitere Höhepunkte sind die prächtigen Mosaikböden im 'Haus des Eustolios', einer frühchristlichen Villa, sowie die Überreste einer großen Basilika und eines Nymphäums. In der Nähe befindet sich das Heiligtum des Apollon Hylates, ein wichtiges religiöses Zentrum in der Antike.",
      hu: "",
      ro: "Orașul antic Kourion a fost unul dintre cele mai importante regate-oraș din Cipru și este spectaculos așezat pe o stâncă cu vedere la Marea Mediterană. Situl arheologic este renumit în special pentru magnificul său teatru greco-roman, construit în secolul al II-lea î.Hr. și extins ulterior de romani. Acesta este încă folosit astăzi pentru spectacole muzicale și teatrale și are o capacitate de aproximativ 3.500 de spectatori. Alte atracții includ podelele splendide de mozaic din 'Casa lui Eustolios', o vilă creștină timpurie, precum și ruinele unei mari bazilici și ale unui nimfeu. În apropiere se află Sanctuarul lui Apollo Hylates, un centru religios important în antichitate.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Kourion wurde vermutlich im 12. Jahrhundert v. Chr. von argivischen Kolonisten gegründet.",
        "Die Stadt wurde im 4. Jahrhundert n. Chr. durch eine Reihe von schweren Erdbeben zerstört.",
        "Das 'Haus der Gladiatoren' zeigt Mosaike, die Gladiatorenkämpfe darstellen – einzigartig auf Zypern.",
        "Das 'Haus des Achilles' enthält ein Mosaik, das die Enthüllung von Achilles in Skyros darstellt.",
        "Die frühchristliche Basilika war eine der größten auf Zypern.",
        "Das Stadion von Kourion, westlich der Hauptstätte, bot Platz für etwa 6.000 Zuschauer.",
        "Die Wasserversorgung der Stadt erfolgte durch zwei Aquädukte."
      ],
      hu: [],
      ro: [
        "Se crede că Kourion a fost fondat de coloniști din Argos în secolul al XII-lea î.Hr.",
        "Orașul a fost distrus de o serie de cutremure puternice în secolul al IV-lea d.Hr.",
        "'Casa Gladiatorilor' prezintă mozaicuri care înfățișează lupte de gladiatori - unice în Cipru.",
        "'Casa lui Ahile' conține un mozaic care descrie dezvăluirea lui Ahile în Skyros.",
        "Bazilica creștină timpurie a fost una dintre cele mai mari din Cipru.",
        "Stadionul din Kourion, la vest de situl principal, avea o capacitate de aproximativ 6.000 de spectatori.",
        "Alimentarea cu apă a orașului era asigurată de două apeducte."
      ],
      en: []
    }, image: "/poi-images/cy-kourion.webp"},
  {
    id: "cy-tombs-kings",
    type: "historical",
    parent: "CY-005",
    coords: [32.4053, 34.7675],
    name: { de: "Königsgräber", hu: "Királysírok", ro: "Mormintele Regilor", en: "Tombs of the Kings" },
    description: {
      de: "Große Nekropole aus hellenistischer und römischer Zeit in der Nähe von Paphos.",
      hu: "Nagy kiterjedésű, hellenisztikus és római kori nekropolisz Páfosz közelében.",
      ro: "O mare necropolă din perioada elenistică și romană în apropiere de Paphos.",
      en: "A large necropolis from the Hellenistic and Roman periods near Paphos."
    },
    descriptionAdvanced: {
      de: "Die 'Königsgräber' sind eine weitläufige Nekropole, die zum UNESCO-Weltkulturerbe gehört und nur wenige Kilometer von Paphos entfernt liegt. Trotz ihres Namens wurden hier keine Könige bestattet, sondern hochrangige ptolemäische Aristokraten und Beamte vom 4. Jahrhundert v. Chr. bis zum 3. Jahrhundert n. Chr. Die Gräber sind beeindruckend und einzigartig auf Zypern, da sie in den massiven Fels gehauen sind und einige von ihnen unterirdische, offene Atrien mit Peristylen aus dorischen Säulen aufweisen. Viele der Gräber ahmten die Häuser der Lebenden nach, was den Glauben an ein Leben nach dem Tod widerspiegelt. Die Größe und Pracht der Gräber gaben der Stätte ihren königlichen Namen.",
      hu: "",
      ro: "Mormintele Regilor' sunt o necropolă vastă, inclusă în Patrimoniul Mondial UNESCO, situată la doar câțiva kilometri de Paphos. În ciuda numelui, aici nu au fost îngropați regi, ci aristocrați și înalți funcționari ptolemeici din secolul al IV-lea î.Hr. până în secolul al III-lea d.Hr. Mormintele sunt impresionante și unice în Cipru, fiind sculptate în stâncă masivă, unele având atriumuri subterane deschise, cu peristiluri de coloane doriene. Multe morminte imitau casele celor vii, reflectând credința într-o viață de apoi. Dimensiunea și splendoarea mormintelor au dat sitului numele său regal.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Nekropole erstreckt sich über eine große Fläche entlang der Küste.",
        "Einige der Gräber sind mit gut erhaltenen Fresken verziert, obwohl die meisten geplündert wurden.",
        "Grab Nummer 3 ist eines der beeindruckendsten, mit einem großen unterirdischen Hof, der von Säulen umgeben ist.",
        "Die Architektur zeigt starke Einflüsse aus dem ptolemäischen Alexandria in Ägypten.",
        "Die Gräber wurden von den ersten Christen als Zufluchtsorte und für Bestattungen wiederverwendet.",
        "Die Stätte war Teil der antiken Stadt Nea Paphos.",
        "Die meisten Gräber sind direkt aus dem natürlichen Felsgestein gehauen."
      ],
      hu: [],
      ro: [
        "Necropola se întinde pe o suprafață mare de-a lungul coastei.",
        "Unele morminte sunt decorate cu fresce bine conservate, deși majoritatea au fost jefuite.",
        "Mormântul numărul 3 este unul dintre cele mai impresionante, cu o curte subterană mare înconjurată de coloane.",
        "Arhitectura prezintă puternice influențe din Alexandria ptolemeică din Egipt.",
        "Mormintele au fost refolosite de primii creștini ca locuri de refugiu și pentru înmormântări.",
        "Situl făcea parte din orașul antic Nea Paphos.",
        "Majoritatea mormintelor sunt săpate direct în roca naturală."
      ],
      en: []
    }, image: "/poi-images/cy-tombs-kings.webp"},
  {
    id: "cy-kolossi",
    type: "historical",
    parent: "CY-004",
    coords: [32.9344, 34.6653],
    name: { de: "Burg Kolossi", hu: "Kolossi vár", ro: "Castelul Kolossi", en: "Kolossi Castle" },
    description: {
      de: "Ehemalige Kreuzritterburg in der Nähe von Limassol.",
      hu: "Egykori keresztes lovagvár Limassol közelében.",
      ro: "O fostă fortăreață a cruciaților în apropiere de Limassol.",
      en: "A former Crusader stronghold located near Limassol."
    },
    descriptionAdvanced: {
      de: "Die Burg Kolossi ist ein ehemaliger Kreuzritterstützpunkt, etwa 14 Kilometer westlich von Limassol. Die heutige Burg wurde im 15. Jahrhundert von den Johannitern auf den Ruinen einer früheren Festung aus dem 13. Jahrhundert erbaut. Die Burg ist ein hervorragendes Beispiel für mittelalterliche Militärarchitektur und besteht aus einem dreistöckigen Wohnturm mit einer angrenzenden Anlage, die einst der Zuckergewinnung aus lokal angebautem Zuckerrohr diente. Die Region um Kolossi ist auch die Heimat des Commandaria, des süßen Dessertweins, der als einer der ältesten benannten Weine der Welt gilt und von den Johannitern produziert und exportiert wurde.",
      hu: "",
      ro: "Castelul Kolossi este o fostă fortăreață a cruciaților, la aproximativ 14 kilometri vest de Limassol. Castelul actual a fost construit în secolul al XV-lea de Cavalerii Ospitalieri pe ruinele unei fortărețe anterioare din secolul al XIII-lea. Castelul este un exemplu excelent de arhitectură militară medievală și constă dintr-un donjon cu trei etaje și o anexă adiacentă folosită odinioară pentru producerea zahărului din trestia de zahăr cultivată local. Regiunea din jurul Kolossi este, de asemenea, locul de origine al vinului Commandaria, un vin dulce de desert considerat unul dintre cele mai vechi vinuri cu denumire din lume, produs și exportat de Cavalerii Ospitalieri.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die ursprüngliche Festung wurde 1210 vom fränkischen Militär erbaut.",
        "Die Burg war das Zentrum der 'Grande Commanderie' des Johanniterordens.",
        "Der Hauptturm (Donjon) ist 21 Meter hoch und hat 3 Meter dicke Mauern.",
        "Ein Wappen über dem Eingang zeigt das Wappen des Königreichs Jerusalem, der Lusignans und des Großmeisters Jean de Lastic.",
        "Zuckerrohr war im Mittelalter eine der wichtigsten Einnahmequellen Zyperns.",
        "Der Name 'Commandaria' leitet sich von der Verwaltungszentrale des Ordens, der Commanderie, ab.",
        "Die Burg wurde kurzzeitig von den Tempelrittern gehalten, bevor sie an die Johanniter zurückfiel."
      ],
      hu: [],
      ro: [
        "Fortăreața originală a fost construită în 1210 de armata francă.",
        "Castelul a fost centrul 'Grande Commanderie' al Ordinului Cavalerilor Ospitalieri.",
        "Donjonul principal are 21 de metri înălțime și ziduri groase de 3 metri.",
        "O stemă deasupra intrării afișează blazonul Regatului Ierusalimului, al Lusignanilor și al Marelui Maestru Jean de Lastic.",
        "Trestia de zahăr a fost una dintre principalele surse de venit ale Ciprului în Evul Mediu.",
        "Numele 'Commandaria' derivă de la centrul administrativ al ordinului, Commanderie.",
        "Castelul a fost deținut pentru scurt timp de Cavalerii Templieri înainte de a reveni Cavalerilor Ospitalieri."
      ],
      en: []
    }, image: "/poi-images/cy-kolossi.webp"},
  {
    id: "cy-hala-sultan",
    type: "historical",
    parent: "CY-001",
    coords: [33.6083, 34.8856],
    name: { de: "Hala Sultan Tekke", hu: "Hala Szultan Tekke", ro: "Hala Sultan Tekke", en: "Hala Sultan Tekke" },
    description: {
      de: "Bedeutende islamische Pilgerstätte am Salzsee von Larnaca.",
      hu: "Jelentős iszlám zarándokhely a lárnakai Sós-tó partján.",
      ro: "Un important loc de pelerinaj islamic pe malul Lacului Sărat din Larnaca.",
      en: "A prominent Islamic pilgrimage site located on the Larnaca Salt Lake."
    },
    descriptionAdvanced: {
      de: "Die Hala Sultan Tekke ist ein prominenter islamischer Wallfahrtsort am Westufer des Salzsees von Larnaca. Der Moscheenkomplex wurde über dem Grab von Umm Haram errichtet, der Tante des Propheten Mohammed. Der Überlieferung nach starb sie an dieser Stelle, nachdem sie bei der ersten arabischen Invasion Zyperns im Jahr 649 n. Chr. von ihrem Maultier gefallen war. Der heutige Komplex, bestehend aus einer Moschee, einem Mausoleum, einem Minarett und Wohnquartieren, wurde schrittweise von den Osmanen im 18. und frühen 19. Jahrhundert erbaut. Die Stätte ist ein Ort der Besinnung und Schönheit, besonders wenn im Winter die Flamingos den See bevölkern.",
      hu: "",
      ro: "Hala Sultan Tekke este un important loc de pelerinaj islamic pe malul vestic al Lacului Sărat din Larnaca. Complexul moscheii a fost construit deasupra mormântului lui Umm Haram, mătușa profetului Mahomed. Conform tradiției, ea a murit în acest loc după ce a căzut de pe catâr în timpul primei invazii arabe a Ciprului în 649 d.Hr. Complexul actual, constând dintr-o moschee, un mausoleu, un minaret și locuințe, a fost construit treptat de otomani în secolul al XVIII-lea și la începutul secolului al XIX-lea. Situl este un loc de reculegere și frumusețe, mai ales iarna, când flamingo populează lacul.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Hala Sultan Tekke gilt als die drittheiligste Stätte im Islam nach Mekka und Medina für einige sunnitische Richtungen.",
        "Der Grabstein von Umm Haram wird von drei massiven Steinen getragen, von denen einer ein prähistorischer Monolith ist.",
        "Der Komplex war einst Teil eines Derwisch-Konvents.",
        "Archäologische Ausgrabungen in der Umgebung haben eine Siedlung aus der späten Bronzezeit aufgedeckt.",
        "Die Moschee ist für Besucher aller Glaubensrichtungen außerhalb der Gebetszeiten geöffnet.",
        "Der Salzsee trocknet im Sommer vollständig aus und hinterlässt eine dicke Salzkruste.",
        "Die Stätte liegt nur wenige Kilometer vom internationalen Flughafen Larnaca entfernt."
      ],
      hu: [],
      ro: [
        "Hala Sultan Tekke este considerat al treilea cel mai sfânt loc din Islam, după Mecca și Medina, pentru unele curente sunnite.",
        "Piatra de mormânt a lui Umm Haram este susținută de trei pietre masive, dintre care una este un monolit preistoric.",
        "Complexul a făcut parte dintr-o mănăstire de derviși.",
        "Săpăturile arheologice din zonă au scos la iveală o așezare din Epoca Târzie a Bronzului.",
        "Moscheea este deschisă vizitatorilor de toate credințele în afara orelor de rugăciune.",
        "Lacul sărat se usucă complet vara, lăsând în urmă o crustă groasă de sare.",
        "Situl este situat la doar câțiva kilometri de Aeroportul Internațional Larnaca."
      ],
      en: []
    }, image: "/poi-images/cy-hala-sultan.webp"},
  {
    id: "cy-kykkos",
    type: "historical",
    parent: "CY-003",
    coords: [32.7400, 34.9800],
    name: { de: "Kykkos-Kloster", hu: "Kykkos-kolostor", ro: "Mănăstirea Kykkos", en: "Kykkos Monastery" },
    description: {
      de: "Das reichste und bekannteste Kloster Zyperns im Troodos-Gebirge.",
      hu: "Ciprus leggazdagabb és legismertebb kolostora a Troodos-hegységben.",
      ro: "Cea mai bogată și cunoscută mănăstire din Cipru, situată în munții Troodos.",
      en: "The wealthiest and best-known monastery in Cyprus, located in the Troodos Mountains."
    },
    descriptionAdvanced: {
      de: "Das Heilige Königliche und Stavropegische Kloster von Kykkos ist das berühmteste und reichste Kloster Zyperns. Es liegt hoch im Troodos-Gebirge und wurde Ende des 11. Jahrhunderts vom byzantinischen Kaiser Alexios I. Komnenos gegründet. Das Kloster beherbergt eine der drei Ikonen, die dem Apostel Lukas zugeschrieben werden: eine wundersame Ikone der Jungfrau Maria. Diese Ikone, die stets mit einem Tuch bedeckt ist und niemals enthüllt wird, ist mit Silber und Gold verziert. Der Klosterkomplex selbst wurde mehrfach durch Brände zerstört und wiederaufgebaut, die heutigen Gebäude stammen größtenteils aus dem 19. Jahrhundert. Es ist ein Zentrum des orthodoxen Glaubens und beherbergt ein beeindruckendes Museum für byzantinische Kunst.",
      hu: "",
      ro: "Sfânta Mănăstire Regală și Stavropighială din Kykkos este cea mai faimoasă și bogată mănăstire din Cipru. Situată la înălțime în Munții Troodos, a fost fondată la sfârșitul secolului al XI-lea de împăratul bizantin Alexios I Comnenul. Mănăstirea adăpostește una dintre cele trei icoane atribuite Apostolului Luca: o icoană miraculoasă a Fecioarei Maria. Această icoană, mereu acoperită cu o pânză și niciodată dezvăluită, este decorată cu argint și aur. Complexul mănăstiresc a fost distrus de mai multe ori de incendii și reconstruit, clădirile actuale datând în mare parte din secolul al XIX-lea. Este un centru al credinței ortodoxe și găzduiește un impresionant muzeu de artă bizantină.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der erste Präsident Zyperns, Erzbischof Makarios III., diente als Novize im Kykkos-Kloster.",
        "Sein Grab befindet sich auf dem Berg Throni, in der Nähe des Klosters.",
        "Das Museum des Klosters besitzt eine unschätzbare Sammlung von Ikonen, Manuskripten und Antiquitäten.",
        "Das Kloster betreibt Weinberge und produziert seinen eigenen Wein.",
        "Die Wände der Klostergänge sind mit lebhaften, modernen Mosaiken bedeckt, die die Geschichte des Christentums und des Klosters darstellen.",
        "Der Name 'Kykkos' leitet sich möglicherweise von einer Pflanze ab, die in der Gegend wächst.",
        "Tausende von Pilgern besuchen das Kloster jedes Jahr, besonders an Marienfeiertagen."
      ],
      hu: [],
      ro: [
        "Primul președinte al Ciprului, Arhiepiscopul Makarios al III-lea, a fost novice la Mănăstirea Kykkos.",
        "Mormântul său se află pe Muntele Throni, în apropierea mănăstirii.",
        "Muzeul mănăstirii deține o colecție de neprețuit de icoane, manuscrise și antichități.",
        "Mănăstirea are propriile podgorii și produce propriul vin.",
        "Pereții coridoarelor mănăstirii sunt acoperiți cu mozaicuri moderne și vibrante, care ilustrează istoria creștinismului și a mănăstirii.",
        "Numele 'Kykkos' ar putea deriva de la o plantă care crește în zonă.",
        "Mii de pelerini vizitează mănăstirea în fiecare an, în special de sărbătorile Fecioarei Maria."
      ],
      en: []
    }, image: "/poi-images/cy-kykkos.webp"},
  {
    id: "cy-salamis",
    type: "historical",
    parent: "CY-002",
    coords: [33.9011, 35.1836],
    name: { de: "Salamis", hu: "Szalamisz", ro: "Salamis", en: "Salamis" },
    description: {
      de: "Umfangreiche antike Ruinenstadt an der Ostküste Zyperns.",
      hu: "Kiterjedt ókori romváros Ciprus keleti partján.",
      ro: "Un oraș antic extins pe coasta de est a Ciprului.",
      en: "An extensive ancient ruined city on the east coast of Cyprus."
    },
    descriptionAdvanced: {
      de: "Salamis, an der Ostküste Zyperns gelegen, war eine der wichtigsten und prächtigsten antiken Stadtkönigreiche der Insel. Der Legende nach wurde sie von Teukros, einem Helden des Trojanischen Krieges, gegründet. Die Blütezeit der Stadt erstreckte sich über die klassische und römische Zeit. Die weitläufigen Ruinen umfassen ein beeindruckendes Gymnasium mit einem großen Säulenhof, Thermen, die mit Mosaiken und Fresken geschmückt sind, und ein großes Theater, das einst 15.000 Zuschauer fasste. Die Stadt wurde durch Erdbeben im 4. Jahrhundert n. Chr. schwer beschädigt und später in kleinerem Maßstab als Constantia wiederaufgebaut, bevor sie im 7. Jahrhundert endgültig verlassen wurde.",
      hu: "",
      ro: "Salamis, situat pe coasta de est a Ciprului, a fost unul dintre cele mai importante și magnifice regate-oraș antice de pe insulă. Legenda spune că a fost fondat de Teucer, un erou al Războiului Troian. Perioada de înflorire a orașului s-a întins de-a lungul perioadelor clasică și romană. Ruinele extinse includ un gimnaziu impresionant cu o curte mare cu coloane, băi termale decorate cu mozaicuri și fresce, și un teatru mare care putea găzdui odată 15.000 de spectatori. Orașul a fost grav avariat de cutremure în secolul al IV-lea d.Hr. și reconstruit ulterior la o scară mai mică sub numele de Constantia, înainte de a fi abandonat definitiv în secolul al VII-lea.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Salamis war über 1000 Jahre lang die Hauptstadt Zyperns.",
        "Die 'Königsgräber' von Salamis aus dem 8. Jahrhundert v. Chr. enthielten reiche Grabbeigaben, einschließlich Pferdeopfern.",
        "Die Apostel Paulus und Barnabas predigten in den Synagogen von Salamis auf ihrer ersten Missionsreise.",
        "Der aus Salamis stammende Heilige Barnabas gilt als Gründer der zyprisch-orthodoxen Kirche.",
        "Die ausgegrabene Fläche macht nur einen kleinen Teil der antiken Stadt aus.",
        "Die Ruinen liegen malerisch an einem langen Sandstrand.",
        "Das römische Gymnasium wurde ursprünglich in der hellenistischen Zeit erbaut und später von den Römern umgestaltet."
      ],
      hu: [],
      ro: [
        "Salamis a fost capitala Ciprului pentru mai bine de 1000 de ani.",
        "'Mormintele Regale' din Salamis, datând din secolul al VIII-lea î.Hr., conțineau ofrande funerare bogate, inclusiv sacrificii de cai.",
        "Apostolii Pavel și Barnaba au predicat în sinagogile din Salamis în timpul primei lor călătorii misionare.",
        "Sfântul Barnaba, originar din Salamis, este considerat fondatorul Bisericii Ortodoxe Cipriote.",
        "Suprafața excavată reprezintă doar o mică parte a orașului antic.",
        "Ruinele sunt pitoresc așezate de-a lungul unei plaje lungi cu nisip.",
        "Gimnaziul roman a fost construit inițial în perioada elenistică și ulterior remodelat de romani."
      ],
      en: []
    }, image: "/poi-images/cy-salamis.webp"},
  {
    id: "cy-choirokoitia",
    type: "historical",
    parent: "CY-001",
    coords: [33.3444, 34.7961],
    name: { de: "Choirokoitia", hu: "Khirokitia", ro: "Choirokoitia", en: "Choirokoitia" },
    description: {
      de: "Eine der wichtigsten prähistorischen Stätten im östlichen Mittelmeerraum (UNESCO).",
      hu: "A Földközi-tenger keleti medencéjének egyik legfontosabb történelem előtti lelőhelye (UNESCO).",
      ro: "Unul dintre cele mai importante situri preistorice din estul Mării Mediterane (UNESCO).",
      en: "One of the most important prehistoric sites in the eastern Mediterranean (UNESCO)."
    },
    descriptionAdvanced: {
      de: "Choirokoitia ist eine der bedeutendsten prähistorischen Stätten im östlichen Mittelmeerraum und gehört zum UNESCO-Weltkulturerbe. Die neolithische Siedlung, die zwischen dem 7. und 4. Jahrtausend v. Chr. bewohnt war, liegt auf einem Hügel im Tal des Maroni-Flusses. Die Stätte bietet bemerkenswerte Einblicke in die früheste menschliche Gesellschaft auf Zypern. Die Behausungen waren kreisförmig, aus Lehmziegeln und Steinen gebaut, mit flachen Dächern. Die Toten wurden in Gruben unter den Fußböden der Häuser in fötaler Position bestattet. Die Gesellschaft war hoch organisiert, betrieb Landwirtschaft, züchtete Tiere und stellte Werkzeuge aus Stein und Knochen her.",
      hu: "",
      ro: "Choirokoitia este unul dintre cele mai importante situri preistorice din estul Mediteranei și face parte din Patrimoniul Mondial UNESCO. Așezarea neolitică, locuită între mileniile 7 și 4 î.Hr., este situată pe un deal în valea râului Maroni. Situl oferă perspective remarcabile asupra celei mai timpurii societăți umane din Cipru. Locuințele erau circulare, construite din chirpici și piatră, cu acoperișuri plate. Morții erau îngropați în poziție fetală în gropi sub podelele caselor. Societatea era foarte organizată, practicând agricultura, creșterea animalelor și producerea de unelte din piatră și os.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Choirokoitia wurde in den 1930er Jahren von Porphyrios Dikaios entdeckt und ausgegraben.",
        "Die Einwohner praktizierten eine frühe Form der Schädeldeformation.",
        "Es wurden keine Töpferwaren aus der frühesten Besiedlungsphase gefunden, was sie als akeramisch klassifiziert.",
        "Die Siedlung war von einer massiven Steinmauer umgeben, die als Verteidigungsanlage diente.",
        "Fünf rekonstruierte Rundhäuser am Fuße des Hügels zeigen, wie die prähistorischen Behausungen ausgesehen haben könnten.",
        "Die Einwohner bauten Weizen und Gerste an und jagten Damhirsche.",
        "Die Siedlung wurde aus unbekannten Gründen um 6000 v. Chr. plötzlich verlassen."
      ],
      hu: [],
      ro: [
        "Choirokoitia a fost descoperită și excavată în anii 1930 de Porphyrios Dikaios.",
        "Locuitorii practicau o formă timpurie de deformare craniană.",
        "Nu s-au găsit obiecte de ceramică din cea mai timpurie fază de ocupare, clasificând-o drept pre-ceramică.",
        "Așezarea era înconjurată de un zid masiv de piatră, care servea drept fortificație.",
        "Cinci case circulare reconstruite la poalele dealului arată cum ar fi putut arăta locuințele preistorice.",
        "Locuitorii cultivau grâu și orz și vânau cerbi lopătari.",
        "Așezarea a fost brusc abandonată din motive necunoscute în jurul anului 6000 î.Hr."
      ],
      en: []
    }, image: "/poi-images/cy-choirokoitia.webp"},
  {
    id: "cy-st-lazarus",
    type: "historical",
    parent: "CY-001",
    coords: [33.6367, 34.9114],
    name: { de: "Lazarus-Kirche", hu: "Szent Lázár-templom", ro: "Biserica Sfântul Lazăr", en: "Church of Saint Lazarus" },
    description: {
      de: "Historische byzantinische Kirche im Zentrum von Larnaca.",
      hu: "Történelmi bizánci templom Lárnaka központjában.",
      ro: "O biserică istorică bizantină în centrul orașului Larnaca.",
      en: "A historical Byzantine church in the center of Larnaca."
    },
    descriptionAdvanced: {
      de: "Die prächtige Kirche des Heiligen Lazarus ist eines der bedeutendsten byzantinischen Bauwerke Zyperns und befindet sich im Herzen von Larnaca. Die Kirche wurde im späten 9. Jahrhundert von Kaiser Leo VI. dem Weisen über dem angeblichen zweiten Grab des Lazarus von Bethanien erbaut. Lazarus soll nach seiner Auferstehung durch Christus nach Kition (heute Larnaca) gekommen und dort der erste Bischof geworden sein. Der beeindruckende Glockenturm der Kirche ist eine spätere Ergänzung. Im Inneren befindet sich eine kunstvoll geschnitzte barocke Ikonostase aus dem 18. Jahrhundert. Unter dem Altar führt eine Treppe zur Krypta, in der sich der leere Marmorsarkophag des Heiligen befindet.",
      hu: "",
      ro: "Magnifica Biserică a Sfântului Lazăr este unul dintre cele mai importante monumente bizantine din Cipru și se află în inima orașului Larnaca. Biserica a fost construită la sfârșitul secolului al IX-lea de împăratul Leon al VI-lea cel Înțelept, deasupra presupusului al doilea mormânt al lui Lazăr din Betania. Se spune că Lazăr, după învierea sa de către Hristos, a venit în Kition (actuala Larnaca) și a devenit primul său episcop. Clopotnița impresionantă a bisericii este o adăugare ulterioară. În interior se află un iconostas baroc sculptat cu măiestrie din secolul al XVIII-lea. Sub altar, o scară duce la cripta unde se află sarcofagul gol de marmură al sfântului.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die ursprüngliche Kirche hatte drei Kuppeln, die während der osmanischen Zeit zerstört wurden.",
        "1972 wurden unter dem Altar menschliche Überreste in einem Marmorsarkophag gefunden, die als Teil der Reliquien des Heiligen Lazarus identifiziert wurden.",
        "Ein Teil der Reliquien des Lazarus wurde im 9. Jahrhundert nach Konstantinopel und später nach Marseille überführt.",
        "Die Ikonostase ist mit Gold überzogen und enthält 120 Ikonen.",
        "Die Kirche war ursprünglich Teil eines Klosters.",
        "Am Samstag vor Ostern wird die Ikone des Heiligen Lazarus in einer Prozession durch die Straßen von Larnaca getragen.",
        "Die Kirche ist ein wichtiger Wallfahrtsort für orthodoxe Christen."
      ],
      hu: [],
      ro: [
        "Biserica originală avea trei cupole, care au fost distruse în timpul perioadei otomane.",
        "În 1972, sub altar au fost găsite rămășițe umane într-un sarcofag de marmură, identificate ca parte a moaștelor Sfântului Lazăr.",
        "O parte din moaștele lui Lazăr a fost transferată la Constantinopol în secolul al IX-lea și mai târziu la Marsilia.",
        "Iconostasul este acoperit cu aur și conține 120 de icoane.",
        "Biserica făcea inițial parte dintr-o mănăstire.",
        "În Sâmbăta lui Lazăr, înainte de Paști, icoana sfântului este purtată în procesiune pe străzile din Larnaca.",
        "Biserica este un important loc de pelerinaj pentru creștinii ortodocși."
      ],
      en: []
    }, image: "/poi-images/cy-st-lazarus.webp"},
  {
    id: "cy-mount-olympus",
    type: "landmark",
    parent: "CY-004",
    coords: [32.8633, 34.9367],
    name: { de: "Olympos", hu: "Olymposz (Troodos)", ro: "Muntele Olimp", en: "Mount Olympus" },
    description: {
      de: "Der höchste Punkt Zyperns im Troodos-Gebirge (1.952 m).",
      hu: "Ciprus legmagasabb pontja a Troodos-hegységben (1952 m).",
      ro: "Cel mai înalt punct din Cipru, situat în munții Troodos (1.952 m).",
      en: "The highest point in Cyprus, located in the Troodos Mountains (1,952 m)."
    },
    descriptionAdvanced: {
      de: "Der Olympos ist mit 1.952 Metern der höchste Gipfel des Troodos-Gebirges und der gesamten Insel Zypern. Anders als sein griechischer Namensvetter ist er keine felsige Spitze, sondern ein relativ sanfter Gipfel, der im Winter von Schnee bedeckt ist und sogar ein kleines Skigebiet mit vier Liften beherbergt. Der Gipfelbereich ist militärisches Sperrgebiet mit einer britischen Langstrecken-Radarstation, aber die umliegenden Hänge sind Teil des Troodos-Nationalparks. Das Gebiet ist ein Paradies für Wanderer und Naturliebhaber, mit dichten Schwarzkiefernwäldern, seltenen Pflanzen wie der Zypern-Zeder und einer reichen Tierwelt, einschließlich des scheuen Mufflons, dem nationalen Symbol Zyperns.",
      hu: "",
      ro: "Muntele Olimp, cu 1.952 de metri, este cel mai înalt vârf din Munții Troodos și de pe întreaga insulă Cipru. Spre deosebire de omonimul său grec, nu este un vârf stâncos, ci unul relativ domol, acoperit de zăpadă iarna, care găzduiește chiar și o mică stațiune de schi cu patru teleschiuri. Zona vârfului este o zonă militară restricționată, cu o stație radar britanică cu rază lungă de acțiune, dar versanții înconjurători fac parte din Parcul Național Troodos. Zona este un paradis pentru drumeți și iubitorii de natură, cu păduri dense de pin negru, plante rare precum cedrul de Cipru și o faună bogată, inclusiv muflonul timid, simbolul național al Ciprului.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Skigebiet am Olympos ist von Januar bis März geöffnet, abhängig von der Schneelage.",
        "Der antike Name des Gipfels war Chionistra, was 'die Schneebedeckte' bedeutet.",
        "Auf dem Gipfel befindet sich eine wichtige Radarstation der Royal Air Force.",
        "Im Troodos-Gebirge befinden sich zehn byzantinische Kirchen, die zum UNESCO-Weltkulturerbe gehören.",
        "Die Region ist reich an Kupferminen, die seit der Antike ausgebeutet werden.",
        "Mehrere Fernwanderwege durchziehen den Nationalpark Troodos.",
        "Das Troodos-Gebirge entstand vor etwa 90 Millionen Jahren durch komplexe ozeanische Spreizungsprozesse."
      ],
      hu: [],
      ro: [
        "Stațiunea de schi de pe Olimp este deschisă din ianuarie până în martie, în funcție de stratul de zăpadă.",
        "Numele antic al vârfului era Chionistra, care înseamnă 'cel acoperit de zăpadă'.",
        "Pe vârf se află o importantă stație radar a Forțelor Aeriene Regale Britanice.",
        "În Munții Troodos se află zece biserici bizantine, parte a Patrimoniului Mondial UNESCO.",
        "Regiunea este bogată în mine de cupru, exploatate încă din antichitate.",
        "Mai multe trasee de drumeție pe distanțe lungi traversează Parcul Național Troodos.",
        "Munții Troodos s-au format acum aproximativ 90 de milioane de ani prin procese complexe de expansiune a fundului oceanic."
      ],
      en: []
    }, image: "/poi-images/cy-mount-olympus.webp"},
  {
    id: "cy-cape-greco",
    type: "landmark",
    parent: "CY-002",
    coords: [34.0767, 34.9619],
    name: { de: "Kap Greco", hu: "Greco-fok", ro: "Capul Greco", en: "Cape Greco" },
    description: {
      de: "Ein atemberaubender Nationalpark mit Meereshöhlen und klarem blauen Wasser.",
      hu: "Lélegzetelállító nemzeti park tengeri barlangokkal és kristálytiszta vízzel.",
      ro: "Un parc național uimitor, cu peșteri marine și ape de un albastru limpede.",
      en: "A stunning national park featuring sea caves and clear blue waters."
    },
    descriptionAdvanced: {
      de: "Kap Greco ist ein unberührtes Vorgebirge an der südöstlichen Spitze Zyperns, zwischen den Ferienorten Ayia Napa und Protaras. Es ist ein ausgewiesener Nationalpark und ein Gebiet von außergewöhnlicher natürlicher Schönheit. Die Küste ist geprägt von beeindruckenden Felsklippen und Meereshöhlen, die über Jahrtausende von den Wellen geformt wurden. Beliebte Aktivitäten sind Klippenspringen, Tauchen und Schnorcheln im kristallklaren türkisfarbenen Wasser. Ein Netz von Naturlehrpfaden durchzieht das Gebiet und führt zu Sehenswürdigkeiten wie der kleinen weißen Kapelle Agioi Anargyroi und einem natürlichen Felsbogen, der als 'Kamara tou Koraka' (Krähenbogen) bekannt ist.",
      hu: "",
      ro: "Capul Greco este un promontoriu virgin la extremitatea sud-estică a Ciprului, între stațiunile Ayia Napa și Protaras. Este un parc național desemnat și o zonă de o frumusețe naturală excepțională. Coasta este caracterizată de stânci impresionante și peșteri marine, modelate de valuri de-a lungul a mii de ani. Activitățile populare includ săriturile de pe stânci, scufundările și snorkelingul în apele turcoaz cristaline. O rețea de poteci tematice străbate zona, ducând la atracții precum mica capelă albă Agioi Anargyroi și un pod natural de stâncă cunoscut sub numele de 'Kamara tou Koraka' (Arcul Corbului).",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Kap Greco ist der östlichste Punkt der Republik Zypern.",
        "Der Legende nach war das Gebiet die Heimat des 'Seeungeheuers von Ayia Napa'.",
        "Mehr als 400 Pflanzenarten wurden im Nationalpark gezählt, darunter viele seltene Orchideen.",
        "Die Meereshöhlen sind ein beliebter Ort für Hochzeitsfotos.",
        "Die Gegend ist ein wichtiger Rastplatz für Zugvögel.",
        "Der Leuchtturm von Kap Greco wurde von den Briten erbaut.",
        "Es gibt einen versunkenen Wald unter Wasser, der bei Tauchern beliebt ist."
      ],
      hu: [],
      ro: [
        "Capul Greco este cel mai estic punct al Republicii Cipru.",
        "Legenda spune că zona era casa 'monstrului marin din Ayia Napa'.",
        "Peste 400 de specii de plante au fost numărate în parcul național, inclusiv multe orhidee rare.",
        "Peșterile marine sunt un loc popular pentru fotografiile de nuntă.",
        "Zona este un important loc de popas pentru păsările migratoare.",
        "Farul de la Capul Greco a fost construit de britanici.",
        "Există o pădure scufundată subacvatică, populară printre scafandri."
      ],
      en: []
    }, image: "/poi-images/cy-cape-greco.webp"},
  {
    id: "cy-akamas",
    type: "landmark",
    parent: "CY-005",
    coords: [32.3167, 35.0333],
    name: { de: "Akamas-Halbinsel", hu: "Akamasz-félsziget", ro: "Peninsula Akamas", en: "Akamas Peninsula" },
    description: {
      de: "Ein Naturschutzgebiet im Westen mit unberührter Landschaft und großer Artenvielfalt.",
      hu: "Természetvédelmi terület a nyugati parton, érintetlen tájjal és gazdag élővilággal.",
      ro: "O rezervație naturală în vest, cu un peisaj neatins și o mare diversitate de specii.",
      en: "A nature reserve in the west with untouched landscapes and rich biodiversity."
    },
    descriptionAdvanced: {
      de: "Die Akamas-Halbinsel ist eine weitläufige, unberührte Wildnis an der nordwestlichen Spitze Zyperns. Das Gebiet ist von großer ökologischer Bedeutung und beherbergt eine außergewöhnliche Vielfalt an Flora und Fauna auf einer Fläche von 230 Quadratkilometern. Die Landschaft ist geprägt von schroffen Schluchten wie der Avakas-Schlucht, sandigen Buchten und bewaldeten Tälern. An den Stränden der Halbinsel, wie dem Lara Beach, legen die gefährdeten Grünen Meeresschildkröten und Unechten Karettschildkröten ihre Eier ab. Die 'Bäder der Aphrodite', eine natürliche Grotte, ist der Ort, an dem die Göttin der Liebe der Legende nach badete. Die Halbinsel ist nur über unbefestigte Straßen erreichbar, was ihre unberührte Natur bewahrt hat.",
      hu: "",
      ro: "Peninsula Akamas este o vastă zonă sălbatică și virgină la extremitatea nord-vestică a Ciprului. Zona are o mare importanță ecologică și găzduiește o diversitate excepțională de floră și faună pe o suprafață de 230 de kilometri pătrați. Peisajul este caracterizat de defileuri abrupte precum Cheile Avakas, golfuri nisipoase și văi împădurite. Pe plajele peninsulei, cum ar fi Plaja Lara, își depun ouăle țestoasele verzi și țestoasele Caretta caretta, ambele specii pe cale de dispariție. 'Băile Afroditei', o grotă naturală, este locul unde legenda spune că zeița iubirii făcea baie. Peninsula este accesibilă doar pe drumuri neasfaltate, ceea ce i-a păstrat natura neatinsă.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Akamas-Halbinsel ist nach dem Sohn des Theseus, einem Helden des Trojanischen Krieges, benannt.",
        "Über 168 Vogelarten, 20 Reptilienarten und 12 Säugetierarten leben hier.",
        "Am Lara Beach gibt es eine Schutzstation für Meeresschildkröten.",
        "Die 'Blaue Lagune' ist eine geschützte Bucht mit unglaublich klarem Wasser, die nur per Boot oder Geländewagen erreichbar ist.",
        "Die Halbinsel hat eine der höchsten Konzentrationen an endemischen Pflanzen auf Zypern.",
        "Es gibt Bestrebungen, die gesamte Halbinsel zu einem Nationalpark zu erklären.",
        "Wandern, Mountainbiken und Allradtouren sind beliebte Aktivitäten in Akamas."
      ],
      hu: [],
      ro: [
        "Peninsula Akamas este numită după fiul lui Tezeu, un erou al Războiului Troian.",
        "Peste 168 de specii de păsări, 20 de specii de reptile și 12 specii de mamifere trăiesc aici.",
        "La Plaja Lara există o stație de protecție a țestoaselor marine.",
        "'Laguna Albastră' este un golf protejat cu apă incredibil de limpede, accesibil doar cu barca sau vehicul de teren.",
        "Peninsula are una dintre cele mai mari concentrații de plante endemice din Cipru.",
        "Există eforturi pentru a declara întreaga peninsulă parc național.",
        "Drumețiile, ciclismul montan și excursiile cu vehicule 4x4 sunt activități populare în Akamas."
      ],
      en: []
    }, image: "/poi-images/cy-akamas.webp"},
  {
    id: "cy-salt-lake",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6000, 34.8900],
    name: { de: "Salzsee von Larnaca", hu: "Lárnakai Sós-tó", ro: "Lacul Sărat din Larnaca", en: "Larnaca Salt Lake" },
    description: {
      de: "Ein komplexes Netzwerk von Salzseen, bekannt als Überwinterungsplatz für Flamingos.",
      hu: "Sós tavak hálózata, amely a flamingók téli menedékhelyeként ismert.",
      ro: "O rețea complexă de lacuri sărate, cunoscută ca loc de iernat pentru flamingi.",
      en: "A complex network of salt lakes, known as a wintering ground for flamingos."
    },
    descriptionAdvanced: {
      de: "Der Salzsee von Larnaca ist ein komplexes Netzwerk aus vier Salzseen unterschiedlicher Größe, das südwestlich der Stadt Larnaca liegt. Dieses wichtige Feuchtgebiet ist eines der bedeutendsten in Europa und steht unter dem Schutz der Ramsar-Konvention. Im Winter füllen sich die Seen mit Regenwasser und werden zum Zufluchtsort für Tausende von Zugvögeln. Am bekanntesten sind die großen Schwärme von Rosaflamingos, die hier von November bis März überwintern und sich von den kleinen Salinenkrebsen ernähren. Im Sommer trocknet der See vollständig aus und hinterlässt eine dicke, weiße Salzkruste. Am Ufer des Sees befindet sich die ehrwürdige Hala Sultan Tekke Moschee.",
      hu: "",
      ro: "Lacul Sărat din Larnaca este o rețea complexă de patru lacuri sărate de diferite dimensiuni, situată la sud-vest de orașul Larnaca. Această zonă umedă importantă este una dintre cele mai semnificative din Europa și este protejată de Convenția Ramsar. Iarna, lacurile se umplu cu apă de ploaie și devin un refugiu pentru mii de păsări migratoare. Cele mai cunoscute sunt stolurile mari de flamingo roz, care iernează aici din noiembrie până în martie, hrănindu-se cu mici creveți de saramură. Vara, lacul se usucă complet, lăsând în urmă o crustă groasă și albă de sare. Pe malul lacului se află venerabila moschee Hala Sultan Tekke.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Seen umfassen eine Gesamtfläche von über 2,2 Quadratkilometern.",
        "Bis in die 1980er Jahre wurde hier Salz kommerziell abgebaut.",
        "Bis zu 10.000 Flamingos können hier gleichzeitig beobachtet werden.",
        "Über 85 Arten von Wasservögeln wurden am Salzsee gezählt.",
        "Ein 4 km langer Naturlehrpfad führt entlang des Sees.",
        "Der Salzgehalt des Wassers ist extrem hoch, was das Überleben der Salinenkrebse (Artemia salina) ermöglicht.",
        "Der Legende nach entstanden die Seen, als der Heilige Lazarus einen alten Mann verfluchte, der ihm Essen und Trinken verweigerte."
      ],
      hu: [],
      ro: [
        "Lacurile acoperă o suprafață totală de peste 2,2 kilometri pătrați.",
        "Până în anii 1980, aici se extrăgea sare în scop comercial.",
        "Până la 10.000 de flamingo pot fi observați aici în același timp.",
        "Peste 85 de specii de păsări acvatice au fost numărate la Lacul Sărat.",
        "O potecă tematică de 4 km lungime se întinde de-a lungul lacului.",
        "Salinitatea apei este extrem de ridicată, permițând supraviețuirea creveților de saramură (Artemia salina).",
        "Legenda spune că lacurile s-au format după ce Sfântul Lazăr a blestemat o bătrână care a refuzat să-i dea de mâncare și de băut."
      ],
      en: []
    }, image: "/poi-images/cy-salt-lake.webp"},
  {
    id: "cy-aphrodite-rock",
    type: "landmark",
    parent: "CY-005",
    coords: [32.6269, 34.6642],
    name: { de: "Felsen der Aphrodite", hu: "Aphrodité sziklája", ro: "Stânca Afroditei", en: "Aphrodite's Rock (Petra tou Romiou)" },
    description: {
      de: "Eine markante Felsformation im Meer, der legendäre Geburtsort der Göttin Aphrodite.",
      hu: "Különleges sziklaalakzat a tengerben, Aphrodité istennő legendás szülőhelye.",
      ro: "O formațiune stâncoasă impresionantă în mare, locul legendar de naștere al zeiței Afrodita.",
      en: "A striking sea stack, the legendary birthplace of the goddess Aphrodite."
    },
    descriptionAdvanced: {
      de: "Petra tou Romiou, bekannt als Felsen der Aphrodite, ist eine der berühmtesten und romantischsten Sehenswürdigkeiten Zyperns. Der Legende nach ist dies der Ort, an dem die Göttin der Liebe und Schönheit aus dem Meeresschaum geboren wurde. Der Name 'Petra tou Romiou' (Fels des Griechen) stammt aus einer späteren byzantinischen Legende, nach der der Held Digenes Akritas riesige Felsen auf sarazenische Schiffe warf. Es wird gesagt, dass das Umschwimmen des Felsens bei Vollmond ewige Jugend und Schönheit verleiht. Die Stätte ist besonders bei Sonnenuntergang magisch, wenn die Felsen in warmes Licht getaucht werden. Obwohl der Strand kieselig ist, ist er ein beliebter Ort für Fotos und um die mythische Atmosphäre zu genießen.",
      hu: "",
      ro: "Petra tou Romiou, cunoscută ca Stânca Afroditei, este una dintre cele mai faimoase și romantice atracții din Cipru. Legenda spune că acesta este locul unde zeița iubirii și frumuseții s-a născut din spuma mării. Numele 'Petra tou Romiou' (Stânca Grecului) provine dintr-o legendă bizantină ulterioară, potrivit căreia eroul Digenes Akritas a aruncat stânci uriașe spre navele sarazine. Se spune că înotul în jurul stâncii la lună plină aduce tinerețe și frumusețe veșnică. Locul este deosebit de magic la apus, când stâncile sunt scăldate în lumină caldă. Deși plaja este cu pietriș, este un loc popular pentru fotografii și pentru a te bucura de atmosfera mitică.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Aphrodite war in der Antike die Schutzgöttin Zyperns.",
        "Geologisch gesehen sind die Felsen Überreste eines alten Gebirges.",
        "Das Meer in dieser Gegend kann sehr rau sein, daher ist beim Schwimmen Vorsicht geboten.",
        "Paare hinterlassen oft Vorhängeschlösser oder Bänder an den nahegelegenen Büschen als Symbol ihrer Liebe.",
        "Die Stätte liegt an der alten Küstenstraße zwischen Paphos und Limassol.",
        "In der Nähe befand sich einst der Haupttempel der Aphrodite in Palaepaphos (heute Kouklia).",
        "Der Felsen ist ein beliebtes Motiv für Künstler und Fotografen."
      ],
      hu: [],
      ro: [
        "Afrodita a fost zeița protectoare a Ciprului în antichitate.",
        "Din punct de vedere geologic, stâncile sunt rămășițele unui lanț muntos vechi.",
        "Marea în această zonă poate fi foarte agitată, așa că se recomandă prudență la înot.",
        "Cuplurile lasă adesea lacăte sau panglici pe tufișurile din apropiere ca simbol al iubirii lor.",
        "Situl este situat pe vechea șosea de coastă dintre Paphos și Limassol.",
        "În apropiere se afla odinioară templul principal al Afroditei, la Palaepaphos (azi Kouklia).",
        "Stânca este un subiect popular pentru artiști și fotografi."
      ],
      en: []
    }, image: "/poi-images/cy-aphrodite-rock.webp"},
  {
    id: "cy-avakas-gorge",
    type: "landmark",
    parent: "CY-005",
    coords: [32.3333, 34.9250],
    name: { de: "Avakas-Schlucht", hu: "Avakas-szurdok", ro: "Cheile Avakas", en: "Avakas Gorge" },
    description: {
      de: "Eine tiefe, steile Schlucht auf der Akamas-Halbinsel, beliebt bei Wanderern.",
      hu: "Egy mély, meredek szurdok az Akamasz-félszigeten, kedvelt túrázóhely.",
      ro: "Un defileu adânc și abrupt pe Peninsula Akamas, popular printre drumeți.",
      en: "A deep, steep gorge on the Akamas Peninsula, popular with hikers."
    },
    descriptionAdvanced: {
      de: "Die Avakas-Schlucht ist ein Naturwunder, das tief in die Kalksteinfelsen der Akamas-Halbinsel eingeschnitten ist. Diese beeindruckende Schlucht wurde über Tausende von Jahren von einem kleinen Fluss geformt. Die Wanderung durch die Schlucht ist ein Abenteuer, das über rutschige Felsen und durch enges Gelände führt. Die Wände der Schlucht ragen bis zu 30 Meter in die Höhe und kommen an einigen Stellen so nah zusammen, dass sie fast den Himmel verdecken. In der Schlucht herrscht ein einzigartiges Mikroklima, das eine reiche Flora und Fauna unterstützt, darunter seltene Pflanzen wie die endemische Centauria akamantis. Ein markantes Merkmal ist ein großer Felsbrocken, der sich zwischen den Wänden der Schlucht verkeilt hat.",
      hu: "",
      ro: "Cheile Avakas sunt o minune a naturii, tăiate adânc în stâncile de calcar ale Peninsulei Akamas. Acest defileu impresionant a fost format de un mic râu de-a lungul a mii de ani. Drumeția prin chei este o aventură, care implică traversarea unor stânci alunecoase și a unui teren îngust. Pereții defileului se înalță până la 30 de metri și în unele locuri se apropie atât de mult încât aproape acoperă cerul. În chei există un microclimat unic, care susține o floră și o faună bogate, inclusiv plante rare precum endemitul Centauria akamantis. O caracteristică distinctivă este un bolovan mare, înțepenit între pereții defileului.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Schlucht ist etwa 3 Kilometer lang.",
        "Die Wanderung kann je nach Wasserstand des Flusses anspruchsvoll sein.",
        "Die beste Zeit für einen Besuch ist im Frühling oder Herbst, um die Sommerhitze und die winterlichen Sturzfluten zu meiden.",
        "In der Schlucht leben Füchse, Hasen und verschiedene Reptilienarten.",
        "Die Felsformationen bieten Einblicke in die geologische Geschichte der Region.",
        "Die Schlucht ist ein Paradies für Fotografen, besonders am späten Vormittag, wenn das Licht in die engen Passagen fällt.",
        "Festes Schuhwerk ist für die Wanderung unerlässlich."
      ],
      hu: [],
      ro: [
        "Defileul are o lungime de aproximativ 3 kilometri.",
        "Drumeția poate fi dificilă în funcție de nivelul apei râului.",
        "Cel mai bun moment pentru a vizita este primăvara sau toamna, pentru a evita căldura verii și viiturile de iarnă.",
        "În defileu trăiesc vulpi, iepuri și diverse specii de reptile.",
        "Formațiunile stâncoase oferă perspective asupra istoriei geologice a regiunii.",
        "Defileul este un paradis pentru fotografi, mai ales dimineața târziu, când lumina pătrunde în pasajele înguste.",
        "Încălțămintea rezistentă este esențială pentru drumeție."
      ],
      en: []
    }, image: "/poi-images/cy-avakas-gorge.webp"},
  {
    id: "cy-nissi-beach",
    type: "landmark",
    parent: "CY-002",
    coords: [33.9686, 34.9881],
    name: { de: "Nissi Strand", hu: "Nissi Beach", ro: "Plaja Nissi", en: "Nissi Beach" },
    description: {
      de: "Einer der berühmtesten weißen Sandstrände in Ayia Napa.",
      hu: "Ayia Napa egyik leghíresebb fehér homokos strandja.",
      ro: "Una dintre cele mai faimoase plaje cu nisip alb din Ayia Napa.",
      en: "One of the most famous white sand beaches in Ayia Napa."
    },
    descriptionAdvanced: {
      de: "Nissi Beach ist einer der berühmtesten und lebhaftesten Strände Zyperns und liegt im Ferienort Ayia Napa. Der Strand ist bekannt für seinen makellos sauberen, feinen weißen Sand und sein kristallklares, türkisfarbenes Wasser. Ein besonderes Merkmal ist das kleine, felsige Inselchen Nissi, das durch eine Sandbank mit dem Hauptstrand verbunden ist und bei Ebbe zu Fuß erreicht werden kann. Nissi Beach ist ein Hotspot für Wassersportarten wie Wasserski und Windsurfen. Im Sommer zieht der Strand ein junges Publikum an, mit Strandbars, die Musik spielen, und regelmäßigen Partys und DJ-Events. Trotz seiner Beliebtheit hat der Strand die 'Blaue Flagge' für seine Sauberkeit und Wasserqualität erhalten.",
      hu: "",
      ro: "Plaja Nissi este una dintre cele mai faimoase și animate plaje din Cipru, situată în stațiunea Ayia Napa. Plaja este cunoscută pentru nisipul său alb, fin și imaculat și pentru apele sale cristaline, de culoare turcoaz. O caracteristică specială este mica insuliță stâncoasă Nissi, care este legată de plaja principală printr-un banc de nisip și poate fi accesată pe jos la reflux. Nissi Beach este un punct fierbinte pentru sporturi nautice precum schiul nautic și windsurfingul. Vara, plaja atrage un public tânăr, cu baruri pe plajă care difuzează muzică și petreceri regulate și evenimente cu DJ. În ciuda popularității sale, plaja a primit 'Steagul Albastru' pentru curățenia și calitatea apei.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Name 'Nissi' bedeutet auf Griechisch 'Insel'.",
        "Der Strand ist etwa 500 Meter lang.",
        "Das Wasser ist sehr flach und daher auch für Familien mit Kindern geeignet.",
        "Es gibt eine Tauchschule direkt am Strand.",
        "Auf dem Inselchen Nissi gibt es eine kleine Bar.",
        "Der Strand ist Teil eines größeren Komplexes mit Hotels und Restaurants.",
        "In den ruhigeren Monaten ist Nissi Beach ein friedlicher und malerischer Ort."
      ],
      hu: [],
      ro: [
        "Numele 'Nissi' înseamnă 'insulă' în greacă.",
        "Plaja are o lungime de aproximativ 500 de metri.",
        "Apa este foarte puțin adâncă, fiind potrivită și pentru familiile cu copii.",
        "Există o școală de scufundări chiar pe plajă.",
        "Pe insulița Nissi există un mic bar.",
        "Plaja face parte dintr-un complex mai mare cu hoteluri și restaurante.",
        "În lunile mai liniștite, Plaja Nissi este un loc pașnic și pitoresc."
      ],
      en: []
    }, image: "/poi-images/cy-nissi-beach.webp"},
  {
    id: "cy-limassol-carnival",
    type: "landmark",
    parent: "CY-004",
    coords: [33.0450, 34.6760],
    name: { de: "Karneval in Limassol", hu: "Limassoli karnevál", ro: "Carnavalul din Limassol", en: "Limassol Carnival" },
    description: {
      de: "Ein jährliches zehntägiges Festival, das älteste und beliebteste in Zypern.",
      hu: "Évente megrendezett, tíz napos fesztivál, Ciprus legrégebbi és legnépszerűbb karneválja.",
      ro: "Un festival anual de zece zile, cel mai vechi și mai popular din Cipru.",
      en: "An annual ten-day festival, the oldest and most popular in Cyprus."
    },
    descriptionAdvanced: {
      de: "Der Karneval in Limassol ist das älteste und größte Festival seiner Art auf Zypern. Die Feierlichkeiten erstrecken sich über zehn Tage und verwandeln die Stadt in eine riesige Party. Die Tradition reicht über ein Jahrhundert zurück und hat ihre Wurzeln in antiken heidnischen Festen zu Ehren des Dionysos. Der Karneval beginnt am 'Tsiknopempti' (Rauchdonnerstag), an dem in der ganzen Stadt gegrillt wird. Höhepunkte sind die Kinderparade und die große Karnevalsparade am letzten Sonntag vor der Fastenzeit. Tausende von Einheimischen und Touristen säumen die Straßen, um die farbenfrohen Festwagen und die phantasievoll kostümierten Gruppen zu bewundern. Die Feierlichkeiten enden mit Musik, Tanz und Gesang in der ganzen Stadt.",
      hu: "",
      ro: "Carnavalul din Limassol este cel mai vechi și mai mare festival de acest gen din Cipru. Festivitățile se întind pe parcursul a zece zile și transformă orașul într-o petrecere uriașă. Tradiția datează de peste un secol și își are rădăcinile în festivalurile păgâne antice în onoarea lui Dionis. Carnavalul începe în 'Tsiknopempti' (Joia Fumului), când se fac grătare în tot orașul. Punctele culminante sunt parada copiilor și marea paradă a carnavalului din ultima duminică înainte de Postul Mare. Mii de localnici și turiști se aliniază pe străzi pentru a admira carele alegorice colorate și grupurile costumate cu imaginație. Festivitățile se încheie cu muzică, dans și cântece în tot orașul.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Karneval findet jedes Jahr im Februar oder März statt, 50 Tage vor dem orthodoxen Osterfest.",
        "Die Stadtverwaltung von Limassol organisiert die offiziellen Veranstaltungen.",
        "Der 'König Karneval' führt die große Parade an, jedes Jahr mit einem neuen Thema.",
        "Serenadensänger ziehen mit Mandolinen und Gitarren durch die Straßen.",
        "Viele Partys und Bälle finden in den Hotels und Clubs der Stadt statt.",
        "Der Karneval ist eine wichtige Einnahmequelle für den Tourismus in Limassol.",
        "Die Tradition des Karnevals wurde auch während der britischen Kolonialzeit aufrechterhalten."
      ],
      hu: [],
      ro: [
        "Carnavalul are loc în fiecare an în februarie sau martie, cu 50 de zile înainte de Paștele ortodox.",
        "Municipalitatea Limassol organizează evenimentele oficiale.",
        "'Regele Carnavalului' conduce marea paradă, având o temă nouă în fiecare an.",
        "Cântăreții de serenade străbat străzile cu mandoline și chitare.",
        "Multe petreceri și baluri au loc în hotelurile și cluburile din oraș.",
        "Carnavalul este o sursă importantă de venituri din turism pentru Limassol.",
        "Tradiția carnavalului a fost menținută și în timpul perioadei coloniale britanice."
      ],
      en: []
    }, image: "/poi-images/cy-limassol-carnival.webp"},
  {
    id: "cy-paphos-aphrodite",
    type: "landmark",
    parent: "CY-005",
    coords: [32.4240, 34.7770],
    name: { de: "Paphos Aphrodite Festival", hu: "Páfoszi Aphrodité Fesztivál", ro: "Festivalul Afrodita din Paphos", en: "Paphos Aphrodite Festival" },
    description: {
      de: "Ein internationales Opernfestival, das jeden Sommer in Paphos stattfindet.",
      hu: "Nemzetközi operafesztivál, melyet minden nyáron megrendeznek Páfoszban.",
      ro: "Un festival internațional de operă care are loc în fiecare vară în Paphos.",
      en: "An international opera festival held every summer in Paphos."
    },
    descriptionAdvanced: {
      de: "Das Paphos Aphrodite Festival ist ein international anerkanntes Opernfestival, das jeden Sommer vor der malerischen Kulisse der mittelalterlichen Burg am Hafen von Paphos stattfindet. Seit seiner Gründung im Jahr 1999 hat das Festival renommierte Opernensembles aus der ganzen Welt angezogen, darunter die Arena di Verona, das Bolschoi-Theater und die Oper Bonn. Jedes Jahr wird eine andere klassische Oper aufgeführt, die das Publikum mit erstklassigen Inszenierungen und Gesangsdarbietungen begeistert. Die Kombination aus der historischen Atmosphäre des Hafens, dem warmen zypriotischen Sommerabend und der Kraft der Oper schafft ein unvergessliches kulturelles Erlebnis.",
      hu: "",
      ro: "Festivalul Afrodita din Paphos este un festival de operă recunoscut internațional, care are loc în fiecare vară în fața decorului pitoresc al castelului medieval din portul Paphos. De la înființarea sa în 1999, festivalul a atras ansambluri de operă renumite din întreaga lume, inclusiv Arena di Verona, Teatrul Bolșoi și Opera din Bonn. În fiecare an, este prezentată o altă operă clasică, care încântă publicul cu producții de primă clasă și interpretări vocale. Combinația dintre atmosfera istorică a portului, serile calde de vară cipriote și puterea operei creează o experiență culturală de neuitat.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Festival findet normalerweise am ersten Septemberwochenende statt.",
        "Die Bühne wird direkt vor der Burg von Paphos aufgebaut.",
        "Das Festival wurde ins Leben gerufen, um den Kulturtourismus in Paphos zu fördern.",
        "Zu den bisher aufgeführten Opern gehören 'Carmen', 'La Traviata', 'Turandot' und 'Aida'.",
        "Die Veranstaltung zieht Tausende von Besuchern aus Zypern und dem Ausland an.",
        "Es werden Übertitel in Griechisch und Englisch bereitgestellt.",
        "Das Festival arbeitet oft mit dem Philharmonischen Orchester Zyperns zusammen."
      ],
      hu: [],
      ro: [
        "Festivalul are loc de obicei în primul weekend din septembrie.",
        "Scena este amplasată chiar în fața castelului din Paphos.",
        "Festivalul a fost creat pentru a promova turismul cultural în Paphos.",
        "Printre operele interpretate anterior se numără 'Carmen', 'La Traviata', 'Turandot' și 'Aida'.",
        "Evenimentul atrage mii de vizitatori din Cipru și din străinătate.",
        "Sunt furnizate supratitrări în greacă și engleză.",
        "Festivalul colaborează adesea cu Orchestra Filarmonică din Cipru."
      ],
      en: []
    }
  },
  {
    id: "cy-kataklysmos",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6335, 34.9010],
    name: { de: "Kataklysmos", hu: "Kataklysmos", ro: "Kataklysmos", en: "Kataklysmos" },
    description: {
      de: "Das Fest der Sintflut, besonders groß in Larnaca mit Aktivitäten am Wasser gefeiert.",
      hu: "Az özönvíz ünnepe, melyet Lárnakában különösen látványos vízparti programokkal ünnepelnek.",
      ro: "Sărbătoarea Potopului, celebrată în special în Larnaca cu activități pe apă.",
      en: "The Festival of the Flood, celebrated grandly in Larnaca with waterfront activities."
    },
    descriptionAdvanced: {
      de: "Kataklysmos, das Fest der Sintflut, ist ein einzigartiges zyprisches Fest mit Wurzeln, die bis in die Antike und heidnische Rituale zurückreichen. Es wird 50 Tage nach dem orthodoxen Osterfest am Pfingstmontag gefeiert und ist ein offizieller Feiertag. Das Fest ist im Wesentlichen eine Feier des Wassers. Die größten Feierlichkeiten finden in den Küstenstädten statt, insbesondere in Larnaca. Die Strandpromenaden verwandeln sich in riesige Jahrmärkte mit Essensständen, Spielen, Musik und Tanz. Ein zentraler Bestandteil des Festes sind Wasseraktivitäten, darunter Bootsrennen, Schwimmwettbewerbe und das traditionelle 'Sich-gegenseitig-nass-Spritzen', das die Reinigung symbolisiert.",
      hu: "",
      ro: "Kataklysmos, Sărbătoarea Potopului, este un festival unic cipriot cu rădăcini care datează din antichitate și ritualuri păgâne. Se sărbătorește la 50 de zile după Paștele ortodox, în Lunea Rusaliilor, și este o sărbătoare legală. Festivalul este în esență o celebrare a apei. Cele mai mari festivități au loc în orașele de coastă, în special în Larnaca. Promenadele de pe malul mării se transformă în târguri uriașe cu standuri de mâncare, jocuri, muzică și dans. O parte centrală a festivalului o reprezintă activitățile acvatice, inclusiv curse de bărci, concursuri de înot și tradiționala 'stropire reciprocă', care simbolizează purificarea.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Name 'Kataklysmos' ist das griechische Wort für 'Sintflut'.",
        "Das Fest verbindet christliche Traditionen (Pfingsten) mit älteren Zeremonien zu Ehren von Aphrodite und Adonis.",
        "Traditionelle Volkslieder, bekannt als 'Tsiattista' (poetische Duelle), sind ein wichtiger Teil des Festes.",
        "In Larnaca dauert das Fest mehrere Tage.",
        "Es ist eine Zeit für Familien, zusammenzukommen und zu feiern.",
        "Die Kirche spielt eine wichtige Rolle bei den religiösen Zeremonien des Tages.",
        "Das Fest markiert den Beginn der Sommersaison für viele Zyprioten."
      ],
      hu: [],
      ro: [
        "Numele 'Kataklysmos' este cuvântul grecesc pentru 'potop'.",
        "Festivalul îmbină tradițiile creștine (Rusaliile) cu ceremonii mai vechi în onoarea Afroditei și a lui Adonis.",
        "Cântecele populare tradiționale, cunoscute sub numele de 'Tsiattista' (dueluri poetice), sunt o parte importantă a festivalului.",
        "În Larnaca, festivalul durează câteva zile.",
        "Este un moment pentru familii să se reunească și să sărbătorească.",
        "Biserica joacă un rol important în ceremoniile religioase ale zilei.",
        "Festivalul marchează începutul sezonului de vară pentru mulți ciprioți."
      ],
      en: []
    }, image: "/poi-images/cy-kataklysmos.webp"},
  {
    id: "cy-wine-festival",
    type: "landmark",
    parent: "CY-004",
    coords: [33.0500, 34.6800],
    name: { de: "Weinfestival", hu: "Bor Fesztivál", ro: "Festivalul Vinului", en: "Limassol Wine Festival" },
    description: {
      de: "Ein beliebtes Festival in Limassol zur Feier der zypriotischen Weintradition.",
      hu: "Népszerű fesztivál Limassolban a ciprusi borászati hagyományok ünneplésére.",
      ro: "Un festival popular în Limassol pentru celebrarea tradiției vinului cipriot.",
      en: "A popular festival in Limassol celebrating the Cypriot winemaking tradition."
    },
    descriptionAdvanced: {
      de: "Das Weinfestival von Limassol ist eine jährliche Feier der reichen Weintradition Zyperns, die bis in die Antike zurückreicht. Es findet Ende August im Stadtpark von Limassol statt und dauert fast zwei Wochen. Das Festival wurde 1961 ins Leben gerufen und ehrt den Gott des Weines, Dionysos. Besucher können gegen eine geringe Eintrittsgebühr unbegrenzt lokalen Wein aus großen Fässern probieren, der von den großen Weinkellereien und vielen kleinen, unabhängigen Weingütern der Insel zur Verfügung gestellt wird. Neben dem Wein gibt es traditionelle zypriotische Speisen, Volkstanz- und Musikdarbietungen sowie Stände, die lokales Handwerk verkaufen.",
      hu: "",
      ro: "Festivalul Vinului din Limassol este o celebrare anuală a bogatei tradiții vinicole a Ciprului, care datează din antichitate. Acesta are loc la sfârșitul lunii august în parcul municipal din Limassol și durează aproape două săptămâni. Festivalul a fost înființat în 1961 și îl onorează pe zeul vinului, Dionis. Vizitatorii pot degusta vin local nelimitat din butoaie mari, pentru o taxă de intrare modică, vin furnizat de marile crame și de numeroasele mici podgorii independente de pe insulă. Pe lângă vin, există mâncăruri tradiționale cipriote, spectacole de dans popular și muzică, precum și standuri care vând meșteșuguri locale.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Motto des Festivals lautet 'Trinke Wein, er gibt dir Leben'.",
        "Eine riesige Statue eines traditionell gekleideten zypriotischen Winzers (Vrakas) thront über dem Eingang.",
        "Commandaria, der berühmte süße Dessertwein Zyperns, ist einer der Stars des Festivals.",
        "Das Festival zieht jedes Jahr über 100.000 Besucher an.",
        "Es gibt spezielle Bereiche für traditionelle Weinpressvorführungen.",
        "Das Festival bietet auch ein Unterhaltungsprogramm für Kinder.",
        "Es ist eine der wichtigsten kulturellen Veranstaltungen in Limassol."
      ],
      hu: [],
      ro: [
        "Motto-ul festivalului este 'Bea vin, îți dă viață'.",
        "O statuie uriașă a unui vinificator cipriot îmbrăcat tradițional (Vrakas) tronează la intrare.",
        "Commandaria, celebrul vin dulce de desert din Cipru, este una dintre vedetele festivalului.",
        "Festivalul atrage peste 100.000 de vizitatori în fiecare an.",
        "Există zone speciale pentru demonstrații tradiționale de presare a strugurilor.",
        "Festivalul oferă și un program de divertisment pentru copii.",
        "Este unul dintre cele mai importante evenimente culturale din Limassol."
      ],
      en: []
    }, image: "/poi-images/cy-wine-festival.webp"},
  {
    id: "cy-st-hilarion",
    type: "historical",
    parent: "country-cyprus",
    coords: [33.2408, 35.3117],
    name: { de: "Burg St. Hilarion", hu: "Szent Hilarion vár", ro: "Castelul Sfântul Ilarion", en: "St. Hilarion Castle" },
    description: {
      de: "Eine Burgruine im Kyrenia-Gebirge, die angeblich Walt Disney inspirierte.",
      hu: "Várrom a Kerínia-hegységben, amely a legenda szerint Walt Disneyt is megihlette.",
      ro: "O ruină a unui castel din munții Kyrenia, care se presupune că l-ar fi inspirat pe Walt Disney.",
      en: "A castle ruin in the Kyrenia Mountains, said to have inspired Walt Disney."
    },
    descriptionAdvanced: {
      de: "Die Burg St. Hilarion ist die am besten erhaltene der drei Kreuzritterburgen im Kyrenia-Gebirge in Nordzypern. Sie thront dramatisch auf einem Felsgipfel in 732 Metern Höhe. Ursprünglich ein Kloster, das nach einem Einsiedlermönch namens Hilarion benennt war, wurde es von den Byzantinern und später von den Lusignans zu einer strategischen Festung ausgebaut, die die Küstenstraße bewachte. Die Burg ist in drei Ebenen unterteilt, die über steile Treppen miteinander verbunden sind. Die oberste Ebene beherbergt die königlichen Gemächer und bietet einen atemberaubenden Panoramablick. Es wird gemunkelt, dass die märchenhafte Erscheinung der Burg Walt Disney als Inspiration für das Schloss in 'Schneewittchen und die sieben Zwerge' diente.",
      hu: "",
      ro: "Castelul Sfântul Ilarion este cel mai bine conservat dintre cele trei castele ale cruciaților din Munții Kyrenia, în nordul Ciprului. Acesta tronează dramatic pe un vârf stâncos la 732 de metri altitudine. Inițial o mănăstire numită după un călugăr eremit pe nume Ilarion, a fost transformată într-o fortăreață strategică de către bizantini și mai târziu de către Lusignani pentru a păzi drumul de coastă. Castelul este împărțit în trei niveluri, conectate prin scări abrupte. Nivelul superior găzduiește apartamentele regale și oferă o vedere panoramică uluitoare. Se zvonește că aspectul de basm al castelului l-ar fi inspirat pe Walt Disney pentru castelul din 'Albă ca Zăpada și cei șapte pitici'.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Burg wurde im 15. Jahrhundert von den Venezianern teilweise abgerissen, um die Kosten für die Garnison zu senken.",
        "Die unteren Ebenen dienten den Soldaten und Arbeitern, während die mittleren eine Kirche und Speisesäle beherbergten.",
        "Die 'Prinzenfenster' in der obersten Ebene sind ein berühmter, fotogener Ort.",
        "Die Burg war während der Kreuzzüge ein wichtiger Rückzugsort für die Lusignan-Könige.",
        "St. Hilarion war Schauplatz heftiger Kämpfe zwischen Richard Löwenherz und dem byzantinischen Herrscher der Insel.",
        "Der Aufstieg zur Spitze ist anstrengend, aber die Aussicht ist die Mühe wert.",
        "Die Burg ist auch als 'Dio Kynoi' (Die beiden Hunde) bekannt."
      ],
      hu: [],
      ro: [
        "Castelul a fost parțial demolat de venețieni în secolul al XV-lea pentru a reduce costurile garnizoanei.",
        "Nivelurile inferioare erau pentru soldați și muncitori, în timp ce nivelul de mijloc găzduia o biserică și săli de mese.",
        "'Ferestrele Reginei' de la nivelul superior sunt un loc faimos și fotogenic.",
        "Castelul a fost un refugiu important pentru regii Lusignan în timpul cruciadelor.",
        "Sfântul Ilarion a fost scena unor lupte aprige între Richard Inimă de Leu și conducătorul bizantin al insulei.",
        "Urcușul până în vârf este obositor, dar priveliștea merită efortul.",
        "Castelul este cunoscut și sub numele de 'Dio Kynoi' (Cei doi câini)."
      ],
      en: []
    }, image: "/poi-images/cy-st-hilarion.webp"},
  {
    id: "cy-bellapais",
    type: "historical",
    parent: "country-cyprus",
    coords: [33.3556, 35.3061],
    name: { de: "Abtei Bellapais", hu: "Bellapais apátság", ro: "Abația Bellapais", en: "Bellapais Abbey" },
    description: {
      de: "Die Ruine eines Klosters aus dem 13. Jahrhundert in der Nähe von Kyrenia.",
      hu: "Egy 13. századi kolostor lenyűgöző romjai Kerínia közelében.",
      ro: "Ruinele unei mănăstiri din secolul al XIII-lea lângă Kyrenia.",
      en: "The ruin of a 13th-century monastery near Kyrenia."
    },
    descriptionAdvanced: {
      de: "Die Abtei Bellapais ist die stimmungsvolle Ruine eines Augustinerklosters aus dem 13. Jahrhundert im Dorf Bellapais, mit Blick auf die Stadt Kyrenia. Der Name 'Bellapais' leitet sich vom französischen 'Abbaye de la Paix' (Abtei des Friedens) ab. Die Abtei ist ein Meisterwerk gotischer Architektur, das in die Levante verpflanzt wurde. Das beeindruckendste erhaltene Gebäude ist das Refektorium (Speisesaal) mit seiner hohen Decke und der Kanzel. Die Kirche der Abtei ist ebenfalls gut erhalten. Die Klosterruine, die von Zypressen umgeben ist, strahlt eine Atmosphäre der Ruhe und Gelassenheit aus und hat im Laufe der Jahre viele Künstler und Schriftsteller inspiriert, darunter Lawrence Durrell, der hier lebte und sein Buch 'Bittere Limonen' schrieb.",
      hu: "",
      ro: "Abația Bellapais este ruina evocatoare a unei mănăstiri augustiniene din secolul al XIII-lea, situată în satul Bellapais, cu vedere la orașul Kyrenia. Numele 'Bellapais' derivă din francezul 'Abbaye de la Paix' (Abația Păcii). Abația este o capodoperă a arhitecturii gotice transplantată în Levant. Cea mai impresionantă clădire care a supraviețuit este refectoriul (sala de mese), cu tavanul său înalt și amvonul. Biserica abației este, de asemenea, bine conservată. Ruinele mănăstirii, înconjurate de chiparoși, emană o atmosferă de pace și seninătate și au inspirat de-a lungul anilor mulți artiști și scriitori, inclusiv pe Lawrence Durrell, care a locuit aici și a scris cartea sa 'Lămâi amare'.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Bau der Abtei begann um 1200 unter der Herrschaft der Lusignans.",
        "Das Refektorium gilt als eines der schönsten gotischen Zimmer im Nahen Osten.",
        "Die Abtei wurde während der osmanischen Eroberung geplündert und verfiel langsam.",
        "Heute finden in der Abtei Konzerte und Musikfestivals statt.",
        "Der 'Baum des Müßiggangs' im Dorf Bellapais wurde durch Durrells Buch berühmt.",
        "Von der Abtei aus hat man einen spektakulären Blick auf die Küste und das Mittelmeer.",
        "Zwei römische Sarkophage am Eingang dienten einst als Waschbecken."
      ],
      hu: [],
      ro: [
        "Construcția abației a început în jurul anului 1200, sub domnia Lusignanilor.",
        "Refectoriul este considerat una dintre cele mai frumoase încăperi gotice din Orientul Apropiat.",
        "Abația a fost jefuită în timpul cuceririi otomane și a intrat treptat în ruină.",
        "Astăzi, în abație au loc concerte și festivaluri de muzică.",
        "'Copacul Leneviei' din satul Bellapais a devenit celebru datorită cărții lui Durrell.",
        "De la abație se deschide o vedere spectaculoasă asupra coastei și a Mării Mediterane.",
        "Două sarcofage romane de la intrare au servit odinioară drept chiuvete."
      ],
      en: []
    }, image: "/poi-images/cy-bellapais.webp"},
  {
    id: "cy-othello-castle",
    type: "historical",
    parent: "CY-002",
    coords: [33.9422, 35.1264],
    name: { de: "Othello-Turm", hu: "Othello-torony", ro: "Turnul Othello", en: "Othello Castle" },
    description: {
      de: "Eine Burg in Famagusta, die nach Shakespeares berühmtem Stück benannt wurde.",
      hu: "Vár Famagustában, amelyet Shakespeare híres drámája után neveztek el.",
      ro: "Un castel din Famagusta, numit după faimoasa piesă a lui Shakespeare.",
      en: "A castle in Famagusta, named after Shakespeare's famous play."
    },
    descriptionAdvanced: {
      de: "Der Othello-Turm ist Teil der massiven Stadtmauern von Famagusta und bewacht den Eingang zum Hafen. Die ursprüngliche Festung wurde im 14. Jahrhundert von den Lusignans erbaut. Die Venezianer bauten sie im 15. Jahrhundert um und passten sie an die Verwendung von Artillerie an. Der Name 'Othello-Turm' wurde während der britischen Kolonialzeit populär und basiert auf der Theorie, dass Shakespeares berühmte Tragödie 'Othello' hier spielt. Die Handlung des Stücks dreht sich um einen venezianischen Gouverneur (einen Mohren), der seine Frau aus Eifersucht tötet. Ein venezianischer Gouverneur namens Christoforo Moro, dessen Nachname 'Maure' bedeutet, war im frühen 16. Jahrhundert auf Zypern stationiert, was die Verbindung nahelegt.",
      hu: "",
      ro: "Turnul Othello face parte din zidurile masive ale orașului Famagusta și păzește intrarea în port. Fortăreața originală a fost construită în secolul al XIV-lea de către Lusignani. Venețienii au reconstruit-o în secolul al XV-lea, adaptând-o pentru utilizarea artileriei. Numele 'Turnul Othello' a devenit popular în timpul perioadei coloniale britanice și se bazează pe teoria că faimoasa tragedie a lui Shakespeare, 'Othello', se petrece aici. Intriga piesei se învârte în jurul unui guvernator venețian (un maur) care își ucide soția din gelozie. Un guvernator venețian pe nume Christoforo Moro, al cărui nume de familie înseamnă 'maur', a fost staționat în Cipru la începutul secolului al XVI-lea, ceea ce sugerează legătura.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Über dem Haupteingang der Burg befindet sich ein steinernes Relief des Löwen von Venedig.",
        "Die Burg besteht aus einem Labyrinth von Korridoren, Türmen und Hallen.",
        "Sie diente als Hauptverteidigungspunkt für den Hafen von Famagusta.",
        "Leonardo da Vinci soll 1481 Ratschläge zur Befestigung der Stadtmauern gegeben haben.",
        "Die Festung widerstand einer fast einjährigen Belagerung durch die Osmanen 1570-71.",
        "Die Aussicht von den Wällen auf den Hafen und die Stadt ist beeindruckend.",
        "Die Verbindung zu Othello ist historisch nicht belegt, aber eine faszinierende Legende."
      ],
      hu: [],
      ro: [
        "Deasupra intrării principale a castelului se află un relief în piatră al Leului Venețian.",
        "Castelul constă dintr-un labirint de coridoare, turnuri și săli.",
        "A servit ca principal punct de apărare pentru portul Famagusta.",
        "Se spune că Leonardo da Vinci ar fi oferit sfaturi pentru fortificarea zidurilor orașului în 1481.",
        "Fortăreața a rezistat unui asediu de aproape un an din partea otomanilor în 1570-71.",
        "Priveliștea de pe metereze asupra portului și orașului este impresionantă.",
        "Legătura cu Othello nu este dovedită istoric, dar este o legendă fascinantă."
      ],
      en: []
    }, image: "/poi-images/cy-othello-castle.webp"},
  {
    id: "cy-blue-lagoon",
    type: "landmark",
    parent: "CY-005",
    coords: [32.3250, 35.0667],
    name: { de: "Blaue Lagune", hu: "Kék Lagúna", ro: "Laguna Albastră", en: "Blue Lagoon" },
    description: {
      de: "Ein beliebtes Badeziel mit kristallklarem Wasser auf der Akamas-Halbinsel.",
      hu: "Népszerű fürdőzőhely kristálytiszta vízzel az Akamasz-félszigeten.",
      ro: "O destinație populară pentru înot, cu apă cristalină, pe Peninsula Akamas.",
      en: "A popular swimming spot with crystal-clear water on the Akamas Peninsula."
    },
    descriptionAdvanced: {
      de: "Die Blaue Lagune ist eine perfekt geschützte Bucht auf der Akamas-Halbinsel, die für ihr unglaublich klares, türkisfarbenes Wasser berühmt ist. Sie gilt als einer der schönsten Orte zum Schwimmen und Schnorcheln auf Zypern. Der Meeresboden ist eine Mischung aus Sand und Felsen, und die Sicht unter Wasser ist oft außergewöhnlich, was sie zu einem idealen Ort macht, um das Meeresleben zu beobachten. Die Lagune ist nicht leicht zu erreichen; die meisten Besucher kommen mit dem Boot von Latchi oder Paphos aus. Abenteuerlustige können sie auch mit einem Geländewagen oder Quad über die unbefestigten Straßen der Halbinsel erreichen. Die Abgeschiedenheit trägt zur unberührten Schönheit und zum Charme des Ortes bei.",
      hu: "",
      ro: "Laguna Albastră este un golf perfect protejat în Peninsula Akamas, renumit pentru apele sale incredibil de limpezi, de culoare turcoaz. Este considerat unul dintre cele mai frumoase locuri pentru înot și snorkeling din Cipru. Fundul mării este un amestec de nisip și stânci, iar vizibilitatea subacvatică este adesea excepțională, ceea ce îl face un loc ideal pentru a observa viața marină. Laguna nu este ușor accesibilă; majoritatea vizitatorilor vin cu barca din Latchi sau Paphos. Cei aventuroși o pot accesa și cu un vehicul 4x4 sau un ATV pe drumurile neasfaltate ale peninsulei. Izolarea contribuie la frumusețea și farmecul neatins al locului.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Wassertemperaturen in der Lagune sind oft ein paar Grad wärmer als im offenen Meer.",
        "Bootstouren zur Blauen Lagune beinhalten oft Stopps an anderen Sehenswürdigkeiten wie den Bädern der Aphrodite.",
        "Es gibt keine Einrichtungen wie Restaurants oder Toiletten direkt an der Lagune.",
        "Der Name 'Blaue Lagune' beschreibt perfekt die intensive Farbe des Wassers.",
        "Schnorchler können eine Vielzahl von Fischen und anderen Meereslebewesen sehen.",
        "Die umliegende Landschaft der Akamas-Halbinsel ist rau und wunderschön.",
        "Die Bootsfahrten dauern in der Regel einen halben oder ganzen Tag."
      ],
      hu: [],
      ro: [
        "Temperaturile apei în lagună sunt adesea cu câteva grade mai calde decât în largul mării.",
        "Excursiile cu barca la Laguna Albastră includ adesea opriri la alte atracții, precum Băile Afroditei.",
        "Nu există facilități precum restaurante sau toalete direct la lagună.",
        "Numele 'Laguna Albastră' descrie perfect culoarea intensă a apei.",
        "Amatorii de snorkeling pot vedea o varietate de pești și alte viețuitoare marine.",
        "Peisajul înconjurător al Peninsulei Akamas este accidentat și superb.",
        "Excursiile cu barca durează de obicei o jumătate de zi sau o zi întreagă."
      ],
      en: []
    }, image: "/poi-images/cy-blue-lagoon.webp"},
  {
    id: "CY-001-zenobia",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6558, 34.8986],
    name: { de: "Zenobia Wrack", hu: "Zenobia roncs", ro: "Epava Zenobia", en: "Zenobia Wreck" },
    description: {
      de: "Einer der besten Tauchplätze der Welt, ein gesunkenes Fährschiff vor der Küste von Larnaca.",
      hu: "A világ egyik legjobb merülőhelye, egy elsüllyedt komp Larnaca partjainál.",
      ro: "Unul dintre cele mai bune locuri de scufundări din lume, un feribot scufundat în largul coastei Larnaca.",
      en: "One of the world's top diving sites, a sunken ferry located off the coast of Larnaca."
    },
    facts: {
      de: ["Die Zenobia sank 1980 auf ihrer Jungfernfahrt.", "Das Wrack liegt in einer Tiefe von 16 bis 42 Metern.", "Es wird oft als die 'Titanic des Mittelmeers' bezeichnet."],
      hu: ["A Zenobia 1980-ban süllyedt el első útján.", "A roncs 16 és 42 méter közötti mélységben fekszik.", "Gyakran a 'Földközi-tenger Titanicjaként' emlegetik."],
      ro: ["Zenobia s-a scufundat în 1980 în timpul călătoriei sale inaugurale.", "Epava se află la o adâncime cuprinsă între 16 și 42 de metri.", "Este adesea numită 'Titanicul Mediteranei'."],
      en: ["The Zenobia sank in 1980 on her maiden voyage.", "The wreck lies at a depth of 16 to 42 meters.", "It is often referred to as the 'Titanic of the Mediterranean'."]
    },
    descriptionAdvanced: {
      de: "Das Wrack der MS Zenobia vor der Küste von Larnaca zählt zu den zehn besten Wracktauchplätzen der Welt. Die schwedische Ro-Ro-Fähre sank im Juni 1980 auf ihrer Jungfernfahrt aufgrund eines Computerfehlers im Ballastsystem. Sie liegt nun auf ihrer Backbordseite in einer Tiefe von 16 bis 42 Metern. Das 172 Meter lange Wrack ist mitsamt seiner Ladung von über 100 Lastwagen und Anhängern intakt geblieben. Die riesige Größe des Wracks und die gute Sicht machen es zu einem faszinierenden Ort für Taucher aller Erfahrungsstufen, vom Erkunden des Äußeren bis hin zu anspruchsvollen Penetrationstauchgängen in die Laderäume und Kabinen.",
      hu: "",
      ro: "Epava navei MS Zenobia, în largul coastei Larnaca, este clasată printre primele zece locuri de scufundări la epave din lume. Feribotul suedez de tip ro-ro s-a scufundat în iunie 1980, în timpul călătoriei sale inaugurale, din cauza unei erori de computer în sistemul de balast. Acum se odihnește pe babord, la o adâncime de 16 până la 42 de metri. Epava de 172 de metri lungime a rămas intactă, împreună cu încărcătura sa de peste 100 de camioane și remorci. Dimensiunea uriașă a epavei și vizibilitatea bună o fac un loc fascinant pentru scafandri de toate nivelurile, de la explorarea exteriorului la scufundări de penetrare provocatoare în punțile de marfă și cabine.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Zenobia war mit Fracht im Wert von über 200 Millionen Pfund beladen.",
        "Das Wrack ist zu einem künstlichen Riff geworden, das eine reiche Meeresfauna anzieht, darunter Zackenbarsche und Barrakudas.",
        "Es gab keine Todesopfer, da die gesamte Besatzung evakuiert wurde.",
        "Die Sichtweite am Wrack kann bis zu 50 Meter betragen.",
        "Tauchschulen in Larnaca bieten tägliche Ausflüge zum Wrack an.",
        "Das Betreten bestimmter Bereiche des Wracks erfordert eine spezielle Ausbildung und Ausrüstung.",
        "Das Wrack ist als offizielles Meeresschutzgebiet ausgewiesen."
      ],
      hu: [],
      ro: [
        "Zenobia era încărcată cu marfă în valoare de peste 200 de milioane de lire sterline.",
        "Epava a devenit un recif artificial, atrăgând o faună marină bogată, inclusiv grupări și baracude.",
        "Nu au existat victime, deoarece întregul echipaj a fost evacuat.",
        "Vizibilitatea la epavă poate ajunge până la 50 de metri.",
        "Școlile de scufundări din Larnaca oferă excursii zilnice la epavă.",
        "Intrarea în anumite zone ale epavei necesită pregătire și echipament special.",
        "Epava este desemnată ca arie marină protejată oficial."
      ],
      en: []
    }, image: "/poi-images/CY-001-zenobia.webp"},
  {
    id: "CY-001-larnaca-fort",
    type: "landmark",
    parent: "CY-001",
    coords: [33.6375, 34.9103],
    name: { de: "Festung von Larnaca", hu: "Larnaca erőd", ro: "Cetatea din Larnaca", en: "Larnaca Castle" },
    description: {
      de: "Eine mittelalterliche Festung am südlichen Ende der Finikoudes-Promenade.",
      hu: "Középkori erőd a Finikoudes sétány déli végén.",
      ro: "O cetate medievală la capătul sudic al promenadei Finikoudes.",
      en: "A medieval castle located at the southern end of the Finikoudes promenade."
    },
    facts: {
      de: ["Ursprünglich im 14. Jahrhundert erbaut.", "Diente während der britischen Herrschaft als Gefängnis.", "Beherbergt heute ein kleines mittelalterliches Museum."],
      hu: ["Eredetileg a 14. században épült.", "A brit uralom idején börtönként szolgált.", "Ma egy kis középkori múzeumnak ad otthont."],
      ro: ["Construită inițial în secolul al XIV-lea.", "A servit ca închisoare în timpul stăpânirii britanice.", "Astăzi găzduiește un mic muzeu medieval."],
      en: ["Originally built in the 14th century.", "Served as a prison during British rule.", "Now houses a small medieval museum."]
    },
    descriptionAdvanced: {
      de: "Die Festung von Larnaca, direkt am südlichen Ende der berühmten Finikoudes-Promenade gelegen, ist ein markantes historisches Wahrzeichen. Ursprünglich im späten 14. Jahrhundert während der Herrschaft von König Jakob I. von Lusignan erbaut, diente sie dem Schutz des Hafens der Stadt. Die Osmanen bauten die Festung im 17. Jahrhundert um, und während der britischen Kolonialzeit wurde sie als Gefängnis genutzt. Heute beherbergt die Festung ein kleines Museum mit Funden aus der frühchristlichen bis zur osmanischen Zeit und dient als Veranstaltungsort für kulturelle Events im Sommer. Der Innenhof und die oberen Zinnen bieten einen herrlichen Blick auf das Meer.",
      hu: "",
      ro: "Cetatea din Larnaca, situată chiar la capătul sudic al faimoasei promenade Finikoudes, este un reper istoric proeminent. Construită inițial la sfârșitul secolului al XIV-lea, în timpul domniei regelui Iacob I de Lusignan, a servit la protejarea portului orașului. Otomanii au reconstruit cetatea în secolul al XVII-lea, iar în timpul perioadei coloniale britanice a fost folosită ca închisoare. Astăzi, cetatea găzduiește un mic muzeu cu artefacte din perioada creștină timpurie până în perioada otomană și servește ca loc de desfășurare a evenimentelor culturale în timpul verii. Curtea interioară și meterezele superioare oferă o vedere splendidă la mare.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Festung wurde auf den Ruinen einer früheren byzantinischen Befestigung errichtet.",
        "Die Briten nutzten die Festung auch als Ort für Hinrichtungen.",
        "Das Museum im Westflügel zeigt antike Töpferwaren, Grabsteine und Waffen.",
        "Im Sommer finden im Innenhof der Festung Theater- und Musikaufführungen statt.",
        "Die Architektur ist eine Mischung aus byzantinischen, venezianischen und osmanischen Stilelementen.",
        "Sie ist eines der am besten erhaltenen Küstenforts auf Zypern.",
        "Die Kanonen auf den Zinnen sind osmanischen Ursprungs."
      ],
      hu: [],
      ro: [
        "Cetatea a fost construită pe ruinele unei fortificații bizantine anterioare.",
        "Britanicii au folosit cetatea și ca loc pentru execuții.",
        "Muzeul din aripa de vest expune ceramică antică, pietre funerare și arme.",
        "Vara, în curtea cetății au loc spectacole de teatru și muzică.",
        "Arhitectura este un amestec de stiluri bizantin, venețian și otoman.",
        "Este una dintre cele mai bine conservate fortărețe de coastă din Cipru.",
        "Tunurile de pe metereze sunt de origine otomană."
      ],
      en: []
    }, image: "/poi-images/CY-001-larnaca-fort.webp"},
  {
    id: "CY-002-varosha",
    type: "landmark",
    parent: "CY-002",
    coords: [33.9553, 35.1097],
    name: { de: "Varosha (Geisterstadt)", hu: "Varoszi (Szellemváros)", ro: "Varosha (Orașul Fantomă)", en: "Varosha (Ghost Town)" },
    description: {
      de: "Ein einst blühendes Tourismusviertel von Famagusta, das seit 1974 verlassen ist.",
      hu: "Famagusta egykor virágzó turisztikai negyede, amely 1974 óta elhagyatott.",
      ro: "Un cartier turistic odinioară înfloritor din Famagusta, abandonat din 1974.",
      en: "A once-thriving tourist district of Famagusta, abandoned since 1974."
    },
    facts: {
      de: ["Vor 1974 war es eines der beliebtesten Urlaubsziele der Welt.", "Es blieb jahrzehntelang für die Öffentlichkeit gesperrt.", "Seit 2020 sind Teile der Stadt wieder für Besucher zugänglich."],
      hu: ["1974 előtt a világ egyik legnépszerűbb üdülőhelye volt.", "Évtizedekig zárva volt a nyilvánosság előtt.", "2020 óta a város egyes részei újra látogathatók."],
      ro: ["Înainte de 1974, a fost una dintre cele mai populare destinații de vacanță din lume.", "A rămas închis publicului timp de decenii.", "Din 2020, părți ale orașului au fost redeschise vizitatorilor."],
      en: ["Before 1974, it was one of the most popular holiday destinations in the world.", "It remained closed to the public for decades.", "Since 2020, parts of the city have been reopened to visitors."]
    },
    descriptionAdvanced: {
      de: "Varosha, ein südlicher Stadtteil von Famagusta, war vor 1974 das führende Tourismusziel Zyperns und eines der glamourösesten weltweit. Mit seinen modernen Hochhaushotels, luxuriösen Apartments und dem goldenen Sandstrand zog es wohlhabende Touristen und Berühmtheiten an. Nach der türkischen Invasion Zyperns im Jahr 1974 wurde Varosha zu einer Sperrzone, eingezäunt und von der türkischen Armee kontrolliert. Fast 50 Jahre lang war es eine Geisterstadt, in der die Zeit stillstand. Erst seit 2020 wurden Teile der Strandpromenade und einige Straßen wieder für die Öffentlichkeit zugänglich gemacht, was einen surrealen Einblick in eine verlassene Stadt bietet.",
      hu: "",
      ro: "Varosha, un cartier sudic al Famagustei, era înainte de 1974 principala destinație turistică a Ciprului și una dintre cele mai pline de farmec din lume. Cu hotelurile sale moderne, apartamentele de lux și plaja cu nisip auriu, atrăgea turiști bogați și celebrități. După invazia turcă a Ciprului din 1974, Varosha a devenit o zonă interzisă, împrejmuită și controlată de armata turcă. Timp de aproape 50 de ani, a fost un oraș-fantomă, unde timpul a stat în loc. Abia din 2020, părți ale promenadei de pe plajă și câteva străzi au fost redeschise publicului, oferind o privire suprarealistă asupra unui oraș abandonat.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Einwohner von Varosha flohen in der Erwartung, nach wenigen Tagen zurückzukehren, und ließen alles zurück.",
        "Resolution 550 des UN-Sicherheitsrates von 1984 fordert die Übergabe Varoshas an die Verwaltung der Vereinten Nationen.",
        "Man konnte Autohäuser mit Oldtimern und Geschäfte mit der Mode der 70er Jahre sehen.",
        "Meeresschildkröten kehrten zurück, um an den verlassenen Stränden ihre Eier zu legen.",
        "Die teilweise Öffnung wird international als kontrovers angesehen.",
        "Der schwedische Journalist Jan-Olof Bengtsson nannte es 'Die Geisterstadt'.",
        "Vor 1974 generierte Varosha über 50% der gesamten Tourismuseinnahmen Zyperns."
      ],
      hu: [],
      ro: [
        "Locuitorii din Varosha au fugit, așteptându-se să se întoarcă în câteva zile, lăsând totul în urmă.",
        "Rezoluția 550 a Consiliului de Securitate al ONU din 1984 cere transferul Varoshei sub administrația Națiunilor Unite.",
        "Se puteau vedea reprezentanțe auto cu mașini de epocă și magazine cu moda anilor '70.",
        "Țestoasele marine s-au întors să-și depună ouăle pe plajele abandonate.",
        "Redeschiderea parțială este considerată controversată la nivel internațional.",
        "Jurnalistul suedez Jan-Olof Bengtsson l-a numit 'Orașul Fantomă'.",
        "Înainte de 1974, Varosha genera peste 50% din veniturile totale din turism ale Ciprului."
      ],
      en: []
    }, image: "/poi-images/CY-002-varosha.webp"},
  {
    id: "CY-002-fig-tree-bay",
    type: "landmark",
    parent: "CY-002",
    coords: [34.0583, 35.0125],
    name: { de: "Feigenbaumbucht", hu: "Fügefa-öböl", ro: "Fig Tree Bay", en: "Fig Tree Bay" },
    description: {
      de: "Ein beliebter Sandstrand in Protaras, bekannt für sein kristallklares Wasser.",
      hu: "Népszerű homokos strand Protarasban, kristálytiszta vizéről ismert.",
      ro: "O plajă populară cu nisip în Protaras, cunoscută pentru apele sale cristaline.",
      en: "A popular sandy beach in Protaras, known for its crystal-clear waters."
    },
    facts: {
      de: ["Benannt nach einem einzelnen Feigenbaum, der dort seit dem 17. Jahrhundert stehen soll.", "Wird oft als einer der besten Strände Europas gewählt.", "Verfügt über eine kleine Insel, die man schwimmend erreichen kann."],
      hu: ["Egyetlen fügefáról kapta a nevét, amely a 17. század óta áll ott.", "Gyakran választják Európa egyik legjobb strandjának.", "Van egy kis szigete, amely úszva is elérhető."],
      ro: ["Numită după un singur smochin care ar fi stat acolo încă din secolul al XVII-lea.", "Este adesea votată printre cele mai bune plaje din Europa.", "Are o mică insulă care poate fi accesată prin înot."],
      en: ["Named after a single fig tree that has supposedly stood there since the 17th century.", "Often voted among the best beaches in Europe.", "Features a small islet that can be reached by swimming."]
    },
    descriptionAdvanced: {
      de: "Die Fig Tree Bay ist der bekannteste Strand im Ferienort Protaras und gilt als einer der malerischsten auf ganz Zypern. Er zeichnet sich durch seinen feinen, goldenen Sand und das außergewöhnlich klare, flache Wasser aus, was ihn besonders bei Familien beliebt macht. Seinen Namen verdankt der Strand einem einzelnen, alten Feigenbaum, der seit der Ankunft von Invasoren aus dem Osten im 17. Jahrhundert dort steht. Eine kleine, unbewohnte Insel in Schwimmnähe bietet Schutz vor Wellen und ist ein beliebtes Ziel für Schnorchler. Der Strand wurde wiederholt mit der Blauen Flagge für seine Sauberkeit und hervorragenden Einrichtungen ausgezeichnet.",
      hu: "",
      ro: "Fig Tree Bay este cea mai cunoscută plajă din stațiunea Protaras și este considerată una dintre cele mai pitorești din întregul Cipru. Se remarcă prin nisipul său fin, auriu și apele excepțional de limpezi și puțin adânci, ceea ce o face deosebit de populară printre familii. Numele plajei provine de la un singur smochin bătrân, care se află acolo de la sosirea invadatorilor din est în secolul al XVII-lea. O mică insulă nelocuită, accesibilă înot, oferă protecție împotriva valurilor și este o destinație populară pentru snorkeling. Plaja a fost distinsă în mod repetat cu Steagul Albastru pentru curățenia și facilitățile sale excelente.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Bucht wurde in verschiedenen Ranglisten zu den besten Stränden Europas gezählt.",
        "Wassersportarten wie Wasserski, Parasailing und Tretbootfahren sind weit verbreitet.",
        "Eine hölzerne Promenade verbindet die Fig Tree Bay mit den benachbarten Stränden.",
        "Archäologische Funde deuten darauf hin, dass die Gegend seit der Antike besiedelt ist.",
        "Der Strand ist in den Sommermonaten sehr gut besucht.",
        "Zahlreiche Restaurants und Cafés säumen die Promenade oberhalb des Strandes.",
        "Der Feigenbaum, der dem Strand seinen Namen gab, ist heute noch zu sehen."
      ],
      hu: [],
      ro: [
        "Golful a fost clasat printre cele mai bune plaje din Europa în diverse topuri.",
        "Sporturile nautice precum schiul nautic, parasailingul și hidrobicicletele sunt larg răspândite.",
        "O promenadă de lemn leagă Fig Tree Bay de plajele învecinate.",
        "Descoperirile arheologice sugerează că zona a fost locuită încă din antichitate.",
        "Plaja este foarte aglomerată în lunile de vară.",
        "Numeroase restaurante și cafenele mărginesc promenada de deasupra plajei.",
        "Smochinul care a dat numele plajei poate fi văzut și astăzi."
      ],
      en: []
    }, image: "/poi-images/CY-002-fig-tree-bay.webp"},
  {
    id: "CY-003-cyprus-museum",
    type: "landmark",
    parent: "CY-003",
    coords: [33.3553, 35.1717],
    name: { de: "Zypern-Museum", hu: "Ciprusi Múzeum", ro: "Muzeul Ciprului", en: "Cyprus Museum" },
    description: {
      de: "Das älteste und größte archäologische Museum Zyperns in Nicosia.",
      hu: "Ciprus legrégebbi és legnagyobb régészeti múzeuma Nicosiában.",
      ro: "Cel mai vechi și mai mare muzeu arheologic din Cipru, în Nicosia.",
      en: "The oldest and largest archaeological museum in Cyprus, in Nicosia."
    },
    facts: {
      de: ["Beherbergt Funde von der Jungsteinzeit bis zur byzantinischen Zeit.", "Gegründet wurde es im Jahr 1882.", "Die berühmte Statue der Aphrodite von Soli ist hier ausgestellt."],
      hu: ["A neolitikumtól a bizánci korig őriz leleteket.", "1882-ben alapították.", "Itt látható a híres szoli Aphrodité-szobor."],
      ro: ["Găzduiește descoperiri din epoca neolitică până în perioada bizantină.", "A fost fondat în 1882.", "Celebra statuie a Afroditei din Soli este expusă aici."],
      en: ["It houses finds from the Neolithic age to the Byzantine period.", "It was founded in 1882.", "The famous statue of Aphrodite of Soli is exhibited here."]
    },
    descriptionAdvanced: {
      de: "Das Zypern-Museum in Nikosia ist das wichtigste archäologische Museum der Insel und bietet einen umfassenden Überblick über die 11.000-jährige Geschichte der zypriotischen Zivilisation. Es wurde 1882 während der britischen Besatzung gegründet, um die Ausplünderung und den Schmuggel von Antiquitäten zu stoppen. Die 14 Säle des Museums zeigen chronologisch geordnete Artefakte von der Jungsteinzeit bis zur frühbyzantinischen Zeit. Zu den Höhepunkten gehören die Terrakottafiguren aus Agia Irini, die berühmte Statue der Aphrodite von Soli und eine beeindruckende Sammlung von Goldschmuck und Keramiken. Es ist ein unverzichtbarer Stopp für jeden, der die reiche Vergangenheit Zyperns verstehen möchte.",
      hu: "",
      ro: "Muzeul Ciprului din Nicosia este cel mai important muzeu arheologic de pe insulă și oferă o imagine de ansamblu cuprinzătoare asupra celor 11.000 de ani de istorie a civilizației cipriote. A fost fondat în 1882, în timpul ocupației britanice, pentru a opri jefuirea și contrabanda cu antichități. Cele 14 săli ale muzeului expun artefacte aranjate cronologic, din neolitic până în perioada bizantină timpurie. Printre cele mai importante exponate se numără figurinele de teracotă din Agia Irini, faimoasa statuie a Afroditei din Soli și o colecție impresionantă de bijuterii din aur și ceramică. Este o oprire esențială pentru oricine dorește să înțeleagă trecutul bogat al Ciprului.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das heutige Gebäude wurde 1908 errichtet und ist dem griechischen Architekten N. Balanos gewidmet.",
        "Eine geplante Erweiterung soll das Museum zu einem modernen Kulturzentrum machen.",
        "Die Sammlung umfasst über 6.500 Artefakte.",
        "Die Exponate stammen ausschließlich aus Ausgrabungen auf der Insel Zypern.",
        "Besonders beeindruckend ist die Sammlung mykenischer Keramik.",
        "Das Museum liegt in der Nähe der 'Grünen Linie', die Nikosia teilt.",
        "Es dokumentiert die vielfältigen kulturellen Einflüsse auf Zypern über die Jahrtausende."
      ],
      hu: [],
      ro: [
        "Clădirea actuală a fost construită în 1908 și este dedicată arhitectului grec N. Balanos.",
        "O extindere planificată urmărește transformarea muzeului într-un centru cultural modern.",
        "Colecția cuprinde peste 6.500 de artefacte.",
        "Exponatele provin exclusiv din săpături efectuate pe insula Cipru.",
        "Colecția de ceramică miceniană este deosebit de impresionantă.",
        "Muzeul este situat în apropierea 'Liniei Verzi' care divizează Nicosia.",
        "Documentează diversele influențe culturale asupra Ciprului de-a lungul mileniilor."
      ],
      en: []
    }, image: "/poi-images/CY-003-cyprus-museum.webp"},
  {
    id: "CY-003-ledra-street",
    type: "landmark",
    parent: "CY-003",
    coords: [33.3614, 35.1744],
    name: { de: "Ledrastraße", hu: "Ledra utca", ro: "Strada Ledra", en: "Ledra Street" },
    description: {
      de: "Die Haupteinkaufsstraße in der Altstadt von Nicosia.",
      hu: "Nicosia óvárosának fő bevásárlóutcája.",
      ro: "Principala stradă comercială din orașul vechi al Nicosiei.",
      en: "The main shopping street in the old town of Nicosia."
    },
    facts: {
      de: ["Bekannt für den Grenzübergang zwischen dem griechischen und türkischen Teil.", "Benannt nach dem antiken Stadtkönigreich Ledra.", "Fußgängerzone mit vielen Cafés und Geschäften."],
      hu: ["A görög és török részek közötti határátkelőről ismert.", "Az ókori Ledra városkirályságról kapta a nevét.", "Gyalogos övezet számos kávézóval és üzlettel."],
      ro: ["Cunoscută pentru punctul de trecere a frontierei între partea greacă și cea turcă.", "Numită după regatul antic Ledra.", "Zonă pietonală cu multe cafenele și magazine."],
      en: ["Known for the border crossing between the Greek and Turkish sides.", "Named after the ancient city-kingdom of Ledra.", "Pedestrian zone with many cafes and shops."]
    },
    descriptionAdvanced: {
      de: "Die Ledrastraße ist die pulsierende Hauptschlagader der Altstadt von Nikosia. Sie verläuft von Süden nach Norden durch das historische Zentrum und war jahrzehntelang durch eine Barrikade der 'Grünen Linie' geteilt, die die Stadt trennt. Im April 2008 wurde der Grenzübergang für Fußgänger geöffnet, was zu einem symbolischen Moment der Wiederannäherung wurde. Heute ist die Ledrastraße eine belebte Fußgängerzone, gesäumt von internationalen Modegeschäften, Cafés und Restaurants. Ein Spaziergang entlang der Straße bietet die einzigartige Möglichkeit, die letzte geteilte Hauptstadt der Welt zu erleben, indem man von der Republik Zypern in den international nicht anerkannten Norden wechselt.",
      hu: "",
      ro: "Strada Ledra este artera principală vibrantă a orașului vechi din Nicosia. Se întinde de la sud la nord prin centrul istoric și a fost divizată timp de decenii de o baricadă a 'Liniei Verzi' care separă orașul. În aprilie 2008, punctul de trecere a frontierei pentru pietoni a fost deschis, marcând un moment simbolic de reapropiere. Astăzi, strada Ledra este o zonă pietonală animată, mărginită de magazine de modă internaționale, cafenele și restaurante. O plimbare pe stradă oferă oportunitatea unică de a experimenta ultima capitală divizată a lumii, trecând din Republica Cipru în nordul nerecunoscut internațional.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Straße ist etwa 1 km lang.",
        "Der Shacolas-Turm am südlichen Ende bietet einen Panoramablick über die gesamte Stadt, einschließlich des besetzten Teils.",
        "Der Name 'Ledra' stammt von dem antiken Stadtkönigreich, das an der Stelle des heutigen Nikosia existierte.",
        "Vor der Teilung war sie die Haupteinkaufsstraße der gesamten Stadt.",
        "Der Grenzübergang ist 24 Stunden am Tag geöffnet.",
        "Der Übergang ist nur für Fußgänger, nicht für Fahrzeuge.",
        "Die Öffnung der Straße war ein wichtiges vertrauensbildendes Maßnahme zwischen den beiden Gemeinschaften."
      ],
      hu: [],
      ro: [
        "Strada are o lungime de aproximativ 1 km.",
        "Turnul Shacolas de la capătul sudic oferă o vedere panoramică asupra întregului oraș, inclusiv a părții ocupate.",
        "Numele 'Ledra' provine de la regatul-oraș antic care a existat pe locul Nicosiei de astăzi.",
        "Înainte de divizare, era principala stradă comercială a întregului oraș.",
        "Punctul de trecere a frontierei este deschis 24 de ore pe zi.",
        "Trecerea este doar pentru pietoni, nu pentru vehicule.",
        "Deschiderea străzii a fost o măsură importantă de consolidare a încrederii între cele două comunități."
      ],
      en: []
    }, image: "/poi-images/CY-003-ledra-street.webp"},
  {
    id: "CY-004-amathus",
    type: "landmark",
    parent: "CY-004",
    coords: [33.1417, 34.7125],
    name: { de: "Amathous", hu: "Amathousz", ro: "Amathus", en: "Amathus" },
    description: {
      de: "Eine der bedeutendsten antiken Stadtkönigreiche Zyperns an der Küste von Limassol.",
      hu: "Ciprus egyik legjelentősebb ókori városkirálysága Limassol partjainál.",
      ro: "Unul dintre cele mai importante regate antice din Cipru, pe coasta Limassolului.",
      en: "One of the most important ancient city-kingdoms of Cyprus, located on the coast of Limassol."
    },
    facts: {
      de: ["Es war ein Zentrum der Verehrung der Göttin Aphrodite.", "Die Ausgrabungsstätte umfasst eine Akropolis und eine Basilika.", "Hier wurde der größte jemals gefundene Steinkrug entdeckt."],
      hu: ["Aphrodité istennő tiszteletének egyik központja volt.", "A régészeti területen akropolisz és bazilika is található.", "Itt fedezték fel a valaha talált legnagyobb kőkancsót."],
      ro: ["A fost un centru de cult al zeiței Afrodita.", "Situl arheologic include o acropolă și o basilică.", "Aici a fost descoperit cel mai mare vas de piatră găsit vreodată."],
      en: ["It was a center for the worship of the goddess Aphrodite.", "The archaeological site includes an acropolis and a basilica.", "The largest stone jar ever found was discovered here."]
    },
    descriptionAdvanced: {
      de: "Amathous, an der Südküste östlich von Limassol gelegen, war eines der ältesten und bedeutendsten Stadtkönigreiche Zyperns. Der Legende nach wurde es von einem Sohn des Herakles gegründet und war ein wichtiges Zentrum für den Kult der Aphrodite. Im Gegensatz zu anderen zypriotischen Königreichen hatte Amathous starke Verbindungen zur 'eteozyprischen' Bevölkerung, den Ureinwohnern der Insel. Die archäologische Stätte ist weitläufig und umfasst eine Akropolis, eine Agora (Marktplatz), Bäder und die Ruinen einer frühchristlichen Basilika. Einer der bemerkenswertesten Funde ist ein riesiger Steinkrug, eine Nachbildung dessen, der heute auf der Akropolis steht. Das Original befindet sich im Louvre in Paris.",
      hu: "",
      ro: "Amathus, situat pe coasta de sud, la est de Limassol, a fost unul dintre cele mai vechi și mai importante regate-oraș din Cipru. Legenda spune că a fost fondat de un fiu al lui Heracle și a fost un centru important pentru cultul Afroditei. Spre deosebire de alte regate cipriote, Amathus avea legături puternice cu populația 'eteocipriotă', locuitorii autohtoni ai insulei. Situl arheologic este extins și include o acropolă, o agora (piață), băi și ruinele unei bazilici creștine timpurii. Una dintre cele mai remarcabile descoperiri este un vas uriaș de piatră, o replică a acestuia fiind astăzi pe acropolă. Originalul se află la Luvru, în Paris.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Stadt widerstand den Persern und beteiligte sich nicht am Ionischen Aufstand.",
        "Amathous blühte in der römischen Zeit und wurde zum Verwaltungssitz einer der vier Regionen Zyperns.",
        "Die Stadt wurde im 7. Jahrhundert nach arabischen Überfällen endgültig aufgegeben.",
        "Ein Teil der antiken Stadt, einschließlich des Hafens, liegt heute unter Wasser.",
        "Die Nekropole von Amathous enthielt reiche Grabbeigaben aus verschiedenen Epochen.",
        "Der Apostel Johannes soll hier nach seiner Verbannung auf Patmos gelebt haben.",
        "Der Steinkrug aus Amathous ist über 1,85 Meter hoch und wiegt 14 Tonnen."
      ],
      hu: [],
      ro: [
        "Orașul a rezistat perșilor și nu a participat la Revolta Ioniană.",
        "Amathus a înflorit în perioada romană și a devenit sediul administrativ al uneia dintre cele patru regiuni ale Ciprului.",
        "Orașul a fost abandonat definitiv în secolul al VII-lea, după raidurile arabe.",
        "O parte a orașului antic, inclusiv portul, se află astăzi sub apă.",
        "Necropola din Amathus conținea ofrande funerare bogate din diferite epoci.",
        "Se spune că Apostolul Ioan ar fi trăit aici după exilul său pe insula Patmos.",
        "Vasul de piatră din Amathus are peste 1,85 metri înălțime și cântărește 14 tone."
      ],
      en: []
    }, image: "/poi-images/CY-004-amathus.webp"},
  {
    id: "CY-004-sanctuary-apollo",
    type: "landmark",
    parent: "CY-004",
    coords: [32.8639, 34.6736],
    name: { de: "Heiligtum des Apollon Hylates", hu: "Apollón Hülátész szentélye", ro: "Sanctuarul lui Apollo Hylates", en: "Sanctuary of Apollo Hylates" },
    description: {
      de: "Ein bedeutendes antikes Heiligtum, das Apollon als Gott der Wälder gewidmet war.",
      hu: "Apollónnak, az erdők istenének szentelt jelentős ókori szentély.",
      ro: "Un important sanctuar antic dedicat lui Apollo ca zeu al pădurilor.",
      en: "A major ancient sanctuary dedicated to Apollo as god of the woodlands."
    },
    facts: {
      de: ["Liegt westlich der antiken Stadt Kourion.", "War eines der wichtigsten religiösen Zentren Zyperns.", "Die Anlage umfasst einen Tempel, eine Palästra und Bäder."],
      hu: ["Kourion ókori városától nyugatra fekszik.", "Ciprus egyik legfontosabb vallási központja volt.", "A területen templom, palatestra és fürdők is találhatók."],
      ro: ["Situat la vest de orașul antic Kourion.", "A fost unul dintre cele mai importante centre religioase din Cipru.", "Complexul include un templu, o palestră și băi."],
      en: ["Located west of the ancient city of Kourion.", "Was one of the most important religious centers of Cyprus.", "The site includes a temple, a palaestra, and baths."]
    },
    descriptionAdvanced: {
      de: "Das Heiligtum des Apollon Hylates, westlich des antiken Kourion gelegen, war eines der wichtigsten religiösen Zentren Zyperns. Es war Apollon in seiner Eigenschaft als 'Hylates', dem Gott der Wälder, gewidmet. Der Kult an dieser Stätte reicht bis ins 8. Jahrhundert v. Chr. zurück. Die meisten der heute sichtbaren Ruinen stammen jedoch aus der römischen Zeit, insbesondere aus dem 1. Jahrhundert n. Chr. Das Heiligtum erstreckt sich über einen großen Bereich und umfasst den Haupttempel, eine Palästra (für sportliche Übungen), Bäder und Schlafsäle für Pilger. Eine teilweise restaurierte Säulenreihe des Tempels vermittelt einen Eindruck von seiner einstigen Pracht.",
      hu: "",
      ro: "Sanctuarul lui Apollo Hylates, situat la vest de anticul Kourion, a fost unul dintre cele mai importante centre religioase din Cipru. A fost dedicat lui Apollo în calitatea sa de 'Hylates', zeul pădurilor. Cultul în acest loc datează din secolul al VIII-lea î.Hr. Cu toate acestea, majoritatea ruinelor vizibile astăzi datează din perioada romană, în special din secolul I d.Hr. Sanctuarul se întinde pe o suprafață mare și cuprinde templul principal, o palestră (pentru exerciții sportive), băi și dormitoare pentru pelerini. Un rând de coloane parțial restaurat al templului oferă o imagine a splendorii sale de odinioară.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Jeder, der den heiligen Altar berührte, wurde der Legende nach von den Klippen ins Meer gestürzt.",
        "Das Heiligtum wurde wie Kourion im 4. Jahrhundert n. Chr. durch ein Erdbeben zerstört.",
        "Der Name 'Hylates' leitet sich vom griechischen Wort für 'Wald' ab.",
        "Das Heiligtum war über eine heilige Straße mit Kourion verbunden.",
        "Es war ein wichtiger Ort für Pilger aus dem gesamten Mittelmeerraum.",
        "Die Bäder des Heiligtums waren für die rituelle Reinigung vor dem Gebet gedacht.",
        "Die Architektur zeigt eine Mischung aus griechischen und römischen Stilelementen."
      ],
      hu: [],
      ro: [
        "Legenda spune că oricine atingea altarul sacru era aruncat de pe stânci în mare.",
        "Sanctuarul, la fel ca și Kourion, a fost distrus de un cutremur în secolul al IV-lea d.Hr.",
        "Numele 'Hylates' derivă din cuvântul grecesc pentru 'pădure'.",
        "Sanctuarul era legat de Kourion printr-un drum sacru.",
        "A fost un loc important pentru pelerinii din întreaga Mediterană.",
        "Băile sanctuarului erau destinate purificării rituale înainte de rugăciune.",
        "Arhitectura prezintă un amestec de stiluri grecești și romane."
      ],
      en: []
    }, image: "/poi-images/CY-004-sanctuary-apollo.webp"},
  {
    id: "CY-005-paphos-castle",
    type: "landmark",
    parent: "CY-005",
    coords: [32.4069, 34.7536],
    name: { de: "Burg Paphos", hu: "Páfoszi vár", ro: "Castelul din Paphos", en: "Paphos Castle" },
    description: {
      de: "Eine am Hafen von Paphos gelegene mittelalterliche Festung.",
      hu: "Páfosz kikötőjében található középkori erődítmény.",
      ro: "O fortăreață medievală situată în portul Paphos.",
      en: "A medieval fortress located at the edge of Paphos harbor."
    },
    facts: {
      de: ["Ursprünglich als byzantinische Festung zum Schutz des Hafens erbaut.", "Es wurde von den Lusignans und später von den Osmanen umgebaut.", "Heute dient es als Kulisse für das jährliche Paphos Aphrodite Festival."],
      hu: ["Eredetileg bizánci erődként épült a kikötő védelmére.", "A Lusignanok, majd később az oszmánok építették újjá.", "Ma az évenkénti Páfoszi Aphrodité Fesztivál díszleteként szolgál."],
      ro: ["Construit inițial ca o fortăreață bizantină pentru a proteja portul.", "A fost reconstruit de familia Lusignan și ulterior de otomani.", "Astăzi servește ca decor pentru festivalul anual de operă din Paphos."],
      en: ["Originally built as a Byzantine fort to protect the harbor.", "It was rebuilt by the Lusignans and later by the Ottomans.", "Today it serves as the backdrop for the annual Paphos Aphrodite Festival."]
    },
    descriptionAdvanced: {
      de: "Die Burg von Paphos ist ein markantes Wahrzeichen am westlichen Ende des Hafens von Kato Paphos. Ihre Geschichte ist turbulent: Ursprünglich als byzantinische Festung erbaut, wurde sie im 13. Jahrhundert von den Lusignans wiederaufgebaut, nur um kurz darauf von den Venezianern demontiert zu werden. Die Osmanen bauten die Festung nach ihrer Eroberung der Insel im 16. Jahrhundert wieder auf und verstärkten sie. Die heutige, eher gedrungene Struktur ist hauptsächlich osmanischen Ursprungs. Sie diente als Festung, Gefängnis und während der britischen Herrschaft sogar als Salzlager. Heute ist die Burg für Besucher geöffnet und bietet von ihrem Dach aus eine hervorragende Aussicht auf den Hafen und die archäologische Stätte.",
      hu: "",
      ro: "Castelul din Paphos este un reper proeminent la capătul vestic al portului Kato Paphos. Istoria sa este turbulentă: construit inițial ca o fortăreață bizantină, a fost reconstruit de Lusignani în secolul al XIII-lea, doar pentru a fi demontat la scurt timp după aceea de venețieni. Otomanii au reconstruit și întărit fortăreața după cucerirea insulei în secolul al XVI-lea. Structura actuală, destul de scundă, este în principal de origine otomană. A servit drept fortăreață, închisoare și chiar ca depozit de sare în timpul dominației britanice. Astăzi, castelul este deschis vizitatorilor și oferă de pe acoperișul său o priveliște excelentă asupra portului și a sitului arheologic.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Ein Erdbeben im Jahr 1222 zerstörte die ursprüngliche Lusignan-Burg.",
        "Die nahe gelegene fränkische Festung Saranta Kolones war die Vorgängerin der heutigen Burg.",
        "Die Burg hat nur wenige kleine Räume im Inneren.",
        "Sie ist durch eine kleine Brücke mit dem Festland verbunden.",
        "Die Burg ist ein zentraler Punkt für viele kulturelle Veranstaltungen in Paphos.",
        "Sie steht unter dem Schutz des UNESCO-Weltkulturerbes als Teil des archäologischen Parks.",
        "Die Osmanen nutzten die Burg zur Verteidigung gegen Piratenangriffe."
      ],
      hu: [],
      ro: [
        "Un cutremur din 1222 a distrus castelul original al Lusignanilor.",
        "Fortăreața francă Saranta Kolones din apropiere a fost predecesoarea castelului actual.",
        "Castelul are doar câteva încăperi mici în interior.",
        "Este conectat de uscat printr-un pod mic.",
        "Castelul este un punct central pentru multe evenimente culturale din Paphos.",
        "Este protejat de UNESCO ca parte a parcului arheologic.",
        "Otomanii au folosit castelul pentru a se apăra împotriva atacurilor piraților."
      ],
      en: []
    }, image: "/poi-images/CY-005-paphos-castle.webp"},
  {
    id: "CY-005-adonis-baths",
    type: "landmark",
    parent: "CY-005",
    coords: [32.4436, 34.8697],
    name: { de: "Adonis-Bäder", hu: "Adonisz-fürdő", ro: "Băile lui Adonis", en: "Adonis Baths" },
    description: {
      de: "Ein malerischer Wasserfall und natürliches Schwimmbecken in der Nähe von Paphos.",
      hu: "Festői vízesés és természetes medence Páfosz közelében.",
      ro: "O cascadă pitorească și o piscină naturală lângă Paphos.",
      en: "A picturesque waterfall and natural swimming pool located near Paphos."
    },
    facts: {
      de: ["Der Legende nach trafen sich hier Adonis und Aphrodite.", "Unter dem Wasserfall befindet sich eine tiefe Lagune.", "Ein beliebter Ort für Naturliebhaber und Schwimmer."],
      hu: ["A legenda szerint Adonisz és Aphrodité itt találkoztak.", "A vízesés alatt egy mély lagúna található.", "A természetkedvelők és úszók kedvelt helye."],
      ro: ["Conform legendei, Adonis și Afrodita s-au întâlnit aici.", "Sub cascadă se află o lagună adâncă.", "Un loc popular pentru iubitorii de natură și înotători."],
      en: ["According to legend, Adonis and Aphrodite used to meet here.", "There is a deep lagoon underneath the waterfall.", "A popular spot for nature lovers and swimmers."]
    },
    descriptionAdvanced: {
      de: "Die Adonis-Bäder sind eine kleine, idyllische Oase, versteckt in einem üppigen Tal in der Nähe des Dorfes Kili. Der Ort besteht aus einem kleinen Wasserfall, der in ein tiefes, smaragdgrünes Becken stürzt, das von Felsen und dichter Vegetation umgeben ist. Der Legende nach war dies der Ort, an dem die Göttin Aphrodite ihren Geliebten, den schönen Adonis, traf. Besucher können im kühlen Wasser des Beckens schwimmen, sich unter dem Wasserfall erfrischen oder sich an den Seilen ins Wasser schwingen. Um den Ort ranken sich Mythen über Fruchtbarkeit und ewige Liebe. Statuen von Adonis, Aphrodite und anderen griechischen Göttern tragen zur mythischen Atmosphäre bei.",
      hu: "",
      ro: "Băile lui Adonis sunt o mică oază idilică, ascunsă într-o vale luxuriantă lângă satul Kili. Locul constă dintr-o mică cascadă care se varsă într-un bazin adânc, de culoare smarald, înconjurat de stânci și vegetație deasă. Legenda spune că acesta era locul unde zeița Afrodita se întâlnea cu iubitul ei, frumosul Adonis. Vizitatorii pot înota în apa răcoroasă a bazinului, se pot răcori sub cascadă sau se pot balansa în apă agățați de frânghii. Locul este învăluit în mituri despre fertilitate și dragoste veșnică. Statuile lui Adonis, Afroditei și altor zei greci contribuie la atmosfera mitică.",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Legende nach wurden viele Kinder von Aphrodite und Adonis an diesem Ort gezeugt.",
        "Das Wasser ist auch im Sommer sehr kalt.",
        "Ein kleines Museum vor Ort zeigt traditionelle Werkzeuge und Artefakte.",
        "Die Anfahrt zu den Bädern erfolgt über eine unbefestigte Straße.",
        "Es wird behauptet, dass das Berühren der Statuen von Adonis und Aphrodite die Fruchtbarkeit fördern kann.",
        "Die Umgebung ist reich an einheimischer Flora und Fauna.",
        "Der Ort ist in Privatbesitz und es wird eine Eintrittsgebühr erhoben."
      ],
      hu: [],
      ro: [
        "Legenda spune că mulți dintre copiii Afroditei și ai lui Adonis au fost concepuți în acest loc.",
        "Apa este foarte rece chiar și vara.",
        "Un mic muzeu local expune unelte și artefacte tradiționale.",
        "Accesul la băi se face pe un drum neasfaltat.",
        "Se pretinde că atingerea statuilor lui Adonis și Afrodita poate spori fertilitatea.",
        "Zona înconjurătoare este bogată în floră și faună locală.",
        "Locul este proprietate privată și se percepe o taxă de intrare."
      ],
      en: []
    }
  }
];

export const cyprusAllPoi: POI[] = [cyprusCountry,
  ...cyprusRegions, ...cyprusOtherPoi];

