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
  }
];
