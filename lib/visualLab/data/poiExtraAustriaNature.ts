
import type { POI } from "./poi";

export const poiExtraAustriaNature: POI[] = [
  {
    id: "nature-nationalpark-kalkalpen-extra",
    type: "nature",
    parent: "AT-4",
    coords: [14.40, 47.80],
    name: { de: "Nationalpark Kalkalpen", hu: "Kalkalpen Nemzeti Park", ro: "Parcul Național Kalkalpen", en: "Kalkalpen National Park" },
    description: {
      de: "Österreichs größtes Waldschutzgebiet, bekannt für seine alten Buchenwälder (UNESCO-Welterbe) und die unberührte Berglandschaft.",
      hu: "Ausztria legnagyobb erdővédelmi területe, amely öreg bükkerdőiről (UNESCO Világörökség) és érintetlen hegyvidéki tájáról ismert.",
      ro: "Cea mai mare zonă de protecție a pădurilor din Austria, cunoscută pentru pădurile sale vechi de fag (Patrimoniul Mondial UNESCO) și peisajul montan neatins.",
      en: "Austria's largest forest protection area, known for its old beech forests (UNESCO World Heritage) and untouched mountain landscape."
    },
    facts: {
      de: ["Heimat von Luchsen, Bären und Adlern.", "Über 200 km Wanderwege.", "Die Buchenwälder gehören zum UNESCO-Weltnaturerbe 'Buchenurwälder der Karpaten'."],
      hu: ["Hiúzok, medvék és sasok otthona.", "Több mint 200 km túraútvonal.", "A bükkerdők a 'Kárpátok ősi bükkösei' UNESCO Világörökség részét képezik."],
      ro: ["Habitat pentru râși, urși și vulturi.", "Peste 200 km de trasee de drumeții.", "Pădurile de fag fac parte din Patrimoniul Natural Mondial UNESCO 'Pădurile primare de fag din Carpați'."],
      en: ["Home to lynxes, bears, and eagles.", "Over 200 km of hiking trails.", "The beech forests are part of the UNESCO World Natural Heritage 'Ancient and Primeval Beech Forests of the Carpathians'."]
    }
  },
  {
    id: "lake-attersee-extra",
    type: "lake",
    parent: "AT-4",
    coords: [13.54, 47.86],
    name: { de: "Attersee", hu: "Attersee", ro: "Lacul Attersee", en: "Lake Attersee" },
    description: {
      de: "Der größte zur Gänze in Österreich liegende See, bekannt für sein türkisfarbenes, klares Wasser und als beliebtes Segel- und Tauchrevier.",
      hu: "A legnagyobb, teljes egészében Ausztriában fekvő tó, amely türkizkék, tiszta vizéről, valamint népszerű vitorlás- és búvárterületként ismert.",
      ro: "Cel mai mare lac situat în întregime în Austria, cunoscut pentru apa sa turcoaz, limpede și ca o zonă populară pentru navigație și scufundări.",
      en: "The largest lake located entirely in Austria, known for its turquoise, clear water and as a popular sailing and diving area."
    },
    facts: {
      de: ["Inspirierte den Komponisten Gustav Mahler.", "Pfahlbauten am See sind Teil des UNESCO-Welterbes.", "Das Wasser ist so klar, dass die Sichtweite bis zu 25 Meter beträgt."],
      hu: ["Gustav Mahler zeneszerzőt is megihlette.", "A tónál található cölöpházak az UNESCO Világörökség részét képezik.", "A víz annyira tiszta, hogy a látótávolság akár 25 méter is lehet."],
      ro: ["A inspirat compozitorul Gustav Mahler.", "Așezările lacustre de pe malul lacului fac parte din Patrimoniul Mondial UNESCO.", "Apa este atât de limpede încât vizibilitatea ajunge până la 25 de metri."],
      en: ["Inspired the composer Gustav Mahler.", "Pile dwellings on the lake are part of the UNESCO World Heritage.", "The water is so clear that visibility is up to 25 meters."]
    }
  },
  {
    id: "mountain-dachstein-massiv-extra",
    type: "mountain",
    parent: "AT-6",
    coords: [13.60, 47.47],
    name: { de: "Dachstein-Massiv", hu: "Dachstein-masszívum", ro: "Masivul Dachstein", en: "Dachstein Massif" },
    description: {
      de: "Ein stark verkarstetes Gebirgsmassiv der Alpen, berühmt für seine Gletscher, die Rieseneishöhle und die Aussichtsplattform 5fingers.",
      hu: "Erősen karsztosodott hegymasszívum az Alpokban, híres gleccsereiről, az Óriás-jégbarlangról és az 5fingers kilátóplatformról.",
      ro: "Un masiv montan puternic carstificat din Alpi, renumit pentru ghețarii săi, peștera uriașă de gheață și platforma de observare 5fingers.",
      en: "A heavily karstified mountain massif in the Alps, famous for its glaciers, the Giant Ice Cave, and the 5fingers viewing platform."
    },
    facts: {
      de: ["Teil des UNESCO-Welterbes Hallstatt-Dachstein/Salzkammergut.", "Die Hängebrücke und die 'Treppe ins Nichts' bieten Nervenkitzel.", "Der Hohe Dachstein ist mit 2.995 Metern der höchste Gipfel."],
      hu: ["A Hallstatt-Dachstein/Salzkammergut UNESCO Világörökség része.", "A függőhíd és a 'lépcső a semmibe' izgalmakat kínál.", "A Hoher Dachstein 2995 méterrel a legmagasabb csúcsa."],
      ro: ["Parte a Patrimoniului Mondial UNESCO Hallstatt-Dachstein/Salzkammergut.", "Podul suspendat și 'Scara către nicăieri' oferă senzații tari.", "Hoher Dachstein este cel mai înalt vârf, cu 2.995 de metri."],
      en: ["Part of the UNESCO World Heritage Site Hallstatt-Dachstein/Salzkammergut.", "The suspension bridge and the 'stairway to nothingness' offer thrills.", "The Hoher Dachstein is the highest peak at 2,995 meters."]
    }
  },
  {
    id: "river-donau-auen-nationalpark-extra",
    type: "river",
    parent: "AT-3",
    coords: [16.71, 48.18],
    name: { de: "Nationalpark Donau-Auen", hu: "Donau-Auen Nemzeti Park", ro: "Parcul Național Lunca Dunării", en: "Donau-Auen National Park" },
    description: {
      de: "Eine der letzten großen unverbauten Flussauenlandschaften Mitteleuropas, die sich zwischen Wien und der slowakischen Grenze erstreckt.",
      hu: "Közép-Európa egyik utolsó nagy, beépítetlen folyómenti árterülete, amely Bécs és a szlovák határ között húzódik.",
      ro: "Una dintre ultimele mari peisaje de luncă fluvială nealterată din Europa Centrală, care se întinde între Viena și granița cu Slovacia.",
      en: "One of the last large, undeveloped riverine wetland landscapes in Central Europe, stretching between Vienna and the Slovak border."
    },
    facts: {
      de: ["Wichtiger Lebensraum für Biber, Eisvögel und Seeadler.", "Kann zu Fuß, mit dem Fahrrad oder per Boot erkundet werden.", "Das Schloss Orth beherbergt das Nationalpark-Zentrum."],
      hu: ["Fontos élőhely hódok, jégmadarak és rétisasok számára.", "Gyalog, kerékpárral vagy csónakkal is felfedezhető.", "Az Orthi kastély ad otthont a nemzeti park központjának."],
      ro: ["Habitat important pentru castori, pescăruși albaștri și vulturi de mare.", "Poate fi explorat pe jos, cu bicicleta sau cu barca.", "Castelul Orth găzduiește centrul parcului național."],
      en: ["Important habitat for beavers, kingfishers, and white-tailed eagles.", "Can be explored on foot, by bike, or by boat.", "Orth Castle houses the national park center."]
    }
  },
  {
    id: "nature-eisriesenwelt-werfen-extra",
    type: "nature",
    parent: "AT-5",
    coords: [13.18, 47.50],
    name: { de: "Eisriesenwelt Werfen", hu: "Werfeni Jégóriásvilág", ro: "Lumea Giganților de Gheață Werfen", en: "Werfen Ice Giants World" },
    description: {
      de: "Die größte Eishöhle der Welt, ein riesiges Höhlensystem mit spektakulären Eisformationen im Tennengebirge.",
      hu: "A világ legnagyobb jégbarlangja, egy hatalmas barlangrendszer látványos jégképződményekkel a Tennengebirge-hegységben.",
      ro: "Cea mai mare peșteră de gheață din lume, un sistem gigantic de peșteri cu formațiuni de gheață spectaculoase în munții Tennengebirge.",
      en: "The largest ice cave in the world, a giant cave system with spectacular ice formations in the Tennengebirge mountains."
    },
    facts: {
      de: ["Das Höhlensystem erstreckt sich über 42 Kilometer.", "Die Führung durch die Höhle wird mit Karbidlampen durchgeführt.", "Nur im Sommer für Besucher geöffnet."],
      hu: ["A barlangrendszer több mint 42 kilométeren húzódik.", "A barlangtúrát karbidlámpákkal vezetik.", "Csak nyáron látogatható."],
      ro: ["Sistemul de peșteri se întinde pe o distanță de peste 42 de kilometri.", "Turul ghidat al peșterii se face cu lămpi cu carbură.", "Deschis vizitatorilor doar vara."],
      en: ["The cave system extends over 42 kilometers.", "The guided tour of the cave is conducted with carbide lamps.", "Open to visitors only in summer."]
    }
  },
  {
    id: "lake-grüner-see-extra",
    type: "lake",
    parent: "AT-6",
    coords: [15.05, 47.54],
    name: { de: "Grüner See", hu: "Zöld-tó", ro: "Lacul Verde", en: "Green Lake" },
    description: {
      de: "Ein Schmelzwassersee in der Steiermark, der im Frühling Bänke und Wanderwege überflutet und so eine surreale Unterwasserwelt schafft.",
      hu: "Olvadtvízi tó Stájerországban, amely tavasszal elárasztja a padokat és a túraútvonalakat, szürreális víz alatti világot teremtve.",
      ro: "Un lac format din topirea zăpezii în Stiria, care inundă băncile și potecile primăvara, creând o lume subacvatică suprarealistă.",
      en: "A meltwater lake in Styria that floods benches and hiking trails in spring, creating a surreal underwater world."
    },
    facts: {
      de: ["Wurde zum schönsten verborgenen Platz Österreichs gewählt.", "Die smaragdgrüne Farbe kommt vom klaren Wasser und dem Felsboden.", "Der Wasserstand schwankt saisonal um bis zu 10 Meter."],
      hu: ["Ausztria legszebb rejtett helyének választották.", "Smaragdzöld színét a tiszta víz és a sziklás meder adja.", "A vízszint szezonálisan akár 10 métert is ingadozik."],
      ro: ["A fost votat cel mai frumos loc ascuns din Austria.", "Culoarea verde-smarald provine de la apa limpede și fundul stâncos.", "Nivelul apei variază sezonier cu până la 10 metri."],
      en: ["Was voted the most beautiful hidden place in Austria.", "The emerald green color comes from the clear water and the rocky bottom.", "The water level varies seasonally by up to 10 meters."]
    }
  }
];
