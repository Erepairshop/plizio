import type { DeductionLevelTemplate, DeductionLocale, DeductionLevelView } from "./deductionContent";
import { materializeDeductionLevels } from "./deductionContent";

const DEDUCTIONGRID_LEVELS: DeductionLevelTemplate[] = [
  {
    level: 1,
    badge: "🛶",
    title: {
      en: "Harbor Shift",
      hu: "Kikötői váltás",
      de: "Hafenwechsel",
      ro: "Schimb de port",
    },
    rows: ["Ada", "Ben", "Cara"],
    columns: ["Tower", "Garden", "Dock"],
    cluePacks: {
      en: [
        ["Ada is not at the Tower.", "Ben is not in the Garden.", "Ben is at the Dock.", "Cara is not in the Garden."],
        ["Ben is at the Dock.", "Ada is in the Garden.", "Cara is not at the Dock."],
        ["Cara is at the Tower.", "Ada is in the Garden.", "Ben is not at the Tower."]
      ],
      hu: [
        ["Ada nem a Toronynál van.", "Ben nincs a Kertben.", "Ben a Kikötőben van.", "Cara nincs a Kertben."],
        ["Ben a Kikötőben van.", "Ada a Kertben van.", "Cara nincs a Kikötőben."],
        ["Cara a Toronynál van.", "Ada a Kertben van.", "Ben nem a Toronynál van."]
      ],
      de: [
        ["Ada ist nicht am Turm.", "Ben ist nicht im Garten.", "Ben ist am Dock.", "Cara ist nicht im Garten."],
        ["Ben ist am Dock.", "Ada ist im Garten.", "Cara ist nicht am Dock."],
        ["Cara ist am Turm.", "Ada ist im Garten.", "Ben ist nicht am Turm."]
      ],
      ro: [
        ["Ada nu este la Turn.", "Ben nu este în Grădină.", "Ben este la Debarcader.", "Cara nu este în Grădină."],
        ["Ben este la Debarcader.", "Ada este în Grădină.", "Cara nu este la Debarcader."],
        ["Cara este la Turn.", "Ada este în Grădină.", "Ben nu este la Turn."]
      ]
    },
    solution: [1, 2, 0],
  },
  {
    level: 2,
    badge: "🌙",
    title: {
      en: "Moon Base",
      hu: "Holdbázis",
      de: "Mondbasis",
      ro: "Bază lunară",
    },
    rows: ["Leo", "Mia", "Nora"],
    columns: ["Library", "Harbor", "Observatory"],
    cluePacks: {
      en: [
        ["Leo is not in the Library.", "Mia is not at the Observatory.", "Nora is at the Harbor.", "Nora is not in the Library."],
        ["Leo is at the Observatory.", "Nora is not at the Observatory.", "Mia is at the Library."],
        ["Mia is in the Library.", "Leo is at the Observatory.", "Nora is not in the Library."]
      ],
      hu: [
        ["Leo nincs a Könyvtárban.", "Mia nincs a Csillagvizsgálóban.", "Nora a Kikötőben van.", "Nora nincs a Könyvtárban."],
        ["Leo a Csillagvizsgálóban van.", "Nora nincs a Csillagvizsgálóban.", "Mia a Könyvtárban van."],
        ["Mia a Könyvtárban van.", "Leo a Csillagvizsgálóban van.", "Nora nincs a Könyvtárban."]
      ],
      de: [
        ["Leo ist nicht in der Bibliothek.", "Mia ist nicht im Observatorium.", "Nora ist im Hafen.", "Nora ist nicht in der Bibliothek."],
        ["Leo ist im Observatorium.", "Nora ist nicht im Observatorium.", "Mia ist in der Bibliothek."],
        ["Mia ist in der Bibliothek.", "Leo ist im Observatorium.", "Nora ist nicht in der Bibliothek."]
      ],
      ro: [
        ["Leo nu este în bibliotecă.", "Mia nu este la observator.", "Nora este în port.", "Nora nu este în bibliotecă."],
        ["Leo este la observator.", "Nora nu este la observator.", "Mia este în bibliotecă."],
        ["Mia este în bibliotecă.", "Leo este la observator.", "Nora nu este în bibliotecă."]
      ]
    },
    solution: [2, 0, 1],
  },
  {
    level: 3,
    badge: "🏰",
    title: {
      en: "Castle Night",
      hu: "Kastélyi éjszaka",
      de: "Burgnacht",
      ro: "Noaptea castelului",
    },
    rows: ["Arin", "Bo", "Cora"],
    columns: ["Museum", "Station", "Lighthouse"],
    cluePacks: {
      en: [
        ["Arin is not in the Museum.", "Bo is not at the Station.", "Bo is at the Lighthouse.", "Cora is not at the Lighthouse."],
        ["Bo is at the Lighthouse.", "Arin is at the Station.", "Cora is in the Museum."],
        ["Cora is in the Museum.", "Bo is at the Lighthouse.", "Arin is not in the Museum."]
      ],
      hu: [
        ["Arin nincs a Múzeumban.", "Bo nincs az Állomáson.", "Bo az Útjelző toronynál van.", "Cora nincs az Útjelző toronynál."],
        ["Bo az Útjelző toronynál van.", "Arin az Állomáson van.", "Cora a Múzeumban van."],
        ["Cora a Múzeumban van.", "Bo az Útjelző toronynál van.", "Arin nincs a Múzeumban."]
      ],
      de: [
        ["Arin ist nicht im Museum.", "Bo ist nicht an der Station.", "Bo ist am Leuchtturm.", "Cora ist nicht am Leuchtturm."],
        ["Bo ist am Leuchtturm.", "Arin ist an der Station.", "Cora ist im Museum."],
        ["Cora ist im Museum.", "Bo ist am Leuchtturm.", "Arin ist nicht im Museum."]
      ],
      ro: [
        ["Arin nu este în muzeu.", "Bo nu este la stație.", "Bo este la far.", "Cora nu este la far."],
        ["Bo este la far.", "Arin este la stație.", "Cora este în muzeu."],
        ["Cora este în muzeu.", "Bo este la far.", "Arin nu este în muzeu."]
      ]
    },
    solution: [1, 2, 0],
  },
  {
    level: 4,
    badge: "🌱",
    title: {
      en: "Greenhouse Route",
      hu: "Üvegházi útvonal",
      de: "Gewächshausroute",
      ro: "Ruta serei",
    },
    rows: ["Ema", "Finn", "Gala"],
    columns: ["Bakery", "Workshop", "Greenhouse"],
    cluePacks: {
      en: [
        ["Ema is not in the Greenhouse.", "Finn is not in the Bakery.", "Gala is in the Workshop.", "Gala is not in the Greenhouse."],
        ["Ema is in the Bakery.", "Finn is in the Greenhouse.", "Gala is not in the Bakery."],
        ["Finn is in the Greenhouse.", "Ema is at the Bakery.", "Gala is not in the Greenhouse."]
      ],
      hu: [
        ["Ema nincs az Üvegházban.", "Finn nincs a Péküzemben.", "Gala a Műhelyben van.", "Gala nincs az Üvegházban."],
        ["Ema a Péküzemben van.", "Finn az Üvegházban van.", "Gala nincs a Péküzemben."],
        ["Finn az Üvegházban van.", "Ema a Péküzemben van.", "Gala nincs az Üvegházban."]
      ],
      de: [
        ["Ema ist nicht im Gewächshaus.", "Finn ist nicht in der Bäckerei.", "Gala ist in der Werkstatt.", "Gala ist nicht im Gewächshaus."],
        ["Ema ist in der Bäckerei.", "Finn ist im Gewächshaus.", "Gala ist nicht in der Bäckerei."],
        ["Finn ist im Gewächshaus.", "Ema ist in der Bäckerei.", "Gala ist nicht im Gewächshaus."]
      ],
      ro: [
        ["Ema nu este în seră.", "Finn nu este la brutărie.", "Gala este în atelier.", "Gala nu este în seră."],
        ["Ema este la brutărie.", "Finn este în seră.", "Gala nu este la brutărie."],
        ["Finn este în seră.", "Ema este la brutărie.", "Gala nu este în seră."]
      ]
    },
    solution: [0, 2, 1],
  },
  {
    level: 5,
    badge: "🔒",
    title: {
      en: "Vault Search",
      hu: "Páncélterem-keresés",
      de: "Tresorsuche",
      ro: "Căutarea seifului",
    },
    rows: ["Hugo", "Iris", "Juno"],
    columns: ["Vault", "Atrium", "Garden"],
    cluePacks: {
      en: [
        ["Hugo is not in the Vault.", "Iris is not in the Atrium.", "Iris is in the Vault.", "Juno is not in the Garden."],
        ["Hugo is in the Garden.", "Iris is in the Vault.", "Juno is in the Atrium."],
        ["Iris is in the Vault.", "Hugo is in the Garden.", "Juno is not in the Vault."]
      ],
      hu: [
        ["Hugo nincs a Páncélteremben.", "Iris nincs az Atriumban.", "Iris a Páncélteremben van.", "Juno nincs a Kertben."],
        ["Hugo a Kertben van.", "Iris a Páncélteremben van.", "Juno az Atriumban van."],
        ["Iris a Páncélteremben van.", "Hugo a Kertben van.", "Juno nincs a Páncélteremben."]
      ],
      de: [
        ["Hugo ist nicht im Tresorraum.", "Iris ist nicht im Atrium.", "Iris ist im Tresorraum.", "Juno ist nicht im Garten."],
        ["Hugo ist im Garten.", "Iris ist im Tresorraum.", "Juno ist im Atrium."],
        ["Iris ist im Tresorraum.", "Hugo ist im Garten.", "Juno ist nicht im Tresorraum."]
      ],
      ro: [
        ["Hugo nu este în seif.", "Iris nu este în atrium.", "Iris este în seif.", "Juno nu este în grădină."],
        ["Hugo este în grădină.", "Iris este în seif.", "Juno este în atrium."],
        ["Iris este în seif.", "Hugo este în grădină.", "Juno nu este în seif."]
      ]
    },
    solution: [2, 0, 1],
  },
  {
    level: 6,
    badge: "🧭",
    title: {
      en: "Bridge Line",
      hu: "Hídlánc",
      de: "Brückenlinie",
      ro: "Linia podului",
    },
    rows: ["Kai", "Lina", "Milo"],
    columns: ["Bridge", "Crypt", "Courtyard"],
    cluePacks: {
      en: [
        ["Kai is not on the Bridge.", "Lina is not in the Crypt.", "Milo is on the Bridge.", "Milo is not in the Courtyard."],
        ["Kai is in the Crypt.", "Lina is in the Courtyard.", "Milo is on the Bridge."],
        ["Milo is on the Bridge.", "Kai is in the Crypt.", "Lina is not on the Bridge."]
      ],
      hu: [
        ["Kai nincs a Hídon.", "Lina nincs a Kriptában.", "Milo a Hídon van.", "Milo nincs az Udvaron."],
        ["Kai a Kriptában van.", "Lina az Udvaron van.", "Milo a Hídon van."],
        ["Milo a Hídon van.", "Kai a Kriptában van.", "Lina nincs a Hídon."]
      ],
      de: [
        ["Kai ist nicht auf der Brücke.", "Lina ist nicht in der Krypta.", "Milo ist auf der Brücke.", "Milo ist nicht im Innenhof."],
        ["Kai ist in der Krypta.", "Lina ist im Innenhof.", "Milo ist auf der Brücke."],
        ["Milo ist auf der Brücke.", "Kai ist in der Krypta.", "Lina ist nicht auf der Brücke."]
      ],
      ro: [
        ["Kai nu este pe pod.", "Lina nu este în criptă.", "Milo este pe pod.", "Milo nu este în curte."],
        ["Kai este în criptă.", "Lina este în curte.", "Milo este pe pod."],
        ["Milo este pe pod.", "Kai este în criptă.", "Lina nu este pe pod."]
      ]
    },
    solution: [1, 2, 0],
  },
  {
    level: 7,
    badge: "🗼",
    title: {
      en: "Clocktower Run",
      hu: "Óratorony futam",
      de: "Uhrturm-Lauf",
      ro: "Curse la turnul cu ceas",
    },
    rows: ["Nia", "Otto", "Pia"],
    columns: ["Clocktower", "Docks", "Plaza"],
    cluePacks: {
      en: [
        ["Nia is not in the Plaza.", "Otto is not at the Docks.", "Pia is at the Docks.", "Pia is not at the Clocktower."],
        ["Nia is at the Clocktower.", "Otto is in the Plaza.", "Pia is at the Docks."],
        ["Pia is at the Docks.", "Nia is at the Clocktower.", "Otto is not at the Docks."]
      ],
      hu: [
        ["Nia nincs a Téren.", "Otto nincs a Rakparton.", "Pia a Rakparton van.", "Pia nincs az Óratoronynál."],
        ["Nia az Óratoronynál van.", "Otto a Téren van.", "Pia a Rakparton van."],
        ["Pia a Rakparton van.", "Nia az Óratoronynál van.", "Otto nincs a Rakparton."]
      ],
      de: [
        ["Nia ist nicht auf dem Platz.", "Otto ist nicht an den Docks.", "Pia ist an den Docks.", "Pia ist nicht am Uhrturm."],
        ["Nia ist am Uhrturm.", "Otto ist auf dem Platz.", "Pia ist an den Docks."],
        ["Pia ist an den Docks.", "Nia ist am Uhrturm.", "Otto ist nicht an den Docks."]
      ],
      ro: [
        ["Nia nu este în piață.", "Otto nu este la dane.", "Pia este la dane.", "Pia nu este la turnul cu ceas."],
        ["Nia este la turnul cu ceas.", "Otto este în piață.", "Pia este la dane."],
        ["Pia este la dane.", "Nia este la turnul cu ceas.", "Otto nu este la dane."]
      ]
    },
    solution: [0, 2, 1],
  },
  {
    level: 8,
    badge: "🌿",
    title: {
      en: "Conservatory Path",
      hu: "Télikert út",
      de: "Wintergartenpfad",
      ro: "Traseul conservatorului",
    },
    rows: ["Quin", "Ria", "Sol"],
    columns: ["Conservatory", "Harbor", "Library"],
    cluePacks: {
      en: [
        ["Quin is not in the Harbor.", "Ria is not in the Library.", "Sol is in the Conservatory.", "Sol is not in the Harbor."],
        ["Quin is in the Library.", "Ria is in the Harbor.", "Sol is in the Conservatory."],
        ["Sol is in the Conservatory.", "Quin is in the Library.", "Ria is not in the Library."]
      ],
      hu: [
        ["Quin nincs a Kikötőben.", "Ria nincs a Könyvtárban.", "Sol a Télikertben van.", "Sol nincs a Kikötőben."],
        ["Quin a Könyvtárban van.", "Ria a Kikötőben van.", "Sol a Télikertben van."],
        ["Sol a Télikertben van.", "Quin a Könyvtárban van.", "Ria nincs a Könyvtárban."]
      ],
      de: [
        ["Quin ist nicht im Hafen.", "Ria ist nicht in der Bibliothek.", "Sol ist im Wintergarten.", "Sol ist nicht im Hafen."],
        ["Quin ist in der Bibliothek.", "Ria ist im Hafen.", "Sol ist im Wintergarten."],
        ["Sol ist im Wintergarten.", "Quin ist in der Bibliothek.", "Ria ist nicht in der Bibliothek."]
      ],
      ro: [
        ["Quin nu este în port.", "Ria nu este în bibliotecă.", "Sol este în conservator.", "Sol nu este în port."],
        ["Quin este în bibliotecă.", "Ria este în port.", "Sol este în conservator."],
        ["Sol este în conservator.", "Quin este în bibliotecă.", "Ria nu este în bibliotecă."]
      ]
    },
    solution: [2, 1, 0],
  },
  {
    level: 9,
    badge: "⚙️",
    title: {
      en: "Engine Room",
      hu: "Gépterem",
      de: "Maschinenraum",
      ro: "Camera motoarelor",
    },
    rows: ["Taro", "Uma", "Vale"],
    columns: ["Engine Room", "Gallery", "Basement"],
    cluePacks: {
      en: [
        ["Taro is not in the Engine Room.", "Uma is not in the Gallery.", "Vale is in the Basement.", "Vale is not in the Engine Room."],
        ["Taro is in the Gallery.", "Uma is in the Engine Room.", "Vale is in the Basement."],
        ["Vale is in the Basement.", "Taro is in the Gallery.", "Uma is not in the Gallery."]
      ],
      hu: [
        ["Taro nincs a Gépteremben.", "Uma nincs a Galériában.", "Vale az Alagsorban van.", "Vale nincs a Gépteremben."],
        ["Taro a Galériában van.", "Uma a Gépteremben van.", "Vale az Alagsorban van."],
        ["Vale az Alagsorban van.", "Taro a Galériában van.", "Uma nincs a Galériában."]
      ],
      de: [
        ["Taro ist nicht im Maschinenraum.", "Uma ist nicht in der Galerie.", "Vale ist im Keller.", "Vale ist nicht im Maschinenraum."],
        ["Taro ist in der Galerie.", "Uma ist im Maschinenraum.", "Vale ist im Keller."],
        ["Vale ist im Keller.", "Taro ist in der Galerie.", "Uma ist nicht in der Galerie."]
      ],
      ro: [
        ["Taro nu este în camera motoarelor.", "Uma nu este în galerie.", "Vale este în subsol.", "Vale nu este în camera motoarelor."],
        ["Taro este în galerie.", "Uma este în camera motoarelor.", "Vale este în subsol."],
        ["Vale este în subsol.", "Taro este în galerie.", "Uma nu este în galerie."]
      ]
    },
    solution: [1, 0, 2],
  },
  {
    level: 10,
    badge: "✨",
    title: {
      en: "Final Archive",
      hu: "Végső archívum",
      de: "Endarchiv",
      ro: "Arhiva finală",
    },
    rows: ["Wren", "Zia", "Yori"],
    columns: ["Observatory", "Chapel", "Archive"],
    cluePacks: {
      en: [
        ["Wren is not in the Archive.", "Zia is not at the Observatory.", "Yori is in the Chapel.", "Yori is not in the Archive."],
        ["Wren is in the Observatory.", "Zia is in the Archive.", "Yori is in the Chapel."],
        ["Yori is in the Chapel.", "Wren is in the Observatory.", "Zia is not in the Observatory."]
      ],
      hu: [
        ["Wren nincs az Archívumban.", "Zia nincs a Csillagvizsgálóban.", "Yori a Kápolnában van.", "Yori nincs az Archívumban."],
        ["Wren a Csillagvizsgálóban van.", "Zia az Archívumban van.", "Yori a Kápolnában van."],
        ["Yori a Kápolnában van.", "Wren a Csillagvizsgálóban van.", "Zia nincs a Csillagvizsgálóban."]
      ],
      de: [
        ["Wren ist nicht im Archiv.", "Zia ist nicht im Observatorium.", "Yori ist in der Kapelle.", "Yori ist nicht im Archiv."],
        ["Wren ist im Observatorium.", "Zia ist im Archiv.", "Yori ist in der Kapelle."],
        ["Yori ist in der Kapelle.", "Wren ist im Observatorium.", "Zia ist nicht im Observatorium."]
      ],
      ro: [
        ["Wren nu este în arhivă.", "Zia nu este la observator.", "Yori este în capelă.", "Yori nu este în arhivă."],
        ["Wren este la observator.", "Zia este în arhivă.", "Yori este în capelă."],
        ["Yori este în capelă.", "Wren este la observator.", "Zia nu este la observator."]
      ]
    },
    solution: [0, 2, 1],
  },
];

export function getDeductionGridLevels(lang: DeductionLocale, runSeed: number): DeductionLevelView[] {
  return materializeDeductionLevels(DEDUCTIONGRID_LEVELS, lang, runSeed);
}
