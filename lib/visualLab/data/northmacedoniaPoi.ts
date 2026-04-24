import type { POI } from "./poi";

export const northmacedoniaCountry: POI = {
  id: "country-mk",
  type: "country",
  parent: "europe",
  coords: [21.7453, 41.6086],
  name: {
    de: "Nordmazedonien",
    hu: "Észak-Macedónia",
    ro: "Macedonia de Nord",
    en: "North Macedonia"
  },
  description: {
    de: "Nordmazedonien ist ein faszinierendes Land auf dem Balkan, bekannt für seine Berge, Seen und reiche Geschichte.",
    hu: "Észak-Macedónia egy lenyűgöző balkáni ország, amely hegyeiről, tavairól és gazdag történelméről ismert.",
    ro: "Macedonia de Nord este o țară fascinantă din Balcani, cunoscută pentru munții, lacurile și istoria sa bogată.",
    en: "North Macedonia is a fascinating Balkan country known for its mountains, lakes, and rich history."
  },
  facts: {
    de: ["Ohridsee gehört zum UNESCO-Welterbe.", "Mutter Teresa wurde in Skopje geboren."],
    hu: ["Az Ohridi-tó az UNESCO Világörökség része.", "Teréz anya Szkopjéban született."],
    ro: ["Lacul Ohrid face parte din Patrimoniul Mondial UNESCO.", "Maica Tereza s-a născut la Skopje."],
    en: ["Lake Ohrid is a UNESCO World Heritage site.", "Mother Teresa was born in Skopje."]
  }
};

