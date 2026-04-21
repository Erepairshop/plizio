import type { POI } from "./poi";

export const sloveniaCountry: POI = {
  id: "country-slovenia",
  type: "country",
  parent: "europe",
  coords: [14.9955, 46.1512],
  name: {
    de: "Slowenien",
    hu: "Szlovénia",
    ro: "Slovenia",
    en: "Slovenia"
  },
  description: {
    de: "Slowenien ist ein Land in Mitteleuropa, das für seine Berge, Skigebiete und Seen bekannt ist. Es ist eines der grünsten Länder der Welt und bietet eine unglaubliche Vielfalt auf kleinem Raum – von den Alpen bis zur Adria.",
    hu: "Szlovénia egy közép-európai ország, amely hegyeiről, síközpontjairól és tavairól ismert. A világ egyik legzöldebb országa, amely kis területen hihetetlen változatosságot kínál – az Alpoktól az Adriai-tengerig.",
    ro: "Slovenia este o țară din Europa Centrală, cunoscută pentru munții, stațiunile de schi și lacurile sale. Este una dintre cele mai verzi țări din lume și oferă o diversitate incredibilă pe un spațiu restrâns – de la Alpi până la Marea Adriatică.",
    en: "Slovenia is a country in Central Europe, known for its mountains, ski resorts, and lakes. It is one of the greenest countries in the world and offers incredible diversity in a small space – from the Alps to the Adriatic Sea."
  },
  facts: {
    de: [
      "Mehr als die Hälfte der Landesfläche ist mit Wald bedeckt.",
      "Slowenien hat eine der größten Braunbärenpopulationen in Europa.",
      "Das Land hat nur eine einzige Insel – im Bleder See.",
      "Slowenien ist das einzige Land, das das Wort 'LOVE' in seinem Namen trägt."
    ],
    hu: [
      "Az ország területének több mint felét erdő borítja.",
      "Szlovéniában található Európa egyik legnagyobb barna medve populációja.",
      "Az országnak csak egyetlen szigete van – a Bledi-tavon.",
      "Szlovénia az egyetlen ország, amelynek nevében szerepel a 'LOVE' (szeretet) szó."
    ],
    ro: [
      "Mai mult de jumătate din suprafața țării este acoperită de păduri.",
      "Slovenia are una dintre cele mai mari populații de urși bruni din Europa.",
      "Țara are o singură insulă – pe lacul Bled.",
      "Slovenia este singura țară care are cuvântul 'LOVE' în numele său."
    ],
    en: [
      "More than half of the country's area is covered by forest.",
      "Slovenia has one of the largest brown bear populations in Europe.",
      "The country has only one island – in Lake Bled.",
      "Slovenia is the only country with the word 'LOVE' in its name."
    ]
  },
  image: "/geo-images/slovenia/country-slovenia.webp"
};

export const sloveniaRegions: POI[] = [
  {
    id: "city-ljubljana",
    type: "city",
    parent: "country-slovenia",
    coords: [14.5058, 46.0569],
    name: {
      de: "Laibach",
      hu: "Ljubljana",
      ro: "Ljubljana",
      en: "Ljubljana"
    },
    description: {
      de: "Ljubljana, die Hauptstadt Sloweniens, ist eine grüne Stadt mit einer entspannten Atmosphäre. Sie ist bekannt für ihre malerische Altstadt, die Drachenbrücke und die Burg, die über der Stadt thront.",
      hu: "Ljubljana, Szlovénia fővárosa egy zöld város, nyugodt légkörrel. Híres festői óvárosáról, a Sárkány-hídról és a város fölé magasodó várról.",
      ro: "Ljubljana, capitala Sloveniei, este un oraș verde cu o atmosferă relaxată. Este cunoscut pentru orașul său vechi pitoresc, Podul Dragonului și castelul care domină orașul.",
      en: "Ljubljana, the capital of Slovenia, is a green city with a relaxed atmosphere. It is known for its picturesque old town, the Dragon Bridge, and the castle that towers over the city."
    },
    facts: {
      de: [
        "Ljubljana wurde 2016 zur Grünen Hauptstadt Europas ernannt.",
        "Das Wahrzeichen der Stadt ist der Drache.",
        "Die Drei Brücken (Tromostovje) sind ein berühmtes Werk des Architekten Jože Plečnik.",
        "Das Stadtzentrum ist fast vollständig autofrei."
      ],
      hu: [
        "Ljubljana 2016-ban elnyerte Európa Zöld Fővárosa címet.",
        "A város jelképe a sárkány.",
        "A Hármas híd (Tromostovje) Jože Plečnik építész híres alkotása.",
        "A városközpont szinte teljesen autómentes."
      ],
      ro: [
        "Ljubljana a fost numită Capitala Verde a Europei în 2016.",
        "Simbolul orașului este dragonul.",
        "Cele Trei Poduri (Tromostovje) sunt o operă celebră a arhitectului Jože Plečnik.",
        "Centrul orașului este aproape în întregime pietonal."
      ],
      en: [
        "Ljubljana was named the European Green Capital in 2016.",
        "The symbol of the city is the dragon.",
        "The Triple Bridge (Tromostovje) is a famous work by architect Jože Plečnik.",
        "The city center is almost entirely car-free."
      ]
    },
    image: "/geo-images/slovenia/city-ljubljana.webp"
  },
  {
    id: "nature-lake-bled",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.0938, 46.3639],
    name: {
      de: "Bleder See",
      hu: "Bledi-tó",
      ro: "Lacul Bled",
      en: "Lake Bled"
    },
    description: {
      de: "Der Bleder See ist einer der malerischsten Orte Sloweniens. In der Mitte des Sees liegt eine kleine Insel mit einer Kirche, und auf einem Felsen über dem See steht die Burg von Bled.",
      hu: "A Bledi-tó Szlovénia egyik legfestőibb helye. A tó közepén egy kis sziget található egy templommal, a tó feletti sziklán pedig a bledi vár áll.",
      ro: "Lacul Bled este unul dintre cele mai pitorești locuri din Slovenia. În mijlocul lacului se află o mică insulă cu o biserică, iar pe o stâncă deasupra lacului se află castelul Bled.",
      en: "Lake Bled is one of the most picturesque places in Slovenia. In the middle of the lake lies a small island with a church, and on a rock above the lake stands Bled Castle."
    },
    facts: {
      de: [
        "Man kann die Insel mit traditionellen Holzbooten namens 'Pletna' erreichen.",
        "Es gibt eine Legende, dass das Läuten der Kirchenglocke Wünsche erfüllt.",
        "Die Bleder Cremeschnitte (Kremna rezina) ist eine lokale Spezialität.",
        "Die Burg von Bled ist die älteste Burg Sloweniens."
      ],
      hu: [
        "A szigetet hagyományos 'Pletna' nevű facsónakokkal lehet megközelíteni.",
        "A legenda szerint a templom harangjának megkongatása teljesíti a kívánságokat.",
        "A bledi krémes (Kremna rezina) helyi különlegesség.",
        "A bledi vár Szlovénia legrégebbi vára."
      ],
      ro: [
        "Se poate ajunge pe insulă cu bărci tradiționale din lemn numite 'Pletna'.",
        "Există o legendă conform căreia tragerea clopotului bisericii îndeplinește dorințe.",
        "Prăjitura cu cremă de Bled (Kremna rezina) este o specialitate locală.",
        "Castelul Bled este cel mai vechi castel din Slovenia."
      ],
      en: [
        "You can reach the island with traditional wooden boats called 'Pletna'.",
        "There is a legend that ringing the church bell fulfills wishes.",
        "The Bled cream cake (Kremna rezina) is a local specialty.",
        "Bled Castle is the oldest castle in Slovenia."
      ]
    },
    image: "/geo-images/slovenia/nature-lake-bled.webp"
  },
  {
    id: "city-maribor",
    type: "city",
    parent: "country-slovenia",
    coords: [15.6459, 46.5547],
    name: {
      de: "Marburg an der Drau",
      hu: "Maribor",
      ro: "Maribor",
      en: "Maribor"
    },
    description: {
      de: "Maribor ist die zweitgrößte Stadt Sloweniens und liegt an der Drau. Sie ist das Zentrum der slowakischen Steiermark und bekannt für ihre Weinbautradition.",
      hu: "Maribor Szlovénia második legnagyobb városa, a Dráva partján fekszik. A szlovén Stájerország központja, és híres bortermelő hagyományairól.",
      ro: "Maribor este al doilea oraș ca mărime din Slovenia și este situat pe râul Drava. Este centrul Stiriei slovene și este cunoscut pentru tradiția sa viticolă.",
      en: "Maribor is the second-largest city in Slovenia and is situated on the Drava River. It is the center of Slovenian Styria and known for its winemaking tradition."
    },
    facts: {
      de: [
        "In Maribor wächst die älteste Weinrebe der Welt (über 400 Jahre alt).",
        "Die Stadt war 2012 Kulturhauptstadt Europas.",
        "Das nahegelegene Pohorje-Gebirge ist ein beliebtes Skigebiet.",
        "Maribor hat eine wunderschöne Altstadt am Flussufer (Lent)."
      ],
      hu: [
        "Mariborban nő a világ legöregebb szőlőtőkéje (több mint 400 éves).",
        "A város 2012-ben Európa Kulturális Fővárosa volt.",
        "A közeli Pohorje-hegység népszerű síközpont.",
        "Maribornak gyönyörű folyóparti óvárosa van (Lent)."
      ],
      ro: [
        "În Maribor crește cea mai veche viță de vie din lume (peste 400 de ani).",
        "Orașul a fost Capitală Europeană a Culturii în 2012.",
        "Munții Pohorje din apropiere sunt o stațiune de schi populară.",
        "Maribor are un oraș vechi frumos pe malul râului (Lent)."
      ],
      en: [
        "The oldest vine in the world (over 400 years old) grows in Maribor.",
        "The city was the European Capital of Culture in 2012.",
        "The nearby Pohorje Mountains are a popular ski resort.",
        "Maribor has a beautiful riverside old town (Lent)."
      ]
    },
    image: "/geo-images/slovenia/city-maribor.webp"
  },
  {
    id: "city-piran",
    type: "city",
    parent: "country-slovenia",
    coords: [13.5683, 45.5283],
    name: {
      de: "Pirano",
      hu: "Piran",
      ro: "Piran",
      en: "Piran"
    },
    description: {
      de: "Piran ist eine malerische Stadt an der Adriaküste Sloweniens. Sie ist bekannt für ihre venezianische Architektur, enge Gassen und den Tartini-Platz.",
      hu: "Piran egy festői város Szlovénia adriai partvidékén. Velencei építészetéről, szűk utcáiról és a Tartini térről ismert.",
      ro: "Piran este un oraș pitoresc de pe coasta adriatică a Sloveniei. Este cunoscut pentru arhitectura sa venețiană, străzile înguste și Piața Tartini.",
      en: "Piran is a picturesque town on Slovenia's Adriatic coast. It is known for its Venetian architecture, narrow streets, and Tartini Square."
    },
    facts: {
      de: [
        "Piran war über 500 Jahre lang Teil der Republik Venedig.",
        "Die Stadt ist der Geburtsort des Komponisten Giuseppe Tartini.",
        "Die Stadtmauern bieten einen Panoramablick über die Adria.",
        "Die Salzpfannen von Sečovlje in der Nähe produzieren hochwertiges Salz."
      ],
      hu: [
        "Piran több mint 500 évig a Velencei Köztársaság része volt.",
        "A város Giuseppe Tartini zeneszerző szülőhelye.",
        "A városfalakról panorámás kilátás nyílik az Adriai-tengerre.",
        "A közeli Sečovlje sólepárlók kiváló minőségű sót termelnek."
      ],
      ro: [
        "Piran a făcut parte din Republica Veneția timp de peste 500 de ani.",
        "Orașul este locul de naștere al compozitorului Giuseppe Tartini.",
        "Zidurile orașului oferă o vedere panoramică asupra Mării Adriatice.",
        "Salinele Sečovlje din apropiere produc sare de înaltă calitate."
      ],
      en: [
        "Piran was part of the Republic of Venice for over 500 years.",
        "The town is the birthplace of the composer Giuseppe Tartini.",
        "The city walls offer a panoramic view over the Adriatic Sea.",
        "The nearby Sečovlje salt pans produce high-quality salt."
      ]
    },
    image: "/geo-images/slovenia/city-piran.webp"
  },
  {
    id: "nature-postojna-cave",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.2039, 45.7831],
    name: {
      de: "Adelsberger Grotte",
      hu: "Postojnai-barlang",
      ro: "Peștera Postojna",
      en: "Postojna Cave"
    },
    description: {
      de: "Die Höhle von Postojna ist eines der größten und meistbesuchten Karsthöhlensysteme der Welt. Sie ist bekannt für ihre beeindruckenden Stalaktiten und Stalagmiten.",
      hu: "A Postojnai-barlang a világ egyik legnagyobb és leglátogatottabb karsztbarlang-rendszere. Lenyűgöző sztalaktitjairól és sztalagmitjairól ismert.",
      ro: "Peștera Postojna este unul dintre cele mai mari și mai vizitate sisteme de peșteri carstice din lume. Este cunoscută pentru stalactitele și stalagmitele sale impresionante.",
      en: "Postojna Cave is one of the largest and most visited karst cave systems in the world. It is known for its impressive stalactites and stalagmites."
    },
    facts: {
      de: [
        "Eine elektrische Höhlenbahn führt die Besucher tief in das Innere.",
        "Die Höhle ist die Heimat des Grottenolms (Proteus anguinus).",
        "Das Höhlensystem ist über 24 km lang.",
        "Die Höhle hat eine konstante Temperatur von etwa 10 °C."
      ],
      hu: [
        "Elektromos barlangi vasút viszi a látogatókat mélyen a barlang belsejébe.",
        "A barlang a barlangi vakgőte (Proteus anguinus) otthona.",
        "A barlangrendszer több mint 24 km hosszú.",
        "A barlang állandó hőmérséklete körülbelül 10 °C."
      ],
      ro: [
        "Un tren electric de peșteră duce vizitatorii adânc în interior.",
        "Peștera este casa olmului (Proteus anguinus).",
        "Sistemul de peșteri are o lungime de peste 24 km.",
        "Peștera are o temperatură constantă de aproximativ 10 °C."
      ],
      en: [
        "An electric cave train takes visitors deep into the interior.",
        "The cave is home to the olm (Proteus anguinus), a unique aquatic salamander.",
        "The cave system is over 24 km long.",
        "The cave has a constant temperature of about 10 °C."
      ]
    },
    image: "/geo-images/slovenia/nature-postojna-cave.webp"
  },
  {
    id: "castle-predjama",
    type: "historical",
    parent: "country-slovenia",
    coords: [14.1269, 45.8158],
    name: {
      de: "Höhlenburg Lueg",
      hu: "Predjamai vár",
      ro: "Castelul Predjama",
      en: "Predjama Castle"
    },
    description: {
      de: "Die Burg Predjama ist eine einzigartige Renaissance-Burg, die in eine 123 Meter hohe Felswand gebaut wurde. Sie ist die größte Höhlenburg der Welt.",
      hu: "A Predjamai vár egy egyedülálló reneszánsz vár, amelyet egy 123 méter magas sziklafalba építettek. Ez a világ legnagyobb barlangvára.",
      ro: "Castelul Predjama este un castel renascentist unic, construit într-o stâncă înaltă de 123 de metri. Este cel mai mare castel de peșteră din lume.",
      en: "Predjama Castle is a unique Renaissance castle built into a 123-meter-high cliff face. It is the largest cave castle in the world."
    },
    facts: {
      de: [
        "Hinter der Burg befindet sich ein geheimes Höhlensystem.",
        "Die Burg ist berühmt für die Legende des Raubritters Erasmus von Eggenberg.",
        "Sie steht im Guinness-Buch der Rekorde als größte Höhlenburg.",
        "Die Burg wurde im 12. Jahrhundert zum ersten Mal erwähnt."
      ],
      hu: [
        "A vár mögött egy titkos barlangrendszer található.",
        "A vár híres rablólovagjáról, Erasmus von Eggenbergről szóló legendáról.",
        "A Guinness Rekordok Könyvében a legnagyobb barlangvárként szerepel.",
        "A várat először a 12. században említik."
      ],
      ro: [
        "În spatele castelului se află un sistem de peșteri secrete.",
        "Castelul este faimos pentru legenda cavalerului Erasmus von Eggenberg.",
        "Este înscris în Guinness World Records ca fiind cel mai mare castel de peșteră.",
        "Castelul a fost menționat pentru prima dată în secolul al XII-lea."
      ],
      en: [
        "A secret cave system lies behind the castle.",
        "The castle is famous for the legend of the robber knight Erasmus of Lueg.",
        "It is listed in the Guinness World Records as the largest cave castle.",
        "The castle was first mentioned in the 12th century."
      ]
    },
    image: "/geo-images/slovenia/castle-predjama.webp"
  },
  {
    id: "nature-triglav",
    type: "landmark",
    parent: "country-slovenia",
    coords: [13.8367, 46.3783],
    name: {
      de: "Triglav Nationalpark",
      hu: "Triglav Nemzeti Park",
      ro: "Parcul Național Triglav",
      en: "Triglav National Park"
    },
    description: {
      de: "Der Triglav Nationalpark ist der einzige Nationalpark Sloweniens und umfasst den größten Teil der Julischen Alpen. Er ist nach dem Berg Triglav benannt, dem höchsten Gipfel des Landes.",
      hu: "A Triglav Nemzeti Park Szlovénia egyetlen nemzeti parkja, amely a Júliai-Alpok nagy részét magában foglalja. Az ország legmagasabb csúcsáról, a Triglav-hegyről kapta a nevét.",
      ro: "Parcul Național Triglav este singurul parc național din Slovenia și cuprinde cea mai mare parte a Alpilor Iulieni. Este numit după muntele Triglav, cel mai înalt vârf din țară.",
      en: "Triglav National Park is the only national park in Slovenia and covers most of the Julian Alps. It is named after Mount Triglav, the highest peak in the country."
    },
    facts: {
      de: [
        "Der Triglav ist 2.864 Meter hoch und ein nationales Symbol.",
        "Der Park beherbergt den Bohinj-See, den größten natürlichen See Sloweniens.",
        "Die Vintgar-Klamm ist eine der spektakulärsten Schluchten im Park.",
        "Der Park ist ein Paradies für Bergsteiger und Naturliebhaber."
      ],
      hu: [
        "A Triglav 2864 méter magas és nemzeti jelkép.",
        "A parkban található a Bohinji-tó, Szlovénia legnagyobb természetes tava.",
        "A Vintgar-szurdok a park egyik leglátványosabb szurdoka.",
        "A park a hegymászók és a természetkedvelők paradicsoma."
      ],
      ro: [
        "Triglav are 2.864 de metri înălțime și este un simbol național.",
        "Parcul găzduiește lacul Bohinj, cel mai mare lac natural din Slovenia.",
        "Cheile Vintgar sunt unele dintre cele mai spectaculoase chei din parc.",
        "Parcul este un paradis pentru alpiniști și iubitorii de natură."
      ],
      en: [
        "Mount Triglav is 2,864 meters high and is a national symbol.",
        "The park is home to Lake Bohinj, the largest natural lake in Slovenia.",
        "The Vintgar Gorge is one of the most spectacular gorges in the park.",
        "The park is a paradise for mountaineers and nature lovers."
      ]
    },
    image: "/geo-images/slovenia/nature-triglav.webp"
  },
  {
    id: "nature-soca-valley",
    type: "landmark",
    parent: "country-slovenia",
    coords: [13.5833, 46.3333],
    name: {
      de: "Soča-Tal",
      hu: "Soča-völgy",
      ro: "Valea Soča",
      en: "Soča Valley"
    },
    description: {
      de: "Das Soča-Tal ist bekannt für den smaragdgrünen Fluss Soča, der als einer der schönsten Flüsse Europas gilt. Das Tal bietet zahlreiche Möglichkeiten für Outdoor-Aktivitäten.",
      hu: "A Soča-völgy a smaragdzöld Soča folyóról ismert, amelyet Európa egyik legszebb folyójának tartanak. A völgy számos lehetőséget kínál szabadtéri tevékenységekre.",
      ro: "Valea Soča este cunoscută pentru râul Soča de culoare smarald, considerat unul dintre cele mai frumoase râuri din Europa. Valea oferă numeroase oportunități pentru activități în aer liber.",
      en: "The Soča Valley is known for the emerald-green Soča River, considered one of the most beautiful rivers in Europe. The valley offers numerous opportunities for outdoor activities."
    },
    facts: {
      de: [
        "Der Fluss Soča ist berühmt für seine markante smaragdgrüne Farbe.",
        "Das Tal war Schauplatz schwerer Kämpfe im Ersten Weltkrieg (Isonzo-Schlachten).",
        "Es ist ein beliebtes Ziel für Wildwasser-Rafting und Kajakfahren.",
        "Die Soča-Forelle ist eine endemische Fischart des Flusses."
      ],
      hu: [
        "A Soča folyó híres jellegzetes smaragdzöld színéről.",
        "A völgy az első világháború súlyos harcainak helyszíne volt (Isonzó-csaták).",
        "Népszerű úti cél vadvízi evezéshez és kajakozáshoz.",
        "A Soča-pisztráng a folyó endemikus halfaja."
      ],
      ro: [
        "Râul Soča este faimos pentru culoarea sa distinctivă de smarald.",
        "Valea a fost locul unor lupte grele în Primul Război Mondial (bătăliile de pe Isonzo).",
        "Este o destinație populară pentru rafting și caiac.",
        "Păstrăvul de Soča este o specie de pește endemică a râului."
      ],
      en: [
        "The Soča River is famous for its distinct emerald-green color.",
        "The valley was the scene of heavy fighting in World War I (Battles of the Isonzo).",
        "It is a popular destination for whitewater rafting and kayaking.",
        "The Soča trout is an endemic fish species of the river."
      ]
    },
    image: "/geo-images/slovenia/nature-soca-valley.webp"
  }
];