export const northmacedoniaPois: POI[] = [
  northmacedoniaCountry,
  {
    id: "city-skopje",
    type: "city",
    parent: "country-mk",
    coords: [21.4314, 42.0024],
    name: { de: "Skopje", hu: "Szkopje", ro: "Skopje", en: "Skopje" },
    description: {
      de: "Skopje ist die Hauptstadt und größte Stadt Nordmazedoniens.",
      hu: "Szkopje Észak-Macedónia fővárosa és legnagyobb városa.",
      ro: "Skopje este capitala și cel mai mare oraș din Macedonia de Nord.",
      en: "Skopje is the capital and largest city of North Macedonia."
    }
  },
  {
    id: "city-bitola",
    type: "city",
    parent: "country-mk",
    coords: [21.3347, 41.0314],
    name: { de: "Bitola", hu: "Bitola", ro: "Bitola", en: "Bitola" },
    description: {
      de: "Bitola ist eine der ältesten Städte des Landes und bekannt für ihre osmanische Architektur.",
      hu: "Bitola az ország egyik legrégebbi városa, ismert oszmán építészetéről.",
      ro: "Bitola este unul dintre cele mai vechi orașe din țară și cunoscut pentru arhitectura sa otomană.",
      en: "Bitola is one of the oldest cities in the country, known for its Ottoman architecture."
    }
  },
  {
    id: "city-ohrid",
    type: "city",
    parent: "country-mk",
    coords: [20.8016, 41.1172],
    name: { de: "Ohrid", hu: "Ohrid", ro: "Ohrid", en: "Ohrid" },
    description: {
      de: "Ohrid ist das touristische Zentrum am Ohridsee, mit 365 Kirchen in der Vergangenheit.",
      hu: "Ohrid a turizmus központja az Ohridi-tó partján, régen 365 templommal.",
      ro: "Ohrid este centrul turistic pe Lacul Ohrid, cu 365 de biserici în trecut.",
      en: "Ohrid is the tourist hub on Lake Ohrid, historically having 365 churches."
    }
  },
  {
    id: "city-tetovo",
    type: "city",
    parent: "country-mk",
    coords: [20.9716, 42.0069],
    name: { de: "Tetovo", hu: "Tetovo", ro: "Tetovo", en: "Tetovo" },
    description: {
      de: "Tetovo liegt am Fuße der Šar-Berge und ist für die Bunte Moschee bekannt.",
      hu: "Tetovo a Šar-hegység lábánál fekszik, és a Festett mecsetről ismert.",
      ro: "Tetovo este situat la poalele Munților Šar și renumit pentru Moscheea Pictată.",
      en: "Tetovo lies at the foot of the Šar Mountains and is known for the Painted Mosque."
    }
  },
  {
    id: "city-kumanovo",
    type: "city",
    parent: "country-mk",
    coords: [21.7161, 42.1322],
    name: { de: "Kumanovo", hu: "Kumanovo", ro: "Kumanovo", en: "Kumanovo" },
    description: {
      de: "Kumanovo ist eine bedeutende Industriestadt im Norden.",
      hu: "Kumanovo fontos iparváros északon.",
      ro: "Kumanovo este un oraș industrial important din nord.",
      en: "Kumanovo is an important industrial city in the north."
    }
  },
  {
    id: "city-prilep",
    type: "city",
    parent: "country-mk",
    coords: [21.5528, 41.3464],
    name: { de: "Prilep", hu: "Prilep", ro: "Prilep", en: "Prilep" },
    description: {
      de: "Prilep wird auch 'die Stadt unter Markos Türmen' genannt.",
      hu: "Prilepet 'Marko tornyai alatti városnak' is nevezik.",
      ro: "Prilep este adesea numit 'orașul de sub Turnurile lui Marko'.",
      en: "Prilep is known as 'the city under Marko's Towers'."
    }
  },
  {
    id: "city-veles",
    type: "city",
    parent: "country-mk",
    coords: [21.7744, 41.7153],
    name: { de: "Veles", hu: "Veles", ro: "Veles", en: "Veles" },
    description: {
      de: "Veles liegt im Zentrum des Landes am Fluss Vardar.",
      hu: "Veles az ország közepén, a Vardar folyó partján található.",
      ro: "Veles este situat în centrul țării pe râul Vardar.",
      en: "Veles is located in the center of the country on the Vardar river."
    }
  },
  {
    id: "city-stip",
    type: "city",
    parent: "country-mk",
    coords: [22.1958, 41.7358],
    name: { de: "Štip", hu: "Štip", ro: "Štip", en: "Štip" },
    description: {
      de: "Štip ist das kulturelle und wirtschaftliche Zentrum der östlichen Region.",
      hu: "Štip a keleti régió kulturális és gazdasági központja.",
      ro: "Štip este centrul cultural și economic al regiunii de est.",
      en: "Štip is the cultural and economic center of the eastern region."
    }
  },
  {
    id: "city-gostivar",
    type: "city",
    parent: "country-mk",
    coords: [20.9081, 41.7975],
    name: { de: "Gostivar", hu: "Gostivar", ro: "Gostivar", en: "Gostivar" },
    description: {
      de: "Gostivar liegt am Fuße der Šar-Berge nahe der Quelle des Vardar.",
      hu: "Gostivar a Šar-hegység lábánál, a Vardar forrásához közel fekszik.",
      ro: "Gostivar este situat la poalele Munților Šar lângă izvorul Vardarului.",
      en: "Gostivar lies at the foot of the Šar Mountains near the source of the Vardar."
    }
  },
  {
    id: "landmark-stone-bridge",
    type: "historical",
    parent: "country-mk",
    coords: [21.4326, 41.9961],
    name: { de: "Steinerne Brücke", hu: "Kőhíd", ro: "Podul de Piatră", en: "Stone Bridge" },
    description: {
      de: "Die Steinerne Brücke ist das Symbol von Skopje und verbindet die neue und die alte Stadt.",
      hu: "A kőhíd Szkopje szimbóluma, amely összeköti az új és az óvárost.",
      ro: "Podul de Piatră este simbolul din Skopje, legând orașul nou de cel vechi.",
      en: "The Stone Bridge is the symbol of Skopje, connecting the new and the old town."
    }
  },
  {
    id: "landmark-samuels-fortress",
    type: "historical",
    parent: "country-mk",
    coords: [20.7933, 41.1158],
    name: { de: "Samuelsfestung", hu: "Sámuel erődje", ro: "Fortăreața lui Samuil", en: "Samuel's Fortress" },
    description: {
      de: "Eine mittelalterliche Festung in Ohrid mit einem beeindruckenden Panoramablick.",
      hu: "Egy középkori erőd Ohridban, ahonnan lenyűgöző panoráma nyílik.",
      ro: "O fortăreață medievală în Ohrid, cu o vedere panoramică impresionantă.",
      en: "A medieval fortress in Ohrid with a stunning panoramic view."
    }
  },
  {
    id: "landmark-kale-fortress",
    type: "historical",
    parent: "country-mk",
    coords: [21.4294, 42.0016],
    name: { de: "Kale-Festung", hu: "Kale erőd", ro: "Fortăreața Kale", en: "Kale Fortress" },
    description: {
      de: "Die Kale-Festung thront hoch über Skopje und stammt aus dem 6. Jahrhundert.",
      hu: "A Kale erőd magasan Szkopje fölé magasodik, és a 6. századból származik.",
      ro: "Fortăreața Kale se înalță deasupra Skopje și datează din secolul al VI-lea.",
      en: "Kale Fortress sits high above Skopje and dates back to the 6th century."
    }
  },
  {
    id: "landmark-painted-mosque",
    type: "historical",
    parent: "country-mk",
    coords: [20.9658, 42.0022],
    name: { de: "Bunte Moschee", hu: "Festett mecset", ro: "Moscheea Pictată", en: "Painted Mosque" },
    description: {
      de: "Eine wunderschön dekorierte osmanische Moschee in Tetovo aus dem 15. Jahrhundert.",
      hu: "Egy gyönyörűen díszített oszmán mecset Tetovóban a 15. századból.",
      ro: "O moschee otomană frumos decorată în Tetovo din secolul al XV-lea.",
      en: "A beautifully decorated Ottoman mosque in Tetovo from the 15th century."
    }
  },
  {
    id: "landmark-st-naum",
    type: "historical",
    parent: "country-mk",
    coords: [20.7408, 40.9133],
    name: { de: "Kloster Sveti Naum", hu: "Szent Naum-kolostor", ro: "Mănăstirea Sf. Naum", en: "St. Naum Monastery" },
    description: {
      de: "Ein historisches Klosterkomplex am Ohridsee nahe der albanischen Grenze.",
      hu: "Egy történelmi kolostorkomplexum az Ohridi-tó partján, közel az albán határhoz.",
      ro: "Un complex monastic istoric pe Lacul Ohrid, aproape de granița cu Albania.",
      en: "A historic monastery complex on Lake Ohrid near the Albanian border."
    }
  },
  {
    id: "landmark-heraclea-lyncestis",
    type: "historical",
    parent: "country-mk",
    coords: [21.3422, 41.0116],
    name: { de: "Heraclea Lyncestis", hu: "Heraclea Lyncestis", ro: "Heraclea Lyncestis", en: "Heraclea Lyncestis" },
    description: {
      de: "Antike Ruinenstadt nahe Bitola, gegründet von Philipp II. von Makedonien.",
      hu: "Antik romváros Bitola közelében, II. Philippos makedón király alapította.",
      ro: "Ruinele antice din apropiere de Bitola, fondate de Filip al II-lea al Macedoniei.",
      en: "Ancient ruins near Bitola, founded by Philip II of Macedon."
    }
  },
  {
    id: "landmark-kokino",
    type: "historical",
    parent: "country-mk",
    coords: [21.9427, 42.2619],
    name: { de: "Observatorium Kokino", hu: "Kokino Megfigyelőállomás", ro: "Observatorul Kokino", en: "Kokino Observatory" },
    description: {
      de: "Eine antike megalithische Sternwarte, eine der ältesten der Welt.",
      hu: "Egy ősi megalitikus csillagvizsgáló, a világ egyik legrégebbi ilyen építménye.",
      ro: "Un vechi observator megalitic, unul dintre cele mai vechi din lume.",
      en: "An ancient megalithic observatory, one of the oldest in the world."
    }
  },
  {
    id: "landmark-markos-towers",
    type: "historical",
    parent: "country-mk",
    coords: [21.5369, 41.3602],
    name: { de: "Markos Türme", hu: "Marko tornyai", ro: "Turnurile lui Marko", en: "Marko's Towers" },
    description: {
      de: "Die Überreste einer mittelalterlichen Burg über Prilep.",
      hu: "Középkori várrom Prilep fölött.",
      ro: "Rămășițele unui castel medieval deasupra Prilep.",
      en: "The remains of a medieval castle above Prilep."
    }
  },
  {
    id: "landmark-st-john-kaneo",
    type: "historical",
    parent: "country-mk",
    coords: [20.7888, 41.1111],
    name: { de: "Kirche des hl. Johannes von Kaneo", hu: "Kaneo Szent János-templom", ro: "Biserica Sf. Ioan Kaneo", en: "St. John at Kaneo" },
    description: {
      de: "Eine der fotogensten orthodoxen Kirchen Mazedoniens, direkt an der Klippe über dem Ohridsee.",
      hu: "Macedónia egyik legfotogénebb ortodox temploma, közvetlenül a szikla szélén, az Ohridi-tó felett.",
      ro: "Una dintre cele mai fotogenice biserici ortodoxe din Macedonia, situată pe stâncă deasupra Lacului Ohrid.",
      en: "One of the most photogenic Orthodox churches in Macedonia, right on the cliff above Lake Ohrid."
    }
  },
  {
    id: "landmark-old-bazaar",
    type: "historical",
    parent: "country-mk",
    coords: [21.4372, 42.0019],
    name: { de: "Alter Basar", hu: "Régi bazár", ro: "Vechiul Bazar", en: "Old Bazaar" },
    description: {
      de: "Einer der größten und ältesten Marktplätze des Balkans in Skopje.",
      hu: "A Balkán egyik legnagyobb és legrégebbi piaca Szkopjéban.",
      ro: "Una dintre cele mai mari și mai vechi piețe din Balcani în Skopje.",
      en: "One of the largest and oldest marketplaces in the Balkans, in Skopje."
    }
  },
  {
    id: "landmark-bay-of-bones",
    type: "historical",
    parent: "country-mk",
    coords: [20.7983, 40.9944],
    name: { de: "Knochenbucht (Museum auf dem Wasser)", hu: "Csontok öble (Vízre épült falu)", ro: "Golful Oaselor", en: "Bay of Bones" },
    description: {
      de: "Rekonstruktion einer prähistorischen Pfahlbausiedlung am Ohridsee.",
      hu: "Egy őskori cölöpfalu rekonstrukciója az Ohridi-tónál.",
      ro: "O reconstrucție a unei așezări preistorice pe piloni pe Lacul Ohrid.",
      en: "Reconstruction of a prehistoric pile-dwelling settlement on Lake Ohrid."
    }
  },
  {
    id: "nature-lake-ohrid",
    type: "lake",
    parent: "country-mk",
    coords: [20.7302, 41.0425],
    name: { de: "Ohridsee", hu: "Ohridi-tó", ro: "Lacul Ohrid", en: "Lake Ohrid" },
    description: {
      de: "Einer der tiefsten und ältesten Seen Europas, bekannt für sein kristallklares Wasser und einzigartige Fauna.",
      hu: "Európa egyik legmélyebb és legrégebbi tava, kristálytiszta vizéről és egyedi faunájáról ismert.",
      ro: "Unul dintre cele mai adânci și vechi lacuri din Europa, cunoscut pentru apa cristalină.",
      en: "One of the deepest and oldest lakes in Europe, known for its crystal clear water and unique fauna."
    }
  },
  {
    id: "nature-lake-prespa",
    type: "lake",
    parent: "country-mk",
    coords: [21.0116, 40.9169],
    name: { de: "Prespasee", hu: "Prespai-tó", ro: "Lacul Prespa", en: "Lake Prespa" },
    description: {
      de: "Ein malerischer See, der im Dreiländereck von Nordmazedonien, Griechenland und Albanien liegt.",
      hu: "Festői tó Észak-Macedónia, Görögország és Albánia hármashatárán.",
      ro: "Un lac pitoresc situat la granița dintre Macedonia de Nord, Grecia și Albania.",
      en: "A picturesque lake shared by North Macedonia, Greece, and Albania."
    }
  },
  {
    id: "nature-matka-canyon",
    type: "landmark",
    parent: "country-mk",
    coords: [21.2966, 41.9566],
    name: { de: "Matka-Schlucht", hu: "Matka-kanyon", ro: "Canionul Matka", en: "Matka Canyon" },
    description: {
      de: "Eine beeindruckende Flussschlucht nahe Skopje, beliebt für Bootstouren und Höhlenbesichtigungen.",
      hu: "Lenyűgöző folyószurdok Szkopje közelében, népszerű csónakázó és barlangászó hely.",
      ro: "Un canion impresionant lângă Skopje, popular pentru plimbări cu barca și explorarea peșterilor.",
      en: "A stunning river canyon near Skopje, popular for boating and cave exploring."
    }
  },
  {
    id: "nature-mount-korab",
    type: "mountain",
    parent: "country-mk",
    coords: [20.5463, 41.7902],
    name: { de: "Berg Korab", hu: "Korab-hegy", ro: "Muntele Korab", en: "Mount Korab" },
    description: {
      de: "Mit 2764 Metern der höchste Berg Nordmazedoniens und Albaniens.",
      hu: "2764 méteres magasságával Észak-Macedónia és Albánia legmagasabb hegye.",
      ro: "Cel mai înalt munte din Macedonia de Nord și Albania, cu 2764 de metri.",
      en: "At 2764 meters, the highest mountain in North Macedonia and Albania."
    }
  },
  {
    id: "nature-pelister",
    type: "mountain",
    parent: "country-mk",
    coords: [21.1852, 41.0022],
    name: { de: "Pelister Nationalpark", hu: "Pelister Nemzeti Park", ro: "Parcul Național Pelister", en: "Pelister National Park" },
    description: {
      de: "Der älteste Nationalpark des Landes, berühmt für die fünf Nadel-Makedonische Kiefer.",
      hu: "Az ország legrégebbi nemzeti parkja, híres a makedón fenyőről.",
      ro: "Cel mai vechi parc național din țară, renumit pentru pinul macedonean.",
      en: "The country's oldest national park, famous for the Macedonian pine."
    }
  },
  {
    id: "nature-mavrovo",
    type: "landmark",
    parent: "country-mk",
    coords: [20.6552, 41.6450],
    name: { de: "Mavrovo Nationalpark", hu: "Mavrovo Nemzeti Park", ro: "Parcul Național Mavrovo", en: "Mavrovo National Park" },
    description: {
      de: "Der größte Nationalpark Nordmazedoniens, beliebt für Skifahren und seine beeindruckenden Wälder.",
      hu: "Észak-Macedónia legnagyobb nemzeti parkja, népszerű síterepekkel és sűrű erdőkkel.",
      ro: "Cel mai mare parc național din Macedonia de Nord, popular pentru schi și păduri deosebite.",
      en: "The largest national park in North Macedonia, popular for skiing and dense forests."
    }
  },
  {
    id: "nature-galicica",
    type: "mountain",
    parent: "country-mk",
    coords: [20.8258, 40.9416],
    name: { de: "Galičica Nationalpark", hu: "Galičica Nemzeti Park", ro: "Parcul Național Galičica", en: "Galicica National Park" },
    description: {
      de: "Liegt zwischen dem Ohrid- und dem Prespasee und bietet fantastische Ausblicke auf beide.",
      hu: "Az Ohridi- és a Prespai-tó között helyezkedik el, csodás kilátással mindkettőre.",
      ro: "Situat între Lacul Ohrid și Lacul Prespa, cu vederi uimitoare la ambele.",
      en: "Located between Lake Ohrid and Lake Prespa, offering stunning views of both."
    }
  },
  {
    id: "nature-vrelo-cave",
    type: "landmark",
    parent: "country-mk",
    coords: [21.2933, 41.9288],
    name: { de: "Vrelo-Höhle", hu: "Vrelo-barlang", ro: "Peștera Vrelo", en: "Vrelo Cave" },
    description: {
      de: "Eine der tiefsten Unterwasserhöhlen der Welt im Matka-Canyon.",
      hu: "A Matka-kanyonban található, a világ egyik legmélyebb víz alatti barlangja.",
      ro: "Una dintre cele mai adânci peșteri subacvatice din lume, în Canionul Matka.",
      en: "One of the deepest underwater caves in the world, located in the Matka Canyon."
    }
  },
  {
    id: "nature-smolare",
    type: "landmark",
    parent: "country-mk",
    coords: [22.8988, 41.3650],
    name: { de: "Smolare-Wasserfall", hu: "Smolare-vízesés", ro: "Cascada Smolare", en: "Smolare Waterfall" },
    description: {
      de: "Der höchste durchgehende Wasserfall in Nordmazedonien, tief in dichten Wäldern versteckt.",
      hu: "Észak-Macedónia legmagasabb egybefüggő vízesése a sűrű erdő mélyén.",
      ro: "Cea mai înaltă cascadă cu cădere neîntreruptă din Macedonia de Nord, în inima pădurii.",
      en: "The tallest continuous waterfall in North Macedonia, deep inside dense forests."
    }
  },
  {
    id: "landmark-millennium-cross",
    type: "landmark",
    parent: "country-mk",
    coords: [21.3977, 41.9655],
    name: { de: "Millenniumskreuz", hu: "Millenniumi kereszt", ro: "Crucea Mileniului", en: "Millennium Cross" },
    description: {
      de: "Ein 66 Meter hohes Kreuz auf dem Gipfel des Vodno-Bergs über Skopje.",
      hu: "Egy 66 méter magas kereszt a Vodno-hegy tetején, Szkopje felett.",
      ro: "O cruce de 66 de metri înălțime pe vârful Muntelui Vodno deasupra Skopje.",
      en: "A 66-meter-tall cross on top of Vodno Mountain overlooking Skopje."
    }
  },
  {
    id: "struga-miladinov",
    type: "historical",
    parent: "MK-001",
    coords: [20.6766, 41.1786],
    name: { de: "Haus der Brüder Miladinov", hu: "Miladinov testvérek emlékháza", ro: "Casa fraților Miladinov", en: "Miladinov Brothers House" },
    description: {
      de: "Gedenkhaus für die mazedonischen Dichter und Volkskundler Brüder Miladinov.",
      hu: "A Miladinov testvérek, macedón költők és néprajzkutatók emlékháza.",
      ro: "Casa memorială a fraților Miladinov, poeți și folcloriști macedoneni.",
      en: "Memorial house of the Miladinov brothers, Macedonian poets and folklorists."
    }
  },
  {
    id: "struga-drim",
    type: "landmark",
    parent: "MK-001",
    coords: [20.6761, 41.1711],
    name: { de: "Schwarzer Drin Ausfluss", hu: "Fekete-Drin kifolyása", ro: "Ieșirea râului Drinul Negru", en: "Black Drin Outlet" },
    description: {
      de: "Der Ort, an dem der Schwarze Drin den Ohridsee verlässt.",
      hu: "A pont, ahol a Fekete-Drin folyó kifolyik az Ohridi-tóból.",
      ro: "Locul în care râul Drinul Negru părăsește Lacul Ohrid.",
      en: "The place where the Black Drin river flows out of Lake Ohrid."
    }
  },
  {
    id: "zupa-ataturk",
    type: "historical",
    parent: "MK-002",
    coords: [20.5833, 41.4333],
    name: { de: "Atatürk-Gedenkhaus", hu: "Atatürk emlékház", ro: "Casa Memorială Atatürk", en: "Atatürk Memorial House" },
    description: {
      de: "Das Haus des Vaters von Mustafa Kemal Atatürk im Dorf Kodžadžik.",
      hu: "Mustafa Kemal Atatürk apjának szülőháza Kodžadžik faluban.",
      ro: "Casa tatălui lui Mustafa Kemal Atatürk din satul Kodžadžik.",
      en: "The house of Mustafa Kemal Atatürk's father in the village of Kodžadžik."
    }
  },
  {
    id: "zupa-lake-debar",
    type: "lake",
    parent: "MK-002",
    coords: [20.5500, 41.4800],
    name: { de: "Debar-See (Zupa)", hu: "Debari-tó (Zupa)", ro: "Lacul Debar (Zupa)", en: "Debar Lake (Zupa)" },
    description: {
      de: "Ein künstlicher See am Fluss Schwarzer Drin.",
      hu: "Mesterséges tó a Fekete-Drin folyón.",
      ro: "Un lac artificial pe râul Drinul Negru.",
      en: "An artificial lake on the Black Drin river."
    }
  },
  {
    id: "debar-monastery",
    type: "historical",
    parent: "MK-003",
    coords: [20.5333, 41.5167],
    name: { de: "Kloster Rajčica", hu: "Rajčica kolostor", ro: "Mănăstirea Rajčica", en: "Rajčica Monastery" },
    description: {
      de: "Kloster des heiligen Georg dem Siegreichen nahe Debar.",
      hu: "Győzedelmes Szent György kolostor Debar közelében.",
      ro: "Mănăstirea Sfântul Gheorghe Biruitorul de lângă Debar.",
      en: "Monastery of Saint George the Victorious near Debar."
    }
  },
  {
    id: "debar-mosque",
    type: "historical",
    parent: "MK-003",
    coords: [20.5250, 41.5250],
    name: { de: "Inkjar-Moschee", hu: "Inkjar mecset", ro: "Moscheea Inkjar", en: "Inkjar Mosque" },
    description: {
      de: "Eine historische Moschee in Debar aus dem 15. Jahrhundert.",
      hu: "Történelmi mecset Debarban a 15. századból.",
      ro: "O moschee istorică în Debar din secolul al XV-lea.",
      en: "A historic mosque in Debar from the 15th century."
    }
  },
  {
    id: "mavrovo-bigorski",
    type: "historical",
    parent: "MK-004",
    coords: [20.6111, 41.6211],
    name: { de: "Kloster Sveti Jovan Bigorski", hu: "Szent János Bigorski-kolostor", ro: "Mănăstirea Sf. Ioan Bigorski", en: "St. Jovan Bigorski Monastery" },
    description: {
      de: "Eines der bedeutendsten orthodoxen Klöster Mazedoniens.",
      hu: "Macedónia egyik legfontosabb ortodox kolostora.",
      ro: "Una dintre cele mai importante mănăstiri ortodoxe din Macedonia.",
      en: "One of the most significant Orthodox monasteries in Macedonia."
    }
  },
  {
    id: "mavrovo-duf",
    type: "landmark",
    parent: "MK-004",
    coords: [20.6000, 41.6100],
    name: { de: "Duf-Wasserfall", hu: "Duf-vízesés", ro: "Cascada Duf", en: "Duf Waterfall" },
    description: {
      de: "Ein malerischer Wasserfall nahe dem Dorf Rostuša.",
      hu: "Gömörű vízesés Rostuša falu közelében.",
      ro: "O cascadă pitorească lângă satul Rostuša.",
      en: "A picturesque waterfall near the village of Rostuša."
    }
  },
  {
    id: "gostivar-clock",
    type: "historical",
    parent: "MK-005",
    coords: [20.9100, 41.7950],
    name: { de: "Uhrturm Gostivar", hu: "Gostivari óratorony", ro: "Turnul cu Ceas din Gostivar", en: "Gostivar Clock Tower" },
    description: {
      de: "Eines der Wahrzeichen von Gostivar.",
      hu: "Gostivar egyik jelképe.",
      ro: "Unul dintre simbolurile orașului Gostivar.",
      en: "One of the landmarks of Gostivar."
    }
  },
  {
    id: "gostivar-vrutok",
    type: "landmark",
    parent: "MK-005",
    coords: [20.8900, 41.7700],
    name: { de: "Vardar-Quelle (Vrutok)", hu: "Vardar forrása (Vrutok)", ro: "Izvorul Vardarului (Vrutok)", en: "Vardar Source (Vrutok)" },
    description: {
      de: "Der Ursprung des größten Flusses Mazedoniens.",
      hu: "Macedónia legnagyobb folyójának forrása.",
      ro: "Izvorul celui mai mare râu din Macedonia.",
      en: "The source of the largest river in Macedonia."
    }
  },
  {
    id: "vevcani-springs",
    type: "landmark",
    parent: "MK-006",
    coords: [20.5833, 41.2417],
    name: { de: "Vevčani-Quellen", hu: "Vevčani-források", ro: "Izvoarele Vevčani", en: "Vevčani Springs" },
    description: {
      de: "Berühmte Quellen am Fuße des Jablanica-Gebirges.",
      hu: "Híres források a Jablanica-hegység lábánál.",
      ro: "Izvoare faimoase la poalele munților Jablanica.",
      en: "Famous springs at the foot of the Jablanica Mountains."
    }
  },
  {
    id: "vevcani-church",
    type: "historical",
    parent: "MK-006",
    coords: [20.5925, 41.2408],
    name: { de: "Kirche St. Nikolaus", hu: "Szent Miklós-templom", ro: "Biserica Sf. Nicolae", en: "Church of St. Nicholas" },
    description: {
      de: "Die Hauptkirche des Dorfes Vevčani.",
      hu: "Vevčani falu főtemploma.",
      ro: "Biserica principală a satului Vevčani.",
      en: "The main church of the village of Vevčani."
    }
  },
  {
    id: "ohrid-st-sophia",
    type: "historical",
    parent: "MK-007",
    coords: [20.7942, 41.1122],
    name: { de: "Kirche der hl. Sophia", hu: "Szent Szófia-templom", ro: "Biserica Sfânta Sofia", en: "Church of St. Sophia" },
    description: {
      de: "Eines der bedeutendsten mittelalterlichen Denkmäler Mazedoniens.",
      hu: "Macedónia egyik legfontosabb középkori műemléke.",
      ro: "Unul dintre cele mai importante monumente medievale din Macedonia.",
      en: "One of the most important medieval monuments in Macedonia."
    }
  },
  {
    id: "ohrid-theatre",
    type: "historical",
    parent: "MK-007",
    coords: [20.7936, 41.1153],
    name: { de: "Antikes Theater von Ohrid", hu: "Ohridi antik színház", ro: "Teatrul Antic din Ohrid", en: "Ancient Theatre of Ohrid" },
    description: {
      de: "Ein hellenistisches Theater, erbaut um 200 v. Chr.",
      hu: "Hellenisztikus színház, i.e. 200 körül épült.",
      ro: "Un teatru elenistic construit în jurul anului 200 î.Hr.",
      en: "A Hellenistic-style theatre built around 200 BC."
    }
  },
  {
    id: "debarca-st-george",
    type: "historical",
    parent: "MK-008",
    coords: [20.8333, 41.2833],
    name: { de: "Sveti Georgi (Belčišta)", hu: "Szent György-templom (Belčišta)", ro: "Biserica Sf. Gheorghe (Belčišta)", en: "St. George Church (Belčišta)" },
    description: {
      de: "Eine bedeutende Kirche in der Region Debarca.",
      hu: "Fontos templom a Debarca régióban.",
      ro: "O biserică importantă din regiunea Debarca.",
      en: "An important church in the Debarca region."
    }
  },
  {
    id: "debarca-sini-virovi",
    type: "landmark",
    parent: "MK-008",
    coords: [20.8000, 41.2000],
    name: { de: "Sini Virovi", hu: "Sini Virovi", ro: "Sini Virovi", en: "Sini Virovi" },
    description: {
      de: "Kristallklare blaue Quellen in der Nähe von Belčišta.",
      hu: "Kristálytiszta kék források Belčišta közelében.",
      ro: "Izvoare albastre cristaline lângă Belčišta.",
      en: "Crystal clear blue springs near Belčišta."
    }
  },
  {
    id: "resen-saraj",
    type: "historical",
    parent: "MK-009",
    coords: [21.0117, 41.0889],
    name: { de: "Saraj von Resen", hu: "Reseni szaraj", ro: "Saraiul din Resen", en: "Resen Saraj" },
    description: {
      de: "Ein neoklassizistisches Schloss, erbaut von Ahmed Niyazi Bey.",
      hu: "Ahmed Niyazi bég által építtetett neoklasszicista kastély.",
      ro: "Un castel neoclasic construit de Ahmed Niyazi Bey.",
      en: "A neoclassical palace built by Ahmed Niyazi Bey."
    }
  },
  {
    id: "resen-kurbinovo",
    type: "historical",
    parent: "MK-009",
    coords: [21.0833, 41.0167],
    name: { de: "Sveti Georgi (Kurbinovo)", hu: "Szent György-templom (Kurbinovo)", ro: "Biserica Sf. Gheorghe (Kurbinovo)", en: "St. George Church (Kurbinovo)" },
    description: {
      de: "Berühmt für seine Fresken aus dem 12. Jahrhundert.",
      hu: "Híres 12. századi freskóiról.",
      ro: "Faimoasă pentru frescele sale din secolul al XII-lea.",
      en: "Famous for its 12th-century frescoes."
    }
  },
  {
    id: "novoselo-kolesino",
    type: "landmark",
    parent: "MK-010",
    coords: [22.8000, 41.3833],
    name: { de: "Kolešino-Wasserfall", hu: "Kolešino-vízesés", ro: "Cascada Kolešino", en: "Kolešino Waterfall" },
    description: {
      de: "Einer der höchsten Wasserfälle Mazedoniens am Fluss Baba.",
      hu: "Macedónia egyik legmagasabb vízesése a Baba-folyón.",
      ro: "Una dintre cele mai înalte cascade din Macedonia pe râul Baba.",
      en: "One of the highest waterfalls in Macedonia on the Baba River."
    }
  },
  {
    id: "novoselo-gabrovo",
    type: "landmark",
    parent: "MK-010",
    coords: [22.7800, 41.3700],
    name: { de: "Gabrovo-Wasserfälle", hu: "Gabrovói-vízesések", ro: "Cascadele Gabrovo", en: "Gabrovo Waterfalls" },
    description: {
      de: "Drei Wasserfälle in der Nähe des Dorfes Gabrovo.",
      hu: "Három vízesés Gabrovo falu közelében.",
      ro: "Trei cascade în apropierea satului Gabrovo.",
      en: "Three waterfalls near the village of Gabrovo."
    }
  },
  {
    id: "dojran-lake",
    type: "lake",
    parent: "MK-011",
    coords: [22.7167, 41.1833],
    name: { de: "Dojransee", hu: "Dojrani-tó", ro: "Lacul Dojran", en: "Dojran Lake" },
    description: {
      de: "Bekannt für seine traditionelle Fischerei mit Kormoranen.",
      hu: "Hagyományos, kormoránokkal történő halászatáról ismert.",
      ro: "Cunoscut pentru pescuitul tradițional cu cormorani.",
      en: "Known for its traditional fishing using cormorants."
    }
  },
  {
    id: "dojran-clock",
    type: "historical",
    parent: "MK-011",
    coords: [22.7200, 41.1850],
    name: { de: "Uhrturm Dojran", hu: "Dojrani óratorony", ro: "Turnul cu Ceas din Dojran", en: "Dojran Clock Tower" },
    description: {
      de: "Die Überreste des Uhrturms aus der osmanischen Zeit.",
      hu: "Az oszmán kori óratorony maradványai.",
      ro: "Rămășițele turnului cu ceas din perioada otomană.",
      en: "The remains of the clock tower from the Ottoman period."
    }
  },
  {
    id: "valandovo-marvinci",
    type: "historical",
    parent: "MK-012",
    coords: [22.4833, 41.2833],
    name: { de: "Isar Marvinci", hu: "Isar Marvinci", ro: "Isar Marvinci", en: "Isar Marvinci" },
    description: {
      de: "Bedeutende archäologische Stätte aus der Antike.",
      hu: "Fontos antik régészeti lelőhely.",
      ro: "Situl arheologic important din antichitate.",
      en: "Important archaeological site from antiquity."
    }
  },
  {
    id: "valandovo-st-george",
    type: "historical",
    parent: "MK-012",
    coords: [22.5667, 41.3333],
    name: { de: "Kloster Sveti Georgi", hu: "Szent György-kolostor", ro: "Mănăstirea Sf. Gheorghe", en: "St. George Monastery" },
    description: {
      de: "Ein Kloster oberhalb der Stadt Valandovo.",
      hu: "Kolostor Valandovo városa felett.",
      ro: "O mănăstire deasupra orașului Valandovo.",
      en: "A monastery above the town of Valandovo."
    }
  },
  {
    id: "strumica-carevi-kuli",
    type: "historical",
    parent: "MK-013",
    coords: [22.6333, 41.4333],
    name: { de: "Carevi Kuli", hu: "Cár-tornyok", ro: "Turnurile Țarului", en: "Carevi Kuli" },
    description: {
      de: "Mittelalterliche Festung über Strumica.",
      hu: "Középkori erőd Strumica felett.",
      ro: "Fortăreață medievală deasupra orașului Strumica.",
      en: "Medieval fortress overlooking Strumica."
    }
  },
  {
    id: "strumica-veljusa",
    type: "historical",
    parent: "MK-013",
    coords: [22.5667, 41.4833],
    name: { de: "Kloster Veljusa", hu: "Veljusai kolostor", ro: "Mănăstirea Veljusa", en: "Veljusa Monastery" },
    description: {
      de: "Kloster der Gottesmutter Eleusa aus dem 11. Jahrhundert.",
      hu: "Az Eleusa Istenszülő-kolostor a 11. századból.",
      ro: "Mănăstirea Maicii Domnului Eleusa din secolul al XI-lea.",
      en: "Monastery of the Holy Mother of God Eleusa from the 11th century."
    }
  },
  {
    id: "bogdanci-wind",
    type: "landmark",
    parent: "MK-014",
    coords: [22.5333, 41.1833],
    name: { de: "Windpark Gjavato", hu: "Gjavatói szélerőműpark", ro: "Parcul Eolian Gjavato", en: "Gjavato Wind Park" },
    description: {
      de: "Der erste Windpark in Nordmazedonien.",
      hu: "Észak-Macedónia első szélerőműparkja.",
      ro: "Primul parc eolian din Macedonia de Nord.",
      en: "The first wind park in North Macedonia."
    }
  },
  {
    id: "bogdanci-church",
    type: "historical",
    parent: "MK-014",
    coords: [22.5750, 41.2028],
    name: { de: "Kirche hl. Athanasius", hu: "Szent Atanáz-templom", ro: "Biserica Sf. Atanasie", en: "St. Athanasius Church" },
    description: {
      de: "Eine orthodoxe Kirche in Bogdanci.",
      hu: "Ortodox templom Bogdanciban.",
      ro: "O biserică ortodoxă în Bogdanci.",
      en: "An Orthodox church in Bogdanci."
    }
  },
  {
    id: "gevgelija-vardarski-rid",
    type: "historical",
    parent: "MK-015",
    coords: [22.5167, 41.1500],
    name: { de: "Vardarski Rid", hu: "Vardarski Rid", ro: "Vardarski Rid", en: "Vardarski Rid" },
    description: {
      de: "Eine bedeutende archäologische Stätte nahe Gevgelija.",
      hu: "Fontos régészeti lelőhely Gevgelija közelében.",
      ro: "Situl arheologic important de lângă Gevgelija.",
      en: "An important archaeological site near Gevgelija."
    }
  },
  {
    id: "gevgelija-smrdliva-voda",
    type: "landmark",
    parent: "MK-015",
    coords: [22.3167, 41.1833],
    name: { de: "Smrdliva Voda", hu: "Büdös-víz", ro: "Smrdliva Voda", en: "Smrdliva Voda" },
    description: {
      de: "Ein bekannter Ort mit schwefelhaltigem Heilwasser.",
      hu: "Kénes gyógyvizéről ismert hely.",
      ro: "Un loc cunoscut cu apă curativă sulfuroasă.",
      en: "A well-known place with sulfurous healing water."
    }
  },
  {
    id: "kavadarci-tikves",
    type: "landmark",
    parent: "MK-016",
    coords: [22.0167, 41.4333],
    name: { de: "Weingut Tikveš", hu: "Tikveš borászat", ro: "Vinăria Tikveš", en: "Tikveš Winery" },
    description: {
      de: "Eines der größten und ältesten Weingüter Südosteuropas.",
      hu: "Délkelet-Európa egyik legnagyobb és legrégebbi borászata.",
      ro: "Una dintre cele mai mari și vechi vinării din Europa de Sud-Est.",
      en: "One of the largest and oldest wineries in Southeast Europe."
    }
  },
  {
    id: "kavadarci-marko",
    type: "historical",
    parent: "MK-016",
    coords: [21.9667, 41.3833],
    name: { de: "Markos Kloster (Tikveš)", hu: "Marko kolostora (Tikveš)", ro: "Mănăstirea lui Marko (Tikveš)", en: "Marko's Monastery (Tikveš)" },
    description: {
      de: "Ein historisches Kloster in der Tikveš-Region.",
      hu: "Történelmi kolostor a Tikveš-régióban.",
      ro: "O mănăstire istorică în regiunea Tikveš.",
      en: "A historic monastery in the Tikveš region."
    }
  },
  {
    id: "novaci-suvodol",
    type: "historical",
    parent: "MK-017",
    coords: [21.5333, 41.0667],
    name: { de: "Suvodol-Stätte", hu: "Suvodol lelőhely", ro: "Situl Suvodol", en: "Suvodol Site" },
    description: {
      de: "Eine archäologische Fundstätte in der Nähe von Novaci.",
      hu: "Régészeti lelőhely Novaci közelében.",
      ro: "Un sit arheologic în apropiere de Novaci.",
      en: "An archaeological site near Novaci."
    }
  },
  {
    id: "novaci-staravina",
    type: "landmark",
    parent: "MK-017",
    coords: [21.7333, 41.1333],
    name: { de: "Filmbrücke Staravina", hu: "Staravinai filmhíd", ro: "Podul din Staravina", en: "Staravina Film Bridge" },
    description: {
      de: "Bekannt als Drehort für mazedonische Filme.",
      hu: "Macedón filmek forgatási helyszíneként ismert.",
      ro: "Cunoscut ca locație de filmare pentru filme macedonene.",
      en: "Known as a filming location for Macedonian movies."
    }
  },
  {
    id: "prilep-treskavec",
    type: "historical",
    parent: "MK-018",
    coords: [21.5333, 41.4000],
    name: { de: "Kloster Treskavec", hu: "Treskavec-kolostor", ro: "Mănăstirea Treskavec", en: "Treskavec Monastery" },
    description: {
      de: "Ein Kloster aus dem 12. Jahrhundert auf dem Berg Zlatovrv.",
      hu: "12. századi kolostor a Zlatovrv-hegyen.",
      ro: "O mănăstire din secolul al XII-lea pe muntele Zlatovrv.",
      en: "A 12th-century monastery on Zlatovrv Mountain."
    }
  },
  {
    id: "prilep-zrze",
    type: "historical",
    parent: "MK-018",
    coords: [21.3500, 41.5167],
    name: { de: "Kloster Zrze", hu: "Zrze-kolostor", ro: "Mănăstirea Zrze", en: "Zrze Monastery" },
    description: {
      de: "Ein Klosterkomplex mit einer beeindruckenden Aussicht auf die Pelagonien-Ebene.",
      hu: "Kolostorkomplexum lenyűgöző kilátással a Pelagóniai-síkságra.",
      ro: "Un complex monastic cu o vedere impresionantă asupra câmpiei Pelagonia.",
      en: "A monastery complex with a stunning view of the Pelagonia plain."
    }
  },
  {
    id: "bitola-sirok-sokak",
    type: "landmark",
    parent: "MK-019",
    coords: [21.3333, 41.0333],
    name: { de: "Širok Sokak", hu: "Širok Sokak", ro: "Širok Sokak", en: "Širok Sokak" },
    description: {
      de: "Die berühmte Fußgängerzone von Bitola.",
      hu: "Bitola híres sétálóutcája.",
      ro: "Faimoasa stradă pietonală din Bitola.",
      en: "The famous pedestrian street of Bitola."
    }
  },
  {
    id: "bitola-clock",
    type: "historical",
    parent: "MK-019",
    coords: [21.3344, 41.0319],
    name: { de: "Uhrturm Bitola", hu: "Bitolai óratorony", ro: "Turnul cu Ceas din Bitola", en: "Bitola Clock Tower" },
    description: {
      de: "Eines der bekanntesten Wahrzeichen von Bitola.",
      hu: "Bitola egyik legismertebb jelképe.",
      ro: "Unul dintre cele mai cunoscute simboluri din Bitola.",
      en: "One of the most famous landmarks of Bitola."
    }
  },
  {
    id: "lipkovo-lake",
    type: "lake",
    parent: "MK-020",
    coords: [21.5667, 42.1667],
    name: { de: "Lipkovo-See", hu: "Lipkovói-tó", ro: "Lacul Lipkovo", en: "Lipkovo Lake" },
    description: {
      de: "Ein künstlicher See im Norden Mazedoniens.",
      hu: "Mesterséges tó Észak-Macedónia északi részén.",
      ro: "Un lac artificial în nordul Macedoniei.",
      en: "An artificial lake in northern Macedonia."
    }
  },
  {
    id: "lipkovo-glaznja",
    type: "lake",
    parent: "MK-020",
    coords: [21.5333, 42.1833],
    name: { de: "Glažnja-See", hu: "Glažnjai-tó", ro: "Lacul Glažnja", en: "Glažnja Lake" },
    description: {
      de: "Ein weiterer Stausee in der Gemeinde Lipkovo.",
      hu: "Egy másik víztározó Lipkovo községben.",
      ro: "Un alt lac de acumulare în comuna Lipkovo.",
      en: "Another reservoir in the Lipkovo municipality."
    }
  },
  {
    id: "sandevo-st-nicetas",
    type: "historical",
    parent: "MK-021",
    coords: [21.3833, 42.1167],
    name: { de: "Kloster Sveti Nikita", hu: "Szent Nikétasz-kolostor", ro: "Mănăstirea Sf. Nikita", en: "St. Nicetas Monastery" },
    description: {
      de: "Ein mittelalterliches Kloster im Skopska Crna Gora Gebirge.",
      hu: "Középkori kolostor a Skopska Crna Gora hegységben.",
      ro: "O mănăstire medievală în munții Skopska Crna Gora.",
      en: "A medieval monastery in the Skopska Crna Gora mountains."
    }
  },
  {
    id: "sandevo-davina-kula",
    type: "historical",
    parent: "MK-021",
    coords: [21.3667, 42.1000],
    name: { de: "Davina Kula", hu: "Davina Kula", ro: "Davina Kula", en: "Davina Kula" },
    description: {
      de: "Überreste einer antiken und mittelalterlichen Festung.",
      hu: "Antik és középkori erőd maradványai.",
      ro: "Rămășițele unei fortărețe antice și medievale.",
      en: "Remains of an ancient and medieval fortress."
    }
  },
  {
    id: "gjorce-petrov-park",
    type: "landmark",
    parent: "MK-022",
    coords: [21.3600, 42.0061],
    name: { de: "Park Gjorče Petrov", hu: "Gjorcse Petrov park", ro: "Parcul Gjorče Petrov", en: "Gjorče Petrov Park" },
    description: {
      de: "Ein bedeutender Park in der Gemeinde Gjorče Petrov in Skopje.",
      hu: "Fontos park Szkopje Gjorcse Petrov kerületében.",
      ro: "Un parc important în municipalitatea Gjorče Petrov din Skopje.",
      en: "A significant park in the Gjorče Petrov municipality of Skopje."
    }
  },
  {
    id: "gjorce-petrov-church",
    type: "historical",
    parent: "MK-022",
    coords: [21.3533, 42.0100],
    name: { de: "Kirche hl. Peter und Paul", hu: "Szent Péter és Pál-templom", ro: "Biserica Sf. Petru și Pavel", en: "Church of St. Peter and Paul" },
    description: {
      de: "Eine orthodoxe Kirche im Herzen von Gjorče Petrov.",
      hu: "Ortodox templom Gjorcse Petrov szívében.",
      ro: "O biserică ortodoxă în inima localității Gjorče Petrov.",
      en: "An Orthodox church in the heart of Gjorče Petrov."
    }
  },
  {
    id: "saraj-lake-treska",
    type: "lake",
    parent: "MK-023",
    coords: [21.3167, 41.9667],
    name: { de: "Treska-See", hu: "Treszka-tó", ro: "Lacul Treska", en: "Treska Lake" },
    description: {
      de: "Ein künstlicher See und Erholungsgebiet nahe Saraj.",
      hu: "Mesterséges tó és üdülőövezet Saraj közelében.",
      ro: "Un lac artificial și zonă de recreere lângă Saraj.",
      en: "An artificial lake and recreational area near Saraj."
    }
  },
  {
    id: "saraj-matka-dam",
    type: "landmark",
    parent: "MK-023",
    coords: [21.2966, 41.9566],
    name: { de: "Matka-Talsperre", hu: "Matka-gát", ro: "Barajul Matka", en: "Matka Dam" },
    description: {
      de: "Die älteste Talsperre Nordmazedoniens am Fluss Treska.",
      hu: "Észak-Macedónia legrégebbi gátja a Treszka-folyón.",
      ro: "Cel mai vechi baraj din Macedonia de Nord pe râul Treska.",
      en: "The oldest arch dam in North Macedonia on the Treska River."
    }
  },
  {
    id: "jegunovce-beloviste",
    type: "landmark",
    parent: "MK-024",
    coords: [21.1167, 42.1333],
    name: { de: "Belovište-Wasserfall", hu: "Belovistei-vízesés", ro: "Cascada Belovište", en: "Belovište Waterfall" },
    description: {
      de: "Ein malerischer Wasserfall in den Šar-Bergen.",
      hu: "Gömörű vízesés a Šar-hegységben.",
      ro: "O cascadă pitorească în Munții Šar.",
      en: "A picturesque waterfall in the Šar Mountains."
    }
  },
  {
    id: "jegunovce-lake",
    type: "lake",
    parent: "MK-024",
    coords: [21.1333, 42.1500],
    name: { de: "Vratnica-See", hu: "Vratnicai-tó", ro: "Lacul Vratnica", en: "Vratnica Lake" },
    description: {
      de: "Ein kleiner natürlicher See in der Nähe der albanischen Grenze.",
      hu: "Kis természetes tó az albán határ közelében.",
      ro: "Un mic lac natural lângă granița cu Albania.",
      en: "A small natural lake near the Albanian border."
    }
  },
  {
    id: "tearce-leshok-monastery",
    type: "historical",
    parent: "MK-025",
    coords: [21.0333, 42.0667],
    name: { de: "Kloster Leshok", hu: "Lesoki kolostor", ro: "Mănăstirea Leșok", en: "Leshok Monastery" },
    description: {
      de: "Ein bedeutendes spirituelles Zentrum mit den Kirchen St. Athanasius und St. Maria.",
      hu: "Fontos spirituális központ a Szent Atanáz és Szent Mária templomokkal.",
      ro: "Un centru spiritual important cu bisericile Sf. Atanasie și Sf. Maria.",
      en: "A significant spiritual center featuring the churches of St. Athanasius and St. Mary."
    }
  },
  {
    id: "tearce-st-george",
    type: "historical",
    parent: "MK-025",
    coords: [21.0400, 42.0700],
    name: { de: "Kirche hl. Georg (Tearce)", hu: "Szent György-templom (Tearce)", ro: "Biserica Sf. Gheorghe (Tearce)", en: "Church of St. George (Tearce)" },
    description: {
      de: "Eine historische orthodoxe Kirche in der Gemeinde Tearce.",
      hu: "Történelmi ortodox templom Tearce községben.",
      ro: "O biserică ortodoxă istorică în comuna Tearce.",
      en: "A historical Orthodox church in the Tearce municipality."
    }
  },
  {
    id: "tetovo-arabati-tekke",
    type: "historical",
    parent: "MK-026",
    coords: [20.9583, 42.0083],
    name: { de: "Arabati-Baba-Tekke", hu: "Arabati-baba tekke", ro: "Tekke Arabati Baba", en: "Arabati Baba Tekke" },
    description: {
      de: "Eines der bedeutendsten Derwisch-Klöster auf dem Balkan.",
      hu: "A Balkán egyik legjelentősebb dervis kolostora.",
      ro: "Una dintre cele mai importante mănăstiri de derviși din Balcani.",
      en: "One of the most significant Dervish monasteries in the Balkans."
    }
  },
  {
    id: "tetovo-baltepe",
    type: "historical",
    parent: "MK-026",
    coords: [20.9750, 42.0167],
    name: { de: "Festung Baltepe", hu: "Baltepe erőd", ro: "Fortăreața Baltepe", en: "Baltepe Fortress" },
    description: {
      de: "Überreste einer osmanischen Festung auf dem Hügel über Tetovo.",
      hu: "Osztmán erőd maradványai a Tetovo feletti dombon.",
      ro: "Rămășițele unei fortărețe otomane pe dealul de deasupra Tetovo.",
      en: "Remains of an Ottoman fortress on the hill above Tetovo."
    }
  },
  {
    id: "bogovinje-lake-point",
    type: "lake",
    parent: "MK-027",
    coords: [20.8667, 41.9167],
    name: { de: "Bogovinje-See", hu: "Bogovinje-tó", ro: "Lacul Bogovinje", en: "Bogovinje Lake" },
    description: {
      de: "Der größte Gletschersee in den Šar-Bergen.",
      hu: "A legnagyobb gleccsertó a Šar-hegységben.",
      ro: "Cel mai mare lac glaciar din Munții Šar.",
      en: "The largest glacial lake in the Šar Mountains."
    }
  },
  {
    id: "bogovinje-shar-nature",
    type: "landmark",
    parent: "MK-027",
    coords: [20.8500, 41.9300],
    name: { de: "Šar-Gebirge (Bogovinje)", hu: "Šar-hegység (Bogovinje)", ro: "Munții Šar (Bogovinje)", en: "Shar Mountains (Bogovinje)" },
    description: {
      de: "Malerische Bergregion ideal für Wanderungen.",
      hu: "Festői hegyvidék, ideális túrázásra.",
      ro: "Regiune montană pitorească ideală pentru drumeții.",
      en: "Picturesque mountain region ideal for hiking."
    }
  },
  {
    id: "vrapciste-galate-waterfall",
    type: "landmark",
    parent: "MK-028",
    coords: [20.8667, 41.8333],
    name: { de: "Galate-Wasserfall", hu: "Galate-vízesés", ro: "Cascada Galate", en: "Galate Waterfall" },
    description: {
      de: "Ein kleiner, aber schöner Wasserfall nahe dem Dorf Galate.",
      hu: "Kicsi, de szép vízesés Galate falu közelében.",
      ro: "O cascadă mică, dar frumoasă, lângă satul Galate.",
      en: "A small but beautiful waterfall near the village of Galate."
    }
  },
  {
    id: "vrapciste-st-nicholas",
    type: "historical",
    parent: "MK-028",
    coords: [20.9000, 41.8333],
    name: { de: "Kirche hl. Nikolaus (Gradec)", hu: "Szent Miklós-templom (Gradec)", ro: "Biserica Sf. Nicolae (Gradec)", en: "Church of St. Nicholas (Gradec)" },
    description: {
      de: "Eine alte orthodoxe Kirche im Dorf Gradec.",
      hu: "Régi ortodox templom Gradec faluban.",
      ro: "O veche biserică ortodoxă în satul Gradec.",
      en: "An old Orthodox church in the village of Gradec."
    }
  },
  {
    id: "kriva-palanka-osogovo",
    type: "historical",
    parent: "MK-029",
    coords: [22.3667, 42.2167],
    name: { de: "Kloster Joachim von Osogovo", hu: "Osogovói kolostor", ro: "Mănăstirea Sf. Ioachim de Osogovo", en: "Osogovo Monastery" },
    description: {
      de: "Ein wunderschöner Klosterkomplex in den Osogovo-Bergen.",
      hu: "Gyönyörű kolostorkomplexum az Osogovo-hegységben.",
      ro: "Un complex monastic superb în munții Osogovo.",
      en: "A beautiful monastery complex located in the Osogovo Mountains."
    }
  },
  {
    id: "kriva-palanka-staneci-falls",
    type: "landmark",
    parent: "MK-029",
    coords: [22.3833, 42.1833],
    name: { de: "Stanečki-Wasserfälle", hu: "Sztanecski-vízesések", ro: "Cascadele Stanečki", en: "Stanečki Waterfalls" },
    description: {
      de: "Versteckte Wasserfälle in der Nähe von Kriva Palanka.",
      hu: "Rejtett vízesések Kriva Palanka közelében.",
      ro: "Cascade ascunse în apropiere de Kriva Palanka.",
      en: "Hidden waterfalls located near Kriva Palanka."
    }
  },
  {
    id: "rankovce-st-nicholas",
    type: "historical",
    parent: "MK-030",
    coords: [22.1167, 42.1833],
    name: { de: "Kirche hl. Nikolaus (Rankovce)", hu: "Szent Miklós-templom (Rankovce)", ro: "Biserica Sf. Nicolae (Rankovce)", en: "Church of St. Nicholas (Rankovce)" },
    description: {
      de: "Eine bedeutende Kirche in der Gemeinde Rankovce.",
      hu: "Fontos templom Rankovce községben.",
      ro: "O biserică importantă în comuna Rankovce.",
      en: "An important church in the Rankovce municipality."
    }
  },
  {
    id: "rankovce-psaca",
    type: "historical",
    parent: "MK-030",
    coords: [22.2000, 42.1667],
    name: { de: "Kloster Psača", hu: "Psacsai kolostor", ro: "Mănăstirea Psača", en: "Psača Monastery" },
    description: {
      de: "Berühmt für seine Fresken aus dem 14. Jahrhundert.",
      hu: "Híres 14. századi freskóiról.",
      ro: "Faimoasă pentru frescele sale din secolul al XIV-lea.",
      en: "Famous for its 14th-century frescoes."
    }
  },
  {
    id: "staro-nagoricane-st-george",
    type: "historical",
    parent: "MK-031",
    coords: [21.8333, 42.2000],
    name: { de: "Kirche hl. Georg", hu: "Szent György-templom", ro: "Biserica Sf. Gheorghe", en: "Church of St. George" },
    description: {
      de: "Ein Meisterwerk der mazedonisch-byzantinischen Architektur.",
      hu: "A macedón-bizánci építészet remekműve.",
      ro: "O capodoperă a arhitecturii macedoneano-bizantine.",
      en: "A masterpiece of Macedonian-Byzantine architecture."
    }
  },
  {
    id: "staro-nagoricane-zebrnjak",
    type: "historical",
    parent: "MK-031",
    coords: [21.7833, 42.1500],
    name: { de: "Zebrnjak-Denkmal", hu: "Zebrnjaki emlékmű", ro: "Monumentul Zebrnjak", en: "Zebrnjak Monument" },
    description: {
      de: "Gedenkstätte für die Schlacht von Kumanovo.",
      hu: "Emlékmű a kumanovói csata emlékére.",
      ro: "Monument comemorativ pentru bătălia de la Kumanovo.",
      en: "Monument commemorating the Battle of Kumanovo."
    }
  },
  {
    id: "kumanovo-church-nick",
    type: "historical",
    parent: "MK-032",
    coords: [21.7167, 42.1333],
    name: { de: "Kirche hl. Nikolaus (Kumanovo)", hu: "Szent Miklós-templom (Kumanovo)", ro: "Biserica Sf. Nicolae (Kumanovo)", en: "Church of St. Nicholas (Kumanovo)" },
    description: {
      de: "Die größte Kathedrale in Kumanovo.",
      hu: "Kumanovo legnagyobb katedrálisa.",
      ro: "Cea mai mare catedrală din Kumanovo.",
      en: "The largest cathedral in Kumanovo."
    }
  },
  {
    id: "kumanovo-pelince",
    type: "historical",
    parent: "MK-032",
    coords: [21.8333, 42.2167],
    name: { de: "Gedenkstätte Pelince", hu: "Pelincei emlékközpont", ro: "Memorialul Pelince", en: "Pelince Memorial Center" },
    description: {
      de: "Gedenkzentrum zur Gründung des mazedonischen Staates.",
      hu: "Macedónia államalapításának emlékközpontja.",
      ro: "Centru memorial dedicat fondării statului macedonean.",
      en: "Memorial center dedicated to the founding of the Macedonian state."
    }
  },
  {
    id: "delcevo-golak-mountain",
    type: "mountain",
    parent: "MK-033",
    coords: [22.7500, 41.9167],
    name: { de: "Berg Golak", hu: "Golak-hegy", ro: "Muntele Golak", en: "Golak Mountain" },
    description: {
      de: "Ein beliebtes Erholungsgebiet in der Nähe von Delčevo.",
      hu: "Népszerű üdülőhely Delcsevo közelében.",
      ro: "O zonă de recreere populară lângă Delčevo.",
      en: "A popular recreational area near Delčevo."
    }
  },
  {
    id: "delcevo-church-mary",
    type: "historical",
    parent: "MK-033",
    coords: [22.7667, 41.9667],
    name: { de: "Kirche hl. Maria", hu: "Szűz Mária-templom", ro: "Biserica Sf. Maria", en: "Church of St. Mary" },
    description: {
      de: "Eine bedeutende orthodoxe Kirche in Delčevo.",
      hu: "Fontos ortodox templom Delcsevo városában.",
      ro: "O biserică ortodoxă importantă din Delčevo.",
      en: "An important Orthodox church in Delčevo."
    }
  },
  {
    id: "mkamenica-kalimanci-lake",
    type: "lake",
    parent: "MK-034",
    coords: [22.6167, 41.9833],
    name: { de: "Kalimanci-See", hu: "Kalimanci-tó", ro: "Lacul Kalimanci", en: "Kalimanci Lake" },
    description: {
      de: "Ein großer Stausee, ideal zum Angeln.",
      hu: "Nagy víztározó, ideális horgászatra.",
      ro: "Un lac de acumulare mare, ideal pentru pescuit.",
      en: "A large reservoir, ideal for fishing."
    }
  },
  {
    id: "mkamenica-st-pantaleon",
    type: "historical",
    parent: "MK-034",
    coords: [22.5833, 42.0167],
    name: { de: "Kloster hl. Pantaleon", hu: "Szent Pantaleon-kolostor", ro: "Mănăstirea Sf. Pantelimon", en: "Monastery of St. Pantaleon" },
    description: {
      de: "Ein Kloster in der malerischen Region Kamenica.",
      hu: "Kolostor a festői Kamenica régióban.",
      ro: "O mănăstire în regiunea pitorească Kamenica.",
      en: "A monastery located in the scenic Kamenica region."
    }
  },
  {
    id: "berovo-lake-point",
    type: "lake",
    parent: "MK-035",
    coords: [22.9167, 41.6833],
    name: { de: "Berovo-See", hu: "Berovói-tó", ro: "Lacul Berovo", en: "Berovo Lake" },
    description: {
      de: "Ein wunderschöner See in den Maleševo-Bergen.",
      hu: "Gyönyörű tó a Maleševo-hegységben.",
      ro: "Un lac superb în Munții Maleševo.",
      en: "A beautiful lake located in the Maleševo Mountains."
    }
  },
  {
    id: "berovo-monastery-michael",
    type: "historical",
    parent: "MK-035",
    coords: [22.8500, 41.7000],
    name: { de: "Kloster hl. Erzengel Michael", hu: "Szent Mihály arkangyal kolostor", ro: "Mănăstirea Sf. Arhanghel Mihail", en: "Monastery of St. Archangel Michael" },
    description: {
      de: "Ein historisches Nonnenkloster in Berovo.",
      hu: "Történelmi apácakolostor Berovóban.",
      ro: "O mănăstire istorică de maici în Berovo.",
      en: "A historic nunnery located in Berovo."
    }
  },
  {
    id: "pehcevo-falls",
    type: "landmark",
    parent: "MK-036",
    coords: [22.9333, 41.7500],
    name: { de: "Pehčevo-Wasserfälle", hu: "Pehcsevoi-vízesések", ro: "Cascadele Pehčevo", en: "Pehčevo Waterfalls" },
    description: {
      de: "Eine Reihe von wunderschönen Wasserfällen im Wald.",
      hu: "Gyönyörű vízesések sorozata az erdőben.",
      ro: "O serie de cascade superbe în pădure.",
      en: "A series of beautiful waterfalls located in the forest."
    }
  },
  {
    id: "pehcevo-st-paraskeva",
    type: "historical",
    parent: "MK-036",
    coords: [22.8833, 41.7667],
    name: { de: "Kloster hl. Paraskeva", hu: "Szent Paraskeva-kolostor", ro: "Mănăstirea Sf. Parascheva", en: "Monastery of St. Paraskeva" },
    description: {
      de: "Ein ruhiger spiritueller Ort in der Nähe von Pehčevo.",
      hu: "Csendes spirituális hely Pehcsevo közelében.",
      ro: "Un loc spiritual liniștit lângă Pehčevo.",
      en: "A peaceful spiritual place near Pehčevo."
    }
  },
  {
    id: "zelino-bridge-vardar",
    type: "historical",
    parent: "MK-037",
    coords: [21.1833, 41.9833],
    name: { de: "Steinerne Brücke (Želino)", hu: "Zselinói kőhíd", ro: "Podul de Piatră (Želino)", en: "Stone Bridge (Želino)" },
    description: {
      de: "Eine alte osmanische Brücke über den Vardar.",
      hu: "Régi oszmán híd a Vardar folyó felett.",
      ro: "Un vechi pod otoman peste râul Vardar.",
      en: "An old Ottoman bridge over the Vardar river."
    }
  },
  {
    id: "zelino-polog",
    type: "landmark",
    parent: "MK-037",
    coords: [21.2000, 42.0000],
    name: { de: "Polog-Ebene", hu: "Polog-síkság", ro: "Câmpia Polog", en: "Polog Valley" },
    description: {
      de: "Das fruchtbare Tal zwischen Šar- und Suva-Gora-Bergen.",
      hu: "Termékeny völgy a Šar és a Suva Gora hegyek között.",
      ro: "Valea fertilă dintre munții Šar și Suva Gora.",
      en: "The fertile valley between the Shar and Suva Gora mountains."
    }
  },
  {
    id: "brvenica-st-athanasius",
    type: "historical",
    parent: "MK-038",
    coords: [20.9833, 41.9667],
    name: { de: "Kirche hl. Athanasius (Brvenica)", hu: "Szent Atanáz-templom (Brvenica)", ro: "Biserica Sf. Atanasie (Brvenica)", en: "Church of St. Athanasius (Brvenica)" },
    description: {
      de: "Eine bedeutende orthodoxe Kirche im Dorf Brvenica.",
      hu: "Fontos ortodox templom Brvenica faluban.",
      ro: "O biserică ortodoxă importantă în satul Brvenica.",
      en: "A significant Orthodox church in the village of Brvenica."
    }
  },
  {
    id: "brvenica-blace",
    type: "historical",
    parent: "MK-038",
    coords: [21.0167, 41.9000],
    name: { de: "Kloster hl. Nikolaus (Blace)", hu: "Szent Miklós-kolostor (Blace)", ro: "Mănăstirea Sf. Nicolae (Blace)", en: "Monastery of St. Nicholas (Blace)" },
    description: {
      de: "Ein kleines Kloster in der Nähe des Dorfes Blace.",
      hu: "Kis kolostor Blace falu közelében.",
      ro: "O mănăstire mică lângă satul Blace.",
      en: "A small monastery located near the village of Blace."
    }
  },
  {
    id: "brod-pesna-cave",
    type: "landmark",
    parent: "MK-039",
    coords: [21.2500, 41.5500],
    name: { de: "Pešna-Höhle", hu: "Pesna-barlang", ro: "Peștera Pešna", en: "Pešna Cave" },
    description: {
      de: "Bekannt für den gigantischen Höhleneingang, der an Helms Klamm erinnert.",
      hu: "Hatalmas bejáratáról ismert, amely a Helm-szurdokra emlékeztet.",
      ro: "Cunoscută pentru intrarea sa gigantică, asemănătoare cu Helm's Deep.",
      en: "Known for its massive entrance, which resembles Helm's Deep."
    }
  },
  {
    id: "brod-monastery-mary",
    type: "historical",
    parent: "MK-039",
    coords: [21.2333, 41.5000],
    name: { de: "Kloster Poreče", hu: "Porecsei kolostor", ro: "Mănăstirea Poreče", en: "Poreče Monastery" },
    description: {
      de: "Ein Kloster gewidmet der Heiligen Mutter Gottes.",
      hu: "A Szent Szűzanyának szentelt kolostor.",
      ro: "O mănăstire dedicată Sfintei Maici a Domnului.",
      en: "A monastery dedicated to the Holy Mother of God."
    }
  },
  {
    id: "oslomej-lake",
    type: "lake",
    parent: "MK-040",
    coords: [20.9833, 41.5833],
    name: { de: "Oslomej-See", hu: "Oslomeji-tó", ro: "Lacul Oslomej", en: "Oslomej Lake" },
    description: {
      de: "Ein kleiner See in der Nähe des Kohlekraftwerks.",
      hu: "Kis tó a széntüzelésű erőmű közelében.",
      ro: "Un lac mic în apropierea termocentralei.",
      en: "A small lake located near the coal power plant."
    }
  },
  {
    id: "oslomej-tuin-church",
    type: "historical",
    parent: "MK-040",
    coords: [21.0333, 41.6167],
    name: { de: "Kirche hl. Georg (Tuin)", hu: "Szent György-templom (Tuin)", ro: "Biserica Sf. Gheorghe (Tuin)", en: "Church of St. George (Tuin)" },
    description: {
      de: "Eine alte Dorfkirche in Tuin.",
      hu: "Régi falusi templom Tuinban.",
      ro: "O veche biserică de sat în Tuin.",
      en: "An old village church in Tuin."
    }
  },
  {
    id: "sopiste-govrlevo",
    type: "historical",
    parent: "MK-041",
    coords: [21.3667, 41.9333],
    name: { de: "Archäologische Stätte Govrlevo", hu: "Govrlevói régészeti lelőhely", ro: "Situl Govrlevo", en: "Govrlevo Archaeological Site" },
    description: {
      de: "Fundort der berühmten neolithischen Figur 'Adam von Mazedonien'.",
      hu: "A híres neolitikus 'Macedóniai Ádám' szobor lelőhelye.",
      ro: "Locul unde a fost găsită faimoasa statuetă neolitică 'Adam din Macedonia'.",
      en: "The site where the famous Neolithic figurine 'Adam of Macedonia' was found."
    }
  },
  {
    id: "sopiste-st-nicholas",
    type: "historical",
    parent: "MK-041",
    coords: [21.4167, 41.9500],
    name: { de: "Kirche hl. Nikolaus (Sopište)", hu: "Szent Miklós-templom (Sopiste)", ro: "Biserica Sf. Nicolae (Sopište)", en: "Church of St. Nicholas (Sopište)" },
    description: {
      de: "Eine orthodoxe Kirche in der Gemeinde Sopište.",
      hu: "Ortodox templom Sopiste községben.",
      ro: "O biserică ortodoxă în comuna Sopište.",
      en: "An Orthodox church in the Sopište municipality."
    }
  },
  {
    id: "karpos-nerezi-church",
    type: "historical",
    parent: "MK-042",
    coords: [21.3833, 41.9833],
    name: { de: "Kirche hl. Panteleimon", hu: "Szent Pantaleon-templom", ro: "Biserica Sf. Pantelimon", en: "Church of St. Panteleimon" },
    description: {
      de: "Berühmt für seine byzantinischen Fresken aus dem 12. Jahrhundert in Nerezi.",
      hu: "Híres 12. századi bizánci freskóiról Nereziben.",
      ro: "Faimoasă pentru frescele sale bizantine din secolul al XII-lea în Nerezi.",
      en: "Famous for its 12th-century Byzantine frescoes in Nerezi."
    }
  },
  {
    id: "karpos-vodno-karpos",
    type: "landmark",
    parent: "MK-042",
    coords: [21.4000, 41.9667],
    name: { de: "Berg Vodno (Karpoš)", hu: "Vodno-hegy (Karpos)", ro: "Muntele Vodno (Karpoš)", en: "Vodno Mountain (Karpoš)" },
    description: {
      de: "Der nördliche Teil des Vodno-Bergs, der zur Gemeinde Karpoš gehört.",
      hu: "A Vodno-hegy Karpos kerülethez tartozó északi része.",
      ro: "Partea de nord a muntelui Vodno aparținând municipalității Karpoš.",
      en: "The northern part of Vodno Mountain belonging to the Karpoš municipality."
    }
  },
  {
    id: "shutka-market",
    type: "landmark",
    parent: "MK-043",
    coords: [21.4333, 42.0333],
    name: { de: "Shutka-Markt", hu: "Sutka piac", ro: "Piața Shutka", en: "Shutka Market" },
    description: {
      de: "Ein berühmter und lebhafter Freiluftmarkt in Šuto Orizari.",
      hu: "Híres és élénk szabadtéri piac Suto Orizariban.",
      ro: "O piață în aer liber faimoasă și plină de viață în Šuto Orizari.",
      en: "A famous and vibrant open-air market in Šuto Orizari."
    }
  },
  {
    id: "shuto-orizari-mosque",
    type: "historical",
    parent: "MK-043",
    coords: [21.4280, 42.0320],
    name: { de: "Hamidiye-Moschee", hu: "Hamidiye mecset", ro: "Moscheea Hamidiye", en: "Hamidiye Mosque" },
    description: {
      de: "Eine bedeutende Moschee in der Gemeinde Šuto Orizari.",
      hu: "Fontos mecset Suto Orizari községben.",
      ro: "O moschee importantă în comuna Šuto Orizari.",
      en: "A significant mosque in the Šuto Orizari municipality."
    }
  },
  {
    id: "butel-cemetery",
    type: "historical",
    parent: "MK-044",
    coords: [21.4450, 42.0250],
    name: { de: "Französischer Militärfriedhof", hu: "Francia katonai temető", ro: "Cimitirul Militar Francez", en: "French Military Cemetery" },
    description: {
      de: "Ein Gedenkfriehof für die im Ersten Weltkrieg gefallenen französischen Soldaten.",
      hu: "Az első világháborúban elesett francia katonák emlékhelye.",
      ro: "Un cimitir memorial pentru soldații francezi căzuți în Primul Război Mondial.",
      en: "A memorial cemetery for French soldiers who died in World War I."
    }
  },
  {
    id: "butel-church-john",
    type: "historical",
    parent: "MK-044",
    coords: [21.4500, 42.0300],
    name: { de: "Kirche hl. Johannes der Täufer", hu: "Keresztelő Szent János-templom", ro: "Biserica Sf. Ioan Botezătorul", en: "Church of St. John the Baptist" },
    description: {
      de: "Eine orthodoxe Kirche in der Gemeinde Butel.",
      hu: "Ortodox templom Butel községben.",
      ro: "O biserică ortodoxă în comuna Butel.",
      en: "An Orthodox church in the Butel municipality."
    }
  },
  {
    id: "chair-bit-pazar",
    type: "landmark",
    parent: "MK-045",
    coords: [21.4380, 42.0030],
    name: { de: "Bit Pazar", hu: "Bit Piac", ro: "Bit Pazar", en: "Bit Pazar" },
    description: {
      de: "Der größte Marktplatz im Alten Basar von Skopje.",
      hu: "Szkopje régi bazárjának legnagyobb piaca.",
      ro: "Cea mai mare piață din Vechiul Bazar din Skopje.",
      en: "The largest marketplace in the Old Bazaar of Skopje."
    }
  },
  {
    id: "chair-murat-pasha",
    type: "historical",
    parent: "MK-045",
    coords: [21.4360, 42.0010],
    name: { de: "Murat-Pascha-Moschee", hu: "Murát pasa mecset", ro: "Moscheea Murat Pașa", en: "Murat Pasha Mosque" },
    description: {
      de: "Eine osmanische Moschee im Alten Basar.",
      hu: "Oszmán mecset a régi bazár területén.",
      ro: "O moschee otomană situată în Vechiul Bazar.",
      en: "An Ottoman mosque located in the Old Bazaar area."
    }
  },
  {
    id: "centar-square",
    type: "landmark",
    parent: "MK-046",
    coords: [21.4317, 41.9961],
    name: { de: "Makedonien-Platz", hu: "Macedónia tér", ro: "Piața Macedonia", en: "Macedonia Square" },
    description: {
      de: "Der zentrale Platz von Skopje mit dem monumentalen Reiterstandbild.",
      hu: "Szkopje központi tere a monumentális lovas szoborral.",
      ro: "Piața centrală din Skopje, cu monumentala statuie ecvestră.",
      en: "The main square of Skopje, featuring the monumental equestrian statue."
    }
  },
  {
    id: "centar-struggle-museum",
    type: "historical",
    parent: "MK-046",
    coords: [21.4325, 41.9965],
    name: { de: "Museum des mazedonischen Kampfes", hu: "A macedón harc múzeuma", ro: "Muzeul Luptei Macedonene", en: "Museum of the Macedonian Struggle" },
    description: {
      de: "Ein Museum zur Geschichte des Kampfes für die mazedonische Unabhängigkeit.",
      hu: "A macedón függetlenségért folytatott küzdelem történetét bemutató múzeum.",
      ro: "Un muzeu dedicat istoriei luptei pentru independența macedoneană.",
      en: "A museum dedicated to the history of the struggle for Macedonian independence."
    }
  },
  {
    id: "zajas-monument",
    type: "historical",
    parent: "MK-047",
    coords: [20.9333, 41.6000],
    name: { de: "Mutter-Teresa-Denkmal (Zajas)", hu: "Teréz anya emlékmű (Zajas)", ro: "Monumentul Maica Tereza (Zajas)", en: "Mother Teresa Monument (Zajas)" },
    description: {
      de: "Ein Denkmal zu Ehren von Mutter Teresa in Zajas.",
      hu: "Teréz anya tiszteletére emelt emlékmű Zajasban.",
      ro: "Un monument în cinstea Maicii Tereza în Zajas.",
      en: "A monument honoring Mother Teresa in Zajas."
    }
  },
  {
    id: "zajas-church",
    type: "historical",
    parent: "MK-047",
    coords: [20.9300, 41.6100],
    name: { de: "Kirche hl. Nikolaus (Zajas)", hu: "Szent Miklós-templom (Zajas)", ro: "Biserica Sf. Nicolae (Zajas)", en: "St. Nicholas Church (Zajas)" },
    description: {
      de: "Eine lokale orthodoxe Kirche in der Region Zajas.",
      hu: "Helyi ortodox templom Zajas régióban.",
      ro: "O biserică ortodoxă locală în regiunea Zajas.",
      en: "A local Orthodox church in the Zajas region."
    }
  },
  {
    id: "dolneni-slepche",
    type: "historical",
    parent: "MK-048",
    coords: [21.4833, 41.5000],
    name: { de: "Kloster Slepche (Dolneni)", hu: "Szelepcsi kolostor (Dolneni)", ro: "Mănăstirea Slepche (Dolneni)", en: "Slepche Monastery (Dolneni)" },
    description: {
      de: "Ein historisches Kloster in der Gemeinde Dolneni.",
      hu: "Történelmi kolostor Dolneni községben.",
      ro: "O mănăstire istorică în comuna Dolneni.",
      en: "A historic monastery in the Dolneni municipality."
    }
  },
  {
    id: "dolneni-kostinci",
    type: "historical",
    parent: "MK-048",
    coords: [21.4000, 41.4800],
    name: { de: "Kostinci Archäologische Stätte", hu: "Kosztinci régészeti lelőhely", ro: "Situl arheologic Kostinci", en: "Kostinci Archaeological Site" },
    description: {
      de: "Überreste einer antiken Siedlung nahe Kostinci.",
      hu: "Antik település maradványai Kostinci közelében.",
      ro: "Rămășițele unei așezări antice lângă Kostinci.",
      en: "Remains of an ancient settlement near Kostinci."
    }
  },
  {
    id: "krivogastani-church",
    type: "historical",
    parent: "MK-049",
    coords: [21.3333, 41.3333],
    name: { de: "Kirche hl. Demetrius", hu: "Szent Demeter-templom", ro: "Biserica Sf. Dumitru", en: "Church of St. Demetrius" },
    description: {
      de: "Die Hauptkirche im Zentrum von Krivogaštani.",
      hu: "Krivogastani központjának főtemploma.",
      ro: "Biserica principală din centrul localității Krivogaštani.",
      en: "The main church in the center of Krivogaštani."
    }
  },
  {
    id: "krivogastani-ethno",
    type: "historical",
    parent: "MK-049",
    coords: [21.3300, 41.3400],
    name: { de: "Ethno-Museum Krivogaštani", hu: "Krivogastani néprajzi múzeum", ro: "Muzeul de Etnografie Krivogaštani", en: "Krivogaštani Ethno-Museum" },
    description: {
      de: "Ein kleines Museum, das das traditionelle ländliche Leben zeigt.",
      hu: "A hagyományos falusi életet bemutató kis múzeum.",
      ro: "Un mic muzeu ce prezintă viața rurală tradițională.",
      en: "A small museum showcasing traditional rural life."
    }
  },
  {
    id: "mogila-beranci",
    type: "historical",
    parent: "MK-050",
    coords: [21.3500, 41.1500],
    name: { de: "Beranci Archäologische Stätte", hu: "Beranci régészeti lelőhely", ro: "Situl arheologic Beranci", en: "Beranci Archaeological Site" },
    description: {
      de: "Eine antike Fundstätte in der Gemeinde Mogila.",
      hu: "Antik lelőhely Mogila községben.",
      ro: "Un sit antic în comuna Mogila.",
      en: "An ancient archaeological site in the Mogila municipality."
    }
  },
  {
    id: "mogila-ascension",
    type: "historical",
    parent: "MK-050",
    coords: [21.3833, 41.1167],
    name: { de: "Himmelfahrtskirche", hu: "Mennybemenetel templom", ro: "Biserica Înălțării", en: "Church of the Ascension" },
    description: {
      de: "Die Dorfkirche von Mogila.",
      hu: "Mogila falusi temploma.",
      ro: "Biserica satului Mogila.",
      en: "The village church of Mogila."
    }
  },
  {
    id: "chashka-teovo",
    type: "historical",
    parent: "MK-051",
    coords: [21.5500, 41.5500],
    name: { de: "Teovo-Kloster", hu: "Teovói kolostor", ro: "Mănăstirea Teovo", en: "Teovo Monastery" },
    description: {
      de: "Ein friedliches Kloster in der Region Čaška.",
      hu: "Békés kolostor Chashka régióban.",
      ro: "O mănăstire liniștită în regiunea Čaška.",
      en: "A peaceful monastery in the Čaška region."
    }
  },
  {
    id: "chashka-oreshe",
    type: "landmark",
    parent: "MK-051",
    coords: [21.4167, 41.6167],
    name: { de: "Oreše-Wasserfall", hu: "Oresei-vízesés", ro: "Cascada Oreșe", en: "Oreše Waterfall" },
    description: {
      de: "Ein malerischer Wasserfall in den Bergen von Čaška.",
      hu: "Gömörű vízesés Chashka hegyei között.",
      ro: "O cascadă pitorească în munții din Čaška.",
      en: "A picturesque waterfall in the mountains of Čaška."
    }
  },
  {
    id: "rosoman-peach",
    type: "landmark",
    parent: "MK-052",
    coords: [21.9500, 41.5167],
    name: { de: "Pfirsich-Denkmal", hu: "Őszibarack emlékmű", ro: "Monumentul Piersicii", en: "Peach Monument" },
    description: {
      de: "Ein Denkmal für die Pfirsichproduktion, für die Rosoman bekannt ist.",
      hu: "Emlékmű az őszibarack-termelés tiszteletére, amiről Rosoman híres.",
      ro: "Un monument dedicat producției de piersici, pentru care Rosoman este renumit.",
      en: "A monument dedicated to peach production, for which Rosoman is famous."
    }
  },
  {
    id: "rosoman-sirkovo",
    type: "historical",
    parent: "MK-052",
    coords: [21.9167, 41.4833],
    name: { de: "Sirkovo-Kirche", hu: "Sirkovói templom", ro: "Biserica Sirkovo", en: "Sirkovo Church" },
    description: {
      de: "Eine alte orthodoxe Kirche im Dorf Sirkovo.",
      hu: "Régi ortodox templom Sirkovo faluban.",
      ro: "O veche biserică ortodoxă în satul Sirkovo.",
      en: "An old Orthodox church in the village of Sirkovo."
    }
  },
  {
    id: "negotino-clock",
    type: "historical",
    parent: "MK-053",
    coords: [22.1000, 41.4833],
    name: { de: "Uhrturm Negotino", hu: "Negotinói óratorony", ro: "Turnul cu Ceas din Negotino", en: "Negotino Clock Tower" },
    description: {
      de: "Ein markanter osmanischer Uhrturm im Zentrum von Negotino.",
      hu: "Jellegzetes oszmán óratorony Negotino központjában.",
      ro: "Un turn cu ceas otoman distinctiv în centrul orașului Negotino.",
      en: "A distinctive Ottoman clock tower in the center of Negotino."
    }
  },
  {
    id: "negotino-bovin",
    type: "landmark",
    parent: "MK-053",
    coords: [22.0833, 41.4933],
    name: { de: "Bovin-Weingut", hu: "Bovin borászat", ro: "Vinăria Bovin", en: "Bovin Winery" },
    description: {
      de: "Eines der bekanntesten privaten Weingüter in Nordmazedonien.",
      hu: "Észak-Macedónia egyik legismertebb magánborászata.",
      ro: "Una dintre cele mai cunoscute vinării private din Macedonia de Nord.",
      en: "One of the most famous private wineries in North Macedonia."
    }
  },
  {
    id: "drugovo-knezhino",
    type: "historical",
    parent: "MK-054",
    coords: [20.9167, 41.5167],
    name: { de: "Kloster Knežino", hu: "Knezsinói kolostor", ro: "Mănăstirea Knežino", en: "Knežino Monastery" },
    description: {
      de: "Ein mittelalterlicher Klosterkomplex nahe dem Dorf Knežino.",
      hu: "Középkori kolostorkomplexum Knezsino falu közelében.",
      ro: "Un complex monastic medieval lângă satul Knežino.",
      en: "A medieval monastery complex near the village of Knežino."
    }
  },
  {
    id: "drugovo-church",
    type: "historical",
    parent: "MK-054",
    coords: [20.9100, 41.4800],
    name: { de: "Kirche hl. Nikolaus (Drugovo)", hu: "Szent Miklós-templom (Drugovo)", ro: "Biserica Sf. Nicolae (Drugovo)", en: "Church of St. Nicholas (Drugovo)" },
    description: {
      de: "Die Hauptkirche in der Gemeinde Drugovo.",
      hu: "Drugovo község főtemploma.",
      ro: "Biserica principală din comuna Drugovo.",
      en: "The main church in the Drugovo municipality."
    }
  },
  {
    id: "gazibaba-fair",
    type: "landmark",
    parent: "MK-055",
    coords: [21.4500, 42.0000],
    name: { de: "Skopje Messe", hu: "Szkopjei vásár", ro: "Târgul din Skopje", en: "Skopje Fair" },
    description: {
      de: "Ein wichtiges wirtschaftliches Zentrum für Messen und Ausstellungen.",
      hu: "Fontos gazdasági központ vásárok és kiállítások számára.",
      ro: "Un centru economic important pentru târguri și expoziții.",
      en: "An important economic center for fairs and exhibitions."
    }
  },
  {
    id: "gazibaba-park",
    type: "landmark",
    parent: "MK-055",
    coords: [21.4667, 42.0167],
    name: { de: "Gazi-Baba-Waldpark", hu: "Gázi Baba erdőpark", ro: "Parcul Forestier Gazi Baba", en: "Gazi Baba Forest Park" },
    description: {
      de: "Eines der größten grünen Erholungsgebiete in Skopje.",
      hu: "Szkopje egyik legnagyobb zöld üdülőövezete.",
      ro: "Una dintre cele mai mari zone verzi de recreere din Skopje.",
      en: "One of the largest green recreational areas in Skopje."
    }
  },
  {
    id: "krusevo-makedonium",
    type: "landmark",
    parent: "MK-056",
    coords: [21.2500, 41.3750],
    name: { de: "Makedonium", hu: "Makedónium", ro: "Makedonium", en: "Makedonium" },
    description: {
      de: "Ein monumentales Denkmal zum Gedenken an den Ilinden-Aufstand.",
      hu: "Monumentális emlékmű az Ilinden-felkelés emlékére.",
      ro: "Un monument monumental dedicat Revoltei de la Ilinden.",
      en: "A monumental memorial commemorating the Ilinden Uprising."
    }
  },
  {
    id: "krusevo-memorial",
    type: "historical",
    parent: "MK-056",
    coords: [21.2400, 41.3667],
    name: { de: "Toše-Proeski-Gedenkhaus", hu: "Tose Proeszki emlékház", ro: "Casa Memorială Toše Proeski", en: "Toše Proeski Memorial House" },
    description: {
      de: "Gedenkstätte für den berühmtesten Popstar Mazedoniens.",
      hu: "Emlékház Macedónia leghíresebb popsztárjának tiszteletére.",
      ro: "Casa memorială dedicată celui mai faimos star pop din Macedonia.",
      en: "Memorial house dedicated to Macedonia's most famous pop star."
    }
  },
  {
    id: "demirhisar-slepche",
    type: "historical",
    parent: "MK-057",
    coords: [21.1667, 41.2167],
    name: { de: "Kloster Slepche (Demir Hisar)", hu: "Szelepcsi kolostor (Demir Hisar)", ro: "Mănăstirea Slepche (Demir Hisar)", en: "Slepche Monastery (Demir Hisar)" },
    description: {
      de: "Ein bedeutendes spirituelles Zentrum aus dem 14. Jahrhundert.",
      hu: "Fontos spirituális központ a 14. századból.",
      ro: "Un centru spiritual important din secolul al XIV-lea.",
      en: "An important spiritual center dating back to the 14th century."
    }
  },
  {
    id: "demirhisar-park",
    type: "landmark",
    parent: "MK-057",
    coords: [21.2000, 41.2200],
    name: { de: "Demir Hisar Park", hu: "Demir Hiszar városi park", ro: "Parcul Demir Hisar", en: "Demir Hisar Park" },
    description: {
      de: "Ein Erholungspark im Zentrum von Demir Hisar.",
      hu: "Üdülőpark Demir Hiszar központjában.",
      ro: "Un parc de recreere în centrul orașului Demir Hisar.",
      en: "A recreational park in the center of Demir Hisar."
    }
  },
  {
    id: "aerodrom-arena",
    type: "landmark",
    parent: "MK-058",
    coords: [21.4667, 41.9833],
    name: { de: "Jane-Sandanski-Arena", hu: "Jane Sandanszki Aréna", ro: "Arena Jane Sandanski", en: "Jane Sandanski Arena" },
    description: {
      de: "Eine moderne Sporthalle in der Gemeinde Aerodrom.",
      hu: "Modern sportcsarnok Aerodrom községben.",
      ro: "O arenă sportivă modernă în comuna Aerodrom.",
      en: "A modern sports arena in the Aerodrom municipality."
    }
  },
  {
    id: "aerodrom-park",
    type: "landmark",
    parent: "MK-058",
    coords: [21.4833, 41.9667],
    name: { de: "Aerodrom-Park", hu: "Aerodrom park", ro: "Parcul Aerodrom", en: "Aerodrom Park" },
    description: {
      de: "Ein beliebter Park für Bewohner der Gemeinde Aerodrom.",
      hu: "Népszerű park az Aerodrom község lakói számára.",
      ro: "Un parc popular pentru locuitorii comunei Aerodrom.",
      en: "A popular park for the residents of Aerodrom municipality."
    }
  },
  {
    id: "studenicani-markova",
    type: "landmark",
    parent: "MK-059",
    coords: [21.4000, 41.9000],
    name: { de: "Markova Reka", hu: "Markova Reka", ro: "Markova Reka", en: "Markova Reka" },
    description: {
      de: "Ein malerischer Fluss, der durch die Gemeinde Studeničani fließt.",
      hu: "Gömörű folyó, amely Studenicsani községen folyik keresztül.",
      ro: "Un râu pitoresc ce traversează comuna Studeničani.",
      en: "A picturesque river flowing through the Studeničani municipality."
    }
  },
  {
    id: "studenicani-falls",
    type: "landmark",
    parent: "MK-059",
    coords: [21.4500, 41.8500],
    name: { de: "Studeničani-Wasserfall", hu: "Studenicsani-vízesés", ro: "Cascada Studeničani", en: "Studeničani Waterfall" },
    description: {
      de: "Ein versteckter Wasserfall in der unberührten Natur.",
      hu: "Rejtett vízesés az érintetlen természetben.",
      ro: "O cascadă ascunsă în natura neatinsă.",
      en: "A hidden waterfall in the untouched nature."
    }
  },
  {
    id: "kiselavoda-springs",
    type: "landmark",
    parent: "MK-060",
    coords: [21.4500, 41.9667],
    name: { de: "Kisela-Voda-Quellen", hu: "Kisela Voda források", ro: "Izvoarele Kisela Voda", en: "Kisela Voda Springs" },
    description: {
      de: "Natürliche Mineralwasserquellen, nach denen die Gemeinde benannt ist.",
      hu: "Természetes ásványvízforrások, amelyekről a község a nevét kapta.",
      ro: "Izvoare naturale de apă minerală după care a fost numită comuna.",
      en: "Natural mineral water springs after which the municipality was named."
    }
  },
  {
    id: "kiselavoda-rasadnik",
    type: "landmark",
    parent: "MK-060",
    coords: [21.4500, 41.9500],
    name: { de: "Rasadnik-Park", hu: "Raszadnik park", ro: "Parcul Rasadnik", en: "Rasadnik Park" },
    description: {
      de: "Ein bedeutendes Erholungsgebiet in der Gemeinde Kisela Voda.",
      hu: "Fontos üdülőövezet Kisela Voda községben.",
      ro: "O zonă importantă de recreere în comuna Kisela Voda.",
      en: "A significant recreational area in the Kisela Voda municipality."
    }
  },
  {
    id: "probistip-lesnovo",
    type: "historical",
    parent: "MK-061",
    coords: [22.2333, 42.0167],
    name: { de: "Kloster Lesnovo", hu: "Lesnovói kolostor", ro: "Mănăstirea Lesnovo", en: "Lesnovo Monastery" },
    description: {
      de: "Eines der besterhaltenen mittelalterlichen Klöster in Nordmazedonien.",
      hu: "Észak-Macedónia egyik legjobb állapotban fennmaradt középkori kolostora.",
      ro: "Una dintre cele mai bine conservate mănăstiri medievale din Macedonia de Nord.",
      en: "One of the best-preserved medieval monasteries in North Macedonia."
    }
  },
  {
    id: "probistip-mining",
    type: "historical",
    parent: "MK-061",
    coords: [22.1833, 41.9933],
    name: { de: "Bergbaumuseum Probištip", hu: "Probisztipi bányászati múzeum", ro: "Muzeul Minier Probištip", en: "Probištip Mining Museum" },
    description: {
      de: "Ein Museum, das die lange Bergbautradition der Region zeigt.",
      hu: "A régió hosszú bányászati hagyományait bemutató múzeum.",
      ro: "Un muzeu ce prezintă lunga tradiție minieră a regiunii.",
      en: "A museum showcasing the region's long mining tradition."
    }
  },
  {
    id: "cheshinovo-storks",
    type: "landmark",
    parent: "MK-062",
    coords: [22.2833, 41.8667],
    name: { de: "Storchenkolonie Češinovo", hu: "Csesinovói gólyakolónia", ro: "Colonia de berze Češinovo", en: "Cheshinovo Stork Colony" },
    description: {
      de: "Bekannt für eine der größten Populationen von Weißstörchen.",
      hu: "A fehér gólyák egyik legnagyobb populációjáról ismert.",
      ro: "Cunoscută pentru una dintre cele mai mari populații de berze albe.",
      en: "Known for one of the largest populations of white storks."
    }
  },
  {
    id: "obleshevo-spa",
    type: "landmark",
    parent: "MK-062",
    coords: [22.2667, 41.8500],
    name: { de: "Heilbad Obleševo", hu: "Oblesevói gyógyfürdő", ro: "Băile Obleševo", en: "Obleshevo Spa" },
    description: {
      de: "Thermalquellen in der Nähe des Dorfes Obleševo.",
      hu: "Termálforrások Oblesevo falu közelében.",
      ro: "Izvoare termale în apropierea satului Obleševo.",
      en: "Thermal springs located near the village of Obleshevo."
    }
  },
  {
    id: "aracinovo-mosque",
    type: "historical",
    parent: "MK-063",
    coords: [21.5667, 42.0333],
    name: { de: "Moschee von Aračinovo", hu: "Aracsinovói mecset", ro: "Moscheea din Aračinovo", en: "Arachinovo Mosque" },
    description: {
      de: "Die markante Moschee im Zentrum von Aračinovo.",
      hu: "Jellegzetes mecset Aracsinovó központjában.",
      ro: "Moscheea distinctivă din centrul localității Aračinovo.",
      en: "The prominent mosque in the center of Arachinovo."
    }
  },
  {
    id: "aracinovo-church",
    type: "historical",
    parent: "MK-063",
    coords: [21.6000, 42.0167],
    name: { de: "Kirche hl. Georg (Aračinovo)", hu: "Szent György-templom (Aracsinovó)", ro: "Biserica Sf. Gheorghe (Aračinovo)", en: "Church of St. George (Arachinovo)" },
    description: {
      de: "Eine orthodoxe Kirche in der Region Aračinovo.",
      hu: "Ortodox templom Aracsinovó régiójában.",
      ro: "O biserică ortodoxă în regiunea Aračinovo.",
      en: "An Orthodox church in the Arachinovo region."
    }
  },
  {
    id: "zelenikovo-markova",
    type: "landmark",
    parent: "MK-064",
    coords: [21.5833, 41.8833],
    name: { de: "Markova Reka", hu: "Markova Reka", ro: "Markova Reka", en: "Markova Reka" },
    description: {
      de: "Ein malerischer Fluss, der durch die Gemeinde Zelenikovo fließt.",
      hu: "Gömörű folyó, amely Zelenikovo községen folyik keresztül.",
      ro: "Un râu pitoresc ce traversează comuna Zelenikovo.",
      en: "A picturesque river flowing through the Zelenikovo municipality."
    }
  },
  {
    id: "zelenikovo-st-nicholas",
    type: "historical",
    parent: "MK-064",
    coords: [21.5872, 41.8847],
    name: { de: "Kirche hl. Nikolaus", hu: "Szent Miklós-templom", ro: "Biserica Sf. Nicolae", en: "Church of St. Nicholas" },
    description: {
      de: "Eine lokale orthodoxe Kirche in Zelenikovo.",
      hu: "Helyi ortodox templom Zelenikovóban.",
      ro: "O biserică ortodoxă locală în Zelenikovo.",
      en: "A local Orthodox church in Zelenikovo."
    }
  },
  {
    id: "kicevo-fortress",
    type: "historical",
    parent: "MK-065",
    coords: [20.9583, 41.5147],
    name: { de: "Festung Kičevo", hu: "Kicsevói erőd", ro: "Fortăreața Kičevo", en: "Kičevo Fortress" },
    description: {
      de: "Überreste einer mittelalterlichen Festung auf dem Hügel Kita.",
      hu: "Középkori erőd maradványai a Kita-dombon.",
      ro: "Rămășițele unei fortărețe medievale pe dealul Kita.",
      en: "Remains of a medieval fortress on the Kita hill."
    }
  },
  {
    id: "kicevo-church",
    type: "historical",
    parent: "MK-065",
    coords: [20.9625, 41.5122],
    name: { de: "Kirche hl. Peter und Paul", hu: "Szent Péter és Pál-templom", ro: "Biserica Sf. Petru și Pavel", en: "Church of St. Peter and Paul" },
    description: {
      de: "Die Hauptkirche im Zentrum von Kičevo.",
      hu: "Kicsevo központjának főtemploma.",
      ro: "Biserica principală din centrul orașului Kičevo.",
      en: "The main church in the center of Kičevo."
    }
  },
  {
    id: "plasnica-mosque",
    type: "historical",
    parent: "MK-066",
    coords: [21.1233, 41.4675],
    name: { de: "Moschee von Plasnica", hu: "Plasznicai mecset", ro: "Moscheea din Plasnica", en: "Plasnica Mosque" },
    description: {
      de: "Eine der markanten Moscheen in der Gemeinde Plasnica.",
      hu: "Plasznyica község egyik jellegzetes mecsete.",
      ro: "Una dintre moscheile distinctive din comuna Plasnica.",
      en: "One of the prominent mosques in the Plasnica municipality."
    }
  },
  {
    id: "plasnica-treska",
    type: "landmark",
    parent: "MK-066",
    coords: [21.1200, 41.4600],
    name: { de: "Treska (Plasnica)", hu: "Treszka-folyó (Plasnica)", ro: "Râul Treska (Plasnica)", en: "River Treska (Plasnica)" },
    description: {
      de: "Der Fluss Treska fließt durch das fruchtbare Tal von Plasnica.",
      hu: "A Treszka-folyó keresztülfolyik Plasznyica termékeny völgyén.",
      ro: "Râul Treska traversează valea fertilă din Plasnica.",
      en: "The River Treska flows through the fertile valley of Plasnica."
    }
  },
  {
    id: "vranestica-st-elijah",
    type: "historical",
    parent: "MK-067",
    coords: [21.0233, 41.4450],
    name: { de: "Kirche hl. Elias", hu: "Szent Illés-templom", ro: "Biserica Sf. Ilie", en: "Church of St. Elijah" },
    description: {
      de: "Eine historische Dorfkirche in Vraneštica.",
      hu: "Történelmi falusi templom Vranesticában.",
      ro: "O biserică istorică de sat în Vraneštica.",
      en: "A historical village church in Vraneštica."
    }
  },
  {
    id: "vranestica-pottery",
    type: "landmark",
    parent: "MK-067",
    coords: [21.0250, 41.4460],
    name: { de: "Töpferei Vraneštica", hu: "Vranesticai fazekasság", ro: "Olăritul din Vraneštica", en: "Vraneštica Pottery" },
    description: {
      de: "Vraneštica ist bekannt für seine lange traditionelle Töpferei.",
      hu: "Vranestica híres hosszú fazekas hagyományairól.",
      ro: "Vraneštica este cunoscută pentru lunga sa tradiție în olărit.",
      en: "Vraneštica is known for its long tradition of pottery-making."
    }
  },
  {
    id: "skopje-city-museum",
    type: "historical",
    parent: "MK-068",
    coords: [21.4286, 41.9917],
    name: { de: "Museum der Stadt Skopje", hu: "Szkopje városi múzeum", ro: "Muzeul orașului Skopje", en: "Museum of the City of Skopje" },
    description: {
      de: "Das Museum befindet sich im alten Bahnhof, dessen Uhr bei dem Erdbeben von 1963 stehen blieb.",
      hu: "A múzeum a régi vasútállomáson található, amelynek órája az 1963-as földrengéskor megállt.",
      ro: "Muzeul este situat în vechea gară, al cărei ceas s-a oprit în timpul cutremurului din 1963.",
      en: "The museum is housed in the old railway station, whose clock stopped during the 1963 earthquake."
    }
  },
  {
    id: "skopje-mother-teresa",
    type: "historical",
    parent: "MK-068",
    coords: [21.4308, 41.9939],
    name: { de: "Mutter-Teresa-Gedenkhaus", hu: "Teréz anya emlékház", ro: "Casa Memorială Maica Tereza", en: "Mother Teresa Memorial House" },
    description: {
      de: "Ein Gedenkhaus gewidmet dem Leben und Werk von Mutter Teresa in ihrer Geburtsstadt.",
      hu: "Teréz anya életének és munkásságának szentelt emlékház szülővárosában.",
      ro: "O casă memorială dedicată vieții și activității Maicii Tereza în orașul ei natal.",
      en: "A memorial house dedicated to the life and work of Mother Teresa in her birthplace."
    }
  },
  {
    id: "lozovo-st-athanasius",
    type: "historical",
    parent: "MK-069",
    coords: [21.9017, 41.6811],
    name: { de: "Kirche hl. Athanasius (Lozovo)", hu: "Szent Atanáz-templom (Lozovo)", ro: "Biserica Sf. Atanasie (Lozovo)", en: "Church of St. Athanasius (Lozovo)" },
    description: {
      de: "Eine orthodoxe Kirche in der Gemeinde Lozovo.",
      hu: "Ortodox templom Lozovo községben.",
      ro: "O biserică ortodoxă în comuna Lozovo.",
      en: "An Orthodox church in the Lozovo municipality."
    }
  },
  {
    id: "lozovo-vineyards",
    type: "landmark",
    parent: "MK-069",
    coords: [21.9000, 41.6700],
    name: { de: "Lozovo-Weinberge", hu: "Lozovói szőlőültetvények", ro: "Podgoriile Lozovo", en: "Lozovo Vineyards" },
    description: {
      de: "Die Region ist für ihren Weinanbau und ihre weiten Weinberge bekannt.",
      hu: "A régió híres bortermeléséről és kiterjedt szőlőültetvényeiről.",
      ro: "Regiunea este renumită pentru viticultură și podgoriile sale vaste.",
      en: "The region is known for its wine production and extensive vineyards."
    }
  },
  {
    id: "snikole-bilazora",
    type: "historical",
    parent: "MK-070",
    coords: [21.9250, 41.8483],
    name: { de: "Bilazora", hu: "Bilazora", ro: "Bilazora", en: "Bilazora" },
    description: {
      de: "Eine antike Stadt der Paionier, bedeutende archäologische Stätte.",
      hu: "Paeóniai antik város, jelentős régészeti lelőhely.",
      ro: "Un oraș antic paionian, sit arheologic important.",
      en: "An ancient Paeonian city, a significant archaeological site."
    }
  },
  {
    id: "snikole-church",
    type: "historical",
    parent: "MK-070",
    coords: [21.9411, 41.8656],
    name: { de: "Kirche hl. Nikolaus (Sveti Nikole)", hu: "Szent Miklós-templom (Sveti Nikole)", ro: "Biserica Sf. Nicolae (Sveti Nikole)", en: "Church of St. Nicholas (Sveti Nikole)" },
    description: {
      de: "Die zentrale Kirche der Stadt Sveti Nikole.",
      hu: "Sveti Nikole városának központi temploma.",
      ro: "Biserica centrală din orașul Sveti Nikole.",
      en: "The central church of the town of Sveti Nikole."
    }
  },
  {
    id: "gradsko-stobi",
    type: "historical",
    parent: "MK-071",
    coords: [21.9750, 41.5517],
    name: { de: "Stobi", hu: "Stobi", ro: "Stobi", en: "Stobi" },
    description: {
      de: "Eine der berühmtesten antiken Städte Mazedoniens mit gut erhaltenen Mosaiken.",
      hu: "Macedónia egyik leghíresebb antik városa, jól megőrzött mozaikokkal.",
      ro: "Unul dintre cele mai faimoase orașe antice din Macedonia, cu mozaicuri bine conservate.",
      en: "One of the most famous ancient cities in Macedonia, with well-preserved mosaics."
    }
  },
  {
    id: "gradsko-station",
    type: "historical",
    parent: "MK-071",
    coords: [21.9433, 41.5767],
    name: { de: "Bahnhof Gradsko", hu: "Gradszkói vasútállomás", ro: "Gara Gradsko", en: "Gradsko Train Station" },
    description: {
      de: "Ein historisch wichtiger Eisenbahnknotenpunkt.",
      hu: "Történelmileg fontos vasúti csomópont.",
      ro: "Un nod feroviar important din punct de vedere istoric.",
      en: "A historically important railway junction."
    }
  },
  {
    id: "kratovo-towers",
    type: "historical",
    parent: "MK-072",
    coords: [22.1750, 42.0783],
    name: { de: "Mittelalterliche Türme von Kratovo", hu: "Kratovói középkori tornyok", ro: "Turnurile medievale din Kratovo", en: "Medieval Towers of Kratovo" },
    description: {
      de: "Kratovo ist bekannt für seine gut erhaltenen mittelalterlichen Wohntürme.",
      hu: "Kratovo híres a jól megőrzött középkori lakótornyairól.",
      ro: "Kratovo este renumit pentru turnurile sale medievale de locuit bine conservate.",
      en: "Kratovo is famous for its well-preserved medieval residential towers."
    }
  },
  {
    id: "kratovo-bridges",
    type: "historical",
    parent: "MK-072",
    coords: [22.1740, 42.0770],
    name: { de: "Steinbrücken von Kratovo", hu: "Kratovói kőhidak", ro: "Podurile de piatră din Kratovo", en: "Stone Bridges of Kratovo" },
    description: {
      de: "Mehrere alte Steinbrücken überspannen die tiefe Schlucht in der Stadt.",
      hu: "Számos régi kőhíd ível át a város mély szurdokán.",
      ro: "Mai multe poduri vechi de piatră traversează canionul adânc din oraș.",
      en: "Several old stone bridges span the deep gorge in the city."
    }
  },
  {
    id: "ilinden-industrial",
    type: "landmark",
    parent: "MK-073",
    coords: [21.5833, 41.9833],
    name: { de: "Gewerbegebiet Ilinden", hu: "Ilindeni ipari zóna", ro: "Zona Industrială Ilinden", en: "Ilinden Industrial Zone" },
    description: {
      de: "Eines der am schnellsten wachsenden Industriegebiete Mazedoniens.",
      hu: "Macedónia egyik leggyorsabban fejlődő ipari övezete.",
      ro: "Una dintre zonele industriale cu cea mai rapidă creștere din Macedonia.",
      en: "One of the fastest-growing industrial zones in Macedonia."
    }
  },
  {
    id: "ilinden-church",
    type: "historical",
    parent: "MK-073",
    coords: [21.5750, 41.9950],
    name: { de: "Kirche hl. Konstantin und Helena", hu: "Szent Konstantin és Heléna-templom", ro: "Biserica Sf. Constantin și Elena", en: "Church of St. Constantine and Helen" },
    description: {
      de: "Eine moderne orthodoxe Kirche in der Gemeinde Ilinden.",
      hu: "Modern ortodox templom Ilinden községben.",
      ro: "O biserică ortodoxă modernă în comuna Ilinden.",
      en: "A modern Orthodox church in the Ilinden municipality."
    }
  },
  {
    id: "karbinci-bargala",
    type: "historical",
    parent: "MK-074",
    coords: [22.2833, 41.8000],
    name: { de: "Bargala", hu: "Bargala", ro: "Bargala", en: "Bargala" },
    description: {
      de: "Eine spätrömische und frühbyzantinische befestigte Stadt.",
      hu: "Késő római és kora bizánci erődített város.",
      ro: "Un oraș fortificat din perioada romană târzie și bizantină timpurie.",
      en: "A late Roman and early Byzantine fortified city."
    }
  },
  {
    id: "karbinci-st-george",
    type: "historical",
    parent: "MK-074",
    coords: [22.2850, 41.7950],
    name: { de: "Kirche hl. Georg (Gorni Kozjak)", hu: "Szent György-templom (Gorni Kozjak)", ro: "Biserica Sf. Gheorghe (Gorni Kozjak)", en: "Church of St. George (Gorni Kozjak)" },
    description: {
      de: "Eine alte Kirche in der Nähe der archäologischen Stätte Bargala.",
      hu: "Régi templom a Bargala régészeti lelőhely közelében.",
      ro: "O biserică veche lângă situl arheologic Bargala.",
      en: "An old church located near the Bargala archaeological site."
    }
  },
  {
    id: "stip-isar",
    type: "historical",
    parent: "MK-075",
    coords: [22.1850, 41.7375],
    name: { de: "Isar-Festung", hu: "Iszar-erőd", ro: "Cetatea Isar", en: "Isar Fortress" },
    description: {
      de: "Mittelalterliche Festung, die die Stadt Štip dominiert.",
      hu: "Stip városát uraló középkori erőd.",
      ro: "Cetatea medievală care domină orașul Štip.",
      en: "Medieval fortress dominating the city of Štip."
    }
  },
  {
    id: "stip-bezisten",
    type: "historical",
    parent: "MK-075",
    coords: [22.1917, 41.7450],
    name: { de: "Bezisten von Štip", hu: "Stipi bezisztán", ro: "Bezistenul din Štip", en: "Bezisten of Štip" },
    description: {
      de: "Ein ehemaliger osmanischer überdachter Markt, heute eine Kunstgalerie.",
      hu: "Egykori oszmán fedett piac, ma művészeti galéria.",
      ro: "O fostă piață acoperită otomană, astăzi galerie de artă.",
      en: "A former Ottoman covered market, now an art gallery."
    }
  },
  {
    id: "kocani-lake-point",
    type: "lake",
    parent: "MK-076",
    coords: [22.3833, 41.9500],
    name: { de: "Kočani-See (Gradče)", hu: "Kocsanói-tó (Gradcse)", ro: "Lacul Kočani (Gradče)", en: "Kočani Lake (Gradče)" },
    description: {
      de: "Ein malerischer Stausee in der Nähe von Kočani.",
      hu: "Gömörű víztározó Kocsani közelében.",
      ro: "Un lac de acumulare pitoresc lângă Kočani.",
      en: "A picturesque reservoir located near Kočani."
    }
  },
  {
    id: "kocani-towers",
    type: "historical",
    parent: "MK-076",
    coords: [22.4111, 41.9167],
    name: { de: "Mittelalterliche Türme von Kočani", hu: "Kocsanói középkori tornyok", ro: "Turnurile medievale din Kočani", en: "Medieval Towers of Kočani" },
    description: {
      de: "Zwei mittelalterliche Wohntürme im Zentrum der Stadt.",
      hu: "Két középkori lakótorony a város központjában.",
      ro: "Două turnuri medievale de locuit în centrul orașului.",
      en: "Two medieval residential towers in the center of the city."
    }
  },
  {
    id: "zrnovci-river-point",
    type: "landmark",
    parent: "MK-077",
    coords: [22.4500, 41.8500],
    name: { de: "Zrnovci-Fluss", hu: "Zrnovci-folyó", ro: "Râul Zrnovci", en: "Zrnovci River" },
    description: {
      de: "Ein sauberer Gebirgsfluss, der durch das Dorf Zrnovci fließt.",
      hu: "Tiszta hegyi folyó, amely Zrnovci falun folyik keresztül.",
      ro: "Un râu de munte curat care traversează satul Zrnovci.",
      en: "A clean mountain river flowing through the village of Zrnovci."
    }
  },
  {
    id: "zrnovci-church",
    type: "historical",
    parent: "MK-077",
    coords: [22.4333, 41.8533],
    name: { de: "Kirche hl. Demetrius (Zrnovci)", hu: "Szent Demeter-templom (Zrnovci)", ro: "Biserica Sf. Dumitru (Zrnovci)", en: "Church of St. Demetrius (Zrnovci)" },
    description: {
      de: "Die Hauptkirche im Dorf Zrnovci.",
      hu: "Zrnovci falu főtemploma.",
      ro: "Biserica principală din satul Zrnovci.",
      en: "The main church in the village of Zrnovci."
    }
  },
  {
    id: "veles-kosturnica",
    type: "historical",
    parent: "MK-078",
    coords: [21.7850, 41.7111],
    name: { de: "Kosturnica-Denkmal", hu: "Koszturnica emlékmű", ro: "Monumentul Kosturnica", en: "Kosturnica Memorial" },
    description: {
      de: "Ein monumentales Beinhaus zum Gedenken an die Kämpfer des Zweiten Weltkriegs.",
      hu: "Monumentális csontház a második világháború harcosainak emlékére.",
      ro: "Un osuar monumental dedicat luptătorilor din al Doilea Război Mondial.",
      en: "A monumental ossuary commemorating the fighters of World War II."
    }
  },
  {
    id: "veles-mladost",
    type: "lake",
    parent: "MK-078",
    coords: [21.7667, 41.7667],
    name: { de: "Mladost-See", hu: "Mladost-tó", ro: "Lacul Mladost", en: "Lake Mladost" },
    description: {
      de: "Ein beliebtes Naherholungsgebiet in der Nähe von Veles.",
      hu: "Népszerű pihenőhely Veles közelében.",
      ro: "O zonă de recreere populară în apropiere de Veles.",
      en: "A popular recreational area near Veles."
    }
  },
  {
    id: "dkapija-gorge",
    type: "landmark",
    parent: "MK-079",
    coords: [22.2500, 41.4000],
    name: { de: "Demir-Kapija-Schlucht", hu: "Demir Kapija-szurdok", ro: "Defileul Demir Kapija", en: "Demir Kapija Gorge" },
    description: {
      de: "Eine beeindruckende Schlucht des Flusses Vardar.",
      hu: "A Vardar-folyó lenyűgöző szurdoka.",
      ro: "Un defileu impresionant al râului Vardar.",
      en: "A stunning gorge of the Vardar river."
    }
  },
  {
    id: "dkapija-winery",
    type: "historical",
    parent: "MK-079",
    coords: [22.2417, 41.4111],
    name: { de: "Weingut Königin Maria", hu: "Mária királyné borászat", ro: "Vinăria Regina Maria", en: "Queen Maria Winery" },
    description: {
      de: "Die älteste Weinkellerei auf dem Balkan, gegründet von König Alexander Karadjordjevic.",
      hu: "A Balkán legrégebbi borászata, I. Sándor jugoszláv király alapította.",
      ro: "Cea mai veche vinărie din Balcani, fondată de regele Alexandru Karadjordjevic.",
      en: "The oldest winery in the Balkans, founded by King Alexander Karadjordjevic."
    }
  },
  {
    id: "vinica-fortress",
    type: "historical",
    parent: "MK-080",
    coords: [22.5000, 41.8833],
    name: { de: "Vinica-Festung", hu: "Vinicai erőd", ro: "Cetatea Vinica", en: "Vinica Fortress" },
    description: {
      de: "Eine antike Festung, berühmt für den Fund der Terrakotta-Ikonen.",
      hu: "Antik erőd, amely a terrakotta ikonok lelőhelyeként híres.",
      ro: "O cetate antică, faimoasă pentru descoperirea icoanelor de teracotă.",
      en: "An ancient fortress, famous for the discovery of terracotta icons."
    }
  },
  {
    id: "vinica-museum",
    type: "historical",
    parent: "MK-080",
    coords: [22.5083, 41.8817],
    name: { de: "Vinica Terracotta-Museum", hu: "Vinicai Terrakotta Múzeum", ro: "Muzeul de Teracotă din Vinica", en: "Vinica Terracotta Museum" },
    description: {
      de: "Beherbergt die einzigartige Sammlung frühchristlicher Terrakotta-Ikonen.",
      hu: "A kora keresztény terrakotta ikonok egyedülálló gyűjteményének ad otthont.",
      ro: "Găzduiește o colecție unică de icoane de teracotă timpurii creștine.",
      en: "Houses the unique collection of early Christian terracotta icons."
    }
  },
  {
    id: "bosilovo-wetlands",
    type: "landmark",
    parent: "MK-081",
    coords: [22.7500, 41.4167],
    name: { de: "Monospitovo-Sumpf", hu: "Monoszpitovói-mocsár", ro: "Mlaștina Monospitovo", en: "Monospitovo Wetlands" },
    description: {
      de: "Das größte Sumpfgebiet in Nordmazedonien mit reicher Biodiversität.",
      hu: "Észak-Macedónia legnagyobb mocsaras területe, gazdag élővilággal.",
      ro: "Cea mai mare zonă mlăștinoasă din Macedonia de Nord, cu o biodiversitate bogată.",
      en: "The largest wetland area in North Macedonia with rich biodiversity."
    }
  },
  {
    id: "bosilovo-church",
    type: "historical",
    parent: "MK-081",
    coords: [22.7300, 41.4300],
    name: { de: "Kirche hl. Athanasius (Bosilovo)", hu: "Szent Atanáz-templom (Bosilovo)", ro: "Biserica Sf. Atanasie (Bosilovo)", en: "Church of St. Athanasius (Bosilovo)" },
    description: {
      de: "Eine orthodoxe Kirche in der Gemeinde Bosilovo.",
      hu: "Ortodox templom Boszilovo községben.",
      ro: "O biserică ortodoxă în comuna Bosilovo.",
      en: "An Orthodox church in the Bosilovo municipality."
    }
  },
  {
    id: "radovis-trinity",
    type: "historical",
    parent: "MK-082",
    coords: [22.4667, 41.6333],
    name: { de: "Kirche der Heiligen Dreifaltigkeit", hu: "Szentháromság-templom", ro: "Biserica Sfânta Treime", en: "Church of the Holy Trinity" },
    description: {
      de: "Eine der prachtvollsten orthodoxen Kirchen Mazedoniens.",
      hu: "Macedónia egyik legpompásabb ortodox temploma.",
      ro: "Una dintre cele mai somptuoase biserici ortodoxe din Macedonia.",
      en: "One of the most magnificent Orthodox churches in Macedonia."
    }
  },
  {
    id: "radovis-clock",
    type: "historical",
    parent: "MK-082",
    coords: [22.4650, 41.6350],
    name: { de: "Uhrturm Radoviš", hu: "Radovisi óratorony", ro: "Turnul cu Ceas din Radoviš", en: "Radoviš Clock Tower" },
    description: {
      de: "Ein historischer Uhrturm im Stadtzentrum.",
      hu: "Történelmi óratorony a városközpontban.",
      ro: "Un turn cu ceas istoric în centrul orașului.",
      en: "A historical clock tower in the city center."
    }
  },
  {
    id: "vasilevo-park-nature",
    type: "landmark",
    parent: "MK-083",
    coords: [22.6333, 41.4833],
    name: { de: "Vasilevo-Park", hu: "Vaszilevói park", ro: "Parcul Vasilevo", en: "Vasilevo Park" },
    description: {
      de: "Ein Erholungsgebiet in der Gemeinde Vasilevo.",
      hu: "Üdülőövezet Vaszilevo községben.",
      ro: "O zonă de recreere în comuna Vasilevo.",
      en: "A recreational area in the Vasilevo municipality."
    }
  },
  {
    id: "vasilevo-church-geo",
    type: "historical",
    parent: "MK-083",
    coords: [22.6300, 41.4800],
    name: { de: "Kirche hl. Georg (Vasilevo)", hu: "Szent György-templom (Vasilevo)", ro: "Biserica Sf. Gheorghe (Vasilevo)", en: "Church of St. George (Vasilevo)" },
    description: {
      de: "Eine orthodoxe Kirche in der Region Vasilevo.",
      hu: "Ortodox templom Vaszilevo régióban.",
      ro: "O biserică ortodoxă în regiunea Vasilevo.",
      en: "An Orthodox church in the Vasilevo region."
    }
  },
  {
    id: "konce-st-stephen",
    type: "historical",
    parent: "MK-084",
    coords: [22.3833, 41.5000],
    name: { de: "Kloster hl. Stephan", hu: "Szent István-kolostor", ro: "Mănăstirea Sf. Ștefan", en: "Monastery of St. Stephen" },
    description: {
      de: "Ein mittelalterliches Kloster im Dorf Konče.",
      hu: "Középkori kolostor Koncse faluban.",
      ro: "O mănăstire medievală în satul Konče.",
      en: "A medieval monastery in the village of Konče."
    }
  },
  {
    id: "konce-mantovo",
    type: "lake",
    parent: "MK-084",
    coords: [22.3333, 41.5333],
    name: { de: "Mantovo-See", hu: "Mantovói-tó", ro: "Lacul Mantovo", en: "Mantovo Lake" },
    description: {
      de: "Ein Stausee, bekannt für seine bizarren Felsformationen in der Umgebung.",
      hu: "Víztározó, amely a környékén található különös sziklaformációkról ismert.",
      ro: "Un lac de acumulare cunoscut pentru formațiunile stâncoase bizare din jur.",
      en: "A reservoir known for the bizarre rock formations in its surroundings."
    }
  }
];