export const sloveniaCities: POI[] = [
  {
    id: "city-celje",
    type: "city",
    parent: "country-slovenia",
    coords: [15.2675, 46.2311],
    name: {
      de: "Cilli",
      hu: "Celje",
      ro: "Celje",
      en: "Celje"
    },
    description: {
      de: "Celje ist eine historische Stadt an der Savinja und war einst Sitz mächtiger Grafenfamilien im mittelalterlichen Slowenien.",
      hu: "Celje történelmi város a Savinja folyó mellett, és egykor a középkori Szlovénia egyik hatalmas grófi családjának székhelye volt.",
      ro: "Celje este un oraș istoric de pe râul Savinja și a fost odinioară reședința unor puternice familii de conți în Slovenia medievală.",
      en: "Celje is a historic city on the Savinja River and was once the seat of powerful comital families in medieval Slovenia."
    },
    facts: {
      de: [
        "Die Grafen von Cilli gehörten zu den mächtigsten Adelsfamilien der Region.",
        "Die Alte Burg von Celje thront über der Stadt.",
        "Der historische Kern verbindet römisches Erbe mit dem Mittelalter.",
        "Celje ist ein regionales Verwaltungs- und Kulturzentrum."
      ],
      hu: [
        "A Cillei grófok a térség egyik leghatalmasabb nemesi családjai közé tartoztak.",
        "A celjei öreg vár a város fölé magasodik.",
        "A történelmi központ római örökséget és középkori rétegeket is őriz.",
        "Celje regionális közigazgatási és kulturális központ."
      ],
      ro: [
        "Conții de Cilli au fost una dintre cele mai puternice familii nobiliare din regiune.",
        "Castelul Vechi din Celje domină orașul.",
        "Nucleul istoric combină moștenirea romană cu Evul Mediu.",
        "Celje este un centru regional administrativ și cultural."
      ],
      en: [
        "The Counts of Cilli were among the region's most powerful noble families.",
        "Old Celje Castle towers above the city.",
        "The historic core combines Roman heritage with the Middle Ages.",
        "Celje is a regional administrative and cultural center."
      ]
    },
    image: "/geo-images/slovenia/city-celje.webp"
  },
  {
    id: "city-kranj",
    type: "city",
    parent: "country-slovenia",
    coords: [14.3555, 46.2389],
    name: {
      de: "Krainburg",
      hu: "Kranj",
      ro: "Kranj",
      en: "Kranj"
    },
    description: {
      de: "Kranj ist die Hauptstadt der Region Gorenjska und eine historische Stadt oberhalb von Flussschluchten mit starkem kulturellem Erbe.",
      hu: "Kranj Gorenjska régió központja, történelmi város folyószurdokok fölött, erős kulturális örökséggel.",
      ro: "Kranj este centrul regiunii Gorenjska și un oraș istoric deasupra cheilor râurilor, cu o moștenire culturală puternică.",
      en: "Kranj is the center of the Gorenjska region and a historic city above river gorges with a strong cultural heritage."
    },
    facts: {
      de: [
        "Kranj ist eng mit dem Dichter France Prešeren verbunden.",
        "Die Altstadt liegt auf einem Felsrücken zwischen zwei Flüssen.",
        "Die Stadt ist ein wichtiges Zentrum für die Region Gorenjska.",
        "Unter der Stadt verlaufen historische Tunnel und Schutzanlagen."
      ],
      hu: [
        "Kranj szorosan kapcsolódik France Prešeren költőhöz.",
        "Az óváros két folyó közötti sziklagerincen fekszik.",
        "A város Gorenjska régió fontos központja.",
        "A város alatt történelmi alagutak és védelmi létesítmények húzódnak."
      ],
      ro: [
        "Kranj este strâns legat de poetul France Prešeren.",
        "Orașul vechi se află pe o creastă stâncoasă între două râuri.",
        "Orașul este un centru important al regiunii Gorenjska.",
        "Sub oraș există tuneluri istorice și structuri defensive."
      ],
      en: [
        "Kranj is closely associated with the poet France Prešeren.",
        "The old town sits on a rocky ridge between two rivers.",
        "The city is an important center of the Gorenjska region.",
        "Historical tunnels and defensive structures run beneath the city."
      ]
    },
    image: "/geo-images/slovenia/city-kranj.webp"
  },
  {
    id: "city-koper",
    type: "city",
    parent: "country-slovenia",
    coords: [13.7294, 45.5469],
    name: {
      de: "Koper",
      hu: "Koper",
      ro: "Koper",
      en: "Koper"
    },
    description: {
      de: "Koper ist Sloweniens wichtigste Küstenstadt und ein bedeutender Hafen mit starker venezianischer Prägung.",
      hu: "Koper Szlovénia legfontosabb tengerparti városa és jelentős kikötő, erős velencei hatással.",
      ro: "Koper este cel mai important oraș de coastă al Sloveniei și un port major cu o puternică amprentă venețiană.",
      en: "Koper is Slovenia's most important coastal city and a major port with a strong Venetian influence."
    },
    facts: {
      de: [
        "Die Altstadt zeigt viele venezianische Paläste und Plätze.",
        "Koper ist der größte Hafen Sloweniens.",
        "Der Tito-Platz ist das historische Herz der Stadt.",
        "Die Küste verbindet hier mediterrane und mitteleuropäische Einflüsse."
      ],
      hu: [
        "Az óvárosban sok velencei palota és tér látható.",
        "Koper Szlovénia legnagyobb kikötője.",
        "A Tito tér a város történelmi szíve.",
        "A partvidéken mediterrán és közép-európai hatások keverednek."
      ],
      ro: [
        "Centrul vechi are multe palate și piețe venețiene.",
        "Koper este cel mai mare port al Sloveniei.",
        "Piața Tito este inima istorică a orașului.",
        "Coasta îmbină influențe mediteraneene și central-europene."
      ],
      en: [
        "The old town features many Venetian palaces and squares.",
        "Koper is Slovenia's largest port.",
        "Tito Square is the historic heart of the city.",
        "The coast here blends Mediterranean and Central European influences."
      ]
    },
    image: "/geo-images/slovenia/city-koper.webp"
  },
  {
    id: "city-ptuj",
    type: "city",
    parent: "country-slovenia",
    coords: [15.8707, 46.4194],
    name: {
      de: "Ptuj",
      hu: "Ptuj",
      ro: "Ptuj",
      en: "Ptuj"
    },
    description: {
      de: "Ptuj ist eine der ältesten Städte Sloweniens an der Drau. Das Schloss, die Altstadt und die römischen Spuren machen den Ort sofort erkennbar. Als Wein- und Karnevalsstandort liefert Ptuj starke Suchbegriffe für Kultur- und Städtereisen. Wer authentische slowenische Geschichte und kurze Wege sucht, findet hier ein ideales Ziel.",
      hu: "Ptuj Szlovénia egyik legrégebbi városa a Dráva partján. A vár, az óváros és a római emlékek azonnal felismerhetővé teszik a települést. Bor- és karneválvárosként Ptuj erős kulcsszavakat ad a kulturális és városi utazásokhoz. Aki hiteles szlovén történelmet és rövid sétákat keres, itt ideális célpontot talál.",
      ro: "Ptuj este unul dintre cele mai vechi orașe din Slovenia, pe malul râului Drava. Castelul, centrul vechi și urmele romane fac orașul ușor de recunoscut. Ca oraș al vinului și al carnavalului, Ptuj oferă termeni foarte buni pentru turism cultural și city break. Pentru istorie autentică slovena și trasee scurte, este o alegere excelentă.",
      en: "Ptuj is one of the oldest cities in Slovenia, on the Drava River. The castle, old town, and Roman traces make the city easy to recognize. As a wine and carnival city, Ptuj is strong for cultural travel and city break SEO. For authentic Slovenian history and short walking routes, it is an ideal stop."
    },
    facts: {
      de: [
        "Eine der ältesten Städte Sloweniens",
        "Lage an der Drau",
        "Ptuj Castle überragt die Altstadt",
        "Bekannt für Kurentovanje",
        "Starkes Zentrum für Wein und Tradition"
      ],
      hu: [
        "Szlovénia egyik legrégebbi városa",
        "A Dráva partján fekszik",
        "A ptuji vár uralja az óvárost",
        "Híres a Kurentovanje karneválról",
        "Erős borászati és hagyományőrző központ"
      ],
      ro: [
        "Unul dintre cele mai vechi orașe din Slovenia",
        "Situat pe râul Drava",
        "Castelul Ptuj domină centrul vechi",
        "Cunoscut pentru Kurentovanje",
        "Centru important pentru vin și tradiții"
      ],
      en: [
        "One of Slovenia's oldest towns",
        "Located on the Drava River",
        "Ptuj Castle overlooks the old town",
        "Famous for the Kurentovanje carnival",
        "Strong wine and heritage identity"
      ]
    },
    image: "/geo-images/slovenia/city-ptuj.webp"
  },
  {
    id: "city-novo-mesto",
    type: "city",
    parent: "country-slovenia",
    coords: [15.1689, 45.8011],
    name: {
      de: "Novo Mesto",
      hu: "Újhely",
      ro: "Novo Mesto",
      en: "Novo Mesto"
    },
    description: {
      de: "Novo Mesto liegt in einer markanten Schleife der Krka und ist das Herz von Dolenjska. Die Stadt verbindet Flusslandschaft, Weinkultur und eine lebendige Altstadt. Für Suchanfragen rund um Südost-Slowenien ist Novo Mesto ein starkes Ziel mit regionalem Profil. Besucher kommen für Spaziergänge, Kultur und die entspannte Atmosphäre am Wasser.",
      hu: "Novo Mesto a Krka folyó látványos kanyarulatában fekszik, és Dolenjska szíve. A város a folyópartot, a borászatot és a pezsgő óvárost egyesíti. Délkelet-Szlovénia kereséseinél Novo Mesto erős, jól pozícionálható célpont. A látogatók sétákért, kultúráért és a vízpart nyugodt hangulatáért érkeznek.",
      ro: "Novo Mesto se află într-o buclă spectaculoasă a râului Krka și este inima regiunii Dolenjska. Orașul combină peisajul de râu, cultura vinului și un centru vechi animat. Pentru căutările despre sud-estul Sloveniei, Novo Mesto este o destinație foarte puternică. Vizitatorii vin pentru plimbări, cultură și atmosfera relaxată de pe malul apei.",
      en: "Novo Mesto sits in a dramatic bend of the Krka River and is the heart of Dolenjska. The city combines river scenery, wine culture, and a lively old town. For southeast Slovenia searches, Novo Mesto is a strong regional destination. Visitors come for walks, culture, and the calm waterside atmosphere."
    },
    facts: {
      de: [
        "Zentrum der Region Dolenjska",
        "Lage an einer Krka-Schleife",
        "Bekannt für Weinbau und Musik",
        "Altstadt mit Hügellage",
        "Wichtiger Standort für Automobilindustrie"
      ],
      hu: [
        "Dolenjska régió központja",
        "A Krka folyó kanyarulatában áll",
        "Híres a borászatról és a zenéről",
        "Dombos fekvésű óváros",
        "Fontos autóipari központ"
      ],
      ro: [
        "Centru al regiunii Dolenjska",
        "Situat pe o buclă a râului Krka",
        "Cunoscut pentru vin și muzică",
        "Centru vechi amplasat pe dealuri",
        "Loc important pentru industria auto"
      ],
      en: [
        "Center of the Dolenjska region",
        "Set on a bend of the Krka River",
        "Known for wine and music",
        "Old town built on hills",
        "Important automotive production base"
      ]
    },
    image: "/geo-images/slovenia/city-novo-mesto.webp"
  },
  {
    id: "city-nova-gorica",
    type: "city",
    parent: "country-slovenia",
    coords: [13.6397, 45.9562],
    name: {
      de: "Nova Gorica",
      hu: "Új-Gorica",
      ro: "Nova Gorica",
      en: "Nova Gorica"
    },
    description: {
      de: "Nova Gorica ist eine moderne Grenzstadt direkt neben Gorizia in Italien. Die breite Planung, die Plätze und die Nähe zur Soča-Region machen sie für Reiseführer und Städtereisen spannend. Als Tor zu Westslowenien ist die Stadt stark für Suchbegriffe rund um Grenze, Kultur und Italien-Nähe. Nova Gorica steht für moderne Stadtentwicklung mit mediterranem Flair.",
      hu: "Nova Gorica egy modern határváros közvetlenül az olaszországi Gorizia mellett. A tágas városszerkezet, a terek és a Soča-régió közelsége különösen érdekessé teszi. Nyugat-Szlovénia kapujaként erős a határ, kultúra és olasz közelség témájú keresésekben. Nova Gorica a modern városfejlesztést mediterrán hangulattal ötvözi.",
      ro: "Nova Gorica este un oraș de frontieră modern, chiar lângă Gorizia, în Italia. Planificarea largă, piețele și apropierea de regiunea Soča îl fac interesant pentru ghiduri și city break-uri. Ca poartă spre vestul Sloveniei, orașul este puternic pe căutări despre graniță, cultură și apropierea de Italia. Nova Gorica combină dezvoltarea modernă cu un aer mediteranean.",
      en: "Nova Gorica is a modern border city right next to Gorizia in Italy. Its open layout, squares, and access to the Soča region make it attractive for guides and city trips. As a gateway to western Slovenia, it is strong for searches about borders, culture, and Italy proximity. Nova Gorica blends modern urban planning with a Mediterranean feel."
    },
    facts: {
      de: [
        "Grenzt direkt an Italien",
        "Moderne Planstadt des 20. Jahrhunderts",
        "Tor zur Soča-Region",
        "Bekannt für Plätze und Casinos",
        "Wichtiger Kulturstandort im Westen"
      ],
      hu: [
        "Közvetlenül Olaszországgal határos",
        "20. századi tervezett város",
        "A Soča-régió kapuja",
        "Tereiről és kaszinóiról ismert",
        "Fontos nyugati kulturális központ"
      ],
      ro: [
        "La granița directă cu Italia",
        "Oraș planificat în secolul XX",
        "Poartă spre regiunea Soča",
        "Cunoscut pentru piețe și cazinouri",
        "Centru cultural important în vest"
      ],
      en: [
        "Borders Italy directly",
        "A planned 20th-century city",
        "Gateway to the Soča region",
        "Known for squares and casinos",
        "Important western cultural hub"
      ]
    },
    image: "/geo-images/slovenia/city-nova-gorica.webp"
  },
  {
    id: "city-velenje",
    type: "city",
    parent: "country-slovenia",
    coords: [15.1107, 46.3627],
    name: {
      de: "Velenje",
      hu: "Velenje",
      ro: "Velenje",
      en: "Velenje"
    },
    description: {
      de: "Velenje ist eine junge Stadt mit starker Industriegeschichte und breiten Straßen. Der See, das Schloss und die Bergkulisse geben ihr ein markantes Profil für Reise- und Standortthemen. Wer Industriestädte in Slowenien sucht, findet in Velenje einen klaren und suchstarken Namen. Die Stadt verbindet Arbeitswelt, Freizeit und einen guten Zugang zu den Savinja-Alpen.",
      hu: "Velenje fiatal város, erős ipari múlttal és széles utcákkal. A tó, a vár és a hegyek látványa jól felismerhető profilt ad neki. Aki szlovén iparvárosokat keres, annak Velenje egy erős, jól kereshető név. A város a munka, a szabadidő és a Savinja-Alpok közelségét egyesíti.",
      ro: "Velenje este un oraș tânăr, cu o istorie industrială puternică și bulevarde largi. Lacul, castelul și fundalul montan îi oferă un profil clar pentru turism și poziționare. Pentru cei care caută orașe industriale din Slovenia, Velenje este un nume foarte bun. Orașul combină munca, recreerea și accesul ușor la Alpii Savinja.",
      en: "Velenje is a young city with a strong industrial past and wide streets. The lake, castle, and mountain backdrop give it a clear identity for travel and place searches. For Slovenian industrial cities, Velenje is a strong, searchable name. The city combines work, leisure, and easy access to the Savinja Alps."
    },
    facts: {
      de: [
        "Junge Stadt mit Industriegeschichte",
        "Velenje Lake prägt das Freizeitbild",
        "Velenje Castle über dem Zentrum",
        "Wichtiger Standort für Bergbau und Energie",
        "Guter Ausgangspunkt für Wanderungen"
      ],
      hu: [
        "Fiatal város ipari múlttal",
        "A Velenje-tó a szabadidőt meghatározza",
        "A vár a központ fölé magasodik",
        "Fontos bányászati és energetikai helyszín",
        "Jó kiindulópont túrákhoz"
      ],
      ro: [
        "Oraș tânăr cu istorie industrială",
        "Lacul Velenje definește partea de agrement",
        "Castelul Velenje domină centrul",
        "Loc important pentru minerit și energie",
        "Bază bună pentru drumeții"
      ],
      en: [
        "A young city with industrial roots",
        "Lake Velenje shapes the leisure scene",
        "Velenje Castle overlooks the center",
        "Important for mining and energy",
        "Good starting point for hikes"
      ]
    },
    image: "/geo-images/slovenia/city-velenje.webp"
  },
  {
    id: "city-murska-sobota",
    type: "city",
    parent: "country-slovenia",
    coords: [16.1603, 46.6620],
    name: {
      de: "Murska Sobota",
      hu: "Muraszombat",
      ro: "Murska Sobota",
      en: "Murska Sobota"
    },
    description: {
      de: "Murska Sobota ist das Zentrum von Prekmurje und liegt im Nordosten Sloweniens. Die Stadt ist bekannt für ihren Park, das Schloss und die Nähe zu Thermal- und Weingebieten. Für Suchanfragen rund um Prekmurje ist Murska Sobota ein klarer Ankerpunkt. Die Stadt bietet ruhige Wege, regionale Küche und eine starke lokale Identität.",
      hu: "Muraszombat Prekmurje központja, Szlovénia északkeleti részén. A város parkjáról, kastélyáról és a termál- valamint borvidékek közelségéről ismert. A Prekmurjére irányuló keresésekben Muraszombat egyértelmű horgonyváros. A település nyugodt sétákat, helyi konyhát és erős regionális identitást kínál.",
      ro: "Murska Sobota este centrul regiunii Prekmurje și se află în nord-estul Sloveniei. Orașul este cunoscut pentru parc, castel și apropierea de zone termale și viticole. Pentru căutările despre Prekmurje, Murska Sobota este un punct de referință clar. Orașul oferă plimbări liniștite, gastronomie locală și identitate regională puternică.",
      en: "Murska Sobota is the center of Prekmurje in northeastern Slovenia. The city is known for its park, castle, and proximity to thermal and wine areas. For Prekmurje searches, Murska Sobota is a clear anchor town. It offers calm walks, local food, and a strong regional identity."
    },
    facts: {
      de: [
        "Zentrum von Prekmurje",
        "Murska Sobota Castle im Stadtbild",
        "Bekannt für Park und Grünflächen",
        "Nahe Thermalbädern und Weingegenden",
        "Starke lokale Küche und Tradition"
      ],
      hu: [
        "Prekmurje központja",
        "A városképet a kastély adja",
        "Parkjai és zöldterei ismertek",
        "Közel van termálfürdőkhöz és borvidékhez",
        "Erős helyi konyha és hagyomány"
      ],
      ro: [
        "Centru al regiunii Prekmurje",
        "Castelul Murska Sobota marchează orașul",
        "Cunoscut pentru parc și spații verzi",
        "Aproape de băi termale și podgorii",
        "Bucătărie locală și tradiții puternice"
      ],
      en: [
        "Center of Prekmurje",
        "Murska Sobota Castle defines the skyline",
        "Known for parkland and green spaces",
        "Near thermal spas and vineyards",
        "Strong local cuisine and tradition"
      ]
    },
    image: "/geo-images/slovenia/city-murska-sobota.webp"
  },
  {
    id: "city-izola",
    type: "city",
    parent: "country-slovenia",
    coords: [13.6610, 45.5370],
    name: {
      de: "Izola",
      hu: "Izola",
      ro: "Izola",
      en: "Izola"
    },
    description: {
      de: "Izola ist eine mediterrane Küstenstadt mit Fischertradition und engem Altstadtkern. Die Lage an der Adria, der Hafen und die Promenade machen sie ideal für Küstenreisen und Sommercontent. Wer Sloweniens Küste sucht, findet in Izola ein authentisches und gut vermarktbares Ziel. Die Stadt verbindet Meerblick, Cafés und einen entspannten mediterranen Rhythmus.",
      hu: "Izola egy mediterrán tengerparti város halászati hagyományokkal és szűk óvárossal. Az adriai fekvés, a kikötő és a sétány kiválóvá teszik a nyári és parti tartalmakhoz. Aki Szlovénia tengerpartját keresi, Izolában hiteles és jól pozicionálható célpontot talál. A város a tengeri hangulatot, a kávézókat és a lassabb mediterrán ritmust ötvözi.",
      ro: "Izola este un oraș mediteranean de coastă, cu tradiție de pescuit și centru vechi compact. Poziția la Adriatică, portul și promenada îl fac ideal pentru conținut de litoral și vară. Pentru cei care caută coasta Sloveniei, Izola este o destinație autentică și ușor de promovat. Orașul combină priveliștea la mare, cafenelele și ritmul relaxat mediteranean.",
      en: "Izola is a Mediterranean coastal town with fishing traditions and a compact old center. Its Adriatic location, harbor, and promenade make it ideal for coastal travel and summer content. If you are searching for Slovenia's coast, Izola is an authentic and marketable choice. The town blends sea views, cafes, and a relaxed Mediterranean rhythm."
    },
    facts: {
      de: [
        "Küstenstadt an der Adria",
        "Starke Fischer- und Hafentradition",
        "Enger historischer Altstadtkern",
        "Beliebt für Strand und Promenade",
        "Teil der slowenischen Riviera"
      ],
      hu: [
        "Adria-parti tengerparti város",
        "Erős halászati és kikötői hagyomány",
        "Sűrű történelmi óváros",
        "Kedvelt strand és sétány",
        "A szlovén riviéra része"
      ],
      ro: [
        "Oraș de coastă la Adriatică",
        "Tradiție puternică de pescuit și port",
        "Centru vechi compact și istoric",
        "Popular pentru plajă și promenadă",
        "Parte din Riviera slovenă"
      ],
      en: [
        "Adriatic coastal town",
        "Strong fishing and harbor heritage",
        "Compact historic old center",
        "Popular for beaches and promenade",
        "Part of the Slovenian Riviera"
      ]
    },
    image: "/geo-images/slovenia/city-izola.webp"
  },
  {
    id: "city-kamnik",
    type: "city",
    parent: "country-slovenia",
    coords: [14.6120, 46.2250],
    name: {
      de: "Kamnik",
      hu: "Kamnik",
      ro: "Kamnik",
      en: "Kamnik"
    },
    description: {
      de: "Kamnik ist eine historische Stadt am Rand der Kamniker Alpen. Die mittelalterliche Altstadt und die Nähe zu Velika Planina machen den Ort stark für Natur- und Kulturreisen. Kamnik ist ein guter Suchbegriff für Slowenien, wenn Bergkulisse und Altstadt zusammen gefragt sind. Die Stadt wirkt kompakt, authentisch und sehr regional geprägt.",
      hu: "Kamnik történelmi város a Kamniki-Alpok peremén. A középkori óváros és a közeli Velika Planina együtt különösen erőssé teszik természet- és kultúrautazásokhoz. Kamnik jó keresőkifejezés Szlovénia kapcsán, ha hegyi háttér és óváros egyszerre kell. A város kompakt, hiteles és erősen regionális karakterű.",
      ro: "Kamnik este un oraș istoric la poalele Alpilor Kamnik. Centrul vechi medieval și apropierea de Velika Planina îl fac puternic pentru turism natural și cultural. Kamnik este un termen bun de căutare pentru Slovenia atunci când sunt dorite și munții, și orașul vechi. Orașul este compact, autentic și foarte regional.",
      en: "Kamnik is a historic town on the edge of the Kamnik Alps. The medieval old town and the nearby Velika Planina make it strong for nature and culture travel. Kamnik is a good Slovenia search term when you want both mountain scenery and an old town. The city feels compact, authentic, and strongly regional."
    },
    facts: {
      de: [
        "Am Fuß der Kamniker Alpen",
        "Mittelalterlicher Stadtkern",
        "Nähe zu Velika Planina",
        "Wichtiger Ausgangspunkt für Wanderungen",
        "Beliebt bei Tagesausflüglern aus Ljubljana"
      ],
      hu: [
        "A Kamniki-Alpok lábánál fekszik",
        "Középkori városmaggal rendelkezik",
        "Közel van Velika Planinához",
        "Fontos túrainduló pont",
        "Ljubljanából népszerű egynapos cél"
      ],
      ro: [
        "La poalele Alpilor Kamnik",
        "Are centru medieval",
        "Aproape de Velika Planina",
        "Punct important pentru drumeții",
        "Populat pentru excursii de o zi din Ljubljana"
      ],
      en: [
        "At the foot of the Kamnik Alps",
        "Features a medieval town core",
        "Close to Velika Planina",
        "Important hiking starting point",
        "Popular day trip from Ljubljana"
      ]
    },
    image: "/geo-images/slovenia/city-kamnik.webp"
  },
  {
    id: "city-skofja-loka",
    type: "city",
    parent: "country-slovenia",
    coords: [14.3066, 46.1660],
    name: {
      de: "Škofja Loka",
      hu: "Skofja Loka",
      ro: "Skofja Loka",
      en: "Skofja Loka"
    },
    description: {
      de: "Škofja Loka zählt zu den am besten erhaltenen mittelalterlichen Städten Sloweniens. Die Lage zwischen Hügeln, Fluss und Schloss gibt der Stadt ein starkes historisches Profil. Für SEO rund um Altstädte, Burgen und kurze Ausflüge ist Škofja Loka besonders wertvoll. Der Ort wirkt klein, aber kulturell sehr dicht und auffällig fotogen.",
      hu: "Škofja Loka Szlovénia egyik legjobb állapotban fennmaradt középkori városa. A dombok, a folyó és a vár közelsége erős történelmi profilt ad neki. Óvárosra, kastélyra és rövid kirándulásra épülő keresésekben Škofja Loka különösen értékes. A település kicsi, mégis kulturálisan sűrű és nagyon fotogén.",
      ro: "Škofja Loka este unul dintre cele mai bine păstrate orașe medievale din Slovenia. Amplasarea între dealuri, râu și castel îi oferă un profil istoric foarte puternic. Pentru căutări despre centre vechi, castele și excursii scurte, Škofja Loka este foarte valoroasă. Orașul este mic, dar foarte dens cultural și fotogenic.",
      en: "Škofja Loka is one of the best-preserved medieval towns in Slovenia. Its setting between hills, river, and castle gives it a strong historic profile. For old towns, castles, and short trip searches, Škofja Loka is highly valuable. The town is small, culturally dense, and very photogenic."
    },
    facts: {
      de: [
        "Sehr gut erhaltene Mittelalterstadt",
        "Schloss über der Stadt",
        "Bekannt für Brücken und Plätze",
        "Starke Handwerks- und Kulturszene",
        "Beliebtes Ziel für Tagesausflüge"
      ],
      hu: [
        "Nagyon jól megőrzött középkori város",
        "A város fölött vár áll",
        "Híres a hídjairól és tereiről",
        "Erős kézműves és kulturális élet",
        "Népszerű egynapos kirándulóhely"
      ],
      ro: [
        "Oraș medieval foarte bine păstrat",
        "Castelul se află deasupra orașului",
        "Cunoscut pentru poduri și piețe",
        "Scenă puternică de meșteșug și cultură",
        "Destinație populară pentru excursii de o zi"
      ],
      en: [
        "Very well-preserved medieval town",
        "Castle sits above the town",
        "Known for bridges and squares",
        "Strong craft and culture scene",
        "Popular day-trip destination"
      ]
    },
    image: "/geo-images/slovenia/city-skofja-loka.webp"
  },
  {
    id: "city-postojna",
    type: "city",
    parent: "country-slovenia",
    coords: [14.2139, 45.7748],
    name: {
      de: "Postojna",
      hu: "Postojna",
      ro: "Postojna",
      en: "Postojna"
    },
    description: {
      de: "Postojna ist der bekannteste Ausgangspunkt für die berühmte Höhlenwelt im Karst. Die Stadt ist klein, aber für Reisen, Natur und Unterkünfte in Slowenien extrem relevant. Für Suchanfragen zu Höhlen, Karst und Südwestslowenien ist Postojna ein Pflichtname. Der Ort verbindet Infrastruktur, Tourismus und eine starke geologische Marke.",
      hu: "Postojna a híres karsztbarlangok legismertebb kiindulópontja. A város kicsi, mégis rendkívül fontos a szlovén utazás, természet és szállás szempontjából. Barlangok, karszt és délnyugat-szlovéniai tartalmak keresésénél Postojna kötelező név. A település az infrastruktúrát, a turizmust és az erős földtani márkát egyesíti.",
      ro: "Postojna este cel mai cunoscut punct de plecare pentru faimoasa lume carstică a peșterilor. Orașul este mic, dar extrem de important pentru călătorii, natură și cazare în Slovenia. Pentru căutări despre peșteri, carst și sud-vestul Sloveniei, Postojna este un nume obligatoriu. Localitatea combină infrastructura, turismul și o marcă geologică foarte puternică.",
      en: "Postojna is the best-known gateway to Slovenia's famous karst cave world. The town is small, yet extremely important for travel, nature, and accommodation searches in Slovenia. For caves, karst, and southwest Slovenia, Postojna is a must-have keyword. It combines infrastructure, tourism, and a very strong geological brand."
    },
    facts: {
      de: [
        "Bekannt für die Karsthöhlenregion",
        "Wichtiger Verkehrsknoten im Südwesten",
        "Starkes Tourismus- und Hotelzentrum",
        "Nahe dem slowenischen Karst",
        "Beliebter Startpunkt für Höhlentouren"
      ],
      hu: [
        "A karsztbarlangok kapuvárosa",
        "Fontos közlekedési csomópont délnyugaton",
        "Erős turisztikai és szállodai központ",
        "Közel van a szlovén karszthoz",
        "Népszerű barlangtúra indulópont"
      ],
      ro: [
        "Poarta către peșterile carstice",
        "Nod important de transport în sud-vest",
        "Centru puternic pentru turism și hoteluri",
        "Aproape de Carstul sloven",
        "Punct de plecare pentru tururi în peșteri"
      ],
      en: [
        "Gateway to the karst cave region",
        "Important transport node in the southwest",
        "Strong tourism and hotel center",
        "Close to the Slovenian Karst",
        "Popular starting point for cave tours"
      ]
    },
    image: "/geo-images/slovenia/city-postojna.webp"
  },
  {
    id: "city-bovec",
    type: "city",
    parent: "country-slovenia",
    coords: [13.5540, 46.3384],
    name: {
      de: "Bovec",
      hu: "Bovec",
      ro: "Bovec",
      en: "Bovec"
    },
    description: {
      de: "Bovec liegt im Soča-Tal und ist ein Klassiker für Outdoor- und Bergtourismus. Der Ort lebt von Fluss, Bergen und Sportangeboten wie Rafting und Wandern. Für Suchbegriffe zu Abenteuerurlaub in Slowenien ist Bovec besonders stark. Die kleine Stadt wirkt wie ein kompakter Basecamp für die Julischen Alpen.",
      hu: "Bovec a Soča-völgyben fekszik, és klasszikus célpont az aktív és hegyi turizmushoz. A település a folyóra, a hegyekre és az olyan sportokra épül, mint a rafting és a túrázás. Szlovéniai kalandtúra keresésekben Bovec különösen erős. A kisváros olyan, mint egy kompakt alaptábor a Júliai-Alpokhoz.",
      ro: "Bovec se află în valea Soča și este un clasic pentru turismul de aventură și munte. Localitatea trăiește din râu, munți și activități precum raftingul și drumețiile. Pentru căutări despre vacanțe de aventură în Slovenia, Bovec este foarte puternic. Orașul mic funcționează ca o bază compactă pentru Alpii Iulieni.",
      en: "Bovec sits in the Soča Valley and is a classic for outdoor and mountain tourism. The town thrives on the river, the mountains, and activities like rafting and hiking. For adventure travel in Slovenia, Bovec is especially strong. The small town works like a compact base camp for the Julian Alps."
    },
    facts: {
      de: [
        "Lage im Soča-Tal",
        "Top-Spot für Rafting und Kajak",
        "Nahe dem Triglav-Nationalpark",
        "Starker Bergsport- und Outdoor-Ort",
        "Beliebtes Basecamp für die Julischen Alpen"
      ],
      hu: [
        "A Soča-völgyben található",
        "Rafting és kajak kiemelt helyszíne",
        "Közel van a Triglav NP-hez",
        "Erős hegyi és outdoor központ",
        "Népszerű bázis a Júliai-Alpokhoz"
      ],
      ro: [
        "Situat în valea Soča",
        "Loc de top pentru rafting și caiac",
        "Aproape de Parcul Național Triglav",
        "Centru puternic pentru sporturi outdoor",
        "Bază populară pentru Alpii Iulieni"
      ],
      en: [
        "Located in the Soča Valley",
        "Top spot for rafting and kayaking",
        "Close to Triglav National Park",
        "Strong outdoor and mountain base",
        "Popular camp base for the Julian Alps"
      ]
    },
    image: "/geo-images/slovenia/city-bovec.webp"
  }
];
export const sloveniaCulture: POI[] = [
  {
    id: "cult-ljubljana-castle",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.5083, 46.0489],
    name: {
      de: "Burg Ljubljana",
      hu: "Ljubljanai vár",
      ro: "Castelul Ljubljana",
      en: "Ljubljana Castle"
    },
    description: {
      de: "Die Burg von Ljubljana ist die markante Festung über der Hauptstadt und prägt seit Jahrhunderten das Stadtbild.",
      hu: "A ljubljanai vár a főváros fölé magasodó jellegzetes erődítmény, amely évszázadok óta meghatározza a városképét.",
      ro: "Castelul Ljubljana este fortăreața emblematică de deasupra capitalei și definește de secole silueta orașului.",
      en: "Ljubljana Castle is the signature fortress above the capital and has shaped the city skyline for centuries."
    },
    facts: {
      de: [
        "Die Anlage geht bis ins 11. Jahrhundert zurück.",
        "Sie diente als Verteidigungsanlage und Residenz.",
        "Vom Turm aus gibt es weite Blicke über die Stadt.",
        "Heute ist sie ein Kultur- und Veranstaltungsort."
      ],
      hu: [
        "Az épületegyüttes gyökerei a 11. századig nyúlnak vissza.",
        "Védelmi erődítményként és rezidenciaként is szolgált.",
        "A toronyból széles panoráma nyílik a városra.",
        "Ma kulturális és rendezvényhelyszínként működik."
      ],
      ro: [
        "Ansamblul datează din secolul al XI-lea.",
        "A servit drept fortificație și reședință.",
        "Din turn se deschide o panoramă amplă asupra orașului.",
        "Astăzi este un loc cultural și de evenimente."
      ],
      en: [
        "The complex dates back to the 11th century.",
        "It served as both a defensive fortification and a residence.",
        "The tower offers wide views over the city.",
        "Today it functions as a cultural and event venue."
      ]
    },
    image: "/geo-images/slovenia/cult-ljubljana-castle.webp"
  },
  {
    id: "cult-piran",
    type: "landmark",
    parent: "country-slovenia",
    coords: [13.5683, 45.5281],
    name: {
      de: "Piran",
      hu: "Piran",
      ro: "Piran",
      en: "Piran"
    },
    description: {
      de: "Piran ist eine venezianisch geprägte Küstenstadt mit engem historischer Kern und mediterranem Charakter.",
      hu: "Piran egy velencei hatású tengerparti város, szűk történelmi maggal és mediterrán karakterrel.",
      ro: "Piran este un oraș de coastă cu puternice influențe venețiene, un nucleu istoric compact și caracter mediteranean.",
      en: "Piran is a Venetian-influenced coastal town with a compact historic core and a Mediterranean character."
    },
    facts: {
      de: [
        "Die Stadt ist eine der schönsten Küstenorte an der slowenischen Adria.",
        "Der Tartini-Platz ist das zentrale Stadthaus-Zentrum.",
        "Die engen Gassen folgen dem mittelalterlichen Grundriss.",
        "Piran ist stark von venezianischer Architektur geprägt."
      ],
      hu: [
        "A város a szlovén Adria egyik legszebb települése.",
        "A Tartini tér a város központi főtere.",
        "A szűk utcák a középkori alaprajzot követik.",
        "Piran erősen őrzi a velencei építészet jegyeit."
      ],
      ro: [
        "Orașul este unul dintre cele mai frumoase de pe coasta slovenă a Adriaticii.",
        "Piața Tartini este centrul orașului.",
        "Străzile înguste urmează planul medieval.",
        "Piran este puternic marcat de arhitectura venețiană."
      ],
      en: [
        "The town is one of the most beautiful places on Slovenia's Adriatic coast.",
        "Tartini Square is the central square of the town.",
        "The narrow streets follow the medieval layout.",
        "Piran is strongly shaped by Venetian architecture."
      ]
    },
    image: "/geo-images/slovenia/cult-piran.webp"
  },
  {
    id: "cult-skocjan",
    type: "landmark",
    parent: "country-slovenia",
    coords: [13.9897, 45.6628],
    name: {
      de: "Höhlen von Škocjan",
      hu: "Škocjan-barlang",
      ro: "Peșterile Škocjan",
      en: "Škocjan Caves"
    },
    description: {
      de: "Die Škocjan-Höhlen gehören zu den beeindruckendsten Karstsystemen Europas und sind für ihren unterirdischen Canyon berühmt.",
      hu: "A Škocjan-barlangok Európa egyik leglenyűgözőbb karsztos rendszerei közé tartoznak, és földalatti kanyonjukról híresek.",
      ro: "Peșterile Škocjan sunt printre cele mai impresionante sisteme carstice din Europa și sunt renumite pentru canionul lor subteran.",
      en: "The Škocjan Caves are among Europe's most impressive karst systems and are famous for their underground canyon."
    },
    facts: {
      de: [
        "Das Höhlensystem ist UNESCO-Welterbe.",
        "Der unterirdische Fluss hat einen spektakulären Canyon geformt.",
        "Das System reicht über mehrere Kilometer ins Innere der Erde.",
        "Es gehört zu den wichtigsten Karstgebieten der Welt."
      ],
      hu: [
        "A barlangrendszer az UNESCO világörökség része.",
        "Az földalatti folyó látványos kanyont vájt.",
        "A rendszer több kilométeren át húzódik a föld alatt.",
        "A világ egyik legfontosabb karsztvidékének része."
      ],
      ro: [
        "Sistemul de peșteri face parte din Patrimoniul Mondial UNESCO.",
        "Râul subteran a sculptat un canion spectaculos.",
        "Sistemul se întinde pe mai mulți kilometri în interiorul pământului.",
        "Face parte dintre cele mai importante zone carstice din lume."
      ],
      en: [
        "The cave system is a UNESCO World Heritage site.",
        "The underground river has carved a spectacular canyon.",
        "The system extends several kilometers underground.",
        "It is one of the world's most important karst regions."
      ]
    },
    image: "/geo-images/slovenia/cult-skocjan.webp"
  },
  {
    id: "cult-postojna",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.2036, 45.78],
    name: {
      de: "Postojna-Höhle und Predjama-Burg",
      hu: "Postojnai-barlang + Predjamski grad",
      ro: "Peștera Postojna + Castelul Predjama",
      en: "Postojna Cave and Predjama Castle"
    },
    description: {
      de: "Die Postojna-Höhle und die Predjama-Burg bilden eines der bekanntesten Natur- und Kulturerlebnisse Sloweniens.",
      hu: "A Postojnai-barlang és a Predjamski grad Szlovénia egyik legismertebb természeti és kulturális látnivalója.",
      ro: "Peștera Postojna și Castelul Predjama formează una dintre cele mai cunoscute experiențe naturale și culturale din Slovenia.",
      en: "Postojna Cave and Predjama Castle make up one of Slovenia's best-known natural and cultural highlights."
    },
    facts: {
      de: [
        "Die Höhle ist für ihren großen Tropfsteinsaal und ihre Bahn bekannt.",
        "Predjama ist ein spektakulärer Felsenbau in einer Höhlenöffnung.",
        "Die Kombination aus Höhle und Burg ist weltweit einzigartig.",
        "Beide Orte liegen nur eine kurze Strecke auseinander."
      ],
      hu: [
        "A barlang híres nagy cseppkőteréről és barlangi vasútjáról.",
        "Predjama egy sziklafalba épült, látványos vár.",
        "A barlang és a vár együttese világszerte egyedülálló.",
        "A két helyszín csak rövid távolságra van egymástól."
      ],
      ro: [
        "Peștera este cunoscută pentru sala sa mare de stalactite și trenulețul subteran.",
        "Predjama este un castel spectaculos construit într-o deschidere de stâncă.",
        "Combinația dintre peșteră și castel este unică în lume.",
        "Cele două locații se află la mică distanță una de alta."
      ],
      en: [
        "The cave is known for its large chamber and cave railway.",
        "Predjama is a dramatic castle built into a cliff opening.",
        "The cave-and-castle combination is unique worldwide.",
        "The two sites are only a short distance apart."
      ]
    },
    image: "/geo-images/slovenia/cult-postojna.webp"
  },
  {
    id: "cult-bled-castle",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.1053, 46.3631],
    name: {
      de: "Burg Bled und Insel",
      hu: "Bledi-vár + sziget",
      ro: "Castelul Bled + insula",
      en: "Bled Castle and Island"
    },
    description: {
      de: "Die Burg von Bled und die kleine Insel im See zählen zu den bekanntesten Bildern Sloweniens.",
      hu: "A bledi vár és a tó közepén fekvő kis sziget Szlovénia legismertebb képei közé tartoznak.",
      ro: "Castelul Bled și mica insulă din lac se numără printre cele mai cunoscute imagini ale Sloveniei.",
      en: "Bled Castle and the small island in the lake are among Slovenia's most iconic sights."
    },
    facts: {
      de: [
        "Die Burg steht auf einem Felsen hoch über dem See.",
        "Die Inselkirche ist das zentrale Motiv des Bleder Sees.",
        "Das Ensemble gehört zu den meistfotografierten Orten des Landes.",
        "Die Lage mit Alpenhintergrund macht den Ort besonders markant."
      ],
      hu: [
        "A vár a tó fölötti sziklán áll.",
        "A sziget temploma a Bledi-tó központi látványeleme.",
        "Az együttes az ország egyik legtöbbet fényképezett helye.",
        "Az alpesi háttér különösen karakteressé teszi a látványt."
      ],
      ro: [
        "Castelul stă pe o stâncă deasupra lacului.",
        "Biserica de pe insulă este motivul central al lacului Bled.",
        "Ansamblul este unul dintre cele mai fotografiate locuri din țară.",
        "Fundalul alpin face ca locul să fie deosebit de memorabil."
      ],
      en: [
        "The castle stands on a cliff above the lake.",
        "The island church is the central image of Lake Bled.",
        "The ensemble is one of the most photographed places in the country.",
        "The Alpine backdrop makes the site especially striking."
      ]
    },
    image: "/geo-images/slovenia/cult-bled-castle.webp"
  },
  {
    id: "historical-celje-castle",
    type: "historical",
    parent: "country-slovenia",
    coords: [15.2587, 46.2328],
    name: { de: "Celjeer Burg", hu: "Celje vára", ro: "Castelul Celje", en: "Celje Castle" },
    description: {
      de: "Celjeer Burg erhebt sich über der Stadt und gehört zu den wichtigsten mittelalterlichen Wahrzeichen Sloweniens. Die Anlage erzählt von Adel, Macht und der Geschichte der Grafen von Cilli. Für Suchbegriffe rund um Burgen, Mittalter und Celje ist der Ort extrem stark. Die Lage auf dem Hügel macht ihn auch visuell sofort wiedererkennbar.",
      hu: "A celjei vár a város fölé magasodik, és Szlovénia egyik legfontosabb középkori emléke. A vár az arisztokrácia, a hatalom és a Cillei grófok történetét meséli el. Várakra, középkorra és Celjére kereső felhasználóknak ez nagyon erős célpont. A dombtetős fekvés miatt vizuálisan is azonnal felismerhető.",
      ro: "Castelul Celje se ridică deasupra orașului și este unul dintre cele mai importante repere medievale ale Sloveniei. Complexul vorbește despre nobilime, putere și istoria conților de Cilli. Pentru căutări despre castele, Evul Mediu și Celje, locul este extrem de puternic. Poziția pe deal îl face ușor de recunoscut și vizual.",
      en: "Celje Castle rises above the city and is one of Slovenia's key medieval landmarks. The site tells the story of nobility, power, and the Counts of Cilli. For searches about castles, the Middle Ages, and Celje, it is extremely strong. Its hilltop position makes it instantly recognizable visually."
    },
    facts: {
      de: [
        "Größte mittelalterliche Burg Sloweniens",
        "Überblickt die Stadt Celje",
        "Verbunden mit den Grafen von Cilli",
        "Beliebter Aussichtspunkt",
        "Starkes Symbol für Geschichte und Macht"
      ],
      hu: [
        "Szlovénia legnagyobb középkori vára",
        "Celjére néz rá a magasból",
        "A Cillei grófokhoz kötődik",
        "Népszerű kilátópont",
        "Erős történelmi és hatalmi szimbólum"
      ],
      ro: [
        "Cel mai mare castel medieval din Slovenia",
        "Privește peste orașul Celje",
        "Legat de conții de Cilli",
        "Punct de belvedere popular",
        "Simbol puternic al istoriei și puterii"
      ],
      en: [
        "Largest medieval castle in Slovenia",
        "Overlooks the city of Celje",
        "Linked to the Counts of Cilli",
        "Popular viewpoint",
        "Strong symbol of history and power"
      ]
    },
    image: "/geo-images/slovenia/historical-celje-castle.webp"
  },
  {
    id: "historical-ptuj-castle",
    type: "historical",
    parent: "country-slovenia",
    coords: [15.8681, 46.4183],
    name: { de: "Ptujer Burg", hu: "Ptuji vár", ro: "Castelul Ptuj", en: "Ptuj Castle" },
    description: {
      de: "Ptujer Burg blickt über die älteste Stadt des Landes und prägt den gesamten Stadtkern. Im Inneren verbinden sich Museumsräume, Sammlungen und eine starke mittelalterliche Atmosphäre. Für Suchanfragen zu Sloweniens Burgen und historischen Städten ist Ptuj Castle ein Top-Treffer. Zusammen mit dem Blick auf die Drau entsteht hier ein sehr starkes Reisebild.",
      hu: "A ptuji vár az ország legrégebbi városára néz rá, és meghatározza az egész városmagot. Odabent múzeumi terek, gyűjtemények és erős középkori hangulat található. Szlovéniai várakra és történelmi városokra keresve a Ptuji vár kiemelt találat. A Dráva fölötti panorámával együtt nagyon erős utazási kép jön létre.",
      ro: "Castelul Ptuj privește peste cel mai vechi oraș al țării și definește întregul centru urban. În interior se împletesc spații muzeale, colecții și o atmosferă medievală puternică. Pentru căutări despre castelele Sloveniei și orașe istorice, Castelul Ptuj este o alegere de top. Împreună cu priveliștea spre Drava, creează un cadru turistic foarte puternic.",
      en: "Ptuj Castle looks over the country's oldest town and defines the entire city center. Inside, museum rooms, collections, and a strong medieval atmosphere come together. For searches about Slovenian castles and historic towns, Ptuj Castle is a top result. Combined with the view over the Drava, it creates a very strong travel image."
    },
    facts: {
      de: ["Über der Altstadt von Ptuj", "Wichtige Museumsräume im Schloss", "Blick auf die Drau", "Mittelalterliche Residenzgeschichte", "Ein Kernbild von Ptuj"],
      hu: ["Ptuj óvárosa fölött áll", "Fontos múzeumi terek vannak benne", "Kilátás nyílik a Drávára", "Középkori rezidenciatörténet", "Ptuj egyik fő képe"],
      ro: ["Deasupra centrului vechi din Ptuj", "Are spații muzeale importante", "Priveliște spre Drava", "Istorie de reședință medievală", "O imagine centrală a orașului"],
      en: ["Above Ptuj's old town", "Contains important museum spaces", "Views the Drava River", "Medieval residence history", "A core image of Ptuj"]
    },
    image: "/geo-images/slovenia/historical-ptuj-castle.webp"
  },
  {
    id: "historical-franja-partisan-hospital",
    type: "historical",
    parent: "country-slovenia",
    coords: [13.9205, 46.0270],
    name: { de: "Partisanenkrankenhaus Franja", hu: "Franja partizánkórház", ro: "Spitalul Partizan Franja", en: "Franja Partisan Hospital" },
    description: {
      de: "Das Partisanenkrankenhaus Franja ist ein außergewöhnliches Versteck aus dem Zweiten Weltkrieg. In einer engen Schlucht verborgen, wurde es zum Symbol für Widerstand und Menschlichkeit. Für historische Suchanfragen in Slowenien ist Franja ein einzigartiger Name mit starker Story. Der Ort verbindet Gedenken, Naturkulisse und authentische Kriegsgeschichte.",
      hu: "A Franja partizánkórház a második világháború egyik különleges rejtekhelye volt. Egy szűk szurdokban bújt meg, és az ellenállás valamint az emberség jelképévé vált. Szlovéniai történelmi keresésekben Franja egyedi név erős történettel. A hely az emlékezetet, a természeti környezetet és a hiteles háborús múltat kapcsolja össze.",
      ro: "Spitalul Partizan Franja este un adăpost excepțional din timpul celui de-al Doilea Război Mondial. Ascuns într-un defileu îngust, a devenit simbolul rezistenței și al umanității. Pentru căutări istorice despre Slovenia, Franja este un nume unic, cu o poveste puternică. Locul combină memoria, peisajul natural și istoria autentică de război.",
      en: "Franja Partisan Hospital is an exceptional WWII hideout. Hidden in a narrow gorge, it became a symbol of resistance and humanity. For historic Slovenia searches, Franja is a unique name with a strong story. The site combines remembrance, natural scenery, and authentic war history."
    },
    facts: {
      de: ["Verstecktes Lazarett des Zweiten Weltkriegs", "Symbol des Widerstands", "In einer engen Schlucht gelegen", "Gedenkort mit starker Wirkung", "Eines der bekanntesten Kriegsdenkmäler des Landes"],
      hu: ["Második világháborús rejtek-kórház", "Az ellenállás szimbóluma", "Szűk szurdokban található", "Erős emlékhely", "Az ország egyik legismertebb háborús emléke"],
      ro: ["Spital ascuns din al Doilea Război Mondial", "Simbol al rezistenței", "Situat într-un defileu îngust", "Loc memorial puternic", "Unul dintre cele mai cunoscute monumente de război"],
      en: ["Hidden WWII hospital", "A symbol of resistance", "Set in a narrow gorge", "Powerful memorial site", "One of the country's best-known war monuments"]
    },
    image: "/geo-images/slovenia/historical-franja-partisan-hospital.webp"
  },
  {
    id: "historical-roman-emona",
    type: "historical",
    parent: "country-slovenia",
    coords: [14.5060, 46.0500],
    name: { de: "Römische Emona", hu: "Emona római emlékei", ro: "Emona romană", en: "Roman Emona" },
    description: {
      de: "Emona war die römische Vorgängerstadt des heutigen Ljubljana und ist bis heute im Stadtbild spürbar. Mauern, Mosaike und archäologische Spuren machen den Ort für Geschichtsreisen besonders attraktiv. Für SEO rund um römisches Slowenien und Ljubljana liefert Emona starke historische Treffer. Die Überreste zeigen, wie tief die Stadt in die Antike zurückreicht.",
      hu: "Emona a mai Ljubljana római elődje volt, és nyomai ma is érezhetők a városképben. Falak, mozaikok és régészeti emlékek teszik különösen vonzóvá a történelmi utazásokhoz. A római Szlovénia és Ljubljana keresőszavaihoz Emona erős történelmi találatot ad. A maradványok megmutatják, milyen mélyen nyúlik vissza a város az antikvitásba.",
      ro: "Emona a fost orașul roman care a precedat actualul Ljubljana și încă se simte în peisajul urban. Zidurile, mozaicurile și urmele arheologice fac locul atractiv pentru turism istoric. Pentru SEO despre Slovenia romană și Ljubljana, Emona oferă rezultate istorice foarte bune. Vestigiile arată cât de adâncă este rădăcina antică a orașului.",
      en: "Emona was the Roman predecessor of today's Ljubljana, and its traces are still visible in the cityscape. Walls, mosaics, and archaeological remains make it highly attractive for history travel. For Roman Slovenia and Ljubljana SEO, Emona delivers strong historical results. The remains show how deeply the city reaches back into antiquity."
    },
    facts: {
      de: ["Römische Stadt vor Ljubljana", "Mauern und Ausgrabungen sichtbar", "Antike Schicht mitten in der Hauptstadt", "Wichtiger Ort für Archäologie", "Brücke zwischen Antike und Moderne"],
      hu: ["Ljubljana római elődje", "Falmaradványok és ásatások láthatók", "Antik réteg a főváros szívében", "Fontos régészeti helyszín", "Híd az antik és a modern között"],
      ro: ["Oraș roman anterior Ljubljanei", "Ziduri și săpături vizibile", "Strat antic în inima capitalei", "Loc important pentru arheologie", "Pod între antichitate și prezent"],
      en: ["Roman predecessor of Ljubljana", "Visible walls and excavations", "Ancient layer in the capital", "Important archaeological site", "Bridge between antiquity and modern life"]
    },
    image: "/geo-images/slovenia/historical-roman-emona.webp"
  },
  {
    id: "historical-ruska-kapelica",
    type: "historical",
    parent: "country-slovenia",
    coords: [13.7350, 46.4372],
    name: { de: "Russische Kapelle", hu: "Orosz kápolna", ro: "Capela Rusă", en: "Russian Chapel" },
    description: {
      de: "Die Russische Kapelle am Vršič-Pass ist ein stilles Denkmal des Ersten Weltkriegs. Sie wurde von Kriegsgefangenen als Gedenkort errichtet und bleibt bis heute ein starkes Symbol. Für Suchanfragen zu Kriegsgeschichte, Erinnerung und Alpenpässen ist dieser Ort sehr relevant. Das kleine Bauwerk hat eine große emotionale und historische Wirkung.",
      hu: "A Vršič-hágón álló orosz kápolna az első világháború csendes emlékhelye. Hadifoglyok emelték emlékezésből, és ma is erős szimbólum. Háborús történelemre, emlékezetre és alpesi hágókra keresve ez a hely nagyon fontos. A kis épület nagy érzelmi és történelmi súllyal bír.",
      ro: "Capela Rusă de pe Pasul Vršič este un monument tăcut al Primului Război Mondial. A fost ridicată de prizonieri de război ca loc de comemorare și rămâne un simbol puternic. Pentru căutări despre istoria războiului, memorie și trecători alpine, locul este foarte relevant. Construcția mică are o încărcătură emoțională și istorică mare.",
      en: "The Russian Chapel on Vršič Pass is a quiet World War I memorial. It was built by prisoners of war as a place of remembrance and remains a strong symbol today. For searches about war history, memory, and Alpine passes, the site is highly relevant. The small building carries major emotional and historical weight."
    },
    facts: {
      de: ["Am Vršič-Pass gelegen", "Erinnert an den Ersten Weltkrieg", "Von Kriegsgefangenen errichtet", "Wichtiger Gedenkort in den Alpen", "Starkes Symbol für Erinnerung"],
      hu: ["A Vršič-hágón található", "Az első világháborúra emlékeztet", "Hadifoglyok építették", "Fontos alpesi emlékhely", "Erős emlékezeti szimbólum"],
      ro: ["Situată pe Pasul Vršič", "Comemorează Primul Război Mondial", "Ridicată de prizonieri de război", "Loc memorial important în Alpi", "Simbol puternic al memoriei"],
      en: ["Located on Vršič Pass", "Remembers World War I", "Built by prisoners of war", "Important Alpine memorial site", "Strong symbol of remembrance"]
    },
    image: "/geo-images/slovenia/historical-ruska-kapelica.webp"
  },
  {
    id: "historical-sneznik-castle",
    type: "historical",
    parent: "country-slovenia",
    coords: [14.4272, 45.6761],
    name: { de: "Schloss Snežnik", hu: "Snežnik kastély", ro: "Castelul Snežnik", en: "Snežnik Castle" },
    description: {
      de: "Schloss Snežnik gilt als einer der am besten erhaltenen Adelssitze in Slowenien. Das abgelegene Wald- und Seenland verleiht dem Schloss eine besondere Atmosphäre. Für historische Reisen, Schlossliebhaber und SEO rund um Südslowenien ist Snežnik sehr stark. Die Innenräume und die Umgebung machen den Ort besonders authentisch.",
      hu: "A Snežnik kastély Szlovénia egyik legjobban megőrzött nemesi rezidenciája. Az erdős, tavai vidék különleges hangulatot ad a kastélynak. Történelmi utazásokhoz, kastélyrajongóknak és dél-szlovéniai SEO-hoz ez nagyon erős helyszín. A belső terek és a környezet hiteles élményt adnak.",
      ro: "Castelul Snežnik este considerat una dintre cele mai bine păstrate reședințe nobiliare din Slovenia. Zona izolată de păduri și lacuri îi conferă o atmosferă aparte. Pentru turism istoric, iubitorii de castele și SEO despre sudul Sloveniei, Snežnik este foarte puternic. Interioarele și împrejurimile îl fac deosebit de autentic.",
      en: "Snežnik Castle is considered one of the best-preserved noble residences in Slovenia. The remote forest-and-lake setting gives the castle a special atmosphere. For historic travel, castle lovers, and southern Slovenia SEO, Snežnik is very strong. The interiors and surroundings make the site especially authentic."
    },
    facts: {
      de: ["Gut erhaltenes Adelsschloss", "In waldreicher Umgebung", "Bekannt für originale Innenräume", "Beliebtes Schlossziel im Süden", "Wirkt abgelegen und authentisch"],
      hu: ["Jól megőrzött nemesi kastély", "Erdős környezetben áll", "Eredeti belső tereiről ismert", "Népszerű déli kastélycélpont", "Elszigetelt és hiteles hangulatú"],
      ro: ["Castel nobiliar bine păstrat", "Înconjurat de păduri", "Cunoscut pentru interioare originale", "Destinație populară în sud", "Atmosferă izolată și autentică"],
      en: ["Well-preserved noble castle", "Set in a forested landscape", "Known for original interiors", "Popular castle destination in the south", "Feels remote and authentic"]
    },
    image: "/geo-images/slovenia/historical-sneznik-castle.webp"
  },
  {
    id: "historical-skofja-loka-old-town",
    type: "historical",
    parent: "country-slovenia",
    coords: [14.3070, 46.1664],
    name: { de: "Altstadt von Škofja Loka", hu: "Škofja Loka óvárosa", ro: "Centrul vechi Škofja Loka", en: "Škofja Loka Old Town" },
    description: {
      de: "Die Altstadt von Škofja Loka gehört zu den besterhaltenen mittelalterlichen Stadtkernen des Landes. Brücken, Fassaden und die Lage am Fluss schaffen ein klares historisches Gesamtbild. Für SEO rund um Altstädte, Burgen und kurze Ausflüge ist Škofja Loka besonders wertvoll. Der kompakte Kern macht die Stadt für kurze Kulturtrips besonders geeignet.",
      hu: "Škofja Loka óvárosa az ország egyik legjobb állapotban fennmaradt középkori városmagja. A hidak, homlokzatok és a folyópart erős történelmi összképet adnak. Szlovéniai középkori városokra keresve ez a hely nagyon erős találat. A kompakt mag rövid kulturális utakra különösen alkalmassá teszi a várost.",
      ro: "Centrul vechi al orașului Škofja Loka este unul dintre cele mai bine păstrate nuclee medievale din țară. Podurile, fațadele și amplasarea pe râu creează o imagine istorică foarte clară. Pentru căutări despre orașe medievale din Slovenia, locul este extrem de puternic. Nucleul compact îl face ideal pentru city break-uri culturale scurte.",
      en: "Škofja Loka Old Town is one of the best-preserved medieval town cores in the country. Bridges, facades, and the river setting create a very clear historic image. For searches about medieval Slovenian towns, the site is extremely strong. Its compact core makes it ideal for short cultural trips."
    },
    facts: {
      de: ["Sehr gut erhaltener Stadtkern", "Mittelalterliche Struktur", "Lage am Flussufer", "Beliebt für Kulturspaziergänge", "Starkes Bild für Altstadt-SEO"],
      hu: ["Nagyon jól megőrzött városmag", "Középkori szerkezetű", "Folyóparti fekvés", "Népszerű kulturális sétákhoz", "Erős óvárosi SEO-kép"],
      ro: ["Centru foarte bine păstrat", "Structură medievală", "Așezat pe malul râului", "Popular pentru plimbări culturale", "Imagine puternică pentru SEO de centru vechi"],
      en: ["Very well-preserved core", "Medieval urban structure", "Set by the river", "Popular for cultural walks", "Strong old-town SEO image"]
    },
    image: "/geo-images/slovenia/historical-skofja-loka-old-town.webp"
  },
  {
    id: "historical-piran-town-walls",
    type: "historical",
    parent: "country-slovenia",
    coords: [13.5700, 45.5274],
    name: { de: "Piraner Stadtmauern", hu: "Pirani városfalak", ro: "Zidurile orașului Piran", en: "Piran Town Walls" },
    description: {
      de: "Die Stadtmauern von Piran schützen die alte Küstenstadt und liefern starke Panoramen über die Adria. Das Befestigungssystem zeigt, wie wichtig der Ort historisch für Handel und Verteidigung war. Für Küsten- und Geschichts-Suchbegriffe in Slowenien ist Piran besonders wertvoll. Die Mauern verbinden Meerblick, Altstadt und venezianische Küstenkultur.",
      hu: "A Piran városfalai védik az ősi tengerparti várost, és erős panorámát adnak az Adriára. Az erődítési rendszer megmutatja, mennyire fontos volt a hely kereskedelmi és védelmi szempontból. Szlovéniai partvidéki és történelmi keresésekben Piran különösen értékes. A falak összekötik a tengeri kilátást, az óvárost és a velencei tengerparti kultúrát.",
      ro: "Zidurile orașului Piran protejează vechiul oraș de coastă și oferă panorame puternice asupra Adriaticii. Sistemul defensiv arată cât de important a fost locul pentru comerț și apărare. Pentru căutări despre coastă și istorie în Slovenia, Piran este foarte valoros. Zidurile unesc priveliștea la mare, centrul vechi și cultura venețiană a litoralului.",
      en: "Piran's town walls protect the old coastal town and provide strong views over the Adriatic. The fortification system shows how important the place was historically for trade and defense. For Slovenia coastal and historic searches, Piran is especially valuable. The walls connect sea views, the old town, and Venetian coastal culture."
    },
    facts: {
      de: ["Befestigung über der Altstadt", "Starker Blick auf die Adria", "Wichtig für Küstenverteidigung", "Beliebter Fotospot", "Teil des historischen Piran-Bildes"],
      hu: ["Az óváros fölötti erődítés", "Erős adriai panoráma", "Fontos partvédelmi szerep", "Népszerű fotópont", "Piran történelmi képének része"],
      ro: ["Fortificație deasupra centrului vechi", "Priveliște puternică spre Adriatică", "Rol important în apărarea coastei", "Loc popular pentru fotografii", "Parte din imaginea istorică a Piranului"],
      en: ["Fortification above the old town", "Strong Adriatic views", "Important for coastal defense", "Popular photo spot", "Part of Piran's historic image"]
    },
    image: "/geo-images/slovenia/historical-piran-town-walls.webp"
  },
  {
    id: "landmark-national-university-library",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.5052, 46.0510],
    name: { de: "National- und Universitätsbibliothek", hu: "Nemzeti és Egyetemi Könyvtár", ro: "Biblioteca Națională și Universitară", en: "National and University Library" },
    description: {
      de: "Die National- und Universitätsbibliothek ist eines der bekanntesten Gebäude in Ljubljana und ein Meisterwerk von Plečnik. Die Fassade aus Stein und Ziegeln macht sie sofort wiedererkennbar. Für Architektur-, Kultur- und Hauptstadt-Suchanfragen ist der Ort extrem stark. Die Bibliothek steht für Wissen, Moderne und die Identität der Stadt.",
      hu: "A Nemzeti és Egyetemi Könyvtár Ljubljana egyik legismertebb épülete és Plečnik mesterműve. A kő- és tégla homlokzat miatt azonnal felismerhető. Építészetre, kultúrára és fővárosi keresésekre rendkívül erős helyszín. A könyvtár a tudást, a modernitást és a város identitását képviseli.",
      ro: "Biblioteca Națională și Universitară este una dintre cele mai cunoscute clădiri din Ljubljana și o capodoperă Plečnik. Fațada din piatră și cărămidă o face imediat recognoscibilă. Pentru căutări despre arhitectură, cultură și capitală, locul este extrem de puternic. Biblioteca reprezintă cunoașterea, modernitatea și identitatea orașului.",
      en: "The National and University Library is one of Ljubljana's best-known buildings and a Plečnik masterpiece. Its stone-and-brick facade makes it instantly recognizable. For architecture, culture, and capital-city searches, the site is extremely strong. The library stands for knowledge, modernity, and the city's identity."
    },
    facts: {
      de: ["Plečnik-Ikone in Ljubljana", "Berühmte Stein- und Ziegelfassade", "National- und Universitätsbibliothek", "Zentral für Architektur-Tourismus", "Nahe dem Stadtzentrum"],
      hu: ["Plečnik-ikon Ljubljana szívében", "Híres kő és tégla homlokzat", "Nemzeti és Egyetemi Könyvtár", "Erős építészeti turisztikai hely", "Közel a városközponthoz"],
      ro: ["Icon Plečnik în Ljubljana", "Fațadă celebră din piatră și cărămidă", "Bibliotecă națională și universitară", "Punct major pentru turism arhitectural", "Aproape de centrul orașului"],
      en: ["A Plečnik icon in Ljubljana", "Famous stone-and-brick facade", "National and university library", "Major architectural tourism stop", "Near the city center"]
    },
    image: "/geo-images/slovenia/landmark-national-university-library.webp"
  },
  {
    id: "landmark-dragon-bridge",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.5081, 46.0511],
    name: { de: "Drachenbrücke", hu: "Sárkányhíd", ro: "Podul Dragonilor", en: "Dragon Bridge" },
    description: {
      de: "Die Drachenbrücke ist eines der ikonischsten Wahrzeichen Ljubljanas und ein Muss für Stadtbilder. Die grünen Drachen auf den Ecken haben den Brückencharakter weltbekannt gemacht. Für Tourismus, Architektur und Ljubljana-SEO ist sie ein starker Anker. Die Brücke verbindet Fluss, Stadt und Symbolik in einem einzigen Motiv.",
      hu: "A Sárkányhíd Ljubljana egyik legikonikusabb jelképe és kötelező városképi elem. A sarkokon álló zöld sárkányok világszerte ismertté tették a hidat. Turizmusra, építészetre és Ljubljana SEO-ra nagyon erős horgony. A híd a folyót, a várost és a szimbolikát egyetlen motívumba kapcsolja.",
      ro: "Podul Dragonilor este unul dintre cele mai iconice simboluri ale Ljubljanei și un reper obligatoriu în fotografii. Dragonii verzi din colțuri au făcut podul celebru în toată lumea. Pentru turism, arhitectură și SEO despre Ljubljana, este un punct de sprijin foarte puternic. Podul unește râul, orașul și simbolistica într-o singură imagine.",
      en: "Dragon Bridge is one of Ljubljana's most iconic landmarks and a must-have city image. The green dragons on its corners made the bridge world-famous. For tourism, architecture, and Ljubljana SEO, it is a powerful anchor. The bridge ties river, city, and symbolism into one image."
    },
    facts: {
      de: ["Berühmtes Drachenmotiv", "Wahrzeichen von Ljubljana", "Über die Ljubljanica", "Beliebter Fotostopp", "Sehenswürdigkeit der Jugendstil-Ära"],
      hu: ["Híres sárkánymotívum", "Ljubljana jelképe", "A Ljubljanica fölött áll", "Népszerű fotómegálló", "Szecessziós korszak emléke"],
      ro: ["Motiv celebru cu dragoni", "Simbol al Ljubljanei", "Traversează Ljubljanica", "Oprire populară pentru fotografii", "Reper al erei Art Nouveau"],
      en: ["Famous dragon motif", "A Ljubljana symbol", "Crosses the Ljubljanica", "Popular photo stop", "An Art Nouveau landmark"]
    },
    image: "/geo-images/slovenia/landmark-dragon-bridge.webp"
  },
  {
    id: "landmark-triple-bridge",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.5058, 46.0516],
    name: { de: "Dreifachbrücke", hu: "Hármas híd", ro: "Podul Triplu", en: "Triple Bridge" },
    description: {
      de: "Die Dreifachbrücke verbindet den Altstadtkern von Ljubljana mit dem offenen Stadtleben. Plečnik verwandelte den Flussraum in ein urbanes Ensemble, das heute zu den bekanntesten Sehenswürdigkeiten zählt. Für Stadtführer und Architektur-SEO ist der Ort besonders stark. Die Brücke steht für Bewegung, Begegnung und elegantes Stadtbild.",
      hu: "A Hármas híd Ljubljana óvárosi magját köti össze a nyitott városi térrel. Plečnik a folyóteret olyan városi együttessé alakította, amely ma a legismertebb látnivalók közé tartozik. Városvezetőknek és építészeti SEO-nak ez különösen erős helyszín. A híd a mozgást, a találkozást és az elegáns városképet jelképezi.",
      ro: "Podul Triplu leagă nucleul vechi al Ljubljanei de viața urbană deschisă. Plečnik a transformat spațiul râului într-un ansamblu urban care este astăzi printre cele mai cunoscute atracții. Pentru ghiduri urbane și SEO de arhitectură, locul este foarte puternic. Podul exprimă mișcare, întâlnire și un peisaj urban elegant.",
      en: "The Triple Bridge connects Ljubljana's old town core with the open city life. Plečnik transformed the riverside into an urban ensemble that is now one of the city's best-known sights. For city guides and architecture SEO, the site is especially strong. The bridge stands for movement, meeting, and an elegant cityscape."
    },
    facts: {
      de: ["Plečnik-Gestaltung", "Verbindet Altstadt und Zentrum", "Über der Ljubljanica", "Teil des Stadtbilds von Ljubljana", "Sehr beliebt bei Besuchern"],
      hu: ["Plečnik-terv", "Összeköti az óvárost és a központot", "A Ljubljanica fölött", "Ljubljana városképének része", "Nagyon népszerű a látogatók körében"],
      ro: ["Proiect Plečnik", "Leagă centrul vechi de centru", "Deasupra râului Ljubljanica", "Parte din imaginea orașului Ljubljana", "Foarte popular printre vizitatori"],
      en: ["Plečnik design", "Links old town and center", "Over the Ljubljanica", "Part of Ljubljana's city image", "Very popular with visitors"]
    },
    image: "/geo-images/slovenia/landmark-triple-bridge.webp"
  },
  {
    id: "landmark-national-gallery-of-slovenia",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.5036, 46.0530],
    name: { de: "Nationalgalerie Sloweniens", hu: "Szlovén Nemzeti Galéria", ro: "Galeria Națională a Sloveniei", en: "National Gallery of Slovenia" },
    description: {
      de: "Die Nationalgalerie von Slowenien ist das wichtigste Kunstmuseum des Landes und ein zentraler Kulturort in Ljubljana. Ihre Sammlung macht sie für Kunstreisen, Museumssuche und Hauptstadt-SEO relevant. Das Gebäude liefert zugleich ein elegantes historisches Stadtbild. Wer Kultur in Ljubljana sucht, kommt an der Nationalgalerie nicht vorbei.",
      hu: "A Szlovén Nemzeti Galéria az ország legfontosabb művészeti múzeuma és Ljubljana egyik központi kulturális helye. Gyűjteménye miatt fontos a művészeti utazások, múzeumkeresés és fővárosi SEO szempontjából. Az épület egyben elegáns történelmi városképet is ad. Aki ljubljanai kultúrát keres, nem kerülheti meg a galériát.",
      ro: "Galeria Națională a Sloveniei este cel mai important muzeu de artă al țării și un centru cultural major din Ljubljana. Colecția sa o face relevantă pentru turism artistic, căutări de muzee și SEO despre capitală. Clădirea oferă și o imagine urbană istorică elegantă. Pentru cultură în Ljubljana, galeria este indispensabilă.",
      en: "The National Gallery of Slovenia is the country's most important art museum and a central cultural site in Ljubljana. Its collection makes it relevant for art travel, museum searches, and capital-city SEO. The building also contributes to an elegant historic cityscape. If you search for culture in Ljubljana, the gallery is essential."
    },
    facts: {
      de: ["Wichtigstes Kunstmuseum des Landes", "In Ljubljana gelegen", "Starke Sammlung slowenischer Kunst", "Beliebt für Kulturreisen", "Zentral für Museums-SEO"],
      hu: ["Az ország legfontosabb művészeti múzeuma", "Ljubljanában található", "Erős szlovén művészeti gyűjtemény", "Népszerű kulturális utazásokhoz", "Kiemelt múzeumi SEO-hely"],
      ro: ["Cel mai important muzeu de artă al țării", "În Ljubljana", "Colecție puternică de artă slovenă", "Popular pentru turism cultural", "Loc central pentru SEO de muzee"],
      en: ["Country's top art museum", "Located in Ljubljana", "Strong Slovenian art collection", "Popular for cultural travel", "Core museum SEO location"]
    },
    image: "/geo-images/slovenia/landmark-national-gallery-of-slovenia.webp"
  },
  {
    id: "landmark-cankarjev-dom",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.5029, 46.0548],
    name: { de: "Cankarjev dom", hu: "Cankarjev dom", ro: "Cankarjev dom", en: "Cankarjev dom" },
    description: {
      de: "Cankarjev dom ist das größte Kultur- und Kongresszentrum Sloweniens und ein wichtiges Symbol der Hauptstadt. Der Komplex steht für Konzerte, Ausstellungen und große internationale Veranstaltungen. Für SEO rund um Ljubljana, Kultur und Events ist der Name sehr stark. Das Haus verbindet moderne Funktion mit zentraler Innenstadtlage.",
      hu: "A Cankarjev dom Szlovénia legnagyobb kulturális és kongresszusi központja, valamint a főváros fontos jelképe. Az épületegyüttes koncerteknek, kiállításoknak és nemzetközi rendezvényeknek ad otthont. Ljubljana-, kultúra- és esemény-SEO-ban nagyon erős név. Az épület a modern funkciót központi belvárosi fekvéssel köti össze.",
      ro: "Cankarjev dom este cel mai mare centru cultural și de congrese din Slovenia și un simbol important al capitalei. Complexul găzduiește concerte, expoziții și evenimente internaționale majore. Pentru SEO despre Ljubljana, cultură și evenimente, numele este foarte puternic. Clădirea combină funcționalitatea modernă cu o poziție centrală în oraș.",
      en: "Cankarjev dom is Slovenia's largest cultural and congress center and an important symbol of the capital. The complex hosts concerts, exhibitions, and major international events. For Ljubljana, culture, and events SEO, the name is very strong. The building combines modern function with a central downtown location."
    },
    facts: {
      de: ["Größtes Kulturzentrum des Landes", "Wichtiger Event- und Kongressort", "Im Zentrum von Ljubljana", "Beliebt für Konzerte und Messen", "Starker Name für Event-SEO"],
      hu: ["Az ország legnagyobb kulturális központja", "Fontos rendezvény- és kongresszusi helyszín", "Ljubljana központjában", "Koncertekhez és vásárokhoz népszerű", "Erős esemény-SEO név"],
      ro: ["Cel mai mare centru cultural al țării", "Loc important pentru evenimente și congrese", "În centrul Ljubljanei", "Popular pentru concerte și târguri", "Nume puternic pentru SEO de evenimente"],
      en: ["Largest cultural center in the country", "Major event and congress venue", "In central Ljubljana", "Popular for concerts and fairs", "Strong event SEO name"]
    },
    image: "/geo-images/slovenia/landmark-cankarjev-dom.webp"
  },
  {
    id: "landmark-ljubljana-opera-house",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.5020, 46.0536],
    name: { de: "Opernhaus Ljubljana", hu: "Ljubljanai Operaház", ro: "Opera din Ljubljana", en: "Ljubljana Opera House" },
    description: {
      de: "Das Opernhaus Ljubljana prägt die Kulturszene der Hauptstadt mit klassischer Architektur und einem starken Bühnenprofil. Es steht für Oper, Ballett und festliche Stadtabende im Zentrum. Für Kulturreisen und elegante Ljubljana-Bilder ist der Ort besonders wertvoll. Das Gebäude ergänzt das historische Stadtbild mit einer klaren kulturellen Marke.",
      hu: "A Ljubljanai Operaház klasszikus építészetével és erős színpadi profiljával határozza meg a főváros kulturális életét. Opera, balett és ünnepi városi esték szimbóluma a központban. Kulturális utakhoz és elegáns ljubljanai képekhez különösen értékes helyszín. Az épület erős kulturális márkával egészíti ki a történelmi városképet.",
      ro: "Opera din Ljubljana modelează scena culturală a capitalei prin arhitectura clasică și profilul său scenic puternic. Este un simbol al operei, baletului și serilor elegante din centrul orașului. Pentru turism cultural și imagini elegante din Ljubljana, locul este foarte valoros. Clădirea completează peisajul istoric cu o marcă culturală clară.",
      en: "The Ljubljana Opera House shapes the capital's cultural scene with classical architecture and a strong stage profile. It stands for opera, ballet, and elegant evenings in the city center. For cultural travel and refined Ljubljana imagery, the site is especially valuable. The building adds a clear cultural brand to the historic cityscape."
    },
    facts: {
      de: ["Klassisches Opernhaus in Ljubljana", "Starke Rolle für Oper und Ballett", "Im Stadtzentrum gelegen", "Beliebtes Kultur- und Fotomotiv", "Ergänzt die historische Innenstadt"],
      hu: ["Klasszikus operaház Ljubljanában", "Erős szerep opera és balett terén", "A belvárosban található", "Népszerű kulturális és fotómotívum", "Kiegészíti a történelmi belvárost"],
      ro: ["Operă clasică în Ljubljana", "Rol important pentru operă și balet", "Situată în centrul orașului", "Motiv cultural și fotografic popular", "Completează centrul istoric"],
      en: ["Classical opera house in Ljubljana", "Strong role for opera and ballet", "Located in the city center", "Popular cultural and photo motif", "Complements the historic downtown"]
    },
    image: "/geo-images/slovenia/landmark-ljubljana-opera-house.webp"
  },
  {
    id: "landmark-plecnik-house",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.5048, 46.0547],
    name: { de: "Plečnik-Haus", hu: "Plečnik-ház", ro: "Casa Plečnik", en: "Plečnik House" },
    description: {
      de: "Das Plečnik-Haus zeigt das persönliche Wohn- und Arbeitsumfeld des wichtigsten slowenischen Architekten. Es ist ein Muss für Architekturreisen und für alle, die Ljubljana über Plečnik verstehen wollen. Der Ort stärkt Suchanfragen zu Design, Stadtgeschichte und Kulturerbe. Seine intime Größe macht den Besuch sehr charakterstark.",
      hu: "A Plečnik-ház bemutatja Szlovénia legfontosabb építészének személyes otthonát és munkaterét. Kötelező hely építészeti utazásokhoz és mindazoknak, akik Plečnik felől akarják megérteni Ljubljanát. A hely erősíti a design, várostörténet és örökség témájú kereséseket. Intim mérete miatt nagyon karakteres élményt ad.",
      ro: "Casa Plečnik arată locuința și spațiul de lucru personal al celui mai important arhitect sloven. Este un loc obligatoriu pentru turismul de arhitectură și pentru a înțelege Ljubljana prin Plečnik. Site-ul întărește căutările despre design, istoria orașului și patrimoniu. Dimensiunea sa intimă îi dă o identitate foarte puternică.",
      en: "The Plečnik House shows the personal home and workspace of Slovenia's most important architect. It is a must for architecture travel and for understanding Ljubljana through Plečnik. The site strengthens searches about design, city history, and heritage. Its intimate scale gives the visit a very strong character."
    },
    facts: {
      de: ["Mit dem Architekten Plečnik verbunden", "Wohn- und Arbeitsort", "In Ljubljana gelegen", "Wichtig für Architekturfans", "Kompakter, persönlicher Kulturort"],
      hu: ["Plečnik építészhez kötődik", "Otthon és munkahely volt", "Ljubljanában található", "Fontos az építészet rajongóinak", "Kompakt, személyes kulturális hely"],
      ro: ["Legată de arhitectul Plečnik", "A fost locuință și atelier", "Situată în Ljubljana", "Importantă pentru pasionații de arhitectură", "Loc cultural compact și personal"],
      en: ["Linked to architect Plečnik", "Was home and workspace", "Located in Ljubljana", "Important for architecture fans", "Compact, personal cultural site"]
    },
    image: "/geo-images/slovenia/landmark-plecnik-house.webp"
  },
  {
    id: "landmark-metelkova-museum",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.5180, 46.0585],
    name: { de: "Metelkova-Museumsviertel", hu: "Metelkova múzeumnegyed", ro: "Zona muzeală Metelkova", en: "Metelkova Museum District" },
    description: {
      de: "Metelkova ist ein kreatives Viertel in Ljubljana, das sich zu einem markanten Kultur- und Museumsraum entwickelt hat. Die Mischung aus Kunst, Urbanität und alternativer Szene macht den Ort für moderne Stadtreisen relevant. Für Suchanfragen zu Ljubljana, Subkultur und zeitgenössischer Kreativität ist Metelkova stark. Das Viertel bringt eine ganz eigene Energie in die Hauptstadt.",
      hu: "Metelkova Ljubljana kreatív negyede, amely markáns kulturális és múzeumi térré vált. A művészet, az urbanitás és az alternatív szcéna keveréke miatt modern városi utakhoz releváns. Ljubljana-, szubkultúra- és kortárs kreativitás-kifejezésekben erős. A negyed teljesen saját energiát ad a fővárosnak.",
      ro: "Metelkova este un cartier creativ din Ljubljana care a devenit un spațiu cultural și muzeal foarte distinct. Amestecul de artă, urbanitate și scenă alternativă îl face relevant pentru city break-uri moderne. Pentru căutări despre Ljubljana, subcultură și creativitate contemporană, Metelkova este puternic. Cartierul aduce un tip de energie complet aparte în capitală.",
      en: "Metelkova is a creative district in Ljubljana that has grown into a distinctive cultural and museum space. Its mix of art, urban life, and alternative scene makes it relevant for modern city trips. For Ljubljana, subculture, and contemporary creativity searches, Metelkova is strong. The district brings a very unique energy to the capital."
    },
    facts: {
      de: ["Kreatives Viertel in Ljubljana", "Starker Kunst- und Subkulturort", "Ehemaliger Militärkomplex", "Beliebt bei jüngeren Reisenden", "Eigenständige urbane Marke"],
      hu: ["Ljubljana kreatív negyede", "Erős művészeti és szubkulturális hely", "Volt katonai komplexum", "Népszerű a fiatal utazók körében", "Önálló városi márka"],
      ro: ["Cartier creativ în Ljubljana", "Spațiu puternic pentru artă și subcultură", "Fost complex militar", "Popular printre tinerii călători", "Marcă urbană distinctă"],
      en: ["Creative district in Ljubljana", "Strong art and subculture venue", "Former military complex", "Popular with younger travelers", "Distinct urban brand"]
    },
    image: "/geo-images/slovenia/landmark-metelkova-museum.webp"
  },
  {
    id: "port-koper",
    type: "port",
    parent: "country-slovenia",
    coords: [13.7310, 45.5484],
    name: { de: "Hafen Koper", hu: "Koper kikötő", ro: "Portul Koper", en: "Port of Koper" },
    description: {
      de: "Der Hafen Koper ist Sloweniens wichtigstes Tor zur Adria und ein Schlüsselort für Handel und Logistik. Die Anlage prägt nicht nur die Wirtschaft, sondern auch die Identität der Küste. Für Industrie-, Logistik- und Hafen-Suchanfragen ist Koper ein absoluter Kernbegriff. Der Standort verbindet Seehandel, Verkehr und internationale Reichweite.",
      hu: "A koperi kikötő Szlovénia legfontosabb adriai kapuja és a kereskedelem valamint a logisztika kulcshelyszíne. A létesítmény nemcsak a gazdaságot, hanem a partvidék identitását is meghatározza. Ipari, logisztikai és kikötői kereséseknél Koper abszolút központi név. A helyszín a tengeri kereskedelmet, a szállítást és a nemzetközi elérést köti össze.",
      ro: "Portul Koper este cea mai importantă poartă a Sloveniei spre Adriatică și un loc-cheie pentru comerț și logistică. Facilitatea modelează nu doar economia, ci și identitatea coastei. Pentru căutări despre industrie, logistică și porturi, Koper este un termen central. Locația combină comerțul maritim, transportul și deschiderea internațională.",
      en: "Port of Koper is Slovenia's main gateway to the Adriatic and a key place for trade and logistics. The facility shapes not only the economy but also the identity of the coast. For industrial, logistics, and port searches, Koper is a core keyword. The site combines sea trade, transport, and international reach."
    },
    facts: {
      de: ["Größter Seehafen Sloweniens", "Wichtig für Logistik und Handel", "An der Adriaküste gelegen", "Schlüsselstandort für Exporte", "Zentral für die Küstenwirtschaft"],
      hu: ["Szlovénia legnagyobb tengeri kikötője", "Fontos logisztikai és kereskedelmi pont", "Az Adria-parton található", "Kulcshelyszín az exportban", "Központi a partvidéki gazdaságnak"],
      ro: ["Cel mai mare port maritim al Sloveniei", "Important pentru logistică și comerț", "Situat pe coasta Adriaticii", "Punct cheie pentru exporturi", "Central pentru economia litoralului"],
      en: ["Slovenia's largest seaport", "Important for logistics and trade", "Located on the Adriatic coast", "Key export location", "Central to the coastal economy"]
    },
    image: "/geo-images/slovenia/port-koper.webp"
  },
  {
    id: "industry-krka-novo-mesto",
    type: "industry",
    parent: "country-slovenia",
    coords: [15.1718, 45.8018],
    name: { de: "Krka Novo Mesto", hu: "Krka Novo Mesto", ro: "Krka Novo Mesto", en: "Krka Novo Mesto" },
    description: {
      de: "Krka ist einer der bekanntesten Industrienamen Sloweniens und ein wichtiger Pharmastandort in Novo Mesto. Das Unternehmen steht für Forschung, Produktion und internationale Reichweite. Für Industrie-Suchanfragen zu Slowenien ist Krka ein starker Markenname mit klarer regionaler Verankerung. Der Standort zeigt, wie modern die Wirtschaft im Südosten des Landes ist.",
      hu: "A Krka Szlovénia egyik legismertebb ipari neve és egy fontos gyógyszeripari központ Novo Mestóban. A vállalat a kutatást, a gyártást és a nemzetközi jelenlétet képviseli. Szlovéniai ipari keresésekben a Krka erős márkanév, jól látható regionális kötődéssel. A helyszín megmutatja, mennyire modern a délkelet-szlovén gazdaság.",
      ro: "Krka este unul dintre cele mai cunoscute nume industriale din Slovenia și un important centru farmaceutic din Novo Mesto. Compania reprezintă cercetarea, producția și o prezență internațională puternică. Pentru căutări despre industrie în Slovenia, Krka este un brand foarte puternic, cu legătură regională clară. Locația arată cât de modernă este economia din sud-estul țării.",
      en: "Krka is one of the best-known industrial names in Slovenia and a major pharmaceutical site in Novo Mesto. The company stands for research, production, and international reach. For industrial Slovenia searches, Krka is a strong brand with a clear regional anchor. The site shows how modern the economy in the southeast really is."
    },
    facts: {
      de: ["Pharma-Marke mit Sitz in Novo Mesto", "Starker Forschungs- und Produktionsfokus", "International bekannt", "Wichtiger Arbeitgeber in der Region", "Symbol moderner slowenischer Industrie"],
      hu: ["Novo Mestóban működő gyógyszermárka", "Erős kutatási és gyártási fókusz", "Nemzetközileg ismert", "Fontos regionális munkaadó", "A modern szlovén ipar szimbóluma"],
      ro: ["Marcă farmaceutică din Novo Mesto", "Focus puternic pe cercetare și producție", "Cunoscută internațional", "Angajator important în regiune", "Simbol al industriei moderne slovene"],
      en: ["Pharma brand based in Novo Mesto", "Strong research and production focus", "Internationally recognized", "Important regional employer", "Symbol of modern Slovenian industry"]
    },
    image: "/geo-images/slovenia/industry-krka-novo-mesto.webp"
  }
];
export const sloveniaNature: POI[] = [
  {
    id: "nat-triglav",
    type: "landmark",
    parent: "country-slovenia",
    coords: [13.8367, 46.3783],
    name: {
      de: "Triglav-Nationalpark und Gipfel",
      hu: "Triglav NP + csúcs 2864m",
      ro: "Parcul Național Triglav + vârf 2864m",
      en: "Triglav National Park and Peak"
    },
    description: {
      de: "Der Triglav-Nationalpark schützt den höchsten Berg Sloweniens und weite Teile der Julischen Alpen.",
      hu: "A Triglav Nemzeti Park Szlovénia legmagasabb hegyét és a Júliai-Alpok nagy részét védi.",
      ro: "Parcul Național Triglav protejează cel mai înalt munte al Sloveniei și mari părți ale Alpilor Iulieni.",
      en: "Triglav National Park protects Slovenia's highest mountain and large parts of the Julian Alps."
    },
    facts: {
      de: [
        "Triglav ist 2864 Meter hoch.",
        "Der Berg gilt als nationales Symbol Sloweniens.",
        "Der Park ist das einzige Nationalparkgebiet des Landes.",
        "Er ist ein Kerngebiet für Wandern und Bergsteigen."
      ],
      hu: [
        "A Triglav 2864 méter magas.",
        "A hegy Szlovénia nemzeti szimbóluma.",
        "A park az ország egyetlen nemzeti parkja.",
        "A térség a túrázás és hegymászás központja."
      ],
      ro: [
        "Triglav are 2864 de metri.",
        "Muntele este un simbol național al Sloveniei.",
        "Parcul este singurul parc național al țării.",
        "Zona este un centru major pentru drumeții și alpinism."
      ],
      en: [
        "Triglav is 2,864 meters high.",
        "The mountain is a national symbol of Slovenia.",
        "The park is the country's only national park.",
        "It is a major area for hiking and mountaineering."
      ]
    },
    image: "/geo-images/slovenia/nat-triglav.webp"
  },
  {
    id: "nat-lake-bled",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.1043, 46.3625],
    name: {
      de: "Bleder See",
      hu: "Bled-tó",
      ro: "Lacul Bled",
      en: "Lake Bled"
    },
    description: {
      de: "Der Bleder See ist ein smaragdgrüner Alpensee mit Inselkirche und einer der bekanntesten Naturorte des Landes.",
      hu: "A Bled-tó egy smaragdzöld alpesi tó szigettemplommal, és az ország egyik legismertebb természeti helyszíne.",
      ro: "Lacul Bled este un lac alpin de culoare smarald, cu o biserică pe insulă, și unul dintre cele mai cunoscute locuri naturale ale țării.",
      en: "Lake Bled is an emerald Alpine lake with an island church and one of the country's most famous natural places."
    },
    facts: {
      de: [
        "Die Insel in der Mitte des Sees ist ein seltenes Naturbild in Slowenien.",
        "Pletna-Boote bringen Besucher zur Insel.",
        "Die Uferlage mit den Bergen macht den See besonders malerisch.",
        "Der See ist ein Symbol des slowenischen Alpentourismus."
      ],
      hu: [
        "A tó közepén lévő sziget ritka természeti látvány Szlovéniában.",
        "A szigetre Pletna csónakok viszik a látogatókat.",
        "A hegyekkel övezett part miatt a tó különösen festői.",
        "A tó a szlovén alpesi turizmus egyik szimbóluma."
      ],
      ro: [
        "Insula din mijlocul lacului este o imagine naturală rară în Slovenia.",
        "Bărcile Pletna duc vizitatorii la insulă.",
        "Așezarea la poalele munților face lacul deosebit de pitoresc.",
        "Lacul este un simbol al turismului alpin sloven."
      ],
      en: [
        "The island in the middle of the lake is a rare natural sight in Slovenia.",
        "Pletna boats take visitors to the island.",
        "The mountain setting makes the lake especially picturesque.",
        "The lake is a symbol of Slovenian Alpine tourism."
      ]
    },
    image: "/geo-images/slovenia/nat-lake-bled.webp"
  },
  {
    id: "nat-soca",
    type: "landmark",
    parent: "country-slovenia",
    coords: [13.62, 46.34],
    name: {
      de: "Soča-Tal",
      hu: "Soča-völgy",
      ro: "Valea Soča",
      en: "Soča Valley"
    },
    description: {
      de: "Das Soča-Tal ist berühmt für seinen smaragdgrünen Fluss und die dramatische alpine Landschaft.",
      hu: "A Soča-völgy smaragdzöld folyójáról és drámai alpesi tájáról híres.",
      ro: "Valea Soča este renumită pentru râul său de culoare smarald și peisajul alpin dramatic.",
      en: "The Soča Valley is famous for its emerald-green river and dramatic Alpine scenery."
    },
    facts: {
      de: [
        "Die Farbe des Flusses ist außergewöhnlich intensiv smaragdgrün.",
        "Das Tal spielte im Ersten Weltkrieg eine wichtige Frontrolle.",
        "Es ist ein Hotspot für Rafting, Kajak und Canyoning.",
        "Die Landschaft kombiniert Fluss, Schluchten und Bergkulisse."
      ],
      hu: [
        "A folyó színe különlegesen intenzív smaragdzöld.",
        "A völgy az első világháborúban fontos frontszakasz volt.",
        "Népszerű hely raftinghoz, kajakozáshoz és canyoninghoz.",
        "A táj a folyót, szurdokokat és hegyeket egyszerre mutatja."
      ],
      ro: [
        "Culoarea râului este un verde smarald deosebit de intens.",
        "Valea a avut un rol important de front în Primul Război Mondial.",
        "Este un punct de top pentru rafting, caiac și canyoning.",
        "Peisajul combină râul, cheile și fundalul montan."
      ],
      en: [
        "The river's color is an exceptionally intense emerald green.",
        "The valley played an important front-line role in World War I.",
        "It is a hotspot for rafting, kayaking, and canyoning.",
        "The landscape combines river, gorges, and mountain scenery."
      ]
    },
    image: "/geo-images/slovenia/nat-soca.webp"
  },
  {
    id: "nat-kranjska-gora",
    type: "landmark",
    parent: "country-slovenia",
    coords: [13.7828, 46.4842],
    name: {
      de: "Kranjska Gora",
      hu: "Kranjska Gora",
      ro: "Kranjska Gora",
      en: "Kranjska Gora"
    },
    description: {
      de: "Kranjska Gora ist ein alpiner Ferienort in Nordwestslowenien, bekannt für Wintersport und Berglandschaften.",
      hu: "Kranjska Gora egy alpesi üdülőhely Északnyugat-Szlovéniában, amely téli sportjairól és hegyi tájáról híres.",
      ro: "Kranjska Gora este o stațiune alpină din nord-vestul Sloveniei, cunoscută pentru sporturile de iarnă și peisajele montane.",
      en: "Kranjska Gora is an Alpine resort in northwestern Slovenia, known for winter sports and mountain scenery."
    },
    facts: {
      de: [
        "Der Ort ist ein Zentrum für Skifahren und Wintersport.",
        "Planica liegt in der Nähe und ist berühmt für Skispringen.",
        "Die Region öffnet den Zugang zu den Julischen Alpen.",
        "Im Sommer ist sie ein Ausgangspunkt für Wanderungen."
      ],
      hu: [
        "A település a síelés és a téli sportok központja.",
        "A közeli Planica a síugrásáról híres.",
        "A régió kaput nyit a Júliai-Alpok felé.",
        "Nyáron túrák kiindulópontja."
      ],
      ro: [
        "Localitatea este un centru pentru schi și sporturi de iarnă.",
        "Planica se află în apropiere și este renumită pentru săriturile cu schiurile.",
        "Regiunea oferă acces la Alpii Iulieni.",
        "Vara este un punct de plecare pentru drumeții."
      ],
      en: [
        "The place is a center for skiing and winter sports.",
        "Nearby Planica is famous for ski jumping.",
        "The region opens access to the Julian Alps.",
        "In summer it is a starting point for hikes."
      ]
    },
    image: "/geo-images/slovenia/nat-kranjska-gora.webp"
  },
  {
    id: "nat-vintgar",
    type: "landmark",
    parent: "country-slovenia",
    coords: [14.0983, 46.3933],
    name: {
      de: "Vintgar-Klamm",
      hu: "Vintgar-szurdok",
      ro: "Canionul Vintgar",
      en: "Vintgar Gorge"
    },
    description: {
      de: "Die Vintgar-Klamm ist ein kurzer, aber spektakulärer Schluchtweg mit Holzstegen entlang des Flusses Radovna.",
      hu: "A Vintgar-szurdok egy rövid, de látványos szurdokút, amely fa pallókon vezet a Radovna folyó mentén.",
      ro: "Canionul Vintgar este o potecă de chei scurtă, dar spectaculoasă, cu pasarele de lemn de-a lungul râului Radovna.",
      en: "Vintgar Gorge is a short but spectacular gorge walk with wooden boardwalks along the Radovna River."
    },
    facts: {
      de: [
        "Der Weg ist etwa 1,6 Kilometer lang.",
        "Holzstege führen direkt durch die enge Schlucht.",
        "Wasserfälle und Stromschnellen prägen den Pfad.",
        "Die Klamm liegt nicht weit von Bled entfernt."
      ],
      hu: [
        "Az út nagyjából 1,6 kilométer hosszú.",
        "A fapallók közvetlenül a szűk szurdokon vezetnek át.",
        "Vízesések és sebes szakaszok teszik látványossá.",
        "A szurdok Bled közelében található."
      ],
      ro: [
        "Traseul are aproximativ 1,6 kilometri.",
        "Pasarelele de lemn traversează direct canionul îngust.",
        "Cascada și repezișurile dau farmec traseului.",
        "Cheile se află nu departe de Bled."
      ],
      en: [
        "The trail is about 1.6 kilometers long.",
        "Wooden boardwalks run directly through the narrow gorge.",
        "Waterfalls and rapids define the route.",
        "The gorge is not far from Bled."
      ]
    },
    image: "/geo-images/slovenia/nat-vintgar.webp"
  },
  {
    id: "mountain-mangart",
    type: "mountain",
    parent: "country-slovenia",
    coords: [13.6343, 46.4435],
    name: { de: "Mangart", hu: "Mangart", ro: "Mangart", en: "Mangart" },
    description: {
      de: "Mangart ist einer der bekanntesten Gipfel Sloweniens an der Grenze zu Italien. Der Berg dominiert die Julischen Alpen und ist ein starkes Ziel für Bergtourismus und Panoramafotos. Für SEO zu Sloweniens Bergen ist Mangart ein sehr relevanter Name. Die alpine Lage macht ihn zu einem echten Highlight für Wander- und Roadtrip-Inhalte.",
      hu: "A Mangart Szlovénia egyik legismertebb csúcsa az olasz határ közelében. A hegy uralja a Júliai-Alpok egy részét, és erős célpont a hegyi turizmushoz és panorámafényképekhez. Szlovénia hegyeire keresve a Mangart nagyon releváns név. Az alpesi fekvés miatt igazi csúcsélmény túrákhoz és roadtrip-tartalmakhoz.",
      ro: "Mangart este unul dintre cei mai cunoscuți vârfuri ai Sloveniei, aproape de granița cu Italia. Muntele domină Alpii Iulieni și este o țintă puternică pentru turism montan și fotografii panoramice. Pentru SEO despre munții Sloveniei, Mangart este un nume foarte relevant. Poziția alpină îl face un punct de vârf pentru drumeții și road trip-uri.",
      en: "Mangart is one of Slovenia's best-known peaks near the Italian border. The mountain dominates the Julian Alps and is a strong target for mountain tourism and panoramic photos. For Slovenia mountain SEO, Mangart is a highly relevant name. Its Alpine setting makes it a real highlight for hiking and road-trip content."
    },
    facts: {
      de: ["Ein markanter Gipfel der Julischen Alpen", "Nahe der Grenze zu Italien", "Beliebt bei Bergwanderern", "Starkes Motiv für Panoramafotos", "Hohe Sichtbarkeit im alpinen Tourismus"],
      hu: ["A Júliai-Alpok jellegzetes csúcsa", "Közel van az olasz határhoz", "Népszerű a hegyi túrázók körében", "Erős panorámafotos motívum", "Nagy láthatóság az alpesi turizmusban"],
      ro: ["Vârf emblematic al Alpilor Iulieni", "Aproape de granița cu Italia", "Popular printre drumeți", "Motiv puternic pentru panorame", "Foarte vizibil în turismul alpin"],
      en: ["A standout peak in the Julian Alps", "Near the Italian border", "Popular with mountain hikers", "Strong panoramic photo motif", "Highly visible in Alpine tourism"]
    },
    image: "/geo-images/slovenia/mountain-mangart.webp"
  },
  {
    id: "mountain-stol",
    type: "mountain",
    parent: "country-slovenia",
    coords: [14.2810, 46.4410],
    name: { de: "Stol", hu: "Stol", ro: "Stol", en: "Stol" },
    description: {
      de: "Stol ist ein bedeutender Gipfel in den Karawanken und ein starkes Ziel für alpine Suchbegriffe. Der Berg wirkt über weite Strecken der Region sichtbar und bietet klassische Alpenlandschaften. Für Wanderseiten und Berg-SEO in Slowenien ist Stol sehr wertvoll. Die Mischung aus Grenze, Höhe und Weitblick macht den Gipfel besonders markant.",
      hu: "A Stol fontos csúcs a Karavankákban, és erős célpont az alpesi keresésekhez. A hegy a régió nagy részéről látható, és klasszikus alpesi tájakat kínál. Túraoldalakhoz és szlovén hegyi SEO-hoz Stol nagyon értékes. A határhelyzet, a magasság és a távlat különösen karakteressé teszi.",
      ro: "Stol este un vârf important în Karavanke și o țintă puternică pentru căutările alpine. Muntele este vizibil pe suprafețe mari din regiune și oferă peisaje alpine clasice. Pentru site-uri de drumeții și SEO montan în Slovenia, Stol este foarte valoros. Combinația de frontieră, înălțime și priveliști îl face deosebit de distinct.",
      en: "Stol is an important peak in the Karawanks and a strong target for Alpine searches. The mountain is visible across much of the region and offers classic Alpine scenery. For hiking sites and mountain SEO in Slovenia, Stol is very valuable. Its border location, height, and wide views make it especially distinctive."
    },
    facts: {
      de: ["Karawanken-Gipfel", "Starker Wanderberg", "Weit sichtbar in der Region", "Beliebt für Alpenblicke", "Grenznahe Berglage"],
      hu: ["Karavankák csúcsa", "Erős túrahegy", "A régióból messziről látható", "Népszerű alpesi kilátásért", "Határ menti hegyi fekvés"],
      ro: ["Vârf din Karavanke", "Munte popular pentru drumeții", "Vizibil pe distanțe mari", "Apreciat pentru priveliști alpine", "Poziție montană de frontieră"],
      en: ["Karawanks peak", "Strong hiking mountain", "Visible across the region", "Popular for Alpine views", "Borderland mountain location"]
    },
    image: "/geo-images/slovenia/mountain-stol.webp"
  },
  {
    id: "lake-bohinj",
    type: "lake",
    parent: "country-slovenia",
    coords: [13.8597, 46.2867],
    name: { de: "Bohinjer See", hu: "Bohinji-tó", ro: "Lacul Bohinj", en: "Lake Bohinj" },
    description: {
      de: "Der Bohinjer See ist der größte natürliche See Sloweniens und ein klassisches Alpenziel. Er liegt in der Nähe des Triglav-Gebiets und bietet ein ruhigeres Gegenstück zum Bleder See. Für Natur-, See- und Alpen-SEO ist Bohinj ein starker Name mit hohem Suchwert. Die Kombination aus Wasser, Bergen und Stille macht den Ort besonders attraktiv.",
      hu: "A Bohinji-tó Szlovénia legnagyobb természetes tava és klasszikus alpesi célpont. A Triglav térségéhez közel fekszik, és nyugodtabb ellenpontja a Bledi-tónak. Természetre, tóra és alpesi SEO-ra Bohinj nagyon erős név. A víz, a hegyek és a csend együtt különösen vonzóvá teszik a helyet.",
      ro: "Lacul Bohinj este cel mai mare lac natural din Slovenia și o destinație alpină clasică. Se află aproape de zona Triglav și oferă o alternativă mai liniștită la lacul Bled. Pentru SEO despre natură, lacuri și Alpi, Bohinj este un nume foarte puternic. Combinația de apă, munți și liniște îl face deosebit de atractiv.",
      en: "Lake Bohinj is Slovenia's largest natural lake and a classic Alpine destination. It sits near the Triglav area and offers a quieter counterpart to Lake Bled. For nature, lake, and Alpine SEO, Bohinj is a very strong name. The mix of water, mountains, and silence makes it especially attractive."
    },
    facts: {
      de: ["Größter natürlicher See des Landes", "Nahe dem Triglav-Gebiet", "Beliebt für Schwimmen und Wandern", "Ruhiger als der Bleder See", "Klassisches Alpenseen-Ziel"],
      hu: ["Az ország legnagyobb természetes tava", "Közel van a Triglav térségéhez", "Népszerű úszáshoz és túrázáshoz", "Nyugodtabb, mint a Bledi-tó", "Klasszikus alpesi tó-célpont"],
      ro: ["Cel mai mare lac natural al țării", "Aproape de zona Triglav", "Popular pentru înot și drumeții", "Mai liniștit decât lacul Bled", "Destinație clasică de lac alpin"],
      en: ["Largest natural lake in the country", "Near the Triglav area", "Popular for swimming and hiking", "Quieter than Lake Bled", "Classic Alpine lake destination"]
    },
    image: "/geo-images/slovenia/lake-bohinj.webp"
  },
  {
    id: "lake-jasna",
    type: "lake",
    parent: "country-slovenia",
    coords: [13.7740, 46.4850],
    name: { de: "Jasna-See", hu: "Jasna-tó", ro: "Lacul Jasna", en: "Lake Jasna" },
    description: {
      de: "Der Jasna-See liegt bei Kranjska Gora und ist ein beliebter alpiner Fotospot. Das Wasser, die Bergkulisse und die gute Erreichbarkeit machen ihn für Kurzreisen und Social Content attraktiv. Für Suchbegriffe zu Sloweniens Seen und Alpenorten ist Jasna sehr nützlich. Der Ort steht für klare Farben, Ruhe und schnelle Bergnähe.",
      hu: "A Jasna-tó Kranjska Goránál található, és kedvelt alpesi fotópont. A víz, a hegyi háttér és a jó megközelíthetőség miatt vonzó rövid utakhoz és közösségi tartalmakhoz. Szlovéniai tavakra és alpesi helyekre keresve Jasna nagyon hasznos név. A hely a tiszta színeket, a nyugalmat és a közeli hegyeket képviseli.",
      ro: "Lacul Jasna se află lângă Kranjska Gora și este un loc foto alpin foarte popular. Apa, fundalul montan și accesibilitatea bună îl fac atractiv pentru excursii scurte și conținut social. Pentru căutări despre lacurile Sloveniei și locuri alpine, Jasna este foarte util. Locul simbolizează culorile clare, liniștea și apropierea rapidă de munți.",
      en: "Lake Jasna sits near Kranjska Gora and is a popular Alpine photo spot. The water, mountain backdrop, and easy access make it attractive for short trips and social content. For Slovenian lakes and Alpine places SEO, Jasna is very useful. The site stands for clear colors, calm, and quick access to mountains."
    },
    facts: {
      de: ["Bei Kranjska Gora gelegen", "Beliebter Fotospot", "Klare alpine Kulisse", "Gut erreichbar für Tagesausflüge", "Stark für Social-Media-Bilder"],
      hu: ["Kranjska Gora mellett található", "Kedvelt fotópont", "Tiszta alpesi háttér", "Jól elérhető egynapos kiránduláshoz", "Erős közösségi média képekre"],
      ro: ["Lângă Kranjska Gora", "Loc foto popular", "Cadru alpin clar", "Ușor de vizitat într-o zi", "Puternic pentru imagini social media"],
      en: ["Near Kranjska Gora", "Popular photo spot", "Clear Alpine backdrop", "Easy day-trip access", "Strong for social-media visuals"]
    },
    image: "/geo-images/slovenia/lake-jasna.webp"
  },
  {
    id: "river-soca",
    type: "river",
    parent: "country-slovenia",
    coords: [13.7390, 46.3360],
    name: { de: "Soča", hu: "Soča", ro: "Soča", en: "Soča River" },
    description: {
      de: "Die Soča ist berühmt für ihr türkisfarbenes Wasser und zählt zu den schönsten Flüssen Europas. Sie prägt das Soča-Tal und ist ein Magnet für Rafting, Kajak und Naturreisen. Für Fluss-, Outdoor- und Slowenien-SEO ist Soča ein absolutes Schlüsselwort. Der Fluss verbindet spektakuläre Landschaft mit Abenteuer und klarer Wiedererkennbarkeit.",
      hu: "A Soča türkiz vizéről híres, és Európa egyik legszebb folyói közé tartozik. Meghatározza a Soča-völgyet, és mágnes a rafting, a kajak és a természetjárás számára. Folyóra, outdoorra és Szlovénia SEO-ra a Soča abszolút kulcsszó. A folyó látványos tájat, kalandot és erős felismerhetőséget ad.",
      ro: "Soča este celebră pentru apa sa turcoaz și este considerată unul dintre cele mai frumoase râuri din Europa. Definește valea Soča și atrage pasionați de rafting, caiac și natură. Pentru SEO despre râuri, outdoor și Slovenia, Soča este un cuvânt-cheie absolut. Râul combină peisaj spectaculos, aventură și recunoaștere imediată.",
      en: "The Soča River is famous for its turquoise water and is considered one of Europe's most beautiful rivers. It defines the Soča Valley and attracts rafting, kayaking, and nature travelers. For river, outdoor, and Slovenia SEO, Soča is an absolute keyword. The river combines spectacular scenery, adventure, and instant recognizability."
    },
    facts: {
      de: ["Türkisgrüner Fluss", "Prägt das Soča-Tal", "Beliebt für Rafting und Kajak", "Einer der bekanntesten Flüsse des Landes", "Starkes Outdoor-Symbol"],
      hu: ["Türkiz színű folyó", "Meghatározza a Soča-völgyet", "Raftingra és kajakra népszerű", "Az ország egyik legismertebb folyója", "Erős outdoor szimbólum"],
      ro: ["Râu cu apă turcoaz", "Definește valea Soča", "Popular pentru rafting și caiac", "Unul dintre cele mai cunoscute râuri", "Simbol puternic al outdoor-ului"],
      en: ["Turquoise river", "Defines the Soča Valley", "Popular for rafting and kayaking", "One of the country's best-known rivers", "Strong outdoor symbol"]
    },
    image: "/geo-images/slovenia/river-soca.webp"
  },
  {
    id: "river-krka",
    type: "river",
    parent: "country-slovenia",
    coords: [15.1640, 45.8005],
    name: { de: "Krka", hu: "Krka", ro: "Krka", en: "Krka River" },
    description: {
      de: "Die Krka schlängelt sich durch Südslowenien und formt das Stadtbild von Novo Mesto. Der Fluss ist eng mit Burgen, alten Siedlungen und Weinlandschaften verbunden. Für Fluss- und Regional-SEO in Slowenien ist Krka ein starker Name mit klarer räumlicher Identität. Die ruhige Wasserlinie macht ihn besonders gut für Landschaftscontent.",
      hu: "A Krka Dél-Szlovénián kanyarog át, és meghatározza Novo Mesto városképét. A folyó szorosan kötődik várakhoz, régi településekhez és borvidékekhez. Folyóra és regionális SEO-ra a Krka erős, jól körülhatárolható név. A nyugodt vízvonal különösen alkalmassá teszi tájképi tartalmakhoz.",
      ro: "Krka șerpuiește prin sudul Sloveniei și modelează peisajul urban al orașului Novo Mesto. Râul este strâns legat de castele, așezări vechi și peisaje viticole. Pentru SEO despre râuri și regiuni în Slovenia, Krka este un nume puternic, cu identitate clară. Linia calmă a apei îl face ideal pentru conținut de peisaj.",
      en: "The Krka River winds through southern Slovenia and shapes the cityscape of Novo Mesto. The river is closely tied to castles, old settlements, and wine landscapes. For river and regional SEO in Slovenia, Krka is a strong name with a clear geographic identity. Its calm waterline makes it especially good for landscape content."
    },
    facts: {
      de: ["Wichtiger Fluss in Südslowenien", "Prägt Novo Mesto", "Verbunden mit Weinlandschaften", "Beliebt für ruhige Uferbilder", "Starke regionale Identität"],
      hu: ["Fontos dél-szlovén folyó", "Meghatározza Novo Mesto képét", "Borvidékekhez kötődik", "Népszerű nyugodt partszakaszokért", "Erős regionális identitás"],
      ro: ["Râu important din sudul Sloveniei", "Modelează Novo Mesto", "Legat de zone viticole", "Popular pentru maluri liniștite", "Identitate regională clară"],
      en: ["Important southern Slovenian river", "Shapes Novo Mesto", "Linked to wine landscapes", "Popular for calm riverbanks", "Strong regional identity"]
    },
    image: "/geo-images/slovenia/river-krka.webp"
  },
  {
    id: "island-bled",
    type: "island",
    parent: "country-slovenia",
    coords: [14.1700, 46.3640],
    name: { de: "Bleder Insel", hu: "Bledi-sziget", ro: "Insula Bled", en: "Bled Island" },
    description: {
      de: "Die Bleder Insel ist das bekannteste Inselbild Sloweniens und liegt mitten im Bleder See. Die kleine Inselkirche macht den Ort sofort wiedererkennbar und extrem suchstark. Für Natur-, See- und Alpen-SEO ist sie ein ikonischer Kernbegriff. Zusammen mit dem See entsteht ein weltweit vermarktbares Bild von Slowenien.",
      hu: "A Bledi-sziget Szlovénia legismertebb szigetképe, és a Bledi-tó közepén fekszik. A kis szigeti templom azonnal felismerhetővé és nagyon keresetté teszi a helyet. Természet-, tó- és alpesi SEO-ban ikonikus kulcsszó. A tóval együtt világszerte jól eladható szlovén képet ad.",
      ro: "Insula Bled este cea mai cunoscută imagine de insulă din Slovenia și se află chiar în mijlocul lacului Bled. Mica biserică de pe insulă face locul imediat recognoscibil și foarte căutat. Pentru SEO despre natură, lacuri și Alpi, este un cuvânt-cheie iconic. Împreună cu lacul, creează o imagine slovenă ușor de promovat la nivel global.",
      en: "Bled Island is Slovenia's most famous island image and sits in the middle of Lake Bled. The small island church makes the place instantly recognizable and highly searchable. For nature, lake, and Alpine SEO, it is an iconic keyword. Together with the lake, it creates a globally marketable image of Slovenia."
    },
    facts: {
      de: ["Liegt mitten im Bleder See", "Bekannt für die Inselkirche", "Symbol des slowenischen Tourismus", "Starkes Motiv für Postkarten", "Nur per Boot erreichbar"],
      hu: ["A Bledi-tó közepén található", "A szigeti templomról híres", "A szlovén turizmus szimbóluma", "Erős képeslapmotívum", "Csak csónakkal érhető el"],
      ro: ["Situată în mijlocul lacului Bled", "Cunoscută pentru biserica de pe insulă", "Simbol al turismului sloven", "Motiv puternic de carte poștală", "Accesibilă doar cu barca"],
      en: ["Located in the middle of Lake Bled", "Known for the island church", "A symbol of Slovenian tourism", "Strong postcard motif", "Accessible only by boat"]
    },
    image: "/geo-images/slovenia/island-bled.webp"
  },
  {
    id: "forest-kocevski-rog",
    type: "forest",
    parent: "country-slovenia",
    coords: [14.8510, 45.6500],
    name: { de: "Kočevski Rog", hu: "Kočevski Rog", ro: "Kočevski Rog", en: "Kočevski Rog" },
    description: {
      de: "Kočevski Rog ist eines der größten Waldgebiete Sloweniens und ein wichtiges Naturziel im Süden. Die dichten Wälder prägen die Landschaft und geben der Region eine starke Wildnis-Identität. Für Natur-, Wald- und Outdoor-SEO ist der Name sehr wertvoll. Gleichzeitig steht die Gegend für Ruhe, Abgeschiedenheit und tiefes Grün.",
      hu: "Kočevski Rog Szlovénia egyik legnagyobb erdővidéke és fontos természeti célpont délen. A sűrű erdők meghatározzák a tájat, és erős vadon-identitást adnak a térségnek. Természet-, erdő- és outdoor SEO-ra a név nagyon értékes. A terület a csendet, az elszigeteltséget és a mélyzöld erdőket képviseli.",
      ro: "Kočevski Rog este una dintre cele mai mari zone împădurite din Slovenia și o destinație naturală importantă în sud. Pădurile dese definesc peisajul și dau regiunii o identitate puternică de sălbăticie. Pentru SEO despre natură, păduri și outdoor, numele este foarte valoros. Zona reprezintă liniște, izolare și verde intens.",
      en: "Kočevski Rog is one of Slovenia's largest forest areas and an important nature destination in the south. Dense woods shape the landscape and give the region a strong wilderness identity. For nature, forest, and outdoor SEO, the name is very valuable. The area stands for quiet, remoteness, and deep green forest."
    },
    facts: {
      de: ["Großes Waldgebiet im Süden", "Starke Wildnis-Identität", "Beliebt für Naturtourismus", "Wichtiger Lebensraum für Wildtiere", "Symbol für ruhige Wälder"],
      hu: ["Nagy erdővidék délen", "Erős vadon-identitás", "Népszerű természetjáró célpont", "Fontos vadélőhely", "A csendes erdők szimbóluma"],
      ro: ["Zonă forestieră mare în sud", "Identitate puternică de sălbăticie", "Populară pentru turism de natură", "Habitat important pentru fauna sălbatică", "Simbol al pădurilor liniștite"],
      en: ["Large forest area in the south", "Strong wilderness identity", "Popular for nature tourism", "Important wildlife habitat", "Symbol of quiet forests"]
    },
    image: "/geo-images/slovenia/forest-kocevski-rog.webp"
  },
  {
    id: "industry-revoz-novo-mesto",
    type: "industry",
    parent: "country-slovenia",
    coords: [15.1645, 45.8032],
    name: { de: "Revoz Novo Mesto", hu: "Revoz Novo Mesto", ro: "Revoz Novo Mesto", en: "Revoz Novo Mesto" },
    description: {
      de: "Revoz ist ein zentraler Automobilstandort in Slowenien und eng mit Novo Mesto verbunden. Das Werk steht für moderne Fertigung, Export und industrielle Kompetenz. Für Suchanfragen zu Autoindustrie und Produktion in Slowenien ist Revoz ein klarer Treffer. Der Standort zeigt den starken industriellen Kern der Region Dolenjska.",
      hu: "A Revoz Szlovénia egyik központi autóipari helyszíne, szorosan kötődik Novo Mestóhoz. Az üzem a modern gyártást, az exportot és az ipari szakértelmet képviseli. Autóiparra és szlovén gyártásra keresve Revoz egyértelmű találat. A helyszín jól mutatja Dolenjska erős ipari magját.",
      ro: "Revoz este o locație auto centrală din Slovenia și este strâns legată de Novo Mesto. Fabrica reprezintă producția modernă, exportul și competența industrială. Pentru căutări despre industria auto și producție în Slovenia, Revoz este un rezultat clar. Locația arată nucleul industrial puternic al regiunii Dolenjska.",
      en: "Revoz is a central automotive site in Slovenia and closely tied to Novo Mesto. The plant represents modern manufacturing, exports, and industrial competence. For car industry and manufacturing searches in Slovenia, Revoz is a clear hit. The site shows the strong industrial core of Dolenjska."
    },
    facts: {
      de: ["Wichtiger Autohersteller in Slowenien", "Eng mit Novo Mesto verbunden", "Exportorientierte Produktion", "Starkes Industrieprofil", "Wichtiger Teil der regionalen Wirtschaft"],
      hu: ["Fontos autógyártó Szlovéniában", "Erősen kötődik Novo Mestohoz", "Exportorientált gyártás", "Erős ipari profil", "A regionális gazdaság fontos része"],
      ro: ["Producător auto important în Slovenia", "Legat strâns de Novo Mesto", "Producție orientată spre export", "Profil industrial puternic", "Parte importantă a economiei regionale"],
      en: ["Important car maker in Slovenia", "Closely linked to Novo Mesto", "Export-oriented production", "Strong industrial profile", "Key part of the regional economy"]
    },
    image: "/geo-images/slovenia/industry-revoz-novo-mesto.webp"
  },
  {
    id: "industry-gorenje-velenje",
    type: "industry",
    parent: "country-slovenia",
    coords: [15.1084, 46.3640],
    name: { de: "Gorenje Velenje", hu: "Gorenje Velenje", ro: "Gorenje Velenje", en: "Gorenje Velenje" },
    description: {
      de: "Gorenje ist ein großer Name der slowenischen Industrie und eng mit Velenje verbunden. Das Unternehmen steht für Haushaltsgeräte, Fertigung und eine starke Exporttradition. Für Industrie-SEO rund um Slowenien ist Gorenje ein sehr sichtbarer Begriff. Der Standort ergänzt das Profil von Velenje als moderne Industriestadt.",
      hu: "A Gorenje a szlovén ipar egyik nagy neve, és szorosan kötődik Velenjéhez. A vállalat háztartási gépeket, gyártást és erős exporthagyományt képvisel. Ipari SEO-ban Szlovénia kapcsán a Gorenje nagyon látható név. A telephely erősíti Velenje modern iparvárosi profilját.",
      ro: "Gorenje este un nume mare al industriei slovene și este strâns legat de Velenje. Compania reprezintă electrocasnicele, producția și o tradiție puternică de export. Pentru SEO despre industrie în Slovenia, Gorenje este un termen foarte vizibil. Locația consolidează profilul lui Velenje ca oraș industrial modern.",
      en: "Gorenje is a major name in Slovenian industry and is closely linked to Velenje. The company stands for home appliances, manufacturing, and a strong export tradition. For industrial Slovenia SEO, Gorenje is a very visible term. The site strengthens Velenje's profile as a modern industrial city."
    },
    facts: {
      de: ["Bekannte slowenische Industriemarke", "Mit Velenje verbunden", "Haushaltsgeräte und Produktion", "Stark im Export", "Prägt das Stadtprofil"],
      hu: ["Ismert szlovén ipari márka", "Velenjéhez kötődik", "Háztartási gépek és gyártás", "Erős exporttevékenység", "Meghatározza a város arculatát"],
      ro: ["Marcă industrială slovenă cunoscută", "Legată de Velenje", "Electrocasnice și producție", "Puternică la export", "Definește profilul orașului"],
      en: ["Well-known Slovenian industrial brand", "Linked to Velenje", "Home appliances and manufacturing", "Strong export activity", "Shapes the city profile"]
    },
    image: "/geo-images/slovenia/industry-gorenje-velenje.webp"
  },
  {
    id: "agriculture-vipava-valley-vineyards",
    type: "agriculture",
    parent: "country-slovenia",
    coords: [13.9990, 45.8465],
    name: { de: "Weinberge des Vipava-Tals", hu: "Vipava-völgyi szőlők", ro: "Viile din Valea Vipava", en: "Vipava Valley Vineyards" },
    description: {
      de: "Das Vipava-Tal ist eine der wichtigsten Weinlandschaften Sloweniens und ein starker Name für Agrotourismus. Wind, Sonne und kalkreiche Böden schaffen hier ideale Bedingungen für Reben. Für SEO rund um Wein, Landwirtschaft und westslowenische Landschaft ist das Tal sehr wertvoll. Besucher erleben hier eine Mischung aus Genuss, Dorfkultur und offener Landschaft.",
      hu: "A Vipava-völgy Szlovénia egyik legfontosabb borvidéke és erős agroturisztikai név. A szél, a nap és a meszes talaj ideális feltételeket teremt a szőlőnek. Borra, mezőgazdaságra és nyugat-szlovén tájra keresve a völgy nagyon értékes. A látogatók egyszerre kapnak gasztronómiát, falusi kultúrát és nyílt tájat.",
      ro: "Valea Vipava este una dintre cele mai importante zone viticole din Slovenia și un nume puternic pentru agroturism. Vântul, soarele și solurile calcaroase creează condiții excelente pentru viță-de-vie. Pentru SEO despre vin, agricultură și peisaje din vestul Sloveniei, valea este foarte valoroasă. Vizitatorii găsesc aici gastronomie, cultură rurală și un peisaj deschis.",
      en: "The Vipava Valley is one of Slovenia's key wine landscapes and a strong agritourism name. Wind, sun, and limestone soils create ideal conditions for vines. For wine, agriculture, and western Slovenia landscape SEO, the valley is very valuable. Visitors get a mix of food, village culture, and open scenery."
    },
    facts: {
      de: ["Wichtige Weinregion", "Starker Agrotourismus-Standort", "Kalkreiche Böden", "Beliebt für Verkostungen", "Typisch für Westslowenien"],
      hu: ["Fontos borvidék", "Erős agroturisztikai helyszín", "Meszes talajok jellemzik", "Kedvelt kóstolóhely", "Nyugat-Szlovénia tipikus tája"],
      ro: ["Regiune viticolă importantă", "Loc puternic pentru agroturism", "Soluri calcaroase", "Populară pentru degustări", "Peisaj tipic pentru vestul Sloveniei"],
      en: ["Important wine region", "Strong agritourism site", "Limestone soils", "Popular for tastings", "Typical of western Slovenia"]
    },
    image: "/geo-images/slovenia/agriculture-vipava-valley-vineyards.webp"
  },
  {
    id: "agriculture-goriska-brda-vineyards",
    type: "agriculture",
    parent: "country-slovenia",
    coords: [13.5270, 45.9742],
    name: { de: "Weinberge von Goriška Brda", hu: "Goriška Brda szőlői", ro: "Viile din Goriška Brda", en: "Goriška Brda Vineyards" },
    description: {
      de: "Goriška Brda ist eine hügelige Weinlandschaft mit starker Grenzlage und hoher Sichtbarkeit im Slowenien-Tourismus. Die Reben, kleinen Dörfer und Aussichtspunkte machen die Region besonders fotogen. Für landwirtschaftliche Suchbegriffe und Weintourismus ist Goriška Brda ein sehr starker Begriff. Der Ort steht für Qualität, Genuss und sanfte Hügellandschaften.",
      hu: "Goriška Brda dombos borvidék, erős határmenti fekvéssel és jó ismertséggel a szlovén turizmusban. A szőlők, a kis falvak és a kilátópontok különösen fotogénné teszik a régiót. Mezőgazdasági keresésekben és borturizmusban Goriška Brda nagyon erős név. A táj a minőséget, az élvezetet és a lágy dombokat képviseli.",
      ro: "Goriška Brda este o regiune viticolă deluroasă, cu o poziție de frontieră și vizibilitate mare în turismul sloven. Viile, satele mici și punctele de belvedere o fac deosebit de fotogenică. Pentru căutări agricole și turism viticol, Goriška Brda este un termen foarte puternic. Zona simbolizează calitatea, plăcerea și dealurile domoale.",
      en: "Goriška Brda is a hilly wine landscape with strong borderland character and high visibility in Slovenian tourism. The vines, small villages, and viewpoints make the region especially photogenic. For agriculture searches and wine tourism, Goriška Brda is a very strong name. The area stands for quality, enjoyment, and soft hills."
    },
    facts: {
      de: ["Berühmte Weinlandschaft", "Hügelige Grenzregion", "Stark für Weintourismus", "Fotogene Dörfer und Rebzeilen", "Qualitätsweine aus Westslowenien"],
      hu: ["Híres borvidék", "Dombos határmenti régió", "Erős borturizmus", "Fotogén falvak és szőlősorok", "Nyugat-szlovén minőségi borok"],
      ro: ["Peisaj viticol celebru", "Regiune deluroasă de frontieră", "Puternică în turismul vinului", "Sate fotogenice și rânduri de viță", "Vinuri de calitate din vestul Sloveniei"],
      en: ["Famous wine landscape", "Hilly border region", "Strong wine tourism", "Photogenic villages and vines", "Quality wines from western Slovenia"]
    },
    image: "/geo-images/slovenia/agriculture-goriska-brda-vineyards.webp"
  }
];

export const sloveniaAllPoi: POI[] = [
  sloveniaCountry,
  ...sloveniaRegions,
  ...sloveniaCities,
  ...sloveniaCulture,
  ...sloveniaNature
];
